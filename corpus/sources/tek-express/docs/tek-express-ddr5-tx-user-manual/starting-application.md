---
provenance: observed
class: doc-section
doc_id: tek-express-ddr5-tx-user-manual
doc_title: "TekExpress DDR Tx Compliance and Debug Automation Software Application Help"
doc_number: 077-1648-04
doc_date: 2025-08
applies_to: [tek-express]
section_id: starting-application
section_title: Starting the application — Application controls, Options menu, Email settings
parent_section: null
page_range: "15 to 19"
related_screens: [setup-dut, options-dropdown, setup-preferences-email-settings]
related_hardware: []
---

# Starting the application — Application controls, Options menu, Email settings

## Summary

How the user launches and interacts with the TekExpress DDR Tx application chrome that wraps every panel: the launch path (`Applications > TekExpress DDR` from the oscilloscope menu bar), what the "My TekExpress" / `X:` drive mapping does at startup and teardown, the global application controls (Options ▼ menu, the Setup / Status / Results / Reports test-panel pills, the Start / Stop and Pause / Continue and Clear buttons on the right rail, the window move / minimise / close icons, the mini-view ↔ normal-view toggle), the full Options menu inventory (Default / Open / Save / Save As / Open Recent / Instrument Control Settings / Keep On Top / Email Settings / Help / About TekExpress), and the end-to-end procedure for configuring SMTP email notifications on test complete / error.

## Content

### Starting the application

To start the TekExpress DDR TX, select **Applications > TekExpress DDR** from the oscilloscope menu bar.

*Figure (Starting): DDR5 Setup panel* — As in `welcome-and-help` Figure 1.
*Figure (Starting): LPDDR5-5X Setup panel* — As in `welcome-and-help` Figure 2.

During start, a "My TekExpress" folder is created in the Documents folder of the current user and gets mapped to "X" drive. When the application is closed properly, the "X" drive gets unmapped. Session files are then stored inside the `X:\DDR` folder. If this file is not found, the application runs an instrument discovery program to detect connected instruments before starting TekExpress DDR.

To keep the TekExpress DDR application on top of any application, select **Keep On Top** from the *options menu*. If the application goes behind the oscilloscope application, select **Applications > TekExpress DDR** to bring the application to the front.

### Application controls

| Item | Description |
|---|---|
| **Options menu** (Options ▼) | Menu to display global application controls. |
| **Test panel** (Setup, Status, Results, Reports) | Controls that open tabs for configuring test settings and options. |
| **Start / Stop button** | Use the **Start** button to start the test run of the measurements in the selected order. If prior acquired measurements are not cleared, then new measurements are added to the existing set. The button toggles to the Stop mode while tests are running. Use the **Stop** button to abort the test. |
| **Pause / Continue button** | Use the **Pause** button to pause the acquisition. When a test is paused, this button changes as **Continue**. |
| **Clear button** | Use the **Clear** button to clear all existing measurement results. Adding or deleting a measurement, or changing a configuration parameter of an existing measurement, also clears measurements. This is to prevent the accumulation of measurement statistics or sets of statistics that are not coherent. This button is available only on `Results panel: View summary of test results` on page 46. *Note: This button is visible only when there are results data on the panel.* |
| **Application window move icon** | Place the cursor over the top of the application window to move the application window to the desired location. |
| **Minimize icon** | Minimizes the application. |
| **Close icon** | Close the application. |
| **Mini view / Normal view** | Toggles the application between mini view and normal view. Mini view displays the run messages with the time stamp, progress bar, Start / Stop button, and Pause / Continue button. The application moves to mini view when you click the **Start** button. |

### Options menu functions

To access the **Options** menu, click ▼ in the upper-right corner of the application. It has the following selections:

*Options menu items shown:*

- Default Test Setup
- Open Test Setup
- Save Test Setup
- Save Test Setup As
- Open Recent (submenu indicator >)
- Instrument Control Settings
- Keep On Top
- Email Settings
- Help
- About TekExpress

