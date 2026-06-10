---
class: audit
audit_id: 2026-06-03-v3-rag-audit
target_artifact: v3.html
audited_by: cd
audited_against: rag/sources/tek-express
applies_to: [tek-express]
verdict: corrected — strong across the board; the two F grades in my original audit (artifact contract, container queries) were both wrong
amended_date: 2026-06-04
---

# v3.html — RAG Audit (amended 2026-06-04)

**Artifact under audit:** `audits/design-additions/2026-06-02-tek-express-setup-dut/v3.html` (596 KB single file, React-bundled inline)
**Corpus reference:** `rag/sources/tek-express/` (17 screens, 4 walkthroughs, 10 audit chunks, 1 wireframe + render)
**Redesign baseline:** [`audits/prototype/2026-06-01-tek-express-redesign-baseline/report.md`](../../prototype/2026-06-01-tek-express-redesign-baseline/report.md)

## ⚠ Amendment (2026-06-04) — two F grades retracted

When I first wrote this audit I only had `v3.html` to look at because that's all that had been copied into the repo. Pulling the full Claude Design bench bundle (`api.anthropic.com/v1/design/h/5heFy-8QmlZt3yQnOSNatg`) on 2026-06-04 reveals that **CD shipped the full three-artifact contract** — I just couldn't see the other artifacts. Two corrections:

| Dimension | Original grade | Amended grade | Why |
|---|---|---|---|
| **Artifact contract** | F | **A** | All three artifacts shipped in the bench: [`tek-express-redesign-additions.md`](./tek-express-redesign-additions.md) (24 KB, 5 tokens + 12 components proposed with ✓/⚠ flags), [`tek-express-setup-dut-notes.md`](./tek-express-setup-dut-notes.md) (20 KB, flow-preservation map + 11 open questions + corpus-fidelity QA), [`tek-express-build-spec.md`](./tek-express-build-spec.md) (10 KB, verbatim corpus content per screen). Now copied into this folder. |
| **Container queries** | D | **B** | The 1 `@container` rule that triggered the D was misleading — CD actually built a **tokenized container-breakpoint system**: defined `--tek-container-breakpoint-{sm,md,lg}` tokens (600/760/820 px), wrapped the screen in a `container-type: inline-size, container-name: app` ancestor, and documented the per-region reflow rules. The single `@container` query landed for the probe-row; more rules accumulate as the multi-screen build progresses. This is the additions-audit candidate the prompt explicitly asked for. |

The other dimensions (token discipline A, component composition D, wireframe fidelity A-, cross-product context B) are unchanged.

Substantively this means: **the prompt didn't need new rules; the artifact-contract failure I diagnosed wasn't a failure**. The four prompt-tightening recommendations in §"Round 2 recommendations" below are no longer P0 — CD already executed against the contract. Keep them on file as belt-and-suspenders for a future cold-start run.

---

## TL;DR

Not abysmal. Mixed. Token discipline is strong; **component composition is weak**; responsive is missed; **the artifact contract was broken** (no additions audit, no notes file). The first sweep looked worse than reality because most of the hardcoded values were inside SVG icon glyphs — exactly where they belong. The real failure is that CD imports the right `tek-*` tags as exemplars but then renders the actual screen mostly with vanilla `<button>` elements. **CD painted with our tokens but did not compose with our components.**

Round 2 doesn't need a new prompt. It needs **two hard rules added to the existing prompt** and a follow-up turn enforcing the 3-artifact contract.

## Scorecard

| Dimension | Grade | Headline |
|---|---|---|
| Token adoption | **A** | 317 `var(--tek-*)` refs, 69 unique tokens spanning spacing/color/fonts/borders. Only 8 stray hex outside SVG icons; 25 stray px outside SVG. |
| Component composition | **D** | All 12 tek-* tags imported and shown once each, but **19 bare `<button>` elements** in the actual screen. Used components as exemplars, not as primitives. |
| Responsive (container queries) | **D** | 1 `@container` rule, 1 `container-type`, 1 `container-name`. The prompt called for container breakpoints as a first-class pattern; CD did one. |
| Wireframe fidelity | **A-** | Plots correctly absent from top-nav (0 mentions). DDR/DDR5 title-bar context present (4 mentions). Configuration step present in wizard. Burst Detection, Differential probe, Live Waveform, User Defined Acquisition all preserved. |
| Cross-product context | **B** | TekExpress-specific test context (DDR5, Burst Detection Method) carried through. No evidence the 2450-EC corpus contaminated this run. |
| Artifact contract | **F** | Only `v3.html`. No `tek-express-redesign-additions.md`, no `tek-express-setup-dut-notes.md`. The 3-artifact contract from the prompt was a single-artifact delivery. |
| Architecture (Qt-translatability) | **C** | React-bundled single HTML (`ReactDOM`, single `<script src=…>`). Not a Web Components page in any structural sense. Acceptable for a "feel" prototype, **not acceptable as a handoff to cc** without a target-stack pivot. |

