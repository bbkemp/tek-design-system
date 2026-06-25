# Tek System Core

The architecture of Tektronix's context layer: five systems — design, knowledge, requirements, dev standards, user signal — built on a shared GitHub foundation. Each system delivers value on its own. Together, they form a single context layer that humans and AI tools query.

The premise: codified, versioned, queryable systems compound. AI tools amplify the system they're given. Grounded context produces production-quality output; ungrounded context produces slop. Each system here is one slice of Tek's expertise made addressable by tools and reusable by teams: what we know (corpus), what we want (PRDs), how we build (DEV), what we ship (design), what users do (UXR).

## Contents

- [Meta-Architecture](#meta-architecture) — how the systems compose
- [System Architecture](#system-architecture) — GitHub foundation, polyrepo, conventions
- [Design System](#design-system) — tokens, components, the existing proof point
- [Knowledge Corpus](#knowledge-corpus) — RAG over manuals, specs, institutional knowledge
- [PRD System](#prd-system) — product requirements as version-controlled artifacts
- [DEV System](#dev-system) — architectural rules codified so AI produces production code
- [UXR & Analytics](#uxr--analytics) — qualitative and quantitative user signal
- [Content System](#content-system) — files-as-CMS, schema derived from the design system
- [Appendix: Notes for Bill](#appendix-notes-for-bill) — leadership-facing framing, kept in personal voice
- [Appendix: Why the Design System works as the proof point](#appendix-why-the-design-system-works-as-the-proof-point)

---

## Meta-Architecture

Each system below stands on its own. Composing them is where the leverage shows up.

### The unified picture

```
                          ┌──────────────────────────┐
                          │      AI Agent Layer      │
                          │   (Claude Code, Cursor,  │
                          │    claude.ai, custom)    │
                          └────────────┬─────────────┘
                                       │
                          ┌────────────▼─────────────┐
                          │     Tek MCP Endpoint     │
                          │      (the unifier)       │
                          └────────────┬─────────────┘
                                       │
       ┌──────────────┬────────────────┼────────────────┬──────────────┐
       │              │                │                │              │
       ▼              ▼                ▼                ▼              ▼
  ┌─────────┐   ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
  │ Design  │   │   PRDs   │    │   DEV    │    │Knowledge │    │ UXR &    │
  │ System  │   │          │    │ Standards│    │  Corpus  │    │Analytics │
  │         │   │  /prds   │    │   ADRs   │    │  (RAG)   │    │  Repo +  │
  │ tokens  │   │  in DSY  │    │ CLAUDE.md│    │ manuals, │    │Warehouse │
  │ ui      │   │  repo    │    │  CI gates│    │ specs,   │    │          │
  │ qt      │   │          │    │          │    │ etc.     │    │          │
  └─────────┘   └──────────┘    └──────────┘    └──────────┘    └──────────┘
       │              │                │                │              │
       └──────────────┴────────────────┼────────────────┴──────────────┘
                                       │
                          ┌────────────▼─────────────┐
                          │   GitHub Foundation      │
                          │  @tektronix org, polyrepo│
                          │  conventions, CI/CD, SSO │
                          └──────────────────────────┘
```

The GitHub foundation is the substrate. The five domain systems are the layers. The MCP endpoint is the unifier. AI agents are the consumers.

### How the systems link

The systems reference each other directly. Each link is small; the graph they form is the actual product.

- **Design System ↔ PRDs.** PRDs reference component IDs and versions. Components link back to the PRDs that specified them.
- **Design System ↔ DEV.** ADRs explain why patterns exist. CLAUDE.md and CI rules enforce them. Tokens and components are the artifacts those rules govern.
- **PRDs ↔ DEV.** PRD acceptance criteria map to test files. CI checks every shipped component has a corresponding PRD.
- **Knowledge Corpus ← all systems.** The corpus ingests design docs, PRDs, ADRs, and analytics definitions. Other systems' outputs become the corpus's inputs.
- **UXR ↔ Knowledge Corpus.** Personas live in the corpus. Research findings join to customer data and product manuals. A question about "how aerospace customers use trigger holdoff" pulls from manuals, support tickets, prior research, and live event data in one query.
- **Analytics ↔ PRDs.** Acceptance criteria reference event names from the analytics taxonomy. Shipping a feature means telemetry exists from day one.

### What it adds up to

- **Day 1 of the workshop** — no context system. PM writes a PRD from scratch, prototypes, gets slop.
- **Day 2** — one context system (the design system). The refactor lands cleanly because Claude can pattern-match against existing primitives.
- **Day N** — all five systems composed. PRDs reference components and analytics events. AI generates code that respects ADRs, uses tokens, emits the right telemetry, and satisfies acceptance criteria. CI validates output. The corpus answers spec questions inline. Personas pre-flight design decisions. Real research validates afterward.

Each artifact makes the next one easier to produce.

### Sequencing

Five systems in parallel won't work. The order below has each system delivering value alone and adding leverage to the next.

1. **GitHub foundation.** Substrate. ~3 weeks.
2. **Design System hardening in the new org** (already at v1.0). Migrate to `@tektronix/`. ~2 weeks.
3. **PRD system.** Smallest of the five. ~1 week to set up; ongoing to populate.
4. **DEV standards Phase 1.** CLAUDE.md, ADRs, ESLint rules. ~1 week. Immediate impact on AI output quality.
5. **Knowledge Corpus Phase 1.** One product line, one doc type. ~2–3 weeks.
6. **UXR persona layer + single-product quant Phase 1–2.** Builds on the corpus. ~3–4 weeks.
7. **MCP unifier.** Stands up after at least three of the systems are in place. ~2 weeks.

About 4–5 months of sequenced work to reach the unified state. Each phase ships a demoable artifact. Each phase makes the next one cheaper.

### Why this matters

The design system already proved the model: codified, versioned, queryable systems compound. Day 2 of the workshop demonstrated it — a refactor that would have taken weeks landed in hours because the system gave the AI grounded context.

Applied at the company level: five systems, one substrate, one endpoint. PRDs, dev standards, institutional knowledge, and user signal become machine-readable and AI-addressable. Every team and every AI tool grounds in the same source of truth.

This is the infrastructure that turns Tek's expertise — engineering rigor, measurement science, product knowledge — into something composable and reusable, instead of locked in PDFs and people's heads.

---

## System Architecture

The substrate the other systems sit on. Every system above it inherits whatever the GitHub setup looks like. Standardize once, here, and everything else composes cleanly.

### One GitHub Organization

Everything Tek-related lives under a single GitHub Organization owned by Tektronix, with SSO, billing, and access controls. Not personal accounts, not multiple orgs.

The current `@bbkemp/tokens` and `@bbkemp/ui` packages are in a personal namespace. They need to migrate to `@tektronix/tokens` and `@tektronix/ui` (or `@tek/`, depending on what gets reserved) once the org is in place. Migration is cheaper at five consumers than at fifty.

### Repo topology

Monorepo where things release together; separate repos where they don't.

```
@tektronix/design-system          ← THE design system monorepo
  /packages
    /tokens                        → publishes @tektronix/tokens
    /ui                            → publishes @tektronix/ui
    /icons                         → publishes @tektronix/icons
    /qt                            → publishes @tektronix/qt
  /prds                            → PRDs co-located
  /docs/adr                        → ADRs
  /apps
    /docs-site                     → public design system docs
    /storybook                     → component explorer
  CLAUDE.md
  .cursorrules
  CONTRIBUTING.md

@tektronix/figma-plugins           ← Token Push, future PRD Push, etc.
  /packages
    /token-push
    /prd-push (future)

@tektronix/knowledge-corpus        ← RAG system
  /ingestion
  /api
  /web
  /eval

@tektronix/analytics               ← event taxonomy, dbt models
  /taxonomy                        → shared event schema
  /dbt                             → metric definitions
  /sdk                             → telemetry SDK for products

@tektronix/<product-name>          ← One repo per product surface
  consumes @tektronix/ui
  emits events per @tektronix/analytics taxonomy
  has its own /prds for product-specific requirements
```

Five or six top-level repos, each with a clear owner and clear boundary. The design system is a monorepo because the packages inside ship together. Knowledge corpus, analytics, and Figma plugins are separate because they have different release cycles, different infrastructure, and different ownership. Product repos consume the design system as published packages — they don't reach into its internals.

### Branch and release strategy

Same conventions across every repo:

- `main` is always releasable.
- Feature branches off main, PR back to main.
- **Conventional Commits** (`feat:`, `fix:`, `chore:`) — feeds automated changelog generation.
- Semantic versioning. Patch auto via CI; minor/major manual.
- **Changesets** to coordinate version bumps across the design system monorepo's packages.
- Tags on every release. GitHub Releases auto-generate notes from Conventional Commits.
- Protected `main` branches everywhere; require PR review and CI passing.

### CI/CD architecture

GitHub Actions, with shared reusable workflows.

```
@tektronix/.github                 ← org-wide repo
  /workflow-templates              → starter workflows for new repos
  /actions                         → custom reusable actions
    /publish-package
    /run-evals
    /update-corpus
  README.md                        → org-wide conventions
```

The `.github` repo is GitHub's mechanism for org-wide defaults. Workflow templates here become available when anyone in the org creates a new repo. Reusable workflows let you write the publish logic once and call it from every repo.

Concurrency groups, environment secrets, and OIDC authentication for cloud resources are standardized at the org level.

### Access and permissions

Teams, not individuals:

```
@tektronix/design-system-maintainers   ← primary maintainer + future hires
@tektronix/design-system-contributors  ← anyone who PRs to it
@tektronix/product-engineering         ← consumers
@tektronix/pm                          ← PRD authors
@tektronix/ai-platform                 ← corpus + analytics maintainers
```

Permissions assigned to teams. When someone joins or leaves, you update team membership in one place.

SSO through Tek's identity provider. No personal accounts with org access. Two-factor required org-wide.

### Package registry

GitHub Packages for now; integrates cleanly with GitHub Actions for publish. As consumption grows, evaluate npm Enterprise or self-hosted Verdaccio.

What matters: every package publishes from CI only, never from a developer's laptop. Publish credentials live in GitHub Actions secrets, scoped to the workflow. Branch protection requires CI to publish on tag push. **No human holds the publish token.**

### How the systems compose at runtime

Once everything's under one org with consistent conventions, the systems plug into each other:

- Design system repo references PRDs in the same repo and ADRs in the same repo.
- Product repos reference `@tektronix/ui` packages and emit events per `@tektronix/analytics` taxonomy.
- Knowledge corpus ingests from design system docs, analytics dbt definitions, and product PRDs.
- AI tools (Claude Code, Cursor, MCP agents) read `CLAUDE.md` from any repo, get repo-appropriate context, and produce repo-appropriate output.

The MCP server pattern is the runtime unifier. A single endpoint exposes the design system, PRDs, ADRs, corpus, and analytics as queryable surfaces — see the Meta-Architecture diagram above.

### Migration sequencing

1. **Org setup (week 1).** Create or claim the `@tektronix` org. SSO, teams, billing, branch protection defaults. No content migration yet.
2. **Design system migration (weeks 2–3).** Move the design system repo into the org. Republish packages under `@tektronix/`. Deprecation notices on the old `@bbkemp/` packages pointing to the new ones. Update known consumers.
3. **Conventions repo (week 3).** Stand up `@tektronix/.github` with workflow templates, standard `CLAUDE.md`, `CONTRIBUTING.md`, ADR template, PRD template. Every new repo starts from a known good state.
4. **New systems land in the right place (weeks 4+).** Knowledge corpus, analytics, future Figma plugins start in the org with conventions baked in.
5. **Product repo audit.** Inventory every existing Tek-related repo. Categorize as migrate, archive, or leave alone. Surface the ownership conversations that need to happen anyway.
6. **Connective tissue.** Build the MCP unifier and wire the systems together once the substrate is consistent.

---

## Design System

Tektronix's token-driven, framework-agnostic design system. v1.0.0 shipped. Lives in `tek-design-system` — moves into the `@tektronix/` org as Step 2 of the migration sequencing above.

### Stack

- **Web Components** as the consumer-facing primitive. Required because the consuming runtime is Qt — React isn't an option.
- **Style Dictionary v3** with a custom DTCG parser and `size/px` transform. Builds tokens into CSS, JS, and Qt outputs from one source.
- **Token pipeline:** Figma Variables → W3C DTCG JSON → Style Dictionary → CSS / JS / Qt outputs.
- **Light/dark mode** via `prefers-color-scheme` and a `data-theme` attribute override.
- **Qt translation layer:** C++ header (`TekTokens.h`), QSS stylesheets, QML singleton, reference HTML page. Same tokens, native to Qt.
- **GitHub Actions** for CI/CD with concurrency groups (resolved a publish-time SHA race).

### Packages

| Package | Current namespace | Future namespace | Contents |
|---|---|---|---|
| Tokens | `@bbkemp/tokens` | `@tektronix/tokens` | Style Dictionary outputs (CSS, JS, JSON) |
| UI | `@bbkemp/ui` | `@tektronix/ui` | Web Components |

Published from CI only on tag push, via GitHub Packages.

### Tooling

- **Token Push Figma plugin** (v5, ES5). Local-only Figma plugin. Commits four token files atomically with a concurrency group on the publish workflow. Handles emoji-prefixed collection names. Designer pushes from inside Figma; CI handles the rest.
- **Reference HTML pages** at the repo root: `signin.html`, `signup.html`, `component-library.html`. Pixel-perfect integration tests against the real built packages. Dark and light modes.
- **Versioning:** patch auto via CI on every publish. Minor and major manual.

### What's shipped

- v1.0.0 token system (primitives + semantic, dark + light modes).
- v1.0.0 Web Component library (`tek-button`, `tek-input`, `tek-label`, `tek-character-count`, `tek-checkbox`, `tek-radio`, `tek-toggle`, `tek-selector`, `tek-modal`, `tek-footer`, `tek-text-link`).
- Qt translation layer outputs.
- Sign-in and sign-up reference pages.
- Token Push plugin v5.

### What's in flight

- **`@bbkemp/*` → `@tektronix/*` namespace migration.** Sequenced as Step 2 of the System Architecture migration above.
- **`/prds/` directory** in the design system repo. First PRD likely Dashboard.
- **ADRs** under `/docs/adr/` capturing existing in-head decisions (Web Components vs React, Style Dictionary v3, concurrency groups).
- **ESLint rules** for hardcoded values, missing type exports, wrong import paths.
- **Plop scaffold** (`npm run new:component`) for boilerplate-by-default.
- **Storybook** as a component explorer at `apps/storybook`.
- **Per-component file split** (`<name>.styles.ts`, `<name>.test.ts`, `<name>.stories.ts`) — current state is a single file per component.

For details on the design system itself, see [README.md](../README.md), [CONTRIBUTING.md](../CONTRIBUTING.md), and [CLAUDE.md](../CLAUDE.md). The appendix at the end of this doc covers why the design system works as the proof point for the rest of the architecture.

---

## Knowledge Corpus

RAG over Tek's manuals, specs, and institutional knowledge. Phase 1 target: one product line, one document type, end-to-end with citations. Demonstrable in 2–3 weeks; proves the pattern before scaling.

### Stack

- **Orchestration:** LlamaIndex. More retrieval-focused than LangChain.
- **Vector store:** Postgres + pgvector. Avoids new infrastructure; Postgres handles metadata filtering natively. Move to Pinecone or Qdrant only if scale demands it.
- **Embeddings:** Voyage AI `voyage-3` or OpenAI `text-embedding-3-large`. Voyage tends to do better on technical content.
- **Reranker:** Cohere Rerank v3. Significant quality lift for hardware specs.
- **Generation:** Anthropic API, Claude Sonnet 4.6. Verify enterprise/ZDR posture with IT before any non-public docs go through it.
- **Interface:** Next.js app, simple chat UI, deployed on Vercel.
- **Hosting note:** For sensitive Tek docs, plan to move to Bedrock or Anthropic enterprise tier before Phase 2. Phase 1 can run on public manuals only to defer the security conversation while the value gets proven.

### Ingestion pipeline

```
Source PDFs/HTML
  ↓
Parser (Unstructured.io or LlamaParse — both handle technical PDFs with tables and figures)
  ↓
Chunker (semantic chunking, ~512 tokens, 15% overlap; section headers preserved in metadata)
  ↓
Metadata enrichment (product_line, doc_type, version, page, section, date, source_url)
  ↓
Embedding (Voyage)
  ↓
pgvector (with metadata in adjacent columns for filtering)
```

Run as a scheduled job (GitHub Actions or cron on a small VM). Re-index on document updates. Keep the raw parsed text alongside embeddings so you can re-embed without re-parsing when models change.

### Retrieval flow

```
User query
  ↓
Query expansion (optional — Claude rewrites for technical synonyms)
  ↓
Hybrid search: pgvector semantic + Postgres full-text BM25
  ↓
Metadata filter (product_line, version, date range)
  ↓
Top 20 chunks → Cohere Rerank → Top 5
  ↓
Claude Sonnet 4.6 with system prompt + retrieved chunks + query
  ↓
Response with inline citations linking to source PDF + page
```

Citations are required. Every claim links to a page in a manual. Engineers trust the system because they can verify in two clicks.

### Evaluation harness

Hand-curate 50 questions with known correct answers from the chosen product line. Run them on every change. Track retrieval recall (did the right chunk make it into context?) and answer accuracy (did the LLM use it correctly?). Without an eval harness, RAG quality is invisible until users complain.

### Phase 1 deliverable

A working internal chat — `tek-corpus.internal` or similar — where anyone can ask spec/manual questions about one product family and get cited answers. Demo: side-by-side with someone trying to get the same answer from PDFs and SharePoint.

### Phases 2–5

- **Phase 2.** Expand document types within the same product line (app notes, datasheets, training).
- **Phase 3.** Expose as an MCP server so Claude Code, Cursor, and other agents auto-retrieve.
- **Phase 4.** Second product line. Validate the pattern generalizes.
- **Phase 5.** Personas, scoped retrieval profiles, customer-facing constrained interface.

### CMS integration (Sanity or similar)

A CMS earns its place for some of the corpus, not all of it. Unify at the retrieval layer, not the authoring layer.

**Where a CMS fits:** curated, editorial content where humans need to author, review, and version structured records — product pages, polished app notes, persona definitions, FAQ entries, troubleshooting guides written for the AI to use, glossary terms, comparison tables.

**Where a CMS is the wrong tool:** manuals, datasheets, EE reference databases, hardware specs, screenshots, support archives. Existing artifact content — thousands of pages nobody is going to re-author into a CMS schema.

**Architecture:**

```
CMS (curated content)        ─┐
                               ├─→  Ingestion → Vector store → RAG
Object storage (raw docs)    ─┘
```

The vector store is the unified retrieval surface. Metadata records the source (`source: sanity` vs `source: manual_pdf`) so queries can filter or weight by content type. Editorial content might rank higher because it's curated; raw manuals are the long tail of deep technical detail.

**Dual-purpose payoff:** the same curated content powers both the public ecomm site *and* the internal AI retrieval layer. Write a product description once → it renders on the site and gets embedded for retrieval. Write a troubleshooting guide once → it's a support page and a citable chunk. One source of truth across human readers and AI agents.

This only applies to content that's both customer-facing and useful for AI retrieval. Internal manuals don't go on the ecomm site. EE reference data doesn't go on the ecomm site. CMS earns its place for the overlap; raw ingestion handles the rest.

**Sequencing:** Phase 1 of the corpus is raw PDFs → vector store. Don't delay ingestion waiting for the CMS. When the ecomm site spins up on Sanity, add a publish webhook that pushes Sanity content into the same vector store with `source: sanity` metadata.

---

## PRD System

Product requirements as version-controlled markdown in the repo. Small enough that the PM owns it end-to-end without it feeling like overhead.

### Structure

A single new directory in the design system repo:

```
/prds
  /components
    Button.prd.md
    ChannelSelector.prd.md
  /screens
    Dashboard.prd.md
    SixChannel.prd.md
  /flows
    SignIn.prd.md
  README.md  ← conventions, how to write one, how to link to components
```

No new repos, no new tools, no new services. Markdown next to the code.

### PRD format

Markdown with front-matter:

```markdown
---
id: PRD-DASHBOARD-001
title: BenchProto Dashboard
version: 1.1.0
status: draft  # draft | approved | shipped | deprecated
owner: [PM name]
components: ["@tektronix/ui/Dashboard", "@tektronix/ui/ChannelSelector"]
related_prds: ["PRD-SIXCHANNEL-001"]
last_updated: 2026-04-30
---

## Problem
[Why this exists, in plain language]

## Users & Use Cases
[Who, what they're trying to do]

## Requirements
- REQ-001: [Specific, testable requirement]
- REQ-002: ...

## Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2

## Out of Scope
[Explicit non-goals]

## Open Questions
[Things still being decided]
```

The front-matter is machine-readable, so LLM tools can filter, link, and traverse PRDs. The body is human-readable markdown so the PM writes a doc, not code.

### Workflow

- PM writes PRDs as PRs to the design system repo.
- Design reviews for component/token alignment, the same way an engineer reviews code.
- Merge = approved.
- Tag matches the component version it ships with.
- Anyone — designer, engineer, PM, AI — can grep, link to, or feed PRDs into prompts.

### LLM integration

With PRDs in the repo, AI tools have a grounding source by default:

- **Claude Code:** "build the dashboard per `/prds/screens/Dashboard.prd.md` using `@tektronix/ui` components" — Claude reads the PRD, the component code, the tokens, and produces aligned output.
- **Cursor:** the PRD is a file the editor sees.
- **claude.ai:** drop the PRD into context alongside the design system docs and ask for prototypes.

This is what made the Day 2 refactor land cleanly — the system gave Claude grounded context. PRDs make that condition repeatable for any feature, not just refactors.

### Ownership

- **PM owns** PRD content, conventions, the writing standard, the review process, the versioning rhythm.
- **Design system owns** the repo conventions (front-matter schema, directory structure), the link to components/tokens, and rendering PRDs in any future docs site.

The PM builds parallel infrastructure with the same architectural principles, in their own domain.

### Phase 1 deliverable

Pick one screen — Dashboard is the obvious one — and write its PRD in this format, in the repo, as a PR. Then generate a prototype against it in Cursor and compare to what generic prompting produces.

---

## DEV System

Codify architectural rules, patterns, and process as machine-readable artifacts so AI tools produce production-quality code by default.

Claude Code produces production-quality code only when production quality is defined as constraints in the repo. Most dev style guides are PDFs or wiki pages — unreadable to AI tools and ignored by humans. The move is to convert them into artifacts that live in the repo and get pulled into context automatically.

This is the same model as tokens and components, one layer up: architectural rules made machine-readable.

### The six layers

**1. Architectural Decision Records (ADRs)**

Short markdown docs in `/docs/adr/` capturing why a pattern exists. "We use Web Components instead of React because Qt." "We use Style Dictionary v3 with a custom DTCG parser." "We use a concurrency group in the publish workflow because of the SHA race condition." Each ADR is dated, numbered, and has a status (proposed/accepted/superseded). When Claude Code is asked to add a new component, it reads the ADRs and produces code that respects prior decisions instead of relitigating them.

**2. Code structure and conventions (CONTRIBUTING.md)**

Where files live, how they're named, how exports are structured, what the public API surface looks like, how internal vs. external utilities are separated. The rule needs to be prescriptive enough that the AI follows it without ambiguity.

> "Components live in `packages/ui/src/<component-name>/<component-name>.ts`."

A model can execute that. "Write clean, modular code" can't.

**3. Pattern libraries (code primitives)**

Same idea as design tokens, for code. Reusable hooks, utilities, base classes, error handling patterns, logging conventions, telemetry wrappers. If every component logs the same way, error-boundaries the same way, exposes the same lifecycle hooks — Claude Code learns the pattern from existing components and applies it to new ones.

Consistency in the existing codebase is the single biggest predictor of AI output quality. The Day 2 refactor worked because the system was internally consistent enough for Claude to pattern-match.

**4. AI-specific rules files (CLAUDE.md / .cursorrules)**

Cursor reads `.cursorrules`, Claude Code reads `CLAUDE.md`, both at the repo root, both injected into every prompt. This is where meta-instructions live:

> "Always check `/prds/` for the relevant PRD before writing code. Always reference `@tektronix/tokens` for any styling values, never hardcode. Always emit Web Components, never React. Always run `npm run lint` after changes."

This is the layer that turns AI tools from generic code generators into Tek-specific code generators.

**5. Validation as code (CI gates)**

ESLint, Stylelint, Prettier, TypeScript strict mode, custom AST checks for design-system-specific rules ("no hardcoded hex values," "no inline styles," "all components must export their type definitions"). Tests for accessibility (axe-core), visual regression (Chromatic or Playwright snapshots), bundle size budgets.

CI is the enforcement layer. It catches cases where the AI or a human didn't follow the rules. When CI fails, Claude Code reads the failure and self-corrects — the feedback loop is what makes the system robust. Without CI gates, AI-generated code drifts; with them, it converges.

**6. Templates and scaffolds**

A `npm run new:component <Name>` script generates the full boilerplate — files, tests, stories, exports, registry entry — using a template that already encodes every convention. Developers and AIs don't write boilerplate; they fill in the meaningful parts.

This is the equivalent of the Token Push plugin for design — small tooling that enforces the system at the moment of creation. Plop.js or Hygen handle this trivially.

### How the layers stack

```
ADRs                  ← why
CONTRIBUTING.md       ← how (human)
CLAUDE.md / rules     ← how (AI)
Pattern library       ← reusable primitives
Templates/scaffolds   ← creation enforcement
CI gates              ← validation enforcement
```

Top three are documentation. Bottom three are executable. The design system worked because rules were encoded into Style Dictionary, the Token Push plugin, and CI publish workflows — not just documentation. Same move applies here. A `CLAUDE.md` that says "always use tokens" is a starting point; an ESLint rule that fails the build when a hex value appears in a `.ts` file is the actual system.

### Phasing

**Phase 1 — Documentation foundation (1 week).**

- Write `CLAUDE.md` at the repo root.
- Capture 5–10 ADRs from existing in-head decisions.
- Add ESLint rules for the most common drift cases (hardcoded values, missing types, wrong import paths).

Lowest effort, highest immediate impact on AI output quality.

**Phase 2 — Scaffolding (1–2 weeks).**

- `new:component` generator.
- `new:token` generator.
- New artifacts go through the system by default. AI tools use the generators instead of inventing structure.

**Phase 3 — Validation layer (2–3 weeks).**

- Visual regression tests.
- a11y tests.
- Bundle budgets.
- CI gates that block merges on violations.

This is the layer that lets AI output be reviewed at the architectural level, not line-by-line.

**Phase 4 — Cross-system links.**

- Dev rules reference PRDs ("this component implements `/prds/components/Button.prd.md`").
- CI checks that every shipped component has a corresponding PRD.
- Docs site renders PRDs, components, tokens, and ADRs together.

PRDs, components, tokens, and ADRs become one connected graph.

---

## UXR & Analytics

Unify qualitative and quantitative user signal into a queryable layer. Grounds product decisions, speeds research, and joins to the rest of the context architecture.

UXR is the area where the field is genuinely figuring things out in real time. No settled playbook yet — which means Tek can define one rather than inherit one.

### Simulated qualitative research

AI-simulated user research is real and useful, and dangerous when used as a replacement for actual users. The teams getting value from it treat it as a **pre-research filter and a between-study amplifier**, not a substitute.

**Where it works:**

- **Pre-flighting study designs.** Before a real usability test, simulate it with synthetic personas to catch confusing tasks, leading questions, dead-end flows. Surfaces half the protocol issues before any real user sits down.
- **Heuristic evaluation at scale.** Point a well-grounded AI at a flow; get a structured critique against established heuristics. Catches the obvious 60–70% of issues. Useful for early-stage screens before research budget is spent.
- **Persona-driven walkthroughs.** "Walk through this flow as a field application engineer at a mid-size aerospace contractor capturing a transient on a power rail." If the persona is grounded in real Tek customer data, the walkthrough surfaces plausible friction points. Not real findings — plausible ones, enough to prioritize where to look.
- **Synthesis acceleration.** Most under-rated use. After real research, AI dramatically speeds up coding transcripts, clustering themes, drafting reports. Teams doing this well spend the saved time on more studies, not fewer.
- **Survey design and pilot testing.** Generate drafts against personas, identify leading or confusing questions, simulate response distributions before launch.

**Where it fails:**

Synthetic users do not surface the things that make real UXR valuable — the unexpected workflow, the unspoken constraint, the cultural context. AI personas average toward training data and the prompt. Real users diverge from it in exactly the places where insight lives. Treating sim-UXR as a replacement for real research is the failure mode that's burning teams right now, and engineering leadership eventually catches on.

The internal frame: simulated qualitative is a force multiplier on real qualitative, not a substitute for it.

**Tools (category shifting fast):**

Maze and UserTesting both have AI features for synthesis and study setup. Dovetail leads for AI-assisted analysis of real qualitative data. Marvin and Looppanel are research-repo tools with strong AI synthesis. Synthetic Users and Listen Labs do pure simulated research — interesting to watch, risky to depend on. Most respectable teams build this themselves with Claude or GPT and a strong corpus rather than buying a synthetic-user product. The moat is in the corpus, not the tool.

### Quantitative integration

The data exists. It's scattered, owned by different teams, and probably has inconsistent definitions of basic terms like "session" or "active user."

Three components:

- **Event taxonomy.** Shared schema for what gets tracked, named consistently across products. `channel_added`, `measurement_captured`, `trigger_configured` — defined once, used everywhere. The design-tokens equivalent for analytics. Skipped by most orgs and regretted later. Without it, you can never compare across products.
- **Central analytics warehouse.** Snowflake, BigQuery, or Databricks. Every product pipes events into the same warehouse with the shared taxonomy. Unified retrieval surface for quant, parallel to the vector store for qual.
- **Semantic layer on top.** dbt or Cube to define metrics consistently — "monthly active users," "feature adoption," "time-to-first-measurement." Same answer regardless of who runs the query.

**Tools:**

Amplitude or Mixpanel for product analytics if you want the BI layer prebuilt. PostHog if you want self-hostable and open-source-flavored (fits the Vercel/Next.js stack). Snowflake/BigQuery/Databricks if you want to roll the warehouse yourself. For Tek's scale and engineering culture: Snowflake or BigQuery as the warehouse with PostHog or Amplitude on top, but worth a real conversation with whoever currently owns analytics.

**The hardware wrinkle:**

A lot of Tek's product surface is hardware UI — instruments running embedded software. Telemetry from those is harder than from web apps. Need an on-device telemetry SDK that batches and uploads when network is available, with explicit opt-in for privacy/regulatory reasons. This is its own engineering project. Software products instrument in weeks; instruments in quarters. Flag early — it's the long pole.

### Qual + quant unification

Feeding both into the same retrieval layer is what makes the system more than the sum of its parts.

A research finding ("users struggle to configure trigger holdoff") is more powerful when joined to quant ("`trigger_holdoff_configured` event has 23% completion rate vs. 78% for `trigger_level`"). Qual tells you what's happening; quant tells you how often.

Same architecture as the knowledge corpus — vector store for qual artifacts, warehouse for quant events, unified query interface across both. *"Show me the friction points in the channel configuration flow, ranked by frequency, with supporting quotes from research."* Trivial with the unified layer; not possible without it.

### Phasing

**Phase 1 — Persona layer on top of the corpus.**
Pull from existing customer data, support archives, sales notes, prior research. Define 4–6 grounded personas with real workflows, real instruments, real constraints. Any team can run a simulated heuristic walkthrough or pre-flight a study against personas that aren't fictional.

**Phase 2 — Single-product quant pipeline.**
Pick one product with the cleanest existing telemetry. Define the event taxonomy for that product. Get it into a warehouse. Build a simple metrics dashboard. Same wedge strategy as the corpus.

**Phase 3 — Research repository.**
Where every real study, transcript, and finding lives, structured and searchable. Same architecture as the corpus. Most orgs lose 80% of their research insight because it's locked in PDFs nobody re-reads. A research repo solves that.

**Phase 4 — Cross-product taxonomy + AI synthesis pipeline.**
Extend the event taxonomy to a second product. Cross-product questions become answerable. AI synthesis plugged into the research pipeline (transcribe → code → cluster → draft report); researcher edits and validates; output becomes a structured artifact. Same pattern as PRDs: research findings as machine-readable, queryable, version-controlled artifacts.

**Phase 5 — Joined retrieval.**
Qual and quant accessible through the same MCP surface as everything else. Any AI tool grounds in real user data, not just specs and requirements.

---

## Content System

Files-as-CMS. Content lives as markdown and JSON in git; the **schema is derived from the design system's components, not authored separately**. This is the death of the SaaS CMS for Tek's surfaces — and the same files-as-source thesis the rest of this architecture already runs on, applied to editorial content.

### The thesis: kill the duplicated schema

A SaaS CMS (Contentful, Sanity, Strapi) bundles three things: a content store, a content model, and an editing UI. The part teams assume is the value is the store — the database. It isn't. Files in git are a better store: versioned, diffable, branchable, free, portable, no vendor.

The genuinely expensive part is the **content model**, and a SaaS CMS makes you define it *twice and maintain the mapping by hand forever* — once in the CMS UI, once again in every consuming frontend that maps `entry.fields.heroTitle` onto a real component. That hand-maintained mapping is the slog, the cost, and the drift.

Tek can collapse it. The design system already has a **formally defined, 1:1, token-backed component contract** spanning Figma → code → Qt (→ WPF, → React, → HTML). So a content entry's schema doesn't get *authored* — it gets *derived* from the component's prop contract. The schema for a Hero entry **is** the Hero component's contract. One source. Generated, not maintained.

That is the metamorphosis. Not "files replace the database" — that's the easy 20%. **The schema stops being a separate thing you own.** Most teams can't do this because they lack the token→Figma→code closure. Tek has it. That's why the SaaS CMS dies here specifically.

### Prior art — standing on solid ground

The file-based half is proven: **Astro Content Collections, Keystatic, TinaCMS, Contentlayer, Decap** have all validated git-backed MD+JSON content with typed schemas. Borrow their solved problems. What none of them have is Tek's back half — the design-system-as-rendering-contract and a RAG that knows the whole system. Spend the novelty budget there, not on re-deriving a markdown content store.

### Structure

```
/content
  /pages
    home.json              ← page = ordered list of section refs + props
    products/scopes.json
  /entries
    /hero-launch-2026
      en.md                ← one entry = one folder, one md per locale
      de.md
      ja.md
      meta.json            ← entry-level structured fields
  /assets
    hero-launch-2026.png   ← referenced by path from md/json
```

- **A page** is a JSON file: an ordered list of section references, each naming a component and its props.
- **An entry** is a folder. Markdown carries prose; `meta.json` carries structured fields. Images are referenced by path, never embedded.
- **Locale, personalization, and A/B variants are the same mechanism** — sibling files in the entry folder (`en.md`, `de.md`; or `default.md`, `variant-b.md`). One pattern, not three.

### The three keystones — where the real work is

The store is the easy part. These three are load-bearing and easy to underestimate:

1. **The schema layer is the whole game.** "JSON references MD" holds until `home.json` slots a `Button` into a region that only accepts `Card`, or passes a prop the component doesn't have. Without a contract validated *at build time*, this rebuilds the broken-reference problem a SaaS CMS actually solved. Win condition: a schema **emitted from the component definitions** (Zod / JSON Schema), so authoring is typed and a bad reference fails the build, not production. Same move as Style Dictionary failing on an undeclared variable — a binding artifact downstream of the doc.

2. **Don't reinvent the editor.** "Management is not one place" is the right philosophy, but a PM hand-editing raw JSON+MD in GitHub is a friction wall that kills adoption. **Keystatic and TinaCMS already are "git-backed files + a schema-driven editing UI."** The Claude-spins-the-UI idea is better long-term — but evaluate those first, so going custom is a choice, not a discovery. This is the source-friction lesson from the Token Push plugin: automate the source-to-substrate hop or the system doesn't get used.

3. **Rendering is the payoff — name it.** One content file renders to HTML *and* Qt *and* WPF *only* because the component libraries are 1:1. That's what a SaaS CMS can't give: it hands you JSON and you still hand-map per framework. The DEV system's component-structure conventions are what make that mapping mechanical instead of manual. This bullet isn't a peer of the others — it's half the engine.

### Same DNA as the corpus

The Knowledge Corpus is *documentation*-as-data; the Content System is *content*-as-data. Same intake instinct, same chunked-markdown-with-frontmatter shape, same files-as-source thesis. Whatever frontmatter and validation conventions the content system settles on should be stolen from the corpus, not invented as a second grammar. And the dual-purpose payoff the corpus already describes applies here verbatim: a product description written once renders on the site *and* embeds for AI retrieval. One source of truth across human readers and AI agents.

### Where it fits the five systems

This is the rendering-and-publishing counterpart to the systems above: the Design System supplies the schema and the components, the DEV system supplies the per-target rendering contract, the Corpus shares the file grammar and the retrieval surface. It earns its place for **curated, structured, multi-surface content** — marketing pages, product pages, persona-facing copy — exactly the overlap the corpus's CMS-integration section flags as worth authoring. It is not for raw manuals and specs; those still go straight to ingestion.

### Phase 1 deliverable

Pick one page — a product page is the obvious one. Define its `page.json` against two or three existing `@tektronix/ui` components, with a schema generated from those components' contracts so a bad prop fails the build. Render it once to HTML. Demo: change a token, watch the page restyle; add a locale file, watch the page localize — with zero CMS, zero vendor, and the schema you never had to write by hand.

---

## Appendix: Notes for Bill

Notes addressed to a specific reader, kept in personal voice. Less polished than the rest of this doc, on purpose — the "blocked from X" reframe and the first-person framing are the right way in for a leadership audience.

### The core thesis

The system is scalable, and it's meant to be. It's foundational to Tek's approach to AI — it's the enablement layer.

New AI features tap into the MCP layer rather than getting invented from scratch each time. We can still use AI in other ways, but anything Tek-native plugs into this foundation.

The reframe: stop asking "what can we do with AI?" Start saying "without this system, I am blocked from doing X."

- Blocked from creating a persona
- Blocked from creating a skill
- Blocked from training an AI to explain how our oscilloscopes work in the way I best understand
- Blocked from training an AI to understand how an electrical engineer wants to test and measure something
- Blocked from X — the list keeps growing

### The "how do I fit into the system?" skill

I want to write a skill for this. Written once, used broadly. Anyone contributing to the system invokes it to figure out how their work plugs in.

Role-based:

- **Product person** → how do I contribute my PRDs?
- **Hardware designer** → how do I contribute my files so they best serve the system?
- More roles as we add branches — software, firmware, marketing, etc.

Once the skill is complete, we use it broadly while developing every new branch of the system. Contribution stops being tribal knowledge. It stops being "ask Bryan." The system scales because the bottleneck goes away.

### Where this is headed — and why we're already there

I haven't researched this; I just know it. Claude is going to turn into more of a Slack or Teams — collaborative, multi-human, multi-AI in shared space.

I caught the moment when I was working on the GitHub permissions issue with Brock. I almost started writing a skill to play Brock's voice on a speaker so my Claude could transcribe it and converse with him. That's a workaround for collaboration that doesn't natively exist yet. But it's coming.

When it arrives, everyone needs shared resources out of the gate. With this approach, we'll be ready — same way we were ready when Claude Design came out. The design system was already built to operate in that mode.

### Scalable because nothing is locked in

Everything is intentional. Integrated. But also decoupled.

The MCP layer is how we use and license any element we want. We don't need an org-wide Claude-only instance. People can do the Cursor thing with multiple models. People who just want to use Copilot because we already have it — fine. The MCP layer enables all of it.

What we avoid:

- Enormous investments in any one platform
- A pile of random SaaS subscriptions and isolated AI features that get sold to us
- Fragmentation across teams who all bought their own little tool

We'll save a ton of money.

Even the skills themselves aren't locked to Claude. The content lives as markdown in our repo and gets wrapped for whatever tool needs it — Claude skill today, Cursor rules tomorrow, MCP prompt after that. The knowledge is the asset; the format is just today's container.

### A concrete example — RAG to personas

Our RAG / knowledge base. Out of the gate, we can build personas that use that information to sell products to customers. A million different ways to use it.

A customer-facing tool that helps someone figure out which oscilloscope and which probes fit their business, and how many they need. Educational personas. Internal sales and support personas. The work becomes the UI layer — custom build, third-party, integrated into an existing system, whatever the surface calls for. The intelligence is already there.

Without this approach: the marketing team gets sold a plug-in on some CMS — an "AI sales guy" — and then they're trying to figure out how to get our product information into it. It's out of whack. It's expensive. It's a waste of time.

With this approach: one knowledge base, one MCP layer, infinite surfaces. Marketing's AI, sales' AI, support's AI, the customer's "help me pick a scope" AI — all the same brain, different faces.

### How the RAG should work — progressive disclosure

Same principle that makes skills work should govern the RAG. Don't dump everything into context. Don't pull top-K chunks blindly. Layer it:

- **Top level** — cheap, always available. What domains we cover, what product families exist, what doc types are in the system.
- **Mid level** — pulled when relevant. Product overviews, persona-shaped summaries.
- **Deep level** — pulled only when the task calls for it. Full specs, edge cases, technical detail.

The persona, or whatever surface is asking, drills down from cheap to deep based on the actual question. We don't pay for context we don't need, and we don't drown the model in noise. Cheap by default, deep on demand.

This is what makes the RAG actually scalable across all the surfaces — sales persona, customer "help me pick a scope" tool, internal training. They're all hitting the same store, but each one only pulls what its task requires.

### Skills as a temp MCP layer — we can start now

We don't need to wait for a full MCP buildout to start operating like we have one.

Most of what unblocks people today is static knowledge — the contribution playbook, persona scaffolding, brand rules, system conventions. None of that needs to be live. We can ship it now as a multi-format skill bundle:

- One markdown source of truth in the repo
- Built into Claude skills, Cursor rules, Copilot instructions, and plain human-readable docs
- Every team member's AI loads the same baseline, regardless of which tool they're using

That covers most of the perceived value of an MCP layer with no infrastructure to stand up.

When we do build the real MCP, none of this gets thrown away. The same markdown source feeds an MCP server's prompts and resources. The migration is mechanical, not a rebuild.

What this does *not* cover is live capability — querying the RAG, fetching current tokens, hitting APIs. That still needs the real MCP eventually. But the static knowledge layer? Ships now.

### This is realistic, not hypothetical

I want to be clear: this isn't a crazy or hypothetical approach. It's very real, very realistic, very straightforward.

We can break this out into parallel swim lanes and make a lot of progress. The biggest benefit is that not a lot of re-architecting is required to do it.

I don't accept that Tek is bound to old-fashioned ways of working, dated technology, or dated mindsets. We're at the perfect time to recalibrate and put ourselves on the relative forefront of organizations using AI — in the smartest, most pragmatic way possible.

### The arc

1. **Foundation** — the system is the AI enablement layer
2. **Contribution** — the "how do I fit in" skill makes it scale across roles
3. **Future-readiness** — ready for collaborative AI by default, not as a retrofit
4. **Decoupled** — MCP layer means no lock-in, no wasted SaaS spend, model flexibility
5. **Payoff** — RAG → personas → surfaces. One foundation, every customer and internal experience.
6. **Realistic** — parallel swim lanes, minimal re-architecting. Multi-format skill bundle gives us a working layer today; real MCP later, no rewrites in between. Tek is perfectly positioned to recalibrate now.

---

## Appendix: Why the Design System works as the proof point

The design system isn't just an existence proof that the model works. The specific architectural choices it makes are the template the other systems should imitate.

### One source, deterministic outputs

Figma Variables → W3C DTCG JSON → Style Dictionary → CSS / JS / Qt. One input, multiple outputs, no manual translation between them. When the source changes, every output updates the same way. Translation drift — the failure mode of "we have a design system in Figma and another one in code" — can't happen.

The other systems should pick a single source per domain. The corpus has one source per document type. PRDs have one source (the markdown file). Analytics has one taxonomy. Compose; don't duplicate.

### Codified at every layer, not just documented

Every rule has a binding artifact:

- "Use tokens, not hex values" → enforced by Style Dictionary parsing the JSON and the build pipeline failing on undeclared variables.
- "Tokens come from Figma" → enforced by the Token Push plugin and the W3C DTCG schema.
- "Don't publish from a laptop" → enforced by CI-only publishes with no human holding the token.
- "Both modes export atomically" → enforced by the plugin committing four files in one operation, and a concurrency group on the publish workflow preventing SHA races.

A doc that says "always do X" is a starting point. The thing that makes the system production-grade is having a binding artifact downstream of that doc — a parser, a validator, a workflow — that fails when X isn't done.

The other systems need the same. PRDs in markdown is good; CI that fails when a PRD references a deleted component is the actual system. ADRs in `/docs/adr/` is good; an ESLint rule that requires an ADR reference for new dependencies is better.

### Tokens as contract

Tokens are the API between design and code. Designers can change the value; consumers don't change anything. CI publishes the new value. This decoupling is what lets design and engineering ship independently against the same contract.

The other systems are looking for their equivalent contract:

- **PRDs:** front-matter is the contract. Components, IDs, status — machine-readable.
- **DEV system:** ADRs and CLAUDE.md are the contract. The status of a decision; the conventions a generator must follow.
- **Analytics:** event taxonomy is the contract. Event name, schema, ownership.
- **Corpus:** chunk metadata is the contract. Source, version, page, product line.

Each contract should be enumerable, machine-readable, and have a binding downstream artifact (a CI check, a build step, a generator).

### Plugin-led updates

The Token Push plugin lowered the friction of staying in sync between Figma and code to one click. Designers don't think about JSON or git or Style Dictionary; they push the button.

The other systems should look for their equivalent. PRDs could have a "Push PRD" plugin from a writing tool. The corpus has a "publish from Sanity" webhook. Friction at the source is the failure mode — automating the source-to-substrate hop is the win.

### Reference pages as integration tests

`signin.html`, `signup.html`, and `component-library.html` import directly from `packages/*/dist/`. They use the real built packages. Break a component, the page breaks. Not unit tests; integration tests with real user contexts.

The other systems need the same: a small, real, end-to-end demonstration that exercises the production artifact. PRDs render through the docs site. The corpus answers a question with citations. Analytics produces a dashboard. ADRs are linked from a generated component file.

### Internal consistency

Every component follows the same patterns — naming (`tek-*`), file layout (`packages/ui/src/<name>/<name>.ts`), attribute conventions, lifecycle hooks. AI tools pattern-match and produce code that fits without being told.

Consistency is the highest-leverage move. It's also the cheapest, because it's a discipline rather than tooling. The other systems should be just as opinionated about their internal patterns from day one.
