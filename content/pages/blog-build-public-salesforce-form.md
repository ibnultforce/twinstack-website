---
title: How to Build a Public Salesforce Form in Five Steps (No Code)
slug: blog-build-public-salesforce-form
url: /blog/build-public-salesforce-form.html
order: 50
date: 2026-11-11
description: A step-by-step guide to building a public Salesforce form with Smart Forms & Surveys, from first-time setup to your first submission.
metaTitle: How to Build a Public Salesforce Form in Five Steps (No Code) | Smart Forms & Surveys
metaDescription: A step-by-step guide to building a public Salesforce form with Smart Forms & Surveys: setup, fields, conditional questions, sharing and reviewing submissions.
ogImage: /assets/img/uploads/sfs-blog2-hero.png
image: /assets/img/uploads/sfs-blog2-hero.png
tags:
  - Salesforce
  - how-to
  - form builder
  - no-code
  - Salesforce Sites
---

<section class="relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-900 to-slate-800 text-white">
  <div class="pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-teal-400/20 blur-3xl" aria-hidden="true"></div>
  <div class="relative mx-auto max-w-3xl px-5 py-16 sm:px-8 md:py-24">
    <a href="/blog.html" class="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-teal-300 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300">
      <svg class="size-4 rotate-180" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true"><use href="#fa-arrow-right"></use></svg>
      Back to the blog
    </a>
    <ul class="mt-6 flex flex-wrap gap-2 text-sm">{{# each page.tags }}<li class="rounded-full bg-white/10 px-3 py-1 text-slate-100 ring-1 ring-white/15">{{ this }}</li>{{/ each }}</ul>
    <h1 class="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">{{ page.title }}</h1>
    <p class="mt-6 text-sm text-slate-300">By TwinStack Team &middot; <time datetime="2026-11-11">{{ page.dateFormatted }}</time></p>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto max-w-3xl px-5 pt-14 sm:px-8 md:pt-20">
    <p class="border-l-4 border-teal-500 pl-5 text-lg leading-relaxed text-slate-700 sm:text-xl">You don’t need a developer, a connector or a third-party subscription to put a form on the web and have the answers land in Salesforce. Here is the whole process with Smart Forms &amp; Surveys, from first-time setup to the first submission.</p>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto max-w-3xl px-5 py-14 sm:px-8 md:py-20">
    <ol class="list-none">
      <li class="relative pb-14 pl-16">
        <span class="absolute top-0 left-0 flex size-11 items-center justify-center rounded-full bg-slate-900 text-lg font-semibold text-white shadow-md ring-4 ring-white" aria-hidden="true">1</span>
        <span class="absolute top-11 bottom-0 left-[21px] w-0.5 bg-slate-200" aria-hidden="true"></span>
        <h2 class="pt-1.5 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Step 1: Set up once</h2>
        <p class="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">Public forms are served through a Salesforce Site named <strong>PublicForm</strong>. The app’s Get started page checks for it and shows a green card when the site is found and active. If it isn’t, the Setup instructions walk an admin through five short tasks in Salesforce Setup: builder access, the public site, visitor access, a sharing rule and the link address. Click Recheck when you’re done.</p>
        <p class="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">Until the site is ready, form building is paused. That is deliberate, so nobody builds a form that visitors can’t open.</p>
      </li>
      <li class="relative pb-14 pl-16">
        <span class="absolute top-0 left-0 flex size-11 items-center justify-center rounded-full bg-slate-900 text-lg font-semibold text-white shadow-md ring-4 ring-white" aria-hidden="true">2</span>
        <span class="absolute top-11 bottom-0 left-[21px] w-0.5 bg-slate-200" aria-hidden="true"></span>
        <h2 class="pt-1.5 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Step 2: Choose what each response creates</h2>
        <p class="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">Choose <strong>Create a new form</strong>, give it a name and pick the object each response should create. It can be any Salesforce object you can create records in, such as a Lead, a Case or your own custom object. Fields Salesforce needs to save the record are added for you and marked with a red asterisk.</p>
      </li>
      <li class="relative pb-14 pl-16">
        <span class="absolute top-0 left-0 flex size-11 items-center justify-center rounded-full bg-slate-900 text-lg font-semibold text-white shadow-md ring-4 ring-white" aria-hidden="true">3</span>
        <span class="absolute top-11 bottom-0 left-[21px] w-0.5 bg-slate-200" aria-hidden="true"></span>
        <h2 class="pt-1.5 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Step 3: Pick and arrange the questions</h2>
        <p class="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">Tick the fields you want and arrange them with the arrows. Text, email, phone, website, numbers, currency, percent, picklists, multi-select picklists, dates, date and time, checkboxes and long text are all supported. You can rename any label to suit your audience.</p>
        <p class="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">Lookup fields such as Owner stay hidden from visitors until you configure them, because visitors can’t know record Ids. You can apply a <strong>fixed record</strong> automatically (optionally showing its name) or let visitors <strong>choose from up to 25 records</strong> you select. Visitors never see or send a record Id.</p>
      </li>
      <li class="relative pb-14 pl-16">
        <span class="absolute top-0 left-0 flex size-11 items-center justify-center rounded-full bg-slate-900 text-lg font-semibold text-white shadow-md ring-4 ring-white" aria-hidden="true">4</span>
        <span class="absolute top-11 bottom-0 left-[21px] w-0.5 bg-slate-200" aria-hidden="true"></span>
        <h2 class="pt-1.5 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Step 4: Add the smart parts</h2>
        <p class="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">Open a question with the pencil icon and switch on <strong>Only show this field for certain answers</strong>. Choose the controlling picklist or checkbox, tap the answers that should reveal the question, then use <strong>Try it</strong> to preview the behaviour before you save. A field depends on one controlling question, and several answers can show it.</p>
        <figure class="mt-8">
          <img src="/assets/img/uploads/sfs-blog2-inline.png" alt="A form builder with a field list on the left and a preview on the right, where a “Tell us more” question appears only when “Other” is chosen." width="2000" height="1075" loading="lazy" class="h-auto w-full max-w-full rounded-2xl shadow-lg ring-1 ring-slate-200" />
        </figure>
        <p class="mt-8 text-base leading-relaxed text-slate-700 sm:text-lg">Two more switches are worth knowing about. <strong>File uploads</strong> let visitors attach up to five files to a submission. A <strong>close time</strong> shuts the form automatically at a deadline; you can close or reopen it by hand at any point, and stored submissions are never touched.</p>
      </li>
      <li class="relative pl-16">
        <span class="absolute top-0 left-0 flex size-11 items-center justify-center rounded-full bg-teal-700 text-lg font-semibold text-white shadow-md ring-4 ring-white" aria-hidden="true">5</span>
        <h2 class="pt-1.5 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Step 5: Save, share and review</h2>
        <p class="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">Click <strong>Save &amp; generate form</strong>. That is what publishes your changes, so visitors only see an edit after you save. Each save of an existing form raises its version number by one.</p>
        <p class="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">Copy the public link, or use <strong>Visitor view</strong> to see exactly what people will see, then paste the link into an email, a chat message or a button on your website.</p>
        <p class="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">Open <strong>Submissions</strong> to see what arrived. Select any entry to see what the visitor sent and the record it created, and use the <strong>Has error</strong> filter to find anything Salesforce rejected. The error message says what to fix.</p>
      </li>
    </ol>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto max-w-3xl px-5 pb-14 sm:px-8 md:pb-20">
    <div class="rounded-2xl border border-teal-200 bg-teal-50 p-6 shadow-sm sm:p-8">
      <h2 class="text-xl font-semibold tracking-tight text-teal-900 sm:text-2xl">A tip for your first form</h2>
      <p class="mt-3 text-base leading-relaxed text-slate-800 sm:text-lg">Start small: three or four fields, one object, no logic. Publish it, submit a test response yourself, and confirm the record looks right. Once that works, add conditional questions and uploads one at a time.</p>
    </div>
  </div>
</section>

<section class="relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-900 to-slate-800 text-white">
  <div class="pointer-events-none absolute -bottom-24 -left-24 size-80 rounded-full bg-teal-400/20 blur-3xl" aria-hidden="true"></div>
  <div class="relative mx-auto max-w-3xl px-5 py-14 text-center sm:px-8 md:py-20">
    <h2 class="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Build your first form today.</h2>
    <p class="mt-4 text-lg text-slate-300">Get Smart Forms &amp; Surveys.</p>
    <a href="/contact.html" class="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-teal-400 px-6 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-teal-500/20 transition hover:-translate-y-0.5 hover:bg-teal-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300">
      Get Smart Forms &amp; Surveys
      <svg class="size-4" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true"><use href="#fa-arrow-right"></use></svg>
    </a>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto max-w-3xl px-5 py-14 sm:px-8 md:py-20">
    <h2 class="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Related reading</h2>
    <ul class="mt-6 grid gap-4">
      <li>
        <a href="/blog/native-salesforce-forms.html" class="flex min-h-11 items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-5 text-base font-medium text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-500 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600">
          <span>Why Native Salesforce Forms Beat a Form Tool Plus a Connector</span>
          <svg class="size-4 shrink-0 text-teal-700" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true"><use href="#fa-arrow-right"></use></svg>
        </a>
      </li>
      <li>
        <a href="/blog/secure-public-salesforce-forms.html" class="flex min-h-11 items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-5 text-base font-medium text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-500 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600">
          <span>Public Salesforce Forms Without the Anxiety: Spam, Uploads and Guest Access</span>
          <svg class="size-4 shrink-0 text-teal-700" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true"><use href="#fa-arrow-right"></use></svg>
        </a>
      </li>
    </ul>
  </div>
</section>
