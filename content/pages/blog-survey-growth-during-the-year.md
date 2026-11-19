---
title: "Did Things Get Better This Year? How to Measure Survey Growth from Start to End"
slug: blog-survey-growth-during-the-year
url: /blog/survey-growth-during-the-year.html
order: 53
description: How a Growth dashboard compares start-of-year and end-of-year survey results on one page, and why the results surprised the team.
date: 2026-11-17
metaTitle: "Measure Survey Growth from Start to End of Year | TwinStack"
metaDescription: Learn how a Growth dashboard compares fall and spring survey scores with two dots and a line, and how it revealed a gap between family and teacher results.
focusKeyword: measure survey growth
tags:
  - Tableau
  - Salesforce
  - Survey dashboards
  - Growth during the year
---

<section class="relative overflow-hidden border-b border-zinc-200 bg-linear-to-b from-zinc-50 to-white">
  <div class="pointer-events-none absolute -top-32 right-0 h-80 w-80 rounded-full bg-brand/10 blur-3xl" aria-hidden="true"></div>
  <div class="relative mx-auto max-w-3xl px-5 pb-12 pt-14 sm:px-8 md:pb-16 md:pt-20">
    <a href="/blog.html" class="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-zinc-600 transition hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">
      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
      Back to the blog
    </a>
    <ul class="mt-6 flex flex-wrap gap-2" aria-label="Tags">
      {{# each page.tags }}<li class="rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm font-medium text-zinc-700">{{ this }}</li>
      {{/ each }}
    </ul>
    <h1 class="mt-6 text-4xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-5xl md:text-[3.25rem] md:leading-[1.1]">Did Things Get Better This Year? How to Measure Survey Growth from Start to End</h1>
    <p class="mt-6 text-xl leading-relaxed text-zinc-700">A survey tells you where you are. Two surveys tell you which way you are heading. Here is how one dashboard shows the difference.</p>
    <div class="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-600">
      <span class="font-medium text-zinc-900">TwinStack Team</span>
      <span aria-hidden="true" class="h-1 w-1 rounded-full bg-zinc-300"></span>
      <time datetime="2026-11-17">{{ page.dateFormatted }}</time>
      <span aria-hidden="true" class="h-1 w-1 rounded-full bg-zinc-300"></span>
      <span>{{ page.readingTime }}</span>
    </div>
  </div>
</section>

<!-- BLOG IMAGE PLACEHOLDER: to add your image, replace the empty grey box below with
     your blog image (full width, rounded corners) -->
<section class="bg-white">
  <div class="mx-auto max-w-3xl px-5 pt-10 sm:px-8 md:pt-12">
    <figure>
      <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_1200,f_auto,q_auto/v1795012081/survey-growth-during-the-year-fall-to-spring_xlgszy.png" alt="Measuring survey growth from fall to spring" width="1200" height="675" class="aspect-video w-full rounded-2xl object-cover shadow-sm">
    </figure>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <p class="text-xl font-medium leading-relaxed text-zinc-900">Every program wants to answer one question at the end of the year: "Did we make a difference?"</p>
    <div class="prose prose-zinc prose-lg mt-6 max-w-none prose-a:text-brand">
      <p>Surveys can help, but only if you ask the same questions at the start and again at the end, and then compare the two on one page. This post shows how a Growth dashboard does exactly that, and why it surprised the team. (The program name is masked and all figures are example data.)</p>
    </div>
  </div>
</section>

<section class="border-t border-zinc-200 bg-zinc-50">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <p class="text-sm font-bold uppercase tracking-widest text-brand">01 · The problem</p>
    <h2 class="mt-2 text-3xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-4xl">A single survey is a snapshot, not a story</h2>
    <div class="prose prose-zinc prose-lg mt-6 max-w-none prose-a:text-brand">
      <p>A family-engagement program surveys families and teachers twice a year, once in the fall (the start) and once in the spring (the end). Leaders knew the spring score. What they did not know was how it compared with the fall.</p>
      <p>A spring score of 68.9% could be a success if families started at 55%. It could be a worry if they started at 80%. Without the starting point, the number has no meaning. Putting two reports side by side by hand was slow, and small differences were easy to miss.</p>
    </div>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <p class="text-sm font-bold uppercase tracking-widest text-brand">02 · The dashboard</p>
    <h2 class="mt-2 text-3xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-4xl">Two dots and a line</h2>
    <div class="prose prose-zinc prose-lg mt-6 max-w-none prose-a:text-brand">
      <p>The Growth dashboard has two views.</p>
      <h3>1. Growth by question</h3>
      <p>Each question gets a row with two dots: the start-of-year score on the left and the end-of-year score on the right, joined by a line. The change in points is written in the middle, for example "+8.1". A long line means a lot of movement. A tiny line means nothing moved. You do not need a legend to read it.</p>
      <h3>2. Growth by topic</h3>
      <p>One bar per topic showing how many points it moved. Bars to the right mean improvement. Bars to the left mean decline. A clear zero line sits in the middle.</p>
      <p>Both views work for families and for teachers, and the dashboard never mixes the two groups.</p>
    </div>
  </div>
</section>

<section class="border-t border-zinc-200 bg-zinc-50">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <p class="text-sm font-bold uppercase tracking-widest text-brand">03 · What growth showed</p>
    <h2 class="mt-2 text-3xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-4xl">What the growth showed</h2>
    <div class="prose prose-zinc prose-lg mt-6 max-w-none prose-a:text-brand">
      <h3>For families, the year went well</h3>
      <p>The positive score rose from 63.7% to 68.9%, a gain of 5.2 points.</p>
      <ul>
        <li>Belonging improved the most, up 7.3 points.</li>
        <li>Academic Information gained 6.0, and Trust gained 5.8.</li>
        <li>Communication moved only 1.8 points.</li>
      </ul>
      <p>The question view added detail. "I feel welcome when I visit my child's school" jumped 8.1 points, the biggest gain. "The school communicates with me in a language I understand" moved just 0.4. It was already among the lowest-scoring questions, and it was the one that barely improved. That is a clear signal about where to focus next.</p>
      <h3>Then came the surprise</h3>
      <p>The same dashboard for teachers told a different story. Their overall positive score slipped from 73.9% to 72.1%.</p>
      <ul>
        <li>Belonging rose 9.7 points.</li>
        <li>Trust fell 6.5 points, and Academic Information fell 7.1.</li>
      </ul>
      <p>Families felt more welcome and more informed, while teachers felt less supported on the same two topics. Nobody had planned to look for that. A topic-by-topic bar chart with a zero line made it impossible to miss.</p>
    </div>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <p class="text-sm font-bold uppercase tracking-widest text-brand">04 · Stakeholders</p>
    <h2 class="mt-2 text-3xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-4xl">Why it matters to each stakeholder</h2>
    <div class="prose prose-zinc prose-lg mt-6 max-w-none prose-a:text-brand">
      <ul>
        <li><strong>Program directors:</strong> can answer "did we make a difference?" with evidence, and can see where the answer is "not yet".</li>
        <li><strong>Funders and the board:</strong> see progress as change over time, not a single score that is hard to judge.</li>
        <li><strong>School coordinators:</strong> learn which topics improved and which stood still, and can plan the next year around the stuck ones.</li>
        <li><strong>Principals:</strong> get an early prompt to talk with teachers when a score falls, before it becomes a retention problem.</li>
      </ul>
    </div>
  </div>
</section>

<section class="border-t border-zinc-200 bg-zinc-50">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <p class="text-sm font-bold uppercase tracking-widest text-brand">05 · A note on honesty</p>
    <h2 class="mt-2 text-3xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-4xl">What the dashboard cannot prove</h2>
    <div class="prose prose-zinc prose-lg mt-6 max-w-none prose-a:text-brand">
      <p>The dashboard shows what changed. It does not prove why. A rise in family scores may come from the program, a new school leader or something unrelated. The best use of growth numbers is to start a conversation, not to end one.</p>
      <p>The dashboard also shows only years with both surveys, so a year with only a start-of-year survey does not appear until the spring results arrive.</p>
    </div>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <p class="text-sm font-bold uppercase tracking-widest text-brand">06 · The takeaway</p>
    <h2 class="mt-2 text-3xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-4xl">Scores become evidence of progress</h2>
    <p class="mt-6 rounded-r-2xl border-l-4 border-brand bg-zinc-50 px-6 py-5 text-lg leading-snug text-zinc-900">A survey tells you where you are. Two surveys tell you which way you are heading. A dashboard that puts them side by side, with the change written in plain numbers, turns a collection of scores into evidence of progress.</p>
  </div>
</section>

<section class="relative overflow-hidden bg-zinc-950">
  <div class="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/30 blur-3xl" aria-hidden="true"></div>
  <div class="relative mx-auto flex max-w-4xl flex-col gap-8 px-5 py-14 sm:px-8 md:flex-row md:items-center md:justify-between md:py-20">
    <div class="max-w-xl">
      <h2 class="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">Want your survey results to drive decisions?</h2>
      <p class="mt-3 text-lg leading-relaxed text-zinc-300">Talk to us about Salesforce and Tableau survey dashboards.</p>
    </div>
    <a href="/contact.html" class="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-semibold text-zinc-950 shadow-lg ring-1 ring-white/20 transition hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Contact TwinStack</a>
  </div>
</section>

<section class="border-t border-zinc-200 bg-white">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <h2 class="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">Related reading</h2>
    <ul class="mt-6 grid gap-4 sm:grid-cols-2">
      <li><a href="/blog/survey-data-to-action.html" class="flex h-full min-h-11 items-start justify-between gap-3 rounded-2xl border border-zinc-200 bg-white p-5 font-semibold leading-snug text-zinc-950 shadow-sm transition hover:border-brand/40 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"><span>From Survey Data to Action: How Salesforce and Tableau Turn Feedback into Decisions</span></a></li>
      <li><a href="/blog/survey-overview-dashboard.html" class="flex h-full min-h-11 items-start justify-between gap-3 rounded-2xl border border-zinc-200 bg-white p-5 font-semibold leading-snug text-zinc-950 shadow-sm transition hover:border-brand/40 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"><span>How to Read Survey Results in 5 Minutes: A Simple Survey Overview Dashboard</span></a></li>
      <li><a href="/blog/survey-topics-and-questions.html" class="flex h-full min-h-11 items-start justify-between gap-3 rounded-2xl border border-zinc-200 bg-white p-5 font-semibold leading-snug text-zinc-950 shadow-sm transition hover:border-brand/40 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"><span>How to Rank Survey Questions and Know Exactly Where to Act</span></a></li>
      <li><a href="/blog/survey-year-over-year.html" class="flex h-full min-h-11 items-start justify-between gap-3 rounded-2xl border border-zinc-200 bg-white p-5 font-semibold leading-snug text-zinc-950 shadow-sm transition hover:border-brand/40 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"><span>Is This Year Better Than Last? How to Compare Survey Results Year over Year</span></a></li>
      <li><a href="/blog/survey-school-comparison.html" class="flex h-full min-h-11 items-start justify-between gap-3 rounded-2xl border border-zinc-200 bg-white p-5 font-semibold leading-snug text-zinc-950 shadow-sm transition hover:border-brand/40 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"><span>How One Program Used Survey Data to Decide Which Schools Need Support First</span></a></li>
    </ul>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto max-w-3xl px-5 pb-12 sm:px-8 md:pb-16">
    <a href="/blog.html" class="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-zinc-600 transition hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">
      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
      Back to the blog
    </a>
  </div>
</section>
