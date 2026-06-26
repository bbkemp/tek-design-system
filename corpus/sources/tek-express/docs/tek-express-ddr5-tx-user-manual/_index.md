# TekExpress DDR Tx Compliance and Debug Automation Software Application Help

**Doc ID:** `tek-express-ddr5-tx-user-manual` · **Doc number:** `077-1648-04` · **Published:** 2025-08 · **Applies to:** `tek-express`

Generated **2026-06-26** by the `document-pdf` skill from `uploads/pdfs/TekExpress_DDR5_Tx_UserManual_ENG-US_077-1648-04_077164804.pdf`.

The application supports both DDR5 and LPDDR5-5X transmitter compliance tests on Tektronix MSO/DPO70000 and 7 Series DPO oscilloscopes. This snapshot of the help reflects the August 2025 build (framework v5.12.0 per the Welcome section; figure captures from v5.11.0.34 in places).

## Sections

| Section | Pages | Chunk |
|---|---|---|
| Welcome, Getting help and support | 5–9 | [welcome-and-help](./welcome-and-help.md) |
| Getting started — Hardware and software requirements | 10–11 | [getting-started](./getting-started.md) |
| Setting up the test environment | 12–14 | [setting-up-test-environment](./setting-up-test-environment.md) |
| Starting the application — Application controls, Options menu, Email settings | 15–19 | [starting-application](./starting-application.md) |
| Setup panel — DUT tab and burst detection | 20–30 | [setup-dut-panel](./setup-dut-panel.md) |
| Setup panel — Test Selection and Acquisitions | 31–33 | [setup-test-selection-and-acquisitions](./setup-test-selection-and-acquisitions.md) |
| Setup panel — Configuration (Global Settings, Measurements, Limits Editor) | 34–39 | [setup-configuration](./setup-configuration.md) |
| Setup panel — Preferences | 40–41 | [setup-preferences-panel](./setup-preferences-panel.md) |
| Status panel — Test Status and Log View | 42–45 | [status-panel](./status-panel.md) |
| Results panel — View summary of test results | 46–48 | [results-panel](./results-panel.md) |
| Reports panel — Configure report generation and view reports | 49–53 | [reports-panel](./reports-panel.md) |
| Saving and recalling test setup | 54–55 | [saving-recalling-test-setup](./saving-recalling-test-setup.md) |
| SCPI Commands — remote control reference | 56–166 | [scpi-commands](./scpi-commands.md) |
| References — directories, file formats, DDR DFE, SDLA, pre-recorded waveforms | 167–174 | [references-and-appendices](./references-and-appendices.md) |

## Processed in this pass

**Whole document.** All 14 logical sections of the TekExpress DDR Tx Application Help — Welcome through References — are chunked. The Index (pages 175–177) is not extracted as a chunk; it is a within-doc page-number pointer, not a topic.

## Cross-references in the corpus

| Chunk | Cross-links to existing screens |
|---|---|
| `starting-application` | [`screens/setup-dut.md`](../../screens/setup-dut.md), [`screens/options-dropdown.md`](../../screens/options-dropdown.md), [`screens/setup-preferences-email-settings.md`](../../screens/setup-preferences-email-settings.md), [`screens/running-test.md`](../../screens/running-test.md) |
| `setup-dut-panel` | [`screens/setup-dut.md`](../../screens/setup-dut.md), [`screens/setup-dut-comments.md`](../../screens/setup-dut-comments.md) |
| `setup-test-selection-and-acquisitions` | [`screens/setup-test-selection.md`](../../screens/setup-test-selection.md), [`screens/setup-test-selection-config.md`](../../screens/setup-test-selection-config.md), [`screens/setup-test-selection-limits-editor.md`](../../screens/setup-test-selection-limits-editor.md), [`screens/setup-acquisitions.md`](../../screens/setup-acquisitions.md), [`screens/setup-acquisitions-probe-config.md`](../../screens/setup-acquisitions-probe-config.md) |
| `setup-configuration` | [`screens/setup-test-selection-config.md`](../../screens/setup-test-selection-config.md), [`screens/setup-test-selection-limits-editor.md`](../../screens/setup-test-selection-limits-editor.md) |
| `setup-preferences-panel` | [`screens/setup-preferences.md`](../../screens/setup-preferences.md), [`screens/setup-preferences-email-settings.md`](../../screens/setup-preferences-email-settings.md) |
| `status-panel` | [`screens/status-test-status.md`](../../screens/status-test-status.md), [`screens/status-log-view.md`](../../screens/status-log-view.md) |
| `results-panel` | [`screens/results.md`](../../screens/results.md) |
| `reports-panel` | [`screens/reports-configuration.md`](../../screens/reports-configuration.md), [`screens/reports-view-settings.md`](../../screens/reports-view-settings.md) |

The Manual references section of each cross-linked screen is back-updated to cite the corresponding chunk(s), in addition to its existing UI-audit cross-references.

## Open discrepancies surfaced by this pass

- **TekExpress Framework version drift.** Welcome (page 7) declares framework v5.12.0; sample Reports (Figures 32/33, pages 52) shows `Framework: 5.11.0.34`. Either the screenshots predate the v5.12.0 integration, or the v5.12.0 claim outpaces the figures the manual ships with. Flagged in `welcome-and-help` and `reports-panel` Confidence notes.
- **Install path inconsistency.** Getting started gives `C:\Program Files\Tektronix\TekExpress\TekExpress DDR Transmitter`; References > Application directories gives `C:\Program Files\Tektronix\DDR Transmitter`. The longer form (under `TekExpress\`) appears authoritative.
- **Pre-existing Reports tab-content swap.** `tek-express/index.md` records a "Discrepancy flag — audit PDF tab/content mapping" between the legacy UI audit PDF and the live Reports screens. This help-doc pass does not resolve it; the `reports-panel` chunk follows the manual's labels verbatim.
- **Reports Figure 33 OCR.** "MCK Frequency" and "MCK:Clock" in the LPDDR5-5X sample report header appear to be OCR rendering of "WCK Frequency" and "WCK:CK". Preserved as printed.

## Cross-product applicability

`applies_to: [tek-express]` for every chunk. While the DDR Transmitter Application is a sibling of other TekExpress applications (USB3, DisplayPort Tx, PCI Express) whose CHM/PDF help files also sit in `uploads/`, no cross-application content is in scope for this snapshot.
