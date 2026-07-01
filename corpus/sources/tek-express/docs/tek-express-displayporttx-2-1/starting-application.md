---
provenance: observed
class: doc-section
doc_id: tek-express-displayporttx-2-1
doc_title: "TekExpress DisplayPort 2.1 Application Help"
doc_number: 077-xxxx-xx
doc_date: unknown
applies_to: [tek-express]
section_id: starting-application
section_title: Starting the application — Application controls, Options menu, Email settings, Instrument control
parent_section: null
page_range: "81 to 100"
related_screens: [options-dropdown, setup-preferences-email-settings, running-test]
related_hardware: []
---

# Starting the application — Application controls, Options menu, Email settings, Instrument control

## Summary

How to launch and frame the TekExpress DisplayPort 2.1 application — invocation from the oscilloscope's `Applications > TekExpress DisplayPort 2.1` menu, Keep On Top behavior, the title-bar Application Controls (Options menu, Test panel, Start / Stop, Pause / Continue, Clear results, Application window move icon, Minimize, Close, Mini view / Normal view toggle), the Options menu inventory (Default Test Setup, Open Test Setup, Save Test Setup, Save Test Setup As, Open Recent, Instrument Control Settings, Keep On Top, Email Settings, Help, About TekExpress), the Configure email settings procedure (recipient/sender addresses, SMTP server + port, authentication, attachments selection for Reports / Status Log full or last-20-lines, max attachment size, retry count, timeout, Test Email validation), and the TekExpress Instrument Control Settings dialog used to detect connected instruments over LAN / GPIB / USB / Serial / Non-VISA / TekLink / VXI.

## Content

### Starting the application

To start the TekExpress DisplayPort 2.1, select Applications > TekExpress DisplayPort 2.1 from the oscilloscope menu bar.

*Figure 1: Application launch screen.*

To keep the TekExpress DisplayPort 2.1 application on top of any application, select Keep On Top from the options menu. If the application goes behind the oscilloscope application, select Applications > TekExpress DisplayPort 2.1 to bring the application to the front.

### Application controls

This section describes the application controls.

| Item | Description |
|---|---|
| Options menu | Menu to display global application controls. |
| Test panel | Controls that open tabs for configuring test settings and options. |
| Start / Stop button | Use the Start button to start the test run of the measurements in the selected order. If prior acquired measurements are not cleared, then new measurements are added to the existing set. The button toggles to the Stop mode while tests are running. Use the Stop button to abort the test. |
| Pause / Continue button | Use the Pause button to pause the acquisition. When a test is paused, this button changes as Continue. |
| Clear button | Use the Clear button to clear all existing measurement results. Adding or deleting a measurement, or changing a configuration parameter of an existing measurement, also clears measurements. This is to prevent the accumulation of measurement statistics or sets of statistics that are not coherent. This button is available only on Results panel: View summary of test results. Note: This button is visible only when there are results data on the panel. |
| Application window move icon | Place the cursor over the top of the application window to move the application window to the desired location. |
| Minimize icon | Minimizes the application. |
| Close icon | Close the application. |
| Mini view / Normal view | Toggles the application between mini view and normal view. Mini view displays the run messages with the time stamp, progress bar, Start / Stop button, and Pause / Continue button. The application moves to mini view when you click the Start button. |

### Options menu functions

To access the Options menu, click the gear icon in the upper-right corner of the application. It has the following selections:

| Menu | Function |
|---|---|
| Default Test Setup | Opens a new test setup with default configurations. |
| Open Test Setup | Opens a previously saved test setup. Displays the list of previously saved test setup file names. Make the selection and click OK to open the test setup. |
| Save Test Setup | Saves the current test configurations with the specified file name. |
| Save Test Setup As | Saves the current test setup with a different file name or file type. |
| Open Recent | Displays the recently opened test setup file names. Make the selection and click OK to open the test setup. |
| Instrument Control Settings | Detects, lists, and refreshes the connected instruments found on the specified connections (LAN, GPIB, USB, Serial, Non-VISA Resources, TekLink, and VXI). |
| Keep On Top | Always keeps the TekExpress application on top of all the applications. |
| Email Settings | Configures email options for test run and result notifications. |
| Help | Displays the help. |
| About TekExpress | Displays the application name, version, and hyperlink to end the user license agreement. |

