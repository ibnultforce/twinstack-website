---
title: Agentforce & Salesforce AI Implementation
slug: services-agentforce-ai
url: /services/agentforce-ai.html
order: 50
description: Plan and build Agentforce agents on clean Salesforce data: use-case selection, a data and access review, Flow and Apex actions, testing and the rollout.
metaTitle: Agentforce AI Implementation Services | TwinStack
metaDescription: "Agentforce AI implementation: a use-case workshop, data and permissions review, agents with Flow and Apex actions, tested conversations and a pilot rollout."
focusKeyword: Agentforce AI implementation
stylesheet: /assets/css/imported/services-agentforce-ai.css
hideCta: true
ownChrome: true
scripts:
  - src: "/assets/js/imported/services-agentforce-ai/inline-1.js"
    head: true
    module: false
    nomodule: false
    defer: false
    async: false
  - src: "/assets/js/imported/services-agentforce-ai/ts-analytics.js"
    head: true
    module: false
    nomodule: false
    defer: true
    async: false
  - src: "/assets/js/imported/services-agentforce-ai/inline-2.js"
    head: false
    module: false
    nomodule: false
    defer: false
    async: false
  - src: "/assets/js/imported/services-agentforce-ai/inline-3.js"
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
            <a href="/pricing.html" class="imp-text-slate-600 imp-hover:text-brand-600 imp-font-medium imp-transition">Pricing</a>
            <div class="imp-ts-dd"><a href="/services.html" class="imp-text-brand-600 imp-font-bold imp-transition" aria-haspopup="true">Products &amp; Services<svg class="imp-ts-dd-car" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg></a><div class="imp-ts-dd-menu"><a href="/products.html">Products<small>Free native AppExchange apps</small></a><a href="/services.html">Services<small>Consulting, nonprofits, Tableau and more</small></a><a href="/#pdo-journey">Expertise<small>Our path from strategy to AppExchange</small></a></div></div>
            <a href="/case-studies.html" class="imp-text-slate-600 imp-hover:text-brand-600 imp-font-medium imp-transition">Case Studies</a>
            <a href="/blog.html" class="imp-text-slate-600 imp-hover:text-brand-600 imp-font-medium imp-transition">Blog</a>
            <a href="/cost-estimator.html" class="imp-ts-btn-outline">Cost Estimator</a>
            <a href="/contact.html" class="imp-px-5 imp-py-2.5 imp-rounded-full imp-bg-brand-600 imp-text-white imp-font-semibold imp-hover:bg-brand-900 imp-transition imp-shadow-lg">Contact Us</a>
        </div>
        <div class="imp-md:hidden imp-flex imp-items-center">
            <button id="mobile-menu-btn" class="imp-text-slate-600 imp-p-2"><svg class="imp-svgi imp-text-2xl" aria-hidden="true"><use href="#i-bars" /></svg></button>
        </div>
    </nav>
<div id="mobile-menu" class="imp-fixed imp-inset-y-0 imp-right-0 imp-w-64 imp-bg-white/95 imp-backdrop-blur-xl imp-shadow-2xl imp-z-[60] imp-flex imp-flex-col imp-p-6 imp-transition-transform imp-duration-300 imp-translate-x-full imp-md:hidden">
        <div class="imp-flex imp-justify-end imp-mb-8"><button id="close-menu-btn" class="imp-text-slate-500"><svg class="imp-svgi imp-text-2xl" aria-hidden="true"><use href="#i-times" /></svg></button></div>
        <div class="imp-flex imp-flex-col imp-space-y-6">
            <a href="/" class="imp-text-lg imp-font-medium imp-text-slate-800 imp-hover:text-brand-600">Home</a>
            <a href="/about.html" class="imp-text-lg imp-font-medium imp-text-slate-800 imp-hover:text-brand-600">About</a>
            <a href="/pricing.html" class="imp-text-lg imp-font-medium imp-text-slate-800 imp-hover:text-brand-600">Pricing</a>
            <a href="/products.html" class="imp-text-lg imp-font-medium imp-text-slate-800 imp-hover:text-brand-600">Products</a>
            <a href="/services.html" class="imp-text-lg imp-font-medium imp-text-slate-800 imp-hover:text-brand-600">Services</a>
            <a href="/#pdo-journey" class="imp-text-lg imp-font-medium imp-text-slate-800 imp-hover:text-brand-600">Expertise</a>
            <a href="/case-studies.html" class="imp-text-lg imp-font-medium imp-text-slate-800 imp-hover:text-brand-600">Case Studies</a>
            <a href="/blog.html" class="imp-text-lg imp-font-medium imp-text-slate-800 imp-hover:text-brand-600">Blog</a>
            <a href="/cost-estimator.html" class="imp-ts-btn-outline-block">Cost Estimator</a>
            <a href="/contact.html" class="imp-px-5 imp-py-3 imp-rounded-lg imp-bg-brand-600 imp-text-white imp-text-center imp-font-semibold">Contact Us</a>
        </div>
    </div>
    <main class="imp-sv" id="main-content">
