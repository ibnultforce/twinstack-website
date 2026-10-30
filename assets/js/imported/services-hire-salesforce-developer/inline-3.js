(function(){var shown=Date.now();var ok=document.getElementById('sv-ok');
if(ok&&location.search.indexOf('submitted=true')>-1){ok.style.display='block';var f=document.getElementById('sv-form-wrap');if(f)f.scrollIntoView();}
window.svSubmit=function(e){var f=document.getElementById('svForm');var hp=document.getElementById('sv_hp');
if((hp&&hp.value.trim()!=='')||Date.now()-shown<4000){e.preventDefault();return false;}
f.action=atob('aHR0cHM6Ly93ZWJ0by5zYWxlc2ZvcmNlLmNvbS9zZXJ2bGV0L3NlcnZsZXQuV2ViVG9MZWFkP2VuY29kaW5nPVVURi04Jm9yZ0lkPTAwRGROMDAwMDByb0lMRQ==');
document.getElementById('sv_ret').value=location.href.split('?')[0].split('#')[0]+'?submitted=true';return true;};})();
