(function(){
"use strict";
var D={
meta:{updated:"2026-09-29"},

/* plain-language outcomes the buyer picks from */
needs:{
 np:[
  {id:"donors",    t:"Fundraising & donations",     d:"Donors, gifts, pledges, recurring giving"},
  {id:"grants_out",t:"Give out grants",             d:"Applications, review, awards, payments"},
  {id:"grants_in", t:"Grants we receive",           d:"Funder reporting, restricted funds"},
  {id:"programs",  t:"Programmes & case management",d:"Clients, beneficiaries, services delivered"},
  {id:"volunteers",t:"Volunteer coordination",      d:"Sign-ups, shifts, hours logged"},
  {id:"members",   t:"Membership",                  d:"Renewals, dues, member records"},
  {id:"events",    t:"Events & registrations",      d:"Ticketing, attendance, follow-up"},
  {id:"email",     t:"Email campaigns",             d:"Newsletters, appeals, automated journeys"},
  {id:"reports",   t:"Advanced dashboards",         d:"Board-level reporting across everything"},
  {id:"phone",     t:"Phone / contact centre",      d:"Calls logged against records"},
  {id:"ai",        t:"AI assistant",                d:"Drafting, summarising, answering questions"},
  {id:"commerce",  t:"Online shop",                 d:"Sell merchandise, tickets or goods online"},
  {id:"apps",      t:"Custom internal apps",        d:"Build your own apps on Salesforce"}
 ],
 comm:[
  {id:"leads",   t:"Sales pipeline",        d:"Leads, opportunities, forecasting"},
  {id:"support", t:"Customer support",      d:"Cases, SLAs, knowledge base"},
  {id:"quotes",  t:"Quotes & contracts",    d:"Configure, price, quote, renewals"},
  {id:"email",   t:"Marketing automation",  d:"Campaigns, nurture, lead scoring"},
  {id:"field",   t:"Field service",         d:"Scheduling, mobile technicians"},
  {id:"events",  t:"Events & webinars",     d:"Registrations and follow-up"},
  {id:"reports", t:"Advanced dashboards",   d:"Cross-system BI and analytics"},
  {id:"phone",   t:"Phone / contact centre",d:"Telephony inside the CRM"},
  {id:"ai",      t:"AI agents",             d:"Autonomous service and sales agents"},
  {id:"commerce",t:"Online store / e-commerce",d:"Sell online to businesses or consumers"},
  {id:"apps",    t:"Custom internal apps",  d:"Build your own apps on the platform"}
 ]
},


/* ---- product catalogue: every primary cloud a buyer can pick ----
   unit: user = per user/mo, org = per org/mo, gmv = % of annual online sales
   Industry clouds: new Core/Advanced/Max industry pricing is due later in
   fall 2026, so current published industry prices are used in both lineups. */
prod:(function(){
 var CRM={new:{starter:{l:"Starter Suite",r:25},pro:{l:"Pro Suite",r:100},core:{l:"Core",r:195},advanced:{l:"Advanced",r:395},max:{l:"Max",r:550}},
          legacy:{ee:{l:"Enterprise",r:175},ue:{l:"Unlimited",r:350}}};
 var IND={ee:{l:"Enterprise",r:350},ue:{l:"Unlimited",r:525},a1:{l:"Agentforce 1",r:750}};
 var MKT={g:{l:"Account Engagement Growth+",r:1250,b:590},p:{l:"Account Engagement Plus+",r:2750},a:{l:"Account Engagement Advanced+",r:4400},
          pr:{l:"Account Engagement Premium+",r:15000},ng:{l:"Marketing Cloud Next Growth",r:1500},na:{l:"Marketing Cloud Next Advanced",r:3250},
          ep:{l:"Engagement+ Pro+",r:2000},ec:{l:"Engagement+ Corporate+",r:5500},ee:{l:"Engagement+ Enterprise+",r:30000}};
 var COM={b2bg:{l:"B2B Commerce Growth (1% of GMV)",pct:0.01},b2ba:{l:"B2B Commerce Advanced (2% of GMV)",pct:0.02},
          b2c:{l:"B2C Commerce (quote-based, ~2% of GMV est.)",pct:0.02}};
 var PLAT={starter:{l:"Platform Starter",r:25,np:5},plus:{l:"Platform Plus",r:100,np:17.50}};
 return {
  npc:{l:"Nonprofit Cloud",org:["np"],unit:"user",ed:{new:{core:{l:"Core",r:70},advanced:{l:"Advanced",r:125},max:{l:"Max",r:285}},
       legacy:{ee:{l:"Enterprise",r:60},ue:{l:"Unlimited",r:100}}},benchL:{ee:56,ue:77}},
  grant:{l:"Nonprofit Cloud for Grantmaking",org:["np"],unit:"user",ed:{new:{max:{l:"Max",r:285}},
       legacy:{ee:{l:"Enterprise",r:175},ue:{l:"Unlimited",r:225}}},benchL:{ee:175,ue:200}},
  sales:{l:"Sales Cloud",org:["comm"],unit:"user",ed:CRM,benchL:{ee:115,ue:180}},
  service:{l:"Service Cloud",org:["comm"],unit:"user",ed:CRM,benchL:{ee:115,ue:180}},
  ss:{l:"Sales + Service Cloud",org:["comm"],unit:"user",ed:CRM,benchL:{ee:91,ue:180}},
  health:{l:"Health Cloud",org:["comm"],unit:"user",ed:{new:IND,legacy:IND},ind:true},
  fsc:{l:"Financial Services Cloud",org:["comm"],unit:"user",ed:{new:IND,legacy:IND},ind:true},
  mkt:{l:"Marketing Cloud / Account Engagement",org:["np","comm"],unit:"org",ed:{new:MKT,legacy:MKT}},
  commerce:{l:"Commerce Cloud",org:["np","comm"],unit:"gmv",ed:{new:COM,legacy:COM}},
  platform:{l:"Platform (custom apps)",org:["np","comm"],unit:"user",ed:{new:PLAT,legacy:PLAT}}
 };
})(),
/* per user / month, new Sep-2026 lineup */
ed:{
 np:{core:{l:"Core",r:70},advanced:{l:"Advanced",r:125},max:{l:"Max",r:285}},
 comm:{starter:{l:"Starter Suite",r:25},pro:{l:"Pro Suite",r:100},core:{l:"Core",r:195},
       advanced:{l:"Advanced",r:395},max:{l:"Max",r:550}}
},
/* legacy lineup, for renewal comparison */
edLegacy:{
 np:{ee:{l:"Enterprise",r:60},ue:{l:"Unlimited",r:100}},
 comm:{ee:{l:"Enterprise",r:175},ue:{l:"Unlimited",r:350}}
},
/* observed benchmark rates where we hold signed paper; else factor */
benchLegacy:{np:{ee:56,ue:77},comm:{ee:115,ue:180}},
factor:{np:0.85,comm:0.78},

/* Experience Cloud, list per month. Commercial: Customer Community $2/login $5/member,
   Customer Community Plus $6/$15, Partner Community $10/$25 (published list).
   Nonprofit: Salesforce for Nonprofits Pricing Guide 2026 - $0.50/$1.25, $1.50/$3.75, $2.50/$6.25.
   Nonprofit bench: legacy community rates observed on our contracts ($0.32-$1.25/login). */
portal:{
 cc     :{l:"Customer Community",      login:{comm:2, np:0.50},member:{comm:5, np:1.25},benchNp:{login:0.35,member:0.34}},
 ccp    :{l:"Customer Community Plus", login:{comm:6, np:1.50},member:{comm:15,np:3.75}},
 partner:{l:"Partner Community",       login:{comm:10,np:2.50},member:{comm:25,np:6.25}}
},
portalFor:{donors:"cc",members:"cc",clients:"cc",customers:"cc",volunteers:"ccp",applicants:"ccp",partners:"partner","portal users":"cc"},

/* add-on catalogue: list = published, bench = observed on our contracts */
addon:{
 mcae  :{l:"Marketing Cloud Account Engagement",sub:"Growth+ tier",list:1250,bench:590,org:true},
 tcre  :{l:"Tableau Creator",  sub:"Tableau Cloud Standard", list:75, bench:56.25},
 texp  :{l:"Tableau Explorer", sub:"Tableau Cloud Standard", list:42, bench:31.50},
 tvie  :{l:"Tableau Viewer",   sub:"Tableau Cloud Standard", list:15, bench:11.25},
 scv   :{l:"Service Cloud Voice",sub:"Telephony in CRM",  list:50,  bench:12.50},
 agent :{l:"Agentforce",       sub:"AI add-on per user",  list:125, bench:100},
 rev   :{l:"Revenue Cloud",    sub:"Quotes & contracts",  list:150, bench:120},
 field :{l:"Field Service",    sub:"Scheduling & mobile", list:165, bench:130},
 mule  :{l:"MuleSoft Integration",sub:"$50K annual floor",list:4167,bench:2833,org:true},
 data  :{l:"Data 360 Flex Credits",sub:"Per 100K credits",list:500, bench:425,org:true}
},

succ:{premier:0.30},
sand:{none:{l:"Developer sandbox",p:0},devpro:{l:"Developer Pro sandbox",p:0.05},
      partial:{l:"Partial Copy sandbox",p:0.20},full:{l:"Full Copy sandbox",p:0.30}},

bands:{
 none :{l:"No implementation",h:0,d:"no build"},
 /* base configuration hours for a ~25-50 user org; scaled by team size (sizeFactor) */
 quick:{l:"QuickStart",  h:150, d:"2–6 weeks"},
 std  :{l:"Standard",    h:400, d:"6–12 weeks"},
 mid  :{l:"Mid-market",  h:900, d:"3–6 months"},
 ent  :{l:"Enterprise",  h:1800,d:"6–12 months"}
},
delivery:{off:{l:"Offshore (TwinStack Dhaka)",r:65},near:{l:"Nearshore",r:90},
          on:{l:"Onshore US / UK",r:175},gsi:{l:"Big 4 / GSI",r:350}},
mig:{none:{l:"No migration",c:0},nothing:{l:"Starting from scratch",c:0},
     sheets:{l:"Spreadsheets",c:8000},crm:{l:"Another CRM",c:20000},
     many:{l:"Several systems",c:45000}},
integCost:{std:17500,ent:75000},
systems:{none:{n:0,t:"std"},few:{n:1,t:"std"},many:{n:3,t:"std"},ent:{n:3,t:"ent"}},
timeline:{fast:{l:"3 months or less",m:1.25,go:3},base:{l:"4–6 months",m:1.00,go:5},
          rel:{l:"7–9 months",m:0.95,go:8},phase:{l:"10–12+ months",m:0.92,go:11}},
support:{none:{l:"Self-managed",m:0},block:{l:"Block of hours (10/mo)",m:825},
         frac:{l:"Fractional admin (0.25 FTE)",m:2400},
         ms:{l:"Managed service (0.5 FTE)",m:4750},ded:{l:"Dedicated admin (1 FTE)",m:9500}},
training:9000,
/* services effort in HOURS, priced at the chosen delivery rate.
   At onshore rates ($175/hr) these land inside the spec's market ranges
   (migration $12K-$30K, integration $10K-$25K, portal $25K-$80K, training $3K-$15K). */
hrs:{mig:{none:0,nothing:0,sheets:90,crm:200,many:450},integ:{std:120,ent:500},
     portal:{occasional:250,regular:450},training:80,
     support:{none:0,block:10,frac:40,ms:80,ded:160}},
/* Experience Cloud portal build (bench, spec 4.3: $25K-$80K) */
portalBuild:{occasional:25000,regular:45000},
uplift:0.06
};


var $=function(s){return document.querySelector(s)},
    $$=function(s){return Array.prototype.slice.call(document.querySelectorAll(s))};
var fmt=function(n){return "$"+Math.round(n).toLocaleString("en-US")};
var money=function(n){return "$"+n.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})};
var rnd=function(n){return Math.round(n/100)*100};
var LAST=null, REC=null, UNLOCKED=false, STEP=1, MODE="g", OV={prod:"",ed:""};
var CHECK='<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>';

