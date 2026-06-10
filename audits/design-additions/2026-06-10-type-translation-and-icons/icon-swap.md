# Lucide icon swap — Tek Express rr Figma file

**Date:** 2026-06-10
**Target file:** `GHQiFymvaysFwFi8ccvG91` (Tek Express rr — Screens + Component Additions)

## What changed

90 emoji glyphs replaced with Lucide-sourced SVG icon nodes across all 3 pages. Each swap:
- Created a Figma node from Lucide SVG (`figma.createNodeFromSvg`)
- Sized to `fontSize × 1.1` of the original text node (height-matched)
- Stroke set to the original text fill color (hex extracted from the text's fills paint)
- Layer named `tek-icon/{name} (PROPOSED)` so the future Tek icon set can absorb them

## Counts by glyph

| Was | Now (Lucide name) | Count |
|---|---|---|
| ▶ | `play` | 11 |
| ⏸ | `pause` | 11 |
| 🌚 | `moon` | 11 |
| ✕ | `x` | 9 |
| ▾ | `chevron-down` | 13 |
| − | `minus` | 8 |
| □ | `square` | 8 |
| 📁 | `folder` | 4 |
| › | `chevron-right` | 4 |
| 🔒 | `lock` | 3 |
| ◧ | `panel-left` | 2 |
| ◉ | `activity` | 2 |
| ▤ | `rows` | 2 |
| 🗎 | `file-text` | 2 |
| **Total** | | **90** |

All swaps had stroke-width 1.5, viewBox 24×24, rounded line caps + joins — standard Lucide.

## Why this is interim

These are raw SVG nodes flagged `tek-icon/{name} (PROPOSED)`, not yet published components. The proper next step is to **publish a tek-icon component set in DS-v2** so future cc work can `importComponentByKeyAsync` instead of re-embedding SVG.

Spec for the component set:

| Property | Value |
|---|---|
| Naming | `tek-icon/{name}` (Lucide slug) |
| Size variant axis | `sm (16) / md (20) / lg (24) / xl (32)` |
| Stroke width | bound to `📐 borders/width/03` (1.5px) — does NOT scale with size |
| Stroke color | bound to new semantic `color/icon/default` (defaults to `color/modal/text/default`) |
| ViewBox | 24×24 across all sizes (SVG handles the rest) |

### Initial set (20 icons covering Tek Express)

`play`, `pause`, `stop`, `chevron-down`, `chevron-up`, `chevron-left`, `chevron-right`, `x`, `minus`, `square` (maximize), `folder`, `file-text`, `pencil`, `check`, `circle-check`, `circle-x`, `info`, `settings`, `moon`, `sun`

### New semantic tokens

- `color/icon/default` → `color/modal/text/default`
- `color/icon/muted` → `color/input/text/default`
- `color/icon/disabled` → `color/input/text/disabled`
- `color/icon/success` → `colors/status/success`
- `color/icon/warning` → `colors/status/warning`
- `color/icon/error` → `colors/status/error`

## Implementation order

1. **Ship `tek-icon` component set in DS-v2** (~1 day) — 20 icons × 4 sizes = 80 variants
2. **Add 6 semantic color tokens** above
3. **Re-run icon swap** to instance the components, replacing the raw SVG nodes from this pass
4. **Update `tek-figma-build` skill** — add "use `tek-icon` components for every glyph; never emoji" as a hard rule

## Cross-references

- [type-translation-table.md](./type-translation-table.md) — companion deterministic type lookup
- [`tek-figma-build/SKILL.md`](../../../.claude/skills/tek-figma-build/SKILL.md) — receives both tables
- [`component-additions.md`](../2026-06-09-ds-v2-rr-component-additions/component-additions.md) §12 — Lucide flag from prior audit
