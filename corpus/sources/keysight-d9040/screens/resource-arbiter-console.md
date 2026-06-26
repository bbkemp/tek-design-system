---
software: "Keysight D9040 (D9040USBC USB4 Test Application / D9040DPPC DisplayPort Test App)"
software_version: TBD
screen_id: resource-arbiter-console
screen_title: Resource Arbiter — Console
screen_type: status
image: resource-arbiter-console.jpg
source_photo: uploads/photos/IMG_7003.jpg
function_state: TAP Engine running; instruments discovered; lock granted
navigation_path: [Resource Arbiter, Console]
parent_screens: []
child_screens:
  - resource-arbiter
related_hardware: [dut-setup]
controls:
  - id: window-titlebar
    label: ResourceArbiter - Shortcut
    type: indicator
    state: active
    action: Standard Windows console window for the Resource Arbiter process; spawned from a Desktop shortcut that invokes the TAP CLI.
  - id: cmd-prompt
    label: "C:\\Program Files\\Keysight\\Test Automation\\Packages\\Resource Arbiter Server> tap resourcearbiter -c"
    type: input
    state: active
    action: TAP CLI invocation that starts the Resource Arbiter Server. Operator launches once at session start; subsequent UI runs in the browser at the listening address.
  - id: log-stream
    label: Console log
    type: readout
    state: active
    action: Scrolling log of license check, TAP engine startup, instrument discovery, and lock grant / release events. Read-only; closing the window terminates the arbiter.
  - id: status-listening-on
    label: Now listening on
    type: indicator
    state: active
    action: Reports the HTTP host:port the browser UI (resource-arbiter screen) should be pointed at. Here, http://0.0.0.0:55441.
  - id: status-current-setup
    label: The current setup is
    type: indicator
    state: active
    action: Names the active arbiter configuration profile. Here, "Default".
  - id: status-application-started
    label: Application started. Press Ctrl+C to shut down.
    type: indicator
    state: active
    action: Confirms the server is ready to accept browser/REST clients. Ctrl+C is the documented shutdown affordance — no GUI close.
---

# Resource Arbiter — Console

## Purpose

The Resource Arbiter Console is the boot surface for the multi-instrument coordination service that fronts the D9040 family. It is a Windows command-prompt window running `tap resourcearbiter -c` from `C:\Program Files\Keysight\Test Automation\Packages\Resource Arbiter Server`. On startup it performs a license check, starts the TAP engine, discovers visible instruments (Scope, AGGC2_USB4, AGGC2_USB4, AGGC2_DP — note the duplicate USB4 entry is visible in the log), and then listens on a TCP port for the browser UI documented in `resource-arbiter`. From that point on it is a passive log surface — every lock request, lock grant, lock release, and resource-information query streams here, providing the audit trail for which test application owns which instrument capability at any moment. The arbiter is what enables D9040USBC and D9040DPPC to coexist on the same scope without trampling each other.

## Controls inventory

The window has only one visible region: a standard Windows console, with the cmd-prompt invocation at the top and a scrolling `log-stream` underneath. The titlebar (`window-titlebar`) reads `ResourceArbiter - Shortcut`, indicating the operator launched it from a Desktop shortcut rather than typing the command by hand.

The log is structured but not interactive. Three lines are particularly load-bearing as system-state readouts and are surfaced individually as controls so the RAG can retrieve them: `status-listening-on` (`Now listening on: http://0.0.0.0:55441`) tells the operator the URL for the browser UI; `status-current-setup` (`The current setup is: Default`) tells them which arbiter config profile is active; and `status-application-started` (`Application started. Press Ctrl+C to shut down.`) is the only shutdown affordance — there is no GUI exit.

There are no bezel or hardware controls. This is a desktop-PC console window on a Windows laptop, not an instrument front-panel surface.

## State variations

Across IMG_7002, IMG_7003, IMG_7004, IMG_7005 the same console window is shown at four points in its lifetime:

