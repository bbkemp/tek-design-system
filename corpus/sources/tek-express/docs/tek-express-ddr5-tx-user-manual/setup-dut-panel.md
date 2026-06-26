---
class: doc-section
doc_id: tek-express-ddr5-tx-user-manual
doc_title: "TekExpress DDR Tx Compliance and Debug Automation Software Application Help"
doc_number: 077-1648-04
doc_date: 2025-08
applies_to: [tek-express]
section_id: setup-dut-panel
section_title: Setup panel — DUT tab and burst detection
parent_section: null
page_range: "20 to 30"
related_screens: [setup-dut, setup-dut-comments]
related_hardware: []
---

# Setup panel — DUT tab and burst detection

## Summary

The first tab of the Setup wizard — DUT — and the deep burst-detection model that drives the rest of the test session. Covers the wizard's overall structure (DUT, Test Selection, Acquisitions, Configuration, Preferences); the global DUT settings that propagate everywhere (Acquire live waveforms / Use pre-recorded waveform files, User Defined Acquisition, DUT ID, Comments, Device dropdown that selects DDR5 vs LPDDR5-5X and re-shapes the whole panel, Data Rate, WCK:CK ratio for LPDDR5-5X, derived WCK Frequency and Clock Frequency); the Burst Detection Method options (Read Write Bursts, Write Only Bursts, Read Only Bursts, Visual search) and their per-device parameter tables; the Signal Probe Type configuration (Differential / Single Ended for Clock, DQS, WCK/RDQS); the Filter Files Path De-Embed setup; the TriMode Probe Setup (A / B / Differential per signal); the Voltage Settings dialog (VDD, Vcent-DQ, Vcent-CA, Vcent-CS, VDD2, VDDQ, VOH); and a note on how P7700 TriMode probes do A/B/differential/common-mode without moving the connection.

## Content

### Setup panel overview

The Setup panel contains sequentially ordered tabs that help you guide through the test setup and execution process. The five wizard steps are:

1. DUT
2. Test Selection
3. Acquisitions
4. Configuration
5. Preferences

*Figure 6: DDR5* and *Figure 7: LPDDR5-5X* — Same screenshots as `welcome-and-help` Figures 1 and 2 (DDR5 and LPDDR5-5X DUT panels with all controls visible).

### DUT: Set DUT settings

Use the DUT tab to select parameters for the device under test. These settings are global and apply to all tests of current session. DUT settings also affect the list of available tests in the Test Selection tab.

*Figure 8: DDR5* and *Figure 9: LPDDR5-5X* — DUT panels as referenced above.

Click **Setup > DUT** to access the DUT parameters:

