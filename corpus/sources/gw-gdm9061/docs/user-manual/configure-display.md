---
class: doc-section
doc_id: user-manual
doc_title: "Dual Measurement Multimeter GDM-9060/9061 User Manual"
doc_number: null
doc_date: 2024-03
applies_to: [gw-gdm9061, gw-gdm9060]
section_id: configure-display
section_title: Configure Display
parent_section: null
page_range: "162-180"
related_screens: [config-display]
related_hardware: []
---

# Configure Display

## Summary

The Menu Setting → Configure Display group: every setting on the Display configuration tab — BackLight (Brightness, Auto Off, Auto Off Time), Font Color (1ST, 2ND, Math), Math Off Display (DisplayMode: Time / Text), BigFont Option (Antialiasing), and Other Option (Additional Info, Language). Backs the `config-display` screen. Settings, option lists, and display-result figures transcribed verbatim.

## Content

This chapter (Menu Setting → Configure Display) covers:

- Brightness Setting — 162
- Auto Off Setting — 163
- Auto Off Time Setting — 164
- 1ST Color Setting — 166
- 2ND Color Setting — 167
- Math Color Setting — 169
- Display Mode Setting — 171
- Anti Aliasing Setting — 176
- Additional Info Setting — 177
- Language Setting — 179

### Brightness Setting

**Background** — Backlight brightness adjustment

**Step**

1. Press the `Menu` key followed by pressing the `Page Down` key repeatedly until the Display configuration menu appears.

   *Figure: Display configuration menu — `BackLight` group (`Brightness`, `AutoOff`, `AutoOffTime`), `Font Color` group (`1ST Color`, `2ND Color`, `Math Color`), `Math Off Display` (`DisplayMode`), `BigFont Option` (`Antialiasing`), `Other Option` (`AdditionalInfo`, `Language`). `Brightness` highlighted (`060 %`).*

2. Use the Left/Right keys to move the cursor followed by scrolling Knob key or pressing `+/-` keys to define digit. Also, you can press Number keys to directly input a specific digit.

   *Figure: `Brightness` field in edit state (`08...`).*

3. Press the `F5 (Enter)` key or Knob key to confirm the input digit for backlight brightness.

### Auto Off Setting

**Background** — Enable or disable automatic brightness adjustment

**Step**

1. Press the `Menu` key followed by pressing the `Page Down` key repeatedly until the Display configuration menu appears.

   *Figure: Display configuration menu, `Brightness` highlighted.*

2. Press the `NEXT` key repeatedly or scroll the Knob key to move to the `BackLight - AutoOff` field.

   *Figure: Display configuration menu, `AutoOff` row highlighted (`OFF`).*

3. Press the `F5 (Enter)` key or Knob key followed by scrolling Knob key or pressing `+/-` keys to select the `ON` option.

   *Figure: `AutoOff` dropdown open showing `OFF` / `ON`.*

4. Press the `F5 (Enter)` key or Knob key to confirm the `ON` option for AutoOff.

### Auto Off Time Setting

**Background** — Set the duration before automatic brightness adjustment. When the machine has been idle for the set duration, the screen will change to automatic brightness adjustment.

> ⚠ **NOTE:** Auto Off Time will be activated only when Auto Off option is turned ON.

**Step**

1. Press the `Menu` key followed by pressing the `Page Down` key repeatedly until the Display configuration menu appears.

   *Figure: Display configuration menu, `Brightness` highlighted.*

2. Press the `NEXT` key repeatedly or scroll the Knob key to move to the `BackLight – AutoOffTime` field.

   *Figure: Display configuration menu, `AutoOffTime` row highlighted (`030 min`).*

3. Use the Left/Right keys to move the cursor followed by scrolling Knob key or pressing `+/-` keys to define minutes. Also, you can press Number keys to directly input a specific minutes.

   *Figure: `AutoOffTime` field in edit state (`020 min`).*

