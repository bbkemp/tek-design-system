---
class: doc-section
doc_id: user-manual
doc_title: "Dual Measurement Multimeter GDM-9060/9061 User Manual"
doc_number: null
doc_date: 2024-03
applies_to: [gw-gdm9061, gw-gdm9060]
section_id: math-measurement
section_title: Math Measurement
parent_section: null
page_range: "95-118"
related_screens: [statistics, trendchart, histogram, measurement]
---

# Math Measurement

## Summary

Covers the six math operations the GDM-9060/9061 can run on a measurement result: dBm/dB/Watt, Compare, MX+B, 1/X, and Percent. Each mode is activated via `Shift` + `Math` → `F1` (`Function`), has its own parameter softkeys (e.g. `REF Ω`, `M Value`/`B Value`, `REF %`), and can be paired with a Math Display (`MathDisp`) overlay offering STAT, Math, or Math+STAT pages. The STAT page computes Minimum, Maximum, Average, Peak-Peak, STDEV (standard deviation), and Count — the statistics that back the corpus `statistics` screen and the stat boxes on the `trendchart` and `histogram` screens. Compare mode drives the rear-panel Digital I/O PASS/FAIL pins and the red "Fail"/"HIGH" full-screen indication.

## Content

## Math Measurement (overview)

Applicable to: `ACV` · `DCV` · `Ω2W` · `FREQ` · `TEMP`

**Background**

Math measurement runs 6 types of mathematical operations, dBm, dB, Compare, MX+B, 1/X and Percent, based on the other measurement results.

**Math Equation**

| Mode | Equation |
|---|---|
| dBm | 10 x log10 (1000 x Vreading² / Rref) |
| dB | dBm – dBmref |
| Compare | Checks and updates if measurement data stays between the specified upper (high) and lower (low) limit. |
| MX+B | Multiplies the reading (X) by the factor (M) and adds/subtracts offset (B). |
| 1/X | Divides 1 by the reading (X). |
| Percentage | Runs the following equation: (ReadingX – Reference) / Reference x 100% |

## dBm/dB/Watt Measurement

Applicable to: `ACV` · `DCV`

**Background**

Using the ACV or DCV measurement result, the GDM-9060/9061 calculates the dBm, dB or Watt value based on a reference resistance value in the following way.

**Equation**

| Mode | Equation |
|---|---|
| dBm | 10 x log10 (1000 x Vreading² / Rref) |
| dB | dBm – dBmref |
| Watt | Vreading²/Rref |

**Parameters**

| Parameter | Description |
|---|---|
| Vreading | Input Voltage, ACV or DCV |
| Rref | Reference resistance simulating an output load |
| dBmref | Reference dBm value |

### Measure dBm/Watt

Applicable to: `ACV` · `DCV`

**Equation**

| Mode | Equation |
|---|---|
| dBm | 10 x log10 (1000 x Vreading² / Rref) |
| Watt | Vreading²/Rref |

**Parameters**

| Parameter | Description |
|---|---|
| Vreading | Input Voltage, ACV or DCV |
| Rref (REF Ω) | Reference resistance simulating an output load |

**Activate dBm**

Press the `Shift` key + `Math` key to activate Math setting menu as the following figure shown.

*Figure: Math setting menu — `Function Off` · `MathDisp Off` · `ReStart`.*

Further press the `F1` (`Function`) key to enter the Math Function menu as the figure shown below.

*Figure: `Math Function` menu — `OFF` · `dB` · `dBm` · `Compare` · `MX+B` · `More 1/2`; `ESC:Return`.*

Press `F3` (`dBm`) key to enable the dBm function. The screen, after activation, will appear as figure below.

*Figure: Indicator dBm On — main display reads `-064.7797 dBm` (Measured dBm Value); status line shows `DC Voltage` · `Trig:Auto` · `Filter` · `dBm` · `60/s` · `Range: 100V`; softkeys: `Function dBm` · `MathDisp Off` · `REF Ω 8Ω`.*

**Select reference resistance (REF Ω)**

To change the reference resistance, press the `F3` (`REF Ω`) key to enter the setting menu. Scroll the Knob key or press Number keys to enter the desired value of reference resistance.

*Figure: `dB Ref Ω` entry field showing `D008`; `ESC:Return` · `Enter`.*

Push the Knob key (Enter) or press the `F6` (`Enter`) key to confirm the input reference resistance.

**Resistance List**

| | | | | | | |
|---|---|---|---|---|---|---|
| 2 | 4 | 8 | 16 | 50 | 75 | 93 |
| 110 | 124 | 125 | 135 | 150 | 250 | 300 |
| 500 | 600 | 800 | 900 | 1000 | 1200 | 8000 |

**View result in Watt**

When the reference resistance is less than 50Ω, it is possible to calculate the watt value. If the reference resistance is greater than 50Ω, please ignore this step.

