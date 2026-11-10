---
title: "Unreached Students: Find Engagement Gaps with Tableau"
description: "A Tableau dashboard that turns \"who have we not reached?\" into a named list. How to define reached, count students not rows, and where Salesforce reports fit."
metaTitle: "Unreached Students: Find Engagement Gaps with Tableau"
metaDescription: "A Tableau dashboard that turns \"who have we not reached?\" into a named list. How to define reached, count students not rows, and where Salesforce reports fit."
focusKeyword: unreached students dashboard
slug: blog-tableau-unreached-students-dashboard
url: /blog/tableau-unreached-students-dashboard.html
ogImage: "https://res.cloudinary.com/du42kbmmn/image/upload/w_1200,f_auto,q_auto/v1794299313/tableau-unreached-students-dashboard_javckp.png"
order: 50
stylesheet: /assets/css/imported/blog-tableau-unreached-students-dashboard.css
hideCta: true
scripts:
  - src: "/assets/js/imported/blog-tableau-unreached-students-dashboard/inline-1.js"
    head: true
    module: false
    nomodule: false
    defer: false
    async: false
  - src: "/assets/js/imported/blog-tableau-unreached-students-dashboard/ts-analytics.js"
    head: true
    module: false
    nomodule: false
    defer: true
    async: false
  - src: "/assets/js/imported/blog-tableau-unreached-students-dashboard/inline-2.js"
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
            <h1 class="imp-text-3xl imp-md:text-5xl imp-font-extrabold imp-text-white imp-mb-6 imp-leading-tight">Who Did We Miss? Using Tableau to Find Students With No Programme Contact</h1>
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
            <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_800,f_auto,q_auto/v1794299313/tableau-unreached-students-dashboard_javckp.png" alt="Cover for Who Did We Miss?: a grid of squares showing 17 of 120 active students with no recorded contact" width="1200" height="675" fetchpriority="high" class="imp-ts-hero-img imp-rounded-xl imp-shadow-lg imp-mb-10">
            <article>
                <p class="imp-text-xl imp-text-slate-600 imp-font-medium imp-mb-8"><strong>Short answer:</strong> an unreached students dashboard works when you define "reached" for each programme, limit the count to active enrolments, and classify each student once before counting. Then the gap list builds itself.</p>
