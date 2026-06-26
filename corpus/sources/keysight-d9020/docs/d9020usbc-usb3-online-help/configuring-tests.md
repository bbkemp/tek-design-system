---
class: doc-section
doc_id: d9020usbc-usb3-online-help
doc_title: Keysight D9020USBC/D9320USBC USB3.2 Test Application Online Help
doc_number: ""
doc_date: 2026-01
applies_to: [keysight-d9020]
section_id: configuring-tests
section_title: Configuring Tests
parent_section: ""
page_range: ""
related_screens: []
related_hardware: []
---

# Configuring Tests

## Summary

The Configure tab manages per-test parameter editing. Compliance mode runs each test against spec defaults; Debug mode lets the user override parameters for diagnostic / characterization work. The Configure surface presents a variable tree (parameters by test) plus per-variable edit controls (numeric input, dropdowns, file pickers for filter files).

## Content

### Configure modes

- **Compliance mode** (default) — all selected tests run against USB3.2 spec defaults; no per-parameter override allowed. The intended mode for go/no-go certification work.
- **Debug mode** — exposes per-test parameter override. Used for diagnostic work, characterization, marginal-DUT analysis. Output reports flag Debug mode in the header so the result isn't mistaken for compliance verdict.

### Variable tree

The Configure tab shows a tree of parameters grouped by test:
- **Common settings** (apply to multiple tests)
- **Per-test parameters** (test-specific, e.g., specific eye mask widths, equalization stage configurations)

Each row shows the parameter name + current value + optional override input. Override applies only to the next Run (not persisted unless saved into the project).

### File-based parameters

Some parameters reference external files:
- **Calibration files** — scope calibration / channel response
- **De-embedding filter files** (`.s2p` / `.s4p` Touchstone or proprietary) — for fixture / channel compensation
- **Compliance Limits** files — pass/fail thresholds (typically Keysight-shipped per spec version)

### Limit thresholds

Limit thresholds for pass/fail decisions live in the Configure tab. Compliance mode uses spec-driven limits; Debug mode allows per-test limit override (with appropriate report flagging).

## Cross-references

- **UI documented** at [`../../../keysight-d9040/screens/configure.md`](../../../keysight-d9040/screens/configure.md) — same surface in D9040USBC variant. The Compliance / Debug toggle and variable tree are observed there.
- **Tek equivalent** at [`../../../tek-express/screens/setup-test-selection-config.md`](../../../tek-express/screens/setup-test-selection-config.md) (per-test Configure dialog) and [`../../../tek-express/screens/setup-test-selection-limits-editor.md`](../../../tek-express/screens/setup-test-selection-limits-editor.md) (Limits Editor). TekExpress separates parameters (Configure dialog) from limits (Limits Editor); Keysight folds both into Configure.
- **Tek-vs-Keysight** competitive audit notes the Compliance/Debug mode distinction.

## Confidence notes

- The variable-tree structure mirrors what's documented in the D9040USBC screens corpus.
- Filter-file format details (Touchstone vs proprietary) follow the broader Keysight Infiniium ecosystem; verify against the source PDF for the canonical accepted formats.
- The Compliance/Debug verdict-flagging in reports is a real safeguard; Configuration mode shows in the HTML Report header per [`../../../keysight-d9040/screens/html-report.md`](../../../keysight-d9040/screens/html-report.md).
