---
class: doc-section
doc_id: user-manual
doc_title: "Models 2450-EC, 2460-EC, and 2461-EC Potentiostats and Galvanostats User's Manual"
doc_number: 077110403
doc_date: 2020-03
applies_to: [2450-ec, 2460-ec, 2461-ec]
section_id: introduction
section_title: Introduction
parent_section: null
page_range: "1-1 to 1-2"
related_screens: []
related_hardware: []
---

# Introduction

## Summary

Overview of the 2450-EC / 2460-EC / 2461-EC potentiostat/galvanostat product family. Describes what makes the EC variants distinct from standard Keithley SourceMeter SMUs: a full-color, high-resolution touchscreen and a set of preloaded electrochemistry test applications. Lists the six EC test applications with a one-line description of each. Includes a critical safety warning about SMU interlock that applies to every EC variant.

## Content

The Keithley Instruments Models 2450-EC, 2460-EC, and 2461-EC Potentiostat/Galvanostat systems are alternatives to traditional electrochemistry potentiostats and galvanostats. Your instrument features a full-color, high-resolution touchscreen, which lets you configure tests and immediately view results.

The following electrochemistry test applications are loaded in the memory of your instrument:

- **Cyclic voltammetry**: Potential is swept at a user-programmable scan rate between two to four defined potential vertices, and the resulting current is measured at specified intervals during the sweep.
- **Open-circuit potential**: Measures the cell potential difference between two electrodes with high input impedance as a function of time.
- **Potential pulse and square wave with current measure**: Sources potential at programmable peak and base levels. The resulting current at the pulse peak level is recorded.
- **Current pulse and square wave with potential measure**: Sources current at programmable peak and base levels. The resulting potential at the pulse peak level is recorded.
- **Chronoamperometry**: Potential is stepped to a programmed value and the resulting current is measured as a function of time.
- **Chronopotentiometry**: Current is stepped to a programmed value and the resulting potential is measured as a function of time.

> ⚠ **WARNING:** This kit is not intended to be used with a SMU interlock enabled. To prevent electric shock and possible damage to the test cable assembly or test setup, do not activate the Keithley Instruments 2450, 2460, or 2461 interlock.
>
> When the interlock is not engaged on the 2450, 2460, or 2461 the nominal output is limited to ±42 V. However, review the "Safety Precautions" section of this document to ensure responsible operation.

## Cross-references

- Section 2: Cyclic voltammetry — chunk `cyclic-voltammetry-*` (pending)
- Section 3: Open-circuit potential — chunk `open-circuit-potential-*` (pending)
- Section 4: Potential pulse and square wave — chunk `potential-pulse-and-square-wave-*` (pending)
- Section 5: Current pulse and square wave — chunk `current-pulse-and-square-wave-*` (pending)
- Section 6: Chronoamperometry — chunk `chronoamperometry-*` (pending)
- Section 7: Chronopotentiometry — chunk `chronopotentiometry-*` (pending)
- Source PDF Safety Precautions (pages 4–6 of `uploads/pdfs/manual.pdf`) — referenced by the WARNING above; not extracted as a chunk in this pass.
