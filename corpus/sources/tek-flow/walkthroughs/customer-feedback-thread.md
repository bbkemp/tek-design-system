---
class: walkthrough
product: tek-flow
flow_id: customer-feedback-thread
flow_title: TekFlow customer feedback thread — ELECOM, IEI-CHN, Inspur-CHN + TekExpress-migration concerns
recorded_by: [Bouse, David (DB); Bera, Subhasis (SB)]
participants: [Bouse, David; Bera, Subhasis; Ubrani, Ashish; Mandyam, Krishnakumar; Sriram (last name not given); Bowman, Brian]
recorded_date: null
duration: null
transcript_source: corpus/sources/tek-flow/uploads/artifacts/Feedback on TekFlow.docx
screens_visited: []
applies_to: [tek-flow, tek-express]
related_screens: []
related_apis: []
related_hardware: []
---

# TekFlow customer feedback thread — ELECOM, IEI-CHN, Inspur-CHN + TekExpress-migration concerns

## Summary

A Word-document Q&A thread captured after a VOC cycle where three Chinese-region customers (ELECOM, IEI-CHN, Inspur-CHN) and at least one US-region account contact (Brian Bowman, internal Tek SA representing customer migration concerns) raised questions about TekFlow's roadmap. The thread is interleaved between **David Bouse `[DB]`** (asking how Tek will respond to and prioritize each customer question) and **Subhasis Bera `[SB]`** (the product-manager response). Ashish Ubrani, Krishnakumar Mandyam, and Sriram are tagged for follow-ups.

Three customer themes dominate:
1. **Pattern Validation for PCIe** (IEI-CHN ask, high-priority signal for higher-data-rate generations)
2. **Debug for failed tests** (Inspur-CHN ask, currently presented via the Figma Debug feature but acknowledged as needing more brainstorming)
3. **Deskew flow alignment with TekExpress** (Inspur-CHN ask — the explicit signal that TekFlow and TekExpress are peer products with diverging UX implementations of the same workflow)

A fourth, cross-cutting theme is **TekExpress → TekFlow migration continuity** — Brian Bowman's concerns about PI command compatibility, reporting style continuity, debug feature parity (SDLA/DPOJET), and licensing for already-paid-for TE capabilities.

## Goal

Capture, prioritize, and assign owners for the open customer questions surfaced during the most recent TekFlow VOC, with explicit escalation for the cross-product (TekFlow / TekExpress) migration questions before PCIe 6.0 CEM ships.

## Starting state

The thread opens with David Bouse asking whether the VOC-captured customer questions were answered in the meeting (some appear as questions on the slides with no answers shown) and whether the responses can be added back to the thread for traceability. Subhasis explains the China VOC was conducted offline in Mandarin so some questions were not Q&A'd live in the recorded session.

## Steps

### 1. The framing question — did the VOC actually answer customer questions?

> **[DB]** *"I was talking about questions from the customers to Tektronix (i.e., 'If I capture 1000 USB waveforms, how many can be analyzed in parallel?'). Were answers provided to the customers during the VOC? Can the responses be added on this thread?"*

> **[SB]** *"This was not answered in the VOC as CHN was done offline in Mandarin. @Mandyam Krishnakumar, Sriram can you help with the answer this one."*

> **[DB]** *"There were multiple customer questions in the VOC (just gave one example), so I'm trying to understand how we keep the conversation going around those questions."*

This is the **process-level meta-question** the rest of the thread is trying to resolve: how does Tek loop back to customers with answers when VOC was conducted offline and unrecorded.

### 2. ELECOM — no WOW-FIT scores collected

> *"If the customer doesn't have an answer/or wishes not to answer – it is not captured. **ELECOM is not giving WOW-FIT scores currently** 😊"*

ELECOM's status: engaged but declining to score. This is a methodology gap, not a feature request.

### 3. IEI-CHN — Pattern Validation for PCIe

> *"**IEI-CHN:** 'Pattern Validation' – we get this request regularly from PCIe customers. As we move to higher data rates, I believe pattern validation will have increasing value as we struggle with clock recovery with high-loss channels and SSC. Is pattern detection planned?"*

> *"@Ubrani, Ashish please capture the Story and the use case and push it into the VOC systems that will roll up into the Backlog."*

> **[DB]** *"What is the process we are using to decide priority level for Stories in the VOC system?"*

> **[SB]** *"VOC Synthesis → Synthesis of feedback needs to be done and provided to the PO for backlog addition. Backlog Prioritization is done as per APD."*

