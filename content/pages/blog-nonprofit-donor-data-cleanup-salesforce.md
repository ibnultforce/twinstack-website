---
title: Donor Data Clean-Up Before a Salesforce Migration
slug: blog-nonprofit-donor-data-cleanup-salesforce
url: /blog/nonprofit-donor-data-cleanup-salesforce.html
order: 50
description: "A practical donor data clean-up for nonprofits before moving to Salesforce: duplicates, households, addresses, gift history and the order to do it in."
metaTitle: Nonprofit Donor Data Clean-Up for Salesforce | My Website
metaDescription: "A donor data clean-up before a Salesforce migration: stable IDs, duplicate checks, households, addresses, gift totals and the order to do each step in."
focusKeyword: donor data clean-up Salesforce
stylesheet: /assets/css/imported/blog-nonprofit-donor-data-cleanup-salesforce.css
hideCta: true
scripts:
  - src: "/assets/js/imported/blog-nonprofit-donor-data-cleanup-salesforce/inline-1.js"
    head: true
    module: false
    nomodule: false
    defer: false
    async: false
  - src: "/assets/js/imported/blog-nonprofit-donor-data-cleanup-salesforce/ts-analytics.js"
    head: true
    module: false
    nomodule: false
    defer: true
    async: false
  - src: "/assets/js/imported/blog-nonprofit-donor-data-cleanup-salesforce/inline-2.js"
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
                <span class="imp-w-2 imp-h-2 imp-rounded-full imp-bg-brand-400"></span> Nonprofit Guide</div>
            <h1 class="imp-text-3xl imp-md:text-5xl imp-font-extrabold imp-text-white imp-mb-6 imp-leading-tight">Donor Data Clean-Up Before a Salesforce Migration</h1>
            <div class="imp-flex imp-items-center imp-justify-center imp-gap-6 imp-text-slate-400 imp-text-sm">
                <div><svg class="imp-svgi imp-mr-2" aria-hidden="true"><use href="#i-calendar" /></svg>15 October 2026</div>
                <div><svg class="imp-svgi imp-mr-2" aria-hidden="true"><use href="#i-user" /></svg>By <a href="https://www.linkedin.com/in/toukir-ahmed368" target="_blank" rel="noopener author" style="color:inherit;text-decoration:underline;text-underline-offset:3px">Toukir Ahmed</a>, Business Development Executive · 5 min read</div>
            </div>
            <div class="imp-ts-get-app-wrap"><a href="/services/salesforce-nonprofit.html" class="imp-ts-get-app" aria-label="See TwinStack's Salesforce services for nonprofits">Salesforce for nonprofits <svg viewBox="0 0 448 512" aria-hidden="true" fill="currentColor"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg></a></div>
        </div>
    </header>
    <section class="imp-py-20 imp-bg-white imp-relative">
        <div class="imp-max-w-3xl imp-mx-auto imp-px-6">
            <a href="/blog.html" class="imp-inline-flex imp-items-center imp-gap-2 imp-text-brand-600 imp-font-semibold imp-mb-8 imp-hover:underline">
                <svg class="imp-svgi" aria-hidden="true"><use href="#i-arrow-left" /></svg> Back to Blog
            </a>
            <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_800,f_auto,q_auto/v1792143942/09-thumb-nonprofit-donor-data-cleanup-salesforce_fzmdxm.jpg" alt="Duplicate donor cards passing through search, filter and check panels into one clean record, titled Donor Data Clean-Up Before a Salesforce Migration" width="1200" height="675" fetchpriority="high" class="imp-ts-hero-img imp-rounded-xl imp-shadow-lg imp-mb-10">
            <article>
                <p class="imp-text-xl imp-text-slate-600 imp-font-medium imp-mb-8"><strong>Short answer:</strong> clean donor data before you migrate, not during. Start by giving every record a stable ID, then remove duplicates using more than one field, rebuild household groupings, standardise addresses and contact preferences, check that gift totals and fund allocations add up, and archive what you no longer need. Keep clean-up and migration as separate projects. When a record fails during migration, you want to know it failed because of the move, not because of a clean-up change made the same week.</p>
                <h2 id="why-clean-up-decides-how-a-migration-goes">Why clean-up decides how a migration goes</h2>
