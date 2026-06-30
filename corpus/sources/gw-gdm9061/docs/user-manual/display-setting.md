---
class: doc-section
doc_id: user-manual
doc_title: "Dual Measurement Multimeter GDM-9060/9061 User Manual"
doc_number: null
doc_date: 2024-03
applies_to: [gw-gdm9061, gw-gdm9060]
section_id: display-setting
section_title: Display Setting
parent_section: null
page_range: "189-210"
related_screens: [trendchart, histogram, measurement, config-display]
related_hardware: []
---

# Display Setting

## Summary

The DISPLAY SETTING chapter, reached via the front-panel `DISP` key. Two parts: **Digit** (max digit count per measurement, plus the measure-type/speed and frequency/gate-time correlation tables) and **Display** (the five readout display modes — Number, Bar Meter, Trend Chart, Histogram — with their VScale / HScale / Bins / Stop&View / ReStart softkeys and on-screen statistics boxes). Backs the `trendchart` and `histogram` screens and the Number readout. Procedures, option lists, and color-coded section legends transcribed verbatim.

## Content

This chapter (Display Setting) covers:

- Digit — 190
- Display — 192
  - Number — 192
  - Bar Meter — 193
  - Trend Chart — 197
  - Histogram — 206

## Digit

**Background** — Define the maximum digit numbers for each measurement.

**Step**

1. Press `DISP` key followed by clicking the `F1 (Digit)` key, the Digit menu appears where several digit options are available to select.

   *Figure: Digit softkey bar — `Auto`, `6 1/2`, `5 1/2`, `4 1/2`, `ESC :Return`.*

2. Further press `F1 (6 ½)`, `F2 (5 ½)`, `F3 (4 ½)` keys for desired maximum digit numbers on display, or press the `F1 (Auto)` key to allow system determine digit numbers for display per measuring situation.

   | Digit Parameter | Display |
   |---|---|
   | 6 ½ | *Figure: AC Voltage reading `004.1081 mVAC`.* |
   | 5 ½ | *Figure: AC Voltage reading `004.106 mVAC`.* |
   | 4 ½ | *Figure: AC Voltage reading `004.10 mVAC`.* |
   | Auto | The maximum digit numbers may vary in accord with the applied measuring functions and refresh rates. |

### The correlation between measure types and speeds for available digit numbers

| Measure Type \ Speed | 1/s | 2/s | 5/s | 20/s | 60/s | 100/s | 400/s | 1K/S | 1.2k/s | 2.4k/s | 4.8k/s | 7.2k/s | 10k/s |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| DCV | - | - | 6 1/2 | 6 1/2 | 6 1/2 | 6 1/2 | 5 1/2 | 5 1/2 | 5 1/2 | 5 1/2 | 4 1/2 | 4 1/2 | 4 1/2 |
| ACV | 6 1/2 | - | 5 1/2 | 4 1/2 | - | - | - | - | - | - | - | - | - |
| DCI | - | - | 6 1/2 | 6 1/2 | 6 1/2 | 6 1/2 | 5 1/2 | 5 1/2 | 5 1/2 | 5 1/2 | 4 1/2 | 4 1/2 | 4 1/2 |
| ACI | 6 1/2 | - | 5 1/2 | 4 1/2 | - | - | - | - | - | - | - | - | - |
| 2W/4W | - | - | 6 1/2 | 6 1/2 | 6 1/2 | 6 1/2 | 5 1/2 | 5 1/2 | 5 1/2 | 5 1/2 | 4 1/2 | 4 1/2 | 4 1/2 |
| Continuity | - | - | - | - | 6 1/2 | 5 1/2 | 4 1/2 | - | - | - | - | - | - |
| Diode | - | - | - | - | 6 1/2 | 5 1/2 | 4 1/2 | - | - | - | - | - | - |
| Temp | - | - | 6 1/2 | 5 1/2 | 4 1/2 | - | - | - | - | - | - | - | - |
| Cap | - | 4 1/2 | - | - | - | - | - | - | - | - | - | - | - |

> ⚠ **Note:** The `1K/S` column (highlighted blue) is applicable to GDM-9060, whilst the `1.2k/s`–`10k/s` columns (highlighted green) are specifically for GDM-9061.

### The correlation between frequency/period and gate time for available digit numbers

| Measure Type \ Gate Time | 1/s | 100ms | 10ms |
|---|---|---|---|
| Frequency/Period | 6 1/2 | 5 1/2 | 4 1/2 |

