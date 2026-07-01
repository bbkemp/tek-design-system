---
provenance: observed
class: walkthrough
product: tek-express
flow_id: personas-and-jobs-to-be-done
flow_title: TekExpress personas and the customer jobs-to-be-done landscape
recorded_by: [Bera, Subhasis (Principal Product Manager, Solutions Platform and Decoders)]
participants: [Kemp, Bryan; Bera, Subhasis; Jogdand, Arpita]
recorded_date: 2026-06-23
duration: ~12 min (segment 0:03 – ~12:00 of a 1h 1m meeting)
transcript_source: corpus/sources/tek-express/uploads/transcripts/AU VoC Sync up.docx
screens_visited: []
applies_to: [tek-express, tek-flow]
related_screens: [setup-dut, setup-test-selection, status-test-status, results, reports-configuration]
related_apis: []
related_hardware: []
---

# TekExpress personas and the customer jobs-to-be-done landscape

## Summary

Subhasis Bera, Principal Product Manager for the Solutions Platform and Decoders, frames the TekExpress user base around **three named personas** (Guru Gus, Push-Button Pete, Midway Max) inherited from the work of former Tek UX engineer **Tek Lung** (ex-Intel, Beaverton-based) and validated with customer feedback over many cycles. He maps these personas onto a **four-stage jobs-to-be-done (JTBD) landscape** — design-integrate → system-validate → reliability → manufacturing — and explains why each persona dominates one or more stages. Tek Express explicitly does not address the manufacturing stage.

## Goal

Establish the persona and JTBD vocabulary for the upcoming TekExpress redesign so the UX team has a shared model of *who* uses the software *for what*.

## Starting state

The AU (Australian) UX team led by Arpita Jogdand is preparing their own VOC guide for TekExpress redesign work. This meeting is Subhasis transferring the historical persona model and customer context before the AU team writes their guide.

## Steps

### 1. The three personas — Guru Gus, Push-Button Pete, Midway Max (~0:03 – 3:54)

> *"There are three types of personas that we have, which were historically done by our first UX engineer, and her name was Tek Lung. She was from Beaverton. She used to work at Intel, if I'm not wrong. … the latest UX was built by her upgraded with a lot of customers giving feedback."* — Bera (0:03)

**Persona 1: Guru Gus**

> *"GURU Guru Gus, the Guru. is a persona who is an expert who builds things first and powers it up for the first time. They will ensure that the first power on is a success. So they do a lot of tinkering while they use the wizard and setup. They do save wizards and they do setups."*

**Persona 2: Push-Button Pete**

> *"The push button Pete just keeps pushing the button and validates the results, consolidates the numbers, and then shares the result with multiple stakeholders across the organization. including Gurugas and beyond."*

**Persona 3: Midway Max**

> *"The third persona, which is in between these two, is called Midway Max, who is kind of a new era of growth regions like Vietnam, India, and Taiwan, who actually are neither a domain expert. not only just an operator to push the button and acquire data. They can do both."*

Subhasis emphasizes geographic distribution: Guru Gus typically initiates the technology at the design-origin site and passes it to regional offices where Pete and Max work close to manufacturing or validation labs. He uses **Ampere Computing** and a hypothetical **Valeo (auto parts supplier to BMW, Audi, GM)** with offices in Mexico, Taiwan, US, and Germany as the canonical "personas spread across the globe" example.

### 2. Cross-vendor persona portability (~3:54 – 4:04)

> *"The beauty is they play across every T&M vendor in a very similar way because we all cater to the same customers. Any questions?"* — Bera

Bryan confirms the persona model and asks whether the current UI caters to all three:

> *"Does the UI currently kind of caters to all three? Like, does it meet the needs of all three?"* — Kemp (3:54)
>
> *"Yes. Yes, it does."* — Bera (4:04)

### 3. The Clarius cautionary tale (~4:10 – 4:51)

> *"The idea was Clarius was to go beyond and cater to a lot of things because it was supposed to be an umbrella platform for multiple things beyond compliance. And that's where the problem started. I wanted to buy a Ford 150 and make it into a sedan. I also wanted to make it into a caravan. I also wanted to make it [a … ] which usually does not fit to a certain extent, right? You can do it to a certain extent, but you won't get the comfort of a [sedan]. That's what probably too many eggs in the same basket."* — Bera

