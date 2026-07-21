---
provenance: observed
class: screen
software: 2450-EC
software_version: TBD
screen_id: home
screen_title: Home
screen_type: readout
image: home.jpg
source_photo: uploads/photos/photo-262_singular_display_fullPicture.jpeg
function_state: MEASURE CURRENT 2-WIRE
navigation_path: [Home]
parent_screens: []
child_screens:
  - menu
  - quickset
  - help
  - measure-range
  - source-edit
  - buffer-picker
  - trigger-config
  - script-picker
  - system-info
  - error-dialog
related_hardware:
  - front-panel
controls:
  - id: status-mode
    label: Local
    type: indicator
    state: active
    action: Connection mode indicator (Local vs Remote). Goes Remote when commanded over an interface; tap returns to Local.
  - id: status-buffer
    label: defbuffer1
    type: dropdown
    state: enabled
    action: Active reading buffer. Tap to open buffer picker / manage buffers.
  - id: status-script
    label: No Script
    type: button
    state: enabled
    action: Active TSP script slot. Tap to load or manage scripts.
  - id: status-trigger
    label: CONT
    type: button
    state: active
    action: Trigger model state (Continuous). Chevron indicates tappable; opens trigger config.
  - id: function-header
    label: MEASURE CURRENT 2-WIRE
    type: indicator
    state: active
    action: Active measure function and wiring mode. Changes via FUNCTION hardkey or Menu > Source / Measure.
  - id: azero-indicator
    label: AZERO
    type: indicator
    state: active
    action: Indicates auto-zero is enabled. Tap behavior unconfirmed in this shot.
  - id: primary-readout
    label: "+00.0102 nA"
    type: readout
    state: active
    action: Live measured value for the active measure function.
  - id: range-label
    label: Range 10nA
    type: indicator
    state: active
    action: Current measurement range in use.
  - id: range-auto-toggle
    label: Auto
    type: toggle
    state: active
    action: Auto-ranging on/off. Long-press (or related affordance) opens the Measure Range overlay (see photo-604).
  - id: source-readback
    label: "+00.0002 mV"
    type: readout
    state: active
    action: Live source-monitor readback (measured source value).
  - id: source-auto-toggle
    label: Auto
    type: toggle
    state: enabled
    action: Source auto-range on/off.
  - id: source-level
    label: "+00.0000 mV"
    type: input
    state: enabled
    action: Programmed source level. Tap to open numeric editor.
  - id: source-limit
    label: "105.000 µA"
    type: input
    state: enabled
    action: Source compliance / output limit. Tap to open numeric editor.
  - id: btn-home
    label: HOME
    type: hardkey
    state: enabled
    action: Returns to this screen from anywhere in the UI.
  - id: btn-menu
    label: MENU
    type: hardkey
    state: enabled
    action: Opens the main settings tree.
  - id: btn-quickset
    label: QUICKSET
    type: hardkey
    state: enabled
    action: Opens the quick-preset / function picker.
  - id: btn-help
    label: HELP
    type: hardkey
    state: enabled
    action: Context help for the active screen or control.
  - id: usb-port
    label: ""
    type: port
    state: enabled
    action: Front USB-A port — firmware updates, file transfer, scripts.
  - id: btn-power
    label: POWER
    type: hardkey
    state: enabled
    action: Instrument power on/off.
  - id: control-knob
    label: ""
    type: knob
    state: enabled
    action: Rotary navigation and value adjust; push-to-select.
  - id: btn-enter
    label: ENTER
    type: hardkey
    state: enabled
    action: Confirm selection.
  - id: btn-exit
    label: EXIT
    type: hardkey
    state: enabled
    action: Cancel or back.
  - id: btn-function
    label: FUNCTION
    type: hardkey
    state: enabled
    action: Cycle measure / source function (V / I / R / P).
  - id: btn-trigger
    label: TRIGGER
    type: hardkey
    state: enabled
    action: Manual trigger or start the configured trigger model.
  - id: terminals
    label: ""
    type: terminal
    state: enabled
    action: Front-panel banana jacks — FORCE HI/LO, SENSE HI/LO (labels not visible at this angle).
  - id: output-led
    label: ""
    type: indicator
    state: active
    action: Output-state LED. Color/state interpretation unconfirmed in this shot.
