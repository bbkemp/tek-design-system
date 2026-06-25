# TekExpress AppEmulator — UI Component Report (Audit)

**Doc ID:** `ui-audit` · **Source:** `uploads/pdfs/UI-app-emulator-audit.pdf` · **Published:** May 2026 · **Prepared for:** UX Design Team · **Applies to:** `tek-express`

Generated **2026-06-01** by the `document-api` ✕ `document-pdf` skill pattern from the source PDF (8 pages, 2.8 MB) stashed at `uploads/pdfs/` (gitignored).

> **Type clarification.** This PDF is a **UI component audit** — a structured inventory of the legacy TekExpress AppEmulator UI prepared as UX-design reference material. It is **not** a user manual. The audit is content-as-corpus: itself an interpretation layer, captured here durably because it predates the Tek Design System v2 redesign and was authored as a stable artifact.

## Summary totals (from page 8 of the audit)

| Category | Distinct types | Total instances |
|---|---|---|
| Navigation | 4 | ~98 |
| Right-rail toolbar buttons | 3 | 25 |
| Inline teal pill buttons | 16 labels | 22 |
| Outlined pill buttons | 2 | 2 |
| Icon buttons | 6 | 39 |
| Form inputs | 5 | ~60 |
| Data display | 6 | ~45 |
| Feedback & overlays | 1 | 1 |
| **Total** | **43 distinct component types** | **~292 total instances** |

## Screen counts (from page 1)

- 11 distinct screens audited.
- 12 screenshots reviewed.

The audit's 11-screen count corresponds to the 11 *base* screens in the live application. The 17-chunk corpus under `screens/` includes those 11 plus 5 dialog/sub-dialog surfaces and 1 minimised-window state that the audit did not enumerate as separate screens.

## Sections (chunks)

| Section | Chunk |
|---|---|
| Screen Inventory (11 screens with descriptions + category tags) | [screen-inventory](./screen-inventory.md) |
| Navigation Components | [navigation-components](./navigation-components.md) |
| Right-Rail Toolbar Buttons | [right-rail-toolbar](./right-rail-toolbar.md) |
| Inline Teal Pill Action Buttons | [inline-teal-pill-buttons](./inline-teal-pill-buttons.md) |
| Outlined Pill Buttons (non-teal) | [outlined-pill-buttons](./outlined-pill-buttons.md) |
| Icon Buttons | [icon-buttons](./icon-buttons.md) |
| Form Input Components | [form-inputs](./form-inputs.md) |
| Data Display Components | [data-display](./data-display.md) |
| Feedback & Overlay Components | [feedback-overlays](./feedback-overlays.md) |

## How this audit pairs with the screen corpus

Every component-category chunk in this audit references one or more screens (the audit's "Screens" or "Screen / Trigger" column). Those references map directly to the chunks under `screens/<id>.md`. After this PR lands, each screen `.md`'s `## Manual references` section is back-updated to cite the relevant audit chunks here — the bidirectional loop completes.

Notable audit-vs-screen-corpus discrepancies:

- **Reports panel tab content** — the audit's labels for "Configuration" vs. "View Settings" tabs do not match the live screenshots (Bryan's photo 19 with filename `Reports-Configuration` shows Report Update Mode, but the audit attributes those controls to View Settings). Flagged in [`reports-configuration.md`](../../screens/reports-configuration.md) and [`reports-view-settings.md`](../../screens/reports-view-settings.md). The audit may have swapped tabs in its prose; this corpus trusts the live screenshots.
- **Audit dialog ≠ corpus dialog count** — the audit lists 11 base screens; the corpus has 17 chunks (the audit doesn't break out dialogs into their own entries, instead treating them as state within their parent screen).
