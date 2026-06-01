# Prototype QA: TekExpress AppEmulator — DS-v2 Redesign Baseline

**Source:** `rag/sources/tek-express/` (18 screen chunks · 10 docs/ui-audit chunks · 4 walkthroughs chunks) · **Audited:** 2026-06-01 · **DS version:** `@bbkemp/ui` 1.0.12 + `@bbkemp/tokens` 1.0.16 (per the live `packages/ui/src/index.ts` registry + `packages/tokens/src/`)

Disposable snapshot. Regenerate when DS-v2 ships any of the proposed primitives below, when the TekExpress corpus gets new content, or before the redesign work hands off to implementation.

## Summary

| Bucket | Count | Share |
|---|---|---|
| Existing match | 5 | 18% |
| Close match | 7 | 25% |
| New (proposed primitive) | 11 | 39% |
| Out of scope (OS chrome) | 5 | 18% |
| **Total component patterns audited** | **28** | |

**DS gap signal.** Of 28 distinct component patterns in TekExpress AppEmulator, only 5 (18%) drop into DS-v2 as-is. 25% need small extensions to existing primitives; 39% need entirely new primitives the DS has not built yet. The largest gaps cluster around **navigation patterns** (wizard step indicator, vertical pill nav, tab bar), **data display** (data table, group box, status pill, empty state), and **charting** (no plot/axis primitive). The chart-library decision flagged in [`walkthroughs/ux-feedback-and-open-questions.md`](../../../rag/sources/tek-express/walkthroughs/ux-feedback-and-open-questions.md) is the single highest-impact unresolved item; without it, `tek-plot` cannot be specified and the Plots screen redesign is blocked.

The audit input is the legacy TekExpress AppEmulator UI as captured in the corpus. The audit output drives the implementation strategy: which DS-v2 components the redesign can use directly, which ones need close-match extensions, and which gaps DS-v2 must close before the redesign ships.

## Existing matches

The DS already has these. Drop in unchanged.

| Element (TekExpress) | DS component | Notes |
|---|---|---|
| Checkbox (single, with optional embedded numeric input) | [`tek-checkbox`](../../../packages/ui/src/checkbox/checkbox.ts) | 26 instances across Setup › Preferences, Reports panel, Status › Log View (Auto Scroll). Embedded-numeric-input variant (e.g. "Acquire/Analyze each test [N] times") is a composition pattern, not a new primitive. |
| Radio button (mutually exclusive, orange-ring) | [`tek-radio`](../../../packages/ui/src/radio/radio.ts) | 12 instances. Setup › DUT acquisition-mode pair, Setup › Acquisitions Acquisition & Save options, Reports panel Report Update Mode and Group Report By. |
| Single-line text input | [`tek-input`](../../../packages/ui/src/input/input.ts) | 9 instances. Setup › DUT (DUT ID, Vertical Offset, Signal Validation Threshold), Setup › Preferences inline numeric inputs, Reports › View Settings. |
| Inline action button (teal pill) | [`tek-button`](../../../packages/ui/src/button/button.ts) | 22 instances across 16 distinct labels. The dominant inline-action style in the application. Existing primary variant of `tek-button` covers the visual exactly. |
| Modal / alert dialog | [`tek-modal`](../../../packages/ui/src/modal/modal.ts) | 1 instance (Reports › Configuration "Report file not generated" blocking alert). |

## Close matches

DS-v2 has something nearby but it's not a 1:1 fit. Extend the existing primitive or fork.