To calculate the Watt power, press the `F1` (`Function`) key followed by clicking the `F3` (`dBm`) key again.

**Watt result appears**

*Figure: main display reads `+00.00000 dBW` (Shows measured dBW (Watt) value); status line shows `DC Voltage` · `Trig:Auto` · `Filter` · `dBm` · `60/s` · `Range: 100V`; softkeys: `Function dBm` · `MathDisp Off` · `REF Ω 2Ω`.*

**F2 (MathDisp) key to show STAT & Math**

Press the `F2` (`MathDisp`) key to show the Math Display menu as the figure below shown. Proceed to the `F2` (`STAT`) or `F3` (`Math`) display in accord with the following chapters.

*Figure: `Math Display` menu — `Off` · `STAT` · `Math`; `ESC:Return`.*

**Show STAT result**

Background: The STAT page in MathDisp allows you to make statistical calculations for several measurements including Minimum, Maximum, Average Peak-Peak, Standard Deviation and Count.

Operation: Press the `F2` (`STAT`) key to show the statistical data immediately as the figure below.

*Figure: STAT result — main display reads `+00.00000 dBW`; stat box shows `Minimum : +00.00000` · `Maximum : +00.00889` · `Average : +00.00000` · `Peak-Peak : +00.00889` · `STDEV : +000.0929m` · `Count : 26.190k`; softkeys: `Function dBm` · `MathDisp STAT` · `REF Ω 2Ω`.*

View Data:

| Label | Indicates |
|---|---|
| +00.00000 dBW | Indicates the latest dBW value |
| Minimum | Indicates the minimum data value |
| Maximum | Indicates the maximum data value |
| Average | Indicates the mean (average) value |
| Peak-Peak | Indicates the peak to peak data |
| STDEV | Indicates the standard deviation of the data |
| Count | Indicates the latest counts of dBm |

**Show Math result**

Background: The Math page in MathDisp allows you to view mathematical calculations for several parameters.

Operation: Press the `F3` (`Math`) key to show the mathematical analysis instantly as below.

*Figure: Math result — main display reads `+00.00000 dBW`; math box shows `Measure : +000.0006V` · `Ref Ω : 0002Ω`; softkeys: `Function dBm` · `MathDisp Math` · `REF Ω 2Ω`.*

View Data:

| Label | Indicates |
|---|---|
| +00.00000 dBW | Indicates the latest dBW value |
| Measure: +000.0006V | Indicates the originally measured Voltage value |
| Ref Ω | Indicates the defined reference Ω value. |

**Deactivate dBm/dBW measurement**

To cancel the dBm/dBW measurement, press the `F1` (`Function`) key followed by clicking `F1` (`OFF`) key to deactivate or simply activate another measurement.

### Measure dB

Applicable to: `ACV` · `DCV`

**Equation**

| Mode | Equation |
|---|---|
| dB | dBm – dBmref |
| dBm | 10 x log10 (1000 x Vreading² / Rref) |

**Parameters**

| Parameter | Description |
|---|---|
| dBmref | Reference dBm value |

**Background**

dB is, specifically, defined as [dBm−dBmref]. When the dB measurement is activated, the GDM-9060/9061 calculates the dBm using the reading at the first moment and stores it as dBmref.

**Activate dB**

Press the `Shift` + `Math` key to activate Math setting menu as the following figure shown.

*Figure: Math setting menu — `Function Off` · `MathDisp Off` · `ReStart`.*

Further press the `F1` (`Function`) key to enter the Math Function menu as the figure shown below.

*Figure: `Math Function` menu — `OFF` · `dB` · `dBm` · `Compare` · `MX+B` · `More 1/2`; `ESC:Return`.*

Press `F2` (`dB`) key to enable the dB function. The screen, after activation, will appear as figure below.

**dB result appears**

*Figure: Indicator dB On — main display reads `-00.08363 dB` (Measured dB Value); status line shows `AC Voltage` · `Trig:Auto` · `Filter` · `dB` · `5/s` · `Range: 100mV`; softkeys: `Function dB` · `MathDisp Off` · `REF Ω 50Ω` · `RefMethod dBm` · `Ref Value -013.7141` · `Ref Value Current`.*

**F3 (REF Ω) to select reference resistance**

To change the reference resistance, press the `F3` (`REF Ω`) key to enter the setting menu. Scroll the Knob key or press Number keys to enter the desired value of reference resistance.

*Figure: `dB Ref Ω` entry field showing `0008`; `ESC:Return` · `Enter`.*

Push the `F6` (`Enter`) key or the Knob key (Enter) to confirm the input reference resistance.

**Resistance List**

