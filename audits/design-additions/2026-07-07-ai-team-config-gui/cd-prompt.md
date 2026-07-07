# CD prompt — AI-team configuration GUI alts on the Tek Design System (self-contained)

**Date:** 2026-07-07 · **Requested by:** Richard Patterson · **Target:** pre-release configuration GUI from the AI team · **Review:** Tek Design System team (Bryan Kemp)

> **How to use this (for Richard):** Paste everything below the divider into Claude Design as your first message, **along with screenshots of the current configuration GUI** (every screen/state you have) and a one-paragraph description of what the software does. The prompt is fully self-contained — the entire Tek Design System (tokens, type scale, colors, components, rules) is embedded, so Claude Design needs no library access, no repo access, and no package installs. When the alts come back, send them to Bryan's team for review **together with the two markdown files the prompt requires** (`cd-notes.md`, `cd-additions.md`) — those files are how the review happens.

---

# Build 2–3 design alternates of a configuration GUI on the Tek Design System

You are redesigning a **pre-release configuration GUI** (screenshots attached) as **2–3 distinct design alternates ("alts")**, each built on the **Tek Design System v2 (DS-v2)** — Tektronix's token-driven, framework-agnostic design system. The full design system is embedded in this prompt (§2). Live reference implementations are linked in §3.

## §0 Mission

1. **Read the attached screenshots first.** They are the source of truth for what the GUI contains: every screen, control, label, field, and value. Inventory them before designing anything.
2. **Produce 2–3 alts** as self-contained HTML prototypes. Alts may differ in **layout, information architecture, grouping, and navigation** — they may NOT differ in token discipline, typography, or component vocabulary. Every alt is 100% Tek DS.
3. **Bind every visual value to a DS token**: `var(--tek-*, <fallback>)` for every color, font family, font size, line height, spacing, border width, and border radius. The token vocabulary is in §2. No raw hex, no raw px (fallbacks inside `var()` are the only place raw values appear).
4. **Preserve the GUI's content verbatim.** Every setting name, option, value, unit, and label comes from the screenshots. Do not invent, rename, "improve," or drop settings. If a label is ambiguous in the screenshot, flag it in `cd-notes.md` — don't guess silently.
5. **Deliver the three-artifact contract** (§4): one HTML file per alt, plus `cd-notes.md` and `cd-additions.md`.

## §1 Hard constraints — do not violate

These rules hold the design system together. Violating any of them produces exactly the drift the system exists to prevent.

### 1.1 Tokens always

Every color, font property, spacing value, border width, and radius resolves to `var(--tek-*, <fallback>)` using the vocabulary in §2. If no token fits, bind to the **closest** one and log the gap in `cd-additions.md` — never leave a value un-tokenized, and never invent a new `--tek-*` name without flagging it. Include the token definitions from §2 as a `:root` block in each HTML file so the prototypes render standalone.

### 1.2 Components, not shapes

Interactive elements are **`tek-*` Web Components**, never bare styled HTML:

- If DS-v2 ships the component (§2.7 shipped list), instantiate it — express it as that custom element (`<tek-button>`, `<tek-input>`, …) styled per its documented states. Never paint a `<button>` or `<input>` that mimics one.
- If the element you need is one of the **proposed primitives** (§2.8), keep the `tek-*` custom-element name and style its internals with tokens — that's the bridge pattern until the real primitive ships.
- If the element is genuinely new (not in either list), name it `tek-<something>`, build it token-bound, and add a full entry to `cd-additions.md` (anatomy, states, closest existing primitive, rationale, ✓/⚠ confidence flag).

### 1.3 Typography is fixed

Three families only, loaded from Google Fonts:

- **Archivo** (width 120, weight 600) — display: headings, section titles, button labels.
- **Geist** (weight 400) — body: labels, controls, help text, table cells.
- **Geist Mono** — anything numeric, columnar, status-line, or code-like (values, readouts, IDs, log lines), with tabular figures.

No other typeface, no raw `font-family`/`font-size` declarations — bind to the §2.2 tokens.

### 1.4 Dark canvas is the default

The system is dark-mode-first: `#1e1e1e` canvas, raised `#181818` chrome, `#252525` input surfaces, hairline `0.5px` dividers. Build the alts dark. (A light mode exists as a token-override layer; do not design for it in this round.)

### 1.5 Tek Blue is an accent, not a surface

`#33baea` appears **sparingly**: focus rings, active-state indicators, primary-button borders, text links, small active tints (~12%). It is never a large surface fill.

### 1.6 Alts are honest alternatives

Each alt should make a real, distinct IA/layout argument (e.g. one conservative single-page form, one grouped/tabbed, one wizard/guided) — not the same layout with different colors. State each alt's thesis in one sentence at the top of `cd-notes.md`. What must NOT vary across alts: tokens, type, component vocabulary, dark canvas, content.

