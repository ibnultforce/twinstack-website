---
title: "Nonprofit Performance Dashboard: One Tableau Data Model"
description: "Why nonprofit dashboards disagree, and how one Salesforce and Tableau data model with shared filters and definitions keeps seven dashboards consistent."
metaTitle: "Nonprofit Performance Dashboard: One Tableau Data Model"
metaDescription: "Why nonprofit dashboards disagree, and how one Salesforce and Tableau data model with shared filters and definitions keeps seven dashboards consistent."
focusKeyword: nonprofit performance dashboard
slug: blog-nonprofit-performance-dashboard-tableau
url: /blog/nonprofit-performance-dashboard-tableau.html
ogImage: "https://res.cloudinary.com/du42kbmmn/image/upload/w_1200,f_auto,q_auto/v1794299316/nonprofit-performance-dashboard-tableau_kvghxj.png"
order: 50
stylesheet: /assets/css/imported/blog-nonprofit-performance-dashboard-tableau.css
hideCta: true
scripts:
  - src: "/assets/js/imported/blog-nonprofit-performance-dashboard-tableau/inline-1.js"
    head: true
    module: false
    nomodule: false
    defer: false
    async: false
  - src: "/assets/js/imported/blog-nonprofit-performance-dashboard-tableau/ts-analytics.js"
    head: true
    module: false
    nomodule: false
    defer: true
    async: false
  - src: "/assets/js/imported/blog-nonprofit-performance-dashboard-tableau/inline-2.js"
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
            <h1 class="imp-text-3xl imp-md:text-5xl imp-font-extrabold imp-text-white imp-mb-6 imp-leading-tight">Why Your Nonprofit&#x27;s Dashboards Disagree, and How a Single Tableau Data Model Fixes It</h1>
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
            <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_800,f_auto,q_auto/v1794299316/nonprofit-performance-dashboard-tableau_kvghxj.png" alt="Cover for Why Your Nonprofit&#x27;s Dashboards Disagree: nine Salesforce objects feeding one data model and seven dashboards" width="1200" height="675" fetchpriority="high" class="imp-ts-hero-img imp-rounded-xl imp-shadow-lg imp-mb-10">
            <article>
                <p class="imp-text-xl imp-text-slate-600 imp-font-medium imp-mb-8"><strong>Short answer:</strong> a nonprofit performance dashboard is a consistent data model with several views on it, not a bigger dashboard. Define each measure once, calculate at the student level, and share the same filters across every view.</p>
