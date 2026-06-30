---
class: doc-section
doc_id: user-manual
doc_title: "Dual Measurement Multimeter GDM-9060/9061 User Manual"
doc_number: null
doc_date: 2024-03
applies_to: [gw-gdm9061, gw-gdm9060]
section_id: voltage-measurement
section_title: AC/DC Voltage Measurement
parent_section: basic-measurement-overview
page_range: "31-37"
related_screens: [measurement, range-select, measurement-alt]
related_hardware: []
---

# AC/DC Voltage Measurement

## Summary

Walks through measuring AC and DC voltage on the GDM-9060/9061: activating ACV/DCV mode with the `ACV`/`DCV` keys, reading the on-screen mode indicators, and wiring the test leads to Input HI/LO. Covers the voltage range table (Auto / 100mV / 1V / 10V / 100V / 750V AC / 1000V DC) with resolution and full-scale figures, plus the general voltage settings reached by softkey: Speed (F2) refresh rate, Auto Zero (F3), Input R (F4) input impedance, and DCV Ratio (F5). Closes with reference tables relating AC/DC readings across waveforms and the crest-factor table used to gauge AC-measurement accuracy.

## Content

**Voltage type**

| Voltage type | Range |
|---|---|
| AC | 0 ~ 750V |
| DC | 0 ~ 1000V |

**Activate ACV/DCV**

Press the `ACV` key or `DCV` key to measure AC or DC voltage, respectively. (`8 ACI` is the shift function above `ACV`; `7 DCI` is the shift function above `DCV`.)

**ACV/DCV mode display appears**

The mode will switch to ACV, DCV mode immediately. See the figure below for example.

*Figure: DCV mode display showing `+000.1066 mVDC`, with `DC Voltage` · `Trig: Auto` · `Filter` · `5/s` · `A Range: 100mV` in the status bar and `A-Zero` indicated.*

| Indicator | Meaning |
|---|---|
| DC or AC Voltage | Indicates DC or AC Voltage mode |
| 5/s | Indicates the active refresh rate |
| `A` | Indicates Automatic range selection |
| Range: 100mV | Indicates the available range of Voltage |
| +000.1066 mVDC | Indicates the exact measured value |

**Connect the test lead and measure**

Connect the test lead between the Input HI and Input LO terminals. The display updates the reading.

### Select Voltage Range

**Auto range**

To turn the automatic range selection On/Off, press the `Auto` key.

**Manual range**

Press the "+" or the "-" key to select the range. The Auto indicator `A` turns to `M` indicating Manual range selection.

If the appropriate range is unknown, select the highest range.

You can also press the F1 (`Range`) key to select a range for the measurement.

Press the F1 ~ F6 key to select a desired range for the voltage measurement.

*Figure: Range softkey bar — `Auto` · `100mV` · `1V` · `10V` · `100V` · `1000V`, with `ESC: Return`.*

**Selection list**

| Range | Resolution | Full scale |
|---|---|---|
| 100mV | 0.1µV | 119.9999mV |
| 1V | 1 µV | 1.199999 V |
| 10V | 10 µV | 11.99999 V |
| 100V | 100 µV | 119.9999 V |
| 750V (AC) | 1mV | 787.500 V |
| 1000V (DC) | 1mV | 1050.000 V |

> **NOTE:** For more detailed parameters, see the specifications on page 359.

### General Voltage Setting

**F2 (`Speed`) key to select refresh rate**

`DCV:`

Press the F1 ~ F5 key to select the desired rate

*Figure: Speed softkey bar — `5/s` · `20/s` · `60/s` · `100/s` · `400/s` · `More 1/2`.*

Press the F6 (`More 1/2`) key for next page with more options as the figure shown below.

*Figure: Speed softkey bar (page 2) — `1.2k/s` · `2.4k/s` · `4.8k/s` · `7.2k/s` · `10k/s` · `Page Up`.*

`ACV:`

Press the F1 ~ F3 key to select the desired rate

*Figure: Speed softkey bar — `1/s>3Hz` · `5/s>20Hz` · `20/s>200Hz`, with `ESC: Return`.*

**F3 (`Auto Zero`) key to enable Auto Zero (DCV mode only)**

*Background:* Autozero provides the most accurate measurements, but requires additional time to perform the zero measurement. With autozero enabled (On), the GDM-9060/9061 internally measures the offset following each measurement. It then subtracts that measurement from the preceding reading. This prevents offset voltages present on the GDM-9060/9061's input circuitry from affecting measurement accuracy. With autozero disabled (Off), the GDM-9060/9061 measures the offset once and subtracts the offset from all subsequent measurements.

*Display:* When turning On the Auto Zero, the display shows an icon `A-Zero` indicating the Auto Zero mode is currently being activated.

**F4 (`Input R`) key to select input resistance**

*Background:* Specify the input impedance to the test leads (Input R). This specifies the measurement terminal input impedance, which is either Auto or 10 MΩ.

The Auto mode selects high impedance (Hi-Z) for the 100 mV, 1 V and 10 V ranges, and 10 MΩ for the 100 V and 1000 V ranges. In most situations, 10 MΩ is high enough to not load most circuits, but low enough to make readings stable for high impedance circuits. It also leads to readings with less noise than the (Hi-Z) option, which is included for situations where the 10 MΩ load is significant.

