---
class: doc-section
doc_id: tek-express-displayporttx
doc_title: "TekExpress DisplayPort Tx Automated Test Solution Software — Printable Help"
doc_number: null
doc_date: null
applies_to: [tek-express]
section_id: status-panel
section_title: Status panel — Test Status and Log View
parent_section: null
page_range: "411 to 435"
related_screens: [status-test-status, status-log-view]
related_hardware: []
---

# Status panel — Test Status and Log View

## Summary

The Status panel and its two tabs. The **Test Status** tab tracks per-test acquisition and analysis progress as the run proceeds — Test Name, Acquisition (PRBS7 / COMP-EYE / TPS4 / PLTPAT / D10.2), Analysis Status (Completed / In Progress / To be started). The **Log View** tab shows the timestamped run log (Configure Measurement, Perform Measurement, Analyze Waveform with run number + signal name + pre-emphasis + voltage + SSC, Transition Voltage, Non Transition Voltage), with Auto Scroll toggle, Clear Log and Save buttons, a Running... progress bar at the bottom, and the same Stop / Pause command buttons in the right rail.

## Content

### Status panel

Use the Status panel to track the progress of the test measurements. The Status panel has two tabs:

- The *Test status* tab displays the acquire status and the analysis status of the tests as they are being executed.
- The *Log view* tab displays a view of the test log.

*Figure 1: Test Status view* — Tabs: Test Status (active), Log View. Columns: Test Name | Acquisition | Analysis Status. Sample rows include `Lane0` parent and child rows:

| Test Name | Acquisition | Analysis Status |
|---|---|---|
| Eye diagram testing | PRBS7 | Completed |
| Eye diagram testing | COMP-EYE | Completed |
| Eye diagram testing | TPS4 | Completed |
| Non Pre-Emphasis Level Verification Testing | PRBS7 | Completed |
| Non Pre-Emphasis Level Verification Testing | PLTPAT | To be started |
| RBR/HBR Pre-Emphasis Level Verification | PRBS7 | In Progress |
| HBR2/HBR3 Level and Equalization Verification Testing | PLTPAT | To be started |
| HBR2/HBR3 Peak to Peak Verification Testing | PLTPAT | To be started |
| Non ISI Jitter Measurements | COMP-EYE | To be started |
| Non ISI Jitter Measurements | TPS4 | To be started |
| Total Jitter (TJ) Measurements | PRBS7 | To be started |
| Total Jitter (TJ) Measurements | COMP-EYE | To be started |
| Total Jitter (TJ) Measurements | TPS4 | To be started |
| Random Jitter (RJ) Measurements | D10.2 | To be started |
| Main Link Frequency Compliance | D10.2 | To be started |
| Spread Spectrum Modulation Frequency | D10.2 | To be started |
| Spread Spectrum Modulation Deviation | D10.2 | To be started |

Status bar at bottom: "Running..." progress bar.

*Figure (Log View)* — Log View tab active, "Message History" header, timestamped log entries (one per line, format `MM/DD/YY HH:MM:SS : <message>`). Sample entries from the screenshot:

```
08/22/16 12:08:27 : Analyze Waveform(Run:3) : Lane0_RBR_PRBS7_SSC_0dB 1200mV
08/22/16 12:08:27 : Configure Measurement
08/22/16 12:08:27 : Perform Measurement
08/22/16 12:08:59 : Non Transition Voltage : 1.1318
08/22/16 12:08:59 : Analyze Waveform(Run:3) : Lane0_HBR_PRBS7_NoSSC 0dB 1200mV
08/22/16 12:08:59 : Configure Measurement
08/22/16 12:08:59 : Perform Measurement
08/22/16 12:09:32 : Transition Voltage : 1.0022
08/22/16 12:09:32 : Analyze Waveform(Run:3) : Lane0_HBR_PRBS7_SSC_0dB 400mV
08/22/16 12:09:32 : Configure Measurement
08/22/16 12:09:33 : Perform Measurement
08/22/16 12:10:07 : Non Transition Voltage : 0.3714
08/22/16 12:10:07 : Transition Voltage : 0.5232
08/22/16 12:10:07 : Analyze Waveform(Run:3) : Lane0_HBR_PRBS7_NoSSC 0dB 400mV
08/22/16 12:10:07 : Configure Measurement
08/22/16 12:10:41 : Perform Measurement
08/22/16 12:10:41 : Non Transition Voltage : 0.3716
08/22/16 12:10:42 : Transition Voltage : 0.5242
08/22/16 12:10:42 : Analyze Waveform(Run:3) : Lane0_RBR_PRBS7_SSC_0dB 600mV
08/22/16 12:10:42 : Configure Measurement
08/22/16 12:11:16 : Perform Measurement
08/22/16 12:11:16 : Non Transition Voltage : 0.5568
08/22/16 12:11:17 : Transition Voltage : 0.4884
08/22/16 12:11:17 : Analyze Waveform(Run:3) : Lane0_HBR_PRBS7_NoSSC 0dB 600mV
08/22/16 12:11:17 : Configure Measurement
```

Auto Scroll checkbox (selected by default). Clear Log button. Save button. Right rail: Stop (red), Pause (blue). Status bar: "Running..." progress bar.

For more information on using the Status panel, see *View the progress of analysis*.

## Cross-references

- [`screens/status-test-status.md`](../../screens/status-test-status.md) — the live Test Status screen in the corpus; this chunk documents the column model and example rows.
- [`screens/status-log-view.md`](../../screens/status-log-view.md) — the live Log View screen; this chunk preserves a verbatim sample of the timestamped run log including Auto Scroll, Clear Log, and Save controls.
- `setup-panel` — the Acquisitions tab where the per-test pattern columns (PRBS7 / COMP-EYE / TPS4 / PLTPAT / D10.2) shown in the Status grid are configured.
- `results-panel` — what the application switches to when "To be started" rows transition to "Completed".

## Confidence notes

- The Log View screenshot is rendered at low resolution; some log lines have characters near the right margin truncated (`SSC_0dB 1200mV` may be `SSC 0dB 1200mV` or `SSC_0dB_1200mV` in actual logs). Preserved as legible.
- The Status grid header in the source is `Test Name | Acquisition | Analysis Status`; the source PDF does not show a separate "Acquisition Status" column in this view, even though the help intro says the panel shows acquire status and analysis status. The intro wording is preserved.
- Run number is shown as `(Run:3)` in the sample log; this is the run index from the Preferences tab's Acquire/Analyze each test N times setting.
