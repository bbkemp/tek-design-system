---
class: walkthrough
product: tek-express
flow_id: ux-feedback-and-open-questions
flow_title: "UX Feedback and Open Design Questions"
recorded_by: Multiple
recorded_date: 2026-04-23
duration: "~18 min (46:00 to 1:04:00)"
transcript_source: "uploads/transcripts/TekExpress & TekRx Overview Transcript(By Pranavi).docx"
screens_visited: [running-test, status-test-status, plots]
applies_to: [tek-express, tek-design-system]
related_screens: [running-test, plots, results]
related_apis: []
related_hardware: []
related_modules: [packages-tokens, packages-ui]
---

# UX Feedback and Open Design Questions

## Summary

Final ~18 minutes of the meeting. After the product demos, the conversation opens up. Rick Kuhlman raises a window-sizing question (half-screen mode); Richard Patterson articulates the design challenge of responsive horizontal layouts; Bryan responds with container-breakpoint commitments. Mahesha discusses composite controls. Rick then raises the most pointed UX-feedback item of the meeting: charts get re-implemented poorly and lose source-tool richness. Patterson asks about diagrams. The meeting ends with broad "we'll set the agenda for next time" framing.

## Goal

Surface UX-feedback and architectural-open-question content from the design-system follow-up so it does not get lost between meetings.

## Steps

**48:55 — Rick Kuhlman asks how normal users use TekExpress.** *"Okay, but that's how normal people would use it, is fully maximized. Or is there a reason? My question is, is there a reason? Is there stuff going on elsewhere on the screen? Maybe it's the remote control…"*

**49:27 — Srevats explains the live-feedback / focus-shift dynamic.** *"You don't always need to, but there are live feedback that's coming in terms of what is running, whether the right kind of signal is there. But once you see that, you want to focus…"*

**50:05 — Rick proposes half-screen docking as a key affordance.** *"Maybe it's a key thing. I don't know if it's a key thing or not, but maybe it's a key thing that these need to be designed in such a way to dock half and half."* → he's pointing at the existing minimised window ([`running-test`](../../screens/running-test.md)) and asking whether something between full and minimised is a real user need.

**50:40 — Srevats opens the design question.** *"It's a good observation. I think, I don't know, Richard, if this is something that we want to build in terms of something we want to validate with our experts, right? Like what Rick is selling, if…"*

**51:14 — Richard Patterson articulates the design challenge.** *"What Rick said, but if it was horizontal and… How do these different screens look if you were to stretch them out to be screen width, but only like one-third of the screen height?"*

**51:34 — Patterson identifies the layout density problem.** *"I think that's a design challenge of how to make it manageable because there's so many settings in a small space already. If you ask me, like just looking at all these letters, right, for the different…"*

**51:56 — Bryan responds with the container-breakpoints commitment.** *"One of the things that we're baking into the design system is container breakpoints. Instead of doing like viewport breakpoints, the responsiveness is on the container level."* — **High-signal architectural decision.**

**52:31 — Bryan extends with the use case.** *"If that application behind it, that scope within one, if that's big and horizontal, if they could drag this modal kind of view into a taller, skinny one to the right and it respond…"*

**53:34 — Srevats describes the SCGETN dynamic-table pattern.** *"This SCGETN table where you would go and pick a few settings and the table would get populated dynamically for you to fill as settings."*

**54:10 — Mahesha on the historical composite-control pattern.** *"I think we created some composite controls where we have a label and then a control and then some of the things glued together as one custom control. I don't remember where we were using it. It's been…"* — references the prior WinForms / Terminator approach.

**54:59 — Srevats describes the chart richness in TekExpress.** *"These are log charts. There could be several log charts, the axis will be different, the grid points will be different. The purpose of, like, for instance, all these, all these markings that we…"*

**55:23 — Rick raises the chart-library re-implementation pain.** *"But the real thing is, is that we have a really, we go, it feels like we go and sort of remake charts in the native place. And then what we, what happens is we lose all the richness of something that…"* — **The most pointed friction note in the meeting.**

**55:43 — Rick extends.** *"Get extended into this, we go and remake them all. So, you know, thinking about a library of components is really important, but that particular component needs a whole library in and of itself, and it…"*

**56:32 — Bryan asks for direction on the chart library.** *"That'd be helpful if someone could help me figure out what would be most better, like a library that could be used by the most, just so I could get familiar with it and start working that into the design…"* — **Open question: which charting library should the DS standardise on?**

**57:55 — Mahesha on parallelization in TekRx.** *"Technically it's possible, but for this use case of RX, it's mostly sequential because unless you do the previous step, like calibration step, you cannot go to a test. So the parallelization be…"* — TekRx is inherently sequential due to calibration dependencies.

**1:00:09 — Patterson on diagram standards.** *"That would say like you have to have a vector graphics version, you have to have a mermaid diagram version. Things have to be laid out in a certain way or something like that, or even like, is that…"* — Patterson raises the question of standardising diagram authoring (Mermaid vs. vector vs. raster).

