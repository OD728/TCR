// ==UserScript==
// @name         Twitch Clip Redirect
// @namespace    https://github.com/OD728/TCR
// @version      1.0
// @description  Redirect clips from twitch.tv to clips.twitch.tv
// @author       RM
// @license      MIT
// @match        *://*.twitch.tv/*/clip/*
// @grant        none
// @run-at       document-start
// @homepage     https://github.com/OD728/TCR
// @downloadURL  https://github.com/OD728/TCR/raw/main/twitch-clips-redirect.user.js
// @updateURL    https://github.com/OD728/TCR/raw/main/twitch-clips-redirect.user.js
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
