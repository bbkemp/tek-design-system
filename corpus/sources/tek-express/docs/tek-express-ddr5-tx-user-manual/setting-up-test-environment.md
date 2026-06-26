---
class: doc-section
doc_id: tek-express-ddr5-tx-user-manual
doc_title: "TekExpress DDR Tx Compliance and Debug Automation Software Application Help"
doc_number: 077-1648-04
doc_date: 2025-08
applies_to: [tek-express]
section_id: setting-up-test-environment
section_title: Setting up the test environment
parent_section: null
page_range: "12 to 14"
related_screens: []
related_hardware: []
---

# Setting up the test environment

## Summary

The pre-run procedures that prepare the host oscilloscope and the application for a test session: searching for and registering connected instruments via the TekExpress Instrument Control Settings dialog (LAN / GPIB / USB / etc., backed by TekVISA discovery), running signal-path compensation (SPC) on the oscilloscope (required once a week, or after a >5 °C / 9 °F ambient drift, especially below 5 mV/div), the pre-run checklist (~20 min warm-up + SPC), and the universal post-run viewing controls on the Results panel (group by lane/test/data-rate, expand/collapse rows, sort, clear, wordwrap, column resize, Pass/Fail visibility).

## Content

### Search instruments connected to the application

Use the TekExpress Instrument Control Settings dialog box to search the instruments (resources) connected to the application. The application uses TekVISA to discover the connected instruments.

> ⚠ **Note:** The instruments required for the test setup must be connected and detected by the application, before running the test.

**To refresh the list of connected instruments:**

1. Select **Options > Instrument Control Settings**.
2. In the **Search Criteria** section of the **Instrument Control Settings** dialog box, select the connection types of the instruments to search. Instrument search is based on the VISA layer, but different connections determine the resource type, such as LAN, GPIB, and USB. For example, if you choose LAN, the search will include all the instruments supported by the TekExpress that are communicating over the LAN.
3. Click **Refresh**. The TekExpress application searches for the connected instruments.

*Figure 3: Search status of the instruments connected to LAN* — Animated dialog with a "Searching on LAN 40 % Complete" progress bar.

4. When the search is complete, a dialog box lists the instrument-related details based on the search criteria. For example, for the Search Criteria as LAN and GPIB, the application displays all the LAN and GPIB instruments connected to the application.

*Figure 4: TekExpress Instrument Control Settings window* — Dialog header "TekExpress Instrument Control Settings". Search Criteria checkboxes: LAN (checked), GPIB, Serial, Non - VISA Resources, TekLink, USB (checked), VXI. TekVISA Timeout: 300 s. Refresh button. Retrieved Instruments (1) table with columns Connection, Resource, Serial No, Options, Resource Addr; row shows Connection=`VISA-LAN`, Resource=`MSO58`, Serial No=`PQ200020`, Options=`ENG-DEAL-MSO6`, Resource Addr=`GPIB8::1::INSTR`. Last Updated `July 15, 2019 07:39:07`. Close button.

The details of the instruments are displayed in the Retrieved Instruments table. The time and date of instrument refresh is displayed in the Last Updated field.

### Compensate the signal path (Prerequisite)

Use the following procedure to compensate the internal signal acquisition path. Perform this procedure if the ambient temperature has changed more than 5 °C (9 °F) since you performed the last signal path compensation. Perform the signal path compensation once a week. Failure to do so may result in the instrument not meeting warranted performance levels.

1. Power on and wait for the instrument to complete its warm up period before continuing with this procedure.
2. Disconnect any probes you have connected to the input channels.
3. Set the instrument to Menu mode.
4. Select Instrument Calibration from the Utilities menu.
5. Note any instructions that appear in the resulting control window.
6. Click Run SPC to begin the procedure. The procedure may take several minutes to complete.
7. Verify that the Status changes to Compensated after the procedure is complete. If the Calibration Status field indicates anything other than Compensated, see Signal Path Compensation Status for information on the readout and recommended action.

> ⚠ **Note:** When making measurements at vertical scale settings less than or equal to 5 mV, you should perform the signal path compensation at least once a week. Failure to do so may result in the instrument not meeting warranted performance levels at those volts/div settings.

### Running tests

`DUT: Set DUT settings` on page 21 , `Select tests`, `Acquisitions: Set waveform acquisition settings` on page 32, `Configuration: Set measurement limits for tests` on page 34, `Preferences: Set the test run preferences`, and click **Start** to run the tests. While tests are running, you cannot access the Setup or Reports panels. To monitor the test progress, switch between the Status panel and the Results panel.

While tests are running, the other applications will be displayed at the background. If you want the TekExpress DDR Tx application to run in the foreground select **Keep On Top** from the TekExpress Options menu.

The application displays report when the tests execution is complete.

#### Pre-run checklist

1. Make sure that the instruments are warmed up (approximately 20 minutes) and stabilized.
2. Perform compensation: In the oscilloscope main menu, select **Utilities > Instrument Compensation**. Click **Help** in the compensation window for steps to perform instrument compensation.

### View test results

When a test completes, the application switches to the Results panel, which shows a summary of test results.

Each test result occupies a row in the Results table. By default, results are displayed in summary format, with the measurement details collapsed. You can change the view in the following ways:

- To view the results grouped by lane, test, or data rate, select the corresponding item from the Preferences menu.
- To expand all tests listed, select **View Results Details** from the Preferences menu.
- To expand and collapse tests, use the plus and minus buttons to the left of the test rows.
- To collapse all expanded tests, select **Preferences > View Results Summary**.
- To enable or disable the wordwrap feature, select **Preferences > Enable Wordwrap**.
- To expand the width of a column, place the cursor over the vertical line that separates the column from the one to the right. When the cursor changes to a double-ended arrow, hold down the mouse button and drag the column to the desired width.
- To sort the test information by column, click the column head. When sorted in ascending order, a small up arrow is displayed. When sorted in descending order, a small down arrow is displayed.
- To clear all test results displayed, click **Clear** (Clear icon).

## Cross-references

- `setup-dut-panel` — DUT settings stage of the run sequence.
- `setup-test-selection-and-acquisitions` — Test Selection and Acquisitions stages.
- `setup-configuration` — Configuration stage.
- `setup-preferences-panel` — Preferences stage and Start trigger.
- `status-panel` — what to watch while the test runs.
- `results-panel` — the panel the application auto-switches to on completion, where the Preferences-menu view controls listed here apply.
- `starting-application` — the **Keep On Top** Options menu item referenced here.

## Confidence notes

- The "View test results" subsection lives in this chunk (per the manual's TOC under "Setting up the test environment > View test results") even though the Results panel itself is documented in `results-panel.md`. Both chunks describe the same Preferences-menu controls; the duplication mirrors the manual's structure.
- "Signal Path Compensation Status" is referenced in the SPC procedure but the manual does not include a separate section by that name; it refers to the oscilloscope reference manual.
