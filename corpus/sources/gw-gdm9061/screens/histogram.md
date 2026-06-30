---
software: GDM9061
software_version: TBD
screen_id: histogram
screen_title: Histogram
screen_type: graph
image: histogram.jpg
source_photo: uploads/photos/Histogram Screenshot.BMP
function_state: DC Voltage, Histogram display mode
navigation_path: [Measurement, Display, Histogram]
parent_screens:
  - measurement
child_screens: []
controls:
  - id: small-readout
    label: "-0.165552 k"
    type: readout
    state: active
    action: Live measured value, shown small at the upper-left.
  - id: stats-box
    label: "MIN/MAX/AVG/P-P/STD/COU"
    type: readout
    state: active
    action: Six-field running statistics overlay (Minimum, Maximum, Average, Peak-Peak, Std Dev, Count) at the upper right.
  - id: bin-summary
    label: "539 (65.2%) / Total 828 / Bins 100"
    type: readout
    state: active
    action: Left-margin summary — count and percent in the dominant bin, total samples, and bin count.
  - id: chart-plot
    label: ""
    type: readout
    state: active
    action: Histogram distribution plot (green bars) with horizontal axis labels at left, center, and right.
  - id: sk-digit
    label: Digit
    type: softkey
    state: enabled
    action: Display digit count (Auto).
  - id: sk-display
    label: Display
    type: softkey
    state: active
    action: Display-mode selector — set to Histogram here; also offers Number and TrendChart.
  - id: sk-bins
    label: Bins
    type: softkey
    state: enabled
    action: Number of histogram bins (100).
  - id: sk-hscale
    label: HScale
    type: softkey
    state: enabled
    action: Horizontal-scale mode (Auto).
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

# Histogram

## Purpose

The Histogram screen renders the distribution of measured readings as a binned bar chart, with a small live readout at the upper left, a running statistics box at the upper right, and a left-margin summary of the dominant bin, total sample count, and bin count. It is one of the display modes reachable from the `Display` softkey on the `measurement` screen (Number / TrendChart / Histogram), used to assess the spread and shape of a measurement population. The bottom softkey row controls digits, display mode, bin count, horizontal scaling, and acquisition.

## Controls inventory

The **config strip** carries the function (`DC Voltage`), `Trig:Auto`, `Filter`, the `1/X` math badge, speed (`20/s`) and range (`Range: 100mV`).

The **plot region** shows `small-readout` (`-0.165552 k`) at the upper left and `stats-box` (MIN/MAX/AVG/P-P/STD/COU) at the upper right. The left margin carries `bin-summary` (`539 (65.2%)`, `Total 828`, `Bins 100`). `chart-plot` is the green histogram distribution with axis labels `-0.2166M`, `-21.24k`, `+0.1741M`.

The **softkey row** holds `sk-digit` (`Digit`/Auto), `sk-display` (`Display`/Histogram), `sk-bins` (`Bins`/100), `sk-hscale` (`HScale`/Auto), `sk-stopview` (`Stop&View`), and `sk-restart` (`ReStart`).

## State variations

Only one Histogram capture is present. Bin count, horizontal scale, and the underlying population would change the bars and axis labels; not separately captured.

## Visible text (verbatim)

Config strip: `DC Voltage` · `Trig:Auto` · `Filter` · `1/X` · `20/s` · `Range: 100mV`.

Plot/margins: `-0.165552 k` · `539` · `(65.2%)` · `Total 828` · `Bins 100` · `-0.2166M` · `-21.24k` · `+0.1741M`.

Stats box: `MIN : -109.2136k` · `MAX: +094.7200k` · `AVG : +0275.821` · `P-P : +0.203933M` · `STD : +08.80048k` · `COU : 828`.

Softkeys: `Digit` `Auto` · `Display` `Histogram` · `Bins` `100` · `HScale` `Auto` · `Stop&View` · `ReStart`.

## Confidence notes

- Axis-label exponents (`M`, `k`) read at the edge of resolution; treat exact values as approximate pending a higher-res capture.
- `bin-summary` `539 (65.2%)` is read as the dominant-bin count and percentage; interpretation unconfirmed.

## Manual references

- **`Display Setting`** ([`docs/user-manual/display-setting.md`](../docs/user-manual/display-setting.md), `user-manual` pp. 189-210) — the Histogram display mode with the `Bins` table, `HScale` (Auto/Manual), and View Setup Class.
- **`Math Measurement`** ([`docs/user-manual/math-measurement.md`](../docs/user-manual/math-measurement.md), `user-manual` pp. 95-118) — the STAT statistics (Min/Max/Average/Peak-Peak/STDEV/Count) shown in the histogram's stats box.
- **`Status Bar`** ([`docs/user-manual/status-bar.md`](../docs/user-manual/status-bar.md), `user-manual` pp. 21-23) — the shared top status bar.

## Source photo

Selected from `uploads/photos/`: **Histogram Screenshot.BMP** — the only Histogram capture; shows the distribution plot, statistics box, and full Histogram softkey row.
