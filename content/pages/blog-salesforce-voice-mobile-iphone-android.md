---
title: "Salesforce Voice on Mobile: Calls on iPhone and Android"
description: "How we got Salesforce Voice with Amazon Connect working on iPhone and Android for field agents, with cases still created automatically and nothing extra to buy."
metaTitle: "Salesforce Voice on Mobile: Calls on iPhone and Android"
metaDescription: "How we got Salesforce Voice with Amazon Connect working on iPhone and Android for field agents, with cases still created automatically and nothing extra to buy."
focusKeyword: Salesforce Voice mobile
slug: blog-salesforce-voice-mobile-iphone-android
url: /blog/salesforce-voice-mobile-iphone-android.html
ogImage: "https://res.cloudinary.com/du42kbmmn/image/upload/w_1200,f_auto,q_auto/v1794298851/salesforce-voice-mobile-iphone-android-cover_jgry2j.jpg"
order: 50
stylesheet: /assets/css/imported/blog-salesforce-voice-mobile-iphone-android.css
hideCta: true
scripts:
  - src: "/assets/js/imported/blog-salesforce-voice-mobile-iphone-android/inline-1.js"
    head: true
    module: false
    nomodule: false
    defer: false
    async: false
  - src: "/assets/js/imported/blog-salesforce-voice-mobile-iphone-android/ts-analytics.js"
    head: true
    module: false
    nomodule: false
    defer: true
    async: false
  - src: "/assets/js/imported/blog-salesforce-voice-mobile-iphone-android/inline-2.js"
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
            <h1 class="imp-text-3xl imp-md:text-5xl imp-font-extrabold imp-text-white imp-mb-6 imp-leading-tight">Taking the Call Centre on the Road: How We Solved Mobile Calling for Field Agents</h1>
            <div class="imp-flex imp-items-center imp-justify-center imp-gap-6 imp-text-slate-400 imp-text-sm">
                <div><svg class="imp-svgi imp-mr-2" aria-hidden="true"><use href="#i-calendar" /></svg>10 November 2026</div>
                <div><svg class="imp-svgi imp-mr-2" aria-hidden="true"><use href="#i-user" /></svg>By TwinStack Solutions · 5 min read</div>
            </div>
            <div class="imp-ts-get-app-wrap"><a href="/services/salesforce-integrations.html" class="imp-ts-get-app" aria-label="See TwinStack&#x27;s Salesforce integration services">Salesforce integration services <svg viewBox="0 0 448 512" aria-hidden="true" fill="currentColor"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg></a></div>
        </div>
    </header>
    <section class="imp-py-20 imp-bg-white imp-relative">
        <div class="imp-max-w-3xl imp-mx-auto imp-px-6">
            <a href="/blog.html" class="imp-inline-flex imp-items-center imp-gap-2 imp-text-brand-600 imp-font-semibold imp-mb-8 imp-hover:underline">
                <svg class="imp-svgi" aria-hidden="true"><use href="#i-arrow-left" /></svg> Back to Blog
            </a>
            <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_800,f_auto,q_auto/v1794298851/salesforce-voice-mobile-iphone-android-cover_jgry2j.jpg" alt="Cover for Taking the Call Centre on the Road: a phone showing a field agent call with a Case Created label" width="1200" height="675" fetchpriority="high" class="imp-ts-hero-img imp-rounded-xl imp-shadow-lg imp-mb-10">
            <article>
                <p class="imp-text-xl imp-text-slate-600 imp-font-medium imp-mb-8"><strong>Short answer:</strong> the Omni-Channel softphone does not sign in reliably in mobile browsers, and on iPhone the desktop-mode workaround fails. We signed field agents in to the Amazon Connect softphone through Salesforce instead. Calls now work on both Android and iPhone, and Salesforce Voice still creates and links the case automatically.</p>
