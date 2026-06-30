---
software: GDM9061
software_version: TBD
screen_id: measurement
screen_title: Measurement (single readout)
screen_type: readout
image: measurement.jpg
source_photo: uploads/photos/VDC Measurement Screenshot.BMP
function_state: DC Voltage (VDC), Auto range 10 V
navigation_path: [Measurement]
parent_screens: []
child_screens:
  - range-select
  - trendchart
  - histogram
  - statistics
  - config-system
controls:
  - id: status-loc
    label: LOC
    type: indicator
    state: active
    action: Local/remote control indicator. Shows LOC when operated from the front panel; switches to a remote state when commanded over an interface.
  - id: status-io
    label: LAN
    type: indicator
    state: active
    action: Active remote I/O interface. Reads LAN, TMC (USB-TMC), or other depending on the Interface configuration (see config-interface). Varies across the photo set (LAN vs TMC).
  - id: status-secondary
    label: ""
    type: indicator
    state: enabled
    action: Status-bar icon cluster at top-right — calc/compare ("C") badge, beeper/volume, and Ethernet link icons, followed by the clock.
  - id: clock
    label: "22:05:13"
    type: indicator
    state: active
    action: System real-time clock (HH:MM:SS). Set in config-system.
  - id: function-label
    label: DC Voltage
    type: dropdown
    state: active
    action: Active measurement function. Selects DC/AC voltage, 2-Wire/4-Wire OHM, Continuity, Frequency, current, capacitance, temperature, etc. Drives which softkeys appear in the bottom row.
  - id: trig-mode
    label: "Trig:Auto"
    type: dropdown
    state: active
    action: Trigger mode. Observed values Auto and SIN (single). Sets how readings are initiated.
  - id: filter-toggle
    label: Filter
    type: toggle
    state: enabled
    action: Digital filter on/off for the active function.
  - id: speed-indicator
    label: "5/s"
    type: indicator
    state: active
    action: Reading-rate / measurement speed indicator. Observed 5/s and 20/s; mirrors the Speed softkey.
  - id: range-indicator
    label: "Range: 10V"
    type: indicator
    state: active
    action: Active measurement range. The yellow "A" badge indicates Auto range; an "M" badge indicates a manually fixed range.
  - id: primary-readout
    label: "+01.53176"
    type: readout
    state: active
    action: Live measured value for the active function. Sign + digits, large white font.
  - id: azero-indicator
    label: A-Zero
    type: indicator
    state: active
    action: Auto-zero status indicator (shown as a pill near the bottom-center of the readout area on DC functions).
  - id: unit-label
    label: "VDC"
    type: indicator
    state: active
    action: Unit of the primary readout (VDC / mVDC / mVAC / Ω / MΩ / Hz). The trailing dot is a measurement-active/recording indicator.
  - id: sk-range
    label: Range
    type: softkey
    state: enabled
    action: Opens the range selector (Auto plus fixed ranges). See range-select.
  - id: sk-speed
    label: Speed
    type: softkey
    state: enabled
    action: Sets reading rate (e.g. 5/s, 20/s).
  - id: sk-autozero
    label: Auto Zero
    type: softkey
    state: enabled
    action: Toggles auto-zero On/Off for the active function.
  - id: sk-inputr
    label: Input R
    type: softkey
    state: enabled
    action: Input resistance / impedance selection (10M vs Auto on DCV).
  - id: sk-dcvratio
    label: DCV Ratio
    type: softkey
    state: enabled
    action: DC voltage ratio measurement On/Off.
  - id: sk-2nd
    label: 2ND
    type: softkey
    state: enabled
    action: Secondary (dual) display function selector; Off in this shot.
---

# Measurement — single readout

## Purpose

The single-readout Measurement screen is the GDM9061's primary view: one large numeric value for the active measurement function, framed by a status bar at the top, a configuration strip just below it, and a row of six context-sensitive softkeys at the bottom. It is the navigational root from which the operator selects functions, changes range/speed, switches the display mode (Number / TrendChart / Histogram / Statistics), and reaches the configuration menu. The exact function, units, range, and the contents of the softkey row all change with the selected measurement function — the screen identity (status bar / large readout / softkey row) stays constant.

## Controls inventory

The screen is laid out in three horizontal regions plus the bottom softkey row.

The **status bar** runs across the top: `status-loc` (`LOC`) and `status-io` (`LAN`) at the left show control mode and active remote interface; the right side holds `status-secondary` (the calc/beeper/Ethernet icon cluster) and `clock` (`22:05:13`).

The **configuration strip**, on an orange rule below the status bar, holds `function-label` (`DC Voltage`) at the left, then `trig-mode` (`Trig:Auto`) and `filter-toggle` (`Filter`); at the right, `speed-indicator` (`5/s`) and `range-indicator` (`Range: 10V`) with its Auto "A" badge.

The **readout region** is dominated by `primary-readout` (`+01.53176`), with `azero-indicator` (`A-Zero`) pilled near the bottom center and `unit-label` (`VDC`) at the bottom right.

The **softkey row** holds six tiles, here `sk-range` (`Range`/Auto), `sk-speed` (`Speed`/5/s), `sk-autozero` (`Auto Zero`/On), `sk-inputr` (`Input R`/10M), `sk-dcvratio` (`DCV Ratio`/Off), and `sk-2nd` (`2ND`/Off). The softkey set is function-dependent — see State variations.