**Pattern Validation** is the IEI-CHN ask. The exchange also documents the VOC → Synthesis → PO-backlog → APD-prioritization process.

### 4. Inspur-CHN — Debug for failed tests

> *"**Inspur-CHN:** 'For the failed test project…' – What is the thinking around providing information to the user to help them debug or gain further insight? Methods to solve the problem?"*

> *"@Bouse, David please elaborate further."*

> **[DB]** *"Inspur has a question about the scenario where there is a failed test case and how TekFlow will help them identify the root cause. How did we respond to this question? What sort of information do we provide when a test case fails?"*

> **[SB]** *"We presented the Debug feature to the customer (available in figma screens). Move from compliance to Debug for extended analysis of waveform with Recalc/Reacquire options. Information to help customer is something that needs to be brainstormed (Some customers want thumbnails of wfms and description on reasons of failure)."*

> **[DB]** *"an N and I have given feedback on the waveform thumbnails not having debug value. This feels like an area of TekFlow which still needs some high-level ideas before we ask for customer VOC. Do we have a list of current debug ideas? Can this be shared? If not, can we schedule a brainstorming session?"*

The Debug-on-failure response: presented in Figma; Recalc/Reacquire from a Compliance result; thumbnails + failure-reason captions requested by customers but contested internally as low-value.

### 5. Inspur-CHN — Deskew hidden too deeply (the cross-product alignment question)

> *"**Inspur-CHN:** 'Contents such as Deskew/Noise are hidden deeply…' – We received regular feedback from customers on improving the channel deskew visibility and automation. What is the flow we have today for Deskew? **Does it align with the latest implementation in TekExpress?**"*

> *"@Ubrani, Ashish please capture the Story and the use case and push it into the VOC systems that will roll up into the Backlog."*

The literal text — *"Does it align with the latest implementation in TekExpress?"* — is the **explicit cross-product alignment question.** This is the signal Tek's design system needs: Deskew/Noise workflow should be unified between TekFlow and TekExpress, but isn't.

### 6. PI command script translation (TekExpress → TekFlow migration)

> *"Are we planning any script translation software so customers with PI calls for TekExpress can be mapped to TekFlow?"*

> *"@Bouse, David something like the PI translator? The PI calls are the same. This will be in the technical part of workflow integration."*

> *"@Ubrani, Ashish please capture the Story and the use case and push it into the VOC systems that will roll up into the Backlog."*

> **[DB]** *"I met with Brian Bowman last week to discuss how to migrate customers from TekExpress to TekFlow and he was concerned about any deltas needed in our customers automated environment as they migrate to our new framework. Are you saying we have full backwards compatibility for the PI commands? If so, what story point would need to be captured?"*

> **[SB]** *"RestAPI is built on the underlying PI. VnV customers will need to use API to integrate into their existing workflow. The hypothesis of concern about delta needed has not been observed at Qualcomm using DP & PCIe (Asking for DPHY and CPHY now) and STM. Continued VOC and customer transition plan will help us mitigate the issue by CAA."*

Qualcomm and STM are named as PI-compat reference customers. CAA is named as the mitigation milestone (CAA = the same Q2 2023 milestone seen in the [tekflow-voc-synthesis-2022-12 ui-ux-roadmap](../decks/tekflow-voc-synthesis-2022-12/ui-ux-roadmap.md)).

### 7. Brian Bowman's TekExpress-to-TekFlow migration concerns (consolidated)

> *"Here are some additional points I received from Brian:"*
>
> 1. *"How do we get customers to move to TekFlow if they don't see value for their testing needs? Perhaps disaggregation and parallel processing isn't needed…"*
> 2. *"TekFlow has to be available to run on the scope"*
> 3. *"Continuity in reporting style is needed"*
> 4. *"Customer parsing scripts may need to be updated"*
> 5. *"Used to pulling screen shots from a certain place in the report"*
> 6. *"Continuity in debug – same capabilities in SDLA/DPOJET"*
> 7. *"Look and feel is not too much different from TekExpress"*
> 8. *"He feels customers are generally happy with the TE workflow"*
> 9. *"Need to have a quick measurement mode"*
> 10. *"Licensing:"*
>     - *"Do we have to give free licenses for existing capabilities they already paid for on TE?"*
>     - *"Could we create a barrier, so they get the basic TE capabilities on TF but not the parallel processing for example?"*

