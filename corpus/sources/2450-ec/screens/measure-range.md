---
provenance: observed
class: screen
software: 2450-EC
software_version: TBD
screen_id: measure-range
screen_title: Measure Range picker
screen_type: dialog
image: measure-range.jpg
source_photo: uploads/photos/photo-604_singular_display_fullPicture.jpeg
function_state: MEASURE CURRENT 2-WIRE
navigation_path: [Home, Measure Range]
parent_screens: [home]
child_screens: []
related_hardware:
  - front-panel
controls:
  - id: opt-auto
    label: Auto
    type: button
    state: active
    action: Selects automatic measure ranging. Shown with a white outline — the current selection.
  - id: opt-10na
    label: 10nA
    type: button
    state: enabled
    action: Selects the 10 nA fixed measure range.
  - id: opt-100na
    label: 100nA
    type: button
    state: enabled
    action: Selects the 100 nA fixed measure range.
  - id: opt-1ua
    label: 1µA
    type: button
    state: enabled
    action: Selects the 1 µA fixed measure range.
  - id: opt-10ua
    label: 10µA
    type: button
    state: enabled
    action: Selects the 10 µA fixed measure range.
  - id: opt-100ua
    label: 100µA
    type: button
    state: enabled
    action: Selects the 100 µA fixed measure range.
  - id: opt-1ma
    label: 1mA
    type: button
    state: enabled
    action: Selects the 1 mA fixed measure range.
  - id: opt-10ma
    label: 10mA
    type: button
    state: enabled
    action: Selects the 10 mA fixed measure range.
  - id: opt-100ma
    label: 100mA
    type: button
    state: enabled
    action: Selects the 100 mA fixed measure range.
  - id: opt-1a
    label: 1A
    type: button
    state: enabled
    action: Selects the 1 A fixed measure range.
  - id: btn-cancel
    label: Cancel
    type: button
    state: enabled
    action: Dismisses the dialog without changing the range.
---

# Measure Range picker

## Purpose

Modal picker for the active measure function's range, invoked from the **Home screen's measure region** — the `Range` / `Auto` control below the primary readout ([home](home.md), `range-auto-toggle`). It offers Auto plus every fixed current range for the measure-current function. Choosing an option applies it and closes the dialog; `Cancel` closes without change.

## Controls inventory

The dialog is a centered panel titled `Measure Range` over a dimmed Home screen; the status bar and primary readout (`+00.0104 nA`) remain visible above it. The options are laid out as a grid of buttons: the first row runs `opt-auto` (`Auto`, white-outlined as the current selection), `opt-10na`, `opt-100na`, `opt-1ua`, `opt-10ua`, `opt-100ua`, `opt-1ma`; the second row runs `opt-10ma`, `opt-100ma`, `opt-1a`. Below the grid sits `btn-cancel` (`Cancel`), centered. This is the shared 2450-EC picker anatomy — dimmed background, centered title, outlined current selection, Cancel at the bottom (cf. [source-range](source-range.md)) — differing in its multi-row grid layout, needed to fit ten options.

Bezel operation (knob to move selection, `ENTER` to confirm, `EXIT` to cancel) applies as on every dialog; the bezel is documented in [`hardware/front-panel.md`](../hardware/front-panel.md).

## State variations

- The outlined option tracks the current range; only `Auto` selected was photographed. With a fixed range active (e.g. the manual `10µA` state seen on Home in `uploads/photos/photo-608_singular_display_fullPicture.jpeg`), the corresponding button would carry the outline instead.
- With a different measure function active (voltage, resistance), the same dialog identity would list that function's ranges; not photographed.

## Visible text (verbatim)

Dialog: `Measure Range` · `Auto` · `10nA` · `100nA` · `1µA` · `10µA` · `100µA` · `1mA` · `10mA` · `100mA` · `1A` · `Cancel`.

Background (Home screen, dimmed): `Local` · `defbuffer1` · `No Script` · `CONT` · `MEASURE CURRENT 2-WIRE` · `+00.0104 nA` · `AZERO`.

## Confidence notes

- The first-row labels from `10nA` through `1mA` are at the limit of legibility in the source photo (the rightmost reads plausibly as `1mA` but could pass for `7mA` at this resolution); the transcribed sequence is the 2450's standard current-range ladder and matches the legible second row (`10mA`, `100mA`, `1A`). Confirm against a sharper capture if an exact-label dispute arises.
- Whether the dialog is opened by tapping the range value, the `Auto` toggle, or a long-press is not derivable from a still; Home's `range-auto-toggle` notes the affordance as unconfirmed.
- Whether choosing an option applies immediately versus requiring ENTER is inferred from the shared picker pattern (tap applies and dismisses). Requires manual confirmation.
- `AZERO` at the right edge of the measure region is partially cut by the viewing angle; read with high confidence from context.

## Manual references

- **`Home and Menu screen overview`** ([`docs/user-manual/home-and-menu-overview.md`](../docs/user-manual/home-and-menu-overview.md), `user-manual` p. 1-11) — documents the Home screen's Range row (`Range / 1µA / Auto`), the launcher for this dialog. The dialog itself is not described in the currently processed chunks.

Pending: manual sections covering measure ranging (2450 Reference Manual) — not yet processed into the corpus.

## Source photo

Selected from `uploads/photos/`: **photo-604_singular_display_fullPicture.jpeg** — the only shot of this dialog. The LCD is sharp enough to read the dialog title, `Auto`, `Cancel`, and the second-row ranges; a finger sits below the bezel without obscuring the screen. First-row range labels are soft (flagged above).
