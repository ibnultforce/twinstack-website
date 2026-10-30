---
title: Which Rule Granted Salesforce Access?
slug: blog-which-rule-granted-salesforce-access
url: /blog/which-rule-granted-salesforce-access.html
order: 50
description: "Profile, permission set, role or sharing rule: how to trace which one granted a Salesforce user's access, layer by layer, and turn a guess into real evidence."
metaTitle: Which Rule Granted Salesforce Access? Trace It | My Website
metaDescription: "Trace Salesforce access layer by layer: profile, permission sets, field security, role hierarchy and sharing rules, and see which one actually grants it."
focusKeyword: trace Salesforce access
stylesheet: /assets/css/imported/blog-which-rule-granted-salesforce-access.css
hideCta: true
scripts:
  - src: "/assets/js/imported/blog-which-rule-granted-salesforce-access/inline-1.js"
    head: true
    module: false
    nomodule: false
    defer: false
    async: false
  - src: "/assets/js/imported/blog-which-rule-granted-salesforce-access/ts-analytics.js"
    head: true
    module: false
    nomodule: false
    defer: true
    async: false
  - src: "/assets/js/imported/blog-which-rule-granted-salesforce-access/inline-2.js"
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
                <span class="imp-w-2 imp-h-2 imp-rounded-full imp-bg-brand-400"></span> Technical Guide</div>
            <h1 class="imp-text-3xl imp-md:text-5xl imp-font-extrabold imp-text-white imp-mb-6 imp-leading-tight">Profile, Permission Set, Role or Sharing Rule: Which One Granted It?</h1>
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
            <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_800,f_auto,q_auto/v1789469069/wsw_3.1_zggqjh.png" alt="Tracing a Salesforce access grant back through profile, permission set, role hierarchy and sharing rules" width="800" height="384" fetchpriority="high" class="imp-w-full imp-h-64 imp-md:h-96 imp-object-cover imp-rounded-xl imp-shadow-lg imp-mb-10">
            <article>
                <p class="imp-text-xl imp-text-slate-600 imp-font-medium imp-mb-8">
                    Knowing a user has access is half an answer. Fixing it requires knowing which rule is responsible.
                </p>
                <div class="imp-border-l-4 imp-border-brand-500 imp-bg-brand-50 imp-p-5 imp-rounded-r-lg imp-mb-8">
                    <p class="imp-mb-0 imp-text-brand-900"><strong>Short answer:</strong> Knowing a user has access to something is only half an answer. Fixing it, or defending it in an audit, requires knowing which specific rule granted it. There is no single Setup screen that shows this. Tracing it means checking the profile, then every assigned permission set and permission set group, then role hierarchy and sharing rules for record-level grants, in that order, and confirming which one is actually responsible rather than merely consistent with the access observed.</p>
                </div>
                <h2 id="not-useful">Why "they have access" is not the useful answer</h2>
                <p>
                    Say a user can edit the Amount field on Opportunity records they do not own. That statement describes the symptom. It does not tell you what to change.
                </p>
                <p>
                    If a permission set called Deal Desk granted that edit access, removing the user from that permission set fixes it, and nothing else is affected. If the profile itself grants it, the fix is different, more disruptive, and potentially affects every other user on that profile. If a sharing rule granted the record visibility that made the field relevant at all, neither of the above is the actual fix.
                </p>
                <p>
                    Three different root causes, three different fixes, and from the symptom alone you cannot tell which one applies.
                </p>
                <h2 id="the-trace">The trace, layer by layer</h2>
                <h3>Object-level access: profile first, then permission sets</h3>
                <p>
                    Start with the profile. Object Manager, select the object, check the profile's object permissions directly. This tells you the baseline.
                </p>
                <p>
                    Then check every permission set assigned to the user individually. Permission sets are additive: they can grant access beyond the profile, but cannot revoke access the profile grants. If the profile alone explains the access, stop there. If it does not, one of the assigned permission sets is responsible, and you have to open each one to find which.
                </p>
                <p>
                    Permission set groups complicate this one step further. A permission set group bundles several permission sets together, and can also apply muting to selectively suppress specific permissions from the sets inside it. If a permission set group is involved, check both what it bundles and whether it mutes anything, since the group's net effect can differ from simply adding up its component permission sets.
                </p>
                <h3>Field-level access: separate from object access entirely</h3>
                <p>
                    Object access and field-level security are independent settings. A user can have full edit access to Opportunity and still not see the Amount field, and there is no relationship between the two that lets you infer one from the other.
                </p>
                <p>
                    Salesforce's Field Accessibility view, under the field's setup page, shows a matrix of profiles and permission sets and their setting for that specific field. This is the fastest built-in way to check field-level security, but it still requires knowing which field to check, and running it separately for each field of interest.
                </p>
                <h3>Record-level access: the layer with no single screen at all</h3>
                <p>
                    This is where a trace usually takes longest, because there is no equivalent of Field Accessibility for record visibility.
                </p>
                <p>
                    Record access is determined by, in order of how they typically get checked: organisation-wide default sharing settings for the object, the user's position in the role hierarchy relative to the record owner, any sharing rules that grant broader access based on criteria or ownership, and any manual shares placed on the specific record.
                </p>
                <p>
                    None of these is visible from a user's profile or permission set. To trace record-level access, you generally have to know or guess which mechanism is involved, then go check that mechanism specifically.
                </p>
                <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_800,f_auto,q_auto/v1789469074/wsw3.2_ludgfw.png" alt="Each access shown alongside the specific profile, permission set or sharing rule that granted it" width="800" height="450" loading="lazy" class="imp-zoom-image imp-w-full imp-rounded-xl imp-shadow-lg imp-mb-4">
                <p class="imp-text-sm imp-text-slate-500 imp-italic">The same trace, with the responsible rule named against each grant.</p>
                <h2 id="order">Why order matters in the trace</h2>
                <p>
                    Check in the order above, not because Salesforce evaluates them in this order internally, but because each layer rules things out for the next.
                </p>
                <p>
                    If object-level access is not granted at all, field-level and record-level access are moot; the user cannot reach the object regardless of what else is configured. Confirming object access first prevents wasted time investigating field or record settings for an object the user cannot open anyway. The relationship between <a href="/blog/salesforce-object-field-record-access.html">the three layers is worth understanding properly</a> before running a trace.
                </p>
                <h2 id="audit">Why this matters for an audit, not just a fix</h2>
                <p>
                    A statement like "this user can edit the Amount field on Opportunities they don't own" is an assertion. An auditor, a compliance reviewer, or your own future self six months from now has no way to verify it without redoing the trace.
                </p>
                <p>
                    A statement like "this user can edit the Amount field because they are assigned the Deal Desk permission set, which grants field-level edit access, combined with a sharing rule that grants read-write access to all Opportunities in the EMEA territory" is evidence. It names the specific mechanism, which means it can be checked, and it means the fix, if one is needed, is unambiguous.
                </p>
                <p>
                    The difference between those two statements is the difference between an access review that produces a defensible sign-off and one that produces a plausible guess.
                </p>
                <h2 id="at-volume">Doing this trace for every access question</h2>
                <p>
                    The manual process above is correct, and for one user on one object it takes perhaps ten to fifteen minutes if you know where to look. The real cost shows up at volume: a security review covering fifty users, or an offboarding check confirming access was removed everywhere it was granted, multiplies that ten to fifteen minutes by every user and every object in scope. That volume problem is <a href="/blog/why-salesforce-access-questions-take-so-long.html">why access questions eat an afternoon</a>.
                </p>
                <p>
                    <a href="/products/who-sees-what.html">Who Sees What</a> runs this exact trace automatically. Pick a user, and for every object, field and record they can reach, it shows the specific profile, permission set or sharing rule responsible, resolved across all three layers at once rather than checked one screen at a time.
                </p>
                <p>
                    The output is the same evidence a manual trace would produce, in the time it takes to search a name.
                </p>
                <h2 id="practise">A trace worth practising manually at least once</h2>
                <p>
                    Even with a tool that automates this, it is worth doing the manual trace by hand at least once for a real access question in your org. It builds the mental model of how the six sources interact, which makes reading any automated answer, including this app's, faster to sanity-check.
                </p>
                <p class="imp-text-sm imp-text-slate-500 imp-italic">Who Sees What is built and maintained by TwinStack Solutions, a Salesforce partner. Questions about setup: <a href="mailto:info@twinstack.net">info@twinstack.net</a></p>
                <div class="imp-bg-brand-50 imp-border imp-border-brand-200 imp-rounded-xl imp-p-6 imp-mt-12">
                    <p class="imp-font-bold imp-text-brand-900 imp-mb-2">Turn an assertion into evidence.</p>
                    <p class="imp-text-brand-800 imp-mb-4">See every object, field and record a user can reach, each one annotated with the rule that granted it. Free and read-only.</p>
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
