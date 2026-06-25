# DS-v2 component additions — Tek Express rr variant

**Date:** 2026-06-09
**Owner:** Bryan Kemp
**Status:** Draft for design system team review
**Triggered by:** Tek Express AppEmulator redesign (right-rail variant) — see [`cd-prompt.v2.md`](../2026-06-08-tek-express-v4-prompt/cd-prompt.v2.md)
**Related:**
- Tek Express setup-dut redesign additions ([`tek-express-redesign-additions.md`](../2026-06-02-tek-express-setup-dut/tek-express-redesign-additions.md)) — original CD-proposed component list
- Redesign baseline DS-mapping audit ([`audits/prototype/2026-06-01-tek-express-redesign-baseline/report.md`](../../prototype/2026-06-01-tek-express-redesign-baseline/report.md))
- Corpus: [`corpus/sources/tek-express/`](../../../corpus/sources/tek-express/) — every screen + walkthrough + ui-audit chunk

---

## TL;DR

Seven new components needed to ship the Tek Express rr-variant redesign. Each spec'd below with anatomy, variants, states, tokens used, and tokens needed (new semantic aliases). **No new primitive tokens are strictly required** — DS-v2's `🏹 spacing/sNN`, `📐 borders/radius/NN`, `📐 borders/width/NN`, and full color primitive set already cover every value. **The work is at the semantic layer.**

**Components to add:**

| # | Component | Status | Complexity | Blocks |
|---|---|---|---|---|
| 1 | `tek-group-box` | Net-new | Low | tek-form-layouts |
| 2 | `tek-data-table` | Net-new | High | results / status / acquisitions screens |
| 3 | `tek-tabs` | Net-new | Medium | navigation / sub-tab patterns app-wide |
| 4 | `tek-status-bar` | Net-new | Low | app-shell |
| 5 | `tek-progress` | Net-new | Low | running-test / minimized window |
| 6 | `tek-navigation-panel` | Net-new | Medium | app-shell |
| 7 | `tek-spinner` | Net-new (optional this round) | Low | running-test / async overlays |

**New semantic color tokens needed:** 47 across the seven components (consolidated in §9).

**New primitive tokens needed:** None for v1; one candidate `🌑 shadow/modal` effect token (Email Settings dialog already uses it) — separate from this scope but flagged.

**Recommended implementation order:** §3 (tek-tabs) and §4 (tek-status-bar) first — both unblock app-shell work. Then §1 (tek-group-box), §6 (tek-navigation-panel). Then §2 (tek-data-table) and §5 (tek-progress). §7 (tek-spinner) last / optional.

---

## 1. `tek-group-box`

> Titled bordered container for grouping related form controls.

Used 8× in the Tek Express corpus (Preferences × 3, Email Settings × 1, Reports × 2, Configuration form × 1, Comments modal × 1). Composition pattern, not just visual styling — needs to slot child content.

### Anatomy

```html
<tek-group-box title="Execution Options">
  <!-- slotted content: checkboxes, radios, fields -->
</tek-group-box>
```

```
┌── Execution Options ────────────────────────┐  ← legend (Archivo SemiBold)
│                                              │
│  ☑ Highlight yellow warning…                │  ← slotted content
│  ☑ Acquire/Analyze each test…               │
│  ☐ Show alert when new deskew…              │
│  ☐ Enable Logging                            │
│                                              │
└──────────────────────────────────────────────┘
  ↑ raised bg · 0.5px border · 11px radius · 14px padding
```

### Variants

| `variant` attr | Use |
|---|---|
| `default` (default) | Bordered titled container |
| `error` | Same shape; border + legend shift to error color (form-section validation) |

### States

| State | Application |
|---|---|
| `default` | All content interactive |
| `disabled` | Legend muted; child controls disabled; section appears inactive |

### Tokens used (existing DS-v2)

| Property | Token |
|---|---|
| Background | `color/canvas/background/raised` |
| Border | `color/input/border/default` |
| Border width | `📐 borders/width/01` (0.5px) |
| Border radius | `📐 borders/radius/05` (11px) |
| Padding | `🏹 spacing/s09` (16px) on all sides |
| Inner gap (between rows) | `🏹 spacing/s06` (10px) |
| Legend type | `text/heading/regular/xs` (Archivo SemiBold 16/24, -2% tracking) |
| Legend color | `color/modal/text/default` (white) |

### Tokens needed (new semantic aliases)

These can MOSTLY reuse existing primitives but are worth naming semantically so future changes propagate cleanly:

| New semantic | Light alias → | Dark alias → | Notes |
|---|---|---|---|
| `color/groupbox/background` | `color/canvas/background/raised` | `color/canvas/background/raised` | Lets the GroupBox bg track surface tier independent of canvas |
| `color/groupbox/border/default` | `color/input/border/default` | `color/input/border/default` | |
| `color/groupbox/border/error` | `colors/status/error` | `colors/status/error` | For form-section validation |
| `color/groupbox/legend/text` | `color/modal/text/default` | `color/modal/text/default` | |

