---
provenance: observed
class: walkthrough
product: tek-express
flow_id: ae-will-teverovsky-acquisitions-presets-status-and-results
flow_title: "AE Interview — Will Teverovsky: Acquisitions, Presets, Status/Results, and the 1024×768 Constraint"
recorded_by: "Will Teverovsky (AE); Bryan Kemp (facilitator)"
recorded_date: 2026-07-13
duration: "1:38:12 (session total; this chunk covers the Acquisitions-through-Results segment, roughly the third quarter)"
transcript_source: "uploads/transcripts/WillTeverovsky.docx"
screens_visited: [setup-acquisitions, setup-preferences, status-test-status, status-log-view, results, plots]
applies_to: [tek-express, tek-design-system]
related_screens: [setup-acquisitions, setup-acquisitions-probe-config, setup-preferences, status-test-status, status-log-view, results, plots, options-dropdown]
related_apis: []
related_hardware: []
related_modules: []
---

# AE Interview — Will Teverovsky: Acquisitions, Presets, Status/Results, and the 1024×768 Constraint

## Summary

Third segment of the 2026-07-13 session. Will moves through Acquisitions, Preferences, Status, and Results in the prototype. Acquisitions surfaces the need for at-a-glance connectivity status of the automated DUT-control device, a prototype misplacement (embed filter), waveform-file access patterns (copy path / open in File Explorer vs. load-for-debug in pre-recorded mode), and the oddity of Refresh Sources. The product leader asks for a pre-flight readiness check using an extended car-dashboard analogy and a "load on TekScope" share action for pre-recorded mode. Will then gives the session's deepest domain tutorial — PCIe presets — concluding they should be visible "almost all the time," ideally in the persistent bottom bar. On Status/Results: status and log view can't be seen simultaneously, richer test statuses are wanted (waiting-for-trigger vs. analyzing), a pass/fail column merged into status is the "lowest friction" fix (Clarius already did it), and the whole UI must be designed against a 1024×768 scope screen — with responsive resizing called out as a genuinely exciting selling point.

## Goal

Capture acquisition/run-time observability needs — device connectivity, preset state, richer statuses, status+results consolidation — and the physical display constraints the redesign must honor.

## Steps

**Step 1 — Automated DUT control needs live connectivity status.** Screen: [`setup-acquisitions`](../screens/setup-acquisitions.md) (as mirrored in the prototype).

- Will: *"Confusion does come up there because it would be important to know at a glance if my [DUT] control device — so if it's an NI USB thing or one of our AFGs — is live and connected. Like, can I ping it? Is it working? When I hit run, is it going to actually successfully step through the presets and the modes that I expect it to step my device through?"*

**Step 2 — Prototype misplacement: embed filter.**

- Will: *"Filter stuff is not in automated [DUT] control. This is something else entirely."* Product leader: *"The embed filter should not be there… that lives somewhere else."* The room confirms some device-profile radio buttons (ref clock: common clock / SRIS; SSC on/off) are plausible; the prototype was built from screenshots and manuals without live app access.

**Step 3 — Acquisition grouping exists in the real app but is missing from the prototype.**

- Will: *"Sometimes I want to know which tests I should select that are all on the same acquisition."*
- Product leader: *"We do have that acquisition grouping already there when you do select required. It says this is a grouped… set of measurements [that] can be acquired on [a] single waveform… In this prototype, it's not there."*

**Step 4 — Waveform file access: path and file, not a file-picker.**

- Will: *"I do like the easy find-a-waveform… [but] this isn't really about loading a waveform file. This is about, hey, I need to find the waveform file that is associated with this test."*
- Will: *"There's a couple of useful things. One, where does this actually save to my hard drive? Usually that's a very long [path]… And two, like give me the waveform file itself."*
- Will's minimal fix: *"Honestly, like having an open-in-File-Explorer or copy-path button… that's probably close to all that I need."*

