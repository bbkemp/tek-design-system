# CD prompt audit — Tek Express v4 (rr variant)

**Audited:** 2026-06-08
**Source:** [`cd-prompt.md`](./cd-prompt.md) — Bryan's CD-generated prompt for the right-rail layout variant
**Audited against:**
- `rag/sources/tek-express/` corpus (17 screens, 4 walkthroughs, 10 audit chunks, 1 wireframe + render)
- DS-v2 published library (`3wbYstse9TYKlPtCPpZH5X`) — actual variable + style + component namespace
- Five-layer build rule (CHARTER Rule 22, CLAUDE.md Hard Constraint 9, tek-figma-build skill, PreToolUse hook, figma-design-qa)
- v3 audit findings ([`../2026-06-02-tek-express-setup-dut/v3-rag-audit.md`](../2026-06-02-tek-express-setup-dut/v3-rag-audit.md))

---

## TL;DR

**Structurally much better than v3.** CD organized this prompt as styles → components → screens with explicit fidelity checklist — exactly the right shape. **Substantively it re-introduces the paint-not-compose pattern at scale**: invents a parallel token vocabulary instead of referencing the DS-v2 published one, asks CD to **build components that already ship**, and breaks the three-artifact contract again.

Run as-is, this prompt produces v3.html-with-better-paint. Run with the corrections in §"P0 fixes" below, this prompt produces a real DS-v2-consuming Figma file.

| Dimension | Grade | Headline |
|---|---|---|
| Structure | **A** | Styles-first ordering, explicit components, verbatim corpus content, fidelity checklist |
| Library subscription | **F** | File key never mentioned. CD will create local variables/styles, not bind to DS-v2 |
| Component reuse | **F** | Asks CD to *build* tek-button, tek-input, tek-checkbox, tek-radio, tek-toggle, tek-dropdown, tek-modal — all of which **already ship** in DS-v2 |
| Variable specificity | **D** | Hex values + simplified scales instead of DS-v2 token paths |
| Three-artifact contract | **F** | Asks only for the Figma file; no `additions.md`, no `notes.md` |
| Container queries | **F** | Zero mention. The 51:56 commitment is dropped |
| Corpus fidelity (content) | **A-** | Verbatim labels, correct screens, right interactions |
| Wireframe fidelity (IA) | **C** | Reverts to legacy 5-tab nav + right rail. May be deliberate (the "rr" variant test) but should be explicit |

---

## P0 — Critical (must fix before sending to CD)

### 1. File subscription is never named

CD must subscribe to the DS-v2 library (`3wbYstse9TYKlPtCPpZH5X`) before doing *anything*. Otherwise every "Figma variable" CD creates in §0 is **local to the new file** — a parallel system that won't update when DS-v2 ships changes. This is the single biggest failure mode.

**Fix — add to §0 as the FIRST instruction:**

> Before creating any variable or component locally, subscribe to the **Tek Design System v2** library (file key `3wbYstse9TYKlPtCPpZH5X`). Every variable and component referenced below must be **imported from that library** via `importVariableByKeyAsync` / `importComponentByKeyAsync` — not recreated locally. If the library doesn't ship a primitive (e.g. `tek-data-table`, `tek-wizard-stepper`, `tek-plot`), build the missing one as a local component AND list it in the additions audit (see §7).

### 2. Asks CD to build components that already ship

CD's §4 enumerates: `tek-button`, `tek-dropdown`, `tek-input`, `tek-radio`, `tek-checkbox`, `tek-toggle`, `tek-field`, `tek-group-box`, `tek-wizard-stepper`, `tek-data-table`, `tek-status-pill`, `sub-tab bar`, `Options menu`. **Six of these already ship** in DS-v2: Button, Selector (Checkbox + Radio variants), SelectorLabel, Input, Label, Modal, TextLink, Toggle, Footer, CharacterCount.

**Fix — split §4 into two sections:**

```
§4a. Components to INSTANTIATE from DS-v2 (do NOT recreate):
  - tek-button       → import componentSet key 95ac2527f3756a80b85f8f64f980ab3af5a526f0
                       (Type: Primary | Secondary, State: Default | Hover | Inactive)
  - tek-input        → DS-v2 Input
  - tek-checkbox     → DS-v2 Selector (Type=Checkbox)
  - tek-radio        → DS-v2 Selector (Type=Radio)
  - tek-toggle       → DS-v2 Toggle
  - tek-modal        → DS-v2 Modal
  - tek-text-link    → DS-v2 TextLink
  - tek-footer       → DS-v2 Footer
  - tek-character-count → DS-v2 CharacterCount
  - tek-label / tek-selector-label → DS-v2 Label / SelectorLabel

§4b. Components to BUILD locally + flag in additions audit (PROPOSED):
  - tek-dropdown        — until DS-v2 ships it
  - tek-field           — composition pattern, propose as new primitive
  - tek-group-box       — propose as new primitive
  - tek-wizard-stepper  — propose; full anatomy in setup-dut-notes
  - tek-data-table      — propose; spec in additions audit
  - tek-status-pill     — propose
  - tek-tabs            — propose; both vertical (left-nav) and horizontal (sub-tab) variants
  - tek-plot            — propose; chart primitive (charting-library decision is P0 open question)
```

