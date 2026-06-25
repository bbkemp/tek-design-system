---
software: TekExpress AppEmulator
software_version: TBD
screen_id: results
screen_title: Results › Overall Test Result
screen_type: readout
image: results.jpg
source_photo: uploads/photos/17. Results_Overall Test Result.png
navigation_path: [Results]
parent_screens: []
child_screens: []
applies_to: [tek-express]
related_screens: [status-test-status, plots, reports-configuration]
related_hardware: []
related_modules: []
controls:
  - id: nav-results
    label: Results
    type: tab
    state: active
    action: Side-nav, on Results panel.
  - id: panel-header
    label: Overall Test Result
    type: indicator
    state: active
    action: Panel-header heading.
  - id: btn-debug
    label: Debug
    type: button
    state: enabled
    action: Outlined pill in the panel header (non-teal). Toggles debug output mode per the audit PDF.
  - id: btn-preferences
    label: Preferences ▼
    type: dropdown
    state: enabled
    action: Outlined pill in the panel header. Opens results-display preferences (column visibility, formatting) per the audit PDF.
  - id: results-table
    label: ""
    type: readout
    state: active
    action: Results data table. Seven columns Test Name, Pass/Fail, Iteration, Details, Value, Margin, Units. Empty in the idle audit-PDF state; populated mid-run / post-run with completed rows.
  - id: result-row-scope-ps
    label: "Period using SCOPE (A... / Pass / 1 / Period (ps) / 1551.1563 / L:1501.1563 H:448.8437 / ps"
    type: readout
    state: active
    action: Row 1 — SCOPE period in picoseconds. Passed.
  - id: result-row-scope-ns
    label: "Period using SCOPE (A... / Pass / / Period (ns) / 1551.1563 / L:1501.1563 H:448.8437 / ns"
    type: readout
    state: active
    action: Row 2 — same test rendered in nanoseconds. Passed. Iteration cell empty in this row (the test reports one iteration with two unit representations).
  - id: btn-clear
    label: ""
    type: button
    state: enabled
    action: Right-rail Clear button (red × icon). Per the audit PDF, only present on the Results screen. Clears all rows from the results table.
  - id: btn-stop
    label: Stop
    type: button
    state: active
    action: Right-rail Stop, active because a run is in progress.
  - id: btn-pause
    label: Pause
    type: button
    state: enabled
    action: Right-rail Pause, enabled during a run.
  - id: status-bar
    label: "Running..."
    type: indicator
    state: active
    action: Status bar reads "Running..." with a populated progress bar — captured mid-run.
---

# Results › Overall Test Result

## Purpose

The results dashboard. Rows accumulate as the run completes individual tests; each row is a single pass/fail measurement with iteration, value, margin, and units. The user can clear the table with the right-rail `btn-clear` (the only screen that exposes a Clear control), inspect or change result-display preferences via `btn-preferences`, and toggle debug output via `btn-debug`.

The audit PDF describes this screen with an *empty* table (idle state); this screenshot captures it mid-run with two completed rows showing.

## Controls inventory

**Chrome regions** — see [setup-dut.md](./setup-dut.md). `nav-results` is the active side-nav pill.

**Panel header** has `panel-header` ("Overall Test Result") on the left and two outlined pill buttons on the right: `btn-debug` and `btn-preferences`. Both are non-teal — the audit PDF identifies them as the only outlined-pill (non-teal) instances in the application.

**Results table** (`results-table`) has seven columns: **Test Name**, **Pass/Fail**, **Iteration**, **Details**, **Value**, **Margin**, **Units**. Two rows visible in this screenshot:

- `result-row-scope-ps` — Period using SCOPE / Pass / 1 / Period (ps) / 1551.1563 / L:1501.1563 H:448.8437 / ps.
- `result-row-scope-ns` — Period using SCOPE / Pass / (empty) / Period (ns) / 1551.1563 / L:1501.1563 H:448.8437 / ns.

The Margin column carries the low and high limit values (`L:` / `H:`) computed against the values configured in the [Limits Editor](./setup-test-selection-limits-editor.md).

**Right-rail** in this screenshot shows the run-state toolbar: `btn-stop`, `btn-pause`, and `btn-clear` (the × icon, present only on this screen). Status bar reads `Running...`.

## State variations

- **Idle / empty** (per audit PDF) — table empty; right-rail returns to Start/Pause; status bar reads "Ready." or "Completed.".
- **Mid-run** (this screenshot) — partial rows present as tests complete; toolbar is in run state.
- **Run complete** — all selected tests have rows; status bar reads "Completed."; toolbar returns to Start/Pause; Clear becomes the salient action.
- **Mixed pass/fail** — failed rows likely show a different status indicator (red X) in the Pass/Fail column; the screenshot has all-Pass rows.

## Visible text (verbatim)

Panel header: `Overall Test Result` · `Debug` · `Preferences ▼`.

Table columns: `Test Name` · `Pass/Fail` · `Iteration` · `Details` · `Value` · `Margin` · `Units`.

Row 1: `Period using SCOPE (A...` · `Pass` · `1` · `Period (ps)` · `1551.1563` · `L:1501.1563 H:448.8437` · `ps`.

Row 2: `Period using SCOPE (A...` · `Pass` · (empty) · `Period (ns)` · `1551.1563` · `L:1501.1563 H:448.8437` · `ns`.

Chrome: `TekExpress AppEmulator — (Untitled)*` · `Setup` · `Status` · `Results` · `Plots` · `Reports` · `Stop` · `Pause` · `Clear` (× icon) · `Not Intended For Public Release` · `Running...`.

## Confidence notes

- The value 1551.1563 is repeated in ps and ns rows — that's clearly wrong as a real measurement (1551 ps ≠ 1551 ns). This is either test data from a stub, a display bug, or the screenshot was during the row-write moment where one row's value hadn't been converted yet. Inferred from the visible state; do not treat as authoritative measurement.
- The Margin column shows `L:` (low limit) and `H:` (high limit) values combined into one cell — this pairs with the Limits Editor's per-test limit configuration. Whether the cell formatting is `L:X H:Y` or `L:X / H:Y` is at the legibility edge.
- The first row has Iteration "1"; the second row's Iteration cell is empty. This suggests the run records one iteration per test but the row presentation duplicates rows per units (ps/ns) without re-stating the iteration. Verify on the live build.
- The audit PDF says the table is "currently empty" in its captured state — confirms this screenshot is a different snapshot (mid-run).

## Manual references

Cross-references to the UI Component Audit ([`docs/ui-audit/_index.md`](../docs/ui-audit/_index.md), May 2026):

- [`docs/ui-audit/screen-inventory.md`](../docs/ui-audit/screen-inventory.md) — audit entry for Results.
- [`docs/ui-audit/navigation-components.md`](../docs/ui-audit/navigation-components.md) — side-nav.
- [`docs/ui-audit/outlined-pill-buttons.md`](../docs/ui-audit/outlined-pill-buttons.md) — Debug, Preferences ▼ (the ONLY two outlined non-teal buttons in the application).
- [`docs/ui-audit/right-rail-toolbar.md`](../docs/ui-audit/right-rail-toolbar.md) — Clear button (ONLY on Results).
- [`docs/ui-audit/data-display.md`](../docs/ui-audit/data-display.md) — 7-column results table.

The audit PDF is itself a UI component inventory rather than a user manual. A separate user-guide PDF, if it surfaces, will land as `docs/user-manual/` chunks in a future pass and back-update this section again.
## Source photo

`uploads/photos/17. Results_Overall Test Result.png`. Captured mid-run with partial results.
