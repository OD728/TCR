# Twitch Clip Redirector

Twitch Clip Redirector is a lightweight userscript that automatically redirects channel-specific clip URLs to the standalone `clips.twitch.tv` format. This solves issues with slow loading times and scrolling bugs found on standard channel clip pages.

## Quick Install

**[Install the script directly](https://raw.githubusercontent.com/OD728/TCR/main/twitch-clips-redirect.users.js)**
*(Requires Tampermonkey or ScriptCat)*

## Installation

### 1. Install a Manager
You must have a userscript manager installed:
* [Tampermonkey](https://www.tampermonkey.net/)
* [ScriptCat](https://github.com/scriptscat/scriptcat)

### 2. Enable Developer Mode (Chrome/Edge)
Due to Manifest V3 restrictions, you must enable Developer Mode:
1. Navigate to `chrome://extensions`.
2. Toggle **Developer mode** in the top right corner.

### 3. Install the Script
Click the link below to install:
**[Install Twitch Clip Redirect](https://raw.githubusercontent.com/OD728/TCR/main/twitch-clips-redirect.users.js)**

If the link fails:
1. Open your manager and create a new script.
2. Copy the code from [this link](https://raw.githubusercontent.com/OD728/TCR/main/twitch-clips-redirect.users.js).
3. Paste the code into the editor and save (Ctrl+S).

## How it Works
The script uses a Regular Expression to identify the clip's unique ID and instantly rebuilds the URL to the standalone format.
