---
class: doc-section
doc_id: tek-express-pci-express
doc_title: TekExpress® PCI Express Transmitter Compliance and Validation Software Application Help
doc_number: 077-1762-05
doc_date: 2026-03
applies_to: [tek-express]
section_id: setup-configuration-and-preferences
section_title: Setup panel — Configuration (CTLE, scope noise), Preferences
parent_section: ""
page_range: "63-70"
related_screens: [setup-test-selection-config, setup-test-selection-limits-editor, setup-preferences]
related_hardware: []
---

# Setup panel — Configuration (CTLE, scope noise), Preferences

## Summary

Setup step 4 of the PCIe Tx wizard. **Configuration** sets per-test measurement parameters and pass/fail limits, including PCIe-specific features: **CTLE optimization** (continuous-time linear equalizer parameter search) and **Scope noise characterization and compensation** (subtracts the scope's own noise floor before evaluating Tx jitter). **Preferences** sets test-run behavior (continue on fail, popup behavior, email notifications).

## Content

### Configuration — Set measurement limits for tests (pg 63)

Per-test parameter editor and pass/fail limit configuration:
- **Per-test parameters** — varies by test: voltage thresholds, eye-mask templates, BUJ/RJ separation algorithm parameters, equalization stage configuration
- **Limits Editor** — dedicated dialog for entering numeric pass/fail thresholds per test; documented at `screens/setup-test-selection-limits-editor.md`

### CTLE optimization feature (pg 65)

PCIe Gen 3+ Tx compliance requires reference receiver equalization. CTLE optimization runs a sweep across CTLE parameter space (peak gain, pole/zero frequencies) to find the setting that best opens the equalized eye against the spec mask. The dialog manages:
- Parameter ranges per generation
- Sweep granularity
- Result visualization (eye-opening as a function of CTLE setting)
- Apply optimized settings to the test execution

### Scope noise characterization and compensation workflow (pg 66)

Modern Tx jitter measurements (Gen 4+) require accounting for the scope's own noise contribution to avoid attributing it to the DUT. The workflow:
1. Acquire a quiet reference (terminated input or no-signal capture)
2. Characterize the scope noise floor (RMS, spectral)
3. During test execution, the application subtracts the characterized noise from the measured Tx noise/jitter

The application persists the noise characterization across runs (per-scope-channel) so the workflow is one-time per setup.

### Preferences — Set the test run preferences (pg 68)

Run-time behavior switches:
- **Continue on test failure** — proceed to subsequent tests vs halt
- **Number of runs** — single vs N-loop execution
- **Acquire-then-analyze** vs **acquire-and-analyze in real time**
- **Popup behavior** — suppress mid-run dialogs for unattended runs
- **Email notifications** — fire on start / completion / error (configured via Email Settings)

## Cross-references

- **UI documented**: [`../../screens/setup-test-selection-config.md`](../../screens/setup-test-selection-config.md), [`../../screens/setup-test-selection-limits-editor.md`](../../screens/setup-test-selection-limits-editor.md), [`../../screens/setup-preferences.md`](../../screens/setup-preferences.md).
- **CTLE optimization** is PCIe-specific (Gen 3 reference equalization onward). Similar receiver-equalization workflows exist for DisplayPort (FFE/CTLE), USB4 (CTLE/DFE) — see [`../tek-express-displayporttx-2-1/`](../tek-express-displayporttx-2-1/_index.md). Each variant configures its own equalization pipeline; the UI surface is similar.
- **Scope noise characterization** is also documented (in different verbiage) for DDR5 Tx in [`../tek-express-ddr5-tx-user-manual/setup-configuration.md`](../tek-express-ddr5-tx-user-manual/setup-configuration.md).
- **Customer signal**: Infineon ATV's *"need to check multiple lanes together"* and AMD/NVIDIA's automotive-Ethernet + PCIe combination workflows (see [`../../decks/india-customer-voc-2023-march/`](../../decks/india-customer-voc-2023-march/)) make the multi-lane CTLE optimization a frequently-cited customer requirement.

## Confidence notes

- Section covers pages 63-70 per the TOC. CTLE optimization (65), scope noise characterization (66), and Preferences (68) are the explicitly-named sub-pages.
- CTLE / scope-noise-comp implementation details (algorithms, parameter ranges) are not transcribed here — refer to the source PDF for exact values per generation. The high-level workflow is captured.
- "Acquire-and-analyze in real time" vs "Acquire-then-analyze" is a preference toggle in TekExpress generally; PCIe defaults may differ from DDR5 defaults.
