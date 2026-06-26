---
software: "Keysight D9040 (D9040USBC USB4 Test Application / D9040DPPC DisplayPort Test App)"
software_version: "D9040USBC USB4 Test 1.30.0.0"
screen_id: html-report
screen_title: HTML Report
screen_type: readout
image: html-report.jpg
source_photo: uploads/photos/IMG_7017.jpg
function_state: Test Report PASS; Application D9040USBC USB4 Test 1.30.0.0; Host DUT; Both lanes Port 1 and Port 2; Automation Controller USB4-TPA-UC; Compliance Limits "USB4 Specification Version 2.00 (official)"
navigation_path: [USB4 Test Application, HTML Report]
parent_screens:
  - results
child_screens: []
related_hardware: []
controls:
  - id: tab-html-report
    label: HTML Report
    type: tab
    state: active
    action: Currently active workflow tab. Note that this tab keeps its own internal toolbar — a single `Refresh` button below the tab row.
  - id: btn-refresh
    label: Refresh
    type: button
    state: enabled
    action: Re-renders the HTML report from the underlying Results data.
  - id: report-brand
    label: KEYSIGHT (red brand mark)
    type: indicator
    state: active
    action: Keysight wordmark at the top-left of the report body.
  - id: report-title
    label: Test Report
    type: indicator
    state: active
    action: Report H1 — centered above the configuration table.
  - id: report-overall-pass
    label: PASS
    type: indicator
    state: active
    action: Large green `PASS` badge below the H1 — overall pass/fail of the report.
  - id: section-application
    label: Application
    type: indicator
    state: active
    action: First section header in the configuration table — light-blue banner.
  - id: app-name
    label: "Name: D9040USBC USB4 Test"
    type: readout
    state: active
    action: Application name.
  - id: app-version
    label: "Version: 1.30.0.0"
    type: readout
    state: active
    action: Application version (D9040USBC USB4 Test Application 1.30.0.0).
  - id: section-device-description
    label: Device Description
    type: indicator
    state: active
    action: Section header.
  - id: dev-dut-type
    label: "DUT Type: Host"
    type: readout
    state: active
    action: DUT type stamped into the report from the Set Up tab.
  - id: dev-port-number
    label: "Port Number: 1 Port"
    type: readout
    state: active
    action: Number of DUT ports.
  - id: dev-port1-name
    label: "Port1 Name: Port 1"
    type: readout
    state: active
    action: Port 1 name (matches Set Up dropdown).
  - id: dev-port2-name
    label: "Port2 Name: Port 2"
    type: readout
    state: active
    action: Port 2 name.
  - id: dev-test-lane-1
    label: "Test Lane Port 1: Both lanes"
    type: readout
    state: active
    action: Test lane scope for Port 1.
  - id: dev-test-lane-2
    label: "Test Lane Port 2: Both lanes"
    type: readout
    state: active
    action: Test lane scope for Port 2.
  - id: dev-automation-controller
    label: "Automation Controller: USB4-TPA-UC"
    type: readout
    state: active
    action: Automation controller identifier.
  - id: dev-enable-automation
    label: "Enable Automation Controller: Yes"
    type: readout
    state: active
    action: Whether automation is enabled.
  - id: dev-specification-version
    label: "Specification Version: USB4 Specification Ver 2.00"
    type: readout
    state: active
    action: Spec version referenced for compliance.
  - id: dev-enable-saved-waveform
    label: "Enable Saved Waveform: No"
    type: readout
    state: active
    action: Whether saved waveforms are exported.
  - id: dev-predefined-preset
    label: "Enable Predefined Preset Number: Yes"
    type: readout
    state: active
    action: Whether the report records a predefined-preset selection.
  - id: dev-preset-calibration
    label: "Enable Preset Calibration: No"
    type: readout
    state: active
    action: Preset-calibration toggle from the run.
  - id: dev-ctle-dc-gain
    label: "Enable Predefined CTLE DC Gain: Yes"
    type: readout
    state: active
    action: CTLE DC gain preset toggle.
  - id: dev-ctle-calibration
    label: "Enable CTLE Calibration: No"
    type: readout
    state: active
    action: CTLE calibration toggle.
  - id: section-test-session
    label: Test Session Details
    type: indicator
    state: active
    action: Section header.
  - id: session-infiniium-sw
    label: "Infiniium SW Version: 11.50.00601"
    type: readout
    state: active
    action: Infiniium scope software version.
  - id: session-infiniium-model
    label: "Infiniium Model Number: UXR0254A"
    type: readout
    state: active
    action: Infiniium scope model number.
  - id: session-infiniium-serial
    label: "Infiniium Serial Number: MY58180170"
    type: readout
    state: active
    action: Infiniium scope serial number.
  - id: session-debug-mode
    label: "Debug Mode Used: False"
    type: readout
    state: active
    action: Whether the run was executed in Debug mode (vs Compliance).
  - id: session-compliance-limits
    label: "Compliance Limits: USB4 Specification Version 2.00 (official)"
    type: readout
    state: active
    action: Compliance-limit set the report was rendered against.
  - id: session-last-test-date
    label: "Last Test Date: 0001-01-01 00:00:00 UTC +08:00"
    type: readout
    state: active
    action: Date stamp of the last test. The `0001-01-01` value is a placeholder / unset state (see Confidence notes).
  - id: side-marker-html-report
    label: HTML REPORT
    type: indicator
    state: active
    action: Vertical text in the left margin spelling `HTML REPORT`.
