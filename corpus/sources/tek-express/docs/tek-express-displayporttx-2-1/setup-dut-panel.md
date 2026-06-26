---
class: doc-section
doc_id: tek-express-displayporttx-2-1
doc_title: "TekExpress DisplayPort 2.1 Application Help"
doc_number: 077-xxxx-xx
doc_date: unknown
applies_to: [tek-express]
section_id: setup-dut-panel
section_title: Setup panel — DUT tab
parent_section: null
page_range: "100 to 120"
related_screens: [setup-dut, setup-dut-comments]
related_hardware: []
---

# Setup panel — DUT tab

## Summary

The DUT tab of the Setup panel — the global parameters that drive the rest of the DisplayPort 2.1 test session. Covers the wizard's tab order (DUT, Test Selection, Acquisitions, Configuration (Advanced view only), Preferences); DUT ID and Comments; Acquire-live-vs-pre-recorded mode; the **View** dropdown (Compliance / Advanced) that hides or shows the Configuration tab; **Version** (CTS 2.1 only); **Fixture** (Enhanced DP / Type C / mDP); **Data Rates** (UHBR10 / UHBR13.5 / UHBR20); **Voltage Swing** (locked at 800 mV for DP 2.1 — 400 / 600 / 1200 mV are not available); **Presets** (P0–P15 per data rate, with Select All / Deselect All); **SSC** (Enable / Disable / Both); **Lane Setup** (1 / 2 / 4 Lanes); **Filter Setup** (de-embed filter files for positive and negative channels); **DUT Automation** (Manual default, UCD-323 with Serial No. and Control Script File Paths for Standard and Type C); and **Signal Validation** (Prompt if validation fails / Skip test if validation fails / Skip validation / Validate pattern but use pattern as is).

## Content

### Setup panel overview

The Setup panel contains sequentially ordered tabs that help guide you through a typical test setup and execution process. By default the DUT, Test Selection, Acquisitions, and Preferences tabs are displayed. The Configuration tab is available only when you set the View option as Advance in the DUT tab. Otherwise, configuration settings for tests selected in the Test Selection tab are available from the Configure button on the Test Selection tab.

Options selected in a preceding tab affect options available in the next tab down. For example, Device Profile settings affect the list of tests available for selection in the Test Selection tab. However, you can switch between the tabs in any order if you need to modify your test parameters.

The tabs:

- DUT: Set DUT settings
- Test Selection: Select the tests
- Acquisitions: Set waveform acquisition settings
- Configuration: Set measurement limits for tests
- Preferences: Set the test run preferences

### DUT: Set DUT settings

Use the DUT tab to select parameters for the device under test. The settings are global and apply to all tests for the current session. The DUT settings available and the options in the drop-down list depends on the selections made in the settings. DUT settings also affect the list of available tests in the Test Selection tab.

*Figure 1: DUT Panel.*

Click Setup > DUT to access the DUT parameters:

