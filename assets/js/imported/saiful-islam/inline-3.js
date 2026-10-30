(function(){
  var l=document.createElement('link');
  l.rel='stylesheet';
  l.href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap';
  l.media='print'; l.onload=function(){this.media='all'};
  document.head.appendChild(l);
})();

// Navbar scroll, exact same logic as index.html
(function(){
  var navbar = document.querySelector('.nav');
  if(!navbar) return;
  window.addEventListener('scroll', function(){
    if(window.scrollY > 50){
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, {passive:true});
})();

document.addEventListener('DOMContentLoaded',function(){
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);} });
  },{threshold:.12});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});

  var done=false;
  var sc=document.querySelector('.stats');
  var so=new IntersectionObserver(function(es){
    if(es[0].isIntersecting && !done){
      done=true;
      document.querySelectorAll('.num[data-count]').forEach(function(el){
        var target=+el.getAttribute('data-count'), cur=0, suffix=el.textContent.indexOf('+')>-1?'+':'';
        var step=Math.max(1,Math.round(target/60));
        var t=setInterval(function(){
          cur+=step; if(cur>=target){cur=target;clearInterval(t);}
          el.textContent=(target>1000?cur.toLocaleString():cur)+suffix;
        },20);
      });
    }
  },{threshold:.4});
  if(sc) so.observe(sc);
});
