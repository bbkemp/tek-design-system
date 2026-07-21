# Model 2450 System SourceMeter Quick Start Guide

**Doc ID:** `quickstart` · **Doc number:** `2450-903-01` (Rev. E) · **Published:** 2019-08 · **Applies to:** `2450`, `2450-ec`

Generated **2026-07-21** by the `document-pdf` skill from `uploads/pdfs/quickstart.pdf`.

**Applicability note.** This guide documents the **base Model 2450** (cover keywords also list 2450-NFP, 2450-RACK, 2450-NFP-RACK), not the EC variant specifically. It applies to the 2450-EC hardware — same instrument, same front panel, same default screens — but describes none of the electrochemistry test applications, and its interlock section conflicts with the EC kit's do-not-use-interlock warning (flagged inside [wiring-the-interlock](./wiring-the-interlock.md)).

**Page numbering.** The booklet prints no page numbers; all `page_range` values are physical PDF pages (1–26).

## Sections

The guide is organized by edge tabs rather than numbered sections.

| Tab / section | Pages | Chunks |
|---|---|---|
| Safety | 2–3 | *not extracted — see Safety precautions below* |
| (untabbed) Power and environmental specifications | 4 | [power-and-environmental-specs](./power-and-environmental-specs.md) |
| Introduction | 5–6 | [introduction](./introduction.md) |
| Unpack | 7–8 | [unpack-and-inspect](./unpack-and-inspect.md) |
| Connect | 9–21 | [connect-the-instrument](./connect-the-instrument.md), [wiring-the-interlock](./wiring-the-interlock.md), [power-on](./power-on.md), [front-panel-overview](./front-panel-overview.md), [touchscreen-and-home-screen](./touchscreen-and-home-screen.md), [navigation-keys-and-menu](./navigation-keys-and-menu.md), [quickset-and-measure-settings](./quickset-and-measure-settings.md), [help-and-function](./help-and-function.md) |
| Test | 22–23 | [connections-for-testing](./connections-for-testing.md) |
| FAQs and next steps | 24–25 | [faqs-and-next-steps](./faqs-and-next-steps.md) |
| (back matter) Contact information / copyright | 26 | *not extracted — boilerplate; doc number and date captured above* |

## Processed in this pass

**All sections**, in one pass (2026-07-21). 13 chunks.

## Cross-references in the corpus

| Chunk | Cross-links to |
|---|---|
| `touchscreen-and-home-screen` | [`screens/home.md`](../../screens/home.md) (default Home screen anatomy and swipe screens), [`screens/graph.md`](../../screens/graph.md) (entry path from the GRAPH swipe screen to the full-screen Graph) |
| `connections-for-testing` | [`screens/home.md`](../../screens/home.md) (verify-measurement procedure operates the home screen's Source control and Measure area), [`screens/graph.md`](../../screens/graph.md) (Menu > Views > Graph procedure and figure match the corpus Graph screen; confirms its navigation path and buffer-statistics row) |
| `wiring-the-interlock` | [`docs/user-manual/introduction.md`](../user-manual/introduction.md) (EC kit's do-not-use-interlock warning — governs for EC use) |
| `navigation-keys-and-menu` | [`docs/user-manual/home-and-menu-overview.md`](../user-manual/home-and-menu-overview.md) (same default Menu screen; Source-column item discrepancy flagged in the chunk) |

No `screens/menu.md` exists yet; `navigation-keys-and-menu` will gain `related_screens: [menu]` when it lands.

## Safety precautions

Pages 2–3 of the source PDF contain the general Keithley/Tek safety precautions (revision June 2017 — responsible body/operator/maintenance/service definitions, shock hazards, measurement categories, symbol meanings, cleaning). Following the precedent set by the `user-manual` pass, they are not specific to this instrument and are intentionally *not* extracted into a chunk. If needed, refer to the source PDF in `uploads/pdfs/` or treat them as a future `_shared/` corpus asset.
