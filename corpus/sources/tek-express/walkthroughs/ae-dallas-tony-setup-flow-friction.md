---
provenance: observed
class: walkthrough
product: tek-express
flow_id: ae-dallas-tony-setup-flow-friction
flow_title: "AE Interview (Dallas & Tony) — Setup Flow Friction: Test Selection, Interdependent Settings, Waveform Files, and Naming"
recorded_by: "Dallas & Tony (AEs); Bryan Kemp (facilitator)"
recorded_date: 2026-07-15
duration: "1:19:17"
transcript_source: "uploads/transcripts/DallasandJesse.docx"
screens_visited: [setup-test-selection, setup-dut, results]
applies_to: [tek-express, tek-design-system]
related_screens: [setup-test-selection, setup-test-selection-config, setup-dut, setup-dut-session-browser, setup-acquisitions, results]
related_apis: []
related_hardware: []
related_modules: []
---

# AE Interview (Dallas & Tony) — Setup Flow Friction: Test Selection, Interdependent Settings, Waveform Files, and Naming

## Summary

The AEs walk the live Tek Express Setup flow and catalog its chronic friction: mutually-exclusive test selections that behave as sticky independent toggles; settings that silently change other settings; a pre-recorded-waveform feature so pedantic about file names and locations that it goes underused; the legacy "X drive" requirement carried over from NI TestStand; over-restrictive DUT ID characters; and the inability to rerun a single failed test and replace its result in an existing run.

## Goal

Capture the specific Setup-flow behaviors the AEs (and their customers) fight today, verbatim, as input to the redesign.

## Steps

**Segment 1 — Sticky selection toggles in Test Selection.** In standards with many variants (the AEs cite gear selections, e.g. USB/UFS-style Gear 1…Gear 6, or lists of ~12 selections), selecting one option does not deselect its mutually exclusive sibling.
- *"You have to like check one before you uncheck the other one because you know you can't have nothing on there… you have to basically, you know, click on the one that you want and then unclick the one that you didn't want."*
- *"And you only want to run gear 6. But it won't allow you to do that unless you want to check the other one first. So the selection choice is not deselect… it's a button, you turn it on and you have to go turn it off."*
- The ask: *"It should be a control that's smart enough to… on some standards, then maybe you need to check three things, and on other standards, they're mutually exclusive… Be smart enough to know it's mutually exclusive. When I pick 12, turn 6 [off]."*

**Segment 2 — Silent cascading changes in DUT configuration.** Changing one field (e.g., a version or test mode) silently changes other already-set fields.
- *"Like in this DUT configuration field and you're setting something up and you realize, oh, I need something else, before it changes all the things you already [set]… you thought you were changing one field before fields change."*
- The desired behavior, articulated jointly with Bryan: *"If when I pick this thing, it's gonna change four other things, give me a message that says, 'In this mode, I'm going to change A, B, and C for you, because that's what it requires for compliance.'"* — with an explicit confirm/cancel: *"They can say change it or cancel."*
- *"The system should be intelligent enough, and also let them know that with this setting I have to change these other things… we just change them and tell them… then [if] they get confused on it, they can say change it or cancel."*

**Segment 3 — Pre-recorded waveforms: inconsistent, name-pedantic, underused.**
- *"The other pain point… is the use pre-recorded waveforms. Different versions do it differently in terms of being able to select them, and it's very hard to figure out where the folder is, what waveforms are required."*
- Customer-supplied waveforms without a session file force a faking workaround: *"A lot of times we'll get waveforms from a customer without a Tek Express session file… we'll have to basically fake it and basically try to create a session file, load in the waveforms, but trying to get the exact wording for the name, connection, and all that."*
- File-name pedantry, in the veteran AE's words: *"I told you to load Jeff, load Jeff, and use Jeff. I just told you this is Jeff… If I tell you the file's called Snuffleupagus… it doesn't have to be renamed… There's no actual hardware requirement that the file has to match this thing."*
- Second AE's harder workaround: *"Right now is we basically have to connect to an AWG, hope that we can run through the test so that it saves both… waveform[s] to get the file name convention required, and then copy the waveform… copy the name, paste it over there, and make sure you don't mix it up."*
- Net effect: *"The [feature] isn't used as much as it should be, because we've made it so hard. You have to get everything just right, or it won't do it… And then it doesn't tell you why it couldn't do anything, 'cause the messages were terrible."*
- Additional failure mode: *"Sometimes, like, you recall something and then the path is too long."*

**Segment 4 — The X drive as a TestStand holdover.**
- *"We'll go into the X drive, which is a hangover from NI test stand, which has no rationale or requirement for anything we're doing now, but they hung it over from the original versions because test stand did it that way."*
- *"Seriously, that was defined 20 years ago, and I don't think it's required. Why are we doing that? So, users would expect it to be wherever they want it… you can have a default on the C drive, whatever… but allow them to save… a lot of times they're using it remotely and automating, and they basically want to do analysis on their PC."*

**Segment 5 — Real-world scenario: reprocessing a single waveform captured elsewhere.** The veteran AE narrates a concrete story: run a full suite in the lab, fail T6, capture a fresh T6 waveform at home on a matching setup, and try to reprocess it.
- *"I failed test T6. I go home… I reran T6 myself and grabbed a new waveform. I wanted to reprocess that waveform because I made some changes… I want to come in here and say for T6 use [Jeff]… and right now it's horrible 'cause you gotta match names and… I can't rename the file I just saved to match what you guys did."*

