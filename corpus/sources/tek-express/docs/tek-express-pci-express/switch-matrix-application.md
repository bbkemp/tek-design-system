---
provenance: observed
class: doc-section
doc_id: tek-express-pci-express
doc_title: TekExpress® PCI Express Transmitter Compliance and Validation Software Application Help
doc_number: 077-1762-05
doc_date: 2026-03
applies_to: [tek-express]
section_id: switch-matrix-application
section_title: Switch Matrix application
parent_section: ""
page_range: "93-109"
related_screens: []
related_hardware: []
---

# Switch Matrix application

## Summary

A **PCIe-specific companion application** distributed with the TekExpress PCI Express test suite. The Switch Matrix application configures an external RF switch matrix (commonly a Mini-Circuits or Pickering chassis) for multi-lane PCIe Tx testing — routing signals from N lanes on the DUT through one or two scope channels via a multiplexed switch path. **Does not exist in DDR5 Tx, USB4, or DisplayPort variants** — it's PCIe's answer to the multi-lane parallel testing customer ask raised by Infineon and other automotive/server customers.

## Content

### Product description (pg 93)

The Switch Matrix application is a standalone executable bundled with TekExpress PCIe. It manages:
- RF switch hardware discovery (USB / Ethernet / GPIB)
- Per-port routing definitions
- Per-test routing presets (PCIe Tx test X → switch routes lane Y to scope channel Z)
- Status indicators (closed/open per switch, port temperature where supported)
- De-embedding settings per switch path (cable response compensation)

### Application overview (pg 93)

The main UI surface shows a logical view of the switch matrix — each input/output port, each closure, and the current routing state. From this view the user can apply named presets (`Gen 5 Lane 0 → CH1`), step through manual closures for debug, or load a saved configuration.

### File name extensions (pg 99)

Switch Matrix uses dedicated file extensions:
- `.smc` — Switch Matrix Configuration (saved routing setup)
- `.smde` — De-embedding settings file
- Possibly others (verify against source)

### Status indicators (pg 99)

Real-time per-switch state visualization. Color or icon coding for closed / open / fault. Useful for verifying that a routing preset actually applied as expected.

### Saved configurations (pg 100)

Persist the current routing setup as a named `.smc` file. The TekExpress PCIe application can reference a saved Switch Matrix configuration in its own session — the two save/recall systems compose.

### De-embed settings (pg 100)

For each switch path, configure cable / fixture / fiber compensation:
- Per-port S-parameter file selection
- Path-specific de-embedding network
- Preview of the corrected response

### Graphical view of switch matrix configuration (pg 104)

A schematic view showing the connectivity tree of inputs → switches → outputs. Useful for verifying complex multi-stage routing setups before run-time.

### Saving the configuration (pg 105)

Save the current Switch Matrix state to a `.smc` file. Mirrors the TekExpress PCIe session-save model.

### Feature description (pg 105)

Detail on the feature surface — what operations are supported, what limits the application enforces (e.g. cannot close two switches feeding the same scope channel simultaneously).

### Error messages (pg 108)

Catalog of error conditions and their meanings — discovery failures, conflicting routing requests, hardware fault codes.

## Cross-references

- **Tek-vs-Keysight competitive context**: Keysight has a comparable but architecturally different solution (D9040USBC framework uses the **Resource Arbiter** approach instead — see [`corpus/sources/keysight-d9040/screens/resource-arbiter.md`](../../../../keysight-d9040/screens/resource-arbiter.md) + [`resource-arbiter-console.md`](../../../../keysight-d9040/screens/resource-arbiter-console.md)). Both vendors solve the multi-lane routing problem; Tek uses a separate companion app, Keysight builds resource-arbitration into the test framework.
- **Customer signal for multi-lane parallel testing**:
  - Infineon ATV: *"Test only one interface at a time · need to check multiple lanes together"* — see [`../../decks/india-customer-voc-2023-march/empathy-map-infineon.md`](../../decks/india-customer-voc-2023-march/empathy-map-infineon.md)
  - AMD Bangalore: complete-automation ask — [`../../decks/india-customer-voc-2023-march/empathy-map-amd.md`](../../decks/india-customer-voc-2023-march/empathy-map-amd.md)
  - The Switch Matrix application is Tek's most concrete answer to these asks. PCIe is the first/most-developed variant.
- **TekFlow's Multi-lane UX Implementation roadmap item** (Q1 2023, see [`tek-flow/decks/tekflow-voc-synthesis-2022-12-emea-update/platform-roadmap.md`](../../../../tek-flow/decks/tekflow-voc-synthesis-2022-12-emea-update/platform-roadmap.md)) — likely overlaps with this Switch Matrix's roadmap.

## Confidence notes

- Page coverage 93-109 per the TOC (Switch Matrix sub-sections span Product description through Error messages).
- File extensions `.smc` and `.smde` are inferred from typical TekExpress companion-app patterns; verify against source PDF.
- The Switch Matrix application is described here as a corpus section because the manual treats it that way — it's a real companion application, not a virtual abstraction. Future `/document-screens` runs against PCIe-specific photo material would document the Switch Matrix application's own UI surfaces.
- Keysight's Resource Arbiter (documented in `keysight-d9040/screens/`) and Tek's Switch Matrix solve the same multi-lane routing problem but live in different architectural layers (built-in service vs companion app).