---

# Home — Measure Current 2-Wire

## Purpose

The Home screen is the 2450-EC's primary measurement view. It shows two simultaneous readouts — the active measure function (here, current) at the top, and the source readback at the bottom — plus the range and source configuration that produced them. It is the navigational root: every other screen is reached from here via a hardkey (HOME, MENU, QUICKSET, HELP, FUNCTION, TRIGGER) or by tapping a tappable element on screen. The function shown depends on whether the instrument is configured to source-V/measure-I, source-I/measure-V, source-V/measure-R, or source-I/measure-R; in this photo it is configured to source 0 V and measure current with a 105 µA compliance limit, two-wire connection.

## Controls inventory

The screen is laid out in three horizontal regions: a thin **status bar** across the top, a **measure region** in the upper half, and a **source region** in the lower half, all bordered by hardware bezel buttons on the left and right.

The status bar holds four tappable status pills. `status-mode` (`Local`) shows the connection mode and switches to `Remote` when commanded over an interface. `status-buffer` (`defbuffer1`) is the active reading buffer; tapping opens the buffer picker. `status-script` (`No Script`) reflects the loaded TSP script slot. `status-trigger` (`CONT`) shows the current trigger-model state — the small chevron indicates it is tappable and opens trigger configuration.

The measure region is anchored by `function-header` (`MEASURE CURRENT 2-WIRE`) on the left and `azero-indicator` (`AZERO`) on the right, sitting above `primary-readout` (`+00.0102 nA`) — the live measurement. To its left, `range-label` (`Range 10nA`) indicates the range in use, with `range-auto-toggle` (`Auto`) shown active beside it.

The source region mirrors that structure: `source-readback` (`+00.0002 mV`) is the live source-monitor value; below it, three tappable controls — `source-auto-toggle` (`Auto`), `source-level` (`+00.0000 mV`), and `source-limit` (`105.000 µA`) — define the source. Tapping `source-level` or `source-limit` opens a numeric editor.

The hardware bezel is functionally part of this screen even though it is physical. On the **left**, top-to-bottom: `btn-home`, `btn-menu`, `btn-quickset`, `btn-help`, then a USB-A port (`usb-port`) and the power button (`btn-power`). On the **right**: the rotary `control-knob` at top, then `btn-enter`, `btn-exit`, `btn-function`, `btn-trigger`, the four-terminal banana jacks (`terminals`), and the green `output-led`.

## State variations

Visible in this photo: function = Measure Current 2-Wire, output = OFF (inferred — readouts are at noise floor; LED state present but interpretation unverified), AZERO = active, range = 10 nA Auto, source = 0 V with 105 µA limit, trigger = Continuous, mode = Local, buffer = defbuffer1, no script.

Other states this same screen layout will exhibit (from the broader photo set in `uploads/photos/`):
- Function changes — Measure Voltage, Measure Resistance, Measure Power — change the units and which side is "measure" vs "source".
- Output ON vs OFF — when output is on, the readback values are non-trivial and the LED state changes.

**Swipe panels (lower half).** The source region can be swiped horizontally to reveal alternate panels; a dot-position indicator between the regions tracks which panel is showing. These are state variations of Home, not child screens:

- **SETTINGS panel** — `uploads/photos/photo-690_singular_display_fullPicture.jpeg` (cleanest capture; also photo-392, same state with a hand in frame). A two-row control grid replaces the source region: `Rel` (toggle), `Math` (X), `NPLCs` (`1`), `Filter` (X), `Auto Zero` (✓), `Display Digits` (`5.5 Digits` · `Auto`), with range up/down arrow buttons at the right and a dimmed `Range / Source / Limit` summary row along the bottom edge (`Range: 20mV · Source: +0.0000V · Limit: 105.00µA`, legible in photo-392).
- **SETTINGS panel, Filter + Auto Zero active** — photo-694. Same grid with `Filter` checked (white-outlined) and the `FILTER` and `AZERO` annunciators stacked at the top right of the measure region; reading `+00.0010 nA`.
- **SETTINGS panel, Math on** — photo-698. `Math` enabled (white-outlined); the primary readout switches to the math result, reading `-100.000 %`, with a `MATH` annunciator beside `FILTER` / `AZERO` at the top right.
- **GRAPH panel** — photo-418. A mini-plot strip replaces the source region: `GRAPH` caption, pA-scale y-axis labels, time-axis labels, live trace, and an expand icon at the top right of the strip (full-screen counterpart: [graph](graph.md)). Reading `+00.0077 nA`.
- **STATISTICS panel** — photo-448. A statistics readout replaces the source region: `STATISTICS` caption with `Peak to Peak +44.9929pA` · `Average +10.1865pA` · `Standard Dev 2.04261pA` · `Span 1482 rdgs` · `Maximum +00.0316nA` · `Minimum -00.0134nA` and a `Clear Active Buffer` button.

**Other photographed states:**

- **Manual range** — photo-608. Range pill reads `10µA` (fixed, highlighted) instead of `Auto`; function readout in µA (`-00.0001 µA`, source readback `-00.0013 mV`), and an amber warning triangle sits at the far right of the status bar.
- **Warning toast** — photo-646. An inline panel replaces the right side of the screen: ⚠ `Warning 5076` · `Source Limit changed to 1.05e-05 A due to new measure Range` with an `Event Log` button; amber triangle at the far right of the status bar; output ON (blue OUTPUT light).
- **WAIT trigger state** — photo-653. Status pill reads `WAIT ▼` (boxed/highlighted) instead of `CONT`, output ON; readouts `-00.0001 µA` / `-00.0003 V` at range `10µA`.

**Dialog overlays (documented as child screens):** tapping Home's controls launches [measure-range](measure-range.md) (range control, photo-604), [trigger-config](trigger-config.md) (trigger pill, photos 650/657), [buffer-picker](buffer-picker.md) (buffer pill, photo-663), [script-picker](script-picker.md) (script pill, photo-660), [system-info](system-info.md) (system status popup, photo-666), and — when a command is rejected — [error-dialog](error-dialog.md) (photo-684).

## Visible text (verbatim)

Status bar: `Local` · `defbuffer1` · `No Script` · `CONT`.

Measure region: `MEASURE CURRENT 2-WIRE` · `AZERO` · `+00.0102 nA` · `Range` · `10nA` · `Auto`.

Source region: `+00.0002 mV` · `Auto` · `+00.0000 mV` · `105.000 µA`.

Bezel labels (left): `HOME` · `MENU` · `QUICKSET` · `HELP` · `POWER`.

Bezel labels (right): `ENTER` · `EXIT` · `FUNCTION` · `TRIGGER`.

Brand: `KEITHLEY` (top-left of the LCD bezel).

## Confidence notes

Transcriptions verified against the 1600 px downscale (`home.jpg`). Items below are uncertain and should be checked against a higher-resolution capture or the user manual before being treated as authoritative:

