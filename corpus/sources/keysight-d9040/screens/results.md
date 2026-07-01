---
provenance: observed
software: "Keysight D9040 (D9040USBC USB4 Test Application / D9040DPPC DisplayPort Test App)"
software_version: TBD
screen_id: results
screen_title: Results
screen_type: graph
image: results.jpg
source_photo: uploads/photos/IMG_7006.jpg
function_state: 1 test row — Tx TP2 Eye Diagram (10 Gb/s) Port 1 Lane 0 — Pass with 100.000 margin; eye-diagram preview rendered; Messages list selected
navigation_path: [USB4 Test Application, Results]
parent_screens:
  - run
child_screens:
  - html-report
related_hardware: [bench-overview]
controls:
  - id: tab-results
    label: Results
    type: tab
    state: active
    action: Currently active workflow tab.
  - id: results-table
    label: Results table
    type: indicator
    state: active
    action: Top region — one row per executed test. Columns visible: `Test Name`, `Actual Value`, `Margin %`, `Pass Limits`, `# Trials`.
  - id: results-col-test-name
    label: Test Name
    type: indicator
    state: active
    action: First column header — fully-qualified test name and instance.
  - id: results-col-actual-value
    label: Actual Value
    type: indicator
    state: active
    action: Second column header — measured value or pass/fail token.
  - id: results-col-margin
    label: Margin %
    type: indicator
    state: active
    action: Third column header — distance from spec limit, expressed as a percentage.
  - id: results-col-pass-limits
    label: Pass Limits
    type: indicator
    state: active
    action: Fourth column header — spec-mandated pass criterion.
  - id: results-col-trials
    label: "# Trials"
    type: indicator
    state: active
    action: Fifth column header — number of trials executed.
  - id: results-row-tp2-eye
    label: "3.3.17 Tx Eye Diagram (10 Gb/s) (Port 1, Lane 0) Pass 100.000 Pass/Fail 1"
    type: button
    state: active
    action: Currently selected test row. Highlighted blue. Selecting a row populates the detail pane below and the eye-diagram preview to the right.
  - id: btn-view-test-results
    label: View test results
    type: button
    state: enabled
    action: Tooltip/button visible mid-pane right of the table — opens the per-test detail / waveform viewer.
  - id: detail-pane
    label: Parameter / Value detail pane
    type: indicator
    state: active
    action: Mid-region detail table for the selected test row.
  - id: detail-eye-mask
    label: "Eye Mask (Host, 10 Gb/s) (Port 1, Lane 0): Pass"
    type: readout
    state: active
    action: First detail line — pass/fail of the eye-mask check for this lane.
  - id: detail-additional-info
    label: --Additional Info--
    type: indicator
    state: active
    action: Separator row in the detail table.
  - id: detail-test-pattern
    label: "Test Pattern: PRBS31"
    type: readout
    state: active
    action: Detail row — the pattern used for the measurement.
  - id: detail-eye-height
    label: "Eye Height: 600.2022 mV"
    type: readout
    state: active
    action: Detail row — measured eye height.
  - id: detail-eye-width
    label: "Eye Width: 90.0324 pS"
    type: readout
    state: active
    action: Detail row — measured eye width.
  - id: detail-count-violation
    label: "Count of Violation: 0"
    type: readout
    state: active
    action: Detail row — number of mask violations.
  - id: detail-drift
    label: "Drift: -2.0950900 kPPM"
    type: readout
    state: active
    action: Detail row — measured rate drift in parts-per-million.
  - id: detail-symbol-rate
    label: "Symbol Rate: 9.9790 GHz"
    type: readout
    state: active
    action: Detail row — measured symbol rate.
  - id: detail-identity
    label: "Identity: LAPTOP-0DON08SK"
    type: readout
    state: active
    action: Detail row — machine identity of the test host.
  - id: detail-task-id
    label: "Task ID: e2797cef-8afb-4f11-b5ba-bc46e2feddff"
    type: readout
    state: active
    action: Detail row — GUID of the measurement-server task that produced this result.
  - id: detail-eye-diagram-label
    label: "Eye diagram: (See image)"
    type: indicator
    state: active
    action: Detail row — pointer to the embedded eye-diagram image to the right.
  - id: detail-test-point
    label: "Test Point: Port 1, Lane 0"
    type: readout
    state: active
    action: Detail row — test-point identifier.
  - id: detail-preset-number
    label: "Preset Number (10 Gb/s) (Port 1, Lane 0): P0"
    type: readout
    state: active
    action: Detail row — DUT preset under test.
  - id: eye-preview
    label: "Eye Recovered - Delay by 5.872 [pS]"
    type: readout
    state: active
    action: Mid-right region — embedded heat-map eye diagram for the selected test. Color bar 0.3 to 0.6 visible at right; vertical axis Amplitude [mV] from 100 to 400; horizontal axis unlabeled in this crop; mask polygon overlay visible at center.
  - id: messages-row-selected
    label: 2024-08-14 06:56:51.131 PM Refreshed HTML Report
    type: button
    state: active
    action: Currently selected Messages-panel row. Selection drives the `Details` pane on the right reading `The HTML report now reflects the results shown on the Results tab.`
