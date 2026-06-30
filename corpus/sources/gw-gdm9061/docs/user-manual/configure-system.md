---
class: doc-section
doc_id: user-manual
doc_title: "Dual Measurement Multimeter GDM-9060/9061 User Manual"
doc_number: null
doc_date: 2024-03
applies_to: [gw-gdm9061, gw-gdm9060]
section_id: configure-system
section_title: Configure System
parent_section: null
page_range: "143-161"
related_screens: [config-system]
related_hardware: []
---

# Configure System

## Summary

The Menu Setting → Configure System group: every setting reachable from the System configuration tab — Beep, Key Sound, Date, Time, TimeSync, Save & Load (parameter groups), Calibration (frequency / DC gain / DMM), Firmware Update, Security (Lan password), and View System Info. Backs the `config-system` screen. Each setting's options and the on-screen menu fields are transcribed verbatim.

## Content

This chapter (Menu Setting → Configure System) covers:

- Beep Setting — 144
- Key Sound Setting — 145
- Date Setting — 146
- Time Setting — 147
- TimeSync Setting — 148
- Save and Load Setting — 149
- Calibration Setting — 154
- Firmware Update — 157
- Security Setting — 158
- View System Info — 161

### Beep Setting

**Background** — Enable or Disable Beep Sound.

**Step**

1. Press the `Menu` key, the System configuration menu appears.

   *Figure: System configuration menu, `Beep` row highlighted, set to `ON`.*

2. Press the `F5 (Enter)` key or Knob key followed by scrolling Knob key or pressing `+/-` keys to land on the `ON` option.

   *Figure: `Beep` dropdown open showing `ON` / `OFF`.*

3. Press the `F5 (Enter)` key or Knob key to select the `ON` option.

### Key Sound Setting

**Background** — Enable or Disable Key Sound.

**Step**

1. Press the `Menu` key, the System configuration menu appears. And then press the `NEXT` key repeatedly or scroll the Knob key to move to the `Key Sound` field.

   *Figure: System configuration menu, `Key Sound` row highlighted, set to `ON`.*

2. Press the `F5 (Enter)` key or Knob key followed by scrolling Knob key or pressing `+/-` keys to land on the `On` option.

   *Figure: `Key Sound` dropdown open showing `ON` / `OFF`.*

3. Press the `F5 (Enter)` key or Knob key to select the `ON` option for Key Sound.

### Date Setting

**Background** — Manually adjust date for system or automatically set date via TimeSync setting.

**Step**

1. Press the `Menu` key, the System configuration menu appears. And press the `NEXT` key repeatedly or scroll the Knob key to move to the `Date/Time - Date` field.

   *Figure: System configuration menu, `Date` field highlighted (`2018 / 01 / 31`).*

2. Use the Left/Right keys to move the cursor followed by scrolling Knob key or pressing `+/-` keys to define year of Date. Also, you can press Number keys to directly input a specific digit.

   *Figure: `Date` field with the year digits in edit/cursor state.*

3. Press the `F5 (Enter)` key or Knob key to confirm the input digit for year of Date.

4. Repeat steps 2 to 3 for month and day.

### Time Setting

**Background** — Manually adjust time for system or automatically set time via TimeSync setting.

**Step**

1. Press the `Menu` key, the System configuration menu appears. And press the `NEXT` key repeatedly or scroll the Knob key to move to the `Date/Time - Time` field.

   *Figure: System configuration menu, `Time` field highlighted.*

2. Use the Left/Right keys to move the cursor followed by scrolling Knob key or pressing `+/-` keys to define hour of Time. Also, you can press Number keys to directly input a specific digit.

   *Figure: `Time` field with the hour digits in edit/cursor state.*

3. Press the `F5 (Enter)` key or Knob key to confirm the input digit for hour of Time.

4. Repeat steps 2 to 3 for minute and second.

### TimeSync Setting

**Background** — TimeSync is only available when connecting to internet with appropriate network setting.

**Step**

1. Press the `Menu` key, the System configuration menu appears. And press the `NEXT` key repeatedly or scroll the Knob key to move to the `Date/Time - TimeSync` field.

   *Figure: System configuration menu, `TimeSync` row highlighted with an `Open` button.*

