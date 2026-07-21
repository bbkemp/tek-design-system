---
provenance: observed
class: screen
software: TekExpress AppEmulator
software_version: TBD
screen_id: setup-test-selection-limits-editor
screen_title: Setup › Test Selection — Limits Editor
screen_type: dialog
image: setup-test-selection-limits-editor.jpg
source_photo: uploads/photos/7. Setup-Test Selection_Config_Limits Editor.png
navigation_path: [Setup, Test Selection, Configure, Limits Editor]
parent_screens: [setup-test-selection-config]
child_screens: []
applies_to: [tek-express]
related_screens: [setup-test-selection, setup-test-selection-config]
related_hardware: []
related_modules: []
controls:
  - id: dialog-title
    label: Limits Editor
    type: indicator
    state: active
    action: Sub-dialog title bar; overlays the Configure dialog (setup-test-selection-config.md).
  - id: dialog-close
    label: ""
    type: button
    state: enabled
    action: Standard close (X) in dialog title bar. Cancels and dismisses without saving.
  - id: instructional-text
    label: "View or Edit the values used for High Limit and Low Limit for each measurement. A blank cell means no limit value is applied"
    type: indicator
    state: active
    action: Permanent help text inside the dialog explaining how limits are read.
  - id: limits-table
    label: ""
    type: readout
    state: active
    action: "Editable grid of per-test limit values. Six columns visible: Test Name, Details, Compare String (low side), Low Limit, Compare String (high side), High Limit."
  - id: limits-row-alm
    label: Algorithm Library Measurement
    type: input
    state: enabled
    action: Row for Algorithm Library Measurement. Details "Period (ps)", Low Compare ">= Greater Than O...", Low Limit "50", High Compare "<= Less Than Or E...", High Limit "2000".
  - id: limits-row-scope
    label: Period using SCOPE (Acquire-Analyze...)
    type: input
    state: enabled
    action: Row for SCOPE-based period measurement. Same Details / limits / compare-strings as the Algorithm Library row in this screenshot.
  - id: limits-row-dpojet
    label: Period using DPOJET (Acquire-Analyz...)
    type: input
    state: enabled
    action: Row for DPOJET-based period measurement. Same Details / limits / compare-strings as the other rows.
  - id: btn-ok
    label: OK
    type: button
    state: enabled
    action: Commits the table edits and closes the dialog.
---

# Setup › Test Selection — Limits Editor

## Purpose

Sub-dialog over the per-test Configure dialog ([setup-test-selection-config.md](./setup-test-selection-config.md)), launched by the **Limits Editor** jump button. Provides a single editable table of all pass/fail limit thresholds across the tests in scope. Each row pairs a Low Limit (with a comparison operator) and a High Limit (with a comparison operator) for a single test. A blank limit cell means no limit is applied on that side.

This dialog is a flat-table editor — by contrast, the Configure dialog's per-test forms (Acquire / Analyze) edit acquisition and measurement parameters, NOT pass/fail thresholds.

## Controls inventory

`dialog-title` ("Limits Editor") and `dialog-close` (X) sit in the title bar. Directly below the title bar, `instructional-text` reads:

> "View or Edit the values used for High Limit and Low Limit for each measurement. A blank cell means no limit value is applied."

The main body is `limits-table` — six columns: **Test Name**, **Details**, **Compare String** (low side), **Low Limit**, **Compare String** (high side), **High Limit**. Three rows are visible: `limits-row-alm` (Algorithm Library Measurement), `limits-row-scope` (Period using SCOPE), `limits-row-dpojet` (Period using DPOJET). All three rows in this screenshot have identical limit values: `Period (ps)` · `>= Greater Than O...` · `50` · `<= Less Than Or E...` · `2000`.

`btn-ok` at the bottom-right commits and closes.

## State variations

- **Editing a cell** — each numeric cell is a text input; each Compare String cell is likely a dropdown (the visible truncation `>= Greater Than O...` and `<= Less Than Or E...` suggests a select with long readable labels). Verify against the live build.
- **Blank limits** — per the instructional text, a blank cell means no limit applies on that side. Useful for one-sided thresholds.
- **More rows** — when the test tree has more measurements, the table scrolls vertically.

## Visible text (verbatim)

Dialog: `Limits Editor`.

Instructional text: `View or Edit the values used for High Limit and Low Limit for each measurement` · `A blank cell means no limit value is applied`.

Table columns: `Test Name` · `Details` · `Compare String` · `Low Limit` · `Compare String` · `High Limit`.

Rows (all three):
- `Algorithm Library Measurement` · `Period (ps)` · `>= Greater Than O...` · `50` · `<= Less Than Or E...` · `2000`
- `Period using SCOPE (Acquire-Analyze...)` · `Period (ps)` · `>= Greater Than O...` · `50` · `<= Less Than Or E...` · `2000`
- `Period using DPOJET (Acquire-Analyz...)` · `Period (ps)` · `>= Greater Than O...` · `50` · `<= Less Than Or E...` · `2000`

Bottom: `OK`.

## Confidence notes

- The full text of `>= Greater Than Or Equal To` (etc.) is truncated in every row at this screenshot resolution. Inferred from convention; verify against the live build for exact strings.
- The Compare String cells are presumed dropdowns (not free text) — verify on the live build.
- All three visible rows have identical limit values; whether this is a default-templates state or coincidence is unclear.
- Whether Cancel is a separate affordance or `dialog-close` (X) is the only cancel path is not visible — most dialogs in this app have explicit Cancel buttons.

## Manual references

**TekExpress DDR Tx Application Help** (077-1648-04, August 2025) — [`docs/tek-express-ddr5-tx-user-manual/_index.md`](../docs/tek-express-ddr5-tx-user-manual/_index.md):

- **`Setup panel — Configuration`** ([`setup-configuration.md`](../docs/tek-express-ddr5-tx-user-manual/setup-configuration.md), pp. 34–39) — Limits Editor is described in Table 11 Common parameters: "Displays the upper and lower limits for the applicable measurement using different types of comparisons." Columns visible in the manual's embedded Limits Editor figure: TestName, Details, Compare String, Low Limit, Compare String, High Limit. Reset, Save, OK buttons. The "Save-Recall-Limits feature" noted in `welcome-and-help` key features is what makes this editor's edits survive across sessions.
- **`Welcome and key features`** ([`welcome-and-help.md`](../docs/tek-express-ddr5-tx-user-manual/welcome-and-help.md), pp. 5–9) — "Limits will be updated per measurements as per Data Rate selected. Limits for Custom Data Rate will be updated to closest data rate of the measurements. Save-Recall-Limits features added."

Cross-references to the UI Component Audit ([`docs/ui-audit/_index.md`](../docs/ui-audit/_index.md), May 2026):

- [`docs/ui-audit/screen-inventory.md`](../docs/ui-audit/screen-inventory.md) — state of Setup › Test Selection.
- [`docs/ui-audit/data-display.md`](../docs/ui-audit/data-display.md) — limits-editor table.
- [`docs/ui-audit/inline-teal-pill-buttons.md`](../docs/ui-audit/inline-teal-pill-buttons.md) — OK button.
## Source photo

`uploads/photos/7. Setup-Test Selection_Config_Limits Editor.png` — captured with the Limits Editor overlaying the Configure dialog. The User Defined Mode radio and the Configure dialog's controls are partially visible behind.
