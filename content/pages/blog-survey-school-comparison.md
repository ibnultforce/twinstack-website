---
title: "How One Program Used Survey Data to Decide Which Schools Need Support First"
slug: blog-survey-school-comparison
url: /blog/survey-school-comparison.html
order: 55
description: A case study of how a family-engagement program used School Comparison and Respondent Profile dashboards to decide which schools need support first.
date: 2026-11-17
metaTitle: "Survey School Comparison: Which Schools Need Help First | TwinStack"
metaDescription: See how benchmark gaps, a topic grid and a respondent check helped a program rank eight schools fairly and send support where it matters most.
focusKeyword: survey school comparison
tags:
  - Tableau
  - Salesforce
  - Survey dashboards
  - School comparison
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
    <h1 class="mt-6 text-4xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-5xl md:text-[3.25rem] md:leading-[1.1]">How One Program Used Survey Data to Decide Which Schools Need Support First</h1>
    <p class="mt-6 text-xl leading-relaxed text-zinc-700">A fair comparison and an honest trust check on one page turned "how are we doing?" into "where do we start?"</p>
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
      <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_1200,f_auto,q_auto/v1795012069/survey-school-comparison-which-schools-need-support_x9evae.png" alt="Using survey data to decide which schools need support first" width="1200" height="675" class="aspect-video w-full rounded-2xl object-cover shadow-sm">
    </figure>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <p class="text-sm font-bold uppercase tracking-widest text-brand">Case snapshot</p>
    <div class="mt-4 overflow-x-auto rounded-2xl border border-zinc-200 bg-white shadow-sm">
      <table class="w-full min-w-[30rem] border-collapse text-left text-base">
        <tbody class="divide-y divide-zinc-200 align-top text-zinc-700">
          <tr><th scope="row" class="w-32 px-4 py-3 font-semibold text-zinc-950">Who</th><td class="px-4 py-3">A family-engagement program supporting eight schools in two districts (name masked)</td></tr>
          <tr><th scope="row" class="px-4 py-3 font-semibold text-zinc-950">Challenge</th><td class="px-4 py-3">One overall survey score hid the schools that needed help, and nobody knew how far to trust each school's result</td></tr>
          <tr><th scope="row" class="px-4 py-3 font-semibold text-zinc-950">Tools</th><td class="px-4 py-3">Salesforce to hold the survey data, Tableau for the dashboards</td></tr>
          <tr><th scope="row" class="px-4 py-3 font-semibold text-zinc-950">Result</th><td class="px-4 py-3">A clear, fair ranking of schools, the exact topic behind each gap, and a built-in check on who answered</td></tr>
        </tbody>
      </table>
    </div>
    <p class="mt-6 text-base text-zinc-600">This is an illustrative case study. The program is masked, and all figures and outcomes are example data.</p>
  </div>
</section>

<section class="border-t border-zinc-200 bg-zinc-50">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <p class="text-sm font-bold uppercase tracking-widest text-brand">01 · The situation</p>
    <h2 class="mt-2 text-3xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-4xl">One number that hid the story</h2>
    <div class="prose prose-zinc prose-lg mt-6 max-w-none prose-a:text-brand">
      <p>Twice a year, the program surveys families and teachers about the partnership between home and school. After each survey, the director received a single number: 68.9% of answers were positive. It looked healthy, and the conversation usually ended there.</p>
      <p>But the director suspected the number was hiding something. Visits to schools felt very different from one another. One school buzzed with family events, while another struggled to get parents through the door. A single average could not show that. It could only blend them.</p>
      <p>Two questions came up in every meeting. Which school should get support first? And can we trust the scores we are looking at?</p>
    </div>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <p class="text-sm font-bold uppercase tracking-widest text-brand">02 · The approach</p>
    <h2 class="mt-2 text-3xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-4xl">Two dashboards, two questions</h2>
    <div class="prose prose-zinc prose-lg mt-6 max-w-none prose-a:text-brand">
      <p>The first step was to put the data in one place. The survey answers lived in Salesforce, linked to the school each person belonged to. That made it possible to build two Tableau dashboards on top, each answering one of the director's questions.</p>
      <p><strong>School Comparison</strong> answered "which school first?" The team measured each school against the all-schools average and showed the difference in points, sorted from strongest to weakest. A second view placed schools down the side and the four survey topics across the top, with colour showing how strong each score was.</p>
      <p><strong>Respondent Profile</strong> answered "can we trust it?" It counted how many people answered at each school, in each language and in each grade, so every score could be read alongside the number of voices behind it.</p>
      <p>Behind the scenes, the rules are simple. The average counts every answer, with blank answers left out. A school's gap is its own score minus that average. The same rule applies to every school, so the comparison stays fair.</p>
    </div>
  </div>
</section>

