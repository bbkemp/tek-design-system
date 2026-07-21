---
provenance: observed
class: screen
software: TekExpress AppEmulator
software_version: TBD
screen_id: options-dropdown
screen_title: Options dropdown menu
screen_type: dialog
image: options-dropdown.jpg
source_photo: uploads/photos/0. Options Dropdown.png
navigation_path: [Options]
parent_screens: []
child_screens: []
applies_to: [tek-express]
related_screens: [setup-dut, setup-preferences-email-settings]
related_hardware: []
related_modules: []
controls:
  - id: btn-options-anchor
    label: Options ▼
    type: button
    state: active
    action: Title-bar pill that anchors this dropdown. Persistent across all 11 screens of the application.
  - id: menu-default-test-setup
    label: Default Test Setup
    type: button
    state: enabled
    action: Resets the active setup to factory-default values.
  - id: menu-open-test-setup
    label: Open Test Setup
    type: button
    state: enabled
    action: Opens an OS file dialog to load a saved Test Setup file.
  - id: menu-save-test-setup
    label: Save Test Setup
    type: button
    state: enabled
    action: Saves the current Test Setup to the active session file.
  - id: menu-save-test-setup-as
    label: Save Test Setup As
    type: button
    state: enabled
    action: Saves the current Test Setup to a new file via an OS file dialog.
  - id: menu-open-recent
    label: Open Recent ▶
    type: button
    state: enabled
    action: Submenu indicator — lists recently-opened Test Setup files.
  - id: menu-continuous-run-setup
    label: Continuous Run Setup
    type: button
    state: enabled
    action: Opens a dialog (not captured) for configuring continuous-run mode.
  - id: menu-instrument-control-settings
    label: Instrument Control Settings
    type: button
    state: enabled
    action: Opens a dialog (not captured) for configuring how the application talks to the scope.
  - id: menu-keep-on-top
    label: Keep On Top
    type: toggle
    state: enabled
    action: Toggle. When on, the application window stays above other windows.
  - id: menu-email-settings
    label: Email Settings
    type: button
    state: enabled
    action: Opens the Email Settings dialog (setup-preferences-email-settings.md) — same dialog reachable from Setup › Preferences.
  - id: menu-deskew
    label: Deskew ▶
    type: button
    state: enabled
    action: Submenu indicator — deskew utilities (likely "Run Deskew", "View Deskew Values").
  - id: menu-suite
    label: Suite ▶
    type: button
    state: enabled
    action: Submenu indicator — likely lists installed test suites for selection (the Suite dropdown on Setup › DUT picks from these).
  - id: menu-message-font-size
    label: Message Font Size ▶
    type: button
    state: enabled
    action: Submenu indicator — text-size options for the Status › Log View and other message panes.
  - id: menu-help
    label: Help
    type: button
    state: enabled
    action: Opens application help (likely a CHM or in-app help viewer).
  - id: menu-about
    label: About TekExpress
    type: button
    state: enabled
    action: Opens the About dialog (version, build, credits).
---

# Options dropdown menu

## Purpose

Application-level overflow menu anchored by the `Options ▼` pill at the top-right of the title bar (persistent across all 11 screens). The menu collects session-management actions (Open / Save / Save As / Recent / Default), application-mode actions (Continuous Run Setup, Instrument Control Settings, Keep On Top), shortcut access to the Email Settings dialog already reachable from Setup › Preferences, three submenus (Deskew, Suite, Message Font Size), and the standard Help + About.

This is the only application-chrome overlay surface in the corpus; everything else is a per-panel dialog.

## Controls inventory

**Anchor**: `btn-options-anchor` ("Options ▼") on the title bar. Clicking it surfaces this dropdown menu just below.

**Menu items** (top-to-bottom):

- Session management: `menu-default-test-setup`, `menu-open-test-setup`, `menu-save-test-setup`, `menu-save-test-setup-as`, `menu-open-recent` (submenu).
- Run / instrument control: `menu-continuous-run-setup`, `menu-instrument-control-settings`.
- Window behaviour: `menu-keep-on-top` (toggle).
- Shortcuts: `menu-email-settings` (also reachable from Setup › Preferences).
- Submenus: `menu-deskew`, `menu-suite`, `menu-message-font-size`.
- Standard: `menu-help`, `menu-about`.

Background visible behind the dropdown is the Setup › DUT screen (same as the format-lock for this product); the menu does not blur or dim the background.

## State variations

- **Submenu open** — for the three ▶-marked items (Open Recent, Deskew, Suite, Message Font Size), a flyout submenu appears to the right. None of those flyouts are captured in this photo.
- **Keep On Top toggled on** — the menu item shows a check or pressed state (not captured).
- **Menu dismissal** — clicking anywhere outside the menu, pressing Escape, or selecting an item closes the dropdown.

## Visible text (verbatim)

Top-of-screen chrome row: `NIBHA` · `DisplayPort` · `USB4` · `DDR_IV_T...` · `TKExpre...` (tabs at the very top — these look like external/Windows-host tabs, not part of the AppEmulator's own UI). See Confidence notes.

Dropdown items (top-to-bottom):
- `Default Test Setup`
- `Open Test Setup`
- `Save Test Setup`
- `Save Test Setup As`
- `Open Recent` (with ▶ submenu indicator)
- `Continuous Run Setup`
- `Instrument Control Settings`
- `Keep On Top`
- `Email Settings`
- `Deskew` (▶)
- `Suite` (▶)
- `Message Font Size` (▶)
- `Help`
- `About TekExpress`

## Confidence notes

- The very top of the screenshot shows external tabs (`NIBHA`, `DisplayPort`, `USB4`, `DDR_IV_T...`, `TKExpre...`) that appear to be Windows host-OS tabs (perhaps a window-management overlay or a tab bar from a separate launcher / browser the screenshot captured). These are **not part of TekExpress AppEmulator's own UI** — they're chrome from the screenshot's host environment. Confirm on a fresh screenshot. They are listed here only for the literal verbatim transcription; they should NOT be treated as part of the application.
- The Default Test Setup item has an orange highlight in the screenshot, suggesting it's the focused/hovered item. Not a permanent selection.
- The exact submenu contents of Open Recent / Deskew / Suite / Message Font Size are not captured. They will need additional screenshots if granular documentation is required.

## Manual references

Cross-references to the UI Component Audit ([`docs/ui-audit/_index.md`](../docs/ui-audit/_index.md), May 2026):

- [`docs/ui-audit/screen-inventory.md`](../docs/ui-audit/screen-inventory.md) — not a separate screen in the audit; the Options ▼ button is documented in navigation-components.
- [`docs/ui-audit/navigation-components.md`](../docs/ui-audit/navigation-components.md) — Options ▼ button anchor.

The audit PDF is itself a UI component inventory rather than a user manual. A separate user-guide PDF, if it surfaces, will land as `docs/user-manual/` chunks in a future pass and back-update this section again.
## Source photo

`uploads/photos/0. Options Dropdown.png`. Captured with the dropdown open over the Setup › DUT screen.
