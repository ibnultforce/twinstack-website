---
title: "AgVantage: Claude Agents Load Grain Bids into Salesforce"
description: "TwinStack built two Claude agents that turn GrainCorp and Bunge PDF bid sheets into Salesforce records for AgVantage Commodities, with a report on every run."
metaTitle: "Claude Agents for Salesforce: Grain Bids | TwinStack"
metaDescription: Claude agents for Salesforce load GrainCorp and Bunge PDF bid sheets as records, with a report on every run, replacing manual entry.
focusKeyword: Claude agents for Salesforce
slug: case-studies-agvantage-claude-bid-agents
url: /case-studies/agvantage-claude-bid-agents.html
order: 50
stylesheet: /assets/css/imported/case-studies-agvantage-claude-bid-agents.css
hideCta: true
ownChrome: true
scripts:
  - src: "/assets/js/imported/case-studies-agvantage-claude-bid-agents/inline-1.js"
    head: true
    module: false
    nomodule: false
    defer: false
    async: false
  - src: "/js/ts-analytics.js"
    head: true
    module: false
    nomodule: false
    defer: true
    async: false
  - src: "/assets/js/imported/case-studies-agvantage-claude-bid-agents/inline-2.js"
    head: false
    module: false
    nomodule: false
    defer: false
    async: false
scriptHtmlClass: scroll-smooth
scriptBodyClass: font-sans antialiased text-slate-800
---

<div class="imported-page imp-scroll-smooth imp-font-sans imp-antialiased imp-text-slate-800">
<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true"><symbol id="i-arrow-left" viewBox="0 0 512 512"><path d="M232 96L72 256l160 160 45-45-83-83h254v-64H194l83-83z" /></symbol><symbol id="i-arrow-right" viewBox="0 0 512 512"><path d="M280 96l160 160-160 160-45-45 83-83H64v-64h254l-83-83z" /></symbol><symbol id="i-times" viewBox="0 0 512 512"><path d="M312 256l142 142-56 56-142-142-142 142-56-56 142-142L58 114l56-56 142 142L398 58l56 56z" /></symbol><symbol id="i-bars" viewBox="0 0 512 512"><path d="M48 96h416v56H48zm0 132h416v56H48zm0 132h416v56H48z" /></symbol><symbol id="i-calendar" viewBox="0 0 512 512"><path d="M144 40h48v56h128V40h48v56h64a24 24 0 0124 24v328a24 24 0 01-24 24H80a24 24 0 01-24-24V120a24 24 0 0124-24h64zM104 208v216h304V208z" /></symbol><symbol id="i-user" viewBox="0 0 512 512"><path d="M256 64a96 96 0 110 192 96 96 0 010-192zm0 240c88 0 160 48 160 108v36H96v-36c0-60 72-108 160-108z" /></symbol><symbol id="i-youtube" viewBox="0 0 512 512"><path d="M488 176c-6-34-26-54-60-58C376 112 256 112 256 112s-120 0-172 6c-34 4-54 24-60 58-6 40-6 80-6 80s0 40 6 80c6 34 26 54 60 58 52 6 172 6 172 6s120 0 172-6c34-4 54-24 60-58 6-40 6-80 6-80s0-40-6-80zM208 336V176l144 80z" /></symbol><symbol id="i-linkedin-in" viewBox="0 0 512 512"><path d="M56 168v312h94V168zm47-136a54 54 0 100 108 54 54 0 000-108zm139 136v312h94V318c0-48 24-72 60-72s54 24 54 72v162h94V300c0-90-48-138-118-138-54 0-78 30-92 51v-45z" /></symbol></svg>
<nav id="navbar" class="imp-fixed imp-z-50 imp-top-6 imp-left-1/2 imp--translate-x-1/2 imp-w-[95%] imp-max-w-7xl imp-rounded-2xl imp-bg-white imp-border imp-border-slate-100 imp-shadow-2xl imp-flex imp-justify-between imp-items-center imp-px-6 imp-lg:px-8 imp-h-20 imp-transition-all imp-duration-300">
        <a href="/" class="imp-flex-shrink-0 imp-flex imp-items-center imp-gap-2">
            <img width="100" height="100" src="https://res.cloudinary.com/du42kbmmn/image/upload/w_100,f_auto,q_auto/v1769165197/Black_White_Minimalist_Professional_Initial_Logo_1_eoam8g.png" alt="TwinStack Logo" class="imp-h-14 imp-w-auto">
            <span class="imp-font-bold imp-text-2xl imp-tracking-tight imp-block imp-ts-wm"><span class="imp-ts-wm-top"><span class="imp-text-[#343453]">Twin</span><span class="imp-color-shift-text">Stack</span></span><span class="imp-ts-wm-sub">Solutions</span></span>
        </a>
        <div class="imp-hidden imp-md:flex imp-space-x-8 imp-items-center imp-ts-nav-links">
            <a href="/pricing" class="imp-text-slate-600 imp-hover:text-brand-600 imp-font-medium imp-transition">Pricing</a>
            <div class="imp-ts-dd"><a href="/services" class="imp-text-slate-600 imp-hover:text-brand-600 imp-font-medium imp-transition" aria-haspopup="true">Products &amp; Services<svg class="imp-ts-dd-car" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg></a><div class="imp-ts-dd-menu"><a href="/products">Products<small>Free native AppExchange apps</small></a><a href="/services">Services<small>Consulting, nonprofits, Tableau and more</small></a><a href="/#pdo-journey">Expertise<small>Our path from strategy to AppExchange</small></a></div></div>
            <a href="/case-studies" class="imp-text-brand-600 imp-font-bold imp-transition">Case Studies</a>
            <a href="/blog" class="imp-text-slate-600 imp-hover:text-brand-600 imp-font-medium imp-transition">Blog</a>
            <a href="/cost-estimator" class="imp-ts-btn-outline">Cost Estimator</a>
            <a href="/contact" class="imp-px-5 imp-py-2.5 imp-rounded-full imp-bg-brand-600 imp-text-white imp-font-semibold imp-hover:bg-brand-900 imp-transition imp-shadow-lg">Contact Us</a>
        </div>
        <div class="imp-md:hidden imp-flex imp-items-center">
            <button id="mobile-menu-btn" class="imp-text-slate-600 imp-p-2"><svg class="imp-svgi imp-text-2xl" aria-hidden="true"><use href="#i-bars" /></svg></button>
        </div>
    </nav>
