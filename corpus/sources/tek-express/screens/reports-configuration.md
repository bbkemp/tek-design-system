---
provenance: observed
class: screen
software: TekExpress AppEmulator
software_version: TBD
screen_id: reports-configuration
screen_title: Reports › Configuration
screen_type: config
image: reports-configuration.jpg
source_photo: uploads/photos/19. Reports-Configuration.png
navigation_path: [Reports, Configuration]
parent_screens: []
child_screens: [reports-view-settings]
applies_to: [tek-express]
related_screens: [reports-view-settings, results, plots]
related_hardware: []
related_modules: []
controls:
  - id: nav-reports
    label: Reports
    type: tab
    state: active
    action: Side-nav, on Reports panel.
  - id: subtab-configuration
    label: Configuration
    type: tab
    state: active
    action: Sub-tab pill, active (orange).
  - id: subtab-view-settings
    label: View Settings
    type: tab
    state: enabled
    action: Sister sub-tab — see reports-view-settings.md.
  - id: report-update-mode-group
    label: Report Update Mode
    type: indicator
    state: enabled
    action: Group-box heading for the report-update-mode radio cluster.
  - id: radio-generate-new
    label: Generate new report
    type: radio
    state: active
    action: Mode 1, currently selected (orange). Creates a new report file for each run.
  - id: radio-append
    label: Append with previous run session
    type: radio
    state: enabled
    action: Mode 2. Appends current results to the existing report from the previous run session.
  - id: chk-include-header-on-append
    label: Include header in appended reports
    type: checkbox
    state: disabled
    action: Sub-checkbox under "Append with previous run session". Greyed because the parent radio is not selected.
  - id: radio-replace
    label: Replace current test results
    type: radio
    state: enabled
    action: Mode 3. Replaces existing results within the chosen scope (see sub-radios).
  - id: radio-replace-previous-current
    label: in previous run, current session
    type: radio
    state: disabled
    action: Sub-radio. Greyed because the parent "Replace current test results" radio is not selected.
  - id: radio-replace-any-any
    label: in any run, any session
    type: radio
    state: disabled
    action: Sub-radio. Greyed because the parent radio is not selected.
  - id: report-creation-group
    label: Report Creation Settings
    type: indicator
    state: enabled
    action: Group-box heading for the file-path and behaviour settings.
  - id: input-report-name
    label: Report name
    type: input
    state: enabled
    action: Output file path for the generated report. Current value "K:\AppEmulator\Reports\DUT001.mht".
  - id: btn-browse
    label: Browse
    type: button
    state: enabled
    action: Opens an OS file dialog to choose the report destination.
  - id: dropdown-save-as-type
    label: Save as type
    type: dropdown
    state: enabled
    action: Output format. Current value "Web Archive (*.mht;*.mhtml)".
  - id: chk-auto-increment
    label: Auto increment report name if duplicate
    type: checkbox
    state: active
    action: Checked. Appends a suffix (e.g. _001, _002) when the target file already exists.
  - id: chk-create-automatically
    label: Create report automatically at the end of the run
    type: checkbox
    state: active
    action: Checked. Generates the report without manual Generate-button intervention.
  - id: chk-view-after-generating
    label: View report after generating
    type: checkbox
    state: active
    action: Checked. Opens the generated report in the default associated viewer when complete.
  - id: btn-view
    label: View
    type: button
    state: enabled
    action: Action button — opens the most recent generated report. Per the audit PDF, clicking View before a run triggers a blocking modal "Report file not generated or does not exist" (separate corpus chunk, pending — `reports-configuration-modal.md`).
  - id: btn-generate
    label: Generate
    type: button
    state: enabled
    action: Action button — generates the report on demand.
  - id: btn-save-as
    label: Save As
    type: button
    state: enabled
    action: Action button — saves the current configuration to a chosen location.
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
  - id: status-bar
    label: "Completed"
    type: indicator
    state: active
    action: Status bar reads "Completed" — the most recent run finished.
---

# Reports › Configuration

## Purpose

Sub-tab 1 of the Reports panel. Controls **how** reports are produced: which write mode (new vs. append vs. replace), where to write to (path + Save-as-type), and three behaviour toggles (auto-increment, auto-generate at run end, auto-view after generation). The sister sub-tab [View Settings](./reports-view-settings.md) controls **what** goes inside the report (content checklist + user logo + grouping).

The three bottom action buttons (`btn-view`, `btn-generate`, `btn-save-as`) operate on the most recent generated report; per the audit PDF, **clicking View before a run completes triggers a blocking modal dialog** ("Report file not generated or does not exist") that is documented separately as a pending chunk (`reports-configuration-modal.md`).

