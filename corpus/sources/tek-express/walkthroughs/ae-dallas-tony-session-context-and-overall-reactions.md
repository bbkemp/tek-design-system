---
provenance: observed
class: walkthrough
product: tek-express
flow_id: ae-dallas-tony-session-context-and-overall-reactions
flow_title: "AE Interview (Dallas & Tony) — Session Context, Prototype Framing, and Overall Workflow Reactions"
recorded_by: "Dallas & Tony (AEs); Bryan Kemp (facilitator)"
recorded_date: 2026-07-15
duration: "1:19:17"
transcript_source: "uploads/transcripts/DallasandJesse.docx"
screens_visited: []
applies_to: [tek-express, tek-design-system]
related_screens: [setup-dut, setup-test-selection, running-test]
related_apis: []
related_hardware: []
related_modules: []
---

# AE Interview (Dallas & Tony) — Session Context, Prototype Framing, and Overall Workflow Reactions

## Summary

Opening segment (~first 10 minutes) of a 1h19m joint interview with two Tektronix Application Engineers, Dallas and Tony, facilitated by Bryan Kemp. Bryan briefly shows the new Tek Express UI prototype "at a glance," frames it as a one-to-one functional port with an updated look and feel, and then deliberately turns the session over to the AEs: react to Tek Express as-is, surface customer likes/dislikes, and bring competitive context. The AEs' headline reactions: the guided step-down workflow of Tek Express is its greatest strength and must be preserved; the quality of error/feedback messaging is its most chronic weakness.

## Goal

Establish the session's purpose and capture the AEs' top-of-mind overall assessment of Tek Express before the detailed walkthrough begins.

## Steps

**Segment 1 — Bryan frames the prototype as visual-only for now.** The prototype shown is an early visual pass, not a functional spec.
- *"We started with, like, we developers on this project, infrastructure set up, and so the first thing we did was just like give them color value and design tokens to work with, so we have a prototype that kind of show you, but it's like not 100% accurate."*
- *"…this will functionality will be one to one, all the all the fields one to one on release, but just an updated look and feel with like we will it is resize available, yes… But we'll show this to you after the next round."*

**Segment 2 — Bryan sets the agenda: dig into Tek Express as-is.**
- *"To get the most out of our time, let you guys dig into Tek Express as is, and… we want to hear like what customers are likes and dislikes, dislikes, like major concerns… And something which is very good, we don't want to change it at all, so that we don't touch it. And also, if you have… any competitive context around what they do and what we have, and what works well for them versus what doesn't work well for us."*

**Segment 3 — An AE asks about the design team's scope; Bryan's side clarifies.**
- AE: *"Are you guys just user experience or are you framework and underpinnings and behaviors of the code under it too?"*
- Design side: *"We are like UI UX providers… We're looking for the user flows functionality."* Functional requests get passed to the product team: *"if there is a request for a new functionality, we can take that feedback and pass it over… if it is feasible, they are going to take it."*

**Segment 4 — The veteran AE's headline positive: the guided step-down flow.**
- *"I love the… the steps, yeah, flow down, you know, set things up, go into the tests, pick the things, all of those things are good."*
- *"That was my biggest thing, one of the big problems, like, you had to be an expert, you had to know to go here, and then go here, go here, and go here, and go back… It's like, hold their hand, so this flow holds that. So, I really like that, and customers appreciate that."*

**Segment 5 — The headline negative: messaging back to the user.**
- *"The thing that we've always struggled with is… our messaging back to the user… Like the microcopy confirmation messages. Yeah, they'll pop up a dialogue and it'll have the information is just missing… It's like, I don't know what to do with that and I work here."*
- *"So how's the customer supposed to know what to do with that message? So, we gotta have more detail, so every, if there's any error or feedback, we have to get better at putting detail on those messages."*

**Segment 6 — The ask to the UI team: make space for real messages.**
- *"As the UI, you guys need to make space for them to use real feedback, right? You know, don't limit it to thirty-two characters or something."*
- Historical excuse from developers, as recounted by the AE: *"They would always [say], 'Ohh, well, we don't have, we don't have space, there's no space for us to…' I'm like, I'll BS, but okay."*
- The bar for a good error message: *"Just make sure that any kind of warnings and errors, those pop-ups have real, a space for real detail. And how they can overcome that error? Yeah, I mean, like, here's the detail and here's some possible fixes. I mean, you gotta help them."*

## Annotations

- **The messaging complaint applies to all error classes.** When asked whether this meant software errors or test errors: *"warning messages, any any kind of errors, one of those where it pops up and it's like, 'Oh, I couldn't run the test,' and it's like, 'Well, you didn't define this'"* — i.e., both application faults and test-precondition failures suffer from the same information-free dialogs.
- **The "hold my hand" framing recurs for the rest of the session.** The veteran AE repeatedly returns to the idea that Tek Express's value is embedded expertise: customers pay for guidance, so the workflow (and its messages) must walk them through rather than assume expertise. This framing anchors most of the later feedback.
- **The space-for-detail complaint is aimed at UI constraints.** The AE explicitly casts truncated messages as (in part) a UI-layout limitation developers hid behind — a direct request that the new UI not impose tight character limits on dialogs and alerts.

## Friction notes

- **Error/confirmation dialogs lack actionable information.** Verbatim: *"They'll pop up a dialogue and it'll have the information is just missing… It's like, I don't know what to do with that and I work here."*
- **Legacy expert-navigation burden (now largely solved by the flow).** Verbatim: *"You had to be an expert, you had to know to go here, and then go here, go here, and go here, and go back."* — cited as the historical problem the current guided flow fixed; preserving that fix is the explicit ask.

## Cross-references

- The guided Setup flow the AEs praise is the DUT → Test Selection → Acquisitions → run sequence documented across [`setup-dut`](../screens/setup-dut.md), [`setup-test-selection`](../screens/setup-test-selection.md), and [`setup-acquisitions`](../screens/setup-acquisitions.md).
- The earlier team-side view that Tek Express is "a very well received application" ([tek-products-walkthrough](./tek-products-walkthrough.md), 38:33) is independently corroborated here by field AEs.

## Pending references

- **The new Tek Express UI prototype** — shown "at a glance" in this session; not yet documented as a corpus asset (prototype drops live under `prototypes/`, outside the corpus).

## Confidence notes

- **Single-microphone recording; every transcript line is attributed to "Kemp, Bryan."** All speaker attribution in this chunk is inferred from context. Bryan's turns are identifiable by facilitator framing; the two AE voices are distinguishable (a veteran voice with long Tek Express history, and a second AE focused on hands-on workflow detail). This session was originally filed as "Dallas and Jesse"; Bryan Kemp corrected the names (2026-07-28): the AEs are **Dallas and Tony**. Later in the session other speakers refer to the second AE as "Tony" (see the sibling chunks), which corroborates the corrected pairing and suggests veteran = Dallas, second AE = Tony — but per-quote voice-to-name mapping is still inferred.
- The transcript references additional people apparently in or near the room: "Brent, is it recording right?" (possibly a mis-transcription of a design-team colleague's name) and, later in the session, "Tapa/Topa" (see the sibling chunks' confidence notes). The in-session "Tony" mentions are the second AE (see previous note). Attendance beyond Bryan + the two AEs is uncertain.
- The source docx contains only one timestamp (0:04, at the start). No per-turn timestamps exist, so Steps are ordered segments rather than timestamped events.
- Small talk about grabbing a meeting room and background noise (early in the session) is omitted.
