// ==UserScript==
// @name         Social Focus
// @namespace    http://decadentjs.github.io/social-focus
// @version      0.1
// @description  Keep focus on your social feeds
// @author       claudiopro
// @icon         https://www.example.org/icon.png
// @match        https://twitter.com/*
// @match        https://www.facebook.com/*
// @match        https://www.facebook.sg/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function(w, d, undefined) {
    'use strict';
    var NONE = 'none', LOAD = 'load', AUTO = 'auto', TIMEOUT = 10000;
    function sweep(sel, fn) { Array.from(d.querySelectorAll(sel)).map(fn); }
    function hide(el) { el.style.display = NONE; }
    function hide_all(sel) { sweep(sel, hide); }
    function scan() {
        var el;
        hide_all('.prom' + 'oted-t' + 'weet');
        hide_all('.prom' + 'oted-a' + 'ccount');
        el = d.querySelector('#pag' + 'elet_e' + 'go_pane');
        if (el) {
            hide(el);
            // reset min-height
            sweep('.home_rig' + 'ht_column', function(el) {
                el.style.minHeight = AUTO;
            });
        }
        hide_all('div[d' + 'ata-x' + 't]');
    }
    w.addEventListener(LOAD, scan);
    w.setInterval(scan, TIMEOUT);
})(window, window.document);