<p>A programme can log a thousand activities and still miss a student entirely. Totals hide that. A count of visits, calls and meetings says how busy the team was. It says nothing about who was left out.</p>
<p>That gap is the reason we built a dedicated Unreached Students dashboard for a school-based family engagement programme, as part of a wider <a href="/blog/salesforce-tableau-nonprofit-reporting.html">Salesforce and Tableau project</a>. The idea is simple: turn "who have we not reached?" from a question someone answers with a one-off export into a list a coordinator can open on Monday morning.</p>
<h2 id="why-finding-unreached-students-is-harder-than-it-sounds">Why finding unreached students is harder than it sounds</h2>
<h3 id="define-what-reached-means">Define what "reached" means</h3>
<p>To say a student is unreached, you first have to say what reached means. In this programme the answer differs by type of work:</p>
<ul>
<li><strong>Relationship Building:</strong> reached means at least one home visit or community visit.</li>
<li><strong>Academic Partnering:</strong> reached means activity in at least two distinct windows of the school year. One window is a partial reach.</li>
<li><strong>Ongoing Communications:</strong> reached means at least one communication touchpoint, and the programme also looks at students with two, and with three or more.</li>
</ul>
<h3 id="get-the-denominator-right">Get the denominator right</h3>
<p>Only students with an active enrolment should appear. A student who has left the school is not a gap in outreach, and including them would make every reach rate look worse than it is.</p>
<h3 id="count-at-the-right-grain">Count at the right grain</h3>
<p>Activities sit in a one-to-many relationship with enrolments. A student with twelve activities appears twelve times in any table that joins the two. Count rows and that student is counted twelve times. Ask "how many students had zero activities?" and the answer cannot even be found by counting rows, because students with no activity have no activity rows at all.</p>
<h2 id="how-the-tableau-dashboard-answers-it">How the Tableau dashboard answers it</h2>
<p>The workbook handles the grain in two steps. First, a student-level calculation counts each student's activities by programme, using a <a href="https://help.tableau.com/current/pro/desktop/en-gb/calculations_calculatedfields_lod_fixed.htm" target="_blank" rel="noopener">FIXED level-of-detail expression</a> on the student's enrolment record. Second, a status field turns that count into a label: for Relationship Building, "Reached - Home Visit", "Reached - Community Visit" or "Unreached"; for Academic Partnering, "Reached", "1 Touchpoint" or "Unreached"; for communications, "3+ Touchpoints" down to "Unreached". Once every student carries a label, counting students by label is straightforward, and a student appears once.</p>
<p>The Unreached Students dashboard then does three things:</p>
<ol type="1">
<li>It shows one headline count per programme: unreached relationship-building students, students not yet reached in Academic Partnering, and unreached communications students. All three count active enrolments only.</li>
<li>It lists the students behind each count, one list per programme, so the number is something a person can act on.</li>
<li>It has a "no activity" measure for students who are unreached in all three programmes at once. These are the students nobody has touched.</li>
</ol>
<p>The lists respond to the same School and School Year filters as the rest of the workbook, and the communications list also responds to a meeting-type parameter. A coordinator can look at one school, one year, one kind of meeting.</p>
<h2 id="an-illustrative-example">An illustrative example</h2>
<p>This example is hypothetical and is not project data. Suppose a school shows a healthy overall communications rate, with most students contacted at least once. The headline looks fine. Opening the Unreached list for that school shows that the uncontacted students are concentrated in a single grade. The programme lead sees a pattern a total could never show, and can assign the follow-up to the educators who work with that grade.</p>
<h2 id="where-salesforce-reports-fit">Where Salesforce reports fit</h2>
<p>Salesforce can answer part of this natively. A cross filter on a report can list students that have, or do not have, related activity records, and a report filtered to active enrolments gives the right population. For a single programme, that may be all a team needs.</p>
<p>The harder part is combining three definitions of "reached", with different thresholds, into consistent status labels, and showing them alongside an all-programmes view in one place. That is where we found Tableau's calculation language and data model easier to work with. We would not describe this as something Salesforce cannot do. It is a question of how much custom reporting you want to build and maintain.</p>
<h2 id="what-management-can-do-with-it">What management can do with it</h2>
<p>The dashboard does not fix outreach. It changes the conversation. Instead of asking whether the team is doing enough, a manager can ask which students have had no contact, which school they attend and which educator is closest to them. Those are decisions someone can make in a staff meeting.</p>
<p>Two cautions apply. A student labelled unreached may have been contacted in a way nobody recorded, so the dashboard is only as good as the activity data entered in Salesforce. And a list is a starting point for follow-up, not a verdict on anyone's work.</p>
<h2 id="the-takeaway">The takeaway</h2>
<p>Finding engagement gaps is a modelling problem before it is a visualisation problem. Define reached, restrict to active students, classify each student once, and then the gap list builds itself. Salesforce holds the activity record. Tableau turns it into a list of people to call.</p>
<h2 id="faq">Frequently asked questions</h2>
<h3 class="imp-q">How do you find students with no activity in Salesforce?</h3>
<p>A report with a cross filter can list students without related activity records. For several programmes with different definitions of reached, a Tableau status field per student keeps the lists consistent.</p>
<h3 class="imp-q">Why not just count activity rows?</h3>
<p>Rows repeat a student once per activity, and students with no activity have no rows at all. Classify each student first, then count students.</p>
<h3 class="imp-q">Should students who have left be included?</h3>
<p>No. Limit the population to active enrolments, or every reach rate will look worse than it is.</p>
                <div class="imp-ts-final"><p class="imp-np-cta">Want dashboards like these for your programme? <a target="_blank" rel="noopener" href="https://calendar.app.google/HP3LiuNFisCt6xLo6">Book a free 45-minute call</a> or see our <a href="/services/tableau.html">Tableau dashboard services</a>.</p><div class="imp-row"><a class="imp-b1" href="https://calendar.app.google/HP3LiuNFisCt6xLo6" target="_blank" rel="noopener">Book a free 45-minute call <svg width="14" height="14" viewBox="0 0 448 512" aria-hidden="true" fill="currentColor"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></a><a class="imp-b2" href="/services/tableau.html">Tableau dashboards</a></div></div>
                <div class="imp-ts-related"><h2>More in this series</h2><ul><li><a href="/blog/salesforce-tableau-nonprofit-reporting.html">Beyond Salesforce Reports: How We Used Tableau to Find the Students a Nonprofit Missed</a></li><li><a href="/blog/tableau-relationship-building-dashboard.html">Relationship-Building Metrics That Matter: A Tableau Dashboard for Visit Coverage and Equity</a></li><li><a href="/blog/tableau-academic-partnering-dashboard.html">Is Your Academic Partnering Consistent? How to Track Student Reach Across the School Year with Tableau</a></li><li><a href="/blog/nonprofit-communication-analytics-tableau.html">Nonprofit Communication Analytics: Tracking Touchpoints, Channels and Two-Way Contact in Salesforce and Tableau</a></li><li><a href="/blog/nonprofit-performance-dashboard-tableau.html">Why Your Nonprofit&#x27;s Dashboards Disagree, and How a Single Tableau Data Model Fixes It</a></li></ul></div>
            </article>
            <div class="imp-mt-16 imp-pt-8 imp-border-t imp-border-slate-200">
                <a href="/blog.html" class="imp-inline-flex imp-items-center imp-gap-2 imp-text-brand-600 imp-font-bold imp-hover:underline">
                    <svg class="imp-svgi" aria-hidden="true"><use href="#i-arrow-left" /></svg> Return to All Insights
                </a>
            </div>
        </div>
    </section>
