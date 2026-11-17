---
title: "How to Rank Survey Questions and Know Exactly Where to Act"
slug: blog-survey-topics-and-questions
url: /blog/survey-topics-and-questions.html
order: 52
description: How a Topics and Questions dashboard turns a vague topic score into a ranked list of survey questions and a clear next step.
date: 2026-11-17
metaTitle: "Rank Survey Questions to Know Where to Act | TwinStack"
metaDescription: A topic score shows where to look, not what to fix. See how a Topics and Questions dashboard ranks survey questions and turns results into a to-do list.
focusKeyword: rank survey questions
tags:
  - Tableau
  - Salesforce
  - Survey dashboards
  - Topics and questions
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
    <h1 class="mt-6 text-4xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-5xl md:text-[3.25rem] md:leading-[1.1]">How to Rank Survey Questions and Know Exactly Where to Act</h1>
    <p class="mt-6 text-xl leading-relaxed text-zinc-700">A topic score tells you where to look. Question scores tell you what to do. Here is how one dashboard connects the two.</p>
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
    <p class="text-xl font-medium leading-relaxed text-zinc-900">Imagine a doctor who tells you, "Your health score is 69 out of 100." Useful? Not really. You want to know which number is low and what to do about it.</p>
    <div class="prose prose-zinc prose-lg mt-6 max-w-none prose-a:text-brand">
      <p>Survey results have the same problem. A topic score tells you where to look. It does not tell you what to fix. This post shows how a Topics and Questions dashboard closes that gap. (The program name is masked and all figures are example data.)</p>
    </div>
  </div>
</section>

<section class="border-t border-zinc-200 bg-zinc-50">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <p class="text-sm font-bold uppercase tracking-widest text-brand">01 · The problem</p>
    <h2 class="mt-2 text-3xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-4xl">A topic score is not an action</h2>
    <div class="prose prose-zinc prose-lg mt-6 max-w-none prose-a:text-brand">
      <p>A family-engagement program surveys families on four topics: Trust, Belonging, Communication and Academic Information. Each topic has two questions, so a topic score is really the average of just two questions.</p>
      <p>That average can hide a lot. When a coordinator saw "Communication: 68.6%", the natural reaction was, "That is fine, move on." But nobody could say what was inside that number, or which sentence families actually disagreed with. Without that, the team could not choose a concrete next step.</p>
    </div>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <p class="text-sm font-bold uppercase tracking-widest text-brand">02 · The dashboard</p>
    <h2 class="mt-2 text-3xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-4xl">Click a topic, see every question</h2>
    <div class="prose prose-zinc prose-lg mt-6 max-w-none prose-a:text-brand">
      <p>The Topics and Questions dashboard has three views that work together.</p>
      <h3>1. Topic results</h3>
      <p>A short table with one row per topic. Each row shows the positive percent, the share of strong agreement, the share of disagreement, the average score and how many answers sit behind it.</p>
      <h3>2. Question ranking</h3>
      <p>Every question on one line, sorted from best to worst, each shown as a dot on a simple scale. You can see the spread at a glance.</p>
      <h3>3. Question detail</h3>
      <p>A table with the full wording of each question and exactly how many people chose each answer.</p>
      <p>The three are linked. Click a topic in the first view, and the other two show only that topic's questions. Click it again, and everything comes back.</p>
    </div>
  </div>
</section>

<section class="border-t border-zinc-200 bg-zinc-50">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <p class="text-sm font-bold uppercase tracking-widest text-brand">03 · The drill-down</p>
    <h2 class="mt-2 text-3xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-4xl">What the drill-down showed</h2>
    <div class="prose prose-zinc prose-lg mt-6 max-w-none prose-a:text-brand">
      <p>In our example, family results from the end-of-year survey ranged from 64.9% to 72.9% across the eight questions. That is an eight-point spread, and it was invisible in the topic scores. A few things stood out.</p>
      <ul>
        <li><strong>The weakest question was about progress updates.</strong> "My child's teacher shares regular updates about my child's progress" scored 64.9%. Out of 390 people who answered, 137 disagreed. That is about 35%, or more than one in three.</li>
        <li><strong>The strongest was about partnership.</strong> "Teachers treat me as a partner in my child's education" scored 72.9%.</li>
        <li><strong>Communication was really two stories.</strong> The topic looked average at 68.6%. Inside it, "I know how to contact my child's teacher" scored 71.0%, while "The school communicates with me in a language I understand" scored 66.2%. The problem was not that families could not reach teachers. It was that the message did not always land in the right language.</li>
      </ul>
      <p>That last finding changes the plan. "Improve communication" is a vague goal. "Check that school messages go out in families' home languages" is something a coordinator can do next week.</p>
    </div>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <p class="text-sm font-bold uppercase tracking-widest text-brand">04 · Stakeholders</p>
    <h2 class="mt-2 text-3xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-4xl">Why it matters to each stakeholder</h2>
    <div class="prose prose-zinc prose-lg mt-6 max-w-none prose-a:text-brand">
      <ul>
        <li><strong>School coordinators:</strong> get a short, specific to-do list instead of a general worry. The lowest-ranked questions tell them where to start.</li>
        <li><strong>Principals and teacher coaches:</strong> see the exact behavior families are asking for, such as regular progress updates, and can coach toward it.</li>
        <li><strong>Program directors:</strong> can tell funders precisely what the program is improving and why, with the evidence one click away.</li>
        <li><strong>Families:</strong> benefit most, because their own words in the survey lead to a specific change, not a general promise.</li>
      </ul>
    </div>
  </div>
</section>

<section class="border-t border-zinc-200 bg-zinc-50">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <p class="text-sm font-bold uppercase tracking-widest text-brand">05 · The takeaway</p>
    <h2 class="mt-2 text-3xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-4xl">From report card to to-do list</h2>
    <p class="mt-6 rounded-r-2xl border-l-4 border-brand bg-white px-6 py-5 text-lg leading-snug text-zinc-900">Topic scores show where to look. Question scores show what to do. A dashboard that lets people click from one to the other turns a survey from a report card into a to-do list.</p>
    <p class="mt-6 text-lg leading-relaxed text-zinc-700">Next in this series: how to see whether things improved during the school year.</p>
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
