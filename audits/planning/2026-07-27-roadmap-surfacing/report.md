---
provenance: authored-analysis
authored_by: [Claude Code (Fable 5), Bryan Kemp]
authored_date: 2026-07-27
---

> ## ⚠️ Authored analysis — not corpus
> **This document is interpretation, authored by Claude Code + Bryan Kemp on 2026-07-27.** It is opinion and synthesis, not observed fact. The system of record is the repo itself — every claim cites a repo path; when this analysis and the cited doc disagree, the doc wins and this file should be corrected.

# Roadmap surfacing audit — planning docs → GitHub Issues & Projects

**Purpose.** Inventory every roadmap / planning / discovery item currently living in repo markdown, so it can be surfaced into GitHub Issues and a GitHub Project. This is the migration worksheet: each row is a candidate issue.

**Method.** Full-repo markdown sweep for planning keywords, then exhaustive reads of the hits: [CLAUDE.md](../../../CLAUDE.md), [README.md](../../../README.md), [CONTRIBUTING.md](../../../CONTRIBUTING.md), [docs/tek-system-core.md](../../../docs/tek-system-core.md), [docs/mcp-server-plan.md](../../../docs/mcp-server-plan.md), [docs/workflow.md](../../../docs/workflow.md), [docs/agents-full.md](../../../docs/agents-full.md), both ADRs, [apps/mcp/README.md](../../../apps/mcp/README.md), all of `uxr/`, all of `audits/`. Claims of "planned" were disk-verified where cheap (does the directory/file/script actually exist?). Existing GitHub issues were pulled for overlap.

## Executive summary

