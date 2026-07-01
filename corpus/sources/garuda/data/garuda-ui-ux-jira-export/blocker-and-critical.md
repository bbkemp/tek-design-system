---
provenance: observed
class: data-export-cluster
export_id: garuda-ui-ux-jira-export
export_title: Garuda UI/UX JIRA export
export_source: JIRA project GAR (Garuda), filter "UI-UX filtered trial"
export_date: 2026-06-25
cluster_id: blocker-and-critical
cluster_value: "Blocker + Critical"
cluster_column: Priority
row_count: 265
related_screens: []
related_docs: []
applies_to: [garuda]
---

# Blocker + Critical priority issues — Garuda UI/UX (combined)

## Summary

The 265 highest-priority issues from the Garuda UI/UX JIRA export, regardless of status. **Blocker + Critical** combined into one cluster because the population is small and the priority gap is meaningful at retrieval time.

## Column inventory

Per-issue fields captured: Issue key, Type, Status, Priority, Summary, Reporter, Created, Resolved, Description, Customer Application, Customer Visibility, Business Value, Customer Impact, Action Request, Engineering Notes, Use Cases, Acceptance Criteria, Components.

Many JIRA custom fields are populated unevenly across rows — coverage is reported per-issue inline.

## Rows (verbatim)

### `GAR-6115` — [LPDDR4][GUI] When REF levels updated at scenario level, tabs doesn’t work as expected in GUI

- **Type:** Defect
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** u622852
- **Created:** 22-08-2023 05:03
- **Updated:** 12-12-2023 00:58
- **Resolved:** 16-11-2023 04:26
- **Resolution:** Fixed

**Description (verbatim):**

> # When I select Technology as LPDDR and application as LPDDR4_settings,
> # when i click on scenario settings for Clock Differential scenario,
> # I click on Ref Level Clock settings, changing the Ref Level Method to RELATIVE doesnt enable the High Level, Mid-Level , Low Level reference levels in percentage.
>
>
>
> Steps Tried are:
> 1> Change ref level to 'Relative' for "Clock Differential" scenario
> 2> Now select "Clock Single Ended". Now change "Ref Level" to Relative.
> 3> Now go back to "Clock Differential" scenario.
> Observation: Ref Level settings are not retaining. It should be Relative.


---

### `GAR-1513` — Eye Diagram to show X-Y axis coordinates in GUI and Report

- **Type:** Story
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** sjhawar
- **Created:** 02-03-2022 22:20
- **Updated:** 13-09-2023 19:41
- **Resolved:** 19-08-2022 03:36
- **Resolution:** Done

**Description (verbatim):**

> Eye Diagram to show X-Y axis coordinates in GUI and Report.
> Similar to DPOJET, make a provision to reflect the X-Y axis coordinates on the Eye Diagram Plots.
> This is important for upcoming LPDDR4 and DDR5 and all future DDR generations.
> Attached a Eye Diagram from DPOJET where we can coordinates values and TF plot where information is missing for your reference.
>
> Prerequisite :- Check any LPDDR VM.
> 1) User should be able to see X and Y axis.
> *Input*
> 1) Login to ATOMS UI.
> 2) Navigate to Tests.
> 3)Click on any Tests.
> 4)Select scenario and click any scenario.
> 5)Click on Results.
> 6)Select results.
> 7)Navigate to plots
> 8)You will see Eye Diagram with X and Y axis.


---

### `GAR-4271` — [New UI] Unable to add license in the new UI of Beta13 PCIe/DP VM

- **Type:** Issue
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** mtatiche
- **Created:** 01-02-2023 02:33
- **Updated:** 14-09-2023 11:13
- **Resolved:** 10-02-2023 00:29
- **Resolution:** Other

**Description (verbatim):**

> Unable to add the test bench in the Beta13 PCIe VM


---

### `GAR-1511` — Signal tests are failing on the UI.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** u612584
- **Created:** 02-03-2022 21:21
- **Updated:** 26-03-2024 04:48
- **Resolved:** 28-03-2022 00:42
- **Resolution:** Fixed

**Description (verbatim):**

> !Screenshot (67).png!
>
> signal validation not  found displayed in the IS(Instrument Service).


---

### `GAR-7778` — Test is getting struck at 1% on UI

- **Type:** Defect
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** u629875
- **Created:** 26-02-2024 00:04
- **Updated:** 26-03-2024 04:48
- **Resolved:** 25-03-2024 00:38
- **Resolution:** Cannot Reproduce
- **Customer Impact:** 1-High

**Description (verbatim):**

> 1> Login to clarius
> 2> Run test on Recorded mode
> Observation -
> 1> Test is getting struck at 1%. Stuck at AS. Test never completes.
>
> VM Details:
> TEK-2NBW2D3
> admin/Welcome@123


---

### `GAR-1891` — [Duplicate]Limit should be user editable in TekFlow through UI

- **Type:** Story
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** shashirv
- **Created:** 30-03-2022 22:54
- **Updated:** 14-09-2023 10:35
- **Resolved:** 17-08-2022 22:13
- **Resolution:** Duplicate
- **Customer Impact:** 1-High

**Description (verbatim):**

> Limit should be user editable in TekFlow through UI.


---

### `GAR-2746` — Multi lane results are not getting uploaded to result json and UI

- **Type:** Defect
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** sjhawar
- **Created:** 14-06-2022 23:56
- **Updated:** 26-03-2024 05:19
- **Resolved:** 27-06-2022 21:40
- **Resolution:** Fixed

**Description (verbatim):**

> Multi lane results are not getting uploaded to result json and UI.
>
> 1. Select LPDDR4 application.
> 2. Select Write Burst Differential Scenario
> 3. Add 2 lanes
> 4. Run test
>
> Expected: Results for both lane should come in UI and result.json
>
> Actual: Only first lane results are updated in UI and result.json
>
> Attached IS log and result.json file


---

### `GAR-7724` — Eye Diagram for Converged Calibration for Stressed Eye is not coming in UI

- **Type:** Defect
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** rkosana
- **Created:** 16-02-2024 03:33
- **Updated:** 10-04-2024 05:45
- **Resolved:** 08-04-2024 01:51
- **Resolution:** Not a Defect

**Description (verbatim):**

> Eye Diagram for Converged Calibration for Stressed Eye is not coming in UI


---

### `GAR-2416` — CLONE - Tekflow-Repeated results are appearing in the UI,if we run single Acquisition

- **Type:** Defect
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** avarghes
- **Created:** 20-05-2022 01:50
- **Updated:** 26-03-2024 05:19
- **Resolved:** 22-06-2023 23:11
- **Resolution:** Will Not Fix
- **Customer Impact:** 1-High

**Description (verbatim):**

> How to reproduce
> 1)Select DC common mode Voltage from theC2C
> 2)Run the measurements in live mode  and Single Acquisition
> 3)Check the results from UI
>
> Observation: Multiple Acquisition results are appearing in the UI if we run single  Acquisition
>
>
> ++++++++++++++++++++++++++++++++++++++++++++
>
> Open in your Browser -  http://134.64.244.107:8100/login
> Static IP   -http://192.168.9.3:8100/login
> Username: atomsadmin,
> Password: Welcome123#
> 134.64.244.165 –DX( instrument service)
> Login id: sqeind
> 134.64.244.107 – PC( analysis service+VM)
> Login id: PC-BANG- 7C4P5M2\admin
> Password   :Welcome@123.


---

### `GAR-8022` — [Clarius Custom DP] Custom DP app cannot be run through UI.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** tparua
- **Created:** 01-04-2024 05:49
- **Updated:** 29-04-2024 04:26
- **Resolved:** 23-04-2024 21:35
- **Resolution:** Fixed

**Description (verbatim):**

> # Login to TekFlow App.
> # Go to Add Test
> # Select Displaypot Technology and Custom DP app.
> ## It is taking ~20 seconds time to load the app. Progress bar keeps running for 20 seconds.  !image-2024-04-01-17-52-18-275.png|width=561,height=142!
> # Click on Global settings
> ## It takes another ~10 seconds to load the Global settings pop-up window.
> # Hit run.
> # Spinning control appears and runs continuously. No activity is seen in IS or AS. When refreshed the UI, again the add test panel loads. Browser def tool console shows below error
>
> !image-2024-04-01-18-17-19-851.png|width=745,height=456!
>
>
>
>
>
> Custom DP application has a big number of step level settings and there are internal mappings for those settings. The JSON size for custom DP also has increased after recent addition of measurements as per STM requirements. It could be leading to this test run situation.
>
>
>
> With SDK tests are running fine.


---

### `GAR-6974` — [Garuda DP][Garuda DP/PCIE] [Beta26 Early Adaption feedback] UI accumulation eye diagram plot comes as blank

- **Type:** Defect
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** tparua
- **Created:** 30-11-2023 17:16
- **Updated:** 02-01-2024 22:41
- **Resolved:** 01-12-2023 03:11
- **Resolution:** Fixed

**Description (verbatim):**

> After running the Eye-Diagram measurement with population accumulation enabled the generated plot is blank. Results shows 0 hits.
>
> !image-2023-12-01-06-45-31-517.png|thumbnail!


---

### `GAR-1908` — [Design]Handling Measurement Level Acquisition Settings in DP Pre Processor

- **Type:** Story
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** tparua
- **Created:** 31-03-2022 09:31
- **Updated:** 24-01-2024 04:20
- **Resolved:** 20-06-2022 21:11
- **Resolution:** Done

**Description (verbatim):**

> DP Pre-Processor currently uses the Global settings value to create the acquisition combination list. But some of these acquisition settings are different for different measurement.
>
> Example: Different measurements have different record lengths waveform requirement. e.g: HBR2/HBR3 Eye Diagram uses 20M RL but 3.3 Pre-Emphasis measurement needs 5M RL.
>
> There is not measurement level acquisition setting supported for in Tekflow.
>
> Even if we create separate fields for RL in the global settings for each measurement, it does not solve the issue. Currently the COLLECTION<INSTRUMENT_SETUP> which is passed to the instrument service from the pre-processor is limited to only one setup. So either the automator or the scope can be set before each acquisition. Therefore changing the RL before the acquisition is not possible.


---

### `GAR-5855` — [DisplayPort] Beta18 Preprocess change is needed to achieve DP-9145 (Fix for Qualcomm)

- **Type:** Issue
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** mtatiche
- **Created:** 20-07-2023 02:12
- **Updated:** 13-09-2023 19:39
- **Resolved:** 05-09-2023 23:01
- **Resolution:** Done

**Description (verbatim):**

> In the current beta18 the preprocess service needs some change to fix the DP-9145.
>
> DP team needs to change the code in preprocess service of DisplayPort which is part of FW repo.


---

### `TEKEXPFW-5899` — Sessions are deleted from old test setup instead of newly saved test setup

- **Type:** Defect
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** vbalan
- **Created:** 08-07-2021 04:27
- **Updated:** 14-09-2023 11:58
- **Resolved:** 08-07-2021 23:47
- **Resolution:** Fixed
- **Customer Impact:** 1-High

**Description (verbatim):**

> Steps:
> 1.	Launch AppEmulator
> 2.	Save few config sessions ex: session1, session2
> 3.	Options menu > Save Test Setup > “Setup1”
> 4.	Options menu > Save Test Setup As > “Setup2”
> 5.	So now Setup2 is the loaded setup in AppEmulator
> 6.	Open Run/Config Sessions & delete a config session ex: session1
> [Expected] session1 should be deleted from “Setup2”
> [Actual] session1 is deleted from “Setup1”. I observed it in X: setup folders.
> After this Save/Config Sessions module becomes unstable and future save/recall started working strangely.


---

### `GAR-2397` — DP 3.2 Pre Emphasis and 3.3 Pre-Emphasis measurements require multiple waveform input

- **Type:** Story
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** tparua
- **Created:** 19-05-2022 03:37
- **Updated:** 28-01-2024 23:11
- **Resolved:** 19-07-2022 22:12
- **Resolution:** Done

**Description (verbatim):**

> 3.2 Pre Emphasis Level and 3.3 Pre-Emphasis Level measurements inherently runs multiple sub combinations. This requires 2 input waveforms at the same time. The limit for each of this combinations are different at times as well.
>
> See attached files for more details.
>
> If we consider them as separate steps in the application, then it creates 2 problem
> # The Json structure becomes very lengthy
> # The report aggregation of all this sub measurements under the parent measurement is not possible.
>
> Also as 2 waveforms are to be acquired for the measurement, acquisition too should be handled from the wait mode perspective.


---

### `GAR-4572` — [DP][Beta-14] Test is running and finished but can't see it on the test list panel

- **Type:** Issue
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** tparua
- **Created:** 13-03-2023 10:26
- **Updated:** 13-09-2023 19:40
- **Resolved:** 15-03-2023 10:59
- **Resolution:** Done

**Description (verbatim):**

> Followed the installation manual shared by Dev-Ops team and installed the core engine and the apps.
> Able to run the tests. Results can be seen in Mongo DB but they are not shown in test/ results panel in UI.


---

### `DP-2535` — Comp-Eye is selected for HBR3 and UHBR in UI

- **Type:** Defect
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** rmohant1
- **Created:** 10-10-2018 00:37
- **Updated:** 14-09-2023 12:16
- **Resolved:** 12-10-2018 14:24
- **Resolution:** Fixed

**Description (verbatim):**

> ->Open the TekExpress Application.
>
> ->Select Transmitter 1.5
>
> ->Select HBR3 and UHBR
>
> ->Select only Eye Diagram Test
>
> ->Go to Acquisition panel
>
> ->CompEye is selected for HBR3 and UHBR
>
> ->Note: in Eye Diagram Xml CompEye is excluded for  HBR3 and UHBR  and TPS4 is included for HBR3 and UHBR


---

### `TEKEXPFW-3043` — USB2 App resolution change on plot component loading

- **Type:** Defect
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** BBHANUCH
- **Created:** 29-01-2018 00:00
- **Updated:** 14-09-2023 11:58
- **Resolved:** 05-03-2018 00:42
- **Resolution:** Fixed
- **Components:** FW
- **Customer Impact:** 3-Low

**Description (verbatim):**

> On loading of the plotting component the resolution of the USB2 App changes and the text shrinks.


---

### `BRR-1418` — 100BaseT1-Error popup occuring while doing calibration(Load,Short,Open)&Clicking Apply Button for Return Loss measurement

- **Type:** Defect
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** tramoju
- **Created:** 06-04-2018 06:35
- **Updated:** 14-09-2023 13:19
- **Resolved:** 12-04-2018 05:06
- **Resolution:** Cannot Reproduce

**Description (verbatim):**

> 1)Select TM4 from Broadcom software
> 2)Select 100BaseT1 suite and select Return Loss measurement from test selection
> 3)Go to calibration run load,short and open calibration
> 4)We can observe that defect
> I have tested with TF-GBE fixture with 3.2 DUT and TDP1500 Probe


---

### `BRR-1293` — 1000BaseT1(Terminator&Riddick)-Return Loss Calibration Error As Reference Calibration files are not available at Specified location

- **Type:** Defect
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** tramoju
- **Created:** 01-03-2018 10:10
- **Updated:** 14-09-2023 12:49
- **Resolved:** 08-03-2018 18:48
- **Resolution:** Fixed

**Description (verbatim):**

> Steps:-
> 1)Enable Automotive Ethernet application both on Riddick and Terminator platforms
> 2)Select  1000BaseT1 suite from suite dropdown box
> 3)Go to test selection panel and select "Return Loss"measurement
> 4)Go to configure tab and select Use Pre-recorded files
> Observation:
> 1)But in Xdrive when we run the measurement calibration files will be saved at X:\Automotive Ethernet\Pre cal folder.
> 2)But for running RL in pre-recorded mode reference calibration files should be present at
> C:\Users\Public\Tektronix\TekApplications\Automotive-Ethernet\1000BaseT1


---

### `TEKEXPFW-2497` — Application crashes when Lane Setup button is clicked in Single-Ended mode

- **Type:** Defect
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** vbalan
- **Created:** 02-05-2017 04:12
- **Updated:** 14-09-2023 11:58
- **Resolved:** 11-07-2017 22:58
- **Resolution:** Fixed

**Description (verbatim):**

> Launch application
> Select Single-Ended probe type
> Now click Lane Setup button in DUT panel.
> Expectation: Lane Config OCW should popup
> Actual: Application crashes.


---

### `RNBAST-460` — Application crashes when Lane Setup button is clicked in Single-Ended mode

- **Type:** Defect
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** vbalan
- **Created:** 02-05-2017 04:10
- **Updated:** 14-09-2023 12:31
- **Resolved:** 02-01-2018 00:52
- **Resolution:** Fixed

**Description (verbatim):**

> Launch application
> Select Single-Ended probe type
> Now click Lane Setup button in DUT panel.
> Expectation: Lane Config OCW should popup
> Actual: Application crashes.


---

### `RPAMT-633` — Unit test failure blocks new build creation

- **Type:** Defect
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** vbalan
- **Created:** 17-04-2018 02:33
- **Updated:** 14-09-2023 12:30
- **Resolved:** 17-04-2018 02:36
- **Resolution:** Fixed

**Description (verbatim):**

> Unit test failure blocks new build creation


---

### `BRR-1139` — 100BaseT1 Test Selection it is not showing measurements list except PSD measurement

- **Type:** Defect
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** tramoju
- **Created:** 15-01-2018 02:15
- **Updated:** 14-09-2023 12:49
- **Resolved:** 06-02-2018 22:32
- **Resolution:** Fixed

**Description (verbatim):**

> 1)Launch Automotive Ethernet application
> 2)Go to suite dropdown select 100BaseT1 compliance suite
> 3)Go to test selection we can clearly observe the deect


---

### `TEKEXPFW-522` — [Apply Limits] Manual Testing

- **Type:** Task
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** VKUMAR2
- **Created:** 18-02-2015 22:03
- **Updated:** 14-09-2023 07:26
- **Resolved:** 02-03-2015 22:01
- **Resolution:** Done

---

### `TEKEXPFW-521` — [Apply Limits] Error handling

- **Type:** Task
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** VKUMAR2
- **Created:** 18-02-2015 21:57
- **Updated:** 14-09-2023 07:26
- **Resolved:** 02-03-2015 05:14
- **Resolution:** Done

---

### `TEKEXPFW-520` — [Apply Limits] Logic to apply limits and send appropriate pass/fail information

- **Type:** Task
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** VKUMAR2
- **Created:** 18-02-2015 21:53
- **Updated:** 14-09-2023 07:26
- **Resolved:** 26-02-2015 05:22
- **Resolution:** Done

---

### `TEKEXPFW-519` — [Apply Limits] Identify appropriate limit from the custom limits added by user

- **Type:** Task
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** VKUMAR2
- **Created:** 18-02-2015 21:52
- **Updated:** 14-09-2023 07:26
- **Resolved:** 26-02-2015 02:09
- **Resolution:** Done

---

### `TEKEXPFW-516` — Multi-lane support

- **Type:** Story
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** VKUMAR2
- **Created:** 16-02-2015 14:02
- **Updated:** 14-09-2023 07:26
- **Resolved:** 13-03-2015 05:39
- **Resolution:** Done

**Description (verbatim):**

> There are three options at this point:
> 1. Run once: Pre Custom Tests will run once in the beginning of iterations over lanes, Post Custom Tests will once in the end of iterations.
> 2. App sequencer manages executing Custom Tests iterating thru lanes
> 3. Features is disabled for multi-lane applications.
>
> Chosen option after discussions are 1 and 2. For 1, application does not need to do anything specific. For option 2, Framework will provide interfaces for Acquisition and Analysis which app can call as per need.


---

### `TEKEXPFW-515` — Restrict Pre-recorded Mode to standard tests

- **Type:** Story
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** VKUMAR2
- **Created:** 16-02-2015 13:51
- **Updated:** 14-09-2023 07:26
- **Resolved:** 05-04-2015 23:15
- **Resolution:** Done

**Description (verbatim):**

> Allow only standard tests in pre-recorded mode. Gray out and deselect custom tests in pre-recorded mode.


---

### `TEKEXPFW-514` — Remove delays

- **Type:** Story
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** VKUMAR2
- **Created:** 16-02-2015 13:50
- **Updated:** 14-09-2023 07:26
- **Resolved:** 24-03-2015 23:12
- **Resolution:** Done

**Description (verbatim):**

> Hard coded delay has been used at multiple places to ensure proper sequencing. However, this is adding to overall execution time of Custom Tests. We need to remove such instances of delay and replace them with *OPC? or equivalent mechanism.


---

### `TEKEXPFW-513` — Remove Analyze using DPOJET/Base Scope option

- **Type:** Story
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** VKUMAR2
- **Created:** 16-02-2015 13:49
- **Updated:** 14-09-2023 07:26
- **Resolved:** 23-03-2015 23:01
- **Resolution:** Done

**Description (verbatim):**

> Remove Analyze using DPOJET/Base Scope option. A setup file can have base scope and DPOJET measurements. Check for presence of both and then accordingly perform the result retrieval, without having needed this option.


---

### `TEKEXPFW-511` — Ability to use standard Limits Editor to edit the limits

- **Type:** Story
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** VKUMAR2
- **Created:** 16-02-2015 13:47
- **Updated:** 14-09-2023 07:26
- **Resolved:** 03-03-2015 03:13
- **Resolution:** Done

**Description (verbatim):**

> Can the standard limits editor be used to edit the limits?


---

### `TEKEXPFW-510` — Ability to apply limits

- **Type:** Story
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** VKUMAR2
- **Created:** 16-02-2015 13:46
- **Updated:** 14-09-2023 07:26
- **Resolved:** 03-03-2015 03:16
- **Resolution:** Done

**Description (verbatim):**

> Provide the ability to apply limits.
> Provide the ability to override this in the python script in case further processing is needed to arrive at the limits.
>
> In order to apply limits, we are expecting the user to add limits with header matching the measurement name.
> If the user adds the limit header for a test then TekExpress will try to match this in the following order:
> Step1: Try to find a limit for the custom name added by user on DPOJET for the measurement. (DPOJET:MEAS<x>:CUSTOMNAME)
> Step2: Try to find limit for the display name. This is done using the measurement lookup XML
> Step3: Try to find limit against the graticule name for some of the base scope measurements
> Step4: Query name of the measurement is also considered for the limit match.
>
> If no match is found for any of the names associated with a measurement, then "N.A" will be shown against the limits and margin columns and pass/fail will show "Informative".


---

### `TEKEXPFW-509` — Test names in DPOJET and TekExpress reports should match

- **Type:** Story
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** VKUMAR2
- **Created:** 16-02-2015 13:41
- **Updated:** 14-09-2023 07:26
- **Resolved:** 26-03-2015 20:35
- **Resolution:** Done

**Description (verbatim):**