/* ---------------- collect answers ---------------- */
function org(){return $("input[name=org]:checked").value;}
function S(){
  var o=org(),needs=[];
  $$("#needs input:checked").forEach(function(c){needs.push(c.dataset.n);});
  return {
    org:o, np:o==="np",
    pou:o==="np"&&$("#pou-y").checked,
    users:+$("#users").value,
    needs:needs,
    ext:$("#ext").value, extn:+$("#extn").value||0, extwho:$("#extwho").value,
    datanow:$("#datanow").value,
    uniq:$("input[name=uniq]:checked").value,
    systems:$("#systems").value,
    runner:$("#runner").value,
    tl:$("#tl").value,
    train:$("#tr-y").checked,
    industry:o==="comm"?$("#industry").value:"",
    cmType:$("#cmtype").value, gmv:+$("#gmv").value||0,
    fam:$("#adj-fam").value,
    selProd:OV.prod, selEd:OV.ed,
    rate:$("#adj-rate").value
  };
}
/* benchmark = list x typical negotiated ratio.
   Nonprofit: our contracts show Nonprofit Cloud EE at $50.40-$60 on a $60 list (~7% off).
   Commercial: scales with seat count - market data puts the mid-market median near 13% off,
   100-500 seats at 15-25%, and very large deals at 35%+; our 115-seat contract was ~30% off. */
var CUR_USERS=25;
function benchFactor(np){
  if(np)return 0.93;
  var u=CUR_USERS; return u<50?0.87:u<150?0.80:u<500?0.75:0.65;
}
function bench(list,np){return Math.round(list*benchFactor(np)*100)/100;}

/* Experience Cloud line: licence type follows who the users are */
function portalItem(s,prodKey,edKey,legacy){
  if(s.ext==="none"||!(s.extn>0))return null;
  var typ=D.portalFor[s.extwho]||"cc", P=D.portal[typ], mode=s.ext==="occasional"?"login":"member";
  var list=P[mode][s.np?"np":"comm"], bench=(s.np&&P.benchNp)?Math.min(P.benchNp[mode],list):Math.round(list*benchFactor(s.np)*100)/100;
  var qty=s.extn, incl=0;
  if(prodKey==="grant"&&!legacy&&edKey==="max"&&mode==="login"){incl=Math.min(100,qty);}
  var why=(mode==="login"?"Your "+s.extwho+" log in only now and then, so login-based pricing (billed per login per month) is far cheaper than a named seat for each of them.":
    "Your "+s.extwho+" use the portal regularly, so member-based pricing costs less than paying per login at that frequency.")+
    " "+P.l+" is the lightest licence that fits "+s.extwho+(typ==="partner"?" who work on your records alongside your team.":typ==="ccp"?", who need reports and role-based sharing.":".")+
    (s.np?" Priced at Salesforce's published nonprofit rate.":"")+(incl?" Your edition already includes 100 Customer Community Plus logins a month.":"");
  return {k:"portal",l:"Experience Cloud, "+P.l+" ("+(mode==="login"?"login":"member")+"-based)",why:why,qty:Math.max(0,qty-incl),unit:mode==="login"?"logins / month":"members",list:list,bench:bench,incl:incl};
}
/* sandbox entitlements: Partial Copy is included in Enterprise / Unlimited and Core / Advanced / Max;
   Full Copy is included in Unlimited / Advanced / Max (and industry top tiers); extras are % of net licences */
function sandboxEnt(prodKey,edKey,legacy){
  var P=D.prod[prodKey]; if(!P)return {partial:false,full:false};
  var crm=["npc","grant","sales","service","ss","health","fsc"].indexOf(prodKey)>-1;
  if(!crm)return {partial:prodKey==="platform",full:false,na:prodKey!=="platform"};
  var partial=["core","advanced","max","ee","ue","a1"].indexOf(edKey)>-1;
  var full=["advanced","max","ue","a1"].indexOf(edKey)>-1;
  return {partial:partial,full:full};
}
function sandboxLine(need,ent){
  /* returns {item, included text} */
  if(need==="none")return {inc:"Developer sandboxes for building and testing"};
  if(ent.na)return {inc:null};
  if(need==="partial"||need==="devpro"){
    if(need==="partial"&&ent.partial)return {inc:"Partial Copy sandbox for testing with sample data (included in this edition)"};
    if(need==="devpro"&&ent.partial)return {inc:"Developer Pro and Partial Copy sandboxes (included in this edition)"};
    return {item:{k:"sand",l:D.sand.devpro.l,why:"This edition does not include a Partial Copy sandbox (Salesforce only sells Partial and Full Copy sandboxes with Enterprise-level editions and above), so a Developer Pro sandbox is the practical test environment.",pct:D.sand.devpro.p}};
  }
  if(need==="full"){
    if(ent.full)return {inc:"Full Copy sandbox for final testing on real data (included in this edition)"};
    if(ent.partial)return {item:{k:"sand",l:D.sand.full.l,why:"A build this size is safest tested against a full copy of your data. Your edition includes a Partial Copy sandbox; a Full Copy is an extra 30% of net licence fees. Advanced and Max include one.",pct:D.sand.full.p}};
    return {item:{k:"sand",l:D.sand.devpro.l,why:"This edition cannot add Partial or Full Copy sandboxes, so a Developer Pro sandbox is the available test environment. A build this size usually justifies Core or above.",pct:D.sand.devpro.p}};
  }
  return {};
}
/* one priced line for a primary cloud */
function coreItem(pk,ek,s,legacy){
  var P=D.prod[pk], t=P.ed[legacy?"legacy":"new"], E=t[ek]||t[Object.keys(t)[0]];
  if(P.unit==="gmv"){
    var yr=(s.gmv||0)*E.pct;
    return {k:"core",l:P.l+", "+E.l+", on "+fmt(s.gmv||0)+" online sales/yr",qty:1,unit:"org",org:true,list:yr/12,bench:bench(yr/12,s.np),gmv:true};
  }
  if(P.unit==="org")return {k:"core",l:P.l+", "+E.l,qty:1,unit:"org",org:true,list:E.r,bench:E.b||bench(E.r,s.np)};
  var billable=(s.pou&&pk==="npc")?Math.max(0,s.users-10):s.users;
  var r=(s.np&&E.np!=null)?E.np:E.r;
  var b = legacy&&P.benchL&&P.benchL[ek] ? P.benchL[ek] : bench(r,s.np);
  return {k:"core",l:P.l+", "+E.l+(pk==="platform"?"":" Edition")+((s.np&&E.np!=null)?" (nonprofit price)":""),qty:billable,unit:"users",list:r,bench:b};
}
/* ---------------- the recommendation engine ---------------- */
function recommend(s){
  var has=function(x){return s.needs.indexOf(x)>-1;};
  var items=[],excl=[],inc=[];

  /* ---- complexity score drives edition and build size ---- */
  var sc=0;
  if(s.users>=50)sc++;
  if(s.users>=150)sc++;
  if(s.uniq==="some")sc++;
  if(s.uniq==="unique")sc+=2;
  if(has("ai"))sc++;
  if(s.needs.length>=5)sc++;
  if(s.systems==="many"||s.systems==="ent")sc++;

  /* ---- 1. the core platform: recommend a cloud + edition ---- */
  var only=function(list){return s.needs.length>0&&s.needs.every(function(n){return list.indexOf(n)>-1;});};
  var recProd,why;
  if(s.np){
    if(has("grants_out")){recProd="grant";
      why="You said you award grants. This edition ships with application intake, reviewer scoring, award decisions and payment tracking already built. Recreating that on a plain CRM is months of custom work. Salesforce currently sells Grantmaking at one tier only.";}
    else if(only(["commerce","reports","email"])&&has("commerce")){recProd="commerce";why="Your main goal is selling online, so Commerce Cloud is the right base. It is priced as a share of online sales rather than per user.";}
    else if(only(["email","events","reports"])&&has("email")){recProd="mkt";why="You mainly need email campaigns and journeys, so a marketing product is the right starting point rather than a full CRM.";}
    else if(only(["apps","reports"])&&has("apps")){recProd="platform";why="You mainly want to build your own internal apps, so the Salesforce Platform licence is enough. You do not need a full CRM.";}
    else {recProd="npc";why="Nonprofit Cloud is the purpose-built edition. It arrives with the constituent, donation and programme data model in place, so you are not designing donor and gift objects from scratch.";}
  }else{
    if(s.industry==="health"){recProd="health";why="You work in healthcare. Health Cloud adds patient, provider and care-plan records on top of Sales and Service Cloud, so you are not building a clinical data model yourself.";}
    else if(s.industry==="fin"){recProd="fsc";why="You work in financial services. Financial Services Cloud adds households, financial accounts and advisor workflows on top of Sales and Service Cloud.";}
    else if(only(["commerce","reports","email"])&&has("commerce")){recProd="commerce";why="Your main goal is selling online, so Commerce Cloud is the right base. It is priced as a share of online sales rather than per user.";}
    else if(only(["email","events","reports"])&&has("email")){recProd="mkt";why="You mainly need marketing automation, so a marketing product is the right starting point rather than a full CRM.";}
    else if(only(["apps","reports"])&&has("apps")){recProd="platform";why="You mainly want to build your own internal apps, so the Salesforce Platform licence is enough. You do not need a full CRM.";}
    else if(has("leads")&&has("support")){recProd="ss";why="You need both a sales pipeline and a support desk. One combined licence keeps one customer record and costs less than two separate clouds.";}
    else if(has("support")&&!has("leads")){recProd="service";why="Your focus is support cases rather than sales pipeline, so Service Cloud is the right base.";}
    else {recProd="sales";why="Your focus is winning and tracking business, so Sales Cloud is the right base.";}
  }
  var legacy = s.fam==="legacy";
  function defaultEd(pk){
    var P=D.prod[pk], t=P.ed[legacy?"legacy":"new"];
    if(pk==="npc")return legacy?(sc<=3?"ee":"ue"):(sc<=2?"core":(sc>=6&&has("ai"))?"max":"advanced");
    if(pk==="grant")return legacy?"ee":"max";
    if(P.ind)return has("ai")?"a1":(sc<=3?"ee":"ue");
    if(pk==="mkt")return s.users>=150||sc>=5?"p":"g";
    if(pk==="commerce")return s.cmType==="b2c"?"b2c":(sc>=5?"b2ba":"b2bg");
    if(pk==="platform")return sc>=2?"plus":"starter";
    if(legacy)return sc<=3?"ee":"ue";
    if(sc===0&&s.users<=5&&s.uniq==="standard")return "starter";
    if(sc<=1&&s.users<=15)return "pro";
    return sc<=3?"core":(sc>=6&&has("ai"))?"max":"advanced";
  }
  var prodKey = (s.selProd&&D.prod[s.selProd]&&D.prod[s.selProd].org.indexOf(s.org)>-1)?s.selProd:recProd;
  var table = D.prod[prodKey].ed[legacy?"legacy":"new"];
  var recEd = defaultEd(prodKey);
  var edKey = (s.selEd&&table[s.selEd])?s.selEd:recEd;
  if(!table[edKey])edKey=Object.keys(table)[0];
  if(prodKey!==recProd)why="You chose "+D.prod[prodKey].l+" instead of our suggestion ("+D.prod[recProd].l+"). Priced as selected.";
  var core=coreItem(prodKey,edKey,s,legacy);
  core.why=why+(core.qty===0&&core.unit==="users"?" At "+s.users+" users your free nonprofit licences cover your whole team, so the software itself costs you nothing. Your budget is the build.":"");
  var edObj=table[edKey];
  if(D.prod[prodKey].unit==="user"&&!D.prod[prodKey].ind&&prodKey!=="platform"&&prodKey!=="grant"){
    core.why += " " + (legacy ? "Legacy pricing shown for renewal comparison."
      : (edKey==="starter"||edKey==="pro") ? "At your size and with standard processes you do not need the full platform. This tier covers it."
      : edKey==="core" ? "Core is the entry point for real customisation (custom objects, automation and permissions) and it bundles Slack, Tableau Next, Premier Success and Agentforce."
      : edKey==="advanced" ? "Your process complexity and team size push you past Core. Advanced adds tighter security controls and a larger AI allowance."
      : "Your requirements are AI-heavy and complex enough to justify the top tier, which carries the largest Flex Credit allowance.");
  }
  if(D.prod[prodKey].ind)core.why+=" Industry pricing under the new Core / Advanced / Max lineup is due later in fall 2026; current published industry prices are shown.";
  items.push(core);
  var pouOn = s.pou && prodKey==="npc";
  if(pouOn)items.push({k:"pou",l:"Power of Us donation",why:"As a registered nonprofit your first 10 licences are free, every year, for as long as you qualify. We handle the application at no charge.",qty:10,unit:"users",list:0,bench:0,free:true});
  if(has("commerce")&&prodKey!=="commerce"){
    var ci=coreItem("commerce",s.cmType==="b2c"?"b2c":"b2bg",s,legacy); ci.k="commerce";
    ci.why="You also want to sell online. Commerce Cloud is priced as a share of online sales (GMV), on top of your main licence.";
    items.push(ci);
  }
  /* ---- 2. what the base licence already covers ---- */
  var CRMISH=["npc","grant","sales","service","ss","health","fsc"].indexOf(prodKey)>-1;
  var bundled=!legacy&&["core","advanced","max"].indexOf(edKey)>-1&&CRMISH;
  if(s.np&&CRMISH){
    if(has("donors"))    inc.push("Fundraising & donation tracking");
    if(has("programs"))  inc.push("Programme & case management");
    if(has("volunteers"))inc.push("Volunteer coordination");
    if(has("members"))   inc.push("Membership records");
    if(has("grants_in")) inc.push("Grants received & funder reporting");
    if(has("events"))    inc.push("Event registration (basic)");
  }else if(CRMISH){
    if(has("leads"))  inc.push("Lead & opportunity pipeline");
    if(has("support"))inc.push("Case management & knowledge");
    if(has("events")) inc.push("Campaign & event tracking");
  }
  inc.push("Standard reports and dashboards");
  inc.push("Mobile app");
  if(bundled)inc.push("Slack, Tableau Next, Premier Success & Agentforce (bundled in this edition)");

  /* ---- 3. external people ---- */
  var pIt=portalItem(s,prodKey,edKey,legacy);
  if(pIt){
    items.push(pIt);
  }else{
    excl.push({l:"Experience Cloud portal",why:"You said nobody outside your organisation needs to log in, so you do not need external licences at all."});
  }

  /* ---- 4. add-ons, each justified ---- */
  function add(key,qty,why){var a=D.addon[key];items.push({k:key,l:a.l,sub:a.sub,why:why,qty:qty,
    unit:a.org?"org":"users",list:a.list,bench:a.bench,org:!!a.org});}

  if(has("email")&&prodKey!=="mkt")add("mcae",1,"Salesforce's built-in email is for one-off internal sends. Real campaigns, newsletters and automated journeys need Account Engagement, which is licensed per organisation rather than per user.");
  else excl.push({l:"Marketing automation",why:"You did not ask for campaigns, so the basic built-in email is enough."});

  if(has("reports")&&bundled){
    inc.push("Tableau Next analytics (bundled in this edition)");
    excl.push({l:"Separate Tableau licences",why:"Your edition already bundles Tableau Next for analytics. Add Tableau Cloud licences only if you later need to blend in large outside data sources."});
  }else if(has("reports")&&s.users>=20){
    add("tcre",Math.max(1,Math.round(s.users*0.05)),"A small number of people actually build dashboards. These are your authors.");
    add("texp",Math.max(1,Math.round(s.users*0.2)),"Managers who need to slice and filter the data themselves.");
    add("tvie",Math.max(1,Math.round(s.users*0.5)),"Everyone else just reads. Viewer licences are a fraction of the cost.");
  }else if(has("reports")){
    excl.push({l:"Tableau",why:"At "+s.users+" users, Salesforce's own reports and dashboards will cover board-level reporting. Tableau starts to earn its cost past roughly 20 users or when you are blending in outside data."});
  }else{
    excl.push({l:"Tableau",why:"Standard reports and dashboards are included. You do not need a separate BI tool."});
  }

  if(has("phone"))add("scv",Math.max(3,Math.round(s.users*0.4)),"Only the people who actually take calls need a voice licence, not your whole team.");
  if(has("ai")&&bundled)inc.push("Agentforce with "+({core:"500K",advanced:"1M",max:"2.75M"}[edKey])+" Flex Credits a year (bundled in this edition, no separate AI add-on needed)");
  else if(has("ai"))add("agent",Math.max(2,Math.round(s.users*0.3)),"Start with the team that will use AI daily. Agentforce is per user, so rolling it out to everyone on day one is an expensive way to run a pilot.");
  else excl.push({l:"Agentforce / AI",why:"You did not select AI. The new editions include a Flex Credit allowance anyway, so you can trial it later without a new licence."});
  if(has("quotes"))add("rev",Math.max(1,Math.round(s.users*0.6)),"Only the people who build quotes need Revenue Cloud.");
  if(has("field"))add("field",Math.max(1,Math.round(s.users*0.4)),"Licensed for dispatchers and mobile technicians, not office staff.");

  if(s.systems==="ent")add("mule",1,"You described complex, bidirectional enterprise integration. That is MuleSoft's territory, but note the $50,000 annual floor before you commit.");
  else if(s.systems!=="none")excl.push({l:"MuleSoft",why:"You need "+(s.systems==="few"?"a couple of":"several")+" integrations, but standard REST or a lighter iPaaS tool will handle them. MuleSoft carries a $50,000 annual minimum that is very hard to justify at this scale."});

  /* ---- 5. sandboxes ---- */
  var band = (function(){
    var p=s.needs.length;
    p+= s.uniq==="unique"?4 : s.uniq==="some"?2 : 0;
    /* migration, integrations and portal are costed as their own lines,
       so they no longer inflate the core build band */
    /* team size scales hours separately (sizeFactor), not the band */
    p+= D.prod[prodKey].ind?3:0;
    p+= s.systems==="ent"?2:0;
    p+= has("commerce")?6:0;
    p+= has("apps")?2:0;
    return p<=3?"quick":p<=7?"std":p<=11?"mid":"ent";
  })();
  var sandKey = (band==="quick"||band==="std")?"none":(band==="mid"?"partial":"full");
  var sl=sandboxLine(sandKey,sandboxEnt(prodKey,edKey,legacy));
  if(sl.item)items.push(sl.item); if(sl.inc)inc.push(sl.inc);

  /* ---- 6. success plan ---- */
  if(legacy)items.push({k:"prem",l:"Premier Success Plan",
    why:"On legacy editions Premier costs 30% of your net licence fees. On the new Core/Advanced/Max tiers it is bundled free, worth comparing before you renew.",pct:D.succ.premier});

  /* ---- 7. support tier ---- */
  var sup={none:"none","pt":"block",dedicated:"none",it:"none",nobody:"ms"}[s.runner]||"block";
  var supWhy={
    nobody:"You said nobody will own the system day to day. Without an owner a Salesforce org degrades fast, so we have costed a managed service.",
    pt:"A part-time internal owner covers routine admin. A block of hours gives them somewhere to turn for the harder changes.",
    dedicated:"You have a dedicated admin, so no ongoing external support is costed.",
    it:"Your IT team can run it, so no ongoing external support is costed."
  }[s.runner]||"";

  return {items:items,excluded:excl,included:inc,band:band,sand:sandKey,
          support:sup,supportWhy:supWhy,edKey:edKey,edLabel:edObj.l,prod:D.prod[prodKey].l,prodKey:prodKey,recProd:recProd,recEd:recEd,bundled:bundled,pou:pouOn,legacy:legacy,score:sc};
}

