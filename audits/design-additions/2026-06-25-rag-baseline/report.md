# RAG POC baseline audit — 2026-06-25

**Audited:** 2026-06-25
**Audited surface:** [`corpus/`](../../../corpus/), [`audits/`](../../../audits/), [`.claude/skills/`](../../../.claude/skills/), all RAG-relevant docs ([`CLAUDE.md`](../../../CLAUDE.md), [`README.md`](../../../README.md), [`corpus/README.md`](../../../corpus/README.md), [`audits/README.md`](../../../audits/README.md), [`CONTRIBUTING.md`](../../../CONTRIBUTING.md), [`docs/workflow.md`](../../../docs/workflow.md), [`docs/tek-system-core.md`](../../../docs/tek-system-core.md))
**Audited against:** the experience of a small XFN team (designer / Qt dev / WPF eng / eng mgr / eng lead / UX) using this without one-on-one help
**Method:** four parallel research passes (structure + content conformance · skills + automation · documentation chain · XFN usability scenarios), synthesized

---

## TL;DR

| Dimension | Grade | Headline |
|---|---|---|
| **Content quality** | **A** | 20 documented screens conform to locked `home.md` spec; confidence notes substantive; cross-references resolve; image pairing 100% clean |
| **Skill architecture** | **A-** | All 7 RAG skills declare locked format references; `corpus-intake` routing is table-driven and declarative; corpus/audit boundary crisp |
| **Documentation accuracy** | **C** | Multiple aspirational folders documented but missing (`audits/figma/`, `audits/code/`); multiple real populated folders undocumented (`audits/design-additions/`, `corpus/sources/tek-express/{wireframes,hardware,walkthroughs}/`) |
| **XFN discoverability** | **D** | Root [`README.md`](../../../README.md) never mentions the corpus. Designer, PM, dev scenarios all dead-end at the front door |
| **Retrieval pipeline** | **F** | Corpus is built for LLM consumption but no MCP, embeddings, vector DB, or `/search-rag` skill exists. CLAUDE.md says "in flight" |
| **Process integrity** | **C** | 44-file backlog sits unrouted in [`corpus/_inbox/`](../../../corpus/_inbox/) (8 top-level docs + 36-file `IMG_6999 1/` folder). The system designed to solve "dump and sort" hasn't been used on its own backlog |

