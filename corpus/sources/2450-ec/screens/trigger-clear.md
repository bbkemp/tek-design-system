---
provenance: observed
class: screen
software: 2450-EC
software_version: TBD
screen_id: trigger-clear
screen_title: Trigger Clear picker
screen_type: dialog
image: trigger-clear.jpg
source_photo: uploads/photos/photo-601_singular_display_fullPicture.jpeg
navigation_path: [Home, Graph, Trigger, Trigger Clear]
parent_screens:
  - graph-trigger
child_screens: []
controls:
  - id: dialog-title
    label: Trigger Clear
    type: indicator
    state: active
    action: Modal title.
  - id: opt-never
    label: Never
    type: button
    state: enabled
    action: Trigger is never automatically cleared.
  - id: opt-enter
    label: Enter
    type: button
    state: active
    action: Current selection (white outline; matches the "Enter" value on the Trigger tab). Exact clearing semantics of "Enter" require the manual.
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

# Trigger Clear picker

## Purpose

Modal picker for the Graph Trigger tab's **Trigger Clear** setting. It overlays the center of the Trigger tab (`graph-trigger`) and offers exactly two values — `Never` and `Enter` — plus Cancel. The chosen value becomes the Trigger Clear value shown on the Trigger tab (here `Enter`, matching the highlighted option).

## Controls inventory

The modal is a compact vertical stack under the `dialog-title` (`Trigger Clear`): `opt-never`, `opt-enter` (highlighted with a white outline — the current selection), and a smaller `btn-cancel` at the bottom. Behind the modal, the dimmed Trigger tab remains visible: the tab bar (`Graph`, `Data`, `Scale` — still carrying the white knob-focus outline seen in the parent screen's photo — `Trigger`, `CONT`) and the rows Source Event / Delay / Position / Trigger Clear.

The **hardware bezel** surrounds the LCD as on every screen. Left side, top-to-bottom: `btn-home`, `btn-menu`, `btn-quickset`, `btn-help`, then `usb-port` and `btn-power`. Right side: `control-knob` at top, then `btn-enter`, `btn-exit`, `btn-function`, `btn-trigger`, the four-terminal banana jacks (`terminals`), and the `output-led`. The right bezel is partially obscured by the user's hand in this shot.

## State variations

Visible in this photo (photo-601): Enter is the current selection. The only other selectable state is Never carrying the highlight.

## Visible text (verbatim)

Modal: `Trigger Clear` · `Never` · `Enter` · `Cancel`.

Visible behind the modal: `Graph` · `Data` · `Scale` · `Trigger` · `CONT` · `Source Event` · `Delay` · `Position` · `Trigger Clear` · `Enter`.

Bezel labels (left): `HOME` · `MENU` · `QUICKSET` · `HELP`.

Bezel labels (right, partially obscured by hand): `ENTER` · `EXIT`.

## Confidence notes

- The semantics of the two options (what "Enter" clears and when, versus "Never") are not derivable from the photo; requires manual.
- The white outline on `opt-enter` is interpreted as current-selection highlight (it matches the parent screen's value); could alternatively be knob focus. Unverified.
- The user's hand obscures part of the right bezel; right-bezel controls are attested from sibling Graph-family photos.
- This modal's overlay anatomy matches the Source Event picker (`trigger-source-event`) at a smaller size; noted for cross-reference.

## Manual references

> Pending. Manual will be paired in a later pass (2450-EC User's Manual, sections covering trigger clear behavior in the trigger model). The currently processed manual chunks do not cover the trigger model.

## Source photo

Selected from `uploads/photos/`: **photo-601_singular_display_fullPicture.jpeg** — the only capture of this modal; all three option labels legible. No other candidates.
