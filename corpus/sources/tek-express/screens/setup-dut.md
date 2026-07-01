---
provenance: observed
software: TekExpress AppEmulator
software_version: TBD
screen_id: setup-dut
screen_title: Setup › DUT
screen_type: config
image: setup-dut.jpg
source_photo: uploads/photos/1. Setup-DUT_Landing screen.png
wizard_step: 1
wizard_step_total: 4
navigation_path: [Setup, DUT]
parent_screens: []
child_screens:
  - setup-test-selection
  - setup-dut-comments
  - setup-dut-session-browser
applies_to: [tek-express]
related_hardware: []
related_modules: []
controls:
  - id: title-bar
    label: "TekExpress AppEmulator — (9346)*"
    type: indicator
    state: active
    action: Window title bar. Asterisk indicates unsaved changes; "(9346)" is the active session ID.
  - id: btn-options
    label: Options ▼
    type: dropdown
    state: enabled
    action: Opens the application-level Options menu (see screens/options-dropdown.md).
  - id: window-controls
    label: ""
    type: indicator
    state: enabled
    action: Window chrome icon buttons (mail, minimise, close). Standard PC window controls top-right.
  - id: nav-setup
    label: Setup
    type: tab
    state: active
    action: Side-nav pill, currently active (orange). Routes to the Setup wizard panel.
  - id: nav-status
    label: Status
    type: tab
    state: enabled
    action: Routes to the Status panel (screens/status-test-status.md / status-log-view.md).
  - id: nav-results
    label: Results
    type: tab
    state: enabled
    action: Routes to the Results panel (screens/results.md).
  - id: nav-plots
    label: Plots
    type: tab
    state: enabled
    action: Routes to the Plots panel (screens/plots.md).
  - id: nav-reports
    label: Reports
    type: tab
    state: enabled
    action: Routes to the Reports panel (screens/reports-configuration.md and reports-view-settings.md).
  - id: wizard-step-1
    label: "1 DUT"
    type: indicator
    state: active
    action: Wizard step 1 indicator — orange-numbered circle indicates current step.
  - id: wizard-step-2
    label: "✓ Test Selection"
    type: tab
    state: enabled
    action: Wizard step 2 — green checkmark indicates completed/visited; tap to jump.
  - id: wizard-step-3
    label: "✓ Acquisitions"
    type: tab
    state: enabled
    action: Wizard step 3 — completed/visited; tap to jump.
  - id: wizard-step-4
    label: "✓ Preferences"
    type: tab
    state: enabled
    action: Wizard step 4 — completed/visited; tap to jump.
  - id: dut-id
    label: "DUT ID :"
    type: input
    state: enabled
    action: Single-line text input identifying the device under test. Current value "KARTHIKSAMPLE". Pencil icon edits inline.
  - id: dut-id-edit
    label: ""
    type: button
    state: enabled
    action: Pencil/edit icon adjacent to DUT ID input. Triggers inline editing (also see screens/setup-dut-comments.md per photo-2 — the Comments popup is launched from a related edit path).
  - id: acquire-mode-live
    label: Acquire live waveforms
    type: radio
    state: enabled
    action: Radio option for live acquisition — captures from the scope in real time.
  - id: acquire-mode-prerecorded
    label: Use pre-recorded waveform files
    type: radio
    state: active
    action: Radio option, currently selected (orange). Uses stored waveform files instead of live capture.
  - id: view-select
    label: "View :"
    type: dropdown
    state: enabled
    action: View preset dropdown. Current value "Compliance" (compliance-test view).
  - id: session-select
    label: "Session : 9346"
    type: button
    state: enabled
    action: Session ID readout with ellipsis (`…`) browser button. Click ellipsis to open the Session selection dialog (screens/setup-dut-session-browser.md).
  - id: device-dropdown
    label: Device
    type: dropdown
    state: enabled
    action: Device-under-test family dropdown. Current value "TX-Device".
  - id: suite-dropdown
    label: Suite
    type: dropdown
    state: enabled
    action: Test suite dropdown. Current value "Group1".
  - id: version-dropdown
    label: Version
    type: dropdown
    state: enabled
    action: Test framework version dropdown. Current value "TEFW..." (truncated; full label is firmware/framework version).
  - id: device-profile-section
    label: Device Profile
    type: indicator
    state: enabled
    action: Group-box header marking the Device Profile sub-section.
  - id: probing-type
    label: Probing Type
    type: dropdown
    state: enabled
    action: Probing topology. Current value "Single-Ended". Other typical values for a transmit-device suite include "Differential."
  - id: vertical-offset
    label: Vertical Offset
    type: input
    state: enabled
    action: Numeric text input for scope vertical-offset configuration. Current value "250V" (verify unit suffix; could be "250 mV" — see Confidence notes).
  - id: device-characteristics-section
    label: Device Characteristics
    type: indicator
    state: enabled
    action: Subsection heading within Device Profile.
  - id: ssc
    label: SSC
    type: dropdown
    state: enabled
    action: Spread-Spectrum Clocking on/off. Current value "On".
  - id: signal-validation-threshold
    label: Signal Validation Threshold
    type: input
    state: enabled
    action: Numeric threshold for signal validation. Current value "300mV".
  - id: execution-settings-section
    label: Execution Settings
    type: indicator
    state: enabled
    action: Subsection heading within Device Profile.
  - id: analyze-on-golden
    label: Analyze on Golden Waveforms
    type: dropdown
    state: enabled
    action: Analyze-on-Golden-Waveforms mode dropdown. Current value "On".
  - id: show-model-info
    label: Show Model Information in Popup
    type: dropdown
    state: enabled
    action: Toggles a popup that surfaces device-model metadata during analysis. Current value "On".
  - id: btn-start
    label: Start
    type: button
    state: enabled
    action: Right-rail green circular Start button. Initiates a full test run. Always present unless a run is active.
  - id: btn-pause
    label: Pause
    type: button
    state: disabled
    action: Right-rail Pause button. Greyed because no run is active.
  - id: not-for-release
    label: Not Intended For Public Release
    type: indicator
    state: active
    action: Red notice fixed at the lower-left of the left rail. Build-mode flag for internal-only builds.
  - id: status-bar
    label: "Ready."
    type: indicator
    state: active
    action: Persistent status bar at the bottom of the window. Shows current state text ("Ready.") with an idle progress indicator.