2. Press the `F5 (Enter)` key or Knob key to enter the Internet Time Sync menu.

   *Figure: Internet Time Sync popup — `Enable Synchronize`, `Synchronize Server  time.nist.gov`, `Synchronize Now  Now`, `Synchronize Time  7 Days`, `Set the time zone  UTC 00 : 00`, `Last Update Time is  2017/01/01 00:00:00`, with a `Return` button.*

**Internet Time Synchronize**

| Field | Description / Options |
|---|---|
| Enable Synchronize | Enable or disable time sync. Check / Uncheck |
| Synchronize Server | Choose remote server for time sync. `time.nust.gov` / `time-nw.nist.gov`. The 2nd server is available for user customization. Refer to page 275 for SCPI setting. |
| Synchronize Now | Retrieve the currently standard time from the remote sever. |
| Synchronize Time | Define an interval to retrieve the currently standard time from the remote sever. `7 Days` / `14 Days` / `30 Days` |
| Set the time zone | Set UTC (Coordinated Universal Time). hour / minute |
| Last Update Time is | Display the currently standard time. |

### Save and Load Setting

**Background**

The GDM-906X can save up to 5 instrument settings.

The settings can save the state, function, I/O and range.

The Recall function enables saved settings or default settings to be recalled at the next power up or immediately.

**Step**

1. Press the `Menu` key, the System configuration menu appears. And press the `NEXT` key repeatedly or scroll the Knob key to move to the `Parameter – Save&Load` field.

   *Figure: System configuration menu, `Save&Load` row highlighted with an `Open` button.*

2. Press the `F5 (Enter)` key or Knob key to enter the Parameter Save&Load menu.

   *Figure: Parameter Save&Load popup — `(Save)1.Select a Group  [1]`, `(Save)2.Note  No Save  Edit`, `(Save)3.Enter  Save`, `(Load)1.Select a Group  Default`, `(Load)2.Note  Use Default`, `(Load)3.Select a Action  None`, with a `Return` button.*

#### Parameter Save&Load — Save

**Select a Group**

1. Press the `F5 (Enter)` key or Knob key to open the dropdown menu.

   *Figure: `(Save)1.Select a Group` dropdown open showing `1` / `2` / `3` / `Default`.*

2. Scroll the Knob key or pressing `+/-` keys followed by pressing the `F5 (Enter)` key or Knob key to confirm the group selection.

   *Figure: `(Save)1.Select a Group` set to `3`.*

> **NOTE:**
> 1. Press the `F5 (Enter)` key or Knob key to open the KeyBoard page.
>
>    *Figure: KeyBoard popup with `No Save` in the text field and an A–Z / 0–9 character grid; softkeys `Caps Lock`, `Backspace`, `OK`, `Input`, `Exit KeyB`.*
>
> 2. Press the `F2 (Backspace)` key to clear default words.
>
>    *Figure: KeyBoard popup with the text field cleared.*
>
> 3. Use the Left/Right and `+/-` keys or scroll the Knob key to move the cursor to desired word followed by pressing the `F5 (Input)` key or Knob key to input the word.
>
>    *Figure: KeyBoard popup showing `ABC` entered in the text field.*
>
> 4. Press the `F4 (OK)` or the Knob key to confirm the input words.
>
>    *Figure: Parameter Save&Load popup with `(Save)2.Note` showing `ABC`.*

**Enter**

3. Press the `F5 (Enter)` key or Knob key to saved the input words.

   *Figure: Parameter Save&Load popup with a `Parameter save ok` confirmation message.*

#### Load

**Select a Group**

1. Press the `F5 (Enter)` key or Knob key to open the dropdown menu.

   *Figure: `(Load)1.Select a Group` dropdown open showing `1` / `2` / `3`.*

2. Scroll the Knob key or press `+/-` keys followed by pressing the `F5 (Enter)` key or Knob key to confirm the group selection.

   *Figure: `(Load)1.Select a Group` set to `3`, `(Load)3.Select a Action` set to `PowerOn`.*

> **NOTE:**
> 1. The currently selected group name appears in the Note field.
>
>    *Figure: Parameter Save&Load popup with `(Load)2.Note` showing `ABC`.*

**Select a Action**

1. Press the `F5 (Enter)` key or Knob key to open the dropdown menu.

   *Figure: `(Load)3.Select a Action` dropdown open showing `None` / `PowerOn` / `Now`.*

