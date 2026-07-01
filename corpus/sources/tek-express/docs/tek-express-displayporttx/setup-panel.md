---
provenance: observed
class: doc-section
doc_id: tek-express-displayporttx
doc_title: "TekExpress DisplayPort Tx Automated Test Solution Software — Printable Help"
doc_number: null
doc_date: null
applies_to: [tek-express]
section_id: setup-panel
section_title: Setup panel — DUT tab, Test Selection, Acquisitions, Configuration, Preferences
parent_section: null
page_range: "131 to 410"
related_screens: [setup-dut, setup-test-selection, setup-test-selection-config, setup-acquisitions, setup-acquisitions-probe-config, setup-test-selection-limits-editor, setup-preferences]
related_hardware: []
---

# Setup panel — DUT tab, Test Selection, Acquisitions, Configuration, Preferences

## Summary

The five-tab Setup wizard that drives a DisplayPort Tx test session. Covers the **DUT** tab in both Compliance View and Advanced View — DUT ID, Acquire-live-vs-pre-recorded, View dropdown, Device (`DisplayPort`), Version (`CTS 1.2` / `CTS 1.4`), Connector (`Standard` / `Type C`), Device Profile (Data Rates: RBR / HBR / HBR2 / HBR3; Pre-Emphasis Levels: 0 dB / 1 3.5 dB / 2 6 dB / 3 9.5 dB; Voltage Swing: 0 400 mV / 1 600 mV / 2 800 mV / 3 1200 mV; SSC: Both / Enabled / Disabled), Lane Setup (Multi-Lane, Selected Lanes, Use Switch Matrix), DUT Automation (Controller dropdown — Dongle, Test Mode dropdown — Manual), Signal Validation (Skip validation / Prompt if validation fails; Data Rate / Pattern Type / SSC checkboxes); the **Test Selection** tab — DisplayPort Tx / DisplayPort++ / Aux Channel Test category tree with Deselect All / Select Required / Select All buttons, Show MOI / Schematic / Configure buttons, Test Description; the **Acquisitions** tab — per-test Acquisition column (PRBS7 / COMP-EYE / TPS4 / PLTPAT / D10.2), Waveform File Name column, Acquisition and Save Options (Save All Waveforms / Delete All Waveforms After Analysis), Show Acquire Parameters checkbox, DC Voltage `Internal`, Embed/De-embed Filter checkbox + filter path; the **Configuration** tab — Compliance Mode vs User Defined Mode radios, Limits Editor button, Global Settings + Measurements tabs (Scope Settings, Analyze, Filters — CTLE / Worst Case Cable / Worst Case Cable HBR3, Clock Recovery, Ref Levels); the **Preferences** tab — Number of Runs (Acquire/Analyze each test N times), Popup Settings (Auto close Warnings and Informations during Sequencing, Auto close Error Messages during Sequencing, Auto close after N Seconds, Show in Reports). Also documents the DisplayPort / Dual Mode / Aux Channel tests (Eye Diagram, Non Pre-Emphasis Level Verification, Pre-Emphasis Level Verification and Maximum Peak-to-Peak Differential Voltage, HBR2/HBR3 Level and Equalization Verification, Inter-Pair Skew, Intra-Pair Skew, AC Common Mode Noise, Non ISI Jitter, Total Jitter / Random Jitter, Main Link Frequency Compliance, Spread Spectrum Modulation Frequency / Deviation, dF/dt Spread Spectrum Deviation HF Variation, Dual Mode TMDS Clock, Dual Mode Eye Diagram, AUX Manchester Channel Eye, AUX Channel Eye Sensitivity, Inrush, AUX Slew Rate), the equipment connection-diagram set (TCA-SMA / Differential / Wilder / VTM / Type-C dongle / DPC / DPR-100), Compliance vs User Defined views and modes, Common test parameters (Mode, Global Settings, Measurements, Limits Editor), and the Set Preferences tab parameters table.

## Content

### Setup panel structure

The Setup panel has numbered tabs to guide you through the test setup process:

1. **DUT** — *Figure 1: DUT tab, Compliance view* — Setup wizard with Setup/Status/Results/Reports side-nav; wizard step indicator (1 DUT highlighted, 2 Test Selection, 3 Acquisitions, 4 Preferences). DUT ID `DUT001`. Acquire live waveforms (selected) / Use pre-recorded waveform files. View dropdown `Compliance`. Device `DisplayPort`. Version `CTS 1.4`. Connector `Type C`. Device Profile group: Data Rates (RBR, HBR, HBR2, HBR3 all checked); Pre-Emphasis Levels (0, 1, 2, 3 all checked); Voltage Swing (0 400 mV, 1 600 mV, 2 800 mV, 3 1200 mV all checked). SSC dropdown `Both`. Lane Setup: Multi-Lane Setup, Selected Lanes `Lane0`, Use Switch Matrix Setup. DUT Automation: Controller `Dongle`, Test Mode `Manual`. Signal Validation `Prompt if validation fails`, with Data Rate / Pattern Type checkboxes selected, SSC unchecked. Right rail: Start, Pause.

   *Figure 2: Advanced view* — Same DUT tab in Advanced view: View dropdown `Advanced`, and the step indicator now exposes step **4 Configuration** in addition to Preferences (5 Preferences).

2. **Test Selection** — *Figure 3: Test Selection tab* — DisplayPort : Transmitter : CTS 1.4 heading. Buttons: Deselect All, Select Required, Select All. Tree view: DisplayPort Tx parent expanded with checkboxes for: Eye diagram testing, Non Pre-Emphasis Level Verification Testing, RBR/HBR Pre-Emphasis Level Verification Testing, HBR2/HBR3 Level and Equalization Verification Testing, HBR2/HBR3 Peak to Peak Verification Testing, Intra-Pair Skew Test, AC Common Mode Noise Measurements, Non ISI Jitter Measurements, Total Jitter (TJ) Measurements, Random Jitter (RJ) Measurements, Main Link Frequency Compliance, Spread Spectrum Modulation Frequency, Spread Spectrum Modulation Deviation, dF/dt Spread Spectrum Deviation HF Variation, Aux Channel Test. Test Description box: "Please select a test name to view its description." Buttons: Show MOI, Schematic, Configure.

   *Figure (continued): Test category tree* — sibling parents DisplayPort Tx (expanded), DisplayPort++, Aux Channel Test.

3. **Acquisitions** — *Figure 4: Acquisitions tab* — Per-test grid with Test Name | Acquisition | Waveform File Name columns. Sample rows: `Eye diagram testing | Lane0 : PRBS7 / Lane0 : COMP-EYE / Lane0 : TPS4`; `Non Pre-Emphasis Level Verification | Lane0 : PRBS7 / Lane0 : PLTPAT`; `RBR/HBR Pre-Emphasis | Lane0 : PRBS7`; `HBR2/HBR3 Level and Eq | Lane0 : PLTPAT`; `HBR2/HBR3 Peak to Peak | Lane0 : PLTPAT`; `Non ISI Jitter Measurements | Lane0 : COMP-EYE / Lane0 : TPS4`; `Total Jitter (TJ) Measurements | Lane0 : PRBS7 / Lane0 : COMP-EYE / Lane0 : TPS4`; `Random Jitter (RJ) Measurements | Lane0 : D10.2`. Acquisition and Save Options: Save All Waveforms (selected) / Delete All Waveforms After Analysis. Show Acquire Parameters checkbox. DC Voltage `Internal`. Embed/De-embed Filter checkbox + path `C:\Users\Public\Tektronix\TekApplicat...`.

4. **Configuration** — *Figure 5: Configuration tab (Measurements)* — Compliance Mode (selected) / User Defined Mode radios. Limits Editor button. Tabs: Global Settings, Measurements (active). Tree of selected measurements (Eye diagram testing, Non Pre-Emphasis Level Verification Testing, RBR/HBR Pre-Emphasis Level Verification Testing, HBR2/HBR3 Level and Equalization Verification Testing, HBR2/HBR3 Peak to Peak Verification Testing, Non ISI Jitter Measurements, Total Jitter (TJ) Measurements, Random Jitter (RJ) Measurements, Main Link Frequency Compliance). Right pane sub-tabs: Scope Settings, Analyze, Filters (active), Clock Recovery, Ref Levels. Filters pane: Filter File group with CTLE / Worst Case Cable / Worst Case Cable (HBR3) file pickers; CTLE DFE (HBR3) radio set to CTLE; CTLE (HBR3) Zero Cable `All`, Worst Case Cable `All`.

