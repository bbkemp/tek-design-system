---
provenance: observed
class: walkthrough
product: tek-express
flow_id: persona-evolution-physical-ai-and-voc-methodology
flow_title: Persona evolution toward AI, the "physical AI products" theme, and the VOC methodology / competitive-prep plan
recorded_by: [Bera, Subhasis (Principal Product Manager, Solutions Platform and Decoders)]
participants: [Kemp, Bryan; Bera, Subhasis; Jogdand, Arpita; Keyser, Evan (left at 24:30)]
recorded_date: 2026-06-23
duration: ~16 min (segment ~12:00 – ~28:00 of a 1h 1m meeting)
transcript_source: uploads/transcripts/AU VoC Sync up.docx
screens_visited: []
applies_to: [tek-express, tek-flow]
related_screens: []
related_apis: []
related_hardware: []
---

# Persona evolution toward AI, the "physical AI products" theme, and the VOC methodology / competitive-prep plan

## Summary

The mid-meeting segment closes three threads the early portion opened. **Personas** evolve as AI compresses Push-Button Pete into Midway Max — Subhasis predicts Pete "will no longer exist after a year or so." The **customer landscape** expands beyond test-and-measurement vendors into the broader **"physical AI products"** theme of 2026 — humanoids, AR/VR, Tesla, Ray-Ban Meta, Amazon Ring, Whoop, Apple Watch, Vin Motion, with on-chip NPUs replacing cloud round-trips. The **VOC methodology** Subhasis brings forward is grounded in a written VOC guide (the [Tx-Rx Solutions Platform VOC guide](../uploads/artifacts/) already in batch 2), the **Jeff Dyer / Stanford GA toolkit**, **WOW-FIT scoring** (zero-to-ten), and **design thinking** (diverge → low-fidelity prototypes → converge). The competitive-comparison work is anchored by Farzana N A's **Asus-HQ Keysight setup photo session** — directly upstream of `audits/competitive/2026-06-25-tek-express-vs-keysight-d9040dppc/` and the `keysight-d9040` screens corpus.

## Goal

Bridge the personas/JTBD model (established in the prior segment) to the new product-direction theme (physical AI) and lay out the operational plan for VOC + competitive analysis going into the AppsU events and the Amazon-devices discovery visit.

## Starting state

Personas and JTBD landscape established in [personas-and-jobs-to-be-done.md](./personas-and-jobs-to-be-done.md). Customer-market context established in [customer-market-and-platform-context.md](./customer-market-and-platform-context.md). Subhasis now extends those frames to (a) how personas change under AI, (b) what 2026's theme actually looks like, and (c) how the AU UX team will run their VOC.

## Steps

### 1. Persona evolution — AI compresses Push-Button Pete into Midway Max (~12:00 – 14:50)

> *"to be more of a gurugas because of the time to market. They can't wait for 12 hours in Vietnam to say I failed today. And the guy in West Coast wakes up the next day and says, I will get back to you on the third day. So they are expecting a growth of overlap between Guru Gs and Midway Max and push button peaks are getting eliminated. So you can say that there are two personas rather than three."* — Bera (~12:30)

The driving forces:

- **Time-zone constraints** make per-cycle handoff (West Coast Guru Gus → regional Pete) too slow. Customers compress operations toward whoever can act in-region.
- **High-levels of automation** at customers like **Flextronics** (the **"dark factory automation"** initiative — *"no human being inside the factory. There are no lights. There's only air conditioning and robotic arms running"*) eliminate the manual-push-button step.
- **AI on the Midway Max side** lets Max "do AI automation and finish off everything" without escalating to Pete.

> *"My prediction on the product side is because of AI. The push button Pete will no longer exist after a year or so. The midway max will actually do AI automation and finish off everything and let the dark factory actually be very active in a year or so."* — Bera (~14:00)

**The constant beneath the persona evolution:** the **four-stage JTBD landscape** (design-integrate → system-validate → reliability → manufacturing) **does not change**.