| | | | | | | |
|---|---|---|---|---|---|---|
| 2 | 4 | 8 | 16 | 50 | 75 | 93 |
| 110 | 124 | 125 | 135 | 150 | 250 | 300 |
| 500 | 600 | 800 | 900 | 1000 | 1200 | 8000 |

**F4 (Ref Method) to select dB reference method**

Reference method involves the ways to calculate dB value. When dBm option is selected, user can specify a definite dBm value for dB calculation. If selecting Voltage option, system regards the defined voltage value as the Vreading parameter for dBm calculation, thus resulting in different dB value than the previous option.

Press the `F4` (`RefMethod`) key to enter the dB Ref Method menu followed by clicking the `F1` (`Voltage`) or `F2` (`dBm`) key to determine which method of calculation to proceed to.

*Figure: `dB Ref Method` menu — `Voltage` · `dBm`; `ESC:Return`.*

**F5 (Ref Value) to define reference value (voltage or dBm)**

In order to define either voltage or dBm reference value, both of which are corresponding to the previous F4 (Ref Method) option, press the `F5` (`Ref Value`) to enter the dB Ref Value menu, and use the Left/Right arrow keys to move cursor followed by scrolling the Knob key or pressing Number keys to enter the desired Ref value. Press the `F6` (`Enter`) key or Knob key to confirm the input value.

Note: when setting voltage Ref value, press the function keys to promptly define the unit.

*Figure: main display reads `-03.76477 dB`; status line shows `DC Voltage` · `Trig:Auto` · `Filter` · `dB` · `20/s` · `Range: 100mV`; `dB Ref Value` entry field showing `-000.3352`; `mV` · `V`; `ESC:Return` · `Enter`.*

**F6 (Ref Value) key to set the dBm reference**

Press the `F6` (`Ref Value_Current`) key to instantly make the current dBm value, which is calculated by the current input voltage with the equation, as the Ref dBm (dBm reference).

**F2 (MathDisp) key to show STAT & Math**

Press the `F2` (`MathDisp`) key to show the option menu as the figure below shown.

Proceed to the `F2` (`STAT`) or `F3` (`Math`) display in accord with the following chapters.

*Figure: `Math Display` menu — `Off` · `STAT` · `Math`; `ESC:Return`.*

**Show STAT result**

Background: The STAT page in MathDisp allows you to make statistical calculations for several measurements including Minimum, Maximum, Average Peak-Peak, Standard Deviation and Count.

Operation: Press the `F2` (`STAT`) key to show the statistical data immediately as the figure below.

*Figure: STAT result — main display reads `-10.28281 dB`; status line shows `DC Voltage` · `Trig:Auto` · `Filter` · `dB` · `5/s` · `Range: 100mV`; stat box shows `Minimum : -038.2614` · `Maximum : +041.8583` · `Average : -03.33493` · `Peak-Peak : +080.1197` · `STDEV : +08.06324` · `Count : 1.128k`; softkeys: `Function dB` · `MathDisp STAT` · `REF Ω 2Ω` · `RefMethod dBm` · `Ref Value -023.3727` · `Ref Value Current`.*

View Data:

| Label | Indicates |
|---|---|
| -10.28281 dB | Indicates the calculated dB value |
| Minimum | Indicates the minimum data value |
| Maximum | Indicates the maximum data value |
| Average | Indicates the mean (average) value |
| Peak-Peak | Indicates the peak to peak data |
| STDEV | Indicates the standard deviation of the data |
| Count | Indicates the latest counts of db |

**Show Math result**

Background: The Math page in MathDisp allows you to view mathematical calculations for several parameters.

Operation: Press the `F3` (`Math`) key to show the mathematical analysis instantly as below.

*Figure: Math result — main display reads `-012.1597 dB`; status line shows `DC Voltage` · `Trig:Auto` · `Filter` · `dB` · `5/s` · `Range: 100mV`; math box shows `Measure : +000.7479mV` · `Ref Ω : 0002Ω` · `Ref Voltage : +003.0330mV` · `Ref dBm : -023.3727`; softkeys: `Function dB` · `MathDisp Math` · `REF Ω 2Ω` · `RefMethod dBm` · `Ref Value -023.3727` · `Ref Value Current`.*

View Data:

| Label | Indicates |
|---|---|
| -012.1597 | Indicates the calculated dB value |
| Measure: +000.7479mV | Indicates the originally measured m Voltage value |
| Ref Ω: 0002 Ω | Indicates the defined reference resistance value |
| Ref Voltage: +003.0330mV | Indicates the measured reference voltage value |
| Ref dBm: -023.3727 | Indicates the measured reference dBm value |

**Deactivate dB measurement**

To cancel the dB measurement, press the `F1` (`Function`) key followed by clicking `F1` (`OFF`) to deactivate or simply activate another measurement.

## Compare Mode

Applicable to: `ACV` · `DCV` · `Ω2W` · `FREQ` · `TEMP`