/* ---------------- costing ---------------- */
function price(rec,s,mode){
  var rows=[],net=0;
  rec.items.forEach(function(it){
    if(it.pct!=null)return;
    var r = mode==="list"?it.list:it.bench;
    var v = (it.org?1:it.qty)*r*12;
    net+=v;
    rows.push({l:it.l,q:it.org?1:it.qty,r:r,v:v,free:it.free});
  });
  var extra=0;
  rec.items.forEach(function(it){
    if(it.pct==null)return;
    var v=net*it.pct; extra+=v;
    rows.push({l:it.l+" ("+Math.round(it.pct*100)+"% of licences)",q:"n/a",r:"n/a",v:v});
  });
  return {rows:rows,net:net,total:net+extra};
}
/* build hours: band base x team-size factor; training scales with users */
function sizeFactor(u){return u<=10?0.8:u<=50?1:u<=150?1.4:1.8;}
function buildHours(rec,s){return Math.round((D.bands[rec.band].h||0)*sizeFactor(s.users)/10)*10;}
function trainHours(s){return s.train?Math.round(Math.min(120,30+s.users*0.6)):0;}
function services(rec,s){
  var b=D.bands[rec.band], rate=D.delivery[s.rate].r, tl=D.timeline[s.tl], H=D.hrs;
  var sysCfg=s.intN!=null?{n:s.intN,t:s.intT}:(D.systems[s.systems]||{n:0,t:"std"});
  var hBuild=buildHours(rec,s), hMig=H.mig[s.datanow]||0, hInt=sysCfg.n*H.integ[sysCfg.t],
      hPortal=(s.ext!=="none"&&s.extn>0)?H.portal[s.ext]:0, hTrain=trainHours(s);
  var row=function(l,h){return {l:l+(h?", "+h.toLocaleString()+" hrs":""),v:h*rate*tl.m,h:h};};
  var rows=[
    row(b.l+" implementation ("+b.d+")",hBuild),
    row("Data migration, "+(D.mig[s.datanow]||{l:"none"}).l,hMig),
    row("Integrations, "+sysCfg.n+" × "+(sysCfg.t==="ent"?"enterprise":"standard"),hInt),
    row("Experience Cloud portal build",hPortal),
    row("Training & enablement",hTrain)];
  var sub=rows.reduce(function(a,r){return a+r.v;},0), hrsTot=hBuild+hMig+hInt+hPortal+hTrain;
  var cont=sub*0.15;
  var supH=H.support[rec.support]||0, supM=supH*rate;
  var live=Math.max(0,12-tl.go), sup=supM*live;
  rows.push({l:"Contingency @ 15%, scope always moves",v:cont});
  rows.push({l:"Support, "+live+" months × "+supH+" hrs/mo ("+D.support[rec.support].l+")",v:sup});
  rows[0].l+=" @ "+fmt(rate)+"/hr"+(tl.m!==1?" · timeline ×"+tl.m:"");
  return {rows:rows,total:sub+cont+sup,impl:sub+cont,supM:supM,band:b,live:live,hrs:hrsTot};
}



