---
class: doc-section
doc_id: d9020usbc-usb3-moi
doc_title: "Keysight D9020USBC/D9320USBC USB3.2 Compliance Test Application — Methods of Implementation"
doc_number: null
doc_date: 2026-01
applies_to: [keysight-d9020]
section_id: 5g-jitter-transfer-function
section_title: 5G Jitter Transfer Function Test
parent_section: null
page_range: "55 to 56"
related_screens: []
related_hardware: []
---

# 5G Jitter Transfer Function Test

## Summary

5G JTF (Jitter Transfer Function) test, available only for 5G data rate in BLR retimer mode. Verifies the ratio of Pj using a direct connection between the oscilloscope and JBERT pattern generator. Spec reference is USB 3.2 Spec Appendix E.5 Table E-3 (Bit-Level Re-timer Jitter Transfer Function Requirements) — Jitter Gain ≤ 0.1 dB for f < 500 kHz, ≤ 0.0 dB for f > 500 kHz, JSF 3 dB frequency ≤ 2 MHz with overall JTF expected to meet a -20 dB/decade slope above the JSF 3 dB frequency. Requires 200 M memory depth on the scope.

## Content

The 5G Jitter Transfer Function Test includes:

- 5G JTF

This section provides the Methods of Implementation (MOIs) for 5G Jitter Transfer Function Test using a Keysight Infiniium oscilloscope, USB 3.0 test fixture, and USB3.2 Compliance Test Application.

**Connection Diagram** — See Appendix 6, "Test Connection".

**Test Reference from the Specification** — USB 3.2 Specification, Rev 1.0, Appendix E.5, Table E-3.

### Table E-3. Bit-Level Re-timer Jitter Transfer Function Requirements (reproduced as Figure 35)

| Term | Gen 1x1 | Notes |
|---|---|---|
| Jitter Gain for f<500kHz | 0.1dB (max) | Normative requirement. |
| Jitter Gain for f>500kHz | 0.0dB (max) | Normative requirement. |
| JSF 3dB frequency | 2MHz (max) | Overall JTF is expected to meet a -20 dB/decade slope above the JSF 3 dB frequency. |

*Figure 36: Jitter Transfer Illustration (Figure E-16, USB 3.2 Specification Revision 1.0)* — Jitter Gain (dB) on Y vs. frequency (MHz) on X, with the gain ≈ P₀ from DC to 0.5 MHz, rolling off through `f_3dB,JSF` and continuing past `f_3dB,Rx`.

### Test Conditions

This test is only available for **5G** data rate and **BLR** retimer mode.

> **NOTE:** Recommended memory depth for the Jitter Transfer Function (JTF) test is 200M points. If the current memory depth is insufficient, users can upgrade it by selecting the appropriate memory upgrade option listed in the oscilloscope data sheet.

**Test Overview:** The purpose of this test is to verify ratio of Pj.

**Test Procedure:**

1. Set up M8020A
2. Set the scope to default setting
3. Setup Function 1 as subtraction of Channel 1 and Channel 3.
4. Set horizontal scale to 50 µs, position at 0 µs.
5. Setup the Acquisition
6. Run the test, the following message prompt appears, JBERT will pre-load with a default sequence.

*Figure (in-test prompt screenshot)* — `USB3.1 Test Application -- USB3.1 ITF Test`, `Test: 5G JTF` heading. Same eight-tab workflow row as before; Run tab is active. **Sequencer** group with `Run tests Once`; **Permutations** with `Skip completed`, `Show Status`; **Event** with `Detect events`; **Store Mode** `During run, store details for Worst trials (up to 100)`; **Email** field. Messages panel shows entries like `2019-05-23 04:05:33:675 PM Project Saved`, `Run Started`, `Append or Replace?`, `Info`. An orange prompt: **`Connect Jbert directly to Scope, then setup Jbert sequence`** with `OK` button. Status bar: `Unsaved Changes · 1 Test · Connection: Component BLR test connection · Running · Permutation: · Respond to Prompt`.

7. Measurements are made with direct connection between scope and JBERT
8. Click "OK" to continue with the test. The test will sweep across different frequencies to read the jitter measurement using EZJIT plus.

**Expected / Observable Results:** The measurement results for 5G Jitter Transfer Function Test must be within the conformance limit as specified in the USB 3.2 specification.

## Cross-references

- `5g-blr-clock-switch` — sibling BLR-mode-only 5G test using the same M8020A + JBERT bench setup.
- Cross-doc: `d9020usbc-usb3-online-help` — the BLR-Mode prep is in the Online Help.

## Confidence notes

- The screenshot window title reads `USB3.1 Test Application` (same artifact as in `5g-blr-clock-switch`).
- Spec figure caption is `f_3dB,JSF` and `f_3dB,Rx` — transcribed verbatim.
