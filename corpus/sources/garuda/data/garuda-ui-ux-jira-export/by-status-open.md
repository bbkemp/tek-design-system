---
provenance: observed
class: data-export-cluster
export_id: garuda-ui-ux-jira-export
export_title: Garuda UI/UX JIRA export
export_source: JIRA project GAR (Garuda), filter "UI-UX filtered trial"
export_date: 2026-06-25
cluster_id: by-status-open
cluster_value: "Open"
cluster_column: Status
row_count: 230
related_screens: []
related_docs: []
applies_to: [garuda]
---

# Open status issues — Garuda UI/UX

## Summary

All Status=Open issues from the Garuda UI/UX JIRA export, regardless of priority. Useful for "what is still pending in the Garuda UI/UX backlog right now" queries. Cross-listed with priority clusters.

## Column inventory

Per-issue fields captured: Issue key, Type, Status, Priority, Summary, Reporter, Created, Updated, Resolved, Resolution, Components, Labels, Customer Application, Customer Visibility, Business Value, User Pain Index, Customer Impact, Action Request, Acceptance Criteria, Engineering Notes, Use Cases, Description.

Many JIRA custom fields are populated unevenly across rows — coverage is reported per-issue inline. Long free-text fields are truncated inline at the boundaries noted in the cluster summary.

## Distribution by Priority

| Priority | Count |
|---|---:|
| Blocker | 8 |
| Critical | 29 |
| Major | 64 |
| Minor | 128 |
| Trivial | 1 |
| **Total** | **230** |

## Rows (verbatim)

Rows are grouped by Priority. Within each section, ordering follows the source CSV.

### Priority: Blocker (8)

#### `GAR-6797` — Plot is not coming in the PLOT panel (UI) and in our report as well - on Beta-23

- **Type:** Issue
- **Status:** Open
- **Priority:** Blocker
- **Reporter:** u618322
- **Created:** 09-11-2023 00:43
- **Updated:** 30-11-2023 21:33
- **Labels:** Client-App-USB4V2

**Description (verbatim):**

> Update on 01-Dec-2023 from USB team:
> After further debug, team identified that is the issue is with latest version (v0.87) of SigTest tool. This is not related to TekFlow platform
> -----------------------------------------------------------------------------------------------------------------------------------
> The plots were appearing in Beta 22, but broken in Beta 23.
> !1.png!


---

#### `GAR-7078` — [OnScope] On-Scope UI: Manage tab - A user to have the same options as existing TF.

- **Type:** Story
- **Status:** Open
- **Priority:** Blocker
- **Reporter:** bpatil
- **Created:** 07-12-2023 08:23

**Description (verbatim):**

> A user to have the same options as existing TF.
>
> No option needed to add scope as the current system will be the test bench. 
>  • This needs to be automatically configured internally. <No change from existing TF>


---

#### `GAR-7077` — [OnScope] On-Scope UI: Tests Tab -A user to have the same options as existing TF.

- **Type:** Story
- **Status:** Open
- **Priority:** Blocker
- **Reporter:** bpatil
- **Created:** 07-12-2023 08:18

**Description (verbatim):**

> A user to have the same options as existing TF.
>
> +<No change from existing TF>+


---

#### `GAR-2423` — [UI] Global settings must have group option (Box/Tab) for different setting groups

- **Type:** Story
- **Status:** Open
- **Priority:** Blocker
- **Reporter:** ckappaga
- **Created:** 22-05-2022 23:14
- **Updated:** 17-08-2022 02:22
- **Labels:** ClientApp-LPDDR4

**Description (verbatim):**

> # In Current GUI of TekFlow, we are not able to group a list of Global setting that below one group.
>  # Please make a provision to either create TAB wise grouping or BOX wise grouping in the GUI
>  # So, global settings can differentiate the respective group setting easily.
>  # See attached LPDDR4 snap shots where all the WRITE and READ burst related settings are in same order and does not differentiate like any earlier DDR applications (DDRA / TekExpress).
>  # See another snap shot, which gives a m… [truncated]


---

#### `GAR-7080` — [OnScope] On-Scope UI: De-embedding Filter support - User should be able to select a filter file

- **Type:** Story
- **Status:** Open
- **Priority:** Blocker
- **Reporter:** bpatil
- **Created:** 07-12-2023 08:27

**Description (verbatim):**

> User should be able to select a filter file
>
>  
>
> Current TE and TF off-scope supports this +<No change from existing TF>+


---

#### `GAR-7079` — [OnScope] On-Scope UI: Results - User should have the ability to view the results after each run

- **Type:** Story
- **Status:** Open
- **Priority:** Blocker
- **Reporter:** bpatil
- **Created:** 07-12-2023 08:25

**Description (verbatim):**

> User should have the ability to view the results after each run
>
> Current TE and TF off-scope supports this +<No change from existing TF>+


---

#### `GAR-6124` — Number of UIs (Unit Interval) Feature

- **Type:** Epic
- **Status:** Open
- **Priority:** Blocker
- **Reporter:** sjhawar
- **Created:** 23-08-2023 23:24
- **Updated:** 30-01-2024 03:55
- **Labels:** ClientApp-Memory-Tx, ClientApp-Memory-Tx-PI3-Requirement

**Acceptance Criteria (verbatim):**

> * As platform we should define and support population/UI Intervals/acquisitions as feature.
>  * As platform we should define and support configuring of acquisitions.
>  * As platform we should define and support handling dependencies between acquisitions.
>  * As platform we should define and support accumulation of results of acquisitions.
>  * As platform we should define and support handling dependenc… [truncated]

**Description (verbatim):**

> +Number of UIs (Unit Interval) Feature+
>
> We mention the #UIs to acquired, and IS should be able to acquire all those UIs using period measurement (we need to use Both edges as par to setting for DDR)
>
> AS should be able to run all test and give only 1 overall result for the test. If plot is there it should give only overall plot for all #UIs captured.
>
> Since we need to acquire multiple times for this feature, we need an option to save or not save the waveform in database as it can consume lot of… [truncated]


---

#### `GAR-7076` — [OnScope] Application accessibility - A user should be able to access using the URL through a browser in addition to above requirement (Tekscope UI)

- **Type:** Story
- **Status:** Open
- **Priority:** Blocker
- **Reporter:** bpatil
- **Created:** 07-12-2023 08:16

**Description (verbatim):**

> A user should be able to access using the URL through a browser in addition to above requirement (Tekscope UI)
>
> +Engg: Tekflow is already accessible through URL. <No change from existing TF>+


---

### Priority: Critical (29)

#### `GAR-5356` — [TekFlow RAA UI/UX Issue] The user notification messages should be more descriptive

- **Type:** Story
- **Status:** Open
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 27-05-2023 23:46
- **Updated:** 22-04-2024 13:11
- **Labels:** Clarius-Generic, ClientApp-DP, ClientApp-DP-Stabilization, ClientApp-PCIe

**Description (verbatim):**

> The notification message is not super comprehensive. It should mention Which test, which application, which scenario and the purpose of the notification better. The Stop button too is ambiguous. “Stop Test”? or “Stop Notification”?
>  !image-2023-05-28-12-15-42-849.png|thumbnail!


---

#### `GAR-7138` — Need a GUI for Automator instead of cmd window

- **Type:** Requirement
- **Status:** Open
- **Priority:** Critical
- **Reporter:** sjhawar
- **Created:** 11-12-2023 03:01
- **Updated:** 11-12-2023 03:05
- **Labels:** ClientApp-Memory-Tx, IntelFolsom, Micron

**Description (verbatim):**

> Does the DRAMTX Automator have a GUI window, or is it only the python-command window? It should have a stand-alone GUI (not command prompt/shell based).  
>  # Memory-Tx-Update: IMPROVEMENT: We will add a JIRA for adding Automator as standalone GUI to consider this in future. 
>
>  # [GS]: Atleast an information to the customer if there is a mis-match in the Python version. Platform issue.  
>
> [PL: need in PI-4]


---

#### `GAR-7127` — Need a GUI for Uploader instead of cmd window

- **Type:** Requirement
- **Status:** Open
- **Priority:** Critical
- **Reporter:** sjhawar
- **Created:** 11-12-2023 00:22
- **Updated:** 11-12-2023 21:10
- **Labels:** ClientApp-Memory-Tx, IntelFolsom, Micron

**Description (verbatim):**

