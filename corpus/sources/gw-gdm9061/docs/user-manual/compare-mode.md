---
class: doc-section
doc_id: user-manual
doc_title: "Dual Measurement Multimeter GDM-9060/9061 User Manual"
doc_number: null
doc_date: 2024-03
applies_to: [gw-gdm9061, gw-gdm9060]
section_id: compare-mode
section_title: "Application: Compare Mode"
parent_section: null
page_range: "122-128"
related_screens: [statistics]
---

# Application: Compare Mode

## Summary

Describes the Compare Mode application: a pass/fail measurement that tests each reading against user-defined High Limit and Low Limit thresholds and drives the Digital I/O port pins (Pass, Fail, High Limit Fail, Low Limit Fail) as active-low outputs, plus an active-low EOM (End Of Measurement) pulse of approximately 2 µs. Covers activating Compare mode via `Shift + Math` → `Function` → `Compare`, setting high/low limits, configuring `BeepMode`/`BeepVol`, reading the on-screen Pass (black) / Fail (red) state, viewing live results through `MathDisp` (STAT, Math, Math+STAT), the pin 5-8 timing diagram, and deactivating Compare. Backs the corpus `statistics` screen's COMP indicator and pass/fail (red) state.

## Content

`Pin9` `EOM` (End Of Measurement) signal Output. Activates when compare measurement is over. It is also available in other measurements.

`EOM` pulse width timing: pulse goes from `0V` to `+5V` and back to `0V`, with each transition edge spaced about `2µs` apart.

*Figure: EOM pulse width timing — +5V / 0V levels, about 2µs.*

### Applicable to

`ACV` (`8 ACI`), `DCV` (`7 DCI`), `Ω2W` (`9 Ω4W`), `FREQ`, `TEMP` (`6`).

### Background

The Compare Mode outputs the pass/fail results of the Compare function. Each signal is an active low signal. In addition, an active low pulse of approximately 2µs is output to indicate the end of compare measurement (EOM).

When the input signal exceeds the high threshold or the low threshold, the High Fail or Low Fail pin is pulled low. When the signal stays within the threshold levels, the Pass pin is pulled low.

### Pin Assignment

| Pin No | Compare Mode | Description |
|---|---|---|
| 1 | VCC Out | Option(Vcc) |
| 2 | Flyback Diode | No Use |
| 3 | Digital Ground | GND |
| 5 | Pass | Out |
| 6 | Fail | Out |
| 7 | High Limit Fail | Out |
| 8 | Low Limit Fail | Out |

### Activate Compare mode

Press the `Shift` + `Math` key to activate Math setting menu as the following figure shown.

*Figure: Math setting menu — `Function` `Off` · `MathDisp` `Off` · `ReStart`.*

Further press the `F1` (`Function`) key to enter the Math Function menu as the figure shown below.

*Figure: Math Function menu — `OFF` · `dB` · `dBm` · `Compare` · `MX+B` · `More 1/2`.*

Press `F4` (`Compare`) key to enable the Compare function. The screen, after activation, will appear as figure below.

*Figure: Compare On — display reads `+000.5651` `mVDC`, status bar shows `DC Voltage` · `Trig:Auto` · `COMP` (Indicator Compare On) · `5/s` · `Range: 100mV`; softkeys `Function COMP` · `MathDisp Off` · `BeepMode Off` · `BeepVol Medium` · `Low Limit -1.000000` · `High Limit +1.000000`.*

### F6 (High Limit) to set high limit

Press the `F6` (`High Limit`) key to enter the setting menu.

*Figure: `Comp High Limit` `+100.0000` · unit softkeys `mV` `V` · `5 9` · `ESC:Return` · `Enter`.*

First use the functions keys to determine the unit, which varies by different measure modes. Then use the Left/Right arrow keys to move cursor and scroll the Knob key or press Number Keys to enter the desired value of high limit.

Push the `F6` (`Enter`) key or the Knob key (`Enter`) to make the setting into effect.

### F5 (Low Limit) to set low limit

Press the `F5` (`Low Limit`) key to enter the setting menu.

*Figure: `Comp Low Limit` `-6.600000` · unit softkeys `mV` `V` · `4 9` · `ESC:Return` · `Enter`.*

First use the functions keys to determine the unit, which varies by different measure modes. Then use the Left/Right arrow keys to move cursor and scroll the Knob key or press Number Keys to enter the desired value of low limit.

Push the `F6` (`Enter`) key or the Knob key (`Enter`) to make the setting into effect.

### F3 (BeepMode) to define beep mode

