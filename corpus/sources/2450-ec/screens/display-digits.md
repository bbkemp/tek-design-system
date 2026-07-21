---
provenance: observed
class: screen
software: 2450-EC
software_version: TBD
screen_id: display-digits
screen_title: Display Digits picker
screen_type: dialog
image: display-digits.jpg
source_photo: uploads/photos/photo-701_singular_display_fullPicture.jpeg
function_state: MEASURE CURRENT (wiring-mode text occluded by dialog)
navigation_path: [Home, Display Digits]
parent_screens:
  - home
child_screens: []
related_hardware:
  - front-panel
controls:
  - id: dialog-title
    label: Display Digits
    type: indicator
    state: active
    action: Dialog title, centered at the top of the modal.
  - id: opt-3-5
    label: 3.5 Digits
    type: button
    state: enabled
    action: Sets the display resolution to 3½ digits and closes the picker.
  - id: opt-4-5
    label: 4.5 Digits
    type: button
    state: enabled
    action: Sets the display resolution to 4½ digits and closes the picker.
  - id: opt-5-5
    label: 5.5 Digits
    type: button
    state: active
    action: Sets the display resolution to 5½ digits. Carries a bright focus border in this shot — consistent with it being the current value.
  - id: opt-6-5
    label: 6.5 Digits
    type: button
    state: enabled
    action: Sets the display resolution to 6½ digits and closes the picker.
  - id: opt-cancel
    label: Cancel
    type: button
    state: enabled
    action: Dismisses the picker without changing the display resolution.
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

# Display Digits picker

## Purpose

The Display Digits picker sets the resolution of the front-panel readout — 3½ through 6½ digits. It is a stacked-option modal in the same anatomy as `filter-picker` (title, option buttons, Cancel), overlaid here on the Home screen while Home's lower half is showing a settings panel. Display resolution affects only what is shown, not measurement precision; that behavioral claim is a common instrument convention and is flagged as unverified below.

## Controls inventory

The modal is a bordered panel centered on the LCD. `dialog-title` (`Display Digits`) sits at the top; below it, five stacked full-width buttons: `opt-3-5`, `opt-4-5`, `opt-5-5` (carrying a bright focus border — the current value), `opt-6-5`, and `opt-cancel`.

Behind the modal, dimmed, is the Home screen in a settings-panel state: the status bar (`Local` · `defbuffer1` · `No Script` · `CONT`) across the top; the measure region with a partially occluded `MEASURE CURREN…` header, a large green readout beginning `-100`, `Range 10nA` with `Auto`; indicator stack on the right (`MATH`, `FILTER`/`AZERO` truncated to `FILT…`/`AZER…`, `REL`); and below, the settings panel rows (`Rel`, `Filter`, a truncated `…igits` button — the presumed launcher of this picker — and `Auto` with up/down arrows). A bottom status line reads approximately `Range: 20mV  Source: +0.0000V  Limit: 105.00µA` (soft, flagged below).

The **hardware bezel** is the standard 2450-EC front panel. Left side, top-to-bottom: `btn-home`, `btn-menu`, `btn-quickset`, `btn-help`, then `usb-port` and `btn-power`. Right side: `control-knob`, `btn-enter`, `btn-exit`, `btn-function`, `btn-trigger`, the banana jacks (`terminals`, out of frame here), and `output-led` (green, lit).

## State variations

Visible in this photo: current selection = 5.5 Digits (focus border); background Home in a settings-panel state, measuring current on the 10 nA range.

Other states (by construction): the focus border tracks whichever resolution is active. The Home readout behind the dialog re-renders with more or fewer digits after a selection commits.

## Visible text (verbatim)

Dialog: `Display Digits` · `3.5 Digits` · `4.5 Digits` · `5.5 Digits` · `6.5 Digits` · `Cancel`.

Background status bar (dimmed): `Local` · `defbuffer1` · `No Script` · `CONT`.

Background measure region (dimmed, partially occluded): `MEASURE CURREN…` · `-100` (readout truncated by the dialog) · `Range` · `10nA` · `Auto` · `MATH` · `FILT…` · `AZER…` · `REL`.

Background settings panel (dimmed, partially occluded): `Rel` · `Filter` · `…igits` · `Auto`.

Background bottom line (soft): `Range: 20mV` · `Source: +0.0000V` · `Limit: 105.00µA`.

Bezel labels (left): `HOME` · `MENU` · `QUICKSET` · `HELP`.

Bezel labels (right): `ENTER` · `EXIT` · `FUNCTION` · `TRIGGER`.

## Confidence notes

Transcriptions verified against the 1600 px downscale (`display-digits.jpg`) and a full-resolution crop of the LCD. Uncertain items:

- **Launch context** — the dimmed background is the Home screen with a settings panel occupying the lower half, and a truncated `…igits` button is visible in that panel, so `parent_screens: [home]` (settings-panel state) is well supported — but the actual tap that opened this picker is not captured, and a launch from a Measure Settings screen elsewhere in the menu tree cannot be ruled out from this single shot.
- `opt-5-5` focus border interpretation — read as current-value highlight; could alternatively be knob-navigation focus.
- Background bottom status line — `Range: 20mV / Source: +0.0000V / Limit: 105.00µA` is soft at this resolution; digits and units are approximate, not authoritative.
- Background readout — begins `-100`; the remaining digits and unit are occluded by the dialog, so the full value is unknown. The wiring-mode suffix of `MEASURE CURREN…` is likewise occluded (`function_state` reflects this).
- Display-resolution-vs-precision behavior ("display only, not measurement precision") — standard instrument convention, unverified against the 2450-EC manual.
- Hardware bezel — terminals are out of frame; bezel entries carried from the standard front panel (`hardware/front-panel.md`).

## Manual references

> Pending. Manual will be paired in a later pass (2450-EC User's Manual, sections covering display settings / readout resolution).

## Source photo

Selected from `uploads/photos/`: **photo-701_singular_display_fullPicture.jpeg** — the only shot of the Display Digits picker; all five options legible, focus state clear, background Home settings-panel state readable enough to establish launch context.
