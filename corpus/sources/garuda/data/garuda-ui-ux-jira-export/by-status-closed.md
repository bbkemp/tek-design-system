---
provenance: observed
class: data-export-cluster
export_id: garuda-ui-ux-jira-export
export_title: Garuda UI/UX JIRA export
export_source: JIRA project GAR (Garuda), filter "UI-UX filtered trial"
export_date: 2026-06-25
cluster_id: by-status-closed
cluster_value: "Closed"
cluster_column: Status
row_count: 578
related_screens: []
related_docs: []
applies_to: [garuda]
---

# Closed status issues — Garuda UI/UX

## Summary

All Status=Closed issues from the Garuda UI/UX JIRA export, regardless of priority. Historical signal for what got shipped, dropped, or re-routed. Descriptions are truncated more aggressively (~300 chars) than in the live clusters since this is bulk historical context.

## Column inventory

Per-issue fields captured: Issue key, Type, Status, Priority, Summary, Reporter, Created, Updated, Resolved, Resolution, Components, Labels, Customer Application, Customer Visibility, Business Value, User Pain Index, Customer Impact, Action Request, Acceptance Criteria, Engineering Notes, Use Cases, Description.

Many JIRA custom fields are populated unevenly across rows — coverage is reported per-issue inline. Long free-text fields are truncated inline at the boundaries noted in the cluster summary.

## Distribution by Priority

| Priority | Count |
|---|---:|
| Blocker | 42 |
| Critical | 83 |
| Major | 302 |
| Minor | 151 |
| **Total** | **578** |

## Rows (verbatim)

Rows are grouped by Priority. Within each section, ordering follows the source CSV.

### Priority: Blocker (42)

#### `GAR-6115` — [LPDDR4][GUI] When REF levels updated at scenario level, tabs doesn’t work as expected in GUI

- **Type:** Defect
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** u622852
- **Created:** 22-08-2023 05:03
- **Updated:** 12-12-2023 00:58
- **Resolved:** 16-11-2023 04:26
- **Resolution:** Fixed
- **Labels:** Beta26, Client-App-LPDDR4

**Description (verbatim):**

> # When I select Technology as LPDDR and application as LPDDR4_settings, 
>  # when i click on scenario settings for Clock Differential scenario, 
>  # I click on Ref Level Clock settings, changing the Ref Level Method to RELATIVE doesnt enable the High Level, Mid-Level , Low Level reference levels in pe… [truncated]


---

#### `GAR-1513` — Eye Diagram to show X-Y axis coordinates in GUI and Report

- **Type:** Story
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** sjhawar
- **Created:** 02-03-2022 22:20
- **Updated:** 13-09-2023 19:41
- **Resolved:** 19-08-2022 03:36
- **Resolution:** Done
- **Labels:** ClientApp-LPDDR4

**Description (verbatim):**

> Eye Diagram to show X-Y axis coordinates in GUI and Report.
> Similar to DPOJET, make a provision to reflect the X-Y axis coordinates on the Eye Diagram Plots.
> This is important for upcoming LPDDR4 and DDR5 and all future DDR generations.
> Attached a Eye Diagram from DPOJET where we can coordinates val… [truncated]


---

#### `GAR-4271` — [New UI] Unable to add license in the new UI of Beta13 PCIe/DP VM

- **Type:** Issue
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** mtatiche
- **Created:** 01-02-2023 02:33
- **Updated:** 14-09-2023 11:13
- **Resolved:** 10-02-2023 00:29
- **Resolution:** Other
- **Labels:** ClientApp-PCIe

**Description (verbatim):**

> Unable to add the test bench in the Beta13 PCIe VM


---

#### `GAR-1511` — Signal tests are failing on the UI.

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

#### `GAR-7778` — Test is getting struck at 1% on UI

- **Type:** Defect
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** u629875
- **Created:** 26-02-2024 00:04
- **Updated:** 26-03-2024 04:48
- **Resolved:** 25-03-2024 00:38
- **Resolution:** Cannot Reproduce
- **Labels:** TestcaseNotRequired

**Customer Impact (verbatim):**

> 1-High

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

#### `GAR-1891` — [Duplicate]Limit should be user editable in TekFlow through UI

- **Type:** Story
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** shashirv
- **Created:** 30-03-2022 22:54
- **Updated:** 14-09-2023 10:35
- **Resolved:** 17-08-2022 22:13
- **Resolution:** Duplicate
- **Labels:** ClientApp-CK

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> Limit should be user editable in TekFlow through UI.


---

#### `GAR-2746` — Multi lane results are not getting uploaded to result json and UI

- **Type:** Defect
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** sjhawar
- **Created:** 14-06-2022 23:56
- **Updated:** 26-03-2024 05:19
- **Resolved:** 27-06-2022 21:40
- **Resolution:** Fixed
- **Labels:** ClientApp-LPDDR4, TF_CAA1

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
> Actual: Only first lane results are updated in UI and result.js… [truncated]


---

#### `GAR-7724` — Eye Diagram for Converged Calibration for Stressed Eye is not coming in UI

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

#### `GAR-2416` — CLONE - Tekflow-Repeated results are appearing in the UI,if we run single Acquisition

- **Type:** Defect
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** avarghes
- **Created:** 20-05-2022 01:50
- **Updated:** 26-03-2024 05:19
- **Resolved:** 22-06-2023 23:11
- **Resolution:** Will Not Fix
- **Labels:** ClientApp-CK

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> How to reproduce
>  1)Select DC common mode Voltage from theC2C
>  2)Run the measurements in live mode  and Single Acquisition
>  3)Check the results from UI
>
> Observation: Multiple Acquisition results are appearing in the UI if we run single  Acquisition
>
>
> ++++++++++++++++++++++++++++++++++++++++++++
>
> Ope… [truncated]


---

#### `GAR-8022` — [Clarius Custom DP] Custom DP app cannot be run through UI.

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
>  # Go to Add Test
>  # Select Displaypot Technology and Custom DP app.
>  ## It is taking ~20 seconds time to load the app. Progress bar keeps running for 20 seconds.  !image-2024-04-01-17-52-18-275.png|width=561,height=142!
>  # Click on Global settings
>  ## It takes another ~10 se… [truncated]


---

#### `GAR-6974` — [Garuda DP][Garuda DP/PCIE] [Beta26 Early Adaption feedback] UI accumulation eye diagram plot comes as blank

- **Type:** Defect
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** tparua
- **Created:** 30-11-2023 17:16
- **Updated:** 02-01-2024 22:41
- **Resolved:** 01-12-2023 03:11
- **Resolution:** Fixed
- **Labels:** Beta27

**Description (verbatim):**

> After running the Eye-Diagram measurement with population accumulation enabled the generated plot is blank. Results shows 0 hits.
>
>  !image-2023-12-01-06-45-31-517.png|thumbnail!


---

#### `GAR-1908` — [Design]Handling Measurement Level Acquisition Settings in DP Pre Processor

- **Type:** Story
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** tparua
- **Created:** 31-03-2022 09:31
- **Updated:** 24-01-2024 04:20
- **Resolved:** 20-06-2022 21:11
- **Resolution:** Done
- **Labels:** ClientApp-DP, TestcaseNotRequired

**Description (verbatim):**

> DP Pre-Processor currently uses the Global settings value to create the acquisition combination list. But some of these acquisition settings are different for different measurement.
>
> Example: Different measurements have different record lengths waveform requirement. e.g: HBR2/HBR3 Eye Diagram uses 2… [truncated]


---

#### `GAR-5855` — [DisplayPort] Beta18 Preprocess change is needed to achieve DP-9145 (Fix for Qualcomm)

- **Type:** Issue
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** mtatiche
- **Created:** 20-07-2023 02:12
- **Updated:** 13-09-2023 19:39
- **Resolved:** 05-09-2023 23:01
- **Resolution:** Done
- **Labels:** ClientApp-DP

**Description (verbatim):**

> In the current beta18 the preprocess service needs some change to fix the DP-9145. 
>
> DP team needs to change the code in preprocess service of DisplayPort which is part of FW repo.


---

#### `TEKEXPFW-5899` — Sessions are deleted from old test setup instead of newly saved test setup

- **Type:** Defect
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** vbalan
- **Created:** 08-07-2021 04:27
- **Updated:** 14-09-2023 11:58
- **Resolved:** 08-07-2021 23:47
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> Steps:
> 1.	Launch AppEmulator
> 2.	Save few config sessions ex: session1, session2
> 3.	Options menu > Save Test Setup > “Setup1”
> 4.	Options menu > Save Test Setup As > “Setup2”
> 5.	So now Setup2 is the loaded setup in AppEmulator
> 6.	Open Run/Config Sessions & delete a config session ex: session1
> [Expecte… [truncated]


---

#### `GAR-2397` — DP 3.2 Pre Emphasis and 3.3 Pre-Emphasis measurements require multiple waveform input

- **Type:** Story
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** tparua
- **Created:** 19-05-2022 03:37
- **Updated:** 28-01-2024 23:11
- **Resolved:** 19-07-2022 22:12
- **Resolution:** Done
- **Labels:** ClientApp-DP, TF_CAA1

**Description (verbatim):**

> 3.2 Pre Emphasis Level and 3.3 Pre-Emphasis Level measurements inherently runs multiple sub combinations. This requires 2 input waveforms at the same time. The limit for each of this combinations are different at times as well. 
>
> See attached files for more details.
>
> If we consider them as separate… [truncated]


---

#### `GAR-4572` — [DP][Beta-14] Test is running and finished but can't see it on the test list panel

- **Type:** Issue
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** tparua
- **Created:** 13-03-2023 10:26
- **Updated:** 13-09-2023 19:40
- **Resolved:** 15-03-2023 10:59
- **Resolution:** Done
- **Labels:** ClientApp-DP

**Description (verbatim):**

> Followed the installation manual shared by Dev-Ops team and installed the core engine and the apps. 
> Able to run the tests. Results can be seen in Mongo DB but they are not shown in test/ results panel in UI.


---

#### `DP-2535` — Comp-Eye is selected for HBR3 and UHBR in UI

- **Type:** Defect
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** rmohant1
- **Created:** 10-10-2018 00:37
- **Updated:** 14-09-2023 12:16
- **Resolved:** 12-10-2018 14:24
- **Resolution:** Fixed
- **Labels:** UI

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

#### `TEKEXPFW-3043` — USB2 App resolution change on plot component loading

- **Type:** Defect
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** BBHANUCH
- **Created:** 29-01-2018 00:00
- **Updated:** 14-09-2023 11:58
- **Resolved:** 05-03-2018 00:42
- **Resolution:** Fixed
- **Components:** FW
- **Labels:** UI

**Customer Impact (verbatim):**

> 3-Low

**Description (verbatim):**

> On loading of the plotting component the resolution of the USB2 App changes and the text shrinks.


---

#### `BRR-1418` — 100BaseT1-Error popup occuring while doing calibration(Load,Short,Open)&Clicking Apply Button for Return Loss measurement

- **Type:** Defect
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** tramoju
- **Created:** 06-04-2018 06:35
- **Updated:** 14-09-2023 13:19
- **Resolved:** 12-04-2018 05:06
- **Resolution:** Cannot Reproduce
- **Labels:** BRR_1000BaseT-1, UI

**Description (verbatim):**

> 1)Select TM4 from Broadcom software 
>  2)Select 100BaseT1 suite and select Return Loss measurement from test selection
>  3)Go to calibration run load,short and open calibration
>  4)We can observe that defect
> I have tested with TF-GBE fixture with 3.2 DUT and TDP1500 Probe


---

#### `BRR-1293` — 1000BaseT1(Terminator&Riddick)-Return Loss Calibration Error As Reference Calibration files are not available at Specified location

- **Type:** Defect
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** tramoju
- **Created:** 01-03-2018 10:10
- **Updated:** 14-09-2023 12:49
- **Resolved:** 08-03-2018 18:48
- **Resolution:** Fixed
- **Labels:** BRR_1000BaseT-1, UI

**Description (verbatim):**

> Steps:-
>  1)Enable Automotive Ethernet application both on Riddick and Terminator platforms
>  2)Select  1000BaseT1 suite from suite dropdown box
>  3)Go to test selection panel and select "Return Loss"measurement
>  4)Go to configure tab and select Use Pre-recorded files
>  Observation:
>  1)But in Xdrive whe… [truncated]


---

#### `TEKEXPFW-2497` — Application crashes when Lane Setup button is clicked in Single-Ended mode

- **Type:** Defect
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** vbalan
- **Created:** 02-05-2017 04:12
- **Updated:** 14-09-2023 11:58
- **Resolved:** 11-07-2017 22:58
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Launch application
> Select Single-Ended probe type
> Now click Lane Setup button in DUT panel.
> Expectation: Lane Config OCW should popup
> Actual: Application crashes.


---

#### `RNBAST-460` — Application crashes when Lane Setup button is clicked in Single-Ended mode

- **Type:** Defect
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** vbalan
- **Created:** 02-05-2017 04:10
- **Updated:** 14-09-2023 12:31
- **Resolved:** 02-01-2018 00:52
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Launch application
> Select Single-Ended probe type
> Now click Lane Setup button in DUT panel.
> Expectation: Lane Config OCW should popup
> Actual: Application crashes.


---

#### `RPAMT-633` — Unit test failure blocks new build creation

- **Type:** Defect
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** vbalan
- **Created:** 17-04-2018 02:33
- **Updated:** 14-09-2023 12:30
- **Resolved:** 17-04-2018 02:36
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Unit test failure blocks new build creation


---

#### `BRR-1139` — 100BaseT1 Test Selection it is not showing measurements list except PSD measurement

- **Type:** Defect
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** tramoju
- **Created:** 15-01-2018 02:15
- **Updated:** 14-09-2023 12:49
- **Resolved:** 06-02-2018 22:32
- **Resolution:** Fixed
- **Labels:** Automation, BRR_1000BaseT-1, UI

**Description (verbatim):**

> 1)Launch Automotive Ethernet application
> 2)Go to suite dropdown select 100BaseT1 compliance suite
> 3)Go to test selection we can clearly observe the deect


---

#### `TEKEXPFW-522` — [Apply Limits] Manual Testing

- **Type:** Task
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** VKUMAR2
- **Created:** 18-02-2015 22:03
- **Updated:** 14-09-2023 07:26
- **Resolved:** 02-03-2015 22:01
- **Resolution:** Done
- **Labels:** UI


---

#### `TEKEXPFW-521` — [Apply Limits] Error handling

- **Type:** Task
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** VKUMAR2
- **Created:** 18-02-2015 21:57
- **Updated:** 14-09-2023 07:26
- **Resolved:** 02-03-2015 05:14
- **Resolution:** Done
- **Labels:** UI


---

#### `TEKEXPFW-520` — [Apply Limits] Logic to apply limits and send appropriate pass/fail information

- **Type:** Task
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** VKUMAR2
- **Created:** 18-02-2015 21:53
- **Updated:** 14-09-2023 07:26
- **Resolved:** 26-02-2015 05:22
- **Resolution:** Done
- **Labels:** UI


---

#### `TEKEXPFW-519` — [Apply Limits] Identify appropriate limit from the custom limits added by user

- **Type:** Task
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** VKUMAR2
- **Created:** 18-02-2015 21:52
- **Updated:** 14-09-2023 07:26
- **Resolved:** 26-02-2015 02:09
- **Resolution:** Done
- **Labels:** UI


---

#### `TEKEXPFW-516` — Multi-lane support

- **Type:** Story
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** VKUMAR2
- **Created:** 16-02-2015 14:02
- **Updated:** 14-09-2023 07:26
- **Resolved:** 13-03-2015 05:39
- **Resolution:** Done
- **Labels:** UI

**Acceptance Criteria (verbatim):**

> User: Client App Developer
> 1. There is default execution available to user wherein user does not need to do any specific implementation.
> 2. User is given an option to override default execution by Framework.
> 3. User is provided with interfaces to do Acquisition and Analysis for Pre Custom tests and Post Custom Tests (four interfaces in all).
> 4. User is able to use interfaces provided by Framework… [truncated]

**Description (verbatim):**

> There are three options at this point:
> 1. Run once: Pre Custom Tests will run once in the beginning of iterations over lanes, Post Custom Tests will once in the end of iterations.
> 2. App sequencer manages executing Custom Tests iterating thru lanes
> 3. Features is disabled for multi-lane applications… [truncated]


---

#### `TEKEXPFW-515` — Restrict Pre-recorded Mode to standard tests

- **Type:** Story
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** VKUMAR2
- **Created:** 16-02-2015 13:51
- **Updated:** 14-09-2023 07:26
- **Resolved:** 05-04-2015 23:15
- **Resolution:** Done
- **Labels:** UI

**Acceptance Criteria (verbatim):**

> User should be able to:
> - select and execute custom tests in "Live" mode as it happens today
> - see all the custom tests de-selected and greyed out in the test selection panel when "Pre-recorded" mode is selected from the DUT panel.
>
> User should not be able to: 
> - select the custom test in "Pre-recorded" mode.
> - execute any of the added custom tests in "Pre-recorded" mode.
> - see or configure custom… [truncated]

**Description (verbatim):**

> Allow only standard tests in pre-recorded mode. Gray out and deselect custom tests in pre-recorded mode.


---

#### `TEKEXPFW-514` — Remove delays

- **Type:** Story
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** VKUMAR2
- **Created:** 16-02-2015 13:50
- **Updated:** 14-09-2023 07:26
- **Resolved:** 24-03-2015 23:12
- **Resolution:** Done
- **Labels:** UI

**Acceptance Criteria (verbatim):**

> 1. There are no hard coded delays in the auto generated script file (Custom Script)
> 2. *OPC? or equivalent mechanism is used to handle long operations.

**Description (verbatim):**

> Hard coded delay has been used at multiple places to ensure proper sequencing. However, this is adding to overall execution time of Custom Tests. We need to remove such instances of delay and replace them with *OPC? or equivalent mechanism.


---

#### `TEKEXPFW-513` — Remove Analyze using DPOJET/Base Scope option

- **Type:** Story
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** VKUMAR2
- **Created:** 16-02-2015 13:49
- **Updated:** 14-09-2023 07:26
- **Resolved:** 23-03-2015 23:01
- **Resolution:** Done
- **Labels:** UI

**Acceptance Criteria (verbatim):**

> 1. Mixed analysis setup file or VISA commands file is handled seamlessly, without requirement of user specifying what type of setup file/VISA commands file it is (BaseScope/DPOJET).
> 2. The measurements are done and reported in the results/reports as per the setup file.
> 3. Limits specified by user thru CTM are applied to matching measurement from the setup file.

**Description (verbatim):**

> Remove Analyze using DPOJET/Base Scope option. A setup file can have base scope and DPOJET measurements. Check for presence of both and then accordingly perform the result retrieval, without having needed this option.


---

#### `TEKEXPFW-511` — Ability to use standard Limits Editor to edit the limits

- **Type:** Story
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** VKUMAR2
- **Created:** 16-02-2015 13:47
- **Updated:** 14-09-2023 07:26
- **Resolved:** 03-03-2015 03:13
- **Resolution:** Done
- **Labels:** UI

**Acceptance Criteria (verbatim):**

> 1. User is shown Custom Test limits (as entered thru CTM) on the standard Limits Editor.
> 1.1 This is available in both Compliance and User-defined Mode.
> 1.2 While switching from User-defined Mode to Compliance Mode, user sees limits entered thru CTM. These limits are applied for results. Limits modified thru Limits Editor will are lost.
> 2. In User-Defined mode, user is able to edit the limits from… [truncated]

**Description (verbatim):**

> Can the standard limits editor be used to edit the limits?


---

#### `TEKEXPFW-510` — Ability to apply limits

- **Type:** Story
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** VKUMAR2
- **Created:** 16-02-2015 13:46
- **Updated:** 14-09-2023 07:26
- **Resolved:** 03-03-2015 03:16
- **Resolution:** Done
- **Labels:** UI

**Acceptance Criteria (verbatim):**

> 1. The input limits supplied thru CTM are enforced while computing results.
> 2. Pass/Fail results are based on above computation.
> 3. Any margin from limits is shown in the results and report.
> 4. User is able to modify the limit computation via Custom Script.
> 5. User modified computation is used in applying limits.
> 6. User is able to query applied/computed results thru PI (both existing and new PI)

**Description (verbatim):**

> Provide the ability to apply limits.
> Provide the ability to override this in the python script in case further processing is needed to arrive at the limits.
>
> In order to apply limits, we are expecting the user to add limits with header matching the measurement name. 
> If the user adds the limit heade… [truncated]


---

#### `TEKEXPFW-509` — Test names in DPOJET and TekExpress reports should match

- **Type:** Story
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** VKUMAR2
- **Created:** 16-02-2015 13:41
- **Updated:** 14-09-2023 07:26
- **Resolved:** 26-03-2015 20:35
- **Resolution:** Done
- **Labels:** UI

**Acceptance Criteria (verbatim):**

> 1. User is able to see same measurement names on DPOJET UI and TekExpress UI for DPOJET based measurements.
> 2. The measurement names are matched with the names returned thru PI.
> 3. In case of a match not found with PI returned value, local look-up is used.
> 4. For scope based measurements, local look-up is used.
> 5. When there is a Custom Name available in DPOJET, it should be shown in TekExpress UI… [truncated]

**Description (verbatim):**

> Summary:
> The DPOJET Test names (Scope measurement test names) do not match to what is shown on the scope screen and result tab or the report from TekExpress. Make the names in both places match.
> Eg.: When we add "+Duty Cycle1" from the UI TekExpress shows "PDUTY1" in results and report.
>
> Details:
> Te… [truncated]


---

#### `TEKEXPFW-508` — Implement dirty state of CTM in test update and test import scenarios

- **Type:** Story
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** VKUMAR2
- **Created:** 16-02-2015 13:39
- **Updated:** 14-09-2023 07:26
- **Resolved:** 06-04-2015 07:23
- **Resolution:** Done
- **Labels:** UI

**Acceptance Criteria (verbatim):**

> User should be able to:
> - close CTM without any warning message if no change has been done or if all changes are updated as expected.
> - see warning message on close/clear action if any of the test editor fields are modified.
> - see warning message if a test setting is changed and user tries to move to another test without clicking update.
>
> User should not see the warning message if any change was d… [truncated]

**Description (verbatim):**

> 1. Form closing message for CTM appears every time close CTM is closed. Track changes and pop up this message only when there are unsaved changes. Change the message from “Custom Test Manager is closing. Any unsaved changes will be lost. Do you want to continue ?” to “Unsaved changes will be lost. D… [truncated]


---

#### `TEKEXPFW-507` — Make CTM easily discoverable

- **Type:** Story
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** VKUMAR2
- **Created:** 16-02-2015 13:38
- **Updated:** 14-09-2023 07:26
- **Resolved:** 23-03-2015 22:52
- **Resolution:** Done
- **Labels:** UI

**Acceptance Criteria (verbatim):**

> 1. User is able to launch CTM from Test Selection Panel using a Push Button.
> 2. The CTM behavior is exactly same as Option menu.
> 3. This button is greyed out for the Device/Suite selection that does not enabled Custom Tests.

**Description (verbatim):**

> It is hard to find the custom test manager under the options Menu. Add a button in the Test Selection Panel besides Deselect All to resolve that.


---

#### `GAR-6224` — Not Able to Run More than 3 scenarios in LPDDR4 App

- **Type:** Issue
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** u615732
- **Created:** 05-09-2023 04:33
- **Updated:** 12-12-2023 00:58
- **Resolved:** 25-10-2023 21:12
- **Resolution:** Done
- **Labels:** Beta26, ClientApp-CPHY, ClientApp-DP, ClientApp-DPHY, Client-App-Dphy, Client-App-LPDDR4

**Description (verbatim):**

> Not Able to Run More than 3 scenarios in LPDDR4 App
>  test id: [http://pc-bang-12860j3:4200/tekflow/test/status/adb398a0-367b-4dbf-a88c-7ae6f3adbb79],
>  Attached Logs.
>
> We had a debug call.
>  We were able to root cause the issue.
>  It is because of the limit files that was updated recently (attached lim… [truncated]


---

#### `GAR-4944` — Analysis Service is Throwing Error while running measurements

- **Type:** Defect
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** sjhawar
- **Created:** 24-04-2023 21:32
- **Updated:** 15-10-2023 17:50
- **Resolved:** 25-04-2023 07:44
- **Resolution:** Fixed
- **Labels:** ClientApp-DP, Client-App-LPDDR4

**Description (verbatim):**

> Run the test for LPDDR4 application and randomly test are failed and exceptions are coming.
>
> Reference id; http://pc-bang-12860j3:4200/tekflow/test/results/b054c2ed-338e-4ea1-abbd-c18b9eb8c20c
>
> Attached the snapshots of Error coming.


---

#### `MCT-66` — Switching mode from LIVE to PRE-RECORDED wfms and back will reset the expected HS bit rate to 2.5G. If the user enters 1.3G, the sw should remember this value and leave it set.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** ashoka
- **Created:** 17-11-2014 20:44
- **Updated:** 14-09-2023 13:56
- **Resolved:** 12-02-2015 03:34
- **Resolution:** Not a Defect
- **Labels:** UI

**Description (verbatim):**

> Switching mode from LIVE to PRE-RECORDED wfms and back will reset the expected HS bit rate to 2.5G.  If the user enters 1.3G, the sw should remember this value and leave it set.


---

#### `TEKEXPFW-310` — [Develop UIS]Recommend UI for re-ordering Pre/Post custom tests in their respective tables

- **Type:** Task
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** SBHARATH
- **Created:** 14-11-2014 01:01
- **Updated:** 13-09-2023 18:24
- **Resolved:** 17-11-2014 01:23
- **Resolution:** Done
- **Components:** User Interface
- **Labels:** UI

**Description (verbatim):**

> Recommend UI for re-ordering Pre Custom and Post custom tests in their respective tables.
> Any new test created or if tests are imported, they get added to the end of the list of Pre/Post custom table. 
> User should have the provision to change the order in which these tests will get executed. 
> A usab… [truncated]


---

#### `GAR-7825` — [Clarius DP14] Unable to add sequence for DP_HBR application using SDK script

- **Type:** Defect
- **Status:** Closed
- **Priority:** Blocker
- **Reporter:** mtatiche
- **Created:** 04-03-2024 00:25
- **Updated:** 29-04-2024 05:04
- **Resolved:** 31-03-2024 22:30
- **Resolution:** Fixed
- **Labels:** Clarius-RP1-MustFix, ClientApp-DP, ClientApp-Memory-Tx

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> From SDK Script, 
>
> When we are trying to add a sequence with DP_HBR app, its adding the HBR2 application. 
>
>  
>
> This issue is blocking the execution of HBR SDK scripts.( around 110 test cases)


---

### Priority: Critical (83)

#### `GAR-5559` — [Ux][Garuda DP][PLAE Feedback-Gary] TestBench- Add Instrument is not intutive

- **Type:** Issue
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 20-06-2023 21:13
- **Updated:** 28-11-2023 19:45
- **Resolved:** 21-11-2023 03:37
- **Resolution:** Done
- **Labels:** ClientApp-DP, ClientApp-DP-PI3-Issue, ClientApp-DP-Stabilization, DP-PI3-CHECK, PLAE-Feedback, TF_Configuration

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
> - When setting up a Test Bench for first time, after filling out top level info the UI shows… [truncated]


---

#### `GAR-2670` — Performance of ATOMS GUI is slow

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
> 1) API to fetch the test list is returning the data… [truncated]


---

#### `GAR-7223` — Copied logs and downloaded logs, date time shows incorrect time, its not matching with GUI

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

#### `GAR-4684` — Non-licnesed apps showing in GUI in Manage->Apps page and also in Test Run page. And able to run tests for non-licensed apps as well.

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

#### `GAR-6289` — UI Freeze: When we start test UI freezes

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** jdomadiy
- **Created:** 11-09-2023 04:58
- **Updated:** 26-03-2024 04:48
- **Resolved:** 17-01-2024 20:54
- **Resolution:** Fixed
- **Labels:** Beta28, Client-App-USB4V2, RAA

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> UI Freeze: When we start test UI freezes. It needs a refresh to show UI again.


---

#### `GAR-5856` — [DisplayPort] UI refresh issue

- **Type:** Issue
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** mtatiche
- **Created:** 20-07-2023 02:17
- **Updated:** 14-09-2023 10:35
- **Resolved:** 12-09-2023 00:01
- **Resolution:** Duplicate
- **Labels:** ClientApp-DP, ClientApp-DP-PI3-Issue, ClientApp-DP-Stabilization

**Description (verbatim):**

> # List of tests is not loading automatically (issue seen intermittently) 
>  # status of test is not updating automatically as and when the Run test is clicked. Needs to do a manual refresh of the UI in that test status page. 
>  # License page is not loading properly sometimes.
>  # When clicked on delet… [truncated]


---

#### `GAR-7609` — Clarius version in the UI(about panel) is blank

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** sups
- **Created:** 04-02-2024 21:34
- **Updated:** 06-02-2024 00:00
- **Resolved:** 06-02-2024 00:00
- **Resolution:** Duplicate
- **Labels:** Client-App-USB4V2, RAA

**Description (verbatim):**

> Build used: Clarius 1.0.0 Master 94
>
> Clarius version in the UI(about panel) is blank


---

#### `GAR-6264` — [Garuda DP][Beta-22] Waveform download is not working from UI

- **Type:** Issue
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 08-09-2023 05:49
- **Updated:** 10-10-2023 21:30
- **Resolved:** 09-10-2023 02:39
- **Resolution:** Done
- **Labels:** ClientApp-DP, ClientApp-DP-PI3-Issue

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

#### `GAR-5342` — [Garuda DP] [PLAE Feedback-Nitin] UI hang issue

- **Type:** Issue
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 25-05-2023 05:36
- **Updated:** 14-09-2023 10:35
- **Resolved:** 12-09-2023 00:14
- **Resolution:** Duplicate
- **Labels:** ClientApp-DP, ClientApp-DP-PI3-Issue, ClientApp-DP-Stabilization, PLAE-Feedback, TF_General

**Description (verbatim):**

> At times when the internet is slow or the VM is slow, the UI becomes unresponsive. The results page does not load, and it does not show any load error.
>
> PLAE comment:
>
>  !image-2023-05-25-18-06-27-541.png|thumbnail!


---

#### `GAR-1343` — Multiple tests are getting deleted very slowly from UI.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** u612584
- **Created:** 21-01-2022 01:11
- **Updated:** 26-03-2024 01:46
- **Resolved:** 07-09-2022 02:01
- **Resolution:** Not a Defect
- **Labels:** Framework-defects

**Description (verbatim):**

> when multiple tests are deleted from UI, it is getting deleted very slowly.


---

#### `GAR-5929` — Unable to start test using API when we specify test bench name in request. Ideally, we should be able to execut test either by using id or name of test bench. Was working fine on beta8/beta19. In View results GUI, test bench shows as "Deleted"

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
>     "errors": [
>         {
>             "errorCode": "B0002",
>             "errorDescription": "Test Bench is not available",
>             "errorL… [truncated]


---

#### `GAR-8089` — Not able to see the view event ui in the view results for Multi waveform

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

#### `GAR-5770` — Sometime only clearing cache enables to login to UI after TF fresh installation

- **Type:** Issue
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** etharite
- **Created:** 06-07-2023 09:21
- **Updated:** 18-03-2024 07:12
- **Resolved:** 05-11-2023 06:31
- **Resolution:** Won't Do
- **Labels:** Beta27, ClientApp-DP, ClientApp-DP-PI3-Issue, ClientApp-DP-Stabilization


---

#### `GAR-2675` — As a user I want to create, view and update a hierarchical instrument (with extensions) through UI

- **Type:** Story
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** sbhushan
- **Created:** 09-06-2022 03:58
- **Updated:** 14-09-2023 08:03
- **Resolved:** 20-06-2022 03:58
- **Resolution:** Done
- **Labels:** TF_CAA1

**Acceptance Criteria (verbatim):**

> 1) As a user I want to create  hierarchical instrument (with extensions) through UI
> 2) As a user I want to view hierarchical instrument (with extensions) through UI
> 3) As a user I want to update a hierarchical instrument (with extensions) through UI
> 4) As a user I want to delete a hierarchical instrument (with extensions) through UI

**Description (verbatim):**

> 1) User should be able to create a hierarchical instrument (with extensions) through UI
>
> *Input*
>
> 1) Login to ATOMS UI.
> 2) Navigate to Testbench.
> 3) Click on Add new testbench.
> 4) Click on add new instrument icon fill all the details.
> 5) Click on add new extension and fill all the necessary details… [truncated]


---

#### `GAR-5422` — [DP] Unable to launch the TekFlow web page at times, needs a UI service restart [Needs input]

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** mtatiche
- **Created:** 02-06-2023 00:12
- **Updated:** 07-03-2024 21:45
- **Resolved:** 21-02-2024 22:47
- **Resolution:** Cannot Reproduce
- **Labels:** Clarius-Generic, ClientApp-DP, ClientApp-DP-Stabilization, Qualcomm-TF-DP-Issue

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> At times, unable to launch the TekFlow webpage after a random events. 
>
> To bring back the login page, one has to restart the UI new service 
>
> or Turn OFF the VM and turn it ON from the hyper-V manager. 
>
> Observed this in couple of Test PCs while runing DP21 tests. 
>
> *One of the PC configurations:*… [truncated]


---

#### `GAR-5590` — Tekflow UI is stuck and rotating spinner is visible at status, When test is started with invalid testbench or without running 1.0 IS

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

#### `GAR-7070` — [LPDDR4] For all the selected DQ's/CA's results should be available for cumulative results in UI as well as in CSV report when test is ran with multi DQ's/CA's..

- **Type:** Improvement
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** u622852
- **Created:** 06-12-2023 21:26
- **Updated:** 01-04-2024 08:08
- **Resolved:** 27-03-2024 00:36
- **Resolution:** Fixed
- **Labels:** Beta31, ClientApp-Memory-Tx

**Description (verbatim):**

> Steps to reproduce
>
> Login to Tekflow page
> Add a new test
> Select technology ad TX LPDDR4 and application LPDDR4.
> Select only Write burst differential scenario
> Under sources, select appropriate channels for clock, DQS and DQ0.
> Add signal for DQ1, DQ2, DQ3 and select appropriate channel and click on ap… [truncated]


---

#### `GAR-1907` — DP Application not compatible with State Graph mechanism?

- **Type:** Requirement
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 31-03-2022 09:22
- **Updated:** 13-09-2023 19:41
- **Resolved:** 12-05-2022 05:25
- **Resolution:** Done
- **Labels:** ClientApp-DP

**Description (verbatim):**

> Currently acquisitions in  tekflow is done based on the state graph. In PCIe it fit well as PCIe has a known pattern of acquisition states. 
>
> But in DP there can be multiple acquisition combinations based on voltage swing, pre-emphasis, and SSC mode selected by the user in the UI. All these combinat… [truncated]


---

#### `GAR-6247` — [Garuda DP] Empty plots are shown at scenario level in the results panel

- **Type:** Issue
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 06-09-2023 22:19
- **Updated:** 14-09-2023 10:35
- **Resolved:** 12-09-2023 00:07
- **Resolution:** Duplicate
- **Labels:** ClientApp-DP, ClientApp-DP-PI3-Issue

**Description (verbatim):**

> When the user is at the application level or scenario level in the results panel, all plots are shown empty.
>
>  !image-2023-09-07-10-48-32-445.png|thumbnail! 
>
> To see the plots user need to click on the particular step.
>
>  !image-2023-09-07-10-48-03-340.png|thumbnail!


