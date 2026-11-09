---
slug: case-studies-brightwater-outfitters-data-migration
url: /case-studies/brightwater-outfitters-data-migration.html
ogImage: "https://res.cloudinary.com/du42kbmmn/image/upload/c_pad,w_1200,h_630,b_auto,f_jpg,q_auto/v1789991884/SLDL_CS_1.1_ebip9m.png"
order: 50
title: Brightwater Outfitters Data Migration
description: A retail group migrated 94,000 customer records into Salesforce without a single VLOOKUP pass, using external codes to resolve lookups at import time.
metaTitle: Retail Data Migration Without VLOOKUP | TwinStack
metaDescription: "An illustrative retail data migration case study: 94,000 customer records into Salesforce in 9 days, lookups resolved by legacy code instead of VLOOKUP."
focusKeyword: retail data migration
stylesheet: /assets/css/imported/case-studies-brightwater-outfitters-data-migration.css
hideCta: true
ownChrome: true
scripts:
  - src: "/assets/js/imported/case-studies-brightwater-outfitters-data-migration/inline-1.js"
    head: true
    module: false
    nomodule: false
    defer: false
    async: false
  - src: "/assets/js/imported/case-studies-brightwater-outfitters-data-migration/ts-analytics.js"
    head: true
    module: false
    nomodule: false
    defer: true
    async: false
  - src: "/assets/js/imported/case-studies-brightwater-outfitters-data-migration/inline-2.js"
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
            <div class="imp-ts-dd"><a href="/services.html" class="imp-text-slate-600 imp-hover:text-brand-600 imp-font-medium imp-transition" aria-haspopup="true">Products &amp; Services<svg class="imp-ts-dd-car" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg></a><div class="imp-ts-dd-menu"><a href="/products.html">Products<small>Free native AppExchange apps</small></a><a href="/services.html">Services<small>Consulting, nonprofits, Tableau and more</small></a><a href="/#pdo-journey">Expertise<small>Our path from strategy to AppExchange</small></a></div></div>
            <a href="/case-studies.html" class="imp-text-brand-600 imp-font-bold imp-transition">Case Studies</a>
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
            <a href="/case-studies.html" class="imp-text-lg imp-font-medium imp-text-brand-600 imp-font-bold">Case Studies</a>
            <a href="/blog.html" class="imp-text-lg imp-font-medium imp-text-slate-800 imp-hover:text-brand-600">Blog</a>
            <a href="/cost-estimator.html" class="imp-ts-btn-outline-block">Cost Estimator</a>
            <a href="/contact.html" class="imp-px-5 imp-py-3 imp-rounded-lg imp-bg-brand-600 imp-text-white imp-text-center imp-font-semibold">Contact Us</a>
        </div>
    </div>
    <header class="imp-pt-40 imp-pb-16 imp-bg-slate-900 imp-relative imp-overflow-hidden">
            <div class="imp-absolute imp-inset-0 imp-opacity-20">
                <div class="imp-absolute imp--top-24 imp--left-24 imp-w-96 imp-h-96 imp-bg-brand-500 imp-rounded-full imp-blur-3xl"></div>
                <div class="imp-absolute imp-bottom-0 imp-right-0 imp-w-80 imp-h-80 imp-bg-purple-500 imp-rounded-full imp-blur-3xl"></div>
            </div>
            <div class="imp-max-w-4xl imp-mx-auto imp-px-4 imp-sm:px-6 imp-lg:px-8 imp-relative imp-z-10 imp-text-center">
                <div class="imp-inline-flex imp-items-center imp-gap-2 imp-px-3 imp-py-1 imp-rounded-full imp-bg-brand-900/50 imp-border imp-border-brand-500/30 imp-text-brand-200 imp-text-sm imp-font-semibold imp-mb-6">
                    <span class="imp-w-2 imp-h-2 imp-rounded-full imp-bg-brand-400"></span> Case Study</div>
                <h1 class="imp-text-3xl imp-md:text-5xl imp-font-extrabold imp-text-white imp-mb-6 imp-leading-tight">Brightwater Outfitters: Retail Data Migration Without the VLOOKUP Pass</h1>
                <div class="imp-flex imp-items-center imp-justify-center imp-gap-6 imp-text-slate-400 imp-text-sm">
                    <div><svg class="imp-svgi imp-mr-2" aria-hidden="true"><use href="#i-calendar" /></svg>October 2, 2026</div>
                    <div><svg class="imp-svgi imp-mr-2" aria-hidden="true"><use href="#i-user" /></svg>TwinStack Team</div>
                    <div>4 min read</div>
                </div>
            </div>
        </header>
    <section class="imp-py-20 imp-bg-white imp-relative">
        <div class="imp-max-w-3xl imp-mx-auto imp-px-6">
            <a href="/case-studies.html" class="imp-inline-flex imp-items-center imp-gap-2 imp-text-brand-600 imp-font-semibold imp-mb-8 imp-hover:underline">
                <svg class="imp-svgi" aria-hidden="true"><use href="#i-arrow-left" /></svg> Back to Case Studies
            </a>
            <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_1200,f_auto,q_auto/v1789991884/SLDL_CS_1.1_ebip9m.png" alt="Brightwater Outfitters: Retail Data Migration Without the VLOOKUP Pass" width="1200" height="675" fetchpriority="high" class="imp-w-full imp-h-64 imp-md:h-96 imp-object-cover imp-rounded-xl imp-shadow-lg imp-mb-10">
            <article>
                <div class="imp-cs-disclaimer"><p><strong>Illustrative example.</strong> Brightwater Outfitters is a composite organisation built from patterns we see repeatedly in retail data migration work. It is not a named customer, and the figures shown are representative of the category rather than measured at one client.</p></div>
                <h2 id="at-a-glance">At a glance</h2>