**Background**

The Compare mode checks and updates if measurement data stays between the specified upper (high) and lower (low) limit.

**Activate Compare mode**

Press the `Shift` + `Math` key to activate Math setting menu as the following figure shown.

*Figure: Math setting menu — `Function Off` · `MathDisp Off` · `ReStart`.*

Further press the `F1` (`Function`) key to enter the Math Function menu as the figure shown below.

*Figure: `Math Function` menu — `OFF` · `dB` · `dBm` · `Compare` · `MX+B` · `More 1/2`; `ESC:Return`.*

Press `F4` (`Compare`) key to enable the Compare function. The screen, after activation, will appear as figure below.

*Figure: Indicator Compare On — main display reads `+000.5651 mVDC`; status line shows `DC Voltage` · `Trig:Auto` · `COMP` · `5/s` · `Range: 100mV`; softkeys: `Function COMP` · `MathDisp Off` · `BeepMode Off` · `BeepVol Medium` · `Low Limit -1.000000` · `High Limit +1.000000`.*

**F6 (High Limit) to set high limit**

Press the `F6` (`High Limit`) key to enter the setting menu.

*Figure: `Comp High Limit` entry field showing `+100.0000`; `mV` · `V`; `ESC:Return` · `Enter`.*

First use the functions keys to determine the unit, which varies by different measure modes. Then use the Left/Right arrow keys to move cursor and scroll the Knob key or press Number Keys to enter the desired value of high limit.

Push the `F6` (`Enter`) key or the Knob key (Enter) to make the setting into effect.

**F5 (Low Limit) to set low limit**

Press the `F5` (`Low Limit`) key to enter the setting menu.

*Figure: `Comp Low Limit` entry field showing `-6.600000`; `mV` · `V`; `ESC:Return` · `Enter`.*

First use the functions keys to determine the unit, which varies by different measure modes. Then use the Left/Right arrow keys to move cursor and scroll the Knob key or press Number Keys to enter the desired value of low limit.

Push the `F6` (`Enter`) key or the Knob key (Enter) to make the setting into effect.

**F3 (BeepMode) to define beep mode**

Press the `F3` (`BeepMode`) key to enter the beep mode setting. By enabling beep mode, user can be aware of the latest state promptly by beep voice.

The display shows as the figure below. Press the `F2` (`Pass`) or `F3` (`Fail`) key to determine the condition of beep alarm.

Press the `F1` (`Off`) key to disable beep mode.

*Figure: `BeepMode` menu — `Off` · `Pass` · `Fail`; `ESC:Return`.*

**F4 (BeepVol) to select beep volume**

Press the `F4` (`BeepVol`) key to enter the beep volume setting.

Select the intensity of beep volume via pressing `F1` – `F3` key for desired level as the figure shown below.

*Figure: `Beep Volume` menu — `Small` · `Medium` · `Large`; `ESC:Return`.*

**Compare mode result**

When the measured result is within the range of high and low limit, the display shows as the figure below with purely black background indicating the state of "Pass".

*Figure: Pass — main display reads `+000.5651 mVDC`; status line shows `DC Voltage` · `Trig:Auto` · `COMP` · `5/s` · `Range: 100mV`; softkeys: `Function COMP` · `MathDisp Off` · `BeepMode Off` · `BeepVol Medium` · `Low Limit -1.000000` · `High Limit +1.000000`.*

However, when measured result is either above or less than the limit range, the display appears as the figure below with boldly red background indicating the state of "Fail".

*Figure: Fail — main display reads `+000.7029 mVDC` on red background; status line shows `DC Voltage` · `Trig:Auto` · `Filter` · `COMP` · `5/s` · `Range: 100mV`; softkeys: `Function COMP` · `MathDisp Off` · `BeepMode Off` · `BeepVol Small` · `Low Limit +001.0000m` · `High Limit +0.496000`.*

See the contents below for more details of each state in compare mode

| State | Detail |
|---|---|
| High | If the compare result is High, the relative pins of digital I/O port in action are as the follows. Digital I/O: FAIL Out (Pin 6) and HIGH Limit FAIL Out (Pin 7) are activated. |
| Low | If the compare result is Low, the relative pins of digital I/O port in action are as the follows. Digital I/O: FAIL Out (Pin 6) and LOW Limit FAIL Out (Pin 8) are activated. |
| Pass | If the compare result is Pass, the relative pin of digital I/O port in action is as the follows. Digital I/O: PASS Out (Pin 5) is activated. |

**F2 (MathDisp) key to show STAT, Math & Math+STAT**

Press the `F2` (`MathDisp`) key to show the Math Display menu as the figure below shown. Proceed to the `F2` (`STAT`), `F3` (`Math`) or `F4` (`Math+STAT`) display in accord with the following chapters.

