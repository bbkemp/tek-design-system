---
provenance: observed
class: doc-section
doc_id: tek-express-pci-express
doc_title: TekExpress® PCI Express Transmitter Compliance and Validation Software Application Help
doc_number: 077-1762-05
doc_date: 2026-03
applies_to: [tek-express]
section_id: references-and-appendices
section_title: References — Application directories, file extensions, view test-related files, de-embed, Setup files, RF Switch config files, SRIS Tx Test Board
parent_section: ""
page_range: "158-168"
related_screens: []
related_hardware: []
---

# References — Application directories, file extensions, view test-related files, de-embed, Setup files, RF Switch config files, SRIS Tx Test Board

## Summary

The References appendix collects reference material that doesn't fit a single panel — application install/data directory layout, file-name extensions used by the application, de-embedding pipeline reference, the format of Setup files, RF Switch configuration file format, and the procedure for running PCIe Base SRIS Tx Test Board tests.

## Content

### Application directories (pg 158)

The default install paths and per-user data paths for the TekExpress PCIe application:
- **Install directory** — typically `C:\Program Files\Tektronix\TekExpress\TekExpress PCI Express\`
- **User data** — usually `C:\Users\<user>\My TekExpress\PCI Express\` (sessions, results, reports)
- **Shared data** — config files for instrument discovery, default limits, MOI documents

### File name extensions (pg 158)

The complete inventory of file extensions used by the application — `.tex` for sessions (or similar), `.csv` / `.mht` / `.pdf` for reports, `.wfm` / `.h5` for waveforms, `.flt` for de-embedding filters, `.smc` for Switch Matrix configurations, `.smde` for switch de-embedding, plus internal log/metadata files. Refer to the source PDF for the canonical list.

### View test-related files (pg 159)

How to inspect the per-test artifacts after a run:
- Path discovery (per-session subfolder)
- Direct file access vs in-application viewer
- File organization (acquisitions / images / logs subfolders)

### De-embed using filter files (pg 159)

Detail on the de-embedding workflow: how a `.flt` filter file is structured, how the application applies it during acquisition, how to author or modify a filter for a custom fixture. Pairs with the Filter setup dialog in the Setup → DUT panel.

### Setup files (pg 161)

The structure of a saved Setup file — what fields are persisted, the version compatibility model, and how Setup files are migrated forward when the application updates. Useful for users who manage Setup files via scripts or version control.

#### RF Switch configuration files (pg 166)

Sub-section: the format of `.smc` files written by the Switch Matrix application. Documents the schema (XML or proprietary), the relationship between Switch Matrix configurations and TekExpress Setup files, and any version constraints.

### How to run Base SRIS Tx Test Board tests (pg 168)

End-of-manual procedural: setup steps for running PCIe Base SRIS (Separate Reference Independent Spread Spectrum) Tx Test Board tests. SRIS is a specific PCIe Tx test methodology relevant for systems with independent reference clocks (vs common-clock); has its own measurement requirements and DUT setup.

## Cross-references

- **De-embedding pipeline**: Filter setup dialog documented in [`setup-dut-panel.md`](./setup-dut-panel.md) (pg 49). The reference here adds the underlying `.flt` file format detail.
- **Setup file inspection**: This section enables the manual + scripted session management mentioned in [`saving-recalling-test-setup.md`](./saving-recalling-test-setup.md).
- **Switch Matrix `.smc` files**: companion to the Switch Matrix application detail in [`switch-matrix-application.md`](./switch-matrix-application.md).
- **Sibling appendix references**: [`../tek-express-ddr5-tx-user-manual/references-and-appendices.md`](../tek-express-ddr5-tx-user-manual/references-and-appendices.md) — DDR5 has its own references appendix; structures are similar across variants but per-variant files differ.

## Confidence notes

- Page coverage 158-168 per the TOC.
- File extensions list (page 158) is referenced at category level; the canonical list and per-extension purpose require the source PDF.
- "Base SRIS Tx Test Board tests" is a specific PCIe-spec term — SRIS = Separate Reference Independent Spread Spectrum. Procedure exists because SRIS-mode DUTs require different reference-clock recovery + jitter analysis than common-clock DUTs.
- Setup file structure (page 161) is described at category level; reverse-engineering or scripting against Setup files should reference the source PDF.