> Uploader should have its own GUI and not be in a command-prompt window. 
>  # Is there a reason why InstrumentService, DataStoreService, and Uploader cannot share a single window with 3 tabs? This would be cleaner and easier to keep track of for a user, and a single application could be launched rather than 3.  
>
> Memory-Tx-Update: IMPROVEMENT: Log this an improvement in Platform.int 
>
> Receiver team - will require PL prioritization. 
>
> [PL: Need in PI-4] [GS: can there be a workaround?] 
>
> [NJ: Same;… [truncated]


---

#### `GAR-7139` — Light/Dark Theme options for Clarius color themes in GUI

- **Type:** Requirement
- **Status:** Open
- **Priority:** Critical
- **Reporter:** sjhawar
- **Created:** 11-12-2023 03:03
- **Labels:** ClientApp-Memory-Tx, IntelFolsom, Micron

**Description (verbatim):**

> Light/Dark Theme options for Clarius color themes in GUI 
>
> [PL: need in RP1] 
>
> [NJ: Not critical for May release]


---

#### `GAR-7128` — [Intel Folsom] [DDR Rx] Need a GUI for Calibration Service instead of cmd window

- **Type:** Requirement
- **Status:** Open
- **Priority:** Critical
- **Reporter:** skumar5
- **Created:** 11-12-2023 00:38
- **Updated:** 11-12-2023 01:03
- **Labels:** Client-App-DDR5Rx, IntelFolsom, Micron

**Description (verbatim):**

> # Automation must be moved outside of command prompt windows to official GUI (AnalysisService, CalibrationService). The command prompt windows can “pause/freeze” and requires “Pressing Any Key” while your cursor is inside the command prompt window to “un-pause/continue” the rest of the automation. If a user is not directly monitoring the CalibrationService and AnalysisService and they “pause/freeze” in this way, a user may never notice, and there is no indication from the Clarius GUI that this i… [truncated]


---

#### `GAR-1436` — [PCIe] Create Test Bench UI is not intuitive

- **Type:** Story
- **Status:** Open
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 14-02-2022 07:38
- **Updated:** 26-03-2024 03:44
- **Labels:** Clarius-Generic, ClientApp-DP, ClientApp-DP-Stabilization, DP-PI3-CHECK

**Description (verbatim):**

> The "hub address" is where the instrument service is running. This is not very intuitive on the UI. 
>
>  Scope address is the GPIB address. Again, needs hint for this.  
>
> We need to improve the usability issues in the test bench creation. 
>  We have seen people struggling in adding test benches (both Tek Engineers and Customers)
>
>  
>
> * Add feature in UI to get test bench info including connected probe details


---

#### `GAR-4042` — The asset file containing the client id and secret is exposed from the new UI

- **Type:** Security
- **Status:** Open
- **Priority:** Critical
- **Reporter:** u616478
- **Created:** 21-12-2022 04:25
- **Updated:** 26-03-2024 23:36


---

#### `GAR-6309` — [Garuda DP] VM UI is stuck after running 4lanes of DP1.4 apps in multichain fashion

- **Type:** Issue
- **Status:** Open
- **Priority:** Critical
- **Reporter:** mtatiche
- **Created:** 12-09-2023 20:46
- **Updated:** 20-01-2024 01:18
- **Labels:** Clarius-Generic, Clarius-RP1-MustFix, ClientApp-DP

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
> Click on RUN and observe.… [truncated]


---

#### `GAR-6271` — [Garuda DP] Enable multiple license of the same application in the same test machine

- **Type:** Issue
- **Status:** Open
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 11-09-2023 01:14
- **Updated:** 28-11-2023 07:56
- **Labels:** Clarius-Generic, ClientApp-DP, ClientApp-DP-PI3-Feature, ClientApp-DP-Stabilization


---

#### `GAR-6299` — [Garuda DP][PLAE Feedback-Nitin] Test run on multiple test machine should be possible

- **Type:** Issue
- **Status:** Open
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 12-09-2023 01:07
- **Updated:** 29-11-2023 02:09
- **Labels:** Clarius-Generic, ClientApp-DP

**Description (verbatim):**

> Need test time information with AS running on 8 Core 1 laptop, 16 core 1 laptop and 16 core 2 laptops. If platform does not support AS on multiple laptops I would like to know.


---

#### `GAR-6298` — [Garuda DP][PLAE Feedback-Nitin] Progress Bar lacks consistent behavior

- **Type:** Issue
- **Status:** Open
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 12-09-2023 00:52
- **Updated:** 28-11-2023 07:55
- **Labels:** Clarius-Generic, ClientApp-DP, ClientApp-DP-PI3-Issue, ClientApp-DP-Stabilization

**Description (verbatim):**

> Status does not make any sense. As soon as Run is hit in 30 seconds it becomes 66% and becomes 100% after 30 minute. This is showing no information and is redundant. Either Improve status or hide it for time being.


---

#### `CDOC-7651` — [Garuda DP][PLAE Feedback-Jacky] Quick Start up/ Demo Guide needed for customer training

- **Type:** Issue
- **Status:** Open
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 21-06-2023 10:33
- **Updated:** 21-06-2023 21:59
- **Labels:** ClientApp-DP, PLAE-Feedback


---

#### `GAR-5576` — [Framework][Garuda DP][PLAE Feedback-Jacky] Progress bar percentages are not proper

- **Type:** Issue
- **Status:** Open
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 21-06-2023 06:54
- **Updated:** 29-11-2023 23:10
- **Labels:** Clarius-Generic, ClientApp-DP, PLAE-Feedback, TF_General

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
> each scenario now consumes 25% of progress. So the progress shows 50% in a few seconds and for the next 50% it takes… [truncated]


---

#### `GAR-6239` — [Garuda DP][STM Observations][SDK Improvement] Keep only results but not wfms

- **Type:** Story
- **Status:** Open
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 06-09-2023 03:14
- **Updated:** 20-01-2024 01:20
- **Labels:** Clarius-Generic, Clarius-RP1-MustFix, ClientApp-DP, CustomerCommit, STM, TEKSDK

**Description (verbatim):**

> Provide an option to delete waveforms from DataBase after analysis


---

#### `GAR-5216` — [Garuda DP] [STM Requirement] User should be able to run multiple test sessions in parallel for the same application from the same test machine

- **Type:** Requirement
- **Status:** Open
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 12-05-2023 07:18
- **Updated:** 20-01-2024 01:24
- **Labels:** Clarius-Generic, Clarius-RP1-MustFix, ClientApp-DP, ClientApp-DP-CustomerCommit, STM

**Description (verbatim):**

> Use Case: 
>
> 1. User wants to create multiple test sessions and trigger them from UI/API simultaneously.
> 2. If there are logical cores available in the test machine, all test session analysis should happen in parallel, utilizing the available cores.
> 3. In case of live mode, when the acquisition is complete for one session, the next session acquisition should start whiteout waiting for the current test session to complete.
> 4. In pre-recorded mode, both acquisition and analysis should happen in par… [truncated]


---

#### `DPOJET-241` — Move Plots from Matlab to C#

- **Type:** Epic
- **Status:** Open
- **Priority:** Critical
- **Reporter:** sarahbo
- **Created:** 28-04-2014 19:09
- **Updated:** 05-06-2019 15:15
- **Labels:** UI


---

#### `GAR-1248` — update Signal Validation Step success/failure to the user.

- **Type:** Story
- **Status:** Open
- **Priority:** Critical
- **Reporter:** u612584
- **Created:** 09-01-2022 22:53
- **Updated:** 19-09-2023 21:19
- **Labels:** ClientApp-DP, ClientApp-DP-PI3-Issue, ClientApp-PCIe, ClientApp-PCIe-PI3-Issue

**Description (verbatim):**

> Signal validation signal  will be helpful to the user for Reference .
> Put them in logs.


---

#### `GAR-4932` — [Garuda DP] Ability to accumulate population over multiple acquisitions and get results on accumulated population

- **Type:** Story
- **Status:** Open
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 18-04-2023 08:22
- **Updated:** 26-03-2024 03:44
- **Labels:** ClientApp-DP, ClientApp-DP-CustomerCommit, ClientApp-DP-PI3-Feature

**Description (verbatim):**

> Cumulative measurement results and plots like DPOJET Run mode: Eye and parametric measurements
> Measurement results accumulation for multiple wfms, similar to DPOJET in run mode for over 20M unit intervals
> Eye diagram accumulation for multiple wfms - 20M unit intervals in total.


---

#### `GAR-4525` — [PCIe][Beta-14] Reset settings option not working as expected.

- **Type:** Story
- **Status:** Open
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 08-03-2023 04:00
- **Updated:** 26-03-2024 03:44
- **Labels:** ClientApp-DP, ClientApp-PCIe

**Description (verbatim):**

> When reset of setting values is done to default in one section the interdependency fails because other section setting value is not changed.


---

#### `GAR-5343` — [Garuda DP] [PLAE Feedback-Nitin] Lack of visibility of measurement configurations applied during test

- **Type:** Story
- **Status:** Open
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 25-05-2023 05:47
- **Updated:** 26-03-2024 03:44
- **Labels:** Clarius-Generic, ClientApp-DP, PLAE-Feedback, TF_Debug

**Description (verbatim):**

> In a test fail case, as a primary step of debug we check the configuration settings that are applied in the test. but the current UI des not allow that.
>
> PLAE comment:
>  !image-2023-05-25-18-16-00-443.png|thumbnail!


---

#### `GAR-5582` — [Garuda DP][PLAE Feedback-Jacky][Generic] Error Messages needs to be more meaningful and instructive

- **Type:** Story
- **Status:** Open
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 21-06-2023 10:29
- **Updated:** 26-03-2024 03:44
- **Labels:** Clarius-Generic, Clarius-RP1-MustFix, ClientApp-DP, ClientApp-DP-Stabilization, PLAE-Feedback, TF_Debug

**Description (verbatim):**

> The error logs/messages currently shown to the user is not very comprehensible/ instructive to the user. Those are too technical/internal for an end user.
>
> "MessageBroker End Point Not reachable"
>  "Failed to connect to GPIB"
>
> Also in some cases there are no obvious message on what went wrong.
>  We ran a test without configuring the testbench correctly. There was no evident error shown/logged but the test failed.
>
> Sometimes, when VM services are down, the Login fails. But the error shown as invali… [truncated]


---

#### `GAR-6442` — [Garuda DP] Cache is not cleared on the IS machine

- **Type:** Issue
- **Status:** Open
- **Priority:** Critical
- **Reporter:** mtatiche
- **Created:** 04-10-2023 07:52
- **Updated:** 22-03-2024 03:14
- **Labels:** Clarius-Generic, ClientApp-DP, Customer_Issue, Stabilization, STM

**Description (verbatim):**

> Refer to the attached screenshot where cache has not been cleared on  the IS machine.


---

#### `GAR-1430` — [PCIe] Automator Model should be "Default" by default.

- **Type:** Story
- **Status:** Open
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 14-02-2022 07:26
- **Updated:** 13-03-2024 11:21
- **Labels:** Clarius-RP1-MustFix, ClientApp-DP, ClientApp-DP-Stabilization, ClientApp-PCIe

**Description (verbatim):**

> In testbench while adding automator, it is good to have "Model" set as "Default" by default. This is currently strong type in the execusion engine. If it is not entered (As this is not a mandatory field) it stops the execution during intialization.
>
>  
>
> Can the input be changed to dropdown?


---

#### `DP-10521` — [Garuda DP][PLAE Feedback-Nitin] Test run on multiple test machine should be possible

- **Type:** New Feature
- **Status:** Open
- **Priority:** Critical
- **Reporter:** mkumar2
- **Created:** 19-09-2023 20:41
- **Updated:** 13-03-2024 11:49
- **Labels:** Clarius_DP_Platform_Clone, PLAE-Feedback


---

#### `GAR-5621` — [Garuda-DDR] Is this indicating a paused test, or failed test?

- **Type:** Issue
- **Status:** Open
- **Priority:** Critical
- **Reporter:** sjhawar
- **Created:** 23-06-2023 10:05
- **Updated:** 18-03-2024 07:29
- **Labels:** ClientApp-DDR5DRAMTx, PLAE-Feedback, TF_Queries

**Description (verbatim):**

> {color:#172b4d}Is this indicating a paused test, or failed test? When I saw this, I had immediately thought the test had been stopped or paused. {color}


---

#### `GAR-5623` — [Garuda-DDR] How do the percent progress bars work?

- **Type:** Issue
- **Status:** Open
- **Priority:** Critical
- **Reporter:** sjhawar
- **Created:** 23-06-2023 10:06
- **Updated:** 18-03-2024 07:29
- **Labels:** ClientApp-DDR5DRAMTx, PLAE-Feedback, TF_Queries

**Description (verbatim):**

> How do the percent progress bars work? Here I have passed 1 step, but have a progress of 0%?


---

#### `GAR-5624` — [Garuda-DDR] A re-run button for tests from both the overall tests page, and the results pages

- **Type:** Issue
- **Status:** Open
- **Priority:** Critical
- **Reporter:** sjhawar
- **Created:** 23-06-2023 10:08
- **Updated:** 18-03-2024 07:29
- **Labels:** ClientApp-DDR5DRAMTx, PLAE-Feedback, TF_General

**Description (verbatim):**

> A re-run button for tests from both the overall tests page, and the results pages would be great.


---

#### `GAR-6957` — [Garuda PCIe/DP] [Generic] Using same test bench for different test machine requires changes in appsettings json

- **Type:** Story
- **Status:** Open
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 28-11-2023 09:59
- **Updated:** 26-04-2024 00:43
- **Labels:** Clarius-Generic, Clarius-RP1-MustFix, ClientApp-DP, ClientApp-PCIe, PLAE-Feedback

**Acceptance Criteria (verbatim):**

> * Tester should be able to use a testbench from multiple clarius deployment
>  * Tester should be able to acquire a lock for testbench and run test when testbench is available.
>  * When Tester tries to execute a test on a testbench to which lock is aquried by different test from same/different clarius deployment, Test should be aborted and Tester should be notified on unavailability of testbench

**Description (verbatim):**

> After tekflow installation we take the IS installer from the test machine and installs it on the scope. 
> If the same scope needs to be used as a test bench for another test machine, then we need to either install the IS installer from the 2nd test machine or need to copy/edit the app settings json.
>
> This is a major inconvenience. There should be a seamless way of using a test bench across different test machine which is a very common scenario for all the customers.


---

#### `GAR-6297` — [Garuda DP][PLAE Feedback-Nitin] Logs are not comprehensible by the user

- **Type:** Issue
- **Status:** Open
- **Priority:** Critical
- **Reporter:** tparua
- **Created:** 12-09-2023 00:48
- **Updated:** 22-04-2024 13:07
- **Labels:** Clarius-Generic, Clarius-RP1-MustFix, ClientApp-DP, ClientApp-DP-PI3-Feature

**Description (verbatim):**

> I could not make out any logs. Logs should be simple to see, continuous and have intermediate information. What is going on in background is a black box


---

### Priority: Major (64)

#### `GAR-7129` — [AE Feedback, Intel Folsom] Technology applications need a list of supported instruments within the GUI

- **Type:** Requirement
- **Status:** Open
- **Priority:** Major
- **Reporter:** skumar5
- **Created:** 11-12-2023 00:52
- **Labels:** Client-App-DDR5Rx, IntelFolsom, Micron

**Description (verbatim):**

> # Technology applications need a list of supported instruments within the GUI – otherwise how is a user to know that a power supply is supported, or a BERT, or a scope, etc. When making a test-bench, and an application is selected, a list of components should be available within the GUI. For example, if DDR5-RX-Test is the selected Test bench application, there should be an indicator to a user that a “Scope, BERT, and ‘Automator’ can be supported for the automation.” 
>
> [Receiver Team] – Sounds l… [truncated]


---

#### `GAR-5344` — [TekFlow RAA UI/UX Issue] Currently there is no way to reset the UI login password.

- **Type:** Issue
- **Status:** Open
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 25-05-2023 06:04
- **Updated:** 18-03-2024 07:12
- **Labels:** Clarius-Generic, ClientApp-DP, ClientApp-DP-Stabilization

**Description (verbatim):**

> Currently there is no way to reset the UI login password. It is a major drawback of the software as it leaves the User with no other choice but to install the whole software from scratch. This needs to be handle ASAP.


---

#### `GAR-5364` — [TekFlow RAA UI/UX Issue] It is difficult to find a fail result from a log list of results by scrolling

- **Type:** Issue
- **Status:** Open
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 28-05-2023 00:18
- **Updated:** 28-11-2023 21:26
- **Labels:** Clarius-Generic, ClientApp-DP, ClientApp-PCIe

**Description (verbatim):**

> It is difficult at times to scroll through a big list of results to find 1 or 2 fail scenario. Color coding the step name will help to identify those instantly.
>
>  !image-2023-05-28-12-46-54-521.png|thumbnail!


---

#### `GAR-5668` — [Design][UX-Design]Enable debugging of waveforms on TekScope

- **Type:** Story
- **Status:** Open
- **Priority:** Major
- **Reporter:** saravind
- **Created:** 26-06-2023 21:22
- **Updated:** 26-03-2024 03:44

**Acceptance Criteria (verbatim):**

> # Should be able to configure scope address on which waveforms are to be recalled
>  #  [UX] Design for giving UI option to perform above functionality is finalized
>  # Should be able to download waveform zip file on the scope configured
>  # Should be able to unzip the file and load the waveforms on the scope
>  # Identify mechanism to handle loading of multiple waveforms if number of reference channels… [truncated]

**Description (verbatim):**

> As a user, I should be able to download the waveforms of a test or a scenario or a step and load them on TekScope for advanced debugging.


---

#### `GAR-3473` — [ClientApp-Rx] Rx DDR migration to the new UX(Place holder)

- **Type:** Story
- **Status:** Open
- **Priority:** Major
- **Reporter:** apattar
- **Created:** 27-09-2022 04:03
- **Updated:** 26-03-2024 03:44
- **Labels:** ClientApp-Rx_UI

**Description (verbatim):**

> Smooth transition of DDR solution to new UX


---

#### `GAR-4960` — [MIPI DPHY CPHY] [UX Design]Show multiple waveforms in same view

- **Type:** Story
- **Status:** Open
- **Priority:** Major
- **Reporter:** apattar
- **Created:** 25-04-2023 04:14
- **Updated:** 29-11-2023 00:05
- **Labels:** ClientApp-CPHY, ClientApp-DPHY, Client-App-Dphy

**Acceptance Criteria (verbatim):**

> 1. As a user, I want to see different waveforms in stacked and overlayed mode. In the name dropdown I will be able to check and uncheck the waveforms I want to see. I also want to know the min and max of those waveforms. 
>
> 2. The waveforms are in the tile format, I want to see the zoom waveform image and ability to download the same in report. The report should contain date and time of the screens… [truncated]

**Description (verbatim):**

> As a user, I should be able to view the waveform in stacked and overlayed mode.


---

#### `GAR-5636` — [Design][Ux]Enhancements to enable consistent experience to view eye diagram plots

- **Type:** Story
- **Status:** Open
- **Priority:** Major
- **Reporter:** saravind
- **Created:** 25-06-2023 06:13
- **Updated:** 26-03-2024 03:43

**Acceptance Criteria (verbatim):**

> * Should be able to capture plot data like number of UIs (similar to DPOJET).
>  * Should be able to view data on rendered eye plot in UI.
>  * Should be able to render eye diagram with color gradient similar to scope.
>  * Should be able to capture mask file details.
>  * Should have appropriate unit conversion.

**Description (verbatim):**

> As a User, I want to have a consistent experience when I view eye diagram plots across the Tektronix Platforms so that I can co-relate efficiently.


---

#### `GAR-8164` — [UX Design] 'Validate Test Bench' button to check if test bench is setup correctly.

- **Type:** Requirement
- **Status:** Open
- **Priority:** Major
- **Reporter:** u625287
- **Created:** 24-04-2024 03:20

**Description (verbatim):**

> We would need a 'Validate Test Bench' button to check if test bench is setup correctly. Also. solution team should have ability to modify the Test Bench template as they see fit.


---

#### `GAR-4046` — Cumulative result display in GUI

- **Type:** Task
- **Status:** Open
- **Priority:** Major
- **Reporter:** bhap
- **Created:** 22-12-2022 01:55
- **Updated:** 26-03-2024 03:44


---

#### `GAR-4675` — [DP/PCIe] [Beta-14] The UI control order in UI is not handled in current JSON hierarchy

- **Type:** Story
- **Status:** Open
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 20-03-2023 13:31
- **Updated:** 26-03-2024 03:44
- **Labels:** Clarius-Generic, ClientApp-DP, ClientApp-PCIe

**Description (verbatim):**

> Currently the Settings.Json are divided into 2 levels.
> a. A global or common settings.json
> b. an app level settings.json
>
> When settings controls are created in the UI, it first takes the settings from local (app level) settings.json and then common settings.json.
> This creates problem in ordering the settings correctly concerning the usability and the flow of operation.
> Also it is difficult to maintain similar order from one app to another which again a usability issue.
>
> This is currently a block… [truncated]


---

#### `GAR-6359` — Rx-UI Constraint Support (Need an Engineer Support to handle the UI constraint)

- **Type:** Task
- **Status:** Open
- **Priority:** Major
- **Reporter:** apattar
- **Created:** 15-09-2023 02:43
- **Updated:** 22-09-2023 05:59
- **Labels:** Memory_Rx

**Description (verbatim):**

> 1 day of developer support to provide enough details related to UI constraints.


---

#### `GAR-29` — UI for adding Scenario and Steps

- **Type:** Story
- **Status:** Open
- **Priority:** Major
- **Reporter:** spatil
- **Created:** 18-10-2021 04:51
- **Updated:** 31-08-2022 20:46


---

#### `GAR-27` — UI for creating Resource Definition

- **Type:** Story
- **Status:** Open
- **Priority:** Major
- **Reporter:** spatil
- **Created:** 18-10-2021 04:47
- **Updated:** 31-08-2022 20:46


---

#### `GAR-6222` — [Beta-22 UI observations] UI shows "Prepare Sequence" and Total Steps, passed steps, failed steps details are removed

- **Type:** Issue
- **Status:** Open
- **Priority:** Major
- **Reporter:** mtatiche
- **Created:** 04-09-2023 23:38
- **Updated:** 28-11-2023 07:59
- **Labels:** Clarius-Generic, ClientApp-DP

**Description (verbatim):**

> 1. UI shows "Prepare Sequence" during test run
> 2. Total Steps, passed steps, failed steps details are removed from scenario row
> 3. No status shown for Completed applications. 
>  
>
> Refer to the attached screenshots
>
>  !screenshot-2.png|thumbnail!


---

#### `GAR-1413` — Preset dependency is handled in the backend but not in the UI

- **Type:** Story
- **Status:** Open
- **Priority:** Major
- **Reporter:** mtatiche
- **Created:** 08-02-2022 23:55
- **Updated:** 28-11-2023 08:23
- **Labels:** ClientApp-PCIe


---

#### `GAR-5672` — [UI]Enable waveform histogram plot

- **Type:** Story
- **Status:** Open
- **Priority:** Major
- **Reporter:** saravind
- **Created:** 26-06-2023 21:53
- **Updated:** 26-03-2024 03:44

**Acceptance Criteria (verbatim):**

> * Should be able to render overlapping waveform data
>  * Should be able to render histogram plot on the specific location
>  * Should plot using finalized color scheme and color gradient

**Description (verbatim):**

> As a User, I should be able to view waveform histogram plot for visualization of waveform characteristics


---

#### `GAR-5670` — [UI]Enable debugging of waveforms on TekScope

- **Type:** Story
- **Status:** Open
- **Priority:** Major
- **Reporter:** saravind
- **Created:** 26-06-2023 21:33
- **Updated:** 26-03-2024 03:44

**Acceptance Criteria (verbatim):**

> * Should provide an option to configure scope address
>  * Should provide an option download and load the waveforms for a test
>  * Should provide an option download and load the waveforms for a scenario of a test
>  * Should provide an option download and load the waveforms for a step of a test

**Description (verbatim):**

> As a user, I should be able to download the waveforms of a test or a scenario or a step and load them on TekScope for advanced debugging.


---

#### `GAR-1916` — [UI] As a user I want to see the logs in the UI based on query parameters, so I can view log contents generated

- **Type:** Story
- **Status:** Open
- **Priority:** Major
- **Reporter:** agupta8
- **Created:** 05-04-2022 00:44
- **Updated:** 26-03-2024 03:44
- **Labels:** UI

**Acceptance Criteria (verbatim):**

> 1) Should be able to query the logs based on test id.
>
> 2) Should be able to query the logs based on log time.
>
> 3) Should be able to view the logs based on pagination query parameter.
>
> 4) Should be able to query the logs based on service .
>
> 5) Should be able to query the logs based on log level.

