---
title: "Desk Phone or Softphone in Salesforce Voice?"
description: "Why a desk phone cannot keep a Salesforce Voice agent available on its own, what fails, and how auto-login plus auto-accept make it feel browser-free."
metaTitle: "Desk Phone or Softphone in Salesforce Voice? | TwinStack"
metaDescription: "Why a desk phone cannot keep a Salesforce Voice agent available on its own, what fails, and how auto-login plus auto-accept make it feel browser-free."
focusKeyword: Salesforce Voice desk phone
slug: blog-salesforce-voice-desk-phone-vs-softphone
url: /blog/salesforce-voice-desk-phone-vs-softphone.html
ogImage: "https://res.cloudinary.com/du42kbmmn/image/upload/w_1200,f_auto,q_auto/v1794298850/salesforce-voice-desk-phone-vs-softphone-cover_ftfg3a.jpg"
order: 50
stylesheet: /assets/css/imported/blog-salesforce-voice-desk-phone-vs-softphone.css
hideCta: true
scripts:
  - src: "/assets/js/imported/blog-salesforce-voice-desk-phone-vs-softphone/inline-1.js"
    head: true
    module: false
    nomodule: false
    defer: false
    async: false
  - src: "/assets/js/imported/blog-salesforce-voice-desk-phone-vs-softphone/ts-analytics.js"
    head: true
    module: false
    nomodule: false
    defer: true
    async: false
  - src: "/assets/js/imported/blog-salesforce-voice-desk-phone-vs-softphone/inline-2.js"
    head: false
    module: false
    nomodule: false
    defer: false
    async: false
scriptHtmlClass: scroll-smooth
scriptBodyClass: font-sans antialiased text-slate-800
scriptRemoved: "#navbar #mobile-menu-btn #mobile-menu #close-menu-btn .fixed .z-50 .top-6 .left-1/2 .-translate-x-1/2 .w-[95%] .max-w-7xl .rounded-2xl .border-slate-100 .shadow-2xl .justify-between .h-20 .transition-all .duration-300 .flex-shrink-0 .h-14 .w-auto .text-2xl .tracking-tight .block .ts-wm .ts-wm-top .text-[#343453] .color-shift-text .ts-wm-sub .hidden .md:flex .space-x-8 .ts-nav-links .hover:text-brand-600 .transition .ts-dd .ts-dd-car .ts-dd-menu .ts-btn-outline .px-5 .py-2.5 .bg-brand-600 .hover:bg-brand-900 .md:hidden .p-2 .inset-y-0 .w-64 .bg-white/95 .backdrop-blur-xl .z-[60] .flex-col .p-6 .transition-transform .translate-x-full .justify-end .text-slate-500 .space-y-6 .text-lg .text-slate-800 .ts-btn-outline-block .py-3 .rounded-lg .text-slate-300 .py-12 .ts-foot-grid .grid .grid-cols-1 .md:grid-cols-4 .gap-12 .col-span-1 .md:col-span-2 .inline-block .left-[-100vw] .right-[-3rem] .rounded-r-3xl .z-0 .shadow-xl .pl-2 .mb-4 .text-slate-900 .h-12 .w-12 .object-cover .bg-gradient-to-r .from-brand-500 .to-indigo-500 .text-transparent .bg-clip-text .text-slate-700 .max-w-xs .ts-fcol .space-y-1 .hover:text-brand-400 .py-2 .mt-4 .md:mt-0 .gap-3 .w-10 .h-10 .bg-slate-800 .hover:bg-brand-600 .border-slate-800 .mt-12"
---

