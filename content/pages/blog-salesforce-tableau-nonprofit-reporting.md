---
title: "Salesforce and Tableau for Nonprofits: Find Missed Students"
description: "How we used Salesforce and Tableau to show a family engagement programme which students it reached and which it missed, with seven dashboards on one data model."
metaTitle: "Salesforce and Tableau for Nonprofits: Find Missed Students"
metaDescription: "How we used Salesforce and Tableau to show a family engagement programme which students it reached and which it missed, with seven dashboards on one data model."
focusKeyword: Salesforce Tableau nonprofit reporting
slug: blog-salesforce-tableau-nonprofit-reporting
url: /blog/salesforce-tableau-nonprofit-reporting.html
ogImage: "https://res.cloudinary.com/du42kbmmn/image/upload/w_1200,f_auto,q_auto/v1794299312/salesforce-tableau-nonprofit-reporting-overview_xitypq.png"
order: 50
stylesheet: /assets/css/imported/blog-salesforce-tableau-nonprofit-reporting.css
hideCta: true
scripts:
  - src: "/assets/js/imported/blog-salesforce-tableau-nonprofit-reporting/inline-1.js"
    head: true
    module: false
    nomodule: false
    defer: false
    async: false
  - src: "/assets/js/imported/blog-salesforce-tableau-nonprofit-reporting/ts-analytics.js"
    head: true
    module: false
    nomodule: false
    defer: true
    async: false
  - src: "/assets/js/imported/blog-salesforce-tableau-nonprofit-reporting/inline-2.js"
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
            <h1 class="imp-text-3xl imp-md:text-5xl imp-font-extrabold imp-text-white imp-mb-6 imp-leading-tight">Beyond Salesforce Reports: How We Used Tableau to Find the Students a Nonprofit Missed</h1>
            <div class="imp-flex imp-items-center imp-justify-center imp-gap-6 imp-text-slate-400 imp-text-sm">
                <div><svg class="imp-svgi imp-mr-2" aria-hidden="true"><use href="#i-calendar" /></svg>4 November 2026</div>
                <div><svg class="imp-svgi imp-mr-2" aria-hidden="true"><use href="#i-user" /></svg>By TwinStack Solutions · 8 min read</div>
            </div>
            <div class="imp-ts-get-app-wrap"><a href="/services/tableau.html" class="imp-ts-get-app" aria-label="See TwinStack&#x27;s Tableau dashboard services">Tableau dashboards for Salesforce <svg viewBox="0 0 448 512" aria-hidden="true" fill="currentColor"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg></a></div>
        </div>
    </header>
    <section class="imp-py-20 imp-bg-white imp-relative">
        <div class="imp-max-w-3xl imp-mx-auto imp-px-6">
            <a href="/blog.html" class="imp-inline-flex imp-items-center imp-gap-2 imp-text-brand-600 imp-font-semibold imp-mb-8 imp-hover:underline">
                <svg class="imp-svgi" aria-hidden="true"><use href="#i-arrow-left" /></svg> Back to Blog
            </a>
            <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_800,f_auto,q_auto/v1794299312/salesforce-tableau-nonprofit-reporting-overview_xitypq.png" alt="Cover for Beyond Salesforce Reports: a dot chart of student reach by school and programme, with School D highlighted as lowest" width="1200" height="675" fetchpriority="high" class="imp-ts-hero-img imp-rounded-xl imp-shadow-lg imp-mb-10">
            <article>
                <p class="imp-text-xl imp-text-slate-600 imp-font-medium imp-mb-8"><strong>Short answer:</strong> Salesforce reports are often the right tool for operational counts, and they sit where staff already work. Tableau earns its place when the questions cut across many related objects, need counting at the student level rather than the activity level, and have to stay consistent across several dashboards. This case study shows where each tool fits in a real nonprofit project.</p>
