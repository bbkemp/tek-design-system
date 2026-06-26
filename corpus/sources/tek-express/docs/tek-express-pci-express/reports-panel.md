---
class: doc-section
doc_id: tek-express-pci-express
doc_title: TekExpress® PCI Express Transmitter Compliance and Validation Software Application Help
doc_number: 077-1762-05
doc_date: 2026-03
applies_to: [tek-express]
section_id: reports-panel
section_title: Reports panel — Configure report generation settings, CXL support, View Settings, View generated report
parent_section: ""
page_range: "76-82"
related_screens: [reports-configuration, reports-view-settings]
related_hardware: []
---

# Reports panel — Configure report generation, CXL support, View Settings, View generated report

## Summary

Reports panel manages the post-run report deliverable. Two tabs configure (a) report generation settings — file format, location, content inclusion, and CXL-specific extensions — and (b) view settings (logo, group-by, contents-to-save selections). A separate "View a generated report" path opens completed reports in the default viewer.

## Content

### Report configuration settings (pg 76)

The Configuration tab covers:

- **Report Update Mode** — append to a single rolling report file vs. generate a new file per run
- **Report Creation Settings**
  - **Save report path** — destination folder + filename pattern
  - **Save As format** — `.mht`, `.pdf`, `.csv` (TekExpress reporting format breadth is one of two Tek-Lead dimensions in the [Tek-vs-Keysight competitive audit](../../../../../audits/competitive/2026-06-25-tek-express-vs-keysight-d9040dppc/))
  - **Include test results / pass-fail summary / waveform thumbnails** checkboxes

### CXL Support (pg 78)

PCIe-specific extension: Compute Express Link (CXL) testing modes. When the DUT is a CXL device, the report layout adjusts to include CXL-specific test categories alongside the PCIe Base spec tests. Configures:
- CXL specification version
- Per-mode (Type 1 / Type 2 / Type 3) report sections
- CXL/PCIe Tx parity testing inclusion

### Configure report view settings (pg 79)

The View Settings tab covers:
- **Contents To Save** — 9 checkboxes selecting which artifacts to embed in the report (waveform images, test parameters, limit definitions, scope settings, environment context, …)
- **User Logo** — optional branding embedded in the report header (checkbox + path + size hint)
- **Group Report By** — 2 radios selecting whether the report groups tests by suite or by pass/fail outcome

### View a generated report (pg 81)

Open a completed report in its native viewer (`.mht` opens in Edge / IE, `.pdf` in default PDF viewer, `.csv` in the default spreadsheet). The Reports panel persists the path to the last-generated report for one-click reopen.

## Cross-references

- **UI documented**: [`../../screens/reports-configuration.md`](../../screens/reports-configuration.md), [`../../screens/reports-view-settings.md`](../../screens/reports-view-settings.md). **Tab-content swap caveat** — the audit-vs-screenshot discrepancy in those files (audit says Configuration tab shows the View Settings controls and vice versa) is unresolved; this manual's pagination matches the audit document (Configuration on Tab 1, View Settings on Tab 2). The screen .md files trust the live screenshots; the manual may have swapped tabs in its prose.
- **Tek-Lead reporting dimensions** confirmed in the [competitive audit](../../../../../audits/competitive/2026-06-25-tek-express-vs-keysight-d9040dppc/): TekExpress wins on Report format breadth and Email notification depth; Keysight leads on web-repository upload (Cygnet) and per-failure detailed messages.
- **CXL Support** is a PCIe-specific feature; no equivalent in the DDR5 Tx manual or the AppEmulator framework manual.

## Confidence notes

- Sub-page coverage: Report configuration settings (76), CXL Support (78), Configure report view settings (79), View a generated report (81).
- **The audit-vs-screenshot tab-content swap caveat** for the Reports panel is unresolved across the corpus; this chunk follows the manual's TOC, the screen .md files trust the live screenshots, and the audit doc flags the discrepancy explicitly.
- CXL is included here as a Reports-panel feature per the TOC, but the CXL Support content likely also affects Test Selection (test categories) and Setup → DUT (CXL device type). Cross-references to those sections in the source PDF are not transcribed.
