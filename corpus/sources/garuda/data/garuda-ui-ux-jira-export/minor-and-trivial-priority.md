---
provenance: observed
class: data-export-cluster
export_id: garuda-ui-ux-jira-export
export_title: Garuda UI/UX JIRA export
export_source: JIRA project GAR (Garuda), filter "UI-UX filtered trial"
export_date: 2026-06-25
cluster_id: minor-and-trivial-priority
cluster_value: "Minor + Trivial"
cluster_column: Priority
row_count: 428
related_screens: []
related_docs: []
applies_to: [garuda]
---

# Minor + Trivial priority issues — Garuda UI/UX

## Summary

All Priority=Minor + Priority=Trivial issues from the Garuda UI/UX JIRA export. Combined into one cluster because Trivial population is only 2; this cluster captures the polish-level UX backlog.

## Column inventory

Per-issue fields captured: Issue key, Type, Status, Priority, Summary, Reporter, Created, Updated, Resolved, Resolution, Components, Labels, Customer Application, Customer Visibility, Business Value, User Pain Index, Customer Impact, Action Request, Acceptance Criteria, Engineering Notes, Use Cases, Description.

Many JIRA custom fields are populated unevenly across rows — coverage is reported per-issue inline. Long free-text fields are truncated inline at the boundaries noted in the cluster summary.

## Distribution by Status

| Status | Count |
|---|---:|
| Open | 129 |
| In Progress | 3 |
| Submitted | 43 |
| Resubmitted | 1 |
| Verified | 9 |
| Resolved | 92 |
| Closed | 151 |
| **Total** | **428** |

## Rows (verbatim)

Rows are grouped by Status. Within each section, ordering follows the source CSV.

### Status: Open (129)

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
>  # Aligned Status, Settings and Delete(wherever applicable) icons vertically at appli… [truncated]


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
> b.	The mouse pointer on mouse-over on a button is sometimes regul… [truncated]


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
>          - Putting the “Year” in the da… [truncated]


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
> c.	Regarding Test Page message: The red ‘+’ icon is a bit misleading… [truncated]


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
> The Green color and 100% label makes it feel like the test has passed. The user will… [truncated]


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
> This needs refactorin… [truncated]


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
> For example, application status icon was added in test status UI, causing expand more button to be shifted so locators in test script have to be updated like in the attached sceenshots. These UI elements need unique ids so selectors do no… [truncated]


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
> * If connection diagram is not pres… [truncated]


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
> the error message notification pop up text "Transmitter Timing and Voltage Measurement Subset is empty" is repeated twice… [truncated]


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
> * Can I get a description of why a user… [truncated]


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
> Stepping into this UI for the first time is overwhelming, it would be great to have some sort of automated guide as we launch that tells the user where to start and how to progress through the… [truncated]


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
>       This helps the user to know the status of the Acquisition module without logging into… [truncated]


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
>  # Modify OUI code to use R2019a if it is i… [truncated]


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
>  * Bottom left corner should have number of unit intervals and mask in case of eye di… [truncated]


---

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
> - I don’t understand why there are different settings for voltage swing between the “Acquisitions” and “Eye/Jitter Acquisitions” tabs…same for Pre-emphasis levels. Maybe this is a spec thing t… [truncated]


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
> There should be a hover-over tooltip or info icon by “Test Mode” describing what it… [truncated]


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
> 4. API support to check if correct technology's Analysis Services are up and running and able to communicate with TekFl… [truncated]


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
> * 	We have “Sequences” in a more prominent position than “Test Benches” and you can’t save a sequence with… [truncated]


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

> Is it possible to show the instrument activity log in Tekflow? Sometimes, it is very difficult to tell if a scenario is running as intended, or if it's gotten stuck or run into an issue. There really isn't a good way to get feedback from the actual instrumentation, and the percentage-based progress bars do not give a good indication of test progress. I have often found myself going over to the sco… [truncated]


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

### Status: In Progress (3)

#### `GAR-5660` — [UX] Enable the user to initiate and view the validation status of the test bench  and DUT validation.

- **Type:** Story
- **Status:** In Progress
- **Priority:** Minor
- **Reporter:** kemg
- **Created:** 26-06-2023 03:56
- **Updated:** 06-12-2023 22:06

**Acceptance Criteria (verbatim):**

> Should be able to initiate the test bench and DUT connection validation process.
>  Should be able to view the progress of the validation.
>  Should be able to view the result of the test bench validation.
>  Should be able to verify the DUT connections.
>
> Need to show connection with instrument active/ or not in test benches field

**Description (verbatim):**

> As a test engineer, I should be able to the initiate the test bench validation and also view its status from the TekFlow UI.


---

#### `CDOC-7650` — [Garuda DP][PLAE Feedback-Gary] Inconsistent Host-ID meaning

- **Type:** Issue
- **Status:** In Progress
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 21-06-2023 10:32
- **Updated:** 26-06-2023 01:48
- **Labels:** ClientApp-DP, PLAE-Feedback

**Description (verbatim):**

> In the install instructions, we make reference to “host ID” several times when referring to the URL for accessing the TekFlow interface. This is confusing given that we also use “host ID” with regard to licensing. For the sake of clarity, I suggest we change the reference used in the URL to “host IP”


---

#### `DP-11226` — [Pascal's Feedback] Full Decimal Resolution for LinkRate measurements

- **Type:** Improvement
- **Status:** In Progress
- **Priority:** Minor
- **Reporter:** u616480
- **Created:** 15-01-2024 20:00
- **Updated:** 24-04-2024 09:46
- **Labels:** Clarius_DP_Platform_Clone, PLAE-Feedback

**Description (verbatim):**

> Linkrate measurements need high resolution of accuracy , hence the decimals should not be truncated in custom DP for these measurements.


---

### Status: Submitted (43)

#### `GAR-6580` — Logging service filter values in the GUI are hardcoded.

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** bhap
- **Created:** 26-10-2023 06:08
- **Updated:** 26-03-2024 23:18

**Description (verbatim):**

> In GUI, logs filter values are hard coded. This should fetch


---

#### `GAR-7436` — [GUI] In Source and signal settings, instrument field is showing blank

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** arck
- **Created:** 22-01-2024 05:48
- **Updated:** 13-04-2024 00:32
- **Labels:** ClientApp-Memory-Tx, GUI

**Description (verbatim):**

