// ==UserScript==
// @name         Social Focus
// @namespace    http://decadentjs.github.io/social-focus
// @version      0.2
// @description  Keep focus on your social feeds
// @author       claudiopro
// @icon         http://decadentjs.github.io/resources/decadent_js_logo_32.png
// @match        https://twitter.com/*
// @match        https://www.facebook.com/*
// @match        https://www.facebook.sg/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function(w, d, undefined) {
    'use strict';
    const NONE = 'none', LOAD = 'load', AUTO = 'auto', TIMEOUT = 10000;
    function sweep(sel, fn) { d.querySelectorAll(sel).forEach(fn); }
    function hide(el) { el.style.display = NONE; }
    function hide_all(sel) { sweep(sel, hide); }
    function conceal(el) {
        if (el.dataset.__sf) return;
        el.style.display = NONE;
        const btn = d.createElement('button');
        btn.className = 'Quo' + 'teTwe' + 'et--unav' + 'ailable';
        btn.style.width = '100%';
        btn.innerHTML = 'Show media';
        btn.addEventListener('click', e => {
            el.style.display = '';
            btn.remove();
        });
        el.parentNode.insertBefore(btn, el);
        el.dataset.__sf = true;
    }
    function conceal_all(sel) { sweep(sel, conceal); }
    function scan() {
        hide_all('.prom' + 'oted-t' + 'weet');
        hide_all('.prom' + 'oted-a' + 'ccount');
        const el = d.querySelector('#pag' + 'elet_e' + 'go_pane');
        if (el) {
            hide(el);
            // reset min-height
            sweep('.home_rig' + 'ht_column', el => el.style.minHeight = AUTO);
        }
        hide_all('div[d' + 'ata-x' + 't]');
        conceal_all('div.P' + 'layableM' + 'edia-pl' + 'ayer');
    }
    w.addEventListener(LOAD, scan);
    w.setInterval(scan, TIMEOUT);
})(window, window.document);
