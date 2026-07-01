---
provenance: observed
software: TekExpress AppEmulator
software_version: TBD
screen_id: setup-preferences
screen_title: Setup › Preferences
screen_type: config
image: setup-preferences.jpg
source_photo: uploads/photos/10. Setup-Preferences.png
wizard_step: 4
wizard_step_total: 4
navigation_path: [Setup, Preferences]
parent_screens: [setup-acquisitions]
child_screens: [setup-preferences-email-settings]
applies_to: [tek-express]
related_screens: [setup-dut, setup-test-selection, setup-acquisitions, setup-preferences-email-settings]
related_hardware: []
related_modules: []
controls:
  - id: title-bar
    label: "TekExpress AppEmulator — (9346)*"
    type: indicator
    state: active
    action: Window chrome — see setup-dut.md.
  - id: wizard-step-1
    label: "✓ DUT"
    type: tab
    state: enabled
    action: Wizard step 1, completed.
  - id: wizard-step-2
    label: "✓ Test Selection"
    type: tab
    state: enabled
    action: Wizard step 2, completed.
  - id: wizard-step-3
    label: "✓ Acquisitions"
    type: tab
    state: enabled
    action: Wizard step 3, completed.
  - id: wizard-step-4
    label: "4 Preferences"
    type: indicator
    state: active
    action: Wizard step 4 — orange-numbered current step.
  - id: execution-options-group
    label: Execution Options
    type: indicator
    state: enabled
    action: Group-box heading for the first preferences cluster.
  - id: chk-highlight-warning
    label: "Highlight yellow warning if measured value is within [x] % margin of limit"
    type: checkbox
    state: active
    action: Checked. Threshold numeric input embedded inline, current value 100.
  - id: input-margin-pct
    label: ""
    type: input
    state: enabled
    action: Numeric input embedded in the chk-highlight-warning row. Current value 100. Units "%".
  - id: chk-acquire-analyze-each-test
    label: "Acquire/Analyze each test [x] times"
    type: checkbox
    state: active
    action: Checked. Numeric repeat-count input inline, current value 1.
  - id: input-acquire-analyze-times
    label: ""
    type: input
    state: enabled
    action: Numeric input — number of times to repeat each test. Current 1.
  - id: chk-show-deskew-alert
    label: Show alert when new deskew values are configured on TekScope
    type: checkbox
    state: disabled
    action: Disabled (greyed) in this screenshot — likely depends on live-acquisition mode being selected.
  - id: chk-enable-logging
    label: Enable Logging
    type: checkbox
    state: enabled
    action: Unchecked in this screenshot. Master toggle for verbose logging during a run.
  - id: failure-actions-group
    label: Actions on Test Measurement Failure
    type: indicator
    state: enabled
    action: Group-box heading for the failure-handling preferences.
  - id: chk-on-failure-rerun
    label: "On Test Failure, rerun that test [x] times"
    type: checkbox
    state: active
    action: Checked. Inline retry-count input, current value 1.
  - id: input-rerun-times
    label: ""
    type: input
    state: enabled
    action: Numeric retry-count input. Current 1.
  - id: chk-on-failure-pause
    label: On Test Failure, pause the test and let me investigate
    type: checkbox
    state: enabled
    action: Unchecked. Mutually-exclusive with chk-on-failure-stop and chk-on-failure-rerun's behaviour.
  - id: chk-on-failure-stop
    label: On Test Failure, stop and notify me of the failure
    type: checkbox
    state: enabled
    action: Unchecked. Aborts the run on first failure.
  - id: btn-email-settings
    label: Email Settings
    type: button
    state: enabled
    action: Opens the Email Settings dialog (setup-preferences-email-settings.md). Placed adjacent to the failure-action checkboxes — emails are the typical notification path on stop/pause.
  - id: popup-settings-group
    label: Popup Settings
    type: indicator
    state: enabled
    action: Group-box heading for the popup-message preferences.
  - id: chk-auto-close-warnings
    label: "Auto close Warnings and Informations during Sequencing  Auto close after [x] seconds"
    type: checkbox
    state: active
    action: Checked. Inline timer input, current value 10.
  - id: input-warning-timer
    label: ""
    type: input
    state: enabled
    action: Numeric timer (seconds) for warning popups. Current 10.
  - id: chk-auto-close-errors
    label: "Auto close Error Messages during Sequencing  Auto close after [x] seconds"
    type: checkbox
    state: active
    action: Checked. Inline timer input, current value 10.
  - id: input-error-timer
    label: ""
    type: input
    state: enabled
    action: Numeric timer (seconds) for error popups. Current 10.
  - id: chk-beep-on-messages
    label: Show messages with a beep sound
    type: checkbox
    state: enabled
    action: Unchecked. Audio alert toggle.
  - id: btn-start
    label: Start
    type: button
    state: enabled
    action: Right-rail Start.
  - id: btn-pause
    label: Pause
    type: button
    state: disabled
    action: Right-rail Pause, idle.
  - id: not-for-release
    label: Not Intended For Public Release
    type: indicator
    state: active
    action: Build-mode notice.
  - id: status-bar
    label: "Ready."
    type: indicator
    state: active
    action: Idle status bar.
---

# Setup › Preferences

## Purpose

