<!--
HOW TO START
1. Copy this file to audits/competitive/<YYYY-MM-DD>-<slug>/report.md (e.g. 2026-06-25-tek-express-vs-keysight-d9040dppc).
2. Fill the sections in order. Delete this comment block and every "→ guidance" line.
3. Evidence lives in the corpus, not here: every factual claim about a product cites a
   `provenance: observed` chunk under corpus/sources/<subject>/ via a relative markdown link,
   in the form  *Source: [`<subject>/screens/<file>.md`](../../../corpus/sources/<subject>/screens/<file>.md).*
   Vendor decks/PDFs go in this folder's assets/ (local-only, gitignored) and are referenced
   in `prior_material`, never committed.
Worked example: audits/competitive/2026-06-25-tek-express-vs-keysight-d9040dppc/report.md
-->
---
class: competitive-audit
provenance: authored-analysis
authored_by: [<owner(s) — people and/or AI agents>]
authored_date: <YYYY-MM-DD>
subjects_compared: [<tek-subject>, <competitor-subject>]
source_corpus:
  - corpus/sources/<tek-subject>/
  - corpus/sources/<competitor-subject>/
prior_material: <path or "none" — any earlier deck/analysis, note if local-only/gitignored>
status: disposable snapshot
---

> ## ⚠️ Authored analysis — not corpus
> **This document is interpretation, authored by <authors> on <date>.** It is opinion and synthesis, not observed fact. The system of record is the cited corpus entries (`provenance: observed`). When this analysis and a corpus entry disagree, the corpus wins — and this file should be corrected.

# Competitive analysis: <Tek product> vs. <Competitor product>

**Authored:** <YYYY-MM-DD> · **Authors:** <names> · **Type:** competitive audit (disposable snapshot)
**Compared:** <Tek product + version> (`corpus/sources/<tek-subject>/`) vs. <Competitor product + version> (`corpus/sources/<competitor-subject>/`)

## How to read this file

→ 2–4 sentences: what kind of comparison this is, what corpus it's built from, and the standing rule — observed claims are citable fact, the verdicts are the authored judgment to argue with. Name any prior material and where its conclusions survive.

## What both products are

→ Shared job-to-be-done in a sentence or two, then a small table: vendor, host platform, standards/scope observed, corpus basis (screen/chunk counts). Cite each product's corpus `index.md`.

## The core structural difference

→ One table contrasting the products on the dimensions that matter (navigation model, mental model, key surfaces, theme), each row traceable to a corpus chunk, followed by a short **authored read** of the biggest divergence.

## Where <Competitor> is ahead

→ Numbered list. Each item: bold claim, 1–3 sentences of evidence, ending with *Source:* links to the observed corpus chunks. Capabilities with no Tek equivalent go here.

## Where <Tek product> is ahead

→ Same format. Include honest caveats where the corpus narrows a claimed edge — flag them as *(authored)*.

## Where they're a wash

→ Bulleted parity items, one line each with a *Source:* citation. Shared weaknesses count too.

## Scorecard (authored judgment)

→ Two-column table: Dimension | Winner (bold, with a parenthetical why). Follow with a **Net (authored)** paragraph tying the result to the redesign backlog / what to do about it.

## Open decisions

→ Required. Anything the sources disagree on, claims that couldn't be verified against the corpus, and judgment calls deferred to the owner. Never resolve source disagreements unilaterally — list them here instead.

## Prior finding (committed)

→ If earlier committed analysis exists, quote its conclusion and state whether this report is consistent with it. Otherwise: "None — this is the first committed comparison."

## Provenance & disposability

→ Restate `provenance: authored-analysis`, link [`audits/README.md`](../../README.md) (path is correct once this file lives in its dated folder), and name the regeneration triggers: new corpus material for either product, a closed gap, recovered prior material.
