"use strict";(self.webpackChunksachinscnpdl_github_io=self.webpackChunksachinscnpdl_github_io||[]).push([[574],{574:(e,n,t)=>{t.d(n,{Ay:()=>Tn});var r=t(43);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}const l=["children","options"],a="0",c="1",o="2",s="3",u="4",p="5",d="6",f="7",h="8",m="9",g="10",y="11",k="12",x="13",v="14",b="15",w="16",$="17",E="18",C="19",z="20",A="21",O="22",S="23",T="24",R="25",L="26",M="27",_="28",I="29",j="30",N="31",U="32",H="33";var P,W;(W=P||(P={}))[W.MAX=0]="MAX",W[W.HIGH=1]="HIGH",W[W.MED=2]="MED",W[W.LOW=3]="LOW",W[W.MIN=4]="MIN";const F=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce(((e,n)=>(e[n.toLowerCase()]=n,e)),{for:"htmlFor"}),G={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"\u201c"},Z=["style","script"],B=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,D=/mailto:/i,q=/\n{2,}$/,V=/^(\s*>[\s\S]*?)(?=\n{2,})/,X=/^ *> ?/gm,J=/^ {2,}\n/,K=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,Q=/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,Y=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,ee=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,ne=/^(?:\n *)*\n/,te=/\r\n?/g,re=/^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/,ie=/^\[\^([^\]]+)]/,le=/\f/g,ae=/^---[ \t]*\n(.|\n)*\n---[ \t]*\n/,ce=/^\s*?\[(x|\s)\]/,oe=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,se=/^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,ue=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,pe=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i,de=/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,fe=/^<!--[\s\S]*?(?:-->)/,he=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,me=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,ge=/^\{.*\}$/,ye=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,ke=/^<([^ >]+@[^ >]+)>/,xe=/^<([^ >]+:\/[^ >]+)>/,ve=/-([a-z])?/gi,be=/^(.*\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/,we=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,$e=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,Ee=/^\[([^\]]*)\] ?\[([^\]]*)\]/,Ce=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,ze=/\t/g,Ae=/(^ *\||\| *$)/g,Oe=/^ *:-+: *$/,Se=/^ *:-+ *$/,Te=/^ *-+: *$/,Re="((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)",Le=new RegExp(`^([*_])\\1${Re}\\1\\1(?!\\1)`),Me=new RegExp(`^([*_])${Re}\\1(?!\\1|\\w)`),_e=new RegExp(`^==${Re}==`),Ie=new RegExp(`^~~${Re}~~`),je=/^\\([^0-9A-Za-z\s])/,Ne=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,Ue=/^\n+/,He=/^([ \t]*)/,Pe=/\\([^\\])/g,We=/ *\n+$/,Fe=/(?:^|\n)( *)$/,Ge="(?:\\d+\\.)",Ze="(?:[*+-])";function Be(e){return"( *)("+(1===e?Ge:Ze)+") +"}const De=Be(1),qe=Be(2);function Ve(e){return new RegExp("^"+(1===e?De:qe))}const Xe=Ve(1),Je=Ve(2);function Ke(e){return new RegExp("^"+(1===e?De:qe)+"[^\\n]*(?:\\n(?!\\1"+(1===e?Ge:Ze)+" )[^\\n]*)*(\\n|$)","gm")}const Qe=Ke(1),Ye=Ke(2);function en(e){const n=1===e?Ge:Ze;return new RegExp("^( *)("+n+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+n+" (?!"+n+" ))\\n*|\\s*\\n*$)")}const nn=en(1),tn=en(2);function rn(e,n){const t=1===n,r=t?nn:tn,i=t?Qe:Ye,l=t?Xe:Je;return{match(e,n){const t=Fe.exec(n.prevCapture);return t&&(n.list||!n.inline&&!n.simple)?r.exec(e=t[1]+e):null},order:1,parse(e,n,r){const a=t?+e[2]:void 0,c=e[0].replace(q,"\n").match(i);let o=!1;return{items:c.map((function(e,t){const i=l.exec(e)[0].length,a=new RegExp("^ {1,"+i+"}","gm"),s=e.replace(a,"").replace(l,""),u=t===c.length-1,p=-1!==s.indexOf("\n\n")||u&&o;o=p;const d=r.inline,f=r.list;let h;r.list=!0,p?(r.inline=!1,h=s.replace(We,"\n\n")):(r.inline=!0,h=s.replace(We,""));const m=n(h,r);return r.inline=d,r.list=f,m})),ordered:t,start:a}},render:(n,t,r)=>e(n.ordered?"ol":"ul",{key:r.key,start:n.type===z?n.start:void 0},n.items.map((function(n,i){return e("li",{key:i},t(n,r))})))}}const ln=new RegExp("^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),an=/^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,cn=[V,Q,Y,oe,ue,se,fe,be,Qe,nn,Ye,tn],on=[...cn,/^[^\n]+(?:  \n|\n{2,})/,pe,me];function sn(e){return e.replace(/[\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xc6]/g,"a").replace(/[\xe7\xc7]/g,"c").replace(/[\xf0\xd0]/g,"d").replace(/[\xc8\xc9\xca\xcb\xe9\xe8\xea\xeb]/g,"e").replace(/[\xcf\xef\xce\xee\xcd\xed\xcc\xec]/g,"i").replace(/[\xd1\xf1]/g,"n").replace(/[\xf8\xd8\u0153\u0152\xd5\xf5\xd4\xf4\xd3\xf3\xd2\xf2]/g,"o").replace(/[\xdc\xfc\xdb\xfb\xda\xfa\xd9\xf9]/g,"u").replace(/[\u0178\xff\xdd\xfd]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function un(e){return Te.test(e)?"right":Oe.test(e)?"center":Se.test(e)?"left":null}function pn(e,n,t,r){const i=t.inTable;t.inTable=!0;let l=e.trim().split(/( *(?:`[^`]*`|<.*?>.*?<\/.*?>(?!<\/.*?>)|\\\||\|) *)/).reduce(((e,i)=>("|"===i.trim()?e.push(r?{type:L}:{type:M,text:i}):""!==i&&e.push.apply(e,n(i,t)),e)),[]);t.inTable=i;let a=[[]];return l.forEach((function(e,n){e.type===L?0!==n&&n!==l.length-1&&a.push([]):(e.type!==M||null!=l[n+1]&&l[n+1].type!==L||(e.text=e.text.trimEnd()),a[a.length-1].push(e))})),a}function dn(e,n,t){t.inline=!0;const r=e[2]?e[2].replace(Ae,"").split("|").map(un):[],i=e[3]?function(e,n,t){return e.trim().split("\n").map((function(e){return pn(e,n,t,!0)}))}(e[3],n,t):[],l=pn(e[1],n,t,!!i.length);return t.inline=!1,i.length?{align:r,cells:i,header:l,type:R}:{children:l,type:A}}function fn(e,n){return null==e.align[n]?{}:{textAlign:e.align[n]}}function hn(e){return function(n,t){return t.inline?e.exec(n):null}}function mn(e){return function(n,t){return t.inline||t.simple?e.exec(n):null}}function gn(e){return function(n,t){return t.inline||t.simple?null:e.exec(n)}}function yn(e){return function(n){return e.exec(n)}}function kn(e,n,t){if(n.inline||n.simple)return null;if(t&&!t.endsWith("\n"))return null;let r="";e.split("\n").every((e=>!cn.some((n=>n.test(e)))&&(r+=e+"\n",e.trim())));const i=r.trimEnd();return""==i?null:[r,i]}function xn(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return null}catch(e){return null}return e}function vn(e){return e.replace(Pe,"$1")}function bn(e,n,t){const r=t.inline||!1,i=t.simple||!1;t.inline=!0,t.simple=!0;const l=e(n,t);return t.inline=r,t.simple=i,l}function wn(e,n,t){const r=t.inline||!1,i=t.simple||!1;t.inline=!1,t.simple=!0;const l=e(n,t);return t.inline=r,t.simple=i,l}function $n(e,n,t){const r=t.inline||!1;t.inline=!1;const i=e(n,t);return t.inline=r,i}const En=(e,n,t)=>({children:bn(n,e[1],t)});function Cn(){return{}}function zn(){return null}function An(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter(Boolean).join(" ")}function On(e,n,t){let r=e;const i=n.split(".");for(;i.length&&(r=r[i[0]],void 0!==r);)i.shift();return r||t}function Sn(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};function t(e,t){const r=On(n.overrides,`${e}.props`,{});for(var l=arguments.length,a=new Array(l>2?l-2:0),c=2;c<l;c++)a[c-2]=arguments[c];return n.createElement(function(e,n){const t=On(n,e);return t?"function"==typeof t||"object"==typeof t&&"render"in t?t:On(n,`${e}.component`,e):e}(e,n.overrides),i({},t,r,{className:An(null==t?void 0:t.className,r.className)||void 0}),...a)}function l(e){e=e.replace(ae,"");let i=!1;n.forceInline?i=!0:n.forceBlock||(i=!1===Ce.test(e));const l=Oe(Ae(i?e:`${e.trimEnd().replace(Ue,"")}\n\n`,{inline:i}));for(;"string"==typeof l[l.length-1]&&!l[l.length-1].trim();)l.pop();if(null===n.wrapper)return l;const a=n.wrapper||(i?"span":"div");let c;if(l.length>1||n.forceWrapper)c=l;else{if(1===l.length)return c=l[0],"string"==typeof c?t("span",{key:"outer"},c):c;c=null}return r.createElement(a,{key:"outer"},c)}function L(e,t){const i=t.match(B);return i?i.reduce((function(t,i,a){const c=i.indexOf("=");if(-1!==c){const o=function(e){return-1!==e.indexOf("-")&&null===e.match(he)&&(e=e.replace(ve,(function(e,n){return n.toUpperCase()}))),e}(i.slice(0,c)).trim(),s=function(e){const n=e[0];return('"'===n||"'"===n)&&e.length>=2&&e[e.length-1]===n?e.slice(1,-1):e}(i.slice(c+1).trim()),u=F[o]||o,p=t[u]=function(e,n,t,r){return"style"===n?t.split(/;\s?/).reduce((function(e,n){const t=n.slice(0,n.indexOf(":"));return e[t.trim().replace(/(-[a-z])/g,(e=>e[1].toUpperCase()))]=n.slice(t.length+1).trim(),e}),{}):"href"===n||"src"===n?r(t,e,n):(t.match(ge)&&(t=t.slice(1,t.length-1)),"true"===t||"false"!==t&&t)}(e,o,s,n.sanitizer);"string"==typeof p&&(pe.test(p)||me.test(p))&&(t[u]=r.cloneElement(l(p.trim()),{key:a}))}else"style"!==i&&(t[F[i]||i]=!0);return t}),{}):null}n.overrides=n.overrides||{},n.sanitizer=n.sanitizer||xn,n.slugify=n.slugify||sn,n.namedCodesToUnicode=n.namedCodesToUnicode?i({},G,n.namedCodesToUnicode):G,n.createElement=n.createElement||r.createElement;const P=[],W={},q={[a]:{match:gn(V),order:1,parse:(e,n,t)=>({children:n(e[0].replace(X,""),t)}),render:(e,n,r)=>t("blockquote",{key:r.key},n(e.children,r))},[c]:{match:yn(J),order:1,parse:Cn,render:(e,n,r)=>t("br",{key:r.key})},[o]:{match:gn(K),order:1,parse:Cn,render:(e,n,r)=>t("hr",{key:r.key})},[s]:{match:gn(Y),order:0,parse:e=>({lang:void 0,text:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,"")}),render:(e,n,r)=>t("pre",{key:r.key},t("code",i({},e.attrs,{className:e.lang?`lang-${e.lang}`:""}),e.text))},[u]:{match:gn(Q),order:0,parse:e=>({attrs:L("code",e[3]||""),lang:e[2]||void 0,text:e[4],type:s})},[p]:{match:mn(ee),order:3,parse:e=>({text:e[2]}),render:(e,n,r)=>t("code",{key:r.key},e.text)},[d]:{match:gn(re),order:0,parse:e=>(P.push({footnote:e[2],identifier:e[1]}),{}),render:zn},[f]:{match:hn(ie),order:1,parse:e=>({target:`#${n.slugify(e[1],sn)}`,text:e[1]}),render:(e,r,i)=>t("a",{key:i.key,href:n.sanitizer(e.target,"a","href")},t("sup",{key:i.key},e.text))},[h]:{match:hn(ce),order:1,parse:e=>({completed:"x"===e[1].toLowerCase()}),render:(e,n,r)=>t("input",{checked:e.completed,key:r.key,readOnly:!0,type:"checkbox"})},[m]:{match:gn(n.enforceAtxHeadings?se:oe),order:1,parse:(e,t,r)=>({children:bn(t,e[2],r),id:n.slugify(e[2],sn),level:e[1].length}),render:(e,n,r)=>t(`h${e.level}`,{id:e.id,key:r.key},n(e.children,r))},[g]:{match:gn(ue),order:0,parse:(e,n,t)=>({children:bn(n,e[1],t),level:"="===e[2]?1:2,type:m})},[y]:{match:yn(pe),order:1,parse(e,n,t){const[,r]=e[3].match(He),i=new RegExp(`^${r}`,"gm"),l=e[3].replace(i,""),a=(c=l,on.some((e=>e.test(c)))?$n:bn);var c;const o=e[1].toLowerCase(),s=-1!==Z.indexOf(o),u=(s?o:e[1]).trim(),p={attrs:L(u,e[2]),noInnerParse:s,tag:u};return t.inAnchor=t.inAnchor||"a"===o,s?p.text=e[3]:p.children=a(n,l,t),t.inAnchor=!1,p},render:(e,n,r)=>t(e.tag,i({key:r.key},e.attrs),e.text||(e.children?n(e.children,r):""))},[x]:{match:yn(me),order:1,parse(e){const n=e[1].trim();return{attrs:L(n,e[2]||""),tag:n}},render:(e,n,r)=>t(e.tag,i({},e.attrs,{key:r.key}))},[k]:{match:yn(fe),order:1,parse:()=>({}),render:zn},[v]:{match:mn(an),order:1,parse:e=>({alt:e[1],target:vn(e[2]),title:e[3]}),render:(e,r,i)=>t("img",{key:i.key,alt:e.alt||void 0,title:e.title||void 0,src:n.sanitizer(e.target,"img","src")})},[b]:{match:hn(ln),order:3,parse:(e,n,t)=>({children:wn(n,e[1],t),target:vn(e[2]),title:e[3]}),render:(e,r,i)=>t("a",{key:i.key,href:n.sanitizer(e.target,"a","href"),title:e.title},r(e.children,i))},[w]:{match:hn(xe),order:0,parse:e=>({children:[{text:e[1],type:M}],target:e[1],type:b})},[$]:{match:(e,t)=>t.inAnchor||n.disableAutoLink?null:hn(ye)(e,t),order:0,parse:e=>({children:[{text:e[1],type:M}],target:e[1],title:void 0,type:b})},[E]:{match:hn(ke),order:0,parse(e){let n=e[1],t=e[1];return D.test(t)||(t="mailto:"+t),{children:[{text:n.replace("mailto:",""),type:M}],target:t,type:b}}},[z]:rn(t,1),[H]:rn(t,2),[C]:{match:gn(ne),order:3,parse:Cn,render:()=>"\n"},[A]:{match:kn,order:3,parse:En,render:(e,n,r)=>t("p",{key:r.key},n(e.children,r))},[O]:{match:hn(we),order:0,parse:e=>(W[e[1]]={target:e[2],title:e[4]},{}),render:zn},[S]:{match:mn($e),order:0,parse:e=>({alt:e[1]||void 0,ref:e[2]}),render:(e,r,i)=>W[e.ref]?t("img",{key:i.key,alt:e.alt,src:n.sanitizer(W[e.ref].target,"img","src"),title:W[e.ref].title}):null},[T]:{match:hn(Ee),order:0,parse:(e,n,t)=>({children:n(e[1],t),fallbackChildren:e[0],ref:e[2]}),render:(e,r,i)=>W[e.ref]?t("a",{key:i.key,href:n.sanitizer(W[e.ref].target,"a","href"),title:W[e.ref].title},r(e.children,i)):t("span",{key:i.key},e.fallbackChildren)},[R]:{match:gn(be),order:1,parse:dn,render(e,n,r){const i=e;return t("table",{key:r.key},t("thead",null,t("tr",null,i.header.map((function(e,l){return t("th",{key:l,style:fn(i,l)},n(e,r))})))),t("tbody",null,i.cells.map((function(e,l){return t("tr",{key:l},e.map((function(e,l){return t("td",{key:l,style:fn(i,l)},n(e,r))})))}))))}},[M]:{match:yn(Ne),order:4,parse:e=>({text:e[0].replace(de,((e,t)=>n.namedCodesToUnicode[t]?n.namedCodesToUnicode[t]:e))}),render:e=>e.text},[_]:{match:mn(Le),order:2,parse:(e,n,t)=>({children:n(e[2],t)}),render:(e,n,r)=>t("strong",{key:r.key},n(e.children,r))},[I]:{match:mn(Me),order:3,parse:(e,n,t)=>({children:n(e[2],t)}),render:(e,n,r)=>t("em",{key:r.key},n(e.children,r))},[j]:{match:mn(je),order:1,parse:e=>({text:e[1],type:M})},[N]:{match:mn(_e),order:3,parse:En,render:(e,n,r)=>t("mark",{key:r.key},n(e.children,r))},[U]:{match:mn(Ie),order:3,parse:En,render:(e,n,r)=>t("del",{key:r.key},n(e.children,r))}};!0===n.disableParsingRawHTML&&(delete q[y],delete q[x]);const Ae=function(e){let n=Object.keys(e);function t(r,i){let l=[];for(i.prevCapture=i.prevCapture||"";r;){let a=0;for(;a<n.length;){const c=n[a],o=e[c],s=o.match(r,i);if(s){const e=s[0];i.prevCapture+=e,r=r.substring(e.length);const n=o.parse(s,t,i);null==n.type&&(n.type=c),l.push(n);break}a++}}return i.prevCapture="",l}return n.sort((function(n,t){let r=e[n].order,i=e[t].order;return r!==i?r-i:n<t?-1:1})),function(e,n){return t(function(e){return e.replace(te,"\n").replace(le,"").replace(ze,"    ")}(e),n)}}(q),Oe=(Se=function(e,n){return function(t,r,i){const l=e[t.type].render;return n?n((()=>l(t,r,i)),t,r,i):l(t,r,i)}}(q,n.renderRule),function e(n){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Array.isArray(n)){const r=t.key,i=[];let l=!1;for(let a=0;a<n.length;a++){t.key=a;const r=e(n[a],t),c="string"==typeof r;c&&l?i[i.length-1]+=r:null!==r&&i.push(r),l=c}return t.key=r,i}return Se(n,e,t)});var Se;const Te=l(e);return P.length?t("div",null,Te,t("footer",{key:"footer"},P.map((function(e){return t("div",{id:n.slugify(e.identifier,sn),key:e.identifier},e.identifier,Oe(Ae(e.footnote,{inline:!0})))})))):Te}const Tn=e=>{let{children:n="",options:t}=e,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n.indexOf(t=l[r])>=0||(i[t]=e[t]);return i}(e,l);return r.cloneElement(Sn(n,t),i)}}}]);
//# sourceMappingURL=574.6ad72347.chunk.js.map