---
provenance: observed
class: walkthrough
product: tek-express
flow_id: ae-dallas-tony-instruments-sessions-results-debug
flow_title: "AE Interview (Dallas & Tony) — Instrument Config, Session Files, Status/Results Tables, Debug Workflow, and Pause"
recorded_by: "Dallas & Tony (AEs); Bryan Kemp (facilitator)"
recorded_date: 2026-07-15
duration: "1:19:17"
transcript_source: "uploads/transcripts/DallasandJesse.docx"
screens_visited: [setup-acquisitions-probe-config, setup-preferences, status-test-status, results, plots]
applies_to: [tek-express, tek-design-system]
related_screens: [setup-acquisitions-probe-config, setup-preferences, setup-preferences-email-settings, setup-dut-session-browser, status-test-status, status-log-view, results, plots, reports-configuration, running-test]
related_apis: []
related_hardware: []
related_modules: []
---

# AE Interview (Dallas & Tony) — Instrument Config, Session Files, Status/Results Tables, Debug Workflow, and Pause

## Summary

Final long stretch of the session. The AEs hit instrument/probe handling (hard-coded model numbers break automation every time a new model ships; the VISA detection path is buggy), per-standard inconsistency, and broken session-file recall with useless warnings. The richest material is the debug workflow: a proposed right-click on a failed result offering "rerun in compliance," "rerun in user-defined," and "save a scope session file" that packages measurement, limits, and waveforms for scope-side debugging — which the AEs frame as a decisive advantage over Keysight, whose compliance algorithms don't exist in their scopes. Tek Express team members present reveal roadmap: a shared measurement library (launched January) and an MVVM re-architecture enabling mid-run edits. The segment closes on pause-button behavior, results-table configurability (steal TekScope's), plots in results/reports, and spec-version visibility.

## Goal

Capture the AEs' feedback on everything downstream of acquisition — instrument detection, sessions, status, results, debugging, and reporting — plus the team's stated roadmap responses.

## Steps

**Segment 1 — Probe/source detection: useful, but dependency-ridden.** On the acquisition source/probe controls: *"These are handy. The refresh sources and view probes. It's good to know that the scope recognized the probe."* Then the caveat:
- *"Get rid of the dependencies, because there were some times where we've come out with a new model version, we hard-code the name and it's now a B version and all of a sudden the automation doesn't work. Or we come out with a new probe that should work with it, but it fails and the compliance test won't run because it doesn't recognize that probe name."*

**Segment 2 — Requirement lockouts should be mode-aware.**
- Compliance-mode lockouts are fine: *"If I'm in compliance mode and compliance says I have to have 13 gigahertz, I can't use a 10 gigahertz probe… okay, you're in compliance."* But: *"When you switch over to user-defined… we held on to that. It's like, you can't even run this test 'cause you don't have a 13 gig probe. I'm fine with tainted answers. I mean, I'm not in compliance. Let me do it."*
- Second AE: *"Some people will want to run the compliance test just to validate and get a warm fuzzy feeling how they would do, even though they don't have the required bandwidth."* — *"Right now we completely lock them out instead of… flag it."*
- Veteran AE: *"I would argue most of the standards over-spec the requirements… You're gonna kick it, something hard is gonna hurt your toes — let me kick it. Don't hold me back."*

**Segment 3 — Hard-coded equipment lists.**
- Second AE ("Tony" in-session): *"They came out with an AFG 31… a different model of the AFG… does the same function, works the same, but it wouldn't run because it did[n't] see that model number."*
- Veteran AE generalizes: *"Today they wrote the application for a 7 series. Well, when we come out with a 72 series… why not have a user preferences… there's a list of products, 'cause right now they're hard-coding model numbers. Give us a field that we can modify… we know it's the exact same command set… Let me modify the equipment list that's allowed."*
- *"Right now, it's hard-coded, and someone has to go change code and they gotta go through the whole SQA… bring it out to a file, whether it's a hidden file or an exposed file, just put it to a file, 'cause right now we wait three to six months for software updates so we can use an instrument that we came out with."*
- Acknowledged limits: *"There's some hard lockouts you could do"* (e.g., genuinely incompatible probe/instrument pairs).

