---
class: doc-section
doc_id: tek-express-displayporttx
doc_title: "TekExpress DisplayPort Tx Automated Test Solution Software — Printable Help"
doc_number: null
doc_date: null
applies_to: [tek-express]
section_id: results-panel
section_title: Results panel — View test results
parent_section: null
page_range: "436 to 455"
related_screens: [results]
related_hardware: []
---

# Results panel — View test results

## Summary

The Results panel that the app switches to when a test completes. Displays the per-measurement summary table with columns Description | Pass/Fail | Details | Value | Units | Margin, grouped by lane (`Lane0` parent, per-test rows beneath). Overall Test Result indicator (Pass / Fail) at the top of the panel. Right-rail Preferences dropdown drives Results view options (show passed/failed, summary vs detailed, wordwrap). Right-rail command buttons: Start, Pause (greyed during result display), Clear (only available on this panel).

## Content

### Results panel

When a test completes running, the application switches to the Results panel to display a summary of test results. Set the viewing preferences for this panel from the Preferences menu in the upper right corner. Viewing preferences include showing whether a test passed or failed, summary results or detailed results, and enabling wordwrap. For information on using this panel, see *View test results*.

*Figure: Results panel* — Header row: "Overall Test Result: Pass" with green check icon. Preferences dropdown in the upper right. Columns: Description | Pass/Fail | Details | Value | Units | Margin. Tree rows under `Lane0`:

| Description | Pass/Fail | Details | Value | Units | Margin |
|---|---|---|---|---|---|
| HBR2/HBR3 Level and Equalization Verification Testing | Pass | 0dB VTX_OUTPUT_LEVEL0_RATIO(600mV to 400mV); Lane0 HBR3 PLTPAT NoSSC 600mV_Run1 | 3.4072 | dB | 1.8072,1.058 |
| HBR2/HBR3 Level and Equalization Verification Testing | Pass | 0dB VTX_OUTPUT_RATIO(600mV to 400mV); Lane0 HBR3 PLTPAT NoSSC 600mV_Run1 | 3.4072 | dB | 1.8072 |
| HBR2/HBR3 Level and Equalization Verification Testing | Pass | 400 mV TX_MEQ_LEVEL0_DELTA(3.5dB to 0dB); Lane0 HBR3 PLTPAT NoSSC 600mV_Run1 | 3.2471 | dB | 1.9471,0.759 |
| HBR2/HBR3 Level and Equalization Verification Testing | Pass | 400 mV TX_MEQ_LEVEL0_DELTA(6dB to 0dB); Lane0 HBR3 PLTPAT NoSSC 600mV_Run1 | 5.0506 | dB | 2.6506,0.944 |
| HBR2/HBR3 Level and Equalization Verification Testing | Pass | 600 mV TX_MEQ_LEVEL0_DELTA(3.5dB to 0dB); Lane0 HBR3 PLTPAT NoSSC 600mV_Run1 | 3.5485 | dB | 2.2485,0.455 |
| HBR2/HBR3 Level and Equalization Verification Testing | Pass | 600 mV TX_MEQ_LEVEL0_DELTA(6dB to 0dB); Lane0 HBR3 PLTPAT NoSSC 600mV_Run1 | 5.6074 | dB | 3.2074,0.396 |
| HBR2/HBR3 Level and Equalization Verification Testing | Pass | 400 mV VTX_MEQ_DELTA(3.5dB to 0dB); Lane0 HBR3 PLTPAT NoSSC 600mV_Run1 | 3.2471 | dB | 1.9471 |

Right rail: Start (green), Pause (greyed), Clear (red X). Status bar: "Completed." with green progress fill.

## Cross-references

- [`screens/results.md`](../../screens/results.md) — the live Results screen in the corpus; this chunk documents the column model and the per-measurement details rows.
- `status-panel` — what runs before this panel; "Completed" rows in Status become rows here.
- `reports-panel` — Results table content is what flows into the saved report (`.mht` / `.pdf` / `.csv`).
- `setup-panel` — User Defined Mode and the per-test Limits Editor drive the Margin column shown here.

## Confidence notes

- The Margin column prints two values for some rows (e.g. `1.8072,1.058`) and one value for others — this is preserved as printed; the help doesn't explain the two-number format in this section.
- The Details cells contain "VTX_OUTPUT_LEVEL0_RATIO" / "VTX_OUTPUT_RATIO" / "TX_MEQ_LEVEL0_DELTA" / "VTX_MEQ_DELTA" — these are HBR2/HBR3 CTS measurement IDs, preserved verbatim.
- "Wordwrap" is the actual spelling used in the source (one word).
- The Preferences dropdown in the upper-right of the Results panel is distinct from the Preferences tab in the Setup panel; preserved as printed.