### 3. Colors are hex, not DS-v2 semantic variables

§2's color table is a vocabulary of made-up names mapped to hex. Every entry should be a **DS-v2 semantic color variable reference**.

**Fix — replace §2 Colors table:**

| CD's name | CD's hex | DS-v2 variable (actual path) |
|---|---|---|
| canvas / content bg | `#1e1e1e` | `color/canvas/background/default` |
| chrome bg | `#181818` | `color/canvas/background/raised` (or whichever the semantic alias is) |
| surface | `#252525` | `color/input/background/default` |
| neutral-100 | `#cccccc` | `colors/neutral/200` or `color/text/default` |
| input-text-default | `#979797` | `color/input/text/default` |
| modal-text | `#ffffff` | `color/modal/text/default` |
| border | `#7b7b7b` | `color/input/border/default` |
| border-disabled | `#454545` | `color/input/border/disabled` |
| **Tek Blue** | `#33baea` | `colors/brand/tek-blue` |
| success | `#42b54c` | `colors/status/success` (or whichever exists) |
| warning | `#e0b732` | `colors/status/warning` |
| error | `#e74848` | `colors/status/error` |

Instruct: *"Every fill and stroke must be **bound to the DS-v2 variable via `setBoundVariableForPaint`**, with the hex as the fallback color only. If the closest semantic doesn't match exactly, **defer to the existing semantic** rather than introducing a new one — the four-point build rule applies."*

### 4. Spacing scale is invented, not DS-v2

CD lists "2, 4, 6, 8, 10, 12, 16, 24, 32, 40". DS-v2's actual published primitives (verified in the file): `🏹 spacing/s00=0, s01=1, s02=2, s03=4, s04=6, s05=8, s06=10, s07=12, s08=14, s09=16, s10=20, s11=24, s12=28, s13=32, s14=36, s15=40, s16=44, s17=48, s18=56, s19=64, s20=80, s21=96, …` through s33=320.

**Fix — replace the spacing line in §2:**

> Spacing — use only DS-v2 `🏹 spacing/sNN` primitives, bound via `setBoundVariableForLayoutMode`. Common values: s05=8, s07=12, s09=16, s10=20, s11=24, s13=32, s15=40. Snap to closest: 23 → s11, 13 → s07, 6 → s04. Never raw px.

### 5. Border radius scale is invented

CD lists "inputs/dropdowns 5; checkbox 3; cards/modals 11; pills full". DS-v2 publishes: `📐 borders/radius/{none=0, 01=1, 02=3, 03=5, 04=7, 05=11, 06=13, 07=13, 08=15, 09=17, …, full=9999}`.

**Fix — replace radii line in §2:**

> Radii — bind every `cornerRadius` to a `📐 borders/radius/NN` primitive via `setBoundVariable`. Mapping: `radius/02` (3px) checkboxes; `radius/03` (5px) inputs/dropdowns; `radius/05` (11px) cards/group-boxes/modals; `radius/full` (9999px) pills/buttons.

### 6. Stroke width invented

CD says "default 0.5px solid, buttons 1px". DS-v2 publishes `📐 borders/width/{none=0, 01=0.5, 02=1, 03=1.5, 04=2, 05=3, …, 16=14}`.

**Fix — replace borders line in §2:**

> Strokes — bind every `strokeWeight` to a `📐 borders/width/NN` primitive. Mapping: `width/01` (0.5px) for dividers/borders; `width/02` (1px) for button borders; `width/03` (1.5px) for the wizard-stepper guide/circle.

### 7. Text styles named generically, not DS-v2 paths

CD's `heading-md`, `text-xl`, `mono-sm` etc. are local names. DS-v2 publishes: `text/heading/regular/{2xs..5xl}`, `text/regular/{xs..5xl}`, `text/bold/{xs..5xl}`, `text/mono/{xs..xl}`, `text/light/{lg, …}`.

**Fix — replace §2 Type styles with:**