> Summary:
> The DPOJET Test names (Scope measurement test names) do not match to what is shown on the scope screen and result tab or the report from TekExpress. Make the names in both places match.
> Eg.: When we add "+Duty Cycle1" from the UI TekExpress shows "PDUTY1" in results and report.
>
> Details:
> TekExpress queries the name of the measurement through PI query "DPOJET:MEAS<x>:NAME?". The query result does not match the name shown on the UI for the measurement most of the time. Hence the mismatch was found and this was reported by an AE during Avatar EUT cycle.
>
> Proposed solution:
> If there is a mechanism by which we can receive the UI name of the measurement, we can ensure that we show the UI name in the results/reports panel of TekExpress. This way user can match the name with the name in the DPOJET UI.
>
> Additional requirement:
> In custom tests, there is a requirement to apply limits for the custom test added by the user. In order to implement this, we are expecting the user to add limits with header matching the measurement name.
> If the user adds the limit header as "+ Duty Cycle1" then TekExpress will not have a way to match this because PI query returns "PDUTY1". If we can query the UI name somehow, then we can try to match the UI as well as PI name to see if there is a match for limits.


---

### `TEKEXPFW-508` — Implement dirty state of CTM in test update and test import scenarios

- **Type:** Story
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** VKUMAR2
- **Created:** 16-02-2015 13:39
- **Updated:** 14-09-2023 07:26
- **Resolved:** 06-04-2015 07:23
- **Resolution:** Done

**Description (verbatim):**

> 1. Form closing message for CTM appears every time close CTM is closed. Track changes and pop up this message only when there are unsaved changes. Change the message from “Custom Test Manager is closing. Any unsaved changes will be lost. Do you want to continue ?” to “Unsaved changes will be lost. Do you want to continue ?”. This will not be application to check box selection of individual tests, Show button and Import/Export button.


---

### `TEKEXPFW-507` — Make CTM easily discoverable

- **Type:** Story
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** VKUMAR2
- **Created:** 16-02-2015 13:38
- **Updated:** 14-09-2023 07:26
- **Resolved:** 23-03-2015 22:52
- **Resolution:** Done

**Description (verbatim):**

> It is hard to find the custom test manager under the options Menu. Add a button in the Test Selection Panel besides Deselect All to resolve that.


---

### `GAR-6224` — Not Able to Run More than 3 scenarios in LPDDR4 App

- **Type:** Issue
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** u615732
- **Created:** 05-09-2023 04:33
- **Updated:** 12-12-2023 00:58
- **Resolved:** 25-10-2023 21:12
- **Resolution:** Done

**Description (verbatim):**

> Not Able to Run More than 3 scenarios in LPDDR4 App
> test id: [http://pc-bang-12860j3:4200/tekflow/test/status/adb398a0-367b-4dbf-a88c-7ae6f3adbb79],
> Attached Logs.
>
> We had a debug call.
> We were able to root cause the issue.
> It is because of the limit files that was updated recently (attached limits file too).
>
>
>
> *LOW LEVEL DESIGN DOCUMENT:*
>
> *[MongoSizePerformance_LLDD.docx|https://fortive.sharepoint.com/:w:/r/sites/TEK-PERF-PRJ-GARUDA/Shared%20Documents/General/04.Technical%20Documents/1.%20SW/01.Design%20Docs/Detailed-Design/MongoSizePerformance_LLDD.docx?d=we0ad3348b93d4b95987af774354aba39&csf=1&web=1&e=KQ4qNk]*


---

### `GAR-4944` — Analysis Service is Throwing Error while running measurements

- **Type:** Defect
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** sjhawar
- **Created:** 24-04-2023 21:32
- **Updated:** 15-10-2023 17:50
- **Resolved:** 25-04-2023 07:44
- **Resolution:** Fixed

**Description (verbatim):**

> Run the test for LPDDR4 application and randomly test are failed and exceptions are coming.
>
> Reference id; http://pc-bang-12860j3:4200/tekflow/test/results/b054c2ed-338e-4ea1-abbd-c18b9eb8c20c
>
> Attached the snapshots of Error coming.


---

### `MCT-66` — Switching mode from LIVE to PRE-RECORDED wfms and back will reset the expected HS bit rate to 2.5G. If the user enters 1.3G, the sw should remember this value and leave it set.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** ashoka
- **Created:** 17-11-2014 20:44
- **Updated:** 14-09-2023 13:56
- **Resolved:** 12-02-2015 03:34
- **Resolution:** Not a Defect

**Description (verbatim):**

> Switching mode from LIVE to PRE-RECORDED wfms and back will reset the expected HS bit rate to 2.5G.  If the user enters 1.3G, the sw should remember this value and leave it set.


---

### `TEKEXPFW-310` — [Develop UIS]Recommend UI for re-ordering Pre/Post custom tests in their respective tables

- **Type:** Task
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** SBHARATH
- **Created:** 14-11-2014 01:01
- **Updated:** 13-09-2023 18:24
- **Resolved:** 17-11-2014 01:23
- **Resolution:** Done
- **Components:** User Interface

**Description (verbatim):**

> Recommend UI for re-ordering Pre Custom and Post custom tests in their respective tables.
> Any new test created or if tests are imported, they get added to the end of the list of Pre/Post custom table.
> User should have the provision to change the order in which these tests will get executed.
> A usability recommendation is required for this.


---

### `GAR-7825` — [Clarius DP14] Unable to add sequence for DP_HBR application using SDK script

- **Type:** Defect
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** mtatiche
- **Created:** 04-03-2024 00:25
- **Updated:** 29-04-2024 05:04
- **Resolved:** 31-03-2024 22:30
- **Resolution:** Fixed
- **Customer Impact:** 1-High

**Description (verbatim):**

> From SDK Script,
>
> When we are trying to add a sequence with DP_HBR app, its adding the HBR2 application.
>
>
>
> This issue is blocking the execution of HBR SDK scripts.( around 110 test cases)


---

### `GAR-6797` — Plot is not coming in the PLOT panel (UI) and in our report as well - on Beta-23

- **Type:** Issue
- **Status:** Open
- **Priority:** Blocker
- **Reporter:** u618322
- **Created:** 09-11-2023 00:43
- **Updated:** 30-11-2023 21:33

**Description (verbatim):**

> Update on 01-Dec-2023 from USB team:
> After further debug, team identified that is the issue is with latest version (v0.87) of SigTest tool. This is not related to TekFlow platform
> -----------------------------------------------------------------------------------------------------------------------------------
> The plots were appearing in Beta 22, but broken in Beta 23.
> !1.png!


---

### `GAR-7078` — [OnScope] On-Scope UI: Manage tab - A user to have the same options as existing TF.

- **Type:** Story
- **Status:** Open
- **Priority:** Blocker
- **Reporter:** bpatil
- **Created:** 07-12-2023 08:23
- **Updated:** 07-12-2023 08:23

**Description (verbatim):**

> A user to have the same options as existing TF.
>
> No option needed to add scope as the current system will be the test bench.
> • This needs to be automatically configured internally. <No change from existing TF>


---

### `GAR-7077` — [OnScope] On-Scope UI: Tests Tab -A user to have the same options as existing TF.

- **Type:** Story
- **Status:** Open
- **Priority:** Blocker
- **Reporter:** bpatil
- **Created:** 07-12-2023 08:18
- **Updated:** 07-12-2023 08:18

**Description (verbatim):**

> A user to have the same options as existing TF.
>
> +<No change from existing TF>+


---

### `GAR-2423` — [UI] Global settings must have group option (Box/Tab) for different setting groups

- **Type:** Story
- **Status:** Open
- **Priority:** Blocker
- **Reporter:** ckappaga
- **Created:** 22-05-2022 23:14
- **Updated:** 17-08-2022 02:22

**Description (verbatim):**

> # In Current GUI of TekFlow, we are not able to group a list of Global setting that below one group.
> # Please make a provision to either create TAB wise grouping or BOX wise grouping in the GUI
> # So, global settings can differentiate the respective group setting easily.
> # See attached LPDDR4 snap shots where all the WRITE and READ burst related settings are in same order and does not differentiate like any earlier DDR applications (DDRA / TekExpress).
> # See another snap shot, which gives a minimal request to identify a group of measurements in a BOX.
> # This request was also asked Cypress (verbally) over a call with the customer.


---

### `GAR-7080` — [OnScope] On-Scope UI: De-embedding Filter support - User should be able to select a filter file

- **Type:** Story
- **Status:** Open
- **Priority:** Blocker
- **Reporter:** bpatil
- **Created:** 07-12-2023 08:27
- **Updated:** 07-12-2023 08:27

**Description (verbatim):**

> User should be able to select a filter file
>
>
>
> Current TE and TF off-scope supports this +<No change from existing TF>+


---

### `GAR-7079` — [OnScope] On-Scope UI: Results - User should have the ability to view the results after each run

- **Type:** Story
- **Status:** Open
- **Priority:** Blocker
- **Reporter:** bpatil
- **Created:** 07-12-2023 08:25
- **Updated:** 07-12-2023 08:25

**Description (verbatim):**

> User should have the ability to view the results after each run
>
> Current TE and TF off-scope supports this +<No change from existing TF>+


---

### `GAR-6124` — Number of UIs (Unit Interval) Feature

- **Type:** Epic
- **Status:** Open
- **Priority:** Blocker
- **Reporter:** sjhawar
- **Created:** 23-08-2023 23:24
- **Updated:** 30-01-2024 03:55

**Description (verbatim):**

> +Number of UIs (Unit Interval) Feature+
>
> We mention the #UIs to acquired, and IS should be able to acquire all those UIs using period measurement (we need to use Both edges as par to setting for DDR)
>
> AS should be able to run all test and give only 1 overall result for the test. If plot is there it should give only overall plot for all #UIs captured.
>
> Since we need to acquire multiple times for this feature, we need an option to save or not save the waveform in database as it can consume lot of space.
>
>
>
> Note: Already there is POPULATION plugin provided by FW and plugin is broken and End to End requirement is not supported in that.
>
>
>
> Tapo:
> * Each Waveform analyzed independently.
> * User can be in interested in each waveform result. - not required
> * Every waveform will generate eye diagram.
> *


---

### `GAR-7076` — [OnScope] Application accessibility - A user should be able to access using the URL through a browser in addition to above requirement (Tekscope UI)

- **Type:** Story
- **Status:** Open
- **Priority:** Blocker
- **Reporter:** bpatil
- **Created:** 07-12-2023 08:16
- **Updated:** 07-12-2023 08:16

**Description (verbatim):**

> A user should be able to access using the URL through a browser in addition to above requirement (Tekscope UI)
>
> +Engg: Tekflow is already accessible through URL. <No change from existing TF>+


---

### `GAR-4225` — [TF-LP4] New GUI issues related to LPDDR4

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Blocker
- **Reporter:** arck
- **Created:** 24-01-2023 00:44
- **Updated:** 22-02-2024 21:24
- **Resolved:** 22-02-2024 21:24
- **Resolution:** Done

**Description (verbatim):**

> PFA document has new GUI issues related to LPDDR4 application.


---

### `GAR-5995` — TF UI not responding.

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Blocker
- **Reporter:** u615732
- **Created:** 07-08-2023 04:37
- **Updated:** 31-03-2024 19:14
- **Resolved:** 14-03-2024 00:24
- **Resolution:** Cannot Reproduce

**Description (verbatim):**

> observed UI refresh issue and VM hang issues in beta18 not allowing to select anything on UI, TF UI does to not responding mode and get stuck when we run multiple iteration of Eye Diagram test.
> We restart the Test PC and after that UI start responding.
>
>
>
> Observed the UI not responding issue with Beta#22 and attached the snap and log "TekFlowErrorLogs1". Restarting the VM helps resolve this issue.
>
> we also observed that engine service is Excited automatically in test run (attached screenshot).


---

### `GAR-4847` — Ui is sending additionalProperties instead of additionalProperties.executionIds

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Blocker
- **Reporter:** u616478
- **Created:** 04-04-2023 02:15
- **Updated:** 14-09-2023 12:14
- **Resolved:** 04-04-2023 07:42
- **Resolution:** Fixed
- **Customer Impact:** 2-Medium

**Description (verbatim):**

> !image-2023-04-04-14-48-30-835.png!
>
> Ui is sending additionalProperties instead of additionalProperties.executionIds to the filter Api.
>
>
>
> !image-2023-04-04-14-47-48-069.png!


---

### `GAR-4228` — New UI Service stopped post TekFlow installation

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Blocker
- **Reporter:** kavin
- **Created:** 24-01-2023 20:05
- **Updated:** 13-09-2023 19:40
- **Resolved:** 20-02-2023 00:44
- **Resolution:** Done

**Description (verbatim):**

> Observations with Beta13 installer
>
> Install Beta13 VM, AS and IS.
>
> After installation we noticed that new UX was not coming up with 4200 port
>
> On debugging we found that New UI Service was not running
>
> Old UX was coming up with 8100 port


---

### `GAR-6961` — [Garuda DP] UI Accumulation Feature issues: Analysis related

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Blocker
- **Reporter:** tparua
- **Created:** 28-11-2023 10:31
- **Updated:** 02-01-2024 22:41
- **Resolved:** 30-11-2023 07:58
- **Resolution:** Done

**Description (verbatim):**

> Test Scenario1:
>
> - Create a test session where some of the measurements have UI accumulation feature enabled and some do not.
> - Observation: All measurements are running on the first waveform only. (Acquisition is handled in preprocessor and happening properly)
>
> Test Scenario 2:
>
> - Create a test session where all the measurements have UI accumulation feature enabled but the number of population is different.
> - Observation: Only one measurement is running for all acquisitions, rest all running on only the first waveform. (Acquisition is handled in preprocessor and happening properly) When all measurement has the same population number all are running fine.
>
>
> Summary:
>
> Working cases:
> 1. When Iteration mode is selected for all measurements
> 2. When all the measurements in the test session has population enabled and running on same population.
> 3. When all the measurements in the test session has population NOT enabled


---

### `GAR-3909` — 1. Issue with Special characters (# or any other special character) in  password with UI service.

- **Type:** Task
- **Status:** Resolved
- **Priority:** Blocker
- **Reporter:** u616478
- **Created:** 30-11-2022 02:37
- **Updated:** 14-09-2023 08:20
- **Resolved:** 30-11-2022 02:37
- **Resolution:** Done

---

### `GAR-1841` — Passing combination of one measurement used by another for execution

- **Type:** Story
- **Status:** Resolved
- **Priority:** Blocker
- **Reporter:** vsiddhar
- **Created:** 29-03-2022 03:43
- **Updated:** 13-09-2023 19:41
- **Resolved:** 11-10-2022 02:09
- **Resolution:** Done

**Description (verbatim):**

> We know there are 4 Voltage Swings and 4 Pre-emphasis in DP 1.4.
>
> VS - 400 mV, 600 mV, 800 mV and 1200 mV
> PE - 0 dB, 3.5 dB, 6 dB, 9 dB
>
> HBR2/HBR3 Eye diagram Test can run on all this combination of waveforms based on the user selection of VS and PE.
> Let's say Eye Diagram passed in some of this combinations and fails for some. The requirement is that all the jitter tests should run only on the passing combinations of Eye Diagram test.


---

### `GAR-6753` — [Garuda DP] [Beta-23 Issue] Measurements which are implemented as separate scenario only runs for first waveform

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Blocker
- **Reporter:** tparua
- **Created:** 06-11-2023 21:06
- **Updated:** 11-12-2023 22:43
- **Resolved:** 11-12-2023 22:43
- **Resolution:** Done

**Description (verbatim):**

> DP 3.2, 3.3 and 3.4 measurements are written as separate scenario as they have sub steps. It is observed that when we select multiple lanes under the same group in Beta-23, the measurements only run for the first measurement it finds.
>
> For these measurements, all the acquisition are done in a previous scenario. When the execution reaches to the measurement scenario, it only picks the first waveform from all acquired waveforms.
>
> This is blocker issue.
>
> !image-2023-11-07-10-36-39-746.png|thumbnail!


---

### `TEDIBCI-7488` — [Qualcomm][Beta 15 I5  issue] The Tekflow core engine installation is failing in the Qualcomm setup

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Blocker
- **Reporter:** tparua
- **Created:** 31-05-2023 04:38
- **Updated:** 09-12-2023 21:25
- **Resolved:** 07-06-2023 05:59
- **Resolution:** Done

**Description (verbatim):**

> Qualcomm tried to install the Beta 15 #3 build following the installation manual. But the installation failed.
> We did a complete cleanup of the existing installation and installed the new build from scratch. But it failed for multiple trials.
>
> Installation logs are attached.


---

### `TEDIBCI-7316` — [DispalyPort-Tx] Fresh installation for Beta15 Intermediate2 PCIe and DP builds not working

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Blocker
- **Reporter:** tparua
- **Created:** 04-05-2023 08:58
- **Updated:** 09-12-2023 21:54
- **Resolved:** 11-08-2023 05:13
- **Resolution:** Done

**Description (verbatim):**

> The latest PCIe and DP Beta 15 Intermediate2 builds has issues with fresh installation. Currently only upgrade is working. This issue is identified today. Debugged with Dev-ops team today an identified the root cause. They will internally discuss and get back with the fix.
>
> Installer links:
>
> PCIe: http://garuda-nexus.global.tektronix.net:8081/#browse/browse:ATOMS-PACKAGE-REPOSITORY:AnalysisService%2FPCIe-v0.15.2.beta_1.exe
>
> DP: http://garuda-nexus.global.tektronix.net:8081/#browse/browse:ATOMS-PACKAGE-REPOSITORY:AnalysisService%2FDisplayPort-v0.15.2.beta_1.exe


---

### `GAR-5151` — [Garuda DP][Beta-15 Intermediate-4] Analysis service throws error during filter application

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Blocker
- **Reporter:** tparua
- **Created:** 08-05-2023 09:15
- **Updated:** 13-09-2023 19:40
- **Resolved:** 23-05-2023 01:28
- **Resolution:** Done

**Description (verbatim):**

> In DP for TP3 testpoint measurement, we apply both Cable Filter and CTLE filter. And it happens in sequence. First cable filter is applied and the on top of that the CTLE filter is applied.
> In the latest Intermediate-4 build we are observing the analysis service directly going for applying CTLe filter without applying Cable filter. As it is not getting the Cable filter applied waveform path, it is throwing error.
> !image-2023-05-08-21-37-22-047.png|thumbnail!
>
> This issue was not observed in the Intermediate-3 build
> !image-2023-05-08-21-38-16-880.png|thumbnail!
>
> Also the AS gets closed automatically when we run Eye Diagram Measurement, throwing the same error.


---

### `TEDIBCI-7044` — [DisplayPort-Tx][Beta-14] Unable to apply settings in the UI

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Blocker
- **Reporter:** tparua
- **Created:** 13-03-2023 10:30
- **Updated:** 10-12-2023 01:04
- **Resolved:** 26-03-2023 22:27
- **Resolution:** Done

**Description (verbatim):**

> Followed the installation manual shared by Dev-Ops team and installed the core engine and the apps. But When we make some changes in the global settings and click apply button, the pop-up window does not close.


---

### `GAR-4638` — Read possible values from additional values instead of parsing them from constraints

- **Type:** Task
- **Status:** Resolved
- **Priority:** Blocker
- **Reporter:** u616478
- **Created:** 16-03-2023 04:22
- **Updated:** 13-09-2023 19:40
- **Resolved:** 16-03-2023 04:43
- **Resolution:** Done

---

### `TEDIBCI-8172` — Azure-Windows-Test-Suite-Execution-001 connection is broken and hence unable to run the TekPlay tests from jenkins

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Blocker
- **Reporter:** mtatiche
- **Created:** 02-10-2023 09:14
- **Updated:** 14-02-2024 23:31
- **Resolved:** 10-10-2023 21:52
- **Resolution:** Fixed

**Description (verbatim):**

> while running API tests from jenkins via Tekplay, we are often seeing that the below node is offline or the connection is broken
> h1. Azure-Windows-Test-Suite-Execution-001


---

### `TEDIBCI-7538` — [STM France/MSI Taiwan AE's setup][Beta15] TekFlowNetworkService is not enabled during installation

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Blocker
- **Reporter:** tparua
- **Created:** 13-06-2023 05:37
- **Updated:** 09-12-2023 21:15
- **Resolved:** 26-07-2023 04:19
- **Resolution:** Done

**Description (verbatim):**

> Build Version:
>
> TF PlatForm: TekFlow-Platform-v0.15.5.beta
> DisplayPort: DisplayPort-v0.15.5.beta_9
>
> The wizard says Installation of Platform Package was successful.
> But In the Install log found the error.
> !image-2023-06-13-18-05-52-651.png|thumbnail!
>
> I ran the command manually in powershell in admin mode.
> That enabled the service.
>
> The service is installed and running but I am getting “MessageBroker end point not reachable error” in IS.
>
> Tried using Host Name and IP both in the app settings of IS. Did not work.


---

### `DPOJET-1017` — Memory Leak fix enhancements to have dispose method called on Clear

- **Type:** Task
- **Status:** Resolved
- **Priority:** Blocker
- **Reporter:** SMAHADEV
- **Created:** 10-12-2014 23:42
- **Updated:** 13-09-2023 20:00
- **Resolved:** 20-01-2015 22:35
- **Resolution:** Done

---

### `GAR-7365` — [Clarius DP] DP 3.4 measurement is failing due to error in Execution Engine

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Blocker
- **Reporter:** tparua
- **Created:** 04-01-2024 03:15
- **Updated:** 12-03-2024 05:16
- **Resolved:** 17-01-2024 06:51
- **Resolution:** Done

**Description (verbatim):**

> 3.4 measurement has interdependent steps where the result of one step is used in the other step.
>
> VTX_PE_RATIO is dependent on VTX_MEQ_LEVEL0_DELTA.
>
> "reference": "#/step['VTX_MEQ_LEVEL0_DELTA_600mV6dBto0dB']/results[*].value"
>
> While executing this step in the measurement the execution engine is getting error and the measurement fails. In UI the test fails.
>
> But in the AS continues with remaining steps.
>
> Execution engine log message:
>
> {
> "id": "13bc1d8b-d3d4-446e-9d59-8bc448856451",
> "level": "ERROR",
> "logTime": "2024-01-03T11:13:45.217+00:00",
> "host": "tekflow_host",
> "service": "ExecutionEngine",
> "transactionId": "5547efd3-e953-4f43-8e25-45d279461cf5",
> "transactionType": "TEST",
> "additionalTags": {},
> "source": {
> "processId": "74",
> "threadId": "org.springframework.amqp.rabbit.RabbitListenerEndpointContainer#5-1"
> },
> "message": "Error scheduling the task ",
> "trace": "java.lang.NullPointerException\n\tat com.tek.atoms.core.engine.execution.utils.StepResponseResolver.filterIterationTasks(StepResponseResolver.java:80)\n\tat com.tek.atoms.core.engine.execution.utils.StepResponseResolver.resolve(StepResponseResolver.java:44)\n\tat com.tek.atoms.core.engine.execution.utils.DependentResponseResolver.resolve(DependentResponseResolver.java:54)\n\tat com.tek.atoms.core.engine.execution.utils.DependentResponseResolver.resolveResponseDepInInputs(DependentResponseResolver.java:48)\n\tat com.tek.atoms.core.engine.execution.utils.DependentResponseResolver.resolve(DependentResponseResolver.java:32)\n\tat com.tek.atoms.core.engine.execution.task.impl.TaskSchedulerImpl.schedule(TaskSchedulerImpl.java:188)\n\tat com.tek.atoms.core.engine.execution.task.impl.TaskSchedulerImpl.schedule(TaskSchedulerImpl.java:90)\n\tat com.tek.atoms.core.engine.execution.task.impl.TaskSchedulerImpl.listenForScheduleTaskRequests(TaskSchedulerImpl.java:174)\n\tat jdk.internal.reflect.GeneratedMethodAccessor140.invoke(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\n\tat java.base/java.lang.reflect.Method.invoke(Unknown Source)\n\tat org.springframework.messaging.handler.invocation.InvocableHandlerMethod.doInvoke(InvocableHandlerMethod.java:169)\n\tat org.springframework.messaging.handler.invocation.InvocableHandlerMethod.invoke(InvocableHandlerMethod.java:119)\n\tat org.springframework.amqp.rabbit.listener.adapter.HandlerAdapter.invoke(HandlerAdapter.java:75)\n\tat org.springframework.amqp.rabbit.listener.adapter.MessagingMessageListenerAdapter.invokeHandler(MessagingMessageListenerAdapter.java:261)\n\tat org.springframework.amqp.rabbit.listener.adapter.MessagingMessageListenerAdapter.invokeHandlerAndProcessResult(MessagingMessageListenerAdapter.java:207)\n\tat org.springframework.amqp.rabbit.listener.adapter.MessagingMessageListenerAdapter.onMessage(MessagingMessageListenerAdapter.java:146)\n\tat org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer.doInvokeListener(AbstractMessageListenerContainer.java:1665)\n\tat org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer.actualInvokeListener(AbstractMessageListenerContainer.java:1584)\n\tat jdk.internal.reflect.GeneratedMethodAccessor89.invoke(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\n\tat java.base/java.lang.reflect.Method.invoke(Unknown Source)\n\tat org.springframework.aop.support.AopUtils.invokeJoinpointUsingReflection(AopUtils.java:344)\n\tat org.springframework.aop.framework.ReflectiveMethodInvocation.invokeJoinpoint(ReflectiveMethodInvocation.java:198)\n\tat org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:163)\n\tat org.springframework.retry.interceptor.RetryOperationsInterceptor$1.doWithRetry(RetryOperationsInterceptor.java:97)\n\tat org.springframework.retry.support.RetryTemplate.doExecute(RetryTemplate.java:329)\n\tat org.springframework.retry.support.RetryTemplate.execute(RetryTemplate.java:225)\n\tat org.springframework.retry.interceptor.RetryOperationsInterceptor.invoke(RetryOperationsInterceptor.java:122)\n\tat org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:186)\n\tat org.springframework.aop.framework.JdkDynamicAopProxy.invoke(JdkDynamicAopProxy.java:215)\n\tat org.springframework.amqp.rabbit.listener.$Proxy103.invokeListener(Unknown Source)\n\tat org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer.invokeListener(AbstractMessageListenerContainer.java:1572)\n\tat org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer.doExecuteListener(AbstractMessageListenerContainer.java:1563)\n\tat org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer.executeListener(AbstractMessageListenerContainer.java:1507)\n\tat org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer.doReceiveAndExecute(SimpleMessageListenerContainer.java:967)\n\tat org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer.receiveAndExecute(SimpleMessageListenerContainer.java:914)\n\tat org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer.access$1600(SimpleMessageListenerContainer.java:83)\n\tat org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.mainLoop(SimpleMessageListenerContainer.java:1291)\n\tat org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer$AsyncMessageProcessingConsumer.run(SimpleMessageListenerContainer.java:1197)\n\tat java.base/java.lang.Thread.run(Unknown Source)\n"
> }


---

### `GAR-6771` — [Garuda DP][Beta-23 Issue] DP sub measurement is abroting as source in the result json comes as null.

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Blocker
- **Reporter:** tparua
- **Created:** 08-11-2023 02:51
- **Updated:** 31-03-2024 18:12
- **Resolved:** 12-03-2024 05:16
- **Resolution:** Duplicate

**Description (verbatim):**

> For DP HBR 3.4 measurement, the result of the step "MEQLevelDelta" i used as the limit for PE_Level_Ratio step. PE Level ratio is failing to as it fails to retrive the MEQLevelDelta result and aboting.
>
> Observation:
> 1. Dependency between analysis steps is not working
>
> Assumption:
> Due to analysis steps don't have source name updated, it is failing.
>
> When Measurement is a separate Scenario:
> !image-2023-11-08-16-20-44-167.png|thumbnail!
>
> When Measurement is in same scenario;
> !image-2023-11-08-16-21-28-375.png|thumbnail!


---

### `GAR-4224` — [TF-LP4] Sources field GUI are missing in LPDDR4 app.

- **Type:** Defect
- **Status:** Verified
- **Priority:** Blocker
- **Reporter:** arck
- **Created:** 24-01-2023 00:36
- **Updated:** 14-09-2023 12:14
- **Resolved:** 20-03-2023 00:53
- **Resolution:** Fixed

**Description (verbatim):**

> Sources field GUI are missing for LPDDR4 application in TF-FW-Beta#13 (Attached image)


---

### `GAR-3634` — waveforms are not displaying on UI

- **Type:** Defect
- **Status:** Verified
- **Priority:** Blocker
- **Reporter:** u612584
- **Created:** 14-10-2022 01:10
- **Updated:** 23-04-2024 03:43
- **Resolved:** 17-10-2022 03:04
- **Resolution:** Fixed

**Description (verbatim):**

> results are not displaying on the UI
>
> steps
> 1. click on the test
> 2. click on step> result
> 3. select waveforms from wavefrom drop down


---

### `GAR-5559` — [Ux][Garuda DP][PLAE Feedback-Gary] TestBench- Add Instrument is not intutive

- **Type:** Issue
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 20-06-2023 21:13
- **Updated:** 28-11-2023 19:45
- **Resolved:** 21-11-2023 03:37
- **Resolution:** Done

**Description (verbatim):**

> Test Environment:
> 1.1.	Dell Precision 5550 Laptop
> 1.2.	Intel(R) Core(TM) i9-10885H CPU @ 2.40GHz   2.40 GHz
> 1.3.	64.0 GB RAM
>
> SW Versions:
> 2.1.	TekFlow-Platform-v0.15.3.beta
> 2.2.	DisplayPort-v0.15.3.beta_6
>
> - When setting up a Test Bench for first time, after filling out top level info the UI shows an area to add instruments with a message that says “No instruments added! Click on ‘+’ to add new”
>
> - The “+” in the upper right of this section is not very prominent, and in my browser window the page did not adjust zoom to fit my window…so the “+” wasn’t visible at all until I noticed the page needed to be scrolled to the right to see the “+”
>
> - We should be dynamically adjusting the TekFlow UI to match the browser so all elements are visible without user having to scroll left/right to see all of the UI
>
> - We should make the “+” stand out more to the user
>
> - We should make the message in the window clickable so that user can add first instrument by clicking the “No Instruments added!...” message


---

### `GAR-2670` — Performance of ATOMS GUI is slow

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** bhap
- **Created:** 08-06-2022 18:16
- **Updated:** 01-01-2024 20:58
- **Resolved:** 27-06-2022 04:04
- **Resolution:** Fixed

**Description (verbatim):**

> to Customer:Synopsys
> Performance of ATOMS GUI is slow.
> Login to any of the VM and click on Application or Test controls. It takes more time to list down all apps and tests to come up in the atoms GUI.
>
> ---------------------------------
>
> Observation
> 1) API to fetch the test list is returning the data at a slower rate which is results delay of populating the test page in UI.


---

### `GAR-7223` — Copied logs and downloaded logs, date time shows incorrect time, its not matching with GUI

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** bhap
- **Created:** 18-12-2023 05:17
- **Updated:** 19-03-2024 07:24
- **Resolved:** 19-12-2023 06:27
- **Resolution:** Fixed

**Description (verbatim):**

> Copied logs, date time shows incorrect time, its not matching with GUI.
>
> Downloaded logs, date time shows incorrect time, its not matching with GUI.


---

### `GAR-4684` — Non-licnesed apps showing in GUI in Manage->Apps page and also in Test Run page. And able to run tests for non-licensed apps as well.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** bhap
- **Created:** 20-03-2023 23:55
- **Updated:** 19-03-2024 07:27
- **Resolved:** 21-03-2023 00:14
- **Resolution:** Not a Defect

**Description (verbatim):**

> Non-licnesed apps showing in GUI in Manage->Apps page and also in Test Run page. And able to run tests for non-licensed apps as well.
>
> VM: 172.19.211.237
>
> GUI_Build#beta51_805
>
> API is returning correct. But GUI is broken.


---

### `GAR-6289` — UI Freeze: When we start test UI freezes

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** jdomadiy
- **Created:** 11-09-2023 04:58
- **Updated:** 26-03-2024 04:48
- **Resolved:** 17-01-2024 20:54
- **Resolution:** Fixed
- **Customer Impact:** 1-High

**Description (verbatim):**

> UI Freeze: When we start test UI freezes. It needs a refresh to show UI again.


---

### `GAR-5856` — [DisplayPort] UI refresh issue

- **Type:** Issue
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** mtatiche
- **Created:** 20-07-2023 02:17
- **Updated:** 14-09-2023 10:35
- **Resolved:** 12-09-2023 00:01
- **Resolution:** Duplicate

**Description (verbatim):**

> # List of tests is not loading automatically (issue seen intermittently)
> # status of test is not updating automatically as and when the Run test is clicked. Needs to do a manual refresh of the UI in that test status page.
> # License page is not loading properly sometimes.
> # When clicked on delete test button in the list of tests (the delete confirmation page is not loading controls properly)


---

### `GAR-7609` — Clarius version in the UI(about panel) is blank

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** sups
- **Created:** 04-02-2024 21:34
- **Updated:** 06-02-2024 00:00
- **Resolved:** 06-02-2024 00:00
- **Resolution:** Duplicate

**Description (verbatim):**

> Build used: Clarius 1.0.0 Master 94
>
> Clarius version in the UI(about panel) is blank


---

### `GAR-6264` — [Garuda DP][Beta-22] Waveform download is not working from UI

- **Type:** Issue
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 08-09-2023 05:49
- **Updated:** 10-10-2023 21:30
- **Resolved:** 09-10-2023 02:39
- **Resolution:** Done

**Description (verbatim):**

> 1. Go to View Results
> 2. Go to waveform tab
> 3. Click on menu and click download.
>
> Waveform does not download
>
> Select a different waveform from download. Repeat step 3.
> It downloads.
>
> The default loaded waveform is not downloading.


---

### `GAR-5342` — [Garuda DP] [PLAE Feedback-Nitin] UI hang issue

- **Type:** Issue
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 25-05-2023 05:36
- **Updated:** 14-09-2023 10:35
- **Resolved:** 12-09-2023 00:14
- **Resolution:** Duplicate

**Description (verbatim):**

> At times when the internet is slow or the VM is slow, the UI becomes unresponsive. The results page does not load, and it does not show any load error.
>
> PLAE comment:
>
> !image-2023-05-25-18-06-27-541.png|thumbnail!


---

### `GAR-1343` — Multiple tests are getting deleted very slowly from UI.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** u612584
- **Created:** 21-01-2022 01:11
- **Updated:** 26-03-2024 01:46
- **Resolved:** 07-09-2022 02:01
- **Resolution:** Not a Defect

**Description (verbatim):**

> when multiple tests are deleted from UI, it is getting deleted very slowly.


---

### `GAR-5929` — Unable to start test using API when we specify test bench name in request. Ideally, we should be able to execut test either by using id or name of test bench. Was working fine on beta8/beta19. In View results GUI, test bench shows as "Deleted"

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** bhap
- **Created:** 31-07-2023 10:35
- **Updated:** 19-03-2024 07:17
- **Resolved:** 08-08-2023 03:28
- **Resolution:** Fixed

**Description (verbatim):**

> Steps:
>
> 1> Run test using API. Here in Body specify name of test bench for test bench ID.
>
> 2> Then post teh request.
>
> Observation:Get below mentioned error
> {
> "errors": [
> {
> "errorCode": "B0002",
> "errorDescription": "Test Bench is not available",
> "errorLocation": "Test Bench id testbench"
> }
> ]
> }
>
> Find attached execution request payload to post [http://tek-7c4p5m2:8080/atoms/application/$execute/]
>
>
>
> This is a blocker issue for running API tset scripts now. Since we used to provide test bench name in execution test api request, now on beta20 daily/Test branch build, this is broken.


---

### `GAR-8089` — Not able to see the view event ui in the view results for Multi waveform

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** pbaik
- **Created:** 16-04-2024 02:03
- **Updated:** 27-04-2024 02:05
- **Resolved:** 24-04-2024 23:50
- **Resolution:** Not a Defect

**Description (verbatim):**

> !image-2024-04-16-14-33-32-997.png!


---

### `GAR-5770` — Sometime only clearing cache enables to login to UI after TF fresh installation

- **Type:** Issue
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** etharite
- **Created:** 06-07-2023 09:21
- **Updated:** 18-03-2024 07:12
- **Resolved:** 05-11-2023 06:31
- **Resolution:** Won't Do

---

### `GAR-2675` — As a user I want to create, view and update a hierarchical instrument (with extensions) through UI

- **Type:** Story
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** sbhushan
- **Created:** 09-06-2022 03:58
- **Updated:** 14-09-2023 08:03
- **Resolved:** 20-06-2022 03:58
- **Resolution:** Done

**Description (verbatim):**

> 1) User should be able to create a hierarchical instrument (with extensions) through UI
>
> *Input*
>
> 1) Login to ATOMS UI.
> 2) Navigate to Testbench.
> 3) Click on Add new testbench.
> 4) Click on add new instrument icon fill all the details.
> 5) Click on add new extension and fill all the necessary details
> 6) Click on Add button to add the extension.
> 7) Click on save button to save the instrument.
> 8) Click on save button to save the testbench in the database.
>
> *Ouput*
> Testbench will be successfully saved along with extensions details in the database.
>
> *Fails on*
> If all the mandatory fields are not filled.
>
> 2) User should be able to view a hierarchical instrument (with extensions) through UI
>
> *Input*
>
> 1) Login to ATOMS UI.
> 2) Navigate to Testbench.
> 3) Click on the testbench  which has extensions.
> 4) Click on the instrument which has extensions.
> 5) Click on one extension to view its details.
>
> *Ouput*
> Extension details will be displayed.
>
> *Fails on*
> If the selected testbench/instrument does not have extensions.
>
> 3) User should be able to edit a hierarchical instrument (with extensions) through UI
>
> *Input*
>
> 1) Login to ATOMS UI.
> 2) Navigate to Testbench.
> 3) Click on the testbench  which has extensions.
> 4) Click on edit testbench.
> 5) Click on the instrument which has extensions.
> 6) Click on the extension and update all the necessary details
> 7) Click on Update button to update the extension.
> 8) Click on save button to save the instrument.
> 9) Click on save button to save the testbench in the database.
>
> *Ouput*
> Testbench will be successfully saved along with extensions details in the database.
>
> *Fails on*
> If all the mandatory fields are not filled.
>
> 4) User should be able to delete a hierarchical instrument (with extensions) through UI
>
> *Input*
>
> 1) Login to ATOMS UI.
> 2) Navigate to Testbench.
> 3) Click on the testbench  which has extensions.
> 4) Click on edit testbench.
> 5) Click on the instrument which has extensions.
> 6) Click on the delete icon on extension label which will delete the extension.
> 7) Click on save button to save the instrument.
> 8) Click on save button to save the testbench in the database.
>
> *Ouput*
> Testbench will be successfully saved.


