---
slug: blog-salesforce-permission-set-cleanup
url: /blog/salesforce-permission-set-cleanup.html
order: 50
title: "Permission Set Sprawl: Clean Up Without Breaking Access"
description: A permission set that looks redundant can't be safely deleted by name. A five-step process for cleanup without breaking access for users still assigned.
metaTitle: "Salesforce Permission Set Cleanup: 5 Steps | My Website"
metaDescription: Salesforce permission set cleanup starts with who is assigned, not the name. Check what each user would lose, consolidate overlaps, then retire in stages.
focusKeyword: Salesforce permission set cleanup
stylesheet: /assets/css/imported/blog-salesforce-permission-set-cleanup.css
hideCta: true
scripts:
  - src: "/assets/js/imported/blog-salesforce-permission-set-cleanup/inline-1.js"
    head: true
    module: false
    nomodule: false
    defer: false
    async: false
  - src: "/assets/js/imported/blog-salesforce-permission-set-cleanup/ts-analytics.js"
    head: true
    module: false
    nomodule: false
    defer: true
    async: false
  - src: "/assets/js/imported/blog-salesforce-permission-set-cleanup/inline-2.js"
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
                <span class="imp-w-2 imp-h-2 imp-rounded-full imp-bg-brand-400"></span> Admin Playbook</div>
            <h1 class="imp-text-3xl imp-md:text-5xl imp-font-extrabold imp-text-white imp-mb-6 imp-leading-tight">Permission Set Sprawl: Clean Up Without Breaking Access</h1>
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
            <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_800,f_auto,q_auto/v1789469013/wsw_8.1_e5qneo.png" alt="Auditing overlapping Salesforce permission sets before consolidating or retiring them" width="800" height="384" fetchpriority="high" class="imp-w-full imp-h-64 imp-md:h-96 imp-object-cover imp-rounded-xl imp-shadow-lg imp-mb-10">
            <article>
                <p class="imp-text-xl imp-text-slate-600 imp-font-medium imp-mb-8">
                    A permission set that looks redundant cannot be safely deleted based on its name.
                </p>
                <div class="imp-border-l-4 imp-border-brand-500 imp-bg-brand-50 imp-p-5 imp-rounded-r-lg imp-mb-8">
                    <p class="imp-mb-0 imp-text-brand-900"><strong>Short answer:</strong> A permission set that looks redundant or overlapping cannot be safely deleted based on its name or description. It has to be checked against who is currently assigned and what those specific users would lose, because permission sets accumulate faster than they get retired.</p>
                </div>
                <h2 id="how-sprawl-happens">How does permission set sprawl happen?</h2>
                <p>
                    Sprawl accumulates the same way <a href="/blog/find-over-permissioned-salesforce-users.html">over-permissioning does</a>: through individually reasonable decisions with no natural review moment. A permission set gets created for a temporary need and never deleted once the need ends. A permission set gets duplicated with minor variations rather than consolidated, because copying is faster than building something flexible. Permission set groups get built on top of an already sprawling base rather than replacing it.
                </p>
                <p>
                    Three years into this pattern, a mature org commonly has dozens of permission sets with overlapping or unclear purposes, named by people who have since left.
                </p>
                <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_800,f_auto,q_auto/v1789468978/wsw_8.2_je6wbm.png" alt="Dozens of overlapping permission sets accumulated over years, with unclear ownership" width="800" height="450" loading="lazy" class="imp-zoom-image imp-w-full imp-rounded-xl imp-shadow-lg imp-mb-4">
                <p class="imp-text-sm imp-text-slate-500 imp-italic">The state a mature org's permission sets reach without a regular retirement process.</p>
                <h2 id="why-not-untidy">Why is sprawl not merely untidy?</h2>
                <p>
                    Every additional permission set is another place a grant can exist that nobody remembers checking. When investigating an access question, a longer list means a longer investigation. When running a review, more permission sets mean more surface area that has to be confirmed as still correct.
                </p>
                <h2 id="why-name-unsafe">Why is deleting based on the name unsafe?</h2>
                <p>
                    A permission set named "Legacy - Old Sales Process" sounds safe to delete. Whether it actually is depends entirely on whether anyone is still assigned to it and what they would lose, which the name does not tell you. Permission sets frequently outlive the accuracy of their own names.
                </p>
                <h2 id="cleanup-process">What does a safer cleanup process look like?</h2>
                <h3 id="step-1">Step 1: inventory what exists</h3>
                <p>List every permission set and permission set group, with last-modified date and, if available, last assignment date.</p>
                <h3 id="step-2">Step 2: for each candidate, find who is currently assigned</h3>
                <p>If the list is empty, it is safe to remove immediately. If not, every assigned user needs individual consideration.</p>
                <h3 id="step-3">Step 3: for each assigned user, confirm what they would lose</h3>
                <p>
                    This determines whether a permission set is truly redundant or only appears that way. If a user's other permission sets already grant everything the candidate grants, removal changes nothing for them. Confirming this properly means <a href="/blog/which-rule-granted-salesforce-access.html">tracing which rule is actually responsible</a> for each piece of access, rather than assuming the candidate permission set is the only source.
                </p>
                <h3 id="step-4">Step 4: consolidate before deleting, where multiple permission sets overlap</h3>
                <p>
                    Build a single permission set covering the union of what is actually needed, migrate assigned users, then retire the originals, rather than picking one to keep and accidentally losing access some users genuinely need.
                </p>
                <h3 id="step-5">Step 5: remove in stages, and verify after each stage</h3>
                <p>This limits the blast radius of a mistake to one stage rather than the whole cleanup.</p>
                <h2 id="step-3-scale">What makes step 3 practical at any real scale?</h2>
                <p>
                    Step 3 has a real cost per user under manual investigation. A permission set assigned to forty users means forty individual checks. <a href="/products/who-sees-what.html">Who Sees What</a> makes this tractable by resolving any user's full effective access in seconds, including exactly which permission sets are contributing which grants, so confirming what a specific user would lose stops being the bottleneck in a cleanup this size.
                </p>
                <p class="imp-text-sm imp-text-slate-500 imp-italic">Who Sees What is built and maintained by TwinStack Solutions, a Salesforce partner. Questions about setup: <a href="mailto:info@twinstack.net">info@twinstack.net</a></p>
                <div class="imp-bg-brand-50 imp-border imp-border-brand-200 imp-rounded-xl imp-p-6 imp-mt-12">
                    <p class="imp-font-bold imp-text-brand-900 imp-mb-2">Check what forty users would lose in seconds, not forty checks.</p>
                    <p class="imp-text-brand-800 imp-mb-4">See exactly which permission sets are contributing which grants for any user, before you retire anything. Free and read-only.</p>
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
