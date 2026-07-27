# Dragon Storm (GDM9061) status-bar icons

Clean, self-contained SVG exports of the four status-bar icons from the
Dragon Storm prototype (`prototypes/dragonstorm/index.html`), traced from the
live rendered markup so they match on-screen exactly.

| File | Icon | viewBox | Notes |
|---|---|---|---|
| `usb.svg` | USB / removable storage (`C:` drive) | `0 0 40 24` | The `C` is **outlined to a path** from Iosevka Mono Condensed Bold, so the file is font-independent. |
| `volume.svg` | Volume | `0 0 24 24` | |
| `network.svg` | Computer network | `0 0 24 24` | Clean (connected) state. |
| `network-off.svg` | Network disconnected (network + red ✕) | `0 0 24 24` | Same network glyph with the error-red ✕ overlay drawn as vector strokes. |

## Colors (as they appear)
- Line/stroke: `#afafaf` (neutral)
- Error ✕: `#e74848` — maps to `--tek-colors-ui-error-red`

All strokes are `1.5` (icons) with `round` caps/joins; the ✕ is `1.9`.
Fills are `none` except the outlined `C` and the USB pin dots (`#afafaf`).

Source of truth: the Figma DS-v2 status-bar components. These files are a
faithful export of the prototype render, not a re-draw.
