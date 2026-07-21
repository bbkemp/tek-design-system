---
provenance: observed
class: screen
software: 2450-EC
software_version: TBD
screen_id: error-dialog
screen_title: Error 2727 dialog
screen_type: dialog
image: error-dialog.jpg
source_photo: uploads/photos/photo-684_singular_display_fullPicture.jpeg
function_state: MEASURE CURRENT 2-WIRE
navigation_path: [Home, Error dialog]
parent_screens: [home]
child_screens: []
related_hardware:
  - front-panel
controls:
  - id: error-icon
    label: ""
    type: indicator
    state: active
    action: Red warning-triangle icon at the dialog's top left, marking the message as an error.
  - id: error-title
    label: Error 2727
    type: readout
    state: active
    action: Error number heading. 2727 corresponds to the trigger-model command lockout described in the body text.
  - id: error-body
    label: Command prohibited while trigger model is running
    type: readout
    state: active
    action: Error description — the attempted front-panel change is blocked until the trigger model stops.
  - id: btn-details
    label: "(illegible — plausibly Details)"
    type: button
    state: enabled
    action: Left dialog button; label not legible in the source photo. Plausibly opens details / the event log entry.
  - id: btn-ok
    label: OK
    type: button
    state: enabled
    action: Dismisses the dialog. White-outlined in this shot (default focus).
---

# Error 2727 dialog

## Purpose

Modal error dialog raised over the Home screen when a front-panel action is rejected — here error 2727, "Command prohibited while trigger model is running," produced by attempting a configuration change while the trigger model was active (status pill `WAIT`). This chunk documents the instrument's generic error-dialog anatomy through this specific instance: numbered title, plain-language body, and dismiss button(s).

## Controls inventory

The dialog is a centered panel over the dimmed Home screen — in this shot Home is showing its settings swipe panel, so `Rel`, `Filter`, `Zero`/`Digits` captions and the range up/down arrows are visible around the dialog's edges. Top row: `error-icon` (red triangle) beside `error-title` (`Error 2727`). Below it, `error-body` in smaller type across two lines. The button row holds `btn-details` on the left (label illegible — see Confidence notes) and `btn-ok` (`OK`) on the right, the latter white-outlined as the default action.

A matching red warning triangle also appears at the far right of the status bar, persisting as an annunciator alongside the dialog.

Bezel operation (`ENTER` to confirm the focused button, `EXIT` to dismiss) applies as on every dialog; the bezel is documented in [`hardware/front-panel.md`](../hardware/front-panel.md).

## State variations

- The dialog identity is generic: other error/warning numbers reuse the same panel with different title and body. Transient, self-dismissing variants of instrument messaging appear instead as toasts (see the Warning 5076 toast on [home](home.md), `uploads/photos/photo-646_singular_display_fullPicture.jpeg`, which uses an inline panel with an `Event Log` button rather than this modal).
- Photographed only over Home's settings swipe panel; the same dialog can presumably be raised over any screen.

## Visible text (verbatim)

Dialog: `Error 2727` · `Command prohibited while trigger model is running` · *(illegible left button)* · `OK`.

Background (Home screen with settings swipe panel, dimmed): `Local` · `defbuffer1` · `No Script` · `WAIT ▼` · `MEASURE CURRENT 2-WIRE` · `-00.0…` *(truncated)* · `AZERO` · `Rel` · `Filter` · `Zero` · `Digits` · `Auto`.

## Confidence notes

- `btn-details` label is not legible at any available resolution — button presence is certain, label is not; "Details" is a plausible reading and is flagged as such, not asserted.
- `error-body` line break and exact casing are read at good confidence from the enlarged crop; "prohibited" is sharp, "while trigger model is running" slightly soft.
- The background swipe-panel captions (`Zero`, `Digits`) are partial reads of `Auto Zero` / `Display Digits` (cf. the clean panel in `uploads/photos/photo-690_singular_display_fullPicture.jpeg`).
- The action that provoked the error is not derivable from the still; the `WAIT` pill and the trigger-model lockout text are consistent with a running trigger model but the triggering tap itself was not photographed.

## Manual references

> Pending. Manual will be paired in a later pass (2450 Reference Manual, sections covering error and event messages / Event Log; no genuine match in the corpus's currently processed user-manual chunks).

## Source photo

Selected from `uploads/photos/`: **photo-684_singular_display_fullPicture.jpeg** — the only shot of this dialog. Slightly soft focus with a hand at the knob right of the LCD (not obscuring the dialog); title, body, and OK are legible after enlargement, the left button label is not.
