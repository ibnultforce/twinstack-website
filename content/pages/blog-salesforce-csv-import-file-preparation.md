---
title: How to Prepare a CSV for Salesforce Import
slug: blog-salesforce-csv-import-file-preparation
url: /blog/salesforce-csv-import-file-preparation.html
order: 50
description: Most Salesforce import failures are file problems. A practical checklist for encoding, dates, picklists, lookups and field lengths before you load any data.
metaTitle: "Prepare a CSV for Salesforce Import: 10 Checks | My Website"
metaDescription: "A practical pre-load checklist for a Salesforce CSV import: encoding, headers, dates, numbers, picklists, lookups, field lengths and a 50-row sample test."
focusKeyword: Salesforce CSV import
stylesheet: /assets/css/imported/blog-salesforce-csv-import-file-preparation.css
hideCta: true
scripts:
  - src: "/assets/js/imported/blog-salesforce-csv-import-file-preparation/inline-1.js"
    head: true
    module: false
    nomodule: false
    defer: false
    async: false
  - src: "/assets/js/imported/blog-salesforce-csv-import-file-preparation/ts-analytics.js"
    head: true
    module: false
    nomodule: false
    defer: true
    async: false
  - src: "/assets/js/imported/blog-salesforce-csv-import-file-preparation/inline-2.js"
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
                    <span class="imp-w-2 imp-h-2 imp-rounded-full imp-bg-brand-400"></span> How-To</div>
                <h1 class="imp-text-3xl imp-md:text-5xl imp-font-extrabold imp-text-white imp-mb-6 imp-leading-tight">How to Prepare a CSV for Salesforce Import</h1>
                <div class="imp-flex imp-items-center imp-justify-center imp-gap-6 imp-text-slate-400 imp-text-sm" style="flex-wrap:wrap;row-gap:6px">
                    <div><svg class="imp-svgi imp-mr-2" aria-hidden="true"><use href="#i-calendar" /></svg>October 2, 2026</div>
                    <div><svg class="imp-svgi imp-mr-2" aria-hidden="true"><use href="#i-user" /></svg>By <a href="https://www.linkedin.com/in/toukir-ahmed368" target="_blank" rel="noopener author" style="color:inherit;text-decoration:underline;text-underline-offset:3px">Toukir Ahmed</a>, Business Development Executive</div>
                    <div>4 min read</div>
                </div>
                <div class="imp-ts-get-app-wrap"><a href="https://appexchange.salesforce.com/appxListingDetail?listingId=f020d7cb-6467-4dcc-adda-c1ce6c620257" target="_blank" rel="noopener" class="imp-ts-get-app" aria-label="Get Smart Lookup Data Loader on the Salesforce AppExchange">Get App <svg viewBox="0 0 448 512" aria-hidden="true" fill="currentColor"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg></a></div>
            </div>
        </header>
    <section class="imp-py-20 imp-bg-white imp-relative">
        <div class="imp-max-w-3xl imp-mx-auto imp-px-6">
            <a href="/blog.html" class="imp-inline-flex imp-items-center imp-gap-2 imp-text-brand-600 imp-font-semibold imp-mb-8 imp-hover:underline">
                <svg class="imp-svgi" aria-hidden="true"><use href="#i-arrow-left" /></svg> Back to Blog
            </a>
            <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_1200,f_auto,q_auto/v1789991889/SLDL_7.1_w1rubx.png" alt="How to Prepare a CSV for Salesforce Import" width="1200" height="675" fetchpriority="high" class="imp-w-full imp-h-64 imp-md:h-96 imp-object-cover imp-rounded-xl imp-shadow-lg imp-mb-10">
            <article>
                <p class="imp-text-xl imp-text-slate-600 imp-font-medium imp-mb-8">Most failed imports are not tool failures. They are file failures that the tool reported accurately.</p>
                <p>Here is what to check before the load, in the order that catches the most problems soonest.</p>
