# Build the TekExpress AppEmulator (right-rail version) in Figma

You are recreating a Windows desktop app UI — **TekExpress AppEmulator**, redesigned on the **Tek Design System v2** — as a set of native Figma frames. Build **only the right-rail ("rr") layout variant**. Produce one frame per main screen, all sharing the same chrome and a single component/style library. Aim for production-fidelity, token-driven, auto-layout-based Figma (not a flat image trace).

---

## 0. Setup: styles & components first

Before drawing screens, create Figma **variables/styles** for every token below, and build the shared **components** in §4. Every fill, stroke, text, radius, and spacing value on a screen must reference a style/variable — never a raw hex. Dark theme is the default (build that); you may add a light mode later but it is out of scope for this pass.

Fonts (Google Fonts): **Archivo** (display — set width axis `wdth 120`, weight 600), **Geist** (body, weight 400), **Geist Mono** (mono labels/status/code).

---

## 1. Frame & canvas

- One frame per screen, each **995 × 773 px** (the app's default window size; it's resizable in the real app but build at this size). Use a Windows-window look with square corners and a 0.5px outer border.
- Vertical stack inside each frame (auto-layout, fill container):
  1. **Title bar** — 32px
  2. **Top bar** — 48px
  3. **Body** — fills remaining height (left nav + content + right rail, horizontal)
  4. **Status bar** — 32px

---

## 2. Design tokens (dark theme)

**Colors**
| Token | Hex | Use |
|---|---|---|
| canvas / content bg | `#1e1e1e` | main content area, right rail |
| chrome bg | `#181818` | top bar, left nav, cards/group-boxes |
| surface | `#252525` | inputs, dropdowns, table header, status bar |
| neutral-100 | `#cccccc` | primary text |
| input-text-default | `#979797` | secondary/muted text, mono labels |
| modal-text | `#ffffff` | headings, active labels |
| border | `#7b7b7b` | all 0.5px borders/dividers |
| border-disabled | `#454545` | guide lines, disabled |
| **Tek Blue** | `#33baea` | active nav accent, links, focus rings, current wizard step, primary "Next/Configure" outline |
| success | `#42b54c` | Start button, completed states, pass |
| warning | `#e0b732` | build-flag pill, warnings |
| error | `#e74848` | Stop button, fail |

**Type styles** (family / size / line-height / weight)
- `heading-md` — Archivo / 24 / 32 / 600 (modal titles)
- `heading-sm` — Archivo / 20 / 26 / 600
- `heading-xs` — Archivo / 16 / 24 / 600 (section/group titles, "Device Profile")
- `text-xl` — Geist / 16 / 24 / 400 (field labels)
- `text-lg` — Geist / 14 / 20 / 400 (body, controls, table cells)
- `text-md` — Geist / 13 / 16 / 400 (help text, context header)
- `text-sm` — Geist / 12 / 16 / 400 (table headers, status pills)
- `mono-sm` — Geist Mono / 12 / 16 (status bar, build flag, cursor readout)
- Headings use letter-spacing −0.02em; button labels ~+0.32px.

**Spacing scale** (px): 2, 4, 6, 8, 10, 12, 16, 24, 32, 40. Field gap 16; label→control 6; action-block gap 10–12.

**Radii**: inputs/dropdowns 5; checkbox 3; cards/modals 11; buttons & pills `full` (9999).

**Borders**: default **0.5px** solid `#7b7b7b`. Buttons 1px. Focus/filled states shift border *color*, not width. One shadow only (modals): `0 2px 6px rgba(0,0,0,0.2)`.

---

## 3. The rr layout (chrome — identical on every screen)

**Title bar (32px, `#cccccc` bar over the dark app — inverted):** left = TK 'T' mark + "TekExpress AppEmulator" (Geist 12, dark text); right = Windows minimize / maximize / close caption buttons (close hovers red `#c42b1c`).