> Steps to reproduce:
> 1. Launch the Clarius page
> 2. Click the Add new test
> 3. Select TX LPDDR Technology and LPDDR4 application and click the Add sequence.
> 4. Go to Sources and signal settings, Instead of CLK signal, select DQ1
> 5. Again change DQ1 to CLK (By default SE will be set)
> 6. Change that CLK Single Ended probe type to Differential
>
>  Observed instrument will be blank for CLK signal. (Image a… [truncated]


---

#### `GAR-6904` — Able to see log messages in GUI even after deleting all logs by transactionId using API.

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** bhap
- **Created:** 23-11-2023 21:22
- **Updated:** 19-03-2024 07:24

**Description (verbatim):**

> 1> Run a test and note down the execution id/Transaction ID
>
> 2> Try to delete the logs of a test using API using POSTMAN
>
> DELETE http://\{VM}:8080/tekflow/log?transactionId=\{execution_ID}
>
> 3> Login to Tekflow using browser
>
> 4> Open the test --> go to View Results=>Click on View Logs => Select "Logs" tab
>
> Observation:
>
> 1> We still able to see logs in GUI. Which logs its showing here?
>
> 2> When to t… [truncated]


---

#### `GAR-5693` — Ui fonts and alignment fixes

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** u616478
- **Created:** 27-06-2023 23:10
- **Updated:** 30-06-2023 04:57

**Description (verbatim):**

> Ui feedbacks related to alignment and fonts


---

#### `GAR-5752` — PO Feedback : Provide the button to Start AS and IS on TekFlow UI

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** shashirv
- **Created:** 05-07-2023 02:49
- **Updated:** 05-07-2023 02:55
- **Labels:** Client-App-USB4V2

**Description (verbatim):**

> User should be provide easier way to start AS and IS.


---

#### `GAR-7670` — Unable to see multi-teration result on UI in 1.0.0.master.111 build.

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** u627589
- **Created:** 08-02-2024 03:14
- **Updated:** 26-03-2024 05:19

**Description (verbatim):**

> login to clarius portal and 
>
> Enter the name and description and 
>
> Select the correct test bench
>
> Select technology as PCIE and application as AIC GEN4
>
> Select acquisition type as live and iteration count as 2
>
> Click on run and 
>
> Observe the result tab after test completion.
>
> Current behavior:
>
> Result is not showing for multi-iteration on UI but coming in report pdf.
>
>  
>
> Expected behavior:
>
> User s… [truncated]


---

#### `GAR-7524` — [RX] Eye plot not loading on UI for RX Calibration step

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** pchanda
- **Created:** 16-01-2024 01:36
- **Updated:** 18-03-2024 07:16

**Description (verbatim):**

> *Use case:* 
>
> Using analysis codebase to generate Eye Plot for Rx Cal step. (Request made to AS from CS to create plot; plot content is uploaded to database by AS;  AS responds back to CS with all attachment data except _attachement.content_ *;*  CS adds the same attachment URI in the final result response so UI should be able to pick up the plot from database using URI)
>
> *Observation:* 
> Plot is n… [truncated]


---

#### `GAR-7715` — ui freezes on view result page for higher acquisitions untill refreshing page

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** u629875
- **Created:** 15-02-2024 01:44
- **Updated:** 19-03-2024 07:34

**Customer Impact (verbatim):**

> 2-Medium

**Description (verbatim):**

> login to clarius
> run test with high acquisistions
>
> navihate to view result page
>
> observe - ui struck and results are visible after refreshing the page[^Video 2-15 at 13.50.webm]


---

#### `GAR-6997` — Tekflow ui page looks broken when we access the page with url

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Trivial
- **Reporter:** pbaik
- **Created:** 03-12-2023 07:03
- **Updated:** 13-03-2024 03:06

**Description (verbatim):**

> 1. Login with valid credentials
> 2. access the user profile page by entering the url "tekflow/user/profile"
> 3. observe:
> ui controls are not aligned
>  !image-2023-12-03-20-32-50-100.png|thumbnail!


---

#### `GAR-5377` — Time units on x-axis of waveform in waveform section of Results in UI are not appropriate.

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** u615732
- **Created:** 29-05-2023 00:04
- **Updated:** 25-04-2024 23:04
- **Labels:** ClientApp-CPHY, ClientApp-DPHY, Client-App-Dphy, ClientApp-Memory-Tx

**Description (verbatim):**

> Time units on x-axis of waveform in waveform section of Results in UI are not appropriate.
>
> [Kamlesh] Adding more details:
>  * In waveform plot in results, time axis unit is seconds.
>  * The actual value which we see on this is number of nth sample, but that is centered at zero so like -5000 to 5000 for a record length of 10000
>  * What is expected is, with respect to wfm, horizontal values should be… [truncated]


---

#### `GAR-4874` — User should be able to see the iteration selected in filter same reflecting in results UI.

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** arck
- **Created:** 10-04-2023 01:22
- **Updated:** 26-03-2024 05:19
- **Labels:** ClientApp-LPDDR4

**Description (verbatim):**

> User should be able to see the iteration selected in filter same reflecting in results UI.
>
> Observation: selected iteration is not checked in filter. (Attached image)
>
> Test Id: [Tekflow|http://pc-bang-12860j3:4200/tekflow/test/results/2419ec0e-6c39-43eb-8b70-61c2483b4228]


---

#### `GAR-8086` — [Clarius PCIe][SA EUT Feedback] Unable to locate/launch Help file in the UI

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 13-04-2024 06:55
- **Updated:** 16-04-2024 00:45
- **Labels:** SA-EUT-Feedback

**Description (verbatim):**

> [EUT: Ramesh, Madhu, Kiran]
>
> There is no option to launch help document from Clarius APP UI


---

#### `GAR-8218` — While Login to UI , It showing Error Connecting to the system please contact to tek-support.

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** u633474
- **Created:** 02-05-2024 01:54

**Description (verbatim):**

> While Login in to the Clarius Application, it throwing a pop up like Error connecting to the system, please contact to tek-support, I tried 3 times.
>
> VM is: tek-74L53F3 !image (4).png!!image (5).png!


---

#### `GAR-7915` — [Memory Tx] All the sources and signal setting selected in UI are not coming up in CSV report.

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** arck
- **Created:** 13-03-2024 22:56
- **Updated:** 26-03-2024 03:44
- **Labels:** ClientApp-Memory-Tx

**Description (verbatim):**

> Selected all the signals in the sources and signal settings and ran a test for DRAM TX app.
>  Click on the Download CSV report in the view results page 
>  *Observation:* Open the downloaded CSV file, in that DQS+ signal settings is missing. Attached snap and csv report.
>
> Signals are getting missed for SE probe type where both positive and negative signals are there.


---

#### `GAR-5751` — [Not Ready] PO Feedback : TekFlow UI should show Version number for all installed licenses (AS, IS and others)

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** shashirv
- **Created:** 05-07-2023 02:47
- **Updated:** 22-09-2023 05:55
- **Labels:** Client-App-USB4V2

**Description (verbatim):**

> Acceptance Criteria:
>  * Should be able to fetch version info of application installers, instrument driver - refer to images
>  * TekFlow UI should have option/button (similar to Help > About) to show this info
>  * Should be able to include this version info in report
>
> Customer Impact : High


---

#### `GAR-8163` — Moving from Test build to test 311 after uninstall and reinstall, removed the license from UI

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** shkv
- **Created:** 24-04-2024 00:38
- **Updated:** 25-04-2024 03:30

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> Moving from Test build to test 311 after uninstall and reinstall, removed the license from UI 
> As the license goes away from UI, in case customer has lost the old license file - There is a dead lock - he cant generate the license without exit key
>
> Expected - User should be able to see the license in UI
> Actual - User should keep the license file safely and then install


---

#### `GAR-8085` — [Clarius PCIe][SA EUT Feedback] UI controls are re-aligned when Acquisition Type is changed between Live and Recorded.

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 13-04-2024 07:01
- **Updated:** 16-04-2024 00:43
- **Labels:** SA-EUT-Feedback

**Description (verbatim):**

> [EUT: Ramesh, Madhu, Kiran]
>
> UI control change based on Live, Recorded mode
>
> !image-2024-04-13-19-31-10-699.png|width=449,height=249!
>
> !image-2024-04-13-19-31-38-451.png|width=450,height=228!


---

#### `GAR-4933` — Posting multiple instrument definition from postman (not tekflow UI) - the null category, type, properties and constraints are appearing when we do get

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** pbaik
- **Created:** 20-04-2023 20:42
- **Updated:** 28-06-2023 03:36

**Description (verbatim):**

> When we post the  instrument definition with multiple category from postman - the null category, type, properties and constraints are appearing when we get 
>
>
> !image-2023-04-21-09-09-33-904.png|thumbnail! 
>
> Expected: when multiple instrument definition is posted - Method not allowed should come up


---

#### `GAR-8084` — Unable to hide or move the download waveform popup. Download waveform overlaps on other UI controls when we try to perform any other functionality

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** pbaik
- **Created:** 16-04-2024 00:31

**Description (verbatim):**

> 1. Click Download waveform button
> 2. Download waveform progress popup should be visible
> 3. click Add Test
> 4. Add Application 
> 5. unable to click Run button as the download waveform popup overlaps on the Run button control
> unable to move the Waveform download popup
> !image-2024-04-16-12-59-08-333.png!


---

#### `TEKEXPFW-6517` — [D-PHY] Run Numbers are not updating correctly in Run Session option

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 25-10-2021 00:51
- **Updated:** 25-10-2021 00:54
- **Labels:** UI

**Customer Impact (verbatim):**

> 2-Medium

**Description (verbatim):**

> VOE's Path : \\tedisplvoes\Technology\MIPI\MIPI\TE_DPHY4.0\D-PHY2.1\DPHY_MR_2021\133_DIff_Triggers_BLD65
>
> PFA
>
> Steps:
> 1. Run any tests multiple times
> 2. Go to X Drive and delete some intermediate sessions
> Example: in folder there are 5 session if we delete 3 and 4 ran sessions
> run the test again the Run is updating as 3 instead of Run 6 
>
> Frame Work Build: 5.7.0.33
> DPHY Build: 1.2.0.65


---

#### `TEKEXPFW-6462` — [AppEmulator] Include Switch Matrix Configuration not working

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** saravind
- **Created:** 17-09-2021 01:49
- **Updated:** 17-09-2021 01:53
- **Labels:** UI

**Description (verbatim):**

> In TekExpress AppEmulator, 
> For Group1-2Lane, when "Include switch matrix configuration" is checked, the report shows only the heading for this entry without any configuration details.
>
>  Refer to attached screenshot.


---

#### `RNBAST-860` — [Riddick] The "view probes" option in GUI doesn't display all 6/8 channels incase of higher channel scope

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** satk
- **Created:** 08-09-2020 02:03
- **Labels:** ui

**Customer Impact (verbatim):**

> 3-Low

**Description (verbatim):**

> +Steps to reproduce:+
>  # Open TekEpress app in any 6/8 channel scope
>  # Go to Acquisition window-> Open View probes
>  # It shows probes connected to first 4 channels only.
>  # If the user has connected a probe to channel 5 or above, he cant see it using this option.


---

#### `TEKEXPFW-4292` — Formatted String for QSPR Report

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 13-08-2020 00:36
- **Updated:** 22-09-2020 21:58
- **Labels:** UI

**Customer Impact (verbatim):**

> 2-Medium

**Description (verbatim):**

> [Mail from Sundar. Refer attached mail]
>
> Hi Ashok
> We spoke to Tony. He wants an Option in TekExpress similar to DPOJET so that all results are reported in UI. Keysight always reports the result in UI.
>
> This is a low priority. I asked him to update the same ART so that we can track. 
>
> Lets add to our backlog and see if its possible to do sometime in future.
>
> Regards
> Sundar


---

#### `TEKEXPFW-2556` — Global Settings/Measurement tab in Configuration panel is not setting to default status when default test setup option is selected

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 18-05-2017 23:50
- **Updated:** 26-04-2020 23:51
- **Labels:** UI

**Description (verbatim):**

> Steps:
> 1)Launch the application 
> 2)Navigate to configuration panel and select measurement tab
> 3)Do default setup and observe the configuration panel window
> Expected Result:
> Global settings has to be recalled when default test option is selected
> Actual Result:Measurement tab window is only retained


---

#### `TEKEXPFW-2567` — Limits Editor Text size

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 24-05-2017 05:39
- **Updated:** 06-06-2019 13:48
- **Labels:** UI

**Description (verbatim):**

> Issue: The header text in the limits editor are not of the same size.
> Resolution: Assure that text at same level should be of the same size.


---

#### `TEKEXPFW-2566` — Empty spaces in the Results Panel - after the test is complete

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 22-05-2017 23:08
- **Updated:** 26-04-2020 23:51
- **Labels:** UI

**Description (verbatim):**

> Build 1.0.0.43
> Run the default measurement. 
> Go to results tab
> Use scroll button to down. it shows lot of empty spaces.
> Please refer attach screenshot.


---

#### `TEKEXPFW-2565` — Selecting the control using Tab - Doesn't work for most of the parameter

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 22-05-2017 22:14
- **Updated:** 26-04-2020 23:51
- **Labels:** UI

**Description (verbatim):**

> Launch the application.
> Select Tab button on keyboard to select the measurement. I could only select the Mode as compliance.
> Rest of the parameter and even the tab, I was unable to select it.
> Expected: Provision to select each of the tab should be provided to select the control using keyboard only.


---

#### `BRR-428` — Some time RL measurement does not consider the Apply button

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** jdomadiy
- **Created:** 27-01-2016 19:35
- **Updated:** 10-09-2019 02:54
- **Labels:** Automated, UI

**Description (verbatim):**

> * When we do recall Calibration in RL test, we also need to click “Apply” button. 
> * Even some time RL measurement does not considering Calibration even if we click Apply.  Also, some time UI button color is not changing after pressing "Apply" button.
>
> * Also, some time it takes more time to Apply. If we do not click on "Apply" button, it does not consider selected the Calibration + wave files. It… [truncated]


---

#### `CPHYX-891` — Incorporate UI changes as per to Jenny's discussion

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** REKB
- **Created:** 13-01-2016 03:07
- **Updated:** 15-02-2017 16:08
- **Components:** User Interface
- **Labels:** UI

**Description (verbatim):**

