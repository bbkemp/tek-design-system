# Figma Build — Session Notes

**Figma file:** [Riddick — DS v2 Alignment](https://www.figma.com/design/7L4Zc8IFcs6xKbNFYmU3X1)
**Session:** 2026-04-22 (follow-up to PR #31)
**Builder:** Claude via Figma MCP (`use_figma` plugin API)

---

## What landed in the Figma file

The empty shell created in the prior session has now been populated with the 4 anchor screens from [riddick-alignment-spec.md §9F](./riddick-alignment-spec.md#9f-which-riddick-screens-actually-matter-right-now) plus a README page and a shared App Shell layout.

| Page | Content | Node ID | Status |
|---|---|---|---|
| 📖 README | Session summary, build status, open decisions pointer | 6:2 | ✅ |
| 🎨 Tokens | *empty* — scaffolded | — | ⏸ next pass |
| 🧩 Components / Primitives | *empty* — scaffolded | — | ⏸ Sprint 2 |
| 🧩 Components / Composite | *empty* — scaffolded | — | ⏸ Sprint 3 |
| 🧩 Components / Riddick | *empty* — scaffolded | — | ⏸ Sprint 4 |
| 📱 Screens / Shell | Shared app chrome (title + menu + canvas frame + rail + status bar) at 1920×1080 | 7:2 | ✅ |
| 📱 Screens / Plot Window | S1 — Plot 1 (histogram) + Waveform View + Meas 1 floating card | 9:2 | ✅ |
| 📱 Screens / Trigger Config | S2 — docked TRIGGER panel, open Trigger Type dropdown, preview diagram, stepper, polarity selector | 10:2 | ✅ |
| 📱 Screens / Add Plot | *empty* — scaffolded | — | ⏸ |
| 📱 Screens / Cursors | *empty* — scaffolded | — | ⏸ |
| 📱 Screens / Results Table | S5 — 10-row measurement table (12 cols) + waveform lower half | 11:2 | ✅ |
| 📱 Screens / Save As | S6 — Save As modal w/ left tabs + nested INFORMATION modal + red WARNING banner | 12:2 | ✅ |
| 📱 Screens / About | *empty* — scaffolded | — | ⏸ |
| 📱 Screens / Busy Indicator | *empty* — scaffolded | — | ⏸ |
| 📱 Screens / LAN Reset | *empty* — scaffolded | — | ⏸ |
| 📱 Screens / Recall Menu | *empty* — scaffolded | — | ⏸ |
| 📱 Screens / Right-click Menu | *empty* — scaffolded | — | ⏸ |
| 📱 Screens / Equation Editor | *empty* — scaffolded | — | ⏸ |
| 🧪 Explorations | *empty* — scaffolded | — | — |

### Direct links

- README: https://www.figma.com/design/7L4Zc8IFcs6xKbNFYmU3X1?node-id=6-2
- Shell: https://www.figma.com/design/7L4Zc8IFcs6xKbNFYmU3X1?node-id=7-2
- Plot Window: https://www.figma.com/design/7L4Zc8IFcs6xKbNFYmU3X1?node-id=9-2
- Trigger Config: https://www.figma.com/design/7L4Zc8IFcs6xKbNFYmU3X1?node-id=10-2
- Results Table: https://www.figma.com/design/7L4Zc8IFcs6xKbNFYmU3X1?node-id=11-2
- Save As: https://www.figma.com/design/7L4Zc8IFcs6xKbNFYmU3X1?node-id=12-2

---

## Important caveats

### These are rectangles + text, NOT component instances

Every "button", "input", "card", "modal header" etc. in the current build is a raw `<Rectangle>` + `<Text>` — not an instance of a DS v2 component. Why:

- DS v2 Figma components don't bind to the proposed semantic tokens yet (surface/text/border/status/channel from [bench-audit.md §2](../2026-04-22-bench-audit/bench-audit.md#2-color-gaps--new-tokens-to-add))
- Binding them requires landing those tokens in `packages/tokens/src/` first, then the Figma Token Push syncs them to the DS v2 library
- Once that round-trip is done, a follow-up pass swaps rectangles for component instances and pins fills to variables

Treat every fill as a placeholder mapped to an intended token. The colors used match the proposed token values exactly.

### Colors used (all inline hex, mapped to intended semantic tokens)

| Hex | Intended token | Used for |
|---|---|---|
| `#181818` | `color.surface.canvas` | Page background, screen bg |
| `#1e1e1e` | `color.surface.panel` | Menu bar, rail, status bar, headers |
| `#252525` | `color.surface.card` | Modals, chips, buttons |
| `#2e2e2e` | `color.surface.nested` | Inputs inside modals |
| `#ffffff` | `color.text.primary` | Headings, active values |
| `#cccccc` | `color.text.secondary` | Body, button labels |
| `#afafaf` | `color.text.tertiary` | Hints, column headers, meta |
| `#454545` | `color.border.default` | Card borders, dividers |
| `#333333` | `color.border.subtle` | Section dividers, row separators |
| `#33baea` | `color.brand.blue.default` | Accent (active tab underline, link text, focus) |
| `#54ceea` | `color.brand.blue.light` | Focus glow |
| `#42b54c` | `color.status.success.default` | Run/Triggered button |
| `#e0b732` | `color.status.warning.default` | 50% indicator |
| `#e74848` | `color.status.error.default` | Warning banner, Required button |
| `#f45618` | `color.interaction.active` | Trigger arrow, cursor handle |
| `#fff53b` | `color.channel.1.default` | Ch 1 trace/tag |
| `#20cfd3` | `color.channel.2.default` | Ch 3 trace/tag |
| `#e254a6` | `color.channel.7.default` | Histogram bars (Meas 1) |

### Fonts used

Geist (Regular/Medium/Semibold/Bold) for body, labels, buttons. Archivo (Bold/SemiBold) for headings. Geist Mono (Regular) for all numeric values. Inter fallback if Geist isn't available. Per Riddick spec §9D recommendation (modernize from Frutiger).

### Known imperfections

- Fidelity is "good enough first pass," not pixel-perfect. Layout positions, exact text sizes, and icon choices will want polish from a human designer.
- Menu bar item spacing uses a naive `length * 11 + 30` — should use actual glyph widths
- Window control icons (`—`, `▢`, `×`) are text characters rather than proper SVG paths
- Status bar uses emoji/text for trash and caret icons
- Rail "Add New" items are single-word labels rather than icon + label per Riddick
- No hover/focus/pressed states on any control — default state only

### What's NOT in the file

- Tokens reference page (swatches + type samples) — page exists but empty
- Any component definitions in the Components/* pages
- The remaining 8 screens from the spec (Add Plot, Cursors, About, Busy Indicator, LAN Reset, Recall Menu, Right-click Menu, Equation Editor)
- Any auto-layout — all positioning is absolute
- Figma local variables or styles — everything is inline hex

---

## Reproducibility

This was built via `use_figma` MCP calls. To rebuild or extend, the pattern that worked:

1. **Helper functions at top of each call** — `rect()`, `box()`, `txt()`, and a hex parser that handles both 3-char and 6-char hex
2. **Token table inline** — `const T = { canvas: "#181818", ... }` — swap these out once real tokens exist
3. **One screen per `use_figma` call** — keeps each call under the 50k char limit and isolates failures
4. **Vector traces use RELATIVE path coords + offset in `vec.y`** — critical gotcha: absolute coords cause the vector bbox to misalign

### Gotcha we hit and fixed

First pass put all waveform traces at the top of the canvas regardless of intended y position. Cause: `figma.createVector()` sets the vector's bounding-box top-left to the minimum (x,y) found in the path data. Setting `vec.y = someAbsoluteY` then positions that bbox at `someAbsoluteY`, not the centerline.

**Fix:** path coords relative to a small centerline (e.g., 30px), then `vec.y = absoluteCenterlineY - 30`. See the trace rebuild call in this session for the exact pattern.

---

## Next steps (in recommended order)

1. **Bryan answers [spec §9 open decisions](./riddick-alignment-spec.md#9-open-decisions-flag-to-bryan-before-building)** — especially 9A (blue scale), 9B (Ch 6 purple vs navy), 9E (gradients)
2. **Land the proposed semantic tokens** in `packages/tokens/src/` per [bench-audit.md §7](../2026-04-22-bench-audit/bench-audit.md#7-prioritized-action-list-if-you-pick-one-thing-each-day) Day 1–4
3. **Figma Token Push syncs** the new tokens to the DS v2 library
4. **Follow-up session** — swap rectangles for component instances, wire fills to variables, polish fidelity on the 4 existing screens
5. **Build the remaining 8 screens** using the same pattern
6. **Tokens reference page** — visual swatches + type samples auto-generated from the library

---

*Session completed 2026-04-22. Companion: [bench-audit.md](../2026-04-22-bench-audit/bench-audit.md), [riddick-alignment-spec.md](./riddick-alignment-spec.md).*
