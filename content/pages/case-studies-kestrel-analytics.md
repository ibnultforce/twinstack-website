---
title: "Kestrel Analytics: 63 Permission Sets Cut to 22"
description: Two earlier permission set cleanup attempts had stalled. This time the difference was the cost of checking each user's real dependency before removing anything.
metaTitle: "Permission Set Cleanup Case Study: 63 to 22 | TwinStack"
metaDescription: "An illustrative permission set cleanup case study: 63 inherited sets cut to 22 with no access incidents, by checking each user's real dependency first."
focusKeyword: permission set cleanup
slug: case-studies-kestrel-analytics
url: /case-studies/kestrel-analytics.html
ogImage: "https://res.cloudinary.com/du42kbmmn/image/upload/c_pad,w_1200,h_630,b_auto,f_jpg,q_auto/v1789469013/wsw_8.1_e5qneo.png"
order: 50
stylesheet: /assets/css/imported/case-studies-kestrel-analytics.css
hideCta: true
ownChrome: true
scripts:
  - src: "/assets/js/imported/case-studies-kestrel-analytics/inline-1.js"
    head: true
    module: false
    nomodule: false
    defer: false
    async: false
  - src: "/assets/js/imported/case-studies-kestrel-analytics/ts-analytics.js"
    head: true
    module: false
    nomodule: false
    defer: true
    async: false
  - src: "/assets/js/imported/case-studies-kestrel-analytics/inline-2.js"
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
            <h1 class="imp-text-3xl imp-md:text-5xl imp-font-extrabold imp-text-white imp-mb-6 imp-leading-tight">Kestrel Analytics: Cutting 63 Permission Sets Down to 22 Without an Access Incident</h1>
            <div class="imp-flex imp-items-center imp-justify-center imp-gap-6 imp-text-slate-400 imp-text-sm">
                <div><svg class="imp-svgi imp-mr-2" aria-hidden="true"><use href="#i-calendar" /></svg>September 15, 2026</div>
                <div><svg class="imp-svgi imp-mr-2" aria-hidden="true"><use href="#i-user" /></svg>TwinStack Team</div>
            </div>
        </div>
    </header>
    <section class="imp-py-20 imp-bg-white imp-relative">
        <div class="imp-max-w-3xl imp-mx-auto imp-px-6">
            <a href="/case-studies.html" class="imp-inline-flex imp-items-center imp-gap-2 imp-text-brand-600 imp-font-semibold imp-mb-8 imp-hover:underline">
                <svg class="imp-svgi" aria-hidden="true"><use href="#i-arrow-left" /></svg> Back to Case Studies
            </a>
            <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_800,f_auto,q_auto/v1789469013/wsw_8.1_e5qneo.png" alt="Auditing overlapping Salesforce permission sets before consolidating or retiring them" width="800" height="384" fetchpriority="high" class="imp-w-full imp-h-64 imp-md:h-96 imp-object-cover imp-rounded-xl imp-shadow-lg imp-mb-10">
            <article>
                <p class="imp-text-xl imp-text-slate-600 imp-font-medium imp-mb-8">
                    Two prior cleanup attempts had stalled. The difference this time was the cost of checking each user's real dependency.
                </p>
                <div class="imp-cs-disclaimer">
                    <p><strong>Illustrative example.</strong> Kestrel Analytics is a composite organisation built from patterns we see repeatedly in permission set cleanup work. It is not a named customer, and the figures shown are representative of the category rather than measured at one client.</p>
                </div>
                <h2>At a glance</h2>
                <div class="imp-article-table-wrap imp-cs-glance">
                <table>
                    <tbody>
                        <tr><td>Organisation</td><td>Kestrel Analytics, B2B SaaS</td></tr><tr><td>Salesforce</td><td>Sales Cloud + Service Cloud, 210 users</td></tr><tr><td>Trigger</td><td>New RevOps lead, unclear permission model inherited from prior admins</td></tr><tr><td>Starting state</td><td>63 permission sets, 11 permission set groups, no documentation of purpose</td></tr><tr><td>Solution</td><td>Who Sees What used to check actual dependency before removing anything</td></tr><tr><td>Result</td><td>63 permission sets consolidated to 22, zero access incidents during rollout</td></tr><tr><td>Time to complete</td><td>3 weeks, part-time alongside other RevOps work</td></tr><tr><td>Recurring cost</td><td>$0</td></tr>
                    </tbody>
                </table>
                </div>
                <div class="imp-border-l-4 imp-border-brand-500 imp-bg-brand-50 imp-p-5 imp-rounded-r-lg imp-mb-8">
                    <p class="imp-mb-0 imp-text-brand-900"><strong>Executive summary:</strong> A new RevOps lead at Kestrel Analytics inherited a Salesforce org with 63 permission sets accumulated over five years and three prior admins, many with unclear or overlapping purposes and no documentation. A permission-set-by-permission-set consolidation project, checking actual current dependency for every affected user before removing anything, reduced the count to 22 with zero access-related incidents during rollout. The project took three weeks of part-time effort; the team's estimate of the equivalent manual investigation was in excess of two months at the same pace, which is why two prior attempts had been abandoned partway through.</p>
                </div>
                <h2 id="starting-state">1. The starting state</h2>
                <p>
                    The incoming RevOps lead's first structural review of the org's permission model found 63 individual permission sets and 11 permission set groups. Naming conventions had shifted across three previous admins' tenures, several permission sets had names referencing projects or reorganisations that had concluded years earlier, and no central documentation explained what most of them were currently for or who had originally requested them.
                </p>
                <p>
                    Two prior cleanup attempts, one under each of the two most recent former admins, had started and been abandoned before completion. In both cases, the stated reason was the same: confirming what each candidate permission set was actually still doing, for the specific users currently assigned to it, took long enough per permission set that the project lost priority against other work before finishing.
                </p>
                <h2 id="why-not-by-name">2. Why this could not be done by name or guesswork</h2>
                <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_800,f_auto,q_auto/v1789468978/wsw_8.2_je6wbm.png" alt="Dozens of overlapping permission sets accumulated over years, with unclear ownership" width="800" height="450" loading="lazy" class="imp-zoom-image imp-w-full imp-rounded-xl imp-shadow-lg imp-mb-4">
                <p class="imp-text-sm imp-text-slate-500 imp-italic">Sixty-three permission sets, three admins' worth of naming conventions, no documentation.</p>
                <p>
                    An early instinct, consistent with both prior abandoned attempts, was to identify permission sets with clearly outdated names and remove them directly. This was deliberately not the approach taken this time, for a specific reason surfaced early: a spot check on three permission sets with names referencing a reorganisation that had concluded over two years earlier found that all three still had active user assignments, and for one of the three, at least one currently assigned user's edit access to a commission-related field had no other source. The permission set's name was obsolete. Its function, for one specific user, was not.
                </p>
                <p>
                    This confirmed that any permission set, regardless of how outdated its name appeared, required checking actual current dependency before being touched. <a href="/blog/salesforce-permission-set-cleanup.html">Why this is unsafe to skip is covered in more depth here</a>.
                </p>
                <h2 id="process">3. The process</h2>
                <h3>Step 1: full inventory</h3>
                <p>All 63 permission sets and 11 groups were listed with last-modified date and, where available, date of most recent new assignment.</p>
                <h3>Step 2: for each permission set, list currently assigned users</h3>
                <p>For each of the 63, the current list of assigned users was pulled directly, rather than assumed from the permission set's stated purpose or name.</p>
                <h3>Step 3: for each assigned user, confirm actual dependency</h3>
                <p>
                    This was the step both prior attempts had stalled on. For every user assigned to a permission set under review, the question was: does removing this specific permission set change what this specific user can actually access, given everything else already assigned to them.
                </p>
                <p>
                    Using Who Sees What, this check for one user took under a minute: look up the user's effective access with the candidate permission set considered removed against their other current assignments, and compare to their effective access with it present. Where the two were identical, the permission set was contributing nothing for that user. Where they differed, the specific access it uniquely contributed was recorded against that user.
                </p>
                <p>
                    At an average of roughly six assigned users per permission set across the 63, this step covered approximately 380 individual user-permission-set dependency checks over the three-week project.
                </p>
                <img src="https://res.cloudinary.com/du42kbmmn/image/upload/f_auto,q_auto,w_1600/v1789534736/af409f50-0f5c-4971-b446-c971e558a4ef_exlbew.png" alt="A user's assigned permission sets shown as a count with a direct link to exactly which three" width="800" height="450" loading="lazy" class="imp-zoom-image imp-w-full imp-rounded-xl imp-shadow-lg imp-mb-4">
                <p class="imp-text-sm imp-text-slate-500 imp-italic">Seeing exactly which permission sets are assigned to a user, not just how many, is what made step 3 fast.</p>
                <h3>Step 4: categorise each permission set</h3>
                <div class="imp-article-table-wrap">
                <table>
                    <thead><tr><th>Category</th><th>Count</th></tr></thead>
                    <tbody><tr><td>Fully redundant</td><td>19</td></tr><tr><td>Partially redundant</td><td>24</td></tr><tr><td>Genuinely load-bearing, kept as-is</td><td>20</td></tr></tbody>
                </table>
                </div>
                <h3>Step 5: consolidate the partially redundant group</h3>
                <p>
                    The 24 partially redundant permission sets were the bulk of the actual work. For each, the users who genuinely depended on some unique access it granted were identified, and that specific access was consolidated into a smaller number of purpose-built permission sets, rather than either deleting the original outright or leaving it in place unchanged.
                </p>
                <p>The 24 were consolidated into 2 new, clearly named and documented permission sets, with every dependent user reassigned before the originals were retired.</p>
                <h3>Step 6: remove in stages, verify after each</h3>
                <p>
                    Removal was staged across three batches over the three weeks rather than done in one pass. After each batch, a sample of affected users, weighted toward anyone flagged in step 3 as having genuine dependency, was re-checked to confirm their effective access matched what was intended.
                </p>
                <h2 id="results">4. Results</h2>
                <div class="imp-article-table-wrap">
                <table>
                    <thead><tr><th>Measure</th><th>Before</th><th>After</th></tr></thead>
                    <tbody><tr><td>Individual permission sets</td><td>63</td><td>22</td></tr><tr><td>Permission set groups</td><td>11</td><td>7</td></tr><tr><td>Permission sets with no documented purpose</td><td>~40 estimated</td><td>0, all documented</td></tr><tr><td>Access incidents during rollout</td><td>n/a</td><td>0</td></tr><tr><td>Project duration</td><td>Two prior attempts, both abandoned</td><td>3 weeks, completed</td></tr></tbody>
                </table>
                </div>
                <p>
                    No user reported a loss of needed access during or after the project. Two minor issues were caught during the stage 2 verification step, both cases where a user's dependency had been slightly mis-scoped during consolidation, and both were corrected within the same day they were found, before affecting the user's actual work.
                </p>
                <h2 id="analysis">5. Analysis</h2>
                <p>
                    <strong>The prior attempts did not fail from lack of effort.</strong> Both previous admins started with a defensible plan, similar in shape to the one that succeeded here. Both stalled at the same point: verifying actual per-user dependency at a pace that let the project compete with ongoing operational work.
                </p>
                <p>
                    <strong>Checking by name or by permission set description would have produced real incidents.</strong> The early spot check that found active dependency on an "obsolete" permission set was not an unusual case; the team's working assumption after that finding was that a meaningful fraction of the 63 would have shown the same pattern if checked by name alone.
                </p>
                <p>
                    <strong>Consolidation, not just deletion, was necessary for a real result.</strong> Simply deleting everything with zero current dependents would have only accounted for the 19 fully redundant permission sets. The larger reduction required doing the harder work of building proper replacements for the 24 partially redundant ones.
                </p>
                <h2 id="differently">6. What we would do differently</h2>
                <p>
                    <strong>Set a recurring review cadence from the start.</strong> Without a scheduled follow-up, the same sprawl pattern that produced 63 permission sets over five years will reproduce itself over the next five.
                </p>
                <p>
                    <strong>Document the purpose of every permission set at creation, not retroactively.</strong> A significant share of the three-week project's time went into reconstructing what a permission set was originally for, from indirect evidence, because no documentation existed at creation.
                </p>
                <p class="imp-text-sm imp-text-slate-500 imp-italic">Who Sees What is built and maintained by TwinStack Solutions, a Salesforce partner. Questions: <a href="mailto:info@twinstack.net">info@twinstack.net</a></p>
                <div class="imp-bg-brand-50 imp-border imp-border-brand-200 imp-rounded-xl imp-p-6 imp-mt-12">
                    <p class="imp-font-bold imp-text-brand-900 imp-mb-2">Check actual dependency before you delete anything.</p>
                    <p class="imp-text-brand-800 imp-mb-4">Who Sees What shows exactly what a user would lose in seconds, so cleanup doesn't become the next incident. Free and read-only.</p>
                    <a href="https://appexchange.salesforce.com/appxListingDetail?listingId=dc0aa216-dbed-49e5-86e0-542869f8dc26" target="_blank" rel="noopener" class="imp-inline-block imp-px-6 imp-py-3 imp-bg-brand-600 imp-text-white imp-font-semibold imp-rounded-lg imp-hover:bg-brand-700 imp-transition">
                        Get It Now, Free
                    </a>
                </div>
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

