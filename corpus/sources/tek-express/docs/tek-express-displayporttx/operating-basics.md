---
class: doc-section
doc_id: tek-express-displayporttx
doc_title: "TekExpress DisplayPort Tx Automated Test Solution Software — Printable Help"
doc_number: null
doc_date: null
applies_to: [tek-express]
section_id: operating-basics
section_title: Operating basics — Start, Application controls, Options menu, Email, Instrument control
parent_section: null
page_range: "68 to 130"
related_screens: [options-dropdown, setup-preferences-email-settings, running-test]
related_hardware: []
---

# Operating basics — Start, Application controls, Options menu, Email, Instrument control

## Summary

How to launch / exit / minimize the TekExpress DisplayPort Tx application, the global application-control toolbar (Start, Stop, Pause/Continue, Clear, Minimise, Close, application-window move icon, Options menu, Panel side-nav), the contents of the **Options menu** (Default Test Setup, Open Test Setup, Save Test Setup, Save Test Setup As, Open Recent, Instrument Control Settings, Keep On Top, Email Settings, Help, About TekExpress), the **Email Settings** dialog (recipient/sender address, SMTP server config, Email Attachments — Reports + Status Log Last-20-Lines vs Full Log, Email Configuration — max size 5 MB default, Number of Attempts 1 default, Timeout, Email Test Results When complete or on error, Test Email / Apply / Close), and the **Instrument Control Settings** dialog (LAN / GPIB / Serial / Non-VISA / TekLink / USB / VXI search-criteria checkboxes, Refresh, TekVISA Timeout 300 s, Retrieved Instruments table — Connection / Resource / Serial No / Options / Resource Addr). Also covers the application panels overview table (Setup, Status, Results, Reports) at a high level — full per-panel detail is in the dedicated panel chunks.

## Content

### Start the application

To run the DisplayPort Tx application, do any of the following:

- From the TekScope Analyze menu, select **Analyze** > **TekExpress DisplayPort Tx**.
- Double-click on any DisplayPort saved session file.

While running the application, you can switch between the oscilloscope screen and DisplayPort Tx by clicking the desired window. To keep the application window on top, select **Keep On Top** from the *Options menu*.

> **Note:** If the application was not terminated properly during the last use, a dialog box asks to recall the previously unsaved session.

### Application panels overview

TekExpress DisplayPort Solution uses panels to group related configuration, test, and results settings. Click any step button to open the associated panel. A panel may have one or more tabs that list the selections available in that panel. Controls in a panel can change depending on settings made in that panel or another panel.

| Panel name | Purpose |
|---|---|
| Setup | The Setup panel allows you to configure the test setup. Use this panel to: Select DUT parameters; Select the test(s); Set acquisitions tab parameters for selected tests; Set configuration tab parameters; Select preferences tab parameters. |
| Status | View the acquisition status and analysis status of the selected tests, and view test logs. |
| Results | View a summary of test results and select result viewing preferences. |
| Reports | You can find the reports, save reports as specific file types, specify report naming conventions, select report content to include (such as summary information, detailed information, user comments, setup configuration, application configuration), and select report viewing options. |

### Exit the application

Use the following method to exit the application:

> **Note:** Using other methods to exit the application results in abnormal termination of the application.

1. Click the X (close) icon on the application title bar.
2. Do one of the following:
   - If you have an unsaved session or test setup open, you will be asked to save it before exiting. To save it, click **Yes**. Otherwise click **No**. The application closes.
   - A message box appears asking if you really want to exit TekExpress. To exit, click **Yes**.

> **Note:** To minimize the application, click the minimise icon on the application title bar.

### Application controls

| Item | Description |
|---|---|
| Options menu | Menu to display global application controls. |
| Panel | Controls that open panels for configuring test settings and options. |
| Command buttons | Button that initiates an immediate action such as the Start, Stop, Pause, and Clear command buttons. |
| Start button | Use the Start button to start the test run of the measurements in the selected order. If prior acquired measurements are not cleared, then new measurements are added to the existing set. |
| Stop button | Use the Stop button to abort the test. |
| Pause / Continue button | Use the Pause button to temporarily pause the current execution. When a test is paused, the button name changes to "Continue". |
| Clear button | Use the Clear button to clear all existing measurement results. This button is available only on the *Results panel*. |
| Minimise button | Minimises the application. |
| Close button | Exits the application. |
| Application window move icon | Place the cursor over the three-dot pattern in the upper left corner of the application window. When the cursor changes to a hand, drag the window to the desired location. |

### Options menu

The Options menu is located in the upper right corner of the application.

*Figure 1: Options menu* — Drop-down with the following items: Default Test Setup, Open Test Setup, Save Test Setup, Save Test Setup As, Open Recent (sub-menu), Instrument Control Settings, Keep On Top, Email Settings, Help, About TekExpress.

The options menu has the following selections:

| Menu | Function |
|---|---|
| Default Test Setup | Opens an untitled test setup with defaults selected |
| Open Test Setup | Opens a saved test setup |
| Save Test Setup | Saves the current test setup selections |
| Save Test Setup As | Creates a new test setup based on an existing one |
| Open Recent | Displays a menu of recently opened test setups to select from |
| Instrument control settings | Shows the list of instruments connected to the test setup and allows you to locate and refresh connections to connected instruments |
| Keep On Top | Keeps the TekExpress DisplayPort Tx utility on top of other open windows on the desktop |
| Email settings | Use to configure email options for test run and results notifications |
| Help | Displays TekExpress Help |
| About TekExpress | Displays application details such as software name, version number, and copyright; Provides access to license information for your DisplayPort Tx installation; Provides a link to the Tektronix Web site |