**Top bar (48px, chrome bg, 0.5px bottom border):** left = TK logo mark + "TekExpress" wordmark (Archivo wdth-120 600) + "DDR Tx — (Untitled)*" filename (Geist 12, `#afafaf`, the `*` in Tek Blue). Right = **Options ▾** button (pill, 1px Tek-Blue border, label + caret).

**Body** (horizontal):
- **Left nav — 96px**, chrome bg, 0.5px right border. Vertical list, **text-only (no icons)**: `Setup · Status · Results · Plots · Reports`. Active item = Tek-Blue **left accent bar** (3px) + subtle Tek-Blue 12% tint + brighter label (weight 500). Items full-width, ~10/12px padding.
- **Content stage** — fills middle, canvas bg, 16px padding, 16px vertical gap between blocks. This is the only scrolling region (vertical); the scrollbar sits at the far right (right of the rail).
- **Right rail — 124px**, canvas bg (same as content — **no border**), 20px padding, contents top-aligned. Holds the run controls: **Start** (success-green pill, play icon + label, ~44px tall) above **Pause** (ghost — no border/fill, icon + label, muted; enabled/brighter only during a run). 16px gap between them.

**Status bar (32px, surface bg, 0.5px top border):** left = warning-outline pill "Not Intended For Public Release"; center-left = mono status text "Ready."; right = a 🌚/🌝 dark/light theme toggle.

---

## 4. Components to build (as Figma components with variants)

- **tek-button** — pill, 1px border. Variants: `secondary` (dark bg, Tek-Blue/neutral border — the default), `solid` (Tek-Blue fill, dark text — used for Next/Configure/OK), `success` (green — Start), `danger` (red — Stop), `ghost` (no border/fill — Pause). States: default / hover / disabled. Optional leading icon.
- **tek-dropdown** — input-style closed control: surface bg, 0.5px border, radius 5, label text + chevron. (Menu open state optional.)
- **tek-input** — surface bg, 0.5px border, radius 5; placeholder `#979797`. Plus a variant with a trailing 30px square icon-button (DUT ID edit pencil).
- **tek-radio** / **tek-checkbox** — 16px; radio circle, checkbox radius-3; checked = Tek-Blue fill + white check/dot.
- **tek-toggle** — pill switch; on = Tek-Blue.
- **tek-field** — label (text-xl) above control, 6px gap; inline variant = label + control + a right-aligned "Setup" secondary button.
- **tek-group-box** — titled section: 0.5px border, radius 11, chrome bg, 16px padding, Archivo heading-xs legend.
- **tek-wizard-stepper** — vertical list of 5 steps. Each = 22px circle badge on a connecting vertical guide line + label. States: **pending** (1.5px neutral outline, number, muted label), **current** (Tek-Blue fill, white number), **completed** (success-green 1.5px outline + check, green guide). **Make the circle border, the check-icon stroke, and the guide lines all the same 1.5px weight.**
- **tek-data-table** — header row (surface bg, text-sm muted, fixed column widths) + body rows, 0.5px row dividers, radius-11 container. Cells may hold a status pill (dot + label). Use `table-layout: fixed` equivalent (fixed column widths).
- **tek-status-pill** — small pill, 0.5px tone-colored border, mono label, optional leading dot. Tones: neutral / info / success / warning / error.
- **sub-tab bar** — pill-group inner tabs (used on Status & Reports): active = Tek-Blue fill + dark text.
- **Options menu** — dropdown panel (surface bg, 0.5px border, radius 11, shadow) with the 14 items in §5.9.

Icons: the DS has no icon set — use **Lucide** (stroke 1.5) for the few needed (play, pause, stop, chevron, pencil, folder, check). Flag this substitution.

---

## 5. Screens to produce (one frame each, rr layout)

All share the chrome above. The **Setup** screens show the wizard stepper in a left card inside the stage; on the first screen (DUT) step 1 is current and the rest pending; on later steps the prior ones are completed (green check).