<p>A migration copies whatever you give it. Duplicates become duplicates in the new system, broken households become broken households, and gift totals that never reconciled still do not reconcile. Worse, Salesforce's data model is relational, so one bad donor record can break the gifts, soft credits and relationships that point to it. Cleaning first is cheaper than cleaning after, and much cheaper than cleaning during.</p>
<figure class="imp-ts-fig"><a href="https://res.cloudinary.com/du42kbmmn/image/upload/f_auto,q_auto/v1792143942/09-body-nonprofit-donor-data-cleanup-salesforce_v7boab.jpg" target="_blank" rel="noopener" aria-label="Open the full-size image"><img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_1400,f_auto,q_auto/v1792143942/09-body-nonprofit-donor-data-cleanup-salesforce_v7boab.jpg" alt="Seven donor data clean-up steps to complete before a Salesforce migration" width="1200" height="675" loading="lazy"></a><figcaption>Seven clean-up steps to finish before the migration starts. <span>Click to enlarge.</span></figcaption></figure>
<h2 id="step-1-give-every-record-a-stable-id">Step 1: give every record a stable ID</h2>
<p>Before changing anything, make sure every donor, household and gift in your current system has a unique ID that will not change, and export it. This ID becomes your match key during migration and your audit trail afterwards. If your old system has no reliable ID, create one now.</p>
<h2 id="step-2-find-duplicates-using-more-than-one-field">Step 2: find duplicates using more than one field</h2>
<p>Matching on name alone merges different people and misses the same person spelled two ways. Use combinations:</p>
<ul>
<li>name plus postcode</li>
<li>name plus email</li>
<li>email alone, where emails are reliable</li>
<li>phone number, normalised to one format</li>
</ul>
<p>Review probable duplicates with staff who know the donors before merging. Two records with the same name and address may be a parent and child. Our post on <a href="/blog/salesforce-duplicate-records-match-fields.html">why single-field matching creates duplicates</a> explains how to pick match keys that hold up.</p>
<h2 id="step-3-rebuild-households-deliberately">Step 3: rebuild households deliberately</h2>
<p>Households drive greetings, acknowledgement letters and household giving totals, so they are worth getting right.</p>
<ul>
<li>Confirm who lives together now, not ten years ago.</li>
<li>Decide which member is primary for each household.</li>
<li>Separate people who have moved out, divorced or died. Record deceased donors properly so they are never solicited again.</li>
<li>Decide naming rules, such as "The Rahman Household" or "Farah and Imran Rahman", and apply them consistently.</li>
</ul>
<p>If you are moving to Nonprofit Cloud, households become Party Relationship Groups, so this is also design work for the new model. See <a href="/blog/npsp-to-nonprofit-cloud-data-mapping.html">NPSP to Nonprofit Cloud data mapping</a>.</p>
<h2 id="step-4-standardise-addresses-and-contact-preferences">Step 4: standardise addresses and contact preferences</h2>
<ul>
<li>Use one format for countries, postcodes and states.</li>
<li>Mark addresses that mail has been returned from.</li>
<li>Record consent and communication preferences in fields, not in notes. "Do not email" written in a comment field will not be honoured by an automated email.</li>
<li>Remove obviously invalid emails and phone numbers.</li>
</ul>
<h2 id="step-5-check-gift-history-adds-up">Step 5: check gift history adds up</h2>
<ul>
<li>Total gift value by year in the old system should match your finance records.</li>
<li>Every gift's fund allocations should sum to the gift amount.</li>
<li>Pledges and recurring gifts should have clear statuses: active, completed or lapsed.</li>
<li>Soft credits and tributes should point to real donor records.</li>
</ul>
<p>Write these totals down. They are the numbers you will reconcile against after every migration rehearsal.</p>
<h2 id="step-6-decide-what-not-to-migrate">Step 6: decide what not to migrate</h2>
<p>Not everything deserves a place in the new system:</p>
<ul>
<li>test and dummy records</li>
<li>empty records with no gifts, activity or consent</li>
<li>abandoned fields nobody has filled in for years</li>
<li>one-off imports nobody can explain</li>
</ul>
<p>Archive them with the old system's export rather than deleting them outright. Keep the archive somewhere your team can find it.</p>
<h2 id="step-7-prepare-files-that-load-cleanly">Step 7: prepare files that load cleanly</h2>
<p>Most import failures are file problems: encodings, date formats, picklist values that do not exist, and text that is longer than the target field. Our <a href="/blog/salesforce-csv-import-file-preparation.html">CSV preparation checklist</a> covers each one. When you load, reference related records by your stable IDs, not by Salesforce record IDs, so you are not exporting and VLOOKUP-ing between passes. Our free <a href="/products/smart-lookup-data-loader.html">Smart Lookup Data Loader</a> resolves lookups by name or code during import.</p>
<h2 id="what-our-illustrative-migration-taught-us">What our illustrative migration taught us</h2>
<p>In our illustrative <a href="/case-studies/riverbend-community-trust-npsp-migration.html">Riverbend Community Trust case study</a>, the team tried to standardise addresses during the migration. It mixed two problems together, because a record that failed could have failed for either reason. The address work was moved into its own project after go-live. Keep clean-up and migration apart.</p>
                <h2 id="faq">Frequently asked questions</h2>