---

### `GAR-5422` — [DP] Unable to launch the TekFlow web page at times, needs a UI service restart [Needs input]

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** mtatiche
- **Created:** 02-06-2023 00:12
- **Updated:** 07-03-2024 21:45
- **Resolved:** 21-02-2024 22:47
- **Resolution:** Cannot Reproduce
- **Customer Impact:** 1-High

**Description (verbatim):**

> At times, unable to launch the TekFlow webpage after a random events.
>
> To bring back the login page, one has to restart the UI new service
>
> or Turn OFF the VM and turn it ON from the hyper-V manager.
>
> Observed this in couple of Test PCs while runing DP21 tests.
>
> *One of the PC configurations:*
>
> Device name: TEK-DLWF7W3
>
> Device name: TEK-DLWF7W3
>
> Processor: 12th Gen Intel(R) Core(TM) i9-12900   2.40 GHz
>
> Installed RAM: 64.0 GB (63.7 GB usable)
>
> HDD: 1TB
>
> Cores: 16
>
> Logical processors: 24
>
> Attached is the screenshot for reference.


---

### `GAR-5590` — Tekflow UI is stuck and rotating spinner is visible at status, When test is started with invalid testbench or without running 1.0 IS

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** pbaik
- **Created:** 22-06-2023 08:04
- **Updated:** 19-03-2024 07:28
- **Resolved:** 26-07-2023 01:34
- **Resolution:** Duplicate

**Description (verbatim):**

> Given IS is not started in Scope
> Start the test
> observe: rotating spinner in test status page
> Tekflow UI app is stuck. unable to click.


---

### `GAR-7070` — [LPDDR4] For all the selected DQ's/CA's results should be available for cumulative results in UI as well as in CSV report when test is ran with multi DQ's/CA's..

- **Type:** Improvement
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** u622852
- **Created:** 06-12-2023 21:26
- **Updated:** 01-04-2024 08:08
- **Resolved:** 27-03-2024 00:36
- **Resolution:** Fixed

**Description (verbatim):**

> Steps to reproduce
>
> Login to Tekflow page
> Add a new test
> Select technology ad TX LPDDR4 and application LPDDR4.
> Select only Write burst differential scenario
> Under sources, select appropriate channels for clock, DQS and DQ0.
> Add signal for DQ1, DQ2, DQ3 and select appropriate channel and click on apply button.
> Run the test.
> Click on download csv report once the test is completed.
> *Actual result:** For all the selected DQ's results are not available for cumulative results in UI as well as in CSV report when test is ran with multi DQ's/. Currently the result for last DQ is shown in cumulative results.
>
> *Expected Result*: For all the selected DQ's  results should be available for cumulative results both in UI as well as in CSV report


---

### `GAR-1907` — DP Application not compatible with State Graph mechanism?

- **Type:** Requirement
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 31-03-2022 09:22
- **Updated:** 13-09-2023 19:41
- **Resolved:** 12-05-2022 05:25
- **Resolution:** Done

**Description (verbatim):**

> Currently acquisitions in  tekflow is done based on the state graph. In PCIe it fit well as PCIe has a known pattern of acquisition states.
>
> But in DP there can be multiple acquisition combinations based on voltage swing, pre-emphasis, and SSC mode selected by the user in the UI. All these combination cannot be captured before-hand.
>
> In DP Pre-Processor code we are creating all these combinations based on JSON settings. In earlier architecture of TekFlow,  the pre-processor output(acquisition combination list) could be passed as an input to the acquisition step (See attached code snap). We think this is no longer supported in the new architecture.
>
> This is blocker for DP Acquisition.


---

### `GAR-6247` — [Garuda DP] Empty plots are shown at scenario level in the results panel

- **Type:** Issue
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 06-09-2023 22:19
- **Updated:** 14-09-2023 10:35
- **Resolved:** 12-09-2023 00:07
- **Resolution:** Duplicate

**Description (verbatim):**

> When the user is at the application level or scenario level in the results panel, all plots are shown empty.
>
> !image-2023-09-07-10-48-32-445.png|thumbnail!
>
> To see the plots user need to click on the particular step.
>
> !image-2023-09-07-10-48-03-340.png|thumbnail!


---

### `GAR-5656` — Result table heading need to freeze

- **Type:** Issue
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** skumar5
- **Created:** 26-06-2023 00:22
- **Updated:** 13-09-2023 19:39
- **Resolved:** 18-07-2023 03:57
- **Resolution:** Done

**Description (verbatim):**

> PFA snip, need to freeze the heading of the table.


---

### `GAR-5939` — [SDK] Save and import test sequence is not supported in SDK

- **Type:** Issue
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 01-08-2023 03:40
- **Updated:** 19-10-2023 00:36
- **Resolved:** 28-08-2023 23:14
- **Resolution:** Done

**Description (verbatim):**

> Qualcomm has requested SDK support for Save and import functionality. We need to support it.
>
> *Acceptance Criteria:-*
>
> User should be able to
> * Create and Save Sequence
> * Import Sequence
> * Get all Sequence
> * Modify Sequence
> * Delete Sequence


---

### `GAR-5942` — [DP] SSC plots are not coming in the report

- **Type:** Issue
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 01-08-2023 22:39
- **Updated:** 19-10-2023 00:37
- **Resolved:** 11-09-2023 06:27
- **Resolution:** Done

**Description (verbatim):**

> SSC plots are for DP is coming in the results panel but not shown in PDF report.


---

### `GAR-4062` — [DP 2.1 Preset Optimization requirement] Support to use output of an analysis step from one scenario as input of a pre-processor step for another scenario.

- **Type:** Issue
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 03-01-2023 03:20
- **Updated:** 13-09-2023 19:41
- **Resolved:** 01-02-2023 20:53
- **Resolution:** Done

**Description (verbatim):**

> In DP 2.1 Application we have Signal test presets (similar to PCIe).
> DP 2.1 Application requires a preset optimization feature. (Finding the optimal preset). Below are steps we follow for preset optimization:
> # Acquire waveforms all selected signal presets.
> # Run DDJ measurement on all acquired preset waveforms and find that preset which gives the lowest jitter value. That becomes the optimal preset.
> # Once the optimal preset is found, all other acquisition and analysis for signal quality tests should happen only for that preset.
>
> Currently, in tekflow we do not have support to pass the output (which is the optimal preset in our case) of an analysis step from one scenario as input to preprocess step in another scenario
>
> This support is required.


---

### `TEKEXPFW-6334` — [PCIe] In Multi Acquire Type case, acquire status is updating for the first acquire type only

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** vbalan
- **Created:** 12-08-2021 03:48
- **Updated:** 14-09-2023 11:58
- **Resolved:** 17-08-2021 21:58
- **Resolution:** Fixed
- **Customer Impact:** 1-High

**Description (verbatim):**

> How to reproduce:
> -------------------------------------------------------------------------------------------
> 1)Launch PCIE app
> 2)Select Spec->BaseSpec,Device->Tx Test Board,Version->Gen6
> 3)Select Any two presets
>
> {Q0,Q1} or {Q1,Q2}
> 4)Select any two lanes {Ex:Lane0,Lane1}
> 5)Select Uncorrleated PWJ Djdd test
> 6)Click Run
>
> Observation:
> -------------------------------------------------------------------------------------------
> 1)When Preset {Q0,Q1}
> is selected only Q0 acquire status is updated for both lanes
> 2)When Preset
>
> {Q1,Q2}
> is selected No preset acquire status is updated for any lane
>
> Observed that first acquire type "64Gbps Q0 Acquisition" which is the first acquire type present in the test xml and corresponding acquiretype of Q0 is updated.
>
> So only the first acquire type present in the test xml acquire status is getting updated
>
> Attaching the test xml and the screenshots of the observations.