**Segment 4 — VISA instrument detection bug.**
- *"Half the time… when you check the instrument control [manager] on here, it doesn't work unless you go launch the [Tek]VISA Instrument Control Manager to detect it, and then you can go into here and detect it. Nine times out of 10, when I just do it from here, it doesn't show up."*
- The tribal-knowledge workaround: *"Because of our tribal knowledge, we go down here to open up TekVISA and do an instrument control and we scan… so VISA can see it. And then you come here and refresh this. Oh, and then it magically sees it. It's like, how many users [know that]?"* — *"There should be a VISA refresh or something… it supposedly does it, but for some reason it's different… a bug."*
- On the Configuration/Preferences tabs: *"Just rethink the tabs. [Were they] necessary, or were they just there?"* Team: *"We are going to work on these last two tabs, configuration and preferences."*

**Segment 5 — Per-standard inconsistency.**
- *"Some of these menus are different from one standard to the next one. That's also an issue where sometimes they'll fix something in one and break something in the other one."* Example: default channel assignments differing (channel 1+3 vs. 1+2) between standards/versions.

**Segment 6 — Session recall is broken and its warnings are useless.**
- *"When you recall a setup file, it doesn't recall the parameters correctly. It just — it's broken."*
- The pet peeve: *"When you recall a session file, have a log file that says what was different, because… sometimes you recall a setup file and [it] gives you a warning message that the file didn't load up completely… but it doesn't tell you anything else. Well, is my session valid? …It says, 'Contact your Tektronix local representative.'"*
- *"What is it? Is it just because of the probe? Is it because of the firmware? …Or is it one little setting that didn't get recalled correctly?"* (Noted that TekScope PC has the same problem.)

**Segment 7 — Session file format: make it the scope's open zip.**
- History: *"The first place we did sessions was in Tek Express. Now the scope has a thing called a session file… the session file in the scope is a zip file… it's a .TSS, but if you opened it with WinZip, you can see there's the pictures and there's the setup and there's the channel[s]."*
- The ask: *"Tek Express['s] session file is unique and you can't break it apart, you can't open it… there's going to be stuff within this session that's like, I just want part of that… If you do the session that's in the scope, you can do it standalone."* Team response: *"We wanted to have only one session [format]… it will make a TSS and omit the values which it doesn't need."*
- Save location again: sessions must go to *"a regular file system"*, not the X drive (see the setup-flow chunk; the X-drive/TestStand/SATA history debate happened here).

**Segment 8 — Status table: connection context and configurable columns.**
- *"In [the] status panel, you get the whole list of acquisition[s]… I assigned the channels in previous locations — give me a column here with where that thing is connected to."* Rationale: *"If I'm doing multi-lane, it'd be really handy to see… which channels this thing is on… 'Oh, no wonder that got it wrong — I assigned something wrong over there,' and now I get a second chance at the status to see that I assigned it wrong."*
- *"Also, the ability to add or remove columns — if it's too busy, there's too much data and you can't see it on one screen, the ability to modify the columns."*

**Segment 9 — Results table: steal TekScope's table control.** The AEs demo TekScope PC's results table configure: *"You can choose which columns show up… this one does digits… if you want more resolution, you just turn the digits up… You can have statistics or turn on a few other things or save [the table] away."*
- *"I don't know [why] we might as well just steal it."*
- Team member: *"We should standardize the table, because we have the same table for decode… the same bundle would make the user[s]… Yeah, parity is what we're looking for."*
- Current limitation: *"The problem is, you can't add more than these columns in this."*

**Segment 10 — Rerun from results: append/replace, failed-only.**
- *"I need something if I want to append or replace this specific measurement. I want to rerun this. Rerun only the failed ones, or rerun some… maybe there's a column and you checkbox like I want to rerun, and then there's a rerun and then you get [to] pick what you do… there's times where… you get through this whole thing, it's like pass, pass, pass, pass — I only need to rerun [one]."*

