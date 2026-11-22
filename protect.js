/* Light content protection. Contact details and form fields stay selectable. */
(function(){
var OK=['a[href^="mailto:"]','a[href^="tel:"]','a[href^="sms:"]','a[href*="wa.me"]','input','textarea','select','[contenteditable="true"]','.allow-copy'];
var sel=OK.join(',');
function el(t){return t&&t.nodeType===1?t:(t&&t.parentElement)||null}
function allowed(t){var e=el(t);return !!(e&&e.closest&&e.closest(sel))}
var css='body{-webkit-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none}'
+OK.map(function(s){return s+','+s+' *'}).join(',')+'{-webkit-user-select:text;user-select:text;-webkit-touch-callout:default}'
+'img,video{-webkit-user-drag:none;user-drag:none;-webkit-touch-callout:none}'
+'@media print{body{display:none!important}}';
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
document.addEventListener('contextmenu',function(e){if(!allowed(e.target))e.preventDefault()});
document.addEventListener('selectstart',function(e){if(!allowed(e.target))e.preventDefault()});
document.addEventListener('dragstart',function(e){if(!allowed(e.target))e.preventDefault()});
['copy','cut'].forEach(function(n){document.addEventListener(n,function(e){
 var a=document.activeElement;if(a&&/^(INPUT|TEXTAREA)$/.test(a.tagName))return;
 var s=window.getSelection&&window.getSelection();
 if(s&&s.rangeCount&&allowed(s.anchorNode)&&allowed(s.focusNode))return;
 e.preventDefault();})});
})();
