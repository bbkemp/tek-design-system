---
provenance: observed
class: walkthrough
product: tek-express
flow_id: ae-sam-ddr-memory-feedback
flow_title: "AE Feedback Session — Sam (DDR / Memory)"
recorded_by: "Sam (AE — DDR / memory applications); Bryan Kemp facilitating"
recorded_date: 2026-07-15
duration: "9:35"
transcript_source: "uploads/transcripts/Sam.docx"
screens_visited: []
applies_to: [tek-express, tek-design-system]
related_screens: [setup-dut, setup-acquisitions, setup-acquisitions-probe-config, setup-test-selection-config]
related_apis: []
related_hardware: []
related_modules: []
---

# AE Feedback Session — Sam (DDR / Memory)

## Summary

Short (9m 35s) in-person feedback session. Bryan Kemp facilitates; Sam is a Tektronix AE whose specialty is DDR / memory testing in TekExpress. The plan was to react to the new TekExpress UI prototype and walk the existing app on a bench scope, but the scope in the room did not have the TekExpress DDR version installed (it had USB / DisplayPort / PCIe) and the application hung on launch — it never even showed its splash screen. The session therefore became mostly verbal: Sam narrates the DDR-specific pain points from memory, reacts briefly to the prototype's configuration screen, and recaps prototype feedback he had previously left as sticky notes in Figma. A follow-up session (remote, or next day) was agreed to before wrapping.

Despite the technical failure, this is a dense chunk: DDR/memory is structurally the odd one out among TekExpress standards (no fixed test specification, probe-centric), and Sam's live-mode / pre-recorded-mode toggling workaround is the most concrete workflow-friction story captured from any AE so far.

## Goal

Capture an AE's reaction to the TekExpress UI prototype and surface DDR/memory-specific pain points in the existing application.

## Steps

Source transcript is a single continuous block with one timestamp (0:03); speaker turns and step boundaries below are inferred (see Confidence notes).

**Step 1 — [0:03] — Sam frames DDR as the outlier and checks the bench scope.** Sam asks whether the scope in the room has the TekExpress DDR version; it has USB / DisplayPort / PCIe instead.

- **Sam:** *"It's kind of sometimes hard to separate the workflow from the UI. So I don't know, does this scope by chance have the Tek Express DDR version?"* … *"It has USB display port PC[Ie]."*
- **Sam:** *"The DDR version is kind of the only one that's assuming you're using the [probes]. So sometimes it's not easy to work around that with[in] Tek Express right now."*

**Step 2 — Sam describes the probe-controls fragmentation on the DDR front panel.** Probe controls live separately from channel assignment; menus are split in ways he doesn't think are necessary.

- **Sam:** *"On the DDR front panel … of Tek Express. There's like some probe controls, but that lives like separately from where you actually tell it what channels your probes are on. And then sometimes there's like the menus are separated in ways that I guess I don't think they need to be, I suppose."*

**Step 3 — Attempted app launch; it hangs.** They try to launch TekExpress on the scope while continuing to talk; it never comes up.

- **Bryan (inferred):** *"Is it just stuck on the splash or is it launching here?"* — **Sam (inferred):** *"No, it was not even showing the splash."*

**Step 4 — Sam gives generic feedback while waiting: error reporting.** Error reporting is opaque, and it bites hardest in DDR pre-recorded mode.

- **Sam:** *"The error reporting is not obvious where it goes wrong. And again, especially with DDR, because this comes up a lot with trying to run like pre-recorded mode."*

**Step 5 — Sam explains why DDR/offline mode is uniquely assumption-laden.** Other standards have a specification to follow; memory doesn't, so TekExpress makes hidden assumptions in offline mode.

- **Sam:** *"The other standards have a lot more of a like specification to follow, so there's less variables associated with that. In memory … there's no test specifications, so there's a lot more flexibility in how you [con]figure Tek Express, and so when you switch to offline mode, there's a lot of assumptions that Tek Express is making that the user is not aware of necessarily."*

**Step 6 — Sam walks the live-mode / pre-recorded-mode toggle workaround.** Settings can only be changed in live mode; you must set up in live mode, then switch to pre-recorded mode to run.

- **Sam:** *"You have to toggle between live mode and pre-recorded mode to like change the settings, so you'll need to go through a live mode setup and then … switch to pre-recorded mode and then run it from there."* — **Bryan (inferred):** *"Which is not intuitive."* — **Sam:** *"No, no, no."*

**Step 7 — Sam tells the probe-channel-swap failure story.** A customer-supplied waveform set fails in pre-recorded mode with a generic error; the real cause is that probes moved channels, and the fix requires going back through live mode.

