---
provenance: observed
software: "Keysight D9040 (D9040USBC USB4 Test Application / D9040DPPC DisplayPort Test App)"
software_version: TBD
screen_id: set-up
screen_title: Set Up
screen_type: config
image: set-up.jpg
source_photo: uploads/photos/IMG_7016.jpg
function_state: USB4 Test Application — NEW PROJECT; DUT = Host, Both lanes, 10 Gb/s; Test Setup Completed; Calibration Passed
navigation_path: [USB4 Test Application, Set Up]
parent_screens: []
child_screens:
  - select-tests
  - configure
  - run
  - automate
  - results
  - html-report
  - preferences
  - create-automation-commands
related_hardware: [bench-overview, dut-setup]
controls:
  - id: window-titlebar
    label: "USB4 Test Application -- NEW PROJECT"
    type: indicator
    state: active
    action: Application window title bar. `NEW PROJECT` is the placeholder until a project is saved.
  - id: menu-file
    label: File
    type: button
    state: enabled
    action: File menu — open, save, save-as, export, exit.
  - id: menu-view
    label: View
    type: button
    state: enabled
    action: View menu.
  - id: menu-tools
    label: Tools
    type: button
    state: enabled
    action: Tools menu. From IMG_7027 this is where Reset, Data Analytics, and Preferences live.
  - id: menu-help
    label: Help
    type: button
    state: enabled
    action: Help menu.
  - id: tab-set-up
    label: Set Up
    type: tab
    state: active
    action: First and currently-active workflow tab. Configures the device under test and the test-environment basics.
  - id: tab-select-tests
    label: Select Tests
    type: tab
    state: enabled
    action: Second workflow tab. Choose which compliance tests to run.
  - id: tab-configure
    label: Configure
    type: tab
    state: enabled
    action: Third workflow tab. Tune compliance/debug variables and per-test parameters.
  - id: tab-connect
    label: Connect
    type: tab
    state: enabled
    action: Fourth workflow tab. Prompts the operator through fixture wiring between phases.
  - id: tab-run
    label: Run
    type: tab
    state: enabled
    action: Fifth workflow tab. Starts/pauses the run and surfaces overall pass/fail.
  - id: tab-automate
    label: Automate
    type: tab
    state: enabled
    action: Sixth workflow tab. Script-driven automation.
  - id: tab-results
    label: Results
    type: tab
    state: enabled
    action: Seventh workflow tab. Per-test results table with eye diagrams and pass/fail margin.
  - id: tab-html-report
    label: HTML Report
    type: tab
    state: enabled
    action: Eighth workflow tab. Final compliance report.
  - id: panel-dut
    label: Device Under Test (DUT)
    type: indicator
    state: active
    action: First-region group box. Holds DUT identity and physical-layer configuration.
  - id: dut-device-type
    label: Device Type
    type: button
    state: active
    action: Radio group — `Device`, `Host`, `Retimer`. `Host` is selected in this photo.
  - id: dut-captive-device
    label: Captive Device
    type: toggle
    state: enabled
    action: Checkbox indicating whether the DUT is a captive (non-detachable) device.
  - id: dut-number-of-port
    label: Number of Port
    type: button
    state: active
    action: Radio group — `1 Port`, `2 Ports`. `1 Port` is selected in this photo.
  - id: dut-port-name-1
    label: Port Name (Port 1)
    type: dropdown
    state: enabled
    action: First DUT port name. Visible value `Port 1`.
  - id: dut-port-name-2
    label: Port Name (Port 2)
    type: dropdown
    state: enabled
    action: Second DUT port name. Visible value `Port 2`. Greyed in practice when `1 Port` is selected, but visible at this resolution.
  - id: dut-test-lane-1
    label: Test Lane (Port 1)
    type: dropdown
    state: enabled
    action: Per-port lane scope. Visible value `Both lanes`.
  - id: dut-test-lane-2
    label: Test Lane (Port 2)
    type: dropdown
    state: enabled
    action: Per-port lane scope. Visible value `Both lanes`.
  - id: dut-bit-rate-10
    label: 10 Gb/s
    type: toggle
    state: active
    action: Bit-rate selector — checkbox checked in this photo (USB4 Gen 2x lane rate).
  - id: dut-bit-rate-103125
    label: 10.3125 Gb/s
    type: toggle
    state: enabled
    action: Bit-rate selector — checkbox unchecked.
  - id: dut-bit-rate-20
    label: 20 Gb/s
    type: toggle
    state: enabled
    action: Bit-rate selector — checkbox unchecked (USB4 Gen 3x lane rate).
  - id: dut-bit-rate-20625
    label: 20.625 Gb/s
    type: toggle
    state: enabled
    action: Bit-rate selector — checkbox unchecked.
  - id: panel-product-info
    label: Product Info
    type: indicator
    state: active
    action: Group box capturing DUT branding/metadata.
  - id: prod-device-identifier
    label: Device Identifier
    type: dropdown
    state: enabled
    action: Free-form combo — `(SELECT OR TYPE)` placeholder.
  - id: prod-user-description
    label: User Description
    type: dropdown
    state: enabled
    action: Free-form combo — `(SELECT OR TYPE)` placeholder.
  - id: prod-comment
    label: Comment
    type: input
    state: enabled
    action: Free-form text area for DUT notes.
  - id: prod-sigtest-setup
    label: SigTest Setup
    type: button
    state: enabled
    action: Launches the SigTest external-tool configuration flow.
  - id: panel-automation-controller
    label: Automation Controller
    type: indicator
    state: active
    action: Group box for the external automation device used to switch the test fixture.
  - id: auto-controller-name
    label: Automation Controller (dropdown)
    type: dropdown
    state: active
    action: Active automation controller identifier — visible value `USB4-TPA-UC`.
  - id: auto-enable
    label: Enable Automation
    type: toggle
    state: active
    action: Master toggle for the automation controller. Checkbox is checked.
  - id: auto-configure
    label: Configure
    type: button
    state: enabled
    action: Opens the controller-specific configuration UI.
  - id: auto-initialize
    label: Initialize
    type: button
    state: enabled
    action: Sends the initialization sequence to the controller.
  - id: panel-test-setup
    label: Test Setup
    type: indicator
    state: active
    action: Group box exposing two destructive-action buttons that prepare the bench.
  - id: btn-test-setup
    label: Test Setup
    type: button
    state: enabled
    action: Top action button. Below it the readout `Test Setup Completed` indicates the last invocation succeeded.
  - id: btn-connect-vna
    label: Connect VNA
    type: button
    state: enabled
    action: Connects to the vector network analyzer required for some USB4 measurements.
  - id: panel-channel-skew-calibration
    label: Channel Skew Calibration
    type: indicator
    state: active
    action: Group box for the channel-skew calibration step.
  - id: btn-calibrate-setup
    label: Calibrate Setup
    type: button
    state: enabled
    action: Runs the channel-skew calibration. Below it the readout `Calibration Passed` indicates the last invocation succeeded.
  - id: messages-panel
    label: Messages
    type: indicator
    state: active
    action: Dockable panel at the bottom of the application window. Shows the timeline of test-application events and lets the operator filter / clear them. Persistent across all workflow tabs.
  - id: messages-reset-alert
    label: Reset Alert
    type: button
    state: enabled
    action: Clears the alert highlight from the Messages panel.
  - id: messages-summaries
    label: Summaries (click for details)
    type: button
    state: enabled
    action: Expand-collapse affordance for Messages-pane summaries.
  - id: messages-filter
    label: Filter…
    type: button
    state: enabled
    action: Opens a filter dialog over the Messages list.
  - id: messages-clear
    label: Clear…
    type: button
    state: enabled
    action: Clears all messages.
  - id: messages-details
    label: Details
    type: readout
    state: active
    action: "Right pane of the Messages panel — expanded detail for the currently selected message row. Visible text: `The HTML report now reflects the results shown on the Results tab.`"
  - id: statusbar-unsaved-changes
    label: Unsaved Changes
    type: indicator
    state: active
    action: Bottom-left status indicator. Reflects whether the current project has pending edits.
  - id: statusbar-measserver
    label: MeasServer(A,R)
    type: indicator
    state: active
    action: Indicates the Measurement Server is connected and in (Acquire, Report) mode.
  - id: statusbar-tests
    label: 0 Tests
    type: indicator
    state: active
    action: Count of currently-selected tests in the project.
  - id: statusbar-pass
    label: PASS
    type: indicator
    state: active
    action: Overall pass/fail badge — bright green `PASS` in this photo.
