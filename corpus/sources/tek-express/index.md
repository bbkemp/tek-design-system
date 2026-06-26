# tek-express — service index

**TekExpress AppEmulator** — Windows desktop application for Tek scope-compliance test automation. Configures a device under test (DUT), selects compliance test suites, drives waveform acquisition (live or prerecorded), runs analysis, and generates results / reports. The active build is internally tagged **"Not Intended For Public Release"** in the lower-left of every screen.

The application is implemented in C# (.NET) — verified from a runtime log line in the Status › Log View running state (`Initializing C# App Sequencer...`).

This corpus subject was scaffolded **2026-06-01**, format-locked on Setup › DUT **2026-06-01**, and bulk-processed **2026-06-01** ahead of the redesign onto Tek Design System v2.

## Redesign context

Phase 1 of the TekExpress AppEmulator redesign:

- Transition the legacy Windows UI to **DS-v2**.
- Preserve **most user flows** and functionality (the walkthrough transcript in `uploads/transcripts/` is the source of truth for flow preservation).
- Some **UI reorganization** is in scope.

The corpus captures the **as-is**. The redesign deliverable lives under `audits/` or `prds/` once that work begins, not in this folder.

### Recent additions (2026-06-25 batch 2, pending processing)

5 new artifacts in `uploads/artifacts/` directly inform the redesign brief:

- **`TekExpress_Needed_Features 1.md`** — customer-requested TekExpress features summary (Modern UI / Facelift, PC-native Execution, workflow definition, performance, configurability). **Direct redesign input.**
- **`Tx-Rx Solutions Platform VOC guide Draft _08_TEK-CONFIDENTIAL.pdf`** — TekExpress VoC interview guide V0.8 (Subhasis Bera, Principal Product Manager, Solutions Platform and Decoders). Internal methodology document for VOC engagements covering workflow, JTBD, pain points, automation.
- **`Designcon 2023 VOC_SUMMARY.pptx`** — Designcon 2023 conference VOC summary, cross-product event feedback.
- **`mAR 2023 ind Customer VOC.pptx`** — March 2023 India regional customer VOC.
- **`GA VOC for Empathy Disc Guide Question Bank - GM v1.docx`** — empathy interview discussion guide / question bank (methodology, not transcript data).