<h2 id="the-challenge-a-great-call-centre-but-only-at-a-desk">The challenge: a great call centre, but only at a desk</h2>
<p>Many service teams rely on Salesforce Voice (formerly Service Cloud Voice) powered by Amazon Connect to answer customer calls and log them as cases automatically. It works well for agents at a computer. But field agents are rarely at a desk. They are visiting sites, travelling between appointments and working where a laptop is not practical. They needed to take and place customer calls from the phone in their pocket.</p>
<p>That is where we hit a wall. Salesforce limits the Service Console and Omni-Channel softphone in mobile browsers. On Android, there is a workaround: switch the browser to desktop mode and the softphone works. On iPhone, the same trick does not.</p>
<figure class="imp-ts-fig imp-ts-fig-natural"><a href="https://res.cloudinary.com/du42kbmmn/image/upload/f_auto,q_auto/v1794298947/salesforce-voice-mobile-iphone-android-1_mm5siy.jpg" target="_blank" rel="noopener" aria-label="Open the full-size image"><img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_1400,f_auto,q_auto/v1794298947/salesforce-voice-mobile-iphone-android-1_mm5siy.jpg" alt="Three iPhone screens of the Salesforce Service Console in a mobile browser: a voice call, the Omni-Channel softphone offline, and a sign-in error after switching to Available for Voice" width="1600" height="1082" loading="lazy"></a><figcaption>The problem on iPhone: Omni-Channel shows Available for Voice, but the softphone cannot finish signing in. <span>Click to enlarge.</span></figcaption></figure>
<h2 id="why-the-iphone-was-the-sticking-point">Why the iPhone was the sticking point</h2>
<p>Browsers on iPhone, whether Safari or Chrome, are built on Apple's browser engine. Its strict privacy rules interrupt the single sign-on step that the softphone needs to log an agent in. The softphone never finishes signing in, and the agent cannot make or receive calls. In a team with a mix of Android and iPhone devices, some agents are left out.</p>
<p>The usual answer is to buy a separate, paid mobile app from a third-party telephony provider. That adds licence costs, another tool to manage and another place for customer information to live. We wanted to avoid all three.</p>
<h2 id="our-solution-use-the-amazon-connect-softphone-directly">Our solution: use the Amazon Connect softphone directly</h2>
<p>Behind every Salesforce Voice call is Amazon Connect, and Amazon provides its own softphone. We set up a way to sign in to Amazon Connect through Salesforce, so the agent's identity and access stay exactly as they are, and the phone works on a mobile device.</p>
<figure class="imp-ts-fig imp-ts-fig-natural"><a href="https://res.cloudinary.com/du42kbmmn/image/upload/f_auto,q_auto/v1794298941/salesforce-voice-mobile-iphone-android-2_lq3d4c.jpg" target="_blank" rel="noopener" aria-label="Open the full-size image"><img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_1400,f_auto,q_auto/v1794298941/salesforce-voice-mobile-iphone-android-2_lq3d4c.jpg" alt="Three iPhone screens: a Phone System menu in the Salesforce mobile app with Start taking calls and Sign in to phone system, the Salesforce sign-in page, and the Amazon Connect softphone number pad" width="1600" height="1104" loading="lazy"></a><figcaption>Signing in: the agent starts from the Salesforce app, signs in with Salesforce and lands in the Amazon Connect softphone. <span>Click to enlarge.</span></figcaption></figure>
<p>In practice, that gives field agents everything they need:</p>
<ul>
<li><strong>Real calls from a mobile device.</strong> Agents can place and receive customer calls from their phone.</li>
<li><strong>Works in the background.</strong> The softphone keeps running while the agent uses other apps, and calls continue with the screen off.</li>
<li><strong>Same experience on Android and iPhone.</strong> No desktop-mode workaround and no browser tricks.</li>
<li><strong>Nothing extra to buy.</strong> It uses capabilities already included in the existing Salesforce Voice and Amazon Connect set-up.</li>
</ul>
<figure class="imp-ts-fig imp-ts-fig-natural"><a href="https://res.cloudinary.com/du42kbmmn/image/upload/f_auto,q_auto/v1794298945/salesforce-voice-mobile-iphone-android-3_oapqmd.jpg" target="_blank" rel="noopener" aria-label="Open the full-size image"><img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_1400,f_auto,q_auto/v1794298945/salesforce-voice-mobile-iphone-android-3_oapqmd.jpg" alt="Three iPhone screens of the Amazon Connect softphone: an incoming call with Accept and Reject buttons, the call ringing, and a connected call with hold, mute, number pad and end call controls" width="1600" height="1112" loading="lazy"></a><figcaption>A live call: accept, talk and end the call from the Amazon Connect softphone on iPhone. <span>Click to enlarge.</span></figcaption></figure>
<p>Amazon does not list mobile browsers as a supported surface for its softphone, so we tested this set-up carefully on the devices our agents use. If you try the same approach, test it on your own devices and keep a fallback for critical calls.</p>
<h2 id="cases-still-create-themselves">Cases still create themselves</h2>
<p>A phone call is only half the story. The real value of Salesforce Voice is that the call becomes a record the whole team can see. Because calls still flow through the same Salesforce and Amazon Connect set-up, the case is created automatically, the caller is matched to their contact record and the call is linked to the case, just as when an agent works from the office.</p>
<p>After the call, the agent opens the Salesforce mobile app to review the case, add notes, update the status or hand it to a colleague. Calling and case management happen on the same device, while the details are fresh.</p>
<figure class="imp-ts-fig imp-ts-fig-natural imp-ts-fig-tall"><a href="https://res.cloudinary.com/du42kbmmn/image/upload/f_auto,q_auto/v1794298946/salesforce-voice-mobile-iphone-android-4_l3qjzo.jpg" target="_blank" rel="noopener" aria-label="Open the full-size image"><img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_800,f_auto,q_auto/v1794298946/salesforce-voice-mobile-iphone-android-4_l3qjzo.jpg" alt="Salesforce mobile app showing a list of phone cases created automatically from Salesforce Voice calls, with case number, date opened, status and origin" width="591" height="1280" loading="lazy"></a><figcaption>Case management in the Salesforce mobile app. <span>Click to enlarge.</span></figcaption></figure>
<h2 id="what-this-means-for-the-business">What this means for the business</h2>
<ul>
<li><strong>Lower cost.</strong> No extra paid third-party telephony app and no extra licences for field staff.</li>
<li><strong>Faster response.</strong> Customers reach an agent wherever the agent is, which shortens waits and reduces missed calls.</li>
<li><strong>One source of truth.</strong> Every call and case lives in Salesforce, so nothing is lost or typed in twice.</li>
<li><strong>Fewer tools to manage.</strong> One set-up, one set of permissions and one place to train people.</li>
<li><strong>Fair for every device.</strong> Android and iPhone users get the same capability.</li>
</ul>
<h2 id="the-takeaway">The takeaway</h2>
<p>A limitation that looked like it needed another subscription was solvable with the tools we already had. Field agents can now take customer calls from their phones and manage the resulting cases in the Salesforce mobile app, without leaving the platform.</p>
<h2 id="faq">Frequently asked questions</h2>
<h3 class="imp-q">Does the Salesforce Voice softphone work in a mobile browser?</h3>
<p>Salesforce limits the Service Console and Omni-Channel softphone in mobile browsers. On Android, desktop mode can work as a workaround. On iPhone, it does not.</p>
<h3 class="imp-q">Why does the softphone fail to sign in on iPhone?</h3>
<p>Browsers on iPhone use Apple's browser engine, whose privacy rules interrupt the single sign-on step the softphone needs, so the sign-in never completes.</p>
<h3 class="imp-q">Do field agents need a paid third-party calling app?</h3>
<p>Not in our set-up. Agents sign in to the Amazon Connect softphone through Salesforce, using capabilities already included with Salesforce Voice and Amazon Connect.</p>
<h3 class="imp-q">Are cases still created automatically for mobile calls?</h3>
<p>Yes. Calls flow through the same Salesforce and Amazon Connect set-up, so the case is created, matched to the contact and linked to the call.</p>
                <div class="imp-ts-final"><p class="imp-np-cta">Is your team facing the same challenge? We would be glad to share what we learned and help you bring Salesforce Voice to your mobile workforce. <a href="/contact.html">Get in touch</a> to see it in action.</p><div class="imp-row"><a class="imp-b1" href="https://calendar.app.google/HP3LiuNFisCt6xLo6" target="_blank" rel="noopener">Book a free 45-minute call <svg width="14" height="14" viewBox="0 0 448 512" aria-hidden="true" fill="currentColor"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></a><a class="imp-b2" href="/services/salesforce-integrations.html">Salesforce integrations</a></div></div>
                <div class="imp-ts-related"><h2>More in this series</h2><ul><li><a href="/blog/salesforce-voice-amazon-connect-features.html">The Definitive Feature Guide: Salesforce Voice with Amazon Connect</a></li><li><a href="/blog/salesforce-voice-cost-comparison.html">Salesforce Voice Cost Comparison: Salesforce-Managed Amazon Connect vs BYOA vs BYOT</a></li><li><a href="/blog/salesforce-voice-partner-telephony-comparison.html">Salesforce Voice Partner Telephony: How Amazon Connect, Zoom, NICE, Talkdesk, Five9, RingCX and Twilio Compare</a></li><li><a href="/blog/salesforce-voice-configuration-mistakes.html">9 Salesforce Voice Configuration Mistakes That Can Disrupt Future Operations</a></li><li><a href="/blog/salesforce-voice-desk-phone-vs-softphone.html">Desk Phone or Softphone? Why Physical Desk Phones Are the Hard Road in Salesforce Voice</a></li></ul></div>
            </article>
            <div class="imp-mt-16 imp-pt-8 imp-border-t imp-border-slate-200">
                <a href="/blog.html" class="imp-inline-flex imp-items-center imp-gap-2 imp-text-brand-600 imp-font-bold imp-hover:underline">
                    <svg class="imp-svgi" aria-hidden="true"><use href="#i-arrow-left" /></svg> Return to All Insights
                </a>
            </div>
        </div>
    </section>