---

#### `GAR-5656` — Result table heading need to freeze

- **Type:** Issue
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** skumar5
- **Created:** 26-06-2023 00:22
- **Updated:** 13-09-2023 19:39
- **Resolved:** 18-07-2023 03:57
- **Resolution:** Done
- **Labels:** ClientApp-DDRRx, PLAE-Feedback, TF_General

**Description (verbatim):**

> PFA snip, need to freeze the heading of the table.


---

#### `GAR-5939` — [SDK] Save and import test sequence is not supported in SDK

- **Type:** Issue
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 01-08-2023 03:40
- **Updated:** 19-10-2023 00:36
- **Resolved:** 28-08-2023 23:14
- **Resolution:** Done
- **Labels:** ClientApp-DP, Qualcomm-TF-DP-Feature

**Acceptance Criteria (verbatim):**

> User should be able to
>  * Create and Save Sequence
>  * Import Sequence
>  * Get all Sequence
>  * Modify Sequence
>  * Delete Sequence

**Description (verbatim):**

> Qualcomm has requested SDK support for Save and import functionality. We need to support it.
>
> *Acceptance Criteria:-*
>
> User should be able to
>  * Create and Save Sequence
>  * Import Sequence
>  * Get all Sequence
>  * Modify Sequence
>  * Delete Sequence


---

#### `GAR-5942` — [DP] SSC plots are not coming in the report

- **Type:** Issue
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 01-08-2023 22:39
- **Updated:** 19-10-2023 00:37
- **Resolved:** 11-09-2023 06:27
- **Resolution:** Done
- **Labels:** ClientApp-DP

**Description (verbatim):**

> SSC plots are for DP is coming in the results panel but not shown in PDF report.


---

#### `GAR-4062` — [DP 2.1 Preset Optimization requirement] Support to use output of an analysis step from one scenario as input of a pre-processor step for another scenario.

- **Type:** Issue
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 03-01-2023 03:20
- **Updated:** 13-09-2023 19:41
- **Resolved:** 01-02-2023 20:53
- **Resolution:** Done
- **Labels:** ClientApp-DP

**Description (verbatim):**

> In DP 2.1 Application we have Signal test presets (similar to PCIe).
> DP 2.1 Application requires a preset optimization feature. (Finding the optimal preset). Below are steps we follow for preset optimization:
> # Acquire waveforms all selected signal presets.
> # Run DDJ measurement on all acquired pres… [truncated]


---

#### `TEKEXPFW-6334` — [PCIe] In Multi Acquire Type case, acquire status is updating for the first acquire type only

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** vbalan
- **Created:** 12-08-2021 03:48
- **Updated:** 14-09-2023 11:58
- **Resolved:** 17-08-2021 21:58
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> How to reproduce:
> -------------------------------------------------------------------------------------------
> 1)Launch PCIE app
> 2)Select Spec->BaseSpec,Device->Tx Test Board,Version->Gen6
> 3)Select Any two presets
>
> {Q0,Q1} or {Q1,Q2}
> 4)Select any two lanes {Ex:Lane0,Lane1}
> 5)Select Uncorrleated PWJ D… [truncated]


---

#### `TEKEXPFW-4513` — Adding third-party license info in About dialog box

- **Type:** Task
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** vbalan
- **Created:** 30-09-2020 03:11
- **Updated:** 14-09-2023 08:51
- **Resolved:** 01-10-2020 00:39
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> [Refer the mail for more info]
> In our About box for TekExpress, at framework level…
>
> Just show the below label with a link.
>
> "This product contains the following software under third-party licenses" 
>
> Make "third-party licenses" as a hyperlink. Clicking that will open the OCW with thrid party licens… [truncated]


---

#### `CS-182` — 80C21 and phase reference module are not detected by the application

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** vbalan
- **Created:** 17-07-2018 02:23
- **Updated:** 14-09-2023 12:19
- **Resolved:** 31-07-2018 21:47
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> 1. SR4 and TDEC: When app is launched, the app is not detecting phase reference and available modules(80C21).
>
> For SR4 and TDEC, just to launch and check. It has 80C21.
>
> 2. For other modules, phase ref is not detected in python even though UI detects it and shows phase ref check box (which will be v… [truncated]


---

#### `DP-2596` — RJ test & its corresponding parameters should not be present in the UI for HBR3 datarate

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** mtatiche
- **Created:** 26-11-2018 00:55
- **Updated:** 14-09-2023 12:16
- **Resolved:** 03-01-2019 03:51
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 2-Medium

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
> -----In the configuration panel, HBR3 parameters f… [truncated]


---

#### `BRR-1120` — 1000BaseT1 - Signal validation acquire step by step window has no image for TX_Clock Frequency and Jitter measurements

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** tramoju
- **Created:** 07-01-2018 07:59
- **Updated:** 14-09-2023 12:49
- **Resolved:** 17-01-2018 23:05
- **Resolution:** Fixed
- **Labels:** Automation, BRR_1000BaseT-1, UI

**Description (verbatim):**

> 1)Launch Automotive Ethernet Application
>  2)Select acquire live waveforms and 1000BaseT1 compliance suite
>  3)Select Testmode from Marvell DUT  Software
>  4)Go to Test Selection tab select anyof the measurement
>  5)Go to acquisition tab select acquire step by step
>  6)Run the measurement we can observe… [truncated]


---

#### `BRR-1501` — Solution crashes when user change source from Probe1 drop down list

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** salapart
- **Created:** 01-05-2018 23:30
- **Updated:** 14-09-2023 12:49
- **Resolved:** 04-05-2018 00:25
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

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
> I connected my live DUT signal to CH2 ( by default C… [truncated]


---

#### `BRR-1385` — 100BaseT1(Riddick&Terminator)-Measured Values of Calibration tab are not updating for TX_Distortion measurement

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** tramoju
- **Created:** 03-04-2018 06:20
- **Updated:** 14-09-2023 12:49
- **Resolved:** 05-04-2018 00:46
- **Resolution:** Fixed
- **Labels:** BRR_1000BaseT-1, UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> 1)Go to distortion measurement
> 2)Click configure->Calibration
> 3)According to connection diagram run disturber compensation,test fixture compensation and test fixture compensation  without disturber
> 4)After running observe each step Measured Values of Calibration tab are not updating for TX_Distortio… [truncated]


---

#### `BRR-1498` — Tx Distortion Calibration Apply throws Error (both 1000T1 and 100T1)

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** shashirv
- **Created:** 30-04-2018 01:20
- **Updated:** 14-09-2023 12:49
- **Resolved:** 02-05-2018 19:24
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Setup :
>
> Scope : DPO7254C C132078
>  # Launch TekExpress Automotive Ethernet
>  # Select 1000Base-T1
>  # Select only Transmitter Distortion test
>  # Go to Configure > Calibration
>  # Click Default 
>  # Click Apply
>  # Exit application
>  # Relaunch Application
>  # Select 1000Base-T1
>  # Select only Transmitter D… [truncated]


---

#### `BRR-1497` — 100base-T1- Transmitter Distortion Calibration UI shows RL Calibration controls

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** shashirv
- **Created:** 29-04-2018 23:01
- **Updated:** 14-09-2023 12:49
- **Resolved:** 02-05-2018 19:19
- **Resolution:** Fixed
- **Labels:** UI

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
> 4.) Select 1000base-T1 test suite test selection tab and select Tx distortion measurement and click on Co… [truncated]


---

#### `BRR-1494` — Default setup is not refreshing UI ( or not working as expected) for Tx distortion meas

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** salapart
- **Created:** 29-04-2018 21:31
- **Updated:** 14-09-2023 12:49
- **Resolved:** 02-05-2018 19:13
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

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
> Select 1000base-t1 ( by default 100… [truncated]


---

#### `BRR-1428` — Rename the probe pin as per the new fixture

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** mahithas
- **Created:** 09-04-2018 02:33
- **Updated:** 14-09-2023 12:49
- **Resolved:** 20-04-2018 04:36
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> Update the pin number as per the new fixture for 100 and 1000 Base T1 RL in Calibration tab
>
> Probe @ P23(TC1)
>  Probe @ P24(TC1)
>
> !image-2018-04-26-23-57-10-400.png!


---

#### `BRR-1444` — Channel selection is not updated when we switch from 100 to 1000 base T1

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** mahithas
- **Created:** 11-04-2018 06:53
- **Updated:** 14-09-2023 12:49
- **Resolved:** 12-04-2018 01:33
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

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
> [ShashiRV]- The abov… [truncated]


---

#### `BRR-1340` — For ALL 1000base-T1 measurements, test setup Schematic feature broken

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** salapart
- **Created:** 21-03-2018 00:04
- **Updated:** 14-09-2023 12:49
- **Resolved:** 12-04-2018 06:42
- **Resolution:** Fixed
- **Labels:** Documentation, UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> Select 1000base-T1 test suite
> Go to test Selection tab and select Tx Clk Frequency measurement (For example) and click on 'Schematic' push button to see test setup diagram for Tx Clk measurement, user will see a popup message (Capture.PNG) which says contact tektronix Administrator and also says sch… [truncated]


---

#### `BRR-1400` — Exception occurs at RL, Tx-Dis calibration tab

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** salapart
- **Created:** 04-04-2018 17:09
- **Updated:** 14-09-2023 12:49
- **Resolved:** 24-04-2018 02:30
- **Resolution:** Fixed
- **Labels:** BRR_1000BaseT-1, UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> *Scope Details:*
>  MODEL:MSO58
>  SERIAL NUMBER:Q100086
>  FIRMWARE VERSION:1.6.3
>  IP-134.64.244.1
>  APP VERSION-1.2.0.105
>  ------------------------------------------------------
>
> For Return loss and Distortion measurements we observed attached error popup on *MSO 5 series*
>
> Select either RL or Tx Distort… [truncated]


---

#### `BRR-1335` — Calibration is not updating when we change the Suite 1000Base-T1 to  100Base-T1.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** akumar7
- **Created:** 19-03-2018 00:02
- **Updated:** 14-09-2023 12:49
- **Resolved:** 20-04-2018 04:33
- **Resolution:** Fixed
- **Labels:** BRR_1000BaseT-1, UI

**Description (verbatim):**

> - Select 100 Base from Suite
> - Go to calibration Panel
> - Go back to DUT panel and select 1000Base-T1 from Suite selection
> - Again come back to Calibration panel, it is showing 100Base-T1 data even though I have selected 1000Base-T1


---

#### `BRR-1310` — Even though different channel selected while running Return Loss Calibration, but it is throwing error Popup saying Select different chanel.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** akumar7
- **Created:** 08-03-2018 00:41
- **Updated:** 14-09-2023 12:49
- **Resolved:** 29-03-2018 05:13
- **Resolution:** Fixed
- **Labels:** BRR_1000BaseT-1, UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> - Select Return Loss Measurement in Live.
> - Select Live Calibration.
> - In Chanel Selection for Probe : Probe P1 @ TC1, Probe P2 @ TC2 select different channel than CH1 & CH2.
> - Press Either Load, Open Or Short Calibration.
> - As you press Popup saying select different Channel in Terminator Scope.
> - A… [truncated]


---

#### `RQSFPT-103` — Fix TEKEXPFW-2919: Multi lane issue

- **Type:** Task
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** vbalan
- **Created:** 03-11-2017 03:09
- **Updated:** 14-09-2023 07:57
- **Resolved:** 12-11-2017 23:04
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Fix TEKEXPFW-2919: Multi lane issue


---

#### `RQSFPT-102` — Debug TEKEXPFW-2919 Multi lane issue

- **Type:** Task
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** vbalan
- **Created:** 02-11-2017 22:30
- **Updated:** 14-09-2023 07:57
- **Resolved:** 14-11-2017 00:41
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Debug TEKEXPFW-2919 Multi lane issue


---

#### `TEKEXPFW-2576` — Not able to stop the execution while auto close is enabled

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** vbalan
- **Created:** 28-05-2017 23:49
- **Updated:** 14-09-2023 11:58
- **Resolved:** 29-05-2017 03:22
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> 1. Launch the application and go to 'Preferences' panel.
> 2. Make enable the 'Auto close' and set the time as 1sec for popup.
> 3. Click on the Run button.
> 4. Click on the Stop button.[In popup : Do not select the option using mouse]
>
> Actual Result: Application is getting stuck. 
>
> Expected Result: User… [truncated]


---

#### `RXGKRT-92` — De-Embedding option in UI has to be provided as per 100G-TXE

- **Type:** Task
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** satk
- **Created:** 27-11-2017 22:52
- **Updated:** 14-09-2023 07:35
- **Resolved:** 05-12-2017 20:27
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Currently the UI has 3 radio button options for De-Embedding. This has to be replaced with similar De-Embedding option(checkbox) as per 100G-TXE.


---

#### `TEKEXPFW-2919` — Multi Lane Setup issues

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** vbalan
- **Created:** 09-10-2017 03:33
- **Updated:** 14-09-2023 11:58
- **Resolved:** 13-03-2018 23:46
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> 1. Link Width value should have been set in Kernel before setting lane source values on OK button click. Now it is vice versa. Because of this, while validating source change notifications in app validation, we get previous value of Link Width instead of the latest one selected in combo box.
> 2. In c… [truncated]


---

#### `MIPIMPHYTX-1276` — MPHY-Tx - UI controls are missing in Acq tab and lane configuration.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** skumbha
- **Created:** 22-09-2017 02:20
- **Updated:** 05-01-2024 02:39
- **Resolved:** 05-11-2017 23:18
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

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
> 2. Tekexpress error is coming after clicking filter wi… [truncated]


---

#### `CPHYX-1419` — Sometime observed Progress bar is not showing during compile.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** skumar5
- **Created:** 28-09-2016 23:17
- **Updated:** 14-09-2023 12:27
- **Resolved:** 18-10-2016 23:09
- **Resolution:** Fixed
- **Labels:** UI

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
> Observe : Compilation is happeni… [truncated]


---

#### `RPAMT-222` — Application crashes when trying to select the channel while the application is Running

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** girr
- **Created:** 20-04-2017 01:48
- **Updated:** 14-09-2023 12:30
- **Resolved:** 28-04-2017 01:40
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Steps to Reproduce:
> 1)Launch the application
> 2)Select any test and run
> 3)Try selecting the channel from the drop down available in acquisition Tab
> 4)Application stops responding when selecting the channel
>
> Actual Result:Application Crashes
> Expected Result:Channel selection from drop down should not… [truncated]


---

#### `RPAMT-151` — Source selection panel is not visible in acquisition panel

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** vbalan
- **Created:** 13-04-2017 01:22
- **Updated:** 14-09-2023 12:30
- **Resolved:** 13-04-2017 03:29
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Source selection panel is not visible in acquisition panel after upgrading to latest FW 4.2.5.7


---

#### `ECAUIT-186` — In Application Acquisitions source selected as Ch1 and Ch2 but module is connected to Ch5 and ch6

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** pjoshi
- **Created:** 12-12-2016 20:24
- **Updated:** 14-09-2023 12:42
- **Resolved:** 16-12-2016 00:50
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> 80S100G-TXE application running tests by selecting Source Ch5 and Ch6 but in actual UI it is showing as Ch1 and Ch2.
> Please refer attached screen shot


---

#### `RCAUIT-456` — Not able to change parameters in Reports panel

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** vbalan
- **Created:** 28-07-2016 00:09
- **Updated:** 14-09-2023 12:04
- **Resolved:** 28-07-2016 01:04
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Not able to change parameters in Reports panel.


---

#### `TEKEXPFW-1533` — Deskew option should not have two vertical scale options in UI for Tabasco scopes

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** satk
- **Created:** 12-04-2016 22:45
- **Updated:** 14-09-2023 11:59
- **Resolved:** 20-06-2017 23:46
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Currently, Deskew window provides 2 options for Level sensitive deskew setting. One is for less than 100mV and another is for more than 100mV vertical scale.
> In case of Tabasco scopes, the maximum vertical scope range is limited to 300mV. So generally there is no chance vertical scale can go beyond… [truncated]


---

#### `BRR-458` — Exception when clicking on Configuration Button

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** jdomadiy
- **Created:** 04-02-2016 19:46
- **Updated:** 14-09-2023 13:52
- **Resolved:** 04-02-2016 22:05
- **Resolution:** Not a Defect
- **Labels:** ui

**Description (verbatim):**

> Open BRR App
> * Deselect all meas
> * Select only Tx_Distortion
> * Click the Configuration button present in Test Selection tab
> *  Click on Calibration 
> * Click on Test Selection tab. uncheck  Tx_Distortion and Select PSD
> * Click on  Configuration button present in Test Selection tab
> * Click on Test Sel… [truncated]


---

#### `HDMI-854` — HDMXpress: Help and Technical support options are disabled in the UI

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** satk
- **Created:** 30-04-2015 02:26
- **Updated:** 14-09-2023 12:38
- **Resolved:** 04-05-2015 01:42
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Under help menu, help and Technical support options are disabled.
>
> When user clicks, on Help, OLH should open and in that Introduction section should be pointed.
> When user clicks on Techincal support option, OLH has to open and Support information section has to be pointed in the OLH.


---

#### `HDMI-846` — HDMXpress: Add to list is adding invalid vic code if used after Recall default setup

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** satk
- **Created:** 22-04-2015 00:20
- **Updated:** 14-09-2023 12:38
- **Resolved:** 22-04-2015 04:11
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Add to list is not working as expected once we do recall default setup.
> How to produce?
> 1. Perform recall default setup.
> 2. Click on add to list button.
> Instead of adding VIC 96 into the configuration list, it is adding VIC 1 data.


---

#### `TEKEXPFW-512` — Modify label of Iteration option

- **Type:** Story
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** VKUMAR2
- **Created:** 16-02-2015 13:48
- **Updated:** 14-09-2023 07:26
- **Resolved:** 14-04-2015 01:11
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> 1. Preferences panel: Modify text of iteration setting from “Acquire/Analyze each test x times” to “Acquire/Analyze each test x times (not applicable to Custom Tests)”
> 2. CTM: Modify text of iteration setting from “Iterations x” to “Execute this test x times”.


---

#### `TEKEXPFW-506` — Improve app launch experience (edit boxes should not appear before app UI)

- **Type:** Story
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** VKUMAR2
- **Created:** 16-02-2015 13:33
- **Updated:** 14-09-2023 07:26
- **Resolved:** 13-04-2015 02:18
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Resolve app taking some time to launch and some UI controls appearing before the complete app


---

#### `GAR-6284` — [Garuda DP][PLAE Feedback-Nitin] Clicking on the AS service or Uploader service control stops the execution

- **Type:** Issue
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 11-09-2023 20:56
- **Updated:** 15-02-2024 00:25
- **Resolved:** 02-11-2023 03:34
- **Resolution:** Done
- **Labels:** Beta26, Beta28, ClientApp-DP, ClientApp-DP-PI3-Issue, ClientApp-DP-Stabilization, ClientApp-PCIe, ClientApp-PCIe-PI3-Issue, ClientApp-PCIe-Stabilization, Client-App-USB4V2, RAA

**Description (verbatim):**

> [Build: Beta 1.0.19]
>
> AS or Uploader one of the window when clicked will stop processing waveforms until Enter is pressed:  This can accidently happen anytime and questions from world wide will come on why is it done this way.
>
> Console application for running the services are not recommended.


---

#### `GAR-6273` — [Garuda DP] CSV report download name should be test name

- **Type:** Story
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** mtatiche
- **Created:** 11-09-2023 05:28
- **Updated:** 14-02-2024 01:26
- **Resolved:** 25-01-2024 03:39
- **Resolution:** Done
- **Labels:** Clarius-Generic, Clarius-RP1-MustFix, ClientApp-DP

**Description (verbatim):**

> Using the download CSV report from the UI, the csv zip folder is downloaded with a different name which is not matching the test execution id. 
>
> When multiple reports are downloaded, its difficult to map which report is for what test. 
>
> Refer to the screenshot


---

#### `DPOJET-646` — [Kauai_R1]: UI: Height@BER measurement UI is incorrect

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** amohamme
- **Created:** 23-07-2014 12:31
- **Updated:** 14-09-2023 12:16
- **Resolved:** 28-07-2014 06:22
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Steps:
> ********
> 1> Launch DPOJET.
> 2> Add Height@BER measurement.
> 3> Go to Config-> Bit Config and see that Bit Config UI is still old. We had decide to change the UI as same as TN@BER measurement.


---

#### `DPOJET-643` — [Kauai_R1]: UI: "BER Eye Contour" Plot not getting removed when moved from "Jitter+Noise" to "Jitter Only"

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** amohamme
- **Created:** 22-07-2014 15:05
- **Updated:** 14-09-2023 12:16
- **Resolved:** 23-07-2014 02:36
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Steps:
> *******
> 1> Launch DPOJET.
> 2> Load the "RT-EyeTutorial.wfm" in REF1.
> 3> Add TJ@BER measurement on REF1.
> 4> Add "BER Eye Contour" plot.
> 5> Do Single and obtain results and plots.
> 6> Now change the Analysis method to "Jitter Only" from "Jitter+Noise" and see that BER Eye Contour plot still shown… [truncated]


---

#### `DPOJET-545` — [Kauai-R1]: Clock Recovery configuration setting changes are not retaining for different types of measurements

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** bhap
- **Created:** 24-06-2014 07:15
- **Updated:** 14-09-2023 12:16
- **Resolved:** 09-04-2015 09:04
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> 1> Add TJ@BER meas and TN@BER meas
> 2> Select TJ@BER meas. Click on Clock Recovery config tab.
> 3> Do following configuation under CDR config tab for meas TJ@BER:
>      CDR method= PLL-Standard BW. 
>      PLL- Model = TypeII
> 4> Select TN@BER measurement CDR config tab
> 5> Change CDR method to PLL-Standar… [truncated]


---

#### `DP-9144` — [Garuda DP] All the measurements in DP is currently running on same Record length.

- **Type:** Issue
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 14-03-2023 07:58
- **Updated:** 27-02-2024 19:45
- **Resolved:** 04-06-2023 22:49
- **Resolution:** Done
- **Labels:** ClientApp-DP

**Description (verbatim):**

> As per spec, different measurement should run on different different RL.
> e.g. : 
> Eye Measurements: 11M
> Jitter and SSC measurements: 40M
>
> In current DP app there is one RL setting that is applicable for all measurements.


---

#### `DPOJET-634` — [Kauai_R1]: NPN measurement is not getting removed when "Spectral Only " is selected

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** amohamme
- **Created:** 17-07-2014 05:00
- **Updated:** 14-09-2023 12:16
- **Resolved:** 18-07-2014 01:33
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Steps:
> ********
> 1> Launch DPOJET.
> 2> Enable "Spectral + BUJ" from Preferences Setup->Jitter Decomp tab
> 3> Add NPN and NPJ measurement.
> 4> Go to Preferences Setup->Jitter Decomp tab and select "Spectral Only".
>
> See that NPJ measurement gets removed whereas NPN measurement remains as it is which is in… [truncated]


---

#### `DPOJET-632` — [Kauai_R1]: Noise radio button enabled for "Jitter Only" analysis method

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** amohamme
- **Created:** 17-07-2014 04:37
- **Updated:** 14-09-2023 12:16
- **Resolved:** 22-07-2014 04:15
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Steps:
> ********
> 1> Launch DPOJET.
> 2> Go to Jitter/Noise and see that both the radio buttons are visible.
> 3> Go to Preferences setup->Jitter Decomp->Analysis method and change it to "Jitter Only" and click OK.
> 4> Go to Preferences setup->Jitter Decomp->Analysis method and change it to "Jitter+Noise"… [truncated]


---

#### `DPOJET-631` — [Kauai_R1]: Jitter and Noise radio buttons disaapear

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** amohamme
- **Created:** 17-07-2014 04:09
- **Updated:** 14-09-2023 12:16
- **Resolved:** 18-07-2014 02:26
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Steps:
> ********
> 1> Launch DPOJET
> 2> Go to Jitter/Noise tab and see that both jitter and noise radio buttons are visible
> 3> Now go to Preferences Setup->Jitter Decomp->Analysis method and change it to "Jitter Only" and click Cancel.
> See that both jitter and radio buttons disappear which is incorrect… [truncated]


---

#### `DPOJET-628` — [Kauai_R1]: When Analysis method is changed from "Jitter+Noise" to "Jitter Only", Noise bathtub plot is not getting removed

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** amohamme
- **Created:** 17-07-2014 01:39
- **Updated:** 14-09-2023 12:16
- **Resolved:** 18-07-2014 05:14
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Steps:
> ********
> 1> Launch DPOJET.
> 2> Load the "RT-EyeTutorial.wfm"  in REF1.
> 3> Add "Width@BER" and "Height@BER" measurements.
> 4> Add "Noise Bathtub" and "BER Eye Contour" plots on Height@BER measurement.
> 5> Run the measurements and obtain results and plots.
> 6> Now, change the Analysis method to "Ji… [truncated]


---

#### `DPOJET-622` — [Kauai_R1]: UI: RJ(V), RJ(H), PJ(V) and PJ(H) measurements are not getting added from jitter tree

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** amohamme
- **Created:** 16-07-2014 02:22
- **Updated:** 14-09-2023 12:16
- **Resolved:** 16-07-2014 05:17
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Steps:
> ********
> 1> Launch DPOJET.
> 2> Go to Jitter/Noise tab.
> 3> Select "Jitter" radio button.
> 4> Click on 'i' button to get jitter tree.
> 5> Click on RJ(V), RJ(H), PJ(V) and PJ(H) buttons and see that these measurements do not get added which is incorrect.
>
> The same is happening in Noise tree as well… [truncated]


---

#### `DPOJET-642` — [Kauai_R1]: PJ(V), PJ(H), RJ(V) and RJ(H) measurements are not getting removed when moved to "Jitter Only" from "Jitter+Noise"

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** amohamme
- **Created:** 21-07-2014 15:23
- **Updated:** 14-09-2023 12:16
- **Resolved:** 22-07-2014 04:12
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Steps:
> ********
> 1> Launch DPOJET
> 2> Add PJ, PJ(V), PJ(H), RJ, RJ(V) and RJ(H) measurements.
> 3> Go to Preferences Setup->Analysis Method and set it to "Jitter Only".
> 4> PJ(V), PJ(H), RJ(V) and RJ(H) measurements are still shown in the UI which is incorrect. These measurements should not be shown for… [truncated]


---

#### `DPOJET-1004` — DPOJET Setup files backward compatibility to be maintained when moving from option 76 to 136

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** SMAHADEV
- **Created:** 03-12-2014 22:49
- **Updated:** 14-09-2023 12:43
- **Resolved:** 11-12-2014 23:33
- **Resolution:** Fixed
- **Labels:** UI

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
> 8> Recall… [truncated]


---

#### `DPOJET-562` — [Kauai_R1]: UI: Noise measurements are visible when jitter radio button is selected

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** amohamme
- **Created:** 28-06-2014 09:20
- **Updated:** 14-09-2023 12:16
- **Resolved:** 30-06-2014 06:27
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> 1> Launch DPOJET
> 2> Enable DJAN option key.
> 3> Go to Jitter/Noise tab and click on "i" button to obtain Noise tree. Now select "Spectral + BUJ" radio button. close the tree.
> 4. Now click ion "Jitter" radio button and see that noise measurements are visible which is not expected. The expected behavio… [truncated]


---

#### `GAR-4585` — [PCIe/DP] Add Test Bench is throwing error

- **Type:** Issue
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 14-03-2023 08:32
- **Updated:** 26-03-2024 01:33
- **Resolved:** 17-03-2023 13:48
- **Resolution:** Done
- **Labels:** ClientApp-DP, ClientApp-PCIe

**Description (verbatim):**

> !image-2023-03-14-21-01-22-895.png|thumbnail! 
>
> Adding probe and other instrument in the Test Bench is throwing error. New test bench cannot be added using the new UI.


---

#### `GAR-4249` — [TekSDK Request from Qualcomm] Unable to select specific measurements/values for some of the global settings in the DP1.4 apps

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** mtatiche
- **Created:** 30-01-2023 23:40
- **Updated:** 25-03-2024 19:56
- **Resolved:** 27-02-2023 02:12
- **Resolution:** Not a Defect
- **Labels:** ClientApp-DP

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> # Install the latest version of teksdk. 
>  # Deploy the beta13 TF FW and beta13 DP apps.
>  # Use the below sample script to select specific values of Voltage swing or pre-emphasis or to select only a subset of measurements from the available list of measurements. 
>  # Observe  that the set_setting func… [truncated]


---

#### `DP-11220` — [Pascal's Feedback] Add a textfield to input an LP filter for the user in CustomDP VTX-DIFF-SLEEP measurement

- **Type:** Improvement
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** u616480
- **Created:** 15-01-2024 19:54
- **Updated:** 12-03-2024 02:02
- **Resolved:** 24-01-2024 06:36
- **Resolution:** Fixed
- **Labels:** PLAE-Feedback

**Customer Impact (verbatim):**

> 2-Medium

**Description (verbatim):**

> Add a textfield in the GUI for a filter input instead of scope LP filter for analysis.


---

#### `GAR-6443` — [Garuda DP] TekFLow Analysis service fails to launch if PC language is not set to En-US

- **Type:** Task
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 05-10-2023 00:39
- **Updated:** 31-03-2024 18:12
- **Resolved:** 26-02-2024 02:45
- **Resolution:** Done
- **Labels:** Beta31, Clarius-Generic, Clarius-RP1-MustFix, ClientApp-DP, ClientApp-DP-Stabilization, Stabilization, STM

**Description (verbatim):**

> Build Version: 1.0.0.Beta.22
>
> 1. Install TekFlow Beta 1.0.0.Beta22. Installation completed successfully. No error in log message.
> 2. Install DisplayPort application Package. Installation completes successfully.
> 3. Launch AS. It throws the below exception and gets closed.
>
>  !image-2023-10-05-13-07-17… [truncated]


---

#### `GAR-5943` — [DP] Jitter[bathtub] plots are not available in TekFlow/Clarius

- **Type:** Story
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 01-08-2023 22:53
- **Updated:** 31-03-2024 18:12
- **Resolved:** 18-03-2024 22:31
- **Resolution:** Done
- **Labels:** Beta31, Clarius-RP1-MustFix, ClientApp-DP, ClientApp-DP-CustomerCommit, Qualcomm

**Description (verbatim):**

> Qulacomm needs bathtub and histogram plots for jitter measurements.


---

#### `GAR-6434` — [Garuda DP] Report is always in submitted state after n number of reports are generated successfully and unable to generate the final report

- **Type:** Issue
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** mtatiche
- **Created:** 02-10-2023 21:40
- **Updated:** 31-03-2024 18:12
- **Resolved:** 12-03-2024 02:25
- **Resolution:** Done
- **Labels:** Beta31, Clarius-Generic, Clarius-RP1-MustFix, ClientApp-DP, ClientApp-DP-CustomerCommit, ClientApp-Memory-Tx, Customer_Issue, Qualcomm

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

#### `DDRTFL-2377` — Hide Initialization and Acquisition steps from all Scenarios

- **Type:** Improvement
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** sjhawar
- **Created:** 07-02-2024 21:04
- **Updated:** 27-02-2024 01:36
- **Resolved:** 20-02-2024 20:38
- **Resolution:** Fixed
- **Labels:** UX-Feedback

**Description (verbatim):**

> Hide Initialization and Acquisition steps from all Scenarios.
>
> Attached snap for reference


---

#### `GAR-6243` — [Garuda DP][Qualcomm Feedback- Beta5] Multi iteration test run gets aborted due to big intermediate JSON document size

- **Type:** Issue
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 06-09-2023 06:26
- **Updated:** 10-04-2024 03:05
- **Resolved:** 12-09-2023 00:03
- **Resolution:** Duplicate
- **Labels:** ClientApp-DP, ClientApp-DP-PI3-Issue, ClientApp-DP-Stabilization

**Description (verbatim):**

> When running DP1.4 HBR2 application for 5 iterations there is an exception saying the json size is greater than 16MB which cannot be accepted by the mongodb but this runs fine when we reduce the iteration count to 3. Why the intermediate json size depend on the iteration count?


---

#### `GAR-6445` — [Garuda DP] Additional property is not resolved in the filter condition

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** mtatiche
- **Created:** 05-10-2023 02:18
- **Updated:** 16-04-2024 18:10
- **Resolved:** 04-04-2024 23:53
- **Resolution:** Fixed
- **Labels:** Clarius-RP1-MustFix, ClientApp-DP, DP-PI3-CHECK

**Description (verbatim):**

> For intrapair measurement, the additional property changes are not reflected in the filter condition. Refer to the attached screenshot. 
>
> It works fine with API, but not in UI. 
>
> ----------------------------------------------------------------------------------------------
>
>  "additionalProperties.po… [truncated]


---

#### `GAR-3324` — Single analysis step for multiple waveforms of different combinations is not working

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** mtatiche
- **Created:** 18-08-2022 05:41
- **Updated:** 27-04-2024 02:08
- **Resolved:** 12-09-2022 22:46
- **Resolution:** Duplicate
- **Labels:** ClientApp-DP

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> When  analysis step and acquisition step are in same scenario:
>
>  
>
> Single analysis step for multiple waveforms of different combinations which use to work earlier is not working now. Currently acquisition is happening for all combinations but analysis is happening only for the first waveform combina… [truncated]


---

#### `GAR-4063` — [DP 2.1 Preset Optimization requirement] When entry condition for preprocess and acqusition steps are failed those steps are marked with aborted status which needs to be changed.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 03-01-2023 03:33
- **Updated:** 01-05-2024 04:59
- **Resolved:** 12-02-2023 20:46
- **Resolution:** Fixed
- **Labels:** ClientApp-DP

**Description (verbatim):**

> In DP 2.1 Application we have Signal test presets (similar to PCIe).
> DP 2.1 Application requires a preset optimization feature. (Finding the optimal preset). This is an optional step but the output of this step is used as an entry condition of another step in another scenario.
> When we deselect the o… [truncated]


---

#### `TEDIBCI-7468` — [Obeya-P6][DisplayPort-Tx] Restarting the PC changes the VM ip address but the netsh command is not picking up the updated ip

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** mtatiche
- **Created:** 30-05-2023 03:51
- **Updated:** 19-04-2024 03:38
- **Resolved:** 13-03-2024 21:55
- **Resolution:** Cannot Reproduce
- **Labels:** CAA1, Clarius_RP1, Clarius-Customer, ClientApp-DP, Installer, PI-3, TekFlow

**Customer Impact (verbatim):**

> 1-High

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
> Unable to open the TekFlow webpage after the PC restart.… [truncated]


---

#### `GAR-6581` — [Garuda DP] Interdependent settings cannot be set through SDK

- **Type:** Defect
- **Status:** Closed
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 26-10-2023 06:13
- **Updated:** 15-04-2024 22:07
- **Resolved:** 08-04-2024 01:47
- **Resolution:** Fixed
- **Labels:** Clarius-RP1-MustFix, ClientApp-DP, DP-PI3-CHECK

**Description (verbatim):**

> Example:
> When we set the "Levels" setting to "Custom", other settings like "Rising Edge Low", Rising Edge Mid" etc. gets editable and user can enter custom values to it.
>  !image-2023-10-26-18-25-12-547.png|thumbnail! 
>
> This is handled through mapping filters
>
>  !image-2023-10-26-18-27-43-919.png|thum… [truncated]


---

### Priority: Major (302)

