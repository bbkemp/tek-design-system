/**
 * Ingest the corpus, design tokens, and component manifest into Neon.
 *
 * Sources (all derived from the repo — the repo is the library, Neon is the
 * card catalog; this script re-derives the catalog and is safe to re-run):
 *   - corpus/sources/<subject>/<class>/**.md  → corpus_chunks (+ Voyage embeddings)
 *   - packages/tokens/dist/*.css + src/semantic/*.json → ds_tokens
 *   - apps/mcp/generated/custom-elements.json → ds_components
 *
 * Env:
 *   DATABASE_URL     Neon connection string (pooled). Absent → dry run.
 *   VOYAGE_API_KEY   Voyage embeddings key. Required unless dry run.
 *   VOYAGE_MODEL     Optional, defaults to voyage-3.5 (1024 dims).
 *   DRY_RUN=1        Parse and report counts; no network calls.
 */
import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";
import matter from "gray-matter";
import { neon } from "@neondatabase/serverless";

const ROOT = join(import.meta.dirname, "..", "..", "..");
const CORPUS_DIR = join(ROOT, "corpus", "sources");
const TOKENS_DIST = join(ROOT, "packages", "tokens", "dist");
const TOKENS_SRC = join(ROOT, "packages", "tokens", "src");
const MANIFEST_PATH = join(import.meta.dirname, "..", "generated", "custom-elements.json");

const VOYAGE_MODEL = process.env.VOYAGE_MODEL ?? "voyage-3.5";
const EMBEDDING_DIMS = 1024;
const EMBED_MAX_CHARS = 24_000;
// Free-tier Voyage allows 3 requests/min and 10K tokens/min, so batches are
// sized by an estimated token budget (~4 chars/token) and 429s are retried
// with a wait. With billing enabled the same code just runs without pauses.
const EMBED_BATCH_TOKEN_BUDGET = Number(process.env.VOYAGE_BATCH_TOKENS ?? 7_000);
const EMBED_MAX_RETRIES = 10;
const RETRY_WAIT_MS = 25_000;

const DRY_RUN = process.env.DRY_RUN === "1" || !process.env.DATABASE_URL;

// A CI run without secrets must fail loudly, never silently dry-run.
if (process.env.CI === "true" && DRY_RUN && process.env.DRY_RUN !== "1") {
  throw new Error("DATABASE_URL is not set in CI — refusing to silently dry-run. Add the repo secret or set DRY_RUN=1 explicitly.");
}

// ---------- corpus ----------

interface CorpusChunk {
  path: string;
  subject: string;
  klass: string;
  title: string;
  provenance: string | null;
  appliesTo: string[];
  frontmatter: Record<string, unknown>;
  body: string;
  hash: string;
}

function walkMarkdown(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      if (entry === "uploads") continue; // local-only raw inputs, never ingested
      out.push(...walkMarkdown(full));
    } else if (entry.endsWith(".md")) {
      if (entry === "index.md" || entry === "_index.md") continue; // navigational
      out.push(full);
    }
  }
  return out;
}

function loadCorpus(): { chunks: CorpusChunk[]; failures: { path: string; error: string }[] } {
  if (!existsSync(CORPUS_DIR)) return { chunks: [], failures: [] };
  const chunks: CorpusChunk[] = [];
  const failures: { path: string; error: string }[] = [];
  for (const file of walkMarkdown(CORPUS_DIR)) {
    const repoPath = relative(ROOT, file).split(sep).join("/");
    try {
      chunks.push(parseChunk(file, repoPath));
    } catch (err) {
      failures.push({ path: repoPath, error: err instanceof Error ? err.message.split("\n")[0] : String(err) });
    }
  }
  return { chunks, failures };
}

