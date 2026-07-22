# ADR-0002: Layout primitives as first-class components — always start with layout

- **Status:** Accepted
- **Date:** 2026-07-22
- **Deciders:** Bryan Kemp
- **Context docs:** [CLAUDE.md](../../CLAUDE.md) hard constraints #2 (tokens always) and #9 (Figma builds bind every property), [ADR-0001](./0001-adopt-lit.md) (Lit base), [docs/tek-system-core.md](../tek-system-core.md) Part 3

## Context

Every composed page in the system today re-invents layout by hand. The sign-in reference pages carry inline flex styles and a `page-layout.css` with hardcoded structure (and drifted token names — `--tek-primitive-color-neutral-*` doesn't exist). In Figma, screens are assembled from raw auto-layout frames with per-frame gap/padding values that may or may not be bound to spacing variables. Both sides have the same failure mode: **spacing decisions are made ad hoc at every usage site**, which is exactly the drift the design system exists to prevent.

The component population effort (~25 components incoming) will multiply the number of composed screens — examples, component-library entries, prototypes. If layout stays ad hoc, every one of those compositions is a new drift surface.

Two sub-decisions were considered:

**Are layout primitives real components or documentation conventions?** A convention ("use auto-layout with bound gap variables") relies on every contributor remembering it every time. A component makes the right thing the only thing: the gap axis physically cannot hold a raw value.

**How do free-form children work in Figma?** Historically, Figma components couldn't accept arbitrary children, which forced layout "components" to be detached templates — losing the update chain. **Figma Slots** (open beta since 2026-03) removes this blocker: a component can declare slot regions that accept free-form content while the component instance stays attached.

## Decision

Layout primitives are **first-class components on both sides** — real Figma components and real Lit components — and they land **before** the wave-1 component batch:

| Primitive | Purpose |
|---|---|
| `tek-stack` | Vertical flow, tokenized gap |
| `tek-row` | Horizontal flow, tokenized gap, alignment |
| `tek-grid` | Column grid, tokenized gap |
| `tek-page` | Page frame: max-width, margins, vertical rhythm |

### The rule: always start with layout

Every screen or composed view — in Figma or code — starts with layout primitives. Raw flex/grid styles or unbound auto-layout frames at the composition level are drift, not shortcuts. (Inside a component's own shadow DOM, flex/grid is fine — the primitive is the composition-level contract, not a ban on CSS.)

### Figma side

- Real components in DS-v2, using **Figma Slots** for free-form children.
- **Gap is a variant axis**, capped to the spacing steps that occur in real compositions: `s02, s03, s04, s05, s06, s07, s08, s09, s11`. (The original six grew by three during the build — the sign-in reference pages use `s04` for the label→input gap, `s07` for the signup action stack, and `s03` for the footer toggle row; an axis that can't express the reference pages fails its own "real-world steps" test.) A variant axis cannot hold a raw pixel value — tokenization is structural, not disciplinary.
- **Page uses a Breakpoint axis (Mobile/SM/XL), not a Gap axis** — page-level layout varies by breakpoint (width `c02`/`c04`/`c07` × padding × alignment, encoding the `.wrap` container-query contract from `page-layout.css`), with the `s17` section rhythm constant across variants.
- Every other property (padding, radius, fills where present) binds to variables per hard constraint #9.

**Build record (2026-07-22):** all four sets exist on DS-v2 page v2.02 — see [the additions audit](../../audits/design-additions/2026-07-22-layout-primitives/layout-primitives-additions.md) for node IDs and findings. Confirmed live: grid gaps and widths are variable-bindable; the Slots API is absent from the plugin API, so the per-variant `Content` frames await manual slot conversion (the fallback below).

### Code side

- Lit components in `packages/ui` per ADR-0001.
- The `gap` prop accepts **token step names only** (`gap="s05"`), mapped internally to `var(--tek-spacing-s05, …)`. Raw px/rem values are rejected, not coerced.
- The sign-in reference pages are refactored onto the primitives in the same effort — removing their inline flex styles and retiring the drifted `page-layout.css` names — and pixel-diffed to prove the refactor is invisible.

## Consequences

**Positive**

- Spacing drift becomes structurally impossible at the composition level on both sides.
- New screens (component-library entries, prototypes, wave-1 examples) compose from four known parts; AI-generated compositions inherit the constraint automatically.
- The Figma component ↔ code component pairing is 1:1, so Code Connect covers layout too.

**Negative / accepted trade-offs**

- Figma Slots is an open beta — behavior may change; the build must verify slot support live on the file/plan before committing to the structure. Fallback if the plugin API can't create slot frames: build the component structure programmatically and convert content frames to slots manually in the Figma UI.
- Gap-as-variants means adding a new spacing step to a primitive is a component edit, not just a token edit. Accepted: new composition-level spacing steps should be rare and deliberate.
- Four more components to maintain before any "visible" wave-1 component ships. Accepted: they are the foundation the wave builds on.

**Follow-ups**

- Refactor both sign-in pages onto the primitives (fixes the `page-layout.css` token-name drift as a side effect).
- Component-library page gets entries for all four primitives.
- The additions audit documents any new semantic variables created during the Figma build.
