---
provenance: observed
class: doc-section
doc_id: tek-express-ddr5-tx-user-manual
doc_title: "TekExpress DDR Tx Compliance and Debug Automation Software Application Help"
doc_number: 077-1648-04
doc_date: 2025-08
applies_to: [tek-express]
section_id: setup-configuration
section_title: Setup panel — Configuration (Global Settings, Measurements, Limits Editor)
parent_section: null
page_range: "34 to 39"
related_screens: [setup-test-selection-config, setup-test-selection-limits-editor]
related_hardware: []
---

# Setup panel — Configuration (Global Settings, Measurements, Limits Editor)

## Summary

Wizard step 4 of the Setup panel. Covers the Limits Editor (per-measurement High Limit / Low Limit / Compare String); the **Global Settings** sub-tab (Instruments Detected list, Bandwidth (GHz), Record Length (M), Sample Rate (GS/s), Retain Vertical Scale, with the LAN-and-GPIB Instrument Control Settings warning); the **Measurements** sub-tab Analyze and CLOCK Ref Level sub-tabs; per-device measurement settings — DDR5 (Number of UI, Save worst case snapshot, Clock modulated with SSC, N Start / N Stop, BER, Noise Compensation Auto/Manual with Scope RN(rms)), and LPDDR5-5X (Window Size 200 default, Number of UI (M), Save worst case snapshot, Round Up tCK(avg), Superimpose WCK/RDQS, Stop on Mask Hit, Vertical Scale [Scale to DQ / Scale to WCK / Scale to RDQS], Include Margins); the Mask Definition parameters per analysis type (Write Data Eye, Address Command Eye, Chip Select Eye); and Reference voltage levels (Auto base-top vs Absolute vs Percentage, with High / Mid / Low / Hysteresis).

## Content

### Configuration: Set measurement limits for tests

Use Configuration tab to view and configure the Global Settings and the measurement configurations. The measurement specific configurations available in this tab depends on the selections made in the DUT panel and Test Selection panel.

#### Configuration tab: Common parameters

| Settings | Description |
|---|---|
| Limits Editor | Displays the upper and lower limits for the applicable measurement using different types of comparisons. *(Embedded Limits Editor dialog: "View or Edit the values used for High Limit and Low Limit for each measurement. A blank cell means no test value is applied." Columns: TestName, Details, Compare String, Low Limit, Compare String, High Limit. Sample rows showing tCK, tCK_Duty_UI_Error, tCK_1UI_RJ_NoBUJ, etc. with values like `>= Greater Than (...)` and `<= Less Than Or E...` Compare String entries. Reset, Save, OK buttons.)* |

### Configuration tab: Global settings

*Figure 20: Configuration tab: Global Settings* — Setup panel with steps 1–3 checked, step 4 Configuration active. Sub-tabs: Global Settings (active orange), Measurements. Limits Editor button. Instruments Detected list: `Real Time Scope` with value `DPO73304SX ( GPIB8::1::INSTR )`. Fields: Bandwidth (GHz) `20`, Record Length (M) `0.5`, Sample Rate (GS/s) dropdown `50`. Retain Vertical Scale checkbox (unchecked) with caveat text "Autoset is not performed by TekExpress. Ensure valid vertical scale values are available in the oscilloscope for selected acquisition sources." Status bar: "Completed.".

| Settings | Description |
|---|---|
| Instruments Detected | Displays the instruments connected to this application. Click on the instrument name to open a list of available (detected) instruments. Select **Options > Instrument Control Settings** and click Refresh to update the instrument list. > ⚠ **Note:** Verify that the **LAN and GPIB** search criteria (default setting) in the Instrument Control Settings is selected when using TekExpress DDR Tx application. |
| Bandwidth | Select the oscilloscope bandwidth. This value is used for all tests. |
| Record Length | Specifies the waveform record length. |
| Sampling Rate | Specifies the oscilloscope's sample rate for all tests. |
| Retain Vertical Scale | When enabled, retains vertical scale, offset and position values for the channels as specified by user prior to start of run. |