---

### `TEKEXPFW-4513` — Adding third-party license info in About dialog box

- **Type:** Task
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** vbalan
- **Created:** 30-09-2020 03:11
- **Updated:** 14-09-2023 08:51
- **Resolved:** 01-10-2020 00:39
- **Resolution:** Done

**Description (verbatim):**

> [Refer the mail for more info]
> In our About box for TekExpress, at framework level…
>
> Just show the below label with a link.
>
> "This product contains the following software under third-party licenses"
>
> Make "third-party licenses" as a hyperlink. Clicking that will open the OCW with thrid party license details.


---

### `CS-182` — 80C21 and phase reference module are not detected by the application

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** vbalan
- **Created:** 17-07-2018 02:23
- **Updated:** 14-09-2023 12:19
- **Resolved:** 31-07-2018 21:47
- **Resolution:** Fixed
- **Customer Impact:** 1-High

**Description (verbatim):**

> 1. SR4 and TDEC: When app is launched, the app is not detecting phase reference and available modules(80C21).
>
> For SR4 and TDEC, just to launch and check. It has 80C21.
>
> 2. For other modules, phase ref is not detected in python even though UI detects it and shows phase ref check box (which will be visible only when phase ref is identified)


---

### `DP-2596` — RJ test & its corresponding parameters should not be present in the UI for HBR3 datarate

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** mtatiche
- **Created:** 26-11-2018 00:55
- **Updated:** 14-09-2023 12:16
- **Resolved:** 03-01-2019 03:51
- **Resolution:** Fixed
- **Customer Impact:** 2-Medium

**Description (verbatim):**

> Launch DP
>
> Select only HBR3 and unselect other datarates
>
> Go to test selection- observe that RJ is selected by default
>
> -----RJ should not be available when HBR3 is selected.
>
> Click on COnfigure button in the test selection panel by selecting RJ.
>
> -----In the configuration panel, HBR3 parameters for RJ should be removed if only HBR3 is selected


---

### `BRR-1120` — 1000BaseT1 - Signal validation acquire step by step window has no image for TX_Clock Frequency and Jitter measurements

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** tramoju
- **Created:** 07-01-2018 07:59
- **Updated:** 14-09-2023 12:49
- **Resolved:** 17-01-2018 23:05
- **Resolution:** Fixed

**Description (verbatim):**

> 1)Launch Automotive Ethernet Application
> 2)Select acquire live waveforms and 1000BaseT1 compliance suite
> 3)Select Testmode from Marvell DUT  Software
> 4)Go to Test Selection tab select anyof the measurement
> 5)Go to acquisition tab select acquire step by step
> 6)Run the measurement we can observe the defect


---

### `BRR-1501` — Solution crashes when user change source from Probe1 drop down list

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** salapart
- **Created:** 01-05-2018 23:30
- **Updated:** 14-09-2023 12:49
- **Resolved:** 04-05-2018 00:25
- **Resolution:** Fixed
- **Customer Impact:** 1-High

**Description (verbatim):**

> Scope : MSO 58
>
> ---------------------------
>
> *rst
>
> Launch solution from application menu
>
> Select test selection tab and deselect all meas and select only Tx Peak differential output measurement
>
> Click on Run push button to exeucte the measurement
>
> I connected my live DUT signal to CH2 ( by default CH1 has been selected)
>
> So went to acquisitions tab and I selected CH2 from Probe1 drop down list
>
> Observe solution crashes here.
>
> Attached DBwin32 log information to see root cause of the exception/crash here
>
> ------------------End---------------------------
>
> Please make sure solution DO NOT crashes here while measurement execution is in progress.
>
> Kindly help user what to do , a message saying - Stop measurement execution and chose correct source , etc.


---

### `BRR-1385` — 100BaseT1(Riddick&Terminator)-Measured Values of Calibration tab are not updating for TX_Distortion measurement

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** tramoju
- **Created:** 03-04-2018 06:20
- **Updated:** 14-09-2023 12:49
- **Resolved:** 05-04-2018 00:46
- **Resolution:** Fixed
- **Customer Impact:** 1-High

**Description (verbatim):**

> 1)Go to distortion measurement
> 2)Click configure->Calibration
> 3)According to connection diagram run disturber compensation,test fixture compensation and test fixture compensation  without disturber
> 4)After running observe each step Measured Values of Calibration tab are not updating for TX_Distortion measurement
>
> Please find video attached


---

### `BRR-1498` — Tx Distortion Calibration Apply throws Error (both 1000T1 and 100T1)

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** shashirv
- **Created:** 30-04-2018 01:20
- **Updated:** 14-09-2023 12:49
- **Resolved:** 02-05-2018 19:24
- **Resolution:** Fixed

**Description (verbatim):**

> Setup :
>
> Scope : DPO7254C C132078
> # Launch TekExpress Automotive Ethernet
> # Select 1000Base-T1
> # Select only Transmitter Distortion test
> # Go to Configure > Calibration
> # Click Default
> # Click Apply
> # Exit application
> # Relaunch Application
> # Select 1000Base-T1
> # Select only Transmitter Distortion test
> # Go to Configure > Calibration
> # Click Apply
>
> Observe that 'JigMatch Calibration'  Error is thrown.
>
> +*Same behavior is seen with 100 BaseT1 Tx Distortion test too.*+
>
> Please find the screenshot attached.


---

### `BRR-1497` — 100base-T1- Transmitter Distortion Calibration UI shows RL Calibration controls

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** shashirv
- **Created:** 29-04-2018 23:01
- **Updated:** 14-09-2023 12:49
- **Resolved:** 02-05-2018 19:19
- **Resolution:** Fixed

**Description (verbatim):**

> Please find the video attached.
>
>
>
> Steps to Reproduce this issue-
>
> 1.) *rst
>
> 2.) Launch solution
>
> 3.) Select 100base-T1 at DUT tab and 'Deselect All' and select Tx-Distortion measurement only.
>
> 4.) Select 1000base-T1 test suite test selection tab and select Tx distortion measurement and click on Configure push button
>
> 5.) Select Calibration tab and we see correct 1000base-T1 Tx Distortion calibration UI
>
> 6.) Select 'Measurements' tab (next to calibration tab) scroll down and select Return Loss measurement for same 1000base-T1 test suite
>
> 7.) elect Calibration tab and we see correct 1000base-T1 Return Loss calibration UI
>
> 8.) Select DUT tab and chose 100base-T1 test suite
>
> 9.) Since I selected only Tx-Distortion measurement at step #2, I again selected Tx-Distortion measurement and click on Configure push button
>
> 10.) Observe here for 100base-T1 Tx-Distortion calibration, we are seeing RL calibration UI


---

### `BRR-1494` — Default setup is not refreshing UI ( or not working as expected) for Tx distortion meas

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** salapart
- **Created:** 29-04-2018 21:31
- **Updated:** 14-09-2023 12:49
- **Resolved:** 02-05-2018 19:13
- **Resolution:** Fixed
- **Customer Impact:** 1-High

**Description (verbatim):**

> Update :
>
> Please refer to *UIRefresh.PNG,*  we see this pop up when we switch b/w 100T Distortion, 1000T Distortion.
>
> This is related UI refresh issue.
>
>
>
> Scope: MSO 20Ghz
>
> ----------------------------------
>
> *rst
>
> launch automotive solution from Analyze menu
>
> Select 1000base-t1 ( by default 1000bsae-t1 test suite is selected)
>
> Select Tx Distortion configuraiton
>
> Select DUT tab and select 100base-t1 test suite option
>
> Select Tx Distortion configuration
>
> Now at options recall - Default Test setup
>
> By deault 1000base-t1 test suite will be selected and if user select Tx Distortion configuration it shows 100base-t1 external Ref clock input options instead of showing 1000base-T1 options ( which will have only HW clock divider and None options.


---

### `BRR-1428` — Rename the probe pin as per the new fixture

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** mahithas
- **Created:** 09-04-2018 02:33
- **Updated:** 14-09-2023 12:49
- **Resolved:** 20-04-2018 04:36
- **Resolution:** Fixed
- **Customer Impact:** 1-High

**Description (verbatim):**

> Update the pin number as per the new fixture for 100 and 1000 Base T1 RL in Calibration tab
>
> Probe @ P23(TC1)
> Probe @ P24(TC1)
>
> !image-2018-04-26-23-57-10-400.png!


---

### `BRR-1444` — Channel selection is not updated when we switch from 100 to 1000 base T1

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** mahithas
- **Created:** 11-04-2018 06:53
- **Updated:** 14-09-2023 12:49
- **Resolved:** 12-04-2018 01:33
- **Resolution:** Fixed
- **Customer Impact:** 1-High

**Description (verbatim):**

> Launch Automotive Ethernet
>
> Select 1000 Base T1, select Tx clock Freq measurement
>
> Select Ch3.
>
> Run the measurement. It works as expected
>
> Switch to 100 Base T1, select Tx clock Freq measurement
>
> Run the measurement.
>
> *Expected:*
>
> -Measurement should run on Ch3 as UI shows Ch3-
>
> [ShashiRV]- The above Expected behavior is not correct and hence I have striked it off, the expected behavior should be :  The Probe1 drop down in Acquisition tab shuld have default (CH1) selection.
>
> *Actual:*
>
> Ch1 turns on and it waits for a signal.
>
> Ensure that the UI model is in sync with the UI
>
>
>
> Refer video placed at: \\tedisplstorage\VOEs\Power&Automotive\Tulasi\Videos


---

### `BRR-1340` — For ALL 1000base-T1 measurements, test setup Schematic feature broken

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** salapart
- **Created:** 21-03-2018 00:04
- **Updated:** 14-09-2023 12:49
- **Resolved:** 12-04-2018 06:42
- **Resolution:** Fixed
- **Customer Impact:** 1-High

**Description (verbatim):**

> Select 1000base-T1 test suite
> Go to test Selection tab and select Tx Clk Frequency measurement (For example) and click on 'Schematic' push button to see test setup diagram for Tx Clk measurement, user will see a popup message (Capture.PNG) which says contact tektronix Administrator and also says schematic file no found.
>
> This should get fixed before SIR/SIC


---

### `BRR-1400` — Exception occurs at RL, Tx-Dis calibration tab

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** salapart
- **Created:** 04-04-2018 17:09
- **Updated:** 14-09-2023 12:49
- **Resolved:** 24-04-2018 02:30
- **Resolution:** Fixed
- **Customer Impact:** 1-High

**Description (verbatim):**

> *Scope Details:*
> MODEL:MSO58
> SERIAL NUMBER:Q100086
> FIRMWARE VERSION:1.6.3
> IP-134.64.244.1
> APP VERSION-1.2.0.105
> ------------------------------------------------------
>
> For Return loss and Distortion measurements we observed attached error popup on *MSO 5 series*
>
> Select either RL or Tx Distortion
> Select Calibration Tab
> Browse for a calibration and select a file.
> Click on Apply or Run, the following pop-up is shown


---

### `BRR-1335` — Calibration is not updating when we change the Suite 1000Base-T1 to  100Base-T1.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** akumar7
- **Created:** 19-03-2018 00:02
- **Updated:** 14-09-2023 12:49
- **Resolved:** 20-04-2018 04:33
- **Resolution:** Fixed

**Description (verbatim):**

> - Select 100 Base from Suite
> - Go to calibration Panel
> - Go back to DUT panel and select 1000Base-T1 from Suite selection
> - Again come back to Calibration panel, it is showing 100Base-T1 data even though I have selected 1000Base-T1


---

### `BRR-1310` — Even though different channel selected while running Return Loss Calibration, but it is throwing error Popup saying Select different chanel.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** akumar7
- **Created:** 08-03-2018 00:41
- **Updated:** 14-09-2023 12:49
- **Resolved:** 29-03-2018 05:13
- **Resolution:** Fixed
- **Customer Impact:** 1-High

**Description (verbatim):**

> - Select Return Loss Measurement in Live.
> - Select Live Calibration.
> - In Chanel Selection for Probe : Probe P1 @ TC1, Probe P2 @ TC2 select different channel than CH1 & CH2.
> - Press Either Load, Open Or Short Calibration.
> - As you press Popup saying select different Channel in Terminator Scope.
> - Also Popup is Saying for Sync Input, As already we have AUX channel in Terminator, so It should not ask to Select Sync Channel. It is valid for Riddick Box but not for Terminator .


---

### `RQSFPT-103` — Fix TEKEXPFW-2919: Multi lane issue

- **Type:** Task
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** vbalan
- **Created:** 03-11-2017 03:09
- **Updated:** 14-09-2023 07:57
- **Resolved:** 12-11-2017 23:04
- **Resolution:** Done

**Description (verbatim):**

> Fix TEKEXPFW-2919: Multi lane issue


---

### `RQSFPT-102` — Debug TEKEXPFW-2919 Multi lane issue

- **Type:** Task
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** vbalan
- **Created:** 02-11-2017 22:30
- **Updated:** 14-09-2023 07:57
- **Resolved:** 14-11-2017 00:41
- **Resolution:** Done

**Description (verbatim):**

> Debug TEKEXPFW-2919 Multi lane issue


---

### `TEKEXPFW-2576` — Not able to stop the execution while auto close is enabled

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** vbalan
- **Created:** 28-05-2017 23:49
- **Updated:** 14-09-2023 11:58
- **Resolved:** 29-05-2017 03:22
- **Resolution:** Fixed

**Description (verbatim):**

> 1. Launch the application and go to 'Preferences' panel.
> 2. Make enable the 'Auto close' and set the time as 1sec for popup.
> 3. Click on the Run button.
> 4. Click on the Stop button.[In popup : Do not select the option using mouse]
>
> Actual Result: Application is getting stuck.
>
> Expected Result: User shall able to stop the execution while auto close is enabled.


---

### `RXGKRT-92` — De-Embedding option in UI has to be provided as per 100G-TXE

- **Type:** Task
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** satk
- **Created:** 27-11-2017 22:52
- **Updated:** 14-09-2023 07:35
- **Resolved:** 05-12-2017 20:27
- **Resolution:** Done

**Description (verbatim):**

> Currently the UI has 3 radio button options for De-Embedding. This has to be replaced with similar De-Embedding option(checkbox) as per 100G-TXE.


---

### `TEKEXPFW-2919` — Multi Lane Setup issues

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** vbalan
- **Created:** 09-10-2017 03:33
- **Updated:** 14-09-2023 11:58
- **Resolved:** 13-03-2018 23:46
- **Resolution:** Fixed

**Description (verbatim):**

> 1. Link Width value should have been set in Kernel before setting lane source values on OK button click. Now it is vice versa. Because of this, while validating source change notifications in app validation, we get previous value of Link Width instead of the latest one selected in combo box.
> 2. In case of any source validation fail, we get as many validation error notification from Framework as the no. of lanes selected. This is because all sources are set in single shot during OK button click.


---

### `MIPIMPHYTX-1276` — MPHY-Tx - UI controls are missing in Acq tab and lane configuration.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** skumbha
- **Created:** 22-09-2017 02:20
- **Updated:** 05-01-2024 02:39
- **Resolved:** 05-11-2017 23:18
- **Resolution:** Fixed
- **Customer Impact:** 1-High

**Description (verbatim):**

> Steps:
> 1. Launch application from analyze menu.
>
> Some controls are missing on Acq tab and Lane configuration.
> Please find the screenshots for reference
>
> Case 2:
> 1. Tekexpress unhandled exception is coming while clicking on lane setup.
>
> Case 3:
> 2. Tekexpress error is coming after clicking filter window "OK"


---

### `CPHYX-1419` — Sometime observed Progress bar is not showing during compile.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** skumar5
- **Created:** 28-09-2016 23:17
- **Updated:** 14-09-2023 12:27
- **Resolved:** 18-10-2016 23:09
- **Resolution:** Fixed

**Description (verbatim):**

> Case1: Manual Testing
> 1.Connect the Master through PC
> 2.Connect the Slave and send Compile
> 3.Disconnect
> 4.Access the Master instrument thorough remote access
> 5.Compile [enable Slave connection ]
> Observe: "Error - Visa Communication"   ->click ok
>
> 6.Compile again
>
> Observe : Compilation is happening but progress bar is not there.
>
> Case2: Through Automation
>
> From V[1.0.0.88] - While running automation scenarios,  some times for all the scenarios progress bar is not showing during compilation.
>
> Case 3: Build(1.0.0.89)
>
> 1.First time after restart ->launch the CPHYXpress
> 2.Compile
> 3.Cancel during creating the Wfm. sequence for Master and Slave
>
> Below log view will be seen and from next time onward Compile progress bar will not be visible.
>
> Log View---------
> Creating sequence in Master AWG...
>
> Creating sequence in Slave AWG...
> Compile Aborted.
> ERROR:CPHYXpress Plugin has thrown an exception
> ---------------------
>
> Observation:
> - After this scenario switch between 'cphy plug-in' to 'dphy plug-in', then progress is working but it is controlling all the error codes.
> - it is showing message in logview, but it is not throwing any pop-up


---

### `RPAMT-222` — Application crashes when trying to select the channel while the application is Running

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** girr
- **Created:** 20-04-2017 01:48
- **Updated:** 14-09-2023 12:30
- **Resolved:** 28-04-2017 01:40
- **Resolution:** Fixed

**Description (verbatim):**

> Steps to Reproduce:
> 1)Launch the application
> 2)Select any test and run
> 3)Try selecting the channel from the drop down available in acquisition Tab
> 4)Application stops responding when selecting the channel
>
> Actual Result:Application Crashes
> Expected Result:Channel selection from drop down should not affect the Test


---

### `RPAMT-151` — Source selection panel is not visible in acquisition panel

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** vbalan
- **Created:** 13-04-2017 01:22
- **Updated:** 14-09-2023 12:30
- **Resolved:** 13-04-2017 03:29
- **Resolution:** Fixed

**Description (verbatim):**

> Source selection panel is not visible in acquisition panel after upgrading to latest FW 4.2.5.7


---

### `ECAUIT-186` — In Application Acquisitions source selected as Ch1 and Ch2 but module is connected to Ch5 and ch6

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** pjoshi
- **Created:** 12-12-2016 20:24
- **Updated:** 14-09-2023 12:42
- **Resolved:** 16-12-2016 00:50
- **Resolution:** Fixed

**Description (verbatim):**

> 80S100G-TXE application running tests by selecting Source Ch5 and Ch6 but in actual UI it is showing as Ch1 and Ch2.
> Please refer attached screen shot


---

### `RCAUIT-456` — Not able to change parameters in Reports panel

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** vbalan
- **Created:** 28-07-2016 00:09
- **Updated:** 14-09-2023 12:04
- **Resolved:** 28-07-2016 01:04
- **Resolution:** Fixed

**Description (verbatim):**

> Not able to change parameters in Reports panel.


---

### `TEKEXPFW-1533` — Deskew option should not have two vertical scale options in UI for Tabasco scopes

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** satk
- **Created:** 12-04-2016 22:45
- **Updated:** 14-09-2023 11:59
- **Resolved:** 20-06-2017 23:46
- **Resolution:** Fixed

**Description (verbatim):**

> Currently, Deskew window provides 2 options for Level sensitive deskew setting. One is for less than 100mV and another is for more than 100mV vertical scale.
> In case of Tabasco scopes, the maximum vertical scope range is limited to 300mV. So generally there is no chance vertical scale can go beyond 100mV.
> So better not to have radio button selection for vertical scale in UI.


---

### `BRR-458` — Exception when clicking on Configuration Button

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** jdomadiy
- **Created:** 04-02-2016 19:46
- **Updated:** 14-09-2023 13:52
- **Resolved:** 04-02-2016 22:05
- **Resolution:** Not a Defect

**Description (verbatim):**

> Open BRR App
> * Deselect all meas
> * Select only Tx_Distortion
> * Click the Configuration button present in Test Selection tab
> *  Click on Calibration
> * Click on Test Selection tab. uncheck  Tx_Distortion and Select PSD
> * Click on  Configuration button present in Test Selection tab
> * Click on Test Selection tab
> *  De-select the PSD
> * Select the TX_Distortion
> * Click on configuration
> * Exception pop up


---

### `HDMI-854` — HDMXpress: Help and Technical support options are disabled in the UI

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** satk
- **Created:** 30-04-2015 02:26
- **Updated:** 14-09-2023 12:38
- **Resolved:** 04-05-2015 01:42
- **Resolution:** Fixed

**Description (verbatim):**

> Under help menu, help and Technical support options are disabled.
>
> When user clicks, on Help, OLH should open and in that Introduction section should be pointed.
> When user clicks on Techincal support option, OLH has to open and Support information section has to be pointed in the OLH.


---

### `HDMI-846` — HDMXpress: Add to list is adding invalid vic code if used after Recall default setup

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** satk
- **Created:** 22-04-2015 00:20
- **Updated:** 14-09-2023 12:38
- **Resolved:** 22-04-2015 04:11
- **Resolution:** Fixed

**Description (verbatim):**

> Add to list is not working as expected once we do recall default setup.
> How to produce?
> 1. Perform recall default setup.
> 2. Click on add to list button.
> Instead of adding VIC 96 into the configuration list, it is adding VIC 1 data.


---

### `TEKEXPFW-512` — Modify label of Iteration option

- **Type:** Story
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** VKUMAR2
- **Created:** 16-02-2015 13:48
- **Updated:** 14-09-2023 07:26
- **Resolved:** 14-04-2015 01:11
- **Resolution:** Done

**Description (verbatim):**

> 1. Preferences panel: Modify text of iteration setting from “Acquire/Analyze each test x times” to “Acquire/Analyze each test x times (not applicable to Custom Tests)”
> 2. CTM: Modify text of iteration setting from “Iterations x” to “Execute this test x times”.


---

### `TEKEXPFW-506` — Improve app launch experience (edit boxes should not appear before app UI)

- **Type:** Story
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** VKUMAR2
- **Created:** 16-02-2015 13:33
- **Updated:** 14-09-2023 07:26
- **Resolved:** 13-04-2015 02:18
- **Resolution:** Done

**Description (verbatim):**

> Resolve app taking some time to launch and some UI controls appearing before the complete app


---

### `GAR-6284` — [Garuda DP][PLAE Feedback-Nitin] Clicking on the AS service or Uploader service control stops the execution

- **Type:** Issue
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 11-09-2023 20:56
- **Updated:** 15-02-2024 00:25
- **Resolved:** 02-11-2023 03:34
- **Resolution:** Done

**Description (verbatim):**

> [Build: Beta 1.0.19]
>
> AS or Uploader one of the window when clicked will stop processing waveforms until Enter is pressed:  This can accidently happen anytime and questions from world wide will come on why is it done this way.
>
> Console application for running the services are not recommended.


---

### `GAR-6273` — [Garuda DP] CSV report download name should be test name

