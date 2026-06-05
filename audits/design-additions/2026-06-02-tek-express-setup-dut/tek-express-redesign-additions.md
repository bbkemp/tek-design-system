# TekExpress redesign — DS-v2 additions audit

**Screen:** Setup › DUT (format-lock screen) · **Date:** 2026-06-01 · **Author:** cd (Claude Design)
**Prototype:** `tek-express-setup-dut.html` · **DS version audited:** DS-v2 (key `3wbYstse9TYKlPtCPpZH5X`)
**Destination on sign-off:** `audits/design-additions/2026-06-01-tek-express-setup-dut/`

This file documents every style, token, container breakpoint, and component introduced in the prototype that is **not** in shipping DS-v2. The 11 pre-reserved primitive names from the DS-baseline brief are used directly where applicable; no parallel names were invented. Confidence flags: **✓** = high-confidence drop-in · **⚠** = needs DS-team review before adoption.

> **Implementation note for the DS team.** In the prototype the new components render into **light DOM** (one injected, class-scoped stylesheet, internal classes prefixed `tkx-`). This was a deliberate prototype-fidelity choice so the screen stays screenshot- and export-faithful (html-to-image / PPTX capture cannot paint shadow-DOM internals) and to sidestep the shadow-cascade reset gotcha. **When productionised these ship as shadow-DOM Web Components exactly like the rest of `@bbkemp/ui`** — the anatomy, variants, states, slots and events below are written as the shadow-DOM spec and are unchanged by the prototype's rendering strategy. The shipping `@bbkemp/ui` primitives (`tek-input`, `tek-radio`, `tek-toggle`, `tek-selector`, `tek-button`, `tek-modal`, `tek-text-link`) are consumed **as-is** from the real built `ds/tek-ui.js`.

---

## 1. Tokens

### 1.1 Semantic UI-state aliases — `--tek-color-success` / `--tek-color-warning` / `--tek-color-error`  ✓

- **Justification.** DS-v2 ships the UI-state colours only as **primitives** (`--tek-colors-ui-success-green`, `--tek-colors-ui-warning-yellow`, `--tek-colors-ui-error-red`). Components are supposed to reference *semantic* tokens, but there is no semantic layer for state colour today, so the wizard "completed" state, the status pills, and the build-flag notice would have had to inline a primitive. These aliases close that gap.
- **Proposed shape.**
  | Token | Dark | Light |
  |---|---|---|
  | `--tek-color-success` | `#42b54c` | `#42b54c` |
  | `--tek-color-warning` | `#e0b732` | `#e0b732` |
  | `--tek-color-error` | `#e74848` | `#e74848` |
  Same value in both themes — the UI-state primitives are theme-invariant. (Both mid-tones clear 3:1 against the dark canvas *and* the light `#cccccc` canvas; verify AA for any future text-on-fill usage.)
- **Closest existing primitive.** Direct semantic aliases of `--tek-colors-ui-*`.

### 1.2 Pressed brand/success shades — `--tek-colors-brand-tek-blue-pressed`, `--tek-colors-ui-success-green-pressed`  ⚠

- **Justification.** The solid primary button and the success "Start Test" button (§3.1) need a darker hover/press fill. DS-v2 has no pressed/active step for any colour (the guide explicitly notes "press state: not tokenized"). These are the first press-state primitives.
- **Proposed shape.** `--tek-colors-brand-tek-blue-pressed: #1ea3d4` (tek-blue darkened ~12%); `--tek-colors-ui-success-green-pressed: #379a40`. Theme-invariant primitives.
- **Closest existing primitive.** Darkened forms of `--tek-colors-brand-tek-blue` / `--tek-colors-ui-success-green`.
- **Flag.** ⚠ The DS team owns the press-state decision globally (it affects every interactive surface, not just buttons). Values are a proposal.

### 1.3 Chrome surface — `--tek-color-surface-chrome`  ✓

- **Justification.** A desktop app needs a third surface tier: **canvas** (`--tek-color-canvas-background-default`) for the work area, **surface** (`#252525` / `#fff`) for inputs/cards, and a **chrome** tier for the top nav, wizard rail, section cards, and status bar so they read as application chrome distinct from the canvas. DS-v2 has canvas + surface only. (Prototyped as `--app-chrome-bg`.)
- **Proposed shape.** Dark `#181818` (neutral-900, one step darker than the `#1e1e1e` canvas); Light `#ffffff` (neutral-white, one step lighter than the `#cccccc` canvas).
- **Closest existing primitive.** Sits between `--tek-color-canvas-background-default` and the surface-700 fill.

