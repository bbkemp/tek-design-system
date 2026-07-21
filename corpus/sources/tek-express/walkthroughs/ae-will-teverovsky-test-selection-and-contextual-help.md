---
provenance: observed
class: walkthrough
product: tek-express
flow_id: ae-will-teverovsky-test-selection-and-contextual-help
flow_title: "AE Interview — Will Teverovsky: Test Selection, MOI/Schematic Contextual Help, and Compliance-Mode Visibility"
recorded_by: "Will Teverovsky (AE); Bryan Kemp (facilitator)"
recorded_date: 2026-07-13
duration: "1:38:12 (session total; this chunk covers the Test Selection segment, roughly the second quarter)"
transcript_source: "uploads/transcripts/WillTeverovsky.docx"
screens_visited: [setup-test-selection, setup-test-selection-config, setup-test-selection-limits-editor]
applies_to: [tek-express, tek-design-system]
related_screens: [setup-test-selection, setup-test-selection-config, setup-test-selection-limits-editor, setup-dut-comments, status-test-status, results]
related_apis: []
related_hardware: []
related_modules: []
---

# AE Interview — Will Teverovsky: Test Selection, MOI/Schematic Contextual Help, and Compliance-Mode Visibility

## Summary

Second segment of the 2026-07-13 session. Will works through the prototype's Test Selection panel: he likes Select Required / Select All, can't parse some labels ("algorithm library"), and walks through how MOI (Method of Implementation) and schematic buttons function as contextual help in the existing app — including the returning-after-two-weeks reconnection scenario that makes schematics critical. He explains the Configure dialog (limits editor, custom limit profiles, reference levels), which triggers the segment's biggest theme: users lose track of whether they are still in compliance mode. A colleague ("Gary," present for part of the session) calls compliance-mode visibility a years-old recurring complaint; the product leader confirms today's behavior is a single dismissable warning popup with no persistent indicator. Will endorses a persistent bottom status bar and proposes gating the limits editor behind an explicit user-defined toggle. The product leader contributes the missing test-comments field and an MVVM architecture note about why mid-run edits are impossible today.

## Goal

Surface how an expert AE reads the Test Selection panel, what contextual help (MOI/schematic/description) needs to do, and where mode-state (compliance vs. user-defined) must be made visible.

## Steps

**Step 1 — Select Required vs. Select All: liked.** Screen: [`setup-test-selection`](../screens/setup-test-selection.md) (as mirrored in the prototype).

- Will: *"I kind of like this, select required versus select all. I don't know [if] this is laid out exactly right, but that's okay."*
- Will, on an unclear label: *"I don't know what algorithm library really means, for example."*
- Will, on cascade: *"This is kind of that backwards compatibility thing where it's like… that Gen. 4, Gen. 5, Gen. 6 stuff is going to be dependent on to some extent what I would select in the data rates or maybe in the suite."*

**Step 2 — Every test needs a description.** A facilitator flags that per-test descriptions are missing/placeholder in the prototype.

- Facilitator: *"I have one feedback here on the test description… each test needs [to] have a description."*

**Step 3 — The missing test-comments field.** The product leader reminds the team of an existing-app feature absent from the prototype: free-text comments that persist into session and report.

- Product leader: *"There is something called test comments which even comes on the report. Like I have a specific device and I want to specify that this device has a issue… It comes… in the report, as a comment… that keeps like in the early comment box, gets saved into the session, it gets recorded… that this device has something special or problematic, and it is worth noting [for] whoever takes [it] on."*

**Step 4 — MOI and schematic as per-measurement contextual help.**

- Will: *"When I click one, I expect that to be like remain selected if I'm used to Tek Express, and then for that test I would click show MOI or show schematic… Right now, that would actually pop up like a little PDF and scroll to the right page or similar… In some cases, it might show a pop-up window with an image that describes what that… connection, physical hardware schematic looks like."*
- Will, asked if that's contextual help: *"That's 100% contextual help information, so show MOI, that's method of implementation, that's… in some manner speaking the software steps to get here."*
- Will, on MOI's depth: *"Oftentimes the MOI goes in more depth than Tek Express… the MOI might give me clues into why something is happening the way it's happening, what's underlying the workflow that selecting this does, something that might be informative to me as a user that might be trying to debug something."*

