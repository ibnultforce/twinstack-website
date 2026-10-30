---
title: Salesforce Grantmaking in Nonprofit Cloud
description: "How Nonprofit Cloud for Grantmaking runs a grant cycle: funding opportunities, applications, reviews, awards, disbursements and grantee progress reporting."
metaTitle: Salesforce Grantmaking in Nonprofit Cloud | My Website
metaDescription: See how Salesforce grantmaking in Nonprofit Cloud runs a grant cycle, from budgets and applications to awards, disbursements and grantee reporting.
focusKeyword: Salesforce grantmaking
slug: blog-salesforce-grantmaking-nonprofit-cloud
url: /blog/salesforce-grantmaking-nonprofit-cloud.html
order: 50
stylesheet: /assets/css/imported/blog-salesforce-grantmaking-nonprofit-cloud.css
hideCta: true
scripts:
  - src: "/assets/js/imported/blog-salesforce-grantmaking-nonprofit-cloud/inline-1.js"
    head: true
    module: false
    nomodule: false
    defer: false
    async: false
  - src: "/assets/js/imported/blog-salesforce-grantmaking-nonprofit-cloud/ts-analytics.js"
    head: true
    module: false
    nomodule: false
    defer: true
    async: false
  - src: "/assets/js/imported/blog-salesforce-grantmaking-nonprofit-cloud/inline-2.js"
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
            <h1 class="imp-text-3xl imp-md:text-5xl imp-font-extrabold imp-text-white imp-mb-6 imp-leading-tight">Salesforce Grantmaking: How Nonprofit Cloud Handles Grants</h1>
            <div class="imp-flex imp-items-center imp-justify-center imp-gap-6 imp-text-slate-400 imp-text-sm">
                <div><svg class="imp-svgi imp-mr-2" aria-hidden="true"><use href="#i-calendar" /></svg>15 October 2026</div>
                <div><svg class="imp-svgi imp-mr-2" aria-hidden="true"><use href="#i-user" /></svg>By <a href="https://www.linkedin.com/in/toukir-ahmed368" target="_blank" rel="noopener author" style="color:inherit;text-decoration:underline;text-underline-offset:3px">Toukir Ahmed</a>, Business Development Executive · 4 min read</div>
            </div>
            <div class="imp-ts-get-app-wrap"><a href="/services/salesforce-nonprofit.html" class="imp-ts-get-app" aria-label="See TwinStack's Salesforce services for nonprofits">Salesforce for nonprofits <svg viewBox="0 0 448 512" aria-hidden="true" fill="currentColor"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg></a></div>
        </div>
    </header>
    <section class="imp-py-20 imp-bg-white imp-relative">
        <div class="imp-max-w-3xl imp-mx-auto imp-px-6">
            <a href="/blog.html" class="imp-inline-flex imp-items-center imp-gap-2 imp-text-brand-600 imp-font-semibold imp-mb-8 imp-hover:underline">
                <svg class="imp-svgi" aria-hidden="true"><use href="#i-arrow-left" /></svg> Back to Blog
            </a>
            <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_800,f_auto,q_auto/v1792143940/07-thumb-salesforce-grantmaking-nonprofit-cloud_noxdcg.jpg" alt="Grant document with a gold seal above a path of application, review, award and approval icons, titled Salesforce Grantmaking: How Nonprofit Cloud Handles Grants" width="1200" height="675" fetchpriority="high" class="imp-ts-hero-img imp-rounded-xl imp-shadow-lg imp-mb-10">
            <article>
                <p class="imp-text-xl imp-text-slate-600 imp-font-medium imp-mb-8"><strong>Short answer:</strong> Nonprofit Cloud for Grantmaking is Salesforce's product for organisations that give grants, such as foundations, community funds and government grant programmes. It covers the whole cycle in standard objects: Budgets and Funding Opportunities, Individual Applications, Application Reviews with scoring, Application Decisions, Funding Awards, Funding Disbursements, and Funding Award Requirements such as progress reports. Grantees and external reviewers can work through an Experience Cloud portal. It is part of the Max edition, listed at $285 per user per month for nonprofits.</p>
                <h2 id="giving-grants-or-receiving-them">Giving grants or receiving them?</h2>