## State variations

The same screen identity appears throughout the photo set with these function and softkey states:

- **DC Voltage — V range** (`uploads/photos/VDC Measurement Screenshot.BMP`, canonical): `+01.53176 VDC`, Range 10 V, softkeys Range/Speed/Auto Zero/Input R/DCV Ratio/2ND.
- **DC Voltage — mV range** (`uploads/photos/mVDC Screenshot.BMP`, `mVDC Screenshot 2.BMP`, `mVDC Screenshot 3.BMP`): e.g. `+000.1636 mVDC`, Range 100 mV; same softkey set. `Trig:SIN` and Speed `20/s` appear as variations.
- **AC Voltage (mVAC)** (`uploads/photos/mVAC Screenshot.BMP`): function `AC Voltage`, `001.180 mVAC`; softkeys reduce to Range/Speed/…/2ND (Auto Zero, Input R, DCV Ratio blank).
- **2-Wire OHM** (`uploads/photos/Resistance Measurement Screenshot.BMP`): function `2-Wire OHM`, `003.5129 Ω`, Range 100 Ω; softkeys Range/Speed/Auto Zero only.
- **Resistance OverLoad** (`uploads/photos/Resistance Measurement Overload Screenshot.BMP`): readout shows `OverLoad`, Range 100 MΩ (over-range condition).
- **Continuity** (`uploads/photos/Resistance Measurement Screenshot 2.BMP`, `Resistance Measurement Open Screenshot.BMP`): function `Continuity`, value in Ω or `OPEN`; "M" (manual) range badge, Range Fix 1 kΩ; softkeys Range/Speed/Auto Zero/BeepVol/Threshold.
- **Frequency** (`uploads/photos/Frequency Measurement Screenshot.BMP`): function `Frequency`, `6.46772 Hz` with a `Period: 154.613ms` sub-readout pill; gate-time indicator `100ms`; softkeys AC Range/GateTime/Measure/InJack/TimeOut/2ND.
- **Display-mode softkeys** (`uploads/photos/Display Menu with mVDC Measurement.BMP`): same layout with the display-config softkey set Digit/Display(Number)/Zero Fill/…/ReStart. The `Display` softkey switches between Number (this screen), TrendChart (see trendchart) and Histogram (see histogram).
- **Log/Capture softkeys** (`uploads/photos/Log Menu Screenshot.BMP`, `Log Menu Screenshot 2.BMP`): same layout with the logging softkey set Log Mode(Capture)/FileName(Default)/Name(SCREEN03 / SCREEN18)/OverWrite(Query). Status bar shows `TMC` interface in some captures.

## Visible text (verbatim)

Status bar: `LOC` · `LAN` · `22:05:13`.

Config strip: `DC Voltage` · `Trig:Auto` · `Filter` · `5/s` · `Range:` · `10V`.

Readout: `+01.53176` · `A-Zero` · `VDC`.

Softkeys: `Range` `Auto` · `Speed` `5/s` · `Auto Zero` `On` `Off` · `Input R` `10M` `Auto` · `DCV Ratio` `On` `Off` · `2ND` `Off`.

Other functions/values seen across the cluster: `AC Voltage` · `2-Wire OHM` · `Continuity` · `Frequency` · `mVDC` · `mVAC` · `Ω` · `MΩ` · `Hz` · `OPEN` · `OverLoad` · `Period: 154.613ms` · `Trig:SIN` · `20/s` · `BeepVol` `Small` · `Threshold` `10Ω` · `AC Range` · `GateTime` `100ms` · `Measure` `Frequency` · `InJack` `Voltage` · `TimeOut` `1s` · `Log Mode` `Capture` · `FileName` `Default` · `OverWrite` `Query`.

## Confidence notes

- Function/softkey pairings above are read from individual captures; the exact softkey order on functions not photographed (current, capacitance, temperature, diode) is not derivable from this set.
- `status-io` reads `LAN` on most captures and `TMC` on the logging/capture shots — confirmed across photos, but the full list of interface states is not enumerable here.
- The trailing dot on `unit-label` is interpreted as a measurement-active/recording indicator; exact convention unconfirmed in a single shot.
- The "A" vs "M" range badge (Auto vs Manual) is legible; whether other badge states exist is unverified.
- `Input R` is read as input resistance selection; on AC it may be relabeled or hidden. Not fully verified.

## Manual references

> Pending. Manual will be paired in a later pass (GDM9061 User's Manual, sections covering basic DC/AC voltage, resistance/continuity, and frequency measurement plus the display/softkey reference).

## Source photo

Selected from `uploads/photos/`: **VDC Measurement Screenshot.BMP** — a clean DC Voltage reading on the 10 V range with the full default softkey set visible (Range/Speed/Auto Zero/Input R/DCV Ratio/2ND), making it the most representative "rest" state of the single-readout screen. The other ~13 single-readout captures (mVDC, mVAC, OHM, Continuity, OverLoad, Frequency, Display-menu, Log-menu) contribute the State variations above and were not separately committed; the range picker, chart, and statistics layouts are documented as their own screens.
