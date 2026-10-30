---
title: NPSP to Nonprofit Cloud Data Mapping
slug: blog-npsp-to-nonprofit-cloud-data-mapping
url: /blog/npsp-to-nonprofit-cloud-data-mapping.html
order: 50
description: "How NPSP objects map to Nonprofit Cloud: households to Party Relationship Groups, Opportunities to Gift Transactions, and the load order that holds up."
metaTitle: NPSP to Nonprofit Cloud Data Mapping Guide | My Website
metaDescription: "NPSP to Nonprofit Cloud data mapping: how households, pledges and funds translate object by object, with a load order and ID crosswalk for the migration."
focusKeyword: Nonprofit Cloud data mapping
stylesheet: /assets/css/imported/blog-npsp-to-nonprofit-cloud-data-mapping.css
hideCta: true
scripts:
  - src: "/assets/js/imported/blog-npsp-to-nonprofit-cloud-data-mapping/inline-1.js"
    head: true
    module: false
    nomodule: false
    defer: false
    async: false
  - src: "/assets/js/imported/blog-npsp-to-nonprofit-cloud-data-mapping/ts-analytics.js"
    head: true
    module: false
    nomodule: false
    defer: true
    async: false
  - src: "/assets/js/imported/blog-npsp-to-nonprofit-cloud-data-mapping/inline-2.js"
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
            <h1 class="imp-text-3xl imp-md:text-5xl imp-font-extrabold imp-text-white imp-mb-6 imp-leading-tight">NPSP to Nonprofit Cloud Data Mapping, Object by Object</h1>
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
            <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_800,f_auto,q_auto/v1792143936/04-thumb-npsp-to-nonprofit-cloud-data-mapping_hd6rzk.jpg" alt="Data mapping lines connecting NPSP Contact, Account, Opportunity, Campaign and Recurring Donation to Nonprofit Cloud Person Account, Account, Gift Transaction, Campaign and Gift Commitment" width="1200" height="675" fetchpriority="high" class="imp-ts-hero-img imp-rounded-xl imp-shadow-lg imp-mb-10">
            <article>
                <p class="imp-text-xl imp-text-slate-600 imp-font-medium imp-mb-8"><strong>Short answer:</strong> most NPSP records have a Nonprofit Cloud home, but not the same shape. Contacts become Person Accounts, Household Accounts become Party Relationship Groups, Opportunities become Gift Transactions, Recurring Donations become Gift Commitments with Gift Commitment Schedules, and GAU Allocations become Gift Transaction Designations. Load in dependency order, people and households first and gifts last, and keep a crosswalk of every old and new record ID so you can reconcile totals and answer questions after go-live.</p>
                <h2 id="why-mapping-is-the-riskiest-part-of-the-migration">Why mapping is the riskiest part of the migration</h2>
