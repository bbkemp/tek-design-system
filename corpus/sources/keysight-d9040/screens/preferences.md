---
provenance: observed
class: screen
software: "Keysight D9040 (D9040USBC USB4 Test Application / D9040DPPC DisplayPort Test App)"
software_version: TBD
screen_id: preferences
screen_title: Preferences
screen_type: dialog
image: preferences.jpg
source_photo: uploads/photos/IMG_7013.jpg
function_state: Preferences modal open; Run tab active; Resource Arbiter address http://192.168.1.66:55441/; Phases = Acquire,Measure,Report; Abort behavior = Cancel outgoing tasks and abort already transmitted tasks; If a test aborts = Continue the run
navigation_path: [USB4 Test Application, Tools, Preferences…]
parent_screens:
  - select-tests
child_screens: []
related_hardware: []
controls:
  - id: dialog-title
    label: Preferences
    type: indicator
    state: active
    action: Modal title bar. Reachable from `Tools > Preferences…` (see `select-tests` screen).
  - id: tab-pref-run
    label: Run
    type: tab
    state: active
    action: First tab — run-time settings. Active in the canonical photo.
  - id: tab-pref-autosave
    label: Auto-save
    type: tab
    state: enabled
    action: Second tab — auto-save behavior. See State variations (IMG_7028).
  - id: tab-pref-performance
    label: Performance
    type: tab
    state: enabled
    action: Third tab — performance and HTML-report refresh policy. See State variations (IMG_7031).
  - id: tab-pref-results
    label: Results
    type: tab
    state: enabled
    action: Fourth tab — margin highlighting and trial display. See State variations (IMG_7032).
  - id: tab-pref-display
    label: Display
    type: tab
    state: enabled
    action: Fifth tab — Messages display, Actions, Miscellaneous (color scheme). See State variations (IMG_7033).
  - id: tab-pref-remote
    label: Remote
    type: tab
    state: enabled
    action: Sixth tab — remote programming interface. See State variations (IMG_7034).
  - id: tab-pref-miscellaneous
    label: Miscellaneous
    type: tab
    state: enabled
    action: Seventh tab — projects, prompts, export. See State variations (IMG_7035).
  - id: tab-pref-support
    label: Support
    type: tab
    state: enabled
    action: Eighth tab — log events and crash debug. See State variations (IMG_7036).
  - id: btn-help
    label: ?
    type: button
    state: enabled
    action: Help button in the upper-right of the modal — green-tinted question mark.
  - id: btn-reset-all
    label: Reset All…
    type: button
    state: enabled
    action: Resets every Preferences tab to defaults.
  - id: btn-apply
    label: Apply
    type: button
    state: enabled
    action: Commits current tab changes without closing.
  - id: btn-ok
    label: OK
    type: button
    state: enabled
    action: Commits and closes the modal.
  - id: btn-close
    label: Close
    type: button
    state: enabled
    action: Closes without committing.
  - id: run-section
    label: "Acquisition/Measurement Machines"
    type: indicator
    state: active
    action: Section banner on the Run tab.
  - id: run-instances
    label: "Instances: Multiple (Measurement Server)"
    type: dropdown
    state: active
    action: How many concurrent measurement-server instances to drive — `Multiple (Measurement Server)` selected.
  - id: run-resource-arbiter-address
    label: "Resource Arbiter address: http://192.168.1.66:55441/"
    type: input
    state: active
    action: HTTP URL of the arbiter the test app talks to. Matches the `resource-arbiter-console` listening line.
  - id: run-btn-configure
    label: Configure (Run tab)
    type: button
    state: enabled
    action: Opens the arbiter-configuration sub-dialog (likely surfaces the browser-based arbiter — see `resource-arbiter`).
  - id: run-test-execution
    label: Test Execution
    type: indicator
    state: active
    action: Section banner.
  - id: run-phases
    label: "Perform these phases: Acquire,Measure,Report"
    type: dropdown
    state: active
    action: Which phases of the test run to execute.
  - id: run-abort-behavior
    label: "Abort behavior: Cancel outgoing tasks and abort already transmitted tasks."
    type: dropdown
    state: active
    action: What to do with in-flight work when the operator aborts.
  - id: run-abort-action
    label: Test Abort Action
    type: indicator
    state: active
    action: Section banner — `If a test aborts:` radio pair below.
  - id: run-abort-continue
    label: Continue the run (problem descriptions may be viewed after the run ends)
    type: button
    state: active
    action: Radio — keep the run going past an aborted test.
  - id: run-abort-stop
    label: Stop the run and report the problem immediately
    type: button
    state: enabled
    action: Radio — stop immediately on first abort.
---

# Preferences — Run

## Purpose

