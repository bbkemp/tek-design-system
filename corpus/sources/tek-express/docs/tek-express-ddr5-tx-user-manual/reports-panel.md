---
class: doc-section
doc_id: tek-express-ddr5-tx-user-manual
doc_title: "TekExpress DDR Tx Compliance and Debug Automation Software Application Help"
doc_number: 077-1648-04
doc_date: 2025-08
applies_to: [tek-express]
section_id: reports-panel
section_title: Reports panel — Configure report generation and view reports
parent_section: null
page_range: "49 to 53"
related_screens: [reports-configuration, reports-view-settings]
related_hardware: []
---

# Reports panel — Configure report generation and view reports

## Summary

How the application produces, names, formats, and renders the test report at the end of a run. The Reports panel has two configuration tabs whose mapping to "Configuration" and "View Settings" labels in the corpus screens is contested (see Confidence notes). Manual content covers: Report Update Mode (Generate new report; Append with previous run session; Include header in appended reports; Replace current test in previous run session; In previous run, current session; In any run, any session), Report Creation Settings (Report name and path defaulting to `\My Documents>\My TekExpress\DDR Transmitter\Reports`; Save as type — `.mht` / `.pdf` / `.csv`; Auto increment if duplicate; Create automatically at end of run; JEDEC measurement units), Contents to Save (pass/fail in details table; detailed results; plot images; setup configuration; complete app configuration; user comments; Additional Option "Include only results"), and the per-report Other Report Panel controls (View, Generate, Save As). Then describes the rendered report itself: Setup Information block, User comments, Test Name Summary Table, Measurement table, Plot images.

## Content

### Reports panel: Configure report generation settings

Click Reports panel to configure the report generation settings and select the test result information to include in the report. You can use the Reports panel to configure report generation settings, select test content to include in reports, generate the report, view the report, browse for reports, name and save reports, and select report viewing options.

### Select report generation options

This section describes the report generation settings you can configure in the Reports panel. Select report settings before running a test or when creating and saving test setups. Report settings configured are included in saved test setups.

#### Report configuration tab settings

| Control | Description |
|---|---|
| Report Update Mode Settings |  |
| Generate new report | Each time when you click Run and when the test execution is complete, it will create a new report. The report can be in either `.mht`, `.pdf`, or `.csv` file formats. |
| Append with previous run session | Appends the latest test results to the end of the current test results report. Each time when you click this option and run the tests, it will run the previously failed tests and replace the failed test result with the new pass test result in the same report. |
| Include header in appended reports | Select to include header in appended reports. |
| Replace current test in previous run session | Replaces the previous test results with the latest test results. Results from newly added tests are appended to the end of the report. |
| In previous run, current session | Select to replace current test results in the report with the test result(s) of previous run in the current session. |
| In any run, any session | Select to replace current test results in the report with the test result(s) in the selected run session's report. Click and select test result of any other run session. |
| Report Creation Settings |  |
| Report name | Displays the name and path of the DDR Transmitter report. The default location is at `\My Documents>\My TekExpress\DDR Transmitter\Reports`. The report file in this folder gets overwritten each time you run a test unless you specify a unique name or select to auto increment the report name. To change the report name or location: in the Report Path field, type the current folder path and name; or double-click in the Report Path field and then make selections from the popup keyboard and click Enter. Be sure to include the entire folder path, the file name, and the file extension. For example: `C:\Documents and Settings\your user name\My Documents\My TekExpress\DDR Transmitter \DUT001.mht`. Note: You cannot set the file location using the Browse button. Open an existing report click Browse, locate and select the report file and then click View at the bottom of the panel. |
| Save as type | Saves a report in the specified file type, selected from the dropdown list. The report is saved in `.csv`, `.pdf`, or `.mht`. Note: If you select a file type different from the default, be sure to change the report file name extension in the Report Name field to match. |
| Auto increment report name if duplicate | Sets the application to automatically increment the name of the report file if the application finds a file with the same name as the one being generated. For example: DUT001, DUT002, DUT003. This option is enabled by default. |
| Create report automatically at the end of the run | Select to create the report with the settings configured, at the end of run. |
| Measurement result unit as per JEDEC specification | Select to have the measurement results with JEDEC specified units. |

#### Report View tab settings

| Control | Description |
|---|---|
| Contents to Save Settings |  |
| Include pass/fail info in details table | Select to include pass/fail information in the details table of the report. |
| Include detailed results | Select to include detailed results in the report. |
| Include plot images | Select to include the plot images in the report. |
| Include setup configuration | Sets the application to include hardware and software information in the summary box at the top of the report. Information includes: the oscilloscope model and serial number, the oscilloscope firmware version, and software versions for applications used in the measurements. |
| Include complete application configuration | Select to include the complete application configuration in the report. |
| Include user comments | Select to include any comments about the test that is added in the DUT tab of the Setup panel. Comments appear in the Comments section, below the summary box at the beginning of each report. |
| Additional Option |  |
| Include only results | Select to include results only. |

