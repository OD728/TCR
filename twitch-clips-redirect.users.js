// ==UserScript==
// @name         Twitch Clip Redirect
// @namespace    https://github.com/OD728
// @version      1.0
// @description  Redirect clips from twitch.tv to clips.twitch.tv
// @author       RM
// @match        *://*.twitch.tv/*/clip/*
// @grant        none
// @license      MIT
// @downloadURL  https://github.com/OD728/TCR/raw/refs/heads/main/twitch-clips-redirect.users.js
// @updateURL    https://github.com/OD728/TCR/raw/refs/heads/main/twitch-clips-redirect.users.js
// @supportURL   https://github.com/OD728/TCR/issues
// @homepageURL  https://github.com/OD728/TCR
// ==/UserScript==

(function() {
    'use strict';

    // Using a more robust regex that ignores URL parameters and hashes
    const match = window.location.href.match(/twitch\.tv\/[^/]+\/clip\/([^/?#\s]+)/);
    
    if (match && match[1]) {
        // use replace to prevent the "back" button from getting stuck in a loop
        window.location.replace("https://clips.twitch.tv/" + match[1]);
    }
})();


