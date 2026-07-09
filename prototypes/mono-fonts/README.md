# Iosevka Mono — type system handoff (iteration 1)

The custom **Iosevka Mono** family for the Tek Design System, packaged so it's usable **right now** in Claude Design prototypes and Figma — without waiting on the full Figma/Token-Push implementation.

> **This is iteration 1, not the LOCK.** Names, the exact face set, and the token wiring are provisional. When the config is finalized we prune to keepers, wire `--tek-fonts-mono*` tokens + `@bbkemp/ui`, and align Figma name tables. Until then, this folder is the source of truth for what's proposed. Audition/pivot in the [Mono Type Builder](../font-lab/) (left untouched).

Hosted (GitHub Pages): **`https://bbkemp.github.io/tek-design-system/prototypes/mono-fonts/`**

---

## The system at a glance

Built from this keep-list (2026-07-09):

| Axis | Values |
|---|---|
| **Widths** (7) | Ultra Condensed · Extra Condensed · Condensed · Semi Condensed · **Normal** · Semi Extended · Extended |
| **Weights** (3) | Light `300` · **Regular `400`** · Medium `500` |
| **Slopes** (2) | Upright · Oblique (CSS `font-style: italic`) |
| **Spacing** (2) | **Mono** (fixed advance) · **QP** = Quasi-Proportional (natural advances) |
| **Default features** | `font-feature-settings: "cv04" 7, "cv07" 1, "cv08" 2, "cv09" 3;` |
| **Default letter-spacing** | `normal` (0) — correct for mono/QP at every size |

→ **84 faces** in **14 CSS families** (width × spacing). Weights and slopes live *inside* each family via `font-weight` / `font-style`.

### Type scale (`fonts.mono.*`, 15 steps, 10 → 120)

| step | size | line-height | | step | size | line-height |
|---|---|---|---|---|---|---|
| `xs`  | 10 | 12 | | `6xl`  | 48 | 56 |
| `sm`  | 12 | 12 | | `7xl`  | 56 | 56 |
| `md`  | 13 | 16 | | `8xl`  | 64 | 64 |
| `lg`  | 14 | 20 | | `9xl`  | 72 | 72 |
| `xl`  | 16 | 24 | | `10xl` | 96 | 96 |
| `2xl` | 20 | 32 | | `11xl` | 120 | 120 |
| `3xl` | 24 | 32 | | | | |
| `4xl` | 32 | 40 | | | | |
| `5xl` | 40 | 48 | | | | |

Display steps `10xl`/`11xl` use line-height = size (set tight) for large instrument readouts.

---

## 1. Use in Claude Design (CSP-safe, base64)

CD artifacts can't fetch external fonts, so each family ships **self-contained base64** — one file per family so you only pull the width you need (~0.9 MB / 6 faces).

Fetch the file for the width(s) you need from `css/` and inline its contents into the prototype's `<style>`, then:

```css
/* contents of css/iosevka-mono-condensed.css pasted here */

:root { --mono: 'Iosevka Mono Condensed'; }
.readout {
  font-family: var(--mono);
  font-weight: 500;                 /* 300 Light · 400 Regular · 500 Medium */
  font-feature-settings: "cv04" 7, "cv07" 1, "cv08" 2, "cv09" 3;   /* DS default */
  letter-spacing: normal;
  font-size: 72px; line-height: 72px;   /* 9xl */
}
.readout em { font-style: italic; }  /* oblique */
```

