---
title: "Salesforce Flow Best Practices: 12 Rules for Admins"
slug: blog-salesforce-flow-best-practices
url: /blog/salesforce-flow-best-practices.html
order: 50
date: 2026-11-20
tags:
  - Salesforce
  - Flow
  - Admin tips
description: "12 Salesforce Flow best practices for admins: avoid governor limits, bulkify your loops, handle errors and build Flows that stay fast and easy to maintain."
metaTitle: "Salesforce Flow Best Practices: 12 Rules for Admins"
metaDescription: "12 Salesforce Flow best practices for admins: avoid governor limits, bulkify your loops, handle errors and build Flows that stay fast and easy to maintain."
focusKeyword: "salesforce flow best practices"
---

<section class="relative overflow-hidden bg-linear-to-b from-slate-50 to-white">
  <div aria-hidden="true" class="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand/10 blur-3xl"></div>
  <div class="relative mx-auto max-w-4xl px-5 pt-10 pb-10 sm:px-8 md:pt-16 md:pb-14">
    <a href="/blog.html" class="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-slate-600 transition hover:-translate-x-0.5 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950">
      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
      Back to the blog
    </a>
    <ul class="mt-6 flex flex-wrap gap-2" aria-label="Tags">
      <li class="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700">Salesforce</li>
      <li class="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700">Flow</li>
      <li class="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700">Admin tips</li>
    </ul>
    <h1 class="mt-5 text-4xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-5xl md:text-6xl">{{ page.title }}</h1>
    <p class="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-base text-slate-600">
      <span class="font-medium text-zinc-900">By TwinStack Team</span>
      <span aria-hidden="true" class="text-slate-300">|</span>
      <time datetime="2026-11-20">{{ page.dateFormatted }}</time>
    </p>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto max-w-5xl px-5 pb-12 sm:px-8 md:pb-16">
    <div class="aspect-video w-full overflow-hidden rounded-3xl bg-slate-100 shadow-xl shadow-slate-900/10 ring-1 ring-slate-900/5">
      <img src="https://res.cloudinary.com/du42kbmmn/image/upload/v1795172080/1_romo4b.png" alt="Cover graphic for Salesforce Flow Best Practices, 12 rules for admins, showing a Flow that runs Get Records once, loops through each record to add it to a collection, then runs Update Records once for one query and one update" width="1600" height="900" fetchpriority="high" class="h-full w-full object-cover">
    </div>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto max-w-3xl px-5 pb-12 sm:px-8 md:pb-16">
    <div class="prose prose-zinc prose-lg max-w-none prose-a:text-zinc-950 prose-a:underline-offset-4">
      <p>A Flow can pass every test you run and still fail the first time someone updates 200 records at once. Salesforce processes records in batches, so a Flow that works for a single record can hit governor limits when the whole batch arrives together.</p>
      <p>The 12 rules below are the ones we apply on our own Salesforce projects. They are written for admins and follow the order in which we usually meet them while building.</p>
      <p>This matters more now. Support for Workflow Rules and Process Builder ended after 31 December 2025, so new automation belongs in Flow.</p>
    </div>
  </div>
</section>

<section class="border-y border-slate-200 bg-slate-50">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <h2 class="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">The 12 Flow rules</h2>
    <p class="mt-4 text-lg leading-relaxed text-slate-600">Each rule is short on purpose. Read them once, then keep the checklist near the end of this post open while you build.</p>
  </div>
</section>