- **Sam:** *"Since memory is quite commonly working with probes, those tend to move channels all the time … a customer might send you a waveform … 'why is this set of waveforms working? And the next set the … customer sent me not working in pre-recorded mode?' — you'll just get some generic error … it is not obvious that … what actually happened was the probe swapped, so I have to go back into live mode again and then physically change in the live configuration where the channels are, [then] go to [pre-re]corded mode to run it."*
- **Sam, on the workaround:** *"Once people are aware of it, they're first of all, like, okay, I can work around that now, but why? Like, why can't I control this from pre-recorded mode in the first place?"*
- Sam starts to add that acquisitions settings are another place the same hidden-assumption pattern pops up — *"another setting where that pops up is like the acquisitions"* — but the thread is interrupted (see Confidence notes).

**Step 8 — Prototype reaction: the configuration screen doesn't fit memory.** Looking at the prototype's setup → configuration view, Sam says it doesn't map to how memory works — memory has no measurement-specific controls in that location.

- **Bryan (inferred):** *"I wonder if the prototype's actually accurate on that one. So this is like, it's like a rough draft. It'll get better looking and more accurate."*
- **Sam:** *"This screen makes no sense for memory … no, this is nonsense."*
- **Sam:** *"'Cause there's in memory there's not like measurement-specific controls. … well, there is, they just live in a different place, I guess."*

**Step 9 — With the app still down, Sam narrates de-embedding / filter assignment for the recording.** De-embedding is a big deal in memory; today filter assignment is one big flat list of file paths.

- **Sam:** *"Maybe just for the recording, what I'll say too is like de-embedding … [de-]embedding is like a really big thing in memory. And right now, you might have like multiple filters for the same acquisition even. … Right now when you open that Tek Express, you kind of get this just big giant list of like file pathways basically to assign to a signal."*
- **Sam:** *"It's not laid out unintuitively, I would say, but I think it could be laid out a lot cleaner to better signify the intent … I think it just [needs] to be organized in a more clear way, where, okay, these are the filters I use for these measurements. These are the filters I would use for these measurements. Pick[er] kind of thing. Whereas now you kind of just get like a big list."*
- **Sam:** *"If you like examine it for a bit, like it tells you what they're for, but it takes a minute or two to be like, okay, I have a filter for my [w]rite burst measurement. Which one of these is the one I'm trying to put it in?"* — Bryan (inferred) offers *"scannable"* as the summary word; Sam agrees.

**Step 10 — Sam details the scattered probe controls.** Tri-mode switching and voltage levels live in different windows.

- **Sam:** *"Memory will use like the tri-mode capability with the probes where you might want to switch it between like A mode, B mode, and differential mode. So that's like one of the controls. And then there's another one for like voltage levels, that just probably should be in the same spot because I'm kind of bouncing around sometimes."*

**Step 11 — Launch failure conceded; follow-up agreed.** Bryan apologizes for the technical issue and offers a remote follow-up or another slot the next day; Sam accepts.

- **Bryan (inferred):** *"I'm so sorry."* — **Sam (inferred):** *"No, it's fine. It's fine. Like, I'm super happy to like do a follow-up."*

**Step 12 — Sam recaps his Figma sticky-note feedback on the prototype.** Two items he remembers of several left asynchronously:

1. **Next-button placement consistency.** — **Sam:** *"Depending on which window and how you've like sized this, like the next button, sometimes it … it'd be nice if it was just in the same spot every time, so I don't have to keep like scrolling down, you know? … I think I even drew a diagram, like, maybe we could just like put it here … just like underneath that … like the previous and next."*
2. **A responsive-reflow behavior he finds pointless.** — **Sam:** *"The other one I do remember though was I don't think we needed necessarily to like, if you resize it small enough, like this moves up to there, which like I get why it does that, but like I just — oh, it's wonky. Like why, why, why would you need that?"*

- Sam notes he had more sticky notes he can't recall: *"I think I did have a few more, but I'd be happy to like go through those in more detail, like at some other time."* Bryan (inferred) responds that a next round of UI updates will go out incorporating the feedback.

**Step 13 — Sam explains his review posture toward the prototype; Bryan endorses it.**

- **Sam:** *"I'm not always sure if like it's an intent decision … to have it like in the Figma like this, or if that's just like we haven't gotten to it yet, or if it's [a] limitation, so I just … assume[d] that, like, everything was intentional … I just don't want to assume, oh, they're not going to keep it like that, and then, like, I should have said something."*
- **Bryan (inferred):** *"That's what we prefer too … if it is not relevant, we will let you know. … No hard feelings."*

