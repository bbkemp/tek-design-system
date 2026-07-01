---
provenance: observed
class: doc-section
doc_id: tek-express-app-emulator
doc_title: "TekExpress AppEmulator Application Help"
doc_number: 077-xxxx-xx
doc_date: null
applies_to: [tek-express]
section_id: setup-preferences-panel
section_title: Setup panel — Preferences
parent_section: null
page_range: "95 to 100"
related_screens: [setup-preferences, setup-preferences-email-settings]
related_hardware: []
---

# Setup panel — Preferences

## Summary

The Preferences tab (final step of the Setup wizard) in AppEmulator. Controls execution-time behavior of the application: Execution Options (Highlight yellow warning if measured value is within `<no>` % margin of limit; Acquire/Analyze each test `<no>` times; Show alert when new deskew values are configured on TekScope; Enable Logging), Actions on Test Measurement Failure (On Test Failure, rerun that test `<no>` times; On Test Failure, pause the test and let me investigate; On Test Failure, stop and notify me of the failure — opens Email Settings), Popup Settings (Auto close Warnings and Informations during Sequencing with timeout; Auto close Error Messages during Sequencing with timeout; Show messages with a beep sound; Hide schematics popup while running the test for single test selection only; Manually configure Oscilloscope parameters; Capture Analysis Region Snapshot in the report).

## Content

### Preferences: Set the test run preferences

Use **Preferences** tab to set the application action on completion of a measurement. The **Preferences** tab has the feature to enable or disable certain options related to the measurement execution.

*Figure 1: Preferences tab* — Setup wizard with DUT checkmark, Test Selection checkmark, Acquisitions checkmark, 4 Preferences (highlighted). Three groups visible:

**Execution Options**:
- Highlight yellow warning if measured value is within `100` % margin of limit (checkbox)
- Acquire/Analyze each test `1` times (checkbox, checked)
- Show alert when new deskew values are configured on TekScope (checkbox, checked)
- Enable Logging (checkbox, checked)

**Actions on Test Measurement Failure**:
- On Test Failure, rerun that test `1` times (checkbox)
- On Test Failure, pause the test and let me investigate (checkbox)
- On Test Failure, stop and notify me of the failure (checkbox) + Email Settings button (blue)

**Popup Settings**:
- Auto close Warnings and Informations during Sequencing (checkbox) — Auto close after `10` seconds
- Auto close Error Messages during Sequencing (checkbox) — Auto close after `10` seconds
- Show messages with a beep sound (checkbox)

Status bar: `Ready.`

Refer the below table for the options available in the **Preferences** tab:

**Table 1. Preferences tab settings**

| Setting | Description |
|---|---|
| **Number of Runs** | *(section header)* |
| **Execution Options** | *(section header)* |
| Highlight yellow warning if measured value is within `<no>` % margin of limit | Select to highlight the measured value text in yellow color, when the margin value is within the specified limit. |
| Acquire/Analyze each test `<no>` times (not applicable to Custom Tests) | Select to repeat the test run by setting the number of times. By default, check box is disabled. Upon enabling, the default value is 10. Refer `Multi-Run description` to perform the measurements for a user defined number of iterations. |
| Show alert when new deskew values are configured on TekScope Actions on Test Measurement Failure | *(empty)* |
| Enable Logging | Select to record the actions of the user by the application. By default, it is selected. |
| **Actions on Test Measurement Failure** | *(section header)* |
| On Test Failure, rerun that test `<no>` times | Select to rerun the test for the specified number of time when the test execution is failed. |
| On Test Failure, pause the test and let me investigate | Select to pause the test run and allow you to investigate when the test execution is failed. |
| On Test Failure, stop and notify me of the failure | Select to stop the test run on Test Failure, and to get notified via email. By default, it is unselected. Click **Email Settings** to configure the email settings to receive notifications. |
| **Popup Settings** | *(section header)* |
| Auto close Warnings and informations during Sequencing Auto close after `<no>` seconds | Select to close the warnings and information window automatically after the specified amount of time. Specify the time in seconds using the edit box. |
| Auto close Error Messages during Sequencing. Show in Reports Auto close after `<no>` seconds | Select to close the error message window automatically after the specified amount of time. Specify the time in seconds using the edit box. |
| Show messages with a beep sound | Select to display the messages with the beep sound. |
| Hide schematics popup while running the test (for single test selection only) | Enable to hide schematics popup while running the single test. |
| Manually configure Oscilloscope parameters | *(empty)* |
| **Capture snapshot** | *(section header)* |
| Capture Analysis Region Snapshot | Enables the Analysis region snapshot in the report. |

## Cross-references

- [`screens/setup-preferences.md`](../../screens/setup-preferences.md) — the live Setup > Preferences screen in the corpus that Figure 1 captures.
- [`screens/setup-preferences-email-settings.md`](../../screens/setup-preferences-email-settings.md) — the Email Settings dialog reached by clicking the **Email Settings** button on this tab; full Email Settings procedure lives in `starting-application` (`Configure email settings`).
- `setup-test-selection-and-acquisitions` — the prior wizard tab.
- `references-and-appendices` — the `Multi-Run description` topic referenced from the Acquire/Analyze each test setting.
- `starting-application` — the Email Settings flow opened by the "On Test Failure, stop and notify me of the failure" option.

## Confidence notes

- Two table rows have empty Description cells in the source: "Show alert when new deskew values are configured on TekScope Actions on Test Measurement Failure" and "Manually configure Oscilloscope parameters". Preserved as printed.
- The "Show alert when new deskew values are configured on TekScope" cell concatenates with "Actions on Test Measurement Failure" — this appears to be a row-merge artifact between the "Show alert" row and the start of the next section header in the source. Documented exactly as printed.
- The Capture snapshot section has only one row (Capture Analysis Region Snapshot) — likely intended to have more rows.
- Acquire/Analyze each test description: "By default, check box is disabled. Upon enabling, the default value is 10." The Figure 1 screenshot shows the checkbox checked and value `1` — inconsistent with the description that says "the default value is 10". Preserved as printed.
