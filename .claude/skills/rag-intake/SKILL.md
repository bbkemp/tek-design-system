---
name: rag-intake
description: Sort a pile of mixed files dropped into rag/_inbox/ into the right rag/sources/<product>/uploads/<class>/ folder (and audits/competitive/ for competitor analysis). Classifies each file by filename + extension, shows a routing plan, waits for OK, then moves. Auto-creates new product folder skeletons (e.g. keysight-<sku>/) when a new SKU is detected. Use when you have a stack of manuals, transcripts, decks, screen photos, and vendor docs to drop into the corpus without manually sorting them.
---

# RAG intake

Turns the "dump it all in one place" workflow into routed corpus uploads. Drop anything into `rag/_inbox/`, run `/rag-intake`, confirm the routing plan, files land in the right `uploads/<class>/` folder.

This skill **only sorts and moves**. Per-class processing (`/document-screens` etc.) runs after.

## Inputs

The user provides:
- Files dropped into `rag/_inbox/` at the repo root. Anything — PDFs, transcripts (.docx/.vtt/.srt/.txt), slide decks (.pptx/.key), screen photos (.png/.jpg), API specs (.yaml/.json), competitor docs.

Optional:
- `--dry-run` to print the routing plan and exit without moving anything.
- `--strict` to fail loudly on any ambiguous file rather than asking — useful when invoking from a script.

## Hard rules

1. **Never silently misroute.** Every file's destination must appear in the routing plan, and the user must say go before any `mv`. If a file is ambiguous (no clear product, no clear class), surface it as a question — do not best-guess.
2. **Corpus vs. audit boundary is load-bearing.** Vendor-authored manuals/datasheets go into `rag/sources/<vendor>-<sku>/uploads/pdfs/` (corpus, as-is). Tek-authored comparison decks/matrices/critiques go into `audits/competitive/<YYYY-MM-DD>-<slug>/assets/` (audit, interpretation, disposable). Crossing this line rots the corpus.
3. **Auto-create new product folder skeletons.** When a filename surfaces a new SKU (e.g. `keysight-b2961a`), scaffold `rag/sources/<sku>/uploads/{pdfs,transcripts,photos,artifacts,api-specs}/.gitkeep` before the move. Include this in the plan so the user sees what's being created.
4. **The inbox is gitignored.** Files in `rag/_inbox/` never get committed. Same applies to everything that lands under `uploads/`. Only the skeleton `.gitkeep` files and processed markdown make it to git.
5. **One file → one destination.** Never copy. Always `mv`. After the run, the inbox is empty (or holds only files the user explicitly declined to route).
6. **No content peeking on first pass.** Classification is filename + extension only. If that's not enough, ask. Do not open PDFs, parse docx XML, or run OCR — that's the job of the downstream processing skills.

## Process

### 1. Discover

```bash
ls -la rag/_inbox/
```

Skip `.gitkeep` and `.DS_Store`. If empty, report "no files to route" and exit.

### 2. Classify each file

Two dimensions per file: **product** and **class**.

#### Product detection (filename keywords, case-insensitive)

| Match | Product folder |
|---|---|
| `tekexpress`, `tek-express`, `tekrx` | `rag/sources/tek-express/` |
| `2450` (and not `2450-`+something-else) | `rag/sources/2450-ec/` |
| `keysight` + a model token (e.g. `B2961A`, `B2901B`, `33500B`, kebabbed to `keysight-b2961a`) | `rag/sources/keysight-<sku>/` (auto-create if missing) |
| `agilent` + a model token | `rag/sources/agilent-<sku>/` (treat as same product family lineage; auto-create if missing) |
| Two or more product names in the filename, or any of `vs`, `versus`, `comparison`, `compet`, `matrix`, `benchmark` | **Audit** — see Audit detection below |
| No product marker | **Ask the user** which product, or whether it's product-agnostic |

#### Class detection (extension + filename keywords, case-insensitive)

| Extension | Default class | Override keywords |
|---|---|---|
| `.pdf` | `uploads/pdfs/` | If filename contains `transcript`, route to `uploads/transcripts/` instead |
| `.docx`, `.doc` | `uploads/transcripts/` | If filename contains `manual`, `guide`, `spec`, `datasheet` → `uploads/artifacts/` (Word manuals are unusual; flag in plan) |
| `.vtt`, `.srt`, `.txt` | `uploads/transcripts/` | If filename contains `openapi`, `swagger` → `uploads/api-specs/` |
| `.pptx`, `.key`, `.ppt` | `uploads/artifacts/` | — |
| `.png`, `.jpg`, `.jpeg`, `.webp`, `.heic` | `uploads/photos/` | — (hardware photos still go to `photos/`; the document-screens skill handles the split) |
| `.yaml`, `.yml`, `.json` | **Ask** | If filename contains `openapi`, `swagger`, `api`, route to `uploads/api-specs/` without asking |
| `.ai`, `.sketch`, `.fig`, `.zip`, `.dwg`, `.dxf` | `uploads/artifacts/` | — |
| Anything else | **Ask** | — |

#### Audit detection (overrides product routing)

Any of these trigger an audit destination instead of corpus:
- Filename matches two or more product names (e.g. `TekExpress-vs-Keysight-B2961A.pptx`).
- Filename contains `vs`, `versus`, `comparison`, `compet`, `matrix`, `benchmark`.
- Filename contains `audit` or `analysis` AND a competitor name.