- **Type:** Story
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** mtatiche
- **Created:** 11-09-2023 05:28
- **Updated:** 14-02-2024 01:26
- **Resolved:** 25-01-2024 03:39
- **Resolution:** Done

**Description (verbatim):**

> Using the download CSV report from the UI, the csv zip folder is downloaded with a different name which is not matching the test execution id.
>
> When multiple reports are downloaded, its difficult to map which report is for what test.
>
> Refer to the screenshot


---

### `DPOJET-646` — [Kauai_R1]: UI: Height@BER measurement UI is incorrect

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** amohamme
- **Created:** 23-07-2014 12:31
- **Updated:** 14-09-2023 12:16
- **Resolved:** 28-07-2014 06:22
- **Resolution:** Fixed

**Description (verbatim):**

> Steps:
> ********
> 1> Launch DPOJET.
> 2> Add Height@BER measurement.
> 3> Go to Config-> Bit Config and see that Bit Config UI is still old. We had decide to change the UI as same as TN@BER measurement.


---

### `DPOJET-643` — [Kauai_R1]: UI: "BER Eye Contour" Plot not getting removed when moved from "Jitter+Noise" to "Jitter Only"

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** amohamme
- **Created:** 22-07-2014 15:05
- **Updated:** 14-09-2023 12:16
- **Resolved:** 23-07-2014 02:36
- **Resolution:** Fixed

**Description (verbatim):**

> Steps:
> *******
> 1> Launch DPOJET.
> 2> Load the "RT-EyeTutorial.wfm" in REF1.
> 3> Add TJ@BER measurement on REF1.
> 4> Add "BER Eye Contour" plot.
> 5> Do Single and obtain results and plots.
> 6> Now change the Analysis method to "Jitter Only" from "Jitter+Noise" and see that BER Eye Contour plot still shown even though there is no entry in the UI. Refer to the attachment "BEREyeContourPlotIssue.JPG".


---

### `DPOJET-545` — [Kauai-R1]: Clock Recovery configuration setting changes are not retaining for different types of measurements

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** bhap
- **Created:** 24-06-2014 07:15
- **Updated:** 14-09-2023 12:16
- **Resolved:** 09-04-2015 09:04
- **Resolution:** Fixed

**Description (verbatim):**

> 1> Add TJ@BER meas and TN@BER meas
> 2> Select TJ@BER meas. Click on Clock Recovery config tab.
> 3> Do following configuation under CDR config tab for meas TJ@BER:
> CDR method= PLL-Standard BW.
> PLL- Model = TypeII
> 4> Select TN@BER measurement CDR config tab
> 5> Change CDR method to PLL-Standard BW.
> 6> Select TJ@BER meas
> Observation: PLL-Model gets changed to Type-I


---

### `DP-9144` — [Garuda DP] All the measurements in DP is currently running on same Record length.

- **Type:** Issue
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 14-03-2023 07:58
- **Updated:** 27-02-2024 19:45
- **Resolved:** 04-06-2023 22:49
- **Resolution:** Done

**Description (verbatim):**

> As per spec, different measurement should run on different different RL.
> e.g. :
> Eye Measurements: 11M
> Jitter and SSC measurements: 40M
>
> In current DP app there is one RL setting that is applicable for all measurements.


---

### `DPOJET-634` — [Kauai_R1]: NPN measurement is not getting removed when "Spectral Only " is selected

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** amohamme
- **Created:** 17-07-2014 05:00
- **Updated:** 14-09-2023 12:16
- **Resolved:** 18-07-2014 01:33
- **Resolution:** Fixed

**Description (verbatim):**

> Steps:
> ********
> 1> Launch DPOJET.
> 2> Enable "Spectral + BUJ" from Preferences Setup->Jitter Decomp tab
> 3> Add NPN and NPJ measurement.
> 4> Go to Preferences Setup->Jitter Decomp tab and select "Spectral Only".
>
> See that NPJ measurement gets removed whereas NPN measurement remains as it is which is incorrect. Even NPN measurement should get removed.


---

### `DPOJET-632` — [Kauai_R1]: Noise radio button enabled for "Jitter Only" analysis method

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** amohamme
- **Created:** 17-07-2014 04:37
- **Updated:** 14-09-2023 12:16
- **Resolved:** 22-07-2014 04:15
- **Resolution:** Fixed

**Description (verbatim):**

> Steps:
> ********
> 1> Launch DPOJET.
> 2> Go to Jitter/Noise and see that both the radio buttons are visible.
> 3> Go to Preferences setup->Jitter Decomp->Analysis method and change it to "Jitter Only" and click OK.
> 4> Go to Preferences setup->Jitter Decomp->Analysis method and change it to "Jitter+Noise" and click Cancel.
> 5> You will see that both Jitter and Noise radio buttons are visible which is incorrect for "Jitter Only" method.


---

### `DPOJET-631` — [Kauai_R1]: Jitter and Noise radio buttons disaapear

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** amohamme
- **Created:** 17-07-2014 04:09
- **Updated:** 14-09-2023 12:16
- **Resolved:** 18-07-2014 02:26
- **Resolution:** Fixed

**Description (verbatim):**

> Steps:
> ********
> 1> Launch DPOJET
> 2> Go to Jitter/Noise tab and see that both jitter and noise radio buttons are visible
> 3> Now go to Preferences Setup->Jitter Decomp->Analysis method and change it to "Jitter Only" and click Cancel.
> See that both jitter and radio buttons disappear which is incorrect since i clicked cancel.


---

### `DPOJET-628` — [Kauai_R1]: When Analysis method is changed from "Jitter+Noise" to "Jitter Only", Noise bathtub plot is not getting removed

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** amohamme
- **Created:** 17-07-2014 01:39
- **Updated:** 14-09-2023 12:16
- **Resolved:** 18-07-2014 05:14
- **Resolution:** Fixed

**Description (verbatim):**

> Steps:
> ********
> 1> Launch DPOJET.
> 2> Load the "RT-EyeTutorial.wfm"  in REF1.
> 3> Add "Width@BER" and "Height@BER" measurements.
> 4> Add "Noise Bathtub" and "BER Eye Contour" plots on Height@BER measurement.
> 5> Run the measurements and obtain results and plots.
> 6> Now, change the Analysis method to "Jitter Only" from "Jitter+Noise".
> 7> You see that Noise Bathtub plot still exist in the list of plots that are added which is incorrect whereas BER Contour Plot got removed automatically which is correct.


---

### `DPOJET-622` — [Kauai_R1]: UI: RJ(V), RJ(H), PJ(V) and PJ(H) measurements are not getting added from jitter tree

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** amohamme
- **Created:** 16-07-2014 02:22
- **Updated:** 14-09-2023 12:16
- **Resolved:** 16-07-2014 05:17
- **Resolution:** Fixed

**Description (verbatim):**

> Steps:
> ********
> 1> Launch DPOJET.
> 2> Go to Jitter/Noise tab.
> 3> Select "Jitter" radio button.
> 4> Click on 'i' button to get jitter tree.
> 5> Click on RJ(V), RJ(H), PJ(V) and PJ(H) buttons and see that these measurements do not get added which is incorrect.
>
> The same is happening in Noise tree as well where RN(V), RN(H), PN(V) and PN(H) measurements are not getting added.


---

### `DPOJET-642` — [Kauai_R1]: PJ(V), PJ(H), RJ(V) and RJ(H) measurements are not getting removed when moved to "Jitter Only" from "Jitter+Noise"

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** amohamme
- **Created:** 21-07-2014 15:23
- **Updated:** 14-09-2023 12:16
- **Resolved:** 22-07-2014 04:12
- **Resolution:** Fixed

**Description (verbatim):**

> Steps:
> ********
> 1> Launch DPOJET
> 2> Add PJ, PJ(V), PJ(H), RJ, RJ(V) and RJ(H) measurements.
> 3> Go to Preferences Setup->Analysis Method and set it to "Jitter Only".
> 4> PJ(V), PJ(H), RJ(V) and RJ(H) measurements are still shown in the UI which is incorrect. These measurements should not be shown for "Jitter Only" analysis method.


---

### `DPOJET-1004` — DPOJET Setup files backward compatibility to be maintained when moving from option 76 to 136

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** SMAHADEV
- **Created:** 03-12-2014 22:49
- **Updated:** 14-09-2023 12:43
- **Resolved:** 11-12-2014 23:33
- **Resolution:** Fixed

**Description (verbatim):**

> DPOJET Setup files backward compatibility to be maintained when moving from option 76 to 136.
>
> Steps to recall:
> 1> Install 6.2.1.8 version of DPOJET
> 2> Launch DPOJET
> 3> Add some Jitter meas like TJ
> 4> Change configuration.
> 5> Save the setup file
> 6> Install DPOJETv7.0.0.233
> 7> Launch DPOJET
> 8> Recall DPOJETv6.2.1.8 build saved setup file.
> Observation: Setup file not recalling meas and configurations.
> DPOJETv6.2.1.8_SetupFile@\\eiw900440b\DPOJET\DPOJET_VOE\Kauai-R2\DefectVerification\SetupFileForBackwardCompatiablility


---

### `DPOJET-562` — [Kauai_R1]: UI: Noise measurements are visible when jitter radio button is selected

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** amohamme
- **Created:** 28-06-2014 09:20
- **Updated:** 14-09-2023 12:16
- **Resolved:** 30-06-2014 06:27
- **Resolution:** Fixed

**Description (verbatim):**

> 1> Launch DPOJET
> 2> Enable DJAN option key.
> 3> Go to Jitter/Noise tab and click on "i" button to obtain Noise tree. Now select "Spectral + BUJ" radio button. close the tree.
> 4. Now click ion "Jitter" radio button and see that noise measurements are visible which is not expected. The expected behavior is: jitter measurements should have been shown.


---

### `GAR-4585` — [PCIe/DP] Add Test Bench is throwing error

- **Type:** Issue
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 14-03-2023 08:32
- **Updated:** 26-03-2024 01:33
- **Resolved:** 17-03-2023 13:48
- **Resolution:** Done

**Description (verbatim):**

> !image-2023-03-14-21-01-22-895.png|thumbnail!
>
> Adding probe and other instrument in the Test Bench is throwing error. New test bench cannot be added using the new UI.


---

### `GAR-4249` — [TekSDK Request from Qualcomm] Unable to select specific measurements/values for some of the global settings in the DP1.4 apps

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** mtatiche
- **Created:** 30-01-2023 23:40
- **Updated:** 25-03-2024 19:56
- **Resolved:** 27-02-2023 02:12
- **Resolution:** Not a Defect
- **Customer Impact:** 1-High

**Description (verbatim):**

> # Install the latest version of teksdk.
> # Deploy the beta13 TF FW and beta13 DP apps.
> # Use the below sample script to select specific values of Voltage swing or pre-emphasis or to select only a subset of measurements from the available list of measurements.
> # Observe  that the set_setting function is not working by checking the get_setting value it is returning.
>
> Observation:
>
> The sdk shows that Invalid value for setting "(Measurements)"
>
>
>
> Attaching the sample script and the output logs of the script.
>
>
>
> NOTE: This is a request from Qualcomm that Using TekSDK to select only specific settings other than default values for DP testing


---

### `DP-11220` — [Pascal's Feedback] Add a textfield to input an LP filter for the user in CustomDP VTX-DIFF-SLEEP measurement

- **Type:** Improvement
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** u616480
- **Created:** 15-01-2024 19:54
- **Updated:** 12-03-2024 02:02
- **Resolved:** 24-01-2024 06:36
- **Resolution:** Fixed
- **Customer Impact:** 2-Medium

**Description (verbatim):**

> Add a textfield in the GUI for a filter input instead of scope LP filter for analysis.


---

### `GAR-6443` — [Garuda DP] TekFLow Analysis service fails to launch if PC language is not set to En-US

- **Type:** Task
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 05-10-2023 00:39
- **Updated:** 31-03-2024 18:12
- **Resolved:** 26-02-2024 02:45
- **Resolution:** Done

**Description (verbatim):**

> Build Version: 1.0.0.Beta.22
>
> 1. Install TekFlow Beta 1.0.0.Beta22. Installation completed successfully. No error in log message.
> 2. Install DisplayPort application Package. Installation completes successfully.
> 3. Launch AS. It throws the below exception and gets closed.
>
> !image-2023-10-05-13-07-17-408.png|thumbnail!
>
> Upon investigation it is found that when when English US is not added as language in the PC this issue s occurring.


---

### `GAR-5943` — [DP] Jitter[bathtub] plots are not available in TekFlow/Clarius

- **Type:** Story
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 01-08-2023 22:53
- **Updated:** 31-03-2024 18:12
- **Resolved:** 18-03-2024 22:31
- **Resolution:** Done

**Description (verbatim):**

> Qulacomm needs bathtub and histogram plots for jitter measurements.


---

### `GAR-6434` — [Garuda DP] Report is always in submitted state after n number of reports are generated successfully and unable to generate the final report

- **Type:** Issue
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** mtatiche
- **Created:** 02-10-2023 21:40
- **Updated:** 31-03-2024 18:12
- **Resolved:** 12-03-2024 02:25
- **Resolution:** Done

**Description (verbatim):**

