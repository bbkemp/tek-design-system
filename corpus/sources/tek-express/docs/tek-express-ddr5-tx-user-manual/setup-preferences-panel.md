---
class: doc-section
doc_id: tek-express-ddr5-tx-user-manual
doc_title: "TekExpress DDR Tx Compliance and Debug Automation Software Application Help"
doc_number: 077-1648-04
doc_date: 2025-08
applies_to: [tek-express]
section_id: setup-preferences-panel
section_title: Setup panel — Preferences
parent_section: null
page_range: "40 to 41"
related_screens: [setup-preferences, setup-preferences-email-settings]
related_hardware: []
---

# Setup panel — Preferences

## Summary

Wizard step 5 of the Setup panel. Three control groups: **Execution Options** (Acquire/Analyze each test N times; Enable Logging — on by default; Show alert when new deskew values are configured on TekScope), **Actions on Test Measurement Failure** (On Test Failure, stop and notify me of the failure — gated by Email Settings), and **Popup Settings** (Auto close Warnings and informations during Sequencing after N seconds; Auto close Error Messages during Sequencing, Show in Reports, after N seconds). The Preferences tab is what governs how the application behaves *while a run is in progress* — distinct from the Reports panel which governs how output is *generated*.

## Content

### Preferences: Set the test run preferences

Use **Preferences** tab to set the application action on completion of a measurement. The **Preferences** tab has the feature to enable or disable certain options related to the measurement execution.

*Figure 23: Preferences tab* — Setup panel with steps 1–4 checked, step 5 Preferences active. Execution Options group: Acquire/Analyze each test `2` times (checkbox); Enable Logging (checkbox). Actions on Test Measurement Failure group: On Test Failure, stop and notify me of the failure (checkbox); Email Settings button. Popup Settings group: Auto close Warnings and informations during Sequencing (checkbox); Auto close after `10` seconds; Auto close Error Messages during Sequencing (checkbox); Auto close after `10` seconds. Status bar: "Ready.".

Refer the below table for the options available in the **Preferences** tab:

| Setting | Description |
|---|---|
| **Execution Options** | |
| Show alert when new deskew values are configured on TekScope | Select to display the alert when new deskew values are configured on TekScope. |
| Enable Logging | Select to record the actions of the user by the application. By default, it is selected. |
| **Actions on Test Measurement Failure** | |
| On Test Failure, stop and notify me of the failure | Select to stop the test run on Test Failure, and to get notified via email. By default, it is unselected. Click **Email Settings** to configure the email settings to receive notifications. |
| **Popup Settings** | |
| Auto close Warnings and informations during Sequencing — Auto close after `<no>` seconds | Select to close the warnings and information window automatically after the specified amount of time. Specify the time in seconds using the edit box. |
| Auto close Error Messages during Sequencing. Show in Reports — Auto close after `<no>` seconds | Select to close the error message window automatically after the specified amount of time. Specify the time in seconds using the edit box. |

## Cross-references

- [`screens/setup-preferences.md`](../../screens/setup-preferences.md) — live Setup › Preferences screen.
- [`screens/setup-preferences-email-settings.md`](../../screens/setup-preferences-email-settings.md) — the Email Settings dialog invoked by the Email Settings button on this tab; same dialog as the one accessed via Options menu.
- `starting-application` — full Email Settings procedure (SMTP host, port, attachments, send rules).
- `setting-up-test-environment` — Start button triggers the run that these preferences govern.
- `reports-panel` — Reports tab governs *output* on completion; this Preferences tab governs *behavior during execution*.

## Confidence notes

- The text *Figure 23* shows "Acquire/Analyze each test `2` times" as the Execution Options checkbox label, but the Settings table entry uses "Show alert when new deskew values are configured on TekScope" — these are two separate Execution Options rows; the manual table lists both. The Acquire/Analyze row is not given its own table entry in the source but is visible in the figure.
- "Auto close after `<no>` seconds" is the manual's literal placeholder notation for the seconds field; preserved as printed.