**Segment 11 — The debug button and the scope session handoff.** The second AE introduces it; the veteran AE has championed it for years (*"this has been my drum for years"*).
- *"We call it like a debug button where you can just run a specific test and it'll configure the scope as per the standard and then allow you to change the settings or do whatever else and get additional plots in DPOJet for histograms or whatever else for debugging purposes."*
- The full concept: *"If I go on to that [failed result] and I say, give me a debug session file, it takes the measurement and all of the limits… that are built into this application and the waveforms and builds this scope session file… all I do is go over to the scope, and I open that session file, and the waveforms and all the parameters that Tek Express did are right there… And I get to debug and figure out why."*
- *"You're basically taking all of the knowledge that's in here and forcing it into creating a scope session so the user doesn't have to do anything besides open [it]. No one does that. We would win based on that."*
- Right-click menu sketch: *"You can hit a right click and it's a button that says reload in user-defined mode or save session file — give me a couple choices. If I want to stay in here and just rerun that one test, you move all the parameters for me."*
- The persona flow: *"You have a technician running this in the lab; it fails. They save the session, send it to the engineer — send it to the signal integrity guy that knows how to debug it"* — who loads it on an offline PC.
- Why users can't do this themselves today: *"When you fail a test in compliance mode, you have to try to replicate that from scratch… go to the spec, find out what the clock recovery is supposed to be… There might be three people in your facility that could actually do that. But you bought the software from us because you don't have that SI expert."*

**Segment 12 — Competitive positioning: same algorithms in app and scope.**
- *"One of our advantages over Keysight, for sure… Their tests run only in that software. They don't have the same algorithm in the scope. We fought hard to keep our guys using the same algorithms in the compliance app that are in the scope."*
- *"Keysight doesn't have those algorithms in scope. They can never debug it… Because you can't set it up the same. Otherwise, you grab the waveform, you get different results."*
- Caveat from the AEs: *"That's not true for all of them. There are some we do custom algorithms… those custom algorithms need to be compiled into a measurement [on] the scope, so that every single measurement that you do in Tek Express is available on the scope. And that will be our advantage."*
- Standing vs. others: advantage believed still held against LeCroy; Keysight is the one to beat. (One competitor name is garbled in the transcript — see Confidence notes.)

**Segment 13 — Team roadmap disclosures: measurement library and MVVM.**
- Measurement library: *"The product launched in January will have something called measurement library. All the measurements need to move stage by stage into that library… Tek Express will not carry any DisplayPort algorithms with it… Tek Express and DisplayPort will call that library. The reason is… we will keep Tek Express on the scope, but the library will just run on the PC."* Also: *"We are gonna move and break the measurement [engine] separately from the user interface… This is gonna give you difference in the throughput even when you run a single measurement. So we are going multi-threading."*
- MVVM: *"Currently… everything that we do on this UI, the moment you run, it becomes a static data array… till you end the measurement, even if you change stuff, it wouldn't take [effect]… we are moving to a model called MVVM, model-view-viewmodel… Suppose I have 10 tests, I have run 5… I realize the 7th one is a wrong configuration… You can go and change that and continue. Just pick up the remaining ones."*

**Segment 14 — Pause button: loved, but needs definition.**
- *"The other thing that's really cool in here is that pause button. But I would like it improved, because… a lot of times you're running through the [tests] and you realize, oh, my [DUT is] not connected… The software [should] tell me when you hit pause: help me to reacquire this waveform, or do you want me to continue? …Am I pausing immediately, or am I pausing after X, and do I need to rerun the one that [was] during [the pause]?"*
- Current behavior: *"Sometimes you hit pause and nothing happens — it's waiting until the measurement algorithm is done completing, and then it releases it."*
- Pause as bug workaround: *"There's been so many times… I've had to pause the test, reconfigure something because the software didn't configure properly, and then continue."* And: *"I try to pause it right before it triggers, because I know the setup… it basically configures it wrong to the channel or something… and I have to go back to the scope settings and [then] resume. And then it's like, 'Ohh crap, it already thought it triggered.'"*
- Ideas raised: step-wise rewind (*"need to rewind step by [step]"*), resume choices (*"you want me to resume, start [from] the beginning or start from now"*), and a breakpoint feature (*"You should have a breakpoint feature, which was supposed to come in Clarius"*).

