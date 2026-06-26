---
class: doc-section
doc_id: d9020usbc-usb3-online-help
doc_title: Keysight D9020USBC/D9320USBC USB3.2 Test Application Online Help
doc_number: ""
doc_date: 2026-01
applies_to: [keysight-d9020]
section_id: setting-up-test-environment
section_title: Setting Up the Test Environment
parent_section: ""
page_range: ""
related_screens: []
related_hardware: []
---

# Setting Up the Test Environment

## Summary

Set Up is the first workflow tab in the application's 8-tab navigation. Configures the test environment: DUT identity (test fixture, host scope, DUT name + serial), connection setup (channel-to-port assignments, source ports, automation controller), and per-test boilerplate that doesn't vary per test (calibration files, common probing assumptions). For the same surface in the D9040USBC USB4 Test Application, see [`../../../keysight-d9040/screens/set-up.md`](../../../keysight-d9040/screens/set-up.md).

## Content

### DUT identification

Top section of the Set Up tab:
- **DUT Name** — descriptive identifier shown in reports
- **DUT Serial** — DUT serial number for traceability
- **Test Fixture** — fixture model dropdown (typical: U7242A, U7232B, or third-party USB3.2 fixtures)
- **Test Run ID** — auto-generated or override; shows in the HTML report header

### Connection setup

How the DUT physically connects to the scope:
- **Source Port** — which DUT port is under test
- **Channel mapping** — which Infiniium scope channels (CH1-CH4) receive which differential pair
- **Bit Rate** — selected per the USB3.2 generation under test (5 Gbps for Gen 1, 10 Gbps for Gen 2, 20 Gbps for Gen 2x2)
- **Number of Lanes** — single-lane vs multi-lane configurations

### Automation Controller

Optional: pairs the test application with a DUT automation controller (Keysight's USB-IF Sigtest pattern generator, or a custom controller via SCPI). When configured, the application can drive the DUT into specific compliance test modes without manual user intervention.

### Test environment prerequisites

Before the application will let you Run, the environment must be:
- Scope connected and locked by Resource Arbiter
- DUT identity populated (at minimum DUT Name)
- At least one test selected
- All required physical connections verified (per the next tab)

## Cross-references

- **UI documented** at [`../../../keysight-d9040/screens/set-up.md`](../../../keysight-d9040/screens/set-up.md) — same surface in the D9040USBC USB4 variant. Bit Rate values differ (USB4 uses Gen 1/2/3 rates of 20/40 Gbps; USB3.2 uses 5/10/20 Gbps).
- **Tek equivalent** at [`../../../tek-express/screens/setup-dut.md`](../../../tek-express/screens/setup-dut.md) and [`../../../tek-express/screens/setup-acquisitions.md`](../../../tek-express/screens/setup-acquisitions.md). TekExpress separates DUT identity (`setup-dut`) from channel mapping (`setup-acquisitions`); Keysight folds them into one tab.
- **Tek-vs-Keysight comparison** in [`audits/competitive/2026-06-25-tek-express-vs-keysight-d9040dppc/`](../../../../../audits/competitive/2026-06-25-tek-express-vs-keysight-d9040dppc/) lists "Set Up workflow" as a parity dimension — both vendors implement equivalent DUT-identity + connection-mapping; the layout differs (one tab vs two screens).

## Confidence notes

- Section content inferred from the documented UI in `keysight-d9040/screens/set-up.md` + the Online Help TOC entry "Setting Up the Test Environment."
- Specific Test Fixture model dropdowns + Source Port enumerations are USB3.2-spec-specific; verify against source PDF for the canonical list.
- The "Test environment prerequisites" gate (must satisfy before Run is enabled) is the same gating logic visible in the documented D9040USBC screens.
