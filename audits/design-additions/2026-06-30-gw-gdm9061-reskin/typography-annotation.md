# Dragon Storm (GDM9061) — Typography annotation & consistency audit

**Date:** 2026-07-13 (decisions resolved 2026-07-16) · Status: **for dev handoff — as-built spec** · Prototype: [`prototypes/dragonstorm/index.html`](../../../prototypes/dragonstorm/index.html) (desktop dev view, approved)
**Scope:** all 13 screens, **desktop** prototype only. Values are **device-native px** at the panel's true **480×272** resolution — extracted from the rendered DOM (`getComputedStyle`), so they are the exact numbers to implement, not scaled preview values.
**Companion:** [`mono-type-scale-spec.md`](./mono-type-scale-spec.md) — the proposed `fonts.mono.*` scale this annotation references. **Read that first**; the style names below bind to it.

---

## How to read this

1. **§1 Consistency audit** — the type variances across screens, ranked P0–P2. **Reviewed and accepted as-built on 2026-07-16 (see §4)** — read these as documented variances, not a fix list.
2. **§2 Type-style catalog** — the ~30 distinct named styles, one row each. Off-scale sizes forced by the 480×272 panel are marked **⚠ one-off**. (Consolidation "targets" noted inline were **not** adopted — see §4.)
3. **§3 Per-screen annotation** — every text element on every screen → its style name + raw props.
4. **§4 Decisions** — the six calls, resolved 2026-07-16 (all ratified as-built).

**Fonts in play:** `Iosevka Mono` in three widths — **Ultra Condensed**, **Condensed**, **Extended** (readouts/values) · **Archivo** (titles/tabs, `wdth 120`) · **Geist** (labels/softkeys/status).
**Colors** — all 8 map cleanly to DS primitives, no raw hex escapes:

| hex | DS token | role |
|---|---|---|
| `#ffffff` | `--tek-colors-neutral-white` | primary text |
| `#cccccc` | `--tek-colors-neutral-100` | secondary text / labels |
| `#afafaf` | `--tek-colors-neutral-200` | muted / tertiary |
| `#979797` | `--tek-colors-neutral-300` | inactive / disabled |
| `#33baea` | `--tek-colors-brand-tek-blue` | active value / accent |
| `#e0b732` | `--tek-colors-ui-warning-yellow` | stat labels / warning / MENU |
| `#e74848` | `--tek-colors-ui-error-red` | error / COMP / LAN-off |
| `#000000` | `--tek-colors-neutral-black` | text on accent (badges, active toggle/tab) |

---

## §1 · Consistency audit

Ranked by impact on the dev build. "Same role" = the same conceptual element rendered differently across screens.

