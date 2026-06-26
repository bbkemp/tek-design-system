---
class: walkthrough
product: tek-express
flow_id: customer-market-and-platform-context
flow_title: TekExpress customers, market positioning, and the multi-interface compliance workflow
recorded_by: [Bera, Subhasis (Principal Product Manager, Solutions Platform and Decoders)]
participants: [Kemp, Bryan; Bera, Subhasis; Jogdand, Arpita]
recorded_date: 2026-06-23
duration: ~25 min (segment ~6:18 – ~30:00 of a 1h 1m meeting)
transcript_source: corpus/sources/tek-express/uploads/transcripts/AU VoC Sync up.docx
screens_visited: []
applies_to: [tek-express, tek-flow]
related_screens: [setup-test-selection, setup-acquisitions, status-test-status, results]
related_apis: []
related_hardware: []
---

# TekExpress customers, market positioning, and the multi-interface compliance workflow

## Summary

Subhasis walks Bryan and Arpita through the **customer landscape** TekExpress serves and the **multi-interface compliance workflow** customers run against high-density boards (AI servers, automotive ECUs, mobile chipsets). The dominant pattern: a single customer board exposes hundreds of interfaces (PCIe, USB, DDR, MIPI, DisplayPort, Ethernet) and each must be compliance-tested. Customers pay TekExpress for **automation across this matrix** to reduce time-to-market. Cross-vendor parity (Keysight, Tektronix, LeCroy, Rohde & Schwarz) at the compliance-step level is the table-stakes; **conformance applications** (where the workflow has more liberty) is where Tek can differentiate.

## Goal

Establish what real customers do with TekExpress, why they buy it, and where it sits in the broader test-and-measurement value chain — so the redesign team can frame UI decisions against actual customer workload.

## Starting state

Personas and JTBD landscape established in the prior segment ([personas-and-jobs-to-be-done.md](./personas-and-jobs-to-be-done.md)). Subhasis now shifts from "who uses it" to "what they're doing and why they pay."

## Steps

### 1. Customer segments — the bleeding-edge use cases (~6:18 – 6:50)

> *"What do these customers typically do? The latest thing that these customers right now do are build humanoids, smart glasses, autonomous cars, robotics, and smart wearables. … we sell to Tesla, we do sell. Meta Lab is full of Tektronics, Tek Express, DeFi, CeFi, humanoids. We actually work with different startups which actually develop humanoids."* — Bera

**Named customer segments:**
- Humanoid robotics startups
- Smart glasses
- Autonomous vehicles (Tesla named explicitly)
- Robotics
- Smart wearables
- Meta Lab (named — "full of Tektronix, Tek Express")
- DeFi / CeFi (financial infrastructure — implied to be running similar hardware compliance)

### 2. The interface-matrix workflow — Vietnamese startup + Qualcomm example (~7:00 – 8:30)

> *"this is a Vietnamese startup which uses a Qualcomm chipset, and this chipset actually has a lot of … technologies. … PCI is Tek Express. LPDDR4 was on Clarius. This display is MIPI and you have USB 2 and you have DisplayPort. So all of these are Tek Express and these are tested one by one and integrated and they are tested again and automated using Tek Express automation without the UI."* — Bera

**The pattern:**
1. A single SoC / chipset exposes ~5-10 high-speed interfaces.
2. Each interface has its own compliance specification (PCIe Gen5, USB 3.2, DisplayPort 2.1, LPDDR4/5, MIPI variants).
3. TekExpress runs the compliance procedure for each interface, typically **one at a time and then integrated**.
4. Once procedures pass interactively, customers **drive the same procedures via TekExpress automation without the UI** (SCPI / scripts).

**The Clarius failure foreshadow:** LPDDR4 lived on Clarius, which Subhasis previously characterized as overscoped. The implication: LPDDR4 testing should fold back into TekExpress (or its successor) rather than stay siloed.

### 3. The AI server case study (~8:30 – 9:30)

> *"This is again an example of an AI server. … where you will be seeing on this, by the way, this is an actual AMD AI server which a customer has shared in the table. You will see PCI. This is again Tek Express. You will see different interfaces. What I'm trying to depict in this picture is there are so many interfaces a customer has to check, around 600 of them. 600 plus and that's the reason customer pays up a lot of money to reduce their time to market using Tek Express."* — Bera

**The dollar value: ~600 interfaces × per-interface compliance test time × repeated-run-during-validation.** TekExpress's value proposition is the time-to-market compression on this matrix.

### 4. Cross-vendor parity vs. conformance differentiation (~9:30 – 10:30)

> *"Tek Express is nothing but a bunch of pages of test procedure. Automated and. It is automated the same way across every vendor when it is called a compliance application. That's even Keyser has to do the same step, Tektronix and Lacrosse and Rode and Shorts and what. There are some solutions which are called conformance where we can take the liberty to do it in a way. But typically that also but falls within a guardrail of different standards."* — Bera

