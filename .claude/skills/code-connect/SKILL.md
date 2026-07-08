---
name: code-connect
description: Map a Figma component to its source file in this repo via Figma Code Connect. Use whenever a new tek-* component is added, an existing component is renamed, or an unmapped Figma node needs to be linked to code. Code Connect mappings live in Figma's system, not in this repo, but the workflow is mediated through the Figma MCP tools.
---

# Code Connect

Code Connect is the link between a Figma component (e.g. the **Button** node `202:2605` in DS-v2) and the source file in this repo (e.g. [packages/ui/src/button/button.ts](../../../packages/ui/src/button/button.ts)). Once mapped, Figma Dev Mode shows the actual `<tek-button>` import + usage instead of generic CSS, and any AI agent calling `get_design_context` on that node receives the mapping as part of the response — which is what makes design-to-code generate `tek-*` components automatically instead of inventing new HTML.

The mapping store is in **Figma's backend**, not in this repo. Updates go through the Figma MCP tools — never hand-edit anything.

## Inputs

The user provides one of:

- A Figma URL (`https://www.figma.com/design/<fileKey>/...?node-id=<int>-<int>`)
- A bare Figma node ID (e.g. `202:2605`) — assume `fileKey = 3wbYstse9TYKlPtCPpZH5X` (DS-v2) unless told otherwise

Plus the source file path in this repo (e.g. `packages/ui/src/button/button.ts`). If they don't provide it, infer from the component name and confirm.

## Required tools

All from the Figma MCP server:

| Tool | Purpose |
|---|---|
| `get_code_connect_map` | Read current mapping for a node (sanity check before overwriting) |
| `get_code_connect_suggestions` | AI-suggested mappings for unmapped components — review with the user |
| `add_code_connect_map` | Write a single mapping |
| `send_code_connect_mappings` | Bulk-write multiple mappings (preferred for batch work) |
| `get_context_for_code_connect` | Fetch component props/variants/anatomy — only needed for advanced template mappings |

## Conventions for this repo

| Field | Value |
|---|---|
| `label` | Always `"Web Components"` for `tek-*` components — never `"React"` (the repo's hard constraint #1 forbids React) |
| `componentName` | The TypeScript class name (e.g. `TekButton`) or, for page-level mappings, the HTML file path (e.g. `prototypes/sign-in/index.html`) |
| `source` | Path relative to repo root (e.g. `packages/ui/src/button/button.ts`) |

## Process — single mapping

1. **Verify current state.** Call `get_code_connect_map` for the node. If a mapping already exists, surface it before overwriting.
2. **Confirm the source file exists.** Read the path the user gave; if missing, ask for clarification. Do not invent paths.
3. **Map.** Call `add_code_connect_map` with `{nodeId, fileKey, source, componentName, label: "Web Components"}`.
4. **Update the docs.** Add or update the row in [README.md](../../../README.md#L421) "Figma source" table and the [CONTRIBUTING.md "Figma Code Connect" table](../../../CONTRIBUTING.md#L161). The two tables should agree — if they currently disagree, fix the disagreement in the same PR.
5. **Verify.** Call `get_code_connect_map` again; confirm the mapping returns what you just wrote.

## Process — batch mapping (preferred when ≥3 components)

1. **Audit first.** For each candidate node, call `get_code_connect_map`. Build the list of unmapped nodes.
2. **Get suggestions.** Call `get_code_connect_suggestions` on a parent node (e.g. the page or component-set root). Returns AI-proposed mappings.
3. **Review with the user.** Show the proposed mappings. Reject anything wrong.
4. **Save in bulk.** Call `send_code_connect_mappings` with the approved array.
5. **Update both docs in one pass.** README table + CONTRIBUTING table.
6. **Verify** at least 2 random mappings via `get_code_connect_map`.

## Advanced — template mappings

The simple flow above produces a "component_browser" mapping (Figma points to the source file, shows generic usage). For richer integrations — variant-aware, prop-pre-filled examples — pass `template` and `templateDataJson` to `add_code_connect_map`. Use `get_context_for_code_connect` to fetch the component's props/variants/anatomy first.

Default to simple mappings. Templates are extra work and only worth it for high-traffic components where designers need to see the exact prop combination they've configured. Don't preemptively template everything.

## Triggers — when to invoke this skill

- A new `tek-*` component lands in `packages/ui/src/` → map it before merging the PR
- An existing component is renamed → update its mapping in the same PR
- An audit (`figma-design-qa` or `prototype-qa`) flags an unmapped DS component → run this skill on the flagged nodes
- A designer asks "why doesn't Dev Mode show the real code for component X?" → its node is probably unmapped

## Source of truth

Figma's mapping store. README and CONTRIBUTING tables are documentation — they can drift. When in doubt, `get_code_connect_map` wins.

## Reference

- Repo workflow detail: [CONTRIBUTING.md → Figma Code Connect](../../../CONTRIBUTING.md#L157)
- Current node-to-source map: [README.md → Figma source](../../../README.md#L417)
- DS-v2 file key: `3wbYstse9TYKlPtCPpZH5X`