### API surface

```ts
interface TekGroupBoxAttributes {
  title: string;             // shown in legend
  variant?: "default" | "error";
  disabled?: boolean;
}
```

### Notes

- The legend's typography is the only typographic deviation from body text in a form section, so it doubles as a structural cue. Don't make the legend optional — always titled.
- Title casing: per corpus, all legends use Title Case ("Execution Options", "Report Update Mode", "User logo").

---

## 2. `tek-data-table`

> Header + body data grid with fixed column widths, row dividers, status-pill cells, and per-row action cells.

The most complex component on the list. Used 4× in Tek Express alone (Acquisitions, Status, Results, Reports), and also flagged in the walkthrough as **"the grid is extensively being used and heavily used"** (Hemant Pardeshi, 37:08).

### Anatomy

```html
<tek-data-table>
  <tek-data-table-head>
    <tek-data-table-row>
      <tek-data-table-cell>Test Name</tek-data-table-cell>
      <tek-data-table-cell>Acquisition</tek-data-table-cell>
      <!-- … -->
    </tek-data-table-row>
  </tek-data-table-head>
  <tek-data-table-body>
    <tek-data-table-row>
      <tek-data-table-cell>Algorithm Library Measurement</tek-data-table-cell>
      <tek-data-table-cell>
        <tek-status-pill tone="info">To be started</tek-status-pill>
      </tek-data-table-cell>
    </tek-data-table-row>
  </tek-data-table-body>
</tek-data-table>
```

### Variants

| `variant` attr | Use | Examples in corpus |
|---|---|---|
| `readonly` (default) | Display-only data | Status, Results, Reports |
| `selectable` | First column = checkbox; rows can be selected | Test Selection's flat-grid mode |
| `editable` | Cells can be edited inline | Acquisitions (waveform file picker) |

### States — row

| State | Visual |
|---|---|
| `default` | Background = row tier |
| `hover` | Background shifts one tier brighter |
| `selected` | Background = selection-bg; border-left = Tek-Blue 3px |
| `disabled` | Text muted; background unchanged |
| `error` | Background tinted error/error-bg (failed test row) |
| `success` | Background tinted success/success-bg (passing row) |

### States — cell

| State | Visual |
|---|---|
| `default` | Plain text |
| `with-status-pill` | Cell holds a tek-status-pill |
| `with-action` | Cell holds an icon-button (folder/picker icon, pencil) |
| `truncated` | Text exceeds column width → truncate with ellipsis; show full text on hover via tooltip |

### Columns

Column widths are **fixed**, not auto. Authors specify the width per column via CSS custom properties or attributes:

```html
<tek-data-table style="--col-1: 2fr; --col-2: 1fr; --col-3: 1.5fr; --col-4: 0.6fr;">
  …
</tek-data-table>
```

Or via per-column attributes (TBD — design decision).

### Tokens used (existing DS-v2)

| Property | Token |
|---|---|
| Container border | `color/input/border/default` |
| Container border width | `📐 borders/width/01` (0.5px) |
| Container radius | `📐 borders/radius/05` (11px) |
| Container clipsContent | true (so rounded corners clip the rows) |
| Header padding | `🏹 spacing/s06` vertical, `🏹 spacing/s07` horizontal |
| Body row padding | `🏹 spacing/s07` vertical, `🏹 spacing/s07` horizontal |
| Inter-row divider | `color/input/border/default` at `📐 borders/width/01` |
| Header type | `text/regular/xs` (12/16 medium) |
| Body type | `text/regular/md` (14/20) |

### Tokens needed (new semantic aliases)

| New semantic | Notes |
|---|---|
| `color/table/header/background` | `color/input/background/default` initially; named so it can decouple |
| `color/table/header/text` | `color/modal/text/default` (white headers) |
| `color/table/row/background-default` | `color/canvas/background/raised` |
| `color/table/row/background-alt` | one tier darker — for striped tables (TBD whether we ship striped) |
| `color/table/row/background-hover` | `color/canvas/background/default` lightened ~6% |
| `color/table/row/background-selected` | Tek-Blue at 12% over canvas |
| `color/table/row/background-error` | `colors/status/error` at 10% |
| `color/table/row/background-success` | `colors/status/success` at 10% |
| `color/table/row/border-selected` | `colors/brand/tek-blue` (left 3px accent) |
| `color/table/divider` | `color/input/border/default` |
| `color/table/text/default` | `color/modal/text/default` |
| `color/table/text/muted` | `color/input/text/default` (for "—" placeholders) |

