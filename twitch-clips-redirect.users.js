// ==UserScript==
// @name         Twitch Clip Redirect
// @namespace    https://docs.scriptcat.org/
// @version      1.0
// @description  Redirect clips from twitch.tv to clips.twitch.tv
// @author       RM
// @downloadURL  https://github.com/OD728/TCR/raw/refs/heads/main/twitch-clips-redirect.user.js
// @updateURL    https://github.com/OD728/TCR/raw/refs/heads/main/twitch-clips-redirect.user.js
// @homepageURL  https://github.com/OD728/TCR
// @match        *://*.twitch.tv/*/clip/*
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    // Cleaned regex to avoid syntax errors
    const match = window.location.href.match(/twitch\.tv\/[^/]+\/clip\/([^/?#]+)/);
    
    if (match && match[1]) {
        window.location.replace("https://clips.twitch.tv/" + match[1]);
    }

})();
