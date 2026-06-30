---
class: doc-section
doc_id: user-manual
doc_title: "Dual Measurement Multimeter GDM-9060/9061 User Manual"
doc_number: null
doc_date: 2024-03
applies_to: [gw-gdm9061, gw-gdm9060]
section_id: trigger-and-filter
section_title: Trigger and Filter Setting
parent_section: null
page_range: "86-95"
related_screens: [measurement]
---

# Trigger and Filter Setting

## Summary

Combines the manual's **Trigger Setting** and **Filter Setting** sections. Trigger Setting covers the Automatic (default), Single, and External trigger modes — the modes behind the `Trig:Auto` / `Trig:SIN` / `Trig:EXT` status pill — plus sample count, trigger signal polarity, EOM OUT polarity, the Digital I/O external-trigger connection and pin assignment, and trigger delay (manual and auto). Filter Setting covers the internal digital filter: Moving vs. Repeating filter type, filter count, filter window threshold, and the menu procedure to turn the filter on/off (the `Filter` pill) and configure type, count, window method, and window percentage.

## Content

## Trigger Setting

### Automatic/Single Triggering

Applicable to: `ACV` · `DCV` · `Ω2W` · `•))` (continuity) · `FREQ` · `TEMP`

**Automatic triggering (default)**

By default, the GDM-9060/9061 triggers according to the refresh rate automatically. See the previous page for refresh rate setting details. The figure below shows the screen of Automatic Trigger measurement.

*Figure: Auto Trigger Mode — main display reads `+000.8700 mVDC`; status line shows `DC Voltage` · `Trig:Auto` · `Filter` · `20/s` · `Range: 100mV`; softkeys: `TrigSource Auto` · `SampCount 3` · `1ST Delay 200.0ms` · `2ND Delay -----` · `TrigSignal Pos/Neg` · `EOM OUT Pos/Neg`.*

**Single triggering**

Press the `TRIG` key to Single trigger measurement. See below for details.

*Figure: Single Trigger Mode — main display reads `+000.9524 mVDC`; status line shows `DC Voltage` · `Trig:SIN` · `Filter` · `5/s` · `Range: 100mV`; softkeys: `Function Hold Off` · `MathDisp Off` · `Method Percent` · `BeepVol Small` · `Percent 10%` · `HoldValue ReStart`.*

**Change mode**

- Under Single Trigger mode, press and hold the `TRIG` button for at least 2 second to return to Auto Trigger mode.
- Under Auto Trigger mode, simply press the `TRIG` button to return to Single Trigger mode.

### Use External Trigger

**Background**

The GDM-9060/9061 uses the internal trigger by default, for example to count the frequency and the period. Using an external trigger allows customized triggering conditions.

**Signal connection**

Connect the external trigger signal to the Digital I/O port located on the rear panel.

*Figure: Rear-panel `DIGITAL I/O` connector — DB-9, female.*

**Digital I/O pin assignment**

*Figure: `DIGITAL I/O` DB-9 pin assignment — `External Trigger In`, `PASS Out`, `EOM Out`, `LOW Limit FAIL Out`, `Digital (chassis) Ground`, `FLYBACK DIODE VCC Out`, `FAIL Out`, `High Limit FAIL Out`.*

**Activate external trigger**

Press the `Shift` + `TRIG` key to activate setting menu of trigger.

Press the `F1` (`TrigSource`) key to enter the trigger source menu followed by pressing the `F3` (`EXT`) to select External Trigger mode.

*Figure: `TrigSource` menu — `Auto` · `Single` · `EXT`; `ESC:Return`.*

The "EXT" indicator appears on the display.

*Figure: External Trigger Mode — main display reads `+000.6579 mVDC`; status line shows `DC Voltage` · `Trig:EXT` · `Filter` · `20/s` · `Range: 100mV`; softkeys: `TrigSource EXT` · `SampCount 3` · `1ST Delay 200.0ms` · `2ND Delay -----` · `TrigSignal Pos/Neg` · `EOM OUT Pos/Neg`.*

**Set sample count**

1. Under the setting menu of trigger, press the `F2` (`SampCount`) key to enter the ensuing setting of Sample Count. Use the Left/Right arrow keys to move cursor and scroll the Knob key or press Number keys to enter the desired counts.

   *Figure: `SampCount` entry field showing `0500600`; `ESC:Return` · `Enter`.*

2. Push the Knob key (Enter) or press the `F6` (`Enter`) key to confirm the input value.

   Range: 1 ~ 1,000,000