## Display

### Number

**Background** — Shift to the Number display mode for each measurement.

**Step**

1. Press the `DISP` key followed by clicking the `F2 (Display)` key, the Display menu appears where several display options are available for selection.

   *Figure: Display softkey bar — `Number`, `Bar Meter`, `TrendChart`, `Histogram`, `ESC :Return`.*

2. Press the `F1 (Number)` key, the screen shows the Number mode for measurement display. The measured value is presented in the clear number way for viewing, along with the maximum digits display depending on the Digit selection.

   *Figure: AC Voltage reading `004.1081 mVAC` (Measured value presented in Number); softkeys `Digit 6 1/2`, `Display Number`, `ReStart`.*

### Bar Meter

**Background** — Shift to the Bar Meter display for each measurement.

**Step**

1. Press the `DISP` key followed by clicking the `F2 (Display)` key, the Display menu appears where several display options are available for selection.

   *Figure: Display softkey bar — `Number`, `Bar Meter`, `TrendChart`, `Histogram`, `ESC :Return`.*

2. Press the `F2 (Bar Meter)` key, the screen shows the Bar Meter mode for measurement display. The measured value is presented in the bar meter way for viewing, along with the maximum digits display depending on the Digit selection.

   *Figure: AC Voltage reading `004.08 mVAC` with a horizontal bar scale `-3.000 / +0.0 / +3.000`; softkeys `Digit 4 1/2`, `Display Bar Meter`, `Scale Manual`, `Method Center`, `Center +0.0`, `Span Scale +6.000`.*

   | Section | Meaning |
   |---|---|
   | Red Sect. | It indicates the currently measured value in number display. |
   | Green Sect. | It indicates the currently measured value in bar meter display. |

**F3 (Scale) key to decide scale mode**

- **Background** — Press the `F3 (Scale)` key to enter the Scale Mode menu where Normal and Manual options are available for selection.
- **Normal** — Selecting "Normal" allows the scale of meter bar to be symmetric with the selected range of measurement.

  *Figure: AC Voltage reading `004.2299 mVAC`; bar scale endpoints `0` and `100m`; softkeys `Digit Auto`, `Display Bar Meter`, `Scale Normal`.*

  | Section | Meaning |
  |---|---|
  | Red Sect. | The user-specified range for measurement. |
  | Yellow Sect. | The endpoints of 2 sides are "0" and "100m" respectively, which perfectly correspond to the specified range of measurement. |
  | Green Sect. | The currently measured value. |

- **Manual** — Selecting "Manual" allows user to customize the available scale for meter bar on display.

**F4 (Method) key to decide Method mode**

- **Background** — When user selects "Manual" option under the `F3 (Scale)` key, the Method can be further defined here for varied applications.
- **LowHigh** — When LowHigh is selected, it is available to further determine the exact scales for both the high and low ends on the bar meter display.

  *Figure: AC Voltage reading `00.00513 VAC`, Range: `10V`; bar scale `-4.000k / -2.000k / +10.000µ`; softkeys `Digit 6 1/2`, `Display Bar Meter`, `Scale Manual`, `Method LowHigh`, `Low Scale -4.000k`, `High Scale +10.000µ`.*

  | Section | Meaning |
  |---|---|
  | Yellow Sect. | The available scale of bar meter starts from the lowest (-4.000k) to the highest (+10.000µ), which are defined by user individually. |
  | Red Sect. | The user-specified range for measurement. |
  | Green Sect. | The currently measured value. |

- **Center** — When Center is selected, it is available to further determine the exact Center value and the Span Scale for the meter bar display.

  *Figure: AC Voltage reading `004.08 mVAC`; bar scale `-3.000 / +0.0 / +3.000`; softkeys `Digit 4 1/2`, `Display Bar Meter`, `Scale Manual`, `Method Center`, `Center +0.0`, `Span Scale +6.000`.*

  | Section | Meaning |
  |---|---|
  | Yellow Sect. | The Center value defined by user. |
  | Purple Sect. | The Span Scale defined by user. |
  | Red Sect. | The user-specified range for measurement. |
  | Green Sect. | The currently measured value. |

**F5 (Low Scale) & F6 (High Scale) keys**

After user selects "LowHigh" option under the `F4 (Method)` key, the low and high scales can be specified individually via `F5 (Low Scale)` & `F6 (High Scale)` keys.

