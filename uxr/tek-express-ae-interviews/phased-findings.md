---
provenance: authored-analysis
authored_by: [Bryan Kemp (study lead), Claude Code (synthesis)]
authored_date: 2026-07-21
project: tek-express-ae-interviews
applies_to: [tek-express, tek-design-system]
related_docs:
  - synthesis.md
  - phase-1-immediate-prototype.md
  - phase-2-global-ui.md
  - phase-3-panel-ui.md
---

> ## ⚠️ Authored analysis — not corpus
> **This document is interpretation, authored by Bryan Kemp and Claude Code on 2026-07-21.** It is opinion and synthesis, not observed fact. The system of record is the cited corpus entries (`provenance: observed`). When this analysis and a corpus entry disagree, the corpus wins — and this file should be corrected.

# TekExpress redesign — phased findings readout

The actionable readout of the July 2026 AE interview round (8 sessions, 21 corpus chunks) plus the fully-chunked June AU VoC briefing, organized into **three delivery phases**. The evidence base and per-AE detail live in [synthesis.md](synthesis.md); this document is the work-planning view. Each phase below has an overview and high-level list here, and an **exhaustive detail file** with every specific piece of feedback, cited to who said it:

| Phase | Scope | Detail file |
|---|---|---|
| **1 — Immediate Prototype** | Everything required to make the lift-and-shift real. No net-new functionality. | [phase-1-immediate-prototype.md](phase-1-immediate-prototype.md) |
| **2 — Global UI** | The wrapping shell every installation shares: nav, run/test/pass/fail/pause states, sessions, logs, errors. | [phase-2-global-ui.md](phase-2-global-ui.md) |
| **3 — Panel UI** | Grouped by installation, then panel-by-panel workflow optimization. | [phase-3-panel-ui.md](phase-3-panel-ui.md) |

These phases intentionally rhyme with the app team's own disclosed roadmap (re-skin → panel-breaking usability → new features, per [Joey's session](../../corpus/sources/tek-express/walkthroughs/ae-joey-chiu-pcie-backward-compat-scaling.md)): Phase 1 ≈ their re-skin, Phases 2–3 slice their usability phase by *surface* (shared shell vs. per-panel) rather than by feature.

## Highest findings overall

