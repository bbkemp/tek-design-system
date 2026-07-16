---
software: GDM9061
software_version: TBD
screen_id: config-system
screen_title: Configuration — System
screen_type: config
image: config-system.jpg
source_photo: uploads/photos/Configuration Menu System Tab Screenshot.BMP
function_state: Configuration menu, System tab active
navigation_path: [Menu, Configuration, System]
parent_screens:
  - measurement
child_screens:
  - config-display
  - config-interface
  - config-lan
controls:
  - id: tab-system
    label: System
    type: tab
    state: active
    action: System settings tab (active).
  - id: tab-display
    label: Display
    type: tab
    state: enabled
    action: Switches to the Display settings tab (see config-display).
  - id: tab-interface
    label: Interface
    type: tab
    state: enabled
    action: Switches to the Interface settings tab (see config-interface).
  - id: tab-lan
    label: Lan Setup
    type: tab
    state: enabled
    action: Switches to the LAN setup tab (see config-lan).
  - id: btn-menu
    label: MENU
    type: button
    state: enabled
    action: Menu button at the top-right of the dialog.
  - id: field-beep
    label: Beep
    type: dropdown
    state: enabled
    action: System beep On/Off (ON).
  - id: field-keysound
    label: Key Sound
    type: dropdown
    state: enabled
    action: Key-press sound On/Off (ON).
  - id: field-date
    label: Date
    type: input
    state: enabled
    action: System date (2026 / 05 / 26).
  - id: field-time
    label: Time
    type: input
    state: enabled
    action: "System time (22 : 00 : 39)."
  - id: field-timesync
    label: TimeSync
    type: button
    state: enabled
    action: Opens time-synchronization settings.
  - id: field-saveload
    label: Save&Load
    type: button
    state: enabled
    action: Opens save/load of instrument settings (Open).
  - id: field-calibration
    label: Calibration
    type: button
    state: enabled
    action: Opens calibration (Open), under Cali&Update.
  - id: field-firmware
    label: Firmware
    type: button
    state: enabled
    action: Opens firmware update (Open), under Cali&Update.
  - id: field-security
    label: Security
    type: button
    state: enabled
    action: Opens security settings (Open), under Security&Info.
  - id: field-systeminfo
    label: SystemInfo
    type: button
    state: enabled
    action: Opens system information (Open), under Security&Info.
  - id: sk-pageup
    label: Page Up
    type: softkey
    state: enabled
    action: Scroll the settings list up.
  - id: sk-pagedown
    label: Page Down
    type: softkey
    state: enabled
    action: Scroll the settings list down.
  - id: sk-prev
    label: PREV
    type: softkey
    state: enabled
    action: Move to the previous field/tab.
  - id: sk-next
    label: NEXT
    type: softkey
    state: enabled
    action: Move to the next field/tab.
  - id: sk-enter
    label: Enter
    type: softkey
    state: enabled
    action: Confirm/edit the selected field.
  - id: sk-exitmenu
    label: Exit Menu
    type: softkey
    state: enabled
    action: Close the configuration menu.
---

# Configuration — System

## Purpose

The Configuration menu is a four-tab dialog (System · Display · Interface · Lan Setup) reached from the MENU key. The **System** tab groups instrument-wide settings: sound (Beep, Key Sound), Date/Time and time sync, settings Save/Load, Calibration and Firmware update, and Security/System info. Navigation is by the bottom softkey row (Page Up/Down, PREV/NEXT, Enter, Exit Menu) or touch on the tab strip.

## Controls inventory

The **tab strip** runs across the top: `tab-system` (active), `tab-display`, `tab-interface`, `tab-lan`, with `btn-menu` (`MENU`) at the far right.

The **left column** holds `field-beep` (`Beep`/ON), `field-keysound` (`Key Sound`/ON), then a **Date/Time** group with `field-date` (`2026 / 05 / 26`), `field-time` (`22 : 00 : 39`) and `field-timesync` (`TimeSync`/Open).

The **right column** holds a **Parameter** group (`field-saveload` — `Save&Load`/Open), a **Cali&Update** group (`field-calibration`, `field-firmware`), and a **Security&Info** group (`field-security`, `field-systeminfo`).

The **softkey row** holds `sk-pageup`, `sk-pagedown`, `sk-prev`, `sk-next`, `sk-enter`, `sk-exitmenu`.

## State variations

This is the System tab. The other three tabs are documented as `config-display`, `config-interface`, and `config-lan`. The active-field highlight (orange) moves as the user navigates.

## Visible text (verbatim)

Tabs: `System` · `Display` · `Interface` · `Lan Setup` · `MENU`.

Left column: `Beep` `ON` · `Key Sound` `ON` · `Date/Time` · `Date` `2026 / 05 / 26` · `Time` `22 : 00 : 39` · `TimeSync` `Open`.

Right column: `Parameter` · `Save&Load` `Open` · `Cali&Update` · `Calibration` `Open` · `Firmware` `Open` · `Security&Info` · `Security` `Open` · `SystemInfo` `Open`.

Softkeys: `Page Up` · `Page Down` · `PREV` · `NEXT` · `Enter` · `Exit Menu`.

## Confidence notes

- All labels legible at the downscale. Sub-dialogs behind the `Open` buttons (Calibration, Firmware, Security, SystemInfo, Save&Load, TimeSync) are not captured in this set.

## Manual references

- **`Configure System`** ([`docs/user-manual/configure-system.md`](../docs/user-manual/configure-system.md), `user-manual` pp. 143-161) — every field on this tab: `Beep`, `Key Sound`, `Date`, `Time`, `TimeSync`, `Save&Load`, `Calibration`, `Security`.
- **`System & Firmware`** ([`docs/user-manual/system-and-firmware.md`](../docs/user-manual/system-and-firmware.md), `user-manual` pp. 139-142) — `View System Info` and `Firmware Update`, behind the `SystemInfo` / `Firmware` (and related `Calibration`) `Open` buttons.
- **`Status Bar`** ([`docs/user-manual/status-bar.md`](../docs/user-manual/status-bar.md), `user-manual` pp. 21-23) — the shared top status bar.

## Source photo

Selected from `uploads/photos/`: **Configuration Menu System Tab Screenshot.BMP** — the System tab with all field groups legible.
