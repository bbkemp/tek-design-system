---
provenance: observed
class: doc-section
doc_id: d9020usbc-usb3-moi
doc_title: "Keysight D9020USBC/D9320USBC USB3.2 Compliance Test Application — Methods of Implementation"
doc_number: null
doc_date: 2026-01
applies_to: [keysight-d9020]
section_id: 5g-tp4-far-end-tests
section_title: 5G Transmitter Eye Far End (TP4) Tests (USB-IF SigTest) (CTLE ON) Tests
parent_section: null
page_range: "37 to 44"
related_screens: []
related_hardware: []
---

# 5G Transmitter Eye Far End (TP4) Tests (USB-IF SigTest) (CTLE ON) Tests

## Summary

5G Eye-at-TP4 (Far End) test family run with CTLE ON. Five test sub-results: Random Jitter (RJ), Far End Maximum Deterministic Jitter (DJ), Far End Total Jitter at BER-12, Far End Template Test, and Far End Differential Output Voltage. Two test methods: SDA (Serial Data Analysis with EZJIT+ for an independent RJ reading using CTLE source, 2nd-order PLL clock recovery at 5 Gbps / 4.9 MHz loop BW / 0.707 damping, # of poles = 2, Pole 1 = 1.95 GHz, Pole 2 = 5.0 GHz, Zero = 650 MHz, DC Gain = 0.667, RJ Method Spectral Only / Pattern Length Periodic Auto) and USB-IF SigTest (uses CP0 waveform, InfiniiSim 5G transfer function, and the SigTest `USB_3_5gb_CP0_RjIN` template — with the RJ value set as input — to read DJ, TJ, and Eye Height). The TP4 eye mask comes from USB 3.2 Spec Table 6-20 (Eye Height ≥ 100 mV for 5GT/s; DJ ≤ 0.43 UI; RJ ≤ 0.23 UI; TJ ≤ 0.66 UI; all post-CTLE).

## Content

The 5G Transmitter Eye Far End (TP4) Tests include:

- 5G Random Jitter (CTLE ON) Test
- 5G Far End Maximum Deterministic Jitter (CTLE ON) Test
- 5G Far End Total Jitter at BER-12 Test (CTLE ON) Test
- 5G Far End Template Test (CTLE ON) Test
- 5G Far End Differential Output Voltage (CTLE ON) Test

This section provides the Methods of Implementation (MOIs) for 5G Transmitter Eye Far End (TP4) tests using a Keysight Infiniium oscilloscope, USB 3.0 test fixture, and USB3.2 Compliance Test Application.

**Connection Diagram** — See Appendix 6, "Test Connection".

**Test Reference from the Specification** — Table 6-16 and Table 6-20 (ECN for SSP System Jitter Budget) of the USB 3.2 Specification, revision 1.0.

### Table 6-16. Informative Jitter Budgeting at the Silicon Pads (reproduced as Figure 20)

| Jitter Contribution (ps) | Gen 1 Rj | Gen 1 Dj | Gen 1 Tj at 10⁻¹² | Gen 2 Rj | Gen 2 Dj | Gen 2 Tj at 10⁻¹² |
|---|---|---|---|---|---|---|
| Tx | 2.42 | 41 | 75 | 1.00 | 17 | 31.1 |
| Media | 2.13 | 45 | 75 | 0.00 | 36 | 36.0 |
| Rx | 2.42 | 57 | 91 | 1.00 | 27.1 | 41.2 |
| Total | 4.03 | 143 | 200 | 1.41 | 80.1 | 100 |

Notes:

1. Rj is the sigma value assuming a Gaussian distribution.
2. Rj Total is computed as the Root Sum Square of the individual Rj components.
3. Dj budget is using the Dual Dirac method.
4. Tj at a 10⁻¹² BER is calculated as 14.068 * Rj + Dj.
5. The media budget includes the cancellation of ISI from the appropriate Rx equalization function.
6. Tx is measured after application of the JTF.
7. In this table, Tx jitter is defined at TP1, Rx jitter is defined at TP4, and media jitter is defined from TP1 to TP4.

### Table 6-20. Normative Transmitter Eye Mask at Test Point TP4 (reproduced as Figure 21)

| Signal Characteristic | 5GT/s Min | 5GT/s Max | 10GT/s Min | 10GT/s Max | Units | Note |
|---|---|---|---|---|---|---|
| Eye Height | 100 | 1200 | 70 | 1200 | mV | 2, 3, 4 |
| Dj | | 0.43 | | 0.530 | UI | 1, 2, 3 |
| Rj | | 0.23 | | 0.141 | UI | 1, 5, 6 |
| Tj | | 0.66 | | 0.671 | UI | 1, 2, 3 |

Notes:

1. Measured over 10⁶ consecutive UI and extrapolated to 10⁻¹² BER.
2. Measured after receiver equalization function.
3. Measured at end of reference channel and cables at TP4 in Figure 6-20.
4. The eye height is to be measured at the minimum opening over the range from the center of the eye ± 0.05 UI.
5. The Rj specification is calculated as 14.069 times the RMS random jitter for 10⁻¹² BER.
6. Measured at the output of the compliance breakout board without embedding the compliance cable and load board.

*Figure 22: Gen 1 Eye Mask for 5G Transmitter Far End Eye (TP1) tests* — eye diagram with minimum eye width and minimum eye height markers; ±300 mV differential voltage on Y, 0 - 200 ps on X. (Source figure caption reads "TP1" but the table the figure illustrates is TP4 in the spec — preserved as printed.)

### 5G Random Jitter Test

**Test Overview:** The purpose of this test is to verify that the Random Jitter of the transmitter complies with the specification.

**Test Procedure:**

1. Set up the stimulus for 2-cycle LFPS ping.
2. Default the scope.
3. Setup Function 1 as subtraction of Channel 1 and Channel 3.
4. Set horizontal scale to 2 ns, position at 0.
5. Ping the DUT until CP1 is attained.
6. Setup the Acquisition
   - a. Select Sampling Mode as "Real Time"
   - b. Set interpolation to OFF
   - c. Sample rate to 40 GSa/s
   - d. 8M points
   - e. Bandwidth to 12 GHz
7. Set Sweep as AUTO.
8. Setup horizontal scale to 20 us, position at 0.
9. Stop the acquisition and save the waveform in binary format.
10. Launch SigTest tool.
11. Load the waveform file. Select the options for Technology and Template File as shown in *Figure 23*.
    - a. Test Mode set to 'CEM'
    - b. Technology set to 'USB_3_5gb'
    - c. Template File set to 'USB_3_5Gb_CP1'

*Figure 23: SigTest tool settings for measuring RJ* — Signal Test 3.2.11 with `Data Type Differential`, `Test Mode CEM`, `Data File ...IMON_APPDATA\Project\NoInfiniiSimFUNC1CP1.bin`, Technology `usb_3_5gb`, Template File `USB_3_5Gb_CP1`, Sample Interval `25.000 ps`, Number of Unit Intervals In File `1000000`.

12. Record the measurement result for RJ.

*Figure 24: SigTest tool report for RJ measurement* — `Full Test Results — NoInfiniiSimFUNC1CP1.bin` showing `Sigtest Full Test Result Fail!`. Visible fields include `Worst Total Eye Violations 3584302 (FAIL)`, `Data Rate (GB/s) 4.98819`, `Mean Unit Interval (ps) 200.4734944`, `Min Time Between Crossovers (ps) 196.01707`, **JITTER STATS:** `Tj @ E-12 35.03101`, `Dj_dd 6.40165`, **`RJ (RMS) 2.03623 (PASS, highlighted)`**, `Max Peak to Peak Jitter (ps) 28.20553`, **COMPOSIT EYE STATS:** `Eye Height (mV) 100.00000`, `Location within Eye (UI) 0.50000`, **TRANSITION EYE STATS:** `Min Eye Height (mV) 1399.33582`, `Min Voltage -0.77210`, `Max Voltage 0.77538`, `Min Top Margin 0.65185`, `Min Bottom Margin -0.64749`, `Worst Number Violation 3584302`, **NON TRANSITION EYE STATS:** `Min Eye Height (mV) 100.00000`, `Min Voltage -0.04519`, `Max Voltage 0.05403`, `Min Top Margin 0.00000`, `Min Bottom Margin 0.00000`, `Worst Number Violation 0`.

**Expected / Observable Results:** The measurement results for Random Jitter must be within the conformance limit as specified in the USB 3.2 specification.

#### Alternate Test Method — SDA

**Test Condition** — Test Method: SDA.

**Test Procedure:**

1. Set up the stimulus for 2-cycle LFPS ping.
2. Default the scope.
3. Setup Function 1 as subtraction of Channel 1 and Channel 3.
4. Set horizontal scale to 2ns, position at 0.
5. Ping the DUT until CP1 is attained.
6. Setup the Acquisition
   - a. Select Sampling Mode as "Real Time"
   - b. Set interpolation to OFF
   - c. Sample rate to 40 GSa/s
   - d. 8M points
   - e. Bandwidth to 12 GHz
7. Set Sweep as AUTO
8. Setup horizontal scale to 20us, position at 0.
9. Stop the acquisition and save the waveform.
10. Setup CTLE:
    - a. # of Poles: 2
    - b. Pole 1 Frequency: 1.95 GHz
    - c. Pole 2 Frequency: 5.0 GHz
    - d. Zero Frequency: 650 MHz
    - e. DC Gain: 0.667
11. Setup Clock Recovery: 2nd order PLL, data rate of 5 Gbps, loop bandwidth of 4.9 MHz, damping factor of 0.707
12. Setup EZJIT Complete:
    - a. Set CTLE as source
    - b. Enable Jitter Mode on EZJIT+
    - c. BER Level: 1E-12
    - d. Measurement: TIE (Phase)
    - e. Edges: Both
    - f. RJ Bandwidth: Narrow
    - g. RJ Method: Spectral Only
    - h. Pattern Length: Periodic, Auto
13. Obtain RJ reading.

**Expected / Observable Results:** The measurement results for Random Jitter must be within the conformance limit as specified in the USB 3.2 specification.

### 5G Far End Maximum Deterministic Jitter, 5G Far End Total Jitter At BER-12, 5G Far End Template Test, and 5G Far End Differential Output Voltage Tests

**Test Overview:** The purpose of this test is to verify that the Far End Maximum Deterministic Jitter, Far End Total Jitter At BER-12, Far End Template Test, and Far End Differential Output Voltage of the transmitter complies with the specification.

**Test Condition** — Test Method: USB-IF SigTest.

**Test Procedure:**

1. Set up the stimulus for 2-cycle LFPS ping.
2. Default the scope.
3. Setup Function 1 as subtraction of Channel 1 and Channel 3.
4. Set horizontal scale to 2ns, position at 0.
5. Ping the DUT until CP0 is attained.
6. Setup the Acquisition
   - a. Select Sampling Mode as "Real Time"
   - b. Set interpolation to OFF
   - c. Sample rate to 40 GSa/s
   - d. 8M points
   - e. Bandwidth to 12 GHz
7. Setup InfiniiSim. See Appendix 6, "InfiniiSim Setup for 5G" for settings.
8. Set Sweep as AUTO.
9. Setup horizontal scale to 20us, position at 0.
10. Stop the acquisition and save the waveform in binary format.
11. Launch SigTest tool.
12. Load the waveform file. Select the options for Technology and Template File as shown in *Figure 25*.
    - a. Test Mode set to 'CEM'
    - b. Technology set to 'USB_3_5gb'
    - c. Template File set to 'USB_3_5Gb_CP0_RjIN'
    - d. Set Random Jitter

*Figure 25: SigTest tool settings for measuring DJ, TJ and Eye Height* — Signal Test 3.2.11 with template `USB_3_5Gb_CP0_RjIN` selected. A secondary `Rj Select…` dialog overlays with `Compute Rj` (unselected) and `Set Rj` (selected) at `Rj Value 2.451.72 ps` and `OK / Cancel` buttons.

13. Record the measurement result for DJ, TJ and Eye Height.

*Figure 26: SigTest tool report for DJ, TJ and Eye Height measurement* — `Sigtest Full Test Result Pass!`. Key visible fields: `Worst Total Eye Violations 0 (PASS)`, `Data Rate (GB/s) 4.98825`, `Mean Unit Interval (ps) 200.4710784`, `Min Time Between Crossovers (ps) 189.91493`, **JITTER STATS:** `Min Eye Width (ps) 134.01725`, `Tj @ E-12 55.98275`, **`Dj_dd 38.56575 (PASS)`**, `RJ (RMS) 1.95000`, `Max Peak to Peak Jitter (ps) 65.85605`, **COMPOSIT EYE STATS:** `Eye Height (mV) 284.19446`, `Location within Eye (UI) 0.50000`, **TRANSITION EYE STATS:** `Min Eye Height (mV) 542.69110`, `Min Voltage -0.37690`, `Max Voltage 0.33839`, `Min Top Margin 0.22822`, `Min Bottom Margin -0.21447`, `Worst Number Violation 0`, **NON TRANSITION EYE STATS:** `Min Eye Height (mV) 284.19446`, `Min Voltage -0.31341`, `Max Voltage 0.32588`, `Min Top Margin 0.08137`, `Min Bottom Margin -0.10282`, `Worst Number Violation 0`.

**Expected / Observable Results:** The measurement results must be within the conformance limit as specified in the USB 3.2 specification.

## Cross-references

- `appendix-test-connection` — wiring.
- `appendix-compliance-patterns` — CP0, CP1 patterns are referenced extensively here.
- `appendix-infiniisim-setup` — `InfiniiSim Setup for 5G` is referenced in step 7.
- `5g-ssc-tests` — preceding 5G group; UI / SSC results feed into the budget.
- `5g-tp2-short-channel-tests` — sibling Short Channel (TP2) family; same SigTest workflow, different reference channel.
- `10g-tp4-far-end-tests` — 10G counterpart to this chunk.

## Confidence notes

- Figure 22 caption reads "Gen 1 Eye Mask for 5G Transmitter Far End Eye (TP1) tests" while Table 6-20 (the data the figure paraphrases) is the TP4 eye mask. Preserved as printed — likely a caption typo in the source.
- Figure 25 shows `Rj Value 2.451.72 ps` (two periods); literal transcription, may be `2.45172` displayed as PDF rendering artifact.
- Figure 24 result is labeled `Fail!` overall despite individual RJ (RMS) showing PASS — the failure is the Worst Total Eye Violations 3584302 count, which is independent of the RJ-only purpose of this chunk's procedure.