> Type — apply DS-v2 published text styles via `await node.setTextStyleIdAsync(style.id)`. Search by category (`body`, `heading`, `bold`, `mono`) — NOT `typography`. Mapping:
> - Section/group titles ("Device Profile") → `text/heading/regular/xs`
> - Modal titles → `text/heading/regular/sm`
> - Body text, control labels, table cells → `text/regular/md`
> - Help text, context header → `text/regular/sm`
> - Table headers, status pills → `text/regular/xs`
> - Status bar, build flag, cursor readout → `text/mono/xs`
> - Button labels → `text/bold/xs`
> - DUT-context filename — keep `text/regular/sm` plus a Tek-Blue `*` (compose via two text runs, not a custom style)

**Never set `fontName + fontSize` inline. Every TextNode has a `textStyleId`.**

### 8. The three-artifact contract is broken

CD's §6 is a fidelity checklist for the Figma file alone. The build rule requires **three artifacts**:

1. The Figma file ✓ (CD asks for this)
2. **`tek-express-redesign-additions.md`** ✗ (missing)
3. **`tek-express-setup-dut-notes.md`** ✗ (missing)

**Fix — add §7 to the prompt:**

```
## 7. Companion artifacts (mandatory — not optional)

In addition to the Figma file, produce two markdown documents:

a. `tek-express-rr-additions.md` — for each new component, variant, or
   token proposed (anything in §4b above OR any value that didn't snap
   to a DS-v2 primitive), include: anatomy, states, events, fonts/sizes,
   closest existing primitive, ✓/⚠ confidence flag, rationale.

b. `tek-express-rr-notes.md` — decisions made, deviations from corpus,
   open questions for human review, container-breakpoint rationale (see
   §8), flow-preservation map. This is how the next CD or cc session
   inherits the decisions instead of re-deriving them.

Both files mandatory. The Figma file alone is rejected as incomplete.
```

---

## P1 — Important (re-introduces v3 misses)

### 9. Container queries are entirely absent

CD's prompt mentions resizing once ("it's resizable in the real app but build at this size") but defines no container-breakpoint behavior. Bryan's 51:56 commitment + Patterson's "horizontal one-third height" layout-density question + the wireframe's responsive intent are all dropped.

**Fix — add §8:**

```
## 8. Container queries — first-class

Every layout container (top bar, left nav, content stage, right rail,
status bar, group-boxes within the stage) MUST:
- Declare `container-type: inline-size` and a `container-name`.
- Define at least one `@container` rule that reflows it at:
  - cb-md (default, 995px)
  - cb-sm (half-width docked, ~640-760px) — left nav collapses to icons
    only; right rail moves below content; stage stacks to single column.
  - cb-xs (horizontal rail, ≤600px height) — top bar truncates filename;
    actions wrap.

Define the breakpoint tokens as additions:
  --tek-container-breakpoint-sm: 600px
  --tek-container-breakpoint-md: 760px
  --tek-container-breakpoint-lg: 1200px

Viewport @media is forbidden except for prefers-color-scheme and print.

Deliver three frames per screen (cb-md, cb-sm, cb-xs) OR one frame with
auto-layout that reflows when manually resized — your call, document in
notes.md.
```

### 10. Top nav is the legacy 5-tab, not the wireframe's 4-tab

CD prompt §3: "Setup · Status · Results · Plots · Reports". Per the wireframe ([`rag/sources/tek-express/wireframes/setup-dut-wireframe.md`](../../../rag/sources/tek-express/wireframes/setup-dut-wireframe.md)), **Plots is gone from top-level nav** and folds into Results. Per CD's own v3 behavior, Plots rendered **inline within Results**.

**Two options:**

a. **Match the wireframe + v3** — drop Plots from §3 nav list, merge §5.7 + §5.8 into a single Results screen with Plots rendered inline below the data table. This is the recommended path.

b. **Explicitly call out as a variant test** — keep the 5-tab nav but document in §0: *"This prompt is the 'preserve-legacy-nav + right-rail' variant — a deliberate alternative to the wireframe's 4-tab + inline-plots IA. Compare both before locking the redesign."*

If (a), §5.8 becomes "Results — Plots inline (single screen)". If (b), the prompt should explicitly name this as a variant comparison.

### 11. Plots placement contradicts CD's own v3 behavior

Even if you keep the 5-tab nav (Option b above), CD already concluded — by rendering plots inline in v3 — that plots belong with results. This prompt regresses that decision. **Decide deliberately, don't lose it by silent omission.**

### 12. Asks CD to use Figma's "build the shared components" pattern

CD §0 says "create Figma variables/styles for every token below, and build the shared components in §4". Combined with §1's miss, this guarantees a parallel local-component vocabulary. Even after the P0 fixes split §4 into 4a/4b, this §0 instruction needs to say:

