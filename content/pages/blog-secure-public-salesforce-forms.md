---
title: "Public Salesforce Forms Without the Anxiety: Spam, Uploads and Guest Access"
slug: blog-secure-public-salesforce-forms
url: /blog/secure-public-salesforce-forms.html
order: 50
date: 2026-11-11
description: "A public form is open to everyone. Here are the layers that protect your Salesforce org: spam checks, upload limits, create-only access and permission sets."
metaTitle: "Public Salesforce Forms Without the Anxiety: Spam, Uploads and Guest Access | Smart Forms & Surveys"
metaDescription: "A public form is open to everyone. Here are the layers that protect your Salesforce org: spam checks, upload limits, create-only access and permission sets."
ogImage: /assets/img/uploads/sfs-blog3-hero.png
image: /assets/img/uploads/sfs-blog3-hero.png
tags:
  - Salesforce security
  - spam protection
  - Cloudflare Turnstile
  - file uploads
  - guest user
---

<section class="relative overflow-hidden bg-slate-950">
  <div class="pointer-events-none absolute inset-0 bg-linear-to-br from-brand/25 via-slate-950 to-slate-950"></div>
  <div class="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand/20 blur-3xl"></div>
  <div class="relative mx-auto max-w-4xl px-5 py-16 sm:px-8 md:py-24">
    <a href="/blog.html" class="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
      Back to the blog
    </a>
    <ul class="mt-6 flex flex-wrap gap-2" aria-label="Tags">
      <li class="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-slate-100 ring-1 ring-white/20">Salesforce security</li>
      <li class="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-slate-100 ring-1 ring-white/20">spam protection</li>
      <li class="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-slate-100 ring-1 ring-white/20">Cloudflare Turnstile</li>
      <li class="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-slate-100 ring-1 ring-white/20">file uploads</li>
      <li class="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-slate-100 ring-1 ring-white/20">guest user</li>
    </ul>
    <h1 class="mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl md:text-5xl">Public Salesforce Forms Without the Anxiety: Spam, Uploads and Guest Access</h1>
    <p class="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-300">
      <span>By TwinStack Team</span>
      <span aria-hidden="true" class="text-slate-500">&middot;</span>
      <time datetime="2026-11-11">{{ page.dateFormatted }}</time>
    </p>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto max-w-3xl px-5 py-14 sm:px-8 md:py-20">
    <div class="border-l-4 border-brand pl-5 sm:pl-6">
      <p class="text-xl leading-relaxed text-slate-800 sm:text-2xl sm:leading-relaxed">A public form is, by definition, open to everyone. That is the point, and it is also why admins feel a little nervous the first time they publish one. Bots will find it. Someone will try to upload something odd. The question is what stands between those things and your data.</p>
    </div>
    <p class="mt-8 text-lg leading-relaxed text-slate-700">Smart Forms &amp; Surveys answers with layers rather than a single lock. Some are on from the start, and some you switch on per form.</p>
  </div>
</section>

<section class="bg-slate-50">
  <div class="mx-auto max-w-4xl px-5 py-12 sm:px-8 md:py-16">
    <figure>
      <img src="/assets/img/uploads/sfs-blog3-inline.png" alt="Five layers: hidden trap field, submission rate limit, Cloudflare Turnstile, file rules and create-only access." width="2000" height="975" loading="lazy" class="h-auto w-full max-w-full rounded-2xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-200">
    </figure>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto max-w-3xl px-5 py-14 sm:px-8 md:py-20">
    <div class="flex items-start gap-4">
      <div class="flex shrink-0 items-center pt-0.5" aria-hidden="true">
        <span class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-base font-semibold text-blue-800 ring-2 ring-white">1</span>
        <span class="-ml-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-base font-semibold text-blue-800 ring-2 ring-white">2</span>
      </div>
      <h2 class="text-2xl font-semibold tracking-tight text-balance text-slate-950 sm:text-3xl">Layers one and two: the trap field and the rate limit</h2>
    </div>
    <div class="mt-6 space-y-5 text-lg leading-relaxed text-slate-700">
      <p>Every form carries a hidden field that people never see. Simple bots fill in everything they find, and a submission with that field filled in is dropped silently. Every form also has a limit on submissions per minute, so a flood of requests can’t pile up. Neither needs any setup.</p>
    </div>
  </div>
