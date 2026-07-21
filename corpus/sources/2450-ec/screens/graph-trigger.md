---
provenance: observed
class: screen
software: 2450-EC
software_version: TBD
screen_id: graph-trigger
screen_title: Graph — Trigger tab
screen_type: config
image: graph-trigger.jpg
source_photo: uploads/photos/photo-589_singular_display_fullPicture.jpeg
navigation_path: [Home, Graph, Trigger]
parent_screens:
  - graph
child_screens:
  - trigger-source-event
  - trigger-clear
  - delay-edit
  - position-edit
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
    state: enabled
    action: Switches to axis scaling (screen `graph-scale`). Shown with a white focus outline in this shot (knob focus, interpretation unverified).
  - id: tab-trigger
    label: Trigger
    type: tab
    state: active
    action: Graph-scoped trigger configuration. Active in this shot.
  - id: status-trigger
    label: CONT
    type: button
    state: active
    action: Trigger model state (Continuous). Chevron indicates tappable; opens trigger config.
  - id: source-event-icon
    label: ""
    type: indicator
    state: active
    action: Arrow-and-triangle glyph beneath the Source Event label — appears to diagram the trigger event position. Exact meaning unverified.
  - id: source-event
    label: TSP-Link In 2
    type: dropdown
    state: enabled
    action: Trigger source event. Tap opens the Source Event picker (screen `trigger-source-event`). Current value TSP-Link In 2.
  - id: source-event-settings
    label: ""
    type: button
    state: enabled
    action: Gear icon beside the Source Event value — presumably opens settings for the selected event source (e.g. which TSP-Link line). Not captured; unverified.
  - id: trigger-delay
    label: "0.0000s"
    type: input
    state: enabled
    action: Trigger delay. Tap opens a numeric keypad editor (screen `delay-edit`).
  - id: trigger-position
    label: "50%"
    type: input
    state: enabled
    action: Trigger position — where the trigger event sits in the plotted window. Tap opens a numeric keypad editor (screen `position-edit`).
  - id: trigger-clear-setting
    label: Enter
    type: dropdown
    state: enabled
    action: Trigger Clear setting. Tap opens the Trigger Clear picker (screen `trigger-clear`). Current value Enter.
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

# Graph — Trigger tab

## Purpose

The Trigger tab of the Graph view configures the trigger that governs the plotted acquisition: which event starts it (Source Event), how long after the event acquisition begins (Delay), where the event sits inside the plotted window (Position), and when the trigger is cleared (Trigger Clear). It is the fourth tab of the Graph family. Each of its four settings is a tappable value that opens its own picker or numeric editor — those overlays are documented as the child screens `trigger-source-event`, `delay-edit`, `position-edit`, and `trigger-clear`.

## Controls inventory

The **tab bar** runs across the top of the LCD: `tab-graph`, `tab-data`, `tab-scale` (shown with a white focus outline — see Confidence notes), `tab-trigger` (active), with the trigger state pill `status-trigger` (`CONT`) at the right end.

The **settings column** fills the body, four labeled rows top-to-bottom, each with a small grey sublabel under its label and a tappable value pill to the right:

- `source-event` — label `Source Event`, value `TSP-Link In 2`, with `source-event-settings` (a gear icon) immediately to the value's right and the `source-event-icon` arrow-and-triangle glyph beneath the label.
- `trigger-delay` — label `Delay`, value `0.0000s`.
- `trigger-position` — label `Position`, value `50%`.
- `trigger-clear-setting` — label `Trigger Clear`, value `Enter`.

The **hardware bezel** is identical to the Home screen. Left side, top-to-bottom: `btn-home`, `btn-menu`, `btn-quickset`, `btn-help`, then `usb-port` and `btn-power`. Right side: `control-knob` at top, then `btn-enter`, `btn-exit`, `btn-function`, `btn-trigger`, the four-terminal banana jacks (`terminals`), and the green `output-led`.

## State variations

Visible in this photo (photo-589): Source Event = TSP-Link In 2; Delay = 0.0000s; Position = 50%; Trigger Clear = Enter; knob focus on the Scale tab.

Other states knowable from the photo set:
- **Source Event picker open** — tapping `source-event` overlays the Source Event modal (`trigger-source-event`, photo-582), listing Digital Input Line / TSP-Link Input / Display TRIGGER Key / Source Limit / None.
- **Trigger Clear picker open** — tapping `trigger-clear-setting` overlays the Trigger Clear modal (`trigger-clear`, photo-601), listing Never / Enter.
- **Delay / Position editors open** — tapping the value pills overlays full-screen numeric keypad editors (`delay-edit`, photo-593; `position-edit`, photo-597).
- Source Event values other than TSP-Link In 2 (per the picker's options) would change this row's value text; not photographed.

## Visible text (verbatim)

Tab bar: `Graph` · `Data` · `Scale` · `Trigger` · `CONT`.

Settings column: `Source Event` · `TSP-Link In 2` · `Delay` · `0.0000s` · `Position` · `50%` · `Trigger Clear` · `Enter`.

Bezel labels (left): `HOME` · `MENU` · `QUICKSET` · `HELP` · `POWER`.

Bezel labels (right): `ENTER` · `EXIT` · `FUNCTION` · `TRIGGER`.

Brand: `KEITHLEY` (top-left of the LCD bezel).

## Confidence notes

- Sublabels — the small grey text under `Delay` (read as approximately `0s to 10 ks`), under `Position` (approximately `0% to 100% before source event`), and under `Trigger Clear` (approximately `Never or Enter`) is below crisp legibility. Wording is plausible but unverified.
- The white outline on `tab-scale` while `tab-trigger` is the active (highlighted) tab is interpreted as a knob-focus indicator sitting on a different element than the active tab. Unverified — could also be a transient touch highlight.
- `source-event-settings` (gear icon) function is inferred from the icon; the overlay it opens (e.g. TSP-Link line number selection) was not photographed.
- The `source-event-icon` glyph's exact meaning (trigger-event position diagram) is inferred; unverified.
- A hand is present at the right edge of the frame (blurred, over part of the bezel) but does not obscure the LCD; bezel-side content behind it (knob, jacks) is attested from the sibling Graph-family photos.
- `photo-579` is a blurrier capture of this same state with the hand over more of the panel; it was skipped as canonical (see Source photo).

## Manual references

> Pending. Manual will be paired in a later pass (2450-EC User's Manual, sections covering graph/trigger configuration, trigger source events, TSP-Link trigger lines, trigger delay and position, and trigger clear). The currently processed manual chunks (introduction, getting started, connections, Home/Menu overview, cable assembly) do not cover the Graph view or the trigger model.

## Source photo

Selected from `uploads/photos/`: **photo-589_singular_display_fullPicture.jpeg** — sharpest capture of the Trigger tab; all four setting values legible; hand at frame edge does not cover the LCD. Other candidate:

- `photo-579` — same state, blurrier, hand covering more of the right bezel; skipped.