---

# Set Up

## Purpose

Set Up is the first of eight ordered workflow tabs in the USB4 Test Application and the operator's entry point for a new compliance session. It captures three classes of input that everything downstream depends on: (1) the **Device Under Test** identity — host vs device vs retimer, single- or dual-port, which lanes are in scope, and at which USB4 bit rates; (2) **Product Info** metadata that is stamped into the final HTML report; and (3) the **bench state** — which Automation Controller is wired up, whether the cabling test setup has been completed, and whether channel-skew calibration has been passed. Two large status readouts (`Test Setup Completed`, `Calibration Passed`) explicitly tell the operator the bench is ready before they leave this tab.

## Controls inventory

The page is framed by **window chrome** (`window-titlebar` `USB4 Test Application -- NEW PROJECT`), a **classic menu bar** (`menu-file`, `menu-view`, `menu-tools`, `menu-help`), and an **eight-tab workflow bar** (`tab-set-up`, `tab-select-tests`, `tab-configure`, `tab-connect`, `tab-run`, `tab-automate`, `tab-results`, `tab-html-report`). The Set Up tab is highlighted teal-blue; the other tabs are visually subdued and clickable. These tabs and the menu bar persist across every other workflow screen in this corpus and are not duplicated in their controls lists.

The Set Up body splits into five group boxes. **Device Under Test (DUT)** holds `dut-device-type` (radios: Device / Host / Retimer — Host active), `dut-captive-device` (checkbox), `dut-number-of-port` (radios: 1 Port / 2 Ports — 1 Port active), `dut-port-name-1` / `dut-port-name-2` (dropdowns showing `Port 1` and `Port 2`), `dut-test-lane-1` / `dut-test-lane-2` (dropdowns showing `Both lanes`), and a 2×2 bit-rate matrix of checkboxes — `dut-bit-rate-103125` (`10.3125 Gb/s`), `dut-bit-rate-10` (`10 Gb/s`, checked), `dut-bit-rate-20625` (`20.625 Gb/s`), `dut-bit-rate-20` (`20 Gb/s`). **Product Info** holds three free-form fields `prod-device-identifier`, `prod-user-description`, `prod-comment`, and the `prod-sigtest-setup` button.

