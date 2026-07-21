---
provenance: observed
class: screen
software: 2450-EC
software_version: TBD
screen_id: high-capacitance
screen_title: High Capacitance picker
screen_type: dialog
image: high-capacitance.jpg
source_photo: uploads/photos/photo-639_singular_display_fullPicture.jpeg
function_state: "Function: SVMI"
navigation_path: [Menu, Source Settings, High Capacitance]
parent_screens: [source-settings]
child_screens: []
related_hardware:
  - front-panel
controls:
  - id: opt-off
    label: "Off"
    type: button
    state: active
    action: High-capacitance source mode off (default). Shown with a white outline — the current selection.
  - id: opt-on
    label: "On"
    type: button
    state: enabled
    action: High-capacitance source mode on — for sourcing into high-capacitance loads.
  - id: btn-cancel
    label: Cancel
    type: button
    state: enabled
    action: Dismisses the dialog without changing the setting.
---

# High Capacitance picker

## Purpose

Modal picker for the high-capacitance source mode. It is the dialog behind the **High Capacitance** row of [Source Settings](source-settings.md) (`row-high-capacitance`) — a simple Off/On choice.

## Controls inventory

Small centered dialog titled `High Capacitance` over the dimmed Source Settings grid — the shared picker anatomy (cf. [interlock](interlock.md), [source-readback](source-readback.md)). Two option buttons stacked vertically: `opt-off` (`Off`, white-outlined as the current selection) and `opt-on` (`On`), with `btn-cancel` (`Cancel`) at the bottom. Undimmed value buttons from the Source Settings right column (`Off`, `On`, `Auto`) remain visible beside the dialog. Bezel operation (knob / `ENTER` / `EXIT`) per [`hardware/front-panel.md`](../hardware/front-panel.md).

## State variations

- The outlined option tracks the current setting; only `Off` selected was photographed — consistent with the parent screen's `Off` value button for this row.

## Visible text (verbatim)

Dialog: `High Capacitance` · `Off` · `On` · `Cancel`.

Background (Source Settings, dimmed): `SOURCE SETTINGS` · `Function: SVMI` · `Range` · `Output Off` · `Overvoltage Protection Limit` · `Interlock` · `High` · `Off` · `On` · `Auto` · `Off or On`.

## Confidence notes

- `High Capacitance`, `Off`, and `Cancel` read at good confidence; `On` is dimmer but clear. `Cancel` is the softest of the four labels in this capture.
- What high-capacitance mode changes electrically is not derivable from the photo; the one-line description in `controls[]` restates only the setting's name. Requires the reference manual.
- Tap-to-apply vs. ENTER-to-confirm not observable; inferred from the shared picker pattern.

## Manual references

> Pending. Manual will be paired in a later pass (2450 Reference Manual, sections covering high-capacitance mode; no genuine match in the corpus's currently processed user-manual / quickstart chunks).

## Source photo

Selected from `uploads/photos/`: **photo-639_singular_display_fullPicture.jpeg** — the only shot of this dialog. Adequate sharpness, hand below the bezel, dialog fully unobstructed.
