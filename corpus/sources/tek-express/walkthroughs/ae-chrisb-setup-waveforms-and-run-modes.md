---
provenance: observed
class: walkthrough
product: tek-express
flow_id: ae-chrisb-setup-waveforms-and-run-modes
flow_title: "AE Interview — Chris B: Pre-Recorded Waveforms, Test Modes, Status/Results, and Run-Mode Asks"
recorded_by: "Chris B. (AE); Bryan Kemp (facilitator)"
recorded_date: 2026-07-15
duration: "23:49 (session total; this chunk covers roughly the second half)"
transcript_source: "uploads/transcripts/ChrisB.docx"
screens_visited: [setup-acquisitions, status-test-status, status-log-view, results]
applies_to: [tek-express, tek-design-system]
related_screens: [setup-dut, setup-acquisitions, setup-test-selection-config, status-test-status, status-log-view, results, running-test, options-dropdown]
related_apis: []
related_hardware: []
related_modules: []
---

# AE Interview — Chris B: Pre-Recorded Waveforms, Test Modes, Status/Results, and Run-Mode Asks

## Summary

Second half of the 2026-07-15 AE feedback session with Chris B. (single recording, same transcript as the reports chunk). Chris moves from reports into the setup workflow: the pre-recorded-waveform file-naming convention (his "one major pain point"), a proposed rename-for-me dialog, test modes and user-defined limits, and comparisons to LeCroy, Keysight, and Rohde & Schwarz. He then reviews Status/Log View/Results (proposes merging Results into Test Status, and a resizable console-log layout), warns about screen real estate when running on the scope itself, and lands his number-one ask: loop run modes (loop until failure / until pass / X times) exposed on the run toolbar, not buried in a menu. The session closes with his verdict on the new prototype: modern, "not 20 years old."

## Goal

Capture the AE's existing-app pain points across setup, acquisition, status, and run-control, plus his direct reaction to the new UI prototype.

## Steps

**Step 1 — Setup workflow framing.** Bryan notes the intended workflow starts with Setup and works through the wizard. Chris pivots to something he observed the previous day.

- Bryan: *"So, the workflow is intended to start with setup, and this kind of follows the [expected] workflow, right? We start the first time and kind of work through everything."*

**Step 2 — Pre-recorded waveform mode hides settings.** Chris recounts a demo he watched the day before (possibly a PDR demo) where settings were unavailable in pre-recorded mode.

- Chris: *"You'd have to switch back and forth to an acquired waveforms and use pre-recorded if I wanted to change settings because some of the settings weren't available to go and alter."*

**Step 3 — The file-naming-convention pain.** Re-analyzing customer waveforms requires an extremely specific documented file-name format that customers don't follow.

- Chris: *"There's also a requirement when you're using pre-recorded waveforms to re-analyze that the file format has to be extremely specific and labeled a certain way. And we don't always get that from the customers if they just send us their saved waveforms."*
- Chris: *"It has to have the test name, the channel that it's on, what the signal is … you're basically embedding all the meta information about the waveform … in the title of the file name. … And it's a pain if we don't get that."*
- Chris: *"[LeCroy] has the same issue with theirs. And it makes it almost impossible if I don't have waveforms that are saved with the compliance software to be able to load in different waveforms and run it. So if we can avoid that, that would be great."*

**Step 4 — Proposed fix: a point-and-rename dialog.** Chris sketches the solution he wants.

- Chris: *"If there's a dialogue where I point to the waveform it needs, if it wants a different file name, then it would just convert it because it knows what it wants."*
- Chris: *"I can tell it this is my PRBS 0 waveform on channel one … Just make it rename it for me."*
- Chris on what customers actually send: files named like *"channel one"* or *"this is my DQ0"*, while *"the name format the Tek Express wants is really, really long and a lot of detail in it."*

**Step 5 — Live example in the waveform selector.** Screen: [`setup-acquisitions`](../screens/setup-acquisitions.md). Chris opens a file entry and decodes a real TekExpress-convention name.

- Chris: *"USB 4.2 lane one verse LFPS_1P25, right? So that tells me absolutely everything about it. I know exactly where it was connected, [whether it] was positive, negative, what my lane rate was. I'm like, oh, that's great. But if I have to remember what that name's supposed to be … good luck."*
- On batch vs single upload: Chris: *"Frequently, we're going to have just like a couple of waveforms that are sent to us. Like, I've got a problem with a specific test … They don't send the whole Tek Express session. They just send the waveforms."*
- Chris's own summary: *"So that's one major pain point."*

**Step 6 — Test modes and user-defined limits.** Chris looks for the test-mode control; in the USB application only Compliance is available, so the dropdown isn't shown, but other applications offer user-defined mode.

