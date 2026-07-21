---
provenance: observed
class: screen
software: 2450-EC
software_version: TBD
screen_id: filter-picker
screen_title: Filter picker
screen_type: dialog
image: filter-picker.jpg
source_photo: uploads/photos/photo-713_singular_display_fullPicture.jpeg
function_state: "Function: SVMI"
navigation_path: [Menu, Calculation Settings, Filter]
parent_screens:
  - calculation-settings
child_screens: []
related_hardware:
  - front-panel
controls:
  - id: dialog-title
    label: Filter
    type: indicator
    state: active
    action: Dialog title, centered at the top of the modal.
  - id: opt-off
    label: "Off"
    type: button
    state: enabled
    action: Sets Filter to Off and closes the picker.
  - id: opt-on
    label: "On"
    type: button
    state: active
    action: Sets Filter to On and closes the picker. Carries a bright focus border in this shot — consistent with it being the current value (Filter = On on the parent screen).
  - id: opt-cancel
    label: Cancel
    type: button
    state: enabled
    action: Dismisses the picker without changing the Filter state.
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
    action: Cancel or back — presumably dismisses the picker like Cancel.
  - id: btn-function
    label: FUNCTION
    type: hardkey
    state: enabled
    action: Cycle measure / source function.
  - id: btn-trigger
    label: TRIGGER
    type: hardkey
    state: enabled
    action: Manual trigger or start the configured trigger model.
  - id: terminals
    label: ""
    type: terminal
    state: enabled
    action: Front-panel banana jacks — FORCE HI/LO, SENSE HI/LO. Out of frame in this photo; carried from the standard front panel.
  - id: output-led
    label: ""
    type: indicator
    state: active
    action: Output-state LED. Green, lit in this shot; exact convention unverified.
---

# Filter picker

## Purpose

The Filter picker is a minimal two-option modal opened from the Filter row of the Calculation Settings screen. It offers exactly `Off`, `On`, and `Cancel` — the smallest picker pattern in the 2450-EC UI, reused (with different option lists) by the other state buttons on the parent screen. The parent Calculation Settings screen remains visible and dimmed behind it, with its header and rows intact. It is documented as its own screen per the corpus rule that every distinct modal gets its own chunk, however trivial.

## Controls inventory

The modal is a small bordered panel centered on the LCD. `dialog-title` (`Filter`) sits at the top; below it, three stacked full-width buttons: `opt-off`, `opt-on` (carrying a bright focus border, matching the current Filter = On state on the parent), and `opt-cancel`.

Behind the modal, the dimmed parent screen shows the `CALCULATION SETTINGS` header with `Function: SVMI`, the Rel row (`Rel` = `On`, `Rel Value` = `7.9485pA`), the truncated `Filter` and `Math` row labels, `Limit 1` = `Off` with its gear, and the clipped `Limit 2` row.

The **hardware bezel** is the standard 2450-EC front panel. Left side, top-to-bottom: `btn-home`, `btn-menu`, `btn-quickset`, `btn-help`, then `usb-port` and `btn-power`. Right side: `control-knob`, `btn-enter`, `btn-exit`, `btn-function`, `btn-trigger`, the banana jacks (`terminals`, out of frame here), and `output-led` (green, lit).

## State variations

Visible in this photo: current selection = On (focus border), parent state Filter = On, function = SVMI.

Other states (by construction): with Filter = Off on the parent, `opt-off` would carry the focus border instead. The same modal anatomy — title, stacked option buttons, Cancel — recurs for the other state buttons on Calculation Settings (Rel adds an `Acquire` option per its subtitle) and for `display-digits` on the Home settings panel.

## Visible text (verbatim)

Dialog: `Filter` · `Off` · `On` · `Cancel`.

Background (dimmed): `CALCULATION SETTINGS` · `Function: SVMI` · `Rel` · `On` · `Rel Value` · `7.9485pA` · `Filter` · `Math` · `Limit 1` · `Off` · `Limit 2`.

Bezel labels (left): `HOME` · `MENU` · `QUICKSET` · `HELP`.

Bezel labels (right): `ENTER` · `EXIT` · `FUNCTION` · `TRIGGER`.

## Confidence notes

Transcriptions verified against the 1600 px downscale (`filter-picker.jpg`) and a full-resolution crop of the LCD. Uncertain items:

- `opt-on` focus border interpretation — read as "highlighted because On is the current value"; it could alternatively be knob-navigation focus. The parent screen's Filter = On (photo-709) supports the current-value reading.
- Whether tapping an option commits immediately or requires ENTER — not derivable from a still.
- EXIT-hardkey-as-Cancel behavior — assumed, unverified.
- Background row values are read through the dimming overlay; they match photo-709's states, which is the basis for treating this as the same parent screen session.
- Hardware bezel — terminals are out of frame; bezel entries carried from the standard front panel (`hardware/front-panel.md`).

## Manual references

> Pending. Manual will be paired in a later pass (2450-EC User's Manual, sections covering filtering / averaging of measurements).

## Source photo

Selected from `uploads/photos/`: **photo-713_singular_display_fullPicture.jpeg** — the only shot of the Filter picker; modal fully visible and legible, parent screen readable behind the dimming. Related: `photo-709` is the same parent screen without the overlay (canonical for `calculation-settings`).