**Segment 15 — Results view: plots and spec versions.**
- Plots: *"If SigTest builds plots… they need to show up in the results view… and it needs to be in your report… some [standards] will have plots — why would we not provide the plots? The analysis already did them."*
- Spec version as a results column: *"The names of these measurements need to be exact… with the test ID… and spec version… because the specs can change… So if someone runs this and we don't tell them what the spec version is and he fails, it's like, oh, wait a minute, that changed by 10 picoseconds in the next version of the spec. So now I would pass… You guys have the wrong set of limits because you're running the wrong spec version."*
- Also: *"An easy way to change… the SigTest version, because a lot of times SigTest will continue [to] evolve, and you got [to] change to the right file."*

**Segment 16 — Parting shot on standards complexity.**
- *"PCI Express… It's the super set of stupid… If you can handle PCI Express, everything else is stupid… They've done every little nook, cranny, oddity you can do… Everybody else is a [less] complicated version."*
- Prototype note in passing: the team mentions showing the new interface/dark mode — *"if you show the dark mode… and then we'll let you play with it. Yeah, it'll look better."*

## Annotations

- **The scope-session debug handoff is positioned as the single biggest differentiator available.** *"No one does that. We would win based on that."* The mechanism only works because Tek keeps the same measurement algorithms in the scope and the compliance app — a deliberate, fought-for architectural stance.
- **Tek Express origin story (as recounted, with in-room debate):** the X drive dates to the NI TestStand / SATA one-box era ~20 years ago — *"the X Drive was a test stand requirement, and we never got rid of it when we moved out of test stand"* — with a colorful founding anecdote: *"They hired a kid from Austin… He wrote it in two days, it ran in 8 minutes… nine months later, I got the test back and it ran in 37 minutes."* Multiple voices disputed details (drive mapping for SATA-on-scope, an acquired database product); treat specifics as folklore, direction as consistent.
- **Roadmap items volunteered by the team** — measurement library (shipped January 2026 product), engine/UI split with multi-threading, MVVM mid-run editability, pause-flexibility work "already coming" — are stated plans, not AE asks. The AEs' reaction to the session-format plan: make the Tek Express session a scope-compatible TSS so the debug handoff is nearly free (*"the wheel is [already] in Tek Express, I just want to move the wheel over to the scope"*).
- **DDR-A precedent:** one team member notes DDR-A already toggles into DPOJet with measurements configured — cited as the model for debug handoff in other standards.
- **AI aside:** an AE floats a future where *"Future Me AI is saying, 'Look at this one, tell me why [it failed].'"* Team references upcoming modes "same like Clarius… or Qualiphy or GRL" (transcription uncertain).
- **Results-table parity with TekScope is a stated goal on both sides** — AEs: *"just steal it"*; team: *"parity is what we're looking for"* — including a mention that the new UI's table component family has "a whole slew of functionality" to draw on.

## Friction notes