<div id="mobile-menu" class="imp-fixed imp-inset-y-0 imp-right-0 imp-w-64 imp-bg-white/95 imp-backdrop-blur-xl imp-shadow-2xl imp-z-[60] imp-flex imp-flex-col imp-p-6 imp-transition-transform imp-duration-300 imp-translate-x-full imp-md:hidden">
        <div class="imp-flex imp-justify-end imp-mb-8"><button id="close-menu-btn" class="imp-text-slate-500"><svg class="imp-svgi imp-text-2xl" aria-hidden="true"><use href="#i-times" /></svg></button></div>
        <div class="imp-flex imp-flex-col imp-space-y-6">
            <a href="/" class="imp-text-lg imp-font-medium imp-text-slate-800 imp-hover:text-brand-600">Home</a>
            <a href="/about" class="imp-text-lg imp-font-medium imp-text-slate-800 imp-hover:text-brand-600">About</a>
            <a href="/pricing" class="imp-text-lg imp-font-medium imp-text-slate-800 imp-hover:text-brand-600">Pricing</a>
            <a href="/products" class="imp-text-lg imp-font-medium imp-text-slate-800 imp-hover:text-brand-600">Products</a>
            <a href="/services" class="imp-text-lg imp-font-medium imp-text-slate-800 imp-hover:text-brand-600">Services</a>
            <a href="/#pdo-journey" class="imp-text-lg imp-font-medium imp-text-slate-800 imp-hover:text-brand-600">Expertise</a>
            <a href="/case-studies" class="imp-text-lg imp-font-medium imp-text-brand-600 imp-font-bold">Case Studies</a>
            <a href="/blog" class="imp-text-lg imp-font-medium imp-text-slate-800 imp-hover:text-brand-600">Blog</a>
            <a href="/cost-estimator" class="imp-ts-btn-outline-block">Cost Estimator</a>
            <a href="/contact" class="imp-px-5 imp-py-3 imp-rounded-lg imp-bg-brand-600 imp-text-white imp-text-center imp-font-semibold">Contact Us</a>
        </div>
    </div>
    <header class="imp-pt-40 imp-pb-16 imp-bg-slate-900 imp-relative imp-overflow-hidden">
        <div class="imp-absolute imp-inset-0 imp-opacity-20">
            <div class="imp-absolute imp--top-24 imp--left-24 imp-w-96 imp-h-96 imp-bg-brand-500 imp-rounded-full imp-blur-3xl"></div>
            <div class="imp-absolute imp-bottom-0 imp-right-0 imp-w-80 imp-h-80 imp-bg-purple-500 imp-rounded-full imp-blur-3xl"></div>
        </div>
        <div class="imp-max-w-4xl imp-mx-auto imp-px-4 imp-sm:px-6 imp-lg:px-8 imp-relative imp-z-10 imp-text-center">
            <div class="imp-inline-flex imp-items-center imp-gap-2 imp-px-3 imp-py-1 imp-rounded-full imp-bg-brand-900/50 imp-border imp-border-brand-500/30 imp-text-brand-200 imp-text-sm imp-font-semibold imp-mb-6">
                <span class="imp-w-2 imp-h-2 imp-rounded-full imp-bg-brand-400"></span> Claude AI Implementation</div>
            <h1 class="imp-text-3xl imp-md:text-5xl imp-font-extrabold imp-text-white imp-mb-6 imp-leading-tight">Automating grain bid ingestion into Salesforce with Claude agents</h1>
            <div class="imp-flex imp-items-center imp-justify-center imp-gap-6 imp-text-slate-400 imp-text-sm">
                <div><svg class="imp-svgi imp-mr-2" aria-hidden="true"><use href="#i-calendar" /></svg>November 17, 2026</div>
                <div><svg class="imp-svgi imp-mr-2" aria-hidden="true"><use href="#i-user" /></svg>TwinStack Team</div>
            </div>
        </div>
    </header>
    <section class="imp-py-20 imp-bg-white imp-relative">
        <div class="imp-max-w-3xl imp-mx-auto imp-px-6">
            <a href="/case-studies" class="imp-inline-flex imp-items-center imp-gap-2 imp-text-brand-600 imp-font-semibold imp-mb-8 imp-hover:underline">
                <svg class="imp-svgi" aria-hidden="true"><use href="#i-arrow-left" /></svg> Back to Case Studies
            </a>
            <div class="imp-ts-ai-hero"><img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_1200,f_auto,q_auto/v1795012068/agvantage-claude-grain-bid-agents_fp376j.png" alt="Automating grain bid ingestion into Salesforce with Claude agents" width="1200" height="675" style="display:block;width:100%;height:auto;border-radius:16px"><div style="display:none" class="imp-ts-ai-cover imp-ts-ai-c1" role="img" aria-label="Automating grain bid ingestion into Salesforce with Claude agents"><span class="imp-ts-ai-icon"><svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 2l1.9 6.1L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.9z" /><path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z" /></svg></span><span class="imp-ts-ai-chip">Claude implementation</span><span class="imp-ts-ai-title">Grain bid agents</span><span class="imp-ts-ai-sub">Claude agents · PDF bid sheets to Salesforce</span></div></div>
            <article>