**Automation Controller** is a single-row band carrying `auto-controller-name` (`USB4-TPA-UC`), `auto-enable` (checked), `auto-configure`, and `auto-initialize`. Below it, **Test Setup** holds two stacked buttons — `btn-test-setup` and `btn-connect-vna` — with the readout `Test Setup Completed` visible between them. To the right, **Channel Skew Calibration** holds `btn-calibrate-setup` with the readout `Calibration Passed` below it.

The bottom of the window holds the persistent **Messages panel** with five affordances along its top — `messages-reset-alert`, `messages-summaries`, `messages-filter`, `messages-clear`, plus the `messages-details` right pane. Beneath everything is a **status bar** with `statusbar-unsaved-changes`, `statusbar-measserver` (`MeasServer(A,R)`), `statusbar-tests` (`0 Tests`), and `statusbar-pass` (bright green `PASS`).

There are no bezel controls — this is a Windows desktop application rendered on a Dell external monitor.

## State variations

Visible in this photo: DUT type Host, 1 Port, Both lanes on both ports, only `10 Gb/s` bit-rate selected, Product Info fields empty (`(SELECT OR TYPE)` placeholders), Automation Controller `USB4-TPA-UC` enabled, Test Setup Completed, Calibration Passed.

Across IMG_7007, IMG_7016 the same tab is shown with effectively identical configuration — IMG_7007 is taken at an oblique angle and uses a wider color cast; IMG_7016 is more orthogonal and is the chosen canonical.

Other states this same screen layout will exhibit:

- DUT type changes — Device or Retimer selection in `dut-device-type` will change which DUT-port and lane choices remain enabled.
- 2 Ports — selecting `2 Ports` activates the second column of port-name and test-lane dropdowns; greyed-out state is visible in the 1-port photo.
- Bit-rate combinations — any combination of the four bit-rate checkboxes is allowed; the visible state is single-rate `10 Gb/s` only.
- Automation Controller disabled — when `auto-enable` is cleared, `auto-configure` and `auto-initialize` become disabled.
- Pre-calibration state — before the operator runs `btn-test-setup` and `btn-calibrate-setup`, the corresponding readouts (`Test Setup Completed`, `Calibration Passed`) are not shown. Not visible in this photo set.
- Tools menu open — see IMG_7027 for the Tools menu surfacing `Reset`, `Data Analytics`, `Preferences`; that surface is documented as `select-tests` (different tab active but the menu structure is the same).
- The Preferences > Display tab exposes a `Color scheme: Midnight / Platinum` setting (visible in IMG_7033). This Set Up tab is captured in the **Midnight** theme in this photo set.