- **~110 distinct outstanding items** live in planning docs today. **Zero are tracked as GitHub issues.** The 8 real open issues are automation output (`figma-mcp-watch`), release chores, and ad-hoc notes.
- **The five big sources:** `docs/tek-system-core.md` (five-system architecture — the majority), `docs/mcp-server-plan.md` (P1/P2 remainder), `uxr/tek-express-ae-interviews/` (a full product-redesign backlog), `audits/design-additions/` + `audits/prototype/` (unbuilt component/token proposals), and the READMEs (known bugs + limitations).
- **Disk-verified absences** (docs say planned; confirmed not present): `/prds/`, `apps/storybook`, `apps/docs-site`, ESLint config, Plop/`new:component` scaffold, per-component `.styles.ts`/`.test.ts` split, `packages/icons`, `/content` dir.
- **Stale doc claims found** (docs say planned; actually shipped): `document-walkthrough` skill, `refresh-index --check` CI gate, all 7 rr-additions components, and more — see [§ Stale-doc fixes](#stale-doc-fixes).
- **Biggest structural question:** the Tek Express redesign backlog (UXR clusters T1–T31 below) is *product* work, not design-system work. Whether it belongs in this repo's issues or a future product/PRD repo is Open decision OD-1.

## How to read the tables

| Column | Meaning |
|---|---|
| ID | Stable handle for this audit (referenced in the filing plan) |
| Proposed issue title | Usable as-is when filing |
| Source | File § section the item comes from |
| Doc status | What the source doc says / disk verification |
| Prio | Proposed P0/P1/P2 — **proposed**, not decided; P0 = blocking or explicitly flagged highest-impact in the source |

---

## A — Namespace migration & GitHub foundation

| ID | Proposed issue title | Source | Doc status | Prio |
|---|---|---|---|---|
| A1 | Migrate `@bbkemp/tokens` + `@bbkemp/ui` → `@tektronix/*` | tek-system-core § Sequencing step 2; CLAUDE.md in-flight table | Planned; not started (README/CONTRIBUTING still `@bbkemp/*` throughout) | P0 |
| A2 | Create/claim `@tektronix` GitHub org (SSO, teams, 2FA, branch-protection defaults) | tek-system-core § System Architecture L110-231 | Planned | P0 |
| A3 | Create `@tektronix/.github` org repo — workflow templates + reusable actions | tek-system-core § CI/CD L173-188; workflow.md L124 (this doc is the seed) | Planned | P1 |
| A4 | Product repo audit — inventory all Tek repos, categorize migrate/archive/leave | tek-system-core § Migration sequencing L228 | Planned | P1 |
| A5 | Stand up polyrepo topology (figma-plugins, knowledge-corpus, analytics, product repos) | tek-system-core § Repo topology L116-158 | Planned; only this monorepo exists | P2 |
| A6 | Evaluate npm Enterprise / Verdaccio vs GitHub Packages at scale | tek-system-core L206-210 | Open question / deferred | P2 |

## B — DEV system (guardrails, scaffolds, CI gates)

| ID | Proposed issue title | Source | Doc status | Prio |
|---|---|---|---|---|
| B1 | ESLint rules — hardcoded hex/px, missing type exports, wrong import paths | tek-system-core L506-537; CLAUDE.md in-flight | Planned; **verified absent** (no ESLint config) | P0 |
| B2 | `npm run new:component` / `new:token` Plop scaffold | tek-system-core L512-545; ADR-0001 follow-up | Planned; **verified absent** | P1 |
| B3 | Capture remaining ADRs (Style Dictionary v3, Web Components vs React, publish concurrency/SHA-race) | tek-system-core L480-482 | Partially shipped (2 of ~7 exist: 0001 Lit, 0002 layout primitives) | P1 |
| B4 | Validation layer — visual regression, axe-core a11y, bundle-size budgets as merge gates | tek-system-core Phase 3 L547-554 | Planned | P2 |
| B5 | `.cursorrules` at repo root (Cursor-side counterpart to CLAUDE.md) | tek-system-core L498-504 | Planned (skill mirrors exist in `.cursor/rules/`; root file unconfirmed) | P2 |
| B6 | Cross-system CI check: every shipped component has a PRD | tek-system-core Phase 4 L556-562 | Planned; gated on PRD system (D) | P2 |
| B7 | Codify shared code primitives (base classes, error/logging patterns) | tek-system-core L492-496 | Partial (`base-selector.ts` exists) | P2 |

## C — UI package conventions & component docs

| ID | Proposed issue title | Source | Doc status | Prio |
|---|---|---|---|---|
| C1 | Per-component file split: `.styles.ts` / `.test.ts` / `.stories.ts` | CLAUDE.md in-flight; ADR-0001 follow-up | Planned; **verified absent** (all single-file) | P1 |
| C2 | Storybook / component explorer at `apps/storybook` | CLAUDE.md in-flight; tek-system-core | Planned; **verified absent** | P1 |
| C3 | Public docs-site at `apps/docs-site` (PRDs + components + tokens + ADRs) | tek-system-core L129-131, L560 | Planned; **verified absent** | P2 |
| C4 | Finish component population — `select`, `toast`, `menu` still missing from ADR-0001's ~25-component target | ADR-0001 § Context/Consequences | Partially shipped (wave 1+2 landed; these named ones absent from `packages/ui/src/`) | P1 |
| C5 | `@tektronix/icons` package (see also G3 — icon strategy decision) | tek-system-core L126-127; bench-audit § 6E | Planned; no `packages/icons` | P1 |
| C6 | Convert `prototypes/component-library/index.html` to real `packages/*/dist/` imports | README L536-539; tek-system-core appendix L860-863; repo-root-cleanup Wave 3 | Open item, three docs agree | P1 |
| C7 | Refactor both sign-in pages onto layout primitives (retire drifted `page-layout.css`) | ADR-0002 follow-ups L64-68 | Planned; README still references `page-layout.css` | P2 |
| C8 | Add all four layout primitives to the component-library page | ADR-0002 follow-ups | Planned | P2 |

## D — PRD system

| ID | Proposed issue title | Source | Doc status | Prio |
|---|---|---|---|---|
| D1 | Create `/prds/` directory + PRD front-matter convention + README | CLAUDE.md in-flight; tek-system-core Part 2 L377-466 | Planned; **verified absent** | P0 |
| D2 | Write first PRD (Dashboard) + generate prototype against it | tek-system-core L464-466 | Planned | P1 |
| D3 | Wire PRDs into AI tooling (PRs by PMs, design review gate, version tagging) | tek-system-core L447-462 | Planned | P2 |

## E — MCP endpoint hardening

| ID | Proposed issue title | Source | Doc status | Prio |
|---|---|---|---|---|
| E1 | Eval gate in CI — fail PRs that regress retrieval | mcp-server-plan P1 #9 | Planned (harness exists; CI wiring absent) | P0 |
| E2 | XAML fast-follow — join `docs/wpf/` resource keys into token tool results | mcp-server-plan P1 #10 | Planned | P1 |
| E3 | Usage logging — tool calls + query misses feed the eval set | mcp-server-plan P1 #11 | Planned | P1 |
| E4 | Link-rotation runbook (one-step secret rotation) | mcp-server-plan P1 #12 | Planned | P1 |
| E5 | Org SSO / OAuth replaces secret-link access | mcp-server-plan P2 #13 | Planned; gated on A1/A2 | P2 |
| E6 | Annotate 20 wave-1/2 components + layout primitives into the MCP manifest | audits/mcp/2026-07-16 § 2026-07-27 update | Explicit follow-up, open | P0 |
| E7 | Embed per-component summaries into corpus vector search (P2-2) | audits/mcp/2026-07-16 § P2 | Open | P2 |
| E8 | MCP regression gate — exact-lookup eval cases + CI non-empty-description check (P2-3) | audits/mcp/2026-07-16 § P2 | Open (would have auto-caught E6) | P1 |
| E9 | Verify Hermes Agent works over remote streamable-HTTP | mcp-server-plan P0 #8 | Verification task, status unknown | P1 |
| E10 | New surfaces join endpoint — PRDs, ADRs, UXR (ADRs exist but aren't served) | mcp-server-plan P2 #14 | Planned | P2 |

## F — Tokens

| ID | Proposed issue title | Source | Doc status | Prio |
|---|---|---|---|---|
| F1 | Motion.dev adoption + `Motion` Figma collection → `--tek-motion-duration-*` | README § Motion L382-390 | Planned | P2 |
| F2 | Blur primitive collection (`--tek-blur-sm/md/lg`) | README § Motion L391-399 | Planned | P2 |
| F3 | Data-viz / channel-trace color tokens (`--tek-color-plot-trace-*`) + Bench↔Riddick channel-color reconciliation | redesign-additions § 3.13 ⚠; bench-audit § 2; riddick spec § 9 | Proposed, awaiting DS review; tied to OD-3 chart library | P1 |
| F4 | Gradient + focus-glow token domains (`glow.*`, `shadow.elevation.*`) | riddick-alignment-spec L39/L43; bench-audit § 4 | Explicit gap ("zero gradient tokens") | P2 |
| F5 | Mono type scale — 15 size + 15 line-height variables + text styles (Iosevka) | mono-type-scale-spec.md (status: proposed) | Proposed; overlaps open PRs [#201](https://github.com/bbkemp/tek-design-system/pull/201)/issue [#199](https://github.com/bbkemp/tek-design-system/issues/199) | P1 |
| F6 | Review raw-alpha tint tokens from wave 1/2 (tabs, statusbar, table hover/selected) | wave1-additions § 3; wave2-additions § 1/§ 5 | Open review boxes unchecked | P1 |
| F7 | `spacing/panel/{full,text,icon}` tokens for nav-panel widths | wave2-additions § 3 ⚠ | Proposed, conditional ("if these recur") | P2 |
| F8 | Add `text/bold/3xl` Geist type style | type-translation-table § Gaps | Explicit gap | P2 |
| F9 | Token Push plugin — support a 3rd top-level Figma Variables collection | CONTRIBUTING L110-112 | Known limitation, on-demand | P2 |

## G — New components (instrumentation family)

All confirmed absent from `packages/ui/src/` as of 2026-07-27.

| ID | Proposed issue title | Source | Doc status | Prio |
|---|---|---|---|---|
| G1 | `tek-plot` waveform/chart primitive (blocked on OD-3 chart-library decision) | baseline report § new primitives; 2450-EC report; rr-additions § 12; synthesis OD 5 | "Single highest-impact unresolved decision in the corpus" | P0 |
| G2 | `tek-readout` monospaced numeric display | 2450-EC report L54; rr-additions § 12 | "Core to any instrumentation UI"; bundle with G1 | P1 |
| G3 | `tek-icon` component + tokenized icon set (packaging decision = OD-4) | redesign-additions § 3.9 ⚠; bench-audit § 6E | Every prototype inlines SVGs today | P1 |
| G4 | `tek-wizard-stepper` / `tek-step` | redesign-additions § 3.3; rr-additions v1.5 | "Top P1 primitive in the brief", deferred | P1 |
| G5 | `tek-empty-state` placeholder (canonical chart placeholder until G1) | redesign-additions § 3.8 | Name reserved, not built | P2 |
| G6 | `tek-checkbox-tree` (scale target: PCIe 200-test trees) | rr-additions § 12 v1.5; baseline report | Deferred "build local, promote later" | P2 |
| G7 | `tek-axis` standalone tick-scale (conditional split from G1) | 2450-EC L54; redesign-additions § 3.12 | Conditional | P2 |
| G8 | `tek-field` label+control composite — **component vs pattern-doc conflict, see OD-5** | redesign-additions § 3.4 vs rr-additions § 12 | Sources disagree | P2 |
| G9 | `tek-numeric-tile` (extend `tek-input` vs fork — needs design conversation) | 2450-EC L38; rr-additions § 12 | Needs-decision | P2 |
| G10 | `tek-button` variants: circular icon-only, colored states, outlined + trailing icon | baseline report § close-match L64-67 | Open question (extend vs fork) | P2 |
| G11 | Bench/Riddick Phase-2 primitives: meter, stepper, keypad, slider, menu-bar, rail-button, scale-view/timeline, waveform-trace | bench-audit § 7; riddick spec § 9 | April 2026 list, partially superseded — only the still-missing subset; relates to issue [#177](https://github.com/bbkemp/tek-design-system/issues/177) | P2 |

## H — Code Connect

| ID | Proposed issue title | Source | Doc status | Prio |
|---|---|---|---|---|
| H1 | Fix Label mapping — points at `input/input.ts`, should be `label/label.ts` (node 780:10209) | README § Known Code Connect issues L492-497; CONTRIBUTING L209 | Open TODO, known bug (13 instances) | P1 |
| H2 | Fix CharacterCount `componentName` misspelling ("CharachterCount", node 7011:143) | README L492-497; CONTRIBUTING L213 | Open TODO, cosmetic (5 instances) | P2 |
| H3 | Add Code Connect mappings for wave-1/2 components + layout primitives (~18 nodes) | README component table vs CONTRIBUTING current-mappings (only original 12 listed) | Apparent gap — verify per-node before filing | P1 |

## I — Corpus & knowledge system

| ID | Proposed issue title | Source | Doc status | Prio |
|---|---|---|---|---|
| I1 | Corpus Phase 2 — expand doc types in first product line (app notes, datasheets, training) | tek-system-core L344-349 | Planned | P1 |
| I2 | Corpus Phase 4 — second product line to validate generalization | tek-system-core L344-349 | Planned | P2 |
| I3 | Corpus Phase 5 — personas + scoped retrieval + customer-facing constrained interface | tek-system-core L344-349, appendix L760-768 | Planned | P2 |
| I4 | Hand-curated 50-question answer-accuracy eval (beyond MCP retrieval eval) | tek-system-core L336-338 | Partially shipped (25-50 retrieval cases exist) | P2 |
| I5 | Bedrock / enterprise-tier hosting decision before non-public corpus content | tek-system-core L296 | Open question / gate | P1 |
| I6 | `document-artifact` skill (exploded views, schematics, mechanical drawings) | agents-full.md L1138 | Planned P2, no skill exists | P2 |
| I7 | Progressive-disclosure RAG (top/mid/deep layered retrieval) | tek-system-core appendix L770-780 | Open design direction | P2 |
| I8 | Sanity CMS publish-webhook → vector store (`source: sanity`) | tek-system-core L351-373 | Deferred until ecomm site | P2 |
| I9 | Competitive-audit template skeleton + worked example | audits/README L59; rag-baseline P2-23 | Explicit follow-up | P2 |
| I10 | RAG-baseline residual: orchestrated "process all" mode, auto `corpus/INDEX.md`, shared photo location | rag-baseline L157 (P2-13/14/18/24) | Deferred, tracked as friction | P2 |
| I11 | Corpus chunks to unblock eye-diagram rendering (`plots-eye.md`, `moi-tx-eye-tp4-gen5.md`) + token-refresh prototype gaps | qa-deep-pass L95; qa-carpet-fiber L126 | Explicit, "the product is the corpus" | P2 |
| I12 | Role-based "how do I contribute?" skill (product/hardware/software/firmware/marketing branches) | tek-system-core appendix L724-734 | Author intent | P2 |

## J — UXR & analytics infrastructure

| ID | Proposed issue title | Source | Doc status | Prio |
|---|---|---|---|---|
| J1 | UXR Phase 1 — persona layer on the corpus (4-6 grounded personas) | tek-system-core L620-635 | Planned | P1 |
| J2 | UXR Phase 2 — single-product quant pipeline (event taxonomy, warehouse, dashboard) | tek-system-core L620-635, L594-606 | Planned | P2 |
| J3 | UXR Phases 3-5 — research repository, cross-product taxonomy, joined qual+quant via MCP | tek-system-core L620-635 | Planned | P2 |
| J4 | On-device telemetry SDK for instruments (opt-in, batch/upload) — flagged "the long pole" | tek-system-core L608-610 | Planned, quarters-scale | P2 |
| J5 | Second AE study round — prototype-centric, hands-on tasks | synthesis § 9 | Explicit next study | P1 |
| J6 | Schedule Sam DDR/memory follow-up session (agreed in-session; session truncated) | synthesis § 9, OD 9; phase-3 § B2 | Explicit, time-sensitive | P0 |
| J7 | Confirm speaker attributions in AE transcripts before external quoting | synthesis § 9 L184-185 | Explicit caveat | P1 |
| J8 | Widen future study mix to conformance products (PCI/DisplayPort/MIPI, TX+RX) | phase-3 § B5 | Explicit | P2 |

## K — Content system

| ID | Proposed issue title | Source | Doc status | Prio |
|---|---|---|---|---|
| K1 | Files-as-CMS `/content` system with component-contract-derived schema | tek-system-core L639-702 | Planned; **verified absent** | P2 |
| K2 | Evaluate Keystatic/TinaCMS before building custom editing UI | tek-system-core L688 | Open question, explicitly first | P2 |
| K3 | Phase-1 proof: one `page.json` product page rendered against 2-3 UI components | tek-system-core L700-702 | Planned | P2 |

## L — Figma-side follow-ups

| ID | Proposed issue title | Source | Doc status | Prio |
|---|---|---|---|---|
| L1 | Manual Figma slot conversion for layout-primitive Content frames | ADR-0002 § Decision L42/L60 | In-flight, manual step pending | P1 |
| L2 | Verify Figma Slots open-beta behavior before committing structure (risk) | ADR-0002 § Consequences L58-60 | Open risk | P2 |
| L3 | Document semantic variables created during layout-primitive Figma build (additions audit) | ADR-0002 follow-ups | Ongoing obligation | P2 |

## M — Competitive gaps (vs Keysight)

Product-level; same OD-1 placement question as cluster T.

| ID | Proposed issue title | Source | Doc status | Prio |
|---|---|---|---|---|
| M1 | Multi-instrument coordination (Resource Arbiter equivalent) | competitive 2026-06-25 L61 | Explicit gap | P2 |
| M2 | First-class automation surface (Automate tab + command generator) | competitive L62; overlaps T13 | Explicit gap | P1 |
| M3 | Integrated results richness — eye-diagram heat-maps beside margin table | competitive L63; ties to G1 | Explicit gap | P2 |
| M4 | Prior-deck gaps: offline mode, license-error visibility, project state model, layout customization | competitive L99 | Unaddressed | P2 |

## T — Tek Express redesign backlog (from AE interviews)

The full product backlog from `uxr/tek-express-ae-interviews/`. **Placement is OD-1** — these are product issues, not DS issues. Summarized here at cluster level; the synthesis doc's own P0/P1/P2 is preserved.

| ID | Proposed issue title | Synthesis prio |
|---|---|---|
| T1 | Persistent compliance-vs-user-defined mode indicator (status bar + color-coded frame) | P0 |
| T2 | Selective rerun with report section replace/merge | P0 |
| T3 | Error/log/run-state intelligibility (summary+detail log, richer statuses, margin cues) | P0 |
| T4 | Dissolve the Options junk drawer (placement pass) | P0 |
| T5 | Launcher / global-settings layer (R&S pattern) — scope is OD-8 | P0 |
| T6 | Pre-recorded waveform workflow fix (file→signal mapping dialog) | P0 |
| T7 | Visual identity: TekScope kinship, dark default — token variant validation is OD-7 | P0 |
| T8 | DUT ID length → ~200 chars (long-path registry fix) | P1 |
| T9 | Results/Status consolidation (merge vs keep is an open decision) | P1 |
| T10 | Scale-proof test model, PCIe-first (multi-select rates, presets as rows, spec-ID naming) | P1 |
| T11 | Instrument liveness + pre-flight check + editable equipment allowlist | P1 |
| T12 | Layered contextual help (selection-aware F1 → description → deep link) | P1 |
| T13 | Automation-parity contract (per-screen checklist; mechanism is an open decision) | P1 |
| T14-T22 | P2 opportunistic batch: splash nag control, report evolution (CSV/HTML/kill-MHT/size), session recall + save-anywhere, acquisition speed, cross-plugin governance, interaction details, session files as OS citizens, report hyperlinks, verbose logging + log-zip export | P2 |
| T23-T28 | Prototype-accuracy debts from phase-1: config-screen fixes, checkmark semantics (visited-only), nomenclature pass, interaction consistency, typography fixes, first-run tutorial overlay | P1-P2 |
| T29-T30 | Differentiator candidates: `.TSS` scope-session debug export ("no one does that — we would win"), Load-on-TekScope / HSI offload / cockpit view | Decision |
| T31 | Carried-forward: TekRx sequential wizard, 1024×768 density floor, composite lock/warning controls | P2 |

---

## Stale-doc fixes

Docs claiming "planned" for things that shipped (or vice versa). Each is a small `docs:` issue or one batch PR.

| ID | Fix | Where |
|---|---|---|
| S1 | `document-walkthrough` marked "planned P2" — it shipped | docs/agents-full.md L1139 |
| S2 | `refresh-index --check` CI gate called "future" — `corpus-index-check.yml` exists | docs/agents-full.md L2308 |
| S3 | `packages/qt` still in target topology — Qt layer retired 2026-07-08 | tek-system-core L126-127 |
| S4 | CLAUDE.md in-flight table: verify each row on next touch (several verified still-true today; keep in sync as issues close) | CLAUDE.md |
| S5 | Neon-vs-Supabase open decision is moot — Neon shipped | mcp-server-plan § Open decisions |
| S6 | rr-additions / bench-audit still propose components that shipped in waves 1-2 — add "superseded" banners | audits/design-additions/* |

## Open decisions (need Bryan / team calls — not resolved by this audit)

| ID | Decision | Sources in tension |
|---|---|---|
| OD-1 | **Where does product-level work live?** Tek Express redesign backlog (T) + competitive gaps (M) in this repo's issues, or deferred to the future PRD/product repo (audits/README § Future home already anticipates a move) | uxr/, audits/competitive/, audits/README L63-65 |
| OD-2 | **Project structure:** one "Tek Roadmap" Project with a Theme field, vs two Projects (DS infra / Tek Express product) | this audit |
| OD-3 | Chart library for `tek-plot` — "highest-impact unresolved decision in the corpus" | baseline report; synthesis OD 5 |
| OD-4 | Icon strategy: `tek-icon` in `@bbkemp/ui` vs separate icons package | redesign-additions § 3.9 vs bench-audit § 6E |
| OD-5 | `tek-field`: component (redesign-additions § 3.4) vs pattern-doc only (rr-additions § 12) — **sources disagree** | both |
| OD-6 | Channel-trace colors: Bench purple vs Riddick navy on Ch6 — "pick one truth" | bench-audit vs riddick spec |
| OD-7 | Light mode for Tek Express: dark-only canonical vs dark+light day one (wave 2 assumed the latter; never formally decided) | component-additions § 8/§ 11.1 |
| OD-8 | Launcher layer: placement fix inside TekExpress vs real architectural layer | synthesis OD 11 |
| OD-9 | Mono type scale: which weights/widths get full style sets; readout letter-spacing | mono-type-scale-spec § Open decisions |
| OD-10 | Automation-parity mechanism + who signs off; scripter-floor scope | synthesis OD 10 |
| OD-11 | Results/Status merge vs keep-for-multi-run | synthesis OD 3 |
| OD-12 | "User-defined" vs "Debug" naming — put to a vote | phase-1 § 5, synthesis OD 1 |
| OD-13 | Component knowledge in corpus vector search: same corpus as observed docs or separate surface | audits/mcp OD 4 |
| OD-14 | Garuda (Rx) product positioning | baseline report L218 |

## Overlap with existing open issues

| Existing issue | Overlaps |
|---|---|
| [#177](https://github.com/bbkemp/tek-design-system/issues/177) Tek Bench workstation shell | G11 (bench primitives) |
| [#199](https://github.com/bbkemp/tek-design-system/issues/199) Export Fonts / PR [#201](https://github.com/bbkemp/tek-design-system/pull/201) | F5 (mono type scale) |
| [#128](https://github.com/bbkemp/tek-design-system/issues/128) mono-fonts CD docs | F5 |
| [#103](https://github.com/bbkemp/tek-design-system/issues/103) AI-team config GUI CD prompt | design-additions 2026-07-07 (no new item — already tracked) |
| [#194](https://github.com/bbkemp/tek-design-system/issues/194) Test issue | close it |

Everything else in this audit is untracked.

## Proposed Project structure (for discussion)

- **One GitHub Project, "Tek DS Roadmap"** (unless OD-2 lands on two), with fields:
  - **Theme** (single-select): the cluster letters above (Namespace/GitHub, DEV system, UI conventions, PRD, MCP, Tokens, Components, Code Connect, Corpus, UXR/Analytics, Content, Figma, Product-TekExpress, Competitive)
  - **Priority**: P0/P1/P2 (seeded from this audit, re-triaged by Bryan)
  - **Source doc**: text field with the file § section (so every issue stays traceable to its doc)
- **Labels** mirroring Conventional-Commit scopes (`tokens`, `ui`, `mcp`, `corpus`, `figma`, `docs`, `uxr`) so issues connect to the existing commit/changelog convention.
- **Milestones** only where the docs already define phases (mcp-server-plan P1/P2; corpus phases; UXR phases).

## Suggested filing plan

1. **Tranche 1 (highest value, unambiguous):** all P0s — A1, A2, B1, D1, E1, E6, G1(+OD-3 as its own decision issue), J6, plus H1/H3 (small, known bugs).
2. **Tranche 2:** remaining DS-side P1s (clusters B, C, E, F, G, H, I, J-infra, L).
3. **Tranche 3 (after OD-1):** Tek Express backlog (T) + competitive (M) — wherever they land.
4. **Decision issues:** file each OD as its own issue labeled `decision`, so open questions stop living only in doc prose.
5. **Doc-hygiene batch:** S1-S6 as one `docs:` PR or a checklist issue.
