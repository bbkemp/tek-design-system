# CD prompt — AI-team configuration GUI alts on the Tek Design System (self-contained)

**Date:** 2026-07-07 · **Requested by:** Richard Patterson · **Target:** pre-release configuration GUI from the AI team · **Review:** Tek Design System team (Bryan Kemp)

> ## How to use this (for Richard)
>
> **What to attach, all in your first message** — this prompt is built so Claude Design never has to guess or fetch anything:
>
> 1. **Your wireframes and/or screenshots** of the configuration GUI — every screen and state you have — plus a one-paragraph description of what the software does.
> 2. **The Tek DS kit** (Bryan sends these files with this prompt):
>    - `tek.complete.css` — the real, generated design-token stylesheet. This is the canonical token source.
>    - `tek-express.html`, `bench.html`, `my-tek.html` — the three reference prototypes as self-contained files. These are the visual ground truth.
>    - Three screenshots of those prototypes (quick visual anchor before the model reads the source).
>
> **Driving Claude Design** (the lessons we learned the hard way):
> - Approve the checkpoints. The prompt forces Claude to stop twice (inventory, then one format-lock screen) before building everything. Reply with corrections or "OK" — don't skip these; they're where bad rounds get caught cheap.
> - **Iterate, never restart.** Ask for fixes as edits to the existing artifact ("change X on the Network screen"). If Claude proposes rebuilding from scratch, say no.
> - One change (or one screen) per message. Small asks produce good output; "fix everything" produces regressions.
> - When it's done, download the HTML artifact and the two markdown artifacts and send all three to Bryan's team — the markdown files are how the review happens, not optional extras.
>
> **One check before you upload:** this is pre-release material — confirm with Bryan which Claude account/workspace is appropriate for it before attaching anything.

---

# Build 2–3 design alternates of a configuration GUI on the Tek Design System

You are redesigning a **pre-release configuration GUI** (wireframes/screenshots attached) as **2–3 distinct design alternates ("alts")**, each built on the **Tek Design System v2 (DS-v2)** — Tektronix's token-driven, framework-agnostic design system. Everything you need is attached or embedded in this prompt: the token stylesheet, three reference prototypes, and the full system context in §2. Do not invent anything the attachments can answer.

## §0 Mission

1. **Read the attachments first.** Inventory every screen, control, field, option, and label from the wireframes/screenshots before designing anything. Read the three attached reference prototypes (§3) before making any visual decision.
2. **Follow the working protocol in §4** — two checkpoints before full build-out. Do not build all alts in one pass.
3. **Produce 2–3 alts** in a single self-contained HTML artifact with an alt switcher (§5). Alts may differ in **layout, information architecture, grouping, and navigation** — they may NOT differ in token discipline, typography, or component vocabulary. Every alt is 100% Tek DS.
4. **Bind every visual value to a DS token**: `var(--tek-*, <fallback>)` for every color, font family, font size, line height, spacing, border width, and border radius. The attached `tek.complete.css` is the canonical source (§1.1). No raw hex, no raw px.
5. **Deliver the three-artifact contract** (§5): the HTML artifact, `cd-notes.md`, `cd-additions.md`.

### How to read the source material — screenshots vs wireframes

- **Screenshots of a real, styled GUI** define both content and layout intent. Preserve labels, values, units, and control inventory verbatim.
- **Wireframes** define **structure and the control inventory only** — which screens exist, which settings live where, what type of control each one is. The *visual design* (surfaces, type, spacing, states, chrome) comes 100% from the design system and the reference prototypes, never from the wireframe's boxes and greys. Do not reproduce wireframe aesthetics.
- Wireframe labels are canonical **unless obviously placeholder** ("Setting 1", "Lorem", "TBD"). Never ship placeholder text: flag each one in `cd-notes.md` and substitute a clearly-marked provisional label (e.g. `Model endpoint ⚠︎`).
- Either way: do not invent, drop, or **rename** settings. Regrouping and reordering them is exactly what alts are for; renaming them is not.

## §1 Hard constraints — do not violate

These rules hold the design system together. Violating any of them produces exactly the drift the system exists to prevent.

