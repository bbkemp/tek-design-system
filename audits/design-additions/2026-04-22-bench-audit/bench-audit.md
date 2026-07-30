# Bench Prototype — Design System Audit

> **⚠️ Partially superseded (2026-07-30):** several components proposed in this audit have since shipped in waves 1–2 of `packages/ui` (status-bar, tabs, badge, toggle, dropdown, modal, progress, data-table, layout primitives). Verify against `packages/ui/src/` before acting on any proposal here; open remainders are tracked as GitHub issues from the 2026-07 backlog triage (see #202's issue tree).

**Artifact audited:** `prototypes/bench/index.html` (latest drop, commit `de6d418`)
**Token baseline:** DS v2 (`packages/tokens/src/`) + DS v2 Figma library (`3wbYstse9TYKlPtCPpZH5X`)
**Audit date:** 2026-04-22

---

## TL;DR

The Bench is token-driven for **colors (84% adoption)** but goes raw for **every other dimension — typography, spacing, radius, shadows**. That's because those semantic layers don't exist in DS v2 yet. The colors it uses raw are either already in DS primitives but not aliased (`success-green #42b54c`, `warning-yellow #e0b732`), or represent a clean expansion opportunity (surface elevation scale, text-tone scale).

The bigger finding: **Bench invented 12 component patterns DS v2 doesn't have** (readouts, meters, steppers, keypads, sliders, pill buttons, rail buttons, tabs-as-dropdown, chips/badges, scale-view/timeline, status bar, waveform traces). Most of those also appear in Riddick screens — which means every new token/component we add here carries over to Phase 2.

---

## 1. Components to build in Figma

Grouped by priority. Each row is one Figma component set (with variants).

### P0 — Unblocks Bench + Riddick both

| Component | Why we need it | Variants (Figma props) | Notes |
|---|---|---|---|
| **Pill Button** | Bench uses it for every primary action; DS `Button` is 6px-radius rectangular | `size`: sm/md/lg · `variant`: primary/secondary · `state`: default/hover/pressed/disabled · `icon-left`, `icon-right`: bool | Radius `999px` (token `borders.radius.full` exists). Reuse existing `color/button/*` semantics — works as-is |
| **Icon Button** | Bench has 52 button instances; many are icon-only (rail, modal close, stepper +/-) | `size`: 24/32/44px · `shape`: square/circle · `state`: default/hover/pressed/disabled | Square variant needed for toolbar; circle for rail. Rail sizes settle around 44px |
| **Stepper / Numeric Input** | Riddick uses these heavily (time limit, voltage, offset); Bench has 4 instances | `size`: sm/md · `unit`: inline/adjacent · `state`: default/focus/filled/disabled · `type`: integer/decimal/scientific | Composes input + up/down icon buttons. Unit label uses Geist Mono |
| **Select / Dropdown** | Neither DS nor Bench has a themed select; Riddick has these everywhere (trigger type, source, slope) | `size`: sm/md/lg · `state`: default/open/focus/disabled · `content`: text/text+icon | Open state needs the "Config menu dropdown" pattern from Riddick p.9 (active/hover/focus/selected + blue glow on top selected item) |
| **Tab (Horizontal)** | Riddick uses horizontal tabs across most config menus | `state`: default/hover/active/disabled · `divider`: on/off | Border `1px #59595C`, radius `6px top only`, fill `#C2C1C1` per Riddick spec; map to DS neutral scale |
| **Tab (Vertical)** | Riddick Recall menu, Save As dialog | Same as horizontal but 60px wide × 27px tall items | Same token structure, different layout |
| **Modal (Dialog)** | `<tek-modal>` exists but is minimal. Riddick has 3 modal patterns: config menu, message box, info alert | `size`: sm/md/lg/xl · `header`: with/without · `footer-buttons`: none/one-centered/two-right-aligned · `has-tabs`: bool | Formalize the header/body/footer slot pattern. Backdrop opacity tokens needed |
| **Menu Bar + Dropdown** | Riddick's top-level app chrome (File/Edit/Applications/Utility/Help) | `item-count`: variable · `state-per-item`: default/hover/open | Menu bar height `40px`; dropdown item height `60px`; per p.9 there are two dropdown flavors (file-menu vs config-menu) — we need both |
| **Badge / Chip** | Channel indicators (Bench, Riddick); warning banners; status pills | `type`: dot/pill/tag · `color`: neutral/accent/per-channel/status · `size`: sm/md | Color swatch driven by `--c` inline var or per-channel semantic |
| **Toggle Switch** | DS has `<tek-toggle>` but Bench draws custom CSS-styled checkboxes | Align Figma toggle component to existing `color.selector.*` tokens | Audit whether `<tek-toggle>` actually matches Bench visuals |

### P1 — Waveform / oscilloscope specifics

| Component | Why we need it | Variants | Notes |
|---|---|---|---|
| **Readout (numeric display)** | Large/small measurement values in monospace; all Bench readouts use raw px type | `size`: compact/standard/hero · `state`: active/inactive · `includes-unit`: bool · `label-position`: top/left/inline | Geist Mono; sizes in Bench are 11/12/22/34px — formalize as tokens |
| **Meter / Magnitude Bar** | Bench `.meter`, `.meter-badge`, `.meter-row` — visual magnitude indicator | `orientation`: horizontal/vertical · `state`: nominal/warn/alert · `width`: fixed/fluid | Uses `--glow-success` / `--glow-warning` tones |
| **Keypad** | Numeric entry grid (Bench, Riddick) | `grid`: 3×4/4×4 · `include-scientific`: bool · `include-sign`: bool | Modal-hosted; treat as composite component |
| **Slider (Range Input)** | Bench has 3 sliders in Tweaks panel; not in DS | `size`: sm/md · `marks`: none/discrete/labeled · `state`: default/focus/disabled · `dual-thumb`: bool | Thumb + track + fill; accent-color `tek-blue` |
| **Progress / Busy Indicator** | Riddick p.11 spec: 8 spinning rectangles, 50×50px, radius 1px, `#27A8E0` | `type`: spinner/linear · `state`: indeterminate/determinate · `size`: sm/md/lg | Note: Riddick `#27A8E0` differs from `tek-blue #33BAEA` — decide: keep as-is or unify |
| **Scale View / Timeline** | Bench `.scaleview`, `.sc-grid`, `.sc-handle`, `.sc-window` — scrubber with playhead | Standalone component — grid underlay + trace overlay + handle + window selector | Waveform-adjacent; the full waveform component comes later |
| **Scroll Bar (custom)** | Riddick p.10 spec: 4px wide, rounded, active `#616264` / focus `#363738` | `orientation`: V/H · `state`: active/focus | Styled over native scrollbar for dark-canvas consistency |
| **Status Bar** | Full-width bottom bar with channel chips + clock + layout selector | Layout region; documents the pattern of segmented regions with dividers | One composite; Riddick bottom bar has same structure |

### P2 — Nice-to-have but less blocking

- **Tooltip** — no Bench usage but Riddick hover states may need them; small effort
- **Data Table** — Riddick "Results Table" (p.32); Bench has a data-view lite version
- **Right-click menu / Context menu** — Riddick p.26 has these; same tokens as dropdown
- **Loader Tab** — Riddick p.11 spec (`14×33px` tab over `200×33px` bar); only if we're rebuilding the busy indicator exactly
- **Equation editor** — Riddick p.29; this is a mini specialized app inside a modal, deprioritize
- **Plot thumbnail picker** — Riddick Add Plot menu (p.27) uses a thumbnail grid; treat as content pattern, not its own component

---

## 2. Color gaps — new tokens to add

### 2A. Already in primitives, but needs a semantic alias

These literal values exist in `packages/tokens/src/primitives/color.json` but Bench had to hardcode because no semantic alias exists:

| Primitive value | Primitive path | Proposed semantic token | Used in Bench for |
|---|---|---|---|
| `#42b54c` | `colors.ui.success-green` | `color.status.success.default` + `color.glow.success` | `.meter.ok` glow, trace "in spec" indicator |
| `#e0b732` | `colors.ui.warning-yellow` | `color.status.warning.default` + `color.glow.warning` | `.meter.warn` glow, trace "near spec" indicator |
| `#e74848` | `colors.ui.error-red` | `color.status.error.default` | DS has this in `color.input.border.error` only — promote to top-level status |

**Proposed `color.status.*` domain:**
```
color.status.success.{default, muted, glow}
color.status.warning.{default, muted, glow}
color.status.error.{default, muted, glow}
color.status.info.{default, muted, glow}        // uses tek-blue
```

### 2B. New scale needed — surface elevation

Bench uses 4 dark surfaces (`--bg`, `--bg-2`, `--bg-3`, `--bg-4`) plus light inverses. DS has only `color.canvas.background.default` (one surface). The 4-tier pattern is the same one Riddick uses (canvas → panel → card → nested).

| Bench var | Value (dark) | Proposed DS token | Notes |
|---|---|---|---|
| `--bg` | `#181818` | `color.surface.canvas` | Page background. Maps to `neutral.900` |
| `--bg-2` | `#1e1e1e` | `color.surface.panel` | Toolbars, rails, status bar. Maps to `neutral.800` |
| `--bg-3` | `#252525` | `color.surface.card` | Modals, cards, elevated containers. Maps to `neutral.700` |
| `--bg-4` | `#2e2e2e` | `color.surface.nested` | Nested panels (tabs inside modals, input fields on cards). Maps to `neutral.600` |

Light mode inverses map cleanly: `neutral.100/200/300/white`.

### 2C. New scale needed — text tone

Bench uses 5 foreground tones (`--fg` through `--fg-5`). DS has `color.input.text.*` per state, but no general text-tone scale.

| Bench var | Value (dark) | Proposed DS token | Usage |
|---|---|---|---|
| `--fg` | `#ffffff` | `color.text.primary` | Headings, active values |
| `--fg-2` | `#cccccc` | `color.text.secondary` | Body copy |
| `--fg-3` | `#afafaf` | `color.text.tertiary` | Hints, captions |
| `--fg-4` | `#7b7b7b` | `color.text.disabled` | Disabled states |
| `--fg-5` | `#454545` | `color.text.placeholder` | Empty input hints |

### 2D. New scale needed — border

Bench has `--border` and `--border-2`; DS only has per-component border tokens. Need general-purpose borders for dividers, cards, etc.

| Proposed | Dark value | Light value | Use for |
|---|---|---|---|
| `color.border.subtle` | `#333333` (`neutral.600`) | `neutral.200` | Dividers, subtle rules |
| `color.border.default` | `#454545` (`neutral.500`) | `neutral.300` | Standard card/modal borders |
| `color.border.emphasis` | `#7b7b7b` (`neutral.400`) | `neutral.500` | Focused cards, active tabs |

### 2E. Channel colors — alias the existing primitives

Bench `--ch1` through `--ch6` hardcode channel hex values. DS already has `colors.brand.Ch 1` through `colors.brand.Ch 8` in primitives. **Alias them as semantic tokens with paired "dim" (12% alpha) variants.**

| Bench | DS primitive | Proposed semantic |
|---|---|---|
| `--ch1` `#fff53b` | `brand.Ch 1` | `color.channel.1.default` + `.dim` (12% alpha) |
| `--ch2` `#20cfd3` | `brand.Ch 2` | `color.channel.2.default` + `.dim` |
| `--ch3` `#ea2d56` | `brand.Ch 3` | `color.channel.3.default` + `.dim` |
| `--ch4` `#7ac323` | `brand.Ch 4` | `color.channel.4.default` + `.dim` |
| `--ch5` `#fb8b28` | `brand.Ch 5` | `color.channel.5.default` + `.dim` |
| `--ch6` `#8a38f5` | `brand.Ch 6` | `color.channel.6.default` + `.dim` |

**Important discrepancy to resolve:** the Riddick spec (p.13) lists channel colors that **disagree with both Bench and DS primitives**:

| Channel | DS v2 primitive | Bench | Riddick spec |
|---|---|---|---|
| Ch 3 | (check) | `#ea2d56` | `234, 68, 96` = `#ea4460` |
| Ch 4 | (check) | `#7ac323` | `145, 206, 50` = `#91ce32` |
| Ch 5 | (check) | `#fb8b28` | `255, 152, 50` = `#ff9832` |
| Ch 6 | (check) | `#8a38f5` (purple) | `38, 38, 191` = `#2626bf` (blue) |

**Recommendation:** pick one source of truth, document the pick, update the other two. Ch 6 is the loudest mismatch — Bench is purple, Riddick is navy blue. If instruments-on-bench are being cross-referenced with instruments-on-scope, this *has* to agree.

### 2F. Raw literals in Bench with no clean home

| Literal | Count | Context | Recommendation |
|---|---|---|---|
| `#141414`, `#0b0b0b`, `#1a1a1a`, `#0a0a0a`, `#0e0e0e` | 1–3 each | Micro-shade tweaks inside animated states | **Remove.** These are cosmetic rounding errors. Snap to the new `surface.*` tokens |
| `rgba(0,0,0,0.5)` / `0.6` | 1 each | Modal + tweaks shadows | Absorb into new shadow tokens (see §4) |
| `#000` | 8 | Pure black overlays | Use `neutral.black` primitive; formalize as `color.overlay.scrim` if it's a backdrop |

---

## 3. Typography gaps — new tokens to add

**Current state:** DS v2 has a full primitive typography scale (`heading.5xl`→`2xs`, `text.5xl`→`xs`, families, line-heights) but **zero semantic typography tokens**. Bench hardcodes every single font-size.

### Proposed semantic type scale

Map the Bench's actual sizes to a named scale:

| Proposed semantic | px (dark) | Family | Weight | Line height | Bench usage |
|---|---|---|---|---|---|
| `text.display` | 34 | Geist Mono | 400 | 1.0 | Hero readouts (main measurement value) |
| `text.title` | 22 | Geist Mono | 400 | 1.2 | Secondary readout, metadata |
| `text.heading.md` | 16 | Archivo | 600 | 1.25 | Section headings (card titles) |
| `text.heading.sm` | 13 | Archivo | 600 | 1.4 | Small section headings, tweaks panel H3 |
| `text.body.md` | 14 | Geist | 400 | 1.4 | Primary body, button labels, inputs |
| `text.body.sm` | 12 | Geist | 400 | 1.4 | Secondary body, modal copy |
| `text.label.sm` | 10 | Geist | 500 | 1.2 | Uppercase labels, tweaks panel labels |
| `text.mono.md` | 12 | Geist Mono | 400 | 1.2 | Tabular data, technical values, units |
| `text.mono.sm` | 11 | Geist Mono | 400 | 1.2 | Compact tabular, stepper units |

### Riddick crossover

The Riddick spec is written in **Frutiger 65 Bold** (per `TITLEBAR_TEXT_FONT = "Frutiger 65 Bold"` in p.20) and uses pt sizes (14–16pt). Bench uses Geist/Archivo in px. **This is a deliberate modernization** — the new Riddick Figma should use Geist/Archivo, not Frutiger. Note this explicitly in the spec so we don't chase a Frutiger license later.

---

## 4. Spacing / radius / shadow gaps — new tokens to add

### 4A. Spacing — semantic layer over existing primitives

DS has `spacing.s00` through `s33` primitives (0–320px, named by index). Bench uses ~18 distinct px values — not all align to the primitive scale neatly. Introduce a **named semantic layer** on top.

| Proposed | px | Aliased primitive | Bench hit count |
|---|---|---|---|
| `space.xs` | 4 | `s03` | 6 |
| `space.sm` | 6 | `s04` | 30 ← most frequent |
| `space.md` | 8 | `s05` | 17 |
| `space.base` | 10 | `s06` | 18 |
| `space.lg` | 14 | `s08` | 8 |
| `space.xl` | 16 | `s09` | 7 |
| `space.2xl` | 22 | — needs new primitive `s10b` (22px) | 5 |
| `space.3xl` | 32 | `s13` | 6 |

**Primitive gap:** Bench uses `22px` five times; DS primitives jump `s10 (20) → s11 (24)`. Either snap Bench to 20px/24px or add a 22px primitive. **Recommendation:** snap to `24px`. Visual diff is negligible.

### 4B. Radius — semantic layer

DS has 17 radius primitives (some duplicated: `05`=`06`=13px is a bug). Bench uses 5 distinct radii.

| Proposed | px | Aliased primitive | Bench usage |
|---|---|---|---|
| `radius.sm` | 5 | `03` | Inputs, selects (8 uses) |
| `radius.md` | 7 | `04` | Cards, small containers (10 uses) |
| `radius.lg` | 11 | `05` | Tweaks panel, modal cards (2 uses) |
| `radius.full` | 9999 | `full` | Pill buttons, chips (6 uses) |
| `radius.circle` | `50%` | (new) | Badge dots, circular indicators (10 uses) |

**Clean up primitives while we're here:** `radius.06` and `radius.07` are both 13px — drop one.

### 4C. Shadow / elevation — new domain entirely

DS has zero shadow tokens; Bench has **11 distinct shadow values**, most involving colored glows (channel-colored, success-green, warning-yellow, tek-blue focus).

Propose two shadow families:

**Neutral elevation (for modals, tweaks panels, menus):**
```
shadow.elevation.sm     // 0 1px 4px rgba(0,0,0,0.3)    — tooltips, small popovers
shadow.elevation.md     // 0 4px 20px rgba(0,0,0,0.5)   — fixed panels, tweaks
shadow.elevation.lg     // 0 8px 32px rgba(0,0,0,0.6)   — modals, dialogs
shadow.elevation.xl     // 0 16px 48px rgba(0,0,0,0.7)  — dialogs on dialogs
```

**Colored glow (for focus states, trace emphasis, status):**
```
glow.focus              // 0 0 10px color.brand.tek-blue
glow.success            // 0 0 6px color.status.success (bench uses 4/6/8/14px variants — settle on 6px)
glow.warning            // 0 0 6px color.status.warning
glow.channel            // 0 0 6px <channel>        — driven by --c, keep as composable
```

---

## 5. Tokens to ADJUST (existing tokens that are wrong or confusing)

| Current | Issue | Fix |
|---|---|---|
| `borders.radius.06` (13px) + `borders.radius.07` (13px) | Duplicate values | Drop `07`; renumber or leave gap |
| `color.button.background.default` = `neutral.800` in dark mode | Dark button on dark panel (`neutral.800` canvas) gives zero contrast at elevation. Bench's pill buttons use `neutral.700` (one step lighter) for this reason | Consider shifting to `neutral.700` or introducing `color.button.background.elevated` |
| `color.input.text.filled` (dark) = `neutral.100` vs `color.input.text.default` = `neutral.300` | Reads backwards — filled should be MORE prominent than placeholder. Actual values seem correct but names are ambiguous | Rename `text.default` → `text.placeholder` for clarity |
| `color.modal.shadow.default` = `colors.ui.shadow` (`#00000033`) | One shadow value regardless of modal size. Bench actually uses deeper shadows for heavier modals | Replace with the `shadow.elevation.md/lg/xl` scale proposed above |
| `brand.Ch 3`, `Ch 4`, `Ch 5`, `Ch 6` | Disagree with Riddick spec values (see §2E) | Reconcile with a decision: Bench wins / Riddick wins / new values |
| No `prefers-reduced-motion` awareness in token layer | Bench has 19 transitions, all unconditional. Motion tokens would let us cut them at source | Add `motion.duration.*` + `motion.easing.*` and respect `prefers-reduced-motion` in `tek.complete.css` |

---

## 6. Other insights — supporting this type of work going forward

### 6A. The Bench is a "bundled drop" artifact — source isn't committed

Every Bench iteration is a ~424KB `index.html` blob dropped by Claude Desktop (CD). That's great for fast iteration but **we can't token-check it at CI time** and **we can't diff what changed meaningfully** between drops. Two options:

- **Option A (cheap):** add a build-time grep that fails CI if `prototypes/bench/index.html` contains hex literals outside the channel-color regex. Forces drops to go through tokens.
- **Option B (expensive):** fork/rebuild the Bench with a proper Vite + Web Components setup so it consumes `@bbkemp/tokens` directly. Pays off across Riddick and future prototypes.

**Recommend A now, B when time allows.**

### 6B. Waveforms will need their own mini-system

When you tackle waveforms next, the tokens that go in the "waveform" domain are non-obvious:

- **Grid** — line weight, opacity, dashing, major/minor steps
- **Trace** — stroke width, glow radius, dim-state opacity, cursor-highlight multiplier
- **Axis labels** — tick font (monospace), label font (sans), unit placement
- **Cursors** — handle shape, handle color (per-cursor? tek-blue?), line style (solid/dashed), readout placement
- **Selection / window** — fill opacity (Bench uses 12–14%), border style
- **Annotation markers** — trigger arrow (orange, Riddick uses `#F45618`), measurement anchors, search marks

Riddick gives you precedents for all of these — worth extracting into a `waveform/` token sub-domain in one pass rather than piecemeal.

### 6C. Dark is the only mode the Bench tests

DS v2 has light mode wired up, but the Bench is dark-only. When waveforms and Riddick components get built in Figma, **make every component in both modes from day one** — catching mode-parity bugs at the Figma stage is ~100× cheaper than at code review.

### 6D. The Bench teaches us what a "dense" product UI needs

Every DS v2 component so far has been sign-up/login-page scale (big buttons, generous spacing, single-purpose screens). The Bench is the first thing that's actually *dense* — 52 buttons on screen, 6 channels of data, 15+ readouts, toolbars on 3 sides. The primitives that made this work:
- Tight spacing (4, 6, 8, 10 px gaps dominate)
- Small type (10–14px is the meat of the UI)
- Thin borders (0.5px used 22 times)
- Monospace for every numeric value

Any future dense product — waveform, test runner, measurement table — will want the same primitives. Don't let the "marketing-scale" DS v2 components set the ceiling.

### 6E. Icon strategy needs a decision soon

Bench has 7 ad-hoc inline SVGs. Riddick will need **dozens** (every toolbar button, every menu item, every status indicator). Options:

- **Inline SVG library** — one TS file exporting named symbols; cheap, version-controlled, SSR-safe
- **Icon font** — small, easy, bad for accessibility
- **SVG sprite** — single asset, `<use>` references; good middle ground

**Recommend: inline SVG library as a new package `@bbkemp/icons`**, published alongside tokens. Each icon exports as a component and accepts `size` + `color` props that read from tokens.

---

## 7. Prioritized action list (if you pick one thing each day)

| Day | Action | Output |
|---|---|---|
| 1 | Promote `success-green`, `warning-yellow`, `error-red` primitives into a `color.status.*` semantic domain | One new section in `tokens.json` + `tokens.light.json`, regenerate CSS/XAML |
| 2 | Add `color.surface.{canvas, panel, card, nested}` + `color.text.{primary, secondary, tertiary, disabled, placeholder}` + `color.border.{subtle, default, emphasis}` | Three new sections — biggest single unlock for both Bench and Riddick |
| 3 | Add `space.*`, `radius.*` semantic aliases over existing primitives | Cleans up components once we adopt them |
| 4 | Add `shadow.elevation.*` + `glow.*` tokens (new domain) | Enables proper modal/dialog elevation and focus rings |
| 5 | Reconcile channel colors Bench ↔ Riddick ↔ DS primitives | Pick one truth, update the other two |
| 6 | Figma: build the 10 P0 components from §1 (pill button, icon button, stepper, select, tabs, modal, menu bar, badge, toggle, dropdown) using the new tokens | Unblocks Riddick recreation |
| 7 | Figma: add P1 waveform components (readout, meter, keypad, slider, progress, scale view, scroll bar, status bar) | Unblocks Bench-in-Figma recreation |

---

*End of Bench audit. Next deliverable: [riddick-alignment-spec.md](../2026-04-22-riddick/riddick-alignment-spec.md).*