**Description (verbatim):**

> 1) Should be able to query the logs based on test id .
>
> Input
>  * Login to ATOMS UI.
>  * Select Logs from navigation Panel.
>  * Select the test id or execution id.
>
> Output
>  * Fetch logs of a particular test id.
>
> FAILS ON
>  * If test id is incorrect.
>  * if test id is not present in database.
>  * If no logs are present of a test id in database.
>
>  
>
> 2) Should be able to query the logs based on time .
>
> Input
>  * Login to ATOMS UI.
>  * Select Logs from navigation Panel.
>  * Select time for which logs to be s… [truncated]


---

#### `GAR-5601` — [DDR Rx] UI alignment constrain - Good to have

- **Type:** Issue
- **Status:** Open
- **Priority:** Major
- **Reporter:** skumar5
- **Created:** 23-06-2023 04:23
- **Updated:** 18-03-2024 07:29
- **Labels:** Clarius-Generic, ClientApp-DDRRx, GoodToHave, PLAE-Feedback, TF_General

**Description (verbatim):**

> 1. Find the attached snap which shows the requirement to add the Custom radio button on the next line but this is not possible currently I believe.
>
>  
>
> 2. Also if we want to keep the RJ Slope and RJ intercept in one row it is not allowed due to UI constrain.
>
> 3. Let's allow to add the UI component one after other in two separate row if needed.


---

#### `GAR-7784` — CLONE - Fix SonarQube bugs of UI projects - Part2

- **Type:** Story
- **Status:** Open
- **Priority:** Major
- **Reporter:** bhap
- **Created:** 26-02-2024 23:03
- **Updated:** 26-03-2024 23:18

**Description (verbatim):**

> |Project with Bugs|
> |Bugs|Number of bugs|
> |analysis-service|1|
> |catalog-service|1|
> |constraints-service|2|
> |core-common|1|
> |domain-common|3|
> |engine-data|2|
> |engine-service|3|
> |execution-engine|8|
> |instrument-service|4|
> |log-sdk-java|2|
> |plots-service|4|
> |preprocess-service|1|
> |report-service|46|
> |request-transformer|5|
> |sdk|0|
> |ui-new-service|200|


---

#### `GAR-6982` — [USB4V2-Tx] Show test time taken for each scenario in UI

- **Type:** Requirement
- **Status:** Open
- **Priority:** Major
- **Reporter:** jdomadiy
- **Created:** 30-11-2023 23:31
- **Labels:** Client-App-USB4V2

**Description (verbatim):**

> Add multiple Senarios [Senarios may have Steps]
>
> UI should show the time teaken for each one, So user can know the status of each one ane able to ge the time taken by each test


---

#### `GAR-1504` — [UI] Identify bursts by going the qualifier or marking in the WFMs  STROBE and DATA

- **Type:** Story
- **Status:** Open
- **Priority:** Major
- **Reporter:** ckappaga
- **Created:** 28-02-2022 07:04
- **Updated:** 17-08-2022 02:25
- **Labels:** ClientApp-LPDDR4, UI

**Description (verbatim):**

> Once the Burst in identified by our algorithms.
>
> In the GUI of the ATOMS , make a provision to clearly identify the bursts with the marking on the WFMs. 
>
> Add a provision to Turn ON / OFF the qualifier / burst marking.
>
> See attached snap shot, on how the Burst marking looks in current Terminator platform


---

#### `GAR-4764` — [GarudaDP/PCIe/Generic] There should be a provision to start and stop AS and IS from the UI.

- **Type:** Story
- **Status:** Open
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 28-03-2023 21:51
- **Updated:** 26-03-2024 03:43
- **Labels:** Clarius-Generic, ClientApp-DP, ClientApp-PCIe, Stabilization

**Description (verbatim):**

> The current workflow of starting and stopping the AS and IS by going inside the installation folder and running batch files is not convenient to the user. This is does not fit with Web app usability.
>
> There should be option in the UI to start and stop any services. GUI/API should be the only interface to the user.


---

#### `GAR-6294` — [Garuda DP][PLAE Feedback-Nitin] AS IS health monitor from UI

- **Type:** New Feature
- **Status:** Open
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 12-09-2023 00:37
- **Updated:** 13-03-2024 03:31
- **Labels:** Clarius-Generic, Clarius-RP1-MustFix, ClientApp-DP, ClientApp-DP-PI3-Feature, ClientApp-DP-Stabilization

**Description (verbatim):**

> Build: Beta 1.0.19
>
> AS IS health monitoring should be done from TekFlow: AS and IS should be monitored. There should be provision to restart automatically AS/IS if it is found to be hanged or closed


---

#### `GAR-1503` — [UI] [DDR] Plots to show cursors and the values. To show with mask and vertices.

- **Type:** Story
- **Status:** Open
- **Priority:** Major
- **Reporter:** ckappaga
- **Created:** 28-02-2022 06:58
- **Updated:** 17-08-2022 02:27
- **Labels:** ClientApp-LPDDR4

**Description (verbatim):**

> DDR Eye Diagrams for Write Data or CA RX mask, have diamond / rectangular / hexagonal masks.
>
> Similar to DPOJET, make a provision to reflect the cursors / values / mask / vertices on the Eye Diagram Plots.
>
> This is important for upcoming LPDDR4 and DDR5 and all future DDR generations.
>
> Attached couple of Eye Diagrams for your reference.


---

#### `GAR-3472` — [ClientApp-Rx] Enable Different UI controls support for Rx DDR

- **Type:** Story
- **Status:** Open
- **Priority:** Major
- **Reporter:** apattar
- **Created:** 27-09-2022 03:38
- **Updated:** 26-03-2024 03:44
- **Labels:** ClientApp-Rx_UI

**Description (verbatim):**

> 1. Browsing for the filter file in TekFlow UI (from local PC or database)
>
> 2. Dependency on one UI control on another UI control.
>
>   Following are some examples:
>
>           i. Check box enabling shall trigger the visibility/editability of different controls
>
>           ii. Input data validation of any UI controls 
>
>           iii. ability to add a table (generation capability) on the selection of different controls 
>
>           iv. Table data to be generated based on the inputs (Example: Multitone)… [truncated]


---

#### `GAR-3866` — Review and Fix any issues ith QG2 UI and API test execution

- **Type:** Task
- **Status:** Open
- **Priority:** Major
- **Reporter:** bhap
- **Created:** 22-11-2022 08:37
- **Updated:** 26-03-2024 03:44


---

#### `GAR-5341` — [Garuda DP] [PLAE Feedback-Nitin] Application UI does not show whether AS and IS is runing

- **Type:** New Feature
- **Status:** Open
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 25-05-2023 05:25
- **Updated:** 13-03-2024 03:50
- **Labels:** Clarius-Generic, ClientApp-DP, ClientApp-DP-Stabilization, PLAE-Feedback, TF_Configuration

**Description (verbatim):**

> When user does not launch AS/IS and runs the test, it fails and the run gets aborted. User does not know at this point why it failed. 
>
> Secondly, there is no way to check if AS and IS is running without logging into the test machine or scope. Moreover, user should be able to launch IS and AS from UI. UI should be the single interface.
>
> PLAE Comment:
>  !image-2023-05-25-17-51-11-865.png|thumbnail!


---

#### `GAR-5339` — [Garuda DP] [PLAE Feedback-Nitin] UI controls load issue due to slow network

- **Type:** Issue
- **Status:** Open
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 25-05-2023 05:07
- **Updated:** 20-01-2024 01:24
- **Labels:** Clarius-Generic, Clarius-RP1-MustFix, ClientApp-DP, ClientApp-DP-Stabilization, PLAE-Feedback, TF_General

**Description (verbatim):**

> Due to to slow network, some controls does not slow properly, but the UI does not show any loading/broken/incomplete sign on the UI. The user misinterprets it as if it is loaded properly.
>
> Example:
> Turning on this toggle button should make the Dut Controller dropdown should be visible.
>  !image-2023-05-25-17-32-46-414.png|thumbnail! 
>  !image-2023-05-25-17-34-08-560.png|thumbnail! 
>
> This did not work as internet was slow, but it did not show any loading/ fail to load notification.
>
> Nitin's comment… [truncated]


---

#### `GAR-6114` — [Not Ready] USB4V2: Provide an option for Differential/Common Mode wavefrom plot in TekFlow UI

- **Type:** New Feature
- **Status:** Open
- **Priority:** Major
- **Reporter:** jdomadiy
- **Created:** 22-08-2023 04:41
- **Updated:** 22-09-2023 05:55
- **Labels:** Client-App-USB4V2

**Description (verbatim):**

> USB4V2 measurement used below list of various defination 
>
> *  We need to pass Data +, Data -   to USB4V2 measurements. Inside we compute Differential wavefrom and computing the result. we want also Math wavefrom also should be able to show in wavefrom plot
>  * ACCM test, we need to show differenatil wavefrom. 
>
> Other Test, it is good to provide an option to show differential plot
>
> So, No need to provide Data+, Data- two wavefrom plots in report and User should be able to see Differential, commond… [truncated]


---

#### `GAR-7719` — [USB4V2-Tx] Allow to use common flow.json (UI ) across multiple application to enable faster Development