### DDR5 Configuration tab: Measurements settings

*Figure 21: Configuration tab settings for DDR5* — Measurements sub-tab active. Left tree: Clock, WR_Data, RD_Data, CA. Right area (Analyze / CLOCK Ref Level sub-tabs, Analyze active): Number of UI (M) `1` checkbox, Save worst case measurement snapshot checkbox, Clock modulated with SSC checkbox. N Start `6`, N Stop `7`. BER `16`. Noise Compensation group: Auto / Manual radios; Scope RN(rms) (mV) `0`.

| Settings | Description |
|---|---|
| Measurements | Displays the measurement groups, that are selected in the Test Selection tab. Select the respective test group to view or modify the measurement configuration. |
| Number of UI | Enable to execute the selected measurement/s for specified number of unit intervals. |
| Save worst case measurement snapshot | Enable to save the worst case measurement snapshot for the selected measurement. |
| N start \ N stop | Specifies the start and stop values for NUI jitter measurements. where N = 6, 7, 8….30 |
| BER | Specifies the Bit Error Rate. |
| tCK (ns) | Unit interval in seconds. |
| Superimpose DQS¹ | Select to add DQS eye on the data eye diagram. |
| Stop on Mask Hit | Select to stop the test execution as soon as mask hit is observed. |
| Vertical Scale (Scale to DQ / Scale to DQS)¹ | Scales the waveform which is larger among the superimposed eye, When **Superimpose DQS** option is checked. Auto scales to the vertical height of the data signal without considering the reference clock (DQS) signal amplitude. |
| Include Margins in the plot¹ | Select to display mask margins in the eye diagram plot. |
| **Mask Definition** | |
| Write Data Eye | **Eye Width (UI)**: It is the Eye Width of stressed eye, based on the selected Data Rate. **Eye Height (mV)**: It is the Eye height of stressed eye based on the selected Data Rate. |
| Address Command Eye | **TciVW (UI)**: It is the Rx Timing Window. **VciVW (V)**: It is the Rx Mask voltage p-p. |
| Apply DFE¹ | When checked, applies the DFE on the Write Data (DQ) and the output waveform of DQ is used for Write Data Eye measurement. |
| Gain¹ | The gain control of the front end is used to ensure that the cursor or the current bit is in a congruent relationship with the ISI correction required for the channel. |
| Threshold¹ | It is the middle voltage level of the signal, which may be the transition between logic levels. For biased signals, enter the mid-level value. |
| Tap (1 to 4)¹ | The taps T1, T2, T3, T4 coefficients provide the corrections to the current bit by adding or subtracting the effects of ISI of the previous bits. |
| Ref Levels Clock / DQS / DQ / CA | Timing measurements are based on the state transition times. Edges occur when a waveform crosses specified reference voltage levels. Reference voltage levels must be set so that the application can identify state transitions on a waveform. By default, the application automatically chooses reference voltage levels when necessary. |
| Ref Levels — Base top method | Specifies the Base-Top method, used for all reference voltage levels when auto set occurs. |
| Ref Levels — Absolute | Select to manually configure the reference level settings. |
| Ref Levels — Percentage | Select to manually configure the reference level settings in percentage. |
| Ref Levels — High Level | Sets the high threshold level for the rising and falling edge of the source. |
| Ref Levels — Mid Level | Sets the middle threshold level for the rising and falling edge of the source. |
| Ref Levels — Low Level | Sets the low threshold level for the rising and falling edge of the source. |
| Ref Levels — Hysteresis | Sets the threshold margin to the reference level, in which the voltage must cross to be recognized as changing; the margin is the relative reference level plus or minus hysteresis; use to filter out spurious events. |

### LPDDR5-5X Configuration tab: Measurements settings

*Figure 22: Configuration tab settings for LPDDR5-5X* — Same sub-tab structure. Measurement tree: Clock, Write_Clock, WR_Data, WR_Data_tDQ2DQ, RD_Data, CA, CA_tCA2CA, CS. Right area (Analyze active): Window Size `200`, Number of UI (M) `1` checkbox, Save worst case measurement snapshot checkbox, Round Up (Applicable only for tCK(avg)) checkbox (checked).

