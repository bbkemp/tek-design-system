---
software: GDM9061
software_version: TBD
screen_id: config-lan
screen_title: Configuration — Lan Setup
screen_type: config
image: config-lan.jpg
source_photo: uploads/photos/Configuration Menu Lan Setup Tab Screenshot.BMP
function_state: Configuration menu, Lan Setup tab active
navigation_path: [Menu, Configuration, Lan Setup]
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
    state: enabled
    action: Switches to the Interface settings tab (see config-interface).
  - id: tab-lan
    label: Lan Setup
    type: tab
    state: active
    action: LAN setup tab (active).
  - id: btn-menu
    label: MENU
    type: button
    state: enabled
    action: Menu button at the top-right of the dialog.
  - id: field-dhcp
    label: DHCP
    type: dropdown
    state: active
    action: DHCP On/Off (OFF), highlighted field. When OFF the IP Address Setup fields are user-editable.
  - id: field-ipaddress
    label: IP Address
    type: input
    state: enabled
    action: Static IP address (192.168.000.002), four octet fields.
  - id: field-subnet
    label: Subnet
    type: input
    state: enabled
    action: Subnet mask (255.255.255.000).
  - id: field-gateway
    label: Gateway
    type: input
    state: enabled
    action: Default gateway (192.168.000.000).
  - id: field-dns1
    label: DNS1
    type: input
    state: enabled
    action: Primary DNS (172.016.001.252).
  - id: field-dns2
    label: DNS2
    type: input
    state: enabled
    action: Secondary DNS (172.016.001.248).
  - id: field-macaddress
    label: MAC Address
    type: readout
    state: enabled
    action: Hardware MAC address (0022246AFECA), read-only.
  - id: field-web
    label: Web
    type: dropdown
    state: enabled
    action: Web server On/Off (ON), under Protocol.
  - id: field-telnet
    label: Telnet
    type: dropdown
    state: enabled
    action: Telnet server On/Off (ON).
  - id: field-telnetport
    label: Telnet Port
    type: input
    state: enabled
    action: Telnet port (03000).
  - id: field-telnetecho
    label: Telnet ECHO
    type: dropdown
    state: enabled
    action: Telnet echo On/Off (ON).
  - id: field-tcp
    label: TCP
    type: dropdown
    state: enabled
    action: Raw TCP socket On/Off (ON).
  - id: field-tcpport
    label: TCP Port
    type: input
    state: enabled
    action: TCP socket port (03001).
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

# Configuration — Lan Setup

## Purpose

The **Lan Setup** tab of the Configuration menu holds the network configuration: DHCP toggle, static IP Address Setup (IP, Subnet, Gateway, DNS1, DNS2), the read-only MAC Address, and the network Protocol services (Web, Telnet with port and echo, TCP with port). It is the tab that backs the LAN interface selected on `config-interface`. Navigation matches the other config tabs.

## Controls inventory

The **tab strip**: `tab-system`, `tab-display`, `tab-interface`, `tab-lan` (active), `btn-menu` (`MENU`).

The **left column** has `field-dhcp` (`OFF`, highlighted) and an **IP Address Setup** group as octet fields: `field-ipaddress` (`192.168.000.002`), `field-subnet` (`255.255.255.000`), `field-gateway` (`192.168.000.000`), `field-dns1` (`172.016.001.252`), `field-dns2` (`172.016.001.248`).

The **right column** has `field-macaddress` (`0022246AFECA`) and a **Protocol** group: `field-web` (ON), `field-telnet` (ON), `field-telnetport` (`03000`), `field-telnetecho` (ON), `field-tcp` (ON), `field-tcpport` (`03001`).

The **softkey row** is the shared config navigation set: `sk-pageup`, `sk-pagedown`, `sk-prev`, `sk-next`, `sk-enter`, `sk-exitmenu`.

## State variations

This is the Lan Setup tab. The other three tabs are `config-system`, `config-display`, `config-interface`. With `field-dhcp` ON the static IP fields would typically become read-only/auto — not separately captured.

## Visible text (verbatim)

Tabs: `System` · `Display` · `Interface` · `Lan Setup` · `MENU`.

Left column: `DHCP` `OFF` · `IP Address Setup` · `IP Address` `192 . 168 . 000 . 002` · `Subnet` `255 . 255 . 255 . 000` · `Gateway` `192 . 168 . 000 . 000` · `DNS1` `172 . 016 . 001 . 252` · `DNS2` `172 . 016 . 001 . 248`.

Right column: `MAC Address` `0022246AFECA` · `Protocol` · `Web` `ON` · `Telnet` `ON` · `Telnet Port` `03000` · `Telnet ECHO` `ON` · `TCP` `ON` · `TCP Port` `03001`.

Softkeys: `Page Up` · `Page Down` · `PREV` · `NEXT` · `Enter` · `Exit Menu`.

## Confidence notes

- All values legible at the downscale. MAC address transcribed as `0022246AFECA`; verify the exact grouping/characters against a higher-res capture before treating as authoritative.

## Manual references

> Pending. Manual will be paired in a later pass (GDM9061 User's Manual — LAN configuration: DHCP/static IP, Web/Telnet/TCP services).

## Source photo

Selected from `uploads/photos/`: **Configuration Menu Lan Setup Tab Screenshot.BMP** — the Lan Setup tab with all network and protocol fields legible.
