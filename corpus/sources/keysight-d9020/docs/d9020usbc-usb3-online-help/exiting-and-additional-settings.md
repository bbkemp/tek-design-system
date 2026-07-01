---
provenance: observed
class: doc-section
doc_id: d9020usbc-usb3-online-help
doc_title: Keysight D9020USBC/D9320USBC USB3.2 Test Application Online Help
doc_number: ""
doc_date: 2026-01
applies_to: [keysight-d9020]
section_id: exiting-and-additional-settings
section_title: Exiting the Test Application + Additional Settings in the Test App
parent_section: ""
page_range: ""
related_screens: []
related_hardware: []
---

# Exiting the Test Application + Additional Settings in the Test App

## Summary

Two short TOC entries folded into one chunk: closing the application (with save-state handling) and the **Additional Settings** dialog — the 8-tab Preferences modal (Run, Auto-save, Performance, Results, Display, Remote, Miscellaneous, Support) — that controls application-wide behavior beyond per-test configuration. The Preferences dialog is one of the highest-leverage UX surfaces in the application; documented in detail at `keysight-d9040/screens/preferences.md`.

## Content

### Exiting

`File ▶ Exit` (or window-close) closes the application. The exit handler:
- Prompts for unsaved project changes
- Releases the Resource Arbiter lock on the scope (so other applications can use the scope)
- Persists the current Preferences settings

### Additional Settings — the Preferences dialog

The Preferences dialog is a modal with 8 tabs documented at [`../../../keysight-d9040/screens/preferences.md`](../../../keysight-d9040/screens/preferences.md):

1. **Run** — execution behavior: continue on fail, retry count, store mode (Worst/All/N worst), result persistence
2. **Auto-save** — when to auto-save the project (after Run / before Exit / never), backup retention
3. **Performance** — multi-threading, parallel acquisition where supported, memory hints
4. **Results** — default display preferences, units, decimal precision
5. **Display** — UI scaling, theme (light/dark), font sizes, message-log behavior
6. **Remote** — SCPI / socket configuration, automation language preferences
7. **Miscellaneous** — paths, file extensions, project-on-launch behavior
8. **Support** — log verbosity, debug-mode toggle, support-bundle generation (for Keysight tech support)

### Where Preferences applies

Preferences settings are application-wide — they apply to every project loaded in the application, not per-project. This is distinct from Configure (which is per-test) and from the project itself (which is per-DUT).

## Cross-references

- **UI documented** in detail at [`../../../keysight-d9040/screens/preferences.md`](../../../keysight-d9040/screens/preferences.md) — 8 tabs folded as state variations.
- **Tek equivalent** at [`../../../tek-express/screens/setup-preferences.md`](../../../tek-express/screens/setup-preferences.md) + [`../../../tek-express/screens/setup-preferences-email-settings.md`](../../../tek-express/screens/setup-preferences-email-settings.md). TekExpress includes Preferences as Step 4 of the Setup wizard rather than as a separate Preferences modal.
- **Tek-vs-Keysight Preferences** competitive comparison in [`audits/competitive/2026-06-25-tek-express-vs-keysight-d9040dppc/`](../../../../../audits/competitive/2026-06-25-tek-express-vs-keysight-d9040dppc/): both vendors implement comparable Preferences surfaces; the architectural placement differs (Keysight modal vs Tek wizard-step).

## Confidence notes

- The "Additional Settings" TOC entry maps to what the documented `preferences.md` screen shows as a modal Preferences dialog with 8 tabs.
- Specific tab labels are verbatim from the D9040USBC screen documentation; D9020USBC may rename or omit specific tabs.
- The exit handler's Resource Arbiter lock release is documented in [`../../../keysight-d9040/screens/resource-arbiter.md`](../../../keysight-d9040/screens/resource-arbiter.md); confirms shared framework behavior.
