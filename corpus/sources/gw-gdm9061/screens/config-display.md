---
software: GDM9061
software_version: TBD
screen_id: config-display
screen_title: Configuration — Display
screen_type: config
image: config-display.jpg
source_photo: uploads/photos/Configuration Menu Display Tab Screenshot.BMP
function_state: Configuration menu, Display tab active
navigation_path: [Menu, Configuration, Display]
parent_screens:
  - config-system
child_screens: []
controls:
  - id: tab-system
    label: System
    type: tab
    state: enabled
    action: Switches to the System settings tab (see config-system).
  - id: tab-display
    label: Display
    type: tab
    state: active
    action: Display settings tab (active).
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
  - id: field-brightness
    label: Brightness
    type: input
    state: active
    action: Backlight brightness percentage (060 %), highlighted/active field.
  - id: field-autooff
    label: AutoOff
    type: dropdown
    state: enabled
    action: Backlight auto-off On/Off (OFF).
  - id: field-autoofftime
    label: AutoOffTime
    type: input
    state: enabled
    action: Backlight auto-off timeout in minutes (030).
  - id: field-1stcolor
    label: 1ST Color
    type: dropdown
    state: enabled
    action: Primary readout font color (WHITE).
  - id: field-2ndcolor
    label: 2ND Color
    type: dropdown
    state: enabled
    action: Secondary readout font color (WHITE).
  - id: field-mathcolor
    label: Math Color
    type: dropdown
    state: enabled
    action: Math readout font color (WHITE).
  - id: field-displaymode
    label: DisplayMode
    type: dropdown
    state: enabled
    action: Math-off display mode (OFF), under Math Off Display.
  - id: field-antialiasing
    label: Antialiasing
    type: dropdown
    state: enabled
    action: Big-font antialiasing On/Off (OFF), under BigFont Option.
  - id: field-additionalinfo
    label: AdditionalInfo
    type: button
    state: enabled
    action: Opens additional info options (Open), under Other Option.
  - id: field-language
    label: Language
    type: button
    state: enabled
    action: Opens language selection (Open), under Other Option.
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

# Configuration — Display

## Purpose

The **Display** tab of the Configuration menu controls the screen's appearance: backlight (Brightness, AutoOff, AutoOffTime), readout Font Color (1ST / 2ND / Math), the Math-off display mode, BigFont antialiasing, and Other Options (AdditionalInfo, Language). Navigation matches the other config tabs via the bottom softkey row.

## Controls inventory

The **tab strip**: `tab-system`, `tab-display` (active), `tab-interface`, `tab-lan`, `btn-menu` (`MENU`).

The **left column** has a **BackLight** group — `field-brightness` (`060 %`, highlighted), `field-autooff` (`OFF`), `field-autoofftime` (`030 min`) — and a **Font Color** group — `field-1stcolor`, `field-2ndcolor`, `field-mathcolor`, all `WHITE`.

The **right column** has **Math Off Display** (`field-displaymode`/OFF), **BigFont Option** (`field-antialiasing`/OFF), and **Other Option** (`field-additionalinfo`/Open, `field-language`/Open).

The **softkey row** is the shared config navigation set: `sk-pageup`, `sk-pagedown`, `sk-prev`, `sk-next`, `sk-enter`, `sk-exitmenu`.

## State variations

This is the Display tab. The other three tabs are `config-system`, `config-interface`, `config-lan`. The active-field highlight moves as the user navigates (here on Brightness).

## Visible text (verbatim)

Tabs: `System` · `Display` · `Interface` · `Lan Setup` · `MENU`.

Left column: `BackLight` · `Brightness` `060` `%` · `AutoOff` `OFF` · `AutoOffTime` `030` `min` · `Font Color` · `1ST Color` `WHITE` · `2ND Color` `WHITE` · `Math Color` `WHITE`.

Right column: `Math Off Display` · `DisplayMode` `OFF` · `BigFont Option` · `Antialiasing` `OFF` · `Other Option` · `AdditionalInfo` `Open` · `Language` `Open`.

Softkeys: `Page Up` · `Page Down` · `PREV` · `NEXT` · `Enter` · `Exit Menu`.

## Confidence notes

- All labels legible at the downscale. Sub-dialogs behind `AdditionalInfo` and `Language` (Open) are not captured.

## Manual references

> Pending. Manual will be paired in a later pass (GDM9061 User's Manual — Display configuration: backlight, font color, language).

## Source photo

Selected from `uploads/photos/`: **Configuration Menu Display Tab Screenshot.BMP** — the Display tab with all groups legible.
