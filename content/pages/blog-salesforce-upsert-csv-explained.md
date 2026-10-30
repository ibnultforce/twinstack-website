---
title: Salesforce Upsert Explained
slug: blog-salesforce-upsert-csv-explained
url: /blog/salesforce-upsert-csv-explained.html
order: 50
description: Upsert updates existing Salesforce records and creates new ones in a single import. How the match key works, how to choose one, and where upserts go wrong.
metaTitle: "Salesforce Upsert: Match Keys & Duplicates | My Website"
metaDescription: Salesforce upsert inserts or updates each row in one file. See how the match key decides, which keys fail, and a five-step routine before the full run.
focusKeyword: Salesforce upsert
stylesheet: /assets/css/imported/blog-salesforce-upsert-csv-explained.css
hideCta: true
scripts:
  - src: "/assets/js/imported/blog-salesforce-upsert-csv-explained/inline-1.js"
    head: true
    module: false
    nomodule: false
    defer: false
    async: false
  - src: "/assets/js/imported/blog-salesforce-upsert-csv-explained/ts-analytics.js"
    head: true
    module: false
    nomodule: false
    defer: true
    async: false
  - src: "/assets/js/imported/blog-salesforce-upsert-csv-explained/inline-2.js"
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
                    <span class="imp-w-2 imp-h-2 imp-rounded-full imp-bg-brand-400"></span> Explainer</div>
                <h1 class="imp-text-3xl imp-md:text-5xl imp-font-extrabold imp-text-white imp-mb-6 imp-leading-tight">Salesforce Upsert Explained</h1>
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
            <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_1200,f_auto,q_auto/v1789991892/SLDL_6.1_gxqusa.png" alt="Salesforce Upsert Explained" width="1200" height="675" fetchpriority="high" class="imp-w-full imp-h-64 imp-md:h-96 imp-object-cover imp-rounded-xl imp-shadow-lg imp-mb-10">
            <article>
                <p class="imp-text-xl imp-text-slate-600 imp-font-medium imp-mb-8">Upsert is insert and update in one operation. For each row, Salesforce checks whether a matching record already exists. If it does, the row updates it. If it does not, the row creates a new one.</p>
                <p>That is the whole idea. Everything that goes wrong with upserts goes wrong in the word “matching”.</p>
