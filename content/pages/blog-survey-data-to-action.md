---
title: "From Survey Data to Action: How Salesforce and Tableau Turn Feedback into Decisions"
slug: blog-survey-data-to-action
url: /blog/survey-data-to-action.html
order: 50
description: How a family-engagement program kept survey answers in Salesforce and used Tableau dashboards to turn feedback into clear decisions.
date: 2026-11-17
metaTitle: "Survey Data to Action: Salesforce and Tableau | TwinStack"
metaDescription: See how Salesforce holds survey answers and Tableau turns them into six dashboards that show leaders where to act first, from headline results to school comparison.
focusKeyword: Salesforce Tableau survey dashboards
tags:
  - Tableau
  - Salesforce
  - Survey dashboards
  - Case story
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
    <h1 class="mt-6 text-4xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-5xl md:text-[3.25rem] md:leading-[1.1]">From Survey Data to Action: How Salesforce and Tableau Turn Feedback into Decisions</h1>
    <p class="mt-6 text-xl leading-relaxed text-zinc-700">How one family-engagement program stopped waiting weeks for survey results and started seeing, in minutes, where to act first.</p>
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
      <div class="aspect-video w-full rounded-2xl bg-zinc-100" aria-hidden="true"></div>
    </figure>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <p class="text-xl font-medium leading-relaxed text-zinc-900">Every spring and fall, families and teachers answer survey questions. Then the answers land in a spreadsheet, someone builds a slide deck, and by the time leaders read it, the school year has moved on.</p>
    <div class="prose prose-zinc prose-lg mt-6 max-w-none prose-a:text-brand">
      <p>That was the starting point for the family-engagement program in this story. A foundation supports schools. Families and educators answer the same short survey at the start of the year and again at the end. The questions cover four topics: Trust, Belonging, Communication and Academic Information.</p>
    </div>
  </div>
</section>

<section class="border-t border-zinc-200 bg-zinc-50">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <p class="text-sm font-bold uppercase tracking-widest text-brand">01 · The problem</p>
    <h2 class="mt-2 text-3xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-4xl">The real problem</h2>
    <div class="prose prose-zinc prose-lg mt-6 max-w-none prose-a:text-brand">
      <p>Leaders were asking simple questions:</p>
      <ul>
        <li>How do families feel about our partnership with the school?</li>
        <li>Did it get better during the year?</li>
        <li>Is this year better than last year?</li>
        <li>Which schools need help first?</li>
      </ul>
      <p>Each answer took days of counting by hand. Worse, one average across all schools hid the weakest ones. A school at 52% positive and a school at 91% were blended into a comfortable 69%.</p>
    </div>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <p class="text-sm font-bold uppercase tracking-widest text-brand">02 · Salesforce</p>
    <h2 class="mt-2 text-3xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-4xl">Step one: keep the answers in one place with Salesforce</h2>
    <div class="prose prose-zinc prose-lg mt-6 max-w-none prose-a:text-brand">
      <p>The program already tracked its schools, students and educators in Salesforce, so the survey data went there too: the surveys, the questions, each person's response and every individual answer. Each response is linked to a school, and family responses are linked to a student's grade.</p>
      <p>This matters because there is now one source of truth. If a record is fixed, every report shows the fix. And because answers sit next to the school and student records, we can ask who answered, not only what they said.</p>
    </div>
  </div>
</section>