- **Hard-coded model numbers break automation on every new instrument revision.** *"It's now a B version and all of a sudden the automation doesn't work."*
- **Three-to-six-month software-update lag just to allowlist new equipment.** *"We wait three to six months for software updates so we can use an instrument that we came out with."*
- **Bandwidth/probe lockouts persist into user-defined mode.** *"You can't even run this test 'cause you don't have a 13 gig probe… I'm not in compliance. Let me do it."*
- **In-app instrument detection fails without a manual TekVISA scan first.** *"Nine times out of 10, when I just do it from here, it doesn't show up."*
- **Fixes in one standard break another; defaults differ across standards.** *"They'll fix something in one and break something in the other one."*
- **Session recall silently mis-recalls parameters.** *"It doesn't recall the parameters correctly. It just — it's broken."*
- **Recall warnings are information-free.** *"It says, 'Contact your Tektronix local representative.'"*
- **Tek Express session files are opaque single blobs.** *"You can't break it apart, you can't open it."*
- **Status table lacks connection context and column control.** *"Give me a column here with where that thing is connected to."*
- **No failed-only rerun / append-vs-replace from results.** *"I only need to rerun [one]."*
- **Failed compliance tests are effectively un-debuggable for most customers today.** *"When you fail a test in compliance mode… there might be three people in your facility that could actually do that."*
- **Pause is undefined and laggy, and doubles as a bug workaround.** *"Sometimes you hit pause and nothing happens."*
- **Plots produced by analysis tools never surface in results or reports.** *"Why would we not provide the plots? The analysis already did them."*
- **Spec version is invisible in results, causing wrong-limits disputes.** *"You guys have the wrong set of limits because you're running the wrong spec version."*

## Cross-references

- Probe/source controls: [`setup-acquisitions-probe-config`](../screens/setup-acquisitions-probe-config.md). Configuration/Preferences tabs: [`setup-preferences`](../screens/setup-preferences.md).
- Session recall: [`setup-dut-session-browser`](../screens/setup-dut-session-browser.md).
- Status table: [`status-test-status`](../screens/status-test-status.md); log view: [`status-log-view`](../screens/status-log-view.md).
- Results table and rerun asks: [`results`](../screens/results.md); plots-in-results: [`plots`](../screens/plots.md); report side: [`reports-configuration`](../screens/reports-configuration.md).
- The chart/plot richness concern connects to the chart-library friction in [ux-feedback-and-open-questions](./ux-feedback-and-open-questions.md).

## Pending references

- **TekVISA / Instrument Control Manager** — external utility central to the detection workaround; not documented in the corpus.
- **Scope .TSS session file format** — referenced as the target format for a unified session; no corpus artifact.
- **DPOJet / PAMJet** — scope analysis packages the debug workflow lands in; not corpus subjects.
- **Measurement library** (January 2026 product) and the **MVVM re-architecture** — team-stated roadmap; no corpus/docs artifact yet.
- **SigTest** and per-standard external analysis tools — external dependencies; no corpus artifact.
- **Equipment allowlist file** — the proposed user-modifiable equipment list has no current artifact (today it is hard-coded).

## Confidence notes

- Speaker attribution inferred (single-mic transcript; all lines labeled "Kemp, Bryan"). This segment has at least four voices: the two AEs, Bryan, and one or more Tek Express team members (the measurement-library/MVVM roadmap and session-format responses are clearly team-side). The transcript refers to one AE as "Tony" three times ("the stuff Tony just hit on," "to Tony's point," "Tony's got — this has been my drum for years"). This originally appeared to conflict with the session's initial "Dallas and Jesse" labeling; Bryan Kemp resolved it (2026-07-28): the AEs are Dallas and Tony, and the in-transcript "Tony" is the second AE. Per-line quotes are still attributed to roles (veteran AE / second AE / team member) where voice certainty is low.
- A demo person referred to as "Tapa"/"Topa" appears to have been driving the Tek Express screen at points ("This is what Tapa was trying to show").
- One competitor name is garbled: *"key site and verify it's absolute advantage"* — "Keysight and [unclear]"; possibly a third vendor name mis-transcribed. Keysight and LeCroy are unambiguous.
- The X-drive history debate involves overlapping voices and heavy transcription damage (e.g., "render," a database startup, "Sara went out of VOC"); recounted as folklore in Annotations rather than steps.
- Several fragmentary lines around the TekScope results-table demo (touch gestures, "two fingers," right-click discussion) are physical-demo narration; summarized, not quoted.
- Scattered garbled sentences (e.g., "the electronics will become 100 years," "It's not a state on WhatsApp") were untranslatable and are omitted; none appear to carry unique substantive content.