**Step 5 — The reconnection scenario that makes schematics critical.**

- Will: *"I ran the full test. I did select required. Something failed in a previous test. Now I want to run just the failed one… But, you know, I did that two weeks ago or whatever, right? I unhooked everything. Some other team need[ed] to borrow it. I'm back. Now I need to remember how to hook up for the PAM 4 linearity test. That's why I would click schematic here and double check all my work, make sure I've got everything connected."*
- Schematic granularity (Will + product leader): schematics vary per test — *"Worst case, each one of them… could be different"* — and per the product leader, *"schematic not necessarily has to be at the core tree. It can be anywhere… It can be for a single test, or it can be for a group of tests."* Content is a PDF or image controlled by each application team.
- Will's always-on wish: *"I honestly… would love to get a little schematic right down here where just at a glance, always on, I can just [confirm] — oh yeah, I am truly connected, right? Because otherwise… I'll have spent hours, days, whatever, testing stuff and realize that, oh, I should have had that attenuator there, not there."*

**Step 6 — What Configure does.** Screen: [`setup-test-selection-config`](../screens/setup-test-selection-config.md).

- Will: *"If you're going kind of off the beaten path a little bit, you want to get something that's maybe stricter than compliance because you've got some internal headroom like margin that you want to meet… then you'd go into a limits editor and… create a custom profile for my test limits."*
- Will: *"You might need to configure aspects about the algorithm or how the scope is setting up that measurement… it could be on a per-measurement basis or it could be a global setting. And that's very, very dependent on the specifics of that technology… and it gets very difficult to manage."*
- Will, reference-levels example: *"If I look at configure, go to global settings, and look at reference levels… I might choose absolute… or for auto, maybe I want to use a different hysteresis in terms of how the scope tries to detect what the one, middle and zero is… this might be a way that the user has learned to configure the Tek Express automation routine to best find or best remove some failure modes in that automation."*

**Step 7 — Does configuring force user-defined mode? It depends.**

- Facilitator: *"Anything that I would probably configure [would] force my application to move to user defined?"* Will: *"Yes and no, right? Depends… I'm configuring how the scope handles reference levels — that can still fully be in compliance."*
- Will's rule: *"If you're in compliance mode, everything that you test should generate results that meet the compliance test specification… If you're doing anything that gets you outside of that, it should be a user-defined mode."* Another participant: *"Some things in global settings may or may not impact whether that qualifies as compliance or not."*

**Step 8 — The compliance-mode visibility complaint (Gary).**

- Gary: *"One of the biggest complaints I heard years ago when I was starting into talking to people about this was that it seemed like there was constant confusion on whether you were still actually in compliance or where you were in any other term other than compliance, whether you want to call it debug or user or anything else. And I think it should be a real design effort in this to make it painfully clear. Are you in compliance mode… or are you not?"*
- Product leader, on today's behavior: *"Even today in Tek Express, once you… get out of compliance mode, you get a pop up… It has to give a warning… You are breaking compliance. Would you like to continue? You accept it, but… after that, for 45 minutes… you will only know that in the report."*

**Step 9 — Will endorses a persistent status bar for mode and key state.**

- Will: *"One thing I really like about this view right here is that you have this lower bar that keeps track of a few specific important details that you probably need to know throughout setup and running… Probably compliance or not should be down here and this might want to be persistent across [DUT] and test selection and acquisitions or whatever — like some sort of always-on status bar of like, am I where I expect myself to be in the most important ways? Probably makes sense and probably would help remove a lot of confusion in user error."*

**Step 10 — MVVM architecture note: why mid-run edits are impossible today.**

