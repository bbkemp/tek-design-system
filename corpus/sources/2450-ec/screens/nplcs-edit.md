---
provenance: observed
class: screen
software: 2450-EC
software_version: TBD
screen_id: nplcs-edit
screen_title: NPLCs editor
screen_type: dialog
image: nplcs-edit.jpg
source_photo: uploads/photos/photo-702_singular_display_fullPicture.jpeg
navigation_path: [NPLCs]
parent_screens: []
child_screens: []
related_hardware:
  - front-panel
controls:
  - id: dialog-title
    label: NPLCs
    type: indicator
    state: active
    action: Dialog title, centered at the top of the modal — the integration time in number of power-line cycles being edited.
  - id: entry-field
    label: "1"
    type: input
    state: active
    action: Value entry field with the current/typed value and a cursor. Shows 1 in this shot.
  - id: btn-max
    label: Max
    type: button
    state: enabled
    action: Sets the entry field to the maximum allowed NPLC value.
  - id: btn-min
    label: Min
    type: button
    state: enabled
    action: Sets the entry field to the minimum allowed NPLC value.
  - id: keypad-digits
    label: 0–9
    type: button
    state: enabled
    action: Numeric digit keys, laid out calculator-style (7-8-9 / 4-5-6 / 1-2-3 / 0).
  - id: btn-back
    label: Back
    type: button
    state: enabled
    action: Backspace — deletes the last entered character.
  - id: btn-clear
    label: Clear
    type: button
    state: enabled
    action: Clears the entry field.
  - id: btn-div10
    label: /10
    type: button
    state: enabled
    action: Divides the entered value by ten.
  - id: btn-x10
    label: x10
    type: button
    state: enabled
    action: Multiplies the entered value by ten.
  - id: keypad-illegible
    label: "(illegible)"
    type: button
    state: enabled
    action: A fourth key column sits between the digits and the Back/Clear//10/x10 column, plus keys flanking 0 on the bottom row (plausibly decimal point, sign, and exponent keys); their captions are washed out by glare in this shot and are not transcribed.
  - id: btn-cancel
    label: Cancel
    type: button
    state: enabled
    action: Dismisses the editor without changing the NPLC value.
  - id: btn-ok
    label: OK
    type: button
    state: enabled
    action: Commits the entered NPLC value and closes the editor.
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
    action: Cancel or back — presumably dismisses the editor like Cancel.
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

# NPLCs editor

## Purpose

The NPLCs editor is the full-screen numeric-keypad dialog for setting measurement integration time in number of power-line cycles. It is an instance of the 2450-EC's shared numeric-editor anatomy — title bar, entry field, calculator-style keypad with Min/Max shortcuts, /10 and x10 scaling keys, Cancel and OK — the same layout used by source-edit and, presumably, by every other numeric value on the instrument (Rel Value, limits, zero reference). Only the title and the permitted value range differ per instance.

## Controls inventory

The dialog fills nearly the whole LCD. `dialog-title` (`NPLCs`) is centered at the top, above `entry-field`, a full-width outlined field showing the current value `1` with an entry cursor.

The keypad occupies the body. On the left edge, `btn-max` and `btn-min` sit stacked, with `btn-cancel` at the bottom-left corner. The central grid is `keypad-digits` in calculator order — `7 8 9` / `4 5 6` / `1 2 3` / `0` across the bottom. The right column holds `btn-back`, `btn-clear`, `btn-div10`, and `btn-x10` top-to-bottom, with `btn-ok` at the bottom-right corner. A fourth key column between the digits and that right column, plus the keys flanking `0`, are present but glare-washed in this shot (`keypad-illegible`) — plausibly decimal point, sign, and exponent keys, not transcribed.

Behind the dialog, only slivers of a dimmed parent screen survive at the left edge — fragments consistent with a Home-style status bar and range label (see Confidence notes).

The **hardware bezel** is the standard 2450-EC front panel. Left side, top-to-bottom: `btn-home`, `btn-menu`, `btn-quickset`, `btn-help`, then `usb-port` and `btn-power`. Right side: `control-knob`, `btn-enter`, `btn-exit`, `btn-function`, `btn-trigger`, the banana jacks (`terminals`, out of frame here), and `output-led` (green, lit).

## State variations

Visible in this photo: value = 1, cursor active in the entry field.

Other states (by construction): the entry field reflects typed digits and the results of `Min` / `Max` / `/10` / `x10`; out-of-range entries presumably produce a clamp or an error affordance (unobserved). The identical keypad anatomy appears with a different title and range as source-edit (documented separately).

## Visible text (verbatim)

Dialog: `NPLCs` · `1` (entry field) · `Max` · `Min` · `7` · `8` · `9` · `Back` · `4` · `5` · `6` · `Clear` · `1` · `2` · `3` · `/10` · `0` · `x10` · `Cancel` · `OK`.

Background (dimmed, fragments at left edge): `Lo…` · `Ran…` (truncated; see Confidence notes).

Bezel labels (left): `HOME` · `MENU` · `QUICKSET` · `HELP`.

Bezel labels (right): `ENTER` · `EXIT` · `FUNCTION` · `TRIGGER`.

## Confidence notes

Transcriptions verified against the 1600 px downscale (`nplcs-edit.jpg`) and a full-resolution crop of the LCD. Uncertain items:

- **Launch context** — the parent screen is almost entirely covered by the dialog; only left-edge fragments (a `Lo…` status word, a `Ran…`/`10n…` range fragment) are visible, consistent with a Home-style screen but not sufficient to identify which control opened the editor. On the 2450 family, NPLCs is typically edited from the Home settings swipe panel or a Measure Settings screen; neither is confirmed here, so `parent_screens` is left empty rather than guessed.
- `keypad-illegible` — the fourth key column and the keys flanking `0` are glare-washed; their captions (plausibly `.`, `+/-`, and an exponent key) are not transcribed and must be confirmed against a sharper capture or the manual.
- `entry-field` value — `1` is clear, but whether it is the committed current value or a fresh in-progress entry is not derivable from a still.
- Out-of-range behavior for Min/Max clamping — inferred convention, unobserved.
- Hardware bezel — terminals are out of frame; bezel entries carried from the standard front panel (`hardware/front-panel.md`).

## Manual references

> Pending. Manual will be paired in a later pass (2450-EC User's Manual, sections covering integration time / NPLC configuration and front-panel numeric entry).

## Source photo

Selected from `uploads/photos/`: **photo-702_singular_display_fullPicture.jpeg** — the only shot of the NPLCs editor; title, entry field, and most keycaps legible, with glare washing out one key column (flagged above). The shared keypad anatomy is also documented from a different instance as source-edit.