### API surface

```ts
interface TekDataTableAttributes {
  variant?: "readonly" | "selectable" | "editable";
  ariaLabel: string;
}

interface TekDataTableRowAttributes {
  selected?: boolean;
  state?: "default" | "disabled" | "error" | "success";
}

interface TekDataTableCellAttributes {
  align?: "start" | "center" | "end";
}
```

Events: `row-select`, `cell-edit`, `cell-action`.

### Notes

- Fixed column widths are **not negotiable per the corpus** — Pranavi's demo at 17:30 shows users relying on column position to scan results quickly. Auto-sizing would break muscle memory.
- The "select all" header checkbox is a sister pattern — owned by `tek-checkbox` inside the header cell, not a table property.
- For 50+ rows, virtualization is needed. **Decision deferred** — call out in additions notes; v1 ships unvirtualized for the Tek Express scope (worst case: ~30 rows).
- The walkthrough flags the editable grid as the most common edge case (Hemant 37:08). Plan for it in v2; v1 ships `readonly` only.

---

## 3. `tek-tabs`

> Tab control with two structurally-distinct variants: horizontal (pill-group, used as sub-tabs) and vertical (left-accent, used as app navigation).

The most-used new pattern. Sub-tabs appear in Status (Test Status / Log View), Reports (Configuration / View Settings), Configuration (Global Settings / Measurements; Acquire / Analyze nested). The vertical variant is the entire left-side application navigation.

### Anatomy

#### Horizontal (sub-tab pill-group)

```html
<tek-tabs orientation="horizontal" variant="pill">
  <tek-tab value="config" active>Configuration</tek-tab>
  <tek-tab value="view-settings">View Settings</tek-tab>
</tek-tabs>
```

```
┌──────────────────────┬──────────────────┐
│   Configuration      │   View Settings  │
└──────────────────────┴──────────────────┘
  ↑ active: Tek-Blue fill, dark text
                          ↑ inactive: transparent, muted text
  ─────────────────────────────────────────
   Container: surface bg · 0.5px border · radius-full
   Each tab: ~radius-full · padding 14×4
```

#### Vertical (app-nav with left accent)

```html
<tek-tabs orientation="vertical">
  <tek-tab value="setup" active>Setup</tek-tab>
  <tek-tab value="status">Status</tek-tab>
  <tek-tab value="results">Results</tek-tab>
  <tek-tab value="reports">Reports</tek-tab>
</tek-tabs>
```

```
┃ Setup    ← 3px Tek-Blue left accent + 12% tek-blue tint bg + Medium weight
  Status
  Results
  Reports
```

### Variants

| `orientation` × `variant` | Visual | Used for |
|---|---|---|
| `horizontal` × `pill` | Pill-group with rounded inner tabs, active = Tek-Blue fill | Sub-tabs (Status, Reports, Configuration) |
| `horizontal` × `underline` | Flat tabs with active = bottom border | Configuration's outer Global/Measurements tabs |
| `vertical` × `accent` (default for vertical) | Left-accent bar + bg tint | App nav (Setup/Status/Results/Reports) |

### States per tab

| State | Visual |
|---|---|
| `default` | Inactive: muted text, transparent bg |
| `hover` | Slight bg tint, slightly brighter text |
| `active` | Per variant — see above |
| `disabled` | Muted text, no hover, ignore clicks |
| `focus-visible` | Tek-Blue focus ring (2px outline + 1px offset) — keyboard navigation |

### Tokens used (existing DS-v2)

| Property | Token |
|---|---|
| Container bg (horizontal pill variant) | `color/input/background/default` |
| Container border | `color/input/border/default` |
| Container radius (horizontal pill) | `📐 borders/radius/full` |
| Tab padding (horizontal pill) | `🏹 spacing/s05` vertical × `🏹 spacing/s07` horizontal |
| Tab padding (vertical) | `🏹 spacing/s06` vertical × `🏹 spacing/s07` horizontal |
| Active accent (vertical) | `colors/brand/tek-blue` at `📐 borders/width/05` (3px) |
| Active tint bg (vertical) | `colors/brand/tek-blue` at 12% opacity |
| Text — inactive | `color/input/text/default` |
| Text — active | `color/modal/text/default` |
| Type style | `text/regular/sm` for sub-tabs; `text/heading/regular/2xs` for app-nav |

### Tokens needed (new semantic aliases)

