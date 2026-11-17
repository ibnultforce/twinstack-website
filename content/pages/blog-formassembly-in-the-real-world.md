---
title: "FormAssembly in the Real World: Lessons from Live Salesforce Projects"
slug: blog-formassembly-in-the-real-world
url: /blog/formassembly-in-the-real-world.html
order: 50
description: A practical look at FormAssembly, the form platform that connects web forms to Salesforce, with honest pros and cons from live Salesforce projects.
date: 2026-11-16
metaTitle: "FormAssembly and Salesforce: Honest Pros and Cons | TwinStack"
metaDescription: A hands-on review of FormAssembly for Salesforce: how the connector and prefill work, where it shines, where it falls short, and who should choose it.
focusKeyword: FormAssembly Salesforce
tags:
  - FormAssembly
  - Salesforce integration
  - No-code forms
  - Honest pros and cons
---

<section class="relative overflow-hidden border-b border-zinc-200 bg-linear-to-b from-zinc-50 to-white">
  <div class="pointer-events-none absolute -top-32 right-0 h-80 w-80 rounded-full bg-brand/10 blur-3xl" aria-hidden="true"></div>
  <div class="relative mx-auto max-w-3xl px-5 pb-12 pt-14 sm:px-8 md:pb-16 md:pt-20">
    <a href="/blog.html" class="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-zinc-600 transition hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">
      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
      Back to the blog
    </a>
    <ul class="mt-6 flex flex-wrap gap-2" aria-label="Tags">
      {{# each page.tags }}<li class="rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm font-medium text-zinc-700">{{ this }}</li>
      {{/ each }}
    </ul>
    <h1 class="mt-6 text-4xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-5xl md:text-[3.25rem] md:leading-[1.1]">FormAssembly in the Real World: Lessons from Live Salesforce Projects</h1>
    <p class="mt-6 text-xl leading-relaxed text-zinc-700">A practical look at the form and data collection platform that connects web forms to Salesforce, written from hands-on Salesforce project work and checked against FormAssembly's own documentation.</p>
    <div class="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-600">
      <span class="font-medium text-zinc-900">TwinStack Team</span>
      <span aria-hidden="true" class="h-1 w-1 rounded-full bg-zinc-300"></span>
      <time datetime="2026-11-16">{{ page.dateFormatted }}</time>
      <span aria-hidden="true" class="h-1 w-1 rounded-full bg-zinc-300"></span>
      <span>{{ page.readingTime }}</span>
    </div>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <p class="text-sm font-bold uppercase tracking-widest text-brand">01 · Overview</p>
    <h2 class="mt-2 text-3xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-4xl">What is FormAssembly?</h2>
    <p class="mt-6 text-xl font-medium leading-relaxed text-zinc-900">FormAssembly is an online form builder that treats the form as the front door to your data. You design the form, and the platform sends every answer to the systems you already use, with Salesforce as its strongest connection.</p>
    <div class="prose prose-zinc prose-lg mt-6 max-w-none prose-a:text-brand">
      <p>A basic form tool emails you a response and stops there. FormAssembly can create and update records in Salesforce, prefill a form with data that already exists, run approvals, generate documents and collect e-signatures. The company now describes the product as a data workflow platform, not only a form builder.</p>
      <p>The product has three main parts. The <strong>form builder</strong> is where you add pages, fields, logic and branding without writing code. <strong>Connectors</strong> send data to Salesforce and other systems, and pull data back for prefill. <strong>Workflows</strong> link forms with approvals, notifications, documents and signatures into one process.</p>
    </div>
  </div>
</section>

<section class="border-t border-zinc-200 bg-zinc-50">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <p class="text-sm font-bold uppercase tracking-widest text-brand">02 · How it works</p>
    <h2 class="mt-2 text-3xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-4xl">From form to Salesforce record</h2>
    <div class="prose prose-zinc prose-lg mt-6 max-w-none prose-a:text-brand">
      <p>A typical Salesforce setup follows six steps. You can start from a new form, or import a form from Salesforce and build the form and connector together.</p>
      <ol>
        <li><strong>Build the form.</strong> Add pages, fields, validation and conditional logic.</li>
        <li><strong>Authenticate.</strong> Connect FormAssembly to your Salesforce org through OAuth.</li>
        <li><strong>Map fields.</strong> Link each form field to a Salesforce field on a standard or custom object.</li>
        <li><strong>Publish.</strong> Share the public form link, customize that link, or embed the form on a website.</li>
        <li><strong>Collect.</strong> A person fills in and submits the form.</li>
        <li><strong>Sync.</strong> The connector creates or updates the records.</li>
      </ol>
      <p>One detail matters here. There is no separate publish step that protects a live form. Once a form is saved, it is live and anyone with the link can view it.</p>

      <h3>The public URL can be customized</h3>
      <p>Every form gets a standard public address that contains the form ID, hosted on FormAssembly's tfaforms.com domain. That link stays the same after you edit the form, so it always opens the most recent version. On the Publishing page, under "Share the Public Address", you can also configure a custom URL that replaces the form ID with a readable name.</p>
      <p>The custom URL masks the standard one and does not replace it, so both links keep working and links you already shared do not break. Custom URLs work with prefill links, and they also show with a purchased custom domain. The feature needs an Essentials plan or higher. If you embed the form instead, check the publishing method first: the Salesforce prefill connector does not work with every embed option.</p>

      <h3>The Salesforce connector</h3>
      <p>The connector is where most of the value sits. Each step in it can create a record, update a record or look up an existing record, and steps can depend on each other, for example an Account first and then its Contacts. Mapping is done in a visual setup with no custom code. The newer Salesforce Workflow Connector adds a visual canvas, more advanced logic and variable storage, and it can work across multiple forms.</p>

      <h3>The prefill connector</h3>
      <p>Prefill works in the other direction. When needed, the form extracts information from Salesforce at the moment it opens and shows it in the form fields, so the person can view what is already on record. A returning contact sees their details filled in and only confirms or corrects them, and the same method lets you display record details, such as an application status or account information, for the person to review.</p>
      <p>The lookup is driven by a value in the link, as described in the next section. One parameter is enough to reach related records: the connector can find a Contact first and then pull data from that Contact's Account. It can also fill a repeatable section, for example by looking up an Account and loading all of its related Contacts. Files are the exception. An upload field cannot be prefilled, although the file name of an attachment created through a FormAssembly connector can be shown in a text field. According to FormAssembly, prefill in the Workflow Connector needs a Team plan or higher with the Salesforce connector enabled.</p>

      <h3>Passing information through the URL</h3>
      <p>A form link can carry data. This is how a form knows who is opening it, and there are three ways to do it.</p>
      <ul>
        <li><strong>Direct field prefill.</strong> Add a field alias and a value to the link, such as <code>?tfa_1876=name@domain.com</code>, and join several fields with an ampersand. The aliases are listed on the form's Publish page and in the builder's Outline. No connector is needed.</li>
        <li><strong>Unsafe parameter.</strong> In the Salesforce prefill connector, a lookup is matched against a query parameter you name yourself, for example <code>?email=</code> or a record ID. The connector finds the record and fills the form. FormAssembly explains that the name only means the parameter has no signature attached. In practice, anyone who edits the value in the link can load a different record.</li>
        <li><strong>Secure parameter.</strong> The link carries a signature, a base64-encoded HMAC-SHA256 value, so the connector rejects a link that was changed. You can generate a static signature inside the prefill connector, or sign links dynamically from your own system. FormAssembly does not provide support for dynamically signed parameters.</li>
      </ul>
      <p>FormAssembly recommends testing with the unsafe parameter first and moving to the secure parameter afterwards. As a rule from practice, use unsafe parameters only for low-risk data and secure parameters whenever the form shows personal or sensitive records. Avoid placing personal information in the URL itself, and URL-encode values that contain special characters such as #. A plain form link without a query parameter cannot trigger the prefill connector, and the connector does not work with forms published by the copy and paste method.</p>

      <h3>What can go along with the data</h3>
      <p>The connector can also send other items to Salesforce, such as uploaded files, a PDF of the response, e-signature reports and Stripe IDs.</p>
      <p><strong>Good to know.</strong> The Salesforce features require the Salesforce add-on on your FormAssembly plan. Salesforce also allows only 5 active OAuth tokens for a given user and service combination, which matters if several people connect with the same Salesforce user.</p>
    </div>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <p class="text-sm font-bold uppercase tracking-widest text-brand">03 · Features</p>
    <h2 class="mt-2 text-3xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-4xl">What you can build with it</h2>
    <p class="mt-6 text-xl font-medium leading-relaxed text-zinc-900">FormAssembly is not limited to a simple contact form. Its features combine to handle complete, multi-step processes where the answers must end up in the right place in Salesforce.</p>
    <div class="prose prose-zinc prose-lg mt-6 max-w-none prose-a:text-brand">
      <p>It helps to think of each form as a small application. It has pages, rules that decide what a person sees, places to upload documents, and a destination for the data. The table lists the building blocks, and the paragraphs after it show how they come together in real work.</p>
    </div>

    <div class="mt-8 overflow-x-auto rounded-2xl border border-zinc-200 bg-white shadow-sm">
      <table class="w-full min-w-[34rem] border-collapse text-left text-base">
        <thead>
          <tr class="border-b border-zinc-200 bg-zinc-50 text-xs font-bold uppercase tracking-widest text-brand">
            <th scope="col" class="px-4 py-3">Capability</th>
            <th scope="col" class="px-4 py-3">What it does in practice</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-zinc-200 text-zinc-700">
          <tr><th scope="row" class="px-4 py-3 align-top font-semibold text-zinc-950">Multi-page forms</th><td class="px-4 py-3">Break a long application into short steps.</td></tr>
          <tr><th scope="row" class="px-4 py-3 align-top font-semibold text-zinc-950">Conditional logic</th><td class="px-4 py-3">Show or hide fields and pages depending on earlier answers.</td></tr>
          <tr><th scope="row" class="px-4 py-3 align-top font-semibold text-zinc-950">Repeatable fields and sections</th><td class="px-4 py-3">Let a person add one block per item, such as each reference on a job application or each class on a registration.</td></tr>
          <tr><th scope="row" class="px-4 py-3 align-top font-semibold text-zinc-950">File uploads</th><td class="px-4 py-3">Collect IDs and certificates and send them to Salesforce Files.</td></tr>
          <tr><th scope="row" class="px-4 py-3 align-top font-semibold text-zinc-950">Save and resume</th><td class="px-4 py-3">Let people leave a long form and return later, which reduces abandonment.</td></tr>
          <tr><th scope="row" class="px-4 py-3 align-top font-semibold text-zinc-950">Formulas and calculations</th><td class="px-4 py-3">Compute values in the form, and reshape values in the connector with formulas such as @CONCATENATE.</td></tr>
          <tr><th scope="row" class="px-4 py-3 align-top font-semibold text-zinc-950">URL parameters</th><td class="px-4 py-3">Pass values into a form through its link: direct field prefill, unsafe parameters, or signed secure parameters for Salesforce lookups.</td></tr>
          <tr><th scope="row" class="px-4 py-3 align-top font-semibold text-zinc-950">Custom CSS and JavaScript</th><td class="px-4 py-3">Add your own HTML, CSS or JavaScript in the Custom Code field (Properties, then Custom Code) or in a Text element. Code in Custom Branding applies to all your forms.</td></tr>
          <tr><th scope="row" class="px-4 py-3 align-top font-semibold text-zinc-950">Collaboration</th><td class="px-4 py-3">Share a form with other users or user groups so they can edit it, change processing options or view responses.</td></tr>
          <tr><th scope="row" class="px-4 py-3 align-top font-semibold text-zinc-950">Revision history</th><td class="px-4 py-3">Earlier versions of a form are kept, so you can recover a previous state.</td></tr>
          <tr><th scope="row" class="px-4 py-3 align-top font-semibold text-zinc-950">Approvals and notifications</th><td class="px-4 py-3">Route a response to reviewers and send emails after submission.</td></tr>
          <tr><th scope="row" class="px-4 py-3 align-top font-semibold text-zinc-950">Documents and e-signature</th><td class="px-4 py-3">Generate documents from responses and collect signatures.</td></tr>
          <tr><th scope="row" class="px-4 py-3 align-top font-semibold text-zinc-950">Other integrations</th><td class="px-4 py-3">HTTPS and webhook connectors, Google Drive and Sheets, SharePoint, Excel, Mailchimp and more.</td></tr>
          <tr><th scope="row" class="px-4 py-3 align-top font-semibold text-zinc-950">Security options</th><td class="px-4 py-3">Higher plans add compliance options, including a FedRAMP-authorized Gov Cloud. Confirm the details for your plan with sales.</td></tr>
        </tbody>
      </table>
    </div>

    <div class="prose prose-zinc prose-lg mt-10 max-w-none prose-a:text-brand">
      <h3>Long applications and registrations</h3>
      <p>Multi-page forms, conditional logic and repeatable sections work well together for student registrations, program and visa applications and membership forms. A person sees only the pages that apply to them, adds one block for each school or job, uploads documents in the same place, and can save and return later. Staff then receive one complete, consistent record instead of a pile of emails and attachments.</p>

      <h3>Working with data already in Salesforce</h3>
      <p>Because the connector works in both directions, a form can start from existing records instead of a blank page. Typical examples are registering attendees and updating Campaign Members, creating and updating Cases, or sending a prefilled survey based on Case details.</p>

      <h3>Approvals, documents and payments</h3>
      <p>A submission does not have to stop at the form. It can be routed to a reviewer, trigger notification emails, produce a document or collect a signature. Related items, such as a Stripe ID or a PDF copy of the response, can travel to Salesforce with the record.</p>

      <h3>Going beyond the builder</h3>
      <p>When a requirement is outside the standard options, there are two routes. Developers can add custom CSS and JavaScript to change the look and behavior of a form. For other systems, the HTTPS and webhook connectors let the data travel beyond Salesforce.</p>
    </div>
  </div>
</section>

<section class="border-t border-zinc-200 bg-zinc-50">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <p class="text-sm font-bold uppercase tracking-widest text-brand">04 · Benefits</p>
    <h2 class="mt-2 text-3xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-4xl">Where FormAssembly shines</h2>
    <div class="prose prose-zinc prose-lg mt-6 max-w-none prose-a:text-brand">
      <p><strong>Deep Salesforce integration.</strong> The connector can create, update and look up records on any standard or custom object. Reviewers regularly describe the mapping as easy and the integration as the main reason they chose the product.</p>
      <p><strong>No code needed for most work.</strong> Admins and consultants can build and change forms without a developer, which shortens delivery time and lowers the cost of maintenance.</p>
      <p><strong>Cleaner data.</strong> Validation and required fields catch errors before records reach Salesforce, so the CRM receives structured, consistent data.</p>
      <h3>The benefits in plain terms</h3>
      <ul>
        <li><strong>Less manual entry.</strong> Staff stop retyping answers, and files land on the right record.</li>
        <li><strong>Better experience for applicants.</strong> Short guided pages, prefill and save and resume make long forms easier to finish.</li>
        <li><strong>Flexible forms.</strong> Conditional logic and repeatable sections handle complex applications.</li>
        <li><strong>Two-way sync.</strong> Data goes into Salesforce and comes back out for prefill, so people can view and update their own records from a form.</li>
        <li><strong>Room to customize with code.</strong> Custom CSS handles styling, and JavaScript covers what CSS cannot do, such as changing the order of elements, complex arithmetic, pop-ups and extra checks.</li>
        <li><strong>A safety net.</strong> Revision history keeps earlier versions of a form.</li>
        <li><strong>Strong support and reputation.</strong> Reviewers on G2 often praise the support team, and the product holds about 4.5 out of 5 on Capterra and G2.</li>
      </ul>
    </div>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <p class="text-sm font-bold uppercase tracking-widest text-brand">05 · Drawbacks</p>
    <h2 class="mt-2 text-3xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-4xl">Where it falls short</h2>
    <p class="mt-6 text-lg leading-relaxed text-zinc-700">No tool fits every case. Each limit below is marked with where it comes from: FormAssembly's own documentation, user reviews, or project experience.</p>
    <div class="prose prose-zinc prose-lg mt-6 max-w-none prose-a:text-brand">
      <h3>Only one person can edit a form at a time</h3>
      <p>FormAssembly lets you share a form with collaborators, but its documentation states that only one user can edit a form at a time. The same rule applies to workflows. Two developers cannot build the same form together, so a team has to take turns or divide the work by form. On a large application with a tight deadline, this slows delivery. <small class="text-zinc-500">Source: FormAssembly documentation.</small></p>

      <h3>Repeating sections join values together</h3>
      <p>This is the most common surprise in Salesforce projects. When repeated fields are pulled into the connector, FormAssembly concatenates the values of every repeat. Because of that, formulas cannot be used in connector repeating sections, and field aliases from repeatable fields cannot be used inside formulas at all. <small class="text-zinc-500">Source: FormAssembly documentation.</small></p>
      <p>Here is how the problem looks. A company has two contacts, and each contact record should be named "Contact name - Company name". If you build that name with a concatenate formula on repeated fields, every record receives "Contact A - Company; Contact B - Company" instead of its own name.</p>
      <p>The fix has two parts:</p>
      <ul>
        <li><strong>Create one record per repeat.</strong> In the classic connector, the step that contains the repeating fields offers two options: merge the data into one Salesforce record, or create one record for each instance of the repeated section. Choose the second. If the options do not appear, remap the fields. In the Workflow Connector, open Repeated Content and set "Add a record for every submitted" to the repeatable section. Choosing Workflow there runs the action once and concatenates the values.</li>
        <li><strong>Build the combined name in Salesforce.</strong> Send the raw values, such as first name, last name and company, and create the display name with a formula field or a Flow. This is a suggestion from practice, since connector formulas are not available for repeated fields.</li>
      </ul>
      <p>Two more rules from the documentation: repeating fields should sit only on the parent step when records are related, and each dependent step runs once for every time its parent step runs. A reviewer also notes that the "skip this step if" rule cannot evaluate each record inside a repeating section.</p>

      <h3>Custom JavaScript is powerful but fragile</h3>
      <p>The builder covers most needs, but some requirements push you into custom code: changing layout or element order, complex calculations, turning off the warning shown when a respondent closes a multi-page form, or behavior the built-in logic cannot express. The documented limits are clear. <small class="text-zinc-500">Source: FormAssembly documentation.</small></p>
      <ul>
        <li>Support does not write, edit or debug custom code.</li>
        <li>JavaScript must be tested on the live form, not in preview mode.</li>
        <li>JavaScript calculations cannot be used in connectors.</li>
        <li>All form validation runs on JavaScript, so a respondent with JavaScript disabled can submit without completing required fields.</li>
        <li>Custom CSS on an embedded form can conflict with the code of the host page.</li>
        <li>Heavy use of custom code and repeatable sections can affect performance on the respondent's device.</li>
      </ul>
      <p>In project work, custom JavaScript sometimes does not run as expected, and caching causes many of the problems. An old version of a form or script can keep loading after a change, so a fix can look like it failed when it did not. FormAssembly documents one cache problem directly: when a form is embedded in a WordPress page with caching enabled, submissions can fail with the error "This response has already been processed". <small class="text-zinc-500">Source: project experience, plus FormAssembly's WordPress documentation.</small></p>
      <p>Habits that help: test on the direct FormAssembly URL first and on the embedded page second, hard refresh or use a private window after each change, exclude the form page from website caching, and keep scripts small and documented.</p>

      <h3>Saved changes go live immediately</h3>
      <p>There is no staging area between your edits and the public form. A saved form is live. Reviewers ask for a way to test in one environment and push to production, and that does not exist. Revision history lets you recover an earlier version, and a common practice is to test risky changes on a copy of the form first. <small class="text-zinc-500">Source: FormAssembly documentation and user reviews.</small></p>

      <h3>Limited design control</h3>
      <p>Reviewers find the themes and interface restrictive, and say confirmation emails and the PDF copy of a response are hard to customize for branding. The newer Theme Builder can style the whole form, but styling one specific element still needs custom CSS. <small class="text-zinc-500">Source: user reviews and FormAssembly documentation.</small></p>

      <h3>Pricing is not public</h3>
      <p>FormAssembly Atlas has four plans: Explorer, Team, Enterprise and Gov Cloud. The Explorer plan listed a starting price of $59 a month until April 2026, when the price was removed from the pricing page. Pricing is now sales-led and depends on volume, users and integrations. A free trial is offered. <small class="text-zinc-500">Source: pricing trackers and Capterra.</small></p>

      <h3>More limits to plan for</h3>
      <ul>
        <li><strong>Salesforce add-on and plan gates.</strong> Salesforce features need the add-on, and prefill in the Workflow Connector needs a Team plan or higher.</li>
        <li><strong>Learning curve.</strong> Basic forms are easy, but connectors, formulas and workflows take time to learn.</li>
        <li><strong>Basic e-signature.</strong> One reviewer describes the e-signature feature as basic and a little clunky.</li>
        <li><strong>Embedding limits.</strong> A reviewer reports that embedding forms in a website limits a few features.</li>
        <li><strong>Unsafe URL parameters can be changed.</strong> A prefill link without a signature can be edited to load another record, so sensitive forms need secure parameters, and dynamic signing is something you build and support yourself.</li>
        <li><strong>OAuth token limit.</strong> The 5-token limit per Salesforce user can break a connector when several people authenticate with one user.</li>
      </ul>
    </div>
    <p class="mt-8 rounded-r-2xl border-l-4 border-brand bg-zinc-50 px-6 py-5 text-lg leading-snug text-zinc-900"><strong>Tip.</strong> List your must-have features before you buy, then test the hardest one, such as repeating sections that create related records, in a trial before you commit.</p>
  </div>
</section>

<section class="border-t border-zinc-200 bg-zinc-50">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <p class="text-sm font-bold uppercase tracking-widest text-brand">06 · Verdict</p>
    <h2 class="mt-2 text-3xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-4xl">Is it the right choice?</h2>
    <p class="mt-6 text-xl font-medium leading-relaxed text-zinc-900">If Salesforce is your system of record and you need forms that write clean data into it, FormAssembly is one of the strongest options available.</p>

    <div class="mt-8 overflow-x-auto rounded-2xl border border-zinc-200 bg-white shadow-sm">
      <table class="w-full min-w-[34rem] border-collapse text-left text-base">
        <thead>
          <tr class="border-b border-zinc-200 bg-zinc-50 text-xs font-bold uppercase tracking-widest text-brand">
            <th scope="col" class="px-4 py-3">Choose FormAssembly when</th>
            <th scope="col" class="px-4 py-3">Look elsewhere when</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-zinc-200 align-top text-zinc-700">
          <tr><td class="px-4 py-3 font-semibold text-zinc-950">Salesforce is your CRM and you need create, update and prefill.</td><td class="px-4 py-3">You only need a simple contact form with no CRM link.</td></tr>
          <tr><td class="px-4 py-3 font-semibold text-zinc-950">You need multi-page forms, conditional logic and file uploads.</td><td class="px-4 py-3">You need full control over the design of the form, emails and PDFs.</td></tr>
          <tr><td class="px-4 py-3 font-semibold text-zinc-950">You want admins to maintain forms without developers.</td><td class="px-4 py-3">You need a public price list or a free plan.</td></tr>
          <tr><td class="px-4 py-3 font-semibold text-zinc-950">One person can own each form from start to finish.</td><td class="px-4 py-3">Several developers must build the same form at the same time.</td></tr>
          <tr><td class="px-4 py-3 font-semibold text-zinc-950">Repeated data maps to one record per repeat.</td><td class="px-4 py-3">Your design depends on formulas across repeated fields.</td></tr>
          <tr><td class="px-4 py-3 font-semibold text-zinc-950">Data quality and compliance matter.</td><td class="px-4 py-3">You need a staging environment for every form change.</td></tr>
        </tbody>
      </table>
    </div>

    <div class="prose prose-zinc prose-lg mt-8 max-w-none prose-a:text-brand">
      <p>For most Salesforce teams, the benefits outweigh the drawbacks. Plan around the single-editor rule, design repeating sections with the connector in mind, keep custom JavaScript to a minimum, and confirm your plan and pricing early.</p>
      <p class="text-base text-zinc-600">Plan names, pricing and features change often, so check the official FormAssembly pages and your own account before you decide. Points marked as project experience are not confirmed by FormAssembly documentation.</p>
    </div>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <h2 class="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">Sources</h2>
    <div class="prose prose-zinc mt-6 max-w-none text-zinc-600">
      <p><strong>FormAssembly documentation:</strong> FormAssembly and Salesforce; Get Started with Salesforce (Salesforce add-on); Salesforce configuration process (OAuth token limit); Salesforce Workflow Connector (repeated content); Repeatable Fields and Sections with Salesforce; Repeatable Fields and Sections; Formula Functions Quick Reference; Formulas for Common Uses; Prefill Through the URL; Salesforce Prefill Connector (unsafe query parameter); Prefill Related Objects and Records; Prefill Lookups Using Secure Parameters; Using a Custom URL on Your Forms; Compare Publishing Options; Form Collaboration (one editor at a time); Using JavaScript on a Form and Within Calculations; Custom CSS; Troubleshooting Your Custom CSS (embedded forms); Style an Individual Element; WordPress (page caching error); Preview, save and publish (saved forms are live); Release 5.168 (collaboration with groups, revision history).</p>
      <p><strong>FormAssembly website:</strong> What is new with the Salesforce Workflow Connector; What is Prefill in the Salesforce Workflow Connector; How to Connect Forms to Salesforce; Form-Based Workflows to Enhance Collaboration; Integrations and document generation; Salesforce integration page; Solutions for Salesforce admins; Salesforce and FormAssembly features.</p>
      <p><strong>Reviews:</strong> Capterra; Capterra NZ (repeating section review); G2; SaaSworthy; AWS Marketplace reviews (no test to production, embedding, e-signature, email and PDF customization); Many pies (FormAssembly Salesforce connector review).</p>
      <p><strong>Pricing:</strong> Capterra; PricingSaaS (pricing plans, Explorer price hidden April 2026); Toolradar; xpay (sales-led pricing analysis).</p>
    </div>
  </div>
</section>

<section class="relative overflow-hidden bg-zinc-950">
  <div class="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/30 blur-3xl" aria-hidden="true"></div>
  <div class="relative mx-auto flex max-w-4xl flex-col gap-8 px-5 py-14 sm:px-8 md:flex-row md:items-center md:justify-between md:py-20">
    <div class="max-w-xl">
      <h2 class="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">Choosing a form tool for Salesforce?</h2>
      <p class="mt-3 text-lg leading-relaxed text-zinc-300">Talk to us about the right setup for your org.</p>
    </div>
    <a href="/contact.html" class="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-semibold text-zinc-950 shadow-lg ring-1 ring-white/20 transition hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Contact TwinStack</a>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
    <h2 class="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">Related reading</h2>
    <ul class="mt-6 grid gap-4 sm:grid-cols-2">
      <li>
        <a href="/blog/native-salesforce-forms.html" class="flex h-full min-h-11 items-start justify-between gap-3 rounded-2xl border border-zinc-200 bg-white p-5 font-semibold leading-snug text-zinc-950 shadow-sm transition hover:border-brand/40 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">
          <span>Why Native Salesforce Forms Beat a Form Tool Plus a Connector</span>
        </a>
      </li>
      <li>
        <a href="/blog/secure-public-salesforce-forms.html" class="flex h-full min-h-11 items-start justify-between gap-3 rounded-2xl border border-zinc-200 bg-white p-5 font-semibold leading-snug text-zinc-950 shadow-sm transition hover:border-brand/40 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">
          <span>Public Salesforce Forms Without the Anxiety: Spam, Uploads and Guest Access</span>
        </a>
      </li>
    </ul>
    <a href="/blog.html" class="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-zinc-600 transition hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">
      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
      Back to the blog
    </a>
  </div>
</section>