<p>Nonprofit Cloud is not NPSP with new labels. The objects are designed differently, so one NPSP record can become two Nonprofit Cloud records, and some NPSP fields have no direct equivalent. Most migration problems trace back to a mapping decision made quickly in week two and discovered in week twelve. Spend the time here.</p>
<h2 id="the-core-mapping-table">The core mapping table</h2>
<div class="imp-article-table-wrap"><table><thead><tr><th>NPSP</th><th>Nonprofit Cloud</th><th>Notes</th></tr></thead><tbody><tr><td>Contact (individual)</td><td>Person Account</td><td>Each individual becomes an account and a contact in one record</td></tr><tr><td>Household Account</td><td>Party Relationship Group</td><td>Groups people into a household</td></tr><tr><td>Organisation Account</td><td>Business Account</td><td>Largely unchanged</td></tr><tr><td>Affiliations</td><td>Account Contact Relationships</td><td>Managed through the Actionable Relationship Center (ARC)</td></tr><tr><td>Relationships</td><td>Relationship records in ARC</td><td>Re-create reciprocal relationships deliberately</td></tr><tr><td>Opportunity (one-off donation)</td><td>Gift Transaction</td><td>The gift itself</td></tr><tr><td>Opportunity with Payments (pledge)</td><td>Gift Commitment plus Gift Transactions</td><td>Each payment becomes its own transaction</td></tr><tr><td>Recurring Donation</td><td>Gift Commitment and Gift Commitment Schedule</td><td>The schedule creates expected transactions</td></tr><tr><td>General Accounting Unit</td><td>Gift Designation</td><td>Your funds</td></tr><tr><td>GAU Allocation</td><td>Gift Transaction Designation</td><td>Splits a gift across funds</td></tr><tr><td>Partial and account soft credits</td><td>Gift Soft Credit</td><td>Credit to someone other than the donor</td></tr><tr><td>Tribute and honoree fields</td><td>Gift Tribute</td><td>In honour or memory gifts</td></tr><tr><td>Campaign</td><td>Campaign</td><td>Outreach Source Codes are available for appeal tracking</td></tr><tr><td>PMM Program</td><td>Program</td><td>Programme Management Module package to native</td></tr><tr><td>PMM Service</td><td>Benefit</td><td>What participants receive</td></tr><tr><td>PMM Program Engagement</td><td>Program Enrollment</td><td>A participant in a programme</td></tr><tr><td>PMM Service Schedule and Session</td><td>Benefit Schedule and Benefit Session</td><td>Planned delivery</td></tr><tr><td>PMM Service Delivery</td><td>Benefit Disbursement</td><td>What was actually delivered</td></tr></tbody></table></div>
<p>Object names are taken from Salesforce's Nonprofit Cloud documentation and Trailhead. Your org may also have custom objects, which need their own mapping decisions.</p>
<h2 id="the-three-decisions-that-need-the-most-thought">The three decisions that need the most thought</h2>
<h3>1. Households</h3>
<p>In NPSP, a household is an Account that Contacts belong to, and many reports, greetings and rollups hang off it. In Nonprofit Cloud, people are Person Accounts and the household is a Party Relationship Group that links them. Decide early how you will name households, which person is primary, and how household-level giving totals will be reported. Test this on twenty real households before you load thousands.</p>
<p>Person Accounts also change how access works, because one record now carries both account and contact permissions. Our post on <a href="/blog/salesforce-person-accounts-access.html">Person Accounts and access</a> explains what to check.</p>
<h3>2. Pledges and recurring gifts</h3>
<p>An NPSP pledge is usually an Opportunity with several Payments. In Nonprofit Cloud the promise and the payments are separate: a Gift Commitment holds the promise, and each payment is a Gift Transaction. Recurring Donations follow the same pattern, with a Gift Commitment Schedule generating expected transactions that start as Unpaid. Decide how far back to recreate schedules, and how to treat lapsed or closed recurring donations.</p>
<h3>3. Fund designations</h3>
<p>GAU Allocations become Gift Transaction Designations against Gift Designations. Check every gift's allocations add up to the gift amount before migrating. Nonprofit Cloud applies a default designation when none is set, so unallocated history can quietly land in your general fund.</p>
<h2 id="a-load-order-that-holds-up">A load order that holds up</h2>
<figure class="imp-ts-fig"><a href="https://res.cloudinary.com/du42kbmmn/image/upload/f_auto,q_auto/v1792143936/04-body-npsp-to-nonprofit-cloud-data-mapping_yjmmxo.jpg" target="_blank" rel="noopener" aria-label="Open the full-size image"><img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_1400,f_auto,q_auto/v1792143936/04-body-npsp-to-nonprofit-cloud-data-mapping_yjmmxo.jpg" alt="Nine-step load order for migrating NPSP data to Nonprofit Cloud, grouped into foundations, people, giving and programmes" width="1200" height="675" loading="lazy"></a><figcaption>Load in dependency order and reference earlier loads by External ID. <span>Click to enlarge.</span></figcaption></figure>
<ol>
<li><strong>Gift Designations</strong> (your funds), with an External ID holding the old GAU ID.</li>
<li><strong>Business Accounts</strong> (organisations), with the old Account ID.</li>
<li><strong>Person Accounts</strong>, with the old Contact ID.</li>
<li><strong>Party Relationship Groups and memberships</strong> for households.</li>
<li><strong>Relationships and affiliations.</strong></li>
<li><strong>Gift Commitments and schedules</strong>, for pledges and recurring gifts.</li>
<li><strong>Gift Transactions</strong>, linked to donors and, where relevant, to commitments.</li>
<li><strong>Gift Transaction Designations, Soft Credits and Tributes.</strong></li>
<li><strong>Programmes, Benefits, Enrollments and Disbursements</strong>, if you are moving PMM data.</li>
</ol>
<p>Every load references the previous ones by External ID rather than by Salesforce record ID. That way you never have to export, VLOOKUP and re-import IDs between passes. Our free <a href="/products/smart-lookup-data-loader.html">Smart Lookup Data Loader</a> resolves lookups by name or code during the import, and our guide to <a href="/blog/salesforce-upsert-csv-explained.html">upserts and match keys</a> explains the approach.</p>
<h2 id="keep-a-crosswalk-and-reconcile-every-rehearsal">Keep a crosswalk and reconcile every rehearsal</h2>
<p>Store the old NPSP record ID on every migrated record. After each rehearsal, compare:</p>
<ul>
<li>the count of records by type, old against new</li>
<li>total gift value overall and by year, to the penny</li>
<li>total value by designation</li>
<li>the number of households and people in them</li>
</ul>
<p>If a total is off, the crosswalk shows exactly which records differ. Plan for several rehearsals before cut-over, each in a fresh sandbox.</p>
                <h2 id="faq">Frequently asked questions</h2>