| New semantic | Maps to | Notes |
|---|---|---|
| `color/tabs/horizontal/container-bg` | `color/input/background/default` | |
| `color/tabs/horizontal/container-border` | `color/input/border/default` | |
| `color/tabs/horizontal/tab/text-inactive` | `color/input/text/default` | |
| `color/tabs/horizontal/tab/text-active` | `color/canvas/background/default` | dark text on Tek-Blue fill |
| `color/tabs/horizontal/tab/bg-active` | `colors/brand/tek-blue` | |
| `color/tabs/horizontal/tab/bg-hover` | `colors/brand/tek-blue` at 8% | new — needs alpha alias |
| `color/tabs/vertical/text-inactive` | `color/input/text/default` | |
| `color/tabs/vertical/text-active` | `color/modal/text/default` | |
| `color/tabs/vertical/bg-active` | `colors/brand/tek-blue` at 12% | |
| `color/tabs/vertical/bg-hover` | neutral 800 at 50% | |
| `color/tabs/vertical/accent` | `colors/brand/tek-blue` | left 3px bar |
| `color/tabs/underline/border-active` | `colors/brand/tek-blue` | bottom 2px |

### API surface

```ts
interface TekTabsAttributes {
  orientation: "horizontal" | "vertical";
  variant?: "pill" | "underline" | "accent";
  ariaLabel: string;
}

interface TekTabAttributes {
  value: string;
  active?: boolean;
  disabled?: boolean;
}
```

Events: `tab-change` (detail: `{ value: string, previousValue: string }`).

### Notes

- **Three structural variants in one component is intentional.** All three share the same accessibility model (radiogroup-style focus management, arrow-key navigation, optional ENTER to activate). Different rendering, same behavior.
- The `horizontal/underline` variant ships only because Configuration's Global Settings / Measurements tabs use it. If we don't end up keeping Configuration as designed, this variant could be deferred.
- **Keyboard:** Arrow keys move focus among tabs; Home/End jump to first/last; ENTER or SPACE activates the focused tab.
- The vertical variant is mutually exclusive with `tek-navigation-panel` (§6) — that component composes `tek-tabs` internally with the brand mark + run-controls foot section.

---

## 4. `tek-status-bar`

> Bottom application bar — 32px tall, 3 regions: build-flag slot · status-text slot · action slot.

App shell. Used on every Tek Express screen. Also a candidate pattern for other Tek desktop apps.

### Anatomy

```html
<tek-status-bar>
  <tek-status-pill slot="build-flag" tone="warning">
    Not Intended For Public Release
  </tek-status-pill>
  <span slot="status-text">Ready.</span>
  <span slot="actions">
    <!-- theme toggle, lock indicator, etc. -->
  </span>
</tek-status-bar>
```

```
┌─────────────────────────────────────────────────────────────┐
│ [Build Flag Pill]  Ready.                       [Actions]   │
└─────────────────────────────────────────────────────────────┘
  ↑ 32px tall · surface bg · 0.5px top border
```

### Variants

| `variant` attr | Use |
|---|---|
| `default` | Standard status bar |
| `error` | Background tinted error (for unrecoverable error states) |
| `loading` | Background tinted info (during long operations) |

### States — status text

| `status` attr | Use | Mapped color |
|---|---|---|
| `ready` (default) | Idle / done | `color/statusbar/text-default` |
| `running` | Active operation | `colors/brand/tek-blue` |
| `success` | Last action succeeded | `colors/status/success` |
| `warning` | Last action warned | `colors/status/warning` |
| `error` | Last action errored | `colors/status/error` |

### Tokens used (existing DS-v2)

| Property | Token |
|---|---|
| Height | 32px (TBD whether worth a `spacing/control/sm-height` semantic) |
| Background | `color/input/background/default` |
| Top border | `color/input/border/default` at `📐 borders/width/01` |
| Padding | `🏹 spacing/s07` horizontal × `🏹 spacing/s05` vertical |
| Status text type | `text/mono/xs` |
| Build flag pill type | `text/mono/xs` |

### Tokens needed (new semantic aliases)

| New semantic | Maps to | Notes |
|---|---|---|
| `color/statusbar/background` | `color/input/background/default` | |
| `color/statusbar/border` | `color/input/border/default` | |
| `color/statusbar/text-default` | `color/input/text/default` | |
| `color/statusbar/text-running` | `colors/brand/tek-blue` | |
| `color/statusbar/text-success` | `colors/status/success` | |
| `color/statusbar/text-warning` | `colors/status/warning` | |
| `color/statusbar/text-error` | `colors/status/error` | |

### API surface

```ts
interface TekStatusBarAttributes {
  variant?: "default" | "error" | "loading";
  status?: "ready" | "running" | "success" | "warning" | "error";
}
```

### Notes

- The 32px height is from the corpus (`status-log-view.md`, `status-test-status.md`). If a future Tek app needs a taller bar (e.g. with secondary metrics), introduce a `size` variant rather than overriding height inline.
- The build-flag pill is **only** shown on internal/pre-release builds — production should slot in an empty element or hide it via CSS. Don't bake "Not Intended For Public Release" into the component itself.

---

## 5. `tek-progress`

