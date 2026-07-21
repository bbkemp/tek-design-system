---
provenance: observed
class: screen
software: 2450-EC
software_version: TBD
screen_id: system-info
screen_title: System status popup
screen_type: dialog
image: system-info.jpg
source_photo: uploads/photos/photo-666_singular_display_fullPicture.jpeg
function_state: MEASURE CURRENT 2-WIRE
navigation_path: [Home, System status popup]
parent_screens: [home]
child_screens: []
related_hardware:
  - front-panel
controls:
  - id: field-lan-mode
    label: "LAN Mode: Auto"
    type: readout
    state: active
    action: Read-only field — LAN configuration mode (Auto vs. Manual).
  - id: field-lan-status
    label: "LAN Status: Disconnected"
    type: readout
    state: active
    action: Read-only field — current LAN link state.
  - id: field-ip-address
    label: "IP Address: 0.0.0.0"
    type: readout
    state: active
    action: Read-only field — assigned IP address (none in this shot; LAN disconnected).
  - id: field-gateway
    label: "Gateway: 0.0.0.0"
    type: readout
    state: active
    action: Read-only field — gateway address.
  - id: field-subnet-mask
    label: "Subnet Mask: 0.0.0.0"
    type: readout
    state: active
    action: Read-only field — subnet mask.
  - id: field-dns-address
    label: "DNS Address: 10.42.16.77"
    type: readout
    state: active
    action: Read-only field — DNS server address.
  - id: field-gpib-address
    label: "GPIB Address: 1"
    type: readout
    state: active
    action: Read-only field — GPIB primary address.
  - id: field-tsp-link-node
    label: "TSP-Link Node: 1"
    type: readout
    state: active
    action: Read-only field — TSP-Link node number.
  - id: btn-change-settings
    label: Change Settings
    type: button
    state: enabled
    action: Opens the communication settings editor (presumably Menu > System > Communication). Destination not photographed.
---

# System status popup

## Purpose

Read-only communication/system status popup over the Home screen, summarizing the instrument's LAN, GPIB, and TSP-Link identity at a glance with a single `Change Settings` action to jump into editing. It is the quick answer to "what address is this box at" without leaving the measurement view.

## Controls inventory

The popup is a panel occupying the left half of the LCD over a dimmed Home screen (the primary readout's trailing `1 µA`, `AZERO`, the swipe-dot strip, and the source readout's `3 V` remain visible to the right). It has no visible title. Eight labeled read-only rows, top to bottom: `field-lan-mode` (`LAN Mode: Auto`), `field-lan-status` (`LAN Status: Disconnected`), `field-ip-address` (`IP Address: 0.0.0.0`), `field-gateway` (`Gateway: 0.0.0.0`), `field-subnet-mask` (`Subnet Mask: 0.0.0.0`), `field-dns-address` (`DNS Address: 10.42.16.77`), `field-gpib-address` (`GPIB Address: 1`), `field-tsp-link-node` (`TSP-Link Node: 1`). At the bottom left sits the one interactive element, `btn-change-settings` (`Change Settings`).

Bezel operation (`EXIT` to dismiss) applies as on every dialog; the bezel is documented in [`hardware/front-panel.md`](../hardware/front-panel.md).

## State variations

- Field values are live instrument state — with LAN connected, `LAN Status`, `IP Address`, `Gateway`, and `Subnet Mask` would populate. Only the disconnected state was photographed.
- The underlying Home screen shows `WAIT ▼` in the status bar and the output-on (blue) OUTPUT light in this shot; the popup itself is state-independent.

## Visible text (verbatim)

Popup: `LAN Mode:  Auto` · `LAN Status:  Disconnected` · `IP Address:  0.0.0.0` · `Gateway:  0.0.0.0` · `Subnet Mask:  0.0.0.0` · `DNS Address:  10.42.16.77` · `GPIB Address:  1` · `TSP-Link Node:  1` · `Change Settings`.

Background (Home screen, partially covered): `Local` · `defbuffer1` · `No Script` · `WAIT ▼` · `1 µA` *(trailing digits of the primary readout)* · `AZERO` · `3 V` *(trailing digit of the source readout)* · `20V` · `+00.0000V` · `10.5000µA`.

## Confidence notes

- **Launch affordance unconfirmed.** The popup plausibly opens from the round info/status icon at the right end of the status bar (visible in other Home shots), but no photo captures the tap; the navigation_path records only that it overlays Home.
- `DNS Address: 10.42.16.77` — digits read at moderate confidence (`10.42.16.77` could plausibly be `10.42.16.27`); a populated DNS alongside an all-zero IP is odd but transcribed as seen.
- No popup title is visible; "System status popup" is a descriptive name, not an on-screen label.
- `btn-change-settings` destination is inferred from the label and the Menu's System > Communication entry; not photographed.
- Background source-row values are dim; moderate confidence.

## Manual references

> Pending. Manual will be paired in a later pass (2450 Reference Manual, sections covering remote communications interfaces — LAN, GPIB, TSP-Link; no genuine match in the corpus's currently processed user-manual chunks).

## Source photo

Selected from `uploads/photos/`: **photo-666_singular_display_fullPicture.jpeg** — the only shot of this popup. All eight field labels and values are legible after enlargement; no hand over the LCD.
