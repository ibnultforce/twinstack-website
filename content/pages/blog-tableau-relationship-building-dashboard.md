---
title: "Relationship-Building Metrics: A Tableau Visit Dashboard"
description: "How to measure home and community visits honestly in Tableau: coverage, mix and timing per student, plus equity views by gender, race and grade level."
metaTitle: "Relationship-Building Metrics: A Tableau Visit Dashboard"
metaDescription: "How to measure home and community visits honestly in Tableau: coverage, mix and timing per student, plus equity views by gender, race and grade level."
focusKeyword: relationship-building metrics
slug: blog-tableau-relationship-building-dashboard
url: /blog/tableau-relationship-building-dashboard.html
ogImage: "https://res.cloudinary.com/du42kbmmn/image/upload/w_1200,f_auto,q_auto/v1794299317/tableau-relationship-building-dashboard_wzriqi.png"
order: 50
stylesheet: /assets/css/imported/blog-tableau-relationship-building-dashboard.css
hideCta: true
scripts:
  - src: "/assets/js/imported/blog-tableau-relationship-building-dashboard/inline-1.js"
    head: true
    module: false
    nomodule: false
    defer: false
    async: false
  - src: "/assets/js/imported/blog-tableau-relationship-building-dashboard/ts-analytics.js"
    head: true
    module: false
    nomodule: false
    defer: true
    async: false
  - src: "/assets/js/imported/blog-tableau-relationship-building-dashboard/inline-2.js"
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
                <span class="imp-w-2 imp-h-2 imp-rounded-full imp-bg-brand-400"></span> Tableau for Nonprofits</div>
            <h1 class="imp-text-3xl imp-md:text-5xl imp-font-extrabold imp-text-white imp-mb-6 imp-leading-tight">Relationship-Building Metrics That Matter: A Tableau Dashboard for Visit Coverage and Equity</h1>
            <div class="imp-flex imp-items-center imp-justify-center imp-gap-6 imp-text-slate-400 imp-text-sm">
                <div><svg class="imp-svgi imp-mr-2" aria-hidden="true"><use href="#i-calendar" /></svg>4 November 2026</div>
                <div><svg class="imp-svgi imp-mr-2" aria-hidden="true"><use href="#i-user" /></svg>By TwinStack Solutions · 5 min read</div>
            </div>
            <div class="imp-ts-get-app-wrap"><a href="/services/tableau.html" class="imp-ts-get-app" aria-label="See TwinStack&#x27;s Tableau dashboard services">Tableau dashboards for Salesforce <svg viewBox="0 0 448 512" aria-hidden="true" fill="currentColor"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg></a></div>
        </div>
    </header>
    <section class="imp-py-20 imp-bg-white imp-relative">
        <div class="imp-max-w-3xl imp-mx-auto imp-px-6">
            <a href="/blog.html" class="imp-inline-flex imp-items-center imp-gap-2 imp-text-brand-600 imp-font-semibold imp-mb-8 imp-hover:underline">
                <svg class="imp-svgi" aria-hidden="true"><use href="#i-arrow-left" /></svg> Back to Blog
            </a>
            <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_800,f_auto,q_auto/v1794299317/tableau-relationship-building-dashboard_wzriqi.png" alt="Cover for Relationship-Building Metrics That Matter: stacked bars of home and community visits by month across the school year" width="1200" height="675" fetchpriority="high" class="imp-ts-hero-img imp-rounded-xl imp-shadow-lg imp-mb-10">
            <article>
                <p class="imp-text-xl imp-text-slate-600 imp-font-medium imp-mb-8"><strong>Short answer:</strong> good relationship-building metrics count students, not visits. Measure coverage, mix and timing for active students, classify each student once, and compare reach by group against the average.</p>