> **[SB]** *"On scope part of backlog, needs to be prioritized (R1 or R2). Lots of inputs were received in similar lines from VOS, consolidation can help us answer or clarify them by AGC."*

> **[DB]** *"My input would be that we have to have this done before releasing PCIe 6.0 CEM since this will require customers to move to TekFlow for a technology inflection, even customers not desiring the new TekFlow capabilities."*

**The PCIe 6.0 CEM release is named as the technology-inflection forcing function** — that release will require all TekExpress PCIe customers to migrate to TekFlow whether they want TekFlow's new capabilities or not, so migration continuity must be solved before that release ships.

## Friction notes

- **VOC offline-in-Mandarin** loses Q&A traceability. The CHN customer questions did not get real-time responses on the call. The thread is itself an attempt to reconstruct what should have been live answers. Process gap: VOC sessions conducted in regional languages need a written-response loop attached to them.
- **"Information to help customer is something that needs to be brainstormed"** (Subhasis on Inspur-CHN's debug ask). The Debug-on-failure surface is described as needing **internal ideation first** before going back to customer VOC. This is a maturity gap: a high-VOC-priority topic with low Tek-side design certainty.
- **"Waveform thumbnails not having debug value"** (David Bouse + N). Customer requested capability ("thumbnails + failure descriptions") is contested by the SA team. Likely a misalignment between what customers ask for and what would actually help them — classic VOC-translation pitfall.
- **"He feels customers are generally happy with the TE workflow"** (Brian Bowman on TekExpress) ↔ this lines up with Srevats's 2026-06-23 framing in [`tek-express/walkthroughs/tek-products-walkthrough.md`](../../tek-express/walkthroughs/tek-products-walkthrough.md): *"a very well received application … a lot of positive feedback."* Two independent senior-Tek voices saying TekExpress UX is *already loved* — the design-system redesign brief is "modernize the visual layer; do not break the workflow."
- **"Customer parsing scripts may need to be updated"** — customers have built scripts that scrape TekExpress reports for specific data. Format changes break those scripts. The redesign cannot freely re-author report layouts.
- **"Used to pulling screen shots from a certain place in the report"** — same continuity concern: visual layout of reports is implicitly contracted with customer workflows.
- **Licensing barrier proposal** ("Could we create a barrier, so they get the basic TE capabilities on TF but not the parallel processing for example?") — Brian Bowman explicitly raises a commercial-tiering option for the migration. This is a product-strategy question, not a UX question; surfaced here for completeness.

## Annotations

> **[SB]** *"RestAPI is built on the underlying PI. VnV customers will need to use API to integrate into their existing workflow."*

The architectural answer to TekExpress → TekFlow command-language continuity: TekFlow's REST API is a thin layer over the same Program Interface (PI) commands TekExpress already exposes. Customers' existing PI-based scripts should keep working through the REST surface — but VnV (verification & validation) customers will need to refactor their integrations to use the REST API rather than direct PI calls.

> **[SB]** *"The hypothesis of concern about delta needed has not been observed at Qualcomm using DP & PCIe (Asking for DPHY and CPHY now) and STM."*

Two reference accounts: **Qualcomm** has migrated TekExpress → TekFlow for DisplayPort and PCIe and is asking to add DPHY and CPHY (so the migration is proven for at least two protocols and trusted enough to expand). **STM** is named as the second reference (cross-references to the [STM France presentation deck](../decks/stm-france-tekflow-presentation/_index.md), which shows STM was already actively engaged in May 2021 and asking for CPHY/DP roadmap).

> **[DB]** *"My input would be that we have to have this done before releasing PCIe 6.0 CEM since this will require customers to move to TekFlow for a technology inflection."*

The PCIe 6.0 CEM forcing function: PCIe Gen 6 compliance support will ship on TekFlow exclusively. Existing PCIe-on-TekExpress customers will be forced to migrate to TekFlow at that release, whether they want TekFlow's new capabilities (parallel compute, REST API) or not. The migration-continuity work is on the critical path for that release.

## Cross-references

- **STM France presentation deck** ([`../decks/stm-france-tekflow-presentation/`](../decks/stm-france-tekflow-presentation/_index.md)) — STM is named here as a PI-compat reference customer. The STM deck's slide-9 customer-feedback chunk is the 2021 origin of STM's CPHY/DP roadmap asks that Subhasis confirms here are still active.
- **TekFlow VOC Synthesis 2022-12** ([`../decks/tekflow-voc-synthesis-2022-12/_index.md`](../decks/tekflow-voc-synthesis-2022-12/_index.md)) — the customer-input themes named here (Pattern Validation = "Configure/Tests" theme, Debug = the 8.9/10 top need, Deskew = "Connections/Requirements/Quick select" theme) line up with the synthesis themes in that deck.
- **TekFlow VOC Synthesis EMEA Update** ([`../decks/tekflow-voc-synthesis-2022-12-emea-update/_index.md`](../decks/tekflow-voc-synthesis-2022-12-emea-update/_index.md)) — same authorship, region-expansion appendix to the same synthesis.
- **TekExpress walkthroughs** — the cross-product migration concerns here directly inform the TekExpress redesign brief documented in [`../../tek-express/walkthroughs/`](../../tek-express/walkthroughs/_index.md). Specifically:
  - **Deskew alignment** ↔ [`../../tek-express/walkthroughs/tek-products-walkthrough.md`](../../tek-express/walkthroughs/tek-products-walkthrough.md) demos TekExpress's current deskew UX.
  - **"Customers happy with TE workflow"** ↔ Srevats's "a very well received application" framing in the same walkthrough.
  - **PI-command continuity** ↔ no direct counterpart in tek-express walkthroughs yet; this thread is the canonical record of the constraint.
- **Garuda subject** ([`../../garuda/index.md`](../../garuda/index.md)) — adjacent VOC subject. The VnV-customer integration concerns raised here may also apply to Garuda's customer base; cross-link not yet established.

## Pending references

- **The Figma Debug-feature screens** Subhasis mentions ("available in figma screens") are not yet in this corpus. When TekFlow screen photos / Figma exports land in `corpus/sources/tek-flow/uploads/photos/`, the Debug screen should be documented via `/document-screens` and linked back from this walkthrough's step 4.
- **TekExpress deskew flow** — the canonical "latest implementation in TekExpress" deskew flow is not yet documented as a corpus screen. Inspur-CHN's question hinges on this being legible. Candidate `tek-express/screens/setup-deskew.md` (if it doesn't already exist).
- **Qualcomm's TekFlow PI-compat experience** — Subhasis cites Qualcomm as the reference; no Qualcomm-specific corpus material exists yet.
- **APD (backlog prioritization framework)** — Subhasis names "APD" as the prioritization method. Not documented in this corpus.
- **CAA, AGC, R1, R2 release milestones** — referenced as time horizons. CAA appears in the 2022-12 UI/UX roadmap; AGC, R1, R2 are not yet defined elsewhere in this corpus.

