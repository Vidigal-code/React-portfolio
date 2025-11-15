(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,99468,e=>{"use strict";var t=e.i(5774),n=e.i(94479);let r={bg:"#000000",bgLight:"#1C1E27",primary:"#2aa889",text_primary:"#1bc099",text_matrix:"#00FF00",sub_text:"#FFFFFF",text_title:"#FFFFFF",text_secondary:"#b1b2b3",card_menu:"rgba(255,255,255)",card_menu_mobile:"rgba(255,255,255,0.8)",card:"rgba(12,12,12,0.8)",white:"#FFFFFF",black:"#000000",card_footer:"#FFFFFF"},o={bg:"#f5f5f5",bgLight:"#cccccc",primary:"#2aa889",text_primary:"#1bc099",text_matrix:"#00FF00",sub_text:"rgba(0,0,0,0.96)",text_title:"#000000",text_secondary:"rgba(0,0,0,0.93)",card_menu:"rgb(0,0,0)",card_menu_mobile:"rgba(0,0,0,0.8)",card:"#f5f5f5",white:"#FFFFFF",black:"#ffffff",card_footer:"rgba(0,0,0)"};var i=e.i(98541);e.i(19987);let a=i.createContext(null);function l(){return i.useContext(a)}let s="function"==typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",d=function(e){let{children:n,theme:r}=e,o=l(),d=i.useMemo(()=>{var e,t;let n=null===o?{...r}:(e=o,"function"==typeof(t=r)?t(e):{...e,...t});return null!=n&&(n[s]=null!==o),n},[r,o]);return(0,t.jsx)(a.Provider,{value:d,children:n})};var c=e.i(69783),u=e.i(493);let f=i.createContext(),p=function({value:e,...n}){return(0,t.jsx)(f.Provider,{value:e??!0,...n})};var m=e.i(18943),h=e.i(57575);let g=0,x={...i}.useId;var y=e.i(69846);let b={};function v(e,t,n,r=!1){return i.useMemo(()=>{let o=e&&t[e]||t;if("function"==typeof n){let i=n(o),a=e?{...t,[e]:i}:i;return r?()=>a:a}return e?{...t,[e]:n}:{...t,...n}},[e,t,n,r])}let w=function(e){let{children:n,theme:r,themeId:o}=e,a=(0,u.default)(b),s=l()||b,f=v(o,a,r),w=v(o,s,r,!0),S="rtl"===(o?f[o]:f).direction,k=function(e){let n=(0,u.default)(),r=function(e){if(void 0!==x){let e=x();return(void 0)??e}return function(e){let[t,n]=i.useState(e),r=e||t;return i.useEffect(()=>{null==t&&(g+=1,n(`mui-${g}`))},[t]),r}(void 0)}()||"",{modularCssLayers:o}=e,a="mui.global, mui.components, mui.theme, mui.custom, mui.sx";return(a=o&&null===n?"string"==typeof o?o.replace(/mui(?!\.)/g,a):`@layer ${a};`:"",(0,h.default)(()=>{let e=document.querySelector("head");if(!e)return;let t=e.firstChild;if(a){if(t&&t.hasAttribute?.("data-mui-layer-order")&&t.getAttribute("data-mui-layer-order")===r)return;let n=document.createElement("style");n.setAttribute("data-mui-layer-order",r),n.textContent=a,e.prepend(n)}else e.querySelector(`style[data-mui-layer-order="${r}"]`)?.remove()},[a,r]),a)?(0,t.jsx)(y.default,{styles:a}):null}(f);return(0,t.jsx)(d,{theme:w,children:(0,t.jsx)(c.ThemeContext.Provider,{value:f,children:(0,t.jsx)(p,{value:S,children:(0,t.jsxs)(m.default,{value:o?f[o].components:f.components,children:[k,n]})})})})};var S=e.i(46116);function k({theme:e,...n}){let r=S.default in e?e[S.default]:void 0;return(0,t.jsx)(w,{...n,themeId:r?S.default:void 0,theme:r||e})}var $=e.i(75335),j=e.i(1172);let _="mode",C="color-scheme";function M(){}let N=({key:e,storageWindow:t})=>(t||"undefined"==typeof window||(t=window),{get(n){let r;if("undefined"!=typeof window){if(!t)return n;try{r=t.localStorage.getItem(e)}catch{}return r||n}},set:n=>{if(t)try{t.localStorage.setItem(e,n)}catch{}},subscribe:n=>{if(!t)return M;let r=t=>{let r=t.newValue;t.key===e&&n(r)};return t.addEventListener("storage",r),()=>{t.removeEventListener("storage",r)}}});function I(){}function E(e){if("undefined"!=typeof window&&"function"==typeof window.matchMedia&&"system"===e)return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function L(e,t){return"light"===e.mode||"system"===e.mode&&"light"===e.systemMode?t("light"):"dark"===e.mode||"system"===e.mode&&"dark"===e.systemMode?t("dark"):void 0}var F=e.i(74047),P=e.i(91621);let{CssVarsProvider:T,useColorScheme:O,getInitColorSchemeScript:z}=function(e){let{themeId:n,theme:r={},modeStorageKey:o=_,colorSchemeStorageKey:a=C,disableTransitionOnChange:s=!1,defaultColorScheme:d,resolveTheme:c}=e,u={allColorSchemes:[],colorScheme:void 0,darkColorScheme:void 0,lightColorScheme:void 0,mode:void 0,setColorScheme:()=>{},setMode:()=>{},systemMode:void 0},f=i.createContext(void 0),p={},m={},g="string"==typeof d?d:d.light,x="string"==typeof d?d:d.dark;return{CssVarsProvider:function(e){let{children:u,theme:g,modeStorageKey:x=o,colorSchemeStorageKey:y=a,disableTransitionOnChange:b=s,storageManager:v,storageWindow:S="undefined"==typeof window?void 0:window,documentNode:k="undefined"==typeof document?void 0:document,colorSchemeNode:$="undefined"==typeof document?void 0:document.documentElement,disableNestedContext:M=!1,disableStyleSheetGeneration:F=!1,defaultMode:P="system",forceThemeRerender:T=!1,noSsr:O}=e,z=i.useRef(!1),A=l(),D=i.useContext(f),R=!!D&&!M,B=i.useMemo(()=>g||("function"==typeof r?r():r),[g]),U=B[n],K=U||B,{colorSchemes:Y=p,components:V=m,cssVarPrefix:W}=K,G=Object.keys(Y).filter(e=>!!Y[e]).join(","),q=i.useMemo(()=>G.split(","),[G]),H="string"==typeof d?d:d.light,Q="string"==typeof d?d:d.dark,X=Y[H]&&Y[Q]?P:Y[K.defaultColorScheme]?.palette?.mode||K.palette?.mode,{mode:Z,setMode:J,systemMode:ee,lightColorScheme:et,darkColorScheme:en,colorScheme:er,setColorScheme:eo}=function(e){let{defaultMode:t="light",defaultLightColorScheme:n,defaultDarkColorScheme:r,supportedColorSchemes:o=[],modeStorageKey:a=_,colorSchemeStorageKey:l=C,storageWindow:s="undefined"==typeof window?void 0:window,storageManager:d=N,noSsr:c=!1}=e,u=o.join(","),f=o.length>1,p=i.useMemo(()=>d?.({key:a,storageWindow:s}),[d,a,s]),m=i.useMemo(()=>d?.({key:`${l}-light`,storageWindow:s}),[d,l,s]),h=i.useMemo(()=>d?.({key:`${l}-dark`,storageWindow:s}),[d,l,s]),[g,x]=i.useState(()=>{let e=p?.get(t)||t,o=m?.get(n)||n,i=h?.get(r)||r;return{mode:e,systemMode:E(e),lightColorScheme:o,darkColorScheme:i}}),[y,b]=i.useState(c||!f);i.useEffect(()=>{b(!0)},[]);let v=L(g,e=>"light"===e?g.lightColorScheme:"dark"===e?g.darkColorScheme:void 0),w=i.useCallback(e=>{x(n=>{if(e===n.mode)return n;let r=e??t;return p?.set(r),{...n,mode:r,systemMode:E(r)}})},[p,t]),S=i.useCallback(e=>{e?"string"==typeof e?e&&!u.includes(e)?console.error(`\`${e}\` does not exist in \`theme.colorSchemes\`.`):x(t=>{let n={...t};return L(t,t=>{"light"===t&&(m?.set(e),n.lightColorScheme=e),"dark"===t&&(h?.set(e),n.darkColorScheme=e)}),n}):x(t=>{let o={...t},i=null===e.light?n:e.light,a=null===e.dark?r:e.dark;return i&&(u.includes(i)?(o.lightColorScheme=i,m?.set(i)):console.error(`\`${i}\` does not exist in \`theme.colorSchemes\`.`)),a&&(u.includes(a)?(o.darkColorScheme=a,h?.set(a)):console.error(`\`${a}\` does not exist in \`theme.colorSchemes\`.`)),o}):x(e=>(m?.set(n),h?.set(r),{...e,lightColorScheme:n,darkColorScheme:r}))},[u,m,h,n,r]),k=i.useCallback(e=>{"system"===g.mode&&x(t=>{let n=e?.matches?"dark":"light";return t.systemMode===n?t:{...t,systemMode:n}})},[g.mode]),$=i.useRef(k);return $.current=k,i.useEffect(()=>{if("function"!=typeof window.matchMedia||!f)return;let e=(...e)=>$.current(...e),t=window.matchMedia("(prefers-color-scheme: dark)");return t.addListener(e),e(t),()=>{t.removeListener(e)}},[f]),i.useEffect(()=>{if(f){let e=p?.subscribe(e=>{(!e||["light","dark","system"].includes(e))&&w(e||t)})||I,n=m?.subscribe(e=>{(!e||u.match(e))&&S({light:e})})||I,r=h?.subscribe(e=>{(!e||u.match(e))&&S({dark:e})})||I;return()=>{e(),n(),r()}}},[S,w,u,t,s,f,p,m,h]),{...g,mode:y?g.mode:void 0,systemMode:y?g.systemMode:void 0,colorScheme:y?v:void 0,setMode:w,setColorScheme:S}}({supportedColorSchemes:q,defaultLightColorScheme:H,defaultDarkColorScheme:Q,modeStorageKey:x,colorSchemeStorageKey:y,defaultMode:X,storageManager:v,storageWindow:S,noSsr:O}),ei=Z,ea=er;R&&(ei=D.mode,ea=D.colorScheme);let el=ea||K.defaultColorScheme;K.vars&&!T&&(el=K.defaultColorScheme);let es=i.useMemo(()=>{let e=K.generateThemeVars?.()||K.vars,t={...K,components:V,colorSchemes:Y,cssVarPrefix:W,vars:e};if("function"==typeof t.generateSpacing&&(t.spacing=t.generateSpacing()),el){let e=Y[el];e&&"object"==typeof e&&Object.keys(e).forEach(n=>{e[n]&&"object"==typeof e[n]?t[n]={...t[n],...e[n]}:t[n]=e[n]})}return c?c(t):t},[K,el,V,Y,W]),ed=K.colorSchemeSelector;(0,h.default)(()=>{if(ea&&$&&ed&&"media"!==ed){let e=ed;if("class"===ed&&(e=".%s"),"data"===ed&&(e="[data-%s]"),ed?.startsWith("data-")&&!ed.includes("%s")&&(e=`[${ed}="%s"]`),e.startsWith("."))$.classList.remove(...q.map(t=>e.substring(1).replace("%s",t))),$.classList.add(e.substring(1).replace("%s",ea));else{let t=e.replace("%s",ea).match(/\[([^\]]+)\]/);if(t){let[e,n]=t[1].split("=");n||q.forEach(t=>{$.removeAttribute(e.replace(ea,t))}),$.setAttribute(e,n?n.replace(/"|'/g,""):"")}else $.setAttribute(e,ea)}}},[ea,ed,$,q]),i.useEffect(()=>{let e;if(b&&z.current&&k){let t=k.createElement("style");t.appendChild(k.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),k.head.appendChild(t),window.getComputedStyle(k.body),e=setTimeout(()=>{k.head.removeChild(t)},1)}return()=>{clearTimeout(e)}},[ea,b,k]),i.useEffect(()=>(z.current=!0,()=>{z.current=!1}),[]);let ec=i.useMemo(()=>({allColorSchemes:q,colorScheme:ea,darkColorScheme:en,lightColorScheme:et,mode:ei,setColorScheme:eo,setMode:J,systemMode:ee}),[q,ea,en,et,ei,eo,J,ee,es.colorSchemeSelector]),eu=!0;(F||!1===K.cssVariables||R&&A?.cssVarPrefix===W)&&(eu=!1);let ef=(0,t.jsxs)(i.Fragment,{children:[(0,t.jsx)(w,{themeId:U?n:void 0,theme:es,children:u}),eu&&(0,t.jsx)(j.GlobalStyles,{styles:es.generateStyleSheets?.()||[]})]});return R?ef:(0,t.jsx)(f.Provider,{value:ec,children:ef})},useColorScheme:()=>i.useContext(f)||u,getInitColorSchemeScript:e=>(function(e){let{defaultMode:n="system",defaultLightColorScheme:r="light",defaultDarkColorScheme:o="dark",modeStorageKey:i=_,colorSchemeStorageKey:a=C,attribute:l="data-color-scheme",colorSchemeNode:s="document.documentElement",nonce:d}=e||{},c="",u=l;if("class"===l&&(u=".%s"),"data"===l&&(u="[data-%s]"),u.startsWith(".")){let e=u.substring(1);c+=`${s}.classList.remove('${e}'.replace('%s', light), '${e}'.replace('%s', dark));
      ${s}.classList.add('${e}'.replace('%s', colorScheme));`}let f=u.match(/\[([^[\]]+)\]/);if(f){let[e,t]=f[1].split("=");t||(c+=`${s}.removeAttribute('${e}'.replace('%s', light));
      ${s}.removeAttribute('${e}'.replace('%s', dark));`),c+=`
      ${s}.setAttribute('${e}'.replace('%s', colorScheme), ${t?`${t}.replace('%s', colorScheme)`:'""'});`}else c+=`${s}.setAttribute('${u}', colorScheme);`;return(0,t.jsx)("script",{suppressHydrationWarning:!0,nonce:"undefined"==typeof window?d:"",dangerouslySetInnerHTML:{__html:`(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${i}') || '${n}';
  const dark = localStorage.getItem('${a}-dark') || '${o}';
  const light = localStorage.getItem('${a}-light') || '${r}';
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
    ${c}
  }
} catch(e){}})();`}},"mui-color-scheme-init")})({colorSchemeStorageKey:a,defaultLightColorScheme:g,defaultDarkColorScheme:x,modeStorageKey:o,...e})}}({themeId:S.default,theme:()=>(0,F.default)({cssVariables:!0}),colorSchemeStorageKey:"mui-color-scheme",modeStorageKey:"mui-mode",defaultColorScheme:{light:"light",dark:"dark"},resolveTheme:e=>{let t={...e,typography:(0,P.default)(e.palette,e.typography)};return t.unstable_sx=function(e){return(0,$.default)({sx:e,theme:this})},t}});function A({theme:e,...n}){let r=i.useMemo(()=>{if("function"==typeof e)return e;let t=S.default in e?e[S.default]:e;return"colorSchemes"in t?null:"vars"in t?e:{...e,vars:null}},[e]);return r?(0,t.jsx)(k,{theme:r,...n}):(0,t.jsx)(T,{theme:e,...n})}var D=e.i(2615),R=e.i(12406);let B="function"==typeof(0,D.globalCss)({}),U=(e,t=!1)=>{let n={};t&&e.colorSchemes&&"function"==typeof e.getColorSchemeSelector&&Object.entries(e.colorSchemes).forEach(([t,r])=>{let o=e.getColorSchemeSelector(t);o.startsWith("@")?n[o]={":root":{colorScheme:r.palette?.mode}}:n[o.replace(/\s*&/,"")]={colorScheme:r.palette?.mode}});let r={html:{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%",...t&&!e.vars&&{colorScheme:e.palette.mode}},"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:{margin:0,...{color:(e.vars||e).palette.text.primary,...e.typography.body1,backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}},"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}},...n},o=e.components?.MuiCssBaseline?.styleOverrides;return o&&(r=[r,o]),r},K="mui-ecs",Y=(0,D.globalCss)(B?({theme:e,enableColorScheme:t})=>U(e,t):({theme:e})=>{let t,n;return n=Array.isArray(t=U(e,!1))?t[0]:t,!e.vars&&n&&(n.html[`:root:has(${K})`]={colorScheme:e.palette.mode}),e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([t,r])=>{let o=e.getColorSchemeSelector(t);o.startsWith("@")?n[o]={[`:root:not(:has(.${K}))`]:{colorScheme:r.palette?.mode}}:n[o.replace(/\s*&/,"")]={[`&:not(:has(.${K}))`]:{colorScheme:r.palette?.mode}}}),t}),V=function(e){let{children:n,enableColorScheme:r=!1}=(0,R.useDefaultProps)({props:e,name:"MuiCssBaseline"});return(0,t.jsxs)(i.Fragment,{children:[B&&(0,t.jsx)(Y,{enableColorScheme:r}),!B&&!r&&(0,t.jsx)("span",{className:K,style:{display:"none"}}),n]})};var W=e.i(59234),G=e.i(67043);function q({children:e}){let{isDarkMode:i}=(0,G.useTheme)(),a=(0,F.default)({palette:{mode:i?"dark":"light",primary:{main:"#2aa889"}}});return(0,t.jsx)(n.ThemeProvider,{theme:i?r:o,children:(0,t.jsxs)(A,{theme:a,children:[(0,t.jsx)(V,{}),e]})})}function H({children:e}){return(0,t.jsx)(G.ThemeProvider,{children:(0,t.jsx)(W.LanguageProvider,{children:(0,t.jsx)(q,{children:e})})})}e.s(["default",()=>H],99468)},33182,e=>{"use strict";var t=e.i(5774),n=e.i(98541),r=e.i(94479);let o=r.default.div.withConfig({displayName:"global-loading__LoadingOverlay",componentId:"sc-e5baba2a-0"})`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    opacity: ${({$show:e})=>e?"1":"0"};
    visibility: ${({$show:e})=>e?"visible":"hidden"};
    transition: opacity 0.5s ease, visibility 0.5s ease;