*Figure: AC Voltage reading `00.00513 VAC`, Range: `10V`; bar scale `-4.000k / -2.000k / +10.000µ`; softkeys `Low Scale -4.000k`, `High Scale +10.000µ`.*

| Section | Meaning |
|---|---|
| Red Sect. | The specified Low Scale (-4.000k) in F5 key is identical with the upper value in red frame on the low scale of meter bar. |
| Green Sect. | The specified High Scale (+10.000µ) in F6 key is identical with the upper value in green frame on high scale of meter bar. |

**F5 (Center) & F6 (Span Scale) keys**

When Center method is opted, user can further determine the Center and Span Scale individually via `F5 (Center)` & `F6 (Span Scale)` keys.

*Figure: AC Voltage reading `004.08 mVAC`; bar scale `-3.000 / +0.0 / +3.000`; softkeys `Digit 4 1/2`, `Display Bar Meter`, `Scale Manual`, `Method Center`, `Center +0.0`, `Span Scale +6.000`.*

| Section | Meaning |
|---|---|
| Red Sect. | The specified Center (+0.0) in F5 key is identical with the upper value in red frame on the center value of meter bar. |
| Green Sect. | The specified Span Scale (+6.000) in F6 key indicates the whole scale of the meter bar, which means +6.000 will be evenly divided into 2 ends of the meter bar that results in -3.000 in the left end and +3.000 in the right end as the figure shown. |

### Trend Chart

**Background** — Shift to the Trend Chart display for each measurement.

**Step**

1. Press the `DISP` key followed by clicking the `F2 (Display)` key, the Display menu appears where several display options are available for selection.

   *Figure: Display softkey bar — `Number`, `Bar Meter`, `TrendChart`, `Histogram`, `ESC :Return`.*

2. Press the `F3 (TrendChart)` key, the screen shows the Trend Chart mode for measurement display. The measured value is presented in the trend chart way for viewing, along with the maximum digits display depending on the Digit selection.

   *Figure: DC Voltage `+00.00755 VDC`, Range `10V`; trend plot with `+16 / 0 / -16` vertical scale and `(17066)` count box; softkeys `Digit 6 1/2`, `Display TrendChart`, `VScale Normal`, `HScale Count`, `Stop&View`, `ReStart`.*

   | Section | Meaning |
   |---|---|
   | Red Sect. | It indicates the currently measured value in number display. |
   | Green Sect. | It indicates the latest measurements of 400 counts in the intuitive trend chart. |
   | Yellow Sect. | The total counts of measurement with the maximum of 100,000. Only 400 counts, however, can be displayed in the trend chart at once. |

**F3 (VScale) key to define vertical scale**

- **Background** — Press the `F3 (Scale)` key to enter the VScale Setup menu where Normal and Manual options are available for selection.
- **Normal** — Selecting "Normal" allows the vertical scale of trend chart to be symmetric with the selected range of measurement.

  *Figure: DC Voltage `+09.82876 VDC`, Range `10V`, `400/s`; trend plot with `+10 / 0 / -10` vertical scale; softkeys `Digit 6 1/2`, `Display TrendChart`, `VScale Normal`, `HScale Count`, `Stop&View`, `ReStart`.*

  | Section | Meaning |
  |---|---|
  | Red Sect. | The user-specified range for measurement. |
  | Yellow Sect. | The highest scale (+10) corresponds to the upper defined manual range 10V, and the lowest scale is the relative value in the opposite spectrum. |
  | Green Sect. | The currently measured value. |

- **Manual** — Selecting "Manual" allows user to customize the available scale for trend chart on display.

  *Figure: DC Voltage `-09.83139 VDC`, Range `10V`, `400/s`; vertical scale `+11.0000 / +1.0000 / -9.0000`; VScale Setup bar with `Normal`/`Manual`, `Auto(Once)`, `L:-9.000`, `H:+11.000`.*

  | Section | Meaning |
  |---|---|
  | Red Sect. | The user-specified highest and lowest scales. Press the F5 and F6 keys to set up individually. |
  | Yellow Sect. | Both the highest scale (+11.0000) and the lowest scale (-9.0000) correspond to the user-specified values in the red section. |
  | Green Sect. | The currently measured value. |
  | Purple Sect. | Press the `F4 (Auto(Once))` key to obtain the highest and lowest scales from the latest 400 counts of measurements into the trend chart as a baseline of vertical scale. Take the figure below for instance, the highest and lowest ends in vertical scale are irregular values 20.573m and -9.8303 which come from the latest measurements. |

  *Figure: DC Voltage `-09.83020 VDC`, Range `10V`, `400/s`; vertical scale `+20.573m / -4.904b / -9.8303`; VScale Setup bar `Normal`/`Manual`, `Auto(Once)`, `L:-9.830`, `H:+20.67m`.*