### 1.4 Single-shadow alias — `--shadow-modal`  ✓

- **Justification.** The DS has exactly one shadow (`0px 2px 6px 0px rgba(0,0,0,0.2)`), used on the modal. The dropdown menu and any future popover need it too, but it is not exposed as a token (only described in prose / `colors_and_type.css`). Promote it to a real token.
- **Proposed shape.** `--tek-shadow-modal: 0px 2px 6px 0px rgba(0,0,0,0.2)` (theme-invariant). Use for modal + every elevated popover (dropdown, menu).
- **Closest existing primitive.** Formalises the existing single shadow.

### 1.5 Container-breakpoint tokens — `--tek-container-breakpoint-{sm,md,lg}`  ⚠

- **Justification.** Bryan's 2026-04-23 commitment: responsiveness is on the **container** level, not the viewport. DS-v2 has no container-breakpoint tokens. This screen defines and *uses* them live (see `tek-express-setup-dut-notes.md` §2 for the rationale and the per-region reflow rules).
- **Proposed shape.**
  | Token | Value | Range name | This screen's transform |
  |---|---|---|---|
  | (implicit floor) | `< 600px` | `cb-xs` | single column; nav → icons-only; wordmark hidden; actions stack full-width |
  | `--tek-container-breakpoint-sm` | `600px` | `cb-sm` | wizard rail moves above content and goes **horizontal**; form stays ≤2-col |
  | `--tek-container-breakpoint-md` | `760px` | `cb-md` | two-column work area (184px vertical rail + panel); the 875px window sits here |
  | `--tek-container-breakpoint-lg` | `820px` | `cb-lg` | probe-row goes 3-up (subhead + Clock + DQS on one line) |
- **Calibration note.** Values were re-tuned for the **875×773 production window** (the real TekExpress content area). The rail is 184px and the dense two-column form needs ~700px, so the stack threshold sits at 760px rather than the earlier 900px. The prototype wraps the screen in a resizable 875×773 frame; dragging its handle fires these live.
- **Implementation.** CSS `@container` queries on a single `container-type: inline-size` ancestor (`.app`, `container-name: app`). **Caveat:** `@container` conditions cannot read custom properties, so the px are duplicated literally in the query rules and kept in sync with these token names by comment. The DS should ship a documented mapping + lint rule.
- **Flag.** ⚠ Values are a first proposal calibrated to this screen's density (see Notes §2 for confidence per breakpoint). The DS team should validate against 2–3 more screens before locking the scale.

---

## 2. Type / style

No net-new **type styles** were required — all text binds to existing `--tek-fonts-*` tokens (headings = Archivo wdth 120 / 600; body = Geist; mono/units/eyebrows = Geist Mono). Two **usage conventions** are introduced and should be captured as DS guidance:

- **Tab-bar label** — Geist `text-xl` (16/24), active weight 500, colour shifts `input-text-default → modal-text-default`, 2px tek-blue bottom border on active. (Used by `tek-tabs`, §3.2.)
- **Inline-Setup field convention** — a label-or-field paired with a right-adjacent secondary action button, 12px gap, used wherever a field opens a sub-configuration. (Folded into `tek-field`, §3.4.) ✓

---

## 3. Components

### 3.1 `tek-button` — `solid` + `success` emphasis variants  ⚠

- **Gap it fills.** Shipping `tek-button` has `variant="primary|secondary"` but **both are the same bordered-dark treatment** (dark bg + tek-blue 1px border). The wireframe's action cluster needs a **filled** primary (`Start Test`, `Next`). No filled button exists today.
- **Proposed shape.** One new emphasis token-set consumed by the existing component (no new element):
  - `solid`: bg `--tek-colors-brand-tek-blue`, text `--tek-colors-neutral-900`, hover bg `--tek-colors-brand-tek-blue-pressed` + text white.
  - Keeps `radius-full`, 1px border (border = fill), and the existing inactive/disabled treatment. Applied at the **`secondary` geometry** (compact 6/14 padding) so it sits uniformly with the rest of the action cluster.
- **Stakeholder note (Bryan, 2026-06-03).** `Start Test` is the single **filled blue** primary in the action cluster (the corpus "green Start" was overridden to blue for DS consistency); `Pause Test`, `Back`, `Next` are bordered `secondary`. All four use the compact `secondary` size. A separate `success` tone was prototyped earlier but is **not used on this screen** after this change.
- **Prototype mechanism.** Implemented purely by **rebinding the existing `--tek-color-button-*` tokens** on `.btn-solid` / `.btn-success` instances — the canonical `tek-button` component is untouched. This is the recommended productionisation too (add `emphasis="solid|success"` that swaps the token group internally).
- **Closest existing primitive.** Extends `tek-button`.
- **Flag.** ⚠ Introduces a button hierarchy the DS deliberately omitted. Confirm the DS wants filled buttons at all (vs. keeping the restrained bordered-only system and signalling primary by position).