- Product leader: *"[Selections] wouldn't change in Tek Express till you do an architecture upgrade to [MVVM]… In model view [presenter], once you set and hit run, there is no going back… In [MVVM], if you've done 10 tests and five are done and you suddenly realize the 7th one has to change — I did a mistake in setting it up — you can actually go back and change the 7th one, but not the first one… That change is an architectural change."*

**Step 11 — Test-section content needs work; prototype bug noted.**

- Will: *"I think overall, just like what's actually in this box right here of the test sections probably just needs a lot of work… I don't necessarily know how much of this is just kind of like automated slop, quote un-quote."*
- Prototype defect confirmed live: *"Just select required is not working"* (Select All / Deselect All work).

**Step 12 — Required vs. informative must be explicit.**

- Will: *"It should be very clear from a user perspective — maybe it's in test description, maybe it's right in here — which measurements are required versus informative."*
- Will: *"One question I get often is like, hey, is that really all that's required for the test specification? I don't know if there's any way to indicate like, yes, this is why, in the test description… but also like, hey, this is informative. Why and how is this informative? That might be another useful kind of tooltip sort of thing that could help reduce confusion."*

**Step 13 — Information hierarchy: set-and-forget first, power-user on demand.**

- Will: *"Ideally, the user doesn't need to think about it at all. This is supposed to be a set and forget application where I hit select required… It's when I go into the select all or select a specific one that I'm interested in like — OK, do I really want this test? What is it giving me?"*
- Will: *"There is also some amount of consideration of like, hey, what's information overload… that target user is kind of that set-[and]-forget [type]. And then when people do something different, then they're kind of in like, ideally close to like power user mode… It'd be great to see this, great to see that — maybe for an expert user, but not necessarily a typical user."*
- On whether labels need explanation for novices: *"If you have not run this before and you've not been trained on this, you don't know what these things mean typically… I think there's room for improvement in that area, but I just don't know specifically what I would suggest."*

**Step 14 — What creates the most confusion on this panel.**

- Will: *"Typically, for test selection, what creates the most confusion is: what am I selecting and why? … Even if it says select required, if the selects [are] more or less than I'm expecting, what's going on there. But honestly, the test selection side isn't usually terribly confusing. I would say the other one that comes up really is that schematic idea of like, hey, I need to select one. How do I know if I'm set up correctly to go and accomplish that task?"*
- On the prototype vs. today: *"Right now I think just the way this is organized is some[what] unexpected, and I think some of the labels and some of the content in each of these dropdowns make it more confusing than it actually is [in] how Tek Express exists today."*
- Existing-app default confirmed by the room: when TekExpress opens the test panel, *"Select required is already selected… it's a default. That's what it should be."*

**Step 15 — Limits editor should be gated and adjacent to the mode toggle.** Screen: [`setup-test-selection-limits-editor`](../screens/setup-test-selection-limits-editor.md).

- Product leader: *"Limit editor should remain somewhere [in] close proximity to user-defined mode. Visually, the moment you click limit editor and change the limit, it's user-defined. The toggle should move to user-defined mode, and you need to give a warning asking the user to accept the change in the mode… and continuously at the… status bar keep some indication that your test is running… user defined."*
- Will: *"Maybe like in the limits editor, there could be like a 'which mode are we in' and if someone's not in user-defined mode, everything's grayed out and they can't actually take any actions until they intentionally toggle it or something."*

## Annotations

- **MOI = Method of Implementation.** Per-test documentation that is deeper than TekExpress's own UI; users doing manual/debug work read the MOI to understand what the automation is doing underneath. Today it opens as a PDF scrolled to the right page. In at least one application version the schematic *"opens an embedded PDF [and] you have to keep scrolling to see the test mode"* (product leader).
- **Compliance-mode state is a mode, warned once, then invisible.** Today's single accept-and-forget popup is the entire mode signal; the report is the only later evidence. Gary frames persistent mode visibility as a years-old, recurring ask; Bryan draws an accessibility analogy (*"you need to know when you're breaking it, but then you can put it back… there needs to be a level of like indicator"*).
- **The mid-run-edit limitation is architectural, not a UX choice.** The product leader ties "go back and change test 7 of 10 mid-run" to the pending MVVM refactor; the redesign's phase-1 lift-and-shift inherits the current no-going-back behavior.
- **Test comments are a session-persistent, report-visible artifact.** Free text, saved into the session file, printed in the report; used to record device-specific anomalies for whoever picks the DUT up next. Related existing screen: [`setup-dut-comments`](../screens/setup-dut-comments.md). Later in the session (presets segment) Will connects it to preset choices: *"That's where that like [DUT] comment field that's not here would come in."*
- **Two-audience design principle.** Will repeatedly frames the target user as set-and-forget (Select Required → go), with metadata (descriptions, MOI, required-vs-informative rationale) surfaced on demand for the power-user/debug path.

