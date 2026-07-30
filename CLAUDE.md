# CLAUDE.md

You are an AI assistant working in the **Tek Design System** repo — Tektronix's token-driven, framework-agnostic design system. Read this file in full at the start of every session. When this file disagrees with the actual repo, the repo wins — open a PR to update this file.

The thesis behind everything below: **codified, versioned, queryable systems compound.** AI tools amplify the system they're given — grounded context produces production-quality output, ungrounded context produces slop. Treat this file, [README.md](./README.md), [CONTRIBUTING.md](./CONTRIBUTING.md), [docs/workflow.md](./docs/workflow.md), and [docs/tek-system-core.md](./docs/tek-system-core.md) as the actual product, not scaffolding around it.

## What this repo is

A monorepo containing:

- `packages/tokens/` — design tokens (Style Dictionary v3, custom DTCG parser, `size/px` transform). Currently published as `@bbkemp/tokens` on GitHub Packages.
- `packages/ui/` — Web Components consumed by Tek products. Currently published as `@bbkemp/ui`.
- `apps/bench/` — the **Tek Bench workstation**: static, token-driven shell that wraps the micro tools, reference pages, and prototype drops behind one rail. Tool registry + consistency contract: `apps/bench/tools.js` and `apps/bench/README.md`.
- `apps/mcp/` — the **Tek MCP Endpoint** (shipped 2026-07-16): hosted MCP server on Vercel exposing tokens, components, and corpus search (Neon pgvector + Voyage + Cohere) to any MCP client via one secret URL. Data re-ingests from the repo on every push to `main` (`ingest.yml`). The URL is a secret — **never commit it** (the repo is public); local sessions connect via the gitignored `.mcp.json` (see `.mcp.json.example`). Details: `apps/mcp/README.md`; plan: `docs/mcp-server-plan.md`.
- `figma-token-push/` — local-only Figma plugin that commits four token files atomically, with a concurrency group on the publish workflow to prevent SHA races.
- `prototypes/` — Claude Design prototype drops (bench, my-tek, tek-express, font-lab) plus the HTML reference pages: `sign-in/` (sign in + create account — real built-package imports, pixel-perfect integration tests) and `component-library/` (live component reference; currently inline definitions).
- `docs/wpf/` — WPF translation layer: pipeline-generated token ResourceDictionaries (XAML), Telerik overrides, reference page. The desktop runtime consuming the tokens — and the reason the system is Web Components and not React.
- `uxr/` — UXR / voice-of-customer library (provisional, markdown-only in git).
- `scripts/` — repo automation (`export-skills.mjs` skill mirrors, `figma-mcp-watch.mjs`).

For repo structure, the token pipeline diagram, type scale, fonts, install/usage docs, and the full Figma node-to-source map: read [README.md](./README.md). Don't paraphrase what's there — link to it.

Primary maintainer: Bryan Kemp.

## Hard constraints — do not violate

These are the rules that hold the system together. Violating any of them produces drift the system explicitly exists to prevent.

