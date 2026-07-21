---
class: screen
software: GDM9061
software_version: TBD
screen_id: trendchart
screen_title: TrendChart
screen_type: graph
image: trendchart.jpg
source_photo: uploads/photos/Trendchart mVDC Screenshot.BMP
function_state: DC Voltage, TrendChart display mode
navigation_path: [Measurement, Display, TrendChart]
parent_screens:
  - measurement
child_screens: []
controls:
  - id: small-readout
    label: "-034.6182"
    type: readout
    state: active
    action: Live measured value, shown small at the upper-left while the chart occupies the main area.
  - id: math-mode
    label: "1/X"
    type: indicator
    state: active
    action: Active math operation applied to readings (here 1/X), shown in the config strip.
  - id: stats-box
    label: "MIN/MAX/AVG/P-P/STD/COU"
    type: readout
    state: active
    action: Six-field running statistics overlay (Minimum, Maximum, Average, Peak-Peak, Std Dev, Count) at the upper right.
  - id: chart-plot
    label: ""
    type: readout
    state: active
    action: Scrolling trend plot of readings over time, green trace on a gridded plot with +100m / 0 / -100m vertical scale labels and a sample count at the bottom.
  - id: sk-digit
    label: Digit
    type: softkey
    state: enabled
    action: Display digit count (Auto).
  - id: sk-display
    label: Display
    type: softkey
    state: active
    action: Display-mode selector — set to TrendChart here; also offers Number and Histogram.
  - id: sk-vscale
    label: VScale
    type: softkey
    state: enabled
    action: Vertical-scale mode (Normal).
  - id: sk-hscale
    label: HScale
    type: softkey
    state: enabled
    action: Horizontal-scale mode (Count).
  - id: sk-stopview
    label: "Stop&View"
    type: softkey
    state: enabled
    action: Freezes acquisition for inspection.
  - id: sk-restart
    label: ReStart
    type: softkey
    state: enabled
    action: Clears and restarts acquisition/statistics.
---

# TrendChart

## Purpose

The TrendChart screen plots the measured value over time as a scrolling trace, with a small live readout at the upper left and a running statistics box at the upper right. It is one of the display modes reachable from the `Display` softkey on the `measurement` screen (Number / TrendChart / Histogram). It is used to watch drift, noise, and trends rather than a single instantaneous value. The bottom softkey row controls digits, display mode, vertical/horizontal scaling, and acquisition (Stop&View / ReStart).

## Controls inventory

The **config strip** carries the function (`DC Voltage`), `Trig:Auto`, `Filter`, the `math-mode` badge (`1/X`), speed (`20/s`) and range (`Range: 100mV`).

The **plot region** shows `small-readout` (`-034.6182`) at the upper left, `stats-box` (MIN/MAX/AVG/P-P/STD/COU) at the upper right, and `chart-plot` — the green trend trace with vertical labels `+100m` / `0` / `-100m` and a sample count `(787)` at the bottom.

The **softkey row** holds `sk-digit` (`Digit`/Auto), `sk-display` (`Display`/TrendChart), `sk-vscale` (`VScale`/Normal), `sk-hscale` (`HScale`/Count), `sk-stopview` (`Stop&View`), and `sk-restart` (`ReStart`).

## State variations

- **No input / logging** (`uploads/photos/mVDC Trendchart No Input Screenshot.BMP`): a flat trace at 0 with a `● +000.2114 mVDC` header and the softkey row switched to the logging set (Log Mode/FileName/Name SCREEN01/OverWrite); status bar shows `TMC`. Indicates the trend display with no signal and capture/logging active.

## Visible text (verbatim)

Config strip: `DC Voltage` · `Trig:Auto` · `Filter` · `1/X` · `20/s` · `Range: 100mV`.

Plot: `-034.6182` · `+100m` · `0` · `-100m` · `(787)`.

Stats box: `MIN : -109.2136k` · `MAX: +094.7200k` · `AVG : +0299.232` · `P-P : +0.203933M` · `STD : +09.02417k` · `COU : 787`.

Softkeys: `Digit` `Auto` · `Display` `TrendChart` · `VScale` `Normal` · `HScale` `Count` · `Stop&View` · `ReStart`.

No-input variation: `● +000.2114 mVDC` · `(1299)` · `Log Mode` `Capture` · `FileName` `Default` · `Name` `SCREEN01` · `OverWrite` `Query`.

## Confidence notes

- Stats-box exponent/unit suffixes (`k`, `M`) are legible at the downscale but the precise values are at the edge of resolution.
- The `1/X` badge is read as an active math operation; its exact placement/behaviour relative to the Statistics screen is not confirmed.
- Whether logging is a property of TrendChart specifically or a global capture mode (it also appears on `measurement` and `statistics`) is unconfirmed.

## Manual references

- **`Display Setting`** ([`docs/user-manual/display-setting.md`](../docs/user-manual/display-setting.md), `user-manual` pp. 189-210) — the Trend Chart display mode with `VScale`, `HScale` (Count/Recent), and the `Stop&View` cursor/statistics inspection.
- **`Math Measurement`** ([`docs/user-manual/math-measurement.md`](../docs/user-manual/math-measurement.md), `user-manual` pp. 95-118) — the STAT statistics (Min/Max/Average/Peak-Peak/STDEV/Count) shown in the trend's stats box.
- **`Screenshot & Log`** ([`docs/user-manual/screenshot-and-log.md`](../docs/user-manual/screenshot-and-log.md), `user-manual` pp. 181-188) — the logging/capture state seen in the no-input variation.
- **`Status Bar`** ([`docs/user-manual/status-bar.md`](../docs/user-manual/status-bar.md), `user-manual` pp. 21-23) — the shared top status bar.

## Source photo

Selected from `uploads/photos/`: **Trendchart mVDC Screenshot.BMP** — full trend trace with populated statistics and the standard TrendChart softkey row. The flat-line/logging capture contributes the State variation and was not separately committed.