## Visible text (verbatim)

Window title: `USB4 Test Application -- NEW PROJECT`.

Menu bar: `File` · `View` · `Tools` · `Help`.

Workflow tabs: `Set Up` · `Select Tests` · `Configure` · `Connect` · `Run` · `Automate` · `Results` · `HTML Report`.

DUT group: `Device Under Test (DUT)` · `Device Type:` · `Device` · `Host` · `Retimer` · `Captive Device:` · `Number of Port:` · `1 Port` · `2 Ports` · `Port Name:` · `Port 1` · `Port 2` · `Test Lane:` · `Both lanes` · `Both lanes` · `Bit Rate:` · `10.3125 Gb/s` · `20.625 Gb/s` · `10 Gb/s` · `20 Gb/s`.

Page banner (right side): `USB4 Test Application Test Environment Setup`.

Product Info group: `Product Info` · `Device Identifier` · `User Description` · `(SELECT OR TYPE)` · `(SELECT OR TYPE)` · `Comment:` · `SigTest Setup`.

Automation Controller group: `Automation Controller` · `Automation Controller USB4-TPA-UC` · `Enable Automation` · `Configure` · `Initialize`.

Test Setup group: `Test Setup` · `Test Setup` (button) · `Test Setup Completed` · `Connect VNA`.

Channel Skew Calibration group: `Channel Skew Calibration` · `Calibrate Setup` · `Calibration Passed`.

Messages panel header: `Messages` · `Reset Alert` · `Summaries (click for details)` · `Filter…` · `Clear…` · `Details` · `The HTML report now reflects the results shown on the Results tab.`

Status bar: `Unsaved Changes` · `MeasServer(A,R)` · `0 Tests` · `PASS`.

## Confidence notes

Transcriptions verified against the 1600 px downscale (`set-up.jpg`) and cross-checked with IMG_7007. Items below are uncertain:

- The exact label of the second-from-bottom-right indicator (`0 Tests`) — the digit could plausibly be `0` or `O`; treated as `0` because the project is `NEW PROJECT` with no tests selected, consistent with IMG_7014 where the same indicator reads `0 Tests`.
- The MeasServer mode `(A,R)` is read as Acquire/Report. The expansion to `(A,M,R)` (Acquire, Measure, Report) is visible elsewhere (e.g. IMG_7008 shows `Multiple (Measurement Server)`), so the `A,R` here is a specific mode and not a label abbreviation. Unverified.
- The 2-port column's `Port 2` / `Both lanes` dropdowns are visible at this resolution but their interactive state when `1 Port` is selected (greyed vs hidden) cannot be confirmed from a still photo. The convention `disabled when 1 Port is active` is a reasonable assumption but is **not directly verified**.
- The bright-green `PASS` badge in the status bar refers to the **overall run status from the most recent run**, not a property of the Set Up tab itself. This is verified against IMG_7014 / IMG_7025 where the same `PASS` appears alongside `Overall Run Status: PASS` on the Run tab.
- The `NEW PROJECT` label in the title bar reflects an unsaved state, not a screen-specific identity. All eight tabs in this photo set share that title.

## Manual references

> Pending. Manual will be paired in a later pass (Keysight D9040USBC USB4 Test Application User Guide, sections covering the Set Up tab, Test Environment Setup, Automation Controller configuration, and Channel Skew Calibration).

## Source photo

Selected from `uploads/photos/`: **IMG_7016.jpg** — chosen for clarity (most orthogonal framing of the monitor, sharpest text on the Bit Rate matrix and the Automation Controller row, both the `Test Setup Completed` and `Calibration Passed` readouts are legible, Messages panel is in its default state). Other candidates and why they were not used for step-0:

- `IMG_7007.jpg` — same screen at an oblique angle; slight motion blur on the DUT group; lower fidelity.
