---
software: GDM9061
software_version: TBD
screen_id: range-select
screen_title: Range selector
screen_type: dialog
image: range-select.jpg
source_photo: uploads/photos/mVDC Range Menu Screenshot.BMP
function_state: DC Voltage, range picker open
navigation_path: [Measurement, Range]
parent_screens:
  - measurement
child_screens: []
controls:
  - id: picker-label
    label: Range
    type: indicator
    state: active
    action: Label for the range picker bar that replaces the softkey row.
  - id: esc-return
    label: "ESC :Return"
    type: indicator
    state: enabled
    action: Pressing ESC closes the picker and returns to the measurement screen.
  - id: range-auto
    label: Auto
    type: button
    state: active
    action: Selects auto-ranging (highlighted/active in this shot).
  - id: range-100mv
    label: 100mV
    type: button
    state: enabled
    action: Selects the fixed 100 mV range.
  - id: range-1v
    label: 1V
    type: button
    state: enabled
    action: Selects the fixed 1 V range.
  - id: range-10v
    label: 10V
    type: button
    state: enabled
    action: Selects the fixed 10 V range.
  - id: range-100v
    label: 100V
    type: button
    state: enabled
    action: Selects the fixed 100 V range.
  - id: range-1000v
    label: 1000V
    type: button
    state: enabled
    action: Selects the fixed 1000 V range.
---

# Range selector

## Purpose

The Range selector is the picker that opens when the `Range` softkey is pressed on the `measurement` screen. The bottom softkey row is replaced by a labelled bar of range choices — `Auto` plus the fixed ranges valid for the active function — while the measurement readout above continues to update live. The user taps a range (or rotates/ENTER) to set it, or presses `ESC` to return. The fixed ranges shown are function-dependent; this capture is the DC Voltage set.

## Controls inventory

The measurement readout region above is unchanged from `measurement` (here `+000.1485 mVDC`, DC Voltage, Auto). The **picker bar** at the bottom replaces the softkey row: `picker-label` (`Range`) is centered, with `esc-return` (`ESC :Return`) at the right. The selectable range buttons run left-to-right: `range-auto` (`Auto`, highlighted), `range-100mv` (`100mV`), `range-1v` (`1V`), `range-10v` (`10V`), `range-100v` (`100V`), `range-1000v` (`1000V`).

## State variations

For other functions the set of fixed ranges differs (e.g. resistance would list Ω/kΩ/MΩ ranges). Only the DC Voltage range set is captured here.

## Visible text (verbatim)

Picker bar: `Range` · `ESC :Return`.

Range buttons: `Auto` · `100mV` · `1V` · `10V` · `100V` · `1000V`.

Readout (carried from measurement): `+000.1485` · `mVDC` · `DC Voltage` · `Trig:Auto` · `Filter` · `5/s` · `Range: 100mV`.

## Confidence notes

- Captured only for DC Voltage; range lists for other functions are inferred, not observed.
- Selection mechanism (touch vs knob/ENTER) is not determinable from the still; `Auto` is clearly the active/highlighted choice.

## Manual references

> Pending. Manual will be paired in a later pass (GDM9061 User's Manual — range selection per function).

## Source photo

Selected from `uploads/photos/`: **mVDC Range Menu Screenshot.BMP** — the only capture of the range picker; shows the full DC Voltage range list with `Auto` highlighted and the `ESC :Return` affordance.