<section class="imp-sv-hero"><div class="imp-w imp-g"><div>
<p class="imp-crumb"><a href="/services.html">Services</a> / Agentforce and AI</p>
<h1>Agentforce agents built on data you can trust</h1><p class="imp-lead">We help you pick a sensible first use case, get your Salesforce data and permissions ready, and build Agentforce agents that take real actions through Flow and Apex.</p>
<div class="imp-ctas"><a class="imp-btn imp-bp" href="https://calendar.app.google/HP3LiuNFisCt6xLo6" target="_blank" rel="noopener">Book a free call</a><a class="imp-btn imp-bg" href="#contact">Send us a message</a></div></div>
<aside class="imp-sv-facts" aria-label="Key facts"><dl><div><dt>On the team</dt><dd>A Salesforce Certified Agentforce Specialist</dd></div><div><dt>We build</dt><dd>Agents, actions and prompt templates</dd></div><div><dt>Rate</dt><dd>US$30 (A$47) an hour</dd></div></dl></aside></div></section>
<section class="imp-sec" id="what"><div class="imp-w"><h2>What we do</h2><div class="imp-sv-list"><div><h3>Use-case workshop</h3><p>We list where an agent would save the most time and pick one that is small enough to launch and measure.</p></div><div><h3>Data and access review</h3><p>An agent can only be as good as the records it reads, so we check data quality and who can see what first.</p></div><div><h3>Agent design and actions</h3><p>Topics, instructions and actions built with Flow and Apex, so the agent can update records, not just answer questions.</p></div><div><h3>Service agents</h3><p>Agents that answer common customer or donor questions and handle simple requests, such as resending a receipt, at any hour.</p></div><div><h3>Testing and hand-off</h3><p>Test conversations, permission checks and a clear hand-off to a person when the agent should not answer.</p></div><div><h3>Rollout and tuning</h3><p>A pilot with real users, then changes based on what the agent gets right and wrong.</p></div></div></div></section>
<section class="imp-sec imp-tint" id="process"><div class="imp-w"><h2>How it works</h2><ol class="imp-sv-steps"><li><h3>Workshop</h3><p>Agree the first use case and how you will measure it.</p></li><li><h3>Prepare</h3><p>Review data and permissions and fix what the agent depends on.</p></li><li><h3>Build</h3><p>Create the agent, its actions and its test conversations.</p></li><li><h3>Pilot and expand</h3><p>Launch to a small group, tune, then roll out further.</p></li></ol></div></section>
<section class="imp-sec" id="why"><div class="imp-w"><h2>Why TwinStack</h2><div class="imp-sv-why"><div><h3>Certified</h3><p>Our Solution Architect, Md Sanaullah, is a Salesforce Certified Agentforce Specialist.</p></div><div><h3>Permission-aware</h3><p>We built Who Sees What, so checking what an agent and its users can access is part of every project.</p></div><div><h3>Clear pricing</h3><p>We work at US$30 (A$47) an hour. Agentforce usage is billed by Salesforce separately.</p></div></div><div style="margin-top:3.5rem"><h2 style="font-size:1.5rem">Related</h2><div class="imp-sv-rel"><a href="/products/who-sees-what.html">Who Sees What<span>See exactly who can access which records</span></a><a href="/services/salesforce-data-migration.html">Salesforce data migration<span>Clean data before you add AI</span></a><a href="/blog/salesforce-core-vs-advanced-vs-max.html">New Salesforce editions explained<span>What Flex Credits and AI features are included</span></a><a href="/services/salesforce-implementation.html">Salesforce implementation<span>The foundations agents rely on</span></a></div></div></div></section>
<section class="imp-sec imp-tint" id="faq"><div class="imp-w"><h2>Common questions</h2><div class="imp-sv-faq"><details><summary>What is Agentforce?</summary><p>Agentforce is Salesforce's platform for AI agents that work with your CRM data. Agents can answer questions and take actions, such as updating a record or starting a Flow, within the permissions you give them.</p></details><details><summary>What is a good first Agentforce use case?</summary><p>A frequent, well-defined request with clear rules, such as answering common questions, resending a receipt or updating contact details. It should be easy to measure and safe to hand off to a person when needed.</p></details><details><summary>Does our data need to be perfect first?</summary><p>No, but the agent relies on the records and permissions it reads. We review both before building and fix what matters for the first use case.</p></details><details><summary>How much does Agentforce cost?</summary><p>Salesforce charges for Agentforce separately, and the new Core, Advanced and Max editions include some Flex Credits. Our work is billed at US$30 (A$47) an hour.</p></details><details><summary>Is Agentforce safe for sensitive data?</summary><p>Agents work within Salesforce permissions and sharing rules. We check what the agent and its users can access, and design hand-offs for anything it should not answer.</p></details><details><summary>How long does it take to launch a first agent?</summary><p>We scope the first agent in the workshop and agree a timeline before the build starts, based on the data work it needs.</p></details></div></div></section>
<section class="imp-sec" id="contact"><div class="imp-w" style="display:grid;gap:3rem"><div style="max-width:40rem"><h2>Tell us about your project</h2><p class="imp-intro">Tell us what you need and we will reply within one business day with next steps and a rough estimate.</p></div><div class="imp-sv-form" id="sv-form-wrap"><div class="imp-sv-ok" id="sv-ok" role="status">Thank you. Your message has been sent and we'll reply within one business day.</div>
<h3>Send us a message</h3><p class="imp-sm">Fields marked * are required. We reply within one business day.</p>
<form id="svForm" method="POST" action="" onsubmit="var p=document.getElementById('sv_desc_prefix'),d=document.getElementById('sv_desc');if(p&&p.value&&d)d.value='Topic: '+p.value+'\n'+d.value;return svSubmit(event)">
<div style="position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;overflow:hidden" aria-hidden="true"><label for="sv_hp">Leave this empty</label><input type="text" id="sv_hp" name="sv_hp" autocomplete="off" tabindex="-1"></div>
<input type="hidden" name="oid" value="00DdN00000roILE"><input type="hidden" name="retURL" id="sv_ret"><input type="hidden" name="lead_source" value="TwinStack">
<div class="imp-r"><label>First name *<input name="first_name" maxlength="40" required autocomplete="given-name"></label><label>Last name *<input name="last_name" maxlength="80" required autocomplete="family-name"></label></div>
<div class="imp-r"><label>Work email *<input name="email" type="email" maxlength="80" required autocomplete="email"></label><label>Phone<input name="phone" maxlength="40" autocomplete="tel"></label></div>
<div class="imp-r"><label>Company or organisation<input name="company" maxlength="40" autocomplete="organization"></label><label>Website<input name="URL" maxlength="80" autocomplete="url"></label></div>
<label>What do you need help with?<select name="description_topic" onchange="document.getElementById('sv_desc_prefix').value=this.value"><option value="">Choose a topic</option><option>Salesforce implementation</option><option>Nonprofit Cloud or NPSP</option><option>AppExchange app or Security Review</option><option>Data migration</option><option>Agentforce and AI</option><option>Integrations</option><option>Managed services and support</option><option>Hire a Salesforce developer</option><option>Something else</option></select></label><input type="hidden" id="sv_desc_prefix"><label>How can we help?<textarea name="description" id="sv_desc" rows="4"></textarea></label>
<button type="submit" class="imp-btn imp-bp">Send message</button>
<p class="imp-pv">We use these details only to reply to you. See our <a href="/privacy-policy.html">privacy policy</a>.</p>
</form></div></div></section>
</main>
<link rel="stylesheet" href="/assets/css/site-footer.css">
<footer class="tsf">
  <div class="tsf-wrap">
    <div class="tsf-grid">
      <div class="tsf-brandcol">
        <div class="tsf-brand">
          <div class="tsf-glow" aria-hidden="true"></div>
          <div class="tsf-card" aria-hidden="true"></div>
          <div class="tsf-inner">
            <a href="/" class="tsf-home" aria-label="TwinStack Solutions Home">
              <img src="data:image/webp;base64,UklGRkgFAABXRUJQVlA4IDwFAADwHgCdASpwAHAAPqVGnUmmJCMhMlQNUMAUiWUA00WktwDb1sJlrnGrtS/3LhFOZ43vjUQcpSe3abw/T90+2JZc4xjkvLVHsGP9vM4///UWJT0b8Lp/UlIEt9OHY5F8q4ZKeuOzWa8MIhd/CWzJ2C1Mlt/DazRl+MOIQotxwQ5OaUf13oVMyGb3tj+0Z0iaTtJ2EMLGNNdgqRNV4ynwa+EHzImBqkhQilTx9ikHvm7c+Ox/VFBoZ8jMkN4fK6JXQiAkWzEuNSq0Zu1nXkBwNFeNGGGa+Axhd+A+tvCqrBSSmfwhu7J5cnG2PavHXBmzQPFs7rc1S1Dem9gbPr8pTt4AAP76kAXSI7ANyV635f/Ih+/N8/ywyoMWRp27HcSo6tRxO5H5T6va9MPDweANs85P4+/MvTPlhIZ0zpWLHvpymJUgx+ogaEGSpj/sIuXJJM1i+jb3Xd4BUTu3XfWPVV8E7ufT8wOu4w7AWDB3vV55UEy2bpwAEyklab+9EfjjElvTsp86xm2xnPQVK90773e/ecQmO2B6n80Jut33wg/35BYPzFXdEPatwbdYfZvVdb6d2t8YFcW56pv5gEFLPl4cexPZC/aB8az5Mt5oliukIuksyv5evZ4ik2qU2AVbE7Ql8nkINCQ6bYC9P79/pC9quPxiAna0xENQ/ygZtKhc2Tq6P2qbttNZ35BnqrTEClObI5qx+SEiVJpN1cTYXCdtUd+N+vzPTNSHZxc3j7AxnquJyRBhtYfe9zH8rVY1iYiz9zDrmQ+L5ZCV1cBpDM0IYRZWshv8dJQEKR38qq/IPBtdaq3YEGvq4DWAYcrOn+YwA74nul/SeLUjl9TN5dtgmnH4fnQqBVKm5WHwkdZLEy8agCDBg4O0urJZ+S070rWioneOIpdODXtT2qRnT3UPTw2PbNPSy+rWozGNZxXewfyAvKL+JFJrfBGvLGSiETbnkvqfZ/mkZz0WO8gfuONa6q856booKfzOCp+JvFciRnrAYCMCyrlAdtkPB5ca3b4AW3K+L0+XOKVAWofjCtoPcZqxeAg2BxOuW6s2hulYtFX2awbOHlv8U4qJU1k6PleFHkx7Vki/8gWCfKR1l0GWIoX1i50XaVpjdlJcwa+y/JUAk/g5s3qCodIh7abaWT/ya5jmQKf6NQRhXVtKBfau/4YasmhdnxIaa4SiZ6/ZBIpCq6sHASuTxyK1vMPDh0FvZbd/1fopgYVfNfpErTCVRZl7Q3dcT/oqXu/SjGh6/Tu13QOCCrFsdqWY1etDfNb7bSd3KfHCSksCmV2NslDf0BDFCm5Izak3O6NJV1txIpg0LL4LHGztnW2+loLmiLFU8HBPhNfuijiWOVeMO066aMZRdLXxYjlNvfgUu7GfvPTC9L/fmIHHSUvqmlH2gnZeMW30fy7b+nSPdJL4OzrxKOMYNDxtQOahc8GpC3rYkZ3j1EG1OM+XFVBk1nDHmhknZyFDPuk5PQWMrthUyWO02Qlf7x1JDuon0T08Kf8DtH54NigTK20cCVUveAR/+2ez0WmYE5l7708buMe/1zNUOseXqRWPD/lP9GeiO+xsdISJ/YGOpreiesuSKnB5ak6jLrmrNIwhcX937yB8jhhRNUWqlHStyBFPuzW01PYXqdLhdheoDdY8dXlLHSAwf3CUIal1sqv9uDXr+g5BUe+I2xxFxrfqaVF6cAHbYwDQUF2bNSIOiqS3Glbnzs9S5L9RCg0E6ynn64cosCkmLGcWDtQn2vnjV2/HOoD9WhGY66z4XqoxQM4lanAAAA==" loading="lazy" alt="TwinStack Logo" width="48" height="48">
              <span class="tsf-wm"><span class="tsf-wm-top"><span class="tsf-twin">Twin</span><span class="tsf-stack">Stack</span></span><span class="tsf-wm-sub">Solutions</span></span>
            </a>
            <p class="tsf-tag">Empowering charities and businesses with Salesforce excellence since 2022.</p>
          </div>
        </div>
      </div>
      <div>
        <h4 class="tsf-h">Company</h4>
        <ul class="tsf-list">
          <li><a href="/about.html" class="tsf-link">About Us</a></li>
          <li><a href="/pricing.html" class="tsf-link">Pricing</a></li>
        </ul>
      </div>
      <div>
        <h4 class="tsf-h">Resources</h4>
        <ul class="tsf-list">
          <li><a href="/blog.html" class="tsf-link">Blog</a></li>
          <li><a href="/case-studies.html" class="tsf-link">Case Studies</a></li>
          <li><a href="/contact.html" class="tsf-link">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 class="tsf-h">Trust &amp; Legal</h4>
        <ul class="tsf-list">
          <li><a href="/privacy-policy.html" class="tsf-link">Privacy Policy</a></li>
          <li><a href="/trust-center.html" class="tsf-link">Trust Center</a></li>
        </ul>
      </div>
      <div>
        <h4 class="tsf-h">Connect</h4>
        <div class="tsf-social">
          <a href="https://www.linkedin.com/company/twinstack-solutions/" target="_blank" rel="noopener" aria-label="Follow TwinStack Solutions on LinkedIn" class="tsf-soc"><svg viewBox="0 0 448 512" aria-hidden="true" focusable="false"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>
          <a href="https://www.youtube.com/@TwinStackSolutions-sf" target="_blank" rel="noopener" aria-label="Subscribe to our YouTube channel" class="tsf-soc"><svg viewBox="0 0 576 512" aria-hidden="true" focusable="false"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg></a>
        </div>
      </div>
    </div>
    <div class="tsf-bottom">
      <p>&copy; 2026 TwinStack Solutions. All rights reserved.</p>
    </div>
  </div>