#### `GAR-5416` — [TekFlow RAA UI/UX Issue] Unable to unselect Waveform inclusion in report

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 31-05-2023 21:45
- **Updated:** 28-03-2024 04:13
- **Resolved:** 28-03-2024 04:13
- **Resolution:** Not a Defect
- **Labels:** Clarius-Generic, Clarius-RP1-MustFix, ClientApp-DP, ClientApp-DP-PI3-Issue, ClientApp-DP-Stabilization

**Description (verbatim):**

> The checkboxes in the Generate Report Popup are disabled. Currently you can not unselect inclusion of plot, waveform etc in the report. This cases longer time for report generation.
>
>  
>
> !image-2023-06-01-10-14-30-018.png!


---

#### `GAR-6936` — [MIPI CPHY DPHY][UX] Run Button Should be visible in same window as test selection

- **Type:** Improvement
- **Status:** Closed
- **Priority:** Major
- **Reporter:** kmishra
- **Created:** 28-11-2023 03:44
- **Updated:** 07-03-2024 21:25
- **Resolved:** 01-03-2024 09:30
- **Resolution:** Fixed
- **Labels:** ClientApp-CPHY, ClientApp-DPHY, Client-App-Dphy

**Description (verbatim):**

> [MIPI CPHY DPHY] Run Button Should be visible in same window as test selection. May be somewhere in top right. Right now user has to scroll and then click on bottom .


---

#### `GAR-3359` — GUI automation framework creation and show a demo of the same for existing TekFlow GUI

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** bhap
- **Created:** 01-09-2022 22:16
- **Updated:** 14-09-2023 08:03
- **Resolved:** 13-09-2022 04:48
- **Resolution:** Done

**Description (verbatim):**

> GUI automation framework creation and show a demo of the same for existing TekFlow GUI.
> > Discuss and finalize GUI automation framework for Existing framework. 
> > Give demo of GUI automation framework for one system level test


---

#### `GAR-3728` — Add test bench GUI issues

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** bhap
- **Created:** 07-11-2022 17:08
- **Updated:** 19-03-2024 07:17
- **Resolved:** 16-11-2022 21:32
- **Resolution:** Fixed

**Description (verbatim):**

> Add test bench GUI issues
> 1> Login to 172.19.211.237:4200/login 
> 2> Click on 'Manage' menu. Click on 'Test Benches' tab. Click on 'Add New Test Bench' button.
> Observations: 
> 1> Vertical space b/w 'Testbench Details' title and 'Name' label is not as per figma
> 2> Under 'Instruments', There is no text.… [truncated]


---

#### `GAR-5921` — Color of the plot in GUI and in Report are not matching.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** u612584
- **Created:** 28-07-2023 01:19
- **Updated:** 19-03-2024 07:03
- **Resolved:** 07-09-2023 04:23
- **Resolution:** Not a Defect

**Description (verbatim):**

> steps to reproduce 
>
> pre-requisite:
>  1. Login to VM with proper credentials
>    vm ip: [http://tek-7c4p5m2:4200/tekflow]
>  2. APPs and testbench should be deployed on the same vm.
>  3. AS and IS should be configured properly.
>
> Steps :
>  1. Login to VM > click on tests> add test.
>  2. Enter test name > se… [truncated]


---

#### `GAR-4789` — Incorrect version number display in GUI about page.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** bhap
- **Created:** 29-03-2023 12:03
- **Updated:** 27-04-2024 03:06
- **Resolved:** 07-04-2023 01:41
- **Resolution:** Fixed

**Description (verbatim):**

> 1> It should display TekFlow core engine build. Presently it showing NewGUI Service build version which also not correct.
> 2> Actual deployed version is different than what we displayed on GUI About page for new-GUI-service. When i get core engine versions what are deployed on VM using MoboXterm app… [truncated]


---

#### `GAR-3211` — Atoms GUI throws pagenation error when i login.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** bhap
- **Created:** 31-07-2022 17:57
- **Updated:** 27-04-2024 02:10
- **Resolved:** 09-08-2022 22:31
- **Resolution:** Fixed

**Description (verbatim):**

> Step:
>
> 1> Open ATOM GUI using browser
>
> 2> Open Inspect and select console
>
> 3> Enter valid UN and PWD to login
>
> Observation:
>
> 1> Getting pagenation error in console output
>
> 2> It requires page refresh to get test results in home/dashboard page
>
> Attached screenshot of the error.


---

#### `GAR-7390` — There is no consistency of GUI when there is not test data present across multiple pages.

- **Type:** Issue
- **Status:** Closed
- **Priority:** Major
- **Reporter:** bhap
- **Created:** 15-01-2024 22:19
- **Updated:** 26-03-2024 04:48
- **Resolved:** 30-01-2024 08:21
- **Resolution:** Done

**Description (verbatim):**

> Find attached document.


---

#### `GAR-6180` — Only few logs shows in GUI even though no filters selected

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** bhap
- **Created:** 30-08-2023 18:14
- **Updated:** 19-03-2024 07:24
- **Resolved:** 12-09-2023 01:30
- **Resolution:** Fixed

**Description (verbatim):**

> Only few logs shows in GUI even though no filters selected.
>
> Setup Details:
>
> VM : [http://tek-f9ynvp2:4200/login]
>
> admin/Welcome@123
>
>  
>
> Steps to reproduce:
>
> 1> Login to Tekflow VM [http://tek-f9ynvp2:4200/login]
>
> 2> Select 'Logs' menu
>
> Observation: Its shows only few records even though no filters… [truncated]


---

#### `GAR-4359` — Update GUI script to incooprate Beta14 changes and fix any script issues

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** bhap
- **Created:** 14-02-2023 22:06
- **Updated:** 13-09-2023 19:40
- **Resolved:** 05-03-2023 20:24
- **Resolution:** Done

**Description (verbatim):**

> Update GUI script to incooprate Beta14 changes and fix any script issues


---

#### `GAR-3639` — Unable to generate report(through GUI, SDK, API) on Buildv1.0.beta 10 develop 316

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** bhap
- **Created:** 14-10-2022 11:46
- **Updated:** 19-03-2024 07:03
- **Resolved:** 20-10-2022 23:39
- **Resolution:** Cannot Reproduce

**Description (verbatim):**

> SDK Obersvations:
> api.reports.generate_report(test_id,template_id,report_path) this method is not working.
> After executing this method, status shows as generating for sometime(more than 10min) later it exit the execution with exception.
>
> test_id = "c642e4e8-ca31-4952-8200-09b887e0c61b"
> template_id =… [truncated]


---

#### `GAR-1495` — UI overlap for source selection

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** arck
- **Created:** 24-02-2022 07:16
- **Updated:** 14-09-2023 12:15
- **Resolved:** 13-03-2022 22:04
- **Resolution:** Fixed
- **Labels:** ClientApp-LPDDR4

**Description (verbatim):**

> Steps to reproduce:
>  # Login to ATOMS web pages
>  # Select Tests –> Select New Test
>  # Drag LPDDR4 application to the selected applications
>  # Click on Edit Details in the LPDDR4 application
>  # Click on the Perform Clock Differential Tests settings
>  # Click on Action button (3 dots)
>  # Click on Edit… [truncated]


---

#### `GAR-7628` — Clarius version is not visible in UI

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** u612584
- **Created:** 06-02-2024 03:11
- **Updated:** 14-02-2024 20:17
- **Resolved:** 06-02-2024 23:04
- **Resolution:** Fixed
- **Labels:** RAA

**Description (verbatim):**

> Pre-requisites:
> 1> Application should be installed and license of the same is deployed
> 2> IS should be installed and running scope
> 3> AS should be installed and running
> 4> Test bench created and should be connected to scope. Test bench with all supported instrumented added.
> Steps:
> 1> Log in to Tekfl… [truncated]


---

#### `GAR-3849` — All global configuration settings whose control type as drop down list is changed to edit box controls in New test pageg up in GUI even though we have recorded acquistion type option available in App JSON

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** bhap
- **Created:** 21-11-2022 00:24
- **Updated:** 26-03-2024 04:48
- **Resolved:** 23-11-2022 21:22
- **Resolution:** Fixed

**Description (verbatim):**

> All global configuration settings whose control type as drop down list is changed to edit box controls in New test pageg up in GUI even though we have recorded acquistion type option available in App JSON. Example: Recorded acquisition type option is not coming up in GUI even though we have recorded… [truncated]


---

#### `GAR-1407` — Show Margin column in the Results panel of UI for each measurement.

- **Type:** Issue
- **Status:** Closed
- **Priority:** Major
- **Reporter:** arck
- **Created:** 08-02-2022 19:58
- **Updated:** 13-09-2023 19:41
- **Resolved:** 20-05-2022 04:43
- **Resolution:** Done
- **Labels:** ClientApp-LPDDR4

**Description (verbatim):**

> Show Margin column in the Results panel of UI for each measurement.


---

#### `GAR-1536` — UI service not getting updated after restarting docker container.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** sbhushan
- **Created:** 07-03-2022 20:51
- **Updated:** 14-09-2023 13:17
- **Resolved:** 17-05-2022 21:44
- **Resolution:** Cannot Reproduce

**Description (verbatim):**

> * UI service not getting updated after restarting ui service docker container, if we make changes in environment settings of docker compose.
> * Browser cache has to be deleted all the time to reflect the new UI changes.


---

#### `GAR-5679` — Test bench of API takes Technology but the UI takes the Application

- **Type:** Issue
- **Status:** Closed
- **Priority:** Major
- **Reporter:** pbaik
- **Created:** 27-06-2023 03:52
- **Updated:** 28-03-2024 04:12
- **Resolved:** 28-03-2024 04:12
- **Resolution:** Other

**Description (verbatim):**

> Creating Test bench with API takes Technology but the UI takes the Application


---

#### `GAR-7634` — [USB4V2-Tx] Hiding the Result details to be display on UI for specific Step

- **Type:** Story
- **Status:** Closed
- **Priority:** Major
- **Reporter:** jdomadiy
- **Created:** 07-02-2024 03:49
- **Updated:** 02-04-2024 03:57
- **Resolved:** 01-04-2024 21:31
- **Resolution:** Done
- **Labels:** Client-App-USB4V2

**Acceptance Criteria (verbatim):**

> Hide empty result section of a test when test results for that entity is not present.
>
> *Application Level:*
>
>  if no result present for step *do not* display empty result section for that step
>
>  if none of steps of a scenario has result step *do not* display empty result section for that scenario
>
> *Scenario Level:*
>
>  if no result present for step do not display empty result section for that step… [truncated]

**Description (verbatim):**

> As a part of code re-structuring, their is need of making code re-structuring as generic.
>
>  In case of USB
>  * we have Group of Measurements, which is been execute by sigtest all with same acquisition and in one run.
>  * So, we have one Step, where it calls "Analysis.Core" (Common Analysis Pacakge) Ma… [truncated]


---

#### `GAR-3294` — [Implementation][UI] As a user I want to clone a previous test and run

- **Type:** Story
- **Status:** Closed
- **Priority:** Major
- **Reporter:** saravind
- **Created:** 17-08-2022 22:23
- **Updated:** 14-09-2023 08:03
- **Resolved:** 22-09-2022 20:58
- **Resolution:** Done

**Description (verbatim):**

> As a user I want to clone a previous test and run 
>  * allow user to change test bench
>  * allow user to change acquisition settings
>  * allow user to change measurement settings
>  * previous test can be in-progress or completed
>
> User should be able to use the this feature both through UI and Python Tek… [truncated]


---

#### `GAR-3867` — Review and Fix any issues ith QG2 UI and API test execution

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** bhap
- **Created:** 22-11-2022 08:37
- **Updated:** 14-09-2023 08:20
- **Resolved:** 06-12-2022 01:03
- **Resolution:** Done

**Description (verbatim):**

> https://swt-bv-alm-1.global.tektronix.net:8443/jira/issues/?jql=project%20%3D%20GAR%20AND%20issuetype%20%3D%20%22Test%20Case%22%20AND%20%22Test%20Level%22%20in%20(API%2C%20API-Functional)%20AND%20%22Test%20Level%22%20%3D%20API%20and%20%22Test%20Case%20Type%22%20%3DManual%20%20and%20Automatability%20… [truncated]


---

#### `GAR-1335` — Lane drop down box in UI not updated with recent source changes in backend

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** u612584
- **Created:** 20-01-2022 02:23
- **Updated:** 14-09-2023 12:15
- **Resolved:** 26-02-2022 05:17
- **Resolution:** Fixed
- **Labels:** Framework-defects

**Description (verbatim):**

> PCIe testing performed on live waveform.
>
> Lane drop down box in UI not updated with recent source changes in backend


---

#### `GAR-3079` — [UI] Do not allow the user to add a new source or edit the name of an existing source

- **Type:** Story
- **Status:** Closed
- **Priority:** Major
- **Reporter:** magl
- **Created:** 15-07-2022 00:00
- **Updated:** 14-09-2023 08:03
- **Resolved:** 02-08-2022 00:18
- **Resolution:** Done

**Description (verbatim):**

> Do not allow the user to add a new source or edit an existing source name.
>
> 1) Remove 'add source' link in the UI
>
> 2) Do not allow the source name to be changed while editing an existing source
>
> 3) Do not allow to delete the source.
>
> 4) Allow to select and unselect the source.


---

#### `GAR-5990` — USB4v2:Result panel in UI in Application and scenario level gives the measurement in disordered way.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** shry
- **Created:** 06-08-2023 22:03
- **Updated:** 26-03-2024 05:19
- **Resolved:** 21-12-2023 03:09
- **Resolution:** Fixed
- **Labels:** Beta27, Client-App-USB4V2

**Description (verbatim):**

> When we run a measurement, the result panel of application level and scenario level will disorder the measurement list which sometimes makes the list meaningless.
>
> [~shry] [~shashirv] Can you please explain more about  the issue details
>
>  
>
> Application level and scenario level results order should m… [truncated]


---

#### `GAR-6242` — [Garuda DP] When VM/UI service is down, user login throws "Invalid username or password" error

- **Type:** Issue
- **Status:** Closed
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 06-09-2023 03:22
- **Updated:** 18-03-2024 07:12
- **Resolved:** 09-10-2023 04:35
- **Resolution:** Done
- **Labels:** ClientApp-DP, ClientApp-DP-PI3-Issue, ClientApp-DP-Stabilization, Qualcomm-TF-DP-Issue

**Description (verbatim):**

> [Garuda DP] When VM/UI service is down, user login throws "Invalid username or password" error although the those are correct.
>  The message needs to be updated. This confuses user,.
>
> NOte:
>
> The caching issue of UI will not be part of this issue.


---

#### `GAR-3129` — Manually test - [UI] Do not allow the user to add a new source or edit an existing source name

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** bhap
- **Created:** 20-07-2022 03:38
- **Updated:** 14-09-2023 08:03
- **Resolved:** 08-09-2022 11:28
- **Resolution:** Done


---

#### `GAR-6829` — Busy spinner appears and Ui is not responding if lanes and sources button is clicked without selecting the test bench

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** pbaik
- **Created:** 13-11-2023 02:52
- **Updated:** 19-03-2024 07:17
- **Resolved:** 26-11-2023 08:51
- **Resolution:** Fixed
- **Labels:** Beta27

**Description (verbatim):**

> 1. tekflow/test/details
> 2.Add Application
> 3. click Lanes and sources button
> 4. Getting expected error pop
>  !image-2023-11-13-16-20-31-738.png|thumbnail! 
>
> Observation:
> along with error popup busy spinner appears and even if dialog is closed unable to click on any Ui controls until manually refresh t… [truncated]


---

#### `GAR-7924` — The instrument drop-down of sources and signals in the UI appears empty while executing through API scripts.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** u631680
- **Created:** 18-03-2024 00:05
- **Updated:** 17-04-2024 01:58
- **Resolved:** 15-04-2024 03:42
- **Resolution:** Cannot Reproduce
- **Labels:** ClientApp-Memory-Tx

**Description (verbatim):**

> 1.Login to Clarius page using valid credentials
>  2.Click on Tests tab and click on New test button.
>  3.Enter the valid input in the Test name. and select appropriate test bench ID, Technology and Application
>  4.Click on Add Sequence and dropdown
>  5.Click on Signals and Sources
>
> Clarius ID: d4498ad-2… [truncated]


---

#### `GAR-3642` — Result status shows pass even though limits fail for single/multiple acquisition count in the UI

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** bhap
- **Created:** 17-10-2022 02:13
- **Updated:** 01-05-2024 04:31
- **Resolved:** 14-03-2023 23:06
- **Resolution:** Will Not Fix

**Description (verbatim):**

> Result status shows pass even though limits fails for single/multiple iterations are beyound specified limits in the UI.
> Steps:
> 1> Run an application with limits for multiple acquisitions(http://172.19.211.237:8100/application/TKFWTXS16,  Run 
> MultiAnalysisApp3 app which is deployed on 172.19.211.23… [truncated]


---

#### `GAR-3109` — Add test case to - [UI] Do not allow the user to add a new source or edit an existing source name

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** bhap
- **Created:** 19-07-2022 06:58
- **Updated:** 14-09-2023 08:03
- **Resolved:** 08-09-2022 11:25
- **Resolution:** Done


---

#### `GAR-4705` — Testbench - Modify instrument always shows the signal analyzer type ui parameters even if other type are selected

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** pbaik
- **Created:** 23-03-2023 21:13
- **Updated:** 14-09-2023 12:14
- **Resolved:** 24-04-2023 04:35
- **Resolution:** Fixed

**Description (verbatim):**

> 1. tekflow/manage/testbenches/
> 2. Add instrument - Type- custom 
> 3.observe the ui parameters as shown in attached image - new instrument
> 4.. Save testbench
> 5. Click Modify of saved testbench
> 6. click Edit instrument
> 7. observe as shown in attached image - modify instrument


---

#### `GAR-1889` — [UI] As a user I should be able to activate and view the license so that I can run the licensed apps

- **Type:** Story
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 30-03-2022 08:11
- **Updated:** 13-09-2023 19:41
- **Resolved:** 25-05-2022 05:21
- **Resolution:** Done

**Acceptance Criteria (verbatim):**

> 1) License panel to show available licenses.
> 2) activating license using lic file.
> 3) Show the details of licenses.
> 4) Should be able to delete the license.

**Description (verbatim):**

> 1) Should be able to view the license list.
>
> Input
> * Login to ATOMS UI.
> * Select License Manager from navigation Panel.
>
> Output
> * License Details list in table format.
>
> +FAILS ON+
> * If no license are present in database.
>
> 2) Should be able to view the license information.
>
> Input
> * Login to ATOMS UI.… [truncated]


---

#### `GAR-7819` — [Security] Even after logout able to get the UI credentials from the response payload of the access token in the network tab of Inspect tool

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** pbaik
- **Created:** 01-03-2024 09:50
- **Updated:** 19-03-2024 07:19
- **Resolved:** 14-03-2024 05:04
- **Resolution:** Not a Defect
- **Labels:** AA_Security

**Description (verbatim):**

> Even after logout able to get the ui login credentials from the response payload in networks tab of inspect tool. 
> !image-2024-03-01-23-18-39-815.png!


---

#### `TEKEXPFW-5747` — Improvements in DUTID textbox and multi run session OCW

- **Type:** Improvement
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 17-06-2021 03:55
- **Updated:** 14-09-2023 11:58
- **Resolved:** 21-07-2021 00:16
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 2-Medium

**Description (verbatim):**

> Acceptance criteria:
>  - Proposal document with the improvements in DUTID textbox and multi config session OCW
>  - Discuss and finalize with the team
>  - Implement the changes
>  - Input to Documentation team for the UI changes
>  - PRTI
>
> Doneness: 
>  - Prepare DUTID control improvements proposal document.… [truncated]


---

#### `TEKEXPFW-6481` — As an application developer, I need to improve the quality of the product by adding more unit test cases

- **Type:** Developer Story
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 29-09-2021 22:02
- **Updated:** 14-09-2023 08:49
- **Resolved:** 12-10-2021 03:57
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Acceptance criteria:
>  - Add more unit test cases for BaseConfiguration panel in BaseAppView
>  - Unit test cases should pass
>  - Integrate the changes into QG0 branch
>
> Doneness:
>  - Write unit test cases for for BaseConfiguration panel in BaseAppView
>  - Unit test cases should pass without any build issu… [truncated]


---

#### `TEKEXPFW-6479` — Identify and work on FSS improvement areas

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 29-09-2021 21:57
- **Updated:** 14-09-2023 08:49
- **Resolved:** 12-10-2021 03:38
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Acceptance criteria:
>  - Identify areas of improvements from FSS
>  - Work on the improvement areas
>
> Doneness:
>  - Areas of improvements to be identified in FSS
>  - Work on them


---

#### `TEKEXPFW-6478` — As an application developer, I need to understand the functionalities and features of Atoms Framework to contribute more

- **Type:** Developer Story
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 29-09-2021 21:53
- **Updated:** 14-09-2023 08:49
- **Resolved:** 12-10-2021 04:03
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Acceptance criteria:
>  - Install and set up Atoms application in the development PC
>  - Explore the functionalities of Atoms
> - Help other team members to setup in their PC as well
>
> Doneness:
>  - Contact the focal point from Atoms team
>  - Install the Atoms application in the development PC
>  - Able to su… [truncated]


---

#### `TEKEXPFW-6350` — As an application developer, I should have the option to use C# report library to create reports in my application

- **Type:** Developer Story
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 24-08-2021 22:06
- **Updated:** 14-09-2023 08:49
- **Resolved:** 09-09-2021 03:00
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Acceptance criteria:
>   [Keep in separate branch, we will merge after thorough testing]
>   - Application teams to have the option to choose between existing XSLT based and new C# report library
>  - Framework should create reports using new C# report library if opted by the application
>  - All the existi… [truncated]


---

#### `TEKEXPFW-6349` — Optimizing of updating acquire status for particular lane

- **Type:** Improvement
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 24-08-2021 03:40
- **Updated:** 14-09-2023 11:58
- **Resolved:** 31-08-2021 03:47
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> As of now, client apps need to send all lane names along with status message to the Framework.
>  We need to optimize the functionality so that client apps can send only one lane and status message for the particular acquire type.
>
>  
>
> Doneness:
>  # Acquire status can be updated using lane name and stat… [truncated]


---

#### `TEKEXPFW-6341` — [AppEmulator] Multi Lane in C# Sequencer: DPOJET Period measurement is not producing result

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 23-08-2021 00:19
- **Updated:** 14-09-2023 13:14
- **Resolved:** 07-09-2021 07:29
- **Resolution:** Cannot Reproduce
- **Labels:** UI

**Description (verbatim):**

> 1. Make Group1-2Lane to use C# Sequencer by updating app XML
> 2. Run DPOJET Period measurement using Lane0
> 3. Test is acquiring but analyzing does not yield results.
> 4. Reports also blank.
>
> Note: Refer attached screenshot where PI trace shows we need to use "DPOJET:STATE?" to wait for test to complet… [truncated]


---

#### `TEKEXPFW-6110` — SwitchMatrix should follow same version number as Framework and AppEmulator

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 21-07-2021 02:19
- **Updated:** 14-09-2023 08:49
- **Resolved:** 06-08-2021 01:07
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Acceptance criteria:
>  - Same version number for SwitchMatrix and Framework for easier tracking
>
>  
>
> Discuss with the build on having same version numbers:
>  * Have common SRM and TekAssembly info files
>
> OR
>  * Have same versions in both places and update on build


---

#### `TEKEXPFW-5735` — Exception if user tries to save session as "con" in Run/Config sessions.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** spatil
- **Created:** 14-06-2021 10:14
- **Updated:** 14-09-2023 11:58
- **Resolved:** 16-06-2021 00:35
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 3-Low

**Description (verbatim):**

> Launch AppEmulator
> Go to "Run/Config" Sessions
> Save config name as "Con"
> App throws an exception 
> Attached the screenshot


---

#### `TEKEXPFW-6335` — AppEmulator C# Sequencer is not supporting multi-lane multi-acquire type measurements

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 16-08-2021 22:00
- **Updated:** 14-09-2023 11:58
- **Resolved:** 07-09-2021 07:15
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> While fixing TEKEXPFW-5334 reported by PCIe team, I observed the following:
>
> AppEmulator C# Sequencer has following issues when running multi-lane tests which has more than one acquire type [by default all tests in Emulator have only one acquire type. Manually modified test XML to have more than one… [truncated]


---

#### `TEKEXPFW-5179` — Provide OLH content for result statistics

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 30-03-2021 00:26
- **Updated:** 14-09-2023 08:50
- **Resolved:** 13-04-2021 22:09
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> 1. Share the OLH content to Sangeetha and documentation team
> 2. Clear their queries
> 3. Review the OLH
>
> Completeness:
> 1. Result Statistics feature description document prepared.
> 2. This document sent to OLH team.


---

#### `TEKEXPFW-4838` — Values in UI are not resetting if app validation fails

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 11-02-2021 01:22
- **Updated:** 14-09-2023 11:58
- **Resolved:** 16-02-2021 23:25
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> If app validation fails for a particular parameter value, the expectation is the value will be reset to previous valid value. But the UI controls still shows invalid value though we get validation error popup.
>
> Expectation: The UI values should be reset to previous value.


---

#### `TEKEXPFW-4696` — CLONE - (Multi-Gig) Application crashes on clicking multirun check box during execution..

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** skumbha
- **Created:** 02-12-2020 22:55
- **Updated:** 14-09-2023 11:58
- **Resolved:** 08-12-2020 23:19
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> Steps:
>
> 1. Launch application and select some measurement.
> 2. Click on run
> 3. Click on "Number of Runs" check box in preference panel.
>
> Observation:
>
> Application crashes.


---

#### `TEKEXPFW-4525` — PCIE request: Measurement Subsystem related commands in Instruments interface

- **Type:** Developer Story
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 05-10-2020 04:19
- **Updated:** 14-09-2023 08:51
- **Resolved:** 11-10-2020 20:54
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Mail from Srinivas: Refer attached mail.
>  These are the commands we request you to add in the FW.
>  1) ("MEASUREMENT:MEAS" + count.ToString() + ":STATE 1"); >> to make measurements of the scope to visible on the TekScope window.
>  [Update from Vivek] We will add.
>
> 2) ("SELECT:"+mathSource+" ON"); to t… [truncated]


---

#### `TEKEXPFW-4587` — As a quality engineer, I need to validate multi run session functionality

- **Type:** Developer Story
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 20-10-2020 22:27
- **Updated:** 14-09-2023 08:51
- **Resolved:** 06-11-2020 02:51
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Acceptance Criteria:
>  * there should not be S1/S2 defects
>  * Backward Compatibility should not break 
>
>  
>
> Definition of Done:
>
> All testcases should pass
>
> Feature should not have any critical defects


---

#### `OUI-672` — Build script which encrypts MATLAB core processing files FAILS in remote coherent build system

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 15-05-2019 15:18
- **Updated:** 14-09-2023 12:39
- **Resolved:** 23-05-2019 12:28
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> Acceptance criteria:
> 1. Encryption build script should be able to encrypt MATLAB files successfully
> 2. Encrypted files should be stored in particular location to pick up during installer creation
> 3. Step by step document should be updated with latest information and screenshots.
>
> Doneness:
> 1. Unders… [truncated]


---

#### `TEKEXPFW-4509` — Client C# Sequencer should be able to access Signal Validation Popup

- **Type:** Improvement
- **Status:** Closed
- **Priority:** Major
- **Reporter:** sacb
- **Created:** 21-09-2020 00:49
- **Updated:** 14-09-2023 11:58
- **Resolved:** 09-10-2020 02:02
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Python sequencer supports to show Signal Validation popup.
> Similarly, C# sequencer should improve ShowMessage API to show Signal Validation popup


---

#### `TEKEXPFW-4147` — Utility function to find out scope platform from client application side

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 06-07-2020 22:37
- **Updated:** 13-09-2023 18:23
- **Resolved:** 15-07-2020 02:59
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> DPHY team wants to hide some tests in RIDDICK platform and show only in Terminator.
>
> We need to expose a function in TekExpressUtility similar to 
> GetScopePlatformFromReg() in TekUtility.


---

#### `TEKEXPFW-4136` — Exception occurs if user tries to save logs with "Mainlog.txt" file name

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** spatil
- **Created:** 26-06-2020 04:35
- **Updated:** 14-09-2023 11:58
- **Resolved:** 30-06-2020 02:49
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> Launch AppEmulator
>
> Select any of the test
>
> After the execution go to  "Status" panel and try to save the logs.
>
> it will point to  C:\Program Files\Tektronix\TekExpress\TekExpress AppEmulator
>
> try to save the file with "Mainlog.txt" name ..
>
> application will throw "Unhandled exception" error


---

#### `TEKEXPFW-4400` — CIO: Set Analysis State is NOT working only for USB4

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 02-09-2020 01:13
- **Updated:** 14-09-2023 08:51
- **Resolved:** 04-09-2020 00:43
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Work with Jitendra and debug/analyze the DDR4 code to find out the issue and help to resolve it.


---

#### `TEKEXPFW-4398` — LVDS : Overall Pass/Fail not displayed in Result panel

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 02-09-2020 01:07
- **Updated:** 14-09-2023 11:58
- **Resolved:** 08-09-2020 21:31
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 2-Medium

**Description (verbatim):**

> DoD:
> Add Overall Pass/Fail status in results tab for LVDS
> Test build for the changes.
> Placeholder for additional requests.


---

#### `MIPIMPHYTX-1723` — F1 key does not work in the application

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 17-12-2019 21:51
- **Updated:** 05-01-2024 02:39
- **Resolved:** 21-01-2020 21:49
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> Pressing F1 key should bring the documentation, but this functionality is not working.


---

#### `RNBAST-843` — Validate NBASE-T (2.5G, 5G and 10G) in SX scope with new fixture

- **Type:** Developer Story
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 10-10-2019 01:24
- **Updated:** 13-09-2023 18:47
- **Resolved:** 09-09-2020 01:16
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Refer the attached mail from Partha with test plan.
>
> Acceptance Criteria:
> Share the results for all the required measurement with new Fixture
>  2.5G, 5G and 10G
>
> Readiness:
> Released version of the NBASE-T software
> SX scope and new fixture along with DUT for Qualification
>
> Doneness;
> Report shared for… [truncated]


---

#### `MIPIMPHYTX-1526` — TekExpress MOI update

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 01-07-2019 09:52
- **Updated:** 14-09-2023 07:53
- **Resolved:** 15-01-2020 23:52
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> TekExpress MOI update


---

#### `MIPIMPHYTX-1523` — As a user, I want to run Tests 1.1.2, 1.1.8, 1.1.14, 1.1.15, 1.1.16, 1.1.17 and 1.1.18 as informative tests in HS mode as per the CTS

- **Type:** Story
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 01-07-2019 09:44
- **Updated:** 14-09-2023 07:53
- **Resolved:** 24-07-2019 02:27
- **Resolution:** Done
- **Labels:** UI
- **Business Value:** 80

**Description (verbatim):**

> Acceptance criteria:
>  # Tests 1.1.2, 1.1.8, 1.1.14, 1.1.15, 1.1.16, 1.1.17 and 1.1.18 should be informative in HS mode
>  # They should not be selected by default.
>  # Selected All should select these tests
>  # Select Required should deselect these tests.
>
> Doneness Criteria:
>
>      1.PRTI.
>
>      2.Test c… [truncated]


---

#### `MIPIMPHYTX-1522` — Test 1.2.6 should be informative in PWM mode

- **Type:** Story
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 01-07-2019 09:40
- **Updated:** 14-09-2023 07:53
- **Resolved:** 23-07-2019 20:56
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Test 1.2.6 should be informative in PWM mode


---

#### `MIPIMPHYTX-1504` — 'Select Required' button is missing in SYS mode Test Selection panel.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 26-06-2019 04:31
- **Updated:** 14-09-2023 13:55
- **Resolved:** 22-07-2019 01:19
- **Resolution:** Not a Defect
- **Components:** User Interface
- **Labels:** Nova, UI

**Customer Impact (verbatim):**

> 2-Medium

**Description (verbatim):**

> "Select Required" button is missing in SYS mode Test Selection panel.


---

#### `MIPIMPHYTX-1502` — Test 1.1.8 (Rise and Fall Times) should be hidden in HS Continuous mode

- **Type:** Requirement
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 26-06-2019 04:19
- **Updated:** 14-09-2023 10:39
- **Resolved:** 12-08-2019 23:47
- **Resolution:** Duplicate
- **Components:** User Interface
- **Labels:** UI

**Description (verbatim):**

> Test 1.1.8 (Rise and Fall Times) should be hidden in HS Continuous mode.


---

#### `MIPIMPHYTX-1501` — Test 1.1.5 (Differential DC Output Voltage) should be hidden in HS Continuous mode

- **Type:** Requirement
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 26-06-2019 04:18
- **Updated:** 14-09-2023 10:39
- **Resolved:** 12-08-2019 23:46
- **Resolution:** Duplicate
- **Components:** User Interface
- **Labels:** UI

**Description (verbatim):**

> Test 1.1.5 (Differential DC Output Voltage) should be hidden in HS Continuous mode.


---

#### `MIPIMPHYTX-1500` — As a user, I want to run Tests 1.1.4, 1.1.5 and 1.1.8 in HS Burst mode only as per CTS

- **Type:** Story
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 26-06-2019 03:09
- **Updated:** 14-09-2023 07:53
- **Resolved:** 24-07-2019 02:28
- **Resolution:** Done
- **Components:** User Interface
- **Labels:** Nova, UI

**Description (verbatim):**

> Acceptance criteria:
>  # Tests 1.1.4, 1.1.5 and 1.1.8 should be hidden in HS Continuous mode.
>  # They should be visible in HS Burst mode only


---

#### `TEKEXPFW-3364` — Issues in "Probe Configuration" window : Check Box selection issue

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** spatil
- **Created:** 30-01-2019 21:18
- **Updated:** 14-09-2023 11:58
- **Resolved:** 10-03-2021 22:44
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> Steps
>
> =====
>
> Launch AppEmulator
>
> Go to Acquisitions panel
>
> Click on View Probes
>
> Issue 1: Deselect all check boxes in Probe Configuration window close the window.
>
> now recall default setup and go to probe configuration window.
>
> here observed that all deselected check boxes are unchecked.
>
> Issue 2:… [truncated]


---

#### `TEKEXPFW-3363` — Change in "Save as type" resets report  path location

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** spatil
- **Created:** 30-01-2019 20:41
- **Updated:** 14-09-2023 13:46
- **Resolved:** 04-03-2021 01:58
- **Resolution:** Not a Defect
- **Labels:** UI

**Customer Impact (verbatim):**

> 2-Medium

**Description (verbatim):**

> steps
>
> ======
>
> Launch AppEmulator
>
> Go to Reports panel
>
> Set Report Path name as x:\Report
>
> Now change save as type to csv or pdf  now select mht format 
>
> observed that Report path got reset to default location.


---

#### `MIPIMPHYTX-1615` — Select required measurements are selected when you click multi-lane setup button, When only one mesurement is selected

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** AKAC
- **Created:** 07-08-2019 03:05
- **Updated:** 14-09-2023 12:40
- **Resolved:** 11-08-2019 23:15
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 2-Medium

**Description (verbatim):**

> Select one measurement in any mode and click on Multi-lane setup button, and go back to Test Selection panel, all required measurements will be selected.
>
> Steps:
> Go to Test Selection panel.
> Select only one measurement.
> Go to DUT panel
> Click on Multi-lane setup button
> Close Multi-lane setup window
> Go… [truncated]


---

