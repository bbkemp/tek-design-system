---
software: TekExpress AppEmulator
software_version: TBD
screen_id: setup-preferences-email-settings
screen_title: Setup › Preferences — Email Settings
screen_type: dialog
image: setup-preferences-email-settings.jpg
source_photo: uploads/photos/11. Setup-Preferences_Email Settings.png
navigation_path: [Setup, Preferences, Email Settings]
parent_screens: [setup-preferences]
child_screens: []
applies_to: [tek-express]
related_screens: [setup-preferences]
related_hardware: []
related_modules: []
controls:
  - id: dialog-title
    label: Email Settings
    type: indicator
    state: active
    action: Dialog title bar over the Preferences screen.
  - id: dialog-close
    label: ""
    type: button
    state: enabled
    action: Standard close (X) in dialog title bar.
  - id: input-recipient
    label: "Recipient e-mail Address(es)"
    type: input
    state: enabled
    action: Comma-separated recipient list. Empty in this screenshot. Hint "Note: Separate Email addresses with a comma" sits below.
  - id: input-sender
    label: "Sender's Address"
    type: input
    state: enabled
    action: Sender email address. Empty in this screenshot.
  - id: email-attachments-group
    label: Email Attachments
    type: indicator
    state: enabled
    action: Group-box heading for what to attach.
  - id: chk-attach-reports
    label: Reports
    type: checkbox
    state: enabled
    action: Unchecked. When on, attaches the generated report to outgoing emails.
  - id: status-log-label
    label: Status Log
    type: indicator
    state: enabled
    action: Label for the Status Log radio pair.
  - id: radio-status-log-last-20
    label: Last 20 Lines
    type: radio
    state: active
    action: Status-log attachment scope. Currently selected (sends only the last 20 lines).
  - id: radio-status-log-full
    label: Full Log
    type: radio
    state: enabled
    action: Status-log attachment scope, alternative (sends the entire log).
  - id: server-config-group
    label: Server Configuration
    type: indicator
    state: enabled
    action: Group-box heading for SMTP server settings.
  - id: input-smtp-server
    label: SMTP Server
    type: input
    state: enabled
    action: SMTP server hostname / IP. Empty in this screenshot.
  - id: input-smtp-port
    label: SMTP Port
    type: input
    state: enabled
    action: SMTP server port. Empty in this screenshot.
  - id: input-login
    label: Login
    type: input
    state: enabled
    action: SMTP auth username. Empty.
  - id: input-password
    label: Password
    type: input
    state: enabled
    action: SMTP auth password input. Empty. (Masking expected but not visible in the empty state.)
  - id: chk-enable-ssl
    label: Enable SSL
    type: checkbox
    state: enabled
    action: Unchecked. Toggles SSL/TLS encryption for SMTP.
  - id: email-config-group
    label: Email Configuration
    type: indicator
    state: enabled
    action: Group-box heading for sending parameters.
  - id: input-max-email-size
    label: "Max Email Size (MB)"
    type: input
    state: enabled
    action: Maximum outbound email size. Current 0.
  - id: input-num-attempts
    label: Number of Attempts to Send
    type: input
    state: enabled
    action: Retry count for failed sends. Current 0.
  - id: input-timeout
    label: "Timeout (Sec)"
    type: input
    state: enabled
    action: Send-timeout in seconds. Current 0.
  - id: chk-email-test-results
    label: Email Test Results When complete or on error
    type: checkbox
    state: enabled
    action: Master toggle — when on, the application emails results at run completion or on error. Unchecked in this screenshot.
  - id: btn-test-email
    label: Test Email
    type: button
    state: enabled
    action: Sends a test email using the current settings to validate the SMTP configuration.
  - id: btn-apply
    label: Apply
    type: button
    state: enabled
    action: Saves the settings without closing the dialog.
  - id: btn-close
    label: Close
    type: button
    state: enabled
    action: Closes the dialog (any unapplied changes are discarded unless Apply was clicked first).
---

# Setup › Preferences — Email Settings

## Purpose

