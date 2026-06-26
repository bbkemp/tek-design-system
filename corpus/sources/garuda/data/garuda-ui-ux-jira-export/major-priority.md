---
class: data-export-cluster
export_id: garuda-ui-ux-jira-export
export_title: Garuda UI/UX JIRA export
export_source: JIRA project GAR (Garuda), filter "UI-UX filtered trial"
export_date: 2026-06-25
cluster_id: major-priority
cluster_value: "Major"
cluster_column: Priority
row_count: 537
related_screens: []
related_docs: []
applies_to: [garuda]
---

# Major priority issues — Garuda UI/UX

## Summary

All Priority=Major issues from the Garuda UI/UX JIRA export, regardless of status. Major is the largest single priority cluster — these are the day-to-day UX defects/improvements that are below show-stopper severity but above polish-level.

## Column inventory

Per-issue fields captured: Issue key, Type, Status, Priority, Summary, Reporter, Created, Updated, Resolved, Resolution, Components, Labels, Customer Application, Customer Visibility, Business Value, User Pain Index, Customer Impact, Action Request, Acceptance Criteria, Engineering Notes, Use Cases, Description.

Many JIRA custom fields are populated unevenly across rows — coverage is reported per-issue inline. Long free-text fields are truncated inline at the boundaries noted in the cluster summary.

## Distribution by Status

| Status | Count |
|---|---:|
| Open | 64 |
| In Progress | 3 |
| Submitted | 40 |
| Resubmitted | 3 |
| Reopened | 1 |
| Verified | 15 |
| Resolved | 109 |
| Closed | 302 |
| **Total** | **537** |

## Rows (verbatim)

Rows are grouped by Status. Within each section, ordering follows the source CSV.

### Status: Open (64)

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

### Status: In Progress (3)

#### `DP-2491` — CTS 1.5 support

- **Type:** Requirement
- **Status:** In Progress
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 28-08-2018 23:32
- **Updated:** 03-10-2018 03:45
- **Labels:** UI

**Description (verbatim):**

> Support for CTS 1.5


---

#### `MIPIMPHYTX-1317` — Fix: Changing Compliace to User Defined mode after recalling a session takes lot of time

- **Type:** Defect
- **Status:** In Progress
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 14-02-2018 03:30
- **Updated:** 10-06-2019 16:06
- **Labels:** UI

**Description (verbatim):**

> Changing Compliace to User Defined mode after recalling a session takes lot of time


---

#### `TEDIBCI-7115` — [Obeya-P14][Pascal Feedback][DisplayPort-Tx] Errors must be clearly communicated to the user

- **Type:** Defect
- **Status:** In Progress
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 28-03-2023 07:23
- **Updated:** 29-04-2024 22:07
- **Labels:** CAA2, Clarius_RP1, Clarius-Customer, Clarius-Generic, Clarius-RP1-MustFix, ClientApp-DP, Installer, Stabilization, TekFlow

**Description (verbatim):**

> Clarius Platform, Application installer UI messages need to be improved according to the Field and customer feedback.
> Work with the Documentation team to review and refine the messages which are getting displayed in Installers.
>
> *Acceptance criteria:*
> 1. Clarius Platform, Apps Installer UI messages are optimized as per the inputs from the documentation team
> 2. Created the Installers with these optimizations and validated them.


---

### Status: Submitted (40)

#### `GAR-8149` — [AE-Joe Feedback] Feedback on Test Bench Creation

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Major
- **Reporter:** skumar5
- **Created:** 23-04-2024 01:52
- **Updated:** 02-05-2024 04:15
- **Labels:** PLAE-Feedback

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> # What is the purpose of the "model field" when adding instruments? If everything needs to be “default” this should be removed from RP1 until additional functionality is added.
>  # The "Address" field should not let a user input a format which is incorrect. Example provided is for GPIB, but what about IP? USB?
>  ## Incorporate same "Address" format that is used for "Instrument Service Address"
>  ## Most users will simply enter an IP in the format of "xxx.xxx.xxx.xxx"
>  ## How does a user know what p… [truncated]


---

#### `GAR-8148` — [AE-Joe Feedback] Spinning Circle on switching Dashboard to Test tab

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Major
- **Reporter:** skumar5
- **Created:** 23-04-2024 01:49
- **Updated:** 02-05-2024 04:14
- **Labels:** PLAE-Feedback

**Description (verbatim):**

> # Spinning loading circles appear every time a user navigates to the dashboard. These need to load faster or be shown in a different way - a user will think there is a software issue.
>  ** The circles last too long. It should not take more than 1-2 seconds to load.
>  ** Information should not be reloaded unless something has changed or requires an update.
>  ** *+If the page is refreshed the “loading circles” update instantly. The “slowness” only occurs when switching between tabs in the GUI.+*


---

#### `GAR-5874` — SE Feedback : If a test does not have plot, the 'Plots Unavailable' container should not be shown-UX

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Major
- **Reporter:** shashirv
- **Created:** 20-07-2023 23:14
- **Updated:** 07-09-2023 23:16
- **Labels:** Client-App-USB4V2

**Description (verbatim):**

> Steps to reproduce:
> 1. Select USB4V2 application
> 2. Select Transmitter AC Commonmode Voltage measurement
> 3. Run Live or recorded mode with valid wfms
> Observe that in the Plots tab, 'Plots Unavailable'  text is shown with Plots place holder (attached image).
>
> System Engineer recommendation is to remove the plots place holder and not show anything if plots are not applicable for a measurement.
>
>  Showing 'Plots Unavailable'  text can confuse the user.
>
>  !image-2023-07-21-11-39-34-635.png|thumbnail!


---

#### `GAR-7636` — After deleting parent test through API, child test is still visible in GUI

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Major
- **Reporter:** u625293
- **Created:** 07-02-2024 04:38
- **Updated:** 26-03-2024 01:46

**Description (verbatim):**

> Steps to reproduce:
>  # Execute a test (test1) with appropriate application through API
>  # Modify test1 and save a draft as test2 through API
>  # Delete test1 through API
>
> test2 is still visible in UI and on clicking it, gives the parent test deleted error but does not get deleted itself on closing the error. Unable to manually delete through UI and API gives 404 not found error.
>
>  
>
> !image-2024-02-07-18-08-08-699.png!
>  !image-2024-02-07-18-06-06-220.png!


---

#### `GAR-7598` — Error message for App lock is not handled in GUI. API error message is getting displayed

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Major
- **Reporter:** pbaik
- **Created:** 03-02-2024 08:27
- **Updated:** 26-03-2024 03:44
- **Labels:** RAA

**Description (verbatim):**

> Steps:
> 1> Create two different test benches
> 2> Open clarius app in two browser
> 3> Create test on both the browser
> 4> Run a test with Same Application in both the browser
> observation:
> API errors are getting displayed with busy spinner.  unable to click on UI element when error pop is closed until page reload
>  !image-2024-02-03-21-57-25-967.png|thumbnail!


---

#### `GAR-8001` — In GUI, results is not updating accordingly when we select the different scenarios when first scenario as connect/initialize scenario

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Major
- **Reporter:** bhap
- **Created:** 27-03-2024 04:37
- **Updated:** 13-04-2024 00:20

**Description (verbatim):**

