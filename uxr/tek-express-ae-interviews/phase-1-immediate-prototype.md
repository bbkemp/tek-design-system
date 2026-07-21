---
provenance: authored-analysis
authored_by: [Bryan Kemp (study lead), Claude Code (synthesis)]
authored_date: 2026-07-21
project: tek-express-ae-interviews
phase: 1
applies_to: [tek-express, tek-design-system]
related_docs: [phased-findings.md, synthesis.md]
---

> ## ⚠️ Authored analysis — not corpus
> **This document is interpretation, authored by Bryan Kemp and Claude Code on 2026-07-21.** It is opinion and synthesis, not observed fact. The system of record is the cited corpus entries (`provenance: observed`). When this analysis and a corpus entry disagree, the corpus wins.

# Phase 1 — Immediate Prototype (exhaustive)

Everything required for the lift-and-shift: the prototype becomes a faithful re-skin of today's TekExpress. **No net-new functionality.** Items are grouped as: accuracy debts → semantics that must be settled → visual tokens → interaction consistency → nomenclature → parity guarantees.

Citation format: **AE name** → corpus chunk. Chunk paths abbreviated; all live under [`corpus/sources/tek-express/walkthroughs/`](../../corpus/sources/tek-express/walkthroughs/).

## 1. Prototype accuracy debts (prototype ≠ product today)

- **Configuration screen is wrong for memory.** "This screen makes no sense for memory… they just live in a different place" — measurement-specific controls for DDR live elsewhere. **Sam** → [ae-sam-ddr-memory-feedback](../../corpus/sources/tek-express/walkthroughs/ae-sam-ddr-memory-feedback.md)
- **DUT middle section reads as "just dumping fields"** — device profile tells *what it is*, not *how I test*; acknowledged in-session as early shell. **Joey's session** → [ae-joey-chiu-dut-id-limits-and-prototype-reaction](../../corpus/sources/tek-express/walkthroughs/ae-joey-chiu-dut-id-limits-and-prototype-reaction.md)
- **Select Required is non-functional** in the current build. **Will** → [ae-will-teverovsky-test-selection-and-contextual-help](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-test-selection-and-contextual-help.md)
- **Embed filter is misplaced** relative to the real app. **Will** → [ae-will-teverovsky-acquisitions-presets-status-and-results](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-acquisitions-presets-status-and-results.md)
- **Acquisition grouping and test comments are missing.** **Will** → same chunk as above.
- **Presets are absent** from the prototype — three levels of preset expectation exist (user / TekExpress / DUT). **Will** → same chunk.
- **Application/suite label placement is wrong** vs. the current app ("it does not come here. It comes here"). **Tapo** → [ae-tapo-parua-prototype-ui-feedback](../../corpus/sources/tek-express/walkthroughs/ae-tapo-parua-prototype-ui-feedback.md)
- **Debug / Preferences links should be persistent chrome**, not panel-local. **Tapo** → same chunk.
- **The user-trap demo caveat:** the AU VoC configuration walkthrough was driven on an illustrative prototype ("not 100% accurate") — verify trap details against a live session before Phase 3 designs against them. → [configuration-user-traps-and-cockpit-view](../../corpus/sources/tek-express/walkthroughs/configuration-user-traps-and-cockpit-view.md)

## 2. Semantics to settle now (cheap now, expensive later)

- **Checkmarks = visited indicator only. Never a Start gate.** "Are you telling that if I do not have that tick marked, I should not be able to start a test?" Preferences is rarely visited; run-with-defaults from DUT alone is core behavior. **Tapo** → [ae-tapo-parua-prototype-ui-feedback](../../corpus/sources/tek-express/walkthroughs/ae-tapo-parua-prototype-ui-feedback.md); reinforced by **Will** (tab iconography/checkmarks unclear) → [ae-will-teverovsky-dut-panel-and-data-rates](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-dut-panel-and-data-rates.md)
- **Wizard tabs directly clickable** — "not always… I go in sequence." Next/Back stays, but tabs are navigation, not a rail. **Tapo** → same chunk.
- **Left-right / top-to-bottom canonical flow** preserved exactly — the guided step-down is the moat. **Dallas/Jesse veteran** → [ae-dallas-jesse-session-context-and-overall-reactions](../../corpus/sources/tek-express/walkthroughs/ae-dallas-jesse-session-context-and-overall-reactions.md); **Tapo** (universal 4-step model, "90% same in any application"; nothing executes before Start) → [ae-tapo-parua-workflow-and-settings-architecture](../../corpus/sources/tek-express/walkthroughs/ae-tapo-parua-workflow-and-settings-architecture.md)
- **Set-and-forget defaults stay the default path** — Select Required preselected; most users test only the highest data rate. **Will** → [ae-will-teverovsky-test-selection-and-contextual-help](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-test-selection-and-contextual-help.md)

## 3. Visual tokens (DS-level decisions)

