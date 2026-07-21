---
provenance: observed
class: walkthrough
product: tek-express
flow_id: prototype-feedback-loop-and-voc-synthesis-history
flow_title: The recorded-walkthrough feedback loop, pain-to-dollar synthesis, and the Clarius VOC playbook
recorded_by: [Bera, Subhasis (Principal Product Manager, Solutions Platform and Decoders)]
participants: [Kemp, Bryan; Bera, Subhasis; Jogdand, Arpita]
recorded_date: 2026-06-23
duration: ~15 min (segment ~39:57 – ~54:53 of a 1h 1m meeting)
transcript_source: "uploads/transcripts/AU VoC Sync up.docx"
screens_visited: []
applies_to: [tek-express, tek-flow]
related_screens: []
related_apis: []
related_hardware: []
---

# The recorded-walkthrough feedback loop, pain-to-dollar synthesis, and the Clarius VOC playbook

## Summary

Bryan and Subhasis design the **expert-feedback pipeline** this corpus itself implements: Bryan will send an updated prototype by Friday; Subhasis will record an **audio-only walkthrough announcing where he clicks**; Bryan runs the recording through the RAG to extract user traps and workflow issues; expert markdown lands in the repo, versioned and connected to the prototype. Subhasis endorses the prototype's **simulated realism** (moving progress bars) over the prior vendor's static Figma. He then opens his VOC synthesis playbook from Clarius: the **problem synthesis tool** that converts each customer's top-3 pain points into a **dollar value** (intensity × frequency × density × $40/hr), stack-ranked; **per-screen WOW-FIT scoring**; the finding that of the walked-through areas (dashboard, test, configure, manage, debug, result, API, report) **two areas drew maximum feedback**; and the **closed-loop low-fi → converge → high-fi → re-show** process. He commits to merging his workflow VOC guide with the AU team's UX guide into **one consolidated ~45-minute guide** — because sales won't allow two visits to the same customer — and walks the guide's structure end-to-end, closing with why **debug-and-failure is deliberately last**.

## Goal

Agree the operational feedback loop between PM expertise and the prototype/RAG system, and transfer the proven Clarius-era VOC synthesis method the AU team will now extend with a UX section.

## Starting state

Subhasis has just demonstrated the configuration user trap on Bryan's prototype ([configuration-user-traps-and-cockpit-view.md](./configuration-user-traps-and-cockpit-view.md)). Bryan pivots from that live demo to how to systematize this kind of expert input.

## Steps

### 1. Bryan's recorded-walkthrough request (~39:57 – 40:51)

> *"That's very helpful information. So I'm working on some stuff. Like around Friday, if I send you an updated version of this, would you be able to like record yourself? … doing exactly what you're doing, but instead of, but since it's audio only, if you could just like, I'm going just announce where you're clicking and just like. free form, just go off because that'll help me, I'll run that through our rag and help it like get some sort of like organized bullet list for me to consider just so I can start understanding more of those user traps and workflow things that we could really work through."* — Kemp
>
> *"Yes, I can, yeah."* — Bera

