---
provenance: observed
class: doc-section
doc_id: ui-audit
doc_title: "TekExpress AppEmulator — UI Component Report"
doc_date: 2026-05
applies_to: [tek-express]
section_id: navigation-components
section_title: Navigation Components
parent_section: null
page_range: "4"
related_screens: [setup-dut, setup-test-selection, setup-acquisitions, setup-preferences, status-test-status, status-log-view, results, plots, reports-configuration, reports-view-settings, options-dropdown]
related_hardware: []
---

# Navigation Components

## Summary

Four navigation component types, ~98 total instances across the application. These are the components that move the user between screens or between sub-views within a screen.

## Content

| Component | Location | Description | Screens | Count |
|---|---|---|---|---|
| Side navigation button | Setup · Status · Results · Plots · Reports | Vertical pill buttons on left rail. Active = orange; inactive = blue-grey. | All 11 screens | 60 |
| Wizard step indicator | Steps 1–4 inside Setup panel | Numbered circles (1–4) on amber progress bar. Completed = green checkmark; current = orange number. | Setup › DUT / Test Selection / Acquisitions / Preferences | 16 |
| Tab bar | Horizontal sub-view switcher | Pill tabs at panel level. Active = orange fill; inactive = white outline. | Status › Test Status / Log View; Reports › Configuration / View Settings | 10 |
| Options ▼ menu button | Top-right title bar | Small pill button top-right. Opens application-level options dropdown. | All 11 screens | 12 |

## Cross-references

- Side navigation buttons are persistent across every screen; documented in every screen `.md` as `nav-setup` / `nav-status` / etc.
- Wizard step indicators only appear on the four Setup screens: see [`setup-dut`](../../screens/setup-dut.md), [`setup-test-selection`](../../screens/setup-test-selection.md), [`setup-acquisitions`](../../screens/setup-acquisitions.md), [`setup-preferences`](../../screens/setup-preferences.md).
- Tab bars appear on Status and Reports: [`status-test-status`](../../screens/status-test-status.md), [`status-log-view`](../../screens/status-log-view.md), [`reports-configuration`](../../screens/reports-configuration.md), [`reports-view-settings`](../../screens/reports-view-settings.md).
- Options ▼ menu opens the dropdown documented at [`options-dropdown`](../../screens/options-dropdown.md).

## Confidence notes

- The "Count" column reflects the audit's instance count across the 11 base screens. The corpus's 17 chunks (which include dialogs) reuse the same persistent chrome — those instances are not counted separately here.
- "All 11 screens" count of 60 for side nav (=11×5 nav buttons + some over-count) ≈ 11 × 5 = 55. The audit's stated 60 may include the active-state pill rendering separately or count instances slightly differently. Inferred but not verified.
