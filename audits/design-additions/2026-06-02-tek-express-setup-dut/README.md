# 2026-06-02 — TekExpress Setup › DUT redesign additions

Claude Design (CD) output for the TekExpress AppEmulator redesign, captured 2026-06-02 against the v3 prompt.

**Source bench:** `api.anthropic.com/v1/design/h/5heFy-8QmlZt3yQnOSNatg` (project "Tek Express 2"). Full bundle is ~6 MB and includes a multi-screen build (`TekExpress AppEmulator.html` + v1–v4), a `ds/` folder with `@bbkemp/ui` built artifacts, and a `qa/` folder of bug-fix screenshots. Only the files needed for review live in this folder.

## Contents

| File | What it is |
|---|---|
| [`tek-express-setup-dut.html`](./tek-express-setup-dut.html) (53 KB) | Standalone format-lock screen — no app bundler, just the Setup › DUT page. Read this for screen anatomy. |
| [`v3.html`](./v3.html) (596 KB) | Full multi-screen app build — every TekExpress screen + dialogs + run engine + tek-plot waveform. React-bundled inline. |
| [`tek-express-redesign-additions.md`](./tek-express-redesign-additions.md) (24 KB) | **THE additions audit**: 5 proposed tokens + 13 proposed components, each with ✓/⚠ confidence flag, justification, anatomy, states, events, closest existing primitive. |
| [`tek-express-setup-dut-notes.md`](./tek-express-setup-dut-notes.md) (20 KB) | Flow-preservation map (legacy → redesign control mapping), container-breakpoint rationale, 11 open questions, full corpus-fidelity QA pass with 9 invented-then-corrected items. |
| [`tek-express-build-spec.md`](./tek-express-build-spec.md) (10 KB) | Verbatim corpus content per screen — Test Selection tree, Acquisitions table rows, Probe Config, Email Settings, Status log lines, Results table rows. |
| [`v3-rag-audit.md`](./v3-rag-audit.md) | My internal audit of v3 against the RAG corpus. Includes a 2026-06-04 amendment retracting two F grades that were based on incomplete information (the bench wasn't unpacked yet). |

## Decisions captured here

- **Nav IA reverted to legacy 5-pill vertical side-nav** (2026-06-04, Bryan). Plots is restored as a top-level panel; wireframe's horizontal 4-tab top nav was rolled back.
- **Plots-in-Results** is the answered question — CD renders the DPOJET waveform inline within Results, with cursors + readout per `plots.md`.
- **`tek-plot` moved into scope** (2026-06-03). New `--tek-color-plot-trace-1` token proposed alongside.
- **Start Test colour reverted to filled blue** (2026-06-03, Bryan) — corpus had green but DS consistency wins.

## Figma file

This artifact is the source of [`Tek-Express-Update`](https://www.figma.com/design/such8xhIcxqICfsPKUWQ9B/Tek-Express-Update) in the Tektronix org (3 pages: Setup › DUT screen, Parts catalog, Additions audit).