### 1.1 Tokens always — the attached stylesheet is canon

Every color, font property, spacing value, border width, and radius resolves to `var(--tek-*, <fallback>)`. The attached **`tek.complete.css`** is the generated, canonical token sheet: **copy its sections 1 and 2 (primitives + semantic dark defaults) verbatim into a `<style>` block in the artifact** — do not retype tokens by hand, do not include section 3 (the OS light-mode override; this round is dark-only). The tables in §2 are the same data in readable form — use them to *choose* tokens; use the CSS file to *define* them. If no token fits a value you need, bind to the **closest** one and log the gap in `cd-additions.md` — never leave a value un-tokenized, and never invent a new `--tek-*` name without flagging it.

### 1.2 Components, not shapes — use what exists; invent only on the rails

The governing rule, in one line: **if the design system has it, use it — every time. If it doesn't, you may create something new, but it must be built *from* the system (its tokens, its type, its patterns) and flagged as a proposal — never a one-off that ignores the rails.** A new component should look like it was always part of DS-v2, waiting to be shipped.

Concretely, interactive elements are **`tek-*` Web Components**, never bare styled HTML:

- If DS-v2 ships the component (§2.7 shipped list), instantiate it — express it as that custom element (`<tek-button>`, `<tek-input>`, …) styled per its documented states. Never paint a `<button>` or `<input>` that mimics one.
- If the element you need is one of the **proposed primitives** (§2.8), keep the `tek-*` custom-element name and style its internals with tokens — that's the bridge pattern until the real primitive ships. The attached `tek-express.html` demonstrates this pattern throughout; copy its approach.
- If the element is genuinely new (not in either list), name it `tek-<something>`, build it token-bound, and add a full entry to `cd-additions.md` (anatomy, states, closest existing primitive, rationale, ✓/⚠ confidence flag).

### 1.3 Typography is fixed

Three families only, loaded from Google Fonts:

- **Archivo** (width 120, weight 600) — display: headings, section titles, button labels.
- **Geist** (weight 400) — body: labels, controls, help text, table cells.
- **Geist Mono** — anything numeric, columnar, status-line, or code-like (values, readouts, IDs, log lines), with tabular figures.

No other typeface, no raw `font-family`/`font-size` declarations — bind to the §2.2 tokens.

### 1.4 Dark canvas is the default

The system is dark-mode-first: `#1e1e1e` canvas, raised `#181818` chrome, `#252525` input surfaces, hairline `0.5px` dividers. Build the alts dark, even if the wireframes are white — wireframe lightness is not a design decision (§0). Do not include a light mode this round.

### 1.5 Tek Blue is an accent, not a surface

`#33baea` appears **sparingly**: focus rings, active-state indicators, primary-button borders, text links, small active tints (~12%). It is never a large surface fill.

### 1.6 Alts are honest alternatives

Each alt should make a real, distinct IA/layout argument (e.g. one conservative single-page form, one grouped/tabbed, one wizard/guided) — not the same layout with different colors. State each alt's thesis in one sentence at the top of `cd-notes.md`. What must NOT vary across alts: tokens, type, component vocabulary, dark canvas, the set of settings and their names.

### 1.7 Plain HTML — no framework, no build step

The artifact is **plain HTML/CSS/JS in a single file**: no React, no JSX, no bundler, no imports beyond the Google Fonts links. `tek-*` elements are plain custom-element tags styled by CSS targeting the element name (the attached prototypes show exactly this). This is required for the Tek review-and-drop pipeline.

### 1.8 This is a visual prototype, not the product

Light interactivity only, where it demonstrates the design: the alt switcher, tab/section switching, dropdown open/close, toggle flips. No real configuration logic, no persistence, no network calls.

## §2 The Tek Design System — full embedded context

This is the complete DS-v2 surface, mirroring the attached `tek.complete.css`. CSS custom properties follow the pattern `--tek-<category>-<path>`, e.g. `colors.neutral.800` → `--tek-colors-neutral-800`, `spacing.s05` → `--tek-spacing-s05`, `borders.radius.03` → `--tek-borders-radius-03`.