1. **TypeScript-first Web Components.** Components ship as framework-agnostic Web Components because the consuming runtime is native desktop (WPF/XAML). No framework-specific ports (React, Vue, etc.) — the Web Components are the single implementation. Internally components extend `LitElement` ([ADR-0001](./docs/adr/0001-adopt-lit.md)) — an implementation detail, not a framework layer: the published artifacts remain standard custom elements. If a genuine need for a consumer-facing framework layer appears, raise it as an open question rather than building one.
2. **Tokens always.** Never hardcode hex, px, font sizes, font families, or radii. Use `var(--tek-*)` with a fallback: `var(--tek-spacing-s05, 8px)`. Token-adherence rules are spelled out in [CONTRIBUTING.md → Updating Web Components](./CONTRIBUTING.md#updating-web-components).
3. **Figma is the source of truth.** Before writing or changing component code, look at the relevant Figma node. Do not assume existing code is correct. The Figma file is **DS-v2**, key `3wbYstse9TYKlPtCPpZH5X`. README has the node-to-source map.
4. **TypeScript strict mode.** No `any` escape hatches.
5. **No local publishes.** Packages publish only from CI on push to `main` (`publish-tokens.yml`, `publish-ui.yml`). Never run `npm publish` from a developer machine. No human holds the publish token.
6. **Never commit directly to `main`.** Always: branch → PR → squash-merge via GitHub MCP. The full git/GitHub workflow — trigger phrases ("let's push it", "merge it"), branch naming, commit format, merge gate — is codified in [docs/workflow.md](./docs/workflow.md). Read it.
7. **Conventional Commits** (`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`). Feeds the auto-changelog and CI version bumps.
8. **Consistency over cleverness.** Internal consistency is the single biggest reason AI output works on this repo. New code must match existing patterns. If a pattern doesn't fit, raise it as an open question rather than diverging silently.
9. **Figma builds: variables, styles, components — every property, every time.** The same "tokens always" rule that applies to code applies to every Figma write. This is the core ethos of the design system, not a nice-to-have. Full detail in [CONTRIBUTING.md → Building in Figma](./CONTRIBUTING.md#building-in-figma) and the `tek-figma-build` skill at `.claude/skills/tek-figma-build/SKILL.md`. The four-point rule:
   1. **Apply ALL existing variables** to every element that can use them — spacing, border radius, colors, stroke weights. Raw numbers are forbidden where a variable exists.
   2. **All type must have a text style applied.** No raw `fontName + fontSize` pairs.
   3. **Use the component. If a component exists, use it. Every time.** Never draw a shape that mimics a Tek component.
   4. **No variable / component? Two paths:**
      a. *Close to existing → defer.* 23px → use 24px spacing. Dropdown with a different caret → still the dropdown.
      b. *Genuinely new → bind what you can, add to the additions audit.* Never silently un-tokenized.

## Repo layout — current state

This describes what's actually on disk right now. Aspirational/planned conventions are in the next section.

Components live in `packages/ui/src/<name>/<name>.ts` — one TypeScript file per component, lowercase kebab-case directory name matching the filename. Every component extends `LitElement` (or `TekBaseSelector` for checkbox-like controls) with `static styles`, `@property` decorators, and a `render()` returning a Lit template — see [ADR-0001](./docs/adr/0001-adopt-lit.md). Examples:

```
packages/ui/src/button/button.ts
packages/ui/src/character-count/character-count.ts
packages/ui/src/checkbox/checkbox.ts
packages/ui/src/input/input.ts
packages/ui/src/modal/modal.ts
```

Plus shared files at `packages/ui/src/`: `index.ts` (registers all custom elements), `base-selector.ts`, `types.d.ts`.

Tokens live in `packages/tokens/src/`:

- `primitives/` — raw values (`color.json`, `fonts.json`, `spacing.json`, `border.json`)
- `semantic/` — alias tokens, mode-aware (`tokens.json` is dark default, `tokens.light.json` is the light overrides)

**Token JSON files are written by the Token Push Figma plugin.** Do not hand-edit them — they get overwritten on the next push from Figma.

Built artifacts (`dist/`) are gitignored. Never committed.

## Workflow

After any change, run the relevant build:

```bash
npm run build:tokens    # if tokens changed
npm run build:ui        # if components changed
npm run build:mcp       # if the MCP endpoint app changed
```

For MCP endpoint changes, also run the eval harness against a deployment before merging retrieval-affecting work: `TEK_MCP_URL=<endpoint> npm run eval --workspace=apps/mcp`. PRs touching `apps/mcp/**` also run this automatically in CI (`.github/workflows/eval-gate.yml`) against the production endpoint and fail on recall/exact-match regressions — see `apps/mcp/README.md#eval-harness` for what it does and doesn't catch.

Verify in a local server before claiming a fix works. VS Code Live Server (port 5500) is the canonical local-dev URL — open `prototypes/sign-in/index.html`, `prototypes/sign-in/signup.html`, or `prototypes/component-library/index.html`. The sign-in pages import from `packages/*/dist/` directly, so they exercise the real built packages and function as integration tests.

**No confidence without proof.** Don't say "fixed" or "working" without demonstrable evidence — screenshot, snapshot, server output, passing test. Asserting something works without checking is the trust-breaker on this project.

For Figma Code Connect mappings: use the Figma MCP tools, don't hand-edit Figma's mapping store. See [CONTRIBUTING.md → Figma Code Connect](./CONTRIBUTING.md#figma-code-connect).

## What's in flight (planned, not yet shipped)

These are flagged here so you don't act as if they exist, and don't propose them as new ideas. Context for each is in [docs/tek-system-core.md](./docs/tek-system-core.md).

> Note: the PRD system (Part 2 of the architecture doc) was **retired 2026-07-29** during the backlog triage — its issues are closed and no `/prds/` directory is coming. Don't propose PRD tooling; the architecture doc's Part 2 is historical.

| Item | Where in the architecture doc |
|---|---|
| `@bbkemp/*` → `@tektronix/*` namespace migration | Part 4 |
| `@tektronix/.github` org-wide conventions repo | Part 4 |
| ESLint rules for hardcoded values, type exports, import paths | Part 3 |
| `npm run new:component` Plop scaffold | Part 3 |
| Storybook / component explorer | Part 4 (`apps/storybook`) |
| Per-component `.styles.ts` / `.test.ts` / `.stories.ts` split | Part 3 |
| MCP endpoint hardening — XAML keys in token results (folded into #228, "Update the WPF XAML library") and org SSO (#231, org-gated). Already **shipped**: the endpoint, the eval gate (`.github/workflows/eval-gate.yml`) plus its manifest-completeness check (2026-07-30), usage logging with hit/miss tracking (`mcp_usage`, surfaced via `server_info`, 2026-07-30), and the link-rotation runbook (`apps/mcp/ROTATION.md`). Per-PR preview ingest for corpus-content changes is still open, see `apps/mcp/README.md#eval-harness` | Part 1 + [docs/mcp-server-plan.md](./docs/mcp-server-plan.md) P1/P2 |
| UXR + analytics taxonomy | Part 5 |

Until namespace migration ships, packages and imports inside this repo use `@bbkemp/*`. Don't pre-emptively rename in code.

When a planned convention lands, update this file in the same PR.

## The five-system context

This repo is one piece of a broader architecture: Knowledge Corpus, PRD System, DEV System, GitHub Foundation, UXR & Analytics — five systems composing into a unified context layer for every team and AI tool. When questions reach beyond this repo (why Web Components? why Style Dictionary? how does this connect to PRDs and analytics? what's the migration sequencing?), read [docs/tek-system-core.md](./docs/tek-system-core.md). It is the reference; this file is the working contract.

## Working style for contributors and AI

These are repo-level rules that apply to anyone touching this codebase — human or AI. Personal communication preferences belong in a collaborator's own operating contract, not here.

- **Read the source before rebuilding anything.** Recreating X without first loading X has been the worst failure mode on this project. Use Read, preview tools, WebFetch, or Figma MCP — don't work from prior summaries.
- **Iterate, don't restart.** Pulling from scratch instead of editing the working file produces regressions. Always edit existing files when they exist.
- **Trace every value to a token.** If a value can't be expressed as an existing token, propose a new token via Figma Variables before adding the value to code.
- **Run lint and tests after changes.** Read the output. Self-correct on failures.

## Tools and stack

| Layer | Default |
|---|---|
| Web stack | Vercel + Next.js |
| CMS (curated content only — not raw documents) | Sanity |
| Vector store | Postgres + pgvector |
| Embeddings | Voyage AI |
| Reranker | Cohere Rerank v3 |
| LLM generation | Anthropic API, Claude Sonnet 4.6 |
| CI/CD | GitHub Actions |
| Versioning (future packaged-monorepo split) | Changesets |
| Scaffolds (planned) | Plop.js or Hygen |
| Diagrams | Affinity Designer |
| Docs | Markdown |
| Design | Figma |

**Never suggest Microsoft tools** (Word, Excel, PowerPoint, etc.) for any deliverable. Ever. For any reason.

## Read order when in doubt

1. This file
2. [docs/workflow.md](./docs/workflow.md) — git/GitHub workflow: trigger phrases, branching, commits, PRs, merge gate
3. [README.md](./README.md) — repo structure, token pipeline, type scale, fonts, install/usage, Figma node map
4. [CONTRIBUTING.md](./CONTRIBUTING.md) — pipeline detail, token rules, review and approval, local dev
5. [docs/tek-system-core.md](./docs/tek-system-core.md) — the five-system architecture

### If you're touching corpus work specifically

1. This file
2. [corpus/README.md](./corpus/README.md) — layout, subjects-are-folders, idempotence, completion criteria, undo, scaling
3. The skill SKILL.md for the asset class you're working on (under [`.claude/skills/`](./.claude/skills/)): `corpus-intake`, `document-screens`, `document-pdf`, `document-walkthrough`, `document-hardware`, `document-api`, `document-repo`
4. The canonical format-lock reference for that class (each skill names its own; for screens it's `corpus/sources/2450-ec/screens/home.md`)
5. [audits/README.md](./audits/README.md) — corpus-vs-audit boundary, design-additions / competitive / prototype audit types
