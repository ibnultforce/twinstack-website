(function(){var b=document.querySelectorAll('#key-projects .tsg-filters button'),c=document.querySelectorAll('#key-projects .tsg-card');
b.forEach(function(x){x.addEventListener('click',function(){var f=x.getAttribute('data-f');
b.forEach(function(y){y.setAttribute('aria-pressed',y===x?'true':'false');});
c.forEach(function(k){k.hidden=!(f==='all'||(' '+k.getAttribute('data-cat')+' ').indexOf(' '+f+' ')>-1);});});});})();
