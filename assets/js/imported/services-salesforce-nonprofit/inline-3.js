(function(){var shown=Date.now();
if(location.search.indexOf('submitted=true')>-1){var ok=document.getElementById('np-ok');if(ok){ok.style.display='block';}var c=document.getElementById('contact');if(c)c.scrollIntoView();}
window.npSubmit=function(e){var f=document.getElementById('npForm');var hp=document.getElementById('np_hp');
if((hp&&hp.value.trim()!=='')||Date.now()-shown<4000){e.preventDefault();return false;}
f.action=atob('aHR0cHM6Ly93ZWJ0by5zYWxlc2ZvcmNlLmNvbS9zZXJ2bGV0L3NlcnZsZXQuV2ViVG9MZWFkP2VuY29kaW5nPVVURi04Jm9yZ0lkPTAwRGROMDAwMDByb0lMRQ==');
document.getElementById('np_ret').value=location.href.split('?')[0].split('#')[0]+'?submitted=true#contact';return true;};})();
