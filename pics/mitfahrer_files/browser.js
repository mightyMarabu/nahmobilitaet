define("util/browser",["jquery"],function(e){var t=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},a=function(e){var t=e.indexOf("MSIE ");if(t>0)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);var a=e.indexOf("Trident/");if(a>0){var i=e.indexOf("rv:");return parseInt(e.substring(i+3,e.indexOf(".",i)),10)}var n=e.indexOf("Edge/");return n>0?parseInt(e.substring(n+5,e.indexOf(".",n)),10):!1};if(!e.browser){var i=a(navigator.userAgent),n=t(navigator.userAgent),r={};i&&(n={browser:"msie",version:i}),n.browser&&(r[n.browser]=!0,r.version=n.version),r.chrome?r.webkit=!0:r.webkit&&(r.safari=!0),e.browser=r}});
//@ sourceMappingURL=browser.js.map