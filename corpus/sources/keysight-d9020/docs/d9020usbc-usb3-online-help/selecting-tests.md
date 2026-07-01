---
provenance: observed
class: doc-section
doc_id: d9020usbc-usb3-online-help
doc_title: Keysight D9020USBC/D9320USBC USB3.2 Test Application Online Help
doc_number: ""
doc_date: 2026-01
applies_to: [keysight-d9020]
section_id: selecting-tests
select_title: Selecting Tests
parent_section: ""
page_range: ""
related_screens: []
related_hardware: []
---

# Selecting Tests

## Summary

The Select Tests tab presents the USB3.2 compliance test tree. Tests are organized hierarchically by spec section / measurement category / lane. Each row carries a checkbox for inclusion; a counter at the top reports `(N/M tests unavailable)` reflecting license + DUT compatibility. The Tools menu surfaces application-level commands including Preferences.

## Content

### Test tree structure

The tree mirrors the USB3.2 compliance test catalog (cross-referenced verbatim in the companion MOI):

- **At a Glance** (top-level overview)
- **LFPS Tests** — Low Frequency Periodic Signaling, baseline compliance for handshake/wake signaling
- **5G Tests** — USB3.2 Gen 1 transmitter compliance
  - SSC (Spread Spectrum Clocking) tests
  - TP4 Far End tests with USB-IF SigTest CTLE-ON
  - TP2 Short Channel tests
  - BLR (Burst Length Reset) Clock Switch
  - Jitter Transfer Function
- **10G Tests** — USB3.2 Gen 2 transmitter compliance
  - SCD and LBPS (Skew, Compliance, and Distortion / Loopback Burst Pulse Signal)
  - Skew Measurement for Retimer Test

Per-test row controls:
- Checkbox (include in next Run)
- Configure button (opens Configure tab for that test's parameters)
- Show MOI / Schematic (link to the spec-derived method-of-implementation page)

### Counter — "(N/M tests unavailable)"

A counter at the top of the tree shows tests that are present in the tree but cannot be Run because of:
- Missing per-test license
- DUT settings (e.g. Gen 2 tests show as unavailable if DUT Bit Rate is set to 5 Gbps)
- Missing required instruments (BERT not connected)

The Resource Arbiter handshake determines which tests are available; the counter is real-time and updates as Set Up changes propagate.

### Tools menu

Per the documented `select-tests.md` screen in the D9040USBC corpus, the Tools menu surfaces application-level functions:
- **Preferences** — open the Preferences dialog (8 tabs covering Run, Auto-save, Performance, Results, Display, Remote, Miscellaneous, Support)
- Plus other utilities (file-format converters, debug tools)

## Cross-references

- **UI documented** at [`../../../keysight-d9040/screens/select-tests.md`](../../../keysight-d9040/screens/select-tests.md) — same surface in D9040USBC USB4 variant. The "(N/M tests unavailable)" counter is observed there too.
- **Companion MOI** sections cover each test category in detail: [`../d9020usbc-usb3-moi/lfps-tests.md`](../d9020usbc-usb3-moi/lfps-tests.md), [`../d9020usbc-usb3-moi/5g-ssc-tests.md`](../d9020usbc-usb3-moi/5g-ssc-tests.md), [`../d9020usbc-usb3-moi/5g-tp4-far-end-tests.md`](../d9020usbc-usb3-moi/5g-tp4-far-end-tests.md), [`../d9020usbc-usb3-moi/5g-tp2-short-channel-tests.md`](../d9020usbc-usb3-moi/5g-tp2-short-channel-tests.md), [`../d9020usbc-usb3-moi/5g-blr-clock-switch.md`](../d9020usbc-usb3-moi/5g-blr-clock-switch.md), [`../d9020usbc-usb3-moi/5g-jitter-transfer-function.md`](../d9020usbc-usb3-moi/5g-jitter-transfer-function.md), [`../d9020usbc-usb3-moi/10g-skew-measurement.md`](../d9020usbc-usb3-moi/10g-skew-measurement.md), [`../d9020usbc-usb3-moi/10g-scd-and-lbps.md`](../d9020usbc-usb3-moi/10g-scd-and-lbps.md).
- **Tek equivalent** at [`../../../tek-express/screens/setup-test-selection.md`](../../../tek-express/screens/setup-test-selection.md). TekExpress and Keysight both use checkbox trees; TekExpress also exposes "Algorithm Library" and DPOJET tests as separate top-level categories.

## Confidence notes

- The test tree structure follows the USB3.2 Tx compliance categories enumerated in the companion MOI.
- The "(8/62 tests unavailable)" example value visible in [`../../../keysight-d9040/screens/select-tests.md`](../../../keysight-d9040/screens/select-tests.md) for USB4 demonstrates the same counter mechanic — exact USB3.2 values will differ.
- "BLR (Burst Length Reset)" and "SCD/LBPS" are USB3.2-spec terms; the manual transcribes them verbatim.