*Figure: `Math Display` menu — `Off` · `STAT` · `Math` · `Math+STAT`; `ESC:Return`.*

**Show STAT result**

Background: The STAT page in MathDisp allows you to make statistical calculations for several measurements including Minimum, Maximum, Average Peak-Peak, Standard Deviation and Count.

Operation: Press the `F2` (`STAT`) key to show the statistical data as the figure below.

*Figure: STAT result — main display reads `+000.4835 mVDC`; status line shows `DC Voltage` · `Trig:Auto` · `Filter` · `COMP` · `5/s` · `Range: 100mV`; stat box shows `Minimum : -005.6902m` · `Maximum : +001.3242m` · `Average : +000.6573m` · `Peak-Peak : +007.0145m` · `STDEV : +000.4683m` · `Count : 674`; softkeys: `Function COMP` · `MathDisp STAT` · `BeepMode Off` · `BeepVol Medium` · `Low Limit -1.000000` · `High Limit +1.000000`.*

View Data:

| Label | Indicates |
|---|---|
| +000.4835 mVDC | Indicates the currently measured mVDC value |
| Minimum | Indicates the minimum data value |
| Maximum | Indicates the maximum data value |
| Average | Indicates the mean (average) value |
| Peak-Peak | Indicates the peak to peak data |
| STDEV | Indicates the standard deviation of the data |
| Count | Indicates the latest counts of compare |

**Show Math result**

Background: The Math page in MathDisp allows you to view mathematical calculations for several parameters.

Operation: Press the `F3` (`Math`) key to show the mathematical analysis as the figure below.

*Figure: Math result — main display reads `+000.5625 mVDC`; status line shows `DC Voltage` · `Trig:Auto` · `Filter` · `COMP` · `5/s` · `Range: 100mV`; math box shows `PASS` · `Low Limit : -1.000000` · `Low Fail : 0` · `High Limit : +1.000000` · `High Fail : 0`; softkeys: `Function COMP` · `MathDisp Math` · `BeepMode Off` · `BeepVol Medium` · `Low Limit -1.000000` · `High Limit +1.000000`.*

View Data:

| Label | Indicates |
|---|---|
| +000.5625 mVDC | Indicates the currently measured mVDC value |
| Low Limit | Indicates the defined low limit |
| Low Fail | Indicates the counts of below the defined low limit |
| High Limit | Indicates the defined high limit |
| High Fail | Indicates the counts of above the defined high limit |

**Show Math+STAT result**

Background: The Math+STAT page in MathDisp allows you to view data from both statistical calculations and mathematical analysis.

Operation: Press the `F4` (`Math+STAT`) key to show the hybrid page of Math & STAT instantly as figure below.

*Figure: Math+STAT result — main display reads `+0.001003 VDC`; status line shows `DC Voltage` · `Trig:Auto` · `Filter` · `COMP` · `20/s` · `Range: 1V`; red Math section shows `PASS` · `Low Fail 63` · `High Fail 41`; blue STAT section shows `MIN : -0.040626` · `MAX : +0.016121` · `AVG : +0.000670` · `P-P : +0.066746` · `STD : +01.30304m` · `COU : 6.836k`; softkeys: `Function COMP` · `MathDisp Math+STAT` · `BeepMode Off` · `BeepVol Medium` · `Low Limit -06.00000` · `High Limit +09.99999`.*

View Data:

| Label | Indicates |
|---|---|
| +0.001003 VDC | Indicates the currently measured mVDC value |
| Blue Section | It is identical to the contents of STAT display. Refer to the previous chapter for details. |
| Red Section | It is identical to the contents of Math display. Refer to the previous chapter for details. |

**Compare live-result in MathDisp**

The latest state of compare measurement, whether it's "Pass", "High" or "Low", will also appear within each mode of MathDisp. See the example below for the "High" result in Math+STAT mode.

*Figure: main display reads `+000.9703 mVDC` on red background; status line shows `DC Voltage` · `Trig:Auto` · `Filter` · `COMP` · `5/s` · `Range: 100mV`; red Math section shows `HIGH` · `Low Fail 243` · `High Fail 39`; blue STAT section shows `MIN : -041.8225m` · `MAX : +038.9154m` · `AVG : +000.8025m` · `P-P : +080.7378m` · `STD : +02.11575m` · `COU : 1.115k`; softkeys: `Function COMP` · `MathDisp Math+STAT` · `BeepMode Fail` · `BeepVol Small` · `Low Limit -0.176000` · `High Limit -004.0000m`.*

The boldly red background along with the indicator "HIGH" within the display means the compare result is over the range of defined high limit.

**Digital I/O**

The Compare measurement result comes out from the rear panel Digital I/O terminal. For the terminal details, see page 119.

**Deactivate Compare measurement**

To cancel the Compare measurement, press the `F1` (`Function`) key followed by clicking `F1` (`OFF`) to deactivate or simply activate another measurement.