### 5.1 Setup › DUT (active nav: Setup)
Stage: wizard card (left) + form (right). Top card merges: radios **"Acquire Live Waveforms"** / **"Use pre-recorded waveform files"** (pre-recorded selected) + a **"User Defined Acquisition"** toggle; divider; then **DUT ID** (empty input + pencil) and **Device** (dropdown = `DDR5`). Below, a **Device Profile** group-box: 2-col grid — **Data Rate** (Select…), **Burst Detection Method** (Select… + Setup button); divider; "Signal Probe Type" subhead with **Clock** (Differential + Setup) and **EQ1** (Differential); divider; inline rows **Voltage Settings** [Setup], **TriMode Probe Setup** [Setup], **Filter Files Path** (Disable). Bottom-right of stage: **Back** (‹ caret, disabled) and **Next** (solid, label + › caret).

### 5.2 Setup › Test Selection
Context header pill `TX-Device : Group1 : TEFW 4.0`; right-aligned button row **Deselect All · Select Required · Select All**. Split layout: left = **checkbox tree** (parents: Algorithm Library Measurements › "Algorithm Library Measurement"; SCOPE Measurements › "Period using SCOPE (Acquire-Analyze Combined)" [checked]; DPOJET Measurements › "Period using DPOJET (Acquire-Analyze Combined)"; Autoset › "Autoset Tester"); right = **Test Description** read-only box ("This is SCOPE based period measurement test. Refer Section-B of TekExpress SampleApp Development Guide for more details.") + button row **Show MOI · Schematic · Configure** (Configure = solid). Back/Next bottom-right.

### 5.3 Setup › Acquisitions
Context header + right button row **Refresh Sources · View Probes**. **tek-data-table**: columns Test Name / Acquisition / Waveform File Name (each row has a folder icon-button in the last column). 4 rows (truncated names: "Algorithm Library Measure…", ×2, "Period using SCOPE (Acq…", "Period using DPOJET (Ac-…"). Bottom-right: checkbox **"Show Acquire Parameters"**. Back/Next.

### 5.4 Setup › Configuration
Top: radios **Compliance Mode** / **User Defined Mode** (User Defined selected) + a right-aligned sub-tab bar **Global Settings / Measurements** (Measurements active). A context header `SCOPE Measurements › Period using SCOPE (Acquire-Analyze Combined)` (ellipsis-truncates). Sub-tabs **Acquire / Analyze** (Acquire active). Acquire pane = field grid: Horizontal Scale (us/div), Record Length (1000), Vertical Scale (200 mV/Div), Vertical Position (0Div), Vertical Offset (0 mV), Edge Trigger Level (60mV), and **Edge Trigger Slope** radios Positive/Negative. Back/Next.

### 5.5 Setup › Preferences
Three group-boxes:
- **Execution Options** — ☑ "Highlight yellow warning if measured value is within [100] % margin of limit", ☑ "Acquire/Analyze each test [1] times", ☐(disabled) "Show alert when new deskew values are configured on TekScope", ☐ "Enable Logging". (Inline number inputs flow within the wrapping label text; checkboxes top-align with the first line.)
- **Actions on Test Measurement Failure** — ☑ "On Test Failure, rerun that test [1] times", ☐ "…pause the test and let me investigate", ☐ "…stop and notify me of the failure", + **Email Settings** button.
- **Popup Settings** — ☑ "Auto close Warnings and Informations during Sequencing — Auto close after [10] seconds", ☑ "Auto close Error Messages… [10] seconds", ☐ "Show messages with a beep sound".
Back/Next.

