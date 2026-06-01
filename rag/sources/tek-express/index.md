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

*pending PR C* — `uploads/pdfs/UI-app-emulator-audit.pdf` is a UI component audit (43 component types, 292 instances) rather than a user manual; it will be processed via `document-pdf` and land as `docs/ui-audit/` chunks. Each chunk will cross-link back to the screen `.md` files documented above.

## Documented walkthroughs

*pending PR C* — `uploads/transcripts/TekExpress & TekRx Overview Transcript(By Pranavi).docx` (5.5 MB) is a 23 April 2026 Design System follow-up discussion led by Bryan with Bill Israel, Mahesha, and others. Topics: tokens, components, Figma → CSS pipeline, design-QA, the DS-to-TekExpress integration ask. This is a conversation about design, not a TekExpress user walkthrough — `applies_to` will likely cover both `tek-express` and `tek-design-system`.

## API snapshots

*pending* — no OpenAPI spec in `uploads/api-specs/` yet. Whether TekExpress talks to a backend is unknown from these screenshots.

## Code snapshots

*pending* — Tek Express source repo not yet provided. The application is implemented in C# (.NET) per a runtime log line.

## Cross-product applicability

`applies_to: [tek-express]` — the AppEmulator build specifically. The walkthrough transcript references a sibling product **TekRx**; shared screens may carry `applies_to: [tek-express, tek-rx]` once that subject lands.

## Discrepancy flag — audit PDF tab/content mapping

The pre-existing audit PDF (`uploads/pdfs/UI-app-emulator-audit.pdf`) describes Reports › Configuration with "Contents To Save: 9 checkboxes (one disabled). User Logo section..." and Reports › View Settings with "Report Update Mode... Report Creation Settings...". **The live screenshots show the opposite mapping.** I have trusted Bryan's filenames over the audit PDF for the corpus, flagged in Confidence notes on both Reports chunks. Verify on the live build before treating either tab label as authoritative.
