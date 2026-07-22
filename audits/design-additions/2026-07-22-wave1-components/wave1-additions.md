# DS-v2 wave-1 components — build record

**Date:** 2026-07-22 (living doc — grows as wave 1 lands)
**Owner:** Bryan Kemp (built by Claude; blueprints per the population plan: Shoelace/Lion anatomy, tek-native Lit)
**Status:** In progress — tek-select done, please review
**Where:** DS-v2 → page v2.02 → section **Components (new)** (`8372:371`)

---

## 1. tek-select (dropdown)

### Figma

| Set | Node ID | Variants |
|---|---|---|
| Dropdown | `8387:386` | State = Default / Focus / Filled / Disabled / Error / Open |
| DropdownItem | `8386:346` | State = Default / Hover / Selected / Disabled |
| DropdownMenu | `8386:347` | single component (panel + slot-ready Content) |

- Trough mirrors the Input set's exact bindings (same radius `borders/radius/03`, stroke `borders/width/01`, padding/gap spacing vars, bound font variables) — read from Input live, not assumed.
- Menu shadow color is **bound** to `color/menu/shadow/default` via `setBoundVariableForEffect`.
- ⚠ **Naming:** set is called **Dropdown** because V2.01 already has a "Select" set (which is actually a checkbox-group field, not a dropdown). Rename either as you prefer — Code Connect maps by node ID, so renaming is safe.

### New semantic tokens (18) — created with dark/light aliases, scopes, WEB code syntax

- `color/select/background/default`; `color/select/border/{default,focus,filled,disabled,error}`; `color/select/text/{default,filled,disabled,error}` — each aliases the **same primitives as the matching `color/input/*` token**, so select and input stay visually identical by construction.
- `color/menu/background/{default,hover,selected}`, `color/menu/border/default`, `color/menu/text/{default,selected,disabled}`, `color/menu/shadow/default` — the popup-panel namespace, reusable by future menu/tooltip/toast components.
- ⚠ **Please review the two judgment calls:** `menu/background/hover` (dark n600 / light n100) and `menu/background/selected` (dark n500 / light n200) had no existing precedent.
- Tokens reach `packages/tokens` on the next **Token Push from Figma** — until then the Lit component's `var(…, fallback)` fallbacks (dark values) apply.

### Code