<p>Relationship building is the hardest work in a family engagement programme to measure. A home visit takes real time and effort and produces one record in Salesforce: a date, a type, a student. The value is in the trust it builds, which no dashboard can see. What a dashboard can see is whether the visits are happening, who they are reaching, and when.</p>
<p>That is a narrower question than "is the programme working?", and it is the one we built the Relationship Building dashboard to answer, as part of our <a href="/blog/salesforce-tableau-nonprofit-reporting.html">Salesforce and Tableau nonprofit project</a>.</p>
<h2 id="start-with-what-the-record-can-tell-you">Start with what the record can tell you</h2>
<p>In the Salesforce data behind this project, relationship-building activity comes in two subtypes: home visits and community visits. Each is a Family Engagement Activity linked to a student's enrolment. That structure supports three kinds of question:</p>
<ul>
<li><strong>Coverage:</strong> what share of active students has received at least one visit of either kind?</li>
<li><strong>Mix:</strong> among those reached, is contact happening in the home, in the community, or both?</li>
<li><strong>Timing:</strong> are visits spread across the year, or bunched into a few months?</li>
</ul>
<p>A list of activities can answer none of these directly. Coverage needs a count of students, not rows. Mix needs each student classified. Timing needs a clean date axis.</p>
<h2 id="what-we-built">What we built</h2>
<p>The dashboard opens with a status breakdown. Every active student falls into exactly one of three groups: reached by a home visit, reached by a community visit, or unreached. The rule is deliberately plain. If a student has any home visit, they are in the first group. If not, but they have a community visit, they are in the second. Otherwise, they are unreached. A home visit takes priority, so each student is counted once.</p>
<p>Next to it sits a month-by-month view of visits split by home and community, which shows the rhythm of the work across the year. Below that, a student detail list lets a coordinator move from a percentage to named students.</p>
<p>Three comparison views break reach down by gender, race and grade level, each set against the overall average. This is the equity lens, and it is where aggregate numbers are most likely to mislead. A 70 percent overall reach rate can sit on top of a 50 percent rate for one grade level, and nobody sees it unless the data is cut that way. (These percentages are invented for illustration.)</p>
<p>All of it responds to the School and School Year filters shared across the workbook.</p>
<h2 id="the-modelling-that-makes-the-numbers-trustworthy">The modelling that makes the numbers trustworthy</h2>
<p>The visit counts are calculated per student with a <a href="https://help.tableau.com/current/pro/desktop/en-gb/calculations_calculatedfields_lod_fixed.htm" target="_blank" rel="noopener">FIXED level-of-detail expression</a> and then combined, so a student with six home visits contributes one student to the "home visit" group, not six. The population is limited to active enrolments. Without those two decisions, a relationship-building dashboard overstates both the number of students and the reach rate, and the error is hard to spot because the chart still looks reasonable.</p>
<p>This is also where relationships in Tableau's data model help. Each table keeps its own level of detail, and Tableau joins them at query time based on the fields in the view (<a href="https://help.tableau.com/current/online/en-gb/datasource_relationships_learnmorepage.htm" target="_blank" rel="noopener">Tableau documentation</a>). Enrolments and activities are one-to-many, and the model respects that instead of flattening it into one wide table.</p>
<h2 id="what-changes-for-management">What changes for management</h2>
<ul>
<li><strong>Where to send people.</strong> If one school has many unreached students, visit capacity can move there.</li>
<li><strong>Which kind of visit to prioritise.</strong> A school with many community visits and few home visits tells a different story from the reverse.</li>
<li><strong>When to plan.</strong> If visits cluster late in the year, scheduling can start earlier.</li>
<li><strong>Whether reach is even.</strong> The equity views show whether a group is consistently below the average.</li>
</ul>
<p>None of this tells you whether a visit was good. It tells you whether the visits are reaching the people they were meant to reach, which is the part a report can legitimately measure.</p>
<h2 id="native-salesforce-reporting-fairly">Native Salesforce reporting, fairly</h2>
<p>Salesforce reports can list home and community visits by month, group them by school, and chart them on a dashboard. A report with a cross filter can find students with or without a related visit. Teams that need only those views should use them.</p>
<p>The extra work in our case was combining student-level classification, an average to compare against, and several demographic cuts in one filtered view. Tableau's calculated fields and layout tools suited that. It remains possible to build much of it in Salesforce with additional report types and formulas.</p>
<h2 id="the-takeaway-1">The takeaway</h2>
<p>Measuring relationship building means being honest about what can be measured. Count students, not rows. Limit to active enrolments. Classify once. Then show reach by type, by month and by group. That tells a leader whether the relationships are being built broadly, and it leaves the question of depth to the people who knew the families.</p>
<h2 id="faq">Frequently asked questions</h2>
<h3 class="imp-q">What should a home visit dashboard measure?</h3>
<p>Coverage (share of active students visited), mix (home, community or both) and timing (visits by month), plus reach by gender, race and grade against the average.</p>
<h3 class="imp-q">How do you avoid counting a student several times?</h3>
<p>Calculate visits per student with a FIXED level-of-detail expression, give each student one status, and count students rather than visit rows.</p>
<h3 class="imp-q">Can a dashboard show whether a visit went well?</h3>
<p>No. It shows whether visits are reaching the intended students. The quality of a visit is for the people who carried it out.</p>
                <div class="imp-ts-final"><p class="imp-np-cta">Want dashboards like these for your programme? <a target="_blank" rel="noopener" href="https://calendar.app.google/HP3LiuNFisCt6xLo6">Book a free 45-minute call</a> or see our <a href="/services/tableau.html">Tableau dashboard services</a>.</p><div class="imp-row"><a class="imp-b1" href="https://calendar.app.google/HP3LiuNFisCt6xLo6" target="_blank" rel="noopener">Book a free 45-minute call <svg width="14" height="14" viewBox="0 0 448 512" aria-hidden="true" fill="currentColor"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></a><a class="imp-b2" href="/services/tableau.html">Tableau dashboards</a></div></div>
                <div class="imp-ts-related"><h2>More in this series</h2><ul><li><a href="/blog/salesforce-tableau-nonprofit-reporting.html">Beyond Salesforce Reports: How We Used Tableau to Find the Students a Nonprofit Missed</a></li><li><a href="/blog/tableau-unreached-students-dashboard.html">Who Did We Miss? Using Tableau to Find Students With No Programme Contact</a></li><li><a href="/blog/tableau-academic-partnering-dashboard.html">Is Your Academic Partnering Consistent? How to Track Student Reach Across the School Year with Tableau</a></li><li><a href="/blog/nonprofit-communication-analytics-tableau.html">Nonprofit Communication Analytics: Tracking Touchpoints, Channels and Two-Way Contact in Salesforce and Tableau</a></li><li><a href="/blog/nonprofit-performance-dashboard-tableau.html">Why Your Nonprofit&#x27;s Dashboards Disagree, and How a Single Tableau Data Model Fixes It</a></li></ul></div>
            </article>
            <div class="imp-mt-16 imp-pt-8 imp-border-t imp-border-slate-200">
                <a href="/blog.html" class="imp-inline-flex imp-items-center imp-gap-2 imp-text-brand-600 imp-font-bold imp-hover:underline">
                    <svg class="imp-svgi" aria-hidden="true"><use href="#i-arrow-left" /></svg> Return to All Insights
                </a>
            </div>
        </div>
    </section>
