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

- **Figma:** GroupBox set (`8408:456`) — Variant=Default/Error + State=Disabled (sparse). Fieldset pattern: legend sits on the border, masked by its own raised-surface fill; sample content = Selector instances; `Content` frame awaits slot conversion.
- **New tokens (5):** `color/canvas/background/raised` (⚠ prerequisite the spec assumed but the file lacked — dark n700 / light white, please review) + `color/groupbox/{background/default,border/default,border/error,legend/default}`. `groupbox/background` **aliases the raised token** (semantic→semantic) per the spec's surface-tier intent.
- **⚠ Legend type:** `text/heading/regular/xs` (Archivo) **per spec §1**, which explicitly designates it a structural cue. Deliberate exception to the Geist-only component rule — confirm, or I swap to `text/bold/sm`.
- **Code:** native `<fieldset>/<legend>` (`packages/ui/src/group-box/group-box.ts`) — `label` (always shown, per spec), `variant=error`, `disabled`. Verified **8/8 checks** + screenshot. Harness: `prototypes/component-library/groupbox-test.html`.

## Still to come in wave 2

navigation-panel (§6), progress (§5), data-table + status-pill (§2).
