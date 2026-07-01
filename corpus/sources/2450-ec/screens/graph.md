---
provenance: observed
software: 2450-EC
software_version: TBD
screen_id: graph
screen_title: Graph
screen_type: graph
image: graph.jpg
source_photo: uploads/photos/photo-477_singular_display_fullPicture.jpeg
function_state: MEASURE CURRENT 2-WIRE (inferred from pA-scale y-axis)
navigation_path: [Home, Graph]
parent_screens:
  - home
child_screens:
  - graph-data
  - graph-scale
  - graph-trigger
controls:
  - id: tab-graph
    label: Graph
    type: tab
    state: active
    action: Plot view of buffered measurements over time. Active tab in this shot.
  - id: tab-data
    label: Data
    type: tab
    state: enabled
    action: Switches to a tabular / cursor view of the same buffer. Tap to activate.
  - id: tab-scale
    label: Scale
    type: tab
    state: enabled
    action: Opens y-axis / x-axis scaling and autoscale controls. Tap to activate.
  - id: tab-trigger
    label: Trigger
    type: tab
    state: enabled
    action: Opens trigger-model configuration scoped to this view. Tap to activate.
  - id: status-trigger
    label: CONT
    type: button
    state: active
    action: Trigger model state (Continuous). Chevron indicates tappable; opens trigger config.
  - id: y-axis
    label: ""
    type: indicator
    state: active
    action: Linear current-axis labeled in pA, spanning approximately -30 pA to +30 pA in 10 pA divisions. Exact bounds unverified.
  - id: x-axis
    label: ""
    type: indicator
    state: active
    action: Time axis. Range and tick labels unverified at this resolution.
  - id: waveform
    label: ""
    type: readout
    state: active
    action: Live trace of the active measure function from the active buffer. Three to four upward spikes visible against an otherwise flat baseline.
  - id: buffer-name
    label: defbuffer1
    type: dropdown
    state: enabled
    action: Active reading buffer feeding the plot. Tap to open buffer picker.
  - id: stat-left
    label: "(unverified)"
    type: readout
    state: active
    action: Buffer statistic — likely cursor, minimum, maximum, or running average. Exact value and identity unverified at this resolution.
  - id: stat-right
    label: "(unverified)"
    type: readout
    state: active
    action: Second buffer statistic, paired with stat-left. Identity unverified.
  - id: btn-home
    label: HOME
    type: hardkey
    state: enabled
    action: Returns to the Home readout screen.
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
    action: Front-panel banana jacks — FORCE HI/LO, SENSE HI/LO.
  - id: output-led
    label: ""
    type: indicator
    state: active
    action: Output-state LED. Color/state interpretation unverified in this shot.
---

# Graph

## Purpose

The Graph screen plots the active buffer's measurements over time. It is the primary visualization view for the 2450-EC, reached from Home and serving as the parent for three sibling sub-views (Data, Scale, Trigger) selected via tabs along the top edge. Users come here to look for trends, transients, or noise in a measurement run that is already underway or has completed; the configuration of *what* is plotted (function, range, units) lives elsewhere — this screen is read-only with respect to source/measure setup.

## Controls inventory

The screen is organized into three regions inside a fixed border of hardware bezel buttons.

The **tab bar** runs across the top of the LCD. From left to right: `tab-graph` (active in this shot), `tab-data`, `tab-scale`, `tab-trigger`. The trigger state pill `status-trigger` (`CONT`) sits at the right end with a chevron, identical in role and appearance to its counterpart on the Home screen.

The **plot region** fills the bulk of the screen. `y-axis` shows current values in pA (with the exact min/max bounds and tick spacing unverified at this image resolution); `x-axis` runs along the bottom as a time axis with tick labels not legibly resolved. `waveform` is the live trace — green, predominantly flat near the y-axis baseline, with three to four upward spikes evenly distributed across the visible time window.

The **buffer row** runs across the very bottom of the LCD. `buffer-name` (`defbuffer1`) on the left identifies the source buffer and is tappable to switch buffers — same affordance and behavior as `status-buffer` on Home. `stat-left` and `stat-right` are paired numeric readouts, likely cursor / min / max / average values; their exact identities are unverified at this image resolution and are flagged in **Confidence notes**.

