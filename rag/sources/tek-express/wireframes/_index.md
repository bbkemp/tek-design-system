# tek-express wireframes

Structural references for the TekExpress AppEmulator redesign. **All wireframes here were authored in the OLD design system — every visual property must be ignored.** Use only for structural / IA / layout decisions: nav patterns, wizard structure, section organisation, control placement.

Each entry is paired:
- `<screen-id>-wireframe.md` — structural interpretation, deltas from legacy, element inventory pulled from the Figma node tree.
- `<screen-id>-wireframe.png` — bitmap render from Figma (pulled via MCP).

## Index

| Wireframe | Target screen | Source |
|---|---|---|
| [setup-dut](./setup-dut-wireframe.md) | [`screens/setup-dut.md`](../screens/setup-dut.md) | Figma file `ALtZjw0TqRdBSKffgpMuRD`, node `1:400` |

## Pulled from

Figma file: `https://www.figma.com/design/ALtZjw0TqRdBSKffgpMuRD/TekExpress-Wireframes`. Bryan owns the file. Pulled via the Figma MCP (`get_metadata` + `get_screenshot`) on 2026-06-01.

## How CD should consume these

The cd → cc handoff has CD running in a Claude Design environment that may or may not have a Figma MCP connector available to its session. To remove that dependency, every wireframe in this folder is committed as **both** the structural `.md` and a rendered `.png` — so CD only needs the GitHub connector to read them, which is consistently available across CD surfaces. The wireframe `.md` files explicitly call out that all visual properties (colour, type, spacing, button styling, glyph choice) must be **ignored** — only the structural / IA decisions transfer.

If CD does have working Figma MCP access, it should prefer pulling the original Figma file directly (URLs are in each wireframe's frontmatter); this folder is the GitHub-routed fallback.
