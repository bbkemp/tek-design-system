---
class: doc-section
doc_id: tek-express-app-emulator
doc_title: "TekExpress AppEmulator Application Help"
doc_number: 077-xxxx-xx
doc_date: null
applies_to: [tek-express]
section_id: starting-application
section_title: Starting the application — Application controls, Options menu, Email Settings
parent_section: null
page_range: "48 to 69"
related_screens: [setup-dut, options-dropdown, setup-preferences-email-settings, running-test]
related_hardware: []
---

# Starting the application — Application controls, Options menu, Email Settings

## Summary

How to launch AppEmulator from the oscilloscope (`Applications > AppEmulator`), the X-drive mapping behavior on launch (`My TekExpress` folder in the current user's Documents folder is mapped to drive `X:`; session files live under `X:\AppEmulator`), the **Keep On Top** behavior, the full application control surface (Options menu, side-nav buttons Setup / Status / Results / Plots / Reports, Start/Stop, Pause/Continue, Clear, window controls, Mini view / Normal view), the Options menu inventory (Default Test Setup, Open Test Setup, Save Test Setup, Save Test Setup As, Open Recent, Continuous Run Setup, Instrument Control Settings, Keep On Top, Email Settings, Deskew, Suite, Message Font Size, Help, About TekExpress), Email Settings configuration (SMTP server, sender/recipient addresses, attachments, max size, attempts, timeout, Test Email button), and the TekExpress instrument control settings dialog used for instrument discovery.

## Content

### Launching the application

To launch the TekExpress AppEmulator, select from the oscilloscope menu bar: **Applications > AppEmulator**.

*Figure 1: Application launch — AppEmulator DUT panel after launch.* — Same window as in `welcome-and-help` Figure 1: side nav (Setup active, Status, Results, Plots, Reports), Setup wizard 1 DUT / 2 Test Selection / 3 Acquisitions / 4 Preferences, DUT panel populated with default values (`DUT001`, Acquire live waveforms, View `Compliance`, Session `Default`, Device `TX-Device`, Suite `Group1`, Version `Spec 1.0`, Probing Type `Single-Ended`, Vertical Offset `200V`, SSC `Off`, Signal Validation Threshold `200mV`, Analyze on Golden Waveforms `On`, Show Model Information In Popup `Off`), Start (green) and Pause buttons, Status bar `Ready.`

During launch, a "My TekExpress" folder is created in the Documents folder of the current user and gets mapped to "X" drive. When the application is closed properly, the "X" drive gets unmapped. Session files are then stored inside the `X:\AppEmulator` folder. If this file is not found, the application runs an instrument discovery program to detect connected instruments before launching AppEmulator.

To keep the AppEmulator application on top of any application, select **Keep On Top** from the options menu. If the application goes behind the oscilloscope application, select **Applications > AppEmulator** to bring the application to the front.

### Application controls

This section describes the application controls with functionality and its details.

**Table 1. Application control description**

| Item | Description |
|---|---|
| Options menu (icon: dropdown arrow next to "Options" in upper right) | Menu to display global application controls. |
| Test panel (side-nav buttons: Setup, Status, Results, Plots, Reports) | Controls that open tabs for configuring test settings and options. |
| Start / Stop button (green Start icon, red Stop icon) | Use the **Start** button to start the test run of the measurements in the selected order. If prior acquired measurements are not cleared, then new measurements are added to the existing set. The button toggles to the Stop mode while tests are running. Use the **Stop** button to abort the test. |
| Pause / Continue button | Use the **Pause** button to pause the acquisition. When a test is paused, this button changes as **Continue**. |
| Clear button | Use the **Clear** button to clear all existing measurement results. Adding or deleting a measurement, or changing a configuration parameter of an existing measurement, also clears measurements. This is to prevent the accumulation of measurement statistics or sets of statistics that are not coherent. This button is available only on Results panel. > **Note:** This button is visible only when there are results data on the panel. |
| Application window move icon (Tek logo) | Place the cursor over the top of the application window to move the application window to the desired location. |
| Minimize icon | Minimizes the application. |
| Close icon | Close the application. |
| Mini view / Normal view (toggle icons) | Mini view displays the run messages with the time stamp, progress bar, Start / Stop button, and Pause / Continue button. The application moves to mini view when you click the **Start** button. |

### Options menu functions

To access the **Options** menu, click the dropdown arrow in the upper-right corner of the application. It has the following selections:

*Figure 2: Options menu* — Dropdown list: Default Test Setup, Open Test Setup, Save Test Setup, Save Test Setup As, Open Recent (with submenu arrow), Instrument Control Settings, Keep On Top, Email Settings, Help, About TekExpress.

**Table 1. Options menu settings**

| Menu | Function |
|---|---|
| Default Test Setup | Opens a new test setup with default configurations. |
| Open Test Setup | Opens a previously saved test setup. Displays the list of previously saved test setup file names. Make the selection and click **OK** to open the test setup. |
| Save Test Setup | Saves the current test configurations with the specified file name. |
| Save Test Setup As | Saves the current test setup with a different file name or file type. |
| Open Recent | Displays the recently opened test setup file names. Make the selection and click **OK** to open the test setup. |
| Continuous Run Setup | Select to display a setup dialog box to configure the settings for continuous run of the tests with the set of conditions. *(See Continuous Run Setup detail below.)* |
| Instrument Control Settings | Detects, lists, and refreshes the connected instruments found on the specified connections (LAN, GPIB, USB, Serial, Non-VISA Resources, TekLink, and VXI). |
| Keep On Top | Always keeps the TekExpress AppEmulator application on top of all the applications. |
| Email Settings | Configures email options for test run and result notifications. |
| Deskew | Loads oscilloscope channel deskew settings into the application. |
| Suite | *(blank)* |
| Message Font Size | *(blank)* |
| Help | Displays the AppEmulator help. |
| About TekExpress | Displays the application name, version, and hyperlink to end the user license agreement. |

**Continuous Run Setup — detail**

The continuous run setup dialog box consists of the following controls:

- **Continuous run for**: Select this to enable the continuous run function. This control also specifies the amount of time the continuous run should function using the following options:
  - **Time**: Select and specify the amount of time using the edit box in the format Hr : Mn.
  - **Infinite**: Select to set the continuous run to function for infinite amount of time.
- **View report after generating**: Select to generate and view the report after the run is complete.
- **Session create options**: This control configures the session creation settings. Use the following options to configure the settings:
  - **For every run, create new run session**: Select to create a new session after every run.
  - **For every run, use same session, clear results**: Select to use the same session for every new run. Clear the session data of the previous run before using the same session for the next run.

### Configure email settings

Use the **Email Settings** utility to get notified by email when a measurement completes or produces any error condition. Follow the steps to configure email settings:

*Figure 1 (Email Settings): Email Settings window.* — Dialog box with the following sections:
- **Recipient e-mail Address(es)**: text field showing `aayush.rastogi@tektronix.com` with caption "Note: Separate Email addresses with a comma"
- **Sender's Address**: text field showing `aayush.rastogi@tektronix.com`
- **Email Attachments**: Reports (checked), Status Log (checked), Last 20 Lines (selected radio), Full Log (radio)
- **Server Configuration**: SMTP Server `mail.tek.com`, SMTP Port `0`, Login (empty), Password (empty), Enable SSL (unchecked)
- **Email Configuration**: Max Email Size (MB) `0`, Number of Attempts to Send `0`, Timeout (Sec) `0`
- Email Test Results When complete or on error (checkbox)
- Test Email, Apply, Close buttons

1. Select **Options > Email Settings** to open the Email Settings dialog box.
2. (Required) For **Recipient email Address(es)**, enter one or more recipient email addresses. To include multiple addresses, separate the addresses with commas.
3. (Required) For **Sender's Address**, enter the email address used by the instrument. This address consists of the instrument name, followed by an underscore, followed by the instrument serial number, then the @ symbol, and the email server ID. For example: `user@yourcompany.com`.
4. (Required) In the **Server Configuration** section, type the SMTP Server address of the Mail server configured at the client location, and the SMTP Port number, in the corresponding fields. If this server requires password authentication, enter a valid login name, password, and host name in the corresponding fields.

   > **Note:** If any of the above required fields are left blank, the settings will not be saved, and email notifications will not be sent.

5. In the **Email Attachments** section, select from the following options:
   - **Reports**: Select to receive the test report with the notification email.
   - **Status Log**: Select to receive the test status log with the notification email. If you select this option, then also select whether you want to receive the full log or just the last 20 lines.
6. In the **Email Configuration** section:
   - Enter a maximum file size for the email message. Messages with attachments larger than this limit will not be sent. The default is 0 MB.
   - Enter the number in the Number of Attempts to Send field, to limit the number of attempts that the system makes to send a notification. The default is 1. You can also specify a timeout period.
7. Select the **Email Test Results When complete or on error** check box. Use this check box to quickly enable or disable email notifications.
8. To test your email settings, click **Test Email**.
9. To apply your settings, click **Apply**.
10. Click **Close** when finished.

### TekExpress instrument control settings

Use the **TekExpress Instrument Control Settings** dialog box to search the instruments (resources) connected to the application. You can use the **Search Criteria** options to search the connected instruments depending on the connection type. The details of the connected instrument is displayed in the Retrieved Instruments window.

To access, click **Options > Instrument Control Settings**. Select **USB** and **LAN** as search criteria for TekExpress Industrial Ethernet Automotive Ethernet application and click **Refresh**. The connected instruments displayed in the Retrieved Instruments window and can be selected for use under Global Settings in the test configuration section.

*Figure 1: TekExpress Instrument Control Settings window* — Dialog showing Search Criteria checkboxes (LAN checked, GPIB checked, Serial, Non-VISA Resources, TekLink, USB, VXI), Refresh button with TekVISA Timeout `300 s`, Retrieved Instruments ( 1 ) table with VISA-GPIB connection to a `DPO7700SX` (Serial `B380079`, Options `50XL,MTH,Reserv...`, Resource Addr `GPIB8::1::INSTR`), Last Updated `October 08, 2020 04:28:56`, Close button.

## Cross-references

- [`screens/setup-dut.md`](../../screens/setup-dut.md) — the post-launch state of the application that Figure 1 captures.
- [`screens/options-dropdown.md`](../../screens/options-dropdown.md) — the corpus-documented Options menu dropdown that Figure 2 here corresponds to.
- [`screens/setup-preferences-email-settings.md`](../../screens/setup-preferences-email-settings.md) — the live Email Settings dialog that the `Configure email settings` sub-section above documents.
- [`screens/running-test.md`](../../screens/running-test.md) — the mini-view that the Mini view / Normal view control toggles to when Start is clicked.
- `setting-up-test-environment` — duplicate documentation of the Instrument Control Settings dialog, accessed via the same Options menu path.
- `setup-dut-panel` — the DUT tab that opens immediately after launch.

## Confidence notes

- The Suite and Message Font Size rows in the Options menu table have blank Function cells in the source. Preserved as printed.
- The "Continuous Run Setup" menu item appears in the table but is not visible in the Figure 2 Options dropdown screenshot — possibly hidden behind a scroll or below the Email Settings item. The detail block below the table documents it from text in the source.
- Email Settings figure shows real-looking internal Tektronix email addresses (`aayush.rastogi@tektronix.com`) baked into the screenshot — preserved verbatim as they appear in the help.
- The TekExpress instrument control settings sub-topic text mentions "TekExpress Industrial Ethernet Automotive Ethernet application" — this is leftover copy from another TekExpress application's help that was reused in AppEmulator's CHM. Preserved as printed.