- **Initial discovery** (IMG_7002): `Performing License Check…`, `Starting the TAP Engine…`, four `Instrument "Scope" was discovered` / `Instrument "AGGC2_USB4" was discovered` / `Instrument "AGGC2_USB4" was discovered` / `Instrument "AGGC2_DP" was discovered` lines, then `KSI8RSA SwitchManager not used`, `TAP Engine successfully started`, `Hosting environment: Development`, `Content root path: C:\Program Files\Keysight\Test Automation\Packages\Resource Arbiter Server`, `Now listening on: http://0.0.0.0:55441`, `Application started. Press Ctrl+C to shut down.`, `The current setup is: Default`.
- **First lock cycle** (IMG_7003, IMG_7004): the discovery block is now followed by `LOCK Received request for '-: c -> [316 ws]', `LOCK Received request for '-: c -> D9040USBC_Acquire:' [23.2 ms]`, `Instrument was locked`, `LOCKPOLL 0a83f9ba-5c52-49ca-bo29-d29410dfdf094 'Scope' successful — lock now granted. [3.50 ms]`, `Resource Information was queried`, `Resource Information was queried`, `LOCK Received request for '-: c -> D9040USBC_Measure:' [29.5 ms]`, `Instrument was locked`, `LOCKPOLL 6a83f9ba-5c52-49ca-bo29-d29410dfdf094 'AGGC2_USB4' successful — lock now granted. [11.9 ms]`, `Resource Information was queried`. The presence of TWO locks (Acquire on Scope, then Measure on AGGC2_USB4) is the documented multi-instrument coordination pattern.
- **Steady state** (IMG_7005, IMG_7038): same buffer, additional scrollback above showing repeated lock-request / lock-grant cycles. IMG_7038 is the same console framed on the bench next to a piece of acquisition hardware, showing this window remains live for the duration of a test run.

The window is not visibly resizable in any photo; window chrome is the standard Windows 10/11 close/minimize/maximize triplet, all visible.

## Visible text (verbatim)

Window title: `ResourceArbiter - Shortcut`.

Prompt: `C:\Program Files\Keysight\Test Automation\Packages\Resource Arbiter Server> tap resourcearbiter -c`.

Log lines (across IMG_7003 and IMG_7004):

- `Performing License Check..`
- `Starting the TAP Engine..`
- `Instrument "Scope" was discovered`
- `Instrument "AGGC2_USB4" was discovered`
- `Instrument "AGGC2_USB4" was discovered`
- `Instrument "AGGC2_DP" was discovered`
- `KSI8RSA SwitchManager not used`
- `TAP Engine successfully started.`
- `Hosting environment: Development`
- `Content root path: C:\Program Files\Keysight\Test Automation\Packages\Resource Arbiter Server`
- `Now listening on: http://0.0.0.0:55441`
- `Application started. Press Ctrl+C to shut down.`
- `The current setup is: Default`
- `LOCK Received request for '-: c -> [316 ws]`
- `LOCK Received request for '-: c -> D9040USBC_Acquire:' [23.2 ms]`
- `Instrument was locked`
- `LOCKPOLL 6a83f9ba-5c52-49ca-bo29-d29410dfdf094 'Scope' successful --> lock now granted. [3.50 ms]`
- `Resource Information was queried`
- `Resource Information was queried`
- `LOCK Received request for '-: c -> D9040USBC_Measure:' [29.5 ms]`
- `Instrument was locked`
- `LOCKPOLL 6a83f9ba-5c52-49ca-bo29-d29410dfdf094 'AGGC2_USB4' successful --> lock now granted. [11.9 ms]`
- `Resource Information was queried`

## Confidence notes

Transcriptions verified against the 1600 px downscale (`resource-arbiter-console.jpg`). Items below are uncertain and should be checked against a higher-resolution capture, a clean `tap resourcearbiter -c` run, or the Resource Arbiter documentation before being treated as authoritative:

- The duplicate `Instrument "AGGC2_USB4" was discovered` line is clearly visible twice in the log block. Whether this is a known cosmetic duplicate or indicative of two physically distinct USB4 instruments registered under the same name is **not derivable from the photo**.
- The lock-request strings (e.g. `'-: c -> [316 ws]'`) include angle-style arrows and unit suffixes whose exact glyphs are at the edge of legibility — `316 ws` may be `316 ms` (millisecond), and the leading `c` may be the active call sign or session id.
- GUID hex strings transcribed (e.g. `6a83f9ba-5c52-49ca-bo29-d29410dfdf094`) include characters that may be `0` vs `o` confusion at this resolution.
- The TAP engine log claim that this is `Hosting environment: Development` is **not necessarily** the production / production-licensed condition — it may indicate a debug build or an internal Keysight environment label. Unverified.
- IMG_7002 differs slightly from IMG_7003 only in the visible scroll position; both belong to this same screen identity.

## Manual references

> Pending. Manual will be paired in a later pass (Keysight D9040USBC USB4 Test Application User Guide / Test Automation Platform docs, sections covering the Resource Arbiter service, the `tap` CLI, and multi-application capability locking).

## Source photo

Selected from `uploads/photos/`: **IMG_7003.jpg** — chosen for clarity (laptop-screen framing fills most of the frame, console text is legibly large, no obstructing hand, captures both the steady-state listening line and the early lock-grant block on one screen). Other candidates and why they were not used for step-0:

- `IMG_7002.jpg` — same UI, but the second window pane (an early USB4 Test Application capture in the top-right) intrudes on the console region and the framing is slightly more oblique.
- `IMG_7004.jpg` — usable framing but a hand/finger is partially visible at the lower-left and the small floating USB4 panel to the right partially overlaps the console.
- `IMG_7005.jpg` — a separate **Figure 1-T0_PstoZ_frequency** waveform window is partly overlaid on the console; lower fidelity for the console-itself view.
- `IMG_7038.jpg` — bench-context shot (this console window on the laptop next to instrumentation) — useful as proof of pairing, but the console text is too small to be a transcription reference.