| Element (TekExpress) | Closest DS component | Gap |
|---|---|---|
| Side-nav vertical pill column (5 pills: Setup / Status / Results / Plots / Reports) | [`tek-selector`](../../../packages/ui/src/selector/selector.ts) | `tek-selector` is a single-select segmented control. Needs a *vertical-orientation* mode and an *active-page-with-routing-intent* affordance (different from "selected value"). Audit calls this 60 instances across all 11 base screens. |
| Tab bar (pill tabs at panel level — Status, Reports) | `tek-selector` (segmented control) or proposed `tek-tabs` | Same primitive question as the 2450-EC corpus raised. Active-tab + content-routing pattern. 10 instances. Worth deciding once: extend `tek-selector` to a "tab" mode, or introduce `tek-tabs` as a separate primitive. |
| Right-rail run-control buttons (Start / Pause / Stop / Clear) | `tek-button` (with icon + circular variants) | These are visually large circular buttons with icon-only content. `tek-button` is pill-shaped and label-driven today. Needs an *icon-only circular* variant + state vocabulary (Start ⇄ Stop swap on run). Could also use a new `tek-action-button` primitive — design conversation. |
| Outlined-pill button (non-teal — Debug, Preferences ▼) | `tek-button` (outlined variant) | Two instances only. `tek-button` already has a `secondary` variant per [`packages-ui-button.md`](../../../rag/sources/tek-design-system/code/2026-05-12-85a6857/packages-ui-button.md); whether secondary maps to "outlined non-teal" or whether we need an explicit third variant is a design call. |
| Icon-only button (Edit / Session / Logo / Window chrome) | `tek-button` (icon slot) | The DS button is label-driven; needs an icon slot or `icon-only` variant. 39 instances total (3 in-app inline + 36 window chrome). Window-chrome icons are likely out of scope (see below), but the inline 3 are real DS extension work. |
| Text area / scrollable read-only region (Test Description, Message History) | `tek-input` (textarea variant?) | `tek-input` is single-line. Needs a multi-line / textarea variant. 2 instances; small surface but heavily used (Message History during runs). |
| Toggle (visual: orange-ring radio, behaviour: on/off setting) | [`tek-toggle`](../../../packages/ui/src/toggle/toggle.ts) | The audit treats "checkbox" and "radio" as separate from "toggle." `tek-toggle` exists in the DS but the legacy app appears to use checkboxes for boolean settings rather than toggles. Probably **not a close match in either direction** — the redesign should *replace* legacy boolean checkboxes with `tek-toggle` where the semantic is on/off vs. multi-select. Flagged for design review rather than counted as a close-match for an existing-app element. |

## New (no DS match — proposed primitives)

Eleven distinct patterns DS-v2 does not currently address.

