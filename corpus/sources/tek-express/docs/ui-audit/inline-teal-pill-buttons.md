---
provenance: observed
class: doc-section
doc_id: ui-audit
doc_title: "TekExpress AppEmulator — UI Component Report"
doc_date: 2026-05
applies_to: [tek-express]
section_id: inline-teal-pill-buttons
section_title: Inline Teal Pill Action Buttons
parent_section: null
page_range: "4 to 5"
related_screens: [setup-acquisitions, setup-test-selection, setup-preferences, reports-configuration, reports-view-settings, status-log-view]
related_hardware: []
---

# Inline Teal Pill Action Buttons

## Summary

The application's dominant inline-action button style — small teal-coloured pill buttons placed inline with form content. 16 distinct labels totalling 22 instances across the application. Used for every per-screen action that isn't a navigation pill or a destructive control.

The "teal pill" style is functionally what the Tek Design System v2 maps to a primary or secondary `tek-button` in the redesign — verify against the DS audit (`audits/prototype/.../report.md`).

## Content

| Button label(s) | Screen(s) |
|---|---|
| Refresh Sources / View Probes | Setup › Acquisitions |
| Deselect All / Select Required / Select All | Setup › Test Selection |
| Show MOI / Schematic / Configure | Setup › Test Selection |
| Email Settings | Setup › Preferences |
| View / Generate / Save As | Reports › Configuration · Configuration + Modal · View Settings |
| Clear Log / Save… | Status › Log View |
| OK | Reports › Configuration + Modal (dialog dismiss) |
| Browse | Reports › View Settings |

## Cross-references

- Setup › Acquisitions buttons → [`setup-acquisitions.md`](../../screens/setup-acquisitions.md) (`btn-refresh-sources`, `btn-view-probes`).
- Setup › Test Selection bulk-select trio + Show MOI / Schematic / Configure → [`setup-test-selection.md`](../../screens/setup-test-selection.md) (`btn-deselect-all`, `btn-select-required`, `btn-select-all`, `btn-show-moi`, `btn-schematic`, `btn-configure`).
- Setup › Preferences Email Settings → [`setup-preferences.md`](../../screens/setup-preferences.md) (`btn-email-settings`).
- Reports action trio → [`reports-configuration.md`](../../screens/reports-configuration.md) and [`reports-view-settings.md`](../../screens/reports-view-settings.md) (`btn-view`, `btn-generate`, `btn-save-as`).
- Status › Log View → [`status-log-view.md`](../../screens/status-log-view.md) (`btn-clear-log`, `btn-save`).
- Reports modal OK → pending `reports-configuration-modal.md`.

## Confidence notes

- The audit lists OK as appearing in the Reports modal. Other dialogs also use OK / Cancel buttons (e.g. Setup › DUT — Comments popup `btn-ok`, Setup › Test Selection — Limits Editor `btn-ok`); the audit may be under-counting because those dialogs were not separately enumerated.
- The Browse button under Reports › View Settings is one instance per the audit's count of 22 — but Reports also has a Browse button on the Configuration sub-tab path input, and Setup › DUT has a Session-browser (`…`) button. The audit may be using a narrower definition of "Browse" or counting only the teal-pill instance specifically.