#### `TEKEXPFW-4769` — User should not be allowed to enter more than 59 as minutes in Continuous Run

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 19-01-2021 22:08
- **Updated:** 14-09-2023 11:58
- **Resolved:** 20-01-2021 01:29
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 2-Medium

**Description (verbatim):**

> Minutes field should accept only 0-59 as valid entry.
> But now continuous run minute field accepts up to 99 as minute.


---

#### `TEKEXPFW-4770` — SWE testing of build with TekDisplay numeric pad with unit display

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 20-01-2021 23:41
- **Updated:** 14-09-2023 08:50
- **Resolved:** 07-02-2021 21:29
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> From sequencer side, query the parameter value (with units) and see what value we are getting (int/double or string with units attached).
> The value we get should be always int/double without unit attached which will fail string to int/double conversion in sequencer side.


---

#### `MIPIMPHYTX-1604` — Error message pops up while trying to save session

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** pmaurya
- **Created:** 01-08-2019 23:11
- **Updated:** 05-01-2024 02:39
- **Resolved:** 20-08-2019 22:49
- **Resolution:** Cannot Reproduce
- **Labels:** UI

**Customer Impact (verbatim):**

> 2-Medium

**Description (verbatim):**

> DX scope 
> PPG setup for HS Gear4A testing
>
> 1. Select 4A - 9.984
> 2. Select burst
> 3.  channel 1 - 3
>
> Load the right pattern for the test. 
>
> Run and try saving the session. It doesn't save and pops up error message, everytime  "some files are open"
>
> Refer screenshot.
> I closed all the session files whic… [truncated]


---

#### `MIPIMPHYTX-1561` — Mask file browse button should be disabled in compliance mode

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 21-07-2019 21:35
- **Updated:** 05-01-2024 02:39
- **Resolved:** 25-09-2019 22:18
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> User misunderstood that he can select different mask file in compliance mode because corresponding Browse button is enabled in compliance mode (UI bug?).
>
> As of now, even if user selects different file, the corresponding file path textbox still shows only default file as expected.
>
>  *Action item:*… [truncated]


---

#### `TEKEXPFW-3439` — Enable Signal Debug (Allow to select Ref/Math channels)

- **Type:** Story
- **Status:** Closed
- **Priority:** Major
- **Reporter:** ckappaga
- **Created:** 17-07-2019 01:58
- **Updated:** 13-09-2023 18:23
- **Resolved:** 13-08-2019 21:46
- **Resolution:** Done
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Acceptance Criteria (verbatim):**

> The DUT panel UI will provide an option to enable and disable signal Debug mode.
>
> The model will append required REF and MATH sources based on following conditions.
>  1.If app has NOT specified general parameters for REF and MATH source count, default count is "4" on both platforms.
> 2. If app has the ref/math source count parameters specified, then on Terminator platform, it will be <=4 based on co… [truncated]

**Description (verbatim):**

> Enable Signal Debug(Allows to select Ref/Math), this feature should allow user to select Ref1to4 and Math1to4 as a sources. The user will pre-load any waveform in TekScope to Ref or Math which he selected in TekExpress during run.
>
> For more details please check attached document.


---

#### `TEKEXPFW-4131` — "Validation Error popup" if user tries to enter DUTID values in Pre-recorded mode

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** spatil
- **Created:** 24-06-2020 23:31
- **Updated:** 14-09-2023 11:58
- **Resolved:** 27-08-2020 01:12
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 2-Medium

**Description (verbatim):**

> Launch AppEmulator
>
> Swicth to Pre-recorded mode
>
> Go to DUTID filled and press ENTER
>
> observed an error popup which is not required 
>
> attached the snap


---

#### `TEKEXPFW-4423` — As a user, I do not want to see the tests which are not related to particular scope platform

- **Type:** Improvement
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 03-09-2020 06:08
- **Updated:** 14-09-2023 13:34
- **Resolved:** 07-09-2020 22:05
- **Resolution:** Duplicate
- **Labels:** UI

**Description (verbatim):**

> Acceptance criteria:
> 1. I should be able to see only tests which are applicable to the scope platform where I run the application. (ex:) DPOJET based tests should be visible only in Terminator, NOT visible in Riddick platform
> 2. No related S1/S2 defects
> 3. Backward compatibility should be maintained… [truncated]


---

#### `TEKEXPFW-4288` — Continuous Run Duration label in DUT panel NOT reflecting updated value from PI

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** spatil
- **Created:** 07-08-2020 00:57
- **Updated:** 14-09-2023 11:58
- **Resolved:** 26-08-2020 21:36
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> Launch AppEmulator
>
> Try to set duration in "Continuous Run mode " feature
>
> using SCPI Command   TEKEXP:VALUE ContinuousRun_Duration,"00:45"
>
>
>
> it will set the value 45 in but on the UI(DUT-panel) it is not getting reflated


---

#### `TEKEXPFW-4886` — Finalize the proposal to revamp Preference and Reports panel

- **Type:** Improvement
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 24-02-2021 20:50
- **Updated:** 14-09-2023 11:58
- **Resolved:** 11-03-2021 02:38
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 2-Medium

**Description (verbatim):**

> Acceptance criteria:
>  - Create a proposal document with the ideas to redesign Preference and Reports panel
>  - Discuss within the team
>  - Finalize one of the designs
>  - Effort estimation
>  - Code analysis
>
> Doneness:
>  - Proposal document for ideas to redesign Preference and Reports panel
>  - Discussion… [truncated]


---

#### `TEKEXPFW-4857` — [AR #65412] TekExpress on MSO6B cannot create a report of pdf format

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 21-02-2021 20:58
- **Updated:** 14-09-2023 11:58
- **Resolved:** 09-03-2021 20:04
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> [Mail from AE]
>  If report of pdf format is created by TekExpress on MSO6B, an error occurs. This error occurs by all TekExpress (USB2, Ethernet, Automotive Ethernet, NGBASE-T, etc).
>
> Acceptance Criteria:
>
> 1. Check with build team on changes in installation folder
> 2. Push code changes and test it.
> 3.… [truncated]


---

#### `TEKEXPFW-3914` — As a CIO automation engineer, I should be able to use ISequencerModel interface for acquire and analysis of CIO tests

- **Type:** Developer Story
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 18-05-2020 22:38
- **Updated:** 13-09-2023 18:23
- **Resolved:** 01-06-2020 22:12
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Framework has exposed an interface ISequencerModel which should be consumed by applications (ex:CIO) to get the kernel values for acquisition and analysis of app measurements.
>
>  
>
> Acceptance criteria:
>  # Interact with CIO team to integrate ISequecnerModel into CIO sequencer
>  # Get the feedback and t… [truncated]


---

#### `GAR-4671` — [DP/PCIe][Beta-14] Prompt on Delete option not working for many items

- **Type:** Issue
- **Status:** Closed
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 20-03-2023 13:10
- **Updated:** 13-09-2023 19:40
- **Resolved:** 23-03-2023 21:39
- **Resolution:** Done
- **Labels:** ClientApp-DP, ClientApp-PCIe

**Description (verbatim):**

> Test bench is directly deleted without prompt
>  Report delete button does not ask for confirmation
>
> manage sequence delete button does not asking for confirmation
>
> It is important to fix as user sometimes unintentionally clicks the delete option.


---

#### `CS-200` — TDEC application is crashing while click on ‘View Optical Modules’

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** JPALADIY
- **Created:** 13-08-2018 03:17
- **Updated:** 14-09-2023 12:19
- **Resolved:** 20-08-2018 02:46
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> # Launch the application and click on the run button.
>  # Stop the execution.
>  # Perform the default setup.
>  # Click on the 'View Optical Modules'
>
> Actual Result: TDEC application is crashing while click on ‘View Optical Modules’
>
> Expected Result: Application should not crash in any scenario.


---

#### `DP-2505` — Revert back DP1.5 related changes from integration stream

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 12-09-2018 04:02
- **Updated:** 13-09-2023 20:05
- **Resolved:** 26-09-2018 03:16
- **Resolution:** Done
- **Labels:** UI
- **Business Value:** 70

**Description (verbatim):**

> Revert back DP1.5 related changes from integration stream and merge those changes into "integration_DP1.5" stream.


---

#### `OUI-99` — SSU not running in Win 10 Scope

- **Type:** Issue
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 18-09-2018 01:58
- **Updated:** 13-09-2023 19:09
- **Resolved:** 19-10-2018 11:38
- **Resolution:** Done
- **Labels:** UI
- **Business Value:** 80

**Description (verbatim):**

> SSU is not running in Win 10 scope. Refer


---

#### `CS-386` — 'Custom' option for data rate is getting hide after performing the default setup

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** JPALADIY
- **Created:** 29-08-2018 03:08
- **Updated:** 14-09-2023 12:19
- **Resolved:** 29-08-2018 05:40
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> # Launch the application and do default setup.
>  # Select 'User-defined' mode
>  # Try to select custom datarate
>
> Actual Result: 'Custom' option for data rate is getting hide after performing the default setup
>
> Expected Result: User should able to select the custom option.


---

#### `CS-385` — Use phase reference check box should be hidden for TDEC application

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** JPALADIY
- **Created:** 28-08-2018 03:01
- **Updated:** 14-09-2023 12:19
- **Resolved:** 29-08-2018 03:08
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> Use phase reference check box should be hidden for TDEC application


---

#### `DP-2486` — Add Voltage swing and Pre emphasis selection boxes in configuration panel for Eye Diagram measurement

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 31-07-2018 22:57
- **Updated:** 14-09-2023 12:16
- **Resolved:** 14-08-2018 00:17
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> Requirement:
>  # The eye diagram measurement currently runs for all combinations. Provide a Voltage levels and Preemphasis level selection boxes in configuration panel similar to DUT panel in compliance mode. This provides user to check different combination for which eye diagram should run. 
>  # The… [truncated]


---

#### `DDRR-193` — Source label should be printed before the source type.

- **Type:** Improvement
- **Status:** Closed
- **Priority:** Major
- **Reporter:** skumbha
- **Created:** 25-06-2018 02:14
- **Updated:** 14-09-2023 14:02
- **Resolved:** 29-08-2018 02:20
- **Resolution:** Will Not Fix
- **Labels:** Riddick_DDR, UI

**Description (verbatim):**

> In DDR we have different measurements will different sources.
> As of now in the riddick only source type is present.  source name is not specified.


---

#### `RKRCRT-34` — Static code analysis support

- **Type:** New Feature
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 07-06-2018 23:57
- **Updated:** 13-09-2023 18:48
- **Resolved:** 13-06-2018 00:02
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Add Static code analysis support


---

#### `EPAMT-386` — Add Static code analysis support

- **Type:** New Feature
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 06-06-2018 02:34
- **Updated:** 14-09-2023 10:32
- **Resolved:** 12-06-2018 00:21
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Add Static code analysis support


---

#### `DP-2444` — Changing to pre recorded mode selects few tests in test selection panel automatically

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vsiddhar
- **Created:** 14-06-2018 05:03
- **Updated:** 14-09-2023 12:16
- **Resolved:** 26-06-2018 22:37
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 2-Medium

**Description (verbatim):**

> Changing to pre recorded mode selects few tests in test selection panel automatically.
>
> 1. While loading saved setup file- Test 3.5, 3.10, 8.5 gets selected automatically 
> 2. While going to pre recorded mode from default setup 3.5 gets selected
>
> Please check the session here: \\tedisplstorage\VOEs\D… [truncated]


---

#### `CS-194` — Device settings parameter are missing for TDEC

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** JPALADIY
- **Created:** 02-08-2018 03:11
- **Updated:** 14-09-2023 12:19
- **Resolved:** 02-08-2018 04:42
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> Device settings parameter are missing.


---

#### `CS-193` — TekExpress error is appearing while click on the View Probes

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** JPALADIY
- **Created:** 01-08-2018 22:51
- **Updated:** 14-09-2023 12:19
- **Resolved:** 02-08-2018 04:42
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> # Launch the TekExpress TDEC 
>  # Go to 'Acquisitions' tab 
>  # Click on the 'View Probes' button
>
> Actual Result : Error is appearing.
>
> Expected Result : It should display configured probes.


---

#### `DCG-110` — Qualcomm: Implement image file transfer using TekExpress PI commands

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 16-05-2018 04:14
- **Updated:** 13-09-2023 20:18
- **Resolved:** 17-05-2018 02:06
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Use the following two PI commands in Qualcomm remoting DLL to transfer image files in current session from scope instrument to local PC.
>
> TEKEXP:INFO? IMAGE
>
> TEKEXP:EXPORT IMAGE,<ImageFileName>
>
>  
>
> Refer attached mail.


---

#### `OUI-274` — Set Trigger Source to Line

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 07-12-2018 10:24
- **Updated:** 13-09-2023 19:09
- **Resolved:** 07-12-2018 14:26
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Trigger source to be set to Line before starting acquisition.


---

#### `OUI-168` — Recalled OMA connections need to be refreshed automatically for missing hardware detection

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 02-11-2018 00:11
- **Updated:** 14-09-2023 12:39
- **Resolved:** 11-11-2018 22:56
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Recall any saved OMA definition file (where corresponding Scope or OMA not available) in Hardware Setup window.
>
> OMA connections are populated in the right panel through there is no corresponding hardware (scope or OMA).
>
> We need to manually click Refresh button or Optical Connect button in HW Setup… [truncated]


---

#### `OUI-167` — Add 2 Stack ATI in TekConnect mode to the palette

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 01-11-2018 23:58
- **Updated:** 13-09-2023 19:09
- **Resolved:** 11-11-2018 21:51
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> 2 Stack ATI scope in TekConnect mode with SSU running should be detectable by OUI and needs to be populated automatic or manual connection in the left palette. Also connections between this scope and OMA should be possible in the right panel.


---

#### `OUI-166` — Add 2 Stack ATI in ATI mode to the palette

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 01-11-2018 22:51
- **Updated:** 13-09-2023 19:09
- **Resolved:** 08-11-2018 20:05
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> # 2 Stack ATI scope with SSU running should be detectable by OUI.
>  # Itneeds to be populated automatically or manually in the equipment palette.
>  # Also connections between this scope and OMA should be possible in the right panel.
>  # Save and recall this OMA definition successfully when correspondin… [truncated]


---

#### `OUI-165` — SSU: HW Setup populates duplicate Scope with old friendly name even after setting new name

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 01-11-2018 22:06
- **Updated:** 14-09-2023 13:32
- **Resolved:** 11-11-2018 23:07
- **Resolution:** Cannot Reproduce
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> Launched SSU in 2 Stack ATI with friendly name of "SoftwareLab2Stack".
>
> Launched OUI and in HW Setup, connect to SSU scope manually and scope was detected and populated with the corresponding friendly name in left palette.
>
> Now set new friendly name as "TwoStackATI" in SSU. Remove and add the same s… [truncated]


---

#### `OUI-218` — Add Single ATI in ATI mode to equipment palette and make OMA connection

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 18-11-2018 22:49
- **Updated:** 13-09-2023 19:09
- **Resolved:** 22-11-2018 23:25
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> # Single ATI in ATI mode with SSU running should be detectable by OUI.
>  # It needs to be populated automatically or manually in the left palette.
>  # Also connections between this scope and OMA should be possible in the right panel.
>  # Save and recall this OMA definition successfully when correspondi… [truncated]


---

#### `OUI-217` — Create Multi OMA connection and save/load the setup

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 18-11-2018 22:15
- **Updated:** 13-09-2023 19:09
- **Resolved:** 18-11-2018 22:23
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> # In Hardware Setup window, I should be able create multiple OMA pages and OMA connections using different scope and Optical modules.
>  # Should be able save and recall the connection successfully.


---

#### `OUI-215` — Add Single 33SX Scope to equipment palette and make OMA connection

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 18-11-2018 21:17
- **Updated:** 13-09-2023 19:09
- **Resolved:** 18-11-2018 21:40
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> # Single 33SX scope with SSU running should be detectable by OUI.
>  # It needs to be populated automatically or manually in the left palette.
>  # Also connections between this scope and OMA should be possible in the right panel.
>  # Save and recall this OMA definition successfully when corresponding ha… [truncated]


---

#### `OUI-210` — Add 4 Stack ATI to the equipment palette and make OMA connections

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 14-11-2018 03:34
- **Updated:** 13-09-2023 19:09
- **Resolved:** 15-11-2018 21:47
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> 4 Stack ATI scope with SSU running should be detectable by OUI and needs to be populated automatic or manual connection in the left palette. Also connections between this scope and OMA should be possible in the right panel.


---

#### `OUI-222` — Add DX scope to the palette and make OMA connections

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 20-11-2018 03:17
- **Updated:** 13-09-2023 19:09
- **Resolved:** 20-11-2018 03:26
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> # DX scope (ex: DPO72304DX) running SSU should be detectable manually or automatically in equipment palette of HW setup window
>  # This scope should be moved to OMA palette and make OMA connection
>  # Save and load the saved OMA connection.


---

#### `OUI-220` — Single ATI scope contains 4 connection anchors in OMA pallet instead of 3

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 19-11-2018 01:20
- **Updated:** 13-09-2023 19:09
- **Resolved:** 23-11-2018 01:20
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Add a single ATI scope from equipment palette to OMA palette.
>
> It should have 3 connection anchors named 2, 1, 3 respectively for ATI and non-ATI channels.
>
> But it has 4 connection anchors like 33SX Tabasco scope which is not correct.


---

#### `OUI-219` — Add Single ATI in TekConnect mode to equipment palette and make OMA connection

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 18-11-2018 22:51
- **Updated:** 13-09-2023 19:09
- **Resolved:** 22-11-2018 23:30
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> # Single ATI in TekConnect mode with SSU running should be detectable by OUI.
>  # It needs to be populated automatically or manually in the left palette.
>  # Also connections between this scope and OMA should be possible in the right panel.
>  # Save and recall this OMA definition successfully when corr… [truncated]


---

#### `DP-2525` — Exception occurred  for view probe in Acquisition Panel

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** SCHOUDHA
- **Created:** 25-09-2018 04:18
- **Updated:** 14-09-2023 12:16
- **Resolved:** 26-09-2018 01:40
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> 1.Launch the TekExpress DisplayPort Application
>
> 2.Set the setup as Default 
>
> 3.Go to the Acquisition panel and select veiw probe 
>
> 4.Select the Closed buttton 
>
> Observation:Application is crashed..
>
> please find the attached screen short


---

#### `DP-2524` — [Field Query] - "COMP-EYE" Pattern is Getting added for Eye measurement in HBR3 Data Rate

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** SCHOUDHA
- **Created:** 24-09-2018 22:28
- **Updated:** 14-09-2023 12:16
- **Resolved:** 26-09-2018 03:15
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> 1.Launch the TekExpress DisplayPort application
>
> 2.set the Default set-up
>
> 3.De-seclect the RBR,HBR,HBR2 Data Rates and Select all the Voltage Swing and Pre-Emphasis Level.
>
> 4.Go to the Test selection panel and select test 3.12.1_total jitter Measurements
>
> 5.Select the Advanced mode from the View Bu… [truncated]


---

#### `ET3R-612` — 1000BT Jitter: Test description is not correct

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** TJAIN1
- **Created:** 27-09-2018 06:50
- **Updated:** 14-09-2023 12:39
- **Resolved:** 28-09-2018 06:41
- **Resolution:** Fixed
- **Labels:** MustFix, ShouldFix, UI

**Customer Impact (verbatim):**

> 2-Medium

**Description (verbatim):**

> Test description for Master filtered, Master unfiltered, Slave filtered and slave filtered, with clock, are not correct.


---

#### `RXGKRT-113` — can't see probe type in Acquisitions(view probe) for Differential

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** SCHOUDHA
- **Created:** 31-01-2018 02:40
- **Updated:** 14-09-2023 12:39
- **Resolved:** 07-02-2018 02:32
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 2-Medium

**Description (verbatim):**

> Environment
>
> scope -MSO71604C
>
> DPOJET VERSION-10.0.6.106
>
> Tekexpress version -10.1.2.21
>
> FRAMEWORK VERSION -4.3.0.40
>
> 1.we select the default setting from the option menu.
>
> 2.we select for differential from set up.
>
> 3.when we select the Acquisitions and click on view probe 
>
> 4. we can't able to see… [truncated]


---

#### `MIPIMPHYTX-1316` — Test configurations are not editable in User Defined mode after recalling session

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 11-02-2018 21:15
- **Updated:** 05-01-2024 02:39
- **Resolved:** 14-02-2018 03:40
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Test configurations are not editable in User Defined mode for a recalled session


---

#### `TEKEXPFW-3068` — Skip license check of Device/Suite during Unit Test

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 06-02-2018 03:31
- **Updated:** 14-09-2023 11:58
- **Resolved:** 21-02-2018 21:54
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> 400G TXE (Geronimo R2) unit test cases are failing with latest TekExpress FW 4.3.0.40 whereas they were passing with FW 4.2.10.35.
> While debugging this issue, I came across the situation where license check is performed before parsing Device/Suite information from corresponding sequential order XML… [truncated]


---

#### `TEKEXPFW-2496` — Application is not allowing to overwrite the session

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 28-04-2017 01:44
- **Updated:** 14-09-2023 11:58
- **Resolved:** 15-02-2021 02:27
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> [Refer JIRA ID: RPAMT-229]
>
> Pre-requisite : Saved session with 'Test' name is exist.
>
> Steps:
>  1. Launch the application & Select the test and click on the run button.
>  2. Try to save the session with same name i.e. 'Test'
>
> Actual Result: Two prompt appearing with different message, and that is contr… [truncated]


---

#### `RPAMT-227` — Near End and Far End Mask Width support in TP4 suite

- **Type:** Improvement
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 24-04-2017 23:15
- **Updated:** 14-09-2023 12:30
- **Resolved:** 26-04-2017 23:35
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Near End and Far End Mask Width support in TP4 suite


---

#### `DP-2420` — Aux Manchester(Test 8.2) test gets selected automatically as soon as DPR 100 is selected

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vsiddhar
- **Created:** 02-05-2018 03:03
- **Updated:** 14-09-2023 12:16
- **Resolved:** 05-06-2018 04:58
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Aux Manchester test gets selected automatically as soon as DPR 100 is selected


---

#### `BRR-1386` — 1000BaseT1(Riddick&Terminator)-TX_MDI Jitter measurement Software show test should be in TM1 which is suppose to be TM2

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** tramoju
- **Created:** 03-04-2018 07:27
- **Updated:** 14-09-2023 12:49
- **Resolved:** 05-04-2018 22:18
- **Resolution:** Fixed
- **Labels:** Automation, BRR_1000BaseT-1, UI

**Description (verbatim):**

> TX_MDI Jitter measurement Software show test should be in TM1 which is suppose to be TM2


---

#### `BRR-1395` — Specification text for 100-T1 not consistant with 1000-T1

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** shashirv
- **Created:** 03-04-2018 21:58
- **Updated:** 14-09-2023 12:49
- **Resolved:** 26-04-2018 10:41
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Please find the screenshot attached with details.


---

#### `DCG-101` — SNR: Launch help file from application

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 10-04-2018 02:29
- **Updated:** 13-09-2023 20:18
- **Resolved:** 10-04-2018 02:36
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Launch help file from application (F1 or clicking Help label)


---

#### `RPAMT-648` — Best CTLE entry is not appearing in drop down after eye tests are completed

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 19-04-2018 05:35
- **Updated:** 14-09-2023 12:30
- **Resolved:** 19-04-2018 05:44
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Best CTLE entry is not appearing in drop down after eye tests are completed with All CTLE option even though best CTLE fiels are created.


---

#### `RPAMT-658` — OIF-PAM4 CEI-VSR all test suites will have different specification version based on 56G/112G DUT type

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 24-04-2018 02:08
- **Updated:** 14-09-2023 12:04
- **Resolved:** 24-04-2018 04:04
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 2-Medium

**Description (verbatim):**

> OIF-PAM4 CEI-VSR all test suites will have different specification version based on 56G/112G DUT type. Need to reflect in the caption headers of Test Selecion and Acquisition panels too.


---

#### `RCAUIT-554` — Double 'deskew' option in options

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** JPALADIY
- **Created:** 05-07-2017 23:38
- **Updated:** 14-09-2023 12:32
- **Resolved:** 19-07-2017 02:04
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> 1. Launch the application and click on the 'Options' 
>
>
> Actual Result: Double deskew option is appearing.
>
> Expected Result: Deskew option should appear one time.


---

#### `DCG-53` — [SNR] UI development for Scope Noise Measurement application

- **Type:** Requirement
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 01-06-2017 01:19
- **Updated:** 13-09-2023 20:18
- **Resolved:** 19-07-2017 23:23
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Develop stand alone UI app for Scope Noise Measurement utility


---

#### `RPAMT-240` — Near End/Far End Custom CTLE option is not recalled properly on recall setup

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 10-05-2017 03:15
- **Updated:** 14-09-2023 12:30
- **Resolved:** 10-05-2017 05:15
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Select Custom entry from Near End/Far End CTLE dropdowns.
> Save the session and recall.
> "All" option is selected in Near End/Far End CTLE dropdowns instead of Custom entry.


---

#### `TEKEXPFW-2513` — Measurement entry is duplicated in Results panel

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 08-05-2017 23:44
- **Updated:** 14-09-2023 11:58
- **Resolved:** 10-05-2017 02:55
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> 1. Launch the application & Select some measurements.
> 2. Click on the run button, and wait till the analysis status of any measurement is in Progress.
> 3. Go to 'DUT' tab and try to select the diff device or suite.
> 4. Go to 'Result' tab
> 5. We notice an empty row of the measurement whose analysis stat… [truncated]


---

#### `RPAMT-239` — UI Feedback

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 09-05-2017 05:53
- **Updated:** 13-09-2023 18:46
- **Resolved:** 10-05-2017 05:16
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Change build number to 1.0.xx
> Standard: OIF-PAM4
> Spec version - left aligned
> Move Bandwidth to Gen Config below DeEmbed
> Group Eye Measurements (Future)
> Probe Config ocw -> "ATI channel" instead of Not Used
> Take ATI related changes from FW (134.64.245.17)
> Remove Show Acq parameters in Acq panel
> Selec… [truncated]


---

#### `MIPIMPHYTX-1320` — Some questions about TekExpress programmatic interface from Umar Bhutta

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 06-03-2018 02:36
- **Updated:** 14-09-2023 07:53
- **Resolved:** 06-03-2018 02:37
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Refer attached mail for information.
> Help required to make some PI commands work.


---

#### `CS-168` — Support 80C17/18 two channel modules

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 17-05-2017 03:20
- **Updated:** 14-09-2023 08:20
- **Resolved:** 22-05-2017 01:32
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Support 80C17/18 two channel modules


---

#### `DCG-109` — CLONE - Integrate static code analysis report with build

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** AALAMKHA
- **Created:** 14-05-2018 21:19
- **Updated:** 14-09-2023 10:36
- **Resolved:** 14-05-2018 21:20
- **Resolution:** Duplicate
- **Labels:** UI

**Description (verbatim):**

> Integrate static code analysis report with build.
>
> Set project settings for 400G-TXE(test purpose) to run analysis along with build.
>
> Copy analysis reports into CodeAnalysis folder, so that build script will pick it and share the location in build mail.
>
> Refer mail attachment.


---

#### `DCG-107` — Integrate static code analysis report with build

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 14-05-2018 00:35
- **Updated:** 13-09-2023 20:18
- **Resolved:** 16-05-2018 04:11
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Integrate static code analysis report with build.
>
> Set project settings for 400G-TXE(test purpose) to run analysis along with build.
>
> Copy analysis reports into CodeAnalysis folder, so that build script will pick it and share the location in build mail.
>
> Refer mail attachment.


---

#### `RPAMT-582` — Add more Unit tests and publish code coverage

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 25-03-2018 23:03
- **Updated:** 13-09-2023 18:45
- **Resolved:** 28-03-2018 04:40
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Add more Unit tests and publish code coverage


---

#### `RPAMT-578` — Results are not populating in result panel during run time

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** avan
- **Created:** 22-03-2018 23:27
- **Updated:** 14-09-2023 12:30
- **Resolved:** 27-03-2018 03:58
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 2-Medium

**Description (verbatim):**

> Result panel isn't showing any result during run time.


---

#### `BRR-1350` — By default, View Report check button should be selected

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** salapart
- **Created:** 27-03-2018 01:58
- **Updated:** 14-09-2023 12:49
- **Resolved:** 30-03-2018 01:15
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 2-Medium

**Description (verbatim):**

> EUT Feedback-
> By default, View Report check button should be selected
>
> Current behavior is unselected by default


---

#### `RPAMT-436` — Incorrect popup message for Linear Pulse Delay limit

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** JPALADIY
- **Created:** 15-02-2018 03:48
- **Updated:** 14-09-2023 12:30
- **Resolved:** 22-02-2018 22:54
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> # Launch the application and select 'AUI4-TP0a'
>  # Select 'User defined' mode
>  # Go to 'Configuration' tab and select 'Eye Configuration' 
>  # Select max for 'Linear Pulse Length (Np)'
>  # Enter 199 for 'Linear Pulse Delay (Dp)' and press enter
>  # Click on 'OK' in TekExpress error message
>
> Actual Resu… [truncated]


---

#### `TEKEXPFW-3079` — CLONE - Getting DUTID field cannot be empty pop-up before entering value

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 15-02-2018 01:00
- **Updated:** 14-09-2023 11:58
- **Resolved:** 23-02-2018 00:44
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 3-Low

**Description (verbatim):**

> Getting DUTID field cannot be empty pop-up before entering value.
> Steps:
> 1. Click on DUTID textbox.
> 2. Erase value present in the text box
>
> TekExpress Framework Version: 4.3.0.40


---

#### `MIPIMPHYTX-1318` — Invalid parameter pop up on recalling a session and change to User defined mode

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 14-02-2018 23:08
- **Updated:** 14-09-2023 12:40
- **Resolved:** 14-02-2018 23:19
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Invalid parameter pop up on recalling a session and change to User defined mode


---

#### `DCG-95` — Requirement for 400G-M4: Run SNC from PC and connect to Sampling scope using ip address

- **Type:** New Feature
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 20-03-2018 04:49
- **Updated:** 13-09-2023 20:18
- **Resolved:** 21-03-2018 21:27
- **Resolution:** Done
- **Labels:** Functional, UI

**Description (verbatim):**

> Requirement for 400G-M4: Run SNC from PC and connect to Sampling scope using ip address


---

#### `MIPIMPHYTX-1325` — Help in Programatic Interface

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 20-03-2018 00:59
- **Updated:** 14-09-2023 07:53
- **Resolved:** 20-03-2018 01:01
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> 1.	If it is necessary in latest build to change upper limit for burst mode in User-defined mode > Acquire > Upper Limit, how do I change it for gears 1, 2, and 3 through the programmatic interface? (refer to my previous email for details on this issue)
> 2.	I want to turn off “View Report after Genera… [truncated]


---

#### `TEKEXPFW-3121` — In pre-recorded mode, for multi-lane execution, "pre-recorded waveform not specified" pop-up does not occur.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 12-03-2018 23:42
- **Updated:** 14-09-2023 11:58
- **Resolved:** 28-03-2021 22:05
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 2-Medium

**Description (verbatim):**

> [Able to reproduce the same in app emulator too]
>
> # # Launch PCIE application.
>  # Select prerecorded mode
>  # Choose any specification and any data rate. (Here only 8Gbps with only Preset P0 is selected)
>  # Choose 2 lanes like Lane0 and Lane 01
>  # In acquisition panel select waveform for only one com… [truncated]


---

#### `MIPIMPHYTX-1322` — Disable Test 1.1.4, Test 1.1.5 and 1.1.8 measurements in Continuous mode

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** skumbha
- **Created:** 12-03-2018 02:51
- **Updated:** 05-01-2024 02:39
- **Resolved:** 13-03-2018 02:09
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> Disable below three measurements in Continuous mode.
>
> a.       Test 1.1.4-HS Common mode dc output voltage amplitude.
> b.       Test 1.1.5-HS-TX Differential DC Output Voltage Amplitude
> b.       Test 1.1.8-HS-TX 20-80% Rise and Fall Times


---

#### `BRR-1177` — 1000BaseT1-For Slave Jitter measurement plot label displaying units twice

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** tramoju
- **Created:** 23-01-2018 10:54
- **Updated:** 14-09-2023 12:49
- **Resolved:** 24-01-2018 01:21
- **Resolution:** Fixed
- **Labels:** BRR_1000BaseT-1, UI

**Description (verbatim):**

> 1)Enable Automotive Ethernet license
> 2)Launch application
> 3)Select 1000 base T1 suite
> 4)Select TX_Slave Jitter measurement 
> 5)Select Tm2 from marvel software
> 6)Run meas and go to plot panel observe the defect


---

#### `BRR-1172` — Need to remove "BRR" string for 1000 Base-T1.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** jdomadiy
- **Created:** 22-01-2018 22:41
- **Updated:** 14-09-2023 12:49
- **Resolved:** 24-01-2018 02:06
- **Resolution:** Fixed
- **Labels:** BRR_1000BaseT-1, UI

**Description (verbatim):**

> Need to remove the BroadR Reach string for 1000 Base-T1 selection from all the panel.


---

#### `CS-180` — Deskew option - In sampling scope Deskew is not supported.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** pmaurya
- **Created:** 26-07-2017 22:32
- **Updated:** 14-09-2023 12:19
- **Resolved:** 07-08-2017 01:56
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Launch the application. 
> Select option menu. 
>
> Deskew option appears and when we select this  and we can see error message appearing.
>
> "Supported Instrument not found.Please click "options->Instrument Control settings" to search for the instrument and try again.


---

#### `TEKEXPFW-2758` — User option to show/hide license not available popup in multi license applications

- **Type:** Requirement
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 25-07-2017 03:44
- **Updated:** 14-09-2023 10:34
- **Resolved:** 17-08-2017 23:23
- **Resolution:** Duplicate
- **Labels:** UI

**Description (verbatim):**

> Ethernet Tx has two different license XGBT and NBASET.
> When user bought one of the licenses, launching the application throws license check popup telling other license is not available every time before launching the application. Refer the attached image.
> We got customer requirement (AR # 60137) whe… [truncated]


---

#### `RCAUIT-553` — 'ReplaceAny' is not working

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** JPALADIY
- **Created:** 22-06-2017 02:44
- **Updated:** 14-09-2023 12:32
- **Resolved:** 19-07-2017 02:05
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Actual Result : ReplaceAny is not working.
>
> Expected Result : User shall able to replace test result with any session.


---

#### `DCG-68` — Mentoring Punya

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 27-11-2017 03:21
- **Updated:** 13-09-2023 20:18
- **Resolved:** 02-01-2018 21:54
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Mentor Punya with C# and TekExpress App UI


---

#### `RXGKRT-94` — Remove RjDj pattern type and Population settings from UI for Max_Output_Jitter measurement

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** satk
- **Created:** 29-11-2017 02:17
- **Updated:** 14-09-2023 07:35
- **Resolved:** 05-12-2017 20:25
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Remove RjDj pattern type and Population settings from UI for Max_Output_Jitter measurement as highlighted in the attached snapshot. Application will only support to vary Target BER settings.
>
> Other settings are set to default.


---

#### `BRR-1068` — DUT Comment Should be Modified As Automotive Ethernet

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** tramoju
- **Created:** 12-12-2017 08:31
- **Updated:** 14-09-2023 12:49
- **Resolved:** 28-12-2017 00:57
- **Resolution:** Fixed
- **Labels:** BRR_1000BaseT-1, UI

**Description (verbatim):**

> 1)Launch Automotive Ethernet Application
> 2)Select Setup Tab
> 3)Go to DUT ID then we can observe a popup window where it shows "General Comment - BroadR-Reach DUT" instead of "Marvel\1000Base-T1 DUT"
> 4)This comment will appears in test reports


