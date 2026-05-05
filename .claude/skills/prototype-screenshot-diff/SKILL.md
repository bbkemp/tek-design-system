---
name: prototype-screenshot-diff
description: Generate a side-by-side visual comparison file for prototype elements and their closest design system matches. Saves screenshots and produces a Markdown file. Typically invoked by prototype-qa for its close-match list, but can run standalone given any list of (prototype-node, ds-node, label) triples.
---

# Prototype screenshot diff

Visual companion to `prototype-qa`. For each "close match" pair (prototype element + closest DS component), fetch screenshots from Figma and compose a Markdown file with side-by-side comparisons and gap notes.

## Inputs

A list of triples:
- `proto`: source identifier — Figma node ID, OR a local file:line reference, OR an existing image path
- `ds`: DS Figma node ID (from the README's component table)
- `label`: short element name (e.g. `"primary button"`, `"input with icon"`)

Optional:
- `parent-dir`: where to save outputs (default: parent prototype-qa audit dir, e.g. `audits/prototype/<date>-<slug>/`)
- `notes`: per-pair gap descriptions to surface in the diff

When invoked by `prototype-qa`, all of the above come from the close-match list. When run standalone, the user provides them directly.

## Required tools

- Figma MCP `get_screenshot` for any Figma node ID
- Filesystem write for image and Markdown output

## Process

1. **Resolve output dir.** Default is `<parent-dir>/screenshots/` for images and `<parent-dir>/screenshot-diff.md` for the report. Create directories if missing.

2. **Fetch screenshots.** For each pair, in order:
   - Call `get_screenshot` on the prototype Figma node → save as `screenshots/<NN>-<slug>-proto.png`
   - Call `get_screenshot` on the DS Figma node → save as `screenshots/<NN>-<slug>-ds.png`
   - For local-file prototype sources, ask the user for an image path or skip the proto image (mark as "no screenshot available — see <file:line>")
   - `NN` is a zero-padded index (`01`, `02`, ...). `slug` is the label kebab-cased.

3. **Compose `screenshot-diff.md`.** One section per pair, all linked from a top-level table of contents.

## Output template

```markdown
# Prototype ↔ DS Screenshot Diff

**Generated:** <YYYY-MM-DD> · **Pairs:** N

## Index

| # | Element | Gap |
|---|---|---|
| 01 | primary button | missing `tertiary` variant |
| 02 | input with icon | no leading-icon slot |

---

## 01. <label>

**Prototype:** `<proto-id>` · **Closest DS:** `<ds-id>` (`<ds-component-name>`)

| Prototype | Closest DS match |
|---|---|
| ![proto](./screenshots/01-<slug>-proto.png) | ![ds](./screenshots/01-<slug>-ds.png) |

**Gap:** <one-paragraph description>

**Suggested resolution:** <add variant / new slot / extend tokens / mark new component>

---

## 02. <label>

(repeat for each pair)
```

## Output location

- Markdown: `<parent-dir>/screenshot-diff.md`
- Images: `<parent-dir>/screenshots/<NN>-<slug>-{proto,ds}.png`

When invoked standalone (no parent), default to `audits/prototype/<YYYY-MM-DD>-<slug>/` mirroring `prototype-qa`'s layout.

## Notes

- PNG only. Don't request SVG from Figma — file viewers render PNG more reliably in Markdown previews.
- If a screenshot fetch fails, leave the cell as `_screenshot unavailable_` and continue. Don't abort the whole run for one missing image.
- Image filenames are stable: re-running with the same inputs overwrites cleanly, which is what we want for iterative review.
- If invoked from `prototype-qa`, return the path of `screenshot-diff.md` so the parent can link to it.
