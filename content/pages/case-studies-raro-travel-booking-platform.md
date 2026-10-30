---
title: RARO Travel Booking Platform
description: "RARO case study: a Salesforce-connected travel booking platform with multi-wallet payments, installment automation and Stripe integration across three markets."
metaTitle: "Travel Booking Platform Case Study: RARO | My Website"
metaDescription: "RARO case study: how a travel booking platform handles multi-wallet payments, installments and Stripe recurring charges for customers and booking agents."
focusKeyword: travel booking platform
slug: case-studies-raro-travel-booking-platform
url: /case-studies/raro-travel-booking-platform.html
order: 50
stylesheet: /assets/css/imported/case-studies-raro-travel-booking-platform.css
hideCta: true
ownChrome: true
scripts:
  - src: "/assets/js/imported/case-studies-raro-travel-booking-platform/inline-1.js"
    head: true
    module: false
    nomodule: false
    defer: false
    async: false
  - src: "/assets/js/imported/case-studies-raro-travel-booking-platform/ts-analytics.js"
    head: true
    module: false
    nomodule: false
    defer: true
    async: false
  - src: "/assets/js/imported/case-studies-raro-travel-booking-platform/inline-2.js"
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
                <span class="imp-w-2 imp-h-2 imp-rounded-full imp-bg-brand-400"></span> Travel and Hospitality</div>
            <h1 class="imp-text-3xl imp-md:text-5xl imp-font-extrabold imp-text-white imp-mb-6 imp-leading-tight">RARO: A Multi-Wallet Booking and Payments Platform for Travel</h1>
            <div class="imp-flex imp-items-center imp-justify-center imp-gap-6 imp-text-slate-400 imp-text-sm">
                <div><svg class="imp-svgi imp-mr-2" aria-hidden="true"><use href="#i-calendar" /></svg>September 11, 2026</div>
                <div><svg class="imp-svgi imp-mr-2" aria-hidden="true"><use href="#i-user" /></svg>TwinStack Team</div>
            </div>
        </div>
    </header>
    <section class="imp-py-20 imp-bg-white imp-relative">
        <div class="imp-max-w-3xl imp-mx-auto imp-px-6">
            <a href="/case-studies.html" class="imp-inline-flex imp-items-center imp-gap-2 imp-text-brand-600 imp-font-semibold imp-mb-8 imp-hover:underline">
                <svg class="imp-svgi" aria-hidden="true"><use href="#i-arrow-left" /></svg> Back to Case Studies
            </a>
            <div class="imp-figure-panel imp-mb-10">
                <img src="https://res.cloudinary.com/du42kbmmn/image/upload/w_900,f_auto,q_auto/v1789139633/3_pkhq7f.png" alt="RARO travel booking platform for trips across Italy, Greece and the Philippines" width="800" height="384" fetchpriority="high" class="imp-figure-img">
            </div>
            <article>
                <div class="imp-logo-chip"><img loading="lazy" src="https://res.cloudinary.com/du42kbmmn/image/upload/w_200,f_auto,q_auto/v1769696008/Screenshot_2026-01-29_at_8.11.35_PM_idx7w6.webp" alt="RARO logo" width="80" height="32"><span class="imp-text-slate-600 imp-text-sm imp-font-semibold">never stop exploring</span></div>
                <p class="imp-text-xl imp-text-slate-600 imp-font-medium imp-mb-8">A multi-wallet booking and payments platform for a travel agency operating across Italy, Greece and the Philippines.</p>
                <h2>At a glance</h2>
                <div class="imp-article-table-wrap"><table class="imp-glance"><tbody><tr><th>Client</th><td>RARO, travel agency and tour operator</td></tr><tr><th>Industry</th><td>Travel and hospitality</td></tr><tr><th>Markets</th><td>Italy, Greece, the Philippines</td></tr><tr><th>Users served</th><td>Individual customers and booking agents</td></tr><tr><th>Core build</th><td>Booking system, multi-wallet payments, installment automation</td></tr><tr><th>Key integration</th><td>Stripe, plus custom APIs for recurring payments</td></tr></tbody></table></div>
                <h2>What does RARO do?</h2>
                <p>RARO is a travel agent company that facilitates booking trips and organising tours for travellers in Italy, Greece, and the Philippines. The company offers a comprehensive booking system catering to both individual customers and agents.</p>
                <p>The system incorporates various payment methods, including credit cards, wallets containing real and virtual money, and promotional offers. It also supports installment payments and automated recurring payments through integration with Stripe and custom APIs.</p>
                <h2>How does the customer experience work?</h2>
                <p><strong>Booking process.</strong> Customers can book trips for themselves and multiple guests through RARO's platform. During booking, customers are required to deposit a minimum amount, which must be in real money.</p>
                <p><strong>Payment methods.</strong> Customers can pay using credit cards, e-wallets holding real money, and promotional offers. Promotions can be site-wide or specific to certain trips, countries, or locations, and can be either visible or invisible to customers.</p>
                <h3>Wallet types</h3>
                <p>RARO provides several wallet types, and customers choose between them based on their preferences or on exclusions set by the company.</p>
                <ul>
                    <li><strong>E-wallet</strong> for real money</li>
                    <li><strong>Future-wallet</strong> for virtual money</li>
                    <li><strong>Promotional wallet</strong> for campaign credit</li>
                    <li><strong>Service wallet</strong> for service-specific balances</li>
                </ul>
                <h3>Installment options</h3>
                <p>Customers can pay the remaining balance through installment plans, with options for 2 equal installments, 4 equal installments, or monthly installments. The system automatically notifies customers about upcoming installment payments and deducts the due amount from their accounts.</p>
                <h2>What can agents do?</h2>
                <figure><div class="imp-figure-panel"><img width="900" height="600" src="https://res.cloudinary.com/du42kbmmn/image/upload/w_900,f_auto,q_auto/v1789139634/2_o3j3aq.png" alt="RARO booking and payment platform features for customers and agents" loading="lazy" class="imp-figure-img"></div><figcaption>Booking, wallets, promotions and payment processing across both customer and agent journeys.</figcaption></figure>
                <p><strong>Agent booking.</strong> Agents can book trips for one or more customers, including customers they create themselves. They go through the same booking process as customers, which keeps the experience consistent and the logic single-sourced.</p>
                <p><strong>Payment management.</strong> Agents can manage customer balances and make payments on their behalf. They can track payments, installment schedules, and promotional offers through the system.</p>
                <h2>How does the payment architecture work?</h2>
                <p><strong>Stripe integration.</strong> RARO's payment system is integrated with Stripe, a secure payment gateway, to ensure smooth and secure transactions.</p>
                <p><strong>Custom APIs.</strong> Custom APIs are used to automate recurring payments and manage the entire payment process.</p>
                <p><strong>Automated recurring payments.</strong> Installment plans run without manual intervention, with deductions taken on schedule.</p>
                <p><strong>Notifications.</strong> Agents and customers receive timely alerts about payment due dates, installment schedules, and any changes in booking or payment status. Alerts are sent by email or SMS.</p>
                <p><strong>Database management.</strong> A robust database stores customer information, booking details, payment history, and wallet balances, ensuring data integrity and reliable retrieval.</p>
                <h2>What promotion types are supported?</h2>
                <ul>
                    <li>Site-wide promotions and trip-specific promotions</li>
                    <li>Visible and invisible promotions</li>
                    <li>Beneficial promotions and flat promotions</li>
                </ul>
                <p>Admins control which wallets and promotion types apply where, which turns the promotion engine into a strategic marketing tool rather than a fixed discount table.</p>
                <h2>What did the platform deliver?</h2>
                <ul>
                    <li><strong>Convenience.</strong> Customers and agents book trips and manage payments in one place.</li>
                    <li><strong>Flexibility.</strong> Diverse payment options cater to different financial needs.</li>
                    <li><strong>Promotions.</strong> Customised discounts attract customers and reward loyalty.</li>
                    <li><strong>Control.</strong> Admins manage wallets and promotion types for strategic marketing.</li>
                    <li><strong>Automation.</strong> Streamlined payments and notifications reduce manual work.</li>
                </ul>
                <h2>What made this build difficult?</h2>
                <p>Stated plainly, because the engineering challenges are the useful part of this case study.</p>
                <p><strong>Complexity.</strong> Managing multiple wallets, promotions, and payment methods requires robust system design. Every combination of wallet type and promotion type has to resolve to one correct balance.</p>
                <p><strong>Security.</strong> Integrating with Stripe necessitates strong security measures to protect financial data.</p>
                <p><strong>Customisation.</strong> Defining wallet rules and promotion limitations requires clear regulations, agreed up front rather than discovered during build.</p>
                <p>Overall, RARO's travel booking system offers a comprehensive and flexible solution for customers and agents. By combining diverse payment options, promotions, and automated features, RARO streamlines booking processes, improves user experience, and supports sales.</p>