**Bottom line:** the bones are right and the content is production-grade. The system-around-the-content is half-finished, and the biggest gap (#1 P0) is that a new contributor cloning the repo will not discover RAG exists.

---

## Strengths worth preserving (do not break)

1. **Locked format reference per skill.** `home.md` for screens, `front-panel.md` for hardware, `user-manual/` for PDFs, `dev-core-api/api/v1.0-2026-05-12/` for APIs. This is the linchpin against drift.
2. **Corpus vs. audit boundary.** Write-once durable vs. dated disposable. Hard separation prevents corpus rot as DS-v2 evolves.
3. **Frontmatter-driven cross-references.** `related_screens`, `related_apis`, `applies_to` enable graph queries at retrieval time without prose parsing.
4. **`corpus-intake` declarative routing.** Table-driven, never silently misroutes, always shows plan before `mv`. The recursion + folder-as-hint extension landed cleanly.
5. **Snapshot versioning.** `api/v1.0-2026-05-12/`, `code/2026-05-12-85a6857/` accumulate, never overwrite. Good for historical queries.
6. **Confidence notes have signal density.** "1551 ps ≠ 1551 ns — likely stub data" is the right level of specificity.
7. **`.gitignore` precisely matches the corpus-vs-local-only contract.** No drift between docs and reality on the ignore side.

---

## P0 — blocks XFN team from finding or using the system

### P0-1 · Root README doesn't mention the corpus

A new designer, PM, or dev cloning the repo will not find RAG. [`README.md`](../../../README.md) is purely about tokens/components/publish-pipeline. No link, no mention, no discoverability path.

**Fix:** Add a "Knowledge corpus" section to root README (~50 words + link to [`corpus/README.md`](../../../corpus/README.md)). Update [`CLAUDE.md`](../../../CLAUDE.md) "What's in flight" to distinguish *authoring* (shipped) from *retrieval* (planned).

This is the only true P0. The remaining items are friction, not blockers — but this one is the first thing an XFN team hits and they never recover without someone walking them through it.

---

## P1 — fix before XFN team starts using heavily

| # | Finding | Location | Fix |
|---|---|---|---|
| P1-2 | **[`audits/README.md`](../../../audits/README.md) is aspirational, not descriptive.** Shows `figma/<date>-<slug>.md` and `code/<date>.md` as the layout — neither folder exists. Doesn't document `design-additions/` which has 12 active .md files across 5 dated folders. | [`audits/README.md`](../../../audits/README.md) | Replace layout block with actual folders (`competitive/`, `design-additions/`, `prototype/`). Move `figma/` and `code/` to a "Planned" section. Document `design-additions/` purpose. |
| P1-3 | **[`corpus/README.md`](../../../corpus/README.md) calls `hardware/`, `walkthroughs/`, `docs/`, `artifacts/` "future" — three of them already exist and are populated.** `tek-express/hardware/`, `walkthroughs/`, and `docs/ui-audit/` are in active use. `wireframes/` exists too and isn't mentioned at all. | [`corpus/README.md`](../../../corpus/README.md) line 23 | Move populated classes out of "future" and into the layout block. Add `wireframes/` with a note on its format. |
| P1-4 | **No documented retrieval path.** README goal is "feed the org-wide MCP RAG" but there's no MCP, embeddings, vector DB, or `/search-rag` skill. CLAUDE.md says it's "in flight." A new contributor can't tell whether the corpus is for human reading or actually queryable. | [`corpus/README.md`](../../../corpus/README.md), [`CLAUDE.md`](../../../CLAUDE.md) | **See Open decision 1.** At minimum, document current state: "Retrieval pipeline is Phase 2. Until then, corpus is read by humans and Claude Code sessions via direct file access." |
| P1-5 | **`uploads/recordings/` is a corpus dead-end.** `corpus-intake` routes audio/video there with the suggestion "transcribe externally then re-intake the transcript." No skill consumes this folder. Will produce orphaned audio files indefinitely. | [`.claude/skills/corpus-intake/SKILL.md`](../../../.claude/skills/corpus-intake/SKILL.md) | **See Open decision 2.** Either build `/document-recording` or refuse audio at intake. |
| P1-6 | **`dev-core-api/` and `tek-design-system/` break the "products are folders" model.** README says products. These are an internal service and a repo. There's no documented taxonomy for non-product subjects. | [`corpus/sources/dev-core-api/`](../../../corpus/sources/dev-core-api/), [`corpus/sources/tek-design-system/`](../../../corpus/sources/tek-design-system/) | **See Open decision 3.** Either move to `corpus/services/` or document a subject-type taxonomy in README. |
| P1-7 | **No idempotence statement anywhere.** Can a contributor re-run `/document-screens` on the same product? Will it overwrite, append, skip? The skill doesn't say. Contributors will fear re-running or run twice and corrupt output. | All `document-*` SKILL.md files, [`corpus/README.md`](../../../corpus/README.md) | Add "Idempotence" clause: skills are safe to re-run; output is regenerated from current uploads. |
| P1-8 | **No completion criteria.** "How do I know a screen is done?" isn't documented. When can the contributor commit? Is `index.md` regeneration mandatory? Are pending confidence notes blockers? | [`corpus/README.md`](../../../corpus/README.md) | Add a "Process completion" checklist: screen.md committed, downscaled image committed, confidence notes legible, `index.md` regenerated, no untracked uploads. |
| P1-9 | **No undo/recovery doc.** If a skill produces a hallucinated control and a contributor commits, what's the fix? Revert? Edit? Re-run? Not documented. | [`corpus/README.md`](../../../corpus/README.md), [`CONTRIBUTING.md`](../../../CONTRIBUTING.md) | Add "Undo and recovery" section: skill outputs are markdown — fix in place or revert the commit; `uploads/` originals stay local so re-runs are reproducible. |
| P1-10 | **No RAG-specific read order.** CLAUDE.md prescribes a global read order; none of it covers the corpus. Designer + PM + dev scenarios all hit this. | [`CLAUDE.md`](../../../CLAUDE.md) "Read order" section | Add an "If you're touching RAG" branch: CLAUDE.md → corpus/README.md → relevant skill SKILL.md → existing canonical reference. |
| P1-11 | **`document-walkthrough` format-lock is in future tense** ("locked by the first processed walkthrough") even though four walkthroughs are already in `tek-express/walkthroughs/`. | [`.claude/skills/document-walkthrough/SKILL.md`](../../../.claude/skills/document-walkthrough/SKILL.md) | Point the lock at a specific file — e.g. `corpus/sources/tek-express/walkthroughs/tek-products-walkthrough.md`. |
| P1-12 | **44 unrouted files sit in [`corpus/_inbox/`](../../../corpus/_inbox/).** The intake system hasn't been used on its own backlog. Breakdown: 8 top-level docs (1 .docx + 4 .pdf manuals + 3 .chm Online Help files) + 36-file `IMG_6999 1/` folder of photos. | [`corpus/_inbox/`](../../../corpus/_inbox/) | Run `/corpus-intake` on the backlog. If anything is intentionally held, document why in [`corpus/_inbox/README.md`](../../../corpus/_inbox/README.md). **See also P2-22** — three `.chm` files surface a routing-table gap. |

---

## P2 — paper cuts and scaling friction

| # | Finding | Location | Fix |
|---|---|---|---|
| P2-13 | **Original photos are gitignored** — devs can't inspect detail without asking Bryan. Forces one-on-one for scenarios that should be self-serve. | `.gitignore`, [`corpus/README.md`](../../../corpus/README.md) | **See Open decision 4.** Git LFS for high-res photos, or document "request originals from Bryan" workflow. |
| P2-14 | **No orchestration / "process all" mode.** Adding a new product = 3–5 separate skill invocations. No checklist, no chain. | `corpus-intake` SKILL.md | Optional post-intake step: "Process all routed assets now? [Y/n]" that chains the relevant `document-*` skills. |
| P2-15 | **Skills don't explicitly say "create output dir if missing."** Each `document-*` skill assumes `screens/`, `docs/<doc-id>/`, `walkthroughs/` exist. Untested case is undocumented. | All `document-*` SKILL.md | Add `mkdir -p` step to each Process section. Or have `corpus-intake` scaffold the full output skeleton on product creation. |
| P2-16 | **Empty / orphan upload folders.** `2450-ec/uploads/{artifacts,transcripts}/`, `tek-express/uploads/{artifacts,api-specs}/`. `.gitkeep` only. Suggests commitment that hasn't materialized. | Multiple | Delete or document timeline. |
| P2-17 | **`related_modules: []` field in some screens, not others.** Inconsistent with canonical `home.md`. | tek-express screens | Standardize or remove. |
| P2-18 | **No `corpus/INDEX.md` product inventory.** A PM can't see "which products exist? at what depth? with what audits?" — has to enumerate by hand. | (new file) | Add auto-generated `corpus/INDEX.md` with a table per product showing screens / pdfs / walkthroughs / audits status. |
| P2-19 | **No state-variation detection logic documented.** Firmware UI change — is it a new screen or a variant? Skill doesn't say how to decide or when to bump the canonical `image:`. | [`.claude/skills/document-screens/SKILL.md`](../../../.claude/skills/document-screens/SKILL.md) | Add a detection rule + canonical-image-update guidance. |
| P2-20 | **Two-person collision on `index.md`** when both edit the same product. No documented recovery (re-run the skill, not hand-merge). | [`CONTRIBUTING.md`](../../../CONTRIBUTING.md) | One-line note: "index.md conflicts → re-run the skill, don't hand-merge." |
| P2-21 | **`sips` dependency is macOS-only and undocumented.** Linux/Windows contributor will hit a cryptic error. | `document-screens`, `document-hardware` | Add system-requirement note. ImageMagick fallback as an alternative. |
| P2-22 | **`.chm` (Windows Compiled HTML Help) isn't in the corpus-intake routing table.** Three .chm files sit in the inbox (`TekExpress DisplayPortTx.chm`, `TekExpress DisplayPortTx 2.1.chm`, `D9020USBC-USB3-Test-Software-Online-Help-latest.chm`) — they'd hit "ask" today. Real gap for a Windows-software shop; .chm is Tek's primary embedded-help format. | [`.claude/skills/corpus-intake/SKILL.md`](../../../.claude/skills/corpus-intake/SKILL.md) class detection table | Add `.chm` to the routing table. Likely `uploads/pdfs/` (treat as a manual/help document) or a new `uploads/help/` class if downstream processing needs HTML extraction. |
| P2-23 | **No competitive-audit template or worked example.** PM scenario has nowhere to start when authoring one. | `audits/competitive/` | Drop a `templates/comparison-report.md` skeleton; reference from [`audits/README.md`](../../../audits/README.md). |
| P2-23 | **No "manual pairing pass" owner or schedule documented.** Multiple confidence notes reference it; nobody owns it. | [`corpus/README.md`](../../../corpus/README.md) | Document who runs it + on what trigger. |
| P2-24 | **No scaling notes.** Works at 10 products / 100 screens — at 50 products? Folder structure may need to evolve and contributors will improvise. | [`corpus/README.md`](../../../corpus/README.md) | One-paragraph "Scaling notes" section flagging the inflection point. |

---

## Open decisions — Bryan's call, not the auditor's

These came up in multiple agents and have no obviously-right answer.

1. **Is retrieval Phase 2 or in scope for this POC?** If Phase 2, mark it explicitly in CLAUDE.md and `corpus/README.md` — change the corpus goal from "feed the MCP RAG" to "prepare a corpus that will feed the MCP RAG when retrieval ships." If in scope, this POC needs an embeddings/MCP/search step before any real use.
2. **`uploads/recordings/` — build `/document-recording` or refuse audio at intake?** Build = mandatory Whisper API call (cost, latency, network). Refuse = clearer handoff, more friction. Current "land it and tell the user to transcribe externally" is the worst of both.
3. **Are `dev-core-api/` and `tek-design-system/` "products" or "subjects"?** If subjects, the taxonomy needs documenting (and probably a folder rename: `corpus/services/` or similar). If products, README needs to broaden the definition of "product."
4. **Original high-res photos — git LFS or stay gitignored?** Affects every downstream-dev scenario. LFS adds repo complexity; gitignored forces one-on-one with Bryan to share.
5. **Competitor products — corpus (`corpus/sources/keysight-<sku>/`) or audit-only?** Conventions PR #77 said "both." Real practice: nobody's done either yet. Pick one as the default and document the exception.
6. **Who owns the "manual pairing pass" and when?** Bryan, a dedicated analyst, post-merge automation, or never? Affects whether contributors should treat unpaired confidence notes as blockers.
7. **Index.md regeneration — distributed (current) or centralized via a `refresh-index` skill?** Current works for solo work; falls apart on parallel PRs. Two-person collision is rare today but ~certain at 4-6 contributors.

---

## Recommended sequence (if you fix nothing else)

1. **P0-1** — README link to corpus. *5 minutes, biggest unblock for XFN.* **(Included in this PR.)**
2. **P1-2, P1-3** — fix `audits/README.md` and `corpus/README.md` aspirational/missing folder docs. *15 minutes, makes onboarding actually accurate.*
3. **P1-4** — decide retrieval scope (Open decision 1) and document it. *Your call, but write it down somewhere; current ambiguity is the worst state.*
4. **P1-12** — run `/corpus-intake` on the 44-file backlog. *If the intake skill can't handle its own backlog, that's the truest test we have.*
5. **P1-5** — decide on recordings (Open decision 2).
6. **P1-6** — decide on the `dev-core-api` / `tek-design-system` taxonomy (Open decision 3).
7. Everything else can wait.

---

## Method note

Audit produced via four parallel research agents (Explore subagents) each tasked with a different lens:

1. **Structure + content conformance** — full tree of `corpus/`, `audits/`, `.claude/skills/`; spot-check 6 screens against locked `home.md` format; cross-product `applies_to` usage; gitignore vs. doc alignment.
2. **Skills + automation** — read every RAG-relevant SKILL.md; map input/output paths per skill; check inter-skill handoffs; flag hidden assumptions; check `.github/workflows/` for RAG impact.
3. **Documentation chain** — read CLAUDE.md, root README, CONTRIBUTING, docs/workflow.md, docs/tek-system-core.md, corpus/README, audits/README, corpus/_inbox/README; check self-consistency, accuracy vs. on-disk, terminology consistency, gap analysis.
4. **XFN usability scenarios** — 7 role-based walk-throughs (designer onboarding, dev screen lookup, PM comparison, new product, screen update, two-person collision, retrieval discovery); flag friction per scenario; synthesize cross-cutting findings.

Findings synthesized across the four passes. P0/P1/P2 severity assigned by impact on XFN-team scaled use. Open decisions surfaced where multiple agents flagged the same ambiguity without an obviously-right answer.

---

## Resolutions — Bryan's decisions on the seven open questions

Captured 2026-06-25, in chat.

| # | Decision | Resolution | Status |
|---|---|---|---|
| 1 | Retrieval scope | **Lightweight bridge skill (`/search-rag`) now**; real vector retrieval is Phase 2 | Skill build queued |
| 2 | Subject taxonomy | **Rename "products" → "subjects"** — products, services, repos, competitors all use the same `uploads/<class>/` schema | Landed in corpus/README + audits/README + README + CLAUDE.md (this PR) |
| 3 | Recordings (`uploads/recordings/`) | **Refuse audio/video at intake.** Future `/document-recording` skill on high-priority follow-up list | Landed: corpus-intake refuses `.m4a`/`.mp3`/`.wav`/`.mp4`/`.mov` etc. (this PR) |
| 4 | High-res photos | **Stay gitignored.** Formalize a cheap shared location (with reference links from screen .md) as a follow-up | Doc-only; deferred |
| 5 | Competitor products | **Always full corpus folder** (`corpus/sources/<vendor>-<sku>/`). Symmetric treatment with Tek subjects | Landed in corpus/README "Competitor products" section (this PR) |
| 6 | Manual-pairing pass | **Build `/pair-manual` skill.** Until then, social rule = whoever processes 2nd of (screens, manual) does the link | Skill build queued; social rule documented in corpus/README "Manual pairing" (this PR) |
| 7 | `index.md` regeneration | **Hybrid** — skills update incrementally + new `/refresh-index` skill + CI gate validates freshness on every PR | Skill + CI build queued; idempotence statement landed in all `document-*` skills (this PR) |

### What the rename PR (`chore/rename-rag-to-corpus`) resolves

Lands the doc-level and skill-level resolutions inline with the `corpus/`-rename:

- **Decisions 2, 3, 5, 6** — fully resolved in docs + skill behavior.
- **Decisions 1, 6, 7** — partial: doc framing + social rules in place; new skills (`/search-rag`, `/pair-manual`, `/refresh-index` + CI) on the follow-up queue.
- **Decision 4** — doc note added; shared-location formalization deferred.

### Follow-up PRs queued

| PR | Scope | Decision |
|---|---|---|
| `feat(skill): search-rag` | Bridge skill — grep + frontmatter match + chunk return | Decision 1 |
| `feat(skill): pair-manual` | Bidirectional screen ↔ manual-chunk linking, idempotent | Decision 6 |
| `feat(skill,ci): refresh-index + CI gate` | Centralized index regeneration + per-PR consistency check | Decision 7 |
| `chore: cheap-shared-photo-storage` | Pick + document a low-cost shared location for high-res originals | Decision 4 |

Update this resolutions block as those PRs land.
