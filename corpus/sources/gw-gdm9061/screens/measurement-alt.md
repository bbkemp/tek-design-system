---
class: screen
software: GDM9061
software_version: TBD
screen_id: measurement-alt
screen_title: Measurement (alternate display theme)
screen_type: readout
image: measurement-alt.jpg
source_photo: uploads/photos/VDC Screenshot.BMP
function_state: DCV, Auto 2 V range
navigation_path: [Measurement]
parent_screens: []
child_screens: []
controls:
  - id: function-label
    label: DCV
    type: dropdown
    state: active
    action: Active measurement function (DCV).
  - id: range-indicator
    label: "Auto 2V"
    type: indicator
    state: active
    action: Range indicator — Auto, 2 V.
  - id: trig-indicator
    label: Auto Trigger
    type: indicator
    state: active
    action: Trigger mode indicator (green). Auto Trigger.
  - id: speed-indicator
    label: "S"
    type: indicator
    state: active
    action: Speed indicator (abbreviated; "S" appears to denote Slow, matching the Speed softkey).
  - id: shift-indicator
    label: Shift
    type: indicator
    state: enabled
    action: Shift-key annunciator (magenta), top-right.
  - id: primary-readout
    label: "-0.63992"
    type: readout
    state: active
    action: Live measured value.
  - id: unit-label
    label: "VDC"
    type: indicator
    state: active
    action: Unit of the primary readout.
  - id: sk-range
    label: Range
    type: softkey
    state: enabled
    action: Range selection (Auto).
  - id: sk-speed
    label: Speed
    type: softkey
    state: enabled
    action: Reading-rate selection (Slow).
  - id: sk-inputz
    label: Input Z
    type: softkey
    state: enabled
    action: Input impedance selection (Auto).
  - id: sk-relatively
    label: Relatively
    type: softkey
    state: enabled
    action: Relative (REL / null) reading On/Off.
  - id: sk-history
    label: History
    type: softkey
    state: enabled
    action: Opens reading history.
---

# Measurement — alternate display theme

## Purpose

A single-readout measurement view with a visually distinct chrome from the main `measurement` screen: no `LOC`/`LAN` status pills or clock, a plain top bar (`DCV` · `Auto 2V` · `Auto Trigger` · `S` · `Shift`), no orange framing around the readout, and a different softkey set (`Range` · `Speed` · `Input Z` · `Relatively` · `History`). It shows the same kind of large DC-voltage value (`-0.63992 VDC`) but in a different skin. It is captured once in this set and is documented separately because its region layout and control labels differ materially from the primary screen.

## Controls inventory

The **top bar** holds `function-label` (`DCV`) at the left, `range-indicator` (`Auto 2V`), the green `trig-indicator` (`Auto Trigger`) centered, `speed-indicator` (`S`), and the magenta `shift-indicator` (`Shift`) at the right.

The **readout region** shows `primary-readout` (`-0.63992`) with `unit-label` (`VDC`) at the lower right. There is no auto-zero pill in this theme.

The **softkey row** holds `sk-range` (`Range`/Auto), `sk-speed` (`Speed`/Slow), `sk-inputz` (`Input Z`/Auto), `sk-relatively` (`Relatively`/Off), an empty tile, and `sk-history` (`History`).

## State variations

Only one capture of this theme is present (`uploads/photos/VDC Screenshot.BMP`). Whether it is a selectable display theme, a legacy firmware skin, or a secondary-display mode of the same instrument is not determinable from a single shot — see Confidence notes.

## Visible text (verbatim)

Top bar: `DCV` · `Auto 2V` · `Auto Trigger` · `S` · `Shift`.

Readout: `-0.63992` · `VDC`.

Softkeys: `Range` `Auto` · `Speed` `Slow` · `Input Z` `Auto` · `Relatively` `Off` · `History`.

## Confidence notes

- This screen's chrome differs enough from the primary `measurement` screen that it may represent a different display theme, firmware version, or a distinct device skin. Single capture — not cross-confirmable here. Flagged for the operator to confirm whether the GDM9061 exposes selectable themes or this is from a related model.
- `speed-indicator` `S` is interpreted as "Slow" by matching the Speed softkey value; unconfirmed.

## Manual references

- **`Status Bar`** ([`docs/user-manual/status-bar.md`](../docs/user-manual/status-bar.md), `user-manual` pp. 21-23) — the status-bar icon legend (this theme's top bar shows a different subset, but the underlying indicators are the same).
- **`AC/DC Voltage Measurement`** ([`docs/user-manual/voltage-measurement.md`](../docs/user-manual/voltage-measurement.md), `user-manual` pp. 31-37) — the DCV function shown in this capture (`-0.63992 VDC`).

> Note: the manual does not separately document this alternate chrome (`DCV / Auto Trigger / Shift` with `Input Z` / `Relatively` / `History` softkeys). Whether it is a selectable theme, a legacy firmware skin, or a related-model display is unresolved — see this screen's Confidence notes.

## Source photo

Selected from `uploads/photos/`: **VDC Screenshot.BMP** — the only capture exhibiting this chrome. Kept as its own screen rather than folded into `measurement` because the status bar, framing, and softkey labels all differ.
