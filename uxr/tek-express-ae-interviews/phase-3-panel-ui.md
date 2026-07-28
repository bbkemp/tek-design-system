---
provenance: authored-analysis
authored_by: [Bryan Kemp (study lead), Claude Code (synthesis)]
authored_date: 2026-07-21
project: tek-express-ae-interviews
phase: 3
applies_to: [tek-express, tek-design-system]
related_docs: [phased-findings.md, synthesis.md]
---

> ## ⚠️ Authored analysis — not corpus
> **This document is interpretation, authored by Bryan Kemp and Claude Code on 2026-07-21.** It is opinion and synthesis, not observed fact. The system of record is the cited corpus entries (`provenance: observed`). When this analysis and a corpus entry disagree, the corpus wins.

# Phase 3 — Panel UI (exhaustive)

Panel-by-panel workflow optimization, grouped by installation. Most feedback applies to the **common panels all installations share** — that group comes first, panel by panel in wizard order. Installation-specific sections follow. Chunk paths abbreviated; all under [`corpus/sources/tek-express/walkthroughs/`](../../corpus/sources/tek-express/walkthroughs/).

---

## A. All installations — panel by panel

### A1. DUT panel

- **Separate device profile from test plan** — lane width is "more of a [DUT] characteristic"; "the data rates I'm about to test is more of like a multi-select rather than a drop-down." **Will** → [ae-will-teverovsky-dut-panel-and-data-rates](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-dut-panel-and-data-rates.md)
- **DUT ID to ~200 characters** — "The biggest complaint I've had lately… The customers hate it" (drop-in AE); customers encode chip version + report number (**Nadir**). Root cause: Windows path limits from appended folder naming; fix path named (long-path registry support) — "whatever way you can fix it, fix it." → [ae-joey-chiu-dut-id-limits-and-prototype-reaction](../../corpus/sources/tek-express/walkthroughs/ae-joey-chiu-dut-id-limits-and-prototype-reaction.md), [ae-nadir-kahn-pain-points-and-automation](../../corpus/sources/tek-express/walkthroughs/ae-nadir-kahn-pain-points-and-automation.md)
- **Keep DUT high-level** — "don't dump settings onto the first panel"; the DUT menus are "pretty good" today. **Dallas/Tony** → [ae-dallas-tony-setup-flow-friction](../../corpus/sources/tek-express/walkthroughs/ae-dallas-tony-setup-flow-friction.md). Counter-pressure exists — AEs lobby to surface their settings on panel 1; Tapo wants the UX team as arbiter. **Tapo** → [ae-tapo-parua-workflow-and-settings-architecture](../../corpus/sources/tek-express/walkthroughs/ae-tapo-parua-workflow-and-settings-architecture.md)
- **Slot-number/"auto" field is unused** — "I haven't had anyone use that… most people don't." Candidate for demotion. **Joey's session** → [ae-joey-chiu-pcie-backward-compat-scaling](../../corpus/sources/tek-express/walkthroughs/ae-joey-chiu-pcie-backward-compat-scaling.md)
- **DUT settings gray out dependent tests in the tree** (SSC example) — behavior to preserve and make legible. **Tapo** → [ae-tapo-parua-workflow-and-settings-architecture](../../corpus/sources/tek-express/walkthroughs/ae-tapo-parua-workflow-and-settings-architecture.md)

### A2. Test Selection panel

- **Scale-proof the tree** — "good for like… 20 tests, but if there are like 200 tests there on a tree, [it] often gets very difficult to select things." **Joey** → [ae-joey-chiu-pcie-backward-compat-scaling](../../corpus/sources/tek-express/walkthroughs/ae-joey-chiu-pcie-backward-compat-scaling.md)
- **Group tests by pattern source**; tooltips showing required pattern per test. **Dallas/Tony** → [ae-dallas-tony-setup-flow-friction](../../corpus/sources/tek-express/walkthroughs/ae-dallas-tony-setup-flow-friction.md)
- **Test names match spec test IDs.** **Dallas/Tony** → same chunk.
- **Required-vs-informative marking with rationale tooltips.** **Will** → [ae-will-teverovsky-test-selection-and-contextual-help](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-test-selection-and-contextual-help.md)
- **Smart mutually-exclusive selection** — kill the "check one before you uncheck the other" dance; non-exclusive toggles that can't both be off. **Dallas/Tony** → [ae-dallas-tony-setup-flow-friction](../../corpus/sources/tek-express/walkthroughs/ae-dallas-tony-setup-flow-friction.md)
- **Two-tab test selection gets missed** — users don't find the second tab. **Travis** → [ae-travis-berger-launcher-global-settings-and-setup-flow](../../corpus/sources/tek-express/walkthroughs/ae-travis-berger-launcher-global-settings-and-setup-flow.md)
- **Tree navigation is industry-standard (Keysight uses it too)** — a differentiation opportunity, not a convention to copy blindly. **Joey** → [ae-joey-chiu-pcie-backward-compat-scaling](../../corpus/sources/tek-express/walkthroughs/ae-joey-chiu-pcie-backward-compat-scaling.md)