/* ---------------- express mode: "I know what I need" ---------------- */
var XDEF={tcre:1,texp:5,tvie:10,scv:5,agent:5,rev:5,field:5};
function xorg(){return $("input[name=xorg]:checked").value;}
function buildX(){
  var o=xorg(), cp=$("#x-prod").value, ce=$("#x-ed").value, leg=$("#x-fam").value==="legacy";
  $("#x-prod").innerHTML=Object.keys(D.prod).filter(function(k){return D.prod[k].org.indexOf(o)>-1;}).map(function(k){
    return '<option value="'+k+'">'+D.prod[k].l+'</option>';}).join("");
  if(cp&&$("#x-prod").querySelector('[value="'+cp+'"]'))$("#x-prod").value=cp;
  var P=D.prod[$("#x-prod").value], t=P.ed[leg?"legacy":"new"];
  $("#x-ed").innerHTML=Object.keys(t).map(function(k){var E=t[k];
    return '<option value="'+k+'">'+E.l+(P.unit==="gmv"?"":" ("+fmt(E.r)+(P.unit==="org"?"/org/mo":"/user/mo")+" list)")+'</option>';}).join("");
  if(ce&&$("#x-ed").querySelector('[value="'+ce+'"]'))$("#x-ed").value=ce;
  else if($("#x-ed").querySelector('[value="core"]'))$("#x-ed").value="core";
  var pk=$("#x-prod").value;
  $("#x-pou-wrap").style.display=o==="np"?"":"none";
  $("#x-users-hint").style.display=(pk==="npc"&&$("#x-pou").checked)?"":"none";
  $("#x-gmv-wrap").hidden=P.unit!=="gmv";
}
function buildXAddons(){
  $("#x-addons").innerHTML=Object.keys(D.addon).map(function(k){var a=D.addon[k];
    return '<div class="ce-addon" data-k="'+k+'"><label><input type="checkbox" data-a="'+k+'"><span>'+a.l+'<small>'+a.sub+' &middot; '+fmt(a.list)+(a.org?'/org':'/user')+'/mo list</small></span></label>'+
      (a.org?'<span class="org">per org</span>':'<input type="number" min="1" value="'+(XDEF[k]||1)+'" data-q="'+k+'" aria-label="'+a.l+' users" disabled>')+'</div>';}).join("");
}
function SX(){
  var o=xorg(), np=o==="np", portal=$("#x-portal").value, add={}, pk=$("#x-prod").value;
  $$("#x-addons input[data-a]:checked").forEach(function(c){var k=c.dataset.a,q=$('#x-addons [data-q="'+k+'"]');add[k]=q?Math.max(1,+q.value||1):1;});
  return {express:true,org:o,np:np,pou:np&&pk==="npc"&&$("#x-pou").checked,users:Math.max(1,+$("#x-users").value||1),needs:[],
    prod:pk,fam:$("#x-fam").value,edKey:$("#x-ed").value,gmv:+$("#x-gmv").value||0,
    ext:portal==="none"?"none":(portal==="login"?"occasional":"regular"),extn:+$("#x-portaln").value||0,extwho:$("#x-ptype").value,
    add:add,sand:$("#x-sand").value,band:$("#x-band").value,datanow:$("#x-mig").value,
    intN:Math.max(0,+$("#x-intn").value||0),intT:$("#x-intt").value,systems:"custom",
    supKey:$("#x-sup").value,runner:"",uniq:"",tl:$("#x-tl").value,train:$("#xtr-y").checked,rate:$("#x-rate").value};
}
function recommendX(s){
  var legacy=s.fam==="legacy", P=D.prod[s.prod], t=P.ed[legacy?"legacy":"new"], ek=t[s.edKey]?s.edKey:Object.keys(t)[0];
  var items=[], inc=["Standard reports and dashboards","Mobile app"];
  var core=coreItem(s.prod,ek,s,legacy); core.why="Your selection."+(s.pou?" "+core.qty+" billable users after 10 donated licences.":"");
  items.push(core);
  if(s.pou)items.push({k:"pou",l:"Power of Us donation",why:"10 donated licences for registered nonprofits.",qty:10,unit:"users",list:0,bench:0,free:true});
  var pIt=portalItem(s,s.prod,ek,legacy); if(pIt){pIt.why="Your selection. "+pIt.why.split(". ").slice(1).join(". ");items.push(pIt);}
  Object.keys(s.add).forEach(function(k){var a=D.addon[k];
    items.push({k:k,l:a.l,sub:a.sub,why:"Your selection.",qty:s.add[k],unit:a.org?"org":"users",list:a.list,bench:a.bench,org:!!a.org});});
  var sl=sandboxLine(s.sand,sandboxEnt(s.prod,ek,legacy)); if(sl.item)items.push(sl.item); if(sl.inc)inc.push(sl.inc);
  if(legacy)items.push({k:"prem",l:"Premier Success Plan",why:"On legacy editions Premier is 30% of net licence fees. It is bundled in Core / Advanced / Max.",pct:D.succ.premier});
  var bundled=!legacy&&["core","advanced","max"].indexOf(ek)>-1;
  if(bundled)inc.push("Slack, Tableau Next, Premier Success & Agentforce (bundled in this edition)");
  return {items:items,excluded:[],included:inc,band:s.band,sand:s.sand,support:s.supKey,supportWhy:"",
          edKey:ek,edLabel:t[ek].l,prod:P.l,prodKey:s.prod,recProd:s.prod,recEd:ek,bundled:bundled,pou:s.pou,legacy:legacy,score:0};
}

/* ---------------- stage 2: services ---------------- */
function serviceCards(rec,s){
  var has=function(x){return s.needs.indexOf(x)>-1;};
  var b=D.bands[rec.band], tl=D.timeline[s.tl], cards=[];
  var bandWhy={
    quick:"Your needs are close to what Salesforce does out of the box, so this is mostly configuration: set-up, page layouts, a few automations and user access.",
    std:"A single cloud with some tailoring: custom fields and objects, automation for your key processes, reports and permissions set up around how your team works.",
    mid:"Several moving parts at once: a custom data model, automation across teams, integrations and testing in a sandbox before anything reaches your users.",
    ent:"A multi-part programme: complex data model, several integrations, portal work and phased releases, run with proper testing and change control."
  }[rec.band];
  if(rec.band!=="none")cards.push({c:"svc",l:"Salesforce implementation",m:b.l+" build · about "+buildHours(rec,s).toLocaleString()+" hours · "+b.d,
    why:bandWhy+" Your timeline: "+tl.l+(s.tl==="fast"?" (compressed, which raises cost).":"."),
    link:["/case-studies","See projects like this"]});
  if(s.datanow==="sheets")cards.push({c:"svc",l:"Data migration from spreadsheets",m:"Clean, map and import",
    why:"We clean and de-duplicate your spreadsheets, map every column to the right Salesforce field and load it with related records correctly linked. Our free Smart Lookup Data Loader app makes repeat imports easy afterwards.",
    link:["/products/smart-lookup-data-loader","About Smart Lookup Data Loader"]});
  else if(s.datanow==="crm")cards.push({c:"svc",l:"Data migration from your current CRM",m:"Extract, de-duplicate, map, validate",
    why:"Moving from another CRM means extracting the data, de-duplicating it, mapping it to Salesforce's structure and checking every record count before cut-over."});
  else if(s.datanow==="many")cards.push({c:"svc",l:"Data consolidation from several systems",m:"Multi-source migration",
    why:"Merging several systems is the hardest kind of migration: matching the same person or company across sources, deciding which record wins and keeping history intact."});
  var sys=s.intN!=null?{n:s.intN,t:s.intT}:D.systems[s.systems];
  if(sys&&sys.n>0)cards.push({c:"svc",l:"Integrations",m:sys.n+" × "+(sys.t==="ent"?"enterprise (MuleSoft)":"standard (REST / iPaaS)"),
    why:sys.t==="ent"?"Complex, two-way integrations between many systems need an integration platform and careful error handling.":"Connecting your accounting, website or payments tool so data flows in without re-typing."});
  if(s.ext!=="none"&&s.extn>0)cards.push({c:"svc",l:"Experience Cloud portal build",m:"Branded self-service site",
    why:"A secure site where your "+s.extwho+" can log in, update their details and see what matters to them, with the right access rules behind it."});
  if(rec.items.some(function(i){return i.k==="tcre";}))cards.push({c:"svc",l:"Tableau dashboards",m:"Design, build and publish",
    why:"We connect Tableau to your Salesforce data and build the dashboards your leadership reviews every week.",
    link:["/services/tableau","See a live Tableau dashboard"]});
  if(rec.items.some(function(i){return i.gmv;}))cards.push({c:"svc",l:"Commerce storefront build",m:"Storefront, catalogue, checkout, integrations",
    why:"Setting up your online store: catalogue and pricing, checkout and payments, order flow into Salesforce and your fulfilment systems. Commerce projects are among the larger builds, so we size them carefully."});
  if(rec.prodKey==="platform"||s.needs.indexOf("apps")>-1)cards.push({c:"svc",l:"Custom app development",m:"Data model, screens, automation",
    why:"Designing the data model, building the screens (Lightning Web Components) and automating the process your app supports."});
  if(s.train)cards.push({c:"svc",l:"Training & enablement",m:"Admin + end-user sessions",
    why:"Hands-on sessions for your admin and your users, built around your own processes, plus short how-to guides they can come back to."});
  var sup=D.support[rec.support];
  var supH=D.hrs.support[rec.support]||0;
  cards.push({c:supH?"svc":"free",l:"Support after go-live",m:sup.l+(supH?" · "+supH+" hrs/month":""),why:rec.supportWhy||"Ongoing help once you are live."});
  if(rec.pou)cards.push({c:"free",l:"Power of Us application",m:"Free, handled by TwinStack",
    why:"We check your eligibility, submit the application and set up your 10 donated licences at no charge."});
  if(has("volunteers")||has("events")||has("members")||has("leads"))cards.push({c:"app",l:"Google Form Auto Sync",m:"Free TwinStack app",
    why:"If sign-ups or enquiries come in through Google Forms, this free app turns every response into a Salesforce record the moment it is submitted.",
    link:["/products/google-form-auto-sync","About Google Form Auto Sync"]}); if(has("volunteers")||has("events")||has("members")||has("leads"))cards.push({c:"app",l:"Smart Forms & Surveys",m:"Free TwinStack app", why:"Need a public sign-up, registration or enquiry form? Build it inside Salesforce with this free app, and every submission creates a record directly.", link:["/products/smart-forms-surveys","About Smart Forms & Surveys"]});
  if(s.users>=15||s.ext!=="none")cards.push({c:"app",l:"Who Sees What",m:"Free TwinStack app",
    why:"As your team grows, this free app shows exactly what any user can see and which rule granted it, so access reviews take minutes.",
    link:["/products/who-sees-what","About Who Sees What"]});
  return cards;
}
function card(it){
  return '<div class="ce-rec '+(it.c||"")+'"><h4>'+it.l+'</h4><span class="m">'+it.m+'</span><p>'+it.why+'</p>'+
    (it.link?'<a href="'+it.link[0]+'">'+it.link[1]+' &rarr;</a>':'')+'</div>';
}

