---
provenance: observed
class: doc-section
doc_id: tx-rx-voc-guide
doc_title: "TekExpress VoC Guide (Draft V0.8 25th May)"
doc_number: null
doc_date: 2026-05
applies_to: [tek-express, tek-rx]
section_id: ui-ux-deep-dive
section_title: 4. UI/UX Deep Dive
parent_section: null
page_range: "6 to 8"
related_screens: []
related_hardware: []
---

# 4. UI/UX Deep Dive

## Summary

The UI question block. Goal: evaluate UI workflow and potential improvements. The internal annotation frames the central platform hypothesis: whether the upcoming platform should lean toward a wizard-driven UX, a flexible expert UX, or a hybrid — learning from TekExpress's effective wizard approach and from Clarius's free-flow model while avoiding its pitfalls. 4.1 probes wizard-vs-free-flow preference, novice-vs-expert needs (including an "Expert Mode" toggle), over/under-guidance experiences, and how "Express++" should balance guided and manual modes. 4.2 (optional, time permitting) probes specific UI elements: what works well or poorly, real-time progress display, and time-consuming click-heavy interactions.

## Content

**Goal:** *Evaluate UI workflow and potential improvements.*

*INTERNAL TO TEKTRONIX ONLY:*

> **Internal annotation (red text in source):** How this informs our Hypothesis: This section guides whether Upcoming Platform should lean towards a **wizard-driven UX, a flexible expert UX, or a hybrid model**. The goal is to strike the right balance: ensure **structured guidance** where needed (learning from TekExpress's effective wizard approach) and provide **efficient expert workflows** where possible (learning from Clarius's free flow model but avoiding its pitfalls).

### 4.1 Wizard-Based vs. Free-Flow UI *(user interface model preferences.)*

- **UI Style Preference:** Do you generally prefer a **guided, wizard-style interface** (step-by-step guidance through setup and testing) or a **free-flow, manual interface** (where you can configure everything directly) for compliance testing? *Why?* Please describes the **pros and cons** you experience with each style – for example, do wizards ensure **no critical step is missed** but sometimes feel slow or restrictive? Does free flow let you go faster when you know what to do but risk missing a step or misconfiguration?
- **Novice vs. Expert Needs:** How do your UI needs differ for **new engineers vs. experienced power users** on your team? For instance, do novices require a wizard or guided flow to succeed, whereas experts find that too constraining? If you have both types of users, what's the best way a tool could accommodate them (e.g., an "Expert Mode" toggle or ability to skip ahead)?
- **Context-Specific UI:** Have you encountered situations where a UI was either **too guided** or **not guided enough** for the task at hand? For example, during **initial bring-up** under time pressure, did a wizard help or hinder? During **mass validation or automation**, did too many prompts slow you down? Describe one scenario from your experience and how the UI should ideally behave in that context.
- **Hybrid Approach:** Would a compliance platform that offers **both modes** (guided by default, but with the ability to bypass steps or switch to manual mode) be valuable to you? If yes, which parts of the process **must stay guided** for safety/consistency, and which should **allow expert overrides** for efficiency? If you've been frustrated by a tool's UI in the past, was it due to *over-guidance (too many forced steps)* or *under-guidance (lack of direction)*, and how should Express++ balance that?
- **Overall, which is the best UI/UX you think reflects your use case?**

### 4.2 Specific UI Elements & Interactions (if needed)

*(If time allows, the interviewer can probe more granular UI topics like progress indicators, error dialogs, etc.)*

- Do you recall any **UI elements in TekExpress** (OR CURRENT TOOL) that work particularly well or poorly (e.g., test selection lists, progress bars, log windows)?
- How important is it for the UI to show **real-time progress** and an estimated time to completion during long test runs?
- Are there any **time-consuming UI interactions** (like having to click through many screens for repetitive tasks) you'd love to see streamlined or automated?

## Cross-references

- `future-needs-and-wrap-up` — the "Simple UX" and "Disaggregated UI" ranked candidate features that follow from this block.
- [`walkthroughs/ui-redesign-mantras-and-transition-strategy.md`](../../walkthroughs/ui-redesign-mantras-and-transition-strategy.md) — Subhasis's redesign mantras; the wizard-vs-expert balance here is the VOC instrument for that strategy.
- [`walkthroughs/personas-and-jobs-to-be-done.md`](../../walkthroughs/personas-and-jobs-to-be-done.md) — the novice/expert question maps directly onto the Push-Button Pete vs. Guru Gus persona split (Midway Max being the hybrid case).
- [`walkthroughs/ae-tapo-parua-prototype-ui-feedback.md`](../../walkthroughs/ae-tapo-parua-prototype-ui-feedback.md) and [`walkthroughs/ae-nadir-kahn-competitive-landscape-and-visual-direction.md`](../../walkthroughs/ae-nadir-kahn-competitive-landscape-and-visual-direction.md) — internal AE takes on the same wizard/free-flow and UI-element questions.
- [`docs/tek-express-ddr5-tx-user-manual/status-panel.md`](../tek-express-ddr5-tx-user-manual/status-panel.md) — the current progress/log surface that 4.2's real-time-progress question probes.

## Confidence notes

- **"Express++"** appears here (4.1 Hybrid Approach bullet) as a name for the upcoming platform — the only occurrence in the document. It is not expanded or defined; whether it is a working title or an established internal program name is not stated.
- "Please describes the pros and cons" — typo preserved as printed.
- The internal annotation treats TekExpress's wizard approach as "effective" and Clarius's free-flow model as having "pitfalls" — this is the author's framing hypothesis, recorded verbatim; it is itself the thing the questions are designed to test.