2. Scroll the Knob key or press `+/-` keys followed by pressing the `F5 (Enter)` key or Knob key to confirm the action selection.

   *Figure: `(Load)3.Select a Action` set to `PowerOn`.*

3. Press the `F5 (Enter)` key or Knob key to confirm the action selection.

   *Figure: Parameter Save&Load popup with a `Parameter Load Setup Ok` confirmation message.*

**Parameter**

- `None`: no recall action
- `Power On`: recall at next power up
- `Now`: recall instantly

### Calibration Setting

**Background** — This section mainly provides several calibrations for frequency, DC gain and DMM. Note that only the certified technician can operate the calibration procedure. Refer to the qualified personnel for more details when necessary.

**Step**

1. Press the `Menu` key, the System configuration menu appears. And press the `NEXT` key repeatedly or scroll the Knob key to move to the `Cali&Update - Calibration` field.

   *Figure: System configuration menu, `Calibration` row highlighted with an `Open` button.*

2. Press the `F5 (Enter)` key or Knob key to enter the Calibration menu.

   *Figure: Calibration popup — `FREQ Compensate (1.000017)` with a checkbox, `FREQ Cali Mathod  Auto`, `Please Input 1kHz Source  Start`, `DC Gain Calibration  Start`, `(DMM)Step 1:Password`, `(DMM)Step 2:Start Calibration  Start`, with a `Return` button.*

**Frequency Calibration**

| Field | Description / Options |
|---|---|
| Frequency Compensate (1.000017) | Enable or disable frequency compensation (the value indicates the compensation coefficient; default: Factory calibration value). Check the box to enable: `Frequency = Original Frequency x Compensate Coefficient`. Uncheck the box to disable: `Frequency = Original Frequency`. |
| FREQ Cali Mathod | Select either Auto or Manual frequency cali method. When Manual is opted, input a frequency compensation coefficient directly. |

When `FREQ Cali Mathod` = Manual:

1. Select Manual mode.

   *Figure: Calibration popup with `FREQ Cali Mathod` set to `Manual` and a `Please Input Compensate Value` field showing `1.000017`.*

2. Input a compensation coefficient.

   *Figure: `Please Input Compensate Value` field in edit state.*

3. Use the Left/Right keys to move the cursor followed by pressing the `F5 (Enter)` key to save the frequency compensation coefficient. The value changes as the figure shown below.

   *Figure: `FREQ Compensate (1.000016)` reflecting the saved value.*

| Field | Description |
|---|---|
| Please Input 1kHz Source | Start the frequency compensation coefficient calculation and connect the 1k Hz standard source to the Input HI and LO terminals (only available when Auto mode is opted). |

   *Figure: Calibration popup with `Please Input 1kHz Source` highlighted (Auto mode).*

> ⚠ **NOTE:** Please regard the 1k Hz standard source as the baseline for frequency compensation coefficient calculation. The accuracy of value after compensation is relevant to the connected 1k Hz standard source. For instance, if the accuracy of 1k Hz standard source is +-5ppm, the value after compensation will be +-5ppm plus the accuracy of +-1ppm.

**DC Gain Calibration**

| Field | Description |
|---|---|
| DC Gain Calibration | Click "Start" to execute DC Gain Calibration, which is an internally self-calibration function that does Not require external signal source. It corrects the gain of internal amplifier, though it is not necessary for general conditions unless the significant change in the gain of internal amplifier. It is suggested performing this calibration one time monthly. |

**DMM Calibration**

> ⚠ **NOTE:** The calibration procedure can be only executed by the certified technician in accordance with the standard instruments. Refer to the manufacturer or qualified personnel of authorized dealer for details.

### Firmware Update

**Background** — This section is for updating the latest firmware.

**Step**

1. Press the `Menu` key, the System configuration menu appears. And press the `NEXT` key repeatedly or scroll the Knob key to move to the `Cali&Update - Firmware` field.

   *Figure: System configuration menu, `Firmware` row highlighted with an `Open` button.*

2. Press the `F5 (Enter)` key or Knob key to enter the Firmware Update menu.

   *Figure: Firmware Update popup — `Step 1:Check USB Files  Check`, `<Master> Current: V1.03  New: NoFile`, `<Slave> Current: V1.01  New: NoFile`, `Step 2:Update  Start`, with a `Return` button.*

