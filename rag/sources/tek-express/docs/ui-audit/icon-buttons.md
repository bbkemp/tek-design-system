---
class: doc-section
doc_id: ui-audit
doc_title: "TekExpress AppEmulator — UI Component Report"
doc_date: 2026-05
applies_to: [tek-express]
section_id: icon-buttons
section_title: Icon Buttons
parent_section: null
page_range: "6"
related_screens: [setup-dut, reports-view-settings, reports-configuration]
related_hardware: []
---

# Icon Buttons

## Summary

Six component types totalling 39 instances. Buttons rendered as a single icon (no text label), placed inline with form fields or in window chrome.

Three "in-app" icon buttons (Edit/pencil, Session browser, Logo picker) appear in form inline contexts; three are OS-style window-chrome icons (Mail, Minimise, Close) appearing in the top-right window chrome on every screen.

## Content

| Component | Position | Description | Screens | Count |
|---|---|---|---|---|
| Edit / pencil icon | Inline with field label | Triggers inline editing of adjacent field | Setup › DUT (DUT ID), Reports › Configuration (user comments) | 2 |
| Session '…' browser | Inline with 'Session : Default' | Opens session selection dialog | Setup › DUT | 1 |
| Logo '…' file picker | Inline with User Logo input | Opens file picker for user logo (200×45 px) | Reports › Configuration, Reports › Configuration + Modal | 2 |
| Window: mail icon | Top-right window chrome | Envelope icon. Application-level email/export | All 11 screens | 12 |
| Window: minimise | Top-right window chrome | Standard OS minimise control | All 11 screens | 12 |
| Window: close | Top-right window chrome | Standard OS close/exit control | All 11 screens | 12 |

## Cross-references

- Edit/pencil icon (DUT ID) → [`setup-dut.md`](../../screens/setup-dut.md) (`dut-id-edit`).
- Edit/pencil icon (user comments) → [`reports-view-settings.md`](../../screens/reports-view-settings.md) (`btn-edit-user-comments`). *Note: the audit says this lives on Reports › Configuration; the corpus places it on View Settings per the live screenshots. Audit-mismatch flagged in [`reports-configuration.md`](../../screens/reports-configuration.md).*
- Session '…' browser → [`setup-dut.md`](../../screens/setup-dut.md) (`session-select`). Launches the [`setup-dut-session-browser`](../../screens/setup-dut-session-browser.md) dialog.
- Logo '…' file picker → [`reports-view-settings.md`](../../screens/reports-view-settings.md) (`user-logo-preview`). *Same audit-mismatch note.*
- Window chrome icons documented as `window-controls` on every screen `.md`.

## Confidence notes

- The audit's "Window: mail" icon is unusual for desktop chrome — most Windows apps don't expose a mail icon in their window chrome. Likely a TekExpress-specific affordance for triggering Email Settings or exporting via email.
- The audit's per-screen counts of 12 for the three window-chrome icons assume each of the 11 base screens carries them; the 12th instance likely accounts for the running-test minimised window.