- **TekScope kinship at the token level**: "your dark mode should be based on like this gray… this green should be the same as that green… if it doesn't look like TekScope, it's just going to look like 2 disconnected pieces of software." **Nadir** → [ae-nadir-kahn-competitive-landscape-and-visual-direction](../../corpus/sources/tek-express/walkthroughs/ae-nadir-kahn-competitive-landscape-and-visual-direction.md); endorsed by **Will** ("sharing colors… is great") → [ae-will-teverovsky-session-files-options-and-program-context](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-session-files-options-and-program-context.md)
- **Dark mode default; light available.** **Nadir** (default), **Dallas/Jesse** ("if you show the dark mode… it'll look better"), **Tapo** ("the white is… hurting my eye right now"). → chunks above + [ae-tapo-parua-prototype-ui-feedback](../../corpus/sources/tek-express/walkthroughs/ae-tapo-parua-prototype-ui-feedback.md)
- **Flat aesthetic + attention hierarchy** — reconcile Nadir's "too flat… web app look / AI generated Clarius look" with Dallas/Jesse's "customers love that [TekScope PC] GUI because it's flat… keep this stuff flat": TekScope's surface flatness with deliberate state/attention hierarchy ("attention items distinguishable at first glance"). **Validate with a TekScope-styled token variant before committing** — this is Open decision 2 in [synthesis.md §10](synthesis.md). 
- **Drop the stylized top-label font** that "felt a little out of place." **Will** → [ae-will-teverovsky-dut-panel-and-data-rates](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-dut-panel-and-data-rates.md)
- **Keep the monospace log styling** — explicitly praised. **Will** → [ae-will-teverovsky-acquisitions-presets-status-and-results](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-acquisitions-presets-status-and-results.md)
- **Icons: go for it** — "makes it look more professional, for sure." **Tapo** → [ae-tapo-parua-prototype-ui-feedback](../../corpus/sources/tek-express/walkthroughs/ae-tapo-parua-prototype-ui-feedback.md)
- **Type density**: Chris prefers small/compact ("everyone's gonna give you a different answer") — treat as a density token question, not a per-screen choice. **Chris B** → [ae-chrisb-setup-waveforms-and-run-modes](../../corpus/sources/tek-express/walkthroughs/ae-chrisb-setup-waveforms-and-run-modes.md)
- **Button text must never overflow** — "goes out of the [button]… 25 years ago, essentially." A DS acceptance criterion, not a bug ticket. **Nadir** → [ae-nadir-kahn-pain-points-and-automation](../../corpus/sources/tek-express/walkthroughs/ae-nadir-kahn-pain-points-and-automation.md)

## 4. Interaction consistency

- **Fixed Next/Previous placement regardless of window size** — "it'd be nice if it was just in the same spot every time, so I don't have to keep scrolling down" (he sketched fixed placement). **Sam** → [ae-sam-ddr-memory-feedback](../../corpus/sources/tek-express/walkthroughs/ae-sam-ddr-memory-feedback.md)
- **Sane resize reflow** — "if you resize it small enough, like this moves up to there… it's wonky." **Sam** → same chunk.
- **Responsive resizing itself is a validated win — preserve it.** "I'm just gonna move it and they'll be like, 'All right, sign me up'" (**Will**); "one of the biggest problems" fixed (**Nadir**); resizability is a Bryan-endorsed requirement in the AU VoC competitive review. → [ae-will-teverovsky-session-files-options-and-program-context](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-session-files-options-and-program-context.md), [ae-nadir-kahn-pain-points-and-automation](../../corpus/sources/tek-express/walkthroughs/ae-nadir-kahn-pain-points-and-automation.md), [competitive-deployment-licensing-and-status-value](../../corpus/sources/tek-express/walkthroughs/competitive-deployment-licensing-and-status-value.md)
- **Design floor 1024×768** — reconcile with the DS's container-breakpoints commitment; define the tested resolution matrix (Open decision 7). **Will** → [ae-will-teverovsky-acquisitions-presets-status-and-results](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-acquisitions-presets-status-and-results.md)
- **Tab iconography** must communicate meaning without a legend. **Will** → [ae-will-teverovsky-dut-panel-and-data-rates](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-dut-panel-and-data-rates.md)

## 5. Nomenclature pass