**1:01:44 — Bryan on a Figma-based diagram builder concept.** *"Just not to not spitball, like I won't get into it too deep, but like this is something that we could definitely make a little like a like a little builder in Sigma with components that you go in to…"* — proposes a Figma-component-based diagram authoring kit.

**1:02:14 — Bryan asks for sample diagrams to audit.** *"It'd be really helpful, I don't know if anyone has the bandwidth or to get like kind of audits of the charts and diagrams, kind of the good sample set. And, like, screenshots of Tech Express in the…"* — **The corpus this folder lives in is the response to this ask.** The screenshots Bryan asked for are now in `uploads/photos/`; the chart and diagram audits are upstream future work.

**1:03:09 — Srevats wraps the meeting.** *"I think we covered a fair bit of ground today. So maybe, Arpita, you can discuss more and set the agenda for the next discussion what we want to do next. But any closing thoughts from…"*

## Annotations

- **Container breakpoints are committed.** Bryan: *"Instead of doing like viewport breakpoints, the responsiveness is on the container level."* This is the architectural answer to Patterson's "what if it was horizontal" layout question — and it's already baked into the DS, not speculative.
- **Composite controls as the missing primitive.** Mahesha's "label + control + glue" composite — the DS does not currently have a labelled-input composite primitive; every existing chunk handles label-with-input as an ad-hoc compose. Worth surfacing as a candidate primitive.
- **The chart library is the biggest open architectural decision.** Rick's *"we remake charts in the native place and lose the richness"* is the highest-impact friction note in the meeting. The DS does not currently have a chart primitive (no `tek-plot` shipped yet). Any redesign of TekExpress will have to either pick a charting library or live with the chart-richness loss.
- **Diagrams need a standard.** Patterson and Bryan converge on the idea of a Figma-component-based diagram authoring kit. Whether Mermaid is the right text-encoding for diagrams is open.
- **TekRx is inherently sequential.** Mahesha's parallelization comment confirms the wizard-based pattern for TekRx is fundamental, not just a UX choice.
- **This corpus is the response to a specific ask.** Bryan asks (1:02:14) for "screenshots of Tech Express" and an "audit of the charts and diagrams." The screenshots are in `uploads/photos/`; the audit PDF is in `uploads/pdfs/`; this transcript itself was the prompt. The corpus closes the loop on Bryan's ask.

## Friction notes

- **Charts in TekExpress lose source-tool richness when re-implemented natively.** Rick Kuhlman, verbatim: *"We go and sort of remake charts in the native place. And then what we happens is we lose all the richness of something that … get extended into this, we go and remake them all."* This is the **single most actionable friction note from the meeting** for the redesign team.
- **No agreement on which charting library to standardise on.** Bryan explicitly asks for help picking one. Until that decision is made, the DS has a gap for chart-heavy products like TekExpress.
- **Window-sizing modes beyond full / minimised are unvalidated.** Rick proposes half-screen docking; Srevats flags it for validation with experts. No commitment.
- **Density problem on small layouts.** Patterson: *"so many settings in a small space already."* Container breakpoints are a partial answer; some screens may need a fundamentally different layout in the redesign.

## Cross-references

- The minimised-window state Rick references is documented in [`running-test.md`](../../screens/running-test.md).
- The chart-heavy plot screen is [`plots.md`](../../screens/plots.md) — its `tek-plot` candidate primitive proposal predates this meeting but is reinforced by Rick's chart-richness friction note.
- Container breakpoints will eventually be documented in the DS — currently a planned feature, no chunk yet. CLAUDE.md "what's in flight" table is the closest reference.
- The composite-control pattern Mahesha describes is the same need addressed by the proposed `tek-numeric-tile` primitive in the 2450-EC corpus (`audits/prototype/2026-05-12-2450-ec-corpus-snapshot/report.md`).

## Pending references

- **Chart library decision** — open. The DS-v2 architecture document should grow a section once a decision is made.
- **Half-screen / docked-window UX validation** — Srevats committed to validate with experts; no follow-up captured.
- **Mermaid diagram standardisation** — Patterson floated; no commitment.
- **TEKBIDP** — Srevats asked "any thoughts on TEKBIDP?" earlier in the meeting; no follow-up in this segment.

## Confidence notes

- Some turns end mid-sentence in the transcript ("…the parallelization be…" / "we go and remake them all. So…") — these reflect the natural cadence of a recorded meeting, not corruption.
- Speaker names are transcribed as they appear in the source (`Kemp, Bryan`, `Israel, Bill`, `Gl, Mahesha`, `Kuhlman, Rick`, `Patterson, Richard`, `Pardeshi, Hemant`, `Laxman, Srevats`, `Chanda, Pranavi`).
- The chart-library complaint and the half-screen-mode question are the two highest-RAG-value friction notes from the meeting. They are quoted verbatim above.
