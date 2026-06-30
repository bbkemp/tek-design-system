# CD prompt — GDM9061 ("Dragon Storm") reskin onto the Tek design system

**Date:** 2026-06-30 · **Target prototype:** `prototypes/gw-gdm9061/index.html` · **Corpus subject:** [`corpus/sources/gw-gdm9061/`](https://github.com/bbkemp/tek-design-system/tree/main/corpus/sources/gw-gdm9061) · **Corpus index:** [`index.md`](https://github.com/bbkemp/tek-design-system/blob/main/corpus/sources/gw-gdm9061/index.md)

This is a **reskin**, not a redesign. "Dragon Storm" is Tek's internal codename for taking the **GW Instek GDM9061** 6½-digit benchtop digital multimeter (DMM) and re-clothing its existing UI in the Tek design system. We are reskinning *another company's firmware UI* — so the screen geometry is fixed hardware and **not ours to change**. Same screens, same layout, same spacing, same every-pixel position. What we control is the **paint**: typography, color, and corner radius.

Same process you ran for the TekExpress prototype — read the corpus, recreate the screens, bind everything to DS tokens — but **far more restrictive on what you're allowed to touch.** Read §1 before anything else.

---

## §0 Mission

1. **Recreate** all **10 documented GDM9061 screens** (listed in §2) as a single web prototype at `prototypes/gw-gdm9061/index.html`, matching each source capture **1:1 in layout, spacing, sizing, and element position.**
2. **Restyle — and only restyle — three things:** font (Geist family), color (DS color tokens, including all interactive/button states), and border radius (DS radius tokens).
3. **Bind every** font, color, and radius to a `var(--tek-*)` token with a sensible fallback. No raw hex, no raw font families/sizes, no raw radii.
4. **Preserve** every label, value, control, and the exact geometry of the source device. The corpus screen `.md` files carry the verbatim text — match it exactly.
5. **Deliver the three-artifact contract** (§10): `index.html`, `cd-notes.md`, `cd-additions.md`.

This is the smallest-surface change that makes the GDM9061 UI *look like a Tek product* without moving a single element.

---

## §1 Hard constraints — do not violate

These define the whole job. The first one is the reason this prompt exists.

### 1.1 Layout and spacing are FROZEN

The GDM9061 display is a **fixed 480 × 272 px embedded LCD.** Treat that as a locked artboard.

- **Do not** move, resize, re-align, re-flow, re-group, or re-proportion **any** element. Every region, pill, readout, softkey tile, tab, field, axis label, and plot keeps its exact source position and size.
- **Do not** change any margin, padding, gap, column width, row height, or grid. Spacing is part of the frozen geometry.
- **Do not** add responsive behavior. No `@media`, no `@container`, no breakpoints. This is a single fixed-size instrument panel, rendered at 480 × 272 (you may scale the whole artboard up uniformly — e.g. 2× — for legibility, but the *internal* geometry stays locked and proportional).
- **Do not** add, remove, relabel, or relocate controls. If the source shows six softkey tiles, you render six in the same place; if a tile is blank, it stays blank.
- The source captures in the corpus (`screens/<id>.jpg`) are the geometric ground truth. When in doubt about a position or size, measure the image — don't invent.

The only px values you "own" are the artboard frame itself (480 × 272 and any uniform scale wrapper). Comment those as `/* GDM9061 LCD artboard — fixed geometry, do not bind */`. Everything else visual binds to a token.

### 1.2 The only things you may change

| You MAY restyle | You MAY NOT touch |
|---|---|
| Font family → **Geist only** (§1.3) | Element positions / sizes |
| Font size/weight/line-height → DS type tokens | Margins / padding / gaps / grid |
| Color → DS color tokens (surfaces, text, borders, accents) | Which elements exist or where they sit |
| **Interactive/button state colors** (default / hover / active / pressed / disabled / focus) | Labels, values, control inventory, ordering |
| Border radius → DS radius tokens | Layout mode, dimensions, aspect ratio |

If a change you're considering isn't "font, color, or radius," it's out of scope. Stop and flag it in `cd-notes.md`.

### 1.3 Geist is the only typeface — override Archivo

**Every glyph in the prototype is Geist.** No exceptions.

- UI chrome, labels, menu text, softkey labels, tabs, field labels → `var(--tek-fonts-family-geist, 'Geist', sans-serif)`.
- Numeric readouts (the big primary value, statistics panels, IP-address octets, timers, axis labels) → `var(--tek-fonts-family-mono, 'Geist Mono', monospace)` with tabular figures. Geist Mono **is** Geist — use it for anything numeric/columnar so digits align like the instrument's original 7-segment-style readout.
- **Important override:** the Tek DS normally renders buttons and headings in **Archivo** (`--tek-fonts-family-archivo`, used by `tek-button` and modal headers). For this reskin that is **forbidden** — Bryan's instruction is Geist-only. Wherever a shipped DS component or token would pull Archivo, override the font family back to Geist. Record every such override in `cd-additions.md` (it's a deliberate deviation from the DS defaults, and the team needs the list).
- Bind font **sizes** to the DS text scale (`--tek-fonts-text-size-xs … -xl`) choosing the closest token to the source glyph size. Don't introduce raw `font-size` px.