> Login to [http://134.64.246.130:4200/login]
>
> Go to reports->Select any test->generate any report.
>
> Observe the report status.
>
> They are always in submitted state.
>
> Though the corresponding report service is up on the PC.


---

### `DDRTFL-2377` — Hide Initialization and Acquisition steps from all Scenarios

- **Type:** Improvement
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** sjhawar
- **Created:** 07-02-2024 21:04
- **Updated:** 27-02-2024 01:36
- **Resolved:** 20-02-2024 20:38
- **Resolution:** Fixed

**Description (verbatim):**

> Hide Initialization and Acquisition steps from all Scenarios.
>
> Attached snap for reference


---

### `GAR-6243` — [Garuda DP][Qualcomm Feedback- Beta5] Multi iteration test run gets aborted due to big intermediate JSON document size

- **Type:** Issue
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 06-09-2023 06:26
- **Updated:** 10-04-2024 03:05
- **Resolved:** 12-09-2023 00:03
- **Resolution:** Duplicate

**Description (verbatim):**

> When running DP1.4 HBR2 application for 5 iterations there is an exception saying the json size is greater than 16MB which cannot be accepted by the mongodb but this runs fine when we reduce the iteration count to 3. Why the intermediate json size depend on the iteration count?


---

### `GAR-6445` — [Garuda DP] Additional property is not resolved in the filter condition

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** mtatiche
- **Created:** 05-10-2023 02:18
- **Updated:** 16-04-2024 18:10
- **Resolved:** 04-04-2024 23:53
- **Resolution:** Fixed

**Description (verbatim):**

> For intrapair measurement, the additional property changes are not reflected in the filter condition. Refer to the attached screenshot.
>
> It works fine with API, but not in UI.
>
> ----------------------------------------------------------------------------------------------
>
> "additionalProperties.possibleValues": [ "Both Edges", "Rising Edges", "Falling Edges" ], this syntax suggested in the design document didn't work while posting through postman but the below syntax
>
> "additionalProperties": \{ "possibleValues": [ "Both Edges", "Rising Edges", "Falling Edges" ] }, worked for posting the json through postman and through SDK it's working but not through the UI.
>
>
> ----------------------------------------------------------------------------------------------------
>
> The mapping json filter condition is as defined below:
>
> {
> "name": "intra_pair_Skew_edge_setting",
> "mapping": [
> {
> "inputConditions": {
> "FromedgeType": "Both Edges"
> },
> "output": {
> "additionalProperties": \{ "possibleValues": [ "Same as From", "Opposite as From" ] },
> "value": "Same as From"
> }
> },
> {
> "inputConditions": {
> "FromedgeType": "Rising Edges"
> },
> "output": {
> "additionalProperties": \{ "possibleValues": [ "Both Edges", "Rising Edges", "Falling Edges" ] },
> "value": "Rising Edges"
> }
> },
> {
> "inputConditions": {
> "FromedgeType": "Falling Edges"
> },
> "output": {
> "additionalProperties": \{ "possibleValues": [ "Both Edges", "Rising Edges", "Falling Edges" ] },
> "value": "Falling Edges"
> }
> }
> ]
> }


---

### `GAR-3324` — Single analysis step for multiple waveforms of different combinations is not working

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** mtatiche
- **Created:** 18-08-2022 05:41
- **Updated:** 27-04-2024 02:08
- **Resolved:** 12-09-2022 22:46
- **Resolution:** Duplicate
- **Customer Impact:** 1-High

**Description (verbatim):**

> When  analysis step and acquisition step are in same scenario:
>
>
>
> Single analysis step for multiple waveforms of different combinations which use to work earlier is not working now. Currently acquisition is happening for all combinations but analysis is happening only for the first waveform combination acquired.


---

### `GAR-4063` — [DP 2.1 Preset Optimization requirement] When entry condition for preprocess and acqusition steps are failed those steps are marked with aborted status which needs to be changed.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 03-01-2023 03:33
- **Updated:** 01-05-2024 04:59
- **Resolved:** 12-02-2023 20:46
- **Resolution:** Fixed

**Description (verbatim):**

> In DP 2.1 Application we have Signal test presets (similar to PCIe).
> DP 2.1 Application requires a preset optimization feature. (Finding the optimal preset). This is an optional step but the output of this step is used as an entry condition of another step in another scenario.
> When we deselect the optimization step, the steps are shown as aborted.
>
> This needs to be changed.


---

### `TEDIBCI-7468` — [Obeya-P6][DisplayPort-Tx] Restarting the PC changes the VM ip address but the netsh command is not picking up the updated ip

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** mtatiche
- **Created:** 30-05-2023 03:51
- **Updated:** 19-04-2024 03:38
- **Resolved:** 13-03-2024 21:55
- **Resolution:** Cannot Reproduce
- **Customer Impact:** 1-High

**Description (verbatim):**

> PC details:
>
> 8 Core PC with 1TB HDD, 32 GB RAM.
>
> Install TF beta15 I5 build.
>
> Ensure the TekFlow webpage (login) is loading properly.
>
> Now, restart the PC and try to login to the same url for loading the TekFlow webpage.
>
> Observation:
>
> Unable to open the TekFlow webpage after the PC restart.
>
>
>
> Attaching the screenshot for reference.


---

### `GAR-6581` — [Garuda DP] Interdependent settings cannot be set through SDK

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 26-10-2023 06:13
- **Updated:** 15-04-2024 22:07
- **Resolved:** 08-04-2024 01:47
- **Resolution:** Fixed

**Description (verbatim):**

> Example:
> When we set the "Levels" setting to "Custom", other settings like "Rising Edge Low", Rising Edge Mid" etc. gets editable and user can enter custom values to it.
> !image-2023-10-26-18-25-12-547.png|thumbnail!
>
> This is handled through mapping filters
>
> !image-2023-10-26-18-27-43-919.png|thumbnail!
>
> This is working fine through UI.
>
> But when you try to set the "Levels" to "Custom" and set values to these settings through SDK, the values are not getting set
>
> !image-2023-10-26-18-37-17-216.png|thumbnail!
>
> We assume the possible reason is, the values are getting set before the mapping is applied and later the mapping default value(e.g. 90) is being set.


---

### `CDOC-7652` — [Garuda DP][PLAE Feedback-Jacky] Incorrect File Path in the start up guide

- **Type:** Issue
- **Status:** In Progress
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 21-06-2023 11:07
- **Updated:** 26-06-2023 01:41

**Description (verbatim):**

> !image-2023-06-21-23-37-39-455.png|thumbnail!
>
> The correct path: C:\Tektronix\TekFlow\<App Name>\Instrument Driver


---

### `PCIEX-11619` — [Garuda PCIe][PLAE Feedback] Logs are not comprehensible by the user

- **Type:** Improvement
- **Status:** In Progress
- **Priority:** Critical
- **Reporter:** mkumar2
- **Created:** 22-04-2024 13:07
- **Updated:** 24-04-2024 09:48

**Description (verbatim):**

> As per Summary


---

### `DP-10522` — [Garuda DP][PLAE Feedback-Nitin] Logs are not comprehensible by the user

- **Type:** Improvement
- **Status:** In Progress
- **Priority:** Critical
- **Reporter:** mkumar2
- **Created:** 19-09-2023 20:42
- **Updated:** 24-04-2024 09:49

**Description (verbatim):**

> As per Summary


---

### `GAR-5356` — [TekFlow RAA UI/UX Issue] The user notification messages should be more descriptive

- **Type:** Story
- **Status:** Open
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 27-05-2023 23:46
- **Updated:** 22-04-2024 13:11

**Description (verbatim):**

> The notification message is not super comprehensive. It should mention Which test, which application, which scenario and the purpose of the notification better. The Stop button too is ambiguous. “Stop Test”? or “Stop Notification”?
> !image-2023-05-28-12-15-42-849.png|thumbnail!


---

### `GAR-7138` — Need a GUI for Automator instead of cmd window

- **Type:** Requirement
- **Status:** Open
- **Priority:** Critical
- **Reporter:** sjhawar
- **Created:** 11-12-2023 03:01
- **Updated:** 11-12-2023 03:05

**Description (verbatim):**

> Does the DRAMTX Automator have a GUI window, or is it only the python-command window? It should have a stand-alone GUI (not command prompt/shell based).
> # Memory-Tx-Update: IMPROVEMENT: We will add a JIRA for adding Automator as standalone GUI to consider this in future.
>
> # [GS]: Atleast an information to the customer if there is a mis-match in the Python version. Platform issue.
>
> [PL: need in PI-4]


---

### `GAR-7127` — Need a GUI for Uploader instead of cmd window

- **Type:** Requirement
- **Status:** Open
- **Priority:** Critical
- **Reporter:** sjhawar
- **Created:** 11-12-2023 00:22
- **Updated:** 11-12-2023 21:10

**Description (verbatim):**

> Uploader should have its own GUI and not be in a command-prompt window.
> # Is there a reason why InstrumentService, DataStoreService, and Uploader cannot share a single window with 3 tabs? This would be cleaner and easier to keep track of for a user, and a single application could be launched rather than 3.
>
> Memory-Tx-Update: IMPROVEMENT: Log this an improvement in Platform.int
>
> Receiver team - will require PL prioritization.
>
> [PL: Need in PI-4] [GS: can there be a workaround?]
>
> [NJ: Same; Despite clicking on it, the process shouldn’t stop - workaround]


---

### `GAR-7139` — Light/Dark Theme options for Clarius color themes in GUI

- **Type:** Requirement
- **Status:** Open
- **Priority:** Critical
- **Reporter:** sjhawar
- **Created:** 11-12-2023 03:03
- **Updated:** 11-12-2023 03:03

**Description (verbatim):**

> Light/Dark Theme options for Clarius color themes in GUI
>
> [PL: need in RP1]
>
> [NJ: Not critical for May release]


---

### `GAR-7128` — [Intel Folsom] [DDR Rx] Need a GUI for Calibration Service instead of cmd window

- **Type:** Requirement
- **Status:** Open
- **Priority:** Critical
- **Reporter:** skumar5
- **Created:** 11-12-2023 00:38
- **Updated:** 11-12-2023 01:03

**Description (verbatim):**

> # Automation must be moved outside of command prompt windows to official GUI (AnalysisService, CalibrationService). The command prompt windows can “pause/freeze” and requires “Pressing Any Key” while your cursor is inside the command prompt window to “un-pause/continue” the rest of the automation. If a user is not directly monitoring the CalibrationService and AnalysisService and they “pause/freeze” in this way, a user may never notice, and there is no indication from the Clarius GUI that this issue has occurred. The automation will indefinitely be paused. This specifically impacted a demonstration to Intel Haifa.
>
> # Same pausing until “Any Key is pressed within command prompt” can occur for scope-side Uploader
>
> [Receiver team] – There is already a plan to do this for Calibration service. Will need discussions for Analysis Service with Platform experts. Will need PL prioritization.
>
> [PL: need in PI-4]
>
> [NJ: Not critical for PI-4; check if this is an app or PF problem. App team: make sure that the automation is not pausing with a click.]


---

### `GAR-1436` — [PCIe] Create Test Bench UI is not intuitive

- **Type:** Story
- **Status:** Open
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 14-02-2022 07:38
- **Updated:** 26-03-2024 03:44

**Description (verbatim):**

> The "hub address" is where the instrument service is running. This is not very intuitive on the UI.
>
> Scope address is the GPIB address. Again, needs hint for this.
>
> We need to improve the usability issues in the test bench creation.
> We have seen people struggling in adding test benches (both Tek Engineers and Customers)
>
>
>
> * Add feature in UI to get test bench info including connected probe details


---

### `GAR-4042` — The asset file containing the client id and secret is exposed from the new UI

- **Type:** Security
- **Status:** Open
- **Priority:** Critical
- **Reporter:** u616478
- **Created:** 21-12-2022 04:25
- **Updated:** 26-03-2024 23:36

---

### `GAR-6309` — [Garuda DP] VM UI is stuck after running 4lanes of DP1.4 apps in multichain fashion

- **Type:** Issue
- **Status:** Open
- **Priority:** Critical
- **Reporter:** mtatiche
- **Created:** 12-09-2023 20:46
- **Updated:** 20-01-2024 01:18

**Description (verbatim):**

> Pre-requisites:
>
> Install the beta22 platform and the corresponding DP build on any 8core test pc.
>
> Ensure all the golden waveforms are copied in the default recorded waveform location
>
> Steps:
>
> Launch TekFlow webpage UI.
>
> Select proper test name, test bench,
>
> Select the signals and sources as Ln0-Ch1, Ln1-Ch2, Ln2-Ch3, Ln3-Ch4. Make sure to use all the 4lanes.
>
> Add RBR, HBR, HBR2 and HBR3 apps in the order of sequence.
>
> Select Recorded mode in each application.
>
> Click on RUN and observe.
>
> Observe:
>
> IS is able to upload all the waveforms correctly in recorded mode.
>
> AS is able to analyse the waveforms properly.
>
> Test is completed successfully.
>
> CPU usage hits 100% during the test execution but gets released once the Analsysis is complete.
>
> *Memory usage hits high during test execution and is not released completely once the test is completed.*
>
> From putty, one can see that the services are also up and running.
>
> Able to ping the VM ip.
>
> But the TekFlow UI is unresponsive.It is continuously in refresh mode. Shows the Gateway timeout error.
>
> Attaching the logs and required screenshots
>
>
>
> PC details:
>
> 8Core PC with Dynamic RAM enabled between 4GB to 12GB
>
> VCPU: 4
>
> Active Pool size: 8
>
>
>
> NOTE: only VM restart helps to come out of this issue.


---

### `GAR-6271` — [Garuda DP] Enable multiple license of the same application in the same test machine

- **Type:** Issue
- **Status:** Open
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 11-09-2023 01:14
- **Updated:** 28-11-2023 07:56

---

### `GAR-6299` — [Garuda DP][PLAE Feedback-Nitin] Test run on multiple test machine should be possible

- **Type:** Issue
- **Status:** Open
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 12-09-2023 01:07
- **Updated:** 29-11-2023 02:09

**Description (verbatim):**

> Need test time information with AS running on 8 Core 1 laptop, 16 core 1 laptop and 16 core 2 laptops. If platform does not support AS on multiple laptops I would like to know.


---

### `GAR-6298` — [Garuda DP][PLAE Feedback-Nitin] Progress Bar lacks consistent behavior

- **Type:** Issue
- **Status:** Open
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 12-09-2023 00:52
- **Updated:** 28-11-2023 07:55

**Description (verbatim):**

> Status does not make any sense. As soon as Run is hit in 30 seconds it becomes 66% and becomes 100% after 30 minute. This is showing no information and is redundant. Either Improve status or hide it for time being.


---

### `CDOC-7651` — [Garuda DP][PLAE Feedback-Jacky] Quick Start up/ Demo Guide needed for customer training

- **Type:** Issue
- **Status:** Open
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 21-06-2023 10:33
- **Updated:** 21-06-2023 21:59

---

### `GAR-5576` — [Framework][Garuda DP][PLAE Feedback-Jacky] Progress bar percentages are not proper

- **Type:** Issue
- **Status:** Open
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 21-06-2023 06:54
- **Updated:** 29-11-2023 23:10

**Description (verbatim):**

> SW Versions:
> TekFlow-Platform-v0.15.5.beta
> DisplayPort-v0.15.3.beta_9
>
> Progress bar needs improvement with actual progress
>
> Current App execution progress is only based in number of scenarios.
> e.g. DP HBR3 app has 4 scenarios
> Connect setup
> Initialize
> Perform Tests
> 3.3 PE Level Ratio measurement
>
> Step 1 and 2 are small setup steps and Step3 and 4 does actual measurement execution.
> each scenario now consumes 25% of progress. So the progress shows 50% in a few seconds and for the next 50% it takes 40 mins. This is misleading from a timing perspective.


---

### `GAR-6239` — [Garuda DP][STM Observations][SDK Improvement] Keep only results but not wfms

- **Type:** Story
- **Status:** Open
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 06-09-2023 03:14
- **Updated:** 20-01-2024 01:20

**Description (verbatim):**

> Provide an option to delete waveforms from DataBase after analysis


---

### `GAR-5216` — [Garuda DP] [STM Requirement] User should be able to run multiple test sessions in parallel for the same application from the same test machine

- **Type:** Requirement
- **Status:** Open
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 12-05-2023 07:18
- **Updated:** 20-01-2024 01:24

**Description (verbatim):**

> Use Case:
>
> 1. User wants to create multiple test sessions and trigger them from UI/API simultaneously.
> 2. If there are logical cores available in the test machine, all test session analysis should happen in parallel, utilizing the available cores.
> 3. In case of live mode, when the acquisition is complete for one session, the next session acquisition should start whiteout waiting for the current test session to complete.
> 4. In pre-recorded mode, both acquisition and analysis should happen in parallel as there should not be any dependency on live acquisition.
>
> The platform should support this parallelization techniques to optimize the test time.
>
> In the current platform, for multiple test sessions it is not possible to run them in parallel as the app will be locked for the one test session as long as it is running.


---

### `DPOJET-241` — Move Plots from Matlab to C#

- **Type:** Epic
- **Status:** Open
- **Priority:** Critical
- **Reporter:** sarahbo
- **Created:** 28-04-2014 19:09
- **Updated:** 05-06-2019 15:15

---

### `GAR-1248` — update Signal Validation Step success/failure to the user.

- **Type:** Story
- **Status:** Open
- **Priority:** Critical
- **Reporter:** u612584
- **Created:** 09-01-2022 22:53
- **Updated:** 19-09-2023 21:19

**Description (verbatim):**

> Signal validation signal  will be helpful to the user for Reference .
> Put them in logs.


---

### `GAR-4932` — [Garuda DP] Ability to accumulate population over multiple acquisitions and get results on accumulated population

- **Type:** Story
- **Status:** Open
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 18-04-2023 08:22
- **Updated:** 26-03-2024 03:44

**Description (verbatim):**

> Cumulative measurement results and plots like DPOJET Run mode: Eye and parametric measurements
> Measurement results accumulation for multiple wfms, similar to DPOJET in run mode for over 20M unit intervals
> Eye diagram accumulation for multiple wfms - 20M unit intervals in total.


---

### `GAR-4525` — [PCIe][Beta-14] Reset settings option not working as expected.

- **Type:** Story
- **Status:** Open
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 08-03-2023 04:00
- **Updated:** 26-03-2024 03:44

**Description (verbatim):**

> When reset of setting values is done to default in one section the interdependency fails because other section setting value is not changed.


---

### `GAR-5343` — [Garuda DP] [PLAE Feedback-Nitin] Lack of visibility of measurement configurations applied during test

- **Type:** Story
- **Status:** Open
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 25-05-2023 05:47
- **Updated:** 26-03-2024 03:44

**Description (verbatim):**

> In a test fail case, as a primary step of debug we check the configuration settings that are applied in the test. but the current UI des not allow that.
>
> PLAE comment:
> !image-2023-05-25-18-16-00-443.png|thumbnail!


---

### `GAR-5582` — [Garuda DP][PLAE Feedback-Jacky][Generic] Error Messages needs to be more meaningful and instructive

- **Type:** Story
- **Status:** Open
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 21-06-2023 10:29
- **Updated:** 26-03-2024 03:44

**Description (verbatim):**

> The error logs/messages currently shown to the user is not very comprehensible/ instructive to the user. Those are too technical/internal for an end user.
>
> "MessageBroker End Point Not reachable"
> "Failed to connect to GPIB"
>
> Also in some cases there are no obvious message on what went wrong.
> We ran a test without configuring the testbench correctly. There was no evident error shown/logged but the test failed.
>
> Sometimes, when VM services are down, the Login fails. But the error shown as invalid username and password. This is misleading.
> Similar VM down errors must be more intuitive.
>
>
>
> To make it applicable for all the message across the Platform:
>
> The consolidated message list is attached.
>
> [ErrorMessages.xlsx|https://fortive-my.sharepoint.com/:x:/g/personal/souraj_mukhopadhyay_tektronix_com/Ef9xCAhAKuNLszdGIYd15D0BTOrQRCtvH6Ih5jLCwh7Ahw?e=hjbCsl]


---

### `GAR-6442` — [Garuda DP] Cache is not cleared on the IS machine

- **Type:** Issue
- **Status:** Open
- **Priority:** Critical
- **Reporter:** mtatiche
- **Created:** 04-10-2023 07:52
- **Updated:** 22-03-2024 03:14

**Description (verbatim):**

> Refer to the attached screenshot where cache has not been cleared on  the IS machine.


---

### `GAR-1430` — [PCIe] Automator Model should be "Default" by default.

- **Type:** Story
- **Status:** Open
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 14-02-2022 07:26
- **Updated:** 13-03-2024 11:21

**Description (verbatim):**

> In testbench while adding automator, it is good to have "Model" set as "Default" by default. This is currently strong type in the execusion engine. If it is not entered (As this is not a mandatory field) it stops the execution during intialization.
>
>
>
> Can the input be changed to dropdown?


---

### `DP-10521` — [Garuda DP][PLAE Feedback-Nitin] Test run on multiple test machine should be possible

- **Type:** New Feature
- **Status:** Open
- **Priority:** Critical
- **Reporter:** mkumar2
- **Created:** 19-09-2023 20:41
- **Updated:** 13-03-2024 11:49

---

### `GAR-5621` — [Garuda-DDR] Is this indicating a paused test, or failed test?

- **Type:** Issue
- **Status:** Open
- **Priority:** Critical
- **Reporter:** sjhawar
- **Created:** 23-06-2023 10:05
- **Updated:** 18-03-2024 07:29

**Description (verbatim):**

> {color:#172b4d}Is this indicating a paused test, or failed test? When I saw this, I had immediately thought the test had been stopped or paused. {color}


---

### `GAR-5623` — [Garuda-DDR] How do the percent progress bars work?

- **Type:** Issue
- **Status:** Open
- **Priority:** Critical
- **Reporter:** sjhawar
- **Created:** 23-06-2023 10:06
- **Updated:** 18-03-2024 07:29

**Description (verbatim):**

> How do the percent progress bars work? Here I have passed 1 step, but have a progress of 0%?


---

### `GAR-5624` — [Garuda-DDR] A re-run button for tests from both the overall tests page, and the results pages

- **Type:** Issue
- **Status:** Open
- **Priority:** Critical
- **Reporter:** sjhawar
- **Created:** 23-06-2023 10:08
- **Updated:** 18-03-2024 07:29

**Description (verbatim):**

> A re-run button for tests from both the overall tests page, and the results pages would be great.


---

### `GAR-6957` — [Garuda PCIe/DP] [Generic] Using same test bench for different test machine requires changes in appsettings json

- **Type:** Story
- **Status:** Open
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 28-11-2023 09:59
- **Updated:** 26-04-2024 00:43

**Description (verbatim):**

> After tekflow installation we take the IS installer from the test machine and installs it on the scope.
> If the same scope needs to be used as a test bench for another test machine, then we need to either install the IS installer from the 2nd test machine or need to copy/edit the app settings json.
>
> This is a major inconvenience. There should be a seamless way of using a test bench across different test machine which is a very common scenario for all the customers.


---

### `GAR-6297` — [Garuda DP][PLAE Feedback-Nitin] Logs are not comprehensible by the user

- **Type:** Issue
- **Status:** Open
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 12-09-2023 00:48
- **Updated:** 22-04-2024 13:07

**Description (verbatim):**

> I could not make out any logs. Logs should be simple to see, continuous and have intermediate information. What is going on in background is a black box


---

### `GAR-5355` — [TekFlow RAA UI/UX Issue] Test Bench Module Issues

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 27-05-2023 23:43
- **Updated:** 26-03-2024 01:33
- **Resolved:** 21-11-2023 23:26
- **Resolution:** Done

**Description (verbatim):**

> a.	Creating Test Bench is a tedious Job. We should have a clone option to make reuse an existing test bench with minor changes (e.g. different probe type/signal generator/automator)
> b.	Why there is a “Probes” field for a signal analyzer? We already have a separate instrument type for Probe.
> !image-2023-05-28-12-11-12-915.png|thumbnail!
> c.	Do we need the “Address” field for the Probe instrument Type? And why is it “GPIB8::1::INSTR” by default? More over this field should not be mandatory for these type. For Custom Type also, the default is “GPIB8::1::INSTR”, it should be empty.
> d.	The instrument names Like ‘Scope’, ‘DUT_Control’ etc. are currently constants. Entering a different Name such as ‘TekScope’ does not work. We *MUST *handle this.
> e.	The “Application” field under the Test Bench Details should be a list as I can use the same Test bench for multiple apps. E.g. the Test bench is same for DP RBR, HBR, HBR2, HBR3. Assigning only one application to a test bench is misleading.
> !image-2023-05-28-12-11-28-034.png|thumbnail!


---

### `GAR-6828` — [UX-Design] Display warning message if user navigates to other tab, tooltips

- **Type:** Task
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** u625287
- **Created:** 12-11-2023 22:30
- **Updated:** 22-11-2023 23:22
- **Resolved:** 21-11-2023 04:37
- **Resolution:** Done

**Description (verbatim):**

> Create a design to warn user that they didn't save the test sequence date and might loose it while navigating to other tab.
>
> A warning message, *"Save Changes? There are unsaved changes. Do you like to save? On Discard, you will lose your changes"* will be displayed when user is navigating to other tab without saving the changes on the current screen.
>
> There are 3 buttons which can be selected-
> # *Cancel* - will keep the user on same screen.
> # *Discard* - will navigate the user on the other tab which he has clicked on. User will lose the modified data.
> # *Save*- Will save the changes user has made and will navigate to other tab which he has clicked.
> # Cross icon will work like Cancel.
>
>
>
> All the icons which are present in the application should have a tooltip. On mouse hover, what action will take place should be displayed.
>
> Ex: Trash icon - "Delete"
>
> Bell icon should - "Notification"
>
> Funnel icon - "Filter" etc.


---

### `GAR-5572` — [Ux][Garuda DP][PLAE Feedback-Jacky] Test Bench User experience (Configuration Issues)

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 21-06-2023 06:50
- **Updated:** 26-03-2024 01:33
- **Resolved:** 08-11-2023 23:31
- **Resolution:** Done

**Description (verbatim):**

> SW Versions:
> TekFlow-Platform-v0.15.5.beta
> DisplayPort-v0.15.3.beta_9
>
> • Manage section – adding instruments is not straightforward- Need prior knowledge on TF to add instruments. All this was easy in one screen in TE
> • Need to use a pre-defined exact name for instruments- cannot be user defined
> • Address field is diff to enter in instrument details pop up


---

### `GAR-8157` — Hardcoded Logs filter values in GUI are not same as logging service query parameter, hence we are using filter for logs from GUI is of no use

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** bhap
- **Created:** 23-04-2024 22:07
- **Updated:** 01-05-2024 21:43
- **Resolved:** 28-04-2024 20:49
- **Resolution:** Fixed

**Description (verbatim):**

> 1> Login to Clarius
>
> 2> Select EVENTs/Logs menu
>
> 3> Select Logs tab
>
> 4> Click in Filter icon. Select 'Instrument_Service' or other service filter values and click on apply.
>
>
>
> Observation: It pop up the page with empty logs.


---

### `GAR-2126` — As a validation engineer, wants to test daily builds(IS, AS) and test GUI and overall system

- **Type:** Task
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** bhap
- **Created:** 26-04-2022 23:01
- **Updated:** 13-09-2023 19:41
- **Resolved:** 07-06-2022 11:15
- **Resolution:** Done

---

### `GAR-4202` — [UI] Interdependency of settings and validation

- **Type:** Story
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** fana
- **Created:** 19-01-2023 02:22
- **Updated:** 13-09-2023 19:40
- **Resolved:** 12-02-2023 20:30
- **Resolution:** Done

**Description (verbatim):**

> * Integrate trigger FILTER API to list or display settings
> * Integrate trigger VALIDATION API to validate settings after submission


---

### `GAR-3133` — Schematic diagram is not supported in the UI

- **Type:** Story
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 20-07-2022 04:51
- **Updated:** 14-09-2023 10:35
- **Resolved:** 13-09-2022 01:29
- **Resolution:** Duplicate

---

### `GAR-5597` — Expand the UI for result table visibility

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** skumar5
- **Created:** 23-06-2023 04:08
- **Updated:** 13-09-2023 19:39
- **Resolved:** 24-07-2023 21:21
- **Resolution:** Done

**Description (verbatim):**

> * Increase the space for the table result
> * There should be a vertical scroll if the data are not more.
> * handle https://swt-bv-alm-1.global.tektronix.net:8443/jira/browse/GAR-5656
>
>
>
> PFA


---

### `GAR-6966` — Upgrade versions of dependencies reported by Veracode in UI

- **Type:** Task
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** u616478
- **Created:** 28-11-2023 20:58
- **Updated:** 29-11-2023 20:21
- **Resolved:** 29-11-2023 20:21
- **Resolution:** Done

---

### `GAR-4455` — Update UI to handle the new measurement result model

- **Type:** Story
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** magl
- **Created:** 24-02-2023 05:07
- **Updated:** 13-09-2023 19:40
- **Resolved:** 15-03-2023 00:33
- **Resolution:** Done

**Description (verbatim):**

> Update UI to handle the new measurement result model
> # Display all results in statistical model (as defined here: {color:#4c9aff}[https://fortive.sharepoint.com/:f:/r/sites/TEK-PERF-PRJ-GARUDA/Shared%20Documents/General/04.Technical%20Documents/1.%20SW/01.Design%20Docs/Detailed-Design/measurement_output?csf=1&web=1&e=gdkfKA]{color})
> # Display cumulative results at application and scenario level results
> # Display individual iteration results at step level
> # Display cumulative plots
> # Display plots of individual iterations
> # Display additionalInfo of each result
> # Read cursor data from updated result (result.additionalInfo.cursors)


---

### `GAR-4505` — Beta14 : DPHY : Signal SourcesSE Negative Lane is not visible on UI

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** kmishra
- **Created:** 02-03-2023 09:25
- **Updated:** 13-09-2023 19:40
- **Resolved:** 06-03-2023 21:06
- **Resolution:** Done

**Description (verbatim):**

> # SE Negative Lane is not visible on UI
> 2. Changing the Probe Type for one signal is affecting others.
> 3. Can we disable the ‘+’ button on top right if we don’t want to add multiple lanes for our application?
>
>
>
> !image-2023-03-02-22-53-59-460.png!


---

### `GAR-4245` — [New UI] List of tests is shown as empty in the PCIe VM

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** mtatiche
- **Created:** 30-01-2023 21:34
- **Updated:** 13-09-2023 19:40
- **Resolved:** 12-02-2023 20:42
- **Resolution:** Done

**Description (verbatim):**

> Test PC with ip 134.64.245.244 is deployed with Beta13 of TF FW.
>
> The new UI is accessible at the [http://192.168.9.3:4200/login]
>
> Login to the UI using admin and admin's pwd.
>
> Add a test and observe that the execution reaches IS and the test is executed successfully .
>
> But the List of tests page which shows the triggered tests is not updated with the recent triggered tests.
>
>
>
> NOTE: The old UI is updated properly with the same triggered tests.
>
> Team has tried the first aid things like restarting the NEW UI service. Relaunching the UI etc.


---

### `GAR-4506` — Beta 14: DPHY: Abort and pause options are visible in UI but is not working.

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** kmishra
- **Created:** 02-03-2023 09:28
- **Updated:** 13-09-2023 19:40
- **Resolved:** 06-03-2023 21:07
- **Resolution:** Done

**Description (verbatim):**

> Abort and pause options are visible in UI but is not working.
>
> !image-2023-03-02-22-58-10-327.png!


---

### `GAR-4962` — [Garuda PCIe]Results are not coming up in the UI even though they are available

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** u606691
- **Created:** 25-04-2023 00:30
- **Updated:** 26-03-2024 05:19
- **Resolved:** 26-04-2023 23:17
- **Resolution:** Fixed

**Description (verbatim):**

> Build versions: as per the Beta-15 17 march rollout (attached)
> FW: TekFlow-Platform-v0.15.1.beta.exe
> PCIE: PCIe-v0.15.1.beta.exe
>
> Step 1: Launch application
> Step2: Run any PCIe app test session
> Step 3: IS and uploader works as expected. Waveforms are acquired and uploaded
> Step4: AS is able to download and analyze waveforms correctly
> Step5: Go to Results Panel, results are not displayed.


---

### `GAR-7460` — [Stability Fix] Proxy UI requests to gateway-container using docker networks

- **Type:** Task
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** u616478
- **Created:** 23-01-2024 02:14
- **Updated:** 06-02-2024 20:37
- **Resolved:** 06-02-2024 20:37
- **Resolution:** Done

**Description (verbatim):**

> This will enable the UI to proxy the UI-service API calls to the gateway-service container through container to container communication


---

### `GAR-1839` — Limits dependent on Sub measurement

- **Type:** Story
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** vsiddhar
- **Created:** 29-03-2022 03:41
- **Updated:** 28-01-2024 23:35
- **Resolved:** 05-07-2022 02:06
- **Resolution:** Done

**Description (verbatim):**

> The 3.4 HBR2/HBR3 Pre-emphasis level verification test has a sub measurement whose limits are dependent on another sub measurement. Limits for Sub Measurement 2 needs to be decided based on result of Sub-measurement1.


---

### `GAR-6263` — [Garuda DP][Beta-22] Recorded mode interdependent settings is not working for multi-chain

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 08-09-2023 03:16
- **Updated:** 11-10-2023 04:35
- **Resolved:** 11-10-2023 01:36
- **Resolution:** Done

**Description (verbatim):**

> Recoreded waveform path is not shown if apps are added on multi-chain which have different default recorded path.
>
> 1. Launch TekFlow->Add Test
> 2. Add sequence-> RBR application
> 3. Add Sequence-> UHBR10 application
> 4. Go to RBR app global settings-> change Live to Recorded. Recorded waveform path is shown
> 5. Go to UHBR10 app global settings-> change Live to Recorded. Recorded waveform path is NOT shown


---

### `GAR-5571` — [Garuda DP][PLAE Feedback-Jacky] Page Refresh Issue

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 21-06-2023 06:49
- **Updated:** 13-09-2023 19:39
- **Resolved:** 02-08-2023 22:07
- **Resolution:** Done

**Description (verbatim):**

> SW Versions:
> TekFlow-Platform-v0.15.5.beta
> DisplayPort-v0.15.3.beta_9
> - After test run page does not refresh. User does not know what to do - https://swt-bv-alm-1.global.tektronix.net:8443/jira/browse/GAR-5682
> - Needs refresh to see license file which was already activated
> - Loading the test for example rbr in a sequence has a loading time- why is it even though it doesn’t go to the scope


---

### `GAR-5955` — [DP] [Qualcomm Requirements] CSV report improvements

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 02-08-2023 23:51
- **Updated:** 19-09-2023 22:47
- **Resolved:** 13-09-2023 03:12
- **Resolution:** Duplicate

**Description (verbatim):**

> Lane is not shown in CSV report. Reuuired for Multilane testing
> Test Name in CSV Report
> Test (Execution) ID in CSV report.
> Low limit and high limits to be put separately in the csv report.
> - Current: High Limit<=value<= Low Limit
> - Expected:
> High Limit: X
> Low Limit: Y


---

### `GAR-5622` — [Garuda-DDR] Can both of these drop-downs be expanded at the same time?

- **Type:** Task
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** sjhawar
- **Created:** 23-06-2023 10:05
- **Updated:** 13-09-2023 19:39
- **Resolved:** 30-07-2023 20:06
- **Resolution:** Done

**Description (verbatim):**

> Can both of these drop-downs be expanded at the same time?


---

### `GAR-3251` — [DP]  Scenario level referencing to PreProcessor output for object collection returns collection of collection

- **Type:** Story
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 09-08-2022 01:04
- **Updated:** 14-09-2023 08:03
- **Resolved:** 30-10-2022 21:08
- **Resolution:** Done

**Description (verbatim):**

> When we do step level referencing we get the collection correctly.
>
> {
> "name": "c2",
> "displayName": null,
> "group": null,
> "type": "COLLECTION<STRING>",
> "value": [ "[3.2] NonPELevelVerification", "[3.3] PELevelVerificationAndMaxDiffP2P", "[3.9] NonISIJitter", "[3.11] TotalJitter" ],
> "unit": null,
> "description": null,
> "additionalProperties": null,
> "constraints": "\"[3.1] EyeWidth\" IN value",
> "reference": "#/step['cbb8e16e-0dcf-4025-8928-a2c3dae9a688']/outputs[*][?(@.type=='COLLECTION<STRING>')].value",
> "referenceType": null,
> "global": false,
> "mandatory": false,
> "editable": false,
> "deprecated": false
> }
>
> But for Scenario level referencing it is passing collection if collection.
>
> {
> "name": "c3",
> "displayName": null,
> "group": null,
> "type": "COLLECTION<STRING>",
> "value": [ [ "[3.2] NonPELevelVerification", "[3.3] PELevelVerificationAndMaxDiffP2P", "[3.9] NonISIJitter", "[3.11] TotalJitter" ] ],
> "unit": null,
> "description": null,
> "additionalProperties": null,
> "constraints": "\"[3.2] NonPELevelVerification\" IN value",
> "reference": "#/scenario['Perform_Tests']/step['prepare_setup']/outputs[*][?(@.type=='COLLECTION<STRING>')].value",
> "referenceType": null,
> "global": false,
> "mandatory": false,
> "editable": false,
> "deprecated": false
> }
>
> This is causing the scenario to abort.


---

### `TEDIBCI-8067` — [DisplayPort-Tx] Platform Offline installation

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 06-09-2023 01:54
- **Updated:** 13-12-2023 02:23
- **Resolved:** 13-12-2023 02:23
- **Resolution:** Done

**Description (verbatim):**

> Customers like ST and a few others in Taiwan does not allow internet connection in their lab. Such environment demands an offline installer of TekFlow.


---

### `TEDIBCI-8719` — [DP] App installation is failing on top of TekFlow beta27 installed using downloader

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** mtatiche
- **Created:** 05-01-2024 04:36
- **Updated:** 22-01-2024 20:45
- **Resolved:** 22-01-2024 20:45
- **Resolution:** Other

**Description (verbatim):**

> Install Clarius beta27 using downloader by using the download and install option.
>
> Observe that the installation is successful.
>
> Clarius webpage is launched successfully and login is successful using admin credentials.
>
> Install the DP app (DisplayPort-1.0.0-test.30.exe) build on top of this build.
>
> Observe that the app installation is always failing at the resource loader step.
>
>
>
> NOTE: The same app installer works fine when installed on the platform installed using online installer.
>
>
>
> Attached on the install and update logs of the PF and the app build.


---

### `GAR-4284` — [DisplayPort 2.1] CIO measurement integration for DP 2.1

- **Type:** Story
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 01-02-2023 04:31
- **Updated:** 29-01-2024 03:45
- **Resolved:** 12-02-2023 23:29
- **Resolution:** Done

**Description (verbatim):**

> We need to include the latest CIO measurements in the Riddick Measurement Library.


---

### `TBSQA-380` — UI test case development for Autoset Overlay

- **Type:** Task
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** wenyues
- **Created:** 15-08-2019 09:45
- **Updated:** 14-09-2023 07:54
- **Resolved:** 02-10-2019 23:30
- **Resolution:** Done

**Description (verbatim):**

> The new feature Autoset Overlay UI is ready on build 17.
>
> PI test case is written and still need UI test case to cover it.
>
> The new feature can be seen on Hori/Acq -> Autoset Overlay menu.
>
> The requirement is in [https://wiki.danahertm.com/display/~tnguye18/Enhanced+Autoset+Requirements]


---

### `TEDIBCI-7363` — [DisplayPort-Tx] TekFlow 0.15.2 beta build could not be uninstalled.

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 15-05-2023 06:08
- **Updated:** 09-12-2023 21:37
- **Resolved:** 07-06-2023 20:53
- **Resolution:** Done

**Description (verbatim):**

> Unable to un-install 0.15.2 build from test machine. It throw'a hyper-v not enabled error. But it is enabled.
>
> !image-2023-05-15-18-37-18-510.png|thumbnail!


---

### `GAR-4673` — [DP/PCIe] [Beta-14] Multichain app progress bars show progress simultaneously although apps are running in sequence.

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 20-03-2023 13:17
- **Updated:** 14-09-2023 08:20
- **Resolved:** 13-09-2023 22:59
- **Resolution:** Done

**Description (verbatim):**

> 1. Add 2 apps (DP RBR and HBR) under a test session
> 2. Click Run
> 3. The progress bar shows progress for both apps at the same time. But actually the apps run in sequence.
>
> !image-2023-03-21-01-47-21-625.png|thumbnail!


---

### `GAR-4583` — [DP] Need provision to change acquisition settings based on measurement requirements

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 14-03-2023 07:52
- **Updated:** 20-12-2023 04:47
- **Resolved:** 28-11-2023 07:04
- **Resolution:** Done

**Description (verbatim):**

> Changing acquisition settings based on specific requirements are not allowed in TekFlow platform now. This is currently blocking some important use cases on app side.
>
> Use Case 1:
> - Acquisition for PE Level Ratio Measurements should be  done in the average mode (16 acquisition).
> - It shows run to run variation when the waveforms are acquired in sample mode.* [Qualcomm has reported this issue]*
> - Other measurement acquisitions should be done on sample mode because average mode acquisition is time consuming.
> - Currently acquisition for all measurement is done in sample mode as the acquisition setting is common across all.
>
> Use Case 2:
> - As per spec, different measurements should run on different different RL.
> - e.g. : Eye Measurements: 11M, Jitter and SSC measurements: 40M
> - Current TekFlow app allows one RL setting that is applicable for all measurements. Acquiring a longer RL longer is unnecessary and it impacts acquisition performance.
>
> Use Case 3:
> - Some measurement (e.g ACCM) requires single ended waveforms to be uploaded for analysis while other measurements needs only differential.
> - When we uncheck "Export Math only" to support ACCM measurements, the single ended waveforms get uploaded for all other measurements also which is unnecessary.


---

### `TEDIBCI-7223` — [DisplayPort-Tx] Build Issue: Getting error in signal validation post acquisition plugin for DP application

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 13-04-2023 09:58
- **Updated:** 09-12-2023 22:04
- **Resolved:** 11-08-2023 04:59
- **Resolution:** Done

**Description (verbatim):**

> Getting the below error in the IS log while running the DP application.
>
> !image-2023-04-13-22-25-47-875.png|thumbnail!
>
> Building the analysis service repo manually and copying the below dlls resolved the issue.
>
> !image-2023-04-13-22-27-26-122.png|thumbnail!
>
> Looks like the build machine has some compilation issue.


---

### `ERINT-76` — 80C18 module contains two channels, but listing only one channel in DUT panel

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** AKAC
- **Created:** 22-07-2018 23:06
- **Updated:** 14-09-2023 12:41
- **Resolved:** 24-07-2018 02:27
- **Resolution:** Fixed
- **Customer Impact:** 2-Medium

**Description (verbatim):**

> 80C18 module contains two channels, but listing only one channel in DUT panel


---

### `CS-183` — Filter/bandwidth mapping not happens for 80C21 module

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** vbalan
- **Created:** 18-07-2018 03:50
- **Updated:** 14-09-2023 12:19
- **Resolved:** 18-07-2018 23:26
- **Resolution:** Fixed
- **Customer Impact:** 1-High

**Description (verbatim):**

> Launched TDEC or SR4 TekExpress application in dsa83pavel2 where 80C21 module is connected.
>
> Filter and Bandwidth drop down controls show NONE as the only value available though there are several Filter and Bandwidths available for the module.
>
> These entries are found in mapping ini too.
>
> Python log shows there is some issue in mapping. Need to debug from python.


---

### `RXGKRT-93` — Analysis option should only have "Save all waveforms before Analysis" option only

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** satk
- **Created:** 28-11-2017 09:36
- **Updated:** 14-09-2023 07:35
- **Resolved:** 01-12-2017 03:09
- **Resolution:** Done

**Description (verbatim):**

> Currently the application has 3 analysis options
> # Save all wfms before analysis
> # Analyze without saving the wfms
> # Acquire and analyze
>
> We have to support only first option above and it has to be just a message in Analysis group.


---

### `TEDIBCI-8073` — [DisplayPort-Tx] Analysis Service throws "access to path denied" error when run on non-admin mode.

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 06-09-2023 06:16
- **Updated:** 29-02-2024 08:38
- **Resolved:** 28-02-2024 06:06
- **Resolution:** Fixed

**Description (verbatim):**

> -


---

### `GAR-6959` — Explore - [Garuda DP] [Qualcomm Beta-6 Feedback] Eye Diagram plots rendering needs to be better

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 28-11-2023 10:09
- **Updated:** 08-02-2024 11:07
- **Resolved:** 08-02-2024 11:07
- **Resolution:** Done

**Description (verbatim):**

> Eye rendering in TekFlow could be improved by setting the correct amplitude scale for a given eye diagram. The units also need to be changed from 1e-N to mV or V.
>
> !image-2023-11-28-23-37-25-139.png|thumbnail!
>
> Due to narrow scaling the eye diagram looks compressed in TekFlow.
>
>
>
> =====================
>
> Gap in Tekflow eye diagram plot in 1.0.0.beta27 are:
>
> 1> Automatic veritical(Y-axis) and horizontel(X-axis) scale should be equidistanced in top and botton)
>
> 2> Units should be displayed in scientific unit(mv, micro volts, and others)
>
> 3> Customized/Userdefined X-axis and Y-axis units selection


---

### `TEDIBCI-8749` — Beta27 DP and PCIe Installer issues.

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** etharite
- **Created:** 12-01-2024 06:48
- **Updated:** 14-02-2024 23:22
- **Resolved:** 29-01-2024 20:28
- **Resolution:** Fixed

**Description (verbatim):**

> Below are the installer path issues observed during PCIE and DP Beta27 testing.
>
> DP and PCIE:
> -------------------------------------------------------------
> 1)	Matlab-meas-executor dlls are missing in the “C:\Program Files\Tektronix\TekFlow\lib\instrument\service” folder of instrument service. (DP and PCIE need this for post acquisition plugin).
> 2)	Analysis.Core.dll is missing in the “C:\ Program Files\Tektronix\TekFlow\lib\instrument\plugins\shared_libraries” folder of instrument service. (Since DP and PCIE use a measurement from analysis repo for signal validation in post acquisition plugin).
> 3) cpp-meas-executor dlls are missing in the “C:\Program Files\Tektronix\TekFlow\lib\instrument\service” folder of instrument service. (DP and PCIE need this for post acquisition plugin).
>
> PCIE:
> -------------------------------
> 1)	Along with PCIE dlls, all decoder dlls from “build\deploy\plugins\applications\Decoders” and all ipps dlls from “source\References\ipps”  should be copied to the “C:\Program Files\Tektronix\TekFlow\lib\instrument\plugins\applications\PCIE” install folder of IS and also to “C:\ Program Files\Tektronix\TekFlow\lib\analysis\plugins\applications\TX\PCIE” install folder of AS. (Since PCIE measurements depends on them)
>
> 2)	Instrument Plugin installer of PCIE is coming in “C:\Program Files\Tektronix\TekFlow\lib\analysis\plugins\applications\TX\PCIE\installers” but it should come in “C:\Program Files\Tektronix\TekFlow\installers\instrument\PCIe” folder.
>
> 3)	And also PAMJET dlls from “source\Measurements\PCIe\PCIe6\pam4Refs” folder should be copied to “Program Files\Tektronix\TekFlow\lib\instrument\plugins\shared_libraries” of IS and also to “Program Files\Tektronix\TekFlow\lib\analysis\plugins\shared_libraries” of AS. (Since PCIE depends on this PAMJET dlls)


