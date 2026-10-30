---
title: Object, Field and Record Access Explained
description: Salesforce checks access at three independent levels and all three must pass for a value to appear. Confusing them causes most fixes that fix nothing.
metaTitle: Salesforce Access Layers Explained | My Website
metaDescription: "Salesforce access layers are independent: object, field and record access must all pass. See where admins misdiagnose and how to check all three together."
focusKeyword: Salesforce access layers
slug: blog-salesforce-object-field-record-access
url: /blog/salesforce-object-field-record-access.html
order: 50
stylesheet: /assets/css/imported/blog-salesforce-object-field-record-access.css
hideCta: true
scripts:
  - src: "/assets/js/imported/blog-salesforce-object-field-record-access/inline-1.js"
    head: true
    module: false
    nomodule: false
    defer: false
    async: false
  - src: "/assets/js/imported/blog-salesforce-object-field-record-access/ts-analytics.js"
    head: true
    module: false
    nomodule: false
    defer: true
    async: false
  - src: "/assets/js/imported/blog-salesforce-object-field-record-access/inline-2.js"
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
                <span class="imp-w-2 imp-h-2 imp-rounded-full imp-bg-brand-400"></span> Fundamentals</div>
            <h1 class="imp-text-3xl imp-md:text-5xl imp-font-extrabold imp-text-white imp-mb-6 imp-leading-tight">Object, Field and Record Access: The Three Layers Admins Confuse</h1>
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
            <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_800,f_auto,q_auto/v1789469057/wsw_5.1_xhmrm5.png" alt="The three independent Salesforce access layers: object permissions, field-level security and record sharing" width="800" height="384" fetchpriority="high" class="imp-w-full imp-h-64 imp-md:h-96 imp-object-cover imp-rounded-xl imp-shadow-lg imp-mb-10">
            <article>
                <p class="imp-text-xl imp-text-slate-600 imp-font-medium imp-mb-8">
                    All three must pass for a value to appear. Confusing them is the most common misdiagnosis.
                </p>
                <div class="imp-border-l-4 imp-border-brand-500 imp-bg-brand-50 imp-p-5 imp-rounded-r-lg imp-mb-8">
                    <p class="imp-mb-0 imp-text-brand-900"><strong>Short answer:</strong> Salesforce evaluates access at three independent levels, object, field and record. All three must pass for a value to appear on screen. Because a user needs all three simultaneously, an access problem is very often diagnosed at the wrong layer, which leads to a fix that does not fix anything.</p>
                </div>
                <h2 id="three-layers">What are the three layers, exactly?</h2>
                <p>
                    <strong>Object access.</strong> Can the user create, read, edit or delete this object at all, regardless of record or field. Granted by profile, extended by permission sets and permission set groups.
                </p>
                <p>
                    <strong>Field-level security.</strong> Of the fields the user can access, which specific fields can they see or edit. A setting independent of object access entirely.
                </p>
                <p>
                    <strong>Record-level access.</strong> Of the records that exist, which specific rows can this user reach. Governed by org-wide defaults, role hierarchy, sharing rules and manual shares, none of which are visible from the profile or permission set screens.
                </p>
                <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_800,f_auto,q_auto/v1789469059/wsw_5.2_vhlilw.png" alt="Object, field and record access resolved together for one Salesforce user" width="800" height="450" loading="lazy" class="imp-zoom-image imp-w-full imp-rounded-xl imp-shadow-lg imp-mb-4">
                <p class="imp-text-sm imp-text-slate-500 imp-italic">All three layers, resolved for the same user at the same time.</p>
                <h2 id="all-three">Why must all three pass together?</h2>
                <p>
                    The three layers combine with an AND, not an OR. A value only appears if the user has object access, field access, and record access, all three, for that specific piece of data. A failure at any one layer produces the identical symptom: the user cannot see the value. Nothing about that symptom alone tells you which layer failed.
                </p>
                <h2 id="confusion">Where does the confusion actually happen?</h2>
                <p>
                    <strong>Assuming object access implies field access.</strong> A user with full edit access to Opportunity does not automatically see every field on it. If a commission field is hidden at the field level, that user sees the record and edits other fields, while that one field simply does not appear.
                </p>
                <p>
                    <strong>Assuming a record-level fix will resolve a field-level problem.</strong> If the actual cause is field-level security, adjusting sharing rules changes nothing, because the user could already reach the record.
                </p>
                <p>
                    <strong>Diagnosing at the layer that is easiest to check.</strong> Field-level security has a dedicated screen, Field Accessibility. Record-level access has no equivalent, and requires checking several mechanisms. Under time pressure, the easy layer gets checked first and the investigation stops there even if it is not the actual cause.
                </p>
                <h2 id="worked-example">A worked example</h2>
                <p>
                    A regional sales rep reports she cannot see the discount percentage on an Opportunity a colleague can see.
                </p>
                <p>
                    Wrong path: assume it is record-level since the reps are in different territories, spend time on role hierarchy and sharing rules, find nothing conclusive.
                </p>
                <p>
                    Correct path: confirm object-level access is equal for both, quick to check. Then check field-level security on the discount field specifically, since confidentiality-restricted fields are common. If the colleague has a permission set granting edit and the reporting rep does not, that is the entire explanation. <a href="/blog/which-rule-granted-salesforce-access.html">Tracing which rule is responsible</a> is the step that turns that explanation into a fix.
                </p>
                <h2 id="together">How does seeing all three together remove the guesswork?</h2>
                <p>
                    <a href="/products/who-sees-what.html">Who Sees What</a> resolves all three layers for a chosen user at once, object permissions, field-level security, and record-level reachability, each annotated with the specific rule responsible. Because all three are visible together, there is no point at which a plausible answer at the wrong layer gets mistaken for the actual cause.
                </p>
                <p class="imp-text-sm imp-text-slate-500 imp-italic">Who Sees What is built and maintained by TwinStack Solutions, a Salesforce partner. Questions about setup: <a href="mailto:info@twinstack.net">info@twinstack.net</a></p>
                <div class="imp-bg-brand-50 imp-border imp-border-brand-200 imp-rounded-xl imp-p-6 imp-mt-12">
                    <p class="imp-font-bold imp-text-brand-900 imp-mb-2">Stop diagnosing at the wrong layer.</p>
                    <p class="imp-text-brand-800 imp-mb-4">Object, field and record access for any user, resolved together and annotated with the rule behind each grant.</p>
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