- **Type:** Requirement
- **Status:** Open
- **Priority:** Major
- **Reporter:** jdomadiy
- **Created:** 15-02-2024 21:13
- **Updated:** 26-03-2024 03:44
- **Labels:** Client-App-USB4V2

**Description (verbatim):**

> In USB and TBT technologies we have multiple application as shown in image.
>
> In quite some cases, we have common list of measurement across application.
>
> we need support, where we should use the common flow.json (UI) code across multiple application. 
>
>  
>
> Example, 
>
> in USB Application , 
>  * USB4V1 Gen2 and USB4V1 Gen3 are having same list of measurement.
>
> Also, we have 
>
> TBT Application
>  * TBT 10G and TBT 20G are having same list of measurements.
>
> [ USB4V1 Gen2 , USB4V1 Gen3 , TBT 10G ,TBT 20G]a… [truncated]


---

#### `GAR-6295` — [Garuda DP][PLAE Feedback-Nitin] Test Re-Run Feature should be added

- **Type:** Issue
- **Status:** Open
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 12-09-2023 00:40
- **Updated:** 28-11-2023 21:23
- **Labels:** Clarius-Generic, ClientApp-DP, ClientApp-DP-PI3-Feature

**Description (verbatim):**

> Build Beta 1.0.19
>
> It should be possible to rerun the last run without setting up sequence.
> It should be possible to rerun last run in Pre-recorded mode.


---

#### `GAR-5575` — [Garuda DP][PLAE Feedback-Jacky] No Download Wavefrom Option

- **Type:** Issue
- **Status:** Open
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 21-06-2023 06:53
- **Updated:** 28-11-2023 08:00
- **Labels:** Clarius-Generic, ClientApp-DP, ClientApp-DP-Stabilization, PLAE-Feedback, TF_Debug

**Description (verbatim):**

> SW Versions:
> TekFlow-Platform-v0.15.5.beta
> DisplayPort-v0.15.3.beta_9
>
> How to download the waveforms – need to be in the UI


---

#### `GAR-5570` — [Garuda DP][PLAE Feedback-Jacky] Usability Issues

- **Type:** Issue
- **Status:** Open
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 21-06-2023 06:48
- **Updated:** 28-11-2023 08:01
- **Labels:** Clarius-Generic, ClientApp-DP, ClientApp-DP-Stabilization, PLAE-Feedback, TF_General

**Description (verbatim):**

> SW Versions:
> TekFlow-Platform-v0.15.5.beta
> DisplayPort-v0.15.3.beta_9
>
> - TF  feels more suited for an expert user; - ease of use concern
> - For single test run – ease of use is a concern 
> - Test Settings are more complicated
> - Transition to these flow in Tekflow will have a learning curve – more number of clicks


---

#### `GAR-5557` — [Garuda DP][PLAE Feedback-Gary] Confusing Terminologies

- **Type:** Issue
- **Status:** Open
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 20-06-2023 21:10
- **Updated:** 28-11-2023 08:01
- **Labels:** Clarius-Generic, ClientApp-DP, PLAE-Feedback, TF_Queries

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
> Major confusion around terminology throughout the application
> - The “Tests” section lists what it calls tests…but they are actually the names of sequences that have been run or are running…this has to be addressed
> - In my opinion, the terms “Applications”, “Sequences”, “Tests”, and “Test Ben… [truncated]


---

#### `GAR-6238` — [Garuda DP][STM Observations] Start DataStoreService only if IS is running in a scope or first time live acq is requested

- **Type:** Issue
- **Status:** Open
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 06-09-2023 03:12
- **Updated:** 28-11-2023 07:58
- **Labels:** Clarius-Generic, ClientApp-DP, ClientApp-DP-Stabilization


---

#### `GAR-6229` — [Garuda DP] Differentiate scenario dependency between acquisition dependency and analysis dependency.

- **Type:** Story
- **Status:** Open
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 05-09-2023 21:57
- **Updated:** 28-11-2023 21:08
- **Labels:** Clarius-Generic, ClientApp-DP, Performance

**Description (verbatim):**

> In DP 3.2, 3.3 and 3.4 measurements have sub-steps, therefore they are added as separate scenarios.
>
>  !image-2023-09-06-10-21-38-205.png|thumbnail! 
>
> The acquisitions for these measurements happens in the previous step (Perform_Tests).
> But although the acquisition is completed, the analysis of these measurements only starts after the (Perform_Test) scenario is complete.
>
> This is a bottleneck for achieving higher performance in DP. 
>
> Secondly, it does not look good to have some measurements added… [truncated]


---

#### `TBSQA-435` — Bus64b66bTrigger_Generating pile of errors

- **Type:** Issue
- **Status:** Open
- **Priority:** Major
- **Reporter:** gchittem
- **Created:** 02-12-2019 20:22
- **Updated:** 22-06-2022 23:44
- **Components:** UI SQE Continuous Improvement
- **Labels:** UI

**Description (verbatim):**

> Bus64b66bTrigger_Generating pile of errors. Need to debug this to understand the root cause and provide Fix.
>
>  
> |\{11/8/2019 12:17:53 PM/10.11.1.9/134.64.244.175-->684/0/498/0} \{11/15/2019 1:23:24 AM/10.11.1.9/134.64.245.204-->0/0/256/0} \{11/15/2019 3:59:25 AM/10.11.1.9/134.64.245.204-->676/0/209/0}|


---

#### `TBSQA-433` — 8b10bSearch_Generating errors_timing issue between test cases

- **Type:** Issue
- **Status:** Open
- **Priority:** Major
- **Reporter:** gchittem
- **Created:** 02-12-2019 20:01
- **Updated:** 02-12-2019 20:02
- **Components:** UI SQE Continuous Improvement
- **Labels:** UI

**Description (verbatim):**

> 8b10bSearch_Generating errors_timing issue between test cases. 
>
> Check for timing. Else, break the component into two.


---

#### `TBSQA-432` — USB Search generating generating errors. Seems to be timing issue

- **Type:** Issue
- **Status:** Open
- **Priority:** Major
- **Reporter:** gchittem
- **Created:** 02-12-2019 19:57
- **Updated:** 02-12-2019 20:01
- **Components:** UI SQE Continuous Improvement
- **Labels:** UI

**Description (verbatim):**

> USB Search generating generating errors. Seems to be timing issue. Else, we have to break the component into two. 
>
> Attached the lg file for 70G SX scope.


---

#### `OUI-887` — As a user, I need user manual to use Base Pattern Generator MATLAB Utility so that I can generate QAM32/64 base patterns

- **Type:** Story
- **Status:** Open
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 18-08-2019 23:46
- **Updated:** 11-11-2020 07:15
- **Labels:** UI
- **Business Value:** 80

**Description (verbatim):**

> Draft version of documents are attached in Word format and PDF format.
>
> Acceptance criteria:
>  # User manual (in Tek format) for the MATLAB utility
>
> Doneness:
>  # Convert existing user manual into Tektronix format
>  # Make sure required copyright information added
>  # Correct syntax and spacing followed


---

#### `TBSQA-437` — Measurement Custom gating feature implementation in functional script

- **Type:** Task
- **Status:** Open
- **Priority:** Major
- **Reporter:** sjena
- **Created:** 11-12-2019 01:33
- **Updated:** 22-06-2022 23:44
- **Components:** UI SQE Continuous Improvement
- **Labels:** UI

**Description (verbatim):**

> Automation of custom gating feature


---

#### `RXGKRT-154` — Add Unit test project and test cases

- **Type:** Task
- **Status:** Open
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 29-05-2018 22:57
- **Updated:** 31-07-2018 21:49
- **Labels:** UI

**Description (verbatim):**

> Add Unit test project and test cases


---

#### `RPAMT-1058` — Arista meeting: Improvements/feedback from AE - Kaady, Jeff.

- **Type:** Story
- **Status:** Open
- **Priority:** Major
- **Reporter:** satk
- **Created:** 19-12-2018 00:58
- **Updated:** 06-06-2019 14:28
- **Labels:** Functional, MANUAL, UI

**Description (verbatim):**

> Below are the list of requirements/feedback from AE(Kaady, Jeff) as part of demo to Arista.
>
>  
>  # It seemed pretty robust and ran through the tests. I would confidently take this package and RT scope into Arista from what I saw. Intel NIC passed and the XENA networks box passed. I’m confident  Arista will pass with correct TX settings.
>  # The deskew operation is manual on RT dual-stack. Devin has an app that does auto deskew based on common mode. I think having automated deskew looks better and… [truncated]


---

#### `RPAMT-1057` — Support for automatic de-skew using tool created by Devin

- **Type:** Story
- **Status:** Open
- **Priority:** Major
- **Reporter:** satk
- **Created:** 19-12-2018 00:36
- **Updated:** 06-06-2019 14:28
- **Labels:** Functional, UI

**Description (verbatim):**

> Following is problem statement.
>  # The deskew operation is manual on RT dual-stack. Devin has an app that does auto deskew based on common mode. I think having automated deskew looks better and Tek should work on getting Devin’s app officially integrated for deskew.


---

#### `THUNDRBOLT-268` — User interface design for Compliance mode in Thunderbolt TekExpress application

- **Type:** Epic
- **Status:** Open
- **Priority:** Major
- **Reporter:** jkushwah
- **Created:** 20-02-2018 03:46
- **Updated:** 29-05-2018 10:56
- **Labels:** UI

**Description (verbatim):**

> I, as the user want to design user interface for Compliance mode in Thunderbolt TekExpress application.


---

#### `DPOJET-1078` — IPP Library update

- **Type:** Task
- **Status:** Open
- **Priority:** Major
- **Reporter:** SMAHADEV
- **Created:** 14-01-2015 19:32
- **Updated:** 25-09-2020 00:00
- **Labels:** UI

**Description (verbatim):**

> DPOJET is still slightly dependent on TekScope in that it expects TekScope to install the correct version of ipp files that DPOJET uses (in this case v7.1 files).  So currently, TekScope installs both v7.1 (for DPOJET) and v8.0 (for TekScope).
>
> Ideally, DPOJET would install its own set of ipp files (the set that it knows it needs).  That way no dependencies on TekScope (or unexpected crashes if TekScope swaps out its ipp version) exist.
>
> So it is better that DPOJET moves to 8.0 and always uses t… [truncated]


---

#### `GAR-2530` — Validate Application behavior when LIVE signals are not connected.

- **Type:** Issue
- **Status:** Open
- **Priority:** Major
- **Reporter:** spatil
- **Created:** 29-05-2022 20:17
- **Updated:** 17-03-2023 05:30
- **Labels:** UI


---

#### `GAR-1645` — Report needs to incude tektronix logo

- **Type:** Story
- **Status:** Open
- **Priority:** Major
- **Reporter:** mtatiche
- **Created:** 18-03-2022 00:59
- **Updated:** 28-11-2023 21:25
- **Labels:** Clarius-Generic, ClientApp-CPHY, ClientApp-DP, ClientApp-DPHY, Client-App-Dphy, ClientApp-DP-PI3-Issue, ClientApp-DP-Stabilization, ClientApp-PCIe

**Customer Impact (verbatim):**

> 2-Medium

**Description (verbatim):**

> Report generated as per the template1.0 in the Tekflow PCIe app does not have the tektronix logo.


---

#### `DPOJET-862` — The limits for “MaskHits” and “Autofit MaskHits” measurements should be configurable in XML

- **Type:** Task
- **Status:** Open
- **Priority:** Major
- **Reporter:** SMAHADEV
- **Created:** 24-09-2014 08:25
- **Updated:** 25-09-2020 00:00
- **Labels:** UI

**Description (verbatim):**

> The limits for “MaskHits” and “Autofit MaskHits” measurements are designed to set always to 1. The limits for these measurements are not picked from xml file. These are hard coded limit values which cannot be modified. 
>
> They should be configurable from XML


---

#### `GAR-5072` — Plots

- **Type:** Epic
- **Status:** Open
- **Priority:** Major
- **Reporter:** apattar
- **Created:** 06-05-2023 10:08
- **Updated:** 26-03-2024 03:44
- **Labels:** ClientApp-CPHY, Client-App-Dphy, PLAE-Feedback, TF_Analysis

**Description (verbatim):**

