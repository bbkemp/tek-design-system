---
class: walkthrough
product: tek-express
flow_id: tek-products-walkthrough
flow_title: "TekExpress + TekRx Product Demos (Pranavi)"
recorded_by: Chanda, Pranavi
recorded_date: 2026-04-23
duration: "~30 min (16:35 to 46:00)"
transcript_source: "uploads/transcripts/TekExpress & TekRx Overview Transcript(By Pranavi).docx"
screens_visited: [setup-dut, setup-test-selection, setup-test-selection-config, setup-acquisitions, results, plots]
applies_to: [tek-express, tek-design-system]
related_screens: [setup-dut, setup-test-selection, setup-test-selection-config, setup-acquisitions, status-test-status, status-log-view, results, plots, reports-configuration, reports-view-settings]
related_apis: []
related_hardware: []
related_modules: []
---

# TekExpress + TekRx Product Demos (Pranavi)

## Summary

Pranavi screen-shares the existing TekExpress AppEmulator and the sibling TekRx product. The demo runs ~30 minutes and is the primary live walkthrough of both products in the meeting. Srevats provides product context (TekExpress is the compliance application for transmitter and some receiver tests; TekRx is the receiver-test variant that depends on a BERT instrument).

This is the **canonical "what the products actually do"** content in the corpus — verbatim narrator commentary captured alongside the screen flow.

## Goal

Give the DS team and the broader audience a working understanding of what the user actually does in TekExpress and TekRx today, so the redesign can preserve flows that work.

## Steps

**17:02 — Pranavi shares her screen and introduces the demo.** *"Let me share my screen here. So yeah, I do have Tech Express and TechRx test here with me, so we can quickly go over both of them."*

**~17:30 — TekExpress entry: data rate, lane setup, signal validation.** Pranavi navigates the Setup wizard from DUT outwards. The key form fields she calls out:

- Data rate selection ([`setup-dut`](../../screens/setup-dut.md) Device / Suite / Version dropdowns).
- Lane setup and signal validation — *"some of them are very specific to DP, so that's what we are seeing here."*
- Filters.

**20:02 — Srevats reinforces a UX point about selection cascading.** *"Many of the selections that Pranavi is showing us here, as she changes the view in a subsequent screen, those selections need to be remembered."* (Subsequent screens depend on Setup › DUT choices.)

**20:32 — Pranavi on multi-rate / backward compatibility.** *"Most of them do support multiple data rate or they could be backward compatible. So we make that selection."*

**~21:00 — Pranavi enters Test Selection.** Describes the hierarchical test tree and the per-test Configure dialog. *"Like if we see something like a Lane setup or filters or signal validations are very common for all the applications, but some of them are very specific to DP, so that's what we are seeing here."*

**26:28 — Pranavi opens the Configure dialog.** *"Before going to acquisition. So we also have something called configure, right? So when I click this, that's when we can configure each of the tests. I think in some of the applications, this can go a…"* → opens [`setup-test-selection-config`](../../screens/setup-test-selection-config.md). She walks through the Acquire / Analyze sub-tabs.

**35:07 — Srevats wraps the TekExpress segment.** *"Just looking at the time also, Pranavi. First of all, thank you so much for taking us through a lot of detail. So everybody, if you want to spend more time on Tech Express, we could."*

**35:51 — Srevats pivots to remaining UI patterns + product context.** *"Any questions, any thoughts on TEKBIDP? And Pranavi, if you have missed any controls, if you think there is one or two screens which has a different control."*

**36:25 — Srevats on the RF switch component (different control class).** *"That's a different kind of control, like Pranavi showed us drop-downs, buttons, table kind of view, editable drop-down entries within the table."*

**37:08 — Hemant on the editable grid pattern.** *"I think we should jump the these RF switch would be something different. She was that maybe we can show in some other time, but the grid is extensively being used and heavily used actually, so this is…"*

**37:33 — Srevats provides product context for TekExpress.** *"30 second context for everybody. Tech Express is predominantly our compliance application, which is used for most, for all transmitter applications and some receiver applications."*

**37:51 — Srevats introduces TekRx and BERT-dependent receiver tests.** *"Some receiver tests require a separate equipment, which is called the BERT, which does a bit error rate testing as well. And those receiver applications that are BERT dependent are…"* → leads into TekRx demo.

**38:33 — Srevats on TekExpress's UX standing.** *"A very well received application. Today, again, we will focus on the UI components, but workflow-wise also, this is a very well received desktop application. There's a lot of poster feedback that we have…"* — important framing: the redesign is not fixing broken UX; it's modernising the visual layer of a product the user community already approves of.

**39:05 — Pranavi opens TekRx.** *"So currently we support PCI and USB, so those are the different plugins, kind of the view that we get here. Let's say I just open one of it. This is a flow more or less the same for all the applications."*

