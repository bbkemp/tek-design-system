/**
 * Eval harness for the Tek MCP Endpoint (P0 step 7 of docs/mcp-server-plan.md).
 *
 * Runs the curated cases in cases.json against a deployed endpoint and scores:
 *   - corpus:  recall@5 — the expected chunk must appear in the top 5 results
 *   - tokens / token_gets / components: exact pass/fail
 *
 * Usage:  TEK_MCP_URL=https://<host>/<secret>/mcp npm run eval --workspace=apps/mcp
 * Exits non-zero if corpus recall@5 < 0.8 or any exact case fails — the same
 * thresholds the CI gate will enforce. Without an eval harness, retrieval
 * quality is invisible until users complain.
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";

const ENDPOINT = process.env.TEK_MCP_URL;
if (!ENDPOINT) {
  console.error("TEK_MCP_URL is required (full endpoint URL including the secret path and /mcp).");
  process.exit(1);
}

const CORPUS_RECALL_THRESHOLD = 0.8;

interface Cases {
  corpus: { query: string; subject?: string; class?: string; expect_any: string[] }[];
  tokens: { query: string; expect: string }[];
  token_gets: { name: string; expect_value_dark: string }[];
  components: { tag: string; expect_class: string; expect_description?: boolean; expect_attrs?: string[] }[];
}

interface ToolResult {
  result?: { content?: { type: string; text: string }[]; isError?: boolean };
  error?: unknown;
}

async function callTool(name: string, args: Record<string, unknown>): Promise<Record<string, unknown>> {
  const res = await fetch(ENDPOINT as string, {
    method: "POST",
    headers: { "content-type": "application/json", accept: "application/json, text/event-stream" },
    body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "tools/call", params: { name, arguments: args } }),
  });
  if (!res.ok) throw new Error(`${name}: HTTP ${res.status}`);
  const text = await res.text();
  const dataLine = text.split("\n").find((l) => l.startsWith("data: "));
  if (!dataLine) throw new Error(`${name}: no data frame in response`);
  const parsed = JSON.parse(dataLine.slice(6)) as ToolResult;
  const payload = parsed.result?.content?.[0]?.text;
  if (!payload) throw new Error(`${name}: empty result`);
  return JSON.parse(payload) as Record<string, unknown>;
}

async function main(): Promise<void> {
  const cases = JSON.parse(readFileSync(join(import.meta.dirname, "cases.json"), "utf8")) as Cases;
  let corpusHits = 0;
  let exactFailures = 0;

  console.log(`corpus cases (recall@5):`);
  for (const c of cases.corpus) {
    const args: Record<string, unknown> = { query: c.query, limit: 5 };
    if (c.subject) args.subject = c.subject;
    if (c.class) args.class = c.class;
    const out = await callTool("search_corpus", args);
    const paths = (out.results as { path: string }[]).map((r) => r.path);
    const hit = c.expect_any.some((e) => paths.includes(e));
    if (hit) corpusHits++;
    console.log(`  ${hit ? "PASS" : "MISS"}  ${c.query}`);
    if (!hit) console.log(`        wanted one of: ${c.expect_any.join(" | ")}\n        got: ${paths.join(", ")}`);
  }
  const recall = corpusHits / cases.corpus.length;

  console.log(`\ntoken search cases:`);
  for (const c of cases.tokens) {
    const out = await callTool("search_tokens", { query: c.query });
    const hit = (out.tokens as { name: string }[]).some((t) => t.name === c.expect);
    if (!hit) exactFailures++;
    console.log(`  ${hit ? "PASS" : "FAIL"}  '${c.query}' → ${c.expect}`);
  }

  console.log(`\ntoken get cases:`);
  for (const c of cases.token_gets) {
    const out = await callTool("get_token", { name: c.name });
    const hit = out.value_dark === c.expect_value_dark;
    if (!hit) exactFailures++;
    console.log(`  ${hit ? "PASS" : "FAIL"}  ${c.name} = ${c.expect_value_dark} (got ${String(out.value_dark)})`);
  }

  console.log(`\ncomponent cases:`);
  for (const c of cases.components) {
    const out = await callTool("get_component", { tag: c.tag });
    const declaration = out.declaration as { name?: string; attributes?: { name: string }[] } | undefined;
    const problems: string[] = [];
    if (declaration?.name !== c.expect_class) problems.push(`class ${String(declaration?.name)} ≠ ${c.expect_class}`);
    if (c.expect_description && !String(out.description ?? "").trim()) problems.push("empty description");
    for (const attr of c.expect_attrs ?? []) {
      if (!declaration?.attributes?.some((a) => a.name === attr)) problems.push(`missing attr '${attr}'`);
    }
    if (problems.length > 0) exactFailures++;
    console.log(`  ${problems.length === 0 ? "PASS" : "FAIL"}  ${c.tag}${problems.length ? ` — ${problems.join("; ")}` : ""}`);
  }

  console.log(`\n— summary —`);
  console.log(`corpus recall@5: ${corpusHits}/${cases.corpus.length} = ${(recall * 100).toFixed(0)}% (threshold ${CORPUS_RECALL_THRESHOLD * 100}%)`);
  console.log(`exact cases:     ${cases.tokens.length + cases.token_gets.length + cases.components.length - exactFailures}/${cases.tokens.length + cases.token_gets.length + cases.components.length} passed`);

  if (recall < CORPUS_RECALL_THRESHOLD || exactFailures > 0) {
    console.error("\nEVAL FAILED");
    process.exit(1);
  }
  console.log("\nEVAL PASSED");
}

main().catch((err: unknown) => {
  console.error(err);
  process.exit(1);
});
