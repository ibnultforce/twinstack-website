---
title: How to Read a Failed Salesforce Import
description: A failed Salesforce import is a diagnosis problem before it is a data problem. How to read row-level errors and fix only the rows that actually failed.
metaTitle: "Salesforce Import Errors: How to Read Them | My Website"
metaDescription: "Salesforce import errors are a diagnosis problem before a data problem: sort failures by type, fix the most common, and re-run only the failed rows."
focusKeyword: Salesforce import errors
slug: blog-salesforce-import-error-reporting
url: /blog/salesforce-import-error-reporting.html
order: 50
stylesheet: /assets/css/imported/blog-salesforce-import-error-reporting.css
hideCta: true
scripts:
  - src: "/assets/js/imported/blog-salesforce-import-error-reporting/inline-1.js"
    head: true
    module: false
    nomodule: false
    defer: false
    async: false
  - src: "/assets/js/imported/blog-salesforce-import-error-reporting/ts-analytics.js"
    head: true
    module: false
    nomodule: false
    defer: true
    async: false
  - src: "/assets/js/imported/blog-salesforce-import-error-reporting/inline-2.js"
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
                    <span class="imp-w-2 imp-h-2 imp-rounded-full imp-bg-brand-400"></span> Troubleshooting</div>
                <h1 class="imp-text-3xl imp-md:text-5xl imp-font-extrabold imp-text-white imp-mb-6 imp-leading-tight">Reading a Failed Salesforce Import</h1>
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
            <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_1200,f_auto,q_auto/v1789991893/SLDL_4.1_ryv9by.png" alt="Reading a Failed Salesforce Import" width="1200" height="675" fetchpriority="high" class="imp-w-full imp-h-64 imp-md:h-96 imp-object-cover imp-rounded-xl imp-shadow-lg imp-mb-10">
            <article>
                <p class="imp-text-xl imp-text-slate-600 imp-font-medium imp-mb-8">There are two kinds of failed import. One tells you which row broke and why. The other tells you that 1,204 records failed and leaves an error file for you to reconcile against the original by hand.</p>
                <p>The difference is most of the time you will spend.</p>