### 3.2 `tek-tabs` / `tek-tab` — primary navigation (vertical side-nav + horizontal/sub-tab modes)  ✓

- **Gap it fills.** The app's primary navigation. After the 2026-06-04 revert this runs as the **legacy vertical left side-nav** (Setup · Status · Results · Plots · Reports), each icon + label, content-routing. The same primitive also serves the horizontal/sub-tab modes elsewhere (Status, Reports, Configure dialog).
- **Decision: NEW primitive, not an extension of `tek-selector`.** `tek-selector` is a *value picker* (one-of-N form state, emits `tek-change` with a boolean/value). Navigation is a different semantic: a single active view, content routing, roving keyboard focus (arrow keys, both axes), leading icons, and `role="tablist"/"tab"`. Conflating them would overload `tek-selector` with routing concerns. Matches the 2450-EC audit's `tek-tabs` candidate.
- **Anatomy.** `tek-tabs` (`role=tablist`, roving arrow-key focus) › `tek-tab` (`role=tab`, leading icon + label). `orientation="vertical"` → full-width stacked items with a **left-accent** active indicator (legacy pill column); default horizontal → bottom-border indicator.
- **States.** default · hover (bg/text brightens) · active (tek-blue accent + subtle tint, brighter text, weight 500) · focus-visible (2px tek-blue ring) · disabled. (Legacy active was orange; remapped to tek-blue — the DS has no orange.)
- **Events.** `tek-nav` (bubbles, `detail.value`).
- **Closest existing primitive.** Conceptually adjacent to `tek-selector` (segmented), but distinct.

### 3.3 `tek-wizard-stepper` / `tek-step` — P1 step indicator  ✓

- **Gap it fills.** The 5-step Setup wizard (DUT · Test Selection · Acquisitions · **Configuration** · Preferences). Top P1 primitive in the brief.
- **Anatomy.** Circular 28px badges on a connecting guide line; label beside (vertical) or below (horizontal) each badge. `orientation="vertical|horizontal"`.
- **State vocabulary** (maps the legacy state language onto DS-v2 semantics):
  | State | Badge | Guide | Label | Legacy source |
  |---|---|---|---|---|
  | **pending** | outline neutral-400, number | neutral-500 | input-text-default | legacy "not visited" |
  | **current** | **filled tek-blue**, white number, weight 600 | — | white, weight 500 | legacy orange "current" → remapped to brand accent (DS has no orange) |
  | **completed** | tek-blue→**success-green** outline + check | success-green | input-text-filled | legacy green checkmark |
  | hover (jumpable) | 4px tek-blue glow | — | brightens | — |
  | focus-visible | 2px tek-blue ring | — | — | — |
  | disabled (pending) | non-interactive, `aria-disabled` | — | — | fresh-install: steps 2-5 locked |
- **Behaviour.** Completed + current steps are **tap-to-jump** (emit `tek-step-select`, `detail.index`); pending steps are inert. `setActive(i)` method recomputes states. **Tap-to-jump on completed steps is an assumption — flagged in Notes §3.**
- **Closest existing primitive.** None. Net-new.

### 3.4 `tek-field` — label + control composite (+ inline action)  ✓

- **Gap it fills.** Mahesha's "label + control glued together" composite (2026-04-23) — DS-v2 has no labelled-input composite; every screen composes label-with-input ad hoc. Also absorbs the recurring **inline-Setup** micro-pattern (a field with a right-adjacent sub-configuration button).
- **Anatomy / slots.** `label` attr (top, or beside in inline layout) · default slot = the control (any `tek-input` / `tek-dropdown` / etc.) · `unit` attr = mono suffix after the control (e.g. `MT/s`) · `action` slot = inline button(s).
- **Variants.** `layout="stacked"` (default, label above) · `layout="inline"` (label beside an action button only — e.g. Voltage Settings, TriMode Probe Setup).
- **Closest existing primitive.** New layout primitive; wraps existing controls.

### 3.5 `tek-dropdown` — tap-to-open select menu  ✓ (reserved name)