**Step 5 — Pre-recorded mode changes the meaning of the same control.**

- Product leader: *"The moment you go to pre-recorded mode, this has a completely different meaning where you will want the file system to load."* Will: *"That's true. I'm thinking of this in live acquisition mode."*
- Will: *"If I load a session file, this might be pre-populated, but it might be a situation where I just need to open a specific waveform for a specific test for debug purpose[s], and that's where I would… actually click this to load rather than save."* Pre-recorded mode can rerun tests without the scope attached.

**Step 6 — Product leader's "load on TekScope" share ask.**

- Product leader: *"On an iPhone, you take a photograph… and at the bottom you'll say… share. That I want — load on Tek Scope — because I'm going to enable this on PC… In pre-recorded mode, to do everything on the PC."* (Software would launch TekScope internally with the waveform.)

**Step 7 — Refresh Sources is a framework artifact.**

- Will: *"Refresh sources is very weird. I think that's just a factor of how the framework worked."*
- Will: *"I don't know if this is still the case, but I believe that in some situations, Tek Express wouldn't necessarily keep track of the fact that I just unplugged something from channel one on the scope and plugged in something into channel 3… If it keeps track of that automatically without bogging down some polling process in the back end, then you probably don't even need refresh sources."* View Probes he associates with root setup: *"How am I physically probing stuff? What physical channels am I using?"*

**Step 8 — Pre-flight readiness check (the car-dashboard analogy).**

- Product leader: *"The moment I get into the car, it says 'Welcome, [name]' on the dash… when I power it up, it tells me the status. Everything is fine… Can you give me some [indication] that could be done before I hit run…? I want to ensure… you don't [want to be] 2 miles later [when] you find out you have a flat tire."*
- Product leader: *"You need one small button to check — is the AWG alive?"* And: *"In Clarius, we do have a LED that has been put [in] that [shows] it is… connected [or] disconnected."*
- Will's matching frame (Step 1) and his summary: *"or some sort of validation before it runs tests."*

**Step 9 — Configuration/preferences as junk drawers.**

- Will: *"Configuration preferences is oftentimes also a bit of a junk drawer… this is kind of a catch-all miscellaneous junk drawer that probably needs to be thought more intelligently."*
- Will, on why: *"In 400G TXC[,] you might want to configure how you're doing like scope noise characterization or something that's important for measurements… but you don't necessarily have a clear spot to put it in the UI workflow and so someone's just put it there."*
- Will, on sequencing the fix: *"I wouldn't necessarily say it's like an immediate priority… but probably when you're doing a real usability pass in terms of how do we make this PCI Express application a better product for the user outside of look and feel… that's when you might want to say, what's in configuration, where should it actually live?"*
- Distinction noted: *"These are kind of junk drawers in [that] this is mostly like application preferences, not test preferences. And that may be an important thing to distinguish."*

**Step 10 — Presets tutorial.** Will explains PCIe transmitter presets (equalization settings negotiated between transmitter and receiver during link training; hardware settings on the DUT; stepped through during toggling; per compliance a device must be able to *set* every preset but need only *pass* one for signal-quality tests; preset sweep tests settability).

- Will: *"You're only ever at one preset at a time."*
- Will, on selective preset testing: *"If you know… that your device operates really well at preset 4, 6, and 8… maybe to save some time — because each of those is a full new acquisition… and if it's failing, by the way, it takes longer in that test run because it tries to tweak more parameters to try and get you to a pass — you might deselect many of those presets… It does need to be multi-select, at least for PCI Express."*

**Step 11 — Preset state must be visible nearly always.**

