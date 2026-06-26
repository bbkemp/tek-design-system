---
class: doc-section
doc_id: d9020usbc-usb3-moi
doc_title: "Keysight D9020USBC/D9320USBC USB3.2 Compliance Test Application — Methods of Implementation"
doc_number: null
doc_date: 2026-01
applies_to: [keysight-d9020]
section_id: 5g-ssc-tests
section_title: 5G Transmitter SSC Tests
parent_section: null
page_range: "31 to 36"
related_screens: []
related_hardware: []
---

# 5G Transmitter SSC Tests

## Summary

Chapter 4 opener and first section — the 5G Spread Spectrum Clocking test family. Covers six sub-tests: Unit Interval, 5G TSSC-Freq-Dev-Trough, 5G TSSC-Freq-Dev-Peak, 5G SSC Modulation Rate, 5G SSC Slew Rate, and 5G SSC df/dt. References the USB 3.2 Spec Tables 6-17 (SSC Parameters) and 6-18 (Transmitter Normative Electrical Parameters). Two test conditions: Clean Clock (Unit Interval test) and SSC (SSC Deviation, Modulation Rate, Slew Rate, df/dt). Procedures share a common scope setup (subtraction of Channel 1 and Channel 3 on Function 1, Real Time mode, 40 GSa/s, 8 M points, 12 GHz bandwidth, 2 ns horizontal scale) and diverge in the post-acquisition measurement step — Unit Interval reads Vmax/Vmin/Vaverage from the measurement trend; SSC tests save the trend to CSV and post-process in a MATLAB script (second-order low-pass filter at 1.98 MHz cutoff, Vtop/Vbase per SSC triangle profile, modulation rate as 1/tcycle, slew rate, df/dt).

## Content

### Chapter intro

This chapter describes the 5G tests that are performed by the USB3.2 Compliance Test Application in more detail; it contains information from (and refers to) the *Universal Serial Bus 3.2 Specification, Revision 1.0*, and it describes how the tests are performed.

Chapter sections:

- 5G Transmitter SSC Tests / 32
- 5G Transmitter Eye Far End (TP4) Tests (USB-IF SigTest) (CTLE ON) Tests / 37
- 5G Transmitter Eye Short Channel (TP2) Tests / 45
- 5G BLR Clock Switch Test / 53
- 5G Jitter Transfer Function Test / 55

### 5G Transmitter SSC Tests

The 5G Transmitter Spread Spectrum Clocking Tests include:

- Unit Interval Test
- 5G TSSC-Freq-Dev-Trough
- 5G TSSC-Freq-Dev-Peak
- 5G SSC Modulation Rate
- 5G SSC Slew Rate
- 5G SSC df/dt

This section provides the Methods of Implementation (MOIs) for 5G Transmitter SSC tests using a Keysight Infiniium oscilloscope, USB 3.0 test fixture, and USB3.2 Compliance Test Application.

**Connection Diagram** — See Appendix 6, "Test Connection".

**Test Reference from the Specification** — Table 6-17 and Table 6-18 of the USB 3.2 Specification, revision 1.0.

#### Table 6-17. SSC Parameters (reproduced as Figure 16)

| Symbol | Description | Min | Max | Units | Note |
|---|---|---|---|---|---|
| t`SSC-MOD-RATE` | Modulation Rate | 30 | 33 | kHz | |
| t`SSC-FREQ-DEVIATION` | SSC deviation | +0/-4000 | +0/-5000 | ppm | 1, 2, 3, 4 |
| | | +0/-2000 | +0/-3000 | | |

Notes:

1. The data rate is modulated from 0 ppm to -5000 ppm of the nominal data rate frequency and scales with data rate.
2. This is measured below 2 MHz only.
3. Receiver compliance testing is done under the maximum spread condition.
4. Alternate limits apply to "radio friendly" clock mode which employs a clock whose center frequency is downshifted by 2000ppm.

#### Table 6-18. Transmitter Normative Electrical Parameters (reproduced as Figure 17)

Key columns (Gen 1 5.0 GT/s, Gen 2 10 GT/s):

| Symbol | Parameter | Gen 1 | Gen 2 | Units | Comments |
|---|---|---|---|---|---|
| UI | Unit Interval | 199.94 (min) / 200.06 (max) — also 200.34 (min) / 200.46 (max) for radio-friendly | 99.97 (min) / 100.03 (max) — also 100.17 (min) / 100.23 (max) for radio-friendly | ps | UI tolerance ±300 ppm; period does not account for SSC induced variations. Radio-friendly mode is downshifted by 2000ppm and used with +0/-3000ppm spread. |
| V`TX-DIFF-PP` | Differential p-p Tx voltage swing | 0.8 (min) / 1.2 (max) | 0.8 (min) / 1.2 (max) | V | Nominal is 1 Vp-p. |
| V`TX-DIFF-PP-LOW` | Low-Power Differential p-p Tx voltage swing | 0.4 (min) / 1.2 (max) | 0.4 (min) / 1.2 (max) | V | Refer to Section 6.7.2. No de-emphasis requirement in this mode. |
| V`TX-DE-RATIO` | Tx de-emphasis | 3.0 (min) / 4.0 (max) | See section 6.7.5.2 | dB | Nominal is 3.5 dB for Gen 1. Gen 2 equalization in section 6.7.5.2. |
| R`TX-DIFF-DC` | DC differential impedance | 72 (min) / 120 (max) | 72 (min) / 120 (max) | Ω | |
| V`TX-RCV-DETECT` | Allowed voltage change during Receiver Detection | 0.6 (max) | 0.6 (max) | V | |
| C`AC-COUPLING` | AC Coupling Capacitor | 75 (min) / 265 (max) | 75 (min) / 265 (max) | nF | All Tx shall be AC coupled. |
| t`CDR_SLEW_MAX` | Maximum slew rate | 10 | Not applicable | ms/s | df/dt spec. |
| SSC`dfdt` | SSC df/dt | 1250 (max) | 1250 (max) | ppm/µs | See note 1. |
| V`TX-CM-IDLE-DELTA` | Transmitter idle common-mode voltage change | +600 (max) / -600 (min) | +600 (max) / -600 (min) | mV | Maximum allowed instantaneous common-mode voltage at TP2 in U2 or U3 not actively transmitting LFPS. |