Press the `F3` (`BeepMode`) key to enter the beep mode setting. By enabling beep mode, user can be aware of the latest state promptly by beep voice.

The display shows as the figure below. Press the `F2` (`Pass`) or `F3` (`Fail`) key to determine the condition of beep alarm.

Press the `F1` (`Off`) key to disable beep mode.

*Figure: `BeepMode` menu — `Off` · `Pass` · `Fail` · `ESC:Return`.*

### F4 (BeepVol) to select beep volume

Press the `F4` (`BeepVol`) key to enter the beep volume setting.

Select the intensity of beep volume via pressing `F1` – `F3` key for desired level as the figure shown below.

*Figure: `Beep Volume` menu — `Small` · `Medium` · `Large` · `ESC:Return`.*

### Compare mode result

When the measured result is within the range of high and low limit, the display shows as the figure below with purely black background indicating the state of "Pass".

*Figure: Pass state — display reads `+000.5651` `mVDC` on black background; status bar `DC Voltage` · `Trig:Auto` · `COMP` · `5/s` · `Range: 100mV`; softkeys `Function COMP` · `MathDisp Off` · `BeepMode Off` · `BeepVol Medium` · `Low Limit -1.000000` · `High Limit +1.000000`.*

However, when measured result is either above or less than the limit range, the display appears as the figure below with boldly red background indicating the state of "Fail".

*Figure: Fail state — display reads `+000.7029` `mVDC` on red background; status bar `DC Voltage` · `Trig:Auto` · `Filter` · `COMP` · `5/s` · `Range: 100mV`; `A-Zero` indicator; softkeys `Function COMP` · `MathDisp Off` · `BeepMode Off` · `BeepVol Small` · `Low Limit +001.0000m` · `High Limit +0.496000`.*

See the contents below for more details of each state in compare mode

| State | Description |
|---|---|
| High | If the compare result is High, the relative pins of digital I/O port in action are as the follows. Digital I/O: FAIL Out (Pin 6) and HIGH Limit FAIL Out (Pin 7) are activated. |
| Low | If the compare result is Low, the relative pins of digital I/O port in action are as the follows. Digital I/O: FAIL Out (Pin 6) and LOW Limit FAIL Out (Pin 8) are activated. |
| Pass | If the compare result is Pass, the relative pin of digital I/O port in action is as the follows. Digital I/O: PASS Out (Pin 5) is activated. |

### F2 (MathDisp) key to show STAT, Math & Math+STAT

Press the `F2` (`MathDisp`) key to show the Math Display menu as the figure below shown. Proceed to the `F2` (`STAT`), `F3` (`Math`) or `F4` (`Math+STAT`) display in accord with the following chapters.

*Figure: `Math Display` menu — `Off` · `STAT` · `Math` · `Math+STAT` · `ESC:Return`.*

### Show STAT result

**Background** — The STAT page in MathDisp allows you to make statistical calculations for several measurements including Minimum, Maximum, Average Peak-Peak, Standard Deviation and Count.

**Operation** — Press the `F2` (`STAT`) key to show the statistical data as the figure below.

*Figure: STAT result — display reads `+000.4835` `mVDC`; status bar `DC Voltage` · `Trig:Auto` · `Filter` · `COMP` · `5/s` · `Range: 100mV`; `A-Zero` indicator; data block `Minimum : -005.6902m` · `Maximum : +001.3242m` · `Average : +000.6573m` · `Peak-Peak : +007.0145m` · `STDEV : +000.4683m` · `Count : 674`; softkeys `Function COMP` · `MathDisp STAT` · `BeepMode Off` · `BeepVol Medium` · `Low Limit -1.000000` · `High Limit +1.000000`.*

**View Data**

| Item | Description |
|---|---|
| `+000.4835` mVDC | Indicates the currently measured mVDC value |
| Minimum | Indicates the minimum data value |
| Maximum | Indicates the maximum data value |
| Average | Indicates the mean (average) value |
| Peak-Peak | Indicates the peak to peak data |
| STDEV | Indicates the standard deviation of the data |
| Count | Indicates the latest counts of compare |

### Show Math result

**Background** — The Math page in MathDisp allows you to view mathematical calculations for several parameters.

**Operation** — Press the `F3` (`Math`) key to show the mathematical analysis as the figure below.

*Figure: Math result — display reads `+000.5625` `mVDC`; status bar `DC Voltage` · `Trig:Auto` · `Filter` · `COMP` · `5/s` · `Range: 100mV`; `A-Zero` indicator; `PASS` indicator; data block `Low Limit : -1.000000` · `Low Fail : 0` · `High Limit : +1.000000` · `High Fail : 0`; softkeys `Function COMP` · `MathDisp Math` · `BeepMode Off` · `BeepVol Medium` · `Low Limit -1.000000` · `High Limit +1.000000`.*

