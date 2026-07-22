# DS-v2 wave-2 components — build record

**Date:** 2026-07-22 (living doc — grows as wave 2 lands)
**Owner:** Bryan Kemp (built by Claude to the [rr-additions audit specs](../2026-06-09-ds-v2-rr-component-additions/component-additions.md))
**Where:** DS-v2 → page v2.02 → section **Components (wave 2)** (`8388:401`)
**Scope (spec §10 order, minus wave-1 ships):** status-bar → group-box → navigation-panel → progress → data-table + status-pill

**§11 open decisions adopted as recommended** (flag to change): dark+light everywhere · data-table unvirtualized v1 · column widths via CSS custom property · group-box nesting = indented instance · nav-panel variant = manual override + container-query default · status-bar "running" is a real state.

---

## 1. tek-status-bar

Built to spec §4.

### Figma

| Set | Node ID | Variants |
|---|---|---|
| StatusBar | `8406:409` | Status = Ready/Running/Success/Warning/Error (Variant=Default) + Variant=Error, Variant=Loading (sparse matrix) |

- 1024×32 bars: build-flag region (sample = Badge Warning instance — production omits it, per spec never baked in), status text `text/mono/xs` style, actions region (Icon instance).
- Top border only (`strokeTopWeight` → width/01, other sides → width/none).
- Tint variants layer the tint token **over** the default background (two fills) — mirrors as `background-color` + `background-image` gradient in code.

### New semantic tokens (9) — `color/statusbar/*`

`background/{default,error,loading}`, `border/default`, `text/{default,running,success,warning,error}`. The spec's token table listed 7; the two tint backgrounds its Variant table implies were missing — added as raw RGBA (red/blue at 10%; aliases can't carry opacity) ⚠ please review the 10% strength.

### Code

`packages/ui/src/status-bar/status-bar.ts` — `variant` + `status` attrs, three slots (`build-flag`, default, `actions`), `role=status` on the text region, ellipsis on overflow.

**Verified:** 10/10 Playwright checks + screenshot matching the Figma set. Harness: `prototypes/component-library/statusbar-test.html`.

### For Bryan

- [ ] Review the 10% tint strength on error/loading backgrounds
- [x] Published + Code Connect mapped — all 11 sets across both waves (2026-07-22)
- [x] Token Push done — all 38 wave-2 tokens live in packages/tokens (2026-07-22)

## 2. tek-group-box

Built to spec §1.

- **Figma:** GroupBox set (`8408:456`) — Variant=Default/Error + State=Disabled (sparse). **Title is in-flow inside the box as the first row (Bryan, 2026-07-22 — matches the Tek Express reference; the border-straddling fieldset legend was built first and rejected).** Sample content = Selector instances; `Content` frame awaits slot conversion.
- **New tokens (5):** `color/canvas/background/raised` (⚠ prerequisite the spec assumed but the file lacked — dark n700 / light white, please review) + `color/groupbox/{background/default,border/default,border/error,legend/default}`. `groupbox/background` **aliases the raised token** (semantic→semantic) per the spec's surface-tier intent.
- **Title type:** `text/heading/regular/xs` (Archivo) — **confirmed by Bryan** as the intended exception to the Geist-only component rule (group titles are headings).
- **Code:** `role=group` container with in-flow title (`packages/ui/src/group-box/group-box.ts`) — `label` (always shown, per spec), `variant=error`, `disabled`. Verified **8/8 checks** + screenshot. Harness: `prototypes/component-library/groupbox-test.html`.

## 3. tek-navigation-panel

Built to spec §6.

