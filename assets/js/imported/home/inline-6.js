(function(){var b=document.getElementById('ts-scrollbtn');if(!b)return;var up=false;
function set(){var h=document.documentElement,max=h.scrollHeight-window.innerHeight,u=window.scrollY>max/2;if(u===up)return;up=u;
b.classList.toggle('up',u);b.setAttribute('aria-label',u?'Scroll back to the top of the page':'Scroll to the bottom of the page');b.title=u?'Back to top':'Scroll to bottom';}
var rm=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
b.addEventListener('click',function(){window.scrollTo({top:up?0:document.documentElement.scrollHeight,behavior:rm?'auto':'smooth'});});
window.addEventListener('scroll',set,{passive:true});set();})();
