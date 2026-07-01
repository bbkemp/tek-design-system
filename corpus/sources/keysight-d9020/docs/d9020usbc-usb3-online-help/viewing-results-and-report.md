---
provenance: observed
class: doc-section
doc_id: d9020usbc-usb3-online-help
doc_title: Keysight D9020USBC/D9320USBC USB3.2 Test Application Online Help
doc_number: ""
doc_date: 2026-01
applies_to: [keysight-d9020]
section_id: viewing-results-and-report
section_title: Viewing Results and Viewing HTML Test Report
parent_section: ""
page_range: ""
related_screens: []
related_hardware: []
---

# Viewing Results and Viewing HTML Test Report

## Summary

Two TOC entries folded into one chunk because they share a UI surface: post-test result review. The **Results** tab shows per-test pass/fail summary with a measurement-detail and visualization pane. The **HTML Test Report** tab opens the generated standalone HTML report with full test details, configuration, and audit trail. The HTML report is the deliverable shared with customers / submitted for compliance certification.

## Content

### Results tab

The Results tab presents:
- **Results table** — one row per test with columns: Test Name, Result (Pass/Fail), Test Number / Iteration, Details, Measured Value, Margin, Units, Trial Run
- **Visualization pane** — when a result row is selected, shows the relevant waveform / eye diagram / measurement plot
- **Parameter detail pane** — collapsible per-row drill-down

### HTML Test Report tab

Opens the generated HTML report — a self-contained, browser-renderable document with:
- Cover page (DUT identity, run timestamp, software version, license info)
- Per-test summary table (Pass/Fail across all)
- Per-test detail pages (measured value, margin, limit, waveform, configuration)
- Compliance footer (USB-IF reference document version, software version, signing block)

The report header in the D9040USBC documented version reads:
> Compliance Limits "USB4 Specification Version 2.00 (official)"

D9020USBC equivalent will reference the USB3.2 spec version actively loaded.

### Report storage

The report file lives in the project's results subdirectory; the report path is also accessible via automation queries.

### View settings

The HTML Test Report tab includes view controls:
- Filter by Pass/Fail
- Filter by test category
- Group by lane / test number

## Cross-references

- **UI documented** at [`../../../keysight-d9040/screens/results.md`](../../../keysight-d9040/screens/results.md) (Results tab) and [`../../../keysight-d9040/screens/html-report.md`](../../../keysight-d9040/screens/html-report.md) (HTML Test Report — extensively detailed, including the version-footer convention).
- **The HTML report's `Last Test Date: 0001-01-01 00:00:00 UTC +08:00` confidence note** in [`../../../keysight-d9040/screens/html-report.md`](../../../keysight-d9040/screens/html-report.md) flags a .NET DateTime.MinValue sentinel — the last-test-date field appears unset in the captured screenshot. Same artifact may surface in D9020USBC.
- **Tek equivalent** at [`../../../tek-express/screens/results.md`](../../../tek-express/screens/results.md) and [`../../../tek-express/docs/tek-express-pci-express/reports-panel.md`](../../../tek-express/docs/tek-express-pci-express/reports-panel.md). TekExpress and Keysight both ship comparable HTML reports; the **competitive audit** at [`audits/competitive/2026-06-25-tek-express-vs-keysight-d9040dppc/`](../../../../../audits/competitive/2026-06-25-tek-express-vs-keysight-d9040dppc/) lists report format breadth (`.mht`/`.pdf`/`.csv` for Tek vs `HTML + CSV export` for Keysight) as a TekExpress-Lead dimension.

## Confidence notes

- Two TOC entries combined because they share UI architecture and post-test purpose.
- The HTML Report's appearance + structure is observable from the documented [`../../../keysight-d9040/screens/html-report.md`](../../../keysight-d9040/screens/html-report.md) screen; USB3.2 spec references will differ from USB4 spec references.
- The "Trial Run" column in the Results table is observed in [`keysight-d9040/screens/results.md`](../../../keysight-d9040/screens/results.md); confirms the framework-shared shape.
