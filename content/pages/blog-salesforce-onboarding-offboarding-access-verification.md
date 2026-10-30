---
title: "Onboarding and Offboarding: Verify Access Actually Changed"
slug: blog-salesforce-onboarding-offboarding-access-verification
url: /blog/salesforce-onboarding-offboarding-access-verification.html
order: 50
description: Assigning or removing permission sets is configuration, not confirmation. What to verify on both sides so a departing employee doesn't quietly keep access.
metaTitle: "Salesforce Offboarding Access: What to Verify | My Website"
metaDescription: Assigning or removing access is configuration, not confirmation. Check what a leaver's Salesforce offboarding access still allows, and verify new hires.
focusKeyword: Salesforce offboarding access
stylesheet: /assets/css/imported/blog-salesforce-onboarding-offboarding-access-verification.css
hideCta: true
scripts:
  - src: "/assets/js/imported/blog-salesforce-onboarding-offboarding-access-verification/inline-1.js"
    head: true
    module: false
    nomodule: false
    defer: false
    async: false
  - src: "/assets/js/imported/blog-salesforce-onboarding-offboarding-access-verification/ts-analytics.js"
    head: true
    module: false
    nomodule: false
    defer: true
    async: false
  - src: "/assets/js/imported/blog-salesforce-onboarding-offboarding-access-verification/inline-2.js"
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
                <span class="imp-w-2 imp-h-2 imp-rounded-full imp-bg-brand-400"></span> Process Guide</div>
            <h1 class="imp-text-3xl imp-md:text-5xl imp-font-extrabold imp-text-white imp-mb-6 imp-leading-tight">Onboarding and Offboarding: How to Actually Verify Access Changed</h1>
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
            <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_800,f_auto,q_auto/v1789469001/wsw_7.1_c4olkx.png" alt="Verifying a Salesforce user's effective access actually changed after onboarding or offboarding" width="800" height="384" fetchpriority="high" class="imp-w-full imp-h-64 imp-md:h-96 imp-object-cover imp-rounded-xl imp-shadow-lg imp-mb-10">
            <article>
                <p class="imp-text-xl imp-text-slate-600 imp-font-medium imp-mb-8">
                    Configuring access and verifying it are two different steps. Most processes only do the first.
                </p>
                <div class="imp-border-l-4 imp-border-brand-500 imp-bg-brand-50 imp-p-5 imp-rounded-r-lg imp-mb-8">
                    <p class="imp-mb-0 imp-text-brand-900"><strong>Short answer:</strong> Assigning permission sets to a new hire, or removing a leaver from theirs, is the configuration step. Confirming access actually changed means checking full effective access afterward, because permission set groups, inherited role access, and manual shares can all leave a gap between what you configured and what the person can actually do.</p>
                </div>
                <h2 id="different">Why are configuring and verifying different?</h2>
                <p>
                    Both onboarding and offboarding actions are configuration. Neither confirms the outcome. A permission set assignment can fail silently. A permission set group can mute a permission that was assumed to carry through unchanged. A manual share is not touched by removing profile or permission set access, and survives both misconfiguration and removal completely untouched.
                </p>
                <p>
                    Each of those gaps produces the same symptom either way: the configuration step ran without error, and the actual access is still wrong.
                </p>
                <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_800,f_auto,q_auto/v1789469054/wsw7.2_qdekdz.png" alt="A new hire's effective access checked against the role definition before day one" width="800" height="450" loading="lazy" class="imp-zoom-image imp-w-full imp-rounded-xl imp-shadow-lg imp-mb-4">
                <p class="imp-text-sm imp-text-slate-500 imp-italic">Configuration ran without error. Whether it produced the right access is a separate check.</p>
                <h2 id="onboarding-checks">What should you verify on onboarding?</h2>
                <p>
                    <strong>Object and field access matches the role definition.</strong> Check what the new hire can actually reach, not what the permission sets are named or supposed to grant. A permission set's name is a description of intent, not a guarantee of effect.
                </p>
                <p>
                    <strong>No unintended inheritance from role hierarchy.</strong> If the new hire sits above others in the hierarchy, they may inherit visibility that was not intended for their position, simply as a side effect of where they were placed in the org chart.
                </p>
                <p>
                    <strong>Record-level access is neither too narrow nor too broad.</strong> Too narrow is visible immediately, because something breaks and someone complains. Too broad is quiet and goes unnoticed because nothing breaks, which is exactly why it needs to be checked deliberately rather than left to surface on its own.
                </p>
                <h2 id="offboarding-checks">What should you verify on offboarding, and why does it matter more?</h2>
                <p>
                    This is the higher-stakes direction, because the failure mode is a departed employee retaining access, and that tends to go unnoticed for far longer than a new hire missing access they need.
                </p>
                <p>
                    <strong>Deactivation does not remove manual shares.</strong> A manual share persists as metadata regardless of whether the user is active, so deactivating the account does not clear it.
                </p>
                <p>
                    <strong>Permission set group membership can survive individual permission set removal.</strong> If a leaver was removed from named permission sets but remained in a group granting the same access, the removal did not fully take effect, and nothing in the interface flags that the two are inconsistent.
                </p>
                <p>
                    <strong>Role hierarchy access does not disappear until the role assignment itself changes.</strong> Removing a profile or permission set does not touch hierarchy position, so record visibility inherited through the hierarchy can remain even after every other access appears removed.
                </p>
                <h2 id="what-verification-looks-like">What does the verification step actually look like?</h2>
                <p>
                    For a new hire or a leaver, verification is the same operation as any other access question: resolve full effective access, across all three layers, from every source that can grant it, and compare it to what should be true. Under a manual process this costs thirty-plus minutes, which is why departures, often happening on short notice, get the check skipped most often, at exactly the point where the downside of skipping it is highest. <a href="/blog/salesforce-object-field-record-access.html">The three layers involved are explained in more depth here</a>.
                </p>
                <h2 id="routine">How do you make verification routine rather than exceptional?</h2>
                <p>
                    <a href="/products/who-sees-what.html">Who Sees What</a> resolves a user's full effective access in seconds, which changes offboarding verification from a check that is often skipped to the last step of the process, done every time, regardless of how much notice the departure gave.
                </p>
                <h2 id="checklist">A minimal checklist worth adopting regardless of tooling</h2>
                <ul>
                    <li>Confirm the user is deactivated</li>
                    <li>Confirm no active permission set or permission set group assignments</li>
                    <li>Confirm no manual shares remain on records they should no longer access</li>
                    <li>For onboarding, confirm effective access matches the role definition before day one</li>
                </ul>
                <p class="imp-text-sm imp-text-slate-500 imp-italic">Who Sees What is built and maintained by TwinStack Solutions, a Salesforce partner. Questions about setup: <a href="mailto:info@twinstack.net">info@twinstack.net</a></p>
                <div class="imp-bg-brand-50 imp-border imp-border-brand-200 imp-rounded-xl imp-p-6 imp-mt-12">
                    <p class="imp-font-bold imp-text-brand-900 imp-mb-2">Make the last step of offboarding a real check, not an assumption.</p>
                    <p class="imp-text-brand-800 imp-mb-4">Resolve a departing user's effective access in seconds, and confirm it actually went to zero. Free and read-only.</p>
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
