---
provenance: observed
class: doc-section
doc_id: ui-audit
doc_title: "TekExpress AppEmulator — UI Component Report"
doc_number: null
doc_date: 2026-05
applies_to: [tek-express]
section_id: screen-inventory
section_title: Screen Inventory
parent_section: null
page_range: "2 to 3"
related_screens: [setup-dut, setup-test-selection, setup-acquisitions, setup-preferences, status-test-status, status-log-view, results, plots, reports-configuration, reports-view-settings]
related_hardware: []
---

# Screen Inventory

## Summary

The audit's screen-by-screen inventory. Eleven distinct screens documented with a one-paragraph anatomy description plus a small set of category tags (chip labels: "Wizard step", "Form-heavy", "Checkbox tree", "Data table", "Tab view", "Log area", "Empty state", "Modal overlay").

This is the audit's primary navigation aid — what's in the application, panel by panel, at a glance.

## Content

### Setup › DUT (Step 1)

> DUT ID input, Acquire live / Prerecorded radio toggle, View & Session selectors, Device/Suite/Version dropdowns. Device Profile sub-section with Probing Type, Vertical Offset, SSC, Signal Validation Threshold, Analyze on Golden Waveforms, and Show Model Info.

**Tags:** Wizard step · Form-heavy. **Corpus screen:** [`setup-dut`](../../screens/setup-dut.md).

### Setup › Test Selection (Step 2)

> Header reads "TX-Device : Group1 : TEFW 4.0". Bulk-select buttons (Deselect All, Select Required, Select All). Hierarchical checkbox tree: Algorithm Library, SCOPE Measurements, DPOJET Measurements, Autoset. Test Description text area. Show MOI, Schematic, and Configure buttons.

**Tags:** Wizard step · Checkbox tree. **Corpus screen:** [`setup-test-selection`](../../screens/setup-test-selection.md).

### Setup › Acquisitions (Step 3)

> "AppEmulator Acquisition" group with Connection Setup (Data +ve CH1, Data –ve CH3) and Refresh Sources / View Probes buttons. Test-to-acquisition mapping table (2 rows). Acquisition & Save Options with 3 radios. Signal Validation dropdown.

**Tags:** Wizard step · Data table. **Corpus screen:** [`setup-acquisitions`](../../screens/setup-acquisitions.md).

### Setup › Preferences (Step 4)

> Three group boxes: Execution Options (4 checkboxes + 2 numeric inputs), Actions on Test Measurement Failure (3 checkboxes + 1 numeric input + Email Settings button), Popup Settings (3 checkboxes + 2 numeric inputs).

**Tags:** Wizard step · Form-heavy. **Corpus screen:** [`setup-preferences`](../../screens/setup-preferences.md).

### Status › Test Status (Tab 1)

> "Test Status" tab active (orange). Table with 4 columns: Test Name, Acquisition, Acquire Status, Analysis Status. Two rows showing Period using SCOPE and Period using DPOJET — both "To be started".

**Tags:** Tab view · Data table. **Corpus screen:** [`status-test-status`](../../screens/status-test-status.md). (Corpus screenshot shows 4 rows because more tests were selected; audit captured a 2-row state.)

### Status › Log View (Tab 2)

> "Log View" tab active (orange). Full-height "Message History" scrollable read-only text area (empty). Auto Scroll checkbox at bottom-left. Clear Log and Save… action buttons at bottom-right.

**Tags:** Tab view · Log area. **Corpus screen:** [`status-log-view`](../../screens/status-log-view.md).

### Results

> "Overall Test Result" heading. Debug and Preferences ▼ outlined pill buttons in panel header. Result table with 7 columns: Test Name, Pass/Fail, Iteration, Details, Value, Margin, Units — currently empty. Clear (red ×) button on right rail.

**Tags:** Data table · Clear action. **Corpus screen:** [`results`](../../screens/results.md). (Corpus screenshot shows the table mid-run with two populated rows; audit captured the empty idle state.)

### Plots

> "Plots Not Available" centred in panel. No controls. Appears in two states: unsaved (asterisk) and saved (no asterisk).

**Tags:** Empty state. **Corpus screen:** [`plots`](../../screens/plots.md). (Corpus screenshot captures the populated state with a DPOJET waveform plot — the audit only enumerated the empty state.)

### Reports › Configuration (Tab 1)

> Configuration tab active. Contents To Save: 9 checkboxes (one disabled). User Logo section: checkbox + path input + browse button + size hint. Group Report By: 2 radio buttons. View, Generate, Save As action buttons at bottom.

**Tags:** Tab view · Form-heavy.

**Corpus mapping (CONFLICT):** The audit attributes "Contents To Save / User Logo / Group Report By" to the Configuration tab, but Bryan's photo 19 (filename `Reports-Configuration`) and the live screenshot show the **Configuration** tab actually carries Report Update Mode + Report Creation Settings, while **View Settings** carries Contents To Save / User Logo / Group Report By. The corpus trusts the live screenshots — see [`reports-configuration.md`](../../screens/reports-configuration.md) Confidence notes.

### Reports › Configuration + Modal (Tab 1 overlay)

> Same Reports › Configuration screen with a blocking modal overlay. TekExpress dialog shows info icon + message + OK button. Triggered when View is clicked before a run.

**Tags:** Modal overlay. **Corpus screen:** pending (`reports-configuration-modal.md` — no source photo in `uploads/photos/` for this state).

### Reports › View Settings (Tab 2)

> "View Settings" tab active. Report Update Mode: 3 radio options with 3 sub-radios (2 greyed). Report Creation Settings: path input + Browse button, Save as type dropdown, 3 checkboxes.

**Tags:** Tab view · Form-heavy.

**Corpus mapping (CONFLICT):** Same as above — the audit attributes "Report Update Mode + Report Creation Settings" to View Settings, but the live screenshots show those on Configuration. See [`reports-view-settings.md`](../../screens/reports-view-settings.md) Confidence notes.

## Cross-references

This is the audit's anchor section — every other chunk in this audit references screens through their names. The corpus screen chunks above are the bidirectional endpoints.

## Confidence notes

- The audit's Reports-tab attribution does not match the live application. Two possible explanations: (1) the audit author swapped tab labels in their prose; (2) the application's Reports panel was refactored between the audit (May 2026) and the screenshot capture (Bryan's June 2026 photos). The corpus assumes (1) — trusts the live screenshots — but a fresh build verification would resolve it for sure.
- The audit captures *idle* states for several screens (Results empty, Plots "Not Available", Status › Test Status with 2 rows). The corpus screen chunks capture different states (mid-run, populated, more rows). Both are valid — they document different points in the application's lifecycle. The audit prose explicitly mentions which idle state it's describing.
