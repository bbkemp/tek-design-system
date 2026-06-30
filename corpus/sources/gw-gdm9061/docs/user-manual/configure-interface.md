---
class: doc-section
doc_id: user-manual
doc_title: "Dual Measurement Multimeter GDM-9060/9061 User Manual"
doc_number: null
doc_date: 2024-03
applies_to: [gw-gdm9061, gw-gdm9060]
section_id: configure-interface
section_title: Configure Interface
parent_section: null
page_range: "211-246"
related_screens: [config-interface, config-lan]
related_hardware: []
---

# Configure Interface

## Summary

The Remote Control chapter's interface-configuration section. Covers how to select the active remote-control interface (RS232, USB, LAN, or optional GPIB) on the `Interface` configuration menu, and how to set each interface's parameters: RS232 baud rate / flow control / TX terminator (EndOfLine and Separation), USB protocol (USBCDC or USBTMC), the SCPI ID Identity, and the full LAN / Ethernet setup on the `Lan Setup` menu (DHCP, IP Address / Subnet / Gateway / DNS1 / DNS2, MAC Address, LAN connect delay, reboot-to-apply, and the Web / Telnet / Telnet Port / Telnet ECHO / TCP / TCP Port protocol services). Closes with the GPIB pin assignment and a Telnet/TCP remote terminal session example. Stops before the Web Control Interface (page 247+).

## Content

### Return to Local Control Mode

**Background** — When the unit is in remote control mode, the RMT icon `RMT` above the main display can be seen. When this icon is not displayed, it indicates that the unit is in local control mode.

In order to switch back to the Local control mode (front panel operation), press the `Shift` key.

### Configure SCPI ID Setting

**Background** — The `*IDN?` query returns the manufacturer, model number, serial number and system firmware version number. When SCPI ID is set to User, a user defined manufacturer and model number is returned with the `*IDN?` query. Please see the `SYSTem:IDNStr` command on page 329 for details.

**Step**

1. Press the `Menu` key, and then the `Page Down` key repeatedly until the Interface configuration menu appears.

   *Figure: Interface configuration menu — tabs `System` / `Display` / `Interface` / `Lan Setup`; fields `Interface` (RS232), `RS232 / BaudRate` (116200), `FlowCtrl` (OFF), `RS232:TX Term / EndOfLine` (CR+LF), `Separation` (COMMA); right column `LanConnDelay` (00 sec), `USB / Protocol` (USBCDC), `GPIB / Address` (15), `SCPI ID / Identity` (Default); softkeys `Page Up` `Page Down` `PREV` `NEXT` `Enter` `Exit Menu`*

2. Press the `F4` (NEXT) key repeatedly or scroll the Knob key to move to the SCPI ID field.

3. Press the `F5` (Enter) key or Knob key followed by scrolling Knob key or pressing `+/-` keys to land on the desired SCPI ID Identity option.

   *Figure: SCPI ID Identity dropdown showing options `Default` and `User`*

4. Press the `F5` (Enter) key or Knob key again to confirm the desired SCPI ID Identity option.

### Configure USB Interface

**USB Configuration**

| | |
|---|---|
| PC side connector | Front panel, Type A, host |
| Unit side connector | Rear panel, Type B, device |
| USB Speed | 2.0 (Full speed) |

**Steps**

1. Press the `Menu` key, and then the `Page Down` key repeatedly until the Interface configuration menu appears.

2. Press the `F5` (Enter) key or Knob key followed by scrolling Knob key or pressing `+/-` keys to land on the USB option.

   *Figure: `Interface` dropdown showing options `RS232` / `USB` / `LAN` / `GPIB`*

3. Press the `F5` (Enter) key or Knob key to select the USB option.

4. Press the `F4` (NEXT) key repeatedly or scroll the Knob key to move to the USB - Protocol field.

5. Press the `F5` (Enter) key or Knob key followed by scrolling Knob key or pressing `+/-` keys to land on the desired USB Protocol option.

   *Figure: USB `Protocol` dropdown showing options `USBCDC` and `USBTMC`*

6. Press the `F5` (Enter) key or Knob key again to confirm the USB Protocol option.

7. Connect the USB cable to the rear panel terminal (upper port).

### Set the USB Protocol

**Description** — The USB device port on the rear panel is used for remote control. The USB port can be configured as either a TMC or CDC interface.