</div>

<script type="application/ld+json" id="ts-schema">{"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","headline":"Relationship-Building Metrics That Matter: A Tableau Dashboard for Visit Coverage and Equity","description":"How to measure home and community visits honestly in Tableau: coverage, mix and timing per student, plus equity views by gender, race and grade level.","image":"https://res.cloudinary.com/du42kbmmn/image/upload/w_1200,f_auto,q_auto/v1794299317/tableau-relationship-building-dashboard_wzriqi.png","author":{"@type":"Organization","@id":"https://twinstack.net/#organization","name":"TwinStack Solutions","url":"https://twinstack.net/"},"publisher":{"@id":"https://twinstack.net/#organization"},"datePublished":"2026-11-04","dateModified":"2026-11-04","inLanguage":"en-GB","keywords":"relationship-building metrics, home visit tracking, family engagement dashboard, Tableau for nonprofits, visit coverage","mainEntityOfPage":{"@type":"WebPage","@id":"https://twinstack.net/blog/tableau-relationship-building-dashboard"},"about":{"@type":"Thing","name":"Tableau"}},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What should a home visit dashboard measure?","acceptedAnswer":{"@type":"Answer","text":"Coverage (share of active students visited), mix (home, community or both) and timing (visits by month), plus reach by gender, race and grade against the average."}},{"@type":"Question","name":"How do you avoid counting a student several times?","acceptedAnswer":{"@type":"Answer","text":"Calculate visits per student with a FIXED level-of-detail expression, give each student one status, and count students rather than visit rows."}},{"@type":"Question","name":"Can a dashboard show whether a visit went well?","acceptedAnswer":{"@type":"Answer","text":"No. It shows whether visits are reaching the intended students. The quality of a visit is for the people who carried it out."}}]},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://twinstack.net/"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://twinstack.net/blog"},{"@type":"ListItem","position":3,"name":"Relationship-Building Metrics That Matter: A Tableau Dashboard for Visit Coverage and Equity","item":"https://twinstack.net/blog/tableau-relationship-building-dashboard"}]}]}</script>