> *{color:#000000}Pre-requisites:{color}*{color:#000000}
>           Few Plot images files, .png, .jpeg, .bmp{color}
>
> *{color:#000000}Acceptance criteria:{color}***
>
> As a validation engineer, I wish to see below plots in TekFlow results and report:
>  * Eye Diagram with color gradient similar to MSO6B series scopes. Mak hits to be highlighted in different color and mask color should be as MSO6B.
>  * Jitter(TIE) Histogram plot: Similar to MSO6B
>  * SSC Profile
>  * Bathtub plot: For measurements which need… [truncated]


---

#### `GAR-5578` — [Garuda DP][PLAE Feedback-Jacky] Ease of troubleshooting is absent

- **Type:** Story
- **Status:** Open
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 21-06-2023 06:55
- **Updated:** 26-03-2024 03:43
- **Labels:** Clarius-Generic, Clarius-RP1-MustFix, ClientApp-DP, ClientApp-DP-Stabilization, PLAE-Feedback, TF_Debug

**Description (verbatim):**

> SW Versions:
> TekFlow-Platform-v0.15.5.beta
> DisplayPort-v0.15.3.beta_9
>
> If the test doesn’t run troubleshooting is difficult – need proper guidance
> Requires tools/scripts at the least to revive Clarius from a faulty state.


---

#### `GAR-255` — Data Analysis

- **Type:** Epic
- **Status:** Open
- **Priority:** Major
- **Reporter:** spulikot
- **Created:** 19-10-2021 21:37
- **Updated:** 26-03-2024 03:44
- **Labels:** ClientApp-DP, Client-App-Dphy, Customer_Request, PLAE-Feedback, TF_Analysis

**Description (verbatim):**

> Cumulative Measurement/Analysisresults and plots like DPOJET Run mode: Eye and parametric measurements
> Measurement/Analysisresults accumulation for multiple wfms, similar to DPOJET in run mode for over 20M unit intervals
> Eye diagram accumulation for multiple wfms - 20M unit intervals in total. - Need discussion with Raghav
>
>  
>
> Update June 26th:
>  * This is implemented by [~fana] , method needs to be reviewed by [~rhegde] and [~macharya]


---

#### `GAR-2199` — Validate Instrument configure settings under test bench.

- **Type:** Issue
- **Status:** Open
- **Priority:** Major
- **Reporter:** spatil
- **Created:** 03-05-2022 10:35
- **Updated:** 19-03-2024 07:17
- **Labels:** testbench, UI


---

#### `GAR-2365` — Validate Logs Feature of TekFlow- when logs are not available in database.

- **Type:** Issue
- **Status:** Open
- **Priority:** Major
- **Reporter:** spatil
- **Created:** 16-05-2022 09:47
- **Updated:** 19-03-2024 07:24
- **Labels:** Functional, UI


---

#### `GAR-2369` — Validate Logs feature for fetching latest log

- **Type:** Issue
- **Status:** Open
- **Priority:** Major
- **Reporter:** spatil
- **Created:** 16-05-2022 21:11
- **Updated:** 19-03-2024 07:24
- **Labels:** Functional, UI


---

#### `GAR-2373` — Validate Logs feature for getting latest update of tests.

- **Type:** Issue
- **Status:** Open
- **Priority:** Major
- **Reporter:** spatil
- **Created:** 17-05-2022 03:12
- **Updated:** 19-03-2024 07:24
- **Labels:** UI


---

#### `GAR-2368` — Validate Logs Feature of TekFlow -when logs are available in DataBase

- **Type:** Issue
- **Status:** Open
- **Priority:** Major
- **Reporter:** spatil
- **Created:** 16-05-2022 21:02
- **Updated:** 19-03-2024 07:24
- **Labels:** Functional, UI


---

#### `GAR-2208` — Validate View Report Functionality if report status in FAIL

- **Type:** Issue
- **Status:** Open
- **Priority:** Major
- **Reporter:** spatil
- **Created:** 04-05-2022 11:06
- **Updated:** 19-03-2024 07:03
- **Labels:** Report, UI


---

#### `GAR-2201` — Validate Report create and View feature -Positive case

- **Type:** Issue
- **Status:** Open
- **Priority:** Major
- **Reporter:** spatil
- **Created:** 04-05-2022 02:07
- **Updated:** 19-03-2024 07:03
- **Labels:** Report, UI


---

#### `GAR-5573` — [Garuda DP][PLAE Feedback-Jacky] AS and IS launch Usability

- **Type:** New Feature
- **Status:** Open
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 21-06-2023 06:50
- **Updated:** 13-03-2024 03:53
- **Labels:** Clarius-Generic, ClientApp-DP, PLAE-Feedback, Stabilization, TF_Installation

**Description (verbatim):**

> SW Versions:
> TekFlow-Platform-v0.15.5.beta
> DisplayPort-v0.15.3.beta_9
>
> •	Need to launch instrument services and analysis server from UI with one button 
> •	Ease of use- Mentioned let’s just make Start and stop button if a customer wants to run an automated test – reduce number of clicks after configuration 
> •	Need to run analysis server separately – cumbersome (this needs to run as administrator)
> •	How to release the scope- for example scope gets stuck then user just waits long time in TF


---

#### `GAR-5387` — Vertical scroll bar is added in all the pages. It looks odd in login like pages.

- **Type:** Issue
- **Status:** Open
- **Priority:** Major
- **Reporter:** bhap
- **Created:** 29-05-2023 07:40
- **Updated:** 18-03-2024 07:12
- **Labels:** pl_general, PLAE-Feedback

**Description (verbatim):**

> Find attached screenshots.
> 1> Vertical scroll bar is added in all pages. In some pages like login page is not appropriate and it looks so odd.
> 2> Two two vertical scroll bars comes in some pages
> 3> Vertical scroll bar disappears when we zoom in the page from 100% to 80%


---

#### `GAR-5618` — [Garuda-DDR]When immediately starting a test, you're taken to a blank page

- **Type:** Issue
- **Status:** Open
- **Priority:** Major
- **Reporter:** sjhawar
- **Created:** 23-06-2023 08:02
- **Updated:** 18-03-2024 07:29
- **Labels:** ClientApp-DDR5DRAMTx, PLAE-Feedback, TF_General

**Description (verbatim):**

> When immediately starting a test, you're taken to a blank page?


---

#### `GAR-5611` — [Garuda-DDR] The expected format of all address fields needs to be explicit

- **Type:** Issue
- **Status:** Open
- **Priority:** Major
- **Reporter:** sjhawar
- **Created:** 23-06-2023 07:47
- **Updated:** 18-03-2024 07:29
- **Labels:** ClientApp-DDR5DRAMTx, PLAE-Feedback, TF_Queries

**Description (verbatim):**

> The expected format of all address fields needs to be explicit, and show an example. Can some elements of the address be handed in the backend, such that for these fields all you need to do is enter an IP, and the formatting is taken care of in the backend?


---

### Priority: Minor (128)

#### `GAR-7922` — [UX/UI] Test creation screen modifications

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** u625287
- **Created:** 17-03-2024 01:32
- **Labels:** UX-Feedback

**Description (verbatim):**

> # Moved the expand-collapse icon at the application level on left so that all the expand-collapse icons are on the same side.
>  # Moved info icon next to scenario/step level which would appear only if there is any information to be displayed.
>  # Removed column headers as we are providing tooltips on all the icons.
>  # Aligned Status, Settings and Delete(wherever applicable) icons vertically at application-scenario-step level.
>
>  
>
> {color:#de350b}** More changes can be added after discussion with th… [truncated]


---

#### `GAR-5357` — [TekFlow RAA UI/UX Issue] Lack of consistency in UI operation

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 27-05-2023 23:51
- **Updated:** 11-09-2023 01:07
- **Labels:** ClientApp-DP, ClientApp-PCIe

**Description (verbatim):**

> a.	For similar UI operation like “Delete” or “Modify/Edit”, in some page we are using icons and, in some page, we are using  buttons. Also the button icons are different in different page.
>
>  !image-2023-05-28-12-17-37-922.png|thumbnail! 
>  !image-2023-05-28-12-17-42-882.png|thumbnail! 
>  !image-2023-05-28-12-17-54-803.png|thumbnail! 
>
> b.	The mouse pointer on mouse-over on a button is sometimes regular, and sometime link. In the Test Tab, the "Add Test" button shows normal pointer where as view res… [truncated]


---

#### `GAR-5363` — [TekFlow RAA UI/UX Issue] Cosmetic Issues

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 28-05-2023 00:14
- **Labels:** ClientApp-DP, ClientApp-PCIe

**Description (verbatim):**

> a.	Change Text: Test Bench
>  !image-2023-05-28-12-40-45-770.png|thumbnail! 
>  !image-2023-05-28-12-40-50-526.png|thumbnail! 
> b.	Change Text: Application
>  !image-2023-05-28-12-40-55-753.png|thumbnail! 
> c.	Change Text: Click on ‘+’ to add a new instrument
>  !image-2023-05-28-12-41-00-772.png|thumbnail! 
> d.	Test List columns
>          - Is Test Mode column needed? 
>          - Putting the “Year” in the date will be useful.
>  !image-2023-05-28-12-44-28-418.png|thumbnail!


---

#### `GAR-5361` — [TekFlow RAA UI/UX Issue] Spinning Control Placement

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 28-05-2023 00:00
- **Labels:** ClientApp-DP, ClientApp-PCIe

**Description (verbatim):**

> Instead of placing the spinning control at the middle of the panel, can it be put in the top right corner? And if we want to show it in the middle, the content of the panel should be blur/disabled.
>
>  !image-2023-05-28-12-30-53-320.png|thumbnail!


---

#### `GAR-5359` — [TekFlow RAA UI/UX Issue] Inconsistency in messaging for no record

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 27-05-2023 23:57
- **Labels:** ClientApp-DP, ClientApp-PCIe

**Description (verbatim):**

> a.	In ‘Test’, ‘Report’ and ‘License’ tab we are showing a proper message that no record found. But under ‘Manage’ tab these are missing. 
>  !image-2023-05-28-12-26-39-774.png|thumbnail! 
>  !image-2023-05-28-12-25-29-126.png|thumbnail! 
> b.	In test tab we are Showing the message with an icon, where in other tabs these are plain text.
> c.	Regarding Test Page message: The red ‘+’ icon is a bit misleading. I went on to click that once to add a test. Secondly should we use “No test data found.” Instead o… [truncated]


---

#### `GAR-5358` — [TekFlow RAA UI/UX Issue] No Launch option from Application page

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 27-05-2023 23:54
- **Labels:** ClientApp-DP, ClientApp-PCIe

**Description (verbatim):**

> In Dashboard we give the launch link against an application, but when we move to the application page buy clicking the arrow icon, we do not see the launch link anymore. This is inconsistent.
>  !image-2023-05-28-12-23-25-502.png|thumbnail! 
>  !image-2023-05-28-12-23-29-226.png|thumbnail!


---

#### `GAR-5362` — [TekFlow RAA UI/UX Issue] Info Icon in test results does not show anything.

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 28-05-2023 00:02
- **Labels:** ClientApp-DP, ClientApp-PCIe

**Description (verbatim):**

> Hide the info icon if there is no information. When we click it, it shows nothing.
>
>  !image-2023-05-28-12-31-32-290.png|thumbnail!


---

#### `GAR-5360` — [TekFlow RAA UI/UX Issue] Progress bar is misleading in multi chain app scenario

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 27-05-2023 23:59
- **Updated:** 28-11-2023 08:12
- **Labels:** Clarius-Generic, ClientApp-DP, ClientApp-PCIe

**Description (verbatim):**

> Applications in multichain runs sequentially, but the progress bar for all apps start loading the moment we click the run button. The user might get mislead that all the apps have started processing. May by an “Yet to Start” message with a blank progress be better understood.
>
>  !image-2023-05-28-12-28-27-164.png|thumbnail!


---

#### `GAR-5365` — [TekFlow RAA UI/UX Issue] Session expire does not redirect to login page always

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 28-05-2023 03:13
- **Updated:** 18-03-2024 07:12
- **Labels:** Clarius-Generic, Clarius-RP1-MustFix, ClientApp-DP, ClientApp-DP-Stabilization, ClientApp-PCIe

**Description (verbatim):**

> At times, even though the session has expired, the user can still be able to navigate to different pages. but the user operation does not work in those pages. This is confusing to the user. Only when you refresh the page it redirects to the login page.


---

#### `GAR-5354` — [TekFlow RAA UI/UX Issue] For a Failed/Aborted Test also the progress bar shows green 100%

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 26-05-2023 08:55
- **Updated:** 11-09-2023 01:08
- **Labels:** ClientApp-DP, ClientApp-DP-Stabilization

**Description (verbatim):**

> The progress bar status of a test session currently not distinguishable enough.
> The status of a test run has 2 parts
>
> 1. Test Completion status
> 2. Test Result status.
>
> In Tekflow, currently we see a green progress bar with 100% when a test completes. It does not conveys whether the test Passed/Failed or aborted. 
>
> The Green color and 100% label makes it feel like the test has passed. The user will not get to know the actual status until he/she vies the results or checks test scenario status.
>
>  !… [truncated]


---

#### `GAR-6342` — [UX] Data analytics

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** fana
- **Created:** 15-09-2023 01:24


---

#### `GAR-6373` — [UX] Enable the user to choose and view the set of waveforms to be overlapped.

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** kemg
- **Created:** 19-09-2023 01:08
- **Updated:** 22-09-2023 05:53

**Acceptance Criteria (verbatim):**

> Should be able to select the waveforms to be overlapped.
>
> Should be able to view the overlap of the selected waveforms.


---

#### `GAR-4047` — Display cumulative eye diagram in GUI

- **Type:** Task
- **Status:** Open
- **Priority:** Minor
- **Reporter:** bhap
- **Created:** 22-12-2022 01:56
- **Updated:** 26-03-2024 03:44


---

#### `GAR-7478` — Addressing impact in GUI and results API, download API after deleting only a waveform of test

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** bhap
- **Created:** 26-01-2024 05:28
- **Updated:** 31-01-2024 01:24

**Description (verbatim):**

> Addressing impact in GUI and results API, download API after deleting only a waveform of test.
>
> > After executing API to delete the waveform, in GUI it shows blank. There is no indication about the reason.
>
> > When i try to GET results API, response returns waveform details as well.


---

#### `GAR-1917` — [UI] As a user I want to download and copy logs from the UI

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** agupta8
- **Created:** 05-04-2022 00:46
- **Updated:** 13-09-2022 20:56
- **Labels:** UI

**Description (verbatim):**

> UI should allow user to download and copy the selected logs.


---

#### `GAR-3184` — [UI] UI has to change based on the DUT selection in the application

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** sacb
- **Created:** 27-07-2022 00:40
- **Updated:** 26-03-2024 03:44

**Description (verbatim):**

> We have merged both TBT and USB4 together into a single application.
> Under Gen2 and Gen3 rounded signal test applications, we require a dropdown with TBT and USB4 ( we can create this dropdown).
> Based upon the Selection, if the user selects TBT then I need to show drop down with 5 DUTs
> If the user selects  USB4 I need to show drop down with 2 DUTs


---

#### `GAR-2570` — [UI] Removing add source\ Add Lane from UI

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** ykontham
- **Created:** 06-06-2022 03:36
- **Updated:** 26-03-2024 03:44

**Description (verbatim):**

> Add Lanes\Add Sources options should not be there in the UI


---

#### `GAR-6335` — [UI] Data analytics

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** fana
- **Created:** 15-09-2023 01:01
- **Updated:** 15-09-2023 01:20

**Acceptance Criteria (verbatim):**

> * Should be able to represent the data analytics results in UI
>
> *Pre-requisite:*
>  * Design for data analytics should be available
>  * Data analytics algorithm should be implemented
>  * API to access data should be available
>  * UX should be available


---

#### `GAR-28` — UI for adding Settings

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** spatil
- **Created:** 18-10-2021 04:49
- **Updated:** 31-08-2022 22:03


---

#### `GAR-6020` — UI changes [On Testbench change]

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** u619415
- **Created:** 09-08-2023 00:36


---

#### `GAR-2574` — Showing the connection diagram in the UI

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** sacb
- **Created:** 06-06-2022 04:10
- **Updated:** 22-08-2022 00:17
- **Labels:** ClientApp-USB4

**Description (verbatim):**

> Showing the connection diagram in the UI


---

#### `GAR-8092` — Data generalization for UI, API and SDK

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** u631933
- **Created:** 28-03-2024 22:12
- **Updated:** 16-04-2024 03:01

**Description (verbatim):**

> Data generalization for UI, API and SDK: Aim is to create a common data file for testing UI, API and SDK without having to write multiple test cases each time.


---

#### `GAR-5637` — [UI] Render PAMJET Eye Diagram Plot

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** fana
- **Created:** 25-06-2023 06:20
- **Updated:** 26-03-2024 03:44

**Acceptance Criteria (verbatim):**

> Pre-requisites:
>          Eye-diagram data model from backend.
>
> Acceptance criteria: 
>          Should be able to view eye-diagrams(4 level) in UI results page.

**Description (verbatim):**

> Plot needed:  Eye diagram (4 level) [Sample report with diagram is attached]


---

#### `GAR-5644` — [UI] Enable the user to calculate scope noise

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** fana
- **Created:** 25-06-2023 19:12
- **Updated:** 26-03-2024 03:44

**Acceptance Criteria (verbatim):**

> Pre-requisites:
>  * A generic method for scope noise computation is implemented
>  * Access to scope noise database
>  * UX design
>
> Acceptance criteria:
>  * Should be able to characterize the scope noise
>  * Should be able to view the noise database
>  * Should be able to view the scope noise result

**Description (verbatim):**

> Integrate a generic UI for scope noise computation for all applications.
>
> For reference, attaching screenshots of scope noise tool for PCIe and DPOJET-SNC screens used for DDR scope noise calculation.


---

#### `GAR-1109` — Update the UI with consolidated status and results data

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** sbhushan
- **Created:** 08-12-2021 03:01
- **Updated:** 26-03-2024 03:44

**Acceptance Criteria (verbatim):**

> 1) As a developer I need to update the code to handle the consolidated status and results data coming from the API.

**Description (verbatim):**

> Doneness Criteria
> 1) Personal Review and Team inspection
> 2) Testing