## What CD got right

### 1. Token adoption — across all four namespaces
- `var(--tek-spacing-*)`: 96 uses
- `var(--tek-color-*)`: 89 uses
- `var(--tek-fonts-*)`: 52 uses
- `var(--tek-borders-*)`: 43 uses
- 69 unique tek tokens total. CD read the corpus, found the token vocabulary, and used it across every category that exists. This is what a properly-grounded RAG run looks like at the token layer.

### 2. Hardcoded values — almost all inside icons
- 321 of 329 hex values are **inside `<svg>...</svg>` blocks** — i.e. icon glyph fills. That's appropriate; icons are vector data, not theme.
- Only **8 hex values outside SVG**: `#faf9f5`, `#999`, `#fff`, `#ff8a80`, `#666`, `#5c2b2e`, `#2a1215`. The two red shades (`#ff8a80`, `#5c2b2e`, `#2a1215`) look like an error/destructive state CD invented; the greys are utility outliers. **8 deviations across a 596KB artifact is excellent discipline**, not "342 violations."
- Same picture for px: 359 of 384 are SVG dimensions. **25 px outside SVG** — also disciplined.

### 3. Wireframe deltas — read and respected
| Delta from `wireframes/setup-dut-wireframe.md` | In v3.html |
|---|---|
| Top nav: 4 horizontal tabs (no Plots) | ✓ — "Plots" appears 0 times |
| Title-bar test-context ("DDR Tx") | ✓ — "DDR" 4×, "DDR5" 2× |
| 5-step wizard with new Configuration step | ✓ — "Configuration" present |
| Burst Detection / Differential probe / User Defined | ✓ — all present |
| Inline `[Setup]` buttons next to fields | not verified from grep alone — see Round 2 |

### 4. tek-* component vocabulary — imported correctly
CD knew which custom-element tags exist and emitted at least one of each: `<tek-button>`, `<tek-input>`, `<tek-toggle>`, `<tek-modal>`, `<tek-selector>`, `<tek-dropdown>`, `<tek-tabs>`, `<tek-wizard-stepper>`, `<tek-group-box>`, `<tek-field>`, `<tek-status-bar>`, `<tek-empty-state>`. That's the corpus's proposed tag vocabulary — including ones not yet shipped (`tek-dropdown`, `tek-tabs`, `tek-wizard-stepper`, etc.). **CD read the additions audit list.**

## What CD got wrong

### 1. The 12 tek-* tags are exemplars, not the screen
Each tek-* tag appears **exactly once** in the source. Meanwhile **19 bare `<button>` elements** render the actual UI. That pattern signals: CD made a "components used" demo strip at the top, then built the screen with vanilla HTML below. **The Qt translation layer cannot bind to vanilla `<button>` elements** — `tek-button` → `QPushButton` works because the tag is `<tek-button>`. A 19-vanilla-button page is not a tek-design-system page.

**Round 2 fix:** Add a hard rule — *"Every interactive element MUST be a `<tek-*>` custom element. Bare `<button>`, `<input>`, `<select>`, `<textarea>`, `<label>` are forbidden. If the needed primitive doesn't exist, declare it in the additions audit instead of falling back to a bare element."*