</footer>
</div>

<script type="application/ld+json" id="ts-schema">{"@context":"https://schema.org","@graph":[{"@type":"Service","@id":"https://twinstack.net/services/agentforce-ai#service","name":"Agentforce and AI","serviceType":"Agentforce and AI","description":"Plan and build Agentforce agents on clean Salesforce data: use-case selection, a data and access review, Flow and Apex actions, testing and the rollout.","url":"https://twinstack.net/services/agentforce-ai","provider":{"@id":"https://twinstack.net/#organization"},"areaServed":["United States","Canada","United Kingdom","Australia","Europe"],"offers":{"@type":"Offer","priceSpecification":{"@type":"UnitPriceSpecification","price":"30","priceCurrency":"USD","unitText":"hour"}}},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is Agentforce?","acceptedAnswer":{"@type":"Answer","text":"Agentforce is Salesforce's platform for AI agents that work with your CRM data. Agents can answer questions and take actions, such as updating a record or starting a Flow, within the permissions you give them."}},{"@type":"Question","name":"What is a good first Agentforce use case?","acceptedAnswer":{"@type":"Answer","text":"A frequent, well-defined request with clear rules, such as answering common questions, resending a receipt or updating contact details. It should be easy to measure and safe to hand off to a person when needed."}},{"@type":"Question","name":"Does our data need to be perfect first?","acceptedAnswer":{"@type":"Answer","text":"No, but the agent relies on the records and permissions it reads. We review both before building and fix what matters for the first use case."}},{"@type":"Question","name":"How much does Agentforce cost?","acceptedAnswer":{"@type":"Answer","text":"Salesforce charges for Agentforce separately, and the new Core, Advanced and Max editions include some Flex Credits. Our work is billed at US$30 (A$47) an hour."}},{"@type":"Question","name":"Is Agentforce safe for sensitive data?","acceptedAnswer":{"@type":"Answer","text":"Agents work within Salesforce permissions and sharing rules. We check what the agent and its users can access, and design hand-offs for anything it should not answer."}},{"@type":"Question","name":"How long does it take to launch a first agent?","acceptedAnswer":{"@type":"Answer","text":"We scope the first agent in the workshop and agree a timeline before the build starts, based on the data work it needs."}}]},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://twinstack.net/"},{"@type":"ListItem","position":2,"name":"Services","item":"https://twinstack.net/services"},{"@type":"ListItem","position":3,"name":"Agentforce and AI","item":"https://twinstack.net/services/agentforce-ai"}]}]}</script>
