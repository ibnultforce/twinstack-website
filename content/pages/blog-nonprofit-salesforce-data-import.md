---
slug: blog-nonprofit-salesforce-data-import
url: /blog/nonprofit-salesforce-data-import.html
order: 50
title: Nonprofit Data Imports Into NPSP
description: Importing donors and constituents into NPSP or Nonprofit Cloud brings relationship problems standard loaders were not built for. A practical approach.
metaTitle: "NPSP Data Import: Donors & Households | My Website"
metaDescription: "NPSP data import is harder than a standard load: households, affiliations and gifts must resolve in order. See a workable sequence and practical cautions."
focusKeyword: NPSP data import
stylesheet: /assets/css/imported/blog-nonprofit-salesforce-data-import.css
hideCta: true
scripts:
  - src: "/assets/js/imported/blog-nonprofit-salesforce-data-import/inline-1.js"
    head: true
    module: false
    nomodule: false
    defer: false
    async: false
  - src: "/assets/js/imported/blog-nonprofit-salesforce-data-import/ts-analytics.js"
    head: true
    module: false
    nomodule: false
    defer: true
    async: false
  - src: "/assets/js/imported/blog-nonprofit-salesforce-data-import/inline-2.js"
    head: false
    module: false
    nomodule: false
    defer: false
    async: false
scriptHtmlClass: scroll-smooth
scriptBodyClass: font-sans antialiased text-slate-800
scriptRemoved: "#navbar #mobile-menu-btn #mobile-menu #close-menu-btn .fixed .z-50 .top-6 .left-1/2 .-translate-x-1/2 .w-[95%] .max-w-7xl .rounded-2xl .border-slate-100 .shadow-2xl .justify-between .h-20 .transition-all .duration-300 .flex-shrink-0 .h-14 .w-auto .text-2xl .tracking-tight .block .ts-wm .ts-wm-top .text-[#343453] .color-shift-text .ts-wm-sub .hidden .md:flex .space-x-8 .ts-nav-links .hover:text-brand-600 .ts-dd .ts-dd-car .ts-dd-menu .ts-btn-outline .px-5 .py-2.5 .hover:bg-brand-900 .md:hidden .p-2 .inset-y-0 .w-64 .bg-white/95 .backdrop-blur-xl .z-[60] .flex-col .transition-transform .translate-x-full .justify-end .text-slate-500 .space-y-6 .text-lg .text-slate-800 .ts-btn-outline-block .text-slate-300 .py-12 .ts-foot-grid .grid .grid-cols-1 .md:grid-cols-4 .gap-12 .col-span-1 .md:col-span-2 .left-[-100vw] .right-[-3rem] .rounded-r-3xl .z-0 .shadow-xl .pl-2 .text-slate-900 .bg-gradient-to-r .from-brand-500 .to-indigo-500 .text-transparent .bg-clip-text .text-slate-700 .max-w-xs .ts-fcol .space-y-1 .hover:text-brand-400 .py-2 .mt-4 .md:mt-0 .w-10 .h-10 .bg-slate-800 .hover:bg-brand-600 .border-slate-800"
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
                    <span class="imp-w-2 imp-h-2 imp-rounded-full imp-bg-brand-400"></span> Nonprofits</div>
                <h1 class="imp-text-3xl imp-md:text-5xl imp-font-extrabold imp-text-white imp-mb-6 imp-leading-tight">Nonprofit Data Imports Into NPSP</h1>
                <div class="imp-flex imp-items-center imp-justify-center imp-gap-6 imp-text-slate-400 imp-text-sm" style="flex-wrap:wrap;row-gap:6px">
                    <div><svg class="imp-svgi imp-mr-2" aria-hidden="true"><use href="#i-calendar" /></svg>October 2, 2026</div>
                    <div><svg class="imp-svgi imp-mr-2" aria-hidden="true"><use href="#i-user" /></svg>By <a href="https://www.linkedin.com/in/toukir-ahmed368" target="_blank" rel="noopener author" style="color:inherit;text-decoration:underline;text-underline-offset:3px">Toukir Ahmed</a>, Business Development Executive</div>
                    <div>3 min read</div>
                </div>
                <div class="imp-ts-get-app-wrap"><a href="https://appexchange.salesforce.com/appxListingDetail?listingId=f020d7cb-6467-4dcc-adda-c1ce6c620257" target="_blank" rel="noopener" class="imp-ts-get-app" aria-label="Get Smart Lookup Data Loader on the Salesforce AppExchange">Get App <svg viewBox="0 0 448 512" aria-hidden="true" fill="currentColor"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg></a></div>
            </div>
        </header>
    <section class="imp-py-20 imp-bg-white imp-relative">
        <div class="imp-max-w-3xl imp-mx-auto imp-px-6">
            <a href="/blog.html" class="imp-inline-flex imp-items-center imp-gap-2 imp-text-brand-600 imp-font-semibold imp-mb-8 imp-hover:underline">
                <svg class="imp-svgi" aria-hidden="true"><use href="#i-arrow-left" /></svg> Back to Blog
            </a>
            <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_1200,f_auto,q_auto/v1789991885/SLDL_10.1_tj8ana.png" alt="Nonprofit Data Imports Into NPSP" width="1200" height="675" fetchpriority="high" class="imp-w-full imp-h-64 imp-md:h-96 imp-object-cover imp-rounded-xl imp-shadow-lg imp-mb-10">
            <article>
                <p class="imp-text-xl imp-text-slate-600 imp-font-medium imp-mb-8">Nonprofit data imports are harder than the equivalent commercial ones, and the reason is structural rather than technical.</p>
                <h2 id="what-makes-it-harder">What makes it harder</h2>