</section>

<section class="border-t border-slate-200 bg-slate-50">
  <div class="mx-auto max-w-3xl px-5 py-14 sm:px-8 md:py-20">
    <div class="flex items-start gap-4">
      <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-100 text-base font-semibold text-teal-800" aria-hidden="true">3</span>
      <h2 class="text-2xl font-semibold tracking-tight text-balance text-slate-950 sm:text-3xl">Layer three: a human check with Cloudflare Turnstile</h2>
    </div>
    <div class="mt-6 space-y-5 text-lg leading-relaxed text-slate-700">
      <p>For forms that attract more determined bots, connect your own free Cloudflare account. On the Spam protection tab you add a Turnstile widget for your form domain, copy the site key and the secret key into the app, and test the connection. It takes about five minutes, and the keys remain yours.</p>
      <p>Then switch on <strong class="font-semibold text-slate-950">Spam check</strong> for each form and save it. Visitors complete a short check, which usually needs no clicking, before they can submit. Remember to save the form again after switching it on, because saving is what publishes the change.</p>
    </div>
    <div class="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-5 sm:p-6">
      <p class="text-lg leading-relaxed text-slate-800">If you ever remove your keys, forms that require the spam check stop accepting submissions until you add new keys or switch the check off. The tab tells you how many forms are affected before you remove anything.</p>
    </div>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto max-w-3xl px-5 py-14 sm:px-8 md:py-20">
    <div class="flex items-start gap-4">
      <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-base font-semibold text-amber-900" aria-hidden="true">4</span>
      <h2 class="text-2xl font-semibold tracking-tight text-balance text-slate-950 sm:text-3xl">Layer four: strict rules for file uploads</h2>
    </div>
    <div class="mt-6 space-y-5 text-lg leading-relaxed text-slate-700">
      <p>Uploads are off until you enable them on a form, and then they are limited. A visitor can attach up to five files of up to 1 MB each. Only documents and images are accepted, such as JPG, PNG, PDF, Word, Excel, PowerPoint, text and CSV files. Anything a browser could run, including HTML, SVG and JavaScript, is rejected. File names, sizes and types are checked on the server, not just in the visitor’s browser, and uploads are rate-limited too.</p>
    </div>
  </div>
</section>

<section class="border-t border-slate-200 bg-slate-50">
  <div class="mx-auto max-w-3xl px-5 py-14 sm:px-8 md:py-20">
    <div class="flex items-start gap-4">
      <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-100 text-base font-semibold text-violet-800" aria-hidden="true">5</span>
      <h2 class="text-2xl font-semibold tracking-tight text-balance text-slate-950 sm:text-3xl">Layer five: create-only access</h2>
    </div>
    <div class="mt-6 space-y-5 text-lg leading-relaxed text-slate-700">
      <p>Public forms can only add records. A submission that includes a record Id is rejected, so nobody can use a form link to overwrite existing data. Lookup fields stay hidden until you configure them, and visitors never see or send record Ids.</p>
      <p>Visitors also can’t see your other forms, your submissions or your Salesforce data.</p>
    </div>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto max-w-3xl px-5 py-14 sm:px-8 md:py-20">
    <h2 class="text-2xl font-semibold tracking-tight text-balance text-slate-950 sm:text-3xl">Keep the admin side tight, too</h2>
    <div class="mt-6 space-y-5 text-lg leading-relaxed text-slate-700">
      <p>Building forms and viewing submissions needs the <strong class="font-semibold text-slate-950">FormBuilder_Admin</strong> permission set. It shows every form and submission, so give it only to people who should see that data, and never to the site’s guest user.</p>
    </div>
  </div>
</section>