`;r.default.div.withConfig({displayName:"global-loading__Spinner",componentId:"sc-e5baba2a-1"})`
    width: 60px;
    height: 60px;
    border: 5px solid rgba(42, 168, 137, 0.3);
    border-top: 5px solid #2aa889;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 20px;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;let i=r.default.p.withConfig({displayName:"global-loading__LoadingText",componentId:"sc-e5baba2a-2"})`
    font-size: 1.3rem;
    font-weight: 500;
    color: #2aa889;
    margin: 0;
`;var a=e.i(21460);function l({children:e}){let[r,l]=(0,n.useState)(!0),[s,d]=(0,n.useState)(!1);return((0,n.useEffect)(()=>{if(d(!0),"complete"===document.readyState){let e=setTimeout(()=>l(!1),500);return()=>clearTimeout(e)}let e=()=>{let e=setTimeout(()=>l(!1),500);return()=>clearTimeout(e)};return window.addEventListener("load",e),()=>window.removeEventListener("load",e)},[]),s)?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o,{$show:r,children:[(0,t.jsx)(a.Spinner,{}),(0,t.jsx)(i,{children:"Loading..."})]}),e]}):(0,t.jsxs)("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"#000",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",zIndex:9999},children:[(0,t.jsx)("div",{style:{width:"60px",height:"60px",border:"5px solid rgba(42, 168, 137, 0.3)",borderTop:"5px solid #2aa889",borderRadius:"50%",animation:"spin 1s linear infinite",marginBottom:"20px"}}),(0,t.jsx)("p",{style:{fontSize:"1.3rem",fontWeight:500,color:"#2aa889",margin:0},children:"Loading..."})]})}e.s(["default",()=>l],33182)},10763,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={assign:function(){return s},searchParamsToUrlQuery:function(){return i},urlQueryToSearchParams:function(){return l}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});function i(e){let t={};for(let[n,r]of e.entries()){let e=t[n];void 0===e?t[n]=r:Array.isArray(e)?e.push(r):t[n]=[e,r]}return t}function a(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function l(e){let t=new URLSearchParams;for(let[n,r]of Object.entries(e))if(Array.isArray(r))for(let e of r)t.append(n,a(e));else t.set(n,a(r));return t}function s(e,...t){for(let n of t){for(let t of n.keys())e.delete(t);for(let[t,r]of n.entries())e.append(t,r)}return e}},79116,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={formatUrl:function(){return l},formatWithValidation:function(){return d},urlObjectKeys:function(){return s}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let i=e.r(44066)._(e.r(10763)),a=/https?|ftp|gopher|file/;function l(e){let{auth:t,hostname:n}=e,r=e.protocol||"",o=e.pathname||"",l=e.hash||"",s=e.query||"",d=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?d=t+e.host:n&&(d=t+(~n.indexOf(":")?`[${n}]`:n),e.port&&(d+=":"+e.port)),s&&"object"==typeof s&&(s=String(i.urlQueryToSearchParams(s)));let c=e.search||s&&`?${s}`||"";return r&&!r.endsWith(":")&&(r+=":"),e.slashes||(!r||a.test(r))&&!1!==d?(d="//"+(d||""),o&&"/"!==o[0]&&(o="/"+o)):d||(d=""),l&&"#"!==l[0]&&(l="#"+l),c&&"?"!==c[0]&&(c="?"+c),o=o.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${r}${d}${o}${c}${l}`}let s=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function d(e){return l(e)}},51241,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useMergedRef",{enumerable:!0,get:function(){return o}});let r=e.r(98541);function o(e,t){let n=(0,r.useRef)(null),o=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=n.current;e&&(n.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(n.current=i(e,r)),t&&(o.current=i(t,r))},[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},38205,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={DecodeError:function(){return x},MiddlewareNotFoundError:function(){return w},MissingStaticPage:function(){return v},NormalizeError:function(){return y},PageNotFoundError:function(){return b},SP:function(){return h},ST:function(){return g},WEB_VITALS:function(){return i},execOnce:function(){return a},getDisplayName:function(){return u},getLocationOrigin:function(){return d},getURL:function(){return c},isAbsoluteUrl:function(){return s},isResSent:function(){return f},loadGetInitialProps:function(){return m},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return S}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let i=["CLS","FCP","FID","INP","LCP","TTFB"];function a(e){let t,n=!1;return(...r)=>(n||(n=!0,t=e(...r)),t)}let l=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,s=e=>l.test(e);function d(){let{protocol:e,hostname:t,port:n}=window.location;return`${e}//${t}${n?":"+n:""}`}function c(){let{href:e}=window.location,t=d();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function m(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await m(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&f(n))return r;if(!r)throw Object.defineProperty(Error(`"${u(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return r}let h="undefined"!=typeof performance,g=h&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class x extends Error{}class y extends Error{}class b extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class v extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class w extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function S(e){return JSON.stringify({message:e.message,stack:e.stack})}},73427,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"isLocalURL",{enumerable:!0,get:function(){return i}});let r=e.r(38205),o=e.r(12627);function i(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{let t=(0,r.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,o.hasBasePath)(n.pathname)}catch(e){return!1}}},55361,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"errorOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},81740,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return x},useLinkStatus:function(){return b}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let i=e.r(44066),a=e.r(5774),l=i._(e.r(98541)),s=e.r(79116),d=e.r(86532),c=e.r(51241),u=e.r(38205),f=e.r(33898);e.r(81765);let p=e.r(58683),m=e.r(73427),h=e.r(92664);function g(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}function x(t){var n;let r,o,i,[s,x]=(0,l.useOptimistic)(p.IDLE_LINK_STATUS),b=(0,l.useRef)(null),{href:v,as:w,children:S,prefetch:k=null,passHref:$,replace:j,shallow:_,scroll:C,onClick:M,onMouseEnter:N,onTouchStart:I,legacyBehavior:E=!1,onNavigate:L,ref:F,unstable_dynamicOnHover:P,...T}=t;r=S,E&&("string"==typeof r||"number"==typeof r)&&(r=(0,a.jsx)("a",{children:r}));let O=l.default.useContext(d.AppRouterContext),z=!1!==k,A=!1!==k?null===(n=k)||"auto"===n?h.FetchStrategy.PPR:h.FetchStrategy.Full:h.FetchStrategy.PPR,{href:D,as:R}=l.default.useMemo(()=>{let e=g(v);return{href:e,as:w?g(w):e}},[v,w]);if(E){if(r?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=l.default.Children.only(r)}let B=E?o&&"object"==typeof o&&o.ref:F,U=l.default.useCallback(e=>(null!==O&&(b.current=(0,p.mountLinkInstance)(e,D,O,A,z,x)),()=>{b.current&&((0,p.unmountLinkForCurrentNavigation)(b.current),b.current=null),(0,p.unmountPrefetchableInstance)(e)}),[z,D,O,A,x]),K={ref:(0,c.useMergedRef)(U,B),onClick(t){E||"function"!=typeof M||M(t),E&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!O||t.defaultPrevented||function(t,n,r,o,i,a,s){if("undefined"!=typeof window){let d,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((d=t.currentTarget.getAttribute("target"))&&"_self"!==d||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(n)){i&&(t.preventDefault(),location.replace(n));return}if(t.preventDefault(),s){let e=!1;if(s({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:u}=e.r(89886);l.default.startTransition(()=>{u(r||n,i?"replace":"push",a??!0,o.current)})}}(t,D,R,b,j,C,L)},onMouseEnter(e){E||"function"!=typeof N||N(e),E&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),O&&z&&(0,p.onNavigationIntent)(e.currentTarget,!0===P)},onTouchStart:function(e){E||"function"!=typeof I||I(e),E&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),O&&z&&(0,p.onNavigationIntent)(e.currentTarget,!0===P)}};return(0,u.isAbsoluteUrl)(R)?K.href=R:E&&!$&&("a"!==o.type||"href"in o.props)||(K.href=(0,f.addBasePath)(R)),i=E?l.default.cloneElement(o,K):(0,a.jsx)("a",{...T,...K,children:r}),(0,a.jsx)(y.Provider,{value:s,children:i})}e.r(55361);let y=(0,l.createContext)(p.IDLE_LINK_STATUS),b=()=>(0,l.useContext)(y);("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},85437,e=>{"use strict";var t=e.i(5774),n=e.i(98541),r=e.i(81740),o=e.i(97666),i=e.i(94479);let a=i.default.div.withConfig({displayName:"NavMenuStyled__Nav",componentId:"sc-65c7e458-0"})`
    background-color: ${({theme:e})=>e.card_menu};
    height: 55px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: fixed;
    top: 0;
    z-index: 1000;

    @media screen and (max-width: 1024px) {
        justify-content: flex-start;
    }
`,l=i.default.div.withConfig({displayName:"NavMenuStyled__NavbarContainer",componentId:"sc-65c7e458-1"})`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 5px;
    z-index: 1;
`,s=i.default.a.withConfig({displayName:"NavMenuStyled__NavLogo",componentId:"sc-65c7e458-2"})`
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;

    @media (max-width: 960px) {
        padding: 0 0;
        margin: 0px 5px;
    }

    @media (max-width: 640px) {
        padding: 0 0;
        margin: 0 5px;
    }
`,d=i.default.ul.withConfig({displayName:"NavMenuStyled__NavItems",componentId:"sc-65c7e458-3"})`
    width: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    height: 45px;
    margin: 0 5px;
    padding: 5px 20px;
    list-style: none;
    border: 1.8px solid ${({$isDarkMode:e})=>e?"#000":"#fff"};
    font-size: 16px;


    @media screen and (max-width: 1024px) {
        display: none;
    }
`,c=i.default.span.withConfig({displayName:"NavMenuStyled__NavLink",componentId:"sc-65c7e458-4"})`
    justify-content: center;
    display: flex;
    align-items: center;
    cursor: pointer;
    background: none;
    color: ${({$isDarkMode:e})=>e?"#000":"#fff"};
    text-decoration: none;
    box-shadow: none;
    text-align: center;
    font-weight: 500;
    transition: all 0.6s ease-in-out;

    &:hover {
        border: 1.8px solid ${({theme:e})=>e.primary};
        color: ${({theme:e})=>e.primary};
    }
`,u=i.default.a.withConfig({displayName:"NavMenuStyled__GitHubButton",componentId:"sc-65c7e458-5"})`
    justify-content: center;
    align-items: center;
    display: flex;
    height: 45px;
    border-radius: 2px;
    background-color: ${({$isDarkMode:e})=>e?"#fff":"transparent"};
    color: ${({$isDarkMode:e})=>e?"#000":"#fff"};
    cursor: pointer;
    padding: 10px 20px;
    font-weight: 500;
    text-decoration: none;
    font-size: 16px;
    transition: all 0.6s ease-in-out;
    border: 1.8px solid ${({$isDarkMode:e})=>e?"#000":"#fff"};
    margin-right: 5px;

    &:hover {
        background: ${({theme:e})=>e.primary};
        color: ${({theme:e})=>e.white};
    }

    @media screen and (max-width: 1024px) {
        display: none;
    }

`,f=i.default.div.withConfig({displayName:"NavMenuStyled__ButtonContainer",componentId:"sc-65c7e458-6"})`
    display: flex;
    justify-content: end;
    align-items: center;
    @media screen and (max-width: 1024px) {
        display: none;
    }
`,p=i.default.div.withConfig({displayName:"NavMenuStyled__MobileIcon",componentId:"sc-65c7e458-7"})`
    display: none;
    @media screen and (max-width: 1024px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        margin-top: -15px;
        transform: translate(-100%, 60%);
        font-size: 1.5rem;
        cursor: pointer;
        color: ${({$isDarkMode:e})=>e?"#000":"#fff"};
        transition: all 1s ease;
    }
    @media screen and (max-width: 320px) {
        margin-right: -10px;
    }
`,m=i.default.div.withConfig({displayName:"NavMenuStyled__MobileMenu",componentId:"sc-65c7e458-8"})`
    display: none;
    @media screen and (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 4px;
        position: fixed;
        top: 55px;
        left: 0;
        right: 0;
        width: 100%;
        overflow-y: auto;
        padding: 15px 40px 24px 40px;
        background: ${({theme:e})=>e.card_menu_mobile};
        color: ${({$isDarkMode:e})=>e?"#000":"#fff"};
        transition: all 0.6s ease-in-out;
        transform: ${({$isOpen:e})=>e?"translateY(0)":"translateY(-100%)"};
        border-radius: 0 0 20px 20px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        opacity: ${({$isOpen:e})=>e?"100%":"0"};
        z-index: ${({$isOpen:e})=>e?"999":"-1000"};
    }
`,h=i.default.span.withConfig({displayName:"NavMenuStyled__MobileNavLink",componentId:"sc-65c7e458-9"})`
    color: ${({$isDarkMode:e})=>e?"#000":"#fff"};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    display: block;

    &:hover {
        color: ${({$isDarkMode:e})=>e?"#000":"#fff"};
    }

    @media screen and (max-width: 1024px) {
        font-size: 13.5px;
    }
`,g=i.default.a.withConfig({displayName:"NavMenuStyled__MobileLink",componentId:"sc-65c7e458-10"})`
    color: ${({$isDarkMode:e})=>e?"#000":"#fff"};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    display: block;

    &:hover {
        color: ${({$isDarkMode:e})=>e?"#000":"#fff"};
    }

    @media screen and (max-width: 1024px) {
        font-size: 13.5px;
    }
`,x=i.default.span.withConfig({displayName:"NavMenuStyled__SpanLeftIcon",componentId:"sc-65c7e458-11"})`
    margin-left: 4px;
`,y=i.default.button.withConfig({displayName:"NavMenuStyled__StyledButton",componentId:"sc-65c7e458-12"})`
    justify-content: center;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 2px;
    height: 45px;
    background-color: ${({$isDarkMode:e})=>e?"#fff":"transparent"};
    color: ${({$isDarkMode:e})=>e?"#000":"#fff"};
    outline: none;
    box-shadow: none;
    position: relative;
    appearance: none;
    text-align: center;
    text-decoration: none;
    border: 1.8px solid ${({$isDarkMode:e})=>e?"#000":"#fff"};


    padding: 5px 20px;
    font-weight: 500;
    font-size: 16px;
    transition: all 0.6s ease-in-out;

    &:hover {
        background: ${({$isDarkMode:e})=>e?"#000":"#fff"};
        color: ${({$isDarkMode:e})=>e?"#fff":"#000"};
    }
`;i.default.option.withConfig({displayName:"NavMenuStyled__SelectOption",componentId:"sc-65c7e458-13"})`
    background: black;
    color: white;
    outline: none;
    float: left;
    text-align: left;
    text-decoration: none;
    appearance: none;
    cursor: pointer;
    font-size: 14px;

    &:focus {
        user-focus: none;
        background: none;
    }

    &:focus::after {
        outline: none;
    }
`,i.default.select.withConfig({displayName:"NavMenuStyled__StyledSelect",componentId:"sc-65c7e458-14"})`
    justify-content: center;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 1px;
    height: 45px;
    background-color: ${({$isDarkMode:e})=>e?"#fff":"transparent"};
    color: ${({$isDarkMode:e})=>e?"#000":"#fff"};
    outline: none;
    box-shadow: none;
    position: relative;
    appearance: none;
    text-align: left;
    text-decoration: none;
    float: left;
    border: 1.8px solid ${({$isDarkMode:e})=>e?"#000":"#fff"};

    margin-right: 5px;
    padding: 5px 20px;

    font-weight: 500;
    font-size: 16px;
    transition: all 0.6s ease-in-out;

    &:hover {
        background: ${({theme:e})=>e.primary};
        color: ${({theme:e})=>e.white};
    }

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`;let b=i.default.div.withConfig({displayName:"NavMenuStyled__SelectContainer",componentId:"sc-65c7e458-15"})`
    position: relative;
    margin-right: 5px;
    width: 100%;
    max-width: 300px;
    font-family: inherit;
    z-index: 40;

    @media screen and (max-width: 768px) {
        max-width: 100%;
    }
`,v=i.default.div.withConfig({displayName:"NavMenuStyled__SelectButton",componentId:"sc-65c7e458-16"})`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 45px;
    padding: 10px 25px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.6s ease-in-out;
    margin-right: 10px;


        //background-color: ${({$isDarkMode:e})=>e?"#000":"#fff"};
    color: ${({$isDarkMode:e})=>e?"#000":"#fff"};
    border: 1.8px solid ${({$isDarkMode:e})=>e?"#000":"#fff"};

    &:hover {
        background: ${({theme:e})=>e.primary};
        color: ${({theme:e})=>e.white};
    }

    @media screen and (max-width: 280px) {
        padding: 6px 12px;
        font-size: 14px;
        height: 40px;
    }
`,w=i.default.div.withConfig({displayName:"NavMenuStyled__SelectArrow",componentId:"sc-65c7e458-17"})`
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid ${({$isDarkMode:e})=>e?"#000":"#fff"};
    transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
    transition: transform 0.3s ease;


    ${v}:hover & {
        border-top-color: ${({theme:e})=>e.white};
    }
`,S=i.default.ul.withConfig({displayName:"NavMenuStyled__DropdownList",componentId:"sc-65c7e458-18"})`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    max-height: 200px;
    overflow-y: auto;
    margin: 1px 0 0;
    padding: 0;
    list-style: none;
    border-radius: 2px;
    border: 1.8px solid ${({$isDarkMode:e})=>e?"#fff":"#000"};
    background-color: ${({$isDarkMode:e})=>e?"#000":"#fff"};
    z-index: 50;
    display: ${({$isOpen:e})=>e?"block":"none"};
    text-align: center;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: ${({$isDarkMode:e})=>e?"#333":"#eee"};
    }

    &::-webkit-scrollbar-thumb {
        background: ${({$isDarkMode:e})=>e?"#666":"#ccc"};
        border-radius: 4px;
    }
`,k=i.default.li.withConfig({displayName:"NavMenuStyled__DropdownItem",componentId:"sc-65c7e458-19"})`
    padding: 10px 20px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    list-style: none;
    font-weight: 500;

    position: relative;
    
    color: ${({$isDarkMode:e})=>e?"#fff":"#000"};
    background: ${({$isDarkMode:e})=>e?"#000":"#fff"};

    &:hover {
        background: ${({$isDarkMode:e})=>e?"#fff":"#000"};
        color: ${({$isDarkMode:e})=>e?"#000":"#fff"};
    }

    &:not(:last-child)::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        border-bottom: 1.8px solid ${({$isDarkMode:e})=>e?"#fff":"#000"};
    }

    @media (max-width: 280px) {
        padding: 6px 12px;
        font-size: 12px;
    }
`;var $=e.i(59640),j=e.i(59234),_=e.i(67043),C=e.i(94118),M=e.i(9319),N=e.i(59155),I=e.i(77796);let E=()=>{let[e,i]=n.default.useState(!1),[E,L]=n.default.useState(!1),F=(0,o.usePathname)(),{selectedLanguage:P,handleLanguageChange:T}=(0,j.useLanguage)(),O=$.LocaleLang[P],{isDarkMode:z,toggleDarkMode:A}=(0,_.useTheme)();(0,n.useEffect)(()=>{L(!0)},[]);let D=[{id:"home",label:O?.nav.home},{id:"summary",label:O?.nav.summary},{id:"about",label:O?.nav.about},{id:"skills",label:O?.nav.skills},{id:"education",label:O?.nav.education},{id:"courses",label:O?.nav.courses},{id:"experience",label:O?.nav.experience},{id:"projects",label:O?.nav.projects},{id:"contact",label:O?.nav.contact}],R=O?.ResumeLinkPDF.length>0?(e=>{if(!e?.trim())return e;let t=e.trim();if(t.includes("drive.google.com")){let e=t.match(/\/d\/([a-zA-Z0-9_-]+)/)?.[1];return e?`https://drive.google.com/uc?export=download&id=${e}`:t}return t.includes("github.com")&&t.includes("/blob/")?t.replace("/blob/","/raw/"):t})(O.ResumeLinkPDF):"en"===P?(0,I.withBasePath)("/resume/KAUAN VIDIGAL EN.pdf"):(0,I.withBasePath)("/resume/KAUAN VIDIGAL PT.pdf"),[B,U]=n.default.useState(!1),K=(0,n.useRef)(null);return((0,n.useEffect)(()=>{let e=e=>{K.current&&!K.current.contains(e.target)&&U(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]),E)?(0,t.jsx)(a,{children:(0,t.jsxs)(l,{children:[(0,t.jsxs)(s,{children:[(0,t.jsxs)(b,{$isDarkMode:z,ref:K,children:[(0,t.jsxs)(v,{$isDarkMode:z,onClick:()=>{U(!B),i(!1)},children:[O.menu?.[P],(0,t.jsx)(w,{$isDarkMode:z,$isOpen:B})]}),(0,t.jsx)(S,{$isDarkMode:!z,$isOpen:B,children:Object.entries($.LocaleLang[P].menu).map(([e,n])=>(0,t.jsx)(k,{$isDarkMode:!z,onClick:()=>{T(e),U(!1),i(!1)},children:n},e))})]}),(0,t.jsxs)(y,{onClick:A,$isDarkMode:z,children:[z?O?.Modelight:O?.Modedark,(0,t.jsx)(x,{children:(0,t.jsx)(N.FiPower,{style:{cursor:"pointer",width:"15px",height:"15px"}})})]})]}),(0,t.jsx)(p,{$isDarkMode:z,children:(0,t.jsx)(C.CgArrowAlignV,{onClick:()=>{i(!e),U(!1)}})}),(0,t.jsx)(d,{$isDarkMode:z,children:D.map(({id:e,label:n})=>{let o="home"===e?"/":`/${e}`,i=new URLSearchParams(window.location.search),a=i.toString()?`${o}?${i.toString()}`:o;return(0,t.jsx)(r.default,{style:{textDecoration:"none"},href:a,children:(0,t.jsx)(c,{$isDarkMode:z,$isActive:F===o,children:n})},e)})}),(0,t.jsx)(f,{children:(0,t.jsxs)(u,{$isDarkMode:z,target:"_blank",href:O?.GithubLink,children:[O?.GithubLinkTitle,(0,t.jsx)(x,{children:(0,t.jsx)(M.FaGithubAlt,{style:{cursor:"pointer",width:"15x",height:"15px"}})})]})}),e&&(0,t.jsxs)(m,{$isDarkMode:z,$isOpen:e,children:[D.map(({id:n,label:o})=>{let a="home"===n?"/":`/${n}`,l=new URLSearchParams(window.location.search),s=l.toString()?`${a}?${l.toString()}`:a;return(0,t.jsx)(r.default,{style:{textDecoration:"none"},href:s,children:(0,t.jsx)(h,{$isDarkMode:z,onClick:()=>{i(!e)},children:o})},n)}),(0,t.jsx)(g,{$isDarkMode:z,href:O?.GithubLink,target:"_blank",children:O?.GithubLinkTitle.length>0?O?.GithubLinkTitle:"Github"}),(0,t.jsx)(g,{$isDarkMode:z,href:R,target:"_blank",children:O?.ResumeTitle.length>0?O?.ResumeTitle:"Curriculum"})]})]})}):(0,t.jsx)(a,{children:(0,t.jsx)(l,{children:(0,t.jsx)(s,{children:(0,t.jsx)("div",{style:{width:"100px",height:"40px"}})})})})};var L=e.i(90643);let F=i.default.div.withConfig({displayName:"FooterStyled__SocialMediaIcons",componentId:"sc-aa7bdb1c-0"})`
    display: flex;
    justify-content: flex-start;
    margin: 5px 10px;
`,P=i.default.p.withConfig({displayName:"FooterStyled__Copyright",componentId:"sc-aa7bdb1c-1"})`
    font-size: 0.9rem;
    margin: 15px;
    padding: 5px;
    color: ${({$isDarkMode:e})=>e?"#000":"#fff"};
    text-align: right;

    &:hover {
        border: 1.8px solid ${({theme:e})=>e.primary};
        color: ${({theme:e})=>e.primary};
    }

    &:active {
        border-bottom: 2px solid ${({theme:e})=>e.primary};
    }

    @media (max-width: 960px) {
        margin: 2px;
        text-align: center;
        font-size: 0.8rem;
    }

    @media (max-width: 640px) {
        font-size: 0.8rem;
        margin: 2px;
    }
`,T=i.default.a.withConfig({displayName:"FooterStyled__SocialMediaIcon",componentId:"sc-aa7bdb1c-2"})`
    justify-content: center;
    display: flex;
    align-items: center;
    margin: 0 4px;
    cursor: pointer;
    border-radius: 2px;
    background: none;
    color: ${({$isDarkMode:e})=>e?"#000":"#fff"};
    text-decoration: none;
    box-shadow: none;
    text-align: center;

    padding: 8px 6px;
    font-weight: 250;
    font-size: 16px;
    transition: all 0.6s ease-in-out;

    &:hover {
        border: 1.8px solid ${({theme:e})=>e.primary};
        color: ${({theme:e})=>e.primary};
    }

    &:active {
        border-bottom: 2px solid ${({theme:e})=>e.primary};
    }

    @media (max-width: 960px) {
        margin: 0 0px;
    }

    @media (max-width: 640px) {
        margin: 0 0px;
    }
`,O=i.default.div.withConfig({displayName:"FooterStyled__Nav",componentId:"sc-aa7bdb1c-3"})`
    background-color: ${({theme:e})=>e.card_footer};
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    font-size: 1rem;
    position: relative;
    width: 100%;
    z-index: 10;

    @media (max-width: 960px) {
        trastion: 0.8s all ease;
    }

    @media (max-width: 640px) {
        trastion: 0.8s all ease;
    }
`,z=i.default.footer.withConfig({displayName:"FooterStyled__FooterContainer",componentId:"sc-aa7bdb1c-4"})`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    z-index: 1;
`;i.default.div.withConfig({displayName:"FooterStyled__DIVText",componentId:"sc-aa7bdb1c-5"})`
    margin-left: 5px;
`;let A=i.keyframes`
    0% {
        -webkit-transform: translateY(-500px);
        transform: translateY(-500px);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
        opacity: 0;
    }
    38% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
        opacity: 1;
    }
    55% {
        -webkit-transform: translateY(-65px);
        transform: translateY(-65px);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }
    72% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
    }
    81% {
        -webkit-transform: translateY(-28px);
        transform: translateY(-28px);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }
    90% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
    }
    95% {
        -webkit-transform: translateY(-8px);
        transform: translateY(-8px);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
    }
`,D=i.default.div.withConfig({displayName:"FooterStyled__UpButton",componentId:"sc-aa7bdb1c-6"})`
    position: absolute;
    left: 96%;
    bottom: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    margin: 6px 8px;
    border-radius: 4px;
    padding: 10px;
    background-color: ${({$isDarkMode:e})=>e?"#fff":"#000"};
    color: ${({$isDarkMode:e})=>e?"#000":"#fff"};
    cursor: pointer;
    font-weight: 500;
    text-decoration: none;
    font-size: 16px;
    transition: all 0.6s ease-in-out;
    border: 1.8px solid ${({$isDarkMode:e})=>e?"#000":"#fff"};
    opacity: ${({$showButton:e})=>+!!e};
    visibility: ${({$showButton:e})=>e?"visible":"hidden"};
    z-index: 15;

    &.upButtonAnimation {
        animation: ${A} 1.1s ease-in both;
    }

    &:hover {
        background: ${({theme:e})=>e.primary};
        color: ${({theme:e})=>e.white};
        height: 45px;
        width: 45px;
    }

    @media screen and (max-width: 500px) {
        left: 83%;
        padding: 10px 16px;
        background-color: ${({$isDarkMode:e})=>e?"#fff":"#000"};
        color: ${({$isDarkMode:e})=>e?"#000":"#fff"};
        &:hover {
            background: ${({theme:e})=>e.primary};
            color: ${({theme:e})=>e.white};
        }

        width: max-content;
        font-size: 14px;
        right: 16px;
        bottom: 60px;
    }

    @media screen and (min-width: 500px) {
        left: 88%;
        padding: 10px 16px;
        background-color: ${({$isDarkMode:e})=>e?"#fff":"#000"};
        color: ${({$isDarkMode:e})=>e?"#000":"#fff"};
        &:hover {
            background: ${({theme:e})=>e.primary};
            color: ${({theme:e})=>e.white};
        }

        width: max-content;
        font-size: 14px;
        right: 16px;
        bottom: 60px;
    }

    @media screen and (min-width: 600px) {
        left: 91%;
        padding: 10px 16px;
        background-color: ${({$isDarkMode:e})=>e?"#fff":"#000"};
        color: ${({$isDarkMode:e})=>e?"#000":"#fff"};
        &:hover {
            background: ${({theme:e})=>e.primary};
            color: ${({theme:e})=>e.white};
        }

        width: max-content;
        font-size: 14px;
        right: 16px;
        bottom: 60px;
    }

    @media screen and (min-width: 800px) {
        left: 92%;
        padding: 10px 16px;
        background-color: ${({$isDarkMode:e})=>e?"#fff":"#000"};
        color: ${({$isDarkMode:e})=>e?"#000":"#fff"};
        &:hover {
            background: ${({theme:e})=>e.primary};
            color: ${({theme:e})=>e.white};
        }

        width: max-content;
        font-size: 14px;
        right: 16px;
        bottom: 60px;
    }

    @media screen and (min-width: 1100px) {
        left: 94%;
        padding: 10px 16px;
        background-color: ${({$isDarkMode:e})=>e?"#fff":"#000"};
        color: ${({$isDarkMode:e})=>e?"#000":"#fff"};
        &:hover {
            background: ${({theme:e})=>e.primary};
            color: ${({theme:e})=>e.white};
        }

        width: max-content;
        font-size: 14px;
        right: 16px;
        bottom: 60px;
    }

    @media screen and (min-width: 1300px) {
        left: 95%;
        padding: 10px 16px;
        background-color: ${({$isDarkMode:e})=>e?"#fff":"#000"};
        color: ${({$isDarkMode:e})=>e?"#000":"#fff"};
        &:hover {
            background: ${({theme:e})=>e.primary};
            color: ${({theme:e})=>e.white};
        }

        width: max-content;
        font-size: 14px;
        right: 16px;
        bottom: 60px;
    }

    @media screen and (min-width: 1400px) {
        left: 96%;
    }
`,R=function(){let{selectedLanguage:e}=(0,j.useLanguage)(),r=$.LocaleLang[e],{isDarkMode:o}=(0,_.useTheme)(),[i,a]=(0,n.useState)(!1),[l,s]=(0,n.useState)(!1);return((0,n.useEffect)(()=>{let e=()=>{document.documentElement.scrollTop+window.innerHeight>=document.documentElement.scrollHeight-100?a(!0):a(!1)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),(0,n.useEffect)(()=>{s(!0)},[]),l)?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("footer",{children:(0,t.jsxs)(O,{children:[(0,t.jsx)(D,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},$isDarkMode:o,$showButton:i,className:i?"upButtonAnimation":"",children:(0,t.jsx)(L.GoArrowUp,{})}),(0,t.jsxs)(z,{children:[(0,t.jsxs)(F,{children:[(0,t.jsx)(T,{$isDarkMode:o,href:r?.facebook,target:"display",children:(0,t.jsx)(M.FaFacebookSquare,{})}),(0,t.jsx)(T,{$isDarkMode:o,href:r?.twitter,target:"display",children:(0,t.jsx)(M.FaTwitterSquare,{})}),(0,t.jsx)(T,{$isDarkMode:o,href:r?.linkedin,target:"display",children:(0,t.jsx)(M.FaLinkedin,{})}),(0,t.jsx)(T,{$isDarkMode:o,href:r?.insta,target:"display",children:(0,t.jsx)(M.FaInstagram,{})})]}),(0,t.jsx)(P,{$isDarkMode:o,children:"© 2025 by Kauan Vidigal"})]})]})})}):null},B=i.default.div.withConfig({displayName:"ClientLayout__Body",componentId:"sc-8033a78f-0"})`
    background-color: ${({theme:e})=>e.bg};
    overflow: hidden;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`,U=i.default.main.withConfig({displayName:"ClientLayout__MainContent",componentId:"sc-8033a78f-1"})`
    flex: 1 0 auto;
    padding-top: 55px;
`;function K({children:e}){let[r,o]=(0,n.useState)(!1);return((0,n.useEffect)(()=>{o(!0)},[]),r)?(0,t.jsxs)(B,{children:[(0,t.jsx)("nav",{children:(0,t.jsx)(E,{})}),(0,t.jsx)(U,{children:e}),(0,t.jsx)("footer",{children:(0,t.jsx)(R,{})})]}):(0,t.jsx)("div",{children:e})}e.s(["default",()=>K],85437)},11702,e=>{"use strict";var t=e.i(5774),n=e.i(98541),r=e.i(97666),o=e.i(3172),i=e.i(91604),i=i;let a=()=>{let e=(0,o.default)({key:"mui",prepend:!0});return e.compat=!0,e};function l({children:e}){let[o]=n.useState(a);return(0,r.useServerInsertedHTML)(()=>(0,t.jsx)("style",{"data-emotion":`${o.key} ${Object.keys(o.inserted).join(" ")}`,dangerouslySetInnerHTML:{__html:Object.values(o.inserted).join(" ")}})),(0,t.jsx)(i.C,{value:o,children:e})}e.s(["default",()=>l],11702)}]);