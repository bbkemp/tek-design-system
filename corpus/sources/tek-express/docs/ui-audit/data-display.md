---
class: doc-section
doc_id: ui-audit
doc_title: "TekExpress AppEmulator — UI Component Report"
doc_date: 2026-05
applies_to: [tek-express]
section_id: data-display
section_title: Data Display Components
parent_section: null
page_range: "7"
related_screens: [setup-dut, setup-acquisitions, status-test-status, status-log-view, results, plots, setup-test-selection, setup-preferences, reports-configuration, reports-view-settings]
related_hardware: []
---

# Data Display Components

## Summary

Six component types totalling ~45 instances. These are read-only or display-driven components — tables, scrollable regions, status indicators, group containers, title bars.

The "Labelled group box" is the dominant containment pattern in the application (14 instances) — every form on a Setup screen is wrapped in one.

## Content

| Component | Description / content | Screens | Count |
|---|---|---|---|
| Data table (blue header grid) | Setup › Acquisitions: Test Name · Acquisition — 2 rows · Status › Test Status: 4 cols — 2 rows · Results: 7 cols — empty | Setup › Acquisitions, Status › Test Status, Results | 3 |
| Labelled group box (titled section container) | Setup › Preferences (3) · Setup › Acquisitions (3) · Setup › DUT (3) · Reports › Configuration (3) · Reports › View Settings (2) | Setup (DUT/Acq/Pref), Reports (Config/ViewSettings) | 14 |
| Text area / scrollable region | Setup › Test Selection: 'Test Description' placeholder · Status › Log View: 'Message History' scrollable log | Setup › Test Selection, Status › Log View | 2 |
| Empty state placeholder | Displays 'Plots Not Available' centred. No icon or sub-text. Appears in unsaved (asterisk) and saved state. | Plots (×2 screenshots) | 2 |
| Status bar | Thin persistent bar at window bottom. Displays state text ("Ready.") with progress indicator. | All 11 screens | 12 |
| Title bar header | Shows 'TekExpress AppEmulator – (Untitled)*'. Asterisk = unsaved. Tektronix logo on left. | All 11 screens | 12 |

## Cross-references

- Data tables: [`setup-acquisitions.md`](../../screens/setup-acquisitions.md) (`acquisition-table`), [`status-test-status.md`](../../screens/status-test-status.md) (`status-table`), [`results.md`](../../screens/results.md) (`results-table`).
- Labelled group boxes: every Setup screen's form regions ([`setup-dut.md`](../../screens/setup-dut.md) Device Profile / Device Characteristics / Execution Settings; [`setup-acquisitions.md`](../../screens/setup-acquisitions.md); [`setup-preferences.md`](../../screens/setup-preferences.md) Execution Options / Failure Actions / Popup Settings; [`reports-configuration.md`](../../screens/reports-configuration.md); [`reports-view-settings.md`](../../screens/reports-view-settings.md)).
- Text areas: [`setup-test-selection.md`](../../screens/setup-test-selection.md) (`test-description`), [`status-log-view.md`](../../screens/status-log-view.md) (`message-history`).
- Empty state: [`plots.md`](../../screens/plots.md) (corpus screenshot captures the populated state; the empty state is described as a State variation).
- Status bar: every screen's `status-bar` control.
- Title bar header: every screen's `title-bar` control.

## Confidence notes

- The audit's count of 14 labelled group boxes does not include the Email Settings dialog's group boxes (Email Attachments / Server Configuration / Email Configuration), the Test Selection Configure dialog's group boxes, or the various dialog-internal sub-sections. The 14 count is the *base-screen* count; dialogs add more.
- "Empty state placeholder" appearing only on Plots is the only true empty-state pattern in the application — every other screen has at least minimum chrome populated. Worth considering whether the redesign generalizes this pattern to other potentially-empty screens (Results before a run, Status › Log View before a run).
- The Title bar count of 12 (across "All 11 screens") includes the running-test minimised window as a 12th title-bar instance — consistent with the navigation-components count.