## MX+B Measurement

Applicable to: `ACV` · `DCV` · `Ω2W` · `FREQ` · `TEMP`

**Activate MX+B**

Press the `Shift` + `Math` key to activate Math setting menu as the following figure shown.

*Figure: Math setting menu — `Function Off` · `MathDisp Off` · `ReStart`.*

Further press the `F1` (`Function`) key to enter the Math Function menu as the figure shown below.

*Figure: `Math Function` menu — `OFF` · `dB` · `dBm` · `Compare` · `MX+B` · `More 1/2`; `ESC:Return`.*

Press `F5` (`MX+B`) key to enable the MX+B function. The screen, after activation, will appear as figure below.

*Figure: Indicator MX+B On — main display reads `+01.42631 mVDC` (MX+B Calculation); status line shows `DC Voltage` · `Trig:Auto` · `Filter` · `MX+B` · `5/s` · `Range: 100mV`; softkeys: `Function MX+B` · `MathDisp Off` · `M Value +1.000000` · `B Value +000.0000m`.*

**F3 (M Value) key to set the factor M**

Press the `F3` (`M Value`) key to enter the MX+B M Value menu. First use function keys to decide unit value, which may vary by different measurements. Then use the Left/Right arrow keys to move cursor and scroll the Knob key or press Number keys to enter the desired value. See the figure below.

*Figure: `MX+B M Value` entry field showing `+1.000060`; `m` · `-`; `ESC:Return` · `Enter`.*

Press the `F6` (`Enter`) key or the Knob key until click to confirm the input M value.

**F4 (B Value) key to set the offset B**

Press the `F4` (`B Value`) key to enter the setting menu. First use function keys to decide unit value, which may vary by different measurements. Then use the Left/Right arrow keys to move cursor and scroll the Knob key or press Number keys to enter the desired value. See the figure below.

*Figure: `MX+B B Value` entry field showing `+209.9999`; `mV` · `V`; `ESC:Return` · `Enter`.*

Press the `F6` (`Enter`) key or the Knob key until click to confirm the input B value.

**F2 (MathDisp) key to show STAT & Math**

Press the `F2` (`MathDisp`) key to show the option menu as the figure below shown.

Proceed to the `F2` (`STAT`) or `F3` (`Math`) display in accord with the following chapters.

*Figure: `Math Display` menu — `Off` · `STAT` · `Math`; `ESC:Return`.*

**Show STAT result**

Background: The STAT page in MathDisp allows you to make statistical calculations for several measurements including Minimum, Maximum, Average Peak-Peak, Standard Deviation and Count.

Operation: Press the `F2` (`STAT`) key to show the statistical data immediately as the figure below.

*Figure: STAT result — main display reads `+0.999999 kVDC`; status line shows `DC Voltage` · `Trig:Auto` · `Filter` · `MX+B` · `5/s` · `Range: 100mV`; stat box shows `Minimum : +0999.999` · `Maximum : +0999.999` · `Average : +0999.999` · `Peak-Peak : +026.6508µ` · `STDEV : +000.0042m` · `Count : 55`; softkeys: `Function MX+B` · `MathDisp STAT` · `M Value` · `B Value`.*

View Data:

| Label | Indicates |
|---|---|
| +0.999999 kVDC | Indicates the currently MX+B calculating result |
| Minimum | Indicates the minimum data value |
| Maximum | Indicates the maximum data value |
| Average | Indicates the mean (average) value |
| Peak-Peak | Indicates the peak to peak data |
| STDEV | Indicates the standard deviation of the data |
| Count | Indicates the latest counts of MX+B |

**Show Math result**

Background: The Math page in MathDisp allows you to view mathematical calculations for several parameters.

Operation: Press the `F3` (`Math`) key to show the mathematical analysis instantly as below.

*Figure: Math result — main display reads `+0.999999 kVDC`; status line shows `DC Voltage` · `Trig:Auto` · `Filter` · `MX+B` · `5/s` · `Range: 100mV`; math box shows `Measure : +000.0032mV` · `M Value : +1.000060` · `B Value : +0999.999`; softkeys: `Function MX+B` · `MathDisp Math` · `M Value +1.000060` · `B Value +0999.999`.*

View Data:

| Label | Indicates |
|---|---|
| +0.999999 kVDC | Indicates the currently MX+B calculating result |
| Measure: +000.9389mV | Indicates the originally measured m Voltage value |
| M Value | Indicates the defined M value |
| B Value | Indicates the defined B value |

**Deactivate MX+B measure**

To cancel the MX+B measurement, press the `F1` (`Function`) key followed by clicking `F1` (`OFF`) key to deactivate or simply activate another measurement.

## 1/X Measurement