| Setting | Description |
|---|---|
| Acquire live waveforms | Acquire active signals from the DUT for measurement and analysis. |
| Use pre-recorded waveform files | Run tests on a saved waveform. *Click here for details about the file names for pre-recorded waveform.* |
| User Defined Acquisition | When selected, enables user to define the acquisition settings of their choice. Gives additional source option [MATH] for signals in acquisition panel. |
| DUT ID | Adds an optional text label for the DUT to reports. The default value is `DUT001`. The maximum number of characters is 32. You cannot use the following characters in an ID name: `(,.:;...\,/:"<>|*)` |
| Comments icon (to the right of the DUT ID field) | Opens Comments dialog box to enter text to add to the report. Maximum size is 256 characters. To enable or disable comments appearing on the test report, see `Select report options`. |
| Device | Select Device name as DDR5 / LPDDR5-5X from drop-down. |
| **Device Profile** | |
| Data Rate (MT/s) | Select the data rate from drop down. |
| WCK:CK | (Available only when **Device = LPDDR5-5X**) WCK:CK is the WCK:CK ratio and is user selectable as either 2:1 or 4:1. By default it is set to 4:1. |
| WCK Frequency (MHz) | (Available only when **Device = LPDDR5-5X**) Displays the write clock frequency of the DUT, based on the selected **Data Rate** and **WCK:CK** Ratio. |
| Clock Frequency (MHz) | (Available only when **Device = LPDDR5-5X**) Displays the clock frequency of the DUT, based on the selected **Data Rate** and **WCK:CK** Ratio. |
| Burst detection method | Selects the burst detection method from drop-down: Read Write Bursts; Write Only Bursts; Read Only Bursts; Visual search¹ |
| Signal Probe Type | Selects the probe type **Clock**, **DQS**, and **WCK/RDQS** to execute the tests. Clock: Differential or Single Ended. DQS: Differential or Single Ended. WCK/RDQS: Differential or Single Ended *(Only available when Device = LPDDR5-5X)*. *Figure 10: DDR5* shows Clock/DQS dropdowns. *Figure 11: LPDDR5-5X* shows Clock = Single Ended, WCK/RDQS = Differential. |
| Filter Files path | Select Enable or Disable from the drop-down list. Click **Setup**. Browse and select the filter files from the De-Embed Filter File Path menu for respective signals as per the probing type you use for Differential and Single-Ended signals. Click **Close** to close the menu. |
| TriMode Probe Setup | With TriMode probing, one probe setup makes differential, single-ended, and common mode measurements accurately. Click **Setup**. In TriMode Probe Mode window, select A, B, or Differential from the drop-down list. A represents that probe is configured to point A and ground. B represents that probe is configured to point B and ground. Differential represents that the probe is configured to point A and B respectively. *Figure 12: TriMode Probe Mode window for DDR5* — Signal column with DQS, CLK, DQS+, DQS-, DQ, ADDR CMD, CLK+, CLK- rows; Probe Mode column with dropdowns (Differential for DQS/CLK, A for the rest). *Figure 13: TriMode Probe Mode window for LPDDR5-5X* — WCK, RDQS, CLK rows set to Differential, with DQ, DQy, WCK+, WCK-, RDQS+, RDQS-, CLK+, CLK-, CAa, CAb, CS rows set to A by default. |
| Voltage Settings | Open the voltage Settings setup to observe and to modify the voltage levels respectively. *Figure 14: Voltage Settings window for DDR5* — VDD `1.1` V, Vcent-DQ `0.85` V, Vcent-CA `0.60` V, each with JEDEC Default / Auto / Manual radios. *Figure 15: Voltage Settings window for LPDDR5-5X* — VDD2 `0.9` V, VDDQ `0.3` V, VOH dropdown (`VDDQ`); JEDEC Default / Manual radios; Vcent-DQ `0.201` V, Vcent-CA `0.191` V, Vcent-CS `0.191` V each with Auto / Manual radios. Close button. |

#### Voltage settings — field detail

| Field | Description |
|---|---|
| VDD (V) | VDD is the supply voltage for each DDR standard. For DDR5, it is 1.1 V. Displays **JEDEC** value by default. Select **Manual** to change the VDD value. |
| Vcent-DQ (V) | Vcent_DQ is the voltage at which the cumulative eye of the pin DQx is widest. Displays **Auto** value by default. Select **Manual** to change the Vcent-DQ value from -2 V to 2 V. |
| Vcent-CA (V) | Vcent_CA is the voltage at widest part of the eye. Displays **Auto** value by default. Select **Manual** to change the Vcent_CA value from -2 V to 2 V. |
| Vcent-CS (V) | (Available only when **Device = LPDDR5-5X**) Vcent_CS is voltage at widest part of the eye. Displays **Auto** value by default. Select **Manual** to change the Vcent-CS value from -2 V to 2 V. |
| VDD2 (V) | (Available only when **Device = LPDDR5-5X**) VDD2 is the supply voltage for each DDR standard. Displays **JEDEC** value by default. Select **Manual** to change the VDD2 value from 1.05 V to 0.9 V as per **Data Rate**. |
| VDDQ (V) | (Available only when **Device = LPDDR5-5X**) VDDQ is the voltage internally applied to the I/O buffer, varies from 0.5 V to 0.3 V as per Data Rate. It is user configurable to change the value from 0 V to 5 V. |
| VOH (V) | (Only available when **Device = LPDDR5-5X**) VOH is the output voltage swing, it can be set as VDDQ or VDDQ/2. |

> **Note: P7700 Series TriMode Probes.** With TriMode probing, one probe setup makes differential, single-ended, and common mode measurements accurately. This unique capability allows you to work more effectively and efficiently, switching between differential, single-ended and common mode measurements without moving the probe's connection points.

*(Figure illustrating Differential Measurement A − B, Single-ended Measurement A − ⏚ / B − ⏚, and Common Mode Measurement (A+B)/2 − ⏚ on a P7700 TriMode probe attached to a board.)*

### Burst detection method

Burst detection is applicable only for Write Bursts and Read Bursts of the DATA group measurements. The Burst Detection Setup controls the identification of data burst within a waveform which includes tri-state levels. For appropriately-probed signals with good signal fidelity, adjustment to the default values are not required. For signals with poor fidelity or unusual properties, burst detection can be improved by switching to Manual control and adjusting the detection levels.

The application supports the following burst detection methods:

