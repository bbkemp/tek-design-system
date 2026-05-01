# Tek Context Architecture

Five interconnected systems for grounding work — institutional knowledge, product requirements, dev standards, infrastructure, and user signal — in queryable, version-controlled, LLM-addressable form. Each part stands alone; together they compose into a unified context layer that every team and every AI tool draws from.

## Contents

- [Part 1: The Tek Knowledge Corpus](#part-1-the-tek-knowledge-corpus) — RAG over manuals, specs, and institutional knowledge
- [Part 2: The PRD System](#part-2-the-prd-system) — Requirements as repo-native, version-controlled markdown
- [Part 3: The DEV System](#part-3-the-dev-system) — Codified architectural rules so AI produces production code
- [Part 4: System Architecture (GitHub)](#part-4-system-architecture-github) — Polyrepo foundation under one Tek org
- [Part 5: UXR & Analytics](#part-5-uxr--analytics) — Qualitative + quantitative user signal
- [Meta-Architecture](#meta-architecture-how-it-all-composes) — How the five systems compose into one

---

## Part 1: The Tek Knowledge Corpus

**Goal:** One product line, one document type, end-to-end RAG with citations. Demoable in 2–3 weeks. Proves the pattern before scaling.

### Stack

- **Orchestration:** LlamaIndex (more retrieval-focused than LangChain, less abstraction overhead)
- **Vector store:** Postgres + pgvector (start here — you avoid a new service, and Postgres handles metadata filtering natively; migrate to Pinecone/Qdrant only if scale demands it)
- **Embeddings:** Voyage AI `voyage-3` or OpenAI `text-embedding-3-large` (Voyage tends to win on technical content)
- **Reranker:** Cohere Rerank v3 (massive quality lift for hardware specs, cheap to add)
- **Generation:** Anthropic API, Claude Sonnet 4.6 for answers (check enterprise/ZDR posture with IT before any non-public docs go through it)
- **Interface:** Next.js app, simple chat UI, deployed on Vercel for internal use
- **Hosting note:** For sensitive Tek docs, plan to move to Bedrock or Anthropic enterprise tier before Phase 2. Phase 1 can run on public manuals only to sidestep the security conversation while you prove value.

### Ingestion pipeline

```
Source PDFs/HTML
  ↓
Parser (Unstructured.io or LlamaParse — both handle technical PDFs with tables/figures well)
  ↓
Chunker (semantic chunking, ~512 tokens, with 15% overlap; preserve section headers in metadata)
  ↓
Metadata enrichment (product_line, doc_type, version, page, section, date, source_url)
  ↓
Embedding (Voyage)
  ↓
pgvector (with metadata in adjacent columns for filtering)
```

Run this as a scheduled job (GitHub Actions or a simple cron on a small VM). Re-index on document updates. Keep the raw parsed text alongside embeddings so you can re-embed without re-parsing when you change models.

### Retrieval flow

```
User query
  ↓
Query expansion (optional, Claude rewrites query for technical synonyms)
  ↓
Hybrid search: pgvector semantic + Postgres full-text BM25
  ↓
Metadata filter (product_line, version, date range)
  ↓
Top 20 chunks → Cohere Rerank → Top 5
  ↓
Claude Sonnet 4.6 with system prompt + retrieved chunks + query
  ↓
Response with inline citations linking back to source PDF + page
```

The citations are non-negotiable. Every claim links to a page in a manual. This is what makes engineers trust it — they can verify in two clicks.

### Evaluation harness

Hand-curate 50 questions with known correct answers from your chosen product line. Run them on every change. Track retrieval recall (did the right chunk make it into context?) and answer accuracy (did the LLM use it correctly?). This is the boring scaffolding that lets you ship confidently.

### Phase 1 deliverable

A working internal chat at, say, `tek-corpus.internal` where anyone can ask spec/manual questions about one product family and get cited answers. Demo it the same way you demoed Day 2: side-by-side with someone trying to get the same answer from PDFs and SharePoint. The contrast sells itself.

### What comes after Phase 1

- **Phase 2:** expand document types within that product line (app notes, datasheets, training)
- **Phase 3:** expose as an MCP server so Claude Code, Cursor, and other agents auto-retrieve
- **Phase 4:** second product line, validate the pattern generalizes
- **Phase 5:** personas, scoped retrieval profiles, customer-facing constrained interface

### CMS integration (Sanity or similar)

A CMS like Sanity earns its place for *some* of the corpus, not all of it. Unify at the **retrieval layer**, not the authoring layer.

**Where a CMS fits:** curated, editorial content where humans need to author, review, and version structured records. Product pages, polished app notes, persona definitions, FAQ entries, troubleshooting guides written *for* the AI to use, glossary terms, comparison tables. Anything where the value is in the editorial layer — schema, references, draft/publish workflow, collaborator review.

**Where a CMS is the wrong tool:** manuals, datasheets, EE reference databases, hardware specs, screenshots, support archives. This is existing artifact content — thousands of pages nobody is going to re-author into a CMS schema. Forcing it through a CMS adds a layer that doesn't earn its keep.

**Architecture:**

```
CMS (curated content)        ─┐
                               ├─→  Ingestion → Vector store → RAG
Object storage (raw docs)    ─┘
```

The vector store is the unified retrieval surface. Metadata records the source (`source: sanity` vs `source: manual_pdf`), which lets you filter or weight by content type at query time. Editorial content might rank higher because it's been curated; raw manuals are the long tail of deep technical detail.

**Dual-purpose payoff:** the same curated content powers both the public ecomm site *and* the internal/AI retrieval layer. Write a product description once → it renders on the site *and* gets embedded for AI retrieval. Write a troubleshooting guide once → it's a support page *and* a citable chunk for the AI. Single source of truth across human readers and AI agents.

This benefit only applies to content that's *both* customer-facing *and* useful for AI retrieval. Internal manuals don't go on the ecomm site. EE reference data doesn't go on the ecomm site. CMS earns its place for the overlap; raw ingestion handles the rest.

**Sequencing:** Phase 1 of the corpus should still be raw PDFs → vector store. Don't delay ingestion waiting for the CMS to be in place. When the ecomm site spins up on Sanity, add a publish webhook that pushes Sanity content into the same vector store with `source: sanity` metadata. That's a one-day integration once both sides exist.

---

## Part 2: The PRD System

**Goal:** PRDs in the repo, version-controlled, LLM-readable. That's it. Small enough that the PM can own it end-to-end without it feeling like an imposed system.

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

That's the whole filesystem. No new repos, no new tools, no new services. Just markdown next to the code.

### PRD format (markdown with front-matter)

```markdown
---
id: PRD-DASHBOARD-001
title: BenchProto Dashboard
version: 1.1.0
status: draft  # draft | approved | shipped | deprecated
owner: [PM name]
components: ["@bbkemp/ui/Dashboard", "@bbkemp/ui/ChannelSelector"]
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

The front-matter is the magic. It's machine-readable, so the LLM tools can filter, link, and traverse PRDs. The body is human-readable markdown so the PM writes it like a doc, not like code.

### Workflow

- PM writes PRDs as PRs to the design system repo
- Design reviews for component/token alignment, the same way an engineer reviews code
- Merge = approved
- Tag matches the component version it ships with
- Anyone — designer, engineer, PM, AI — can grep, link to, or feed PRDs into prompts

### LLM integration (the part that sells it)

Once PRDs are in the repo, every AI tool is automatically grounded:

- **Claude Code:** "build the dashboard per `/prds/screens/Dashboard.prd.md` using `@bbkemp/ui` components" — Claude reads the PRD, the component code, the tokens, and produces aligned output.
- **Cursor:** same flow, the PRD is just a file the editor sees.
- **claude.ai:** drop the PRD into context alongside the design system docs, ask for prototypes, get grounded prototypes instead of slop.

That's the Day 2 condition, made repeatable. The reason a refactor against the system works and a fresh-from-scratch prototype doesn't: one has grounded context, the other has a freshly-written PDF that nothing can reference.

### Ownership split

**PM owns:** PRD content, conventions, the writing standard, the review process, the versioning rhythm. This is his system to define.

**Design system owns:** the repo conventions (front-matter schema, directory structure), the link to components/tokens, making sure PRDs render in any future docs site.

This split is the whole point. He's not jumping into someone else's lane — he's building parallel infrastructure with the same architectural principles. Same rigor, different domain.

### Phase 1 deliverable

Pick one screen — Dashboard is the obvious one — and write its PRD in this format, in the repo, as a PR. That's it. One PRD, one PR, one merge. Then generate a prototype against it in Cursor and compare to Day 1. That contrast is the Day 2 moment.

---

## Part 3: The DEV System

**Goal:** Codify architectural rules, patterns, and process as machine-readable artifacts so AI tools (Claude Code, Cursor) produce production-quality code by default.

**Core insight:** Claude Code produces production-quality code only when production quality is *defined as constraints in the repo*. Vibes-based code review can't scale; codified standards can. Most dev style guides are PDFs or wiki pages — unreadable to AI tools and ignored by humans. The move is to convert all of that into artifacts that live in the repo and get pulled into context automatically.

This is the same thesis as tokens and components, one layer up: architectural rules made machine-readable.

### The six layers

**1. Architectural Decision Records (ADRs)**

Short markdown docs in `/docs/adr/` capturing *why* a pattern exists. "We use Web Components instead of React because Qt." "We use Style Dictionary v3 with a custom DTCG parser." "We use a concurrency group in the publish workflow because of the SHA race condition." Each ADR is dated, numbered, and has a status (proposed/accepted/superseded). When Claude Code is asked to add a new component, it reads the ADRs and produces code that respects prior decisions instead of relitigating them. This is the dev equivalent of design system principles.

**2. Code structure and conventions (CONTRIBUTING.md)**

Where files live, how they're named, how exports are structured, what the public API surface looks like, how internal vs. external utilities are separated. The trick is making this *prescriptive* enough that the AI follows it without ambiguity.

> "Components live in `src/components/<ComponentName>/` with exactly these files: `index.ts`, `<ComponentName>.ts`, `<ComponentName>.styles.ts`, `<ComponentName>.test.ts`, `<ComponentName>.stories.ts`."

That's a rule a model can execute. "Write clean, modular code" is not.

**3. Pattern libraries (code primitives)**

Same idea as design tokens but for code. Reusable hooks, utilities, base classes, error handling patterns, logging conventions, telemetry wrappers. If every component logs the same way, error-boundaries the same way, exposes the same lifecycle hooks — Claude Code learns the pattern from existing components and applies it to new ones automatically.

Consistency in the existing codebase is the single biggest predictor of AI output quality. This is why the refactor worked: the system was internally consistent enough that Claude could pattern-match.

**4. AI-specific rules files (CLAUDE.md / .cursorrules)**

Cursor reads `.cursorrules`, Claude Code reads `CLAUDE.md`, both at the repo root, both injected into every prompt. This is where the meta-instructions live:

> "Always check `/prds/` for the relevant PRD before writing code. Always reference `@bbkemp/tokens` for any styling values, never hardcode. Always emit Web Components, never React. Always run `npm run lint` after changes."

This is the layer that turns AI tools from generic code generators into *Tek-specific* code generators. Highest-leverage 100 lines in the repo.

**5. Validation as code (CI gates)**

ESLint, Stylelint, Prettier, TypeScript strict mode, custom AST checks for design-system-specific rules ("no hardcoded hex values," "no inline styles," "all components must export their type definitions"). Tests for accessibility (axe-core), visual regression (Chromatic or Playwright snapshots), bundle size budgets.

CI is the *enforcement* layer — it catches cases where the AI (or a human) didn't follow the rules. Crucially: when CI fails, Claude Code reads the failure and self-corrects. The feedback loop is what makes the system robust. Without CI gates, AI-generated code drifts; with them, it converges.

**6. Templates and scaffolds**

A `npm run new:component <Name>` script generates the full boilerplate — files, tests, stories, exports, registry entry — using a template that already encodes every convention. Developers (and AIs) don't write boilerplate; they fill in the meaningful parts.

This is the equivalent of the Token Push plugin for design — small tooling that enforces the system at the moment of creation, where it's cheapest. Plop.js or Hygen handle this trivially.

### How the layers stack

```
ADRs                  ← why
CONTRIBUTING.md       ← how (human)
CLAUDE.md / rules     ← how (AI)
Pattern library       ← reusable primitives
Templates/scaffolds   ← creation enforcement
CI gates              ← validation enforcement
```

Top three are documentation. Bottom three are executable. The genius of the design system thesis is that it didn't stop at documentation — rules were encoded into Style Dictionary, the Token Push plugin, and CI publish workflows. Same move applies here. A `CLAUDE.md` that says "always use tokens" is fine; an ESLint rule that fails the build when a hex value appears in a `.ts` file is the actual system.

### Phasing

**Phase 1 — Documentation foundation (1 week):**
- Write `CLAUDE.md` at the repo root
- Capture 5–10 ADRs from existing in-head decisions
- Add ESLint rules for the most common drift cases (hardcoded values, missing types, wrong import paths)

Lowest effort, highest immediate impact. Every AI tool on the team gets upgraded.

**Phase 2 — Scaffolding (1–2 weeks):**
- `new:component` generator
- `new:token` generator
- Creating new artifacts now goes through the system by default
- AI tools use the generators instead of inventing structure

**Phase 3 — Validation layer (2–3 weeks):**
- Visual regression tests
- a11y tests
- Bundle budgets
- CI gates that block merges on violations

This is the layer that lets AI output be trusted enough to merge without line-by-line review.

**Phase 4 — Cross-system links:**
- Dev rules reference PRDs ("this component implements `/prds/components/Button.prd.md`")
- CI checks that every shipped component has a corresponding PRD
- Docs site renders PRDs, components, tokens, and ADRs together

PRDs, components, tokens, and ADRs become one connected graph.

### The frame for the dev team

Same pitch as the PRD frame for the PM, applied to engineering: *AI tools amplify the system you give them*. A dev who treats CLAUDE.md, ADRs, pattern libraries, and CI gates as throwaway scaffolding gets throwaway code from AI tools. A dev who treats them as the actual product they're building — the codified expertise of the engineering org — gets production-quality code at speeds that look impossible to anyone still working without a system.

Brod almost having production-ready code in the demo wasn't because Claude Code is magic. It was because the system gave Claude Code a constrained, opinionated, internally consistent target. Generalize that to the entire codebase and every dev on the team has the same advantage.

---

## Part 4: System Architecture (GitHub)

**Goal:** A single, well-bounded GitHub Organization with consistent conventions, so every system above it (DSY, PRD, DEV, Corpus, Analytics) composes cleanly instead of inheriting chaos.

All four systems we've designed live or die on the GitHub architecture underneath them. If accounts and repos are scattered, every system inherits the chaos. Get this right and everything above it composes cleanly.

### The core decision: one GitHub Organization

Everything Tek-related lives under a single GitHub Organization. Not personal accounts, not multiple orgs, not a mix. One org, owned by Tektronix, with proper SSO, billing, and access controls. This is non-negotiable for an enterprise context and it's the single biggest cleanup move available.

The current `@bbkemp/tokens` and `@bbkemp/ui` packages live in a personal namespace. For v1.0 it was fine; for an enterprise design system that engineering depends on, it needs to migrate to `@tektronix/tokens` and `@tektronix/ui` (or `@tek/`, depending on what the org decides). One-time migration with a deprecation period — painful but mandatory before this scales further. Doing it now at ~5 consumers is dramatically cheaper than at 50.

The frame for leadership: "The design system is now production infrastructure. It needs to be owned by Tek the way the firmware repos are owned by Tek. Here's the migration plan."

### Repo topology: polyrepo with conventions

The right structure is **a small number of well-bounded repos, not a monorepo and not a sprawl**. Both extremes fail at this scale.

**Principle: monorepo where things release together, separate repos where they don't.**

```
@tektronix/design-system          ← THE design system monorepo
  /packages
    /tokens                        → publishes @tektronix/tokens
    /ui                            → publishes @tektronix/ui
    /icons                         → publishes @tektronix/icons
    /qt                            → publishes @tektronix/qt
  /prds                            → PRDs co-located (Part 2)
  /docs/adr                        → ADRs (Part 3)
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

@tektronix/knowledge-corpus        ← Part 1 (RAG system)
  /ingestion
  /api
  /web
  /eval

@tektronix/analytics               ← Part 4 (event taxonomy, dbt models)
  /taxonomy                        → shared event schema
  /dbt                             → metric definitions
  /sdk                             → telemetry SDK for products

@tektronix/<product-name>          ← One repo per product surface
  consumes @tektronix/ui
  emits events per @tektronix/analytics taxonomy
  has its own /prds for product-specific requirements
```

Five or six top-level repos, each with a clear owner and clear boundary. Design system is a monorepo because the packages inside ship together. Knowledge corpus, analytics, and Figma plugins are separate because they have different release cycles, different infrastructure, and different ownership. Product repos consume the design system as published packages — they don't reach into its internals.

### Branch and release strategy

Same conventions across every repo. AI tools and humans both benefit from consistency.

- `main` is always releasable
- Feature branches off main, PR back to main
- **Conventional Commits** (`feat:`, `fix:`, `chore:`) — machine-readable, feeds automated changelog generation
- Semantic versioning, with the existing patch/minor/major convention (patch auto via CI, minor/major manual)
- **Changesets** for managing versions across the design system monorepo's packages — handles "this PR bumps tokens to 1.2.0 and ui to 2.1.0" coordination cleanly
- Tags on every release, GitHub Releases with auto-generated notes from Conventional Commits
- Protected `main` branches everywhere, requiring PR review and CI passing

Boring is the point. Every repo behaves the same way, so anyone — human or AI — knows what to expect.

### CI/CD architecture

GitHub Actions, with shared reusable workflows.

```
@tektronix/.github                 ← Special "org-wide" repo
  /workflow-templates              → starter workflows for new repos
  /actions                         → custom reusable actions
    /publish-package
    /run-evals
    /update-corpus
  README.md                        → org-wide conventions
```

The `.github` repo is GitHub's mechanism for org-wide defaults. Workflow templates here become available when anyone in the org creates a new repo. This is where you encode "every repo gets these CI checks" without copy-pasting YAML across 12 repos.

Reusable workflows (`.github/workflows/reusable-*.yml`) let you write the publish logic once and call it from any repo. When the next SHA-race-condition equivalent happens, the fix happens in one place.

Concurrency groups, environment secrets, and OIDC authentication for cloud resources standardized at the org level. Engineering will recognize this — it matches how firmware build pipelines already work.

### Access and permissions

Teams, not individuals. Create GitHub Teams that map to org structure:

```
@tektronix/design-system-maintainers   ← primary maintainer + future hires
@tektronix/design-system-contributors  ← anyone who PRs to it
@tektronix/product-engineering         ← consumers
@tektronix/pm                          ← PRD authors
@tektronix/ai-platform                 ← corpus + analytics maintainers
```

Permissions assigned to teams, not people. When someone joins or leaves, you update team membership in one place. Sounds obvious; it's the thing every org gets wrong for years.

SSO through Tek's identity provider. No personal accounts with org access. Two-factor required org-wide. Standard enterprise hygiene that matters more once the corpus has internal Tek data flowing through it.

### Package registry

GitHub Packages is fine for now and integrates cleanly with GitHub Actions for publish. As consumption grows, evaluate npm Enterprise or self-hosted Verdaccio for performance and access control reasons — but that's a problem for later. Don't over-engineer this layer until it actually hurts.

What matters now: every package publishes from CI only, never from a developer's laptop. Publish credential lives in GitHub Actions secrets, scoped to the workflow. Enforced by branch protection requiring CI to publish on tag push. **No human has the publish token.** This single rule prevents 90% of supply chain incidents.

### The connective tissue

Once everything's under one org with consistent conventions, the systems plug into each other:

- Design system repo references PRDs in the same repo (Part 2) and ADRs in the same repo (Part 3)
- Product repos reference `@tektronix/ui` packages and emit events per `@tektronix/analytics` taxonomy
- Knowledge corpus ingests *from* design system docs, analytics dbt definitions, and product PRDs — it's a consumer of the other systems' outputs
- AI tools (Claude Code, Cursor, MCP agents) read `CLAUDE.md` from any repo, get repo-appropriate context, and produce repo-appropriate output

The MCP server pattern (Phase 3 of the corpus) becomes the unifier at runtime. A single MCP endpoint exposes the design system, PRDs, ADRs, corpus, and analytics as queryable surfaces. Any AI tool in the org plugs into one endpoint and gets grounded in everything.

```
                 ┌──────────────────────┐
                 │  Tek MCP Endpoint    │
                 │  (the unifier)       │
                 └──────────┬───────────┘
                            │
      ┌─────────────┬───────┼────────┬─────────────┐
      ▼             ▼       ▼        ▼             ▼
  Design        PRDs     ADRs    Knowledge    Analytics
  System                          Corpus
```

Five systems, one endpoint, every team and every AI tool grounded in the same source of truth. **This is the diagram for leadership.**

### Migration sequencing

Realistic order — not all at once.

**Step 1 — Org setup (week 1):**
Create or claim the `@tektronix` org if it doesn't exist. SSO, teams, billing, branch protection defaults. Don't migrate anything yet, just stand up the structure.

**Step 2 — Design system migration (weeks 2–3):**
Move the design system repo into the org. Republish packages under `@tektronix/` with deprecation notices on the old `@bbkemp/` packages pointing to new ones. Update all known consumers. The painful one — do it once, do it carefully.

**Step 3 — Conventions repo (week 3):**
Create `@tektronix/.github` with workflow templates, standard `CLAUDE.md`, `CONTRIBUTING.md`, ADR template, PRD template. Every new repo starts from a known good state.

**Step 4 — New systems land in the right place (weeks 4+):**
Knowledge corpus, analytics, future Figma plugins all start in the org with conventions baked in from day one. Don't carry forward anything from the old chaos.

**Step 5 — Product repo audit:**
Inventory every existing Tek-related repo (personal, scattered orgs, etc.). Categorize as "migrate," "archive," or "leave alone." Migrate the ones that matter, archive the ones that don't, leave alone what isn't yours to move. Surfaces political conversations about ownership that need to happen anyway.

**Step 6 — Connective tissue:**
Once repos are in place and consistent, build the MCP unifier and wire the systems together. Highest-value layer, but it depends on everything beneath it being clean.

### The pitch to leadership

The design system success demonstrated the thesis: codified, versioned, queryable systems compound. The next step is making the underlying infrastructure match the level of ambition. Right now the design system is working *despite* the GitHub structure, not because of it. Standardizing the org now, while there are five repos and not fifty, is the cheapest version of this conversation that exists.

This isn't an IT cleanup project. It's the foundation that lets every system above it — design, PRDs, dev rules, knowledge corpus, analytics, AI tooling — actually compose. Without it, every new system inherits the chaos and rebuilds workarounds. With it, every new system plugs in for free.

---

## Part 5: UXR & Analytics

**Goal:** Unify qualitative and quantitative user signal into a queryable layer that grounds product decisions, accelerates research, and ultimately joins to the rest of the context architecture.

UXR is the layer where the field is genuinely figuring things out in real time. There's no settled playbook yet, which means there's room to define one for Tek instead of inheriting someone else's.

### Half 1: Simulated qualitative research

**Honest framing:** AI-simulated user research is real, useful, and *dangerous if used as a replacement for actual users*. Teams getting value from it use it as a **pre-research filter and a between-study amplifier**, not a substitute. Knowing which is which is the whole game.

**Where it works:**

- **Pre-flighting study designs.** Before a real usability test, simulate it with synthetic personas to catch confusing tasks, leading questions, and dead-end flows. Surfaces half the protocol issues before any real user sits down.
- **Heuristic evaluation at scale.** Point a well-grounded AI at a flow, get a structured critique against established heuristics. Catches the obvious 60–70% of issues. Great for early-stage screens before research budget is spent.
- **Persona-driven walkthroughs.** "Walk through this flow as a field application engineer at a mid-size aerospace contractor capturing a transient on a power rail." If the persona is grounded in real Tek customer data, the walkthrough surfaces plausible friction points. Not real findings, but plausible ones — enough to prioritize where to look.
- **Synthesis acceleration.** Most under-rated use. After real research, AI dramatically speeds up coding transcripts, clustering themes, drafting reports. This is "AI-assisted analysis of real UXR." The teams doing this well spend the saved time running *more* studies, not fewer.
- **Survey design and pilot testing.** Generate drafts against personas, identify leading or confusing questions, simulate response distributions before launch.

**Where it fails:**

Synthetic users do not surface the things that make UXR valuable — the unexpected workflow, the unspoken constraint, the cultural context, the "wait, you do *what* with the scope at 2am during a board bring-up?" moments. AI personas average toward training data and the prompt; real users diverge from it in exactly the places where insight lives. Treating sim-UXR as a replacement for real research is the failure mode burning teams right now, and engineering leadership eventually catches on.

The internal frame: *simulated qualitative is a force multiplier on real qualitative, not a substitute for it.*

**Tools worth knowing (category shifting fast):**

Maze and UserTesting both have AI features for synthesis and study setup. Dovetail leads for AI-assisted analysis of real qualitative data. Marvin and Looppanel are research-repo tools with strong AI synthesis. Synthetic Users and Listen Labs are doing pure simulated research — interesting to watch, risky to depend on. Most respectable teams are doing this themselves with Claude or GPT and a strong corpus rather than buying a synthetic-user product, because the moat is in the corpus, not the tool.

### Half 2: Quantitative integration across products

The data exists, it's just scattered, owned by different teams, and probably has inconsistent definitions of basic terms like "session" or "active user."

**Three components:**

- **Event taxonomy.** Shared schema for what gets tracked, named consistently across products. `channel_added`, `measurement_captured`, `trigger_configured` — defined once, used everywhere. The design-tokens-equivalent for analytics. The part everyone skips and regrets. Without it, you can never compare across products.
- **Central analytics warehouse.** Snowflake, BigQuery, or Databricks. Every product pipes events into the same warehouse with the shared taxonomy. Unified retrieval surface for quant, parallel to the vector store for qual.
- **Semantic layer on top.** dbt or Cube to define metrics consistently — "monthly active users," "feature adoption," "time-to-first-measurement." Same answer regardless of who runs the query. Difference between "we have data" and "we can answer questions."

**Tools:**

Amplitude or Mixpanel for product analytics if you want the BI layer prebuilt. PostHog if you want self-hostable and open-source-flavored (fits the Vercel/Next.js stack). Snowflake/BigQuery/Databricks if you want to roll the warehouse yourself. For Tek's scale and engineering culture: Snowflake or BigQuery as the warehouse with PostHog or Amplitude on top, but worth a real conversation with whoever currently owns analytics.

**The hardware wrinkle:**

A lot of Tek's product surface is hardware UI — instruments running embedded software. Telemetry from those is harder than from web apps. Need an on-device telemetry SDK that batches and uploads when network is available, with explicit opt-in for privacy/regulatory reasons. Its own engineering project, not a quick add. Software products instrument in weeks; instruments in quarters. Flag early because it's the long pole.

### The qual + quant unification

The unlock — and this is where it gets interesting — is feeding *both* into the same retrieval layer.

A research finding ("users struggle to configure trigger holdoff") becomes much more powerful when joined to the quant ("`trigger_holdoff_configured` event has a 23% completion rate compared to 78% for `trigger_level`"). Qual tells you what's happening; quant tells you how often. Each is half the picture.

Same architecture as the knowledge corpus — vector store for qual artifacts, warehouse for quant events, unified query interface answering across both. *"Show me the friction points in the channel configuration flow, ranked by frequency, with supporting quotes from research."* Impossible without the unified layer, trivial with it.

### Phasing

**Phase 1 — Persona layer on top of the corpus:**
Pull from existing customer data, support archives, sales notes, prior research. Define 4–6 grounded personas with real workflows, real instruments, real constraints. Any team can now run a simulated heuristic walkthrough or pre-flight a study against personas that aren't fictional. This is the wedge — small, fast, immediately useful.

**Phase 2 — Single-product quant pipeline:**
Pick *one* product with the cleanest existing telemetry. Define the event taxonomy *for that product*. Get it into a warehouse. Build a simple metrics dashboard. Same wedge strategy as the corpus — prove on a small surface, demo, expand.

**Phase 3 — Research repository:**
Where every real study, transcript, and finding lives, structured and searchable. Same architecture as the corpus: ingestion, embedding, retrieval. Most orgs lose 80% of their research insight because it's locked in PDFs nobody re-reads. A research repo solves that.

**Phase 4 — Cross-product taxonomy + AI synthesis pipeline:**
Extend the event taxonomy to a second product. Cross-product questions become answerable. AI synthesis plugged into the research pipeline (transcribe → code → cluster → draft report), researcher edits and validates, output becomes a structured artifact in the repo. Same pattern as PRDs: research findings as machine-readable, queryable, version-controlled artifacts.

**Phase 5 — Joined retrieval:**
Qual and quant accessible through the same MCP surface as everything else. Any AI tool grounds in real user data, not just specs and requirements.

### The frame

The design system unifies *what things look like*. The PRD system unifies *what they should do*. The DEV system unifies *how they're built*. The knowledge corpus unifies *what we know*. UXR + analytics unifies *what users actually experience*. Five interconnected systems, same architectural principle, compounding returns.

---

## Meta-Architecture: How It All Composes

Each part above stands on its own and delivers value alone. The deeper bet is that they compose — and the composition is where the asymmetric returns live.

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

The GitHub foundation is the substrate. The five systems are the layers. The MCP endpoint is the unifier. The AI agents are the consumers. Every team and every AI tool plugs into one endpoint and gets grounded in everything.

### Data flows between systems

The systems don't just sit next to each other — they reference each other, and that's where compounding shows up.

- **Design System ↔ PRDs:** PRDs reference component IDs and versions. Components carry links back to the PRDs that specified them. Change either and the link is visible.
- **Design System ↔ DEV:** ADRs explain why patterns exist. CLAUDE.md and CI rules enforce them. Tokens and components are the artifacts those rules govern.
- **PRDs ↔ DEV:** PRD acceptance criteria map to test files. CI checks that every shipped component has a corresponding PRD.
- **Knowledge Corpus ← all of the above:** The corpus ingests design docs, PRDs, ADRs, and analytics definitions as part of its sources. The other systems' outputs become the corpus's inputs.
- **UXR ↔ Knowledge Corpus:** Personas live in the corpus. Research findings join to the corpus's customer data and product manuals. A question about "how aerospace customers use trigger holdoff" pulls from manuals, support tickets, prior research, and live event data simultaneously.
- **Analytics ↔ PRDs:** Acceptance criteria reference event names from the analytics taxonomy. Shipping a feature means telemetry exists from day one. PRDs become measurable artifacts.

Each link is small. The graph they form is the actual product.

### The compounding thesis

Each system has standalone value. The compounding kicks in at the second-order links:

1. *Day 1 of the workshop* was what work looks like with no context system. PM writes a PRD from scratch, tries to prototype, gets slop.
2. *Day 2* was what work looks like with one context system (the design system). Refactor lands cleanly because Claude could pattern-match against existing primitives.
3. *Day N* — the destination — is what work looks like with all five systems composed. PRD references components and analytics events. AI generates code that respects ADRs, uses tokens, emits the right telemetry, satisfies acceptance criteria. CI validates the output. The corpus answers spec questions inline. Personas pre-flight the design. Real research validates afterward.

That's not an incremental improvement over Day 2. It's a different category of work. The same engineer, designer, or PM operates with an order of magnitude more grounded context, and every artifact they produce makes the next one easier.

### The minimum viable composition

Building all five systems in parallel is the wrong move and will fail. The right move is sequencing so each system delivers value alone and adds compounding value when the next one lands.

Recommended order:

1. **GitHub foundation (Part 4).** Substrate. Without it, everything else inherits chaos. ~3 weeks.
2. **Design System hardening in the new org (already mostly done at v1.0).** Migrate to `@tektronix/`. ~2 weeks.
3. **PRD system (Part 2).** Smallest of the five. Sells the PM on the thesis. ~1 week to set up, ongoing to populate.
4. **DEV standards (Part 3) Phase 1.** CLAUDE.md, ADRs, ESLint rules. ~1 week. Immediate impact on AI output quality.
5. **Knowledge Corpus (Part 1) Phase 1.** One product line, one doc type. ~2–3 weeks. The leadership-floor demo.
6. **UXR persona layer + single-product quant (Part 5) Phase 1+2.** Builds on the corpus. ~3–4 weeks.
7. **MCP unifier.** The connective tissue. Stands up only after at least three of the systems are solid. ~2 weeks.

About 4–5 months of sequenced work to reach the unified state. Each phase delivers a demoable artifact. Each phase makes the next phase cheaper.

### The pitch to leadership, condensed

The design system proved that codified, versioned, queryable systems compound. Day 2 of the workshop showed it in action — a refactor that would've taken weeks, done in hours, because the system gave the AI grounded context.

The opportunity is to apply the same thesis at the company level. Five systems, one substrate, one unified endpoint. PRDs, dev standards, institutional knowledge, and user signal all become first-class, machine-readable, AI-addressable. Every team and every AI tool grounds in the same source of truth.

This isn't a tooling project. It's the infrastructure that makes Tek's expertise — engineering rigor, measurement science, product knowledge — composable and reusable instead of locked in PDFs and people's heads. Same architectural pattern as the design system. Same compounding returns. Multiplied across every team.

The cost of starting is small and the cost of waiting compounds. Every quarter without it, more knowledge gets locked in places nothing can reach.
