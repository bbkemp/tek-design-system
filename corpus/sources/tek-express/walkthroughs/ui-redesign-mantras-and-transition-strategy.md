---
provenance: observed
class: walkthrough
product: tek-express
flow_id: ui-redesign-mantras-and-transition-strategy
flow_title: UI/UX deep-dive priorities, deployment friction, and incremental transition strategy
recorded_by: [Bera, Subhasis (Principal Product Manager, Solutions Platform and Decoders)]
participants: [Kemp, Bryan; Bera, Subhasis; Jogdand, Arpita]
recorded_date: 2026-06-23
duration: ~6 min (segment ~54:53 – ~1:00:39 of a 1h 1m meeting)
transcript_source: uploads/transcripts/AU VoC Sync up.docx
screens_visited: []
applies_to: [tek-express, tek-flow]
related_screens: [setup-dut, setup-dut-session-browser]
related_apis: []
related_hardware: []
---

# UI/UX deep-dive priorities, deployment friction, and incremental transition strategy

## Summary

The closing segment of the meeting where Subhasis (a) commits to dumping the historical VOC materials into the chat (which is **how the rest of the 2026-06-25 batch 2 corpus material arrived**), (b) acknowledges the AU UX team will build their own VOC guide from the UX perspective, and (c) lays out his **three redesign mantras**: take a *guided* approach to customer questions, the customer-transition must be **easy** (the Mazda-to-Jaguar / "no manual to drive" analogy), and the *bandwagon effect* of legacy UI familiarity is a real force the redesign must respect.

## Goal

Establish the redesign team's working principles before they author their own VOC guide and start the visual design work.

## Starting state

Subhasis has just finished walking through the customer landscape (see [customer-market-and-platform-context.md](./customer-market-and-platform-context.md)) and the personas (see [personas-and-jobs-to-be-done.md](./personas-and-jobs-to-be-done.md)). Bryan asks Subhasis to share materials.

## Steps

### 1. The materials handoff (54:53 – 56:08)

> *"Well, after the meeting, could you add all the PowerPoint, everything to this chat? Just that we went over so I can make sure I have it all."* — Kemp (54:53)
>
> *"Yes, sir. So I will do, I just moved my laptop, so I will open my previous laptop and I will dump everything on this chat. … I will put the synthesis document. So this is the list. I'll put synthesis. I will put the Bangkok slides. I will, I have already linked the VOC guide. I will give you every, I did have a customer list. I did 48 VOCs in 2020 during pandemic. I will probably try to connect to all of these sales guys again. In AU, if these apps application engineers come there, probably by the end of your day, you'll have everything in in this chat grid."* — Bera (55:01 – 56:08)

**Materials Subhasis commits to share:**
- VOC synthesis document
- Bangkok slides
- VOC guide (already linked)
- Customer list from 48 VOCs conducted in 2020 during the pandemic

> *"I'll just request access anything that doesn't let me."* — Kemp (56:08)

This handoff is the **origin of the 2026-06-25 batch 2 material that arrived in this corpus**: TekFlow VOC synthesis decks, Designcon 2023 VOC, mAR 2023 India Customer VOC, GA Empathy Discussion Guide, the Tx-Rx Solutions Platform VOC guide, plus the TekExpress Needed Features summary all reflect Subhasis's planned dump.

### 2. The AU team's UX-perspective VOC guide (56:23 – 56:52)

> *"We'll just run through all these documents and we'll create our own VOC guide from UX perspective so that both of them will be a complete VOC guide for us."* — Jogdand, Arpita

> *"So you will probably want to, because the remaining things are equally important, okay? I don't want to let go anything else, but if you use this, this one, UI UX deep dive section 4, you can add your stuff in here."* — Bera

Subhasis points the AU team at **Section 4 of the existing UI/UX deep-dive** (the Tx-Rx Solutions Platform VOC guide PDF) as the extension point for the UX team's questions.

### 3. The three redesign mantras (~56:58 – 59:11)

#### Mantra 1: Guided customer engagement, not direct "wizard vs free flow"

> *"I did something from the historic VOCs we had, which is through the skills that I had on my co-pilot and Claude. So guided wizard free flow manual. I wouldn't jump into asking directly, do you want a wizard or a free flow? take the customer off guard. So I think we have to take a guided approach. You guys can, you guys are the best just to ask the question you guys need for the relevance of building the user experience."* — Bera

Direct binary questions ("wizard or free flow?") prime the customer toward an answer they wouldn't otherwise pick. Take a *guided* approach: surface the underlying need, let the customer describe it, then route to the right paradigm.

#### Mantra 2: The Mazda-to-Jaguar analogy — no manual required to drive

> *"One request I have in the past, I requested the vendor who was there initially when I was working with this program. That if I move from my Mazda. To a Jaguar. Please don't ask me to read a user manual to drive from probably Boston to New York City. Just let me get into the car and I should not see any manual to get started driving the cars. I'm not bothered about the bells and whistles in a German car. The indicator is on the right, in an American car it's on the left and I need the gear up and the odometer and things to drive down and the brake pedal to be in a place where the brake pedal is supposed to be. to get my job completed to go from point A to point B."* — Bera

**The redesign must let an existing TekExpress user get to their job-to-be-done without a manual.** Transferable to TekExpress: a user who knows TekExpress 5 should be able to open the new version and **drive their existing workflow immediately**. Bells and whistles can differ; the brake pedal cannot move.

#### Mantra 3: The bandwagon effect of legacy UI familiarity

