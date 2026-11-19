---
title: "Is This Year Better Than Last? How to Compare Survey Results Year over Year"
slug: blog-survey-year-over-year
url: /blog/survey-year-over-year.html
order: 54
description: How a Year-over-Year dashboard compares survey results fairly across school years, and what it found that the overall score hid.
date: 2026-11-17
metaTitle: "Compare Survey Results Year over Year | TwinStack"
metaDescription: A flat headline score can hide slow climbs and slides. See how a Year-over-Year dashboard compares like with like and matches questions by code.
focusKeyword: survey results year over year
tags:
  - Tableau
  - Salesforce
  - Survey dashboards
  - Year over year
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
    <h1 class="mt-6 text-4xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-5xl md:text-[3.25rem] md:leading-[1.1]">Is This Year Better Than Last? How to Compare Survey Results Year over Year</h1>
    <p class="mt-6 text-xl leading-relaxed text-zinc-700">A flat headline does not mean a flat story. Here is how a fair year-over-year view shows what the overall score hides.</p>
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
      <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_1200,f_auto,q_auto/v1795012080/survey-year-over-year-comparison-trends_kk8ntc.png" alt="Comparing survey results year over year" width="1200" height="675" class="aspect-video w-full rounded-2xl object-cover shadow-sm">
    </figure>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <p class="text-xl font-medium leading-relaxed text-zinc-900">"Are we doing better than last year?" It sounds like the easiest question in the world. In practice, it is one of the hardest to answer with survey data.</p>
    <div class="prose prose-zinc prose-lg mt-6 max-w-none prose-a:text-brand">
      <p>This post shows how a Year-over-Year dashboard answers it fairly, and what it found that the overall score hid. (The program name is masked and all figures are example data.)</p>
    </div>
  </div>
</section>

<section class="border-t border-zinc-200 bg-zinc-50">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <p class="text-sm font-bold uppercase tracking-widest text-brand">01 · The problem</p>
    <h2 class="mt-2 text-3xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-4xl">Three years of surveys, no fair comparison</h2>
    <div class="prose prose-zinc prose-lg mt-6 max-w-none prose-a:text-brand">
      <p>A family-engagement program has surveyed families at the start of every school year for three years. Each year, someone built a new report. Nobody compared them side by side, for three reasons.</p>
      <ul>
        <li><strong>Different timing.</strong> Comparing a fall survey with a spring survey is not fair, because scores usually rise during the year.</li>
        <li><strong>Changing wording.</strong> Two questions were reworded after the first year. Matching them by their wording would have broken the trend.</li>
        <li><strong>Overall scores hide detail.</strong> The headline barely moved, so everyone assumed nothing was happening.</li>
      </ul>
    </div>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <p class="text-sm font-bold uppercase tracking-widest text-brand">02 · The dashboard</p>
    <h2 class="mt-2 text-3xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-4xl">Compare like with like</h2>
    <div class="prose prose-zinc prose-lg mt-6 max-w-none prose-a:text-brand">
      <p>The Year-over-Year dashboard follows two simple rules. It compares the same point in the year, so fall is always compared with fall. And it matches each question by its fixed code behind the scenes, not by its wording, so a reworded question stays in the same trend.</p>
      <p>It has two views.</p>
      <h3>1. Trend lines</h3>
      <p>One line per topic across the school years, plus a dashed grey line for the overall score. You can see at a glance which topics are climbing, which are falling and which are flat.</p>
      <h3>2. Change by question</h3>
      <p>A color grid with questions down the side and years across the top. Each cell shows how many points that question moved compared with the year before. Gains are one color and losses are another, and the darker the color, the bigger the change.</p>
    </div>
  </div>
</section>

<section class="border-t border-zinc-200 bg-zinc-50">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <p class="text-sm font-bold uppercase tracking-widest text-brand">03 · What the trends showed</p>
    <h2 class="mt-2 text-3xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-4xl">What the trends showed</h2>
    <div class="prose prose-zinc prose-lg mt-6 max-w-none prose-a:text-brand">
      <p>The overall start-of-year score looked flat: 63.8%, then 63.7%, then 65.6%. A comfortable "no change" story.</p>
      <p>Underneath, the topics told four different stories.</p>
      <ul>
        <li><strong>Academic Information</strong> climbed steadily, from 56.9% to 59.7% to 61.7%. Still the lowest topic, but moving the right way.</li>
        <li><strong>Belonging</strong> dipped to 61.5% in the second year and then recovered to 66.6%.</li>
        <li><strong>Communication</strong> edged up each year, to 67.6%.</li>
        <li><strong>Trust</strong> slipped slowly, from 68.4% to 66.7% to 66.6%. It started as the strongest topic and is now level with Belonging.</li>
      </ul>
      <p>The question grid went one level deeper. "I feel welcome when I visit my child's school" fell 6.2 points in the second year, then rebounded 9.6 points in the third. That is a recovery worth celebrating. By contrast, "Teachers treat me as a partner in my child's education" fell two years in a row, by 1.4 and then 2.9 points. Neither drop is dramatic on its own, but together they are a pattern. A slow slide is easy to miss in a single report and obvious on this one.</p>
    </div>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <p class="text-sm font-bold uppercase tracking-widest text-brand">04 · Stakeholders</p>
    <h2 class="mt-2 text-3xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-4xl">Why it matters to each stakeholder</h2>
    <div class="prose prose-zinc prose-lg mt-6 max-w-none prose-a:text-brand">
      <ul>
        <li><strong>Program directors:</strong> can tell whether improvement is real and lasting, or just a good or bad year.</li>
        <li><strong>Funders and the board:</strong> see a multi-year story with clear direction, which is what multi-year grants need.</li>
        <li><strong>School coordinators:</strong> can spot a slow decline early and act before it becomes a complaint.</li>
        <li><strong>New staff:</strong> get history at a glance, without reading three old reports.</li>
      </ul>
    </div>
  </div>
</section>

<section class="border-t border-zinc-200 bg-zinc-50">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <p class="text-sm font-bold uppercase tracking-widest text-brand">05 · A note on honesty</p>
    <h2 class="mt-2 text-3xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-4xl">Read small changes with care</h2>
    <div class="prose prose-zinc prose-lg mt-6 max-w-none prose-a:text-brand">
      <p>A change of one or two points can be ordinary year-to-year variation, so look for larger or repeated moves, like the partnership question above. Also, the current year has only its start-of-year survey so far. The dashboard compares like with like, so the current year is compared with earlier start-of-year results until the end-of-year results arrive.</p>
    </div>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <p class="text-sm font-bold uppercase tracking-widest text-brand">06 · The takeaway</p>
    <h2 class="mt-2 text-3xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-4xl">A flat headline is not a flat story</h2>
    <p class="mt-6 rounded-r-2xl border-l-4 border-brand bg-zinc-50 px-6 py-5 text-lg leading-snug text-zinc-900">A fair year-over-year view, matched on timing and on question, shows the slow climbs, dips and slides that single reports hide, and it gives leaders time to respond.</p>
    <p class="mt-6 text-lg leading-relaxed text-zinc-700">Next in this series: how to compare schools fairly.</p>
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
      <li><a href="/blog/survey-growth-during-the-year.html" class="flex h-full min-h-11 items-start justify-between gap-3 rounded-2xl border border-zinc-200 bg-white p-5 font-semibold leading-snug text-zinc-950 shadow-sm transition hover:border-brand/40 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"><span>Did Things Get Better This Year? How to Measure Survey Growth from Start to End</span></a></li>
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