Destination: `audits/competitive/<YYYY-MM-DD>-<slug>/assets/<original-filename>`.
- `<YYYY-MM-DD>` is today's date.
- `<slug>` is kebab-cased from the dominant comparison subject in the filename (e.g. `tek-express-vs-keysight-b2961a`).
- If multiple competitive-analysis files arrive in the same intake run, group them under the same audit folder when their slugs would match; otherwise create separate folders.

### 3. Build the routing plan

A Markdown table with columns: `Filename | Detected product | Class | Destination | Action`.

`Action` is one of: `move`, `new-skeleton + move` (auto-create product folder), `new-audit + move` (auto-create audit folder), `ask`.

Group the rows by destination. Any `ask` rows go in a separate **Needs input** section at the bottom of the plan with the specific question.

### 4. Wait for confirmation

Print the plan. Stop. Wait for the user to:
- Say `go` (or `yes`, `ok`, `do it`, `merge`) — execute the plan.
- Say `skip <filename>` to leave specific files in `_inbox/`.
- Override a row by saying e.g. `route foo.pdf to keysight-33500b/uploads/pdfs/`.
- Cancel with `cancel` / `no` / `stop`.

For any `ask` rows, the user must answer before the plan can execute. If `--strict` was passed, error out instead.

### 5. Execute

For each row:

```bash
# If new-skeleton, scaffold first:
mkdir -p rag/sources/<sku>/uploads/{pdfs,transcripts,photos,artifacts,api-specs}/
touch rag/sources/<sku>/uploads/{pdfs,transcripts,photos,artifacts,api-specs}/.gitkeep

# If new-audit, scaffold first:
mkdir -p audits/competitive/<YYYY-MM-DD>-<slug>/assets/
touch audits/competitive/<YYYY-MM-DD>-<slug>/assets/.gitkeep

# Then move:
mv "rag/_inbox/<file>" "<destination>"
```

Quote every path — filenames frequently contain spaces, parens, or ampersands.

### 6. Report

Print the final disposition table with status per row (`moved`, `skipped`, `failed: <reason>`). Run `git status` and include its output so the user can confirm:
- All routed files are gitignored (no untracked uploads).
- Any auto-created `.gitkeep` skeletons show as untracked (those need to be committed if the new product folder is being introduced).

Suggest next steps based on what landed:
- Files in `uploads/photos/` → `/document-screens <product>`
- Files in `uploads/pdfs/` → `/document-pdf <product> <filename>`
- Files in `uploads/transcripts/` → `/document-walkthrough <product> <filename>`
- Files in `audits/competitive/` → no auto-skill yet; write `report.md` by hand.

## Edge cases

| Case | Behavior |
|---|---|
| File extension recognized but product unclear | Ask: "Which product?" Offer the existing product folders as a numbered list plus "new product (specify SKU)". |
| Two files in the same intake have identical filenames | Append `-2`, `-3` etc. to the destination filename. Note in the plan. |
| Filename includes a date prefix (`20260601-meeting.docx`) | Strip prefixes for keyword detection but preserve the original filename on disk. |
| New SKU detected but the kebab form is ambiguous (e.g. `B2961A-7USB` could be a single SKU or two) | Ask for confirmation before scaffolding. Wrong skeletons are cheap to delete but cluttering. |
| File looks like a duplicate of something already in the destination | Check filename + size. If both match, ask whether to overwrite, rename, or skip. |
| File is a `.DS_Store`, `Thumbs.db`, or `__MACOSX/` folder | Delete it without asking. |
| Encrypted ZIPs or password-protected PDFs | Detect with a quick header check, ask whether to route as-is (will be unusable to processing skills) or hold in `_inbox/`. |

## Output template

```markdown
## Routing plan — <N> file(s) found

### Auto-route (will execute on `go`)
| Filename | Product | Class | Destination | Action |
|---|---|---|---|---|
| ... | ... | ... | `rag/sources/.../uploads/.../<file>` | move |

### Needs input
- `<filename>` — <specific question>

### New folders to create
- `rag/sources/<new-sku>/` (full uploads/ skeleton)
- `audits/competitive/<date>-<slug>/`

Reply `go` to execute, `skip <file>` to hold any back, or override individual rows.
```

After execution:

```markdown
## Done

| Filename | Destination | Status |
|---|---|---|
| ... | ... | moved |

`git status` shows: <summary>

Next steps:
- <product> has new photos → `/document-screens <product>`
- ...
```

## What this skill does NOT do

- Process file content. That's `/document-screens`, `/document-pdf`, `/document-walkthrough`, etc.
- Extract metadata, OCR, or peek inside binaries.
- Move files OUT of `uploads/` (one-way intake only).
- Create or modify `index.md` (that's the per-product processing skills' job).
- Decide whether a file is "worth" adding. Routing only; curation is the user's call.

## See also

- [`document-screens`](../document-screens/SKILL.md) — runs after photos land in `uploads/photos/`.
- [`document-pdf`](../document-pdf/SKILL.md) — runs after manuals land in `uploads/pdfs/`.
- [`document-walkthrough`](../document-walkthrough/SKILL.md) — runs after transcripts land in `uploads/transcripts/`.
- [`document-api`](../document-api/SKILL.md) — runs after API specs land in `uploads/api-specs/`.
- [`document-hardware`](../document-hardware/SKILL.md) — runs against `uploads/photos/` for hardware shots.
- [`rag/README.md`](../../../rag/README.md) — corpus layout, conventions, corpus-vs-audit boundary.
- [`audits/README.md`](../../../audits/README.md) — audit layout including `audits/competitive/`.