**Step 14 — Wrap.** Thanks exchanged; possible hallway follow-up next day, otherwise scheduled. After Sam leaves: *"Dude, that's it. We couldn't watch it. We'll reschedule."*

## Annotations

- **DDR/memory is structurally different from every other TekExpress standard.** Sam: *"the other standards have a lot more of a … specification to follow … In memory there's no test specifications, so there's a lot more flexibility in how you [con]figure Tek Express."* The consequence is that offline/pre-recorded mode carries hidden assumptions in DDR that don't exist elsewhere. Any redesign validated only against spec-driven standards (USB, DisplayPort, PCIe) will miss the memory case.
- **DDR is the probe-centric plugin.** Sam: *"The DDR version is kind of the only one that's assuming you're using the [probes]."* Probes move channels frequently in memory work, which is exactly what makes the live/pre-recorded settings split so painful — the thing most likely to change (channel assignment) is the thing locked behind a mode switch.
- **The mode-toggle workaround is known and accepted by experienced users — but resented.** Sam: *"Once people are aware of it, they're … like, okay, I can work around that now, but why? Like, why can't I control this from pre-recorded mode in the first place?"* This distinguishes a learnability problem from a capability gap: users learn the workaround, but the underlying constraint is what they question.
- **De-embedding filters want measurement-grouped organization, not a flat list.** Sam: *"these are the filters I use for these measurements … Pick[er] kind of thing. Whereas now you kind of just get like a big list."* He explicitly frames current layout as "not laid out unintuitively" but not *scannable* — an information-architecture request, not a redesign-from-scratch request.
- **Sam reviewed the Figma prototype assuming every detail was intentional** and flagged accordingly, preferring to over-report; Bryan endorsed that as the preferred reviewer posture. Useful context for weighing his sticky-note feedback: it deliberately includes items that may already be known-unfinished.
- **The prototype is explicitly framed as a rough draft.** Bryan (inferred): *"It's like a rough draft. It'll get better looking and more accurate."* Sam's "makes no sense for memory" reaction is therefore an accuracy gap being surfaced early, as intended by the session format.

## Friction notes

All quotes Sam unless noted (attribution inferred — see Confidence notes).

- **Error reporting is opaque:** *"The error reporting is not obvious where it goes wrong. And again, especially with DDR, because this comes up a lot with trying to run like pre-recorded mode."*
- **Hidden assumptions in offline mode:** *"When you switch to offline mode, there's a lot of assumptions that Tek Express is making that the user is not aware of necessarily."*
- **Settings locked behind live mode:** *"You have to toggle between live mode and pre-recorded mode to like change the settings, so you'll need to go through a live mode setup and then … switch to pre-recorded mode and then run it from there"* — confirmed "not intuitive."
- **Generic errors mask the probe-swap root cause:** *"[the] customer sent me [waveforms] not working in pre-recorded mode — you'll just get some generic error … it is not obvious that … what actually happened was the probe swapped, so I have to go back into live mode again and then physically change in the live configuration where the channels are."*
- **The workaround's existence is itself the complaint:** *"Okay, I can work around that now, but why? Like, why can't I control this from pre-recorded mode in the first place?"*
- **Prototype configuration screen doesn't fit memory:** *"This screen makes no sense for memory … no, this is nonsense."* (Memory's measurement controls *"live in a different place."*)
- **De-embedding filter assignment is a flat, slow-to-scan list:** *"You kind of get this just big giant list of like file pathways basically to assign to a signal … it takes a minute or two to be like, okay, I have a filter for my [w]rite burst measurement. Which one of these is the one I'm trying to put it in?"*
- **Probe controls scattered across windows:** *"There's like some probe controls, but that lives like separately from where you actually tell it what channels your probes are on"*; tri-mode (A / B / differential) in one place, *"voltage levels, that just probably should be in the same spot because I'm kind of bouncing around sometimes."*
- **Prototype: Next button moves with window size:** *"The next button, sometimes it … it'd be nice if it was just in the same spot every time, so I don't have to keep like scrolling down."*
- **Prototype: reflow-on-resize behavior feels unnecessary:** *"If you resize it small enough, like this moves up to there, which like I get why it does that, but … it's wonky. Like why, why, why would you need that?"*
- **Session logistics: the app never launched on the bench scope** (*"it was not even showing the splash"*), and the scope lacked the DDR plugin entirely — the live-walkthrough half of the session was lost and rescheduled.

## Cross-references