<p>Funders, boards and programme leaders no longer ask only how much activity a nonprofit delivered. They ask who it reached, and who it missed. Salesforce is where that activity gets recorded. The harder question is what the record says once thousands of visits, calls and meetings are sitting in it.</p>
<p>We built a Salesforce and Tableau analytics solution for a school-based family engagement programme. It is a useful project for looking at where each tool earns its place.</p>
<h2 id="the-business-challenge">The business challenge</h2>
<p>The programme does three kinds of work with families. Relationship Building covers home and community visits. Academic Partnering is a set of structured touchpoints across numbered windows in the school year. Ongoing Communications covers calls, meetings and messages by channel. Educators on each school's roster take part in all of it. Every interaction is recorded in Salesforce as an activity tied to a student's enrolment.</p>
<p>The questions that matter cut across those records:</p>
<ul>
<li>Which active students have had no contact of any kind?</li>
<li>Is one school falling behind the others?</li>
<li>Are students in certain grades, or of a certain gender or race, reached less often than average?</li>
<li>Which eligible educators have logged nothing?</li>
</ul>
<p>Each answer means connecting activities to enrolments, enrolments to students and schools, and activities to educators, then counting at the right level.</p>
<h2 id="why-salesforce-reporting-alone-was-not-enough-for-these-requirements">Why Salesforce reporting alone was not enough for these requirements</h2>
<p>Salesforce native reporting is capable. Custom report types span related objects, joined reports place several blocks side by side, cross filters find records with or without related records, and row-level and summary formulas cover a lot of calculation. For a count of activities by school this month, a Salesforce report and dashboard is often the right answer.</p>
<p>Our requirements leaned on three other things:</p>
<ul>
<li><strong>Model.</strong> The data spans nine objects, and some play more than one role. Account is a student's school, an educator's school and a parent organisation. School Year links to both enrolments and rosters.</li>
<li><strong>Grain.</strong> The headline measures are about students, not activities. A student counts as reached in Academic Partnering only after activity in at least two distinct windows, and Ongoing Communications is tiered at one, two, or three or more touchpoints. You classify each student first, then count students by class.</li>
<li><strong>Presentation.</strong> Heat tables, comparisons by gender, race and grade, and one School and School Year filter carried across the dashboards.</li>
</ul>
<p>All three can be approximated in native reports with enough custom report types and formulas. In our build, Tableau's data model and calculation language made them easier to construct, change and keep consistent. That is a judgement about fit, not a hard limit of Salesforce.</p>
<h2 id="our-salesforce-and-tableau-solution">Our Salesforce and Tableau solution</h2>
<p>Salesforce stays the system of record. Tableau connects to it and models the objects through relationships rather than physical joins. In a relationship, each table keeps its own level of detail and Tableau builds the joins at query time from the fields in the view (<a href="https://help.tableau.com/current/online/en-gb/datasource_relationships_learnmorepage.htm" target="_blank" rel="noopener">Tableau documentation</a>). That matters when one enrolment has many activities, because a pre-merged table would repeat the enrolment on every activity row and inflate student counts.</p>
<p>We added our own safeguards. Counts use distinct record IDs, so a student with twelve visits is still one student. Student-level status fields use <a href="https://help.tableau.com/current/pro/desktop/en-gb/calculations_calculatedfields_lod_fixed.htm" target="_blank" rel="noopener">FIXED level-of-detail expressions</a>, which compute at the dimensions you name and ignore the rest of the view. The business rules sit in named calculated fields: active enrolment only, home versus community visit, windows reached and touchpoint tiers. A meeting-type parameter filters communications. The workbook was published to Tableau Cloud.</p>
<h2 id="seven-dashboards-seven-business-perspectives">Seven dashboards, seven business perspectives</h2>
<p>Every dashboard carries the same School Year and School Name filters and a left-hand menu that links all seven. Filter actions tie each chart to the list beside it: selecting a mark, such as a slice of the status donut or a dot on the race, gender or grade chart, narrows the student list to the students behind that mark.</p>
<h3 id="overview">Overview</h3>
<p>Asks where the programme stands and where to look first. It shows reach across the three programme areas, a trend over time and a school scorecard, so a leader can spot the school or programme that is lagging before opening anything else.</p>
<h3 id="relationship-building">Relationship Building</h3>
<p>Asks whether visits are reaching students, and what kind. A donut splits active students into home-visit reached, community-visit reached and unreached, a monthly view shows the rhythm of visits, and reach by gender, race and grade is set against the school average, with marks coloured above or below it. Clicking the unreached slice, or a race, gender or grade mark, filters Student Details to those students, so a coordinator goes from a pattern to names in one step.</p>
<h3 id="academic-partnering">Academic Partnering</h3>
<p>Asks whether contact is sustained across the school year. It counts the windows in which each student was reached, which shows where reach drops between windows, and the same group comparisons and click-to-filter list apply.</p>
<h3 id="ongoing-communications">Ongoing Communications</h3>
<p>Asks how deep contact goes and through which channels. It shows the share of students with none, one, two, or three or more touchpoints, communication volume by month and channel, and reach at three or more touchpoints by gender, race and grade.</p>
<h3 id="unreached-students">Unreached Students</h3>
<p>Asks who has had no contact. It turns the gaps into named lists by programme, plus the students with no activity in any programme, which is the follow-up list for the week.</p>
<h3 id="educator-activity">Educator Activity</h3>
<p>Asks which educators are taking part. It compares eligible educators with active ones and bands them by activity volume, so a roster with silent members stands out.</p>
<h3 id="activity-detail">Activity Detail</h3>
<p>Asks what records sit behind a number. It lists activities with student, grade, gender, race, activity date, group and subtype, and can be narrowed by school year, school, meeting type and activity group, so any figure on another dashboard can be checked against its source records.</p>
<p>The three programme dashboards compare reach by gender, race and grade against the school average. Because those marks also act as filters, the equity question and the follow-up list are one click apart.</p>
<h2 id="business-impact">Business impact</h2>
<p>The value of the solution lies in the specific reporting problems it removes. We have not measured outcomes, and this post does not claim any.</p>
<ul>
<li><strong>One definition of "reached".</strong> The rules for each programme (a home or community visit, two or more windows, one to three or more touchpoints) are written into calculated fields, so every dashboard applies them the same way and a change is made once.</li>
<li><strong>Accurate student counts.</strong> A relationship-based data model, distinct counts and student-level calculations keep a student with many activities from being counted many times, so reach rates reflect students and not activity rows.</li>
<li><strong>Gaps that can be acted on.</strong> Unreached students are identified by name, by programme and by school, which turns a percentage into a follow-up list for coordinators.</li>
<li><strong>Equity visibility.</strong> Reach by gender, race and grade is compared with the school average on the same dashboard, and a click on any mark filters the student list behind it.</li>
<li><strong>A traceable audit trail.</strong> Activity Detail exposes the underlying records, so any figure shown to leadership can be checked against its source in Salesforce.</li>
<li><strong>A single analytical view for leadership.</strong> Seven dashboards share one model and one set of filters, so leaders do not have to reconcile separate reports.</li>
</ul>
<h2 id="conclusion">Conclusion</h2>
<p>Salesforce records what the organisation does. Tableau helps it understand what that record means, by connecting perspectives that live in different objects, classifying students at the right grain, and showing patterns that a list of activities hides. Choosing between them is not about which one draws nicer charts. It is about the questions you need answered, the reliability of the data model, and the decisions that follow.</p>
<h2 id="faq">Frequently asked questions</h2>
<h3 class="imp-q">Should a nonprofit use Salesforce reports or Tableau?</h3>
<p>Use Salesforce reports and dashboards for operational counts, such as activities by school this month. Consider Tableau when questions span many related objects, need student-level counting and must stay consistent across several dashboards.</p>
<h3 class="imp-q">Does Tableau replace Salesforce?</h3>
<p>No. In this project Salesforce stays the system of record where staff log activity and data is governed. Tableau connects to Salesforce and sits on top for cross-object analysis.</p>
<h3 class="imp-q">How do you stop Tableau double-counting students?</h3>
<p>Use relationships rather than flattened joins, count distinct record IDs, and calculate student-level status with FIXED level-of-detail expressions before counting students.</p>
<h3 class="imp-q">Can these dashboards be built in Salesforce alone?</h3>
<p>Much of it can be approximated with custom report types, joined reports, cross filters and formulas. The choice is about how much custom reporting you want to build and maintain, not about what is possible.</p>
                <div class="imp-ts-final"><p class="imp-np-cta">Working out whether your nonprofit needs Tableau or better Salesforce reports? See our <a href="/services/salesforce-nonprofit.html">Salesforce for nonprofits services</a> or read on through the series.</p><div class="imp-row"><a class="imp-b1" href="https://calendar.app.google/HP3LiuNFisCt6xLo6" target="_blank" rel="noopener">Book a free 45-minute call <svg width="14" height="14" viewBox="0 0 448 512" aria-hidden="true" fill="currentColor"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></a><a class="imp-b2" href="/services/tableau.html">Tableau dashboards</a></div></div>
                <div class="imp-ts-related"><h2>More in this series</h2><ul><li><a href="/blog/tableau-unreached-students-dashboard.html">Who Did We Miss? Using Tableau to Find Students With No Programme Contact</a></li><li><a href="/blog/tableau-relationship-building-dashboard.html">Relationship-Building Metrics That Matter: A Tableau Dashboard for Visit Coverage and Equity</a></li><li><a href="/blog/tableau-academic-partnering-dashboard.html">Is Your Academic Partnering Consistent? How to Track Student Reach Across the School Year with Tableau</a></li><li><a href="/blog/nonprofit-communication-analytics-tableau.html">Nonprofit Communication Analytics: Tracking Touchpoints, Channels and Two-Way Contact in Salesforce and Tableau</a></li><li><a href="/blog/nonprofit-performance-dashboard-tableau.html">Why Your Nonprofit&#x27;s Dashboards Disagree, and How a Single Tableau Data Model Fixes It</a></li></ul></div>
            </article>
            <div class="imp-mt-16 imp-pt-8 imp-border-t imp-border-slate-200">
                <a href="/blog.html" class="imp-inline-flex imp-items-center imp-gap-2 imp-text-brand-600 imp-font-bold imp-hover:underline">
                    <svg class="imp-svgi" aria-hidden="true"><use href="#i-arrow-left" /></svg> Return to All Insights
                </a>
            </div>
        </div>
    </section>