<div class="imported-page imp-scroll-smooth imp-font-sans imp-antialiased imp-text-slate-800" data-chrome-source="8285304bf3">
<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true"><symbol id="i-arrow-left" viewBox="0 0 512 512"><path d="M232 96L72 256l160 160 45-45-83-83h254v-64H194l83-83z" /></symbol><symbol id="i-arrow-right" viewBox="0 0 512 512"><path d="M280 96l160 160-160 160-45-45 83-83H64v-64h254l-83-83z" /></symbol><symbol id="i-times" viewBox="0 0 512 512"><path d="M312 256l142 142-56 56-142-142-142 142-56-56 142-142L58 114l56-56 142 142L398 58l56 56z" /></symbol><symbol id="i-bars" viewBox="0 0 512 512"><path d="M48 96h416v56H48zm0 132h416v56H48zm0 132h416v56H48z" /></symbol><symbol id="i-calendar" viewBox="0 0 512 512"><path d="M144 40h48v56h128V40h48v56h64a24 24 0 0124 24v328a24 24 0 01-24 24H80a24 24 0 01-24-24V120a24 24 0 0124-24h64zM104 208v216h304V208z" /></symbol><symbol id="i-user" viewBox="0 0 512 512"><path d="M256 64a96 96 0 110 192 96 96 0 010-192zm0 240c88 0 160 48 160 108v36H96v-36c0-60 72-108 160-108z" /></symbol><symbol id="i-youtube" viewBox="0 0 512 512"><path d="M488 176c-6-34-26-54-60-58C376 112 256 112 256 112s-120 0-172 6c-34 4-54 24-60 58-6 40-6 80-6 80s0 40 6 80c6 34 26 54 60 58 52 6 172 6 172 6s120 0 172-6c34-4 54-24 60-58 6-40 6-80 6-80s0-40-6-80zM208 336V176l144 80z" /></symbol><symbol id="i-linkedin-in" viewBox="0 0 512 512"><path d="M56 168v312h94V168zm47-136a54 54 0 100 108 54 54 0 000-108zm139 136v312h94V318c0-48 24-72 60-72s54 24 54 72v162h94V300c0-90-48-138-118-138-54 0-78 30-92 51v-45z" /></symbol></svg>
    <header class="imp-pt-40 imp-pb-16 imp-bg-slate-900 imp-relative imp-overflow-hidden">
        <div class="imp-absolute imp-inset-0 imp-opacity-20">
            <div class="imp-absolute imp--top-24 imp--left-24 imp-w-96 imp-h-96 imp-bg-brand-500 imp-rounded-full imp-blur-3xl"></div>
            <div class="imp-absolute imp-bottom-0 imp-right-0 imp-w-80 imp-h-80 imp-bg-purple-500 imp-rounded-full imp-blur-3xl"></div>
        </div>
        <div class="imp-max-w-4xl imp-mx-auto imp-px-4 imp-sm:px-6 imp-lg:px-8 imp-relative imp-z-10 imp-text-center">
            <div class="imp-inline-flex imp-items-center imp-gap-2 imp-px-3 imp-py-1 imp-rounded-full imp-bg-brand-900/50 imp-border imp-border-brand-500/30 imp-text-brand-200 imp-text-sm imp-font-semibold imp-mb-6">
                <span class="imp-w-2 imp-h-2 imp-rounded-full imp-bg-brand-400"></span> Salesforce Voice</div>
            <h1 class="imp-text-3xl imp-md:text-5xl imp-font-extrabold imp-text-white imp-mb-6 imp-leading-tight">Desk Phone or Softphone? Why Physical Desk Phones Are the Hard Road in Salesforce Voice</h1>
            <div class="imp-flex imp-items-center imp-justify-center imp-gap-6 imp-text-slate-400 imp-text-sm">
                <div><svg class="imp-svgi imp-mr-2" aria-hidden="true"><use href="#i-calendar" /></svg>10 November 2026</div>
                <div><svg class="imp-svgi imp-mr-2" aria-hidden="true"><use href="#i-user" /></svg>By TwinStack Solutions · 4 min read</div>
            </div>
            <div class="imp-ts-get-app-wrap"><a href="/services/salesforce-integrations.html" class="imp-ts-get-app" aria-label="See TwinStack&#x27;s Salesforce integration services">Salesforce integration services <svg viewBox="0 0 448 512" aria-hidden="true" fill="currentColor"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg></a></div>
        </div>
    </header>
    <section class="imp-py-20 imp-bg-white imp-relative">
        <div class="imp-max-w-3xl imp-mx-auto imp-px-6">
            <a href="/blog.html" class="imp-inline-flex imp-items-center imp-gap-2 imp-text-brand-600 imp-font-semibold imp-mb-8 imp-hover:underline">
                <svg class="imp-svgi" aria-hidden="true"><use href="#i-arrow-left" /></svg> Back to Blog
            </a>
            <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_800,f_auto,q_auto/v1794298850/salesforce-voice-desk-phone-vs-softphone-cover_ftfg3a.jpg" alt="Cover for Why Desk Phones Are the Hard Road: a desk phone linked to an Omni-Channel browser session showing Available" width="1200" height="675" fetchpriority="high" class="imp-ts-hero-img imp-rounded-xl imp-shadow-lg imp-mb-10">
            <article>
                <p class="imp-text-xl imp-text-slate-600 imp-font-medium imp-mb-8"><strong>Short answer:</strong> a desk phone only carries the audio. Availability for calls lives in an Omni-Channel session inside a browser, so there is no supported way to stay "Available" without that session. The workable pattern is a background console session with auto-login and auto-accept.</p>