---

#### `BRR-933` — Scope graticule screen capture was clipping at the reports

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** tramoju
- **Created:** 13-10-2017 01:41
- **Updated:** 14-09-2023 12:49
- **Resolved:** 29-03-2018 02:47
- **Resolution:** Fixed
- **Labels:** BRR_1000BaseT-1, UI

**Description (verbatim):**

> 1)Launch Automotive Ethernet
> 2)Select TX peak differential output measurement from test selection
> 3)Click on start button to run the measurement
> 4)Go to reports we can observe Scope graticule screen capture was clipping at the reports


---

#### `RXGKRT-43` — Exception occured while launching 10G-KR application

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** HSHETTY
- **Created:** 20-09-2016 23:22
- **Updated:** 14-09-2023 12:02
- **Resolved:** 23-09-2016 00:02
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Exception occured while launching 10G-KR application


---

#### `ECAUIT-77` — UI design/implementation of Custom CTLE options

- **Type:** Improvement
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 25-08-2016 03:34
- **Updated:** 14-09-2023 13:48
- **Resolved:** 13-10-2016 22:18
- **Resolution:** Not a Defect
- **Labels:** UI

**Description (verbatim):**

> When user selects custom CTLE, user should be able to enter:
> - Starting dB
> - No of filters
> Then clicking Create Filter butonm will popup an input dialog box for:
> - fz, fp1 and fp2 and Create button will create flt file using these values.


---

#### `RCAUIT-507` — In Test selection Panel Configure Button is appearing

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** pjoshi
- **Created:** 15-08-2016 21:53
- **Updated:** 14-09-2023 12:04
- **Resolved:** 16-08-2016 01:21
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Install latest build 1.0.0.208 in Tabasco(DPO77002SX) setup
> Go to test selection panel
> Observe the Test selection panel
> Config button is appearing
> Also Schematic button appearing in BOLD,make this to normal.
> Note:This issue observed only in Tabasco scope


---

#### `ECAUIT-91` — KR4 and CR4 shows CH1 and CH2 as data channels even though modules are connected to CH3 and CH4

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 19-09-2016 03:15
- **Updated:** 14-09-2023 12:42
- **Resolved:** 19-09-2016 03:28
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Electrical modules are connected to CH3 and CH4
> Launch application
> CAUI4 correctly shows CH3 and CH4 as the default channels for D+ and D- in acq grid.
> Select KR4 or CR4.
> They show CH1 and CH2 as default channels which is not correct,


---

#### `CS-155` — Code optimization of TDECQ solution

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 12-09-2016 23:16
- **Updated:** 14-09-2023 08:20
- **Resolved:** 19-09-2016 22:43
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Code optimization of TDECQ solution


---

#### `CS-153` — Create UI for TDECQ application for code drop

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 29-08-2016 01:00
- **Updated:** 14-09-2023 08:20
- **Resolved:** 30-08-2016 03:25
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Create UI for TDECQ application for code drop


---

#### `EPAMT-167` — Changing Device or Suite should update general param values

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 29-01-2017 21:50
- **Updated:** 14-09-2023 10:32
- **Resolved:** 30-01-2017 21:22
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Changing Device or Suite should update general param values of corresponding device and suite.


---

#### `CPHYX-1421` — After Visa communation error, slave Ip adress boxes are in disable state

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** skumbha
- **Created:** 29-09-2016 21:15
- **Updated:** 14-09-2023 12:27
- **Resolved:** 18-10-2016 23:30
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Steps:
>
> 1. After switching between SourceXpress to AWG.
> 2. click on compile in AWG.
> 3. First time visa commination error pop-up will come.
> 4. After click on 'ok', go to compile setting.
>
> Observation:
>
> Slave is enable state, but IP address boxes are in disable state.
>
> Note: PFA


---

#### `RPAMT-43` — Implement CTLE filter file selection

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 15-02-2017 00:03
- **Updated:** 13-09-2023 18:46
- **Resolved:** 13-03-2017 21:46
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Implement CTLE filter file selection based on discussions.


---

#### `ECAUIT-129` — Remove "Refresh Sources" button form Acquisition panel

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 06-11-2016 22:43
- **Updated:** 14-09-2023 12:42
- **Resolved:** 07-11-2016 22:53
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Remove "Refresh Sources" button form Acquisition panel as "View Modules" button will internally takes care of updating source before populating the probe list


---

#### `ECAUIT-62` — Create Mock up UI and conclude whether parent/child node concept or tabbed UI in Global panel

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 07-08-2016 23:17
- **Updated:** 13-09-2023 19:58
- **Resolved:** 25-09-2016 22:56
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Create Mock up UI and conclude whether parent/child node concept or tabbed UI in Global panel


---

#### `RCAUIT-476` — TekExpress 100G-TXE: SCPI probing type command not selecting Differential or Single-Ended

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** pjoshi
- **Created:** 03-08-2016 01:41
- **Updated:** 14-09-2023 12:04
- **Resolved:** 08-08-2016 01:59
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Steps to Reproduce:
> Launch the TekExpress 100G-TXE application
> Set the probing type using SCPI command
> Syntax: TEKEXP:VALUE GENERAL,"Probing Type","Differential"
> It change from Single-Ended to Differential
> Provide wrong parameter "Diferential".
>
> Expected:
> It should retain Single-Ended.
> Actual:
> It is… [truncated]


---

#### `EPAMT-314` — Validate selecting single/multiple tests to run

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 30-03-2017 01:54
- **Updated:** 14-09-2023 10:32
- **Resolved:** 30-03-2017 02:01
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Validate selecting single/multiple tests to run


---

#### `RPAMT-144` — Create separate CTLE controls for Near end and Far end Eye measurements

- **Type:** Improvement
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 27-03-2017 02:33
- **Updated:** 14-09-2023 12:30
- **Resolved:** 29-03-2017 23:24
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> We need separate CTLE controls in Global panel for Near end and Far end Eye measurements


---

#### `RPAMT-143` — Results > Preference > Group by Test should be the default option

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 27-03-2017 00:03
- **Updated:** 14-09-2023 12:30
- **Resolved:** 29-03-2017 23:23
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Results > Preference > Group by Test should be the default option


---

#### `EPAMT-316` — Changing optical source from CH1 to CH3 throws validation error popup

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 31-03-2017 04:18
- **Updated:** 14-09-2023 12:41
- **Resolved:** 31-03-2017 04:48
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Changing optical source from CH1 to CH3 throws validation error popup


---

#### `EPAMT-282` — Add Compliance/User Defined Mode drop down control in DUT panel

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 14-03-2017 23:01
- **Updated:** 14-09-2023 10:32
- **Resolved:** 15-03-2017 02:22
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> User should be able to select Compliance/User Defined mode from DUT panel


---

#### `EPAMT-297` — Support optical modules based on compliance and user defined mode

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 15-03-2017 23:01
- **Updated:** 14-09-2023 10:32
- **Resolved:** 17-03-2017 05:20
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Compliance: 80C10,15,16,17 and 18
> User Defined: 80C11,12,13 and 14
>
> Think about adding them in SequentialOrder.xml file


---

#### `RPAMT-141` — Implement Target BER and Mask Width parameters in Global panel

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 15-03-2017 22:55
- **Updated:** 13-09-2023 18:46
- **Resolved:** 27-03-2017 02:27
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Implement Target BER and Mask Width parameters in Global panel


---

#### `RPAMT-139` — Implementation of Calibration functionality

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 15-03-2017 21:58
- **Updated:** 13-09-2023 18:46
- **Resolved:** 10-05-2017 03:11
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Implementation of Calibration functionality


---

#### `EPAMT-317` — 80C18 module supports two channels (CH1&CH2 or CH3&CH4). Populate accordingly

- **Type:** Improvement
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 04-04-2017 23:23
- **Updated:** 14-09-2023 12:41
- **Resolved:** 06-04-2017 22:53
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> 80C18 module supports two channels (CH1&CH2 or CH3&CH4). Populate accordingly in acquisition panel source selection drop down.


---

#### `RPAMT-147` — Acquisition panel shows Differential channel selection on app launch

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 04-04-2017 23:06
- **Updated:** 14-09-2023 12:30
- **Resolved:** 04-04-2017 23:14
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Acquisition panel shows Differential channel selection on app launch.
> But we support only Single Ended probe type.


---

#### `RPAMT-146` — Clicking same radio button twice for Mask Width controls throws error popup

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 04-04-2017 04:52
- **Updated:** 14-09-2023 12:30
- **Resolved:** 04-04-2017 23:13
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Clicking same radio button twice for Mask Width controls throws error popup


---

#### `RCAUIT-542` — Source selection grid not available in Acquisition panel

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 03-04-2017 03:39
- **Updated:** 14-09-2023 12:32
- **Resolved:** 04-04-2017 03:29
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Source selection grid is not available in Acquisition panel.
> Also remove Deskew alert option.


---

#### `EPAMT-166` — Data Rate dropdown shows blank entry which crashes the app on selecting it.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 23-01-2017 23:13
- **Updated:** 14-09-2023 12:42
- **Resolved:** 25-01-2017 01:01
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> On launching the application, Data Rate drop down shows blank entry which crashes the app on selecting it.


---

#### `EPAMT-168` — Remove SER and add Histogram Width in global panel

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 09-02-2017 00:11
- **Updated:** 14-09-2023 10:32
- **Resolved:** 13-02-2017 01:00
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Remove SER and add Histogram Width in global panel


---

#### `ECAUIT-203` — Font size is different

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** JPALADIY
- **Created:** 02-01-2017 03:31
- **Updated:** 14-09-2023 12:42
- **Resolved:** 11-01-2017 21:28
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Actual Result:
> Header font size is different in two diff panel (i.e. Test Selections, Acquisition)
> 'Calibrations' button text is bold.
>
> Expected Result:
> Font size should be same.
> Button properties should be same.


---

#### `EPAMT-17` — UI: Rename app to "TekExpress 400G-TXO"

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 22-12-2016 01:16
- **Updated:** 14-09-2023 10:32
- **Resolved:** 01-01-2017 22:02
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Rename app to "TekExpress 400G-TXO"


---

#### `RPAMT-99` — Change Population Limit minimum limit value dynamically based on Pattern Length and several calculations

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 14-03-2017 00:05
- **Updated:** 13-09-2023 18:46
- **Resolved:** 14-03-2017 22:34
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Change Population Limt minimum limit value dynamically based on Pattern Length and several calculations.
>
> Minimum value for population limit in free run is a function of pattern length, samples per UI and some additional factors (required for JNB jitter and noise computation).
>
> It is computed as
>
> Mi… [truncated]


---

#### `EPAMT-127` — App should provide option for storing the attenuator value and compensate during every run

- **Type:** Story
- **Status:** Closed
- **Priority:** Major
- **Reporter:** kganesh
- **Created:** 22-12-2016 22:38
- **Updated:** 14-09-2023 10:32
- **Resolved:** 13-02-2017 00:58
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> TekExpress 400G-TXO app should provide option for storing the attenuator value and compensate during every run


---

#### `EPAMT-110` — TekExpress 400G-TXO app should support 80C10C / 80C15 / 80C17 / 80C18 optical modules

- **Type:** Story
- **Status:** Closed
- **Priority:** Major
- **Reporter:** kganesh
- **Created:** 22-12-2016 22:30
- **Updated:** 14-09-2023 10:32
- **Resolved:** 27-04-2017 01:44
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> TekExpress 400G-TXO app should support 80C10C / 80C15 / 80C17 / 80C18 optical modules


---

#### `RCAUIT-370` — Plot panel related work

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 15-06-2016 01:54
- **Updated:** 14-09-2023 07:59
- **Resolved:** 28-07-2016 01:53
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Plot panel related work


---

#### `RCAUIT-355` — Selecting a plot name from plot drop down is not updating corresponding plot properly

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 02-06-2016 04:24
- **Updated:** 14-09-2023 12:04
- **Resolved:** 03-06-2016 01:28
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Recall or run a session which produces more than one plot in plot panel.
> Now in plot panel, selecting a plot name from plot drop down is not updating corresponding plot properly. We saw only one plot line.


---

#### `RXGKRT-29` — TekExpress 10G-KR application is not generating the report in .csv format

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** JPALADIY
- **Created:** 24-05-2016 23:13
- **Updated:** 14-09-2023 13:57
- **Resolved:** 27-03-2018 03:53
- **Resolution:** Will Not Fix
- **Labels:** UI

**Description (verbatim):**

> Steps to Reproduce:
>
> 1. Configure the DUT.
> 2. Launch the TekExpress 10G-KR application.
> 3. Select test.
> 4. Go to Report tab.
> 5. Select .csv as report type.
>
> Actual Result : TekExpress 10-KR application is not generating the report.
>
> Expected Result : After completion of test process the report shall… [truncated]


---

#### `RCAUIT-457` — Record Length name should be different for CAUI4 and KR4/CR4

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 28-07-2016 02:04
- **Updated:** 14-09-2023 07:59
- **Resolved:** 28-07-2016 03:19
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Record Length name should be different for CAUI4 and KR4/CR4
> - CAUI4 - RL for Eye
> - KR4/CR4 - RL for Jitter


---

#### `RCAUIT-336` — Changing the Probe Type causes a flickering

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 10-05-2016 01:49
- **Updated:** 14-09-2023 12:04
- **Resolved:** 11-05-2016 04:45
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Changing from Single Ended to Differential and Vice versa causes a flickering in CAUI4-TP4a, KR4 and CR4


---

#### `RCAUIT-352` — Error popup while clicking Custom CTLE Browse button if path not exist

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 18-05-2016 03:42
- **Updated:** 14-09-2023 12:04
- **Resolved:** 18-05-2016 05:31
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Clicking Custom CTLE Browse button  throws error popup if <install folder>\Lib\\CTLE Filters\\Custom does not exist


---

#### `RCAUIT-451` — Add Group by Test Name/Results in Reports panel

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 26-07-2016 23:13
- **Updated:** 14-09-2023 07:59
- **Resolved:** 27-07-2016 03:56
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Add Group by Test Name/Results in Reports panel


---

#### `RCAUIT-430` — TekExpress 100G TXE version information missing when we check about TekExpress

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** pjoshi
- **Created:** 19-07-2016 21:10
- **Updated:** 14-09-2023 12:04
- **Resolved:** 21-07-2016 01:58
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> TekExpress 100G-TXE version information missing when we do about TekExpress in application.
> Please find the attached screen shot.


---

#### `RCAUIT-427` — Rename app to "TekExpress 100G-TXE"

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 18-07-2016 01:23
- **Updated:** 14-09-2023 07:59
- **Resolved:** 18-07-2016 04:06
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Rename app to "TekExpress 100G-TXE"


---

#### `RCAUIT-338` — Multi file selection for Custom Filter File in CAUI4 Global panel

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 13-05-2016 05:26
- **Updated:** 14-09-2023 07:59
- **Resolved:** 24-05-2016 03:38
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Design and develop UI dialog window for multi file selection for Custom Filter File in CAUI4 Global panel


---

#### `RCAUIT-356` — Support Ref Level parameters in Global panel UI for CAUI4

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 03-06-2016 01:31
- **Updated:** 14-09-2023 07:59
- **Resolved:** 03-06-2016 05:41
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Support Ref Level parameters in Global panel UI for CAUI4


---

#### `DPHYX-973` — Assign default text label to empty file fields and provide clear option

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 10-03-2016 21:49
- **Updated:** 14-09-2023 08:29
- **Resolved:** 10-03-2016 23:49
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Assign default text label to empty file fields (HS and LP base pattern, filter file, correction files and S param) and provide clear option


---

#### `ART-39` — GUI Manual Testing on Sandy

- **Type:** Story
- **Status:** Closed
- **Priority:** Major
- **Reporter:** VMALLYAU
- **Created:** 14-02-2016 21:46
- **Updated:** 14-09-2023 09:10
- **Resolved:** 14-02-2016 23:50
- **Resolution:** Done
- **Labels:** Manual, SQE, UI

**Description (verbatim):**

> * Perform GUI Manual testing on Sandy build
> * Perform GUI Exploratory testing on Sandy build


---

#### `DPHYX-889` — Un-support extension format in S-parameter.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** skumbha
- **Created:** 14-02-2016 21:42
- **Updated:** 14-09-2023 12:16
- **Resolved:** 01-03-2016 02:22
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Scenario 1 
>
> Steps:
> 1. Launch the SourceXpress.
> 2. Go to High Speed Jitter and enable the embed channel.
> 3. click on S-parameter and select file type as "S2P"
> 4. Browse S4P file.
>
> Observation:
>
> 1. Extension showing in browse path "S2P Files (.s2p), but it is supporting to load S4P file.
>
> Scenario 2… [truncated]


---

#### `DPHYX-907` — UI and PI implementation of Apply Dp/Dn to LP Noise

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 15-02-2016 21:14
- **Updated:** 14-09-2023 08:29
- **Resolved:** 15-02-2016 21:17
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> UI and PI implementation of Applly Dp/Dn to LP Noise


---

#### `BRR-483` — "USE Anyway" option is not woking

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** jdomadiy
- **Created:** 10-02-2016 02:43
- **Updated:** 14-09-2023 12:50
- **Resolved:** 11-08-2017 03:39
- **Resolution:** Fixed
- **Labels:** Benz_IIa, Functional, UI

**Description (verbatim):**

> * In some case, f the measurement Signal Validation use to pop up the message as attached.
> * when "Use Anyway"  option is selected, Measurement use to SKIP the test.
> * Find attached session files and Signals @ \\tekiadm1\wce\proj\bg_02\SPL\BRR\TestVOE\10-Feb2016\UseAnyWay


---

#### `BRR-385` — Test Description need to update with BRR Ver 3.2 Specification

- **Type:** Story
- **Status:** Closed
- **Priority:** Major
- **Reporter:** jdomadiy
- **Created:** 13-01-2016 02:59
- **Updated:** 13-09-2023 20:38
- **Resolved:** 20-01-2016 02:30
- **Resolution:** Done
- **Labels:** Measurement, UI

**Description (verbatim):**

> Test Description need to update with BRR Ver 3.2 Specification


---

#### `CPHYX-1126` — AWG Amp & Offset controls should be a label instead of checkbox

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 22-02-2016 23:00
- **Updated:** 14-09-2023 12:28
- **Resolved:** 08-03-2016 02:10
- **Resolution:** Fixed
- **Components:** User Interface
- **Labels:** UI

**Description (verbatim):**

> Preferences > "AWG Amp & Offset controls" should be a label instead of check box as these controls are always applied irrespective of the state of the checkbox.


---

#### `DPHYX-924` — AWG Amp & Offset controls should be a label instead of checkbox

- **Type:** Improvement
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 22-02-2016 22:59
- **Updated:** 14-09-2023 12:16
- **Resolved:** 25-02-2016 03:26
- **Resolution:** Fixed
- **Components:** User Interface
- **Labels:** UI

**Description (verbatim):**

> Preferences > "AWG Amp & Offset controls" should be a label instead of check box as these controls are always applied irrespective of the state of the checkbox.


---

#### `DPHYX-841` — Slave Connection Message is showing two times in "Log View"

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** skumbha
- **Created:** 01-02-2016 20:05
- **Updated:** 14-09-2023 12:16
- **Resolved:** 02-02-2016 00:11
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Steps:
> 1. Launch the SourceXpress.
> 2. Select Plug-in as "DPHYXpress".
> 3. Go to Preference and select Compile and assign.
> 4. Enable the Slave and give some IP Address.
> 5. Click on Connect.
>
> Observation:
>
>   In Log View...Slave Connection Message is showing two times.
>
> Note: For Reference, find the .pn… [truncated]


---

#### `BRR-415` — Tx_Distortion's Configuration does not require LP Filter

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** jdomadiy
- **Created:** 21-01-2016 01:03
- **Updated:** 14-09-2023 12:50
- **Resolved:** 01-03-2016 02:05
- **Resolution:** Fixed
- **Labels:** Algo, UI

**Description (verbatim):**

> Tx_Distortion's measurement test does not require LP Filter.
> So, we can remove Configuration-->Analyze --> Enable LP filter


---

#### `BRR-414` — Tx_Distortion: User define configuration Not applicable

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** jdomadiy
- **Created:** 21-01-2016 00:57
- **Updated:** 14-09-2023 12:50
- **Resolved:** 01-03-2016 02:06
- **Resolution:** Fixed
- **Labels:** Manual, UI

**Description (verbatim):**

> In Tx_Distortion test measurement configuration, User define mode (UDM) is not application for "Average" and Hi Resolution.
>
> Need to discuss, If we want to give Record Length configuration, which take minimum RL in UDM  2M and goes as per Scope+BRR application performance.


---

#### `TEKEXPFW-1402` — CAUI4: DUT and Acquistion panel designers are not opening

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 10-03-2016 01:12
- **Updated:** 14-09-2023 11:59
- **Resolved:** 01-09-2016 03:22
- **Resolution:** Fixed
- **Components:** User Interface
- **Labels:** UI

**Description (verbatim):**

> CAUI4: DUT and Acquistion panel designers are not opening
> It says "TekExpressSwitchDialog" or its dependencies are missing.
> Call Stack attached


---

#### `DPHYX-923` — Through PI-->Correction file Slave Ch1 & Ch2 is in disable state.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** skumbha
- **Created:** 22-02-2016 03:00
- **Updated:** 14-09-2023 12:16
- **Resolved:** 24-02-2016 21:57
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Steps:
>
> 1. Launch the SourceXpress.
> 2. Select Plug-in as Dphy and go to compile settings tab.
> 3. Click on compile and assign radio button and enable the slave.
> 4. Give some valid IP address and connect.
> 5. Enable Apply Correction File and enable both master and slave check boxes.
> 6. Disconnect slave… [truncated]


---

#### `DPHYX-881` — When Disable "Apply +ve signal to -ve Signal " in Filter file and S2P file Negative Signal browse should be in disable mode

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** skumar5
- **Created:** 12-02-2016 00:39
- **Updated:** 14-09-2023 12:16
- **Resolved:** 26-02-2016 00:49
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> 1.HS Jitter Tab
> 2.When Disable "Apply +ve signal to -ve Signal "  in Filter file and S2P file Negative Signal browse should be in accessible mode
>
> 3. If "Apply +ve signal to -ve Signal " is enable then Negative Signal browse path should be in disable mode.


---

#### `DPHYX-783` — Remove S6P support

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 19-01-2016 00:16
- **Updated:** 14-09-2023 08:29
- **Resolved:** 20-01-2016 01:27
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Remove S6P support including UI and PI


---

#### `DPHYX-848` — Could not select any LP file in the D-PHY LP tab.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** krajendr
- **Created:** 31-01-2016 21:36
- **Updated:** 14-09-2023 12:16
- **Resolved:** 02-02-2016 22:06
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Could not select any LP file in the D-PHY LP tab.


---

#### `DPHYX-715` — Thevenin low value is taking more than Thevinin High value (Broken)

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** skumar5
- **Created:** 08-12-2015 22:01
- **Updated:** 14-09-2023 12:16
- **Resolved:** 10-12-2015 03:21
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> 1.LP Signal mode 
> 2.Voltage levels
> 3. Thevinin high and low value should have 200mV dependencies 
>
> but its taking (low as 700mv and 500mv as high )  
>
> Expected: high >=Low+200mV


---

#### `DPHYX-675` — UI and PI for separate Data and Clock VCM

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 24-11-2015 22:45
- **Updated:** 14-09-2023 08:29
- **Resolved:** 25-11-2015 01:05
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> UI and PI for separate Data and Clock VCM


---

#### `DPHYX-674` — UI and PI for separate Data and Clock VOD

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 24-11-2015 22:06
- **Updated:** 14-09-2023 08:29
- **Resolved:** 25-11-2015 01:04
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> UI and PI for separate Data and Clock VOD


---

#### `DPHYX-673` — Incorrect file format for "S-parameter" files.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** skumbha
- **Created:** 23-11-2015 20:44
- **Updated:** 14-09-2023 12:16
- **Resolved:** 25-11-2015 00:58
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Steps:
>
> 1. Launch the SourceXpress.
> 2. Select Waveform Plug-in type as "C-Phy" or "D-Phy".
> 3. Go to "High Speed Jitter" and select s-parameter.  
> 4. Load the file "S4P Differential", and click on browse the path.
>
> Observation:
>    File format is showing as "S4P Single Ended Files (.s4p).
>
> Note: Pleas… [truncated]


---

#### `DPHYX-672` — D-PHY Express contains Symbol rate but contains units as bps.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** krajendr
- **Created:** 22-11-2015 20:36
- **Updated:** 14-09-2023 12:16
- **Resolved:** 02-12-2015 03:26
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> D PHY Express contains Symbol rate but contains units as bps.
>
> D-PHY Express Symbols->Symbol Rate->gives the unit as bits per sec.
>
> Either the units has to be changed to sps(Symbols Per sec) or heading should be changed to Bit rate.


---

#### `MIPIMPHYTX-1137` — Incorporate UIFT Review comments

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 30-09-2015 02:15
- **Updated:** 14-09-2023 07:53
- **Resolved:** 30-09-2015 02:18
- **Resolution:** Done
- **Components:** User Interface
- **Labels:** UI

**Description (verbatim):**

> Usability comments:
> DUT Panel:
> 1. Make the view and version combo of the same size.
> 2. Label DUT Operation Mode must be in regular font
> 3. DUT Operation Mode along with its options should be grouped in a group box
> 4. Radio option of DUT Operation Mode should be equally distributed
> 5. Label Amplitude… [truncated]


---

#### `MIPIMPHYTX-1120` — Revert back license check and reuse the feature from FW for BER Contour test

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 23-09-2015 01:56
- **Updated:** 14-09-2023 07:54
- **Resolved:** 23-09-2015 02:40
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> BER Eye Contour test has pre-requisite on DJN license number 136.
> Currently we are handling lic check on app launch and enable/disable the test instead of.hiding the test as provided by FW
> Revert back this change in app side and let the FW take care of license check and show/hide the test.


---

#### `DPHYX-713` — Text boxes are accepting long floating values

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** skumbha
- **Created:** 03-12-2015 22:30
- **Updated:** 14-09-2023 12:16
- **Resolved:** 10-12-2015 03:26
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Steps:
>
> 1. Launch the SourceXpress.
> 2. Select Plug in as DPHY.
> 3. Type some resolution value in text boxes.
>
> Observation:
>
>   Text boxes are accepting resolution values in almost in all the controls.
>
>  Note: For reference please find .png files.


---

#### `DPHYX-970` — Switch to Log View when Compile started.

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 09-03-2016 22:43
- **Updated:** 14-09-2023 08:29
- **Resolved:** 09-03-2016 22:44
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Switch to Log View when Compile started.


---

#### `CPHYX-811` — CLONE - Incorrect file format for "S-parameter" files.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** skumar5
- **Created:** 27-11-2015 03:15
- **Updated:** 14-09-2023 12:28
- **Resolved:** 30-11-2015 01:07
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Steps:
>
> 1. Launch the SourceXpress.
> 2. Select Waveform Plug-in type as "C-Phy".
> 3. Go to "High Speed Jitter" and select s-parameter.  
> 4. Load the file "S4P Differential", and click on browse the path.
>
> Observation:
>    File format is showing as "S4P Single Ended Files (.s4p).
>
> Note: Please find the… [truncated]


---

#### `MIPIMPHYTX-879` — Global Settings-Voltage Term source naming change.

- **Type:** Improvement
- **Status:** Closed
- **Priority:** Major
- **Reporter:** krajendr
- **Created:** 03-08-2015 03:58
- **Updated:** 14-09-2023 12:41
- **Resolved:** 07-08-2015 05:34
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Global Settings-Voltage Term source naming change to Voltage Term setting.


---

#### `MIPIMPHYTX-941` — Configuration parameters for most of the SYS tests are showing empty value

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 05-08-2015 02:36
- **Updated:** 14-09-2023 12:41
- **Resolved:** 05-08-2015 21:58
- **Resolution:** Fixed
- **Components:** User Interface
- **Labels:** UI

**Description (verbatim):**

> Configuration parameters for most of the SYS tests are showing empty value


---

#### `MIPIMPHYTX-940` — Add Clock Source and Clock Lane to Sys mode

- **Type:** Improvement
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 05-08-2015 00:29
- **Updated:** 14-09-2023 12:41
- **Resolved:** 05-08-2015 00:44
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Add Clock Source and Clock Lane to Sys mode in DUT panel (for Test 1.3.2)


---

#### `DPHYX-80` — SX Migration: HS Jitter Tab implementation

- **Type:** New Feature
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 11-06-2015 00:30
- **Updated:** 14-09-2023 08:29
- **Resolved:** 15-06-2015 04:11
- **Resolution:** Done
- **Components:** User Interface
- **Labels:** UI

**Description (verbatim):**

> High Speed Jitter Tab migration from stand alone app to Source Express plugin


---

#### `MIPIMPHYTX-817` — [v6.2.0.279] Application gives exception while trying to edit the values in the text boxes when no tests are selected.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** SHRK
- **Created:** 04-06-2015 21:35
- **Updated:** 14-09-2023 12:41
- **Resolved:** 08-06-2015 01:12
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Steps:
> 1.Install and launch the application.
> 2.Select any signal type.
> 3.On view drop down select advanced option.
> 4.On test selection panel, deselect all tests.
> 5.On config panel select user defined mode, go to the measurement tab and try to edit values in any of the edit boxes.
> Application gives u… [truncated]


---

#### `MIPIMPHYTX-1039` — Performance optimization

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 04-09-2015 03:32
- **Updated:** 14-09-2023 07:54
- **Resolved:** 07-09-2015 00:58
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Performance improvements required in following cases:
> Burst -> Continuous
> HS -> PWM suite
> Most of the radio button clicks in DUT panel
> Some of the general parameters change event


---

#### `MIPIMPHYTX-966` — Remove check box from filter selection for Test 1.1.7 Maximum differential eye opening

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** SKUMAR4
- **Created:** 11-08-2015 04:06
- **Updated:** 14-09-2023 12:41
- **Resolved:** 12-08-2015 22:34
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> select test 1.1.7
> click configure
> select eye parameter tab
> remove check box for the filter selection
>
> &
>
> Add check box for "Enable high-performance eye rendering" in Mask file path tab for "Test 1.1.6 and 1.1.7"


---

#### `MIPIMPHYTX-955` — Add "Save Waveform" check box entry for 1.1.6 and 1.1.7 tests

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 07-08-2015 04:15
- **Updated:** 14-09-2023 07:54
- **Resolved:** 07-08-2015 05:25
- **Resolution:** Done
- **Components:** User Interface
- **Labels:** UI

**Description (verbatim):**

> Add "Save Waveforms" checkbox entry for 1.1.6 and 1.1.7 tests. Default unchecked.


---

#### `DPHYX-110` — check box is clickable from other part of the UI (accessible from horizontal span of CheckBox)

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** skumar5
- **Created:** 10-08-2015 04:13
- **Updated:** 14-09-2023 12:16
- **Resolved:** 19-08-2015 03:34
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Rather than clicking on check box click somewhere around,this leads to check the check box- (This is not the expected behavior)
>
> i. High Speed Tab->HS Clock Through Marker
> ii. High Speed Burst Tab->Create Burst
> iii. Preferences->Include Deskew Pattern


---

#### `DPHYX-79` — Initial code base for DPHYXpress Sx Plugin

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 03-06-2015 01:02
- **Updated:** 14-09-2023 08:29
- **Resolved:** 03-06-2015 23:07
- **Resolution:** Done
- **Components:** User Interface
- **Labels:** UI

**Description (verbatim):**

> Initial code base for DPHYXpress Sx Plugin


---

#### `DPHYX-78` — SX Migration: High Speed Tab

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 03-06-2015 01:01
- **Updated:** 14-09-2023 08:29
- **Resolved:** 11-06-2015 00:31
- **Resolution:** Done
- **Components:** User Interface
- **Labels:** UI

**Description (verbatim):**

> High Speed Tab migration from stand alone app to Source Express plugin


---

#### `MIPIMPHYTX-838` — Report update mode is blank in results panel for all suites

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 05-07-2015 23:54
- **Updated:** 14-09-2023 12:41
- **Resolved:** 06-07-2015 01:04
- **Resolution:** Fixed
- **Components:** User Interface
- **Labels:** UI

**Description (verbatim):**

> Reports panel > Report Update Mode panel is blank instead of having New, Append and Replace options


---

#### `MIPIMPHYTX-830` — Revert back Terminated and NonTerminated options for all suites

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 22-06-2015 23:04
- **Updated:** 14-09-2023 12:41
- **Resolved:** 23-06-2015 01:27
- **Resolution:** Fixed
- **Components:** User Interface
- **Labels:** UI

**Description (verbatim):**

> Revert back Terminated and NonTerminated options for all suites in DUT panel


---

#### `DPHYX-83` — High Speed Burst implementation

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 21-06-2015 23:28
- **Updated:** 14-09-2023 08:29
- **Resolved:** 25-06-2015 21:16
- **Resolution:** Done
- **Components:** User Interface
- **Labels:** UI

**Description (verbatim):**

> Implement High Speed Burst tab


---

#### `CPHYX-601` — Implement Usability Evaluation feedback

- **Type:** Requirement
- **Status:** Closed
- **Priority:** Major
- **Reporter:** REKB
- **Created:** 23-08-2015 20:16
- **Updated:** 13-09-2023 20:19
- **Resolved:** 14-10-2015 01:25
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Evaluation is happening on daily basis.
> This is a ongoing task until evaluation is complete and the task will be open until the comments are implemented.
>
> Please find the attached document for Evaluation feedback


---

#### `CPHYX-594` — Handling master and slave sequencing corner use case

- **Type:** Requirement
- **Status:** Closed
- **Priority:** Major
- **Reporter:** REKB
- **Created:** 19-08-2015 03:56
- **Updated:** 13-09-2023 20:19
- **Resolved:** 19-08-2015 03:58
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Whenever the below configuration changes , there should be pop-up message to the user to delete the existing sequence and start a fresh compile and there  should be an option to abort the compilation.With a yes and no button
>
> 1)Waveform types changes between consecutive compiles of master and slave… [truncated]


---

#### `CPHYX-558` — Slave AWG Support to compile and send to waveforms

- **Type:** New Feature
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 23-07-2015 04:55
- **Updated:** 13-09-2023 20:19
- **Resolved:** 30-07-2015 00:50
- **Resolution:** Done
- **Components:** User Interface
- **Labels:** UI

**Description (verbatim):**

> Preference Panel: Slave AWG Support to compile and send to waveforms


---

#### `MIPIMPHYTX-849` — Custom RF Switch Design and Implementation

- **Type:** Improvement
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 22-07-2015 00:02
- **Updated:** 14-09-2023 14:04
- **Resolved:** 03-08-2015 21:46
- **Resolution:** Will Not Fix
- **Labels:** UI

**Description (verbatim):**

> Custom RF Switch Design and Implementation
> - Support for 2-port relays
> - Support for up to 7 lanes and 8 lane configuration
> - Validation on OK button click


---

#### `DPHYX-82` — Compiler issues due to interface change in latest SX

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 16-06-2015 23:24
- **Updated:** 14-09-2023 08:29
- **Resolved:** 17-06-2015 01:59
- **Resolution:** Done
- **Components:** User Interface
- **Labels:** UI

