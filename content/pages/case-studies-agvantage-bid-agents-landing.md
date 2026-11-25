---
title: "AgVantage Grain Bid Agents: One-Page Overview"
slug: case-studies-agvantage-bid-agents-landing
url: /case-studies/agvantage-bid-agents-landing/
order: 50
description: How TwinStack built two Claude agents that load daily GrainCorp and Bunge grain bids into AgVantage Commodities' Salesforce org, replacing manual entry.
metaTitle: "Grain Bid Agents for Salesforce: Overview | TwinStack"
metaDescription: One-page overview of the two Claude agents that load daily GrainCorp and Bunge grain bid prices into AgVantage's Salesforce org, with a report every run.
focusKeyword: grain bid agents
---

<style>
  .p-agv .agv-grid-bg {
    background-image:
      linear-gradient(to right, rgb(255 255 255 / 0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgb(255 255 255 / 0.05) 1px, transparent 1px);
    background-size: 44px 44px;
    -webkit-mask-image: radial-gradient(ellipse 70% 60% at 60% 40%, #000 30%, transparent 75%);
            mask-image: radial-gradient(ellipse 70% 60% at 60% 40%, #000 30%, transparent 75%);
  }
  .p-agv .agv-reveal-ready {
    opacity: 0;
    transform: translateY(14px);
    transition: opacity .55s ease, transform .55s ease;
  }
  .p-agv .agv-reveal-ready.agv-in {
    opacity: 1;
    transform: none;
  }
  @keyframes agv-pulse {
    0%, 100% { opacity: .45; }
    50% { opacity: 1; }
  }
  @media (prefers-reduced-motion: no-preference) {
    .p-agv .agv-pulse { animation: agv-pulse 2.4s ease-in-out infinite; }
  }
</style>

<div class="p-agv font-sans text-slate-800 antialiased">

<section class="relative isolate overflow-hidden bg-slate-950 text-white">
  <div class="agv-grid-bg pointer-events-none absolute inset-0 -z-10" aria-hidden="true"></div>
  <div class="pointer-events-none absolute -top-32 right-[-10%] -z-10 h-[28rem] w-[28rem] max-w-full rounded-full bg-brand/40 blur-3xl" aria-hidden="true"></div>
  <div class="pointer-events-none absolute bottom-[-12rem] left-[-8rem] -z-10 h-[22rem] w-[22rem] max-w-full rounded-full bg-emerald-500/15 blur-3xl" aria-hidden="true"></div>

  <div class="mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-8 md:pb-28 md:pt-10">
    <a href="/case-studies.html" class="group inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-medium text-slate-300 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
      <svg class="h-4 w-4 transition group-hover:-translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
      Back to Case Studies
    </a>

    <div class="mt-10 grid items-center gap-14 lg:mt-14 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">Case study · AgVantage Commodities</p>
        <h1 class="mt-5 text-[clamp(2.25rem,5.5vw,4rem)] font-semibold leading-[1.05] tracking-tight text-balance">Automating grain bid ingestion into Salesforce with Claude agents</h1>
        <p class="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">TwinStack built two Claude agents that load daily grain bid prices from GrainCorp and Bunge into AgVantage Commodities' Salesforce org, replacing manual entry. Both agents run in production and have processed thousands of bids.</p>
        <div class="mt-10">
          <a href="#how-it-works" class="inline-flex min-h-12 items-center gap-2 rounded-xl bg-brand px-6 py-3 text-base font-semibold text-white shadow-lg shadow-brand/30 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            See how it works
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
          </a>
        </div>
      </div>

      <div class="relative" aria-hidden="true">
        <div class="absolute -inset-4 rounded-3xl bg-linear-to-br from-brand/30 to-emerald-400/10 blur-2xl"></div>
        <div class="relative rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-sm sm:p-6">
          <div class="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div class="flex items-center gap-2">
              <span class="agv-pulse h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
              <span class="text-sm font-medium text-slate-200">Daily bid run</span>
            </div>
            <span class="rounded-md bg-white/10 px-2 py-1 text-xs text-slate-300">Production</span>
          </div>
          <ul class="mt-5 space-y-3">
            <li class="flex items-center gap-3 rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
              <span class="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/10 text-emerald-300"><svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg></span>
              <span class="min-w-0 flex-1 text-sm text-slate-200">Fetch bid-sheet PDFs</span>
              <span class="text-xs text-slate-400">GrainCorp · Bunge</span>
            </li>
            <li class="flex items-center gap-3 rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
              <span class="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/10 text-emerald-300"><svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18"/><path d="M9 4v16"/></svg></span>
              <span class="min-w-0 flex-1 text-sm text-slate-200">Convert tables to CSV</span>
              <span class="text-xs text-slate-400">Normalised</span>
            </li>
            <li class="flex items-center gap-3 rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
              <span class="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/10 text-emerald-300"><svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a4.5 4.5 0 0 1-.5-8.97A6 6 0 0 1 18 9.5a4 4 0 0 1-1 7.9"/><path d="M12 12v8"/><path d="m9 15 3-3 3 3"/></svg></span>
              <span class="min-w-0 flex-1 text-sm text-slate-200">Upload to Salesforce</span>
              <span class="text-xs text-slate-400">Apex REST</span>
            </li>
            <li class="flex items-center gap-3 rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
              <span class="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/10 text-emerald-300"><svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg></span>
              <span class="min-w-0 flex-1 text-sm text-slate-200">Email run report</span>
              <span class="text-xs text-slate-400">HTML</span>
            </li>
          </ul>
          <div class="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-4 text-xs">
            <span class="inline-flex items-center gap-1.5 rounded-md bg-emerald-400/10 px-2 py-1 text-emerald-200"><span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>Created</span>
            <span class="inline-flex items-center gap-1.5 rounded-md bg-sky-400/10 px-2 py-1 text-sky-200"><span class="h-1.5 w-1.5 rounded-full bg-sky-400"></span>Updated</span>
            <span class="inline-flex items-center gap-1.5 rounded-md bg-amber-400/10 px-2 py-1 text-amber-200"><span class="h-1.5 w-1.5 rounded-full bg-amber-400"></span>Skipped</span>
            <span class="inline-flex items-center gap-1.5 rounded-md bg-rose-400/10 px-2 py-1 text-rose-200"><span class="h-1.5 w-1.5 rounded-full bg-rose-400"></span>Failed</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="relative border-b border-slate-200 bg-white">
  <div class="mx-auto max-w-7xl px-5 sm:px-8">
    <dl class="grid grid-cols-2 divide-slate-200 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x">
      <div class="agv-reveal px-2 py-8 sm:px-6 lg:py-10">
        <dt class="text-sm text-slate-600">Claude agents in production</dt>
        <dd class="order-first text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">2</dd>
      </div>
      <div class="agv-reveal px-2 py-8 sm:px-6 lg:py-10">
        <dt class="text-sm text-slate-600">Grain buyers covered</dt>
        <dd class="order-first text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">2</dd>
      </div>
      <div class="agv-reveal px-2 py-8 sm:px-6 lg:py-10">
        <dt class="text-sm text-slate-600">Buyer regions fetched</dt>
        <dd class="order-first text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">9</dd>
      </div>
      <div class="agv-reveal px-2 py-8 sm:px-6 lg:py-10">
        <dt class="text-sm text-slate-600">Crops handled</dt>
        <dd class="order-first text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">6</dd>
      </div>
      <div class="agv-reveal col-span-2 px-2 py-8 sm:col-span-1 sm:px-6 lg:py-10">
        <dt class="text-sm text-slate-600">Reusable Claude skills</dt>
        <dd class="order-first text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">4</dd>
      </div>
    </dl>
  </div>
</section>

<section class="bg-slate-50">
  <div class="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
    <div class="agv-reveal">
      <h2 class="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">At a glance</h2>
      <p class="mt-5 text-lg leading-relaxed text-slate-600">An Australian grain trader needed daily buyer prices in Salesforce without anyone retyping PDF tables. The agents were built mainly in August 2026, then moved from sandbox to production.</p>
      <div class="mt-8 flex flex-wrap gap-2">
        <span class="rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-slate-700 ring-1 ring-slate-200">Wheat</span>
        <span class="rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-slate-700 ring-1 ring-slate-200">Barley</span>
        <span class="rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-slate-700 ring-1 ring-slate-200">Canola</span>
        <span class="rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-slate-700 ring-1 ring-slate-200">Lentil</span>
        <span class="rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-slate-700 ring-1 ring-slate-200">Chickpea</span>
        <span class="rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-slate-700 ring-1 ring-slate-200">Sorghum</span>
      </div>
    </div>

    <div class="agv-reveal overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
      <dl class="divide-y divide-slate-100">
        <div class="grid gap-1 px-6 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
          <dt class="text-sm font-medium text-slate-500">Client</dt>
          <dd class="text-base text-slate-900">AgVantage Commodities, Australia</dd>
        </div>
        <div class="grid gap-1 px-6 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
          <dt class="text-sm font-medium text-slate-500">Industry</dt>
          <dd class="text-base text-slate-900">Agricultural commodity trading</dd>
        </div>
        <div class="grid gap-1 px-6 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
          <dt class="text-sm font-medium text-slate-500">Timeline</dt>
          <dd class="text-base text-slate-900">Built mainly in August 2026, then moved from sandbox to production</dd>
        </div>
        <div class="grid gap-1 px-6 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
          <dt class="text-sm font-medium text-slate-500">Approach</dt>
          <dd class="text-base text-slate-900">Claude agents with reusable skills</dd>
        </div>
        <div class="grid gap-1 px-6 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
          <dt class="text-sm font-medium text-slate-500">Integrations</dt>
          <dd class="text-base text-slate-900">Salesforce (custom Apex REST service), buyer websites, Microsoft 365 and Gmail</dd>
        </div>
        <div class="grid gap-1 px-6 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
          <dt class="text-sm font-medium text-slate-500">Crops</dt>
          <dd class="text-base text-slate-900">Wheat, barley, canola, lentil, chickpea and sorghum</dd>
        </div>
      </dl>
    </div>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
    <div class="agv-reveal max-w-2xl">
      <h2 class="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">The challenge</h2>
      <p class="mt-5 text-lg leading-relaxed text-slate-600">Grain buyers publish their daily prices as PDF bid sheets, not as data feeds. Getting those prices into Salesforce meant reading every sheet and typing it in.</p>
    </div>

    <div class="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      <article class="agv-reveal group rounded-2xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-0.5 hover:border-brand/30 hover:bg-white hover:shadow-lg hover:shadow-slate-200/70 lg:col-span-2">
        <span class="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand"><svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6"/><path d="M9 17h4"/></svg></span>
        <h3 class="mt-5 text-xl font-semibold text-slate-950">Layouts that never sit still</h3>
        <p class="mt-3 leading-relaxed text-slate-600">Each sheet has its own shape: transposed SA and WA wheat sheets, crop years stacked on top of each other, and Fixed and Multi Grade tables printed side by side.</p>
        <div class="mt-6 grid gap-3 sm:grid-cols-3" aria-hidden="true">
          <div class="rounded-lg bg-white p-3 ring-1 ring-slate-200">
            <div class="grid grid-cols-4 gap-1"><span class="h-2 rounded-sm bg-slate-300"></span><span class="h-2 rounded-sm bg-slate-200"></span><span class="h-2 rounded-sm bg-slate-200"></span><span class="h-2 rounded-sm bg-slate-200"></span></div>
            <div class="mt-1 grid grid-cols-4 gap-1"><span class="h-2 rounded-sm bg-slate-300"></span><span class="h-2 rounded-sm bg-slate-100"></span><span class="h-2 rounded-sm bg-slate-100"></span><span class="h-2 rounded-sm bg-slate-100"></span></div>
            <p class="mt-2 text-xs text-slate-500">Transposed</p>
          </div>
          <div class="rounded-lg bg-white p-3 ring-1 ring-slate-200">
            <div class="space-y-1"><span class="block h-2 w-full rounded-sm bg-slate-300"></span><span class="block h-2 w-3/4 rounded-sm bg-slate-100"></span><span class="block h-2 w-full rounded-sm bg-slate-300"></span><span class="block h-2 w-3/4 rounded-sm bg-slate-100"></span></div>
            <p class="mt-2 text-xs text-slate-500">Stacked crop years</p>
          </div>
          <div class="rounded-lg bg-white p-3 ring-1 ring-slate-200">
            <div class="grid grid-cols-2 gap-1.5"><span class="h-6 rounded-sm bg-slate-200"></span><span class="h-6 rounded-sm bg-slate-300"></span></div>
            <p class="mt-2 text-xs text-slate-500">Side-by-side grades</p>
          </div>
        </div>
      </article>

      <article class="agv-reveal rounded-2xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-0.5 hover:border-brand/30 hover:bg-white hover:shadow-lg hover:shadow-slate-200/70">
        <span class="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand"><svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h10"/><path d="M4 17h6"/><path d="m17 4 3 3-3 3"/><path d="m13 14 3 3-3 3"/><path d="M20 7h-3"/><path d="M16 17h-3"/></svg></span>
        <h3 class="mt-5 text-xl font-semibold text-slate-950">Names that don't match</h3>
        <p class="mt-3 leading-relaxed text-slate-600">Site, grade and commodity names on the sheets don't line up with the records in Salesforce.</p>
      </article>

      <article class="agv-reveal rounded-2xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-0.5 hover:border-brand/30 hover:bg-white hover:shadow-lg hover:shadow-slate-200/70">
        <span class="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand"><svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg></span>
        <h3 class="mt-5 text-xl font-semibold text-slate-950">High volume, every day</h3>
        <p class="mt-3 leading-relaxed text-slate-600">Prices arrive across many regions and commodities, so manual entry grows with every sheet.</p>
      </article>

      <article class="agv-reveal rounded-2xl bg-slate-950 p-7 text-white shadow-lg ring-1 ring-slate-900 transition hover:-translate-y-0.5 hover:shadow-xl md:col-span-2">
        <span class="grid h-11 w-11 place-items-center rounded-xl bg-rose-400/15 text-rose-300"><svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/></svg></span>
        <h3 class="mt-5 text-xl font-semibold">Errors are costly</h3>
        <p class="mt-3 max-w-2xl leading-relaxed text-slate-300">A price filed under the wrong site, grade or crop year distorts what traders see. Accuracy matters more than speed.</p>
      </article>
    </div>
  </div>
</section>

<section id="how-it-works" class="scroll-mt-20 bg-slate-50">
  <div class="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
    <div class="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <div class="agv-reveal lg:sticky lg:top-24 lg:self-start">
        <h2 class="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">How it works</h2>
        <p class="mt-5 text-lg leading-relaxed text-slate-600">Each agent runs the same four steps. Every step is a reusable Claude skill, so the pipeline can take on more buyers without starting again.</p>
        <div class="mt-8 rounded-2xl bg-white p-5 ring-1 ring-slate-200">
          <p class="text-sm font-medium text-slate-900">Two agents, one pattern</p>
          <p class="mt-2 text-sm leading-relaxed text-slate-600">One agent handles GrainCorp, the other Bunge. Both share the fetch, convert, upload and report shape.</p>
        </div>
      </div>

      <ol class="relative space-y-6 before:absolute before:bottom-6 before:left-[1.375rem] before:top-6 before:w-px before:bg-slate-300">
        <li class="agv-reveal relative grid grid-cols-[2.75rem_1fr] gap-5">
          <span class="relative z-10 grid h-11 w-11 place-items-center rounded-full bg-brand text-white shadow-md shadow-brand/30 ring-4 ring-slate-50"><svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg></span>
          <div class="min-w-0 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md">
            <h3 class="text-xl font-semibold text-slate-950">Fetch</h3>
            <p class="mt-2 leading-relaxed text-slate-600">The skill logs in to the buyer's website and downloads the bid-sheet PDFs for each region.</p>
            <div class="mt-5 space-y-3">
              <div>
                <p class="text-xs font-semibold uppercase tracking-wider text-slate-500">GrainCorp</p>
                <div class="mt-2 flex flex-wrap gap-1.5">
                  <span class="rounded-md bg-slate-100 px-2 py-1 text-sm text-slate-700">QLD</span>
                  <span class="rounded-md bg-slate-100 px-2 py-1 text-sm text-slate-700">NNSW</span>
                  <span class="rounded-md bg-slate-100 px-2 py-1 text-sm text-slate-700">SNSW</span>
                  <span class="rounded-md bg-slate-100 px-2 py-1 text-sm text-slate-700">VIC</span>
                  <span class="rounded-md bg-slate-100 px-2 py-1 text-sm text-slate-700">SA</span>
                  <span class="rounded-md bg-slate-100 px-2 py-1 text-sm text-slate-700">WA</span>
                </div>
              </div>
              <div>
                <p class="text-xs font-semibold uppercase tracking-wider text-slate-500">Bunge</p>
                <div class="mt-2 flex flex-wrap gap-1.5">
                  <span class="rounded-md bg-slate-100 px-2 py-1 text-sm text-slate-700">NSW Northern</span>
                  <span class="rounded-md bg-slate-100 px-2 py-1 text-sm text-slate-700">NSW Southern</span>
                  <span class="rounded-md bg-slate-100 px-2 py-1 text-sm text-slate-700">QLD Southern</span>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li class="agv-reveal relative grid grid-cols-[2.75rem_1fr] gap-5">
          <span class="relative z-10 grid h-11 w-11 place-items-center rounded-full bg-brand text-white shadow-md shadow-brand/30 ring-4 ring-slate-50"><svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18"/><path d="M9 4v16"/></svg></span>
          <div class="min-w-0 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md">
            <h3 class="text-xl font-semibold text-slate-950">Convert</h3>
            <p class="mt-2 leading-relaxed text-slate-600">PDF tables are extracted into Salesforce-ready CSV and normalised so names match the org. The Bunge skill applies nine normalisation rules, including a 16-entry site-name lookup.</p>
          </div>
        </li>

        <li class="agv-reveal relative grid grid-cols-[2.75rem_1fr] gap-5">
          <span class="relative z-10 grid h-11 w-11 place-items-center rounded-full bg-brand text-white shadow-md shadow-brand/30 ring-4 ring-slate-50"><svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 18a4.5 4.5 0 0 1-.5-8.97A6 6 0 0 1 18 9.5a4 4 0 0 1-1 7.9"/><path d="M12 12v8"/><path d="m9 15 3-3 3 3"/></svg></span>
          <div class="min-w-0 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md">
            <h3 class="text-xl font-semibold text-slate-950">Upload</h3>
            <p class="mt-2 leading-relaxed text-slate-600">The CSV is posted to a custom Apex REST service in Salesforce, which returns a result for every row: created, updated, skipped or failed.</p>
          </div>
        </li>

        <li class="agv-reveal relative grid grid-cols-[2.75rem_1fr] gap-5">
          <span class="relative z-10 grid h-11 w-11 place-items-center rounded-full bg-brand text-white shadow-md shadow-brand/30 ring-4 ring-slate-50"><svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg></span>
          <div class="min-w-0 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md">
            <h3 class="text-xl font-semibold text-slate-950">Report</h3>
            <p class="mt-2 leading-relaxed text-slate-600">AgVantage receives a colour-coded HTML email report of every run, so the team can see exactly what happened to each row.</p>
          </div>
        </li>
      </ol>
    </div>
  </div>
</section>

<section class="relative isolate overflow-hidden bg-slate-950 text-white">
  <div class="pointer-events-none absolute left-1/2 top-0 -z-10 h-80 w-[40rem] max-w-full -translate-x-1/2 rounded-full bg-brand/30 blur-3xl" aria-hidden="true"></div>
  <div class="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[1.15fr_0.85fr]">
    <div class="agv-reveal">
      <h2 class="text-3xl font-semibold tracking-tight sm:text-4xl">Where Claude applies judgement</h2>
      <p class="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">Reading a bid sheet isn't only extraction. The agents make the calls a careful person would make, and stop when a call isn't clear.</p>
      <ul class="mt-10 grid gap-4 sm:grid-cols-2">
        <li class="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 transition hover:bg-white/10">
          <svg class="h-6 w-6 text-emerald-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>
          <p class="mt-3 leading-relaxed text-slate-200">Checks the rendered pages that each price sits under the right site, grade and crop year.</p>
        </li>
        <li class="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 transition hover:bg-white/10">
          <svg class="h-6 w-6 text-emerald-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18"/><path d="M7 12h10"/><path d="M10 18h4"/></svg>
          <p class="mt-3 leading-relaxed text-slate-200">Uses the Multi Grade price only when no fixed bid exists.</p>
        </li>
        <li class="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 transition hover:bg-white/10">
          <svg class="h-6 w-6 text-emerald-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v18"/><rect x="3" y="6" width="6" height="12" rx="1"/><rect x="15" y="6" width="6" height="12" rx="1"/></svg>
          <p class="mt-3 leading-relaxed text-slate-200">Keeps Fixed Grade and Delivered rows apart, marking delivered rows with a -DEL suffix.</p>
        </li>
        <li class="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 transition hover:bg-white/10">
          <svg class="h-6 w-6 text-emerald-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <p class="mt-3 leading-relaxed text-slate-200">Explains upload failures in plain language, so the fix is obvious.</p>
        </li>
      </ul>
    </div>

    <div class="agv-reveal">
      <div class="rounded-2xl border border-amber-300/20 bg-linear-to-b from-amber-300/10 to-transparent p-6 sm:p-8">
        <div class="flex items-center gap-3">
          <span class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-amber-300/15 text-amber-200"><svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></span>
          <h3 class="text-lg font-semibold">It never guesses</h3>
        </div>
        <p class="mt-4 leading-relaxed text-slate-300">Ambiguous rows, such as POA prices or unclear crop years, are not loaded. Claude flags each one with the options it sees and writes it to a review folder for a person to decide.</p>
        <div class="mt-6 space-y-3" aria-hidden="true">
          <div class="flex items-center justify-between gap-3 rounded-xl bg-slate-900/80 px-4 py-3 ring-1 ring-white/10">
            <span class="text-sm text-slate-200">Price shown as POA</span>
            <span class="rounded-md bg-amber-300/15 px-2 py-1 text-xs text-amber-200">Review</span>
          </div>
          <div class="flex items-center justify-between gap-3 rounded-xl bg-slate-900/80 px-4 py-3 ring-1 ring-white/10">
            <span class="text-sm text-slate-200">Crop year unclear</span>
            <span class="rounded-md bg-amber-300/15 px-2 py-1 text-xs text-amber-200">Review</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
    <div class="agv-reveal max-w-2xl">
      <h2 class="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">The results</h2>
      <p class="mt-5 text-lg leading-relaxed text-slate-600">Both agents run in production and have processed thousands of bids. Here's what changed for AgVantage.</p>
    </div>

    <div class="mt-14 grid gap-5 md:grid-cols-2">
      <div class="agv-reveal flex gap-5 rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-lg hover:shadow-slate-200/70">
        <span class="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"><svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 5 5L20 7"/></svg></span>
        <div>
          <h3 class="text-lg font-semibold text-slate-950">No more retyping</h3>
          <p class="mt-2 leading-relaxed text-slate-600">Trader-facing bid data no longer depends on someone retyping PDF tables.</p>
        </div>
      </div>
      <div class="agv-reveal flex gap-5 rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-lg hover:shadow-slate-200/70">
        <span class="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"><svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 5 5L20 7"/></svg></span>
        <div>
          <h3 class="text-lg font-semibold text-slate-950">A clear record of every run</h3>
          <p class="mt-2 leading-relaxed text-slate-600">Every run ends with an email showing which rows were created, updated, skipped or failed.</p>
        </div>
      </div>
      <div class="agv-reveal flex gap-5 rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-lg hover:shadow-slate-200/70">
        <span class="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"><svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 5 5L20 7"/></svg></span>
        <div>
          <h3 class="text-lg font-semibold text-slate-950">A cleaner live org</h3>
          <p class="mt-2 leading-relaxed text-slate-600">Normalisation rules and the review path keep ambiguous rows out of the live Salesforce org.</p>
        </div>
      </div>
      <div class="agv-reveal flex gap-5 rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-lg hover:shadow-slate-200/70">
        <span class="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"><svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 5 5L20 7"/></svg></span>
        <div>
          <h3 class="text-lg font-semibold text-slate-950">Ready for more buyers</h3>
          <p class="mt-2 leading-relaxed text-slate-600">The skills are reusable, so adding another buyer builds on what already works.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="bg-white pb-20 md:pb-28">
  <div class="mx-auto max-w-7xl px-5 sm:px-8">
    <div class="agv-reveal relative isolate overflow-hidden rounded-3xl bg-brand px-6 py-14 text-white shadow-xl shadow-brand/20 sm:px-12 md:py-20">
      <div class="pointer-events-none absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full bg-white/10 blur-2xl" aria-hidden="true"></div>
      <div class="pointer-events-none absolute -bottom-24 left-1/3 -z-10 h-64 w-64 rounded-full bg-slate-950/20 blur-3xl" aria-hidden="true"></div>
      <div class="grid items-center gap-10 lg:grid-cols-[1.4fr_auto]">
        <div>
          <h2 class="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Want Claude working inside your business?</h2>
          <p class="mt-5 max-w-2xl text-lg leading-relaxed text-white/90">TwinStack builds Claude agents, skills and integrations that fit how your team already works, with people kept in the loop where judgement matters.</p>
        </div>
        <div>
          <a href="/contact.html" class="inline-flex min-h-12 items-center gap-2 rounded-xl bg-white px-7 py-3 text-base font-semibold text-slate-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            Talk to Us
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </div>
    <p class="mt-10 text-center">
      <a href="/case-studies.html" class="inline-flex min-h-11 items-center gap-2 rounded-lg px-2 text-sm font-medium text-slate-600 transition hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
        Back to Case Studies
      </a>
    </p>
  </div>
</section>

</div>

<script>
  (function () {
    var root = document.querySelector('.p-agv');
    if (!root || !('IntersectionObserver' in window)) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var items = root.querySelectorAll('.agv-reveal');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('agv-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) return;
      el.classList.add('agv-reveal-ready');
      io.observe(el);
    });
  })();
</script>