<p><strong>Records are related in more ways.</strong> A constituent belongs to a household, may be linked to an organisation as a contact or a soft credit, may be a volunteer, and may have an affiliation with a second organisation. Every one of those is a lookup that needs to resolve.</p>
<p><strong>Person Accounts change the shape.</strong> NPSP’s household model and Nonprofit Cloud’s use of Person Accounts both mean the record you think you are importing is not stored the way it looks.</p>
<p><strong>Source data is old and inconsistent.</strong> It arrives from a legacy donor database, or from spreadsheets maintained across several years by different people, or from an events platform. Names appear in three formats. Addresses were free text.</p>
<p><strong>The identifiers are people, not codes.</strong> Commercial data usually has a customer number. Donor data usually has a name and an email address, both of which change.</p>
<p><strong>Mistakes are visible.</strong> A duplicated donor record means a second appeal letter to someone who already gave, which is embarrassing in a way a duplicate B2B lead is not.</p>
<h2 id="the-relationship-problem">The relationship problem</h2>
<p>The core difficulty is that you cannot load constituents until households exist, and you often cannot determine households until you have looked at the constituents.</p>
<p>A standard loader handles this by making you do it in passes: load accounts or households first, export them with their new IDs, VLOOKUP those IDs into your contact file, then load contacts. Each pass is another export, another spreadsheet, another opportunity for the file to drift out of sync with the org.</p>
<p>Resolving lookups at import time collapses that. Your contact file references the household by name or by the legacy system’s identifier, and the relationship is resolved as records land.</p>
<figure><img alt="A workable load order for an NPSP migration" decoding="async" height="562" loading="lazy" src="https://res.cloudinary.com/du42kbmmn/image/upload/w_1000,f_auto,q_auto/v1789991884/SLDL_10.2_fblrsm.png" width="1000" /><figcaption>A workable load order for an NPSP migration.</figcaption></figure>
<h2 id="a-workable-sequence">A workable sequence</h2>
<ol type="1">
<li><strong>Organisations and households first.</strong> Load these with their legacy identifier stored in an External ID field. That field is what everything else will match on.</li>
<li><strong>Constituents second,</strong> referencing the household by that identifier rather than by a Salesforce ID.</li>
<li><strong>Affiliations and relationships third,</strong> once both ends exist.</li>
<li><strong>Gifts and opportunities last,</strong> referencing the constituent by the same legacy identifier.</li>
<li><strong>Reconcile totals before anything else happens.</strong> Total gift value in the source versus total in Salesforce. If those do not match to the penny, stop and find out why before going further.</li>
</ol>
<h2 id="practical-cautions">Practical cautions</h2>
<p><strong>Keep the legacy ID forever.</strong> Store the source system’s identifier on every migrated record in a dedicated External ID field. It costs nothing and it is the only reliable way to answer “where did this record come from” in two years.</p>
<p><strong>Do not clean during migration.</strong> It is tempting to fix addresses and standardise names in the same pass. Resist it. Load the data as it is, verify it landed correctly, then clean it in Salesforce where you can undo things and report on what changed.</p>
<p><strong>Watch blank columns.</strong> A column present but empty will overwrite existing values on an upsert. With donor data that can mean erasing history.</p>
<p><strong>Test the household logic on a small set.</strong> Load twenty households and their constituents, then look at what NPSP actually created. Household naming and greeting formulas are automated, and it is better to see their output on twenty records than on eight thousand.</p>
<p><strong>Budget for reconciliation, not just loading.</strong> In most nonprofit migrations, the loading is the fast part.</p>
<h2 id="why-cost-matters-here-specifically">Why cost matters here specifically</h2>
<p>Nonprofits are the most price-sensitive Salesforce customers there are. A per-record data loading fee applied to a full donor history is a real budget line, and it is competing against programme spend.</p>
<p><a href="/products/smart-lookup-data-loader.html">Smart Lookup Data Loader</a> is free, with no row cap, and it is native, so donor data never leaves the org during a load. For an organisation handling beneficiary information under a data protection obligation, that second point often matters more than the first.</p>
                <div class="imp-bg-brand-50 imp-border imp-border-brand-200 imp-rounded-xl imp-p-6 imp-mt-12">
                    <div class="imp-flex imp-items-center imp-gap-3 imp-mb-4">
                        <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_128,f_auto,q_auto/v1788420787/Untitled_design_20_daquoh.png" alt="Smart Lookup Data Loader app logo" width="48" height="48" loading="lazy" class="imp-h-12 imp-w-12 imp-rounded-lg imp-object-cover">
                        <p class="imp-font-bold imp-text-brand-900 imp-mb-0">Import by name, email or code. Skip the VLOOKUP.</p>
                    </div>
                    <p class="imp-text-brand-800 imp-mb-4">Smart Lookup Data Loader is a free, 100% native Salesforce app by TwinStack. Lookups resolve as records land, upserts match on several fields, and every failed row tells you why.</p>
                    <a href="https://appexchange.salesforce.com/appxListingDetail?listingId=f020d7cb-6467-4dcc-adda-c1ce6c620257" target="_blank" rel="noopener" class="imp-inline-block imp-px-6 imp-py-3 imp-bg-brand-600 imp-text-white imp-font-semibold imp-rounded-lg imp-hover:bg-brand-700 imp-transition">Get It Now, Free</a>
                    <p style="margin-top:16px;font-size:.95rem">Want the full picture first? See the <a href="/products/smart-lookup-data-loader.html" class="imp-text-brand-600 imp-font-semibold" style="text-decoration:underline">Smart Lookup Data Loader</a> product page.</p>
                </div>
                <div class="imp-ts-keep"><h2>Keep reading</h2><ul><li><a href="/blog/what-is-smart-lookup-data-loader.html">What Is Smart Lookup Data Loader?</a></li><li><a href="/blog/salesforce-import-vlookup-record-ids.html">Why Bulk Imports Start With a VLOOKUP</a></li><li><a href="/blog/salesforce-duplicate-records-match-fields.html">Single-Field Matching Creates Duplicates</a></li></ul></div>
            </article>
            <div class="imp-mt-16 imp-pt-8 imp-border-t imp-border-slate-200">
                <a href="/blog.html" class="imp-inline-flex imp-items-center imp-gap-2 imp-text-brand-600 imp-font-bold imp-hover:underline">
                    <svg class="imp-svgi" aria-hidden="true"><use href="#i-arrow-left" /></svg> Return to All Insights
                </a>
            </div>
        </div>
    </section>
</div>
