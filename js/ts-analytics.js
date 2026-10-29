/* TwinStack analytics
   Google Analytics 4 (G-TRGBC4HYEY) with Google Consent Mode v2 and a cookie banner.
   - The inline snippet in each page's <head> sets consent to "denied" by default
     (or "granted" if the visitor accepted before) and queues the GA config.
   - This file shows the banner, records the choice, loads gtag.js after the page
     has loaded, and sends events for the actions that matter.
   - Analytics cookies are only set after the visitor clicks Accept. */
(function () {
  var GA_ID = 'G-TRGBC4HYEY';
  var KEY = 'ts_consent';
  var w = window, d = document;

  w.dataLayer = w.dataLayer || [];
  if (typeof w.gtag !== 'function') { w.gtag = function () { w.dataLayer.push(arguments); }; }
  var gtag = w.gtag;

  function getChoice() { try { return w.localStorage.getItem(KEY); } catch (e) { return null; } }
  function saveChoice(v) { try { w.localStorage.setItem(KEY, v); } catch (e) {} }

  /* ---------- load gtag.js once the page has loaded ---------- */
  var loaded = false;
  function loadGA() {
    if (loaded) return; loaded = true;
    var s = d.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    d.head.appendChild(s);
  }
  function scheduleLoad() {
    var go = function () { if (w.requestIdleCallback) { w.requestIdleCallback(loadGA, { timeout: 2500 }); } else { setTimeout(loadGA, 1200); } };
    ['pointerdown', 'keydown', 'touchstart', 'scroll'].forEach(function (ev) {
      w.addEventListener(ev, loadGA, { passive: true, once: true });
    });
    setTimeout(go, 3500);
  }
  if (d.readyState === 'complete') { scheduleLoad(); } else { w.addEventListener('load', scheduleLoad); }

  /* ---------- cookie banner ---------- */
  var CSS = '.tscc{position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:2147483000;width:calc(100% - 32px);max-width:660px;' +
    'background:#0f172a;color:#e2e8f0;border-radius:16px;box-shadow:0 18px 50px -12px rgba(15,23,42,.55);border:1px solid rgba(148,163,184,.4);padding:16px 18px;' +
    'display:flex;align-items:center;gap:16px;font:400 14px/1.5 system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;box-sizing:border-box}' +
    '.tscc p{margin:0;flex:1}.tscc a{color:#7dd3fc;text-decoration:underline}' +
    '.tscc-b{display:flex;gap:8px;flex-shrink:0}' +
    '.tscc button{font:600 14px/1 system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;border-radius:10px;padding:11px 18px;cursor:pointer;border:1px solid #475569;background:transparent;color:#f1f5f9}' +
    '.tscc button:hover{border-color:#94a3b8}.tscc button.tscc-ok{background:#0369a1;border-color:#0369a1;color:#fff}.tscc button.tscc-ok:hover{background:#075985}' +
    '.tscc button:focus-visible{outline:2px solid #7dd3fc;outline-offset:2px}' +
    '@media(max-width:560px){.tscc{flex-direction:column;align-items:stretch;gap:12px;bottom:12px}.tscc-b button{flex:1}}';

  function showBanner() {
    if (d.getElementById('tscc')) return;
    if (!d.getElementById('tscc-css')) {
      var st = d.createElement('style'); st.id = 'tscc-css'; st.textContent = CSS; d.head.appendChild(st);
    }
    var b = d.createElement('div');
    b.id = 'tscc'; b.className = 'tscc';
    b.setAttribute('role', 'region'); b.setAttribute('aria-label', 'Cookie consent');
    b.innerHTML = '<p>We use Google Analytics cookies to understand how visitors use our site, so we can improve it. They are only set if you accept. ' +
      '<a href="/privacy-policy#cookies">Privacy Policy</a></p>' +
      '<div class="tscc-b"><button type="button" data-c="denied">Decline</button><button type="button" class="tscc-ok" data-c="granted">Accept</button></div>';
    b.addEventListener('click', function (e) {
      var btn = e.target.closest && e.target.closest('button[data-c]');
      if (!btn) return;
      var v = btn.getAttribute('data-c');
      saveChoice(v);
      gtag('consent', 'update', { analytics_storage: v });
      gtag('event', 'cookie_consent', { consent_choice: v });
      b.parentNode.removeChild(b);
    });
    d.body.appendChild(b);
  }
  /* lets the Privacy Policy offer a "Change cookie settings" button */
  w.tsCookieSettings = function () {
    var old = d.getElementById('tscc'); if (old) old.parentNode.removeChild(old);
    showBanner();
  };
  function initBanner() { if (!getChoice()) showBanner(); }
  if (d.readyState === 'loading') { d.addEventListener('DOMContentLoaded', initBanner); } else { initBanner(); }

  /* ---------- events ---------- */
  var APPS = {
    '852a8a41-e28c-4dac-a90a-9c8a16a1054d': 'Smart Forms & Surveys',
    'b493b297-f6c4-41ad-b1b3-6ca48a2585bb': 'Google Form Auto Sync',
    'f020d7cb-6467-4dcc-adda-c1ce6c620257': 'Smart Lookup Data Loader',
    'dc0aa216-dbed-49e5-86e0-542869f8dc26': 'Who Sees What'
  };
  function send(name, params) {
    params = params || {};
    params.page_path = w.location.pathname;
    gtag('event', name, params);
  }
  d.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    var h = a.getAttribute('href') || '';
    var label = (a.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 80);
    if (/wa\.me\//i.test(h)) { send('whatsapp_click', { link_text: label }); }
    else if (/^tel:/i.test(h)) { send('phone_click', { phone_number: h.replace(/^tel:/i, '') }); }
    else if (/^mailto:/i.test(h)) { send('email_click', { email_address: h.replace(/^mailto:/i, '').split('?')[0] }); }
    else if (/calendar\.app\.google|calendar\.google\.com/i.test(h)) { send('book_call_click', { link_text: label }); }
    else if (/appexchange\.salesforce\.com\/appxListingDetail/i.test(h)) {
      var m = h.match(/listingId=([0-9a-f-]+)/i);
      send('get_app_click', { app_name: (m && APPS[m[1]]) || 'Unknown app', link_text: label });
    }
    else if (/appexchange\.salesforce\.com\/appxConsultingListingDetail/i.test(h)) { send('partner_listing_click', { link_text: label }); }
  }, true);

  /* the WhatsApp button inside the website chat assistant is a <button>, not a link */
  d.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('#tc-wa');
    if (t) send('whatsapp_click', { link_text: 'Chat assistant' });
  }, true);

  /* form submissions (contact, nonprofit, service and estimator forms that send to Salesforce) */
  d.addEventListener('submit', function (e) {
    var f = e.target;
    if (!f || f.tagName !== 'FORM') return;
    var isLead = !!f.querySelector('input[name="oid"]');
    send(isLead ? 'generate_lead' : 'form_submit_other', { form_id: f.id || f.getAttribute('name') || 'form' });
  }, true);
})();