---

# Setup › DUT

## Purpose

Step 1 of the four-step Setup wizard in TekExpress AppEmulator. The user identifies the device under test (DUT), chooses live vs. prerecorded waveform acquisition, selects the device family / test suite / framework version, and configures the Device Profile (probing topology, signal-validation threshold, SSC, golden-waveform analysis behaviour). Successful completion of all four wizard steps is a precondition for running a test from the right-rail Start button.

This screen is the **entry point** for the application — when the user opens TekExpress AppEmulator with no prior session, it lands here. Returning to it from a later step or from another side-nav panel preserves the form state.

## Controls inventory

The screen layout has four persistent regions plus the central content area.

**Title bar** (`title-bar`) reads `TekExpress AppEmulator — (9346)*` — the trailing asterisk indicates unsaved changes; `9346` is the active session ID. `btn-options` (Options ▼) sits to its right, opening the application-level Options menu (`screens/options-dropdown.md`). `window-controls` — the OS window-chrome icon row (mail icon, minimise, close) — occupies the top-right corner.

**Left side-nav** (`nav-setup`, `nav-status`, `nav-results`, `nav-plots`, `nav-reports`) is a vertical pill column. `nav-setup` is active in orange; the other four are inactive blue-grey. Persistent across all screens.

**Wizard step indicator** (`wizard-step-1` through `wizard-step-4`) runs vertically just inside the Setup panel. Step 1 (DUT) shows an orange-numbered circle marking the current step; steps 2–4 show green checkmarks indicating they have been visited / completed. Tapping any completed step jumps back to it.