## Confidence notes

- **`[DB]` = David Bouse; `[SB]` = Subhasis Bera.** Inferred from named tags (`@Bouse, David` / `@Bera, Subhasis`-like tagging) and the speaker tone (DB asks process / DB raises Brian's points; SB gives PM-level responses). The DOCX does not contain a legend; the inference is from context.
- **No recorded_date** — the DOCX has no timestamp. Inferred to post-date the 2022-12 VOC synthesis (since it references "VOC Synthesis → Synthesis of feedback needs to be done" as a forward-looking process step) and pre-date PCIe 6.0 CEM release. Best estimate: late 2022 → early 2023. Left as `null` rather than guess.
- **No `screens_visited`** — this is a written feedback thread, not a screen walkthrough. The narrator never visits a screen; the chunk references the Figma Debug screens conceptually without showing them.
- **"VnV"** = verification and validation (customers performing system-level test). **"VOS"** = Voice of Subject-matter expert (Tek-internal customer-proxy, named in the 2022-12 VOC synthesis as 27+ Tek VOS employees).
- **"AGC"** is the next milestone after CAA per the SB response; not expanded in the source. Likely an internal stage-gate name.
- **"an N"** in David's debug response ("an N and I have given feedback") — first-letter abbreviation for a colleague name; not expanded. Preserved verbatim. Possibly "Ashish N" or similar.
- **Customer names ELECOM, IEI-CHN, Inspur-CHN, Qualcomm, STM** are organizational identifiers, preserved as-is per skill rule (org-level context, not individual contact details). Brian Bowman is internal Tek (named SA representing customer migration concerns), not a customer-side contact.
- **The 😊 emoji** in the ELECOM line is verbatim from the DOCX — preserved.
- **Source is unstructured Word-doc dialogue** with mixed indentation; thread reconstruction above preserves topic-coherent groupings rather than mechanical paragraph order. Step ordering follows the source thread top-to-bottom.