### Email settings

Use the email settings utility to *configure email notifications* if you want DisplayPort application to notify you when a tests completes, produces an error, or fails. Select the type of test run information to be included in the notification, such as test reports and test logs, the email message format, and the email message size limit.

> **Note:** Recipient email address, sender's address, and SMTP Server are mandatory fields.

*Figure: Email Settings dialog* — Fields: Recipient e-mail Address(es) (note: separate Email addresses with a comma); Sender's Address; Email Attachments group (Reports checkbox; Status Log checkbox with Last 20 Lines / Full Log radios); Server Configuration group (SMTP Server, SMTP Port `0`, Login, Password, Host Name); Email Configuration group (Max Email Size (MB) `5`, Timeout (Sec) `0`, Number of Attempts to Send `1`); Email Test Results When complete or on error checkbox; Test Email / Apply / Close buttons.

#### Configure email settings procedure

1. From the Options menu, select **Email Settings** to open the Email settings dialog box.
2. (Required) For Recipient email Address(es), enter your email address. To include multiple addresses, separate the addresses with commas.
3. (Required) For Sender's Address, enter the email address used by the instrument. This address consists of the instrument name followed by an underscore followed by the instrument serial number, then the `@` symbol and the email server used. For example: `DPO72004C_B130099@yourcompany.com`.
4. (Required) In the Server Configuration section, type the SMTP Server address of the Mail server configured at the client location, and the SMTP Port number, in the corresponding fields.
   If this server requires password authentication, enter a valid login name, password, and host name in the corresponding fields.
   > **Note:** If any of the above required fields are left blank, the settings will not be saved and email notifications will not be sent.
5. In the Email Attachments section, select from the following options:
   - **Reports**: Select to receive the test report with the notification email
   - **Status Log**: Select to receive the test status log with the notification email. If you select this option, then also select whether you want to receive the full log or just the last 20 lines.
6. In the Email Configuration section, select as desired:
   - Select the message file format to send: HTML (the default) or plain text.
   - Enter a maximum file size for the email message. Messages with attachments larger than this limit will not be sent. The default is 5 MB.
   - To limit the number of attempts the system makes to send a notification, enter the number in the Number of Attempts to Send field. The default is 1. You can also specify a timeout.
7. Select the **Email Test Results When complete or on error** check box. Use this check box to quickly enable or disable email notifications.
8. To test your email settings, click **Test Email**.
9. To apply your settings, click **Apply**.
10. Click **Close** to exit the Email Settings dialog box.

### Instrument control settings

The Instrument Control Settings dialog box shows the list of resources found on different connections. It serves two purposes:

- Discovers the connected instruments
- Confirms the instrument connection setup

*Figure: TekExpress Instrument Control Settings dialog* — Search Criteria checkboxes (LAN, GPIB, Serial, Non-VISA Resources, TekLink, USB, VXI). Refresh button. TekVISA Timeout: `300` s. Retrieved Instruments table with one row: Connection `VISA-GPIB`, Resource `DPO72504D`, Serial No `Not-Set`, Options `20XL,MTH,Res,Re...`, Resource Addr `GPIB8::1::INSTR`. Last Updated: `April 21, 2016 11:34:43`. Close button.

Use the Instrument Control Settings feature to *search for connected instruments* and view instrument connection details. Connected instruments displayed here can be selected for use in the Global Settings section of the Setup panel's Configuration section. See step 2 of *Configure tests* for details.

## Cross-references

- [`screens/options-dropdown.md`](../../screens/options-dropdown.md) — the corpus screen for the live Options dropdown; this chunk documents every menu item in that screen verbatim.
- [`screens/setup-preferences-email-settings.md`](../../screens/setup-preferences-email-settings.md) — the corpus screen for the Email Settings dialog; this chunk documents the underlying field/control set and the configuration procedure.
- [`screens/running-test.md`](../../screens/running-test.md) — the Start / Stop / Pause / Continue command buttons in the right rail of the running app are the same buttons documented in Application controls here.
- `setup-dut-panel`, `setup-test-selection-acquisitions`, `setup-configuration`, `setup-preferences-panel`, `status-panel`, `results-panel`, `reports-panel` — the panel side-nav documented in Application panels overview maps to those per-panel chunks.
- `saving-recalling-test-setup` — the Open Test Setup / Save Test Setup / Save Test Setup As / Default Test Setup options under the Options menu are detailed there.

## Confidence notes

- The Application panels overview prints two near-duplicate tables in the source (one under "Application panels overview" in Operating basics, one in "About panels" under Panels). The Operating basics version is transcribed here; differences (Results panel wording, Reports panel wording) are minor.
- The Options menu screenshot has Help / About TekExpress partially clipped in the rendering but both menu items are confirmed in the Functions table that follows.
- Instrument Control Settings sample row prints `Options` truncated as `20XL,MTH,Res,Re...`; preserved as printed.
- The wording "Email Settings" (Options menu item) vs "email settings" (lowercase usage in the procedure intro) is preserved as printed.
