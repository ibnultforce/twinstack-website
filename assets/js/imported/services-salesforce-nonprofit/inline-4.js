(function(){var p=document.getElementById('np-player');if(!p)return;
function play(t){p.innerHTML='<iframe src="https://www.youtube-nocookie.com/embed/Z3Shyt4zLvM?autoplay=1&rel=0&start='+(t||0)+'" title="TwinStack: Salesforce Nonprofit Cloud partner" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>';}
var b=p.querySelector('button');if(b)b.addEventListener('click',function(){play(0);});
document.querySelectorAll('.np-ch button').forEach(function(x){x.addEventListener('click',function(){play(parseInt(x.getAttribute('data-t'),10));p.scrollIntoView({behavior:'smooth',block:'center'});});});})();