- **Gap it fills.** Every dropdown on the screen (Device, Data Rate, Burst Detection, Clock, DQS, Filter Files Path). DS-v2 has no select/picker primitive. Same `tek-dropdown` candidate as the 2450-EC audit.
- **Anatomy.** Closed control mirrors `tek-input` tokens (surface bg, 0.5px border, radius-03, rotating chevron) › popup `listbox` (`--tek-shadow-modal`, selected-row tick in tek-blue).
- **States.** default · hover (border → filled) · open (border → focus-white) · focus-visible (2px tek-blue ring) · disabled. Reads `<option>` children for items; `value` attr; emits `tek-change` (`detail.value`).
- **Keyboard.** Enter/Space/↓ open · ↑/↓ move · Enter select · Esc close (returns focus to control).
- **Closest existing primitive.** None shipped; could be composed from `tek-button` + a menu, but common enough to warrant its own primitive (per 2450-EC audit).

### 3.6 `tek-status-bar` — persistent bottom status + progress  ✓ (reserved name)

- **Gap it fills.** The persistent desktop status bar (legacy "Ready." + idle progress). DS-v2 has `tek-footer` (theme toggle + copyright) but that is a web-page footer, not an app status bar.
- **Anatomy / slots.** 36px bar, chrome surface, top hairline border. `left` slot (build-flag pill) · `status` attr (mono status text) · progress track (`running` attr → indeterminate animation; `progress="0–100"` → determinate success-green fill) · `right` slot (run-state pill).
- **Closest existing primitive.** Sibling of `tek-footer`; shares its 36px height + chrome treatment.

### 3.7 `tek-status-pill` — label + state dot, optional tappable  ✓ (reserved name)

- **Gap it fills.** The "Unsaved changes" indicator, the "Not Intended For Public Release" build flag, and the Idle/Running/Paused run-state readout. Same `tek-status-pill` candidate as the 2450-EC audit.
- **Anatomy.** Pill (radius-full, 0.5px border in tone colour, mono label, optional 7px state dot). `tone="neutral|info|success|warning|error"`; `dot="off"` to hide the dot.
- **Closest existing primitive.** None.

### 3.8 `tek-empty-state` — placeholder for out-of-scope / unbuilt content  ✓ (reserved name)