</div>

<script type="application/ld+json" id="ts-schema">{"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","headline":"Who Did We Miss? Using Tableau to Find Students With No Programme Contact","description":"A Tableau dashboard that turns \"who have we not reached?\" into a named list. How to define reached, count students not rows, and where Salesforce reports fit.","image":"https://res.cloudinary.com/du42kbmmn/image/upload/w_1200,f_auto,q_auto/v1794299313/tableau-unreached-students-dashboard_javckp.png","author":{"@type":"Organization","@id":"https://twinstack.net/#organization","name":"TwinStack Solutions","url":"https://twinstack.net/"},"publisher":{"@id":"https://twinstack.net/#organization"},"datePublished":"2026-11-04","dateModified":"2026-11-04","inLanguage":"en-GB","keywords":"unreached students dashboard, engagement gaps, Tableau for nonprofits, student outreach tracking, Salesforce cross filter","mainEntityOfPage":{"@type":"WebPage","@id":"https://twinstack.net/blog/tableau-unreached-students-dashboard"},"about":{"@type":"Thing","name":"Tableau"}},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do you find students with no activity in Salesforce?","acceptedAnswer":{"@type":"Answer","text":"A report with a cross filter can list students without related activity records. For several programmes with different definitions of reached, a Tableau status field per student keeps the lists consistent."}},{"@type":"Question","name":"Why not just count activity rows?","acceptedAnswer":{"@type":"Answer","text":"Rows repeat a student once per activity, and students with no activity have no rows at all. Classify each student first, then count students."}},{"@type":"Question","name":"Should students who have left be included?","acceptedAnswer":{"@type":"Answer","text":"No. Limit the population to active enrolments, or every reach rate will look worse than it is."}}]},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://twinstack.net/"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://twinstack.net/blog"},{"@type":"ListItem","position":3,"name":"Who Did We Miss? Using Tableau to Find Students With No Programme Contact","item":"https://twinstack.net/blog/tableau-unreached-students-dashboard"}]}]}</script>
