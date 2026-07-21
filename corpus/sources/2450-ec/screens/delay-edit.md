---
provenance: observed
class: screen
software: 2450-EC
software_version: TBD
screen_id: delay-edit
screen_title: Trigger Delay editor
screen_type: dialog
image: delay-edit.jpg
source_photo: uploads/photos/photo-593_singular_display_fullPicture.jpeg
navigation_path: [Home, Graph, Trigger, Delay]
parent_screens:
  - graph-trigger
child_screens: []
controls:
  - id: dialog-title
    label: Delay
    type: indicator
    state: active
    action: Editor title.
  - id: value-field
    label: "+0.00000 s"
    type: input
    state: active
    action: The delay value being edited, in a bordered entry field spanning the editor's width.
  - id: keypad-digits
    label: "0–9"
    type: button
    state: enabled
    action: Numeric digit keys, laid out calculator-style (7 8 9 / 4 5 6 / 1 2 3 / 0).
  - id: keypad-units
    label: "m µ n"
    type: button
    state: enabled
    action: SI-prefix keys in the right-hand keypad columns — milli, micro, nano. Additional keys in the same columns are partially legible (see Confidence notes).
  - id: keypad-edit-keys
    label: "Back / Clear / /10 / x10"
    type: button
    state: enabled
    action: Editing keys — Back (backspace), Clear, divide-by-10, multiply-by-10. A key read as "Engr" (engineering notation) and a +/- and decimal key are partially legible; see Confidence notes.
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

# Trigger Delay editor

## Purpose

Full-screen numeric keypad editor for the Graph Trigger tab's **Delay** value, opened by tapping the Delay value pill on `graph-trigger`. The editor covers nearly the whole LCD, dimming the Trigger tab beneath it (fragments of its row labels remain visible at the left edge). The user types a value with the calculator-style keypad, optionally applies an SI prefix, and commits with OK (or ENTER on the bezel).

## Controls inventory

The editor is headed by `dialog-title` (`Delay`) with the `value-field` (`+0.00000 s`) in a wide bordered entry box directly beneath. The **keypad** occupies the center: `keypad-digits` in a calculator grid (7 8 9 / 4 5 6 / 1 2 3 / 0 on the bottom row), with `keypad-units` (SI-prefix keys — `m`, `µ`, `n`) and `keypad-edit-keys` (`Back`, `Clear`, `/10`, `x10`, and a key read as `Engr`) in the right-hand columns. To the keypad's left sit `btn-max` and `btn-min`; the bottom corners hold `btn-cancel` (left) and `btn-ok` (right).

The **hardware bezel** surrounds the LCD as on every screen. Left side, top-to-bottom: `btn-home`, `btn-menu`, `btn-quickset`, `btn-help`, then `usb-port` and `btn-power`. Right side: `control-knob` at top, then `btn-enter`, `btn-exit`, `btn-function`, `btn-trigger`, the four-terminal banana jacks (`terminals`), and the green `output-led`.

## State variations

Visible in this photo (photo-593): value `+0.00000 s` — the Delay at its zero default, matching the `0.0000s` shown on the Trigger tab. The same editor chrome appears with different titles/units for the other numeric settings (see `position-edit` for the Position variant; the value field and unit keys track the edited setting).

## Visible text (verbatim)

Title: `Delay`.

Value field: `+0.00000 s`.

Keypad: `7` · `8` · `9` · `4` · `5` · `6` · `1` · `2` · `3` · `0` · `m` · `µ` · `n` · `Back` · `Clear` · `Max` · `Min` · `Cancel` · `OK`.

Bezel labels (left): `HOME` · `MENU` · `QUICKSET` · `HELP`.

Bezel labels (right): `ENTER` · `EXIT` · `FUNCTION` · `TRIGGER`.

## Confidence notes

- Keypad function keys in the rightmost columns are at the legibility limit: one key is read as `Engr` (engineering-notation entry), the keys read as `/10` and `x10` are plausible but soft, and the bottom row appears to include `+/-` and a decimal-point key whose glyphs are not crisply resolved. Flagged rather than asserted.
- Whether the `s` in the value field is a fixed unit suffix or a tappable unit control is not derivable from the photo.
- The editor is presumed to be the instrument's generic numeric-entry overlay: the identical keypad anatomy appears in the Position editor (`position-edit`) and in the source value editors documented from the Home-screen family (source-edit; documented by a separate pass). Shared-anatomy claim is based on visual comparison of the photos, not on the manual.
- Fragments of the dimmed Trigger tab labels are visible along the left edge (`So…`, `T…`); transcription of the background is omitted as it is fully documented in `graph-trigger`.

## Manual references

> Pending. Manual will be paired in a later pass (2450-EC User's Manual, sections covering numeric entry, trigger delay range and resolution). The currently processed manual chunks do not cover the trigger model or numeric entry.

## Source photo

Selected from `uploads/photos/`: **photo-593_singular_display_fullPicture.jpeg** — the only capture of the Delay editor; title, value, digits, and primary function keys legible; no hand over the LCD. No other candidates.