**Description (verbatim):**

> Compiler issues due to interface change in latest SX 5.0.0.45


---

#### `MIPIMPHYTX-802` — [v6.2.0.272] Application gives unhandled exception when user tries to change the channels configuration on the acquisition panel

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** SHRK
- **Created:** 27-05-2015 03:14
- **Updated:** 14-09-2023 12:41
- **Resolved:** 28-05-2015 22:41
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Steps:
> 1.Install and launch the application.
> 2.Click on the acquisition panel and select CH4 for Lane0- 
> 3.Now select CH2 for Lane0+.
> 4.Application gives Unhandled exception.


---

#### `DPHYX-1206` — Error codes are not working in Dphyxpress.

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** skumbha
- **Created:** 16-11-2016 03:32
- **Updated:** 14-09-2023 08:28
- **Resolved:** 16-11-2016 23:26
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Error codes are not working in Dphyxpress. 
>
> Case1: With embed channel filter file and S-parameter.
>
>  Load any file other than “.flt” format on FLT files, it supposed to get “9406” error code. but here getting “ID 1” error code, after click on ok application is closing.
>
> Case2: High speed > Base Pat… [truncated]


---

#### `ECAUIT-136` — Remove Signal validation block from acquisition panel

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 13-11-2016 22:28
- **Updated:** 13-09-2023 19:58
- **Resolved:** 16-11-2016 02:20
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Remove Signal validation block from acquisition panel. Show Acquire parameters radio button should be visible.


---

#### `MIPIMPHYTX-758` — Prepare Length tab for Test 1.1.3-HS-TX PREPARE Length is blank

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** nnarasim
- **Created:** 08-05-2015 02:16
- **Updated:** 14-09-2023 12:09
- **Resolved:** 02-06-2015 23:22
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Steps:
>
> 1.Launch the application
> 2.Select signal type as HS
> 3.Select measurement 1.1.3.
> 4.click on configure button
> 5.Click on Prepare Length tab
>
> Observe that blank screen is seen


---

#### `MIPIMPHYTX-793` — When SYS signal type is selected Invalid Prameter Error is seen

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** nnarasim
- **Created:** 25-05-2015 22:05
- **Updated:** 14-09-2023 12:41
- **Resolved:** 29-05-2015 03:26
- **Resolution:** Fixed
- **Components:** User Interface
- **Labels:** UI

**Description (verbatim):**

> Steps:
>
> 1.Launch the application
> 2.Change the signal type from HS to SYS.
>
> Observation:
> Invalid Parameter Error is seen


---

#### `HDMI-811` — HDMXpress: UI issues while saving a configuration.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** satk
- **Created:** 09-04-2015 07:51
- **Updated:** 14-09-2023 12:38
- **Resolved:** 22-04-2015 04:07
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> How to Reproduce?
> Issue 1. Do all UI configurations, set Label to something other than HDM, then click on Add to list option present in standard toolbar, configuration gets saved with default HDM name.
>
> Issue 2: Do all UI configurations, set Label to "Satish", save the configuration using Add to lis… [truncated]


---

#### `MIPIMPHYTX-681` — Update UIS

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 07-04-2015 00:15
- **Updated:** 14-09-2023 07:54
- **Resolved:** 07-04-2015 01:47
- **Resolution:** Done
- **Components:** User Interface
- **Labels:** UI

**Description (verbatim):**

> Leo UIS has to be updated.


---

#### `MIPIMPHYTX-676` — Eye measurement related UI changes

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 31-03-2015 01:50
- **Updated:** 14-09-2023 07:54
- **Resolved:** 01-04-2015 03:36
- **Resolution:** Done
- **Components:** User Interface
- **Labels:** UI

**Description (verbatim):**

> 1. Test 1.1.6 - revert all Eye parameters related changes.
> 2. Test 1.1.6 visible when Gear 1 or 2 is selected.
> 3. Test 1.1.7 visible when Gear 3 selected.
> 4. Test 1.1.6 and 1.1.7 not visible in Pre recorded mode.


---

#### `MIPIMPHYTX-765` — SYS suite realated UI changes

- **Type:** New Feature
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 14-05-2015 01:29
- **Updated:** 14-09-2023 07:54
- **Resolved:** 03-08-2015 04:03
- **Resolution:** Done
- **Components:** User Interface
- **Labels:** UI

**Description (verbatim):**

> SYS suite realated UI changes


---

#### `MCT-361` — F1 key or Help menu does not bring up help file

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 01-04-2015 23:07
- **Updated:** 14-09-2023 12:55
- **Resolved:** 01-04-2015 23:24
- **Resolution:** Fixed
- **Components:** User Interface
- **Labels:** UI

**Description (verbatim):**

> I expected F1 and Help from About will show the help file, but it didn’t work.


---

#### `HDMI-681` — [HDMXpress] UI Controls are not consistent

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** SKUMAR2
- **Created:** 06-03-2015 03:46
- **Updated:** 14-09-2023 11:13
- **Resolved:** 26-03-2015 21:06
- **Resolution:** Other
- **Labels:** UI

**Description (verbatim):**

> Refer the attached controls and corresponding UI control Properties: AutomationId and Name
> Unique name properties should be provided


---

#### `HDMI-667` — HDMXpress: Default CJ and DJ values have to according to frequency of the pattern

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** satk
- **Created:** 02-03-2015 10:02
- **Updated:** 14-09-2023 12:39
- **Resolved:** 05-03-2015 22:46
- **Resolution:** Fixed
- **Labels:** algo, UI

**Description (verbatim):**

> Default CJ and DJ values have to according to frequency of the pattern. Currently default values of CJ and DJ are 0.3 and 0.6. But this is not fixed. These values are different for different data rates.


---

#### `BRR-318` — Acquisitions tab: Need to update Acqisation parameter as per Ver 3.2

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** jdomadiy
- **Created:** 22-12-2015 02:44
- **Updated:** 14-09-2023 12:50
- **Resolved:** 07-01-2016 21:44
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> * Select all measurement
> * Go to Acquisitions tab:
> *  Select 'Show Acquire Parameter' 
> All the acMeasurement in Acquisition tab need to  update  as per Ver 3.2


---

#### `BRR-126` — Disable Upload logo option will not remove logo at reports window

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** salapart
- **Created:** 26-10-2015 02:08
- **Updated:** 14-09-2023 13:38
- **Resolved:** 25-11-2015 22:00
- **Resolution:** Duplicate
- **Labels:** Report, UI

**Description (verbatim):**

> Attached screen capture for your reference.
>
> Though I disable upload logo option we can stil see logo I choosen at test report at attached screen capture.


---

#### `BRR-157` — Test Description is showing previous selected test description

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** jdomadiy
- **Created:** 03-11-2015 18:41
- **Updated:** 14-09-2023 13:52
- **Resolved:** 01-12-2015 01:17
- **Resolution:** Not a Defect
- **Labels:** TekExpress4.0, UI

**Description (verbatim):**

> By Chris:
> Selected Tx Clk Frequency and deselected all other tests.  Test description did not track selected test but shows last highlight line. Note that this can create confusion for the user since the display shows Tx Clk. Frequency test selected but less obvious is the shading of the jitter test… [truncated]


---

#### `BRR-46` — UI- Unhandled exception on 5KB scopes

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** salapart
- **Created:** 05-10-2015 01:25
- **Updated:** 14-09-2023 12:50
- **Resolved:** 06-10-2015 03:34
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Instrument: MSo5034B
> TekScope firmware version: v7.5.1
> ----------------------------------------------------
> Installed BRR relased solution to public (v1.0.1.68) on scope MSO5034B
> Launch TekScope freshly
> Fron Analyze menu select BRR solution
> Observe there will be an exception which crashes BRR soluti… [truncated]


---

#### `DDRTFL-2098` — DRAM TX and RX common GUI update

- **Type:** Developer Story
- **Status:** Closed
- **Priority:** Major
- **Reporter:** sjhawar
- **Created:** 10-10-2023 03:08
- **Updated:** 22-02-2024 22:04
- **Resolved:** 18-10-2023 02:27
- **Resolution:** Done
- **Labels:** PLAE-Feedback

**Description (verbatim):**

> DRAM TX and RX common GUI update


---

#### `PCIEX-421` — Implement XMLs for Base Spec

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** SMAHADEV
- **Created:** 11-06-2014 23:01
- **Updated:** 14-09-2023 08:54
- **Resolved:** 02-04-2015 08:18
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Implement device and suite xmls for base and refclk specs.


---

#### `DPOJET-461` — Support Noise Bathtub Plot - UI Part

- **Type:** Story
- **Status:** Closed
- **Priority:** Major
- **Reporter:** SMAHADEV
- **Created:** 08-06-2014 23:47
- **Updated:** 14-09-2023 08:12
- **Resolved:** 20-06-2014 06:50
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Noise Bathtub part - UI portion story


---

#### `DPOJET-457` — Support 'BER Eye Contour' plot - UI part

- **Type:** Story
- **Status:** Closed
- **Priority:** Major
- **Reporter:** SMAHADEV
- **Created:** 06-06-2014 06:33
- **Updated:** 14-09-2023 08:12
- **Resolved:** 14-07-2014 02:53
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Only the UI portion for BER eye contour plot and noise bathtub plots


---

#### `TEKEXPFW-140` — Report panel check box test is getting truncated

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** SBHARATH
- **Created:** 06-06-2014 02:45
- **Updated:** 14-09-2023 12:54
- **Resolved:** 12-06-2014 03:59
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Report panel check box test is getting truncated


---

#### `DPOJET-441` — Refactor measurement code to enable Unit Testing - for Rn, Dn, Pn, DDN

- **Type:** Story
- **Status:** Closed
- **Priority:** Major
- **Reporter:** kulkarni
- **Created:** 05-06-2014 04:03
- **Updated:** 14-09-2023 08:12
- **Resolved:** 16-07-2014 07:12
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Refactor the measurement code in DPOJET mescore to remove dependency on Data Store obj for writing UT


---

#### `DPOJET-1192` — Pattern Type is getting set to wrong value under manual configuration

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** amohamme
- **Created:** 18-02-2015 04:00
- **Updated:** 14-09-2023 12:43
- **Resolved:** 20-02-2015 05:11
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Steps:
> ********
> 1> Launch DPOJET
> 2> Load "RT-EyeTutorial.wfm" in Ref1.
> 3> Add TJ@BER and TN@BER measurements in the same order.
> 4> Go to Configure, TN@BER1, RNDN, Manual, Arbitrary and 10UI.
> 5> Do single and obtain results. Both TJ@BER and TN@BER measurements gives results.
> 6> Now clear and do singl… [truncated]


---

#### `DPOJET-1189` — Target value shown in plot configuration is incorrect

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** amohamme
- **Created:** 17-02-2015 04:11
- **Updated:** 14-09-2023 12:43
- **Resolved:** 19-02-2015 01:52
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Steps:
> ********
> 1> Launch DPOJET
> 2> Add J2 and J9 measurements in the same order.
> 3> Add "BER Eye Contour" plot on J2 first and then J9 second.
> 4> Go to J2 measurement BER Eye Contour plot configuration, the target BER value is shown as (1E-9.6) which is incorrect. The correct value is 1E-2.6


---

#### `HDMI-621` — HDMIXPress: For HF2_3 test, If the user comes back to compliance, default values should be retained.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** satk
- **Created:** 13-02-2015 01:42
- **Updated:** 14-09-2023 12:39
- **Resolved:** 16-02-2015 01:20
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> In HF2_3 test, when the user selects Marginal radio button, he will get the option to edit the default values of CJ, DJ and cable emulator file used. So when the user comes back to Compliance mode by clicking on compliance radio button, all the default values should be retained.
> Also if the user aga… [truncated]


---

#### `HDMI-607` — HDMIXPress: Edit menu, View menu and System menu options are not functional

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** satk
- **Created:** 12-02-2015 00:29
- **Updated:** 14-09-2023 12:39
- **Resolved:** 16-02-2015 03:44
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Edit menu, View menu and System menu options are not functional. We have to refer the CPHYXpress application and implement accordingly.


---

#### `CPHYX-248` — Unhandled Exception when the user does a right click on WaveformList Area

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** REKB
- **Created:** 05-02-2015 00:59
- **Updated:** 14-09-2023 12:28
- **Resolved:** 16-04-2015 08:30
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Unhandled Exception when the user does a right click on WaveformList Area
>
> 1. Launch C-PhyExpress 63 
> 2.Right click on WaveformList header area.
> 3.An unhandled exception occurs.
>
> Please find the attachement


---

#### `DPOJET-1146` — Height@BER shows incorrect value when units are "Unit Amplitude"

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** amohamme
- **Created:** 04-02-2015 01:09
- **Updated:** 14-09-2023 12:43
- **Resolved:** 05-03-2015 02:45
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Steps:
> ********
> 1> Launch DPOJET
> 2> Load "RT-EyeTutorial.wfm"
> 3> Add Height@BER, PJ and Period measurements.
> 4> Change the Analysis method to "Jitter Only" 
> 5> Change the units to "Unit Intervals" and "Unit Amplitudes" in Preferences tab.
> 6> Run and obtain results.
> 7> See the Height@BER results. It… [truncated]


---

#### `DPOJET-1143` — Edges panel missing for most of the noise measurements

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** amohamme
- **Created:** 03-02-2015 01:45
- **Updated:** 14-09-2023 12:43
- **Resolved:** 04-02-2015 04:29
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> 1> Only TN@BER noise measurement contains "Signal Type" configuration. 
> Add "Signal Type" configuration to all other noise measurements including Height@BER measurement. Give the panel name as "Edges".
>
> 2> "Signal Type" configuration should be kept at left under "Bit Config" panel of TN@BER measurem… [truncated]


---

#### `DPOJET-1142` — "Composite Jitter Hist" should be disabled for Height@BER measurement for "Jitter Only" algorithm

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** amohamme
- **Created:** 02-02-2015 21:15
- **Updated:** 14-09-2023 12:43
- **Resolved:** 05-02-2015 23:51
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> 1> "Composite Jitter Hist" plot should be disabled for Height@BER measurement for both "Jitter Only" and "Jitter+Noise" algorithm
> 2> "Composite Noise Hist" plot should be enabled for Height@BER measurement for only "Jitter+Noise" algorithm.


---

#### `TEDIBCI-1332` — pdb(debug) files are copied to install location as part of installer

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 23-04-2018 23:12
- **Updated:** 14-09-2023 12:54
- **Resolved:** 01-05-2018 21:45
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> After installing latest build 10.0.1.112, 2 pdb (debug) files (TekExpress AppEmulator.pdb; TekExpress.pdb) are present in install location (C:\Program Files\Tektronix\TekExpress\TekExpress 400G-TXE). 
>
> These files should not be part of installer.


---

#### `DPOJET-959` — Enable 136 for AEs and customers with a time limit until Feb 10th

- **Type:** Issue
- **Status:** Closed
- **Priority:** Major
- **Reporter:** SMAHADEV
- **Created:** 24-11-2014 03:52
- **Updated:** 13-09-2023 20:00
- **Resolved:** 25-11-2014 23:37
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Enable 136


---

#### `DPOJET-769` — DPOJET returns truncated measurement name for instances above 10

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** shashirv
- **Created:** 04-09-2014 21:59
- **Updated:** 14-09-2023 12:15
- **Resolved:** 09-04-2015 09:05
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> DPOJET  returns RJ0 for RJ10, RJ1 for RJ11, RJ2 for RJ12…
> This issue is present on all measurements when the instance of the measurement is 10 or above. I think this issue will be there on both Win7 and WinXP versions of DPOJET.


---

#### `DP-9628` — [Garuda DP] Optimal CTLE value is not shown in the results panel or in report.

- **Type:** Issue
- **Status:** Closed
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 31-05-2023 21:54
- **Updated:** 27-02-2024 19:46
- **Resolved:** 08-09-2023 06:09
- **Resolution:** Done
- **Labels:** ClientApp-DP


---

#### `DPOJET-1096` — When Jitter radio button is selected, Breakdown of Noise is showing up

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** amohamme
- **Created:** 21-01-2015 01:52
- **Updated:** 14-09-2023 12:43
- **Resolved:** 29-01-2015 01:31
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Steps:
> ********
> 1> Launch DPOJET
> 2> Add TJ@BER, TN@BER Measurements in the same order
> 3> Save the setup file.
> 4> Select the Jitter radio button.
> 5> Now load the setup file and click on "i" button to see the Jitter tree. Instead of seeing jitter tree, you will see Noise tree which is incorrect.
> Refer… [truncated]


---

#### `DPOJET-794` — Jitter noise decomposition algorithm for Clock->Rise and Clock->Fall config

- **Type:** Story
- **Status:** Closed
- **Priority:** Major
- **Reporter:** SMAHADEV
- **Created:** 17-09-2014 05:07
- **Updated:** 14-09-2023 08:12
- **Resolved:** 02-12-2014 03:33
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Refer for more info: DPOJET-714 [Kauai_R2]: Risk Reduction Activity: Decide the Jitter noise decomposition algorithm for Clock->Rise and Clock->Fall config
>
> We should support only Clock->Both for the Jitter+Noise analysis.
> Customers who want Clock->Rising or Clock->Falling can switch to Jitter-only… [truncated]


---

#### `MCT-49` — Ability to select Ref and Math on acqusition

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** ashoka
- **Created:** 19-09-2014 03:54
- **Updated:** 14-09-2023 08:50
- **Resolved:** 24-09-2014 23:24
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> User needs the option to select REF1..REF4 and MATH1..MATH4 in acquisition panel.


---

#### `MCT-48` — Channel embeding Filter file configuraiton

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** ashoka
- **Created:** 19-09-2014 03:53
- **Updated:** 14-09-2023 08:50
- **Resolved:** 24-09-2014 05:04
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Need to expose 1 check box and 6 filter file selection in Global configuration panel. Parameter is added in XML file.
>
> Abhishek knows the details of parameter included and default values.


---

#### `DPOJET-827` — Release Criteria: Measure and merge code coverage from Unit Tests and System Tests

- **Type:** Story
- **Status:** Closed
- **Priority:** Major
- **Reporter:** 
- **Created:** 18-09-2014 06:32
- **Updated:** 14-09-2023 11:18
- **Resolved:** 22-04-2015 02:43
- **Resolution:** Other
- **Labels:** UI

**Description (verbatim):**

> To measure and merge code coverage from Unit Tests and System Tests:
> - Can be used to measure code coverage for various assemblies be it managed assembly or unmanaged.
> - Can be used to save reports.
> - Can be used from remote locations(Web App)


---

#### `PCIEX-672` — PDF as default for Reports

- **Type:** Improvement
- **Status:** Closed
- **Priority:** Major
- **Reporter:** SMAHADEV
- **Created:** 22-09-2014 01:33
- **Updated:** 14-09-2023 13:36
- **Resolved:** 08-10-2014 05:21
- **Resolution:** Duplicate
- **Labels:** UI

**Description (verbatim):**

> make pdf as default from current Mht


---

#### `DPOJET-774` — Standalone Deployment PKG for DPOJET

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** SMAHADEV
- **Created:** 10-09-2014 05:15
- **Updated:** 14-09-2023 08:12
- **Resolved:** 22-04-2015 03:16
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> DPOJET dep pkg should not install all client apps


---

#### `TEKEXPFW-372` — [CTM] All the available Device/Suite combinations are not available for user to select

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** SKUMAR2
- **Created:** 10-12-2014 23:11
- **Updated:** 14-09-2023 12:53
- **Resolved:** 11-12-2014 03:03
- **Resolution:** Fixed
- **Components:** User Interface
- **Labels:** UI

**Description (verbatim):**

> When Custom Test Manager is launched from Options menu
> Then Device/Suite Selection grid does not populate all the available Device/Suite Combinations
> ||Device Name||Suite Name||Available in Application||Shown on CTM||
> |TX-Device|Group1|Yes|Yes|
> |TX-Device|Group1 - 2Lane|Yes|No|
> |RX-Device|Group3|Yes… [truncated]


---

#### `TEKEXPFW-371` — [CTM] Click on Test Move arrow buttons on empty tests throws exception

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** SKUMAR2
- **Created:** 10-12-2014 23:05
- **Updated:** 14-09-2023 12:53
- **Resolved:** 11-12-2014 03:08
- **Resolution:** Fixed
- **Components:** User Interface
- **Labels:** UI

**Description (verbatim):**

> PreCondition: No Custom Tests exists
> Open Custom Test Manager from Options menu
> On the Left navigation panel, click on any of the arrow button provided to move custom test b/w Pre and Post Built-In tests
> Then and exception is thrown(attached)


---

#### `MCT-76` — Acquire option in CPHY Tx

- **Type:** Improvement
- **Status:** Closed
- **Priority:** Major
- **Reporter:** ashoka
- **Created:** 19-11-2014 00:56
- **Updated:** 14-09-2023 12:56
- **Resolved:** 20-11-2014 01:36
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Need to add one option in CPHY Essentials acquire panel. Details in attached image


---

#### `DPOJET-623` — Fix DPOJIT grammar package build issues with VS 2010/VS 2012

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** kulkarni
- **Created:** 16-07-2014 04:23
- **Updated:** 14-09-2023 08:12
- **Resolved:** 08-01-2015 06:13
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> To address request from Tabasco.
>
> Need to fix the issues observed earlier with VS 2010.
> Ensure the fix works on VS 2012 also.
> Both Helios MR version and Kauai streams/versions.


---

#### `DPOJET-1134` — Save and Recall for "Noise Bathtub" and "Bathtub" plot configuration do not work

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** amohamme
- **Created:** 29-01-2015 21:36
- **Updated:** 14-09-2023 12:43
- **Resolved:** 30-01-2015 03:44
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Steps:
> *********
> 1> Add TJ@BER and TN@BER measurements
> 2> Add "Noise Bathtub" and "Bathtub" plots
> 3> Go to each of these plots and change the configuration from 
>            Unit Amplitude to Volts and
>            Unit Intervals to Seconds
> 4> Save the setup file
> 5> Load the same setup file again
> 6> Se… [truncated]


---

#### `DPOJET-946` — RJ locking UI changes when measurements are cleared

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** amohamme
- **Created:** 16-11-2014 21:44
- **Updated:** 14-09-2023 12:43
- **Resolved:** 20-11-2014 03:29
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> 1> Load RT-EyeTutorial.wfm to Ref1.
> 2> Go to Preferences Setup->Jitter Decomp-> Lock RJ to 1ps.
> 3> Add TJ@BER measurement.
> 4> Go to results panel and see that RJ locked value is shown in the results panel.
> 5> Now click "Clear All" to remove all the measurements.
> 6> See that RJ locking is disabled. A… [truncated]


---

#### `DPOJET-942` — BER value shown in PDF, BER and Correlated Eye plots are incorrect

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** amohamme
- **Created:** 13-11-2014 02:18
- **Updated:** 14-09-2023 12:43
- **Resolved:** 20-11-2014 22:10
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> BER value shown in PDF, BER and Correlated Eye plots are incorrect
>
> 1> Add TJ@BER measurement. By default BER value is set to 1E-12. Go to RJDJ panel and verify it.
> 2> Add PDF Eye plot and go to its configuration panel. See that Target BER value is showing as 1E-10 which is incorrect. The correct va… [truncated]


---

#### `DPOJET-941` — TN@BER value shown in terms Volts is incorrect

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** amohamme
- **Created:** 13-11-2014 02:04
- **Updated:** 14-09-2023 12:43
- **Resolved:** 13-11-2014 22:47
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> This is another issue.
> 1> Load RT-EyeTutorial.wfm in REF1
> 2> Add "TJ@BER", "TN@BER", "High Time" and "Eye High" measurements
> 3> Run the measurements and obtain results
> 4> Go to Preferences tab->General and change the "Horizontal display Units" to “Unit Intervals” and click OK
> 5> Go to results panel… [truncated]


---

#### `DPOJET-939` — Results shown in terms of UA is incorrect

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** amohamme
- **Created:** 13-11-2014 01:46
- **Updated:** 14-09-2023 12:43
- **Resolved:** 13-11-2014 22:49
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> 1> Load RT-EyeTutorial.wfm in REF1
> 2> Add "TJ@BER", "TN@BER", "High Time" and "Eye High" measurements
> 3> Run the measurements and obtain results
> 4> Go to Preferences tab->General and change the "Vertical display Units" to “Unit Amplitudes” and click OK
> 5> Go to results panel and see that TN@BER resu… [truncated]


---

#### `DPOJET-865` — Modify existing "BER Eye Contour" plot configuration

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** amohamme
- **Created:** 24-09-2014 22:21
- **Updated:** 13-09-2023 20:00
- **Resolved:** 18-11-2014 03:42
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Modify existing "BER Eye Contour" plot configuration. Remove "Horizontal scale", "Explicit Clock" and "Ref Clock Alignment" fields from the existing "BER Eye Contour" plot configuration.
>
> Also remove PI and Save/Recall support for these configurations.
>
> Do necessary changes in PlotManager.cs. Send t… [truncated]


---

#### `DPOJET-681` — [Kauai_R1]: Feedback: Show UI and UA values in results panel