Modal-style sub-dialog over Setup › Preferences. Configures the SMTP-based email notification path used when a test run completes or hits an error (gated by `chk-email-test-results`). Settings split across four group boxes: recipient/sender addresses (top), attachment scope (Reports / Status Log), SMTP server credentials + SSL, and email-send configuration (size cap, retry count, timeout).

A **Test Email** button validates the configuration end-to-end before the user commits with Apply.

## Controls inventory

`dialog-title` ("Email Settings") and `dialog-close` (X) sit in the title bar.

**Top section** — two text inputs: `input-recipient` (with the inline hint "Note: Separate Email addresses with a comma") and `input-sender`.

**Email Attachments group** (`email-attachments-group`):
- `chk-attach-reports` checkbox.
- A `status-log-label` with the `radio-status-log-last-20` / `radio-status-log-full` pair (Last 20 Lines selected).

**Server Configuration group** (`server-config-group`):
- `input-smtp-server`, `input-smtp-port` (top row).
- `input-login`, `input-password` (bottom row).
- `chk-enable-ssl` checkbox.

**Email Configuration group** (`email-config-group`):
- `input-max-email-size` (Max Email Size MB).
- `input-num-attempts` (Number of Attempts to Send).
- `input-timeout` (Timeout in seconds).

**Bottom strip** — `chk-email-test-results` (the master "send emails at all" toggle) on the left; `btn-test-email`, `btn-apply`, `btn-close` on the right.

## State variations

- **Configured + email enabled** — all inputs populated, `chk-email-test-results` checked, Apply commits the config.
- **Test Email pending** — clicking `btn-test-email` likely shows a transient status indication (success/failure). Not captured.
- **SSL required by SMTP server** — `chk-enable-ssl` toggled on; the port input typically updates to 465 or 587.
- **Empty / first-time state** — what's shown in the screenshot. All inputs empty.

## Visible text (verbatim)

Dialog: `Email Settings`.

Top: `Recipient e-mail Address(es)` · `Note: Separate Email addresses with a comma` · `Sender's Address`.

Email Attachments: `Email Attachments` · `Reports` · `Status Log` · `Last 20 Lines` · `Full Log`.

Server Configuration: `Server Configuration` · `SMTP Server` · `SMTP Port` · `Login` · `Password` · `Enable SSL`.

Email Configuration: `Email Configuration` · `Max Email Size (MB)` · `0` · `Number of Attempts to Send` · `0` · `Timeout (Sec)` · `0`.

Bottom: `Email Test Results When complete or on error` · `Test Email` · `Apply` · `Close`.

## Confidence notes

- The password field appears unmasked because it is empty in this screenshot; masking behaviour when populated is inferred but not directly visible.
- Whether `btn-test-email` requires Apply first (to commit the settings before sending) or sends with the current form values is not stated. Most apps require Apply first; verify.
- The relationship between `chk-attach-reports` and the per-row Reports content elsewhere in the app is implied — the attached report is the one generated by the most recent run.

## Manual references

Cross-references to the UI Component Audit ([`docs/ui-audit/_index.md`](../docs/ui-audit/_index.md), May 2026):

- [`docs/ui-audit/screen-inventory.md`](../docs/ui-audit/screen-inventory.md) — state of Setup › Preferences.
- [`docs/ui-audit/form-inputs.md`](../docs/ui-audit/form-inputs.md) — recipient / sender / SMTP text inputs, attachment radios, SSL + size-cap checkboxes.
- [`docs/ui-audit/inline-teal-pill-buttons.md`](../docs/ui-audit/inline-teal-pill-buttons.md) — Test Email / Apply / Close.
- [`docs/ui-audit/data-display.md`](../docs/ui-audit/data-display.md) — four group-box sections.

The audit PDF is itself a UI component inventory rather than a user manual. A separate user-guide PDF, if it surfaces, will land as `docs/user-manual/` chunks in a future pass and back-update this section again.
## Source photo

`uploads/photos/11. Setup-Preferences_Email Settings.png`.