- **CSS family names** are one per width — see the table below. `font-weight` picks Light/Regular/Medium; `font-style: italic` picks Oblique.
- Always apply the **default features** on mono text (that's the DS-approved `4 7 8 9` shaping).
- Use the **QP** families (`Iosevka Mono QP …`) for text that should breathe (labels, prose-in-mono); use **Mono** families for aligned numeric readouts/tables.

`css/all.css` `@import`s all 14 (handy for normal web; for CD, inline the single file you need).

## 2. Use on normal web (by URL)

For anything *not* under CD's CSP (the sign-in prototypes, a normal page), skip base64 and reference the hosted woff2:

```html
<link rel="stylesheet" href="https://bbkemp.github.io/tek-design-system/prototypes/mono-fonts/css/iosevka-mono--url.css">
```

`iosevka-mono--url.css` declares all 84 faces, pointing at the already-hosted `font-lab/fonts/*.woff2` (nothing duplicated).

## 3. Use in Figma

1. Download **[`ttf/iosevka-mono-ttf.zip`](https://bbkemp.github.io/tek-design-system/prototypes/mono-fonts/ttf/iosevka-mono-ttf.zip)** (all 84 faces, ~14 MB) — this is the grab-it-every-time spot.
2. Unzip → install the `.ttf` (Font Book on macOS).
3. In Figma, the fonts appear under **two families**: **`Iosevka Mono`** and **`Iosevka Mono QP`**, each with **42 styles** (width + weight + slope in the style name — e.g. `Medium Condensed`, `Light Extended Oblique`, `Semi-Condensed Oblique`).
4. Apply the default OpenType features in the text panel: `cv04=7, cv07=1, cv08=2, cv09=3`.

> Heads-up: in this iteration Figma groups by the font's built-in names (2 families, width-in-style). The CSS uses family-per-width instead (below). Aligning both to one scheme is a LOCK task.

---

## Family reference (14 CSS families)

| CSS `font-family` | file (`css/`) | Figma family | Figma style pattern |
|---|---|---|---|
| `Iosevka Mono` | `iosevka-mono.css` | Iosevka Mono | Regular / Light / Medium (+ Oblique) |
| `Iosevka Mono Ultra Condensed` | `iosevka-mono-ultra-condensed.css` | Iosevka Mono | `[weight] Ultra-Condensed [Oblique]` |
| `Iosevka Mono Extra Condensed` | `iosevka-mono-extra-condensed.css` | Iosevka Mono | `[weight] Extra-Condensed [Oblique]` |
| `Iosevka Mono Condensed` | `iosevka-mono-condensed.css` | Iosevka Mono | `[weight] Condensed [Oblique]` |
| `Iosevka Mono Semi Condensed` | `iosevka-mono-semi-condensed.css` | Iosevka Mono | `[weight] Semi-Condensed [Oblique]` |
| `Iosevka Mono Semi Extended` | `iosevka-mono-semi-extended.css` | Iosevka Mono | `[weight] Semi-Extended [Oblique]` |
| `Iosevka Mono Extended` | `iosevka-mono-extended.css` | Iosevka Mono | `[weight] Extended [Oblique]` |
| `Iosevka Mono QP` | `iosevka-mono-qp.css` | Iosevka Mono QP | Regular / Light / Medium (+ Oblique) |
| `Iosevka Mono QP Ultra Condensed` | `iosevka-mono-qp-ultra-condensed.css` | Iosevka Mono QP | `[weight] Ultra-Condensed [Oblique]` |
| `Iosevka Mono QP Extra Condensed` | `iosevka-mono-qp-extra-condensed.css` | Iosevka Mono QP | `[weight] Extra-Condensed [Oblique]` |
| `Iosevka Mono QP Condensed` | `iosevka-mono-qp-condensed.css` | Iosevka Mono QP | `[weight] Condensed [Oblique]` |
| `Iosevka Mono QP Semi Condensed` | `iosevka-mono-qp-semi-condensed.css` | Iosevka Mono QP | `[weight] Semi-Condensed [Oblique]` |
| `Iosevka Mono QP Semi Extended` | `iosevka-mono-qp-semi-extended.css` | Iosevka Mono QP | `[weight] Semi-Extended [Oblique]` |
| `Iosevka Mono QP Extended` | `iosevka-mono-qp-extended.css` | Iosevka Mono QP | `[weight] Extended [Oblique]` |

Each family carries 6 faces: weights `300 / 400 / 500` × `normal / italic`. Full face→name map is in [`manifest.json`](./manifest.json).

---

## Regenerating

Everything here is generated from the subset woff2 in [`../font-lab/fonts/`](../font-lab/) by:

```bash
python3 prototypes/mono-fonts/build-handoff.py
```

Edit the keep-list at the top of that script when the audition changes, re-run, and it rewrites `css/`, `ttf/iosevka-mono-ttf.zip`, and `manifest.json`. (Loose `.ttf` are intermediate and gitignored; the zip is the committed download.)

## Status → next (the LOCK)

- Prune 84 faces → chosen keepers (drops repo weight)
- `fonts.mono.*` size/line-height variables + `fonts/family/mono*` → Token Push → `--tek-fonts-mono*`
- Bundle keeper woff2 + `@font-face` into `@bbkemp/ui`
- Align Figma name tables to the family-per-width scheme so Figma == CSS == tokens
