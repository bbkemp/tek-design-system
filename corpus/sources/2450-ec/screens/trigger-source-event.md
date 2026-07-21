---
provenance: observed
class: screen
software: 2450-EC
software_version: TBD
screen_id: trigger-source-event
screen_title: Source Event picker
screen_type: dialog
image: trigger-source-event.jpg
source_photo: uploads/photos/photo-582_singular_display_fullPicture.jpeg
navigation_path: [Home, Graph, Trigger, Source Event]
parent_screens:
  - graph-trigger
child_screens: []
controls:
  - id: dialog-title
    label: Source Event
    type: indicator
    state: active
    action: Modal title.
  - id: opt-digital-input-line
    label: Digital Input Line
    type: button
    state: enabled
    action: Selects a rear-panel digital input line as the trigger source event. Follow-up line selection presumed, not captured.
  - id: opt-tsp-link-input
    label: TSP-Link Input
    type: button
    state: active
    action: Selects a TSP-Link line as the trigger source event. Shown highlighted with a white outline — the current selection (the underlying Trigger tab reads "TSP-Link In 2"). Follow-up line selection presumed, not captured.
  - id: opt-display-trigger-key
    label: Display TRIGGER Key
    type: button
    state: enabled
    action: Selects the front-panel TRIGGER hardkey as the source event.
  - id: opt-source-limit
    label: Source Limit
    type: button
    state: enabled
    action: Selects the source limit (compliance) condition as the source event.
  - id: opt-none
    label: None
    type: button
    state: enabled
    action: Clears the source event selection.
  - id: btn-cancel
    label: Cancel
    type: button
    state: enabled
    action: Dismisses the modal without changing the setting.
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
    action: Output-state LED. State not clearly visible in this shot.
---

# Source Event picker

## Purpose

Modal picker for the Graph Trigger tab's **Source Event** setting — the event that initiates a triggered acquisition. It overlays the center of the Trigger tab (`graph-trigger`), which remains dimly visible behind it. The user taps one of five event sources or cancels; the chosen source becomes the value shown on the Trigger tab (here `TSP-Link In 2`, matching the highlighted `TSP-Link Input` option).

## Controls inventory

The modal is a single vertical stack under the `dialog-title` (`Source Event`): `opt-digital-input-line`, `opt-tsp-link-input` (highlighted with a white outline — the current selection), `opt-display-trigger-key`, `opt-source-limit`, `opt-none`, and a smaller `btn-cancel` at the bottom. Behind the modal, the dimmed Trigger tab rows (Source Event, Delay, Position, Trigger Clear) and the `Graph` tab and `CONT` pill remain partially visible.

The **hardware bezel** surrounds the LCD as on every screen. Left side, top-to-bottom: `btn-home`, `btn-menu`, `btn-quickset`, `btn-help`, then `usb-port` and `btn-power`. Right side: `control-knob` at top, then `btn-enter`, `btn-exit`, `btn-function`, `btn-trigger`, the four-terminal banana jacks (`terminals`), and the `output-led`. Much of the right bezel is obscured by the user's hand in this shot.

## State variations

Visible in this photo (photo-582): TSP-Link Input is the current selection (white outline). Any of the other four options could carry the highlight instead, depending on the configured source event. Selecting `Digital Input Line` or `TSP-Link Input` presumably leads to a line-number selection step (the Trigger tab shows a specific line, "In 2") — that step is not captured in the photo set.

## Visible text (verbatim)

Modal: `Source Event` · `Digital Input Line` · `TSP-Link Input` · `Display TRIGGER Key` · `Source Limit` · `None` · `Cancel`.

Visible behind the modal: `Graph` · `Source Event` · `Delay` · `Position` · `Trigger Clear` · `CONT`.

Bezel labels (left): `HOME` · `MENU` · `QUICKSET` · `HELP`.

Bezel labels (right, partially obscured by hand): `ENTER`.

## Confidence notes

- The white outline on `opt-tsp-link-input` is interpreted as current-selection highlight (it matches the Trigger tab's `TSP-Link In 2` value); it could alternatively be knob focus. Unverified.
- The presumed follow-up step for line-based sources (choosing which digital / TSP-Link line) is inferred from the "In 2" value on the parent screen; not observed.
- Whether the highlight advances on tap-and-confirm (ENTER) or tap alone commits the choice is not derivable from a still photo.
- The user's hand obscures most of the right bezel; right-bezel controls are attested from sibling Graph-family photos, not this shot.
- This modal's overlay anatomy (centered stack of option pills + Cancel) matches the Trigger Clear picker (`trigger-clear`); noted for cross-reference.

## Manual references

> Pending. Manual will be paired in a later pass (2450-EC User's Manual, sections covering trigger source events, digital I/O trigger lines, and TSP-Link trigger lines). The currently processed manual chunks do not cover the trigger model.

## Source photo

Selected from `uploads/photos/`: **photo-582_singular_display_fullPicture.jpeg** — the only capture of this modal; all option labels legible despite the hand at the right edge. No other candidates.
