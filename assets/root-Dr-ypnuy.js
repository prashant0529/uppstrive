import{r as a,w as Ve,O as Ge,v as Fe,M as Ue,x as We,S as ze,y as Ye,i as Qe}from"./chunk-WWGJGFF6-D54pz4gr.js";import{j as r}from"./jsx-runtime-C-_spy54.js";import{u as Xe,a as Je,L as Ze,s as et,b as tt,I as ot,F as nt,o as rt,A as st,C as ct,d as ke}from"./firebase-context-27psZ6oi.js";import{a as ne,R as it,u as at}from"./useTheme-BpSp6i88.js";import{G as lt,D as dt,a as ut,u as mt,g as Me,b as ft}from"./DefaultPropsProvider-CEjVQZK-.js";import{G as $e,n as ht,T as P,i as pt,H as St,f as gt,w as yt}from"./createTheme-mwCI719l.js";const Le=a.createContext(null);function re(){return a.useContext(Le)}const bt=typeof Symbol=="function"&&Symbol.for,Ct=bt?Symbol.for("mui.nested"):"__THEME_NESTED__";function wt(e,t){return typeof t=="function"?t(e):{...e,...t}}function xt(e){const{children:t,theme:o}=e,n=re(),c=a.useMemo(()=>{const l=n===null?{...o}:wt(n,o);return l!=null&&(l[Ct]=n!==null),l},[o,n]);return r.jsx(Le.Provider,{value:c,children:t})}function _t(e){const t=$e(),o=Xe()||"",{modularCssLayers:n}=e;let c="mui.global, mui.components, mui.theme, mui.custom, mui.sx";return!n||t!==null?c="":typeof n=="string"?c=n.replace(/mui(?!\.)/g,c):c=`@layer ${c};`,ne(()=>{var m,f;const l=document.querySelector("head");if(!l)return;const s=l.firstChild;if(c){if(s&&((m=s.hasAttribute)!=null&&m.call(s,"data-mui-layer-order"))&&s.getAttribute("data-mui-layer-order")===o)return;const S=document.createElement("style");S.setAttribute("data-mui-layer-order",o),S.textContent=c,l.prepend(S)}else(f=l.querySelector(`style[data-mui-layer-order="${o}"]`))==null||f.remove()},[c,o]),c?r.jsx(lt,{styles:c}):null}const Ee={};function je(e,t,o,n=!1){return a.useMemo(()=>{const c=e&&t[e]||t;if(typeof o=="function"){const l=o(c),s=e?{...t,[e]:l}:l;return n?()=>s:s}return e?{...t,[e]:o}:{...t,...o}},[e,t,o,n])}function Ie(e){const{children:t,theme:o,themeId:n}=e,c=$e(Ee),l=re()||Ee,s=je(n,c,o),m=je(n,l,o,!0),f=(n?s[n]:s).direction==="rtl",S=_t(s);return r.jsx(xt,{theme:m,children:r.jsx(ht.Provider,{value:s,children:r.jsx(it,{value:f,children:r.jsxs(dt,{value:n?s[n].components:s.components,children:[S,t]})})})})}const se="mode",ce="color-scheme",kt="data-color-scheme";function Et(e){const{defaultMode:t="system",defaultLightColorScheme:o="light",defaultDarkColorScheme:n="dark",modeStorageKey:c=se,colorSchemeStorageKey:l=ce,attribute:s=kt,colorSchemeNode:m="document.documentElement",nonce:f}=e;let S="",b=s;if(s==="class"&&(b=".%s"),s==="data"&&(b="[data-%s]"),b.startsWith(".")){const g=b.substring(1);S+=`${m}.classList.remove('${g}'.replace('%s', light), '${g}'.replace('%s', dark));
      ${m}.classList.add('${g}'.replace('%s', colorScheme));`}const _=b.match(/\[([^[\]]+)\]/);if(_){const[g,h]=_[1].split("=");h||(S+=`${m}.removeAttribute('${g}'.replace('%s', light));
      ${m}.removeAttribute('${g}'.replace('%s', dark));`),S+=`
      ${m}.setAttribute('${g}'.replace('%s', colorScheme), ${h?`${h}.replace('%s', colorScheme)`:'""'});`}else b!==".%s"&&(S+=`${m}.setAttribute('${b}', colorScheme);`);return r.jsx("script",{suppressHydrationWarning:!0,nonce:typeof window>"u"?f:"",dangerouslySetInnerHTML:{__html:`(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${c}') || '${t}';
  const dark = localStorage.getItem('${l}-dark') || '${n}';
  const light = localStorage.getItem('${l}-light') || '${o}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${S}
  }
} catch(e){}})();`}},"mui-color-scheme-init")}function jt(){}const Tt=({key:e,storageWindow:t})=>(!t&&typeof window<"u"&&(t=window),{get(o){if(typeof window>"u")return;if(!t)return o;let n;try{n=t.localStorage.getItem(e)}catch{}return n||o},set:o=>{if(t)try{t.localStorage.setItem(e,o)}catch{}},subscribe:o=>{if(!t)return jt;const n=c=>{const l=c.newValue;c.key===e&&o(l)};return t.addEventListener("storage",n),()=>{t.removeEventListener("storage",n)}}});function ee(){}function Te(e){if(typeof window<"u"&&typeof window.matchMedia=="function"&&e==="system")return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function De(e,t){if(e.mode==="light"||e.mode==="system"&&e.systemMode==="light")return t("light");if(e.mode==="dark"||e.mode==="system"&&e.systemMode==="dark")return t("dark")}function vt(e){return De(e,t=>{if(t==="light")return e.lightColorScheme;if(t==="dark")return e.darkColorScheme})}function Mt(e){const{defaultMode:t="light",defaultLightColorScheme:o,defaultDarkColorScheme:n,supportedColorSchemes:c=[],modeStorageKey:l=se,colorSchemeStorageKey:s=ce,storageWindow:m=typeof window>"u"?void 0:window,storageManager:f=Tt,noSsr:S=!1}=e,b=c.join(","),_=c.length>1,g=a.useMemo(()=>f==null?void 0:f({key:l,storageWindow:m}),[f,l,m]),h=a.useMemo(()=>f==null?void 0:f({key:`${s}-light`,storageWindow:m}),[f,s,m]),C=a.useMemo(()=>f==null?void 0:f({key:`${s}-dark`,storageWindow:m}),[f,s,m]),[T,I]=a.useState(()=>{const i=(g==null?void 0:g.get(t))||t,d=(h==null?void 0:h.get(o))||o,u=(C==null?void 0:C.get(n))||n;return{mode:i,systemMode:Te(i),lightColorScheme:d,darkColorScheme:u}}),[M,W]=a.useState(S||!_);a.useEffect(()=>{W(!0)},[]);const O=vt(T),N=a.useCallback(i=>{I(d=>{if(i===d.mode)return d;const u=i??t;return g==null||g.set(u),{...d,mode:u,systemMode:Te(u)}})},[g,t]),D=a.useCallback(i=>{i?typeof i=="string"?i&&!b.includes(i)?console.error(`\`${i}\` does not exist in \`theme.colorSchemes\`.`):I(d=>{const u={...d};return De(d,p=>{p==="light"&&(h==null||h.set(i),u.lightColorScheme=i),p==="dark"&&(C==null||C.set(i),u.darkColorScheme=i)}),u}):I(d=>{const u={...d},p=i.light===null?o:i.light,$=i.dark===null?n:i.dark;return p&&(b.includes(p)?(u.lightColorScheme=p,h==null||h.set(p)):console.error(`\`${p}\` does not exist in \`theme.colorSchemes\`.`)),$&&(b.includes($)?(u.darkColorScheme=$,C==null||C.set($)):console.error(`\`${$}\` does not exist in \`theme.colorSchemes\`.`)),u}):I(d=>(h==null||h.set(o),C==null||C.set(n),{...d,lightColorScheme:o,darkColorScheme:n}))},[b,h,C,o,n]),q=a.useCallback(i=>{T.mode==="system"&&I(d=>{const u=i!=null&&i.matches?"dark":"light";return d.systemMode===u?d:{...d,systemMode:u}})},[T.mode]),V=a.useRef(q);return V.current=q,a.useEffect(()=>{if(typeof window.matchMedia!="function"||!_)return;const i=(...u)=>V.current(...u),d=window.matchMedia("(prefers-color-scheme: dark)");return d.addListener(i),i(d),()=>{d.removeListener(i)}},[_]),a.useEffect(()=>{if(_){const i=(g==null?void 0:g.subscribe(p=>{(!p||["light","dark","system"].includes(p))&&N(p||t)}))||ee,d=(h==null?void 0:h.subscribe(p=>{(!p||b.match(p))&&D({light:p})}))||ee,u=(C==null?void 0:C.subscribe(p=>{(!p||b.match(p))&&D({dark:p})}))||ee;return()=>{i(),d(),u()}}},[D,N,b,t,m,_,g,h,C]),{...T,mode:M?T.mode:void 0,systemMode:M?T.systemMode:void 0,colorScheme:M?O:void 0,setMode:N,setColorScheme:D}}const $t="*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function Lt(e){const{themeId:t,theme:o={},modeStorageKey:n=se,colorSchemeStorageKey:c=ce,disableTransitionOnChange:l=!1,defaultColorScheme:s,resolveTheme:m}=e,f={allColorSchemes:[],colorScheme:void 0,darkColorScheme:void 0,lightColorScheme:void 0,mode:void 0,setColorScheme:()=>{},setMode:()=>{},systemMode:void 0},S=a.createContext(void 0),b=()=>a.useContext(S)||f,_={},g={};function h(M){var Ce,we,xe,_e;const{children:W,theme:O,modeStorageKey:N=n,colorSchemeStorageKey:D=c,disableTransitionOnChange:q=l,storageManager:V,storageWindow:i=typeof window>"u"?void 0:window,documentNode:d=typeof document>"u"?void 0:document,colorSchemeNode:u=typeof document>"u"?void 0:document.documentElement,disableNestedContext:p=!1,disableStyleSheetGeneration:$=!1,defaultMode:Pe="system",forceThemeRerender:Oe=!1,noSsr:Ne}=M,z=a.useRef(!1),Y=re(),Q=a.useContext(S),X=!!Q&&!p,ie=a.useMemo(()=>O||(typeof o=="function"?o():o),[O]),ae=ie[t],w=ae||ie,{colorSchemes:v=_,components:le=g,cssVarPrefix:J}=w,de=Object.keys(v).filter(x=>!!v[x]).join(","),A=a.useMemo(()=>de.split(","),[de]),ue=typeof s=="string"?s:s.light,me=typeof s=="string"?s:s.dark,qe=v[ue]&&v[me]?Pe:((we=(Ce=v[w.defaultColorScheme])==null?void 0:Ce.palette)==null?void 0:we.mode)||((xe=w.palette)==null?void 0:xe.mode),{mode:Be,setMode:fe,systemMode:he,lightColorScheme:pe,darkColorScheme:Se,colorScheme:Re,setColorScheme:ge}=Mt({supportedColorSchemes:A,defaultLightColorScheme:ue,defaultDarkColorScheme:me,modeStorageKey:N,colorSchemeStorageKey:D,defaultMode:qe,storageManager:V,storageWindow:i,noSsr:Ne});let Z=Be,k=Re;X&&(Z=Q.mode,k=Q.colorScheme);let G=k||w.defaultColorScheme;w.vars&&!Oe&&(G=w.defaultColorScheme);const B=a.useMemo(()=>{var L;const x=((L=w.generateThemeVars)==null?void 0:L.call(w))||w.vars,y={...w,components:le,colorSchemes:v,cssVarPrefix:J,vars:x};if(typeof y.generateSpacing=="function"&&(y.spacing=y.generateSpacing()),G){const j=v[G];j&&typeof j=="object"&&Object.keys(j).forEach(E=>{j[E]&&typeof j[E]=="object"?y[E]={...y[E],...j[E]}:y[E]=j[E]})}return m?m(y):y},[w,G,le,v,J]),R=w.colorSchemeSelector;ne(()=>{if(k&&u&&R&&R!=="media"){const x=R;let y=R;if(x==="class"&&(y=".%s"),x==="data"&&(y="[data-%s]"),x!=null&&x.startsWith("data-")&&!x.includes("%s")&&(y=`[${x}="%s"]`),y.startsWith("."))u.classList.remove(...A.map(L=>y.substring(1).replace("%s",L))),u.classList.add(y.substring(1).replace("%s",k));else{const L=y.replace("%s",k).match(/\[([^\]]+)\]/);if(L){const[j,E]=L[1].split("=");E||A.forEach(Ke=>{u.removeAttribute(j.replace(k,Ke))}),u.setAttribute(j,E?E.replace(/"|'/g,""):"")}else u.setAttribute(y,k)}}},[k,R,u,A]),a.useEffect(()=>{let x;if(q&&z.current&&d){const y=d.createElement("style");y.appendChild(d.createTextNode($t)),d.head.appendChild(y),window.getComputedStyle(d.body),x=setTimeout(()=>{d.head.removeChild(y)},1)}return()=>{clearTimeout(x)}},[k,q,d]),a.useEffect(()=>(z.current=!0,()=>{z.current=!1}),[]);const He=a.useMemo(()=>({allColorSchemes:A,colorScheme:k,darkColorScheme:Se,lightColorScheme:pe,mode:Z,setColorScheme:ge,setMode:fe,systemMode:he}),[A,k,Se,pe,Z,ge,fe,he,B.colorSchemeSelector]);let ye=!0;($||w.cssVariables===!1||X&&(Y==null?void 0:Y.cssVarPrefix)===J)&&(ye=!1);const be=r.jsxs(a.Fragment,{children:[r.jsx(Ie,{themeId:ae?t:void 0,theme:B,children:W}),ye&&r.jsx(ut,{styles:((_e=B.generateStyleSheets)==null?void 0:_e.call(B))||[]})]});return X?be:r.jsx(S.Provider,{value:He,children:be})}const C=typeof s=="string"?s:s.light,T=typeof s=="string"?s:s.dark;return{CssVarsProvider:h,useColorScheme:b,getInitColorSchemeScript:M=>Et({colorSchemeStorageKey:c,defaultLightColorScheme:C,defaultDarkColorScheme:T,modeStorageKey:n,...M})}}function It({theme:e,...t}){const o=P in e?e[P]:void 0;return r.jsx(Ie,{...t,themeId:o?P:void 0,theme:o||e})}const F={attribute:"data-mui-color-scheme",colorSchemeStorageKey:"mui-color-scheme",defaultLightColorScheme:"light",defaultDarkColorScheme:"dark",modeStorageKey:"mui-mode"},{CssVarsProvider:Dt,useColorScheme:Xt,getInitColorSchemeScript:Jt}=Lt({themeId:P,theme:()=>pt({cssVariables:!0}),colorSchemeStorageKey:F.colorSchemeStorageKey,modeStorageKey:F.modeStorageKey,defaultColorScheme:{light:F.defaultLightColorScheme,dark:F.defaultDarkColorScheme},resolveTheme:e=>{const t={...e,typography:St(e.palette,e.typography)};return t.unstable_sx=function(n){return gt({sx:n,theme:this})},t}}),At=Dt;function Pt({theme:e,...t}){const o=a.useMemo(()=>{if(typeof e=="function")return e;const n=P in e?e[P]:e;return"colorSchemes"in n?null:"vars"in n?e:{...e,vars:null}},[e]);return o?r.jsx(It,{theme:o,...t}):r.jsx(At,{theme:e,...t})}const te=typeof Me({})=="function",Ot=(e,t)=>({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%",...t&&!e.vars&&{colorScheme:e.palette.mode}}),Nt=e=>({color:(e.vars||e).palette.text.primary,...e.typography.body1,backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),Ae=(e,t=!1)=>{var l,s;const o={};t&&e.colorSchemes&&typeof e.getColorSchemeSelector=="function"&&Object.entries(e.colorSchemes).forEach(([m,f])=>{var b,_;const S=e.getColorSchemeSelector(m);S.startsWith("@")?o[S]={":root":{colorScheme:(b=f.palette)==null?void 0:b.mode}}:o[S.replace(/\s*&/,"")]={colorScheme:(_=f.palette)==null?void 0:_.mode}});let n={html:Ot(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:{margin:0,...Nt(e),"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}},...o};const c=(s=(l=e.components)==null?void 0:l.MuiCssBaseline)==null?void 0:s.styleOverrides;return c&&(n=[n,c]),n},U="mui-ecs",qt=e=>{const t=Ae(e,!1),o=Array.isArray(t)?t[0]:t;return!e.vars&&o&&(o.html[`:root:has(${U})`]={colorScheme:e.palette.mode}),e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([n,c])=>{var s,m;const l=e.getColorSchemeSelector(n);l.startsWith("@")?o[l]={[`:root:not(:has(.${U}))`]:{colorScheme:(s=c.palette)==null?void 0:s.mode}}:o[l.replace(/\s*&/,"")]={[`&:not(:has(.${U}))`]:{colorScheme:(m=c.palette)==null?void 0:m.mode}}}),t},Bt=Me(te?({theme:e,enableColorScheme:t})=>Ae(e,t):({theme:e})=>qt(e));function Rt(e){const t=mt({props:e,name:"MuiCssBaseline"}),{children:o,enableColorScheme:n=!1}=t;return r.jsxs(a.Fragment,{children:[te&&r.jsx(Bt,{enableColorScheme:n}),!te&&!n&&r.jsx("span",{className:U,style:{display:"none"}}),o]})}const Ht=()=>{const{colors:e,typography:t}=at();return r.jsx(ft,{styles:{"html, body":{backgroundColor:e.bgSurface,transition:"background-color .5s"},body:{color:e.textBold,margin:"0 auto"},a:{textDecoration:"none",color:e.textLink},p:{margin:0},strong:{fontWeight:t.fontWeightBold},ui:{paddingInlineStart:"16px"}}})},H=()=>{},Kt=e=>{a.useEffect(()=>{Je(e,{defaultTracking:!0,logLevel:Ze.Error,loggerProvider:{disable:H,enable:H,log:H,warn:H,debug:H,error(o){o.toString()==="Failed to fetch"&&(console.info("Amplitude blocked, opting out"),et(!0))}}});const t=new ot;tt(t)},[e])},ve="a2_j8jfowlv5ppg",Vt="343237284",oe="uppstrive_debug_pixels",Gt=`
  (function () {
    try {
      var params = new URLSearchParams(window.location.search);
      var value = params.get('debug_pixels');
      if (value === '1') {
        localStorage.setItem('${oe}', '1');
      } else if (value === '0') {
        localStorage.removeItem('${oe}');
      }
    } catch (e) {}
  })();
`,K=`
  var __uppstriveHost = window.location.hostname;
  var __uppstriveDebug = false;
  try {
    __uppstriveDebug = localStorage.getItem('${oe}') === '1';
  } catch (e) {}
  var __uppstriveLocal = __uppstriveHost === 'localhost' || __uppstriveHost === '127.0.0.1';
  if (__uppstriveHost !== 'uppstrive.co' && __uppstriveHost !== 'www.uppstrive.co' && !(__uppstriveDebug && __uppstriveLocal)) return;
`,Zt=()=>[{rel:"stylesheet",href:"https://use.typekit.net/ezr5dyc.css"},{rel:"icon",href:"/favicon.png",type:"image/png"}],eo=yt(({children:e},t)=>{const o=a.useContext(ct);return ne(()=>{t.sheet.container=document.head;const n=t.sheet.tags;t.sheet.flush(),n.forEach(c=>{t.sheet._insertTag(c)}),o.reset()},[]),r.jsxs("html",{lang:"en",children:[r.jsxs("head",{children:[r.jsx("meta",{charSet:"utf-8"}),r.jsx("meta",{content:"width=device-width, initial-scale=1",name:"viewport"}),r.jsx("meta",{content:"emotion-insertion-point",name:"emotion-insertion-point"}),r.jsx("script",{dangerouslySetInnerHTML:{__html:Gt}}),r.jsx("script",{dangerouslySetInnerHTML:{__html:`
              (function(){
                ${K}
                var s = document.createElement('script');
                s.async = true;
                s.src = 'https://www.googletagmanager.com/gtag/js?id=AW-18055141736';
                document.head.appendChild(s);
                window.dataLayer = window.dataLayer || [];
                window.gtag = function(){dataLayer.push(arguments);};
                window.gtag('js', new Date());
                window.gtag('config', 'AW-18055141736', {
                  linker: { domains: ['uppstrive.co', 'hire.uppstrivejobs.com'] }
                });
              })();
            `}}),r.jsx("script",{dangerouslySetInnerHTML:{__html:`
              (function(){
                ${K}
                (function(w,d,t,u,o){w[u]=w[u]||[],o.ts=new Date().getTime();var n=d.createElement(t);n.src='https://bat.bing.net/bat.js?ti='+o.ti+('uetq'!=u?'&q='+u:''),n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&'loaded'!==s&&'complete'!==s||(o.q=w[u],w[u]=new UET(o),w[u].push('pageLoad'),n.onload=n.onreadystatechange=null)};var i=d.getElementsByTagName(t)[0];i.parentNode.insertBefore(n,i)})(window,document,'script','uetq',{ti:'${Vt}',enableAutoSpaTracking:true});
              })();
            `}}),r.jsx("script",{dangerouslySetInnerHTML:{__html:`
              (function(){
                ${K}
                !(function(f,b,e,v,n,t,s){
                  if(f.fbq)return;
                  n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments);};
                  if(!f._fbq)f._fbq=n;
                  n.push=n;
                  n.loaded=!0;
                  n.version='2.0';
                  n.queue=[];
                  t=b.createElement(e);
                  t.async=!0;
                  t.src=v;
                  s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s);
                })(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
                fbq('init','1328975749375694');
                fbq('track','PageView');
              })();
            `}}),r.jsx("script",{dangerouslySetInnerHTML:{__html:`
              (function(){
                ${K}
                !(function(w,d){
                  if(!w.rdt){
                    var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments);};
                    p.callQueue=[];
                    var t=d.createElement('script');
                    t.src='https://www.redditstatic.com/ads/pixel.js?pixel_id=${ve}';
                    t.async=!0;
                    var s=d.getElementsByTagName('script')[0];
                    s.parentNode.insertBefore(t,s);
                  }
                })(window,document);
                rdt('init','${ve}');
                rdt('track','PageVisit');
              })();
            `}}),r.jsx("script",{dangerouslySetInnerHTML:{__html:`
              (function(){
                ${K}
                var partnerId = '${ke}';
                if (!partnerId) return;
                window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                window._linkedin_data_partner_ids.push(partnerId);
                if (!window.lintrk) {
                  window.lintrk = function(a,b){window.lintrk.q.push([a,b]);};
                  window.lintrk.q = [];
                  var s = document.getElementsByTagName('script')[0];
                  var b = document.createElement('script');
                  b.type = 'text/javascript';
                  b.async = true;
                  b.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
                  s.parentNode.insertBefore(b, s);
                }
              })();
            `}}),r.jsx("noscript",{children:r.jsx("img",{alt:"",height:"1",src:`https://px.ads.linkedin.com/collect/?pid=${ke}&fmt=gif`,style:{display:"none"},width:"1"})}),r.jsx(Ue,{}),r.jsx(We,{})]}),r.jsxs("body",{children:[e,r.jsx(ze,{}),r.jsx(Ye,{})]})]})}),to=Ve(function({loaderData:t}){return Kt(t.amplitudeKey),r.jsx(nt,{children:r.jsxs(Pt,{theme:rt,children:[r.jsx(Rt,{}),r.jsx(Ht,{}),r.jsx(st,{mode:"wait",children:r.jsx(Ge,{})})]})})}),oo=Fe(function({error:t}){let o="Oops!",n="An unexpected error occurred.",c;return Qe(t)&&(o=t.status===404?"404":"Error",n=t.status===404?"The requested page could not be found.":t.statusText||n),r.jsxs("main",{className:"pt-16 p-4 container mx-auto",children:[r.jsx("h1",{children:o}),r.jsx("p",{children:n}),c]})});export{oo as ErrorBoundary,eo as Layout,to as default,Zt as links};
