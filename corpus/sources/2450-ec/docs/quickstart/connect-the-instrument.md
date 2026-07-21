---
provenance: observed
class: doc-section
doc_id: quickstart
doc_title: "Model 2450 System SourceMeter Quick Start Guide"
doc_number: "2450-903-01"
doc_date: 2019-08
applies_to: [2450, 2450-ec]
section_id: connect-the-instrument
section_title: Connect the instrument
parent_section: null
page_range: "9 to 10"
related_screens: []
related_hardware: []
---

# Connect the instrument

## Summary

Opens the guide's "Connect" section. Covers the test-system safety responsibilities of the system designer/integrator (IEC 61010-1 hazardous-voltage thresholds, signal-level constraints, DUT covering, fixtures, double insulation, locked cabinets, interlocks, automatic handlers, training, power-up output states) and the physical installation guidance for bench or rack use (ventilation, positioning for access to disconnecting devices).

## Content

### Important test system safety information

This product is sold as a stand-alone instrument that may become part of a system that could contain hazardous voltages and energy sources. It is the responsibility of the test system designer, integrator, installer, maintenance personnel, and service personnel to make sure the system is safe during use and is operating properly.

You must also realize that in many test systems a single fault, such as a software error, may output hazardous signal levels even when the system indicates that there is no hazard present.

It is important that you consider the following factors in your system design and use:

- The international safety standard IEC 61010-1 defines voltages as hazardous if they exceed 30 V<sub>RMS</sub> and 42.4 V<sub>PEAK</sub> or 60 VDC for equipment rated for dry locations. Keithley Instruments products are only rated for dry locations.
- Read and comply with the specifications of all instruments in the system. The overall allowed signal levels may be constrained by the lowest rated instrument in the system. For example, if you are using a 500 V power supply with a 300 VDC rated switch, the maximum allowed voltage in the system is 300 VDC.
- Cover the device under test (DUT) to protect the operator from flying debris in the event of a system or DUT failure.
- Make sure any test fixture connected to the system protects the operator from contact with hazardous voltages, hot surfaces, and sharp objects. Use shields, barriers, insulation, and safety interlocks to accomplish this.
- Double-insulate all electrical connections that an operator can touch. Double insulation ensures the operator is still protected even if one insulation layer fails. Refer to IEC 61010-1 for specific requirements.
- Make sure all connections are behind a locked cabinet door or other barrier. This protects the system operator from accidentally removing a connection by hand and exposing hazardous voltages. Use high-reliability fail-safe interlock switches to disconnect power sources when a test fixture cover is opened.
- Where possible, use automatic handlers so that operators are not required to access the DUT or other potentially hazardous areas.
- Provide training to all users of the system so that they understand all potential hazards and know how to protect themselves from injury.
- In many systems, during power up, the outputs may be in an unknown state until they are properly initialized. Make sure the design can tolerate this situation without causing operator injury or hardware damage.

> **NOTE:** To keep users safe, always read and follow all safety warnings provided with each of the instruments in your system.

### Install the instrument

You can use the 2450 on a bench or in a rack. See the instructions that came with your rack-mount kit if you are installing the 2450 in a rack.

To prevent damaging heat build-up and ensure specified performance, make sure there is adequate ventilation and air flow around the instrument to ensure proper cooling. Do not cover the ventilation holes on the top, sides, or bottom of the instrument.

Position the instrument so that it is easy to reach any disconnecting devices, such as the power cord and the power switch.

## Cross-references

- `wiring-the-interlock` — next sub-section within Connect; the interlock is the primary fail-safe mechanism referenced by the fixture/cabinet bullets above.
- `power-on` — line-power connection follows installation.
