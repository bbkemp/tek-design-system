---
software: GDM9061
software_version: TBD
screen_id: dual-display
screen_title: Dual Display (1ST / 2ND)
screen_type: readout
image: dual-display.jpg
source_photo: uploads/photos/Dual Display DCV ACV Screenshot.png
function_state: Dual display — 1ST DC Voltage (mVDC), 2ND AC Voltage (mVAC), AC+DC combined
navigation_path: [Measurement, 2ND]
parent_screens:
  - measurement
child_screens: []
controls:
  - id: primary-function
    label: DC Voltage
    type: dropdown
    state: active
    action: Primary (1ST) measurement function. Selects the function shown in the upper readout; here DC Voltage.
  - id: primary-indicator
    label: "1ST"
    type: indicator
    state: active
    action: Marks the upper half as the primary (1ST) display in dual-display mode.
  - id: primary-speed
    label: "5/s"
    type: indicator
    state: active
    action: Reading rate for the primary function.
  - id: primary-azero
    label: A-Zero
    type: indicator
    state: active
    action: Auto-zero status for the primary DC function (label truncated to "A-Ze" at the display edge).
  - id: primary-filter
    label: Filter
    type: toggle
    state: enabled
    action: Digital filter for the primary function.
  - id: primary-range
    label: "100mV"
    type: indicator
    state: active
    action: Active range for the primary function (100 mV).
  - id: primary-readout
    label: "+000.0084"
    type: readout
    state: active
    action: Live primary measured value, large upper readout.
  - id: primary-unit
    label: "mVDC"
    type: indicator
    state: active
    action: Unit of the primary readout.
  - id: combined-badge
    label: "AC+DC"
    type: indicator
    state: active
    action: Combined AC+DC computation badge shown on the center divider strip.
  - id: combined-readout
    label: "+000.0221mV"
    type: readout
    state: active
    action: AC+DC combined value shown on the center divider strip between the two readouts.
  - id: trig-mode
    label: "Trig:Auto"
    type: dropdown
    state: active
    action: Trigger mode, shown at the right of the center divider strip.
  - id: secondary-function
    label: AC Voltage
    type: dropdown
    state: active
    action: Secondary (2ND) measurement function. Selects the function shown in the lower readout; here AC Voltage.
  - id: secondary-indicator
    label: "2ND"
    type: indicator
    state: active
    action: Marks the lower half as the secondary (2ND) display in dual-display mode.
  - id: secondary-filter
    label: Filter
    type: toggle
    state: enabled
    action: Digital filter for the secondary function.
  - id: secondary-range
    label: "100mV"
    type: indicator
    state: active
    action: Active range for the secondary function (100 mV). The yellow "M" badge indicates a manually fixed range.
  - id: secondary-manual-badge
    label: "M"
    type: indicator
    state: active
    action: Manual-range badge for the secondary function (yellow circle "M"), the counterpart of the "A" Auto badge seen on other screens.
  - id: secondary-readout
    label: "000.0204"
    type: readout
    state: active
    action: Live secondary measured value, large lower readout.
  - id: secondary-unit
    label: "mVAC"
    type: indicator
    state: active
    action: Unit of the secondary readout.
---

# Dual Display (1ST / 2ND)

## Purpose

The dual-display screen shows two measurement functions at once — a primary (`1ST`) function in the upper half and a secondary (`2ND`) function in the lower half — each with its own function label, filter, range, and large numeric readout. It is reached from the single-readout `measurement` screen by enabling the secondary display via the `2ND` softkey. Here the primary is DC Voltage and the secondary is AC Voltage, with an `AC+DC` combined value on the center divider. It is used to watch two related quantities of the same signal simultaneously (e.g. the DC and AC components of a voltage).

## Controls inventory

The screen splits into an upper (1ST) readout region, a center divider strip, and a lower (2ND) readout region.

The **primary (upper) region** carries `primary-function` (`DC Voltage`) and the `primary-indicator` (`1ST`) badge at the top left, `primary-speed` (`5/s`), `primary-azero` (`A-Zero`), and `primary-filter` (`Filter`), with `primary-range` (`100mV`) at the lower left. `primary-readout` (`+000.0084`) is the large value with `primary-unit` (`mVDC`) at its right.

The **center divider strip** holds `combined-badge` (`AC+DC`) with `combined-readout` (`+000.0221mV`) and `trig-mode` (`Trig:Auto`) at the right.

The **secondary (lower) region** carries `secondary-function` (`AC Voltage`) and the `secondary-indicator` (`2ND`) badge, `secondary-filter` (`Filter`), and `secondary-range` (`100mV`) with the `secondary-manual-badge` (`M`) at the lower left. `secondary-readout` (`000.0204`) is the large value with `secondary-unit` (`mVAC`) at its right.

## State variations

- The primary/secondary functions are independently selectable; DCV + ACV (this shot) is one of many pairings the dual display supports. The `AC+DC` combined value implies the pair here is the DC and AC components of the same input.
- The secondary range shows a manual (`M`) badge here vs. the Auto (`A`) badge seen on the single-readout `measurement` screen.

## Visible text (verbatim)

Primary (upper): `DC Voltage` · `1ST` · `5/s` · `A-Zero` · `Filter` · `100mV` · `+000.0084` · `mVDC`.

Center strip: `AC+DC` · `+000.0221mV` · `Trig:Auto`.

Secondary (lower): `AC Voltage` · `2ND` · `Filter` · `100mV` · `M` · `000.0204` · `mVAC`.

## Confidence notes

- The source image is a low-resolution crop (286×131) of the display area only; the top status bar (`LOC`/`LAN`/clock) and the bottom softkey row are **not visible** in this shot, so they are not inventoried here. They are presumed present as on the other measurement screens.
- `primary-azero` is read as `A-Zero`; the label is truncated to `A-Ze` at the left edge of the crop.
- `combined-readout` (`+000.0221mV`) and the `AC+DC` badge are legible but the exact combined-math behavior (whether `AC+DC` is a true RMS combination or a display convenience) is not derivable from the photo.
- The `M` badge is interpreted as a manual-range indicator (counterpart to the `A` Auto badge on other screens); not independently confirmed in this single shot.
- Whether dual display is reached via the `2ND` softkey specifically, or via a menu, is inferred from the `2ND` badge and the single-readout screen's `sk-2nd` softkey — not confirmed here.

## Manual references

> Pending. Manual will be paired in a later pass (GDM-9060/9061 User Manual, sections covering dual / secondary display and the 2ND function, and AC+DC combined measurement).

## Source photo

Selected from `uploads/photos/`: **Dual Display DCV ACV Screenshot.png** — the only dual-display capture in the set, showing 1ST DC Voltage over 2ND AC Voltage with the AC+DC combined value. It is a low-resolution crop of the display area (no bezel, status bar, or softkey row); documented as-is with the resolution limits noted above.