## Controls inventory

**Chrome regions** — see [setup-dut.md](./setup-dut.md). `nav-reports` active.

**Sub-tabs**: `subtab-configuration` (active) and `subtab-view-settings`.

**Report Update Mode group** (`report-update-mode-group`):
- `radio-generate-new` (selected) — Generate new report.
- `radio-append` (with greyed `chk-include-header-on-append` sub-control).
- `radio-replace` (with greyed `radio-replace-previous-current` and `radio-replace-any-any` sub-radios).

**Report Creation Settings group** (`report-creation-group`):
- `input-report-name` (`K:\AppEmulator\Reports\DUT001.mht`) + `btn-browse`.
- `dropdown-save-as-type` (`Web Archive (*.mht;*.mhtml)`).
- Three checkboxes (all checked): `chk-auto-increment`, `chk-create-automatically`, `chk-view-after-generating`.

**Bottom action row**: `btn-view`, `btn-generate`, `btn-save-as`.

## State variations

- **Append mode active** — `radio-append` selected; `chk-include-header-on-append` becomes interactive.
- **Replace mode active** — `radio-replace` selected; the two sub-radios become interactive.
- **Blocking modal** — `btn-view` clicked before a report exists → "Report file not generated or does not exist" dialog (documented separately when its source photo is added).
- **Auto-create off** — `chk-create-automatically` unchecked; user must invoke `btn-generate` manually.

## Visible text (verbatim)

Sub-tabs: `Configuration` · `View Settings`.

Report Update Mode: `Generate new report` · `Append with previous run session` · `Include header in appended reports` · `Replace current test results` · `in previous run, current session` · `in any run, any session`.

Report Creation Settings: `Report name` · `K:\AppEmulator\Reports\DUT001.mht` · `Browse` · `Save as type` · `Web Archive (*.mht;*.mhtml)` · `Auto increment report name if duplicate` · `Create report automatically at the end of the run` · `View report after generating`.

Action buttons: `View` · `Generate` · `Save As`.

Status: `Completed`.

## Confidence notes

- **Audit PDF mismatch.** The audit PDF documents the **Configuration tab** with "Contents To Save: 9 checkboxes (one disabled). User Logo section..." — but Bryan's photo 19 (filename "Reports-Configuration") and photo 20 (filename "Reports-View Settings") show the *opposite* mapping. In the live screenshots: Configuration = Report Update Mode + Report Creation Settings; View Settings = Contents To Save + User Logo + Group Report By. Trusting Bryan's filenames over the audit's tab labels. The audit author may have swapped tabs in their notes, or the application's tab content was reorganized between the audit and these screenshots. Verify on the live build before using either label authoritatively.
- The blocking modal triggered by `btn-view` before a run is documented in the audit PDF but no corresponding photo was uploaded. It will land as `reports-configuration-modal.md` if a photo is provided.
- The default report file path `K:\AppEmulator\Reports\DUT001.mht` suggests a workstation-mounted drive layout (`K:\`); user installations will write to different paths.

## Manual references

Cross-references to the UI Component Audit ([`docs/ui-audit/_index.md`](../docs/ui-audit/_index.md), May 2026):

- [`docs/ui-audit/screen-inventory.md`](../docs/ui-audit/screen-inventory.md) — audit entry for Reports › Configuration (Tab 1) — NOTE: audit/corpus tab-content swap flagged in this chunk's Confidence notes.
- [`docs/ui-audit/navigation-components.md`](../docs/ui-audit/navigation-components.md) — side-nav, tab bar.
- [`docs/ui-audit/form-inputs.md`](../docs/ui-audit/form-inputs.md) — Report Update Mode radios + sub-radios + nested checkbox; Save-as-type dropdown; report-name input; auto-* checkboxes.
- [`docs/ui-audit/inline-teal-pill-buttons.md`](../docs/ui-audit/inline-teal-pill-buttons.md) — View / Generate / Save As, Browse.
- [`docs/ui-audit/feedback-overlays.md`](../docs/ui-audit/feedback-overlays.md) — blocking modal triggered by View before run completes (pending: reports-configuration-modal.md).

The audit PDF is itself a UI component inventory rather than a user manual. A separate user-guide PDF, if it surfaces, will land as `docs/user-manual/` chunks in a future pass and back-update this section again.
## Source photo

`uploads/photos/19. Reports-Configuration.png` (per Bryan's filename — note the audit-PDF mapping discrepancy above).