Before the GDM-9060/9061 can be used for remote control utilizing the CDC or TMC USB class, install the appropriate CDC or TMC USB driver included on the User Manual CD.

USBCDC:

The USB port on the GDM-9060/9061 will appear as a virtual COM port to a connected PC.

USBTMC:

The GDM-9060/9061 can be controlled using National Instruments NI-Visa software*. NI-Visa supports USB TMC.

> **NOTE:** *To use the TMC interface National Instruments Measurement and Automation Explorer can be used. This program is available on the NI website, www.ni.com, via a search for the VISA Run-time Engine page, or "downloads" at the following URL, http://www.ni.com/visa/

### Configure RS232 Interface

**RS232 Configuration**

| | |
|---|---|
| Connector | D-sub 9 pin, male |
| Baud rate | 115200/57600/38400/19200/9600 |
| Data bits | 8 |
| Parity | none |
| Stop bits | 1 |
| Flow control | none, RTS/CTS, DTR/DSR |

**Step**

1. Press the `Menu` key, and then the `Page Down` key repeatedly until the Interface configuration menu appears.

2. Press the `F5` (Enter) key or Knob key followed by scrolling Knob key or pressing `+/-` keys to land on the RS232 option.

3. Press the `F5` (Enter) key or Knob key to select the RS232 option.

4. Press the `F4` (NEXT) key repeatedly or scroll the Knob key to move to the RS232 - Baud Rate field.

5. Press the `F5` (Enter) key or Knob key followed by scrolling Knob key or pressing `+/-` keys to land on the desired RS232 Baud Rate option.

   *Figure: `BaudRate` dropdown showing options `9600` / `19200` / `38400` / `57600` / `116200`*

6. Press the `F5` (Enter) key or Knob key again to confirm the desired RS232 Baud Rate option.

7. Press the `F4` (NEXT) key repeatedly or scroll the Knob key to move to the RS232 - FlowCtrl field.

8. Press the `F5` (Enter) key or Knob key followed by scrolling Knob key or pressing `+/-` keys to land on the desired RS232 FlowCtrl option.

   *Figure: `FlowCtrl` dropdown showing options `OFF` / `RTS/CTS` / `DTR/DSR`*

9. Press the `F5` (Enter) key or Knob key again to confirm the desired RS232 FlowCtrl option.

10. Press the `F4` (NEXT) key repeatedly or scroll the Knob key to move to the RS232: TX Term - EndOfLine field.

11. Press the `F5` (Enter) key or Knob key followed by scrolling Knob key or pressing `+/-` keys to land on the desired RS232: TX Term - EndOfLine option.

    *Figure: `EndOfLine` dropdown showing options `CR+LF` / `LF+CR` / `CR` / `LF`*

12. Press the `F5` (Enter) key or Knob key again to confirm the desired RS232: TX Term EndOfLine option.

    > **NOTE:** GPIB, USBTMC and LAN are fixed with only LF option.

13. Press the `F4` (NEXT) key repeatedly or scroll the Knob key to move to the RS232: TX Term - Separation field.

14. Press the `F5` (Enter) key or Knob key followed by scrolling Knob key or pressing `+/-` keys to land on the desired RS232: TX Term - Separation option.

    *Figure: `Separation` dropdown showing options `EOL` and `COMMA`*

15. Press the `F5` (Enter) key or Knob key again to confirm the desired RS232: TX Term Separation option.

    > **NOTE:** GPIB, USBTMC and LAN are fixed with only COMMA option.

16. Connect the RS232 cable to the rear panel terminal.

**RS232 Pin Assignment**

| Pin | Input/Output | Description |
|---|---|---|
| 1 | ------ | No Connection |
| 2 | Input | Receive Data (RxD) |
| 3 | Output | Transmit Data (TxD) |
| 4 | Output | Data Terminal Ready (DTR) |
| 5 | ------ | Signal Ground (SG) |
| 6 | Input | Data Set Ready (DSR) |
| 7 | Input | Request To Send (RTS) |
| 8 | Output | Clear To Send (CTS) |
| 9 | ------ | No Connection |

> **NOTE:** Do Not connect wire to pin 9 as it is specifically used for update function by certified factories.