4. Press the `F5 (Enter)` key or Knob key to confirm the input minutes for Auto Off Time.

### 1ST Color Setting

**Background** — Set the theme color of 1ST display

**Step**

1. Press the `Menu` key followed by pressing the `Page Down` key repeatedly until the Display configuration menu appears.

   *Figure: Display configuration menu, `Brightness` highlighted.*

2. Press the `NEXT` key repeatedly or scroll the Knob key to move to the `Font Color – 1ST Color` field.

   *Figure: Display configuration menu, `1ST Color` row highlighted (`WHITE`).*

3. Press the `F5 (Enter)` key or Knob key followed by scrolling Knob key or pressing `+/-` keys to select desired color for 1ST display.

   *Figure: `1ST Color` dropdown open showing `WHITE` / `GREEN` / `YELLOW` / `CYAN`.*

4. Press the `F5 (Enter)` key or Knob key to confirm the selected color.

**Display result** — The following figure demonstrates the defined yellow color for 1ST display.

*Figure: Temperature reading screen showing `+040.9996` in yellow; header `Temperature`, `Trig:Auto`, `Filter`, `1/X`, `5/s`, `TCouple:Type J`; footer `A-Zero`, `MEAS:-000.0116mV`, `SIM: 24.81`, `m`.*

### 2ND Color Setting

**Background** — Set the theme color of 2ND display

**Step**

1. Press the `Menu` key followed by pressing the `Page Down` key repeatedly until the Display configuration menu appears.

   *Figure: Display configuration menu, `Brightness` highlighted.*

2. Press the `NEXT` key repeatedly or scroll the Knob key to move to the `Font Color – 2ND Color` field.

   *Figure: Display configuration menu, `2ND Color` row highlighted (`WHITE`).*

3. Press the `F5 (Enter)` key or Knob key followed by scrolling Knob key or pressing `+/-` keys to select desired color for 2ND display.

   *Figure: `2ND Color` dropdown open showing `WHITE` / `GREEN` / `YELLOW` / `CYAN`.*

4. Press the `F5 (Enter)` key or Knob key to confirm the selected color.

**Display result** — The following figure demonstrates the defined green color for 2ND display.

*Figure: Dual-measure screen — 1ST `DC Voltage` reading `-000.1722 mVDC` in yellow, 2ND `AC Voltage` reading `021.0536 mVAC` in green; center `AC+DC +021.0543mV`; `Trig:Auto`.*

### Math Color Setting

**Background** — Set the theme color of Math functions

**Step**

1. Press the `Menu` key followed by pressing the `Page Down` key repeatedly until the Display configuration menu appears.

   *Figure: Display configuration menu, `Brightness` highlighted.*

2. Press the `NEXT` key repeatedly or scroll the Knob key to move to the `Font Color – Math Color` field.

   *Figure: Display configuration menu, `Math Color` row highlighted (`WHITE`).*

3. Press the `F5 (Enter)` key or Knob key followed by scrolling Knob key or pressing `+/-` keys to select desired color for Math display.

   *Figure: `Math Color` dropdown open showing `WHITE` / `GREEN` / `YELLOW` / `CYAN`.*

4. Press the `F5 (Enter)` key or Knob key to confirm the selected color.

**Display result** — The following figure demonstrates the defined cyan color for Math display.

*Figure: dB math screen — `DC Voltage`, `Trig:Auto`, `Filter`, `dB`, `5/s`, `Range: 100mV`; reading `+03.38904 dB`; `A-Zero`; statistics box `Measure : +001.1601mV`, `Ref Ω : 0600Ω`, `Ref Voltage : +000.7853mV`, `Ref dBm : -059.8800`; softkeys `Function dB`, `MathDisp Math`, `REF Ω 600Ω`, `RefMethod dBm`, `Ref Value -059.8800`, `Ref Value Current`.*

### Display Mode Setting

**Background** — Enable or disable if time info or user-defined text is shown in the 1ST display only when MathDisp is off.