Note 1: Measured over a 0.5µs interval using CP10. Measurements shall be low pass filtered using a filter with 3 dB cutoff frequency that is 60 times the modulation rate. Filter stopband rejection ≥ second order low-pass of 20 dB per decade. Evaluation of max df/dt is achieved by inspection of the low-pass filtered waveform.

### 5G Unit Interval

**Test Conditions** — Reference Clock: Clean Clock.

**Test Overview:** The purpose of this test is to verify that the SSC of the transmitter complies with the specification.

**Test Procedure:**

1. Set up the stimulus for 2-cycle LFPS ping.
2. Default the scope.
3. Setup Function 1 as subtraction of Channel 1 and Channel 3.
4. Set horizontal scale to 2ns, position at 0.
5. Setup the Acquisition
   - a. Select Sampling Mode as "Real Time"
   - b. Set interpolation to OFF
   - c. Sample rate to 40 GSa/s
   - d. 8M points
   - e. Bandwidth to 12 GHz
6. Set Sweep as AUTO
7. Ping the DUT until CP1 is attained.
8. Setup horizontal scale to 20us, position at 0.
9. Stop the acquisition and save the waveform.
10. Set 'Unit Interval Measurement' to ON.
11. Set 'Measurement Trend' to ON.
12. Measure Vmax of the measurement trend.
13. Measure Vmin of the measurement trend.
14. Measure Vaverage of the measurement trend.
15. Record the measurement result.

**Expected / Observable Results:** The measurement results for Unit Interval must be within the conformance limit as specified in the USB 3.2 specification.

### SSC Deviation Test, SSC Modulation Rate Test, SSC Slew Rate Test, and SSC df/dt Test

**Test Conditions** — Reference Clock: SSC.

**Test Overview:** The purpose of this test is to verify that the SSC of the transmitter complies with the specification.

**Test Procedure:**

1. Set up the stimulus for 2-cycle LFPS ping.
2. Default the scope.
3. Setup Function 1 as subtraction of Channel 1 and Channel 3.
4. Set horizontal scale to 2ns, position at 0.
5. Setup the Acquisition
   - a. Select Sampling Mode as "Real Time"
   - b. Set interpolation to OFF
   - c. Sample rate to 40 GSa/s
   - d. 8M points
   - e. Bandwidth to 12 GHz
6. Set Sweep as AUTO
7. Ping the DUT until CP1 is attained.
8. Setup horizontal scale to 20 us, position at 0.
9. Set 'Unit Interval Measurement' to ON.
10. Set 'Measurement Trend' to ON for function 1.
11. Save the measurement in CSV format.
12. The CSV waveform is processed within a MATLAB script.
    - a. Perform a second-order low pass filter. Cut-off frequency is set as 60 times of the modulation rate, 1.98MHz.
    - b. Measure the Vtop and Vbase for every SSC triangle profile, as shown in *Figure 18*.

*Figure 18: Vtop and Vbase measurements on an SCC triangle profile* — a MATLAB plot of a triangular SSC profile in the 1.0030 — 1.0035 × 10⁻⁴ range, with `VTop` annotated at a peak and `VBase` annotated at a trough.

    - c. Measure the modulation rate, modulation rate is 1/tcycle. tcycle is defined as shown in *Figure 19*.

*Figure 19: Measuring Modulation Rate* — schematic of an SSC triangle profile with the peak labeled `UI +5000ppm`, the baseline labeled `UI`, and the period between two consecutive peaks labeled `tcycle`.

    - d. Measure the Slew Rate of the SSC.
    - e. Measure the df/dt of the SSC

For the algorithm to determine the slew rate, refer to white paper *USB 3.0 CDR Model White Paper*, revision 0.5 available at `www.usb.org`.

13. Record the measurement result.

**Expected / Observable Results:** The measurement results for SSC must be within the conformance limit as specified in the USB 3.2 specification.

## Cross-references

- `appendix-test-connection` — wiring for SSC tests.
- `lfps-tests` — Table 6-29 / 6-30 are the LFPS counterparts of 6-17 / 6-18.
- `5g-tp4-far-end-tests`, `5g-tp2-short-channel-tests` — next 5G test groups.
- `10g-ssc-tests` — the 10G counterpart of this chunk (mirrors the same Table 6-17 / 6-18 references and same Vtop/Vbase MATLAB pipeline at 80 GSa/s instead of 40).

## Confidence notes

- Source uses both "TSSC" and "tSSC" (with subscript) inconsistently in the bulleted test list vs. the spec tables; mirror the source as-printed.
- The Vtop/Vbase MATLAB figure (Figure 18) uses very small Y-axis numbers (1.004 × 10⁻¹⁰ etc.) — the axis ticks at 1.004, 1.0035, 1.003, 1.0025, 1.002, 1.0015, 1.001, 1.0005 are transcribed as printed.
