# DS-v2 layout primitives — Figma build record

**Date:** 2026-07-22
**Owner:** Bryan Kemp (built by Claude per [ADR-0002](../../../docs/adr/0002-layout-primitives.md))
**Status:** Created in Figma — please review
**Where:** DS-v2 (`3wbYstse9TYKlPtCPpZH5X`) → page **v2.02** → section **Components (new)** (`8372:371`)

---

## TL;DR

Four layout-primitive component sets created on v2.02, everything variable-bound (spacing, radius, fills, widths — zero raw values where a variable exists). **No new variables were needed** — the existing primitive scales (`spacing/sNN`, `spacing/cNN`, `borders/radius/NN`) and the `color/canvas/background/default` semantic covered every property. Two deviations from the ADR-0002 draft, both evidence-driven and detailed below.

| Set | Node ID | Variants | Axes |
|---|---|---|---|
| Stack | `8376:373` | 9 | Gap = s02, s03, s04, s05, s06, s07, s08, s09, s11 |
| Row | `8377:373` | 9 | Gap = s02, s03, s04, s05, s06, s07, s08, s09, s11 |
| Grid | `8377:446` | 9 | Columns = 2/3/4 × Gap = s05/s09/s11 |
| Page | `8378:350` | 3 | Breakpoint = Mobile / SM / XL |

## Deviations from the ADR-0002 draft (flagged, not silent)

1. **`s03`, `s04`, `s07` added to the Stack/Row gap axis.** The draft listed six steps (s02, s05, s06, s08, s09, s11). The sign-in reference pages — the first refactor target — use `s04` (6px, label→input field gap), `s07` (12px, signup action stack), and `s03` (4px, footer toggle row). A gap axis that can't express the reference pages fails its own "capped to real-world steps" test; all three are real-world steps, so they're in — on both sides (Figma variants + Lit `gap` steps).
2. **Page uses a Breakpoint axis, not a Gap axis.** `page-layout.css` shows page-level layout varies by breakpoint, not by gap: the `.wrap` contract is width × padding × alignment per container query. The three variants encode it exactly:
   - **Mobile** — width `c02` (384), padding `s17`/`s13`/`s11` (top/sides/bottom), top-aligned
   - **SM** — width `c04` (640), padding `s17`/`s19`/`s11`
   - **XL** — width `c07` (1280), padding `s19` all sides, content vertically centered
   - All: section rhythm gap `s17` (48) on the Content frame, fill bound to `color/canvas/background/default`.

## Build findings

- **Slots cannot be created via the plugin API** (`createSlot` / `convertToSlot` absent). Each variant contains a `Content` frame carrying the bound gap — these need **manual conversion to slots** in the Figma UI (right-click → convert to slot) before the sets are published. 30 frames total, one per variant.
- **Grid gaps ARE variable-bindable** (`gridColumnGap` / `gridRowGap`) — the Grid set's gaps are bound, not raw.
- **Width is variable-bindable** — Page variant widths are bound to `spacing/c02`/`c04`/`c07`, not typed in.
- Grid auto-layout frames do **not** hug content (plugin API); Grid Content frames are sized explicitly from track math. Cosmetic only — placeholders get replaced by slotted content.

## For Bryan to review

- [ ] Convert the 30 `Content` frames to slots (Stack 9, Row 9, Grid 9, Page 3)
- [ ] Approve the s04 axis addition and Page Breakpoint axis (ADR-0002 amended in this PR)
- [ ] Placeholder rectangles inside Content frames are sample content (bound to `colors/neutral/600` + `radius/03`) — delete or keep as slot defaults, your call
- [ ] Publish the library update when happy — then ask Claude to re-run the Code Connect mappings (attempted 2026-07-22, blocked on "Published component not found"; sources are ready in the README node map)

## Code mapping (next step in this batch)

`tek-stack`, `tek-row`, `tek-grid`, `tek-page` Lit components in `packages/ui`; `gap` prop accepts token step names only (`gap="s05"`); Page maps breakpoints via container queries as in `page-layout.css`. Code Connect after both sides exist.
