(function(){var b=document.getElementById('sm-btn'),m=document.getElementById('sm-menu');
function set(o){m.hidden=!o;b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');b.innerHTML=o?'&#10005;':'&#9776;';}
b.addEventListener('click',function(e){e.stopPropagation();set(m.hidden);});
m.addEventListener('click',function(e){if(e.target.tagName==='A')set(false);});
document.addEventListener('click',function(e){if(!m.hidden&&!m.contains(e.target))set(false);});
document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false);});
window.addEventListener('resize',function(){if(window.innerWidth>1151)set(false);});})();