<section id="rule-1" class="bg-white">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <div class="flex items-start gap-4 sm:gap-6">
      <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-lg font-semibold text-white ring-4 ring-brand/20" aria-hidden="true">1</span>
      <div class="min-w-0">
        <h3 class="text-2xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-3xl">Pick the right Flow type and plan it first</h3>
        <div class="prose prose-zinc prose-lg mt-4 max-w-none">
          <p>Record-triggered Flows run when a record is created, updated or deleted. Screen Flows guide a person through steps, scheduled Flows run at a set time on a batch of records, and autolaunched Flows run in the background when something else calls them.</p>
          <p>Before you open Flow Builder, write down what starts the Flow, what it must change and which objects it touches. A few minutes of planning on paper avoids the rebuild that follows when the wrong type was chosen.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="rule-2" class="bg-slate-50">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <div class="flex items-start gap-4 sm:gap-6">
      <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-lg font-semibold text-white ring-4 ring-brand/20" aria-hidden="true">2</span>
      <div class="min-w-0">
        <h3 class="text-2xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-3xl">Use before-save Flows for same-record updates</h3>
        <div class="prose prose-zinc prose-lg mt-4 max-w-none">
          <p>A before-save Flow changes fields on the record that started it, before Salesforce saves that record. Because the change is part of the save, it needs no separate DML statement, which keeps it light on limits.</p>
          <p>Use an after-save Flow when you need the record ID, need to create or update related records, or need to send an email. If a job can be done before save, do it there.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="rule-3" class="bg-white">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <div class="flex items-start gap-4 sm:gap-6">
      <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-lg font-semibold text-white ring-4 ring-brand/20" aria-hidden="true">3</span>
      <div class="min-w-0">
        <h3 class="text-2xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-3xl">Make entry conditions strict</h3>
        <div class="prose prose-zinc prose-lg mt-4 max-w-none">
          <p>Entry conditions decide whether a Flow runs at all. Set them so the Flow starts only when a specific field has a specific value, rather than on every save of the record.</p>
          <p>Where it fits, choose the option to run only when a record is updated to meet the condition requirements. Then the Flow does not fire again on every later edit, and you avoid unexpected changes and wasted processing.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="rule-4" class="bg-slate-50">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <div class="flex items-start gap-4 sm:gap-6">
      <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-lg font-semibold text-white ring-4 ring-brand/20" aria-hidden="true">4</span>
      <div class="min-w-0">
        <h3 class="text-2xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-3xl">Never put queries or DML inside a loop</h3>
        <div class="prose prose-zinc prose-lg mt-4 max-w-none">
          <p>This is the rule that causes most Flow failures. Each Get Records element runs one SOQL query, and a transaction is allowed 100 of them. Each Create, Update or Delete Records element runs one DML statement, and the limit is 150.</p>
          <p>Put one of those elements inside a loop and it runs once per record. With 200 records, the Flow stops with an error before it finishes. The fix is about where you place the elements:</p>
          <ul>
            <li>Put Get Records before the loop.</li>
            <li>Put Create, Update and Delete Records after the loop.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="rule-5" class="bg-white">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <div class="flex items-start gap-4 sm:gap-6">
      <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-lg font-semibold text-white ring-4 ring-brand/20" aria-hidden="true">5</span>
      <div class="min-w-0">
        <h3 class="text-2xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-3xl">Bulkify with collections</h3>
        <div class="prose prose-zinc prose-lg mt-4 max-w-none">
          <p>Bulkifying means handling many records in one pass instead of one at a time. In a Flow, that means using a collection variable to hold the records you want to change.</p>
          <p>Inside the loop, use an Assignment element to update the values on the current record and add it to the collection. After the loop ends, run a single Update Records element on the whole collection. The Flow then uses one query and one update, whether it handles 2 records or 2,000.</p>
        </div>
      </div>
    </div>
    <figure class="mt-8">
      <img src="https://res.cloudinary.com/du42kbmmn/image/upload/v1795172086/2_szwhzv.png" alt="Side-by-side diagram comparing a Flow with a query inside the loop, which runs 200 queries and fails with Too many SOQL queries: 101, against a bulkified Flow that uses one query, a collection and one update. A strip below lists the limits: 100 SOQL queries, 150 DML statements, 50,000 records retrieved and 10,000 records changed per transaction" width="1600" height="900" loading="lazy" class="h-auto w-full rounded-2xl shadow-lg shadow-slate-900/10 ring-1 ring-slate-900/5">
      <figcaption class="mt-3 text-sm leading-relaxed text-slate-600">A loop mistake against a bulkified Flow, with the standard per-transaction limits underneath.</figcaption>
    </figure>
  </div>
</section>