- Chris: *"There is supposed to be a drop-down, because in USB you can only run on compliance. … depending on the standards … if there's some other application, you are going to get a drop-down with [more] test mode[s]."*
- Chris on why user-defined matters: *"A lot of customers … they're not going on compliance because they can't officially test that in their lab. They want to do margin testing, so they're going to set stricter limits on it. Or if they don't need compliance testing because it's not going to be sold at Best Buy, it's going to go in a military application or something proprietary. So they have their own set of standards they want to test again[st]. So making it easy [to] change, that's really helpful."*

**Step 7 — Competitor comparison: LeCroy's config tree.** Chris contrasts TekExpress's up-front configuration with LeCroy's compliance software.

- Chris: *"If you want to go in and change settings, you go to this other tab, and it's like this long tree structure folder things … it's like the registry edit. … And it works, but it's like, okay, but I've got to scroll through like 3,000 things to find the one I care about and change it. And that's even things like what channel assignments are … so having it handled up front is pretty nice."*

**Step 8 — Test Status: live view is a demo asset.** Screen: [`status-test-status`](../screens/status-test-status.md).

- Chris: *"Status, show me what's going on, test status, this is really useful. … when I'm actually running a test, usually we'll show this to customers and we'll watch, oh, we're on preset 6 … all these passed, oh, that one's gonna fail there … you can kind of watch it live."*

**Step 9 — Log View: the debugging surface.** Screen: [`status-log-view`](../screens/status-log-view.md).

- Chris: *"The log view is useful for … if something's failing, or what's actually going on, or am I hanging? We can look in Log View and see … what's a trend there."*

**Step 10 — Side-by-side status + log proposal; the scope-real-estate constraint.** A facilitator asks whether status and log should show continuously side by side, referencing Keysight's layout. Chris is open but raises the on-scope constraint and proposes a resizable console-log layout.

- Facilitator: *"Do you think it helps if … we see them continuously instead of going in status and Log View, to show them at the same time, like side by side?"*
- Chris: *"The only thing I'll comment on that is if we're running this on the scope itself instead of a connected PC … you don't want this taking up any more real estate than it has to, because I want to see what's going on in the scope. … if it gets too big, you got too many things on there … then I can't see the scope."*
- Chris: *"A console log maybe would be helpful if you just had one view where … this was a top half, two-thirds, and maybe the bottom third was kind of the log view, maybe resizable. … that is super handy."*

**Step 11 — Results is nearly redundant with Test Status.** Screen: [`results`](../screens/results.md).

- Chris: *"We kind of see that under test status while it's running, just the results. So this is almost redundant. … The results in the status, I would combine those. I wouldn't do those separately, unless there was something else you had to configure in results."*
- The one keep-separate case: *"Maybe if I had like multiple runs and I could see all of them in here … It's like a pick which ones I want for … report. So [Rohde] does it kind of that way."*

**Step 12 — The scope menu behind TekExpress.** Bryan asks about the signal view behind the app window.

- Chris/facilitators establish: *"This is a scope application … we have this top menu on here that's on the scope screen itself, it is there all the time. So, even when Tek Express is open, that's still the scope menu."*

**Step 13 — Number-one ask: loop run modes on the toolbar.** Chris returns to run controls and makes his headline request.

- Chris: *"The biggest thing I'd want to see is … on the run modes, put my options in here for loop until failure, that kind of thing. Don't bury it in the menu. You got real estate."*
- Chris on Rohde's run controls: *"[Rohde's] is a little confusing because I've got like a run or run select. They seem redundant, but they have different functionality and [I can't tell] which is which."*
- Chris on the loop icon expectation: *"The icon's a loop … Is it gonna repeat? And I want a loop until failure or loop X number of times? It's easy to get here, don't b[u]ry that in the menu. … That's probably my number one."*
- Chris enumerating the modes: *"There's two kind of loop, right? There's loop X number of times or loop until fail or loop until pass."*

**Step 14 — Prototype verdict.** Bryan asks for feedback on the new prototype shown earlier in the day.

- Chris: *"The new look is great. … it looks like it's modern, not 20 years old."*
- Bryan closes: *"We'll probably send you links of the next round, just to be much more thought through and accurate."*

## Annotations

