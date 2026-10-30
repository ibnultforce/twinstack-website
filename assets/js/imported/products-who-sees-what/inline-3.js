(function(){document.querySelectorAll('.vd-player').forEach(function(p){var id=p.getAttribute('data-id'),t=p.getAttribute('data-title');
function play(s){p.innerHTML='<iframe src="https://www.youtube-nocookie.com/embed/'+id+'?autoplay=1&rel=0&start='+(s||0)+'" title="'+t+'" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>';}
var b=p.querySelector('button');if(b)b.addEventListener('click',function(){play(0);});
var sec=p.closest('section');if(sec)sec.querySelectorAll('.vd-list button[data-t]').forEach(function(x){x.addEventListener('click',function(){play(parseInt(x.getAttribute('data-t'),10));p.scrollIntoView({behavior:'smooth',block:'center'});});});});})();