---

### `TEDIBCI-7085` — [DisplayPort-Tx] AnalysisService_Start.bat file cannot launch Multiple Analysis services at the same time

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 20-03-2023 13:38
- **Updated:** 10-12-2023 01:00
- **Resolved:** 06-04-2023 09:59
- **Resolution:** Done

**Description (verbatim):**

> When we install different application packages in the same machine (e.g.: DP and PCIe) there are two Analysis Service folders get created.
> At this point we are unable to run both the analysis service at the same time.
> This blocks the user to run test on two applications simultaneously in the same test machine although the test benches are different.
> This use case must be supported.
>
> Step1. Run PCIe AnalysisService.bat in admin mode. It launches properly.
> Step2: Try to runDP AnalysisService.bat in admin mode while PCIe AS is already running. it does not launch.
>
> When we run the analysis service using exe, they can launch together.


---

### `GAR-6235` — [Garuda DP][Qualcomm Feedback- Beta5]  VM storage gets full and the TekFlow goes to unresponsive state

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 06-09-2023 02:53
- **Updated:** 22-02-2024 21:02
- **Resolved:** 22-02-2024 21:02
- **Resolution:** Duplicate

**Description (verbatim):**

> When VM storage is exhausted, the tekflow becomes unresponsive.
> - UI does not load
> - Even though the UI loads, user cannot log in to it.
> - We cannot delete session through UI or API
>
> Expectations:
> 1. Available space must be shown in UI and also warn user when the space is low. So that the user can confirm before running test
> 2. There should be some threshold defined beyond which no data should be stored in database. This would allow VM to have dedicated storage space to function normally.


---

### `GAR-4285` — [DisplayPort] Automator is not working in Beta 13

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 01-02-2023 06:45
- **Updated:** 14-09-2023 12:14
- **Resolved:** 16-03-2023 08:26
- **Resolution:** Fixed

**Description (verbatim):**

> Automator is not called eventhough it is running. Tests cannot be run on automated mode.
> This issue is observed in Beta 13.


---

### `DPOJET-516` — [Kauai_R1]: UI: Support Edges configuration for Noise measurements

- **Type:** Task
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** amohamme
- **Created:** 20-06-2014 10:38
- **Updated:** 14-09-2023 08:12
- **Resolved:** 27-01-2015 00:54
- **Resolution:** Done

**Description (verbatim):**

> Support Edges configuration for Noise measurements.


---

### `DPOJET-514` — [Kauai_R1]: ADK: Enable custom measurements addition through ADK.

- **Type:** Task
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** amohamme
- **Created:** 20-06-2014 10:23
- **Updated:** 14-09-2023 08:12
- **Resolved:** 19-01-2015 22:59
- **Resolution:** Done

**Description (verbatim):**

> Enable custom measurements addition through ADK of all the jitter and noise measurements.
>
> Also enable or disable custom measurements through ADK only when respective option key is enabled. For example Noise measurements should be enabled only when DJAN option key is enabled and when Analysis method is "Jitter+Noise"
>
> 1. Mapping enums to corresponding meas instantiation
> 2. Ensure existing meas are also supported - old, new ( there could be some issues here)
> 3. This includes only base dpojet meas and not new ADK meas
>
> Low priority
> 4. Should be able to add prerequisite work


---

### `GAR-5560` — [Garuda DP][PLAE Feedback-Gary] Add Test Bench Error message is not comprehensible

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 20-06-2023 21:15
- **Updated:** 26-03-2024 01:33
- **Resolved:** 25-09-2023 23:30
- **Resolution:** Duplicate

**Description (verbatim):**

> Test Environment:
> 1.1.	Dell Precision 5550 Laptop
> 1.2.	Intel(R) Core(TM) i9-10885H CPU @ 2.40GHz   2.40 GHz
> 1.3.	64.0 GB RAM
>
> SW Versions:
> 2.1.	TekFlow-Platform-v0.15.3.beta
> 2.2.	DisplayPort-v0.15.3.beta_6
>
> After adding my first instrument to test bench, I tried to save and received an error related an invalid character in the name for test bench…but the error gives no indication as to what the invalid character was…or what characters are allowed.
> !image-2023-06-21-09-45-49-171.png|thumbnail!


---

### `GAR-4527` — [PCIe][Beta-14] Dropdown selections are missing in Test Bench Creation

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 08-03-2023 04:03
- **Updated:** 26-03-2024 01:33
- **Resolved:** 15-03-2023 11:02
- **Resolution:** Done

**Description (verbatim):**

> While adding instrument in testbench type and category are coming as text input instead of showing dropdown of supported list.
>
> !image-2023-03-08-17-32-42-717.png|thumbnail!


---

### `GAR-5581` — [Garuda DP][MIPI CPHY DPHY] [PLAE Feedback-Pascal/Gary] Report Generation takes very long time.

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 21-06-2023 07:12
- **Updated:** 27-02-2024 01:02
- **Resolved:** 27-02-2024 01:02
- **Resolution:** Done

**Description (verbatim):**

> SW Versions:
> TekFlow-Platform-v0.15.5.beta
> DisplayPort-v0.15.3.beta_9
>
> Pascal: Currently TekFlow Report Generation at the end of a test session is not automatic and it takes a long time.


---

### `GAR-4582` — [Garuda DP] Test session cannot be run without Preset Optimization for DP 2.1 apps

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 14-03-2023 07:49
- **Updated:** 26-03-2024 04:48
- **Resolved:** 06-04-2023 21:23
- **Resolution:** Fixed

**Description (verbatim):**

> 1. Although Preset Optimization Scenario is made "Mandatory=False", it cannot be unselected as Perform Test stem is dependent on it.
> 2. When we use global setting toggle button to turn off the Preset Optimization, the scenario is aborted instead if skipped. This is causing abortion of the complete session.
>
> The user needs to run preset optimization mandatorily now. This blocks him/her to test on multiple presets.


---

### `DP-11377` — [Pascal's Feedback] DJ measurement in TekFlow is giving higher value than TekScope Riddick

- **Type:** Improvement
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 06-02-2024 01:50
- **Updated:** 12-03-2024 23:16
- **Resolved:** 12-03-2024 23:16
- **Resolution:** Fixed
- **Customer Impact:** 1-High

**Description (verbatim):**

> Tekscope analysis of fdgsz6 folder
> TEKSCOPE TJ (@BER10E-12)=20.11ps
> TEKSCOPE DJdd=10.82ps
> TEKSCOPERJdd RMS=0.660ps
>
> using 10E-12 Target BER the coef to use to multiply RJ dd RMS should be around 14.1
> 10.82+14.1*0.660=20.126 ps close enough to TEKscope returned TJ value of 20.11ps
>
> Tekflow Analysis of supposedly the same waveforms
>
> Tekflow analysis of fdgsz6 folder
> Tekflow TJ (@BER10E-12)=20.937ps
> Tekflow DJdd=15.7065ps !!! this value seems abnormally high to me like we are not using the right PLL settings
> Tekflow RMS=0.736ps
>
>
>
> [^Re_ _EXTERNAL_ Random Jitter.msg]


---

### `GAR-6972` — [Garuda DP/PCIE] [Beta26 Early Adaption feedback] There are a huge number of log messages being shown when the AS and IS is being launched.

- **Type:** Improvement
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 30-11-2023 03:43
- **Updated:** 13-03-2024 23:28
- **Resolved:** 13-03-2024 23:27
- **Resolution:** Cannot Reproduce

**Description (verbatim):**

> [Custom DP] displaying dll loading message to the user in IS and AS in beta-25 build.
> When we are launching AS.. we see there are tons of such messages getting loaded in AS console log. This needs cleanup. This was not observed in Beta-22.
>
> !image-2023-11-30-17-11-56-186.png|thumbnail!


---

### `GAR-7191` — Implement- [Garuda DP] [Qualcomm Beta-6 Feedback] Eye Diagram plots rendering needs to be better

- **Type:** Story
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 13-12-2023 03:02
- **Updated:** 31-03-2024 18:12
- **Resolved:** 12-03-2024 04:20
- **Resolution:** Done

**Description (verbatim):**

