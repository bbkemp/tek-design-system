---
provenance: observed
class: screen
software: 2450-EC
software_version: TBD
screen_id: graph-data
screen_title: Graph — Data tab
screen_type: graph
image: graph-data.jpg
source_photo: uploads/photos/photo-539_singular_display_fullPicture.jpeg
navigation_path: [Home, Graph, Data]
parent_screens:
  - graph
child_screens: []
controls:
  - id: tab-graph
    label: Graph
    type: tab
    state: enabled
    action: Returns to the plot view (screen `graph`).
  - id: tab-data
    label: Data
    type: tab
    state: active
    action: Trace-management view — which buffer elements are plotted and how. Active in this shot.
  - id: tab-scale
    label: Scale
    type: tab
    state: enabled
    action: Switches to axis scaling configuration (screen `graph-scale`).
  - id: tab-trigger
    label: Trigger
    type: tab
    state: enabled
    action: Switches to graph-scoped trigger configuration (screen `graph-trigger`).
  - id: status-trigger
    label: CONT
    type: button
    state: active
    action: Trigger model state (Continuous). Chevron indicates tappable; opens trigger config.
  - id: traces-list
    label: Traces
    type: input
    state: enabled
    action: List of traces currently on the graph. Shows "Active (defbuffer1.meas)" and "defbuffer2.src" in this shot. Tap a row to select a trace (selection behavior inferred from the Add/Remove buttons, unverified).
  - id: trace-add
    label: Add
    type: button
    state: active
    action: Adds a trace to the list. Shown with a white focus outline in this shot (knob focus, interpretation unverified). Presumably opens a buffer/element picker — not captured.
  - id: trace-remove
    label: Remove
    type: button
    state: enabled
    action: Removes the selected trace. Rendered dimmer than Add — may be disabled until a non-active trace is selected. Unverified.
  - id: trace-clear-buffer
    label: Clear Buffer
    type: button
    state: enabled
    action: Clears the readings in the selected trace's buffer. Rendered dimmer than Add — enable condition unverified.
  - id: graph-type
    label: Time
    type: dropdown
    state: enabled
    action: Graph Type selector — Time (y vs. time) or Scatter/IV (one buffer element vs. another). Current value Time. Tap behavior (picker) not captured.
  - id: draw-style
    label: Both
    type: dropdown
    state: enabled
    action: Draw Style selector — line, marker, or both. Current value Both. Tap behavior (picker) not captured.
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
    action: Output-state LED. Green visible; on/off/armed convention unverified.
---

# Graph — Data tab

## Purpose

The Data tab of the Graph view manages *what* is drawn on the plot: which buffer elements appear as traces, and the graph's type and draw style. It is the sibling of the Graph, Scale, and Trigger tabs and is reached by tapping **Data** in the Graph view's tab bar. Users come here to add or remove traces (e.g. plot `defbuffer2.src` alongside the active `defbuffer1.meas`), to clear a buffer, or to switch between a time-series plot and a Scatter/IV plot of one element against another.

## Controls inventory

The **tab bar** runs across the top of the LCD: `tab-graph`, `tab-data` (active in this shot), `tab-scale`, `tab-trigger`, with the trigger state pill `status-trigger` (`CONT`) at the right end — identical chrome to the sibling Graph-family screens.

The **Traces region** fills the upper body. The `traces-list` box on the left, headed by the label `Traces` with a small sublabel beneath it, lists the traces currently plotted — `Active (defbuffer1.meas)` and `defbuffer2.src` in this shot. To its right sit three stacked buttons: `trace-add` (`Add`, shown with a white focus outline), `trace-remove` (`Remove`), and `trace-clear-buffer` (`Clear Buffer`). Remove and Clear Buffer render dimmer than Add; whether that is a disabled state or lighting is flagged in Confidence notes.

The **bottom row** holds two labeled selectors: `graph-type` (`Graph Type`, current value `Time`, with a sublabel indicating the Time / Scatter-IV choice) and `draw-style` (`Draw Style`, current value `Both`, with a sublabel indicating the line / marker / both choice).

The **hardware bezel** is identical to the Home screen. Left side, top-to-bottom: `btn-home`, `btn-menu`, `btn-quickset`, `btn-help`, then `usb-port` and `btn-power`. Right side: `control-knob` at top, then `btn-enter`, `btn-exit`, `btn-function`, `btn-trigger`, the four-terminal banana jacks (`terminals`), and the green `output-led`.

## State variations

Visible in this photo (photo-539): two traces listed — `Active (defbuffer1.meas)` and `defbuffer2.src`; Graph Type = Time; Draw Style = Both; knob focus on Add.

Other states from the photo set:
- **Single trace** — `uploads/photos/photo-507_singular_display_fullPicture.jpeg` shows the same screen with only `Active (defbuffer1.meas)` in the list; same Graph Type / Draw Style values.
- **Graph Type = Scatter/IV** — changes the plot on the Graph tab to plot one buffer element against another (X: `defbuffer1.src` vs Y: `defbuffer1.meas` in `uploads/photos/photo-549_singular_display_fullPicture.jpeg`); documented as a state variation of `graph`.
- `uploads/photos/photo-546_singular_display_fullPicture.jpeg` is a blurry duplicate of this same state — not used.

## Visible text (verbatim)

Tab bar: `Graph` · `Data` · `Scale` · `Trigger` · `CONT`.

Traces region: `Traces` · `Active (defbuffer1.meas)` · `defbuffer2.src` · `Add` · `Remove` · `Clear Buffer`.

Bottom row: `Graph Type` · `Time` · `Draw Style` · `Both`.

Bezel labels (left): `HOME` · `MENU` · `QUICKSET` · `HELP` · `POWER`.

Bezel labels (right): `ENTER` · `EXIT` · `FUNCTION` · `TRIGGER`.

Brand: `KEITHLEY` (top-left of the LCD bezel).

## Confidence notes

- Sublabels — the small grey text under `Traces` (read as approximately `Select Trace`), under `Graph Type` (approximately `Time or Scatter/IV`), and under `Draw Style` (approximately `Line, Marker, or Both`) sits below crisp legibility in both the original and the 1600 px downscale. Wording is plausible but unverified.
- `trace-remove` and `trace-clear-buffer` render dimmer than `trace-add` — could be a disabled state (nothing selected) or backlight falloff. Unverified.
- The white outline on `trace-add` is interpreted as knob-focus highlight (consistent with focus outlines seen elsewhere in the Graph family), not a pressed state. Unverified.
- Tap targets for `graph-type` and `draw-style` presumably open option pickers; no photo captures them.
- Selection behavior of `traces-list` rows (tap-to-select feeding Remove/Clear Buffer) is inferred from the button arrangement, not observed.

## Manual references

> Pending. Manual will be paired in a later pass (2450-EC User's Manual, sections covering the Graph view's Data tab, trace management, buffer selection, and graph type / draw style options). The currently processed manual chunks (introduction, getting started, connections, Home/Menu overview, cable assembly) do not cover the Graph view.

## Source photo

Selected from `uploads/photos/`: **photo-539_singular_display_fullPicture.jpeg** — chosen because it shows the richer two-trace state with all region labels readable and no hand obstruction. Other candidates:

- `photo-507` — same screen, single-trace state; used as the State variations reference.
- `photo-546` — blurry duplicate of the two-trace state; skipped.