### 1.7 This is a visual prototype, not the product

Light interactivity only where it demonstrates the design (tab switching, dropdown open/close, toggle flips, an alt-switcher if you build all alts into one file). No real configuration logic, no persistence, no network calls.

## §2 The Tek Design System — full embedded context

This is the complete DS-v2 surface. CSS custom properties follow the pattern `--tek-<category>-<path>`, e.g. `colors.neutral.800` → `--tek-colors-neutral-800`, `spacing.s05` → `--tek-spacing-s05`, `borders.radius.03` → `--tek-borders-radius-03`.

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

### 2.9 Layout & responsiveness

Responsiveness is **container-level, not viewport-level**: use `container-type: inline-size` + `@container` rules. Viewport `@media` is forbidden except `prefers-color-scheme` and `print`.

## §3 Reference implementations — study before designing

Three live prototypes built on this exact system. Open them, interact, and **view source** — they demonstrate the token-binding pattern (`var(--tek-*, fallback)`), the bridge-pattern primitives, and the dark surface tiering you're expected to match:

1. **TekExpress** — https://bbkemp.github.io/tek-design-system/prototypes/tek-express/ — desktop test-automation app: title bar / side-nav / wizard / form panel / status bar. The closest analog to a configuration GUI; treat its form idioms (fields, dropdowns, group-boxes, toggles) as canonical.
2. **Tek Bench** — https://bbkemp.github.io/tek-design-system/prototypes/bench/ — interactive bench prototype: denser instrument-style chrome, status pills, data displays.
3. **my.tek** — https://bbkemp.github.io/tek-design-system/prototypes/my-tek/ — asset-hub web app: cards, tables, and navigation at web-app density.

The test for your alts: set them next to these three and they should read as siblings from the same product family.

## §4 Three-artifact contract — the deliverable

1. **One HTML file per alt** (or one file with an alt switcher in a small dev/Tweaks panel — your call, document it). Self-contained: token `:root` block inlined, Google Fonts for Archivo/Geist/Geist Mono, no other external dependencies.
2. **`cd-notes.md`** — per alt: its one-sentence thesis, what you kept/changed from the source GUI and why, which screenshots each screen maps to, which tokens you bound where, anything ambiguous in the source you had to interpret, open questions for the DS team.
3. **`cd-additions.md`** — every gap: each proposed component or token you needed that isn't in §2, with anatomy, states, closest existing primitive, rationale, and a ✓/⚠ confidence flag. If empty, write `none` — the file is the contract. This file is what the Tek Design System team reviews first.

## §5 Verification checklist — run before declaring done

- [ ] Every screen/state from the source screenshots is represented in every alt; no settings invented, renamed, or dropped
- [ ] All labels/values/units match the screenshots verbatim
- [ ] Every color resolves to `var(--tek-color*-…, fallback)` — including hover/active/disabled/focus on every interactive element
- [ ] Every font family/size/line-height resolves to a `var(--tek-fonts-…)` token; Archivo headings/buttons, Geist body, Geist Mono numerics; no other family anywhere
- [ ] Every spacing, border width, and radius resolves to its `var(--tek-…)` token; no raw px outside fallbacks
- [ ] Interactive elements are `tek-*` custom elements (shipped §2.7 or bridge §2.8), not bare styled HTML
- [ ] Dark canvas tiering: 900 chrome / 800 canvas / 700 surfaces; hairline 0.5px dividers; Tek Blue as accent only
- [ ] Any responsive behavior uses `@container`, not viewport `@media`
- [ ] 2–3 alts, each with a distinct stated thesis
- [ ] `cd-notes.md` + `cd-additions.md` written

## §6 What success looks like

Someone who uses the current configuration GUI opens any alt and finds every setting they know, unchanged in meaning — while a Tek designer sees only Tek: Archivo/Geist type, DS colors on every surface and state, DS radii and spacing, everything traceable to a `--tek-*` token. The alts disagree with each other about layout and IA in interesting, reviewable ways, and `cd-additions.md` hands the DS team a clean, honest list of exactly what the system would need to absorb this product for real.

---

## Provenance (repo-side, not part of the paste)

Structure reuses the hard-constraint / three-artifact pattern of the [2026-06-26 TekExpress token-refresh brief](../2026-06-26-tek-express-token-refresh/cd-prompt.md) and the [2026-06-30 GDM9061 reskin brief](../2026-06-30-gw-gdm9061-reskin/cd-prompt.md), with the full DS-v2 context embedded inline (à la the original 2026-06 CD onboarding) because the recipient has no Claude Design team access, no repo access, and no Figma library subscription. Token values snapshot: `@bbkemp/tokens` as of 2026-07-07 (`main` @ 17f9b9d). If tokens change, regenerate §2 rather than hand-editing.
