---
provenance: observed
class: doc-section
doc_id: tek-express-displayporttx-2-1
doc_title: "TekExpress DisplayPort 2.1 Application Help"
doc_number: 077-xxxx-xx
doc_date: unknown
applies_to: [tek-express]
section_id: setting-up-test-environment
section_title: Setting up the test environment
parent_section: null
page_range: "56 to 80"
related_screens: [setup-dut-session-browser]
related_hardware: []
---

# Setting up the test environment

## Summary

How to prepare the DisplayPort 2.1 test environment before running tests: the View / Mode model (Compliance vs. Advanced view, paired with Compliance Mode in the Configuration setup panel), the full inventory of supported DP 2.1 measurements (Eye Diagram, DDJ, RJ, TJ, UJ, UDJ, LFUDJ, SSC measurements, UI, Bit Rate, Electrical Idle, AC Common Mode, Preset Optimization, Transmitter Equalization) with their test points (TP2 / TP3_EQ) and test patterns (PRBS31 / PRBS15 / SQ128); the equipment connection diagrams for DP 2.0 and DP 2.1 setups with TCA-SMA single-ended and P7625/P7633 differential probes (with and without UCD-323 controller); individual test configuration (Preset selection, Cable filters for Eye Diagram); first-run setup (folder structure on Windows 10 with `X:\` mapped share); the Pre-Run checklist (SPC, Deskew, instrument detection); and how to run a test in pre-recorded mode against saved waveform files.

## Content

### About setting up tests

Setup the tests by using the tabs in the Setup panel: Configure the test setup. Settings in the DUT tab use a top-down, left-to-right logic flow, so that any parameter that affects or acts as a filter for other parameters appears either to the top of or to the left of the affected parameters.

Test options include two views, Compliance and Advanced (selected in the DUT tab of the Setup panel), with Compliance Mode (selected in the Configuration Setup panel). The selected view determines where the test configuration settings are displayed. The level of user intervention required depends on the DUT Automation setting and Acquisition parameters.

- **Compliance View selected with Compliance Mode:** View configuration options in the Test Selection tab of the Setup panel. Tests will run automatically with little or no user intervention. You will not be able to change test parameters to anything that deviates from the compliance standards. The only test configuration parameters that you can change in this mode are the Real Time Scope and the Digital Filters (DSP), both under Global Settings.
- **Advanced View selected with Compliance Mode:** View configuration options in the Configuration tab of the Setup panel. Tests will run automatically with little or no user intervention. You will not be able to change test parameters to anything that deviates from the compliance standards. The only configuration parameters you can change in this mode are the selected Real Time Scope, Cable filters for Eye diagram test, and the Digital Filters (DSP) under Global Settings.

#### Supported tests

- **Eye Diagram Testing** — An eye diagram is an indicator of quality in a serial bit stream. The display (which has symmetrical patterns shaped similarly to eyes, hence the name) represents the integrity and consistency of data streams by visualizing the transitions between 0 and 1 values and comparing those transitions among the others in their stream.
  - Test Points: TP2, TP3_EQ
  - Pattern: PRBS31
- **Data Dependent Jitter (DDJ) Measurement** — DDJ is threshold-crossing time deviations correlated to the previous bits on the current data bit.
  - Test Points: TP2, TP3_EQ · Pattern: PRBS15
- **Random Jitter (RJ) Measurement** — Random Jitter (RJ) is also called Gaussian jitter, is unpredictable electronic timing noise. Random jitter typically follows a normal distribution.
  - Test Points: TP2, TP3_EQ · Pattern: PRBS15
- **Total Jitter (TJ) Measurement** — Total Jitter (TJ) is the sum of random and deterministic jitter and is calculated for a specific BER for the system.
  - Test Points: TP2, TP3_EQ · Pattern: PRBS15
- **Uncorrelated Jitter (UJ) Measurement** — Jitter that is bounded and correlated to the data is "Data dependent jitter" (DDJ). Removing DDJ from Deterministic Jitter is Uncorrelated Jitter.
  - Test Points: TP2, TP3_EQ · Pattern: PRBS15
- **Uncorrelated Deterministic Jitter (UDJ) Measurement** — Deterministic Jitter (DJ) is a type of clock or data signal jitter that is predictable and reproducible. The peak-to-peak value of this jitter is bounded, and the bounds can easily be observed and predicted. Deterministic jitter has a known non-normal distribution. Deterministic jitter can either be correlated to the data stream (data-dependent jitter) or uncorrelated to the data stream (bounded uncorrelated jitter). UDJ measures uncorrelated jitter which is Bounded in nature. The most common cause of UDJ is crosstalk.
  - Test Points: TP2, TP3_EQ · Pattern: PRBS15
- **Low Frequency Uncorrelated Deterministic Jitter (LFUDJ) Measurement** — Low Frequency UDJ measurement calculates deterministic jitter after removal of data dependent jitter on low frequency signal.
  - Test Points: TP2, TP3_EQ · Pattern: PRBS15
- **SSC Down Spread Rate Measurement** — This measurement calculates computes the SSC modulating frequency.
  - Test Points: TP2 · Pattern: PRBS31
- **SSC Phase Deviation Measurement** — This measurement calculates SSC phase deviation in Seconds, measured at each inflection point in the modulation profile.
  - Test Points: TP2 · Pattern: PRBS31
- **SSC Spread range Measurement** — This measurement calculates the SSC Spread range.
  - Test Points: TP2 · Pattern: PRBS15
- **SSC Slew Rate Measurement** — This measurement calculates rate of change SSC frequency deviation in ppm (parts per million), measured at each inflection point in the modulation profile. It is expressed in kppm/us.
  - Test Points: TP2 · Pattern: PRBS31
- **Unit Interval Measurement** — Unit Interval measurement calculates period. For clock signals, the elapsed time between consecutive crossings of the mid reference voltage level in the direction specified; one measurement is recorded per crossing pair.
  - Test Points: TP2 · Pattern: PRBS31
- **Bit Rate Measurement** — Bit Rate is reciprocal of UI. UI is calculated dynamically using a uniform moving average filter procedure.
  - Test Points: TP2 · Pattern: PRBS31
- **Electrical Idle Measurement** — This measurement confirms that the DP UHBR Source TX peak voltage during transmit electrical idle do not exceed the limits.
  - Test Points: TP2
- **AC Common Mode Measurement** — This test shall evaluate the DP UHBR Source AC common mode (ACCM) noise (unfiltered rms) of the differential data line of a DP interface.
  - Test Points: TP2 · Pattern: PRBS15
- **Preset Optimization Measurement** — Preset Optimization Measurement is used to find out the optimal preset value. For TP2 test point it is the preset that gives the least DDJ. For TP3_EQ it is the preset that gives the largest eye area after applying the CTLE+DFE.
  - Test Points: TP2, TP3_EQ · Pattern: PRBS15 (TP2), PRBS31(TP3_EQ)
- **Transmitter Equalization test** — Transmitter Equalization test is used to calculate Preshoot, Deemphasis and Swing, where preshoot, deemphasis and swing are the ratio of voltages for different DUT configuration.
  - Test Points: TP2 · Pattern: SQ128

### Equipment connection setup

To run tests, you need the following equipment (for details, see Minimum System Requirements):

- A supported Tektronix oscilloscope
- TCA-SMA or Differential Probes (for example, P7625)
- The device under test
- Test fixtures

The following diagrams show different setups:

- *Figure 1: DisplayPort 2.0 setup with Differential/Tri-Mode Probe*
- *Figure 2: DisplayPort 2.0 setup with single ended TCA SMA*
- *Figure 3: DisplayPort 2.1 setup with single ended TCA SMA and UCD323 Controller*
- *Figure 4: DisplayPort 2.1 setup with Differential/Tri-Mode Probe and UCD323 Controller*

### Individual test configuration

In the Compliance mode the you can change a couple of test specific configurations.

- Preset selection
- Cable filters for Eye Diagram Measurement

### About running tests

After selecting and configuring tests, review the pre-run checklist and then click Start to perform the tests. The application acquires and analyzes the data, then displays a report when the tests are complete.

While the tests are running, other applications may display windows in the background. The TekScope application takes precedence over other applications, but you can switch to other applications using the Alt+Tab key combination. To keep the TekExpress DisplayPort 2.1 application on top, select Keep On Top from the DisplayPort 2.1 application Options menu.

Waveforms generated during the test are automatically saved when you save the related test setup, so you can run tests in pre-recorded mode.

### Before you click start

Before you run tests for the first time, do the following:

1. Understand where your test files are stored on the instrument.

   After you install and launch TekExpress DisplayPort 2.1, it creates the following folders on the oscilloscope:

   - Windows 10: `C:\Program Files\Tektronix\TekExpress\TekExpress DisplayPortTx 2.1`
   - `\My Documents\My TekExpress\ DisplayPort 2.1`
   - `\My Documents\My TekExpress\DisplayPort 2.1\ Untitled Session`

   Every time you launch TekExpress DisplayPort 2.1, an `Untitled Session` folder is created in the `DisplayPort 2.1` folder. The `Untitled Session` folder is automatically deleted when you exit the `DisplayPort 2.1` application.

   **CAUTION:** Do not modify any of the session files or folders because this may result in lost data or corrupted session files. Each session has multiple files associated with it. When you save a session, a .TekX file, and a folder named for the session and containing the associated files, is created on the oscilloscope X: drive.

2. Map the shared My TekExpress folder as X: (X drive) on all the instruments used in test setups running Microsoft Windows Operating System.

   The `My TekExpress` folder has the share name format `<domain><user ID>My TekExpress`. Or, if the instrument is not connected to a domain, then the share name format is `<instrument name><user ID> My TekExpress`. This shared folder is used to save the waveform files and is used during other file transfer operations.

   Note: If the X: drive is mapped to any other shared folder, the application will display a warning message asking you to disconnect the X: drive manually.

3. Make sure that the `My TekExpress` folder has read and write access, and that the contents are not set to be encrypted:
   a. Right-click the folder and select Properties.
   b. Select the General tab and then click Advanced.
   c. In the Advanced Attributes dialog box, make sure that the option Encrypt contents to secure data is NOT selected.

4. Refer the pre-run checklist before you run a test.

### Pre-Run checklist

Do the following before you click Start to run a test. If this is the first time you are running a test on a setup, refer to the information in Before you click start.

1. Make sure that all the required instruments are properly warmed up (approximately 20 minutes).
2. Perform the Signal Path Compensation (SPC).
   a. On the oscilloscope main menu, select the Utilities menu.
   b. Select Instrument Calibration.
3. Deskew channels.
4. Make sure that the application is able to find the oscilloscope. If it cannot, refer TekExpress instrument control settings to search for connected instruments.
   a. Launch the DisplayPort 2.1 application.
   b. Select the Setup panel and then click the Test Selection tab.
   c. Select any test and then click Configure.
   d. In the Configuration section, click Global Settings.
   e. In the Instruments Detected section, click the drop-down arrow to the right of Real Time Scope and make sure that the correct oscilloscope is listed.

### Run a test in pre-recorded mode

This option allows you to re-run a complete test using just the oscilloscope and the saved test setup files.

Note: Running the test in pre-recorded mode does not replace the existing saved test results. Instead, if you save the test under the same name, the results are saved in a session folder named for the date and time of the session.

1. Open the Save the configured test setup.
2. In the Setup panel, select the DUT tab and then select Use pre-recorded waveform files.

   A Run session field displays, showing the session that ran for this test. If there is more than one session that contains test data (not an empty session folder) these are available in the Run session drop-down list. Select the desired session from the drop-down list.

3. Select the Acquisitions tab.
4. In the Set acquisition tab parameters, look in the Waveform FileName column.
5. If no waveform files are listed, click the ellipsis button and then locate and select the desired waveform files. Skip to step 7.
6. If waveform files are listed, verify that the listed files are the ones you want to use. If they are not, or if you want to add a file, do any of the following as needed:
   - To remove a waveform file from the list, click the ellipsis button and select Remove Waveform File.
   - To replace a waveform file, click the ellipsis button, select Replace Waveform File, then locate and select the desired file.
   - To add a waveform file, click the ellipses button, select Select Waveform Files, then locate and select the waveform files.
7. Click Start to run the test.

## Cross-references

- [`screens/setup-dut-session-browser.md`](../../screens/setup-dut-session-browser.md) — the pre-recorded session browser invoked by "Use pre-recorded waveform files".
- `setup-dut-panel` — where the View (Compliance / Advanced), Acquire-live-vs-pre-recorded radios, Data Rates, Presets, SSC, Lane Setup, Filter Setup, DUT Automation, and Signal Validation are set.
- `setup-test-selection-and-acquisitions` — the next tab(s) in the wizard; the supported-tests list above is the menu the Test Selection tab presents at run time.
- `setup-configuration-panel` — Global Settings (Instruments Detected, Digital Filter (DSP) Options) referenced by the Pre-Run checklist.
- `references-and-appendices` — Application directories and Deskew channels procedure are recapped under References.
- See also (base manual): `tek-express-displayporttx/setting-up-test-environment` — covers the DP 2.0 equipment-connection diagrams (Figures 1, 2) and the pre-DP 2.1 measurement inventory.

## Confidence notes

- The folder path "`\My Documents\My TekExpress\ DisplayPort 2.1`" prints with a stray space between the slash and the version — preserved verbatim.
- The body refers to "TekExpress DisplayPort 2.0" twice ("from the Options menu in TekExpress DisplayPort 2.0, select Deskew" appears in the Deskew section recapped under references-and-appendices) — left as-is; suggests the 2.1 CHM reuses some 2.0 boilerplate that was not refreshed.
- Equipment-connection figure images render as `<image>` placeholders in the PDF export; only the captions are extracted above.
- The Visual Search burst-detection method that appears in the DDR5 manual does not apply here; the DP 2.1 setup uses Signal Validation (Prompt if validation fails / Skip / Validate but use as is) instead. See `setup-dut-panel`.