- Probe configuration UI in the existing app: [`setup-acquisitions-probe-config`](../screens/setup-acquisitions-probe-config.md) — the closest documented screen to Sam's scattered-probe-controls complaint (tri-mode, voltage levels, channel assignment).
- Acquisitions settings: [`setup-acquisitions`](../screens/setup-acquisitions.md) — Sam names acquisitions as another spot where hidden live/pre-recorded assumptions surface.
- Per-test configuration dialog: [`setup-test-selection-config`](../screens/setup-test-selection-config.md) — the documented (USB/DP-style) counterpart of the prototype configuration screen Sam says "makes no sense for memory."
- DUT-level setup: [`setup-dut`](../screens/setup-dut.md) — Bryan (inferred) asks whether the probe controls belong at the DUT level.
- Contrast with [`tek-products-walkthrough`](./tek-products-walkthrough.md): that demo covered the spec-driven plugins (DP/USB); Sam's session is the first corpus content on the DDR/memory plugin, which he positions as the structural outlier.
- Error-reporting and mode-toggle friction complements the meeting-level friction in [`ux-feedback-and-open-questions`](./ux-feedback-and-open-questions.md).

## Pending references

- **TekExpress DDR plugin screens** — not in the corpus. No screenshots of the DDR front panel, probe controls, live/pre-recorded mode toggle, or de-embedding filter-assignment list exist under `screens/`. Sam's session is currently the only source on all of these; the rescheduled follow-up (remote walkthrough) is the natural capture opportunity.
- **Live mode vs. pre-recorded (offline) mode** — the mode toggle itself is undocumented; no screen shows it.
- **De-embedding filter assignment UI** — the "big giant list of file pathways" screen is undocumented.
- **Tri-mode probe control (A / B / differential) and probe voltage-level control** — the two windows Sam bounces between are undocumented.
- **The prototype configuration screen Sam reacted to** — prototype frames are not corpus screens; the reaction is captured here, the artifact lives in Figma / `prototypes/`.
- **Sam's remaining Figma sticky notes** — Sam recalls only two of several; the full set is unprocessed (*"we have like a ton to process"*). Follow-up session to enumerate them.
- **"BRIDevOpps" screenshots** — Sam mentions *"I think we have screenshots of BRIDevOpps, the one they gave us screenshots of"*; the name is garbled in transcription and the referent is unidentified.

## Confidence notes

- **Speaker attribution is inferred throughout.** The session was recorded with one microphone; the Teams transcript attributes every line to "Kemp, Bryan." Real speakers are Bryan Kemp (facilitator), Sam (AE), and at least one other person present ("Have a good one, guys" and the post-exit exchange imply a second facilitator/observer). Turns were split by conversational context; quotes marked "(inferred)" are the ones where attribution is least certain. The substantive DDR/memory content is confidently Sam's — no one else in the room has that expertise.
- **"Sam" is the only name available for the AE** (from the transcript filename); no surname appears in the source.
- **Timestamps are absent from the source** beyond a single 0:03 marker; the whole session is transcribed as one continuous block. Step ordering follows transcript order; no per-step timestamps are given to avoid fabrication.
- **Transcription errors corrected in brackets:** "ropes" → "[probes]", "Intec Express" → "with[in] Tek Express", "quarter mode" → "[pre-re]corded mode", "right burst" → "[w]rite burst", "Pick up kind of thing" → "Pick[er] kind of thing", "USB display port PC" → "USB / DisplayPort / PC[Ie]". Each is a high-confidence phonetic correction from domain context; originals noted here so the source remains checkable.
- **Garbled/unresolved passages:** *"I think we have screenshots of BRIDevOpps"*; *"Find out. We transitioned. So I know the. Ohh, it's China, hopefully it pops up"* (likely launch-related chatter, possibly mis-transcribed); *"it's hitting not too much of time … it's garbage"* (context suggests the launch delay or the screen content — unclear which). None affect the substantive findings.
- **Ambiguity — "this screen makes no sense for memory":** the immediately preceding turn is Bryan wondering *"if the prototype's actually accurate,"* so this is read as a reaction to the **prototype's** configuration screen, not the live app (which never launched). Confidence: moderate-high.
- **The acquisitions thread is truncated.** Sam starts to describe acquisitions as another hidden-assumption location and is interrupted (*"Oh, that's — there's your recording there"*); the point is captured but undeveloped.
- **Small talk, launch-waiting chatter, and scheduling logistics are summarized, not quoted** (Steps 3, 11, 14). No content was lost — those passages contain no product observations beyond the launch failure itself.
- **No sensitive information found.** The customer in the waveform story is anonymous in the source ("a customer"); no credentials, no unannounced product names beyond the garbled "BRIDevOpps" (left as-is since its referent is unknown).
- **Session was cut short by the launch failure** — 9:35 against a presumably longer intended slot. A follow-up (remote or next-day) was agreed; the existing-app walkthrough portion of this session effectively did not happen.