> VM:[https://tek-hg1v5d3.global.tektronix.net:4200/login]
>
> damin/Welcome@123
>
>  
>
> Test: [https://tek-hg1v5d3.global.tektronix.net:4200/clarius/test/results/25f86078-b5ac-42f1-95ac-c5c44ab3dd84]
>
> Steps:
>
> 1> TX DisplayPort => DisplayPort TX 21 UHBR10
> 2> Run the test
> 3> Click on Run test. Wait till execution completes
>
> 4> Click on view results
>
> 5> Click on Perform_Tests in left navigatation panel. Verify that results are updated in right panel.
> 6> Click on "Connect_setup". Verify that results are not… [truncated]


---

#### `GAR-4029` — New GUI: View scenario results not working, it gives page not responding error or some times it takes more time, which is not expected.

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Major
- **Reporter:** bhap
- **Created:** 15-12-2022 21:56
- **Updated:** 26-03-2024 03:44

**Description (verbatim):**

> 172.19.211.237:4200/home/test/results/99b62884-fdf8-4ecc-bc41-2301f6ef9e08    
> This is the test which is executed for 1000 acquisitions. For this view scenario results not working, it gives page not responding error or some times it takes more time, which is not expected. 
> Step:
> a>	Login to VM
> b>	Click on Veiw Results of “99b62884-fdf8-4ecc-bc41-2301f6ef9e08” test or open 172.19.211.237:4200/home/test/results/99b62884-fdf8-4ecc-bc41-2301f6ef9e08
> c>	Click on ExecuteOnDevice_State Scenario


---

#### `GAR-6530` — After refreshing of UI page, the order of application is changing.

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Major
- **Reporter:** arck
- **Created:** 18-10-2023 22:19
- **Updated:** 25-10-2023 03:04
- **Labels:** ClientApp-Memory-Tx, Stabilization

**Description (verbatim):**

> After refreshing of UI page, the order of application is changing. Attached snap.


---

#### `GAR-6416` — Waveform displayed in UI of results page  and Reports are not matching

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Major
- **Reporter:** pbaik
- **Created:** 27-09-2023 01:15
- **Updated:** 26-03-2024 03:43

**Description (verbatim):**

> The waveform displayed in UI is not matching with Reports page.
> Even if we set the maximum record size in Ui, unable to view the waveform of scale -6 to -2
>
>  !image-2023-09-27-13-43-43-017.png|thumbnail!


---

#### `GAR-7063` — Downloaded order of the Logs are not matching with Logs in tekflow UI

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Major
- **Reporter:** pbaik
- **Created:** 05-12-2023 19:20
- **Updated:** 19-03-2024 07:24

**Description (verbatim):**

> Run Test
> click View Results
> click View Logs
> download popup says the total  number of logs displayed in logs page as expected
> Observation: last logs are not matching with tekflow ui
>  !image-2023-12-06-08-47-50-537.png|thumbnail! 
>  !image-2023-12-06-08-48-03-772.png|thumbnail!


---

#### `GAR-7218` — Filter By Technology is not visible in UI of Manage Testbench page filter

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Major
- **Reporter:** pbaik
- **Created:** 17-12-2023 21:52
- **Updated:** 17-12-2023 23:22

**Description (verbatim):**

> !image-2023-12-18-11-22-17-205.png|thumbnail!


---

#### `GAR-6839` — [LPDDR4] Source is not applying correctly, if we change Existing source on UI.

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Major
- **Reporter:** u615732
- **Created:** 20-11-2023 02:52
- **Updated:** 26-03-2024 23:17
- **Labels:** ClientApp-Memory-Tx

**Description (verbatim):**

> steps to reproduce.
>  1. Launch LPDDR4 App.
>  2. select write burst single ended scenario.
>  3. makes DQS signal probe method as Single ended and click on CA0 signal and make it DQ1 signal, click on apply.
>  4. if we click on sources and lanes icon after it applied, then we can see that sources are not taken properly (image attached)
>
> 5. Also the selected source will keep getting hidden in the drop down and we will not be able to select like if DQ4 is selected first and you switch to DQ5 and would l… [truncated]


---

#### `GAR-7689` — [DRAM TX] Not selected steps are coming in results UI when acquisition by limit is enabled

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Major
- **Reporter:** sjhawar
- **Created:** 11-02-2024 22:00
- **Updated:** 26-03-2024 05:19
- **Labels:** ClientApp-Memory-Tx

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> Not selected steps are coming in results UI when acquisition by limit is enabled.
>
> Attached the test link and snapshot.
>
> [http://tek-12860j3:4200/tekflow/test/results/443467ae-edb4-405b-a366-24d64fe19c17]


---

#### `GAR-7937` — Unable to login to ui with valid credentials after fresh installation on the pc which is not in fortive network

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Major
- **Reporter:** pbaik
- **Created:** 20-03-2024 06:16
- **Updated:** 26-03-2024 03:44

**Description (verbatim):**

> # Install the clarius build on the PC which is not in network
>  # . once the installation is successful. login to ui with valid credentials
>  observe: gets 500 bad request error in console
>  All services were up.


---

#### `GAR-8198` — Error message displayed in UI is not intiutive when test is executed without starting IS and close button is chopped

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Major
- **Reporter:** pbaik
- **Created:** 29-04-2024 22:30

**Description (verbatim):**

> !image-2024-04-30-10-57-56-466.png!


---

#### `GAR-8216` — Once test execution is completed, if user goes and check the updated limits in the limit editor UI, its not updated.

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Major
- **Reporter:** u631680
- **Created:** 01-05-2024 21:16
- **Updated:** 02-05-2024 02:13
- **Labels:** ClientApp-Memory-Tx

**Description (verbatim):**

> 1. Login to the Clarius page.
> 2. Click on Add test
> 3. Enter the valid name and select the appropriate testbench
> 4. Click on Add sequence
> 5. Select Tx LPDDR4 technology and LPDDR4 application
> 6. Click the sources and signals and select the appropriate channels required for execution
> 7. Click in the global settings and select 3200 datarate
> 8. Click the Limits Editor tab in Global setting and edit the values of limits and click on apply button 
> 9. Select the required scenario
> 10. start the test.
>
> E… [truncated]


---

#### `GAR-5458` — [MIPI CPHY DPHY][UI]Color of eye diagram eye should be same as riddick eye diagram color gradient

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Major
- **Reporter:** bhap
- **Created:** 06-06-2023 22:06
- **Updated:** 30-11-2023 03:01
- **Labels:** ClientApp-CPHY, ClientApp-DPHY, Client-App-Dphy

**Description (verbatim):**

> Color of eye diagram eye should be same as riddick eye diagram color gradient


---

#### `GAR-6274` — [DDR5 DRAM Tx] Acquisition is happening with default channels, when user selects the appropriate channels for the required signals in UI.

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Major
- **Reporter:** arck
- **Created:** 11-09-2023 05:44
- **Updated:** 26-03-2024 04:51
- **Labels:** ClientApp-Memory-Tx

**Description (verbatim):**

> +Steps:+
> 1. Login to TekFlow page
> 2 Select DDR Technology and DDR5 DRAM Tx application
> 3. Select only Tx DQ Jitter and Tx DQ Stressed Eye scenarios
> 4. Select DQS+=CH1, DQS-=CH3,DQ=CH2 and click on apply in the source and signal settings
> 5. Click on DUT Automator toggle button in the Global settings and click on apply button
> 6. Click the Run button 
> +Observation:+ In IS observing DQS+=CH1, DQS-=CH2, DQ=CH3 which are default channels. Attached IS logs.
>
> +Test ID:+ http://pc-bang-74ygtq2:4200/tekfl… [truncated]


---

#### `GAR-7221` — contents of results page is not loading when we click on view results button of any running test and UI is broken on manual refresh

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Major
- **Reporter:** pbaik
- **Created:** 18-12-2023 01:34
- **Updated:** 19-03-2024 07:34

**Description (verbatim):**

> 1. Run test with  Results Accumulation APP  -> Set Population limit to 10000 and set iteration to 50
> 2. wait for sometime
> 3. click View results button
> observe: contents are not loaded.
>   !screenshot-1.png|thumbnail! 
> 4.perform manual refresh
> observe: ui is broken
>  !image-2023-12-18-15-04-29-770.png|thumbnail! 
>
>
> results will load after two or three minutes


---

#### `GAR-8016` — When we run the test for 21 iteration with Api scripts it is running test for all 21 iterations But in Clarius UI for iterations is limited to 20

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Major
- **Reporter:** u631680
- **Created:** 29-03-2024 07:18
- **Updated:** 09-04-2024 21:42
- **Labels:** ClientApp-Memory-Tx

**Description (verbatim):**

> # Login to Clarius page
>  # Click the Add new test and enter the valid fields in test page
>  # Select TX LPDDR technology and LPDDR4 application and click the Add sequence button
>  # Click on Global settings
>  # Set iteration to 21                    
>
> It will throw validation error
>
> when we execute it with below API script it is taking this value and running test for all 21 iterations and results are shown for 21 iterations.
>
> [^DDRTFL-109.json]
>
> Expected: Validation error and Test should not Execut… [truncated]


---

#### `GAR-7196` — [Memory-Tx-Rx]The software UI seems to have a lot of open, unused space, yet the fonts are all really small (like 10 and 8 pt)

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Major
- **Reporter:** pbaik
- **Created:** 14-12-2023 19:06
- **Updated:** 01-01-2024 20:58
- **Labels:** Memory-Tx-Rx, Micron

**Description (verbatim):**

> We should make the results bigger to make them easier to see.


---

#### `ECAUIT-460` — De-skew label in TekExpress is confusing the user

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Major
- **Reporter:** satk
- **Created:** 23-05-2019 21:07
- **Updated:** 24-06-2019 23:50
- **Labels:** UI

**Customer Impact (verbatim):**

> 2-Medium

**Description (verbatim):**

> If the customer has skew between 2 channels, then he is trying to de-skew the signal by compensating skew value in scope channel. He uses de-skew setting in scope vertical settings.
>
> But later when he tries to read the same in TekExpress, it is not being read.
>
> Instead if he sets, delay setting in Vertical settings then TekExpress is reading it.
>
> So the customer is confused about it.
>
>  (Customer email is attached)
>
> Solution:
>
> Either change the label "de-skew" in TekExpress to "delay" or make Tek… [truncated]


---

#### `OUI-735` — Connect, AutoVerticalScaleScope, DCCalib, ConfigureScope - ATE Commands are not working

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Major
- **Reporter:** PUNP
- **Created:** 27-05-2019 22:30
- **Updated:** 07-06-2019 11:16
- **Labels:** UI

**Description (verbatim):**

> Above mentioned ATE Commands are not working.


---

#### `RPAMT-1056` — Measurement re-order to put rarely used DC common mode measurement at the end

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Major
- **Reporter:** satk
- **Created:** 19-12-2018 00:32
- **Updated:** 12-07-2019 01:46
- **Labels:** UI

**Customer Impact (verbatim):**

> 2-Medium

**Description (verbatim):**

> Below is the problem statement given by Kaady, Jeff for DC common mode measurement.
>
> [Jeffy] - I think the DC common mode issue is kind of clunky. If ATI scope can’t do it, I think it should just be disabled in the package when running on ATI. The help says to use a digital multimeter? Do we provide specific and detailed instructions on measuring DC common mode? This seems like a weak spot for us. Especially since it’s the first test. Then all these boxes pop up about entering the value etc.. I’… [truncated]


---

#### `OUI-112` — Manual Tek Scope add BackgroundWorker error

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Major
- **Reporter:** sbrokaw
- **Created:** 01-10-2018 09:29
- **Updated:** 07-06-2019 10:31
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> Ran into error while attempting to add a scope. First lookup failed and when I changed the IP address and clicked "Find" for the second time the popup appeared.
>  !image-2018-10-01-09-28-59-358.png|thumbnail!


---

#### `TEKEXPFW-1177` — CLONE - Test Description is showing previous selected test description

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Major
- **Reporter:** jdomadiy
- **Created:** 05-01-2016 00:17
- **Updated:** 26-04-2020 23:51
- **Labels:** TekExpress4.0, UI

**Description (verbatim):**

> By Chris:
> Selected Tx Clk Frequency and deselected all other tests.  Test description did not track selected test but shows last highlight line. Note that this can create confusion for the user since the display shows Tx Clk. Frequency test selected but less obvious is the shading of the jitter test.


---

#### `TEDIBCI-8069` — [DisplayPort-Tx] Lightweight upgrade package for Application and measurements

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 06-09-2023 02:03
- **Updated:** 28-02-2024 08:35
- **Labels:** ClientApp-DP, ClientApp-DP-PI3-Issue, ClientApp-DP-Stabilization, Installer, PI-3, TekFlow

**Description (verbatim):**

> -


---

#### `DPOJET-1215` — Change to Jitter, Noise and Eye Diagram Analysis Tools - Advanced Plus for DJAN

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Major
- **Reporter:** skumar6
- **Created:** 23-02-2015 03:09
- **Updated:** 25-09-2020 00:00
- **Labels:** UI

**Description (verbatim):**

> Change DJAN to Jitter, Noise and Eye Diagram Analysis Tools - Advanced Plus
>
> Also in About DPOJET


---

#### `GAR-5620` — [Garuda DP] Unable to apply validation rule for sources at global level

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 23-06-2023 08:54
- **Updated:** 28-01-2024 22:44
- **Labels:** Clarius-RP1-MustFix, ClientApp-DP, ClientApp-DP-PI3-Issue, ClientApp-PCIe

**Description (verbatim):**

> !image-2023-06-23-21-23-07-162.png|thumbnail!
>
> Unable to apply validation rule for sources defined as global setting. This is not supported in TekFlow currently.
>
> This is observed both in UI and SDK.
>
> Example sources setting is attached: [^sources.json]


---

#### `GAR-5615` — [Garuda-DDR] Have this drop-down expanded by default such that a user can see the local settings and individual tests by default

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Major
- **Reporter:** sjhawar
- **Created:** 23-06-2023 07:57
- **Updated:** 23-01-2024 04:59
- **Labels:** ClientApp-DDR5DRAMTx, PLAE-Feedback, TF_General

**Description (verbatim):**

> Have this drop-down expanded by default such that a user can see the local settings and individual tests by default


---

#### `DPOJET-864` — Show data frequency in data rate field of results panel

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Major
- **Reporter:** 
- **Created:** 24-09-2014 09:01
- **Updated:** 25-09-2020 00:00
- **Labels:** UI

**Description (verbatim):**

> When the clock multiplier is used in CDR configuration, then the data rate value shown in results panel shows clock frequency which is incorrect, it should show data frequency.


---

#### `DPOJET-747` — Refactoring: IsPopuplimitReached is cluttered and needs cleanup

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Major
- **Reporter:** SMAHADEV
- **Created:** 27-08-2014 02:14
- **Updated:** 25-09-2020 00:00
- **Labels:** UI

**Description (verbatim):**

> IsPopuplimitReached is cluttered and needs cleanup. This will improve performance and also reduce defects
>
> Discuss with Sundar and Mujeeb!


---

#### `GAR-1408` — DUT id/waveform prefix/slot no./de-embed filter path/retry count/ takes in any character as the input.

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Major
- **Reporter:** mtatiche
- **Created:** 08-02-2022 23:14
- **Updated:** 26-03-2024 03:44
- **Labels:** ClientApp-DP

**Description (verbatim):**

> DUT id/waveform prefix/slot no./de-embed filter path/retry count/ takes in any character as the input.


---

#### `GAR-6967` — [Garuda DP/PCIe] [Clarius-Generic] Need to hide measurements from step level after those are deselected in global settings.

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 28-11-2023 21:07
- **Updated:** 12-03-2024 07:31
- **Labels:** Clarius-Generic, ClientApp-DP, ClientApp-PCIe

**Description (verbatim):**

> We are unselecting measurements in global settings but those are still shown as steps in the test panel. This is confusing to user.


---

#### `GAR-6924` — [Garuda DP/PCIe] Need "apply to all" option for settings across all selected applications

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 25-11-2023 04:27
- **Updated:** 13-03-2024 05:51
- **Labels:** Clarius-Generic, ClientApp-DP, ClientApp-PCIe

**Description (verbatim):**

> An "apply to all" option is required for the ease of setting up applications for the test.
>
> 1. "Apply to all" on Global Settings will change the settings configuration at all application selected.
> e.g.: Change the Acquisition Type From live to Pre-Recorded for an application and apply it for all applications selected.
>
> 2. "Apply to all" on step and scenario level settings will change the settings configuration at all for all scenarios and steps.
>
> e.g.: Change the record length settings for 1 mea… [truncated]


---

#### `TEDIBCI-7171` — [DisplayPort-Tx] Installation should be tried from the last failed step instead of restarting from beginning

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Major
- **Reporter:** mtatiche
- **Created:** 05-04-2023 04:05
- **Updated:** 13-03-2024 11:27
- **Labels:** CAA2, ClientApp-DP, ClientApp-PCIe, PI-3, TekFlow

**Description (verbatim):**

> If the installation is failed say at step 1, the InstallShield should start from the failed step rather than completely abort. Right now, it exits completely, and the user must restart the installation from the beginning.
>
> Implementation:
> Rollback if the installation fails at any stage.
> If it detects any traces of previous installation, the installer should display the end user to uninstall first and then install.


---

#### `TEDIBCI-8681` — Report template is not getting removed upon uninstallation of the app build

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Major
- **Reporter:** mtatiche
- **Created:** 18-12-2023 03:57
- **Updated:** 13-03-2024 23:35
- **Labels:** Clarius_RP1, Clarius-RP1-MustFix, Clarius-Uninstall, ClientApp-DP, ClientApp-PCIe, Installer, TekFlow

**Description (verbatim):**

> -


---

#### `DP-10523` — [Garuda DP][PLAE Feedback-Nitin] Test Re-Run Feature should be added

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Major
- **Reporter:** mkumar2
- **Created:** 19-09-2023 20:43
- **Updated:** 01-04-2024 00:24
- **Labels:** Clarius_DP_Platform_Clone, DP_Clarius_RP1_Verify, PLAE-Feedback

**Description (verbatim):**

> As per Summary


---

#### `GAR-8057` — [STM][Custom DP Feedback] Clarius aborts the test execution if a waveform file is missing.

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 10-04-2024 22:00
- **Updated:** 10-04-2024 22:05
- **Labels:** ClientApp-DP, STM

**Description (verbatim):**

> Clarius aborts the test execution if a waveform file is missing.
>
> Expectation: It should log an error, skip that acquisition and proceed with next one for smooth test run


---

#### `GAR-7789` — [Clarius Generic] Clarius is showing measurement 'name' instead of 'displayName' in results panel and report

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 27-02-2024 20:47
- **Updated:** 23-04-2024 12:02
- **Labels:** Clarius-Generic, ClientApp-DP, ClientApp-PCIe

**Description (verbatim):**

> Measurement display names are more user readable and measurement names are more internal. In UI, in the test setup panel, the measurement/step names are showing displayname which is correct but in the results panel and report they are showing name. This should be changed to displayname.
>
>  
>
> Measurement names should be consistent across the UI.


---

### Status: Resubmitted (3)

#### `GAR-7346` — Interdependent setting values in save sequence set using SDK are not showing in GUI

- **Type:** Defect
- **Status:** Resubmitted
- **Priority:** Major
- **Reporter:** bhap
- **Created:** 02-01-2024 07:14
- **Updated:** 19-03-2024 07:04

**Description (verbatim):**

> Interdependent setting values in save sequence set using SDK are not showing in GUI.
>
> Install [http://garuda-nexus.global.tektronix.net:8081/#browse/browse:tekflow_develop_dlls:framework%2Fsdk%2Fteksdk-1.0.0b27-py3-none-any.whl-test.zip]
>
> Steps:
> Use Case1:
> 1> Run the attached SDK script
> 2> Login to VM and check the saved sequence(Sequence1_SDK) for Recoded waveform path, its not showing in GUI, but its internally set correctly.
>
> UseCase2:
> 1> Download and copy( GAR-6094_PythonSDK_VersionDetails.p… [truncated]


---

#### `MIPIMPHYTX-1323` — PWM: Test 1.2.4, 1.2.5 and 1.2.8 should be hidden in Continuous mode

- **Type:** Defect
- **Status:** Resubmitted
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 15-03-2018 01:58
- **Updated:** 30-08-2019 02:13
- **Labels:** UI

**Description (verbatim):**

> PWM: Test 1.2.4, 1.2.5 and 1.2.8 should be hidden in Continuous mode


---

#### `GAR-5593` — Not able to see Plots at Scenario and App level.

- **Type:** Improvement
- **Status:** Resubmitted
- **Priority:** Major
- **Reporter:** u615732
- **Created:** 23-06-2023 02:10
- **Updated:** 11-12-2023 20:37
- **Labels:** ClientApp-Memory-Tx, PLAE-Feedback, TF_General

**Description (verbatim):**

> Not able to see Plots at Scenario and App level, but able to see at step level (both images are attached).
>
> test id: [http://pc-bang-12860j3:4200/tekflow/test/results/ab1a1ce0-5f26-41a4-9187-14c51ef074ab]
>
>  
>
> This has dependency on GAR-5651. Expectation:
>  * View cumulative eye diagram (with & without mask) at app and scenario level
>  * Provide meaningful message if plots are not available


---

### Status: Reopened (1)

#### `GAR-200` — Setup, Configure and Control Test bench instruments for automated tests

- **Type:** Epic
- **Status:** Reopened
- **Priority:** Major
- **Reporter:** kemg
- **Created:** 19-10-2021 07:05
- **Updated:** 26-03-2024 03:44
- **Labels:** ClientApp-CPHY, Client-App-Dphy, PLAE-Feedback, TF_Configuration, TF_Debug

**Description (verbatim):**

> Update June 26th :
>
> Requirement is to add Ref channel in sources in live mode like we have math channels.


---

### Status: Verified (15)

#### `GAR-4794` — If results are zero, we are getting "-" in UI

- **Type:** Defect
- **Status:** Verified
- **Priority:** Major
- **Reporter:** arck
- **Created:** 29-03-2023 23:13
- **Updated:** 26-03-2024 05:19
- **Resolved:** 02-04-2023 04:08
- **Resolution:** Fixed
- **Labels:** ClientApp-LPDDR4

**Description (verbatim):**

> If results are zero, we are getting "-" in UI.
>
> Test Id - [http://pc-bang-12860j3:4200/tekflow/test/results/d30ada33-5240-4d35-a4f5-c170517e1828]


---

#### `GAR-4846` — Interdependent settings: Updated value is not reflected in UI

- **Type:** Defect
- **Status:** Verified
- **Priority:** Major
- **Reporter:** kmishra
- **Created:** 04-04-2023 01:58
- **Updated:** 14-09-2023 12:14
- **Resolved:** 17-04-2023 08:41
- **Resolution:** Fixed
- **Labels:** ClientApp-DPHY

**Description (verbatim):**

> Discussion is done  with [~amishra2] and [~fana].
>
> Logging this Jira id for tracking.
>
> [added by Akshay]
> Consolidated settings with references are not being parsed in ui. 
> Example : "#/setting[?(@.scenarioName == 'Group 4 Clock Lane HS-TX Signaling: 1.4.18' && @.name == 'sample_rate')].value"


---

#### `GAR-7116` — [USB4V2-Tx] Use the Same word which match with UI configuration

- **Type:** Improvement
- **Status:** Verified
- **Priority:** Major
- **Reporter:** jdomadiy
- **Created:** 10-12-2023 20:41
- **Updated:** 14-02-2024 01:26
- **Resolved:** 12-12-2023 01:37
- **Resolution:** Fixed
- **Labels:** Client-App-USB4V2

**Description (verbatim):**

> Use the Same word which match with UI configuration


---

#### `GAR-4721` — UI alignment issue with DDR and DRAM in Signals and Sources dialog

- **Type:** Defect
- **Status:** Verified
- **Priority:** Major
- **Reporter:** sacb
- **Created:** 26-03-2023 21:42
- **Updated:** 18-03-2024 07:29
- **Resolved:** 26-03-2023 21:49
- **Resolution:** Fixed
- **Labels:** Client-Apps_DDR5

**Description (verbatim):**

> When the Signal probe is single-ended and they have two terminals then UI is not aligned


---

#### `GAR-4743` — Manage- On page refresh the filter and Add New Techbench/Sequence ui controls disappears

- **Type:** Defect
- **Status:** Verified
- **Priority:** Major
- **Reporter:** pbaik
- **Created:** 27-03-2023 08:15
- **Updated:** 19-03-2024 07:20
- **Resolved:** 01-04-2023 03:32
- **Resolution:** Fixed

**Description (verbatim):**

> 1. tekflow/manage/applications
> 2. observe -Application menu of left navigation panel is not highlighted
> 3. click TestBenches menu
> 4. Refresh the page 
> 5. observe Filter and + New TestBench button is not visible and Testbenches menu is not highlighted  !image-2023-03-27-20-44-20-540.png|thumbnail! 
>
> similar issues are observed with respect to Applications and Sequences page


---

#### `GAR-4923` — View results - Generate report popup ui elements are collapsed and unable to generate report

- **Type:** Defect
- **Status:** Verified
- **Priority:** Major
- **Reporter:** pbaik
- **Created:** 14-04-2023 02:00
- **Updated:** 19-03-2024 07:03
- **Resolved:** 14-04-2023 03:14
- **Resolution:** Fixed

**Description (verbatim):**

> 1. click on any pass test view results
> 2. Click Generate report - observe -  !image-2023-04-14-14-30-13-386.png|thumbnail!


---

#### `TEKEXPFW-6340` — Unit keypad accepts 50000m or 0.05k without V unit (it should have been 50000mV or 0.05kV)

- **Type:** Defect
- **Status:** Verified
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 22-08-2021 22:40
- **Updated:** 14-09-2023 11:58
- **Resolved:** 08-09-2021 03:49
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> 1. Assume parameter accepts 50V to 200V
> 2. Units keypad is enabled for the same (ex: Vertical Offset in Emulator)
> 3. Enter 50000m or 0.05k without unit V
>
> Expected: It should display as 50000mV or 0.05kV
>
> Actual: It displays 50000m or 0.05k without V unit
>
> Note: It is not a showstopper as backend reflects correct value of 50V though UI is not showing the unit. 
> Querying rom PI returns "50" which is correct.


---

#### `TEKEXPFW-6116` — Run sessions in UI and PI command to have Run ID associated

- **Type:** Improvement
- **Status:** Verified
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 22-07-2021 00:29
- **Updated:** 14-09-2023 11:58
- **Resolved:** 05-08-2021 23:31
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 3-Low

**Description (verbatim):**

> Acceptance criteria:
>  - Config/Run session OCW: Run sessions to be prefixed with Run ID like Run1: <TimeStamp>
>  - Corresponding PI command to load/delete Run sessions to be prefixed with Run ID
>  - Make sure Run ID are incremented by 1 for each run.
>
> Doneness:
>  - Test UI changes and kernel changes done in developer branch.
>  - PRTI and Merge the changes to integration branch.
>  - Test the changes in integration branch build (SWE).
>
> Completeness:
>  - Run index changes tested in developer branch
>  - Te… [truncated]


---

#### `TEKEXPFW-4814` — Improvement on TEKEXPFW-4752: List down acquire types for which waveforms not exist

- **Type:** Improvement
- **Status:** Verified
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 08-02-2021 22:13
- **Updated:** 14-09-2023 11:58
- **Resolved:** 02-03-2021 23:00
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 3-Low

**Description (verbatim):**

> Error popup should list down all the acquire types for which the waveforms are not exist in the location (in pre-recorded mode). It will help users to find out which acquire types do not have existing waveform to take corrective action. (same as if wfm not selected in pre-recorded mode)


---

#### `OUI-734` — Not able to access several OMA ATE commands as mentioned in the OLH

- **Type:** Defect
- **Status:** Verified
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 24-05-2019 14:47
- **Updated:** 14-09-2023 12:39
- **Resolved:** 12-06-2019 23:50
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> Acceptance criteria:
>  1. Able to access all OMA ATE commands as per OLH
>  2. No related defects in open state
>
> Doneness:
>  1. Find out missing commands
>  2. Implement them in OM4006ATECleint.cs wrapper class
>  3. Handle exceptions properly like other commands
>  4. Roll out new build
>  5. Testing and verification with new build
>  6. Automate the command if possible (optional, else take it up in next immediate sprint)


---

#### `TEKEXPFW-4765` — Need to adjust alignment DUT-ID box in prerecorded mode in case of UDA selection.

- **Type:** Defect
- **Status:** Verified
- **Priority:** Major
- **Reporter:** mkumar2
- **Created:** 17-01-2021 23:15
- **Updated:** 14-09-2023 11:58
- **Resolved:** 05-02-2021 01:25
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> Description:
> The DUT ID controls position not aligned properly when we switch between live and pre-recorded mode. Please refer the attached doc for more detailed explanation. 
>
> Acceptance Criteria:
> 1.Align DUT ID controls position when switched between live and pre-recorded mode.
>
> Doneness:
> 1.DUT ID controls aligned properly when switched between live and pre-recorded mode.


---

#### `TEKEXPFW-4746` — Improvements in Run session config OCW

- **Type:** Improvement
- **Status:** Verified
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 06-01-2021 20:47
- **Updated:** 14-09-2023 11:58
- **Resolved:** 21-01-2021 00:45
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> 1. Selecting any cell should select entire row
> 2. Multi selection of rows should not be allowed.
> 3. Currently selected row's session name should appear in Save session text box
>
> [Completeness]
> The current session name will be shown in Run Config OCW.


---

#### `TEKEXPFW-4804` — Able to enter invalid characters in units textbox/tekdisplay

- **Type:** Defect
- **Status:** Verified
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 07-02-2021 21:19
- **Updated:** 14-09-2023 11:58
- **Resolved:** 23-02-2021 02:59
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> Description:
> Able to enter invalid unit characters in TekDisplay. Screenshot attached.
> ex: when the unit is enabled, user is able to enter any character (alphanumeric) in the tekdiplay and app is accepting them without any validation check. 
> Refer the screenshot.
>
> Doneness:
> Allow only numeric values.


---

#### `GAR-4811` — [Garuda DP] The sequence of apps are changing when we do Import Sequence

- **Type:** Defect
- **Status:** Verified
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 30-03-2023 12:21
- **Updated:** 19-03-2024 07:20
- **Resolved:** 10-04-2023 21:44
- **Resolution:** Fixed
- **Labels:** ClientApp-DP, ClientApp-PCIe

**Description (verbatim):**

> 1. Go to Run Test ->Add Sequence
> 2. Add all DP apps in the following order: RBR, HBR, HBR2, HBR3, UHBR10, UHBR13.5, UHBR20
> 3. Save the sequence.
> 4. Go to Run Test -> Import Sequence. 
> 5. Called the saved sequence.
>
> See the order of the app has changed.
>
>  !image-2023-03-31-00-50-39-702.png|thumbnail! 
>  !image-2023-03-31-00-51-39-571.png|thumbnail!


---

#### `GAR-8042` — [DPHY][DP]: Report: For multi-iteration report with plots is not getting generated, if we unselect plots then report works fine.

- **Type:** Defect
- **Status:** Verified
- **Priority:** Major
- **Reporter:** kmishra
- **Created:** 05-04-2024 03:31
- **Updated:** 23-04-2024 21:37
- **Resolved:** 21-04-2024 21:29
- **Resolution:** Fixed
- **Labels:** ClientApp-DP, Client-App-Dphy

**Description (verbatim):**

> [DPHY]: Report: For multi-iteration report with plots is not getting generated, if we unselect plots then report works fine.
>
> Steps:
>  * Run 2 iterations by selecting all tests.
>  * Once Completed Try generating report
>  * Report error is seen and report generation fails
>  * If we unselect plots for same thing and generate, report generation is successful
>
> [Clarius (tektronix.net)|https://9znc1n2.global.tektronix.net:4200/clarius/test/results/c0b90671-8cb3-4d0b-be31-79cd300e373d]


---

### Status: Resolved (109)

#### `GAR-3398` — Understand about GUI automation framework and automation for new GUI

- **Type:** Task
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** bhap
- **Created:** 13-09-2022 11:23
- **Updated:** 14-09-2023 08:03
- **Resolved:** 27-09-2022 18:27
- **Resolution:** Done


---

#### `GAR-4784` — Exploratory test of GUI

- **Type:** Task
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** bhap
- **Created:** 29-03-2023 06:18
- **Updated:** 13-09-2023 19:40
- **Resolved:** 25-04-2023 22:58
- **Resolution:** Done


---

#### `GAR-4471` — Test GUI for beta15 release

- **Type:** Task
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** bhap
- **Created:** 28-02-2023 19:24
- **Updated:** 13-09-2023 19:40
- **Resolved:** 14-03-2023 21:42
- **Resolution:** Done


---

#### `GAR-6849` — Fix QG2 failures in GUI

- **Type:** Task
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** bhap
- **Created:** 21-11-2023 23:03
- **Updated:** 06-12-2023 01:27
- **Resolved:** 06-12-2023 01:27
- **Resolution:** Done


---

#### `GAR-4958` — [TF-LP4] Limits GUI issue

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** arck
- **Created:** 25-04-2023 03:37
- **Updated:** 14-09-2023 12:14
- **Resolved:** 26-04-2023 23:18
- **Resolution:** Fixed
- **Labels:** Client-App-LPDDR4

**Description (verbatim):**

> Limits GUI issue. (Attached images)
>
> Test id: [Tekflow|http://pc-bang-12860j3:4200/tekflow/test/results/be8e8b16-743c-402a-a22e-ebd54ca04af3]


---

#### `GAR-3744` — Migrate all GUI automated scripts to Playwright framework

- **Type:** Task
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** bhap
- **Created:** 08-11-2022 17:37
- **Updated:** 14-09-2023 08:20
- **Resolved:** 23-11-2022 01:20
- **Resolution:** Done

**Description (verbatim):**

> List of stories test cases to port to playwright:
> 1> Login Page
> 2> Refersh login page
> 3> Menu controls
> 4> Left navigation controls for manage menu
> 5> Test Lists
> 6> Add Sequence
> 7> Import sequence
> 8> Settings
> 9> Licensed Apps
> 10> Manage Test benches
> 11> List available Test benches


---

#### `GAR-4262` — Validate New GUI controls of PCIE with TekExpress PCIE

- **Type:** Task
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** bhap
- **Created:** 01-02-2023 00:13
- **Updated:** 13-09-2023 19:40
- **Resolved:** 13-02-2023 04:42
- **Resolution:** Done


---

#### `GAR-4258` — Test New GUI for all features functionality of Beta14 release

- **Type:** Task
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** bhap
- **Created:** 31-01-2023 22:33
- **Updated:** 13-09-2023 19:40
- **Resolved:** 13-02-2023 16:11
- **Resolution:** Done

**Description (verbatim):**

> > Connection diagram testing
> > Result panel testing
> > Lanes and sources
> > Configuration settings
> > Dashboard
> > Limits editor


---

#### `GAR-4942` — TekFlow version shows as empty in GUI on test branch VM

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** bhap
- **Created:** 24-04-2023 04:20
- **Updated:** 26-03-2024 04:48
- **Resolved:** 24-04-2023 23:36
- **Resolution:** Fixed

**Description (verbatim):**

> TekFlow version shows as empty in GUI on test branch VM
> http://tek-dskjqf2:4200/tekflow/about
> admin/Welcome123#


---

#### `GAR-4291` — Check GUI of all client apps for the defects raised. And update any issues

- **Type:** Task
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** bhap
- **Created:** 01-02-2023 21:06
- **Updated:** 13-09-2023 19:40
- **Resolved:** 03-02-2023 05:59
- **Resolution:** Done


---

#### `GAR-4555` — Report name Title in GUI is showing as Report Id. Which should be report name

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** u612584
- **Created:** 09-03-2023 22:53
- **Updated:** 19-03-2024 07:03
- **Resolved:** 10-03-2023 13:35
- **Resolution:** Fixed

**Description (verbatim):**

> Report name Title in GUI is showing as Report Id. Which should be report name


---

#### `GAR-3864` — Automate missing GUI test cases for sprint28 stories(GAR-3510, GAR-3713, GAR-3514, GAR-3515, GAR-3497, GAR-3498)

- **Type:** Task
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** bhap
- **Created:** 22-11-2022 08:33
- **Updated:** 14-09-2023 08:20
- **Resolved:** 06-12-2022 01:04
- **Resolution:** Done

**Description (verbatim):**

> GAR-3510, GAR-3713, GAR-3514, GAR-3515, GAR-3497, GAR-3498


---

#### `GAR-7700` — [Sighting]After changing VM ip address, we are unable to login to clarius GUI, this is due to unstability in gateway service

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** bhap
- **Created:** 13-02-2024 01:34
- **Updated:** 19-03-2024 00:22
- **Resolved:** 19-03-2024 00:22
- **Resolution:** Done


---

#### `GAR-4259` — Validate GUI Controls which takes user values(edit boxes or drop down edit boxes) for all positive and negative boundary values(Constraints)

- **Type:** Task
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** bhap
- **Created:** 31-01-2023 22:37
- **Updated:** 13-09-2023 19:40
- **Resolved:** 27-02-2023 19:54
- **Resolution:** Done


---

#### `GAR-3493` — Test new GUI with build(Login page, left navi, menu controls, refersh page) and update test script controls and add them to JIRA

- **Type:** Task
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** bhap
- **Created:** 28-09-2022 00:49
- **Updated:** 14-09-2023 08:02
- **Resolved:** 03-10-2022 12:05
- **Resolution:** Done

**Description (verbatim):**

> 1> Test new GUI with build(Login page, left navi, menu controls, refersh page)
> 2> Update test script controls
> 3> Add them to JIRA.
> 4> Push the changes to BitBucket.
>
> Test all below mentioned stories:
> GAR-3396, GAR-3395, GAR-3390, GAR-3391, GAR-3393, GAR-3389


---

#### `GAR-4181` — [UI] Configure signals of a source

- **Type:** Task
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** magl
- **Created:** 18-01-2023 19:50
- **Updated:** 13-09-2023 19:40
- **Resolved:** 12-02-2023 20:30
- **Resolution:** Done


---

#### `GAR-4287` — [UI] Handle settings consolidation

- **Type:** Story
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** saravind
- **Created:** 01-02-2023 20:46
- **Updated:** 13-09-2023 19:40
- **Resolved:** 12-02-2023 20:41
- **Resolution:** Done

**Description (verbatim):**

> All the settings will be defined under global settings in app definition. UI should handle in which section the setting will be displayed in the UI
>
> Two new fields will be added to settings - > *scenarioName* and *stepName*
>  # If both scenarioName and stepName are null, display it under global settings
>  # If scenarioName is not null and stepName is null, display it under corresponding scenario settings
>  # If both scenarioName and stepName are not null, display it under corresponding scenario/ste… [truncated]


---

#### `GAR-3603` — [UI] Multi Analysis Step

- **Type:** Story
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** saravind
- **Created:** 11-10-2022 21:32
- **Updated:** 14-09-2023 08:20
- **Resolved:** 13-10-2022 03:51
- **Resolution:** Done

**Description (verbatim):**

> Multi Analysis Step has multiple results for an analysis step based on "ExecuteOn"
> Currently UI displays only one entry of results. 
>
> For *ITERATION* based results, refer to "*iterationNumber*" field
>
> For *DEVICE_STATE* based results, refer to "*iterationNumber*" and "*deviceState*" fields
>
> **For *ACQUISITION* based results, refer to "*iterationNumber*", "*deviceState*" AND "*acquisition*" fields
>
> Attached is the results json


---

#### `GAR-4941` — for few measurements, limits are not visible in UI.

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** u615732
- **Created:** 24-04-2023 00:34
- **Updated:** 14-09-2023 12:14
- **Resolved:** 24-04-2023 06:40
- **Resolution:** Fixed
- **Labels:** Client-App-LPDDR4

**Description (verbatim):**

> for few measurements, limits are not visible in UI, but able to see in result Json.
> test ID: 
>
> [http://pc-bang-12860j3:4200/tekflow/test/results/5756f380-a6f1-4482-affa-f45de4133360]


---

#### `GAR-4182` — [UI] Make API calls to validate sources

- **Type:** Task
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** magl
- **Created:** 18-01-2023 19:51
- **Updated:** 13-09-2023 19:40
- **Resolved:** 01-02-2023 07:53
- **Resolution:** Done


---

#### `GAR-6748` — Fix SonarQube bugs of UI projects - Part1

- **Type:** Story
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** bhap
- **Created:** 05-11-2023 22:48
- **Updated:** 27-02-2024 13:30
- **Resolved:** 27-02-2024 13:30
- **Resolution:** Done

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

#### `GAR-2575` — [USB] CTLE table should be shown in the UI

- **Type:** Improvement
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** sacb
- **Created:** 06-06-2022 04:12
- **Updated:** 14-09-2023 12:15
- **Resolved:** 08-06-2022 23:13
- **Resolution:** Fixed
- **Labels:** Client_App-USB4, USB

**Description (verbatim):**

> In TekExpress, the  CTLE table is shown in the report, but in the TekFlow the CTLE table is showing the result panel under the misc tab. We need the report to be in consistent with TekExpress report


---

#### `GAR-7170` — [UI][SecurityIssue]:Improper Restriction of excessive authentication Attempts

- **Type:** Story
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** saravind
- **Created:** 12-12-2023 22:56
- **Updated:** 14-02-2024 01:26
- **Resolved:** 30-01-2024 05:32
- **Resolution:** Done
- **Labels:** Security

**Acceptance Criteria (verbatim):**

> * Account should be locked after 3 continuous unsuccessful login attempts.
>  * Admin should be able to unlock the account. 
>  * Auto unlock after 1 hour should be enabled
>  * Show no of tries before account gets locked.
>  * Show time left to auto unlock of an account
> Button to Unlock the account

**Description (verbatim):**

> * Upon locked, user should be communicated. and if he tries to login again he should be told account is locked and to contact system admin.


---

#### `GAR-5959` — Redesigning of the test-creation page in accordance with the Phase 2 UI

- **Type:** Story
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** u616478
- **Created:** 03-08-2023 04:51
- **Updated:** 13-09-2023 19:39
- **Resolved:** 30-08-2023 01:56
- **Resolution:** Done

**Description (verbatim):**

> !image-2023-08-24-10-35-03-041.png!


---

#### `GAR-4666` — [UI] As a user I want to view rx calibration and test results

- **Type:** Story
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** magl
- **Created:** 19-03-2023 20:12
- **Updated:** 14-09-2023 10:35
- **Resolved:** 11-05-2023 04:20
- **Resolution:** Duplicate
- **Labels:** ClientApp-Rx

**Description (verbatim):**

> As a user I want to view rx calibration and test results in tabular form in the UI


---

#### `GAR-5756` — Collate all info/debug/error message from UI and each services

- **Type:** Task
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** u616478
- **Created:** 05-07-2023 05:23
- **Updated:** 13-09-2023 19:39
- **Resolved:** 18-07-2023 04:39
- **Resolution:** Done

**Description (verbatim):**

> List of all the error message (in Progress)
>
> [ErrorMessages.xlsx|https://fortive-my.sharepoint.com/:x:/g/personal/souraj_mukhopadhyay_tektronix_com/Ef9xCAhAKuNLszdGIYd15D0BTOrQRCtvH6Ih5jLCwh7Ahw?e=hjbCsl]


---

#### `GAR-4180` — [UI] Add new source (ex: Lane/Die/etc.) for an application in a test

- **Type:** Task
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** magl
- **Created:** 18-01-2023 19:49
- **Updated:** 13-09-2023 19:40
- **Resolved:** 01-02-2023 07:53
- **Resolution:** Done


---

#### `GAR-4520` — [PCIe][Beta-14] Possible values are not shown as dropdown instead the setting is coming as just a string in UI.

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 08-03-2023 03:53
- **Updated:** 13-09-2023 19:40
- **Resolved:** 16-03-2023 06:03
- **Resolution:** Done
- **Labels:** ClientApp-DP, ClientApp-PCIe

**Description (verbatim):**

> 1. Possible values are not shown as dropdown instead the setting is coming as just a string in UI.
>  !image-2023-03-08-17-22-01-413.png|thumbnail! 
> 2. Delete all is a user trap, you can neither enter anything nor select from dropdown
>  !image-2023-03-08-17-22-09-752.png|thumbnail!


---

#### `GAR-3759` — [View Results] As a user I should be able to fetch results as per new ui requirements

- **Type:** Task
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** u613736
- **Created:** 09-11-2022 21:59
- **Updated:** 14-09-2023 08:20
- **Resolved:** 22-11-2022 22:32
- **Resolution:** Done


---

#### `GAR-6430` — Unable to perform any actions on UI after we get application licence lock error

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** bhap
- **Created:** 29-09-2023 05:22
- **Updated:** 19-03-2024 00:47
- **Resolved:** 19-03-2024 00:47
- **Resolution:** Cannot Reproduce

**Description (verbatim):**

> Unable to perform any actions on UI after we get application licence lock error.
> Step:
> 1> Start a test with SampleApp1(Set acquisitionCOunt=50, just to keep ur test in run state for longer time)
> 2> Start a test with SampleApp1
> Observation: we get license lock error popup, which is expected.
> After this popup, GUI is non-responsive.


---

#### `GAR-7903` — all the test which has acquired license to run are not pulled as part get status API and not shown in UI/SDK

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** samr1
- **Created:** 12-03-2024 22:26
- **Updated:** 02-04-2024 02:55
- **Resolved:** 02-04-2024 02:55
- **Resolution:** Fixed

**Customer Impact (verbatim):**

> 2-Medium

**Description (verbatim):**

> all the test which has acquired license to run are not pulled as part get status API and not shown in UI/SDK


---

#### `GAR-8106` — Error message when executing the  test  with the name containing  special characters  is not handled in UI. page is not responding on clicking run button with testname containing special characters

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** pbaik
- **Created:** 17-04-2024 21:52
- **Updated:** 23-04-2024 00:03
- **Resolved:** 23-04-2024 00:03
- **Resolution:** Cannot Reproduce

**Description (verbatim):**

> 1. Login ti the Clarius app
> 2. Click Add Test
> 3. select the Technology and Application
> 4. Select the Test Bench
> 5. Enter Name " Test1<specialcharacter>
> 6. click Run button
> Expected:
> Error popup should be visible
> The error message "Character not allowed{<testname>) should be visible in the error popup
>
> Actual:
> page is not responding. and error message is not displayed
>
> !image-2024-04-18-10-22-31-284.png!


---

#### `GAR-1836` — DisplayPort SSC Modulation Frequency/SSC modulation deviation needs to run on the highest data rate supported by DUT

- **Type:** Story
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** vsiddhar
- **Created:** 29-03-2022 03:38
- **Updated:** 14-09-2023 11:13
- **Resolved:** 04-11-2022 02:43
- **Resolution:** Other
- **Labels:** ClientApp-DP

**Description (verbatim):**

> DisplayPort SSC Modulation Frequency/SSC modulation deviation needs to run on the highest data rate supported by DUT. In TekExpress when this measurement is selected we run it only on the highest data rate selected e.g.
>
> If RBR  is selected we will run on RBR
>
> If RBR,HBR,HBR2 we will run on HBR2 only
>
> Each data rate is done on a different application.


---

#### `GAR-5579` — [Garuda DP][PLAE Feedback-Pascal] [Qualcomm] CSV Export is not useful

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 21-06-2023 06:59
- **Updated:** 13-09-2023 19:39
- **Resolved:** 21-08-2023 22:58
- **Resolution:** Done
- **Labels:** ClientApp-DP, PLAE-Feedback, TF_Reporting

**Description (verbatim):**

> SW Versions:
> TekFlow-Platform-v0.15.5.beta
> DisplayPort-v0.15.3.beta_9
>
>
> Qualcomm Commnet:
> Could not log data in xls as previous build..Looks like results are being written in Json format..
>
> We need results to be in dataframe format so that we can log results in our excel for analysis..I think there have been some changes made from previous build..Is it possible to provide inbuild function in SDK to generate data in this format? Or change this in next build similar to previous build?
>
> Current Bui… [truncated]


---

#### `TEDIBCI-7716` — [Beta-17 Feedback] The build job overwrites the previous build - Platform and Apps

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 07-07-2023 03:01
- **Updated:** 21-09-2023 04:38
- **Resolved:** 15-08-2023 21:50
- **Resolution:** Done
- **Labels:** ClientApp-DP, PI-2

**Description (verbatim):**

> The build job overwrites the previous build
> - In Beta-15 we were able to name the application builds. We used Beta1,2,3… for the build versioning. It was very useful.
> - From Beta-16 onwards, with the latest changes, every time we trigger a build, the existing package in nexus gets replaced with the new one.


---

#### `TEDIBCI-7715` — [DisplayPort-Tx][Beta-17] Multiple logs folder - Consolidate all log files into one folder and rename them relevantly

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 07-07-2023 02:59
- **Updated:** 09-12-2023 20:32
- **Resolved:** 15-08-2023 21:23
- **Resolution:** Done
- **Labels:** ClientApp-DP, PI-2

**Description (verbatim):**

> Installation logs are being stored in 2 different places. C:\ProgramData\Tektronix\TekFlow\logs and C:\ProgramData\Tektronix\Installer_Logs. We should have them in a single location.
>
> As an end user, I want to see a single log file for installing TekFlow Platform and Applications respectively.
>
> *Readiness Criteria(Pre-requisites):*
>  # Gathered all pre-requisite info
>
> *Acceptance Criteria(What):*
>  # Implemented and tested the intended functionality
>
> *Acceptable Limitations(Not):*
>  # Scope of the… [truncated]


---

#### `TEDIBCI-7714` — [DisplayPort-Tx][Beta-17] AS IS batch file location

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 07-07-2023 02:58
- **Updated:** 09-12-2023 20:32
- **Resolved:** 13-07-2023 06:12
- **Resolution:** Done
- **Labels:** ClientApp-DP, PI-2

**Description (verbatim):**

> TekFlow Version: TekFlow-Platform-0.17.0.beta.exe
> DisplayPort Version: DisplayPort-v0.17.0.beta.exe
>
>
> It is difficult to find AS and IS start/stop batch files. Earlier those were in bin folder. But now those are moved to analysis/service and instrument/service folders.
>  !screenshot-1.png|thumbnail!


---

#### `TEDIBCI-7713` — [DisplayPort-Tx][Beta-17] IS installation failure error

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 07-07-2023 02:55
- **Updated:** 09-12-2023 20:32
- **Resolved:** 11-08-2023 05:04
- **Resolution:** Done
- **Labels:** ClientApp-DP, PI-2

**Description (verbatim):**

> TekFlow Version: TekFlow-Platform-0.17.0.beta.exe
> DisplayPort Version: DisplayPort-v0.17.0.beta.exe
>
>
> Instrument Service installation error. Both Common and DisplayPort IS log has Failure log. See attached logs.
>  !image-2023-07-07-15-24-58-231.png|thumbnail!


---

#### `GAR-4006` — Cosmetic changes and fixes to filter datepicker

- **Type:** Task
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** u616478
- **Created:** 13-12-2022 02:52
- **Updated:** 14-09-2023 08:20
- **Resolved:** 15-12-2022 23:25
- **Resolution:** Done
- **Labels:** UI


---

#### `OUI-823` — Reproduce, analyze and come with a proposal for memory leak issue

- **Type:** Story
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 14-06-2019 02:32
- **Updated:** 13-09-2023 19:09
- **Resolved:** 01-08-2019 01:53
- **Resolution:** Done
- **Labels:** UI
- **Business Value:** 70

**Description (verbatim):**

> Reproduce, analyze and come with a proposal for memory leak issue


---

#### `OUI-818` — SSU version mismatch

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** JPALADIY
- **Created:** 11-06-2019 02:31
- **Updated:** 14-09-2023 12:39
- **Resolved:** 25-06-2019 23:06
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> # Install the OUI version 2.2.3.7644 on the scope, and check that application version match between the control panel and UI.
>
>  
>
> Actual result: In UI it is appearing 2.2.3.7644 while in control panel it is appearing 2.2.0
>
> Expected result: Version detail should be the same.


---

#### `RPAMT-1103` — Unit test fails with latest TekExpress FW

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 16-12-2019 02:35
- **Updated:** 14-09-2023 12:04
- **Resolved:** 20-01-2020 01:04
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> All unit test cases are failing with latest TekExpress FW due to missing DLL (Tektronix.Applications.TestIdGenerator.DLL) missing.


---

#### `RQSFPT-411` — Proposal on how to apply filter for Direct Attach measurements

- **Type:** Developer Story
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 06-02-2020 00:04
- **Updated:** 14-09-2023 07:57
- **Resolved:** 16-02-2020 22:35
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> # Analyze the code where change needs to be done
>  # Explore the application to find out what the existing filter selection UI controls are for
>  # Discuss with Kiran and get his feedback
>  # Proposal on what changes are required and time estimation


---

#### `MIPIMPHYTX-1719` — UI changes for M-PHY Tx

- **Type:** Task
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 24-11-2019 22:07
- **Updated:** 14-09-2023 07:53
- **Resolved:** 01-12-2019 22:54
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> 1. Hide SYS 19.2 checkbox (undo UI change) - Done
>
> 2. Increase range to 50000UI for all HS Tests in Gear 4 Trigger upper limit - Done
>
> 3. Clock Recovery should be configurable in Compliance mode too - Done
>
> 4. YMTC - Hide Checkbox 'Run Continuous as per spec' with unchecked to get only 3 combinations in Continuous mode. Long/Short Filter should be applied always, No Filter is not a valid option. - Done
>
> 5. Burst Compliance mode - apply filter - Done
>
> 6. Trigger type should be set as 'Outside' -… [truncated]


---

#### `MIPIMPHYTX-1524` — As a user, I need application to run only supported amplitude and channel combination in compliance mode for HS Gear 3/4 as per spec

- **Type:** Story
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 01-07-2019 09:49
- **Updated:** 14-09-2023 07:53
- **Resolved:** 06-08-2019 23:56
- **Resolution:** Done
- **Labels:** UI
- **Business Value:** 80

**Description (verbatim):**

> YMTC customer requirement: Support Short/long channel combination as per spec in compliance mode for HS Gear 3 and Gear 4
>
> Acceptance criteria:
>  # I should be able to select small/large amplitude selection in compliance mode.
>  # Only following 3 combinations should be run in compliance mode as per spec:
>  ##    0dB, Large amplitude, short channel
>  ## 3.5dB, Small  amplitude, Long channel
>  ##    6dB, Large amplitude, Long channel.
>  # Other combinations should be skipped in compliance mode.
>  # No c… [truncated]


---

#### `TEDIBCI-7170` — [DisplayPort-Tx] Platform installer bundles the non-RAA apps like PCIE (which takes time for downloading their packages)

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** mtatiche
- **Created:** 05-04-2023 04:01
- **Updated:** 10-12-2023 00:47
- **Resolved:** 11-08-2023 04:58
- **Resolution:** Done
- **Labels:** CAA1, ClientApp-DP, ClientApp-PCIe, PI-2, TekFlow

**Description (verbatim):**

> Implementation:
> Bundle Instrument service with Application installer.


---

#### `TEDIBCI-7169` — [DisplayPort-Tx] Double clicking the platform installer shows the message that existing TF setup will be removed but it is not doing a clean uninstallation operation.

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** mtatiche
- **Created:** 05-04-2023 04:00
- **Updated:** 10-12-2023 00:48
- **Resolved:** 11-04-2023 05:37
- **Resolution:** Done
- **Labels:** CAA1, ClientApp-DP, ClientApp-PCIe, PI-2, TekFlow

**Description (verbatim):**

> # Double clicking the platform installer shows the message that existing TF setup will be removed but it is not doing a clean uninstallation operation.
>  # VM is not removed, its removed only by uninstalling it from Tekflow.


---

#### `TEDIBCI-7168` — [DisplayPort-Tx] Terms and conditions to uninstall the Tekflow package is shown as blank page.

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** mtatiche
- **Created:** 05-04-2023 03:58
- **Updated:** 10-12-2023 00:48
- **Resolved:** 18-04-2023 04:31
- **Resolution:** Done
- **Labels:** CAA1, ClientApp-DP, ClientApp-PCIe, PI-2, TekFlow

**Description (verbatim):**

> Refer to the attached screenshot


---

#### `TEDIBCI-7167` — [DisplayPort-Tx] When installation fails, there is a message shown saying 'please see logs for more details' but logs file path is not shown to the user

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** mtatiche
- **Created:** 05-04-2023 03:57
- **Updated:** 10-12-2023 00:48
- **Resolved:** 23-05-2023 04:45
- **Resolution:** Done
- **Labels:** CAA1, ClientApp-DP, ClientApp-PCIe, PI-2, TekFlow

**Description (verbatim):**

> Refer to the attached screenshot for more details.


---

#### `TEDIBCI-7166` — [DisplayPort-Tx] Checking the "Configure proxy URL" and leaving the textbox blank allows the user to go to next screen.

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** mtatiche
- **Created:** 05-04-2023 03:56
- **Updated:** 10-12-2023 00:48
- **Resolved:** 18-04-2023 04:30
- **Resolution:** Done
- **Labels:** CAA1, ClientApp-DP, ClientApp-PCIe, PI-2, TekFlow

**Description (verbatim):**

> There is no validation on the empty Proxy url textbox.


---

#### `TEDIBCI-7165` — [DisplayPort-Tx] Installer has to use the same naming convention everywhere for TekFlow

- **Type:** Requirement
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** mtatiche
- **Created:** 05-04-2023 03:54
- **Updated:** 10-12-2023 00:55
- **Resolved:** 18-04-2023 04:29
- **Resolution:** Done
- **Labels:** CAA1, ClientApp-DP, ClientApp-PCIe, PI-2, TekFlow

**Description (verbatim):**

> # Tekflow (f small case letter) in the below screen.


---

#### `GAR-2401` — DP 1.4 manual mode (without automator) analysis is not happening parallelly with acquisition

- **Type:** Story
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 19-05-2022 07:14
- **Updated:** 14-09-2023 08:04
- **Resolved:** 09-11-2022 13:30
- **Resolution:** Done
- **Labels:** ClientApp-DP

**Description (verbatim):**

> DP manual mode (without automator) analysis is not happening parallelly with acquisition. The analysis starts only after all the acquisitions are complete.


---

#### `OUI-904` — [ART 63304] Scope Service Utility could not work on scope with Windows 10 and TekVISA v4.2.0

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** pmaurya
- **Created:** 25-09-2019 02:20
- **Updated:** 14-09-2023 12:39
- **Resolved:** 29-09-2019 21:38
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 2-Medium

**Action Request (verbatim):**

> 63304

**Description (verbatim):**

> Scope Service Utility could not work on scope with Windows 10 and TekVISA v4.2.0. It can work after TekVISA changed to version v4.0.4


---

#### `MIPIMPHYTX-1667` — Gear 4A/4B Upper Limit of Trigger Limit should support upto 50000 UI in User Defined mode

- **Type:** Improvement
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 03-09-2019 02:12
- **Updated:** 14-09-2023 12:40
- **Resolved:** 12-09-2019 22:51
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> Mail from Kevin Lee:
>
> During burst mode test, We got some error.
> An error is related to triggering.  SW could not trigger a proper signal.  So I checked the trigger condition. Trigger mode is width and width region is from 855ps to 257.02ns. I checked the Burst signal. It has 552ns width. Trigger condition of 855ps to 257.02ns is not matched to 552ns width period. I don’t know and  don’t find the spec of 855ps to 257ns in the spec sheet.  At  any rate, I clicked “Force Trigger” to proceed test.… [truncated]


---

#### `TEDIBCI-7156` — [DisplayPort-Tx]New Application installer AS and IS are not working with early Beta-15 roll out core engine

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 30-03-2023 10:57
- **Updated:** 10-12-2023 00:56
- **Resolved:** 06-04-2023 09:59
- **Resolution:** Done
- **Labels:** ClientApp-DP, PI-2, TekFlow

**Description (verbatim):**

> First Beta-15 rollout was done on March 23rd on 134.63.244.33 machine. We created PCIe AS and IS installers that time and they are running fine.
>
> We created DP AS and IS installers today(30th March). and installed them on the same core engine that was already installed in 33 machine.
>
> We observe the DP AS was not launching, however PCIe AS is launching.
> Upon investigation we found appsettings.json keys has changed in the new build and they are no longer compatible with the existing core engine.… [truncated]


---

#### `TEDIBCI-7084` — [DisplayPort-Tx][Beta-14] After restart the route gets changed from Eth0 to Eth1. This needs to be changed back manually.

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 20-03-2023 13:33
- **Updated:** 10-12-2023 01:01
- **Resolved:** 06-04-2023 09:59
- **Resolution:** Done
- **Labels:** ClientApp-DP, ClientApp-PCIe, PI-1

**Description (verbatim):**

> After the system restart the route gets changed from Eth0 to Eth1 occasionally and this needs to be changed back manually.


---

#### `GAR-4672` — [DP/PCIe] [Beta-14] Import sequence feature not working

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 20-03-2023 13:15
- **Updated:** 13-09-2023 19:40
- **Resolved:** 27-03-2023 03:33
- **Resolution:** Done
- **Labels:** ClientApp-DP, ClientApp-PCIe

**Description (verbatim):**

> 1. Go to add test
> 2. Click on "Import Sequence"
> 3. Select a sequencer and click Import
>
> Outcome: Only the tag gets added with the selected sequence name. but no sequence added to the test.
>
>  !image-2023-03-21-01-43-40-627.png|thumbnail! 
>  !image-2023-03-21-01-44-51-474.png|thumbnail!


---

#### `GAR-4659` — [DP/PCIe] Multiple Analysis service cannot be run in the same test machine at the same time

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 17-03-2023 05:14
- **Updated:** 14-09-2023 11:13
- **Resolved:** 20-03-2023 06:48
- **Resolution:** Other
- **Labels:** ClientApp-DP, ClientApp-PCIe

**Description (verbatim):**

> When we install different application packages in the same machine (e.g.: DP and PCIe) there are two Analysis Service folders get created. 
> At this point we are unable to run both the analysis service at the same time.
> This blocks the user to run test on two applications simultaneously in the same test machine although the test benches are different.
> This use case must be supported.
>
> Step1. Launch PCIe AS in admin mode. It launches properly.
> Step2: Try to launch DP AS in admin mode while PCIe AS… [truncated]


---

#### `OUI-269` — Restrict SSU from running in extension boxes unless in TimeSync mode

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 04-12-2018 07:48
- **Updated:** 14-09-2023 12:39
- **Resolved:** 11-12-2018 20:21
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> SSU is not supported in extension boxes in ATI or TekConnect mode.
>
> When user installs and launches SSU in extension boxes, inform user saying "SSU is not supported in extension boxes unless in TimeSync mode. Launch SSU in master scope" and gently exit.
>
> Setups:
>
> 2 Stack ATI in ATI/TekConnect mode
>
> 4 Stack ATI in ATI mode
>
> Note:
>
> SSU is supported in TimeSync mode.


---

#### `OUI-302` — Deleting OMA should remove it from multi channel config

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 18-12-2018 14:46
- **Updated:** 14-09-2023 12:39
- **Resolved:** 16-01-2019 03:42
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 2-Medium

**Description (verbatim):**

> # Make OMA connection and assign name for OMA in HW Setup window
>  # Create a channel containing pointing this OMA and analysis parameter
>  # Now delete the OMA from HW Setup window
>  # Run/Single OMA
>  # Error is thrown.
>
> Reason: Multi config channel still points to non existent OMA.
>
> Expectation: Deleting OMA should automatically remove the corresponding channel from multi config table.


---

#### `OUI-289` — AutoScale and DC Calibration crashes SSU in TimeSynced extension scopes

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 12-12-2018 16:26
- **Updated:** 14-09-2023 12:39
- **Resolved:** 13-12-2018 11:12
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> AutoScale and DC Calibration crashes SSU in TimeSynced extension scopes.
>
> Also AutoScale is not fully performed in master scopes or single scopes.
>
> SSU Log file shows following error message:
>
> "autoscale exception - Collection was modified; enumeration operation may not execute."


---

#### `OUI-200` — Deleted scopes reappear in HW Setup panel

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 13-11-2018 01:55
- **Updated:** 14-09-2023 12:39
- **Resolved:** 23-11-2018 02:07
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> Steps to reproduce:
>  # In Hardware Setup panel, added 2 scopes manually using IP address (Add Tektronix Scope). They are populated in left equipment palette.
>  # Connected one scope to OM in OMA connection panel (right side).
>  # Deleted the second scope from equipment palette.
>  # Clicked Ok button
>  # Relaunch HW Setup panel using HW Setup button in OUI
>
> Expectation:
>
> The second scope which I deleted previously should not appear in equipment palette.
>
> Observation:
>
> The second scope is visible in e… [truncated]


---

#### `OUI-52` — Generic Receiver Hardware Setup crash

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** sbrokaw
- **Created:** 16-08-2018 08:05
- **Updated:** 14-09-2023 13:32
- **Resolved:** 26-11-2018 23:31
- **Resolution:** Cannot Reproduce
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> Closing the hardware setup utility with two OMAs configured with two generic receivers (one for each OMA) causes an exception to be thrown.
>
> Setup:
> Two standalone Tabascos running SSU.
> the .xml config files that are attached
> close the hardware setup utility
> !exception


---

#### `DP-2489` — DP CTS 1.5 support

- **Type:** New Feature
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 16-08-2018 23:11
- **Updated:** 13-09-2023 20:05
- **Resolved:** 21-08-2018 01:00
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> CTS 1.5 support


---

#### `EPAMT-387` — Support 80C21 module, module with 2 channels and new filters

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 26-07-2018 03:57
- **Updated:** 14-09-2023 12:41
- **Resolved:** 27-07-2018 00:42
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> Support new 80C21 module which is not detected now.
> Support both the channels of modules like 80C18 and 80C21
> Support new filters
> Support to perform calibration from CH2 and CH4


---

#### `OUI-264` — Adding existing scope again updates first index of manual scope list instead of corresponding index from the list

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 30-11-2018 22:27
- **Updated:** 14-09-2023 12:39
- **Resolved:** 08-12-2018 21:30
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> OUI maintains list of manually added scopes in manuallyAddedScopes list.
>
> Adding same scope again replaces first index of the list instead of updating the corresponding scope index from the list. Hence the list differs from the actual scopes listed in hardware pallet. 
>
> So closing and opening HW setup makes the first scope to disappear.


---

#### `OUI-275` — Restrict only one instance of OUI to launch

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 07-12-2018 14:25
- **Updated:** 14-09-2023 12:39
- **Resolved:** 07-12-2018 14:59
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> Running several instances of OUI should not crash. Instead the second instance should close automatically and focus should shift to window of the first instance.


---

#### `OUI-169` — Non applied OUI Identity shouldn't be remembered.

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** hoye
- **Created:** 02-11-2018 09:46
- **Updated:** 14-09-2023 12:39
- **Resolved:** 29-01-2019 02:46
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> The procedure to reproduce this problem:
>
> 1. Launch SSU
> 2. In SSU window,  type in any OUI Identity.
> 3. Doesn't click "Apply" button.
> 4. Close SSU
> 5. Launch SSU again.
>
> Expected result:
> The OUI Identity just input is not displayed.
>
> Actual result:
> The OUI Identity just input is displayed.


---

#### `OUI-276` — TriggerGroupMaster should be deselected in TimeSynced extension scopes.

- **Type:** Improvement
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 08-12-2018 22:52
- **Updated:** 14-09-2023 12:39
- **Resolved:** 11-12-2018 20:27
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> TriggerGroupMaster should be deselected in TimeSynced extension scopes.
>
> It will be checked only in single scope SSU (single stack, 2 stack/4 stack ATI in ATI or TekConnect modes) or SSU running in master Timesynced modes.


---

#### `EVSRT-12` — Error message appears when i select  user defined from configure panel

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** pmaurya
- **Created:** 22-02-2018 01:03
- **Updated:** 14-09-2023 12:15
- **Resolved:** 22-02-2018 01:56
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 2-Medium

**Description (verbatim):**

> Launch the application. 
>
> Select adavance from setup tab. 
>
> select  configuration tab. 
>
> Select user defined. As soon as you select user defind the error message appears. 
>
>  
>
> attach is the message along with CR


---

#### `EVSRT-11` — Error appears when you select create report automatically

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** pmaurya
- **Created:** 20-02-2018 22:16
- **Updated:** 14-09-2023 12:15
- **Resolved:** 21-02-2018 00:59
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> Launch the application build 138
>
> Go to report panel and select create report automatically ....
>
>  
>
> error messages pops up as soon as you select the check box. 
>
>  
>
> Error: True is not valid for parameter "create report at the end"


---

#### `EVSRT-13` — CTLE Filter File for Module-To-Host Suite throws error message

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 28-02-2018 00:46
- **Updated:** 14-09-2023 12:15
- **Resolved:** 28-02-2018 01:23
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> CTLE Filter File for Module-To-Host Suite throws "Not a valid value for this parameter" error message


---

#### `MIPIMPHYTX-1315` — Add System Clock controls in DUT panel for HS suite

- **Type:** Requirement
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 08-02-2018 04:47
- **Updated:** 14-09-2023 07:53
- **Resolved:** 08-02-2018 23:05
- **Resolution:** Done
- **Components:** User Interface
- **Labels:** UI

**Description (verbatim):**

> Add System Clock (19.2 and 26MHz) radio button controls in DUT panel for HS suite


---

#### `RQSFPT-98` — Select Required button in Test Selection panel throws exception

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 16-08-2017 02:04
- **Updated:** 14-09-2023 12:03
- **Resolved:** 27-09-2017 00:48
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Select Required button in Test Selection panel throws exception


---

#### `RNBAST-474` — Add Combiner Effect UI textbox for 2.5G Linearity tests

- **Type:** New Feature
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 10-09-2017 22:51
- **Updated:** 13-09-2023 18:48
- **Resolved:** 18-09-2017 01:33
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Add Combiner Effect UI textbox for 2.5G Linearity tests


---

#### `RNBAST-467` — Support for 10,100 and 1000BASE-T Devices in Ethernet-Tx DUT panel

- **Type:** Requirement
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 20-07-2017 00:01
- **Updated:** 13-09-2023 18:48
- **Resolved:** 17-08-2017 01:17
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Add 3 radio buttons in DUT panel to support 10,100 and 1000BASE-T devices


---

#### `RNBAST-462` — Add Execute and Compensation acquire parameters for 2.5G Linearity tests

- **Type:** Requirement
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 25-05-2017 04:45
- **Updated:** 13-09-2023 18:48
- **Resolved:** 28-05-2017 22:28
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Add Execute and Compensation acquire parameters for 2.5G Linearity tests.
> The values should be in sync with all Tone-X tests


---

#### `RPAMT-291` — Usability Evaluation

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** ASINGH4
- **Created:** 23-05-2017 00:24
- **Updated:** 13-09-2023 18:46
- **Resolved:** 31-05-2017 22:24
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Issue: Evaluation of the Geronimo application. 
>
> Attaching the evaluation report to this JIRA.


---

#### `RXGKRT-95` — Remove pattern type selection for Differential Output voltage(Tx Disabled) measurement

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** satk
- **Created:** 29-11-2017 02:20
- **Updated:** 14-09-2023 07:35
- **Resolved:** 05-12-2017 20:26
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Remove pattern type selection for Differential Output voltage(Tx Disabled) measurement as this measurement is tested by keeping the DUT off(No pattern is sent)


---

#### `RPAMT-223` — DeEmbed filter file support in Global panel for TP1a and TP4 suites of CEI-VSR suite

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 20-04-2017 03:44
- **Updated:** 13-09-2023 18:46
- **Resolved:** 27-04-2017 01:53
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Add DeEmbed filter file related UI controls in Global panel of TP1a and TP4 suites of CEI-VSR suite


---

#### `RQSFPT-90` — Object reference not set exception while launching the application

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 31-01-2017 00:21
- **Updated:** 14-09-2023 12:03
- **Resolved:** 31-01-2017 02:09
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> While launching the application, a popup with object reference not set exception thrown.


---

#### `RQSFPT-70` — Host TWDPc measurement is not enabling in Tabasco after making option key permanent.

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** MARADHYA
- **Created:** 16-06-2016 21:26
- **Updated:** 14-09-2023 12:03
- **Resolved:** 22-06-2016 05:46
- **Resolution:** Fixed
- **Labels:** UI


---

#### `BRR-79` — All the measurement analysis happens in IT acq mode. Its recommended to have RT mode.

- **Type:** Improvement
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** NKUMAR1
- **Created:** 07-10-2015 02:31
- **Updated:** 14-09-2023 12:50
- **Resolved:** 03-03-2016 02:02
- **Resolution:** Fixed
- **Labels:** Automation, UI

**Description (verbatim):**

> All the measurement analysis happens in IT acq mode. Its recommended to have RT mode. Think of giving configuration to set IT/RT mode and default to be RT mode.
> Onbservation : With RT mode for Tx Distortion there is a improvement of 3-4mv as compared to IT. 
>
> UI needs to be added under GLOBAL settings for selecting RT or IT.


---

#### `ECAUIT-97` — Cross talk check box and De-Embed Data or Data+/Data- filter file selection support

- **Type:** Improvement
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** vbalan
- **Created:** 20-10-2016 03:48
- **Updated:** 14-09-2023 12:42
- **Resolved:** 24-10-2016 01:24
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> De-Embed filter file - select file instead of Folder location for Data or Data+/Data-.
> Also add Cross talk check box in DUT panel


---

#### `MMR-623` — HS Test 1.1.15&1.1.16 not displaying in Test Selection tree

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** SKUMAR4
- **Created:** 27-04-2015 01:37
- **Updated:** 14-09-2023 12:40
- **Resolved:** 27-04-2015 22:30
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Launch TekExpress
> select DUT operation mode as Continuous
> Go to Test Selection panel
>
> Observation;
> Tests 1.1.15&1.1.16 not available for selection.
>
> Expected:
> Both tests should appear in test tree.
> please verify the issue with MPHY Tx 1.0


---

#### `TEDIBCI-8066` — [DisplayPort-Tx, PCI-e] Including Automator module in TekFlow Software package

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 06-09-2023 01:22
- **Updated:** 27-02-2024 21:49
- **Resolved:** 27-02-2024 21:49
- **Resolution:** Fixed
- **Labels:** Clarius-RP1-MustFix, ClientApp-DP, Installer, TekFlow

**Description (verbatim):**

> -


---

#### `TEDIBCI-8068` — [Jacky Feedback][DisplayPort-Tx]  No launcher to Launch TekFlow UI

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 21-06-2023 06:52
- **Updated:** 29-02-2024 23:05
- **Resolved:** 06-02-2024 06:59
- **Resolution:** Done
- **Labels:** ClientApp-DP, ClientApp-DP-PI3-Issue, PI-3, PLAE-Feedback, TF_Installation

**Description (verbatim):**

> SW Versions:
> TekFlow-Platform-v0.15.5.beta
> DisplayPort-v0.15.3.beta_9
>
> Need a shortcut/launcher to launch url for tekflow in desktop auto created


---

#### `DCG-147` — App reports noise measurements as failed (red in color) for some of the filter configurations though they have reasonable value.

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** pmaurya
- **Created:** 28-03-2019 01:56
- **Updated:** 14-09-2023 12:39
- **Resolved:** 16-04-2019 21:26
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> (Refer Attach Email for details) - Thursday 3/21/2019
>
>
> Computed limit is a function of bandwidth(Thanks to Pavel for sharing the math for limit computation). 
> If scope noise is computed for a bandwidth, then value is used directly. If scope noise is computed for a filter, then filter is mapped to bandwidth and used.
>
> If computed scope noise is greater than limit then we mark that as fail.
>
> In the case which you have shared, failure is not happened because of computed value being above limits. B… [truncated]


---

#### `TEDIBCI-7420` — [Framework] Unable to uninstall Application(DP) after uninstalling TekFlow

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** bhap
- **Created:** 23-05-2023 14:32
- **Updated:** 14-02-2024 23:54
- **Resolved:** 06-06-2023 21:04
- **Resolution:** Cannot Reproduce
- **Labels:** CAA1, ClientApp-DP, PI-2, TekFlow

**Description (verbatim):**

> 1> Uninstall TekFlow
> 2> Try to Uninstall applications
> Observation: It will not allow u to uninstall app. It saya Tekflow is already uninstalled error.


---

#### `TEDIBCI-7172` — [DisplayPort-Tx] Tekflow installer shows the 'system not meeting required configuration' when Hype-V is not enabled

- **Type:** Improvement
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** mtatiche
- **Created:** 05-04-2023 05:10
- **Updated:** 09-12-2023 22:14
- **Resolved:** 21-09-2023 08:29
- **Resolution:** Fixed
- **Labels:** CAA1, ClientApp-DP, PI-2, TekFlow

**Description (verbatim):**

> When hyperV is not enabled on a new test pc, the installer shows the message about the system configurations. The message is misleading to the user. 
>
> Can we please modify the message to check whether the hyperV is enabled or not and prompt accordingly? 
>
> Display the reason for issue, brief help of what needs to be done.


---

#### `TEDIBCI-7178` — [DisplayPort-Tx] Platform installation is always failing at custom location

- **Type:** Improvement
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** mtatiche
- **Created:** 06-04-2023 02:05
- **Updated:** 09-12-2023 22:14
- **Resolved:** 18-04-2023 10:21
- **Resolution:** Fixed
- **Labels:** CAA1, ClientApp-DP, PI-2, TekFlow

**Customer Impact (verbatim):**

> 2-Medium

**Description (verbatim):**

> When I tried to install the TF platform build v0.0.0.15 at custom location say C:\users\sqeind\Desktop. Installation is always failing. Attached is the log.


---

#### `TEDIBCI-7712` — [DisplayPort-Tx] [Beta-16] Uninstallation residues

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 07-07-2023 02:53
- **Updated:** 06-02-2024 06:49
- **Resolved:** 06-02-2024 06:48
- **Resolution:** Done
- **Labels:** ClientApp-DP, PI-3

**Description (verbatim):**

> TekFlow Version: TekFlow-Platform-0.17.0.beta.exe
> DisplayPort Version: DisplayPort-v0.17.0.beta.exe
>
> 1.	Beta-16 uninstallation does not clean up properly. I find the below residues
> a.	Registries:
>  !image-2023-07-07-15-22-57-661.png|thumbnail! 
>
> b.	Folders:
>
>  !image-2023-07-07-15-23-12-206.png|thumbnail!


---

#### `GAR-4812` — [Garuda DP] all app versions are coming as 1.0

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 30-03-2023 12:31
- **Updated:** 22-02-2024 21:15
- **Resolved:** 22-02-2024 21:15
- **Resolution:** Won't Do
- **Labels:** ClientApp-DP

**Description (verbatim):**

> !image-2023-03-31-01-00-19-839.png|thumbnail! 
>
> Why is the version 1.0?


---

#### `DP-9319` — [Garuda DP][Pascal Feedback] Report Generation is not working through API.

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 28-03-2023 07:37
- **Updated:** 27-02-2024 19:47
- **Resolved:** 10-04-2023 00:01
- **Resolution:** Done
- **Labels:** PLAE-Feedback

**Description (verbatim):**

> Pascal's Comments:
>
> 1. In my Teflow PCI API script I was using report template selection and calling for report generation but it failed to operate  for TEKFLOW DisplayPort . I may have overlooked the reason why this doesn’t work anymore, any advise on API in order to call for report creation? Any newer version of TEKSDK?
> 2.	Please remind me the API command to configure a new test for automated report generation at test completion
>
>
> Build: Beta12


---

#### `DP-9153` — [Garuda DP] Grouping and arranging the Global settings

- **Type:** Story
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 14-03-2023 08:26
- **Updated:** 27-02-2024 19:46
- **Resolved:** 28-03-2023 22:06
- **Resolution:** Done
- **Labels:** ClientApp-DP

**Acceptance Criteria (verbatim):**

> All the app settings should be grouped and organized properly considering the Usability.

**Description (verbatim):**

> As a Tekflow DP application user I would like to see the settings arranged and grouped properly in settings panel.
>
> Doneness: Demo to SE and PO


---

#### `DP-9146` — [Garuda DP] Filtering measurements based on global settings

- **Type:** Story
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 14-03-2023 08:22
- **Updated:** 27-02-2024 19:46
- **Resolved:** 25-04-2023 22:07
- **Resolution:** Done
- **Labels:** ClientApp-DP

**Acceptance Criteria (verbatim):**

> a. SSC settings on/off should change SSC measurements
> b. ACCM measurements should be selected when single ended probes are connected.
> c. Pattern Dependent measurements should be selected only when the supported pattern is selected.

**Description (verbatim):**

> When we change some global settings, dependent measurements should be selected/de-selected based on those changes.
>
> a. SSC settings dependent  - SSC measurements
> b. Probe dependent measurements -ACCM
> c. Pattern Dependent measurements.


---

#### `GAR-5568` — Cahcing waveform by name not working for multisource measurement

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** etharite
- **Created:** 21-06-2023 06:09
- **Updated:** 14-09-2023 12:14
- **Resolved:** 26-07-2023 03:44
- **Resolution:** Fixed
- **Labels:** ClientApp-DP

**Description (verbatim):**

> Observing issue with “CacheWaveformsByName” method from AnalysisUtils method in Displayport.
>
> In Displayport we use this method for caching the waveforms of a measurement which has multiple inputs but during the analysis it throws an error saying couldn’t find the file (wfm).
>
> When different folder location is given instead of the workingDir to the method there is no error observed and analysis completed successfully.
>
> Is the workingDir from the cache folder getting deleted before the measuremen… [truncated]


---

#### `DPOJET-807` — Arbitrary pattern object should be alive for multiple acq without leak

- **Type:** Task
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** SMAHADEV
- **Created:** 17-09-2014 22:11
- **Updated:** 13-09-2023 20:00
- **Resolved:** 13-10-2014 00:41
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Arbitrary pattern object should be alive for multiple acq without leak
>
> Implementation
> UT


---

#### `DPOJET-679` — [Kauai_R1]: Feedback: "Noise Bathtub" and "Bathtub" plots to be shown in "Absolute" and "Relative" mode

- **Type:** Task
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** amohamme
- **Created:** 11-08-2014 03:59
- **Updated:** 14-09-2023 08:12
- **Resolved:** 03-11-2014 23:47
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Today, "Noise bathtub" Y-axis is shown in terms of UA (i.e. Unit Amplitude) and "Bathtub" X-axis is shown in terms of UI (i.e Unit Interval). With this, the user has difficulty in computing Height@BER and Width@BER absolute values. The user needs to do some calculations to convert relative into absolute values.
>
> Proposal:
> ***********
>     Add a configuration in both "Noise Bathtub" and "Bathtub" plots to show the respective axis in "Relative" as well as "Absolute" mode. By default to be consisten… [truncated]


---

#### `DPOJET-1031` — PCIe measurements are not working, throwing 0 results with Kauai-R2

- **Type:** Task
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** SMAHADEV
- **Created:** 15-12-2014 02:14
- **Updated:** 13-09-2023 20:00
- **Resolved:** 21-01-2015 21:51
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> PCIe DPOJET measurements are not working wit Kauai-R2


---

#### `DPOJET-742` — Implement new Option key design and remove hardcoded 136 for DJAN

- **Type:** Task
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** sundaram
- **Created:** 25-08-2014 23:40
- **Updated:** 14-09-2023 08:12
- **Resolved:** 10-10-2014 00:09
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> 1. Remove the temp license scheme that was implemented as part of 
> Kauai R1 release 
> 2. Refactor Option key code as it is in a mess.
> 3. Implement proper option key based license for DJAN support


---

#### `GAR-3650` — License Service - Error loading C++ binaries after migrating to .Net6

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** kemg
- **Created:** 19-10-2022 22:16
- **Updated:** 19-03-2024 07:27
- **Resolved:** 20-10-2022 21:25
- **Resolution:** Done
- **Labels:** UI


---

#### `TEDIBCI-7595` — [DispalyPort-Tx] Uninstalling the DP app from control panel shows the apps in  the TekFlow UI and able to start the test also

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** mtatiche
- **Created:** 26-05-2023 05:50
- **Updated:** 13-03-2024 10:49
- **Resolved:** 05-03-2024 20:31
- **Resolution:** Cannot Reproduce
- **Labels:** CAA1, Clarius_RP1, Clarius-Uninstall, ClientApp-DP, Installer, PI-3, TekFlow

**Description (verbatim):**

> -


---

#### `TEDIBCI-7555` — [STM France/MSI Taiwan AE's setup] [Beta-15] The Install wizard says installation successful although there are errors in the installation log.

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 15-06-2023 02:53
- **Updated:** 09-12-2023 21:00
- **Resolved:** 26-07-2023 05:03
- **Resolution:** Done
- **Labels:** CAA1, ClientApp-DP, PI-2, PLAE-Feedback, TekFlow

**Description (verbatim):**

> The first 2 attempt of installation in Pascal’s setup had errors in the install log. It could not post the rulesets. But the install wizard showed that the installation is successful. 
> We could launch the UI but could not login.
> The install wizard message was misleading. It should show the correct installation status.


---

#### `DP-9691` — [Garuda DP][PLAE Feedback-Gary] Record Length, Sample Rate should not be editable

- **Type:** Improvement
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 21-06-2023 05:55
- **Updated:** 12-03-2024 00:18
- **Resolved:** 04-03-2024 20:56
- **Resolution:** Fixed
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
> Record length and Sample Rate should not be adjustable by default in the “Acquisitions” tab


---

#### `TEDIBCI-7447` — [DisplayPort-Tx] In case of upgrade the IS package does not get removed from the Installer folder.

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 27-05-2023 05:45
- **Updated:** 13-03-2024 10:52
- **Resolved:** 03-03-2024 22:30
- **Resolution:** Fixed
- **Labels:** CAA1, Clarius_RP1, ClientApp-DP, Installer, PI-2, TekFlow

**Description (verbatim):**

> -


---

#### `TEDIBCI-8075` — [Qualcomm][DisplayPort-Tx] Need provision to set the dynamic memory in the TekFlow installation wizard

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 06-09-2023 22:28
- **Updated:** 15-04-2024 21:55
- **Resolved:** 13-12-2023 01:41
- **Resolution:** Done
- **Labels:** ClientApp-DP, ClientApp-DP-PI3-Issue, ClientApp-DP-Stabilization, PI-3, Qualcomm-TF-DP-Issue

**Description (verbatim):**

> The performance testing recommends optimum VM settings for a 16 core machine as follows:
>
> Dynamic RAM enabled with 4Gb-12GB. 
> Vpu:4, 
> Active pool size:8
>
> currently the dynamic memory needs to be set manually at the Hyper-V. This is not recommended for user. There should be an option to set these during installation.


---

#### `TEDIBCI-7594` — [Pascal Feedback][DisplayPort-Tx] TekFlow Launch and Test Run should be made simplified.

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** tparua
- **Created:** 21-06-2023 07:08
- **Updated:** 16-04-2024 08:35
- **Resolved:** 13-03-2024 11:11
- **Resolution:** Fixed
- **Labels:** CAA1, Clarius_RP1, Clarius-Customer, ClientApp-DP, Installer, PI-3, PLAE-Feedback, TekFlow, TF_Configuration

**Description (verbatim):**

> -


---

#### `DP-10549` — [Garuda DP][PLAE Feedback-Gary] TestBench- Add Instrument is not intutive

- **Type:** Improvement
- **Status:** Resolved
- **Priority:** Major
- **Reporter:** mkumar2
- **Created:** 19-09-2023 21:15
- **Updated:** 24-04-2024 00:49
- **Resolved:** 24-04-2024 00:49
- **Resolution:** Fixed
- **Labels:** Clarius_DP_Platform_Clone, PLAE-Feedback

**Description (verbatim):**

> As per Summary


---

### Status: Closed (302)

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
> 2> Under 'Instruments', There is no text. Should have 'No instrument added! Click on '+' to add new.
> 3> '+' color should be in white.
> 4> Good to have default value for hub address which the way how its displayed in OLD GUI.
> 5> Add instrument… [truncated]


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
>  2. Enter test name > select testbench> Select Application (plots)
>  3. Click on run and once test execution is completed
>  4. Click on reports > generate reports > add all the details 
>  5. select template > click on generate… [truncated]


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
> 2> Actual deployed version is different than what we displayed on GUI About page for new-GUI-service. When i get core engine versions what are deployed on VM using MoboXterm app is different for new_UI_Service than what we showin in About page
> Find attached screen shot. !image-2023-03-30-00-32-34-070.png|thumbnail!


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
> Observation: Its shows only few records even though no filters selected for default pagination and many logs are present. Find attached screen shot.


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
> template_id = "Jinja_Report_1.3"
> report_path = "C:\\temp"
> api.reports.generate_report(test_id,template_id,report_path)
>
>
> GUI:
> When try to generate report. It fails(Used report template has scope settings and versi… [truncated]


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
>  # Click on Edit
>  # Click on +Add Source 
>
> Observation:  Update button from Edit source and Add button in the +Add source will be merged in the UI.


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
> 1> Log in to Tekflow
> 2> Run any sample application test
> 3> Generate the report for the test
> Expected Results:
> 1> Should be able to run test without any issue
> 2> Should be able to create report and report should contain… [truncated]


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

> All global configuration settings whose control type as drop down list is changed to edit box controls in New test pageg up in GUI even though we have recorded acquistion type option available in App JSON. Example: Recorded acquisition type option is not coming up in GUI even though we have recorded acquistion type option available in App JSON.
>
> Step:
> 1> http://172.19.211.237:8100/login to VM
> 2> Clcik on Applications
> 3> Select any application, Click on Edit Settings, Click on Global setting.
> Obs… [truncated]


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
>  * So, we have one Step, where it calls "Analysis.Core" (Common Analysis Pacakge) MatlabSigTestMease calss. This calss retun the "MeasurementOutput".
>  * MeasurementOutput --> is been used in selected Steps (measurements) for Limit comparison 
>  * Basically, it is displaying result for… [truncated]


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
> User should be able to use the this feature both through UI and Python TekSDK


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

> https://swt-bv-alm-1.global.tektronix.net:8443/jira/issues/?jql=project%20%3D%20GAR%20AND%20issuetype%20%3D%20%22Test%20Case%22%20AND%20%22Test%20Level%22%20in%20(API%2C%20API-Functional)%20AND%20%22Test%20Level%22%20%3D%20API%20and%20%22Test%20Case%20Type%22%20%3DManual%20%20and%20Automatability%20%3DAutomatable
>
>
>
> Automate attached list of test cases


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
> Application level and scenario level results order should match step level order.
>
> [http://pc-bang-52w75m3:4200/tekflow/test/results/4985e4bc-e567-4027-ae98-8ebda2b61945]


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
> along with error popup busy spinner appears and even if dialog is closed unable to click on any Ui controls until manually refresh the page


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
> Clarius ID: d4498ad-24d9-4c1b-b524-19c8bb9c83d1
>
>  In Postman that App execution API is showing proper sources but in UI it is not setting.
>
> Excpected : instrument should be mentioned in the UI
>
> Observation : instrument ta… [truncated]


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
> MultiAnalysisApp3 app which is deployed on 172.19.211.237 VM). 
> Configurations are:
> Testbench=TestBench
> AcquistionCount=10
> 2> And go and check the result value for each iterations result value with limit constrain which is mentioned. If values above specif… [truncated]


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
> * Login to ATOMS UI.
> * Select License Manager from navigation Panel.
> * Select the license from the list.
>
> Output
> *Dialog box which will contain License Details.
>
> 3) Should be able to activate the license.
>
> Input
> * Login… [truncated]


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
>  - Prepare DUTID control improvements proposal document.
>  - Discuss with the team and get the feedback
>  - Incorporate team reviews.
>  - Implement the changes in developer branch.
>  
> Completeness:
>  - Prepared DUTID control changes PPT document
>  - Had discussio… [truncated]


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
>  - Unit test cases should pass without any build issues
>  - PRTI
>  - Integrate into QG0 branch


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
>  - Able to successfully launch it
>  - Explore the features
> - Help other team members to setup in their PC as well


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
>  - All the existing report functionality/features to be supported:
>            - Append report
>            - Detailed info
>           - Custom logo
>          - Scope and plot images embedded
>  - No alignment issues
>  - Test… [truncated]


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
>  # Acquire status can be updated using lane name and status string by sequencer
>  # Backward compatibility is maintained
>  # PRTI
>  # SWE Testing


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
> Note: Refer attached screenshot where PI trace shows we need to use "DPOJET:STATE?" to wait for test to complete before querying DPOJET:RESULTS:GETALL? to query the results.
> Seems timing issue.


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
> AppEmulator C# Sequencer has following issues when running multi-lane tests which has more than one acquire type [by default all tests in Emulator have only one acquire type. Manually modified test XML to have more than one acquire types]
>
> 1. App is running only the first acquire type, skipping other acquire types
> 2. Acquisition status updated only for the first acquire type, not for the remaining acquire types
> 3. Analy… [truncated]


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
> 2) ("SELECT:"+mathSource+" ON"); to turn on the math source.
>  [Update from Vivek] scope.SubSystem.Vertical.SELECT_SOURCE(mathSource, “ON”); // Use this existing function
>
> 3) "MEASUREMENT:MEAS" + ch.ToString() + ":VALUE? >> to get the Val… [truncated]


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
> 1. Understand the current script using the available document
> 2. Find out the issues
> 3. Fix the issues and run the script successfully to encrypt MATLAB files
> 4. Update the available document with latest info… [truncated]


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
> Report shared for all the test for 
> > 2.5G
> > 5 G
> > 10 G
> > Any defect found during the Qualification should be logged in JIRA


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
>      2.Test cases should be added.


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
> Issue 2: Check box which is provided in Probe configuration window to select all channels is not functioning .
>
> user can select all channels using the check box but deselection is not working


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
> Go to Test Selection panel
> Now you can see multiple measurements selected


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
> I closed all the session files which were open and retested again. 
>
> expercted output : session should get saved after the test is completed.


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
>  *Action item:*
>
> We need to disable this browse button so that it will be clear for user that only default mask file will be used in compliance mode.


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
> 3. Backward compatibility should be maintained
>
> Doneness:
> 1. Test XML changes
> 2. Related Kernel and interface changes
> 3. SWE testing using app emulator
> 4. Test cases (from developer and SQE)
> 5. SQE validation using app emulator
> 6. PRTI


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
>  - Discussion within the team and finalize one of the designs
>  - Code understanding and estimate efforts


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
> 3. Share the nightly build to the team raised the issue
>  
> Doneness:
>
> 1. Discussion with build team is done.
> 2. Code merged and build tested
> 3. Shared the nightly build to the team that raised the issue


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
>  # Get the feedback and try to accommodate them
>  # No corresponding S1/S2 defects
>  # PRTI
>  # SWE testing of the corresponding build
>
> Doneness:
>  # Working with CIO team to integrate ISequencerModel into CIO sequencer
>  # Accomm… [truncated]


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
>  # The test should run based on the selection in config panel not in DUT panel.
>  # By default, the config panel will reflect the selection in DUT panel.


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
> Please check the session here: \\tedisplstorage\VOEs\Display\DisplayPort\DP14_VOE\Majorda_R3\SWE_VOE\Varun\DP-2444


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
> We need to manually click Refresh button or Optical Connect button in HW Setup window to refresh OMA connections to sync with available hardware.
>
> Expectation: Software should refresh automatically and check if corresponding Hardware available for OMA connections and report if… [truncated]


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
>  # Save and recall this OMA definition successfully when corresponding hardware available.


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
> Now set new friendly name as "TwoStackATI" in SSU. Remove and add the same scope in HW Setup window. Scope is populated in left palette with updated new friendly name.
>
> Make the connections and click OK button.
>
> Now relaunch HW Setup window.
>
> Observation:
>
> Two scopes of same… [truncated]


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
>  # Save and recall this OMA definition successfully when corresponding hardware available.


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
>  # Save and recall this OMA definition successfully when corresponding hardware available.


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
>  # Save and recall this OMA definition successfully when corresponding hardware available.


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
> 5.Select the Advanced mode from the View Button
>
> 6.Select the User Defined Mode 
>
> 7.Click the Acquisitions 
>
> Result:we will Observed that COMP-EYE is Getting added when we select the User Defined mode 
>
> Expected:COMP-EYE pattern  Should add on… [truncated]


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
> 4. we can't able to see which kind of probe type we have used..
>
> NOTE-it should give Probe Type- P77C292MM,P7720


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
> While debugging this issue, I came across the situation where license check is performed before parsing Device/Suite information from corresponding sequential order XML files.
> This scenario is not valid for unit tests as we cannot expect to have app license on every system where unit tests are going to run (including build machine).


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
> Actual Result: Two prompt appearing with different message, and that is controverting the information.
>
> Expected Result: Application should prompt appropriately.


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
> 5. We notice an empty row of the measurement whose analysis status was in Progress. 
> 6. Once the tests are completed, we see another entry of same measurement with results appearing.
>
> Actual: There will be two entries for the same test one with blank row and one w… [truncated]


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
> Select all custom CTLE
> ReplaceAny Report update mode
> Add Replace any session, any run parameter
> Pref > Remove "Notify on Test Failure"


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
> Actual Result: Incorrect popup message for Linear Pulse Delay limit.
>
> Expected Result: It should behave as per limit value.


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
> 2.	I want to turn off “View Report after Generating” from Reports tab programmatically, as I can’t save a session file if there are reports open during the running of my script
> 3.	Changing system clock between 19.2 and 26


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
>  # In acquisition panel select waveform for only one combination like P0-Lane0  acquisition. Don't select for P0-Lane01.
>  # Click on start .
>
> Expected:
>
> A pop up should appear stating that pre-waveform for preset P0 in lane1 is not specified.
>
> Actual: The… [truncated]


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
> We got customer requirement (AR # 60137) where user should have the option not to show this popup from next run when at least one license is bought.


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
> It is not selecting Single-ended nor Differential
> Please find the attached screen shot
>
> Note:For all radio button similar behavior


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
> Minimum population limit = (pattern length * samples per UI) + 60000 + 80000 * levelCount (60,000 is used for uncorrelated jitter and 80000*levelCount for uncorrelated noise)
>
> For PAM4, the level count… [truncated]


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
> Expected Result : After completion of test process the report shall be generated.


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
> Scenario 2
>
> Steps: 
>
> 1. Launch the SourceXpress.
> 2. Go to High Speed Jitter and enable the embed channel.
> 3. click on FLT Files.
> 4. Browse S4P file.
>
> Observation:
>
> 1. Extension showing in browse path FLT Files (… [truncated]


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
> Note: For Reference, find the .png file.


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
> 6. Disconnect slave through PI Command.
>
> Observation:
> Through PI Command.
>
> 1. After Disconnect the slave--> Slave Ch1 and Slave Ch2 check boxes are automatically has to be in disable state.
> 2. After connect the Slave-->… [truncated]


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
> Note: Please find the .png file for reference


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
> 5. Label Amplitude must be in regular font
> 6. Amplitude along with its options should be grouped in a group box
> 7. Checkbox option for Amplitude should be equally distributed
> 8. Label Termination must be in regular fon… [truncated]


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
> Note: Please find the .png file for reference


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
> Application gives unhandled exception.


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
> 1)Waveform types changes between consecutive compiles of master and slave
> 2)slave gets enabled/Disabled
> 3)Ip address changes


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
> Case2: High speed > Base Pattern > select pattern as text..
> and try to load any other format file like .flt or .lp
> etc.. It supposed to get “9403” but it is throwing “9401”.


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
> Issue 2: Do all UI configurations, set Label to "Satish", save the configuration using Add to list option present in Standard toolbar, configuration gets saved with label "Satis". Last letter of label is missing!!!


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
> Selected Tx Clk Frequency and deselected all other tests.  Test description did not track selected test but shows last highlight line. Note that this can create confusion for the user since the display shows Tx Clk. Frequency test selected but less obvious is the shading of the jitter test.


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
> Observe there will be an exception which crashes BRR solution on 5KB scopes.
>
> Attached screen captures and exception details for reference


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
> 6> Now clear and do single again.
> 7> See that TN@BER measurement gives zero population with error message "RJ DJ Separation: Pattern length configuration is set incorrectly"
>
> 8> Go to Configure, TN@BER1, RNDN and see that Pat… [truncated]


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
> Also if the user again selects the Marginal option, whatever the options he has selected previously should be reflected back.


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
> 7> See the Height@BER results. It shows 0.0000UA which is incorrect. Refer to the attachment "Error.JPG".


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
> 2> "Signal Type" configuration should be kept at left under "Bit Config" panel of TN@BER measurement.


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
> Refer to the attached screenshot "JitterNoiseBreakdownError.JPG"


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
> Customers who want Clock->Rising or Clock->Falling can switch to Jitter-only analysis. We should probably note this in the release notes.
>
> 1> "Signal Type" and "Clock Edge" configurations should be supported only for "Jitter only" Analysis method.
> 2> "Signal Type" and "Clock E… [truncated]


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
> |RX-Device|Group3|Yes|No|


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
> 6> See that the plot configuration switched back to "Unit Amplitude" and "Unit Intervals" respectively which is incorrect.


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
> 6> See that RJ locking is disabled. After "Clear all", why is the global configuration changing? This is incorrect behavior.


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
> 2> Add PDF Eye plot and go to its configuration panel. See that Target BER value is showing as 1E-10 which is incorrect. The correct value value to be shown is 1E-12. Refer to the attachment.


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
> 5> Go to results panel and see that TJ@BER result is correct in terms of both unit as well as value. 
>      But TN@BER unit is correct where as value is incorrect. The incorrect value shown is 484.24mV whereas the correct va… [truncated]


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
> 5> Go to results panel and see that TN@BER result is shown in terms of UA which is correct but the 440.22mUA value is incorrect. The correct value is 484.24mUA.


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
> Do necessary changes in PlotManager.cs. Send the appropriate data from c# to matlab about these configurations.


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
> It would be easy for the user, if these values are shown in the results panel. Also show UA (Unit Amplitude) values in results panel when any jitter/noise measurement is selected.
>
> Work
> - SRS, UIS update
> -  we have to show in results panel : on the top, we need to UI, UA
> - Save & Recall
> - UT
> - PI
>
> T… [truncated]


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
>          In Preference Setup tab, General->Display Units, do following changes
>                         Seconds to Seconds / Voltage
>                         Unit Intervals to Unit Interval / Unit Amplitude
>
> The below details of how to achieve this is yet to be decided
>        1> What will happen if Unit… [truncated]


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
> 6> Now go to TJ@BER1->RJDJ and change the Pattern type to "Arbitrary" and you will see that it will not get updated to "Arbitrary".


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
>        Go to Noise tree and add noise measurements
>
> The user has to go to and fro to select the measurements. 
>
> Proposal:
> ***********
>     To ease this, if we can add Jitter and Noise radio buttons in jitter and noise trees, then f… [truncated]


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
> Leave the save/recall as it is.
> Update OLH


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
> QG3 UIFunc Logs@\\eiw900440b\DPOJET_VOE\Helios_MR2\6.2.1.4\UIFunc\DPO72504DX_Fv7.1.1.1\TestScriptFailures_Verification\DPOJET_BR_PL_Arbitrary.txt


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
> - Few test cases ~10 are failing, needs to be resolved or delegated


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
> Current behavior:
>
> Limit is not coming properly in CSV report.
>
> Expected behavior:
>
> Limit should be proper in PDF as well as in CSV report.


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
> Observation: Wait till acquisition completes.  Now over all status shows as running in test title. But in status it shows as Passed. It should show running. If status is passes then, totalstep=Passes+Failed.


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
> When one installs the platform again, presence of this tool prevents from installation and it fails. 
>
> One has to manually delete this dll and then should proceed with installation of new build.


---