/* ---------------- render ---------------- */
function render(){
  var X=MODE==="x", s=X?SX():S();
  CUR_USERS=s.users;
  if(!X&&!s.needs.length)return false;
  var rec=X?recommendX(s):recommend(s); REC=rec;
  var L=price(rec,s,"list"), B=price(rec,s,"bench"), SV=services(rec,s);
  var y1L=L.total+SV.total, y1B=B.total+SV.total;

  /* stage 1: cloud + edition pickers with recommendation marked */
  if(!X){
    var leg=s.fam==="legacy";
    $("#sel-prod").innerHTML=Object.keys(D.prod).filter(function(k){return D.prod[k].org.indexOf(s.org)>-1;}).map(function(k){
      return '<option value="'+k+'"'+(k===rec.prodKey?" selected":"")+'>'+D.prod[k].l+(k===rec.recProd?" (Recommended)":"")+'</option>';}).join("");
    var t=D.prod[rec.prodKey].ed[leg?"legacy":"new"], un=D.prod[rec.prodKey].unit;
    $("#sel-ed").innerHTML=Object.keys(t).map(function(k){var E=t[k];
      var pr=un==="gmv"?"":(", "+fmt(E.r)+(un==="org"?"/org/mo":"/user/mo"));
      return '<option value="'+k+'"'+(k===rec.edKey?" selected":"")+'>'+E.l+pr+(k===rec.recEd?" (Recommended)":"")+'</option>';}).join("");
  }
  $("#pickers").hidden=X;

  /* stage 1 */
  $("#plan-line").textContent=rec.prod+" · "+rec.edLabel+" · "+s.users+" staff user"+(s.users===1?"":"s")+
    (rec.pou?" · 10 donated licences":"");
  $("#rec-cards").innerHTML=rec.items.map(function(it){
    var meta = it.pct!=null ? Math.round(it.pct*100)+"% of licence spend"
      : (it.k==="core"&&it.qty===0) ? "0 billable, your free licences cover everyone"
      : (it.org?"1 org licence":it.qty.toLocaleString()+" "+it.unit)+(it.list?" · "+money(it.list)+"/mo list":" · included free");
    return card({c:it.free?"free":"",l:it.l+(it.sub?' <small style="font-weight:600;color:#64748b">('+it.sub+')</small>':''),m:meta,why:it.why});
  }).join("");
  $("#inc-list").innerHTML=rec.included.map(function(x){return "<li>"+CHECK+x+"</li>";}).join("");
  $("#exc-list").innerHTML=rec.excluded.length?rec.excluded.map(function(x){
    return '<div class="ce-exc"><b>'+x.l+'</b><span>'+x.why+'</span></div>';}).join("")
    :'<p class="ce-hint">Everything you selected needs a licence, nothing to strip out.</p>';

  /* stage 2 */
  $("#rs1-title").textContent=X?"Your selected Salesforce":"Your recommended Salesforce";
  $("#rs1-sub").textContent=X?"The licences you picked, priced at list and at our observed benchmark rates.":"Based on your answers, this is the setup we would start from, with the reason for every line.";
  $("#adjust").hidden=X;
  $("#svc-line").textContent=(rec.band==="none"?"No implementation":D.bands[rec.band].l+" implementation · "+D.bands[rec.band].d+" of build")+" · go-live target "+D.timeline[s.tl].l+" · "+D.delivery[s.rate].l+" delivery";
  $("#svc-cards").innerHTML=serviceCards(rec,s).map(card).join("");

  /* stage 3 */
  $("#r-teaser").textContent=fmt(rnd(L.total))+" / year";
  $("#r-list").textContent=fmt(rnd(y1L));
  $("#r-listr").textContent="Range "+fmt(rnd(y1L*0.85))+" – "+fmt(rnd(y1L*1.2));
  $("#r-bench").textContent=fmt(rnd(y1B));
  $("#r-benchr").textContent="Range "+fmt(rnd(y1B*0.85))+" – "+fmt(rnd(y1B*1.2));
  var gap=Math.max(0,y1L-y1B);
  $("#r-gap").textContent=gap>0?fmt(rnd(gap)):"$0";
  $("#r-gapr").textContent=gap>0?"what negotiating to benchmark is worth":"your licences are already free";

  $("#lic-rows").innerHTML=L.rows.map(function(row,i){
    var b=B.rows[i]||{v:0};
    return '<tr'+(row.free?' class="green"':'')+'><td>'+row.l+'</td><td class="n">'+
      (typeof row.q==="number"?row.q.toLocaleString():row.q)+'</td><td class="n">'+
      (typeof row.r==="number"?(row.r?money(row.r):"$0.00"):row.r)+'</td><td class="n">'+fmt(row.v)+'</td><td class="n">'+fmt(b.v)+'</td></tr>';
  }).join("")+'<tr class="tot"><td>Annual subscription</td><td></td><td></td><td class="n">'+fmt(L.total)+'</td><td class="n">'+fmt(B.total)+'</td></tr>';
  $("#imp-rows").innerHTML=SV.rows.filter(function(r){return r.v>0;}).map(function(r){
    return '<tr><td>'+r.l+'</td><td class="n">'+fmt(r.v)+'</td></tr>';}).join("")+
    '<tr class="tot"><td>First-year services</td><td class="n">'+fmt(SV.total)+'</td></tr>';
  var rows="",cum=0;
  for(var y=1;y<=3;y++){
    var sub=B.total*Math.pow(1+D.uplift,y-1), svc=(y===1)?SV.total:SV.supM*12;
    cum+=sub+svc;
    rows+='<tr><td>Year '+y+'</td><td class="n">'+fmt(sub)+'</td><td class="n">'+fmt(svc)+'</td><td class="n"><strong>'+fmt(sub+svc)+'</strong></td></tr>';
  }
  $("#tco-rows").innerHTML=rows+'<tr class="tot"><td>3-year TCO (benchmark rates, '+Math.round(D.uplift*100)+'% yearly uplift)</td><td></td><td></td><td class="n">'+fmt(cum)+'</td></tr>';

  var f=[];
  if(rec.supportWhy)f.push(rec.supportWhy);
  if(s.ext==="occasional"&&s.extn>500)f.push("With <strong>"+s.extn.toLocaleString()+" logins a month</strong> your portal is a major line. Legacy nonprofit login rates on our contracts run $0.32–$1.25; the current published rate is <strong>$4.00</strong>. If you are quoted legacy rates, model the renewal before you sign.");
  if(rec.items.some(function(i){return i.k==="mule";}))f.push("MuleSoft carries a <strong>$50,000 minimum annual commitment</strong> regardless of the advertised entry price. Price lighter iPaaS options first.");
  if(rec.items.some(function(i){return ["tcre","texp","tvie","data"].indexOf(i.k)>-1;}))f.push("Tableau and Data Cloud include <strong>usage-based components that bill monthly in arrears</strong>. They will not appear on your annual PO, so budget for overage separately.");
  if(rec.bundled)f.push("Premier Success, Slack and Tableau Next are <strong>bundled</strong> into this edition. If a quote adds them as separate lines, push back.");
  if(rec.pou)f.push("Power of Us covers your first 10 licences, roughly <strong>"+fmt(70*10*12)+"/year</strong> of donated value at list. We run the application for you at no charge.");
  if(rec.items.some(function(i){return i.gmv;}))f.push("Commerce Cloud is priced as a <strong>share of online sales (GMV)</strong>. Salesforce publishes 1% (B2B Growth) and 2% (B2B Advanced); B2C is quote-based. Your cost rises with your online revenue, so negotiate a cap or a declining rate.");
  if(rec.items.some(function(i){return i.k==="core";})&&D.prod[rec.prodKey].ind)f.push("Industry cloud prices under the new Core / Advanced / Max lineup are due later in fall 2026. We show current published industry prices.");
  var licB=B.total, ratio=licB>0?SV.impl/licB:0, onR=ratio*175/D.delivery[s.rate].r;
  if(licB>0&&SV.impl>0)f.push("Cross-check: implementation is <strong>"+ratio.toFixed(1)+"×</strong> your annual licence cost at "+fmt(D.delivery[s.rate].r)+"/hr"+
    (s.rate!=="on"?" (about "+onR.toFixed(1)+"× at typical onshore rates of $175/hr)":"")+". A common rule of thumb is 1.5–3× at onshore rates."+
    (rec.pou?" Donated nonprofit licences make this ratio look high, because the rule assumes every licence is paid for.":"")+
    (onR>3.5&&!rec.pou?" Yours is above it mainly because of the "+[SV.rows[2].v?"integrations":"",SV.rows[3].v?"portal":"",SV.rows[1].v?"data migration":""].filter(Boolean).join(", ").replace(/, ([^,]*)$/," and $1")+" in scope; a scoping call usually trims this.":""));
  var coreIt=rec.items.filter(function(i){return i.k==="core";})[0];
  if(coreIt&&!rec.legacy&&["core","advanced","max"].indexOf(rec.edKey)>-1)f.push("There are no signed contracts on the new Core / Advanced / Max editions yet (launched 3 September 2026). For these, the benchmark column applies typical negotiated discounts for an organisation of your size ("+Math.round((1-benchFactor(s.np))*100)+"% off list), so treat it as indicative.");
  if(rec.bundled&&rec.items.some(function(i){return i.k==="agent";}))f.push("Agentforce is already <strong>bundled</strong> in Core, Advanced and Max (with Flex Credits). A separate Agentforce add-on on top is usually unnecessary.");
  if(rec.items.some(function(i){return i.k==="portal";})&&["starter","pro"].indexOf(rec.edKey)>-1)f.push("Experience Cloud portals need an Enterprise-level edition (Core or above). On Starter or Pro Suite you would need to upgrade before adding a portal.");
  if(s.tl==="fast")f.push("A <strong>3-month go-live</strong> carries a 25% compression premium in this estimate. Moving to 4–6 months usually removes it.");
  if(s.uniq==="unique")f.push("You described your processes as unusual. That is the biggest single driver of implementation cost, so it is worth asking whether each exception is a real requirement or just habit.");
  f.push("Implementation and services are estimated at "+D.delivery[s.rate].l+" rates ("+fmt(D.delivery[s.rate].r)+"/hr). Change the delivery model under “Fine-tune the assumptions” in step 1 of your results.");
  $("#flags").innerHTML='<div class="ce-note"><strong>Notes for your answers</strong><ul>'+f.map(function(x){return "<li>"+x+"</li>";}).join("")+'</ul></div>';
  LAST={s:s,rec:rec,L:L,B:B,SV:SV,y1L:y1L,y1B:y1B,cum:cum,flags:f,X:X};

  $("#w2l-desc").value=
    "SF Cost Estimator (twinstack.net/cost-estimator) | Mode: "+(X?"I know what I need":"Guided")+"\n"+
    "Org: "+(s.np?"Nonprofit":"Business")+" | Power of Us: "+(rec.pou?"Yes":"No")+" | Staff users: "+s.users+"\n"+
    (X?"Selected: "+rec.prod+" "+rec.edLabel+" ("+s.fam+") | Add-ons: "+(Object.keys(s.add).map(function(k){return D.addon[k].l+" x"+s.add[k];}).join(", ")||"none")+" | Implementation: "+s.band+" | Integrations: "+s.intN+" "+s.intT+"\n":"Needs: "+s.needs.join(", ")+"\n")+
    "External access: "+s.ext+(s.ext!=="none"?" ("+s.extn+" "+s.extwho+")":"")+"\n"+
    "Data today: "+s.datanow+(X?"":" | Process fit: "+s.uniq+" | Systems to connect: "+s.systems+" | Owner: "+s.runner)+"\n"+
    "Go-live: "+s.tl+" | Training: "+(s.train?"yes":"no")+" | Lineup: "+s.fam+" | Delivery: "+s.rate+"\n--\n"+
    (X?"SELECTED: ":"RECOMMENDED: ")+rec.prod+" "+rec.edLabel+" | build: "+D.bands[rec.band].l+" | sandbox: "+rec.sand+" | support: "+rec.support+"\n"+
    "Licences: "+rec.items.map(function(i){return i.l+(i.qty?" x"+i.qty:"");}).join("; ")+"\n"+
    "Year 1 list: "+fmt(rnd(y1L))+" | Year 1 benchmark: "+fmt(rnd(y1B))+" | 3-yr TCO: "+fmt(cum);
  return true;
}