---

#### `GAR-7914` — Correct BW data is needed in UI and report

- **Type:** Requirement
- **Status:** Open
- **Priority:** Minor
- **Reporter:** kmishra
- **Created:** 13-03-2024 22:46
- **Updated:** 15-03-2024 01:43
- **Labels:** ClientApp-CPHY, ClientApp-DPHY, Client-App-Dphy

**Description (verbatim):**

> As a validation engineer, I want to see the bandwidths which are supported by scope model.
>
> For example, if scope is Riddick scope, then supported bandwidths should dynamically update in UI.
>
> Also, I should be able to see the correct bandwidth in report which was used in acquisition.


---

#### `GAR-1092` — As a user, I want to view the acquired waveform in the UI

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** magl
- **Created:** 08-12-2021 00:00
- **Updated:** 29-08-2022 00:44

**Description (verbatim):**

> View the acquired waveform in the UI with background graticule, grids and labels


---

#### `GAR-7180` — [UI] Support for exponential value of settings and unit conversion

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** fana
- **Created:** 13-12-2023 01:33
- **Updated:** 21-02-2024 21:32


---

#### `GAR-4653` — Code refactoring for settings, limits & sources & lanes in UI :

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** amishra2
- **Created:** 16-03-2023 21:17
- **Updated:** 26-03-2024 03:44

**Description (verbatim):**

> Currently there are settings and they get copied into uiSettings - and there are several clones of these objects. 
>
> The apis for app-definition are called from 4 different places.
>
> The data is get & set in functions which has 6 duplicate copies - in test-body, sequence row, scenario, steps, prepare methods, etc. 
>
> This leads to poor performance of code and high maintenance. 
>
> This needs refactoring into a better design.


---

#### `GAR-6374` — [UI] Enable to user to choose and view the set of waveforms to be overlapped.

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** kemg
- **Created:** 19-09-2023 01:50
- **Updated:** 22-09-2023 05:54

**Description (verbatim):**

> Should be able to select the waveforms to be overlapped.
>
> Should be able to view the overlap of the selected waveforms.


---

#### `GAR-7184` — UI : [DRAM-Tx] selection and deselection of a scenario based on Settings

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** u610666
- **Created:** 13-12-2023 01:43


---

#### `GAR-2328` — Manually test logs in the UI which are logged by all the module

- **Type:** Task
- **Status:** Open
- **Priority:** Minor
- **Reporter:** bhap
- **Created:** 11-05-2022 10:14
- **Updated:** 26-03-2024 03:44


---

#### `GAR-8000` — Need to add unique ids for UI elements for test automation

- **Type:** Requirement
- **Status:** Open
- **Priority:** Minor
- **Reporter:** u625293
- **Created:** 27-03-2024 02:08

**Description (verbatim):**

> When UI elements are updated or location is changed, the selector information also changes and needs to be constantly updated. This causes test scripts to fail.
>
> For example, application status icon was added in test status UI, causing expand more button to be shifted so locators in test script have to be updated like in the attached sceenshots. These UI elements need unique ids so selectors do not need to be used.
>
> This is needed in all pages not just status page.


---

#### `GAR-5719` — C# Platform installers UI screens(New, Upgrade, Uninstallation, Downgrade)

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** agupta8
- **Created:** 03-07-2023 20:50


---

#### `GAR-5667` — [UI] Enable the user to initiate and view the validation status of DUT connections.

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** kemg
- **Created:** 26-06-2023 08:45
- **Updated:** 06-12-2023 22:06

**Acceptance Criteria (verbatim):**

> *Pre-Requisite:-* 
> UX design reviewed and approved
>
> *Acceptance Criteria:-*
> Should be able to initiate the validation process.
>  Should be able to view the progress of the validation.
>  Should be able to verify the DUT connections.

**Description (verbatim):**

> As a test engineer, I should be able to initiate and view the validation status of DUT connections.


---

#### `GAR-5661` — [UI] Enable the user to initiate and view the validation status of the test bench.

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** kemg
- **Created:** 26-06-2023 03:57
- **Updated:** 11-12-2023 02:55

**Acceptance Criteria (verbatim):**

> *Pre-Requisite*:-
>
> UX design should be reviewed and approved.
>
> *Acceptance Criteria*
>
> Should be able to initiate the test bench validation process.
> Should be able to view the progress of the validation.
> Should be able to view the result of the test bench validation.

**Description (verbatim):**

> As a test engineer, I should be able to the initiate the test bench validation and also view its status from the TekFlow UI.


---

#### `GAR-6345` — [Implementation] Option for user to select which waveform to show on UI and Report

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** saravind
- **Created:** 15-09-2023 02:04
- **Updated:** 22-09-2023 05:53
- **Labels:** Client-App-USB4V2

**Acceptance Criteria (verbatim):**

> * Should be able to view post processed waveform generated by AS in UI and Reports
>  * Should be able to select which waveforms to plot in UI by default
> For example:
> A test acquired single-ended waveform and filtered waveform is generated. 
> Should be able to choose any combination of waveforms
>  * Should be able to select which waveforms images to include in the report


---

#### `GAR-6343` — [Design] Option for user to select which waveform to show on UI and Report

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** saravind
- **Created:** 15-09-2023 01:39
- **Updated:** 22-09-2023 05:53
- **Labels:** Client-App-USB4V2

**Acceptance Criteria (verbatim):**

> * Should be able to view post processed waveform generated by AS in UI and Reports
>  * Should be able to select which waveforms to plot in UI by default
>  For example:
>  A test acquired single-ended waveform and filtered waveform is generated. 
>  Should be able to choose any combination of waveforms (by using INTERNAL tag)
>  * Should be able to select which waveforms images to include in the report


---

#### `GAR-6754` — Preset 0 should always be selected in the Scenario Level settings in UI.

- **Type:** Requirement
- **Status:** Open
- **Priority:** Minor
- **Reporter:** shry
- **Created:** 06-11-2023 21:04
- **Updated:** 17-11-2023 03:22
- **Labels:** Client-App-USB4V2

**Description (verbatim):**

> Preset 0 should always e selected. When we click unselect all, Preset 0 should not be deselected


---

#### `GAR-1545` — [UI] As a user I should be able to view the connection diagrams of an application

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** sacb
- **Created:** 10-03-2022 23:07
- **Updated:** 26-03-2024 03:43

**Acceptance Criteria (verbatim):**

> 1) View the connection diagrams of an application in the Tekflow UI.
> 2) Deploy the connection diagram from app team repo.

**Description (verbatim):**

> 1) Should be able to view the connection diagrams of an application
>
> Input
> * Login to ATOMS UI.
> * Select Application from navigation Panel.
> * Select an application which has connection diagram. (Check JSON which has connection diagram).
> * Click on Connection diagram to view connection diagram.
>
> Output
> * Connection diagram will be shown in dialog box.
>
> +FAILS ON+
> * If connection diagram is not present in database.
>
> 2) Should not be able to view the connection diagram of an application.
>
> Input
> * L… [truncated]


---

#### `GAR-6790` — Error notification pop up message text is repeated twice in TekFlow UI

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** sups
- **Created:** 08-11-2023 22:08
- **Updated:** 17-11-2023 03:35
- **Labels:** Client-App-USB4V2

**Description (verbatim):**

> steps to reproduce:
>  # add test
>  # select technology as TX USB4V2 and application as USB4v2_Tx_Gen4
>  # add sequence
>  # click on local settings of Transmitter Timing and Voltage Measurement Subset scenario
>  # now deselect all the sub measurements
>  # click on Apply
>
> Observation:
>
> the error message notification pop up text "Transmitter Timing and Voltage Measurement Subset is empty" is repeated twice . refer attachment


---

#### `GAR-2188` — Browse button is required to get s1p and filter file from TekFlow UI

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** rjha
- **Created:** 27-04-2022 22:51
- **Updated:** 29-08-2022 03:03
- **Labels:** ClientApp-CK

**Description (verbatim):**

> Browse button is required to get s1p and filter file from TekFlow UI.
>
>  
>
> !image-2022-04-28-12-20-28-948.png!


---

#### `GAR-177` — As a software test engineer, I should be able to run automated UI tests

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** agupta8
- **Created:** 19-10-2021 06:09
- **Updated:** 26-03-2024 03:43


---

#### `GAR-5720` — C# Apps, Common AS, Common IS installers UI screens(New, Upgrade, Uninstallation, Downgrade)

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** agupta8
- **Created:** 03-07-2023 20:51


---

#### `GAR-6311` — UI change to remove hard coding and fetch values through API for filtering logs

- **Type:** Task
- **Status:** Open
- **Priority:** Minor
- **Reporter:** u621009
- **Created:** 12-09-2023 23:38
- **Updated:** 12-09-2023 23:40


---

#### `GAR-7625` — As a Clarius user I should be able to upload the downloaded archive file and open the test in UI

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** u616478
- **Created:** 06-02-2024 01:03


---

#### `GAR-2701` — Manually verify the defect in which repeated results appear in UI even if we run single acq

- **Type:** Task
- **Status:** Open
- **Priority:** Minor
- **Reporter:** bhap
- **Created:** 11-06-2022 11:26
- **Updated:** 26-03-2024 03:44


---

#### `GAR-2700` — Add test to defect in which repeated results appear in UI even if we run single acq

- **Type:** Task
- **Status:** Open
- **Priority:** Minor
- **Reporter:** bhap
- **Created:** 11-06-2022 11:25
- **Updated:** 26-03-2024 03:44


---

#### `GAR-6248` — [Garuda DP][Qualcomm Observation- Beta5] Need provision to update active pool size

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 07-09-2023 00:55
- **Updated:** 28-11-2023 07:56
- **Labels:** Clarius-Generic, ClientApp-DP, ClientApp-DP-Stabilization, Qualcomm-TF-DP-Issue

**Description (verbatim):**

> Sometimes modifying the active pool size is needed. 
> Currently this can be changes in the app settins json.  This is not recommended for user. There should be an option to set these in UI.


---

#### `GAR-5577` — [Garuda DP][PLAE Feedback-Jacky] TekFlow in scope

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 21-06-2023 06:54
- **Updated:** 28-11-2023 08:00
- **Labels:** Clarius-Generic, ClientApp-DP, PLAE-Feedback, TF_Installation

**Description (verbatim):**

> SW Versions:
> TekFlow-Platform-v0.15.5.beta
> DisplayPort-v0.15.3.beta_9
>
> Can tekflow be installed in scope?


---

