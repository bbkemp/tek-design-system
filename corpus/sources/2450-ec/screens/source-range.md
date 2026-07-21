---
provenance: observed
class: screen
software: 2450-EC
software_version: TBD
screen_id: source-range
screen_title: Source Range picker
screen_type: dialog
image: source-range.jpg
source_photo: uploads/photos/photo-611_singular_display_fullPicture.jpeg
function_state: MEASURE CURRENT 2-WIRE
navigation_path: [Menu, Source Settings, Source Range]
parent_screens: [source-settings]
child_screens: []
related_hardware:
  - front-panel
controls:
  - id: opt-auto
    label: Auto
    type: button
    state: active
    action: Selects automatic source ranging. Shown with a white outline — the current selection.
  - id: opt-20mv
    label: 20mV
    type: button
    state: enabled
    action: Selects the 20 mV fixed source range.
  - id: opt-200mv
    label: 200mV
    type: button
    state: enabled
    action: Selects the 200 mV fixed source range.
  - id: opt-2v
    label: 2V
    type: button
    state: enabled
    action: Selects the 2 V fixed source range.
  - id: opt-20v
    label: 20V
    type: button
    state: enabled
    action: Selects the 20 V fixed source range.
  - id: opt-200v
    label: 200V
    type: button
    state: enabled
    action: Selects the 200 V fixed source range.
  - id: btn-cancel
    label: Cancel
    type: button
    state: enabled
    action: Dismisses the dialog without changing the range.
---

# Source Range picker

## Purpose

Modal picker for the voltage source range. It is the dialog behind the **Range** row of [Source Settings](source-settings.md) (`row-range`), offering Auto plus five fixed voltage ranges. In the source photo it has been invoked from the **Home screen's source region** rather than from Source Settings — the same picker is reachable from both places (see State variations). Choosing an option applies it and closes the dialog; `Cancel` closes without change.

## Controls inventory

The dialog is a centered panel titled `Source Range` over a dimmed parent screen. A single row of six option buttons runs left-to-right: `opt-auto` (`Auto`, white-outlined as the current selection), `opt-20mv`, `opt-200mv`, `opt-2v`, `opt-20v`, `opt-200v`. Below the row sits `btn-cancel` (`Cancel`), centered. This is the shared 2450-EC picker anatomy — dimmed background, centered title, outlined current selection, Cancel at the bottom — used by all seven Source Settings pickers (cf. [output-off-mode](output-off-mode.md), [interlock](interlock.md)); this one differs only in laying its options out horizontally.

Bezel operation (knob to move selection, `ENTER` to confirm, `EXIT` to cancel) applies as on every dialog; the bezel is documented in [`hardware/front-panel.md`](../hardware/front-panel.md).

## State variations

- The outlined option tracks the current range; only `Auto` selected was photographed.
- **Invocation context:** in photo-611 the dialog overlays the **Home** screen (status bar `Local · defbuffer1 · No Script · CONT`, `MEASURE CURRENT 2-WIRE` readout `-00.0001 µA` visible above it) — opened by tapping the source-range control in Home's source region. When opened from Source Settings' `Range` row, the dimmed background is the Source Settings grid instead. Same dialog identity in both cases.

## Visible text (verbatim)

Dialog: `Source Range` · `Auto` · `20mV` · `200mV` · `2V` · `20V` · `200V` · `Cancel`.

Background (Home screen, dimmed): `Local` · `defbuffer1` · `No Script` · `CONT` · `MEASURE CURRENT 2-WIRE` · `-00.0001 µA` · `AZERO` · `Auto`.

## Confidence notes

- Button labels `20mV` through `200V` are read at moderate confidence from the downscale; the sequence is corroborated by the Source Settings Range caption (`Auto or 20mV ... 200V`).
- The partially visible dimmed row along the dialog's bottom edge (source-region values of the Home screen, including what appears to be `10.5000µA`-scale text) is obscured by the dialog and a finger; not transcribed.
- Whether choosing an option applies immediately versus requiring ENTER is not observable from a still; inferred from the shared picker pattern (tap applies and dismisses). Requires manual confirmation.

## Manual references

> Pending. Manual will be paired in a later pass (2450 Reference Manual, sections covering source range selection; no genuine match in the corpus's currently processed user-manual / quickstart chunks).

## Source photo

Selected from `uploads/photos/`: **photo-611_singular_display_fullPicture.jpeg** — the only shot of this dialog. Sharp enough for every option label; a finger sits below the LCD without obscuring the dialog. It captures the picker invoked over Home rather than over Source Settings, which is documented above rather than treated as a separate screen.
