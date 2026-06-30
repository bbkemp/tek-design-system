---
class: doc-section
doc_id: user-manual
doc_title: "Dual Measurement Multimeter GDM-9060/9061 User Manual"
doc_number: null
doc_date: 2024-03
applies_to: [gw-gdm9061, gw-gdm9060]
section_id: system-and-firmware
section_title: System & Firmware
parent_section: null
page_range: "139-142"
related_screens: [config-system]
related_hardware: []
---

# System & Firmware

## Summary

Two procedures reached from the System configuration menu: viewing read-only system information (Vendor, Model Name, Serial Number, Master/Slave firmware versions), and updating the instrument firmware from a USB flash drive plugged into the front panel. Both back the `config-system` tab's `Open` buttons for SystemInfo and Firmware.

## Content

This chapter covers:

- View System Info — 140
- Firmware Update — 141

### View System Info

**Background** — View system information including Vendor, Model Name, Serial Number, Master Firmware and Slave Firmware.

**Step**

1. Press the `Menu` key, the System configuration menu appears. And press the `NEXT` key repeatedly or scroll the Knob key to move to the `Security&Info – SystemInfo` field.

   *Figure: System configuration menu with `SystemInfo` row highlighted under `Security&Info`.*

2. Press the `F5 (Enter)` key or Knob key to enter the System Information where all the critical contents are exposed for check.

   *Figure: System Information popup — Vendor: `GWInstek`, Model Name: `GDM-9061`, Serial Number: `GWS000010`, Master Firmware: `V1.03`, Slave Firmware: `V1.01`, with a `Return` button.*

### Firmware Update

**Background** — This section is for updating the latest firmware.

**Step**

1. Press the `Menu` key, the System configuration menu appears. And press the `NEXT` key repeatedly or scroll the Knob key to move to the `Cali&Update - Firmware` field.

   *Figure: System configuration menu with `Firmware` row highlighted under `Cali&Update`.*

2. Press the `F5 (Enter)` key or Knob key to enter the Firmware Update menu.

   *Figure: Firmware Update popup — `Step 1:Check USB Files` with `Check` button, `<Master> Current: V1.03  New: NoFile`, `<Slave> Current: V1.01  New: NoFile`, `Step 2:Update` with `Start` button, and a `Return` button.*

**Firmware Update — Update Process**

Prior to update, make sure if the required firmware file is stored within the flash drive plugged into the USB port on the front panel. Also, user can check the current Master and Slave firmware version respectively in this menu.

> **NOTE:** Prior to update, please rename the downloaded firmware files as below:
> - Master file: `M_IMAGE.bin`
> - Slave file: `S_IMAGE.bin`

1. Press the `F5 (Enter)` key or Knob key first, the qualified firmware version will show then.

   *Figure: Firmware Update popup showing detected `New:` versions (`V1.03` / `V1.01`) after Check.*

   > **NOTE:** If flash drive has no update files, it will show as the figure below.

   *Figure: Firmware Update popup showing `New: NoFile` for both Master and Slave when no update files are present.*

2. Press the `NEXT` key or scroll Knob key to move to the Update followed by pressing the `F5 (Enter)` key or Knob key to Start update.

   *Figure: Firmware Update popup with `Step 2:Update` row highlighted.*

## Cross-references

- [`screens/config-system.md`](../../screens/config-system.md) — the `Security&Info – SystemInfo` and `Cali&Update – Firmware` `Open` buttons launch the SystemInfo and Firmware Update popups documented here.

## Confidence notes

- The two `View System Info` figures show different firmware versions: page 140 shows Master `V1.03` / Slave `V1.01`; page 161 (the duplicate `View System Info` topic inside the Menu Setting chapter) shows Master `V1.02` / Slave `V1.01`. Transcribed each verbatim from its own figure; the difference is a captured-on-different-build artifact, not an error.
- The "Firmware Update" procedure appears twice in the manual (here at page 141 and again at page 157 within "Configure System"). This chunk transcribes the page 141 instance; `configure-system.md` notes the page 157 duplicate.