---

# HTML Report — PASS

## Purpose

HTML Report is the eighth and final workflow tab. It is the operator's customer-facing artifact — a fully-formed, HTML-rendered compliance report that summarizes the configuration, environment, and pass/fail outcome of the test run. The body is rendered in a white-background HTML pane (in contrast to the dark "Midnight" theme of every other tab), keyed off the Keysight wordmark, the centered `Test Report` heading, the large green `PASS` badge, and a multi-section configuration table covering Application identity, Device Description (DUT and automation), and Test Session Details (scope info, debug-vs-compliance flag, last test date).

## Controls inventory

Above the body, the workflow tab bar (documented in `set-up`) shows `tab-html-report` highlighted. Immediately below the tab strip, this view exposes a single internal toolbar control: `btn-refresh` (`Refresh`).

The body has four vertically-stacked regions inside the white HTML pane.

**Header** — `report-brand` (Keysight wordmark, red), then `report-title` (`Test Report`, centered), then `report-overall-pass` (large green `PASS` badge).

**Application** — section banner `section-application`, then two rows: `app-name` (`Name: D9040USBC USB4 Test`) and `app-version` (`Version: 1.30.0.0`).

**Device Description** — section banner `section-device-description`, then thirteen rows: `dev-dut-type` (`DUT Type: Host`), `dev-port-number` (`Port Number: 1 Port`), `dev-port1-name` (`Port1 Name: Port 1`), `dev-port2-name` (`Port2 Name: Port 2`), `dev-test-lane-1` (`Test Lane Port 1: Both lanes`), `dev-test-lane-2` (`Test Lane Port 2: Both lanes`), `dev-automation-controller` (`Automation Controller: USB4-TPA-UC`), `dev-enable-automation` (`Enable Automation Controller: Yes`), `dev-specification-version` (`Specification Version: USB4 Specification Ver 2.00`), `dev-enable-saved-waveform` (`Enable Saved Waveform: No`), `dev-predefined-preset` (`Enable Predefined Preset Number: Yes`), `dev-preset-calibration` (`Enable Preset Calibration: No`), `dev-ctle-dc-gain` (`Enable Predefined CTLE DC Gain: Yes`), `dev-ctle-calibration` (`Enable CTLE Calibration: No`).

**Test Session Details** — section banner `section-test-session`, then six rows: `session-infiniium-sw` (`Infiniium SW Version: 11.50.00601`), `session-infiniium-model` (`Infiniium Model Number: UXR0254A`), `session-infiniium-serial` (`Infiniium Serial Number: MY58180170`), `session-debug-mode` (`Debug Mode Used: False`), `session-compliance-limits` (`Compliance Limits: USB4 Specification Version 2.00 (official)`), `session-last-test-date` (`Last Test Date: 0001-01-01 00:00:00 UTC +08:00`).

