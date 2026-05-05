# CLAUDE.md

You are an AI assistant working in the **Tek Design System** repo — Tektronix's token-driven, framework-agnostic design system. Read this file in full at the start of every session. When this file disagrees with the actual repo, the repo wins — open a PR to update this file.

The thesis behind everything below: **codified, versioned, queryable systems compound.** AI tools amplify the system they're given — grounded context produces production-quality output, ungrounded context produces slop. Treat this file, [README.md](./README.md), [CONTRIBUTING.md](./CONTRIBUTING.md), and [docs/tek-system-core.md](./docs/tek-system-core.md) as the actual product, not scaffolding around it.

## What this repo is

A monorepo containing:

- `packages/tokens/` — design tokens (Style Dictionary v3, custom DTCG parser, `size/px` transform). Currently published as `@bbkemp/tokens` on GitHub Packages.
- `packages/ui/` — Web Components consumed by Tek products. Currently published as `@bbkemp/ui`.
- `figma-token-push/` — local-only Figma plugin that commits four token files atomically, with a concurrency group on the publish workflow to prevent SHA races.
- `qt/` — Qt translation layer (C++ header, QSS stylesheets, QML singleton). The reason the system is Web Components and not React.
- Root-level HTML reference pages (`signin.html`, `signup.html`, `component-library.html`) — pixel-perfect integration tests against the real built packages.

For repo structure, the token pipeline diagram, type scale, fonts, install/usage docs, and the full Figma node-to-source map: read [README.md](./README.md). Don't paraphrase what's there — link to it.

Primary maintainer: Bryan Kemp.

## Hard constraints — do not violate

These are the rules that hold the system together. Violating any of them produces drift the system explicitly exists to prevent.

1. **Web Components only. Never React.** The consuming runtime is Qt. Non-negotiable.
2. **Tokens always.** Never hardcode hex, px, font sizes, font families, or radii. Use `var(--tek-*)` with a fallback: `var(--tek-spacing-s05, 8px)`. Token-adherence rules are spelled out in [CONTRIBUTING.md → Updating Web Components](./CONTRIBUTING.md#updating-web-components).
3. **Figma is the source of truth.** Before writing or changing component code, look at the relevant Figma node. Do not assume existing code is correct. The Figma file is **DS-v2**, key `3wbYstse9TYKlPtCPpZH5X`. README has the node-to-source map.
4. **TypeScript strict mode.** No `any` escape hatches.
5. **No local publishes.** Packages publish only from CI on push to `main` (`publish-tokens.yml`, `publish-ui.yml`). Never run `npm publish` from a developer machine. No human holds the publish token.
6. **Never commit directly to `main`.** Always: branch → PR → merge from the GitHub UI. See [CONTRIBUTING.md → Working locally](./CONTRIBUTING.md#working-locally).
7. **Conventional Commits** (`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`). Feeds the auto-changelog and CI version bumps.
8. **Consistency over cleverness.** Internal consistency is the single biggest reason AI output works on this repo. New code must match existing patterns. If a pattern doesn't fit, raise it as an open question rather than diverging silently.

## Repo layout — current state

This describes what's actually on disk right now. Aspirational/planned conventions are in the next section.

Components live in `packages/ui/src/<name>/<name>.ts` — one TypeScript file per component, lowercase kebab-case directory name matching the filename. Examples:

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
```

Verify in a local server before claiming a fix works. VS Code Live Server (port 5500) is the canonical local-dev URL — open `signin.html`, `signup.html`, or `component-library.html`. These pages import from `packages/*/dist/` directly, so they exercise the real built packages and function as integration tests.

**No confidence without proof.** Don't say "fixed" or "working" without demonstrable evidence — screenshot, snapshot, server output, passing test. Asserting something works without checking is the trust-breaker on this project.

For Figma Code Connect mappings: use the Figma MCP tools, don't hand-edit Figma's mapping store. See [CONTRIBUTING.md → Figma Code Connect](./CONTRIBUTING.md#figma-code-connect).

## What's in flight (planned, not yet shipped)

These are flagged here so you don't act as if they exist, and don't propose them as new ideas. Context for each is in [docs/tek-system-core.md](./docs/tek-system-core.md).

| Item | Where in the architecture doc |
|---|---|
| `@bbkemp/*` → `@tektronix/*` namespace migration | Part 4 |
| `@tektronix/.github` org-wide conventions repo | Part 4 |
| `/prds/` directory + first PRD (likely Dashboard) | Part 2 |
| ADRs under `/docs/adr/` | Part 3 |
| ESLint rules for hardcoded values, type exports, import paths | Part 3 |
| `npm run new:component` Plop scaffold | Part 3 |
| Storybook / component explorer | Part 4 (`apps/storybook`) |
| Per-component `.styles.ts` / `.test.ts` / `.stories.ts` split | Part 3 |
| Knowledge corpus (RAG over manuals) | Part 1 |
| UXR + analytics taxonomy | Part 5 |

Until namespace migration ships, packages and imports inside this repo use `@bbkemp/*`. Don't pre-emptively rename in code.

When a planned convention lands, update this file in the same PR.

## The five-system context

This repo is one piece of a broader architecture: Knowledge Corpus, PRD System, DEV System, GitHub Foundation, UXR & Analytics — five systems composing into a unified context layer for every team and AI tool. When questions reach beyond this repo (why Web Components? why Style Dictionary? how does this connect to PRDs and analytics? what's the migration sequencing?), read [docs/tek-system-core.md](./docs/tek-system-core.md). It is the reference; this file is the working contract.

## Working style for AI assistants in this repo

- **Lead with the answer.** Justify after, only as much as needed. Skip preambles.
- **Be terse.** No "great question," no caveats unless load-bearing.
- **Push back directly when wrong.** Don't soften tradeoffs; surface them.
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
2. [README.md](./README.md) — repo structure, token pipeline, type scale, fonts, install/usage, Figma node map
3. [CONTRIBUTING.md](./CONTRIBUTING.md) — pipeline detail, token rules, review and approval, local dev
4. [docs/tek-system-core.md](./docs/tek-system-core.md) — the five-system architecture