<section id="rule-6" class="bg-slate-50">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <div class="flex items-start gap-4 sm:gap-6">
      <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-lg font-semibold text-white ring-4 ring-brand/20" aria-hidden="true">6</span>
      <div class="min-w-0">
        <h3 class="text-2xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-3xl">Get only what you need</h3>
        <div class="prose prose-zinc prose-lg mt-4 max-w-none">
          <p>Add filters to every Get Records element so it returns only the records the Flow will use. A query with no filter can pull in far more data than you intended.</p>
          <p>Limits apply to rows as well as to statements. A transaction can retrieve 50,000 rows with SOQL and change 10,000 rows with DML. Narrow filters keep you well away from both numbers and make the Flow quicker to run.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="rule-7" class="bg-white">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <div class="flex items-start gap-4 sm:gap-6">
      <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-lg font-semibold text-white ring-4 ring-brand/20" aria-hidden="true">7</span>
      <div class="min-w-0">
        <h3 class="text-2xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-3xl">Add a fault path to every data element</h3>
        <div class="prose prose-zinc prose-lg mt-4 max-w-none">
          <p>Any element that reads or writes data can fail, for example because of a validation rule, a locked record or a missing permission. Without a fault path, the user sees a generic error and you get little to work with.</p>
          <p>Connect a fault path from each Get, Create, Update and Delete Records element. Send the error message to an admin by email, or write it to a log record. In screen Flows, show the user a clear message about what to do next.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="rule-8" class="bg-slate-50">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <div class="flex items-start gap-4 sm:gap-6">
      <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-lg font-semibold text-white ring-4 ring-brand/20" aria-hidden="true">8</span>
      <div class="min-w-0">
        <h3 class="text-2xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-3xl">Never hard-code IDs</h3>
        <div class="prose prose-zinc prose-lg mt-4 max-w-none">
          <p>Record IDs for things like record types, queues and users are different in a sandbox and in production. A Flow that works in one can break the moment you deploy it to the other.</p>
          <p>Look the record up instead. Use Get Records with the developer name of the record type or queue, or store the value in custom metadata or a custom label. Then the same Flow runs in every environment without edits.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="rule-9" class="bg-white">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <div class="flex items-start gap-4 sm:gap-6">
      <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-lg font-semibold text-white ring-4 ring-brand/20" aria-hidden="true">9</span>
      <div class="min-w-0">
        <h3 class="text-2xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-3xl">Control how many Flows run on each object</h3>
        <div class="prose prose-zinc prose-lg mt-4 max-w-none">
          <p>Several record-triggered Flows on one object all run in the same transaction and share the same limits. When two of them change the same field, the result depends on which runs last.</p>
          <p>Keep the number small, group related logic by purpose and use the trigger order setting where order matters. The Flow Trigger Explorer in Setup shows which Flows run on an object and in what sequence, so check it before you add another.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="rule-10" class="bg-slate-50">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <div class="flex items-start gap-4 sm:gap-6">
      <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-lg font-semibold text-white ring-4 ring-brand/20" aria-hidden="true">10</span>
      <div class="min-w-0">
        <h3 class="text-2xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-3xl">Name and describe everything</h3>
        <div class="prose prose-zinc prose-lg prose-code:rounded prose-code:bg-white prose-code:px-1.5 prose-code:py-0.5 prose-code:text-[0.9em] prose-code:font-medium prose-code:before:content-none prose-code:after:content-none mt-4 max-w-none">
          <p>Name each Flow so it says what it does, such as <code>Account_AfterSave_UpdateContacts</code>. A name that gives the object, the timing and the purpose saves time for whoever opens the Flow list next year.</p>
          <p>Do the same for elements. <code>Get_Open_Cases</code> tells you what it does at a glance, while <code>Get_Records_1</code> tells you nothing. Use the description field to record why the Flow exists and who asked for it.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="rule-11" class="bg-white">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <div class="flex items-start gap-4 sm:gap-6">
      <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-lg font-semibold text-white ring-4 ring-brand/20" aria-hidden="true">11</span>
      <div class="min-w-0">
        <h3 class="text-2xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-3xl">Reuse logic with subflows</h3>
        <div class="prose prose-zinc prose-lg mt-4 max-w-none">
          <p>If the same steps appear in more than one Flow, move them into a subflow and call it from each place. Common examples are sending a standard notification or logging an error.</p>
          <p>When the rule changes, you edit one subflow instead of hunting through several Flows. A subflow also keeps the main Flow shorter, which makes it easier to read and to review.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="rule-12" class="bg-slate-50">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <div class="flex items-start gap-4 sm:gap-6">
      <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-lg font-semibold text-white ring-4 ring-brand/20" aria-hidden="true">12</span>
      <div class="min-w-0">
        <h3 class="text-2xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-3xl">Test with bulk data before you activate</h3>
        <div class="prose prose-zinc prose-lg prose-a:text-zinc-950 prose-a:underline-offset-4 mt-4 max-w-none">
          <p>Testing with one record proves very little. In a sandbox, load 200 or more records with Data Loader so the Flow handles a full batch, as it will in real use. Our free <a href="/products/smart-lookup-data-loader.html">Smart Lookup Data Loader</a> is one option for preparing and loading that test data.</p>
          <p>Then open the debug log and check the number of SOQL queries and DML statements used. If those counts grow with the number of records, a query or update is still inside a loop. Keep the previous Flow version so you can roll back quickly if something goes wrong after activation.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="bg-white" id="checklist">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <h2 class="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">Checklist before you activate a Flow</h2>
    <p class="mt-4 text-lg leading-relaxed text-slate-600">Run through these eight points every time. Each one comes from the rules above.</p>
    <ul class="mt-8 grid gap-3">
      <li class="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 border-zinc-950 bg-zinc-950 text-white" aria-hidden="true"><svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>
        <span class="text-base leading-relaxed text-slate-800">The Flow type fits the job, and before-save is used for same-record updates.</span>
      </li>
      <li class="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 border-zinc-950 bg-zinc-950 text-white" aria-hidden="true"><svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>
        <span class="text-base leading-relaxed text-slate-800">Entry conditions are strict, so the Flow runs only when it should.</span>
      </li>
      <li class="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 border-zinc-950 bg-zinc-950 text-white" aria-hidden="true"><svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>
        <span class="text-base leading-relaxed text-slate-800">No Get, Create, Update or Delete Records element sits inside a loop.</span>
      </li>
      <li class="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 border-zinc-950 bg-zinc-950 text-white" aria-hidden="true"><svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>
        <span class="text-base leading-relaxed text-slate-800">Records are collected in a collection and saved with one Update Records after the loop.</span>
      </li>
      <li class="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 border-zinc-950 bg-zinc-950 text-white" aria-hidden="true"><svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>
        <span class="text-base leading-relaxed text-slate-800">Every Get Records element has filters, and every data element has a fault path.</span>
      </li>
      <li class="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 border-zinc-950 bg-zinc-950 text-white" aria-hidden="true"><svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>
        <span class="text-base leading-relaxed text-slate-800">No record IDs are typed into the Flow.</span>
      </li>
      <li class="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 border-zinc-950 bg-zinc-950 text-white" aria-hidden="true"><svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>
        <span class="text-base leading-relaxed text-slate-800">The Flow and its elements have clear names and a description, and Flow Trigger Explorer shows no clash with other Flows on the object.</span>
      </li>
      <li class="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 border-zinc-950 bg-zinc-950 text-white" aria-hidden="true"><svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>
        <span class="text-base leading-relaxed text-slate-800">It has been tested with 200 or more records in a sandbox, the debug log counts are low, and the old version is kept for rollback.</span>
      </li>
    </ul>
  </div>
