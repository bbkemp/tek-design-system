---
provenance: observed
class: doc-section
doc_id: tek-express-app-emulator
doc_title: "TekExpress AppEmulator Application Help"
doc_number: 077-xxxx-xx
doc_date: null
applies_to: [tek-express]
section_id: setup-test-selection-and-acquisitions
section_title: Setup panel — Test Selection and Acquisitions
parent_section: null
page_range: "81 to 90"
related_screens: [setup-test-selection, setup-acquisitions, setup-acquisitions-probe-config]
related_hardware: []
---

# Setup panel — Test Selection and Acquisitions

## Summary

The middle two tabs of the Setup wizard in AppEmulator. **Test Selection** lets the user pick from a tree of dummy tests grouped under three nodes — Algorithm Library Measurements, SCOPE Measurements, DPOJET Measurements — with Deselect All / Select Required / Select All buttons, a Test Description preview pane, and Show MOI / Schematic / Configure buttons. **Acquisitions** displays the connection setup (Data +ve / Data -ve channel dropdowns with Refresh Sources and View Probes buttons), the per-test acquisition method table (e.g. `Short Record-length for SCOPE Period`, `Short Record-length for DPOJET Period`), the Acquisition and Save Options (Save All Waveforms Before Analysis / Analyze Immediately, No Waveforms Saved / Save and Analyze Acquisition In Sequence), Show Acquire Parameters, Acquire Step By Step, and a Signal Validation dropdown. AppEmulator saves all acquisition waveforms to `X:\AppEmulator\Untitled Session\<dutid>\<date>_<time>` by default.

## Content

### Test Selection: Select the tests

Use the Test Selection tab to select the tests. The test measurements available depends on the settings selected in the DUT tab.

*Figure 1: Test selection tab* — Window title `TekExpress AppEmulator - (Untitled)`. Side nav: Setup, Status, Results, Plots, Reports. Setup wizard with DUT checkmark, 2 Test Selection (highlighted), 3 Acquisitions, 4 Preferences. Top banner: `TX-Device : Group1 : Spec 1.0`. Buttons row: Deselect All, Select Required, Select All. Tree view:
- `Algorithm Library Measurements` (collapsed parent)
  - `Algorithm Library Measurement`
- `SCOPE Measurements`
  - `Period using SCOPE (Acquire-Analyze Combined)` (checked)
- `DPOJET Measurements`
  - `Period using DPOJET (Acquire-Analyze Combined)` (checked)

Bottom: Test Description pane with placeholder text `Please select a test name to view its description`, Show MOI button, Schematic button, Configure button. Status bar: `Ready.`

**Table 1. Test Selection tab configuration**

| Setting | Description |
|---|---|

*(The Test Selection tab configuration table is printed empty in this CHM-export PDF — only the Setting / Description headers and two blank rows appear, with no parameter descriptions.)*

### Acquisitions: Set waveform acquisition settings

Use Acquisitions tab to view the test acquisition parameters. The contents displayed on this tab depends on the DUT type and the tests selected.

*Figure 1: Acquisition tab* — Setup wizard with DUT checkmark, Test Selection checkmark, 3 Acquisitions (highlighted), 4 Preferences. Top banner: `TX-Device : Group1 : Spec 1.0`. **Connection Setup** group: Data +ve `CH1` dropdown, Data -ve `CH3` dropdown, Refresh Sources button, View Probes button. **Test Name / Acquisition** table (two rows):
- `Period using SCOPE (Acquire-Analyze C... | Short Record-length for SCOPE Period`
- `Period using DPOJET (Acquire-Analyze... | Short Record-length for DPOJET Period`

**Acquisition and Save Options** group (bottom):
- Save All Waveforms Before Analysis (selected radio)
- Analyze Immediately, No Waveforms Saved (radio)
- Save and Analyze Acquisition In Sequence (radio)

Plus on the right:
- Show Acquire Parameters (checkbox)
- Acquire Step By Step (checkbox)
- Signal Validation: `Prompt me if Signal...` dropdown

Status bar: `Ready.`

**Table 1. Acquisitions tab configuration**

| Setting | Description |
|---|---|

*(The Acquisitions tab configuration table is printed empty in this CHM-export PDF — only the Setting / Description headers appear, with no parameter descriptions.)*

AppEmulator application saves all acquisition waveforms to files by default. Waveforms are saved in a unique folder for each session (a session is started when you click the Start button). The folder path is `X:\AppEmulator\Untitled Session\<dutid>\<date>_<time>`. Images created for each analysis, XML files with result values, reports, and other information specific to that particular execution are also saved in this folder.

Saving a session moves the session file contents from the Untitled Session folder to the specified folder name and changes the session name to the specified name.

## Cross-references

- [`screens/setup-test-selection.md`](../../screens/setup-test-selection.md) — the live Setup > Test Selection screen in the corpus that Figure 1 (Test Selection tab) captures.
- [`screens/setup-acquisitions.md`](../../screens/setup-acquisitions.md) — the live Setup > Acquisitions screen in the corpus that Figure 1 (Acquisition tab) captures.
- [`screens/setup-acquisitions-probe-config.md`](../../screens/setup-acquisitions-probe-config.md) — the View Probes button on the Acquisitions tab opens this probe configuration view.
- `setup-dut-panel` — the prior tab in the Setup wizard; the DUT panel determines which tests are available here.
- `setup-configuration` — the Configure button on the Test Selection tab leads to the Configuration / Limit Editor surface documented in that chunk.

## Confidence notes

- **Both tab configuration tables are empty in the source.** Only Setting / Description headers; no parameter rows. CHM-export gap. Field labels recoverable from screenshots but verbatim descriptions are not in the source.
- Test names visible in the tree (`Algorithm Library Measurement`, `Period using SCOPE (Acquire-Analyze Combined)`, `Period using DPOJET (Acquire-Analyze Combined)`) are emulator placeholder labels demonstrating the framework's grouping of algorithm-library, scope, and DPOJET-style tests — they are not real compliance measurements.
- Channel defaults (`Data +ve CH1`, `Data -ve CH3`) and Acquisition method labels (`Short Record-length for SCOPE Period`) are placeholder values.
- The Show MOI button (Method of Implementation) is a TekExpress convention reused from compliance applications; in AppEmulator it has no behavior tied to a real spec.
