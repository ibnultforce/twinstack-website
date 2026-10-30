---
title: How to Run a Salesforce Access Review
slug: blog-how-to-run-a-salesforce-access-review
url: /blog/how-to-run-a-salesforce-access-review.html
order: 50
description: A seven-step process for a Salesforce access review that covers the whole user base, not a sample, and the one step that decides whether that's possible.
metaTitle: "Salesforce Access Review: 7 Steps, Every User | My Website"
metaDescription: "Run a Salesforce access review across every user, not a sample: scope it, define correct access first, then resolve each user's effective access."
focusKeyword: Salesforce access review
stylesheet: /assets/css/imported/blog-how-to-run-a-salesforce-access-review.css
hideCta: true
scripts:
  - src: "/assets/js/imported/blog-how-to-run-a-salesforce-access-review/inline-1.js"
    head: true
    module: false
    nomodule: false
    defer: false
    async: false
  - src: "/assets/js/imported/blog-how-to-run-a-salesforce-access-review/ts-analytics.js"
    head: true
    module: false
    nomodule: false
    defer: true
    async: false
  - src: "/assets/js/imported/blog-how-to-run-a-salesforce-access-review/inline-2.js"
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
                <span class="imp-w-2 imp-h-2 imp-rounded-full imp-bg-brand-400"></span> How-To Guide</div>
            <h1 class="imp-text-3xl imp-md:text-5xl imp-font-extrabold imp-text-white imp-mb-6 imp-leading-tight">How to Run a Salesforce Access Review Without Losing a Day</h1>
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
            <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_800,f_auto,q_auto/v1789469034/wsw_6_ezoqgy.png" alt="A structured Salesforce access review resolving effective access for every user in scope" width="800" height="384" fetchpriority="high" class="imp-w-full imp-h-64 imp-md:h-96 imp-object-cover imp-rounded-xl imp-shadow-lg imp-mb-10">
            <article>
                <p class="imp-text-xl imp-text-slate-600 imp-font-medium imp-mb-8">
                    Seven steps, and one of them is the reason reviews normally get sampled instead of completed.
                </p>
                <div class="imp-border-l-4 imp-border-brand-500 imp-bg-brand-50 imp-p-5 imp-rounded-r-lg imp-mb-8">
                    <p class="imp-mb-0 imp-text-brand-900"><strong>Short answer:</strong> Scope the review to a specific trigger, define what correct access looks like before checking anyone, check every user against that definition rather than sampling, and record the specific rule behind every finding. The step that normally takes a day is reconstructing each person's effective access by hand; removing that step is what makes the rest realistic on a schedule.</p>
                </div>
                <h2 id="why-sampled">Why do access reviews get sampled instead of completed?</h2>
                <p>
                    An access review, done properly, confirms that every user's actual access matches what their role requires. Done partially, it checks a handful of users chosen because they seem likely to be problems, and extrapolates from there.
                </p>
                <p>
                    The reason reviews default to the partial version is cost, not laziness. Reconstructing one user's effective access by hand commonly <a href="/blog/why-salesforce-access-questions-take-so-long.html">takes thirty minutes or more</a>, and a review that has to do that for every user in scope becomes a day or more of work before a single finding is logged.
                </p>
                <h2 id="step-1">Step 1: define the trigger and the scope</h2>
                <p>
                    A review without a defined trigger tends not to happen at all. Reviews that actually run tend to be tied to a scheduled cadence, a compliance requirement, a specific incident, or a merger or reorg. Decide which one this is, and let it define who and what is in scope, before anything else.
                </p>
                <h2 id="step-2">Step 2: define what correct access looks like, before checking anyone</h2>
                <p>
                    This step gets skipped more often than it should. For each role in scope, write down, even informally, what access that role should have. Without this reference point, every finding becomes a judgement call made in the moment, which makes the review's output inconsistent depending on who happened to review which user.
                </p>
                <h2 id="step-3">Step 3: pull the list of users in scope</h2>
                <p>
                    Pull the actual list from Salesforce, by profile, permission set assignment, or role, depending on how scope was defined in step 1. Working from a list somebody remembers rather than one pulled from the org is a common source of gaps.
                </p>
                <h2 id="step-4">Step 4: resolve full effective access</h2>
                <p>
                    For each user: their profile's object and field permissions, every permission set and permission set group assigned individually, role hierarchy position, sharing rules, and manual shares. All of it, for every object in scope. This is the step that costs the most time under a manual process, and the one that determines whether the rest of this process is realistic on a schedule.
                </p>
                <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_800,f_auto,q_auto/v1789469015/wsw_7.3_bv6dld.png" alt="Effective access resolved for every user in scope, ready to compare against the role definition" width="800" height="450" loading="lazy" class="imp-zoom-image imp-w-full imp-rounded-xl imp-shadow-lg imp-mb-4">
                <p class="imp-text-sm imp-text-slate-500 imp-italic">The step that decides whether a review covers everyone or a sample.</p>
                <h2 id="step-5">Step 5: compare against the definition, and log the outcome</h2>
                <p>
                    Three outcomes: matches, excess access, or missing access. Log all three, not just the problems, so the review can later prove it was comprehensive rather than a search that stopped at the first few issues found.
                </p>
                <h2 id="step-6">Step 6: trace excess access to the specific granting rule before fixing</h2>
                <p>
                    Do not fix based on the symptom. Trace whether excess access comes from the profile, a specific permission set, or a permission set group, because the fix differs materially depending on which one it is. <a href="/blog/which-rule-granted-salesforce-access.html">Tracing the responsible rule</a> is worth doing properly rather than guessing from the symptom.
                </p>
                <h2 id="step-7">Step 7: record the review itself</h2>
                <p>
                    Keep a record of when it ran, what scope, who conducted it, and the outcome for every user, including the ones with no finding. This record is what turns the review into something you can show happened, rather than something you remember happening.
                </p>
                <h2 id="what-changes">What changes if step 4 is not the bottleneck?</h2>
                <p>
                    Every other step here is judgement, and none of it should be automated away. Step 4 is mechanical: correctly reading Salesforce's own permission metadata and presenting it clearly. That is the entire mechanism behind <a href="/products/who-sees-what.html">Who Sees What</a>, which performs step 4 in seconds rather than the manual thirty-plus minutes per user.
                </p>
                <p>
                    That single change determines whether steps 1 through 3 and 5 through 7 happen for your whole user base or for a sample chosen because it seemed like enough.
                </p>
                <p class="imp-text-sm imp-text-slate-500 imp-italic">Who Sees What is built and maintained by TwinStack Solutions, a Salesforce partner. Questions about setup: <a href="mailto:info@twinstack.net">info@twinstack.net</a></p>
                <div class="imp-bg-brand-50 imp-border imp-border-brand-200 imp-rounded-xl imp-p-6 imp-mt-12">
                    <p class="imp-font-bold imp-text-brand-900 imp-mb-2">Run step 4 in seconds instead of a day.</p>
                    <p class="imp-text-brand-800 imp-mb-4">Resolve full effective access for any user, free and read-only, so the rest of the review can cover everyone in scope.</p>
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