</div>

<script type="application/ld+json" id="ts-schema">{"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","headline":"Taking the Call Centre on the Road: How We Solved Mobile Calling for Field Agents","description":"How we got Salesforce Voice with Amazon Connect working on iPhone and Android for field agents, with cases still created automatically and nothing extra to buy.","image":"https://res.cloudinary.com/du42kbmmn/image/upload/w_1200,f_auto,q_auto/v1794298851/salesforce-voice-mobile-iphone-android-cover_jgry2j.jpg","author":{"@type":"Organization","@id":"https://twinstack.net/#organization","name":"TwinStack Solutions","url":"https://twinstack.net/"},"publisher":{"@id":"https://twinstack.net/#organization"},"datePublished":"2026-11-10","dateModified":"2026-11-10","inLanguage":"en-GB","keywords":"Salesforce Voice mobile, Service Cloud Voice mobile, Amazon Connect softphone iPhone, Omni-Channel mobile browser, field agent calling","mainEntityOfPage":{"@type":"WebPage","@id":"https://twinstack.net/blog/salesforce-voice-mobile-iphone-android"},"about":{"@type":"Thing","name":"Salesforce Voice"}},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Does the Salesforce Voice softphone work in a mobile browser?","acceptedAnswer":{"@type":"Answer","text":"Salesforce limits the Service Console and Omni-Channel softphone in mobile browsers. On Android, desktop mode can work as a workaround. On iPhone, it does not."}},{"@type":"Question","name":"Why does the softphone fail to sign in on iPhone?","acceptedAnswer":{"@type":"Answer","text":"Browsers on iPhone use Apple's browser engine, whose privacy rules interrupt the single sign-on step the softphone needs, so the sign-in never completes."}},{"@type":"Question","name":"Do field agents need a paid third-party calling app?","acceptedAnswer":{"@type":"Answer","text":"Not in our set-up. Agents sign in to the Amazon Connect softphone through Salesforce, using capabilities already included with Salesforce Voice and Amazon Connect."}},{"@type":"Question","name":"Are cases still created automatically for mobile calls?","acceptedAnswer":{"@type":"Answer","text":"Yes. Calls flow through the same Salesforce and Amazon Connect set-up, so the case is created, matched to the contact and linked to the call."}}]},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://twinstack.net/"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://twinstack.net/blog"},{"@type":"ListItem","position":3,"name":"Taking the Call Centre on the Road: How We Solved Mobile Calling for Field Agents","item":"https://twinstack.net/blog/salesforce-voice-mobile-iphone-android"}]}]}</script>