- `packages/ui/src/select/select.ts` (`tek-select`) + `packages/ui/src/option/option.ts` (`tek-option`).
- Blueprint: Shoelace `sl-select` keyboard/focus model — focus stays on the trough, highlighted option gets `current` (aria-activedescendant can't cross shadow boundaries). Full keyboard map: Enter/Space/Arrows open+navigate (disabled options skipped), Home/End, Escape, Tab-close, 1s typeahead.
- **Floating UI** (`@floating-ui/dom`) added per the framework budget ("Lit + Floating UI when overlays arrive" — this is the first overlay): flip + width-sync + max-height middleware.
- Events: `tek-change {value}`, `tek-open`, `tek-close`. Hidden input for form posts when `name` set.
- Verified: **16/16 behavioral checks** (Playwright: ARIA semantics, open/close, selection, keyboard incl. disabled-skip + typeahead, outside-click, error/disabled states, menu width sync) + screenshot matches the Figma Open variant. Harness: `prototypes/component-library/select-test.html`.

### For Bryan to review

- [x] Convert `DropdownMenu` → `Content` frame to a slot — done 2026-07-22
- [x] Bryan changed DropdownItem corner radius to `borders/radius/none` — mirrored in `tek-option` same day (16/16 checks still pass)
- [ ] Review hover/selected menu background primitives (above)
- [ ] Decide Dropdown vs Select naming (old V2.01 "Select" is a checkbox-group — deprecate/rename?)
- [x] Published + Code Connect mapped (Dropdown/DropdownItem → TekSelect/TekOption) — done 2026-07-22
- [ ] Run a Token Push so the 18 new tokens land in `packages/tokens`

## 2. tek-textarea — RESOLVED: already covered, no new component

Audit finding (2026-07-22): multi-line input already exists on both sides.

- **Figma:** the Input set (`7003:495`, V2.01) carries `Height = Single / Double / Triple` across all five states — 15 variants. Multi-line *is* Input in this system; there is no separate Textarea set, and Figma is the source of truth.
- **Code:** `tek-input` already renders `<textarea rows=2|3>` for `height="double|triple"` with full token styling and min-heights 48/64 matching the Figma variants.
- **Verified:** 8/8 behavioral checks (rows, min-heights, focus/filled state transitions, `tek-input` event, disabled). Harness: `prototypes/component-library/textarea-test.html`.
- Building a separate `tek-textarea` would duplicate the trough and violate "if a component exists, use it." If arbitrary `rows` or autosize is ever needed, that's a `tek-input` enhancement, raised then — not speculative now.

## 3. tek-tabs

Built to the [rr-additions audit §3 spec](../2026-06-09-ds-v2-rr-component-additions/component-additions.md) (read in full first).

### Figma

| Set | Node ID | Variants |
|---|---|---|
| Tab | `8393:377` | Style = Pill / Nav × State = Inactive / Hover / Active / Disabled |
| Tabs | `8393:395` | Orientation = Horizontal (pill group) / Vertical (nav) |

- Pill container mirrors the input trough (container bg/border tokens, radius/full, width/01 stroke); nav accent bar width bound to `borders/width/05`.
- **Type rule (Bryan, 2026-07-22): components carry Geist type styles only** — pill = `text/regular/sm`, nav = `text/regular/md` (the heading ramp was tried and rejected as too bold; lg then stepped down to md by Bryan). Font variables are referenced *inside* the type styles, never bound directly on component text; if no style covers a case, it's a conversation, not a workaround. A QA sweep after the fix confirms **zero unstyled text nodes** across all wave-1 + layout sets (the Dropdown trough and DropdownItem texts were also corrected to `text/regular/md` — they'd copied Input's legacy font-variable binding).
- **Accent design call (Bryan, 2026-07-22):** the nav accent is a **flush, full-height bar on the tab's left edge** — in Figma an absolutely-positioned fill (STRETCH vertical), in code a `border-left`. The first-built inset text-height bar was reviewed and rejected. Nav padding is equal in all states, so text does not shift on activation (asserted in the behavioral suite).

### New semantic tokens (12) — `color/tabs/*`

Spec's token table reshaped to the `color/<component>/<part>/<state>` convention: `container/background|border`, `tab/text/inactive|active`, `tab/background/active|hover`, `nav/text/inactive|active`, `nav/background/active|hover`, `nav/accent/default`, `underline/border/active` (reserved).

### Deviations from the spec (flagged, not silent)

1. **Event renamed `tab-change` → `tek-change {value, previousValue}`** — every shipped component emits `tek-*` events; the spec predates that convention.
2. **Underline variant deferred** — the spec itself marks it deferrable; the token is reserved, `variant="underline"` warns and falls back.
3. **Alpha tints are raw values, not aliases** — Figma aliases can't carry opacity, so `tab/background/hover` (tek-blue 8%), `nav/background/active` (tek-blue 12%), `nav/background/hover` (n800 50%) hold RGBA derived from the live primitives. If the primitives change, these three need a manual touch — please review.
4. **No disabled text token in the spec** — Disabled uses 50% opacity on the item. Flag if you want a real token.

### Code

- `packages/ui/src/tabs/tabs.ts` + `packages/ui/src/tab/tab.ts`. Roving tabindex, arrows (disabled-skipping + wrap), Home/End, Enter/Space, **manual activation** (focus ≠ select, per spec); parent assigns `data-style` pill/nav to items.
- Verified: **13/13 behavioral checks** + screenshot matches spec anatomy. Harness: `prototypes/component-library/tabs-test.html`.

### For Bryan

- [ ] Convert the 2 Tabs `Content` frames to slots
- [ ] Review the three raw-alpha tints (above) and the 50%-opacity disabled treatment
- [ ] Publish → then Claude adds Code Connect for Tab/Tabs

## 4. tek-badge

- **Figma:** Badge set (`8400:377`) — Type = Neutral / Blue / Success / Warning / Error. Pill radius-full, `text/regular/xs` style, padding s02×s05.
- **Tokens (10):** `color/badge/<type>/background` + `text` — status types (blue/success/warning/error) constant across modes like the existing error tokens; neutral flips n500/n100 (dark) ↔ n200/n800 (light). Dark text (n800) on blue/success/warning fills, white on error — please eyeball contrast.
- **Code:** `packages/ui/src/badge/badge.ts` — `type` attr with invalid-value fallback + warn.

## 5. tek-tooltip

- **Figma:** Tooltip component (`8400:378`) — **zero new tokens**: reuses the `color/menu/*` panel namespace (bg/border/text/shadow) exactly as planned when that namespace was minted. `text/regular/sm` style. No arrow by design — matches the menu panel aesthetic.
- **Code:** `packages/ui/src/tooltip/tooltip.ts` — wraps the target, hover/focus show after 300ms delay, Floating UI offset(s03)+flip+shift, `role=tooltip` + `aria-describedby`, Escape dismisses (document-level while open).

## 6. tek-spinner

Built to the [rr-audit §7 spec](../2026-06-09-ds-v2-rr-component-additions/component-additions.md).

- **Figma:** Spinner set (`8401:391`) — Size sm/md/lg × Tone Default/Success/Warning/Error, 270° arc ellipses, fills bound to `color/spinner/*`, **diameters bound to spacing s09/s11/s15** (16/24/40 — all on the scale).
- **Tokens (4):** `color/spinner/{default,success,warning,error}` → brand/tek-blue + the ui status colors (spec's `colors/status/*` names mapped to the actual `colors/ui/*` primitives).
- **Code:** `packages/ui/src/spinner/spinner.ts` — SVG arc, 360°/1.2s, `paused` attr freezes, **`prefers-reduced-motion` disables the spin** (spec requirement), `role=status` + default aria-label.
- **Deviation:** spec's 2.5px md stroke has no token — snapped to `borders/width/04` (2px) per the four-point rule (sm+md = width/04, lg = width/05).

**Verification (all three):** 16/16 Playwright behavioral checks incl. reduced-motion context + screenshot matching the Figma sets. Harness: `prototypes/component-library/wave1-finale-test.html`.

### For Bryan (finale batch)

- [ ] Review badge text-on-fill contrast choices and the no-arrow tooltip call
- [ ] Publish → then Claude adds Code Connect (Badge/Tooltip/Spinner + the still-unmapped Tab/Tabs)
- [ ] Token Push for the 14 new tokens (badge 10 + spinner 4)

## Wave 1 complete

select ✓ · textarea (resolved: Input covers it) ✓ · tabs ✓ · badge ✓ · tooltip ✓ · spinner ✓