/* ---------------- wizard + stages ---------------- */
function go(n){
  STEP=n;
  $$(".ce-steps button").forEach(function(b){var k=+b.dataset.s;b.setAttribute("aria-selected",k===n);b.classList.toggle("done",k<n);});
  [1,2,3,4,5].forEach(function(i){$("#p"+i).hidden=(i!==n);});
  $("#results").hidden=true;
  $("#ce-progress").style.width=(n*20)+"%";
  scrollToCard();
}
function stage(n){
  $$(".ce-stagenav button").forEach(function(b){var k=+b.dataset.r;b.setAttribute("aria-selected",k===n);if(k<=n)b.classList.add("seen");});
  [1,2,3].forEach(function(i){$("#rs"+i).hidden=(i!==n);});
  var t=$("#results").getBoundingClientRect().top+window.pageYOffset-110;
  window.scrollTo({top:t,behavior:"smooth"});
}
function scrollToCard(){
  var t=$(".ce-card").getBoundingClientRect().top+window.pageYOffset-110;
  if(Math.abs(window.pageYOffset-t)>200)window.scrollTo({top:t,behavior:"smooth"});
}
function buildNeeds(){
  var o=org(), keep=$$("#needs input:checked").map(function(c){return c.dataset.n;});
  $("#needs").innerHTML=D.needs[o].map(function(n){
    return '<div class="ce-chip"><input type="checkbox" id="n-'+n.id+'" data-n="'+n.id+'"'+(keep.indexOf(n.id)>-1?" checked":"")+'>'+
      '<label for="n-'+n.id+'">'+n.t+'<small>'+n.d+'</small></label></div>';}).join("");
  $("#pou-wrap").style.display=o==="np"?"":"none";
  $("#ind-wrap").hidden=o==="np";
  syncNeed();
}
function syncNeed(){
  var n=$$("#needs input:checked").length;
  $("#needcount").textContent=n?(n+" selected"):"Pick at least one";
  var cm=$("#n-commerce"); $("#gmvq").hidden=!(cm&&cm.checked);
  $("#go3").disabled=n===0; $("#calcbtn").disabled=n===0;
  $$(".ce-steps button").forEach(function(b){if(+b.dataset.s>2)b.disabled=n===0;});
}
function fillAddonRef(){
  var el=$("#addon-ref"); if(!el)return;
  el.innerHTML=Object.keys(D.addon).map(function(k){var a=D.addon[k];
    return '<tr><td>'+a.l+'</td><td>'+(a.org?"per org / mo":"per user / mo")+'</td><td class="n">'+fmt(a.list)+'</td><td class="n">'+
      (a.bench<a.list?'<strong>'+money(a.bench)+'</strong> <span class="tag tag-a">Actual</span>':money(a.bench))+'</td></tr>';}).join("");
}
function unlock(){
  UNLOCKED=true;
  $("#rs3").classList.remove("ce-locked");
  $("#gate").hidden=true; $("#unlocked-msg").hidden=false;
  $("#r-teaser-note").textContent="Full breakdown unlocked below.";
}

