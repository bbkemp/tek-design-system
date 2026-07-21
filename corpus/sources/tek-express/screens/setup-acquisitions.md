---
provenance: observed
class: screen
software: TekExpress AppEmulator
software_version: TBD
screen_id: setup-acquisitions
screen_title: Setup › Acquisitions
screen_type: config
image: setup-acquisitions.jpg
source_photo: uploads/photos/8. Setup-Acquisitions.png
wizard_step: 3
wizard_step_total: 4
navigation_path: [Setup, Acquisitions]
parent_screens: [setup-test-selection]
child_screens: [setup-acquisitions-probe-config, setup-preferences]
applies_to: [tek-express]
related_screens: [setup-dut, setup-test-selection, setup-acquisitions-probe-config, setup-preferences]
related_hardware: []
related_modules: []
controls:
  - id: title-bar
    label: "TekExpress AppEmulator — (9346)*"
    type: indicator
    state: active
    action: Same window chrome as setup-dut.md.
  - id: btn-options
    label: Options ▼
    type: dropdown
    state: enabled
    action: Application-level Options menu.
  - id: nav-setup
    label: Setup
    type: tab
    state: active
    action: Side-nav, on Setup panel.
  - id: nav-status
    label: Status
    type: tab
    state: enabled
    action: See setup-dut.md.
  - id: nav-results
    label: Results
    type: tab
    state: enabled
    action: See setup-dut.md.
  - id: nav-plots
    label: Plots
    type: tab
    state: enabled
    action: See setup-dut.md.
  - id: nav-reports
    label: Reports
    type: tab
    state: enabled
    action: See setup-dut.md.
  - id: wizard-step-1
    label: "✓ DUT"
    type: tab
    state: enabled
    action: Wizard step 1, completed.
  - id: wizard-step-2
    label: "✓ Test Selection"
    type: tab
    state: enabled
    action: Wizard step 2, completed.
  - id: wizard-step-3
    label: "3 Acquisitions"
    type: indicator
    state: active
    action: Wizard step 3 — orange-numbered current step.
  - id: wizard-step-4
    label: "✓ Preferences"
    type: tab
    state: enabled
    action: Wizard step 4, completed.
  - id: dut-context-header
    label: "TX-Device : Group1 : TEFW 4.0"
    type: indicator
    state: active
    action: Same Device / Suite / Version header as Test Selection.
  - id: btn-refresh-sources
    label: Refresh Sources
    type: button
    state: enabled
    action: Reloads available scope source channels.
  - id: btn-view-probes
    label: View Probes
    type: button
    state: enabled
    action: Opens the Probe Config dialog (setup-acquisitions-probe-config.md).
  - id: acquisition-table
    label: ""
    type: readout
    state: active
    action: Test-to-acquisition mapping table. Three columns Test Name, Acquisition, Waveform File Name. Four rows mapping the selected tests to acquisition records.
  - id: acq-row-alm-short
    label: Algorithm Library Measure Short Record-length for Pr...
    type: readout
    state: active
    action: Row 1 — Algorithm Library short-record measurement.
  - id: acq-row-alm-acq
    label: Algorithm Library Measure Acquisition for Algorithm T...
    type: readout
    state: active
    action: Row 2 — Algorithm Library acquisition for Algorithm Tests.
  - id: acq-row-scope
    label: Period using SCOPE (Acq Short Record-length for SC...
    type: readout
    state: active
    action: Row 3 — SCOPE-based period acquisition.
  - id: acq-row-dpojet
    label: Period using DPOJET (Ac-Short Record-length for DP...
    type: readout
    state: active
    action: Row 4 — DPOJET-based period acquisition.
  - id: waveform-file-pickers
    label: ""
    type: button
    state: enabled
    action: One file-picker icon per row in the Waveform File Name column. Opens an OS file dialog to attach a pre-recorded waveform file to the row.
  - id: chk-show-acquire-parameters
    label: Show Acquire Parameters
    type: checkbox
    state: enabled
    action: Toggle to expand additional acquire-parameter columns in the table.
  - id: btn-start
    label: Start
    type: button
    state: enabled
    action: Right-rail Start.
  - id: btn-pause
    label: Pause
    type: button
    state: disabled
    action: Right-rail Pause, idle.
  - id: not-for-release
    label: Not Intended For Public Release
    type: indicator
    state: active
    action: Build-mode notice.
  - id: status-bar
    label: "Ready."
    type: indicator
    state: active
    action: Idle status bar.
---

# Setup › Acquisitions

## Purpose

Step 3 of the four-step Setup wizard. Maps each selected test (from Setup › Test Selection) to an acquisition source — either a live scope channel or a pre-recorded waveform file. The table lists one row per test/acquisition pairing; the file-picker icon on each row attaches a waveform file. The screen-level Refresh Sources button reloads the available scope sources; View Probes opens the [Probe Config sub-dialog](./setup-acquisitions-probe-config.md).

When `acquire-mode-prerecorded` is selected on Setup › DUT (the typical state in our screenshots), this screen's file-picker icons are the primary mechanism for attaching the recorded files. When `acquire-mode-live` is selected, the live source channels (from `btn-refresh-sources`) are used instead.

## Controls inventory

**Chrome regions** are identical to [setup-dut.md](./setup-dut.md). Wizard indicator: steps 1 and 2 are ✓ checkmarked; step 3 (Acquisitions) is the orange current; step 4 is ✓ checkmarked.

The **content area** opens with the same `dut-context-header` (`TX-Device : Group1 : TEFW 4.0`) shown on Test Selection. Top-right, two action buttons: `btn-refresh-sources` and `btn-view-probes`.

The **acquisition table** (`acquisition-table`) has three columns — **Test Name**, **Acquisition**, **Waveform File Name**. Four rows visible (`acq-row-alm-short`, `acq-row-alm-acq`, `acq-row-scope`, `acq-row-dpojet`) — one per selected test in the Test Selection tree. Each row's Waveform File Name column carries a file-picker icon (`waveform-file-pickers`) that opens an OS file dialog.

Below the table, on the right, sits `chk-show-acquire-parameters` — a checkbox that expands the table with additional acquire-parameter columns when toggled on.

## State variations

- **Show Acquire Parameters ON** — the table grows additional columns exposing per-acquisition scope parameters (horizontal scale, record length, etc.). Not captured in this screenshot.
- **All Waveform Files attached** — when every row has a populated Waveform File Name, the wizard step transitions from in-progress to completed (green checkmark on `wizard-step-3` when revisiting from another step).
- **Live acquisition mode** — when Setup › DUT is set to live acquisition, the column shifts to scope-channel selection rather than file paths.
- **Probe Config sub-dialog open** — `btn-view-probes` opens [setup-acquisitions-probe-config.md](./setup-acquisitions-probe-config.md).

## Visible text (verbatim)

Header: `TX-Device : Group1 : TEFW 4.0`. Top-right buttons: `Refresh Sources` · `View Probes`.

Table columns: `Test Name` · `Acquisition` · `Waveform File Name`.

Rows: `Algorithm Library Measure Short Record-length for Pr...` · `Algorithm Library Measure Acquisition for Algorithm T...` · `Period using SCOPE (Acq Short Record-length for SC...` · `Period using DPOJET (Ac-Short Record-length for DP...`.

Bottom-right: `Show Acquire Parameters`.

Chrome: same as setup-dut.md.

## Confidence notes

- The full Test Name strings are truncated in every row by the column width. Likely match the test names from the Test Selection tree but extended with acquisition-record suffixes — verify against the live build.
- The Acquisition column appears empty in this screenshot. It might be a status column (showing "Pending", "Done", etc.) or a dropdown that populates after Refresh Sources is invoked. Verify with the live build.
- The Waveform File Name column is also empty in this screenshot — no files attached yet. The file-picker icons are still active (clickable).

## Manual references

Cross-references to the UI Component Audit ([`docs/ui-audit/_index.md`](../docs/ui-audit/_index.md), May 2026):

- [`docs/ui-audit/screen-inventory.md`](../docs/ui-audit/screen-inventory.md) — audit entry for Setup › Acquisitions (Step 3).
- [`docs/ui-audit/navigation-components.md`](../docs/ui-audit/navigation-components.md) — side-nav, wizard step indicator.
- [`docs/ui-audit/data-display.md`](../docs/ui-audit/data-display.md) — acquisition mapping table.
- [`docs/ui-audit/inline-teal-pill-buttons.md`](../docs/ui-audit/inline-teal-pill-buttons.md) — Refresh Sources / View Probes.
- [`docs/ui-audit/form-inputs.md`](../docs/ui-audit/form-inputs.md) — Show Acquire Parameters checkbox.
- [`docs/ui-audit/icon-buttons.md`](../docs/ui-audit/icon-buttons.md) — per-row waveform file pickers.

The audit PDF is itself a UI component inventory rather than a user manual. A separate user-guide PDF, if it surfaces, will land as `docs/user-manual/` chunks in a future pass and back-update this section again.
## Source photo

`uploads/photos/8. Setup-Acquisitions.png`. The Probe Config sub-dialog launched from `btn-view-probes` is documented separately at [setup-acquisitions-probe-config.md](./setup-acquisitions-probe-config.md) from photo 9.