### 1.4 Tokens always

Every color, font property, and radius resolves to `var(--tek-*, <fallback>)`. This is the core DS ethos and it is non-negotiable even in a reskin. No hardcoded hex, no raw font sizes/families, no raw `border-radius` px. If you cannot find a token that fits, bind to the closest one and log the gap in `cd-additions.md` — never leave a value un-tokenized.

### 1.5 Source of truth = corpus

The corpus describes the device **as-is**. Match the verbatim text in each screen's `## Visible text (verbatim)` section exactly — every reading, unit, status string, menu label, and softkey caption. Do not paraphrase, correct, or "improve" device text (yes, including the device's own quirks like `OverLoad`, `A-Zero`, `2-Wire OHM`, `TimeOut`). Cite the screen `.md` you pulled each screen from in `cd-notes.md`.

### 1.6 This is a visual artifact, not a functional instrument

No real measurement logic. Light interactivity only, and only where it helps demonstrate the reskin:
- A **screen switcher** (in a small Tweaks/dev panel outside the artboard) to page through the 10 screens.
- The **four Configuration tabs** (System / Display / Interface / Lan Setup) may switch on click, since they're one screen family.
- The **statistics** screen may toggle its STAT ↔ COMP (pass/fail) state to show the red-fail restyle.

Nothing else needs to be interactive. Do not build measurement behavior, live values, or navigation beyond the above.

---

## §2 Read order — corpus paths to consume

