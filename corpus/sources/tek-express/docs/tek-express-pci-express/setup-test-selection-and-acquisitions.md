---
provenance: observed
class: doc-section
doc_id: tek-express-pci-express
doc_title: TekExpress® PCI Express Transmitter Compliance and Validation Software Application Help
doc_number: 077-1762-05
doc_date: 2026-03
applies_to: [tek-express]
section_id: setup-test-selection-and-acquisitions
section_title: Setup panel — Test Selection, Acquisitions
parent_section: ""
page_range: "55-62"
related_screens: [setup-test-selection, setup-test-selection-config, setup-acquisitions, setup-acquisitions-probe-config]
related_hardware: []
---

# Setup panel — Test Selection, Acquisitions

## Summary

Setup steps 2 and 3 of the PCIe Tx wizard. **Test Selection** presents the spec-driven test tree filtered to the PCIe generation chosen on the DUT panel; the user picks which compliance tests to run. **Acquisitions** configures how waveforms are captured (live scope vs. prerecorded), what to save, signal sources, and the source for prerecorded files.

## Content

### Test Selection — Select the tests (pg 55)

A hierarchical checkbox tree showing every compliance test the spec / generation enables:
- **Algorithm Library** (cross-generation utilities — eye height/width, jitter decomposition, SCOPE-based measurements)
- **PCIe Gen-specific groups** (Gen 3 / Gen 4 / Gen 5 / Gen 6) — TP1 / TP2 / TP3 / TP4 measurement points per the PCIe Base spec, CEM (Card Electromechanical) tests where applicable
- **DPOJET** integration — when the scope's DPOJET application is licensed, Tx jitter and signal-integrity measurements appear here as toggleable tests

Each test offers:
- **Configure** button → opens the per-test parameter dialog (Acquire / Analyze tabs, plus optional Limits Editor) at `screens/setup-test-selection-config.md`
- **Show MOI / Schematic** — link to the spec-derived Method of Implementation page
- **View Probes** — open the probe-config dialog filtered to this test's required probes

### Acquisitions — Set waveform acquisition settings (pg 57)

The Acquisitions panel manages the waveform capture pipeline:

- **Test → Acquisition mapping table** — each selected test is bound to one or more named acquisitions; the table shows which acquisition signal feeds which test
- **Connection setup** — channel-to-pair assignments (matches the DUT panel's lane definition)
- **Signal validation** — pre-run check that the configured channels are receiving valid signals (amplitude, edge density, lock indicators)
- **Save options** — what to persist after acquisition (raw `.wfm`, downsampled, decomposed jitter results)

#### Sub-controls

- **Set acquisition options** (pg 60) — record length, sample rate, bandwidth, acquisition memory mode
- **Set acquisition waveform save options** (pg 61) — file format (`.wfm`, `.h5`, `.csv`), output path, naming pattern
- **Set acquisition waveform source for prerecorded waveform files** (pg 62) — when DUT panel sets Acquire mode = Prerecorded, this picks the source folder of waveforms to replay
- **Set acquisition signal source** (pg 62) — Live (scope channel) vs Prerecorded (folder); typically determined by DUT panel acquire mode

## Cross-references

- **UI documented**: [`../../screens/setup-test-selection.md`](../../screens/setup-test-selection.md) and [`../../screens/setup-test-selection-config.md`](../../screens/setup-test-selection-config.md); [`../../screens/setup-acquisitions.md`](../../screens/setup-acquisitions.md) and [`../../screens/setup-acquisitions-probe-config.md`](../../screens/setup-acquisitions-probe-config.md).
- **Limits Editor** behavior covered in `setup-configuration.md` (next section).
- **Tek-vs-Keysight competitive context**: the [Tek-vs-Keysight D9040DPPC audit](../../../../../audits/competitive/2026-06-25-tek-express-vs-keysight-d9040dppc/) covers comparable test-selection + acquisition workflows on the Keysight side.

## Confidence notes

- Sub-control page numbers per the TOC (60, 61, 62 × 2).
- The DPOJET integration is mentioned because Tx jitter is the dominant PCIe Tx measurement category; verify against the actual manual that DPOJET appears in the Test Selection tree.
- Multiple sources of "Algorithm Library" content in the corpus (DDR5 manual, AppEmulator manual, TekExpress AppEmulator UI audit) — TekExpress reuses the term consistently.