> Determinate or indeterminate progress bar with optional label/percentage.

Used in: Running-Test minimized window (62% done, est. 4:58 remaining); future use in any long-running operation (test runs, report generation, deskew).

### Anatomy

```html
<tek-progress value="62" max="100" tone="default">
  <span slot="label">stage 3 of 4 · iteration 1 · acquiring…</span>
  <span slot="meta">00:08:14 · est 00:04:58 remaining</span>
</tek-progress>
```

```
stage 3 of 4 · iteration 1 · acquiring…
████████████████████░░░░░░░░░░░          ← track + fill
62%                            00:08:14 · est 00:04:58 remaining
```

### Variants

| `variant` attr | Use |
|---|---|
| `determinate` (default) | With `value` attr 0-100 |
| `indeterminate` | Animated stripe — for unknown-duration operations |

### Sizes

| `size` attr | Height | Use |
|---|---|---|
| `sm` | 4px | Inline / minimal |
| `md` (default) | 8px | Standard |
| `lg` | 12px | Block / prominent |

### Tones

| `tone` attr | Fill color | Use |
|---|---|---|
| `default` | Tek-Blue | Running, active |
| `success` | Success green | Completed |
| `warning` | Warning yellow | Caution / approaching limit |
| `error` | Error red | Failed |

### States

| State | Visual |
|---|---|
| `default` | Track + fill at `value`% |
| `paused` | Fill shows current position but ceases animation |
| `complete` | Fill at 100%, optional success-tone shift |
| `error` | Fill stays at last value; tone shifts to error |

### Tokens used (existing DS-v2)

| Property | Token |
|---|---|
| Track bg | `color/input/background/default` |
| Track border | `color/input/border/default` at `📐 borders/width/01` |
| Track radius | `📐 borders/radius/02` (3px) |
| Track clipsContent | true |
| Track-default height | 8px |
| Label type | `text/regular/sm` (13/20) |
| Meta type | `text/mono/xs` |

### Tokens needed (new semantic aliases)

| New semantic | Maps to | Notes |
|---|---|---|
| `color/progress/track-bg` | `color/input/background/default` | |
| `color/progress/track-border` | `color/input/border/default` | |
| `color/progress/fill-default` | `colors/brand/tek-blue` | |
| `color/progress/fill-success` | `colors/status/success` | |
| `color/progress/fill-warning` | `colors/status/warning` | |
| `color/progress/fill-error` | `colors/status/error` | |
| `color/progress/label-text` | `color/modal/text/default` | |
| `color/progress/meta-text` | `color/input/text/default` | |

### API surface

```ts
interface TekProgressAttributes {
  variant?: "determinate" | "indeterminate";
  value?: number;           // 0–100, required for determinate
  max?: number;             // default 100
  size?: "sm" | "md" | "lg";
  tone?: "default" | "success" | "warning" | "error";
  paused?: boolean;
}
```

Events: `progress-complete` (when value hits max).

### Notes

- **Indeterminate animation**: shipping-mask CSS keyframes only; no JS-driven animation. Respect `prefers-reduced-motion` and freeze the stripe at 50% offset when reduced.
- The corpus has progress in the Running-Test minimized window only; future additions (test queue, batch operations) will expand the use.

---

## 6. `tek-navigation-panel`

> Application sidebar — composes a brand mark, a tab list (vertical `tek-tabs`), and an optional foot section (run controls).

App-shell. Used on every Tek Express screen.

### Anatomy

```html
<tek-navigation-panel>
  <tek-brand slot="brand">
    <tek-logomark />
    <span>TekExpress</span>
  </tek-brand>

  <tek-tabs slot="nav" orientation="vertical">
    <tek-tab value="setup" active>Setup</tek-tab>
    <tek-tab value="status">Status</tek-tab>
    <tek-tab value="results">Results</tek-tab>
    <tek-tab value="reports">Reports</tek-tab>
  </tek-tabs>

  <div slot="foot">
    <tek-button variant="success" leading-icon="play">Start</tek-button>
    <tek-button variant="ghost" leading-icon="pause" disabled>Pause</tek-button>
  </div>
</tek-navigation-panel>
```

```
┌─────────────────┐
│ TK TekExpress   │  ← brand
├─────────────────┤
│ ┃ Setup         │  ← active
│   Status        │
│   Results       │
│   Reports       │
│                 │
│   …(flex)…      │
│                 │
├─────────────────┤
│ ▶  Start        │  ← foot (rr variant only)
│ ⏸  Pause        │
└─────────────────┘
  ↑ 184px wide (icon + text) · 96px (rr text-only) · 56px (cb-sm icon-only)
```

### Variants