**F4 (HScale) key to define horizontal scale**

- **Background** — Press the `F4 (HScale)` key to enter the HScale Setup menu where Count and Recent options are available for selection.
- **Count** — Selecting "Count" allows the horizontal scale of trend chart to be symmetric with the defined refresh rate of measurement.

  *Figure: DC Voltage `-09.82863 VDC`, Range `10V`, `100/s`; noisy trend plot with `(24416)` count box; HScale Setup bar `Count`/`Recent`.*

  | Section | Meaning |
  |---|---|
  | Green Sect. | The user-defined refresh rate. |
  | Red Sect. | The refreshing frequency of the total counts of measurements is consistent with the refresh rate. For example, setting 10k/s results in the fastest frequency, while 1s leading to the slowest frequency. |

- **Recent** — Selecting "Recent" allows the horizontal scale of trend chart to be customized by user.

  *Figure: DC Voltage `+08.18189 VDC`, Range `10V`, `20/s`; statistics `MIN: -07.95942`, `MAX: +08.19199`, `AVG: +08.31976`, `STD: +07.89044`, `COU: 1.611k`; horizontal scale `-400.0 s / -200.0 s / 0`; HScale Setup bar `Count`/`Recent`, `AutoStop △ 1.0000Sec`, `400Sec`, `ReStart`.*

  | Section | Meaning |
  |---|---|
  | Red Sect. | The user-specified range of horizontal scale in the unit of second. Press the F5 key to set up individually. |
  | Green Sect. | The horizontal scale ranging from the right-side 0 to the left-hand -400.0s that corresponds to the user-specified range of horizontal scale. |
  | Yellow Sect. | The currently total counts of measurement. |
  | Orange Sect. | The user-specified auto-stop feature of the F3 key, which automatically suspends recording after a course of time period defined by user from the field highlighted in red as follows. Value: 1~9999 Min. After confirming the time period for auto-stop, click "Start" in orange and the countdown appears on top of screen as the field highlighted in yellow below. |
  | Purple Sect. | The interval of each count of measurement which relates to the user-specified range of horizontal scale. To put it simply, due to the maximum 400 counts at once, when setting 400Sec, the interval is equal to 400Sec divided by 400 counts = 1 second. If setting 800Sec, it turns out 800/400 = 2 seconds. |
  | Blue Sect. | Press the `F6 (Restart)` key to recount the measurements. |

**F5 (Stop&View) key for data**

Press the `F5 (Stop&View)` key to enter the View Setup (Trend) mode which empowers user to have a detailed view into the measured data on the trend chart. Once clicking the key, measurement will stop right away.

*Figure: DC Voltage, Range `10V`, `2.4k/s`; `Total: 3420`, `<-->:40 pixels`; statistics `① -0.13895 1V (-2139)`, `② +0.13506 8V (-2414)`, `△ +0.274016 ( 276)`; horizontal scale `-2440 / -2040`; View Setup (Trend) bar — `Range`, `Cursor1`, `Cursor2`, `1ST ON`, `2ND OFF`.*

- **F1 key (Range)** — Press the `F1 (Range)` key to check a certain course of range of the measured counts. Scroll the Knob key rightward or leftward to move cursor on different sections.

  | Section | Meaning |
  |---|---|
  | Red Sect. | Press the F1 (Range) for range check. |
  | Green Sect. | The total counts of measurements before entering the Stop&View. |
  | Yellow Sect. | Press the Knob key to change the maximum counts for display. 1 pixel – 4 pixels – 400 pixels |
  | Orange Sect. | The lowest value of the selected count with its affiliated serial number. |
  | Blue Sect. | The highest value of the selected count with its affiliated serial number. |
  | White Sect. | The delta between the highest and lowest values of the selected count with its affiliated serial number. |
  | Purple Sect. | The scale of measurements displayed, which relates to the yellow section – pixels. When 40 pixels are defined previously, scroll the Knob key once, the scale will increase or decrease 40 counts per time. |