**Set Trigger Signal**

Background: When utilizing external trigger, select either positive or negative terminal as the main trigger source in light of the actual applications.

Press the `F5` (`TrigSignal`) key to toggle between Positive and Negative mode for Trigger Signal.

**Set EOM OUT**

Background: It indicates EOM (End Of Measurement) output signal. Select Positive or Negative as the output signal for extension applications when necessary.

Press the `F6` (`EOM OUT`) key to toggle between Positive and Negative mode for EOM OUT setting.

**Reading indicator**

The reading indicator does not flash before triggering (can be on or off). After triggering, the indicator flashes according to the external signal trigger timing.

**Exit external trigger**

Press the `F1` (`TrigSource`) key to reenter the TrigSource menu followed by pressing the `F1` (`Auto`) or the `F2` (`Single`) key to switch to other trigger modes.

Alternatively, it is viable to simply click the `TRIG` button to change to Trig:SIN mode or click and hold the `TRIG` button for 2 seconds to enter the Trig:Auto mode.

### Set Trigger Delay

**Background**

Trigger delay defines the time delay between triggering and measurement start. The default is set at 200us.

**Manual trigger delay**

1. Press the `Shift` + `TRIG` key to activate setting menu of trigger.

2. Press the `F3` (`1ST Delay`) key to enter the Trigger Delay (1ST) menu. The Trigger Delay setting appears as the figure below.

   *Figure: `Trigger Delay(1ST)` — `AutoDelay` · `A:200us`; `ESC:Return`.*

   > **NOTE:** the `F4` (`2ND Delay`) key is only available when 2ND measurement is activated.

3. Press the `F4` (`AutoDelay`) key to switch to the manual delay time setting.

   *Figure: `Trigger Delay(1ST)` entry — `us` · `ms` · `s` · `DelayAuto`; value `001.000`; `ESC:Return` · `Enter`.*

4. Use `F1` – `F3` keys to decide unit value. Then use the Left/Right arrow keys to move cursor and scroll the Knob key or press Number keys to enter the desired value.

5. Push the Knob key (Enter) or press the `F6` (`Enter`) key to confirm the input value.

   Range: 0 ~ 3600s, 1us resolution

**Auto trigger delay**

1. Repeat the steps 1 – 2 of manual trigger delay first, and press the `F4` (`AutoDelay`) key to switch the display as the following.

   *Figure: `Trigger Delay(1ST)` — `AutoDelay` · `A:200us`; `ESC:Return`.*

2. Press the `ESC` key to return to the previous page and have the auto trigger delay setting take effect. The 1ST display will be shown like the following figure.

   *Figure: `1ST Delay` softkey showing `Auto`.*

## Filter Setting

### Digital Filter Overview

Applicable to: `ACV` · `DCV` · `Ω2W` · `FREQ` · `TEMP`

**Filter basics**

The GDM-9060/9061 internal digital filter converts the analog input signal into digital format before passing it to internal circuits for processing. The filter affects the amount of noise included in the measurement result.

**Filter type**

The digital filter averages a specific number of input signal samples to generate one reading. The filter type defines the averaging method. The following diagrams highlight the differences between the Moving and Repeating filter using 4 samples per reading.

**Moving (default)**

The Moving filter takes in one new sample and discards the oldest sample per reading. This is the default behavior when the digital filter is not specified, and is recommended for most applications.

*Figure: Moving filter — for samples 1–12: `1st reading Sample 1 - 4`, `2nd reading Sample 2 - 5`, `3rd reading Sample 3 - 6`.*

**Repeating**

The Repeating filter renews a whole group of samples per reading.

*Figure: Repeating filter — for samples 1–12: `1st reading Sample 1 - 4`, `2nd reading Sample 5 - 8`, `3rd reading Sample 9 - 12`.*

**Filter count**

Filter count defines the number of samples to be averaged per reading. More samples offer low noise but a long delay. Less samples offer high noise but a short delay.

Range: 2 ~ 100

**Filter window**

Filter window defines the threshold for when the digital filter data is updated again. When the AD data falls in the range between TH and TL, the filter keeps processing. When the AD data falls out of the range between TH and TL, the filter will restart. When measuring unstable signals, appropriately setting the filter window can improve the measurement speed.

*Figure: Filter window over time — AD data trace with `Filter` / `Restart` regions bounded by `TH` (Threshold High) and `TL` (Threshold Low).*