<p class="imp-text-xl imp-text-slate-600 imp-font-medium imp-mb-8">TwinStack built two Claude agents that load daily grain bid prices from GrainCorp and Bunge into AgVantage Commodities' Salesforce org, replacing manual entry. Both agents run in production and have processed thousands of bids.</p>
<h2>At a glance</h2>
<div class="imp-article-table-wrap"><table class="imp-glance"><tbody><tr><th>Client</th><td>AgVantage Commodities, Australia</td></tr><tr><th>Industry</th><td>Agricultural commodity trading</td></tr><tr><th>Built</th><td>Mainly August 2026, then moved from sandbox to production</td></tr><tr><th>Claude products</th><td>Claude agents with reusable skills</td></tr><tr><th>Integrations</th><td>Salesforce (custom Apex REST service), buyer websites, Microsoft 365 and Gmail</td></tr><tr><th>Crops covered</th><td>Wheat, barley, canola, lentil, chickpea, sorghum</td></tr></tbody></table></div>
<h2>The challenge</h2>
<p>AgVantage tracks grain bids in Salesforce as Bid__c records. These feed bid-offer combinations, available stock and the dashboards traders use to compare bids with offers. Buyers such as GrainCorp and Bunge publish their daily prices as PDF bid sheets, not as data feeds, and these sheets are hard to turn into records:</p>
<ul>
<li><strong>Layouts vary.</strong> Some sheets list sites in rows, but the SA and WA wheat sheets are transposed. Crop years are stacked in blocks, and Fixed and Multi Grade tables sit side by side.</li>
<li><strong>Names don't match Salesforce.</strong> Buyer site, grade and commodity names rarely match the org's picklist values and site records.</li>
<li><strong>Volume is high.</strong> Each run covers several regions and commodities.</li>
<li><strong>Errors are costly.</strong> A price under the wrong site, grade or crop year distorts what traders see.</li>
</ul>
<p>The goal was a hands-off pipeline that takes a buyer's published sheet, produces correct Salesforce records and tells AgVantage what happened.</p>
<h2>The solution</h2>
<p>TwinStack built one agent per buyer. Each runs the same four stages, and each stage is a reusable Claude skill:</p>
<ol>
<li><strong>Fetch.</strong> The agent logs in to the buyer's site (Selenium and Chrome) and downloads the current bid-sheet PDF for every region. The GrainCorp agent covers QLD, NNSW, SNSW, VIC, SA and WA. The Bunge agent covers NSW Northern, NSW Southern and QLD Southern.</li>
<li><strong>Convert.</strong> It extracts each PDF table into a Salesforce-ready CSV, then normalizes sites, grades and commodities. GrainCorp and Bunge have sibling skills because each buyer needs its own rules. Bunge's skill applies nine normalization rules, including a 16-entry lookup of site names.</li>
<li><strong>Upload.</strong> It posts the CSV to BidCsvUploadRestService, a custom Apex REST service, which returns a result for every row: created, updated, skipped or failed.</li>
<li><strong>Report.</strong> It emails AgVantage a colour-coded HTML report of the run, built in Apex.</li>
</ol>
<h2>How Claude is used</h2>
<p>Claude does more than run scripts. It applies judgement at the points where a mistake would be expensive:</p>
<ul>
<li>It checks rendered pages to confirm each price sits under the right site, grade and crop year.</li>
<li>It uses a Multi Grade price only when no fixed bid exists.</li>
<li>When the same site, grade and crop year appear in both the Fixed-Grade and Delivered tables, it keeps them apart with a -DEL suffix on the Delivered row's ID.</li>
<li>It never guesses ambiguous rows, such as POA prices or unclear crop years. It flags them with options for resolving them and writes them to a review folder instead of uploading them.</li>
<li>After each upload, it reads the response and explains any failures in plain language.</li>
</ul>
<h2>Implementation highlights</h2>
<p>Coordinate-based text extraction (pdftotext with character-position column bucketing) proved more reliable than image-only OCR, because position carries the meaning in these sheets. On the Salesforce side, the REST service cleans site names, maps grade codes through aliases, and resolves restricted picklist values dynamically instead of hardcoding them.</p>
<div class="imp-article-table-wrap"><table>
<thead>
<tr>
<th>Challenge</th>
<th>How it was solved</th>
</tr>
</thead>
<tbody>
<tr>
<td>Side-by-side and stacked tables merged on one page</td>
<td>Recursive block and band segmentation with a gap threshold calibrated per page</td>
</tr>
<tr>
<td>Wrong crop year on multi-year sheets</td>
<td>Crop year assigned per column</td>
</tr>
<tr>
<td>Extractor exited cleanly with zero rows on Bunge two-crop-year grids</td>
<td>pdfplumber fallback, plus per-page error handling, partial writes, new exit codes and per-row validation</td>
</tr>
<tr>
<td>Debug logs hit Salesforce's 20 MB cap during uploads</td>
<td>Removed inner-loop debug calls</td>
</tr>
<tr>
<td>Report colours misaligned with columns</td>
<td>Fixed column alignment in the Apex report builder</td>
</tr>
<tr>
<td>Moving to production, and Bunge's mail from Gmail to Microsoft 365</td>
<td>Both agents migrated, with a check that the upload URL targets production</td>
</tr>
</tbody>
</table></div>
<h2>Results</h2>
<ul>
<li>Trader-facing bid data no longer depends on someone retyping PDF tables.</li>
<li>Every run ends with an email showing which rows were created, updated, skipped or failed.</li>
<li>Normalization rules and the review path keep ambiguous or mismatched rows out of the live org.</li>
<li>The fetch, convert, upload and report skills can be reused for more buyers.</li>
</ul>
<h2>Lessons learned</h2>
<ul>
<li>Position carries meaning in tabular PDFs, so coordinate-based extraction with visual spot-checks beats OCR alone.</li>
<li>Putting buyer-specific rules in a sibling skill kept the GrainCorp logic stable while Bunge's evolved.</li>
<li>Flagging ambiguity for review is cheaper than correcting wrong bids after upload.</li>
</ul>
<div class="imp-bg-brand-50 imp-border imp-border-brand-200 imp-rounded-xl imp-p-6 imp-mt-12">
<p class="imp-font-bold imp-text-brand-900 imp-mb-2">Want Claude working inside your business?</p>
<p class="imp-text-brand-800 imp-mb-4">TwinStack builds Claude agents, skills and integrations that fit how your team already works, with people kept in the loop where judgement matters.</p>
<a href="/contact" class="imp-inline-block imp-px-6 imp-py-3 imp-bg-brand-600 imp-text-white imp-font-semibold imp-rounded-lg imp-hover:bg-brand-700 imp-transition">Talk to Us</a>
</div>
            </article>
            <div class="imp-mt-16 imp-pt-8 imp-border-t imp-border-slate-200">
                <a href="/case-studies" class="imp-inline-flex imp-items-center imp-gap-2 imp-text-brand-600 imp-font-bold imp-hover:underline">
                    <svg class="imp-svgi" aria-hidden="true"><use href="#i-arrow-left" /></svg> Return to All Case Studies
                </a>
            </div>
        </div>
    </section>