The Preferences modal is the application-wide settings surface, reached from the main `Tools > Preferences…` menu (visible open on the `select-tests` screen). It is a classic eight-tab Win32 modal — `Run`, `Auto-save`, `Performance`, `Results`, `Display`, `Remote`, `Miscellaneous`, `Support` — with `Reset All… / Apply / OK / Close` action buttons at the bottom-right and a green `?` help button at the top-right. Each tab carries a small number of grouped fields; together they configure how the test app uses its measurement-server fleet, what it auto-saves, how aggressively it re-renders the HTML report, how it highlights pass-margin in the Results table, how it presents prompts and the overall color scheme, the remote-programming interface, project-open / prompt / CSV-export behaviors, and log/crash-debug capture. The Run tab — the canonical photo — is the most operationally load-bearing: it carries the **Resource Arbiter address** that wires the test app to the arbiter service.

## Controls inventory

The modal title bar is `dialog-title` (`Preferences`). Across the top of the body is an eight-tab strip — `tab-pref-run`, `tab-pref-autosave`, `tab-pref-performance`, `tab-pref-results`, `tab-pref-display`, `tab-pref-remote`, `tab-pref-miscellaneous`, `tab-pref-support`. Top-right of the modal is the `btn-help` `?` indicator. Bottom-right is the action row: `btn-reset-all`, `btn-apply`, `btn-ok`, `btn-close`.

On the active **Run** tab, the body splits into three section banners. **Acquisition/Measurement Machines** carries `run-instances` (`Multiple (Measurement Server)`), `run-resource-arbiter-address` (`http://192.168.1.66:55441/`), and `run-btn-configure`. **Test Execution** carries `run-phases` (`Acquire,Measure,Report`) and `run-abort-behavior` (`Cancel outgoing tasks and abort already transmitted tasks.`). **Test Abort Action** carries a radio pair under the prompt `If a test aborts:` — `run-abort-continue` (`Continue the run (problem descriptions may be viewed after the run ends)`, selected) and `run-abort-stop` (`Stop the run and report the problem immediately`).

The modal overlays the Select Tests / Configure body underneath but does not interact with it; the Messages panel and status bar persist below the modal.

## State variations

This modal carries the same chrome — eight tabs, title, action buttons — across every tab. The body content varies per tab. The photo set captures all eight tabs as state variations:

- **Run tab** (`IMG_7013` — canonical; also IMG_7008, IMG_7011): the Acquisition/Measurement Machines / Test Execution / Test Abort Action layout described above. IMG_7008 shows the modal mid-touch with a finger pointing at the Configure button; IMG_7011 shows the same modal floating with the test-tree visible behind it.
- **Auto-save tab** (`IMG_7028`): three sections — **Auto-save at end of run** (`Method:` radio pair `Save Project (.proj)` / `Export Project (.zip)`; `Condition:` radio pair `End of each run` / `End of run with failed tests`; `Include Waveforms:` radio pair `Only when necessary` / `Always`). **Name and location** (`Base path:` `{PublicDocumentsDir}\History\{DeviceName}\{Date}`; `Project name:` `{DeviceName}` with `Browse…`; `Preview:` `C:\Users\Public\Documents\Infiniium\Apps\USB4Test\History\USB4_Device_1\2024-08-14\USB4_Device_1.proj`; `Add suffix:` checkbox; inline help: `To insert the value of config variables, enter {ConfigVariableName}, e.g. {PublicDocumentsDir}, {Date}, {DeviceName}, {IdentityName}, {TaskId}.`). Inline warning: `Note: Auto-save overwrites existing projects and archives without warning. Auto-save settings do NOT affect manual saves (Menu: File > Save/Export Project).`
- **Performance tab** (`IMG_7031`; also IMG_7030 with the tab pressed in transition): three sections — **Performance** (`Disable Infiniium user interface during run (decreases runtime)`, checked). **Recovery** (`Auto-save recovery data:` radio pair `After each trial or permutation (increases runtime)` (selected) / `Only at the end of a run`). **HTML Report** (`Refresh HTML report:` radio triplet `Manually` / `After each trial or permutation (increases runtime)` (selected) / `Only at the end of a run (increases runtime)`).
- **Results tab** (`IMG_7032`): four sections — **Margin Reporting** (`Enable Margin Highlighting` checkbox, checked; two inputs `Warn at (%)` `5` and `Critical at (%)` `5`). **Test Display** (`Order Test Results:` radio pair `Chronologically` (selected) / `Same as Select Tests tab`). **Trial Display** (`Show details for up to 10 worst trials()`; `Order trial results: Worst and Newest First`; `Show images (for up to 1 worst trial)` checkbox, checked). **Reports** (`Force page breaks between test results in PDF report` checkbox).
- **Display tab** (`IMG_7033`): four sections — **Messages** (two columns `Dialog Prompts` and `Messages Tab`, each with `Show information` / `Show warning` / `Show error` checkboxes all checked; note `(Prompts with multiple response buttons are unaffected by these options.)`). **Actions** (four checkboxes: `Display Results tab at end of run`, `Select Tests tab double-click jumps to Results tab`, `Results tab double-click jumps to HTML Report`, `HTML Report tab display tracks Results tab selection` — first checked). **Miscellaneous** (`Color scheme:` radio pair `Midnight` (selected) / `Platinum`; checkboxes `Keep application on top`, `Allow application to re-minimize after prompt` (checked), `Invert scope display for screen shots`, `Show tooltips` (checked)).
- **Remote tab** (`IMG_7034`): two sections — **Remote Options** (`Enable remote interface` checkbox (checked); `Show remote interface hints` checkbox; `Language: Ars1`; inline hint block — `Menus: Right-click item to see hint (e.g. File > New Project)`, `Controls: Right-click item to see hint (e.g. A checkbox on the Set Up tab)`, `Info panes: Hint included in text (e.g. Bottom of the Select Tests tab)`). **Network Port Status** (`Primary port (49944): Active`; `Alternate port (59944): Untried`). Footer: `Please see the Keysight N5452A Remote Programming Toolkit for more information on automating this application. The toolkit contains a Getting Started Guide, programming documents, and working example clients with full source code. Available as a free download at www.keysight.com/find/rpi`.
- **Miscellaneous tab** (`IMG_7035`): three sections — **Projects** (`On startup, open current project` checkbox; `On load, restore saved test selection` checkbox (checked)). **Prompts** (`Beep when user prompted` checkbox (checked); `Beep only during run` checkbox (checked)). **Export** (`Generate CSV using Format:` dropdown showing `3`).
- **Support tab** (`IMG_7036`): three checkboxes — `Log events`, `Log IO`, `Create debug package after a crash` (third checked).

