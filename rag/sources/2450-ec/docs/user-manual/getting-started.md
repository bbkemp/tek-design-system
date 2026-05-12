---
class: doc-section
doc_id: user-manual
doc_title: "Models 2450-EC, 2460-EC, and 2461-EC Potentiostats and Galvanostats User's Manual"
doc_number: 077110403
doc_date: 2020-03
applies_to: [2450-ec, 2460-ec, 2461-ec]
section_id: getting-started
section_title: Getting started
parent_section: null
page_range: "1-2 to 1-6"
related_screens: []
related_hardware: []
---

# Getting started

## Summary

What ships with the EC kit, firmware version compatibility, and the foundational procedures for powering the instrument on/off, putting the output into the high-impedance off state, and copying TSP scripts from a USB flash drive to the instrument's internal memory. The high-impedance output-off state must be selected before making any physical connections to the test cell.

## Content

In addition to your SourceMeter™ instrument, you should have received the following items:

- One electrochemistry interface cable that connects the instrument to a 2-, 3-, or 4-terminal electrochemical cell.
- Four insulated miniature alligator clips.
- One flash drive that contains the test applications and supporting documentation.
- Six electrochemistry test applications.

Before you can run an electrochemistry test, you will need to configure the instrument and make basic connections. The following topics will explain how to set up and configure your instrument.

> **NOTE:** The 2450-EC or 2460-EC instrument must have firmware version 1.5.0 or later to run the electrochemistry test applications. The 2461-EC must have firmware version 1.6.0 or later.
>
> Scripts with version numbers lower than 189427 are compatible with firmware versions 1.5.0 (1.6.0 for 2461) to 1.6.7. Scripts with version numbers of 189427 and higher are compatible with firmware versions 1.5.0 (1.6.0 for 2461) to 1.6.7 and version 1.7.2 and higher. The script version number is displayed near the top right corner of an application's Home screen.
>
> To view the firmware version, press the MENU key, then select Info/Manage under System. The firmware version is at the upper-left of your display. The latest firmware is available from the Keithley Instruments website (tek.com/keithley).

The following files are loaded onto the flash drive:

| File | Description |
|---|---|
| `CyclicVoltammetry.tsp` | Application to perform cyclic voltammetry |
| `OpenCircuitPotential.tsp` | Application to measure the open-circuit potential |
| `Chronoamperometry.tsp` | Application to measure the current as a function of time at a constant potential |
| `Chronopotentiometry.tsp` | Application to measure the potential as a function of time at a constant current |
| `CurrentPulseAndSquareWave.tsp` | Application to output a current pulse or square wave while measuring the potential |
| `PotentialPulseAndSquareWave.tsp` | Application to output a current pulse or square wave while measuring the current |
| `EC_Images.tsp` | Potentiostat application images |
| `EC_Framework.tsp` | Potentiostat application framework |
| `07711040x_2450-EC.pdf` | Models 2450-EC, 2460-EC, and 2461-EC Potentiostats User's Manual (this document) |
| `07134730x_ECHEM-KIT.pdf` | SMU Potentiostats and EC-UPGRADE Kit Quick Start Guide |

### Power the instrument on or off

Follow the steps below to connect the 24xx-EC to line power and turn on the instrument. The 24xx-EC operates from a line voltage of 100 V to 240 V at a frequency of 50 Hz or 60 Hz. It automatically senses line voltage and frequency. Make sure the operating voltage in your area is compatible.

You must turn on the 24xx-EC and allow it to warm up for at least one hour to achieve rated accuracies.

> ⚠ **CAUTION:** Operating the instrument on an incorrect line voltage may cause damage to the instrument, possibly voiding the warranty.

> ⚠ **WARNING:** The power cord supplied with the 2450-EC, 2460-EC, and 2461-EC contains a separate protective earth (safety ground) wire for use with grounded outlets. When proper connections are made, the instrument chassis is connected to power-line ground through the ground wire in the power cord. In addition, a redundant protective earth connection is provided through a screw on the rear panel. This terminal should be connected to a known protective earth. In the event of a failure, not using a properly grounded protective earth and grounded outlet may result in personal injury or death due to electric shock.
>
> Do not replace detachable mains supply cords with inadequately rated cords. Failure to use properly rated cords may result in personal injury or death due to electric shock.

