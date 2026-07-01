---
provenance: observed
class: doc-section
doc_id: tek-express-pci-express
doc_title: TekExpress® PCI Express Transmitter Compliance and Validation Software Application Help
doc_number: 077-1762-05
doc_date: 2026-03
applies_to: [tek-express]
section_id: saving-recalling-test-setup
section_title: Saving and recalling test setup
parent_section: ""
page_range: "83-92"
related_screens: [setup-dut-session-browser]
related_hardware: []
---

# Saving and recalling test setup

## Summary

The TekExpress PCI Express application persists a configured test setup as a session file. Saved sessions can be reloaded, executed as pre-run configurations, or saved under a new name. This save/recall workflow is the **dollar-value mechanic** for TekExpress per Subhasis Bera's 2026-06-23 framing — *"customer pays 30 to $50,000 to ensure that their half $1,000,000 setup is correctly configured through the wizard and they save the wizard and keep running the test every time they want."*

## Content

### Overview (pg 83)

A session file captures:
- DUT panel state (ID, generation, channel mapping, comments)
- Test Selection (which tests are selected, per-test Configure values, Limits Editor values)
- Acquisitions configuration (acquire mode, sources, save options)
- Configuration settings (CTLE, scope-noise compensation state)
- Preferences (run behavior, email notifications)

Sessions do **not** capture per-run results — results live in the report artifact, not the session.

### Save the configured test setup (pg 84)

`File ▶ Save` (or Ctrl+S) — writes the session file to disk at the configured session-folder path. Default filename uses the DUT ID + timestamp; user can override.

### Load a saved test setup (pg 85)

`File ▶ Open` or via the **Run/Config Sessions** browser dialog accessible from the DUT panel (documented at `screens/setup-dut-session-browser.md`). Loading replaces the current Setup configuration entirely; un-saved changes are prompted for confirmation.

### Perform a test using pre-run session files (pg 87)

Pre-run files are session snapshots taken at the moment of a previous run. Loading a pre-run session restores the application to the exact state used for that run — useful for rerun-with-comparison validation. The Multi-session run feature (DUT panel) accepts a list of pre-run files to execute in sequence.

### Save the test setup with a different name (pg 92)

`File ▶ Save As` — writes the session to a new file without changing the original. Used for derivative configurations (e.g. start from a Gen 4 session and tweak it for a Gen 5 derivative).

## Cross-references

- **UI documented**: [`../../screens/setup-dut-session-browser.md`](../../screens/setup-dut-session-browser.md) is the canonical session-browser screen.
- **Persona context**: the [persona model](../../walkthroughs/personas-and-jobs-to-be-done.md) names the save/replay loop as **Guru Gus's primary value creation** — Gus configures, saves, then Pete (or Midway Max) replays the saved wizards. This document's save/load surface is the literal load-bearing UI for that handoff.
- **Customer ask from STM France 2021**: *"Session or Saving the configurations to customize to test scenarios like My voltage 1, my voltage 2"* (see [`stm-france-tekflow-presentation/stm-customer-feedback.md`](../../../../tek-flow/decks/stm-france-tekflow-presentation/stm-customer-feedback.md)). The Save-As-with-different-name flow on page 92 directly answers this customer request.
- **TekFlow migration concern**: PCIe customers will be forced onto TekFlow at Gen 6 CEM (per [`customer-feedback-thread.md`](../../../../tek-flow/walkthroughs/customer-feedback-thread.md)); session file portability between this product and the TekFlow equivalent is a critical-path migration concern.

## Confidence notes

- Page coverage 83-92 per the TOC.
- The "Pre-run session files" terminology is TekExpress-specific. The Multi-session run feature on the DUT panel is the orchestration layer that consumes a list of pre-run files.
- Save As (page 92) sits at the end of this section in the TOC — confirms it's a normal File-menu pathway, not a separate dialog.
