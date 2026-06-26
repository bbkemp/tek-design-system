---
class: doc-section
doc_id: d9020usbc-usb3-moi
doc_title: "Keysight D9020USBC/D9320USBC USB3.2 Compliance Test Application — Methods of Implementation"
doc_number: null
doc_date: 2026-01
applies_to: [keysight-d9020]
section_id: 5g-blr-clock-switch
section_title: 5G BLR Clock Switch Test
parent_section: null
page_range: "53 to 54"
related_screens: []
related_hardware: []
---

# 5G BLR Clock Switch Test

## Summary

5G SSC Clock Switch df/dt test for Bit-Level Retimer (BLR) mode only. Verifies measured SSC deviation lies within the conformance limits of USB 3.2 Spec Table 6-18 (specifically the SSC df/dt row, 1250 ppm/µs max, Note 1 — measured over 0.5µs interval using CP10 with a 60×modulation-rate low-pass filter). Procedure relies on an M8020A pattern generator providing the clock-switch stimulus, with channel 4 used to detect the clock-switch event; the application captures the waveform and processes it via a MATLAB script after the operator clicks OK on the in-app prompt.

## Content

The 5G BLR Clock Switch Test includes:

- 5G SSC Clock Switch df/dt

This section provides the Methods of Implementation (MOIs) for Clock Switch test using a Keysight Infiniium oscilloscope, USB 3.0 test fixture, and USB3.2 Compliance Test Application.

**Connection Diagram** — See Appendix 6, "Test Connection".

**Test Reference from the Specification** — USB 3.2 Specification, Rev 1.0, Section 6.7.1, Table 6-18.

### Reference to Table 6-18 (highlighted rows: SSC df/dt and Note 1)

The SSC df/dt row of Table 6-18 carries `1250 (max)` ppm/µs for Gen 2 only (Gen 1 is "Not applicable") with Note 1: "Measured over a 0.5µs interval using CP10. The measurements shall be low pass filtered using a filter with 3 dB cutoff frequency that is 60 times the modulation rate. The filter stopband rejection shall be greater or equal to a second order low-pass of 20 dB per decade. Evaluation of the maximum df/dt is achieved by inspection of the low-pass filtered waveform."

(The full Table 6-18 is reproduced verbatim in `5g-ssc-tests`; here only the highlighted SSC df/dt row and Note 1 are the operative inputs.)

### Test Conditions

This test is applicable to only **5G** data rate and **BLR** retimer mode.

**Test Overview:** The purpose of this test is to verify that the measured SSC deviation is within the conformance limits specified in Table 6-18 of the USB 3.2 Specification.

> **NOTE:** Before running the test, please follow the steps mentioned in **BLR Mode - System Configuration** section in the Online Help.
>
> Online Help > Setting Up the Test Environment page > Setting Up Test Information page > BLR Mode - System Configuration section.

**Test Procedure:**

1. Set up M8020A
2. Set the scope to default setting
3. Setup Function 1 as subtraction of Channel 1 and Channel 3
4. Set horizontal scale to 50 µs, positioned at -50 µs
5. Setup the acquisition
6. Setup triggers on channel 4 to detect clock switch event
7. Verify that clock switch event is being captured before clicking **OK** to the prompt. User can load a customized JBERT sequence for the DUT during this prompt.

*Figure 34 (referenced as the in-test prompt screenshot)* — captures the USB3.1/3.2 Test Application window mid-run with `Test: 5G SSC df/dt` selected. Visible UI:

- **Window title:** `USB3.1 Test Application -- USB3.1 ITF Test`.
- **Menu bar:** `File · View · Tools · Help`.
- **Workflow tabs:** `Set Up · Select Tests · Configure · Connect · Run · Automate · Results · HTML Report` (Run is active).
- Body: `Test: 5G SSC df/dt` heading, Run/`Pause` controls, **Sequencer** group with `Run tests Once` dropdown, **Permutations** section with `Skip completed` and `Show Status`, **Event** section with `Detect events`, **Store Mode** with `During run, store details for Worst` (up to 100), **Email** field.
- **Messages panel:** rows reading `2019-05-23 04:16:19:041 PM Append or Replace?`, `2019-05-23 04:16:26:373 PM Connection Changing`, `2019-05-23 04:16:35:089 PM Connection Changed`, `2019-05-23 04:17:29:009 PM Info`.
- An orange-bordered prompt box reading **`Configure Jbert to setup DUT to compliance mode. Then Power cycle the DUT follow by restart the sequence`** with an **OK** button.
- **Status bar:** `Unsaved Changes · 1 Test · Connection: Near End Transmitter Eye · Running · Permutation: · Respond to Prompt`.

8. Click **OK** to proceed with the clock switch test, the application will capture waveform and process by Matlab script.

**Expected / Observable Results:** The measurement results for 5G SSC Clock Switch df/dt test must be within the conformance limit as specified in the USB 3.2 specification.

## Cross-references

- `5g-ssc-tests` — Table 6-18 in full; this chunk only excerpts the SSC df/dt row.
- `5g-jitter-transfer-function` — the sibling BLR-mode-only 5G test, runs in the same M8020A + JBERT bench setup.
- Cross-doc: `d9020usbc-usb3-online-help` — `Setting Up the Test Environment > Setting Up Test Information > BLR Mode - System Configuration` is required prep, lives in the Online Help.

## Confidence notes

- The in-test screenshot (Figure 34 in the source) labels the window as `USB3.1 Test Application` while the cover of this MOI is `USB3.2 Compliance Test Application`. Likely an older capture re-used in the 4.0.0.0 manual. Preserved as printed.
