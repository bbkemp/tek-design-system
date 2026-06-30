---
class: doc-section
doc_id: user-manual
doc_title: "Dual Measurement Multimeter GDM-9060/9061 User Manual"
doc_number: null
doc_date: 2024-03
applies_to: [gw-gdm9061, gw-gdm9060]
section_id: screenshot-and-log
section_title: Screenshot & Log
parent_section: null
page_range: "181-188"
related_screens: [statistics, trendchart, measurement]
---

# Screenshot & Log

## Summary

The Screenshot & Log chapter covers two USB-save modes reached by pressing `Shift` + `LOG/LOG#`: **Capture**, which saves the current screen to a USB flash disk under an auto-serialized (`SCREEN00`–`SCREEN99`) or manually keyed file name, and **Save Reading**, which logs measurement data to USB with selectable file name, overwrite behavior, and source (`Count` / `Recent`). Both modes share the `Log Mode` / `FileName` / `Name` (`EditName`) / `OverWrite` softkey row and the on-screen KeyBoard for manual naming. Backs the log-menu softkeys seen across the corpus screens.

## Content

Capture .................................................. 182
Save Reading ............................................. 185

## Capture

### Background

Configure the mode of screenshot capturing.

Supported USB Sticks:

- USB Disk Type: Flash Disk Only
- FAT Format: Fat16 or Fat32(Recommended)
- Max memory size: 128GB

> **NOTE:** Flash disks which need to use card adaptors are not recommended to be used in this application.

### Step

1. Press the `Shift` key followed by the `LOG/LOG#` key and the following menu appears.

   *Figure: log softkey row — `Log Mode Capture` · `FileName Default` · `Name SCREEN00` · `OverWrite Always`.*

2. Press the `F1` (`Log Mode`) key followed by clicking the `F1` (`Capture`) key to enable the Capture mode for screenshot.

   *Figure: `Log Mode` menu — `Capture` · `SaveRead` · `ESC:Return`.*

3. Press the `F2` (`FileName`) key to enter the Log FileName Mode menu. Further press the `F1` (`Default`) key to let system saves screenshot by auto name in serial number or press the `F2` (`Manual`) key to determine file name by user.

   *Figure: `Log FileName Mode` menu — `Default` · `Manual` · `ESC:Return`.*

   | Item | Description |
   |---|---|
   | Number Range | The auto name in serial number ranges from SCREEN00 to SCREEN99. |
   | Number Zero | Repluging the USB disk will zero the serial number to the initial. |

   > **NOTE:** When the serial number reaches the maximum, e.g, SCREEN99, the save action will be Not available.

4. Press the `F3` (`EditName`) key to enter the KeyBoard page where user can press the `F2` (`Backspace`) key to clear default text. Use the Left/Right & +/- keys or scroll the Knob key to move the cursor followed by pressing the `F5` (`Input`) key or Knob key to input desired words. The `F1` (`Caps Lock`) key is for high and low case shift.

   *Figure: KeyBoard page — title `KeyBoard`, edit field `DUT`, on-screen keys `A`–`Z`, `0`–`9`, `.`, `-`, `_`.*

5. Press the `F4` (`OK`) key to confirm the input words.

   > **NOTE:** It is only available when "Manual" is selected for Log FileName Mode.

6. Press the `F4` (`OverWrite`) key to enter the Log OverWrite Mode menu where user can press the `F1` (`Always`) key to automatically overwrite filename when saving or press the `F2` (`Query`) key to let system query first before saving.

   *Figure: `Log OverWrite Mode` menu — `Always` · `Query` · `ESC:Return`.*

> **NOTE:**
>
> **For File Name - Default**
>
> - Under Overwrite – "Always mode", when repluging the USB disk, the serial number will be zeroed to the initial and the existed file in the USB disk will be overwritten automatically when saving.
> - Under Overwrite – "Query mode", when repluging the USB disk, the serial number will be zeroed to the initial and a prompt message asks, when saving, if to overwrite the existed file, click F1 (Yes) to overwrite, whilst click F2 (No) to save in a non-occupied serial number of file name. Click ESC key to simply discard the overwrite action.
>
> **For File Name - Manual**
>
> - Under Overwrite – "Always mode", when repluging the USB disk, the file to save will overwrite the existed file in the USB disk by the user-editted name.
> - Under Overwrite – "Query mode", when repluging the USB disk, a prompt message asks if to overwrite the existed file, click F1 (Yes) to overwrite, whilst click F2 (No) to bring out the KeyBoard page to reedit a file name to save. Click ESC key to simply discard the overwrite action.

## Save Reading

### Background

Configure the mode of data log saving.

### Step

1. Press the `Shift` key followed by the `LOG/LOG#` key and the following menu appears.

   *Figure: log softkey row — `Log Mode Capture` · `FileName Default` · `Name SCREEN00` · `OverWrite Always`.*

