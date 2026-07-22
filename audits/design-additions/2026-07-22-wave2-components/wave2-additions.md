# DS-v2 wave-2 components — build record

**Date:** 2026-07-22 (living doc — grows as wave 2 lands)
**Owner:** Bryan Kemp (built by Claude to the [rr-additions audit specs](../2026-06-09-ds-v2-rr-component-additions/component-additions.md))
**Where:** DS-v2 → page v2.02 → section **Components (wave 2)** (`8388:401`)
**Scope (spec §10 order, minus wave-1 ships):** status-bar → group-box → navigation-panel → progress → data-table + status-pill

**§11 open decisions adopted as recommended** (flag to change): dark+light everywhere · data-table unvirtualized v1 · column widths via CSS custom property · group-box nesting = indented instance · nav-panel variant = manual override + container-query default · status-bar "running" is a real state.

---

## 1. tek-status-bar

Built to spec §4.

### Figma

| Set | Node ID | Variants |
|---|---|---|
| StatusBar | `8406:409` | Status = Ready/Running/Success/Warning/Error (Variant=Default) + Variant=Error, Variant=Loading (sparse matrix) |

- 1024×32 bars: build-flag region (sample = Badge Warning instance — production omits it, per spec never baked in), status text `text/mono/xs` style, actions region (Icon instance).
- Top border only (`strokeTopWeight` → width/01, other sides → width/none).
- Tint variants layer the tint token **over** the default background (two fills) — mirrors as `background-color` + `background-image` gradient in code.

### New semantic tokens (9) — `color/statusbar/*`

`background/{default,error,loading}`, `border/default`, `text/{default,running,success,warning,error}`. The spec's token table listed 7; the two tint backgrounds its Variant table implies were missing — added as raw RGBA (red/blue at 10%; aliases can't carry opacity) ⚠ please review the 10% strength.

### Code

`packages/ui/src/status-bar/status-bar.ts` — `variant` + `status` attrs, three slots (`build-flag`, default, `actions`), `role=status` on the text region, ellipsis on overflow.

**Verified:** 10/10 Playwright checks + screenshot matching the Figma set. Harness: `prototypes/component-library/statusbar-test.html`.

### For Bryan

- [ ] Review the 10% tint strength on error/loading backgrounds
- [ ] Publish → Code Connect (also still pending from wave 1: Tab, Tabs, Badge, Tooltip, Spinner)
- [ ] Token Push for the 9 new tokens

## 2. tek-group-box

Built to spec §1.

- **Figma:** GroupBox set (`8408:456`) — Variant=Default/Error + State=Disabled (sparse). **Title is in-flow inside the box as the first row (Bryan, 2026-07-22 — matches the Tek Express reference; the border-straddling fieldset legend was built first and rejected).** Sample content = Selector instances; `Content` frame awaits slot conversion.
- **New tokens (5):** `color/canvas/background/raised` (⚠ prerequisite the spec assumed but the file lacked — dark n700 / light white, please review) + `color/groupbox/{background/default,border/default,border/error,legend/default}`. `groupbox/background` **aliases the raised token** (semantic→semantic) per the spec's surface-tier intent.
- **Title type:** `text/heading/regular/xs` (Archivo) — **confirmed by Bryan** as the intended exception to the Geist-only component rule (group titles are headings).
- **Code:** `role=group` container with in-flow title (`packages/ui/src/group-box/group-box.ts`) — `label` (always shown, per spec), `variant=error`, `disabled`. Verified **8/8 checks** + screenshot. Harness: `prototypes/component-library/groupbox-test.html`.

## 3. tek-navigation-panel

Built to spec §6.

- **Figma:** NavigationPanel set (`8411:503`) — Variant = Full (184) / Text-only (96) / Icon-only (56). Pure chrome composition: Brand region (Tek Icon + Archivo 2xs wordmark), Nav region = **instance of the shipped Tabs Orientation=Vertical set** (never reimplemented, per the spec's composition rule), spacer, Foot region (divider + Button instances) pinned to bottom. Icon-only nav shows icon placeholders (icon tabs are app-slotted content in code).
- **New tokens (4):** `color/navigation/{background,border,text,divider}/default` — bg aliases `color/canvas/background/raised`.
- **⚠ PROPOSED:** widths 184/96/56 have no spacing tokens — raw in Figma/code, overridable via `--tek-navigation-panel-width`. Propose `spacing/panel/{full,text,icon}` if these recur.
- **Loading state** (spec's rare tabs→spinner swap) is app-slotted content, not a component variant — deliberately omitted.
- **Code:** `role=navigation`, three slots, foot auto-hides when empty, variant widths; container-query switching is the app-shell's job per spec. Verified **8/8 checks** (incl. tek-change propagating through the slotted tabs) + screenshot. Harness: `prototypes/component-library/navpanel-test.html`.

## Still to come in wave 2

progress (§5), data-table + status-pill (§2).
