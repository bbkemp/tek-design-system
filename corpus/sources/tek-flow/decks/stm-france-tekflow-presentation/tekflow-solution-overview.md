---
class: deck-section
deck_id: stm-france-tekflow-presentation
deck_title: STM France TekFlow Customer Presentation
deck_author: unknown
deck_date: 2021-05-18
section_id: tekflow-solution-overview
section_title: TekFlow Solution Overview (Top Features · Landscape · System View)
slide_range: "2-4"
related_screens: []
related_docs: []
related_hardware: []
related_apis: []
applies_to: [tek-flow]
---

# TekFlow Solution Overview (Top Features · Landscape · System View)

## Summary

Three-slide overview block opening the customer pitch. Slide 2 ("TekFlow – Top Features") presents seven numbered value props on a deployment-topology diagram (On-Premises Server / Cloud Server / PC / Bench Top). Slide 3 ("TekFlow Solution Landscape") maps the product surface across the layered stack (Tekscope at acquisition → Tek Drive → On-Prem/Cloud → Smart Data Analysis / Debug / 3rd-party SW Integration / PVT & Characterization). Slide 4 ("TekFlow – System View") is the architecture diagram naming **3rd Party Integration**, **REST API**, **SDK**, **System Integration**, and **Parallel Compute** as the system's five pillars.

## Slide content (verbatim)

### Slide 2 — TekFlow – Top Features

> On-Premises Server · Cloud Server · PC · Bench Top
>
> TekFlow – Top Features
>
> TEKTRONIX CONFIDENTIAL · 2
>
> 25 GHz Analog Mux – auto testing on multi-lane devices
>
> Upcoming platform · Proven platform
>
> **Saves up to 5x Time**
>
> 1. Disaggregated SW
> 2. Parallel Compute
> 3. Integrated Debug
> 4. Smart Data Analysis
> 5. Easy Automation
> 6. Offline Analysis · Data Management
> 7. Seamless Integration
>
> 35% · 100%
>
> Asset Utilization · Parallel processing compliance software

### Slide 3 — TekFlow Solution Landscape

> TEKTRONIX CONFIDENTIAL · 3
>
> TekFlow Solution Landscape
>
> REST API · PVT & Characterization · Smart Data Analysis · Smart Integrated Debug · 3rd Party SW Integration
>
> Upcoming Platforms · Proven platform – Unique offering · Industry most valued User Interface
>
> 10 bit, 8 CH · Extensive SW offering · 10 Gbps Ethernet · 10x faster data transfer
>
> Tek Drive · On-Premises Server · Customer Cloud Server
>
> Enhanced Remote Control: High speed APIs · Python, MATLAB, LabView, etc.
>
> Disaggregated Parallel Compute · System Tests
>
> Tekscope · Multi-Technology Run · USB4 · PCI · … · DPHY · 2023 Plans

### Slide 4 — TekFlow – System View

> TekFlow – System View
>
> TEKTRONIX CONFIDENTIAL · 4
>
> 3rd Party Integration · REST API · Easy integration · SDK · System Integration · Parallel Compute (Actual view)

## Speaker notes

### Slide 1 — Cover (carries cover-deck framing notes)

> Hello Everyone, welcome to the FALCON SW BMV. We as a team are excited to present the BMV gate with incorporated action from the last GB checkin meeting.

### Slide 2 — Top Features

> Overview of the high conviction solution which has been validated as BMV experiment with customers which helps solve the problems that were identified. We done great work on solution storming as a team collaborating with: the Fort DATA ANALYTICS EXPERTS for AI feasibilities for HORIZON 1 and Horizon 2. WE HAVE DONE a Detailed Industry/Market based evaluation. WE HAVE DONE Detailed customer Workflow based evaluation. The solution BUILT has been experimented with SMEs, in advice interviews, VOCs and Experiments.

### Slide 3 — Solution Landscape

> Tim? [Add TekScope voiceover] This slide provides an overview of the solution that resulted from our Hardware-Software-Services concepts that we tested with customers. The aggregate Wow/Fit score was **8.5**. Each solution was generated to tackle specific customer pain points related to our PWS.
>
> Starting with the DUT, devices have many lanes to test. Far more than the 4 channels on a typical oscilloscope. By adding an **Analog MUX remote head**, customers recognize that they can significantly simplify their test setup and eliminate time and rework associated with manual intervention.
>
> The heart of the solution is the scope with a state-of-the-art acquisition system enabled by our **Tek 79 and 85**. It contains a high-speed CPU/GPU with very high-speed data access to the acquisition memory enabling **10 times faster measurements**.
>
> To increase throughput for remote controlled automated applications, customers will have access to a **new class of high-speed APIs** that they can use for their new projects. We will also enhance our legacy code to benefit our customer's existing test setups when replacing their legacy scopes with our new Falcon solution.
>
> The final piece of the solution is our **compliance packages running on an external PC or a cluster of PCs in parallel** with the scope acquisition system to further enhance measurement throughput and increase instrument utilization.
>
> Notes: Performance improvement comparisons are against the **UXR**. Performance is much more improved over the SX. The PCIe example is in relation to the SX and is for a **16-lane test**. Deep-dive in the aspects that improve performance is available.

## Cross-references

- **The seven Top Features** (Disaggregated SW, Parallel Compute, Integrated Debug, Smart Data Analysis, Easy Automation, Offline Analysis/Data Management, Seamless Integration) are TekFlow's articulated value proposition as of May 2021. Compare to the [TekFlow VOC Synthesis 2022-12 platform-roadmap](../tekflow-voc-synthesis-2022-12/platform-roadmap.md) — by 18 months later, "Integrated Debug" had moved from Top Feature to Q3+ "to be planned" item, suggesting the May 2021 pitch over-claimed Integrated Debug's readiness.
- **"FALCON SW BMV"** framing (slide 1 notes) — Falcon was the internal codename for the Tek 79/85 oscilloscope platform; "BMV" likely "Business Model Validation" (an internal stage-gate review). The deck was concurrently used as both customer pitch and internal stage-gate artifact.
- **Tek 79 / Tek 85** acquisition platform (slide 3 notes) — the hardware substrate TekFlow runs on; the disaggregated-SW architecture in slide 5 is enabled by this hardware foundation.
- **"Wow/Fit score 8.5"** in slide 3 speaker notes — matches the 8.25/10 Fit score in the 2022-12 VOC synthesis deck, suggesting Tek's internal scoring rubric remained consistent across the 18-month window.

## Confidence notes

- **No author attribution on the deck cover** — only the speaker-notes "FALCON SW BMV … the team" suggests this was a multi-author team deliverable. The 18-MAY-2021 date is from the slide-master footer.
- **The "25 GHz Analog Mux"** named on slide 2 is the Falcon-era multi-lane acquisition front-end. Not a Tek part number, but a category-of-product reference.
- **"Tim? [Add TekScope voiceover]"** in slide 3 notes is a placeholder for a voiceover narrator — likely Tim from the TekScope product team. The placeholder was not resolved before this version of the deck was archived.
- **"PWS"** in slide 2 notes is not expanded — likely "Problems Worth Solving" given the surrounding "customer pain points" context.