<div class="imp-article-table-wrap imp-cs-glance"><table>
<tbody>
<tr>
<td>Organisation</td>
<td>Brightwater Outfitters, outdoor equipment retail</td>
</tr>
<tr>
<td>Salesforce footprint</td>
<td>Sales Cloud, 60 users, 4 custom objects</td>
</tr>
<tr>
<td>Volume</td>
<td>94,000 customer records, 210,000 order lines, 3 related objects</td>
</tr>
<tr>
<td>The problem</td>
<td>Every migration pass required exporting parent records to fetch IDs</td>
</tr>
<tr>
<td>Approach</td>
<td>Resolve lookups at import time against legacy customer codes</td>
</tr>
<tr>
<td>Elapsed time</td>
<td>9 working days, down from an estimated 4 weeks</td>
</tr>
<tr>
<td>Outcome</td>
<td>Zero orphaned records, 340 rows flagged for manual review</td>
</tr>
</tbody>
</table></div>
<h2 id="the-situation">The situation</h2>
<p>Brightwater Outfitters had run their customer and order data in a legacy retail platform for eleven years. A move to Salesforce meant bringing across customer records, order history, store locations and a custom loyalty object, with relationships intact across all four.</p>
<p>The data had one useful property. Every customer, order and store carried a code from the legacy system, and those codes had been applied consistently since the platform was installed. What the data did not have, anywhere, was a Salesforce record ID, because nothing in it had ever touched Salesforce.</p>
<h2 id="what-they-tried-first">What they tried first</h2>
<p>The first plan was the conventional one. Load accounts, export them with their new IDs, VLOOKUP those IDs into the contact file, load contacts, export again, and repeat for orders and loyalty records.</p>
<p>Two problems appeared in the first week.</p>
<p>The export and lookup cycle took longer than the loading. Each pass meant a full export of the object just loaded, a merge in a spreadsheet, and a verification step to confirm the merge had not dropped rows. On a file of 94,000 records that verification was itself a half-day job.</p>
<p>More seriously, the passes did not stay in sync. Test loads were being re-run as mapping issues were found, which invalidated the exported ID files from the previous pass. The team found orders attached to accounts that had been deleted and reloaded between the export and the import.</p>
<blockquote>
<p>“We were spending more time proving the spreadsheet was still correct than actually loading anything. Every re-run meant redoing the lookup files from scratch.”</p>
<p>Data migration lead, retail group</p>
</blockquote>
<figure><img alt="Brightwater Outfitters at a glance: scope, approach and results" decoding="async" height="562" loading="lazy" src="https://res.cloudinary.com/du42kbmmn/image/upload/w_1000,f_auto,q_auto/v1789991893/SLDL_cs_1.2_psvy4q.png" width="1000" /><figcaption>Brightwater Outfitters at a glance: scope, approach and results.</figcaption></figure>
<h2 id="the-approach">The approach</h2>
<p>The team changed the model rather than the tooling around it. Instead of converting legacy codes to Salesforce IDs before each load, they configured the import to resolve the relationship at load time against the legacy code.</p>
<p>Three changes made this work:</p>
<p><strong>A dedicated External ID field on every object.</strong> Each object got a custom field holding the legacy system’s code, marked as External ID and unique. This became the single identifier the entire migration ran on.</p>
<p><strong>Multi-field match rules where codes were not unique.</strong> Store locations shared codes across two acquired brands. Matching on code plus region resolved that without manual intervention.</p>
<p><strong>Row-level validation on a sample before each full pass.</strong> Every object was loaded with 200 rows first and reconciled against the source before the full file ran.</p>
<h2 id="what-changed">What changed</h2>
<p>The export and VLOOKUP step disappeared entirely. Because relationships resolved against live data at load time rather than against an export, re-running a test load no longer invalidated anything downstream. The team could reload accounts, then reload contacts, and the relationships were correct both times.</p>
<p>That removed the constraint that had been shaping the whole project plan. Instead of sequencing carefully to avoid re-runs, the team re-ran freely.</p>
<h2 id="results">Results</h2>
<p><strong>Nine working days end to end,</strong> against an original estimate of four weeks. Most of the saving came from removing the reconciliation work between passes rather than from the loads themselves running faster.</p>
<p><strong>Zero orphaned records.</strong> Every order attached to a customer, and every loyalty record attached to an order.</p>
<p><strong>340 rows flagged rather than failed.</strong> These were legitimately ambiguous, mostly customers appearing under two codes after a brand acquisition. They were routed to a manual review queue instead of being silently attached to whichever record matched first.</p>
<p><strong>The legacy codes stayed.</strong> Because the External ID fields were populated during migration rather than discarded after it, the retail team can still trace any Salesforce record back to its origin in the old platform.</p>
<h2 id="what-they-would-do-differently">What they would do differently</h2>
<p>The team ran their first sample from the top of each file. Those rows turned out to be the cleanest part of the data, so the sample passed and the full load then surfaced formatting problems that a middle-of-file sample would have caught on day one.</p>
<p>They also underestimated reconciliation. Loading took less time than expected and verifying took more.</p>
                <div class="imp-bg-brand-50 imp-border imp-border-brand-200 imp-rounded-xl imp-p-6 imp-mt-12">
                    <div class="imp-flex imp-items-center imp-gap-3 imp-mb-4">
                        <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_128,f_auto,q_auto/v1788420787/Untitled_design_20_daquoh.png" alt="Smart Lookup Data Loader app logo" width="48" height="48" loading="lazy" class="imp-h-12 imp-w-12 imp-rounded-lg imp-object-cover">
                        <p class="imp-font-bold imp-text-brand-900 imp-mb-0">Import by name, email or code. Skip the VLOOKUP.</p>
                    </div>
                    <p class="imp-text-brand-800 imp-mb-4">Smart Lookup Data Loader is a free, 100% native Salesforce app by TwinStack. Lookups resolve as records land, upserts match on several fields, and every failed row tells you why.</p>
                    <a href="https://appexchange.salesforce.com/appxListingDetail?listingId=f020d7cb-6467-4dcc-adda-c1ce6c620257" target="_blank" rel="noopener" class="imp-inline-block imp-px-6 imp-py-3 imp-bg-brand-600 imp-text-white imp-font-semibold imp-rounded-lg imp-hover:bg-brand-700 imp-transition">Get It Now, Free</a>
                </div>
                <div class="imp-ts-keep"><h2>Keep reading</h2><ul><li><a href="/products/smart-lookup-data-loader.html">Smart Lookup Data Loader: features and how it works</a></li><li><a href="/blog/what-is-smart-lookup-data-loader.html">What Is Smart Lookup Data Loader?</a></li><li><a href="/case-studies.html">More case studies</a></li></ul></div>
            </article>
            <div class="imp-mt-16 imp-pt-8 imp-border-t imp-border-slate-200">
                <a href="/case-studies.html" class="imp-inline-flex imp-items-center imp-gap-2 imp-text-brand-600 imp-font-bold imp-hover:underline">
                    <svg class="imp-svgi" aria-hidden="true"><use href="#i-arrow-left" /></svg> Return to All Case Studies
                </a>
            </div>
        </div>
    </section>
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