| `variant` attr | Width | Items | Use |
|---|---|---|---|
| `full` (default) | 184px | Icon + text | Standard app shell |
| `text-only` | 96px | Text only | Tek Express rr variant |
| `icon-only` | 56px | Icon only | cb-sm container reflow |

### States

| State | Visual |
|---|---|
| `default` | Brand visible, tabs interactive |
| `loading` | Tabs replaced with `tek-spinner` (rare) |

### Composition rule

`tek-navigation-panel` is a **layout composition** of three slot-driven regions. The actual tab behavior comes from the slotted `tek-tabs orientation="vertical"`. The panel only owns the chrome + slot layout. **Don't reinvent tab logic inside the panel — slot the `tek-tabs` in.**

### Tokens used (existing DS-v2)

| Property | Token |
|---|---|
| Background | `color/canvas/background/raised` |
| Right border | `color/input/border/default` at `📐 borders/width/01` |
| Panel padding-top | `🏹 spacing/s05` |
| Panel padding-bottom | `🏹 spacing/s05` |
| Section gap (brand → nav → foot) | flex / auto (foot pushed to bottom by `margin-top: auto`) |
| Brand padding | `🏹 spacing/s07` horizontal × `🏹 spacing/s07` vertical |
| Brand wordmark type | `text/heading/regular/2xs` (Archivo) |
| Foot padding | `🏹 spacing/s07` |
| Foot inter-button gap | `🏹 spacing/s06` |

### Tokens needed (new semantic aliases)

| New semantic | Maps to | Notes |
|---|---|---|
| `color/navigation/background` | `color/canvas/background/raised` | |
| `color/navigation/border` | `color/input/border/default` | |
| `color/navigation/brand-text` | `color/modal/text/default` | |
| `color/navigation/foot-divider` | `color/input/border/default` | optional top-border for foot region |

### API surface

```ts
interface TekNavigationPanelAttributes {
  variant?: "full" | "text-only" | "icon-only";
  ariaLabel: string;
}
```

### Notes

- `tek-navigation-panel` does NOT own routing. It's chrome only. The slotted `tek-tabs` emits `tab-change`; the application handles routing.
- The `variant` should respond to a `@container` query in the parent app-shell — e.g. at cb-sm the panel auto-switches to `icon-only`. The container queries are wired at the app-shell level, not inside this component.

---

## 7. `tek-spinner` (optional v1)

> Animated circular loading indicator.

**Not currently used in the Tek Express corpus.** Including in this round because:
- Async test-run startup might need it
- Future Tek apps with network operations will need it
- Cheap to ship alongside `tek-progress` (shared color tokens, similar animation pattern)

If timeline-pressed, **defer to v2** without harm.

### Anatomy

```html
<tek-spinner size="md" tone="default" />
<tek-spinner size="sm" />
<tek-spinner size="lg" />
```

```
   ◐    ← arc rotating 360°/1.2s
```

### Variants

(none — sizes are the only variant axis)

### Sizes

| `size` attr | Diameter | Stroke | Use |
|---|---|---|---|
| `sm` | 16px | 2px | Inline (buttons, table rows) |
| `md` (default) | 24px | 2.5px | Standard |
| `lg` | 40px | 3px | Block / centered |

### Tones

Same as `tek-progress`:
- `default` (Tek-Blue), `success`, `warning`, `error`

### States

| State | Visual |
|---|---|
| `default` | Spinning arc |
| `paused` | Frozen at current angle (respect `prefers-reduced-motion`) |

### Tokens used (existing DS-v2)

| Property | Token |
|---|---|
| Stroke color (default) | `colors/brand/tek-blue` |
| Stroke width (sm) | `📐 borders/width/04` (2px) |
| Stroke width (md) | `📐 borders/width/04` (2px) — or 2.5 (no token; sm/lg sandwich) |
| Stroke width (lg) | `📐 borders/width/05` (3px) |
| Type — label (if used) | `text/regular/sm` |

### Tokens needed (new semantic aliases)

| New semantic | Maps to | Notes |
|---|---|---|
| `color/spinner/default` | `colors/brand/tek-blue` | |
| `color/spinner/success` | `colors/status/success` | |
| `color/spinner/warning` | `colors/status/warning` | |
| `color/spinner/error` | `colors/status/error` | |

### API surface

```ts
interface TekSpinnerAttributes {
  size?: "sm" | "md" | "lg";
  tone?: "default" | "success" | "warning" | "error";
  paused?: boolean;
  ariaLabel?: string;  // default: "Loading"
}
```

### Notes

- **`prefers-reduced-motion`**: when set, replace the rotating arc with a pulsing dot or freeze the arc. Don't ship animation without this fallback.
- The 2.5px stroke for `md` doesn't match any existing `borders/width/NN` primitive exactly (closest: `width/04` = 2 or `width/05` = 3). **Decision: snap `md` to `width/04` (2px)** for v1 to avoid introducing a new primitive. Refine if visually too thin in practice.