function parseChunk(file: string, repoPath: string): CorpusChunk {
  {
    const raw = readFileSync(file, "utf8");
    const { data, content } = matter(raw);
    const segments = repoPath.split("/"); // corpus/sources/<subject>/<class>/...
    const frontmatter = data as Record<string, unknown>;
    const appliesTo = Array.isArray(frontmatter.applies_to)
      ? frontmatter.applies_to.map(String)
      : typeof frontmatter.applies_to === "string"
        ? [frontmatter.applies_to]
        : [];
    const heading = content.match(/^#\s+(.+)$/m)?.[1];
    return {
      path: repoPath,
      subject: segments[2] ?? "unknown",
      klass: segments[3] ?? "unknown",
      title: typeof frontmatter.title === "string" ? frontmatter.title : (heading ?? segments.at(-1) ?? repoPath),
      provenance: typeof frontmatter.provenance === "string" ? frontmatter.provenance : null,
      appliesTo,
      frontmatter,
      body: content.trim(),
      hash: createHash("sha256").update(raw).digest("hex"),
    };
  }
}

// ---------- tokens ----------

interface TokenRow {
  name: string;
  cssVar: string;
  type: string | null;
  valueDark: string | null;
  valueLight: string | null;
  alias: string | null;
}

function parseCssVars(file: string): Map<string, string> {
  const vars = new Map<string, string>();
  if (!existsSync(file)) return vars;
  const css = readFileSync(file, "utf8");
  for (const match of css.matchAll(/--([a-z0-9-]+)\s*:\s*([^;]+);/gi)) {
    vars.set(match[1], match[2].trim());
  }
  return vars;
}

/** Flatten DTCG JSON into css-var-name → {alias, type}. */
function flattenSemantic(
  node: Record<string, unknown>,
  path: string[],
  out: Map<string, { alias: string | null; type: string | null }>,
): void {
  if (typeof node.$value !== "undefined") {
    const alias = typeof node.$value === "string" && node.$value.startsWith("{") ? node.$value : null;
    const type = typeof node.$type === "string" ? node.$type : null;
    out.set(`tek-${path.join("-")}`, { alias, type });
    return;
  }
  for (const [key, value] of Object.entries(node)) {
    if (value && typeof value === "object") {
      flattenSemantic(value as Record<string, unknown>, [...path, key], out);
    }
  }
}

function loadTokens(): TokenRow[] {
  const dark = new Map([
    ...parseCssVars(join(TOKENS_DIST, "tek.primitives.css")),
    ...parseCssVars(join(TOKENS_DIST, "tek.tokens.css")),
  ]);
  const light = parseCssVars(join(TOKENS_DIST, "tek.tokens.light.css"));

  const semanticMeta = new Map<string, { alias: string | null; type: string | null }>();
  for (const file of ["tokens.json", "tokens.light.json"]) {
    const full = join(TOKENS_SRC, "semantic", file);
    if (existsSync(full)) {
      flattenSemantic(JSON.parse(readFileSync(full, "utf8")) as Record<string, unknown>, [], semanticMeta);
    }
  }

  const names = new Set([...dark.keys(), ...light.keys()]);
  return [...names].sort().map((name) => {
    const meta = semanticMeta.get(name);
    // Fall back to the token's group segment (color, spacing, borders, fonts…)
    const groupType = name.split("-")[1] ?? null;
    return {
      name,
      cssVar: `--${name}`,
      type: meta?.type ?? groupType,
      valueDark: dark.get(name) ?? null,
      valueLight: light.get(name) ?? dark.get(name) ?? null,
      alias: meta?.alias ?? null,
    };
  });
}

// ---------- components ----------

interface ComponentRow {
  tag: string;
  description: string | null;
  modulePath: string | null;
  declaration: Record<string, unknown>;
}

interface ManifestDeclaration {
  customElement?: boolean;
  tagName?: string;
  description?: string;
  [key: string]: unknown;
}

interface Manifest {
  modules?: { path?: string; declarations?: ManifestDeclaration[] }[];
}

function loadComponents(): ComponentRow[] {
  if (!existsSync(MANIFEST_PATH)) {
    throw new Error(`Missing ${MANIFEST_PATH} — run \`npm run manifest --workspace=apps/mcp\` first.`);
  }
  const manifest = JSON.parse(readFileSync(MANIFEST_PATH, "utf8")) as Manifest;
  const rows: ComponentRow[] = [];
  for (const mod of manifest.modules ?? []) {
    for (const decl of mod.declarations ?? []) {
      if (decl.customElement && typeof decl.tagName === "string") {
        rows.push({
          tag: decl.tagName,
          description: typeof decl.description === "string" && decl.description ? decl.description : null,
          modulePath: mod.path?.replace(/^(\.\.\/)+/, "") ?? null,
          declaration: decl,
        });
      }
    }
  }
  return rows;
}

// ---------- embeddings ----------

interface VoyageResponse {
  data: { embedding: number[] }[];
}

const estimateTokens = (text: string): number => Math.ceil(text.length / 4);

async function embedBatch(texts: string[]): Promise<number[][]> {
  const key = process.env.VOYAGE_API_KEY;
  if (!key) throw new Error("VOYAGE_API_KEY is required when DATABASE_URL is set (query-time embedding of documents).");
  for (let attempt = 1; ; attempt++) {
    const res = await fetch("https://api.voyageai.com/v1/embeddings", {
      method: "POST",
      headers: { "content-type": "application/json", authorization: `Bearer ${key}` },
      body: JSON.stringify({ model: VOYAGE_MODEL, input: texts, input_type: "document", output_dimension: EMBEDDING_DIMS }),
    });
    if (res.ok) {
      const json = (await res.json()) as VoyageResponse;
      return json.data.map((d) => d.embedding);
    }
    const retryable = res.status === 429 || res.status >= 500;
    if (!retryable || attempt >= EMBED_MAX_RETRIES) {
      throw new Error(`Voyage API ${res.status} (attempt ${attempt}/${EMBED_MAX_RETRIES}): ${await res.text()}`);
    }
    console.log(`  rate limited (${res.status}), waiting ${RETRY_WAIT_MS / 1000}s — attempt ${attempt}/${EMBED_MAX_RETRIES}`);
    await new Promise((resolve) => setTimeout(resolve, RETRY_WAIT_MS));
  }
}

// ---------- main ----------

async function main(): Promise<void> {
  const { chunks, failures } = loadCorpus();
  const tokens = loadTokens();
  const components = loadComponents();

  const subjects = new Set(chunks.map((c) => c.subject));
  console.log(`corpus:     ${chunks.length} chunks across ${subjects.size} subjects (${[...subjects].sort().join(", ")})`);
  console.log(`tokens:     ${tokens.length} css custom properties`);
  console.log(`components: ${components.length} custom elements (${components.map((c) => c.tag).join(", ")})`);
  if (failures.length > 0) {
    console.error(`\n⚠ ${failures.length} chunk(s) have unparseable frontmatter and were SKIPPED (invisible to search until fixed):`);
    for (const f of failures) console.error(`  - ${f.path}: ${f.error}`);
  }

  if (DRY_RUN) {
    console.log("\nDry run (no DATABASE_URL or DRY_RUN=1) — nothing written.");
    if (failures.length > 0) process.exit(1);
    return;
  }

  const sql = neon(process.env.DATABASE_URL as string);

  await sql`CREATE EXTENSION IF NOT EXISTS vector`;
  await sql`
    CREATE TABLE IF NOT EXISTS corpus_chunks (
      path text PRIMARY KEY,
      subject text NOT NULL,
      class text NOT NULL,
      title text,
      provenance text,
      applies_to text[] NOT NULL DEFAULT '{}',
      frontmatter jsonb NOT NULL DEFAULT '{}',
      body text NOT NULL,
      content_hash text NOT NULL,
      embedding vector(1024),
      tsv tsvector GENERATED ALWAYS AS (to_tsvector('english', coalesce(title, '') || ' ' || body)) STORED,
      ingested_at timestamptz NOT NULL DEFAULT now()
    )`;
  await sql`CREATE INDEX IF NOT EXISTS corpus_chunks_tsv_idx ON corpus_chunks USING gin (tsv)`;
  await sql`CREATE INDEX IF NOT EXISTS corpus_chunks_embedding_idx ON corpus_chunks USING hnsw (embedding vector_cosine_ops)`;
  await sql`
    CREATE TABLE IF NOT EXISTS ds_tokens (
      name text PRIMARY KEY,
      css_var text NOT NULL,
      type text,
      value_dark text,
      value_light text,
      alias text,
      ingested_at timestamptz NOT NULL DEFAULT now()
    )`;
  await sql`
    CREATE TABLE IF NOT EXISTS ds_components (
      tag text PRIMARY KEY,
      description text,
      module_path text,
      declaration jsonb NOT NULL,
      ingested_at timestamptz NOT NULL DEFAULT now()
    )`;

  // Only re-embed chunks whose content changed since the last run.
  const existing = await sql`SELECT path, content_hash FROM corpus_chunks`;
  const existingHashes = new Map(existing.map((r) => [r.path as string, r.content_hash as string]));
  const toEmbed = chunks.filter((c) => existingHashes.get(c.path) !== c.hash);
  console.log(`\nembedding:  ${toEmbed.length} new/changed chunks (${chunks.length - toEmbed.length} unchanged)`);

  // Group into batches that stay under the per-request token budget.
  const batches: CorpusChunk[][] = [];
  let current: CorpusChunk[] = [];
  let currentTokens = 0;
  for (const c of toEmbed) {
    const tokens = estimateTokens(`${c.title}\n\n${c.body}`.slice(0, EMBED_MAX_CHARS));
    if (current.length > 0 && currentTokens + tokens > EMBED_BATCH_TOKEN_BUDGET) {
      batches.push(current);
      current = [];
      currentTokens = 0;
    }
    current.push(c);
    currentTokens += tokens;
  }
  if (current.length > 0) batches.push(current);

  const embeddings = new Map<string, number[]>();
  let done = 0;
  for (const batch of batches) {
    const vectors = await embedBatch(batch.map((c) => `${c.title}\n\n${c.body}`.slice(0, EMBED_MAX_CHARS)));
    batch.forEach((c, j) => embeddings.set(c.path, vectors[j]));
    done += batch.length;
    console.log(`  embedded ${done}/${toEmbed.length}`);
  }

  for (const c of chunks) {
    const vector = embeddings.get(c.path);
    await sql`
      INSERT INTO corpus_chunks (path, subject, class, title, provenance, applies_to, frontmatter, body, content_hash, embedding, ingested_at)
      VALUES (${c.path}, ${c.subject}, ${c.klass}, ${c.title}, ${c.provenance}, ${c.appliesTo}, ${JSON.stringify(c.frontmatter)}::jsonb, ${c.body}, ${c.hash}, ${vector ? JSON.stringify(vector) : null}::vector, now())
      ON CONFLICT (path) DO UPDATE SET
        subject = EXCLUDED.subject,
        class = EXCLUDED.class,
        title = EXCLUDED.title,
        provenance = EXCLUDED.provenance,
        applies_to = EXCLUDED.applies_to,
        frontmatter = EXCLUDED.frontmatter,
        body = EXCLUDED.body,
        content_hash = EXCLUDED.content_hash,
        embedding = COALESCE(EXCLUDED.embedding, corpus_chunks.embedding),
        ingested_at = now()`;
  }
  await sql`DELETE FROM corpus_chunks WHERE path <> ALL(${chunks.map((c) => c.path)})`;

  for (const t of tokens) {
    await sql`
      INSERT INTO ds_tokens (name, css_var, type, value_dark, value_light, alias, ingested_at)
      VALUES (${t.name}, ${t.cssVar}, ${t.type}, ${t.valueDark}, ${t.valueLight}, ${t.alias}, now())
      ON CONFLICT (name) DO UPDATE SET
        css_var = EXCLUDED.css_var,
        type = EXCLUDED.type,
        value_dark = EXCLUDED.value_dark,
        value_light = EXCLUDED.value_light,
        alias = EXCLUDED.alias,
        ingested_at = now()`;
  }
  await sql`DELETE FROM ds_tokens WHERE name <> ALL(${tokens.map((t) => t.name)})`;

  for (const c of components) {
    await sql`
      INSERT INTO ds_components (tag, description, module_path, declaration, ingested_at)
      VALUES (${c.tag}, ${c.description}, ${c.modulePath}, ${JSON.stringify(c.declaration)}::jsonb, now())
      ON CONFLICT (tag) DO UPDATE SET
        description = EXCLUDED.description,
        module_path = EXCLUDED.module_path,
        declaration = EXCLUDED.declaration,
        ingested_at = now()`;
  }
  await sql`DELETE FROM ds_components WHERE tag <> ALL(${components.map((c) => c.tag)})`;

  const counts = await sql`
    SELECT
      (SELECT count(*) FROM corpus_chunks) AS chunks,
      (SELECT count(*) FROM corpus_chunks WHERE embedding IS NOT NULL) AS embedded,
      (SELECT count(*) FROM ds_tokens) AS tokens,
      (SELECT count(*) FROM ds_components) AS components`;
  console.log(`\nNeon now holds: ${counts[0].chunks} chunks (${counts[0].embedded} embedded), ${counts[0].tokens} tokens, ${counts[0].components} components.`);

  // Everything parseable was ingested, but fail the run so skipped files get fixed.
  if (failures.length > 0) process.exit(1);
}

main().catch((err: unknown) => {
  console.error(err);
  process.exit(1);
});
