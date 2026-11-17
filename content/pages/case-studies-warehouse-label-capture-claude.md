---
slug: case-studies-warehouse-label-capture-claude
url: /case-studies/warehouse-label-capture-claude.html
order: 50
title: Reading Warehouse Box Labels with a Phone and Claude
description: A mobile app that finds box labels with the phone camera and has Claude read them into a CSV file, for about $0.002 per label on Claude Sonnet 5.5.
metaTitle: Warehouse Label Capture App with Claude | TwinStack
metaDescription: A warehouse label capture app uses the phone camera and Claude to turn box labels into a CSV file, at about $0.002 per label on Claude Sonnet 5.5.
focusKeyword: warehouse label capture app
stylesheet: /assets/css/imported/case-studies-warehouse-label-capture-claude.css
hideCta: true
ownChrome: true
scripts:
  - src: "/assets/js/imported/case-studies-warehouse-label-capture-claude/inline-1.js"
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
  - src: "/assets/js/imported/case-studies-warehouse-label-capture-claude/inline-2.js"
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
            <h1 class="imp-text-3xl imp-md:text-5xl imp-font-extrabold imp-text-white imp-mb-6 imp-leading-tight">Reading warehouse box labels with a phone and Claude</h1>
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
            <div class="imp-ts-ai-hero"><div class="imp-ts-ai-cover imp-ts-ai-c3" role="img" aria-label="Reading warehouse box labels with a phone and Claude"><span class="imp-ts-ai-icon"><svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 2l1.9 6.1L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.9z" /><path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z" /></svg></span><span class="imp-ts-ai-chip">Claude implementation</span><span class="imp-ts-ai-title">Label Capture</span><span class="imp-ts-ai-sub">Claude API · Warehouse box labels to CSV</span></div></div>
            <article>
<p class="imp-text-xl imp-text-slate-600 imp-font-medium imp-mb-8">TwinStack built a mobile app that finds box labels with the phone camera and has Claude read them into a CSV file. Reading costs about $0.002 per label on Claude Sonnet 5.5, measured on real crops. The working Android prototype was delivered on 20 October 2026.</p>
<h2>At a glance</h2>
<div class="imp-article-table-wrap"><table class="imp-glance"><tbody><tr><th>Industry</th><td>Warehousing and logistics</td></tr><tr><th>Delivered</th><td>Working Android prototype, 20 October 2026</td></tr><tr><th>Claude products</th><td>Claude API (Messages API with structured output)</td></tr><tr><th>Models</th><td>Claude Sonnet 5.5 (default), Claude Opus 5.5 (most accurate)</td></tr><tr><th>Tech stack</th><td>Flutter (Android and iPhone from one codebase), Google ML Kit, Python test tool</td></tr><tr><th>Cost per label</th><td>About $0.002 on Sonnet 5.5</td></tr></tbody></table></div>
<h2>The challenge</h2>
<p>The client needed to record the details printed on warehouse box labels: item number, barcode, description, quantity, PO number, lot or date, and case position. Typing these by hand while walking along a rack is slow and error-prone.</p>
<h2>Proving the idea first</h2>
<p>Before building the app, TwinStack built a small Python test tool that sent frames from a walk-through video to Claude. Claude returned structured data for each box it saw, and repeat sightings of the same box were merged. On two sample videos (24 and 17 seconds), the tool found 15 boxes for about $0.27 in total API cost.</p>
<p>The test also showed that moving video is a poor source, because labels are small and often blurry. That finding shaped the app: capture a sharp, close crop of each label instead of sending video.</p>
<h2>The solution</h2>
<p>The app splits the work so that Claude only ever sees good pictures of labels:</p>
<div class="imp-article-table-wrap"><table>
<thead>
<tr>
<th>On the phone (free, offline)</th>
<th>Claude (per call, online)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Watches the camera and finds label-shaped areas</td>
<td>Reads the printed text on each label crop</td>
</tr>
<tr>
<td>Saves a label only when it is in frame, large enough, steady and sharp</td>
<td>Returns item number, barcode digits, description, quantity, PO, lot or date, and case info</td>
</tr>
<tr>
<td>Straightens and crops the label, and skips labels already saved</td>
<td>Says "unreadable" instead of guessing when a crop is bad</td>
</tr>
<tr>
<td>Reads QR codes and barcodes exactly (Google ML Kit)</td>
<td>Fills extra columns the user defines, and suggests new ones</td>
</tr>
</tbody>
</table></div>
<p>The user walks the rack, reviews the captured crops, taps <strong>Read with Claude</strong>, confirms the results and exports a CSV file.</p>
<h2>How Claude is used</h2>
<ul>
<li><strong>Batched, structured requests.</strong> Crops are sent in batches (8 per call by default) with a strict structured output format, so results always come back as clean data.</li>
<li><strong>Strict rules against guessing.</strong> Claude is told to read exactly what is printed, never to guess or complete digits it can't see, to leave a value empty if it isn't legible, and never to copy values from one image to another.</li>
<li><strong>Confidence and cross-checks.</strong> Each result carries a confidence level (high, medium or low). When Claude's barcode reading matches the phone's own scan, the card is marked "Matches scan", which is strong confirmation.</li>
<li><strong>User-defined columns.</strong> Users can add a column such as "expiry date" for Claude to fill. Claude can also suggest new columns for useful facts it finds, such as weight or country of origin.</li>
<li><strong>Cost in view.</strong> The app shows an estimate before sending, asks for confirmation above $0.50, and shows the real cost afterwards.</li>
<li><strong>Model choice.</strong> Sonnet 5.5 is faster and cheaper, and Opus 5.5 is the most accurate.</li>
</ul>
<h2>Quality</h2>
<ul>
<li>162 automated tests pass, covering label detection, the Claude request and reply handling (against a mock server, including retries and bad replies), CSV export and every main screen.</li>
<li>The app was installed and run on a real Android phone (Redmi Note 11), where it analysed about 10 to 16 frames per second.</li>
<li>All photos and data stay on the phone, apart from the crops the user chooses to send to Claude.</li>
</ul>
<h2>Results</h2>
<ul>
<li>Label details are captured into a clean CSV without typing.</li>
<li>Claude reads each label for about $0.002, because the phone filters out everything except sharp label crops.</li>
<li>Barcode readings can be verified against an exact on-device scan.</li>
</ul>
<h2>Next steps</h2>
<p>The prototype still needs to be validated in a real depot, on a full rack. A production rollout would also move the Claude API key from the app to a server.</p>
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
