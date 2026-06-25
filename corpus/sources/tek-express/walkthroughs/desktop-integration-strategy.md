---
class: walkthrough
product: tek-express
flow_id: desktop-integration-strategy
flow_title: "Desktop / WPF Integration Strategy"
recorded_by: Bryan Kemp
recorded_date: 2026-04-23
duration: "~7 min (9:00 to 16:35)"
transcript_source: "uploads/transcripts/TekExpress & TekRx Overview Transcript(By Pranavi).docx"
screens_visited: []
applies_to: [tek-express, tek-design-system]
related_screens: []
related_apis: []
related_hardware: []
related_modules: [qt]
---

# Desktop / WPF Integration Strategy

## Summary

Mid-meeting segment focused on *how* the design system will land in the WPF / desktop apps Tektronix already ships. Bill frames an incremental adoption strategy (*"you won't have to take it all at once"*); Mahesha counter-proposes a WPF control library built on top of the DS tokens, modelled on the team's earlier WinForms control library for the Terminator platform. The conversation ends with broad agreement that a sample desktop application + control library is the natural deliverable; no commitment on timing.

## Goal

Reach a working agreement on the implementation path: how does the Tek Design System make it into the desktop / WPF apps the team is actually shipping?

## Starting state

Bryan has finished the DS architecture overview. Bill is positioned to make his "main pitch" about how to proceed.

## Steps

**9:11 — Bill flags caution about constraining choices too early.** *"What I want to be careful of right now is that what I don't want to do…"* (the turn cuts off; the position is preserved: don't pre-commit to a specific implementation path before validating the strategy with engineering).

**13:04 — Mahesha proposes the WPF control library approach.** *"What we can think about is like to save on time and to have instant feedback on how it fits into a desktop application. So all the design system, all the controls that you have developed, we could replicate that as a WPF control library which understands all these themes."*

**13:25 — Mahesha extends — a sample desktop app to validate.** *"So we can build a library of all the WPF controls with the theme applied. And then probably we can wrap up that control library in a sample desktop application, which you can launch. And then all of us can actually use that to test how it actually feels and looks."*

**13:46 — Mahesha on long-term reuse.** *"And later, because it's a library, so we can consume that wherever we want to apply those things for a desktop application, we can start referencing that library and boom, we have everything in the new look."*

**14:01 — Bill confirms the approach makes long-run sense.** *"Exactly. Yeah, I think in the long run, this will make implementing the UI and certainly updating the UI as we make changes to the design system and things like that. I think it will make all of that simpler."*

**14:24 — Bill closes the pitch.** *"Like I said, updates for you guys a lot simpler. So, all right, that's my main pitch, which didn't get, I wasn't expecting a ton of pushback, but it got even less than I thought, which is wonderful."*

**15:01 — Mahesha provides historical context — WPF isn't new at Tek.** *"WPF is not something new that we are exploring. So some of our current products already use WPF. So if you see the RX platform, it uses WPF."*

**15:22 — Mahesha notes the prior ad-hoc approach.** *"It was not through an established process, so we used to have interaction and build those controls, so…So, at WPF, as such, will offer a very flexible environment for applying all these customizations."*

**15:50 — Mahesha cites the WinForms-for-Terminator precedent.** *"So we can build those control libraries, very similar to how we built WinForm-based control libraries for Terminator platform, which was later imported into the current Tech Express. So we know how to do this."*

**16:35 — Srevats pivots to the product demos.** *"We have Pranavi. I had kept the RX environment ready, but I wanted both techniques to present the RX, so I invited Pranavi in. Are there anything else you want to do before we get to those demos?"*

## Annotations

- **WPF is the consuming runtime.** Mahesha's statement *"some of our current products already use WPF"* — specifically the RX platform — anchors the redesign in WPF, not Electron or web-component-via-WebView2. This validates the existing `qt/` translation layer pattern (Qt is one such translation target; WPF is another).
- **Pattern: control library wrapping DS tokens.** Mahesha's proposal — build a WPF control library that consumes DS tokens and produces themed WPF controls — is the same pattern the DS already supports via the `qt/` translation layer (`TekTokens.h` + `.qss` stylesheets). A `wpf/` translation layer that emits XAML ResourceDictionary + WPF theming is the natural extension.
- **Incremental adoption is explicit.** Bill's *"you won't have to take it all at once"* — token releases stay backwards-compatible; teams pull tokens in at their own cadence.
- **Sample desktop app as the validation surface.** Mahesha's *"wrap up that control library in a sample desktop application … so we can actually use that to test how it actually feels and looks"* — this is exactly the role of `component-library.html` in the DS today, but the desktop equivalent doesn't exist yet.

## Friction notes

- **No commitment on timing.** The desktop control library + sample app is positioned as a future deliverable but not scoped or assigned in the meeting.
- **Prior ad-hoc process is the implicit baseline.** Mahesha's note that the Terminator/Express control libraries were built *"not through an established process"* — there's an organisational gap (lack of a defined DS-to-WPF release process) that the new DS-v2 release process is meant to close. Whether the WPF library lives in this repo or a sibling repo is undecided.

## Cross-references

- The Tek Design System's existing Qt translation layer (`qt/TekTokens.h`, `tek.dark.qss`, `tek.light.qss`) is the closest existing precedent: [`corpus/sources/tek-design-system/code/<latest>/qt.md`](../../../tek-design-system/index.md).
- The `wpf/` directory exists at the repo root as a planned placeholder but contains no implementation yet.
- The CLAUDE.md "what's in flight" table lists "WPF translation layer" as planned but not yet shipped.

## Pending references

- A `wpf/` corpus chunk (when the WPF translation layer is implemented).
- The "Terminator platform" WinForms control library — referenced as historical precedent; no chunk in this corpus.
- The TekRx WPF implementation — Mahesha says RX uses WPF; if a TekRx code snapshot lands, this chunk's `related_modules` should point at it.

## Confidence notes

- Turn 9:11 is cut off in the transcript (Bill begins to articulate a concern but the rest does not surface in the recorded text). Likely the concern was about pre-committing to one path before validation; the surrounding context supports that reading but it is not literal.
- The TekRx product is referenced as "RX platform" / "RX" / "TekRx" interchangeably throughout the meeting.