<p>Most nonprofits do not lack data. They lack a place where the data agrees with itself. Relationship-building numbers come from one report, communications from another, educator participation from a spreadsheet someone updates by hand. Each is correct on its own terms, and together they do not add up to a picture.</p>
<p>A "360-degree" view is the answer people reach for. It is also an easy phrase to overuse. In our <a href="/blog/salesforce-tableau-nonprofit-reporting.html">Salesforce and Tableau project</a> it has a specific, limited meaning: one workbook, one data model and one set of filters covering student reach across three programme areas, school by school, along with educator participation. It does not cover fundraising, finance or anything else outside that scope.</p>
<h2 id="start-with-one-data-model-not-seven-dashboards">Start with one data model, not seven dashboards</h2>
<p>The most important decision was not a chart. It was building a single data model that every dashboard reads. The workbook connects to Salesforce and relates nine objects: students, enrolments, family engagement activities, academic partnering windows, school years, school participation, educator rosters, and the standard Account and Contact objects for schools and educators. Some of those appear more than once, because the same object plays different roles. Account is a student's school in one place and an educator's school in another.</p>
<p>Because every dashboard draws on that model, a figure means the same thing wherever it appears. "Active enrolled students" is defined once. "Reached" is defined once per programme. When a definition changes, it changes in one place.</p>
<p>This is where Tableau's relationships help. Each table keeps its own level of detail and Tableau builds joins at query time from the fields in use (<a href="https://help.tableau.com/current/online/en-gb/datasource_relationships_learnmorepage.htm" target="_blank" rel="noopener">Tableau documentation</a>), which reduces the risk of repeated rows inflating counts when objects of different grain are combined.</p>
<h2 id="how-the-seven-views-fit-together">How the seven views fit together</h2>
<p>The order matters. The Overview carries headline tiles for enrolled students and reach in each programme, a trend of reach over time and a school scorecard. It tells a leader where to look. The three programme dashboards explain why. Unreached Students makes the gaps actionable. Educator Activity looks at the people doing the work. Activity Detail is the audit trail.</p>
<div class="imp-article-table-wrap"><table>
<thead>
<tr>
<th>Dashboard</th>
<th>The question it answers</th>
<th>Who is likely to use it</th>
</tr>
</thead>
<tbody>
<tr>
<td>Overview</td>
<td>Where do we stand across all programmes, and which schools stand out?</td>
<td>Executives, programme directors</td>
</tr>
<tr>
<td>Relationship Building</td>
<td>Are visits reaching students, and of which type?</td>
<td>Programme managers</td>
</tr>
<tr>
<td>Academic Partnering</td>
<td>Is reach sustained across windows?</td>
<td>Programme managers</td>
</tr>
<tr>
<td>Ongoing Communications</td>
<td>How deep and how two-way is contact?</td>
<td>Communications and programme leads</td>
</tr>
<tr>
<td>Unreached Students</td>
<td>Who has had no contact?</td>
<td>Coordinators</td>
</tr>
<tr>
<td>Educator Activity</td>
<td>Which educators are taking part, and which are not?</td>
<td>Programme managers, school leads</td>
</tr>
<tr>
<td>Activity Detail</td>
<td>What are the records behind a number?</td>
<td>Analysts, administrators</td>
</tr>
</tbody>
</table></div>
<h2 id="what-holds-a-nonprofit-performance-dashboard-together">What holds a nonprofit performance dashboard together</h2>
<ul>
<li><strong>Shared filters.</strong> School and School Year filters appear on the dashboards, so a user can move between views looking at the same school and year.</li>
<li><strong>Shared definitions.</strong> Reach, status labels and the active-enrolment rule live in calculated fields and are reused by every view.</li>
<li><strong>Shared grain.</strong> Student-level measures are calculated per student with <a href="https://help.tableau.com/current/pro/desktop/en-gb/calculations_calculatedfields_lod_fixed.htm" target="_blank" rel="noopener">FIXED level-of-detail expressions</a>, then counted. A student is a student whether they appear in a KPI tile, a status bar or a list.</li>
</ul>
<p>Filter actions connect the charts to the lists. Selecting a mark, such as the unreached slice of a status donut or a race, gender or grade mark, narrows the student list on that dashboard, and a left-hand menu links the seven dashboards.</p>
<h2 id="where-a-360-degree-view-earns-its-keep">Where a 360-degree view earns its keep</h2>
<p>The following is a hypothetical scenario, not project data. A director sees on the Overview that one school's communications reach is lower than its peers. On the Ongoing Communications dashboard, the shortfall is in two-way contact. The Unreached Students list names the students with no contact, and the Educator Activity view shows that several eligible educators at that school have logged nothing. Four dashboards, one school, one conversation. No single report in that chain would have told the whole story.</p>
<h2 id="salesforce-and-tableau-in-the-same-picture">Salesforce and Tableau in the same picture</h2>
<p>Salesforce remains the place where staff record activity and where the data is governed. Nothing in this solution replaces that. Salesforce dashboards will continue to serve day-to-day operational views well. Tableau sits on top for the cross-object analysis, the student-level logic and the layout flexibility that a leadership-level view needs. Salesforce also has its own analytics offerings, so the choice is not binary, and the right mix depends on your team's skills, licensing and questions.</p>
<h2 id="what-to-build-first-if-you-are-starting">What to build first if you are starting</h2>
<ol start="4" type="1">
<li>Agree on definitions in plain language: who counts as enrolled, what counts as reached.</li>
<li>Check that the Salesforce data supports them, since a dashboard cannot reveal what was never recorded.</li>
<li>Model the objects and their grain before drawing anything.</li>
<li>Build the Overview last, from the same calculations as the detailed views.</li>
<li>Add record-level detail, so every number can be checked.</li>
</ol>
<h2 id="the-takeaway-4">The takeaway</h2>
<p>A 360-degree dashboard is a consistent data model with several views on it, not a bigger dashboard. Get the definitions and the grain right, and the seven perspectives will agree with each other. Get them wrong, and the most attractive Overview in the world will not be trusted.</p>
<h2 id="faq">Frequently asked questions</h2>
<h3 class="imp-q">Why do nonprofit dashboards disagree?</h3>
<p>Each report defines measures in its own way and counts at a different grain. One shared data model with shared definitions removes the disagreement.</p>
<h3 class="imp-q">What should a nonprofit build first?</h3>
<p>Plain-language definitions, then a check that Salesforce holds the data to support them, then the data model. Build the Overview last.</p>
<h3 class="imp-q">Does Tableau replace Salesforce dashboards?</h3>
<p>No. Salesforce dashboards suit day-to-day operational views. Tableau adds cross-object analysis for leadership.</p>
                <div class="imp-ts-final"><p class="imp-np-cta">Want dashboards like these for your programme? <a target="_blank" rel="noopener" href="https://calendar.app.google/HP3LiuNFisCt6xLo6">Book a free 45-minute call</a> or see our <a href="/services/tableau.html">Tableau dashboard services</a>.</p><div class="imp-row"><a class="imp-b1" href="https://calendar.app.google/HP3LiuNFisCt6xLo6" target="_blank" rel="noopener">Book a free 45-minute call <svg width="14" height="14" viewBox="0 0 448 512" aria-hidden="true" fill="currentColor"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></a><a class="imp-b2" href="/services/tableau.html">Tableau dashboards</a></div></div>
                <div class="imp-ts-related"><h2>More in this series</h2><ul><li><a href="/blog/salesforce-tableau-nonprofit-reporting.html">Beyond Salesforce Reports: How We Used Tableau to Find the Students a Nonprofit Missed</a></li><li><a href="/blog/tableau-unreached-students-dashboard.html">Who Did We Miss? Using Tableau to Find Students With No Programme Contact</a></li><li><a href="/blog/tableau-relationship-building-dashboard.html">Relationship-Building Metrics That Matter: A Tableau Dashboard for Visit Coverage and Equity</a></li><li><a href="/blog/tableau-academic-partnering-dashboard.html">Is Your Academic Partnering Consistent? How to Track Student Reach Across the School Year with Tableau</a></li><li><a href="/blog/nonprofit-communication-analytics-tableau.html">Nonprofit Communication Analytics: Tracking Touchpoints, Channels and Two-Way Contact in Salesforce and Tableau</a></li></ul></div>
            </article>
            <div class="imp-mt-16 imp-pt-8 imp-border-t imp-border-slate-200">
                <a href="/blog.html" class="imp-inline-flex imp-items-center imp-gap-2 imp-text-brand-600 imp-font-bold imp-hover:underline">
                    <svg class="imp-svgi" aria-hidden="true"><use href="#i-arrow-left" /></svg> Return to All Insights
                </a>
            </div>
        </div>
    </section>