<section class="border-t border-zinc-200 bg-zinc-50">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <p class="text-sm font-bold uppercase tracking-widest text-brand">03 · What the team found</p>
    <h2 class="mt-2 text-3xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-4xl">What the team found</h2>
    <div class="prose prose-zinc prose-lg mt-6 max-w-none prose-a:text-brand">
      <p>The gap view made the picture clear. One school was 22 points above the average, at 90.9%. Three others sat 5 to 9 points above it. At the other end, two schools were about 9 points below, a newer school was 12.5 below, and one school was 17.3 points below, at 51.6%.</p>
      <p>Then the topic grid made the findings useful. The two weakest schools had different problems.</p>
      <ul>
        <li>The lowest-scoring school struggled most with <strong>Academic Information</strong>, at 45.8%. Families did not feel they got the information they needed to support learning.</li>
        <li>The newer school struggled with <strong>Communication</strong>, at 51.6%, far below its other topics.</li>
      </ul>
      <p>Seeing it in colour mattered. A table of 32 numbers, eight schools by four topics, is slow to read. On the grid, the weak spots stood out in seconds.</p>
      <p>Strong results appeared too. One school scored 95.9% on Communication, and another reached 87.8% on Trust. Instead of only helping weaker schools, the director could now ask strong schools to share what they do.</p>
      <p>"Support the weakest schools" had turned into three specific actions: help one school share academic information more clearly, help another with communication, and learn from the schools doing it well.</p>
    </div>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <p class="text-sm font-bold uppercase tracking-widest text-brand">04 · Can we trust it?</p>
    <h2 class="mt-2 text-3xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-4xl">Can we trust it?</h2>
    <div class="prose prose-zinc prose-lg mt-6 max-w-none prose-a:text-brand">
      <p>The trust check gave the team confidence. Family responses were spread evenly, 45 to 65 per school, so no score rested on a handful of people.</p>
      <p>It also raised honest cautions.</p>
      <ul>
        <li>About 84% of family answers were in English and 11% in Spanish, so the smaller language groups were too thin to read closely.</li>
        <li>Grade 6 produced only 26 of 407 responses.</li>
        <li>Teacher results rested on just 8 to 17 people per school, so the dashboard carries a clear note not to rank schools by them.</li>
      </ul>
    </div>
  </div>
</section>

<section class="border-t border-zinc-200 bg-zinc-50">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <p class="text-sm font-bold uppercase tracking-widest text-brand">05 · The impact</p>
    <h2 class="mt-2 text-3xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-4xl">The impact</h2>
    <div class="prose prose-zinc prose-lg mt-6 max-w-none prose-a:text-brand">
      <p>For the program director, the meeting changed. Instead of debating whether a 69% was good, the team agreed on where to send support first and why.</p>
      <p>District leads could see their own schools against the same benchmark, with a specific topic to discuss rather than a general worry. School leaders saw where they stood without feeling judged by one number. Funders and the board received a more honest story: strong schools recognized, weaker schools named, and the limits of the data stated plainly.</p>
      <p>The conversation with school leaders changed too. Because the grid pointed to one topic, a visit could start with "here is what families told us about academic information" instead of "your score is low". That framing made it easier to work together.</p>
      <p>Most importantly, families benefit when help goes where the survey says it is needed, in the language and grade where voices were quietest.</p>
    </div>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <p class="text-sm font-bold uppercase tracking-widest text-brand">06 · Lessons learned</p>
    <h2 class="mt-2 text-3xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-4xl">Lessons learned</h2>
    <div class="prose prose-zinc prose-lg mt-6 max-w-none prose-a:text-brand">
      <ul>
        <li><strong>Compare to a benchmark.</strong> A gap in points is easier to act on than a rank.</li>
        <li><strong>Break totals into topics.</strong> Two schools with the same score can need very different help.</li>
        <li><strong>Show who answered.</strong> A score is only as strong as the number of voices behind it.</li>
      </ul>
    </div>
    <h3 class="mt-10 text-2xl font-semibold tracking-tight text-zinc-950">In summary</h3>
    <p class="mt-4 rounded-r-2xl border-l-4 border-brand bg-zinc-50 px-6 py-5 text-lg leading-snug text-zinc-900">The program did not need more data. It needed the data it had, organised so that a fair comparison and an honest trust check sat on the same page. With Salesforce holding the answers and Tableau telling the story, the director could move from "how are we doing?" to "where do we start?"</p>
    <p class="mt-6 text-lg leading-relaxed text-zinc-700">This completes the series. Start with the overview, then drill into questions, growth and trends, and finish with school comparison.</p>
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
      <li><a href="/blog/survey-year-over-year.html" class="flex h-full min-h-11 items-start justify-between gap-3 rounded-2xl border border-zinc-200 bg-white p-5 font-semibold leading-snug text-zinc-950 shadow-sm transition hover:border-brand/40 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"><span>Is This Year Better Than Last? How to Compare Survey Results Year over Year</span></a></li>
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
