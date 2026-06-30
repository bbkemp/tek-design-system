---
class: doc-section
doc_id: user-manual
doc_title: "Dual Measurement Multimeter GDM-9060/9061 User Manual"
doc_number: null
doc_date: 2024-03
applies_to: [gw-gdm9061, gw-gdm9060]
section_id: status-bar
section_title: Status Bar
parent_section: null
page_range: "21-23"
related_screens: [measurement, measurement-alt, range-select, trendchart, histogram, statistics]
---

# Status Bar

## Summary

Defines every icon in the GDM-9060/9061 top status bar — the persistent strip shown above every measurement screen. Eleven indicator positions (numbered 1–9, 0, A) cover local/remote control, the active remote interface (RS-232, USB-CDC, USB-TMC, LAN, GPIB), the error indicator, rear-panel control, the Shift key, the first/second function-menu switch, the Digital I/O mode (User vs. 4094), USB flash-drive Capture/Save/Failure states, Beep/Key sound settings, internet-connection status, and the time display. Includes the full Item/Description legend with cross-references to the relevant configuration pages.

## Content

**Background:** Identify each icon within the top status bar.

**Status Bar Display:**

*Figure: Status bar with callouts 1–9, 0, A pointing to icons across the top strip (`RMT` `232` `ERR` `Rear` `Shift` `2` `4` … capture/sound/internet/time icons), shown above a DC Voltage measurement screen reading `+000.0291 mVDC`.*

| Item | Description |
|---|---|
| 1 | Local/Remote control icon |
| 2 | RS-232/USB-CDC/USB-TMC/LAN/GPIB interface icon |
| 3 | Error icon for commands from remote control |
| 4 | Rear panel switch icon |
| 5 | Shift key identification icon |
| 6 | The first and second function menu switch icon |
| 7 | Digital I/O mode icon (User/4094) |
| 8 | USB flash drive connection icon |
| 9 | Beep/Key Sound setting icon |
| 0 | Internet connection status icon |
| A | Time display |

The individual icons and their meanings:

| | Icon | Description |
|---|---|---|
| Local Control | `LOC` | It indicates the unit is under local control mode. |
| Remote Control | `RMT` | It indicates the unit is under remote control. Refer to page 211 for details. |
| RS-232 | `232` | It indicates RS-232 interface is activated. Refer to page 216 for details. |
| USB - CDC | `CDC` | It indicates USB - CDC interface is activated. Refer to page 216 for details. |
| USB - TMC | `TMC` | It indicates USB - TMC interface is activated. Refer to page 216 for details. |
| LAN | `LAN` | It indicates LAN interface is activated. Refer to page 230 for details. |
| GPIB | `GPIB` | It indicates GPIB interface is activated. Refer to page 225 for details. |
| ERROR | `ERR` | It indicates error occurs in commands. To erase the error icon, it is required to read or sweep the error by remote control commands or reboot action. Refer to page 329 for details. |
| Rear Panel | `Rear` | It indicates rear panel control. When the icon appears, only rear panel is available; otherwise, use front panel for measurement. Refer to page 18 for details. |
| Shift | `Shift` | It indicates the shift key is being pressed ready for in conjunction with other keys for additional functions. Refer to page 15 for details. |
| First function menu | `1` | It indicates the active bottom menu corresponding to function keys is the first menu. Click the Knob key (Enter) to switch to the second function menu. |
| Second function menu | `2` | It indicates the active bottom menu corresponding to functional keys is the second menu. Click the Knob key (Enter) to switch to the first function menu. |
| Digital I/O – 4094 mode | `4` | It indicates Digital I/O – 4094 mode is enabled. Refer to page 129 for details. |
| Digital I/O – User mode | `I` | It indicates Digital I/O – User mode is enabled. Refer to page 129 for details. |
| Flash Drive – Capture | `C` | It indicates the Capture mode is ready for the connected flash drive. Refer to the page 181 for details of Capture. |
| Flash Drive – Save Reading | `S` | It indicates the Save Reading mode is ready for the connected flash drive. Refer to page 185 for details of Save Reading. |
| Flash Drive – Failure | `X` | It indicates something error occurs and thus flash drive fails to connect to unit. |
| Sound – Beep | (beep icon) | It indicates sound of beep is enabled. Refer to page 144 for details. |
| Sound - Key | (key icon) | It indicates sound of key is enabled. Refer to page 145 for details. |
| Sound – All | (all icon) | It indicates sounds of beep and key are both enabled. |
| Sound – Off | (off icon) | It indicates sounds of beep and key are both disabled. |
| Internet On | (network icon) | It indicates internet connection is established. Refer to page 230 for details. |
| Internet Off | (network-off icon) | It indicates internet connection is Not well established. |
| Time Display | `13:46:09` | It indicates the time display. For detailed setting, refer to page 147. |

## Cross-references

- [`screens/measurement.md`](../../screens/measurement.md) — the primary single-readout measurement screen, which carries this status bar across its top edge.
- [`screens/measurement-alt.md`](../../screens/measurement-alt.md) — alternate/secondary measurement view sharing the same status bar.
- [`screens/range-select.md`](../../screens/range-select.md) — range-selection screen.
- [`screens/trendchart.md`](../../screens/trendchart.md) — trend chart view.
- [`screens/histogram.md`](../../screens/histogram.md) — histogram view.
- [`screens/statistics.md`](../../screens/statistics.md) — statistics view.

## Confidence notes

- The four Sound icons (Beep, Key, All, Off) and the two Internet icons (On, Off) are pictographic in the source and have no text label rendered inside them; their cells above show a placeholder description of the glyph rather than a transcribable text token. The accompanying descriptive text is verbatim.
- The Digital I/O – User mode icon glyph is a stylized character (shown as a boxed mark); rendered here as `I` to match the manual's apparent intent. Confirm against a higher-resolution image if exact glyph matters.
