---
software: TekExpress AppEmulator
software_version: TBD
screen_id: reports-view-settings
screen_title: Reports › View Settings
screen_type: config
image: reports-view-settings.jpg
source_photo: uploads/photos/20. Reports-View Settings.png
navigation_path: [Reports, View Settings]
parent_screens: [reports-configuration]
child_screens: []
applies_to: [tek-express]
related_screens: [reports-configuration, results, plots]
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
    state: enabled
    action: Sister sub-tab — see reports-configuration.md.
  - id: subtab-view-settings
    label: View Settings
    type: tab
    state: active
    action: Sub-tab pill, active (orange).
  - id: contents-to-save-group
    label: Contents To Save
    type: indicator
    state: enabled
    action: Group-box heading for the report-content checklist.
  - id: chk-passfail-info
    label: Include pass/fail info in details table
    type: checkbox
    state: active
    action: Checked. Adds pass/fail column to the per-test details table in the report.
  - id: chk-detailed-results
    label: Include detailed results
    type: checkbox
    state: active
    action: Checked. Adds the per-iteration results table.
  - id: chk-plot-images
    label: Include plot images
    type: checkbox
    state: active
    action: Checked. Embeds plot images (matching what's visible on the Plots screen).
  - id: chk-setup-configuration
    label: Include setup configuration
    type: checkbox
    state: active
    action: Checked. Embeds the Setup-wizard configuration (DUT, Test Selection, Acquisitions, Preferences) snapshot.
  - id: chk-complete-app-config
    label: Include complete application configuration
    type: checkbox
    state: enabled
    action: Unchecked. Embeds the full app config dump (likely much larger than just the setup config).
  - id: chk-margin-percentage
    label: Margin value in percentage
    type: checkbox
    state: enabled
    action: Unchecked. Renders the Margin column as a percentage of limit instead of absolute value.
  - id: chk-user-comments
    label: Include user comments
    type: checkbox
    state: active
    action: Checked. Includes the comment text from the Setup › DUT Comments dialog.
  - id: btn-edit-user-comments
    label: ""
    type: button
    state: enabled
    action: Pencil/edit icon adjacent to chk-user-comments. Opens the comments editor (likely the same as Setup › DUT Comments popup).
  - id: chk-worst-case-screenshot
    label: Include worst case screenshot
    type: checkbox
    state: enabled
    action: Unchecked. Embeds a screenshot of the worst-case test result.
  - id: chk-statistics-table
    label: Include Statistics Table
    type: checkbox
    state: disabled
    action: Greyed in this screenshot. Likely depends on multiple iterations being configured (chk-acquire-analyze-each-test > 1 on Setup › Preferences).
  - id: user-logo-group
    label: User logo
    type: indicator
    state: enabled
    action: Group-box heading for the report-header logo settings.
  - id: chk-include-user-logo
    label: Include user logo
    type: checkbox
    state: enabled
    action: Unchecked. When on, embeds the chosen logo in the report header.
  - id: user-logo-hint
    label: "(Size 200*45px)"
    type: indicator
    state: enabled
    action: Help hint for the expected logo image dimensions.
  - id: user-logo-preview
    label: ""
    type: button
    state: enabled
    action: Logo file picker / preview rectangle. Empty in this screenshot.
  - id: group-report-by-group
    label: Group Report By
    type: indicator
    state: enabled
    action: Group-box heading for the report-grouping radio cluster.
  - id: radio-group-test-name
    label: Test Name
    type: radio
    state: enabled
    action: Groups report rows by Test Name.
  - id: radio-group-test-result
    label: Test Result
    type: radio
    state: active
    action: Selected (orange). Groups report rows by Pass/Fail status.
  - id: btn-view
    label: View
    type: button
    state: enabled
    action: Same action as on Configuration sub-tab — opens the most recent generated report.
  - id: btn-generate
    label: Generate
    type: button
    state: enabled
    action: Same as on Configuration sub-tab.
  - id: btn-save-as
    label: Save As
    type: button
    state: enabled
    action: Same as on Configuration sub-tab.
  - id: status-bar
    label: "Completed"
    type: indicator
    state: active
    action: Status bar reads "Completed".
---

# Reports › View Settings

## Purpose

Sub-tab 2 of the Reports panel. Controls **what** goes into the generated report — a content checklist (nine items, one currently disabled), a user-logo block for branding the report header, and a Group Report By radio pair (group rows by Test Name vs. Test Result). The sister sub-tab [Configuration](./reports-configuration.md) controls write-mode and file-output behaviour.

The three bottom action buttons (`btn-view`, `btn-generate`, `btn-save-as`) are identical to those on the Configuration sub-tab — they operate on the most recent generated report regardless of which sub-tab is active.

## Controls inventory

**Chrome regions** — see [setup-dut.md](./setup-dut.md). `nav-reports` active.

**Sub-tabs**: `subtab-configuration` (inactive) and `subtab-view-settings` (active).

**Contents To Save group** (`contents-to-save-group`) — 9 checkboxes, one disabled:

- `chk-passfail-info` ✓
- `chk-detailed-results` ✓
- `chk-plot-images` ✓
- `chk-setup-configuration` ✓
- `chk-complete-app-config` ☐
- `chk-margin-percentage` ☐
- `chk-user-comments` ✓ — with `btn-edit-user-comments` (pencil icon)
- `chk-worst-case-screenshot` ☐
- `chk-statistics-table` ☐ (greyed/disabled)

**User logo group** (`user-logo-group`):
- `chk-include-user-logo` ☐
- `user-logo-hint` ("(Size 200*45px)")
- `user-logo-preview` (logo picker / preview rectangle, empty)

**Group Report By group** (`group-report-by-group`):
- `radio-group-test-name`
- `radio-group-test-result` (selected)

**Bottom action row**: `btn-view`, `btn-generate`, `btn-save-as` (shared with Configuration sub-tab).

## State variations

- **Statistics table enabled** — `chk-statistics-table` becomes interactive when multiple iterations are configured on Setup › Preferences.
- **User logo set** — `user-logo-preview` shows the chosen logo; `chk-include-user-logo` checked.
- **Group by Test Name** — `radio-group-test-name` selected; report rows group by test instead of pass/fail.

## Visible text (verbatim)

Sub-tabs: `Configuration` · `View Settings`.

Contents To Save: `Include pass/fail info in details table` · `Include detailed results` · `Include plot images` · `Include setup configuration` · `Include complete application configuration` · `Margin value in percentage` · `Include user comments` · `Include worst case screenshot` · `Include Statistics Table`.

User logo: `User logo` · `Include user logo` · `(Size 200*45px)`.

Group Report By: `Group Report By` · `Test Name` · `Test Result`.

Action buttons: `View` · `Generate` · `Save As`.

Status: `Completed`.

## Confidence notes

- **Audit PDF mismatch.** See [reports-configuration.md](./reports-configuration.md) — the audit labels this content as "Configuration" rather than "View Settings". Trusting Bryan's filenames.
- `chk-statistics-table` is greyed; the dependency on iteration-count is inferred from the typical pattern of "Statistics" being statistical analysis across multiple samples.
- The pencil icon next to `chk-user-comments` is small at the downscale resolution — confirmed as edit/pencil per the audit PDF entry "Edit / pencil icon · Inline with field label · Triggers inline editing of adjacent field · Setup › DUT (DUT ID) Reports › Configuration (user comments)".

## Manual references

> Pending PR C.

## Source photo

`uploads/photos/20. Reports-View Settings.png` (per Bryan's filename — note the audit-PDF tab/content mapping discrepancy flagged in `reports-configuration.md`).