**RS-232 Connection** — GDM-906X provides the complete RS-232 signals control. Select the corresponding null-modem cable, which has the DB-9 female connectors on both ends, when the port of DB-9 male connector on PC is utilized. The connecting diagram is shown as the following figure where the pin 2 (TxD) crossly links with the pin 3 (RxD) and the pin 5 (GND) is the necessary connection.

*Figure: RS-232 Cable null-modem wiring — Instrument DB9 Male ↔ DB9 Female cable ↔ DB9 Female ↔ PC DB9 Male; pin 2 (Rx) ↔ pin 3 crossover, pin 5 (GND) straight*

**GTL-234 Connection** — An example below when optional accessory GTL-234 is being employed. Likewise, first crossly link the pin 2 (TxD) to the pin 3 (RxD) and the pin 5 (GND) is the necessary connection. Furthermore, crossly link the pin 7 (RTS) to pin 8 (CTS) for advanced function of GTL-234.

*Figure: GTL-234 Cable wiring — Instrument DB9 Male ↔ DB9 Female cable ↔ DB9 Female ↔ PC DB9 Male; pin 2↔3 crossover, pin 5 straight, pin 7↔8 crossover*

**More Connections** — If more other cables are applied, the diagram of full connections is illustrated as the following figure where the pin 2 (TxD), pin 3 (RxD) as well as pin 5 (GND), as mentioned previously, are necessary whilst the pin 4 (DTR), pin 6 (DSR), pin 7 (RTS) and pin 8 (CTS) are optionally required depending on different cables with varied functions to be used.

*Figure: Other Cables full-connection wiring — Instrument DB9 Male ↔ DB9 Female cable ↔ DB9 Female ↔ PC DB9 Male; pins 2/3 crossover, pin 5 GND, pins 4/6 and 7/8 crossover*

### Set the FlowCtrl handshake

**Description** — The FlowCtrl configuration menu can set the handshake for return messages.

### Set the EOL Character

**Description** — The TX TERM configuration menu can set the EOL (end-of-line) character for return messages.

The EOL characters that can be received from the PC include CR+LF, LF+CR, CR or LF. The most common EOL character is CR+LF.

> **NOTE:** The USBTMC, GPIB and LAN's EOL character is fixed with LF.

| | |
|---|---|
| EOL | CR+LF, LF+CR, CR, LF (default = CR+LF) |

### Set the Separation Character

**Description** — The TX TERM configuration menu can set the separation character for multiple return measurement values.

> **NOTE:** The USBTMC, GPIB and LAN's separation character is fixed with comma.

### Insert GPIB Card (Optional)

**Power Off** — Turn the Power Off and take out the power cord.

**Open the GDM-906X optional communication port** — Take off the two screws on the slot corners to remove the optional communication port cover. Keep the screws for later reuse.

**Insert the GPIB card** — Insert the GPIB card into the slot. Close the cover by tightening the screws.

**Power On** — Connect the power cord and turn On the power.

### Configure GPIB Interface

**GPIB Configuration**

| | |
|---|---|
| Connector | 24 Pin female GPIB port |
| Address | 0-30 (default 15) |

**Step**

1. Press the `Menu` key, and then the `Page Down` key repeatedly until the Interface configuration menu appears.

2. Press the `F5` (Enter) key or Knob key followed by scrolling Knob key or pressing `+/-` keys to land on the GPIB option.

   > **NOTE:** As the figure shown below, GPIB option won't appear when optional GPIB card is not well installed.

3. Press the `F5` (Enter) key or Knob key to select the GPIB option.

4. Press the `F4` (NEXT) key repeatedly or scroll the Knob key to move to the GPIB - Address field.

   > **NOTE:** As the figure shown below, the GPIB - Address field won't appear when optional GPIB card is not installed.

5. Use the Left/Right keys to move the cursor followed by scrolling Knob key or pressing `+/-` keys to define GPIB Address. Also, you can press Number keys to directly input a specific digit.

6. Press the `F5` (Enter) key or Knob key again to confirm the input digit for GPIB Address.

7. Connect the GPIB cable to the rear panel optional communication port after the GPIB card has been installed.

**GPIB Pin Assignment**