**Step**

1. Press the `Menu` key followed by pressing the `Page Down` key repeatedly until the Display configuration menu appears.

   *Figure: Display configuration menu, `Brightness` highlighted.*

2. Press the `NEXT` key repeatedly or scroll the Knob key to move to the `Math Off Display – DisplayMode` field.

   *Figure: Display configuration menu, `DisplayMode` row highlighted (`OFF`).*

**Time display**

1. Press the `F5 (Enter)` key or Knob key followed by scrolling Knob key or pressing `+/-` keys to select the Time option.

   *Figure: `DisplayMode` dropdown open showing `OFF` / `Time` / `Text`.*

2. Press the `F5 (Enter)` key or Knob key to confirm the Time option.

   *Figure: Display configuration menu, `DisplayMode` set to `Time`.*

**Display result** — The following figure demonstrates the time info shown in the 1ST display.

*Figure: DC Voltage screen reading `+000.1812 mVDC`; lower band shows `2019 / 03/18  17:36:56  WeekDay MON`; softkeys `Range Auto`, `Speed 5/s`, `Auto Zero On Off`, `Input R 10M Auto`, `DCV Ratio On Off`, `2ND Off`.*

**Text display**

1. Press the `F5 (Enter)` key or Knob key followed by scrolling Knob key or pressing `+/-` keys to select the Text option.

   *Figure: `DisplayMode` dropdown open showing `OFF` / `Time` / `Text`.*

2. Press the `F5 (Enter)` key or Knob key to confirm the Text option.

   *Figure: Display configuration menu, `DisplayMode` set to `Text`, with a `GwINSTEK  Edit` field.*

3. Press the `NEXT` key or scroll the Knob key to move to the `Math Off Display – Edit` field.

   *Figure: Display configuration menu, `No Text` / `Edit` field highlighted.*

4. Press the `F5 (Enter)` key or Knob key to enter the KeyBoard page.

   *Figure: KeyBoard popup with `No Text` text field and A–Z / 0–9 character grid; softkeys `Caps Lock`, `Backspace`, `OK`, `Input`, `Exit KeyB`.*

5. Press Backspace to clear default text first. Use the Left/Right & `+/-` keys or scroll the Knob key to move the cursor followed by pressing the `F5 (Input)` key or Knob key to input desired words.

   > **Note:** F1 (Caps Lock) key is for high and low case shift.

   *Figure: KeyBoard popup showing `DUT` entered.*

6. Press the `F4 (OK)` key to confirm the input words.

   *Figure: Display configuration menu, `DisplayMode` set to `Text`, edit field showing `DUT`.*

**Display result** — The following figure demonstrates the defined text shown in the 1ST display.

*Figure: DC Voltage screen reading `-000.0001 mVDC`; lower band shows `DUT`; softkeys `Range Auto`, `Speed 5/s`, `Auto Zero On Off`, `Input R 10M Auto`, `DCV Ratio On Off`, `2ND Off`.*

### Anti Aliasing Setting

**Background** — Enable or disable the anti-aliasing function, which facilitates the display of measured value much smoother and easy-readable. Note that this function is available for up to 1.2k/s refresh rate. The 2.4k/s above refresh rates are Not supported by anti-aliasing.

> ⚠ **NOTE:** When Auto Zero or dual measure mode, both of which lower down computing speed, is activated, anti-aliasing function can support up to the maximum 10k/s refresh rate.

**Step**

1. Press the `Menu` key followed by pressing the `Page Down` key repeatedly until the Display configuration menu appears.

   *Figure: Display configuration menu, `Brightness` highlighted.*

2. Press the `NEXT` key repeatedly or scroll the Knob key to move to the `BigFont Option – Antialiasing` field.

   *Figure: Display configuration menu, `Antialiasing` row highlighted (`OFF`).*

