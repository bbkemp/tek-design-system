---
class: doc-section
doc_id: d9020usbc-usb3-online-help
doc_title: Keysight D9020USBC/D9320USBC USB3.2 Test Application Online Help
doc_number: ""
doc_date: 2026-01
applies_to: [keysight-d9020]
section_id: running-tests
section_title: Running Tests
parent_section: ""
page_range: ""
related_screens: []
related_hardware: []
---

# Running Tests

## Summary

The Run tab orchestrates test execution and reports live status. Header controls — Run / Pause + Run tests N times / Permutations / Skip completed — manage the test loop. The Measurement Server section reports per-task state (Acquire, Report) and the Active Run progress. The Result Tags / Configure / Email / Store Mode / Detection panels configure the run-time behavior beyond per-test parameter selection.

## Content

### Run controls

- **Run** / **Pause** — Start/Stop the test execution
- **Run tests** — Once / Continuously / N times (user-selected loop count)
- **Permutations** — sweep over parameter combinations for parametric characterization runs
- **Skip completed** — checkbox to skip tests already passed in the current run session

### Measurement Server

The application uses a Measurement Server architecture:
- **Manager (Acquire, Report)** — dispatches scope acquisitions and Report generation
- **Outbound Task Queue** — tasks awaiting scope-side execution
- **Active Run ID / Progress / Test ID (Machine) / Aborted** — visible columns documenting current task

### Result Tags

Free-text tags attached to each test result; used in reports and exports for organization.

### Event detection

Configurable event detection on scope-side signals; mid-run notifications when configured conditions are met.

### Store Mode

Controls what the application persists from the run:
- **Worst** — save only the worst per-test results
- **All** — save every acquired waveform + measurement
- **N worst** — keep the N worst per test (default behavior in the D9040USBC documented at `keysight-d9040/screens/run.md`)

### Email notifications

If configured (Preferences ▶ Remote ▶ Email), email is sent on run pause / stop / error. **Per the competitive audit, the Keysight Email notification is more limited than TekExpress** — Keysight only fires on pause/stop, not on completion or per-failure attachment.

### Messages panel

Bottom-pane log of run-time events: connection events, per-test status transitions, errors, warnings. Includes auto-scroll + Save controls.

## Cross-references

- **UI documented** at [`../../../keysight-d9040/screens/run.md`](../../../keysight-d9040/screens/run.md) — extensively detailed; this chunk summarizes the framework-level controls and references the screen for canonical UI behavior.
- **Tek equivalent** at [`../../../tek-express/screens/status-test-status.md`](../../../tek-express/screens/status-test-status.md) (test-status table during run) + [`../../../tek-express/screens/running-test.md`](../../../tek-express/screens/running-test.md) (minimised running-test window) + the start/pause/stop controls on every screen.
- **Tek-vs-Keysight email comparison**: TekExpress *Lead* on Email notifications per the [competitive audit](../../../../../audits/competitive/2026-06-25-tek-express-vs-keysight-d9040dppc/) — Tek fires on completion/error with optional report attachment; Keysight only on pause/stop.
- **Store Mode** — Keysight's "Worst / All / N worst" is more configurable than TekExpress's binary "save waveforms" setting.

## Confidence notes

- Run-tab content sourced from the documented D9040USBC `run.md` screen plus the Online Help TOC entry.
- Specific "Continuous run" or "Run N times" UI placement may vary in the USB3.2 application vs. USB4; the framework is shared but per-test options differ.
- Live Active Run ID format mirrors what's visible in the D9040USBC screen.