| Element (TekExpress) | Candidate primitive | Disposition |
|---|---|---|
| Wizard step indicator (numbered circles 1-4 with checkmark / current / pending states on an amber progress bar) | **`tek-wizard-stepper`** | `add to DS`. Multi-step setup wizards are common across Tek's compliance and calibration apps; TekRx (from the walkthrough) has a similar wizard-driven flow. Worth lifting into the DS. |
| Title bar with brand mark + session ID + unsaved indicator + Options menu + window chrome | **`tek-app-titlebar`** (probably out of scope) | The persistent application title bar is desktop-app chrome. For a Web Components DS the equivalent is "the page shell" — likely too tied to the host environment (Qt, WPF, Electron) to standardize. Recommend documenting the *content slots* a host should provide but not shipping a single web component. |
| Status bar (bottom edge: status text + progress fill) | **`tek-status-bar`** | `add to DS`. Persistent app-level status surface; reusable across every Tek app that runs long operations. |
| Status pill (Local / defbuffer1 / CONT-style with chevron) — from the 2450-EC corpus | **`tek-status-pill`** | Already proposed in the 2450-EC corpus snapshot. Reaffirmed here: TekExpress's "Ready." / "Running…" / "Completed" status indicators are pill-like read-only labels with state. Cross-product applicability. |
| Dropdown / select (button trigger that opens a menu) — `View`, `Device`, `Suite`, `Version`, `Save as type`, etc. | **`tek-dropdown`** (or `tek-select`) | Already proposed in 2450-EC. Reaffirmed: 12 dropdown instances in TekExpress confirms cross-product need. The Options ▼ title-bar menu is the same pattern at a different scale. |
| Data table (header row + multi-row, optional row selection, scrollable) — Results, Status › Test Status, Setup › Acquisitions, Limits Editor, Session browser, Probe Config | **`tek-data-table`** | `add to DS`. **Highest-frequency new pattern.** ≥6 distinct table instances across TekExpress, each with slightly different columns, sort/filter/select behaviour. Compliance and test-result UIs are inherently table-heavy. |
| Labelled group box (titled section container with bordered region) | **`tek-group-box`** or `tek-fieldset` | `add to DS`. 14 instances on base screens, plus more in dialogs. Every form-heavy Setup / Preferences screen is composed of group boxes. Could be a layout primitive or a styled `<fieldset>`. |
| Empty-state placeholder ("Plots Not Available" centered, no controls) | **`tek-empty-state`** | `add to DS`. Only 2 instances on Plots but the pattern recurs (a Results table before a run, a Log View before a run, etc.). A standard empty-state primitive normalises the experience. |
| Checkbox tree (hierarchical, expand/collapse, parent-implies-children-or-mixed) — Setup › Test Selection | **`tek-checkbox-tree`** | `add to DS`. One instance with 9 nodes (4 parents + 5 children), but a high-leverage primitive: any "pick which tests / which features / which line items" UI in Tek's compliance and configuration tools wants this. |
| Plot / chart (waveform, log charts, cursors, axis labels) — Plots, Results value displays | **`tek-plot`** + **`tek-axis`** | `add to DS`. **Highest-impact gap.** Already proposed in 2450-EC; explicitly blocked here by the open chart-library decision (see Recommended next steps). Plus the friction note from Rick Kuhlman: *"We go and sort of remake charts in the native place. And then what happens is we lose all the richness."* This is the single most visible UX cost in the legacy app. |
| Composite control (label + control + auxiliary glue, e.g. "DUT ID: [input] [pencil]" or "Session: [text] [...]") | **`tek-field`** | `add to DS`. Mahesha raises this in the transcript: *"We created some composite controls where we have a label and then a control and then some of the things glued together as one custom control."* Adopting a composite-field primitive in the DS would reduce per-screen layout burden enormously. |

## Out of scope (OS chrome / non-web)

| Element | Why out of scope |
|---|---|
| Window: mail icon | OS / app-chrome icon; for a Web Components DS this lives in the host window, not the component library. |
| Window: minimise | Same — OS window control. |
| Window: close | Same. |
| Title bar (session ID + unsaved asterisk + brand mark) | Host-window concern, not a component. Document the *content slots* a host needs to expose; don't ship as web component. |
| "Not Intended For Public Release" red notice | Build-mode flag; a runtime feature flag, not a component. |

## Cross-references to other corpus content

The corpus chunks that drove this audit:

- **Screen surface inventory:** all 18 chunks under [`rag/sources/tek-express/screens/`](../../../rag/sources/tek-express/screens/) — every documented control across the 11 base screens + 5 dialogs + 1 minimised-window state. Each chunk's `controls[]` frontmatter is the structured element list this audit walked.
- **Audit PDF inventory (the legacy audit):** [`rag/sources/tek-express/docs/ui-audit/_index.md`](../../../rag/sources/tek-express/docs/ui-audit/_index.md) — the May 2026 UX Audit's own count of 43 distinct types / 292 instances across 7 categories provides instance counts referenced above.
- **Transcript friction notes:** [`rag/sources/tek-express/walkthroughs/ux-feedback-and-open-questions.md`](../../../rag/sources/tek-express/walkthroughs/ux-feedback-and-open-questions.md) — Kuhlman's chart-library complaint, Mahesha's composite-control note, Bryan's container-breakpoints commitment.
- **Existing DS code surface:** [`packages/ui/src/index.ts`](../../../packages/ui/src/index.ts) — confirms the 12 exported components (TekButton, TekCheckbox, TekRadio, TekToggle, TekSelectorLabel, TekSelector, TekInput, TekLabel, TekTextLink, TekCharacterCount, TekModal, TekFooter) and the shared TekBaseSelector base class.
- **Prior new-primitive proposals:** [`audits/prototype/2026-05-12-2450-ec-corpus-snapshot/report.md`](../../2026-05-12-2450-ec-corpus-snapshot/report.md) — the 2450-EC redesign-baseline audit proposed `tek-readout`, `tek-status-pill`, `tek-dropdown`, `tek-numeric-tile`, `tek-tabs`, `tek-axis`, `tek-plot`. This audit reaffirms four of those (`tek-status-pill`, `tek-dropdown`, `tek-axis`, `tek-plot`) and adds seven more (`tek-wizard-stepper`, `tek-data-table`, `tek-group-box`, `tek-empty-state`, `tek-checkbox-tree`, `tek-field`, plus a `tek-status-bar` distinct from the pill).