<h2 id="why-a-browser-session-is-required">Why a browser session is required</h2>
<p>With Salesforce Voice, the desk phone is only an audio endpoint. Everything that decides whether a call should reach you (presence, availability, capacity and routing) lives in Omni-Channel, not in the handset. A call only goes to an agent who is online with the right Omni-Channel status, whatever phone the audio lands on.</p>
<p>The difficulty is how that "Available" status comes into existence. Omni-Channel presence is not a flag on your user record that you set and leave. It is a live server-side session, opened and held by the Omni-Channel utility inside a Lightning console app, in a supported desktop browser such as Chrome, Edge or Firefox. When that session ends, presence ends with it.</p>
<p>A desk phone cannot open or hold that session. It cannot sign in to a Lightning console app, run the Omni-Channel utility or keep the session alive. So "Available for voice" is a browser-side condition, and the phone sits downstream of it.</p>
<h2 id="what-does-not-work">What does not work</h2>
<p>Two assumptions come up again and again, and both fail for the same reason.</p>
<h3 id="the-salesforce-mobile-app">The Salesforce mobile app</h3>
<p>The Salesforce mobile app does not support Omni-Channel voice presence or routing, and Amazon Connect does not list mobile browsers as supported for its agent workspace and softphone. Running Salesforce on a phone or tablet does not replace the console session. (We describe a tested mobile workaround in <a href="/blog/salesforce-voice-mobile-iphone-android.html">our mobile calling case study</a>.)</p>
<h3 id="setting-presence-through-the-api">Setting presence through the API</h3>
<p>On paper, writing to the UserServicePresence object from a server process looks like a clean way to put an agent online. In practice that object is for monitoring and reporting. Apex triggers are not supported on it, and creating a record there does not sign an agent into a routable Omni-Channel session. You get a row that describes presence, not presence itself.</p>
<p>The method that really changes status, setServicePresenceStatus, belongs to the Omni-Channel toolkit for Lightning, which runs inside the console page in the browser. There is no server-side equivalent, so presence cannot be driven from a scheduled job, an integration user or the phone itself.</p>
<h2 id="the-workable-pattern-keep-the-browser-make-it-invisible">The workable pattern: keep the browser, make it invisible</h2>
<p>Since the browser session cannot be removed, the realistic goal is to stop the agent having to think about it.</p>
<ol type="1">
<li>Keep a lightweight Lightning console session open in the background on the agent's computer.</li>
<li>Turn on automatic Omni-Channel login, so the agent goes to an Available status as soon as the console loads.</li>
<li>Turn on auto-accept in Amazon Connect, so inbound calls connect straight to the desk phone without an on-screen answer.</li>
</ol>
<p>The agent's day then feels like ordinary desk-phone work. They sit down, the handset rings and they pick it up. A quiet browser tab holds presence in the background, and nobody touches it. This is the standard, supported pattern for desk phones with Omni-Channel.</p>
<p>One caveat to plan for: if the tab is closed, the computer sleeps or the session times out, presence drops and calls stop routing. Make the background session part of the agent's start-of-day routine, like logging in to the phone.</p>
<h2 id="bottom-line">Bottom line</h2>
<p>There is no supported way to be available for Omni-Channel voice without an active Omni-Channel browser session, because presence belongs to the console, not the phone. If a background browser is acceptable, set up automatic login and auto-accept, and let agents work from the handset.</p>
<h2 id="faq">Frequently asked questions</h2>
<h3 class="imp-q">Can I use a desk phone with Salesforce Voice?</h3>
<p>Yes, as the audio device. The agent still needs an Omni-Channel session in a desktop browser to be available for calls.</p>
<h3 class="imp-q">Can presence be set through the API?</h3>
<p>Not in a way that routes calls. UserServicePresence records describe presence for reporting; changing status needs the Omni-Channel toolkit running in the browser.</p>
<h3 class="imp-q">How do I make a desk phone feel browser-free?</h3>
<p>Keep the console open in the background, turn on automatic Omni-Channel login and use auto-accept in Amazon Connect.</p>
<h3 class="imp-q">What happens if the browser closes?</h3>
<p>Presence drops and calls stop routing to that agent until the session is back.</p>
                <div class="imp-ts-final"><p class="imp-np-cta">Deciding between desk phones and softphones? <a href="/contact.html">Talk to us</a>.</p><div class="imp-row"><a class="imp-b1" href="https://calendar.app.google/HP3LiuNFisCt6xLo6" target="_blank" rel="noopener">Book a free 45-minute call <svg width="14" height="14" viewBox="0 0 448 512" aria-hidden="true" fill="currentColor"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></a><a class="imp-b2" href="/services/salesforce-integrations.html">Salesforce integrations</a></div></div>
                <div class="imp-ts-related"><h2>More in this series</h2><ul><li><a href="/blog/salesforce-voice-amazon-connect-features.html">The Definitive Feature Guide: Salesforce Voice with Amazon Connect</a></li><li><a href="/blog/salesforce-voice-cost-comparison.html">Salesforce Voice Cost Comparison: Salesforce-Managed Amazon Connect vs BYOA vs BYOT</a></li><li><a href="/blog/salesforce-voice-partner-telephony-comparison.html">Salesforce Voice Partner Telephony: How Amazon Connect, Zoom, NICE, Talkdesk, Five9, RingCX and Twilio Compare</a></li><li><a href="/blog/salesforce-voice-configuration-mistakes.html">9 Salesforce Voice Configuration Mistakes That Can Disrupt Future Operations</a></li><li><a href="/blog/salesforce-voice-mobile-iphone-android.html">Taking the Call Centre on the Road: How We Solved Mobile Calling for Field Agents</a></li></ul></div>
            </article>
            <div class="imp-mt-16 imp-pt-8 imp-border-t imp-border-slate-200">
                <a href="/blog.html" class="imp-inline-flex imp-items-center imp-gap-2 imp-text-brand-600 imp-font-bold imp-hover:underline">
                    <svg class="imp-svgi" aria-hidden="true"><use href="#i-arrow-left" /></svg> Return to All Insights
                </a>
            </div>
        </div>
    </section>
