---
provenance: observed
class: screen
software: 2450-EC
software_version: TBD
screen_id: source-delay
screen_title: Source Delay picker
screen_type: dialog
image: source-delay.jpg
source_photo: uploads/photos/photo-647_singular_display_fullPicture.jpeg
function_state: "Function: SVMI"
navigation_path: [Menu, Source Settings, Source Delay]
parent_screens: [source-settings]
child_screens: []
related_hardware:
  - front-panel
controls:
  - id: opt-specify-delay
    label: Specify Delay
    type: button
    state: enabled
    action: Chooses a user-specified source delay; expected to open a numeric entry for the delay value (not captured — see Confidence notes).
  - id: opt-auto-delay
    label: Auto Delay
    type: button
    state: active
    action: Chooses the automatic source delay. Shown with a white outline — the current selection.
  - id: btn-cancel
    label: Cancel
    type: button
    state: enabled
    action: Dismisses the dialog without changing the setting.
---

# Source Delay picker

## Purpose

Modal picker for the source delay — the wait between applying a source value and starting the measurement. It is the dialog behind the **Source Delay** row of [Source Settings](source-settings.md) (`row-source-delay`). Unlike the plain Off/On pickers, its two choices are `Specify Delay` (user-entered value) and `Auto Delay`.

## Controls inventory

Small centered dialog titled `Source Delay` over the dimmed Source Settings grid — the shared picker anatomy (cf. [output-off-mode](output-off-mode.md), [high-capacitance](high-capacitance.md)). Two option buttons stacked vertically: `opt-specify-delay` (`Specify Delay`) above `opt-auto-delay` (`Auto Delay`, white-outlined as the current selection), with `btn-cancel` (`Cancel`) at the bottom. Undimmed value buttons from the Source Settings right column (`Off`, `On`, `Auto`) remain visible beside the dialog. Bezel operation (knob / `ENTER` / `EXIT`) per [`hardware/front-panel.md`](../hardware/front-panel.md).

## State variations

- The outlined option tracks the current setting; only `Auto Delay` selected was photographed — consistent with the parent screen's `Auto` value button for this row.
- Selecting `Specify Delay` is expected to lead to a numeric editor for the delay value (the parent row's caption suggests a `0s ... 10ks`-style range); that editor was not captured in this cluster and, if it is a distinct overlay, will be its own screen when photographed.

## Visible text (verbatim)

Dialog: `Source Delay` · `Specify Delay` · `Auto Delay` · `Cancel`.

Background (Source Settings, dimmed): `SOURCE SETTINGS` · `Function: SVMI` · `Range` · `Output Off` · `Overvoltage Protection Limit` · `Interlock` · `High` · `Off` · `On` · `Auto` · `Off`.

## Confidence notes

- `Source Delay`, `Auto Delay`, and `Cancel` read at good confidence; `Specify Delay` is dimmer (unselected) and slightly soft — moderate confidence.
- The numeric-entry follow-on for `Specify Delay`, and the delay range it accepts, are not observable from this photo; flagged for the manual / a future capture.
- Tap-to-apply vs. ENTER-to-confirm not observable; inferred from the shared picker pattern.

## Manual references

> Pending. Manual will be paired in a later pass (2450 Reference Manual, sections covering source delay; no genuine match in the corpus's currently processed user-manual / quickstart chunks).

## Source photo

Selected from `uploads/photos/`: **photo-647_singular_display_fullPicture.jpeg** — the only shot of this dialog. Slightly soft but all labels resolvable; hand at lower right, below the LCD.