- **Type:** Improvement
- **Status:** Closed
- **Priority:** Major
- **Reporter:** amohamme
- **Created:** 11-08-2014 07:26
- **Updated:** 14-09-2023 12:15
- **Resolved:** 26-11-2014 03:19
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Today, we show the "Bit Rate" values associated with each source in results panel. In order to compute UI, we need to take inverse of Bit Rate but UI value is not available handy anywhere in DPOJET.
>
> It would be easy for the user, if these values are shown in the results panel. Also show UA (Unit Am… [truncated]


---

#### `DPOJET-680` — [Kauai_R1]: Feedback: Show noise measurement results in terms of UA (Unit Amplitude)

- **Type:** Improvement
- **Status:** Closed
- **Priority:** Major
- **Reporter:** amohamme
- **Created:** 11-08-2014 07:07
- **Updated:** 14-09-2023 12:15
- **Resolved:** 03-12-2014 06:17
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Like the way we have provision to show jitter and eye related measurements in terms of UI (Unit Interval), similarly show noise measurements in terms of UA (Unit Amplitude).
>
> Proposal:
> ***********
>          In Preference Setup tab, General->Display Units, do following changes… [truncated]


---

#### `DPOJET-709` — Time measurement -tCMD-CMD is Appearing in DPO Scope even though it is Digital measurement .

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** skumar5
- **Created:** 14-08-2014 07:12
- **Updated:** 14-09-2023 12:15
- **Resolved:** 01-04-2018 23:28
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> #NAME?


---

#### `DPOJET-707` — [Kauai_R1]: UI: Issue in RJDJ panel

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** amohamme
- **Created:** 14-08-2014 02:47
- **Updated:** 14-09-2023 12:15
- **Resolved:** 19-01-2015 23:04
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> 1> Load "RT-EyeTutorial.wfm" in REF1.
> 2> Load the attached setup file "RJDJSetup.set"
> 3> Run and obtain the results
> 4> Go to TJ@BER1 and TJ@BER2 measurements and change the RJDJ configurations as shown below
>         Manual, Repeating, 2UI
> 5> Run the measurements and obtain the results
> 6> Now go to T… [truncated]


---

#### `DPOJET-701` — [Kauai_R1]: Add "RJDJ" and "Filters" configuration to Clock NPJ measurement

- **Type:** Improvement
- **Status:** Closed
- **Priority:** Major
- **Reporter:** amohamme
- **Created:** 13-08-2014 05:34
- **Updated:** 14-09-2023 12:15
- **Resolved:** 05-09-2014 04:44
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> In "Jitter Only" analysis method, enable "Spectral+BUJ". Add "Clock NPJ" measurement and see that "RJDJ" and "Filters" configuration is not available whereas all other jitter measurements have this configuration. Hence add these configurations to Clock NPJ measurement as well.


---

#### `DPOJET-699` — [Kauai_R1]: Feedback: Add Jitter and Noise radio buttons in Jitter and Noise trees

- **Type:** Improvement
- **Status:** Closed
- **Priority:** Major
- **Reporter:** amohamme
- **Created:** 13-08-2014 04:08
- **Updated:** 14-09-2023 14:01
- **Resolved:** 22-04-2015 03:06
- **Resolution:** Will Not Fix
- **Labels:** UI

**Description (verbatim):**

> If the user wish to add jitter and noise measurements through Jitter and Noise tree then S(he) has to do below steps:
>
>        Select Jitter radio button.
>        Go to Jitter tree and add jitter measurements
>        Close the jitter tree
>        Select Noise radio button.
>        Go to Noise tree and ad… [truncated]


---

#### `DPOJET-698` — [Kauai_R1]: Feedback: Add Height@BER and NPN measurements as part of "Noise Summary"

- **Type:** Improvement
- **Status:** Closed
- **Priority:** Major
- **Reporter:** amohamme
- **Created:** 13-08-2014 03:49
- **Updated:** 14-09-2023 12:15
- **Resolved:** 05-09-2014 04:46
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Add Height@BER and NPN measurements as part of "Noise Summary".


---

#### `DPOJET-696` — [Kauai_R1]: Feedback: Change RJ+BUJ configuration to RJ+NPJ in "Composite Jitter Hist" plot

- **Type:** Improvement
- **Status:** Closed
- **Priority:** Major
- **Reporter:** amohamme
- **Created:** 13-08-2014 02:48
- **Updated:** 14-09-2023 12:15
- **Resolved:** 09-10-2014 23:28
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> BUJ contains both PJ and NPJ. The histogram shown in "Composite Jitter Hist" plot corresponding to RJ+BUJ contains RJ+NPJ. Hence the configuration RJ+BUJ should be changed to RJ+NPJ.
>
> Change the text from "RJ+BUJ" to "RJ+NPJ" in UI.
> Change the PI name from RJBUJ to RJNPJ
> Leave the save/recall as it… [truncated]


---

#### `DPOJET-1026` — Migrating DPOJET to VS-2012 for Tabasco

- **Type:** Task
- **Status:** Closed
- **Priority:** Major
- **Reporter:** kulkarni
- **Created:** 14-12-2014 22:59
- **Updated:** 13-09-2023 20:00
- **Resolved:** 06-01-2015 21:42
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Use Kauai-R2 latest build and
> Compile PI grammar with VS2012 to start with
> Compile rest of DPOJET on VS2012 and ensure the QG1, QG3 runs successfully


---

#### `DPOJET-749` — [Helios-MR2]: Bit rate and pattern length in result panel has broken[QG3 UI Func]

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** bhap
- **Created:** 27-08-2014 05:44
- **Updated:** 14-09-2023 12:15
- **Resolved:** 09-04-2015 09:05
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> 1> Recall 'SRJ_data.wfm to Ref1
> 2> Add SRJ meas.
> 3> Under RjDJ configuration: Select manual. Select 'Arbitrary' pattern.
> 4> Do sequencing.
> Observation: In the result panel, Pattern type should be 'Arbitrary'. But its showing 2UI.
>
> QG3 UIFunc Logs@\\eiw900440b\DPOJET_VOE\Helios_MR2\6.2.1.4\UIFunc\DPO… [truncated]


---

#### `DPOJET-745` — Refactoring: Reduce number of projects for easy maintenance

- **Type:** Improvement
- **Status:** Closed
- **Priority:** Major
- **Reporter:** SMAHADEV
- **Created:** 27-08-2014 02:08
- **Updated:** 14-09-2023 14:01
- **Resolved:** 17-11-2015 21:02
- **Resolution:** Will Not Fix
- **Labels:** UI

**Description (verbatim):**

> Refactoring: Reduce number of projects for easy maintenance
> Native.dll, DPOJET.dll, Grammar.dll, Interface.dll


---

#### `DPOJET-744` — Refactoring Measurement Catalog

- **Type:** Improvement
- **Status:** Closed
- **Priority:** Major
- **Reporter:** SMAHADEV
- **Created:** 27-08-2014 02:06
- **Updated:** 14-09-2023 12:15
- **Resolved:** 10-10-2014 00:23
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Today, adding a new measurement is a pain as code is in a mess.
> This needs a re-design.


---

#### `DPOJET-995` — Fix the QG1 breakdown

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** SMAHADEV
- **Created:** 03-12-2014 02:17
- **Updated:** 14-09-2023 12:43
- **Resolved:** 26-01-2015 23:48
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Ensure that all Test cases are running.
> If not passing - pls convert into appropriate action on engineers
>
> - Update Build script to cover code coverage
> - Differenent version of Tekescop on build m/c can lead to crash, needs to be checked
> - Few test cases ~10 are failing, needs to be resolved or dele… [truncated]


---

#### `DPOJET-1003` — If Rj is locked then show **Rj is locked and the corresponding locked value just above the results table in report

- **Type:** Improvement
- **Status:** Closed
- **Priority:** Major
- **Reporter:** SMAHADEV
- **Created:** 03-12-2014 22:45
- **Updated:** 14-09-2023 12:43
- **Resolved:** 02-02-2015 04:11
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> If Rj is locked then show **Rj is locked and the corresponding locked value  just above the results table.
>
> Show the same global table just above the results table


---

#### `ADVPWR-979` — Show Plots button is missing from the application interface

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** ASINGH4
- **Created:** 09-10-2014 02:31
- **Updated:** 14-09-2023 12:35
- **Resolved:** 17-10-2014 02:27
- **Resolution:** Fixed
- **Components:** User Interface
- **Labels:** UI, usability

**Description (verbatim):**

> I clicked Time Trend button and added Time Trend to Plot Type. When I click on Time Trend button again, it shows the above shown error message asking me to click on the ‘Show Plots’. However the is no ‘Show Plots’ button on the application interface.
>
> This happens for other plots too.


---

#### `GAR-2206` — Validate Create Report Functionality with Invalid ExecuionID and Template ID

- **Type:** Issue
- **Status:** Closed
- **Priority:** Major
- **Reporter:** spatil
- **Created:** 04-05-2022 10:21
- **Updated:** 19-03-2024 07:03
- **Resolved:** 18-01-2023 03:08
- **Resolution:** Done
- **Labels:** Report, UI


---

#### `GAR-6383` — Limit is not proper in CSV report

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** u627589
- **Created:** 17-09-2023 00:14
- **Updated:** 19-03-2024 07:03
- **Resolved:** 08-10-2023 21:58
- **Resolution:** Fixed
- **Labels:** ClientApp-DP, ClientApp-PCIe

**Description (verbatim):**

> 1.login in Tek flow portal.
>
> 2.Enter the required details and select correct test bench.
>
> 3.Select technology as PCIe and application as any app.
>
> 4.Select acquisition type as recorded mode .
>
> 5.click on run.
>
> 6.Generate the PDF report and CSV report.
>
> 7.Observe the limit column.
>
>  
>
> Current behavio… [truncated]


---

#### `GAR-4810` — Incorrect status shows for steps in test status page

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** bhap
- **Created:** 30-03-2023 12:01
- **Updated:** 19-03-2024 07:28
- **Resolved:** 03-04-2023 19:41
- **Resolution:** Fixed
- **Labels:** ClientApp-DP

**Description (verbatim):**

> Prereq: 
> 1> Run IS 
> 2> Donot run AS
>
> Step:
> 1> Create new test(Base=>MultiAnalysis_S08) app. You can use any app
> 2> Select name and select test bench where signal is connected. Set channel=CH1
> 3> Click on Run. Open status link
> Observation: Wait till acquisition completes.  Now over all status shows a… [truncated]


---

#### `DP-10548` — [Garuda DP][PLAE Feedback-Gary] Add Test Bench Error message is not comprehensible

- **Type:** Improvement
- **Status:** Closed
- **Priority:** Major
- **Reporter:** mkumar2
- **Created:** 19-09-2023 21:15
- **Updated:** 02-04-2024 09:35
- **Resolved:** 02-04-2024 09:32
- **Resolution:** Fixed
- **Labels:** Clarius_DP_Platform_Clone, DP_Clarius_RP1_Verify, PLAE-Feedback

**Description (verbatim):**

> As per Summary


---

#### `TEDIBCI-8085` — [DisplayPort-Tx] New installation fails due to nssm third party tool is not removed automatically upon uninstallation

- **Type:** Defect
- **Status:** Closed
- **Priority:** Major
- **Reporter:** mtatiche
- **Created:** 11-09-2023 05:00
- **Updated:** 14-02-2024 23:54
- **Resolved:** 22-11-2023 23:01
- **Resolution:** Fixed
- **Labels:** ClientApp-DP, PI-3, TekFlow

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> Uninstall the existing beta22 Platform build on the test pc. 
>
> Try to install the platform build again. 
>
> It says, there is already build present. Do you want to override?
>
> Observation:
>
> This happens because, there is a third party tool called nssm which is not removed during uninstallation. 
>
> When… [truncated]


---

### Priority: Minor (151)

#### `GAR-6364` — [UX] User should have an option to view the intermediate results generated for multiple acquisitions.

- **Type:** Story
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** kemg
- **Created:** 15-09-2023 05:47
- **Updated:** 24-01-2024 04:14
- **Resolved:** 17-10-2023 03:18
- **Resolution:** Done
- **Labels:** TestcaseNotRequired

**Acceptance Criteria (verbatim):**

> Should have an option to view the intermediate results generated for multiple acquisitions.


---

#### `GAR-6175` — Fix GUI test scripts

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** bhap
- **Created:** 30-08-2023 02:35
- **Updated:** 14-09-2023 08:59
- **Resolved:** 13-09-2023 05:35
- **Resolution:** Done

**Description (verbatim):**

> 1> Fix the script issues
>
> 2> Push the changes to bit bucket
>
> 3> Run script on atleast two VMs
>
> 4> Run test from Jenkin once and test.


---

#### `GAR-4075` — Automate GUI test cases

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** bhap
- **Created:** 04-01-2023 01:13
- **Updated:** 13-09-2023 19:41
- **Resolved:** 17-01-2023 19:55
- **Resolution:** Done

**Description (verbatim):**

> Add and Automate the test cases of User Management and Notification test case
>
> Acceptance criteria:
> 1> Automate all test cases specified in sub tasks
> 2>Validate response body content for all supported requests test cases
> 3> Execute the tests on atleast two VMs before push to bit bucket
> 4> Use proper… [truncated]


---

#### `GAR-3729` — View results GUI issues

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** bhap
- **Created:** 07-11-2022 17:44
- **Updated:** 01-05-2024 04:14
- **Resolved:** 12-12-2022 21:24
- **Resolution:** Fixed

**Description (verbatim):**

> View results GUI issues
> 1> Login to 172.19.211.237:4200/login 
> 2> Click on 'Test' menu. Click on Vew Results for test name 'tttt'.
> Observations: 
> a> 'Test Bench' is incorrect. Progress control(may not be implemented)
>
> 3> Click on Test menu. Click on 'View Results' for test whose name is 'App2_test'… [truncated]


---

#### `GAR-3351` — Plan for GUI automation using Selenium API in Karate framework-Work with Amit and make basic framework for existing GUI

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** bhap
- **Created:** 31-08-2022 18:48
- **Updated:** 14-09-2023 08:03
- **Resolved:** 12-09-2022 20:18
- **Resolution:** Done

**Description (verbatim):**

> Plan for GUI automation using Selenium API in Karate framework-Work with Amit and make basic framework for existing GUI


---

#### `GAR-3745` — Quality task for filters in Test List GUI page

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** bhap
- **Created:** 08-11-2022 17:42
- **Updated:** 14-09-2023 08:20
- **Resolved:** 05-12-2022 05:18
- **Resolution:** Done

**Description (verbatim):**

> > Add test case
> > Manually test it
> > Automate the same using Playwright


---

#### `GAR-4703` — settings.json are open and we can access it directly from GUI

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** bhap
- **Created:** 23-03-2023 06:07
- **Updated:** 27-04-2024 03:11
- **Resolved:** 23-05-2023 02:15
- **Resolution:** Fixed

**Description (verbatim):**

> It should not allow us to read it. Find attached screenshot.
>
> Urls which are openly accessible :
>   
>  [http://172.19.211.237:4200/assets/config/settings.json]
>  [http://172.19.211.237:4200/assets/config/end-points.json]
>  [http://172.19.211.237:4200/assets/PDFs/License |http://172.19.211.237:4200/asset… [truncated]


---

#### `GAR-7991` — Plot image saved using "Save As" option in GUI, saves the blank image.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** bhap
- **Created:** 25-03-2024 20:57
- **Updated:** 26-03-2024 23:03
- **Resolved:** 26-03-2024 23:00
- **Resolution:** Duplicate

**Description (verbatim):**

> Plot image saved using "Save As" option in GUI, saves the blank image.
>
> If you are providing an option then it should function correctly. Or else donot give the option only. It looks broken feature.


---

#### `GAR-2904` — Enabling license using GUI is not activating app license and no error messages were displayed

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** u612584
- **Created:** 28-06-2022 07:30
- **Updated:** 27-04-2024 02:26
- **Resolved:** 05-10-2022 22:59
- **Resolution:** Fixed

**Description (verbatim):**

> Enabling license using GUI is not activating app license and it don't give any error message also
>
>
>
>
> Steps to Verify........
> 1. Generate license from app nomenclatures (not engineering license)
> 2. Activate the license via UI
> 3. License service should activating app licenses


---

#### `GAR-1512` — Question : How to Debug AS using Visual Studio when running from GUI for Client applications?

- **Type:** Issue
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** sjhawar
- **Created:** 02-03-2022 22:12
- **Updated:** 13-09-2023 19:41
- **Resolved:** 17-07-2022 23:02
- **Resolution:** Done
- **Labels:** ClientApp-LPDDR4

**Description (verbatim):**

> Question : How to Debug AS using Visual Studio when running from GUI for Client applications?


---

#### `GAR-6538` — Automate GUI Test Cases - GAR-6102 GAR-5999 GAR-5998 GAR-5898 GAR-5844 GAR-5506 GAR-6529 GAR-6457 GAR-6227

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** bhap
- **Created:** 24-10-2023 10:57
- **Updated:** 09-11-2023 03:50
- **Resolved:** 07-11-2023 22:26
- **Resolution:** Done

**Description (verbatim):**

> Automate GUI Test Cases -
>
> GAR-6102
>  GAR-5999
>  GAR-5998
>  GAR-5898
>  GAR-5844
>  GAR-6529
>  GAR-6457
>  GAR-6227


---

#### `GAR-7543` — [STM]Getting licence lock issue, unable to see the test in GUI to stop it and unable to start next test

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** bhap
- **Created:** 30-01-2024 04:25
- **Updated:** 26-03-2024 04:48
- **Resolved:** 28-02-2024 01:58
- **Resolution:** Cannot Reproduce
- **Labels:** TestcaseNotRequired

**Description (verbatim):**

> This is is reported by STM
>
>  
>
> make sure we are showing all the tests on UI, currently some of the tests which are submitted are not coming on UI status page.
>
> expectation: all the tests which has acquired license/submitted should be shown in status page.


---

#### `GAR-2903` — Enable license using GUI, try to query the active license using POSTMAN, which returns no app license are activated.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** u612584
- **Created:** 28-06-2022 07:28
- **Updated:** 19-03-2024 07:27
- **Resolved:** 08-08-2022 03:07
- **Resolution:** Fixed

**Description (verbatim):**

> Enable license using GUI, try to query the active license using POSTMAN, which returns no app license are activated.


---

#### `GAR-4260` — Do stress testing for sample apps and verify the results API, GUI(result, waveform and plot), SDK method for results and Memory

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** bhap
- **Created:** 31-01-2023 22:50
- **Updated:** 13-09-2023 19:40
- **Resolved:** 13-02-2023 15:43
- **Resolution:** Done

**Description (verbatim):**

> > Check the test status, results and plots frm GUI, API and SDK
> > Check the memory and other performance


---

#### `GAR-4292` — Create standard naming convension for GUI: Follow standard naming convenstion for Application name, setting name, scenario and step names

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** bhap
- **Created:** 01-02-2023 21:07
- **Updated:** 13-09-2023 19:40
- **Resolved:** 12-02-2023 11:00
- **Resolution:** Done

**Description (verbatim):**

> Find attached excel sheet.


---

#### `GAR-2739` — [UI] The range of the input controls in the constraint field has not validated in the UI

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** sacb
- **Created:** 13-06-2022 04:32
- **Updated:** 14-09-2023 12:15
- **Resolved:** 22-06-2023 23:18
- **Resolution:** Fixed

**Description (verbatim):**

> For app settings when we add the constraints field with a certain range, in the UI the validation is not happening.


---

#### `GAR-1235` — UI error fixing and finding common UI flow for records not found case.

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** rkatti
- **Created:** 05-01-2022 20:36
- **Updated:** 13-09-2023 19:41
- **Resolved:** 20-01-2022 20:24
- **Resolution:** Done

**Description (verbatim):**

> Acceptance Criteria:
> UI error fixing and finding common UI flow for records not found case.
>
> Completeness:
> The records not found error fixed by showing proper error messages.
> The report template error fixed.


---

#### `GAR-1405` — When we add more UI controls in json , UI is getting clipped in ATOMS page.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** arck
- **Created:** 08-02-2022 09:04
- **Updated:** 14-09-2023 14:05
- **Resolved:** 22-06-2023 23:09
- **Resolution:** Will Not Fix

**Description (verbatim):**

> When we add more UI controls in json , UI is getting clipped in ATOMS page (Attached screenshot)


---

#### `GAR-1243` — Folder Restructuring of the UI codebase

- **Type:** Developer Story
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** sbhushan
- **Created:** 06-01-2022 03:33
- **Updated:** 13-09-2023 19:41
- **Resolved:** 10-01-2022 20:00
- **Resolution:** Done

**Description (verbatim):**

> Acceptance Criteria
> 1) Reorganize the folder structure of UI codebase


---

#### `GAR-1367` — Refactor UI application page

- **Type:** Developer Story
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** sbhushan
- **Created:** 01-02-2022 21:05
- **Updated:** 13-09-2023 19:41
- **Resolved:** 08-02-2022 08:27
- **Resolution:** Done

**Description (verbatim):**

> Doneness Criteria
> 1) PRTI


---

#### `GAR-6316` — Show stackTrace in logs in UI

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** u616478
- **Created:** 13-09-2023 02:10
- **Updated:** 11-10-2023 04:16
- **Resolved:** 02-10-2023 21:25
- **Resolution:** Done

**Description (verbatim):**

> 1) Hide the fields which are null.
>
> 2) Show stackTrace in Ui. Only show the first line with ellipses. (On copying it should copy everything)
>
> 3) Make the fields selectable


---

#### `GAR-2777` — Disable "Debug" in API and UI

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** magl
- **Created:** 20-06-2022 05:16
- **Updated:** 14-09-2023 08:03
- **Resolved:** 29-06-2022 04:55
- **Resolution:** Done

**Description (verbatim):**

> Disable "Debug" in API and UI for RP1


---

#### `GAR-6355` — [UI] Display EVENT logs

- **Type:** Story
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** fana
- **Created:** 15-09-2023 02:38
- **Updated:** 12-12-2023 00:58
- **Resolved:** 21-11-2023 23:13
- **Resolution:** Done
- **Labels:** Beta26

**Acceptance Criteria (verbatim):**

> * Should display EVENT logs from all services in UI
>
> *Pre-requisite:*
>  * UX design should be available
>
>  
>
> Test Case Review comments: 
>
> > Event Logs Filter should have only date and time filters. 
>
> > Progress button blue widget can appear on any of the currently opened page when any of the tests is in-progress.
>
> > Button blue widget should have option to minimize, maximize and mouse hover option.

**Description (verbatim):**

> Download to be added
>  [https://www.figma.com/proto/vUPfjobzSvWiMhLrs08Rrk/TekFlow-Design-System-Mar-31%2C-2023?page-id=628%3A27470&type=design&node-id=13572-159136&viewport=-27551%2C-12118%2C0.3&t=9uQXKcPvGFynFf6C-9&scaling=scale-down&starting-point-node-id=13572%3A159136&show-proto-sidebar=1]… [truncated]


---

#### `GAR-6476` — Update error messages for UI

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** u613736
- **Created:** 11-10-2023 23:43
- **Updated:** 24-10-2023 16:21
- **Resolved:** 23-10-2023 01:24
- **Resolution:** Done


---

#### `GAR-300` — Explore React Framework for UI

- **Type:** Story
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** sbhushan
- **Created:** 20-10-2021 22:57
- **Updated:** 14-09-2023 08:04
- **Resolved:** 08-11-2021 04:15
- **Resolution:** Done

**Acceptance Criteria (verbatim):**

> 1) replicate the login page of ATOMS UI.
> 2) replicate dashboard page of ATOMS.
> 3) explore libraries for navigation, table, charts in react.
> 4) Create the comparison list between React and angular and discuss with Sriram.


---

#### `GAR-2001` — [UI] As a user, I should be able to create and view reports from the UI. [Recent Reports API changes]

- **Type:** Story
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** sbhushan
- **Created:** 12-04-2022 05:34
- **Updated:** 13-09-2023 19:41
- **Resolved:** 16-05-2022 00:27
- **Resolution:** Done

**Acceptance Criteria (verbatim):**

> 1) Should be able to view the report details list in table.
> 2) Should be able to generate the report.
> 3) Should be able to view the report.
> 4) Should be able to see the status of the report.
> 5) Should be able to delete the report.

**Description (verbatim):**

> 1) Should be able to view the report details list.
>
> Input
> * Login to ATOMS UI.
> * Select Reports from navigation Panel.
>
> Output
> * Report Details list in table format.
>
> +FAILS ON+
> * If no reports are present in database.
>
> 2) Should be able to create new report.
>
> Input
> * Login to ATOMS UI.
> * Select Rep… [truncated]


---

#### `GAR-2957` — [UI]Support for MAP type setting

- **Type:** Story
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** fana
- **Created:** 05-07-2022 02:10
- **Updated:** 14-09-2023 08:03
- **Resolved:** 31-07-2022 20:28
- **Resolution:** Done
- **Labels:** TF_CAA1


---

#### `GAR-1551` — Lane drop down box in UI not updated

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** nnarasim
- **Created:** 15-03-2022 03:10
- **Updated:** 14-09-2023 12:15
- **Resolved:** 13-09-2022 02:27
- **Resolution:** Fixed

**Description (verbatim):**

> Run  any of the measurements
> In the Results panel, click on the measurements
> Once the result data expands , check on the Lane Dropdown
>
> Expected:
> Lane info should be updated for all measurements


---

#### `GAR-1262` — Debug Service is loading very slowly in UI

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** fana
- **Created:** 12-01-2022 22:13
- **Updated:** 14-09-2023 13:48
- **Resolved:** 22-06-2023 22:59
- **Resolution:** Not a Defect
- **Labels:** Framework-defects

**Description (verbatim):**

> Steps to reproduce the issue :
>
> Pre-requisites :
>
> 1.Launch the Application
> 2. Go to login page
> 3. Enter the credentials and login
>
> Steps :
>  # Click on Debug
>  # Click on 'New Session'
>  # Drag in a measurement
>  # Click 'Run'


---

#### `GAR-5774` — [UI]Enable delete the session and merge the results of tests

- **Type:** Story
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** apattar
- **Created:** 06-07-2023 23:16
- **Updated:** 13-09-2023 19:39
- **Resolved:** 30-08-2023 01:59
- **Resolution:** Done

**Description (verbatim):**

> UX Design link - [https://www.figma.com/proto/NML4PRsIrVrPyTF0wfqyYW/TekFlow-Design-System?page-id=977%3A45208&type=design&node-id=8137-215012&viewport=319%2C2048%2C0.02&t=wgjG5o6mG2oTm0NV-9&scaling=min-zoom&starting-point-node-id=8137%3A215012&show-proto-sidebar=1]
>
>  
>
>  
>
> Review comments are:
>
> 1> S… [truncated]


---

#### `GAR-21` — User should be able to see test logs in UI.

- **Type:** Story
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** spatil
- **Created:** 18-10-2021 04:20
- **Updated:** 14-09-2023 08:04
- **Resolved:** 13-03-2022 00:40
- **Resolution:** Done


---

#### `GAR-2120` — Entering 0 value in setting is showing "value required" in UI.

- **Type:** Issue
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** sbhushan
- **Created:** 26-04-2022 03:16
- **Updated:** 13-09-2023 19:41
- **Resolved:** 26-04-2022 04:08
- **Resolution:** Done


---

#### `GAR-1447` — Implement/Update the UI for testbench pages with testbench API changes

- **Type:** Story
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** sbhushan
- **Created:** 15-02-2022 23:19
- **Updated:** 13-09-2023 19:41
- **Resolved:** 24-02-2022 21:36
- **Resolution:** Done

**Acceptance Criteria (verbatim):**

> 1) As a user i should be able to create the testbench
> 2) As a user i should be able to view the testbench
> 3) As a user i should be able to edit the testbench

**Description (verbatim):**

> Doneness Criteria
> 1) PRTI
> 2) Review the functionality


---

#### `GAR-1424` — Should be able to edit the step level settings from UI

- **Type:** Story
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** sbhushan
- **Created:** 11-02-2022 02:07
- **Updated:** 13-09-2023 19:41
- **Resolved:** 11-02-2022 02:14
- **Resolution:** Done

**Acceptance Criteria (verbatim):**

> 1) User should be able to edit step level settings

**Description (verbatim):**

> 1) Should be able to view and edit step level setting while creating new test.
>
> Input
> * Login to ATOMS UI.
> * Select Tests from navigation Panel.
> * Click on New Test test list page
> * Select an application which has *editable step level setting*.
> * Click on application edit details button.
> * Expand sc… [truncated]


---

#### `GAR-3868` — Review UI scripts and API scripts, and user guide documents

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** bhap
- **Created:** 22-11-2022 08:39
- **Updated:** 14-09-2023 08:20
- **Resolved:** 05-12-2022 06:21
- **Resolution:** Done


---

#### `GAR-6850` — Automate test case to GAR-6355-[UI] Display event logs

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** bhap
- **Created:** 21-11-2023 23:13
- **Updated:** 22-11-2023 01:21
- **Resolved:** 22-11-2023 01:21
- **Resolution:** Done


---

#### `GAR-2189` — [UI] As a user, I want to view results of the DP application

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** sbhushan
- **Created:** 27-04-2022 23:06
- **Updated:** 13-09-2023 19:41
- **Resolved:** 28-04-2022 20:58
- **Resolution:** Done

**Acceptance Criteria (verbatim):**

> 1) Should be able to view all the results of DP app.
> 2) Should be able to view the setup information.


---

#### `GAR-1246` — Selecting the application field does not add any instrument on the UI

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** u612584
- **Created:** 09-01-2022 22:16
- **Updated:** 14-09-2023 12:15
- **Resolved:** 26-02-2022 03:59
- **Resolution:** Fixed
- **Labels:** ClientApp-PCIe

**Description (verbatim):**

> steps to reproduce the issue -
>
> Pre-Requisites 
>
> 1. Launch the Application 
> 2. Go to login page
> 3. Enter the credentials and login
>
> Steps 
>  # Click on TestBench 
>  # New Testbench


---

#### `GAR-22` — User should be able to see error logs in UI if backend failure

- **Type:** Story
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** spatil
- **Created:** 18-10-2021 04:21
- **Updated:** 14-09-2023 08:04
- **Resolved:** 13-03-2022 00:42
- **Resolution:** Done


---

#### `GAR-5124` — As a user I should be able to filter log messages through UI

- **Type:** Story
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** apattar
- **Created:** 08-05-2023 01:06
- **Updated:** 13-09-2023 19:40
- **Resolved:** 26-06-2023 04:43
- **Resolution:** Done

**Acceptance Criteria (verbatim):**

> Should support following criteria
>  # level of log
>  # log time from and to [can we give some shortcuts like past hour, today]
>  # service
>  # transactionType
>  # component
>  # transactionId (executionId)


---

#### `GAR-1586` — [UI] As a characterization user, I want to view the eye diagram with data and clock

- **Type:** Story
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** sbhushan
- **Created:** 16-03-2022 22:46
- **Updated:** 13-09-2023 19:41
- **Resolved:** 29-03-2022 06:24
- **Resolution:** Done

**Acceptance Criteria (verbatim):**

> After login to Tekflow UI, navigate to 
>
> Tests -> <ddr_test_id> -> <scenario> -> results -> plots
>
> 1) On selecting plots user should be able to view both data and clock
> 2) user should be able to see "No Plots found" incase if the attachments in result API does not contain plot data.
> 3) User should be able to see voltage(V) on y axis and time(s) on x-axis.

**Description (verbatim):**

> 1) As a characterization user, i want to view the eye diagram with data and clock
>
> Inputs:
> * plots data (that is fetched from result api attachments object)
>
> Output
> PASS -> UI should be able plot the eye diagram with data and clock
> FAILS ON -> If the plot data returns empty object


---

#### `GAR-7936` — [USB4V2-Tx] Application is greyed out in UI even when proper license is given.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** shry
- **Created:** 20-03-2024 03:46
- **Updated:** 28-03-2024 04:12
- **Resolved:** 28-03-2024 04:12
- **Resolution:** Not a Defect
- **Labels:** Client-App-USB

**Description (verbatim):**

> Application is greyed out in UI even when proper license is given.
>
> USB4 app bundle.json has 2 appIDs, but only one application is working and another application is greyed out and unable to use.


---

#### `GAR-424` — As a user, I will explore ATOM software Services, UI and communication between different services.

- **Type:** Story
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** rkatti
- **Created:** 24-11-2021 08:02
- **Updated:** 14-09-2023 08:04
- **Resolved:** 20-12-2021 21:18
- **Resolution:** Done

**Description (verbatim):**

> Acceptance Criteria:
>  - Learn about docker.
>  - Learn about UI code
>  - Discuss with ATOM team members about Services.
>
> Doneness Criteria:
>  - Go through docker and learn how ATOM is using docker.
>  - Go through UI and services code.


---

#### `GAR-6365` — [UI] User should have an option to view the intermediate results generated for multiple acquisitions.

- **Type:** Story
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** kemg
- **Created:** 15-09-2023 05:50
- **Updated:** 12-12-2023 01:01
- **Resolved:** 08-11-2023 00:50
- **Resolution:** Done
- **Labels:** Beta26

**Acceptance Criteria (verbatim):**

> Should have an option to view the intermediate results generated aby multiple acquisitions.

**Description (verbatim):**

> [▶ 04. UI Flows - TekFlow Design System Mar 31, 2023 (figma.com)|https://www.figma.com/proto/vUPfjobzSvWiMhLrs08Rrk/TekFlow-Design-System-Mar-31%2C-2023?page-id=628%3A27470&type=design&node-id=13680-241050&viewport=-12210%2C-6818%2C0.14&t=FJ1EGzecUOxJGYtZ-9&scaling=scale-down&starting-point-node-id=… [truncated]


---

#### `GAR-7684` — Updating channel in source configuration in UI for PCIe app fails and throws validation error

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** fana
- **Created:** 11-02-2024 00:44
- **Updated:** 25-03-2024 19:50
- **Resolved:** 11-02-2024 03:00
- **Resolution:** Not a Defect
- **Labels:** RAA

**Description (verbatim):**

> *VM:* tek-70769k3
>
> *Steps:*
>
> 1. Click on Add Test
>
> 2. Provide test name and select PCIe test bench 
>
> 3. Add PCIe AIC 1_0a app to sequence
>
> 4. Click on sources configuration
>
> 5. Update channel of DataNeg from CH3 to CH2
>
> 6. Click Apply
>
> *Expected result:* Should be able to update source channel value… [truncated]


---

#### `GAR-5718` — Stop/Cancellation token is being issued every time when tekflow UI logout

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** rkosana
- **Created:** 03-07-2023 07:52
- **Updated:** 25-03-2024 19:51
- **Resolved:** 26-07-2023 03:20
- **Resolution:** Not a Defect

**Description (verbatim):**

> Stop / Cancellation token is being issued every time when tekflow UI logout. This is causing our Rx tests to stop abruptly. Please check on this.
>
> Steps to reproduce issue:
>
> Configure and run DQS test.
>
> Wait for minimum 11 minuits for tekflow UI to logout.
>
> Test will Abort/Stop .


---

#### `GAR-2902` — Unable to trigger a test with the present application on UI. Clicking on 'Run Test' is not starting test.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** u612584
- **Created:** 28-06-2022 07:27
- **Updated:** 27-04-2024 02:18
- **Resolved:** 05-09-2022 01:25
- **Resolution:** Cannot Reproduce

**Description (verbatim):**

> 1. Unable to trigger a test with the present application on UI Clicking on 'Run Test' is not starting test. 
> 2. No logs were coming up in the IS (instrument service) as well 
>
> vm details :
> http://172.19.211.237:8100/login
> http://134.64.244.157:8100/login


---

#### `GAR-1213` — As a UI developer i should enable level 2 grouping for acquisition settings in debug feature

- **Type:** Story
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** sbhushan
- **Created:** 21-12-2021 22:26
- **Updated:** 13-09-2023 19:41
- **Resolved:** 04-01-2022 01:50
- **Resolution:** Done

**Acceptance Criteria (verbatim):**

> 1) User should be able click on level 2 group in acquisition settings in debug feature to display settings for that level.

**Description (verbatim):**

> Doneness Criteria
> 1) PRTI
> 2) Test the flow


---

#### `GAR-4803` — Spin/progress status is visible infinitly on Reports UI even server responded with 404 erro

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** u610666
- **Created:** 30-03-2023 03:53
- **Updated:** 19-03-2024 07:03
- **Resolved:** 10-05-2023 21:54
- **Resolution:** Fixed

**Customer Impact (verbatim):**

> 2-Medium

**Description (verbatim):**

> On clicking the Generate Report button from reports section  spin icon infinitly keeps spining even thoug server responded with 404 error


---

#### `GAR-1415` — Test execution gets aborted when we create the new Test Bench from the UI

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** arck
- **Created:** 09-02-2022 22:35
- **Updated:** 27-04-2024 02:27
- **Resolved:** 24-02-2022 05:54
- **Resolution:** Fixed
- **Labels:** ClientApp-LPDDR4, TestcaseNotRequired

**Description (verbatim):**

> Steps to reproduce:
>
> 1. Login to ATOMS web page 
> 2. Select the Test bench --> select New Test bench
> 3. Enter valid values in all the fields in New Test bench
> 4. Click on save button 
> 5. Select the Tests panel–>select New Test
> 6. Enter the Test name , test description , select the appropriate Test be… [truncated]


---

#### `GAR-1548` — Atoms UI page shows blank(black screen) if user keeps it logged in for longer time on chrome browser.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** u612584
- **Created:** 13-03-2022 22:30
- **Updated:** 19-03-2024 07:24
- **Resolved:** 07-09-2022 02:58
- **Resolution:** Cannot Reproduce

**Description (verbatim):**

> Description: If the atoms page is logged in for longer hous,user minimizes the current page and after re opening the page it shows black screen


---

#### `GAR-2901` — Posting a application using postman is giving 200 response but it's not reflecting on UI even after enabling license.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** u612584
- **Created:** 28-06-2022 07:22
- **Updated:** 19-03-2024 07:27
- **Resolved:** 08-08-2022 03:05
- **Resolution:** Fixed

**Description (verbatim):**

> 1. posted a application with valid License ID on postman with 200 OK response code , but retrieving the same ID in postman is giving 403/500 error code.
>
> 2. posted applications are not even reflecting on UI 
>
> vm details :
> http://172.19.211.237:8100/login
> http://134.64.244.157:8100/login


---

#### `PCIEX-6507` — Data rates for previous generation are not shown when GEN-6 version is selected

- **Type:** Issue
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** u605108
- **Created:** 22-06-2021 23:31
- **Updated:** 13-09-2023 19:06
- **Resolved:** 30-06-2021 10:00
- **Resolution:** Done
- **Labels:** Functional, UI

**Description (verbatim):**

> Data rates for previous generation are not shown when GEN-6 version is selected as shown in the screenshot attached. !Screenshot (7).png!


---

#### `TEKEXPFW-5770` — As an application engineer, I expect application not to freeze while probing the query details

- **Type:** Story
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 21-06-2021 23:17
- **Updated:** 14-09-2023 08:49
- **Resolved:** 15-07-2021 21:20
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Acceptance criteria:
>  - Application should not freeze while querying the probe details
>  - No S1/S2 defects found
>
> Doneness:
>  - Probe query call should not be directly called from UI (AcqPanel or ProbeConfigOCW)
>  - Probe query to be rerouted from UI to Controller to Kernel which calls Probe module to… [truncated]


---

#### `TEKEXPFW-5732` — CLONE - [Framework]Terminator :In DUT panel Run/Config sessions having some issue

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 14-06-2021 02:06
- **Updated:** 14-09-2023 11:58
- **Resolved:** 16-06-2021 00:42
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 3-Low

**Description (verbatim):**

> 1.Under run /config sessions it is showing more sessions as we have loaded.
>
> 2. save session button saving only .Tekx file not the folder file.
>
> 3. When prerecorded session is loaded then sometimes radio button is switching to live.


---

#### `TEKEXPFW-5731` — AppEmulator: Multilane in C# Sequencer: When same test with more than one lane selected, progress bar reaches 100% for first lane itself [in C# Sequencer]

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 14-06-2021 02:00
- **Updated:** 14-09-2023 11:58
- **Resolved:** 29-06-2021 02:46
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 3-Low

**Description (verbatim):**

> AppEmulator:
> - Set C# Sequencer for "Group1 - 2 Lane" in app XML
> - Select "Group1 - 2 Lane" suite in DUT panel
> - Select Scope Period measurement
> - Select more than one lane (ex: Lane0 to Lane02)
> Run
>
> Observed: Progress bar reaches 100% once test completed for Lane0. Actually it should be 33% (as one… [truncated]


---

#### `PCIEX-7198` — In the gen6 report, spec version is not present in the comment section of each measurement

- **Type:** Issue
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** u605108
- **Created:** 27-08-2021 04:07
- **Updated:** 13-09-2023 19:05
- **Resolved:** 01-09-2021 00:02
- **Resolution:** Done
- **Labels:** UI


---

#### `PCIEX-7438` — No proper test description for measurements VTx_Diff_pk_Pk and VTx_EIEOS  in  gen6

- **Type:** Issue
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** u605108
- **Created:** 23-09-2021 00:19
- **Updated:** 13-09-2023 19:05
- **Resolved:** 12-10-2021 05:19
- **Resolution:** Done
- **Labels:** UI


---

#### `PCIEX-7437` — In pre-recorded mode when ACCM measurements are selected and sufficient CM wfms are not provided,then no proper message is showing up(pre-requisite error) but gives tekexpress error.

- **Type:** Issue
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** u605108
- **Created:** 23-09-2021 00:11
- **Updated:** 13-09-2023 19:05
- **Resolved:** 23-09-2021 08:33
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> steps:
>
> 1.launch latest tekexpress PCIe application.
>
> 2.select pre-recorded mode
>
> 3.Select gen6->basespec->TX test board/SRIS
>
> 4.select AC-CM measurement in Test selection panel.
>
> 5.select only differential waveforms and do not provide CM waveforms and click on start
>
> Expected outcome:
>
> 1.Pre-requis… [truncated]


---

#### `PCIEX-7282` — To change the units for scope noise compensation in the config panel

- **Type:** Improvement
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** u605108
- **Created:** 06-09-2021 23:09
- **Updated:** 14-09-2023 12:07
- **Resolved:** 08-09-2021 05:30
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> To change the units for scope noise compensation from mV to mVrms


---

#### `PCIEX-7281` — To Properly name the TekDisplay window for the Scope noise compensation in PCIE gen6 beta1 build

- **Type:** Improvement
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** u605108
- **Created:** 06-09-2021 23:01
- **Updated:** 14-09-2023 12:07
- **Resolved:** 08-09-2021 05:29
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> To Properly name the TekDisplay window for the Scope noise compensation in PCIE gen6 beta1 build


---

#### `TEKEXPFW-4929` — [ART #65536] Auto Ethernet: Long time to login Tekexpress automotive application

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 03-03-2021 03:25
- **Updated:** 14-09-2023 11:58
- **Resolved:** 28-03-2021 22:51
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 2-Medium

**Description (verbatim):**

> ART #65536:
> [Mail from Yan, Auto Ethernet AE] - Refer attached mail.
> Now if we launch the Tekexpress automotive ethernet, the new and right resources file can be geneated on X drive, however, if we meet this issue on another MSO64B, how can we fix it? It will be better for us to know the way for tro… [truncated]


---

#### `TEKEXPFW-4870` — Handle Options menu for result statistics tab

- **Type:** Improvement
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 23-02-2021 03:07
- **Updated:** 14-09-2023 11:58
- **Resolved:** 01-03-2021 02:01
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 2-Medium

**Description (verbatim):**

> Acceptance Criteria:
> Handle options menu with proper entries for result grid control and statistics grid control.


---

#### `MIPIMPHYTX-1530` — Gear 3A mask loading displays Gear 1A in mask file path

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 08-07-2019 01:04
- **Updated:** 05-01-2024 02:39
- **Resolved:** 24-07-2019 01:21
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> Steps to reproduce:
>  # Launch application
>  # Select Gear 3A/3B
>  # Go to Test 1.1.7 Configuration > 'Mask File Path' tab
>  # Change Gear Type from Gear1A to Gear 3A (or any other) using drop down
>  # Corresponding RT LA mask file is shown in file path text box.
>  # Change to user defined mode.
>  # Now we… [truncated]


---

#### `TEKEXPFW-4416` — CLONE - As a user, I would like to have optional units prefix option in TekDisplay Number pad control to select units easily

- **Type:** Story
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 03-09-2020 00:19
- **Updated:** 14-09-2023 08:51
- **Resolved:** 08-12-2020 21:57
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> [Description]
> - As a user, I would like to have a option in TekExpress which support values to enter with units.
>
> [Acceptance Criteria]:
> - Number pad in TekDisplay with units prefix option
> - Interface to show/hide units prefix in TekDisplay Number pad (client app to use this interface)
> - Application… [truncated]


---

#### `TEKEXPFW-4411` — As a user, I would like to have optional units prefix option in TekDisplay Number pad control to select units easily

- **Type:** Story
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 02-09-2020 02:15
- **Updated:** 14-09-2023 08:51
- **Resolved:** 16-09-2020 00:34
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> [Description]
> - As a user, I would like to have a option in TekExpress which support values to enter with units.
>
> [Acceptance Criteria]:
>  - (Mapping to DPOJET)
> 1. Enable Number pad to enter units
> 2. Save/Recall
>
> [Doneness]
> - XML adding tag for units
> - Provide a option in TekDisplay control to enable… [truncated]


---

#### `TEKEXPFW-4399` — Popup icons always show info "i" during the sequencer

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 02-09-2020 01:10
- **Updated:** 14-09-2023 11:58
- **Resolved:** 10-09-2020 02:40
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 3-Low

**Description (verbatim):**

> Popup called from sequencer always show info icon "i" irrespective of any icon type mentioned during call.


---

#### `TEKEXPFW-4214` — CLONE - 1000BT1_UI Band pass filter(grayed out ) -Whenever users select or deselect the test in the test selection panel, the master node of the measurement is selected.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** avarghes
- **Created:** 15-07-2020 22:40
- **Updated:** 14-09-2023 13:45
- **Resolved:** 26-08-2020 23:54
- **Resolution:** Not a Defect
- **Labels:** UI

**Customer Impact (verbatim):**

> 3-Low

**Description (verbatim):**

> Description
>  How to reproduce
>  1. Launch application and select 1000BT1 master jitter and droop 
>  2.Deselect Droop.
>  3.Click on master jitter
>  4.Check the band pass filter.
>
> Observation:
>  1) Filter is grayed out .
>  2) Master node of the measurement is selected.
>
> Before resolving ensure it is working… [truncated]