- Facilitator: *"What prevalence should they have visually in… this test selection and… on the [DUT] screen?"* Will: *"It should be very visible almost all the time… I would almost expect it to be in this bottom bar — like, hey, what preset are you expecting to be operating in right now?"*
- Will, on why: *"If we are running [in]to an issue where we're getting a failure or… a did-not-run, did-not-complete… we will often make manual measurements to determine that we were at the right data rate and at the right preset… People will go through efforts to validate that the preset that they're expecting to be at is the preset. And there's kind of three levels of expectations, right? There's the what do I expect it to be at, what is Tek Express expect[ing] it to be at, and what is the [DUT] actually at?"*
- Preset persistence today: only via recall test setup; the free-text comment field is where users record preset knowledge. *"That's where that like [DUT] comment field that's not here would come in."*

**Step 12 — Where users spend their time.**

- Will: *"Most of the user's time is going to be spent in one and two [DUT + Test Selection], and maybe occasionally in here [Acquisitions] if there's some special need."* (*"Three is mostly just double checking stuff for live acquisitions anyways."*)

**Step 13 — Preferences does not belong in the main nav.** Screen: [`setup-preferences`](../screens/setup-preferences.md).

- Will: *"Does this… really need to be in this menu? … This is like a distraction here."* Room consensus: *"This should be under options… That's like application preferences or change your e-mail settings… that should be under options, not under here."*

**Step 14 — Status and Log View can't be seen at the same time.** Screens: [`status-test-status`](../screens/status-test-status.md), [`status-log-view`](../screens/status-log-view.md).

- Will: *"Both status and log view are very useful… That being said, the drawback that I've experienced is that you can't see them both at the same time."*
- Will: *"If there's enough room, yes, I would love to see like test status here, log view here. [But] for some of the scopes that this is running on, you're looking at a 1024 by 768 screen… that real estate can get really crowded really fast."*
- Log view caveat: *"Log view is also a little bit lower level debug and sometimes it's confusing to read."*

**Step 15 — Design against 1024×768; responsive resizing is a selling point.**

- Will: *"When you're designing it, put it in a 1024 by 768 window and see how well it works for the user."*
- Will: *"Actually, Tek Express today, I don't even think you can really resize it."* On seeing the prototype resize responsively: *"That's very exciting, honestly. Like I'm gonna go to a customer… to sell them on moving to the new [version], I'm like, 'Hey, check this out,' and I'm just gonna move it and they'll be like, 'All right, sign me up.'"*
- The tall-skinny use case: *"The scope screen itself on some of these older instruments, which we still sell, [is] also 1024 by 768. I can't resize that, but I can drag it to a bigger screen. Which means that if I can have my 1024 [by] 768 here and then see everything that I need to do in Tek Express over here… I can monitor the waveforms and make sure everything's running and progressing… I can do my gut checks here while still seeing what's happening in the test result without them overlapping."*
- Post-start minimization: *"Once you are set up and you have started a test… you just want to see the status so that you can reduce the screen and work around."* Will: *"Totally, yeah. If I can just do like test status over here, make sure that… this stuff is stepping through correctly."*

**Step 16 — Richer statuses: waiting-for-trigger vs. analyzing.**

- Will: *"Some amount of additional insight rather than just like… started, in progress, complete would probably be nice. Mostly like are we trying to acquire, are we waiting on a trigger?"*
- Will, on why the distinction matters: *"Triggering could take a while and could be an area where it's kind of in a stuck mode… the scope's… gonna keep trying to trigger, waiting… retrying, retrying… Waiting for trigger that's been going [on] for three minutes probably means that I need to stop this, cancel the test, figure out what problem is happening, and start again. Whereas if I stop in the middle of an algorithm, now I'm just a frustrated user that doesn't know the algorithm takes that long."* (*"It could be analyzing, right? That's another good one."*)
- Terminology caveat: *"I don't necessarily know there is fully common terminology. I think for some cases there is… like waiting for trigger."* Will flags status-vocabulary research as *"opinionated and specific and requir[ing] deeper research"* — not a near-term priority.

**Step 17 — Consolidate status and results; pass/fail column is the lowest-friction fix.** Screen: [`results`](../screens/results.md).

