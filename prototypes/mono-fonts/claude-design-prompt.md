# Claude Design prompt — Iosevka Mono type system

Paste this into a Claude Design session (or prepend to a prototype prompt) so CD uses the Tek monospace system correctly. It's self-contained.

---

You have access to the Tek Design System's custom monospace family, **Iosevka Mono**, in this repo at **`prototypes/mono-fonts/`** (also hosted at `https://bbkemp.github.io/tek-design-system/prototypes/mono-fonts/`).

Use it for **all monospace / instrument-readout / numeric / tabular / code text** in Tek prototypes. Do not substitute Geist Mono, system monospace, or any other mono font.

## Getting the font into a prototype (CSP-safe)

The fonts are pre-embedded as base64 `@font-face`, one CSS file per family, under `prototypes/mono-fonts/css/`. For a prototype, **read the single family file you need from the repo and inline its full contents** into a `<style>` block (base64 is required — the artifact sandbox blocks external font fetches, so inline it rather than linking).

Family files (pick by width; `qp` = quasi-proportional):
```
css/iosevka-mono.css                     css/iosevka-mono-qp.css
css/iosevka-mono-ultra-condensed.css     css/iosevka-mono-qp-ultra-condensed.css
css/iosevka-mono-extra-condensed.css     css/iosevka-mono-qp-extra-condensed.css
css/iosevka-mono-condensed.css           css/iosevka-mono-qp-condensed.css
css/iosevka-mono-semi-condensed.css      css/iosevka-mono-qp-semi-condensed.css
css/iosevka-mono-semi-extended.css       css/iosevka-mono-qp-semi-extended.css
css/iosevka-mono-extended.css            css/iosevka-mono-qp-extended.css
```

## Using it

```css
.readout {
  font-family: 'Iosevka Mono Condensed';   /* the family whose file you inlined */
  font-weight: 500;                          /* 300 Light · 400 Regular · 500 Medium */
  font-style: normal;                        /* italic = Oblique */
  font-feature-settings: "cv04" 7, "cv07" 1, "cv08" 2, "cv09" 3;   /* ALWAYS — DS default shaping */
  letter-spacing: normal;                    /* default; do not add tracking */
  font-size: 72px; line-height: 72px;        /* pick a step from the scale below */
}
```

### Rules
- **Always** set `font-feature-settings: "cv04" 7, "cv07" 1, "cv08" 2, "cv09" 3;` on mono text — that's the approved glyph shaping for 4/7/8/9.
- **Default letter-spacing is `normal`.** Don't add tracking.
- **Mono** families (fixed advance) → aligned numbers, tables, readouts that must line up.
- **QP** families (`Iosevka Mono QP …`, natural advances) → labels, inline mono, running text that should breathe.
- Widths: use narrower families (Condensed/Extra/Ultra) to fit long readouts in tight space; wider (Semi Extended/Extended) for emphasis.

### Weights & slopes
`font-weight`: `300` Light · `400` Regular · `500` Medium. `font-style: italic` selects the Oblique face. Every one of the 14 families carries all six.

### Type scale (`fonts.mono.*`, size / line-height)
```
xs 10/12   sm 12/12   md 13/16   lg 14/20   xl 16/24   2xl 20/32   3xl 24/32
4xl 32/40  5xl 40/48  6xl 48/56  7xl 56/56  8xl 64/64  9xl 72/72
10xl 96/96 11xl 120/120
```
Use these exact size/line-height pairs — don't invent intermediate sizes.

### The 14 family names
Mono: `Iosevka Mono`, `Iosevka Mono Ultra Condensed`, `Iosevka Mono Extra Condensed`, `Iosevka Mono Condensed`, `Iosevka Mono Semi Condensed`, `Iosevka Mono Semi Extended`, `Iosevka Mono Extended`.
QP: the same seven prefixed `Iosevka Mono QP …`.

This is iteration 1 of the mono system — provisional names/faces, but stable enough to build against. Everything else in the prototype still follows the Tek Design System (tokens for color/spacing/radius, Geist for body/UI, Archivo for headings).