> Below are the UI evaluation comments::
>
> Removing Groupboxes for all the tabs ---->Major
> Applying indentation--->Minor
> changing readonly numeric control to textblock-->minor
> moving the Units inside the control--->minor
> Applying tooltip wherever needed-->minor
> moving use line level control--> minor
> HS Jitter ---> fixing spacing issues--> time consuming but, needs to be addressed
> sine noise amplitude… [truncated]


---

#### `TEKEXPFW-1518` — Improve measurement Config panel to support common test parameters from parent node

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 03-04-2016 22:08
- **Updated:** 06-06-2019 13:38
- **Labels:** UI

**Description (verbatim):**

> We have a parent node under which 3 tests are listed. 
> To change a test specific parameter, we need to go to individual test and need to change the param value.
> If we could show common parameters of child tests in parent node and also changing the value here would reflect across all child tests, it will improve user experience.


---

#### `DP-9692` — [Garuda DP][PLAE Feedback-Gary] Patterns should be internal to the measurements

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 21-06-2023 05:56
- **Updated:** 24-02-2024 11:17
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
> Why is “Pattern Type” selectable in the “Acquisitions” tab? Shouldn’t the pattern used for testing correspond to the measurements a user has selected in the “General” tab?


---

#### `DP-10524` — [Garuda DP][PLAE Feedback-Nitin] AS IS health monitor from UI

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** mkumar2
- **Created:** 19-09-2023 20:44
- **Updated:** 24-02-2024 10:38
- **Labels:** Clarius_DP_Platform_Clone, PLAE-Feedback

**Description (verbatim):**

> As per Summary


---

#### `DP-9687` — [Garuda DP][PLAE Feedback-Gary] Settings Panel tab orders are not proper

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 20-06-2023 21:22
- **Updated:** 24-02-2024 11:20
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
> *Setting tabs order are improper*
>
> - “DUT” tab should come first in sequence “Settings”
> - "General" tab should be second, or ideally incorporated into the “DUT” tab in sequence
> - "Acquisitions… [truncated]


---

#### `GAR-6962` — [Garuda DP] Needs to support individual eye diagram plots.

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 28-11-2023 10:34
- **Labels:** ClientApp-DP, CustomerCommit, STM

**Description (verbatim):**

> Currently only accumulated eye plot is shown. There should be a provision to slow all intermediate eye plots.


---

#### `GAR-5604` — [MIPI CPHY DPHY] Measurement is aborted, but the progress bar is 0%

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** kemg
- **Created:** 23-06-2023 05:04
- **Updated:** 29-11-2023 00:54
- **Labels:** ClientApp-CPHY, ClientApp-DPHY, Client-App-Dphy, EUT_Feedback, PLAE-Feedback

**Description (verbatim):**

> Need to check with Kamlesh and Team for further details.
>
>  
>
> <Kamlesh>:
>
> Steps:
>  * Run measurements
>  * Abort
>  * Check the progress bar status.
>  * Observe progress bar is at 0%.
>  * This was EUT feedback
>  * Screenshot is attached.


---

#### `GAR-5612` — [Garuda-DDR] Ability to enable/disable measurements from this view.

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** sjhawar
- **Created:** 23-06-2023 07:48
- **Updated:** 23-01-2024 04:59
- **Labels:** ClientApp-DDR5DRAMTx, PLAE-Feedback, TF_Configuration

**Description (verbatim):**

> Ability to enable/disable measurements from this view.


---

#### `DPOJET-700` — [Kauai_R1]: UI: The jitter and noise tree screenshots appear to be dancing

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** amohamme
- **Created:** 13-08-2014 05:00
- **Updated:** 25-09-2020 00:00
- **Labels:** UI

**Description (verbatim):**

> In Jitter tree, when we move from “Spectral Only” to “Spectral+BUJ“ the arrows in screen dances a little. 
>
> We need to show this to Tony Tarr and get the new screenshots which can be integrated into DPOJET. 
>
> Same behavior occurs in Noise tree as well.


---

#### `GAR-1409` — Added test is missing when switched between the menu options

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** mtatiche
- **Created:** 08-02-2022 23:17
- **Updated:** 26-03-2024 04:48
- **Labels:** Clarius-Generic, ClientApp-DP

**Description (verbatim):**

> * Go to Test Tab
> * Add a Test and make all configurations
> * Move to a different tab. The changes are lost.
>
> Expectation: UI should show a warning pop up if there are unsaved changes while navigating to other screen


---

#### `GAR-5691` — [PCIE/DP] Restrict the ability to click on + button for N no.of times in Sources and Signals windows

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** mtatiche
- **Created:** 27-06-2023 23:07
- **Updated:** 26-03-2024 03:44
- **Labels:** Clarius-Generic, ClientApp-DP

**Description (verbatim):**

> User is right now able to add sources more than the actual lane numbers. 
>
>  
>
> Expected:
>
> Restrict the addition of sources as per the lanes available per application.


---

#### `DP-9694` — [Garuda DP][PLAE Feedback-Gary] 3.2,.3.3,.3.4 measurements selection redundant

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 21-06-2023 06:01
- **Updated:** 14-03-2024 12:43
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
> Why is “PELevelAndEqualizationVerification” selectable in this list AND selectable in the “Scenarios” list in the drop-down menu for a given sequence? Which takes precedence?


---

#### `GAR-5632` — [Garuda-DDR] Waveform names are larger than the text box.

- **Type:** Defect
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** sjhawar
- **Created:** 23-06-2023 10:17
- **Updated:** 18-03-2024 07:29
- **Labels:** ClientApp-DDR5DRAMTx, PLAE-Feedback, TF_Queries

**Description (verbatim):**

> Waveform names are larger than the text box.


---

#### `DP-9320` — [Garuda DP][Pascal Feedback] MATLAB Plot pop-ups should be hidden.

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 28-03-2023 07:39
- **Updated:** 24-04-2024 01:14
- **Labels:** PLAE-Feedback

**Description (verbatim):**

> The MAtlab spectrum window while being very interesting is popping up several tens of times during tests is annoying as it is stealing windows focus and also triggers the windows taskbar going up and down each time.


---

#### `DP-9690` — [Garuda DP][PLAE Feedback-Gary] Smart Toggle Option is unintuitive

- **Type:** Improvement
- **Status:** Submitted
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 21-06-2023 05:54
- **Updated:** 24-04-2024 09:43
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
> What does “Smart Toggle” do?
> There should be a hover-over tooltip or info icon by “Smart Toggle”


---

### Status: Resubmitted (1)

#### `GAR-4609` — Login page - On page resize the right side login ui elements are overlapping with left Tektronix image

- **Type:** Defect
- **Status:** Resubmitted
- **Priority:** Minor
- **Reporter:** pbaik
- **Created:** 15-03-2023 01:30
- **Updated:** 26-03-2024 03:43
- **Labels:** Beta27

**Description (verbatim):**

> Login page - On page resize the right side login ui elements are overlapping with left Tektronix image.
> please refer to the attached image


---

### Status: Verified (9)

#### `GAR-4564` — UI validation for sources (trigger UI validation when user clicks on apply in sources & lanes popup)

- **Type:** Defect
- **Status:** Verified
- **Priority:** Minor
- **Reporter:** pbaik
- **Created:** 12-03-2023 22:22
- **Updated:** 23-04-2024 03:37
- **Resolved:** 15-03-2023 22:17
- **Resolution:** Fixed

**Description (verbatim):**

> 1. Select LPDDR4 Technology and Application
> 2. Select LP4 test bench
> 3. launch  Lanes and Sources
> 4. Select CH3 for Clk signal
> 5. Select Ch3 for any other signal other than CLK
> There should be a validation error for channels


---

#### `TEKEXPFW-5743` — [C-PHY] Not able to enter the  value for UI controls which as Unit keypad using None & milli unit is getting clipped

- **Type:** Defect
- **Status:** Verified
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 16-06-2021 22:44
- **Updated:** 14-09-2023 11:58
- **Resolved:** 06-07-2021 04:15
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 2-Medium

**Description (verbatim):**

> PFA for Data Rate and units clipping issue:
>
> Example:
> For Data Rate Range is 0.08G to 8Gsps
> When try to enter 800000000(800M) this this value is not taking and it shows error pop-up as enter the values in Gsps
> --------------------------------------------------------------------------------------------------
> There is a clipping issue with the unit, when using milli multiplier


---

#### `TEKEXPFW-5729` — AppEmulator: Acquisition status is NOT updating for Lane01 to Lane09

- **Type:** Defect
- **Status:** Verified
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 14-06-2021 00:03
- **Updated:** 14-09-2023 11:58
- **Resolved:** 16-06-2021 23:23
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> AppEmulator: For "Group1 - 2 Lane" suite,
> Acquisition status is NOT updating for Lane01 to Lane09 during RUN. Lane0 and Lane10 and above are working fine.


---

#### `TEKEXPFW-5868` — [C-PHY] None in units keypad is not working for parameters with absolute values

- **Type:** Defect
- **Status:** Verified
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 06-07-2021 04:11
- **Updated:** 14-09-2023 11:58
- **Resolved:** 20-07-2021 23:54
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 2-Medium

**Description (verbatim):**

> PFA for Record length and Data Rate
>
> Example:
>  Record length range is 0.1M to 10M
>
> When try to enter 1000000(1M) this value is not taking and it shows error pop-up as entered value is not in range


---

#### `AUTOE-1877` — UI- 1000 and 100BT Example Waveforms: are missing

- **Type:** Defect
- **Status:** Verified
- **Priority:** Minor
- **Reporter:** avarghes
- **Created:** 14-10-2020 04:29
- **Updated:** 14-09-2023 12:32
- **Resolved:** 29-10-2020 04:42
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> How to reproduce
> 1)Select 100 BT
> 2)Select prerecorded mode
> 3)Select acquisition
> 4)Check the Example Waveforms


---

#### `TEKEXPFW-4373` — Incorporate C# Sequencer related review comments from Sundar

- **Type:** Improvement
- **Status:** Verified
- **Priority:** Minor
- **Reporter:** AATREYA1
- **Created:** 01-09-2020 23:32
- **Updated:** 14-09-2023 11:58
- **Resolved:** 08-09-2020 23:24
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Refer the attached mails for more information:
> - C# style comments to be added for C# sequencer model/instrument interfaces in visual studio. Idea is consumer should get summary of the interface using Visual Studio intellisense.
> - List<string> to be converted to IEnumerable<string> return in SequencerModel. This will make sure the list is read-only not modifiable. 
> - IAppSetupPaths.ReportPath to b… [truncated]


---

#### `TEKEXPFW-4291` — [Prework] Improve Number pad with units prefix option (like in DPOJET)

