---
class: doc-section
doc_id: ui-audit
doc_title: "TekExpress AppEmulator — UI Component Report"
doc_date: 2026-05
applies_to: [tek-express]
section_id: feedback-overlays
section_title: Feedback & Overlay Components
parent_section: null
page_range: "7"
related_screens: [reports-configuration]
related_hardware: []
---

# Feedback & Overlay Components

## Summary

One component type, one instance. The application has a single documented modal alert dialog — triggered when the user clicks View on Reports › Configuration before a report has been generated.

## Content

| Component | Description | Screen / Trigger | Count |
|---|---|---|---|
| Modal / alert dialog (blocking dark overlay) | Dark fullscreen overlay. Inner panel: blue info icon + message "Report file not generated or does not exist. Run a test to generate a report." + OK dismiss button. Blocks all interaction. | Reports › Configuration + Modal | 1 |

## Cross-references

- The modal is launched from [`reports-configuration.md`](../../screens/reports-configuration.md) (`btn-view`) when no report exists yet.
- The full dialog state would be documented at a pending `screens/reports-configuration-modal.md` — no source photo for this state is currently in `uploads/photos/`.

## Confidence notes

- The audit lists only one feedback/overlay component instance, but the application has at least several other dialog surfaces that arguably qualify (Setup › DUT — Comments popup, Setup › DUT — Session browser, Setup › Test Selection — Configure / Limits Editor, Setup › Acquisitions — Probe Config, Setup › Preferences — Email Settings, Options dropdown). The audit's narrower definition of "Feedback & Overlay" appears to mean *alert / blocking modal* specifically — a single info-with-OK dialog — not every dialog surface.
- This narrow definition is worth preserving in the redesign — the DS-v2 mapping should distinguish an *alert* (blocking, single message, single OK) from a *configuration dialog* (form, multi-action, OK/Cancel). The legacy app conflates them visually but the audit author drew a clean line.
- No additional feedback patterns documented: no toasts, no inline validation banners, no loading spinners (the status bar serves that role). Worth verifying on the live build.