<p>The word "grants" covers two different jobs, and they need different tools:</p>
<ul>
<li><strong>Giving grants</strong> (you are the funder): you publish opportunities, collect applications, review, award and pay. This is what Nonprofit Cloud for Grantmaking is for.</li>
<li><strong>Receiving grants</strong> (you are the grantee): you track the funders you apply to, the money you are promised and the reports you owe. That is fundraising, and it lives on the fundraising side of Nonprofit Cloud or NPSP.</li>
</ul>
<p>If you only receive grants, you do not need the grantmaking product.</p>
<h2 id="the-grant-lifecycle-in-salesforce">The grant lifecycle in Salesforce</h2>
<p>Salesforce describes four stages, each with its own objects.</p>
<figure class="imp-ts-fig"><a href="https://res.cloudinary.com/du42kbmmn/image/upload/f_auto,q_auto/v1792143939/07-body-salesforce-grantmaking-nonprofit-cloud_a0v5un.jpg" target="_blank" rel="noopener" aria-label="Open the full-size image"><img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_1400,f_auto,q_auto/v1792143939/07-body-salesforce-grantmaking-nonprofit-cloud_a0v5un.jpg" alt="Four stages of the Salesforce grantmaking lifecycle with the standard objects used in each stage" width="1200" height="675" loading="lazy"></a><figcaption>The four stages of the grantmaking lifecycle and the objects behind each one. <span>Click to enlarge.</span></figcaption></figure>
<h3>1. Administrative: budgets and opportunities</h3>
<ul>
<li><strong>Program</strong> organises the initiative.</li>
<li><strong>Budget</strong> tracks how much is available, in money or in kind, by category and period.</li>
<li><strong>Funding Opportunity</strong> defines a specific grant offering: description, instructions, deadlines and dates. Opportunities can be public or invitation-only.</li>
</ul>
<h3>2. Pre-award: applications</h3>
<ul>
<li><strong>Individual Application</strong> tracks each application from start to finish. Application forms can include budget tables and file uploads.</li>
</ul>
<h3>3. Award: review and decide</h3>
<ul>
<li><strong>Application Review</strong> captures reviewer feedback and scores. Scores are stored separately, so they can be rolled up and compared across reviewers.</li>
<li><strong>Application Decision</strong> records whether an application is awarded or declined.</li>
<li><strong>Funding Award</strong> tracks the grant, its amount and budget, and is the source of truth for the life of the grant.</li>
<li><strong>Funding Disbursement</strong> records each payment under the award.</li>
</ul>
<h3>4. Post-award: grantee management</h3>
<ul>
<li><strong>Funding Award Requirement</strong> defines what the grantee must do, such as interim reports, and can be tied to disbursements so a payment waits until a report arrives.</li>
<li><strong>Funding Award Amendment</strong> tracks changes to amount, scope or timeline.</li>
</ul>
<h2 id="portals-for-applicants-grantees-and-reviewers">Portals for applicants, grantees and reviewers</h2>
<p>Applicants and grantees typically use an Experience Cloud portal to apply, track their grants, see scheduled payments, submit reports and request amendments. External reviewers can use the same portal with permissions limited to what they need. The Max edition includes 100 Customer Community Plus logins a month for applicants. If you expect more, read our <a href="/blog/experience-cloud-pricing-login-vs-member.html">Experience Cloud pricing guide</a>.</p>
<h2 id="what-it-does-not-do-on-its-own">What it does not do on its own</h2>
<ul>
<li><strong>Accounting.</strong> There is no built-in accounting module. Payments are usually exported or integrated with a finance system.</li>
<li><strong>Due diligence data.</strong> Checks against external registers usually need separate subscriptions or integrations.</li>
<li><strong>Downloading a full application with attachments</strong> as a single document may need custom work.</li>
</ul>
<p>Plan these into the project rather than discovering them after go-live.</p>
<h2 id="who-it-suits">Who it suits</h2>
<div class="imp-article-table-wrap"><table><thead><tr><th>Funder</th><th>Likely fit</th></tr></thead><tbody><tr><td>A few grant rounds a year, simple forms, small team</td><td>A lighter grants tool or a simple Salesforce build may be enough</td></tr><tr><td>Several programmes, reviewer panels, staged payments, required reports</td><td>A strong fit</td></tr><tr><td>Already running fundraising or programmes on Nonprofit Cloud</td><td>A strong fit, because grantmaking shares the same platform</td></tr></tbody></table></div>
<h2 id="what-it-costs">What it costs</h2>
<p>Nonprofit Cloud Max, which includes grantmaking, lists at $285 per user per month for nonprofits, as verified on 29 September 2026. Only staff who manage grants need full licences. Applicants and external reviewers use portal licences. The build is separate: configuring programmes, application forms, review rubrics, award automation and the portal. Price it with our <a href="/cost-estimator.html">cost estimator</a>, and see our <a href="/blog/salesforce-nonprofit-pricing-power-of-us.html">nonprofit pricing guide</a> for the licence side.</p>
                <h2 id="faq">Frequently asked questions</h2>
