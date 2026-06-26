# Keysight D9020USBC/D9320USBC USB3.2 Compliance Test Application — Method of Implementation (MOI)

**Doc ID:** `d9020usbc-usb3-moi` · **Applies to:** `keysight-d9020` · **Software version:** 4.0.0.0 (per cover) · **© Keysight Technologies 2026**

Generated **2026-06-26** by the `document-pdf` skill from `uploads/pdfs/D9020USBC-USB3-Test-Software-MOI-latest.pdf` (gitignored).

The **Method of Implementation (MOI)** is Keysight's procedural / test-by-test reference for running USB3.2 compliance on the D9020USBC + D9320USBC test applications. Each chunk documents a specific test category (5G family, 10G family, LFPS, common preparation steps).

## Sections

| Section | Pages | Chunk |
|---|---|---|
| USB3.2 Test Compliance Application — At a Glance | 3 | [at-a-glance](./at-a-glance.md) |
| Installing the USB3.2 Compliance Test Application | 9–14 | [installing](./installing.md) |
| Preparing to Take Measurements | 15–22 | [preparing-to-take-measurements](./preparing-to-take-measurements.md) |
| Transmitter LFPS Tests | 23–30 | [lfps-tests](./lfps-tests.md) |
| 5G Transmitter SSC Tests | 31–36 | [5g-ssc-tests](./5g-ssc-tests.md) |
| 5G Transmitter Eye Far End (TP4) Tests (USB-IF SigTest CTLE ON) | 37–44 | [5g-tp4-far-end-tests](./5g-tp4-far-end-tests.md) |
| 5G Transmitter Eye Short Channel (TP2) Tests | 45–52 | [5g-tp2-short-channel-tests](./5g-tp2-short-channel-tests.md) |
| 5G BLR Clock Switch Test | 53–54 | [5g-blr-clock-switch](./5g-blr-clock-switch.md) |
| 5G Jitter Transfer Function Test | 55–56 | [5g-jitter-transfer-function](./5g-jitter-transfer-function.md) |
| 10G Skew Measurement for Retimer Test | 57–60 | [10g-skew-measurement](./10g-skew-measurement.md) |
| 10G SCD and LBPS Tests | 61–68 | [10g-scd-and-lbps](./10g-scd-and-lbps.md) |

## Cross-references

- **Companion Online Help** at [`../d9020usbc-usb3-online-help/`](../d9020usbc-usb3-online-help/_index.md) — reference / UI navigation perspective on the same software.
- **Documented UI screens** for the related D9040 family at [`../../../keysight-d9040/screens/`](../../../keysight-d9040/screens/) — the D9020USBC shares the Keysight test-application framework (Resource Arbiter, USB4 Test Application-style tabs); cross-product comparison signal for retrieval.
- **Competitive comparison** at [`audits/competitive/2026-06-25-tek-express-vs-keysight-d9040dppc/`](../../../../../audits/competitive/2026-06-25-tek-express-vs-keysight-d9040dppc/) covers Tek-vs-Keysight at the platform level; the USB3.2 lane covered here is a direct competitor to Tek's USB3 TekExpress variants.

## Confidence notes

- The MOI is a Keysight-authored procedural reference. All content is verbatim where precision matters (test parameters, measurement settings).
- Page-range boundaries reflect where each test category begins / ends in the source PDF.
- This subject also covers the D9320USBC SKU (per the cover) — chunks declare `applies_to: [keysight-d9020]` only; D9320USBC consumers can retrieve via that subject since they share the software per the cover statement.