</section>

<section class="bg-slate-50" id="faq">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <h2 class="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">FAQ</h2>
    <div class="mt-8 grid gap-3">
      <details class="group rounded-2xl border border-slate-200 bg-white shadow-sm open:shadow-md">
        <summary class="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 text-base font-semibold text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 [&::-webkit-details-marker]:hidden">
          What is bulkification in Salesforce Flow?
          <svg class="h-5 w-5 shrink-0 transition group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
        </summary>
        <p class="px-5 pb-5 text-base leading-relaxed text-slate-700">Bulkification means building a Flow so it handles many records in one pass. You collect the records in a collection and run one query before the loop and one update after it, instead of a query or update for each record.</p>
      </details>
      <details class="group rounded-2xl border border-slate-200 bg-white shadow-sm open:shadow-md">
        <summary class="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 text-base font-semibold text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 [&::-webkit-details-marker]:hidden">
          How many SOQL queries can a Flow run?
          <svg class="h-5 w-5 shrink-0 transition group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
        </summary>
        <p class="px-5 pb-5 text-base leading-relaxed text-slate-700">A transaction can run 100 SOQL queries, and each Get Records element counts as one. It can also run 150 DML statements, and each Create, Update or Delete Records element counts as one. These limits are shared by everything running in the same transaction, including other Flows.</p>
      </details>
      <details class="group rounded-2xl border border-slate-200 bg-white shadow-sm open:shadow-md">
        <summary class="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 text-base font-semibold text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 [&::-webkit-details-marker]:hidden">
          How do I fix "Too many SOQL queries: 101" in a Flow?
          <svg class="h-5 w-5 shrink-0 transition group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
        </summary>
        <p class="px-5 pb-5 text-base leading-relaxed text-slate-700">The error usually means a Get Records element is inside a loop and ran once per record. Move it before the loop, add the records you need to a collection inside the loop, and save them with one Update Records element after the loop.</p>
      </details>
      <details class="group rounded-2xl border border-slate-200 bg-white shadow-sm open:shadow-md">
        <summary class="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 text-base font-semibold text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 [&::-webkit-details-marker]:hidden">
          Are Workflow Rules and Process Builder still supported?
          <svg class="h-5 w-5 shrink-0 transition group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
        </summary>
        <p class="px-5 pb-5 text-base leading-relaxed text-slate-700">No. Support ended after 31 December 2025. Existing rules and processes can still run, but Salesforce no longer fixes issues with them, so new automation should be built in Flow.</p>
      </details>
    </div>
  </div>
