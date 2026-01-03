# Twitch Clip Redirector 🎬

A lightweight tool to automatically redirect Twitch channel-specific clip URLs to the standalone `clips.twitch.tv` format.

![Version](https://img.shields.io/badge/version-1.00-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Compatibility](https://img.shields.io/badge/Userscript%20Managers-Compatible-brightgreen.svg)

## The Problem
Twitch often uses two different URL structures for clips:
1. `https://www.twitch.tv/username/clip/SlugName`
2. `https://clips.twitch.tv/SlugName`

The channel-specific version (1) can sometimes load slower or include extra site elements that you might want to avoid when sharing or viewing clips.

## The Solution
This script intercepts requests to the channel-specific URL and instantly redirects you to the clean, standalone clip page.

---

## Installation

### Option 1: Userscript (Tampermonkey / Violentmonkey)
1. Install a userscript manager like [Tampermonkey](https://www.tampermonkey.net/) or [ScriptCat](https://github.com/scriptscat/scriptcat)
2. Create a "New Userscript".
3. Paste the code from `twitch-redirect.user.js` (found in this repo).
4. Save and you're done!

---

## How it Works
The script uses a Regular Expression (Regex) to identify the "slug" (the unique ID of the clip) and rebuilds the URL.