7 new manuals (`.pdf` + `.chm`) in `uploads/pdfs/` from the prior batch await `/document-pdf` processing. The new `AU VoC Sync up.docx` was processed via `/document-walkthrough` into 3 chunks (2026-06-23 meeting) — see the [Documented walkthroughs](#documented-walkthroughs) section below. The remaining batch-2 PPTX/DOCX/XLSX/CSV artifacts await `/document-deck` and `/document-spreadsheet` (both shipped this turn; processing pending).

## Application structure

5 top-level panels accessed via the persistent left side-nav, 17 distinct screens (11 base + 5 dialogs + 1 minimised-window state):

```
TekExpress AppEmulator
├── Setup (4-step wizard)
│   ├── Step 1: DUT                    ← screens/setup-dut.md
│   │   ├── Comments popup             ← screens/setup-dut-comments.md
│   │   └── Run/Config Sessions        ← screens/setup-dut-session-browser.md
│   ├── Step 2: Test Selection         ← screens/setup-test-selection.md
│   │   ├── Configure (Acquire/Analyze) ← screens/setup-test-selection-config.md
│   │   └── Limits Editor              ← screens/setup-test-selection-limits-editor.md
│   ├── Step 3: Acquisitions           ← screens/setup-acquisitions.md
│   │   └── Probe Configuration        ← screens/setup-acquisitions-probe-config.md
│   └── Step 4: Preferences            ← screens/setup-preferences.md
│       └── Email Settings             ← screens/setup-preferences-email-settings.md
├── Status (2 tabs)
│   ├── Tab 1: Test Status             ← screens/status-test-status.md
│   └── Tab 2: Log View                ← screens/status-log-view.md
├── Running Test (compact window)      ← screens/running-test.md
├── Results                            ← screens/results.md
├── Plots                              ← screens/plots.md
├── Reports (2 tabs)
│   ├── Tab 1: Configuration           ← screens/reports-configuration.md
│   └── Tab 2: View Settings           ← screens/reports-view-settings.md
└── Options ▼ menu (title-bar overlay) ← screens/options-dropdown.md
```

## Persistent chrome (every screen)

- **Title bar** — `TekExpress AppEmulator — (<session>)*` (asterisk = unsaved; "(Untitled)" during a run); Tektronix logo at left; `Options ▼` pill at right; window controls (mail, minimise, close) far right.
- **Side-nav** (5 vertical pills): Setup · Status · Results · Plots · Reports. Orange-filled = active.
- **Right-rail toolbar** — Start ▶ (green circular) and Pause ‖ (grey circular). On Results, an extra Clear × button below. During a run, Start is replaced by Stop (red square).
- **Status bar** — bottom edge. Text ("Ready.", "Running…", "Completed") + progress fill.
- **"Not Intended For Public Release"** — red notice at lower-left.

## Documented screens (17)

| Panel | screen_id | screen_title | screen_type | Source photo |
|---|---|---|---|---|
| Setup | [setup-dut](screens/setup-dut.md) | Setup › DUT | config | `1. Setup-DUT_Landing screen.png` |
| Setup (dialog) | [setup-dut-comments](screens/setup-dut-comments.md) | Setup › DUT — Comments popup | dialog | `2. Setup-DUT_Comments popup.png` |
| Setup (dialog) | [setup-dut-session-browser](screens/setup-dut-session-browser.md) | Setup › DUT — Run/Config Sessions | dialog | `3. Setup-DUT_Run_Config Session.png` |
| Setup | [setup-test-selection](screens/setup-test-selection.md) | Setup › Test Selection | config | `4. Setup-Test Selection.png` |
| Setup (dialog) | [setup-test-selection-config](screens/setup-test-selection-config.md) | Setup › Test Selection — Configure | dialog | `5./6. Setup-Test Selection_Config_*.png` |
| Setup (dialog) | [setup-test-selection-limits-editor](screens/setup-test-selection-limits-editor.md) | Setup › Test Selection — Limits Editor | dialog | `7. Setup-Test Selection_Config_Limits Editor.png` |
| Setup | [setup-acquisitions](screens/setup-acquisitions.md) | Setup › Acquisitions | config | `8. Setup-Acquisitions.png` |
| Setup (dialog) | [setup-acquisitions-probe-config](screens/setup-acquisitions-probe-config.md) | Setup › Acquisitions — Probe Configuration | dialog | `9. Setup-Acquisitions_Probe Config.png` |
| Setup | [setup-preferences](screens/setup-preferences.md) | Setup › Preferences | config | `10. Setup-Preferences.png` |
| Setup (dialog) | [setup-preferences-email-settings](screens/setup-preferences-email-settings.md) | Setup › Preferences — Email Settings | dialog | `11. Setup-Preferences_Email Settings.png` |
| Status | [status-test-status](screens/status-test-status.md) | Status › Test Status | status | `12. Status-Test Status.png` (+ photo 15 for run state) |
| Status | [status-log-view](screens/status-log-view.md) | Status › Log View | status | `13. Status-Log View.png` (+ photo 16 for run state) |
| Running | [running-test](screens/running-test.md) | Running Test — Minimised Window | status | `14. Running Test_Minimised Window.png` |
| Results | [results](screens/results.md) | Results › Overall Test Result | readout | `17. Results_Overall Test Result.png` |
| Plots | [plots](screens/plots.md) | Plots | graph | `18. Plots.png` |
| Reports | [reports-configuration](screens/reports-configuration.md) | Reports › Configuration | config | `19. Reports-Configuration.png` |
| Reports | [reports-view-settings](screens/reports-view-settings.md) | Reports › View Settings | config | `20. Reports-View Settings.png` |
| Chrome | [options-dropdown](screens/options-dropdown.md) | Options dropdown menu | dialog | `0. Options Dropdown.png` |

## Pending screens (referenced but not yet captured)

- **`reports-configuration-modal`** — blocking dialog "Report file not generated or does not exist" that appears when `btn-view` is clicked before a report exists. Documented in the audit PDF but no source photo yet.
- **Continuous Run Setup**, **Instrument Control Settings**, and the four submenu surfaces (Open Recent, Deskew, Suite, Message Font Size) launched from the Options dropdown. Documented in `options-dropdown.md` as menu items but not as their own screens.

## Documented hardware

Tek Express AppEmulator is PC software — no front-panel hardware to document. If host-machine requirements (minimum OS, expected resolutions, supported scope-instrument family for live acquisition) become important for the redesign, they will land as a `hardware/host-requirements.md` chunk. Currently `hardware/` is empty.

## Documented manual sections

The audit PDF is processed at `docs/ui-audit/` — **10 chunks** covering the screen inventory and component categorization:

| Chunk | Topic |
|---|---|
| [_index](docs/ui-audit/_index.md) | TOC + summary totals (43 distinct component types, ~292 total instances across 7 categories) |
| [screen-inventory](docs/ui-audit/screen-inventory.md) | Per-screen audit entries (11 screens with descriptions + tags) |
| [navigation-components](docs/ui-audit/navigation-components.md) | Side nav, Wizard step indicator, Tab bar, Options ▼ |
| [right-rail-toolbar](docs/ui-audit/right-rail-toolbar.md) | Start, Pause, Clear |
| [inline-teal-pill-buttons](docs/ui-audit/inline-teal-pill-buttons.md) | 16 labels / 22 instances of the dominant inline-action style |
| [outlined-pill-buttons](docs/ui-audit/outlined-pill-buttons.md) | Debug, Preferences ▼ (only two non-teal outlined pills in the app) |
| [icon-buttons](docs/ui-audit/icon-buttons.md) | Edit/pencil, Session ellipsis, Logo picker, window mail/min/close |
| [form-inputs](docs/ui-audit/form-inputs.md) | Checkbox, Radio, Dropdown, Text input, Checkbox tree |
| [data-display](docs/ui-audit/data-display.md) | Data tables, group boxes, text areas, empty state, status bar, title bar |
| [feedback-overlays](docs/ui-audit/feedback-overlays.md) | Modal alert dialog (the single blocking-overlay component) |

A separate end-user-guide PDF is not yet in the corpus. If one is provided in the future it will land as `docs/user-manual/`.

## Documented walkthroughs

Two meetings processed at `walkthroughs/`, **7 topic-clustered chunks** plus an [index](walkthroughs/_index.md).

### 2026-04-23 — TekExpress Design System Follow-up Discussion

4 chunks covering the cross-team DS follow-up: Bryan + Bill Israel + Mahesha + Pranavi + Rick + Richard + Hemant + Srevats. Every chunk carries `applies_to: [tek-express, tek-design-system]`.

| Chunk | Topic | Time range |
|---|---|---|
| [ds-architecture-presentation](walkthroughs/ds-architecture-presentation.md) | Bryan's DS overview — tokens, components, Figma → CSS pipeline, motion libraries (planned), release process | 0:18 – 9:00 |
| [desktop-integration-strategy](walkthroughs/desktop-integration-strategy.md) | WPF integration approach; Mahesha's control-library proposal; Bill's incremental-adoption framing | 9:00 – 16:35 |
| [tek-products-walkthrough](walkthroughs/tek-products-walkthrough.md) | Pranavi's combined demo of TekExpress (compliance app) and TekRx (receiver-test wizard) | 16:35 – 46:00 |
| [ux-feedback-and-open-questions](walkthroughs/ux-feedback-and-open-questions.md) | Half-screen mode, container breakpoints, composite controls, chart-library re-implementation pain, mermaid diagrams | 46:00 – 1:04:00 |

### 2026-06-23 — AU VoC Sync up

3 chunks covering Subhasis Bera's product / customer / strategy briefing for the AU UX team. **Directly upstream of the 2026-06-25 batch 2 materials** in `uploads/artifacts/`. `applies_to: [tek-express, tek-flow]` because Subhasis discusses TekFlow in parallel.

| Chunk | Topic | Time range |
|---|---|---|
| [personas-and-jobs-to-be-done](walkthroughs/personas-and-jobs-to-be-done.md) | The 3 personas (Guru Gus, Push-Button Pete, Midway Max) + the 4-stage JTBD landscape + the Clarius cautionary tale | 0:03 – ~12:00 |
| [customer-market-and-platform-context](walkthroughs/customer-market-and-platform-context.md) | Customer landscape (humanoids, AI servers, EVs, Tesla, Meta Lab, JLR), the multi-interface compliance workflow (~600 interfaces per AMD AI server), cross-vendor parity vs. conformance differentiation | ~6:18 – ~30:00 |
| [ui-redesign-mantras-and-transition-strategy](walkthroughs/ui-redesign-mantras-and-transition-strategy.md) | Three redesign mantras (guided customer engagement, Mazda-to-Jaguar / no manual to drive, bandwagon respect); deployment-friction wedge | ~54:53 – 1:00:39 |

Mid-meeting segments (~12:00 – ~54:53) of the AU VoC discussion are **pending follow-up processing**.

**Highest-RAG-value friction notes** from the transcript:

- *"We go and sort of remake charts in the native place. And then what happens is we lose all the richness."* — Rick Kuhlman (55:23). The chart-library decision is the most-impactful open question for the redesign.
- *"These need to be designed in such a way to dock half and half."* — Rick Kuhlman (50:05). Window-sizing modes between full and minimised are unvalidated.
- *"We're baking into the design system is container breakpoints. Instead of doing like viewport breakpoints, the responsiveness is on the container level."* — Bryan Kemp (51:56). High-signal architectural decision, already committed.

The corpus exists in part because of this transcript — Bryan explicitly asks (1:02:14) for *"screenshots of Tech Express in the…"* and an audit of the charts and diagrams. The screenshots are in `uploads/photos/`; the audit PDF in `uploads/pdfs/`; this corpus is the loop-closing response.

## API snapshots

*pending* — no OpenAPI spec in `uploads/api-specs/` yet. Whether TekExpress talks to a backend is unknown from these screenshots.

## Code snapshots

*pending* — Tek Express source repo not yet provided. The application is implemented in C# (.NET) per a runtime log line.

## Cross-product applicability

`applies_to: [tek-express]` — the AppEmulator build specifically. The walkthrough transcript references a sibling product **TekRx**; shared screens may carry `applies_to: [tek-express, tek-rx]` once that subject lands.

## Discrepancy flag — audit PDF tab/content mapping

The pre-existing audit PDF (`uploads/pdfs/UI-app-emulator-audit.pdf`) describes Reports › Configuration with "Contents To Save: 9 checkboxes (one disabled). User Logo section..." and Reports › View Settings with "Report Update Mode... Report Creation Settings...". **The live screenshots show the opposite mapping.** I have trusted Bryan's filenames over the audit PDF for the corpus, flagged in Confidence notes on both Reports chunks. Verify on the live build before treating either tab label as authoritative.
