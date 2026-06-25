---
class: doc-section
doc_id: ui-audit
doc_title: "TekExpress AppEmulator — UI Component Report"
doc_date: 2026-05
applies_to: [tek-express]
section_id: outlined-pill-buttons
section_title: Outlined Pill Buttons (non-teal)
parent_section: null
page_range: "5"
related_screens: [results]
related_hardware: []
---

# Outlined Pill Buttons (non-teal)

## Summary

Two component instances total — the only two outlined-pill non-teal buttons in the entire application. Both live in the Results panel header.

These are visually distinct from the inline teal pill buttons (filled, teal) — outlined-only, with no teal accent. The audit calls them out as their own category because the visual difference is intentional: they are *secondary* actions that adjust the *view* of results, not destructive or run-controlling actions.

## Content

| Button | Location | Purpose | Count |
|---|---|---|---|
| Debug | Results panel header | Toggles debug output mode | 1 |
| Preferences ▼ | Results panel header | Opens results display preferences | 1 |

## Cross-references

- Both buttons documented on [`results.md`](../../screens/results.md) as `btn-debug` and `btn-preferences`.

## Confidence notes

- The Preferences ▼ button's ▼ glyph indicates a dropdown affordance, but the dropdown contents are not enumerated anywhere in the audit. Likely covers result-display column visibility, format (ps/ns/percent), pass/fail filter, etc. — typical results-table preferences.
- These two outlined buttons are the rarest button style in the application (2 instances out of ~292 total). Their visual distinctness suggests a deliberate hierarchy: outlined-non-teal = view-modifier, inline-teal = action, no-pill = nav.
