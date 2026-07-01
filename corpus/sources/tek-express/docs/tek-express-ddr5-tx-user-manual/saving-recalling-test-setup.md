---
provenance: observed
class: doc-section
doc_id: tek-express-ddr5-tx-user-manual
doc_title: "TekExpress DDR Tx Compliance and Debug Automation Software Application Help"
doc_number: 077-1648-04
doc_date: 2025-08
applies_to: [tek-express]
section_id: saving-recalling-test-setup
section_title: Saving and recalling test setup
parent_section: null
page_range: "54 to 55"
related_screens: []
related_hardware: []
---

# Saving and recalling test setup

## Summary

How test-setup persistence works. A "test setup" is the saved bundle of: selected oscilloscope, general parameters, acquisition parameters, measurement limits, waveforms (if applicable), and other configuration settings — all serialized under one name at `X:\DDR Transmitter`. Use-cases: re-run a known-good configuration on live waveforms, derive a new setup from an existing one, audit a past run (log + status history + results), or re-run against saved waveforms. Covers Save / Save As (current setup), Load (from list), pre-run session selection (loads waveforms from a saved setup into pre-recorded mode), and the explicit Save-As renaming flow.

## Content

### Test setup files overview

Saved test setup information (such as the selected oscilloscope, general parameters, acquisition parameters, measurement limits, waveforms (if applicable), and other configuration settings) are saved under the setup name at `X:\DDR Transmitter`.

Use test setups to:

- Run a new session, acquire live waveforms, using a saved test configuration.
- Create a new test setup using an existing one.
- View all the information associated with a saved test, including the log file, the history of the test status as it executed, and the results summary.
- Run a saved test using saved waveforms.

### Save the configured test setup

You can save a test setup before or after running a test. You can create a test setup from already created test setup or using a default test setup. When you save a setup, all the parameters, measurement limits, waveform files (if applicable), test selections, and other configuration settings are saved under the setup name. When you select the default test setup, the parameters are set to the application's default value.

- Select **Options > Save Test Setup** to save the opened setup.
- Select **Options > Save Test Setup As** to save the setup with different name.

### Load a saved test setup

To open (load) a saved test setup, do the following:

- Select **Options > Open Test Setup**.
- Select the setup from the list and click **Open**. Setup files are located at `X:\DDR Transmitter`.

### Select a pre-run session from the loaded test setup

Complete the following steps to load a test setup from a pre-run session:

1. Select **Options > Open Test Setup**.
2. Select a setup from the list and then click **Open**. Setup files are located at `X:\DDR Transmitter\`.
3. Switch the mode to **Pre-recorded waveform files** in the DUT panel.
4. Select the required waveforms from the selected setup in the Acquisition tab and **Run** the required test.

### Save the test setup with a different name

To create a test setup with a different name, follow the steps:

1. Select **Options > Open Test Setup**.
2. Select a setup from the list and then click **Open**.
3. Click application setup and modify the parameters.
4. Click application reports and modify the report options.
5. Select **Options > Save Test Setup As**.
6. Enter the test setup name and click **Save**.

## Cross-references

- `starting-application` — same Options menu (Default Test Setup / Open / Save / Save As / Open Recent) is described from the menu-inventory perspective.
- `setup-dut-panel` — the **Pre-recorded waveform files** mode toggle on the DUT tab that activates pre-run session playback.
- `setup-test-selection-and-acquisitions` — the Acquisition tab where pre-run waveforms are selected.
- `reports-panel` — Report settings configured are included in saved test setups.
- `references-and-appendices` — file-name extensions (`*.TekX` session files) and the `My Documents\DDR Transmitter\Untitled Session` folder layout.

## Confidence notes

- The Test setup files location is given as `X:\DDR Transmitter` (load step) but `X:\DDR Transmitter\` (pre-run step) — trailing-slash inconsistency in the source. Preserved.
- The Save Test Setup As procedure step 3 ("Click application setup and modify the parameters") and step 4 ("Click application reports and modify the report options") are awkwardly phrased in the source — probably should read "Click the Setup panel" / "Click the Reports panel". Preserved verbatim.