</div>

<script type="application/ld+json" id="ts-schema">{"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","headline":"Desk Phone or Softphone? Why Physical Desk Phones Are the Hard Road in Salesforce Voice","description":"Why a desk phone cannot keep a Salesforce Voice agent available on its own, what fails, and how auto-login plus auto-accept make it feel browser-free.","image":"https://res.cloudinary.com/du42kbmmn/image/upload/w_1200,f_auto,q_auto/v1794298850/salesforce-voice-desk-phone-vs-softphone-cover_ftfg3a.jpg","author":{"@type":"Organization","@id":"https://twinstack.net/#organization","name":"TwinStack Solutions","url":"https://twinstack.net/"},"publisher":{"@id":"https://twinstack.net/#organization"},"datePublished":"2026-11-10","dateModified":"2026-11-10","inLanguage":"en-GB","keywords":"Salesforce Voice desk phone, Service Cloud Voice hard phone, Omni-Channel presence, Amazon Connect desk phone, Salesforce softphone","mainEntityOfPage":{"@type":"WebPage","@id":"https://twinstack.net/blog/salesforce-voice-desk-phone-vs-softphone"},"about":{"@type":"Thing","name":"Salesforce Voice"}},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Can I use a desk phone with Salesforce Voice?","acceptedAnswer":{"@type":"Answer","text":"Yes, as the audio device. The agent still needs an Omni-Channel session in a desktop browser to be available for calls."}},{"@type":"Question","name":"Can presence be set through the API?","acceptedAnswer":{"@type":"Answer","text":"Not in a way that routes calls. UserServicePresence records describe presence for reporting; changing status needs the Omni-Channel toolkit running in the browser."}},{"@type":"Question","name":"How do I make a desk phone feel browser-free?","acceptedAnswer":{"@type":"Answer","text":"Keep the console open in the background, turn on automatic Omni-Channel login and use auto-accept in Amazon Connect."}},{"@type":"Question","name":"What happens if the browser closes?","acceptedAnswer":{"@type":"Answer","text":"Presence drops and calls stop routing to that agent until the session is back."}}]},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://twinstack.net/"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://twinstack.net/blog"},{"@type":"ListItem","position":3,"name":"Desk Phone or Softphone? Why Physical Desk Phones Are the Hard Road in Salesforce Voice","item":"https://twinstack.net/blog/salesforce-voice-desk-phone-vs-softphone"}]}]}</script>
