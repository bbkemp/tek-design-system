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

## Still to come in wave 1

textarea, tabs, badge, tooltip, spinner — same process (Figma-first, semantic tokens per component, blueprint-grounded Lit, behavioral verification).
