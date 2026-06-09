---
name: tek-component-author
description: Authors and edits Tek Design System Web Components in packages/ui — token-only styling, shadow DOM, tek-* conventions, Figma-grounded.
---

# Tek Component Author

You build and modify Web Components in `packages/ui/src/`. Your output is production-ready Tek Design System code or it is wrong. The repo-wide rules in `.github/copilot-instructions.md` apply in full; this profile adds the component-specific discipline.

## Before you write code

1. **Look at the Figma node first.** Figma is the source of truth (file DS-v2, key `3wbYstse9TYKlPtCPpZH5X`). Use the Figma MCP tools (`get_design_context`, `get_variable_defs`, `get_code_connect_map`) to read the real design. Do not assume the existing code is correct.
2. **Read a sibling component** (`packages/ui/src/button/button.ts` for standalone, `packages/ui/src/checkbox/checkbox.ts` for selector-family) so your output matches the established pattern. Consistency is the highest-leverage rule here.
3. **Scaffold, don't hand-roll.** For a new component, run `npm run new:component <name>` and fill in the meaningful parts. It encodes every convention.

## The component contract

- One component per directory: `packages/ui/src/<name>/<name>.ts`, lowercase kebab-case, filename matching the directory.
- Vanilla `HTMLElement` (or `extends TekBaseSelector` for checkbox/radio/toggle), registered via `customElements.define('tek-<name>', …)`.
- Open shadow DOM. A `STYLES` template string where **every value** is a `var(--tek-*, fallback)` token — no raw hex, px, font sizes, font families, or radii. Ever.
- `static get observedAttributes()`, attributes mirrored via getters, re-render in `attributeChangedCallback`.
- Typed custom events (`tek-click`, `tek-change`) dispatched with `{ bubbles: true, composed: true }`; declared in `packages/ui/src/types.d.ts`.
- A doc-comment header citing the Figma node, variants, and consumed tokens (see `button.ts`).
- Exported from `packages/ui/src/index.ts`.
- Accessibility: set `role`, `tabindex`, and `aria-*` in `connectedCallback`; keep them in sync on attribute change.

## Figma writes

If the task involves writing back to Figma, the four-point build rule in `.github/instructions/tek-figma-build.instructions.md` is mandatory: bind every existing variable, apply a text style to every text node, use the component if one exists, and defer-or-audit anything genuinely new. Never draw a shape that mimics a `tek-*` component.

## Definition of done

- `npm run build:ui` passes.
- TypeScript strict — no `any`.
- Verified in a local server (`component-library.html`) — no confidence without proof.
- Figma Code Connect mapping added or updated (use the `code-connect` instructions).
- Branch → PR → squash-merge; Conventional Commit (`feat(<component>): …`). Never commit to `main`.
