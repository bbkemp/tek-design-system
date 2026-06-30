---
software: GDM9061
software_version: TBD
screen_id: statistics
screen_title: Math display — Statistics
screen_type: readout
image: statistics.jpg
source_photo: uploads/photos/Math Display Stat mVDC Screenshot.BMP
function_state: DC Voltage, MathDisp = STAT
navigation_path: [Measurement, Math, Statistics]
parent_screens:
  - measurement
child_screens: []
controls:
  - id: primary-readout
    label: "+000.1826"
    type: readout
    state: active
    action: Live measured value, shown large in the upper half above the statistics panel.
  - id: azero-indicator
    label: A-Zero
    type: indicator
    state: active
    action: Auto-zero status pill.
  - id: unit-label
    label: "mVDC"
    type: indicator
    state: active
    action: Unit of the primary readout.
  - id: stat-panel
    label: "Minimum/Maximum/Average/Peak-Peak/STDEV/Count"
    type: readout
    state: active
    action: Six-field statistics panel in the lower half — Minimum, Maximum, Average, Peak-Peak, STDEV, Count.
  - id: sk-function
    label: Function
    type: softkey
    state: enabled
    action: Math function selector — Off / STAT / COMP (comparator). Off here.
  - id: sk-mathdisp
    label: MathDisp
    type: softkey
    state: active
    action: Math display mode — STAT shows the statistics panel.
  - id: sk-restart
    label: ReStart
    type: softkey
    state: enabled
    action: Clears and restarts the statistics accumulation.
---

# Math display — Statistics

## Purpose

The Statistics math display keeps the large live readout in the upper half and adds a six-field statistics panel (Minimum, Maximum, Average, Peak-Peak, STDEV, Count) across the lower half. It is reached via the math function on the `measurement` screen with MathDisp set to STAT. The same layout also hosts the comparator / pass-fail (COMP) mode, in which the readout area turns red on a failing reading and the softkey row gains limit and beep controls — documented below as a state variation.

## Controls inventory

The **config strip** is the standard measurement strip (`DC Voltage`, `Trig:SIN`, `Filter`, `5/s`, `Range: 100mV`).

The **readout region** (upper half) shows `primary-readout` (`+000.1826`) with `azero-indicator` (`A-Zero`) and `unit-label` (`mVDC`).

The **statistics panel** (lower half) is `stat-panel`, laid out in two columns: `Minimum`, `Maximum`, `Average` at the left; `Peak-Peak`, `STDEV`, `Count` at the right.

The **softkey row** holds `sk-function` (`Function`/Off), `sk-mathdisp` (`MathDisp`/STAT), and `sk-restart` (`ReStart`).

## State variations

- **Statistics, STAT** (`uploads/photos/Math Display Stat mVDC Screenshot.BMP`, `…2`, `…3`, `…4`): the white-readout case shown here, with varying accumulated statistics and Count.
- **Comparator / Pass-Fail (COMP), Fail** (`uploads/photos/Math Display Stat Pass Fail Test - Fail Status - mVDC Screenshot.BMP`): Function = COMP, the upper readout area is filled solid **red** to flag a failing reading (`+01.53205 VDC`), a `COMP` badge appears in the config strip, and the softkey row expands to Function(COMP)/MathDisp(STAT)/BeepMode(Fail)/BeepVol(Small)/Low Limit(-1.000000)/High Limit(+1.000000). The statistics panel remains below.
- **Log save toast** (`uploads/photos/Log Saved Screenshot.BMP`): the statistics layout with a modal confirmation pill over the readout reading `[Log]SCREEN29.bmp Save Ok`; softkeys show the measurement set (Range/Speed/Auto Zero/Input R/DCV Ratio/2ND). Confirms a screen/data save completed.

## Visible text (verbatim)

Config strip: `DC Voltage` · `Trig:SIN` · `Filter` · `5/s` · `Range: 100mV`.

Readout: `+000.1826` · `A-Zero` · `mVDC`.

Stat panel: `Minimum : -000.0880m` · `Maximum : +000.3595m` · `Average : +000.1599m` · `Peak-Peak : +000.4476m` · `STDEV : +000.0553m` · `Count : 90`.

Softkeys (STAT): `Function` `Off` · `MathDisp` `STAT` · `ReStart`.

COMP/Fail variation: `COMP` · red readout `+01.53205` `VDC` · `Minimum : -00.52693` · `Maximum : +01.53251` · `Average : +0.124361` · `Peak-Peak : +02.05944` · `STDEV : +0.432182` · `Count : 219` · `Function` `COMP` · `MathDisp` `STAT` · `BeepMode` `Fail` · `BeepVol` `Small` · `Low Limit` `-1.000000` · `High Limit` `+1.000000`.

Log-save toast: `[Log]SCREEN29.bmp Save Ok`.

## Confidence notes

- The red readout in COMP mode is read as a fail-state highlight (reading outside Low/High limits); the exact pass-vs-fail color convention is inferred from this single Fail capture.
- The log-save toast appears over the statistics layout but logging is a global capability; pairing it specifically to this screen is for convenience, not a confirmed hierarchy.
- Statistics values are legible at the downscale; trailing-digit precision is at the resolution limit.

## Manual references

- **`Math Measurement`** ([`docs/user-manual/math-measurement.md`](../docs/user-manual/math-measurement.md), `user-manual` pp. 95-118) — the STAT math display (Min/Max/Average/Peak-Peak/STDEV/Count) and the `Function` / `MathDisp` softkeys behind this screen.
- **`Application: Compare Mode`** ([`docs/user-manual/compare-mode.md`](../docs/user-manual/compare-mode.md), `user-manual` pp. 122-128) — the COMP / pass-fail state: High/Low limits, Pass/Fail outputs, `BeepMode` / `BeepVol`, and the EOM signal (the red-fail readout in the COMP variation).
- **`Screenshot & Log`** ([`docs/user-manual/screenshot-and-log.md`](../docs/user-manual/screenshot-and-log.md), `user-manual` pp. 181-188) — the capture/save behavior behind the `[Log]…Save Ok` toast variation (manual confirms the `SCREEN00`–`SCREEN99` naming).
- **`Status Bar`** ([`docs/user-manual/status-bar.md`](../docs/user-manual/status-bar.md), `user-manual` pp. 21-23) — the shared top status bar.

## Source photo

Selected from `uploads/photos/`: **Math Display Stat mVDC Screenshot.BMP** — the clean STAT case with a full, legible statistics panel. The three other STAT captures, the COMP/Fail capture, and the log-save toast contribute the State variations and were not separately committed.
