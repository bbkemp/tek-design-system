# Build the TekExpress AppEmulator (right-rail version) in Figma

You are recreating a Windows desktop app UI — **TekExpress AppEmulator**, redesigned on the **Tek Design System v2** — as a set of native Figma frames. Build **only the right-rail ("rr") layout variant**. Produce one frame per main screen, all sharing the same chrome and consuming the existing DS-v2 published library. Production-fidelity, token-driven, auto-layout-based Figma (not a flat image trace).

> **Why v2 of this prompt:** the v1 prompt was structurally correct but invented a parallel token vocabulary instead of consuming the DS-v2 published library. This v2 fixes that — every paragraph below names actual published variable/style/component paths. **See [`gap-analysis.md`](./gap-analysis.md) for what changed and why.**

---

## 0. Setup: subscribe to DS-v2 FIRST

**Before any other action**, subscribe the file to the **Tek Design System v2** library (file key `3wbYstse9TYKlPtCPpZH5X`). Every variable, text style, and component referenced in this document **must be imported from that library**, never recreated locally.

Discovery order (single `use_figma` call):
1. `getAvailableLibraryVariableCollectionsAsync()` — confirm "Design System 2.0" / "🧩 Primitives" is available
2. `getVariablesInLibraryCollectionAsync(collectionKey)` + `importVariableByKeyAsync(varKey)` for every spacing, radius, border-width, and color primitive
3. `importStyleByKeyAsync(styleKey)` for every text style (search by category names `body`, `heading`, `bold`, `mono` — **not** `typography` which returns empty)
4. `importComponentByKeyAsync(componentKey)` for every DS-v2 component used (see §4a)

If discovery returns empty for a category, ask before proceeding — do not invent.

Fonts (Google Fonts): **Archivo** (display — `wdth 120`, weight 600), **Geist** (body, weight 400), **Geist Mono** (mono labels/status/code).

---

## 1. Frame & canvas