### 5.6 Status (active nav: Status)
Sub-tab bar **Test Status / Log View** (Test Status active). **tek-data-table**: columns Test Name / Acquisition / Acquire Status / Analysis Status. 4 rows; Acquire Status = "—", Analysis Status = status pill **"To be started"** (neutral dot). Rows: Algorithm Library Measurement / Short Record-length for Period; Algorithm Library Measurement / Acquisition for Algorithm Test; Period using SCOPE… / Short Record-length for SCOPE Period; Period using DPOJET… / Short Record-length for DPOJET Period.
(Optional 2nd frame — **Log View**: mono "Message History" pane with timestamped lines, bottom row ☑ Auto Scroll · **Clear Log** · **Save…**.)

### 5.7 Results (active nav: Results)
Header "Overall Test Result" + two right-aligned **outlined (non-teal) pills**: **Debug** and **Preferences ▾** (these are the only outlined buttons in the app). **tek-data-table**: columns Test Name / Pass-Fail / Iteration / Details / Value / Margin / Units. Show an empty state ("No results yet — run a test to populate.") OR the populated state with 2 Pass rows: "Period using SCOPE (A…" · Pass · 1 · Period (ps) · 1551.1563 · L:1501.1563 H:448.8437 · ps, and a second row with Period (ns). Pass = green dot.

### 5.8 Plots (active nav: Plots)
"Select Test" label + dropdown ("Period using DPOJET (Acquire-Analyze Combi…)"), right-aligned toolbar icons. Centered title "Period(DPOJET)". A scope-style **waveform plot**: dark plot area, 0.5px border radius-11, gridlines, Y axis "Amplitude (V)" with ticks, X axis "Time (sec)" with ticks, a yellow waveform trace, vertical measurement cursor(s), and a mono **cursor-readout box** (top-right): `x1: 12.42 nsec / x2: 12.42 nsec / ΔX: 0 sec / y1: 429.21 mV / y2: 429.21 mV / ΔY: 0 V`. (Charts are otherwise out of DS scope — this is a styled representation.)

### 5.9 Reports (active nav: Reports)
Sub-tab bar **Configuration / View Settings** (Configuration active). **Configuration** pane: group-box "Report Update Mode" with radios (•)"Generate new report" / ( )"Append with previous run session" [+ disabled sub-checkbox] / ( )"Replace current test results" [+ disabled sub-radios]; group-box "Report Creation Settings" with Report name input `K:\AppEmulator\Reports\DUT001.mht` + Browse, "Save as type" dropdown "Web Archive (*.mht;*.mhtml)", ☑ "Auto increment report name if duplicate", ☑ "Create report automatically at the end of the run", ☑ "View report after generating". Bottom right-aligned button row **View · Generate · Save As**.
(Optional 2nd frame — **View Settings**: two-column — left group-box "Contents To Save" with 9 checkboxes (last "Include Statistics Table" disabled; "Include user comments" has a pencil); right column = group-box "User logo" (☐ Include user logo, "(Size 200*45px)", preview rect) stacked over group-box "Group Report By" radios Test Name / (•)Test Result.)

**Options menu** (shared overlay, optional frame): Default / Open / Save / Save As Test Setup / Open Recent ▸ / Continuous Run Setup / Instrument Control Settings / Keep On Top (toggle) / Email Settings / Deskew ▸ / Suite ▸ / Message Font Size ▸ / Help / About TekExpress.

---

## 6. Fidelity checklist
- Every value bound to a Figma variable/style (no raw hex/px on screens).
- Auto-layout everywhere; cards/group-boxes hug content; the stage is the scroll region.
- 0.5px borders, single shadow, pill buttons, restrained palette — Tek Blue used sparingly (accent only, never a surface fill except the active-nav tint and primary/solid buttons).
- Action-button groups are side-by-side and right-aligned (not full-width).
- Right rail: no border, canvas bg, run buttons top-aligned, ~44px tall, 16px gap, 20px rail padding.
- Left nav: 96px, text-only, Tek-Blue left-accent active state.
- Sentence/title casing per the labels above (verbatim).

Deliver the frames laid out in a row on one Figma page, named `rr / <Screen>`, with the component & style library on a separate page.