<footer class="imp-bg-slate-900 imp-text-slate-300 imp-py-12 imp-relative imp-overflow-hidden">
      <div class="imp-max-w-7xl imp-mx-auto imp-px-4 imp-sm:px-6 imp-lg:px-8 imp-relative imp-z-10">
        <div class="imp-ts-foot-grid imp-grid imp-grid-cols-1 imp-md:grid-cols-4 imp-gap-12">
          <div class="imp-col-span-1 imp-md:col-span-2">
            <div class="imp-relative imp-mb-6 imp-inline-block">
              <div class="imp-absolute imp-inset-y-0 imp-left-[-100vw] imp-right-[-3rem] imp-bg-white imp-rounded-r-3xl imp-z-0 imp-shadow-xl"></div>
              <div class="imp-relative imp-z-10 imp-pl-2">
                <a href="/" class="imp-flex imp-items-center imp-gap-2 imp-mb-4 imp-text-slate-900 imp-font-bold imp-text-2xl">
                  <img loading="lazy" width="100" height="100" src="https://res.cloudinary.com/du42kbmmn/image/upload/w_100,f_auto,q_auto/v1769165197/Black_White_Minimalist_Professional_Initial_Logo_1_eoam8g.png" alt="TwinStack Solutions logo" class="imp-h-12 imp-w-12 imp-rounded-full imp-object-cover">
                  <span class="imp-ts-wm"><span class="imp-ts-wm-top"><span class="imp-text-[#343453]">Twin</span><span class="imp-bg-gradient-to-r imp-from-brand-500 imp-to-indigo-500 imp-text-transparent imp-bg-clip-text">Stack</span></span><span class="imp-ts-wm-sub">Solutions</span></span>
                </a>
                <p class="imp-text-sm imp-text-slate-700 imp-max-w-xs imp-font-medium">Empowering charities and businesses with Salesforce excellence since 2022.</p>
              </div>
            </div>
          </div>
          <div class="imp-ts-fcol">
            <h4 class="imp-text-white imp-font-semibold imp-mb-4">Company</h4>
            <ul class="imp-space-y-1 imp-text-sm">
              <li><a href="/about" class="imp-hover:text-brand-400 imp-transition imp-py-2 imp-block">About Us</a></li>
              <li><a href="/pricing" class="imp-hover:text-brand-400 imp-transition imp-py-2 imp-block">Pricing</a></li>
            </ul>
          </div>
          <div class="imp-ts-fcol">
            <h4 class="imp-text-white imp-font-semibold imp-mb-4">Resources</h4>
            <ul class="imp-space-y-1 imp-text-sm">
              <li><a href="/blog" class="imp-hover:text-brand-400 imp-transition imp-py-2 imp-block">Blog</a></li>
              <li><a href="/case-studies" class="imp-hover:text-brand-400 imp-transition imp-py-2 imp-block">Case Studies</a></li>
              <li><a href="/contact" class="imp-hover:text-brand-400 imp-transition imp-py-2 imp-block">Contact</a></li>
            </ul>
          </div>
          <div class="imp-mt-4 imp-md:mt-0">
            <h4 class="imp-text-white imp-font-semibold imp-mb-4">Trust &amp; Legal</h4>
            <ul class="imp-space-y-1 imp-text-sm">
              <li><a href="/privacy-policy" class="imp-hover:text-brand-400 imp-transition imp-py-2 imp-block">Privacy Policy</a></li>
              <li><a href="/trust-center" class="imp-hover:text-brand-400 imp-transition imp-py-2 imp-block">Trust Center</a></li>
            </ul>
          </div>
          <div class="imp-mt-4 imp-md:mt-0">
            <h4 class="imp-text-white imp-font-semibold imp-mb-4">Connect</h4>
            <div class="imp-flex imp-gap-3">
              <a href="https://www.linkedin.com/company/twinstack-solutions/" aria-label="Follow TwinStack Solutions on LinkedIn" class="imp-w-10 imp-h-10 imp-rounded-full imp-bg-slate-800 imp-flex imp-items-center imp-justify-center imp-hover:bg-brand-600 imp-transition imp-text-white">
                <svg class="imp-svgi imp-text-lg" aria-hidden="true"><use href="#i-linkedin-in" /></svg>
              </a>
              <a href="https://www.youtube.com/@TwinStackSolutions-sf" target="_blank" rel="noopener" aria-label="Subscribe to our YouTube channel" class="imp-w-10 imp-h-10 imp-rounded-full imp-bg-slate-800 imp-flex imp-items-center imp-justify-center imp-hover:bg-brand-600 imp-transition imp-text-white">
                <svg class="imp-svgi imp-text-lg" aria-hidden="true"><use href="#i-youtube" /></svg>
              </a>
            </div>
          </div>
        </div>
        <div class="imp-border-t imp-border-slate-800 imp-mt-12 imp-pt-8 imp-text-center imp-text-sm imp-text-slate-500 imp-relative imp-z-10">
          <p>&copy; 2026 TwinStack Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
</div>
