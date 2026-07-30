import { db } from "./db";

/**
 * Usage logging for the MCP endpoint (P1 #11 of docs/mcp-server-plan.md):
 * which tools get called, what people ask, and — most valuably — which
 * queries come back empty. Misses become new eval cases; call volume is the
 * adoption evidence.
 *
 * Contract: logging must never break a tool call. Every failure is swallowed
 * (logged to the function console only), and the schema is created lazily so
 * the endpoint keeps working against a database that has never seen it.
 */

interface UsageEntry {
  tool: string;
  query: string | null;
  args: Record<string, unknown>;
  resultCount: number | null;
  miss: boolean;
  error: boolean;
  durationMs: number;
}

type ToolJson = { content: { type: "text"; text: string }[] };

let tableReady: Promise<unknown> | null = null;

function ensureTable(): Promise<unknown> {
  tableReady ??= db()`
    CREATE TABLE IF NOT EXISTS mcp_usage (
      id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      at timestamptz NOT NULL DEFAULT now(),
      tool text NOT NULL,
      query text,
      args jsonb,
      result_count int,
      miss boolean NOT NULL DEFAULT false,
      error boolean NOT NULL DEFAULT false,
      duration_ms int
    )`;
  return tableReady;
}

async function logUsage(entry: UsageEntry): Promise<void> {
  try {
    await ensureTable();
    const sql = db();
    await sql`
      INSERT INTO mcp_usage (tool, query, args, result_count, miss, error, duration_ms)
      VALUES (${entry.tool}, ${entry.query}, ${JSON.stringify(entry.args)}::jsonb,
              ${entry.resultCount}, ${entry.miss}, ${entry.error}, ${entry.durationMs})`;
  } catch (err) {
    tableReady = null; // retry table creation on the next call
    console.error(`usage logging failed for ${entry.tool}:`, err);
  }
}

/** The arg most useful to read back later, per tool shape. */
const QUERYISH_KEYS = ["query", "tag", "name", "subject", "path"] as const;
/** Payload keys whose size tells hit vs miss, per tool shape. */
const COUNTABLE_KEYS = ["results", "tokens", "components", "subjects", "classes"] as const;

function outcome(res: ToolJson): { resultCount: number | null; miss: boolean } {
  try {
    const payload = JSON.parse(res.content[0]?.text ?? "null") as Record<string, unknown> | null;
    if (payload && typeof payload === "object") {
      if ("error" in payload) return { resultCount: 0, miss: true };
      for (const key of COUNTABLE_KEYS) {
        const value = payload[key];
        if (Array.isArray(value)) return { resultCount: value.length, miss: value.length === 0 };
        if (value && typeof value === "object") {
          const n = Object.keys(value).length;
          return { resultCount: n, miss: n === 0 };
        }
      }
    }
    return { resultCount: null, miss: false };
  } catch {
    return { resultCount: null, miss: false };
  }
}

/** Wrap a tool handler so every call — and its hit/miss outcome — is recorded. */
export function logged<A extends Record<string, unknown>>(
  tool: string,
  handler: (args: A) => Promise<ToolJson>,
): (args: A) => Promise<ToolJson> {
  return async (args: A): Promise<ToolJson> => {
    const started = Date.now();
    const queryish = QUERYISH_KEYS.map((k) => args[k]).find((v): v is string => typeof v === "string") ?? null;
    try {
      const res = await handler(args);
      await logUsage({ tool, query: queryish, args, ...outcome(res), error: false, durationMs: Date.now() - started });
      return res;
    } catch (err) {
      await logUsage({ tool, query: queryish, args, resultCount: null, miss: false, error: true, durationMs: Date.now() - started });
      throw err;
    }
  };
}
