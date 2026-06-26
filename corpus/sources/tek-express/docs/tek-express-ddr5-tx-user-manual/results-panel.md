---
class: doc-section
doc_id: tek-express-ddr5-tx-user-manual
doc_title: "TekExpress DDR Tx Compliance and Debug Automation Software Application Help"
doc_number: 077-1648-04
doc_date: 2025-08
applies_to: [tek-express]
section_id: results-panel
section_title: Results panel — View summary of test results
parent_section: null
page_range: "46 to 48"
related_screens: [results]
related_hardware: []
---

# Results panel — View summary of test results

## Summary

What the user sees when execution completes. The application auto-switches to the Results panel and shows a row-per-test results table with the Pass/Fail column visible by default. Two sub-tabs: **Test Results** (Test Name, Measurement, Pass/Fail, Iteration, Value, Margin columns) and **Statistics** (Test Name, Iteration, Mean, Std Dev, Max, Min, Population columns). An "Overall Test Result" badge sits in the header; a "Preferences ▼" menu controls grouping (lane / test / data rate), expand/collapse all, wordwrap, Pass/Fail column visibility, and column resize. The Results panel is also the only panel where the **Clear** (×) button is visible.

## Content

### Results panel: View summary of test results

When a test execution is complete, the application automatically opens the **Results** panel to display a summary of test results.

In the Results table, each test result occupies a row. By default, results are displayed in summary format with the measurement details collapsed and with the Pass/Fail column visible.

*Figure 28: DDR5 Results panel with measurement results* — Results panel; Test Results (orange), Statistics tabs; Overall Test Result indicator `✓ Pass`; Preferences ▼ in header. Right rail: Start, Pause, Clear (×). Table columns: Test Name, Measureme..., Pass/Fail, Iteration, Value, Margin. Sample rows:
- `tCK` / `tCK Mean.Ch1` / `✓ Pass` / `1` / `1.6 GHz` / `160 kHz; 160 kHz`
- `tCK_Duty_UI_Error` / `tCK_Duty_UI_Error Max.Ch1` / `✓ Pass` / `1` / `260.84 uUI` / `0.04972 UI`
- `tCK_1UI_RJ_NoBUJ` / `tCK_1UI_RJ_NoBUJ Max.Ch1` / `✓ Pass` / `1` / `817.05 uUI` / `2.88295 mUI`
- `tCK_1UI_DJ_NoBUJ` / ... / `✓ Pass` / `1` / `1.2543 mUI` / `0.02875 UI`
- `tCK_1UI_TJ_NoBUJ` / ... / `✓ Pass` / `1` / `14.69 mUI` / `0.07531 UI`
- (continues through tCK_4UI / tCK_5UI variants)

*Figure 29: DDR5 Results panel with statistics* — Statistics sub-tab active. Table columns: Test Name, Iteration, Mean, Std Dev, Max, Min, Population. Sample rows include `tCK` / `1` / `1.6 GHz` / `604.12 kHz` / `1.6026 GHz` / `1.5976 GHz` / `12798`; `tCK_Duty_UI_Error` / `1` / `260.84 uUI` / `0 UI` / `260.84 uUI` / `260.84 uUI` / `1`; further rows for the RJ/DJ/TJ NoBUJ family.

*Figure 30: LPDDR5-5X Results panel with measurement results* — Test Results sub-tab; Overall Test Result `✓ Pass`. Table rows include `tCH(abs) / tCH(abs) Max.Ch1 / Pass / 1 / 500.5 mtCK(avg) / 0.0695 tCK(avg)`, `tCH(avg) / tCH(avg) Max.Ch1 / Pass / 1 / 500.08 mtCK(avg) / 0.03992 tCK(avg)`, `tCK(abs) / tCK(abs) Min.Ch1 / Pass / 1 / 2.499 ns / 0.139 ns`, `tCK(avg) / tCK(avg) Mean.Ch1 / Pass / 1 / 2.5 ns / 0 ±0.1975 us`, `tCL(abs)`, `tCL(avg)`, `tJIT(cc)`, `tJIT(per)`, `VIHdiff_CK`, `VILdiff_CK`, `Vindiff_CK`, `Vindiff_High_CK`, `Vindiff_Low_CK`.

*Figure 31: LPDDR5-5X Results panel with statistics* — Statistics sub-tab. Rows include `tCH(abs)` / `1` / `500.06 mtCK(avg)` / `110.49 utCK(avg)` / `500.5 mtCK(avg)` / `499.65 mtCK(avg)` / `3199`; further rows tCH(avg), tCK(abs), tCK(avg), tCL(abs), tCL(avg), tJIT(cc), tJIT(per), VIHdiff_CK, VILdiff_CK, Vindiff_CK, Vindiff_High_CK, Vindiff_Low_CK with Mean/StdDev/Max/Min/Population.

Click `+` icon on each measurement in the row to expand and to display the minimum and maximum parameter values of the measurement.

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

- [`screens/results.md`](../../screens/results.md) — live Results › Overall Test Result screen. The Preferences ▼ dropdown, the Clear (×) button, and the Test Results / Statistics sub-tabs described here all correspond to entries on the screen's `controls[]` list.
- [`screens/plots.md`](../../screens/plots.md) — the Plots panel that complements Results (eye-diagrams / waveforms; Results is tabular only).
- `setting-up-test-environment` — duplicate description of the same Preferences-menu options under "View test results".
- `status-panel` — Results becomes active when Status reports execution completed.
- `reports-panel` — generated reports include the same Test Name / Pass-Fail / Measurement / Value data shown here.
- `starting-application` — the Clear button on the right rail is documented globally there.

## Confidence notes

- The Measurement column header is truncated as "Measureme..." in *Figure 28*; preserved as printed.
- The "Margin" value `0 ±0.1975 us` in *Figure 30* row `tCK(avg)` is unusual (a tolerance rendered into the Margin cell). Preserved verbatim.
- Two "View Results Summary" / "View Results Details" instructions appear — once in this chunk via `Preferences > View Results Summary`, once in `setting-up-test-environment`. Both reference the same Preferences menu; not contradictory.