TH: Threshold High, TL: Threshold Low

**Filter window Formula**

Measure:
Previous Meas*(1-window)< threshold< Previous Meas*(1+window).

Range:
Previous Measure + (Range * window)< threshold <Previous Measure + (Range * window)

There are 5 windows range settings that can be chosen: 10%, 1%, 0.1%, 0.01% and none

### Digital Filter Setting

**Filter setting**

Press the `Shift` key + `Menu` (`Filter`) key. The Filter setting menu shows as the figure below.

*Figure: Filter setting menu — `Setup 1ST` · `Filter On/Off` · `FilterType Repeat` · `FilterCount 100` · `WinMethod Measure` · `Window 0.01%`.*

**Select display**

Press the `F1` (`Setup`) key to toggle between the 1ST and the 2ND measurement to be setup for filter setting.

> **NOTE:** only when 2ND measurement is enabled, you are able to toggle options here. Otherwise, only the 1ST is available for setup.

**Turn on filter**

Press the `F2` (`Filter`) key to turn On or Off filter function. The Filter indicator appears on the display.

*Figure: Indicator Filter On — main display reads `+000.5724 mVDC`; status line shows `DC Voltage` · `Trig:SIN` · `Filter` · `60/s` · `Range: 100mV`; softkeys: `Setup 1ST` · `Filter On/Off` · `FilterType Repeat` · `FilterCount 100` · `WinMethod Measure` · `Window 0.01%`.*

**Choose filter type**

Press the `F3` (`FilterType`) key to enter the subsequent menu. Press the `F1` or `F2` keys to select desired filter type.

*Figure: `FilterType` menu — `Move` · `Repeat`; `ESC:Return`.*

**Define filter count**

Press the `F4` (`FilterCount`) key to enter the subsequent menu. Use the Left/Right arrow keys to move cursor and scroll Knob key or press Number keys to enter the desired value.

Press the `F6` (`Enter`) key or the Knob key until click to confirm the filter count settings.

Range: 2 ~100

*Figure: `FilterCount` entry field showing `010`; `ESC:Return` · `Enter`.*

**Set filter window method**

Select the Filter Window Method by clicking the `F5` (`WinMethod`) key. The display changes accordingly as the figure below shown. Press the `F1` or `F2` keys to choose desired Filter Window Method.

*Figure: `Filter Window Method` menu — `Measure` · `Range`; `ESC:Return`.*

**Define filter window**

Press the `F6` (`Window`) key to enter the subsequent menu. Press the `F1` – `F5` keys to choose desired Filter Window percentage.

*Figure: `Filter Window` menu — `0.01%` · `0.1%` · `1%` · `10%` · `NONE`; `ESC:Return`.*

Range: 0.01%, 0.1%, 1%, 10%, None

**Turn off Filter**

Press the `Shift` key + the `Menu` (`Filter`) key. Press the `F2` (`Filter`) key to turn Off Filter function.

The Filter indicator will disappear from display.

## Cross-references

- [`screens/measurement.md`](../../screens/measurement.md) — the `Trig:Auto` / `Trig:SIN` / `Trig:EXT` and `Filter` status-line pills described here are the same indicators visible on the corpus `measurement` screen.

## Confidence notes

- The spec'd page range for this chunk is 86-94, but the Filter Setting section's final two procedures ("Define filter window" and "Turn off Filter") spill onto page 95 (before "Math Measurement" begins). Page 95's filter tail is included here to keep the Filter Setting procedure complete; `page_range` is widened to "86-95" to reflect this. Page 95 also begins the next chunk (`math-measurement`), which starts at the "Math Measurement" heading on the same page.
- The Digital I/O pin-assignment figure (page 87) labels are transcribed from the diagram callouts; exact pin numbers per label are confirmed later in the Compare Mode section (Pin 5 PASS Out, Pin 6 FAIL Out, Pin 7 HIGH Limit FAIL Out, Pin 8 LOW Limit FAIL Out) — see the `math-measurement` chunk.
- The Filter Window Formula text (page 93) reproduces a printed inequality that appears internally inconsistent in the source (the "Range" line repeats `Previous Measure + (Range * window)` on both sides); transcribed verbatim as printed rather than corrected.
- Some softkey value labels in the figure captions (e.g. `TrigSignal Pos/Neg`, `EOM OUT Pos/Neg`) show both toggle states as printed in the small on-screen labels; the highlighted/active state varies by figure.