**The protocol**: updated prototype by Friday → Subhasis free-form audio walkthrough, announcing clicks → RAG-organized bullet list of user traps and workflow issues. (This meeting's transcript entering the corpus via `document-walkthrough` is the same pipeline.)

### 2. Prototype fidelity framing + Subhasis's LabVIEW background (~40:51 – 42:03)

> *"It really, this was, this was a, this was a like... PowerPoint level example of the app for us to work on. thing on UI specific elements, not 100% accurate. Ideally, the more we work through it, it'll get more accurate."* — Kemp

> *"by the way, I don't know if you know Labview, Rick does Labview. So I am not a UX guy, but LabView engineers typically have to make the UI as well as the back end when you do test automation. So we used to always sit with customers and take the beating of, you know, why did you put the button like this? So kind of used to that kind of an environment."* — Bera

### 3. Simulated realism beats static Figma (~42:03 – 42:53)

> *"What we, what one thing which I liked on this was this is more like a realistic, like, you know, the progress bar moving. It's saying earlier Figma even done by the previous party or the third party we had just had, I don't know, Arpita correctly, but they were not running, at least simulating these things, right? This, I sales guys will like this because they will see things in action. Although they are, you know, might not be perfect, but this helps them, you know, think further rather than just showing transitions."* — Bera

> *"Yeah, it feels real. … once you see it move and you're flipping between screens, it makes, that makes a difference. Like that's just whatever, but like that's a placeholder, but once we get into all the graphing stuff … It's a shell to really dig into over time."* — Kemp

**Prior vendor's deliverables were non-simulating Figma**; the running-prototype approach is endorsed specifically because **sales** can show "things in action" to customers.

### 4. The markdown-to-repo assimilation loop (~42:53 – 44:19)

> *"once we have this in place. We can more efficiently do the same exercise, like ask experts to record their audio or comment on Sigma if they can, and then we can assimilate that quickly using tools and we can continuously build a skill on if I'm sure I heard we are going to get Claude in a couple of weeks, so. If it comes by, it will be much easier to have a markdown and get things in place, always gather feedback from at least the sales guys and the sales guys can, when they go to customers, get the feedback and it will be very efficient for us."* — Bera

> *"if basically the output are markdown files and we can have them committed, we'll just put them in the repo and have have it just run a process to like keep collating all this information. And then that's directly connected to this prototype. So we can have it start riffing ideas on stuff, version stuff … the industry's processes haven't changed. They're just way more efficient. Same thing with design, UX and UXR. It's like … we're still doing the steps in the right order, in the right kinds of processes, just optimizing it."* — Kemp

Agreed shape: expert audio / Figma comments → tool-assimilated markdown → **committed to the repo**, collated continuously, **connected to the prototype** for idea generation and versioning. Subhasis notes the org expects Claude access "in a couple of weeks."

### 5. The problem synthesis tool — pain to dollars (~44:19 – 45:53)

> *"So there is a tool that we typically do when we do a VOC. I typically indirectly ask questions in their jobs to be done in social, emotional, and functional jobs. And I capture the pain points in a, we had a tool from the GA toolkit, which we call as. problem synthesis tool where I don't have it handy, but typically each customer's top three pain points we write, and we also do convert that pain into dollar value. It's called intensity of pain, frequency pain, and density of the pain. So in intensity is how intense is the pain? How many times does it happen in a year? And at how many locations do you face? Like the customer I said, Mexico, Vietnam, India. So we multiply all of these and we consider $40 an hour average across the globe. And, and the hours that are wasted are converted into dollars, so, so that's the opportunity dollar value we and we stack rank them, and I actually did that few years back for Clarius."* — Bera

**The formula**: per customer, capture top-3 pain points across **social / emotional / functional** JTBD dimensions, then quantify:

> opportunity $ = intensity × frequency (occurrences/year) × density (number of locations) × hours wasted × **$40/hr global average**

Stack-rank the results. Applied to Clarius historically; Subhasis commits: *"I will do it for you guys."*

### 6. One consolidated VOC guide + roadmap pressure (~45:53 – 47:15)

> *"I will also manage a rooster of all the possible VOCs which I will talk to every region … So my VOC guide which you would be seeing and your VOC guide. I didn't want to go ahead and do that VOC because I want to blend both of them together so that some part of usability and some part because I cannot go to the same customer two times sales will not like it and that's the reason I I was holding on to this."* — Bera

> *"Although. Jason White had committed regions that the roadmap will be out. I already got a call from Taiwan saying that please present the roadmap because their customers are asking for tech. I'll see how much I can delay that."* — Bera

> *"if there is a VOC guide and we merge both the VOC guides and we can have one consolidated VOC guide which covers. most of the aspects within just say 45 minutes of the conversation and then you know get deep dive into specifics. So if the customer says I don't like your UI I like Keyser T1 so we go with more of UX to those guys and somebody says no I am more interested in deployment so we take the workflow to them. So that's how I am thinking to divide."* — Bera

- **One customer, one visit**: workflow VOC + UX VOC merge into a single ~45-minute guide with interest-driven deep-dive branches (UX vs deployment).
- **Subhasis manages the VOC roster** region by region.
- **Roadmap pressure is live**: Jason White committed a roadmap to the regions; Taiwan is already calling for it; Subhasis is playing for time.

Bryan endorses and offers the RAG as the shared organizing layer:

> *"I'm thinking like a way to basically help you input stuff into our rag in a way that you want to organize it so we can reference it together. … Basically, I'm taking screenshots and manuals and organizing it into the rag and it's getting like synthesized. Say, if we could do that with a lot of your artifacts … as well as like. Letting other members of our team have access to the rag, so they could access it through Claude or whatever element they want."* — Kemp (47:15)

### 7. The Clarius VOC synthesis — WOW-FIT per screen, top-2 pain areas, closed loop (~48:35 – 51:48)

> *"So I so this was the platform roadmap I had built earlier and I did have a separate UI UX because the usability was changing … And this was the VOC summary. Typically you will see my VOC having wow fit scores. Like what is the wow factor of what you saw? … out of 10, and how does it fit within your workflow? For every screen I used to ask, every flow I used to ask that question, and this is I used to give update of, you know, total interactions done, the completed VOCs, what were their, you know, wow fit scores."* — Bera

> *"debug versus dashboard, like there was a feedback that dashboard is messy, the font is not that great, it's too small kind of a thing. So these were some examples that came which were real examples."* — Bera

> *"We actually when walk them through like dashboard, test, configure, manage, debug, result, API, report. We walk them through low fidelity prototypes and these were just screens. And you would see out of these each area, people have given maximum feedback for these two parts. And that is the pain part. And I would pick that along with you guys and request you to diverge and converge only in these two, because these are the top two pain points that we get from the VOCs."* — Bera

> *"So we do back and forth, low fidelity, high feedback, and converge and diverge, and then go for high fidelity and go back to the same people if possible, and then show them the new high fidelity saying that we took your feedback. We also took feedback from multiple people in different regions. And this is how we are catering to the solution that you thought is a problem. Once we get that confirmation, we close it. I know it's a little lengthy process, but it's failsafe."* — Bera

> *"when I did Clarice, you'll see a lot of input came from China because China was competing to go faster to the market with their products in 2020, 2021. So we leaned upon the sales team by giving them guides. Training them once, and they actually gave us eight or 10 VOCs in return back, and we were able to synthesize the data."* — Bera

**The Clarius playbook, distilled:**

1. Walk customers through **low-fidelity prototypes of eight areas**: dashboard, test, configure, manage, debug, result, API, report.
2. Score every screen/flow on **WOW (0–10)** and **FIT-in-workflow (0–10)**; report totals (interactions done, VOCs completed, scores).
3. Feedback concentrates: **two of the eight areas drew maximum feedback** — those become the exclusive diverge/converge targets.
4. **Close the loop**: low-fi → converge → high-fi → return to the same customers → "we took your feedback" → confirmation → close. *"Lengthy … but it's failsafe."*
5. Where direct access is impossible (China 2020–21), **train the sales team once on the guide** — they returned 8–10 VOCs.

### 8. The VOC guide structure, section by section (~51:48 – 54:53)

> *"Yes, so this was my VOC guide. I have used the growth accelerator template. So this was my second growth accelerator. The first one was at 4 for fueling, frictionless fueling across the globe. … So, it was a different world for digital payments in pretty 18 I did, so, but we did 636 VOCs in six months, so I single-handedly did 110 swaps, kind of. I have started liking doing voice of customer from that time."* — Bera

> *"This is what the VOC guide is. It talks introduction, it gives background, it talks introduction, what we want to do, we introduce to the customer. We also give an internal understanding to people who join or drive in our absence … you know, target personas. Or these are not the personas, but the different workflow people, compliance, interop engineers. These are different names in different companies. And customer context, you know, could you give us a background? And these backgrounds are usually pre-filled by the sales guys because they know their customers. And then. We go to the jobs to be done framework, ask them to walk us through the workflow, what they use, do they use AGGC, key site qualifies, competition and pain points. And I am actually walking through every step you are also prototyping, like set up and bring up. test execution scalability. Do you want it sequential parallel? Mine was more of the workflow. And once you guys have yours, we will blend both of them in and take it forward. Maybe we can also have the Figma links available and keep updating the link for enhancements … Then at the I finish it with reporting and finally debug and failure. Debug and failure is at the end is because once it fails, the midway max wants to send data back to Gurugas for analysis wherever the chip guy is, right? That's how typically."* — Bera

> *"So there is this UX deep type. Oh, I do have this because this was there in my previous synthesis data, which I put on cloud and I ran this skill. So wizard versus free flow. There are some things which you guys, I put this in the chat so you guys can review and we can add UX stuff in this section and wrap up. So actually I'm closing it with the user workflow."* — Bera

**Guide skeleton** (growth-accelerator template):

1. Introduction + background (customer-facing intro and internal briefing for whoever drives in Subhasis's absence)
2. Target workflow roles — compliance engineers, interop engineers ("different names in different companies")
3. Customer context — **pre-filled by sales** before the call
4. JTBD framework — walk the workflow; tools used; competition and pain points
5. Setup and bring-up; **test execution scalability (sequential vs parallel)**
6. (Planned) live **Figma links kept updated** so participants see the latest prototype
7. Reporting
8. **Debug and failure — deliberately last**: post-failure, Midway Max ships data back to Guru Gus "wherever the chip guy is"
9. UX deep-dive section (wizard vs free flow, pre-seeded from historic VOC synthesis run through an AI skill) — the AU team's extension point

The 54:53 boundary hands off to the materials-dump close ([ui-redesign-mantras-and-transition-strategy.md](./ui-redesign-mantras-and-transition-strategy.md)).

## Friction notes

- **Sales gates customer access**: *"I cannot go to the same customer two times sales will not like it."* The consolidated-guide requirement is a hard constraint on the UX team's research cadence — one shot per customer, ~45 minutes, UX questions embedded in the workflow guide.
- **Roadmap pressure vs research runway**: Taiwan is demanding the roadmap Jason White promised while the VOC groundwork is still unbuilt. The redesign timeline is being squeezed from the sales side.
- **Prior vendor's static Figma failed the sales test** — no simulation, no "things in action." The bar for prototype deliverables is now *running* simulation.
- **Historic Clarius feedback** already flagged **dashboard messiness and too-small fonts** as real customer complaints; the mass of feedback concentrated in two of eight walked-through areas. Directly relevant priors for the TekExpress redesign's typography and dashboard work.
- **Subhasis's synthesis artifacts are scattered** across old laptops ("I don't have the document on this laptop") — the RAG-ingestion offer exists precisely because the institutional memory is one hardware failure from loss.

## Annotations

> *"intensity of pain, frequency pain, and density of the pain … we consider $40 an hour average across the globe"* — Bera

**The pain-to-dollar quantification is the bridge from UX findings to roadmap priority.** Any friction the AU team documents (including this corpus's Friction notes) can be run through this formula to argue priority in PM language.

> *"sales guys will like this because they will see things in action"* — Bera

Prototype realism isn't a design nicety — it's a **sales-enablement property**. The simulated prototype doubles as the demo artifact the field shows customers.

> *"Debug and failure is at the end is because once it fails, the midway max wants to send data back to Gurugas for analysis wherever the chip guy is."* — Bera

The guide's section *ordering encodes the workflow itself* — failure handling is the terminal hand-off step of the persona chain, not an interrupt. This is a structural insight for the redesign's debug/results surfaces.

> *"we did 636 VOCs in six months, so I single-handedly did 110"* — Bera

Scale credential for the methodology: this playbook has been run at volume (frictionless-fueling growth accelerator, ~2018), not just on Clarius.

> *"I'm sure I heard we are going to get Claude in a couple of weeks"* — Bera

Org-level AI-tooling arrival is anticipated on the PM side; the markdown-repo-RAG loop agreed here presumes it.

## Cross-references

- **Persona chain referenced in the debug-last rationale**: [personas-and-jobs-to-be-done.md](./personas-and-jobs-to-be-done.md) (Guru Gus / Midway Max hand-off).
- **WOW-FIT scoring and GA-toolkit background** (earlier, lighter treatment in this same meeting): [persona-evolution-physical-ai-and-voc-methodology.md](./persona-evolution-physical-ai-and-voc-methodology.md) — this segment adds the problem-synthesis dollar formula, the per-screen application, and the closed-loop process.
- **The WOW-FIT scale in practice**: [TekFlow VOC Synthesis 2022-12](../../tek-flow/decks/tekflow-voc-synthesis-2022-12/voc-summary-and-synthesis.md).
- **The materials dump this segment sets up**: [ui-redesign-mantras-and-transition-strategy.md](./ui-redesign-mantras-and-transition-strategy.md) (54:53 onward).
- **The user-trap demo motivating the recorded-walkthrough protocol**: [configuration-user-traps-and-cockpit-view.md](./configuration-user-traps-and-cockpit-view.md).
- **The AE recorded-walkthrough rounds that executed this protocol**: the July 2026 `ae-*` chunks in this folder (e.g. [ae-travis-berger-launcher-global-settings-and-setup-flow.md](./ae-travis-berger-launcher-global-settings-and-setup-flow.md)) are the direct downstream of the pipeline agreed here.
- **The question bank**: [empathy-discussion-guide-question-bank.md](./empathy-discussion-guide-question-bank.md) — the GA empathy-guide material referenced as the template family.

## Pending references

- **Problem synthesis tool document** — "I don't have it handy"; on an old laptop. Not yet in `_inbox/`.
- **The Clarius stack-ranked pain/dollar analysis** — done "few years back"; not yet surfaced.
- **The consolidated (merged workflow + UX) VOC guide** — to be co-authored by Subhasis, Bryan, and Arpita; will supersede the two separate guides.
- **The "wizard versus free flow" UX deep-dive material** Subhasis dropped in the meeting chat — verify it arrived with the batch-2 uploads.
- **Subhasis's Friday audio walkthrough of the updated prototype** — the first execution of the recorded-walkthrough protocol; process into this folder when recorded.

## Confidence notes

- **"AGGC"** (~53:30) is preserved as transcribed; unresolved — plausibly a test-tool or standards acronym garbled in transcription ("do they use AGGC, key site qualifies" likely ≈ "do they use [tool]; how Keysight qualifies"). Flag for verification with Subhasis.
- **"Keyser T1"** (~46:55) — transcription artifact; likely "Keysight['s] UI" or a Keysight product shorthand. Preserved verbatim in the quote.
- **The "top two pain points" areas are not named in audio.** Subhasis points at a slide; the transcript's nearby "debug versus dashboard" remark suggests **debug and dashboard**, but the identification is inferential, not stated. Do not treat as established without the slide (part of the promised materials dump).
- **"636 VOCs in six months … 110 swaps"** — "swaps" is a transcription artifact (context suggests VOCs/visits he ran personally). Figures are Subhasis's spoken recollection of the ~2018 fueling growth accelerator.
- **"pretty 18"** ≈ "2018" (transcription artifact).
- **"comment on Sigma"** (~42:53) ≈ "comment on Figma".
- **Jason White roadmap commitment** and Taiwan's request are second-hand workplace reports, verbatim from Subhasis; not independently verified.
- **"Rick does Labview"** (~41:31) — Rick's identity/role not established in this transcript.
- Segment boundaries (~39:57, ~54:53) align with speaker-turn timestamps in the source; internal step timestamps are approximate positions within long turns.
