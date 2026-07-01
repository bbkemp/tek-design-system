---
provenance: observed
class: deck-section
deck_id: stm-france-tekflow-presentation
deck_title: STM France TekFlow Customer Presentation
deck_author: unknown
deck_date: 2021-05-18
section_id: stm-customer-feedback
section_title: STM Meeting Feedback (customer VOC capture)
slide_range: "9"
related_screens: []
related_docs: []
related_hardware: []
related_apis: []
applies_to: [tek-flow, tek-express]
---

# STM Meeting Feedback (customer VOC capture)

## Summary

The **highest-signal slide in the deck.** STM France raised ~20 questions back to Tek during the May 2021 engagement, captured here in three buckets — **Security & Legal**, **UX & Workflow**, and **Asset utilization & configuration** — plus a forward-looking **Future Commitments** section listing STM's open feature asks (CTS compliance proof, CPHY/DP roadmap, custom-measurement framework, multi-measurement flow chaining, TekScope measurement integration into TekFlow). Two STM-attributed customer quotes are recorded: a positive direction-of-travel comment from the STM France Engineering Leader and a second positive note from "David P".

## Slide content (verbatim)

### Slide 9 — STM Meeting Feedback

> STM Meeting Feedback
>
> **Security & Legal**
> - Database Security updates
> - Are these GNU licenses? Any implications
>
> **Ux & Workflow**
> - How will you share security patches?
> - How will you notify give the IT restrictions of OTA updates?
> - How can I manage the data collected? Purging etc?
> - Backup and restore?
> - How is the DB interface managing load and save stuff
> - How will I use the SW in User interface mode? It should have minimal training to get used to the New SW platform
> - Session or Saving the configurations to customize to test scenarios like My voltage 1, my voltage 2 etc.
> - Can I do some analysis on the reported data to drive some conclusions?
>
> **Asset utilization & configuration**
> - Need all information for what server needed and what are the benchmarking information for other technologies etc.
> - Storage management – type of storage, etc?
> - Acquire continuously and dump in a Server location to initiate analysis and move the Scope
> - Data mapping to run the analysis after the Bulk acquisition
> - Min theory of concept Acquire time should be = Analyze time
>
> **Future Commitments:**
> - How does TekFlow prove that is compliant with the CTS?
> - What is the roadmap for CPHY and DP
> - Can we use our own measurements using this framework?
> - Can we call multiple measurements together and run them as a flow?
> - We need Tekscope measurement analysis to add into the TekFlow?
>
> 18-MAY-2021 · TEKTRONIX CONFIDENTIAL · 9
>
> **Customer quotes (recorded on the slide):**
>
> > "Good to see Tek is working on this kind of solutions"
> > — Engineering Leader – STM France
>
> > "Great progress from the last few months of engagement. It has improved a lot"
> > — David P

## Speaker notes

No speaker notes captured for slide 9.

## Cross-references

- **"Session or Saving the configurations to customize to test scenarios like My voltage 1, my voltage 2"** ↔ this is the **same wizard-save / configuration-recall pattern** that Subhasis frames in the 2026-06-23 AU VoC as the dollar-justification for TekExpress's wizard ([`tek-express/walkthroughs/personas-and-jobs-to-be-done.md`](../../../tek-express/walkthroughs/personas-and-jobs-to-be-done.md) — *"customer pays 30 to $50,000 to ensure that their half $1,000,000 setup is correctly configured through the wizard and they save the wizard and keep running the test"*). STM was asking for this capability in 2021; in 2026 it's documented as TekExpress's primary value driver. Strong evidence the redesign must preserve / strengthen save/recall on TekFlow.
- **"How will I use the SW in User interface mode? It should have minimal training to get used to the New SW platform"** ↔ the [`tekflow-voc-synthesis-2022-12 voc-summary-and-synthesis`](../tekflow-voc-synthesis-2022-12/voc-summary-and-synthesis.md) chunk's highest-input theme **"Customize · Messy Current State (21 inputs)"** is the broader-customer-base echo of this same STM concern. STM was an early customer raising the training-burden issue that became the volume signal 18 months later.
- **"Can we call multiple measurements together and run them as a flow?"** — this is the user-defined-flow / composition request. Matches the [tekflow-voc-synthesis-2022-12 platform-roadmap](../tekflow-voc-synthesis-2022-12/platform-roadmap.md) "Enhanced Sequencer" item (Q4 2022) and "App Builder" item (Q3+ 2023).
- **"We need Tekscope measurement analysis to add into the TekFlow"** — STM is asking for TekScope-measurement composability inside TekFlow. The customer-feedback walkthrough ([`../../walkthroughs/customer-feedback-thread.md`](../../walkthroughs/customer-feedback-thread.md)) shows the same question being raised again 18+ months later: *"We need Tekscope measurement analysis to add into the TekFlow?"* — still open as of the feedback-thread date.
- **"What is the roadmap for CPHY and DP"** — STM's CPHY ask in 2021 directly drives the 2022-12 UI/UX Roadmap's **"STM CPHY"** Q2-Q3 2023 entry ([`tekflow-voc-synthesis-2022-12 ui-ux-roadmap`](../tekflow-voc-synthesis-2022-12/ui-ux-roadmap.md)). This deck and that roadmap are connected: STM's 2021 ask became a tracked roadmap item by Dec 2022.
- **"How does TekFlow prove that is compliant with the CTS?"** (CTS = Compliance Test Specification) — STM is asking for upstream-org-approval evidence, not a feature request. Useful customer-segment signal: STM is a **certification-driven buyer**, prioritizing standards conformance over capability breadth.

## Confidence notes

- **"OTA updates"** in the Ux & Workflow bucket is over-the-air / over-the-network updates — same OTA concept tracked on the 2022-12 platform-roadmap as "OTA updates – tekcloud.com".
- **"GNU licenses?"** in Security & Legal — STM asking whether TekFlow embeds GPL/LGPL components and the legal-exposure implications. This is a legal-team-driven question, not an engineering one. Tek's response is not captured on this slide.
- **"David P"** — customer-side person attribution; no last name on the slide. Preserved as written. May be the same David referenced elsewhere in Tek-side discussions but cannot be verified.
- **"Engineering Leader – STM France"** — title-only attribution; no individual name on the slide. Preserved as written.
- **STM = STMicroelectronics** — French/Italian semiconductor manufacturer, headquartered in Geneva with a major France presence. Standard expansion; not a confidential association.
- The original deck had bucket headers visually separating the three Ux & Workflow / Security & Legal / Asset utilization clusters; the XML-extraction loses this hierarchy. The clustering preserved above is faithful to the slide's spatial layout, inferred from question-topic adjacency.