- **F2 key (Cursor1)** — Press the `F2 (Cursor1)` key to check the lowest value of each count. Scroll the Knob key rightward or leftward to move cursor on different sections.

  *Figure: View Setup (Trend), Cursor1 active; statistics `① -012.1882mV (+304k3)`, `② +016.3242m ( 38)`; horizontal scale `-38745 / -38545`.*

  | Section | Meaning |
  |---|---|
  | Green Sect. | Press the F2 (Cursor1) for checking the lowest value of each count. |
  | Red Sect. | The lowest value of the selected count with its affiliated serial number. |
  | Yellow Sect. | Press the Knob key to change the maximum counts for display. 1 pixel – 10 pixels – 20 pixels |
  | Purple Sect. | The delta between the highest and lowest values of the selected count with its affiliated serial number. |

- **F3 key (Cursor2)** — Press the `F3 (Cursor2)` key to check the highest value of each count. Scroll the Knob key rightward or leftward to move cursor on different sections.

  *Figure: View Setup (Trend), Cursor2 active; statistics `① -012.1882mV (+304k3)`, `② +07.0199m ( 38)`; horizontal scale `-38746 / -38346`.*

  | Section | Meaning |
  |---|---|
  | Green Sect. | Press the F3 (Cursor2) for checking the highest value of each count. |
  | Red Sect. | The highest value of the selected count with its affiliated serial number. |
  | Yellow Sect. | Press the Knob key to change the maximum counts for display. 1 pixel – 10 pixels – 20 pixels |
  | Purple Sect. | The delta between the highest and lowest values of the selected count with its affiliated serial number. |

- **F4 key (COU/TIM)**

  **COU** — Press the `F4 (COU/TIM)` key to toggle between the 2 modes (COU/TIM). In association with the previous `F1 (Range)`, `F2 (Cursor1)` and `F3 (Cursor2)` keys, user can utilize COU to check diversified values of each count per needs

  > ⚠ **Note:** This option is only available when "Recent" under HScale is selected.

  *Figure: DC Voltage, `60/s`, Range `10V`; statistics `① +01.28093V (-1226)`, `② +01.38093V (-1010)`, `△ +000.966 8m ( 216)`; View Mode (Recent); softkeys `Range`, `Cursor1`, `Cursor2`, `COU TIM`, `1ST ON`, `2ND OFF`.*

  | Section | Meaning |
  |---|---|
  | Yellow Sect. | The display basically is identical with the previous introductions of `F1 (Range)`, `F2 (Cursor1)` and `F3 (Cursor2)` keys. Refer to the each section for further details. |

  **TIM** — Press the `F4 (COU/TIM)` key to toggle between the 2 modes (COU/TIM). In association with the previous `F1 (Range)`, `F2 (Cursor1)` and `F3 (Cursor2)` keys, user can utilize TIM to check time parameters of each count per needs.

  > ⚠ **Note:** This option is only available when "Recent" under HScale is selected.

  *Figure: DC Voltage, `60/s`, Range `10V`; time statistics `① (+0d00:02:02.6000)`, `② (+0d00:01:41.0000)`, `△ (00d00:00:21.6000)`; View Mode (Recent).*

  | Section | Meaning |
  |---|---|
  | Yellow Sect. | The time parameters of the selected lowest, highest and delta values display in the clear time format below, which indicate the exact day and time when the selected values occurred respectively. *Figure: `+0d00:02:02.6000` labelled `Day Hour Minute Second`.* |

- **F5 & F6 keys (1ST ON & 2ND ON)** — The Stop&View under Trend Chart is also applicable to the dual measurement. Activating dual measurement followed by entering this mode where the statistics are almost identical to those of the previous single measurement.

  *Figure: DCV `10V` `2.4k/s` / ACV `100mV`, dual trend; `Total: 4`, `<-->:40 pixels`; 1ST statistics `① -089.8005mV (-4)`, `② +112.3605mV (-2)`, `△ +0.202161 ( 2)`; 2ND statistics `① +105.2995mV (-4)`, `② +105.2899m (-2)`, `△ +09.63143µ ( 2)`; vertical scale `+1.00000 / +0.0 / -1.00000`; View Setup (Trend) bar — `Range`, `Cursor1`, `Cursor2`, `1ST ON`, `2ND ON`. User can view each data for dual measurements or toggle on/off for either 1ST or 2ND channel at any time per requirement.*

**F6 (Start) key to restart measurement**

