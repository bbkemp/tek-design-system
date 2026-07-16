import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { db } from "./db";
import { embedQuery } from "./voyage";
import { rerank } from "./cohere";

export const SERVER_NAME = "tek-mcp-endpoint";
export const SERVER_VERSION = "0.2.0";

const SNIPPET_CHARS = 600;
const HYBRID_POOL = 20; // per search arm, before rerank
const RRF_K = 60;

function json(payload: unknown): { content: { type: "text"; text: string }[] } {
  return { content: [{ type: "text" as const, text: JSON.stringify(payload, null, 2) }] };
}

/** "{colors.neutral.800}" → "tek-colors-neutral-800" (the primitive's row name). */
function aliasToName(alias: string): string {
  return `tek-${alias.replace(/[{}]/g, "").split(".").join("-")}`;
}

function normalizeTokenName(input: string): string {
  const stripped = input.trim().replace(/^--/, "").replace(/^var\(/, "").replace(/\)$/, "");
  return stripped.startsWith("tek-") ? stripped : `tek-${stripped}`;
}

export function registerTools(server: McpServer): void {
  // ---------- meta ----------

  server.tool(
    "server_info",
    "Report the Tek MCP Endpoint's status, version, and live data counts. Use to verify connectivity.",
    {},
    async () => {
      const sql = db();
      const counts = await sql`
        SELECT
          (SELECT count(*)::int FROM corpus_chunks) AS chunks,
          (SELECT count(*)::int FROM corpus_chunks WHERE embedding IS NOT NULL) AS embedded,
          (SELECT count(*)::int FROM ds_tokens) AS tokens,
          (SELECT count(*)::int FROM ds_components) AS components`;
      return json({
        name: SERVER_NAME,
        version: SERVER_VERSION,
        surfaces: { tokens: "live", components: "live", corpus: "live" },
        data: counts[0],
        plan: "docs/mcp-server-plan.md in bbkemp/tek-design-system",
      });
    },
  );

  // ---------- tokens ----------

  server.tool(
    "search_tokens",
    "Search Tek design tokens by name or purpose (e.g. 'input border error', 'spacing'). Returns CSS custom properties with dark/light values. Rule of the design system: never hardcode a value a token exists for.",
    {
      query: z.string().describe("Words to match against token names, e.g. 'button background hover'"),
      type: z.string().optional().describe("Filter by token type: color, spacing, borders, fonts, radius…"),
    },
    async ({ query, type }) => {
      const sql = db();
      const pattern = `%${query.trim().toLowerCase().split(/\s+/).join("%")}%`;
      const rows = await sql`
        SELECT name, css_var, type, value_dark, value_light, alias
        FROM ds_tokens
        WHERE name ILIKE ${pattern}
          AND (${type ?? null}::text IS NULL OR type = ${type ?? null})
        ORDER BY name
        LIMIT 25`;
      return json({ query, matches: rows.length, tokens: rows });
    },
  );

  server.tool(
    "get_token",
    "Get one Tek design token by exact name (accepts 'tek-color-input-border-error', '--tek-…', or without the tek- prefix). Includes the resolved primitive if the token is an alias.",
    { name: z.string().describe("Token name, e.g. 'tek-color-button-border-default'") },
    async ({ name }) => {
      const sql = db();
      const normalized = normalizeTokenName(name);
      const rows = await sql`SELECT name, css_var, type, value_dark, value_light, alias FROM ds_tokens WHERE name = ${normalized}`;
      if (rows.length === 0) return json({ error: `No token named '${normalized}'. Try search_tokens.` });
      const token = rows[0];
      let resolvesTo: unknown = null;
      if (typeof token.alias === "string") {
        const primitive = await sql`SELECT name, css_var, value_dark, value_light FROM ds_tokens WHERE name = ${aliasToName(token.alias)}`;
        resolvesTo = primitive[0] ?? null;
      }
      return json({ ...token, resolves_to: resolvesTo });
    },
  );

  // ---------- components ----------

  server.tool(
    "list_components",
    "List every Web Component in the Tek design system (@bbkemp/ui). Rule of the design system: if a component exists, use it — never rebuild one.",
    {},
    async () => {
      const sql = db();
      const rows = await sql`SELECT tag, description, module_path FROM ds_components ORDER BY tag`;
      return json({ count: rows.length, components: rows });
    },
  );

  server.tool(
    "get_component",
    "Get one Tek component's full API: attributes, properties, events, slots — from its generated custom-elements manifest.",
    { tag: z.string().describe("Custom element tag, e.g. 'tek-button'") },
    async ({ tag }) => {
      const sql = db();
      const normalized = tag.trim().toLowerCase();
      const rows = await sql`SELECT tag, description, module_path, declaration FROM ds_components WHERE tag = ${normalized.startsWith("tek-") ? normalized : `tek-${normalized}`}`;
      if (rows.length === 0) return json({ error: `No component '${tag}'. Use list_components for the full set.` });
      const c = rows[0];
      return json({ ...c, usage: `<${c.tag}></${c.tag}>` });
    },
  );

  // ---------- corpus ----------

  server.tool(
    "list_subjects",
    "List the corpus subjects (Tek products, competitor products, internal services, repos) with per-class chunk counts (screens, docs, walkthroughs, hardware, api, code).",
    {},
    async () => {
      const sql = db();
      const rows = await sql`
        SELECT subject, class, count(*)::int AS chunks
        FROM corpus_chunks GROUP BY subject, class ORDER BY subject, class`;
      const subjects: Record<string, Record<string, number>> = {};
      for (const r of rows) {
        const subject = r.subject as string;
        subjects[subject] = subjects[subject] ?? {};
        subjects[subject][r.class as string] = r.chunks as number;
      }
      return json({ count: Object.keys(subjects).length, subjects });
    },
  );

  server.tool(
    "get_subject_index",
    "Get the full chunk listing for one corpus subject, grouped by class — the map of everything documented about it.",
    { subject: z.string().describe("Subject id, e.g. '2450-ec', 'tek-express', 'dev-core-api'") },
    async ({ subject }) => {
      const sql = db();
      const rows = await sql`
        SELECT path, class, title, provenance FROM corpus_chunks
        WHERE subject = ${subject} ORDER BY class, path`;
      if (rows.length === 0) return json({ error: `No corpus subject '${subject}'. Use list_subjects.` });
      const byClass: Record<string, { path: string; title: string; provenance: string | null }[]> = {};
      for (const r of rows) {
        const klass = r.class as string;
        byClass[klass] = byClass[klass] ?? [];
        byClass[klass].push({ path: r.path as string, title: r.title as string, provenance: r.provenance as string | null });
      }
      return json({ subject, chunks: rows.length, classes: byClass });
    },
  );

  server.tool(
    "search_corpus",
    "Semantic + full-text search over the Tek knowledge corpus (legacy product screens, manuals, walkthroughs, hardware, APIs, code docs), with Cohere reranking. Every result carries its repo path (the citation) and provenance ('observed' = system of record; 'authored-analysis' = interpretation, challengeable).",
    {
      query: z.string().describe("What you want to know, in plain language"),
      subject: z.string().optional().describe("Limit to one subject id, e.g. '2450-ec'"),
      class: z.string().optional().describe("Limit to a class: screens, docs, walkthroughs, hardware, api, code"),
      applies_to: z.string().optional().describe("Only chunks that declare they apply to this subject id"),
      provenance: z.enum(["observed", "authored-analysis"]).optional(),
      limit: z.number().int().min(1).max(10).optional().describe("Results to return (default 5)"),
    },
    async ({ query, subject, class: klass, applies_to: appliesTo, provenance, limit }) => {
      const sql = db();
      const finalLimit = limit ?? 5;
      const vector = JSON.stringify(await embedQuery(query));

      const semantic = await sql`
        SELECT path, subject, class, title, provenance, applies_to, left(body, ${SNIPPET_CHARS}) AS snippet,
               1 - (embedding <=> ${vector}::vector) AS similarity
        FROM corpus_chunks
        WHERE embedding IS NOT NULL
          AND (${subject ?? null}::text IS NULL OR subject = ${subject ?? null})
          AND (${klass ?? null}::text IS NULL OR class = ${klass ?? null})
          AND (${provenance ?? null}::text IS NULL OR provenance = ${provenance ?? null})
          AND (${appliesTo ?? null}::text IS NULL OR ${appliesTo ?? null} = ANY(applies_to))
        ORDER BY embedding <=> ${vector}::vector
        LIMIT ${HYBRID_POOL}`;

      const fulltext = await sql`
        SELECT path, subject, class, title, provenance, applies_to, left(body, ${SNIPPET_CHARS}) AS snippet,
               ts_rank(tsv, websearch_to_tsquery('english', ${query})) AS rank
        FROM corpus_chunks
        WHERE tsv @@ websearch_to_tsquery('english', ${query})
          AND (${subject ?? null}::text IS NULL OR subject = ${subject ?? null})
          AND (${klass ?? null}::text IS NULL OR class = ${klass ?? null})
          AND (${provenance ?? null}::text IS NULL OR provenance = ${provenance ?? null})
          AND (${appliesTo ?? null}::text IS NULL OR ${appliesTo ?? null} = ANY(applies_to))
        ORDER BY rank DESC
        LIMIT ${HYBRID_POOL}`;

      // Reciprocal-rank fusion of the two arms, deduped by path.
      const fused = new Map<string, { row: Record<string, unknown>; score: number }>();
      const addArm = (rows: Record<string, unknown>[]): void => {
        rows.forEach((row, i) => {
          const path = row.path as string;
          const entry = fused.get(path) ?? { row, score: 0 };
          entry.score += 1 / (RRF_K + i + 1);
          fused.set(path, entry);
        });
      };
      addArm(semantic as Record<string, unknown>[]);
      addArm(fulltext as Record<string, unknown>[]);
      const candidates = [...fused.values()].sort((a, b) => b.score - a.score);

      const reranked = await rerank(
        query,
        candidates.map((c) => `${c.row.title as string}\n\n${c.row.snippet as string}`),
        Math.min(finalLimit, candidates.length),
      );

      const picked: { row: Record<string, unknown>; relevance: number }[] = reranked
        ? reranked.map((r) => ({ row: candidates[r.index].row, relevance: r.score }))
        : candidates.slice(0, finalLimit).map((c) => ({ row: c.row, relevance: c.score }));
      const results = picked.map(({ row, relevance }) => ({ ...row, relevance, cite: `${row.path as string} @ main` }));

      return json({
        query,
        ranking: reranked ? "hybrid+cohere-rerank" : "hybrid (rerank unavailable — RRF order)",
        results,
      });
    },
  );

  server.tool(
    "get_chunk",
    "Fetch one corpus chunk in full (markdown body + frontmatter) by its repo path — the follow-up to a search_corpus citation.",
    { path: z.string().describe("Repo path from a search result, e.g. 'corpus/sources/2450-ec/screens/home.md'") },
    async ({ path }) => {
      const sql = db();
      const rows = await sql`
        SELECT path, subject, class, title, provenance, applies_to, frontmatter, body
        FROM corpus_chunks WHERE path = ${path}`;
      if (rows.length === 0) return json({ error: `No chunk at '${path}'. Paths come from search_corpus or get_subject_index.` });
      return json(rows[0]);
    },
  );

  // ---------- resources ----------

  server.resource("design-tokens", "tek://tokens", { mimeType: "application/json", description: "All Tek design tokens with dark/light values" }, async (uri) => {
    const sql = db();
    const rows = await sql`SELECT name, css_var, type, value_dark, value_light, alias FROM ds_tokens ORDER BY name`;
    return { contents: [{ uri: uri.href, mimeType: "application/json", text: JSON.stringify(rows, null, 2) }] };
  });

  server.resource("components", "tek://components", { mimeType: "application/json", description: "All Tek Web Components (custom-elements manifest data)" }, async (uri) => {
    const sql = db();
    const rows = await sql`SELECT tag, description, module_path, declaration FROM ds_components ORDER BY tag`;
    return { contents: [{ uri: uri.href, mimeType: "application/json", text: JSON.stringify(rows, null, 2) }] };
  });

  server.resource("corpus-subjects", "tek://corpus/subjects", { mimeType: "application/json", description: "Corpus subjects with per-class chunk counts" }, async (uri) => {
    const sql = db();
    const rows = await sql`SELECT subject, class, count(*)::int AS chunks FROM corpus_chunks GROUP BY subject, class ORDER BY subject, class`;
    return { contents: [{ uri: uri.href, mimeType: "application/json", text: JSON.stringify(rows, null, 2) }] };
  });
}
