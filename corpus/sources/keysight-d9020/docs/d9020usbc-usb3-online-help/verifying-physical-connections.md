---
provenance: observed
class: doc-section
doc_id: d9020usbc-usb3-online-help
doc_title: Keysight D9020USBC/D9320USBC USB3.2 Test Application Online Help
doc_number: ""
doc_date: 2026-01
applies_to: [keysight-d9020]
section_id: verifying-physical-connections
section_title: Verifying Physical Connections
parent_section: ""
page_range: ""
related_screens: []
related_hardware: []
---

# Verifying Physical Connections

## Summary

The Connect tab walks the user through the per-test physical-connection verification. Each selected test displays a schematic or text instruction showing exactly which DUT ports connect to which scope channels via which fixtures and probes. The user can step through each test's required connection topology and confirm by clicking through.

## Content

### Connection schematic

For each test in the selected list, the Connect tab shows:
- DUT-side connection (specific port on the test fixture)
- Cable/probe path (probe model, cable length, de-embedding requirements)
- Scope-side channel assignment

### Verification step

The user is expected to:
1. Make the physical connection on the bench
2. Confirm in the application (typically a "Next" / checkbox button)

Some tests may require multiple connection states across a single test (e.g. Far End test requires the channel routed through the test fixture's far-end path).

### Connection state visualization

The tab visualizes:
- Connections made (green / checkmark)
- Connections pending (gray)
- Connections incorrect (red, with diagnostic detail)

### Connection sequence

Tests may share connections; the application optimizes the sequence to minimize physical reconnection on the bench. The order presented may differ from the order tests appear in the Select Tests tree.

## Cross-references

- **UI** — the Connect tab in `keysight-d9040` is not separately documented in the screens corpus (the screens pass focused on the canonical workflow tabs). The Connect tab is a pure verification step between Select/Configure and Run.
- **Tek equivalent** — TekExpress doesn't have an equivalent "Connect" tab as a distinct step; physical connection verification happens during Setup → Acquisitions (Probe Configuration dialog, [`../../../tek-express/screens/setup-acquisitions-probe-config.md`](../../../tek-express/screens/setup-acquisitions-probe-config.md)) and during pre-run instrument discovery. Keysight's dedicated Connect tab is a UX divergence — pros: explicit per-test connection confirmation; cons: extra tab to navigate.
- **Tek-vs-Keysight audit** at [`audits/competitive/2026-06-25-tek-express-vs-keysight-d9040dppc/`](../../../../../audits/competitive/2026-06-25-tek-express-vs-keysight-d9040dppc/) — the Connect tab is one of the explicit GUI/workflow differences between the platforms.

## Confidence notes

- The Connect tab is described from the framework pattern observed in the D9040USBC corpus; this Online Help's PDF likely shows per-test connection diagrams that aren't transcribed here.
- The exact visualization (color-coding, schematic vs photographic) varies by test; verify against source PDF for canonical UI shape.
- The "connection state" detection relies on scope-side signal validation (lock detection, valid signal amplitude); precise validation criteria are USB3.2-spec-specific.