- **Why the file-name convention exists:** the waveform file name *is* the metadata carrier — *"you're basically embedding all the meta information about the waveform in the title of the file name."* The format is documented, but customers sending ad-hoc files defeats it. LeCroy shares the flaw, so fixing it is a differentiator, not table stakes: *"it's not unique to us … It's a solvable problem for sure."*
- **Why user-defined test modes matter:** margin testing with stricter-than-compliance limits, and proprietary/military targets that don't follow public compliance standards — *"it's not going to be sold at Best Buy."*
- **TekExpress's up-front configuration is a competitive strength.** Chris explicitly prefers it to LeCroy's registry-edit-style 3,000-entry settings tree: *"having it handled up front is pretty nice."*
- **Test Status doubles as a customer-facing demo surface** — AEs narrate the live run to customers watching. Log View is the internal debugging surface. The two roles differ even though both show run progress.
- **On-scope vs connected-PC is a first-class layout constraint.** Any denser combined layout must not steal scope screen real estate: *"I want to see what's going on in the scope."* (Resonates with the half-screen-docking discussion in [`ux-feedback-and-open-questions`](./ux-feedback-and-open-questions.md).)
- **Rohde & Schwarz does multi-run report picking** (select which runs feed the report) — cited as the one justification for keeping a separate Results view. Rohde's run/run-select button pair is also cited as a confusing pattern to avoid.
- **Keysight has a compact console-style layout** the facilitators referenced when proposing side-by-side status+log; Chris hadn't seen it (transcribed as "key sites"; details of the comparison are garbled in the transcript).

## Friction notes

- **Pre-recorded waveform re-analysis is "one major pain point."** *"The file format has to be extremely specific and labeled a certain way. And we don't always get that from the customers."* … *"If I have to remember what that name's supposed to be … good luck."*
- **Settings lock-up in pre-recorded mode.** *"You'd have to switch back and forth to an acquired waveforms and use pre-recorded if I wanted to change settings because some of the settings weren't available to go and alter."*
- **Loop run modes buried in a menu** (continuation of the first-half friction; now ranked): *"Put my options in here for loop until failure … Don't bury it in the menu. You got real estate. … That's probably my number one."*
- **Results screen is almost redundant.** *"This is almost redundant. … The results in the status, I would combine those."*
- **Test-mode dropdown discoverability.** Chris and the facilitators could not immediately locate where test mode is changed in the USB app (because USB is compliance-only, the control doesn't appear) — behavior varies by application in a way that confused even an AE.

## Cross-references

- Waveform selection / acquisition setup: [`setup-acquisitions`](../screens/setup-acquisitions.md); per-test configuration dialog: [`setup-test-selection-config`](../screens/setup-test-selection-config.md); DUT panel where mode/dropdown context lives: [`setup-dut`](../screens/setup-dut.md).
- Status surfaces: [`status-test-status`](../screens/status-test-status.md), [`status-log-view`](../screens/status-log-view.md); results: [`results`](../screens/results.md); run-toolbar state: [`running-test`](../screens/running-test.md); Options menu: [`options-dropdown`](../screens/options-dropdown.md).
- First half of this session (reports and rerun workflow): [`ae-chrisb-reports-and-rerun-workflow`](./ae-chrisb-reports-and-rerun-workflow.md).
- The on-scope real-estate concern connects to the half-screen docking question in [`ux-feedback-and-open-questions`](./ux-feedback-and-open-questions.md).

## Pending references

- **Waveform rename/import dialog** — Chris's proposed fix; does not exist in the product, no screen to document.
- **Test-mode dropdown (non-USB applications)** — the user-defined-mode dropdown exists in other application plugins; no non-USB application screens are in this corpus.
- **Keysight compliance-software console layout** — referenced by the facilitators as a comparison; no Keysight compliance-app subject exists in the corpus (only unrelated Keysight hardware subjects, if any).
- **LeCroy compliance software (settings tree, waveform naming)** — compared twice; not a corpus subject.
- **Rohde & Schwarz compliance software (run/run-select, multi-run report picking)** — compared twice; not a corpus subject.
- **The prototype Chris reviewed** — shown before recording started; his detailed prototype reactions were not captured on this recording, only the closing verdict.

## Confidence notes

- **Single-microphone recording; all lines attributed to "Kemp, Bryan" in the source.** Speaker turns are inferred. Chris B.'s turns (first-person AE/customer experience, competitor comparisons) are high-confidence; several facilitator questions appear to come from a third participant (phrasing differs from Bryan's, and one line — *"he's talking about some other applications"* — implies three people present). Facilitator-side quotes are attributed cautiously or left as "Facilitator."
- **Competitor names are transcribed phonetically:** "LaCroix"/"Lacroix" → LeCroy, "key sites" → Keysight, "Rodi"/"roadies" → Rohde & Schwarz (Rohde). Normalized in this chunk; the LeCroy product name Chris tried to recall (*"their compliance … it's falling out of my head at the moment"*) never surfaced.
- **No per-step timestamps** — the Teams export collapsed the 23:49 session into one block; step order follows transcript order, boundaries are editorial.
- The "yesterday … might have been PDR" demo reference is left as transcribed; PDR here is most plausibly a display/interface standard demo, but the transcript is ambiguous.
- Chunk boundary with the first-half chunk is placed at Bryan's *"the workflow is intended to start with setup"* pivot — a genuine topic shift from reports to setup.
- No credentials or customer names appeared; nothing redacted.
