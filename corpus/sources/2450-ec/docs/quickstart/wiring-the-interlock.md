---
provenance: observed
class: doc-section
doc_id: quickstart
doc_title: "Model 2450 System SourceMeter Quick Start Guide"
doc_number: "2450-903-01"
doc_date: 2019-08
applies_to: [2450, 2450-ec]
section_id: wiring-the-interlock
section_title: Wiring the interlock
parent_section: connect-the-instrument
page_range: "10 to 12"
related_screens: []
related_hardware: []
---

# Wiring the interlock

## Summary

Explains the 2450's safety interlock circuit: why it exists (high-voltage output above ±42 V is only enabled when the interlock is asserted), the behavior matrix for Interlock set to Off vs. On, the front-panel procedure to change the Interlock setting, the rear-panel interlock connection, recommended wiring (gauge, strands, insulation, <10 Ω loop resistance), the CS-1616-3 connector pinout, and the one-shot connector assembly procedure. Note: the EC electrochemistry kit explicitly must NOT be used with the interlock enabled — see the EC user-manual introduction.

## Content

> ⚠ **WARNING:** The 2450 is provided with an interlock circuit that must be positively activated in order for the high-voltage output to be enabled. The interlock helps facilitate safe operation of the equipment in a test system. Bypassing the interlock could expose the operator to hazardous voltages that could result in personal injury or death.

To perform high-voltage measurements, the 2450 interlock must be connected to an interlock switch in the testing environment. When properly connected, the safety interlock of the 2450 places the outputs of the instrument in a safe state. When the safety interlock signal is asserted, all voltage ranges of the instrument are available and the green front-panel `INTERLOCK` indicator is illuminated.

The action when the interlock signal is not asserted depends on the Interlock setting.

If Interlock is set to Off and the safety interlock signal is not asserted, the following occurs:

- The nominal output is limited to less than ±42 V.
- The front-panel `INTERLOCK` indicator is not illuminated.
- You can output voltages less than ±42 V.

If Interlock is set to On, when the safety interlock signal is not asserted, the following occurs:

- You cannot turn on the source output for any voltage.
- The front-panel `INTERLOCK` indicator is not illuminated.
- Whenever the interlock changes state (from asserted to not asserted or vice versa), the output is turned off.

*To change the Interlock setting:*

1. From the front panel, select **MENU**.
2. Select **Source Settings**.
3. Set Interlock to **ON** or **OFF**.

If you try to assign a high-voltage output and turn the source on when the interlock is not asserted, you see event code 5074, "Output voltage limited by interlock." Note that the SOURCE swipe screen displays the value that is selected for the voltage source, but the output voltage is limited to ±42 V.

An interlock circuit is provided on the rear panel of the instrument, as shown in the following figure. This circuit must be closed to enable the 2450 to produce voltages greater than ±42 V.

*Figure: rear-panel photograph with the interlock connection called out.*

The interlock is intended for use through a normally open switch, which may be installed on the lid of a test fixture, on the enclosure of a semiconductor prober or device handler, or on the door or doors of a test equipment rack. The circuit opens when an access door is opened and closes when the door is closed.

When the interlock is asserted, any measurement terminals, including the LO terminals, should be considered hazardous voltages, even if they are programmed to a non-hazardous voltage or current.

> ⚠ **WARNING:** Potentially hazardous voltages of up to approximately ±210 V may be present at any measurement terminals when the interlock circuit is closed. To prevent electrical shock, do not expose these lines.

You can use the Keithley Instruments connector CS-1616-3, supplied with the 2450, to make the interlock connection to the rear panel. You must supply connection wire. The recommended wire is:

- 20 AWG to 24 AWG copper alloy
- 7 to 19 bare and tinned strands
- 0.20 mm² to 0.50 mm²
- Flexible vinyl, semi-flexible vinyl, polyethylene, x-linked polyethylene, or PTFE

To ensure proper interlock operation, the combined resistance of the external interlock switch and connection wires must be less than 10 Ω when the switch is closed.

The interlock pin locations and connections are shown in the following figure. The pins are:

- Pin 3: Earth and chassis ground
- Pin 2: Interlock
- Pin 1 (next to tab): +6 V DC out (current limited)

*Figure: test fixture with interlock switch wired to pins 3, 2, 1 of the rear-panel connector.*

*To assemble the interlock:*

1. Insert the wire into CS-1616-3.
2. Use a pair of pliers to squeeze the connector sections together.

You cannot disassemble connector and reuse it.

## Cross-references

- [`docs/user-manual/introduction.md`](../user-manual/introduction.md) — **EC-variant conflict to be aware of:** the EC user's manual warns that the electrochemistry kit is *not* intended to be used with the SMU interlock enabled, and instructs users not to activate the interlock on the 2450/2460/2461. This quickstart chunk documents the base-2450 interlock as-is; for EC use the user-manual warning governs.
- `connect-the-instrument` — parent section; the fixture/cabinet safety bullets there assume interlock use in general-purpose test systems.
- `unpack-and-inspect` — the CS-1616-3 Mini-clamp II Plug is accessory 3 in the packing list.

## Confidence notes

- The rear-panel figure (page 11) and the interlock pinout figure (page 12) are photographs/diagrams; only their captions and callout text are transcribed here.
