---
provenance: observed
class: doc-section
doc_id: tek-express-app-emulator
doc_title: "TekExpress AppEmulator Application Help"
doc_number: 077-xxxx-xx
doc_date: null
applies_to: [tek-express]
section_id: setup-dut-panel
section_title: Setup panel — DUT tab and multiple-session run
parent_section: null
page_range: "70 to 80"
related_screens: [setup-dut, setup-dut-comments, setup-dut-session-browser]
related_hardware: []
---

# Setup panel — DUT tab and multiple-session run

## Summary

The Setup panel and its first tab (DUT) in AppEmulator. Covers the four-step wizard (DUT → Test Selection → Acquisitions → Preferences — note: no separate Configuration step like DDR5), the DUT tab parameters (DUT ID, Acquire-live vs. Pre-recorded radios, View dropdown, Session label, Device dropdown, Suite, Version, Device Profile group with Probing Type and Vertical Offset, Device Characteristics group with SSC and Signal Validation Threshold, Execution Settings group with Analyze on Golden Waveforms and Show Model Information In Popup), and the Multiple-session run feature — Run/Config Sessions dialog that lets users save multiple config sessions and run them together, with controls to Save, Close, Default, Load, Delete, and Run Sessions. The Multi Run Session feature is enabled by default; it can be disabled by setting `IsMultiSessionRunEnabled` to `false` in `TekExpress.exe.Config`.

## Content

### Setup panel: Configure the test setup

The Setup panel contains sequentially ordered tabs that help you guide through the test setup and execution process.

*Figure (Setup panel): Setup wizard.* — Same DUT panel screenshot as in `welcome-and-help` Figure 1: side nav (Setup active, Status, Results, Plots, Reports), wizard steps 1 DUT (highlighted), 2 Test Selection, 3 Acquisitions, 4 Preferences. All DUT panel controls visible.

The Setup panel has the following sub-tabs:

- **DUT: Set DUT settings**
- **Test Selection: Select the tests**
- **Acquisitions: Set waveform acquisition settings**
- **Configuration: Set measurement limits for tests**
- **Preferences: Set the test run preferences**

### DUT: Set DUT settings

Use the DUT tab to select parameters for the device under test. These settings are global and apply to all tests of current session. DUT settings also affect the list of available tests in the Test Selection tab.

*Figure 1: DUT tab* — Same DUT panel as referenced above, showing the populated default values (`DUT001`, Acquire live waveforms selected, View `Compliance`, Session `Default`, Device `TX-Device`, Suite `Group1`, Version `Spec 1.0`, Probing Type `Single-Ended`, Vertical Offset `200V`, SSC `Off`, Signal Validation Threshold `200mV`, Analyze on Golden Waveforms `On`, Show Model Information In Popup `Off`).

Click **Setup > DUT** to access the DUT parameters:

**Table 1. DUT tab configuration**

| Setting | Description |
|---|---|

*(The DUT tab configuration table is printed empty in this CHM-export PDF — only the Setting / Description column headers appear, with no rows of parameter descriptions. The fields visible in the screenshot are: DUT ID, Acquire live waveforms / Use pre-recorded waveform files radios, View dropdown, Session label, Device dropdown, Suite dropdown, Version dropdown, Device Profile group [Probing Type, Vertical Offset], Device Characteristics group [SSC, Signal Validation Threshold], Execution Settings group [Analyze on Golden Waveforms, Show Model Information In Popup]. No verbatim text descriptions are provided in the source.)*

### Multiple-session run

Multiple-sessions run feature allows you to save multiple config sessions and run multiple config/run sessions together.

Click the (folder) button in the DUT panel, displays the Run/Config Session window. The Run/Config session window provides the list of saved sessions and the ability to run selected sessions.

- **Config session** – Session saved by user manually from Run/Config Sessions window.
- **Run session** – Session created automatically after the test is executed.

*Figure (Run/Config Sessions): Run/Config Sessions window.* — Dialog box titled `Run/Config Sessions` with a table (Session, DUTID, Comment columns) showing one row: `Run1 : 20210929_234641`, `DUT001`, `General Comment - App...`. Below: Session Name text field with `Save` button (caption `(Max 40)`); buttons row: Close, Default, Load, Delete, and Run Sessions (green play icon).

The Run/Config Sessions window provides the following controls:

- **Session name**: Enter the name to save the config session. The maximum number of character supported is 40 and special characters `(.,:,...,\,/:?"<>|*)` are not supported.
- **Save**: Save current configuration as a session with the given session name.
- **Close**: Close the Run/Config Session window.
- **Default**: Sets the application configurations to default values.
- **Load**: Load the selected config/run session.
- **Delete**: Delete the selected config/run session.
- **Run Sessions**: Run the selected config/run session.

#### Enable/ Disable the Multi Run session

By default the **Multi Run Session** is enabled in the application. Set the `IsMultiSessionRunEnabled` value to `false` to disable the **Multi Run Session** feature in the `TekExpress.exe.Config` file, which is downloaded along the application.

## Cross-references

- [`screens/setup-dut.md`](../../screens/setup-dut.md) — the live Setup > DUT screen in the corpus; the controls listed in this chunk match the screen's `controls[]` list.
- [`screens/setup-dut-comments.md`](../../screens/setup-dut-comments.md) — the popup invoked by the Comments icon next to the DUT ID field.
- [`screens/setup-dut-session-browser.md`](../../screens/setup-dut-session-browser.md) — the Run/Config Sessions dialog documented above as Multiple-session run.
- `setup-test-selection-and-acquisitions` — the next tab in the Setup wizard.
- `welcome-and-help` — the same DUT panel screenshot appears in Figure 1 of that chunk.
- `references-and-appendices` — the `Multi-Run description` section at the end of the manual relates to the Acquire/Analyze count, not the Multi Session Run feature documented here (they are different mechanisms).

## Confidence notes

- **DUT tab configuration table is empty in the source.** Only column headers (Setting / Description) appear; no parameter rows. This is a clear CHM-export gap: the underlying CHM topic almost certainly populates these rows (likely with descriptions for DUT ID character limits, Device dropdown options, etc.) but the rows do not render in the printed PDF. Field labels are recoverable from the screenshot but verbatim descriptions are not in the source.
- AppEmulator's wizard has **four** numbered steps (DUT, Test Selection, Acquisitions, Preferences) — Configuration is documented as part of the manual but appears only via the Test Selection > Configure button, not as a separate wizard step. This is a structural difference from DDR5 (which has five steps: DUT, Test Selection, Acquisitions, Configuration, Preferences).
- DUT panel values are emulator placeholders (`TX-Device`, `Group1`, `Spec 1.0`, `200V` Vertical Offset). Not real-world defaults for any specific Tek compliance application.
- Multi Run Session config-file disable is documented for `TekExpress.exe.Config` — this is the framework-level config file, not a per-application file.