**Content area** is a form. The top row pairs `dut-id` (DUT ID text input with the `dut-id-edit` pencil icon) with a right-side radio pair: `acquire-mode-live` (Acquire live waveforms) vs. `acquire-mode-prerecorded` (Use pre-recorded waveform files — currently selected). Below, a configuration row carries the `view-select` dropdown (Compliance), the `session-select` ID-and-browser pill (Session : 9346 …), and three more dropdowns: `device-dropdown` (TX-Device), `suite-dropdown` (Group1), `version-dropdown` (TEFW…).

A bordered **Device Profile** sub-section (`device-profile-section`) contains a two-column form: `probing-type` (Single-Ended) and `vertical-offset` (250V), then a **Device Characteristics** subsection (`device-characteristics-section`) with `ssc` (On) and `signal-validation-threshold` (300mV), then an **Execution Settings** subsection (`execution-settings-section`) with `analyze-on-golden` (On) and `show-model-info` (On).

**Right-rail toolbar** holds `btn-start` (large green circular Start) and `btn-pause` (greyed because no run is active). Persistent across all screens.

**Bottom edge**: `not-for-release` red notice fixed at the lower-left of the left rail (build-mode flag, internal-only); `status-bar` reads `Ready.` with an idle progress indicator.

## State variations

Visible in this photo: wizard at step 1; acquisition mode = prerecorded; session 9346; all of Test Selection / Acquisitions / Preferences completed previously (green checkmarks). Status bar shows Ready (no run in progress).

Other states this screen layout will exhibit:

- **DUT ID Comments popup** — a small text-comment dialog launched from the DUT ID edit affordance, captured in `uploads/photos/2. Setup-DUT_Comments popup.png`. Will be documented as `screens/setup-dut-comments.md`.
- **Run Config / Session browser** — the dialog launched from the `session-select` ellipsis button, captured in `uploads/photos/3. Setup-DUT_Run_Config Session.png`. Will be documented as `screens/setup-dut-session-browser.md`.
- **Fresh-install state** — when no wizard step has been completed, the four step indicators show no green checkmarks; only step 1 is enabled. The user must complete each step in order before steps 2–4 unlock.
- **Run-in-progress state** — when a test is running (`btn-start` was activated), the right-rail toolbar swaps Start for Stop and Pause becomes enabled; the wizard panel is read-only.

## Visible text (verbatim)

Title bar: `TekExpress AppEmulator — (9346)*`.

Side-nav: `Setup` · `Status` · `Results` · `Plots` · `Reports`.

Wizard steps: `1` · `DUT` · `Test Selection` · `Acquisitions` · `Preferences`.

Top form row: `DUT ID :` · `KARTHIKSAMPLE` · `Acquire live waveforms` · `Use pre-recorded waveform files`.

Second form row: `View :` · `Compliance` · `Session : 9346` · `Device` · `TX-Device` · `Suite` · `Group1` · `Version` · `TEFW…`.

Device Profile section: `Device Profile` · `Probing Type` · `Single-Ended` · `Vertical Offset` · `250V`.

Device Characteristics: `Device Characteristics` · `SSC` · `On` · `Signal Validation Threshold` · `300mV`.

Execution Settings: `Execution Settings` · `Analyze on Golden Waveforms` · `On` · `Show Model Information in Popup` · `On`.

Right-rail: `Start` · `Pause`.

Notices: `Not Intended For Public Release` · `Ready.`

## Confidence notes