## Friction notes

- **Compliance-mode state is invisible after the initial warning.** Gary: *"constant confusion on whether you were still actually in compliance… make it painfully clear."* Product leader: *"You accept it, but… after that, for 45 minutes… you will only know that in the report."*
- **"What am I selecting and why" is the panel's core confusion.** Will: *"Even if it says select required, if the selects [are] more or less than I'm expecting, what's going on there."*
- **Reconnection uncertainty.** Will: *"Now I need to remember how to hook up for the PAM 4 linearity test… otherwise… I'll have spent hours, days, whatever, testing stuff and realize that, oh, I should have had that attenuator there, not there."*
- **Unclear label:** *"I don't know what algorithm library really means."*
- **Prototype organization/labels are currently worse than the real app on this panel.** *"Some of the labels and some of the content in each of these dropdowns make it more confusing than it actually is [in] how Tek Express exists today."*
- **Missing from prototype:** per-test descriptions, the test-comments field, required-vs-informative marking; Select Required button non-functional (prototype defect).
- **Configure is inherently confusing.** *"Configure is obviously very confusing… that's kind of inherently going to be confusing"* — highly technology-dependent and *"very difficult to manage."*

## Cross-references

- Panel screens: [`setup-test-selection`](../screens/setup-test-selection.md), [`setup-test-selection-config`](../screens/setup-test-selection-config.md), [`setup-test-selection-limits-editor`](../screens/setup-test-selection-limits-editor.md).
- Comments field in the existing app: [`setup-dut-comments`](../screens/setup-dut-comments.md).
- The persistent bottom status bar idea recurs (preset visibility) in [`ae-will-teverovsky-acquisitions-presets-status-and-results`](./ae-will-teverovsky-acquisitions-presets-status-and-results.md).
- Configure dialog demoed by Pranavi in [`tek-products-walkthrough`](./tek-products-walkthrough.md).
- Selective rerun of a failed test — the scenario motivating Will's schematic use case — is the central ask of [`ae-chrisb-reports-and-rerun-workflow`](./ae-chrisb-reports-and-rerun-workflow.md).

## Pending references

- **MOI documents** — not in this corpus; per-test PDFs owned by application teams.
- **Schematic pop-up window** — the existing-app schematic viewer is not a documented screen.
- **Test comments UI in the existing build** — [`setup-dut-comments`](../screens/setup-dut-comments.md) covers the DUT-level comments dialog; whether the report-visible test-comments field the product leader describes is the same control is unconfirmed.
- **Compliance-breaking warning popup** — mentioned as existing behavior; not captured as a screen.

## Confidence notes

- **Single-microphone recording; all lines attributed to "Kemp, Bryan"; speaker turns inferred.** This segment has the highest attribution risk in the session: Will, Bryan, at least one other facilitator, the unnamed product leader, and "Gary" (present mid-session only) all speak. The compliance-complaint quote is attributed to Gary based on the product leader's later reference *"as Gary also mentioned"*; confidence is moderate.
- **"Model view parameter" / "MVVC" in the transcript** are rendered as [MVVM]/[presenter] readings; the intended contrast (current architecture cannot re-enter completed setup; MVVM could) is clear even though the acronyms are garbled.
- No per-step timestamps exist (single-block Teams export).
- No credentials or customer names appeared in this segment.
