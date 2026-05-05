# 2450 SMU — screen index

Generated **2026-05-05**. Two screens documented; the rest are referenced via `child_screens` and pending the next pass of the `document-screens` skill against the remaining photos in `raw/`.

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

## Pending screens — likely candidates from `raw/`

Photo-by-photo dispositions are not authoritative until the cluster pass runs, but visible candidates:

| Pending screen | Likely source photo(s) | Notes |
|---|---|---|
| `home` (settings-panel state) | `raw/photo-690…`, `raw/photo-650…` | State variation of `home`, not a separate screen — fold into `home.md`'s **State variations**. |
| `graph-data` | `raw/photo-549…` | Data tab active over a histogram-style trace. |
| `measure-range` | `raw/photo-604…` | Range-picker overlay above Home. |
| `calculation-settings` | `raw/photo-715…` | Calculation Settings dialog with Math Settings panel and OK button. |

Other photos in `raw/` are mostly additional Home-screen variants (different functions, output ON/OFF, ambient lighting differences) and will collapse into state variations within existing screens during the cluster pass.

## How this index is regenerated

Each pass of the `document-screens` skill rewrites this file from the frontmatter of every `.md` in `screens/`. Do not hand-edit it; edits will be overwritten on the next run.
