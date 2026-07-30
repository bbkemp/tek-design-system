# Tek MCP Server — Plan

The build plan for the real MCP server over the design system and corpus. This is the "MCP unifier" from [tek-system-core.md → Sequencing](./tek-system-core.md#sequencing) (step 7) and Phase 3 of the [Knowledge Corpus plan](./tek-system-core.md#knowledge-corpus), scoped to what's actually shipped today: tokens, `@bbkemp/ui` components, and the markdown corpus.

The guiding line from the architecture doc: the skills bundle already covers the *static* knowledge layer — what the real MCP adds is **live capability**: querying the corpus, fetching current tokens, answering "what components exist and what are their props" from live data instead of from prose. That's what this server does.

---

## Approach in one paragraph

Build the **hosted Tek MCP Endpoint directly** — no local-stdio interim, no half-baked version first. A remote MCP server (streamable HTTP) deployed on Vercel, backed by Postgres + pgvector, with Voyage embeddings and Cohere Rerank server-side — the exact stack already locked in [tek-system-core.md → Tools and stack](./tek-system-core.md). A GitHub Action ingests on every push to `main`: corpus markdown → chunked, embedded, upserted; built tokens and the component manifest → reference tables. Consumers configure **one URL** in Claude Code, Cursor, claude.ai, or any MCP client. No clone, no Docker, no API keys on anyone's machine — all secrets live in the deployment's environment. This is the "Tek MCP Endpoint" box from the meta-architecture diagram, stood up now rather than staged toward.

**One endpoint, one link, zero consumer setup.** The tool contracts are the durable asset; the deployment is the product.

---

## Decisions

### Decided 2026-07-15 (question round 1)

| # | Decision | Call |
|---|---|---|
| 1 | Corpus search | **Semantic from day one** — embeddings, no lexical interim. |
| 2 | XAML keys in token results | **Fast-follow after v1.** v1 ships web-only (CSS custom properties); the `docs/wpf/` resource-key join lands as its own PR once the endpoint is live. |
| 3 | MCP resources | **Tools + resources.** Corpus chunks and token files also exposed as browsable MCP resources for human-driven clients. |

### Decided 2026-07-15 (remote-first reframe)

| # | Decision | Call |
|---|---|---|
| 4 | Architecture | **Remote-first.** Build the hosted endpoint directly; skip the local stdio server entirely. No interim version to throw away. |
| 5 | Consumer experience | **A link, nothing else.** No consumer-side keys, clones, or databases. All credentials (Voyage, Cohere, Postgres) are server-side env vars. |
| 6 | Distribution | Dissolved — there is no npm package to distribute. The server is a deployed app (`apps/mcp/`), not a published library. The `@bbkemp/mcp` name question is moot. |

### Defaults adopted (flagged here, overridable any time)

| Topic | Default | Why |
|---|---|---|
| Hosting | Vercel (Next.js route + MCP streamable-HTTP handler) | Matches the stack table's web default; preview deployments per PR come free. |
| Postgres | Neon (serverless Postgres, pgvector) | First-class Vercel integration; free tier fits current scale. Supabase is the fallback if we want its dashboard. |
| Rerank | Cohere Rerank from day one | "P2 functionality, fully baked" — the full retrieval flow from the architecture doc (hybrid vector + BM25 → top 20 → rerank → top 5), not a subset. |
| Embedding granularity | One vector per corpus `.md` file | The `document-*` skills already produce retrieval-sized chunks by design. Per-section is an eval-driven refinement, not a day-one requirement. |
| Access control (v1) | **Secret link** — unguessable URL path segment | See § Access below. Upgraded to org SSO/OAuth after the `@tektronix` migration. |

---

## Access — the one thing to be honest about

"Just give people the link" works, with one caveat stated plainly: **the link is the key.** The corpus contains internal and competitor material, so the endpoint cannot be an open, guessable URL. v1 uses a long random path segment (e.g. `https://<host>/mcp/<random-32-chars>`) — anyone with the link has access, treat it like a password, and it's rotateable in one redeploy if it leaks. This is the standard "shareable secret link" model (same trust posture as a private Google Doc link).

The real fix is P2: once the `@tektronix` org exists, put the endpoint behind org SSO / OAuth so access is identity-based and revocable per person. The MCP spec supports OAuth and claude.ai/Claude Code both handle the flow.

---

## Design principles

1. **Read-only.** No write tools. The corpus is write-once via the `document-*` skills; tokens are written by the Figma plugin; components go through PRs. The server observes, it never mutates.
2. **Citations always.** Every corpus result returns its repo path, subject, class, and `provenance:` value. Every token result returns the CSS custom property name. Mirrors the citation rule in the Knowledge Corpus plan — trust comes from two-click verifiability.
3. **Provenance surfaces in results.** `observed` vs `authored-analysis` (see [corpus/README.md → Provenance tagging](../corpus/README.md#provenance-tagging--observed-vs-authored-analysis)) is returned on every chunk, so a consuming agent can apply the trust posture without reading the file.
4. **Serve the built artifact, not the source.** Ingestion reads `packages/tokens/dist/` (post-transform, what consumers actually get) and the generated component manifest — so ingestion runs after the build in CI, same rule as the sign-in reference pages exercising real built packages.
5. **`main` is what the endpoint serves.** Ingestion fires on push to `main` only. The endpoint always reflects merged truth, never a branch.

---

## Architecture

```
                    Claude Code / Cursor / claude.ai / any MCP client
                                        │  one URL
                                        ▼
                      apps/mcp — MCP endpoint on Vercel
                      (streamable HTTP; tools + resources)
                      env: VOYAGE_API_KEY, COHERE_API_KEY,
                           DATABASE_URL, MCP_PATH_SECRET
                                        │
                     ┌──────────────────┼──────────────────┐
                     ▼                  ▼                  ▼
               Voyage (embed      Neon Postgres       Cohere Rerank
               query at runtime)  + pgvector          (top 20 → top 5)
                                        ▲
                                        │ upsert on push to main
                      GitHub Action: build → ingest
                      corpus/**  → chunk + embed → vectors + metadata
                      tokens dist → token table
                      custom-elements.json → component table
```

---

## Tool surfaces

### 1. Tokens

| Tool | Input | Returns |
|---|---|---|
| `search_tokens` | query, optional type filter (color/spacing/font/border/radius) | Matching tokens: name, resolved value per mode (dark/light), type, CSS var. XAML key joins in the fast-follow. |
| `get_token` | exact token name | Full record incl. alias chain (semantic → primitive) |

This directly serves the #1 hard constraint ("tokens always") — any AI tool connected to the endpoint can resolve "what's the token for this?" with zero repo context.

### 2. Components

| Tool | Input | Returns |
|---|---|---|
| `list_components` | — | All `tek-*` elements: tag, one-line description, source path |
| `get_component` | tag name | Attributes/props, events, slots, CSS custom properties consumed, usage snippet |

Backed by a **`custom-elements.json`** manifest generated at build time by `@custom-elements-manifest/analyzer` — the standard manifest format for Web Components. Independently valuable (future Storybook, editor tooling, docs consume the same manifest), so it earns its place regardless.

### 3. Corpus

| Tool | Input | Returns |
|---|---|---|
| `list_subjects` | — | Subject IDs + asset counts per class (screens, docs, walkthroughs, hardware, api, code) |
| `get_subject_index` | subject ID | The subject's `index.md` |
| `search_corpus` | query + filters: `subject`, `class`, `applies_to`, `provenance` | Ranked chunks: path, title, snippet, frontmatter |
| `get_chunk` | repo path | Full markdown body + frontmatter |

`search_corpus` runs the full retrieval flow from [tek-system-core.md → Retrieval flow](./tek-system-core.md): embed query (Voyage) → hybrid search (pgvector semantic + Postgres full-text BM25) → metadata filter → top 20 → Cohere Rerank → top 5, with repo-path citations on every result. `applies_to:` handles cross-subject joins exactly as [corpus/README.md](../corpus/README.md#cross-subject-applicability) specifies — families stay emergent.

### 4. Resources

Corpus chunks (by subject/class) and token files exposed as browsable MCP resources alongside the tools. Tools serve agent retrieval; resources serve human-driven pickers in clients like Claude Desktop. Same data path underneath.

Deliberately **not** in v1: PRDs, ADRs, UXR, analytics surfaces (those systems haven't shipped — they join the endpoint as they land), and docs/workflow prose already covered by the skills bundle.

---

## Steps

### P0 — the endpoint, live

| # | Step | Notes |
|---|---|---|
| 1 | Provision accounts + env | Vercel project, Neon database (pgvector enabled), Voyage + Cohere API keys — set as Vercel env vars via the dashboard. **Bryan does this step** (account ownership); keys never pass through chat or get committed. ~30 min. |
| 2 | Scaffold `apps/mcp/` | Next.js + MCP streamable-HTTP handler, TS strict; add `apps/*` to root workspaces; wire Vercel deployment with the secret path segment. |
| 3 | `custom-elements.json` generation | Add `@custom-elements-manifest/analyzer` to the `packages/ui` build. |
| 4 | Ingestion script + GitHub Action | On push to `main`: build → chunk corpus markdown (frontmatter → metadata columns) → Voyage embed → upsert to Neon; load token dist + component manifest into tables. Idempotent, like every other pipeline in this repo. |
| 5 | Token + component tools | Served from the ingested tables. |
| 6 | Corpus tools + resources | Full hybrid + rerank flow; provenance and citations on every result. |
| 7 | Eval harness | 25–50 curated question → expected-chunk pairs run against the deployed endpoint on `npm test`. The architecture doc calls this mandatory — it's also the instrument for tuning granularity/rerank later. |
| 8 | Ship the link | `.mcp.json` in this repo pointing at the endpoint (every session here dogfoods it); consumer one-liners for Claude Code / Cursor / claude.ai / Hermes Agent (Bryan's install — also our proof that the endpoint is client-agnostic; verify Hermes handles remote streamable-HTTP servers, not just stdio); update README, CONTRIBUTING, and CLAUDE.md ("in flight" table) in the same PR. |

Each step is PR-sized. After step 8, "install" for a teammate is pasting one URL.

### P1 — hardening

| # | Step | Notes |
|---|---|---|
| 9 | Eval gate in CI | **Shipped** 2026-07-27 — [`.github/workflows/eval-gate.yml`](../.github/workflows/eval-gate.yml) fails PRs touching `apps/mcp/**` that regress retrieval on the curated set, against the production endpoint. Scoped narrower than `refresh-index --check`'s eventual target: it validates retrieval *logic*, not a PR's own corpus/token content, since ingestion still only runs on push to `main`. Per-PR preview ingest is the follow-up to close that gap. |
| 10 | XAML fast-follow | Join `docs/wpf/` resource keys into token results (Decision 2). |
| 11 | Usage logging | Which tools get called, which queries miss — feeds the eval set and proves value. |
| 12 | Link rotation runbook | One-step secret rotation documented, so a leaked link is a 5-minute fix. |

### P2 — identity + growth

| # | Step | Notes |
|---|---|---|
| 13 | Org SSO / OAuth | After the `@tektronix` migration: identity-based access replaces the secret link. |
| 14 | New surfaces join | PRDs, ADRs, UXR/analytics plug into the same endpoint as those systems ship — the full unifier from the meta-architecture diagram. |

---

## Open decisions

- **Per-section embedding granularity** — revisit only if the eval harness shows misses on long chunks. Default: per-file.
- **Neon vs Supabase** — **decided: Neon** (shipped 2026-07-16; ingestion and the eval gate run against Neon pgvector in production — the cheap-swap window is closed).

---

## What this is not

- **Not a rebuild of the skills bundle.** Static knowledge (workflow, conventions, build rules) stays in skills/CLAUDE.md — the doc's "skills as a temp MCP layer" division of labor holds. The endpoint is the *live* layer only.
- **Not the customer-facing constrained interface.** That's Knowledge Corpus Phase 5, and it sits on top of this endpoint later.
- **Not a CMS or authoring surface.** Read-only. Authoring stays with the Figma plugin (tokens), PRs (components), and `document-*` skills (corpus).
