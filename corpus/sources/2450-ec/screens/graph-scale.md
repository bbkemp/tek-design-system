---
provenance: observed
class: screen
software: 2450-EC
software_version: TBD
screen_id: graph-scale
screen_title: Graph — Scale tab
screen_type: config
image: graph-scale.jpg
source_photo: uploads/photos/photo-552_singular_display_fullPicture.jpeg
navigation_path: [Home, Graph, Scale]
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
    state: enabled
    action: Switches to trace management (screen `graph-data`).
  - id: tab-scale
    label: Scale
    type: tab
    state: active
    action: Axis scaling configuration. Active in this shot.
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
  - id: x-method
    label: SmartScale
    type: dropdown
    state: enabled
    action: X-Axis scaling method. Current value SmartScale. Tap behavior (picker of scaling methods) not captured.
  - id: x-scale
    label: "14.75s"
    type: readout
    state: active
    action: X-Axis scale (time span per screen width or per division — interpretation unverified). Shown as a value, tap-to-edit unverified.
  - id: x-min-position
    label: "89.622ms"
    type: readout
    state: active
    action: X-Axis minimum position. Shown as a value, tap-to-edit unverified.
  - id: trace-selector
    label: defbuffer1
    type: dropdown
    state: active
    action: Which trace the Y-Axis settings below apply to. Rendered as a green highlighted pill labeled "Trace:". Tap behavior (trace picker) not captured.
  - id: y-method
    label: SmartScale
    type: dropdown
    state: enabled
    action: Y-Axis scaling method. Current value SmartScale.
  - id: y-scale
    label: "5.500pA"
    type: readout
    state: active
    action: Y-Axis scale value. Shown as a value, tap-to-edit unverified.
  - id: y-scale-format
    label: Linear
    type: dropdown
    state: enabled
    action: Y-Axis scale format — Linear or Log. Current value Linear. The Log state is visible in the plot photos referenced from `graph` (State variations).
  - id: y-min-position
    label: "-20.000pA"
    type: readout
    state: active
    action: Y-Axis minimum position. Shown as a value, tap-to-edit unverified.
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

# Graph — Scale tab

## Purpose

The Scale tab of the Graph view configures how the plot's axes are scaled: the scaling method (SmartScale in this shot), the scale span, the minimum position for each axis, and — for the Y axis — whether the scale is linear or logarithmic. Settings are split into an X-Axis section and a Y-Axis section, with the Y-Axis section scoped to a selected trace. Users come here when the automatic scaling doesn't frame the data usefully, or to switch the Y axis to log for wide-dynamic-range measurements (the log state is visible in the plot photos catalogued under `graph`'s State variations).

## Controls inventory

The **tab bar** runs across the top of the LCD: `tab-graph`, `tab-data`, `tab-scale` (active in this shot), `tab-trigger`, with the trigger state pill `status-trigger` (`CONT`) at the right end.

The **X-Axis section** sits in the upper half under the heading `X-Axis`. On the left, `x-method` (`Method`, value `SmartScale`) is a tappable pill with a small sublabel beneath the label. On the right, two labeled values: `x-scale` (`Scale` `14.75s`) and `x-min-position` (`Minimum Position` `89.622ms`).

A **trace row** divides the two sections: the `trace-selector` — the label `Trace:` followed by a green highlighted pill reading `defbuffer1` — indicates which trace the Y-Axis settings apply to.

The **Y-Axis section** fills the lower half under the heading `Y-Axis`. On the left, `y-method` (`Method`, value `SmartScale`) and below it `y-scale-format` (`Scale Format`, value `Linear`, sublabel indicating the Linear/Log choice). On the right, `y-scale` (`Scale` `5.500pA`) and `y-min-position` (`Minimum Position` `-20.000pA`).

The **hardware bezel** is identical to the Home screen. Left side, top-to-bottom: `btn-home`, `btn-menu`, `btn-quickset`, `btn-help`, then `usb-port` and `btn-power`. Right side: `control-knob` at top, then `btn-enter`, `btn-exit`, `btn-function`, `btn-trigger`, the four-terminal banana jacks (`terminals`), and the green `output-led`.

## State variations

Visible in this photo (photo-552): X Method = SmartScale, X Scale = 14.75s, X Minimum Position = 89.622ms; Trace = defbuffer1; Y Method = SmartScale, Y Scale = 5.500pA, Y Scale Format = Linear, Y Minimum Position = -20.000pA.

Other states knowable from the photo set:
- **Scale Format = Log** — the Graph tab plots with a logarithmic y-axis (decade labels `1.000nA` down to `10e-15A`); see `uploads/photos/photo-562_singular_display_fullPicture.jpeg` and `photo-570`, catalogued under `graph`'s State variations.
- **Trace = defbuffer2** — the trace selector follows whichever buffer is plotted; the log-axis photos above show `defbuffer2` active on the Graph tab.
- **Method ≠ SmartScale** — the Method pills imply other scaling methods (manual/track variants); no photo captures the picker or another method.

## Visible text (verbatim)

Tab bar: `Graph` · `Data` · `Scale` · `Trigger` · `CONT`.

X-Axis section: `X-Axis` · `Method` · `SmartScale` · `Scale` · `14.75s` · `Minimum Position` · `89.622ms`.

Trace row: `Trace:` · `defbuffer1`.

Y-Axis section: `Y-Axis` · `Method` · `SmartScale` · `Scale` · `5.500pA` · `Scale Format` · `Linear` · `Minimum Position` · `-20.000pA`.

Bezel labels (left): `HOME` · `MENU` · `QUICKSET` · `HELP` · `POWER`.

Bezel labels (right): `ENTER` · `EXIT` · `FUNCTION` · `TRIGGER`.

Brand: `KEITHLEY` (top-left of the LCD bezel).

## Confidence notes

- Sublabels under `Method` (both axes) and `Scale Format` are below crisp legibility — the Scale Format sublabel plausibly reads `Linear or Log`, the Method sublabels appear to reference SmartScale on/off wording. Unverified.
- Whether `x-scale`, `x-min-position`, `y-scale`, `y-min-position` are tappable edit targets (opening numeric editors like the Trigger tab's `delay-edit` / `position-edit`) or read-only reflections of SmartScale output is not derivable from this shot.
- The meaning of `Scale` (full span vs. per-division) is not derivable from the photo; requires manual.
- The green highlight on `trace-selector` is interpreted as the standard tappable-value affordance (same styling family as Home's tappable pills); unverified.
- Photographed at a slight angle with mild glare in the upper-right of the LCD; all transcribed values were legible in the original and re-verified against the 1600 px downscale.

## Manual references

> Pending. Manual will be paired in a later pass (2450-EC User's Manual, sections covering Graph view axis scaling, SmartScale behavior, and linear vs. log scale format). The currently processed manual chunks (introduction, getting started, connections, Home/Menu overview, cable assembly) do not cover the Graph view.

## Source photo

Selected from `uploads/photos/`: **photo-552_singular_display_fullPicture.jpeg** — the only Scale-tab capture in the set; no hand obstruction, all primary values legible. No other candidates.