**41:42 — TekRx is wizard-based with calibration step.** *"Button which opens up another wizard and here we list down what all need to be run under that particular calibration. We start usually with the connection diagram and we have this kind of a fixed flow…"*

**42:40 — Srevats: TekRx UX is highly wizard-driven.** *"This is a very wizard based approach. So you will see a page by page control. We will step by step do this and then you will know what to do next. And there's a lot of text also kind of integrating the flow."*

**45:27 — Srevats: TekRx supports partial / iterative runs (different from TekExpress).** *"Unlike some of the other things that we have seen, it's not like a single run, right? You can see for this page, you can do a different kind of run. At this page, you can go and see, select…"*

**45:52 — Pranavi: Save & Resume in TekRx.** *"So in the end, like once everything is done, we want to save the setup. This is where we save it and click this button until it gets saved."*

**46:26 — Pranavi: Resume Calibration path.** *"Only one of that calibration. So we'll do that and then we'll save that and that is also available for continuing the test later. So this is where we have resume calibration option."*

## Annotations

- **TekExpress and TekRx are siblings, not the same product.** TekExpress = compliance application for transmitters + some receivers. TekRx = receiver tests that require external BERT equipment, much heavier wizard-driven flow with save/resume calibration. Both should likely have separate corpus subjects in the long run; the walkthrough captures their relationship for now.
- **The user community likes TekExpress's UX.** Srevats: *"a very well received application … a lot of positive feedback."* The redesign brief is **don't break what works**; preserve flows, modernise visuals.
- **Wizard + save/resume is a documented user expectation.** TekRx's wizard-based calibration with Resume Calibration is a more elaborate version of the four-step Setup wizard in TekExpress. Worth preserving the save/resume capability in the redesign if it's not already obvious from the screens.
- **Editable grid is heavily used.** Hemant: *"the grid is extensively being used and heavily used actually."* The Setup › Test Selection checkbox tree and the various tables (Acquisition, Status, Results, Limits Editor) all qualify. The DS-v2 mapping needs a strong editable-grid primitive.
- **Selections cascade across screens.** Srevats: setup choices on DUT propagate through Test Selection / Acquisitions. The redesign should preserve this cascade; surface the active context explicitly (the `TX-Device : Group1 : TEFW 4.0` header pattern documented in the screens).

## Friction notes

- **The transcript's product naming is inconsistent.** "Tech Express" / "Tek Express" / "TechRx" / "TekRx" / "RX" all appear interchangeably. Normalize to "TekExpress" and "TekRx" in this corpus.
- **No explicit complaints about the existing UX were raised in this segment** — by either Pranavi or the team observing the demo. (The chart-richness complaint comes later, in the [ux-feedback-and-open-questions](./ux-feedback-and-open-questions.md) chunk.)
- **One ambiguous reference: "TEKBIDP".** Srevats says *"any thoughts on TEKBIDP?"* — likely a product name (Tek BIDP — Bi-Directional Protocol?). Not part of the TekExpress / TekRx pair under discussion; unclear if it's a sibling or a related context. Flagged for clarification.

## Cross-references

- All TekExpress screens visited or referenced in this demo are documented under `screens/` in this corpus:
  - [`setup-dut`](../../screens/setup-dut.md), [`setup-test-selection`](../../screens/setup-test-selection.md), [`setup-test-selection-config`](../../screens/setup-test-selection-config.md), [`setup-acquisitions`](../../screens/setup-acquisitions.md), [`status-test-status`](../../screens/status-test-status.md), [`status-log-view`](../../screens/status-log-view.md), [`results`](../../screens/results.md), [`plots`](../../screens/plots.md), [`reports-configuration`](../../screens/reports-configuration.md), [`reports-view-settings`](../../screens/reports-view-settings.md).
- The audit PDF's screen-inventory chunk covers the same set: [`docs/ui-audit/screen-inventory.md`](../docs/ui-audit/screen-inventory.md).

## Pending references

- **TekRx as its own corpus subject.** If processed, this chunk's `applies_to` should expand to include `tek-rx` and the TekRx-specific screens (wizard pages, Resume Calibration, connection diagrams) become their own chunks. *Notable TekRx-specific UI: Resume Calibration button, fixed-flow connection diagrams, partial-run capability.*
- **TEKBIDP** — not in this corpus.
- **BERT instrument integration** — referenced as a hardware dependency for some TekRx tests; not documented anywhere in this corpus yet.

## Confidence notes

- This walkthrough segment is long and includes many short acknowledgment turns ("Mhm", "Yeah", "Okay") between substantive turns. Acknowledgment-only turns are omitted; substantive content is quoted verbatim.
- The 30-minute segment covers two products. Step numbering above tracks the major narrator turns, not every line.
- Pranavi's TekRx demo is briefer than her TekExpress demo (because of time pressure — Srevats explicitly pivots to TekRx around 35:07). The TekRx flow detail is therefore lighter than it could be; a dedicated TekRx demo recording would deepen this.