Subhasis frames **Clarius** — Tek's previous attempt at a unifying compliance + non-compliance platform — as a feature-scope failure. The transferable lesson for the TekExpress redesign: don't over-scope.

### 4. The four-stage JTBD landscape (~4:51 – 6:16)

The customer workflow Tek serves spans four stages:

1. **Design / Integrate** — typically **Guru Gus**
2. **System Validate** — typically **Midway Max**
3. **Reliability** — typically **Push-Button Pete**
4. **Manufacturing** — out of scope for TekExpress

Subhasis uses an iPhone temperature-tolerance example to illustrate the reliability stage:

> *"When you buy an iPhone … it works in Dubai at 50 degrees C. It also works in the East Coast during the January winters … For an iPhone, reliability tests, running it at putting the system, there is a thermal chamber where they put the phone inside. 50 degrees C and run it multiple times to see whether it fails, at what temperature it fails. … So those guys are push button peats who will acquire at every degree temperature."* — Bera (5:36)

> *"So we don't deal with manufacturing in Tek Express, so we will not get into the last part of it. But these four parts of the jobs to be done of a customer resides in these three personas."* — Bera (6:00)

## Friction notes

- **The personas have not been visibly validated in the AppEmulator UI.** Subhasis asserts "yes" but provides no specifics about which screens cater to Pete vs. Guru Gus vs. Max. Open question for the redesign: are there mode-switching or scope-collapsing affordances that would help Push-Button Pete specifically?
- **The cross-vendor parity claim** (*"they play across every T&M vendor in a very similar way"*) implies that any tool Pete or Max uses today is roughly substitutable. The redesign needs to identify what makes TekExpress *specifically* preferred — not just on par — for each persona.
- **The geographic / org-chart split** (Guru Gus at design HQ, Pete/Max in regional labs) implies usage handoff: a wizard saved by Guru Gus gets opened and run repeatedly by Pete/Max. The saved-wizard handoff is the single most-cited workflow Subhasis names as "the main prime reason for the money on the table" — yet the corpus has no documented `setup-dut-session-browser.md` handoff flow validated against this persona split.

## Annotations

> *"customer pays 30 to $50,000 to ensure that their half $1,000,000 setup is correctly configured through the wizard and they save the wizard and keep running the test every time they want. That is the main prime reason for the money on the table."* — Bera (0:03)

This is the **dollar-justification for the wizard workflow**. Any redesign that erodes the wizard's setup-save-replay loop directly attacks the value proposition.

> *"The push button Pete just keeps pushing the button and validates the results, consolidates the numbers, and then shares the result with multiple stakeholders."*

This implies the **Results panel** and the **Reports panel** (with email/share affordances) are Pete's primary surfaces, not Guru Gus's.

## Cross-references

- **Personas → wizard**: see [setup-dut.md](../screens/setup-dut.md), [setup-test-selection.md](../screens/setup-test-selection.md). The wizard save/replay loop is documented in the screens but not yet annotated with persona context.
- **Personas → results**: see [results.md](../screens/results.md), [reports-configuration.md](../screens/reports-configuration.md). Push-Button Pete's primary share / export surfaces.
- **Cross-platform context**: TekFlow appears to serve similar personas — see [`corpus/sources/tek-flow/index.md`](../../tek-flow/index.md).

## Pending references

- A `personas.md` could live under `corpus/sources/tek-express/docs/` as a canonical reference for redesign teams. **Not authoritatively defined in the existing corpus.** Defer until product team confirms current naming + Tek Lung's original UX research is locatable.
- The Clarius failure analysis would benefit from its own walkthrough chunk if more material surfaces. Currently a one-line anecdote from this transcript.

## Confidence notes

- **Names are verbatim from transcript.** "Guru Gus", "Push-Button Pete", "Midway Max" — capitalization and spelling per Subhasis's spoken delivery.
- **Tek Lung attribution unverified.** Subhasis says "she was from Beaverton … used to work at Intel, if I'm not wrong." The "if I'm not wrong" is preserved as a confidence flag.
- **The Clarius "Ford F-150 to sedan" analogy** is paraphrased lightly from spoken English for readability; the original is captured verbatim above in step 3.
- **Persona-stage mapping** (Guru Gus = design-integrate, Midway Max = system-validate, Push-Button Pete = reliability) is Subhasis's framing but he notes Midway Max "can do both" — the mapping is dominant-role, not exclusive.