**Segment 6 — Rerun one test and replace its result.**
- *"OK, I selected and I just ran forty-two tests and my device failed one of them. Ohh, I forgot to change my device settings, so I want to go back and run test thirty-three. I just want to run it, and then I want to replace the results in the whole run with… the new waveform. It's like just replace it… I think we do append."*
- Why it matters: *"The users at the end of the day want to give a report to their boss that says, pass, pass, pass, pass, pass, pass, pass. And if the test took eight hours to run, and we're going to make them run all eight hours again, to get the one test. It's like, seriously, let me run this one test. Give me the choice to replace the results."*

**Segment 7 — DUT ID character/length restrictions.**
- *"The DUT ID is very particular about what characters you put in there… And the length of characters… Like you can't put like a star, question mark… There are certain things you can't put in there. I don't know what they are."*
- Suspected root cause, per the AEs: *"My assumption is that the ID is used in the file name… and so we go back to our over-restrictive file name conventions."*
- The ideal, agreed between both AEs: *"Look at standard… Windows file [naming]… if I can name a file name, like anything else, file explorer's… everybody's kind of familiar with that… Just use file explorer, yes, don't over-restrict it."*

## Annotations

- **File-name matching is self-imposed, not a hardware or (probably) SigTest requirement.** Veteran AE: *"I don't think sig test is directly [checking] the file names."* Second AE partially disagrees: *"Sometimes if you just put P0 and not P00, they read it differently… 'cause they have their templates."* Resolution proposed in-session: the software should handle any template/syntax needs *"behind the scenes"* — *"You're gonna do whatever the hell you need behind the scenes and don't change Jeff."*
- **The X drive's origin was debated at length later in the session** (see the instruments/sessions chunk): consensus that it dates to the NI TestStand / SATA-era architecture roughly 20 years ago and survived the migration off TestStand. *"The X Drive was a test stand requirement, and we never got rid of it when we moved out of test stand."*
- **Append vs. replace exists partially in newer versions.** *"Some of the newer ones might do it a little bit, but still not real, not as friendly as it could be."*
- **Remote/automated use is a first-class scenario.** Customers run Tek Express remotely and pull waveforms to their own PCs for analysis — the fixed save location actively fights this.

## Friction notes

- **Mutually exclusive selections don't auto-deselect.** *"You have to like check one before you uncheck the other one because you know you can't have nothing on there."*
- **One field changes other fields with no notification.** *"You thought you were changing one field before fields change."*
- **Pre-recorded waveform selection is inconsistent across versions and opaque.** *"Different versions do it differently… it's very hard to figure out where the folder is, what waveforms are required."*
- **Waveform file-name conventions force elaborate workarounds.** *"We basically have to connect to an AWG, hope that we can run through the test so that it saves both… copy the waveform… copy the name, paste it over there."*
- **Failures are unexplained.** *"It doesn't tell you why it couldn't do anything, 'cause the messages were terrible."*
- **Path-length failures on recall.** *"You recall something and then the path is too long."*
- **X-drive requirement is a 20-year-old holdover.** *"A hangover from NI test stand, which has no rationale or requirement for anything we're doing now."*
- **No single-test rerun with result replacement.** *"If the test took eight hours to run, and we're going to make them run all eight hours again, to get the one test."*
- **DUT ID restrictions are undocumented and over-tight.** *"There are certain things you can't put in there. I don't know what they are."*

## Cross-references

- Test selection UI: [`setup-test-selection`](../screens/setup-test-selection.md); per-test configuration: [`setup-test-selection-config`](../screens/setup-test-selection-config.md).
- DUT panel (DUT ID field, cascading Device/Suite/Version selections): [`setup-dut`](../screens/setup-dut.md); the cascade behavior was also noted by the product team in [tek-products-walkthrough](./tek-products-walkthrough.md) (20:02, "selections need to be remembered").
- Session recall: [`setup-dut-session-browser`](../screens/setup-dut-session-browser.md).
- Results append/replace behavior: [`results`](../screens/results.md).

## Pending references

- **Pre-recorded waveform selection UI** — the specific control/dialog for choosing pre-recorded waveforms is not yet documented as its own screen in the corpus.
- **X drive** — the mapped-drive convention itself has no corpus artifact; it is referenced here and in the session-file discussion.
- **SigTest** (external Intel signal-test tool) and **AWG** (arbitrary waveform generator) — external dependencies referenced in the waveform workarounds; not corpus subjects.

## Confidence notes

- Speaker attribution is inferred (single-mic transcript, all lines labeled "Kemp, Bryan"). Within this chunk the two AE voices trade off rapidly — e.g., the AWG workaround and P0/P00 template caveat come from the second AE, while the "Jeff/Snuffleupagus" naming rant and X-drive history are the veteran voice — but individual sentences in fast exchanges may be swapped between them.
- "Gear" examples: the transcript garbles the standard names ("with the year six, where you're stuck in the different gears… year one, year two, year three-year four"). Read as Gear 1–Gear 6 selections (likely UFS/MIPI-style); the AEs explicitly note the demoed standard didn't have the offending dropdown ("you don't have the UFS one in here").
- "Topo's name" / "load Jeff" passage: "Topo" appears to be a transcription of a colleague's name used in a hypothetical; "Jeff" and "Snuffleupagus" are deliberately arbitrary example file names.
- One AE briefly leaves the room in this segment ("Sorry, I'll be right back") — no content loss evident.