- **Type:** Improvement
- **Status:** Verified
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 12-08-2020 03:43
- **Updated:** 14-09-2023 11:58
- **Resolved:** 01-09-2020 20:18
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 2-Medium

**Description (verbatim):**

> [Description]
> As a user, I should be able to enter values in different units. this is already supported TekDisplay control but TekExpress does not use this feature. TekExpress should enable units buttons so that user can enter values in other formats also.  T support units button analyze the tasks involved in it and changes required in different components.
>
> Acceptance criteria:
> 1. Analyze the sou… [truncated]


---

#### `GAR-4809` — [DP][PCIe] Instrument Bench default model selection and refresh issue

- **Type:** Defect
- **Status:** Verified
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 30-03-2023 11:59
- **Updated:** 26-03-2024 01:39
- **Resolved:** 10-04-2023 05:11
- **Resolution:** Fixed
- **Labels:** ClientApp-DP, ClientApp-PCIe

**Description (verbatim):**

> !image-2023-03-31-00-25-38-688.png|thumbnail! 
>
> 1. Go to Manage-> Add Test Bench->Add instrument
> 2. By default the instrument type is signal analyzer. There is no default model for it.
> 3. Change the instrument type to Probe. Some default probe models are populated in the dropdown.
> 4. Change Type back to Signal Analyzer. The probe model type remains and you cannot enter any model type for Real time… [truncated]


---

#### `GAR-4658` — When there is no app, test bench, the spinning progress is continuously spinning..

- **Type:** Defect
- **Status:** Verified
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 17-03-2023 05:02
- **Updated:** 01-05-2024 08:57
- **Resolved:** 30-03-2023 01:05
- **Resolution:** Fixed
- **Labels:** ClientApp-DP, ClientApp-PCIe

**Description (verbatim):**

> !image-2023-03-17-17-31-27-744.png|thumbnail! 
> When there is no app, test bench, the spinning progress is continuously spinning in that page..


---

### Status: Resolved (92)

#### `GAR-5417` — [TekFlow RAA UI/UX Issue] When we do not have unit for a measurement, in shows null in the result panel

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 31-05-2023 21:47
- **Updated:** 13-09-2023 19:40
- **Resolved:** 31-05-2023 22:45
- **Resolution:** Done
- **Labels:** ClientApp-DP

**Description (verbatim):**

> Some DisplayPort measurement do not have units. So the Unit field is kept empty. But is shows null in the results panel. This should be handled.
>
>  
>
> !image-2023-06-01-10-17-34-708.png!


---

#### `GAR-6354` — [UX] Display EVENT logs

- **Type:** Story
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** fana
- **Created:** 15-09-2023 02:37
- **Updated:** 24-01-2024 04:15
- **Resolved:** 06-10-2023 05:22
- **Resolution:** Done
- **Labels:** TestcaseNotRequired

**Acceptance Criteria (verbatim):**

> * Create UX design for displaying EVENT logs
>  * UX design should be documented

**Description (verbatim):**

> The logs screen is divided into 2 sections - 
> * User Logs(Event logs) which are meaningful to the user.
> * Advance Logs, which contains list of all the logs. 
>
>
> Figma link- 
>
> https://www.figma.com/proto/vUPfjobzSvWiMhLrs08Rrk/TekFlow-Design-System-Mar-31%2C-2023?page-id=628%3A27470&type=design&node-id=13572-159136&viewport=-27551%2C-12118%2C0.3&t=9uQXKcPvGFynFf6C-9&scaling=scale-down&starting-point… [truncated]


---

#### `GAR-5682` — Status Page Design with Phase2 UX

- **Type:** Story
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** apattar
- **Created:** 27-06-2023 06:03
- **Updated:** 13-09-2023 19:39
- **Resolved:** 02-08-2023 23:09
- **Resolution:** Done

**Description (verbatim):**

> Redesign the Tekflow status page using MVVM


---

#### `GAR-6319` — UX Design for Test Bench Module Issues

- **Type:** Task
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** u610666
- **Created:** 13-09-2023 22:52
- **Updated:** 02-11-2023 22:58
- **Resolved:** 02-11-2023 22:58
- **Resolution:** Done


---

#### `GAR-7178` — [Exploration & UX] Support for exponential value of settings and unit conversion

- **Type:** Story
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** fana
- **Created:** 13-12-2023 01:31
- **Updated:** 03-02-2024 05:51
- **Resolved:** 25-01-2024 04:19
- **Resolution:** Done
- **Labels:** TestcaseNotRequired

**Description (verbatim):**

> The UI has been updated to display values as their absolute values along with their respective units. This modification is implemented seamlessly without requiring any changes to the overall user experience(UX). Users can interact with the system in the same familiar way, and the adjustment is primarily cosmetic, providing a clearer representation of values without impacting core functionalities.


---

#### `GAR-5602` — [UX] Enable the user to view the descriptions defined at scenario and step level

- **Type:** Story
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** kemg
- **Created:** 23-06-2023 04:28
- **Updated:** 24-01-2024 04:18
- **Resolved:** 26-08-2023 05:03
- **Resolution:** Done
- **Labels:** TestcaseNotRequired

**Acceptance Criteria (verbatim):**

> Should enable a provision to display the Scenario and Step level descriptions.
>
> Should be inline with the TekFlow UI theme.

**Description (verbatim):**

> As a user, I should be able to view the descriptions defined in the Application at scenario and step level in the TekFlow UI.


---

#### `GAR-5309` — [UX-Design] As a user I want to test multiple lanes of DUT

- **Type:** Task
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** u625287
- **Created:** 24-05-2023 03:03
- **Updated:** 13-09-2023 19:40
- **Resolved:** 02-08-2023 02:03
- **Resolution:** Done

**Description (verbatim):**

> * Comeup with design to support the following usecases for multilane support in Tekflow. 
>
> *Use Cases*:
>  # As a Tester I should be able to run sequences from single technology for multiple lanes.
>  # As a Tester I should be able to run sequences from different technologies for multiple lanes.
>  # As a Tester I should be able to run sequences from single technology for different PVT conditions.
>  # As… [truncated]


---

#### `GAR-6823` — [GUI][API]Provide GUI option to download logs from GUI

- **Type:** Story
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** bhap
- **Created:** 10-11-2023 00:04
- **Updated:** 20-12-2023 04:47
- **Resolved:** 07-12-2023 22:08
- **Resolution:** Done
- **Labels:** Beta27

**Description (verbatim):**