<h2 id="errors-you-will-actually-see">Errors you will actually see</h2>
<p><code>INVALID_OR_NULL_FOR_RESTRICTED_PICKLIST</code><strong>.</strong> Your file has a value the picklist does not allow. Usually a country written as “USA” against a picklist expecting “United States”, or a status from the old system that was never migrated.</p>
<p><code>REQUIRED_FIELD_MISSING</code><strong>.</strong> A field is required either on the object or by a validation rule. Note that page layout requirements do not apply to imports, so this is coming from the field definition or from a rule.</p>
<p><code>FIELD_CUSTOM_VALIDATION_EXCEPTION</code><strong>.</strong> A validation rule rejected the row, and the message is whatever your org’s admin wrote in that rule. Often the most informative error you will get, because somebody wrote it in plain English.</p>
<p><code>MALFORMED_ID</code><strong>.</strong> A lookup got something that is not a valid ID. Usually a truncated value, a name that was supposed to be converted to an ID and never was, or a fifteen-character ID where an eighteen-character one was expected.</p>
<p><code>DUPLICATES_DETECTED</code><strong>.</strong> A duplicate rule blocked the insert. Worth reading carefully, because sometimes the rule is right and your match key is wrong.</p>
<p><code>UNABLE_TO_LOCK_ROW</code><strong>.</strong> Contention. Two processes tried to update related records at once. Often just a matter of reducing batch size or not running an import while another job is active.</p>
<p><code>STRING_TOO_LONG</code><strong>.</strong> A value exceeds the field length. Common with description fields pulled out of a legacy system that had no limit.</p>
<figure><img alt="A batch-level error file against row-level reporting" decoding="async" height="562" loading="lazy" src="https://res.cloudinary.com/du42kbmmn/image/upload/w_1000,f_auto,q_auto/v1789991891/SLDL_4.2_yqrk4n.png" width="1000" /><figcaption>A batch-level error file against row-level reporting.</figcaption></figure>
<h2 id="the-reconciliation-problem">The reconciliation problem</h2>
<p>Most of these are quick fixes on their own. What makes them expensive is finding them.</p>
<p>A batch-level error file gives you failed rows in a separate document with an error column appended. To fix anything, you have to match those rows back to your source, work out what changed, correct the original, then decide whether to re-run everything or just the failures. If the file has been edited since, that reconciliation gets genuinely difficult.</p>
<p>Row-level reporting removes that step. The error points at line 219 and names the field. You open your file at line 219 and fix it.</p>
<h2 id="a-working-order-for-diagnosis">A working order for diagnosis</h2>
<ol type="1">
<li><strong>Sort errors by type, not by row.</strong> Twelve hundred failures are usually three problems repeated, not twelve hundred problems.</li>
<li><strong>Fix the most common one first</strong> and count how many rows it accounts for. Often it is 90% of them.</li>
<li><strong>Check whether it is your data or the org.</strong> A restricted picklist rejecting a legitimate value may mean the picklist needs the value added, not that your file is wrong.</li>
<li><strong>Re-run only the failures.</strong> If your match rule is sound, re-running the whole file is safe because successful rows just update to the same values, but it wastes time and clutters the audit trail.</li>
<li><strong>Keep the failed set.</strong> It is the best documentation you have of where your source data and your org disagree.</li>
</ol>
<h2 id="prevention-beats-diagnosis">Prevention beats diagnosis</h2>
<p>Most failures are visible before a load if you look. Validate a sample first. Check picklist values against the field definition rather than against what you think they are. Confirm required fields and active validation rules on the target object. Check field lengths against the longest value in each column.</p>
<p><a href="/products/smart-lookup-data-loader.html">Smart Lookup Data Loader</a> reports every row as inserted, upserted or failed, names the field that caused each failure, and lets you confirm the mapping and match rule before anything is committed. The goal is not fewer errors. It is errors you can act on in a minute rather than an afternoon.</p>
                <div class="imp-bg-brand-50 imp-border imp-border-brand-200 imp-rounded-xl imp-p-6 imp-mt-12">
                    <div class="imp-flex imp-items-center imp-gap-3 imp-mb-4">
                        <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_128,f_auto,q_auto/v1788420787/Untitled_design_20_daquoh.png" alt="Smart Lookup Data Loader app logo" width="48" height="48" loading="lazy" class="imp-h-12 imp-w-12 imp-rounded-lg imp-object-cover">
                        <p class="imp-font-bold imp-text-brand-900 imp-mb-0">Import by name, email or code. Skip the VLOOKUP.</p>
                    </div>
                    <p class="imp-text-brand-800 imp-mb-4">Smart Lookup Data Loader is a free, 100% native Salesforce app by TwinStack. Lookups resolve as records land, upserts match on several fields, and every failed row tells you why.</p>
                    <a href="https://appexchange.salesforce.com/appxListingDetail?listingId=f020d7cb-6467-4dcc-adda-c1ce6c620257" target="_blank" rel="noopener" class="imp-inline-block imp-px-6 imp-py-3 imp-bg-brand-600 imp-text-white imp-font-semibold imp-rounded-lg imp-hover:bg-brand-700 imp-transition">Get It Now, Free</a>
                    <p style="margin-top:16px;font-size:.95rem">Want the full picture first? See the <a href="/products/smart-lookup-data-loader.html" class="imp-text-brand-600 imp-font-semibold" style="text-decoration:underline">Smart Lookup Data Loader</a> product page.</p>
                </div>
                <div class="imp-ts-keep"><h2>Keep reading</h2><ul><li><a href="/blog/salesforce-data-import-wizard-vs-data-loader.html">Import Wizard vs Data Loader vs Smart Lookup</a></li><li><a href="/blog/salesforce-upsert-csv-explained.html">Salesforce Upsert Explained</a></li><li><a href="/blog/salesforce-csv-import-file-preparation.html">How to Prepare a CSV for Salesforce Import</a></li></ul></div>
            </article>
            <div class="imp-mt-16 imp-pt-8 imp-border-t imp-border-slate-200">
                <a href="/blog.html" class="imp-inline-flex imp-items-center imp-gap-2 imp-text-brand-600 imp-font-bold imp-hover:underline">
                    <svg class="imp-svgi" aria-hidden="true"><use href="#i-arrow-left" /></svg> Return to All Insights
                </a>
            </div>
        </div>
    </section>
</div>
