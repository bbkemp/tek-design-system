---
class: doc-section
doc_id: tek-express-ddr5-tx-user-manual
doc_title: "TekExpress DDR Tx Compliance and Debug Automation Software Application Help"
doc_number: 077-1648-04
doc_date: 2025-08
applies_to: [tek-express]
section_id: status-panel
section_title: Status panel — Test Status and Log View
parent_section: null
page_range: "42 to 45"
related_screens: [status-test-status, status-log-view]
related_hardware: []
---

# Status panel — Test Status and Log View

## Summary

The Status panel is the live window into a running test session. Two sub-tabs: **Test Status** is a per-measurement collapsible table with columns Test Name, Acquisition (data type being acquired), Acquire Status (To be started / Completed), Analysis Status (To be started / Completed). **Log View** is the chronological text-message history of every execution step with timestamps — used for troubleshooting blocked runs. Both sub-tabs are accessible during execution; the application opens **Test Status** when the run starts. Log View provides Auto Scroll, Clear Log, and Save (to text file).

## Content

### Status panel: View the test execution status

The Status panel contains the **Test Status** and **Log View** tabs, which provides status on the test acquisition and analysis (Test Status) and listing of test tasks performed (Log View tab). The application opens the **Test Status** tab when you start to execute the test. Select the **Test Status** or the **Log View** tab to view these items while the test execution is in progress.

### View test execution status

The tests are grouped and displayed based on the Clock and Data lane. It displays the tests along with the acquisition type, acquire, and analysis status of the tests. In pre-recorded mode, **Acquire Status** is not valid.

The **Test Status** tab presents a collapsible table with information about each test as it is running. Use the symbols to expand (+) and collapse (−) the table rows.

*Figure 24: Test execution status view in DDR5 Status panel* — Status panel with Test Status (orange) and Log View tabs. Table columns: Test Name, Acquisition, Acquire Status, Analysis Status. Rows: `tCK`, `tCK_Duty_UI_Error`, `tCK_1UI_RJ_NoBUJ`, `tCK_1UI_DJ_NoBUJ`, `tCK_1UI_TJ_NoBUJ`, `tCK_2UI_RJ_NoBUJ`, `tCK_2UI_DJ_NoBUJ`, `tCK_2UI_TJ_NoBUJ`, `tCK_3UI_RJ_NoBUJ`, `tCK_3UI_DJ_NoBUJ`, `tCK_3UI_TJ_NoBUJ`, `tCK_3UI_TJ_NoBUJ` (highlighted blue). All rows show Acquisition = `Clock`, Acquire Status = `Completed`, Analysis Status = `Completed`. Status bar: "Completed.".

*Figure 25: Test execution status view in LPDDR5-5X Status panel* — Same table structure. Rows: `tCH(abs)`, `tCH(avg)`, `tCK(abs)`, `tCK(avg)`, `tCL(abs)`, `tCL(avg)`, `tJIT(cc)`, `tJIT(per)` (highlighted blue). All rows show Acquisition = `Clock`, both statuses `Completed`.

#### Test execution status table headers

| Control | Description |
|---|---|
| Test Name | Displays the measurement name. |
| Acquisition | Describes the type of data being acquired. |
| Acquire Status | Displays the progress state of the acquisition: To be started · Completed |
| Analysis Status | Displays the progress state of the analysis: To be started · Completed |

### View test execution logs

The Test Status tab displays the detailed execution status of the tests. Also, displays each and every execution step in detail with its timestamp information. The log details can be used to troubleshoot and resolve any issue/bug which is blocking the test execution process.