- `vertical-offset` value `250V` — could be `250 mV` (a more plausible scope vertical-offset value for compliance testing); the `V` vs `mV` distinction is at the legibility edge of the source PNG. Verify against a higher-resolution screenshot or against the user guide.
- `version-dropdown` value `TEFW…` is truncated by the field width; full value not visible.
- Wizard step interactivity for steps 2–4 — they show green checkmarks, suggesting they are tap-to-jump enabled. The audit PDF describes them as "Numbered circles (1–4) on amber progress bar. Completed = green checkmark; current = orange number." This matches what's observed but does not explicitly state tap-to-jump; verify against a live build.
- The full label of `version-dropdown` and the precise meanings of `TX-Device` / `Group1` / `TEFW…` would benefit from the user-guide pairing pass (`document-pdf` against the audit PDF, which uses these terms in passing).
- Whether `btn-pause` is truly greyed because of "no run active" vs. "always greyed until enabled by run state" is observable but not formally documented in the audit PDF beyond "Greyed when idle."

## Manual references

**TekExpress DDR Tx Application Help** (077-1648-04, August 2025) — [`docs/tek-express-ddr5-tx-user-manual/_index.md`](../docs/tek-express-ddr5-tx-user-manual/_index.md):

- **`Setup panel — DUT tab and burst detection`** ([`setup-dut-panel.md`](../docs/tek-express-ddr5-tx-user-manual/setup-dut-panel.md), pp. 20–30) — authoritative reference for every DUT-tab control on this screen: Acquire / Pre-recorded radios, User Defined Acquisition, DUT ID (32-char limit + character restrictions), Device dropdown (DDR5 / LPDDR5-5X), Device Profile (Data Rate, WCK:CK ratio for LPDDR5-5X, derived WCK/Clock Frequencies), Burst Detection Method (Read Write / Write Only / Read Only / Visual Search) with full per-device parameter tables, Signal Probe Type, Filter Files Path De-Embed setup, TriMode Probe Setup, Voltage Settings (VDD, Vcent-DQ, Vcent-CA, Vcent-CS, VDD2, VDDQ, VOH).
- **`Starting the application`** ([`starting-application.md`](../docs/tek-express-ddr5-tx-user-manual/starting-application.md), pp. 15–19) — chrome (Options ▼, Start/Stop, Pause/Continue, Clear, window controls, mini-view toggle) and the Options menu inventory that defines the title bar `btn-options` dropdown.

Cross-references to the UI Component Audit ([`docs/ui-audit/_index.md`](../docs/ui-audit/_index.md), May 2026):

- [`docs/ui-audit/screen-inventory.md`](../docs/ui-audit/screen-inventory.md) — audit entry for Setup › DUT (Step 1).
- [`docs/ui-audit/navigation-components.md`](../docs/ui-audit/navigation-components.md) — side-nav, wizard step indicator, Options menu, window chrome.
- [`docs/ui-audit/form-inputs.md`](../docs/ui-audit/form-inputs.md) — dropdowns, radio pair, text inputs, group boxes.
- [`docs/ui-audit/icon-buttons.md`](../docs/ui-audit/icon-buttons.md) — DUT ID pencil, Session ellipsis.
- [`docs/ui-audit/data-display.md`](../docs/ui-audit/data-display.md) — title bar, status bar, Device Profile group boxes.
- [`docs/ui-audit/right-rail-toolbar.md`](../docs/ui-audit/right-rail-toolbar.md) — Start / Pause buttons.
## Source photo

Selected from `uploads/photos/`: **`1. Setup-DUT_Landing screen.png`** — chosen as the format-lock screen because it is the application's entry point, the audit PDF documents it as "Setup · Step 1 — Setup › DUT" with the most detail among Setup steps, and the screenshot shows the wizard in a meaningful state (one step active, three completed) that exercises the wizard-indicator state vocabulary. Source dimensions 1630 × 1274; downscaled to 1600 px long edge as `setup-dut.jpg` (314 KB).

Photos **2 (Comments popup)** and **3 (Run Config Session)** capture dialog states launched from this screen; they are documented separately as child screens.