</section>

<section class="bg-white" id="conclusion">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <h2 class="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">Conclusion</h2>
    <div class="prose prose-zinc prose-lg prose-a:text-zinc-950 prose-a:underline-offset-4 mt-6 max-w-none">
      <p>Build for 200 records from the start. A Flow designed for a full batch costs little extra effort, and it will not fail the day someone runs a data load or a bulk edit.</p>
      <p>If you only remember one rule, make it rule 4: never put queries or DML inside a loop. Follow TwinStack for more practical Salesforce guides, or visit <a href="https://twinstack.net">twinstack.net</a>.</p>
    </div>
  </div>
</section>

<section class="border-t border-slate-200 bg-slate-50" id="sources">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <h2 class="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">Sources</h2>
    <ul class="mt-6 grid gap-2 text-base leading-relaxed text-slate-700">
      <li>Avoid flow limits (Salesforce Trailhead)</li>
      <li>Complete guide to Salesforce Flow limits (Salesforce Ben)</li>
      <li>Salesforce announces end of support for Workflow Rules and Process Builder (Salesforce Ben)</li>
    </ul>
    <h3 class="mt-10 text-lg font-semibold text-zinc-950">More from TwinStack</h3>
    <ul class="mt-4 flex flex-wrap gap-3">
      <li><a href="/products/google-form-auto-sync.html" class="inline-flex min-h-11 items-center rounded-full border border-slate-300 bg-white px-5 text-sm font-medium text-zinc-950 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-950 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950">Google Form Auto Sync</a></li>
      <li><a href="/products/who-sees-what.html" class="inline-flex min-h-11 items-center rounded-full border border-slate-300 bg-white px-5 text-sm font-medium text-zinc-950 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-950 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950">Who Sees What</a></li>
      <li><a href="/products/smart-lookup-data-loader.html" class="inline-flex min-h-11 items-center rounded-full border border-slate-300 bg-white px-5 text-sm font-medium text-zinc-950 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-950 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950">Smart Lookup Data Loader</a></li>
    </ul>
  </div>
</section>

<section class="relative overflow-hidden bg-zinc-950">
  <div aria-hidden="true" class="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-brand/30 blur-3xl"></div>
  <div class="relative mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 md:py-24">
    <h2 class="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl md:text-5xl">Need help with your Salesforce Flows?</h2>
    <p class="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-zinc-300">Tell us what your Flows do today and where they struggle. We will review them with you and suggest practical fixes.</p>
    <a href="/contact.html" class="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-base font-semibold text-zinc-950 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
      Contact TwinStack
      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
    </a>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <h2 class="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">Read next</h2>
    <a href="/blog/survey-data-to-action.html" class="group mt-6 flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-950 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 sm:p-6">
      <span class="min-w-0">
        <span class="block text-lg font-semibold text-zinc-950">From Survey Data to Action</span>
        <span class="mt-1 block text-base leading-relaxed text-slate-600">Our guide to turning survey results into decisions with dashboards.</span>
      </span>
      <svg class="h-5 w-5 shrink-0 transition group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
    </a>
  </div>
</section>
