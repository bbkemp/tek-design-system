---
class: doc-section
doc_id: tek-express-app-emulator
doc_title: "TekExpress AppEmulator Application Help"
doc_number: 077-xxxx-xx
doc_date: null
applies_to: [tek-express]
section_id: results-panel
section_title: Results panel — View summary of test results
parent_section: null
page_range: "111 to 117"
related_screens: [results]
related_hardware: []
---

# Results panel — View summary of test results

## Summary

The Results panel — opens automatically when test execution completes. Each test result occupies a row in the Results table, with collapsible Measurement Details (expand `+` icon), and columns Test Name, Pass/Fail, Iteration, Details, Value, Margin, Units. A top-bar shows `Overall Test Result` with Pass/Fail indicator, a Debug button, and a Preferences dropdown. Filter the test results through the Preferences menu (Show Pass/Fail, View Results Summary, View Results Details, Enable Wordwrap, group by Lane / Equalization / Pass-Fail Results / Test Result), or drag-resize columns, or Clear all displayed results.

## Content

### Results panel: View summary of test results

When a test execution is complete, the application automatically opens the **Results** panel to display a summary of test results.

In the Results table, each test result occupies a row. By default, results are displayed in summary format with the measurement details collapsed and with the Pass/Fail column visible.

*Figure 1: Results panel with measurement results* — Window title `TekExpress AppEmulator - (Untitled)*`. Side nav: Setup, Status, Results (active/orange), Plots, Reports. Top bar: `Overall Test Result   Pass` (green check), Debug button, Preferences dropdown. Right rail: Start (green), Pause, Clear (with red X).

Results table (three rows shown, the first has expanded details):

| Test Name | Pass/Fail | Iteration | Details | Value | Margin | Units |
|---|---|---|---|---|---|---|
| Period using SCOPE (Acquire-Analyze Combined) (collapsed: – icon, row 1: Period (ps)) | Pass (green check) | 1 | Period (ps) | 1551.1563 | L: 1501.1563 / H: 448.8437 | ps |
| Period using SCOPE (Acquire-Analyze Combined) (collapsed: + icon, expanded row 2) | Pass | 1 | Period (ns) | 1551.1563 | L: 1501.1563 / H: 448.8437 | ns |
| Period using DPOJET (Acquire-Analyze Combined) (collapsed: + icon) | Pass | 1 | Period (ps) | 1551.5535 | L: 1501.5535 / H: 448.4465 | ps |

Status bar: `Completed.` with full green progress bar.

Click the (+) icon on each measurement in the row to expand and to display the minimum and maximum parameter values of the measurement.

### Filter the test results

Each column in the result table can be customized and displayed by enabling or disabling any column as per your requirement. You can change the view in the following ways:

- To remove or restore the Pass/Fail column, select **Preferences > Show Pass/Fail**.
- To collapse all expanded tests, select **Preferences > View Results Summary**.
- To expand all the listed tests, select **View Results Details** from the **Preferences menu** in the upper right corner.
- To enable or disable the wordwrap feature, select **Preferences > Enable Wordwrap**.
- To view the results grouped by lane or test, select the corresponding item from the **Preferences** menu.
- To expand the width of a column, place the cursor over the vertical line that separates the column from the column to the right. When the cursor changes to a double-ended arrow, hold down the mouse button and drag the column to the desired width.
- To clear all test results displayed, click **Clear**.

## Cross-references

- [`screens/results.md`](../../screens/results.md) — the live Results panel screen in the corpus that Figure 1 captures.
- `status-panel` — the panel that runs first; Results opens automatically when test execution completes.
- `starting-application` — the Clear button on the application controls (red X icon) clears all measurement results from this panel.
- `reports-panel` — generates a report from the same result data displayed in this panel.

## Confidence notes

- The Filter section text references grouping by `Lane`, `Equalization`, `Pass/Fail Results`, and `Test Result` — these are TekExpress framework menu items reused from compliance applications that have Clock/Data lanes and equalization. AppEmulator's dummy tests have no real lanes or equalization to group by; the menu items remain in the source as printed.
- Sample values (1551.1563 ps, 1551.5535 ps, margins of 1501 / 448) are the emulator's hard-coded readings, also seen in `status-panel` log lines and `reports-panel` figure.
- The first row shows `Period (ps)` and the second row shows `Period (ns)` — both with value `1551.1563` but different units. This is the emulator demonstrating the framework's ability to show the same measurement in multiple units.