- **Figma:** NavigationPanel set (`8411:503`) — Variant = Full (184) / Text-only (96) / Icon-only (56). Pure chrome composition: Brand region (Tek Icon + Archivo 2xs wordmark), Nav region = **instance of the shipped Tabs Orientation=Vertical set** (never reimplemented, per the spec's composition rule), spacer, Foot region (divider + Button instances) pinned to bottom. Icon-only nav shows icon placeholders (icon tabs are app-slotted content in code).
- **New tokens (4):** `color/navigation/{background,border,text,divider}/default` — bg aliases `color/canvas/background/raised`.
- **⚠ PROPOSED:** widths 184/96/56 have no spacing tokens — raw in Figma/code, overridable via `--tek-navigation-panel-width`. Propose `spacing/panel/{full,text,icon}` if these recur.
- **Loading state** (spec's rare tabs→spinner swap) is app-slotted content, not a component variant — deliberately omitted.
- **Code:** `role=navigation`, three slots, foot auto-hides when empty, variant widths; container-query switching is the app-shell's job per spec. Verified **8/8 checks** (incl. tek-change propagating through the slotted tabs) + screenshot. Harness: `prototypes/component-library/navpanel-test.html`.

## 4. tek-progress

Built to spec §5.

- **Figma:** Progress set (`8413:560`) — Determinate × Size(sm/md/lg) × Tone(4) = 12 + one Indeterminate. Full anatomy per spec: label (`text/regular/sm`), track (radius/02, width/01 border, clipped fill at 62%), meta row (`text/mono/xs`). Indeterminate stripe is static in Figma; animation is code-only per spec.
- **New tokens (8):** `color/progress/track/{background,border}`, `fill/{default,success,warning,error}`, `label/default`, `meta/default`.
- **Deviation flagged:** spec's `progress-complete` event ships as **`tek-complete`** per the DS event convention.
- **Code:** `variant/value/max/size/tone/paused`, label + meta slots, live percent readout, full progressbar ARIA (aria-busy for indeterminate), CSS-only stripe animation frozen under `prefers-reduced-motion` (spec requirement, tested in a reduced-motion context). Verified **8/8 checks** + screenshot. Harness: `prototypes/component-library/progress-test.html`.

## 5. tek-data-table — wave-2 finale

Built to spec §2, **v1 readonly only per the spec's own scoping note** (selectable/editable are v2; the attr warns + falls back).

- **Figma:** TableRow set (`8415:512`, 6 row states — tints layer over the raised row bg; Selected uses the flush 3px accent pattern) + composed DataTable (`8415:513`, header + row instances in the radius/05 clipped container). Fixed cell widths are the contract (corpus 17:30 — users scan by position).
- **tek-status-pill: RESOLVED — it's tek-badge.** The anatomy's `tone="info"` = `type="blue"`; all other tones exist. Cells slot badges; no duplicate component built.
- **New tokens (12):** `color/table/header/{background,text}`, `row/background/{default,alt,hover,selected,error,success}`, `row/border/selected`, `divider/default`, `text/{default,muted}`. ⚠ Four are raw alpha tints (hover white 6%, selected blue 12%, error red 10%, success green 10%); ⚠ `row/background/alt` light-mode is a placeholder (= white) until striping ships (spec marks striping TBD).
- **Columns API:** single `--tek-table-columns` custom prop (e.g. `"2fr 1fr 1.5fr 0.6fr"`) — the §11 "CSS custom property" decision, one prop instead of the spec's per-column `--col-N` sketch (flagged).
- **Code:** five elements in `packages/ui/src/data-table/data-table.ts` (`tek-data-table`, `-head`, `-body`, `-row`, `-cell`) — full table ARIA, head/body context auto-detected, ellipsis truncation, row states, unvirtualized per §11. Verified **12/12 checks** (incl. header/body column alignment and real-hover tinting) + screenshot. Harness: `prototypes/component-library/datatable-test.html`.

## Wave 2 complete

status-bar ✓ · group-box ✓ · navigation-panel ✓ · progress ✓ · data-table ✓ (status-pill resolved as tek-badge)

**Cumulative new tokens this wave: 38** (statusbar 9 · groupbox 5 incl. canvas/raised · navigation 4 · progress 8 · table 12) — one Token Push covers all.
**Code Connect backlog once Bryan publishes:** Tab, Tabs, Badge, Tooltip, Spinner (wave 1) + StatusBar, GroupBox, NavigationPanel, Progress, TableRow, DataTable.
