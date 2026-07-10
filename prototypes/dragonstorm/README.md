# Dragon Storm — GDM9061 reskin work area

Working files and Claude Design drops for the GW Instek **GDM9061** ("Dragon Storm") measurement-screen reskin onto the Tek Design System.

Drop CD HTML exports here (e.g. `measurement-options.html`) so they're readable in-repo for review and Figma translation — files in `~/Downloads` aren't accessible to tooling.

## Sources of truth

- **Corpus (dimensions + content):** [`corpus/sources/gw-gdm9061/`](../../corpus/sources/gw-gdm9061/) — documented screens: `measurement`, `measurement-alt`, `range-select`, `statistics`, `trendchart`, `histogram`, `config-*`. The **device screen is 480×272**; corpus dimensions/proportions supersede design-system spacing for these screens.
- **Reskin brief:** [`audits/design-additions/2026-06-30-gw-gdm9061-reskin/`](../../audits/design-additions/2026-06-30-gw-gdm9061-reskin/) — paint-only reskin spec + the CD prompt.

## Notes

- This is a **faithful device recreation** at corpus dimensions, not a strict bind-everything DS build — use DS colors/fonts where they fit, but the 480×272 layout and control positions come from the corpus/screenshots.