> *"Even if there are spread regionally, the persona still do remain the same, just that the overlap has increased … the life cycle remains the same."* — Bera (~14:30)
>
> *"I was in Bangkok for a week visiting different OSAT customers, original semiconductor equipment manufacturers and Canadian companies like Cellistica and others have huge offices there. The workflow has not changed. The workflow still remains the same."* — Bera (~15:03)

### 2. The "physical AI products" theme of 2026 (~15:30 – 21:00)

Subhasis's framing for the customer-landscape evolution: every modern consumer device is a **physical AI product** — built around chips that convert sensory inputs (proximity, storage, acoustics, imaging, visual, motion, environment) into electrical signals processed by on-chip NPUs.

**Named consumer products as evidence:**

- **Tesla** (proximity + cameras for obstacle detection)
- **Apple Watch / Whoop** (acoustic + biometric)
- **Ray-Ban Meta** (image + voice, on-chip learning — doesn't need cloud roundtrip)
- **Amazon Ring** (proximity + image; subject of Subhasis's Thursday visit)
- Cadence's framing: ***"Voice is the new UI"***
- **Humanoids by Qualcomm + Vin Motion** (a Vietnamese startup) — explicit example

**The chip-market scale:**

> *"there are nearly 4,500 pins. with 700 chips in the market. If you go do ChatGPT and say how many ADCs are active in the market, it'll give you 7,000 odd different chips from around these many vendors."* — Bera (~17:30)

**Why NPUs matter for compliance test:**

> *"in a Tesla, if I'm going on the road and I have to detect whether it's a horse cart or a car, I can't wait the camera to take an image and send it to AWS and come back and tell me. By that time, I will bang into the thing. … So these chips now have something called neural processing unit which are within the chip. So that's the reason physical chips are becoming very popular."* — Bera (~18:30)

**The Amazon-devices visit framing:**

> *"we are just meeting them to understand what they do, not take Express specifically. They wanted to do some system tests because we work with them in Vietnam in the Ring office."* — Bera (~19:30)

The visit is **open-ended discovery**, not TekExpress-specific. Customer subject: **AWS Devices / Ring**. Vietnamese Ring engineering team is a prior touchpoint.

**Workflow constancy under AI:**

> *"the cars have five wheels now. So similar analogy, the user experience will, the customer journey and job to be done will still remain valid for at least next decade or so. Although there is an impact of AI coming in, But AI will increase the efficiency, but the workflow will still remain the same."* — Bera (~20:30)

### 3. VOC methodology — guides, GA toolkit, WOW-FIT, design thinking, A/B (~21:17 – 24:30)

Evan Keyser asks whether the Amazon visit is UI/UX-specific. Subhasis answers that he separates **VOC** (voice of customer) from **SME** (subject matter expert) meetings — the Amazon visit is the latter.

> *"I don't have anything in the UIUX site right now. Once we do some VOC, internal subject matter expert meetings, I would say, I don't want to, I just know one VOC and that is voice of customer, rest all it, SME subject matter expert meetings with all the steel guys."* — Bera (~21:17)

**The methodology stack:**

| Element | Source / Framing |
|---|---|
| **Written VOC guide** | Subhasis's framework (the Tx-Rx Solutions Platform VOC guide draft V0.8, by Subhasis, already in `tek-express/uploads/artifacts/`) — gives sales teams a "guardrail" when Subhasis can't be physically present |
| **GA toolkit** | Jeff Dyer (Stanford) — Subhasis has used it twice for **customer discovery**. Bringing it to the AU team is on the table. |
| **WOW-FIT scoring** | Zero-to-ten on **how does it fit in your workflow** and **what is the wow factor**. The TekFlow VOC Synthesis 2022-12 deck (`tek-flow/decks/tekflow-voc-synthesis-2022-12/`) uses this exact scale ("Wow 8.25/10 · Fit 8.25/10"). |
| **Design thinking** | Diverge (multiple low-fidelity prototypes) → converge on best out of N. |
| **A/B comparison** | The big addition for TekExpress. *"Customers usually have 50-50 of Keysight and Electronics. And some places, 20% of Lecroy also plays. So in my mind, I think I would compare previous versus and next."* — Bera (~22:00) |

> *"For example, in China and Taiwan, most of the cases we will not be able to communicate with them. Directly."* — Bera (~24:00)

The **VOC-guide-as-proxy** workflow is the answer to direct-access constraints: send a sales rep with the guide; they conduct the VOC; results come back.

### 4. Competitive comparison — Farzana's Asus-HQ photo session (~24:41 – 28:00)

Evan Keyser leaves at 24:30. Subhasis then walks through what comes next on the competitive front.

> *"Farzana has done a great detailing about. On the competitive landscape, Brian and Arpita … I shared a bunch of images which luckily at Asus headquarters. They gave us the Keyser setup to use for an hour, so we took all the pictures that we could take in the lab"* — Bera (~26:40)

**This is the explicit origin of the `keysight-d9040/uploads/photos/` corpus:**

- Setting: **Asus headquarters lab**
- Duration: **1 hour** of access to the Keysight setup
- Output: photo set covering D9040USBC + D9040DPPC + D9050PCC (verified from the Resource Arbiter screen in the documented `keysight-d9040/screens/resource-arbiter.md`)
- Documenter: **Farzana N A** — the same author as `audits/competitive/2026-06-25-tek-express-vs-keysight-d9040dppc/assets/CompetitiveAnalysis.pdf`

**The Word doc / competitive analysis source:**

> *"The guy, no, I am talking about the competitive analysis Word doc, which Farzana has shared."* — Jogdand, Arpita (~27:36)
>
> *"I'll walk you guys through it. It's just I don't think it makes sense just to read through the document. If you guys, because it would be legally in London. … so what I asked, I have got that kind of an input. So there are two products like D9. D9XXXX is an option there. And Tek Express is an option that we sell. We do sell names and Keyser typically has codes."* — Bera (~28:00)

**The vendor-naming convention insight:** Tektronix sells with **product names** ("TekExpress DisplayPortTx"); Keysight sells with **product codes** ("D9020USBC", "D9040DPPC"). This naming asymmetry is operationally important for procurement and customer recall.

Subhasis transitions to a competitive-comparison walkthrough at the very end of this segment ("So software installation. is again in usability, but I…") — that walkthrough continues into segments after 28:00 (not chunked here; covered when more of the transcript is processed).

## Friction notes

- **Push-Button Pete elimination prediction.** Subhasis is confident enough to predict a one-year timeline ("after a year or so"). The redesign must NOT bake Pete-specific affordances as load-bearing — design for Midway Max + AI-automation flows as the steady-state and let Pete be a **legacy-fallback persona**.
- **Time-zone friction is the real customer pain.** "They can't wait for 12 hours in Vietnam to say I failed today" is the core unstated problem driving persona compression. The redesign should think about **what makes a test-pass-or-fail decision actionable within the requesting customer's working day**.
- **Sales-rep-as-VOC-proxy is real.** China + Taiwan in particular don't allow direct customer VOC; the VOC guide travels and gets executed by intermediaries. The redesign team should expect their requirements to flow through this filter.

## Annotations

> *"AI will increase the efficiency, but the workflow will still remain the same."* — Bera (~20:30)

**The transferable insight:** redesign UX assuming the *workflow* is durable but the *agency* (who pushes the button) will shift toward automation. Don't tie controls/affordances exclusively to manual-step assumptions.

> *"there is an impact of AI coming in, But AI will increase the efficiency"* — Bera (~20:30)
>
> *"In Tesla … I can't wait the camera to take an image and send it to AWS and come back and tell me. By that time, I will bang into the thing"* — Bera (~18:30)

**Latency is the design constraint for physical AI.** The same principle applies upstream of compliance testing: long async loops in the test workflow undermine the value the AI is supposed to add.

> *"Customers usually have 50-50 of Keysight and Electronics. And some places, 20% of Lecroy also plays."* — Bera (~22:00)

**The market-share-driven A/B framing** is the rationale for the corpus's `keysight-d9040` + `keysight-d9020` subjects and the `audits/competitive/` snapshots: customers literally compare side-by-side in their day-to-day work.

> *"Tektronix sells with names; Keysight sells with codes."* — paraphrased from Bera (~28:00)

**A naming-convention asymmetry** that affects the redesign's product-discovery surface (how customers find / recall / specify which test app to launch).

## Cross-references

- **Personas established** in this conversation: [personas-and-jobs-to-be-done.md](./personas-and-jobs-to-be-done.md)
- **Customer-market context** that this segment extends: [customer-market-and-platform-context.md](./customer-market-and-platform-context.md)
- **Closing redesign mantras** (after this segment): [ui-redesign-mantras-and-transition-strategy.md](./ui-redesign-mantras-and-transition-strategy.md)
- **The VOC guide referenced** as Subhasis's framework: `corpus/sources/tek-express/uploads/artifacts/Tx-Rx Solutions Platform VOC guide Draft _08_TEK-CONFIDENTIAL.pdf` (gitignored source; pending `/document-pdf` processing — flagged in `tek-express/index.md`)
- **The WOW-FIT scoring scale** is the same one in the [TekFlow VOC Synthesis 2022-12](../../tek-flow/decks/tekflow-voc-synthesis-2022-12/voc-summary-and-synthesis.md) — *"Wow 8.25 / 10 · Fit 8.25 / 10"* — confirming methodology continuity from 2022 to 2026.
- **The Farzana Asus-HQ photo session** produced the [`keysight-d9040`](../../keysight-d9040/index.md) screens corpus (11 documented screens) + the [competitive audit asset](../../../../audits/competitive/2026-06-25-tek-express-vs-keysight-d9040dppc/) — this segment is the explicit upstream origin of both.

## Pending references

- **The Bangkok customer presentation** Subhasis mentions (~15:48 — *"this was the one I presented in Bangkok. We had around 65 customers"*) is on the materials-handoff list but the deck isn't yet in `_inbox/`. Track in the broader pending list.
- **The Jeff Dyer GA toolkit** is referenced as a methodology Subhasis has "used twice for customer discovery." If the team adopts it formally, the toolkit's reference material would become a corpus or UXR asset.
- **Subhasis's continued competitive comparison** ("software installation. is again in usability, but I…") at ~28:00 onward continues into segments not yet chunked.

## Confidence notes

- **"Push-Button Pete will no longer exist after a year or so"** is Subhasis's prediction, not a Tek roadmap commitment. Preserved verbatim with attribution.
- **"D9XXXX is an option there. And Tek Express is an option that we sell"** — the naming-asymmetry framing is captured verbatim. "D9XXXX" appears to be Subhasis's shorthand for the Keysight D9-series codes (D9020USBC, D9040USBC, D9040DPPC, D9050PCC, D9320USBC). The corpus uses specific SKUs (`keysight-d9020`, `keysight-d9040`).
- **"Cellistica"** (~15:03) is preserved as Subhasis pronounces it; it may be an internal codename or a customer name Tek-internal teams know — not verified.
- **"4,500 pins / 700 chips / 7,000 ADCs"** — order-of-magnitude estimates from Subhasis; treat as illustrative, not authoritative.
- **Evan Keyser's exit at 24:30** is preserved as it affects who's in the conversation for the remaining content.
- **"it would be legally in London"** (~27:51) — verbatim transcription; the intended meaning is unclear (possibly "it would be legally in limbo" or "it would be legally encumbered"). Flagged for transcript verification.
