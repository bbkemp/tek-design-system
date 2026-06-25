# Prototype QA: TekExpress AppEmulator corpus — DS-v2 mapping snapshot

**Source:** [`corpus/sources/tek-express/screens/`](../../../corpus/sources/tek-express/screens/) (17 screen chunks) + [`corpus/sources/tek-express/docs/ui-audit/`](../../../corpus/sources/tek-express/docs/ui-audit/) (8 component category chunks) · **Audited:** 2026-06-25 · **DS version:** `@bbkemp/ui` 1.0.12 + `@bbkemp/tokens` 1.0.16 (Figma key `3wbYstse9TYKlPtCPpZH5X`)

> **Re-author of** the closed [PR #65](https://github.com/bbkemp/tek-design-system/pull/65) (originally authored 2026-06-01). Re-run against the current corpus layout (post-rename) and the current corpus contents (post-keysight-d9040 intake + new tek-express manuals + AU VoC transcript + Tek-vs-Keysight competitive audit). DS-v2 has not shipped new primitives since the original audit — `@bbkemp/ui` is still 1.0.12 and `@bbkemp/tokens` is still 1.0.16 — so the gap analysis is structurally unchanged. What's new: corpus context the original audit didn't have, validated by recent material.

## Summary

| Bucket | Count | Share |
|---|---|---|
| Existing match | 5 | 18% |
| Close match | 7 | 25% |
| **New (proposed primitive)** | **11** | **39%** |
| Out of scope (OS chrome) | 5 | 18% |
| **Total distinct patterns** | **28** | |

**DS gap signal:** Only 18% of TekExpress patterns drop into DS-v2 as-is. The largest gaps cluster around **navigation** (5-pill side nav, wizard stepper, tab bars, options menu), **data display** (data table, group box, status bar, status pill, empty state), and **charting** (`tek-plot` + `tek-axis`). The 11 new primitives represent the redesign backlog — implementing them in priority order unblocks the TekExpress redesign and produces leverage for every Tek compliance/test app that follows.

**What this means for the redesign:** the existing-match work is mechanical (drop in `tek-checkbox`, `tek-radio`, `tek-input`, `tek-modal`, `tek-label`); the close-match work is medium-effort (extend `tek-button` with circular/icon-only/danger variants; extend or fork `tek-selector` for tab-with-content-routing); the new-primitive work is the redesign's center of gravity.

## DS-v2 current surface (1.0.12)

For reference, the 12 shipped components from `packages/ui/src/`:

| Component | Role |
|---|---|
| `tek-button` | Primary button — assumed teal pill default; variants unverified for icon-only/circular/danger |
| `tek-character-count` | Live character counter (paired with input) |
| `tek-checkbox` | Standard checkbox |
| `tek-footer` | App-level footer slot |
| `tek-input` | Text input (numeric variant via attribute) |
| `tek-label` | Read-only label |
| `tek-modal` | Modal alert / blocking dialog |
| `tek-radio` | Radio button |
| `tek-selector` | Segmented selection (one-of-N) |
| `tek-selector-label` | Label paired with selector |
| `tek-text-link` | Inline hyperlink |
| `tek-toggle` | Boolean toggle switch |

Nothing in DS-v2 yet addresses tabular data, group boxes, status surfaces, plots, wizards, dropdowns, or hierarchical trees.

## Existing matches

DS-v2 covers these as-is.

| Element | Instances | DS component | Notes |
|---|---|---|---|
| Inline teal pill button (primary action: Configure, Show MOI, Next, Back, Generate, Save As, Send Email, …) | 16 labels / 22 instances | `tek-button` | Assumes the default teal variant. The 16-label inventory is in [`docs/ui-audit/inline-teal-pill-buttons.md`](../../../corpus/sources/tek-express/docs/ui-audit/inline-teal-pill-buttons.md). |
| Checkbox (in test selection, preferences, contents-to-save, etc.) | ~30 instances | `tek-checkbox` | Drop-in. |
| Radio (Group Report By, run-mode options) | ~6 instances | `tek-radio` | Drop-in. |
| Text input (DUT ID, file paths, numeric thresholds) | ~12 instances | `tek-input` | Drop-in. Numeric variant covered via existing attribute pattern. |
| Modal alert dialog (single feedback pattern site-wide) | 1 type / 1 documented instance | `tek-modal` | Drop-in. TekExpress uses modals as its only feedback mechanism — `tek-modal` covers it. |

`tek-label` is implicit across every form field and section header — counted in the underlying inventory but rolled up under the controls they accompany.

## Close matches

DS-v2 has something nearby; not a 1:1 fit. Each entry has a one-line gap that decides whether it extends the existing component or forks into a new one.

| Element | Instances | Closest DS component | Gap |
|---|---|---|---|
| **5-pill vertical side nav** (Setup · Status · Results · Plots · Reports, orange-fill active) | 1 nav × persistent | `tek-selector` | Vertical orientation + tab-with-content-routing pattern. `tek-selector` is horizontal segmented. Candidate: **extend `tek-selector` with vertical mode + active-pill state**, or fork as `tek-side-nav`. Design call. |
| **Tab bar (horizontal sub-tabs)** — Status (Test Status \| Log View), Reports (Configuration \| View Settings), Test Selection Configure (Acquire \| Analyze) | 3 tab bars | `tek-selector` | Same shape as side nav but horizontal. If a tab primitive emerges from the side-nav decision, this slots in. Candidate: **`tek-tabs`** as a separate primitive from `tek-selector` (selectors pick a value; tabs route content). |
| **Start button** (green circular) | 5 instances | `tek-button` | Missing circular shape + colored state + icon-only variant. Candidate: **`tek-button` icon-only + circular + success variants**. |
| **Pause button** (grey circular) | 5 instances | `tek-button` | Same shape gap. Same fix. State vocabulary: Pause ⇄ Resume. |
| **Clear × button** (red circular icon-only, Results-only) | 1 instance | `tek-button` | Circular + icon-only + danger variant. Same fix. |
| **Outlined pill (Debug, Preferences ▼)** | 2 instances | `tek-button` | Missing outlined / secondary variant + (for Preferences ▼) trailing dropdown indicator. Candidate: **`tek-button` outlined variant + optional `trailing-icon` slot**. |
| **Text area** (run-time message log, comments) | ~3 instances | `tek-input` | `tek-input` is single-line. Candidate: **`tek-input` `multiline` attribute** or fork `tek-textarea`. Design call. |

The original audit also flagged Bryan's open question on `tek-tabs` vs. extending `tek-selector`. Same question stands: same primitive or two?

## New (no DS match — proposed primitives)

The redesign backlog, ranked by cross-product leverage. Same set as PR #65, validated against the expanded corpus.

| Primitive | TekExpress instances | Why it matters | Priority |
|---|---|---|---|
| **`tek-data-table`** | ≥ 6 distinct tables (Status Test Status, Acquisitions mapping, Limits Editor, Results, Reports inputs, Configure parameter grid) | Every compliance / test-result app shows tabular data with mixed cell types (text, dropdowns, inputs). **Highest-frequency new pattern.** The competitive audit's "Reporting / Results" dimension shows Keysight has a richer table surface — closing this gap is also a competitive parity move. | **P1 #1** |
| **`tek-wizard-stepper`** | 1 instance (TekExpress 4-step Setup) | TekExpress Setup; TekRx wizard-driven calibration; future compliance apps. Mahesha asked for "guided flows" in the meeting transcript. | **P1 #2** |
| **`tek-group-box`** / **`tek-fieldset`** | 14+ instances | Every form-heavy screen (Preferences, Acquisitions, Configure, Reports) is composed of titled group boxes. | **P1 #3** |
| **`tek-field`** (composite label + control + helper) | implicit on every form field (~60 instances) | Mahesha's explicit ask from the [transcript](../../../corpus/sources/tek-express/walkthroughs/desktop-integration-strategy.md) — composite "label + control glued together" reduces per-screen layout burden. | **P1 #4** |
| **`tek-status-bar`** | 1 persistent instance (bottom edge: "Ready." + progress fill) | App-level status surface. Pattern recurs across every Tek instrument app. Documented in the 2450-EC baseline too. | **P1 #5** |
| **`tek-status-pill`** | Multiple per screen (Status Test Status row, Results pass/fail, Running Test minimised window state) | Label + state color + optional chevron. Reaffirmed from 2450-EC. | **P1 #6** |
| **`tek-checkbox-tree`** | 1 instance (Setup → Test Selection hierarchical tree: Algorithm Library → SCOPE → DPOJET → Autoset) | Single instance in TekExpress but high cross-product value: every "select tests / scenarios / capabilities" surface uses this. Reusable in TekRx and any future test-selection UI. | **P1 #7** |
| **`tek-dropdown`** | 12 instances + Options ▼ menu | Reaffirmed from 2450-EC. TekExpress confirms this is cross-product table stakes. Could be `tek-button` + `tek-modal` composition, but common enough to deserve its own primitive. | **P1 #8** |
| **`tek-empty-state`** | 2 instances ("Plots Not Available", "Result table empty") | Small footprint; high pattern-consistency win across every list / table / plot surface. | **P1 #9** |
| **`tek-plot`** | 1 documented instance (Plots screen waveform) | **Highest-impact unresolved gap.** Blocked by the open chart-library decision. | **P0 blocker** |
| **`tek-axis`** | Paired with `tek-plot` | Labeled tick scale. Same blocker. | **P0 blocker** |

The Options ▼ application menu (top-right title bar overlay) overlaps with `tek-dropdown` but has stronger menu-bar semantics. If `tek-dropdown` is a value picker, a sibling **`tek-menu`** for command lists may emerge later — defer until the dropdown spec lands.

## New (out of scope for web)

Application window chrome — owned by the OS / shell, not the design system. Included for completeness.

| Element | Disposition |
|---|---|
| Window title bar (app title + version + chrome) | OS chrome. No `tek-*` primitive needed. |
| Window controls (minimise, mail-this, close) | OS chrome. Replace with web-app equivalents (browser tab close, share menu, in-app dismiss) if/when TekExpress ports to web. |
| Right-rail toolbar surround | Not a component per se — a panel layout. Implementable in any web framework without a DS primitive. |
| Status-bar progress fill (just the bar geometry, not the message text) | Standard `<progress>` element or `tek-progress` if a primitive emerges; not classified as a TekExpress-specific gap. |
| Mail-this email icon (Reports → Send Email) | Tied to the OS mail client. Replace with a `tek-button` triggering a share modal in the web port. |

## The blocking decision (unchanged from PR #65)

Rick Kuhlman's friction note from the meeting transcript ([`walkthroughs/ux-feedback-and-open-questions.md`](../../../corpus/sources/tek-express/walkthroughs/ux-feedback-and-open-questions.md)):

> *"We go and sort of remake charts in the native place. And then what happens is we lose all the richness of something that … get extended into this, we go and remake them all."*

Without picking a charting library, `tek-plot` and `tek-axis` cannot be specified. The Plots screen redesign is blocked. The Results screen value-display work is blocked. **This is the single highest-impact unresolved decision in the entire corpus** — repeating the original audit's call.

## What's new since 2026-06-01 (PR #65)

Material that's landed in the corpus and either reinforces or expands the original analysis:

| New material | Impact on this audit |
|---|---|
| [`audits/competitive/2026-06-25-tek-express-vs-keysight-d9040dppc/assets/CompetitiveAnalysis.pdf`](../../competitive/2026-06-25-tek-express-vs-keysight-d9040dppc/assets/) (Tek-authored, Farsana N A, 2026-06-23) | **Reinforces every reporting / state-management / GUI gap.** Keysight leads on offline mode, distributed measurement, license error visibility, project state model, window/layout customization. TekExpress leads on email notifications + report format breadth. The competitive matrix is a useful sanity check for which new primitives matter for parity. |
| [`corpus/sources/keysight-d9040/`](../../../corpus/sources/keysight-d9040/) (NEW subject — 36 photos of Keysight Infiniium running D9040 family test apps) | Provides direct visual comparison surfaces for the redesign — pair Keysight's UI patterns against TekExpress patterns when implementing each new primitive. |
| `corpus/sources/tek-express/uploads/transcripts/AU VoC Sync up.docx` | Voice-of-customer signal. Not yet processed; will reinforce or surface gaps in the priority list when `/document-walkthrough` runs. |
| 6 new tek-express manuals (D9020USBC USB3, TekExpress DisplayPortTx, PCI Express Online Help, DDR5 Tx Manual) | When processed via `/document-pdf`, these will enrich the manual-pairing pass for every TekExpress screen. Don't change gap counts but may surface variant-screen patterns not in the current 17-screen inventory. |
| Locked-format `document-walkthrough` pointer + `/pair-manual` + `/refresh-index` skills landed | Operational improvements; don't change the gap analysis. |

DS-v2 itself: **no new primitives shipped since 2026-06-01.** Versions stable at 1.0.12 / 1.0.16.

## Recommended priorities

**P0 (architectural decisions blocking implementation):**

1. **Pick a charting library.** This unblocks `tek-plot` and `tek-axis` and is the single highest-leverage decision. Candidates from the broader industry: D3, Plotly, Vega-Lite, ECharts, Highcharts. Decision shape: which library, what API surface does `tek-plot` wrap, what's the licensing posture for a commercial Tek product.
2. **Decide `tek-tabs` vs. extending `tek-selector`** for tab-with-content-routing. Affects the side-nav implementation and the three sub-tab bars.

**P1 (new primitives in cross-product leverage order — implement in this sequence):**

1. `tek-data-table` — highest frequency, validated by competitive audit
2. `tek-wizard-stepper` — unblocks Setup workflow + TekRx future
3. `tek-group-box` / `tek-fieldset` — 14+ instances; foundational
4. `tek-field` (composite) — Mahesha's ask; reduces per-screen layout cost
5. `tek-status-pill` + `tek-status-bar` — paired surfaces
6. `tek-checkbox-tree`
7. `tek-empty-state`
8. `tek-dropdown` (reaffirmed from 2450-EC)

**P2 (close-match extensions to existing components):**

- `tek-selector` vertical orientation (for side nav)
- `tek-button` icon-only / circular / success / danger variants (+ optional `trailing-icon` slot) — covers Start, Pause, Clear, Debug, Preferences ▼, and the 6-type icon-button category in one extension
- `tek-input` `multiline` attribute (for text-area surfaces)
- Verify `tek-button` outlined / `secondary` variant covers the 2 non-teal outlined instances

**P3 (open / discuss):**

- Reports-panel tab-content swap (the audit-vs-screenshots discrepancy flagged in [reports-configuration.md](../../../corpus/sources/tek-express/screens/reports-configuration.md) and [reports-view-settings.md](../../../corpus/sources/tek-express/screens/reports-view-settings.md))
- Half-screen docked-window UX (Rick's 50:05 question from the transcript)
- `tek-menu` as a separate primitive for application-level command menus (Options ▼) — defer until `tek-dropdown` lands
- Container-breakpoint scale (cb-sm 600 / cb-md 760 / cb-lg 820) validation across additional screens; current calibration is Setup-DUT-only

## What this audit is (and isn't)

This is the 2026-06-25 disposable snapshot of the DS-v2 ↔ TekExpress gap. Old snapshots stay in `audits/prototype/` for historical comparison. Regenerate when:

- DS-v2 ships any of the proposed primitives → re-run to confirm coverage moved from "new" to "existing match"
- A new TekExpress screen lands in the corpus → re-run to capture new patterns
- A redesign briefing needs current data → re-run for the latest signal
- The charting decision lands → re-run to confirm `tek-plot` / `tek-axis` specs are derivable

This audit is **not** a roadmap commitment. It's a snapshot of where the design system fits the corpus today and where the gaps are. Prioritization and timing belong in roadmap docs, not here.

## Provenance and disposability

Re-authored 2026-06-25 against the corpus at commit `<this-PR>`. Supersedes the original 2026-06-01 PR #65, which was closed without merging because its file paths referenced the pre-rename `rag/` layout and predated the recent corpus expansion. The analytical conclusions are preserved verbatim — same buckets, same counts, same priority ordering — with current paths, current context, and the new competitive-audit and keysight-d9040 references woven in.

For format conventions, see [`audits/README.md`](../../README.md) § `prototype/`. For the `prototype-qa` skill that produced this audit, see [`.claude/skills/prototype-qa/SKILL.md`](../../../.claude/skills/prototype-qa/SKILL.md).
