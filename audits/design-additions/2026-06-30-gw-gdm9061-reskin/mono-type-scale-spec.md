# Mono type scale spec — Iosevka Mono

**Date:** 2026-07-08 · Status: **proposed** (create in Figma → Token Push; not hand-edited into `fonts.json`)

Adds a **dedicated** mono type scale (`fonts.mono.*`) so the mono family is usable from a 10 px config label up to a 72 px primary readout. Keeps every current mono step (which today borrows the `text` scale, 10–40) unchanged and **appends** four steps (`6xl`–`9xl`) to reach the headline sizes. Additive — does not touch `fonts.text.*` or `fonts.heading.*`.

Family: `fonts.family.Mono` (`Geist Mono` today → **`Iosevka Mono`**), already exists.

## 1. Size + line-height scale (`fonts.mono.*`)

| step | size | line-height | picked up from |
|---|---|---|---|
| `xs`  | 10 | 12 | text xs *(current mono)* |
| `sm`  | 12 | 12 | text sm |
| `md`  | 13 | 16 | text md |
| `lg`  | 14 | 20 | text lg |
| `xl`  | 16 | 24 | text xl |
| `2xl` | 20 | 32 | text 2xl |
| `3xl` | 24 | 32 | text 3xl |
| `4xl` | 32 | 40 | text 4xl |
| `5xl` | 40 | 48 | text 5xl *(current mono top)* |
| `6xl` | 48 | 56 | **heading 2xl** |
| `7xl` | 56 | 56 | **heading 3xl** |
| `8xl` | 64 | 64 | **heading 4xl** |
| `9xl` | 72 | 72 | **heading 5xl** |
| `10xl` | 96 | 96 | **new — display readout** |
| `11xl` | 120 | 120 | **new — hero readout** |

Continuous mono ramp **10 → 120**, 15 steps. `xs`–`5xl` are byte-for-byte the current mono/text values (nothing existing changes); `6xl`–`9xl` map to the heading scale; `10xl`–`11xl` are new display sizes for large instrument readouts (line-height = size, set tight).

## 2. Emitted CSS variables (via Token Push, `name/tek/kebab`)

```
--tek-fonts-mono-size-xs … --tek-fonts-mono-size-11xl
--tek-fonts-mono-line-height-xs … --tek-fonts-mono-line-height-11xl
```

## 3. Token JSON (goes under `fonts` in `primitives/fonts.json`, sibling to text/heading)

> Created as **Figma Variables** and written by **Token Push** — do NOT hand-edit `fonts.json` (it's overwritten on the next push). Shown here as the target shape.

```json
"mono": {
  "size": {
    "xs": { "$value": 10, "$type": "number" },
    "sm": { "$value": 12, "$type": "number" },
    "md": { "$value": 13, "$type": "number" },
    "lg": { "$value": 14, "$type": "number" },
    "xl": { "$value": 16, "$type": "number" },
    "2xl": { "$value": 20, "$type": "number" },
    "3xl": { "$value": 24, "$type": "number" },
    "4xl": { "$value": 32, "$type": "number" },
    "5xl": { "$value": 40, "$type": "number" },
    "6xl": { "$value": 48, "$type": "number" },
    "7xl": { "$value": 56, "$type": "number" },
    "8xl": { "$value": 64, "$type": "number" },
    "9xl": { "$value": 72, "$type": "number" },
    "10xl": { "$value": 96, "$type": "number" },
    "11xl": { "$value": 120, "$type": "number" }
  },
  "line-height": {
    "xs": { "$value": 12, "$type": "number" },
    "sm": { "$value": 12, "$type": "number" },
    "md": { "$value": 16, "$type": "number" },
    "lg": { "$value": 20, "$type": "number" },
    "xl": { "$value": 24, "$type": "number" },
    "2xl": { "$value": 32, "$type": "number" },
    "3xl": { "$value": 32, "$type": "number" },
    "4xl": { "$value": 40, "$type": "number" },
    "5xl": { "$value": 48, "$type": "number" },
    "6xl": { "$value": 56, "$type": "number" },
    "7xl": { "$value": 56, "$type": "number" },
    "8xl": { "$value": 64, "$type": "number" },
    "9xl": { "$value": 72, "$type": "number" },
    "10xl": { "$value": 96, "$type": "number" },
    "11xl": { "$value": 120, "$type": "number" }
  }
}
```

## 4. Text styles — base set (Regular weight, Normal-width family)

Mirrors the current mono styles (size steps at one weight), extended to `9xl`. Naming follows the existing convention (`text/<category>/<weight>/<size>`, e.g. `text/header/regular/md`).

| Style | Family | Weight | Size | Line-height |
|---|---|---|---|---|
| `text/mono/regular/xs`  | Iosevka Mono | 400 | `mono-size-xs` (10)  | `mono-line-height-xs` (12) |
| `text/mono/regular/sm`  | Iosevka Mono | 400 | 12 | 12 |
| `text/mono/regular/md`  | Iosevka Mono | 400 | 13 | 16 |
| `text/mono/regular/lg`  | Iosevka Mono | 400 | 14 | 20 |
| `text/mono/regular/xl`  | Iosevka Mono | 400 | 16 | 24 |
| `text/mono/regular/2xl` | Iosevka Mono | 400 | 20 | 32 |
| `text/mono/regular/3xl` | Iosevka Mono | 400 | 24 | 32 |
| `text/mono/regular/4xl` | Iosevka Mono | 400 | 32 | 40 |
| `text/mono/regular/5xl` | Iosevka Mono | 400 | 40 | 48 |
| `text/mono/regular/6xl` | Iosevka Mono | 400 | 48 | 56 |
| `text/mono/regular/7xl` | Iosevka Mono | 400 | 56 | 56 |
| `text/mono/regular/8xl` | Iosevka Mono | 400 | 64 | 64 |
| `text/mono/regular/9xl` | Iosevka Mono | 400 | 72 | 72 |
| `text/mono/regular/10xl` | Iosevka Mono | 400 | 96 | 96 |
| `text/mono/regular/11xl` | Iosevka Mono | 400 | 120 | 120 |

## 5. How it lands
1. Create the `fonts.mono.size.*` + `fonts.mono.line-height.*` **Figma Variables** (15 each). → Token Push regenerates `fonts.json` → `--tek-fonts-mono-*`.
2. Create the **Figma text styles** above, bound to the mono family + mono size/line-height variables.
3. Figma MCP must be re-authed for me to create these directly; otherwise this table is the apply-by-hand reference. (`add-token` skill is the DS-sanctioned path for the variables.)

## Open decisions
- **Weights:** base set is Regular only (matches today). Iosevka Mono ships 9 weights — do we add per-weight styles (e.g. `text/mono/medium/*`, `…/semibold/*`) once weights are chosen? Likely a small subset (Light/Medium/SemiBold), not all 9.
- **Widths (family-per-width):** each kept width is its own family (`Iosevka Mono Condensed`, …). Styles then become `text/mono/<width>/<weight>/<size>`. Which widths get the full style set is decided from the Mono Type Builder audition.
- **Letter-spacing:** none specified (mono default). Add per-step tracking if readouts need it.