**Firmware Update — Update Process**

Prior to update, make sure if the required firmware file is stored within the flash drive plugged into the USB port on the front panel. Also, user can check the current Master and Slave firmware version respectively in this menu.

1. Press the `F5 (Enter)` key or Knob key first, the qualified firmware version will show then.

   *Figure: Firmware Update popup showing detected `New:` versions after Check.*

   > **NOTE:** If flash drive has no update files, it will show as the figure below.

   *Figure: Firmware Update popup showing `New: NoFile` for both Master and Slave.*

2. Press the `NEXT` key or scroll Knob key to move to the Update followed by pressing the `F5 (Enter)` key or Knob key to Start update.

   *Figure: Firmware Update popup with `Step 2:Update` row highlighted.*

### Security Setting

**Background** — This section is to change the password and enable or disable Lan password.

**Step**

1. Press the `Menu` key, the System configuration menu appears. And press the `NEXT` key repeatedly or scroll the Knob key to move to the `Security&Info – Security` field.

   *Figure: System configuration menu, `Security` row highlighted with an `Open` button.*

3. Press the `F5 (Enter)` key or Knob key to enter the Please Input Password page.

   *Figure: Please Input Password popup with an empty text field and a `0`–`9` numeric grid; softkeys `Backspace`, `OK`, `Input`, `Exit PW`.*

3. Use the Left/Right and `+/-` keys or scroll the Knob key to move the cursor followed by pressing the `F5 (Input)` key or the Knob key to input the password.

   *Figure: Please Input Password popup with `12345678` entered.*

4. Press the `F4 (OK)` key or Knob key to enter the Security page.

   *Figure: Security popup — `Lan Password Enable` checkbox, `Modify Password` group with `Old Password(4-8 numeric)`, `New Password(4-8 numeric)`, `Confirm Password(4-8 numeric)`, `Modify Password  Start`, with a `Return` button.*

**Security**

| Field | Description / Options |
|---|---|
| Lan Password Enable | Enable or disable password requirement for Lan web and telnet Control. Check / Uncheck |
| Old Password | Enter the old password |
| New Password | Enter the new password |
| Confirm Password | Enter the new password again |
| Modify Password | Change password by clicking Start |

### View System Info

**Background** — View system information including Vendor, Model Name, Serial Number, Master Firmware and Slave Firmware.

**Step**

1. Press the `Menu` key, the System configuration menu appears. And press the `NEXT` key repeatedly or scroll the Knob key to move to the `Security&Info – SystemInfo` field.

   *Figure: System configuration menu, `SystemInfo` row highlighted with an `Open` button.*

2. Press the `F5 (Enter)` key or Knob key to enter the System Information where all the critical contents are exposed for check.

   *Figure: System Information popup — Vendor: `GWInstek`, Model Name: `GDM-9061`, Serial Number: `GWS000010`, Master Firmware: `V1.02`, Slave Firmware: `V1.01`, with a `Return` button.*

## Cross-references

- [`screens/config-system.md`](../../screens/config-system.md) — this is the screen described throughout: the `System` tab fields (Beep, Key Sound, Date, Time, TimeSync) and the `Parameter` / `Cali&Update` / `Security&Info` `Open` buttons (Save&Load, Calibration, Firmware, Security, SystemInfo) all originate here.

## Confidence notes

- The "Firmware Update" and "View System Info" topics appear both here (pages 157, 161) and as their own chapter "System & Firmware" (pages 139–142). The two `View System Info` figures show different firmware versions — page 140 (Master `V1.03` / Slave `V1.01`) vs. page 161 (Master `V1.02` / Slave `V1.01`); each transcribed verbatim from its figure.
- The Security Setting steps are numbered `1, 3, 3, 4` in the source (the second `3.` appears to be a typo for step 2); preserved as printed.
- `time.nust.gov` in the Synchronize Server row is transcribed exactly as printed (note "nust"); the menu figure on page 148 shows `time.nist.gov`. Likely a source typo but left verbatim per the no-fabrication rule.
- "Mathod" (FREQ Cali Mathod), "sever" (remote sever), and "saved the input words" are source spellings/grammar, transcribed verbatim.
