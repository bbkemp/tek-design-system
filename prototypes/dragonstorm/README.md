# Dragon Storm — GDM9061 reskin work area

Working files and Claude Design drops for the GW Instek **GDM9061** ("Dragon Storm") measurement-screen reskin onto the Tek Design System.

Drop CD HTML exports here (e.g. `measurement-options.html`) so they're readable in-repo for review and Figma translation — files in `~/Downloads` aren't accessible to tooling.

## Sources of truth

- **Corpus (dimensions + content):** [`corpus/sources/gw-gdm9061/`](../../corpus/sources/gw-gdm9061/) — documented screens: `measurement`, `measurement-alt`, `range-select`, `statistics`, `trendchart`, `histogram`, `config-*`. The **device screen is 480×272**; corpus dimensions/proportions supersede design-system spacing for these screens.
- **Reskin brief:** [`audits/design-additions/2026-06-30-gw-gdm9061-reskin/`](../../audits/design-additions/2026-06-30-gw-gdm9061-reskin/) — paint-only reskin spec + the CD prompt.

## screen.html — screen-only standalone (PWA)

`screen.html` + `screen.webmanifest` are a kiosk duplicate of `index.html` (same CD bundle, template edited in place — `index.html` itself is untouched):

- Just the 480×272 LCD framed by the instrument's white plastic bezel, on the front-panel dark grey (`#363a40`) — dev panel hidden, no desk chrome. The bezel is device-proportional and clips at the viewport edge when space is tight: **screen size always wins over the bezel.**
- Save to Home Screen → opens full screen (standalone), landscape, black status bar.
- The LCD scales uniformly (aspect ratio locked, letterboxed in black) and refits on rotate/resize. On touch devices it renders at **physical 1:1** — the real instrument's 95 mm-wide 4.3" panel — whenever the screen is large enough (iPhone landscape, any iPad), falling back to fit-to-viewport when it isn't (iPhone portrait). Desktop browsers can't report monitor DPI, so they keep fit-to-window.
- **Tap the status-bar clock to cycle to the next screen** (all 13, wrapping). Same pattern as the Tek Bench standalone drop.
- **LCD Filter toggle** (right edge in landscape, bottom letterbox in portrait, persisted in localStorage): simulates the real 4.3" TFT — an RGB-subpixel/pixel-gap lattice locked to the 480×272 logical pixels, slight glyph softening, TN-style contrast/saturation shift, and a faint backlight veil.
- Regenerate after an `index.html` refresh by re-running the same template edits (panel-grey wrapper, hidden dev panel, viewport-fit board scale with the true-size cap, bezel chrome, LCD-filter toggle/overlay, `nextScreen` clock handler, scroll/zoom pinning, PWA meta) — don't hand-edit the bundled line.

## Notes

- This is a **faithful device recreation** at corpus dimensions, not a strict bind-everything DS build — use DS colors/fonts where they fit, but the 480×272 layout and control positions come from the corpus/screenshots.