### 2.1 Color primitives

| Token | Value | Notes |
|---|---|---|
| `--tek-colors-brand-tek-blue` | `#33baea` | THE brand accent (§1.5) |
| `--tek-colors-neutral-100` | `#cccccc` | primary text |
| `--tek-colors-neutral-200` | `#afafaf` | |
| `--tek-colors-neutral-300` | `#979797` | secondary/muted text |
| `--tek-colors-neutral-400` | `#7b7b7b` | default borders |
| `--tek-colors-neutral-450` | `#646464` | |
| `--tek-colors-neutral-500` | `#454545` | disabled |
| `--tek-colors-neutral-600` | `#333333` | |
| `--tek-colors-neutral-700` | `#252525` | input/surface tier |
| `--tek-colors-neutral-800` | `#1e1e1e` | canvas |
| `--tek-colors-neutral-900` | `#181818` | raised chrome tier |
| `--tek-colors-neutral-black` | `#000000` | |
| `--tek-colors-neutral-white` | `#ffffff` | headings, focus text |
| `--tek-colors-ui-error-red` | `#e74848` | error / stop / fail |
| `--tek-colors-ui-success-green` | `#42b54c` | success / start / pass |
| `--tek-colors-ui-warning-yellow` | `#e0b732` | warning |
| `--tek-colors-ui-shadow` | `#00000033` | modal shadow |
| `--tek-colors-ui-backdrop-dark` | `#181818cc` | modal backdrop |
| Channel colors `--tek-colors-brand-ch-1…8` | `#fff53b` `#20cfd3` `#ea2d56` `#7ac323` `#fb8b28` `#343d88` `#df4592` `#0bb984` | instrument channel/data-series palette (use for charts/traces only) |

### 2.2 Typography tokens

Families: `--tek-fonts-family-archivo: Archivo` · `--tek-fonts-family-geist: Geist` · `--tek-fonts-family-mono: Geist Mono`

**Heading scale** (Archivo 600, wdth 120) — `--tek-fonts-heading-size-*` / `--tek-fonts-heading-line-height-*`:

| Step | Size / line-height |
|---|---|
| 2xs | 14 / 22 |
| xs | 16 / 24 |
| sm | 20 / 26 |
| md | 24 / 32 |
| lg | 32 / 40 |
| xl | 40 / 48 |
| 2xl | 48 / 56 |
| 3xl | 56 / 56 |
| 4xl | 64 / 64 |
| 5xl | 72 / 72 |

**Text scale** (Geist 400; Geist Mono for numeric) — `--tek-fonts-text-size-*` / `--tek-fonts-text-line-height-*`:

| Step | Size / line-height | Typical use |
|---|---|---|
| xs | 10 / 12 | table headers, status pills |
| sm | 12 / 12 | help text, status bar (mono) |
| md | 13 / 16 | body, table cells |
| lg | 14 / 20 | control labels, buttons |
| xl | 16 / 24 | field labels |
| 2xl | 20 / 32 | |
| 3xl | 24 / 32 | |
| 4xl | 32 / 40 | |
| 5xl | 40 / 48 | large readouts (mono) |

Snap rule: pick the closest step to the source glyph size — never introduce an intermediate raw size.

### 2.3 Spacing scale

`--tek-spacing-sNN`: s00=0, s01=1, s02=2, s03=4, s04=6, **s05=8**, s06=10, **s07=12**, s08=14, **s09=16**, s10=20, **s11=24**, s12=28, **s13=32**, s14=36, s15=40, s16=44, s17=48, s18=56, s19=64, s20=80, s21=96, s22=112, s23=128 … s33=320 (px).

Container widths `--tek-spacing-c01…c10`: 360, 384, 512, 640, 768, 1024, 1280, 1440, 1536, 1792.

Common idioms: s05 label→control gap · s07 action-block gap · s09 default padding/field gap · s10 rail padding · s11 large gap · s13 section gap. Snap rule: ±3px to the nearest step (23→s11, 13→s07, 6→s04).

### 2.4 Border widths