1. **The direction is validated; the flow is the moat.** Every AE accepted the workflow skeleton; nobody asked for a different flow. The guided wizard is the product's core asset, defended unprompted, and the **Clarius precedent** (a redesign that looked better but broke flow and trust) was invoked independently three times. Familiarity is a feature — reskin and fix placement; don't restructure.
2. **Mode invisibility is the sharpest single defect.** Compliance vs. user-defined state is one dismissable popup, then silence until the report — "spent two days not realizing it's not compliant." The fix (persistent mode + preset indicator in the shared shell) is Phase 2's anchor.
3. **State communication is the value.** Subhasis's principle — *"the biggest value… is letting know the user the status of the system at any given point in time"* — matches the AEs exactly: misleading progress bars, information-free errors, flat logs, failures findable only by downloading the report. The whole run/test/fail/pause state system needs designing as one vocabulary (Phase 2), not per-screen patches.
4. **Visual identity: TekScope kinship, dark-default.** Three AEs independently want shared TekScope grays/greens and dark mode; the "flat vs. hierarchy" tension resolves as *TekScope's flat aesthetic + deliberate attention hierarchy* — validate with a token-level variant before committing (Phase 1 decision).
5. **The prototype has accuracy debts, not concept debts.** Wrong-for-memory configuration, non-functional Select Required, misplaced controls, unclear checkmarks. All fixable within lift-and-shift scope (Phase 1) — and the checkmark rule is absolute: **never gate Start**.
6. **PCIe is the stress test.** "The super set of stupid" — Gen 7/8 data-rate growth, 200-test trees, silent 10× preset cost. Design Phase 3 against PCIe first (it's also ~50% of the business) and every other installation inherits the headroom.
7. **The differentiator candidates are known.** Scope-session debug export ("No one does that. We would win based on that"), on-scope operation vs. R&S, up-front config vs. LeCroy's tree, and Travis's launcher/global-settings concept — all logged as open decisions, none silently committed.

---

## Phase 1 — Immediate Prototype

**Goal:** the prototype becomes a faithful, shippable re-skin of today's TekExpress. Nothing new; everything true.

The AEs' verdict on the current prototype is "right direction, wrong details." Phase 1 closes the gap between what the prototype shows and what the product actually does, locks the visual tokens, and fixes interaction inconsistencies that would read as regressions on day one. Full list: [phase-1-immediate-prototype.md](phase-1-immediate-prototype.md).

- Fix prototype accuracy debts: configuration panel wrong for memory, DUT middle section "dumping fields," Select Required non-functional, embed filter misplaced, presets/acquisition grouping/test comments missing, app/suite label placement.
- Resolve checkmark semantics — visited-indicator only, **never a Start gate**; run-with-defaults from DUT alone must work.
- Lock the visual tokens: TekScope-shared grays/greens, dark mode default, tame the bright white, drop the out-of-place stylized label font, keep the praised monospace log styling.
- Interaction consistency: fixed Next/Previous placement across window sizes, directly clickable wizard tabs, sane resize reflow, clear tab iconography.
- Design floor: 1024×768 works; responsive resizing preserved (it's a selling moment).
- Nomenclature pass: "Suite," Gen-vs-CEM conflation, "algorithm library" opacity.
- Functionality-parity checklist per screen — nothing today's users rely on (including scripted/automated control) silently disappears in the re-skin.

## Phase 2 — Global UI

**Goal:** one shared shell — navigation, state vocabulary, sessions, logs, errors — that every installation inherits identically.

This is where the round's heaviest, most-corroborated pain lives: mode invisibility, the Options junk drawer, information-free errors, Status/Results fragmentation, session files, instrument connection. Labs run multiple installations side-by-side and expect one identical workflow — the shell is where that promise is kept. Full list: [phase-2-global-ui.md](phase-2-global-ui.md).

- Persistent state bar: compliance/user-defined mode + active preset always visible; color-coded mode framing.
- One run-state vocabulary: accurate progress, richer statuses ("waiting on trigger" vs. "analyzing"), defined Pause semantics, fast Stop, panic-stop access.
- Log system: summary + detail split (Keysight benchmark), verbose/debug level, export-logs-zip, failure cues with margin-to-limit.
- Kill the Options junk drawer: standard File-menu semantics for sessions, run modes on the run surface, instruments as a first-class setup step.
- Instrument layer: co-located connection settings, liveness/pre-flight check, user-editable equipment allowlist.
- Session files as OS citizens: visible save location, recent sessions, double-click association; retire the X: drive.
- Status/Results consolidation (pass/fail column first, merge as the target); error dialogs with real detail and next steps.
- Window management: resize everywhere (it's the root cause of the PDF-schematic hack), minimized-run-window discoverability, splash/nag show-again control.
- Layered contextual help (selection-aware → description → deep link); not per-setting question marks.
- Open decision to resolve early: Travis's launcher/global-settings layer vs. placement fixes inside the shell.

## Phase 3 — Panel UI

**Goal:** panel-by-panel workflow optimization, tuned per installation, without breaking the shared skeleton.

The common panels (DUT, Test Selection, Acquisitions, Configuration, Status, Results, Reports) carry most of the feedback; each installation then adds its own stress points — PCIe's scale, DDR's spec-less probe-centric outlier behavior, USB's compliance-only modes, DisplayPort's Clarius-migration urgency. Full list: [phase-3-panel-ui.md](phase-3-panel-ui.md).

- DUT panel: separate device profile from test plan; longer DUT IDs (root cause known); multi-select data rates.
- Test Selection: scale-proof the tree (grouping by pattern source, spec-ID naming, required-vs-informative marking with rationale); limits editor gated + bounded.
- Acquisitions: fix the pre-recorded waveform workflow (point-and-rename, grouped scannable pickers, no live-mode round-trip); keep the derived per-row context.
- Configuration/Preferences: settings tiering (spec-locked vs. editable), cross-panel dependency cues ("blue dot"), fix the two-window configuration user trap.
- Results: margin-of-failure, failure cues, live population, selective rerun with report replace/merge, column configure parity with TekScope.
- Reports: keep PDF, guarantee CSV, restore report-to-waveform links, fix anchors, selective section regeneration, size management.
- Per-installation: PCIe scale model, DDR/memory validation plan (Sam follow-up), USB test-mode clarity, DisplayPort migration, TekRx sequential wizard respect.

---

## Coverage caveats

Carried from [synthesis.md §9](synthesis.md): prototype exposure was uneven across sessions (several "no negative reaction" reads are absence of exposure, not endorsement); DDR/memory has near-zero prototype validation until Sam's follow-up happens; single-mic attribution is inferred throughout. Phase assignments are authored judgment — where an item could arguably sit in two phases it appears once, in the earliest phase that can deliver it, with a cross-note in the detail files.