- `source-level` exact value — read as `+00.0000 mV` (source = 0 V), but the decimal placement and trailing zeros are at the limit of legibility.
- `source-limit` exact value — read as `105.000 µA`. Could plausibly be `100.000 µA`; the ones digit is ambiguous.
- `output-led` color and meaning — green is visible, but on the 2450 the output-state LED's exact convention (lit = ON vs lit = ARMED) is not derivable from this single shot.
- `azero-indicator` tap-to-toggle behavior — the on-screen `AZERO` may be a passive indicator only, with toggling done via Menu. Unverified.
- `source-limit` ambiguity above is now substantially resolved by the state-variation photos: photo-392 shows a legible `Limit: 105.00µA` in the SETTINGS panel's summary row, and the photo-646 toast reports `Source Limit changed to 1.05e-05 A` (= 10.5 µA at the 10 µA range) — both consistent with the 1.05×-range pattern, supporting the `105.000 µA` reading over `100.000 µA`.
- Swipe-panel details (photos 690/392/694/698/418/448): panel captions (`SETTINGS`, `GRAPH`, `STATISTICS`) and the dimmed `Range / Source / Limit` summary row are at the edge of legibility in most shots; the SETTINGS grid labels are corroborated across four photos, but the exact number and order of swipe panels (and the dot-indicator count) are not fully derivable from these stills.
- photo-418's GRAPH mini-plot axis tick values are not legibly resolved (pA-scale y-axis inferred from the visible suffix; time-format x-axis inferred from `MM:SS`-style labels).
- A dim `REL` label appears at the right edge of the measure region in photos 690/694/698 (below `AZERO` / `FILTER`); whether it is an inactive annunciator placeholder or something else is not resolvable from these shots.
- The launch affordance for the [system-info](system-info.md) popup (plausibly the round info icon at the right end of the status bar) was not captured mid-tap; unconfirmed.

## Manual references

- **`Home and Menu screen overview`** ([`docs/user-manual/home-and-menu-overview.md`](../docs/user-manual/home-and-menu-overview.md), `user-manual` p. 1-11) — the default SourceMeter Home screen described in the manual matches this corpus screen's layout exactly; differs only in source-level / current-limit values (DUT-dependent state, same screen identity).
- **`Connections and usage`** ([`docs/user-manual/connections-and-usage.md`](../docs/user-manual/connections-and-usage.md), `user-manual` pp. 1-7 to 1-10) — physical-connection prerequisites; SENSE HI/LO + FORCE HI/LO banana jacks correspond to the `terminals` control.
- **`Getting started`** ([`docs/user-manual/getting-started.md`](../docs/user-manual/getting-started.md), `user-manual` pp. 1-2 to 1-6) — power-on procedure, high-impedance output-off state, MENU-key navigation that maps to the `btn-menu` hardkey.
- **`Touchscreen display overview`** ([`docs/quickstart/touchscreen-and-home-screen.md`](../docs/quickstart/touchscreen-and-home-screen.md), `quickstart` pp. 15 to 17) — base-2450 quick-start anatomy of this screen: status/event indicator row, measure section, and the five swipe screens (SOURCE, SETTINGS, GRAPH, STATISTICS, USER) that occupy the lower half; the guide's figures show the same layout with output ON.
- **`Connections for testing`** ([`docs/quickstart/connections-for-testing.md`](../docs/quickstart/connections-for-testing.md), `quickstart` pp. 22 to 23) — verify-measurement procedure operating this screen: the `Source` control (this screen's `source-level` input) opens the Current Source Value numeric-entry dialog, and readings appear in the Measure area (`primary-readout`).

Pending sections (manual content not yet processed into the corpus): EC test-application Home/Menu screen variants (Sections 2–7) — those describe application-specific replacements for this default screen and will land as their own corpus screens (`screens/<app>-home.md`) once processed.

## Source photo

Selected from `uploads/photos/`: **photo-262_singular_display_fullPicture.jpeg** — chosen for clarity (no hand or glare, sharp focus on the LCD, full bezel visible, output appears OFF so the readouts are at the noise floor and the screen is in its "rest" configuration). Other candidates and why they were not used for step-0:

- `photo-392`, `photo-604`, `photo-690` — hand in frame.
- `photo-477`, `photo-549` — Graph view, not the foundational Home screen.
- `photo-715` — Calculation Settings modal overlay; better as a separate child-screen example.
- `photo-650` — angled glare and visible feet/seating; lower fidelity.