Step 4 of the four-step Setup wizard — the final step before a user can run a test. Configures execution behaviour (margin warnings, repeat count, logging), failure-handling actions (rerun / pause / stop, with optional email notification), and popup-message auto-close timers + beep behaviour. Per the audit PDF: "Three group boxes: Execution Options (4 checkboxes + 2 numeric inputs), Actions on Test Measurement Failure (3 checkboxes + 1 numeric input + Email Settings button), Popup Settings (3 checkboxes + 2 numeric inputs)."

The **Email Settings** dialog ([setup-preferences-email-settings.md](./setup-preferences-email-settings.md)) is the only sub-surface here.

## Controls inventory

**Chrome regions** — see [setup-dut.md](./setup-dut.md). Wizard: steps 1, 2, 3 all ✓ checkmarked; step 4 (Preferences) is the orange current step.

The **content area** is three vertically-stacked group boxes:

**Execution Options** (`execution-options-group`):
- `chk-highlight-warning` (checked) with inline numeric `input-margin-pct` (100 %) — yellow-warning threshold by percentage of limit.
- `chk-acquire-analyze-each-test` (checked) with inline numeric `input-acquire-analyze-times` (1) — number of times to repeat each test.
- `chk-show-deskew-alert` (greyed/disabled) — alerts on new deskew values configured on the TekScope.
- `chk-enable-logging` (unchecked) — master verbose-logging toggle.

**Actions on Test Measurement Failure** (`failure-actions-group`):
- `chk-on-failure-rerun` (checked) with inline numeric `input-rerun-times` (1) — retry count on failure.
- `chk-on-failure-pause` (unchecked) — pause + manual investigation.
- `chk-on-failure-stop` (unchecked) — stop + notify.
- `btn-email-settings` (Email Settings) opens [setup-preferences-email-settings.md](./setup-preferences-email-settings.md).

**Popup Settings** (`popup-settings-group`):
- `chk-auto-close-warnings` (checked) with inline `input-warning-timer` (10 sec).
- `chk-auto-close-errors` (checked) with inline `input-error-timer` (10 sec).
- `chk-beep-on-messages` (unchecked).

## State variations

- **Different failure-action selected** — the three failure checkboxes appear independent (not radio-grouped) but in practice their semantics likely conflict (rerun vs. pause vs. stop). The live build may auto-deselect siblings; verify.
- **Logging on** — `chk-enable-logging` checked. Likely enables verbose entries on Status › Log View and increases the size of run logs.
- **Deskew alert enabled** — `chk-show-deskew-alert` becomes interactive when Setup › DUT acquire mode is live (the alert only makes sense when there's a real TekScope to deskew).

## Visible text (verbatim)

Group headings: `Execution Options` · `Actions on Test Measurement Failure` · `Popup Settings`.

Execution Options: `Highlight yellow warning if measured value is within` · `100` · `% margin of limit` · `Acquire/Analyze each test` · `1` · `times` · `Show alert when new deskew values are configured on TekScope` · `Enable Logging`.

Failure Actions: `On Test Failure, rerun that test` · `1` · `times` · `On Test Failure, pause the test and let me investigate` · `On Test Failure, stop and notify me of the failure` · `Email Settings`.

Popup Settings: `Auto close Warnings and Informations during Sequencing` · `Auto close after` · `10` · `seconds` · `Auto close Error Messages during Sequencing` · `Auto close after` · `10` · `seconds` · `Show messages with a beep sound`.

Chrome: same as setup-dut.md.

## Confidence notes

- The three failure-action checkboxes (`chk-on-failure-rerun`, `chk-on-failure-pause`, `chk-on-failure-stop`) are styled as checkboxes, not radios. Whether their behaviour is independent or mutually exclusive is unclear from the screenshot — likely radio-semantics with checkbox UI (a redesign opportunity).
- `chk-show-deskew-alert` appears greyed/disabled in this screenshot. The inferred reason (live-acquisition mode not selected) is plausible but unverified.
- The numeric inputs all show default-looking values (1, 100, 10). Bounds and validation rules are not documented.

## Manual references

Cross-references to the UI Component Audit ([`docs/ui-audit/_index.md`](../docs/ui-audit/_index.md), May 2026):

- [`docs/ui-audit/screen-inventory.md`](../docs/ui-audit/screen-inventory.md) — audit entry for Setup › Preferences (Step 4).
- [`docs/ui-audit/navigation-components.md`](../docs/ui-audit/navigation-components.md) — side-nav, wizard step indicator.
- [`docs/ui-audit/form-inputs.md`](../docs/ui-audit/form-inputs.md) — three group boxes of checkboxes + numeric inputs.
- [`docs/ui-audit/inline-teal-pill-buttons.md`](../docs/ui-audit/inline-teal-pill-buttons.md) — Email Settings button.
- [`docs/ui-audit/data-display.md`](../docs/ui-audit/data-display.md) — three labelled group-box sections.

The audit PDF is itself a UI component inventory rather than a user manual. A separate user-guide PDF, if it surfaces, will land as `docs/user-manual/` chunks in a future pass and back-update this section again.
## Source photo

`uploads/photos/10. Setup-Preferences.png`. The Email Settings dialog launched from `btn-email-settings` is documented separately at [setup-preferences-email-settings.md](./setup-preferences-email-settings.md) from photo 11.
