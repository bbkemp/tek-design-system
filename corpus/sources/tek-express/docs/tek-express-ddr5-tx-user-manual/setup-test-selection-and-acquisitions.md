---
provenance: observed
class: doc-section
doc_id: tek-express-ddr5-tx-user-manual
doc_title: "TekExpress DDR Tx Compliance and Debug Automation Software Application Help"
doc_number: 077-1648-04
doc_date: 2025-08
applies_to: [tek-express]
section_id: setup-test-selection-and-acquisitions
section_title: Setup panel — Test Selection and Acquisitions
parent_section: null
page_range: "31 to 33"
related_screens: [setup-test-selection, setup-acquisitions, setup-acquisitions-probe-config]
related_hardware: []
---

# Setup panel — Test Selection and Acquisitions

## Summary

Wizard steps 2 and 3 of the Setup panel. **Test Selection** presents a measurement tree filtered by what was chosen on the DUT tab — DDR5 shows the Clock group with tCK and 24 NoBUJ jitter variants; LPDDR5-5X expands to Clock with tCH(abs/avg), tCK(abs/avg), tCL(abs/avg), tJIT(cc/per), VIHdiff_CK, VILdiff_CK, Vindiff_CK, Vindiff_High_CK, Vindiff_Low_CK and below. **Acquisitions** is the panel that ties measurements to oscilloscope channels through the View Probes dialog (Trimode probe + model verification), Signal-to-Source mapping per group (DQ/DQS/Clock/Add.Cmd/CS for DDR5; DQ/WCK/RDQS/Clock/CAa/CAb/CS for LPDDR5-5X), and the **Save and Analyze Acquisitions In Sequence** option. Also defines the session-storage convention (`X:\TekExpress DDR Tx\Untitled Session\<dutid>\<date>_<time>`) and the rename-on-save behavior.

## Content

### Test Selection: Select the tests

Use the Test Selection tab to select the tests. The test measurements available depends on the settings selected in the DUT. tab.

*Figure 16: TekExpress DDR Tx (DDR5) measurements* — Setup panel with DUT checked. Header: `DDR5 : Transmitter : Spec Rev JESD79-5C_01_v1.31`. Buttons: Deselect All, Select All. Tree starts with `CLOCK` checked, then `tCK`, `tCK_Duty_UI_Error`, then a long ordered series `tCK_1UI_RJ_NoBUJ`, `tCK_1UI_DJ_NoBUJ`, `tCK_1UI_TJ_NoBUJ`, … continuing through `tCK_4UI_*_NoBUJ`. Test Description text area: "Please select a test name to view its description".

*Figure 17: TekExpress DDR Tx (LPDDR5-5X) measurements* — Setup panel with header `LPDDR5-5X : Transmitter : Spec Rev JESD209-5C`. Tree starts with `CLOCK > Clock` group expanded: `tCH(abs)`, `tCH(avg)`, `tCK(abs)`, `tCK(avg)`, `tCL(abs)`, `tCL(avg)`, `tJIT(cc)`, `tJIT(per)`, `VIHdiff_CK`, `VILdiff_CK`, `Vindiff_CK`, `Vindiff_High_CK`, `Vindiff_Low_CK`. Test Description text area: "Please select a test name to view its description".

| Setting | Description |
|---|---|
| Deselect All / Select All | Deselect or select all tests in the list. |
| Tests | Click on a test to select or unselect. Highlight a test to show details in the Test Description pane. The application automatically selects all required tests when in Compliance mode. |
| Test Description | Shows brief description of the highlighted test in the test tree. |

#### See also

`Acquisitions: Set waveform acquisition settings` on page 32

### Acquisitions: Set waveform acquisition settings

Use Acquisitions tab to view the test acquisition parameters. The contents displayed on this tab depends on the DUT type and the tests selected.