---

# Results — Tx TP2 Eye Diagram (10 Gb/s) Port 1 Lane 0 Pass

## Purpose

Results is the seventh workflow tab. It is the per-test outcome surface — a top results table, a per-row detail pane below, and an embedded heat-map eye diagram (or other plot artifact) to the right. The operator drills in by clicking a row; the lower regions then surface measured values, spec limits, and the per-test artifact. In this photo a single test row is present — `3.3.17 Tx Eye Diagram (10 Gb/s) Port 1 Lane 0` — with `Pass`, `100.000` margin %, and `1` trial. The detail pane and the eye-diagram image both reflect that selected row. The bottom of the screen continues to host the persistent Messages panel; the currently-highlighted Messages row (`Refreshed HTML Report`) lights up the right-hand Details pane with the message `The HTML report now reflects the results shown on the Results tab.`

## Controls inventory

Above the body, the workflow tab bar (documented in `set-up`) shows `tab-results` highlighted.

The body has three vertically-stacked regions plus the Messages panel.

**Results table** at the top — `results-table` with five column headers: `results-col-test-name`, `results-col-actual-value`, `results-col-margin`, `results-col-pass-limits`, `results-col-trials`. One row is present and selected — `results-row-tp2-eye` — reading `3.3.17 Tx Eye Diagram (10 Gb/s) (Port 1, Lane 0) | Pass | 100.000 | Pass/Fail | 1`. A button tooltip `View test results` is visible in the empty central region.

**Detail pane** in the middle — `detail-pane` is a Parameter / Value table for the selected row. Visible rows:

- `Eye Mask (Host, 10 Gb/s) (Port 1, Lane 0): Pass`
- `--Additional Info--`
- `Test Pattern: PRBS31`
- `Eye Height: 600.2022 mV`
- `Eye Width: 90.0324 pS`
- `Count of Violation: 0`
- `Drift: -2.0950900 kPPM`
- `Symbol Rate: 9.9790 GHz`
- `Identity: LAPTOP-0DON08SK`
- `Task ID: e2797cef-8afb-4f11-b5ba-bc46e2feddff`
- `Eye diagram: (See image)`
- `Test Point: Port 1, Lane 0`
- `Preset Number (10 Gb/s) (Port 1, Lane 0): P0`

To the right, `eye-preview` is the embedded eye diagram for this test row. The title above the heat map reads `Eye Recovered - Delay by 5.872 [pS]`. A vertical color bar runs from 0.3 to 0.6 along the right edge; the vertical axis is labeled `Amplitude [mV]` with marks at 0, 100, 200, 300, 400. A central mask polygon (light grey) overlays the heat map.

The Messages panel persists. `messages-row-selected` is currently the highlighted row `2024-08-14 06:56:51.131 PM Refreshed HTML Report`. The right Details pane reads `The HTML report now reflects the results shown on the Results tab.`

The status bar persists from `set-up`.

## State variations

Visible in this photo: one test row in the table, `Pass`, eye preview rendered, Messages row "Refreshed HTML Report" selected.

