---
class: doc-section
doc_id: tek-express-pci-express
doc_title: TekExpress® PCI Express Transmitter Compliance and Validation Software Application Help
doc_number: 077-1762-05
doc_date: 2026-03
applies_to: [tek-express]
section_id: setup-dut-panel
section_title: Setup panel — DUT, Filter setup, Automated DUT control, Multiple-session run
parent_section: ""
page_range: "43-54"
related_screens: [setup-dut, setup-dut-comments, setup-dut-session-browser]
related_hardware: []
---

# Setup panel — DUT, Filter setup, Automated DUT control, Multiple-session run

## Summary

The Setup → DUT panel — first step in the TekExpress PCI Express wizard. Configures device-under-test identity, signal lanes, generation/data rate, DUT control automation (manual or via NI USB 6501 controller), filter setup for de-embedding, and the multi-session run mode for chaining several configurations into one execution.

## Content

### DUT panel — Set DUT settings (pg 43)

Core DUT identification fields, PCIe-spec-specific configuration:
- **DUT ID** — free-text identifier saved to the session and reports
- **PCIe generation** — select the spec version (Gen 1, Gen 2, Gen 3, Gen 4, Gen 5, Gen 6, etc.); drives which tests appear in Test Selection
- **Data rate** — paired with generation
- **Channels** — assignment of scope channels to differential pairs (P/N) per lane
- **Lane selection** — single-lane vs multi-lane (Multiple-session run mode required for cross-lane execution)
- **Acquire mode** — Live (scope acquires now) vs Prerecorded (replay saved `.wfm`/`.h5` files)
- **Comments** — free-text annotations attached to the session (UI documented at `screens/setup-dut-comments.md`)
- **Session browser** — load/save/recall a configured session (documented at `screens/setup-dut-session-browser.md`)

### Filter setup dialog box (pg 49)

The Filter setup dialog applies de-embedding filters to compensate for the test fixture and channel response. PCIe Tx compliance requires reference equalization (per the spec — CTLE, AFE, DFE settings vary by generation). The dialog manages:
- Filter file selection (path to a `.flt` or similar)
- Per-lane filter assignment
- Filter preview (response plot)

### Automated DUT control setup (pg 50)

Configures how the application drives the DUT into compliance test mode without manual intervention. For DUTs that support remote test-mode control (some PCIe controllers/cards expose pattern-generation commands via a sideband interface), this dialog captures the protocol + commands.

### NI USB 6501 DUT Controller Support (pg 53)

Specific path for using a National Instruments USB-6501 digital I/O module as the DUT control interface. Maps logical control lines to USB-6501 ports, defines voltage levels and pulse widths, and saves the controller configuration for reuse.

### Multiple-session run (pg 54)

Configures the application to execute multiple session files in sequence within one run. Common use case: lane sweeps, generation sweeps, or DUT-rev comparison runs. Per-session configuration is preserved; results aggregate into a single report.

## Cross-references

- **Setup DUT UI** documented at [`../../screens/setup-dut.md`](../../screens/setup-dut.md).
- **DUT Comments popup** documented at [`../../screens/setup-dut-comments.md`](../../screens/setup-dut-comments.md).
- **Run/Config Sessions browser** documented at [`../../screens/setup-dut-session-browser.md`](../../screens/setup-dut-session-browser.md).
- **PCIe 6.0 CEM migration to TekFlow** flagged in [`corpus/sources/tek-flow/walkthroughs/customer-feedback-thread.md`](../../../../tek-flow/walkthroughs/customer-feedback-thread.md): PCIe Tx customers will be forced onto TekFlow for Gen 6 + CEM testing. PI command continuity and session file portability between this product and the TekFlow equivalent are on the critical path.
- **NVIDIA Bangalore's** *"Gen4 was late by Tek, we moved to KS"* customer-context from [`../../decks/india-customer-voc-2023-march/empathy-map-nvidia.md`](../../decks/india-customer-voc-2023-march/empathy-map-nvidia.md) — the PCIe generation field on this screen is directly upstream of that competitive risk; release latency on new generations costs accounts.

## Confidence notes

- Page coverage 43-54 per the TOC.
- Filter setup and NI USB 6501 controller are PCIe-specific UI surfaces not in the DDR5 Tx manual (DDR5 uses BIST pattern injection rather than channel de-embedding for some test methods).
- Multi-session run mode is shared across TekExpress variants but is more prominent in PCIe (multi-lane parallel testing is standard).
