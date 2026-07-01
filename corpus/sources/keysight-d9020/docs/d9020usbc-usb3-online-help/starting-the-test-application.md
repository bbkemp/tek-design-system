---
provenance: observed
class: doc-section
doc_id: d9020usbc-usb3-online-help
doc_title: Keysight D9020USBC/D9320USBC USB3.2 Test Application Online Help
doc_number: ""
doc_date: 2026-01
applies_to: [keysight-d9020]
section_id: starting-the-test-application
section_title: Starting the D9020USBC/D9320USBC USB3.2 Test Application
parent_section: ""
page_range: ""
related_screens: []
related_hardware: []
---

# Starting the D9020USBC/D9320USBC USB3.2 Test Application

## Summary

Launching the Keysight USB3.2 Test Application from the Infiniium oscilloscope. Application launch happens through the scope's **Analyze ▶ Automated Test Apps ▶ D9020USBC USB3.2 Compliance Test** menu (the path mirrors the D9040USBC USB4 Test Application launch documented in `keysight-d9040/screens/`). On first launch, the application validates license activation and initializes the test framework.

## Content

### Launch from Infiniium

The application is licensed software that lives in the Infiniium scope's automation framework. Launch path:
1. From the scope's menu bar, **Analyze ▶ Automated Test Apps**
2. Select the **D9020USBC USB3.2 Compliance Test** entry
3. The application initializes and the title bar reads `D9020USBC USB3.2 Compliance Test`

### License validation

On launch, the application validates the D9020USBC (or D9320USBC) license. Without a valid license:
- Tests appear in the Select Tests tree with status indicators (often a count like "N/M tests unavailable" in the status bar)
- Some tests can be Configure-d but not Run
- The Resource Arbiter still discovers the scope and fixtures correctly; license is a per-test gate

### Framework initialization

After the license check, the application initializes:
- Test framework subsystem
- Resource Arbiter handshake (verifies which compliance applications are licensed + which instruments are reachable)
- Default project (or last-used project if "Open last project on launch" preference is set)

The application then presents its main UI surface — the 8-tab navigation (Set Up, Select Tests, Configure, Connect, Run, Automate, Results, HTML Report) plus title-bar status (project name + license state).

## Cross-references

- **The Resource Arbiter** that the test application handshakes with is documented at [`../../../keysight-d9040/screens/resource-arbiter-console.md`](../../../keysight-d9040/screens/resource-arbiter-console.md) (CLI startup) + [`../../../keysight-d9040/screens/resource-arbiter.md`](../../../keysight-d9040/screens/resource-arbiter.md) (browser UI). The Arbiter discovers + locks the scope before the test application runs.
- **The Tek-equivalent launch surface** is documented at [`../../../tek-express/docs/tek-express-app-emulator/starting-application.md`](../../../tek-express/docs/tek-express-app-emulator/starting-application.md) and at [`../../../tek-express/screens/options-dropdown.md`](../../../tek-express/screens/options-dropdown.md). The competitive comparison [`audits/competitive/2026-06-25-tek-express-vs-keysight-d9040dppc/`](../../../../../audits/competitive/2026-06-25-tek-express-vs-keysight-d9040dppc/) lists "Analyze → TekExpress DisplayPort 2.1" vs "Analyze → Automated Test Apps → D9040DPPC DisplayPort Test App" as the per-vendor launch paths — Keysight nests apps under the Automated Test Apps submenu; Tek lists each TekExpress variant directly.

## Confidence notes

- The launch path mirrors what's documented for the D9040USBC USB4 application in [`../../../keysight-d9040/screens/set-up.md`](../../../keysight-d9040/screens/set-up.md) — the D9040 screens show the post-launch state of the same framework with USB4 test names; D9020USBC presents USB3.2 test names in the same surfaces.
- Specific license error messages and resolution steps are surfaced in the Online Help; this chunk doesn't transcribe them verbatim.
- The "8 tabs" framework count (Set Up, Select Tests, Configure, Connect, Run, Automate, Results, HTML Report) is confirmed from the `keysight-d9040` screens corpus.
