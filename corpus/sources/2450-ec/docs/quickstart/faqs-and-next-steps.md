---
provenance: observed
class: doc-section
doc_id: quickstart
doc_title: "Model 2450 System SourceMeter Quick Start Guide"
doc_number: "2450-903-01"
doc_date: 2019-08
applies_to: [2450, 2450-ec]
section_id: faqs-and-next-steps
section_title: FAQs
parent_section: null
page_range: "24 to 25"
related_screens: []
related_hardware: []
---

# FAQs

## Summary

Closing FAQ section: where to find drivers and firmware, what to check when data looks wrong, the three remote command sets (SCPI, TSP, SCPI 2400) and how to change the command set from the front panel, why settings change when switching functions, and next-steps pointers to the Model 2450 User Manual and Reference Manual.

## Content

### Where can I find updated drivers or firmware?

For the latest drivers and additional support information, see the Keithley Instruments support website.

*To find drivers that are available for your instrument:*

1. Go to `tek.com/product-support`.
2. Enter **2450** and select **GO**.
3. Select **Software** on the left navigation.

### My data looks odd or is wrong. What should I do?

Verify the connections from the instrument to the test fixture. Also check the connections from the DUT to the test fixture socket.

### How do I change the command set?

In addition to the front-panel options, you can use a remote interface to set up the instrument. You can choose one of the following command sets:

- SCPI: An instrument-specific language built on the SCPI standard.
- TSP: A programming language that you can use to send individual commands or combine commands into scripts.
- SCPI 2400: Allows you to run code that was developed for earlier Series 2400 instruments. If you choose this command set, you will not have access to some of the extended ranges and other features of the 2450. Refer to the *Model 2450 Reference Manual* for detail on differences between the Series 2400 instruments and operation using SCPI 2400.

You cannot combine the command sets.

As delivered from Keithley Instruments, the 2450 is set to work with the SCPI command set.

*To set the command set using the front panel:*

1. Press the **MENU** key.
2. Under System, select **Settings**.
3. Select the button next to **Command Set**.
4. Select the command set.
5. Select **OK** to reboot the instrument.

### Why did my settings change?

The instrument saves many of the commands with the source or measure function that was active when you set them. For example, assume you have the measure function set to current and set a value for NPLCs. When you change the measure function to voltage, the NPLC value changes to the value that was last set for the voltage measure function. When you return to the current measure function, NPLC value returns to the value you set previously.

### Next steps

For more information, refer to the Keithley Instruments website, `tek.com/keithley`, for support and additional information about the instrument, including the following documents:

- *Model 2450 User Manual*: Contains basic information about the instrument, plus application-based examples that help familiarize you with the instrument.
- *Model 2450 Reference Manual*: Provides detailed information about all features of the instrument, including descriptions of SCPI and TSP commands.

## Cross-references

- `help-and-function` — the per-function settings-persistence behavior explained there is repeated in "Why did my settings change?".
- `navigation-keys-and-menu` — the Menu screen path (System > Settings) used to change the command set.
- `introduction` — the same documentation set is introduced at the front of the guide.

## Confidence notes

- Page 26 (contact information, copyright, `2450-903-01 Rev. E / August 2019` document number) is boilerplate and not extracted as a chunk; the doc number and date are captured in frontmatter and `_index.md`.