| Pin | Signal | Pin | Signal |
|---|---|---|---|
| 1 | Data I/O 1 | 13 | Data I/O 5 |
| 2 | Data I/O 2 | 14 | Data I/O 6 |
| 3 | Data I/O 3 | 15 | Data I/O 7 |
| 4 | Data I/O 4 | 16 | Data I/O 8 |
| 5 | EOI | 17 | REN |
| 6 | DAV | 18 | Ground (DAV) |
| 7 | NRFD | 19 | Ground (NRFD) |
| 8 | NDAC | 20 | Ground (NDAC) |
| 9 | IFC | 21 | Ground (IFC) |
| 10 | SRQ | 22 | Ground (SRQ) |
| 11 | ATN | 23 | Ground (ATN) |
| 12 | SHIELD Ground | 24 | Single GND |

### Activate Ethernet Interface

**Overview**

| | |
|---|---|
| Speed | 10BaseT/100BaseTx |

**Ethernet (LAN) port activation**

0. Press the `Menu` key, and then the `Page Down` key repeatedly until the Interface configuration menu appears.

1. Press the `F5` (Enter) key or Knob key followed by scrolling Knob key or pressing `+/-` keys to land on the LAN option.

2. Press the `F5` (Enter) key or Knob key to select the LAN option.

3. Connect the Ethernet cable to the rear panel Ethernet port.

### LAN Connect Delay Time

**Background** — User is able to set a delay time in second(s) for LAN connection when booting up the GDM-906X.

**LAN Connect Delay Setting**

1. Press the `Menu` key, and then the `Page Down` key repeatedly until the Interface configuration menu appears.

2. Press the `F4` (NEXT) key repeatedly or scroll the Knob key to move to LAN Connect Delay Time.

3. Use the Left/Right keys to move the cursor followed by scrolling Knob key or pressing `+/-` keys to set LAN Connect Delay Time. Also, you can press Number keys to directly input a specific digit.

4. Press the `F5` (Enter) key or Knob key again to confirm the LAN Connect Delay Time.

### Reboot LAN Setup

**Background** — To reboot is used to reset the Ethernet configuration when new settings have been made. When the Lan Setup settings have been edited, reboot to validate the changes and reset the Ethernet to the new configuration settings. New Ethernet configuration settings are only updated after the GDM-906X has been reset.

> **NOTE:** *Figure: Lan Setup menu with `Need reboot to change the config` warning highlighted below the IP Address Setup block. Left column `DHCP` (ON), `IP Address Setup` — `IP Address` 172.016.001.100, `Subnet` 255.255.255.000, `Gateway` 172.016.001.254, `DNS1` 172.016.001.262, `DNS2` 172.016.001.248. Right column `MAC Address` 160110FF0809, `Protocol` — `Web` ON, `Telnet` ON, `Telnet Port` 03000, `Telnet ECHO` ON, `TCP` ON, `TCP Port` 03001.*

### Configure Ethernet Interface to DHCP

**Background** — The GDM-906X supports DHCP to have an IP address and other configuration parameters automatically assigned by a DHCP server.

**DHCP Configuration**

1. Press the `Menu` key, and then the `Page Down` key repeatedly until the Lan Setup configuration menu appears.

2. Press the `F5` (Enter) key or Knob key followed by scrolling Knob key or pressing `+/-` keys to land on the ON option.

   *Figure: `DHCP` dropdown showing options `OFF` and `ON`*

3. Press the `F5` (Enter) key or Knob key to select the DHCP ON option.

### Configure Ethernet IP

**Background** — The GDM-906X supports manually setting of the IP addresses, including the subnet mask, gateway, DNS1 and DNS2.

> **NOTE:** The IP Address Setup can only be edited if DHCP is off.

**IP Address Configuration**

1. Press the `Menu` key, and then the `Page Down` key repeatedly until the Lan Setup configuration menu appears.

2. Press the `F4` (NEXT) key repeatedly or scroll the Knob key to move to the IP Address Setup – IP Address field.

3. Use the Left/Right keys to move the cursor followed by scrolling Knob key or pressing `+/-` keys to define IP Address. Also, you can press Number keys to directly input a specific digit.

4. Press the `F5` (Enter) key or Knob key to confirm the input digit for IP1 Address. And the cursor will automatically jump to next groups.

5. Repeat the steps 3 to 4 for IP2, IP3 and IP4.

   > **NOTE:** The IP address is divided in 4 groups; IP1:IP2:IP3:IP4.

**Subnet Configuration**