</div>

<script type="application/ld+json" id="ts-schema">{"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","headline":"Beyond Salesforce Reports: How We Used Tableau to Find the Students a Nonprofit Missed","description":"How we used Salesforce and Tableau to show a family engagement programme which students it reached and which it missed, with seven dashboards on one data model.","image":"https://res.cloudinary.com/du42kbmmn/image/upload/w_1200,f_auto,q_auto/v1794299312/salesforce-tableau-nonprofit-reporting-overview_xitypq.png","author":{"@type":"Organization","@id":"https://twinstack.net/#organization","name":"TwinStack Solutions","url":"https://twinstack.net/"},"publisher":{"@id":"https://twinstack.net/#organization"},"datePublished":"2026-11-04","dateModified":"2026-11-04","inLanguage":"en-GB","keywords":"Salesforce Tableau nonprofit reporting, Tableau for nonprofits, Salesforce reports vs Tableau, nonprofit programme dashboard, family engagement data","mainEntityOfPage":{"@type":"WebPage","@id":"https://twinstack.net/blog/salesforce-tableau-nonprofit-reporting"},"about":{"@type":"Thing","name":"Tableau"}},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Should a nonprofit use Salesforce reports or Tableau?","acceptedAnswer":{"@type":"Answer","text":"Use Salesforce reports and dashboards for operational counts, such as activities by school this month. Consider Tableau when questions span many related objects, need student-level counting and must stay consistent across several dashboards."}},{"@type":"Question","name":"Does Tableau replace Salesforce?","acceptedAnswer":{"@type":"Answer","text":"No. In this project Salesforce stays the system of record where staff log activity and data is governed. Tableau connects to Salesforce and sits on top for cross-object analysis."}},{"@type":"Question","name":"How do you stop Tableau double-counting students?","acceptedAnswer":{"@type":"Answer","text":"Use relationships rather than flattened joins, count distinct record IDs, and calculate student-level status with FIXED level-of-detail expressions before counting students."}},{"@type":"Question","name":"Can these dashboards be built in Salesforce alone?","acceptedAnswer":{"@type":"Answer","text":"Much of it can be approximated with custom report types, joined reports, cross filters and formulas. The choice is about how much custom reporting you want to build and maintain, not about what is possible."}}]},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://twinstack.net/"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://twinstack.net/blog"},{"@type":"ListItem","position":3,"name":"Beyond Salesforce Reports: How We Used Tableau to Find the Students a Nonprofit Missed","item":"https://twinstack.net/blog/salesforce-tableau-nonprofit-reporting"}]}]}</script>