#### `GAR-5569` — [Garuda DP][PLAE Feedback-Gary] Issues in understanding Sequences

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 21-06-2023 06:18
- **Updated:** 28-11-2023 08:01
- **Labels:** Clarius-Generic, ClientApp-DP, PLAE-Feedback, TF_Configuration

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
>
>
> In the “Prepare Sequence” section, there is an expandable dropdown to the far right of each listed sequence…
> * What is the function of these options? 
> * Can I get a description of why a user might check or uncheck any combination of these options? (other than PELevelAndEqualizationVerifica… [truncated]


---

#### `GAR-5567` — [Garuda DP][PLAE Feedback-Gary] Applications under "Manage" tab is not meaningful

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 21-06-2023 06:08
- **Updated:** 28-11-2023 08:01
- **Labels:** Clarius-Generic, ClientApp-DP, PLAE-Feedback, TF_Configuration

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
> Unsure of the need for this tab under “Manage”…what is a user to manage in this area?


---

#### `GAR-5556` — [Garuda DP][PLAE Feedback-Gary] Dropdown gets collapsed when user clicks outside

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 20-06-2023 21:09
- **Updated:** 28-11-2023 08:02
- **Labels:** Clarius-Generic, ClientApp-DP, PLAE-Feedback, TF_General

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
> Clicking away or outside of open dropdown boxes should collapse them


---

#### `CDOC-7654` — [Garuda DP][PLAE Feedback-Gary] Automated Guide needed in TekFlow UI

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 20-06-2023 21:05
- **Updated:** 23-06-2023 06:42
- **Labels:** ClientApp-DP, PLAE-Feedback, TF_General

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
> Stepping into this UI for the first time is overwhelming, it would be great to have some sort of automated guide as we launch that tells the user where to start and how to progress through the different sections of the dashboard


---

#### `GAR-5631` — Why do we have such a short logout time limit

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** sjhawar
- **Created:** 23-06-2023 10:14
- **Labels:** ClientApp-DDR5DRAMTx, PLAE-Feedback, TF_Queries

**Description (verbatim):**

> Why do we have such a short logout time limit? How long is it right now? Can this be extended?


---

#### `GAR-5608` — The entire box elements should be hyperlinks. Clicking anywhere on the box should take you to the destination of the arrow hyperlink (when applicable).

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** sjhawar
- **Created:** 23-06-2023 07:41
- **Updated:** 27-06-2023 02:43
- **Labels:** ClientApp-DDR5DRAMTx, PLAE-Feedback, TF_General

**Description (verbatim):**

> The entire box elements should be hyperlinks. Clicking anywhere on the box should take you to the destination of the arrow hyperlink (when applicable). !image-2023-06-23-20-11-06-070.png!


---

#### `GAR-5605` — [MIPI CPHY DPHY] [DP]Validate Test Bench

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** kemg
- **Created:** 23-06-2023 05:07
- **Updated:** 06-12-2023 22:09
- **Labels:** Clarius-Generic, ClientApp-CPHY, ClientApp-DP, ClientApp-DPHY, Client-App-Dphy, PLAE-Feedback

**Description (verbatim):**

> User should be able to validate the health of the Acquisition Module by verifying if the module is:- 
>  * Reachable. 
>  * Able to communicate with the instruments specified in the test bench.
>  * Able to communicate with the backend modules. 
>  * Able to verify if the required acquisition plugins are present.
>
>       This helps the user to know the status of the Acquisition module without logging into the scope.
>
>  
>
> Limitations
>
>  User should be able to validate the DUT connections.  
>
>  
>
> Latest Figma… [truncated]


---

#### `GAR-5600` — Scenario and Step level Descriptions

- **Type:** Epic
- **Status:** Open
- **Priority:** Minor
- **Reporter:** kemg
- **Created:** 23-06-2023 04:14
- **Updated:** 30-01-2024 03:56
- **Labels:** ClientApp-CPHY, Client-App-Dphy, PLAE-Feedback, TF_UI


---

#### `GAR-5599` — Logout timeout to be increased

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** skumar5
- **Created:** 23-06-2023 04:11
- **Updated:** 23-06-2023 04:14
- **Labels:** ClientApp-DDRRx, PLAE-Feedback, TF_General

**Description (verbatim):**

> It is trivial but it gets timeout after every few minutes which is a repeating task for any user to log in again.


---

#### `GAR-6240` — [Garuda DP][STM Observations] Retry connection to services from AS and IS

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 06-09-2023 03:15
- **Updated:** 28-11-2023 07:57
- **Labels:** Clarius-Generic, ClientApp-DP

**Description (verbatim):**

> AS should retry connection to rabbitMQ in case of connection errors
> AS should retry connection to minio in case of connection errors
> IS should retry connection to rabbitMQ in case of connection errors
> IS should retry connection to minio in case of connection errors


---

#### `TBSQA-431` — Functional interruption due to popups

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** sjena
- **Created:** 29-11-2019 00:36
- **Updated:** 29-11-2019 00:39
- **Components:** UI SQE Continuous Improvement
- **Labels:** UI

**Description (verbatim):**

> Due to some pops ups such as "file already open" ,"Object is not set to instance of Object" ui functional is getting interrupted some times for some subsystems.


---

#### `TBSQA-430` — 4 stack setup - scope name being read as 2 stack instead of 4 stack

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** gchittem
- **Created:** 28-11-2019 21:27
- **Updated:** 28-11-2019 21:28
- **Components:** UI SQE Continuous Improvement
- **Labels:** UI

**Description (verbatim):**

> 4 stack setup - scope name being read as 2 stack instead of 4 stack
>
> Impact: The results in the excel sheet are getting logged in 2 stack instead of 4 stack. Creates a lot of confusion while analyzing


---

#### `TBSQA-434` — Failures in Trigger Component

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** gchittem
- **Created:** 02-12-2019 20:11
- **Components:** UI SQE Continuous Improvement
- **Labels:** UI

**Description (verbatim):**

> Failures in Trigger Component


---

#### `IVNPOC-4` — User should be able to integrate custom scripts (interrupts) with conformance tests.

- **Type:** Epic
- **Status:** Open
- **Priority:** Minor
- **Reporter:** amishra2
- **Created:** 21-11-2019 01:32
- **Labels:** Backend, UI


---

#### `IVNPOC-3` — User should be able to connect to Spirent TTWorkbench based applications and control them.

- **Type:** Epic
- **Status:** Open
- **Priority:** Minor
- **Reporter:** amishra2
- **Created:** 21-11-2019 01:17
- **Labels:** Backend, UI


---

#### `IVNPOC-2` — User should be able to connect to Tek-Express based applications and control them.

- **Type:** Epic
- **Status:** Open
- **Priority:** Minor
- **Reporter:** amishra2
- **Created:** 21-11-2019 01:17
- **Labels:** Backend, UI


---

#### `IVNPOC-1` — User should be able to discover devices though multiple network interfaces like Ethernet, USB, GPIB, etc.

- **Type:** Epic
- **Status:** Open
- **Priority:** Minor
- **Reporter:** amishra2
- **Created:** 21-11-2019 01:05
- **Updated:** 21-11-2019 23:02
- **Labels:** Backend, UI


---

#### `OUI-830` — As a user, I want to use latest MATLAB R2019a 64-bit version with OUI software to analyze the optical signal.

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 19-06-2019 20:30
- **Updated:** 11-11-2020 07:15
- **Labels:** UI
- **Business Value:** 70

**Description (verbatim):**

> Acceptance criteria:
>  # I should be able to use MATLAB R2019a 64 bit version to analyze the optical signal in OUI software.
>  # OUI should work well with MATLAB R2019a like previous MATLAB versions (R2016a, R2014a and R2011b).
>  # I should not get any error message or unhandled exceptions.
>
>  
>
> Doneness criteria:
>  # Install R2019a in the development system.
>  # Modify OUI code to use R2019a if it is installed in the system.
>  # Modify MATLAB encryption script to encrypt MATLAB.exe as well as .m files… [truncated]


---

#### `GAR-6935` — [MIPI CPHY DPHY][Debug] Interactive plots

- **Type:** New Feature
- **Status:** Open
- **Priority:** Minor
- **Reporter:** kmishra
- **Created:** 28-11-2023 03:11
- **Updated:** 29-11-2023 00:32
- **Labels:** ClientApp-CPHY, ClientApp-DPHY, Client-App-Dphy, PLAE-Feedback

**Description (verbatim):**

> As a validation engineer, I need to do some measurements on plots. Following features will be needed:
>  * Vertical and horizontal cursor support, 2 each. This can be independently moved and turned off if required.
>  * As soon as turned on it should show delta on plot to right corner, also the x1 y1 and x2 y2 values
>  * Bottom left corner should have number of unit intervals and mask in case of eye diagram
>  * Please refer to Riddick or DPOJET plots for further details


---

#### `DP-2483` — Add the  new Test ID's as per CTS 1.4 spec in UI

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** kavin
- **Created:** 25-07-2018 03:02
- **Updated:** 16-09-2018 23:56
- **Labels:** UI

**Description (verbatim):**

> The Test ID's in DP app have to be changed to CTS 1.4 spec.
>
>  
>
> Please discuss with Varun about the new test ID's


---

#### `DP-2488` — Work on issues reported by Static code analysis

- **Type:** Task
- **Status:** Open
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 03-08-2018 03:34
- **Updated:** 16-09-2018 23:56
- **Labels:** UI

**Description (verbatim):**

> Work on issues reported by Static code analysis


---

#### `DP-2487` — QG1 support: Add Unit Test project and add unit test cases

- **Type:** Task
- **Status:** Open
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 03-08-2018 03:06
- **Updated:** 10-06-2019 11:03
- **Labels:** UI

**Description (verbatim):**

> QG1 support: Add Unit Test project and add unit test cases


---

#### `DCG-93` — Excel to XML creator for SequentialOrder General parameters

- **Type:** Task
- **Status:** Open
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 07-03-2018 03:23
- **Updated:** 10-04-2018 03:42
- **Labels:** UI

**Description (verbatim):**

> Develop Excel to XML creator for SequentialOrder General parameters


---

#### `DP-9693` — [Garuda DP][PLAE Feedback-Gary] Separate acquisition setting for Eye/Jitter is confusing

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 21-06-2023 05:57
- **Updated:** 24-02-2024 11:16
- **Labels:** PLAE-Feedback

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
> - I don’t understand why there are different settings for voltage swing between the “Acquisitions” and “Eye/Jitter Acquisitions” tabs…same for Pre-emphasis levels. Maybe this is a spec thing that I am unaware of…?
> - What happens when the common settings between the “Acquisitions” and “Eye/Ji… [truncated]


---

#### `DP-9689` — [Garuda DP][PLAE Feedback-Gary] "Test Mode" option is ambiguous

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 21-06-2023 05:53
- **Updated:** 24-02-2024 11:19
- **Labels:** PLAE-Feedback

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
> What does “Test Mode” setting do? I can’t tell the difference in the UI between “Compliance” and “Advanced”
>
> There should be a hover-over tooltip or info icon by “Test Mode” describing what it does


---

#### `DPOJET-205` — Apple Performance Improvement

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** SMAHADEV
- **Created:** 24-04-2014 04:32
- **Updated:** 25-09-2020 00:00
- **Labels:** UI

**Description (verbatim):**

> Apple Performance Improvement


---

#### `GAR-2198` — Validate Testbench creation functionality

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** spatil
- **Created:** 03-05-2022 10:21
- **Updated:** 17-03-2023 05:28
- **Labels:** testbench, UI


---

#### `GAR-640` — Verify 'scenario settings' button

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** u612584
- **Created:** 01-12-2021 22:45
- **Updated:** 18-06-2023 23:08
- **Labels:** UI


---

#### `GAR-641` — Verify 'application settings' button

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** u612584
- **Created:** 01-12-2021 22:45
- **Updated:** 18-06-2023 23:08
- **Labels:** UI


---

#### `GAR-642` — Verify 'connection diagram' button

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** u612584
- **Created:** 01-12-2021 22:45
- **Updated:** 18-06-2023 23:08
- **Labels:** UI


---

#### `GAR-635` — Verify alignment in 'Applications' page (order of data, left-aligned, spacing etc)

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** u612584
- **Created:** 01-12-2021 22:45
- **Updated:** 18-06-2023 23:08
- **Labels:** UI


---

#### `GAR-662` — Verify the title of notification

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** u612584
- **Created:** 01-12-2021 22:45
- **Updated:** 18-06-2023 23:13
- **Labels:** UI


---

#### `GAR-663` — Verify that recent notification message is always on the top

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** u612584
- **Created:** 01-12-2021 22:45
- **Updated:** 18-06-2023 23:13
- **Labels:** UI


---

#### `GAR-664` — Verify user icon on header

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** u612584
- **Created:** 01-12-2021 22:45
- **Updated:** 18-06-2023 23:13
- **Labels:** UI


---

#### `GAR-661` — Verify notification removed  once it is handled

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** u612584
- **Created:** 01-12-2021 22:45
- **Updated:** 18-06-2023 23:13
- **Labels:** UI


---

#### `GAR-1166` — Verify 'New Session' button in 'Debug' page

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** u612584
- **Created:** 12-12-2021 22:15
- **Updated:** 18-06-2023 23:19
- **Labels:** Debug, UI


---

#### `GAR-1412` — Waveform saving options can be provided

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** mtatiche
- **Created:** 08-02-2022 23:53
- **Updated:** 06-09-2023 00:31
- **Labels:** ClientApp-DP

**Description (verbatim):**

> Waveform saving options like 
>
> Acquire ONly 
>
> Analyze immediately after each acquisition 
>
> Analyze after all acquisition 
>
> Can be provided for the user. Especially when the DUT needs to be taken away after acquisition, this feature is helpful


---

#### `GAR-636` — Verify the 'Applications' page in different resolutions

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** u612584
- **Created:** 01-12-2021 22:45
- **Updated:** 18-06-2023 23:08
- **Labels:** UI


---

#### `GAR-637` — Verify the scrollbar in 'Applications' page (enabled only when necessary)

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** u612584
- **Created:** 01-12-2021 22:45
- **Updated:** 18-06-2023 23:08
- **Labels:** UI


---

#### `GAR-638` — Verify the 'Applications' page by zooming in and out

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** u612584
- **Created:** 01-12-2021 22:45
- **Updated:** 18-06-2023 23:08
- **Labels:** UI


---

#### `GAR-639` — Verify message displayed while loading application list (hourglass icon or loading message)

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** u612584
- **Created:** 01-12-2021 22:45
- **Updated:** 18-06-2023 23:08
- **Labels:** UI


---

#### `GAR-1191` — Verify the 'Settings icon' in Waveform field

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** u612584
- **Created:** 12-12-2021 22:58
- **Updated:** 18-06-2023 23:21
- **Labels:** Debug, UI


---

#### `GAR-1168` — Verify the text in 'New session' window

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** u612584
- **Created:** 12-12-2021 22:18
- **Updated:** 18-06-2023 23:21
- **Labels:** Debug, UI


---

#### `GAR-1644` — Data consumption becomes high when ATOMS page is logged in the browser

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** mtatiche
- **Created:** 18-03-2022 00:53
- **Updated:** 28-11-2023 21:25
- **Labels:** ClientApp-DP, ClientApp-DP-PI3-Issue, ClientApp-DP-Stabilization, ClientApp-PCIe

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> It is observed that as soon as the ATOMS page is loaded into the browser and logged in,
>
> the data usage for the user goes up high. 
>
> Attaching the data usage pattern where only ATOMS page was running in the background and nothing else.


---

#### `DPOJET-950` — ADK release

- **Type:** Task
- **Status:** Open
- **Priority:** Minor
- **Reporter:** SMAHADEV
- **Created:** 19-11-2014 08:10
- **Updated:** 25-09-2020 00:00
- **Labels:** UI

**Description (verbatim):**

> RElease of ADK is needed due to addition of new interface for adding pre-requisite measurements


---

#### `GAR-1410` — User cannot see the configuration settings that were selected for the previously executed test

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** mtatiche
- **Created:** 08-02-2022 23:50
- **Updated:** 26-03-2024 03:44
- **Labels:** ClientApp-DP

**Description (verbatim):**

> The configured test is missing when the user switches between the menu options


---

#### `GAR-1411` — User cannot see the configuration settings that were selected for the previously executed test.

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** mtatiche
- **Created:** 08-02-2022 23:51
- **Updated:** 26-03-2024 03:44
- **Labels:** ClientApp-DP


---

#### `GAR-3581` — As a user I want to clone a previous test and run

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** u612584
- **Created:** 03-10-2022 02:31
- **Updated:** 26-03-2024 03:44
- **Labels:** UI


---

#### `GAR-3583` — As a user I want to clone a previous test and allow user to change acquisition settings and change measurement settings.

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** u612584
- **Created:** 03-10-2022 02:47
- **Updated:** 26-03-2024 03:44
- **Labels:** UI


---

#### `GAR-2378` — Error on test id is not present in database

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** u615102
- **Created:** 17-05-2022 04:35
- **Updated:** 26-03-2024 04:48
- **Labels:** UI


---

#### `GAR-2543` — Running two apps in a test is overwriting the wfm

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** u612584
- **Created:** 31-05-2022 01:09
- **Updated:** 26-03-2024 04:48
- **Labels:** UI


---

#### `GAR-5075` — Logging enhancements

- **Type:** Epic
- **Status:** Open
- **Priority:** Minor
- **Reporter:** apattar
- **Created:** 06-05-2023 10:08
- **Updated:** 26-03-2024 03:44
- **Labels:** Client-App-Dphy, PLAE-Feedback

**Description (verbatim):**

> Logging enhancements
>
>  
>
> User should be able to see test run status, like acquiring, and then steps, settings used- logs
> Logs should be available somewhere in TF UI through icon or tab
>
> 2 logs should be available by default, IS and AS.


---

#### `GAR-4758` — [Garuda DP][Pascal Feedback] Need enhanced API supports

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 28-03-2023 07:34
- **Updated:** 26-03-2024 03:44
- **Labels:** ClientApp-DP, ClientApp-DP-CustomerCommit, ClientApp-DP-PI3-Feature

**Description (verbatim):**

> Below API enhancements are requested by Pascal
>
> 1. API support for Stop and Start Analysis Service
> 2. API support to check if correct Instrument service is running on the test bench and can properly communicate to VM.
> 3. API Support to check upload communication and speed from IS
> 4. API support to check if correct technology's Analysis Services are up and running and able to communicate with TekFlow VM.
> 5. API support for Analysis service RAM Memory read/Write memory benchmark
> 6. API support for… [truncated]


---

#### `GAR-4931` — [Garuda DP] Support for S Parameter file conversion to filter file.

- **Type:** Story
- **Status:** Open
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 18-04-2023 07:35
- **Updated:** 26-03-2024 03:44
- **Labels:** ClientApp-DP

**Description (verbatim):**

> User should be able to input S Parameter file directly instead of flt files. The app should be able to create flt file from the S Parameter file and apply.


---

#### `GAR-2376` — 1. Should be able to query the logs based on test id

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** u615102
- **Created:** 17-05-2022 04:32
- **Updated:** 19-03-2024 07:24
- **Labels:** UI


---

#### `GAR-2380` — 2. Should be able to query the logs based on time

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** u615102
- **Created:** 17-05-2022 04:39
- **Updated:** 19-03-2024 07:24
- **Labels:** UI


---

#### `GAR-2200` — Test bench functionality validation - for negative scenarios.

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** spatil
- **Created:** 03-05-2022 10:40
- **Updated:** 19-03-2024 07:17
- **Labels:** testbench, UI


---

#### `GAR-2202` — Validate the Generated report

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** spatil
- **Created:** 04-05-2022 02:21
- **Updated:** 19-03-2024 07:03
- **Labels:** Report, UI


---

#### `GAR-2114` — user should be able to generate report

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** u612584
- **Created:** 25-04-2022 05:14
- **Updated:** 19-03-2024 07:03
- **Labels:** Report, UI


---

#### `GAR-6237` — [Garuda DP][STM Observations] If firewall is disabled for port 18000, IS won't get the task and test hangs

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 06-09-2023 03:11
- **Updated:** 13-03-2024 06:12
- **Labels:** Clarius-Generic, ClientApp-DP, ClientApp-DP-Stabilization


---

#### `GAR-5566` — [Garuda DP][PLAE Feedback-Gary] Dashboard issues

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 21-06-2023 06:04
- **Updated:** 18-03-2024 07:14
- **Labels:** Clarius-Generic, ClientApp-DP, PLAE-Feedback, TF_Configuration

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
> The Dashboard should be set up in a way that the flow of tasks to be done is apparent
> * 	We have “Sequences” in a more prominent position than “Test Benches” and you can’t save a sequence without having first setup a test bench…???
> * 	I suggest that we rearrange in a way that clearly identif… [truncated]


---

#### `GAR-5626` — [Garuda-DDR] Ability to adjust how units are displayed in results, amount of digits in the result

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** sjhawar
- **Created:** 23-06-2023 10:10
- **Updated:** 18-03-2024 07:29
- **Labels:** ClientApp-DDR5DRAMTx, PLAE-Feedback, TF_General

**Description (verbatim):**

> Ability to adjust how units are displayed in results, amount of digits in the result, etc. This is extremely hard to understand at a glance.


---

#### `GAR-5616` — [Garuda-DDR] functionality to the 3 dots button

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** sjhawar
- **Created:** 23-06-2023 07:58
- **Updated:** 18-03-2024 07:29
- **Labels:** ClientApp-DDR5DRAMTx, PLAE-Feedback, TF_Queries

**Description (verbatim):**

> Do we plan to add more functionality to the 3 dots button? If not, can we pull out connection diagram/delete as dedicated buttons? Or have the user select what they want to have as a default button, or what to have hidden under the 3 dots?


---

#### `GAR-5619` — [Garuda-DDR] Is it possible to show the instrument activity log in Tekflow

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** sjhawar
- **Created:** 23-06-2023 08:02
- **Updated:** 18-03-2024 07:29
- **Labels:** ClientApp-DDR5DRAMTx, PLAE-Feedback, TF_Queries

**Description (verbatim):**

> Is it possible to show the instrument activity log in Tekflow? Sometimes, it is very difficult to tell if a scenario is running as intended, or if it's gotten stuck or run into an issue. There really isn't a good way to get feedback from the actual instrumentation, and the percentage-based progress bars do not give a good indication of test progress. I have often found myself going over to the scope to make sure it's working as intended within the automation. Is it possible to have the Instrumen… [truncated]


---

#### `GAR-5614` — [Garuda-DDR] Is it possible to switch the location of "Tags" and "Testbench"

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** sjhawar
- **Created:** 23-06-2023 07:53
- **Updated:** 18-03-2024 07:29
- **Labels:** ClientApp-DDR5DRAMTx, PLAE-Feedback, TF_Queries

**Description (verbatim):**

> Is it possible to switch the location of "Tags" and "Testbench"? That would naturally flow better from Name -> Testbench -> description -> Tags


---

#### `GAR-5655` — [DDR Rx] Default report template need to be selected

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** skumar5
- **Created:** 25-06-2023 23:17
- **Updated:** 18-03-2024 07:29
- **Labels:** Clarius-Generic, ClientApp-DDRRx, PLAE-Feedback, TF_General

**Description (verbatim):**

> Empty template as a default. 
>
> Should be default report template need to be selected by default. 
>
> PFA


---

#### `GAR-5610` — [Garuda-DDR] How much of the instrument details could be auto-populated by querying the address

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** sjhawar
- **Created:** 23-06-2023 07:45
- **Updated:** 18-03-2024 07:29
- **Labels:** ClientApp-DDR5DRAMTx, PLAE-Feedback, TF_General

**Description (verbatim):**

> How much of the instrument details could be auto-populated by querying the address? Can this be supported by the framework?


---

#### `GAR-5627` — [Garuda-DDR] If there are no relevant plots for a test, the "Plots" page should be empty

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** sjhawar
- **Created:** 23-06-2023 10:11
- **Updated:** 18-03-2024 07:29
- **Labels:** ClientApp-DDR5DRAMTx, PLAE-Feedback, TF_General

**Description (verbatim):**

> If there are no relevant plots for a test, the "Plots" page should be empty, and have a note saying there are no plots applicable to the selected measurements. In this format, it almost looks like the results are supposed to have plots, but they're not loading.


---

#### `GAR-5613` — [Garuda-DDR] Compact view for results

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** sjhawar
- **Created:** 23-06-2023 07:52
- **Updated:** 18-03-2024 07:29
- **Labels:** ClientApp-DDR5DRAMTx, PLAE-Feedback, TF_Queries

**Description (verbatim):**

> Can we add a compact view for results. An option to display all measurements and results in a table (similar to report tables?) Can there be customizable viewing options, such as what statistics to show, changing the units of the results, adding/removing columns from the results, selecting how many digits to show for numbers?


---

#### `GAR-5625` — [Garuda-DDR] What does "Info" mean in result panel

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** sjhawar
- **Created:** 23-06-2023 10:09
- **Updated:** 18-03-2024 07:29
- **Labels:** ClientApp-DDR5DRAMTx, PLAE-Feedback, TF_Queries

**Description (verbatim):**

> What's this indicate or mean? Is it supposed to be a button?


---

#### `GAR-5628` — [Garuda-DDR] Can we add cursors (both horizontal/vertical) to the Waveforms view?

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** sjhawar
- **Created:** 23-06-2023 10:11
- **Updated:** 18-03-2024 07:29
- **Labels:** ClientApp-DDR5DRAMTx, PLAE-Feedback, TF_Queries

**Description (verbatim):**

> Can we add cursors (both horizontal/vertical) to the Waveforms view?


---

#### `GAR-5629` — [Garuda-DDR] After Generating a report, the report is stuck in the "Submitted" state and cannot be viewed.

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** sjhawar
- **Created:** 23-06-2023 10:13
- **Updated:** 18-03-2024 07:29
- **Labels:** ClientApp-DDR5DRAMTx, PLAE-Feedback, TF_Reporting

**Description (verbatim):**

> After Generating a report, the report is stuck in the "Submitted" state and cannot be viewed.


---

#### `GAR-5609` — [Garuda-DDR] Add Instrument button is way too small/non-obvious.

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** sjhawar
- **Created:** 23-06-2023 07:44
- **Updated:** 18-03-2024 07:29
- **Labels:** ClientApp-DDR5DRAMTx, PLAE-Feedback, TF_General

**Description (verbatim):**

> Add Instrument button is way too small/non-obvious. If making a new test bench, you absoutely need to hit this button, so could we enlargen it and make it more obvious? Make give it a bubble-text style (similar to "Save" button) that says "Add Instrument".


---

#### `GAR-5617` — [Garuda-DDR] support for all scientific unit notation.

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** sjhawar
- **Created:** 23-06-2023 08:01
- **Updated:** 18-03-2024 07:29
- **Labels:** ClientApp-DDR5DRAMTx, PLAE-Feedback, TF_General

**Description (verbatim):**

> Can all units be adjustable? Why are the units hard-coded. We should support all scientific unit notation. A user should be able to set references to 50mV, 50000uV, 0.0005V, or whatever they want, and the SW then translates it. A lot of our existing SW/Instruments behave like this already.


---

#### `GAR-5630` — [Garuda-DDR] Tekflow seems to occasionally "lag out"

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** sjhawar
- **Created:** 23-06-2023 10:14
- **Updated:** 18-03-2024 07:29
- **Labels:** ClientApp-DDR5DRAMTx, PLAE-Feedback, TF_Queries

**Description (verbatim):**

> Tekflow seems to occasionally "lag out" where nothing can update/refresh that is related to test results (waveforms, measurements, plots, etc.). Going to a results page indefinitely shows the spinning loading icon. I have to completely close out of Tekflow and re-load to fix.


---

#### `GAR-5634` — [Garuda-DDR] When you download the JSON its name is "undefined"

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** sjhawar
- **Created:** 23-06-2023 10:19
- **Updated:** 18-03-2024 07:29
- **Labels:** ClientApp-DDR5DRAMTx, PLAE-Feedback, TF_General

**Description (verbatim):**

> When you download the JSON its name is "undefined"


---

#### `GAR-5633` — [Garuda-DDR] Ability to save and import custom limit files

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** sjhawar
- **Created:** 23-06-2023 10:18
- **Updated:** 18-03-2024 07:29
- **Labels:** ClientApp-DDR5DRAMTx, PLAE-Feedback, TF_General

**Description (verbatim):**

> Ability to save and import custom limit files?


---

#### `GAR-5607` — [Garuda-DDR] Notification box feedback

- **Type:** Issue
- **Status:** Open
- **Priority:** Minor
- **Reporter:** sjhawar
- **Created:** 23-06-2023 07:38
- **Updated:** 01-04-2024 23:39
- **Labels:** ClientApp-DDR5DRAMTx, PLAE-Feedback, TF_General

**Description (verbatim):**

> When not empty, what sort of notifications go here?
>
> This box should have a "Notifications" title, as every other box element of the page has a title.
> !image-2023-06-23-20-07-54-836.png!


---

### Priority: Trivial (1)

#### `GAR-4588` — The Pass/Fail status looks like a button

- **Type:** Issue
- **Status:** Open
- **Priority:** Trivial
- **Reporter:** tparua
- **Created:** 14-03-2023 08:48
- **Updated:** 28-06-2023 03:37
- **Labels:** ClientApp-DP

**Description (verbatim):**

> !image-2023-03-14-21-16-55-609.png|thumbnail! 
>
> The Pass/Fail status looks like a button. Need to show it in a different way.


---