<script type="application/ld+json" id="ts-schema">{"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"Brightwater Outfitters: Retail Data Migration Without the VLOOKUP Pass","description":"A retail group migrated 94,000 customer records into Salesforce without a single VLOOKUP pass, using external codes to resolve lookups at import time.","image":"https://res.cloudinary.com/du42kbmmn/image/upload/w_1200,f_auto,q_auto/v1789991884/SLDL_CS_1.1_ebip9m.png","datePublished":"2026-10-02","dateModified":"2026-10-02","wordCount":736,"keywords":"salesforce data migration case study, csv import salesforce retail, salesforce customer data migration, external id import salesforce","author":{"@type":"Organization","@id":"https://twinstack.net/#organization","name":"TwinStack Solutions"},"publisher":{"@id":"https://twinstack.net/#organization"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://twinstack.net/case-studies/brightwater-outfitters-data-migration"},"about":{"@type":"SoftwareApplication","name":"Smart Lookup Data Loader","applicationCategory":"BusinessApplication","operatingSystem":"Salesforce","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://appexchange.salesforce.com/appxListingDetail?listingId=f020d7cb-6467-4dcc-adda-c1ce6c620257"},"inLanguage":"en"},{"@type":"SoftwareApplication","name":"Smart Lookup Data Loader","applicationCategory":"BusinessApplication","operatingSystem":"Salesforce","url":"https://appexchange.salesforce.com/appxListingDetail?listingId=f020d7cb-6467-4dcc-adda-c1ce6c620257","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"author":{"@type":"Organization","@id":"https://twinstack.net/#organization","name":"TwinStack Solutions"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://twinstack.net/"},{"@type":"ListItem","position":2,"name":"Case Studies","item":"https://twinstack.net/case-studies"},{"@type":"ListItem","position":3,"name":"Brightwater Outfitters: Retail Data Migration, No VLOOKUP","item":"https://twinstack.net/case-studies/brightwater-outfitters-data-migration"}]}]}</script>