2. Press the `F1` (`Log Mode`) key followed by clicking the `F2` (`SaveRead`) key to enable the Save and Read mode for data log.

   *Figure: `Log Mode` menu — `Capture` · `SaveRead` · `ESC:Return`.*

3. Press the `F2` (`FileName`) key to enter the Log FileName Mode menu. Further press the `F1` (`Default`) key to let system saves screenshot by auto name in serial number or press the `F2` (`Manual`) key to determine file name by user.

   *Figure: `Log FileName Mode` menu — `Default` · `Manual` · `ESC:Return`.*

   | Item | Description |
   |---|---|
   | Number Range | **For Count Source** — The auto name in serial number ranges from DATAC000 to DATAC999. **For Recent Source** — The auto name in serial number ranges from DATAR000 to DATAR999. |
   | Number Zero | Repluging the USB disk will zero the serial number to the initial. |

   > **NOTE:** When the serial number reaches the maximum, e.g., DATAC999, the save action will be Not available.

4. Press the `F3` (`EditName`) key to enter the KeyBoard page where user can press the `F2` (`Backspace`) key to clear default text. Use the Left/Right & +/- keys or scroll the Knob key to move the cursor followed by pressing the `F5` (`Input`) key or Knob key to input desired words. The `F1` (`Caps Lock`) key is for high and low case shift.

   *Figure: KeyBoard page — title `KeyBoard`, edit field `DUT`, on-screen keys `A`–`Z`, `0`–`9`, `.`, `-`, `_`.*

5. Press the `F4` (`OK`) key to confirm the input words.

   > **NOTE:** it is only available when Manual is selected for Log FileName Mode.

6. Press the `F4` (`OverWrite`) key to enter the Log OverWrite Mode menu where user can press the `F1` (`Always`) key to automatically overwrite filename when saving or press the `F2` (`Query`) key to let system query first before saving.

   *Figure: `Log OverWrite Mode` menu — `Always` · `Query` · `ESC:Return`.*

> **NOTE:**
>
> **For File Name - Default**
>
> - Under Overwrite – "Always mode", when repluging the USB disk, the serial number will be zeroed to the initial and the existed file in the USB disk will be overwritten automatically when saving.
> - Under Overwrite – "Query mode", when repluging the USB disk, the serial number will be zeroed to the initial and a prompt message asks, when saving, if to overwrite the existed file, click F1 (Yes) to overwrite, whilst click F2 (No) to save in a non-occupied serial number of file name. Click ESC key to simply discard the overwrite action.
>
> **For File Name - Manual**
>
> - Under Overwrite – "Always mode", when repluging the USB disk, the file to save will overwrite the existed file in the USB disk by the user-editted name.
> - Under Overwrite – "Query mode", when repluging the USB disk, a prompt message asks if to overwrite the existed file, click F1 (Yes) to overwrite, whilst click F2 (No) to bring out the KeyBoard page to reedit a file name to save. Click ESC key to simply discard the overwrite action.

7. Press the `F5` (`Source`) key to enter the SaveRead Source(Log) menu where user can select either source to save and read. Determine the source mode by further pressing the `F1` (`Count`) key or the `F2` (`Recent`) key. "Count" indicates the saved data log contains the total counts of measurement, whilst "Recent" represents each count of measurement has user-defined interval in the saved data log. For details, refer to page 199.

*Figure: `SaveRead Source(Log)` menu — `Count` · `Recent` · `ESC:Return`.*

## Cross-references

- [`screens/statistics.md`](../../screens/statistics.md) — the `Shift` + `LOG/LOG#` log softkey row and the data-log save flow described here back the statistics screen's logging/save behavior.
- [`screens/trendchart.md`](../../screens/trendchart.md) — Save Reading data-log captures back the trendchart screen's logged-data context.
- [`screens/measurement.md`](../../screens/measurement.md) — the Capture screenshot flow and log softkeys apply to the base measurement screen.

## Confidence notes

- The task brief referenced a `[Log]SCREENxx.bmp Save Ok` save toast. No such toast text appears anywhere on pages 181-188 of this PDF; this section documents the Capture/Save Reading configuration menus only. The `.bmp` extension and a "Save Ok"-style confirmation toast are not printed in this chapter — flag for verification against the on-device behavior or another manual section before asserting the exact toast string.
- The chapter table-of-contents page (181) lists `Capture` p.182 and `Save Reading` p.185; transcribed verbatim as the chapter `## Content` lead.
- Spelling/typography is reproduced exactly as printed in the source, including "Repluging", "editted", "user-editted", and "non-occupied" — these are the manual's own renderings, not transcription errors.
- The Capture serial-name prefix is `SCREEN` (`SCREEN00`–`SCREEN99`); Save Reading uses `DATAC000`–`DATAC999` for Count source and `DATAR000`–`DATAR999` for Recent source. File extensions are not stated in the printed text.