`--tek-borders-width-NN`: none=0, **01=0.5** (hairline dividers, default borders), **02=1** (button/input borders), **03=1.5** (stepper circles, emphasis strokes), 04=2, 05=3 … 16=14 (px).

### 2.5 Border radii

`--tek-borders-radius-NN`: none=0, 01=1, **02=3** (checkboxes), **03=5** (inputs, dropdowns), 04=7, **05=11** (cards, group-boxes, modals, table containers), 06=13, 08=15 … 16=57, **full=9999** (pills, buttons).

### 2.6 Semantic color tokens (dark values)

| Token | Value |
|---|---|
| `--tek-color-canvas-background-default` | `#1e1e1e` |
| `--tek-color-button-background-default` / `-hover` / `-inactive` | `#1e1e1e` / `#000000` / `#181818` |
| `--tek-color-button-border-default` / `-hover` / `-inactive` | `#33baea` / `#33baea` / `#454545` |
| `--tek-color-button-text-default` / `-hover` / `-inactive` | `#cccccc` / `#ffffff` / `#454545` |
| `--tek-color-input-background-default` | `#252525` |
| `--tek-color-input-border-default` / `-focus` / `-filled` / `-disabled` / `-error` | `#7b7b7b` / `#ffffff` / `#afafaf` / `#454545` / `#e74848` |
| `--tek-color-input-text-default` / `-focus` / `-filled` / `-disabled` / `-error` | `#979797` / `#ffffff` / `#cccccc` / `#454545` / `#ffffff` |
| `--tek-color-input-label-default` / `--tek-color-input-helper-default` | `#cccccc` / `#979797` |
| `--tek-color-input-character-count-default` / `-focus` / `-filled` / `-error` / `-warning` | `#cccccc` / `#ffffff` / `#afafaf` / `#e74848` / `#e0b732` |
| `--tek-color-selector-background-default` / `-unchecked` / `-checked` | `#252525` / `#454545` / `#cccccc` |
| `--tek-color-selector-border-unchecked` / `-checked` / `-error` | `#7b7b7b` / `#979797` / `#e74848` |
| `--tek-color-selector-label-unchecked` / `-checked` / `-error` | `#cccccc` / `#ffffff` / `#ffffff` |
| `--tek-color-modal-background-default` (backdrop) / `-border-default` / `-text-default` / `-shadow-default` | `#181818cc` / `#7b7b7b` / `#ffffff` / `#00000033` |
| `--tek-color-footer-background-default` / `--tek-color-footer-text-default` | `#252525` / `#cccccc` |
| `--tek-color-text-link-default` | `#33baea` |
| `--tek-color-icons-default` | `#ffffff` |

Status colors have no standalone semantic aliases yet — the established prototype convention is `--tek-color-error` / `--tek-color-success` / `--tek-color-warning` aliased to the `--tek-colors-ui-*` primitives; use that convention and it will match the reference prototypes.

### 2.7 Shipped components — instantiate, never rebuild

DS-v2 ships these 12 Web Components (`@bbkemp/ui`): **`tek-button`** (Primary/Secondary; Default/Hover/Inactive — states per the button tokens above, pill radius, Archivo label), **`tek-input`** (text field with label/helper/error, radius-03, full state set per input tokens), **`tek-checkbox`**, **`tek-radio`**, **`tek-toggle`**, **`tek-selector`** / **`tek-selector-label`** (segmented one-of-N), **`tek-modal`** (backdrop + card, radius-05, shadow), **`tek-label`**, **`tek-text-link`** (Tek Blue), **`tek-character-count`**, **`tek-footer`**.

### 2.8 Proposed primitives — the bridge pattern

These are documented, reviewed proposals that don't ship yet. Use the custom-element name, style internals with tokens: `tek-field` (label + control + helper composition), `tek-dropdown` (input-look closed control + chevron + menu), `tek-tabs` (vertical left-accent nav; horizontal pill group), `tek-wizard-stepper`, `tek-group-box` (titled section: hairline border, radius-05, Archivo xs legend), `tek-status-bar`, `tek-status-pill` (hairline tone-colored border, mono xs, optional dot), `tek-data-table` (surface header row, hairline dividers, radius-05 container), `tek-empty-state`.

