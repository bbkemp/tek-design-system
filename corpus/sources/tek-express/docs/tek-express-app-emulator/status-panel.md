---
provenance: observed
class: doc-section
doc_id: tek-express-app-emulator
doc_title: "TekExpress AppEmulator Application Help"
doc_number: 077-xxxx-xx
doc_date: null
applies_to: [tek-express]
section_id: status-panel
section_title: Status panel — Test Status and Log View
parent_section: null
page_range: "101 to 110"
related_screens: [status-test-status, status-log-view]
related_hardware: []
---

# Status panel — Test Status and Log View

## Summary

The Status panel — second side-nav item in AppEmulator — and its two tabs: **Test Status** (expandable/collapsible table of each test as it runs, with columns Test Name, Acquisition, Acquire Status, Analysis Status; status values are `To be started`, `Started Acquisition`, `Completed Acquisition` for Acquire Status and `To be started`, `In Progress`, `Completed`, `Aborted` for Analysis Status); and **Log View** (timestamped Message History pane with Auto Scroll, Clear Log, and Save buttons — save writes a `.txt`). In pre-recorded mode the Acquire Status column is not valid.

## Content

### Status panel: View the test execution status

The Status panel contains the **Test Status** and **Log View** tabs, which provides status on the test acquisition and analysis (Test Status) and listing of test tasks performed (Log View tab). The application opens the **Test Status** tab when you start to execute the test. Select the **Test Status** or the **Log View** tab to view these items while the test execution is in progress.

### View test execution status

The tests are grouped and displayed based on the Clock and Data lane. It displays the tests along with the acquisition type, acquire, and analysis status of the tests. In pre-recorded mode, **Acquire Status** is not valid.

The **Test Status** tab presents a collapsible table with information about each test as it is running. Use the symbols to expand (+) and collapse (–) the table rows.

*Figure 1: Test execution status view in Status panel* — Window title `TekExpress AppEmulator - (Untitled)*` (asterisk indicates unsaved changes). Top tabs: Test Status (active/orange), Log View. Side nav: Setup, Status (active), Results, Plots, Reports. Right rail: Start (green), Pause. Table with two rows:

| Test Name | Acquisition | Acquire Status | Analysis Status |
|---|---|---|---|
| Period using SCOPE (Acquire-Analyze Combined) | Short Record-length for SCOPE Period | Completed | Completed |
| Period using DPOJET (Acquire-Analyze Combined) | Short Record-length for DPOJET Period | Completed | Completed |

Status bar: `Completed.` with a full green progress bar.

**Table 1. Test execution status table headers**

| Table Header | Description |
|---|---|
| Test Name | Displays the measurement name. |
| Acquisition | Describes the type of data being acquired. |
| Acquire Status | Displays the progress state of the acquisition: To be started; Started Acquisition; Completed Acquisition |
| Analysis Status | Displays the progress state of the analysis: To be started; In Progress; Completed; Aborted |

### View test execution logs

The Test Status tab displays the detailed execution status of the tests. Also, displays each and every execution step in detail with its timestamp information. The log details can be used to troubleshoot and resolve any issue/bug which is blocking the test execution process.

*Figure 1: Log view in Status panel* — Window title `TekExpress AppEmulator - (Untitled)*`. Top tabs: Test Status, Log View (active/orange). Side nav: Setup, Status (active), Results, Plots, Reports. Right rail: Start (green), Pause. Header label: `Message History`. Scrolling text area with timestamped log lines (example excerpts):
- `9/30/2021 12:02:16 AM : Waiting for file save to be completed...`
- `9/30/2021 12:02:19 AM : Saving scope image snapshot`
- `9/30/2021 12:02:22 AM : Acquire Type: Short Record-length for DPOJET Period`
- `9/30/2021 12:02:40 AM : Applying Settings`
- `9/30/2021 12:02:45 AM : Performing single`
- `9/30/2021 12:02:45 AM : Saving the waveform`
- `9/30/2021 12:02:50 AM : Test Execution for test : Period using SCOPE (Acquire-Analyze Combined)`
- `9/30/2021 12:02:50 AM : Acquire Type: Short Record-length for SCOPE Period`
- `9/30/2021 12:02:57 AM : Analyzing`
- `9/30/2021 12:02:58 AM : Measured Value : 1551.1563`
- `9/30/2021 12:02:58 AM : Progress: 100%`
- `9/30/2021 12:02:59 AM : Iteration 1`
- `9/30/2021 12:02:59 AM : Test Execution for test : Period using DPOJET (Acquire-Analyze Combined)`
- `9/30/2021 12:03:05 AM : Analyzing`
- `9/30/2021 12:03:08 AM : Measured Value : 1551.5535`
- `9/30/2021 12:03:08 AM : Progress: 100%`
- `9/30/2021 12:03:08 AM : Overall Execution Time 00:01:15`
- `9/30/2021 12:03:08 AM : Execution completed.`
- `9/30/2021 12:03:08 AM : Exiting C# App Sequencer...`

Bottom of pane: Auto Scroll (checkbox, checked), Clear Log button, Save button. Status bar: `Completed.` with green progress bar.

**Table 1. Status panel settings**

| Control | Description |
|---|---|
| Message History | Lists all the executed test operations and timestamp information. |
| Auto Scroll | Enables automatic scrolling of the log view as information is added to the log during the test execution. |
| Clear Log | Clears all the messages from the log view. |
| Save | Saves the log file into a text file format. Use the standard Save File window to navigate to and specify the folder and file name to save the log text. |

## Cross-references

- [`screens/status-test-status.md`](../../screens/status-test-status.md) — the live Status > Test Status screen in the corpus that Figure 1 (Test execution status view) captures.
- [`screens/status-log-view.md`](../../screens/status-log-view.md) — the live Status > Log View screen that the Log view Figure 1 captures.
- `setup-preferences-panel` — the `Enable Logging` checkbox on the Preferences tab controls whether the log content shown in the Log View tab is recorded.
- `results-panel` — the next panel the application opens automatically when test execution completes.
- `starting-application` — the Mini view / Normal view toggle button on the application controls swaps the full Status panel for a compact running-test view.

## Confidence notes

- The Log view excerpts above are paraphrased / truncated from the rendered screenshot; not all log lines fit on the visible scrollbar. The lines shown are representative of the framework's expected output during a SCOPE + DPOJET test run.
- The first sentence of `View test execution status` ("The tests are grouped and displayed based on the Clock and Data lane") is reused phrasing from compliance applications (e.g. DDR5) that have Clock + Data signal groups. AppEmulator's dummy tests don't have a true Clock/Data lane grouping; this sentence is preserved as printed.
- Measured values `1551.1563` (SCOPE) and `1551.5535` (DPOJET) are the emulator's hard-coded sample readings — they reappear in `results-panel` and `reports-panel`.