### 2. Container queries: 1 rule, 1 declaration
The prompt was explicit on container breakpoints — also reinforced in [`walkthroughs/ux-feedback-and-open-questions.md`](../../../rag/sources/tek-express/walkthroughs/ux-feedback-and-open-questions.md) at the 51:56 turn (Bryan's commitment to Richard Patterson). CD shipped **one** `@container` rule and **one** `container-type` declaration in 596KB of output. That's not "responsive at the container level"; that's a token gesture.

The wireframe at 1440×900 is one breakpoint. The redesign needs at minimum:
- Half-width docked (Rick Kuhlman's 50:05 ask in the same walkthrough)
- Tall narrow rail (Patterson's 51:14 "stretched horizontal, one-third height")
- Full-screen (current)

**Round 2 fix:** Add a hard rule — *"Every layout container — top nav, wizard rail, form sections, action cluster — MUST declare `container-type: inline-size` and define at least one `@container` rule that re-flows it. Viewport `@media` queries are forbidden unless explaining a non-content concern (print, prefers-color-scheme)."*

### 3. Artifact contract — broken
The prompt asked for three artifacts:
1. `v3.html` — the screen ✓
2. `tek-express-redesign-additions.md` — new primitives proposed, what they introduce, why ✗
3. `tek-express-setup-dut-notes.md` — decisions, deviations from corpus, open questions ✗

CD shipped only #1. The other two are how the work gets reviewed and how the next screen gets started; without them this is one HTML in a folder, not a system handoff. **This is the biggest single failure.** The whole reason the corpus exists is so the next CD session (or cc) inherits decisions instead of re-deriving them. No notes file = total reset on round 2.

**Round 2 fix:** Same prompt, plus a follow-up turn: *"Before continuing, produce the two missing companion artifacts based on what you already built. The screen is locked; document what's in it."*

### 4. React-bundled single HTML
Not a deal-breaker for a "feel" prototype, but worth naming: this is one 596KB HTML file with the entire React runtime bundled inline (`ReactDOM`, single `<script src=…>`). **Web Components live in the DOM**; they don't need React to render. The fact that the rendered DOM mostly uses vanilla `<button>` (failure #1) suggests React's component model competed with the Web Components model and React won the actual rendering, while WC won only the exemplar strip.

**Not a Round 2 fix for the prompt; a target-stack decision for the cd→cc handoff.** If cc receives this artifact, the first thing it has to do is rip the React bundle out and re-author the DOM as WCs. That's silent rework. Either:
- The prompt explicitly forbids React (sets target stack: vanilla HTML + tek-* WCs only), or
- The artifact contract says "this is for design feel only; cc will rebuild structurally."

## Diagnostic — *why* did CD do this?

Reading the artifact in the round, the pattern is consistent with **a designer who learned the design language and then built the screen in their familiar stack** (React + Tailwind-shaped class composition, then retrofitted with `var(--tek-*)` tokens). They knew the vocabulary, used the vocabulary at the top of the file as a header strip ("look, I know these exist"), then implemented the actual layout in the stack they're fluent in.

This is **the exact failure mode the RAG corpus + the cd→cc handoff are designed to prevent** — by surfacing the tag vocabulary, component primitives list, and target-stack constraints in source materials CD reads. The corpus did its job. The prompt didn't lock it down hard enough.

The two missing rules ("every interactive must be `<tek-*>`" + "every container must `container-type`") would have produced a Round 1 that didn't need this audit.

## Cross-references

- [`audits/prototype/2026-06-01-tek-express-redesign-baseline/report.md`](../../prototype/2026-06-01-tek-express-redesign-baseline/report.md) — the DS-mapping audit CD was supposed to extend with the additions file
- [`rag/sources/tek-express/wireframes/setup-dut-wireframe.md`](../../../rag/sources/tek-express/wireframes/setup-dut-wireframe.md) — structural reference (Plots-absence, Configuration step, inline Setup buttons)
- [`rag/sources/tek-express/walkthroughs/ux-feedback-and-open-questions.md`](../../../rag/sources/tek-express/walkthroughs/ux-feedback-and-open-questions.md) — container-breakpoints commitment (51:56) + Rick's half-screen ask (50:05) + Patterson's horizontal-stretch layout question (51:14)
- [`rag/sources/tek-express/screens/setup-dut.md`](../../../rag/sources/tek-express/screens/setup-dut.md) — the canonical-content reference

## Round 2 recommendations

**P0 — Prompt additions (verbatim to paste into the existing prompt):**
1. *Every interactive element MUST be a `<tek-*>` custom element. Bare `<button>`, `<input>`, `<select>`, `<textarea>`, `<label>` are forbidden. If the needed primitive doesn't exist in the `audits/prototype/2026-06-01-tek-express-redesign-baseline/report.md` additions list, propose it in the `tek-express-redesign-additions.md` you produce — do not fall back to a bare HTML element.*
2. *Every layout container — top nav, wizard rail, form sections, action cluster — MUST declare `container-type: inline-size` and define at least one `@container` rule that re-flows it at half-width and at horizontal-rail (≤ 360px height) sizes. Viewport `@media` queries are forbidden except for `prefers-color-scheme` and `print`.*
3. *The three-artifact contract is mandatory. The HTML alone is incomplete. The companion `tek-express-redesign-additions.md` and `tek-express-setup-dut-notes.md` are part of the deliverable, not optional follow-ups.*

**P1 — Target-stack lock:**
4. *Target stack: vanilla HTML + the `tek-*` custom elements + CSS only. **No React, no bundler runtime, no JSX, no build step.** The artifact must run as a single static HTML file with no script imports other than the `tek-*` element registration. If you produce JSX or bundle a framework, the artifact will be rejected and rebuilt.*

**P2 — Hold the nav-IA question for after Round 2:**
The Setup/Status/Results/Reports + sidebar wizard "disjointed" feeling I gave 5 options for last turn — let's hold that until Round 2 ships. If CD produces a corpus-true Round 2 with the four P0/P1 rules above, the disjointed feeling may be a Round 1 artifact (vanilla buttons + no container query = visual incoherence), not a structural IA problem. Re-evaluate the nav-IA after.

## Open questions

- **"I had it do the plots"** — no `plots*.html` exists in `audits/design-additions/2026-06-02-tek-express-setup-dut/` or in `~/Downloads/`. Was it pasted into the same file, into a separate file we should pull, or is "Plots" the section CD added back into v3 that the grep didn't catch? Round 2 should explicitly answer whether Plots returns as a top-level panel, a Results sub-tab, or is gone.
- **CD's understanding of the additions list** — the 12 tek-* tags showed up exactly once. Did CD interpret the additions audit as a "show one of each" exercise? That's an instruction-following issue worth flagging in the next turn.