## Visible text (verbatim)

Title: `Preferences`.

Tab strip: `Run` · `Auto-save` · `Performance` · `Results` · `Display` · `Remote` · `Miscellaneous` · `Support`.

Action buttons: `Reset All…` · `Apply` · `OK` · `Close`.

Run-tab body: `Acquisition/Measurement Machines` · `Instances:` · `Multiple (Measurement Server)` · `Resource Arbiter address:` · `http://192.168.1.66:55441/` · `Configure` · `Test Execution` · `Perform these phases:` · `Acquire,Measure,Report` · `Abort behavior:` · `Cancel outgoing tasks and abort already transmitted tasks.` · `Test Abort Action` · `If a test aborts:` · `Continue the run (problem descriptions may be viewed after the run ends)` · `Stop the run and report the problem immediately`.

(See **State variations** above for the verbatim text on each other tab — captured in IMG_7028, IMG_7030, IMG_7031, IMG_7032, IMG_7033, IMG_7034, IMG_7035, IMG_7036.)

## Confidence notes

Transcriptions verified against the 1600 px downscale (`preferences.jpg`) and cross-referenced with the per-tab photos. Items below are uncertain:

- The Remote-tab `Language: Ars1` is read precisely from IMG_7034 but `Ars1` is an unusual token — could be `Ars1`, `ArsL`, or a truncated full name. Documented verbatim.
- The Results-tab `Show details for up to 10 worst trials()` has a trailing `()` that looks like an empty parenthetical — possibly a placeholder for a dynamic unit ("worst trials (margin)") that did not render in this photo's state. Documented verbatim.
- The Performance-tab radio `After each trial or permutation (increases runtime)` is selected for both the Recovery and HTML Report sections in IMG_7031; the visual treatment is consistent so the selection is reliable.
- Whether the Help button `?` opens local help or an online help URL is not derivable.
- Whether the `Color scheme: Platinum` choice changes only the dark/light theme or also the syntax-tinting of test-name colors is not derivable from a still photo. (See `set-up` Confidence notes: the captured set is in `Midnight` mode.)
- The Miscellaneous-tab `Generate CSV using Format: 3` dropdown shows the value `3` but the alternatives are not visible — could be a v1/v2/v3 schema selector.
- The Auto-save tab `Project name: {DeviceName}` is one of many `{Curly-brace}` template tokens; the inline help enumerates `{PublicDocumentsDir}`, `{Date}`, `{DeviceName}`, `{IdentityName}`, `{TaskId}` — but the full schema is presumably larger than what is on-screen.

## Manual references

> Pending. Manual will be paired in a later pass (Keysight D9040USBC USB4 Test Application User Guide, sections covering the Preferences modal, the Resource Arbiter address, abort-behavior policies, auto-save templates, Performance / Results / Display / Remote / Miscellaneous / Support tab fields, and the `N5452A Remote Programming Toolkit`).

## Source photo

Selected from `uploads/photos/`: **IMG_7013.jpg** — chosen for clarity (Run tab fully orthogonal, the Resource Arbiter URL is unambiguously legible, all eight tab labels are visible, all four action buttons (`Reset All…` / `Apply` / `OK` / `Close`) are visible with the close button under a small mouse-cursor — useful for confirming the modal is in a focused state). Other candidates and why they were not used for step-0:

- `IMG_7008.jpg` — Run tab with a hand pointing at Configure; useful as a "where's the arbiter" instructional shot but the framing is more oblique.
- `IMG_7011.jpg` — Run tab floating over the test tree, sharp framing but the dialog is dimmer.
- `IMG_7028.jpg`, `IMG_7030.jpg`, `IMG_7031.jpg`, `IMG_7032.jpg`, `IMG_7033.jpg`, `IMG_7034.jpg`, `IMG_7035.jpg`, `IMG_7036.jpg` — one canonical photo per other tab, all folded into State variations above rather than into separate screen .md files (the screen identity is the same modal across tabs).
