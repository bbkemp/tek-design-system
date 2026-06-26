# TekExpress PCI Express Transmitter Compliance and Validation Software Application Help

**Doc ID:** `tek-express-pci-express` · **Doc number:** `077-1762-05` · **Published:** 2026-03 · **Applies to:** `tek-express`

Generated **2026-06-26** by the `document-pdf` skill from `uploads/pdfs/TekExpress PCI Express Online Help.pdf`.

The application provides an automated, simple, and efficient way to test PCI Express interfaces and devices consistent with the PCI Express specifications. This snapshot covers Gen1, Gen2, Gen3, Gen4, Gen5 and Gen6 transmitter testing across CEM (Add-In-Card / System-Board), Base Spec (Tx Test Board / SRIS Tx Test Board), Ref Clock, U.2 (SFF-8639), M.2 and CXL device types. The About dialog reports TekExpress PCI Express Solutions Version 20.0.1.113 on TekExpress Framework v5.12.0.22.

## Sections

| Section | Pages | Chunk |
|---|---|---|
| Welcome, Getting help and support | 7–11 | [welcome-and-help](./welcome-and-help.md) |
| Getting started — Hardware and software requirements | 12–17 | [getting-started](./getting-started.md) |
| Setting up the test environment — install, connections, deskew, prerun | 18–32 | [setting-up-test-environment](./setting-up-test-environment.md) |
| Starting the application — Application controls, Options menu, Email settings | 33–42 | [starting-application](./starting-application.md) |
| Setup panel — DUT tab, Filter setup, Automated DUT control, NI USB 6501, Multi-session | 43–54 | [setup-dut-panel](./setup-dut-panel.md) |
| Setup panel — Test Selection and Acquisitions | 55–62 | [setup-test-selection-and-acquisitions](./setup-test-selection-and-acquisitions.md) |
| Setup panel — Configuration (Global Settings, CTLE optimization, Scope noise) | 63–67 | [setup-configuration](./setup-configuration.md) |
| Setup panel — Preferences | 68–70 | [setup-preferences-panel](./setup-preferences-panel.md) |
| Status panel — Test Status and Log View | 71–73 | [status-panel](./status-panel.md) |
| Results panel — View summary of test results | 74–75 | [results-panel](./results-panel.md) |
| Reports panel — Configure report generation, CXL Support, View settings | 76–82 | [reports-panel](./reports-panel.md) |
| Saving and recalling test setup | 83–92 | [saving-recalling-test-setup](./saving-recalling-test-setup.md) |
| Switch Matrix application — multi-lane RF switch configuration | 93–109 | [switch-matrix-application](./switch-matrix-application.md) |
| SCPI Commands — remote control reference | 110–157 | [scpi-commands](./scpi-commands.md) |
| References — directories, file formats, de-embed, setup files, SRIS Tx Test Board | 158–170 | [references-and-appendices](./references-and-appendices.md) |

## Processed in this pass

**Whole document.** All 15 logical sections of the TekExpress PCI Express Application Help — Welcome through References / How to run Base SRIS Tx Test Board tests — are chunked. No within-doc index appears in the printed TOC.

## Cross-references in the corpus

| Chunk | Cross-links to existing screens |
|---|---|
| `starting-application` | [`screens/setup-dut.md`](../../screens/setup-dut.md), [`screens/options-dropdown.md`](../../screens/options-dropdown.md), [`screens/setup-preferences-email-settings.md`](../../screens/setup-preferences-email-settings.md), [`screens/running-test.md`](../../screens/running-test.md) |
| `setup-dut-panel` | [`screens/setup-dut.md`](../../screens/setup-dut.md), [`screens/setup-dut-comments.md`](../../screens/setup-dut-comments.md), [`screens/setup-dut-session-browser.md`](../../screens/setup-dut-session-browser.md) |
| `setup-test-selection-and-acquisitions` | [`screens/setup-test-selection.md`](../../screens/setup-test-selection.md), [`screens/setup-acquisitions.md`](../../screens/setup-acquisitions.md), [`screens/setup-acquisitions-probe-config.md`](../../screens/setup-acquisitions-probe-config.md) |
| `setup-configuration` | [`screens/setup-test-selection-config.md`](../../screens/setup-test-selection-config.md), [`screens/setup-test-selection-limits-editor.md`](../../screens/setup-test-selection-limits-editor.md) |
| `setup-preferences-panel` | [`screens/setup-preferences.md`](../../screens/setup-preferences.md), [`screens/setup-preferences-email-settings.md`](../../screens/setup-preferences-email-settings.md) |
| `status-panel` | [`screens/status-test-status.md`](../../screens/status-test-status.md), [`screens/status-log-view.md`](../../screens/status-log-view.md) |
| `results-panel` | [`screens/results.md`](../../screens/results.md) |
| `reports-panel` | [`screens/reports-configuration.md`](../../screens/reports-configuration.md), [`screens/reports-view-settings.md`](../../screens/reports-view-settings.md), [`screens/plots.md`](../../screens/plots.md) |

The Manual references section of each cross-linked screen is back-updated to cite the corresponding chunk(s), in addition to any existing UI-audit and DDR5-manual cross-references.

## Open discrepancies surfaced by this pass

- **Plots panel referenced but no dedicated chapter.** The Application controls table (page 35) lists a Plots button between Results and Reports, and a Plots screen (`screens/plots.md`) exists in the corpus. The 2026-03 PDF Help has no standalone "Plots panel" chapter; plot imagery is referenced only via the Reports panel's "Include plot images" option (page 80) and the sample report figure on page 82. Either the PDF rendering of the Help dropped the Plots section, or the live application surfaces a Plots tab that the docs don't document in this release. Flagged in `starting-application` and `reports-panel` Confidence notes.
- **TekExpress part number placeholder.** The Product documents table (page 10) prints the Tektronix Part Number as `077-xxxx-xx` (literal placeholder). The cover page itself prints `077-1762-05`; preserved both.
- **Install path drift.** Getting started gives `C:\Program Files\Tektronix\TekExpress\TekExpress PCI Express`; the References > Application directories chapter (page 158) gives `C:\Program Files\Tektronix\PCI Express`. Both are transcribed verbatim where they appear.
- **MCR version drift.** The Software requirements table (page 13) calls out three different Matlab Compiler Runtime versions — v8.0 for DPOJET, v9.10 for Gen5 CEM/Base + Intel CJT refclock, v9.11 for Gen6 PAMJet — with manual install required on DPO 7 Series. Transcribed as printed.

## Cross-product applicability

`applies_to: [tek-express]` for every chunk. The PCI Express application is one of several TekExpress applications (alongside DDR Tx, USB3, DisplayPort Tx, etc.) whose CHM/PDF help files sit in `uploads/`; no cross-application content is in scope for this snapshot.