Icons: the DS has no icon set yet. Use **Lucide** (stroke 1.5) sparingly and note it in `cd-additions.md`.

### 2.9 Layout & responsiveness (nice-to-have this round)

If you add responsive behavior, it is **container-level, not viewport-level**: `container-type: inline-size` + `@container` rules. Viewport `@media` is forbidden except `prefers-color-scheme` and `print`. A fixed-width desktop layout with no responsiveness is acceptable for this round — don't spend effort here at the cost of the core screens.

## §3 Reference prototypes — the visual ground truth

You have no access to the Figma library or the component packages, so the three **attached** prototype files are **the canonical visual representation of the Tek Design System** for this task. What the system *looks like* — surfaces, type, density, states, chrome — is defined by these, not by your interpretation of the token tables in §2. §2 gives you the vocabulary; these give you the look. When a visual judgment call comes up (how heavy a border reads, how a hover feels, how dense a form should be), resolve it by matching what these prototypes do.

**Read all three attached files — markup and CSS, not just a glance — before designing anything:**

1. **`tek-express.html`** (also live at https://bbkemp.github.io/tek-design-system/prototypes/tek-express/) — desktop test-automation app: title bar / side-nav / wizard / form panel / status bar. The closest analog to a configuration GUI; treat its form idioms (fields, dropdowns, group-boxes, toggles) and its bridge-pattern `tek-*` styling as canonical.
2. **`bench.html`** (live at https://bbkemp.github.io/tek-design-system/prototypes/bench/) — interactive bench prototype: denser instrument-style chrome, status pills, data displays.
3. **`my-tek.html`** (live at https://bbkemp.github.io/tek-design-system/prototypes/my-tek/) — asset-hub web app: cards, tables, and navigation at web-app density.

If you are able to fetch URLs, you may also open the live versions and the repo (https://github.com/bbkemp/tek-design-system) for extra context — but the attachments are sufficient and authoritative. **In your Checkpoint-0 reply (§4), state explicitly which attachments you received and read, and whether you could additionally load the live URLs — no pretending.**

The test for your alts: set them next to these three and they should read as siblings from the same product family. If an alt looks right against §2's tables but wrong against these prototypes, the prototypes win — fix the alt.

## §4 Working protocol — two checkpoints before full build

Do not build everything in one pass. This sequence is mandatory:

**Checkpoint 0 — inventory and theses (no design yet).** Reply with:
1. Your extracted inventory from the wireframes/screenshots: every screen, and per screen every setting/control with its type (text field, dropdown, toggle, …). Mark any label you believe is placeholder (§0).
2. A one-sentence thesis per proposed alt (2–3).
3. Your source report: which attachments you received and read, and whether the live URLs loaded (§3).

**Wait for approval.** The reviewer will correct the inventory and pick/adjust the theses.

**Checkpoint 1 — format lock.** Build **one screen of one alt only** — the most representative screen — fully finished: tokens bound, components instantiated, states working. This sets the quality bar and catches drift while it's cheap to fix. **Wait for approval.**

**Full build.** Expand to the remaining screens and alts, matching the approved format-lock screen. Deliver per §5.

## §5 Three-artifact contract — the deliverable

1. **One self-contained HTML artifact** containing all alts, with an **alt switcher** in a small dev/Tweaks panel (plain HTML per §1.7; token `:root` copied from the attached `tek.complete.css` per §1.1; Google Fonts links for Archivo/Geist/Geist Mono; no other external dependencies).
2. **`cd-notes.md`** — produce as a **separate markdown artifact** named exactly `cd-notes.md`: per alt, its one-sentence thesis, what you kept/changed from the source and why, which wireframe/screenshot each screen maps to, which tokens you bound where, every placeholder label you flagged, anything ambiguous you had to interpret, open questions for the DS team.
3. **`cd-additions.md`** — a **separate markdown artifact** named exactly `cd-additions.md`: every gap — each proposed component or token you needed that isn't in §2, with anatomy, states, closest existing primitive, rationale, and a ✓/⚠ confidence flag. If empty, write `none` — the file is the contract. This file is what the Tek Design System team reviews first.

**Also surface the additions audit inside the artifact itself:** in the dev/Tweaks panel (alongside the alt switcher), include a visible "Proposed additions" list — every new component and token from `cd-additions.md`, one line each with its ✓/⚠ flag. A reviewer opens the prototype and sees at a glance exactly what the design is asking the system to absorb, without digging through source.

## §6 Verification checklist — run before declaring done

- [ ] Checkpoint 0 and Checkpoint 1 both happened and were approved before full build
- [ ] Every screen/setting from the source inventory is represented in every alt; nothing invented, dropped, or renamed (regrouping/reordering is fine)
- [ ] No placeholder text shipped — every flagged label is in `cd-notes.md` with a marked provisional substitute
- [ ] The token `:root` is copied verbatim from the attached `tek.complete.css` (sections 1–2, dark only)
- [ ] Every color resolves to `var(--tek-color*-…, fallback)` — including hover/active/disabled/focus on every interactive element
- [ ] Every font family/size/line-height resolves to a `var(--tek-fonts-…)` token; Archivo headings/buttons, Geist body, Geist Mono numerics; no other family anywhere
- [ ] Every spacing, border width, and radius resolves to its `var(--tek-…)` token; no raw px outside fallbacks
- [ ] Interactive elements are `tek-*` custom elements (shipped §2.7 or bridge §2.8), not bare styled HTML
- [ ] Plain HTML/CSS/JS single file — no React, no build step, no external dependencies beyond Google Fonts
- [ ] Dark canvas tiering: 900 chrome / 800 canvas / 700 surfaces; hairline 0.5px dividers; Tek Blue as accent only
- [ ] Set next to the three reference prototypes, each alt reads as a sibling (§3 — the prototypes win any conflict)
- [ ] 2–3 alts, each with a distinct stated thesis; alt switcher works
- [ ] Dev/Tweaks panel shows the "Proposed additions" list matching `cd-additions.md`
- [ ] `cd-notes.md` + `cd-additions.md` delivered as separate markdown artifacts

## §7 What success looks like

Someone who sketched the original wireframes opens any alt and finds every setting they specified, unchanged in meaning — while a Tek designer sees only Tek: Archivo/Geist type, DS colors on every surface and state, DS radii and spacing, everything traceable to a `--tek-*` token. The alts disagree with each other about layout and IA in interesting, reviewable ways, and `cd-additions.md` hands the DS team a clean, honest list of exactly what the system would need to absorb this product for real.

---

## Provenance (repo-side, not part of the paste)

Structure reuses the hard-constraint / three-artifact pattern of the [2026-06-26 TekExpress token-refresh brief](../2026-06-26-tek-express-token-refresh/cd-prompt.md) and the [2026-06-30 GDM9061 reskin brief](../2026-06-30-gw-gdm9061-reskin/cd-prompt.md), with the full DS-v2 context embedded inline because the recipient has no Claude Design team access, no repo access, and no Figma library subscription.

Post-scrutiny revision (2026-07-07): the GDM9061 ("Dragon Storm") round outsourced its ground truth to GitHub links and produced nothing landable, so this prompt delivers ground truth **by attachment** — `packages/tokens/dist/tek.complete.css` plus the three prototype `index.html` files travel with the prompt; live URLs are secondary and CD must report what it actually loaded (§3/§4). Added: wireframe-vs-screenshot input modes (§0), a two-checkpoint working protocol (§4), plain-HTML/no-React requirement (§1.7), copy-the-CSS-verbatim rule (§1.1), and a Claude-Design driving guide in the recipient preamble. **Attachment kit for the sender:** `packages/tokens/dist/tek.complete.css`, `prototypes/tek-express/index.html` (76 KB), `prototypes/bench/index.html` (416 KB), `prototypes/my-tek/index.html` (2.2 MB — if upload limits bite, this is the one to replace with screenshots), plus a screenshot of each. Token values snapshot: `@bbkemp/tokens` at `main` @ 17f9b9d. If tokens change, re-send the regenerated CSS rather than hand-editing.
