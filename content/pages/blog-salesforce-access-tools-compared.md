---
title: Who Sees What vs Setup Screens vs a Spreadsheet Audit
slug: blog-salesforce-access-tools-compared
url: /blog/salesforce-access-tools-compared.html
order: 50
description: Three honest ways to answer a Salesforce access question compared: native Setup screens, a manual spreadsheet audit, and a purpose-built person-first tool.
metaTitle: "Salesforce Access Tools Compared: 3 Methods | My Website"
metaDescription: "Compare Salesforce access tools: Setup screens, a spreadsheet audit and a person-first tool, with the strengths and limits of each."
focusKeyword: Salesforce access tools
stylesheet: /assets/css/imported/blog-salesforce-access-tools-compared.css
hideCta: true
scripts:
  - src: "/assets/js/imported/blog-salesforce-access-tools-compared/inline-1.js"
    head: true
    module: false
    nomodule: false
    defer: false
    async: false
  - src: "/assets/js/imported/blog-salesforce-access-tools-compared/ts-analytics.js"
    head: true
    module: false
    nomodule: false
    defer: true
    async: false
  - src: "/assets/js/imported/blog-salesforce-access-tools-compared/inline-2.js"
    head: false
    module: false
    nomodule: false
    defer: false
    async: false
scriptHtmlClass: scroll-smooth
scriptBodyClass: font-sans antialiased text-slate-800
scriptRemoved: "#navbar #mobile-menu-btn #mobile-menu #close-menu-btn .fixed .z-50 .top-6 .left-1/2 .-translate-x-1/2 .w-[95%] .max-w-7xl .rounded-2xl .border-slate-100 .shadow-2xl .justify-between .h-20 .transition-all .duration-300 .flex-shrink-0 .h-14 .w-auto .text-2xl .tracking-tight .block .ts-wm .ts-wm-top .text-[#343453] .color-shift-text .ts-wm-sub .hidden .md:flex .space-x-8 .ts-nav-links .hover:text-brand-600 .ts-dd .ts-dd-car .ts-dd-menu .ts-btn-outline .px-5 .py-2.5 .hover:bg-brand-900 .md:hidden .p-2 .inset-y-0 .w-64 .bg-white/95 .backdrop-blur-xl .z-[60] .flex-col .transition-transform .translate-x-full .justify-end .space-y-6 .text-lg .text-slate-800 .ts-btn-outline-block .text-slate-300 .py-12 .ts-foot-grid .grid .grid-cols-1 .md:grid-cols-4 .gap-12 .col-span-1 .md:col-span-2 .left-[-100vw] .right-[-3rem] .rounded-r-3xl .z-0 .shadow-xl .pl-2 .text-slate-900 .h-12 .w-12 .bg-gradient-to-r .from-brand-500 .to-indigo-500 .text-transparent .bg-clip-text .text-slate-700 .max-w-xs .ts-fcol .space-y-1 .hover:text-brand-400 .py-2 .mt-4 .md:mt-0 .gap-3 .w-10 .h-10 .bg-slate-800 .hover:bg-brand-600 .border-slate-800"
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
                <span class="imp-w-2 imp-h-2 imp-rounded-full imp-bg-brand-400"></span> Comparison</div>
            <h1 class="imp-text-3xl imp-md:text-5xl imp-font-extrabold imp-text-white imp-mb-6 imp-leading-tight">Who Sees What vs Setup Screens vs a Spreadsheet Audit</h1>
            <div class="imp-flex imp-items-center imp-justify-center imp-gap-6 imp-text-slate-400 imp-text-sm" style="flex-wrap:wrap;row-gap:6px">
                <div><svg class="imp-svgi imp-mr-2" aria-hidden="true"><use href="#i-calendar" /></svg>September 15, 2026</div>
                <div><svg class="imp-svgi imp-mr-2" aria-hidden="true"><use href="#i-user" /></svg>By <a href="https://www.linkedin.com/in/toukir-ahmed368" target="_blank" rel="noopener author" style="color:inherit;text-decoration:underline;text-underline-offset:3px">Toukir Ahmed</a>, Business Development Executive</div>
            </div>
            <div class="imp-ts-get-app-wrap"><a href="https://appexchange.salesforce.com/appxListingDetail?listingId=dc0aa216-dbed-49e5-86e0-542869f8dc26" target="_blank" rel="noopener" class="imp-ts-get-app" aria-label="Get Who Sees What on the Salesforce AppExchange">Get App <svg viewBox="0 0 448 512" aria-hidden="true" fill="currentColor"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg></a></div>
        </div>
    </header>
    <section class="imp-py-20 imp-bg-white imp-relative">
        <div class="imp-max-w-3xl imp-mx-auto imp-px-6">
            <a href="/blog.html" class="imp-inline-flex imp-items-center imp-gap-2 imp-text-brand-600 imp-font-semibold imp-mb-8 imp-hover:underline">
                <svg class="imp-svgi" aria-hidden="true"><use href="#i-arrow-left" /></svg> Back to Blog
            </a>
            <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_800,f_auto,q_auto/v1789468994/wsw_10.1_ukgboh.png" alt="Three approaches to answering a Salesforce access question compared side by side" width="800" height="384" fetchpriority="high" class="imp-w-full imp-h-64 imp-md:h-96 imp-object-cover imp-rounded-xl imp-shadow-lg imp-mb-10">
            <article>
                <p class="imp-text-xl imp-text-slate-600 imp-font-medium imp-mb-8">
                    Three ways to answer an access question, honestly compared, including where each one actually wins.
                </p>
                <div class="imp-border-l-4 imp-border-brand-500 imp-bg-brand-50 imp-p-5 imp-rounded-r-lg imp-mb-8">
                    <p class="imp-mb-0 imp-text-brand-900"><strong>Short answer:</strong> Native Setup screens are free and authoritative but organised around rules, not people, making any person-first question slow. A manual spreadsheet audit can answer person-first questions directly, at the cost of significant effort and a result that goes stale immediately. A purpose-built tool answers on demand, at the cost of being a separate thing to install, though in this case a free one.</p>
                </div>
                <h2 id="setup-screens">What are native Setup screens good for?</h2>
                <p>
                    Always available, no additional tool required, and the authoritative source, since every other approach ultimately reads the same underlying configuration.
                </p>
                <p>
                    The weakness: organised around profiles, permission sets and sharing rules individually, rather than around a person. Answering "what can this user do" means manually checking every rule that could apply, across separate screens for object, field and record access, none of which reference each other. This is <a href="/blog/why-salesforce-access-questions-take-so-long.html">why that question takes as long as it does</a>.
                </p>
                <h2 id="spreadsheet-audit">What about a manual spreadsheet audit?</h2>
                <p>
                    Can be structured around exactly the question the reviewer cares about, and produces a shareable, reviewable artefact a Setup screen does not.
                </p>
                <p>
                    The weakness: significant effort to build correctly, particularly capturing field-level security and record-level sharing. The result reflects a snapshot at export time and goes stale as soon as anything changes, often within days.
                </p>
                <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_800,f_auto,q_auto/v1789468987/wsw_10.2_jml70j.png" alt="The same access question answered through Setup screens, a spreadsheet audit, and a person-first tool" width="800" height="450" loading="lazy" class="imp-zoom-image imp-w-full imp-rounded-xl imp-shadow-lg imp-mb-4">
                <p class="imp-text-sm imp-text-slate-500 imp-italic">Three different starting points for the same underlying question.</p>
                <h2 id="where-wsw-fits">Where does Who Sees What fit?</h2>
                <p>
                    A native, read-only, purpose-built tool that queries the same underlying metadata as Setup, resolved from the person's perspective. It answers the person-first question in seconds, always reflecting current configuration, and names the specific rule responsible for each grant.
                </p>
                <p>
                    The honest limitation: it does one thing. It does not generate a scheduled report, does not integrate with an external GRC platform, and does not make the actual permission changes a finding might require.
                </p>
                <h2 id="side-by-side">Side by side</h2>
                <div class="imp-article-table-wrap">
                <table>
                    <thead><tr><th><span style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap">Feature</span></th><th>Setup screens</th><th>Spreadsheet audit</th><th>Who Sees What</th></tr></thead>
                    <tbody>
                        <tr><td>Cost</td><td>Free</td><td>Free, high effort to build</td><td>Free</td></tr>
                        <tr><td>Query direction</td><td>Rule first</td><td>Whatever is built</td><td>Person first</td></tr>
                        <tr><td>Time per user</td><td>30+ min</td><td>Hours to build</td><td>Seconds</td></tr>
                        <tr><td>Reflects current state</td><td>Yes</td><td>No, a snapshot</td><td>Yes</td></tr>
                        <tr><td>Shows granting rule</td><td>Manual cross-reference</td><td>If built to include it</td><td>Shown directly</td></tr>
                        <tr><td>Risk of modifying while checking</td><td>Present</td><td>None</td><td>None, read-only</td></tr>
                    </tbody>
                </table>
                </div>
                <h2 id="how-to-choose">How should you choose?</h2>
                <p>
                    <strong>Use Setup screens directly when</strong> the question is simple or you are making the actual permission change.
                </p>
                <p>
                    <strong>Build a spreadsheet audit when</strong> you need a static, formally submittable document and have the time to build it carefully.
                </p>
                <p>
                    <strong>Use a tool like <a href="/products/who-sees-what.html">Who Sees What</a> when</strong> the question is genuinely person-first, which covers most troubleshooting, reviews, and onboarding or offboarding checks. That covers <a href="/blog/salesforce-effective-access-use-cases.html">most of the moments this actually comes up</a>.
                </p>
                <p class="imp-text-sm imp-text-slate-500 imp-italic">Who Sees What is built and maintained by TwinStack Solutions, a Salesforce partner. Questions about setup: <a href="mailto:info@twinstack.net">info@twinstack.net</a></p>
                <div class="imp-bg-brand-50 imp-border imp-border-brand-200 imp-rounded-xl imp-p-6 imp-mt-12">
                    <p class="imp-font-bold imp-text-brand-900 imp-mb-2">See where the free option actually lands on this table.</p>
                    <p class="imp-text-brand-800 imp-mb-4">Person-first, seconds per user, read-only. Try it against a question you already have.</p>
                    <a href="https://appexchange.salesforce.com/appxListingDetail?listingId=dc0aa216-dbed-49e5-86e0-542869f8dc26" target="_blank" rel="noopener" class="imp-inline-block imp-px-6 imp-py-3 imp-bg-brand-600 imp-text-white imp-font-semibold imp-rounded-lg imp-hover:bg-brand-700 imp-transition">
                        Get It Now, Free
                    </a>
                    <p style="margin-top:16px;font-size:.95rem">Want the full picture first? See the <a href="/products/who-sees-what.html" class="imp-text-brand-600 imp-font-semibold" style="text-decoration:underline">Who Sees What</a> product page.</p>
                </div>
            </article>
            <div class="imp-mt-16 imp-pt-8 imp-border-t imp-border-slate-200">
                <a href="/blog.html" class="imp-inline-flex imp-items-center imp-gap-2 imp-text-brand-600 imp-font-bold imp-hover:underline">
                    <svg class="imp-svgi" aria-hidden="true"><use href="#i-arrow-left" /></svg> Return to All Insights
                </a>
            </div>
        </div>
    </section>
</div>