**The two-tier landscape:**

| Tier | Authority | Differentiation potential |
|---|---|---|
| **Compliance** | Standards body (PCI-SIG, USB-IF, JEDEC, VESA, etc.) defines exact procedure | **None** — vendor parity is mandatory. *"Even Keyser has to do the same step."* |
| **Conformance** | Vendor implements within standards-defined guardrails | **Available** — *"we can take the liberty to do it in a way"* |

> *"Like you have to ensure that your results are not way away from key sites results."* — Bera

**The cross-vendor result-parity constraint:** even in conformance work, Tek must produce results that align with Keysight's. This caps how differentiated the analysis layer can be, but the **input-collection workflow, UI, automation surface, and reporting** are where Tek can win.

### 5. The Jaguar Land Rover EV stack (~10:30 – 12:00)

> *"This is actually Jaguar Land Rover. A real use case. Imagine to drive an EV of Jaguar or a Land Rover, you have to see the position, the velocity of the vehicle, the temperature of the battery, the pressure of the wheels, and a lot of things, and the motor voltage and stuff to actually decide what's. It gives you an EV, right? With this kind of speed, you will get …"* — Bera

JLR named as a real customer where the EV control system requires:
- Position telemetry
- Velocity
- Battery thermal
- Tire pressure
- Motor voltage

Each of these is its own measurement / compliance procedure. The interface count is similar to the Qualcomm + AMD AI server examples — *many* high-speed and analog interfaces converging on one validation cycle.

## Friction notes

- **The 600-interfaces-per-board claim** for AI servers underscores that **scaling test setup across many interfaces** is the dominant cost. Any UI design that makes interface-by-interface setup more efficient (templates, copy-config, batch operations) pays back at this scale.
- **Cross-vendor result-parity** caps the value of differentiated analysis. The redesign should focus on the workflow, automation, and report layers — not the analysis kernel.
- **Conformance vs. compliance distinction** is critical for the redesign brief: the Compliance tab is a regulatory surface (all vendors look similar); the Advanced / Debug surfaces are where Tek can win.

## Annotations

> *"customer pays up a lot of money to reduce their time to market using Tek Express"* — Bera (~9:00)

This is the **second framing of value proposition** (the first was the wizard save/replay loop in the prior segment). Both pivot on **automated repetition at scale** — saved wizards + automated multi-interface runs.

> *"these are tested one by one and integrated and they are tested again and automated using Tek Express automation without the UI"* — Bera (~7:30)

**The without-UI automation pathway is a major use case** (SCPI / scripts). The corpus's screen documentation captures only the interactive-UI surface. A future doc-class for the SCPI surface (or `document-api` against TekExpress's SCPI command tree) would complete the picture.

## Cross-references

- **Personas underlying these workflows**: see [personas-and-jobs-to-be-done.md](./personas-and-jobs-to-be-done.md).
- **Test selection screens** that determine which interfaces are tested: [setup-test-selection.md](../screens/setup-test-selection.md), [setup-test-selection-config.md](../screens/setup-test-selection-config.md).
- **Acquisition setup** for multi-interface boards: [setup-acquisitions.md](../screens/setup-acquisitions.md), [setup-acquisitions-probe-config.md](../screens/setup-acquisitions-probe-config.md).
- **Results aggregation** for cross-interface validation: [results.md](../screens/results.md).
- **Competitive landscape** — Keysight is the named comparator; see [`audits/competitive/2026-06-25-tek-express-vs-keysight-d9040dppc/`](../../../../audits/competitive/2026-06-25-tek-express-vs-keysight-d9040dppc/) for the head-to-head dimensions.

## Pending references

- A canonical list of interfaces TekExpress supports (PCIe Gen N, USB 3.x, DisplayPort 2.x, LPDDR5, MIPI, Ethernet, etc.) would slot into [`corpus/sources/tek-express/docs/`](../docs/) once the manuals are processed via `/document-pdf`.
- The "TekExpress automation without the UI" SCPI pathway should be documented separately. No corpus entry yet.

## Confidence notes

- **Customer names** (Tesla, Meta Lab, Jaguar Land Rover, AMD, Qualcomm) are verbatim from transcript. Internal-use customer-reference status confirmed by Subhasis's framing.
- **The Vietnamese startup** is described but unnamed — preserved as anonymous customer reference.
- **"around 600 of them"** interface count is Subhasis's stated estimate for a representative AMD AI server. Order-of-magnitude not precise count.
- **Conformance vs. compliance distinction** is captured verbatim; the implication for Tek's differentiation strategy is the auditor's annotation, not Subhasis's exact words.