1. **Read Write Bursts**: This method identifies READ and WRITE measurements that are available in the data group. Select this method when there is a voltage difference between READ and WRITE burst peak-to-peak level.

   > **Note:** When the DUT traffic is transmitting both Read + Write bursts and if the Read burst amplitude is greater than the Write burst amplitude, follow the below steps for burst detection by setting the 'Burst Amplitude Levels' as 'Manual'.
   
   a. Measure the Peak to Peak voltage level between the Higher burst's and the lower burst's using the "Cursors > Cursors On > Cursor Type > H Bars". Note down the middle voltage level of the two peak-peak voltages.
   b. In the "TekExpress DDR Tx > DDR5 > Burst Detection Method > Read Write Bursts > Setup", set the measured voltage value in the Read Burst (pk-pk) (V) and Write Burst (pk-pk) (V) fields present under the Read and Write tabs respectively.
   c. Select "Yes" for 'Is Read burst (pk-pk) amplitude greater than Write burst (pk-pk) amplitude' and "No" for 'Is Write burst (pk-pk) amplitude greater than Read burst (pk-pk) amplitude' fields present under the Read and Write tabs respectively.

2. **Write Only Bursts**: The method identifies only write measurements that are available in the data group.

   > **Note:** Configure the DUT data traffic to *ALL WRITE BURSTS* mode.

3. **Read Only Bursts**: The method identifies only read measurements that are available in the data group.

   > **Note:** Configure the DUT data traffic to *ALL READ BURSTS* mode.

#### Burst detection parameters — DDR5

| Parameter | Description |
|---|---|
| Pre-amble Length (tCK) | Specify the Read / Write burst pre-amble length of your device here. |
| Post-amble Length (tCK) | Specify the Read / Write burst pre-amble length of your device here. |
| Burst Length (UI) | Specify the burst length of your device here. Used in case of Write Only Bursts or Read Only Bursts as Burst Detection Method. |
| Burst Amplitude Levels | Specify the burst amplitude level. **Auto**: when selected, the amplitude calculation is done automatically. Select **Manual** to enter the user defined values. Used in case of Read Write Bursts as Burst Detection Method and must be specified in Read and Write tabs. |
| Write Burst (pk-pk) (V) | Specify the DQS (pk-pk) voltage level of WRITE bursts. Used in case of Read Write Bursts as Burst Detection Method. |
| Read Burst (pk-pk) (V) | Specify the DQS (pk-pk) voltage level of READ bursts. Used in case of Read Write Bursts as Burst Detection Method. |
| Margin (%) | Specifies the voltage variance allowed in terms of percentage of peak-peak voltage. Used in case of Read Write Bursts as Burst Detection Method. |
| tDQS2DQ (ps) – Auto | tDQS2DQ value is automatically set by the application. Used in case of Read Write Bursts or Write Only Bursts for 'Write' as Burst Detection Method. |
| tDQS2DQ (ps) – Manual | tDQS2DQ value can be edited. Used in case of Read Write Bursts or Write Only Bursts for 'Write' as Burst Detection Method. |
| DQ/DQS Levels | Select the type of burst detection level for the search. **Auto**: The application calculates these levels for you. It is recommended unless you find that manual levels are necessary for reliable detection. **Manual**: Enter both the Strobe and Data reference levels for the signal (High, Mid, and Low). As you adjust the detection levels, observe the search-and-mark sprites that appear above the waveform. These sprites are dynamically updated as you adjust the levels, helping you to identify levels that properly delimit the selected burst type. > ⚠ **Note:** The High/Mid/Low levels used for burst detection have no relationship to the reference levels used for measurement points. |
| Edge Detection Hysteresis | Configures the internal edge finder's hysteresis band which is used to detect read or write bursts. In the event of noisy inputs, it can be increased to correct marks which may be larger than appropriate. |
| Termination Logic Margin | This value can be increased to help in terminating marks on back-to-back writes in cases where otherwise a continuous strobe would cause a write-mark to merge two back-to-back writes. |

#### Burst detection parameters — LPDDR5-5X