<h3 class="imp-q">How do NPSP households map to Nonprofit Cloud?</h3>
<p>Individuals become Person Accounts, and the NPSP Household Account becomes a Party Relationship Group that links household members. Naming, primary member and household-level reporting need to be redesigned rather than copied.</p>
<h3 class="imp-q">What happens to Opportunities when moving to Nonprofit Cloud?</h3>
<p>Donation Opportunities become Gift Transactions. Pledges with several Payments become a Gift Commitment plus one Gift Transaction per payment.</p>
<h3 class="imp-q">How do Recurring Donations map to Nonprofit Cloud?</h3>
<p>Recurring Donations become Gift Commitments with a Gift Commitment Schedule, which creates expected Gift Transactions with an Unpaid status until payment arrives.</p>
<h3 class="imp-q">What replaces GAU Allocations in Nonprofit Cloud?</h3>
<p>General Accounting Units become Gift Designations, and allocations become Gift Transaction Designations that split a gift across funds.</p>
<h3 class="imp-q">What order should data be loaded into Nonprofit Cloud?</h3>
<p>Designations and organisations first, then Person Accounts, households and relationships, then commitments, then gift transactions, then designations, soft credits and tributes, and finally programme data.</p>
<h3 class="imp-q">How do you check a migration is complete?</h3>
<p>Keep the old record ID on every new record and reconcile record counts, total gift value by year and total value by designation after every rehearsal.</p>
                <div class="imp-ts-final"><p class="imp-np-cta">Mapping a complex org? <a target="_blank" rel="noopener" href="https://calendar.app.google/HP3LiuNFisCt6xLo6">Book a free call</a> and bring your object list.</p><div class="imp-row"><a class="imp-b1" href="https://calendar.app.google/HP3LiuNFisCt6xLo6" target="_blank" rel="noopener">Book a free 45-minute call <svg width="14" height="14" viewBox="0 0 448 512" aria-hidden="true" fill="currentColor"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg></a><a class="imp-b2" href="/services/salesforce-nonprofit.html">Salesforce for nonprofits</a></div></div>
                <div class="imp-ts-related"><h2>Keep reading</h2><ul><li><a href="/blog/nonprofit-cloud-gift-entry.html">Gift Entry in Nonprofit Cloud: Batches, Matching and Pledges</a></li><li><a href="/blog/nonprofit-cloud-program-management.html">Program Management in Nonprofit Cloud: How It Works</a></li><li><a href="/blog/salesforce-grantmaking-nonprofit-cloud.html">Salesforce Grantmaking: How Nonprofit Cloud Handles Grants</a></li></ul></div>
            </article>
            <div class="imp-mt-16 imp-pt-8 imp-border-t imp-border-slate-200">
                <a href="/blog.html" class="imp-inline-flex imp-items-center imp-gap-2 imp-text-brand-600 imp-font-bold imp-hover:underline">
                    <svg class="imp-svgi" aria-hidden="true"><use href="#i-arrow-left" /></svg> Return to All Insights
                </a>
            </div>
        </div>
    </section>
</div>