<div class="imp-bg-brand-50 imp-border imp-border-brand-200 imp-rounded-xl imp-p-6 imp-mt-12">
<p class="imp-font-bold imp-text-brand-900 imp-mb-2">Building a platform on Salesforce?</p>
<p class="imp-text-brand-800 imp-mb-4">TwinStack architects, builds and passes Security Review for B2B ISV partners and custom Salesforce platforms. Payments, wallets, portals and integrations included.</p>
<a href="/contact.html" class="imp-inline-block imp-px-6 imp-py-3 imp-bg-brand-600 imp-text-white imp-font-semibold imp-rounded-lg imp-hover:bg-brand-700 imp-transition">Talk to Us</a>
</div>
            </article>
            <div class="imp-mt-16 imp-pt-8 imp-border-t imp-border-slate-200">
                <a href="/case-studies.html" class="imp-inline-flex imp-items-center imp-gap-2 imp-text-brand-600 imp-font-bold imp-hover:underline">
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
              <li><a href="/about.html" class="imp-hover:text-brand-400 imp-transition imp-py-2 imp-block">About Us</a></li>
              <li><a href="/pricing.html" class="imp-hover:text-brand-400 imp-transition imp-py-2 imp-block">Pricing</a></li>
            </ul>
          </div>
          <div class="imp-ts-fcol">
            <h4 class="imp-text-white imp-font-semibold imp-mb-4">Resources</h4>
            <ul class="imp-space-y-1 imp-text-sm">
              <li><a href="/blog.html" class="imp-hover:text-brand-400 imp-transition imp-py-2 imp-block">Blog</a></li>
              <li><a href="/case-studies.html" class="imp-hover:text-brand-400 imp-transition imp-py-2 imp-block">Case Studies</a></li>
              <li><a href="/contact.html" class="imp-hover:text-brand-400 imp-transition imp-py-2 imp-block">Contact</a></li>
            </ul>
          </div>
          <div class="imp-mt-4 imp-md:mt-0">
            <h4 class="imp-text-white imp-font-semibold imp-mb-4">Trust &amp; Legal</h4>
            <ul class="imp-space-y-1 imp-text-sm">
              <li><a href="/privacy-policy.html" class="imp-hover:text-brand-400 imp-transition imp-py-2 imp-block">Privacy Policy</a></li>
              <li><a href="/trust-center.html" class="imp-hover:text-brand-400 imp-transition imp-py-2 imp-block">Trust Center</a></li>
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