<h3 class="imp-q">Should we clean donor data before or after migrating to Salesforce?</h3>
<p>Before. Migrating unclean data moves the problems into a relational system where they are harder to fix, and mixing clean-up with migration makes failures hard to diagnose.</p>
<h3 class="imp-q">How do we find duplicate donors?</h3>
<p>Match on combinations of fields, such as name plus postcode or name plus email, rather than name alone, and have staff who know the donors review probable duplicates before merging.</p>
<h3 class="imp-q">What should not be migrated to Salesforce?</h3>
<p>Test records, empty records with no gifts or consent, unused fields and unexplained one-off imports. Archive them from the old system instead of migrating them.</p>
<h3 class="imp-q">How do we know the migration is complete?</h3>
<p>Record total gift value by year and by fund in the old system before migrating, then reconcile those totals after every migration rehearsal using a stable ID on every record.</p>
<h3 class="imp-q">How long does donor data clean-up take?</h3>
<p>It depends on volume and how long the data has gone without care. Starting several months before the migration lets staff review duplicates properly instead of rushing.</p>
                <div class="imp-ts-final"><p class="imp-np-cta">Need a hand with a messy donor database? <a target="_blank" rel="noopener" href="https://calendar.app.google/HP3LiuNFisCt6xLo6">Book a free call</a>.</p><div class="imp-row"><a class="imp-b1" href="https://calendar.app.google/HP3LiuNFisCt6xLo6" target="_blank" rel="noopener">Book a free 45-minute call <svg width="14" height="14" viewBox="0 0 448 512" aria-hidden="true" fill="currentColor"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg></a><a class="imp-b2" href="/services/salesforce-nonprofit.html">Salesforce for nonprofits</a></div></div>
                <div class="imp-ts-related"><h2>Keep reading</h2><ul><li><a href="/blog/npsp-to-nonprofit-cloud-data-mapping.html">NPSP to Nonprofit Cloud Data Mapping, Object by Object</a></li><li><a href="/blog/choosing-a-nonprofit-salesforce-consultant.html">How to Choose a Nonprofit Salesforce Consultant</a></li><li><a href="/blog/npsp-vs-nonprofit-cloud.html">NPSP vs Nonprofit Cloud: What Actually Changes in 2026</a></li></ul></div>
            </article>
            <div class="imp-mt-16 imp-pt-8 imp-border-t imp-border-slate-200">
                <a href="/blog.html" class="imp-inline-flex imp-items-center imp-gap-2 imp-text-brand-600 imp-font-bold imp-hover:underline">
                    <svg class="imp-svgi" aria-hidden="true"><use href="#i-arrow-left" /></svg> Return to All Insights
                </a>
            </div>
        </div>
    </section>
</div>