> *"the basic fundamental is the customer should be easily be able to move from Tek Express 5 to whatever we call it in the future, slowly and gradually, because there is a bandwagon effect, although it might not be the best UX. There is a bandwagon effect of the user interface that our customers have been using. And Keyser also followed that. By the way, first, I think first automation software was released by Tetronics and immediately followed by Keyser. The user experience still remains more or less the same. But we also know that more of it will become … more of an AI based non-user interface in the future."* — Bera

**Three things in tension:**
1. **Legacy UI bandwagon** is a real force — both Tek's and Keysight's UIs converged on a similar shape because customers had momentum.
2. **AI-based non-UI futures** are coming — the trend is away from explicit UI for some workflows.
3. **Incremental transition for current expert customers** is the bridge between (1) and (2).

> *"But the current expert customers probably would want to have an easy transition. What our sales guys usually ask. Make it simple enough than what we have, if possible, or leave it as it."* — Bera (59:11)

**The sales floor's ask:** simpler than what we have, or no change at all. Don't introduce new friction in pursuit of "modernization."

### 4. The deployment-friction wedge (~59:30 – 1:00:24)

> *"basically, the example which I gave that you need to install service and to move from scope to laptop, again, you have to search for the installer. For that, it seems you need to read a deployment manual. That was how Clarius was. Now, I need to read a deployment manual. to deploy the software itself is a friction in user experience. or the usability of getting started. So these are the key mantras I would stick to, making it simpler and you guys are experts to help reduce the friction. You know, dumb it down to an extent that I don't probably need such a big. user manual or multiple user manuals to get started."* — Bera

**Deployment is the first UX surface.** If installing the software requires reading a manual, every other UX win is partially erased. Clarius failed here; TekExpress must not.

### 5. Close (1:00:39 – 1:01:07)

Subhasis confirms availability on Teams across time zones. Arpita books a Thursday follow-up. Bryan thanks Subhasis "for all the TEK express work as a whole."

## Friction notes

- **Deployment manual requirement** is named as the single highest-impact friction in the existing TekExpress experience.
- **No clear separation** today between "wizard for Guru Gus" and "fast-path for Push-Button Pete" — both currently drive the same wizard. Mantra 1 (guided engagement) implies the redesign team should *discover* this rather than ask the customer directly.
- **AI-driven non-UI surfaces** are flagged as the eventual replacement layer. Tension with the bandwagon effect (legacy UI familiarity): the redesign must not jump too far ahead of the bandwagon.

## Annotations

> *"Make it simple enough than what we have, if possible, or leave it as it."*

This is the **single most actionable redesign constraint**. It's framed as a sales-floor ask but reads as a hard floor: do not make the UI *more complex* than today's TekExpress 5.

> *"there is a bandwagon effect, although it might not be the best UX"*

Subhasis acknowledges the legacy UI is **not** the best UX. The bandwagon force keeps customers there. The redesign must navigate this acknowledgment honestly — don't preserve patterns just because they're familiar, but don't disrupt familiar patterns without a deliberately better replacement.

> *"the current expert customers probably would want to have an easy transition"*

Expert customers (Guru Gus, especially) are the most invested in current patterns. The transition strategy should center on **them not noticing the migration broke their flow**.

## Cross-references

- **Personas (Guru Gus / Pete / Max) underlying these mantras**: [personas-and-jobs-to-be-done.md](./personas-and-jobs-to-be-done.md).
- **Customer market context** that informs the bandwagon force: [customer-market-and-platform-context.md](./customer-market-and-platform-context.md).
- **VOC interview methodology** (the guide Subhasis references): `corpus/sources/tek-express/uploads/artifacts/Tx-Rx Solutions Platform VOC guide Draft _08_TEK-CONFIDENTIAL.pdf` (gitignored source).
- **Customer-feature requests** that anchor the "simpler than what we have" constraint: `corpus/sources/tek-express/uploads/artifacts/TekExpress_Needed_Features 1.md` (gitignored source).
- **Competitive parity** with Keysight on UI bandwagon: [`audits/competitive/2026-06-25-tek-express-vs-keysight-d9040dppc/`](../../../../audits/competitive/2026-06-25-tek-express-vs-keysight-d9040dppc/).
- **Redesign baseline audit** where these mantras can be cited as design constraints: [`audits/prototype/2026-06-25-tek-express-ds-v2-baseline/`](../../../../audits/prototype/2026-06-25-tek-express-ds-v2-baseline/).

## Pending references

- **Bangkok slides**, **VOC synthesis document**, **customer list from 48 VOCs (2020 pandemic)** — Subhasis committed to share these. Some are in this batch (Designcon 2023, mAR 2023 India); others may not yet have arrived in `_inbox/`.
- **Section 4 of the UI/UX deep-dive** in the Tx-Rx VOC guide — the AU UX team's extension point. Process via `/document-pdf` when ready.

## Confidence notes

- **The Mazda-to-Jaguar analogy** is verbatim from transcript. Subhasis tells it as a request he made to a prior vendor — not specific to TekExpress, but a transferable principle.
- **"first automation software was released by Tetronics and immediately followed by Keyser"** — claim about industry history, not independently verified. The transcript has "Keyser" / "Keysight" interchangeably and "Tetronics" / "Tektronix" — preserved as transcribed.
- **The "AI based non-user interface in the future"** statement is forward-looking strategy speculation; treat as Subhasis's framing, not a Tek roadmap commitment.
- **The mantras themselves** are surfaced from a closing-segment monologue. They are not numbered or labeled in the original transcript — the "three mantras" framing is auditor synthesis for clarity. The underlying quotes are verbatim.
