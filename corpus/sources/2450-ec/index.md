# 2450-EC — screen index

Generated **2026-05-05**. Two screens documented; the rest are referenced via `child_screens` and pending the next pass of the `document-screens` skill against the remaining photos in `uploads/photos/`.

## Screen graph

```
home  (readout)                           ← navigational root
├── graph  (graph)                        ← documented
│   ├── graph-data                        ← pending
│   ├── graph-scale                       ← pending
│   └── graph-trigger                     ← pending
├── menu                                  ← pending
├── quickset                              ← pending
├── help                                  ← pending
├── measure-range  (dialog)               ← pending  (overlay; reached by tapping Range)
├── source-edit    (dialog)               ← pending  (overlay; reached by tapping a source tile)
├── buffer-picker  (dialog)               ← pending  (overlay; reached from buffer-name in status bar / buffer row)
└── trigger-config (dialog)               ← pending  (overlay; reached from CONT trigger pill)
```

## All documented screens

| screen_id | screen_title | screen_type | function_state |
|---|---|---|---|
| [home](screens/home.md) | Home | readout | MEASURE CURRENT 2-WIRE |
| [graph](screens/graph.md) | Graph | graph | MEASURE CURRENT 2-WIRE *(inferred)* |

## Pending screens — likely candidates from `uploads/photos/`

Photo-by-photo dispositions are not authoritative until the cluster pass runs, but visible candidates:

| Pending screen | Likely source photo(s) | Notes |
|---|---|---|
| `home` (settings-panel state) | `uploads/photos/photo-690…`, `uploads/photos/photo-650…` | State variation of `home`, not a separate screen — fold into `home.md`'s **State variations**. |
| `graph-data` | `uploads/photos/photo-549…` | Data tab active over a histogram-style trace. |
| `measure-range` | `uploads/photos/photo-604…` | Range-picker overlay above Home. |
| `calculation-settings` | `uploads/photos/photo-715…` | Calculation Settings dialog with Math Settings panel and OK button. |

Other photos in `uploads/photos/` are mostly additional Home-screen variants (different functions, output ON/OFF, ambient lighting differences) and will collapse into state variations within existing screens during the cluster pass.

## Documented hardware

| part_id | part_title | view | source photo |
|---|---|---|---|
| [front-panel](hardware/front-panel.md) | Front panel | front-panel | `uploads/photos/photo-262…` (shared with `screens/home.md`) |

Pending: `rear-panel`, `closeup-terminals`, `closeup-interlock` — none in `uploads/photos/` at this snapshot. Drop additional photos and rerun `document-hardware`.

## Paired manual sections

Manual chunks cross-link back to corpus entries via `related_screens` / `related_hardware`:

- [`docs/user-manual/home-and-menu-overview.md`](docs/user-manual/home-and-menu-overview.md) — manual section that describes the Home screen; back-linked from `screens/home.md` Manual references.
- [`docs/user-manual/connections-and-usage.md`](docs/user-manual/connections-and-usage.md) — physical connection procedures; back-linked from `hardware/front-panel.md`.
- [`docs/user-manual/getting-started.md`](docs/user-manual/getting-started.md) — power-on, output-off, MENU navigation; references hardkeys documented in `hardware/front-panel.md`.

## How this index is regenerated

Each pass of the `document-screens`, `document-hardware`, or `document-pdf` skill updates the relevant section of this file from the frontmatter of every `.md` under `screens/`, `hardware/`, and `docs/`. Hand-edits are overwritten on the next run.
