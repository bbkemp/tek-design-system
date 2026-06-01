# tek-express — service index

**TekExpress AppEmulator** — Windows desktop application for Tek scope-compliance test automation. Configures a device under test, selects compliance test suites, drives waveform acquisition (live or prerecorded), runs analysis, and generates a results / reports artifact. The active build is internally tagged "Not Intended For Public Release."

This corpus subject was scaffolded **2026-06-01** ahead of the redesign onto Tek Design System v2.

## Redesign context

Phase 1 of the TekExpress AppEmulator redesign:

- Transition the legacy Windows UI to **DS-v2**.
- Preserve **most user flows** and functionality (the walkthrough transcript in `uploads/transcripts/` is the source of truth for flow preservation).
- Some **UI reorganization** is in scope.

The corpus captures the **as-is**. The redesign deliverable lives under `audits/` or `prds/` once that work begins, not in this folder.

## Application structure (from the audit PDF)

**11 distinct screens** organized into 5 top-level panels via a persistent left side-nav:

```
TekExpress AppEmulator
├── Setup (4-step wizard)
│   ├── Step 1: DUT                  ← screens/setup-dut.md          (format-lock; documented)
│   ├── Step 2: Test Selection       ← screens/setup-test-selection.md (pending)
│   ├── Step 3: Acquisitions         ← screens/setup-acquisitions.md   (pending)
│   └── Step 4: Preferences          ← screens/setup-preferences.md    (pending)
├── Status (2 tabs)
│   ├── Tab 1: Test Status           ← screens/status-test-status.md   (pending)
│   └── Tab 2: Log View              ← screens/status-log-view.md      (pending)
├── Results                          ← screens/results.md              (pending)
├── Plots                            ← screens/plots.md                (pending)
└── Reports (2 tabs)
    ├── Tab 1: Configuration         ← screens/reports-configuration.md (pending)
    │   └── + blocking modal overlay ← screens/reports-configuration-modal.md (pending; same screen + dialog)
    └── Tab 2: View Settings         ← screens/reports-view-settings.md (pending)
```

Persistent chrome across all 11 screens:

- **Title bar** with brand mark + session ID + unsaved indicator + **Options ▼** dropdown + window controls (mail, minimise, close).
- **Side-nav** (5 pills: Setup, Status, Results, Plots, Reports).
- **Right-rail toolbar** (Start ▶, Pause ‖, Clear × on Results only).
- **Status bar** at the bottom (state text + progress indicator).
- Build-mode red notice **"Not Intended For Public Release"** at the lower-left.

State variations and dialogs (in the 21 source photos, alongside the 11 base screens):

- `setup-dut-comments` — DUT Comments popup.
- `setup-dut-session-browser` — Session selector dialog.
- `setup-test-selection-config` — per-test configuration with Acquire / Analyze tabs and a Limits Editor.
- `setup-acquisitions-probe-config` — Probe configuration dialog.
- `setup-preferences-email-settings` — Email Settings dialog.
- `running-test` — three window-state variants (minimised window, maximised window, log view during run).
- `options-dropdown` — application-level Options ▼ menu, opened from the title bar.

## Documented screens

| screen_id | screen_title | wizard_step | source photo |
|---|---|---|---|
| [setup-dut](screens/setup-dut.md) | Setup › DUT | Step 1 / 4 | `uploads/photos/1. Setup-DUT_Landing screen.png` |

**Pending** (queued for PR B — bulk pass): all other screens in the graph above. The format is locked by `setup-dut.md`; the bulk pass mirrors its frontmatter shape and body section order exactly.

## Documented hardware

For TekExpress AppEmulator (PC software), "hardware" documentation if any will capture host-machine requirements (OS, minimum specs, expected display resolutions, supported scope-instrument family for live acquisition) — likely landing in `hardware/host-requirements.md` if it warrants its own chunk, or folded into the user-guide doc chunks.

## Documented manual sections

*pending* — the PDF currently in `uploads/pdfs/` is a UI-audit document, not a user manual. It will be processed via `document-pdf` in PR B and land as `docs/ui-audit/` rather than `docs/user-manual/` — distinguishing audit content from end-user-guide content.

## Documented walkthroughs

*pending* — `uploads/transcripts/TekExpress & TekRx Overview Transcript(By Pranavi).docx` will be processed via `document-walkthrough` in PR C. Topic preview from the first 3 KB: a 23 April 2026 design-system follow-up discussion led by Bryan with Bill Israel, Mahesha, and others — tokens, components, the Figma → CSS pipeline, design-QA, and the DS-to-TekExpress integration ask. Conversation, not a user walkthrough; will chunk by topic.

## API snapshots

*pending* — TekExpress AppEmulator may or may not call a backend API; nothing in `uploads/api-specs/` yet.

## Code snapshots

*pending* — Tek Express source repo not yet provided.

## Cross-product applicability

`applies_to: [tek-express]` — the AppEmulator build of Tek Express specifically. The walkthrough transcript references a sibling product **TekRx**; if that product gets its own corpus folder, shared screens may carry `applies_to: [tek-express, tek-rx]`.