Applicable to: `ACV` · `DCV` · `Ω2W` · `FREQ` · `TEMP`

**Activate 1/X**

Press the `Shift` + `Math` key to activate Math setting menu as the following figure shown.

*Figure: Math setting menu — `Function Off` · `MathDisp Off` · `ReStart`.*

Further press the `F1` (`Function`) key to enter the Math Function menu as the figure shown below.

*Figure: `Math Function` menu — `OFF` · `dB` · `dBm` · `Compare` · `MX+B` · `More 1/2`; `ESC:Return`.*

Press `F6` (`More 1/2`) key to enter the next page followed by pressing the `F1` (`1/X`) key. The 1/X function will be activated as the figure below.

*Figure: Indicator 1/X On — main display reads `+02.48551 k` (The Measured 1/X Value); status line shows `DC Voltage` · `Trig:Auto` · `Filter` · `1/X` · `5/s` · `Range: 100mV`; softkeys: `Function 1/X` · `MathDisp Off`.*

**F2 (MathDisp) key to show STAT & Math**

Press the `F2` (`MathDisp`) key to show the Math Display menu as the figure below shown. Proceed to the `F2` (`STAT`) or `F3` (`Math`) display in accord with the following chapters.

*Figure: `Math Display` menu — `Off` · `STAT` · `Math`; `ESC:Return`.*

**Show STAT result**

Background: The STAT page in MathDisp allows you to make statistical calculations for several measurements including Minimum, Maximum, Average Peak-Peak, Standard Deviation and Count.

Operation: Press the `F2` (`STAT`) key to show the statistical data as the figure below.

*Figure: STAT result — main display reads `+01.50367 k`; status line shows `DC Voltage` · `Trig:Auto` · `Filter` · `1/X` · `5/s` · `Range: 100mV`; stat box shows `Minimum : -03.47544k` · `Maximum : +05.67038k` · `Average : +0993.272` · `Peak-Peak : +09.14582k` · `STDEV : +0264.917` · `Count : 3.702k`; softkeys: `Function 1/X` · `MathDisp STAT`.*

View Data:

| Label | Indicates |
|---|---|
| +01.50367 k | Indicates the 1/X calculation |
| Minimum | Indicates the minimum data value |
| Maximum | Indicates the maximum data value |
| Average | Indicates the mean (average) value |
| Peak-Peak | Indicates the peak to peak data |
| STDEV | Indicates the standard deviation of the data |
| Count | Indicates the latest counts of 1/X |

**Show Math result**

Background: The Math page in MathDisp allows you to view mathematical calculations for several parameters.

Operation: Press the `F3` (`Math`) key to show the mathematical analysis as the figure below.

*Figure: Math result — main display reads `+02.15782 k`; status line shows `DC Voltage` · `Trig:Auto` · `Filter` · `1/X` · `5/s` · `Range: 100mV`; math box shows `Measure : +000.4634mV`; softkeys: `Function 1/X` · `MathDisp Math`.*

View Data:

| Label | Indicates |
|---|---|
| +02.15782k | Indicates the 1/X calculation |
| Measure: +000.4634 | Indicates the originally measured m Voltage value |

**Deactivate 1/X measurement**

To cancel the 1/X measurement, press the `F1` (`Function`) key followed by clicking the `F1` (`OFF`) key to deactivate or simply activate another measurement.

## Measure Percent

Applicable to: `ACV` · `DCV` · `Ω2W` · `FREQ` · `TEMP`

**Activate percent**

Press the `Shift` + `Math` key to activate Math setting menu as the following figure shown.

*Figure: Math setting menu — `Function Off` · `MathDisp Off` · `ReStart`.*

Further press the `F1` (`Function`) key to enter the Math Function menu as the figure shown below.

*Figure: `Math Function` menu — `OFF` · `dB` · `dBm` · `Compare` · `MX+B` · `More 1/2`; `ESC:Return`.*

Press `F6` (`More 1/2`) key to enter the next page followed by pressing the `F2` (`Percent`) key. Percent function will be activated as the following figure shown.

*Figure: Indicator Percent On — main display reads `-099.9513` (The Measured Percent Value); status line shows `DC Voltage` · `Trig:Auto` · `Filter` · `PERC` · `5/s` · `Range: 100mV`; softkeys: `Function PERC` · `MathDisp Off` · `REF % +05.59080`.*

**F3 (REF %) key to set reference %**

Press the `F3` (`REF %`) key to enter the Percent REF % menu. First use the functions keys to determine the unit, which may vary by different measure modes. Then use the Left/Right arrow keys to move cursor and scroll the Knob key or press Number keys to enter the desired value. See the figure below.

*Figure: `Persent REF %` entry field showing `+000.5908`; `m` · `-`; `ESC:Return` · `Enter`.*

Push the Knob key (Enter) or press the `F6` (`Enter`) key to confirm the input value.