- Will: *"That's where results come in, and maybe there's reason to consolidate status and results in some manner, or make them more concurrently visible… In some cases, if it fails, I want to keep going and do all the rest of the tests. In some cases, if it fails and I really needed to pass that one test… then I'll want to stop it. But I'm only going to know both of those things if I keep toggling back between these two."*
- Will: *"It seems to me you'd be doing status, result, status, result, status, result… Maybe one thing that would be a less drastic change is just putting another column in here that basically imports this pass/fail… That wouldn't be a terribly drastic change. Might not be the best solution, but it might be the lowest friction solution."*
- Product leader: *"Clarius, we did that. We merged status and result together, so that we have one more column — pass/fail column."*
- Will also expects results to stream: *"I would expect this to populate as it runs, by the way."*

**Step 18 — Failure detail: margin matters, root cause is a deeper layer.**

- Will: *"As far as like reason for failure, that's like a deeper debug sort of thing… [But] I do want to know, like, how much margin did I fail with? For example, was this a fail in terms of like… something completely insane[ly] away and I just kind of know the test didn't run correctly… Or is it close, where I know that, hey, I'm like a couple millivolts off or something, and I expect that if I tweak a setting… I might actually be able to pass that? Or maybe it was just a fluke and I need to run it again."*
- Will's sequencing advice: *"There's a lot to talk about in terms of what can and should be populated in results, but I would start off just pulling what Tek Express does and getting feedback on that."*

**Step 19 — Plots: deferred but important; portfolio consistency is the hard part.** Screen: [`plots`](../screens/plots.md).

- Will: *"Plots can be pretty important. Those will show up in the PDF as well."*
- Will: *"One thing that's difficult with plots is… consistency… how things are visualized should ideally be consistent across the portfolio in a manner, right? And that's going to be pretty hard to accomplish, I think."*
- Bryan: *"This is the first one that we have the design system hooked into… we're gonna start somewhere that's scalable… so we can eventually… go back and adjust versus… refactor the plotting because we didn't think it through."*

## Annotations

- **Three levels of preset expectation** — user's expectation, TekExpress's expectation, and the DUT's actual state — is the observability frame Will uses for run-time state. Failures trigger manual measurement solely to reconcile these three.
- **Failing tests run longer.** The automation *"tries to tweak more parameters to try and get you to a pass"* on failure — relevant to progress indication and time estimates.
- **Clarius precedent, twice.** The sibling Clarius product already has (a) a connectivity LED for instrument liveness and (b) a merged status+results pass/fail column. Both are cited by the product leader as prior art for TekExpress asks.
- **Refresh Sources likely exists because the framework didn't track physical channel re-plugging** — a workaround control, per Will, removable if source tracking becomes automatic ("or maybe that's a good [thing] to put in the junk drawer").
- **Application preferences vs. test preferences** is Will's proposed dividing line for the junk-drawer cleanup: app-level settings (theme, email, keep-on-top, instrument control) belong under Options; test-affecting configuration needs a real home in the workflow.
- **The prototype was built from screenshots and manuals without live app access** — acknowledged on-call; the room proposes remote instrument access via technical support engineers, observing a product owner run the software, and a TSC (technical support center) Gen-3 walkthrough (Steve Guerrero, arranged via Travis) as fixes. Product leader's analogy: *"An Airbus pilot cannot [fly] a Boeing… the guys who do compliance really need to understand why is this button here… Why does it need to do X and not Y?"*
- **Pre-recorded mode is the PC story.** Sessions with captured waveforms can move machines/sites and be rerun without a scope; the "load on TekScope" share action is the product leader's bridge between the PC app and scope software.

## Friction notes