*Figure 18: Acquisition tab for DDR5* — Setup panel with steps 1 DUT, 2 Test Selection (checked), 3 Acquisitions (active). Two side-by-side signal-to-source tables, top: `Signal | Source` headers; rows DQ, DQS, Clock, Add.Cmd, CS (all unchecked). View Probes button. Lower split-pane: Test Name column (`tCK`, `tCK_Duty_UI_Error`, `tCK_1UI_RJ_NoBUJ`, `tCK_1UI_DJ_NoBUJ`, `tCK_1UI_TJ_NoBUJ`, `tCK_2UI_RJ_NoBUJ`, `tCK_2UI_DJ_NoBUJ`, `tCK_2UI_TJ_NoBUJ`, `tCK_3UI_RJ_NoBUJ`, `tCK_3UI_DJ_NoBUJ`, `tCK_3UI_TJ_NoBUJ`, `tCK_4UI_RJ_NoBUJ`); Acquisition column shows `Clock`. Acquisition and Save Options group: Save and Analyze Acquisitions In Sequence checkbox.

*Figure 19: Acquisition tab for LPDDR5-5X* — Same panel structure with signals DQ, WCK, RDQS in left table; Clock, CAa, CAb, CS in right table. Test Name lists `tCH(abs)`, `tCH(avg)`, `tCK(abs)`, `tCK(avg)`, `tCL(abs)`, `tCL(avg)`, `tJIT(cc)`, `tJIT(per)`, `VIHdiff_CK`, `VILdiff_CK`, `Vindiff_CK`, `Vindiff_High_CK`, `Vindiff_Low_CK`. Acquisition column shows `Clock`.

#### Acquisitions tab settings

| Setting | Description |
|---|---|
| View Probes | View the detected probe configuration. Use the View Probes dialog box to view the connected probes. *(Embedded Probe Configuration dialog: Source / Probe Type / Probe Model columns; rows CH1–CH4 each showing Probe Type = `Trimode Probe`, Probe Model = `P77STCABL/P7720`; Refresh and Close buttons.)* |
| Signal | Select the type of signal on which the measurements need to be run. |
| Source | Select the channels with the respective signal type, on which the measurements have to be run. |
| **Acquisition and Save options** | |
| Save and Analyze Acquisition In Sequence | Saves and then analyses the acquisition in sequence. |

TekExpress DDR Tx saves all acquisition waveforms to files by default. Waveforms are saved in a unique folder for each session (a session is started when you click the Start button). The folder path is `X:\TekExpress DDR Tx\Untitled Session\<dutid>\<date>_<time>`. Images created for each analysis, XML files with result values, reports, and other information specific to that particular execution are also saved in this folder.

Saving a session moves the session file contents from the Untitled Session folder to the specified folder name and changes the session name to the specified name.

#### See also

`Pre-recorded waveform file names for test measurements` on page 172

## Cross-references

- [`screens/setup-test-selection.md`](../../screens/setup-test-selection.md) — live Test Selection screen.
- [`screens/setup-test-selection-config.md`](../../screens/setup-test-selection-config.md) and [`screens/setup-test-selection-limits-editor.md`](../../screens/setup-test-selection-limits-editor.md) — Configure and Limits Editor dialogs reachable from Test Selection (manual covers their measurement-level analogs under `setup-configuration`).
- [`screens/setup-acquisitions.md`](../../screens/setup-acquisitions.md) — live Acquisitions screen with View Probes / Signal / Source / Save & Analyze controls.
- [`screens/setup-acquisitions-probe-config.md`](../../screens/setup-acquisitions-probe-config.md) — the embedded Probe Configuration dialog opened by View Probes.
- `setup-dut-panel` — the DUT settings that determine what shows up in Test Selection and Acquisitions.
- `setup-configuration` — Configuration tab that follows Acquisitions.
- `references-and-appendices` — the pre-recorded waveform file-name convention that interacts with the file-path Acquisitions writes.

## Confidence notes

- The DDR5 measurement tree in *Figure 16* shows checked items but the rest of the manual establishes the default state is "All tests are De-selected by default in Test Selection tab" (per `welcome-and-help` key features). The figure reflects a post-Select-All state, not initial.
- The Probe Configuration sample dialog text "P77STCABL/P7720" embedded in Table 10's View Probes cell is preserved verbatim despite mixing a probe-tip part (`P77STCABL`) and probe model (`P7720`) in a single Model column entry.
- The DDR5 spec revision string in *Figure 16* reads `JESD79-5C_01_v1.31`; the LPDDR5-5X equivalent in *Figure 17* reads `JESD209-5C`. Preserved as printed.