*Figure: DMM input-impedance circuit — Vs source with series Rs feeding HI/LO terminals into Ri (ideal meter).*

```
Vs = ideal voltage of DUT
Rs = input impedance of DUT
Ri = input impedance of GDM-9060/9061 (either 10M or 10G available (Hi-Z))
Deviation (%) = Rs/(Rs+Ri) * 100
```

*Display:* When "Auto" is selected, the display shows an icon `Hi-Z` indicating the Auto mode is currently being activated.

**F5 (`DCV Ratio`) key to enable DCV Ratio**

*Background:* The GDM-9060/9061 is able to calculate DCV ration by measuring input voltage from the Input terminals and the reference voltage from the Sense terminals. Before activating the DCV Ration, it is required to wire test leads as the following illustration.

*Figure: DCV Ratio wiring — source across SENSE (HI/LO) terminals and a second source across INPUT (HI/LO) terminals.*

The equation of DCV ratio is like the following mathematical calculation:

```
                DC Input Voltage
DCV RATIO = ─────────────────────────
              DC Reference Voltage
```

See the above equation from which DC Reference Voltage indicates the measured voltage from the Sense terminals.

*Display:* Screenshot showing `+1.010457` giant reading, with `DC Voltage` · `Trig: Auto` · `Filter` · `Ratio` · `5/s` · `Range: 10V` in the status bar; `REF: +00.85414V`, `A-Zero`, `Hi-Z`, `INP: +00.86308V` indicators; and softkey row `Range 10V` · `Speed 6/s` · `Auto Zero ---` · `Input R 10M/Auto` · `DCV Ratio On/Off` · `2ND Off`. Callouts label the DCV Ratio Reading, Reference Voltage Reading, and Input Voltage Reading.

From the screenshot above for example, the INP: +00.86308V (input voltage) is divided by the REF: +00.85414V (reference voltage), and the result turns out the DCV ratio: +1.010457 shown in giant reading clearly.

### Voltage Conversion Table

*Background:* This table shows the relationship between AC and DC reading in various waveforms.

| Waveform | Peak to Peak | AC (True RMS) | DC |
|---|---|---|---|
| Sine | 2.828 | 1.000 | 0.000 |
| Rectified Sine (full wave) | 1.414 | 0.435 | 0.900 |
| Rectified Sine (half wave) | 2.000 | 0.771 | 0.636 |
| Square | 2.000 | 1.000 | 0.000 |
| Rectified Square | 1.414 | 0.707 | 0.707 |
| Rectangular Pulse | 2.000 | 2K, K=√(D − D²), D=X/Y | 2D, D=X/Y |
| Triangle Sawtooth | 3.464 | 1.000 | 0.000 |

### Crest Factor Table

*Background:* Crest factor is the ratio of the peak signal amplitude to the RMS value of the signal. It determines the accuracy of AC measurement. If the crest factor is less than 3.0, voltage measurement will not result in error due to dynamic range limitations at full scale. If the crest factor is more than 3.0, it usually indicates an abnormal waveform as seen from the below table.

| Waveform | Crest factor |
|---|---|
| Square wave | 1.0 |
| Sine wave | 1.414 |
| Triangle sawtooth | 1.732 |
| Mixed frequencies | 1.414 ~ 2.0 |
| SCR output 100% ~ 10% | 1.414 ~ 3.0 |
| White noise | 3.0 ~ 4.0 |
| AC Coupled pulse train | >3.0 |
| Spike | >9.0 |

## Cross-references

- [`screens/measurement.md`](../../screens/measurement.md) — the ACV/DCV giant-reading measurement screen described in the "ACV/DCV mode display appears" figure.
- [`screens/range-select.md`](../../screens/range-select.md) — the `Range` softkey bar (`Auto` / `100mV` / `1V` / `10V` / `100V` / `1000V`) backs the range-select screen; the Selection list table backs its range values.
- [`screens/measurement-alt.md`](../../screens/measurement-alt.md) — the DCV Ratio screenshot is an alternate measurement-screen layout with REF/INP secondary readings and a six-softkey row.

## Confidence notes

- Verbatim transcription preserves source typos: "calculate DCV ration" and "activating the DCV Ration" appear as printed (page 35); intended word is "ratio".
- The DMM input-impedance and DCV Ratio wiring figures are rendered as code blocks / figure captions because the originals are line-art schematics on the front-panel terminal photo; terminal labels (SENSE Ω 4W, INPUT V Ω +i+, 200Vpk, 1000V DC / 750V AC, 2Vpk, 500Vpk, 10A, 3A) are partially legible at scan resolution.
- DCV Ratio display softkey "Auto Zero ---" and "Speed 6/s" are read from the small screenshot softkey row on page 35 and may differ slightly from a higher-resolution capture.
- The Rectangular Pulse row of the Voltage Conversion Table contains formula fragments (`K=√(D − D²)`, `D=X/Y`); the square-root radicand and exponent are reproduced as printed (the source shows `D²` with an unmatched parenthesis `D²)`).
- The voltage range table on page 32 lists six ranges (the screen-bar figure shows only five: Auto/100mV/1V/10V/100V/1000V — the 750V AC range is range-table-only, not a separate softkey).
