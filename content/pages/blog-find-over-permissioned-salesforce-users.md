---
title: Finding Over-Permissioned Salesforce Users
slug: blog-find-over-permissioned-salesforce-users
url: /blog/find-over-permissioned-salesforce-users.html
order: 50
description: Permission drift accumulates silently in every mature Salesforce org. A five-step review for finding it yourself, before a compliance audit does it for you.
metaTitle: Finding Over-Permissioned Salesforce Users | My Website
metaDescription: "A practical review for finding over-permissioned Salesforce users before an audit does: who to check first, and how to compare access with role."
focusKeyword: over-permissioned Salesforce users
stylesheet: /assets/css/imported/blog-find-over-permissioned-salesforce-users.css
hideCta: true
scripts:
  - src: "/assets/js/imported/blog-find-over-permissioned-salesforce-users/inline-1.js"
    head: true
    module: false
    nomodule: false
    defer: false
    async: false
  - src: "/assets/js/imported/blog-find-over-permissioned-salesforce-users/ts-analytics.js"
    head: true
    module: false
    nomodule: false
    defer: true
    async: false
  - src: "/assets/js/imported/blog-find-over-permissioned-salesforce-users/inline-2.js"
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
                <span class="imp-w-2 imp-h-2 imp-rounded-full imp-bg-brand-400"></span> Security Review</div>
            <h1 class="imp-text-3xl imp-md:text-5xl imp-font-extrabold imp-text-white imp-mb-6 imp-leading-tight">Finding Over-Permissioned Users Before an Audit Does</h1>
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
            <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_800,f_auto,q_auto/v1789469067/wsw_4.1_aum0uo.png" alt="Reviewing Salesforce users whose effective access has drifted beyond what their role requires" width="800" height="384" fetchpriority="high" class="imp-w-full imp-h-64 imp-md:h-96 imp-object-cover imp-rounded-xl imp-shadow-lg imp-mb-10">
            <article>
                <p class="imp-text-xl imp-text-slate-600 imp-font-medium imp-mb-8">
                    A practical process for finding drift in a mature org, before it finds you.
                </p>
                <div class="imp-border-l-4 imp-border-brand-500 imp-bg-brand-50 imp-p-5 imp-rounded-r-lg imp-mb-8">
                    <p class="imp-mb-0 imp-text-brand-900"><strong>Short answer:</strong> Over-permissioned users accumulate silently because finding one requires the same investigation as answering any single access question. A practical review checks every user against what their role should require, starting with the users most likely to have drifted: long-tenured staff, anyone who has changed roles internally, and anyone with a permission set assigned for a project that has since ended.</p>
                </div>
                <h2 id="normal-state">Why is over-permissioning the normal state, not the exception?</h2>
                <p>
                    Nobody sets out to over-permission a user. It happens through a sequence of individually reasonable decisions.
                </p>
                <p>
                    A permission set gets assigned to cover a one-time need, a migration, a temporary project, a single report someone needed once. The need ends. The permission set assignment does not get revisited, because revisiting it requires someone to notice, and there is no natural moment where that noticing happens.
                </p>
                <p>
                    Someone changes roles internally. Their new role's permission sets get added. Their old role's permission sets are not always removed, because the removal is a separate, easy-to-forget step from the addition, and nothing in Salesforce prompts for it.
                </p>
                <p>
                    A permission set group gets built for a specific team, then reused for a different team with different needs because it was close enough. The parts of it that do not quite fit the second team's needs are excess, granted to everyone in the group.
                </p>
                <p>
                    Three years into this pattern, a mature org commonly has permission sets numbering in the dozens or more, many with overlapping or unclear purposes, for reasons nobody currently on the team was present for.
                </p>
                <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_800,f_auto,q_auto/v1789469065/wsw_4.2_xbiiqb.png" alt="A user's effective access compared against what their current role actually requires" width="800" height="450" loading="lazy" class="imp-zoom-image imp-w-full imp-rounded-xl imp-shadow-lg imp-mb-4">
                <p class="imp-text-sm imp-text-slate-500 imp-italic">Drift is only visible when effective access and role requirement sit side by side.</p>
                <h2 id="undetected">Why does it stay undetected?</h2>
                <p>
                    The reason over-permissioning survives is the same reason <a href="/blog/why-salesforce-access-questions-take-so-long.html">any single access question takes thirty minutes to answer</a>: there is no screen that shows a user's actual effective access against what their role should require. Most organisations discover over-permissioning one of two ways: an incident that forces an investigation, or a compliance audit that asks the question directly and gets an uncomfortable answer.
                </p>
                <p>Both are late discovery. The goal is to move the discovery earlier.</p>
                <h2 id="process">What does a practical review process look like?</h2>
                <h3 id="step-1">Step 1: prioritise, do not attempt everyone at once</h3>
                <p>
                    A full review of every user against every object is the correct end state, but attempting it as a first pass is how reviews stall. Prioritise by where drift is statistically most likely.
                </p>
                <ul>
                    <li><strong>Long-tenured users.</strong> Time is the primary driver of accumulation.</li>
                    <li><strong>Anyone who has changed role or team internally.</strong> This is the single highest-yield group to check.</li>
                    <li><strong>Users assigned any permission set tied to a named, time-bound project.</strong> If the project has ended, check whether the assignment was ever revisited.</li>
                    <li><strong>Admin or elevated profiles assigned to non-admin staff.</strong> Sometimes assigned temporarily and left in place afterward.</li>
                </ul>
                <h3 id="step-2">Step 2: check effective access against role requirement</h3>
                <p>
                    For each prioritised user, the review question is not "what can they access" in isolation, but "does what they can access match what their current role requires." This requires a clear statement of what the role should require, and a complete view of what the user can actually reach, across object, field and record level.
                </p>
                <h3 id="step-3">Step 3: distinguish unused from unintended</h3>
                <p>
                    A user with edit access to a field they never edit is unused capacity, low risk. A user with access to records outside their territory, or to compensation or personal data outside their function, is unintended access. That distinction should drive prioritisation of the findings.
                </p>
                <h3 id="step-4">Step 4: fix at the source, not the symptom</h3>
                <p>
                    When excess access is confirmed, the fix should target the specific rule responsible, the permission set, the profile setting, or the sharing rule, rather than a workaround layered on top. Identifying that rule is <a href="/blog/which-rule-granted-salesforce-access.html">a trace of its own</a>.
                </p>
                <h3 id="step-5">Step 5: document what you found, and what you decided</h3>
                <p>
                    Keep a record of what was checked, what was found, and what action was taken, including leaving something unchanged. This is the record that turns a review into something you can show happened.
                </p>
                <h2 id="at-scale">What makes this process tractable at scale?</h2>
                <p>
                    The blocker to running this process regularly is the cost of reconstructing one user's effective access. If that reconstruction takes thirty minutes, reviewing fifty prioritised users is over twenty hours, which is why reviews get sampled rather than completed.
                </p>
                <p>
                    <a href="/products/who-sees-what.html">Who Sees What</a> removes that cost specifically. For any user, it resolves object, field and record access across every granting rule in seconds, and names the specific rule behind each grant, which is what step 4 requires to act on a finding rather than just note it.
                </p>
                <p class="imp-text-sm imp-text-slate-500 imp-italic">Who Sees What is built and maintained by TwinStack Solutions, a Salesforce partner. Questions about setup: <a href="mailto:info@twinstack.net">info@twinstack.net</a></p>
                <div class="imp-bg-brand-50 imp-border imp-border-brand-200 imp-rounded-xl imp-p-6 imp-mt-12">
                    <p class="imp-font-bold imp-text-brand-900 imp-mb-2">Start the review with the users most likely to have drifted.</p>
                    <p class="imp-text-brand-800 imp-mb-4">Resolve any user's effective access in seconds, with the rule behind each grant named. Free, read-only and native.</p>
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