<h2 id="why-it-matters">Why it matters</h2>
<p>Without upsert, a recurring load means splitting your file. New records in one file to insert, existing records in another to update, and the split itself has to be worked out first, usually by exporting the org and comparing.</p>
<p>With upsert, the same file runs every time. Rows that exist get updated, rows that do not get created, and you never maintain two versions of the same data.</p>
<p>For anything that repeats, a monthly list, a nightly export, a partner feed, this is the difference between a five minute job and an hour.</p>
<h2 id="the-match-key">The match key</h2>
<p>Upsert needs to know what makes a record the same record. In the standard Data Loader this means an External ID field, a custom field marked as External ID and unique, holding the identifier from the source system.</p>
<p>Three rules for choosing one:</p>
<p><strong>It has to be stable.</strong> If the value changes when the business changes, you will create duplicates on the day it changes. Email addresses fail this test. Customer numbers usually pass.</p>
<p><strong>It has to be unique.</strong> If two source records share a value, one of them will overwrite the other and no error will tell you.</p>
<p><strong>It has to exist on every row.</strong> A blank match key means an insert, every time, whether or not the record already exists.</p>
<h2 id="where-upserts-go-wrong">Where upserts go wrong</h2>
<p><strong>Blank keys create duplicates.</strong> A file where 12% of rows have an empty external ID will create 12% duplicates on every run, and the run will report success each time.</p>
<p><strong>Case and whitespace matter more than you expect.</strong> <code>ACME-001</code> and <code>acme-001</code> may not match, depending on configuration. Normalise before loading.</p>
<p><strong>Blank columns can overwrite good data.</strong> If a column exists in your file but is empty for some rows, you can wipe populated values in Salesforce. If your source does not have the data, leave the column out rather than including it empty.</p>
<p><strong>Upsert does not merge.</strong> It updates the matched record with your row’s values. If the org has better data in a field than your file does, the upsert will replace it.</p>
<p><strong>Reparenting is quiet.</strong> If your file’s lookup column points at a different parent than the existing record, the upsert moves the record. That is sometimes exactly right and sometimes a silent disaster.</p>
<figure><img alt="A five-step routine for running an upsert safely" decoding="async" height="562" loading="lazy" src="https://res.cloudinary.com/du42kbmmn/image/upload/w_1000,f_auto,q_auto/v1789991898/SLDL_6.2_rd1t0v.png" width="1000" /><figcaption>A five-step routine for running an upsert safely.</figcaption></figure>
<h2 id="a-safe-upsert-routine">A safe upsert routine</h2>
<ol type="1">
<li>Run a sample of 50 rows from the middle of the file, not the top.</li>
<li>Check the split of inserts versus updates against what you expected. A file you believe is 90% existing customers should not come back 90% inserts.</li>
<li>Confirm no field you care about went blank.</li>
<li>Check one record end to end against the source.</li>
<li>Then run the full file.</li>
</ol>
<h2 id="multi-field-matching">Multi-field matching</h2>
<p>A single external ID is the cleanest key when one exists. Often it does not, because the source is a spreadsheet somebody maintains rather than a system with its own identifiers.</p>
<p><a href="/products/smart-lookup-data-loader.html">Smart Lookup Data Loader</a> lets you upsert on a combination of fields instead, so you can match on email plus company code, or name plus region, without first creating and populating a custom External ID field across your entire object. For files arriving from outside a formal system, that is usually the difference between an upsert you can trust and one you cannot.</p>
                <div class="imp-bg-brand-50 imp-border imp-border-brand-200 imp-rounded-xl imp-p-6 imp-mt-12">
                    <div class="imp-flex imp-items-center imp-gap-3 imp-mb-4">
                        <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_128,f_auto,q_auto/v1788420787/Untitled_design_20_daquoh.png" alt="Smart Lookup Data Loader app logo" width="48" height="48" loading="lazy" class="imp-h-12 imp-w-12 imp-rounded-lg imp-object-cover">
                        <p class="imp-font-bold imp-text-brand-900 imp-mb-0">Import by name, email or code. Skip the VLOOKUP.</p>
                    </div>
                    <p class="imp-text-brand-800 imp-mb-4">Smart Lookup Data Loader is a free, 100% native Salesforce app by TwinStack. Lookups resolve as records land, upserts match on several fields, and every failed row tells you why.</p>
                    <a href="https://appexchange.salesforce.com/appxListingDetail?listingId=f020d7cb-6467-4dcc-adda-c1ce6c620257" target="_blank" rel="noopener" class="imp-inline-block imp-px-6 imp-py-3 imp-bg-brand-600 imp-text-white imp-font-semibold imp-rounded-lg imp-hover:bg-brand-700 imp-transition">Get It Now, Free</a>
                    <p style="margin-top:16px;font-size:.95rem">Want the full picture first? See the <a href="/products/smart-lookup-data-loader.html" class="imp-text-brand-600 imp-font-semibold" style="text-decoration:underline">Smart Lookup Data Loader</a> product page.</p>
                </div>
                <div class="imp-ts-keep"><h2>Keep reading</h2><ul><li><a href="/blog/salesforce-csv-import-file-preparation.html">How to Prepare a CSV for Salesforce Import</a></li><li><a href="/blog/free-salesforce-data-loader.html">What Free Actually Means for Data Loaders</a></li><li><a href="/blog/salesforce-data-loader-no-java.html">Importing Into Salesforce Without Java</a></li></ul></div>
            </article>
            <div class="imp-mt-16 imp-pt-8 imp-border-t imp-border-slate-200">
                <a href="/blog.html" class="imp-inline-flex imp-items-center imp-gap-2 imp-text-brand-600 imp-font-bold imp-hover:underline">
                    <svg class="imp-svgi" aria-hidden="true"><use href="#i-arrow-left" /></svg> Return to All Insights
                </a>
            </div>
        </div>
    </section>
</div>