After entering the View Setup (Trend) mode, system will halt the measurement right away. Exit the View Setup (Trend) mode and press the `F6 (Start)` key to restart measurement.

When measurement is ongoing, press the `F6 (ReStart)` key to recount the accumulated measurements.

### Histogram

**Background** — Shift to the Histogram display for each measurement.

**Step**

1. Press the `DISP` key followed by clicking the `F2 (Display)` key, the Display menu appears where several display options are available for selection.

   *Figure: Display softkey bar — `Number`, `Bar Meter`, `TrendChart`, `Histogram`, `ESC :Return`.*

2. Press the `F4 (Histogram)` key, the screen shows the Histogram mode for measurement display. The measured value is presented in the way of histogram for viewing, along with the maximum digits display depending on the Digit selection.

   *Figure: DC Voltage `+02.657 VDC`, Range `10V`, `60/s`; left chips `42 (4.0%)`, `Total 1,050k`, `Bins 400`; histogram with horizontal scale `+2.610 / +2.742 / +2.873`; softkeys `Digit 4 1/2`, `Display Histogram`, `Bins 400`, `HScale Auto`, `Stop&View`, `ReStart`.*

   | Section | Meaning |
   |---|---|
   | Green Sect. | It indicates the total measured bins accumulated currently. |
   | Red Sect. | It indicates bins of the highest section of measured values with its affiliated percentage from the total counts of measurements. |
   | Yellow Sect. | The currently measured value. |
   | Purple Sect. | The histogram display for the measured bins. Up to the 400 latest bins can be shown concurrently. |
   | Blue Sect. | The maximum bin numbers displayed within the purple section. |
   | Orange Sect. | The range of horizontal scale of histogram display. |

**F3 (Bins) key to define bin numbers**

- **Background** — Press the `F3 (Bins)` key to enter the Bins Setup menu where user can customize the maximum numbers of stripe-like bins for display.

  > **Note:** The available options for bin numbers will vary in accordance with the defined refresh rate. Faster the refresh rate, smaller the numbers of bins available.

- **Display**

  *Figure: DC Voltage `+02.312 VDC`, `10k/s`; histogram with 20 bins (`Bins 20`); the central line divides the left and right parts, each of which contains 10 bins respectively.*

  *Figure: DC Voltage `+02.263 VDC`, `10k/s`; histogram with 10 bins (`Bins 10`); the 10 bins setting makes the histogram display much thicker in its each bin compared to the previous 20 bins setting.*

  The max bin number varies by the refresh rate. Check the table below for correlative parameters.

  | Refresh Rate | 5/s ~ 2.4k/s | 4.8k/s | 7.2k/s | 10k/s |
  |---|---|---|---|---|
  | Max. Bin Number | 400 | 200 | 100 | 20 |

**F4 (HScale) key to define horizontal scale**

- **Background** — Press the `F4 (HScale)` key to enter the HScale Setup menu where Auto and Manual options are available for selection.
- **Auto** — Selecting "Auto" allows the frequency of the measuring counts to be symmetric with the defined refresh rate. For example, setting 10k/s results in the fastest frequency, while 1s leading to the slowest frequency.

  *Figure: DC Voltage `+04.89128 VDC`, `10k/s`, Range `10V`; left chips `513 (9.8%)`, `Total 5,536k`, `Bins 20`; histogram horizontal scale `+4.862 / +4.907 / +4.951`; HScale Setup bar `Auto`/`Manual`.*

  | Section | Meaning |
  |---|---|
  | Yellow Sect. | Press the `F1 (Auto)` key for auto HScale setup mode. |
  | Green Sect. | The user-defined refresh rate. |
  | Red Sect. | The frequency of the measured total counts, highest values percentage and bin numbers is consistent with the refresh rate. |
  | Orange Sect. | The range of horizontal scale of histogram display varies according to the currently measured value. |

