---
provenance: observed
class: screen
software: 2450-EC
software_version: TBD
screen_id: position-edit
screen_title: Trigger Position editor
screen_type: dialog
image: position-edit.jpg
source_photo: uploads/photos/photo-597_singular_display_fullPicture.jpeg
navigation_path: [Home, Graph, Trigger, Position]
parent_screens:
  - graph-trigger
child_screens: []
controls:
  - id: dialog-title
    label: Position
    type: indicator
    state: active
    action: Editor title.
  - id: value-field
    label: "50 %"
    type: input
    state: active
    action: The position value being edited, in a bordered entry field spanning the editor's width.
  - id: keypad-digits
    label: "0–9"
    type: button
    state: enabled
    action: Numeric digit keys, laid out calculator-style (7 8 9 / 4 5 6 / 1 2 3 / 0).
  - id: keypad-edit-keys
    label: "Back / Clear / /10 / x10"
    type: button
    state: enabled
    action: Editing keys in the right-hand keypad columns — Back (backspace), Clear, divide-by-10, multiply-by-10. Several keys are partially legible in this shot (see Confidence notes).
  - id: btn-max
    label: Max
    type: button
    state: enabled
    action: Sets the value to its maximum.
  - id: btn-min
    label: Min
    type: button
    state: enabled
    action: Sets the value to its minimum.
  - id: btn-cancel
    label: Cancel
    type: button
    state: enabled
    action: Dismisses the editor without applying.
  - id: btn-ok
    label: OK
    type: button
    state: enabled
    action: Applies the entered value and returns to the Trigger tab.
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

# Trigger Position editor

## Purpose

Full-screen numeric keypad editor for the Graph Trigger tab's **Position** value (the trigger event's placement in the plotted window, as a percentage), opened by tapping the Position value pill on `graph-trigger`. Same generic numeric-entry overlay as the Delay editor — title and units track the edited setting; here the value is `50 %`.

## Controls inventory

The editor is headed by `dialog-title` (`Position`) with the `value-field` (`50 %`) in a wide bordered entry box directly beneath. The **keypad** occupies the center: `keypad-digits` in a calculator grid (7 8 9 / 4 5 6 / 1 2 3 / 0 on the bottom row) with `keypad-edit-keys` (`Back`, `Clear`, `/10`, `x10` — partially legible) in the right-hand columns. To the keypad's left sit `btn-max` and `btn-min`; the bottom corners hold `btn-cancel` (left) and `btn-ok` (right).

The **hardware bezel** surrounds the LCD as on every screen. Left side, top-to-bottom: `btn-home`, `btn-menu`, `btn-quickset`, `btn-help`, then `usb-port` and `btn-power`. Right side: `control-knob` at top, then `btn-enter`, `btn-exit`, `btn-function`, `btn-trigger`, the four-terminal banana jacks (`terminals`), and the green `output-led`. The lower right bezel is partially obscured by the user's hand in this shot.

## State variations

Visible in this photo (photo-597): value `50 %`, matching the `50%` shown on the Trigger tab. Same editor chrome as `delay-edit` with a different title, unit, and (apparently) no SI-prefix keys active for a percentage value — key-by-key differences are below legibility (see Confidence notes).

## Visible text (verbatim)

Title: `Position`.

Value field: `50 %`.

Keypad: `7` · `8` · `9` · `4` · `5` · `6` · `1` · `2` · `3` · `0` · `Back` · `Clear` · `Max` · `Min` · `Cancel` · `OK`.

Bezel labels (left): `HOME` · `MENU` · `QUICKSET` · `HELP`.

Bezel labels (right, partially obscured by hand): `ENTER` · `EXIT` · `FUNCTION` · `TRIGGER` (attested from sibling photos).

## Confidence notes

- The right-hand keypad columns are softer in this shot than in the Delay editor's photo: `Back` and `Clear` read clearly; the keys presumed to be `/10`, `x10`, `+/-`, decimal point, and any prefix/`Engr` keys are not crisply resolved. Whether SI-prefix keys (`m`, `µ`, `n`) are present-but-dimmed or absent for a percentage value is not derivable from this photo.
- Whether the `%` in the value field is a fixed unit suffix or a tappable control is not derivable from the photo.
- The editor is presumed to be the instrument's generic numeric-entry overlay: identical keypad anatomy to `delay-edit` and to the source value editors documented from the Home-screen family (source-edit; documented by a separate pass). Shared-anatomy claim is based on visual comparison of the photos, not on the manual.
- The user's hand covers part of the OK button region; the `OK` label is read from context and the visible key edge plus the identical layout in `delay-edit`.

## Manual references

> Pending. Manual will be paired in a later pass (2450-EC User's Manual, sections covering numeric entry and trigger position). The currently processed manual chunks do not cover the trigger model or numeric entry.

## Source photo

Selected from `uploads/photos/`: **photo-597_singular_display_fullPicture.jpeg** — the only capture of the Position editor; title, value, and digit keys legible; hand encroaches on the lower-right of the LCD. No other candidates.