- **Gap it fills.** (1) The not-yet-locked wizard steps and nav panels (screen-by-screen rollout); (2) the **canonical chart placeholder** for `tek-plot` until the charting-library decision lands (Rick Kuhlman's chart-richness friction note). Out-of-scope charts on later screens should use this, per the brief.
- **Anatomy.** Dashed-border panel, centered icon + title + note, on chrome surface. `icon` / `title` / `note` attrs + default slot for actions.
- **Closest existing primitive.** None.

### 3.9 `tek-icon` — icon component (Lucide substitution)  ⚠

- **Gap it fills.** DS-v2 has **no icon set** (only the inline checkbox checkmark). This screen needs nav icons, chevrons, edit/play/pause/stop/check/sliders. Per the DS guide, Lucide at stroke-width 1.5 is the sanctioned stand-in.
- **Proposed shape.** Ship a `tek-icon` web component + a tokenised set; icons inherit `currentColor`, default 1.5 stroke. Prototype inlines Lucide-style paths via a small `tekIcon(name, size)` helper.
- **Flag.** ⚠ Icon substitution must be verified with the DS team (per the guide's flagged substitution). The specific glyphs chosen for Setup/Status/Results/Reports are placeholders pending a real Tek icon set.

### 3.10 `tek-group-box` — labelled section container  ✓ (reserved name)

- **Gap it fills.** The legacy "Device Profile / Device Characteristics / Execution Settings" group boxes and the wireframe's "Device Profile / Signal Probe Type" sections. DS-v2 has no fieldset/section primitive (cards are rare and mostly `tek-modal`).
- **Decision.** Implemented as a styled **`fieldset` + `legend`** (semantically correct grouping for a form region), following the DS card spec: chrome surface, 0.5px neutral border, radius-05, 32px padding; legend in Archivo wdth-120 / 600. This is the reserved `tek-group-box` name — no `tek-fieldset` parallel was invented.
- **Anatomy / slots.** `label` attr → legend · default slot → grouped fields (typically a `.grid-2` of `tek-field`s + sub-section headings + dividers).
- **Closest existing primitive.** Closest to the DS "card" pattern (flat surface, 0.5px border, radius-05, no shadow); formalised as a labelled fieldset.

---

## 4. Summary table

| Addition | Type | Confidence | Closest existing |
|---|---|---|---|
| `--tek-color-success/warning/error` | token (semantic) | ✓ | `--tek-colors-ui-*` primitives |
| `--tek-colors-brand-tek-blue-pressed`, `…success-green-pressed` | token (primitive) | ⚠ | brand/success primitives |
| `--tek-color-surface-chrome` | token (semantic) | ✓ | canvas / surface tiers |
| `--tek-shadow-modal` | token | ✓ | existing single shadow |
| `--tek-container-breakpoint-{sm,md,lg}` | token | ⚠ | none |
| `tek-button` `solid`/`success` emphasis | component variant | ⚠ | `tek-button` |
| `tek-tabs` / `tek-tab` | component | ✓ | `tek-selector` (distinct) |
| `tek-wizard-stepper` / `tek-step` | component (P1) | ✓ | none |
| `tek-field` | component | ✓ | composes existing controls |
| `tek-dropdown` | component | ✓ | none (per 2450-EC) |
| `tek-status-bar` | component | ✓ | `tek-footer` (sibling) |
| `tek-status-pill` | component | ✓ | none (per 2450-EC) |
| `tek-empty-state` | component | ✓ | none |
| `tek-group-box` | component | ✓ | DS "card" pattern |
| `tek-data-table` | component | ✓ | none (per 2450-EC reserved) |
| `tek-checkbox-tree` | component | ✓ | none (per 2450-EC reserved) |
| `tek-icon` (Lucide) | component | ⚠ | none |

### 3.11 `tek-data-table` · 3.12 `tek-checkbox-tree` — reserved primitives (now in use)

The multi-screen build exercises two more reserved P1 primitives:

- **`tek-data-table`** — property-driven styled table (`el.data = {columns, rows, selectable, selectedIndex}`; cells accept HTML for status pills / icon buttons). Used by Acquisitions, Status, Results, Probe Config, Limits Editor, and the Session browser. Anatomy: chrome-surface container, 0.5px borders, mono/ellipsis cell helpers, optional row-select. **✓**
- **`tek-checkbox-tree`** — hierarchical parent/child checkbox tree with expand/collapse + focus≠check (`el.data = [{id,label,expanded,checked,children}]`; emits `tek-tree-change`, `tek-tree-focus`). Used by Test Selection. **✓**

### Additional patterns introduced (document for DS)
- **Sub-tab bar** (`.subtabs`/`.subtab`) — pill-style inner tabs for Status (Test Status / Log View), Reports (Configuration / View Settings), and the Configure dialog (Global/Measurements, Acquire/Analyze). Distinct from the top-nav `tek-tabs`; candidate for a `tek-tabs` `size="sm"`/`variant="pill"` mode. ⚠
- **Outlined (non-teal) pill button** (`.pill-outline`) — corpus identifies Results' `Debug` / `Preferences ▾` as the only outlined buttons in the app; rendered as a distinct subtle variant. ⚠
- **Light-DOM checkbox/radio stand-ins** — on the app-built screens, checkboxes/radios render as light-DOM controls (matching `tek-checkbox`/`tek-radio` visuals: radius-02 box, tek-blue check/dot) for screenshot/export fidelity. In production these are the shadow-DOM `tek-checkbox`/`tek-radio`; the DUT screen still uses the real `tek-selector`. ✓
- **Generic dialog shell** (`.dialog`) + **minimised run window** (`.run-win`) — overlay surfaces for the corpus dialogs and the Running-Test compact window. Candidate `tek-dialog`. ⚠

**Reserved primitive names still NOT used** (no occasion arose on these screens): `tek-axis` — realized as `tek-plot`'s internal config-driven axis renderer (ticks + labels + frame); split into a standalone `tek-axis` element if a non-plot axis use arises.

### 3.13 `tek-plot` — scope-style waveform plot (now built)

Plotting moved **into scope** at stakeholder request (2026-06-03). `tek-plot` is a property-driven SVG chart: `el.data = { xAxis, yAxis, series:[{color,points}], cursors:[x…], readout:[…], title }`. Renders grid, tick-labelled axes (the `tek-axis` treatment), waveform traces, vertical measurement cursors with tags, and the cursor-readout box. Used by the **Plots** sub-tab under Results (corpus `plots.md`): the DPOJET period waveform with axes Amplitude (V) / Time (sec), cursors collocated (ΔX = ΔY = 0), readout verbatim. New token proposed: `--tek-color-plot-trace-1` (scope-channel yellow `#e8c500`) — a data-viz color outside the restrained UI palette; ⚠ DS-team review. **✓ component / ⚠ trace token.**