Read the index first, then every screen. All under [`corpus/sources/gw-gdm9061/`](https://github.com/bbkemp/tek-design-system/tree/main/corpus/sources/gw-gdm9061).

1. **`index.md`** — the screen graph, the 10-screen list, and the folded-capture map (which source states collapsed into which screen). Start here.
2. The 10 screen references in `screens/` — each has frontmatter (a `controls[]` inventory), a controls walkthrough, **verbatim text**, and a committed `.jpg` (the geometric ground truth):

   | screen_id | what it is |
   |---|---|
   | `measurement` | single big numeric readout — the root screen. Function-dependent softkey row. Folds in VDC / mVDC / mVAC / 2-Wire OHM / Continuity (OPEN) / OverLoad / Frequency / Display-menu / Log-menu states (all documented as **State variations**) |
   | `measurement-alt` | alternate display theme (different chrome: `DCV / Auto Trigger / Shift`, different softkeys) |
   | `range-select` | the Range picker bar that replaces the softkey row |
   | `trendchart` | scrolling trend plot + running stats box (green trace) |
   | `histogram` | binned distribution plot + stats box |
   | `statistics` | readout + 6-field math/stat panel; **STAT** (white) and **COMP / pass-fail** (red readout) states |
   | `config-system` | Configuration dialog, System tab (tab strip + field grid + nav softkeys) |
   | `config-display` | Configuration dialog, Display tab |
   | `config-interface` | Configuration dialog, Interface tab |
   | `config-lan` | Configuration dialog, Lan Setup tab |

3. For the screens that fold in **State variations** (`measurement`, `trendchart`, `statistics`), read those sections carefully — they enumerate the function-dependent softkey sets and special states (OPEN, OverLoad, Period sub-readout on Frequency, BeepVol/Threshold on Continuity, COMP limits, the `[Log]…Save Ok` toast). You must reproduce the canonical state of each screen; reproducing the variations is a nice-to-have you can drive from the screen switcher if time allows.

4. **Honor the `## Confidence notes`.** Where the corpus flags a value as uncertain (e.g. the exact MAC address, stats-box exponents), reproduce what's written — don't "fix" it.

If you can't cleanly retrieve a screen's verbatim text or its image, stop and re-read `index.md` before continuing.

---

## §3 What to preserve (everything structural)

For each of the 10 screens, preserve exactly:

- **The artboard:** 480 × 272, the three-region anatomy of the measurement screens (status bar / config strip / readout area / softkey row), the tabbed-dialog anatomy of the config screens (tab strip / two-column field grid / nav softkey row), and the plot anatomy of trendchart/histogram (small readout + stats box + gridded plot + axis labels).
- **Every element:** status pills (`LOC`, `LAN`/`TMC`, clock, icon cluster), function/trigger/filter pills, speed + range indicators, the large primary readout, the unit label + measurement-active dot, the `A-Zero` pill, all six softkey tiles (including blank ones), the range-picker buttons, the tab strip, every config field + its value, the nav softkeys (`Page Up / Page Down / PREV / NEXT / Enter / Exit Menu`), the green plot traces, the stats boxes, the axis labels.
- **Every string, verbatim** — from the corpus `## Visible text (verbatim)` blocks.
- **The relative visual hierarchy** — the primary readout dominates; the config strip is secondary; softkeys are a labeled grid. Keep those proportions; only restyle the paint.

---

## §4 What to change (font · color · radius)

### 4.1 Font (Geist) — §1.3 governs

Map every text element to Geist (chrome) or Geist Mono (numeric), at the closest DS text-size token. Override any Archivo default. Tabular figures on all numeric readouts.

### 4.2 Color — DS color tokens, including button/control states

Bind every color to a `--tek-color-*` token. The shipped DS-v2 semantic surface (verify current versions of `@bbkemp/tokens` / `@bbkemp/ui` before you start) includes:

- **Canvas/surface:** `--tek-color-canvas-background-default` (the instrument's black screen → bind to the dark canvas token).
- **Button / interactive states** (this is the heart of "colors for the ui and button states") — map the softkey tiles, tab buttons, menu buttons, range-picker buttons, and config nav softkeys to:
  `--tek-color-button-background-default` / `-hover` / `-inactive`, `--tek-color-button-text-default` / `-hover` / `-inactive`, `--tek-color-button-border-default` / `-hover` / `-inactive`. Give every interactive tile a real default / hover / active(pressed) / disabled state from these tokens.
- **Inputs / fields** (config-menu value fields): `--tek-color-input-background-default`, `--tek-color-input-border-default` / `-focus` / `-filled` / `-disabled`.
- **Text:** primary readout and labels → the appropriate text/foreground tokens; `--tek-color-text-link-default` for any link-like affordance.
- **Selector / toggle / checkbox states** where config dropdowns and on/off fields appear: `--tek-color-selector-background-unchecked` and the selector state tokens.

**Accent / status colors that may lack a clean semantic token** — bind to the closest primitive and flag a proposed semantic name in `cd-additions.md`:

| Device color | Bind to | Flag as |
|---|---|---|
| The orange config-strip rule + active highlights + softkey captions | closest primary/accent primitive | `tek-color-instrument-accent` |
| The red **COMP fail** readout fill (statistics) | `--tek-color-error` | — |
| The green **trend/histogram trace** | closest success/data primitive | `tek-color-instrument-trace` |
| The yellow **"A" / "M" range badge** | closest warning/attention primitive | `tek-color-range-badge-auto` / `-manual` |
| The cyan **config nav softkey text** + field-group headers | closest info/accent primitive | `tek-color-instrument-info` |
| The measurement-active **dot** after the unit | closest success primitive | `tek-color-measure-active` |

### 4.3 Border radius — DS radius tokens

Bind every corner to a `--tek-borders-radius-*` token (verify the exact token names in the shipped tokens package): the status pills, the function/trigger/filter pills, the softkey tiles, the tab buttons, the readout frame, the config field inputs/dropdowns, the range-picker buttons, the toast pill. Pick the closest radius token to the source corner; do not invent radii. If the source corner is square (0), keep it square via the zero/none radius token.

---

## §5 What stays out

- **No layout/spacing changes** (§1.1) — this is the whole point.
- **No new typeface** — Geist only (§1.3).
- **No new screens, elements, controls, labels, or icons.** Reproduce the 10 documented screens; nothing more.
- **No design-system *mapping* commentary inside the prototype.** The "which DS component does this map to" analysis is a separate, disposable `prototype-qa` audit — not part of this build.
- **No functional instrument behavior** (§1.6).
- **No corpus edits.** The corpus is source-of-truth and was just merged; treat it read-only.
- **Do not rebuild shipped `tek-*` components from scratch** — instantiate them where they fit the frozen footprint (§8); otherwise style native elements with tokens.

---

## §6 Per-screen build checklist

Build all 10. For each: match the `.jpg` geometry, lift the verbatim text from the `.md`, restyle paint to tokens.

- [ ] **`measurement`** — status bar (`LOC` `LAN` · clock · icon cluster); config strip (`DC Voltage` · `Trig:Auto` · `Filter` · `5/s` · `Range: 10V` + yellow `A` badge); big mono readout `+01.53176`; `A-Zero` pill; `VDC` + active dot; six softkey tiles (`Range`/`Speed`/`Auto Zero`/`Input R`/`DCV Ratio`/`2ND`). Canonical state = the VDC 10 V capture.
- [ ] **`measurement-alt`** — the alternate skin (`DCV` · `Auto 2V` · green `Auto Trigger` · `S` · magenta `Shift`); readout `-0.63992 VDC`; softkeys `Range`/`Speed`/`Input Z`/`Relatively`/`History`. Restyle its distinct chrome to tokens too.
- [ ] **`range-select`** — measurement readout above; bottom bar replaced by `Range` label + `ESC :Return` + range buttons (`Auto` highlighted · `100mV` · `1V` · `10V` · `100V` · `1000V`).
- [ ] **`trendchart`** — config strip with `1/X` badge; small readout `-034.6182`; stats box (`MIN/MAX/AVG/P-P/STD/COU`); green gridded trace with `+100m`/`0`/`-100m` + sample count; softkeys `Digit`/`Display`(TrendChart)/`VScale`/`HScale`/`Stop&View`/`ReStart`.
- [ ] **`histogram`** — small readout `-0.165552 k`; stats box; left margin `539 (65.2%)` / `Total 828` / `Bins 100`; green distribution + axis labels; softkeys `Digit`/`Display`(Histogram)/`Bins`/`HScale`/`Stop&View`/`ReStart`.
- [ ] **`statistics`** — readout `+000.1826 mVDC` over the 6-field panel (`Minimum/Maximum/Average/Peak-Peak/STDEV/Count`); softkeys `Function`/`MathDisp`(STAT)/`ReStart`. **Also** wire the COMP/fail state: red readout fill (`--tek-color-error`), `COMP` badge, limit softkeys (`BeepMode`/`BeepVol`/`Low Limit`/`High Limit`).
- [ ] **`config-system`** — tab strip (`System` active · `Display` · `Interface` · `Lan Setup` · `MENU`); field grid (`Beep`/`Key Sound`/`Date`/`Time`/`TimeSync`; `Save&Load`/`Calibration`/`Firmware`/`Security`/`SystemInfo`); cyan nav softkeys.
- [ ] **`config-display`** — Display tab (`BackLight`: Brightness/AutoOff/AutoOffTime; `Font Color`: 1ST/2ND/Math; `Math Off Display`; `BigFont Option`; `Other Option`).
- [ ] **`config-interface`** — Interface tab (`Interface`/`RS232`: BaudRate/FlowCtrl/TalkMode; `TX Term`; `USB`/Protocol; `SCPI ID`).
- [ ] **`config-lan`** — Lan Setup tab (`DHCP`; IP/Subnet/Gateway/DNS1/DNS2 octet fields; `MAC Address`; `Protocol`: Web/Telnet/Port/ECHO/TCP/Port).

The four `config-*` screens share one chrome — build them as one component with a switchable active tab.

---

## §7 Component instantiation — footprint-preserving

Priority order is **fidelity of geometry first, component reuse second** — the inverse of a greenfield build. Instantiate a shipped `tek-*` component **only when it fits the source element's exact footprint**; otherwise style a native element with tokens and flag it.

| Source element | Preferred |
|---|---|
| Config-menu value field (text/number) | `tek-input` if it fits the cell; else tokenized `<div>`/`<span>` |
| Config-menu dropdown (e.g. `ON ▾`, `WHITE ▾`) | `tek-dropdown` (proposed) if it fits; else tokenized select |
| On/Off field | `tek-toggle` if footprint matches; else tokenized pill |
| Tab strip | `tek-tabs` (proposed) — keep named, style with tokens |
| Softkey tile, range button, nav softkey | tokenized button element with full button-state colors (these are instrument softkeys, not DS buttons — don't force `tek-button` if it distorts the footprint; if it fits cleanly, use it) |
| Status pill / function pill / badge | `tek-status-pill` (proposed) — keep named, style with tokens |
| The save toast | `tek-status-pill` or tokenized pill |

For proposed (not-yet-shipped) primitives (`tek-dropdown`, `tek-tabs`, `tek-status-pill`, `tek-status-bar`, `tek-group-box`, etc.), keep the `tek-*` element name and style its internals with tokens — same bridge pattern as the TekExpress prototype. **Never distort the frozen geometry to accommodate a component.** If a shipped component won't fit without moving things, don't use it — style native + flag.

---

## §8 Three-artifact contract

Deliver:

1. **`prototypes/gw-gdm9061/index.html`** — the prototype: 10 screens, 480 × 272 artboard, Geist-only, fully tokenized, screen-switcher in a dev/Tweaks panel.
2. **`audits/design-additions/2026-06-30-gw-gdm9061-reskin/cd-notes.md`** — what you bound and where: per screen, which `.jpg`/`.md` you matched, which tokens you mapped each color/font/radius to, what you couldn't bind and why, and confirmation that geometry was frozen.
3. **`audits/design-additions/2026-06-30-gw-gdm9061-reskin/cd-additions.md`** — every gap: each Archivo→Geist override (§1.3), each accent/status color with no clean semantic token (§4.2), each proposed radius/component, with a proposed token name and rationale. If somehow empty, write `none` — the file is the contract.

---

## §9 Verification checklist — run before declaring done

- [ ] All **10 screens** render and are reachable from the screen switcher
- [ ] Each screen matches its corpus `.jpg` **geometry** — nothing moved, resized, re-spaced, or re-aligned
- [ ] Artboard is a fixed **480 × 272** (optionally uniformly scaled); no `@media`/`@container`/breakpoints anywhere
- [ ] **Every glyph is Geist** (chrome) or Geist Mono (numeric); **zero Archivo**; every Archivo override logged in `cd-additions.md`
- [ ] Every **color** resolves to `var(--tek-color-*, …)` — including default/hover/active/disabled on every interactive tile, tab, button, and field
- [ ] Every **font-size/family** resolves to a `var(--tek-fonts-*, …)` token
- [ ] Every **border-radius** resolves to a `var(--tek-borders-radius-*, …)` token
- [ ] **No raw hex, no raw font px, no raw radius px** anywhere except the 480 × 272 artboard frame
- [ ] All **verbatim text** matches the corpus exactly (units, labels, softkeys, menu values, device quirks)
- [ ] The four `config-*` tabs switch; `statistics` toggles STAT ↔ COMP-fail (red)
- [ ] `cd-notes.md` + `cd-additions.md` written

---

## §10 What success looks like

Set the reskinned prototype next to the original GDM9061 captures: **identical layout, every element in the same place** — but it now reads as a Tek instrument. Geist throughout, DS colors on every surface and every button state, DS corner radii, all bound to `var(--tek-*)`. `cd-notes.md` reads like a careful paint log; `cd-additions.md` lists exactly the semantic-color gaps and the deliberate Archivo→Geist overrides. The next step (a `prototype-qa` audit comparing this build against DS-v2) starts from a clean, fully-tokenized, geometry-faithful base.

The test: a GW Instek GDM9061 operator should recognize **every screen instantly** — because nothing moved — while a Tek designer sees **only Tek** in the paint.

---

## §11 Provenance

GDM9061 corpus subject documented 2026-06-30 (`/corpus-intake` + `/document-screens`, 29 captures → 10 screens), merged in [bbkemp/tek-design-system#98](https://github.com/bbkemp/tek-design-system/pull/98). This prompt reuses the hard-constraint / read-order / three-artifact structure of the [2026-06-26 TekExpress token-refresh brief](../2026-06-26-tek-express-token-refresh/cd-prompt.md), tightened to a **paint-only reskin**: where the TekExpress brief let CD compose and instantiate freely within a layout, this one freezes layout and spacing entirely and limits CD to font (Geist), color (incl. button states), and radius.
