# Twitch Clip Redirector 🎬

A lightweight tool to automatically redirect Twitch channel-specific clip URLs to the standalone `clips.twitch.tv` format.

![Version](https://img.shields.io/badge/version-1.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 🚀 Quick Install

**[Click here to install the script directly](https://raw.githubusercontent.com/OD728/TCR/main/twitch-clips-redirect.users.js)**
*(Requires Tampermonkey or ScriptCat)*

-----

## The Problem

Twitch often uses two different URL structures for clips:

1.  `https://www.twitch.tv/username/clip/SlugName`
2.  `https://clips.twitch.tv/SlugName`

The channel-specific version (1) is often slower to load and frequently suffers from a bug where the page randomly scrolls down upon opening.

## The Solution

This script intercepts requests to the channel-specific URL and instantly redirects you to the clean, standalone clip page.

-----

## Installation

### 1\. Install a Manager

You must have a userscript manager installed in your browser:

  - [Tampermonkey](https://www.tampermonkey.net/)
  - [ScriptCat](https://github.com/scriptscat/scriptcat)

### 2\. Enable Developer Mode (Chrome/Edge Users)

Due to Manifest V3 (MV3) restrictions, you **must** enable Developer Mode:

1.  Open `chrome://extensions` in your browser.
2.  Toggle the **Developer mode** switch in the top right corner.

### 3\. Install the Script

Simply click the link below. Your manager will detect the file and ask if you want to install:
**[Install Twitch Clip Redirect](https://raw.githubusercontent.com/OD728/TCR/main/twitch-clips-redirect.users.js)**

If the automatic link doesn't work, follow these steps:
1. Open your userscript manager.
2. Click the **"Create a new script"** button (usually a plus `+` icon).
3. Delete any default placeholder code.
4. Copy the full code from **[this link](https://raw.githubusercontent.com/OD728/TCR/main/twitch-clips-redirect.users.js)** and paste it into the editor.
5. Press `File` > `Save` or `Ctrl+S`.

-----

## How it Works

The script uses a Regular Expression (Regex) to identify the "slug" (the unique ID of the clip) and rebuilds the URL instantly.