## Recommended next steps

Priority order. P0 items block redesign work directly.

### P0 — Architectural decisions

1. **Pick a charting library.** Rick Kuhlman's friction note ("we lose all the richness") and the recurring chart presence on Plots + Results + Status make this the single biggest gap. Open question: should `tek-plot` wrap an existing library (Chart.js, ECharts, Plotly, Apache Superset's charts, a Tek-internal wrapper)? Without a library pick, `tek-plot` and `tek-axis` cannot be specified, and the Plots screen redesign is blocked.
2. **Decide `tek-tabs` vs. extending `tek-selector`.** Three corpus subjects now flag this (2450-EC, dev-core-portal needs, tek-express). One decision unblocks tab navigation across all of them.

### P1 — New primitives (in order of cross-product leverage)

1. **`tek-data-table`** — ≥6 instances in TekExpress alone; every compliance / test-result app wants this. Highest unique-instance count of any proposed primitive.
2. **`tek-wizard-stepper`** — TekExpress 4-step Setup, TekRx wizard-driven calibration, future compliance apps.
3. **`tek-group-box`** / **`tek-fieldset`** — 14+ instances in TekExpress; every form-heavy app needs this.
4. **`tek-field`** (composite label + control + glue) — Mahesha's explicit ask; reduces per-screen layout burden.
5. **`tek-status-pill`** + **`tek-status-bar`** — reaffirmed from 2450-EC; both Tek-instrument and Tek-app surfaces need them.
6. **`tek-checkbox-tree`** — one instance in TekExpress but high-value for any "pick from many" pattern.
7. **`tek-empty-state`** — small footprint but high pattern-consistency win.

### P2 — Close-match extensions

1. Extend **`tek-selector`** with a vertical-orientation mode (covers the 5-pill side nav).
2. Extend **`tek-button`** with an `icon-only circular` variant + state vocabulary for Start ⇄ Stop swap.
3. Extend **`tek-input`** with a multi-line / textarea variant (covers Test Description and Message History).
4. Add an icon slot to **`tek-button`** (covers the 3 inline icon-button instances).
5. Confirm or extend the outlined `secondary` variant of **`tek-button`** to cover the 2 outlined non-teal pill instances.

### P3 — Open / discuss

1. The audit-PDF tab/content swap on the Reports panel — verify on a live build whether the discrepancy is an audit-author error or a real refactor between the audit and the screenshots. Affects which corpus chunk's content is authoritative.
2. Half-screen / docked-window mode (Rick Kuhlman) — UX validation work, not DS work.
3. Mermaid diagrams as a standard authoring kit (Richard Patterson + Bryan Kemp) — a Figma-component-based diagram builder is the floated approach; out of scope for this audit.

## Disposability

This snapshot represents the DS-v2 gap as of 2026-06-01. **Regenerate when:**

- DS-v2 ships any of the proposed primitives (run the audit again to count the gap closing).
- The TekExpress corpus gets new content (additional dialogs, missing screen captures, TekRx as its own subject).
- The redesign moves into the implementation phase and CC needs a fresh baseline.

Old snapshots stay in `audits/prototype/` for historical comparison ("how big was the gap in June 2026 vs. December 2026?"). Don't overwrite this folder.