<section class="border-t border-zinc-200 bg-zinc-50">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <p class="text-sm font-bold uppercase tracking-widest text-brand">03 · Tableau</p>
    <h2 class="mt-2 text-3xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-4xl">Step two: tell the story with Tableau</h2>
    <div class="prose prose-zinc prose-lg mt-6 max-w-none prose-a:text-brand">
      <p>We needed one simple measure. We called it the <strong>positive percent</strong>: the share of answers that were Agree or Strongly Agree, with blank answers left out. Anyone can read it.</p>
      <p>Tableau then turned that measure into six dashboards, each answering one plain question:</p>
    </div>
    <div class="mt-8 overflow-x-auto rounded-2xl border border-zinc-200 bg-white shadow-sm">
      <table class="w-full min-w-[34rem] border-collapse text-left text-base">
        <thead>
          <tr class="border-b border-zinc-200 bg-zinc-50 text-xs font-bold uppercase tracking-widest text-brand">
            <th scope="col" class="px-4 py-3">Dashboard</th>
            <th scope="col" class="px-4 py-3">The question it answers</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-zinc-200 align-top text-zinc-700">
          <tr><th scope="row" class="px-4 py-3 font-semibold text-zinc-950">Overview</th><td class="px-4 py-3">What is the headline result? Example: 407 families answered the end-of-year survey, and 68.9% of their answers were positive.</td></tr>
          <tr><th scope="row" class="px-4 py-3 font-semibold text-zinc-950">Topics and questions</th><td class="px-4 py-3">Which topic and which questions are weakest?</td></tr>
          <tr><th scope="row" class="px-4 py-3 font-semibold text-zinc-950">Growth during the year</th><td class="px-4 py-3">Did things improve? Family results rose 5.2 points, with Belonging up 7.3. Teacher results told a different story, with Trust down 6.5 points. Without this view, nobody would have noticed.</td></tr>
          <tr><th scope="row" class="px-4 py-3 font-semibold text-zinc-950">Year over year</th><td class="px-4 py-3">How does this year compare with last? One question, "teachers treat me as a partner", slipped two years in a row.</td></tr>
          <tr><th scope="row" class="px-4 py-3 font-semibold text-zinc-950">School comparison</th><td class="px-4 py-3">Which schools are ahead or behind? One school sat 22 points above the average, another 17 points below, and its weakest topic was Academic Information at 45.8%.</td></tr>
          <tr><th scope="row" class="px-4 py-3 font-semibold text-zinc-950">Who answered</th><td class="px-4 py-3">Which languages, grades and schools are represented, so leaders know how far to trust the result.</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <p class="text-sm font-bold uppercase tracking-widest text-brand">04 · Why Tableau</p>
    <h2 class="mt-2 text-3xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-4xl">Why we preferred Tableau for this work</h2>
    <div class="prose prose-zinc prose-lg mt-6 max-w-none prose-a:text-brand">
      <p>Salesforce's built-in reports and dashboards are excellent at what they were made for: lists of records, counts and quick charts, right where the team works. We used them to check the data, and they remain the right tool for day-to-day record work.</p>
      <p>Survey storytelling asks for something different, and that is where Tableau felt more natural to us. Here is what we kept reaching for:</p>
      <ul>
        <li><strong>A fair benchmark.</strong> Showing every school against the all-schools average, on one chart, with a clear zero line.</li>
        <li><strong>Change you can see.</strong> A start-of-year dot and an end-of-year dot on one line, with the gain written in the middle.</li>
        <li><strong>Honest comparisons across years.</strong> Two questions were reworded after the first year. Matching on question code kept the trend intact.</li>
        <li><strong>A colour map of strengths and gaps.</strong> A grid of schools by topic, where the weak spots light up at a glance.</li>
        <li><strong>Click and explore.</strong> Choose a topic and the question list beside it updates.</li>
        <li><strong>The right maths.</strong> Percentages worked out from answers, not records, with blanks left out.</li>
      </ul>
      <p>Each of these is possible in places elsewhere, but usually with workarounds. In Tableau they are ordinary steps, and the finished page reads like a story instead of a report. The data stays live from Salesforce, so the story updates itself.</p>
    </div>
  </div>
</section>

<section class="border-t border-zinc-200 bg-zinc-50">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <p class="text-sm font-bold uppercase tracking-widest text-brand">05 · Results</p>
    <h2 class="mt-2 text-3xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-4xl">What changed for the people using it</h2>
    <div class="prose prose-zinc prose-lg mt-6 max-w-none prose-a:text-brand">
      <p>The program director now reads the headline in minutes instead of waiting weeks. District leads can see which school to support first. School coordinators can see which topic to work on. The board can see whether the partnership is improving over time.</p>
      <p>Just as important, the dashboards say what they cannot say. Teacher results at one school may rest on only eight people, so a caution note sits beside them. Trust grows when a report is honest about its limits.</p>
    </div>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <p class="text-sm font-bold uppercase tracking-widest text-brand">06 · The takeaway</p>
    <h2 class="mt-2 text-3xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-4xl">Keep the data in Salesforce. Tell the story in Tableau.</h2>
    <p class="mt-6 rounded-r-2xl border-l-4 border-brand bg-zinc-50 px-6 py-5 text-lg leading-snug text-zinc-900">Start small: pick the one question your leaders ask most, build one dashboard that answers it, and add the rest as the questions grow.</p>
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
    <h2 class="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">Read next in this series</h2>
    <ul class="mt-6 grid gap-4 sm:grid-cols-2">
      <li><a href="/blog/survey-overview-dashboard.html" class="flex h-full min-h-11 items-start justify-between gap-3 rounded-2xl border border-zinc-200 bg-white p-5 font-semibold leading-snug text-zinc-950 shadow-sm transition hover:border-brand/40 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"><span>How to Read Survey Results in 5 Minutes: A Simple Survey Overview Dashboard</span></a></li>
      <li><a href="/blog/survey-topics-and-questions.html" class="flex h-full min-h-11 items-start justify-between gap-3 rounded-2xl border border-zinc-200 bg-white p-5 font-semibold leading-snug text-zinc-950 shadow-sm transition hover:border-brand/40 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"><span>How to Rank Survey Questions and Know Exactly Where to Act</span></a></li>
      <li><a href="/blog/survey-growth-during-the-year.html" class="flex h-full min-h-11 items-start justify-between gap-3 rounded-2xl border border-zinc-200 bg-white p-5 font-semibold leading-snug text-zinc-950 shadow-sm transition hover:border-brand/40 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"><span>Did Things Get Better This Year? How to Measure Survey Growth from Start to End</span></a></li>
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