<h2 id="encoding">1. Encoding</h2>
<p>Save as UTF-8. If your file came out of a European or Asian system and went through Excel on Windows, there is a good chance it is not.</p>
<p>The symptom is names arriving mangled: accented characters replaced with question marks or three-character sequences. It is easiest to fix before the load and tedious afterwards, because you have to identify which records were affected.</p>
<h2 id="headers">2. Headers</h2>
<p>Use one header row with no blank columns and no merged cells. Keep header names close to the Salesforce field labels or API names, because that is what auto-mapping matches against. <code>account_name</code> and <code>Account Name</code> both map cleanly. <code>Col 3</code> does not.</p>
<p>Delete the summary row some systems add at the bottom. It will be imported as a record.</p>
<h2 id="dates">3. Dates</h2>
<p>This is the single most common formatting failure, and it is silent when it goes wrong rather than loud.</p>
<p>Salesforce expects <code>YYYY-MM-DD</code>. A file with <code>03/04/2026</code> is ambiguous, and if it loads at all, half your records may end up in the wrong month. Convert the column to an unambiguous format before you load, and confirm Excel has not helpfully converted it back.</p>
<p>For datetime fields, decide what time zone the values are in and confirm it matches the running user’s setting.</p>
<h2 id="numbers">4. Numbers</h2>
<p>Check for currency symbols, thousands separators and percent signs. <code>$1,250.00</code> is text, not a number.</p>
<p>Watch for scientific notation. Long numeric codes opened in Excel become <code>1.23457E+14</code>, and that value is now permanently wrong in the file. If a column is an identifier rather than a quantity, format it as text before the file is ever opened.</p>
<p>Leading zeros disappear the same way. A postcode of <code>01234</code> becomes <code>1234</code>.</p>
<h2 id="picklists">5. Picklists</h2>
<p>Values must match the picklist exactly, including case, unless the field allows anything. Export the picklist values from the field definition and compare, rather than assuming you know them.</p>
<p>For multi-select picklists, separate values with a semicolon and no spaces around it.</p>
<figure><img alt="From raw CSV to a successful import" decoding="async" height="562" loading="lazy" src="https://res.cloudinary.com/du42kbmmn/image/upload/w_1000,f_auto,q_auto/v1789991892/SLDL_7.2_hpqhoo.png" width="1000" /><figcaption>From raw CSV to a successful import.</figcaption></figure>
<h2 id="lookups">6. Lookups</h2>
<p>Decide how each lookup will resolve before you load. If you are using a standard loader, the column needs record IDs, and you need a plan for getting them. If your loader resolves lookups by name or code, confirm that the values in your file are actually unique in the org.</p>
<p>Either way, run a count first: how many distinct values does your lookup column contain, and how many of those exist in the org? The gap is your problem list.</p>
<h2 id="field-lengths">7. Field lengths</h2>
<p>Text fields have limits. Standard text fields are typically 255 characters, and long text areas vary. Check the longest value in each column against the field definition. Descriptions imported from legacy systems are the usual offender.</p>
<h2 id="required-fields-and-validation-rules">8. Required fields and validation rules</h2>
<p>Required is enforced at the field level and by validation rules, not by page layout. Check the object’s field definitions and its active validation rules before loading, because a rule written for manual data entry can reject an entire import.</p>
<p>If a rule is going to block a legitimate load, coordinate with whoever owns it rather than working around it.</p>
<h2 id="duplicates-within-the-file-itself">9. Duplicates within the file itself</h2>
<p>Before worrying about duplicates against the org, check for duplicates inside your own file. Two rows with the same match key in one upsert means one overwrites the other, and the order is not guaranteed.</p>
<h2 id="take-a-sample-first">10. Take a sample first</h2>
<p>Cut fifty rows from the middle of the file and load those. The middle, because the top of a file is usually its cleanest part.</p>
<p>Check the results record by record against the source. Fifty rows takes ten minutes and finds almost everything that an eight thousand row load would have found the hard way.</p>
<h2 id="after-the-load">After the load</h2>
<p>Keep the source file and the result. A completed import you cannot reconcile against its input is difficult to audit later, and someone will eventually ask where a particular record came from.</p>
<p><a href="/products/smart-lookup-data-loader.html">Smart Lookup Data Loader</a> includes a sample CSV download with the correct field API names for whichever object you are loading, which removes most of the header and structure problems before they start.</p>
                <div class="imp-bg-brand-50 imp-border imp-border-brand-200 imp-rounded-xl imp-p-6 imp-mt-12">
                    <div class="imp-flex imp-items-center imp-gap-3 imp-mb-4">
                        <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_128,f_auto,q_auto/v1788420787/Untitled_design_20_daquoh.png" alt="Smart Lookup Data Loader app logo" width="48" height="48" loading="lazy" class="imp-h-12 imp-w-12 imp-rounded-lg imp-object-cover">
                        <p class="imp-font-bold imp-text-brand-900 imp-mb-0">Import by name, email or code. Skip the VLOOKUP.</p>
                    </div>
                    <p class="imp-text-brand-800 imp-mb-4">Smart Lookup Data Loader is a free, 100% native Salesforce app by TwinStack. Lookups resolve as records land, upserts match on several fields, and every failed row tells you why.</p>
                    <a href="https://appexchange.salesforce.com/appxListingDetail?listingId=f020d7cb-6467-4dcc-adda-c1ce6c620257" target="_blank" rel="noopener" class="imp-inline-block imp-px-6 imp-py-3 imp-bg-brand-600 imp-text-white imp-font-semibold imp-rounded-lg imp-hover:bg-brand-700 imp-transition">Get It Now, Free</a>
                    <p style="margin-top:16px;font-size:.95rem">Want the full picture first? See the <a href="/products/smart-lookup-data-loader.html" class="imp-text-brand-600 imp-font-semibold" style="text-decoration:underline">Smart Lookup Data Loader</a> product page.</p>
                </div>
                <div class="imp-ts-keep"><h2>Keep reading</h2><ul><li><a href="/blog/free-salesforce-data-loader.html">What Free Actually Means for Data Loaders</a></li><li><a href="/blog/salesforce-data-loader-no-java.html">Importing Into Salesforce Without Java</a></li><li><a href="/blog/nonprofit-salesforce-data-import.html">Nonprofit Data Imports Into NPSP</a></li></ul></div>
            </article>
            <div class="imp-mt-16 imp-pt-8 imp-border-t imp-border-slate-200">
                <a href="/blog.html" class="imp-inline-flex imp-items-center imp-gap-2 imp-text-brand-600 imp-font-bold imp-hover:underline">
                    <svg class="imp-svgi" aria-hidden="true"><use href="#i-arrow-left" /></svg> Return to All Insights
                </a>
            </div>
        </div>
    </section>
</div>