<script type="application/ld+json" id="ts-schema">{"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"Kestrel Analytics: Cutting 63 Permission Sets Down to 22 Without an Access Incident","description":"Two earlier permission set cleanup attempts had stalled. This time the difference was the cost of checking each user's real dependency before removing anything.","image":"https://res.cloudinary.com/du42kbmmn/image/upload/w_800,f_auto,q_auto/v1789469013/wsw_8.1_e5qneo.png","articleSection":"Case Study","author":{"@type":"Organization","@id":"https://twinstack.net/#organization","name":"TwinStack Solutions"},"publisher":{"@id":"https://twinstack.net/#organization"},"datePublished":"2026-09-15","dateModified":"2026-09-15","mainEntityOfPage":{"@type":"WebPage","@id":"https://twinstack.net/case-studies/kestrel-analytics"},"inLanguage":"en"},{"@type":"SoftwareApplication","name":"Who Sees What","applicationCategory":"BusinessApplication","operatingSystem":"Salesforce","url":"https://appexchange.salesforce.com/appxListingDetail?listingId=dc0aa216-dbed-49e5-86e0-542869f8dc26","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"author":{"@type":"Organization","@id":"https://twinstack.net/#organization","name":"TwinStack Solutions"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://twinstack.net/"},{"@type":"ListItem","position":2,"name":"Case Studies","item":"https://twinstack.net/case-studies"},{"@type":"ListItem","position":3,"name":"Kestrel Analytics: 63 Permission Sets Cut to 22","item":"https://twinstack.net/case-studies/kestrel-analytics"}]}]}</script>
