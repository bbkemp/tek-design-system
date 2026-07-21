---
provenance: observed
class: screen
software: "Keysight D9040 (D9040USBC USB4 Test Application / D9040DPPC DisplayPort Test App)"
software_version: TBD
screen_id: create-automation-commands
screen_title: Create Automation Commands
screen_type: dialog
image: create-automation-commands.jpg
source_photo: uploads/photos/IMG_7024.jpg
function_state: Modal open over Automate tab; Create = Single Command; Run Tab active; no command staged
navigation_path: [USB4 Test Application, Automate, Commands…]
parent_screens:
  - automate
child_screens: []
related_hardware: []
controls:
  - id: dialog-title
    label: Create Automation Commands
    type: indicator
    state: active
    action: Modal title bar. Reachable from `Automate > Commands…` button (see `automate` screen).
  - id: btn-help
    label: ?
    type: button
    state: enabled
    action: Help button — green-tinted question mark in the upper-right of the modal.
  - id: btn-close-modal
    label: X
    type: button
    state: enabled
    action: Closes the modal without committing.
  - id: create-radio-single
    label: Single Command
    type: button
    state: active
    action: Radio — generate a single command for the chosen menu / tab action.
  - id: create-radio-entire-script
    label: Entire Script
    type: button
    state: enabled
    action: Radio — generate a full script.
  - id: create-radio-automation-control
    label: Automation Control
    type: button
    state: enabled
    action: Radio — generate a control command.
  - id: tab-file-menu
    label: File Menu
    type: tab
    state: enabled
    action: First internal tab — commands targeting File menu actions. Not visible-active in the photo set; mentioned in State variations.
  - id: tab-set-up-tab
    label: Set Up Tab
    type: tab
    state: enabled
    action: Second internal tab — commands targeting the Set Up workflow tab. See State variations (IMG_7020).
  - id: tab-select-tests-tab
    label: Select Tests Tab
    type: tab
    state: enabled
    action: Third internal tab — commands targeting Select Tests. See State variations (IMG_7021).
  - id: tab-configure-tab
    label: Configure Tab
    type: tab
    state: enabled
    action: Fourth internal tab — commands targeting Configure. See State variations (IMG_7022).
  - id: tab-connect-tab
    label: Connect Tab
    type: tab
    state: enabled
    action: Fifth internal tab — commands targeting Connect. See State variations (IMG_7023).
  - id: tab-run-tab
    label: Run Tab
    type: tab
    state: active
    action: Sixth internal tab — commands targeting Run. Active in the canonical photo.
  - id: run-tab-suppress-ok-prompts
    label: Suppress 'OK' Prompts
    type: button
    state: enabled
    action: Radio — generate a command that suppresses OK prompts during a run.
  - id: run-tab-suppress-all-prompts
    label: Suppress All prompts
    type: button
    state: enabled
    action: Radio — generate a command that suppresses every prompt during a run.
  - id: run-tab-start-run
    label: Start Run
    type: button
    state: enabled
    action: Radio — generate a command that starts a run.
  - id: run-tab-respond-existing-results
    label: Resond to Existing Results Prompt
    type: button
    state: enabled
    action: Radio — generate a command that handles the "existing results" prompt at start of run. Label is verbatim — `Resond` appears to be a Keysight typo for `Respond`.
  - id: run-tab-set-number-of-runs
    label: Set Number of Runs
    type: button
    state: enabled
    action: Radio — generate a command that sets the number of runs.
  - id: command-output
    label: "Automation command(s):"
    type: input
    state: enabled
    action: Bottom-of-modal multi-line readout / target — receives the generated command text. Empty in this photo.
  - id: include-instructions
    label: Include instructions as Comments (lines starting with #)
    type: toggle
    state: enabled
    action: Checkbox — whether to emit `# comment` lines alongside the generated command.
  - id: btn-copy-clipboard
    label: Copy to Clipboard
    type: button
    state: enabled
    action: Copies the generated command to the system clipboard.
  - id: btn-append-script
    label: Append to Script
    type: button
    state: enabled
    action: Appends the generated command to the script editor in the Automate tab.
  - id: btn-more-info
    label: More Info
    type: button
    state: enabled
    action: Opens a help / reference panel for the current selection.
  - id: btn-close-action
    label: Close
    type: button
    state: enabled
    action: Bottom-right close button — equivalent to the modal's titlebar X.
  - id: prompt-line
    label: "Choose menu or application tab and select desired action:"
    type: indicator
    state: active
    action: Help prompt above the internal tabs.
---

# Create Automation Commands — Run Tab

## Purpose

The Create Automation Commands modal is a helper for the Automate tab's script editor. Instead of memorising the test app's command-language surface, the operator opens this dialog from `Commands…`, picks `Single Command` / `Entire Script` / `Automation Control`, then drills down through an internal six-tab strip mirroring the main workflow tabs (`File Menu`, `Set Up Tab`, `Select Tests Tab`, `Configure Tab`, `Connect Tab`, `Run Tab`) and a discrete-choice list per tab. The generated command appears in the multi-line `Automation command(s):` readout at the bottom, and the operator can `Copy to Clipboard` or `Append to Script`. The `Include instructions as Comments (lines starting with #)` checkbox folds inline `#` comments into the emitted text — a small but load-bearing affordance because it turns the generated commands into self-documenting Automate scripts.

## Controls inventory

The modal title bar is `dialog-title` (`Create Automation Commands`). Top-right are `btn-help` (`?`) and `btn-close-modal` (`X`).

The top of the body is a radio triplet: `create-radio-single` (`Single Command`, selected in all six photos), `create-radio-entire-script` (`Entire Script`), `create-radio-automation-control` (`Automation Control`). Below it, the prompt line `prompt-line` (`Choose menu or application tab and select desired action:`).

An internal tab strip carries six tabs — `tab-file-menu`, `tab-set-up-tab`, `tab-select-tests-tab`, `tab-configure-tab`, `tab-connect-tab`, `tab-run-tab`. The body below the tab strip is the per-tab choice list.

On the canonical **Run Tab** the choice list carries five radio buttons in a 3+2 grid: `run-tab-suppress-ok-prompts`, `run-tab-respond-existing-results`, `run-tab-suppress-all-prompts`, `run-tab-set-number-of-runs`, `run-tab-start-run`.

The bottom of the modal carries the empty `command-output` (`Automation command(s):` followed by an empty multi-line text area), then `include-instructions` (`Include instructions as Comments (lines starting with #)`, unchecked), and the action row: `btn-copy-clipboard`, `btn-append-script`, `btn-more-info`, `btn-close-action`.

The modal overlays the Automate tab; the line gutter (1, 21–35) of the underlying script editor is visible behind the modal.

## State variations

The modal carries the same chrome — title, action buttons, top radio triplet, prompt line, internal tab strip, output / comment-toggle / actions — across every internal tab. The body content varies per tab. The photo set captures all five workflow-related tabs as state variations; File Menu is not captured:

- **Set Up Tab** (`IMG_7020`): six radio buttons in 3+3 grid — `Click Radio Button`, `Select Existing Value from Combo Box`, `Click Check Box`, `Enter New Value in Combo Box (if accepts user text)`, `Type in Text Box`, `Connect App to External Instrument`.
- **Select Tests Tab** (`IMG_7021`): two radio buttons — `Select Tests Individually`, `Select All Tests`.
- **Configure Tab** (`IMG_7022`): two radio buttons — `Select Existing Value from Combo Box`, `Enter New Value in Combo Box (if accepts user text)`.
- **Connect Tab** (`IMG_7023`): one radio button — `Suppress Connection Prompts`.
- **Run Tab** (`IMG_7024` — canonical): five radio buttons (as enumerated above).

## Visible text (verbatim)

Title: `Create Automation Commands`.

Top radio row: `Create:` · `Single Command` · `Entire Script` · `Automation Control`.

Prompt: `Choose menu or application tab and select desired action:`.

Internal tab strip: `File Menu` · `Set Up Tab` · `Select Tests Tab` · `Configure Tab` · `Connect Tab` · `Run Tab`.

Run-tab body (verbatim): `Suppress 'OK' Prompts` · `Resond to Existing Results Prompt` · `Suppress All prompts` · `Set Number of Runs` · `Start Run`.

Output region: `Automation command(s):` · (empty text area).

Footer: `Include instructions as Comments (lines starting with #)` · `Copy to Clipboard` · `Append to Script` · `More Info` · `Close`.

Set Up tab body (IMG_7020): `Click Radio Button` · `Select Existing Value from Combo Box` · `Click Check Box` · `Enter New Value in Combo Box (if accepts user text)` · `Type in Text Box` · `Connect App to External Instrument`.

Select Tests tab body (IMG_7021): `Select Tests Individually` · `Select All Tests`.

Configure tab body (IMG_7022): `Select Existing Value from Combo Box` · `Enter New Value in Combo Box (if accepts user text)`.

Connect tab body (IMG_7023): `Suppress Connection Prompts`.

## Confidence notes

Transcriptions verified against the 1600 px downscale (`create-automation-commands.jpg`) and the four other per-tab photos. Items below are uncertain:

- `Resond to Existing Results Prompt` is read verbatim from IMG_7024 — almost certainly a Keysight typo for `Respond`. Documented exactly as rendered.
- The File Menu tab is **not captured** in the photo set; existence is inferred from the tab strip visible in all five photos. Its body radio options are unknown.
- `Suppress 'OK' Prompts` (with curly quote around `OK`) is read precisely.
- The trailing dot on `(lines starting with #)` is read precisely — the `#` glyph is consistent across all five photos.
- Whether the modal can be resized is not derivable from a still photo; the chrome looks fixed.
- Whether the radio buttons in the body are mutually exclusive within a tab (single selection) or across tabs (one selection across the entire helper) is not directly visible; the visual treatment of "no body selection in the photo set" is consistent with single-selection-per-invocation.
- The internal tab strip's order mirrors the workflow tabs of the main app (Set Up → Select Tests → Configure → Connect → Run) but **omits** Automate, Results, and HTML Report — consistent with the dialog's job (compose pre-run commands).

## Manual references

> Pending. Manual will be paired in a later pass (Keysight D9040USBC USB4 Test Application User Guide, sections covering the Automate tab, the Create Automation Commands helper, and the automation command schema).

## Source photo

Selected from `uploads/photos/`: **IMG_7024.jpg** — chosen because the Run tab is the most operationally significant tab inside this helper (the radio set includes `Start Run`, `Set Number of Runs`, and the three Suppress-prompt variants — the building blocks of an automated run script). The framing is orthogonal, the title-bar and action-row are visible together with the radio body, and the cursor is parked outside the choice list so no selection is artificially highlighted. Other candidates and why they were not used for step-0:

- `IMG_7020.jpg`, `IMG_7021.jpg`, `IMG_7022.jpg`, `IMG_7023.jpg` — each captures a different internal tab; folded into State variations above rather than into separate screen .md files (the screen identity is the same modal across tabs).