*Figure 26: Log view in DDR5 Status panel* — Status panel with Test Status and Log View (orange) tabs. Message History pane (verbatim sample):
```
1/6/2023 1:08:34 PM : Configuring trigger
1/6/2023 1:08:34 PM : Executing Signal Validation
1/6/2023 1:08:35 PM : Signal validation failed
1/6/2023 1:15:06 PM : tWPRE Skipped
1/6/2023 1:15:06 PM : Updating tWPRE measurement results to the report
1/6/2023 1:15:06 PM : tWPST Skipped
1/6/2023 1:15:07 PM : Updating tWPST measurement results to the report
1/6/2023 1:15:08 PM : Acquisition started
1/6/2023 1:15:08 PM : Executing pre-acquisition steps
1/6/2023 1:15:08 PM : Executing channel initialization
1/6/2023 1:15:08 PM : Executing autoset
1/6/2023 1:15:19 PM : Configuring horizontal
1/6/2023 1:15:19 PM : Configuring trigger
1/6/2023 1:15:20 PM : Configuring vertical
1/6/2023 1:15:20 PM : Executing Signal Validation
1/6/2023 1:15:20 PM : Signal validation pass
1/6/2023 1:15:21 PM : Acquire single sequence on scope
1/6/2023 1:15:21 PM : Completed acquire single sequence on scope
1/6/2023 1:15:21 PM : Saving waveform - S:\\DDR5-3200-Read-Data-DQS-0.5M-CH1-Run1.wfm
1/6/2023 1:15:22 PM : Saving waveform - S:\\DDR5-3200-Read-Data-DQ-0.5M-CH3-Run1.wfm
1/6/2023 1:15:23 PM : Executing Post acquisition
1/6/2023 1:15:36 PM : Analyzing
1/6/2023 1:15:36 PM : Running DPOJET...
1/6/2023 1:15:39 PM : DPOJET analysis completed
1/6/2023 1:15:39 PM : Extracting results
1/6/2023 1:15:39 PM : Reading limits for tRPRE
1/6/2023 1:15:39 PM : Updating tRPRE measurement results to the report
1/6/2023 1:15:40 PM : Execution completed.
```
Auto Scroll checkbox (checked). Clear Log button. Save... button.

*Figure 27: Log view in LPDDR5-5X Status panel* — Similar structure with sample messages including `Recalling scope default`, `Run 1 of 1`, `Saving waveform - S:\\LPDDR5-5X-3200-Hto1-Clock-Clock-0.5M-CH1-Run1.wfm`, and detail of `Reading limits for tCH(abs)`, `Reading limits for tCH(avg)` and similar tCH/tCL update messages.

#### Status panel settings

| Control | Description |
|---|---|
| Message History | Lists all the executed test operations and timestamp information. |
| Auto Scroll | Enables automatic scrolling of the log view as information is added to the log during the test execution. |
| Clear Log | Clears all the messages from the log view. |
| Save | Saves the log file into a text file format. Use the standard Save File window to navigate to and specify the folder and file name to save the log text. |

## Cross-references

- [`screens/status-test-status.md`](../../screens/status-test-status.md) — the live Status › Test Status sub-tab. The table columns and per-row status values described here match the screen's `status-table` control.
- [`screens/status-log-view.md`](../../screens/status-log-view.md) — the live Status › Log View sub-tab. The Message History / Auto Scroll / Clear Log / Save controls described here match the screen.
- [`screens/running-test.md`](../../screens/running-test.md) — Status remains accessible during the run; Running Test mini-window is the alternative compact UI.
- `setting-up-test-environment` — Start triggers entry into Status.
- `results-panel` — application auto-switches to Results when execution completes.

## Confidence notes

- The "Saving waveform" log lines use double-backslashes (`S:\\DDR5-3200-...`) — preserved as printed. Whether this is a logging artifact or a literal path is unclear from the manual alone.
- The Test Status table column "Acquire Status" enumerates only "To be started · Completed" in the manual; an in-progress / running state must exist in practice but is not documented. The screen corpus `status-test-status.md` may have additional states observed in live runs — left for the audit to reconcile.
- *Figure 24* shows `tCK_3UI_TJ_NoBUJ` listed twice (the last two rows). This is likely a transcription/rendering artifact of the truncated test list; preserved as captured.
