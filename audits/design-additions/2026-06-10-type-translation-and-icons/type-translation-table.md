# DS-v2 Text Style Translation Table

**Date:** 2026-06-10
**Pulled from:** Figma `3wbYstse9TYKlPtCPpZH5X` (DS v2 published styles)
**Use:** Deterministic lookup for `cd → cc → Figma` translation. **Exact match required**; no snapping.

## The table

| Family | Weight | Size | Line-height | DS-v2 path | Key |
|---|---|---|---|---|---|
| Archivo | SemiBold | 14 | 22 | `text/heading/regular/2xs` | `63b8a849…` |
| Archivo | SemiBold | 16 | 24 | `text/heading/regular/xs` | `c177c117…` |
| Archivo | SemiBold | 20 | 26 | `text/heading/regular/sm` | `c18081dc…` |
| Archivo | SemiBold | 24 | 32 | `text/heading/regular/md` | `0d191ef3…` |
| Archivo | SemiBold | 32 | 40 | `text/heading/regular/lg` | `f543a40f…` |
| Archivo | SemiBold | 40 | 48 | `text/heading/regular/xl` | `473f8c90…` |
| Archivo | SemiBold | 48 | 56 | `text/heading/regular/2xl` | `a2188c3c…` |
| Archivo | SemiBold | 56 | 56 | `text/heading/regular/3xl` | `003acd39…` |
| Archivo | SemiBold | 64 | 64 | `text/heading/regular/4xl` | `864dfe1a…` |
| Archivo | SemiBold | 72 | 72 | `text/heading/regular/5xl` | `ae2bad6b…` |
| Geist | Regular | 10 | 12 | `text/regular/xs` | `492642fa…` |
| Geist | Regular | 12 | 12 | `text/regular/sm` | `a2cf6fd6…` |
| Geist | Regular | 13 | 16 | `text/regular/md` | `4b99ed01…` |
| Geist | Regular | 14 | 20 | `text/regular/lg` | `2b66cff8…` |
| Geist | Regular | 16 | 24 | `text/regular/xl` | `d76315b2…` |
| Geist | Regular | 20 | 32 | `text/regular/2xl` | `1caf41c1…` |
| Geist | Regular | 24 | 32 | `text/regular/3xl` | `602c20d2…` |
| Geist | Regular | 32 | 40 | `text/regular/4xl` | `38e04da7…` |
| Geist | Regular | 40 | 48 | `text/regular/5xl` | `d37167bd…` |
| Geist | SemiBold | 10 | 12 | `text/bold/xs` | `17c1c110…` |
| Geist | SemiBold | 12 | 12 | `text/bold/sm` | `29405b56…` |
| Geist | SemiBold | 13 | 16 | `text/bold/md` | `ec32715e…` |
| Geist | SemiBold | 14 | 20 | `text/bold/lg` | `61f8440e…` |
| Geist | SemiBold | 16 | 24 | `text/bold/xl` | `8cf5e227…` |
| Geist | SemiBold | 20 | 32 | `text/bold/2xl` | `57a197c3…` |
| Geist | SemiBold | 32 | 40 | `text/bold/4xl` | `c56cc1f5…` |
| Geist | SemiBold | 40 | 48 | `text/bold/5xl` | `7457f715…` |
| Geist Mono | Regular | 10 | 12 | `text/mono/xs` | `d67a81cf…` |
| Geist Mono | Regular | 12 | 12 | `text/mono/sm` | `bb61009b…` |
| Geist Mono | Regular | 13 | 16 | `text/mono/md` | `19999dba…` |
| Geist Mono | Regular | 14 | 20 | `text/mono/lg` | `bc19638c…` |
| Geist Mono | Regular | 16 | 24 | `text/mono/xl` | `488ec39e…` |
| Geist | Light | 14 | 20 | `text/light/lg` | `722d95f1…` |

## Gaps flagged (CD-emitted sizes with no exact match)

- **Geist Regular 11 / 13 lh** — between `text/regular/sm` (12) and `text/regular/md` (13). CD's status-bar text. *Proposal:* defer to `text/regular/sm` (12px).
- **Geist Regular 15 / 22 lh** — between `lg` (14) and `xl` (16). Not commonly emitted. Defer to `lg`.
- **Geist SemiBold 11** — between `bold/sm` (12) and `bold/xs` (10). Defer to `bold/sm`.
- **`text/bold/3xl` missing entirely** — Archivo has 3xl in heading; Geist bold/3xl is undefined. Propose adding to the published library.

## Skill update

The `tek-figma-build` skill carries this table verbatim and uses it as a hard lookup. Any size not in the table is a deviation that must be flagged in the additions audit — no silent snap.