**To connect the power cord:**

1. Make sure that the front-panel POWER switch is in the off (O) position.
2. Connect the female end of the supplied power cord to the AC receptacle on the rear panel.
3. Connect the male end of the power cord to a grounded AC outlet.

**To turn the instrument on or off:**

1. Before turning the instrument on, disconnect any devices under test (DUTs) from the instrument.
2. To turn your instrument on, press the front-panel POWER switch to place it in the on (|) position. The instrument displays a status bar as it powers on. The home screen is displayed when power on is complete.
3. To turn your instrument off, press the front-panel POWER switch to place it in the off (O) position.

> **NOTE:** On some sensitive or easily damaged devices under test (DUTs), the instrument power-up and power-down sequence can apply transient signals to the DUT that may affect or damage it. When testing this type of DUT, do not make final connections to it until the instrument has completed its power-up sequence and is in a known operating state. When testing this type of DUT, disconnect it from the instrument before turning the instrument off.

To prevent any human contact with a live conductor, connections to the DUT must be fully insulated and the final connections to the DUT must only use safety-rated safety jack socket connectors that do not allow bodily contact.

### Select the high-impedance, output-off state

Before making physical connections from the instrument to the test cell, set the output of the instrument to the high-impedance, output-off state. When the high-impedance output-off state is selected, the output relay opens, disconnecting the instrument from the load.

**To set the output of your SMU to the high-impedance output-off state:**

1. Press the **MENU** key.
2. Under **Source**, select **Settings**.
3. Select **Output Off**.
4. Choose **High Z** (high impedance).

> **NOTE:** You may receive a notification about making measurements with the output turned off. Select OK to clear the message or select Details to see more information.

### Copy a script to the instrument

Your SMU is shipped with all test applications and supporting scripts loaded into memory.

> **NOTE:** If you accidentally delete a test application or a supporting script (`EC_Framework.tsp` or `EC_Images.tsp`), you can copy the files from the flash drive to your instrument.

If you are upgrading your SMU with the EC-UPGRADE kit, you can run the test applications from the flash drive or copy the files from the flash drive to the instrument. If you choose to copy the applications, you must also copy the support files (`EC_Framework.tsp` and `EC_Images.tsp`) to your SMU.

**To copy a script to the SMU:**

1. Insert the USB flash drive into the USB port on the front panel.
2. Press the **MENU** key.
3. Under **Scripts**, select **Manage**. The Manage Scripts menu opens. Your list of Internal Scripts may appear different than the following figure.
4. In the USB Scripts list, select the test script you want to copy to the SMU. For this example, you will copy the cyclic voltammetry test script.
5. Select `<`. The test script is transferred to the instrument, and the corresponding filename is displayed in the Internal Scripts list.

*Figure 1: Manage Scripts menu* — Shows the MANAGE SCRIPTS screen with Internal Scripts list (autoexec, setup1, dret, configscript1, ExternalTriggering, internalbuffer, PulseTrain) on the left, USB Scripts list (usb1/PotentialPulseAnc, usb1/Chronoperome, usb1/Chronopotentiom, usb1/CurrentPulseAndS, usb1/CyclicVoltammetr, usb1/EC_Framework.tsp, usb1/EC_Images.tsp) on the right, transfer arrows in the middle, and Delete button. Space Available: 99%.

*Figure 2: Selecting the test script to be copied* — Same screen with `usb1/CyclicVoltammetr` highlighted in the USB Scripts list.

*Figure 3: Copying the file to the instrument* — Internal Scripts list now includes `CyclicVoltammetry` and `EC_Framework`; the transfer is complete.

## Cross-references

- `home-and-menu-overview` — references the MENU key and Home screen display states.
- Section 2: Cyclic voltammetry — `cyclic-voltammetry-*` chunks describe how to use the copied scripts.
- Future `hardware/front-panel.md` — front-panel POWER switch, USB port, MENU key.
- Future `hardware/rear-panel.md` — AC receptacle, protective earth screw.