6. Press the `F4` (NEXT) key repeatedly or scroll the Knob key to move to the IP Address Setup – Subnet field.

7. Use the Left/Right keys to move the cursor followed by scrolling Knob key or pressing `+/-` keys to define Subnet. Also, you can press Number keys to directly input a specific digit.

8. Press the `F5` (Enter) key or Knob key again to confirm the input digit for S1. And the cursor will automatically jump to next groups.

9. Repeat steps 7 to 8 for S2, S3 and S4.

   > **NOTE:** The Subnet is divided in 4 groups; S1:S2:S3:S4.

**Gateway Configuration**

10. Press the `F4` (NEXT) key repeatedly or scroll the Knob key to move to the IP Address Setup – Gateway field.

11. Use the Left/Right keys to move the cursor followed by scrolling Knob key or pressing `+/-` keys to define Gateway. Also, you can press Number keys to directly input a specific digit.

12. Press the `F5` (Enter) key or Knob key to confirm the input digit for G1. And the cursor will automatically jump to next groups.

13. Repeat steps 11 to 12 for G2, G3 and G4.

    > **NOTE:** The Gateway is divided in 4 groups; G1:G2:G3:G4.

**DNS1 Configuration**

14. Press the `F4` (NEXT) key repeatedly or scroll the Knob key to move to the IP Address Setup – DNS1 field.

15. Use the Left/Right keys to move the cursor followed by scrolling Knob key or pressing `+/-` keys to define DNS1. Also, you can press Number keys to directly input a specific digit.

16. Press the `F5` (Enter) key or Knob key again to confirm the input digit for D11. And the cursor will automatically jump to next groups.

17. Repeat steps 15 to 16 for D12, D13 and D14.

    > **NOTE:** The Gateway is divided in 4 groups; D11:D12:D13:D14.

**DNS2 Configuration**

18. Press the `F4` (NEXT) key repeatedly or scroll the Knob key to move to the IP Address Setup – DNS2 field.

19. Use the Left/Right keys to move the cursor followed by scrolling Knob key or pressing `+/-` keys to define DNS2. Also, you can press Number keys to directly input a specific digit.

20. Press the `F5` (Enter) key or Knob key again to confirm the input digit for D21. And the cursor will automatically jump to next groups.

21. Repeat steps 20 to 21 for D22, D23 and D24.

    > **NOTE:** The Gateway is divided in 4 groups; D21:D22:D23:D24.

### Configure Protocol

**Background** — The GDM-906X supports 3 Ethernet protocol to used, including the Web browser, Telnet and TCP.

**Web Configuration**

1. Press the `Menu` key, and then the `Page Down` key repeatedly until the Lan Setup configuration menu appears.

2. Press the `F4` (NEXT) key repeatedly or scroll the Knob key to move to the Protocol – Web field.

3. Press the `F5` (Enter) key or Knob key followed by scrolling Knob key or pressing `+/-` keys to land on the ON option.

   *Figure: `Web` protocol dropdown showing options `OFF` and `ON`*

4. Press the `F5` (Enter) key or Knob key to confirm the Web ON option.

**Telnet Configuration**

5. Press the `F4` (NEXT) key repeatedly or scroll the Knob key to move to the Protocol – Telnet field.

6. Press the `F5` (Enter) key or Knob key followed by scrolling Knob key or pressing `+/-` keys to land on the ON option.

   *Figure: `Telnet` protocol dropdown showing options `OFF` and `ON`*

7. Press the `F5` (Enter) key or Knob key to confirm the Telnet ON option.

**Telnet Port Configuration**

8. Press the `F4` (NEXT) key repeatedly or scroll the Knob key to move to the Protocol – Telnet Port field.

9. Use the Left/Right keys to move the cursor followed by scrolling Knob key or pressing `+/-` keys to define Telnet Port. Also, you can press Number keys to directly input a specific digit.

10. Press the `F5` (Enter) key or Knob key to confirm the input digit for Telnet Port.

    | | |
    |---|---|
    | Range | 1024~65535 (Default = 3000) |

**Telnet ECHO Configuration**

11. Press the `F4` (NEXT) key repeatedly or scroll the Knob key to move to the Protocol – Telnet ECHO field.

12. Press the `F5` (Enter) key or Knob key followed by scrolling Knob key or pressing `+/-` keys to land on the ON option.

    *Figure: `Telnet ECHO` protocol dropdown showing options `OFF` and `ON`*

