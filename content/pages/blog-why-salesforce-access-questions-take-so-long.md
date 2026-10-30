---
slug: blog-why-salesforce-access-questions-take-so-long
url: /blog/why-salesforce-access-questions-take-so-long.html
order: 50
title: Why a Salesforce Access Question Takes an Afternoon
description: Salesforce access spans six systems and no Setup screen shows all six for one user. Why the reconstruction takes thirty minutes, and what actually fixes it.
metaTitle: Why Salesforce Access Questions Take So Long | My Website
metaDescription: A Salesforce access question means checking six systems that never talk. See why the answer takes an afternoon, and what a user-first view changes.
focusKeyword: Salesforce access questions
stylesheet: /assets/css/imported/blog-why-salesforce-access-questions-take-so-long.css
hideCta: true
scripts:
  - src: "/assets/js/imported/blog-why-salesforce-access-questions-take-so-long/inline-1.js"
    head: true
    module: false
    nomodule: false
    defer: false
    async: false
  - src: "/assets/js/imported/blog-why-salesforce-access-questions-take-so-long/ts-analytics.js"
    head: true
    module: false
    nomodule: false
    defer: true
    async: false
  - src: "/assets/js/imported/blog-why-salesforce-access-questions-take-so-long/inline-2.js"
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
            <h1 class="imp-text-3xl imp-md:text-5xl imp-font-extrabold imp-text-white imp-mb-6 imp-leading-tight">Why Answering a Salesforce Access Question Takes an Entire Afternoon</h1>
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
            <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_800,f_auto,q_auto/v1789469064/wsw_2.1_ehmq7p.png" alt="The six Salesforce systems that grant access to a single user, checked one screen at a time" width="800" height="384" fetchpriority="high" class="imp-w-full imp-h-64 imp-md:h-96 imp-object-cover imp-rounded-xl imp-shadow-lg imp-mb-10">
            <article>
                <p class="imp-text-xl imp-text-slate-600 imp-font-medium imp-mb-8">
                    Access lives across six systems that never talk to each other. Here is why, and what changes when they do.
                </p>
                <div class="imp-border-l-4 imp-border-brand-500 imp-bg-brand-50 imp-p-5 imp-rounded-r-lg imp-mb-8">
                    <p class="imp-mb-0 imp-text-brand-900"><strong>Short answer:</strong> Salesforce access is the intersection of six independent systems, profile, permission sets, permission set groups, role hierarchy, sharing rules and manual shares, and no single screen in Setup shows all six for one person at once. Answering "why can this user see that" means opening each one separately and reconstructing the answer in your head. A tool that starts from the user rather than from the rule collapses this to a lookup.</p>
                </div>
                <h2 id="the-question">The question that starts every investigation</h2>
                <p>
                    It usually arrives the same way. A message, a screenshot, a ticket. Someone can see a record, or a field, or an app tab, that they should not be able to see. Or the reverse: someone who should have access does not.
                </p>
                <p>The question sounds simple: why can this user see that?</p>
                <p>
                    The honest answer requires reconstructing every rule that touches that user, on that object, for that record, and figuring out which one is responsible. That reconstruction is where the afternoon goes.
                </p>
                <h2 id="why-so-long">Why the reconstruction takes so long</h2>
                <p>
                    Salesforce access is evaluated across three layers, and each layer draws on more than one source.
                </p>
                <p>
                    <strong>Object-level access</strong> comes from the user's profile and any permission sets or permission set groups assigned to them. To check it fully, you open the profile, note what it grants, then open every assigned permission set individually, because a permission set can grant access the profile does not, and a profile can grant access a permission set does not restrict.
                </p>
                <p>
                    <strong>Field-level security</strong> is a separate setting from object access entirely. A user can have full object access and still not see a specific field. Salesforce's own Field Accessibility screen shows this per field, per profile, which means checking multiple fields means multiple screens.
                </p>
                <p>
                    <strong>Record-level access</strong> is the layer most people get wrong first. It depends on organisation-wide defaults, role hierarchy, sharing rules, and manual shares, none of which are visible from the profile or permission set screens at all. A user can have full object and field access and still not see a particular record because of where they sit in the role hierarchy relative to the record owner.
                </p>
                <p>
                    None of these three layers is visible from any of the others. To answer one access question fully, you check all three, and within each layer you may be checking several individual grants. The <a href="/blog/salesforce-object-field-record-access.html">three layers are explained in detail here</a>.
                </p>
                <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_800,f_auto,q_auto/v1789469069/wsw_2.2_qfnuqg.png" alt="One user's access resolved across object, field and record level in a single view" width="800" height="450" loading="lazy" class="imp-zoom-image imp-w-full imp-rounded-xl imp-shadow-lg imp-mb-4">
                <p class="imp-text-sm imp-text-slate-500 imp-italic">The same reconstruction, resolved from the user rather than from the rule.</p>
                <h2 id="direction-problem">The direction problem</h2>
                <p>
                    There is a second reason this takes so long, and it is more fundamental than the number of screens.
                </p>
                <p>
                    Setup is built to answer "who does this permission set affect." You open a permission set and see a list of assigned users. That is the natural query the interface supports.
                </p>
                <p>
                    The question you actually get asked runs the other way: "what can this person do." There is no screen that starts there. To answer a person-first question using rule-first screens, you have to enumerate every rule that could possibly apply to that person, then check each one, because nothing tells you in advance which rules are relevant to them specifically.
                </p>
                <p>
                    This is the structural reason the investigation takes thirty minutes even for an admin who knows exactly where to look. The interface was not built to answer the question in the direction it gets asked.
                </p>
                <h2 id="what-it-costs">What this costs beyond the thirty minutes</h2>
                <p>The direct time cost is the visible one. Three second-order costs matter more.</p>
                <p>
                    <strong>Security reviews get sampled instead of completed.</strong> A proper access review means confirming effective access for every user who should have it and nobody who shouldn't. At thirty-plus minutes per user, reviewing an org of any real size by hand is not realistic, so reviews sample a subset and hope the sample is representative.
                </p>
                <p>
                    <strong>Onboarding and offboarding checks happen on trust rather than verification.</strong> Someone assigns the standard permission sets for a new hire and assumes it worked. Someone removes access for a departing employee and assumes it is fully gone. Confirming either one properly means the same thirty-minute reconstruction, so most organisations skip the confirmation step entirely.
                </p>
                <p>
                    <strong>Over-permissioned users survive undetected.</strong> A permission granted for a one-time project and never revoked, a permission set assigned to cover an edge case that then applies broadly, an inherited role grant nobody remembers configuring. These accumulate quietly because finding them requires the same investigation that finding any single access issue requires, and nobody runs that investigation without a specific trigger. There is <a href="/blog/find-over-permissioned-salesforce-users.html">a practical review process for catching that drift</a>.
                </p>
                <h2 id="inverting-direction">What changes when the direction is inverted</h2>
                <p>
                    The fix is not more thorough documentation of the six systems. It is starting the query from the person instead of the rule.
                </p>
                <p>
                    Pick a user. Resolve every profile, permission set, permission set group, role hierarchy position, sharing rule and manual share that applies to them, at once, across object, field and record level. Show the result as one answer instead of six partial ones. And name the specific rule responsible for each grant, so the fix is obvious rather than requiring a second investigation.
                </p>
                <p>
                    That is the entire mechanism behind <a href="/products/who-sees-what.html">Who Sees What</a>, a free native Salesforce app we built after running into this exact thirty-minute reconstruction often enough that it stopped making sense to keep doing it by hand.
                </p>
                <h2 id="what-it-shows">What a person-first lookup actually shows</h2>
                <p>For any user you select:</p>
                <ul>
                    <li>Every object they can create, read, edit or delete</li>
                    <li>Every field on those objects they can see or edit, distinct from object access</li>
                    <li>Which records they can reach, accounting for role hierarchy, sharing rules and manual shares</li>
                    <li>The exact profile, permission set or sharing rule responsible for each of the above</li>
                </ul>
                <p>
                    Because it only reads existing permission metadata, there is nothing to configure first. Install it, search for a name, read the answer.
                </p>
                <h2 id="where-it-matters">Where this matters most</h2>
                <p>
                    <strong>Troubleshooting.</strong> A specific complaint resolved in the time it takes to look someone up, rather than scheduled for whenever thirty free minutes appear.
                </p>
                <p>
                    <strong>Security and access reviews.</strong> A review that actually covers everyone who should be checked, rather than a sample, because checking one more user costs nothing extra.
                </p>
                <p>
                    <strong>Onboarding and offboarding.</strong> Confirming a new joiner's access matches what was intended, and confirming a leaver's access is actually gone everywhere it was granted, both in the time it takes to search a name.
                </p>
                <p>
                    <strong>Permission set cleanup.</strong> Before deleting a permission set that looks redundant, seeing exactly which access it is currently granting to which users, so cleanup does not become the next incident.
                </p>
                <h2 id="try-it">Try it against a user you already have a question about</h2>
                <p>
                    If there is an access question sitting in your inbox right now, that is the fastest way to see the difference. Look the person up and compare the time to what the manual reconstruction would have taken.
                </p>
                <p class="imp-text-sm imp-text-slate-500 imp-italic">Who Sees What is built and maintained by TwinStack Solutions, a Salesforce partner. Questions about setup: <a href="mailto:info@twinstack.net">info@twinstack.net</a></p>
                <div class="imp-bg-brand-50 imp-border imp-border-brand-200 imp-rounded-xl imp-p-6 imp-mt-12">
                    <p class="imp-font-bold imp-text-brand-900 imp-mb-2">Answer the question sitting in your inbox right now.</p>
                    <p class="imp-text-brand-800 imp-mb-4">Free, read-only and native. Install it, search for a name, and compare the time to the manual reconstruction.</p>
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