- **No at-a-glance DUT-control connectivity.** *"It would be important to know at a glance if my [DUT] control device… is live and connected. Like, can I ping it? Is it working?"*
- **Status and Log View are mutually exclusive views.** *"The drawback that I've experienced is that you can't see them both at the same time."*
- **Status vocabulary is too coarse.** *"Waiting for trigger that's been going [on] for three minutes probably means… stop… Whereas if I stop in the middle of an algorithm, now I'm just a frustrated user."*
- **Status/results toggling.** *"I'm only going to know both of those things if I keep toggling back between these two."*
- **Waveform file location is buried behind a long path.** *"Where does this actually save to my hard drive? Usually that's a very long [path]."*
- **Refresh Sources is unexplained framework residue.** *"Refresh sources is very weird."*
- **Configuration is a junk drawer.** *"A catch-all miscellaneous junk drawer that probably needs to be thought more intelligently."*
- **Preferences is misplaced in the main nav.** *"This is like a distraction here… This should be under options."*
- **TekExpress today is effectively non-resizable** and some host scopes are fixed 1024×768.
- **Preset state is invisible in the prototype.** *"It should be very visible almost all the time."*
- **Prototype defects/misplacements noted live:** embed filter in automated DUT control; acquisition grouping missing; pre-recorded mode initially broken in the prototype (reset via Tweaks).

## Cross-references

- Panel screens: [`setup-acquisitions`](../screens/setup-acquisitions.md), [`setup-acquisitions-probe-config`](../screens/setup-acquisitions-probe-config.md) (View Probes), [`setup-preferences`](../screens/setup-preferences.md), [`status-test-status`](../screens/status-test-status.md), [`status-log-view`](../screens/status-log-view.md), [`results`](../screens/results.md), [`plots`](../screens/plots.md).
- The persistent bottom bar Will wants presets in is the same one he endorsed for compliance-mode state: [`ae-will-teverovsky-test-selection-and-contextual-help`](./ae-will-teverovsky-test-selection-and-contextual-help.md).
- Options-menu overhaul context: [`ae-will-teverovsky-session-files-options-and-program-context`](./ae-will-teverovsky-session-files-options-and-program-context.md).
- The half-screen/docked window question raised by Rick Kuhlman in [`ux-feedback-and-open-questions`](./ux-feedback-and-open-questions.md) is directly answered here by Will's tall-skinny monitoring use case; container breakpoints (Bryan's commitment in that chunk) are the mechanism.
- Chart/plot portfolio-consistency concern echoes Rick Kuhlman's chart-richness friction in [`ux-feedback-and-open-questions`](./ux-feedback-and-open-questions.md).

## Pending references

- **Pre-recorded mode UI** — no documented screen for pre-recorded acquisition state.
- **Automated DUT control hardware** (NI USB device, AFG toggling) — hardware dependencies not documented in this corpus.
- **Preset sweep UI** — the room notes presets are "not really well represented" in the prototype and possibly absent from the documented screen set; flagged for study against the real app and user manual.
- **Clarius connectivity LED and merged pass/fail column** — cited as prior art; Clarius is not a corpus subject.
- **TSC Gen-3 live walkthrough** — committed follow-up (Steve Guerrero via Travis); would ground several "we couldn't run the real app" gaps.

## Confidence notes

- **Single-microphone recording; all lines attributed to "Kemp, Bryan"; speaker turns inferred.** Will's domain tutorials (presets, triggering, margins) are confidently his; the car-dashboard pre-flight analogy and Clarius references are confidently the unnamed product leader's; short confirmations between them are frequently ambiguous.
- **No per-step timestamps** (single-block Teams export); segment ordering follows the transcript.
- "Tire Express," "duck"/"dot" control, "A.W.G." are transcription artifacts for Tek Express, DUT, AWG; rendered with bracketed corrections where quoted.
- The preset-count exchange (whether any technology reaches 48 presets) was inconclusive in the room and is omitted from Steps; Will confirms PCIe does not have 48 presets per data rate.
- One profanity in the product leader's "the [software] is just to make my life simple" passage was pre-masked by the Teams transcriber; the quote is paraphrased around it.
- No credentials or customer names appeared in this segment.