> **Import** DS-v2 variables/styles via `importVariableByKeyAsync` and `importStyleByKeyAsync`. **Instantiate** DS-v2 components via `componentSet.createInstance()`. **Build** only the components in §4b (the ones DS-v2 doesn't yet ship), and flag each one in the additions audit.

---

## P2 — Worth flagging

### 13. Frame size 995×773 vs file's existing 875×773

CD picked 995 (closer to legacy app window). My existing Tek Express Figma file uses 875. Neither is wrong; consistency between artifacts matters. If you're keeping both files, document the size delta in `notes.md`.

### 14. "Lucide for icons" substitution

§4 closing: "DS has no icon set — use Lucide (stroke 1.5)". Reasonable temporary substitution, but should be **flagged in the additions audit** as a candidate for a Tek-branded icon set. Per the build rule, icon-set adoption is its own design decision.

### 15. Theme toggle in status bar

§3 mentions "right = a 🌚/🌝 dark/light theme toggle". Not in the corpus. Likely a CD invention. Either confirm it as a deliberate addition (and add to additions audit) or remove it.

### 16. Wireframe-specific patterns dropped

The wireframe documents several deltas that this prompt omits:

- **Inline `[Setup]` buttons next to the field they configure** — wireframe shows Burst Detection Method having an inline `[Setup]` button. CD prompt §5.1 has this. ✓
- **`User Defined Acquisition` as a toggle, not a checkbox** — CD prompt §5.1 calls for a toggle. ✓
- **Title-bar test-context** (`TekExpress DDR Tx - (Untitled)*`) — CD prompt §3 has this. ✓
- **Wizard `Configuration` step (the NEW 5th step)** — wireframe inserts between Acquisitions and Preferences. CD prompt §5.4 names it Configuration. ✓

These are all retained. Good.

### 17. Missing screens / overlays from corpus

CD prompt doesn't include:
- **Comments modal** (we built this — popup over Setup › DUT)
- **Email Settings dialog** (referenced from §5.5 but not specced)
- **Running-Test minimized window** (the half-screen state Rick Kuhlman asked for)
- **Session Browser** / Open Recent submenu
- **Configure dialog** (per-test parameters from Test Selection)

Likely out of scope for this pass — but call them out explicitly in `notes.md` as "future passes" so the next CD session knows where to pick up.

### 18. Status pill style for "To be started"

CD §5.6 specifies "status pill 'To be started' (neutral dot)". Good. But the **per-status mapping** should be tied to DS-v2 semantic colors: neutral dot = `colors/neutral/300`; pass dot = `colors/status/success`; fail = `colors/status/error`; in-progress = `colors/brand/tek-blue`. Add this mapping to §4b under tek-status-pill spec.

### 19. Charts are noted out of scope

§5.8 closing: "Charts are otherwise out of DS scope — this is a styled representation." This punts the chart-library decision Rick Kuhlman raised at 55:23 in the walkthrough. Worth noting in `notes.md` that the chart-library decision is **still P0 open** and any "styled representation" here is a placeholder.

---

## What CD got right (don't regress these in v2)

1. **§0 styles-first ordering** — exactly correct, just needs the library-subscription preamble.
2. **§6 fidelity checklist** — the right shape; just needs to reference DS-v2 paths instead of generic principles.
3. **Verbatim corpus content per screen** in §5 — pulled from the right places, accurate.
4. **Component variants enumerated** with states — exactly the right level of detail.
5. **"Tek Blue used sparingly (accent only, never a surface fill except active-nav tint and primary/solid buttons)"** — perfect anti-paint guidance.
6. **Stepper detail**: "Make the circle border, the check-icon stroke, and the guide lines all the same 1.5px weight" — exactly the kind of structural-fidelity instruction the v3 prompt was missing.

---

## Apply the fixes — handoff

A corrected v2 of the prompt is at [`cd-prompt.v2.md`](./cd-prompt.v2.md) — drop that into CD instead of the original. It folds in all P0 + P1 fixes and explicitly references DS-v2 paths throughout. The corpus references remain the same; the only changes are in §0–4 (binding rules) and the addition of §7 (artifacts) and §8 (container queries).

---

## Cross-references

- [v3 audit](../2026-06-02-tek-express-setup-dut/v3-rag-audit.md) — original paint-not-compose failure mode
- [PR #68 retrofit comment](https://github.com/bbkemp/tek-design-system/pull/68#issuecomment-4650278669) — what binding "looks right" in practice (2,700 bindings across 3 pages)
- [`tek-figma-build` skill](../../../.claude/skills/tek-figma-build/SKILL.md) — the four-point rule in detail
- [Redesign baseline](../../prototype/2026-06-01-tek-express-redesign-baseline/report.md) — DS-mapping audit for every component
- [Wireframe](../../../rag/sources/tek-express/wireframes/setup-dut-wireframe.md) — structural reference, IA deltas