5. **Preferences** — *Figure 6: Preferences tab* — Number of Runs group: Acquire/Analyze each test `1` times. Popup Settings group: Auto close Warnings and Informations during Sequencing (Auto close after `10` Seconds); Auto close Error Messages during Sequencing. Show in Reports (Auto close after `10` Seconds).

By default, only the DUT, Test Selection, Acquisitions, and Preferences tabs are displayed. The Configuration tab is only available if you select the Advance View option in the DUT tab. Otherwise, configuration settings for tests selected in the Test Selection tab are available from the Configure button on the Test Selection tab.

Options selected in a preceding tab affect options available in the next tab down. For example, Device Profile settings affect the list of tests available for selection in the Test Selection tab. However, you can switch between the tabs in any order if you need to modify your test parameters.

### About setting up tests

Set up tests using the tabs in the Setup panel. Settings in the DUT tab use a top-down, left-to-right logic flow, so that any parameter that affects or acts as a filter for other parameters appears either to the top of or to the left of the affected parameters.

Test options include two views, **Compliance** and **Advanced** (selected in the DUT tab of the Setup panel), and two modes, **Compliance** and **User Defined** (selected in the configuration settings of the Setup panel). The selected view determines where the test configuration settings are displayed. The selected mode determines whether you can change test configuration settings to include those that are noncompliant. The level of user intervention required depends on the DUT Automation setting and Acquisition parameters.

- **Compliance View** selected with **Compliance Mode**: View configuration options in the Test Selection tab of the Setup panel. Tests will run automatically with little or no user intervention. You will not be able to change test parameters to anything that deviates from the compliance standards. The only test configuration parameters that you can change in this mode are the Real Time Scope and the Digital Filters (DSP), both under Global Settings.
- **Compliance View** selected with **User Defined Mode**: View configuration options in the Test Selection tab of the Setup panel. Tests will run automatically but you will be able to change some test parameters before starting the test.
- **Advanced View** selected with **Compliance Mode**: View configuration options in the Configuration tab of the Setup panel. Tests will run automatically with little or no user intervention. You will not be able to change test parameters to anything that deviates from the compliance standards. The only configuration parameters you can change in this mode are the selected Real Time Scope and the Digital Filters (DSP), both under Global Settings.
- **Advanced View** selected with **User Defined Mode**: View configuration options in the Configuration tab of the Setup panel. Tests will run automatically but you will be able to change some test parameters before starting the test.

### Supported tests

#### DisplayPort

**Eye Diagram:** This test evaluates the timing and amplitude support of the overall DisplayPort system objective of Bit Error Rate in data transmission. Eye diagram is plotted to evaluate the timing and amplitude parameters. This measurement can be run using differential probe as well as single-ended probe. Measurement can be run with 1 lane, 2 lanes, and 4 lanes connection.

**Non Pre-Emphasis Level Verification:** This test is performed to ensure that the system budget is followed and ensures that the level settings are monotonic in nature. Monotonicity helps the sink can relay on the source to incrementally increase upon by the sink. This measurement can be run using differential probe as well as single-ended probe. Measurement can be run with 1 lane, 2 lanes, and 4 lanes connection.

**Pre-Emphasis Level Verification and Maximum Peak-to-Peak Differential Voltage Testing:** This test measures the pre-emphasis of the Source waveform, by measuring the peak to peak differential amplitude. Comparisons are made for the Level 0 transition state as well the as non-transition levels. Maximum peak to peak amplitude is also measured. This measurement can be run using differential probe as well as single-ended probe. Measurement can be run with 1 lane, 2 lanes, and 4 lanes connection.

**HBR2/HBR3 Level and Equalization Verification Testing:** This test evaluates the pre-emphasis of the Source waveform. This is done by measuring the first and fifth harmonics for the different settings of the signal. Calculations are based on ratio of first and fifth harmonic combinations.

**Inter-Pair Skew Test:** This test evaluates the skew, or time delay, between the differential data lanes. This measurement can be run using differential probe as well as single-ended probe. This measurement can be run only with 2 lanes and 4 lanes connection.