| # | Sev | Finding | Where | Recommendation |
|---|---|---|---|---|
| A1 | **P1** | **Primary readout is not one style** — four variants for the same "big measured value" element: **116px** Ultra Condensed w400 ls 0 · **74px** Ultra Condensed w400 ls −1 · **71px** Condensed w400 ls −2 · **38px** Condensed **w500** ls −0.6. Width, weight, and letter-spacing all drift. | 1,2,4,5 (116) · 3 (74) · 8,9 (71) · 6,7 (38) | Define **one readout style per size tier** sharing a single width + weight + a consistent ls rule. Decide the canonical width (Ultra Condensed vs Condensed) — see [D1](#4-open-decisions). |
| A2 | **P1** | **Stat block label & value change size by screen** — Trend/Histogram use **13px / lh 16.25**; Stats (STAT/FAIL) use **14px / lh 17.5**. Identical role. | 6,7 vs 8,9 | Pick one size for `data/stat-label` + `data/stat-value` across all four. |
| A3 | **P1** | **OverLoad unit swaps font family & color** — the unit renders in **Geist 24/600 `#e0b732`**, where every other primary unit is **Iosevka Mono Condensed 24/600 `#ffffff`** (`unit/primary`). | 5 vs 1,2,8,9 | The **Geist family is almost certainly a bug** — switch to Iosevka Mono Condensed. Keep `#e0b732` only if the yellow is an intentional over-range warning tint (confirm — [D3](#4-open-decisions)). |
| A4 | **P2** | **Trig chip size drift** — `Trig:Auto` is **13px** on every measurement screen but **11px** on Dual Display. | 3 vs 1,2,4,5,6,7 | Snap Dual's Trig chip to 13px (`chrome/trig-chip`). |
| A5 | **P2** | **Footer label carries a stray `wdth 120`** — `Select Range` (Range-selector footer) has `font-variation-settings:"wdth" 120`; all other footer labels (RANGE/SPEED/…) have none. Geist isn't a variable font here, so it's inert, but it's an inconsistent declaration. | 4 vs 1,2,3,6,7 | Drop the `wdth 120` from `control/label`; it does nothing and reads as intent. |
| A6 | **P2** | **Softkey vs footer label near-duplication** — bottom-row labels exist at **two specs**: `control/label` = Geist **10 / 500** uppercase, and config `softkey` = Geist **11 / 400** uppercase. Same visual role (bottom captions). | 1–7 vs 10–13 | Consider collapsing to one softkey/label style, or keep two if measurement vs config chrome is deliberately distinct. |
| A7 | **P2** | **Off-scale sizes** — **9.5, 11, 15, 17px** are not on the DS/mono scale (which has 10, 12, 13, 14, 16, 20, 24…). 11px is used heavily (config fields, axis labels, softkeys); 15px (footer values, dual secondary); 17px (measurement title); 9.5px (tab badge). | many | Either snap (11→12, 15→14 or 16, 17→16) or ratify each as an explicit mono one-off. The big readouts (38/71/74/116) are legitimately off-scale — see note below. |
| A8 | **P3** | **Colon-separator tracking** — `:` in stat rows is tightened to ls −0.9 vs 0.3 on the surrounding label. | 6,7,8,9 | Intentional optical fix; **no action**, noted so it isn't "corrected" later. |

**Panel-constrained sizes (not defects).** The four readout sizes and the config `−1.4`px tracking exist because the **480×272 panel geometry wins over the type scale** (per the README). `116px` fits `+01.53177` across the full width; the stats layout only has room for `71px`; trend leaves `38px`. These are *legitimate* one-offs — the fix in A1 is to make them **consistent in width/weight**, not to force them onto the scale.

---

## §2 · Proposed type styles

The consolidated set to implement. Names are Dragon-Storm-local (`ds/<group>/<role>`) and, where the size sits on the mono ramp, they bind to a `mono-*` step from [`mono-type-scale-spec.md`](./mono-type-scale-spec.md). **⚠ one-off** = size off the current scale (panel-forced or needs a scale decision).

### Readout (Iosevka Mono, tight line-height = size)
| Style | Family (width) | Wt | Size | LH | LS | Color | Scale | Screens |
|---|---|---|---|---|---|---|---|---|
| `ds/readout/primary` | Ultra Condensed | 400 | **116** | 112 | 0 | white | ⚠ one-off (≈`11xl` 120) | 1,2,4,5 |
| `ds/readout/dual` | Ultra Condensed | 400 | **74** | 74 | −1 | white | ⚠ one-off | 3 |
| `ds/readout/stat` | **Condensed** | 400 | **71** | 71 | −2 | white | ⚠ one-off | 8,9 |
| `ds/readout/trend` | **Condensed** | **500** | **38** | — | −0.6 | white | ⚠ one-off | 6,7 |
| `ds/readout/dual-secondary` | Condensed | 400 | 15 | — | 0 | `#afafaf` | ⚠ one-off (→14/16?) | 3 |

> **A1 lives here:** four readout rows, three widths, two weights. Target = one width + one weight for all four tiers.

### Unit (beside the readout)
| Style | Family | Wt | Size | LH | Color | Scale | Screens |
|---|---|---|---|---|---|---|---|
| `ds/unit/primary` | Iosevka Mono Condensed | 600 | 24 | 24 | white | `mono-3xl` (24) | 1,2,8,9 |
| `ds/unit/dual` | Iosevka Mono Condensed | 600 | 20 | — | white | `mono-2xl` (20) | 3 |
| `ds/unit/overload` ⚠ | **Geist** → Cond | 600 | 24 | 24 | `#e0b732` | see **A3** | 5 |

### Chrome — status bar + measurement header (persistent)
| Style | Family | Wt | Size | LS | Color | Scale | Screens |
|---|---|---|---|---|---|---|---|
| `ds/chrome/title` | Archivo (`wdth 120`) | 600 | 17 | 0.3 | white | ⚠ one-off (→16) | 1–9 |
| `ds/chrome/clock` | Iosevka Mono Condensed | 500 | 16 | −0.5 | white | `mono-xl` (16) | all |
| `ds/chrome/mode-chip` | Iosevka Mono **Extended** | 600 | 10 | −0.1 | `#afafaf` | `mono-xs` (10) | all |
| `ds/chrome/usb-letter` | Iosevka Mono Condensed | 700 | 14 | 0 | white | `mono-lg` (14) | all |
| `ds/chrome/lan-x` | Geist | 700 | 12 | 0 | `#e74848` | text-sm (12) | all |
| `ds/chrome/tab-badge` ⚠ | Iosevka Mono Condensed | 700 | 9.5 | 0 | white | ⚠ one-off (→10) | 6–9 |
| `ds/chrome/range-label` | Geist | 500 | 12 | 0 | `#afafaf` | text-sm (12) | 1,2,4,5 |
| `ds/chrome/auto-badge` | Geist | 700 | 12 | 0 | `#000` | text-sm (12) | 1–9 |
| `ds/chrome/range-value` | Iosevka Mono Condensed | 600 | 12 | 0 | white | `mono-sm` (12) | 1,2,4,5,6,7 |
| `ds/chrome/trig-chip` | Iosevka Mono Condensed | 400 | 13 | 0 | white | `mono-md` (13) | 1,2,4,5,8,9 |
| `ds/chrome/status-chip` | Iosevka Mono Condensed | 400 | 13 | 0 | `#cccccc` | `mono-md` (13) | all |
| `ds/chrome/azero-pill` | Geist | 400 | 13 | 0 | `#afafaf` | text-md (13) | 1,4,5,8 |
| `ds/chrome/math-flag` | Iosevka Mono Condensed | 400 | 14 | 0 | `#afafaf` | `mono-lg` (14) | 6,7 |

### Controls — measurement footer
| Style | Family | Wt | Size | LH | LS | Color | Scale | Screens |
|---|---|---|---|---|---|---|---|---|
| `ds/control/label` | Geist | 500 | 10 | 10 | 0.6 | `#cccccc` | text-xs (10) | 1–7 |
| `ds/control/value` | Iosevka Mono Condensed | 500 | 15 | 15 | −0.3 | `#33baea` | ⚠ one-off (→14/16) | 1–7 |
| `ds/control/toggle-on` | Iosevka Mono Condensed | 400 | 12 | 12 | 0 | `#000` | `mono-sm` (12) | 1–5 |
| `ds/control/toggle-off` | Iosevka Mono Condensed | 400 | 12 | 12 | 0 | `#979797` | `mono-sm` (12) | 1–5 |
| `ds/control/menu-item` | Iosevka Mono Condensed | 500 | 14 | — | 0.2 | white | `mono-lg` (14) | 4 |
| `ds/control/menu-item-sel` | Iosevka Mono Condensed | 700 | 14 | — | 0.2 | `#000` | `mono-lg` (14) | 4 |
| `ds/control/softkey-esc` | Geist | 500 | 11 | — | 0 | `#e0b732` | ⚠ one-off | 4 |
| `ds/control/softkey-return` | Geist | 400 | 11 | — | 0 | white | ⚠ one-off | 4 |

### Data — stats / trend / histogram
| Style | Family | Wt | Size | LH | LS | Color | Scale | Screens |
|---|---|---|---|---|---|---|---|---|
| `ds/data/stat-label` | Iosevka Mono Condensed | 400 | **13 / 14** | 16.25 / 17.5 | 0.3 | `#e0b732` | see **A2** | 6,7 / 8,9 |
| `ds/data/stat-value` | Iosevka Mono Condensed | 400 | **13 / 14** | 16.25 / 17.5 | 0.3 | white | see **A2** | 6,7 / 8,9 |
| `ds/data/axis` | Iosevka Mono Condensed | 400 | 11 | — | 0 | `#cccccc` | ⚠ one-off | 6,7 |
| `ds/data/count` | Iosevka Mono Condensed | 400 | 10/11 | — | 0 | `#cccccc`/`#e0b732` | text-xs / ⚠ | 6,7 |
| `ds/data/status-flag` | Geist | 500 | 12 | — | 0 | `#e74848` | text-sm (12) | 9 |

### Config screens (System / Display / Interface / Lan Setup)
| Style | Family | Wt | Size | LS | Color | Scale | Screens |
|---|---|---|---|---|---|---|---|
| `ds/config/tab-active` | Archivo (`wdth 120`) | 600 | 12 | 0.4 | `#000` | text-sm (12) | 10–13 |
| `ds/config/tab-inactive` | Archivo (`wdth 120`) | 500 | 12 | 0.4 | `#cccccc` | text-sm (12) | 10–13 |
| `ds/config/menu-flag` | Geist | 500 | 12 | 0 | `#e0b732` | text-sm (12) | 10–13 |
| `ds/config/row-label` | Geist | 400 | 12 | 0.6 | white | text-sm (12) | 10–13 |
| `ds/config/section` | Iosevka Mono **Extended** | 500 | 10 | −0.2 | `#33baea` | `mono-xs` (10) UPPER | 10–13 |
| `ds/config/value` | Iosevka Mono **Extended** | 400 | 10 | −0.5 | white | `mono-xs` (10) | 10–13 |
| `ds/config/field-num` | Iosevka Mono **Extended** | 400 | 11 | −1.4 | white | ⚠ one-off | 10,11,12,13 |
| `ds/config/open-link` | Iosevka Mono **Extended** | 400 | 11 | −0.5 | white | ⚠ one-off | 10,11 |
| `ds/config/unit` | Geist | 400 | 11 | 0 | `#cccccc` | ⚠ one-off | 11,12 |
| `ds/softkey` | Geist | 400 | 11 | 0.6 | `#cccccc` | ⚠ one-off (UPPER) | 10–13 |

**Count:** ~35 raw signatures → **~30 named styles**. Several differ *only by color* (role), e.g. `toggle-on`/`toggle-off`, `stat-label`/`stat-value` — if color is treated as a role parameter, the true structural set is **~22**.

---

## §3 · Per-screen annotation

Each row is a visible text element → its style. Persistent chrome (status bar clock, LOC/LAN, USB, header) repeats on screens 1–9 and is listed once on Screen 1; later screens list only what's new or changed.

### Screen 1 — Measurement (DC Voltage)
| Element (sample) | Style | Family / Wt / Size / LS / Color |
|---|---|---|
| `+01.53177` | `ds/readout/primary` | Iosevka Mono Ultra Condensed 400 · 116/lh112 · 0 · white |
| `VDC` | `ds/unit/primary` | Iosevka Mono Condensed 600 · 24/lh24 · white |
| `DC Voltage` | `ds/chrome/title` | Archivo 600 `wdth120` · 17 · 0.3 · white |
| `22:05:32` | `ds/chrome/clock` | Iosevka Mono Condensed 500 · 16 · −0.5 · white |
| `LOC` `LAN` | `ds/chrome/mode-chip` | Iosevka Mono Extended 600 · 10 · −0.1 · `#afafaf` |
| `C` (USB) | `ds/chrome/usb-letter` | Iosevka Mono Condensed 700 · 14 · white |
| `✕` (LAN off) | `ds/chrome/lan-x` | Geist 700 · 12 · `#e74848` |
| `Trig:Auto` | `ds/chrome/trig-chip` | Iosevka Mono Condensed 400 · 13 · white |
| `Filter` `5/s` | `ds/chrome/status-chip` | Iosevka Mono Condensed 400 · 13 · `#cccccc` |
| `Range` (top-R) | `ds/chrome/range-label` | Geist 500 · 12 · `#afafaf` |
| `A` (auto badge) | `ds/chrome/auto-badge` | Geist 700 · 12 · `#000` |
| `10V` | `ds/chrome/range-value` | Iosevka Mono Condensed 600 · 12 · white |
| `A-Zero` | `ds/chrome/azero-pill` | Geist 400 · 13 · `#afafaf` |
| `RANGE` `SPEED` `AUTO ZERO` `INPUT R` `DCV RATIO` `2ND` | `ds/control/label` | Geist 500 · 10 · 0.6 · UPPER · `#cccccc` |
| `Auto` `5/s` `Off` | `ds/control/value` | Iosevka Mono Condensed 500 · 15 · −0.3 · `#33baea` |
| `On` `10M` (active seg) | `ds/control/toggle-on` | Iosevka Mono Condensed 400 · 12 · `#000` |
| `Off` `Auto` (inactive seg) | `ds/control/toggle-off` | Iosevka Mono Condensed 400 · 12 · `#979797` |

### Screen 2 — Measurement · AC Voltage
Same as Screen 1. Header → `AC Voltage`; unit → `VAC`; footer adds `Input Z` / `Relative` labels (`ds/control/label`), value `Slow` (`ds/control/value`).

### Screen 3 — Dual Display
| Element | Style | Notes |
|---|---|---|
| `+000.0084` (1st) / `000.0204` (2nd) | `ds/readout/dual` | Iosevka Mono Ultra Condensed 400 · **74** · −1 · white |
| `mVDC` `mVAC` | `ds/unit/dual` | Iosevka Mono Condensed 600 · **20** · white |
| `1ST` `2ND` badges | *(badge)* Geist 700 · 12 · `#000` (lh 15.6) | shares `chrome/auto-badge` spec |
| `100mV` (2nd range) | `ds/readout/dual-secondary` | Iosevka Mono Condensed 400 · **15** · `#afafaf` |
| `Trig:Auto` | ⚠ **11px here** — see **A4** | should be `ds/chrome/trig-chip` (13) |
| `AC+DC` | Iosevka Mono Condensed 600 · 13 · `#afafaf` | mode tag |

### Screen 4 — Range selector
Measurement chrome + an overlay menu:
| Element | Style |
|---|---|
| `100mV` `1V` `10V` `100V` (menu) | `ds/control/menu-item` (Iosevka Mono Condensed 500 · 14 · 0.2 · white) |
| `Auto` (selected) | `ds/control/menu-item-sel` (700 · 14 · `#000`) |
| `ESC` | `ds/control/softkey-esc` (Geist 500 · 11 · `#e0b732`) |
| `Return` | `ds/control/softkey-return` (Geist 400 · 11 · white) |
| `Select Range` | `ds/control/label` — ⚠ carries stray `wdth 120` ([A5](#1-consistency-audit)) |

### Screen 5 — OverLoad
| Element | Style | Notes |
|---|---|---|
| `OverLoad` (in readout slot) | `ds/readout/primary` | 116px white |
| `MΩ` (unit) | `ds/unit/overload` ⚠ | **Geist 600 · 24 · `#e0b732`** — see **A3** (family bug; confirm yellow) |
| header `2-Wire OHM` | `ds/chrome/title` | Archivo 600 `wdth120` · 17 |

### Screen 6 — TrendChart
| Element | Style |
|---|---|
| `-034.6185` | `ds/readout/trend` (Iosevka Mono Condensed **500** · 38 · −0.6 · white) |
| `MIN` `MAX` `AVG` `P-P` | `ds/data/stat-label` (Cond 400 · **13** · lh16.25 · 0.3 · `#e0b732`) |
| stat values `+094.7200k` … | `ds/data/stat-value` (Cond 400 · **13** · white) |
| axis `+100m` `0` `-100m` `(787)` | `ds/data/axis` (Cond 400 · 11 · `#cccccc`) |
| `1/X` | `ds/chrome/math-flag` (Cond 400 · 14 · `#afafaf`) |
| tab badge `2` | `ds/chrome/tab-badge` (Cond 700 · 9.5 · white) |
| footer labels `Digit` `VScale` … | `ds/control/label` · values `TrendChart` `Normal` → `ds/control/value` |

### Screen 7 — Histogram
As Trend, plus:
| Element | Style |
|---|---|
| `539` `(65.2%)` `828` (bin counts) | `ds/data/count` (Cond 400 · 11 · `#cccccc`) |
| `Total` `Bins` | `ds/data/count` (Cond 400 · 10 · `#e0b732`) |

### Screens 8 & 9 — Stats (STAT / FAIL)
| Element | Style | Notes |
|---|---|---|
| `+000.1813` / `+01.53208` | `ds/readout/stat` (Iosevka Mono **Condensed** 400 · **71** · −2 · white) |
| `VDC` `mVDC` | `ds/unit/primary` (24) |
| `Minimum` `Maximum` `Average` `Peak-Peak` | `ds/data/stat-label` — ⚠ **14px / lh17.5** here vs 13 on Trend ([A2](#1-consistency-audit)) |
| stat values | `ds/data/stat-value` — ⚠ **14px** |
| `COMP` (screen 9) | `ds/data/status-flag` (Geist 500 · 12 · `#e74848`) |
| footer labels `Function` `MathDisp` … | `ds/control/label`; values `STAT` `Fail` `Small` → `ds/control/value` |

### Screens 10–13 — Config (System / Display / Interface / Lan Setup)
Shared config vocabulary (no readout / footer control block):
| Element | Style |
|---|---|
| active tab (`System`…) | `ds/config/tab-active` (Archivo 600 `wdth120` · 12 · 0.4 · `#000`) |
| inactive tabs | `ds/config/tab-inactive` (Archivo 500 `wdth120` · 12 · `#cccccc`) |
| `MENU` | `ds/config/menu-flag` (Geist 500 · 12 · `#e0b732`) |
| row labels (`Beep` `IP Address` …) | `ds/config/row-label` (Geist 400 · 12 · 0.6 · white) |
| left-nav sections (`Date/Time` `Protocol` …) | `ds/config/section` (Iosevka Mono Extended 500 · 10 · −0.2 · UPPER · `#33baea`) |
| enum values (`ON` `WHITE` `115200` …) | `ds/config/value` (Iosevka Mono Extended 400 · 10 · −0.5 · white) |
| numeric fields (`2026` `192` `168` …) + separators `/ : .` | `ds/config/field-num` (Iosevka Mono Extended 400 · **11** · −1.4; separators `#cccccc`) |
| `Open` links | `ds/config/open-link` (Iosevka Mono Extended 400 · 11 · −0.5 · white) |
| units (`%` `min` `sec`) | `ds/config/unit` (Geist 400 · 11 · `#cccccc`) |
| softkeys (`PAGE ↑` `←PREV` `NEXT→`) | `ds/softkey` (Geist 400 · 11 · 0.6 · UPPER · `#cccccc`) |

---

## §4 · Decisions (resolved 2026-07-16)

Reviewed with the maintainer. **Every item was ratified as-built** — the approved prototype is the source of truth; no prototype or design-system changes result from this audit.

| # | Decision | Outcome |
|---|---|---|
| 1 | Readout width/weight (A1) | **Ratify as-is.** Keep the per-tier widths and weights exactly — incl. the Trend readout at weight 500 and the UltraCondensed/Condensed split. No unification. |
| 2 | Stat block size (A2) | **Ratify the split.** Trend/Histogram stay 13px/lh16.25; Stats stay 14px/lh17.5. |
| 3 | OverLoad unit (A3) | **Leave as-is** — Geist + `#e0b732` accepted; not changed. |
| 4 | Off-scale sizes (A7) | **Ratify all** — 9.5 / 11 / 15 / 17 kept as documented panel one-offs. |
| 5 | DS adoption | **Keep everything Dragon-Storm-local.** None promoted to the `fonts.mono.*` scale/styles; this document is the reference. |
| 6 | Softkeys (A6) | **Keep two** distinct specs — measurement footer `control/label` (10/500) vs config `softkey` (11/400). |

Net effect: this document stands as the **as-built type spec** for the firmware team. The §1 findings remain as documentation of the accepted variances.

---

## Notes
- Extraction method: rendered `getComputedStyle` on every text-bearing element inside the 480×272 board (the `scale(2)` LCD div), driven across all 13 screens via the dev-panel navigator. Font-size is transform-independent, so all px are **device-native**.
- This is annotation of the **approved** prototype as-built — it records what's there. All variances were reviewed and **ratified as-is (2026-07-16, §4)**; it does **not** change the prototype.
- Colors already trace 1:1 to DS primitives (table above); the open work is **type-style consolidation**, not color.