| Settings | Description |
|---|---|
| Measurements | Displays the measurement groups that are selected in the Test Selection tab. Select the respective test group to view or modify the measurement configuration. |
| Window Size | Measurement analysis is done on a window of size 200 cycles with a step increment of 1 cycle. As per the standard, the default window size is 200. You can set window size up to 1M. |
| Number of UI (M) | Select to execute the selected measurement/s for the specified number of intervals. |
| Save worst case measurement snapshot | Enable to save the worst-case measurement snapshot for the selected measurement. |
| Superimpose WCK\Superimpose RDQS¹ | Select to add WCK/RDQS eye on the data eye diagram. |
| Stop On Mask Hit | Select to stop the test execution as soon as mask hit is observed. |
| Vertical Scale [Scale to DQ / Scale to WCK / Scale to RDQS]¹ | Scales the waveform which is larger among the superimposed eye, When **Superimpose WCK / RDQS** option is checked. Auto scales the vertical height of the data signal without considering the reference clock (WCK / RDQS) signal amplitude. |
| Include Margins in the plot¹ | Select to display mask margins in the eye diagram plot. |
| **Mask Definition** | |
| Write Data Eye | **TDIVW1 (UI)**: It is the DQ Rx mask width. **TDIVW2 (UI)**: It is the DQ Rx mask width at VDIVW. **VDIVW (V)**: It is the DQ Rx mask height. |
| Address Command Eye | **TCIVW1 (UI)**: It is CA Rx mask width. **TCIVW2 (UI)**: It is the CA Rx mask width at VCIVW. **VCIVW (V)**: It is the CA Rx mask height. |
| Chip Select Eye | **TCSIVW1 (UI)**: It is CS Rx mask width. **TCSIVW2 (UI)**: It is the CS Rx mask width at VCSIVW. **VCSIVW (V)**: It is the CS Rx mask height. |
| Ref Levels Clock / WCK / RDQS / DQ / CA /CS | Timing measurements are based on the state transition times. (Auto / Base top / Absolute / Percentage / High / Mid / Low / Hysteresis fields as described in DDR5 above.) |

*(Footnote 1: Applies to features marked with ¹.)*

## Cross-references

- [`screens/setup-test-selection-config.md`](../../screens/setup-test-selection-config.md) — the live Configure dialog (Global Settings / Measurements / Acquire / Analyze sub-tabs) that corresponds to the Configuration tab described in this chunk.
- [`screens/setup-test-selection-limits-editor.md`](../../screens/setup-test-selection-limits-editor.md) — the Limits Editor dialog.
- `setup-dut-panel` — the DUT settings (Device, Data Rate, Signal Probe Type) that determine which Measurements sub-tab fields appear here.
- `setup-test-selection-and-acquisitions` — the Test Selection tab determines what shows up in the Measurements tree.
- `results-panel` — once configured, measurement results flow back to the Results panel where Pass/Fail is judged against the Limits Editor values.
- `references-and-appendices` — DDR DFE standalone tutorial that complements the "Apply DFE / Gain / Threshold / Tap" controls in the DDR5 Measurements table.

## Confidence notes

- The DDR5 Mask Definition entry for "Address Command Eye → VciVW (V)" reads "It is the Rx Mask voltage p-p" with a subscript/superscript "p-p" rendered as small text in the source; transcribed as "p-p".
- The LPDDR5-5X measurement tree includes both `WR_Data` and `WR_Data_tDQ2DQ`, and both `CA` and `CA_tCA2CA`. These appear to be sub-groups for the corresponding parameter sweeps; preserved as printed in *Figure 22*.
- The Ref Levels section is structurally a nested table in the source (single "Ref Levels Clock / DQS / DQ / CA" cell with a multi-row inner table). Flattened to single-column rows in the markdown for readability.
- DDR5 "Apply DFE / Gain / Threshold / Tap" rows are footnoted "¹" meaning MSO/DPO70000-only — same restriction as in `welcome-and-help` key features.