**Intra-Pair Skew Test:** This test evaluate the skew or the time delay, between the respective sides of a differential data lane. This measurement can be run using single-ended probe. This measurement can be run only with 1 lane, 2 lanes, and 4 lanes connection.

**AC Common Mode Noise:** This test evaluates the AC common mode noise (unfiltered RMS) of the differential data line. This measurement can be run using single-ended probe. This measurement can be run only with 1 lane, 2 lanes, and 4 lanes connection.

**Non ISI Jitter Measurements:** This test evaluates the amount of Non-ISI jitter accompanying the data transmission. This measurement can be run using differential probe as well as single-ended probe. Measurement can be run with 1 lane, 2 lanes, and 4 lanes connection.

**Total Jitter and Random Jitter (RJ/DJ) Measurement:** This test evaluates the total jitter at 10e-12 for RBR, HBR and HBR2 and 10e-9.5 for HBR3. This can be measured explicitly at this rate or through an approved estimation technique. This measurement can be run using differential probe as well as single-ended probe.

**Main Link Frequency Compliance:** This test ensure that the average data rate under all conditions does not exceed minimum or maximum as set by the standard. This measurement can be run using differential probe as well as single-ended probe.

**Spread Spectrum Modulation Frequency:** This test evaluates the frequency of the SSC modulation.

**Spread Spectrum Modulation Deviation:** This test evaluates the range of SSC down-spreading of the transmitter signal.

**dF/dt Spread Spectrum Deviation HF Variation:** This test verifies SSC profile and it does not include any frequency deviation which would exceed 1250 ppm/uSec.

#### Dual Mode tests

**Dual Mode TMDS Clock:** This test verifies the duty cycle of the TMDS clock waveform of a source operating in dual mode. This measurement can be run only using differential probe. Measurement can be run with 1 lane, 2 lanes, and 4 lanes connection.

**Dual Mode Eye Diagram:** This test performs the eye diagram measurement and finds the timing variables and amplitude trajectories for a dual mode source device. This measurement can be run only using differential probe. Measurement can be run only with 4 lanes connection.

#### Aux Channel tests

**AUX Manchester Channel Eye Testing:** Checks if AUX Manchester channel eye waveform timing variables and amplitude trajectories support DisplayPort system. This measurement can be run using differential probe as well as single-ended probe. Measurement can be run with 1 lane connection.

**AUX Channel Eye Sensitivity Test:** Evaluates the sensitivity to the AUX CH EYE opening of a DUT. This measurement can be run using differential probe as well as single-ended probe. Measurement can be run with 1 lane connection. This measurement is visible only when DUT automation is not manual.

**Inrush Test:** Evaluate the Inrush energy at the power supply Input of a power consuming DUT. This measurement can be run using single-ended probe. Measurement can be run with 1 lane connection.

**AUX Slew Rate Test:** This test evaluate the AUX signaling edge rates to minimize crosstalk to main link signals.

### Equipment connection setup

To run tests, you need the following equipment (for details, see *Minimum System Requirements*):

- A *supported Tektronix oscilloscope*
- TCA-SMA or Differential Probes (for example, P7313SMA)
- The device under test
- Test fixtures

The following diagrams show different setups (illustrations are not transcribed verbatim — refer to source):

- AUX Channel Eye diagram using VTM fixture and DP AUX with single-ended probes
- AUX Channel Eye diagram using VTM fixture and DP AUX with differential probes
- AUX Channel Eye diagram using Wilder fixture and DP AUX with single-ended probes
- AUX Channel Eye diagram using Wilder fixture and DP AUX with differential probes
- AUX Channel Sensitivity test using VTM fixture and DP AUX with single-ended probes (uses external Attenuator)
- AUX Channel Eye diagram and Sensitivity test using Type-C dongle and DPC with single-ended probes (uses Type-C DisplayPort dongle, TPA PWR sense, DPC-TPA-P, DPC-TPA-CB Wilder, DPR-100 for setting up DPCD)
- AUX Channel Eye diagram and Sensitivity test using Type-C dongle and DPC with differential probes
- AUX channel Eye diagram and Sensitivity test using VTM fixture and DPR-100 with single-ended probes

### Common test parameters and values

The following table lists the measurement parameters common to most tests.