- **"Suite" is off** as a label. **Will** → [ae-will-teverovsky-dut-panel-and-data-rates](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-dut-panel-and-data-rates.md)
- **Gen vs. CEM spec levels conflated in one dropdown** — "those are kind of the same thing." **Will** → same chunk.
- **"Algorithm library" is opaque** to users. **Will** → same chunk.
- **"Preset" is overloaded** (preset test vs. presets applied during signal tests; equalization vs. scope presets) — confused even facilitators. **Joey's session** → [ae-joey-chiu-pcie-backward-compat-scaling](../../corpus/sources/tek-express/walkthroughs/ae-joey-chiu-pcie-backward-compat-scaling.md); **Travis** → [ae-travis-berger-launcher-global-settings-and-setup-flow](../../corpus/sources/tek-express/walkthroughs/ae-travis-berger-launcher-global-settings-and-setup-flow.md)
- **"User-defined" vs. "Debug"** — do not rename in Phase 1; it's contested (Open decision 1; the room suggested a vote). **Dallas/Jesse** → [ae-dallas-jesse-compliance-mode-and-test-selection](../../corpus/sources/tek-express/walkthroughs/ae-dallas-jesse-compliance-mode-and-test-selection.md)
- **Setting names should match industry-standard terms** where they currently deviate. **Tapo** → [ae-tapo-parua-workflow-and-settings-architecture](../../corpus/sources/tek-express/walkthroughs/ae-tapo-parua-workflow-and-settings-architecture.md)

## 6. Parity guarantees (nothing silently lost in the re-skin)

- **Automation/scripted control parity** — customers "are literally programming through this GUI" for 24-hour regression runs; must run "fully automated… without any user interaction." A per-screen parity checklist is the Phase 1 artifact; the richer automation contract is Phase 2/Open decision 10. **Nadir** → [ae-nadir-kahn-pain-points-and-automation](../../corpus/sources/tek-express/walkthroughs/ae-nadir-kahn-pain-points-and-automation.md); SCPI "backdoor" confirmed by **Travis** → [ae-travis-berger-run-environments-adoption-and-reports](../../corpus/sources/tek-express/walkthroughs/ae-travis-berger-run-environments-adoption-and-reports.md)
- **Up-front visible configuration stays** — stated competitive strength vs. LeCroy's registry-style tree ("scroll through like 3,000 things"). **Chris B** → [ae-chrisb-setup-waveforms-and-run-modes](../../corpus/sources/tek-express/walkthroughs/ae-chrisb-setup-waveforms-and-run-modes.md)
- **Signal validation stays** ("this is actually an advantage for us") — behavior refinement is Phase 3. **Dallas/Jesse** → [ae-dallas-jesse-compliance-mode-and-test-selection](../../corpus/sources/tek-express/walkthroughs/ae-dallas-jesse-compliance-mode-and-test-selection.md)
- **Acquisition table's derived per-row context stays** ("Lane Zero, PRTS 7, P0 — that is way better than it used to be"). **Dallas/Jesse** → [ae-dallas-jesse-instruments-sessions-results-debug](../../corpus/sources/tek-express/walkthroughs/ae-dallas-jesse-instruments-sessions-results-debug.md)
- **Report structure stays** — "kind of accepted in the industry"; restyle, don't restructure. **Chris B** → [ae-chrisb-reports-and-rerun-workflow](../../corpus/sources/tek-express/walkthroughs/ae-chrisb-reports-and-rerun-workflow.md)
- **Custom customer logo** capability stays (demo-whitelabeling reason: hides "whose test equipment they were using") and should be findable under settings. **Chris B** → same chunk.
- **EXE / on-scope, never browser** — platform decision already aligned; on-scope is a moat vs. R&S laptop-hosted. **Will's session** → [ae-will-teverovsky-session-files-options-and-program-context](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-session-files-options-and-program-context.md); **Nadir** → [ae-nadir-kahn-competitive-landscape-and-visual-direction](../../corpus/sources/tek-express/walkthroughs/ae-nadir-kahn-competitive-landscape-and-visual-direction.md)

## 7. Rollout posture (Phase 1 framing, not features)

- **Ship fast beats polish** — "getting it done and out as fast as possible is much more important"; staged rollout avoids "phobia of new user experience." **Nadir** → [ae-nadir-kahn-competitive-landscape-and-visual-direction](../../corpus/sources/tek-express/walkthroughs/ae-nadir-kahn-competitive-landscape-and-visual-direction.md)
- **"Don't change it" structurally** — reskin + placement fixes, "not too drastic"; customers embedded in it dislike change. Third independent Clarius warning. **Travis** → [ae-travis-berger-run-environments-adoption-and-reports](../../corpus/sources/tek-express/walkthroughs/ae-travis-berger-run-environments-adoption-and-reports.md)
- **Additive adoption aids are in-scope**: first-run dismissible tutorial overlay; onboarding thought for the older Keysight-migrant population. **Travis** → same chunk.
- **Demo/perception value is real** — old software makes the hardware look old; the new skin is itself a sales asset. **Nadir** → [ae-nadir-kahn-pain-points-and-automation](../../corpus/sources/tek-express/walkthroughs/ae-nadir-kahn-pain-points-and-automation.md); "they're going to like this better because it's new" (drop-in AE) → [ae-joey-chiu-dut-id-limits-and-prototype-reaction](../../corpus/sources/tek-express/walkthroughs/ae-joey-chiu-dut-id-limits-and-prototype-reaction.md)