### Configure email settings

Use the Email Settings utility to get notified by email when a measurement completes or produces any error condition. Follow the steps to configure email settings:

*Figure 1: Email settings window.*

1. Select Options > Email Settings to open the Email Settings dialog box.
2. (Required) For Recipient email Address(es), enter one or more recipient email addresses. To include multiple addresses, separate the addresses with commas.
3. (Required) For Sender's Address, enter the email address used by the instrument. This address consists of the instrument name, followed by an underscore, followed by the instrument serial number, then the @ symbol, and the email server ID. For example: `user@yourcompany.com`.
4. (Required) In the Server Configuration section, type the SMTP Server address of the Mail server configured at the client location, and the SMTP Port number, in the corresponding fields.
   If this server requires password authentication, enter a valid login name, password, and host name in the corresponding fields.
   Note: If any of the above required fields are left blank, the settings will not be saved, and email notifications will not be sent.
5. In the Email Attachments section, select from the following options:
   - Reports: Select to receive the test report with the notification email.
   - Status Log: Select to receive the test status log with the notification email. If you select this option, then also select whether you want to receive the full log or just the last 20 lines.
6. In the Email Configuration section:
   - Enter a maximum file size for the email message. Messages with attachments larger than this limit will not be sent. The default is 5 MB.
   - Enter the number in the Number of Attempts to Send field, to limit the number of attempts that the system makes to send a notification. The default is 1. You can also specify a timeout period.
7. Select the Email Test Results When complete or on error check box. Use this check box to quickly enable or disable email notifications.
8. To test your email settings, click Test Email.
9. To apply your settings, click Apply.
10. Click Close when finished.

### TekExpress instrument control settings

Use the TekExpress Instrument Control Settings dialog box to search the instruments (resources) connected to the application. You can use the Search Criteria options to search the connected instruments depending on the connection type. The details of the connected instrument is displayed in the Retrieved Instruments window.

To access, click Options > Instrument Control Settings. Select GPIB as search criteria for TekExpress application and click Refresh. The connected instruments displayed in the Retrieved Instruments window and can be selected for use under Global Settings in the test configuration section.

*Figure 1: TekExpress Instrument Control Settings window.*

## Cross-references

- [`screens/options-dropdown.md`](../../screens/options-dropdown.md) — the Options menu rendered in the application titlebar, matching the inventory listed above.
- [`screens/setup-preferences-email-settings.md`](../../screens/setup-preferences-email-settings.md) — the live Email Settings dialog, matching the procedure here.
- [`screens/running-test.md`](../../screens/running-test.md) — the Start/Stop/Pause/Continue/Clear controls when a test is in progress, and the Mini view that opens on Start.
- `setting-up-test-environment` — pre-Run checklist that depends on Instrument Control Settings finding the Real Time Scope.
- `setup-configuration-panel` — the Configuration tab's Instruments Detected list updated by Instrument Control Settings.
- See also (base manual): `tek-express-displayporttx/starting-application` — the base DisplayPort 2.0 manual has the same Options menu and Application Controls; the 2.1 manual differs only in application name strings ("DisplayPort 2.1" vs "DisplayPort 2.0").

## Confidence notes

- All Application Controls cells reference small inline icons that render as `<image>` placeholders in the PDF export. The control names and descriptions are transcribed verbatim.
- The Options menu icon is described only as "gear" inferred from the visible figures; the source uses an image placeholder.
- Email Settings: the dialog graphic shows the gear icon and the settings panel, but the table cell uses `<image>` placeholders. The numbered procedure is verbatim.