---

## 8. Mode parity (light)

Every semantic token introduced above MUST resolve in both dark and light modes. The DS-v2 published variables already support this via Figma Variables modes. The new semantics should be added to **both** modes simultaneously — never dark-only.

Light-mode resolution should generally invert the canvas tier:
- Dark `color/canvas/background/raised` (`#1c1c1c`) ↔ Light (`#f7f7f7` or similar)
- Dark `color/modal/text/default` (`#ffffff`) ↔ Light (`#181818`)
- Tek-Blue stays Tek-Blue across modes (brand color is invariant)

The status/success/warning/error palettes shift slightly between modes (lighter in dark mode, darker in light mode) — follow existing DS-v2 conventions.

**Open question:** is Tek-Express ever going to ship a light mode, or is dark-only the canonical Tek-desktop appearance? Per the corpus, every screenshot is dark. Per the codebase, light mode is published as `tek.tokens.light.css`. Decision needed before this work starts — if dark-only is fine, we save half the tokenizing work.

---

## 9. All new semantic tokens (consolidated)

For the DS team to add into Figma Variables + JSON token sources in one batch. Sorted by component for review legibility.

```
# tek-group-box
color/groupbox/background
color/groupbox/border/default
color/groupbox/border/error
color/groupbox/legend/text

# tek-data-table
color/table/header/background
color/table/header/text
color/table/row/background-default
color/table/row/background-alt
color/table/row/background-hover
color/table/row/background-selected
color/table/row/background-error
color/table/row/background-success
color/table/row/border-selected
color/table/divider
color/table/text/default
color/table/text/muted

# tek-tabs
color/tabs/horizontal/container-bg
color/tabs/horizontal/container-border
color/tabs/horizontal/tab/text-inactive
color/tabs/horizontal/tab/text-active
color/tabs/horizontal/tab/bg-active
color/tabs/horizontal/tab/bg-hover
color/tabs/vertical/text-inactive
color/tabs/vertical/text-active
color/tabs/vertical/bg-active
color/tabs/vertical/bg-hover
color/tabs/vertical/accent
color/tabs/underline/border-active

# tek-status-bar
color/statusbar/background
color/statusbar/border
color/statusbar/text-default
color/statusbar/text-running
color/statusbar/text-success
color/statusbar/text-warning
color/statusbar/text-error

# tek-progress
color/progress/track-bg
color/progress/track-border
color/progress/fill-default
color/progress/fill-success
color/progress/fill-warning
color/progress/fill-error
color/progress/label-text
color/progress/meta-text

# tek-navigation-panel
color/navigation/background
color/navigation/border
color/navigation/brand-text
color/navigation/foot-divider

# tek-spinner
color/spinner/default
color/spinner/success
color/spinner/warning
color/spinner/error
```

**Total: 47 new semantic color tokens.**

### Primitives — none new required

Every value above resolves through existing DS-v2 primitives. No new spacing, radius, width, or color primitives need to ship for v1.

**One candidate primitive flagged (separately, not in scope of this batch):**
- `🌑 shadow/modal` — `0 2px 6px rgba(0,0,0,0.2)`. Used by Email Settings dialog already. Currently inline. Could be a published effect token if/when DS-v2 ships effect primitives.

---

## 10. Implementation order

Suggested sequence so the DS team can ship in waves without blocking the Tek Express redesign:

### Wave A (week 1) — app-shell blockers
1. **`tek-tabs`** — both horizontal pill + vertical accent variants. Unblocks every screen that uses sub-tabs (Status, Reports, Configuration) AND the entire navigation panel.
2. **`tek-status-bar`** — small, low-complexity. Unblocks every Tek Express screen's chrome.

### Wave B (week 2) — high-use composites
3. **`tek-group-box`** — small. Unblocks Setup › Preferences (3×), Reports (2×), Email Settings dialog.
4. **`tek-navigation-panel`** — composes `tek-tabs` and `tek-brand`. Depends on Wave A.

### Wave C (week 3) — data + running-state
5. **`tek-data-table`** — biggest single component. Unblocks Acquisitions, Status, Results, Reports.
6. **`tek-progress`** — small. Unblocks the Running-Test minimized window.

### Wave D (week 4, optional)
7. **`tek-spinner`** — small. Ship if Wave C has slack; defer otherwise.

Plus throughout: add the 47 semantic color tokens to Figma Variables + the JSON token sources. **Token additions block component implementation** — they need to ship FIRST in each wave.

---

## 11. Open decisions for the DS team

Items that need a human decision before implementation can start:

