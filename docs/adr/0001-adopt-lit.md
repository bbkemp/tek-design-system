# ADR-0001: Adopt Lit as the implementation base for `packages/ui`

- **Status:** Accepted
- **Date:** 2026-07-17
- **Deciders:** Bryan Kemp
- **Context docs:** [CLAUDE.md](../../CLAUDE.md) hard constraint #1 (framework-agnostic Web Components), [docs/tek-system-core.md](../tek-system-core.md) Part 3 (planned ADR convention — this is the first ADR)

## Context

`packages/ui` ships 12 components (~900 lines) written as bare `HTMLElement` custom elements with a small shared base class (`base-selector.ts`), built by Rollup + `@rollup/plugin-typescript`. The library is about to grow by ~25 components (select, tabs, tooltip, menu, toast, etc. — the "population" effort), using proven open-source Web Component libraries as behavioral blueprints.

Three implementation options were considered before scaling up:

1. **Stay bare `HTMLElement`.** Works today, zero dependencies. But the cost is non-linear: overlay- and state-heavy components (select, menu, tooltip, tabs) each need hand-rolled attribute/property sync, efficient re-rendering (the `tek-input` "don't re-render on state change or you destroy the focused input" workaround is this problem surfacing), and shared focus/positioning/dismissal behaviors — effectively growing a homemade mini-framework inside `base-selector.ts`.
2. **Stencil.** Full compiler that replaces the build pipeline, JSX templates, generated lazy-loading plumbing, and stewardship that has moved between owners. Solves problems this repo doesn't have at the cost of build simplicity it does have.
3. **Lit.** ~5 KB runtime, plain TypeScript (tagged template literals, no compiler step), drops into the existing Rollup + TS build. Output remains standard custom elements.

A decisive external factor: the blueprint libraries this effort draws from — Shoelace/Web Awesome, Spectrum Web Components, Carbon Web Components, Material Web, Vaadin — are all Lit-based, strict-TypeScript codebases. Matching their base technology means their reactive-property patterns, controllers (focus trap, overlay positioning, dismiss-on-outside-click), and typed public APIs adapt nearly verbatim instead of being translated.

## Decision

Adopt **Lit** as the implementation base for all components in `packages/ui`:

- All new components extend `LitElement`.
- The existing 12 components are migrated in one PR, keeping tag names, attributes, properties, events (`tek-change`, `tek-click`, `tek-input`), token usage, and rendered CSS identical — verified by pixel-diffing the sign-in reference pages before and after.
- Lit is bundled into `dist/tek-ui.js` / `dist/tek-ui.cjs` (via `@rollup/plugin-node-resolve`), so consumers — including the prototype pages that import built files directly — see no dependency change.
- Reactive state uses Lit `static properties` with `reflect: true` where the existing components used host attributes for CSS state (`:host([checked])` etc.), preserving the attribute-driven styling contract.

## Framework-agnosticism is not violated

Hard constraint #1 (Web Components only, no framework ports) is about the **consumption surface**: consumers get standard custom elements because the downstream runtime is native desktop (WPF/XAML). Lit is an implementation detail behind that surface — `LitElement` extends `HTMLElement`, and the published artifacts remain plain custom elements consumable from any HTML page. No consumer-facing API, tag name, or integration pattern changes.

## Consequences

**Positive**

- Reactive property/attribute sync, template-diffing re-renders (stable child DOM — the `tek-input` focus-destruction class of bug disappears), and `ReactiveController` for the shared overlay behaviors the next ~25 components need.
- Blueprint code from Shoelace/Spectrum/Carbon/Material/Vaadin transfers with minimal translation.
- Styles move to `static styles` (constructable stylesheets) — parsed once per class instead of once per instance.

**Negative / accepted trade-offs**

- One runtime dependency (~5 KB gzipped) where there were zero. Accepted: it's the industry-standard base for exactly this kind of library.
- Bundle size grows by the Lit runtime once (not per component).
- Contributors need basic Lit familiarity; mitigated by the migrated components serving as in-repo examples.

**Follow-ups**

- New-component scaffold (`npm run new:component`, planned in tek-system-core Part 3) should template a `LitElement`.
- The planned per-component `.styles.ts` split maps directly onto Lit's `static styles`.
