// Deep links into a blog filter, e.g. /blog#cost-estimator or /blog?filter=cost-estimator
(function(){
  var MAP={"cost-estimator":"cost","cost":"cost","pricing":"cost","guides":"guide","productivity":"productivity","integration":"integration","tips":"tips",
           "google-form-auto-sync":"gfas","gfas":"gfas","who-sees-what":"wsw","wsw":"wsw","smart-lookup-data-loader":"sldl","sldl":"sldl"};
  function apply(){
    var q=new URLSearchParams(location.search).get("filter")||location.hash.replace("#","");
    var c=MAP[(q||"").toLowerCase()]; if(!c)return;
    var btn=[].slice.call(document.querySelectorAll(".filter-btn")).filter(function(b){return (b.getAttribute("onclick")||"").indexOf("'"+c+"'")>-1;})[0];
    filterSelection(c,btn?{target:btn}:null);
    var g=document.getElementById("blog-grid"); if(g){var t=g.getBoundingClientRect().top+window.pageYOffset-220;window.scrollTo({top:Math.max(0,t),behavior:"smooth"});}
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",apply);else apply();
  window.addEventListener("hashchange",apply);
})();