<h3 class="imp-q">What is Nonprofit Cloud for Grantmaking?</h3>
<p>It is Salesforce's grant management product for funders. It manages funding opportunities, applications, reviews, awards, disbursements and grantee requirements in standard Salesforce objects.</p>
<h3 class="imp-q">Is Salesforce grantmaking for nonprofits that receive grants?</h3>
<p>No. It is designed for organisations that give grants. Nonprofits that receive grants track them on the fundraising side of Nonprofit Cloud or NPSP.</p>
<h3 class="imp-q">How much does Salesforce grantmaking cost?</h3>
<p>Grantmaking is part of Nonprofit Cloud Max, listed at $285 per user per month for nonprofits as of 29 September 2026. Portal licences for applicants and implementation are additional.</p>
<h3 class="imp-q">What objects does Salesforce grantmaking use?</h3>
<p>The main objects are Budget, Funding Opportunity, Individual Application, Application Review, Application Decision, Funding Award, Funding Disbursement, Funding Award Requirement and Funding Award Amendment.</p>
<h3 class="imp-q">Can grantees submit reports through a portal?</h3>
<p>Yes. Grantees can use an Experience Cloud portal to track their grants and payments, submit progress reports and request amendments.</p>
<h3 class="imp-q">Does Salesforce grantmaking include accounting?</h3>
<p>No. There is no built-in accounting module, so disbursements are usually integrated with or exported to a finance system.</p>
                <p class="imp-ts-fine">Prices in this article are Salesforce list prices in US dollars, per user per month billed annually unless stated, as verified on 29 September 2026. Salesforce changes pricing, so confirm with Salesforce before you sign.</p>
                <div class="imp-ts-final"><p class="imp-np-cta">Running a grant programme on spreadsheets? <a target="_blank" rel="noopener" href="https://calendar.app.google/HP3LiuNFisCt6xLo6">Book a free call</a> and we will map your cycle onto Salesforce.</p><div class="imp-row"><a class="imp-b1" href="https://calendar.app.google/HP3LiuNFisCt6xLo6" target="_blank" rel="noopener">Book a free 45-minute call <svg width="14" height="14" viewBox="0 0 448 512" aria-hidden="true" fill="currentColor"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg></a><a class="imp-b2" href="/services/salesforce-nonprofit.html">Salesforce for nonprofits</a></div></div>
                <div class="imp-ts-related"><h2>Keep reading</h2><ul><li><a href="/blog/how-to-apply-salesforce-power-of-us.html">How to Apply for Salesforce Power of Us, Step by Step</a></li><li><a href="/blog/nonprofit-donor-data-cleanup-salesforce.html">Donor Data Clean-Up Before a Salesforce Migration</a></li><li><a href="/blog/choosing-a-nonprofit-salesforce-consultant.html">How to Choose a Nonprofit Salesforce Consultant</a></li></ul></div>
            </article>
            <div class="imp-mt-16 imp-pt-8 imp-border-t imp-border-slate-200">
                <a href="/blog.html" class="imp-inline-flex imp-items-center imp-gap-2 imp-text-brand-600 imp-font-bold imp-hover:underline">
                    <svg class="imp-svgi" aria-hidden="true"><use href="#i-arrow-left" /></svg> Return to All Insights
                </a>
            </div>
        </div>
    </section>
</div>
