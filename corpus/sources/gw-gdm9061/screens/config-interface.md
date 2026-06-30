---
software: GDM9061
software_version: TBD
screen_id: config-interface
screen_title: Configuration — Interface
screen_type: config
image: config-interface.jpg
source_photo: uploads/photos/Configuration Menu Interface Tab Screenshot.BMP
function_state: Configuration menu, Interface tab active
navigation_path: [Menu, Configuration, Interface]
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
    state: enabled
    action: Switches to the Display settings tab (see config-display).
  - id: tab-interface
    label: Interface
    type: tab
    state: active
    action: Interface settings tab (active).
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
  - id: field-interface
    label: Interface
    type: dropdown
    state: active
    action: Active remote-control interface (LAN), highlighted field.
  - id: field-baudrate
    label: BaudRate
    type: dropdown
    state: enabled
    action: RS232 baud rate (115200).
  - id: field-flowctrl
    label: FlowCtrl
    type: dropdown
    state: enabled
    action: RS232 flow control (OFF).
  - id: field-talkmode
    label: TalkMode
    type: dropdown
    state: enabled
    action: RS232 talk-only mode (OFF).
  - id: field-endofline
    label: EndOfLine
    type: dropdown
    state: enabled
    action: RS232 TX terminator (CR+LF), under RS232:TX Term.
  - id: field-separation
    label: Separation
    type: dropdown
    state: enabled
    action: RS232 field separator (COMMA), under RS232:TX Term.
  - id: field-lanconndelay
    label: LanConnDelay
    type: input
    state: enabled
    action: LAN connection delay in seconds (01).
  - id: field-protocol
    label: Protocol
    type: dropdown
    state: enabled
    action: USB protocol (USBTMC), under USB.
  - id: field-identity
    label: Identity
    type: dropdown
    state: enabled
    action: SCPI identification string (Default), under SCPI ID.
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

# Configuration — Interface

## Purpose

The **Interface** tab of the Configuration menu selects and configures the remote-control interfaces. It sets the active Interface (LAN here), RS232 parameters (BaudRate, FlowCtrl, TalkMode, TX terminator EndOfLine and Separation), the LAN connection delay, the USB Protocol (USBTMC), and the SCPI identity string. Navigation matches the other config tabs.

## Controls inventory

The **tab strip**: `tab-system`, `tab-display`, `tab-interface` (active), `tab-lan`, `btn-menu` (`MENU`).

The **left column** has `field-interface` (`LAN`, highlighted), an **RS232** group (`field-baudrate`/115200, `field-flowctrl`/OFF, `field-talkmode`/OFF), and an **RS232:TX Term** group (`field-endofline`/CR+LF, `field-separation`/COMMA).

The **right column** has `field-lanconndelay` (`01 sec`), a **USB** group (`field-protocol`/USBTMC), and a **SCPI ID** group (`field-identity`/Default).

The **softkey row** is the shared config navigation set: `sk-pageup`, `sk-pagedown`, `sk-prev`, `sk-next`, `sk-enter`, `sk-exitmenu`.

## State variations

This is the Interface tab. The other three tabs are `config-system`, `config-display`, `config-lan`. Setting `field-interface` to LAN is what makes the Lan Setup tab relevant (see config-lan).

## Visible text (verbatim)

Tabs: `System` · `Display` · `Interface` · `Lan Setup` · `MENU`.

Left column: `Interface` `LAN` · `RS232` · `BaudRate` `115200` · `FlowCtrl` `OFF` · `TalkMode` `OFF` · `RS232:TX Term` · `EndOfLine` `CR+LF` · `Separation` `COMMA`.

Right column: `LanConnDelay` `01` `sec` · `USB` · `Protocol` `USBTMC` · `SCPI ID` · `Identity` `Default`.

Softkeys: `Page Up` · `Page Down` · `PREV` · `NEXT` · `Enter` · `Exit Menu`.

## Confidence notes

- All labels legible at the downscale. The full enumerations behind each dropdown (e.g. all available baud rates, all interface options) are not derivable from this single state.

## Manual references

> Pending. Manual will be paired in a later pass (GDM9061 User's Manual — Interface configuration: LAN/USB/RS232, SCPI).

## Source photo

Selected from `uploads/photos/`: **Configuration Menu Interface Tab Screenshot.BMP** — the Interface tab with all groups legible.