/* ---------------- printable report (Print / save as PDF) ---------------- */
var LOGO_URL="https://res.cloudinary.com/du42kbmmn/image/upload/f_png,q_auto,w_240/v1769165197/Black_White_Minimalist_Professional_Initial_Logo_1_eoam8g.png";
function fullName(){var a=$("#first_name"),b=$("#last_name");return ((a?a.value:"")+" "+(b?b.value:"")).replace(/\s+/g," ").trim();}
function esc(t){return String(t).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
function buildReport(){
  if(!LAST)return null;
  var s=LAST.s, rec=LAST.rec, L=LAST.L, B=LAST.B, SV=LAST.SV;
  var now=new Date(), dstr=now.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"});
  var ref="TS-"+now.toISOString().slice(0,10).replace(/-/g,"")+"-"+String(Math.floor(1000+Math.random()*9000));
  var who=fullName(), org=$("#company")?$("#company").value.trim():"";
  if(org===who)org="";
  var prep=(who||org)?esc(who)+(who&&org?", ":"")+esc(org):"Prepared on request";
  var vdate=new Date(D.meta.updated+"T00:00:00").toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"});
  var r=function(n){return fmt(rnd(n));};
  var lic=L.rows.map(function(row,i){var b=B.rows[i]||{v:0};
    return '<tr'+(row.free?' class="free"':'')+'><td>'+row.l+'</td><td class="n">'+(typeof row.q==="number"?row.q.toLocaleString():row.q)+'</td><td class="n">'+
      (typeof row.r==="number"?money(row.r):row.r)+'</td><td class="n">'+fmt(row.v)+'</td><td class="n">'+fmt(b.v)+'</td></tr>';}).join("")+
    '<tr class="tot"><td colspan="3">Annual subscription</td><td class="n">'+fmt(L.total)+'</td><td class="n">'+fmt(B.total)+'</td></tr>';
  var svc=SV.rows.filter(function(x){return x.v>0;}).map(function(x){return '<tr><td>'+x.l+'</td><td class="n">'+fmt(x.v)+'</td></tr>';}).join("")+
    '<tr class="tot"><td>First-year services</td><td class="n">'+fmt(SV.total)+'</td></tr>';
  var tco="",cum=0;
  for(var y=1;y<=3;y++){var sub=B.total*Math.pow(1+D.uplift,y-1),sv=(y===1)?SV.total:SV.supM*12;cum+=sub+sv;
    tco+='<tr><td>Year '+y+'</td><td class="n">'+fmt(sub)+'</td><td class="n">'+fmt(sv)+'</td><td class="n">'+fmt(sub+sv)+'</td></tr>';}
  tco+='<tr class="tot"><td>Three-year total</td><td></td><td></td><td class="n">'+fmt(cum)+'</td></tr>';
  var inc=(rec.included||[]).slice(0,8).map(function(x){return '<li>'+x+'</li>';}).join("");
  var notes=LAST.flags.filter(function(x){return x.indexOf("Change the delivery model")<0;}).map(function(x){return '<li>'+x+'</li>';}).join("");
  var ass=[["Organisation",s.np?"Nonprofit"+(rec.pou?" (Power of Us applied)":""):"Business"],["Staff users",s.users.toLocaleString()],
    ["Pricing lineup",rec.legacy?"Legacy (Enterprise / Unlimited)":"New (Core / Advanced / Max)"],
    ["Delivery model",D.delivery[s.rate].l+" · "+fmt(D.delivery[s.rate].r)+"/hr"],["Go-live target",D.timeline[s.tl].l],
    ["Estimate type",LAST.X?"Selected by customer":"Recommended from answers"]];
  var html='<div class="rp">'+
   '<header class="rp-head"><div class="rp-brand"><img loading="lazy" id="rp-logo" src="'+LOGO_URL+'" alt="TwinStack Solutions" width="44" height="44" onerror="this.style.display=\'none\'">'+
     '<div><div class="rp-name">Twin<span>Stack</span> Solutions</div><div class="rp-tag">Salesforce Consulting Partner</div></div></div>'+
     '<div class="rp-meta"><div class="rp-doc">Salesforce Cost Estimate</div><div>'+dstr+'</div><div>Ref. '+ref+'</div></div></header>'+
   '<div class="rp-for"><span>Prepared for</span><b>'+prep+'</b></div>'+
   '<section class="rp-summary"><div class="rp-setup"><span>'+(LAST.X?"Selected setup":"Recommended setup")+'</span><b>'+esc(rec.prod)+' · '+esc(rec.edLabel)+'</b><em>'+s.users.toLocaleString()+' staff user'+(s.users===1?"":"s")+(rec.pou?" · 10 donated licences":"")+' · '+D.bands[rec.band].l+' implementation</em></div>'+
     '<div class="rp-figs"><div><span>Year 1 at list price</span><b>'+r(LAST.y1L)+'</b><em>'+r(LAST.y1L*0.85)+' – '+r(LAST.y1L*1.2)+'</em></div>'+
     '<div class="hi"><span>Year 1, TwinStack benchmark</span><b>'+r(LAST.y1B)+'</b><em>'+r(LAST.y1B*0.85)+' – '+r(LAST.y1B*1.2)+'</em></div>'+
     '<div><span>Three-year total (benchmark)</span><b>'+r(cum)+'</b><em>incl. '+Math.round(D.uplift*100)+'% yearly uplift</em></div></div></section>'+
   '<section class="rp-sec"><h2><i>1</i>Salesforce subscription, year 1</h2><table><thead><tr><th>Line item</th><th class="n">Qty</th><th class="n">Rate / mo</th><th class="n">List / yr</th><th class="n">Benchmark / yr</th></tr></thead><tbody>'+lic+'</tbody></table>'+
     (inc?'<div class="rp-inc"><span>Included at no extra licence cost</span><ul>'+inc+'</ul></div>':'')+'</section>'+
   '<section class="rp-sec"><h2><i>2</i>Implementation &amp; first-year services</h2><table><thead><tr><th>Line item</th><th class="n">Estimate</th></tr></thead><tbody>'+svc+'</tbody></table></section>'+
   '<section class="rp-sec"><h2><i>3</i>Three-year total cost of ownership</h2><table><thead><tr><th>Year</th><th class="n">Subscription</th><th class="n">Services &amp; support</th><th class="n">Total</th></tr></thead><tbody>'+tco+'</tbody></table></section>'+
   '<section class="rp-sec rp-two"><div><h2><i>4</i>Assumptions</h2><dl>'+ass.map(function(a){return '<dt>'+a[0]+'</dt><dd>'+esc(a[1])+'</dd>';}).join("")+'</dl></div>'+
     '<div><h2><i>5</i>Notes</h2><ul class="rp-notes">'+notes+'</ul></div></section>'+
   '<section class="rp-next"><div><b>Next step: a free 45-minute scoping call</b><span>We will refine this estimate against your real requirements and line-item any quote you already have.</span></div>'+
     '<div class="rp-contact">twinstack.net/cost-estimator<br>saiful@twinstack.net · +1 929 203 7060</div></section>'+
   '<footer class="rp-foot">Estimate only, not a quote. Salesforce list prices verified '+vdate+'; benchmark figures reflect negotiated rates observed on client contracts and market data. Actual pricing depends on negotiation, term, volume and region. Excludes sales tax. Ranges shown are −15% / +20%. © '+now.getFullYear()+' TwinStack Solutions, Dhaka, Bangladesh.</footer>'+
  '</div>';
  var el=$("#ce-report"); if(!el){el=document.createElement("div");el.id="ce-report";el.setAttribute("aria-hidden","true");document.body.appendChild(el);}
  el.innerHTML=html; return el;
}
function printReport(){
  if(!buildReport()){window.print();return;}
  document.body.classList.add("ce-print");
  var img=$("#rp-logo"), done=false;
  var go=function(){if(done)return;done=true;window.print();};
  if(img&&!img.complete){img.addEventListener("load",go);img.addEventListener("error",go);setTimeout(go,2500);}else go();
}
window.addEventListener("beforeprint",function(){if(UNLOCKED&&LAST&&!document.body.classList.contains("ce-print")){buildReport();document.body.classList.add("ce-print");}});
window.addEventListener("afterprint",function(){document.body.classList.remove("ce-print");});


/* ---------------- downloadable PDF estimate (jsPDF, loaded on demand) ---------------- */
var PDF_LIBS=[["https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js","https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"],
              ["https://cdn.jsdelivr.net/npm/jspdf-autotable@3.8.2/dist/jspdf.plugin.autotable.min.js","https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js"]];
function loadScript(urls){return new Promise(function(res,rej){var i=0;(function next(){if(i>=urls.length)return rej();
  var sc=document.createElement("script");sc.src=urls[i++];sc.async=true;sc.onload=function(){res();};sc.onerror=function(){sc.remove();next();};document.head.appendChild(sc);})();});}
var PDF_READY=null;
function pdfLibs(){if(window.jspdf&&window.jspdf.jsPDF&&window.jspdf.jsPDF.API.autoTable)return Promise.resolve();
  if(!PDF_READY)PDF_READY=loadScript(PDF_LIBS[0]).then(function(){return loadScript(PDF_LIBS[1]);});return PDF_READY;}
function logoData(){return new Promise(function(res){var img=new Image(),t=setTimeout(function(){res(null);},4000);img.crossOrigin="anonymous";
  img.onload=function(){clearTimeout(t);try{var c=document.createElement("canvas");c.width=img.naturalWidth;c.height=img.naturalHeight;c.getContext("2d").drawImage(img,0,0);res(c.toDataURL("image/png"));}catch(e){res(null);}};
  img.onerror=function(){clearTimeout(t);res(null);};img.src=LOGO_URL;});}
function plain(t){var d=document.createElement("div");d.innerHTML=t;return (d.textContent||"").replace(/[\u2018\u2019]/g,"'").replace(/[\u201C\u201D]/g,'"').replace(/\u2026/g,"...").replace(/\u2248/g,"~").replace(/\u2212/g,"-").replace(/[\u2192\u2713]/g,"").replace(/\s+/g," ").trim();}
function optText(sel){var e=$(sel);return e&&e.selectedOptions&&e.selectedOptions[0]?plain(e.selectedOptions[0].text):"";}
function answersList(){
  var s=LAST.s, rec=LAST.rec, A=[];
  if(!LAST.X){
    A.push(["Organisation type",s.np?"Nonprofit / charity":"Business"]);
    if(s.np)A.push(["Registered charity (Power of Us)",$("#pou-y").checked?"Yes":"No / not sure"]);
    else A.push(["Industry",optText("#industry")]);
    A.push(["Staff users",s.users.toLocaleString()]);
    A.push(["What the system should do",D.needs[s.org].filter(function(n){return s.needs.indexOf(n.id)>-1;}).map(function(n){return n.t;}).join(", ")]);
    if(s.needs.indexOf("commerce")>-1)A.push(["Online sales",optText("#cmtype")+", "+fmt(s.gmv)+" per year"]);
    A.push(["Outside users logging in",optText("#ext")+(s.ext!=="none"?" ("+s.extn.toLocaleString()+" "+optText("#extwho").toLowerCase()+")":"")]);
    A.push(["Where data lives today",optText("#datanow")]);
    A.push(["Systems to connect",optText("#systems")]);
    A.push(["How standard the processes are",plain($("input[name=uniq]:checked+label").textContent)]);
    A.push(["Who runs it after go-live",optText("#runner")]);
    A.push(["Go-live target",optText("#tl")]);
    A.push(["Team training",s.train?"Yes":"No"]);
    if(rec.prodKey!==rec.recProd)A.push(["Cloud chosen",rec.prod+" (our suggestion was "+D.prod[rec.recProd].l+")"]);
    A.push(["Pricing lineup",optText("#adj-fam")]);
  }else{
    A.push(["Organisation type",s.np?"Nonprofit":"Business"]);
    A.push(["Cloud",optText("#x-prod")]);
    A.push(["Pricing lineup",optText("#x-fam")]);
    A.push(["Edition",optText("#x-ed")]);
    A.push(["Staff users",s.users.toLocaleString()+(s.pou?" (Power of Us applied)":"")]);
    if(D.prod[s.prod].unit==="gmv")A.push(["Online sales per year",fmt(s.gmv)]);
    A.push(["Experience Cloud portal",optText("#x-portal")+(s.ext!=="none"?" ("+s.extn.toLocaleString()+")":"")]);
    var ad=Object.keys(s.add).map(function(k){return D.addon[k].l+(D.addon[k].org?"":" x"+s.add[k]);});
    A.push(["Add-ons",ad.length?ad.join(", "):"None"]);
    A.push(["Sandbox",optText("#x-sand")]);
    A.push(["Implementation size",optText("#x-band")]);
    A.push(["Data migration",optText("#x-mig")]);
    A.push(["Integrations",s.intN+" x "+optText("#x-intt")]);
    A.push(["Support after go-live",optText("#x-sup")]);
    A.push(["Go-live target",optText("#x-tl")]);
    A.push(["Team training",s.train?"Yes":"No"]);
  }
  A.push(["Delivery model",LAST.X?optText("#x-rate"):optText("#adj-rate")]);
  return A;
}
function downloadPDF(btn){
  if(!LAST)return;
  var label=btn.innerHTML; btn.disabled=true; btn.textContent="Preparing PDF...";
  Promise.all([pdfLibs(),logoData()]).then(function(r){ buildPDF(r[1]); })
  .catch(function(){ printReport(); })
  .then(function(){ btn.disabled=false; btn.innerHTML=label; });
}
function buildPDF(logo){
  var jsPDF=window.jspdf.jsPDF, doc=new jsPDF({unit:"pt",format:"a4"});
  var s=LAST.s, rec=LAST.rec, L=LAST.L, B=LAST.B, SV=LAST.SV, W=595.28, H=841.89, M=42;
  var NAVY=[52,52,83], BLUE=[2,132,199], INK=[15,23,42], MUTED=[100,116,139], LINE=[226,232,240], SOFT=[248,250,252];
  var now=new Date(), dstr=now.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"});
  var ref="TS-"+now.toISOString().slice(0,10).replace(/-/g,"")+"-"+String(Math.floor(1000+Math.random()*9000));
  var valid=new Date(now.getTime()+30*864e5).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"});
  var vdate=new Date(D.meta.updated+"T00:00:00").toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"});
  var who=fullName(), em=$("#email").value.trim(), org=$("#company").value.trim(); if(org===who)org="";
  var money0=function(n){return fmt(n);}, R=function(n){return fmt(rnd(n));};
  var TOP=96, BOT=64, y=TOP;
  function ensure(h){if(y+h>H-BOT){doc.addPage();y=TOP;}}
  function title(n,t){ensure(40);doc.setFillColor.apply(doc,BLUE);doc.circle(M+7,y+6,7,"F");doc.setTextColor(255);doc.setFont("helvetica","bold");doc.setFontSize(8);
    doc.text(String(n),M+7,y+8.8,{align:"center"});doc.setTextColor.apply(doc,INK);doc.setFontSize(11.5);doc.text(t,M+20,y+10);y+=20;}
  var tbl={theme:"plain",margin:{left:M,right:M,top:TOP,bottom:BOT},styles:{font:"helvetica",fontSize:8.4,cellPadding:{top:3.8,bottom:3.8,left:6,right:6},textColor:INK,lineColor:LINE,lineWidth:{bottom:.5}},
    headStyles:{fillColor:NAVY,textColor:255,fontStyle:"bold",fontSize:7.8,lineWidth:0},footStyles:{fillColor:[241,245,249],textColor:INK,fontStyle:"bold",lineWidth:0},
    alternateRowStyles:{fillColor:SOFT}};
  function table(o){doc.autoTable(Object.assign({},tbl,{startY:y},o));y=doc.lastAutoTable.finalY+16;}

  /* --- document info --- */
  doc.setFont("helvetica","bold");doc.setFontSize(7);doc.setTextColor.apply(doc,MUTED);
  doc.text("PREPARED FOR",M,y);doc.text("ESTIMATE DETAILS",W/2+10,y);y+=13;
  doc.setFontSize(10);doc.setTextColor.apply(doc,INK);doc.text(who||"Prospective client",M,y);
  doc.setFont("helvetica","normal");doc.setFontSize(8.6);doc.setTextColor.apply(doc,MUTED);
  var ly=y+13; if(org){doc.text(org,M,ly);ly+=12;} if(em){doc.text(em,M,ly);ly+=12;}
  var det=[["Reference",ref],["Date issued",dstr],["Valid until",valid],["Prices verified",vdate]];
  det.forEach(function(d,i){doc.setTextColor.apply(doc,MUTED);doc.text(d[0],W/2+10,y+i*12);doc.setTextColor.apply(doc,INK);doc.text(d[1],W-M,y+i*12,{align:"right"});});
  y=Math.max(ly,y+det.length*12)+12;

  /* --- summary band --- */
  doc.setFillColor.apply(doc,NAVY);doc.roundedRect(M,y,W-2*M,50,4,4,"F");
  doc.setFont("helvetica","bold");doc.setFontSize(7);doc.setTextColor(165,180,252);doc.text(LAST.X?"SELECTED SETUP":"RECOMMENDED SETUP",M+14,y+15);
  doc.setFontSize(13);doc.setTextColor(255);doc.text(plain(rec.prod+" - "+rec.edLabel),M+14,y+31);
  doc.setFont("helvetica","normal");doc.setFontSize(8.4);doc.setTextColor(203,213,225);
  doc.text(s.users.toLocaleString()+" staff user"+(s.users===1?"":"s")+(rec.pou?" | 10 donated licences":"")+" | "+D.bands[rec.band].l+" implementation | "+D.delivery[s.rate].l+" delivery",M+14,y+43);
  y+=58;
  var bw=(W-2*M-16)/3, figs=[["Year 1 at list price",money0(L.total+SV.total),R(LAST.y1L*.85)+" - "+R(LAST.y1L*1.2),false],
    ["Year 1, TwinStack benchmark",money0(B.total+SV.total),R(LAST.y1B*.85)+" - "+R(LAST.y1B*1.2),true],["Three-year total (benchmark)",money0(LAST.cum),"incl. "+Math.round(D.uplift*100)+"% yearly uplift",false]];
  figs.forEach(function(f,i){var x=M+i*(bw+8);doc.setDrawColor.apply(doc,f[3]?[186,230,253]:LINE);doc.setFillColor.apply(doc,f[3]?[240,249,255]:[255,255,255]);
    doc.roundedRect(x,y,bw,52,4,4,"FD");doc.setFont("helvetica","bold");doc.setFontSize(6.8);doc.setTextColor.apply(doc,MUTED);doc.text(f[0].toUpperCase(),x+10,y+14);
    doc.setFontSize(15);doc.setTextColor.apply(doc,f[3]?[3,105,161]:INK);doc.text(f[1],x+10,y+33);doc.setFont("helvetica","normal");doc.setFontSize(7.5);doc.setTextColor(148,163,184);doc.text(f[2],x+10,y+45);});
  y+=70;

  /* --- 1 answers --- */
  title(1,LAST.X?"Your selections":"Your answers");
  table({body:answersList(),columnStyles:{0:{cellWidth:175,textColor:MUTED},1:{fontStyle:"bold"}}});

  /* --- 2 licences --- */
  title(2,"Salesforce subscription, year 1");
  var lic=L.rows.map(function(row,i){var b=B.rows[i]||{v:0};return [plain(row.l),typeof row.q==="number"?row.q.toLocaleString():plain(row.q),typeof row.r==="number"?money(row.r):plain(row.r),money0(row.v),money0(b.v)];});
  table({head:[["Cloud / product","Qty","Unit / month","List / year","Benchmark / year"]],body:lic,foot:[["Annual subscription","","",money0(L.total),money0(B.total)]],
    columnStyles:{1:{halign:"right",cellWidth:48},2:{halign:"right",cellWidth:72},3:{halign:"right",cellWidth:78},4:{halign:"right",cellWidth:88}},
    didParseCell:function(d){if(d.section!=="body"&&d.column.index>0)d.cell.styles.halign="right";}});
  if(rec.included&&rec.included.length){ensure(30);doc.setFont("helvetica","bold");doc.setFontSize(8);doc.setTextColor.apply(doc,INK);doc.text("Included at no extra licence cost:",M,y-6);
    doc.setFont("helvetica","normal");doc.setTextColor.apply(doc,MUTED);var it=doc.splitTextToSize(rec.included.map(plain).join("  |  "),W-2*M);doc.text(it,M,y+6);y+=it.length*10+14;}

  /* --- 3 services --- */
  title(3,"Implementation and first-year services");
  var rate=D.delivery[s.rate].r, tm=D.timeline[s.tl].m;
  var sv=SV.rows.filter(function(x){return x.v>0;}).map(function(x){
    var name=plain(x.l).replace(/\s-\s[\d,]+ hrs.*$/,"").replace(/ \u2014 [\d,]+ hrs.*$/,"").replace(/ @ .*$/,"");
    var hrs=x.h?x.h.toLocaleString():"", rt=x.h?fmt(rate*tm)+"/hr":"";
    if(/^Contingency/.test(name)){name="Contingency (15%, scope always moves)";}
    if(/^Support/.test(name)){hrs=(SV.live*(D.hrs.support[rec.support]||0)).toLocaleString();rt=fmt(rate)+"/hr";name="Support after go-live ("+SV.live+" months, "+plain(D.support[rec.support].l)+")";}
    return [name,hrs,rt,money0(x.v)];});
  table({head:[["Service","Hours","Rate","Amount"]],body:sv,foot:[["First-year services","","",money0(SV.total)]],
    columnStyles:{1:{halign:"right",cellWidth:54},2:{halign:"right",cellWidth:70},3:{halign:"right",cellWidth:88}},
    didParseCell:function(d){if(d.section!=="body"&&d.column.index>0)d.cell.styles.halign="right";}});
  if(tm!==1){doc.setFontSize(7.5);doc.setTextColor.apply(doc,MUTED);doc.text("Rates include a "+Math.round((tm-1)*100)+"% adjustment for the "+plain(D.timeline[s.tl].l)+" timeline.",M,y-8);y+=4;}

  /* --- 4 TCO --- */
  title(4,"Three-year total cost of ownership");
  var tb=[],cum=0;for(var yy=1;yy<=3;yy++){var sub=B.total*Math.pow(1+D.uplift,yy-1),svv=(yy===1)?SV.total:SV.supM*12;cum+=sub+svv;tb.push(["Year "+yy,money0(sub),money0(svv),money0(sub+svv)]);}
  table({head:[["Year","Subscription (benchmark)","Services & support","Total"]],body:tb,foot:[["Three-year total","","",money0(cum)]],
    columnStyles:{1:{halign:"right"},2:{halign:"right"},3:{halign:"right",cellWidth:88}},didParseCell:function(d){if(d.section!=="body"&&d.column.index>0)d.cell.styles.halign="right";}});

  /* --- totals block (quotation style) --- */
  ensure(96);var tx=W-M-230;
  [["Year 1 Salesforce licences (benchmark)",B.total],["Year 1 services",SV.total]].forEach(function(r2,i){doc.setFont("helvetica","normal");doc.setFontSize(8.8);doc.setTextColor.apply(doc,MUTED);
    doc.text(r2[0],tx,y+i*15);doc.setTextColor.apply(doc,INK);doc.text(money0(r2[1]),W-M,y+i*15,{align:"right"});});
  y+=24;doc.setFillColor.apply(doc,NAVY);doc.rect(tx-8,y,238,22,"F");doc.setFont("helvetica","bold");doc.setFontSize(10);doc.setTextColor(255);
  doc.text("Year 1 total (benchmark)",tx,y+15);doc.text(money0(B.total+SV.total),W-M-6,y+15,{align:"right"});
  y+=32;doc.setFont("helvetica","normal");doc.setFontSize(8);doc.setTextColor.apply(doc,MUTED);doc.text("At list price: "+money0(L.total+SV.total)+"   |   Three-year total: "+money0(cum),W-M,y,{align:"right"});y+=24;

  /* --- 5 notes --- */
  var notes=LAST.flags.map(plain).filter(function(x){return x.indexOf("Change the delivery model")<0;});
  if(notes.length){title(5,"Notes for your estimate");doc.setFont("helvetica","normal");doc.setFontSize(8.4);
    notes.forEach(function(n){var ln=doc.splitTextToSize(n,W-2*M-12);ensure(ln.length*11+4);doc.setFillColor.apply(doc,BLUE);doc.circle(M+3,y-2.5,1.6,"F");
      doc.setTextColor(51,65,85);doc.text(ln,M+12,y);y+=ln.length*11+5;});y+=10;}

  /* --- terms + next step --- */
  ensure(110);doc.setDrawColor.apply(doc,[186,230,253]);doc.setFillColor(240,249,255);doc.roundedRect(M,y,W-2*M,46,4,4,"FD");
  doc.setFont("helvetica","bold");doc.setFontSize(9.5);doc.setTextColor.apply(doc,INK);doc.text("Next step: a free 45-minute scoping call",M+12,y+17);
  doc.setFont("helvetica","normal");doc.setFontSize(8.2);doc.setTextColor(71,85,105);doc.text("We will refine this estimate against your real requirements and line-item any quote you already have.",M+12,y+31);
  doc.setTextColor.apply(doc,BLUE);doc.setFont("helvetica","bold");doc.text("saiful@twinstack.net  |  +1 929 203 7060",W-M-12,y+17,{align:"right"});
  y+=62;doc.setFont("helvetica","bold");doc.setFontSize(8);doc.setTextColor.apply(doc,INK);doc.text("Terms",M,y);y+=11;
  doc.setFont("helvetica","normal");doc.setFontSize(7.6);doc.setTextColor.apply(doc,MUTED);
  var terms=doc.splitTextToSize("This document is an estimate, not a quotation or an offer to supply. Salesforce list prices were verified on "+vdate+"; benchmark figures reflect negotiated rates observed on client contracts and market data, and actual pricing depends on negotiation, term, volume and region. Services are estimated at the delivery rate shown. All amounts are in US dollars and exclude sales tax. Headline figures are shown with a range of -15% / +20%. Valid until "+valid+".",W-2*M);
  ensure(terms.length*9.5);doc.text(terms,M,y);

  /* --- header + footer on every page --- */
  var pages=doc.getNumberOfPages();
  for(var p=1;p<=pages;p++){doc.setPage(p);
    if(logo){try{doc.addImage(logo,"PNG",M,26,34,34);}catch(e){}}
    var nx=logo?M+44:M;doc.setFont("helvetica","bold");doc.setFontSize(15);doc.setTextColor.apply(doc,NAVY);doc.text("Twin",nx,44);
    var tw=doc.getTextWidth("Twin");doc.setTextColor.apply(doc,BLUE);doc.text("Stack",nx+tw,44);doc.setTextColor.apply(doc,NAVY);doc.text(" Solutions",nx+tw+doc.getTextWidth("Stack"),44);
    doc.setFont("helvetica","normal");doc.setFontSize(7.8);doc.setTextColor.apply(doc,MUTED);doc.text("Salesforce Consulting Partner  |  twinstack.net",nx,56);
    doc.setFont("helvetica","bold");doc.setFontSize(12);doc.setTextColor.apply(doc,INK);doc.text("SALESFORCE COST ESTIMATE",W-M,42,{align:"right"});
    doc.setFont("helvetica","normal");doc.setFontSize(8);doc.setTextColor.apply(doc,MUTED);doc.text(ref+"  |  "+dstr,W-M,55,{align:"right"});
    doc.setDrawColor.apply(doc,NAVY);doc.setLineWidth(1.6);doc.line(M,70,W-M,70);doc.setLineWidth(.5);
    doc.setDrawColor.apply(doc,LINE);doc.line(M,H-40,W-M,H-40);doc.setFontSize(7.2);doc.setTextColor(148,163,184);
    doc.text("TwinStack Solutions  |  Dhaka, Bangladesh  |  info@twinstack.net  |  Estimate only, not a quote",M,H-27);
    doc.text("Page "+p+" of "+pages,W-M,H-27,{align:"right"});}
  doc.save("TwinStack-Salesforce-Estimate-"+ref+".pdf");
}

function rerender(){if(!$("#results").hidden)render();}
function setMode(m,scroll){
  MODE=m;
  $$(".ce-mode").forEach(function(b){b.setAttribute("aria-pressed",b.dataset.mode===m);});
  $("#results").hidden=true;
  if(m==="x"){
    $(".ce-steps").hidden=true; $(".ce-bar").hidden=true;
    [1,2,3,4,5].forEach(function(i){$("#p"+i).hidden=true;});
    $("#px").hidden=false;
    if(scroll)scrollToCard();
  }else{
    $("#px").hidden=true; $(".ce-steps").hidden=false; $(".ce-bar").hidden=false;
    go(1);
  }
}
function restart(){if(MODE==="x")setMode("x",true);else go(1);}

document.addEventListener("DOMContentLoaded",function(){
  buildNeeds(); fillAddonRef();
  $$("input[name=org]").forEach(function(r){r.addEventListener("change",function(){OV={prod:"",ed:""};buildNeeds();});});
  $("#needs").addEventListener("change",syncNeed);
  $("#users").addEventListener("input",function(){$("#usersv").textContent=this.value;});
  $("#ext").addEventListener("change",function(){$("#extq").hidden=(this.value==="none");});
  $$("[data-go]").forEach(function(b){b.addEventListener("click",function(){go(+this.dataset.go);});});
  $$(".ce-steps button").forEach(function(b){b.addEventListener("click",function(){go(+this.dataset.s);});});
  $$("[data-r]").forEach(function(b){b.addEventListener("click",function(){stage(+this.dataset.r);});});
  $$("[data-restart]").forEach(function(b){b.addEventListener("click",restart);});
  /* express mode */
  buildX(); buildXAddons();
  $$("[data-mode]").forEach(function(b){b.addEventListener("click",function(e){
    var m=this.dataset.mode; if(this.tagName==="A"){e.preventDefault();}
    setMode(m,true);});});
  $$("input[name=xorg]").forEach(function(r){r.addEventListener("change",buildX);});
  $("#x-fam").addEventListener("change",buildX);
  $("#x-prod").addEventListener("change",buildX);
  $("#x-pou").addEventListener("change",buildX);
  $("#x-portal").addEventListener("change",function(){$("#x-portaln").disabled=this.value==="none";});
  $("#x-addons").addEventListener("change",function(e){var k=e.target.dataset.a; if(!k)return;
    var q=$('#x-addons [data-q="'+k+'"]'); if(q)q.disabled=!e.target.checked;
    e.target.closest(".ce-addon").classList.toggle("on",e.target.checked);});
  $("#xcalc").addEventListener("click",function(){
    render(); $("#px").hidden=true; $("#results").hidden=false; stage(3);
  });
  if(/^#(quick|quote|express)$/.test(location.hash))setMode("x",true);
  $("#calcbtn").addEventListener("click",function(){
    OV={prod:"",ed:""};
    if(!render())return;
    [1,2,3,4,5].forEach(function(i){$("#p"+i).hidden=true;});
    $$(".ce-steps button").forEach(function(b){b.setAttribute("aria-selected","false");b.classList.add("done");});
    $("#ce-progress").style.width="100%";
    $("#results").hidden=false; stage(1);
  });
  $("#adj-fam").addEventListener("change",function(){OV.ed="";rerender();});
  $("#adj-rate").addEventListener("change",rerender);
  $("#sel-prod").addEventListener("change",function(){OV.prod=this.value;OV.ed="";rerender();});
  $("#sel-ed").addEventListener("change",function(){OV.ed=this.value;rerender();});
  $("#industry").addEventListener("change",function(){OV={prod:"",ed:""};});
  $("#gmv").addEventListener("change",rerender);$("#cmtype").addEventListener("change",rerender);
  $("#printbtn").addEventListener("click",function(){downloadPDF(this);});

  function fieldErr(id,on){var e=$("#err-"+id);if(e)e.hidden=!on;var i=$("#"+id);if(i)i.setAttribute("aria-invalid",on?"true":"false");}
  var LEAD_FIELDS=["first_name","last_name","email","company","city","state"];
  LEAD_FIELDS.forEach(function(id){$("#"+id).addEventListener("input",function(){fieldErr(id,false);});});
  $("#leadform").addEventListener("submit",function(e){
    var bad=[];
    LEAD_FIELDS.forEach(function(id){
      var el=$("#"+id), v=el.value.replace(/\s+/g," ").trim(); el.value=v;
      var ok=id==="email"?/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v):v.length>=(id==="state"?2:1)&&!(id.indexOf("name")>-1&&v.length<1);
      fieldErr(id,!ok); if(!ok)bad.push(el);
    });
    if(bad.length){e.preventDefault();bad[0].focus();return;}
    render();
    /* form posts to the hidden iframe; unlock straight away, no waiting on Salesforce */
    setTimeout(function(){unlock();var t=$("#rs3").getBoundingClientRect().top+window.pageYOffset-110;window.scrollTo({top:t,behavior:"smooth"});},150);
  });

  $$("#pricing .tabs button").forEach(function(b){b.addEventListener("click",function(){
    $$("#pricing .tabs button").forEach(function(x){x.setAttribute("aria-selected","false");});
    this.setAttribute("aria-selected","true");
    $$("#pricing .tp").forEach(function(p){p.hidden=true;});
    $("#"+this.getAttribute("aria-controls")).hidden=false;});});

  var d=new Date(D.meta.updated+"T00:00:00").toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"});
  $$(".ce-verified").forEach(function(el){el.textContent=d;});
});

})();
    