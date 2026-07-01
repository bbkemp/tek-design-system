---
provenance: observed
class: doc-section
doc_id: ui-audit
doc_title: "TekExpress AppEmulator — UI Component Report"
doc_date: 2026-05
applies_to: [tek-express]
section_id: form-inputs
section_title: Form Input Components
parent_section: null
page_range: "6"
related_screens: [setup-dut, setup-test-selection, setup-acquisitions, setup-preferences, setup-preferences-email-settings, reports-configuration, reports-view-settings, status-log-view]
related_hardware: []
---

# Form Input Components

## Summary

Five form-input component types totalling ~60 instances. The application is form-heavy — the Setup wizard's four screens drive most of these instances.

## Content

| Component | Instances detail | Screens | Count |
|---|---|---|---|
| Checkbox (checked · unchecked · disabled) | Setup › Preferences (10) · Reports › Configuration (9) · Reports › View Settings (3) · Reports › Configuration + Modal · Status › Log View (1) · User Logo (1) · Setup › Acquisitions (2) | Setup › Preferences / Acquisitions; Reports › Configuration / View Settings; Status › Log View | 26 |
| Radio button (orange-ring, mutually exclusive) | Setup › DUT (2) · Setup › Acquisitions (3) · Reports › Configuration (2) · Reports › View Settings (5) | Setup › DUT / Acquisitions; Reports › Configuration / View Settings | 12 |
| Dropdown / select (label + value + ▼) | Setup › DUT (8) · Setup › Acquisitions (3) · Reports › View Settings (1) | Setup › DUT / Acquisitions; Reports › View Settings | 12 |
| Text input field (single-line) | Setup › DUT (3) · Setup › Preferences (5) · Reports › View Settings (1) | Setup › DUT / Preferences; Reports › View Settings | 9 |
| Checkbox tree (hierarchical expand/collapse) | 4 parent groups, 5 child items: Algorithm Library · SCOPE Measurements · DPOJET Measurements · Autoset | Setup › Test Selection | 1 tree (9 nodes) |

## Cross-references

- Checkbox instances: [`setup-preferences.md`](../../screens/setup-preferences.md), [`reports-configuration.md`](../../screens/reports-configuration.md), [`reports-view-settings.md`](../../screens/reports-view-settings.md), [`status-log-view.md`](../../screens/status-log-view.md) (`chk-auto-scroll`), [`setup-acquisitions.md`](../../screens/setup-acquisitions.md) (`chk-show-acquire-parameters`).
- Radio button instances: [`setup-dut.md`](../../screens/setup-dut.md) (`acquire-mode-live`/`acquire-mode-prerecorded`), [`setup-acquisitions.md`](../../screens/setup-acquisitions.md) (Acquisition & Save Options 3 radios — partially visible in audit), [`reports-configuration.md`](../../screens/reports-configuration.md) (`radio-generate-new`, `radio-append`, `radio-replace` + sub-radios), [`reports-view-settings.md`](../../screens/reports-view-settings.md) (`radio-group-test-name`, `radio-group-test-result`).
- Dropdown instances: [`setup-dut.md`](../../screens/setup-dut.md) carries 8 (View, Session, Device, Suite, Version, Probing Type, SSC, Analyze on Golden Waveforms, Show Model Information — actually 9, but the audit counts 8).
- Text inputs: [`setup-dut.md`](../../screens/setup-dut.md) (DUT ID, Vertical Offset, Signal Validation Threshold), [`setup-preferences.md`](../../screens/setup-preferences.md) (inline numeric inputs).
- Checkbox tree: unique to [`setup-test-selection.md`](../../screens/setup-test-selection.md). The audit notes 4 parent groups + 5 child items = 9 nodes.

## Confidence notes

- The audit's per-screen counts may differ from the live screenshots by 1–2 because the audit was prepared from 12 screenshots (one per base screen) while the corpus uses 21 screenshots (including state variations that expose additional inputs).
- The audit's checkbox-tree node count "4 parent groups, 5 child items" yields 9 total nodes, which matches the corpus chunk's enumeration on [`setup-test-selection.md`](../../screens/setup-test-selection.md).
- The Reports panel checkboxes are split 9/3 across Configuration / View Settings per the audit — but the corpus puts 9 checkboxes (Contents To Save) on View Settings and 3 (`chk-auto-increment`, `chk-create-automatically`, `chk-view-after-generating`) plus 1 conditional (`chk-include-header-on-append`) on Configuration. Same audit-tab-mismatch as flagged elsewhere.
- The Email Settings dialog ([`setup-preferences-email-settings.md`](../../screens/setup-preferences-email-settings.md)) contains additional form inputs (recipient, sender, SMTP fields, etc.) that the audit does not separately enumerate — likely because the audit treated the dialog as state inside Preferences rather than its own screen.