**View Data**

| Item | Description |
|---|---|
| `+000.5625` mVDC | Indicates the currently measured mVDC value |
| Low Limit | Indicates the defined low limit |
| Low Fail | Indicates the counts of below the defined low limit |
| High Limit | Indicates the defined high limit |
| High Fail | Indicates the counts of above the defined high limit |

### Show Math+STAT result

**Background** — The Math+STAT page in MathDisp allows you to view data from both statistical calculations and mathematical analysis.

**Operation** — Press the `F4` (`Math+STAT`) key to show the hybrid page of Math & STAT instantly as figure below.

*Figure: Math+STAT result — display reads `+0.001003` `VDC`; status bar `DC Voltage` · `Trig:Auto` · `Filter` · `COMP` · `20/s` · `Range: 1V`; `A-Zero` indicator; red section `PASS` · `Low Fail 63` · `High Fail 41`; blue section `MIN : -0.040625` · `MAX : +0.018121` · `AVG : +0.006670` · `P-P : +0.056746` · `STD : +01.30304m` · `COU : 6.236 k`; softkeys `Function COMP` · `MathDisp Math+STAT` · `BeepMode Off` · `BeepVol Medium` · `Low Limit -06.00000m` · `High Limit +09.99999m`.*

**View Data**

| Item | Description |
|---|---|
| `+0.001003` VDC | Indicates the currently measured mVDC value |
| Blue Section | It is identical to the contents of STAT display. Refer to the previous chapter for details. |
| Red Section | It is identical to the contents of Math display. Refer to the previous chapter for details. |

### Compare live-result in MathDisp

The latest state of compare measurement, whether it's "Pass", "High" or "Low", will also appear within each mode of MathDisp. See the example below for the "High" result in Math+STAT mode.

*Figure: High result in Math+STAT — display reads `+000.9703` `mVDC` on red background; status bar `DC Voltage` · `Trig:Auto` · `Filter` · `COMP` · `5/s` · `Range: 100mV`; `A-Zero` indicator; red section `HIGH` · `Low Fail 243` · `High Fail 39`; blue section `MIN : -041.8225m` · `MAX : +038.9154m` · `AVG : +000.6025m` · `P-P : +080.7379m` · `STD : +02.11675m` · `COU : 1.115k`; softkeys `Function COMP` · `MathDisp Math+STAT` · `BeepMode Fail` · `BeepVol Small` · `Low Limit -0.176000` · `High Limit -004.0000m`.*

The boldly red background along with the indicator "HIGH" within the display means the compare result is over the range of defined high limit.

### Timing Diagram for pins 5-8 when the Compare function is activated

*Figure: Timing diagram — Compare On waveform crosses `High limit` and `Low limit`. Pin 5-8 Output: `Pin 5 PASS Out` shows `P` `P` `P`; `Pin 6 FAIL Out` shows `F` `F`; `Pin 7 HIGH Limit FAIL Out` shows `H`; `Pin 8 LOW Limit FAIL Out` shows `L`.*

### Deactivate Compare measurement

To cancel the Compare measurement, press the `F1` (`Function`) key followed by clicking `F1` (`OFF`) to deactivate or simply activate another measurement.

## Cross-references

- [`screens/statistics.md`](../../screens/statistics.md) — the COMP indicator, the Pass (black) / Fail (red) display states, and the STAT / Math / Math+STAT data blocks described here back the corpus `statistics` screen's COMP and pass/fail rendering.

## Confidence notes

- Page 122 opens mid-topic with the `Pin9` `EOM` description and the EOM pulse-width timing figure, which is the tail of the preceding Digital I/O pin-assignment material; it flows directly into the "Application: Compare Mode" heading on the same page and is transcribed here as the lead-in context for the section.
- The `Applicable to` row shows softkey-style icons with both a primary label (`ACV`, `DCV`, `Ω2W`, `FREQ`, `TEMP`) and small superscript labels (`8 ACI`, `7 DCI`, `9 Ω4W`, `6`). Both are transcribed; the superscripts denote the alternate/Shift function of each key.
- The Pin Assignment table omits Pin 4 (no row printed in the source); pins 5-8 are the compare outputs. Transcribed exactly as printed.
- Several softkey limit values differ figure-to-figure (e.g. `Low Limit -1.000000` vs `+001.0000m`) because the screenshots were captured under different configured limits; each is transcribed from its own figure.