| Parameter | Description |
|---|---|
| Pre-amble static (tCK) [Write] | The write burst pre-amble static length is automatically set by the application, based on the selection of **Data Rate** and **WCK:CK** ratio. |
| Pre-amble toggle (tCK) [Write] | The write burst pre-amble toggle length is automatically set by the application, based on the selection of **Data Rate** and **WCK:CK** ratio. |
| tWCK2DQI [Write] | The Write burst tWCK2DQI value is automatically set by the application. Used in case of Write Only Bursts or Read Write Bursts (For Write) as Burst Detection Method. To set user defined value, select **Manual** option and specify the tWCK2DQI value as per your device. |
| Pre-amble static (tWCK) [Read] | Specify the Read burst pre-amble static length of your device here. |
| Pre-amble toggle (tWCK) [Read] | The Read burst pre-amble toggle length is set by the application automatically as per the Read burst pre-amble static length specified by you, are as per your Device. |
| tDQSQ [Read] | tDQSQ value is automatically set by the application. Used in case of Read Only Bursts or Read Write Bursts (For Read) as Burst Detection Method. To set user defined value select **Manual** option and specify the tDQSQ value as per your device. |
| Post-amble Mode [Read] | Specify the Read burst Post-amble Mode either Static / Toggle of your device here. |
| Burst Length (UI) | Specify the Read / Write burst length of your device here. Used in case of Write Only Bursts or Read Only Bursts or Read Write Bursts as Burst Detection Method. |
| Post-amble Length (tWCK) | Specify the Read / Write burst post-amble length of your device here. |
| DQ/RDQS Levels [Read] / DQ/WCK Levels [Write] | Select the type of burst detection level for the search. **Auto**: The application calculates these levels for you. It is recommended unless you find that manual levels are necessary for reliable detection. **Manual**: Enter both the Strobe and Data reference levels for the signal (High, Mid, and Low). As you adjust the detection levels, observe the search-and-mark sprites that appear above the waveform. These sprites are dynamically updated as you adjust the levels, helping you to identify levels that properly delimit the selected burst type. > ⚠ **Note:** The High/Mid/Low levels used for burst detection have no relationship to the reference levels used for measurement points. |
| Edge Detection Hysteresis | This control configures the internal edge finder's hysteresis band which is used to detect read or write bursts. In the event of noisy inputs, it can be increased to correct marks which may be larger than appropriate. |
| Termination Logic Margin | This value can be increased to help in terminating marks on back-to-back writes in cases where otherwise a continuous strobe can cause a write-mark to merge two back-to-back writes. |
| Don't Care Length | This refers to the number of tWCK signal bits ignored after the postamble. |

4. **Visual search**¹: Capturing and analyzing the right part of the waveform can require hours of collecting and sorting through the many acquisitions. The Visual Trigger feature in the oscilloscope makes the identification of the desired waveform events quick and easy by scanning through acquired analog waveforms and graphically comparing them to geometric shapes on the display. By discarding acquired waveforms which do not meet the graphical definition, Visual Triggering extends the trigger capabilities of the oscilloscope beyond the traditional hardware trigger system.

   Visual Trigger can be used to separate Read Bursts from Write Bursts and mark them. By selecting the Visual Search option in 'Burst Detection Method', these marked bursts can be used for further debugging and analysis.

*(Footnote 1: This feature is supported only for MSO/DPO70000 models.)*

### See also

`Test Selection: Select the tests` on page 31

## Cross-references

- [`screens/setup-dut.md`](../../screens/setup-dut.md) — the live Setup › DUT screen in the corpus; the controls described in this chunk (Device dropdown, Data Rate, Burst Detection Method, Signal Probe Type, Filter Files Path, TriMode Probe Setup, Voltage Settings) match the screen's `controls[]` list with the screenshot in DDR5 mode.
- [`screens/setup-dut-comments.md`](../../screens/setup-dut-comments.md) — the popup invoked by the Comments icon next to the DUT ID field.
- `setup-test-selection-and-acquisitions` — the next tab in the Setup wizard.
- `setup-configuration` — Reference voltage levels (Ref Levels Clock / DQS / DQ / CA) that interact with the burst-detection thresholds documented here.
- `welcome-and-help` — the burst-detection method list and Visual Search footnote-1 model restriction also appears in the key-features lists.

## Confidence notes

- The "Pre-amble Length (tCK)" and "Post-amble Length (tCK)" rows in DDR5 Burst-detection Table 7 both share the description "Specify the Read / Write burst pre-amble length of your device here." This appears to be a copy-paste error in the source manual — the Post-amble row presumably should read "post-amble length" — but the description is transcribed verbatim as printed.
- The DUT ID character restrictions are printed as `(,.:;...\,/:"<>|*)`. The literal escape syntax is preserved; some characters (specifically the three-dot ellipsis) may be a typographic artifact of the PDF rendering rather than a real restriction.
- "Visual search" / "Visual Search" capitalization varies in the source; preserved.
- The Voltage Settings note says VDD2 manual ranges "from 1.05 V to 0.9 V as per Data Rate" — the order is unusual (descending) but printed exactly that way.