#### Other Report Panel settings

| Control | Description |
|---|---|
| View | Click to view the most current report. |
| Generate | Generates a new report based on the current analysis results. |
| Save As | Specify a name for the report. |

### View a generated report

#### Sample report and its contents

A report shows detailed results and plots, as set in the Reports panel.

*Figure 32: Report for DDR5* — Sample DDR5 transmitter test report. Header "Tektronix — TekExpress DDR Tx — Transmitter Test Report". Setup Information block with fields DUT ID `DUT001`, Date/Time `8/6/2025 12:23:13 AM`, Device Type `DDR5`, TekExpress Version `Framework: 5.11.0.34`, App Version `DDR Tx 16.6.1.3`, JEDEC Spec Revision `JESD79-5C_01_v1.31`, DUT Signal `Live`, User Defined Acquisition `Disabled`, Overall Execution Time `00:01:52`, Overall Test Result `Pass`, DUT COMMENT `General Comment - DDR Tx`, Scope Model `DPO714A`, Scope Serial Number `QU200035`, SPC Factory Calibration `PASS`, Scope FW Version, DQS Signal Probing `Differential`, Data Rate `3200 MT/s`, Bandwidth `20 GHz`. Probe Information table with Source / Signal / Probe Type / Probe Serial Number rows. Test Name Summary Table listing tCK, tCK_Duty_UI_Error, and the tCK_1UI/2UI/3UI/4UI RJ/DJ/TJ NoBUJ family — all Pass.

*Figure 33: Report for LPDDR5-5X* — Sample LPDDR5-5X transmitter test report. Setup Information block with fields DUT ID `DUT001`, Date/Time `7/31/2025 2:13:55 AM`, Device Type `LPDDR5-5X`, TekExpress Version `Framework: 5.11.0.34`, App Version `DDR Tx 16.6.1.3`, JEDEC Spec Revision `JESD209-5C`, DUT Signal `Live`, User Defined Acquisition `Disabled`, Overall Execution Time `00:01:18`, Overall Test Result `Pass`, DUT COMMENT `General Comment - DDR Tx`, Clock Signal Probing `Differential`, Data Rate `3200 MT/s`, MCK Frequency `1600 MHz`, MCK:Clock `4:1`, Bandwidth `20 GHz`. Probe Information and Test Name Summary Table listing tCH(abs), tCH(avg), tCK(abs), tCK(avg), tCL(abs), tCL(avg), tJIT(cc), tJIT(per), VIHdiff_CK, VILdiff_CK, Vindiff_CK, Vindiff_High_CK — all Pass.

| Section | Description |
|---|---|
| Setup Information | The summary box at the beginning of the report lists setup configuration information. This information includes the oscilloscope model and serial number, optical module model and serial number, and software version numbers of all associated applications. |
| User comments | If you had selected to include comments in the test report, any comments you added in the DUT tab are shown at the top of the report. |
| Test Name Summary Table | The test summary table lists all the tests which are executed with its result status. |
| Measurement | The measurement table displays the measurement related details with its parameter value. |
| Plot | Any Plot associated to the measurements excuted. |

## Cross-references

- [`screens/reports-configuration.md`](../../screens/reports-configuration.md) — live Reports › Configuration sub-tab.
- [`screens/reports-view-settings.md`](../../screens/reports-view-settings.md) — live Reports › View Settings sub-tab.
- `setup-dut-panel` — the DUT comments (from the Comments icon) flow through to the User comments section in the rendered report.
- `setup-configuration` — Setup configuration block lists the Bandwidth, Record Length, Sample Rate set on the Configuration tab.
- `results-panel` — same per-measurement Pass/Fail / Value / Margin data is summarized into the Test Name Summary Table and Measurement tables of the report.
- `saving-recalling-test-setup` — Report settings configured are included in saved test setups.

## Confidence notes

- The Manual structures Report configuration as "Report configuration tab settings" (Table 17) and "Report View tab settings" (Table 18). The corpus screens `reports-configuration` and `reports-view-settings` were previously flagged for a tab-content swap discrepancy (see `tek-express/index.md` Discrepancy flag). This chunk follows the manual's labels; the swap is not resolved here.
- Figure 33 Setup Information field name "MCK Frequency" appears printed as `MCK Frequency` and `MCK:Clock` — likely OCR / rendering of `WCK Frequency` and `WCK:CK`. Preserved as printed but flagged.
- Figure 32 "TekExpress Version" reads `Framework: 5.11.0.34` even though the `welcome-and-help` section claims "Integrated with new TekExpress Framework v5.12.0". The figure may be from an earlier internal build. Preserved verbatim.