One frame per screen, each **995 × 773 px** (the app's default window size). Windows-window look with square corners and a `📐 borders/width/01` outer border (0.5px) bound to `color/input/border/default`.

Vertical stack inside each frame (auto-layout, fill container):
1. **Title bar** — 32px (`🏹 spacing/s13` for height-as-token if available; otherwise fixed)
2. **Top bar** — 48px
3. **Body** — fills remaining height (left nav + content + right rail, horizontal)
4. **Status bar** — 32px

Every layout container in steps 1–4 declares `container-type: inline-size` and a `container-name` — see §8 for the breakpoint behavior.

---

## 2. Tokens — DS-v2 published paths only

Every fill, stroke, layout property, and corner radius below is **bound** (not set inline). Hex shown only as fallback inside the bound paint.

### Colors — bind via `figma.variables.setBoundVariableForPaint`

| Use | DS-v2 semantic path | Fallback hex |
|---|---|---|
| Canvas / content bg | `color/canvas/background/default` | `#1e1e1e` |
| Chrome bg (top bar, left nav, cards) | `color/canvas/background/raised` (or whichever semantic alias maps to the raised tier) | `#181818` |
| Surface (inputs, dropdowns, table header, status bar) | `color/input/background/default` | `#252525` |
| Primary text | `color/text/default` (or `colors/neutral/200`) | `#cccccc` |
| Secondary/muted text | `color/input/text/default` | `#979797` |
| Headings, active labels | `color/modal/text/default` | `#ffffff` |
| Borders, 0.5px dividers | `color/input/border/default` | `#7b7b7b` |
| Disabled border/guides | `color/input/border/disabled` (closest semantic) | `#454545` |
| **Tek Blue** (active accents, focus, primary outlines) | `colors/brand/tek-blue` | `#33baea` |
| Success (Start, completed, pass) | `colors/status/success` (or closest semantic) | `#42b54c` |
| Warning (build flag) | `colors/status/warning` | `#e0b732` |
| Error (Stop, fail) | `colors/status/error` | `#e74848` |

If a semantic alias doesn't match exactly, **defer to the closest semantic** (the four-point rule). Don't introduce a new color; flag in additions audit if genuinely new.

### Text — apply via `await node.setTextStyleIdAsync(style.id)`

Never set `fontName + fontSize` inline. Every `TextNode` has a `textStyleId`.

| Use | DS-v2 style path |
|---|---|
| Modal titles, primary headings (24/32) | `text/heading/regular/lg` (or md, depending on actual size) |
| Section / group titles ("Device Profile", 16/24) | `text/heading/regular/xs` |
| Field labels (16/24) | `text/regular/lg` (or `xl` if available) |
| Body, control labels, table cells (14/20) | `text/regular/md` |
| Help text, context header (13/16) | `text/regular/sm` |
| Table headers, status pills (12/16) | `text/regular/xs` |
| Status bar, build flag, cursor readout (mono 12) | `text/mono/xs` |
| Button labels | `text/bold/xs` (Archivo SemiBold, ~+0.32px tracking) |

Snap rule: closest match by (family, weight, size). Family is a hard match; weight close-match allowed (Medium↔Regular, SemiBold↔Bold).

### Spacing — bind via `setBoundVariableForLayoutMode`

Use `🏹 spacing/sNN` primitives exclusively. Common values:
- s05 = 8 (label→control gap, small)
- s07 = 12 (action-block gap)
- s09 = 16 (field gap, default padding)
- s10 = 20 (rail padding)
- s11 = 24 (large gap)
- s13 = 32 (section gap)
- s15 = 40 (extra-large gap)

Snap rule: ±3px. `23 → s11`, `13 → s07`, `6 → s04`.

### Radii — bind via `setBoundVariable("topLeftRadius", …)` (and the 3 other corners) or `cornerRadius` for uniform

Use `📐 borders/radius/NN` primitives:
- `radius/02` (3) → checkboxes
- `radius/03` (5) → inputs, dropdowns
- `radius/05` (11) → cards, group-boxes, modals, data-table container, plot frame
- `radius/full` (9999) → pills, buttons

### Stroke weights — bind via `setBoundVariable("strokeWeight", …)`

Use `📐 borders/width/NN` primitives:
- `width/01` (0.5) → dividers, default borders
- `width/02` (1) → button borders, input borders
- `width/03` (1.5) → wizard-stepper circle border + check stroke + guide lines (all same weight)

### Shadow

Modal-only: `0 2px 6px rgba(0,0,0,0.2)`. Propose as a new effect variable `🌑 shadow/modal` and flag in additions audit.

---

## 3. The rr layout (chrome — identical on every screen)

**Title bar (32px, `color/text/default` bar over dark app — inverted):** left = TK 'T' mark + "TekExpress AppEmulator" (`text/regular/xs`, dark text). Right = Windows minimize / maximize / close caption buttons (close hovers red `colors/status/error` at 60% mix).

**Top bar (48px, `color/canvas/background/raised`, `width/01` bottom border in `color/input/border/default`):** left = TK logo mark + "TekExpress" wordmark (Archivo wdth-120 600 — DS-v2 should publish this as `text/heading/regular/<size>`; verify in discovery) + "DDR Tx — (Untitled)*" filename (`text/regular/sm` in `color/input/text/default`, the `*` swapped to `colors/brand/tek-blue` via a second text run). Right = **Options ▾** button (DS-v2 Button instance, Type=Secondary).

**Body** (horizontal):
- **Left nav — 96px**, `color/canvas/background/raised` bg, `width/01` right border. Vertical list, text-only (no icons): `Setup · Status · Results · Reports`. **Plots is NOT a top-level destination** — it renders inline within Results (see §5.7). Active item = Tek-Blue **left accent bar** (3px = candidate for a new spacing value; propose in additions audit if no existing token snaps) + 12% Tek-Blue tint background + brighter label (Medium weight via `text/heading/regular/2xs` or close). Items full-width, padding via `s06`/`s07`.
- **Content stage** — fills middle, canvas bg, `s09` padding, `s09` vertical gap between blocks. Sole vertical-scroll region.
- **Right rail — 124px**, canvas bg (same as content — **no border**), `s10` padding, contents top-aligned. Holds run controls: **Start** (DS-v2 Button, Type=Primary with success color override — propose a success variant if not shipping) above **Pause** (Type=Secondary state=Inactive). `s09` gap between them.

**Status bar (32px, `color/input/background/default`, `width/01` top border):** left = warning-outline pill "Not Intended For Public Release"; center-left = mono status text "Ready." (`text/mono/xs`); right = a 🌚/🌝 dark/light theme toggle (**flag this — not in corpus, propose in additions audit**).

---

## 4a. Components to INSTANTIATE (do NOT recreate)

Every component here ships in DS-v2. Use `componentSet.createInstance()` and set variant properties via `instance.setProperties({...})`.

| Need | DS-v2 component | componentSetKey | Variants to use |
|---|---|---|---|
| Buttons (all pills) | **Button** | `95ac2527f3756a80b85f8f64f980ab3af5a526f0` | Type: `Primary` / `Secondary`; State: `Default` / `Hover` / `Inactive` |
| Checkbox / Radio | **Selector** | `5478518a1678b52e63f06c4b962d52f23845254a` | Type: `Checkbox` / `Radio` |
| Checkbox/Radio label | **SelectorLabel** | `bd1704337a106b29d985988fcad096319550d989` | State: `Unchecked` / `Checked` / `Disabled` |
| Text input | **Input** | (discover by `search_design_system` "input") | size + state variants |
| Field label | **Label** | (discover) | — |
| Modal | **Modal** | (discover) | — |
| Toggle | **Toggle** | (discover) | on / off |
| Text link | **TextLink** | (discover) | — |
| Footer | **Footer** | (discover) | — |
| CharacterCount | **CharacterCount** | (discover) | — |

If discovery doesn't return one of these, ask before proceeding.

## 4b. Components to BUILD locally + propose in additions audit

These don't ship in DS-v2 yet. Build as local Figma components with proper variant matrices, and **list each one in `tek-express-rr-additions.md`** with anatomy, states, events, fonts/sizes, closest existing primitive, ✓/⚠ confidence flag.

- **tek-dropdown** — input-style closed control: `color/input/background/default`, `width/01` border, `radius/03`, label text + chevron
- **tek-field** — composition: label (`text/regular/lg`) above control, `s05` gap; inline variant = label + control + a right-aligned "Setup" Secondary Button
- **tek-group-box** — titled section: `width/01` border, `radius/05`, raised bg, `s09` padding, Archivo `text/heading/regular/xs` legend
- **tek-wizard-stepper** — vertical list of 5 steps. 22px circle badge on connecting vertical guide line + label. States: **pending** (`width/03` neutral outline, number, muted), **current** (Tek-Blue fill, white number), **completed** (success-green `width/03` outline + check, green guide). **All circle borders, check strokes, and guide lines use `width/03` (1.5px).**
- **tek-data-table** — header row (`color/input/background/default`, `text/regular/xs` muted, fixed widths) + body rows, `width/01` dividers, `radius/05` container. Cells may hold a status pill (dot + label). Fixed column widths (no auto-resize).
- **tek-status-pill** — small pill, `width/01` tone-colored border, `text/mono/xs`, optional leading dot. Tones map to DS-v2 semantic colors: neutral / info / success / warning / error.
- **tek-tabs** — two variants:
  - **Vertical** (left-nav style) — left-accent active state
  - **Horizontal pill-group** (sub-tab style) — active = Tek-Blue fill + dark text
- **tek-plot** — chart container only. The chart-library decision (Rick Kuhlman 55:23 walkthrough) is **P0 open** — render as a styled placeholder with axes + grid + cursors but no live data binding. Document in notes.
- **tek-checkbox-tree** — parent/child hierarchy with expand/collapse + indented checkboxes
- **Options menu** — dropdown panel (`color/input/background/default`, `width/01` border, `radius/05`, shadow) with the 14 items in §5.9

Icons: DS has no icon set. Use **Lucide** (stroke 1.5) for the few needed (play, pause, stop, chevron, pencil, folder, check). **Flag in additions audit as a candidate for a Tek-branded icon set.**

---

## 5. Screens to produce (one frame each, rr layout)

(Content unchanged from v1 prompt — all corpus-verbatim labels preserved. Bullet-level summary here; see [`cd-prompt.md`](./cd-prompt.md) §5 for full detail.)

- **5.1 Setup › DUT** (active nav: Setup) — wizard card (left, step 1 current) + form (right): radios + toggle row; DUT ID + Device dropdown; Device Profile group-box with 2-col grid + inline `[Setup]` buttons; Signal Probe Type subsection. Back/Next bottom-right.
- **5.2 Setup › Test Selection** — context header pill; bulk-action button row; split = checkbox-tree (left) | Test Description + actions (right). Configure = Primary.
- **5.3 Setup › Acquisitions** — context header + Refresh/View Probes; tek-data-table (4 rows); Show Acquire Parameters checkbox.
- **5.4 Setup › Configuration** — Compliance/UserDefined radios + Global Settings/Measurements sub-tabs + context header + Acquire/Analyze sub-sub-tabs + 7-field Acquire form.
- **5.5 Setup › Preferences** — three tek-group-boxes (Execution / Failure / Popup) with 9 checkboxes total + Email Settings button.
- **5.6 Status** (active nav: Status) — Test Status / Log View sub-tabs; data-table with status pills.
- **5.7 Results + Plots inline** (active nav: Results) — Overall Test Result + outlined Debug/Preferences pills (the only outlined non-teal buttons); 7-col data-table; **inline Plots panel below the table** (Select Test dropdown + tek-plot waveform + cursor readout). This consolidates §5.7 and §5.8 of the v1 prompt — per the wireframe, IA discussion, and CD's own v3 behavior.
- **5.8 Reports** (active nav: Reports) — Configuration / View Settings sub-tabs; Report Update Mode group with radios + disabled sub-controls; Report Creation Settings; View/Generate/Save As action row.
- **5.9 Options menu** (shared overlay frame) — 14 items per the v1 prompt.

---

## 6. Fidelity checklist (DS-v2 binding)

A frame is not complete until ALL of the following are true:

- [ ] File subscribes to DS-v2 (`3wbYstse9TYKlPtCPpZH5X`)
- [ ] Every fill bound to a `color/*` variable via `setBoundVariableForPaint` (or intentionally empty)
- [ ] Every stroke bound to a `color/*` variable
- [ ] Every `itemSpacing` / `paddingLeft/Right/Top/Bottom` bound to a `🏹 spacing/sNN` variable
- [ ] Every `cornerRadius` (or per-corner) bound to a `📐 borders/radius/NN` variable
- [ ] Every `strokeWeight` (or per-side) bound to a `📐 borders/width/NN` variable
- [ ] Every `TextNode` has `textStyleId` set to a published `text/*` style
- [ ] Every DS-v2 component is an instance (not a frame mimicking it). The new components in §4b are local components, properly instanced in their uses
- [ ] Every deviation is flagged in the additions audit AND in the Figma layer name as `(PROPOSED: tek-…)`
- [ ] Tek Blue used sparingly (accent only; surface fill only for active-nav 12% tint + primary/solid buttons)
- [ ] Action-button groups side-by-side and right-aligned (not full-width)
- [ ] Right rail: no border, canvas bg, run buttons top-aligned, `s10` padding, `s09` gap
- [ ] Left nav: 96px, text-only, Tek-Blue left-accent active state
- [ ] Sentence/title casing per the labels above (verbatim)

If any box is unchecked, the deliverable is rejected. "I'll bind it in a later pass" is the failure pattern — no later passes.

---

## 7. Companion artifacts (mandatory)

The Figma file alone is incomplete. Produce two markdown documents alongside:

**a. `tek-express-rr-additions.md`** — for each new component, variant, or token (anything in §4b OR any value that didn't snap to a DS-v2 primitive), include:
- Anatomy + states + events
- Closest existing primitive
- ✓/⚠ confidence flag
- Rationale

**b. `tek-express-rr-notes.md`** — decisions made, deviations from corpus, open questions for human review, container-breakpoint rationale (see §8), flow-preservation map, what was deferred to future passes. This is how the next CD or cc session inherits the decisions instead of re-deriving them.

Both files are mandatory. The Figma file alone is rejected as incomplete.

---

## 8. Container queries — first-class

Every layout container (top bar, left nav, content stage, right rail, status bar, group-boxes within the stage) MUST:

- Declare `container-type: inline-size` and a `container-name`.
- Define at least one `@container` rule that reflows it at:
  - **cb-md** (default, 995px)
  - **cb-sm** (half-width docked, ~640–760px) — left nav collapses to icons only; right rail moves below content or hides; stage stacks to single column
  - **cb-xs** (horizontal rail, ≤600px height) — top bar truncates filename; actions wrap; status bar hides build-flag pill

Propose these as **new tokens** (`--tek-container-breakpoint-sm: 600px`, `-md: 760px`, `-lg: 1200px`) in the additions audit.

Viewport `@media` is forbidden except `prefers-color-scheme` and `print`.

Deliver **three frames per screen** (cb-md, cb-sm, cb-xs) OR one frame with auto-layout that reflows when manually resized — your call, document in `notes.md`. Recommendation: three frames for the format-lock (Setup › DUT) at minimum; the others can demonstrate just cb-md.

---

## 9. Where to put it

- Frames laid out in a row on one Figma page, named `rr / <Screen>` (e.g. `rr / Setup › DUT`)
- A second page named "Components" with §4b new components
- A third page named "Additions audit" with a visual representation of `tek-express-rr-additions.md` (one card per proposed asset, mirroring the format from the existing additions audit at [`audits/design-additions/2026-06-02-tek-express-setup-dut/tek-express-redesign-additions.md`](../2026-06-02-tek-express-setup-dut/tek-express-redesign-additions.md))

Existing reference: `Tek-Express-Update` at `figma.com/design/such8xhIcxqICfsPKUWQ9B/Tek-Express-Update` shows the wireframe-aligned variant (4-tab top nav, no right rail, Plots inline in Results). This rr prompt builds the *alternative* variant for direct comparison.

---

## What changed from v1 of this prompt

For the audit trail — every change is justified in [`gap-analysis.md`](./gap-analysis.md):

| §  | v1 | v2 |
|---|---|---|
| 0  | "create Figma variables/styles … build the shared components" | Subscribe to DS-v2 first; **import** everything from the library |
| 2  | Hex values + made-up token names | DS-v2 semantic paths (`color/canvas/background/default`, etc.) |
| 2  | Spacing scale "2, 4, 6, 8, 10, 12, 16, 24, 32, 40" | `🏹 spacing/sNN` primitives with snap rules |
| 2  | "inputs/dropdowns 5; checkbox 3; cards/modals 11" | `📐 borders/radius/02 / 03 / 05 / full` |
| 2  | Generic `heading-md`, `text-xl` style names | DS-v2 published `text/heading/regular/{xs/sm/md/…}` paths |
| 4  | Single component list ("build the shared components") | Split into §4a (instantiate-only) and §4b (build + flag) |
| 5  | Five top-level destinations (legacy 5-tab nav) | Four top-level (Plots merged into Results) — per wireframe + v3 |
| —  | No artifact contract | §7 — additions + notes files mandatory |
| —  | No container queries | §8 — first-class, three breakpoints, three frames per screen |
| 6  | Generic "every value bound" | Specific checklist tied to API methods (`setBoundVariableForPaint`, etc.) |
