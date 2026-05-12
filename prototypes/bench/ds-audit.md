# Tek Bench — DS v2 Outliers Audit

**Audited prototype:** `prototypes/bench/index.html` (interactive 4-channel SMU bench, iPad 11" Pro, 1194×834)
**Library audited against:** DS v2 (Figma `3wbYstse9TYKlPtCPpZH5X`, library key `lk-a2552d…1bef9488`)
**Output Figma file:** [Tek Bench — DS Audit](https://www.figma.com/design/CDsvS7ftG7r7EipHBHlHbw)
**Date:** 2026-05-05

## Headline

The bench is a high-density product UI; **DS v2 today is form-shaped** (Sign In, Input, Button, Modal, TextLink). Of the ~12 distinct UI patterns the bench needs, **DS v2 covers 3 directly (Modal, Button, Input) and 0 of the patterns that dominate the screen** (Card, Tag, Segmented Control, Nav Rail, Channel Pill, Numeric Keypad, Telemetry/Trace).

That's the gap. The bench replica in Figma was built almost entirely from primitives.

## What we used vs. what's missing

| Bench section | DS v2 has it? | What was used in the replica |
|---|---|---|
| Page bg `#181818` | ✅ `color/canvas/background/default` | Bound to wrapper fill |
| Channel card surface | ⚠ closest = `color/modal/background/default` | Built from primitive `#1e1e1e` |
| Channel card | ❌ no Card component | Auto-layout frame primitive |
| Tabs row badge: dot + "CH N" + "SMU" tag | ❌ no Tag component | Primitive ellipse + text + bordered frame |
| Chart/Data segmented control | ❌ no Segmented Control | Primitive 2-button frame (P0 outlier — flagged in node name) |
| Settings icon button (per card) | ❌ no Icon Button | Empty bordered square |
| Telemetry overlay (`SRC … MEAS …`) | ❌ no telemetry/status row pattern | Single mono text |
| Chart trace + glow + grid | ❌ no chart/data-viz primitives | Hand-drawn `Vector` polyline + drop shadow |
| Primary readout (`+0.045 V`) | ❌ no large-numeric readout style | Bare text, Inter Bold 30 (Geist not avail. in Figma) |
| Mini fields (`SRC`, `RNG`, `VLIM`/`ILIM`, `SNS`) | ⚠ DS v2 `Input` exists but is form-sized | Primitive bordered frames |
| Left rail | ❌ no Nav Rail / vertical icon bar | Primitive `aside` + 6 placeholder icon frames |
| Rail OUT button (large square) | ❌ no large status/output toggle | Primitive frame |
| Channel pill nav (CH 1–6) | ❌ no Pill / channel-selector | Primitive pill rows with colored dot, label, "SMU" tag |
| Menu button (bottom-right) | ⚠ DS v2 `Button` could fit | Primitive (because it sits next to non-DS pills — using DS button would create a visual seam) |
| Modals (Layout / Graph Settings / Keypad / Picker) | ✅ DS v2 `Modal` | Not yet built; would import `292965497c…041a` |

**Components imported from DS v2:** `Modal` only (planned). Variables imported: `color/canvas/background/default`.

## Variable gaps (semantic tokens DS v2 doesn't have)

DS v2's semantic palette is namespaced by **component-family** (`color/button/*`, `color/input/*`, `color/selector/*`, `color/modal/*`, `color/canvas/*`, `color/footer/*`). It has no general-purpose surface/foreground tokens. Bench needs:

| Need | Closest DS v2 var | Used in replica |
|---|---|---|
| Card surface (raised) | `color/modal/background/default` | Hardcoded `#1e1e1e` |
| Chart well (recessed, darker than canvas) | none | Hardcoded `#141414` |
| Subtle border (cards, inputs, dividers) | none — only `color/button/border/*`, `color/input/border/*` | Hardcoded `#afafaf @ 18%` and `#454545` |
| Foreground text — primary | none — only `color/button/text/*`, `color/input/text/*` | Hardcoded `#fff` / `#eaeaea` |
| Foreground text — secondary / muted | none | Hardcoded `#7b7b7b` / `#afafaf` |
| Footer / bottom-bar bg | `color/footer/background/default` (probably fits) | Used for chnav |
| **Channel accent** (yellow / lime / orange / purple / cyan / red) | none | Hardcoded — see "Channel palette" below |

### Spacing tokens — major gap

**DS v2 has no spacing variables.** All spacing in the bench replica is hardcoded (8, 10, 12, 14 px). Spacing tokens exist in Simple Design System (`Space/0`–`Space/4000`) but DS v2 doesn't expose any. **P0 audit finding** — without spacing tokens, the system can't enforce rhythm.

### Channel palette — entirely new

The bench uses six channel accents that aren't in DS v2:

| CH | Hex | Use |
|---|---|---|
| 1 | `#fff53b` (yellow) | trace, dot, glow |
| 2 | `#20cfd3` (cyan/teal) | trace, dot |
| 3 | `#f65959` (red) | trace, dot |
| 4 | `#9bdc3a` (lime) | trace, dot |
| 5 | `#ff7e2d` (orange) | trace, dot |
| 6 | `#9d6cf3` (violet) | trace, dot |

These need a new variable collection: `color/channel/{1..6}/{trace, fill, glow}` — three modes per channel for the trace stroke, the dot fill, and the glow color. **P0 outlier** — channel identity is the visual spine of the product.

## Component gaps — prioritized

### P0 — without these, the bench can't be expressed in DS components
1. **Card** — surface container with stroke + corner radius + content slots. Bench uses 4 of these as primary structure.
2. **Tag** (compact, bordered or filled) — used 10× per screen (CH labels, SMU markers, MEAS V/I, 4-W/2-W, NPLC).
3. **Segmented Control** (Chart/Data) — appears once per channel card.
4. **Channel Pill** (or generalized "Identity Pill") — colored dot + label + secondary tag, in active/inactive states.
5. **Nav Rail** (vertical icon column with grouped items + footer slot for OUT) — rail icon button is the atom.
6. **Numeric Keypad** (modal variant) — see `kp-modal`. 4×4 grid + display + units selector.
7. **Channel-color tokens** — see palette table above.

### P1 — high-value but expressible as composition of P0 + primitives
8. **Telemetry/status row** — small mono text strip showing live config (`SRC +100.000mA  MEAS V  4-W  NPLC 1.0`).
9. **Mini Field** (label + value, bordered, compact) — the SRC/RNG/VLIM/ILIM/SNS quartet.
10. **Output Toggle** (large state button with vertical text and active/inactive fills) — the rail's OUT button.
11. **Drag separator handle** — vertical 6×40 grabber between cards.

### P2 — chart territory; probably belongs in a separate "data viz" library
12. **Trace component** — color-themed stroke + glow effect + optional grid
13. **Chart frame** — header strip (telemetry) + plot area + axis grid

## Type & font gap

The prototype uses **Geist** and **Geist Mono** (Vercel). Neither is a default Figma font. Replica uses Inter / Inter Bold as substitute. If Geist is the intended Tek system font for benches, it needs to be:
- Added to Tektronix Figma org fonts
- Documented in DS v2 typography
- Mapped in tek-design-system codebase (currently the repo's CSS uses `-apple-system, BlinkMacSystemFont, sans-serif`)

If Geist is not the target font, the prototype itself needs to update.

## Recommendations

1. **Decide P0 component scope** — at least Card, Tag, Segmented Control, and channel-color tokens — to bring DS v2 from "form library" to "product UI library."
2. **Add a spacing variable scale** to DS v2 before any other component lands — every new component will hardcode without it.
3. **Define foreground/text and surface/elevation semantic tokens** that aren't component-family-namespaced.
4. **Resolve the font question** — either add Geist to the org or align the bench prototype to whatever DS v2 standardizes on.
5. **Channel-accent tokens are first-class** — they aren't decoration; they're the product's identity dimension.

## What this audit is not

This is a **gap audit**, not a redesign critique. Where the bench diverges from DS v2 it's because DS v2 doesn't have the affordance, not because the bench got it wrong. The next move is closing the gap, not changing the prototype.

## Build artifacts

- Figma: <https://www.figma.com/design/CDsvS7ftG7r7EipHBHlHbw> (Tek Bench — DS Audit)
- Reference: `prototypes/bench/index.html` (run via `python3 -m http.server 3000` from repo root, then open `/prototypes/bench/index.html`)
- Comparison screenshots: `/tmp/bench-step1..4.png` (ephemeral) — Figma file is the durable record
