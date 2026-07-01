---
provenance: observed
class: doc-section
doc_id: d9020usbc-usb3-online-help
doc_title: Keysight D9020USBC/D9320USBC USB3.2 Test Application Online Help
doc_number: ""
doc_date: 2026-01
applies_to: [keysight-d9020]
section_id: at-a-glance
section_title: Keysight D9020USBC/D9320USBC USB3.2 Automated Testing — At a Glance
parent_section: ""
page_range: "3-5"
related_screens: []
related_hardware: []
---

# Keysight D9020USBC/D9320USBC USB3.2 Automated Testing — At a Glance

## Summary

Top-of-help overview of the Keysight USB3.2 Test Application. Frames the application as a framework for using Keysight Infiniium oscilloscopes to perform USB3.2 compliance testing — the workflow is selecting tests, configuring them, making the physical scope-to-DUT connections, running the test suite, and evaluating results. The Online Help covers the UI navigation; the **Method of Implementation (MOI)** at [`../d9020usbc-usb3-moi/`](../d9020usbc-usb3-moi/_index.md) covers the procedural test-by-test detail.

## Content

### Overview (verbatim)

> The Keysight D9020USBC/D9320USBC USB3.2 Test Application provides a framework for using Keysight Infiniium oscilloscopes to perform compliance testing. The test application guides through the process of selecting and configuring tests, making oscilloscope connections, running tests, and evaluating the test results.

### Workflow

The workflow this application supports:

1. **Start** the Test Application (from the Infiniium scope's Analyze menu)
2. **Create or Open** a Test Project (analogous to a TekExpress "session" — persists DUT identity, selected tests, configuration, and results)
3. **Set Up** the test environment (Infiniium scope channel mapping, fixture connections, DUT identity)
4. **Select** the tests to run (filtered by the USB3.2 spec generation)
5. **Configure** per-test parameters and limits
6. **Verify** physical connections to confirm probe-to-DUT setup matches the test requirements
7. **Run** the selected tests
8. **View** results in-app
9. **View** the HTML report
10. **Exit** when complete

### See Also (verbatim)

> For information on implementing procedures to run one or more tests, refer to the Keysight D9020USBC/D9320USBC USB3.2 Compliance Test Application Methods of Implementation document.

## Cross-references

- **Companion MOI** at [`../d9020usbc-usb3-moi/_index.md`](../d9020usbc-usb3-moi/_index.md) — covers the per-test procedural detail (LFPS, 5G SSC/TP4/TP2/BLR/Jitter, 10G Skew/SCD-LBPS) at depth. This Online Help and the MOI are explicitly paired by the manual itself.
- **Sibling Keysight framework UI** at [`../../../keysight-d9040/screens/`](../../../keysight-d9040/screens/) — 11 documented UI screens of the D9040USBC USB4 Test Application share the framework documented here (Set Up, Select Tests, Configure, Connect, Run, Automate, Results, HTML Report, Preferences, plus Resource Arbiter Console and Resource Arbiter). USB3.2-specific tests appear in Select Tests at run time; everything else mirrors what's documented in the d9040 screens.

## Confidence notes

- Page coverage 3-5 per the visible TOC + content peek. The "At a Glance" topic is short (Overview paragraph + See-Also link).
- The Online Help and the MOI are explicit companions per the manual's own cross-reference — this confirms the corpus's MOI / Online Help split.
- The Infiniium oscilloscope dependency is the only hardware-platform claim made up-front in the help; physical Infiniium model specifics (MXR-Series, EXR-Series, others) are implied but not enumerated on this page.