The left margin carries `side-marker-html-report` (vertical `HTML REPORT` text). The Messages panel and status bar persist from `set-up`.

## State variations

Visible in this photo: the report is in `PASS` overall state, application 1.30.0.0, Infiniium UXR0254A, Compliance Limits `USB4 Specification Version 2.00 (official)`.

The HTML body in this tab is not a state of the application UI but a state of the **report document** — re-running tests, then pressing `Refresh`, would replace the body. The dark application chrome around the HTML pane stays constant.

Other states this same screen will exhibit:

- Overall `FAIL` — `report-overall-pass` would render in red as `FAIL`.
- Per-test result blocks below the configuration table — when the report scrolls past the visible viewport, individual test sections with their own pass/fail and detail tables would appear. Not visible in this photo's scroll position.
- Different DUT — every DUT-related row above would re-stamp from Set Up.

## Visible text (verbatim)

Toolbar: `Refresh`.

Brand mark: `KEYSIGHT`.

Report H1: `Test Report`.

Overall badge: `PASS`.

Section banner: `Test Configuration Details` (visible above the Application section).

Application section banner: `Application`.

Application rows: `Name` · `D9040USBC USB4 Test` · `Version` · `1.30.0.0`.

Device Description section banner: `Device Description`.

Device Description rows:

- `DUT Type` · `Host`
- `Port Number` · `1 Port`
- `Port1 Name` · `Port 1`
- `Port2 Name` · `Port 2`
- `Test Lane Port 1` · `Both lanes`
- `Test Lane Port 2` · `Both lanes`
- `Automation Controller` · `USB4-TPA-UC`
- `Enable Automation Controller` · `Yes`
- `Specification Version` · `USB4 Specification Ver 2.00`
- `Enable Saved Waveform` · `No`
- `Enable Predefined Preset Number` · `Yes`
- `Enable Preset Calibration` · `No`
- `Enable Predefined CTLE DC Gain` · `Yes`
- `Enable CTLE Calibration` · `No`

Test Session Details section banner: `Test Session Details`.

Test Session Details rows:

- `Infiniium SW Version` · `11.50.00601`
- `Infiniium Model Number` · `UXR0254A`
- `Infiniium Serial Number` · `MY58180170`
- `Debug Mode Used` · `False`
- `Compliance Limits` · `USB4 Specification Version 2.00 (official)`
- `Last Test Date` · `0001-01-01 00:00:00 UTC +08:00`

Status bar: `Unsaved Changes` · `MeasServer(A,R)` · `0 Tests` · `PASS`.

## Confidence notes

Transcriptions verified against the 1600 px downscale (`html-report.jpg`). Items below are uncertain:

- `Last Test Date: 0001-01-01 00:00:00 UTC +08:00` is suspicious — `0001-01-01` is a typical .NET `DateTime.MinValue` sentinel, suggesting the last-test-date field was not populated by the run that produced this report. Treated as a likely "unset / placeholder" value rather than a real timestamp.
- `Infiniium SW Version: 11.50.00601` — the `00601` digit count is at the edge of legibility; could plausibly be `00601` or `0060I`. Read as `00601`.
- `Compliance Limits: USB4 Specification Version 2.00 (official)` — the parenthetical `(official)` is read precisely; meaning likely "this is the published spec rather than a draft / internal limit-set". Documented verbatim.
- Whether `Refresh` only re-renders the report from existing data or also triggers a re-evaluation against current results is not derivable from a still photo (a Messages-list line elsewhere reads `Refreshing HTML Report` → `Refreshed HTML Report` which is consistent with a re-render-only model).
- The status-bar `PASS` mirrors the report's `PASS` badge but they are conceptually separate — the badge is from the report; the status-bar token is from the last run.

## Manual references

> Pending. Manual will be paired in a later pass (Keysight D9040USBC USB4 Test Application User Guide, sections covering the HTML Report tab, the report schema, and the Refresh action).

## Source photo

Selected from `uploads/photos/`: **IMG_7017.jpg** — chosen because it is the only photo in the set capturing the HTML Report tab. The Dell-monitor framing is orthogonal, the `PASS` badge is unambiguously green, and the body table is sharply rendered top-to-bottom. No alternate candidate exists for this screen.