13. Press the `F5` (Enter) key or Knob key again to confirm the Telnet ECHO ON option.

**TCP Configuration**

14. Press the `F4` (NEXT) key repeatedly or scroll the Knob key to move to the Protocol - TCP field.

15. Press the `F5` (Enter) key or Knob key followed by scrolling Knob key or pressing `+/-` keys to land on the ON option.

    *Figure: `TCP` protocol dropdown showing options `OFF` and `ON`*

16. Press the `F5` (Enter) key or Knob key again to confirm the TCP ON option.

**TCP Port Configuration**

17. Press the `F4` (NEXT) key repeatedly or scroll the Knob key to move to the Protocol – TCP Port field.

18. Use the Left/Right keys to move the cursor followed by scrolling Knob key or pressing `+/-` keys to define TCP Port. Also, you can press Number keys to directly input a specific digit.

    | | |
    |---|---|
    | Range | 1024~65535 (Default = 3001) |

19. Press the `F5` (Enter) key or Knob key again to confirm the input digit for TCP Port.

### Remote Terminal Session (Telnet / TCP)

**Background** — A terminal application can be used to remotely control the GDM-906X via the Telnet or TCP protocol.

**Operation**

1. Establish a connection via the Ethernet port.

2. Open a terminal program such as Hyper Terminal and enter the IP address and port number of the GDM-906X.

3. Run this query via the terminal application:

   `*idn?`

   The command will return the instrument manufacturer, model number, serial number and firmware version in the following format:

   `>GWInstek,GDM9061,000000000,M0.69B_S0.25B`

4. See page 252 for more details on remote commands.

## Cross-references

- [`screens/config-interface.md`](../../screens/config-interface.md) — the `Interface` configuration menu (tabs `System` / `Display` / `Interface` / `Lan Setup`) documented in the SCPI ID, USB, RS232, and GPIB step sequences here is the same screen as the corpus's `config-interface` screen. The interface-select dropdown (`RS232` / `USB` / `LAN` / `GPIB`) and the RS232 / USB / GPIB / SCPI ID parameter fields map directly to that screen's controls.
- [`screens/config-lan.md`](../../screens/config-lan.md) — the `Lan Setup` configuration menu (DHCP, IP Address Setup block, MAC Address, and the Protocol services Web / Telnet / Telnet Port / Telnet ECHO / TCP / TCP Port) documented in the Reboot LAN Setup, DHCP, Ethernet IP, and Configure Protocol step sequences here is the same screen as the corpus's `config-lan` screen.

## Confidence notes

- The LAN subsection actually spans pages 230–246, slightly wider than the "211-246" page_range frontmatter implies for the whole chunk. Within that, the `Lan Setup` screen (DHCP / IP Address Setup / Protocol) that backs `config-lan` is documented on pages 232–245. The interface-select / RS232 / USB / GPIB material that backs `config-interface` is pages 212–229. The chunk page_range is correct as the union; flagging the internal split for the `pair-manual` pass.
- Several on-screen IP/Subnet/Gateway/DNS values in the source figures are example data captured at different times and are internally inconsistent across screenshots (e.g. DNS1 shows `262` in some figures — not a valid octet, an artifact of the small scanned resolution; IP Address shows `172.016.001.100` in some figures and `192.016.001.100` in others). These are transcribed as illustrative `*Figure:*` captions, not as authoritative defaults. The only authoritative defaults stated in body text are Telnet Port `3000`, TCP Port `3001`, GPIB Address `15`, and the port range `1024~65535`.
- The MAC Address value differs between figures (`160110FF0809` vs `170A11FF0105`) because the screenshots were taken on different physical units; transcribed verbatim per figure where shown.
- Page-211 chapter divider lists the section's sub-headings and page numbers (table of contents); the body uses the actual in-text heading wording, which matches the TOC.
- Step numbering for "Activate Ethernet Interface" begins at `0.` in the source (page 230); transcribed verbatim.
- The repeated "The Gateway is divided in 4 groups" NOTE under the DNS1 and DNS2 configuration steps appears to be a copy-paste error in the source manual (the field being configured is DNS1 / DNS2, not Gateway). Transcribed verbatim per the locked-format rule; flagging as a likely source error, not a transcription error.
