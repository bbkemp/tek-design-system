---
provenance: authored-analysis
authored_by: [Bryan Kemp (study lead), Claude Code (synthesis)]
authored_date: 2026-07-21
project: tek-express-ae-interviews
phase: 2
applies_to: [tek-express, tek-design-system]
related_docs: [phased-findings.md, synthesis.md]
---

> ## ⚠️ Authored analysis — not corpus
> **This document is interpretation, authored by Bryan Kemp and Claude Code on 2026-07-21.** It is opinion and synthesis, not observed fact. The system of record is the cited corpus entries (`provenance: observed`). When this analysis and a corpus entry disagree, the corpus wins.

# Phase 2 — Global UI (exhaustive)

The wrapping shell every installation shares: navigation, run/test/pass/fail/pause state vocabulary, sessions, logs, errors, instruments, windows, help. Labs run DisplayPort + USB + Thunderbolt side-by-side and **expect one identical workflow** (Tapo) — the shell is the contract. Grouped by system. Chunk paths abbreviated; all under [`corpus/sources/tek-express/walkthroughs/`](../../corpus/sources/tek-express/walkthroughs/).

## 1. Persistent state: mode + preset always visible

- **Mode state (compliance vs. user-defined) is invisible today** — one dismissable popup, then "for 45 minutes… you will only know that in the report." Cost: "Oh, crap, I just spent two days just not realizing that it's not compliant" (**Dallas/Tony**); "constant confusion… make it painfully clear" (**Gary**, Will's session). → [ae-dallas-tony-compliance-mode-and-test-selection](../../corpus/sources/tek-express/walkthroughs/ae-dallas-tony-compliance-mode-and-test-selection.md), [ae-will-teverovsky-test-selection-and-contextual-help](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-test-selection-and-contextual-help.md)
- **Persistent status bar carries mode + current preset** — "presets should be very visible almost all the time" (**Will**); the prototype's liked bottom bar is the natural home. → [ae-will-teverovsky-acquisitions-presets-status-and-results](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-acquisitions-presets-status-and-results.md)
- **Color-coded frame per mode** as reinforcement. **Dallas/Tony** → [ae-dallas-tony-compliance-mode-and-test-selection](../../corpus/sources/tek-express/walkthroughs/ae-dallas-tony-compliance-mode-and-test-selection.md)
- **Rework/watermark precedent**: custom limits already watermark the report non-compliant — the UI state should telegraph the same thing live. **Tapo** → [ae-tapo-parua-workflow-and-settings-architecture](../../corpus/sources/tek-express/walkthroughs/ae-tapo-parua-workflow-and-settings-architecture.md)

## 2. Run-state vocabulary (run / test / pass / fail / pause / stop)

- **Progress must be honest** — "progress bars are like here and then here and then here… people can't really tell what's going on"; "not accurate enough" is standing field feedback. **Nadir** → [ae-nadir-kahn-pain-points-and-automation](../../corpus/sources/tek-express/walkthroughs/ae-nadir-kahn-pain-points-and-automation.md)
- **Richer run statuses** — distinguish "waiting on a trigger" from "analyzing" from legitimately-slow processing (**Will**, **Nadir**); "a test runs for maybe hours… how do I know where I am exactly?" (**Tapo**). → [ae-will-teverovsky-acquisitions-presets-status-and-results](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-acquisitions-presets-status-and-results.md), [ae-tapo-parua-workflow-and-settings-architecture](../../corpus/sources/tek-express/walkthroughs/ae-tapo-parua-workflow-and-settings-architecture.md)
- **Status visibility is the product's value** — "the biggest value… is letting know the user the status of the system at any given point in time" (Subhasis; 8-hour DisplayPort runs). Elevate Status/Log in hierarchy. → [competitive-deployment-licensing-and-status-value](../../corpus/sources/tek-express/walkthroughs/competitive-deployment-licensing-and-status-value.md)
- **Stop must be fast** — "Everybody complains about stopping a test and having to wait for it to process"; kill-process-style instant stop asked. Pause "works like immediately" — keep. **Travis** → [ae-travis-berger-status-results-sessions-and-run-window](../../corpus/sources/tek-express/walkthroughs/ae-travis-berger-status-results-sessions-and-run-window.md)
- **Opaque Stop state** — "it says 'stopping your progress' — why is that happening? I don't quite know." **Travis** → same chunk.
- **Defined Pause semantics + step rewind + breakpoints** (concept liked, behavior undefined); mid-run config edits ride the MVVM re-architecture ("run 5, fix the 7th, continue"). **Dallas/Tony** → [ae-dallas-tony-instruments-sessions-results-debug](../../corpus/sources/tek-express/walkthroughs/ae-dallas-tony-instruments-sessions-results-debug.md)
- **Panic-stop access without permanent prominence** — run controls reachable always, not dominating. **Will** → [ae-will-teverovsky-acquisitions-presets-status-and-results](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-acquisitions-presets-status-and-results.md)
- **Minimized run window** must not hide behind the scope UI; "most don't even know that you could bring it back up." **Travis** → [ae-travis-berger-status-results-sessions-and-run-window](../../corpus/sources/tek-express/walkthroughs/ae-travis-berger-status-results-sessions-and-run-window.md)

## 3. Logs and errors

- **Summary + detail split log** (Keysight benchmark): click a message for description; needs a framework interface so app teams feed structured logs. **Tapo** → [ae-tapo-parua-workflow-and-settings-architecture](../../corpus/sources/tek-express/walkthroughs/ae-tapo-parua-workflow-and-settings-architecture.md)
- **Errors with real content** — "They'll pop up a dialogue and… the information is just missing. I don't know what to do with that and I work here." Space for detail + possible fixes; no 32-character excuses. **Dallas/Tony** → [ae-dallas-tony-setup-flow-friction](../../corpus/sources/tek-express/walkthroughs/ae-dallas-tony-setup-flow-friction.md)
- **"Flat logging" is an app-team self-critique too** — "we did not get a lot of information from it." → [ae-joey-chiu-pcie-backward-compat-scaling](../../corpus/sources/tek-express/walkthroughs/ae-joey-chiu-pcie-backward-compat-scaling.md)
- **Verbose/debug log level + Export Log Files → zip** (Riddick precedent) — AEs are "always sending stuff to the software team." **Travis** → [ae-travis-berger-status-results-sessions-and-run-window](../../corpus/sources/tek-express/walkthroughs/ae-travis-berger-status-results-sessions-and-run-window.md)
- **Log visibility: discoverable, not always-popped** — "you do not have to always pop things out for a user for convenience." **Tapo** → [ae-tapo-parua-workflow-and-settings-architecture](../../corpus/sources/tek-express/walkthroughs/ae-tapo-parua-workflow-and-settings-architecture.md)
- **Warning/splash/nag dialogs need show-again control** — "really good control of, do you want to see this again over and over again?" **Nadir** → [ae-nadir-kahn-pain-points-and-automation](../../corpus/sources/tek-express/walkthroughs/ae-nadir-kahn-pain-points-and-automation.md)
- **Session-recall warnings must be actionable** — today: "Contact your Tektronix local representative." **Dallas/Tony** → [ae-dallas-tony-instruments-sessions-results-debug](../../corpus/sources/tek-express/walkthroughs/ae-dallas-tony-instruments-sessions-results-debug.md)

## 4. Kill the Options junk drawer

- "All the crap is in options" (product leader); "the option menu overall probably just needs somewhat of an overhaul rework… I hate the save and recall stuff being in here" (**Will**); "The options screen is very confusing. It's not options" (**Travis**); loop run modes "don't bury it in the menu. You got real estate… that's probably my number one" (**Chris B**); instrument settings "slightly hidden" (**Joey's session**). → [ae-will-teverovsky-session-files-options-and-program-context](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-session-files-options-and-program-context.md), [ae-travis-berger-bench-setup-and-instrument-connection](../../corpus/sources/tek-express/walkthroughs/ae-travis-berger-bench-setup-and-instrument-connection.md), [ae-chrisb-setup-waveforms-and-run-modes](../../corpus/sources/tek-express/walkthroughs/ae-chrisb-setup-waveforms-and-run-modes.md), [ae-joey-chiu-pcie-backward-compat-scaling](../../corpus/sources/tek-express/walkthroughs/ae-joey-chiu-pcie-backward-compat-scaling.md)
- **Placement pass over everything under Options**: standard File-menu semantics for session save/recall; run modes (loop-until-fail/pass/×N) on the run surface; instruments as a first-class setup step.
- **Settings are "the top drawer" scattered everywhere — consolidate globally.** **Travis** → [ae-travis-berger-launcher-global-settings-and-setup-flow](../../corpus/sources/tek-express/walkthroughs/ae-travis-berger-launcher-global-settings-and-setup-flow.md)
- **Open decision 11 — the launcher/global-settings layer** (R&S single block-diagram launcher pattern): channel defaults, instrument connections, save-waveform, preferences hoisted above any one technology app. Resolve early in Phase 2 — it determines whether the junk-drawer fix is placement or architecture. **Travis** → same chunk; [synthesis.md §10](synthesis.md).

## 5. Instruments layer

- **Connection settings co-located and top-level** — "Customers don't know to go in there to connect"; duplicated today (Options + Configuration). **Travis** → [ae-travis-berger-bench-setup-and-instrument-connection](../../corpus/sources/tek-express/walkthroughs/ae-travis-berger-bench-setup-and-instrument-connection.md); **Joey's session consensus** (physical-setup step) → [ae-joey-chiu-pcie-backward-compat-scaling](../../corpus/sources/tek-express/walkthroughs/ae-joey-chiu-pcie-backward-compat-scaling.md)
- **Liveness / pre-flight check** — "can I ping it? Is it working?"; car-dashboard analogy ("is the AWG alive?"); Clarius has a connectivity LED. **Will + product leader** → [ae-will-teverovsky-acquisitions-presets-status-and-results](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-acquisitions-presets-status-and-results.md)
- **LAN detection is flaky** — "it doesn't always refresh in here… I usually just use USB if it's available." **Travis** → [ae-travis-berger-bench-setup-and-instrument-connection](../../corpus/sources/tek-express/walkthroughs/ae-travis-berger-bench-setup-and-instrument-connection.md)
- **User-editable equipment allowlist** — hard-coded model numbers break automation on B-revisions; "we wait three to six months for software updates so we can use an instrument that we came out with." **Dallas/Tony** → [ae-dallas-tony-instruments-sessions-results-debug](../../corpus/sources/tek-express/walkthroughs/ae-dallas-tony-instruments-sessions-results-debug.md)
- **Bandwidth/probe lockouts become warnings in user-defined mode** (blockers only in compliance). **Dallas/Tony** → same chunk.
- **VISA detection bug workaround is tribal knowledge** — "Nine times out of 10, when I just do it from here, it doesn't show up." **Dallas/Tony** → same chunk.
- **Reconnection guidance: always-on mini connection schematic** — "otherwise I'll have spent hours, days… and realize I should have had that attenuator there, not there." **Will** → [ae-will-teverovsky-test-selection-and-contextual-help](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-test-selection-and-contextual-help.md); inline PNG schematic + full-screen + PDF link (root cause of today's Acrobat hack: the unresizable window). **Travis** → [ae-travis-berger-bench-setup-and-instrument-connection](../../corpus/sources/tek-express/walkthroughs/ae-travis-berger-bench-setup-and-instrument-connection.md)

## 6. Sessions as OS citizens

- **X: drive retired** — "a hangover from NI TestStand, which has no rationale or requirement for anything we're doing now"; normal save-anywhere (remote/automation use case). **Dallas/Tony** → [ae-dallas-tony-setup-flow-friction](../../corpus/sources/tek-express/walkthroughs/ae-dallas-tony-setup-flow-friction.md)
- **Save/recall is "incredibly difficult and frustrating… I kind of have to coach [the customer] through it every time."** **Will** → [ae-will-teverovsky-session-files-options-and-program-context](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-session-files-options-and-program-context.md)
- **Findable session files** — "there's like a million folders, timestamp based… sort by date modified and then send me the latest one": visible save location, recent-sessions list, double-click file association. **Travis** → [ae-travis-berger-status-results-sessions-and-run-window](../../corpus/sources/tek-express/walkthroughs/ae-travis-berger-status-results-sessions-and-run-window.md)
- **Session recall must be correct** — "It doesn't recall the parameters correctly. It just — it's broken." **Dallas/Tony** → [ae-dallas-tony-instruments-sessions-results-debug](../../corpus/sources/tek-express/walkthroughs/ae-dallas-tony-instruments-sessions-results-debug.md)
- **DUT ID is the semantic-naming mechanism** feeding report + folder names — bridges to the Phase 3 DUT-ID length fix. **Travis** → [ae-travis-berger-status-results-sessions-and-run-window](../../corpus/sources/tek-express/walkthroughs/ae-travis-berger-status-results-sessions-and-run-window.md)

## 7. Status / Results consolidation (shell-level pattern)

- **Lowest-friction first step: pass/fail column in Status** (Clarius already merged them); target: one surface, progressive detail. **Will** → [ae-will-teverovsky-acquisitions-presets-status-and-results](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-acquisitions-presets-status-and-results.md)
- "The results in the status, I would combine those." **Chris B** → [ae-chrisb-setup-waveforms-and-run-modes](../../corpus/sources/tek-express/walkthroughs/ae-chrisb-setup-waveforms-and-run-modes.md)
- **Dual live-populate is confusing**; "I usually just look at the PDFs if I'm being honest" — a facilitator committed on-record to "consolidating some of that." **Travis** → [ae-travis-berger-status-results-sessions-and-run-window](../../corpus/sources/tek-express/walkthroughs/ae-travis-berger-status-results-sessions-and-run-window.md)
- **Counterweight (why Results might stay):** multi-run report picking à la R&S. **Chris B** → [ae-chrisb-reports-and-rerun-workflow](../../corpus/sources/tek-express/walkthroughs/ae-chrisb-reports-and-rerun-workflow.md). Open decision 3 in [synthesis.md §10](synthesis.md).
- "You'd be doing status, result, status, result" / "you can't see them both at the same time." **Will** → [ae-will-teverovsky-acquisitions-presets-status-and-results](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-acquisitions-presets-status-and-results.md)

## 8. Help system

- **Layered contextual help**: selection-aware F1 / global "?" → on-screen description → deep link into the reference section. NOT a question mark per setting ("the UI kind of gets very clumsy"; Clarius got "too many question marks" feedback). Positive per-setting-popup reference: "Riddick." **Tapo** → [ae-tapo-parua-workflow-and-settings-architecture](../../corpus/sources/tek-express/walkthroughs/ae-tapo-parua-workflow-and-settings-architecture.md)
- **Document-only help breaks flow** — "They are all document files… you need to download it"; "In PDF, I just have to scroll, scroll, scroll." **Tapo** → same chunk; "I hate that you have to go through this Adobe Acrobat, all this like weird crap." **Travis** → [ae-travis-berger-bench-setup-and-instrument-connection](../../corpus/sources/tek-express/walkthroughs/ae-travis-berger-bench-setup-and-instrument-connection.md)
- **Help content is a reference guide, not an instruction manual** — specialized domain, occasional lookup; MOI stays as the depth layer. **Tapo**, **Will** → chunks above + [ae-will-teverovsky-test-selection-and-contextual-help](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-test-selection-and-contextual-help.md)

## 9. Automation contract (shell guarantee)

- Scriptability guarantee across the shell — SCPI-like command per GUI action proposed; must run fully headless. **Nadir** → [ae-nadir-kahn-pain-points-and-automation](../../corpus/sources/tek-express/walkthroughs/ae-nadir-kahn-pain-points-and-automation.md)
- Scope against **Travis's <20%-automation datapoint**: parity floor for scripters, not the majority workflow; most users sit at the scope, and licensing (stranded laptop licenses) is the real on-scope-vs-PC decider. → [ae-travis-berger-run-environments-adoption-and-reports](../../corpus/sources/tek-express/walkthroughs/ae-travis-berger-run-environments-adoption-and-reports.md). Open decision 10.

## 10. Cross-installation consistency governance

- "They'll fix something in one and break something in the other one." **Dallas/Tony** → [ae-dallas-tony-session-context-and-overall-reactions](../../corpus/sources/tek-express/walkthroughs/ae-dallas-tony-session-context-and-overall-reactions.md)
- One identical workflow across side-by-side installations is a customer expectation. **Tapo** → [ae-tapo-parua-workflow-and-settings-architecture](../../corpus/sources/tek-express/walkthroughs/ae-tapo-parua-workflow-and-settings-architecture.md)
- This is the design system's argument: the shell (and its tokens/components) is owned once, inherited everywhere. Column add/remove everywhere + TekScope's results-table configure as the shared table pattern (team-endorsed). **Dallas/Tony** → [ae-dallas-tony-instruments-sessions-results-debug](../../corpus/sources/tek-express/walkthroughs/ae-dallas-tony-instruments-sessions-results-debug.md)