| Menu | Function |
|---|---|
| Default Test Setup | Opens a new test setup with default configurations. |
| Open Test Setup | Opens a previously saved test setup. Displays the list of previously saved test setup file names. Make the selection and click **OK** to open the test setup. |
| Save Test Setup | Saves the current test configurations with the specified file name. |
| Save Test Setup As | Saves the current test setup with a different file name or file type. |
| Open Recent | Displays the recently opened test setup file names. Make the selection and click **OK** to open the test setup. |
| **Instrument Control Settings** | Detects, lists, and refreshes the connected instruments found on the specified connections (LAN, GPIB, USB, Serial, Non-VISA Resources, TekLink, and VXI). |
| Keep On Top | Always keeps the TekExpress DDR application on top of all the applications. |
| **Email Settings** | Configures email options for test run and result notifications. |
| Help | Displays the TekExpress DDR help. |
| About TekExpress | Displays the application name, version, and hyperlink to end the user license agreement. |

### Configure email settings

Use the **Email Settings** utility to get notified by email when a measurement completes or produces any error condition. Follow the steps to configure email settings:

*Figure 5: Email settings window* — Dialog "Email Settings". Recipient e-mail Address(es) text input (note: *Separate Email addresses with a comma*). Sender's Address text input. Email Attachments group: Reports checkbox (checked), Status Log checkbox (checked) with Last 20 Lines / Full Log radios. Server Configuration group: SMTP Server text input, SMTP Port (0), Login, Password, Enable SSL checkbox. Email Configuration group: Max Email Size (MB) `5`, Number of Attempts to Send `1`, Timeout (Sec) `0`. Email Test Results When complete or on error checkbox. Test Email, Apply, Close buttons.

1. Select **Options > Email Settings** to open the Email Settings dialog box.
2. (Required) For **Recipient email Address(es)**, enter one or more recipient email addresses. To include multiple addresses, separate the addresses with commas.
3. (Required) For **Sender's Address**, enter the email address used by the instrument. This address consists of the instrument name, followed by an underscore, followed by the instrument serial number, then the @ symbol, and the email server ID. For example: `user@yourcompany.com`.
4. (Required) In the **Server Configuration** section, type the SMTP Server address of the Mail server configured at the client location, and the SMTP Port number, in the corresponding fields.
   If this server requires password authentication, enter a valid login name, password, and host name in the corresponding fields.

> ⚠ **Note:** If any of the above required fields are left blank, the settings will not be saved, and email notifications will not be sent.

5. In the **Email Attachments** section, select from the following options:
   - **Reports**: Select to receive the test report with the notification email.
   - **Status Log**: Select to receive the test status log with the notification email. If you select this option, then also select whether you want to receive the full log or just the last 20 lines.
6. In the **Email Configuration** section:
   - Enter a maximum file size for the email message. Messages with attachments larger than this limit will not be sent. The default is 5 MB.
   - Enter the number in the Number of Attempts to Send field, to limit the number of attempts that the system makes to send a notification. The default is 1. You can also specify a timeout period.
7. Select the **Email Test Results When complete or on error** check box. Use this check box to quickly enable or disable email notifications.
8. To test your email settings, click **Test Email**.
9. To apply your settings, click **Apply**.
10. Click **Close** when finished.

## Cross-references

- [`screens/options-dropdown.md`](../../screens/options-dropdown.md) — the live Options ▼ menu in the corpus; the items enumerated above match the dropdown's enumeration of `Default Test Setup`, `Open Test Setup`, `Save Test Setup`, `Save Test Setup As`, `Open Recent ▸`, `Instrument Control Settings`, `Keep On Top`, `Email Settings`, `Help`, and `About TekExpress`.
- [`screens/setup-dut.md`](../../screens/setup-dut.md) — the Start ▶, Pause ‖ right-rail buttons described here are the persistent chrome of this screen and every other panel in the corpus.
- [`screens/setup-preferences-email-settings.md`](../../screens/setup-preferences-email-settings.md) — the Email Settings dialog described in this chunk's procedure.
- [`screens/running-test.md`](../../screens/running-test.md) — the mini-view mode the application enters on Start.
- `setting-up-test-environment` — Instrument Control Settings as the gating prerequisite to a test run.
- `setup-preferences-panel` — the Email Settings button on the Preferences tab that opens the same dialog.

## Confidence notes

- The Options menu listing in the manual reads `Default Test Setup` then `Open Test Setup`. The live corpus screen `options-dropdown.md` enumerates the menu items in the same order. Verified consistent.
- "TekExpress DDR" appears in some manual passages and "TekExpress DDR TX" in others; preserved as written.
- The `X:\DDR` path in the manual is a partial — the running application typically maps to `X:\` then sub-folders `\DDR Transmitter\Untitled Session\` (see also `references-and-appendices`). Manual's exact wording preserved.