### A3. Limits editor (within Test Selection/Configuration)

- **Gate behind the user-defined toggle** with warning + grayed state. **Will** → [ae-will-teverovsky-test-selection-and-contextual-help](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-test-selection-and-contextual-help.md)
- **Bound the layout** — "super long… a horizontal scroll, but that also does not suffice." **Joey's session** → [ae-joey-chiu-pcie-backward-compat-scaling](../../corpus/sources/tek-express/walkthroughs/ae-joey-chiu-pcie-backward-compat-scaling.md)
- **Chip-development customers iterate against internal spec limits via CSV** — keep the CSV path first-class. **Tapo** → [ae-tapo-parua-workflow-and-settings-architecture](../../corpus/sources/tek-express/walkthroughs/ae-tapo-parua-workflow-and-settings-architecture.md)

### A4. Acquisitions panel

- **Fix the pre-recorded waveform workflow** (three-way corroborated): filename convention carries metadata customers never follow — "If I have to remember what that name's supposed to be… good luck" (**Chris B**); AEs connect an AWG just to harvest correct names (**Dallas/Tony**: "we've made it so hard… the messages were terrible"); DDR failures round-trip through live mode (**Joe**). Fix shape: point-and-rename dialog mapping files → signals ("I can tell it this is my PRBS 0 waveform on channel one… Just make it rename it for me"). → [ae-chrisb-setup-waveforms-and-run-modes](../../corpus/sources/tek-express/walkthroughs/ae-chrisb-setup-waveforms-and-run-modes.md), [ae-dallas-tony-setup-flow-friction](../../corpus/sources/tek-express/walkthroughs/ae-dallas-tony-setup-flow-friction.md), [ae-joe-swelland-ddr-memory-feedback](../../corpus/sources/tek-express/walkthroughs/ae-joe-swelland-ddr-memory-feedback.md)
- **No live↔pre-recorded settings trap** — "why can't I control this from pre-recorded mode in the first place?" (**Joe**); settings locked in pre-recorded mode force switching back and forth (**Chris B**). → chunks above
- **De-embed/filter assignment must be scannable** — "you kind of get this just big giant list of like file pathways"; group filters by measurement, picker-style. **Joe** → [ae-joe-swelland-ddr-memory-feedback](../../corpus/sources/tek-express/walkthroughs/ae-joe-swelland-ddr-memory-feedback.md)
- **Copy-path / open-in-File-Explorer for waveforms.** **Will** → [ae-will-teverovsky-acquisitions-presets-status-and-results](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-acquisitions-presets-status-and-results.md)
- **Math waveforms as sources.** **Dallas/Tony** → [ae-dallas-tony-instruments-sessions-results-debug](../../corpus/sources/tek-express/walkthroughs/ae-dallas-tony-instruments-sessions-results-debug.md)
- **Keep the derived per-row context** ("Lane Zero, PRTS 7, P0 — way better than it used to be"). **Dallas/Tony** → same chunk.
- **Acquisition-speed opportunities (backend, UX-visible):** don't reset instruments between acquisitions ("We would speed ourselves up 30 and 40%"); parallel lane acquisition ("4 minutes instead of 30"). **Dallas/Tony** → [ae-dallas-tony-compliance-mode-and-test-selection](../../corpus/sources/tek-express/walkthroughs/ae-dallas-tony-compliance-mode-and-test-selection.md)

### A5. Configuration / Preferences panels

