---
name: tek-figma-build
description: MANDATORY prerequisite — load this skill BEFORE any `use_figma` tool call that writes to a Tek file. The Tek-specific layer on top of figma-use. Sets the four-point build rule (variables on every property, type styles on every text node, components instead of shapes, additions-audit for new tokens/components). Skipping this skill causes the exact paint-not-compose failure the design system exists to prevent.
---

# Tek Figma Build

Wraps `figma-use` / `figma-generate-design` with Tek-specific build discipline. The four-point rule below is non-negotiable and represents the **core ethos of the design system**.

> Anything less than full token + style + component binding is a deviation; deviations are explicit (additions audit), never silent.

## The four-point rule (Bryan, verbatim)

1. **Apply ALL existing variables to every element that can use them.** Spacing, border radius, colors, stroke weights — every property that the library has a variable for, bind it. Raw numbers are forbidden where a variable exists.
2. **All type must have a type style applied.** No raw `fontName + fontSize` pairs. Every `TextNode` uses a published text style.
3. **USE THE COMPONENTS. If there is a component for it. Use it. Every single time.** Never draw a rectangle that represents a button when `tek-button` is in the library. Variant overrides (state, type, size) are the legitimate adjustments; replacing with a shape is not.
4. **If a variable or component doesn't exist:**
   - **Extremely close to an existing one → defer.** 23px → use the 24px spacing token. A dropdown with a different caret glyph → still use the dropdown component (the caret is an icon swap).
   - **Genuinely new → bind what you can, add to the additions audit.** Use every variable that fits, every component that applies, then propose the new token / component / variant in the additions audit `.md` with an explicit `(PROPOSED: tek-spacing-…)` annotation in the layer name.

## When to use this skill

**Every time** you're about to call `use_figma` against a Tek file. No exceptions.

- Building a screen → load this skill first
- Updating a frame → load this skill first
- Adding a new component → load this skill first
- Even "just" duplicating an existing frame → load this skill first (you'll need to re-bind anything the clone broke)

This skill loads after `figma-use` / `figma-generate-design`, not instead of them. They teach you HOW to call `use_figma`; this skill teaches you the Tek-specific rules for WHAT to bind once you're inside the call.

## Discovery phase — do this once per session

Before the first write, discover the full variable + style + component namespace:

1. **Library subscription.** `get_libraries` — confirm the file subscribes to DS-v2 (fileKey `3wbYstse9TYKlPtCPpZH5X`). If not, subscribe first or import every needed asset via `importComponentByKeyAsync` / `importVariableByKeyAsync`.

2. **Variable namespaces to fetch.** All of these exist in DS-v2 — do not guess; query:
   - `search_design_system` for terms `color`, `spacing`, `borders`, `fonts`, `motion`
   - Walk the returned variable trees and record IDs for: spacing scale (`s00`–`s12`), border radius scale (`radius/02`, `radius/03`, `radius/05`, `radius/full`, etc.), color variables (`color/canvas/background/*`, `color/input/border/*`, `color/button/*`, `colors/brand/*`, etc.), font size + family + line-height tokens.

3. **Text styles to fetch.** DS-v2 has a full text style library — search `body`, `heading`, `regular`, `bold`, `mono` (NOT "typography" or "text style" — those return empty). Record the style IDs for `text/heading/regular/{2xs..5xl}`, `text/regular/{xs..5xl}`, `text/bold/{xs..5xl}`, `text/light/{xs..3xl}`, `text/mono/{xs..2xl}`.

4. **Component namespace.** `search_design_system` returns the shipped tek-* component list. Record component-set keys for: Button, Selector (Checkbox/Radio), SelectorLabel, Input, Label, Modal, TextLink, Toggle, Footer, CharacterCount.

## Binding rules during the write

For every node you create or modify, walk this in order before moving to the next:

**Fills / strokes →** `figma.variables.setBoundVariableForPaint({type:"SOLID",color:fallback}, "color", variable)`. Choose the most semantic match (`color/button/border/default` over `colors/neutral/700`). Raw hex only as the fallback inside the bound paint, never as a standalone fill.

**Padding / item spacing / gap →** `node.setBoundVariableForLayoutMode(...)` for each of `paddingLeft`, `paddingRight`, `paddingTop`, `paddingBottom`, `itemSpacing` against the matching spacing variable. Pick the closest existing token (snap 23→24, 13→12, 7→8).

**Corner radius / stroke weight →** `node.setBoundVariable("topLeftRadius", radiusVar)` (and the other three corners). Same for stroke weight if the library has a token.

**Text →** `await node.setTextStyleIdAsync(textStyle.id)`. Never set `fontName` + `fontSize` + `lineHeight` + `letterSpacing` individually if a published style matches. If genuinely no style matches (rare — search exhaustively first), bind the per-property font variables instead, and flag in additions audit.

**Components →** `componentSet.createInstance()` and then set variant properties via `instance.setProperties({Type:"Secondary", State:"Default"})`. Do not draw a frame that resembles the component. If the component lacks the variant you need, **add it to the additions audit as a variant proposal** — do not fork the component.

## When something doesn't match

The four-point rule says: defer to existing if close; flag new if genuinely new. The "extremely close" judgment call:

- **Snap.** Spacing within ±2px of an existing token. Color within ΔE ≤ 5 of an existing semantic color. Radius within 1–2px. Stroke weight within 0.5px.
- **Variant swap.** Same component shape but different content (caret glyph, icon, state). Use the component, swap the content.
- **Flag as PROPOSED.** Structurally different shape, no close-enough match. Add to the additions audit `.md` with `(PROPOSED token: tek-…)` or `(PROPOSED component: tek-…)` in the layer name AND a row in the additions audit table.

The additions audit is `audits/design-additions/<YYYY-MM-DD>-<slug>/<artifact>-redesign-additions.md` — see existing examples under `audits/design-additions/`.

## Verification before declaring complete

Before saying a frame is done, inspect:

- [ ] Every `fills` array on every node references a variable (or is intentionally empty)
- [ ] Every `strokes` array references a variable
- [ ] Every layout property (`paddingLeft`, etc., `itemSpacing`) is bound where a token exists
- [ ] Every `cornerRadius` is bound where a radius token exists
- [ ] Every `TextNode` has `textStyleId` set (or has individual font properties bound to font variables)
- [ ] Every node that represents a Tek component is an instance, not a frame mimicking it
- [ ] Every node that introduces a new pattern is flagged in the layer name AND in the additions audit

If any inspection bullet fails, the frame is not done. "I'll bind it in a later pass" is the failure pattern that produced the 2026-04-22 Riddick screens and the 2026-06-04 Tek Express setup-dut bundle. **No later passes.**

## Related references

- `bkai/CHARTER.md` Rule 22 — universal cross-LLM version of this rule
- `bkai/design-system.md` — Tek anchor that loads at chat start
- `tek-design-system/CLAUDE.md` Hard Constraint 9 — repo-level enforcement
- `tek-design-system/CONTRIBUTING.md` § Building in Figma — workflow detail
- `figma-design-qa` skill — automated QA pass that detects rule violations after the fact (use to verify completion)
- `feedback_design_system_execution.md` in personal memory — receipts log