| Setting | Description |
|---|---|
| DUT ID | Adds an optional text label for the DUT to reports. The default value is `DUT001`. The maximum number of characters is 32. You cannot use the following characters in an ID name: `(.,..,.,.,\,/:?"<>|*)`. |
| Comments icon (to the right of the DUT ID field) | Open a Comments dialog box which allows you to enter optional text to add to a report. You can enter a maximum number of 256 characters. Refer Select report options to enable or disable comments which appear on the test report. |
| Help | Open the help document with DUT page selected. |
| Acquire live waveforms | Acquire active signals from the DUT for measurement and analysis. |
| Use prerecorded waveform files | Run tests on a saved waveform. Refer Open (load) a saved test setup to save the test setup. |
| View | Set the view mode of the user interface for the test session. Select the mode of view from the drop-down: Compliance; Advanced. The Configuration tab is hidden in the Compliance mode and is only available when the View mode is set to Advanced. |
| Version | Displays the CTS version. DisplayPort 2.1 application supports only CTS 2.1 version. |
| Fixture | Set the type of fixture used for the test from the drop-down: Enhanced DP; Type C; mDP. |
| Data Rates | Select one or multiple data rates for waveform acquisition from the drop-down: **UHBR10**: Ultra High Bit Rate 10 (10 Gb/S); **UHBR13.5**: Ultra High Bit Rate 13.5 (13.5 Gb/S); **UHBR20**: Ultra High Bit Rate 20 (20 Gb/S). |
| Voltage Swing | Set the voltage swing for the signal quality test. Only 800 mV is supported for DisplayPort 2.1. Note: 400 mV, 600 mV, and 1200 mV settings are not available. |
| Presets | Sixteen presets (P0 to P15) are supported for signal test for each data rate. Click Setup to view the set of presets. For each data rate there are individual tabs for the preset selection. Select All: Selects all the presets for current data rate tab. Deselect All: Deselects all the presets for current data rate tab. Cancel: Undo the changes and close the pop-up. OK: Save the changes and close the pop-up. |
| SSC | Select the option for Spread Spectrum Clocking from the drop-down: SSC Enable: When selected, waveforms will be acquired with SSC. SSC Disable: When selected, waveforms will be acquired without SSC. Both: When selected, 2 sets of waveforms will be acquired for each acquire type. One with and one without SSC. |
| Lane Setup | Set the lanes to be used for the acquisition of the signal. Click Setup button and select the desired number of test lanes for the test session. The Link Width determines the number of test lanes. 1 Lane: When selected, only one lane can be used. 2 Lanes: When selected, any one lane or two lanes can be used. 4 Lanes: When selected, only a lane or two lanes or four lanes can be used. |
| Filter Setup | Set the filter files for de-embedding the signal during acquisition. Click Filters to browse and select the De-embed filters for acquisition on positive and negative channels. The De-embed option is unchecked by default. |
| DUT Automation | Control to pick the DUT Control Type. **Manual** (default): You will be prompted to configure the DUT manually during the test. **UCD-323**: Select this option to configure the DUT using Unigraf UCD-323. The UCD-323 Setup window is launched when UCD-323 is selected in the Test Mode dropdown or the setup button is clicked. **Serial No.:** Enter the valid serial number to use UCD-323. **Control Script File Paths:** Browse and select the Standard and Type C script files to control the DUT using UCD-323. |
| Signal Validation | **Prompt if validation fails**: When selected, user is prompted if pattern validation fails. The user will be given the option to Reacquire, Use Anyway, Skip and Abort the execution. **Skip test if validation fails**: When selected, it will skip the corresponding test(s) if pattern validation fails. **Skip validation**: When selected, skips the validation for all the patterns. **Validate pattern but use pattern as is**: Select to validate the pattern. If the validation fails, the application retries the link training for 3 times. If the validation fails even after 3 times, then it will use the pattern as is. |

## Cross-references

- [`screens/setup-dut.md`](../../screens/setup-dut.md) — the live Setup › DUT screen in the corpus; the controls described in this chunk (View, Version, Fixture, Data Rates, Voltage Swing, Presets, SSC, Lane Setup, Filter Setup, DUT Automation, Signal Validation) match the live application surface.
- [`screens/setup-dut-comments.md`](../../screens/setup-dut-comments.md) — the popup invoked by the Comments icon next to the DUT ID field.
- `setup-test-selection-and-acquisitions` — the next tab in the Setup wizard; selected Data Rates and Presets here drive the Test Selection list.
- `setup-configuration-panel` — Configuration tab is only available when View = Advanced.
- `tek-express-dp-dut-control-app` — the Tektronix DP DUT control app that pairs with UCD-323 / DPR-100 controllers; described in the Saving and recalling chapter of this manual.
- `setting-up-test-environment` — the Compliance vs. Advanced view distinction and the supported-tests inventory.
- See also (base manual): `tek-express-displayporttx/setup-dut-panel` — the base DisplayPort 2.0 DUT tab supports RBR/HBR/HBR2/HBR3 data rates and earlier voltage swings; the 2.1 manual constrains Voltage Swing to 800 mV and adds UCD-323 DUT Automation.

## Confidence notes

- The DUT ID character-restriction string prints as `(.,..,.,.,\,/:?"<>|*)`. The leading punctuation cluster is preserved verbatim — it appears to include a typographic artifact from the PDF rendering of escape sequences.
- The "View" dropdown is printed both as "Advanced" and "Advance" within the same source. Both spellings are preserved where they occur ("set the View option as Advance" vs. selections "Compliance / Advanced").
- "Test Mode dropdown" is the label printed in the DUT Automation cell — it refers to the same DUT Automation dropdown, not a separate Test Mode field.
- Inline icons in the Comments row and DUT Automation row render as `<image>` placeholders in the PDF export.
