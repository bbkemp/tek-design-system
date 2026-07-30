# Riddick → DS v2 Alignment Spec

**Source:** [riddick-ui-guide.pdf](./riddick-ui-guide.pdf) (35pp, June 2018 — original `UI_Guide_Riddick translated into WPF.pdf`)
**Target Figma file:** [Riddick — DS v2 Alignment](https://www.figma.com/design/7L4Zc8IFcs6xKbNFYmU3X1)
**Token baseline:** DS v2 (`packages/tokens/src/`) + new tokens proposed in [bench-audit.md](../2026-04-22-bench-audit/bench-audit.md)
**Spec date:** 2026-04-22

---

## 0. What this doc is, and what it isn't

**Is:** a complete, buildable spec for recreating Riddick screens in Figma using DS v2 tokens. Every element mapped to a token or flagged as a gap. Designer (you or Broc) can build from this without going back to the PDF.

**Isn't:** a visual recreation. This doc describes *what* to build; the Figma file is where the visual build happens. I've created the empty shell and laid out what goes in it.

### Ground rules

Per project ethos, quoted from memory: **design system adherence is non-negotiable for existing elements and variables; new elements need to be proposed, not invented.**

That means:
1. Every color, type, space value **first** tries an existing token.
2. If no existing token fits within 1–2 shades/steps, the gap goes into §9 for explicit DS addition.
3. We do **not** invent a value inline because the PDF happens to specify one.
4. Where Riddick's values disagree with DS v2 or Bench, the disagreement is flagged, not resolved unilaterally.

---

## 1. TL;DR — how Riddick maps to DS v2

| Riddick concept | DS v2 equivalent | Status |
|---|---|---|
| Light theme (Riddick pp. 2, 5, 6 — buttons, checkboxes, inputs) | `[data-theme="light"]` | ✅ exists |
| Dark theme ("readout" buttons p.3, all screen captures) | `:root` default | ✅ exists |
| Tek blue accent `#26B7EA` / `#0BA3CC` / `#54CEEA` glow | `color.brand.tek-blue` `#33BAEA` | ⚠️ **close but not same** — see §9A |
| 6 channel colors | `brand.Ch 1`–`Ch 6` primitives | ⚠️ **values disagree** — see §9B |
| Neutral scale (`#DBDBDA`, `#B2B3B3`, `#595A5C`, `#2E2E2E`, `#464646`, `#161616`, `#111011`) | `colors.neutral.100–900` | ⚠️ mostly maps; a few in-between shades need snapping |
| Radius `6px` everywhere | `borders.radius.04` (7px) | ⚠️ off by 1px — snap to 7px or add 6px primitive (see §9C) |
| Border `1px` standard | `borders.width.02` | ✅ exists |
| Focus glow: `#54CEEA`, 4px thickness, 2px feather | needs new `glow.focus` | ❌ gap |
| Font: "Frutiger 65 Bold" 14pt | `fonts.family.Archivo` + `fonts.family.Geist` | ⚠️ **intentional modernization** — see §9D |
| Title bar `24px` height | no token — compute from `space.*` | — |
| Menu bar `40px` height, item spacing `55px` | no token | needs `size.menu-bar.*` or inline constants |
| Gradient fills (buttons, panels) | DS v2 has **zero gradient tokens** | ❌ gap — see §9E |

**Bottom line:** DS v2 covers ~70% of Riddick out-of-the-box once the semantic surface/text/border tokens from the bench audit land. The remaining 30% is focus glows, gradients, and a handful of value reconciliations.

---

## 2. Shared app shell (the "chrome")

Every screen capture in the PDF uses the same outer shell. Build this once in Figma as a master layout with slots, then compose screens from it.

```
┌─────────────────────────────────────────────────────────┐
│ [Title bar — app name + window controls]    24px        │ ← TITLEBAR
├─────────────────────────────────────────────────────────┤
│ File  Edit  Applications  Utility  Help     40px        │ ← MENU BAR
├──────────────────────────────────────────────┬──────────┤
│                                              │          │
│                                              │ Add New  │
│                                              │  rail    │
│                  CANVAS                      │  (docks  │
│     (waveform / plot / table / etc.)         │   here)  │
│                                              │          │
│                                              │ Cursors  │
│                                              │ Measure  │
│                                              │ Results  │
│                                              │ Search   │
│                                              │ Note     │
│                                              │ Plot     │
├──────────────────────────────────────────────┴──────────┤
│ Ch1 Ch2  1 2 3 4 5 6 7 8  AddMath AddRef AddBus DVM AFG │ ← STATUS BAR
│ Horizontal | Trigger | Acquisition           | Auto/Run │   (variable bottom height,
│                                                         │    ~60–80px)
└─────────────────────────────────────────────────────────┘
```

### 2A. Title bar (Riddick p.20 "Master Specifications")

| Property | Value | Token |
|---|---|---|
| Height | 24px | inline — or add `size.titlebar` |
| BG active | `#353534` | → `neutral.600` (`#333333`, off by 1) — snap |
| BG inactive | `#231f20` | no neutral match — use `neutral.900` (`#181818`) or add `neutral.950` |
| Divider color | `#606163` | → `neutral.450` (`#646464`, off by 2) — snap |
| Text color | `#f3f3f3` | → `neutral.100` (`#cccccc`) is darker; use `neutral.white` or add `neutral.50` |
| Text font | "Frutiger 65 Bold" 14pt | → `Archivo 600 14px` (`text.body.md` w/ Archivo) |
| Left margin | 13px | snap to `space.lg` (14px) |
| Divider width | 1px | `borders.width.02` |

### 2B. Menu bar (Riddick p.8)

| Property | Value | Token |
|---|---|---|
| Height | 40px | inline — or add `size.menubar` |
| BG | `#2E2E2E` (base) with `#373737` top gradient | ⚠️ **gradient** — gap (§9E) |
| Item count | 5 (File / Edit / Applications / Utility / Help) | — |
| Distance edge → first item | 30px | snap to `space.3xl` (32px) |
| Distance between items | 55px | no clean token — inline or snap to 56px and add primitive |
| Font size | 16px | `text.body.md` |
| Font | "Frutiger 65 Bold" → Archivo 600 | see §9D |
| Hover | Blue highlight `#26B7EA` on item (matches file-menu-dropdown) | `color.brand.tek-blue` (close) |

### 2C. File menu dropdown (Riddick p.8–9)

This is its **own component** — different from the config-menu dropdown (p.9).

| Property | Value | Token mapping |
|---|---|---|
| Outside border | 1px `#26B7EA` | `color.brand.tek-blue` |
| Item height | 60px | inline or `size.menu-item-tall` |
| Font size | 15pt ≈ 20px | `text.heading.sm` (20px) |
| Menu BG | `#C8CACB` | no direct match — snap to `neutral.100` (`#cccccc`) |
| Divider between items | 1px `#FFFFFF` | `neutral.white` |
| Hover highlight | `#26B7EA` (blue) on item BG | `color.brand.tek-blue` |
| Hover text | keep default (black) | `color.text.primary` (light mode) |
| States | **Active + Selected only** — "Hover = Active"; no Focus glow; no Disabled | docs this in Figma variant definition |

### 2D. Config menu dropdown (Riddick p.9)

Different animal. This is the dropdown used *inside* config modals (trigger source, pulse width type, etc.).

| Property | Value | Token mapping |
|---|---|---|
| States | **Active / Hover / Focus / Selected** — and **Focus has blue glow** | full state machine |
| Focus glow | `#54CEEA`, 4px thick, 2px feather | **new** `glow.focus` |
| Extra space between items | yes — to accommodate glow on the top (selected) item | ~10px extra on top item |
| No Disabled state | Items not available are hidden entirely | — |

### 2E. "Add New" rail (right side of canvas — visible in p.27, p.28, p.31, p.32)

| Property | Value | Token |
|---|---|---|
| Width | ~80px | inline |
| BG | `#2E2E2E` (dark panel) | **new** `color.surface.panel` (see bench audit §2B) |
| Item structure | 2-column grid: icon on top, text label below, two items per row | — |
| Item height | ~48px | `space.5xl` (48px) — needs new primitive |
| Item bg (active) | slightly lighter than rail bg | **new** `color.surface.card` |
| Item text | small, centered, 10–11px | `text.label.sm` |
| Items seen in captures | Cursors, Note, Measure, Search, Results Table, Plot | (6-item default) |

### 2F. Status bar (bottom of every screen capture)

Three regions separated by vertical dividers:

**Left region — Channel cluster**
- Active channel chips (Ch1 yellow, Ch3 cyan visible in p.28, p.31) — uses `color.channel.N.default`
- Numeric buttons 1–8 — `Pill Button sm secondary`
- "Add New" buttons (Math / Ref / Bus / DVM / AFG) — smaller icon buttons

**Middle region — Measurement readouts**
- Labels: Horizontal, Trigger, Acquisition
- Each region has ~3 lines of small monospace values
- Font: Geist Mono 11px → `text.mono.sm`
- Separators: thin vertical lines, `color.border.subtle`

**Right region — Run state + timestamp**
- Run/Stop button (green pill when Run) — uses `color.status.success`
- Date/time stamp in small monospace

Spec the status bar as **one component with three named slots**.

---

## 3. Screen-by-screen spec

Each Riddick screen = shell + 1 or 2 specific overlays. Here's every screen in the capture section mapped to what's unique about it.

### S1 — Plot window (PDF p.31, shell is standard)

**Unique content:** canvas split into two vertical regions — top region shows a plot (histogram in the example), bottom shows the waveform view. A small "Meas 1" results card floats in the top-right of the rail area showing measurement statistics.

**Components needed:**
- `Plot Canvas` — empty canvas, grid optional
- `Histogram bars` (vertical lines on grid) — cosmetic only, not interactive
- `Results inline card` — small floating card with stat rows
  - Header: "Meas 1" (link-blue, clickable)
  - Rows: `μ:`, `σ:`, `M:`, `m:`, `N:`
  - Font: Geist Mono 11px → `text.mono.sm`

**Tokens:**
- Canvas BG: new `color.surface.canvas` (`#181818`)
- Grid lines: `neutral.600` (`#333333`) at 20% opacity
- Histogram bars: per-channel color (example shows magenta = `brand.Ch 7`)
- Waveform trace: `color.channel.1.default`
- Results card BG: `color.surface.card`

---

### S2 — Trigger config menu (PDF p.28)

**Unique content:** `TRIGGER` modal docks to the right edge of the canvas (doesn't float). Two tabs implied (`Settings` active, another hidden). Contains:
- "Trigger Type" dropdown (Pulse Width selected) — expanded to show options
- Diagram illustration of the trigger behavior
- "Time Limit" stepper (4 ns)
- "Polarity" section (pulse width icon selector)
- "Mode & Holdoff" footer button

**Components needed (new):**
- **Docked side panel** — like a modal but attached to an edge; full-height minus header/footer
- **Tab strip** inside panel (Settings active, ? hidden) — horizontal tabs, small
- **Dropdown (open state)** — the active config-menu dropdown from §2D
- **Inline diagram slot** — illustrative SVG; not generic
- **Stepper** with unit suffix (ns)
- **Icon selector** (looks like 2 icon-buttons side-by-side, one selected)
- **Modal footer button** — full-width at bottom (Mode & Holdoff)

**Colors:**
- Panel BG: `color.surface.card`
- Panel border left edge: `color.border.default`
- Tab active underline: `color.brand.tek-blue`
- Dropdown selected item: `color.brand.tek-blue` background + white text
- Diagram stroke: `neutral.200` (secondary line art)

**States to build:** default, dropdown-open (shown in capture), dropdown-closed, hover-per-option.

---

### S3 — Add Plot config menu (PDF p.27)

**Unique content:** similar docked side panel, but content is a **thumbnail grid** of plot types to choose from (~6–9 thumbnails visible).

**Components needed (new):**
- **Thumbnail picker grid** — 3-column grid of plot-type tiles
  - Each tile: icon/illustration + label
  - Selected state: tek-blue border + inner glow
  - Hover state: subtle bg lift

**Tokens same as S2**, plus:
- Tile bg default: `color.surface.nested`
- Tile bg hover: +1 step elevation (needs new `color.surface.nested-hover` or lift via opacity)
- Tile border selected: `color.brand.tek-blue`
- Tile glow selected: `glow.focus`

---

### S4 — Cursors (PDF p.30)

**Unique content:** two vertical dashed cursor lines across the canvas. Top-left shows a "readout strip" with cursor values (Δ time, Δ amplitude). Active cursor has orange handle.

**Components needed (new):**
- **Cursor handle** — small pill at top of cursor line; selectable
  - Active: `brand.Radio` orange (`#F45618`) — note Riddick uses this for the active cursor/trigger, not tek-blue
  - Inactive: `neutral.500`
- **Cursor line** — full-height vertical dashed line
  - Stroke 1px, dash pattern 4/4
- **Readout strip** — horizontal row of key:value pairs pinned to top
  - Keys in `text.label.sm`; values in `text.mono.md`
  - Separators: thin vertical dividers `color.border.subtle`

**Tokens:**
- Active handle color: `brand.Radio` → propose new semantic `color.interaction.active` 
- Cursor line: `neutral.200` at 60% opacity

---

### S5 — Results Table (PDF p.32)

**Unique content:** canvas is replaced with a wide data table (12+ columns, ~10 rows). Column header dark gray, alternating row shading, channel chip in the leftmost cell. Bottom half of the screen still shows waveforms.

**Components needed (new):**
- **Data Table** — full-width component with:
  - Fixed header row (darker bg, bold labels)
  - Data rows (alternating subtle bg, `color.surface.card` + `color.surface.nested`)
  - Sortable column indicator (caret on hover)
  - Leftmost cell carries a channel chip (`color.channel.N` pill)
  - Text in `text.mono.sm` for numeric columns, `text.body.sm` for labels
- **Table resize divider** — horizontal bar between table and waveform region; draggable; `color.border.emphasis`

**Tokens:**
- Header bg: `color.surface.card`
- Row bg (even): `color.surface.canvas`
- Row bg (odd): `color.surface.panel`
- Row hover: +1 elevation
- Divider between columns: `color.border.subtle`
- Font: `text.mono.sm` (numeric), `text.body.sm` (labels)

---

### S6 — Save As / Message Box (PDF p.24)

**Unique content:** **nested modals** — the Save As dialog is a modal, and inside it appears an "Information" sub-modal ("F: was not found").

**Components needed:**
- **Modal** (already P0) — with `size: xl` variant for this one
- **Modal tabs (vertical, left-aligned)** — uses the Vertical Tab component from Riddick p.19
- **Modal form rows** — label + input + optional button (Browse)
- **Sub-modal** — smaller modal stacked on top; uses `shadow.elevation.xl`
- **Top warning banner** — full-width red strip with white text; not dismissable in capture
  - BG: `color.status.error.default` (`#e74848`)
  - Text: `neutral.white`
  - Height: ~28px

---

### S7 — About / License info (PDF p.21)

**Unique content:** standard modal with tab-style content (probably "About" + "License"). Not visually audited in detail; assume standard modal + tab component.

---

### S8 — Busy Indicator (PDF p.22)

**Unique content:** full-canvas overlay with the spinning-rectangles progress indicator from Riddick p.11 spec.

**Spec from PDF p.11:**
- 8 rectangles arranged in a circle
- Each rectangle: 3.8 × 11.2 px, radius 1px, `#27A8E0`
- Overall footprint: 50 × 50 px
- Opacity wave: 100% → 6% around the ring

**Token note:** `#27A8E0` is yet *another* blue — close to but not equal to either Riddick's menu highlight `#26B7EA` or DS `tek-blue #33BAEA`. Flag as §9A decision point.

---

### S9 — LAN Reset Config Menu (PDF p.23)

Standard config modal, dark theme, two-button footer (Cancel / OK). Nothing unique after S2 is built.

---

### S10 — Vertical Tabs / Recall menu (PDF p.25)

Uses the vertical-tab component from p.19. Standard otherwise.

---

### S11 — Right-click menus (PDF p.26)

**Unique content:** contextual menus appearing at pointer location, different options per context.

**Components needed (new):**
- **Context menu** — floating menu at arbitrary x/y
  - Shares styles with the Config-menu dropdown (§2D)
  - Optional icon-left per item
  - Submenu caret on items with children

---

### S12 — Equation Editor (PDF p.29)

Specialized mini-app inside a modal. Contains a math expression editor, button palette, function list. Deprioritize — this is a self-contained tool that doesn't drive broader design-system decisions.

---

## 4. Component build order

Build in this order so dependencies are in place before composite screens:

**Sprint 1 — foundations (do first)**
1. Token additions from [bench-audit.md §2–4](../2026-04-22-bench-audit/bench-audit.md#2-color-gaps--new-tokens-to-add) — surface, text, border, status, channel, shadow, glow, space, radius, motion
2. Re-alias existing component tokens to the new semantic layer where relevant

**Sprint 2 — primitives**
3. Pill Button (5 states × 2 variants)
4. Icon Button (3 sizes × 2 shapes × 4 states)
5. Input (inherits from existing `<tek-input>`, add more sizes)
6. Stepper
7. Select / Dropdown — both flavors (file-menu, config-menu per §2C/§2D)
8. Toggle / Checkbox (verify existing components match Riddick gradients; may need a visual refresh)

**Sprint 3 — composite elements**
9. Tab (horizontal + vertical)
10. Modal (header / body / footer / backdrop slots; sm/md/lg/xl sizes)
11. Menu Bar + File Menu Dropdown
12. Context Menu
13. Badge / Chip (incl. channel variant)

**Sprint 4 — Riddick-specific**
14. Title Bar
15. Status Bar (3-region composite)
16. Add-New Rail
17. Results / Measurement Card
18. Data Table
19. Docked Side Panel (for S2 / S3)
20. Thumbnail Picker Grid
21. Cursor Handle + Line + Readout Strip

**Sprint 5 — screens (compose from above)**
22. Build all 12 screens as Figma frames at 1920×1080 (Riddick's `MAIN_WINDOW_MINIMUM_WIDTH = 1370`, but modern oscilloscope layouts are 1920+)

**Sprint 6 — waveforms** *(separate Phase, per your note)*

---

## 5. Figma file structure

When you open [the shell file](https://www.figma.com/design/7L4Zc8IFcs6xKbNFYmU3X1), organize as:

```
Pages:
  📖 README & Build Order        — this spec's Cliff's notes
  🎨 Tokens Reference             — swatches of every semantic token (auto-generated from library would be ideal)
  🧩 Components / Primitives      — Sprint 2 output
  🧩 Components / Composite       — Sprint 3 output  
  🧩 Components / Riddick         — Sprint 4 output
  📱 Screens / Shell              — reusable chrome layout
  📱 Screens / Plot Window        — S1
  📱 Screens / Trigger Config     — S2
  📱 Screens / Add Plot           — S3
  📱 Screens / Cursors            — S4
  📱 Screens / Results Table      — S5
  📱 Screens / Save As            — S6
  📱 Screens / About              — S7
  📱 Screens / Busy Indicator     — S8
  📱 Screens / LAN Reset          — S9
  📱 Screens / Recall Menu        — S10
  📱 Screens / Right-click Menu   — S11
  📱 Screens / Equation Editor    — S12 (defer)
  🧪 Explorations                 — scratch
```

---

## 6. Design tokens needed for Riddick (summary)

Most of these come from the bench audit. Listing them here scoped to what Riddick specifically will consume, for the person who builds the Figma variables.

### Must land before Sprint 3 begins

```
color.surface.canvas            // #181818 (dark) / #ffffff (light)
color.surface.panel             // #1e1e1e / #f5f5f5
color.surface.card              // #252525 / #ffffff (elevated)
color.surface.nested            // #2e2e2e / #ededed

color.text.primary              // #ffffff / #000000
color.text.secondary            // #cccccc / #333333
color.text.tertiary             // #afafaf / #646464
color.text.disabled             // #7b7b7b / #afafaf
color.text.placeholder          // #454545 / #cccccc

color.border.subtle             // neutral.600 / neutral.200
color.border.default            // neutral.500 / neutral.300
color.border.emphasis           // neutral.400 / neutral.500

color.status.success.{default,muted,glow}
color.status.warning.{default,muted,glow}
color.status.error.{default,muted,glow}
color.status.info.{default,muted,glow}          // uses tek-blue

color.channel.{1..8}.default
color.channel.{1..8}.dim                        // 12% alpha

shadow.elevation.{sm,md,lg,xl}
glow.focus                                      // tek-blue ring for focused controls
glow.success | glow.warning | glow.channel      // colored glows

space.{xs,sm,md,base,lg,xl,2xl,3xl,4xl,5xl}    // aliases over s01-s17 primitives
radius.{sm,md,lg,full,circle}
motion.duration.{fast,base,slow}                // 80ms, 150ms, 300ms
motion.easing.{default,in,out,in-out}
```

### Riddick-specific additions (not in bench audit)

```
size.titlebar                   // 24px
size.menubar                    // 40px
size.menu-item-tall             // 60px (file-menu dropdown items)
size.menu-item                  // 30px (config-menu dropdown items)
size.statusbar                  // variable; could be a family of sizes
color.interaction.active        // #F45618 (Radio orange — cursor handle, trigger indicator)
```

---

## 7. Things explicitly out of scope (for now)

- **Waveform rendering tokens** — separate Phase per your note; see [bench-audit.md §6B](../2026-04-22-bench-audit/bench-audit.md#6b-waveforms-will-need-their-own-mini-system)
- **Equation Editor internals** — complex enough to be its own spec; build the shell, stub the body
- **Keyboard shortcut overlays** — not shown in PDF
- **Touch gesture handling** — scope uses touch + mouse; interaction layer is a separate doc
- **Telerik control mapping** — WPF-side concern; `wpf/Tek.Telerik.Overrides.xaml` already exists and can absorb these tokens

---

## 8. What to build vs. what to reuse

| In Figma | What to do |
|---|---|
| `<tek-button>` variants | Reuse the existing Figma component; add pill-button as a **new** variant, not a replacement |
| `<tek-input>` | Reuse; add size variants (Riddick inputs feel denser than the signup-page version) |
| `<tek-checkbox>`, `<tek-radio>`, `<tek-toggle>` | Reuse; verify visuals match Riddick gradients — if not, fork for dense/dark contexts |
| `<tek-modal>` | Extend — Riddick's modals have more structure (header with close + help icon; footer button groups). Propose a `tek-modal-v2` or add slots |
| `<tek-text-link>`, `<tek-footer>` | Reuse unchanged |

---

## 9. Open decisions (flag to Bryan before building)

### 9A. Which blue is THE blue?

| Source | Hex | Name |
|---|---|---|
| DS v2 primitive | `#33BAEA` | `brand.tek-blue` |
| Riddick page 2 "BORDER 1 (BLUE)" | `#0BA3CC` | (darker, for borders only?) |
| Riddick pages 8–9 "Menu blue" | `#26B7EA` | (medium, for menus/tabs) |
| Riddick pages 2, 9 "Blue glow" | `#54CEEA` | (lighter, for focus glow specifically) |
| Riddick "Select" button fill | `#26B7EA` | — |
| Riddick "Focus" border 1 | `#0BA3CC` | — |
| Riddick busy indicator rectangles | `#27A8E0` | — |

**Recommendation:** adopt a three-step blue scale instead of one token.
```
color.brand.blue.dark     // #0BA3CC — borders, emphasis text
color.brand.blue.default  // #33BAEA — default accent (keep DS v2 value)
color.brand.blue.light    // #54CEEA — focus glows
```
Map Riddick `#26B7EA` and `#27A8E0` to `blue.default` (2-digit delta is within perceptual tolerance). Snap busy indicator to one token.

### 9B. Channel color reconciliation

Four channels disagree between Bench and Riddick:

| Ch | Bench (current) | Riddick (PDF) | Decision needed |
|---|---|---|---|
| 3 | `#ea2d56` | `#ea4460` | Pick one |
| 4 | `#7ac323` green | `#91ce32` green | Pick one (brighter in Riddick) |
| 5 | `#fb8b28` orange | `#ff9832` orange | Pick one (slightly more saturated in Riddick) |
| 6 | `#8a38f5` PURPLE | `#2626bf` NAVY | **This is a meaningful disagreement** — Bench chose purple, Riddick spec is navy. Hardware products need consistency here |

Recommend picking Riddick (it's the legacy spec that real hardware follows) and updating DS primitives + Bench. But this is Bryan's call.

### 9C. Radius — 6px or 7px?

Riddick: "Radius: 6px" is called out on virtually every component.
DS v2: `borders.radius.04` = 7px.
Bench: uses 7px (via `borders.radius.04`) for cards, 5px for inputs.

1px delta is perceptually invisible. Options:
- (a) Snap all Riddick to 7px, reconcile components.
- (b) Add a `borders.radius.03b` = 6px primitive explicitly, alias as `radius.md-tight`.

**Recommend (a)** — fewer tokens, invisible visual difference, maintains DS discipline.

### 9D. Font — Frutiger → Geist/Archivo?

Riddick spec references Frutiger 65 Bold. DS v2 uses Archivo + Geist. This is a deliberate modernization; Frutiger is licensed and expensive, Archivo/Geist are open.

**Recommendation:** confirm in writing that the Figma rebuild uses DS v2 fonts (Archivo for display/headings, Geist for body, Geist Mono for numeric). Do not chase Frutiger licensing.

### 9E. Gradients — support them or flatten?

Riddick button fills are **gradients** (e.g., `#DBDBDA` top → `#B2B3B3` bottom). DS v2 has zero gradient support in its token architecture.

Options:
- (a) **Flatten** — pick the middle stop of each gradient as a single flat color. Modernizes the look; loses the "oscilloscope instrument" skeuomorphic feel Riddick has.
- (b) **Add gradient tokens** — introduce `gradient.button.primary.default` etc. Style Dictionary supports this with custom transforms. Significant token-pipeline work.
- (c) **Hybrid** — flatten most surfaces; keep gradients only on the main button fill (most iconic) as a special-case Figma style.

**Recommendation (c)** for the first pass. Revisit after seeing how flat looks side-by-side with the current Riddick screens.

### 9F. Which Riddick screens actually matter right now?

PDF has 12 screen captures. Building all 12 at high fidelity is weeks of work. **Which 3–4 should anchor the initial recreation?** I'd suggest:
1. **S1 Plot Window** — the main app view; anchors the whole layout
2. **S2 Trigger Config Menu** — anchors the "docked side panel" pattern that also covers S3 Add Plot and others
3. **S5 Results Table** — anchors the data-dense pattern (needed for modern features)
4. **S6 Save As / Message Box** — anchors the modal + nested modal + tabs pattern

Getting those four right sets the tone for the rest.

---

## 10. Next steps

1. **Bryan reviews this spec.** Answer the open decisions in §9.
2. **Token additions land in `packages/tokens/src/`** (per Bench audit §7 Day 1–4).
3. **Broc (or Bryan) builds Sprint 2 primitives in Figma** using the new tokens, in [the shell file](https://www.figma.com/design/7L4Zc8IFcs6xKbNFYmU3X1).
4. **I verify** — once Sprint 2 is in Figma, I can pull the library via the MCP and confirm every component binds to tokens (no raw values). Trust but verify, per the project ethos.
5. **Compose screens.** Once Sprint 4 components exist, screens S1/S2/S5/S6 get built in parallel.

---

*End of Riddick alignment spec. Companion: [bench-audit.md](../2026-04-22-bench-audit/bench-audit.md).*