- **Manual** — Selecting "Manual" allows the horizontal scale of histogram display to be customized by user.

  *Figure: DC Voltage `+01.01785 VDC`, `10k/s`, Range `10V`; left chips `18.139k (64.4%)`, `Total 28.734k`, `Bins 20`; histogram horizontal scale `+1.0000 / +3.500 / +6.000`; HScale Setup bar `Auto`/`Manual`, `Auto(Once)`, `L:+1.0000`, `H:+6.000`.*

  | Section | Meaning |
  |---|---|
  | Red Sect. | The user-specified highest and lowest scales. Press the F5 and F6 keys to set up individually. |
  | Green Sect. | The horizontal scale ranging from the right-side +6.000 to the left-hand +1.0000 that corresponds to the user-specified range of horizontal scale. |
  | Purple Sect. | Press the `F4 (Auto(Once))` key to obtain the highest and lowest scales from the latest bins of measurement within the histogram as a baseline for horizontal scale. Take the figure below for instance, the right and left ends in horizontal scale are irregular values +1.1022 and +1.0740 which come from the latest measurement of bins. |

  *Figure: DC Voltage `+01.12637 VDC`, `10k/s`, Range `10V`; left chips `607 (6.7%)`, `Total 9.526k`, `Bins 20`; histogram horizontal scale `+1.0740 / +1.0881 / +1.1022`; HScale Setup bar `Auto`/`Manual`, `Auto(Once)`, `L:+1.0740`, `H:+1.1022`.*

**F5 (Stop&View) key for data**

Press the `F5 (Stop&View)` key to enter the View Setup (His) mode which empowers user to have a detailed view into the measured data on the histogram. Once clicking the key, measurement will stop right away.

*Figure: DC Voltage, `10k/s`, Range `10V`; View Mode statistics `Class : 1`, `Count : 480`, `% : 2.3 %`, `Down : +01.4762V`, `Up : +01.4773V`, `SPAN : +0.891432mV`; left chips `1.527k (7.3%)`, `Total 20.940k`, `Bins 20`; horizontal scale `+1.477 / +1.484 / +1.490`; View Setup (His) bar — `Class`.*

- **F1 key (Class)** — Press the `F1 (Class)` key to check the detailed data of each bin from the histogram measurement.

  *Figure: View Setup (His), Class active; statistics `Class : 20`, `Count : 401`, `% : 3.18 %`, `Down : +01.4880V`, `Up : +01.4891V`, `SPAN : +0.891432mV`.*

  | Section | Meaning |
  |---|---|
  | Red Sect. | It indicates the Class mode under View Setup (His) is activated. |
  | Green Sect. | It indicates the selected bin number. Scroll the Knob key rightward or leftward to change bin number for checking. |
  | Yellow Sect. | It indicates the total accumulated counts of measurement categorized within the selected bin number. |
  | Orange Sect. | It indicates the exact percentage of the total counts of measurement from the selected bin number. |
  | Purple Sect. | It indicates the lowest value being measured within the selected bin number. |
  | Blue Sect. | It indicates the highest value being measured within the selected bin number. |
  | White Sect. | It indicates the difference in value between the purple section (Down) and the blue section (Up). |

**F6 (Start) key to restart measurement**

After entering the View Setup (His) mode, system will halt the measurement right away. Exit the View Setup (His) mode and press the `F6 (Start)` key to restart measurement.

When measurement is ongoing, press the `F6 (ReStart)` key to recount the accumulated measurements.

## Cross-references

- [`screens/trendchart.md`](../../screens/trendchart.md) — the Trend Chart display mode and its VScale / HScale / Stop&View / View Setup (Trend) controls documented here.
- [`screens/histogram.md`](../../screens/histogram.md) — the Histogram display mode and its Bins / HScale / Stop&View / View Setup (His) controls documented here.
- [`screens/config-display.md`](../../screens/config-display.md) — the Digit/Number readout colors, font, and BigFont options that affect every display mode are set on the Configure Display screen.
- [`screens/measurement.md`](../../screens/measurement.md) — the Number display mode is the standard measurement readout; the Digit setting and display-mode shift apply to it.

## Confidence notes

- Several statistics figures (Stop&View Trend Cursor1/Cursor2, COU/TIM) have very small overlaid serial numbers; values like `+304k3`, `+016.3242m ( 38)`, `+07.0199m` are transcribed as best-read from the low-resolution captures and may differ in a digit. The legend tables (what each colored section means) are clearly printed and transcribed verbatim with confidence.
- In the Normal VScale figure the middle vertical-scale label reads `-4.904b`; the trailing character is likely a `m` (milli) rendered ambiguously. Transcribed as printed.
- "Background" / "Backgro und" appears in several source table cells (a hyphenation/spelling artifact of the original); normalized to "Background" in headings, preserved meaning intact.
- The Digit correlation table's blue/green cell highlighting (GDM-9060 vs GDM-9061 applicability) cannot be reproduced in Markdown; captured in the table's footnote `⚠ Note` instead, per the source's own legend.