Across IMG_7006 and IMG_7026 the same screen is shown:

- IMG_7006 is the wider monitor framing — chosen as canonical because the entire results table, full detail-pane, and the eye-diagram preview are all visible together.
- IMG_7026 is a tighter framing on the upper right of the results pane; the workflow-tab bar is partially clipped but the eye diagram is captured at slightly higher resolution.

Other states this same screen will exhibit:

- Multiple test rows — would densify the top region; the selected row would still drive the detail pane and the right-side artifact.
- Fail row — `Pass` token in the Actual Value column would become `Fail`; row tint would shift; margin would become negative or under-limit.
- Other artifact types — the right pane carries an eye diagram for eye-diagram tests but would carry other artifacts (waveforms, histograms) for jitter / SSC / rise-time tests.

## Visible text (verbatim)

Tab: `Results`.

Table headers: `Test Name` · `Actual Value` · `Margin %` · `Pass Limits` · `# Trials`.

Row: `3.3.17 Tx Eye Diagram (10 Gb/s) (Port 1, Lane 0)` · `Pass` · `100.000` · `Pass/Fail` · `1`.

Detail-pane rows:

- `Eye Mask (Host, 10 Gb/s) (Port 1, Lane 0)`
- `Pass`
- `--Additional Info--`
- `Test Pattern`
- `PRBS31`
- `Eye Height`
- `600.2022 mV`
- `Eye Width`
- `90.0324 pS`
- `Count of Violation`
- `0`
- `Drift`
- `-2.0950900 kPPM`
- `Symbol Rate`
- `9.9790 GHz`
- `Identity`
- `LAPTOP-0DON08SK`
- `Task ID`
- `e2797cef-8afb-4f11-b5ba-bc46e2feddff`
- `Eye diagram`
- `(See image)`
- `Test Point`
- `Port 1, Lane 0`
- `Preset Number (10 Gb/s) (Port 1, Lane 0)`
- `P0`

Mid-pane button label: `View test results`.

Eye diagram: `Eye Recovered - Delay by 5.872[pS]` · `Amplitude [mV]` · `0` · `100` · `200` · `300` · `400` · color-bar ticks `0.3` · `0.4` · `0.5` · `0.6`.

Messages list (selected row): `2024-08-14 06:56:51.131 PM Refreshed HTML Report`.

Messages Details pane: `The HTML report now reflects the results shown on the Results tab.`

## Confidence notes

Transcriptions verified against the 1600 px downscale (`results.jpg`) and cross-checked against IMG_7026. Items below are uncertain:

- The horizontal axis of the eye diagram has no visible tick labels in this crop. Whether it is time (UI), bits, or symbols is not derivable.
- The `View test results` mid-pane affordance reads as a button-style label but its hit target is not directly outlined in the photo — it may be a tooltip rather than a discrete control.
- `Drift: -2.0950900 kPPM` is read precisely; the unit `kPPM` (kilo-parts-per-million) is unusual and may be a per-second drift expression. Documented verbatim.
- `Pass Limits` column value reads `Pass/Fail` — this is a token in the limit column rather than a numeric limit, indicating the test has a categorical (rather than continuous) limit type for this metric. Verified verbatim.
- The Preset Number `P0` is read precisely; the meaning of `P0` (preset zero) is presumably USB4-spec-defined and would need the manual to expand.

## Manual references

> Pending. Manual will be paired in a later pass (Keysight D9040USBC USB4 Test Application User Guide, sections covering the Results tab, the Parameter/Value detail layout, eye-diagram interpretation, and the per-trial recording schema).

## Source photo

Selected from `uploads/photos/`: **IMG_7006.jpg** — chosen for clarity (full Dell-monitor framing, all three body regions plus the Messages panel visible together, eye-diagram preview is rendered with no glare, detail-pane values are all individually legible). Other candidates and why they were not used for step-0:

- `IMG_7026.jpg` — tighter framing of the upper-right Results pane; very useful for verifying the eye-preview transcription at higher zoom but the workflow-tab bar is partially clipped, making it a poor canonical.