> Eye rendering in TekFlow could be improved by setting the correct amplitude scale for a given eye diagram. The units also need to be changed from 1e-N to mV or V.
>
> !image-2023-11-28-23-37-25-139.png|thumbnail!
>
> Due to narrow scaling the eye diagram looks compressed in TekFlow.
>
>
>
> =====================
>
> Gap in Tekflow eye diagram plot in 1.0.0.beta27 are:
>
> 1> Automatic veritical(Y-axis) and horizontel(X-axis) scale should be equidistanced in top and botton)
>
> 2> Units should be displayed in scientific unit(mv, micro volts, and others)
>
> 3> Customized/Userdefined X-axis and Y-axis units selection


---

### `GAR-6448` — [Garuda DP] It is impossible to understand the status of the application pass/fail once the test run is complete

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 05-10-2023 06:48
- **Updated:** 31-03-2024 18:12
- **Resolved:** 28-02-2024 01:50
- **Resolution:** Done

**Description (verbatim):**

> Under test tab, we Get the status of overall test.
>
> !image-2023-10-05-19-07-30-445.png|thumbnail!
>
> But when you go inside the test, there is no way to know which test has passed/failed or aborted.
>
> !image-2023-10-05-19-11-45-866.png|thumbnail!
>
> The Failed and Aborted status are of the same color red. This is not intuitive.
>
> !image-2023-10-05-19-13-58-312.png|thumbnail!
>
> There is no status for step level.
>
> !image-2023-10-05-19-17-19-979.png|thumbnail!
>
> Earlier there used to be the number of steps that are passed/failed/aborted. This was useful, that is now removed.
>
> These are major usability issue and needs to be fixed at the earliest.


---

### `GAR-7367` — [Clarius DP] DP 2.1 Preset optimization requires lane(source) information to be passed to each step

- **Type:** Story
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 08-01-2024 01:31
- **Updated:** 31-03-2024 18:12
- **Resolved:** 26-03-2024 07:49
- **Resolution:** Done

**Description (verbatim):**

> In DP 2.1 Preset Optimization feature, each lane can have a differet set of preset selected.
>
> Here are the steps
>
> 1. Acquire waveforms for each lane as per the preset selection made for that lane.
> 2. Preset optimization analysis is run on each lane and optimal(best) preset is calculated for each lane.
> 3. Use the optimal preset value to determine the preset waveform to be acquired for each individual lane.
> 4. Acquire the optimal preset waveform only for the individual lanes for all the measurements.
>
> Currently the source information is not passed betwwen step 2 and 3. Therefore identifying which is the optimal preset for which lane is not possible.
> Platform needs to provide the lane information as part of the input and setting from the preset optimization analysis step to the acquisition step.
>
> !image-2024-01-08-14-57-12-531.png|thumbnail!
>
> How to fetch the optimal preset info for a particular lane in this step?
>
> !image-2024-01-08-14-59-50-278.png|thumbnail!


---

### `GAR-6236` — [Garuda DP][STM Observations] TekFlow does not work with IPV6 IP

- **Type:** Story
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 06-09-2023 03:07
- **Updated:** 10-04-2024 04:16
- **Resolved:** 27-02-2024 20:47
- **Resolution:** Done

**Description (verbatim):**

> Observed this issue in STM. Needs more investigation.


---

### `TEDIBCI-8663` — [Garuda DP][STM Observations] TekFlow does not work with IPV6 IP

- **Type:** Story
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 14-12-2023 01:23
- **Updated:** 10-04-2024 05:03
- **Resolved:** 10-04-2024 05:02
- **Resolution:** Won't Do

**Description (verbatim):**

> Observed this issue in STM. Needs more investigation.
>
>
>
> We observed this in 2 setups.
>
>
>
> In Setup 1 we find uploader was failing to upload waveform. Endpoint communication was failing due to invalid characters in IPV6.
>
> In setup 2 we got the Access token error during installation...This also got fixed when reprioritized IPV6. After that the installation was fine.


---

### `TEDIBCI-8124` — [DisplayPort-Tx] Need to bundle default mask to the CustomDP build

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** mtatiche
- **Created:** 21-09-2023 22:12
- **Updated:** 29-04-2024 02:40
- **Resolved:** 29-04-2024 02:40
- **Resolution:** Fixed

**Description (verbatim):**

> [DisplayPort-Tx] Need to bundle default mask to the CustomDP build-


---

### `GAR-6221` — [Garuda DP] Preset optimization and TxEq measurements list is not updating based on the source selection changes

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** mtatiche
- **Created:** 04-09-2023 23:33
- **Updated:** 15-04-2024 04:46
- **Resolved:** 15-04-2024 04:46
- **Resolution:** Done

**Description (verbatim):**

> Based on the lane selection in the UI, the preset optimization and the TxEq lanes are not updated in the UI. From API, its working fine.
>
> Steps to Reproduce:
>
> 1) Add any UHBR app from DisplayPort technology.
>
> 2) Select Lane0 in source selection panel. (attached the snapshot - "Only Lane0 Selected.png")
>
> 3) Go to the step settings of "prepare setup" under the scenario "TX_Equalization", observe the "Meas TxEq" setting (attached the snapshot - "Only Lane0 Case TestList.png"), the drop down has "TXEQ_Lane0" option alone.
>
> 4) Now select one more lane say Lane1 in source selection panel.(attached the snapshot - "Multi Lane Case.png")
>
> 5) Now go to the step settings of "prepare setup" under the scenario "TX_Equalization", observe the "Meas TxEq" setting (attached the snapshot - "MultiLaneTestList.png"), the drop down has "TXEQ_Lane0" option alone. But it should have two options in the dropdown [ "TXEQ_Lane0", "TXEQ_Lane1" ]  which is being shown correctly in the inspect window but not getting reflected in the UI.
>
> Since it's coming fine in the inspect window seems like the filter is working properly but in UI it's not reflecting.


---

### `DP-10539` — [Garuda DP][PLAE Feedback-Nitin] Clicking on the AS service or Uploader service control stops the execution

- **Type:** Improvement
- **Status:** Resolved
- **Priority:** Critical
- **Reporter:** mkumar2
- **Created:** 19-09-2023 20:58
- **Updated:** 24-04-2024 01:09
- **Resolved:** 24-04-2024 01:09
- **Resolution:** Fixed

**Description (verbatim):**

> As per Summary


---

### `GAR-5743` — [UI][TF-DDR5 DRAM TX] when user select All Scenarios (DQS Jitter, DQ Jitter, DQ Stressed Eye Scenario) with all three-source selected in UI, DQS+, DQS- and DQ it acquires all DQS+,DQS- and DQ which is not correct for DQS jitter scenario

- **Type:** Improvement
- **Status:** Resubmitted
- **Priority:** Critical
- **Reporter:** arck
- **Created:** 04-07-2023 00:27
- **Updated:** 02-05-2024 05:19

**Description (verbatim):**

> steps to reproduce:
> 1. Login to Tekflow page
> 2. Select new test and enter the test name and select required test bench
> 3. click on add sequence and select DDR technology and DDR5 DRAM TX application
> 4. click on source and settings and select all the sources DQS+,DQS-,DQ
> 5.Select all the scenarios
> 6.Click on run test
>
> Observation:
> 1. For DQS jitter scenario, it acquires all the 3 signals DQS+,DQS-.DQ which is not correct.
> 2. When run the test only with DQS jitter scenario it acquires only DQS+ and DQS- signal.
>
> Test Id: http://pc-bang-12860j3:4200/tekflow/test/results/f5c22c7c-351e-40e5-99a2-38c0080bde4a
> Tekflow page credentials: admin , Welcome123#


---

### `OUI-106` — Crash happens without choosing IP.

- **Type:** Defect
- **Status:** Resubmitted
- **Priority:** Critical
- **Reporter:** hoye
- **Created:** 19-09-2018 14:02
- **Updated:** 07-06-2019 11:16
- **Customer Impact:** 1-High

**Description (verbatim):**

> In Multi-stack, IPSelector window shows after launch SSU. Click "OK" button without selecting any IP address in the list. system crashes.
>
> Please refer to the screenshot captured.


---

### `GAR-6933` — [USB4V2-Tx] AE [Ning]feedback : Not able to use the TekFlow if install other then C drive

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Critical
- **Reporter:** shashirv
- **Created:** 28-11-2023 00:22
- **Updated:** 13-04-2024 00:32

**Description (verbatim):**

> Feedback from Ai Ning (AE).
> * My C drive has no sapce, I have choose D: drive.
> * however the TekFlow platform is allowed to install on D: drive.
>
> Not able to Use the TekFlow.


---

### `GAR-7691` — [DRAM TX] Extra text is getting added to Name of test in GUI

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Critical
- **Reporter:** sjhawar
- **Created:** 11-02-2024 22:16
- **Updated:** 26-03-2024 04:48
- **Customer Impact:** 1-High

**Description (verbatim):**

> [DRAM TX] Extra text is getting added to Name of test in GUI.
>
> Complete name of the test is name + deviceState tag. We are not defining deviceState tag anywhere and somehow its getting used which is not correct for DRAM TX.
>
> Attached the json result and test link
>
> [http://tek-12860j3:4200/tekflow/test/results/443467ae-edb4-405b-a366-24d64fe19c17]


---

### `GAR-7932` — During test execution, GUI hangs or non-responsive when we run a test for acquisition=50 with population_limit=100

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Critical
- **Reporter:** bhap
- **Created:** 19-03-2024 18:04
- **Updated:** 28-03-2024 03:39

**Description (verbatim):**

> During test execution,, GUI hangs?non-responsive when we run a test for acquisition=50 with population_limit=100.
>
> Steps to Reproduce:
> 1> Connect live signal. Create a valid test bench which links to live signal setup
> 2> Create a new test. Add "TX Base" =>"Result Accumulation" app
> 3> Open global settings. Set Acquition type=Live, AcquisitionCOunt=50. Click on apply.
> 4> Click on Run
> Observation: GUI hangs/not responsing till it completes the test execution. Got below error in GUI console.
> Note: When test was running, RAM available memory was 32GB.
>
> VM: https://tek-ddzdsx3:4200/login
> admin/Welcome@123
>
> !image-2024-03-20-06-33-32-891.png|thumbnail!


---

### `GAR-7205` — [Memory-TX-RX]Not all windows in the GUI scale for size of screen, so often the “run” button is super hard to get to or find.

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Critical
- **Reporter:** pbaik
- **Created:** 14-12-2023 20:03
- **Updated:** 05-02-2024 05:10

**Description (verbatim):**

> Not all windows in the GUI scale for size of screen, so often the “run” button is super hard to get to or find.
>
> Run button position changes based on resolution
> Test status page - if we add one sequence then the  Run button appears below the sequence and there's lot of blank space below the screen
> !image-2023-12-15-09-31-32-607.png|thumbnail!


---

### `GAR-7208` — [Memory-Tx-RX] It is really hard to see if the program is doing something based on the Tekflow GUI, you have to find log files and see if there is activity. It should be obvious when the system has hung.

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Critical
- **Reporter:** pbaik
- **Created:** 14-12-2023 20:35
- **Updated:** 02-01-2024 20:06

**Description (verbatim):**

> It is really hard to see if the program is doing something based on the Tekflow GUI, you have to find log files and see if there is activity.  It should be obvious when the system has hung.


---

### `GAR-6960` — [Garuda DP] UI Accumulation Feature issues: Acquisition related

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 28-11-2023 10:17
- **Updated:** 09-04-2024 21:32

**Description (verbatim):**

> Waveform upload is failing when more that 49 measurements are selected in a session.


---

### `GAR-7201` — [Memory-Tx-Rx]Enable to Ui to change the units of plots

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Critical
- **Reporter:** pbaik
- **Created:** 14-12-2023 19:30
- **Updated:** 02-01-2024 19:59

**Description (verbatim):**

> They want the ability to change units in plot, some of our plots are in UI, but they want to see ps.


---

### `GAR-5050` — In report, tDQ2DQ plots is not showing marker but able to see in Results UI

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Critical
- **Reporter:** arck
- **Created:** 04-05-2023 23:23
- **Updated:** 04-05-2023 23:56

**Description (verbatim):**

> In report, tDQ2DQ plots is not showing marker but able to see in Results UI. (Attached images and report)
>
> Test ID: [Tekflow|http://pc-bang-12860j3:4200/tekflow/test/results/b1f71c6f-38fa-4639-8804-7c9c5a815ae6]


---

### `GAR-5555` — [Garuda DP][PLAE Feedback-Gary] Default timeout of UI session should be longer and customizable

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 20-06-2023 21:06
- **Updated:** 26-03-2024 03:44

**Description (verbatim):**

> Test Environment:
> 1.1. Dell Precision 5550 Laptop
> 1.2. Intel(R) Core(TM) i9-10885H CPU @ 2.40GHz 2.40 GHz
> 1.3. 64.0 GB RAM
>
> SW Versions:
> 2.1. TekFlow-Platform-v0.15.3.beta
> 2.2. DisplayPort-v0.15.3.beta_6
>
> The default timeout for inactivity and auto-logout is VERY short, and should be a setting the user can control…including “no timeout”
>
>
>
>
>
> [STM Feedback 22/2/2024]Consider to disable auto logout as STM has a confined environment and there is no cloud computing. Hence Security threat is not significant.


---

### `ECAUIT-461` — Tekexpress doesn't function properly when scope horizontal settings are changed between runs

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Critical
- **Reporter:** satk
- **Created:** 23-05-2019 21:11
- **Updated:** 21-11-2019 03:21
- **Customer Impact:** 2-Medium

**Description (verbatim):**

> 1.Go to TekExpress 100G-TXE
>
> 2. Run all measurements in CAUI4 TP1a.
>
> 3. After the execution complete, change scope setting such as Horizontal scale, position to some other value.
>
> 4. Run again the app. This time, scope measurements results are not correct.
>
> 5. Compare the report with previous run. We can identify that AC common mode plot is wrongly captured this time. Also the results are correct.
>
>
>
> Hint: We have to do scope default before running any test.
>
> (Customer related email is attached)


---

### `GAR-3804` — [Pascal feedback] There can be a secondary socket in case the existing socket connection goes down

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Critical
- **Reporter:** mtatiche
- **Created:** 16-11-2022 22:27
- **Updated:** 06-09-2023 00:30
- **Customer Impact:** 2-Medium

**Description (verbatim):**

> One of the feedback points from Pascal while testing Tekflow PCIe:
> # Can there be a secondary socket in case the existing socket connection goes down.


---

### `DP-10528` — [Garuda DP][PLAE Feedback-Gary] Password Reset option is not available

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Critical
- **Reporter:** mkumar2
- **Created:** 19-09-2023 20:48
- **Updated:** 21-03-2024 23:53

**Description (verbatim):**

> As per Summary


---

### `GAR-5558` — [Garuda DP][PLAE Feedback-Gary] Password Reset option is not available

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 20-06-2023 21:11
- **Updated:** 13-03-2024 06:55

**Description (verbatim):**

> Test Environment:
> 1.1.	Dell Precision 5550 Laptop
> 1.2.	Intel(R) Core(TM) i9-10885H CPU @ 2.40GHz   2.40 GHz
> 1.3.	64.0 GB RAM
>
> SW Versions:
> 2.1.	TekFlow-Platform-v0.15.3.beta
> 2.2.	DisplayPort-v0.15.3.beta_6
>
> There is no way for a user to recover/reset a forgotten pw from the login screen.
>
> Currently there is no way to reset the UI login password. It is a major drawback of the software as it leaves the User with no other choice but to install the whole software from scratch. This needs to be handle ASAP.


---

### `GAR-6241` — [Garuda DP][STM Observations] Feature to convert Keysight wavefrom to Tek Waveform

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 06-09-2023 03:19
- **Updated:** 13-03-2024 06:09

**Description (verbatim):**

> TekFLow ability to convert .bin to .wfm file


---

### `TEDIBCI-7519` — [Obeya-P6][Qualcomm][Taiwan AE][DisplayPort-Tx][Beta-15] Connectivity using hostname (Without FQDN fails)

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 08-06-2023 02:08
- **Updated:** 14-03-2024 11:26

**Description (verbatim):**

> -


---

### `TEDIBCI-7659` — [Obeya-P6][Qualcomm][Beta-15] Issue in resolving test pc with Hostname(Without FQDN)

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Critical
- **Reporter:** amolleti
- **Created:** 02-07-2023 21:53
- **Updated:** 14-03-2024 11:26

**Description (verbatim):**

> -


---

### `TEDIBCI-8337` — [DisplayPort-Tx] Fresh TekFlow installation failed in a test laptop as access key Token cannot be retrieved

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 31-10-2023 08:19
- **Updated:** 02-04-2024 18:27

**Description (verbatim):**

> -


---

### `DP-10546` — [Garuda DP][PLAE Feedback-Jacky][Generic] Error Messages needs to be more meaningful and instructive

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Critical
- **Reporter:** mkumar2
- **Created:** 19-09-2023 21:04
- **Updated:** 24-04-2024 01:08

**Description (verbatim):**

> As per Summary


---

### `GAR-4875` — Not able to differentiate between the multi DQ results in GUI

- **Type:** Defect
- **Status:** Verified
- **Priority:** Critical
- **Reporter:** sjhawar
- **Created:** 10-04-2023 04:01
- **Updated:** 26-03-2024 05:19
- **Resolved:** 12-05-2023 00:50
- **Resolution:** Cannot Reproduce

**Description (verbatim):**

> Not able to differentiate between the multi DQ results in GUI.
>
> http://pc-bang-12860j3:4200/tekflow/test/results/6f8663b2-be89-4455-a431-d38f115f497e
>
> This id is ran with 8 DQ and we have 8 different results for each steps with same. We are not able to differentiate which results belongs to which DQ


---

### `GAR-4633` — App id is shown instead of application name across TekFLOW GUI

- **Type:** Defect
- **Status:** Verified
- **Priority:** Critical
- **Reporter:** u615102
- **Created:** 16-03-2023 02:27
- **Updated:** 14-09-2023 12:14
- **Resolved:** 28-03-2023 08:30
- **Resolution:** Fixed

**Description (verbatim):**

> App ID is shown in GUI across multiple pages. Here is details: Dashboard => http://172.19.211.237:4200/tekflow/dashboard =>Sequence widgets
> Test List page => http://172.19.211.237:4200/tekflow/test
> Test results page => http://172.19.211.237:4200/tekflow/test/results/a345d98e-7e20-4862-b7af-05b655c48c01
> Test Status page => http://172.19.211.237:4200/tekflow/test/status/0362bdc3-796c-452c-995f-f26e0f60945d =>Technology and Application
> Sequence Page => http://172.19.211.237:4200/tekflow/manage/sequences/list
> License Page => http://172.19.211.237:4200/tekflow/license
> Add Tests Page => http://172.19.211.237:4200/tekflow/test/details => Import Sequence
> In Report => http://172.19.211.237:4200/tekflow/reports/preview/ce5130ff-4fd8-433b-81bd-bbc5cef5284c/RxPCIEReport123 => View report page


---

### `GAR-8032` — [DDR5 Rx] Clarius UI crashes when bathtub plot is maximized

- **Type:** Defect
- **Status:** Verified
- **Priority:** Critical
- **Reporter:** rkosana
- **Created:** 02-04-2024 23:15
- **Updated:** 30-04-2024 03:27
- **Resolved:** 15-04-2024 02:37
- **Resolution:** Fixed
- **Customer Impact:** 1-High

**Description (verbatim):**

> [DDR5 Rx] Clarius UI crashes when bathtub plot is miximized.
>
>
>
> 1) open any of the DDR Rx tests in Beta 31.
>
> 2) Go to plots section.
>
> 3) Maximize any  bathtub plot, Ui will crash
>
> !bathtub plot crash.png!


---

### `GAR-4706` — Testbench - Modify instrument- Ui is not responding when user selects another category of same type

- **Type:** Defect
- **Status:** Verified
- **Priority:** Critical
- **Reporter:** pbaik
- **Created:** 23-03-2023 21:27
- **Updated:** 14-09-2023 12:14
- **Resolved:** 05-04-2023 21:26
- **Resolution:** Fixed

**Description (verbatim):**

> 1. tekflow/manage/testbenches
> 2. Add New Test bench
> 3. Add New Instrument with Type "Switch" and Category "Radio Frequency switch"
> 4. Save the testbench
> 5. Modify the saved testbench
> 6. edit the instrument
> 7. change the Category from "Radio Frequency Switch" to "Custom Switch"
> 8. observe : when clicked on close[ cancel, update], the ui is not responding until refresh


---

### `GAR-4586` — [PCIe] Results are shown always "fail" in the results panel.

- **Type:** Defect
- **Status:** Verified
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 14-03-2023 08:39
- **Updated:** 26-03-2024 05:19
- **Resolved:** 21-03-2023 02:41
- **Resolution:** Fixed

**Description (verbatim):**

> !image-2023-03-14-21-09-04-731.png|thumbnail!
>
> Results are shown always "fail" in the results panel. In report those are shown as pass.


---

### `GAR-7824` — [Clarius Generic] Waveforms are getting overwritten when the same applications are sequenced in multi chain.

- **Type:** Defect
- **Status:** Verified
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 03-03-2024 23:47
- **Updated:** 23-04-2024 21:42
- **Resolved:** 05-04-2024 00:19
- **Resolution:** Fixed
- **Customer Impact:** 1-High

**Description (verbatim):**

> # Chain the same application in a Clarius test.
> # acquisition of the waveform happens in parallel
> # The two application acquires the same waveform combination. And the second acquisition overwrites the first acquisition.
>
>
>
> This also blocks 3.4 measurement optimization as there is not identifier for two different applications in multi chain.
>
> Adding the identifier will allow to differentiate.


---

## Cross-references

- The Garuda subject scaffold is at [`corpus/sources/garuda/`](../../index.md).
- Companion synthesis spreadsheet `Garuda_VOS Synthesis.xlsx` lives in the same `uploads/artifacts/` folder; pending separate `/document-spreadsheet` run.
- Adjacent VOC material on TekFlow lives at [`corpus/sources/tek-flow/`](../../../tek-flow/index.md) and the broader TekExpress redesign context at [`corpus/sources/tek-express/walkthroughs/`](../../../tek-express/walkthroughs/_index.md).

## Confidence notes

- **Customer names and email-like fields are visible in source rows** — redaction policy for the cluster is to surface customer-application labels (e.g., `Client-App-DDR5Rx`, `IntelFolsom`) which are technical context, and to elide individual customer-name strings only where they appear as PII rather than aggregate references. Audit each row before sharing outside the team.
- **`Custom field (User Pain Index)`** is populated unevenly across rows — when present, it's a ranked priority signal; when blank, falls back to the JIRA `Priority` field.
- **Multi-line cells** in the source CSV are normalized to single-line text in field-summary inline (newlines → spaces). The **full Description** is preserved as a blockquote with newlines intact.
- **Comments / cross-issue links / attachments / sprint metadata** in the source CSV are NOT preserved in this chunk — they live in the source row. To retrieve them, query the gitignored CSV directly by issue key.

## Source

Source CSV: `corpus/sources/garuda/uploads/artifacts/UI-UX filtered trial.csv` (gitignored)