**F2 (MathDisp) key to show STAT & Math**

Press the `F2` (`MathDisp`) key to show the option menu as the figure below shown.

Proceed to the `F2` (`STAT`) or `F3` (`Math`) display in accord with the following chapters.

*Figure: `Math Display` menu — `Off` · `STAT` · `Math`; `ESC:Return`.*

**Show STAT result**

Background: The STAT page in MathDisp allows you to make statistical calculations for several measurements including Minimum, Maximum, Average Peak-Peak, Standard Deviation and Count.

Operation: Press the `F2` (`STAT`) key to show the statistical data immediately as the figure below.

*Figure: STAT result — main display reads `+040.6525`; status line shows `DC Voltage` · `Trig:Auto` · `Filter` · `PERC` · `6/s` · `Range: 100mV`; stat box shows `Minimum : -021.1106k` · `Maximum : +025.5336k` · `Average : +019.8494` · `Peak-Peak : +046.6443k` · `STDEV : +2088.623` · `Count : 260`; softkeys: `Function PERC` · `MathDisp STAT` · `REF % +000.6908m`.*

View Data:

| Label | Indicates |
|---|---|
| +040.6525 | Indicates the Percent calculation |
| Minimum | Indicates the minimum data value |
| Maximum | Indicates the maximum data value |
| Average | Indicates the mean (average) value |
| Peak-Peak | Indicates the peak to peak data |
| STDEV | Indicates the standard deviation of the data |
| Count | Indicates the latest counts of Percent |

**Show Math result**

Background: The Math page in MathDisp allows you to view mathematical calculations for several parameters.

Operation: Press the `F3` (`Math`) key to show the mathematical analysis instantly as below.

*Figure: Math result — main display reads `-017.3037`; status line shows `DC Voltage` · `Trig:Auto` · `Filter` · `PERC` · `5/s` · `Range: 100mV`; math box shows `Measure : +000.4886mV` · `REF % : +000.5908m`; softkeys: `Function PERC` · `MathDisp Math` · `REF % +000.5908m`.*

View Data:

| Label | Indicates |
|---|---|
| -017.3037 | Indicates the Percent calculation |
| Measure: +000.4886mV | Indicates the originally measured m Voltage value |
| Ref %: +000.5908m | Indicates the defined reference % value |

**Deactivate percent measurement**

To cancel the percent measurement, press the `F1` (`Function`) key followed by clicking `F1` (`OFF`) to deactivate or simply activate another measurement.

## Cross-references

- [`screens/statistics.md`](../../screens/statistics.md) — the STAT page (Minimum / Maximum / Average / Peak-Peak / STDEV / Count) computed by `MathDisp` → STAT in every math mode backs the corpus `statistics` screen.
- [`screens/trendchart.md`](../../screens/trendchart.md) — the stat boxes on the trendchart screen are the same Min/Max/Average/Peak-Peak/STDEV/Count statistics surfaced here.
- [`screens/histogram.md`](../../screens/histogram.md) — the stat boxes on the histogram screen are the same statistics surfaced here.
- [`screens/measurement.md`](../../screens/measurement.md) — the math-mode status pills (`dBm` / `dB` / `COMP` / `MX+B` / `1/X` / `PERC`) shown in these figures appear on the corpus `measurement` screen's status line.

## Confidence notes

- This chunk's spec'd page range is 95-118; the "Math Measurement" heading begins on page 95 (the top of page 95 still belongs to the preceding Filter Setting section, transcribed in the `trigger-and-filter` chunk).
- The two dBm equation forms in the source use a printed superscript "2" on `Vreading`; transcribed as `Vreading²`. One overview-table cell (page 95) printed it as `Vreading2`; normalized to `Vreading²` for consistency since both refer to the same squared-voltage term.
- The Percent reference-value entry screen label is printed as `Persent REF %` (misspelling of "Percent") in the source figure on page 116; transcribed verbatim as printed.
- View-Data tables occasionally show a small mismatch between the on-screen reading in the figure and the example value in the adjacent description row (e.g. the dB Math view shows `-012.1597` on screen but the description references `Measure: +000.7479mV` while the figure's measure value differs slightly across the STAT vs. Math screenshots). These are reproduced as printed; the values come from different screenshots taken at different moments.
- The Digital I/O pin map referenced under Compare Mode (PASS Pin 5, FAIL Pin 6, HIGH Limit FAIL Pin 7, LOW Limit FAIL Pin 8) cross-references "page 119," which is outside this chunk's range and is covered in a separate Digital I/O section of the manual.
- Some stat-box and softkey values in figure captions are read from small low-resolution on-screen text; primary labels (Minimum, Maximum, Average, Peak-Peak, STDEV, Count and softkey names) are legible, but trailing digits of numeric example values may carry minor transcription uncertainty.