1. **Light-mode scope.** Ship every component dark + light? Or accept dark-only for Tek Express and revisit when another product needs light? *Recommendation:* dark + light from day one — every other product (Tek Bench, my.tek) is on light. Half-mode shipping creates tech debt.
2. **`tek-data-table` row-virtualization for >50 rows.** Ship v1 unvirtualized; tag v2 work. *Recommendation:* OK to ship unvirtualized for Tek Express (max ~30 rows in practice).
3. **Column-width API for `tek-data-table`.** CSS custom property (`--col-N`) vs per-`tek-data-table-column` element vs attribute (`widths="2 1 1.5 0.6"`). *Recommendation:* CSS custom property — simplest, no new element types, plays nice with `auto-layout` parents.
4. **`tek-tabs` `horizontal/underline` variant — ship now or defer?** Only Configuration's outer tabs use it; if that screen is in flux, can defer. *Recommendation:* defer to v1.5 unless Configuration is locked.
5. **Sub-checkbox / sub-radio in `tek-group-box`.** The Reports Configuration screen has hierarchical radios (Replace current test results → in previous run, current session | in any run, any session). Does `tek-group-box` need a nesting affordance, or is the sub-checkbox just an indented `tek-checkbox` instance? *Recommendation:* indented instance — don't bake nesting into the group-box itself.
6. **`tek-spinner` `md` 2.5px stroke.** Either snap to `width/04` (2px) and accept a slightly thinner spinner, or introduce a new `width/04-half` primitive. *Recommendation:* snap.
7. **Variant naming convention.** Per CHARTER, "consistency over cleverness." This doc uses `orientation` + `variant` for `tek-tabs` (two-axis). Existing DS-v2 components mostly use a single `Type` variant prop in Figma. Should `tek-tabs` collapse to a single 4-value variant prop (`horizontal-pill | horizontal-underline | vertical-accent`) or keep two-axis? *Recommendation:* two-axis is cleaner semantically; single 4-value is simpler in Figma variant matrices. DS team's call.
8. **`tek-navigation-panel` `variant` source-of-truth.** Should the panel's variant respond to a `data-variant` attribute (manually set), or auto-switch via `@container` queries on width? *Recommendation:* the panel exposes `variant` as a manual override AND defaults to container-query-driven. Best of both.
9. **Status bar status semantics.** Is "running" really a state, or should it be expressed via `tek-spinner` inline in the status text? *Recommendation:* state is fine; spinner is an enhancement layer.

---

## 12. Out of scope (deliberately)

The following components are referenced in the rr-variant redesign but are NOT being added in this batch:

| Component | Why deferred | When |
|---|---|---|
| `tek-dropdown` | Already in the Tek Express bench's additions audit; spec exists. Implementation pending. | Part of the existing 2026-06-02 additions batch |
| `tek-checkbox-tree` | Niche to Setup › Test Selection. Build local for now; promote later if other products need it. | v1.5 |
| `tek-plot` | Chart-library decision still P0 open (Rick Kuhlman walkthrough 55:23). Spec waits for that decision. | After chart-library lands |
| `tek-status-pill` | Sibling of `tek-data-table`; can ship inline as part of the same wave. Spec is short. | Wave C, alongside `tek-data-table` |
| `tek-wizard-stepper` | Setup-wizard-only. Build local for Tek Express. | v1.5 if other Tek apps adopt wizards |
| `tek-field` | Composition pattern; the additions audit treats it as a layout convention, not a component. Document as a usage pattern, not a published component. | Pattern doc, not component |
| `tek-readout` | The mono-keyed cursor readout in plots. Bundle with `tek-plot` when that lands. | After chart-library |
| `tek-numeric-tile` | Used elsewhere in the Tek ecosystem (2450-EC corpus). Not in Tek Express. | Separate batch from 2450-EC needs |

---

## 13. Cross-references

- **Tek Express setup-dut redesign additions** ([`tek-express-redesign-additions.md`](../2026-06-02-tek-express-setup-dut/tek-express-redesign-additions.md)) — the CD-original additions audit, partially overlapping. This doc is the consolidated DS-team-deliverable version for the seven components Bryan needs to ship.
- **Redesign baseline audit** ([`audits/prototype/2026-06-01-tek-express-redesign-baseline/report.md`](../../prototype/2026-06-01-tek-express-redesign-baseline/report.md)) — the original DS-mapping audit.
- **Tek Express v4 prompt (rr variant)** ([`cd-prompt.v2.md`](../2026-06-08-tek-express-v4-prompt/cd-prompt.v2.md)) — references the components above as `4b` proposed components.
- **CHARTER Rule 22 + tek-figma-build skill** — these components must be authored in Figma per the four-point rule; the additions audit (this doc) is the artifact that prevents silent un-tokenized values.
- **Corpus** — every component above maps to specific screens documented under [`corpus/sources/tek-express/screens/`](../../../corpus/sources/tek-express/screens/).
