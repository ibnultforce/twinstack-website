var divElement = document.getElementById('viz1794902259675');
var vizElement = divElement.getElementsByTagName('object')[0];
var BASE_W = 1600, BASE_H = 1027;
function fitViz() {
  var card = divElement.parentNode;
  var cs = window.getComputedStyle(card);
  var avail = card.clientWidth - (parseFloat(cs.paddingLeft) || 0) - (parseFloat(cs.paddingRight) || 0);
  if (avail > 500) {
    var scale = Math.min(1, avail / BASE_W);
    divElement.style.width = BASE_W + 'px';
    divElement.style.height = BASE_H + 'px';
    divElement.style.margin = '0';
    divElement.style.transformOrigin = 'top left';
    divElement.style.transform = scale < 1 ? 'scale(' + scale + ')' : 'none';
    divElement.style.marginBottom = scale < 1 ? (-(BASE_H * (1 - scale))) + 'px' : '0';
    divElement.style.marginRight = scale < 1 ? (-(BASE_W * (1 - scale))) + 'px' : '0';
    vizElement.style.width = BASE_W + 'px';
    vizElement.style.height = BASE_H + 'px';
  } else {
    divElement.style.cssText = 'position: relative';
    vizElement.style.width = '100%';
    vizElement.style.height = '1877px';
  }
}
fitViz();
window.addEventListener('resize', fitViz);
var scriptElement = document.createElement('script');
scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
vizElement.parentNode.insertBefore(scriptElement, vizElement);