</div>

<script type="application/ld+json" id="ts-schema">{"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","headline":"Why Your Nonprofit's Dashboards Disagree, and How a Single Tableau Data Model Fixes It","description":"Why nonprofit dashboards disagree, and how one Salesforce and Tableau data model with shared filters and definitions keeps seven dashboards consistent.","image":"https://res.cloudinary.com/du42kbmmn/image/upload/w_1200,f_auto,q_auto/v1794299316/nonprofit-performance-dashboard-tableau_kvghxj.png","author":{"@type":"Organization","@id":"https://twinstack.net/#organization","name":"TwinStack Solutions","url":"https://twinstack.net/"},"publisher":{"@id":"https://twinstack.net/#organization"},"datePublished":"2026-11-04","dateModified":"2026-11-04","inLanguage":"en-GB","keywords":"nonprofit performance dashboard, 360-degree nonprofit dashboard, Salesforce Tableau data model, nonprofit KPI dashboard, shared filters","mainEntityOfPage":{"@type":"WebPage","@id":"https://twinstack.net/blog/nonprofit-performance-dashboard-tableau"},"about":{"@type":"Thing","name":"Tableau"}},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Why do nonprofit dashboards disagree?","acceptedAnswer":{"@type":"Answer","text":"Each report defines measures in its own way and counts at a different grain. One shared data model with shared definitions removes the disagreement."}},{"@type":"Question","name":"What should a nonprofit build first?","acceptedAnswer":{"@type":"Answer","text":"Plain-language definitions, then a check that Salesforce holds the data to support them, then the data model. Build the Overview last."}},{"@type":"Question","name":"Does Tableau replace Salesforce dashboards?","acceptedAnswer":{"@type":"Answer","text":"No. Salesforce dashboards suit day-to-day operational views. Tableau adds cross-object analysis for leadership."}}]},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://twinstack.net/"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://twinstack.net/blog"},{"@type":"ListItem","position":3,"name":"Why Your Nonprofit's Dashboards Disagree, and How a Single Tableau Data Model Fixes It","item":"https://twinstack.net/blog/nonprofit-performance-dashboard-tableau"}]}]}</script>
