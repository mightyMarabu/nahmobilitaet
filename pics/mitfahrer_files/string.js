define("util/string",["module","jquery"],function(e,t){var a=/(.)/g,i=/([\.$?*|{}\(\)\[\]\\\/\+\^])/g,n=/<.[^<>]*?>/g,r=/ /,o=/&/g,s=[/(<|>|")/g,/(<|>|')/g,/(<|>|'|")/g],l={"<":"&lt;",">":"&gt;","'":"&#039;",'"':"&quot;"},d=function(e,t){return l[t]},c={config:t.extend(!0,{shrink:{length:50,ratio:1,cut:!0,spacer:"..."}},e.config()),reverse:function(e){var t="";return(e+"").replace(a,function(e){t=e+t}),t},escExpStr:function(e,t){return e.replace(i,function(e){return t&&-1!==t.indexOf(e)?e:"\\"+e})},stripTags:function(e){return e.replace(n," ")},htmlspecialchars:function(e,t){return e.replace(o,"&amp;").replace(s[t||0],d)},shrink:function(e,a){var i=t.extend({},c.config.shrink,isNaN(a)?a:{length:a}),n=e.length,o=i.length-i.spacer.length,s="";return n<=i.length?e:0===i.ratio?(s=e.substr(n-o,o),i.spacer+(i.cut||" "===e.charAt(n-o)?s:r.test(s)?s.substr(s.indexOf(" ")+1):"")):1===i.ratio?(s=e.substr(0,o),(i.cut||" "===e.charAt(n)?s:r.test(s)?s.substr(0,s.lastIndexOf(" ")):"")+i.spacer):(s=this.shrink(e,{length:Math.floor(o*i.ratio),ratio:1,cut:i.cut,spacer:""}),s+this.shrink(e,{length:i.length-s.length+i.spacer.length,ratio:0,cut:i.cut,spacer:i.spacer}))}};return c});
//@ sourceMappingURL=string.js.map