# tek-express — service index

Tek Express (Windows PC software) — corpus subject scaffolded **2026-05-13** ahead of the redesign onto Tek Design System v2.

## Goal

Phase 1 of the Tek Express redesign: transition the legacy UI to DS-v2 while preserving most user flows and functionality. Some UI reorganization is in scope. The RAG corpus captures the **as-is** state so the redesign work has grounded source-of-truth context.

## Scaffolded — drop assets locally

The `uploads/` folder is gitignored. Drop your assets in via Finder / drag-and-drop on your Mac. They never enter Git, only the processed markdown outputs do.

| Path | What goes here | Skill that processes it |
|---|---|---|
| `uploads/photos/` | PC screenshots — one per screen, dialog, wizard step. PNG / JPG fine. | [`document-screens`](../../../.claude/skills/document-screens/SKILL.md) |
| `uploads/pdfs/` | User guide, help PDF, installer help, exported online help. | [`document-pdf`](../../../.claude/skills/document-pdf/SKILL.md) |
| `uploads/transcripts/` | Recorded walkthrough transcripts. Plain text, VTT, SRT, or speaker-attributed dialogue all work. | [`document-walkthrough`](../../../.claude/skills/document-walkthrough/SKILL.md) |
| `uploads/artifacts/` | Source design files — .ai, .sketch, .xd, .fig exports, legacy mockups. | `document-artifact` (planned P2) |
| `uploads/api-specs/` | Backend OpenAPI / Swagger spec if Tek Express talks to one. | [`document-api`](../../../.claude/skills/document-api/SKILL.md) |
| *(tell me path/URL)* | Tek Express source repo, if Bryan has access. | [`document-repo`](../../../.claude/skills/document-repo/SKILL.md) |

## Documented screens

*pending* — populated by `document-screens` once screenshots are in `uploads/photos/`.

## Documented hardware

*pending* — for PC software, the "hardware" view documents the host machine's relevant features: minimum specs, expected display resolutions, OS support matrix. Populated by `document-hardware` if applicable; may also live as a manual chunk instead.

## Documented manual sections

*pending* — populated by `document-pdf` once `uploads/pdfs/` contains the user guide.

## Documented walkthroughs

*pending* — populated by `document-walkthrough` once `uploads/transcripts/` contains a transcript. Especially important for Tek Express: the walkthrough Bryan referenced will anchor the user-flow preservation requirement during redesign.

## API snapshots

*pending* — if Tek Express has a backend API.

## Code snapshots

*pending* — if a Tek Express source repo is available.

## Cross-product applicability

`applies_to: [tek-express]` — Windows PC software. Set narrowly; if a flow or screen turns out to be shared with other Tek desktop apps, the relevant chunk's `applies_to` array gets expanded.

## Redesign context (for downstream consumers)

When CD or CC consumes this corpus for the Phase-1 redesign:

- **User flows are preserved** — the walkthroughs in this folder are the source of truth for "what the user is trying to do." Redesign that breaks a documented flow is a regression.
- **UI reorganization is in scope** — screens may move, regroup, or rename. Cross-references between screens may change. The corpus documents the as-is; the redesign deliverable lives under `audits/` or `prds/`, not in this folder.
- **DS-v2 is the design target** — the `prototype-qa` audit against this corpus is how we measure DS coverage. Gaps surface as new-primitive proposals.
- **Functionality stays** — Phase 1 is design transition, not feature change. Any feature delta gets surfaced explicitly, not silently shipped.