| Parameter type | Parameter and default value |
|---|---|
| Mode | Determines whether test parameters are in compliance or can be edited. **Compliance**: Most test parameter values cannot be edited. **User Defined**: Most test parameter values can be edited. |
| Global Settings | These settings apply to all tests selected for the current session. Real Time Scope: Specifies the oscilloscope used for tests. |
| Measurements | Shows the parameter settings for the test selected in the tree view section. |
| Limits | Shows the upper and lower limits for the applicable measurement using different types of comparisons. In Compliance Mode, allows you to view the measurement high and low limits used for the test selected in the tree view of the Measurements tab. When running tests in User Defined Mode, you can edit the limit settings in the Limits Editor. *Figure: When running tests in User Defined Mode, the cells in the Limits Editor table are active for editing so you can change parameters.* |

### Set preferences tab parameters

Use the Preferences tab to set the application action on completion of a measurement:

| Settings | Description |
|---|---|
| **Number of Runs** | |
| Acquire/Analyze each test `<number>` times | Select to repeat the test run by setting the number of times. By default, it is selected with 1 run. The number of run feature is available only during the live mode. |
| **Popup Settings** | |
| Auto close Warnings and Informations during Sequencing — Auto close after `<number>` Seconds | Select to auto close warnings/informations during sequencing. Set the Auto close time. By default it is unselected. |
| Auto close Error Messages during Sequencing. Show in Reports — Auto close after `<number>` Seconds | Select to auto close Error Messages during Sequencing. Set the Auto close time. By default it is unselected. |

## Cross-references

- [`screens/setup-dut.md`](../../screens/setup-dut.md) — DUT panel screen in the corpus; this chunk documents every Compliance / Advanced view control (Device, Version, Connector, Data Rates, Pre-Emphasis Levels, Voltage Swing, SSC, Lane Setup, DUT Automation, Signal Validation).
- [`screens/setup-test-selection.md`](../../screens/setup-test-selection.md), [`screens/setup-test-selection-config.md`](../../screens/setup-test-selection-config.md), [`screens/setup-test-selection-limits-editor.md`](../../screens/setup-test-selection-limits-editor.md) — the live Test Selection / Configure / Limits Editor screens; this chunk documents the underlying tests, the Configure button, and the User Defined Mode editable-limits behaviour.
- [`screens/setup-acquisitions.md`](../../screens/setup-acquisitions.md), [`screens/setup-acquisitions-probe-config.md`](../../screens/setup-acquisitions-probe-config.md) — Acquisitions tab screens; this chunk documents the per-test Acquisition column and Save / Delete waveform options.
- [`screens/setup-preferences.md`](../../screens/setup-preferences.md) — Preferences tab screen; this chunk documents Number of Runs and Popup Settings.
- `operating-basics` — the Setup / Status / Results / Reports side-nav is documented globally there; this chunk picks up at the wizard step indicator inside Setup.
- `saving-recalling-test-setup` — the Save Test Setup / Open Test Setup / Default Test Setup actions that persist Setup-panel choices.
- `status-panel`, `results-panel`, `reports-panel` — what happens after Start in the Setup panel.

## Confidence notes

- The DUT tab description prints the wizard step labels for Compliance View as "1 DUT, 2 Test Selection, 3 Acquisitions, 4 Preferences" (no Configuration); Advanced View adds "4 Configuration, 5 Preferences". Preserved as printed.
- The Acquisitions sample grid in the source shows lane/pattern pairs only for Lane0 in the example screenshot; the help doesn't enumerate per-lane behaviour for higher lane counts.
- Eye diagram limit example printed as "10e-12 for RBR, HBR and HBR2 and 10e-9.5 for HBR3" — preserved verbatim though the exponent notation is unusual.
- The Eye diagram measurement details table in the source covers RBR / HBR / HBR2 / HBR3 with TP3_EQ test point for HBR2/HBR3 and TP2 for RBR/HBR; the worst-case cable / zero-length cable test must both pass.
- The connection diagrams are illustrations only and are referenced by caption here, not transcribed.
- "DisplayPort++" and "Dual Mode" are used interchangeably in the source — preserved as printed in each location.
- "Schematic" button on Test Selection is named in the figure caption; its detailed behaviour is not in the figure-region content extracted.