- **Fix the two-window configuration user trap** — test-specific configuration invisible until a test row is highlighted, split across two windows from global settings; the WPF-era three-pane Outlook-style "cockpit view" (built with Hemant; wireframes promised) is prior art. → [configuration-user-traps-and-cockpit-view](../../corpus/sources/tek-express/walkthroughs/configuration-user-traps-and-cockpit-view.md). (Caveat: demoed on an illustrative prototype — verify against a live session.)
- **Settings tiering: spec-locked vs. user-editable** — "scope bandwidth is actually locked because this is spec required." **Joey's session** → [ae-joey-chiu-pcie-backward-compat-scaling](../../corpus/sources/tek-express/walkthroughs/ae-joey-chiu-pcie-backward-compat-scaling.md)
- **Cross-panel dependency cues** — the "blue dot" non-blocking indicator when a change on one panel alters values elsewhere; interdependent settings "spanned across pages… not visible at the same time." **Tapo** → [ae-tapo-parua-workflow-and-settings-architecture](../../corpus/sources/tek-express/walkthroughs/ae-tapo-parua-workflow-and-settings-architecture.md)
- **"This will change A, B, C — continue/cancel" dialogs** for silent cascading setting changes ("You thought you were changing one field before fields change"). **Dallas/Tony** → [ae-dallas-tony-setup-flow-friction](../../corpus/sources/tek-express/walkthroughs/ae-dallas-tony-setup-flow-friction.md)
- **Global/local paradigm for signal validation** (modeled live on the scope's measurement settings) with "run anyway but flag validation failure" replacing the confusing third choice. **Dallas/Tony** → [ae-dallas-tony-compliance-mode-and-test-selection](../../corpus/sources/tek-express/walkthroughs/ae-dallas-tony-compliance-mode-and-test-selection.md)
- **7-series channel defaults** — "always defaults to one and three… on the seven series, there's no shared resources"; wants global, scope-model-aware preferred channels (feeds the Phase 2 launcher decision). **Travis** → [ae-travis-berger-launcher-global-settings-and-setup-flow](../../corpus/sources/tek-express/walkthroughs/ae-travis-berger-launcher-global-settings-and-setup-flow.md)
- **"Rethink the tabs — were they necessary, or were they just there?"**; "this menu feeds the next menu" — key info in both selection and detail. **Dallas/Tony** → [ae-dallas-tony-setup-flow-friction](../../corpus/sources/tek-express/walkthroughs/ae-dallas-tony-setup-flow-friction.md)

### A6. Status / Log panels

(Shell-level state vocabulary is Phase 2; panel-level specifics here.)

- **Test Status is a customer-facing demo surface** — "we're on preset 6… you can watch it live" — design it to be watched. **Chris B** → [ae-chrisb-setup-waveforms-and-run-modes](../../corpus/sources/tek-express/walkthroughs/ae-chrisb-setup-waveforms-and-run-modes.md)
- **Connection/channel column in Status.** **Dallas/Tony** → [ae-dallas-tony-instruments-sessions-results-debug](../../corpus/sources/tek-express/walkthroughs/ae-dallas-tony-instruments-sessions-results-debug.md)
- **Resizable console-log layout** — top two-thirds content, bottom third log. **Chris B** → [ae-chrisb-setup-waveforms-and-run-modes](../../corpus/sources/tek-express/walkthroughs/ae-chrisb-setup-waveforms-and-run-modes.md)
- **Log View is the debug surface** (failures/hangs) — keep it strong; 7-series signal-validation false positives observed. **Chris B**, **Travis** → chunks above + [ae-travis-berger-run-environments-adoption-and-reports](../../corpus/sources/tek-express/walkthroughs/ae-travis-berger-run-environments-adoption-and-reports.md)

### A7. Results panel

- **Margin-to-limit, not just green** — "that green would not suggest… whether it is a good pass or a bad pass" (**Tapo**); "am I a couple millivolts off?" (**Will**). → [ae-tapo-parua-workflow-and-settings-architecture](../../corpus/sources/tek-express/walkthroughs/ae-tapo-parua-workflow-and-settings-architecture.md), [ae-will-teverovsky-acquisitions-presets-status-and-results](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-acquisitions-presets-status-and-results.md)
- **Failure cues surfaced in-panel** — "it is almost difficult to find… where that one or 2 fails are. So normally… they download a report and then scan that report." **Tapo** → same chunk.
- **Results populate live.** **Will** → [ae-will-teverovsky-acquisitions-presets-status-and-results](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-acquisitions-presets-status-and-results.md)
- **Selective rerun with result replacement** — "If the test took eight hours to run… let me run this one test. Give me the choice to replace the results" (**Dallas/Tony**); rerun-failed-only with append/replace choice; right-click debug menu on a failed result (rerun compliance / rerun user-defined / export scope session). → [ae-dallas-tony-instruments-sessions-results-debug](../../corpus/sources/tek-express/walkthroughs/ae-dallas-tony-instruments-sessions-results-debug.md)
- **Column add/remove + TekScope results-table configure parity** (team-endorsed); spec-version column. **Dallas/Tony** → same chunk.
- **Plots from analysis tools surfaced in results** (and reports). **Dallas/Tony** → same chunk. (Depends on the chart-library decision — Open decision 5.)
- **(Future, flagged as net-new)** auto-load failing waveform on the scope for debug — "a cue to go and check this then and there." **Tapo** → [ae-tapo-parua-workflow-and-settings-architecture](../../corpus/sources/tek-express/walkthroughs/ae-tapo-parua-workflow-and-settings-architecture.md)

### A8. Reports panel

- **Selective rerun → report section replace/merge** — "have it update my report… and replace just that section" (**Chris B**); rerun-and-merge is "a common use case" needing intuitiveness (**Tapo**). → [ae-chrisb-reports-and-rerun-workflow](../../corpus/sources/tek-express/walkthroughs/ae-chrisb-reports-and-rerun-workflow.md), [ae-tapo-parua-prototype-ui-feedback](../../corpus/sources/tek-express/walkthroughs/ae-tapo-parua-prototype-ui-feedback.md)
- **Formats:** keep PDF (distributed artifact, worldwide sites); **CSV is a must** ("a data dump that they use to create their custom reports"); MHT is dead; in-app HTML preview (Keysight parity); Markdown received positively. **Tapo**, **Nadir** → [ae-tapo-parua-prototype-ui-feedback](../../corpus/sources/tek-express/walkthroughs/ae-tapo-parua-prototype-ui-feedback.md), [ae-nadir-kahn-pain-points-and-automation](../../corpus/sources/tek-express/walkthroughs/ae-nadir-kahn-pain-points-and-automation.md)
- **Vendor-neutral report template + CSV export for cross-vendor programs** — customers hand-correlate Tek and Keysight reports today. **Travis** → [ae-travis-berger-run-environments-adoption-and-reports](../../corpus/sources/tek-express/walkthroughs/ae-travis-berger-run-environments-adoption-and-reports.md)
- **Restore report-to-waveform hyperlinks** — "Bam, I could go right to the waveform that failed… saved me so much headache." **Travis** → same chunk.
- **Fix broken anchor links + add back-to-top** in HTML reports. **Chris B** → [ae-chrisb-reports-and-rerun-workflow](../../corpus/sources/tek-express/walkthroughs/ae-chrisb-reports-and-rerun-workflow.md)
- **Report scope options that communicate** — pass-only (SIG submission) vs. everything; labels currently don't explain function ("I don't know exactly what the functionality of it is"). **Chris B** → same chunk.
- **Multi-run aggregate report** — "run five times and they want all the data from every time." **Chris B** → same chunk.
- **Report size management** — PCIe Gen 5 reports "ten to 11 megabytes each… fill up the SSD of the SX." **Nadir** → [ae-nadir-kahn-pain-points-and-automation](../../corpus/sources/tek-express/walkthroughs/ae-nadir-kahn-pain-points-and-automation.md)
- **Report generation speed is a strength** — surprised Chris positively; don't regress it. **Chris B** → [ae-chrisb-reports-and-rerun-workflow](../../corpus/sources/tek-express/walkthroughs/ae-chrisb-reports-and-rerun-workflow.md)

---

## B. Per-installation specifics

### B1. PCI Express — design against this one first

"The super set of stupid" — design for PCIe and everything else follows (**Dallas/Tony**); ~50% of the business (**product leader**); "inarguably the one to focus on first" (**Will**). → [ae-dallas-tony-setup-flow-friction](../../corpus/sources/tek-express/walkthroughs/ae-dallas-tony-setup-flow-friction.md), [ae-will-teverovsky-session-files-options-and-program-context](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-session-files-options-and-program-context.md)

- **Data-rate model** — "Gen 12, Gen 13… another real estate problem or an overload of settings problems?"; "Gen 7 and then Gen 8… it's just gonna explode the UI." Options on the table: compact table instead of per-rate checkboxes, per-rate tabs with shorter trees, multi-select. Needs a design spike at Gen-7 scale (Open decision 4). **Joey** → [ae-joey-chiu-pcie-backward-compat-scaling](../../corpus/sources/tek-express/walkthroughs/ae-joey-chiu-pcie-backward-compat-scaling.md)
- **Preset selection out of the wrong tab** — hidden placement silently costs 10×: "they might miss out and ultimately run with all the presets and it will take maybe 10 times more time." Merge into test selection (Joey: "I'm not really a fan" of today's split). **Joey** → same chunk.
- **Presets as list rows, not tabs.** **Dallas/Tony** → [ae-dallas-tony-compliance-mode-and-test-selection](../../corpus/sources/tek-express/walkthroughs/ae-dallas-tony-compliance-mode-and-test-selection.md)
- **Progressive disclosure of prior-generation settings** — <50% of users ever touch them; "have access to it, but not… scrolling forever." **Joey** → [ae-joey-chiu-pcie-backward-compat-scaling](../../corpus/sources/tek-express/walkthroughs/ae-joey-chiu-pcie-backward-compat-scaling.md)
- **Compliance ≠ one run** — users split data rates across runs; "compliance doesn't require you just complete everything in one run"; characterization runs all presets, compliance users "already know these two presets." Model both. **Joey** → same chunk.
- **Preset semantics** = spec equalization settings (P4 flat-EQ reference); SigTest is the consortium-mandated black box doing PCIe analysis. **Travis**, **Tapo** → [ae-travis-berger-launcher-global-settings-and-setup-flow](../../corpus/sources/tek-express/walkthroughs/ae-travis-berger-launcher-global-settings-and-setup-flow.md), [ae-tapo-parua-workflow-and-settings-architecture](../../corpus/sources/tek-express/walkthroughs/ae-tapo-parua-workflow-and-settings-architecture.md)
- **Preset duplication in two windows** — "I actually don't know. I think they're the same." **Travis** → [ae-travis-berger-launcher-global-settings-and-setup-flow](../../corpus/sources/tek-express/walkthroughs/ae-travis-berger-launcher-global-settings-and-setup-flow.md)
- **Workshop reality:** lane-0-only at compliance workshops (time); DUT-ID-in-filenames exists for Plugfest attribution. **Travis**, **Joey's session** → chunks above.

### B2. DDR / Memory — the spec-less outlier

**Any redesign validated only on spec-driven plugins will miss memory.** "The DDR version is kind of the only one that's assuming you're using the probes"; no test specifications → "a lot more flexibility… so when you switch to offline mode, there's a lot of assumptions that Tek Express is making that the user is not aware of." **Joe** → [ae-joe-swelland-ddr-memory-feedback](../../corpus/sources/tek-express/walkthroughs/ae-joe-swelland-ddr-memory-feedback.md)

- **Surface the hidden offline-mode assumptions** (acquisitions named as another hidden-assumption spot).
- **Co-locate probe controls** — tri-mode (A/B/differential) + voltage levels + channel assignment live in different windows; "probably should be in the same spot because I'm kind of bouncing around."
- **Probes move channels constantly** — what makes the mode-locked settings so costly for DDR specifically.
- **Configuration panel needs a memory variant** (Phase 1 accuracy debt, but the *design* of memory-specific configuration is Phase 3).
- **Validation plan required** — Joe's session was 9:35 truncated (bench lacked the plugin; TekExpress hung at launch); a follow-up was agreed in-session. Open decision 9. All → same chunk.
- **DDR history caveat:** DDR was a research mis-start once before (fragmented across DPOJET/Clarius/TekExpress). **Will's session** → [ae-will-teverovsky-session-files-options-and-program-context](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-session-files-options-and-program-context.md)

### B3. USB

- **Test-mode dropdown appears/disappears per application** (USB = compliance-only) — confused even the AE; make mode surface consistent across installations. **Chris B** → [ae-chrisb-setup-waveforms-and-run-modes](../../corpus/sources/tek-express/walkthroughs/ae-chrisb-setup-waveforms-and-run-modes.md)
- **User-defined test modes matter** for margin testing and military/proprietary targets ("not going to be sold at Best Buy"). **Chris B** → same chunk.
- **Loop run modes on the run surface** (loop-until-failure / until-pass / ×N) — Chris's self-declared #1, raised in a USB workshop context but global in value (also listed under Phase 2 Options unburying). → [ae-chrisb-setup-waveforms-and-run-modes](../../corpus/sources/tek-express/walkthroughs/ae-chrisb-setup-waveforms-and-run-modes.md)

### B4. DisplayPort

- **Next after PCIe** — Clarius licensing migration creates urgency (13 licenses to migrate). **Will's session** → [ae-will-teverovsky-session-files-options-and-program-context](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-session-files-options-and-program-context.md)
- **8-hour DisplayPort runs** are the motivating case for status visibility (Phase 2). → [competitive-deployment-licensing-and-status-value](../../corpus/sources/tek-express/walkthroughs/competitive-deployment-licensing-and-status-value.md)
- **Harvest Clarius** — merged status+results, connectivity LED, praised-but-commercially-failed redesign ("the best thing about it is that it works"). **Will's session** → [ae-will-teverovsky-acquisitions-presets-status-and-results](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-acquisitions-presets-status-and-results.md)

### B5. TekRx / receiver-side

- **TekRx is inherently sequential** (calibration dependencies) — the wizard pattern is fundamental, not a UX choice; respect it in any shared-shell work. → [ux-feedback-and-open-questions](../../corpus/sources/tek-express/walkthroughs/ux-feedback-and-open-questions.md) (April 2026, Mahesha)
- **LeCroy has the only combined TX+RX interface** — the competitive reference point for any future TX/RX convergence. **Nadir** → [ae-nadir-kahn-competitive-landscape-and-visual-direction](../../corpus/sources/tek-express/walkthroughs/ae-nadir-kahn-competitive-landscape-and-visual-direction.md)
- **Study-mix note:** conformance products "cannot [share] a unified workflow" — span compliance + conformance (PCI/DisplayPort/MIPI) in future rounds. **Will's session** → [ae-will-teverovsky-session-files-options-and-program-context](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-session-files-options-and-program-context.md)

---

## C. Differentiator candidates surfaced by panel work (net-new — explicitly beyond lift-and-shift)

Logged here because they emerged from panel walkthroughs; every one is an open decision, not a commitment.

- **Scope-session debug export** (.TSS with measurement, limits, waveforms) from a failed result — technician → SI-engineer handoff. "No one does that. We would win based on that." Structurally hard for Keysight to copy (their algorithms don't run in the scope: "They can never debug it"). Open decision 8. **Dallas/Tony** → [ae-dallas-tony-instruments-sessions-results-debug](../../corpus/sources/tek-express/walkthroughs/ae-dallas-tony-instruments-sessions-results-debug.md)
- **"Load on TekScope" share action** for waveforms (product leader). → [ae-will-teverovsky-acquisitions-presets-status-and-results](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-acquisitions-presets-status-and-results.md)
- **Tek HSI waveform offload** for faster analysis on old-scope CPUs. **Travis** → [ae-travis-berger-run-environments-adoption-and-reports](../../corpus/sources/tek-express/walkthroughs/ae-travis-berger-run-environments-adoption-and-reports.md)
- **Multi-PC "cockpit view" control station** — Q2 roadmap item disclosed in-session; the decade-old three-pane cockpit prototype is prior art. → [ae-will-teverovsky-session-files-options-and-program-context](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-session-files-options-and-program-context.md), [configuration-user-traps-and-cockpit-view](../../corpus/sources/tek-express/walkthroughs/configuration-user-traps-and-cockpit-view.md)
- **North Star** (product leader): "I don't add a single line into my user manual" — the panel redesign's success metric is self-evidence, not documentation. → [ae-will-teverovsky-session-files-options-and-program-context](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-session-files-options-and-program-context.md)