---

#### `USB-3573` — [AP-3567] UI for Lane 1 and Lane 0 should be visible, when Both selection is made and Channel selection is fixed

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** sacb
- **Created:** 18-02-2020 01:22
- **Updated:** 13-09-2023 18:12
- **Resolved:** 01-03-2020 20:51
- **Resolution:** Done
- **Components:** USB4-TE-2020
- **Labels:** UI

**Description (verbatim):**

> UI for Lane 1 and Lane 0 should be visible, when Both selection is made from lane selection drop down in DUT panel
>
> When Both is selected user cannot make channel selection it will be fixed


---

#### `USB-3572` — [AP-3567] UI for Lane 1 should be visible, when Lane 1 selection is made from lane selection drop down in DUT panel

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** sacb
- **Created:** 18-02-2020 01:19
- **Updated:** 13-09-2023 18:12
- **Resolved:** 01-03-2020 20:50
- **Resolution:** Done
- **Components:** USB4-TE-2020
- **Labels:** UI

**Description (verbatim):**

> Lane 1 UI should be create in acquisition panel with channel selection


---

#### `USB-3571` — [AP-3567] UI for Lane 0 should be visible, when Lane 0 selection is made from lane selection drop down in DUT panel

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** sacb
- **Created:** 18-02-2020 01:18
- **Updated:** 13-09-2023 18:12
- **Resolved:** 01-03-2020 20:49
- **Resolution:** Done
- **Components:** USB4-TE-2020
- **Labels:** UI

**Description (verbatim):**

> Lane 0 UI should be create in acquisition panel with channel selection


---

#### `USB-3567` — As a user I want to do Lane and Channel Selection in Acquisition panel so that channel selection of particular lane can be done

- **Type:** Story
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** sacb
- **Created:** 18-02-2020 01:12
- **Updated:** 13-09-2023 18:12
- **Resolved:** 01-03-2020 20:56
- **Resolution:** Done
- **Components:** USB4-TE-2020
- **Labels:** UI

**Acceptance Criteria (verbatim):**

> * UI for Lane 0 should be visible, when Lane 0 selection is made from lane selection drop down in DUT panel 
> * UI for Lane 1 should be visible, when Lane 1 selection is made from lane selection drop down in DUT panel 
> * UI for Lane 1 and Lane 0 should be visible, when Both selection is made from lane selection drop down in DUT panel 
> * For Lane 0 and Lane 1 user can make channel selection.
> * When… [truncated]

**Description (verbatim):**

> Channel and Lane selection should be visible based on lane selection drop down in DUT panel


---

#### `USB-3552` — As a user, i want to create USB4 TekExpress UI for DUT panel, so that it will be useful to user to enter values

- **Type:** Story
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** sacb
- **Created:** 17-02-2020 21:54
- **Updated:** 13-09-2023 18:12
- **Resolved:** 27-04-2020 20:56
- **Resolution:** Done
- **Components:** USB4-TE-2020
- **Labels:** UI

**Description (verbatim):**

> *Acceptance Criteria*  
>
> •	Have provision to have space for SigTest UI in feature


---

#### `USB-3465` — As a user, I want to  create USB4 TekExpress DUT panel UI for lane selection, so that DUT panel UI can be test

- **Type:** Story
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** sacb
- **Created:** 04-02-2020 22:11
- **Updated:** 14-09-2023 07:18
- **Resolved:** 24-02-2020 01:24
- **Resolution:** Done
- **Components:** USB4-TE-2020
- **Labels:** UI

**Description (verbatim):**

> *Acceptance Criteria* 
>
> •	CTS version can be text instead of drop down.
>
> •	Lane selection UI need to be changed, no need of pop up UI, this should be visible in DUT panel.
>
> -•	-Channel selection UI should be moved to Acq panel--


---

#### `TEKEXPFW-3730` — [DDR5] Support for 'Do not show this message pop-up' feature after start of the TekExpress execution

- **Type:** Improvement
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** ckappaga
- **Created:** 28-03-2020 03:52
- **Updated:** 14-09-2023 11:58
- **Resolved:** 17-05-2020 22:24
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> [Acceptance Criteria]
>  # Popup with 'Do not show this message again' should be able to show up after RUN is clicked
>  # User should be able to click this check box to hide this popup for consecutive RUN
>  # After the app is closed and relaunched, this popup should appear again for the first RUN
>  # PRT… [truncated]


---

#### `ET3R-1226` — UI And Xml Support for VNA Report Integration for RL

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** sank
- **Created:** 17-10-2019 22:22
- **Updated:** 13-09-2023 19:57
- **Resolved:** 05-11-2019 20:21
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> 1) UI:      Select VNA Report. Browse and select *.s1p or *.s2p file
>  2) Test Comment : Add Test Comment Row for RL
>  3) RL Calibartion: Hide Calibration Button or show as not Applicable if VNA Report is selscted
>  4) Update Test Description as below if VNA Report is selected: 
>  When VNA is selected f… [truncated]


---

#### `MIPIMPHYTX-1503` — Test 1.3.6 should be informative in SYS mode

- **Type:** Story
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 26-06-2019 04:29
- **Updated:** 14-09-2023 07:53
- **Resolved:** 23-07-2019 20:54
- **Resolution:** Done
- **Components:** User Interface
- **Labels:** Nova, UI

**Description (verbatim):**

> Test 1.3.6 should be informative in SYS mode.


---

#### `TEKEXPFW-4772` — Follow up with Devops team to show AppEmulator in Terminator Tekscope Analyze menu

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 21-01-2021 01:05
- **Updated:** 14-09-2023 08:50
- **Resolved:** 27-01-2021 19:41
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Tekscope Analyze menu is not populating AppEmulator as SRM.XML file is not merged with ISD.XML file of Tekscope.
> Follow with DevOps team and complete it.


---

#### `TEKEXPFW-4771` — Pending issues in TekDisplay unit keypad

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 21-01-2021 01:03
- **Updated:** 14-09-2023 08:50
- **Resolved:** 05-02-2021 01:21
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Acceptance Criteria:
> 1. Add Display value Tag in parameter section.
> 2. Add proper parameters for testing general, analyze and acquire parameters.
> 3. Test all combinations
>
> Doneness:
> 1. Display value tag is added in xml
> 2. Tested all scenarios.


---

#### `MIPIMPHYTX-1694` — In Report Panel, unable to uncheck the "Create report automatically at the end of the run" checkbox

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** AKAC
- **Created:** 29-09-2019 20:45
- **Updated:** 05-01-2024 02:39
- **Resolved:** 15-10-2019 20:41
- **Resolution:** Cannot Reproduce
- **Labels:** UI

**Customer Impact (verbatim):**

> 2-Medium

**Description (verbatim):**

> In Report Panel, unable to uncheck the "Create report automatically at the end of the run" checkbox and throwing Tekexpress Error.
>
> Please find the attached screen shot.


---

#### `USB-2861` — [USB-2805] Defect fixing

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** sacb
- **Created:** 29-08-2019 01:47
- **Updated:** 14-09-2023 07:18
- **Resolved:** 16-09-2019 05:16
- **Resolution:** Done
- **Components:** USB3-MR3
- **Labels:** UI


---

#### `USB-2860` — [USB-2805] developer testing with VOE

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** sacb
- **Created:** 29-08-2019 01:45
- **Updated:** 14-09-2023 07:18
- **Resolved:** 16-09-2019 05:17
- **Resolution:** Done
- **Components:** USB3-MR3
- **Labels:** UI


---

#### `USB-2859` — [USB-2805] Verify PI commands

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** sacb
- **Created:** 29-08-2019 01:43
- **Updated:** 14-09-2023 07:18
- **Resolved:** 17-09-2019 00:19
- **Resolution:** Done
- **Components:** USB3-MR3
- **Labels:** UI


---

#### `USB-2858` — [USB-2805] Writing requirements for MR3 UI changes

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** sacb
- **Created:** 29-08-2019 01:41
- **Updated:** 14-09-2023 07:18
- **Resolved:** 03-09-2019 20:28
- **Resolution:** Done
- **Components:** USB3-MR3
- **Labels:** UI


---

#### `USB-2857` — [USB-2805] UI validation for UI design for Lane 0 and Lane 1

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** sacb
- **Created:** 29-08-2019 01:34
- **Updated:** 14-09-2023 07:18
- **Resolved:** 15-09-2019 21:27
- **Resolution:** Done
- **Components:** USB3-MR3
- **Labels:** UI


---

#### `USB-2856` — [USB-2805] XML changes for UI design for Lane 0 and Lane 1

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** sacb
- **Created:** 29-08-2019 01:32
- **Updated:** 14-09-2023 07:18
- **Resolved:** 15-09-2019 21:26
- **Resolution:** Done
- **Components:** USB3-MR3
- **Labels:** UI


---

#### `USB-2855` — [USB-2805] UI design for Lane 1

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** sacb
- **Created:** 29-08-2019 01:31
- **Updated:** 14-09-2023 07:18
- **Resolved:** 15-09-2019 21:26
- **Resolution:** Done
- **Components:** USB3-MR3
- **Labels:** UI


---

#### `USB-2854` — [USB-2805] UI design for Lane 0

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** sacb
- **Created:** 28-08-2019 23:55
- **Updated:** 14-09-2023 07:18
- **Resolved:** 15-09-2019 21:26
- **Resolution:** Done
- **Components:** USB3-MR3
- **Labels:** UI


---

#### `TEKEXPFW-4245` — [Pre-work] Conclude and come up with a proposal for the feature "Run all pre-recorded sessions in batch mode"

- **Type:** Developer Story
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 29-07-2020 04:54
- **Updated:** 13-09-2023 18:22
- **Resolved:** 16-09-2020 00:27
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> [Acceptance Criteria]
> - Create a document with all 3 options with mock screenshots
> - Discuss with Ashok/Kamelsh/Raghav (DPHY) and PCIE (Mahesh/Nitin) teams and finalize the proposal
> - Come up with a proposal document with UI and work flow
> - This document should be used as input for implementation
> -… [truncated]


---

#### `TEKEXPFW-4809` — Implementation to include test name as a column in report statistics

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 07-02-2021 22:12
- **Updated:** 14-09-2023 08:50
- **Resolved:** 10-03-2021 00:14
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Acceptance criteria:
> 1. Report statistics table to have a column for the measurement name
> 2. SWE testing with the build
> 3. SQE validation
>
> Doneness:
> 1. Include test name as well in report statistics table.
> 2. PRTI and SWE
> 3. SQE testing
>
> Completeness:
> 1. Test name included in report statistics table… [truncated]


---

#### `GAR-5340` — [Garuda DP] [PLAE Feedback-Nitin] Application lands on empty sequence page after hitting run button

- **Type:** Issue
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 25-05-2023 05:19
- **Updated:** 14-09-2023 10:35
- **Resolved:** 26-07-2023 01:37
- **Resolution:** Duplicate
- **Labels:** ClientApp-DP, PLAE-Feedback, TF_General

**Description (verbatim):**

> After clicking Run button of the application lands on an empty sequence page. The user is unsure if anything is running at this state.
>
>  !image-2023-05-25-17-46-30-820.png|thumbnail! 
>
> PLAE Comment:
>
>  !image-2023-05-25-17-47-37-507.png|thumbnail!


---

#### `OUI-230` — Add 2 Stack 33SX Scope to equipment palette and make OMA connection

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 27-11-2018 02:16
- **Updated:** 13-09-2023 19:09
- **Resolved:** 30-11-2018 20:06
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> # 2 Stack 33SX scope with SSU running should be detectable by OUI.
>  # It needs to be populated in the left pallet.
>  # Also connections between this scope and OMA should be possible in the right panel.
>  # Save and recall this OMA definition successfully when corresponding hardware available.


---

#### `OUI-125` — Error logging shouldn't modify system files.

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** sbrokaw
- **Created:** 01-10-2018 13:41
- **Updated:** 13-09-2023 19:09
- **Resolved:** 19-10-2018 11:27
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> error logs should not be stored in the 'C:\Program Files' directory. This is a system directory and it is causing permission issues in Windows 10 to have a program constantly modifying files in this directory. Move the error log to the location where the other OUI apps log their errors 
> "C:\Users\<u… [truncated]


---

#### `DCG-122` — TekExpress UI Code Template creation

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 23-07-2018 03:58
- **Updated:** 13-09-2023 20:18
- **Resolved:** 02-07-2019 21:46
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Customize and simplify the TekExpressAppEmulator provided by Framework team and make it as code template for new applications.


---

#### `DCG-118` — WPF application to view static code analysis statistics

- **Type:** New Feature
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 28-06-2018 03:37
- **Updated:** 13-09-2023 20:18
- **Resolved:** 24-07-2018 04:27
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Develop WPF UI application to view static code analysis statistics of all xml files present in given folder or sub folders.


---

#### `OUI-291` — Accept (Ok button) or reject (Cancel button) changes in OMA configurations

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 13-12-2018 11:28
- **Updated:** 13-09-2023 19:09
- **Resolved:** 13-12-2018 11:30
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Clicking Ok button in HW Setup window should accept and remember the changes in OMA configuration. Bringing HW Setup window again should populate latest OMA changes.
>
> Similarly clicking Cancel button should reject the changes in OMA configurations and revert back to last OMA configuration.


---

#### `DP-2527` — Error showing while clicking Deselect All button  in Test Selection Panel.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** rmohant1
- **Created:** 27-09-2018 05:01
- **Updated:** 14-09-2023 12:16
- **Resolved:** 03-10-2018 03:44
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> ->Open the DP Application.
>
> ->Go to Setup tab then click Test Selection Panel.
>
> ->Click Deselect All button.
>
> ->Error is showing.
>
> ->Find the attached screen short.


---

#### `DP-2526` — Error showing while Unchecked the other data rate while UHBR only selected

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** rmohant1
- **Created:** 27-09-2018 04:53
- **Updated:** 14-09-2023 12:16
- **Resolved:** 03-10-2018 03:42
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Steps to reproduce:-
>
> ->Open DP Tekexpress Application.
>
> ->Try to unchecked all data rate except UHBR.
>
> ->Error is showing  "At least one data rate should be selected."
>
> ->Find the attached screen short.


---

#### `TEKEXPFW-3051` — Image clipping in BRR Report - On change of report window size the images do not shrink but get clipped.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** BBHANUCH
- **Created:** 04-02-2018 22:23
- **Updated:** 14-09-2023 13:34
- **Resolved:** 18-02-2018 22:19
- **Resolution:** Duplicate
- **Components:** FW
- **Labels:** ui

**Description (verbatim):**

> When the user changes the size of the report window then the images in the report do not shrink but get clipped.


---

#### `BRR-1507` — 1000BaseT1(Live Mode)-TX_PK Differential Output Overall Execution Time and Test results is not displaying

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** tramoju
- **Created:** 02-05-2018 02:57
- **Updated:** 14-09-2023 12:49
- **Resolved:** 02-05-2018 04:10
- **Resolution:** Fixed
- **Labels:** Automation, BRR_1000BaseT-1, UI

**Description (verbatim):**

> 1)Select TX_Pk Differential measurement
>  2)Select 1000BaseT1 suite
>  3)Select Acquire live mode
>  4)Run TM5 script
>  5)After generation of report we can see both Overall Execution Time and Overall Test Results is not displaying.
>
> For reference I am adding pre-recorded mode report


---

#### `DCG-99` — [Qualcomm Phase2] Transfer all images from server to client using Socket programming

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 03-04-2018 22:36
- **Updated:** 13-09-2023 20:18
- **Resolved:** 03-05-2018 02:37
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Transfer all images from server to client using Socket programming


---

#### `TEKEXPFW-3205` — Opening a session adds additional UI in Acquisition panel in Pre-Recorded Mode

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 30-04-2018 03:30
- **Updated:** 14-09-2023 11:58
- **Resolved:** 02-03-2021 21:40
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 2-Medium

**Description (verbatim):**

> # Launch the application
>  # Select prerecorded mode. Choose the particular waveforms and
>  # Save the session
>  # Now kill the application from Task Manager
>  # Re launch the application again. Choose the option "Open Session" that will open the previous saved session .
>  # Go tot he acquisition panel.… [truncated]


---

#### `BRR-1496` — wrong pin information for RL measurements

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** salapart
- **Created:** 29-04-2018 22:19
- **Updated:** 14-09-2023 12:49
- **Resolved:** 30-04-2018 00:17
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> Attached screen capture for your reference
>
> This might lead to customer confusion with test fixture they use.


---

#### `BRR-1490` — 100BaseT1-For RL measurement overall test report shows pass when test result is failing

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** tramoju
- **Created:** 26-04-2018 00:47
- **Updated:** 14-09-2023 12:49
- **Resolved:** 26-04-2018 04:27
- **Resolution:** Fixed
- **Labels:** Automation, BRR_1000BaseT-1, UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> For 100BaseT1 measurement after execution of measurement we can observe in the report.please refer attached image.
>  Scope IP-134.64.245.235
>  !image-2018-04-26-13-20-55-981.png!!image-2018-04-27-01-22-20-646.png!


---

#### `DCG-105` — Explore the features of Code Analysis Tools

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 07-05-2018 04:07
- **Updated:** 13-09-2023 20:18
- **Resolved:** 07-05-2018 04:08
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Explore the features of code analysis tools (VS inbuilt, Resharper and PVS-Studio) and come up with a table and recommendation.


---

#### `RPAMT-626` — Usability testing comments

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** JPALADIY
- **Created:** 15-04-2018 21:10
- **Updated:** 14-09-2023 12:30
- **Resolved:** 17-04-2018 02:03
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 2-Medium

**Description (verbatim):**

> 1. Labels of specifications are placed very close to the buttons.
>
> 2. Scope limit popup is blocking the application. 
>
> For AC Common Mode Output Voltage, for Scope Noise, I entered the value ‘3333333333’. It gave the error message that is shown above. I clicked on okay button. Error message turned o… [truncated]


---

#### `DCG-104` — Explore FxCop - C# Static Code Analysis

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 23-04-2018 02:58
- **Updated:** 13-09-2023 20:18
- **Resolved:** 03-05-2018 02:38
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Explore FxCop - C# Static Code Analysis


---

#### `BRR-1479` — For RL measurement PreRecorded feature broken.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** tramoju
- **Created:** 22-04-2018 23:41
- **Updated:** 14-09-2023 12:49
- **Resolved:** 24-04-2018 02:33
- **Resolution:** Fixed
- **Labels:** BRR_1000BaseT-1, UI

**Description (verbatim):**

> For RL measurement even though calibration files are present it is throwing popup saying "Calibration Files Are Missing"
>
>  1)Select RL measurement
>  2)Go to Calibration recall calibration files from "C:\Users\Public\Tektronix\TekApplications\Automotive-Ethernet\1000Base-T1\ReturnLossCalibrationFiles"… [truncated]


---

#### `CS-166` — Add Compliance/User Defined mode in DUT panel

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 14-05-2017 22:51
- **Updated:** 14-09-2023 08:20
- **Resolved:** 18-05-2017 22:59
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Add Compliance/User Defined mode in DUT panel


---

#### `RXGKRT-67` — Double 'deskew' option in options

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** JPALADIY
- **Created:** 21-08-2017 00:31
- **Updated:** 14-09-2023 12:02
- **Resolved:** 18-09-2017 22:57
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> 1. Launch the application, and click on the 'Options'
>
> Actual Result: Double deskew options are appearing.
>
> Expected Result: Only one deskew option shall present.


---

#### `RXGKRT-141` — Remove Signal Type Dropdown in Acqiue Tab for Differential peak-peak output voltage (max) with Tx disabled

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** AKAC
- **Created:** 22-03-2018 22:17
- **Updated:** 14-09-2023 12:39
- **Resolved:** 22-03-2018 23:31
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Remove Signal Type Dropdown in Acquire Tab for Differential peak-peak output voltage (max) with Tx disabled.
>
> Please find the attached screen shot


---

#### `MIPIMPHYTX-1321` — Customer query regarding PI commands

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 12-03-2018 02:45
- **Updated:** 14-09-2023 07:53
- **Resolved:** 12-03-2018 02:47
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Refer the attached mail for the queries regarding PI


---

#### `DCG-90` — Help Tapojyoti in SAS ART

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 08-02-2018 00:57
- **Updated:** 13-09-2023 20:18
- **Resolved:** 08-02-2018 01:00
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> in SAS application, clicking Data Rate checkboxes in DUT panel takes 2-3 mins to respond. Hence customer raised ART. He sought my help.


---

#### `RXGKRT-103` — Hide Refresh Sources button from Acquisition panel

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 12-12-2017 22:27
- **Updated:** 14-09-2023 12:39
- **Resolved:** 13-12-2017 00:12
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Hide Refresh Sources button from Acquisition panel


---

#### `TEKEXPFW-1669` — UIFT comments in Preference panel

- **Type:** Improvement
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 11-08-2016 22:27
- **Updated:** 14-09-2023 11:59
- **Resolved:** 26-07-2017 21:52
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> UIFT comments in Preference panel: (Refer attached image)
> 1. Spacing between ‘times’ and textbox should be 5px
> 2. Spacing between ‘seconds’ and textbox should be 5px


---

#### `EPAMT-180` — Support .html, .mht, .CSV & .pdf report formats

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 14-02-2017 23:32
- **Updated:** 14-09-2023 10:32
- **Resolved:** 16-02-2017 00:20
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Support .html, .mht, .CSV & .pdf report formats


---

#### `EPAMT-179` — Validate Appending the report option

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 14-02-2017 23:03
- **Updated:** 14-09-2023 10:32
- **Resolved:** 21-02-2017 02:19
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Validate Appending the report option


---

#### `EPAMT-178` — Validate Select/Deselect tests in Test Selection panel

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 14-02-2017 23:02
- **Updated:** 14-09-2023 10:32
- **Resolved:** 15-02-2017 22:59
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Validate Select/Deselect tests in Test Selection panel


---

#### `EPAMT-177` — Validate Save Recall functionality

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 14-02-2017 23:00
- **Updated:** 14-09-2023 10:32
- **Resolved:** 15-02-2017 22:43
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Validate Save Recall functionality


---

#### `ECAUIT-189` — Add tabbed UI and RL for Eye measurement in Global panel for CAUI4 device

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 19-12-2016 01:05
- **Updated:** 13-09-2023 19:58
- **Resolved:** 20-12-2016 00:21
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Add tabbed UI and RL for Eye measurement in Global panel for CAUI4 device.
> RL: 0.25M to 16M, default: 1M


---

#### `ECAUIT-188` — Add Cross talk source checkbox in DUT panel for CAUI4 device

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 19-12-2016 00:09
- **Updated:** 13-09-2023 19:58
- **Resolved:** 20-12-2016 00:20
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Add Crosstalk source checkbox in DUT panel only for CAUI4 device


---

#### `RCAUIT-533` — Change "All" to "All(1-9dB)" in CTLE option

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 28-11-2016 22:04
- **Updated:** 14-09-2023 07:59
- **Resolved:** 02-12-2016 02:53
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Change "All" to 
> "All(1-2dB)" in CTLE option for TP4 suite
> "All(1-9dB)" in CTLE option for all other suites


---

#### `EPAMT-312` — Remove "Phase optimize each eye" from Global panel

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 29-03-2017 23:29
- **Updated:** 14-09-2023 10:32
- **Resolved:** 30-03-2017 01:48
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Mail from Kiran:
> “Phase optimize each eye” configuration was added when we were doing TDECQ in matlab.
>
> Now TDECQ is done in JNB and JNB does it for common phase. 
> We can remove this configuration parameter.


---

#### `EPAMT-357` — Clicking Schematic button should open corresponding schematic file

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 13-04-2017 03:18
- **Updated:** 14-09-2023 10:32
- **Resolved:** 13-04-2017 03:21
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Clicking Schematic button should open corresponding schematic file


---

#### `TEKEXPFW-2459` — Probe Configuration window is appearing while default setup

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 18-04-2017 00:22
- **Updated:** 14-09-2023 11:58
- **Resolved:** 29-05-2017 22:17
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> While performing recall default, probe config window popups and blinks several times which is not the expected behavior.


---

#### `PCIEX-1629` — Include generation/version text within test name.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 06-04-2017 23:14
- **Updated:** 14-09-2023 12:08
- **Resolved:** 22-05-2017 20:51
- **Resolution:** Fixed
- **Labels:** ui

**Description (verbatim):**

> The similar test names in different version are being made unique using whitespace at times. We can include generation/version text within test name to achieve the uniqueness.


---

#### `PCIEX-1628` — Use properties to identify test of different versions instead of test names

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 06-04-2017 23:08
- **Updated:** 14-09-2023 14:04
- **Resolved:** 22-05-2017 20:54
- **Resolution:** Will Not Fix
- **Labels:** ui

**Description (verbatim):**

> In the existing implementation the Tests of different versions are being distinguished using the test names. This is a risky approach as there is no proper naming convention defined for the tests and same test name may be applicable to different version.
> Therefore, instead of using test names, we ne… [truncated]


---

#### `PCIEX-1627` — Provide proper comments for “Update UI on demand” approach

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 06-04-2017 23:04
- **Updated:** 14-09-2023 12:08
- **Resolved:** 21-04-2017 04:16
- **Resolution:** Fixed
- **Labels:** ui

**Description (verbatim):**

> The existing implementation of PCI uses push mechanism to notify if any changes in settings/ parameters have been made.
> For an example, if the voltage swing is changed in the DUT panel, then the respective general parameter is changed and this change notification is published. There is subscription… [truncated]


---

#### `EPAMT-318` — Probe Configuration OCW should show CH2 and CH3 connected module details

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 06-04-2017 22:23
- **Updated:** 14-09-2023 12:41
- **Resolved:** 06-04-2017 22:47
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Probe Configuration OCW should show CH2 and CH3 connected module details


---

#### `EPAMT-224` — Hide Signaling rate test when Use 80SJNB Data is selected

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 26-02-2017 22:59
- **Updated:** 14-09-2023 12:42
- **Resolved:** 27-02-2017 00:25
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> If “Use 80SJNB Data” is selected then we need to remove signaling rate and average launch power of Off transmitter  tests from test tree.


---

#### `ECAUIT-190` — Support different set of electrical modules in Compliance and User Defined mode

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 20-12-2016 23:25
- **Updated:** 13-09-2023 19:58
- **Resolved:** 21-12-2016 01:55
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Support different set of electrical modules in Compliance and User Defined mode.
> ex: 80E07 and 80E08 modules are supported only in User Defined mode.


---

#### `RCAUIT-369` — Global config parameters

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 15-06-2016 01:53
- **Updated:** 14-09-2023 10:35
- **Resolved:** 22-06-2016 01:57
- **Resolution:** Duplicate
- **Labels:** UI

**Description (verbatim):**

> Global config parameters


---

#### `RCAUIT-349` — Data Rate support in DUT panel

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 17-05-2016 04:17
- **Updated:** 14-09-2023 07:59
- **Resolved:** 18-05-2016 00:20
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Data Rate should be exposed in DUT panel as TekDisplay for all suites/devices.
> Compliance mode->disable control with default value
> User Defined mode->enable and user can set any value between min and max with 5 digit precision


---

#### `ECAUIT-13` — CLONE - Popup settings and Number of Runs in Preference Panel should have min and max limits

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 14-06-2016 22:37
- **Updated:** 13-09-2023 19:58
- **Resolved:** 10-08-2016 01:08
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Preference Panel :
> Popup settings: 1sec to 300 sec
> Number of Runs: 1 to 200


---

#### `RCAUIT-362` — Popup settings and Number of Runs in Preference Panel should have min and max limits

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 14-06-2016 22:30
- **Updated:** 14-09-2023 07:59
- **Resolved:** 14-06-2016 23:39
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Preference Panel :
> Popup settings: 1sec to 300 sec
> Number of Runs: 1 to 200


---

#### `RCAUIT-337` — Replace CheckBox by TekCheckButton for Apply Filter control

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 13-05-2016 01:04
- **Updated:** 14-09-2023 07:59
- **Resolved:** 13-05-2016 01:07
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Replace CheckBox by TekCheckButton for Apply Filter control


---

#### `RCAUIT-248` — [R3]Switch between Compliance/User define mode throws invalid parameter popup in Config panel

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 12-04-2016 23:08
- **Updated:** 14-09-2023 12:04
- **Resolved:** 20-04-2016 00:51
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Switch between Compliance/User define mode throws invalid parameter popup in Config panel


---

#### `RCAUIT-249` — CLONE - [R2]Switch between Compliance/User define mode throws invalid parameter popup in Config panel

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 13-04-2016 01:55
- **Updated:** 14-09-2023 12:04
- **Resolved:** 20-04-2016 21:33
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Switch between Compliance/User define mode throws invalid parameter popup in Config panel


---

#### `DP-1176` — DP1.2 : Refactor DPR 100 code to handle DUT changes from PI

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** rkatti
- **Created:** 14-04-2016 01:20
- **Updated:** 14-09-2023 09:02
- **Resolved:** 15-04-2016 00:14
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Refactor DPR 100 code to handle DUT changes from PI.


---

#### `BRR-235` — Droop meas- Margin information do not have any units

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** salapart
- **Created:** 26-11-2015 22:21
- **Updated:** 14-09-2023 12:50
- **Resolved:** 22-01-2018 20:38
- **Resolution:** Fixed
- **Labels:** Elem_BRR, UI

**Description (verbatim):**

> when I ran Tx Droop measurement it passed successfully
> when I looked in to report I was confused with Margin information we provided.
> I think the Margin information is the different of actual vs Expected value.
> but what is missing here is - Margin Units
>
> Please add units to Margin value.


---

#### `EPAMT-15` — Add UI parameter “Phase optimize each eye"

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** kim1
- **Created:** 15-11-2016 22:09
- **Updated:** 14-09-2023 10:32
- **Resolved:** 16-11-2016 00:19
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> please refer email for more details


---

#### `ECAUIT-92` — Acquistion and Save options group has improper white line around it in acquisition panel

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 28-09-2016 01:25
- **Updated:** 13-09-2023 19:58
- **Resolved:** 28-09-2016 01:38
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Acquistion and Save options group has improper white line around it in acquisition panel


---

#### `CPHYX-1442` — In LPHS mode s-parameter and FLT file features not working as expected.

- **Type:** Task
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** skumbha
- **Created:** 16-11-2016 23:25
- **Updated:** 14-09-2023 08:38
- **Resolved:** 17-11-2016 22:22
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Steps:
>
> Case1: Regarding flt files.
>
> 1. Select signal mode as "LPHS".
> 2. Go to high speed jitter and enable embed channel.
> 3. Click on FLT files and compile.
>
> Observation:
>
> It suppose to throw "9406" popup, it is throwing "critical error"'.
>
> Case2:  S-parameter.
> 1. Select signal mode as "LPHS".
> 2. G… [truncated]


---

#### `RCAUIT-524` — Hide De-Embedding controls in Pre-Recorded mode

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 06-11-2016 23:11
- **Updated:** 14-09-2023 12:04
- **Resolved:** 07-11-2016 22:57
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Hide De-Embedding controls in Pre-Recorded mode


---

#### `HDMI-295` — [UI] Sink Electrical and Protocol > DUT > Termination Source should be changed as Power Supply

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** SKUMAR2
- **Created:** 27-06-2014 01:20
- **Updated:** 14-09-2023 12:14
- **Resolved:** 26-02-2015 20:51
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> > Sink Electrical and Sink Protocol 
> > DUT Panel
> Configuration Parameter "Termination Source" text to be changed to "Power Supply"


---

#### `DPOJET-636` — Refactor: Measurements are getting added from Jitter tree even after clicking close button

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** GSHASHID
- **Created:** 17-07-2014 21:50
- **Updated:** 14-09-2023 14:01
- **Resolved:** 22-04-2015 03:13
- **Resolution:** Will Not Fix
- **Labels:** UI

**Description (verbatim):**

> Launch DPOJET 
> Goto Breakdown of Jitter OCW 
> click on measurements 
> after clicking on measurements click X Button .
> Measurements should not get add but they are getting added.


---

#### `DPOJET-633` — [Kauai_R1]: Exception occured in UI

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** amohamme
- **Created:** 17-07-2014 04:47
- **Updated:** 14-09-2023 13:17
- **Resolved:** 18-07-2014 02:06
- **Resolution:** Cannot Reproduce
- **Labels:** UI

**Description (verbatim):**

> Refer to the attachment "Exception.jpg".
>
> See the end of this message for details on invoking 
> just-in-time (JIT) debugging instead of this dialog box.
>
> ************** Exception Text **************
> System.NullReferenceException: Object reference not set to an instance of an object.
>    at Tektronix.S… [truncated]


---

#### `DPOJET-621` — Refactor: Mouse hovered over NPJ shows NPJ(Clock NPJ)

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** amohamme
- **Created:** 16-07-2014 01:32
- **Updated:** 14-09-2023 12:16
- **Resolved:** 09-09-2014 22:39
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Steps:
> ********
> 1> Launch DPOJET.
> 2> Go to Jitter/Noise tab and add NPJ measurement.
> 3> Hover the mouse over added NPJ measurement and you will see NPJ1 (Clock NPJ1) which is incorrect. Refer to the attachment.


---

#### `DPOJET-940` — Few improvements required in Preferences->General tab

- **Type:** Improvement
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** amohamme
- **Created:** 13-11-2014 01:51
- **Updated:** 14-09-2023 12:43
- **Resolved:** 20-11-2014 21:09
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Few improvements required in Preferences->General tab are given below
>           a> Label alignment with respect to other labels
>           b> Label alignment with respect to edit box
>
> Refer to the attachment


---

#### `DDRTFL-2354` — Updating GUI fields based on UX Review

- **Type:** Improvement
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** sjhawar
- **Created:** 30-01-2024 03:18
- **Updated:** 22-02-2024 22:05
- **Resolved:** 08-02-2024 01:17
- **Resolution:** Fixed
- **Labels:** UX-Feedback

**Description (verbatim):**

> * Update default path for recorded path
>  * Scope noise value and Ref id should be mandatory field 
>  * Custom data rate is mandatory field
>  * selected measurements are mandatory field


---

#### `GAR-4612` — After refreshing dashboard removed widgets are re-appearing on dashboard.

- **Type:** Defect
- **Status:** Closed
- **Priority:** Minor
- **Reporter:** u612584
- **Created:** 15-03-2023 02:38
- **Updated:** 01-05-2024 05:12
- **Resolved:** 21-03-2023 00:29
- **Resolution:** Fixed
- **Labels:** TestcaseNotRequired, UI

**Description (verbatim):**

> Login UI http://172.19.211.237:4200/tekflow/dashboard
> Click on Dashboard
> > click on any widgets 
> > right click and select remove
> > refresh that page


---
