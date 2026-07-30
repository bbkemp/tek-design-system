# TekExpress® PCI Express Transmitter Compliance and Validation Software Application Help

**Doc ID:** `tek-express-pci-express` · **Doc number:** `077-1762-05` · **Published:** March 2026 · **Applies to:** `tek-express`

Generated **2026-06-26** by the `document-pdf` skill from `uploads/pdfs/TekExpress PCI Express Online Help.pdf`.

The TekExpress PCI Express Transmitter Compliance and Validation Software is Tektronix's automated PCIe Tx compliance application — covers Gen 3 / 4 / 5 / 6, multi-lane, CXL support, and SRIS reference-clock variants. Same TekExpress framework as the DDR5 Tx, AppEmulator, USB4, and DisplayPort variants — same Setup → Status → Results → Plots → Reports panel structure — with PCIe-specific test categories, CTLE optimization for Tx equalization, scope-noise compensation for jitter measurements, the **Switch Matrix companion application** for multi-lane routing, and dedicated Setup-DUT support for NI USB 6501 controllers.

## Sections

| Section | Pages | Chunk |
|---|---|---|
| Welcome, Getting help and support | 7–11 | [welcome-and-help](./welcome-and-help.md) |
| Getting started — Hardware/software requirements, instruments, software install | 12–17 | [getting-started](./getting-started.md) |
| Setting up the test environment — Equipment connection, prerequisites, deskew | 18–32 | [setting-up-test-environment](./setting-up-test-environment.md) |
| Starting the application — Application controls, Options menu, Instrument control, Email | 33–42 | [starting-application](./starting-application.md) |
| Setup panel — DUT, Filter setup, Automated DUT control (NI USB 6501), Multiple-session run | 43–54 | [setup-dut-panel](./setup-dut-panel.md) |
| Setup panel — Test Selection, Acquisitions | 55–62 | [setup-test-selection-and-acquisitions](./setup-test-selection-and-acquisitions.md) |
| Setup panel — Configuration (CTLE, scope noise), Preferences | 63–70 | [setup-configuration-and-preferences](./setup-configuration-and-preferences.md) |
| Status panel + Results panel | 71–75 | [status-and-results-panels](./status-and-results-panels.md) |
| Reports panel — Configure report generation, CXL support, View Settings, View generated report | 76–82 | [reports-panel](./reports-panel.md) |
| Saving and recalling test setup | 83–92 | [saving-recalling-test-setup](./saving-recalling-test-setup.md) |
| Switch Matrix application — PCIe-specific multi-lane routing companion app | 93–109 | [switch-matrix-application](./switch-matrix-application.md) |
| SCPI Commands — remote control reference (~48 command categories) | 110–157 | [scpi-commands](./scpi-commands.md) |
| References — Directories, file extensions, de-embed, Setup files, RF Switch config, SRIS Tx Test Board | 158–168 | [references-and-appendices](./references-and-appendices.md) |

## PCIe-specific deltas from the framework manuals

This manual shares the TekExpress framework (Setup → Status → Results → Plots → Reports IA, Options menu, SCPI surface, save/recall sessions) with the DDR5 Tx, AppEmulator, and DisplayPort variants. PCIe-specific features called out in dedicated sections:

| Feature | Section | Why PCIe-specific |
|---|---|---|
| **CTLE optimization** | `setup-configuration-and-preferences` | PCIe Gen 3+ Tx compliance requires reference-receiver equalization; the CTLE sweep finds the optimal parameter set |
| **Scope noise characterization + compensation** | `setup-configuration-and-preferences` | PCIe Gen 4+ jitter measurements require subtracting the scope's noise floor |
| **NI USB 6501 DUT Controller support** | `setup-dut-panel` | Specific automated DUT control pathway for the NI digital-IO module common in PCIe test benches |
| **CXL support** | `reports-panel` | Compute Express Link (CXL) testing modes layered on PCIe |
| **Switch Matrix application** | dedicated section + companion app | Multi-lane routing via external RF switch matrix; Keysight solves the same problem via the Resource Arbiter built into the D9040 framework |
| **PCIe Base SRIS Tx Test Board tests** | `references-and-appendices` | SRIS (Separate Reference Independent Spread Spectrum) test methodology for independent-reference-clock systems |

## Cross-references

- **Documented UI screens** for the AppEmulator framework: [`../../screens/`](../../screens/). The screen corpus describes Setup → Status → Results → Plots → Reports surfaces in framework-generic form; PCIe-specific test names appear in Test Selection at run time.
- **Sibling TekExpress variants**:
  - [`../tek-express-ddr5-tx-user-manual/`](../tek-express-ddr5-tx-user-manual/_index.md) — DDR5 Tx (15 chunks)
  - [`../tek-express-displayporttx/`](../tek-express-displayporttx/_index.md) — DisplayPort Tx base (6 chunks)
  - [`../tek-express-displayporttx-2-1/`](../tek-express-displayporttx-2-1/_index.md) — DisplayPort Tx 2.1 (5 chunks)
  - [`../tek-express-app-emulator/`](../tek-express-app-emulator/_index.md) — Reference / starter framework (11 chunks)
- **Tek-vs-Keysight competitive context** at [`audits/competitive/2026-06-25-tek-express-vs-keysight-d9040dppc/`](../../../../../audits/competitive/2026-06-25-tek-express-vs-keysight-d9040dppc/) — covers Tek-vs-Keysight on the platform level; PCIe-specific competitive dimensions (CTLE optimization, Switch Matrix vs Resource Arbiter) live there.
- **Customer signal for PCIe**: NVIDIA Bangalore's *"Gen4 was late by Tek, we moved to KS"* in [`../../decks/india-customer-voc-2023-march/empathy-map-nvidia.md`](../../decks/india-customer-voc-2023-march/empathy-map-nvidia.md). Time-to-market on new PCIe generations is competitive-existential.
- **TekFlow migration concern**: PCIe Tx customers will be forced onto TekFlow at Gen 6 + CEM testing — see [`corpus/sources/tek-flow/walkthroughs/customer-feedback-thread.md`](../../../tek-flow/walkthroughs/customer-feedback-thread.md). Session file portability and SCPI command continuity between this product and the TekFlow equivalent are on the critical path.

## Confidence notes

- The 13 chunks cover the full TOC at the major-section granularity.
- Sub-page details (specific dialog field names, parameter ranges, error codes) are summarized rather than transcribed verbatim — refer to the source PDF for precision.
- The earlier 3 chunks (welcome-and-help, getting-started, setting-up-test-environment) were landed in PR #90; the remaining 10 chunks plus this updated _index.md landed in the deferred-PDF follow-up PR.