3. Press the `F5 (Enter)` key or Knob key followed by scrolling Knob key or pressing `+/-` keys to select the ON option.

   *Figure: `Antialiasing` dropdown open showing `OFF` / `ON`.*

4. Press the `F5 (Enter)` key or Knob key to confirm the ON selection.

### Additional Info Setting

**Background** — Enable or disable the additional information display.

**Step**

1. Press the `Menu` key followed by pressing the `Page Down` key repeatedly until the Display configuration menu appears.

   *Figure: Display configuration menu, `Brightness` highlighted.*

2. Press the `NEXT` key repeatedly or scroll the Knob key to move to the `Other Option – AdditionalInfo` field.

   *Figure: Display configuration menu, `AdditionalInfo` row highlighted with an `Open` button.*

3. Press the `F5 (Enter)` key or Knob key to enter the Additional menu. Press the Next key or scroll the Knob key followed by pushing the `F5 (Enter)` key or Knob key to enable/disable each option. Move to the Return option followed by pressing the `F5 (Enter)` key or Knob key to have the setting take effect.

   *Figure: Additional Information popup — `Additional Info Enable` checkbox, `Rel Value Info`, `AutoZero&InR Info`, `Other Info` (each with a checkbox), and a `Return` button.*

**Display result** — Take the Temperature mode for example as the figure below, we can clearly recognize the colors with info as follows.

- Rel Value Info is outlined by blue frame.
- Auto Zero Info is outlined by white frame.
- Additional (SIM) Info is outlined by cyan frame.

*Figure: Temperature screen reading `-0004.453 °C`; header `Temperature`, `Trig:Auto`, `REL`, `5/s`, `TCouple:Type J`; footer chips `REL: +0022.196°C` (REL Info), `A-Zero` `MEAS:-000.3628mV` (Auto Zero Info), `SIM: 24.81` (SIM Info); softkeys `Probe TCouple`, `Speed 5/s`, `Auto Zero On Off`, `Unit °C`, `Type`, `Simulated Auto`.*

### Language Setting

**Background** — Select language for user interface display.

**Step**

1. Press the `Menu` key followed by pressing the `Page Down` key repeatedly until the Display configuration menu appears.

   *Figure: Display configuration menu, `Brightness` highlighted.*

2. Press the `NEXT` key repeatedly or scroll the Knob key to move to the `Other Option – Language` field.

   *Figure: Display configuration menu, `Language` row highlighted with an `Open` button.*

3. Press the `F5 (Enter)` key or Knob key to enter the Language menu. Press the Next key or scroll the Knob key followed by pushing the `F5 (Enter)` key or Knob key to select one of the language options. Move to the Return option followed by pressing the `F5 (Enter)` key or Knob key to have the setting take effect.

   **Options**

   - English
   - 繁體中文 (Traditional Chinese)
   - 简体中文 (Simplified Chinese)
   - 日本語 (Japanese)
   - 한국어 (Korean)

   *Figure: Language popup listing `English`, `繁體中文`, `简体中文`, `日本語 (MessageBox)`, `한국어`, each with a checkbox, and a `Return` button.*

   > ⚠ **NOTE:** When "日本語" is checked, only prompt message will be shown in Japanese. The user interface still remains in full English display. See the figure below.

   *Figure: Language popup showing a Japanese prompt message `[Log]SCREEN30.bmp 正常に保存されました`.*

## Cross-references

- [`screens/config-display.md`](../../screens/config-display.md) — this is the screen described throughout: the `BackLight`, `Font Color`, `Math Off Display`, `BigFont Option`, and `Other Option` groups and their `AdditionalInfo` / `Language` `Open` buttons all originate here.

## Confidence notes

- `GwINSTEK` is the verbatim default text shown in the Math Off Display edit field (mixed case as printed in the screen captures); preserved as-is.
- The Additional menu checkbox label `AutoZero&InR Info` is transcribed from the small menu figure on page 178; the display-result bullet calls the same thing "Auto Zero Info." Both transcribed as printed.