> UX: [https://www.figma.com/proto/vUPfjobzSvWiMhLrs08Rrk/TekFlow-Design-System-Mar-31%2C-2023?page-id=628%3A27470&type=design&node-id=14128-245101&viewport=-37134%2C-17168%2C0.4&t=TVUp1ZMecNwTxOqr-9&scaling=min-zoom&starting-point-node-id=14128%3A245101&show-proto-sidebar=1]
>
>  
>
> Number of records it should download at a time when enough number of logs available are 20K records(20K number of records… [truncated]


---

#### `GAR-6414` — GUI test automation

- **Type:** Task
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** bhap
- **Created:** 26-09-2023 22:58
- **Updated:** 10-10-2023 21:28
- **Resolved:** 10-10-2023 21:28
- **Resolution:** Done


---

#### `GAR-4785` — Performance testing of GUI

- **Type:** Task
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** bhap
- **Created:** 29-03-2023 06:22
- **Updated:** 13-09-2023 19:40
- **Resolved:** 25-04-2023 22:58
- **Resolution:** Done

**Description (verbatim):**

> > Test performance across all pages  and log defects if any page update takes more time


---

#### `GAR-4160` — Automate new GUI features

- **Type:** Task
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** bhap
- **Created:** 18-01-2023 09:04
- **Updated:** 13-09-2023 19:41
- **Resolved:** 01-02-2023 05:02
- **Resolution:** Done

**Description (verbatim):**

> Add and Automate the test cases of below
> 1>Result panel
> 2> Dashboard 
> 3> Limit editors 
> 4> Lanes and sources
> 5> Interrupt handling or any other feedback GUI demo 
> 6> Connection Diagram
> 7> Sequence, Scenario level abort/Pause
>
> Acceptance criteria:
> 1> Automate all test cases specified in sub tasks
> 2>Validate response body content for all supported requests test cases
> 3> Execute the tests on atleast… [truncated]


---

#### `GAR-6392` — Beta23 - Feature testing GUI and  API

- **Type:** Task
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** bhap
- **Created:** 21-09-2023 01:56
- **Updated:** 10-10-2023 21:28
- **Resolved:** 10-10-2023 21:28
- **Resolution:** Done


---

#### `GAR-5315` — Automate the automatable GUI test cases

- **Type:** Task
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** pbaik
- **Created:** 24-05-2023 03:14
- **Updated:** 13-09-2023 19:40
- **Resolved:** 07-06-2023 22:48
- **Resolution:** Done

**Description (verbatim):**

> Automate the newly added GUI test cases


---

#### `GAR-5170` — Improve GUI automation coverage to 80%

- **Type:** Task
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** bhap
- **Created:** 10-05-2023 19:36
- **Updated:** 13-09-2023 19:40
- **Resolved:** 23-05-2023 21:32
- **Resolution:** Done

**Description (verbatim):**

> Automate GUI test cases and improve the coverage to 80%


---

#### `GAR-3718` — Application setting GUI cosmatic issues

- **Type:** Improvement
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** bhap
- **Created:** 05-11-2022 04:15
- **Updated:** 14-09-2023 12:14
- **Resolved:** 05-12-2022 06:58
- **Resolution:** Fixed

**Description (verbatim):**

> Setting GUI controls UI issues
>  Step:
>  1> Login to 172.19.211.237:4200/login VM with valid credentials
>  2> Select 'Test Menu'
>  3> Click on 'Add Test'. Click on 'IMPORT SEQUENCE'
>  4> Select Sequence1(DP). 
>  5> Click on Setting. Selete 'General' in left navigation panel.
>  Observations:
>  a> Maximum Re-Acquisition on Fail Limit: It takes negative value as well. It should not. And limit is not defined… [truncated]


---

#### `GAR-3972` — Automate all GUI features(Sprint30, Sprint29)

- **Type:** Task
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** bhap
- **Created:** 07-12-2022 07:41
- **Updated:** 14-09-2023 08:20
- **Resolved:** 02-01-2023 07:50
- **Resolution:** Done

**Description (verbatim):**

> 1. Create test plan
> 2. Add Test Cases
> 3. Automate
> following User story:
> GAR-3555
> GAR-3557
> GAR-3559
> GAR-3535
> GAR-3534


---

#### `GAR-5316` — Run and Analyze the daily GUI test run

- **Type:** Task
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** pbaik
- **Created:** 24-05-2023 03:20
- **Updated:** 13-09-2023 19:40
- **Resolved:** 06-06-2023 09:56
- **Resolution:** Done

**Description (verbatim):**

> Run a GUI test cases in jenkins
> Analyze failed test case
> If defect log issue in jira
> if Test case defect -> Modify the test case


---

#### `GAR-4782` — Test report related changes - API and GUI

- **Type:** Task
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** bhap
- **Created:** 29-03-2023 06:16
- **Updated:** 13-09-2023 19:40
- **Resolved:** 03-04-2023 21:37
- **Resolution:** Done

**Description (verbatim):**

> > Test with old Report template
> > Test client app tests with client app report template
> > Test Custom logo with large custom logo


---

#### `GAR-4362` — Add test case, Manually test it and Automate GUI features

- **Type:** Task
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** bhap
- **Created:** 14-02-2023 23:05
- **Updated:** 13-09-2023 19:40
- **Resolved:** 01-03-2023 01:43
- **Resolution:** Done


---

#### `GAR-3863` — Add quality plans to GUI tasks and write use cases for the same

- **Type:** Task
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** bhap
- **Created:** 22-11-2022 08:31
- **Updated:** 14-09-2023 08:20
- **Resolved:** 07-12-2022 02:08
- **Resolution:** Done


---

#### `GAR-4472` — Verify GUI related defects, add test cases and automate the same

- **Type:** Task
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** bhap
- **Created:** 28-02-2023 19:25
- **Updated:** 13-09-2023 19:40
- **Resolved:** 14-03-2023 21:43
- **Resolution:** Done


---

#### `GAR-6398` — QG2 tests execution and analyze any failures(SDK, API and GUI) fo Beta release

- **Type:** Task
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** bhap
- **Created:** 21-09-2023 02:47
- **Updated:** 21-11-2023 10:09
- **Resolved:** 21-11-2023 10:09
- **Resolution:** Done


---

#### `GAR-1918` — [Design]As a UI module, I should be able design logging page UI

- **Type:** Story
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** agupta8
- **Created:** 05-04-2022 00:57
- **Updated:** 13-09-2023 19:41
- **Resolved:** 10-05-2022 21:57
- **Resolution:** Done

**Acceptance Criteria (verbatim):**

> Discuss and design the logging page for UI

**Description (verbatim):**

> This story is to come up with a logging page design of the UI and to review it with the team.
>
> It will not have any input and output.


---

#### `GAR-5126` — UI response improvements

- **Type:** Story
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** apattar
- **Created:** 08-05-2023 01:06
- **Updated:** 19-09-2023 04:14
- **Resolved:** 14-06-2023 05:17
- **Resolution:** Done

**Description (verbatim):**

> Analyze and fix the current issues related to UI responsiveness. These are the open issues which is open in Jira
>
>
> https://swt-bv-alm-1.global.tektronix.net:8443/jira/browse/GAR-5352
>
> Notification API and sequence called in a loop
>
> https://swt-bv-alm-1.global.tektronix.net:8443/jira/browse/GAR-5395
>
> https://swt-bv-alm-1.global.tektronix.net:8443/jira/browse/GAR-5396


---

#### `GAR-1242` — Refactoring/Refurbishment of UI codebase

- **Type:** New Feature
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** sbhushan
- **Created:** 06-01-2022 03:30
- **Updated:** 13-09-2023 19:41
- **Resolved:** 04-09-2022 21:15
- **Resolution:** Done


---

#### `GAR-4215` — Refactoring Add Test UI

- **Type:** Story
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** u619415
- **Created:** 19-01-2023 19:01
- **Updated:** 13-09-2023 19:40
- **Resolved:** 29-01-2023 23:25
- **Resolution:** Done

**Acceptance Criteria (verbatim):**

> 1> Test settings should be saved as test settings as draft. Currently its saving has sequence
> 2> Save and Save As buttons are not required.
> 3> Delete All and Cancel buttons are not required
> 4> Acquisitions settings should be at global settings level
> 5> Title Link of "RunTest" is not prominent.
> 6> All CSS changes


---

#### `GAR-4091` — New UI font and refactoring issues

- **Type:** Task
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** u616478
- **Created:** 05-01-2023 21:34
- **Updated:** 13-09-2023 19:41
- **Resolved:** 17-01-2023 23:03
- **Resolution:** Done


---

#### `GAR-6929` — Test bench [UI] review comments

- **Type:** Story
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** u621009
- **Created:** 26-11-2023 20:22
- **Updated:** 24-01-2024 04:14
- **Resolved:** 05-12-2023 20:17
- **Resolution:** Done
- **Labels:** Beta27, TestcaseNotRequired


---

#### `GAR-5310` — Enhance the UI comments in report generation

- **Type:** Story
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** u621009
- **Created:** 24-05-2023 03:05
- **Updated:** 13-09-2023 19:40
- **Resolved:** 31-05-2023 21:41
- **Resolution:** Done

**Acceptance Criteria (verbatim):**

> limit the character and show in X/Y form.
>
> Remove the outside scroll bar of the text box and fix the length of the textbox.
>
> adjust the CSS


---

#### `GAR-4654` — Beta 15 testing API and UI

- **Type:** Task
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** u612584
- **Created:** 16-03-2023 21:38
- **Updated:** 13-09-2023 19:40
- **Resolved:** 27-03-2023 21:54
- **Resolution:** Done


---

#### `GAR-4295` — Security utility integration with new ui

- **Type:** Task
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** u616478
- **Created:** 01-02-2023 22:50
- **Updated:** 13-09-2023 19:40
- **Resolved:** 12-02-2023 22:18
- **Resolution:** Done
- **Labels:** NewGUI


---

#### `GAR-2571` — Passing the UI settings to DUT Automator

- **Type:** Story
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** sacb
- **Created:** 06-06-2022 03:48
- **Updated:** 14-09-2023 08:04
- **Resolved:** 23-08-2022 06:37
- **Resolution:** Done
- **Labels:** ClientApp-USB4

**Description (verbatim):**

> From UI we need to pass the user input to the Automator.


---

#### `GAR-4512` — Beta 14 New UI defect fixes

- **Type:** Task
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** u616478
- **Created:** 05-03-2023 20:48
- **Updated:** 13-09-2023 19:40
- **Resolved:** 12-03-2023 21:31
- **Resolution:** Done


---

#### `GAR-3776` — Rework on the UI of the previous test sequence page

- **Type:** Task
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** u616478
- **Created:** 13-11-2022 20:18
- **Updated:** 14-09-2023 08:20
- **Resolved:** 14-11-2022 20:34
- **Resolution:** Done


---

#### `GAR-3636` — Develop base UI for the settings dialog box

- **Type:** Task
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** u616478
- **Created:** 14-10-2022 05:13
- **Updated:** 14-09-2023 08:20
- **Resolved:** 18-10-2022 01:32
- **Resolution:** Done


---

#### `GAR-4296` — Beta 14 New UI defect fixes

- **Type:** Task
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** u616478
- **Created:** 01-02-2023 22:51
- **Updated:** 13-09-2023 19:40
- **Resolved:** 14-02-2023 20:58
- **Resolution:** Done
- **Labels:** NewGUI


---

#### `GAR-7535` — Run UI QG2 test script daily

- **Type:** Task
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** bhap
- **Created:** 29-01-2024 21:09
- **Updated:** 29-02-2024 08:09
- **Resolved:** 28-02-2024 21:26
- **Resolution:** Done


---

#### `GAR-5853` — Create list of components to be added to the component repository in the UI

- **Type:** Task
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** u616478
- **Created:** 20-07-2023 00:07
- **Updated:** 13-09-2023 19:39
- **Resolved:** 31-07-2023 22:47
- **Resolution:** Done

**Description (verbatim):**

> Link to document:
>
> [UI-Component-lib.docx|https://fortive-my.sharepoint.com/:w:/g/personal/souraj_mukhopadhyay_tektronix_com/Ebh_LMzFmgxDtApXSjhO0eEBzcVaHRlQyElYGB6zSSQkkA?e=WBPt2p]


---

#### `GAR-3713` — Implement the filters in the test list screen from the Ui

- **Type:** Story
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** u616478
- **Created:** 03-11-2022 21:32
- **Updated:** 14-09-2023 08:20
- **Resolved:** 09-11-2022 04:52
- **Resolution:** Done


---

#### `GAR-4247` — Multiple rows in results panel are not shown in new UI

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** kmishra
- **Created:** 30-01-2023 22:11
- **Updated:** 13-09-2023 19:40
- **Resolved:** 28-02-2023 22:48
- **Resolution:** Done
- **Labels:** ClientApp-DPHY

**Description (verbatim):**

> Multiple rows in results panel are not shown in new UI.
>
> !image-2023-01-31-11-41-10-256.png!
>
> !image-2023-01-31-11-42-21-609.png!


---

#### `GAR-5097` — [UI]Enable third party measurement generated plots

- **Type:** Story
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** apattar
- **Created:** 08-05-2023 01:05
- **Updated:** 13-09-2023 19:40
- **Resolved:** 24-05-2023 03:26
- **Resolution:** Done

**Acceptance Criteria (verbatim):**

> Acceptance Criteria:
>  1> Image file form third party plots to be shown in view results.
>  2> Image file form third party plots to be shown in reports
>  3> Should support all image file formats(.png, .bmp, jpeg, gif)
>  4> Interactions- Zoom in, zoom out.
>
> Limitation:
> PAMJet generated eye diagram(Eye diagram generated for different 4 voltage levels)

**Description (verbatim):**

> As a user, I want to view plots generated by third party measurements in the GUI, API(results attachments) to visualize the results in graphical view.
>  One such example is sigtest plot image in the GUI(sigTest generated eye diagram plot in GUI). These are .png files outputted by Sigtest.
>
>  
>
> Limitations:
>
> 1. Only Sigtest based images will be supported.


---

#### `GAR-5248` — Restrict client_credentials grant type for the ui_client

- **Type:** Task
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** u616478
- **Created:** 17-05-2023 05:40
- **Updated:** 13-09-2023 19:40
- **Resolved:** 18-05-2023 07:42
- **Resolution:** Done


---

#### `GAR-1501` — [UI] Need to convey the right info for the failure scenarios

- **Type:** Story
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** ykontham
- **Created:** 25-02-2022 05:17
- **Updated:** 14-09-2023 10:35
- **Resolved:** 01-09-2022 08:38
- **Resolution:** Duplicate

**Description (verbatim):**

> Need to convey the right info for the failure scenarios. We should show some some logs so that customer should know the reason for the failures


---

#### `GAR-7431` — CLONE - [USB4v2-Tx] Not able to login to Clarius UI for the first time

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** sups
- **Created:** 22-01-2024 00:52
- **Updated:** 18-03-2024 07:12
- **Resolved:** 25-01-2024 04:16
- **Resolution:** Fixed

**Description (verbatim):**

> steps to reproduce:
>  # uninstalled TekFlow platform, AS installed on the VM
>  # deleted TekFlow folder form ProgramData
>  # freshly installed Clarius 1.0.0 Master 64 build
>  # after installed successful, launched UI
>
> Observation: could not login to UI as it was throwing "Client Error" as in the attachment.
>
> We tried clearing browsing history, cache, and others as in the attached screenshot. after tha… [truncated]


---

#### `GAR-5086` — User should have an option to download the CSV results through UI.

- **Type:** Story
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** apattar
- **Created:** 08-05-2023 01:05
- **Updated:** 13-09-2023 19:40
- **Resolved:** 24-05-2023 01:50
- **Resolution:** Done

**Acceptance Criteria (verbatim):**

> *Pre-Requisites:*
>  # Design for providing option to download CSV results (figma) is reviewed.
>  # API available for fetching the CSV results.
>
> *Acceptance Criteria:-*
>
>       1. Should be able to specify the output format as CSV.
>        2. Should be able to download CSV format results.
>        3. Should notify the user with appropriate error messages in case of any failures

**Description (verbatim):**

> As a user, I should have an option to download the generated CSV results through UI which can be used for further data analytics.
>
>  
>
> *Background:-*
>
> There are use cases where the user has to run large number of tests. It would be a tedious process for the user to analyze the results of all these tests using results generated in the pdf format. Hence, providing an option to generate the results in… [truncated]


---

#### `GAR-4688` — DPHY Cache issue: Application getting listed multiple times in UI.

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** kmishra
- **Created:** 21-03-2023 05:17
- **Updated:** 14-09-2023 13:17
- **Resolved:** 10-04-2023 21:11
- **Resolution:** Cannot Reproduce
- **Labels:** ClientApp-DPHY

**Description (verbatim):**

> Email is attached which has issue details.
>
> Request you to assign it to Dev-Ops if it is issue on deployment.
>
> Cache issue: Kavitha will include Mahesha in email. Need to decide on if it is deployment issue or FW side. This is with respect to beta 14 deployment on Pascal's system.


---

#### `GAR-4765` — Settings- When clicked on dropdown, all the ui controls are moved down

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** pbaik
- **Created:** 28-03-2023 22:10
- **Updated:** 14-09-2023 12:14
- **Resolved:** 14-04-2023 01:01
- **Resolution:** Fixed

**Description (verbatim):**

> !image-2023-03-29-10-39-54-632.png|thumbnail!


---

#### `GAR-3777` — UI to show the Steps in when clicked on the dropdown icon on the test sequence sceen

- **Type:** Task
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** u616478
- **Created:** 13-11-2022 20:22
- **Updated:** 14-09-2023 08:20
- **Resolved:** 16-11-2022 23:35
- **Resolution:** Done


---

#### `GAR-5088` — [UI] As a user, I should be able to download the waveforms of a test/scenario/step

- **Type:** Story
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** apattar
- **Created:** 08-05-2023 01:05
- **Updated:** 13-09-2023 19:40
- **Resolved:** 22-06-2023 08:50
- **Resolution:** Done

**Acceptance Criteria (verbatim):**

> 1. Design for providing option to download waveforms of a test is reviewed (figma)
> 2. Should provide option to download waveforms of a test 
> 3. Should provide option to download waveforms of a scenario in a test 
> 4. Should provide option to download waveforms of a step in a test
> 5. Should give validation messages in case of any failures

**Description (verbatim):**

> UI should provide option for users to generate and download waveforms for debug purpose


---

#### `GAR-4466` — Fix all the defect captured from quality - UI excel sheets defect fixing

- **Type:** Task
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** sacb
- **Created:** 28-02-2023 18:37
- **Updated:** 13-09-2023 19:40
- **Resolved:** 28-02-2023 20:46
- **Resolution:** Done


---

#### `GAR-3449` — Syntax to set the Data Object for Burst Detection region visibility in UI is not working as expected

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** arck
- **Created:** 21-09-2022 05:58
- **Updated:** 14-09-2023 08:02
- **Resolved:** 25-09-2022 22:04
- **Resolution:** Done
- **Labels:** ClientApp-LPDDR4

**Description (verbatim):**

> Used the below mention field for Data Object and still BD related in UI is visible.


---

#### `GAR-4978` — showing more then 8 decimals for few measurements at APP (LPDDR4) level in Results UI.

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** u615732
- **Created:** 26-04-2023 03:17
- **Updated:** 26-03-2024 05:19
- **Resolved:** 28-04-2023 02:44
- **Resolution:** Fixed
- **Labels:** Client-App-LPDDR4

**Description (verbatim):**

> showing more than 8 decimals for few measurements at APP (LPDDR4) level in Results UI for few measurements, Image attached. (we can see for Vindiff_low Measurement)
>
> test id: [Tekflow|http://pc-bang-12860j3:4200/tekflow/test/results/cbacaa41-1d61-43c7-977e-637970505c1c]
>
> Two defects are identified as part of this issue:
>  # For single iteration, cumulative results are re-calculated. Hence there is… [truncated]


---

#### `GAR-7151` — [Exploration] ui-service updates for nginx configuration updates when IP of VM changes dynamically

- **Type:** Story
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** apattar
- **Created:** 11-12-2023 22:46
- **Updated:** 25-01-2024 06:54
- **Resolved:** 04-01-2024 20:41
- **Resolution:** Done
- **Labels:** TestcaseNotRequired


---

#### `GAR-7169` — [Implementation] ui-service updates for nginx configuration updates when IP of VM changes dynamically

- **Type:** Story
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** u616478
- **Created:** 12-12-2023 22:29
- **Updated:** 30-01-2024 09:56
- **Resolved:** 30-01-2024 09:56
- **Resolution:** Done
- **Labels:** Beta28


---

#### `GAR-4145` — As a user I should be able define visibility of settings, results, steps for UI and report purpose

- **Type:** Story
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** magl
- **Created:** 17-01-2023 19:05
- **Updated:** 13-09-2023 19:41
- **Resolved:** 23-03-2023 21:33
- **Resolution:** Done

**Acceptance Criteria (verbatim):**

> * Add internal field to settings
>  * Add internal field to results
>  * Add internal field to steps
>  * Update SDK to handle these


---

#### `GAR-3395` — As a user I should be able to login to tekflow UI with my credentials and access the features according to my roles

- **Type:** Story
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** u619415
- **Created:** 13-09-2022 00:47
- **Updated:** 14-09-2023 08:03
- **Resolved:** 27-09-2022 00:55
- **Resolution:** Done

**Acceptance Criteria (verbatim):**

> 1. validate credentials and allow login
> 2. inform user if credentials are not valid
> 3. load menus according to roles.
> 4. Store token securely

**Description (verbatim):**

> user should be able to enter the credentials provided and login to tekflow UI


---

#### `GAR-7632` — [USB4V2]: UI got frozen on closing the error popup. when run button is clicked without selecting internal applications

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** ykontham
- **Created:** 06-02-2024 07:37
- **Updated:** 14-02-2024 06:56
- **Resolved:** 08-02-2024 20:54
- **Resolution:** Fixed
- **Labels:** Client-App-USB4V2

**Description (verbatim):**

> Steps To Reproduce:
>  * Click on Add test
>  * Enter Name filed
>  * Select Test bench, Technology: "TX USB", Application: "USB4V2"
>  * Select Add Sequence button
>  * Select Lane coniguration
>  * Select Grouping panel
>  * Select Add Group button
>  * Select Lane option in Group1 dropdown
>  * Click on Apply
>  * Goto Global settings
>  * Goto Acquisition 
>  * Select Recorded mode
>  * Select Apply
>  * Select any one m… [truncated]


---

#### `GAR-4592` — Manage Users- Clicking submit button with invalid full name and again clicking submit button by clearing the full name, user is not getting created and on refresh the Ui is scattered

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** pbaik
- **Created:** 14-03-2023 22:46
- **Updated:** 14-09-2023 12:14
- **Resolved:** 17-03-2023 05:54
- **Resolution:** Fixed

**Description (verbatim):**

> 1. go to http://172.19.211.237:4200/tekflow/user/users
> 2.  click 'Add User'
> 3.  enter user name
> 4. enter password
> 5. enter confirm password
> 6. enter invalid Full name - 992876
> 7. click submit button - > observe "please enter a valid full name' message below textbox
> 8. Clear the full name
> 9. click on submit -> observe user is not getting created
> 10. refresh page -> observe the UI is scattered


---

#### `TEDIBCI-8086` — [DisplayPort-Tx] DP14 and DP21 dlls are missing when DisplayPort build is installed

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** mtatiche
- **Created:** 11-09-2023 05:57
- **Updated:** 09-12-2023 10:05
- **Resolved:** 12-09-2023 21:01
- **Resolution:** Done
- **Labels:** ClientApp-DP, PI-2

**Description (verbatim):**

> Install the TF platform build of version beta22
>
> Install the compatible DP build on top of it. 
>
> Observation:
>
> DP build has some of the dlls missing upon installation.


---

#### `GAR-3912` — Import sequence popup

- **Type:** Task
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** u616478
- **Created:** 01-12-2022 09:36
- **Updated:** 14-09-2023 08:20
- **Resolved:** 06-12-2022 07:29
- **Resolution:** Done
- **Labels:** UI


---

#### `GAR-4044` — User Profile - Manage User Section

- **Type:** Task
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** u616478
- **Created:** 21-12-2022 20:38
- **Updated:** 13-09-2023 19:41
- **Resolved:** 24-05-2023 02:30
- **Resolution:** Done
- **Labels:** UI


---

#### `GAR-3137` — [Displayport] Support for User Defined mode for DP application

- **Type:** Story
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 20-07-2022 05:18
- **Updated:** 14-09-2023 08:03
- **Resolved:** 13-09-2022 01:03
- **Resolution:** Done
- **Labels:** ClientApp-DP


---

#### `GAR-3136` — Summary Table in report

- **Type:** Story
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 20-07-2022 05:08
- **Updated:** 29-01-2024 00:49
- **Resolved:** 31-08-2022 22:54
- **Resolution:** Duplicate
- **Labels:** ClientApp-DP

**Description (verbatim):**

> Qualcomm has requested to put a summary table with the measurement and the pass/fail status in report.


---

#### `OUI-827` — Support BCI team in bringing up OUI build from TEDI

- **Type:** Task
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 14-06-2019 04:20
- **Updated:** 13-09-2023 19:09
- **Resolved:** 10-07-2019 01:40
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Support BCI team in bringing up OUI build from TEDI


---

#### `HDMI-4450` — HDMI 2.0 - UI configuration changes for EDID

- **Type:** Story
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** avan
- **Created:** 19-02-2020 04:42
- **Updated:** 13-09-2023 19:37
- **Resolved:** 27-02-2020 21:26
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> UI changes required for the automation of EDID.
>
> Input : Resolution ex: [VIC 97] 720x480p@60Hz 8 bit RGB 
> Requires to be added in the XML and should be displayed in the drop down
>
> Place:
> DUT panel
> Go to View-> Select Compliance (Check for configuration panel getting enabled)
> *Make Compliance as default*
>
> Go to Confiuguration Panel -> Create a drop down with description as 'Resolution'
> Values in th… [truncated]


---

#### `MIPIMPHYTX-1708` — UI changes as proposed for YMTC requirement

- **Type:** Task
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 17-10-2019 22:40
- **Updated:** 14-09-2023 07:53
- **Resolved:** 30-10-2019 01:45
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Refer the attached document for the proposal.


---

#### `OUI-906` — Update coherent documents

- **Type:** Task
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 16-10-2019 22:29
- **Updated:** 13-09-2023 19:09
- **Resolved:** 29-10-2019 23:20
- **Resolution:** Done
- **Labels:** UI
- **Business Value:** 80

**Description (verbatim):**

> 1. OUI, LRCP, SSU and  Receiver Test versions should be included in the release notes.
>  * OUI 2.3.0.7655
>  * LRCP 2.3.0.7655
>  * SSU (Win10) 2.3.0.7655
>  * Receiver Test 3.0.0.7633
>
> 2. Updated User Manual 
>
> 3. The OUI directory includes "OUI Installation Instructions V2.1.0.pdf". This is the very outdated instructions from that release of the software from 2015. We had a newer version of the instruct… [truncated]


---

#### `OUI-353` — Wrong message in Compensation Filter function.

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** hoye
- **Created:** 10-01-2019 15:33
- **Updated:** 14-09-2023 12:39
- **Resolved:** 11-01-2019 02:12
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Import "OMA Compensation Filter File",  "Your Calibration files have been successfully copied." message shows up after compensation file is copied.


---

#### `DPOJET-4009` — Main Panel Config Buttons implimentation

- **Type:** Task
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** u625297
- **Created:** 20-04-2023 21:41
- **Updated:** 14-09-2023 08:28
- **Resolved:** 27-04-2023 22:48
- **Resolution:** Done
- **Labels:** UI


---

#### `DPOJET-4008` — Complete Rise and Fall Panel and Canvas Plots

- **Type:** Task
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** u625297
- **Created:** 20-04-2023 21:36
- **Updated:** 14-09-2023 08:28
- **Resolved:** 08-05-2023 04:05
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> # Add all the images and tables for the Rise and Fall panel.
>  # Add Canvas to Full Wfm Panel and Avg.Wfm Panel.


---

#### `MIPIMPHYTX-1620` — Implement UI changes for supporting 19.2MHz clock frequency for SYS mode measurements

- **Type:** Developer Story
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** PUNP
- **Created:** 07-08-2019 22:22
- **Updated:** 14-09-2023 07:53
- **Resolved:** 20-08-2019 22:25
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Acceptance:
>  # I should be able to select 19.2MHz freq from DUT panel in Sys mode
>  # Sys mode measurements should support 19.2Mhz related acquire/analyze parameters
>  # I should be able to run SYS mode measurements with 19.2MHz
>  # Results should pass as expected
>
> Doneness
>   1. Add Testcase
>   2. PRTI


---

#### `DCG-375` — Avengers KT for UI development

- **Type:** Developer Story
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 22-01-2020 21:09
- **Updated:** 13-09-2023 20:18
- **Resolved:** 04-02-2020 20:29
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Acceptance criteria:
>  * Setup development environment
>  * Compile code successfully for debugging
>  * Understand WPF concepts
>  * Complete assignments
>  * Basic understanding of code flow


---

#### `MIPIMPHYTX-1581` — Test report for informative tests should mention Test type as Informative

- **Type:** Task
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 24-07-2019 21:38
- **Updated:** 14-09-2023 07:53
- **Resolved:** 30-07-2019 01:43
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> As part of MIPIMPHYTX-1523, after run the report should mention test type as Informative.
>
> If not so, report a bug and we will work on it.


---

#### `GAR-4589` — [DP/PCIe] Use N.A. instead of Min/Max/Std.Dev texts

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 14-03-2023 08:57
- **Updated:** 13-09-2023 19:40
- **Resolved:** 16-03-2023 20:37
- **Resolution:** Done
- **Labels:** ClientApp-DP

**Description (verbatim):**

> !image-2023-03-14-21-24-07-280.png|thumbnail! 
>
> For results that do not have Min/Max/ Standard Deviation use N.A. It is confusing when you see the results. The header and value are same.


---

#### `GAR-5269` — Add "i" button in each of the limits to show the description about that limit

- **Type:** Task
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** u616478
- **Created:** 19-05-2023 06:22
- **Updated:** 13-09-2023 19:40
- **Resolved:** 23-05-2023 05:53
- **Resolution:** Done
- **Labels:** UI


---

#### `OUI-76` — Single ATI Tabasco channel anchors don't match image

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** sbrokaw
- **Created:** 14-09-2018 11:00
- **Updated:** 13-09-2023 19:09
- **Resolved:** 23-11-2018 01:27
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> The image for a single ATI tabasco shows the channels in the incorrect location. They should be 2->1->3
>  !image-2018-09-14-11-00-31-160.png|thumbnail!


---

#### `OUI-295` — As a researcher, I can create, delete, and select different analysis parameters

- **Type:** Story
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 18-12-2018 12:26
- **Updated:** 13-09-2023 19:09
- **Resolved:** 13-01-2019 22:27
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> Analysis parameters are set of parameters that are sent by OUI to MATLAB.
>
> MATLAB will use these parameters to analyse the waveform data captured from scope.
>
> From OUI, user should be able to create, delete or select different analysis parameters.
>
> Acceptance criteria:
>  # I can create a new analysis parameters with default values.
>  # I can create a copy of current analysis parameters
>  # I can dele… [truncated]


---

#### `BRR-1561` — Selecting/Deselecting of the test and test suite for 100/1000 base-t1 take time

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** jdomadiy
- **Created:** 23-05-2018 21:56
- **Updated:** 14-09-2023 13:19
- **Resolved:** 10-09-2019 02:49
- **Resolution:** Cannot Reproduce
- **Labels:** UI

**Customer Impact (verbatim):**

> 1-High

**Description (verbatim):**

> Launch the build 1.2.0.136. ( Observation is check on MSO5 series scope.Same can be check for terminator scope as well.) 
>
> Select the Suite 100 base-t1. 
>
> Observation 1 :  It is taking some time to switch.
>
> Now go to test Selection and Press DeselectAll.
>
> Observation 2: It is taking time and observed , white screen in test selection area. 
>
> ==
>
> Update 10-Aug-18:
>
> TE FW populates the UI panels base… [truncated]


---

#### `DP-2439` — MSI Feedback - TekExpress DisplayPort application could not save DPR-100 License number.

- **Type:** Story
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** kavin
- **Created:** 06-06-2018 23:21
- **Updated:** 13-09-2023 20:05
- **Resolved:** 18-06-2018 23:07
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> TekExpress DisplayPort application could not save DPR-100 License number. If uses different DPR-100 instrument, we need enter License number, again. Please modify function to save it.
>
>  
>
> Please refer the attachment for details


---

#### `OUI-221` — Scope and optical receiver anchor points accept multiple connections in OMA setup.

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** vbalan
- **Created:** 19-11-2018 02:24
- **Updated:** 14-09-2023 12:39
- **Resolved:** 17-12-2018 20:55
- **Resolution:** Fixed
- **Labels:** UI

**Customer Impact (verbatim):**

> 2-Medium

**Description (verbatim):**

> Refer the attached image.
>
> Multiple output ports of optical receiver are allowed to connect to single scope channel. ex: YQ, YI and XQ are connected to Ch1 of scope in attached image.
>
> Similarly single output port of receiver are allowed to connect to multiple scope channels. ex: XI is connected to Ch3 and Ch4.
>
> Expected: Each input port of scope should accept only one connection from optical rece… [truncated]


---

#### `CIND-17` — User feedback about the UI when 400G-M4 has an exception with the DSA.

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** STUNES
- **Created:** 04-05-2018 15:54
- **Updated:** 14-09-2023 14:04
- **Resolved:** 18-04-2019 10:48
- **Resolution:** Will Not Fix
- **Labels:** UI

**Description (verbatim):**

> From Hang
>
> It's time to report the issue to you.
>
>  
>
> We keep getting feedback (or should say complain) about the UI of Cinderella. When Cinderella has an exception with the DSA (such as a customer forget to turn off the WfmDB of the DSA) Cinderella’s UI will block there. The software does not crash could be even controlled by PI but the “Run” button has no function unless exit the Cinderella and r… [truncated]


---

#### `RNBAST-461` — Add support for the P7700 Probe and its SMA adapter

- **Type:** New Feature
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** michaelj
- **Created:** 04-05-2017 15:53
- **Updated:** 13-09-2023 18:48
- **Resolved:** 06-08-2018 04:29
- **Resolution:** Done
- **Labels:** UI


---

#### `DP-2428` — Allow user to choose all combination or minimum combination for running TJ in Advanced mode

- **Type:** Story
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** vsiddhar
- **Created:** 15-05-2018 00:24
- **Updated:** 13-09-2023 20:05
- **Resolved:** 22-05-2018 21:41
- **Resolution:** Done
- **Labels:** UI

**Description (verbatim):**

> {panel}
> 1. Add two check boxes in Analyze tab in config panel for TJ measurement which allows user to choose All combination or minimum combination. This should be visible only in advanced mode.
> {panel}


---

#### `RKRCRT-32` — Not able to Select Create report automatically at the end ot the run, Addlogo to Report check boxes and in any run, any session radio button in Report Panel

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** AKAC
- **Created:** 20-09-2017 23:47
- **Updated:** 14-09-2023 12:31
- **Resolved:** 22-09-2017 00:15
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Throwing TekExpress Error "'True' is not a valid parameter", when we Select Create report automatically at the end at the run, Add logo to Report check boxes and in any run, any session radio button in Report Panel.
>
> Please find attached screenshot.


---

#### `BRR-459` — Tx_Distortion test's Configuration is falshing

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** jdomadiy
- **Created:** 04-02-2016 19:50
- **Updated:** 14-09-2023 12:50
- **Resolved:** 10-09-2019 02:51
- **Resolution:** Fixed
- **Labels:** UI

**Description (verbatim):**

> Select Tx_Distortion
> * Go to Configuration 
> * Select Calibration
> *  BRR Calibration window is flashing.


---

#### `BRR-321` — in Acquisitions tab: AWG Series in not displaying the Name of AWG/AFG

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** jdomadiy
- **Created:** 22-12-2015 19:18
- **Updated:** 14-09-2023 14:06
- **Resolved:** 11-09-2019 10:20
- **Resolution:** Will Not Fix
- **Labels:** AutoE_Dependency, UI

**Description (verbatim):**

> in Acquisitions tab: AWG Series in not displaying the Name of AWG/AFG
>
> As per OLH, it should display the Nmae of AWG/AFG.


---

#### `BRR-319` — in Acquisition tab: Test name & Acquisition colum look same

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** jdomadiy
- **Created:** 22-12-2015 02:48
- **Updated:** 14-09-2023 14:06
- **Resolved:** 11-09-2019 10:20
- **Resolution:** Will Not Fix
- **Labels:** AutoE_Dependency, UI

**Description (verbatim):**

> in Acquisition tab: Test name & Acquisition colum look same.
>
> See the attached screen


---

#### `GAR-4674` — [DP/PCIe] [Beta-14] Some page loads takes time without showing any load/progress status.

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 20-03-2023 13:19
- **Updated:** 22-02-2024 21:18
- **Resolved:** 22-02-2024 21:18
- **Resolution:** Done
- **Labels:** ClientApp-DP, ClientApp-DP-PI3-Issue, ClientApp-DP-Stabilization, ClientApp-PCIe

**Description (verbatim):**

> Some pages like _Manage->Sequences_ takes time to load without showing any loading/progress status.


---

#### `GAR-3637` — Mechanism to dynamically create input field for settings from settings.json file

- **Type:** Task
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** u616478
- **Created:** 14-10-2022 06:08
- **Updated:** 14-09-2023 08:20
- **Resolved:** 27-10-2022 04:55
- **Resolution:** Done
- **Labels:** UI


---

#### `GAR-4902` — [DP/PCIe] Interdependent settings issue to show/hide control

- **Type:** Defect
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** tparua
- **Created:** 12-04-2023 05:59
- **Updated:** 14-09-2023 12:14
- **Resolved:** 14-04-2023 01:02
- **Resolution:** Fixed
- **Labels:** ClientApp-DP, ClientApp-PCIe

**Description (verbatim):**

> Case:
>
> The 'Preset Test Presets control' (multi select dropdown control) is dependent on Preset Test Toggle button. If the Preset Test is turned off, the dropdown control should be hidden. If the preset test is turned on, the dropdown should be visible.
>
> Step1: Open global settings for PCIE TX Add-In card Gen5 NONATI app. go to General settings tab. The preset test toggle button is enabled and the… [truncated]


---

#### `GAR-2414` — Need support to get/set the step level settings using SDK

- **Type:** Story
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** mtatiche
- **Created:** 20-05-2022 01:12
- **Updated:** 29-01-2024 00:46
- **Resolved:** 20-09-2022 05:44
- **Resolution:** Done
- **Labels:** ClientApp-DP

**Customer Impact (verbatim):**

> 2-Medium

**Description (verbatim):**

> Using SDK, one can access only the global settings. 
>
> Need support for accessing the step level settings like "Skip_interrupt" flag 
>
> Enabling this flag will turn OFF the interrupts when APPEXECUTE Api is posted.
>
> This will be useful for the customers to suppress the interrupts during their test automation.


---

#### `DP-11374` — [Custom DP] Pre and Post Cursor Ratio Measurement result status should be Informative

- **Type:** Issue
- **Status:** Resolved
- **Priority:** Minor
- **Reporter:** u616480
- **Created:** 05-02-2024 00:59
- **Updated:** 12-03-2024 06:06
- **Resolved:** 11-02-2024 20:27
- **Resolution:** Done
- **Labels:** PLAE-Feedback


---

### Status: Closed (151)

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
> 4> Use proper naming convention for test files, name of the test and golden response file
> 5> Get your test script… [truncated]


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
> 3> Click on Test menu. Click on 'View Results' for test whose name is 'App2_test'
> Observations:
> a> For 'Iterations_Multi_ACQS' scenario, under 'Waveforms', 5 waveforms are displayed,… [truncated]


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
>  [http://172.19.211.237:4200/assets/PDFs/License |http://172.19.211.237:4200/assets/PDFs/License]Attributions.pdf


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
>  [https://www.figma.com/proto/vUPfjobzSvWiMhLrs08Rrk/TekFlow-Design-System-Mar-31%2C-2023?page-id=628%3A27470&type=design&node-id=13572-159136&viewport=-27551%2C-12118%2C0.3&t=9uQXKcPvGFynFf6C-9&scaling=scale-down&starting-point-node-id=13572%3A159136&show-proto-sidebar=1]
>
>  
>
>  
>
> Event log of a test:
>
> [▶ 04. UI Flows - TekFlow Design System Mar 31, 2023 (figma.com)|https://www… [truncated]


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
> * Select Reports from navigation Panel.
> * Click on Create new report
> * Enter execution id.
> * Select template Id… [truncated]


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
> 1> Save in "add test"/Status  page should save the test as Draft not as a sequence. Saved Draft should b… [truncated]


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
> * Expand scenario and step for which the step level settings has to be edited.
> * Edit the corresponding setting… [truncated]


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

> [▶ 04. UI Flows - TekFlow Design System Mar 31, 2023 (figma.com)|https://www.figma.com/proto/vUPfjobzSvWiMhLrs08Rrk/TekFlow-Design-System-Mar-31%2C-2023?page-id=628%3A27470&type=design&node-id=13680-241050&viewport=-12210%2C-6818%2C0.14&t=FJ1EGzecUOxJGYtZ-9&scaling=scale-down&starting-point-node-id=13680%3A241050&show-proto-sidebar=1]
>
>  
>
> [Design_cumulation.docx (sharepoint.com)|https://fortive.sh… [truncated]


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
> *Expected result:* Should be able to update source channel value to CH2
>
> *Actual Result:* On clicking Apply, getting validation error and not able to proceed with t… [truncated]


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
> 6. Enter the Test name , test description , select the appropriate Test bench ID , Drag the             LPDDR4 application
> 7. Click on Run Test button 
>
> Observation:
> Acquisit… [truncated]


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
>  - Probe query to be rerouted from UI to Controller to Kernel which calls Probe module to get the probe details and sends it back to UI through Controller
>  - PRTI
>  - SWE Testing


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
> Observed: Progress bar reaches 100% once test completed for Lane0. Actually it should be 33% (as one 1 of 3 lanes only completed)


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
> 1.Pre-requisite message should be shown asking to provide sufficient waveforms.


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
> Now if we launch the Tekexpress automotive ethernet, the new and right resources file can be geneated on X drive, however, if we meet this issue on another MSO64B, how can we fix it? It will be better for us to know the way for troubleshooting this kind of issue.
>
> Doneness:
> 1. Create resources file if scope model's does not match… [truncated]


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
>  # Now we can notice Gear Type is still Gear3A but mask file is for Gear1A (file name contains gear type). Th… [truncated]


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
> - Application (Framework) should be able to handle values with/without units
> - Validation of min/max to be taken… [truncated]


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
> - Provide a option in TekDisplay control to enable units control.
> - UI should be sending values in both format i.e. with and without units.
> - TekExpre… [truncated]


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
> Before resolving ensure it is working with 1000BT1
>
>  
>
> *Update on how to reproduce defect:*
>  # Launch Automotive Ethernet application and… [truncated]


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
>  # PRTI
>  # SQE testing (using custom main.py file)
>  # BETA build to DDR5 team
>  # Tekwiki on how to use thi… [truncated]


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
>  When VNA is selected for RL, Append the Test description to include “Select an appropriate S-parameter file(*.s1p/s2p), as… [truncated]


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
> - Mockup code in new branch to showcase to clients
>
> [Doneness]
> - Creating document with three options.… [truncated]


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
> 1. Test name included in report statistics table
> 2. PRTI and SWE done by Rajesh Katti


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
> "C:\Users\<username>\Documents\TekApplications"


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
>  # Go tot he acquisition panel. We can see that there are some additional text in acquisition UI panel. PFA


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
> For AC Common Mode Output Voltage, for Scope Noise, I entered the value ‘3333333333’. It gave the error message that is shown above. I clicked on okay button. Error message turned off and then re-appeared. Every time I click on ‘ok’, error message disappears and the re appears aga… [truncated]


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
>  2)Go to Calibration recall calibration files from "C:\Users\Public\Tektronix\TekApplications\Automotive-Ethernet\1000Base-T1\ReturnLossCalibrationFiles"
>  we can observe eventhough calibration files are present it is throwing popup saying "Calibration F… [truncated]


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
> Therefore, instead of using test names, we need to use some properties that holds the version information for each test.


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
> For an example, if the voltage swing is changed in the DUT panel, then the respective general parameter is changed and this change notification is published. There is subscription for this notification in the TestSelection panel and when this notification is received in the TestS… [truncated]


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
> 2. Go to high speed jitter and enable embed channel.
> 3. Click on S-parameter and compile.
>
> Observation:… [truncated]


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
>    at Tektronix.Scope.UI.CommonControls.ButtonTextItemCollection.AddRange(ButtonTextItem[] items)
>    at Tektronix.Sco… [truncated]


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