The **hardware bezel** is identical to the Home screen. Left side, top-to-bottom: `btn-home`, `btn-menu`, `btn-quickset`, `btn-help`, then `usb-port` and `btn-power`. Right side: `control-knob` at top, then `btn-enter`, `btn-exit`, `btn-function`, `btn-trigger`, the four-terminal banana jacks (`terminals`), and the green `output-led`. `btn-home` returns the user to the dual-readout Home screen.

## State variations

Visible in this photo: tab = Graph active; trigger = Continuous; buffer = defbuffer1; y-axis units = pA; output state ambiguous.

Other states this same screen layout will exhibit:
- **Tab change** — tapping `tab-data`, `tab-scale`, or `tab-trigger` navigates to the sibling sub-views, documented separately as `graph-data`, `graph-scale`, `graph-trigger`.
- **Function change** — when the active measure function changes (Voltage, Resistance, Power), the y-axis units swap to mV/V, Ω, or W and the trace is redrawn.
- **Trigger state** — `status-trigger` cycles through Continuous, Idle, Running, etc., changing both the label and the chevron behavior.
- **Buffer change** — `buffer-name` changes to whichever buffer is selected; the trace and statistics update.
- **Empty buffer** — when no readings have been taken since the buffer was last cleared, the plot region is empty (no waveform). Not visible in any of the candidate photos.

## Visible text (verbatim)

Tab bar: `Graph` · `Data` · `Scale` · `Trigger`.

Trigger state: `CONT`.

Y-axis: pA-scale tick labels along the left edge (exact values unverified — see Confidence notes).

X-axis: time tick labels along the bottom edge (exact values unverified).

Buffer row: `defbuffer1` plus two paired numeric values (units appear to be pA, exact transcription unverified).

Brand: `KEITHLEY` (top-left of the LCD bezel, partially visible in this shot).

Bezel labels (left): `HOME` · `MENU` · `QUICKSET` · `HELP` · `POWER`.

Bezel labels (right): `ENTER` · `EXIT` · `FUNCTION` · `TRIGGER`.

## Confidence notes

Several elements in this photo sit at or below the legibility limit of the 1600 px downscale. Items below should be checked against a higher-resolution capture or the user manual before being treated as authoritative:

- `y-axis` exact tick values — read as approximately `-30 pA` to `+30 pA` in `10 pA` divisions, but only inferred from spacing and the visible "pA" suffix. Could plausibly be `±25 pA` or `±50 pA`.
- `x-axis` tick labels and time span — not legibly resolved.
- `stat-left` and `stat-right` — exact values not legibly resolved; the *role* of each (cursor X/Y vs. minimum/maximum vs. mean/std-dev) is also unverified. The 2450 typically displays cursor coordinates or min/max statistics in this row.
- `function_state` — inferred from pA-scale y-axis; not directly labeled on this screen. Could be confirmed by inspecting the active measure function on Home.
- `parent_screens: [home]` — assumed because Home is the navigational root and the HOME hardkey returns there. The exact path *to* Graph (FUNCTION hardkey, MENU > Views, swipe, etc.) is not derivable from this single shot.
- `output-led` color and meaning — same caveat as Home; green is visible, but the on/off/armed convention is unverified.
- `tab-data`, `tab-scale`, `tab-trigger` action descriptions — the *content* of those sub-views is inferred from typical SMU instrument patterns, not from photos in `uploads/photos/`. Confirm against the manual or by processing photos of those tabs (likely candidates: photos showing waveforms with tabular overlays for Data; axis-config dialogs for Scale; trigger-model diagrams for Trigger).

## Manual references

> Pending. Manual will be paired in a later pass (2450-EC User's Manual, sections covering the Graph view, buffer statistics display, axis scaling, and tab navigation between Graph / Data / Scale / Trigger).

## Source photo

Selected from `uploads/photos/`: **photo-477_singular_display_fullPicture.jpeg** — chosen for clarity (no hand obstruction, sharp focus on the LCD, full hardware bezel visible, tab bar and waveform readable). Other Graph-view candidates and why they were not used:

- `photo-549` — Histogram/data variant with the Data tab active, scope drift visible. Better as the canonical photo for `graph-data` once that screen is processed.
- Other candidates in `uploads/photos/` — primarily Home screen variants (with and without overlays) or modal dialogs; not Graph views.