<section class="border-t border-slate-200 bg-slate-50">
  <div class="mx-auto max-w-3xl px-5 py-14 sm:px-8 md:py-20">
    <h2 class="text-2xl font-semibold tracking-tight text-balance text-slate-950 sm:text-3xl">A five-point checklist before you publish</h2>
    <ul class="mt-8 space-y-3" aria-label="Pre-publish checklist">
      <li>
        <label class="flex min-h-11 cursor-pointer items-start gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md hover:ring-brand/40 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand sm:p-5">
          <input type="checkbox" class="peer mt-1 h-5 w-5 shrink-0 cursor-pointer rounded border-slate-400 accent-teal-700">
          <span class="text-lg leading-relaxed text-slate-800 transition peer-checked:text-slate-500 peer-checked:line-through">Confirm the PublicForm site is active and the guest user has only the access the setup guide describes.</span>
        </label>
      </li>
      <li>
        <label class="flex min-h-11 cursor-pointer items-start gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md hover:ring-brand/40 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand sm:p-5">
          <input type="checkbox" class="peer mt-1 h-5 w-5 shrink-0 cursor-pointer rounded border-slate-400 accent-teal-700">
          <span class="text-lg leading-relaxed text-slate-800 transition peer-checked:text-slate-500 peer-checked:line-through">Connect Turnstile and switch on Spam check for forms that will be widely shared.</span>
        </label>
      </li>
      <li>
        <label class="flex min-h-11 cursor-pointer items-start gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md hover:ring-brand/40 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand sm:p-5">
          <input type="checkbox" class="peer mt-1 h-5 w-5 shrink-0 cursor-pointer rounded border-slate-400 accent-teal-700">
          <span class="text-lg leading-relaxed text-slate-800 transition peer-checked:text-slate-500 peer-checked:line-through">Enable uploads only on forms that need them, and set the lowest file count that works.</span>
        </label>
      </li>
      <li>
        <label class="flex min-h-11 cursor-pointer items-start gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md hover:ring-brand/40 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand sm:p-5">
          <input type="checkbox" class="peer mt-1 h-5 w-5 shrink-0 cursor-pointer rounded border-slate-400 accent-teal-700">
          <span class="text-lg leading-relaxed text-slate-800 transition peer-checked:text-slate-500 peer-checked:line-through">Configure lookup fields deliberately, choosing a fixed record or a short list of names.</span>
        </label>
      </li>
      <li>
        <label class="flex min-h-11 cursor-pointer items-start gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md hover:ring-brand/40 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand sm:p-5">
          <input type="checkbox" class="peer mt-1 h-5 w-5 shrink-0 cursor-pointer rounded border-slate-400 accent-teal-700">
          <span class="text-lg leading-relaxed text-slate-800 transition peer-checked:text-slate-500 peer-checked:line-through">Save the form, open the Visitor view, and send yourself a test submission.</span>
        </label>
      </li>
    </ul>
  </div>
</section>

<section class="relative overflow-hidden bg-slate-950">
  <div class="pointer-events-none absolute inset-0 bg-linear-to-br from-brand/25 via-slate-950 to-slate-950"></div>
  <div class="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand/20 blur-3xl"></div>
  <div class="relative mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 md:py-24">
    <h2 class="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">Publish with confidence.</h2>
    <p class="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-300">Explore Smart Forms &amp; Surveys.</p>
    <a href="/contact.html" class="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 text-base font-semibold text-white shadow-lg shadow-brand/30 transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
      Get Smart Forms &amp; Surveys
      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
    </a>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto max-w-3xl px-5 py-14 sm:px-8 md:py-20">
    <h2 class="text-2xl font-semibold tracking-tight text-balance text-slate-950 sm:text-3xl">Related reading</h2>
    <ul class="mt-6 space-y-3">
      <li>
        <a href="/blog/native-salesforce-forms.html" class="group flex min-h-11 items-center justify-between gap-4 rounded-2xl p-4 text-lg font-medium text-slate-900 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:text-brand hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:p-5">
          <span>Why Native Salesforce Forms Beat a Form Tool Plus a Connector</span>
          <svg class="h-5 w-5 shrink-0 transition group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
      </li>
      <li>
        <a href="/blog/build-public-salesforce-form.html" class="group flex min-h-11 items-center justify-between gap-4 rounded-2xl p-4 text-lg font-medium text-slate-900 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:text-brand hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:p-5">
          <span>How to Build a Public Salesforce Form in Five Steps (No Code)</span>
          <svg class="h-5 w-5 shrink-0 transition group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
      </li>
    </ul>
  </div>
</section>
