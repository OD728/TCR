# Twitch Clip Redirector 🎬

A lightweight tool to automatically redirect Twitch channel-specific clip URLs to the standalone `clips.twitch.tv` format.

![Version](https://img.shields.io/badge/version-1.00-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Compatibility](https://img.shields.io/badge/Userscript%20Managers-Compatible-brightgreen.svg)

## The Problem
Twitch often uses two different URL structures for clips:
1. `https://www.twitch.tv/username/clip/SlugName`
2. `https://clips.twitch.tv/SlugName`

The channel-specific version (1) is often slower to load because it initializes the entire channel interface. Additionally, it frequently suffers from a bug where the page **randomly scrolls down automatically upon opening**, forcing you to scroll back up to see the video.

## The Solution
This script intercepts requests to the channel-specific URL and instantly redirects you to the clean, standalone clip page.

---

## Installation

### Userscript (Tampermonkey / Violentmonkey)
1. Install a userscript manager like [Tampermonkey](https://www.tampermonkey.net/) or [ScriptCat](https://github.com/scriptscat/scriptcat)
2. Create a "New Userscript".
3. Paste the code from `twitch-redirect.user.js` (found in this repo).
4. Save and you're done!

### Important MV3 Compatibility Note (Chrome/Edge)
Google's Manifest V3 (MV3) update introduces restrictions that affect some older userscript managers. If you are using a Chromium-based browser (Chrome, Edge) and encounter issues:
1.  Ensure you have the latest version of your chosen manager.
2.  Be aware that some managers (like **Tampermonkey** and **Violentmonkey**) offer **MV3-compatible beta versions** or may require the user to manually enable **Developer Mode** to function correctly.
3.  **Scriptcat** is known for its strong MV3 support.
---

## How it Works
The script uses a Regular Expression (Regex) to identify the "slug" (the unique ID of the clip) and rebuilds the URL.
