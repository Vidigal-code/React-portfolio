function B0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var G0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Bc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function On(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var Uf={exports:{}},Wa={},Wf={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ai=Symbol.for("react.element"),K0=Symbol.for("react.portal"),q0=Symbol.for("react.fragment"),Y0=Symbol.for("react.strict_mode"),Q0=Symbol.for("react.profiler"),J0=Symbol.for("react.provider"),X0=Symbol.for("react.context"),Z0=Symbol.for("react.forward_ref"),ev=Symbol.for("react.suspense"),tv=Symbol.for("react.memo"),nv=Symbol.for("react.lazy"),kd=Symbol.iterator;function rv(e){return e===null||typeof e!="object"?null:(e=kd&&e[kd]||e["@@iterator"],typeof e=="function"?e:null)}var Bf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gf=Object.assign,Kf={};function Jr(e,t,n){this.props=e,this.context=t,this.refs=Kf,this.updater=n||Bf}Jr.prototype.isReactComponent={};Jr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Jr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qf(){}qf.prototype=Jr.prototype;function Gc(e,t,n){this.props=e,this.context=t,this.refs=Kf,this.updater=n||Bf}var Kc=Gc.prototype=new qf;Kc.constructor=Gc;Gf(Kc,Jr.prototype);Kc.isPureReactComponent=!0;var Sd=Array.isArray,Yf=Object.prototype.hasOwnProperty,qc={current:null},Qf={key:!0,ref:!0,__self:!0,__source:!0};function Jf(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)Yf.call(t,r)&&!Qf.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];o.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:ai,type:e,key:i,ref:a,props:o,_owner:qc.current}}function ov(e,t){return{$$typeof:ai,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Yc(e){return typeof e=="object"&&e!==null&&e.$$typeof===ai}function iv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ed=/\/+/g;function Ks(e,t){return typeof e=="object"&&e!==null&&e.key!=null?iv(""+e.key):t.toString(36)}function Di(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ai:case K0:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Ks(a,0):r,Sd(o)?(n="",e!=null&&(n=e.replace(Ed,"$&/")+"/"),Di(o,t,n,"",function(c){return c})):o!=null&&(Yc(o)&&(o=ov(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Ed,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",Sd(e))for(var s=0;s<e.length;s++){i=e[s];var l=r+Ks(i,s);a+=Di(i,t,n,l,o)}else if(l=rv(e),typeof l=="function")for(e=l.call(e),s=0;!(i=e.next()).done;)i=i.value,l=r+Ks(i,s++),a+=Di(i,t,n,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function yi(e,t,n){if(e==null)return e;var r=[],o=0;return Di(e,r,"","",function(i){return t.call(n,i,o++)}),r}function av(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var qe={current:null},Vi={transition:null},sv={ReactCurrentDispatcher:qe,ReactCurrentBatchConfig:Vi,ReactCurrentOwner:qc};function Xf(){throw Error("act(...) is not supported in production builds of React.")}Y.Children={map:yi,forEach:function(e,t,n){yi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return yi(e,function(){t++}),t},toArray:function(e){return yi(e,function(t){return t})||[]},only:function(e){if(!Yc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=Jr;Y.Fragment=q0;Y.Profiler=Q0;Y.PureComponent=Gc;Y.StrictMode=Y0;Y.Suspense=ev;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sv;Y.act=Xf;Y.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Gf({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=qc.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Yf.call(t,l)&&!Qf.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:ai,type:e.type,key:o,ref:i,props:r,_owner:a}};Y.createContext=function(e){return e={$$typeof:X0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:J0,_context:e},e.Consumer=e};Y.createElement=Jf;Y.createFactory=function(e){var t=Jf.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:Z0,render:e}};Y.isValidElement=Yc;Y.lazy=function(e){return{$$typeof:nv,_payload:{_status:-1,_result:e},_init:av}};Y.memo=function(e,t){return{$$typeof:tv,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=Vi.transition;Vi.transition={};try{e()}finally{Vi.transition=t}};Y.unstable_act=Xf;Y.useCallback=function(e,t){return qe.current.useCallback(e,t)};Y.useContext=function(e){return qe.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return qe.current.useDeferredValue(e)};Y.useEffect=function(e,t){return qe.current.useEffect(e,t)};Y.useId=function(){return qe.current.useId()};Y.useImperativeHandle=function(e,t,n){return qe.current.useImperativeHandle(e,t,n)};Y.useInsertionEffect=function(e,t){return qe.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return qe.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return qe.current.useMemo(e,t)};Y.useReducer=function(e,t,n){return qe.current.useReducer(e,t,n)};Y.useRef=function(e){return qe.current.useRef(e)};Y.useState=function(e){return qe.current.useState(e)};Y.useSyncExternalStore=function(e,t,n){return qe.current.useSyncExternalStore(e,t,n)};Y.useTransition=function(){return qe.current.useTransition()};Y.version="18.3.1";Wf.exports=Y;var T=Wf.exports;const ie=Bc(T),$l=B0({__proto__:null,default:ie},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lv=T,cv=Symbol.for("react.element"),uv=Symbol.for("react.fragment"),dv=Object.prototype.hasOwnProperty,pv=lv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fv={key:!0,ref:!0,__self:!0,__source:!0};function Zf(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)dv.call(t,r)&&!fv.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:cv,type:e,key:i,ref:a,props:o,_owner:pv.current}}Wa.Fragment=uv;Wa.jsx=Zf;Wa.jsxs=Zf;Uf.exports=Wa;var x=Uf.exports,Ol={},em={exports:{}},ct={},tm={exports:{}},nm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,$){var P=A.length;A.push($);e:for(;0<P;){var H=P-1>>>1,D=A[H];if(0<o(D,$))A[H]=$,A[P]=D,P=H;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var $=A[0],P=A.pop();if(P!==$){A[0]=P;e:for(var H=0,D=A.length,xe=D>>>1;H<xe;){var _=2*(H+1)-1,$e=A[_],F=_+1,q=A[F];if(0>o($e,P))F<D&&0>o(q,$e)?(A[H]=q,A[F]=P,H=F):(A[H]=$e,A[_]=P,H=_);else if(F<D&&0>o(q,P))A[H]=q,A[F]=P,H=F;else break e}}return $}function o(A,$){var P=A.sortIndex-$.sortIndex;return P!==0?P:A.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],c=[],u=1,d=null,p=3,f=!1,g=!1,y=!1,b=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(A){for(var $=n(c);$!==null;){if($.callback===null)r(c);else if($.startTime<=A)r(c),$.sortIndex=$.expirationTime,t(l,$);else break;$=n(c)}}function w(A){if(y=!1,v(A),!g)if(n(l)!==null)g=!0,N(k);else{var $=n(c);$!==null&&G(w,$.startTime-A)}}function k(A,$){g=!1,y&&(y=!1,h(j),j=-1),f=!0;var P=p;try{for(v($),d=n(l);d!==null&&(!(d.expirationTime>$)||A&&!I());){var H=d.callback;if(typeof H=="function"){d.callback=null,p=d.priorityLevel;var D=H(d.expirationTime<=$);$=e.unstable_now(),typeof D=="function"?d.callback=D:d===n(l)&&r(l),v($)}else r(l);d=n(l)}if(d!==null)var xe=!0;else{var _=n(c);_!==null&&G(w,_.startTime-$),xe=!1}return xe}finally{d=null,p=P,f=!1}}var E=!1,S=null,j=-1,z=5,O=-1;function I(){return!(e.unstable_now()-O<z)}function M(){if(S!==null){var A=e.unstable_now();O=A;var $=!0;try{$=S(!0,A)}finally{$?B():(E=!1,S=null)}}else E=!1}var B;if(typeof m=="function")B=function(){m(M)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,V=W.port2;W.port1.onmessage=M,B=function(){V.postMessage(null)}}else B=function(){b(M,0)};function N(A){S=A,E||(E=!0,B())}function G(A,$){j=b(function(){A(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){g||f||(g=!0,N(k))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(A){switch(p){case 1:case 2:case 3:var $=3;break;default:$=p}var P=p;p=$;try{return A()}finally{p=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,$){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var P=p;p=A;try{return $()}finally{p=P}},e.unstable_scheduleCallback=function(A,$,P){var H=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?H+P:H):P=H,A){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=P+D,A={id:u++,callback:$,priorityLevel:A,startTime:P,expirationTime:D,sortIndex:-1},P>H?(A.sortIndex=P,t(c,A),n(l)===null&&A===n(c)&&(y?(h(j),j=-1):y=!0,G(w,P-H))):(A.sortIndex=D,t(l,A),g||f||(g=!0,N(k))),A},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(A){var $=p;return function(){var P=p;p=$;try{return A.apply(this,arguments)}finally{p=P}}}})(nm);tm.exports=nm;var mv=tm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hv=T,lt=mv;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rm=new Set,zo={};function nr(e,t){Mr(e,t),Mr(e+"Capture",t)}function Mr(e,t){for(zo[e]=t,e=0;e<t.length;e++)rm.add(t[e])}var rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rl=Object.prototype.hasOwnProperty,gv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cd={},_d={};function vv(e){return Rl.call(_d,e)?!0:Rl.call(Cd,e)?!1:gv.test(e)?_d[e]=!0:(Cd[e]=!0,!1)}function yv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function xv(e,t,n,r){if(t===null||typeof t>"u"||yv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ye(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var De={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){De[e]=new Ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];De[t]=new Ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){De[e]=new Ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){De[e]=new Ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){De[e]=new Ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){De[e]=new Ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){De[e]=new Ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){De[e]=new Ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){De[e]=new Ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var Qc=/[\-:]([a-z])/g;function Jc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Qc,Jc);De[t]=new Ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Qc,Jc);De[t]=new Ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Qc,Jc);De[t]=new Ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){De[e]=new Ye(e,1,!1,e.toLowerCase(),null,!1,!1)});De.xlinkHref=new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){De[e]=new Ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xc(e,t,n,r){var o=De.hasOwnProperty(t)?De[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(xv(t,n,o,r)&&(n=null),r||o===null?vv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var un=hv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xi=Symbol.for("react.element"),vr=Symbol.for("react.portal"),yr=Symbol.for("react.fragment"),Zc=Symbol.for("react.strict_mode"),Il=Symbol.for("react.profiler"),om=Symbol.for("react.provider"),im=Symbol.for("react.context"),eu=Symbol.for("react.forward_ref"),Al=Symbol.for("react.suspense"),zl=Symbol.for("react.suspense_list"),tu=Symbol.for("react.memo"),fn=Symbol.for("react.lazy"),am=Symbol.for("react.offscreen"),jd=Symbol.iterator;function io(e){return e===null||typeof e!="object"?null:(e=jd&&e[jd]||e["@@iterator"],typeof e=="function"?e:null)}var he=Object.assign,qs;function vo(e){if(qs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);qs=t&&t[1]||""}return`
`+qs+e}var Ys=!1;function Qs(e,t){if(!e||Ys)return"";Ys=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var l=`
`+o[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Ys=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?vo(e):""}function wv(e){switch(e.tag){case 5:return vo(e.type);case 16:return vo("Lazy");case 13:return vo("Suspense");case 19:return vo("SuspenseList");case 0:case 2:case 15:return e=Qs(e.type,!1),e;case 11:return e=Qs(e.type.render,!1),e;case 1:return e=Qs(e.type,!0),e;default:return""}}function Ll(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case yr:return"Fragment";case vr:return"Portal";case Il:return"Profiler";case Zc:return"StrictMode";case Al:return"Suspense";case zl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case im:return(e.displayName||"Context")+".Consumer";case om:return(e._context.displayName||"Context")+".Provider";case eu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case tu:return t=e.displayName||null,t!==null?t:Ll(e.type)||"Memo";case fn:t=e._payload,e=e._init;try{return Ll(e(t))}catch{}}return null}function bv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ll(t);case 8:return t===Zc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Pn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function kv(e){var t=sm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wi(e){e._valueTracker||(e._valueTracker=kv(e))}function lm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=sm(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function la(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Nl(e,t){var n=t.checked;return he({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Td(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Pn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function cm(e,t){t=t.checked,t!=null&&Xc(e,"checked",t,!1)}function Ml(e,t){cm(e,t);var n=Pn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Fl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Fl(e,t.type,Pn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Pd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Fl(e,t,n){(t!=="number"||la(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var yo=Array.isArray;function $r(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Pn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Dl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return he({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $d(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(yo(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Pn(n)}}function um(e,t){var n=Pn(t.value),r=Pn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Od(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function dm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?dm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var bi,pm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(bi=bi||document.createElement("div"),bi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=bi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Lo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var So={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sv=["Webkit","ms","Moz","O"];Object.keys(So).forEach(function(e){Sv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),So[t]=So[e]})});function fm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||So.hasOwnProperty(e)&&So[e]?(""+t).trim():t+"px"}function mm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=fm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Ev=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hl(e,t){if(t){if(Ev[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function Ul(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wl=null;function nu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bl=null,Or=null,Rr=null;function Rd(e){if(e=ci(e)){if(typeof Bl!="function")throw Error(R(280));var t=e.stateNode;t&&(t=Ya(t),Bl(e.stateNode,e.type,t))}}function hm(e){Or?Rr?Rr.push(e):Rr=[e]:Or=e}function gm(){if(Or){var e=Or,t=Rr;if(Rr=Or=null,Rd(e),t)for(e=0;e<t.length;e++)Rd(t[e])}}function vm(e,t){return e(t)}function ym(){}var Js=!1;function xm(e,t,n){if(Js)return e(t,n);Js=!0;try{return vm(e,t,n)}finally{Js=!1,(Or!==null||Rr!==null)&&(ym(),gm())}}function No(e,t){var n=e.stateNode;if(n===null)return null;var r=Ya(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var Gl=!1;if(rn)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){Gl=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{Gl=!1}function Cv(e,t,n,r,o,i,a,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var Eo=!1,ca=null,ua=!1,Kl=null,_v={onError:function(e){Eo=!0,ca=e}};function jv(e,t,n,r,o,i,a,s,l){Eo=!1,ca=null,Cv.apply(_v,arguments)}function Tv(e,t,n,r,o,i,a,s,l){if(jv.apply(this,arguments),Eo){if(Eo){var c=ca;Eo=!1,ca=null}else throw Error(R(198));ua||(ua=!0,Kl=c)}}function rr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function wm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Id(e){if(rr(e)!==e)throw Error(R(188))}function Pv(e){var t=e.alternate;if(!t){if(t=rr(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Id(o),e;if(i===r)return Id(o),t;i=i.sibling}throw Error(R(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function bm(e){return e=Pv(e),e!==null?km(e):null}function km(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=km(e);if(t!==null)return t;e=e.sibling}return null}var Sm=lt.unstable_scheduleCallback,Ad=lt.unstable_cancelCallback,$v=lt.unstable_shouldYield,Ov=lt.unstable_requestPaint,we=lt.unstable_now,Rv=lt.unstable_getCurrentPriorityLevel,ru=lt.unstable_ImmediatePriority,Em=lt.unstable_UserBlockingPriority,da=lt.unstable_NormalPriority,Iv=lt.unstable_LowPriority,Cm=lt.unstable_IdlePriority,Ba=null,Wt=null;function Av(e){if(Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(Ba,e,void 0,(e.current.flags&128)===128)}catch{}}var Pt=Math.clz32?Math.clz32:Nv,zv=Math.log,Lv=Math.LN2;function Nv(e){return e>>>=0,e===0?32:31-(zv(e)/Lv|0)|0}var ki=64,Si=4194304;function xo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pa(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~o;s!==0?r=xo(s):(i&=a,i!==0&&(r=xo(i)))}else a=n&~o,a!==0?r=xo(a):i!==0&&(r=xo(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Pt(t),o=1<<n,r|=e[n],t&=~o;return r}function Mv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Pt(i),s=1<<a,l=o[a];l===-1?(!(s&n)||s&r)&&(o[a]=Mv(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}function ql(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _m(){var e=ki;return ki<<=1,!(ki&4194240)&&(ki=64),e}function Xs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function si(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Pt(t),e[t]=n}function Dv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Pt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ou(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Pt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var te=0;function jm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Tm,iu,Pm,$m,Om,Yl=!1,Ei=[],wn=null,bn=null,kn=null,Mo=new Map,Fo=new Map,hn=[],Vv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zd(e,t){switch(e){case"focusin":case"focusout":wn=null;break;case"dragenter":case"dragleave":bn=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":Mo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(t.pointerId)}}function so(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=ci(t),t!==null&&iu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Hv(e,t,n,r,o){switch(t){case"focusin":return wn=so(wn,e,t,n,r,o),!0;case"dragenter":return bn=so(bn,e,t,n,r,o),!0;case"mouseover":return kn=so(kn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Mo.set(i,so(Mo.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Fo.set(i,so(Fo.get(i)||null,e,t,n,r,o)),!0}return!1}function Rm(e){var t=Vn(e.target);if(t!==null){var n=rr(t);if(n!==null){if(t=n.tag,t===13){if(t=wm(n),t!==null){e.blockedOn=t,Om(e.priority,function(){Pm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ql(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Wl=r,n.target.dispatchEvent(r),Wl=null}else return t=ci(n),t!==null&&iu(t),e.blockedOn=n,!1;t.shift()}return!0}function Ld(e,t,n){Hi(e)&&n.delete(t)}function Uv(){Yl=!1,wn!==null&&Hi(wn)&&(wn=null),bn!==null&&Hi(bn)&&(bn=null),kn!==null&&Hi(kn)&&(kn=null),Mo.forEach(Ld),Fo.forEach(Ld)}function lo(e,t){e.blockedOn===t&&(e.blockedOn=null,Yl||(Yl=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,Uv)))}function Do(e){function t(o){return lo(o,e)}if(0<Ei.length){lo(Ei[0],e);for(var n=1;n<Ei.length;n++){var r=Ei[n];r.blockedOn===e&&(r.blockedOn=null)}}for(wn!==null&&lo(wn,e),bn!==null&&lo(bn,e),kn!==null&&lo(kn,e),Mo.forEach(t),Fo.forEach(t),n=0;n<hn.length;n++)r=hn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<hn.length&&(n=hn[0],n.blockedOn===null);)Rm(n),n.blockedOn===null&&hn.shift()}var Ir=un.ReactCurrentBatchConfig,fa=!0;function Wv(e,t,n,r){var o=te,i=Ir.transition;Ir.transition=null;try{te=1,au(e,t,n,r)}finally{te=o,Ir.transition=i}}function Bv(e,t,n,r){var o=te,i=Ir.transition;Ir.transition=null;try{te=4,au(e,t,n,r)}finally{te=o,Ir.transition=i}}function au(e,t,n,r){if(fa){var o=Ql(e,t,n,r);if(o===null)ll(e,t,r,ma,n),zd(e,r);else if(Hv(o,e,t,n,r))r.stopPropagation();else if(zd(e,r),t&4&&-1<Vv.indexOf(e)){for(;o!==null;){var i=ci(o);if(i!==null&&Tm(i),i=Ql(e,t,n,r),i===null&&ll(e,t,r,ma,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ll(e,t,r,null,n)}}var ma=null;function Ql(e,t,n,r){if(ma=null,e=nu(r),e=Vn(e),e!==null)if(t=rr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=wm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ma=e,null}function Im(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rv()){case ru:return 1;case Em:return 4;case da:case Iv:return 16;case Cm:return 536870912;default:return 16}default:return 16}}var yn=null,su=null,Ui=null;function Am(){if(Ui)return Ui;var e,t=su,n=t.length,r,o="value"in yn?yn.value:yn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Ui=o.slice(e,1<r?1-r:void 0)}function Wi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ci(){return!0}function Nd(){return!1}function ut(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ci:Nd,this.isPropagationStopped=Nd,this}return he(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ci)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ci)},persist:function(){},isPersistent:Ci}),t}var Xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lu=ut(Xr),li=he({},Xr,{view:0,detail:0}),Gv=ut(li),Zs,el,co,Ga=he({},li,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==co&&(co&&e.type==="mousemove"?(Zs=e.screenX-co.screenX,el=e.screenY-co.screenY):el=Zs=0,co=e),Zs)},movementY:function(e){return"movementY"in e?e.movementY:el}}),Md=ut(Ga),Kv=he({},Ga,{dataTransfer:0}),qv=ut(Kv),Yv=he({},li,{relatedTarget:0}),tl=ut(Yv),Qv=he({},Xr,{animationName:0,elapsedTime:0,pseudoElement:0}),Jv=ut(Qv),Xv=he({},Xr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zv=ut(Xv),e1=he({},Xr,{data:0}),Fd=ut(e1),t1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},n1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},r1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function o1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=r1[e])?!!t[e]:!1}function cu(){return o1}var i1=he({},li,{key:function(e){if(e.key){var t=t1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?n1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cu,charCode:function(e){return e.type==="keypress"?Wi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),a1=ut(i1),s1=he({},Ga,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dd=ut(s1),l1=he({},li,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cu}),c1=ut(l1),u1=he({},Xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),d1=ut(u1),p1=he({},Ga,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),f1=ut(p1),m1=[9,13,27,32],uu=rn&&"CompositionEvent"in window,Co=null;rn&&"documentMode"in document&&(Co=document.documentMode);var h1=rn&&"TextEvent"in window&&!Co,zm=rn&&(!uu||Co&&8<Co&&11>=Co),Vd=" ",Hd=!1;function Lm(e,t){switch(e){case"keyup":return m1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xr=!1;function g1(e,t){switch(e){case"compositionend":return Nm(t);case"keypress":return t.which!==32?null:(Hd=!0,Vd);case"textInput":return e=t.data,e===Vd&&Hd?null:e;default:return null}}function v1(e,t){if(xr)return e==="compositionend"||!uu&&Lm(e,t)?(e=Am(),Ui=su=yn=null,xr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zm&&t.locale!=="ko"?null:t.data;default:return null}}var y1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ud(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!y1[e.type]:t==="textarea"}function Mm(e,t,n,r){hm(r),t=ha(t,"onChange"),0<t.length&&(n=new lu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _o=null,Vo=null;function x1(e){Ym(e,0)}function Ka(e){var t=kr(e);if(lm(t))return e}function w1(e,t){if(e==="change")return t}var Fm=!1;if(rn){var nl;if(rn){var rl="oninput"in document;if(!rl){var Wd=document.createElement("div");Wd.setAttribute("oninput","return;"),rl=typeof Wd.oninput=="function"}nl=rl}else nl=!1;Fm=nl&&(!document.documentMode||9<document.documentMode)}function Bd(){_o&&(_o.detachEvent("onpropertychange",Dm),Vo=_o=null)}function Dm(e){if(e.propertyName==="value"&&Ka(Vo)){var t=[];Mm(t,Vo,e,nu(e)),xm(x1,t)}}function b1(e,t,n){e==="focusin"?(Bd(),_o=t,Vo=n,_o.attachEvent("onpropertychange",Dm)):e==="focusout"&&Bd()}function k1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ka(Vo)}function S1(e,t){if(e==="click")return Ka(t)}function E1(e,t){if(e==="input"||e==="change")return Ka(t)}function C1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var It=typeof Object.is=="function"?Object.is:C1;function Ho(e,t){if(It(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Rl.call(t,o)||!It(e[o],t[o]))return!1}return!0}function Gd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Kd(e,t){var n=Gd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gd(n)}}function Vm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hm(){for(var e=window,t=la();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=la(e.document)}return t}function du(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _1(e){var t=Hm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Vm(n.ownerDocument.documentElement,n)){if(r!==null&&du(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Kd(n,i);var a=Kd(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var j1=rn&&"documentMode"in document&&11>=document.documentMode,wr=null,Jl=null,jo=null,Xl=!1;function qd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xl||wr==null||wr!==la(r)||(r=wr,"selectionStart"in r&&du(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jo&&Ho(jo,r)||(jo=r,r=ha(Jl,"onSelect"),0<r.length&&(t=new lu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=wr)))}function _i(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var br={animationend:_i("Animation","AnimationEnd"),animationiteration:_i("Animation","AnimationIteration"),animationstart:_i("Animation","AnimationStart"),transitionend:_i("Transition","TransitionEnd")},ol={},Um={};rn&&(Um=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function qa(e){if(ol[e])return ol[e];if(!br[e])return e;var t=br[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Um)return ol[e]=t[n];return e}var Wm=qa("animationend"),Bm=qa("animationiteration"),Gm=qa("animationstart"),Km=qa("transitionend"),qm=new Map,Yd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rn(e,t){qm.set(e,t),nr(t,[e])}for(var il=0;il<Yd.length;il++){var al=Yd[il],T1=al.toLowerCase(),P1=al[0].toUpperCase()+al.slice(1);Rn(T1,"on"+P1)}Rn(Wm,"onAnimationEnd");Rn(Bm,"onAnimationIteration");Rn(Gm,"onAnimationStart");Rn("dblclick","onDoubleClick");Rn("focusin","onFocus");Rn("focusout","onBlur");Rn(Km,"onTransitionEnd");Mr("onMouseEnter",["mouseout","mouseover"]);Mr("onMouseLeave",["mouseout","mouseover"]);Mr("onPointerEnter",["pointerout","pointerover"]);Mr("onPointerLeave",["pointerout","pointerover"]);nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$1=new Set("cancel close invalid load scroll toggle".split(" ").concat(wo));function Qd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Tv(r,t,void 0,e),e.currentTarget=null}function Ym(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==i&&o.isPropagationStopped())break e;Qd(o,s,c),i=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,c=s.currentTarget,s=s.listener,l!==i&&o.isPropagationStopped())break e;Qd(o,s,c),i=l}}}if(ua)throw e=Kl,ua=!1,Kl=null,e}function le(e,t){var n=t[rc];n===void 0&&(n=t[rc]=new Set);var r=e+"__bubble";n.has(r)||(Qm(t,e,2,!1),n.add(r))}function sl(e,t,n){var r=0;t&&(r|=4),Qm(n,e,r,t)}var ji="_reactListening"+Math.random().toString(36).slice(2);function Uo(e){if(!e[ji]){e[ji]=!0,rm.forEach(function(n){n!=="selectionchange"&&($1.has(n)||sl(n,!1,e),sl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ji]||(t[ji]=!0,sl("selectionchange",!1,t))}}function Qm(e,t,n,r){switch(Im(t)){case 1:var o=Wv;break;case 4:o=Bv;break;default:o=au}n=o.bind(null,t,n,e),o=void 0,!Gl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ll(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;a=a.return}for(;s!==null;){if(a=Vn(s),a===null)return;if(l=a.tag,l===5||l===6){r=i=a;continue e}s=s.parentNode}}r=r.return}xm(function(){var c=i,u=nu(n),d=[];e:{var p=qm.get(e);if(p!==void 0){var f=lu,g=e;switch(e){case"keypress":if(Wi(n)===0)break e;case"keydown":case"keyup":f=a1;break;case"focusin":g="focus",f=tl;break;case"focusout":g="blur",f=tl;break;case"beforeblur":case"afterblur":f=tl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Md;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=qv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=c1;break;case Wm:case Bm:case Gm:f=Jv;break;case Km:f=d1;break;case"scroll":f=Gv;break;case"wheel":f=f1;break;case"copy":case"cut":case"paste":f=Zv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Dd}var y=(t&4)!==0,b=!y&&e==="scroll",h=y?p!==null?p+"Capture":null:p;y=[];for(var m=c,v;m!==null;){v=m;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,h!==null&&(w=No(m,h),w!=null&&y.push(Wo(m,w,v)))),b)break;m=m.return}0<y.length&&(p=new f(p,g,null,n,u),d.push({event:p,listeners:y}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",p&&n!==Wl&&(g=n.relatedTarget||n.fromElement)&&(Vn(g)||g[on]))break e;if((f||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,f?(g=n.relatedTarget||n.toElement,f=c,g=g?Vn(g):null,g!==null&&(b=rr(g),g!==b||g.tag!==5&&g.tag!==6)&&(g=null)):(f=null,g=c),f!==g)){if(y=Md,w="onMouseLeave",h="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(y=Dd,w="onPointerLeave",h="onPointerEnter",m="pointer"),b=f==null?p:kr(f),v=g==null?p:kr(g),p=new y(w,m+"leave",f,n,u),p.target=b,p.relatedTarget=v,w=null,Vn(u)===c&&(y=new y(h,m+"enter",g,n,u),y.target=v,y.relatedTarget=b,w=y),b=w,f&&g)t:{for(y=f,h=g,m=0,v=y;v;v=lr(v))m++;for(v=0,w=h;w;w=lr(w))v++;for(;0<m-v;)y=lr(y),m--;for(;0<v-m;)h=lr(h),v--;for(;m--;){if(y===h||h!==null&&y===h.alternate)break t;y=lr(y),h=lr(h)}y=null}else y=null;f!==null&&Jd(d,p,f,y,!1),g!==null&&b!==null&&Jd(d,b,g,y,!0)}}e:{if(p=c?kr(c):window,f=p.nodeName&&p.nodeName.toLowerCase(),f==="select"||f==="input"&&p.type==="file")var k=w1;else if(Ud(p))if(Fm)k=E1;else{k=k1;var E=b1}else(f=p.nodeName)&&f.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=S1);if(k&&(k=k(e,c))){Mm(d,k,n,u);break e}E&&E(e,p,c),e==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&Fl(p,"number",p.value)}switch(E=c?kr(c):window,e){case"focusin":(Ud(E)||E.contentEditable==="true")&&(wr=E,Jl=c,jo=null);break;case"focusout":jo=Jl=wr=null;break;case"mousedown":Xl=!0;break;case"contextmenu":case"mouseup":case"dragend":Xl=!1,qd(d,n,u);break;case"selectionchange":if(j1)break;case"keydown":case"keyup":qd(d,n,u)}var S;if(uu)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else xr?Lm(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(zm&&n.locale!=="ko"&&(xr||j!=="onCompositionStart"?j==="onCompositionEnd"&&xr&&(S=Am()):(yn=u,su="value"in yn?yn.value:yn.textContent,xr=!0)),E=ha(c,j),0<E.length&&(j=new Fd(j,e,null,n,u),d.push({event:j,listeners:E}),S?j.data=S:(S=Nm(n),S!==null&&(j.data=S)))),(S=h1?g1(e,n):v1(e,n))&&(c=ha(c,"onBeforeInput"),0<c.length&&(u=new Fd("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=S))}Ym(d,t)})}function Wo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ha(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=No(e,n),i!=null&&r.unshift(Wo(e,i,o)),i=No(e,t),i!=null&&r.push(Wo(e,i,o))),e=e.return}return r}function lr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Jd(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&c!==null&&(s=c,o?(l=No(n,i),l!=null&&a.unshift(Wo(n,l,s))):o||(l=No(n,i),l!=null&&a.push(Wo(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var O1=/\r\n?/g,R1=/\u0000|\uFFFD/g;function Xd(e){return(typeof e=="string"?e:""+e).replace(O1,`
`).replace(R1,"")}function Ti(e,t,n){if(t=Xd(t),Xd(e)!==t&&n)throw Error(R(425))}function ga(){}var Zl=null,ec=null;function tc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var nc=typeof setTimeout=="function"?setTimeout:void 0,I1=typeof clearTimeout=="function"?clearTimeout:void 0,Zd=typeof Promise=="function"?Promise:void 0,A1=typeof queueMicrotask=="function"?queueMicrotask:typeof Zd<"u"?function(e){return Zd.resolve(null).then(e).catch(z1)}:nc;function z1(e){setTimeout(function(){throw e})}function cl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Do(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Do(t)}function Sn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ep(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Zr=Math.random().toString(36).slice(2),Ut="__reactFiber$"+Zr,Bo="__reactProps$"+Zr,on="__reactContainer$"+Zr,rc="__reactEvents$"+Zr,L1="__reactListeners$"+Zr,N1="__reactHandles$"+Zr;function Vn(e){var t=e[Ut];if(t)return t;for(var n=e.parentNode;n;){if(t=n[on]||n[Ut]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ep(e);e!==null;){if(n=e[Ut])return n;e=ep(e)}return t}e=n,n=e.parentNode}return null}function ci(e){return e=e[Ut]||e[on],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function Ya(e){return e[Bo]||null}var oc=[],Sr=-1;function In(e){return{current:e}}function ue(e){0>Sr||(e.current=oc[Sr],oc[Sr]=null,Sr--)}function ae(e,t){Sr++,oc[Sr]=e.current,e.current=t}var $n={},Be=In($n),Xe=In(!1),Yn=$n;function Fr(e,t){var n=e.type.contextTypes;if(!n)return $n;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ze(e){return e=e.childContextTypes,e!=null}function va(){ue(Xe),ue(Be)}function tp(e,t,n){if(Be.current!==$n)throw Error(R(168));ae(Be,t),ae(Xe,n)}function Jm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(R(108,bv(e)||"Unknown",o));return he({},n,r)}function ya(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$n,Yn=Be.current,ae(Be,e),ae(Xe,Xe.current),!0}function np(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=Jm(e,t,Yn),r.__reactInternalMemoizedMergedChildContext=e,ue(Xe),ue(Be),ae(Be,e)):ue(Xe),ae(Xe,n)}var Zt=null,Qa=!1,ul=!1;function Xm(e){Zt===null?Zt=[e]:Zt.push(e)}function M1(e){Qa=!0,Xm(e)}function An(){if(!ul&&Zt!==null){ul=!0;var e=0,t=te;try{var n=Zt;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Zt=null,Qa=!1}catch(o){throw Zt!==null&&(Zt=Zt.slice(e+1)),Sm(ru,An),o}finally{te=t,ul=!1}}return null}var Er=[],Cr=0,xa=null,wa=0,mt=[],ht=0,Qn=null,en=1,tn="";function Nn(e,t){Er[Cr++]=wa,Er[Cr++]=xa,xa=e,wa=t}function Zm(e,t,n){mt[ht++]=en,mt[ht++]=tn,mt[ht++]=Qn,Qn=e;var r=en;e=tn;var o=32-Pt(r)-1;r&=~(1<<o),n+=1;var i=32-Pt(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,en=1<<32-Pt(t)+o|n<<o|r,tn=i+e}else en=1<<i|n<<o|r,tn=e}function pu(e){e.return!==null&&(Nn(e,1),Zm(e,1,0))}function fu(e){for(;e===xa;)xa=Er[--Cr],Er[Cr]=null,wa=Er[--Cr],Er[Cr]=null;for(;e===Qn;)Qn=mt[--ht],mt[ht]=null,tn=mt[--ht],mt[ht]=null,en=mt[--ht],mt[ht]=null}var at=null,it=null,pe=!1,Tt=null;function eh(e,t){var n=vt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function rp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,at=e,it=Sn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,at=e,it=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Qn!==null?{id:en,overflow:tn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=vt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,at=e,it=null,!0):!1;default:return!1}}function ic(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ac(e){if(pe){var t=it;if(t){var n=t;if(!rp(e,t)){if(ic(e))throw Error(R(418));t=Sn(n.nextSibling);var r=at;t&&rp(e,t)?eh(r,n):(e.flags=e.flags&-4097|2,pe=!1,at=e)}}else{if(ic(e))throw Error(R(418));e.flags=e.flags&-4097|2,pe=!1,at=e}}}function op(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;at=e}function Pi(e){if(e!==at)return!1;if(!pe)return op(e),pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!tc(e.type,e.memoizedProps)),t&&(t=it)){if(ic(e))throw th(),Error(R(418));for(;t;)eh(e,t),t=Sn(t.nextSibling)}if(op(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){it=Sn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}it=null}}else it=at?Sn(e.stateNode.nextSibling):null;return!0}function th(){for(var e=it;e;)e=Sn(e.nextSibling)}function Dr(){it=at=null,pe=!1}function mu(e){Tt===null?Tt=[e]:Tt.push(e)}var F1=un.ReactCurrentBatchConfig;function uo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=o.refs;a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function $i(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ip(e){var t=e._init;return t(e._payload)}function nh(e){function t(h,m){if(e){var v=h.deletions;v===null?(h.deletions=[m],h.flags|=16):v.push(m)}}function n(h,m){if(!e)return null;for(;m!==null;)t(h,m),m=m.sibling;return null}function r(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function o(h,m){return h=jn(h,m),h.index=0,h.sibling=null,h}function i(h,m,v){return h.index=v,e?(v=h.alternate,v!==null?(v=v.index,v<m?(h.flags|=2,m):v):(h.flags|=2,m)):(h.flags|=1048576,m)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,m,v,w){return m===null||m.tag!==6?(m=vl(v,h.mode,w),m.return=h,m):(m=o(m,v),m.return=h,m)}function l(h,m,v,w){var k=v.type;return k===yr?u(h,m,v.props.children,w,v.key):m!==null&&(m.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===fn&&ip(k)===m.type)?(w=o(m,v.props),w.ref=uo(h,m,v),w.return=h,w):(w=Ji(v.type,v.key,v.props,null,h.mode,w),w.ref=uo(h,m,v),w.return=h,w)}function c(h,m,v,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=yl(v,h.mode,w),m.return=h,m):(m=o(m,v.children||[]),m.return=h,m)}function u(h,m,v,w,k){return m===null||m.tag!==7?(m=Kn(v,h.mode,w,k),m.return=h,m):(m=o(m,v),m.return=h,m)}function d(h,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=vl(""+m,h.mode,v),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case xi:return v=Ji(m.type,m.key,m.props,null,h.mode,v),v.ref=uo(h,null,m),v.return=h,v;case vr:return m=yl(m,h.mode,v),m.return=h,m;case fn:var w=m._init;return d(h,w(m._payload),v)}if(yo(m)||io(m))return m=Kn(m,h.mode,v,null),m.return=h,m;$i(h,m)}return null}function p(h,m,v,w){var k=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return k!==null?null:s(h,m,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case xi:return v.key===k?l(h,m,v,w):null;case vr:return v.key===k?c(h,m,v,w):null;case fn:return k=v._init,p(h,m,k(v._payload),w)}if(yo(v)||io(v))return k!==null?null:u(h,m,v,w,null);$i(h,v)}return null}function f(h,m,v,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(v)||null,s(m,h,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case xi:return h=h.get(w.key===null?v:w.key)||null,l(m,h,w,k);case vr:return h=h.get(w.key===null?v:w.key)||null,c(m,h,w,k);case fn:var E=w._init;return f(h,m,v,E(w._payload),k)}if(yo(w)||io(w))return h=h.get(v)||null,u(m,h,w,k,null);$i(m,w)}return null}function g(h,m,v,w){for(var k=null,E=null,S=m,j=m=0,z=null;S!==null&&j<v.length;j++){S.index>j?(z=S,S=null):z=S.sibling;var O=p(h,S,v[j],w);if(O===null){S===null&&(S=z);break}e&&S&&O.alternate===null&&t(h,S),m=i(O,m,j),E===null?k=O:E.sibling=O,E=O,S=z}if(j===v.length)return n(h,S),pe&&Nn(h,j),k;if(S===null){for(;j<v.length;j++)S=d(h,v[j],w),S!==null&&(m=i(S,m,j),E===null?k=S:E.sibling=S,E=S);return pe&&Nn(h,j),k}for(S=r(h,S);j<v.length;j++)z=f(S,h,j,v[j],w),z!==null&&(e&&z.alternate!==null&&S.delete(z.key===null?j:z.key),m=i(z,m,j),E===null?k=z:E.sibling=z,E=z);return e&&S.forEach(function(I){return t(h,I)}),pe&&Nn(h,j),k}function y(h,m,v,w){var k=io(v);if(typeof k!="function")throw Error(R(150));if(v=k.call(v),v==null)throw Error(R(151));for(var E=k=null,S=m,j=m=0,z=null,O=v.next();S!==null&&!O.done;j++,O=v.next()){S.index>j?(z=S,S=null):z=S.sibling;var I=p(h,S,O.value,w);if(I===null){S===null&&(S=z);break}e&&S&&I.alternate===null&&t(h,S),m=i(I,m,j),E===null?k=I:E.sibling=I,E=I,S=z}if(O.done)return n(h,S),pe&&Nn(h,j),k;if(S===null){for(;!O.done;j++,O=v.next())O=d(h,O.value,w),O!==null&&(m=i(O,m,j),E===null?k=O:E.sibling=O,E=O);return pe&&Nn(h,j),k}for(S=r(h,S);!O.done;j++,O=v.next())O=f(S,h,j,O.value,w),O!==null&&(e&&O.alternate!==null&&S.delete(O.key===null?j:O.key),m=i(O,m,j),E===null?k=O:E.sibling=O,E=O);return e&&S.forEach(function(M){return t(h,M)}),pe&&Nn(h,j),k}function b(h,m,v,w){if(typeof v=="object"&&v!==null&&v.type===yr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case xi:e:{for(var k=v.key,E=m;E!==null;){if(E.key===k){if(k=v.type,k===yr){if(E.tag===7){n(h,E.sibling),m=o(E,v.props.children),m.return=h,h=m;break e}}else if(E.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===fn&&ip(k)===E.type){n(h,E.sibling),m=o(E,v.props),m.ref=uo(h,E,v),m.return=h,h=m;break e}n(h,E);break}else t(h,E);E=E.sibling}v.type===yr?(m=Kn(v.props.children,h.mode,w,v.key),m.return=h,h=m):(w=Ji(v.type,v.key,v.props,null,h.mode,w),w.ref=uo(h,m,v),w.return=h,h=w)}return a(h);case vr:e:{for(E=v.key;m!==null;){if(m.key===E)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(h,m.sibling),m=o(m,v.children||[]),m.return=h,h=m;break e}else{n(h,m);break}else t(h,m);m=m.sibling}m=yl(v,h.mode,w),m.return=h,h=m}return a(h);case fn:return E=v._init,b(h,m,E(v._payload),w)}if(yo(v))return g(h,m,v,w);if(io(v))return y(h,m,v,w);$i(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(h,m.sibling),m=o(m,v),m.return=h,h=m):(n(h,m),m=vl(v,h.mode,w),m.return=h,h=m),a(h)):n(h,m)}return b}var Vr=nh(!0),rh=nh(!1),ba=In(null),ka=null,_r=null,hu=null;function gu(){hu=_r=ka=null}function vu(e){var t=ba.current;ue(ba),e._currentValue=t}function sc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ar(e,t){ka=e,hu=_r=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Je=!0),e.firstContext=null)}function xt(e){var t=e._currentValue;if(hu!==e)if(e={context:e,memoizedValue:t,next:null},_r===null){if(ka===null)throw Error(R(308));_r=e,ka.dependencies={lanes:0,firstContext:e}}else _r=_r.next=e;return t}var Hn=null;function yu(e){Hn===null?Hn=[e]:Hn.push(e)}function oh(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,yu(t)):(n.next=o.next,o.next=n),t.interleaved=n,an(e,r)}function an(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var mn=!1;function xu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ih(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function En(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,an(e,n)}return o=r.interleaved,o===null?(t.next=t,yu(r)):(t.next=o.next,o.next=t),r.interleaved=t,an(e,n)}function Bi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ou(e,n)}}function ap(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Sa(e,t,n,r){var o=e.updateQueue;mn=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var l=s,c=l.next;l.next=null,a===null?i=c:a.next=c,a=l;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==a&&(s===null?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(i!==null){var d=o.baseState;a=0,u=c=l=null,s=i;do{var p=s.lane,f=s.eventTime;if((r&p)===p){u!==null&&(u=u.next={eventTime:f,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,y=s;switch(p=t,f=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){d=g.call(f,d,p);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,p=typeof g=="function"?g.call(f,d,p):g,p==null)break e;d=he({},d,p);break e;case 2:mn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[s]:p.push(s))}else f={eventTime:f,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(c=u=f,l=d):u=u.next=f,a|=p;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;p=s,s=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(u===null&&(l=d),o.baseState=l,o.firstBaseUpdate=c,o.lastBaseUpdate=u,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Xn|=a,e.lanes=a,e.memoizedState=d}}function sp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(R(191,o));o.call(r)}}}var ui={},Bt=In(ui),Go=In(ui),Ko=In(ui);function Un(e){if(e===ui)throw Error(R(174));return e}function wu(e,t){switch(ae(Ko,t),ae(Go,e),ae(Bt,ui),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Vl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Vl(t,e)}ue(Bt),ae(Bt,t)}function Hr(){ue(Bt),ue(Go),ue(Ko)}function ah(e){Un(Ko.current);var t=Un(Bt.current),n=Vl(t,e.type);t!==n&&(ae(Go,e),ae(Bt,n))}function bu(e){Go.current===e&&(ue(Bt),ue(Go))}var fe=In(0);function Ea(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var dl=[];function ku(){for(var e=0;e<dl.length;e++)dl[e]._workInProgressVersionPrimary=null;dl.length=0}var Gi=un.ReactCurrentDispatcher,pl=un.ReactCurrentBatchConfig,Jn=0,me=null,je=null,Oe=null,Ca=!1,To=!1,qo=0,D1=0;function Ve(){throw Error(R(321))}function Su(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!It(e[n],t[n]))return!1;return!0}function Eu(e,t,n,r,o,i){if(Jn=i,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gi.current=e===null||e.memoizedState===null?W1:B1,e=n(r,o),To){i=0;do{if(To=!1,qo=0,25<=i)throw Error(R(301));i+=1,Oe=je=null,t.updateQueue=null,Gi.current=G1,e=n(r,o)}while(To)}if(Gi.current=_a,t=je!==null&&je.next!==null,Jn=0,Oe=je=me=null,Ca=!1,t)throw Error(R(300));return e}function Cu(){var e=qo!==0;return qo=0,e}function Ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?me.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function wt(){if(je===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=Oe===null?me.memoizedState:Oe.next;if(t!==null)Oe=t,je=e;else{if(e===null)throw Error(R(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Oe===null?me.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function Yo(e,t){return typeof t=="function"?t(e):t}function fl(e){var t=wt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=je,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=a=null,l=null,c=i;do{var u=c.lane;if((Jn&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=d,a=r):l=l.next=d,me.lanes|=u,Xn|=u}c=c.next}while(c!==null&&c!==i);l===null?a=r:l.next=s,It(r,t.memoizedState)||(Je=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,me.lanes|=i,Xn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ml(e){var t=wt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);It(i,t.memoizedState)||(Je=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function sh(){}function lh(e,t){var n=me,r=wt(),o=t(),i=!It(r.memoizedState,o);if(i&&(r.memoizedState=o,Je=!0),r=r.queue,_u(dh.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Oe!==null&&Oe.memoizedState.tag&1){if(n.flags|=2048,Qo(9,uh.bind(null,n,r,o,t),void 0,null),Ae===null)throw Error(R(349));Jn&30||ch(n,t,o)}return o}function ch(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function uh(e,t,n,r){t.value=n,t.getSnapshot=r,ph(t)&&fh(e)}function dh(e,t,n){return n(function(){ph(t)&&fh(e)})}function ph(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!It(e,n)}catch{return!0}}function fh(e){var t=an(e,1);t!==null&&$t(t,e,1,-1)}function lp(e){var t=Ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yo,lastRenderedState:e},t.queue=e,e=e.dispatch=U1.bind(null,me,e),[t.memoizedState,e]}function Qo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function mh(){return wt().memoizedState}function Ki(e,t,n,r){var o=Ft();me.flags|=e,o.memoizedState=Qo(1|t,n,void 0,r===void 0?null:r)}function Ja(e,t,n,r){var o=wt();r=r===void 0?null:r;var i=void 0;if(je!==null){var a=je.memoizedState;if(i=a.destroy,r!==null&&Su(r,a.deps)){o.memoizedState=Qo(t,n,i,r);return}}me.flags|=e,o.memoizedState=Qo(1|t,n,i,r)}function cp(e,t){return Ki(8390656,8,e,t)}function _u(e,t){return Ja(2048,8,e,t)}function hh(e,t){return Ja(4,2,e,t)}function gh(e,t){return Ja(4,4,e,t)}function vh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yh(e,t,n){return n=n!=null?n.concat([e]):null,Ja(4,4,vh.bind(null,t,e),n)}function ju(){}function xh(e,t){var n=wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Su(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function wh(e,t){var n=wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Su(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function bh(e,t,n){return Jn&21?(It(n,t)||(n=_m(),me.lanes|=n,Xn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Je=!0),e.memoizedState=n)}function V1(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=pl.transition;pl.transition={};try{e(!1),t()}finally{te=n,pl.transition=r}}function kh(){return wt().memoizedState}function H1(e,t,n){var r=_n(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Sh(e))Eh(t,n);else if(n=oh(e,t,n,r),n!==null){var o=Ke();$t(n,e,r,o),Ch(n,t,r)}}function U1(e,t,n){var r=_n(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sh(e))Eh(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,It(s,a)){var l=t.interleaved;l===null?(o.next=o,yu(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=oh(e,t,o,r),n!==null&&(o=Ke(),$t(n,e,r,o),Ch(n,t,r))}}function Sh(e){var t=e.alternate;return e===me||t!==null&&t===me}function Eh(e,t){To=Ca=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ch(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ou(e,n)}}var _a={readContext:xt,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useInsertionEffect:Ve,useLayoutEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useMutableSource:Ve,useSyncExternalStore:Ve,useId:Ve,unstable_isNewReconciler:!1},W1={readContext:xt,useCallback:function(e,t){return Ft().memoizedState=[e,t===void 0?null:t],e},useContext:xt,useEffect:cp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ki(4194308,4,vh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ki(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ki(4,2,e,t)},useMemo:function(e,t){var n=Ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=H1.bind(null,me,e),[r.memoizedState,e]},useRef:function(e){var t=Ft();return e={current:e},t.memoizedState=e},useState:lp,useDebugValue:ju,useDeferredValue:function(e){return Ft().memoizedState=e},useTransition:function(){var e=lp(!1),t=e[0];return e=V1.bind(null,e[1]),Ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=me,o=Ft();if(pe){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),Ae===null)throw Error(R(349));Jn&30||ch(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,cp(dh.bind(null,r,i,e),[e]),r.flags|=2048,Qo(9,uh.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ft(),t=Ae.identifierPrefix;if(pe){var n=tn,r=en;n=(r&~(1<<32-Pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=qo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=D1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},B1={readContext:xt,useCallback:xh,useContext:xt,useEffect:_u,useImperativeHandle:yh,useInsertionEffect:hh,useLayoutEffect:gh,useMemo:wh,useReducer:fl,useRef:mh,useState:function(){return fl(Yo)},useDebugValue:ju,useDeferredValue:function(e){var t=wt();return bh(t,je.memoizedState,e)},useTransition:function(){var e=fl(Yo)[0],t=wt().memoizedState;return[e,t]},useMutableSource:sh,useSyncExternalStore:lh,useId:kh,unstable_isNewReconciler:!1},G1={readContext:xt,useCallback:xh,useContext:xt,useEffect:_u,useImperativeHandle:yh,useInsertionEffect:hh,useLayoutEffect:gh,useMemo:wh,useReducer:ml,useRef:mh,useState:function(){return ml(Yo)},useDebugValue:ju,useDeferredValue:function(e){var t=wt();return je===null?t.memoizedState=e:bh(t,je.memoizedState,e)},useTransition:function(){var e=ml(Yo)[0],t=wt().memoizedState;return[e,t]},useMutableSource:sh,useSyncExternalStore:lh,useId:kh,unstable_isNewReconciler:!1};function _t(e,t){if(e&&e.defaultProps){t=he({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function lc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:he({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Xa={isMounted:function(e){return(e=e._reactInternals)?rr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ke(),o=_n(e),i=nn(r,o);i.payload=t,n!=null&&(i.callback=n),t=En(e,i,o),t!==null&&($t(t,e,o,r),Bi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ke(),o=_n(e),i=nn(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=En(e,i,o),t!==null&&($t(t,e,o,r),Bi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ke(),r=_n(e),o=nn(n,r);o.tag=2,t!=null&&(o.callback=t),t=En(e,o,r),t!==null&&($t(t,e,r,n),Bi(t,e,r))}};function up(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Ho(n,r)||!Ho(o,i):!0}function _h(e,t,n){var r=!1,o=$n,i=t.contextType;return typeof i=="object"&&i!==null?i=xt(i):(o=Ze(t)?Yn:Be.current,r=t.contextTypes,i=(r=r!=null)?Fr(e,o):$n),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Xa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function dp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Xa.enqueueReplaceState(t,t.state,null)}function cc(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},xu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=xt(i):(i=Ze(t)?Yn:Be.current,o.context=Fr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(lc(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Xa.enqueueReplaceState(o,o.state,null),Sa(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Ur(e,t){try{var n="",r=t;do n+=wv(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function hl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function uc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var K1=typeof WeakMap=="function"?WeakMap:Map;function jh(e,t,n){n=nn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ta||(Ta=!0,wc=r),uc(e,t)},n}function Th(e,t,n){n=nn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){uc(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){uc(e,t),typeof r!="function"&&(Cn===null?Cn=new Set([this]):Cn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function pp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new K1;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=sy.bind(null,e,t,n),t.then(e,e))}function fp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function mp(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=nn(-1,1),t.tag=2,En(n,t,1))),n.lanes|=1),e)}var q1=un.ReactCurrentOwner,Je=!1;function Ge(e,t,n,r){t.child=e===null?rh(t,null,n,r):Vr(t,e.child,n,r)}function hp(e,t,n,r,o){n=n.render;var i=t.ref;return Ar(t,o),r=Eu(e,t,n,r,i,o),n=Cu(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,sn(e,t,o)):(pe&&n&&pu(t),t.flags|=1,Ge(e,t,r,o),t.child)}function gp(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!zu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Ph(e,t,i,r,o)):(e=Ji(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ho,n(a,r)&&e.ref===t.ref)return sn(e,t,o)}return t.flags|=1,e=jn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Ph(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Ho(i,r)&&e.ref===t.ref)if(Je=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Je=!0);else return t.lanes=e.lanes,sn(e,t,o)}return dc(e,t,n,r,o)}function $h(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(Tr,rt),rt|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ae(Tr,rt),rt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ae(Tr,rt),rt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ae(Tr,rt),rt|=r;return Ge(e,t,o,n),t.child}function Oh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function dc(e,t,n,r,o){var i=Ze(n)?Yn:Be.current;return i=Fr(t,i),Ar(t,o),n=Eu(e,t,n,r,i,o),r=Cu(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,sn(e,t,o)):(pe&&r&&pu(t),t.flags|=1,Ge(e,t,n,o),t.child)}function vp(e,t,n,r,o){if(Ze(n)){var i=!0;ya(t)}else i=!1;if(Ar(t,o),t.stateNode===null)qi(e,t),_h(t,n,r),cc(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=xt(c):(c=Ze(n)?Yn:Be.current,c=Fr(t,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==c)&&dp(t,a,r,c),mn=!1;var p=t.memoizedState;a.state=p,Sa(t,r,a,o),l=t.memoizedState,s!==r||p!==l||Xe.current||mn?(typeof u=="function"&&(lc(t,n,u,r),l=t.memoizedState),(s=mn||up(t,n,s,r,p,l,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=c,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,ih(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:_t(t.type,s),a.props=c,d=t.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=xt(l):(l=Ze(n)?Yn:Be.current,l=Fr(t,l));var f=n.getDerivedStateFromProps;(u=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==d||p!==l)&&dp(t,a,r,l),mn=!1,p=t.memoizedState,a.state=p,Sa(t,r,a,o);var g=t.memoizedState;s!==d||p!==g||Xe.current||mn?(typeof f=="function"&&(lc(t,n,f,r),g=t.memoizedState),(c=mn||up(t,n,c,r,p,g,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=l,r=c):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return pc(e,t,n,r,i,o)}function pc(e,t,n,r,o,i){Oh(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&np(t,n,!1),sn(e,t,i);r=t.stateNode,q1.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Vr(t,e.child,null,i),t.child=Vr(t,null,s,i)):Ge(e,t,s,i),t.memoizedState=r.state,o&&np(t,n,!0),t.child}function Rh(e){var t=e.stateNode;t.pendingContext?tp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&tp(e,t.context,!1),wu(e,t.containerInfo)}function yp(e,t,n,r,o){return Dr(),mu(o),t.flags|=256,Ge(e,t,n,r),t.child}var fc={dehydrated:null,treeContext:null,retryLane:0};function mc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ih(e,t,n){var r=t.pendingProps,o=fe.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ae(fe,o&1),e===null)return ac(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=ts(a,r,0,null),e=Kn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=mc(n),t.memoizedState=fc,e):Tu(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Y1(e,t,a,r,s,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,s=o.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=jn(o,l),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=jn(s,i):(i=Kn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?mc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=fc,r}return i=e.child,e=i.sibling,r=jn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Tu(e,t){return t=ts({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Oi(e,t,n,r){return r!==null&&mu(r),Vr(t,e.child,null,n),e=Tu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Y1(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=hl(Error(R(422))),Oi(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=ts({mode:"visible",children:r.children},o,0,null),i=Kn(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Vr(t,e.child,null,a),t.child.memoizedState=mc(a),t.memoizedState=fc,i);if(!(t.mode&1))return Oi(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(R(419)),r=hl(i,r,void 0),Oi(e,t,a,r)}if(s=(a&e.childLanes)!==0,Je||s){if(r=Ae,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,an(e,o),$t(r,e,o,-1))}return Au(),r=hl(Error(R(421))),Oi(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=ly.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,it=Sn(o.nextSibling),at=t,pe=!0,Tt=null,e!==null&&(mt[ht++]=en,mt[ht++]=tn,mt[ht++]=Qn,en=e.id,tn=e.overflow,Qn=t),t=Tu(t,r.children),t.flags|=4096,t)}function xp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),sc(e.return,t,n)}function gl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Ah(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ge(e,t,r.children,n),r=fe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xp(e,n,t);else if(e.tag===19)xp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ae(fe,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ea(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),gl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ea(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}gl(t,!0,n,null,i);break;case"together":gl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function sn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=jn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=jn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Q1(e,t,n){switch(t.tag){case 3:Rh(t),Dr();break;case 5:ah(t);break;case 1:Ze(t.type)&&ya(t);break;case 4:wu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ae(ba,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ae(fe,fe.current&1),t.flags|=128,null):n&t.child.childLanes?Ih(e,t,n):(ae(fe,fe.current&1),e=sn(e,t,n),e!==null?e.sibling:null);ae(fe,fe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ah(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ae(fe,fe.current),r)break;return null;case 22:case 23:return t.lanes=0,$h(e,t,n)}return sn(e,t,n)}var zh,hc,Lh,Nh;zh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hc=function(){};Lh=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Un(Bt.current);var i=null;switch(n){case"input":o=Nl(e,o),r=Nl(e,r),i=[];break;case"select":o=he({},o,{value:void 0}),r=he({},r,{value:void 0}),i=[];break;case"textarea":o=Dl(e,o),r=Dl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ga)}Hl(n,r);var a;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(zo.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var l=r[c];if(s=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(i||(i=[]),i.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(i=i||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(zo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&le("scroll",e),i||s===l||(i=[])):(i=i||[]).push(c,l))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Nh=function(e,t,n,r){n!==r&&(t.flags|=4)};function po(e,t){if(!pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function J1(e,t,n){var r=t.pendingProps;switch(fu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return Ze(t.type)&&va(),He(t),null;case 3:return r=t.stateNode,Hr(),ue(Xe),ue(Be),ku(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Pi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Tt!==null&&(Sc(Tt),Tt=null))),hc(e,t),He(t),null;case 5:bu(t);var o=Un(Ko.current);if(n=t.type,e!==null&&t.stateNode!=null)Lh(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return He(t),null}if(e=Un(Bt.current),Pi(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ut]=t,r[Bo]=i,e=(t.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(o=0;o<wo.length;o++)le(wo[o],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":Td(r,i),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},le("invalid",r);break;case"textarea":$d(r,i),le("invalid",r)}Hl(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Ti(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Ti(r.textContent,s,e),o=["children",""+s]):zo.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&le("scroll",r)}switch(n){case"input":wi(r),Pd(r,i,!0);break;case"textarea":wi(r),Od(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ga)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=dm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ut]=t,e[Bo]=r,zh(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ul(n,r),n){case"dialog":le("cancel",e),le("close",e),o=r;break;case"iframe":case"object":case"embed":le("load",e),o=r;break;case"video":case"audio":for(o=0;o<wo.length;o++)le(wo[o],e);o=r;break;case"source":le("error",e),o=r;break;case"img":case"image":case"link":le("error",e),le("load",e),o=r;break;case"details":le("toggle",e),o=r;break;case"input":Td(e,r),o=Nl(e,r),le("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=he({},r,{value:void 0}),le("invalid",e);break;case"textarea":$d(e,r),o=Dl(e,r),le("invalid",e);break;default:o=r}Hl(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="style"?mm(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&pm(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Lo(e,l):typeof l=="number"&&Lo(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(zo.hasOwnProperty(i)?l!=null&&i==="onScroll"&&le("scroll",e):l!=null&&Xc(e,i,l,a))}switch(n){case"input":wi(e),Pd(e,r,!1);break;case"textarea":wi(e),Od(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Pn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?$r(e,!!r.multiple,i,!1):r.defaultValue!=null&&$r(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ga)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return He(t),null;case 6:if(e&&t.stateNode!=null)Nh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=Un(Ko.current),Un(Bt.current),Pi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ut]=t,(i=r.nodeValue!==n)&&(e=at,e!==null))switch(e.tag){case 3:Ti(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ti(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ut]=t,t.stateNode=r}return He(t),null;case 13:if(ue(fe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(pe&&it!==null&&t.mode&1&&!(t.flags&128))th(),Dr(),t.flags|=98560,i=!1;else if(i=Pi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(R(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(R(317));i[Ut]=t}else Dr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;He(t),i=!1}else Tt!==null&&(Sc(Tt),Tt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||fe.current&1?Te===0&&(Te=3):Au())),t.updateQueue!==null&&(t.flags|=4),He(t),null);case 4:return Hr(),hc(e,t),e===null&&Uo(t.stateNode.containerInfo),He(t),null;case 10:return vu(t.type._context),He(t),null;case 17:return Ze(t.type)&&va(),He(t),null;case 19:if(ue(fe),i=t.memoizedState,i===null)return He(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)po(i,!1);else{if(Te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ea(e),a!==null){for(t.flags|=128,po(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ae(fe,fe.current&1|2),t.child}e=e.sibling}i.tail!==null&&we()>Wr&&(t.flags|=128,r=!0,po(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ea(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),po(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!pe)return He(t),null}else 2*we()-i.renderingStartTime>Wr&&n!==1073741824&&(t.flags|=128,r=!0,po(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=we(),t.sibling=null,n=fe.current,ae(fe,r?n&1|2:n&1),t):(He(t),null);case 22:case 23:return Iu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?rt&1073741824&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function X1(e,t){switch(fu(t),t.tag){case 1:return Ze(t.type)&&va(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hr(),ue(Xe),ue(Be),ku(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return bu(t),null;case 13:if(ue(fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));Dr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ue(fe),null;case 4:return Hr(),null;case 10:return vu(t.type._context),null;case 22:case 23:return Iu(),null;case 24:return null;default:return null}}var Ri=!1,We=!1,Z1=typeof WeakSet=="function"?WeakSet:Set,U=null;function jr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ye(e,t,r)}else n.current=null}function gc(e,t,n){try{n()}catch(r){ye(e,t,r)}}var wp=!1;function ey(e,t){if(Zl=fa,e=Hm(),du(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,c=0,u=0,d=e,p=null;t:for(;;){for(var f;d!==n||o!==0&&d.nodeType!==3||(s=a+o),d!==i||r!==0&&d.nodeType!==3||(l=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(f=d.firstChild)!==null;)p=d,d=f;for(;;){if(d===e)break t;if(p===n&&++c===o&&(s=a),p===i&&++u===r&&(l=a),(f=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=f}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ec={focusedElem:e,selectionRange:n},fa=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,b=g.memoizedState,h=t.stateNode,m=h.getSnapshotBeforeUpdate(t.elementType===t.type?y:_t(t.type,y),b);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(w){ye(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return g=wp,wp=!1,g}function Po(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&gc(t,n,i)}o=o.next}while(o!==r)}}function Za(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function vc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Mh(e){var t=e.alternate;t!==null&&(e.alternate=null,Mh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ut],delete t[Bo],delete t[rc],delete t[L1],delete t[N1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fh(e){return e.tag===5||e.tag===3||e.tag===4}function bp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ga));else if(r!==4&&(e=e.child,e!==null))for(yc(e,t,n),e=e.sibling;e!==null;)yc(e,t,n),e=e.sibling}function xc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(xc(e,t,n),e=e.sibling;e!==null;)xc(e,t,n),e=e.sibling}var Ne=null,jt=!1;function dn(e,t,n){for(n=n.child;n!==null;)Dh(e,t,n),n=n.sibling}function Dh(e,t,n){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(Ba,n)}catch{}switch(n.tag){case 5:We||jr(n,t);case 6:var r=Ne,o=jt;Ne=null,dn(e,t,n),Ne=r,jt=o,Ne!==null&&(jt?(e=Ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(jt?(e=Ne,n=n.stateNode,e.nodeType===8?cl(e.parentNode,n):e.nodeType===1&&cl(e,n),Do(e)):cl(Ne,n.stateNode));break;case 4:r=Ne,o=jt,Ne=n.stateNode.containerInfo,jt=!0,dn(e,t,n),Ne=r,jt=o;break;case 0:case 11:case 14:case 15:if(!We&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&gc(n,t,a),o=o.next}while(o!==r)}dn(e,t,n);break;case 1:if(!We&&(jr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ye(n,t,s)}dn(e,t,n);break;case 21:dn(e,t,n);break;case 22:n.mode&1?(We=(r=We)||n.memoizedState!==null,dn(e,t,n),We=r):dn(e,t,n);break;default:dn(e,t,n)}}function kp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Z1),t.forEach(function(r){var o=cy.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Ne=s.stateNode,jt=!1;break e;case 3:Ne=s.stateNode.containerInfo,jt=!0;break e;case 4:Ne=s.stateNode.containerInfo,jt=!0;break e}s=s.return}if(Ne===null)throw Error(R(160));Dh(i,a,o),Ne=null,jt=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(c){ye(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Vh(t,e),t=t.sibling}function Vh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ct(t,e),Mt(e),r&4){try{Po(3,e,e.return),Za(3,e)}catch(y){ye(e,e.return,y)}try{Po(5,e,e.return)}catch(y){ye(e,e.return,y)}}break;case 1:Ct(t,e),Mt(e),r&512&&n!==null&&jr(n,n.return);break;case 5:if(Ct(t,e),Mt(e),r&512&&n!==null&&jr(n,n.return),e.flags&32){var o=e.stateNode;try{Lo(o,"")}catch(y){ye(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&cm(o,i),Ul(s,a);var c=Ul(s,i);for(a=0;a<l.length;a+=2){var u=l[a],d=l[a+1];u==="style"?mm(o,d):u==="dangerouslySetInnerHTML"?pm(o,d):u==="children"?Lo(o,d):Xc(o,u,d,c)}switch(s){case"input":Ml(o,i);break;case"textarea":um(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var f=i.value;f!=null?$r(o,!!i.multiple,f,!1):p!==!!i.multiple&&(i.defaultValue!=null?$r(o,!!i.multiple,i.defaultValue,!0):$r(o,!!i.multiple,i.multiple?[]:"",!1))}o[Bo]=i}catch(y){ye(e,e.return,y)}}break;case 6:if(Ct(t,e),Mt(e),r&4){if(e.stateNode===null)throw Error(R(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){ye(e,e.return,y)}}break;case 3:if(Ct(t,e),Mt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Do(t.containerInfo)}catch(y){ye(e,e.return,y)}break;case 4:Ct(t,e),Mt(e);break;case 13:Ct(t,e),Mt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ou=we())),r&4&&kp(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(We=(c=We)||u,Ct(t,e),We=c):Ct(t,e),Mt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(U=e,u=e.child;u!==null;){for(d=U=u;U!==null;){switch(p=U,f=p.child,p.tag){case 0:case 11:case 14:case 15:Po(4,p,p.return);break;case 1:jr(p,p.return);var g=p.stateNode;if(typeof g.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){ye(r,n,y)}}break;case 5:jr(p,p.return);break;case 22:if(p.memoizedState!==null){Ep(d);continue}}f!==null?(f.return=p,U=f):Ep(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{o=d.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=fm("display",a))}catch(y){ye(e,e.return,y)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){ye(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ct(t,e),Mt(e),r&4&&kp(e);break;case 21:break;default:Ct(t,e),Mt(e)}}function Mt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Fh(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Lo(o,""),r.flags&=-33);var i=bp(e);xc(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=bp(e);yc(e,s,a);break;default:throw Error(R(161))}}catch(l){ye(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ty(e,t,n){U=e,Hh(e)}function Hh(e,t,n){for(var r=(e.mode&1)!==0;U!==null;){var o=U,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Ri;if(!a){var s=o.alternate,l=s!==null&&s.memoizedState!==null||We;s=Ri;var c=We;if(Ri=a,(We=l)&&!c)for(U=o;U!==null;)a=U,l=a.child,a.tag===22&&a.memoizedState!==null?Cp(o):l!==null?(l.return=a,U=l):Cp(o);for(;i!==null;)U=i,Hh(i),i=i.sibling;U=o,Ri=s,We=c}Sp(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,U=i):Sp(e)}}function Sp(e){for(;U!==null;){var t=U;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:We||Za(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!We)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:_t(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&sp(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}sp(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Do(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}We||t.flags&512&&vc(t)}catch(p){ye(t,t.return,p)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function Ep(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function Cp(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Za(4,t)}catch(l){ye(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){ye(t,o,l)}}var i=t.return;try{vc(t)}catch(l){ye(t,i,l)}break;case 5:var a=t.return;try{vc(t)}catch(l){ye(t,a,l)}}}catch(l){ye(t,t.return,l)}if(t===e){U=null;break}var s=t.sibling;if(s!==null){s.return=t.return,U=s;break}U=t.return}}var ny=Math.ceil,ja=un.ReactCurrentDispatcher,Pu=un.ReactCurrentOwner,yt=un.ReactCurrentBatchConfig,Q=0,Ae=null,Ce=null,Fe=0,rt=0,Tr=In(0),Te=0,Jo=null,Xn=0,es=0,$u=0,$o=null,Qe=null,Ou=0,Wr=1/0,Jt=null,Ta=!1,wc=null,Cn=null,Ii=!1,xn=null,Pa=0,Oo=0,bc=null,Yi=-1,Qi=0;function Ke(){return Q&6?we():Yi!==-1?Yi:Yi=we()}function _n(e){return e.mode&1?Q&2&&Fe!==0?Fe&-Fe:F1.transition!==null?(Qi===0&&(Qi=_m()),Qi):(e=te,e!==0||(e=window.event,e=e===void 0?16:Im(e.type)),e):1}function $t(e,t,n,r){if(50<Oo)throw Oo=0,bc=null,Error(R(185));si(e,n,r),(!(Q&2)||e!==Ae)&&(e===Ae&&(!(Q&2)&&(es|=n),Te===4&&gn(e,Fe)),et(e,r),n===1&&Q===0&&!(t.mode&1)&&(Wr=we()+500,Qa&&An()))}function et(e,t){var n=e.callbackNode;Fv(e,t);var r=pa(e,e===Ae?Fe:0);if(r===0)n!==null&&Ad(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ad(n),t===1)e.tag===0?M1(_p.bind(null,e)):Xm(_p.bind(null,e)),A1(function(){!(Q&6)&&An()}),n=null;else{switch(jm(r)){case 1:n=ru;break;case 4:n=Em;break;case 16:n=da;break;case 536870912:n=Cm;break;default:n=da}n=Qh(n,Uh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Uh(e,t){if(Yi=-1,Qi=0,Q&6)throw Error(R(327));var n=e.callbackNode;if(zr()&&e.callbackNode!==n)return null;var r=pa(e,e===Ae?Fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=$a(e,r);else{t=r;var o=Q;Q|=2;var i=Bh();(Ae!==e||Fe!==t)&&(Jt=null,Wr=we()+500,Gn(e,t));do try{iy();break}catch(s){Wh(e,s)}while(!0);gu(),ja.current=i,Q=o,Ce!==null?t=0:(Ae=null,Fe=0,t=Te)}if(t!==0){if(t===2&&(o=ql(e),o!==0&&(r=o,t=kc(e,o))),t===1)throw n=Jo,Gn(e,0),gn(e,r),et(e,we()),n;if(t===6)gn(e,r);else{if(o=e.current.alternate,!(r&30)&&!ry(o)&&(t=$a(e,r),t===2&&(i=ql(e),i!==0&&(r=i,t=kc(e,i))),t===1))throw n=Jo,Gn(e,0),gn(e,r),et(e,we()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:Mn(e,Qe,Jt);break;case 3:if(gn(e,r),(r&130023424)===r&&(t=Ou+500-we(),10<t)){if(pa(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ke(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=nc(Mn.bind(null,e,Qe,Jt),t);break}Mn(e,Qe,Jt);break;case 4:if(gn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-Pt(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ny(r/1960))-r,10<r){e.timeoutHandle=nc(Mn.bind(null,e,Qe,Jt),r);break}Mn(e,Qe,Jt);break;case 5:Mn(e,Qe,Jt);break;default:throw Error(R(329))}}}return et(e,we()),e.callbackNode===n?Uh.bind(null,e):null}function kc(e,t){var n=$o;return e.current.memoizedState.isDehydrated&&(Gn(e,t).flags|=256),e=$a(e,t),e!==2&&(t=Qe,Qe=n,t!==null&&Sc(t)),e}function Sc(e){Qe===null?Qe=e:Qe.push.apply(Qe,e)}function ry(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!It(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gn(e,t){for(t&=~$u,t&=~es,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Pt(t),r=1<<n;e[n]=-1,t&=~r}}function _p(e){if(Q&6)throw Error(R(327));zr();var t=pa(e,0);if(!(t&1))return et(e,we()),null;var n=$a(e,t);if(e.tag!==0&&n===2){var r=ql(e);r!==0&&(t=r,n=kc(e,r))}if(n===1)throw n=Jo,Gn(e,0),gn(e,t),et(e,we()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mn(e,Qe,Jt),et(e,we()),null}function Ru(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(Wr=we()+500,Qa&&An())}}function Zn(e){xn!==null&&xn.tag===0&&!(Q&6)&&zr();var t=Q;Q|=1;var n=yt.transition,r=te;try{if(yt.transition=null,te=1,e)return e()}finally{te=r,yt.transition=n,Q=t,!(Q&6)&&An()}}function Iu(){rt=Tr.current,ue(Tr)}function Gn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,I1(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(fu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&va();break;case 3:Hr(),ue(Xe),ue(Be),ku();break;case 5:bu(r);break;case 4:Hr();break;case 13:ue(fe);break;case 19:ue(fe);break;case 10:vu(r.type._context);break;case 22:case 23:Iu()}n=n.return}if(Ae=e,Ce=e=jn(e.current,null),Fe=rt=t,Te=0,Jo=null,$u=es=Xn=0,Qe=$o=null,Hn!==null){for(t=0;t<Hn.length;t++)if(n=Hn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}Hn=null}return e}function Wh(e,t){do{var n=Ce;try{if(gu(),Gi.current=_a,Ca){for(var r=me.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ca=!1}if(Jn=0,Oe=je=me=null,To=!1,qo=0,Pu.current=null,n===null||n.return===null){Te=1,Jo=t,Ce=null;break}e:{var i=e,a=n.return,s=n,l=t;if(t=Fe,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=s,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var f=fp(a);if(f!==null){f.flags&=-257,mp(f,a,s,i,t),f.mode&1&&pp(i,c,t),t=f,l=c;var g=t.updateQueue;if(g===null){var y=new Set;y.add(l),t.updateQueue=y}else g.add(l);break e}else{if(!(t&1)){pp(i,c,t),Au();break e}l=Error(R(426))}}else if(pe&&s.mode&1){var b=fp(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),mp(b,a,s,i,t),mu(Ur(l,s));break e}}i=l=Ur(l,s),Te!==4&&(Te=2),$o===null?$o=[i]:$o.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=jh(i,l,t);ap(i,h);break e;case 1:s=l;var m=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Cn===null||!Cn.has(v)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Th(i,s,t);ap(i,w);break e}}i=i.return}while(i!==null)}Kh(n)}catch(k){t=k,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function Bh(){var e=ja.current;return ja.current=_a,e===null?_a:e}function Au(){(Te===0||Te===3||Te===2)&&(Te=4),Ae===null||!(Xn&268435455)&&!(es&268435455)||gn(Ae,Fe)}function $a(e,t){var n=Q;Q|=2;var r=Bh();(Ae!==e||Fe!==t)&&(Jt=null,Gn(e,t));do try{oy();break}catch(o){Wh(e,o)}while(!0);if(gu(),Q=n,ja.current=r,Ce!==null)throw Error(R(261));return Ae=null,Fe=0,Te}function oy(){for(;Ce!==null;)Gh(Ce)}function iy(){for(;Ce!==null&&!$v();)Gh(Ce)}function Gh(e){var t=Yh(e.alternate,e,rt);e.memoizedProps=e.pendingProps,t===null?Kh(e):Ce=t,Pu.current=null}function Kh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=X1(n,t),n!==null){n.flags&=32767,Ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Te=6,Ce=null;return}}else if(n=J1(n,t,rt),n!==null){Ce=n;return}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);Te===0&&(Te=5)}function Mn(e,t,n){var r=te,o=yt.transition;try{yt.transition=null,te=1,ay(e,t,n,r)}finally{yt.transition=o,te=r}return null}function ay(e,t,n,r){do zr();while(xn!==null);if(Q&6)throw Error(R(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Dv(e,i),e===Ae&&(Ce=Ae=null,Fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ii||(Ii=!0,Qh(da,function(){return zr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=yt.transition,yt.transition=null;var a=te;te=1;var s=Q;Q|=4,Pu.current=null,ey(e,n),Vh(n,e),_1(ec),fa=!!Zl,ec=Zl=null,e.current=n,ty(n),Ov(),Q=s,te=a,yt.transition=i}else e.current=n;if(Ii&&(Ii=!1,xn=e,Pa=o),i=e.pendingLanes,i===0&&(Cn=null),Av(n.stateNode),et(e,we()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ta)throw Ta=!1,e=wc,wc=null,e;return Pa&1&&e.tag!==0&&zr(),i=e.pendingLanes,i&1?e===bc?Oo++:(Oo=0,bc=e):Oo=0,An(),null}function zr(){if(xn!==null){var e=jm(Pa),t=yt.transition,n=te;try{if(yt.transition=null,te=16>e?16:e,xn===null)var r=!1;else{if(e=xn,xn=null,Pa=0,Q&6)throw Error(R(331));var o=Q;for(Q|=4,U=e.current;U!==null;){var i=U,a=i.child;if(U.flags&16){var s=i.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(U=c;U!==null;){var u=U;switch(u.tag){case 0:case 11:case 15:Po(8,u,i)}var d=u.child;if(d!==null)d.return=u,U=d;else for(;U!==null;){u=U;var p=u.sibling,f=u.return;if(Mh(u),u===c){U=null;break}if(p!==null){p.return=f,U=p;break}U=f}}}var g=i.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var b=y.sibling;y.sibling=null,y=b}while(y!==null)}}U=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,U=a;else e:for(;U!==null;){if(i=U,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Po(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,U=h;break e}U=i.return}}var m=e.current;for(U=m;U!==null;){a=U;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,U=v;else e:for(a=m;U!==null;){if(s=U,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Za(9,s)}}catch(k){ye(s,s.return,k)}if(s===a){U=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,U=w;break e}U=s.return}}if(Q=o,An(),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(Ba,e)}catch{}r=!0}return r}finally{te=n,yt.transition=t}}return!1}function jp(e,t,n){t=Ur(n,t),t=jh(e,t,1),e=En(e,t,1),t=Ke(),e!==null&&(si(e,1,t),et(e,t))}function ye(e,t,n){if(e.tag===3)jp(e,e,n);else for(;t!==null;){if(t.tag===3){jp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Cn===null||!Cn.has(r))){e=Ur(n,e),e=Th(t,e,1),t=En(t,e,1),e=Ke(),t!==null&&(si(t,1,e),et(t,e));break}}t=t.return}}function sy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ke(),e.pingedLanes|=e.suspendedLanes&n,Ae===e&&(Fe&n)===n&&(Te===4||Te===3&&(Fe&130023424)===Fe&&500>we()-Ou?Gn(e,0):$u|=n),et(e,t)}function qh(e,t){t===0&&(e.mode&1?(t=Si,Si<<=1,!(Si&130023424)&&(Si=4194304)):t=1);var n=Ke();e=an(e,t),e!==null&&(si(e,t,n),et(e,n))}function ly(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qh(e,n)}function cy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),qh(e,n)}var Yh;Yh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Xe.current)Je=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Je=!1,Q1(e,t,n);Je=!!(e.flags&131072)}else Je=!1,pe&&t.flags&1048576&&Zm(t,wa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;qi(e,t),e=t.pendingProps;var o=Fr(t,Be.current);Ar(t,n),o=Eu(null,t,r,e,o,n);var i=Cu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ze(r)?(i=!0,ya(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,xu(t),o.updater=Xa,t.stateNode=o,o._reactInternals=t,cc(t,r,e,n),t=pc(null,t,r,!0,i,n)):(t.tag=0,pe&&i&&pu(t),Ge(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(qi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=dy(r),e=_t(r,e),o){case 0:t=dc(null,t,r,e,n);break e;case 1:t=vp(null,t,r,e,n);break e;case 11:t=hp(null,t,r,e,n);break e;case 14:t=gp(null,t,r,_t(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:_t(r,o),dc(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:_t(r,o),vp(e,t,r,o,n);case 3:e:{if(Rh(t),e===null)throw Error(R(387));r=t.pendingProps,i=t.memoizedState,o=i.element,ih(e,t),Sa(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Ur(Error(R(423)),t),t=yp(e,t,r,n,o);break e}else if(r!==o){o=Ur(Error(R(424)),t),t=yp(e,t,r,n,o);break e}else for(it=Sn(t.stateNode.containerInfo.firstChild),at=t,pe=!0,Tt=null,n=rh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Dr(),r===o){t=sn(e,t,n);break e}Ge(e,t,r,n)}t=t.child}return t;case 5:return ah(t),e===null&&ac(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,tc(r,o)?a=null:i!==null&&tc(r,i)&&(t.flags|=32),Oh(e,t),Ge(e,t,a,n),t.child;case 6:return e===null&&ac(t),null;case 13:return Ih(e,t,n);case 4:return wu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Vr(t,null,r,n):Ge(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:_t(r,o),hp(e,t,r,o,n);case 7:return Ge(e,t,t.pendingProps,n),t.child;case 8:return Ge(e,t,t.pendingProps.children,n),t.child;case 12:return Ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,ae(ba,r._currentValue),r._currentValue=a,i!==null)if(It(i.value,a)){if(i.children===o.children&&!Xe.current){t=sn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=nn(-1,n&-n),l.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),sc(i.return,n,t),s.lanes|=n;break}l=l.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(R(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),sc(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Ge(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Ar(t,n),o=xt(o),r=r(o),t.flags|=1,Ge(e,t,r,n),t.child;case 14:return r=t.type,o=_t(r,t.pendingProps),o=_t(r.type,o),gp(e,t,r,o,n);case 15:return Ph(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:_t(r,o),qi(e,t),t.tag=1,Ze(r)?(e=!0,ya(t)):e=!1,Ar(t,n),_h(t,r,o),cc(t,r,o,n),pc(null,t,r,!0,e,n);case 19:return Ah(e,t,n);case 22:return $h(e,t,n)}throw Error(R(156,t.tag))};function Qh(e,t){return Sm(e,t)}function uy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,n,r){return new uy(e,t,n,r)}function zu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dy(e){if(typeof e=="function")return zu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===eu)return 11;if(e===tu)return 14}return 2}function jn(e,t){var n=e.alternate;return n===null?(n=vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ji(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")zu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case yr:return Kn(n.children,o,i,t);case Zc:a=8,o|=8;break;case Il:return e=vt(12,n,t,o|2),e.elementType=Il,e.lanes=i,e;case Al:return e=vt(13,n,t,o),e.elementType=Al,e.lanes=i,e;case zl:return e=vt(19,n,t,o),e.elementType=zl,e.lanes=i,e;case am:return ts(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case om:a=10;break e;case im:a=9;break e;case eu:a=11;break e;case tu:a=14;break e;case fn:a=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=vt(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Kn(e,t,n,r){return e=vt(7,e,r,t),e.lanes=n,e}function ts(e,t,n,r){return e=vt(22,e,r,t),e.elementType=am,e.lanes=n,e.stateNode={isHidden:!1},e}function vl(e,t,n){return e=vt(6,e,null,t),e.lanes=n,e}function yl(e,t,n){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function py(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xs(0),this.expirationTimes=Xs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xs(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Lu(e,t,n,r,o,i,a,s,l){return e=new py(e,t,n,s,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=vt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xu(i),e}function fy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Jh(e){if(!e)return $n;e=e._reactInternals;e:{if(rr(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(Ze(n))return Jm(e,n,t)}return t}function Xh(e,t,n,r,o,i,a,s,l){return e=Lu(n,r,!0,e,o,i,a,s,l),e.context=Jh(null),n=e.current,r=Ke(),o=_n(n),i=nn(r,o),i.callback=t??null,En(n,i,o),e.current.lanes=o,si(e,o,r),et(e,r),e}function ns(e,t,n,r){var o=t.current,i=Ke(),a=_n(o);return n=Jh(n),t.context===null?t.context=n:t.pendingContext=n,t=nn(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=En(o,t,a),e!==null&&($t(e,o,a,i),Bi(e,o,a)),a}function Oa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Tp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Nu(e,t){Tp(e,t),(e=e.alternate)&&Tp(e,t)}function my(){return null}var Zh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Mu(e){this._internalRoot=e}rs.prototype.render=Mu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));ns(e,t,null,null)};rs.prototype.unmount=Mu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Zn(function(){ns(null,e,null,null)}),t[on]=null}};function rs(e){this._internalRoot=e}rs.prototype.unstable_scheduleHydration=function(e){if(e){var t=$m();e={blockedOn:null,target:e,priority:t};for(var n=0;n<hn.length&&t!==0&&t<hn[n].priority;n++);hn.splice(n,0,e),n===0&&Rm(e)}};function Fu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function os(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Pp(){}function hy(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Oa(a);i.call(c)}}var a=Xh(t,r,e,0,null,!1,!1,"",Pp);return e._reactRootContainer=a,e[on]=a.current,Uo(e.nodeType===8?e.parentNode:e),Zn(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=Oa(l);s.call(c)}}var l=Lu(e,0,!1,null,null,!1,!1,"",Pp);return e._reactRootContainer=l,e[on]=l.current,Uo(e.nodeType===8?e.parentNode:e),Zn(function(){ns(t,l,n,r)}),l}function is(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var l=Oa(a);s.call(l)}}ns(t,a,e,o)}else a=hy(n,t,e,o,r);return Oa(a)}Tm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=xo(t.pendingLanes);n!==0&&(ou(t,n|1),et(t,we()),!(Q&6)&&(Wr=we()+500,An()))}break;case 13:Zn(function(){var r=an(e,1);if(r!==null){var o=Ke();$t(r,e,1,o)}}),Nu(e,1)}};iu=function(e){if(e.tag===13){var t=an(e,134217728);if(t!==null){var n=Ke();$t(t,e,134217728,n)}Nu(e,134217728)}};Pm=function(e){if(e.tag===13){var t=_n(e),n=an(e,t);if(n!==null){var r=Ke();$t(n,e,t,r)}Nu(e,t)}};$m=function(){return te};Om=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};Bl=function(e,t,n){switch(t){case"input":if(Ml(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ya(r);if(!o)throw Error(R(90));lm(r),Ml(r,o)}}}break;case"textarea":um(e,n);break;case"select":t=n.value,t!=null&&$r(e,!!n.multiple,t,!1)}};vm=Ru;ym=Zn;var gy={usingClientEntryPoint:!1,Events:[ci,kr,Ya,hm,gm,Ru]},fo={findFiberByHostInstance:Vn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vy={bundleType:fo.bundleType,version:fo.version,rendererPackageName:fo.rendererPackageName,rendererConfig:fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:un.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=bm(e),e===null?null:e.stateNode},findFiberByHostInstance:fo.findFiberByHostInstance||my,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ai=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ai.isDisabled&&Ai.supportsFiber)try{Ba=Ai.inject(vy),Wt=Ai}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gy;ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fu(t))throw Error(R(200));return fy(e,t,null,n)};ct.createRoot=function(e,t){if(!Fu(e))throw Error(R(299));var n=!1,r="",o=Zh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Lu(e,1,!1,null,null,n,!1,r,o),e[on]=t.current,Uo(e.nodeType===8?e.parentNode:e),new Mu(t)};ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=bm(t),e=e===null?null:e.stateNode,e};ct.flushSync=function(e){return Zn(e)};ct.hydrate=function(e,t,n){if(!os(t))throw Error(R(200));return is(null,e,t,!0,n)};ct.hydrateRoot=function(e,t,n){if(!Fu(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=Zh;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Xh(t,null,e,1,n??null,o,!1,i,a),e[on]=t.current,Uo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new rs(t)};ct.render=function(e,t,n){if(!os(t))throw Error(R(200));return is(null,e,t,!1,n)};ct.unmountComponentAtNode=function(e){if(!os(e))throw Error(R(40));return e._reactRootContainer?(Zn(function(){is(null,null,e,!1,function(){e._reactRootContainer=null,e[on]=null})}),!0):!1};ct.unstable_batchedUpdates=Ru;ct.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!os(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return is(e,t,n,!1,r)};ct.version="18.3.1-next-f1338f8080-20240426";function eg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eg)}catch(e){console.error(e)}}eg(),em.exports=ct;var Du=em.exports;const zi=Bc(Du);var $p=Du;Ol.createRoot=$p.createRoot,Ol.hydrateRoot=$p.hydrateRoot;const yy={bg:"#000000",bgLight:"#1C1E27",primary:"#2aa889",text_primary:"#1bc099",text_matrix:"#00FF00",sub_text:"#FFFFFF",text_title:"#FFFFFF",text_secondary:"#b1b2b3",card_menu:"rgba(255,255,255)",card_menu_mobile:"rgba(255,255,255,0.8)",card:"#0c0c0c",white:"#FFFFFF",black:"#000000",card_footer:"#FFFFFF"},xy={bg:"#ffffff",bgLight:"#f0f0f0",primary:"#2aa889",text_matrix:"#00FF00",text_primary:"#111111",text_secondary:"#48494a",card:"#ffffffc8",card_menu:"rgba(0, 0, 0)",card_menu_mobile:"rgba(0,0,0,0.8)",button:"#5c5b5b",card_footer:"#000"};var Ie=function(){return Ie=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ie.apply(this,arguments)};function Br(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}function tg(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var wy=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,by=tg(function(e){return wy.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),ce="-ms-",Ro="-moz-",ee="-webkit-",ng="comm",as="rule",Vu="decl",ky="@import",rg="@keyframes",Sy="@layer",og=Math.abs,Hu=String.fromCharCode,Ec=Object.assign;function Ey(e,t){return Re(e,0)^45?(((t<<2^Re(e,0))<<2^Re(e,1))<<2^Re(e,2))<<2^Re(e,3):0}function ig(e){return e.trim()}function Xt(e,t){return(e=t.exec(e))?e[0]:e}function K(e,t,n){return e.replace(t,n)}function Xi(e,t,n){return e.indexOf(t,n)}function Re(e,t){return e.charCodeAt(t)|0}function Gr(e,t,n){return e.slice(t,n)}function Dt(e){return e.length}function ag(e){return e.length}function bo(e,t){return t.push(e),e}function Cy(e,t){return e.map(t).join("")}function Op(e,t){return e.filter(function(n){return!Xt(n,t)})}var ss=1,Kr=1,sg=0,bt=0,Se=0,eo="";function ls(e,t,n,r,o,i,a,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:ss,column:Kr,length:a,return:"",siblings:s}}function pn(e,t){return Ec(ls("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function cr(e){for(;e.root;)e=pn(e.root,{children:[e]});bo(e,e.siblings)}function _y(){return Se}function jy(){return Se=bt>0?Re(eo,--bt):0,Kr--,Se===10&&(Kr=1,ss--),Se}function Ot(){return Se=bt<sg?Re(eo,bt++):0,Kr++,Se===10&&(Kr=1,ss++),Se}function qn(){return Re(eo,bt)}function Zi(){return bt}function cs(e,t){return Gr(eo,e,t)}function Cc(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ty(e){return ss=Kr=1,sg=Dt(eo=e),bt=0,[]}function Py(e){return eo="",e}function xl(e){return ig(cs(bt-1,_c(e===91?e+2:e===40?e+1:e)))}function $y(e){for(;(Se=qn())&&Se<33;)Ot();return Cc(e)>2||Cc(Se)>3?"":" "}function Oy(e,t){for(;--t&&Ot()&&!(Se<48||Se>102||Se>57&&Se<65||Se>70&&Se<97););return cs(e,Zi()+(t<6&&qn()==32&&Ot()==32))}function _c(e){for(;Ot();)switch(Se){case e:return bt;case 34:case 39:e!==34&&e!==39&&_c(Se);break;case 40:e===41&&_c(e);break;case 92:Ot();break}return bt}function Ry(e,t){for(;Ot()&&e+Se!==57;)if(e+Se===84&&qn()===47)break;return"/*"+cs(t,bt-1)+"*"+Hu(e===47?e:Ot())}function Iy(e){for(;!Cc(qn());)Ot();return cs(e,bt)}function Ay(e){return Py(ea("",null,null,null,[""],e=Ty(e),0,[0],e))}function ea(e,t,n,r,o,i,a,s,l){for(var c=0,u=0,d=a,p=0,f=0,g=0,y=1,b=1,h=1,m=0,v="",w=o,k=i,E=r,S=v;b;)switch(g=m,m=Ot()){case 40:if(g!=108&&Re(S,d-1)==58){Xi(S+=K(xl(m),"&","&\f"),"&\f",og(c?s[c-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:S+=xl(m);break;case 9:case 10:case 13:case 32:S+=$y(g);break;case 92:S+=Oy(Zi()-1,7);continue;case 47:switch(qn()){case 42:case 47:bo(zy(Ry(Ot(),Zi()),t,n,l),l);break;default:S+="/"}break;case 123*y:s[c++]=Dt(S)*h;case 125*y:case 59:case 0:switch(m){case 0:case 125:b=0;case 59+u:h==-1&&(S=K(S,/\f/g,"")),f>0&&Dt(S)-d&&bo(f>32?Ip(S+";",r,n,d-1,l):Ip(K(S," ","")+";",r,n,d-2,l),l);break;case 59:S+=";";default:if(bo(E=Rp(S,t,n,c,u,o,s,v,w=[],k=[],d,i),i),m===123)if(u===0)ea(S,t,E,E,w,i,d,s,k);else switch(p===99&&Re(S,3)===110?100:p){case 100:case 108:case 109:case 115:ea(e,E,E,r&&bo(Rp(e,E,E,0,0,o,s,v,o,w=[],d,k),k),o,k,d,s,r?w:k);break;default:ea(S,E,E,E,[""],k,0,s,k)}}c=u=f=0,y=h=1,v=S="",d=a;break;case 58:d=1+Dt(S),f=g;default:if(y<1){if(m==123)--y;else if(m==125&&y++==0&&jy()==125)continue}switch(S+=Hu(m),m*y){case 38:h=u>0?1:(S+="\f",-1);break;case 44:s[c++]=(Dt(S)-1)*h,h=1;break;case 64:qn()===45&&(S+=xl(Ot())),p=qn(),u=d=Dt(v=S+=Iy(Zi())),m++;break;case 45:g===45&&Dt(S)==2&&(y=0)}}return i}function Rp(e,t,n,r,o,i,a,s,l,c,u,d){for(var p=o-1,f=o===0?i:[""],g=ag(f),y=0,b=0,h=0;y<r;++y)for(var m=0,v=Gr(e,p+1,p=og(b=a[y])),w=e;m<g;++m)(w=ig(b>0?f[m]+" "+v:K(v,/&\f/g,f[m])))&&(l[h++]=w);return ls(e,t,n,o===0?as:s,l,c,u,d)}function zy(e,t,n,r){return ls(e,t,n,ng,Hu(_y()),Gr(e,2,-2),0,r)}function Ip(e,t,n,r,o){return ls(e,t,n,Vu,Gr(e,0,r),Gr(e,r+1,-1),r,o)}function lg(e,t,n){switch(Ey(e,t)){case 5103:return ee+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ee+e+e;case 4789:return Ro+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ee+e+Ro+e+ce+e+e;case 5936:switch(Re(e,t+11)){case 114:return ee+e+ce+K(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ee+e+ce+K(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ee+e+ce+K(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ee+e+ce+e+e;case 6165:return ee+e+ce+"flex-"+e+e;case 5187:return ee+e+K(e,/(\w+).+(:[^]+)/,ee+"box-$1$2"+ce+"flex-$1$2")+e;case 5443:return ee+e+ce+"flex-item-"+K(e,/flex-|-self/g,"")+(Xt(e,/flex-|baseline/)?"":ce+"grid-row-"+K(e,/flex-|-self/g,""))+e;case 4675:return ee+e+ce+"flex-line-pack"+K(e,/align-content|flex-|-self/g,"")+e;case 5548:return ee+e+ce+K(e,"shrink","negative")+e;case 5292:return ee+e+ce+K(e,"basis","preferred-size")+e;case 6060:return ee+"box-"+K(e,"-grow","")+ee+e+ce+K(e,"grow","positive")+e;case 4554:return ee+K(e,/([^-])(transform)/g,"$1"+ee+"$2")+e;case 6187:return K(K(K(e,/(zoom-|grab)/,ee+"$1"),/(image-set)/,ee+"$1"),e,"")+e;case 5495:case 3959:return K(e,/(image-set\([^]*)/,ee+"$1$`$1");case 4968:return K(K(e,/(.+:)(flex-)?(.*)/,ee+"box-pack:$3"+ce+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ee+e+e;case 4200:if(!Xt(e,/flex-|baseline/))return ce+"grid-column-align"+Gr(e,t)+e;break;case 2592:case 3360:return ce+K(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,Xt(r.props,/grid-\w+-end/)})?~Xi(e+(n=n[t].value),"span",0)?e:ce+K(e,"-start","")+e+ce+"grid-row-span:"+(~Xi(n,"span",0)?Xt(n,/\d+/):+Xt(n,/\d+/)-+Xt(e,/\d+/))+";":ce+K(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Xt(r.props,/grid-\w+-start/)})?e:ce+K(K(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return K(e,/(.+)-inline(.+)/,ee+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Dt(e)-1-t>6)switch(Re(e,t+1)){case 109:if(Re(e,t+4)!==45)break;case 102:return K(e,/(.+:)(.+)-([^]+)/,"$1"+ee+"$2-$3$1"+Ro+(Re(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Xi(e,"stretch",0)?lg(K(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return K(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,a,s,l,c){return ce+o+":"+i+c+(a?ce+o+"-span:"+(s?l:+l-+i)+c:"")+e});case 4949:if(Re(e,t+6)===121)return K(e,":",":"+ee)+e;break;case 6444:switch(Re(e,Re(e,14)===45?18:11)){case 120:return K(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ee+(Re(e,14)===45?"inline-":"")+"box$3$1"+ee+"$2$3$1"+ce+"$2box$3")+e;case 100:return K(e,":",":"+ce)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return K(e,"scroll-","scroll-snap-")+e}return e}function Ra(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Ly(e,t,n,r){switch(e.type){case Sy:if(e.children.length)break;case ky:case Vu:return e.return=e.return||e.value;case ng:return"";case rg:return e.return=e.value+"{"+Ra(e.children,r)+"}";case as:if(!Dt(e.value=e.props.join(",")))return""}return Dt(n=Ra(e.children,r))?e.return=e.value+"{"+n+"}":""}function Ny(e){var t=ag(e);return function(n,r,o,i){for(var a="",s=0;s<t;s++)a+=e[s](n,r,o,i)||"";return a}}function My(e){return function(t){t.root||(t=t.return)&&e(t)}}function Fy(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Vu:e.return=lg(e.value,e.length,n);return;case rg:return Ra([pn(e,{value:K(e.value,"@","@"+ee)})],r);case as:if(e.length)return Cy(n=e.props,function(o){switch(Xt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":cr(pn(e,{props:[K(o,/:(read-\w+)/,":"+Ro+"$1")]})),cr(pn(e,{props:[o]})),Ec(e,{props:Op(n,r)});break;case"::placeholder":cr(pn(e,{props:[K(o,/:(plac\w+)/,":"+ee+"input-$1")]})),cr(pn(e,{props:[K(o,/:(plac\w+)/,":"+Ro+"$1")]})),cr(pn(e,{props:[K(o,/:(plac\w+)/,ce+"input-$1")]})),cr(pn(e,{props:[o]})),Ec(e,{props:Op(n,r)});break}return""})}}var cg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},nt={},qr=typeof process<"u"&&nt!==void 0&&(nt.REACT_APP_SC_ATTR||nt.SC_ATTR)||"data-styled",ug="active",dg="data-styled-version",us="6.1.11",Uu=`/*!sc*/
`,Wu=typeof window<"u"&&"HTMLElement"in window,Dy=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&nt!==void 0&&nt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&nt.REACT_APP_SC_DISABLE_SPEEDY!==""?nt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&nt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&nt!==void 0&&nt.SC_DISABLE_SPEEDY!==void 0&&nt.SC_DISABLE_SPEEDY!==""&&nt.SC_DISABLE_SPEEDY!=="false"&&nt.SC_DISABLE_SPEEDY),Vy={},ds=Object.freeze([]),Yr=Object.freeze({});function pg(e,t,n){return n===void 0&&(n=Yr),e.theme!==n.theme&&e.theme||t||n.theme}var fg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Hy=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Uy=/(^-|-$)/g;function Ap(e){return e.replace(Hy,"-").replace(Uy,"")}var Wy=/(a)(d)/gi,Li=52,zp=function(e){return String.fromCharCode(e+(e>25?39:97))};function jc(e){var t,n="";for(t=Math.abs(e);t>Li;t=t/Li|0)n=zp(t%Li)+n;return(zp(t%Li)+n).replace(Wy,"$1-$2")}var wl,mg=5381,Pr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},hg=function(e){return Pr(mg,e)};function Bu(e){return jc(hg(e)>>>0)}function By(e){return e.displayName||e.name||"Component"}function bl(e){return typeof e=="string"&&!0}var gg=typeof Symbol=="function"&&Symbol.for,vg=gg?Symbol.for("react.memo"):60115,Gy=gg?Symbol.for("react.forward_ref"):60112,Ky={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},qy={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},yg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Yy=((wl={})[Gy]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},wl[vg]=yg,wl);function Lp(e){return("type"in(t=e)&&t.type.$$typeof)===vg?yg:"$$typeof"in e?Yy[e.$$typeof]:Ky;var t}var Qy=Object.defineProperty,Jy=Object.getOwnPropertyNames,Np=Object.getOwnPropertySymbols,Xy=Object.getOwnPropertyDescriptor,Zy=Object.getPrototypeOf,Mp=Object.prototype;function xg(e,t,n){if(typeof t!="string"){if(Mp){var r=Zy(t);r&&r!==Mp&&xg(e,r,n)}var o=Jy(t);Np&&(o=o.concat(Np(t)));for(var i=Lp(e),a=Lp(t),s=0;s<o.length;++s){var l=o[s];if(!(l in qy||n&&n[l]||a&&l in a||i&&l in i)){var c=Xy(t,l);try{Qy(e,l,c)}catch{}}}}return e}function er(e){return typeof e=="function"}function Gu(e){return typeof e=="object"&&"styledComponentId"in e}function Wn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ia(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Xo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Tc(e,t,n){if(n===void 0&&(n=!1),!n&&!Xo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Tc(e[r],t[r]);else if(Xo(t))for(var r in t)e[r]=Tc(e[r],t[r]);return e}function Ku(e,t){Object.defineProperty(e,"toString",{value:t})}function tr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var ex=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw tr(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var a=o;a<i;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(t+1),l=(a=0,n.length);a<l;a++)this.tag.insertRule(s,n[a])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,a=o;a<i;a++)n+="".concat(this.tag.getRule(a)).concat(Uu);return n},e}(),ta=new Map,Aa=new Map,na=1,Ni=function(e){if(ta.has(e))return ta.get(e);for(;Aa.has(na);)na++;var t=na++;return ta.set(e,t),Aa.set(t,e),t},tx=function(e,t){na=t+1,ta.set(e,t),Aa.set(t,e)},nx="style[".concat(qr,"][").concat(dg,'="').concat(us,'"]'),rx=new RegExp("^".concat(qr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ox=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},ix=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Uu),o=[],i=0,a=r.length;i<a;i++){var s=r[i].trim();if(s){var l=s.match(rx);if(l){var c=0|parseInt(l[1],10),u=l[2];c!==0&&(tx(u,c),ox(e,u,l[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(s)}}};function ax(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var wg=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){var l=Array.from(s.querySelectorAll("style[".concat(qr,"]")));return l[l.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(qr,ug),r.setAttribute(dg,us);var a=ax();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},sx=function(){function e(t){this.element=wg(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var a=r[o];if(a.ownerNode===n)return a}throw tr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),lx=function(){function e(t){this.element=wg(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),cx=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Fp=Wu,ux={isServer:!Wu,useCSSOMInjection:!Dy},za=function(){function e(t,n,r){t===void 0&&(t=Yr),n===void 0&&(n={});var o=this;this.options=Ie(Ie({},ux),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Wu&&Fp&&(Fp=!1,function(i){for(var a=document.querySelectorAll(nx),s=0,l=a.length;s<l;s++){var c=a[s];c&&c.getAttribute(qr)!==ug&&(ix(i,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),Ku(this,function(){return function(i){for(var a=i.getTag(),s=a.length,l="",c=function(d){var p=function(h){return Aa.get(h)}(d);if(p===void 0)return"continue";var f=i.names.get(p),g=a.getGroup(d);if(f===void 0||g.length===0)return"continue";var y="".concat(qr,".g").concat(d,'[id="').concat(p,'"]'),b="";f!==void 0&&f.forEach(function(h){h.length>0&&(b+="".concat(h,","))}),l+="".concat(g).concat(y,'{content:"').concat(b,'"}').concat(Uu)},u=0;u<s;u++)c(u);return l}(o)})}return e.registerId=function(t){return Ni(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ie(Ie({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new cx(o):r?new sx(o):new lx(o)}(this.options),new ex(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ni(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ni(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ni(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),dx=/&/g,px=/^\s*\/\/.*$/gm;function bg(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=bg(n.children,t)),n})}function fx(e){var t,n,r,o=Yr,i=o.options,a=i===void 0?Yr:i,s=o.plugins,l=s===void 0?ds:s,c=function(p,f,g){return g.startsWith(n)&&g.endsWith(n)&&g.replaceAll(n,"").length>0?".".concat(t):p},u=l.slice();u.push(function(p){p.type===as&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(dx,n).replace(r,c))}),a.prefix&&u.push(Fy),u.push(Ly);var d=function(p,f,g,y){f===void 0&&(f=""),g===void 0&&(g=""),y===void 0&&(y="&"),t=y,n=f,r=new RegExp("\\".concat(n,"\\b"),"g");var b=p.replace(px,""),h=Ay(g||f?"".concat(g," ").concat(f," { ").concat(b," }"):b);a.namespace&&(h=bg(h,a.namespace));var m=[];return Ra(h,Ny(u.concat(My(function(v){return m.push(v)})))),m};return d.hash=l.length?l.reduce(function(p,f){return f.name||tr(15),Pr(p,f.name)},mg).toString():"",d}var mx=new za,Pc=fx(),kg=ie.createContext({shouldForwardProp:void 0,styleSheet:mx,stylis:Pc});kg.Consumer;ie.createContext(void 0);function $c(){return T.useContext(kg)}var Sg=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Pc);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Ku(this,function(){throw tr(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Pc),this.name+t.hash},e}(),hx=function(e){return e>="A"&&e<="Z"};function Dp(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;hx(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Eg=function(e){return e==null||e===!1||e===""},Cg=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Eg(i)&&(Array.isArray(i)&&i.isCss||er(i)?r.push("".concat(Dp(o),":"),i,";"):Xo(i)?r.push.apply(r,Br(Br(["".concat(o," {")],Cg(i),!1),["}"],!1)):r.push("".concat(Dp(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in cg||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Tn(e,t,n,r){if(Eg(e))return[];if(Gu(e))return[".".concat(e.styledComponentId)];if(er(e)){if(!er(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return Tn(o,t,n,r)}var i;return e instanceof Sg?n?(e.inject(n,r),[e.getName(r)]):[e]:Xo(e)?Cg(e):Array.isArray(e)?Array.prototype.concat.apply(ds,e.map(function(a){return Tn(a,t,n,r)})):[e.toString()]}function _g(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(er(n)&&!Gu(n))return!1}return!0}var gx=hg(us),vx=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&_g(t),this.componentId=n,this.baseHash=Pr(gx,n),this.baseStyle=r,za.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=Wn(o,this.staticRulesId);else{var i=Ia(Tn(this.rules,t,n,r)),a=jc(Pr(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,a)){var s=r(i,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,s)}o=Wn(o,a),this.staticRulesId=a}else{for(var l=Pr(this.baseHash,r.hash),c="",u=0;u<this.rules.length;u++){var d=this.rules[u];if(typeof d=="string")c+=d;else if(d){var p=Ia(Tn(d,t,n,r));l=Pr(l,p+u),c+=p}}if(c){var f=jc(l>>>0);n.hasNameForId(this.componentId,f)||n.insertRules(this.componentId,f,r(c,".".concat(f),void 0,this.componentId)),o=Wn(o,f)}}return o},e}(),Zo=ie.createContext(void 0);Zo.Consumer;function yx(e){var t=ie.useContext(Zo),n=T.useMemo(function(){return function(r,o){if(!r)throw tr(14);if(er(r)){var i=r(o);return i}if(Array.isArray(r)||typeof r!="object")throw tr(8);return o?Ie(Ie({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?ie.createElement(Zo.Provider,{value:n},e.children):null}var kl={};function xx(e,t,n){var r=Gu(e),o=e,i=!bl(e),a=t.attrs,s=a===void 0?ds:a,l=t.componentId,c=l===void 0?function(w,k){var E=typeof w!="string"?"sc":Ap(w);kl[E]=(kl[E]||0)+1;var S="".concat(E,"-").concat(Bu(us+E+kl[E]));return k?"".concat(k,"-").concat(S):S}(t.displayName,t.parentComponentId):l,u=t.displayName,d=u===void 0?function(w){return bl(w)?"styled.".concat(w):"Styled(".concat(By(w),")")}(e):u,p=t.displayName&&t.componentId?"".concat(Ap(t.displayName),"-").concat(t.componentId):t.componentId||c,f=r&&o.attrs?o.attrs.concat(s).filter(Boolean):s,g=t.shouldForwardProp;if(r&&o.shouldForwardProp){var y=o.shouldForwardProp;if(t.shouldForwardProp){var b=t.shouldForwardProp;g=function(w,k){return y(w,k)&&b(w,k)}}else g=y}var h=new vx(n,p,r?o.componentStyle:void 0);function m(w,k){return function(E,S,j){var z=E.attrs,O=E.componentStyle,I=E.defaultProps,M=E.foldedComponentIds,B=E.styledComponentId,W=E.target,V=ie.useContext(Zo),N=$c(),G=E.shouldForwardProp||N.shouldForwardProp,A=pg(S,V,I)||Yr,$=function($e,F,q){for(var se,oe=Ie(Ie({},F),{className:void 0,theme:q}),J=0;J<$e.length;J+=1){var _e=er(se=$e[J])?se(oe):se;for(var Le in _e)oe[Le]=Le==="className"?Wn(oe[Le],_e[Le]):Le==="style"?Ie(Ie({},oe[Le]),_e[Le]):_e[Le]}return F.className&&(oe.className=Wn(oe.className,F.className)),oe}(z,S,A),P=$.as||W,H={};for(var D in $)$[D]===void 0||D[0]==="$"||D==="as"||D==="theme"&&$.theme===A||(D==="forwardedAs"?H.as=$.forwardedAs:G&&!G(D,P)||(H[D]=$[D]));var xe=function($e,F){var q=$c(),se=$e.generateAndInjectStyles(F,q.styleSheet,q.stylis);return se}(O,$),_=Wn(M,B);return xe&&(_+=" "+xe),$.className&&(_+=" "+$.className),H[bl(P)&&!fg.has(P)?"class":"className"]=_,H.ref=j,T.createElement(P,H)}(v,w,k)}m.displayName=d;var v=ie.forwardRef(m);return v.attrs=f,v.componentStyle=h,v.displayName=d,v.shouldForwardProp=g,v.foldedComponentIds=r?Wn(o.foldedComponentIds,o.styledComponentId):"",v.styledComponentId=p,v.target=r?o.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(k){for(var E=[],S=1;S<arguments.length;S++)E[S-1]=arguments[S];for(var j=0,z=E;j<z.length;j++)Tc(k,z[j],!0);return k}({},o.defaultProps,w):w}}),Ku(v,function(){return".".concat(v.styledComponentId)}),i&&xg(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function Vp(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Hp=function(e){return Object.assign(e,{isCss:!0})};function qu(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(er(e)||Xo(e))return Hp(Tn(Vp(ds,Br([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Tn(r):Hp(Tn(Vp(r,t)))}function Oc(e,t,n){if(n===void 0&&(n=Yr),!t)throw tr(1,t);var r=function(o){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,n,qu.apply(void 0,Br([o],i,!1)))};return r.attrs=function(o){return Oc(e,t,Ie(Ie({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Oc(e,t,Ie(Ie({},n),o))},r}var jg=function(e){return Oc(xx,e)},C=jg;fg.forEach(function(e){C[e]=jg(e)});var wx=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=_g(t),za.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(Ia(Tn(this.rules,n,r,o)),""),a=this.componentId+t;r.insertRules(a,a,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&za.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function bx(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=qu.apply(void 0,Br([e],t,!1)),o="sc-global-".concat(Bu(JSON.stringify(r))),i=new wx(r,o),a=function(l){var c=$c(),u=ie.useContext(Zo),d=ie.useRef(c.styleSheet.allocateGSInstance(o)).current;return c.styleSheet.server&&s(d,l,c.styleSheet,u,c.stylis),ie.useLayoutEffect(function(){if(!c.styleSheet.server)return s(d,l,c.styleSheet,u,c.stylis),function(){return i.removeStyles(d,c.styleSheet)}},[d,l,c.styleSheet,u,c.stylis]),null};function s(l,c,u,d,p){if(i.isStatic)i.renderStyles(l,Vy,u,p);else{var f=Ie(Ie({},c),{theme:pg(c,d,a.defaultProps)});i.renderStyles(l,f,u,p)}}return ie.memo(a)}function kx(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ia(qu.apply(void 0,Br([e],t,!1))),o=Bu(r);return new Sg(o,r)}const Sx=C.div`
  background-color: ${({theme:e})=>e.card_menu};
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media (max-width: 960px) {
    trastion: 0.8s all ease;
  }
`,Ex=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  padding: 20px 4px;
  z-index: 1;
`,Cx=C.a`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 0px 20px;
  text-decoration: none;

  @media (max-width: 960px) {
    padding: 0 0px;
    margin: 0px 5px;
  }

  @media (max-width: 640px) {
    padding: 0 0px;
    margin: 0px 5px;
  }
`;C.div`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;C.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;const _x=C.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 2px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`,jx=C.a`
  justify-content: center;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 2px;
  background: none;
  color: ${({$isdarkmode:e})=>e?"#000":"#fff"};
  text-decoration: none;
  box-shadow: none;
  text-align: center;

  padding: 8px 2px;
  font-weight: 250;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  &:hover {
    border: 1.8px solid ${({theme:e})=>e.primary};
    color: ${({theme:e})=>e.primary};
  }

  &.active {
    border-bottom: 2px solid ${({theme:e})=>e.primary};
  }
`,Up=C.a`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 45px;
  margin-right: 20px;
  border-radius: 2px;
  background-color: ${({$isdarkmode:e})=>e?"#fff":"transparent"};
  color: ${({$isdarkmode:e})=>e?"#000":"#fff"};
  cursor: pointer;
  padding: 10px 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
  border: 1.8px solid ${({$isdarkmode:e})=>e?"#000":"#fff"};

  &:hover {
    background: ${({theme:e})=>e.primary};
    color: ${({theme:e})=>e.white};
  }

  @media screen and (max-width: 768px) {
    padding: 10px 16px;
    background-color: #2aa889;
    color: white;
    width: max-content;
    font-size: 14px;
  }
`,Tx=C.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`,Px=C.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    margin-top: -8px;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({$isdarkmode:e})=>e?"#000":"#fff"};
    transition: all 1s ease;
  }
`,$x=C.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 54px;
  right: 0;
  width: 100%;
  padding: 15px 40px 24px 40px;
  background: ${({theme:e})=>e.card_menu_mobile};
  color: ${({$isdarkmode:e})=>e?"#000":"#fff"};
  transition: all 0.6s ease-in-out;
  transform: ${({isOpen:e})=>e?"translateY(0)":"translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({isOpen:e})=>e?"100%":"0"};
  z-index: ${({isOpen:e})=>e?"1000":"-1000"};
`;C.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`;C.a`
    color: ${({$isdarkmode:e})=>e?"#000":"#fff"};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: ${({theme:e})=>e.primary};
  }

  &.active {
    border-bottom: 2px solid ${({theme:e})=>e.primary};
  }
`;C.a`
  border: 1.8px solid ${({$isdarkmode:e})=>e?"#fff":"#000"};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({theme:e})=>e.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  &:hover {
    background: ${({theme:e})=>e.primary};
    color: ${({theme:e})=>e.white};
  }
`;const Ox=C.a`
  color: ${({$isdarkmode:e})=>e?"#000":"#fff"};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: ${({$isdarkmode:e})=>e?"#000":"#fff"};
  }

  &.active {
    border-bottom: 2px solid
      ${({$isdarkmode:e})=>e?"#000":"#fff"};
  }
`;C.a`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;const Wp=C.span`
  height: 20px;
  margin-left: 5px;
`,Rx=C.button`
  justify-content: center;
  display: flex;
  align-items: center;
  margin-left: 8px;
  cursor: pointer;
  border-radius: 2px;
  height: 45px;
  background-color: ${({$isdarkmode:e})=>e?"#fff":"transparent"};
  color: ${({$isdarkmode:e})=>e?"#000":"#fff"};
  outline: none;
  box-shadow: none;
  position: relative;
  appearance: none;
  text-align: center;
  text-decoration: none;
  border: 1.8px solid ${({$isdarkmode:e})=>e?"#000":"#fff"};

  padding: 10px 20px;
  font-weight: 500;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  &:hover {
    background: ${({$isdarkmode:e})=>e?"#000":"#fff"};
    color: ${({$isdarkmode:e})=>e?"#fff":"#000"};
  }

  @media (max-width: 960px) {
    width: 80%;
  }

  @media (max-width: 640px) {
    width: 80%;
  }
`,Ix=C.option`
  background: black;
  color: white;
  outline: white;
  float: left;
  text-align: left;
  text-decoration: white;
  appearance: none;
  cursor: pointer;

  &:focus {
    user-focus: none;
    background: none;
  }

  &:focus::after {
    outline: none;
  }
`,Ax=C.select`
  justify-content: center;
  display: flex;
  align-items: center;
  margin-left: 5px;
  cursor: pointer;
  border-radius: 2px;
  height: 45px;
  background-color: ${({$isdarkmode:e})=>e?"#fff":"transparent"};
  color: ${({$isdarkmode:e})=>e?"#000":"#fff"};
  outline: none;
  box-shadow: none;
  position: relative;
  appearance: none;
  text-align: left;
  text-decoration: none;
  float: left;
  border: 1.8px solid ${({$isdarkmode:e})=>e?"#000":"#fff"};

  padding: 10px 20px;
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

  @media (max-width: 960px) {
    width: 80%;
  }

  @media (max-width: 640px) {
    width: 80%;
  }
`,zx={name:"Kauan Vidigal",functions:"Programador de software | Full Stack | Java, Mysql, React js | Freelance",roles:["Seja Bem Vindo!","Sou um desenvolvedor Full-Stack"],location:{countries:"Brasil / São Paulo"},description:`Me chamo Kauan Vidigal, sou um desenvolvedor Full-Stack autodidata em constante busca pela excelência tecnológica. Comprometido em solidificar minha expertise, almejo a obtenção de um diploma em Ciência da Computação. Desde a infância, explorei sistemas operacionais, incluindo Windows XP, Windows 7 e Kali Linux, e, a partir de 2014, direcionei meu foco para a programação.

Tenho uma afinidade especial por Java e Programação Orientada a Objetos. Como profissional autônomo, especializo-me em consultorias de TI e no desenvolvimento de sites para empresas. Utilizo tecnologias como PHP, Laravel, React ou Vue, e Vite, para criar soluções eficientes e seguras. Meu enfoque principal está no desenvolvimento de aplicações web responsivas, personalizadas de acordo com as necessidades específicas dos clientes.

Estou aberto a colaborações e desafios que impulsionem meu crescimento profissional. Se houver interesse em discutir parcerias ou obter mais informações, estou à disposição para uma conversa mais detalhada.`,Modelight:"Claro",Modedark:"Escuro",nav:{home:"Início",skills:"Competências",experience:"Experiência",projects:"Projetos",education:"Educação",contact:"Contato",about:"Sobre"},skillsAll:{title:"Ferramentas que Uso:",desc:`Desde 2014, tenho dedicado meu tempo ao estudo e aprimoramento no campo do desenvolvimento Full-Stack. Ao longo dessa jornada, adquiri conhecimentos que incluem tecnologias mais antigas, as quais, embora possam não ser tão prevalentes no mercado atual, proporcionaram uma base sólida.

A essência dessa experiência está na compreensão profunda de conceitos essenciais, o que se tornou um trunfo ao explorar e absorver novas tecnologias. Esse background robusto não apenas facilita a adaptação a novas ferramentas e tendências, mas também oferece uma perspectiva valiosa ao enfrentar desafios inovadores.

No back-end, especializo-me em Java P.O.O, MySQL, MariaDB, Node.js, PHP, e Laravel. No front-end, concentro-me em React.js e Vite ou Vue, visando criar interfaces modernas e responsivas. Esta trajetória não apenas destaca minha capacidade de evoluir com as demandas do mercado, mas também reflete meu compromisso contínuo com o aprendizado e crescimento profissional. Estou aberto a colaborações e ansioso para explorar oportunidades que contribuam para meu desenvolvimento profissional.`,info:[{subtitle:"Linguagens de programação:",skills:[{name:"Java",date:"3 anos",link:"https://www.oracle.com/java/technologies/downloads/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"},{name:"Php",date:"7 anos",link:"https://www.php.net",image:"https://www.php.net/favicon.ico?v=2"},{name:"Javascript",date:"7 anos",link:"https://www.javascript.com",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"},{name:"Typescript",date:"4 anos",link:"https://www.typescriptlang.org",image:"https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae"}]},{subtitle:"Desenvolvimento Front-end:",skills:[{name:"HTML",date:"7 anos",link:"https://www.w3schools.com/html/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"},{name:"CSS",date:"7 anos",link:"https://www.w3schools.com/Css/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"},{name:"React js",date:"5 anos",link:"https://react.dev/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"},{name:"Tailwind",date:"5 anos",link:"https://tailwindcss.com/",image:"https://tailwindcss.com/favicons/apple-touch-icon.png?v=3"},{name:"Styled",date:"5 anos",link:"https://styled-components.com/",image:"https://styled-components.com/favicon.png"},{name:"Bootstrap",date:"5 anos",link:"https://getbootstrap.com/",image:"https://getbootstrap.com/docs/5.3/assets/img/favicons/apple-touch-icon.png"},{name:"SASS",date:"5 anos",link:"https://sass-lang.com/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"},{name:"Vue",date:"4 anos",link:"https://vuejs.org/",image:"https://br.vuejs.org/images/icons/apple-icon-57x57.png"}]},{subtitle:"Desenvolvimento de back-end:",skills:[{name:"Node.js",date:"5 anos",category:"JavaScript server-side",link:"https://nodejs.org/en/download/",image:"https://nodejs.org/static/images/favicons/favicon.png"},{name:"IIS",date:"7 anos",category:"Web servers",link:"https://www.microsoft.com/pt-BR/download/details.aspx?id=48264",image:"https://www.microsoft.com/favicon.ico?v2"},{name:"Apache HTTP Server",date:"7 anos",category:"Web servers",link:"https://apache.org/",image:"https://apache.org/favicons/favicon.ico"},{name:"Apache Tomcat",date:"7 anos",category:"Web servers",link:"https://tomcat.apache.org/",image:"https://tomcat.apache.org/res/images/tomcat.png"},{name:"Nginx",date:"5 anos",category:"Web servers",link:"https://nginx.org/en/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg"},{name:"Xamp",date:"7 anos",category:"Pacotes de Servidores",link:"https://www.apachefriends.org/download.html",image:"https://www.apachefriends.org/images/favicon-18f9bd42.png"},{name:"Wamp",date:"7 anos",category:"Pacotes de Servidores",link:"https://wampserver.aviatechno.net/",image:"https://wampserver.aviatechno.net/css/favicon.ico"}]},{subtitle:"Base de dados:",skills:[{name:"Mysql",date:"5 anos",link:"https://www.mysql.com/",image:"https://labs.mysql.com/common/themes/sakila/favicon.ico"},{name:"Postgresql",date:"3 anos",link:"https://www.postgresql.org/",image:"https://www.postgresql.org/media/img/about/press/elephant.png"},{name:"MongoDB",date:"3 anos",link:"https://www.mongodb.com/",image:"https://www.mongodb.com/assets/images/global/favicon.ico"},{name:"Mariadb",date:"5 anos",link:"https://mariadb.org/",image:"https://mariadb.org/wp-content/uploads/2019/02/cropped-mariadb_org_rgb_r_512-1-32x32.png"}]},{subtitle:"Ambiente de trabalho remoto:",skills:[{name:"Anydesk",date:"4 anos",link:"https://anydesk.com/",image:"https://s3.amazonaws.com//beta-img.b2bstack.net/uploads/production/product/product_image/16462/anydesk.jpg"},{name:"TeamViewer",date:"4 anos",link:"https://www.teamviewer.com/",image:"https://www.teamviewer.com/etc.clientlibs/teamviewer/clientlibs/clientlib-resources/resources/favicon.png"}]},{subtitle:"Cloud:",skills:[{name:"Aws",date:"2 anos",link:"https://aws.amazon.com/pt/free/",image:"https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_179x109.png"},{name:"Cloud",date:"4 anos",link:"https://cloud.google.com/",image:"https://www.gstatic.com/devrel-devsite/prod/v0d244f667a3683225cca86d0ecf9b9b81b1e734e55a030bdcd3f3094b835c987/cloud/images/favicons/onecloud/favicon.ico"},{name:"Oracle Cloud",date:"2 anos",link:"https://www.oracle.com/br/cloud/",image:"https://www.oracle.com/asset/web/favicons/favicon-32.png"},{name:"Azure",date:"2 anos",link:"https://portal.azure.com",image:"https://th.bing.com/th/id/R.07ca8cd025969f66c65611df5aabcf43?rik=E0aGesKhIOc3mg&pid=ImgRaw&r=0"}]},{subtitle:"Hosting:",skills:[{name:"Contabo",date:"3 anos",link:"https://contabo.com/en/",image:"https://contabo.com/assets/apple-touch-icon.png"},{name:"Cloudflare",date:"3 anos",link:"https://www.cloudflare.com/",image:"https://cf-assets.www.cloudflare.com/slt3lc6tev37/53qCYhQbir5WtIU0VDWESo/954a48bfb17f429acf469e5f14345d83/unnamed-3.png"}]},{subtitle:"Gerenciamento de Dependências:",skills:[{name:"Npm",date:"5 anos",category:"JavaScript",link:"https://www.npmjs.com/",image:"https://static-production.npmjs.com/58a19602036db1daee0d7863c94673a4.png"},{name:"Yarn",date:"5 anos",category:"JavaScript",link:"https://yarnpkg.com/",image:"https://yarnpkg.com/img/yarn-favicon.svg"},{name:"Composer",date:"3 anos",category:"PHP",link:"https://getcomposer.org/",image:"https://getcomposer.org/img/logo-composer-transparent5.png"},{name:"Maven",date:"3 anos",category:"Java",link:"https://mvnrepository.com/",image:"https://mvnrepository.com/assets/images/7080b8b0f6f48e6fbaffd5f9d85fcc7f-favicon.ico"}]},{subtitle:"Framework:",skills:[{name:"Electron",date:"2 anos",category:"React, Vue",link:"https://www.electronjs.org",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg"},{name:"Laravel",date:"3 anos",category:"PHP",link:"https://laravel.com",image:"https://laravel.com/img/favicon/apple-touch-icon.png"},{name:"Spring",date:"3 anos",category:"Java, JS/TS:APIs RESTful",link:"https://spring.io",image:"https://www.vectorlogo.zone/logos/springio/springio-icon.svg"},{name:"Next.js",date:"2 anos",category:"React, Vue",link:"https://nextjs.org",image:"https://nextjs.org/favicon.ico"},{name:"Vite.js",date:"4 anos",category:"React, Vue",link:"https://vitejs.dev/",image:"https://vitejs.dev/logo.svg"},{name:"Slim",date:"2 anos",category:"PHP",link:"https://www.slimframework.com/",image:"https://www.slimframework.com/assets/images/favicon.png"}]},{subtitle:"IDE:",skills:[{name:"sublime text",category:"2014 até 2018",link:"https://www.sublimetext.com/3",image:"https://www.sublimetext.com/favicon.ico"},{name:"Atom",category:"2014 até 2018",link:"https://atom-editor.cc/",image:"https://atom-editor.cc/favicon.ico"},{name:"Eclipse",category:"2014 até 2018",link:"https://eclipseide.org/",image:"https://eclipseide.org/favicon.ico"},{name:"IntelliJ IDEA",date:"3 anos",link:"https://www.jetbrains.com/idea/buy/?section=commercial&billing=yearly",image:"https://upload.wikimedia.org/wikipedia/commons/9/9c/IntelliJ_IDEA_Icon.svg"},{name:"VSCode",date:"5 anos",link:"https://code.visualstudio.com/",image:"https://code.visualstudio.com/apple-touch-icon.png"},{name:"WebStorm",date:"4 anos",link:"https://www.jetbrains.com/webstorm/",image:"https://logonoid.com/images/webstorm-logo.png"}]},{subtitle:"Controle de Versão:",skills:[{name:"Git",date:"4 anos",link:"https://git-scm.com/downloads",image:"https://git-scm.com/favicon.ico"},{name:"GitLab",date:"4 anos",link:"https://gitlab.com/",image:"https://gitlab.com/assets/favicon-72a2cad5025aa931d6ea56c3201d1f18e68a8cd39788c7c80d5b2b82aa5143ef.png"},{name:"Git-hub",date:"3 anos",link:"https://github.com/Vidigal-code",image:"https://github.com/fluidicon.png"}]},{subtitle:"Sistema Operacionais:",skills:[{name:"Linux",date:"7 anos",link:"https://www.linux.org/pages/download/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"},{name:"Ubuntu",date:"3 anos",link:"https://ubuntu.com/download",image:"https://assets.ubuntu.com/v1/17b68252-apple-touch-icon-180x180-precomposed-ubuntu.png"},{name:"Kali",date:"5 anos",link:"https://www.kali.org/get-kali/#kali-platforms",image:"https://www.kali.org/images/kali-logo.svg"},{name:"Windows",date:"12 anos",link:"https://www.microsoft.com/software-download/windows11",image:"https://aadcdn.msftauth.net/shared/1.0/content/images/favicon_a_eupayfgghqiai7k9sol6lg2.ico"}]},{subtitle:"Outros:",skills:[{name:"Virtualbox",date:"6 anos",link:"https://www.virtualbox.org/",image:"https://www.virtualbox.org/favicon.ico"},{name:"NaviCat",date:"5 anos",link:"https://www.navicat.com/en",image:"https://www.navicat.com/images/Navicat_16_Premium_win_256x256.ico"}]}]},experiences:{title:"Experiência",desc:`Gostaria de compartilhar um pouco sobre minha trajetória até o momento e expressar meu interesse em ingressar no mercado de trabalho. Atualmente, conto com 20 anos de idade e embora minha jornada profissional ainda não tenha experiências formais em empresas, venho me dedicando ativamente ao campo da programação desde 2014, quando iniciei meus estudos aos 12 anos.

O fato de ter ingressado tão cedo neste setor trouxe consigo desafios, principalmente no que diz respeito à obtenção de oportunidades formais. Já aos 16 anos, busquei participar de processos seletivos em empresas, mesmo obtendo sucesso nas entrevistas, não obtive as oportunidades almejadas.

Contudo, isso não me desmotivou. Paralelamente, explorei o campo do freelancing, realizando trabalhos autônomos desde 2020 e obtendo resultados satisfatórios. Esta experiência tem sido enriquecedora, permitindo-me desenvolver minhas habilidades e contribuir efetivamente em projetos diversos.

Neste momento, busco ativamente especializar-me ainda mais, aprimorando minhas competências técnicas e práticas, com o objetivo de ingressar no mercado de trabalho formal. Estou confiante de que minha dedicação e experiência acumulada ao longo dos anos serão valiosas para contribuir de maneira significativa em um ambiente profissional.`,info:[{id:0,img:"",role:"Desenvolvedor de software",company:"",date:"jan de 2020 - o momento · 3 anos 11 meses",desc:"Como profissional autônomo, especializo-me em consultorias de TI e no desenvolvimento de sites para empresas. Utilizo tecnologias como PHP, Laravel, React ou Vue, e Vite, para criar soluções eficientes e seguras. Meu enfoque principal está no desenvolvimento de aplicações web responsivas, personalizadas de acordo com as necessidades específicas dos clientes. Estou aberto a colaborações e desafios que impulsionem meu crescimento profissional. Se houver interesse em discutir parcerias ou obter mais informações, estou à disposição para uma conversa mais detalhada.",skillsFreeLancerTitle:"Serviços prestados:",skillsFreeLancer:["Desenvolvimento web","Suporte técnico","Suporte de redes","Desenvolvimento de software personalizado"],skillsTitle:"Habilidades",skills:["Node.js","React.js","Vue.js","Php","Java","Mysql","Mariadb","Laravel"],doc:""}]},projects:{nav:{ProjectAll:"Todos",ProjectWeb:"Web",Bootcamp:"Bootcamp"},buttonGitHubTitle:"Ver código",buttonWebappTitle:"Ver aplicação em direto",title:"Projetos",desc:"Já trabalhei numa vasta gama de projectos. Desde aplicações web a aplicações android. Aqui estão alguns dos meus projectos.",info:[{id:1,title:"Bootcamp-Orange-Tech",date:"Jan 1, 2022",description:"Orange tech + front-end and back-end development aims to really prepare for the best jobs in the technology market. Banco Inter, in partnership with DIO, which will address JavaScript, HTML, CSS, Typescript and React technologies from the beginning.",image:"https://github.com/Vidigal-code/Bootcamp-Orange-Tech/raw/main/Pokedex-OrangeTech/assets/img/Project%20Image/Pokedex.gif",tags:["React.Js","HTML","Node.Js","Typescript","Javascript","Css"],category:"All",github:"https://github.com/Vidigal-code/Bootcamp-Orange-Tech",webapp:"https://vidigal-code.github.io/Bootcamp-Orange-Tech/Pokedex-OrangeTech/index.html"}]},education:{title:"Educação",desc:`
Desde 2014, mantenho um compromisso autodidata, participando ativamente de cursos em renomadas plataformas educacionais, como Udemy, Coursera, Rocketseat e Digital Innovation One (DIO). Esse empenho constante em busca de conhecimento resultou na obtenção de certificados relevantes que atestam minha competência e dedicação.

Segue abaixo alguns dos cursos e certificações que adquiri ao longo da minha trajetória profissional:`,info:[{id:0,img:"https://estacio.br/static/favicon-estacio.png",school:"Estácio",curseMoment:"Cursando - Universidade",curseLink:"https://estacio.br/",curseTitle:"Clique Aqui",gradetitle:"",gradevalue:"",linkIcon:"https://estacio.br/",CertificateLink:"",CertificateTitle:"",CertificateImg:"",date:"mai de 2023 - fev de 2026",desc:`Meu nome é Kauan Vidigal estou cursando Ciência da Computação. Desde criança, sempre fui fascinado pelo mundo da tecnologia e computadores. A medida que crescia, essa paixão se intensificava, levando-me a escolher a Ciência da Computação como minha área de estudo e carreira.

Uma das principais razões pelas quais me dediquei a essa área é a sua constante evolução e inovação. A tecnologia está em constante mudança, e a Ciência da Computação me proporciona um ambiente desafiador e estimulante para acompanhar essas transformações. A cada dia, novas tecnologias e técnicas surgem, criando oportunidades empolgantes para resolver problemas complexos e melhorar a vida das pessoas.`,degree:"Bacharelado, Ciência da Computação"},{id:1,img:"https://hermes.digitalinnovation.one/tracks/59417914-c4ce-4bf8-b802-f1c1985a07fa.png",school:"DIO",curseMoment:"Bootcamp + Orange Tech - Front-End",curseLink:"https://www.dio.me/certificate/3820E485/share",curseTitle:"Clique Aqui",gradetitle:"",gradevalue:"",linkIcon:"https://www.dio.me/",CertificateLink:"https://www.dio.me/certificate/3820E485/share",CertificateTitle:"Certificado",CertificateImg:"https://hermes.digitalinnovation.one/certificates/cover/3820E485.jpg",date:"16 de dez, concluído",desc:"",degree:"Curso de Desenvolvimento de front-end"},{id:2,img:"https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/8PtnTFGuUVu.png",school:"Meta",curseMoment:"Programa de cursos integrados: Meta Front-End Developer",curseLink:"https://www.coursera.org/account/accomplishments/specialization/certificate/BFEF34UKVQD3",curseTitle:"Clique Aqui",gradetitle:"",gradevalue:"",linkIcon:"https://www.coursera.org/professional-certificates/meta-front-end-developer?",CertificateLink:"https://www.coursera.org/account/accomplishments/specialization/certificate/BFEF34UKVQD3",CertificateTitle:"Certificado",CertificateImg:"https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~BFEF34UKVQD3/CERTIFICATE_LANDING_PAGE~BFEF34UKVQD3.jpeg",date:"Mar 26, 2023, concluído",desc:"",degree:"Curso de Desenvolvimento de front-end"},{id:3,img:"https://duke.edu/_themes/duke/img/favicon.ico",school:"Duke University ",curseMoment:"Fundamentos de programação Java e engenharia de software",curseLink:"https://www.coursera.org/account/accomplishments/specialization/certificate/4V8H29UZHPG7",curseTitle:"Clique Aqui",gradetitle:"",gradevalue:"",linkIcon:"https://www.coursera.org/specializations/java-programming",CertificateLink:"https://www.coursera.org/account/accomplishments/specialization/certificate/4V8H29UZHPG7",CertificateTitle:"Certificado",CertificateImg:"https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~4V8H29UZHPG7/CERTIFICATE_LANDING_PAGE~4V8H29UZHPG7.jpeg",date:"Nov 14, 2022, concluído",desc:"",degree:"Curso Sobre a linguagem Java"}]},contact:{title:"Contato",desc:"Estou à disposição para esclarecimentos, sugestões ou para discutir possíveis oportunidades de colaboração. Sua participação é fundamental para contribuir para nosso contínuo crescimento. Por favor, não hesite em entrar em contato comigo. Agradeço antecipadamente pela consideração e estou ansioso(a) para possíveis interações produtivas.",emailtile:"Enviar-me um e-mail",emailyourtile:"O seu e-mail",emailyourname:"O seu nome",subject:"Assunto",message:"Messagem",submit:"Enviar",submitsuccess:"Messagem Enviada com Sucesso!"},about:{title:"Sobre",desc:"Meu nome é Kauan Vidigal, tenho 20 anos sou de SP/Brasil",linkheaderimg:"https://raw.githubusercontent.com/Vidigal-code/React-portfolio/c8f45e97e3d4549213aa29205881a3d76fb81434/src/images/header-img.svg",bannerimg:"",userimg:"https://raw.githubusercontent.com/Vidigal-code/React-portfolio/main/src/images/Vidigal.jpg"},GithubLinkTitle:"Github",GithubLink:"https://github.com/Vidigal-code",ResumeTitle:"Currículo",ResumeLink:"https://github.com/Vidigal-code/React-portfolio/blob/main/src/data/Resume/RESUME.pdf",homelinkimg:"https://raw.githubusercontent.com/Vidigal-code/React-portfolio/main/src/images/Home.gif",linkedin:"https://www.linkedin.com/in/kauan-vidigal/",twitter:"",insta:"",facebook:""},Lx={name:"Kauan Vidigal",functions:"Software developer | Full Stack | Java, Mysql, React js | Freelance",roles:["Welcome!","I'm a full-stack developer"],location:{countries:"Brazil / São Paulo"},description:`My name is Kauan Vidigal, I'm a self-taught Full-Stack developer in constant pursuit of technological excellence. Committed to solidifying my expertise, I aim to obtain a degree in Computer Science. Since childhood, I've explored operating systems, including Windows XP, Windows 7 and Kali Linux, and since 2014, I've focused on programming.

I have a special affinity for Java and Object-Oriented Programming. As a self-employed professional, I specialize in IT consultancy and website development for companies. I use technologies such as PHP, Laravel, React or Vue, and Vite, to create efficient and secure solutions. My main focus is on developing responsive web applications, customized according to clients' specific needs.

I'm open to collaborations and challenges that boost my professional growth. If you are interested in discussing partnerships or obtaining more information, I am available for a more detailed conversation.`,Modelight:"Light",Modedark:"Dark",nav:{home:"Home",skills:"Skills",experience:"Experience",projects:"Projects",education:"Education",contact:"Contact",about:"About"},skillsAll:{title:"Tools I use:",desc:`Since 2014, I have dedicated my time to studying and improving in the field of Full-Stack development. Throughout this journey, I have acquired knowledge that includes older technologies, which, although they may not be as prevalent in today's market, have provided a solid foundation.

The essence of this experience lies in the deep understanding of essential concepts, which has become an asset when exploring and absorbing new technologies. This robust background not only makes it easier to adapt to new tools and trends, but also provides a valuable perspective when facing innovative challenges.

On the back-end, I specialize in Java P.O.O, MySQL, MariaDB, Node.js, PHP, and Laravel. On the front-end, I focus on React.js and Vite or Vue, with the aim of creating modern, responsive interfaces. This background not only highlights my ability to evolve with the demands of the market, but also reflects my ongoing commitment to learning and professional growth. I am open to collaboration and eager to explore opportunities that contribute to my professional development.`,info:[{subtitle:"Programming languages:",skills:[{name:"Java",date:"3 years",link:"https://www.oracle.com/java/technologies/downloads/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"},{name:"Php",date:"7 years",link:"https://www.php.net",image:"https://www.php.net/favicon.ico?v=2"},{name:"Javascript",date:"7 years",link:"https://www.javascript.com",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"},{name:"Typescript",date:"4 years",link:"https://www.typescriptlang.org",image:"https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae"}]},{subtitle:"Front-end development:",skills:[{name:"HTML",date:"7 years",link:"https://www.w3schools.com/html/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"},{name:"CSS",date:"7 years",link:"https://www.w3schools.com/Css/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"},{name:"React js",date:"5 years",link:"https://react.dev/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"},{name:"Tailwind",date:"5 years",link:"https://tailwindcss.com/",image:"https://tailwindcss.com/favicons/apple-touch-icon.png?v=3"},{name:"Styled",date:"5 years",link:"https://styled-components.com/",image:"https://styled-components.com/favicon.png"},{name:"Bootstrap",date:"5 years",link:"https://getbootstrap.com/",image:"https://getbootstrap.com/docs/5.3/assets/img/favicons/apple-touch-icon.png"},{name:"SASS",date:"5 years",link:"https://sass-lang.com/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"},{name:"Vue",date:"4 years",link:"https://vuejs.org/",image:"https://br.vuejs.org/images/icons/apple-icon-57x57.png"}]},{subtitle:"Back-end development:",skills:[{name:"Node.js",date:"5 years",category:"JavaScript server-side",link:"https://nodejs.org/en/download/",image:"https://nodejs.org/static/images/favicons/favicon.png"},{name:"IIS",date:"7 years",category:"Web servers",link:"https://www.microsoft.com/pt-BR/download/details.aspx?id=48264",image:"https://www.microsoft.com/favicon.ico?v2"},{name:"Apache HTTP Server",date:"7 years",category:"Web servers",link:"https://apache.org/",image:"https://apache.org/favicons/apple-touch-icon-57x57.png"},{name:"Apache Tomcat",date:"7 years",category:"Web servers",link:"https://tomcat.apache.org/",image:"https://tomcat.apache.org/res/images/tomcat.png"},{name:"Nginx",date:"5 years",category:"Web servers",link:"https://nginx.org/en/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg"},{name:"Xamp",date:"7 years",category:"Pacotes de Servidores",link:"https://www.apachefriends.org/download.html",image:"https://www.apachefriends.org/images/favicon-18f9bd42.png"},{name:"Wamp",date:"7 years",category:"Pacotes de Servidores",link:"https://wampserver.aviatechno.net/",image:"https://wampserver.aviatechno.net/css/favicon.ico"}]},{subtitle:"Database:",skills:[{name:"Mysql",date:"5 years",link:"https://www.mysql.com/",image:"https://labs.mysql.com/common/themes/sakila/favicon.ico"},{name:"Postgresql",date:"3 years",link:"https://www.postgresql.org/",image:"https://www.postgresql.org/media/img/about/press/elephant.png"},{name:"MongoDB",date:"3 years",link:"https://www.mongodb.com/",image:"https://www.mongodb.com/assets/images/global/favicon.ico"},{name:"Mariadb",date:"5 years",link:"https://mariadb.org/",image:"https://mariadb.org/wp-content/uploads/2019/02/cropped-mariadb_org_rgb_r_512-1-32x32.png"}]},{subtitle:"Remote working environment:",skills:[{name:"Anydesk",date:"4 years",link:"https://anydesk.com/",image:"https://s3.amazonaws.com//beta-img.b2bstack.net/uploads/production/product/product_image/16462/anydesk.jpg"},{name:"TeamViewer",date:"4 years",link:"https://www.teamviewer.com/",image:"https://www.teamviewer.com/etc.clientlibs/teamviewer/clientlibs/clientlib-resources/resources/favicon.png"}]},{subtitle:"Cloud:",skills:[{name:"Aws",date:"2 years",link:"https://aws.amazon.com/pt/free/",image:"https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_179x109.png"},{name:"Cloud",date:"4 years",link:"https://cloud.google.com/",image:"https://www.gstatic.com/devrel-devsite/prod/v0d244f667a3683225cca86d0ecf9b9b81b1e734e55a030bdcd3f3094b835c987/cloud/images/favicons/onecloud/favicon.ico"},{name:"Oracle Cloud",date:"2 anos",link:"https://www.oracle.com/br/cloud/",image:"https://www.oracle.com/asset/web/favicons/favicon-32.png"},{name:"Azure",date:"2 anos",link:"https://portal.azure.com",image:"https://th.bing.com/th/id/R.07ca8cd025969f66c65611df5aabcf43?rik=E0aGesKhIOc3mg&pid=ImgRaw&r=0"}]},{subtitle:"Hosting:",skills:[{name:"Contabo",date:"3 years",link:"https://contabo.com/en/",image:"https://contabo.com/assets/apple-touch-icon.png"},{name:"Cloudflare",date:"3 years",link:"https://www.cloudflare.com/",image:"https://cf-assets.www.cloudflare.com/slt3lc6tev37/53qCYhQbir5WtIU0VDWESo/954a48bfb17f429acf469e5f14345d83/unnamed-3.png"}]},{subtitle:"Dependency Management:",skills:[{name:"Npm",date:"5 years",category:"JavaScript",link:"https://www.npmjs.com/",image:"https://static-production.npmjs.com/58a19602036db1daee0d7863c94673a4.png"},{name:"Yarn",date:"5 years",category:"JavaScript",link:"https://yarnpkg.com/",image:"https://yarnpkg.com/img/yarn-favicon.svg"},{name:"Composer",date:"3 years",category:"PHP",link:"https://getcomposer.org/",image:"https://getcomposer.org/img/logo-composer-transparent5.png"},{name:"Maven",date:"3 years",category:"Java",link:"https://mvnrepository.com/",image:"https://mvnrepository.com/assets/images/7080b8b0f6f48e6fbaffd5f9d85fcc7f-favicon.ico"}]},{subtitle:"Framework:",skills:[{name:"Electron",date:"2 years",category:"React, Vue",link:"https://www.electronjs.org",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg"},{name:"Laravel",date:"3 years",category:"PHP",link:"https://laravel.com",image:"https://laravel.com/img/favicon/apple-touch-icon.png"},{name:"Spring",date:"3 years",category:"Java, JS/TS:APIs RESTful",link:"https://spring.io",image:"https://www.vectorlogo.zone/logos/springio/springio-icon.svg"},{name:"Next.js",date:"2 years",category:"React, Vue",link:"https://nextjs.org",image:"https://nextjs.org/favicon.ico"},{name:"Vite.js",date:"4 years",category:"React, Vue",link:"https://vitejs.dev/",image:"https://vitejs.dev/logo.svg"},{name:"Slim",date:"2 years",category:"PHP",link:"https://www.slimframework.com/",image:"https://www.slimframework.com/assets/images/favicon.png"}]},{subtitle:"IDE:",skills:[{name:"sublime text",category:"2014 to 2018",link:"https://www.sublimetext.com/3",image:"https://www.sublimetext.com/favicon.ico"},{name:"Atom",category:"2014 to 2018",link:"https://atom-editor.cc/",image:"https://atom-editor.cc/favicon.ico"},{name:"Eclipse",category:"2014 to 2018",link:"https://eclipseide.org/",image:"https://eclipseide.org/favicon.ico"},{name:"IntelliJ IDEA",date:"3 years",link:"https://www.jetbrains.com/idea/buy/?section=commercial&billing=yearly",image:"https://upload.wikimedia.org/wikipedia/commons/9/9c/IntelliJ_IDEA_Icon.svg"},{name:"VSCode",date:"5 years",link:"https://code.visualstudio.com/",image:"https://code.visualstudio.com/apple-touch-icon.png"},{name:"WebStorm",date:"4 years",link:"https://www.jetbrains.com/webstorm/",image:"https://logonoid.com/images/webstorm-logo.png"}]},{subtitle:"Version control:",skills:[{name:"Git",date:"4 years",link:"https://git-scm.com/downloads",image:"https://git-scm.com/favicon.ico"},{name:"GitLab",date:"4 years",link:"https://gitlab.com/",image:"https://gitlab.com/assets/favicon-72a2cad5025aa931d6ea56c3201d1f18e68a8cd39788c7c80d5b2b82aa5143ef.png"},{name:"Git-hub",date:"3 years",link:"https://github.com/Vidigal-code",image:"https://github.com/fluidicon.png"}]},{subtitle:"Operating System:",skills:[{name:"Linux",date:"7 years",link:"https://www.linux.org/pages/download/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"},{name:"Ubuntu",date:"3 years",link:"https://ubuntu.com/download",image:"https://assets.ubuntu.com/v1/17b68252-apple-touch-icon-180x180-precomposed-ubuntu.png"},{name:"Kali",date:"5 years",link:"https://www.kali.org/get-kali/#kali-platforms",image:"https://www.kali.org/images/kali-logo.svg"},{name:"Windows",date:"12 years",link:"https://www.microsoft.com/software-download/windows11",image:"https://aadcdn.msftauth.net/shared/1.0/content/images/favicon_a_eupayfgghqiai7k9sol6lg2.ico"}]},{subtitle:"Others:",skills:[{name:"Virtualbox",date:"6 years",link:"https://www.virtualbox.org/",image:"https://www.virtualbox.org/favicon.ico"},{name:"NaviCat",date:"5 years",link:"https://www.navicat.com/en",image:"https://www.navicat.com/images/Navicat_16_Premium_win_256x256.ico"}]}]},experiences:{title:"Experience",desc:`I'd like to share a little about my career so far and express my interest in entering the job market. I'm currently 20 years old, and although I haven't had any formal experience in companies, I've been actively working in the field of programming since 2014, when I started studying at the age of 12

The fact that I entered this sector so early brought with it challenges, especially in terms of obtaining formal opportunities. When I was 16, I tried to take part in selection processes at companies, but even though I was successful in the interviews, I didn't get the opportunities I wanted.

However, this didn't put me off. At the same time, I explored the field of freelancing, doing independent work since 2020 and getting satisfactory results. This experience has been enriching, allowing me to develop my skills and contribute effectively to various projects.

At the moment, I am actively seeking to specialize even more, improving my technical and practical skills, with the aim of entering the formal job market. I am confident that the dedication and experience I have accumulated over the years will be invaluable in making a significant contribution in a professional environment.`,info:[{id:0,img:"",role:"Desenvolvedor de software",company:"",date:"Jan 2020 - currently - 3 years 11 months",desc:"As a self-employed professional, I specialize in IT consultancy and website development for companies. I use technologies such as PHP, Laravel, React or Vue, and Vite, to create efficient and secure solutions. My main focus is on developing responsive web applications, customized to the specific needs of clients. I am open to collaborations and challenges that will boost my professional growth. If you are interested in discussing partnerships or obtaining more information, I am available for a more detailed conversation.",skillsFreeLancerTitle:"Services provided:",skillsFreeLancer:["Web development","Technical support","Network support","Custom software development"],skillsTitle:"Skills",skills:["Node.js","React.js","Vue.js","Php","Java","Mysql","Mariadb","Laravel"],doc:""}]},education:{title:"Education",desc:`
Since 2014, I have maintained a self-taught commitment, actively participating in courses on renowned educational platforms such as Udemy, Coursera, Rocketseat and Digital Innovation One (DIO). This constant commitment to the pursuit of knowledge has resulted in me obtaining relevant certificates that attest to my competence and dedication.

Below are some of the courses and certifications I have acquired throughout my professional career:`,info:[{id:0,img:"https://estacio.br/static/favicon-estacio.png",school:"Estácio",curseMoment:"Studying - University",curseLink:"https://estacio.br/",curseTitle:"Click here",gradetitle:"",gradevalue:"",linkIcon:"https://estacio.br/",CertificateLink:"",CertificateTitle:"",CertificateImg:"",date:"May 2023 - Feb 2026",desc:`My name is Kauan Vidigal and I'm studying Computer Science. Ever since I was a child, I've always been fascinated by the world of technology and computers. As I grew up, this passion intensified, leading me to choose Computer Science as my area of study and career.

One of the main reasons I dedicated myself to this area is its constant evolution and innovation. Technology is constantly changing, and Computer Science provides me with a challenging and stimulating environment to keep up with these transformations. Every day, new technologies and techniques emerge, creating exciting opportunities to solve complex problems and improve people's lives.`,degree:"Bachelor, Computer Science"},{id:1,img:"https://hermes.digitalinnovation.one/tracks/59417914-c4ce-4bf8-b802-f1c1985a07fa.png",school:"DIO",curseMoment:"Bootcamp + Orange Tech - Front-End",curseLink:"https://www.dio.me/certificate/3820E485/share",curseTitle:"Click here",gradetitle:"",gradevalue:"",linkIcon:"https://www.dio.me/",CertificateLink:"https://www.dio.me/certificate/3820E485/share",CertificateTitle:"Certificate",CertificateImg:"https://hermes.digitalinnovation.one/certificates/cover/3820E485.jpg",date:"Dec 16th, completed",desc:"",degree:"Front-end development course"},{id:2,img:"https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/8PtnTFGuUVu.png",school:"Meta",curseMoment:"Integrated course program: Meta Front-End Developer",curseLink:"https://www.coursera.org/account/accomplishments/specialization/certificate/BFEF34UKVQD3",curseTitle:"Click here",gradetitle:"",gradevalue:"",linkIcon:"https://www.coursera.org/professional-certificates/meta-front-end-developer?",CertificateLink:"https://www.coursera.org/account/accomplishments/specialization/certificate/BFEF34UKVQD3",CertificateTitle:"Certificate",CertificateImg:"https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~BFEF34UKVQD3/CERTIFICATE_LANDING_PAGE~BFEF34UKVQD3.jpeg",date:"Mar 26, 2023, completed",desc:"",degree:"Front-end development course"},{id:3,img:"https://duke.edu/_themes/duke/img/favicon.ico",school:"Duke University ",curseMoment:"Java programming fundamentals and software engineering",curseLink:"https://www.coursera.org/account/accomplishments/specialization/certificate/4V8H29UZHPG7",curseTitle:"Click here",gradetitle:"",gradevalue:"",linkIcon:"https://www.coursera.org/specializations/java-programming",CertificateLink:"https://www.coursera.org/account/accomplishments/specialization/certificate/4V8H29UZHPG7",CertificateTitle:"Certificate",CertificateImg:"https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~4V8H29UZHPG7/CERTIFICATE_LANDING_PAGE~4V8H29UZHPG7.jpeg",date:"Nov 14, 2022, completed",desc:"",degree:"Java Language Course"}]},projects:{nav:{ProjectAll:"All",ProjectWeb:"Web",Bootcamp:"Bootcamp"},buttonGitHubTitle:"See code",buttonWebappTitle:"See the application live",title:"Projects",desc:"I've worked on a wide range of projects. From web applications to android applications. Here are some of my projects.",info:[{id:1,title:"Bootcamp-Orange-Tech",date:"Jan 1, 2022",description:"Orange tech + front-end and back-end development aims to really prepare for the best jobs in the technology market. Banco Inter, in partnership with DIO, which will address JavaScript, HTML, CSS, Typescript and React technologies from the beginning.",image:"https://github.com/Vidigal-code/Bootcamp-Orange-Tech/raw/main/Pokedex-OrangeTech/assets/img/Project%20Image/Pokedex.gif",tags:["React.Js","HTML","Node.Js","Typescript","Javascript","Css"],category:"All",github:"https://github.com/Vidigal-code/Bootcamp-Orange-Tech",webapp:"https://vidigal-code.github.io/Bootcamp-Orange-Tech/Pokedex-OrangeTech/index.html"}]},contact:{title:"Contact",desc:"I am at your disposal for clarifications, suggestions or to discuss possible collaboration opportunities. Your participation is essential to contribute to our continued growth. Please do not hesitate to contact me. Thank you in advance for your consideration and I look forward to possible productive interactions.",emailtile:"Send me an email",emailyourtile:"Your email",emailyourname:"Your name",subject:"Subject",message:"Message",submit:"Send",submitsuccess:"Message Sent Successfully!"},about:{title:"About",desc:"My name is Kauan Vidigal, I'm 20 years old from SP/Brazil",linkheaderimg:"https://raw.githubusercontent.com/Vidigal-code/React-portfolio/c8f45e97e3d4549213aa29205881a3d76fb81434/src/images/header-img.svg",bannerimg:"",userimg:"https://raw.githubusercontent.com/Vidigal-code/React-portfolio/main/src/images/Vidigal.jpg"},GithubLinkTitle:"Github",GithubLink:"https://github.com/Vidigal-code",ResumeTitle:"Resume",ResumeLink:"https://github.com/Vidigal-code/React-portfolio/blob/main/src/data/Resume/RESUME.pdf",homelinkimg:"https://raw.githubusercontent.com/Vidigal-code/React-portfolio/main/src/images/Home.gif",linkedin:"https://www.linkedin.com/in/kauan-vidigal/",twitter:"",insta:"",facebook:""},Nx={name:"Kauan Vidigal",functions:"Software developer | Full Stack | Java, Mysql, React js | Freelance",roles:["Welcome!","I'm a full-stack developer"],location:{countries:"Brasil / São Paulo"},description:`Mi nombre es Kauan Vidigal, soy un desarrollador Full-Stack autodidacta en constante búsqueda de la excelencia tecnológica. Comprometido con solidificar mis conocimientos, pretendo obtener una licenciatura en Informática. Desde pequeño he explorado los sistemas operativos. , incluidos Windows XP, Windows 7 y Kali Linux, y desde 2014 me he centrado en la programación.

Tengo especial afinidad por Java y la Programación Orientada a Objetos. Como profesional autónomo, me especializo en consultoría informática y desarrollo de sitios web para empresas. Utilizo tecnologías como PHP, Laravel, React o Vue, y Vite, para crear Soluciones eficientes y seguras. Mi enfoque principal es el desarrollo de aplicaciones web responsivas, personalizadas de acuerdo con las necesidades específicas de los clientes.

Estoy abierto a colaboraciones y desafíos que impulsen mi crecimiento profesional. Si está interesado en discutir alianzas u obtener más información, estoy disponible para una conversación más detallada.`,Modelight:"Ligero",Modedark:"Oscuro",nav:{home:"Home",skills:"Habilidades",experience:"Experiencia",projects:"Proyectos",education:"Educación",contact:"Contacto",about:"About"},skillsAll:{title:"Herramientas que uso:",desc:`Desde 2014, he dedicado mi tiempo a estudiar y mejorar en el campo del desarrollo Full-Stack. A lo largo de este viaje, he adquirido conocimientos que incluyen tecnologías más antiguas, que si bien pueden no ser tan predominantes en el mercado actual, me han brindado una base sólida.

La esencia de esta experiencia radica en la comprensión profunda de conceptos esenciales, que se ha convertido en un activo a la hora de explorar y absorber nuevas tecnologías. Esta sólida formación no sólo facilita la adaptación a nuevas herramientas y tendencias, sino que también proporciona una perspectiva valiosa a la hora de enfrentando desafíos innovadores.

En el back-end, me especializo en Java P.O.O, MySQL, MariaDB, Node.js, PHP y Laravel. En el front-end, me enfoco en React.js y Vite o Vue, con el objetivo de crear soluciones modernas, Interfaces responsivas. Esta experiencia no solo resalta mi capacidad para evolucionar con las demandas del mercado, sino que también refleja mi compromiso continuo con el aprendizaje y el crecimiento profesional. Estoy abierto a la colaboración y ansioso por explorar oportunidades que contribuyan a mi desarrollo profesional`,info:[{subtitle:"Lenguajes de programación:",skills:[{name:"Java",date:"3 años",link:"https://www.oracle.com/java/technologies/downloads/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"},{name:"Php",date:"7 años",link:"https://www.php.net",image:"https://www.php.net/favicon.ico?v=2"},{name:"Javascript",date:"7 años",link:"https://www.javascript.com",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"},{name:"Typescript",date:"4 años",link:"https://www.typescriptlang.org",image:"https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae"}]},{subtitle:"Desarrollo front-end:",skills:[{name:"HTML",date:"7 años",link:"https://www.w3schools.com/html/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"},{name:"CSS",date:"7 años",link:"https://www.w3schools.com/Css/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"},{name:"React js",date:"5 años",link:"https://react.dev/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"},{name:"Tailwind",date:"5 años",link:"https://tailwindcss.com/",image:"https://tailwindcss.com/favicons/apple-touch-icon.png?v=3"},{name:"Styled",date:"5 años",link:"https://styled-components.com/",image:"https://styled-components.com/favicon.png"},{name:"Bootstrap",date:"5 años",link:"https://getbootstrap.com/",image:"https://getbootstrap.com/docs/5.3/assets/img/favicons/apple-touch-icon.png"},{name:"SASS",date:"5 años",link:"https://sass-lang.com/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"},{name:"Vue",date:"4 años",link:"https://vuejs.org/",image:"https://br.vuejs.org/images/icons/apple-icon-57x57.png"}]},{subtitle:"Desarrollo de back-end:",skills:[{name:"Node.js",date:"5 años",category:"JavaScript server-side",link:"https://nodejs.org/en/download/",image:"https://nodejs.org/static/images/favicons/favicon.png"},{name:"IIS",date:"7 años",category:"Web servers",link:"https://www.microsoft.com/pt-BR/download/details.aspx?id=48264",image:"https://www.microsoft.com/favicon.ico?v2"},{name:"Apache HTTP Server",date:"7 años",category:"Web servers",link:"https://apache.org/",image:"https://apache.org/favicons/apple-touch-icon-57x57.png"},{name:"Apache Tomcat",date:"7 años",category:"Web servers",link:"https://tomcat.apache.org/",image:"https://tomcat.apache.org/res/images/tomcat.png"},{name:"Nginx",date:"5 años",category:"Web servers",link:"https://nginx.org/en/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg"},{name:"Xamp",date:"7 años",category:"Pacotes de Servidores",link:"https://www.apachefriends.org/download.html",image:"https://www.apachefriends.org/images/favicon-18f9bd42.png"},{name:"Wamp",date:"7 años",category:"Pacotes de Servidores",link:"https://wampserver.aviatechno.net/",image:"https://wampserver.aviatechno.net/css/favicon.ico"}]},{subtitle:"Base de datos:",skills:[{name:"Mysql",date:"5 años",link:"https://www.mysql.com/",image:"https://labs.mysql.com/common/themes/sakila/favicon.ico"},{name:"Postgresql",date:"3 años",link:"https://www.postgresql.org/",image:"https://www.postgresql.org/media/img/about/press/elephant.png"},{name:"MongoDB",date:"3 años",link:"https://www.mongodb.com/",image:"https://www.mongodb.com/assets/images/global/favicon.ico"},{name:"Mariadb",date:"5 años",link:"https://mariadb.org/",image:"https://mariadb.org/wp-content/uploads/2019/02/cropped-mariadb_org_rgb_r_512-1-32x32.png"}]},{subtitle:"Entorno de trabajo remoto:",skills:[{name:"Anydesk",date:"4 años",link:"https://anydesk.com/",image:"https://s3.amazonaws.com//beta-img.b2bstack.net/uploads/production/product/product_image/16462/anydesk.jpg"},{name:"TeamViewer",date:"4 años",link:"https://www.teamviewer.com/",image:"https://www.teamviewer.com/etc.clientlibs/teamviewer/clientlibs/clientlib-resources/resources/favicon.png"}]},{subtitle:"Cloud:",skills:[{name:"Aws",date:"2 años",link:"https://aws.amazon.com/pt/free/",image:"https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_179x109.png"},{name:"Cloud",date:"4 años",link:"https://cloud.google.com/",image:"https://www.gstatic.com/devrel-devsite/prod/v0d244f667a3683225cca86d0ecf9b9b81b1e734e55a030bdcd3f3094b835c987/cloud/images/favicons/onecloud/favicon.ico"},{name:"Oracle Cloud",date:"2 anos",link:"https://www.oracle.com/br/cloud/",image:"https://www.oracle.com/asset/web/favicons/favicon-32.png"},{name:"Azure",date:"2 anos",link:"https://portal.azure.com",image:"https://th.bing.com/th/id/R.07ca8cd025969f66c65611df5aabcf43?rik=E0aGesKhIOc3mg&pid=ImgRaw&r=0"}]},{subtitle:"Hosting:",skills:[{name:"Contabo",date:"3 años",link:"https://contabo.com/en/",image:"https://contabo.com/assets/apple-touch-icon.png"},{name:"Cloudflare",date:"3 años",link:"https://www.cloudflare.com/",image:"https://cf-assets.www.cloudflare.com/slt3lc6tev37/53qCYhQbir5WtIU0VDWESo/954a48bfb17f429acf469e5f14345d83/unnamed-3.png"}]},{subtitle:"Gestión de dependencias:",skills:[{name:"Npm",date:"5 años",category:"JavaScript",link:"https://www.npmjs.com/",image:"https://static-production.npmjs.com/58a19602036db1daee0d7863c94673a4.png"},{name:"Yarn",date:"5 años",category:"JavaScript",link:"https://yarnpkg.com/",image:"https://yarnpkg.com/img/yarn-favicon.svg"},{name:"Composer",date:"3 años",category:"PHP",link:"https://getcomposer.org/",image:"https://getcomposer.org/img/logo-composer-transparent5.png"},{name:"Maven",date:"3 años",category:"Java",link:"https://mvnrepository.com/",image:"https://mvnrepository.com/assets/images/7080b8b0f6f48e6fbaffd5f9d85fcc7f-favicon.ico"}]},{subtitle:"Framework:",skills:[{name:"Electron",date:"2 años",category:"React, Vue",link:"https://www.electronjs.org",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg"},{name:"Laravel",date:"3 años",category:"PHP",link:"https://laravel.com",image:"https://laravel.com/img/favicon/apple-touch-icon.png"},{name:"Spring",date:"3 años",category:"Java, JS/TS:APIs RESTful",link:"https://spring.io",image:"https://www.vectorlogo.zone/logos/springio/springio-icon.svg"},{name:"Next.js",date:"2 años",category:"React, Vue",link:"https://nextjs.org",image:"https://nextjs.org/favicon.ico"},{name:"Vite.js",date:"4 años",category:"React, Vue",link:"https://vitejs.dev/",image:"https://vitejs.dev/logo.svg"},{name:"Slim",date:"2 años",category:"PHP",link:"https://www.slimframework.com/",image:"https://www.slimframework.com/assets/images/favicon.png"}]},{subtitle:"IDE:",skills:[{name:"sublime text",category:"2014 to 2018",link:"https://www.sublimetext.com/3",image:"https://www.sublimetext.com/favicon.ico"},{name:"Atom",category:"2014 to 2018",link:"https://atom-editor.cc/",image:"https://atom-editor.cc/favicon.ico"},{name:"Eclipse",category:"2014 to 2018",link:"https://eclipseide.org/",image:"https://eclipseide.org/favicon.ico"},{name:"IntelliJ IDEA",date:"3 años",link:"https://www.jetbrains.com/idea/buy/?section=commercial&billing=yearly",image:"https://upload.wikimedia.org/wikipedia/commons/9/9c/IntelliJ_IDEA_Icon.svg"},{name:"VSCode",date:"5 años",link:"https://code.visualstudio.com/",image:"https://code.visualstudio.com/apple-touch-icon.png"},{name:"WebStorm",date:"4 años",link:"https://www.jetbrains.com/webstorm/",image:"https://logonoid.com/images/webstorm-logo.png"}]},{subtitle:"Version control:",skills:[{name:"Git",date:"4 años",link:"https://git-scm.com/downloads",image:"https://git-scm.com/favicon.ico"},{name:"GitLab",date:"4 años",link:"https://gitlab.com/",image:"https://gitlab.com/assets/favicon-72a2cad5025aa931d6ea56c3201d1f18e68a8cd39788c7c80d5b2b82aa5143ef.png"},{name:"Git-hub",date:"3 años",link:"https://github.com/Vidigal-code",image:"https://github.com/fluidicon.png"}]},{subtitle:"Sistema operativo:",skills:[{name:"Linux",date:"7 años",link:"https://www.linux.org/pages/download/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"},{name:"Ubuntu",date:"3 años",link:"https://ubuntu.com/download",image:"https://assets.ubuntu.com/v1/17b68252-apple-touch-icon-180x180-precomposed-ubuntu.png"},{name:"Kali",date:"5 años",link:"https://www.kali.org/get-kali/#kali-platforms",image:"https://www.kali.org/images/kali-logo.svg"},{name:"Windows",date:"12 años",link:"https://www.microsoft.com/software-download/windows11",image:"https://aadcdn.msftauth.net/shared/1.0/content/images/favicon_a_eupayfgghqiai7k9sol6lg2.ico"}]},{subtitle:"Otros:",skills:[{name:"Virtualbox",date:"6 años",link:"https://www.virtualbox.org/",image:"https://www.virtualbox.org/favicon.ico"},{name:"NaviCat",date:"5 años",link:"https://www.navicat.com/en",image:"https://www.navicat.com/images/Navicat_16_Premium_win_256x256.ico"}]}]},experiences:{title:"Experience",desc:`Me gustaría compartir un poco sobre mi carrera hasta el momento y expresar mi interés en ingresar al mercado laboral. Actualmente tengo 20 años, y aunque no he tenido experiencia formal en empresas, he estado activamente trabajando en el campo de la programación desde 2014, cuando comencé a estudiar a la edad de 12 años

El hecho de ingresar tan temprano a este sector trajo consigo desafíos, especialmente en términos de obtener oportunidades formales. Cuando tenía 16 años intenté participar en procesos de selección en empresas, pero aunque tuve éxito en las entrevistas, No tuve las oportunidades que quería.

Sin embargo, esto no me desanimó. Al mismo tiempo, exploré el campo del trabajo independiente, realizando trabajos independientes desde 2020 y obteniendo resultados satisfactorios. Esta experiencia ha sido enriquecedora, permitiéndome desarrollar mis habilidades y contribuir de manera efectiva en diversos proyectos.

Actualmente estoy buscando activamente especializarme aún más, mejorando mis habilidades técnicas y prácticas, con el objetivo de ingresar al mercado laboral formal. Confío que la dedicación y experiencia que he acumulado a lo largo de estos años serán invaluables para lograr una contribución significativa en un entorno profesional.`,info:[{id:0,img:"",role:"Desarrollador de software",company:"",date:"Ene 2020 - actualmente - 3 años 11 meses",desc:"Como profesional autónomo, me especializo en consultoría informática y desarrollo de sitios web para empresas. Utilizo tecnologías como PHP, Laravel, React o Vue y Vite, para crear soluciones eficientes y seguras. Mi enfoque principal es desarrollar Aplicaciones web responsivas, personalizadas para las necesidades específicas de los clientes. Estoy abierto a colaboraciones y desafíos que impulsarán mi crecimiento profesional. Si está interesado en discutir asociaciones u obtener más información, estoy disponible para una conversación más detallada",skillsFreeLancerTitle:"Servicios prestados:",skillsFreeLancer:["Web development","Technical support","Network support","Custom software development"],skillsTitle:"Habilidades",skills:["Node.js","React.js","Vue.js","Php","Java","Mysql","Mariadb","Laravel"],doc:""}]},education:{title:"Education",desc:`
Desde 2014 he mantenido un compromiso autodidacta, participando activamente en cursos en reconocidas plataformas educativas como Udemy, Coursera, Rocketseat y Digital Innovation One (DIO). Este compromiso constante con la búsqueda del conocimiento me ha permitido obtener relevantes certificados que atestiguan mi competencia y dedicación.

A continuación se detallan algunos de los cursos y certificaciones que he adquirido a lo largo de mi carrera profesional:`,info:[{id:0,img:"https://estacio.br/static/favicon-estacio.png",school:"Estácio",curseMoment:"Studying - University",curseLink:"https://estacio.br/",curseTitle:"Click here",gradetitle:"",gradevalue:"",linkIcon:"https://estacio.br/",CertificateLink:"",CertificateTitle:"",CertificateImg:"",date:"mayo 2023 - febrero 2026",desc:`Mi nombre es Kauan Vidigal y estoy estudiando Informática. Desde pequeño siempre me ha fascinado el mundo de la tecnología y la informática. A medida que fui creciendo esta pasión se intensificó, lo que me llevó a elegir la Informática. como mi área de estudio y carrera.

Una de las principales razones por las que me dediqué a esta área es su constante evolución e innovación. La tecnología cambia constantemente y la Informática me proporciona un entorno desafiante y estimulante para seguir el ritmo de estas transformaciones. Cada día surgen nuevas tecnologías y técnicas. , creando interesantes oportunidades para resolver problemas complejos y mejorar la vida de las personas.`,degree:"Bachelor, Computer Science"},{id:1,img:"https://hermes.digitalinnovation.one/tracks/59417914-c4ce-4bf8-b802-f1c1985a07fa.png",school:"DIO",curseMoment:"Bootcamp + Orange Tech - Front-End",curseLink:"https://www.dio.me/certificate/3820E485/share",curseTitle:"Click here",gradetitle:"",gradevalue:"",linkIcon:"https://www.dio.me/",CertificateLink:"https://www.dio.me/certificate/3820E485/share",CertificateTitle:"Certificate",CertificateImg:"https://hermes.digitalinnovation.one/certificates/cover/3820E485.jpg",date:"Dec 16th, completed",desc:"",degree:"Front-end development course"},{id:2,img:"https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/8PtnTFGuUVu.png",school:"Meta",curseMoment:"Integrated course program: Meta Front-End Developer",curseLink:"https://www.coursera.org/account/accomplishments/specialization/certificate/BFEF34UKVQD3",curseTitle:"Click here",gradetitle:"",gradevalue:"",linkIcon:"https://www.coursera.org/professional-certificates/meta-front-end-developer?",CertificateLink:"https://www.coursera.org/account/accomplishments/specialization/certificate/BFEF34UKVQD3",CertificateTitle:"Certificate",CertificateImg:"https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~BFEF34UKVQD3/CERTIFICATE_LANDING_PAGE~BFEF34UKVQD3.jpeg",date:"Mar 26, 2023, completed",desc:"",degree:"Front-end development course"},{id:3,img:"https://duke.edu/_themes/duke/img/favicon.ico",school:"Duke University ",curseMoment:"Java programming fundamentals and software engineering",curseLink:"https://www.coursera.org/account/accomplishments/specialization/certificate/4V8H29UZHPG7",curseTitle:"Click here",gradetitle:"",gradevalue:"",linkIcon:"https://www.coursera.org/specializations/java-programming",CertificateLink:"https://www.coursera.org/account/accomplishments/specialization/certificate/4V8H29UZHPG7",CertificateTitle:"Certificate",CertificateImg:"https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~4V8H29UZHPG7/CERTIFICATE_LANDING_PAGE~4V8H29UZHPG7.jpeg",date:"Nov 14, 2022, completed",desc:"",degree:"Java Language Course"}]},projects:{nav:{ProjectAll:"All",ProjectWeb:"Web",Bootcamp:"Bootcamp"},buttonGitHubTitle:"See code",buttonWebappTitle:"See the application live",title:"Projects",desc:"I've worked on a wide range of projects. From web applications to android applications. Here are some of my projects.",info:[{id:1,title:"Bootcamp-Orange-Tech",date:"Jan 1, 2022",description:"Orange tech + front-end and back-end development aims to really prepare for the best jobs in the technology market. Banco Inter, in partnership with DIO, which will address JavaScript, HTML, CSS, Typescript and React technologies from the beginning.",image:"https://github.com/Vidigal-code/Bootcamp-Orange-Tech/raw/main/Pokedex-OrangeTech/assets/img/Project%20Image/Pokedex.gif",tags:["React.Js","HTML","Node.Js","Typescript","Javascript","Css"],category:"All",github:"https://github.com/Vidigal-code/Bootcamp-Orange-Tech",webapp:"https://vidigal-code.github.io/Bootcamp-Orange-Tech/Pokedex-OrangeTech/index.html"}]},contact:{title:"Contact",desc:"I am at your disposal for clarifications, suggestions or to discuss possible collaboration opportunities. Your participation is essential to contribute to our continued growth. Please do not hesitate to contact me. Thank you in advance for your consideration and I look forward to possible productive interactions.",emailtile:"Send me an email",emailyourtile:"Your email",emailyourname:"Your name",subject:"Subject",message:"Message",submit:"Send",submitsuccess:"Message Sent Successfully!"},about:{title:"About",desc:"Mi nombre es Kauan Vidigal, tengo 20 años y soy de SP/Brasil",linkheaderimg:"https://raw.githubusercontent.com/Vidigal-code/React-portfolio/c8f45e97e3d4549213aa29205881a3d76fb81434/src/images/header-img.svg",bannerimg:"",userimg:"https://raw.githubusercontent.com/Vidigal-code/React-portfolio/main/src/images/Vidigal.jpg"},GithubLinkTitle:"Github",GithubLink:"https://github.com/Vidigal-code",ResumeTitle:"Resume",ResumeLink:"https://github.com/Vidigal-code/React-portfolio/blob/main/src/data/Resume/RESUME.pdf",homelinkimg:"https://raw.githubusercontent.com/Vidigal-code/React-portfolio/main/src/images/Home.gif",linkedin:"https://www.linkedin.com/in/kauan-vidigal/",twitter:"",insta:"",facebook:""},Mx=[{code:"en",label:"English"},{code:"pt",label:"Portuguese"},{code:"es",label:"Spanish"}],At={pt:zx,en:Lx,es:Nx},Tg=T.createContext(void 0),Fx=({children:e})=>{const[t,n]=T.useState("pt"),r=o=>{n(o)};return x.jsx(Tg.Provider,{value:{selectedLanguage:t,handleLanguageChange:r},children:e})},zt=()=>{const e=T.useContext(Tg);if(!e)throw new Error("useLanguage must be used within a LanguageProvider");return e},Pg=T.createContext(void 0),Dx=({children:e})=>{const[t,n]=T.useState(!1),r=()=>{n(o=>!o)};return x.jsx(Pg.Provider,{value:{isDarkMode:t,toggleDarkMode:r},children:e})},zn=()=>{const e=T.useContext(Pg);if(!e)throw new Error("useThemeLight must be used within a ThemeProvider");return e};var $g={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Bp=ie.createContext&&ie.createContext($g),Vx=["attr","size","title"];function Hx(e,t){if(e==null)return{};var n=Ux(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ux(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function La(){return La=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},La.apply(this,arguments)}function Gp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Na(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Gp(Object(n),!0).forEach(function(r){Wx(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Gp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Wx(e,t,n){return t=Bx(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Bx(e){var t=Gx(e,"string");return typeof t=="symbol"?t:t+""}function Gx(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Og(e){return e&&e.map((t,n)=>ie.createElement(t.tag,Na({key:n},t.attr),Og(t.child)))}function Lt(e){return t=>ie.createElement(Kx,La({attr:Na({},e.attr)},t),Og(e.child))}function Kx(e){var t=n=>{var{attr:r,size:o,title:i}=e,a=Hx(e,Vx),s=o||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),ie.createElement("svg",La({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:l,style:Na(Na({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&ie.createElement("title",null,i),e.children)};return Bp!==void 0?ie.createElement(Bp.Consumer,null,n=>t(n)):t($g)}function qx(e){return Lt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M7 11L7 13H17V11H7Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M7.75732 18L9.17154 16.5858L11 18.4143V14H13V18.4142L14.8284 16.5858L16.2426 18L12 22.2427L7.75732 18Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M16.2427 5.99996L14.8285 7.41418L13 5.58572V9.99996H11L11 5.58579L9.17161 7.41418L7.75739 5.99996L12 1.75732L16.2427 5.99996Z",fill:"currentColor"},child:[]}]})(e)}function Rg(e){return Lt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M14 11H10V13H14V11Z",fill:"currentColor"},child:[]},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z",fill:"currentColor"},child:[]}]})(e)}function Yx(e){return Lt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"},child:[]}]})(e)}function Qx(e){return Lt({tag:"svg",attr:{viewBox:"0 0 480 512"},child:[{tag:"path",attr:{d:"M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"},child:[]}]})(e)}function Jx(e){return Lt({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function Xx(e){return Lt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function Yu(e){return Lt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function Zx(e){return Lt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"},child:[]}]})(e)}function ew(e){return Lt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18.36 6.64a9 9 0 1 1-12.73 0"},child:[]},{tag:"line",attr:{x1:"12",y1:"2",x2:"12",y2:"12"},child:[]}]})(e)}const tw=()=>{const[e,t]=ie.useState(!1),n={primary:"#000000",white:"white"},{selectedLanguage:r,handleLanguageChange:o}=zt(),i=At[r],{isDarkMode:a,toggleDarkMode:s}=zn(),l=[{id:"home",label:i==null?void 0:i.nav.home},{id:"skills",label:i==null?void 0:i.nav.skills},{id:"experience",label:i==null?void 0:i.nav.experience},{id:"projects",label:i==null?void 0:i.nav.projects},{id:"education",label:i==null?void 0:i.nav.education},{id:"contact",label:i==null?void 0:i.nav.contact},{id:"about",label:i==null?void 0:i.nav.about}];return x.jsx(Sx,{children:x.jsxs(Ex,{children:[x.jsxs(Cx,{children:[x.jsx(Ax,{value:r,onChange:c=>o(c.target.value),$isdarkmode:a,children:Mx.map(({code:c,label:u})=>x.jsx(Ix,{value:c,children:u},c))}),x.jsxs(Rx,{onClick:s,$isdarkmode:a,children:[a?i==null?void 0:i.Modelight:i==null?void 0:i.Modedark,x.jsx(Wp,{children:x.jsx(ew,{})})]})]}),x.jsx(Px,{$isdarkmode:a,children:x.jsx(qx,{onClick:()=>{t(!e)}})}),x.jsx(_x,{children:l.map(({id:c,label:u})=>x.jsx(jx,{$isdarkmode:a,href:`#${c}`,children:u},c))}),x.jsx(Tx,{children:x.jsxs(Up,{$isdarkmode:a,target:"_blank",href:i==null?void 0:i.GithubLink,children:[i==null?void 0:i.GithubLinkTitle,x.jsx(Wp,{children:x.jsx(Qx,{})})]})}),e&&x.jsxs($x,{$isdarkmode:a,isOpen:e,children:[l.map(({id:c,label:u})=>x.jsx(Ox,{$isdarkmode:a,href:`#${c}`,onClick:()=>{t(!e)},children:u},c)),x.jsx(Up,{$isdarkmode:a,theme:n,style:{},target:"_blank",href:i==null?void 0:i.GithubLink,children:i==null?void 0:i.GithubLinkTitle})]})]})})};/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ma(){return Ma=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ma.apply(this,arguments)}var Bn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Bn||(Bn={}));const Kp="popstate";function nw(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:a,hash:s}=r.location;return Rc("",{pathname:i,search:a,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Ag(o)}return ow(t,n,null,e)}function Ig(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function rw(){return Math.random().toString(36).substr(2,8)}function qp(e,t){return{usr:e.state,key:e.key,idx:t}}function Rc(e,t,n,r){return n===void 0&&(n=null),Ma({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?zg(t):t,{state:n,key:t&&t.key||r||rw()})}function Ag(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function zg(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function ow(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,s=Bn.Pop,l=null,c=u();c==null&&(c=0,a.replaceState(Ma({},a.state,{idx:c}),""));function u(){return(a.state||{idx:null}).idx}function d(){s=Bn.Pop;let b=u(),h=b==null?null:b-c;c=b,l&&l({action:s,location:y.location,delta:h})}function p(b,h){s=Bn.Push;let m=Rc(y.location,b,h);c=u()+1;let v=qp(m,c),w=y.createHref(m);try{a.pushState(v,"",w)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;o.location.assign(w)}i&&l&&l({action:s,location:y.location,delta:1})}function f(b,h){s=Bn.Replace;let m=Rc(y.location,b,h);c=u();let v=qp(m,c),w=y.createHref(m);a.replaceState(v,"",w),i&&l&&l({action:s,location:y.location,delta:0})}function g(b){let h=o.location.origin!=="null"?o.location.origin:o.location.href,m=typeof b=="string"?b:Ag(b);return m=m.replace(/ $/,"%20"),Ig(h,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,h)}let y={get action(){return s},get location(){return e(o,a)},listen(b){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(Kp,d),l=b,()=>{o.removeEventListener(Kp,d),l=null}},createHref(b){return t(o,b)},createURL:g,encodeLocation(b){let h=g(b);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:f,go(b){return a.go(b)}};return y}var Yp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Yp||(Yp={}));function iw(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Lg=["post","put","patch","delete"];new Set(Lg);const aw=["get",...Lg];new Set(aw);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ic(){return Ic=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ic.apply(this,arguments)}const sw=T.createContext(null),Ng=T.createContext(null);function lw(){return T.useContext(Ng)!=null}function cw(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Bn.Pop,navigator:i,static:a=!1,future:s}=e;lw()&&Ig(!1);let l=t.replace(/^\/*/,"/"),c=T.useMemo(()=>({basename:l,navigator:i,static:a,future:Ic({v7_relativeSplatPath:!1},s)}),[l,s,i,a]);typeof r=="string"&&(r=zg(r));let{pathname:u="/",search:d="",hash:p="",state:f=null,key:g="default"}=r,y=T.useMemo(()=>{let b=iw(u,l);return b==null?null:{location:{pathname:b,search:d,hash:p,state:f,key:g},navigationType:o}},[l,u,d,p,f,g,o]);return y==null?null:T.createElement(sw.Provider,{value:c},T.createElement(Ng.Provider,{children:n,value:y}))}new Promise(()=>{});/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const uw="6";try{window.__reactRouterVersion=uw}catch{}const dw="startTransition",Qp=$l[dw];function pw(e){let{basename:t,children:n,future:r,window:o}=e,i=T.useRef();i.current==null&&(i.current=nw({window:o,v5Compat:!0}));let a=i.current,[s,l]=T.useState({action:a.action,location:a.location}),{v7_startTransition:c}=r||{},u=T.useCallback(d=>{c&&Qp?Qp(()=>l(d)):l(d)},[l,c]);return T.useLayoutEffect(()=>a.listen(u),[a,u]),T.createElement(cw,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a,future:r})}var Jp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Jp||(Jp={}));var Xp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Xp||(Xp={}));const fw="/React-portfolio/assets/fam-code-Bld2Whts.ttf",mw=C.div`
  width: 600px;
  height: 550px;
`,hw=bx`
  @font-face {
    font-family: 'MatrixFont';
    src: url('${fw}') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`,gw=C.text`
  font-weight: 500;
  font-family: 'MatrixFont';
  font-style: italic;
  opacity: 0.4;
  fill: ${({theme:e})=>e.text_matrix};
`,Zp=()=>({x:Math.random()*602,y:-50,z:Math.random()*10}),ef=[10,20],tf=[5,15,8],vw=()=>{if(Math.random()<.03){const o=["Vidigal-code","Full-stack","Soft Vidigal","Programming"],i=Math.floor(Math.random()*o.length),a=tf[Math.floor(Math.random()*tf.length)];return{text:o[i],fontSize:a}}const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+",n=Math.floor(Math.random()*t.length),r=ef[Math.floor(Math.random()*ef.length)];return{text:t.charAt(n),fontSize:r}},yw=e=>{let t=e.length,n;for(;t!==0;)n=Math.floor(Math.random()*t),t--,[e[t],e[n]]=[e[n],e[t]];return e},xw=(e,t,n)=>{const r=t.x-e.x,o=t.y-e.y,i=Math.sqrt(r*r+o*o),a=r/i,s=o/i,l=a*n,c=s*n;return{x:e.x+l,y:e.y+c,z:e.z}},ww=()=>{const[e,t]=T.useState(Array.from({length:100},Zp)),[n,r]=T.useState(!1),o=Array.from({length:100},vw);T.useEffect(()=>{const s=e.map((l,c)=>setInterval(()=>{t(u=>u.map((d,p)=>p===c?xw(d,Zp(),5):d))},Math.random()*1e3+500));return()=>{s.forEach(l=>clearInterval(l))}},[e]);const i=()=>{r(!0),t(s=>yw([...s]))},a=()=>{r(!1)};return x.jsxs(x.Fragment,{children:[x.jsx(hw,{}),x.jsx(mw,{onMouseOver:i,onMouseLeave:a,children:x.jsx("svg",{className:"BgAnimation__svg",viewBox:"0 0 602 602",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.map((s,l)=>{var c,u,d;return x.jsxs(gw,{x:e[l]?e[l].x:0,y:n?Math.random()*602:((c=e[l])==null?void 0:c.y)||0,style:{zIndex:((u=e[l])==null?void 0:u.z)||0,fontSize:`${s.fontSize}px`,transformOrigin:"center center",transform:n?"rotate(360deg)":"rotate(0deg)"},children:[s.text,x.jsx("animate",{attributeName:"y",values:`${((d=e[l])==null?void 0:d.y)||0};602`,dur:"4s",keyTimes:"0;1",begin:`${l*.1}s`,repeatCount:"indefinite"})]},l)})})})]})};C.div`
  display: flex;
  margin-top: 1rem;
`;C.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({theme:e})=>e.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({theme:e})=>e.primary};
  }
`;const bw=C.div`
  background: ${({theme:e})=>e.card};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 50px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640px) {
    padding: 32px 16px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`,kw=C.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`,Sw=C.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`,Ew=C.div`
  width: 100%;
  order: 1;

  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`,Cw=C.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`,_w=C.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 500px;
  border: 0.1px solid ${({theme:e})=>e.primary};
  border-radius: 2%;

  animation: shake-vertical 6s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite both,
  heartbeat 5s ease-in-out infinite both;

  @keyframes shake-vertical {
    0%, 100% {
      transform: translateY(0);
    }
    10%, 30%, 50%, 70% {
      transform: translateY(-8px);
    }
    20%, 40%, 60% {
      transform: translateY(8px);
    }
    80% {
      transform: translateY(6.4px);
    }
    90% {
      transform: translateY(-6.4px);
    }
  }

  @keyframes heartbeat {
    from {
      transform: scale(1);
      transform-origin: center center;
      animation-timing-function: ease-out;
    }
    10% {
      transform: scale(0.91);
      animation-timing-function: ease-in;
    }
    17% {
      transform: scale(0.98);
      animation-timing-function: ease-out;
    }
    33% {
      transform: scale(0.87);
      animation-timing-function: ease-in;
    }
    45% {
      transform: scale(1);
      animation-timing-function: ease-out;
    }
  }
  
  
  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`,jw=C.div`
  font-weight: 500;
  font-size: 50px;
  color: ${({theme:e})=>e.text_title};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`,Tw=C.div`
  font-weight: 200;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({theme:e})=>e.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`,Pw=C.span`
  color: ${({theme:e})=>e.primary};
  cursor: pointer;
`,$w=C.div`
  font-size: 18px;
  line-height: 30px;
  margin-bottom: 40px;
  text-align: left;
  color: ${({theme:e})=>e.sub_text+95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`,Ow=C.p`
  font-weight: 300;
  font-style: italic;
  font-size: 20px;
  margin-top: 10px;
  color: ${({theme:e})=>e.sub_text+95};
  text-align: left;
  @media (max-width: 960px) {
    text-align: center;
    font-size: 18px;
    font-weight: 300;
  }
`,Rw=C.p`
  font-weight: 300;
  color: ${({theme:e})=>e.text_title};
  font-size: 17px;
  font-style: italic;
  margin-top: 2px;
  text-align: left;
  @media (max-width: 960px) {
    text-align: center;
    font-size: 18px;
    font-weight: 300;
  }
`;var Mg={exports:{}};(function(e,t){(function(n,r){e.exports=r(T)})(typeof self<"u"?self:G0,n=>(()=>{var r={7403:(s,l,c)=>{c.d(l,{default:()=>A});var u=c(4087),d=c.n(u);const p=function($){return new RegExp(/<[a-z][\s\S]*>/i).test($)},f=function($,P){return Math.floor(Math.random()*(P-$+1))+$};var g="TYPE_CHARACTER",y="REMOVE_CHARACTER",b="REMOVE_ALL",h="REMOVE_LAST_VISIBLE_NODE",m="PAUSE_FOR",v="CALL_FUNCTION",w="ADD_HTML_TAG_ELEMENT",k="CHANGE_DELETE_SPEED",E="CHANGE_DELAY",S="CHANGE_CURSOR",j="PASTE_STRING",z="HTML_TAG";function O($){return O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(P){return typeof P}:function(P){return P&&typeof Symbol=="function"&&P.constructor===Symbol&&P!==Symbol.prototype?"symbol":typeof P},O($)}function I($,P){var H=Object.keys($);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols($);P&&(D=D.filter(function(xe){return Object.getOwnPropertyDescriptor($,xe).enumerable})),H.push.apply(H,D)}return H}function M($){for(var P=1;P<arguments.length;P++){var H=arguments[P]!=null?arguments[P]:{};P%2?I(Object(H),!0).forEach(function(D){N($,D,H[D])}):Object.getOwnPropertyDescriptors?Object.defineProperties($,Object.getOwnPropertyDescriptors(H)):I(Object(H)).forEach(function(D){Object.defineProperty($,D,Object.getOwnPropertyDescriptor(H,D))})}return $}function B($){return function(P){if(Array.isArray(P))return W(P)}($)||function(P){if(typeof Symbol<"u"&&P[Symbol.iterator]!=null||P["@@iterator"]!=null)return Array.from(P)}($)||function(P,H){if(P){if(typeof P=="string")return W(P,H);var D=Object.prototype.toString.call(P).slice(8,-1);return D==="Object"&&P.constructor&&(D=P.constructor.name),D==="Map"||D==="Set"?Array.from(P):D==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D)?W(P,H):void 0}}($)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function W($,P){(P==null||P>$.length)&&(P=$.length);for(var H=0,D=new Array(P);H<P;H++)D[H]=$[H];return D}function V($,P){for(var H=0;H<P.length;H++){var D=P[H];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty($,G(D.key),D)}}function N($,P,H){return(P=G(P))in $?Object.defineProperty($,P,{value:H,enumerable:!0,configurable:!0,writable:!0}):$[P]=H,$}function G($){var P=function(H,D){if(O(H)!=="object"||H===null)return H;var xe=H[Symbol.toPrimitive];if(xe!==void 0){var _=xe.call(H,"string");if(O(_)!=="object")return _;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(H)}($);return O(P)==="symbol"?P:String(P)}const A=function(){function $(D,xe){var _=this;if(function(F,q){if(!(F instanceof q))throw new TypeError("Cannot call a class as a function")}(this,$),N(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),N(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),N(this,"setupWrapperElement",function(){_.state.elements.container&&(_.state.elements.wrapper.className=_.options.wrapperClassName,_.state.elements.cursor.className=_.options.cursorClassName,_.state.elements.cursor.innerHTML=_.options.cursor,_.state.elements.container.innerHTML="",_.state.elements.container.appendChild(_.state.elements.wrapper),_.state.elements.container.appendChild(_.state.elements.cursor))}),N(this,"start",function(){return _.state.eventLoopPaused=!1,_.runEventLoop(),_}),N(this,"pause",function(){return _.state.eventLoopPaused=!0,_}),N(this,"stop",function(){return _.state.eventLoop&&((0,u.cancel)(_.state.eventLoop),_.state.eventLoop=null),_}),N(this,"pauseFor",function(F){return _.addEventToQueue(m,{ms:F}),_}),N(this,"typeOutAllStrings",function(){return typeof _.options.strings=="string"?(_.typeString(_.options.strings).pauseFor(_.options.pauseFor),_):(_.options.strings.forEach(function(F){_.typeString(F).pauseFor(_.options.pauseFor).deleteAll(_.options.deleteSpeed)}),_)}),N(this,"typeString",function(F){var q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(p(F))return _.typeOutHTMLString(F,q);if(F){var se=(_.options||{}).stringSplitter,oe=typeof se=="function"?se(F):F.split("");_.typeCharacters(oe,q)}return _}),N(this,"pasteString",function(F){var q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return p(F)?_.typeOutHTMLString(F,q,!0):(F&&_.addEventToQueue(j,{character:F,node:q}),_)}),N(this,"typeOutHTMLString",function(F){var q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,se=arguments.length>2?arguments[2]:void 0,oe=function(pt){var Nt=document.createElement("div");return Nt.innerHTML=pt,Nt.childNodes}(F);if(oe.length>0)for(var J=0;J<oe.length;J++){var _e=oe[J],Le=_e.innerHTML;_e&&_e.nodeType!==3?(_e.innerHTML="",_.addEventToQueue(w,{node:_e,parentNode:q}),se?_.pasteString(Le,_e):_.typeString(Le,_e)):_e.textContent&&(se?_.pasteString(_e.textContent,q):_.typeString(_e.textContent,q))}return _}),N(this,"deleteAll",function(){var F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return _.addEventToQueue(b,{speed:F}),_}),N(this,"changeDeleteSpeed",function(F){if(!F)throw new Error("Must provide new delete speed");return _.addEventToQueue(k,{speed:F}),_}),N(this,"changeDelay",function(F){if(!F)throw new Error("Must provide new delay");return _.addEventToQueue(E,{delay:F}),_}),N(this,"changeCursor",function(F){if(!F)throw new Error("Must provide new cursor");return _.addEventToQueue(S,{cursor:F}),_}),N(this,"deleteChars",function(F){if(!F)throw new Error("Must provide amount of characters to delete");for(var q=0;q<F;q++)_.addEventToQueue(y);return _}),N(this,"callFunction",function(F,q){if(!F||typeof F!="function")throw new Error("Callback must be a function");return _.addEventToQueue(v,{cb:F,thisArg:q}),_}),N(this,"typeCharacters",function(F){var q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F||!Array.isArray(F))throw new Error("Characters must be an array");return F.forEach(function(se){_.addEventToQueue(g,{character:se,node:q})}),_}),N(this,"removeCharacters",function(F){if(!F||!Array.isArray(F))throw new Error("Characters must be an array");return F.forEach(function(){_.addEventToQueue(y)}),_}),N(this,"addEventToQueue",function(F,q){var se=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return _.addEventToStateProperty(F,q,se,"eventQueue")}),N(this,"addReverseCalledEvent",function(F,q){var se=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return _.options.loop?_.addEventToStateProperty(F,q,se,"reverseCalledEvents"):_}),N(this,"addEventToStateProperty",function(F,q){var se=arguments.length>2&&arguments[2]!==void 0&&arguments[2],oe=arguments.length>3?arguments[3]:void 0,J={eventName:F,eventArgs:q||{}};return _.state[oe]=se?[J].concat(B(_.state[oe])):[].concat(B(_.state[oe]),[J]),_}),N(this,"runEventLoop",function(){_.state.lastFrameTime||(_.state.lastFrameTime=Date.now());var F=Date.now(),q=F-_.state.lastFrameTime;if(!_.state.eventQueue.length){if(!_.options.loop)return;_.state.eventQueue=B(_.state.calledEvents),_.state.calledEvents=[],_.options=M({},_.state.initialOptions)}if(_.state.eventLoop=d()(_.runEventLoop),!_.state.eventLoopPaused){if(_.state.pauseUntil){if(F<_.state.pauseUntil)return;_.state.pauseUntil=null}var se,oe=B(_.state.eventQueue),J=oe.shift();if(!(q<=(se=J.eventName===h||J.eventName===y?_.options.deleteSpeed==="natural"?f(40,80):_.options.deleteSpeed:_.options.delay==="natural"?f(120,160):_.options.delay))){var _e=J.eventName,Le=J.eventArgs;switch(_.logInDevMode({currentEvent:J,state:_.state,delay:se}),_e){case j:case g:var pt=Le.character,Nt=Le.node,yd=document.createTextNode(pt),oo=yd;_.options.onCreateTextNode&&typeof _.options.onCreateTextNode=="function"&&(oo=_.options.onCreateTextNode(pt,yd)),oo&&(Nt?Nt.appendChild(oo):_.state.elements.wrapper.appendChild(oo)),_.state.visibleNodes=[].concat(B(_.state.visibleNodes),[{type:"TEXT_NODE",character:pt,node:oo}]);break;case y:oe.unshift({eventName:h,eventArgs:{removingCharacterNode:!0}});break;case m:var N0=J.eventArgs.ms;_.state.pauseUntil=Date.now()+parseInt(N0);break;case v:var xd=J.eventArgs,M0=xd.cb,F0=xd.thisArg;M0.call(F0,{elements:_.state.elements});break;case w:var wd=J.eventArgs,Us=wd.node,Ws=wd.parentNode;Ws?Ws.appendChild(Us):_.state.elements.wrapper.appendChild(Us),_.state.visibleNodes=[].concat(B(_.state.visibleNodes),[{type:z,node:Us,parentNode:Ws||_.state.elements.wrapper}]);break;case b:var D0=_.state.visibleNodes,Bs=Le.speed,gi=[];Bs&&gi.push({eventName:k,eventArgs:{speed:Bs,temp:!0}});for(var bd=0,V0=D0.length;bd<V0;bd++)gi.push({eventName:h,eventArgs:{removingCharacterNode:!1}});Bs&&gi.push({eventName:k,eventArgs:{speed:_.options.deleteSpeed,temp:!0}}),oe.unshift.apply(oe,gi);break;case h:var H0=J.eventArgs.removingCharacterNode;if(_.state.visibleNodes.length){var Gs=_.state.visibleNodes.pop(),U0=Gs.type,vi=Gs.node,W0=Gs.character;_.options.onRemoveNode&&typeof _.options.onRemoveNode=="function"&&_.options.onRemoveNode({node:vi,character:W0}),vi&&vi.parentNode.removeChild(vi),U0===z&&H0&&oe.unshift({eventName:h,eventArgs:{}})}break;case k:_.options.deleteSpeed=J.eventArgs.speed;break;case E:_.options.delay=J.eventArgs.delay;break;case S:_.options.cursor=J.eventArgs.cursor,_.state.elements.cursor.innerHTML=J.eventArgs.cursor}_.options.loop&&(J.eventName===h||J.eventArgs&&J.eventArgs.temp||(_.state.calledEvents=[].concat(B(_.state.calledEvents),[J]))),_.state.eventQueue=oe,_.state.lastFrameTime=F}}}),D)if(typeof D=="string"){var $e=document.querySelector(D);if(!$e)throw new Error("Could not find container element");this.state.elements.container=$e}else this.state.elements.container=D;xe&&(this.options=M(M({},this.options),xe)),this.state.initialOptions=M({},this.options),this.init()}var P,H;return P=$,(H=[{key:"init",value:function(){var D,xe;this.setupWrapperElement(),this.addEventToQueue(S,{cursor:this.options.cursor},!0),this.addEventToQueue(b,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(D=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(xe=document.createElement("style")).appendChild(document.createTextNode(D)),document.head.appendChild(xe),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(D){this.options.devMode&&console.log(D)}}])&&V(P.prototype,H),Object.defineProperty(P,"prototype",{writable:!1}),$}()},8552:(s,l,c)=>{var u=c(852)(c(5639),"DataView");s.exports=u},1989:(s,l,c)=>{var u=c(1789),d=c(401),p=c(7667),f=c(1327),g=c(1866);function y(b){var h=-1,m=b==null?0:b.length;for(this.clear();++h<m;){var v=b[h];this.set(v[0],v[1])}}y.prototype.clear=u,y.prototype.delete=d,y.prototype.get=p,y.prototype.has=f,y.prototype.set=g,s.exports=y},8407:(s,l,c)=>{var u=c(7040),d=c(4125),p=c(2117),f=c(7518),g=c(4705);function y(b){var h=-1,m=b==null?0:b.length;for(this.clear();++h<m;){var v=b[h];this.set(v[0],v[1])}}y.prototype.clear=u,y.prototype.delete=d,y.prototype.get=p,y.prototype.has=f,y.prototype.set=g,s.exports=y},7071:(s,l,c)=>{var u=c(852)(c(5639),"Map");s.exports=u},3369:(s,l,c)=>{var u=c(4785),d=c(1285),p=c(6e3),f=c(9916),g=c(5265);function y(b){var h=-1,m=b==null?0:b.length;for(this.clear();++h<m;){var v=b[h];this.set(v[0],v[1])}}y.prototype.clear=u,y.prototype.delete=d,y.prototype.get=p,y.prototype.has=f,y.prototype.set=g,s.exports=y},3818:(s,l,c)=>{var u=c(852)(c(5639),"Promise");s.exports=u},8525:(s,l,c)=>{var u=c(852)(c(5639),"Set");s.exports=u},8668:(s,l,c)=>{var u=c(3369),d=c(619),p=c(2385);function f(g){var y=-1,b=g==null?0:g.length;for(this.__data__=new u;++y<b;)this.add(g[y])}f.prototype.add=f.prototype.push=d,f.prototype.has=p,s.exports=f},6384:(s,l,c)=>{var u=c(8407),d=c(7465),p=c(3779),f=c(7599),g=c(4758),y=c(4309);function b(h){var m=this.__data__=new u(h);this.size=m.size}b.prototype.clear=d,b.prototype.delete=p,b.prototype.get=f,b.prototype.has=g,b.prototype.set=y,s.exports=b},2705:(s,l,c)=>{var u=c(5639).Symbol;s.exports=u},1149:(s,l,c)=>{var u=c(5639).Uint8Array;s.exports=u},577:(s,l,c)=>{var u=c(852)(c(5639),"WeakMap");s.exports=u},4963:s=>{s.exports=function(l,c){for(var u=-1,d=l==null?0:l.length,p=0,f=[];++u<d;){var g=l[u];c(g,u,l)&&(f[p++]=g)}return f}},4636:(s,l,c)=>{var u=c(2545),d=c(5694),p=c(1469),f=c(4144),g=c(5776),y=c(6719),b=Object.prototype.hasOwnProperty;s.exports=function(h,m){var v=p(h),w=!v&&d(h),k=!v&&!w&&f(h),E=!v&&!w&&!k&&y(h),S=v||w||k||E,j=S?u(h.length,String):[],z=j.length;for(var O in h)!m&&!b.call(h,O)||S&&(O=="length"||k&&(O=="offset"||O=="parent")||E&&(O=="buffer"||O=="byteLength"||O=="byteOffset")||g(O,z))||j.push(O);return j}},2488:s=>{s.exports=function(l,c){for(var u=-1,d=c.length,p=l.length;++u<d;)l[p+u]=c[u];return l}},2908:s=>{s.exports=function(l,c){for(var u=-1,d=l==null?0:l.length;++u<d;)if(c(l[u],u,l))return!0;return!1}},8470:(s,l,c)=>{var u=c(7813);s.exports=function(d,p){for(var f=d.length;f--;)if(u(d[f][0],p))return f;return-1}},8866:(s,l,c)=>{var u=c(2488),d=c(1469);s.exports=function(p,f,g){var y=f(p);return d(p)?y:u(y,g(p))}},4239:(s,l,c)=>{var u=c(2705),d=c(9607),p=c(2333),f=u?u.toStringTag:void 0;s.exports=function(g){return g==null?g===void 0?"[object Undefined]":"[object Null]":f&&f in Object(g)?d(g):p(g)}},9454:(s,l,c)=>{var u=c(4239),d=c(7005);s.exports=function(p){return d(p)&&u(p)=="[object Arguments]"}},939:(s,l,c)=>{var u=c(2492),d=c(7005);s.exports=function p(f,g,y,b,h){return f===g||(f==null||g==null||!d(f)&&!d(g)?f!=f&&g!=g:u(f,g,y,b,p,h))}},2492:(s,l,c)=>{var u=c(6384),d=c(7114),p=c(8351),f=c(6096),g=c(4160),y=c(1469),b=c(4144),h=c(6719),m="[object Arguments]",v="[object Array]",w="[object Object]",k=Object.prototype.hasOwnProperty;s.exports=function(E,S,j,z,O,I){var M=y(E),B=y(S),W=M?v:g(E),V=B?v:g(S),N=(W=W==m?w:W)==w,G=(V=V==m?w:V)==w,A=W==V;if(A&&b(E)){if(!b(S))return!1;M=!0,N=!1}if(A&&!N)return I||(I=new u),M||h(E)?d(E,S,j,z,O,I):p(E,S,W,j,z,O,I);if(!(1&j)){var $=N&&k.call(E,"__wrapped__"),P=G&&k.call(S,"__wrapped__");if($||P){var H=$?E.value():E,D=P?S.value():S;return I||(I=new u),O(H,D,j,z,I)}}return!!A&&(I||(I=new u),f(E,S,j,z,O,I))}},8458:(s,l,c)=>{var u=c(3560),d=c(5346),p=c(3218),f=c(346),g=/^\[object .+?Constructor\]$/,y=Function.prototype,b=Object.prototype,h=y.toString,m=b.hasOwnProperty,v=RegExp("^"+h.call(m).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");s.exports=function(w){return!(!p(w)||d(w))&&(u(w)?v:g).test(f(w))}},8749:(s,l,c)=>{var u=c(4239),d=c(1780),p=c(7005),f={};f["[object Float32Array]"]=f["[object Float64Array]"]=f["[object Int8Array]"]=f["[object Int16Array]"]=f["[object Int32Array]"]=f["[object Uint8Array]"]=f["[object Uint8ClampedArray]"]=f["[object Uint16Array]"]=f["[object Uint32Array]"]=!0,f["[object Arguments]"]=f["[object Array]"]=f["[object ArrayBuffer]"]=f["[object Boolean]"]=f["[object DataView]"]=f["[object Date]"]=f["[object Error]"]=f["[object Function]"]=f["[object Map]"]=f["[object Number]"]=f["[object Object]"]=f["[object RegExp]"]=f["[object Set]"]=f["[object String]"]=f["[object WeakMap]"]=!1,s.exports=function(g){return p(g)&&d(g.length)&&!!f[u(g)]}},280:(s,l,c)=>{var u=c(5726),d=c(6916),p=Object.prototype.hasOwnProperty;s.exports=function(f){if(!u(f))return d(f);var g=[];for(var y in Object(f))p.call(f,y)&&y!="constructor"&&g.push(y);return g}},2545:s=>{s.exports=function(l,c){for(var u=-1,d=Array(l);++u<l;)d[u]=c(u);return d}},1717:s=>{s.exports=function(l){return function(c){return l(c)}}},4757:s=>{s.exports=function(l,c){return l.has(c)}},4429:(s,l,c)=>{var u=c(5639)["__core-js_shared__"];s.exports=u},7114:(s,l,c)=>{var u=c(8668),d=c(2908),p=c(4757);s.exports=function(f,g,y,b,h,m){var v=1&y,w=f.length,k=g.length;if(w!=k&&!(v&&k>w))return!1;var E=m.get(f),S=m.get(g);if(E&&S)return E==g&&S==f;var j=-1,z=!0,O=2&y?new u:void 0;for(m.set(f,g),m.set(g,f);++j<w;){var I=f[j],M=g[j];if(b)var B=v?b(M,I,j,g,f,m):b(I,M,j,f,g,m);if(B!==void 0){if(B)continue;z=!1;break}if(O){if(!d(g,function(W,V){if(!p(O,V)&&(I===W||h(I,W,y,b,m)))return O.push(V)})){z=!1;break}}else if(I!==M&&!h(I,M,y,b,m)){z=!1;break}}return m.delete(f),m.delete(g),z}},8351:(s,l,c)=>{var u=c(2705),d=c(1149),p=c(7813),f=c(7114),g=c(8776),y=c(1814),b=u?u.prototype:void 0,h=b?b.valueOf:void 0;s.exports=function(m,v,w,k,E,S,j){switch(w){case"[object DataView]":if(m.byteLength!=v.byteLength||m.byteOffset!=v.byteOffset)return!1;m=m.buffer,v=v.buffer;case"[object ArrayBuffer]":return!(m.byteLength!=v.byteLength||!S(new d(m),new d(v)));case"[object Boolean]":case"[object Date]":case"[object Number]":return p(+m,+v);case"[object Error]":return m.name==v.name&&m.message==v.message;case"[object RegExp]":case"[object String]":return m==v+"";case"[object Map]":var z=g;case"[object Set]":var O=1&k;if(z||(z=y),m.size!=v.size&&!O)return!1;var I=j.get(m);if(I)return I==v;k|=2,j.set(m,v);var M=f(z(m),z(v),k,E,S,j);return j.delete(m),M;case"[object Symbol]":if(h)return h.call(m)==h.call(v)}return!1}},6096:(s,l,c)=>{var u=c(8234),d=Object.prototype.hasOwnProperty;s.exports=function(p,f,g,y,b,h){var m=1&g,v=u(p),w=v.length;if(w!=u(f).length&&!m)return!1;for(var k=w;k--;){var E=v[k];if(!(m?E in f:d.call(f,E)))return!1}var S=h.get(p),j=h.get(f);if(S&&j)return S==f&&j==p;var z=!0;h.set(p,f),h.set(f,p);for(var O=m;++k<w;){var I=p[E=v[k]],M=f[E];if(y)var B=m?y(M,I,E,f,p,h):y(I,M,E,p,f,h);if(!(B===void 0?I===M||b(I,M,g,y,h):B)){z=!1;break}O||(O=E=="constructor")}if(z&&!O){var W=p.constructor,V=f.constructor;W==V||!("constructor"in p)||!("constructor"in f)||typeof W=="function"&&W instanceof W&&typeof V=="function"&&V instanceof V||(z=!1)}return h.delete(p),h.delete(f),z}},1957:(s,l,c)=>{var u=typeof c.g=="object"&&c.g&&c.g.Object===Object&&c.g;s.exports=u},8234:(s,l,c)=>{var u=c(8866),d=c(9551),p=c(3674);s.exports=function(f){return u(f,p,d)}},5050:(s,l,c)=>{var u=c(7019);s.exports=function(d,p){var f=d.__data__;return u(p)?f[typeof p=="string"?"string":"hash"]:f.map}},852:(s,l,c)=>{var u=c(8458),d=c(7801);s.exports=function(p,f){var g=d(p,f);return u(g)?g:void 0}},9607:(s,l,c)=>{var u=c(2705),d=Object.prototype,p=d.hasOwnProperty,f=d.toString,g=u?u.toStringTag:void 0;s.exports=function(y){var b=p.call(y,g),h=y[g];try{y[g]=void 0;var m=!0}catch{}var v=f.call(y);return m&&(b?y[g]=h:delete y[g]),v}},9551:(s,l,c)=>{var u=c(4963),d=c(479),p=Object.prototype.propertyIsEnumerable,f=Object.getOwnPropertySymbols,g=f?function(y){return y==null?[]:(y=Object(y),u(f(y),function(b){return p.call(y,b)}))}:d;s.exports=g},4160:(s,l,c)=>{var u=c(8552),d=c(7071),p=c(3818),f=c(8525),g=c(577),y=c(4239),b=c(346),h="[object Map]",m="[object Promise]",v="[object Set]",w="[object WeakMap]",k="[object DataView]",E=b(u),S=b(d),j=b(p),z=b(f),O=b(g),I=y;(u&&I(new u(new ArrayBuffer(1)))!=k||d&&I(new d)!=h||p&&I(p.resolve())!=m||f&&I(new f)!=v||g&&I(new g)!=w)&&(I=function(M){var B=y(M),W=B=="[object Object]"?M.constructor:void 0,V=W?b(W):"";if(V)switch(V){case E:return k;case S:return h;case j:return m;case z:return v;case O:return w}return B}),s.exports=I},7801:s=>{s.exports=function(l,c){return l==null?void 0:l[c]}},1789:(s,l,c)=>{var u=c(4536);s.exports=function(){this.__data__=u?u(null):{},this.size=0}},401:s=>{s.exports=function(l){var c=this.has(l)&&delete this.__data__[l];return this.size-=c?1:0,c}},7667:(s,l,c)=>{var u=c(4536),d=Object.prototype.hasOwnProperty;s.exports=function(p){var f=this.__data__;if(u){var g=f[p];return g==="__lodash_hash_undefined__"?void 0:g}return d.call(f,p)?f[p]:void 0}},1327:(s,l,c)=>{var u=c(4536),d=Object.prototype.hasOwnProperty;s.exports=function(p){var f=this.__data__;return u?f[p]!==void 0:d.call(f,p)}},1866:(s,l,c)=>{var u=c(4536);s.exports=function(d,p){var f=this.__data__;return this.size+=this.has(d)?0:1,f[d]=u&&p===void 0?"__lodash_hash_undefined__":p,this}},5776:s=>{var l=/^(?:0|[1-9]\d*)$/;s.exports=function(c,u){var d=typeof c;return!!(u=u??9007199254740991)&&(d=="number"||d!="symbol"&&l.test(c))&&c>-1&&c%1==0&&c<u}},7019:s=>{s.exports=function(l){var c=typeof l;return c=="string"||c=="number"||c=="symbol"||c=="boolean"?l!=="__proto__":l===null}},5346:(s,l,c)=>{var u,d=c(4429),p=(u=/[^.]+$/.exec(d&&d.keys&&d.keys.IE_PROTO||""))?"Symbol(src)_1."+u:"";s.exports=function(f){return!!p&&p in f}},5726:s=>{var l=Object.prototype;s.exports=function(c){var u=c&&c.constructor;return c===(typeof u=="function"&&u.prototype||l)}},7040:s=>{s.exports=function(){this.__data__=[],this.size=0}},4125:(s,l,c)=>{var u=c(8470),d=Array.prototype.splice;s.exports=function(p){var f=this.__data__,g=u(f,p);return!(g<0||(g==f.length-1?f.pop():d.call(f,g,1),--this.size,0))}},2117:(s,l,c)=>{var u=c(8470);s.exports=function(d){var p=this.__data__,f=u(p,d);return f<0?void 0:p[f][1]}},7518:(s,l,c)=>{var u=c(8470);s.exports=function(d){return u(this.__data__,d)>-1}},4705:(s,l,c)=>{var u=c(8470);s.exports=function(d,p){var f=this.__data__,g=u(f,d);return g<0?(++this.size,f.push([d,p])):f[g][1]=p,this}},4785:(s,l,c)=>{var u=c(1989),d=c(8407),p=c(7071);s.exports=function(){this.size=0,this.__data__={hash:new u,map:new(p||d),string:new u}}},1285:(s,l,c)=>{var u=c(5050);s.exports=function(d){var p=u(this,d).delete(d);return this.size-=p?1:0,p}},6e3:(s,l,c)=>{var u=c(5050);s.exports=function(d){return u(this,d).get(d)}},9916:(s,l,c)=>{var u=c(5050);s.exports=function(d){return u(this,d).has(d)}},5265:(s,l,c)=>{var u=c(5050);s.exports=function(d,p){var f=u(this,d),g=f.size;return f.set(d,p),this.size+=f.size==g?0:1,this}},8776:s=>{s.exports=function(l){var c=-1,u=Array(l.size);return l.forEach(function(d,p){u[++c]=[p,d]}),u}},4536:(s,l,c)=>{var u=c(852)(Object,"create");s.exports=u},6916:(s,l,c)=>{var u=c(5569)(Object.keys,Object);s.exports=u},1167:(s,l,c)=>{s=c.nmd(s);var u=c(1957),d=l&&!l.nodeType&&l,p=d&&s&&!s.nodeType&&s,f=p&&p.exports===d&&u.process,g=function(){try{return p&&p.require&&p.require("util").types||f&&f.binding&&f.binding("util")}catch{}}();s.exports=g},2333:s=>{var l=Object.prototype.toString;s.exports=function(c){return l.call(c)}},5569:s=>{s.exports=function(l,c){return function(u){return l(c(u))}}},5639:(s,l,c)=>{var u=c(1957),d=typeof self=="object"&&self&&self.Object===Object&&self,p=u||d||Function("return this")();s.exports=p},619:s=>{s.exports=function(l){return this.__data__.set(l,"__lodash_hash_undefined__"),this}},2385:s=>{s.exports=function(l){return this.__data__.has(l)}},1814:s=>{s.exports=function(l){var c=-1,u=Array(l.size);return l.forEach(function(d){u[++c]=d}),u}},7465:(s,l,c)=>{var u=c(8407);s.exports=function(){this.__data__=new u,this.size=0}},3779:s=>{s.exports=function(l){var c=this.__data__,u=c.delete(l);return this.size=c.size,u}},7599:s=>{s.exports=function(l){return this.__data__.get(l)}},4758:s=>{s.exports=function(l){return this.__data__.has(l)}},4309:(s,l,c)=>{var u=c(8407),d=c(7071),p=c(3369);s.exports=function(f,g){var y=this.__data__;if(y instanceof u){var b=y.__data__;if(!d||b.length<199)return b.push([f,g]),this.size=++y.size,this;y=this.__data__=new p(b)}return y.set(f,g),this.size=y.size,this}},346:s=>{var l=Function.prototype.toString;s.exports=function(c){if(c!=null){try{return l.call(c)}catch{}try{return c+""}catch{}}return""}},7813:s=>{s.exports=function(l,c){return l===c||l!=l&&c!=c}},5694:(s,l,c)=>{var u=c(9454),d=c(7005),p=Object.prototype,f=p.hasOwnProperty,g=p.propertyIsEnumerable,y=u(function(){return arguments}())?u:function(b){return d(b)&&f.call(b,"callee")&&!g.call(b,"callee")};s.exports=y},1469:s=>{var l=Array.isArray;s.exports=l},8612:(s,l,c)=>{var u=c(3560),d=c(1780);s.exports=function(p){return p!=null&&d(p.length)&&!u(p)}},4144:(s,l,c)=>{s=c.nmd(s);var u=c(5639),d=c(5062),p=l&&!l.nodeType&&l,f=p&&s&&!s.nodeType&&s,g=f&&f.exports===p?u.Buffer:void 0,y=(g?g.isBuffer:void 0)||d;s.exports=y},8446:(s,l,c)=>{var u=c(939);s.exports=function(d,p){return u(d,p)}},3560:(s,l,c)=>{var u=c(4239),d=c(3218);s.exports=function(p){if(!d(p))return!1;var f=u(p);return f=="[object Function]"||f=="[object GeneratorFunction]"||f=="[object AsyncFunction]"||f=="[object Proxy]"}},1780:s=>{s.exports=function(l){return typeof l=="number"&&l>-1&&l%1==0&&l<=9007199254740991}},3218:s=>{s.exports=function(l){var c=typeof l;return l!=null&&(c=="object"||c=="function")}},7005:s=>{s.exports=function(l){return l!=null&&typeof l=="object"}},6719:(s,l,c)=>{var u=c(8749),d=c(1717),p=c(1167),f=p&&p.isTypedArray,g=f?d(f):u;s.exports=g},3674:(s,l,c)=>{var u=c(4636),d=c(280),p=c(8612);s.exports=function(f){return p(f)?u(f):d(f)}},479:s=>{s.exports=function(){return[]}},5062:s=>{s.exports=function(){return!1}},75:function(s){(function(){var l,c,u,d,p,f;typeof performance<"u"&&performance!==null&&performance.now?s.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(s.exports=function(){return(l()-p)/1e6},c=process.hrtime,d=(l=function(){var g;return 1e9*(g=c())[0]+g[1]})(),f=1e9*process.uptime(),p=d-f):Date.now?(s.exports=function(){return Date.now()-u},u=Date.now()):(s.exports=function(){return new Date().getTime()-u},u=new Date().getTime())}).call(this)},4087:(s,l,c)=>{for(var u=c(75),d=typeof window>"u"?c.g:window,p=["moz","webkit"],f="AnimationFrame",g=d["request"+f],y=d["cancel"+f]||d["cancelRequest"+f],b=0;!g&&b<p.length;b++)g=d[p[b]+"Request"+f],y=d[p[b]+"Cancel"+f]||d[p[b]+"CancelRequest"+f];if(!g||!y){var h=0,m=0,v=[];g=function(w){if(v.length===0){var k=u(),E=Math.max(0,16.666666666666668-(k-h));h=E+k,setTimeout(function(){var S=v.slice(0);v.length=0;for(var j=0;j<S.length;j++)if(!S[j].cancelled)try{S[j].callback(h)}catch(z){setTimeout(function(){throw z},0)}},Math.round(E))}return v.push({handle:++m,callback:w,cancelled:!1}),m},y=function(w){for(var k=0;k<v.length;k++)v[k].handle===w&&(v[k].cancelled=!0)}}s.exports=function(w){return g.call(d,w)},s.exports.cancel=function(){y.apply(d,arguments)},s.exports.polyfill=function(w){w||(w=d),w.requestAnimationFrame=g,w.cancelAnimationFrame=y}},8156:s=>{s.exports=n}},o={};function i(s){var l=o[s];if(l!==void 0)return l.exports;var c=o[s]={id:s,loaded:!1,exports:{}};return r[s].call(c.exports,c,c.exports,i),c.loaded=!0,c.exports}i.n=s=>{var l=s&&s.__esModule?()=>s.default:()=>s;return i.d(l,{a:l}),l},i.d=(s,l)=>{for(var c in l)i.o(l,c)&&!i.o(s,c)&&Object.defineProperty(s,c,{enumerable:!0,get:l[c]})},i.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),i.o=(s,l)=>Object.prototype.hasOwnProperty.call(s,l),i.nmd=s=>(s.paths=[],s.children||(s.children=[]),s);var a={};return(()=>{i.d(a,{default:()=>v});var s=i(8156),l=i.n(s),c=i(7403),u=i(8446),d=i.n(u);function p(w){return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(k){return typeof k}:function(k){return k&&typeof Symbol=="function"&&k.constructor===Symbol&&k!==Symbol.prototype?"symbol":typeof k},p(w)}function f(w,k){for(var E=0;E<k.length;E++){var S=k[E];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(w,h(S.key),S)}}function g(w,k){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(E,S){return E.__proto__=S,E},g(w,k)}function y(w){if(w===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return w}function b(w){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(k){return k.__proto__||Object.getPrototypeOf(k)},b(w)}function h(w){var k=function(E,S){if(p(E)!=="object"||E===null)return E;var j=E[Symbol.toPrimitive];if(j!==void 0){var z=j.call(E,"string");if(p(z)!=="object")return z;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(E)}(w);return p(k)==="symbol"?k:String(k)}var m=function(w){(function(I,M){if(typeof M!="function"&&M!==null)throw new TypeError("Super expression must either be null or a function");I.prototype=Object.create(M&&M.prototype,{constructor:{value:I,writable:!0,configurable:!0}}),Object.defineProperty(I,"prototype",{writable:!1}),M&&g(I,M)})(O,w);var k,E,S,j,z=(S=O,j=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var I,M=b(S);if(j){var B=b(this).constructor;I=Reflect.construct(M,arguments,B)}else I=M.apply(this,arguments);return function(W,V){if(V&&(p(V)==="object"||typeof V=="function"))return V;if(V!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return y(W)}(this,I)});function O(){var I,M,B,W;(function(A,$){if(!(A instanceof $))throw new TypeError("Cannot call a class as a function")})(this,O);for(var V=arguments.length,N=new Array(V),G=0;G<V;G++)N[G]=arguments[G];return M=y(I=z.call.apply(z,[this].concat(N))),W={instance:null},(B=h(B="state"))in M?Object.defineProperty(M,B,{value:W,enumerable:!0,configurable:!0,writable:!0}):M[B]=W,I}return k=O,(E=[{key:"componentDidMount",value:function(){var I=this,M=new c.default(this.typewriter,this.props.options);this.setState({instance:M},function(){var B=I.props.onInit;B&&B(M)})}},{key:"componentDidUpdate",value:function(I){d()(this.props.options,I.options)||this.setState({instance:new c.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var I=this,M=this.props.component;return l().createElement(M,{ref:function(B){return I.typewriter=B},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&f(k.prototype,E),Object.defineProperty(k,"prototype",{writable:!1}),O}(s.Component);m.defaultProps={component:"div"};const v=m})(),a.default})())})(Mg);var Iw=Mg.exports;const Aw=Bc(Iw),nf=C.a`
  justify-content: center;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 2px;
  background: none;
  color: white;
  text-decoration: none;
  box-shadow: none;
  text-align: center;

  padding: 10px;
  font-weight: 250;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  &:hover {
    border: 1.8px solid ${({theme:e})=>e.primary};
    color: ${({theme:e})=>e.primary};
  }

  &.active {
    border-bottom: 2px solid ${({theme:e})=>e.primary};
  }
`,zw=C.div`
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 2px;
  max-width: 180px;
  height: 65px;
  margin: 20px;
  padding: 15px;
  background: black;

  @media (max-width: 960px) {
    padding: 25px;
    margin: 50px;
  }

  @media (max-width: 640px) {
    padding: 25px;
    margin: 50px;
  }
`,Lw=C.div`
  margin-left: 5px;
`,Nw=()=>{const{selectedLanguage:e}=zt(),t=At[e],{isDarkMode:n}=zn();return x.jsxs(bw,{id:"home",children:[x.jsx(kw,{children:x.jsx(ww,{})}),x.jsxs(Sw,{children:[x.jsxs(Ew,{id:"Left",children:[x.jsx(jw,{children:t==null?void 0:t.name}),x.jsx(Rw,{children:t==null?void 0:t.functions}),x.jsx(Tw,{children:x.jsx(Pw,{children:x.jsx(Aw,{options:{strings:t==null?void 0:t.roles,autoStart:!0,loop:!0}})})}),x.jsx(Ow,{children:t==null?void 0:t.location.countries}),x.jsxs($w,{children:[" ",x.jsx("br",{}),t==null?void 0:t.description]}),x.jsxs(zw,{children:[x.jsx(nf,{target:"display",href:t==null?void 0:t.linkedin,$isdarkmode:n,children:x.jsx(Yu,{style:{cursor:"pointer",width:"20px",height:"20px"}})}),x.jsxs(nf,{href:t==null?void 0:t.ResumeLink,target:"display",$isdarkmode:n,children:[x.jsx(Rg,{}),x.jsx(Lw,{children:t==null?void 0:t.ResumeTitle})]})]})]}),x.jsx(Cw,{id:"Right",children:x.jsx(_w,{src:t==null?void 0:t.homelinkimg,alt:"Vidigal"})})]})]})},Mw=C.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`,Fw=C.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`,Dw=C.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 25px;
  color: ${({theme:e})=>e.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,Vw=C.div`
  font-size: 30px;
  text-align: center;
  font-style: italic;
  max-width: 600px;
  padding: 10px;
  color: ${({theme:e})=>e.primary};
  @media (max-width: 768px) {
    font-size: 25px;
  }
`,Hw=C.div`
  font-size: 15px;
  margin-bottom: 30px;
  text-align: center;
  font-weight: 400;
  color: ${({theme:e})=>e.sub_text+95};
  max-width: 900px;
  line-height: 30px;

  @media (max-width: 960px) {
    text-align: center;
    width: 85%;
  }

  @media (max-width: 640px) {
    font-size: 15px;
    width: 85%;
  }
`,Uw=C.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 80px;
  gap: 30px;
  @media (max-width: 960px) {
    text-align: center;
    width: 85%;
  }

  @media (max-width: 640px) {
    font-size: 15px;
    width: 85%;
  }
`,Ww=C.div`
  height: 100%;
  width: 100%;
  max-width: 500px;
  background: ${({theme:e})=>e.card};
  border: 0.1px solid ${({theme:e})=>e.primary};
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 10px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }


`,Bw=C.h2`
  font-size: 28px;
  font-weight: 600;
  font-style: italic;
  color: ${({theme:e})=>e.text_secondary};
  margin-bottom: 20px;
  text-align: center;
  @media (max-width: 960px) {
    font-size: 15px;
  }

  @media (max-width: 640px) {
    font-size: 15px;
  }
`,Gw=C.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`,Kw=C.span`
  font-size: 12px;
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 500px) {
    display: none;
  }
`,qw=C.span`
  font-size: 14px;
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 500px) {
    display: none;
  }
`,Yw=C.span`
  font-size: 15px;
`,Qw=C.div`
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  border: 0.1px solid ${({theme:e})=>e.primary};
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 4px;
  padding: 20px;
  margin: 1px;
  display: flex;
  width: 48%;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.4s ease;

  &:hover {
    background: ${({theme:e})=>e.primary};
    color: ${({theme:e})=>e.white};
  }

  @media (max-width: 768px) {
    font-size: 10px;
    width: 100%;
  }
  @media (max-width: 500px) {
    font-size: 10px;
    width: 100%;
  }
`,Jw=C.img`
  width: 25px;
  height: 25px;
  padding-right: 4px;
  float: left;
`,Xw=C.a`
  color: ${({$isdarkmode:e})=>e?"#fff":"#000"};
  text-decoration: none;
  text-align: center;
  align-items: center;
  justify-content: center;

  &:hover {
    -webkit-animation: vibrate 2s linear infinite both;
    animation: vibrate 2s linear infinite both;

    @-webkit-keyframes vibrate {
      0% {
        -webkit-transform: translate(0);
        transform: translate(0);
      }
      20% {
        -webkit-transform: translate(-2px, 2px);
        transform: translate(-2px, 2px);
      }
      40% {
        -webkit-transform: translate(-2px, -2px);
        transform: translate(-2px, -2px);
      }
      60% {
        -webkit-transform: translate(2px, 2px);
        transform: translate(2px, 2px);
      }
      80% {
        -webkit-transform: translate(2px, -2px);
        transform: translate(2px, -2px);
      }
      100% {
        -webkit-transform: translate(0);
        transform: translate(0);
      }
    }

    @keyframes vibrate {
      0% {
        -webkit-transform: translate(0);
        transform: translate(0);
      }
      20% {
        -webkit-transform: translate(-2px, 2px);
        transform: translate(-2px, 2px);
      }
      40% {
        -webkit-transform: translate(-2px, -2px);
        transform: translate(-2px, -2px);
      }
      60% {
        -webkit-transform: translate(2px, 2px);
        transform: translate(2px, 2px);
      }
      80% {
        -webkit-transform: translate(2px, -2px);
        transform: translate(2px, -2px);
      }
      100% {
        -webkit-transform: translate(0);
        transform: translate(0);
      }
    }

  }


`,Zw=()=>{const{selectedLanguage:e}=zt(),t=At[e],{isDarkMode:n}=zn();return x.jsx(Mw,{id:"skills",children:x.jsxs(Fw,{children:[x.jsx(Dw,{children:t==null?void 0:t.nav.skills}),x.jsx(Hw,{children:t==null?void 0:t.skillsAll.desc}),x.jsx(Vw,{children:t==null?void 0:t.skillsAll.title}),x.jsx(Uw,{children:t==null?void 0:t.skillsAll.info.map(r=>x.jsxs(Ww,{children:[x.jsx(Bw,{children:r.subtitle}),x.jsx(Gw,{children:r.skills.map(o=>x.jsx(Qw,{children:x.jsxs(Xw,{$isdarkmode:n,href:o.link,target:"_blank",rel:"noopener noreferrer",children:[x.jsx(Jw,{src:o.image,alt:o.name}),x.jsx(Yw,{children:o.name}),x.jsxs(qw,{children:[" ",o.date]}),x.jsxs(Kw,{children:[x.jsx("br",{}),o.category]})]})},o.name))})]},r.subtitle))})]})})};function Pe(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},L.apply(null,arguments)}function e2(e){return typeof e=="string"}function t2(e,t,n){return e===void 0||e2(e)?t:L({},t,{ownerState:L({},t.ownerState,n)})}function Fa(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(r=>r.match(/^on[A-Z]/)&&typeof e[r]=="function"&&!t.includes(r)).forEach(r=>{n[r]=e[r]}),n}function n2(e,t,n){return typeof e=="function"?e(t,n):e}function vn(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Fg(e){if(!vn(e))return e;const t={};return Object.keys(e).forEach(n=>{t[n]=Fg(e[n])}),t}function Gt(e,t,n={clone:!0}){const r=n.clone?L({},e):e;return vn(e)&&vn(t)&&Object.keys(t).forEach(o=>{o!=="__proto__"&&(vn(t[o])&&o in e&&vn(e[o])?r[o]=Gt(e[o],t[o],n):n.clone?r[o]=vn(t[o])?Fg(t[o]):t[o]:r[o]=t[o])}),r}const r2=Object.freeze(Object.defineProperty({__proto__:null,default:Gt,isPlainObject:vn},Symbol.toStringTag,{value:"Module"}));function ei(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}const o2=Object.freeze(Object.defineProperty({__proto__:null,default:ei},Symbol.toStringTag,{value:"Module"}));var Dg={exports:{}},ne={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qu=Symbol.for("react.element"),Ju=Symbol.for("react.portal"),ps=Symbol.for("react.fragment"),fs=Symbol.for("react.strict_mode"),ms=Symbol.for("react.profiler"),hs=Symbol.for("react.provider"),gs=Symbol.for("react.context"),i2=Symbol.for("react.server_context"),vs=Symbol.for("react.forward_ref"),ys=Symbol.for("react.suspense"),xs=Symbol.for("react.suspense_list"),ws=Symbol.for("react.memo"),bs=Symbol.for("react.lazy"),a2=Symbol.for("react.offscreen"),Vg;Vg=Symbol.for("react.module.reference");function St(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Qu:switch(e=e.type,e){case ps:case ms:case fs:case ys:case xs:return e;default:switch(e=e&&e.$$typeof,e){case i2:case gs:case vs:case bs:case ws:case hs:return e;default:return t}}case Ju:return t}}}ne.ContextConsumer=gs;ne.ContextProvider=hs;ne.Element=Qu;ne.ForwardRef=vs;ne.Fragment=ps;ne.Lazy=bs;ne.Memo=ws;ne.Portal=Ju;ne.Profiler=ms;ne.StrictMode=fs;ne.Suspense=ys;ne.SuspenseList=xs;ne.isAsyncMode=function(){return!1};ne.isConcurrentMode=function(){return!1};ne.isContextConsumer=function(e){return St(e)===gs};ne.isContextProvider=function(e){return St(e)===hs};ne.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qu};ne.isForwardRef=function(e){return St(e)===vs};ne.isFragment=function(e){return St(e)===ps};ne.isLazy=function(e){return St(e)===bs};ne.isMemo=function(e){return St(e)===ws};ne.isPortal=function(e){return St(e)===Ju};ne.isProfiler=function(e){return St(e)===ms};ne.isStrictMode=function(e){return St(e)===fs};ne.isSuspense=function(e){return St(e)===ys};ne.isSuspenseList=function(e){return St(e)===xs};ne.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ps||e===ms||e===fs||e===ys||e===xs||e===a2||typeof e=="object"&&e!==null&&(e.$$typeof===bs||e.$$typeof===ws||e.$$typeof===hs||e.$$typeof===gs||e.$$typeof===vs||e.$$typeof===Vg||e.getModuleId!==void 0)};ne.typeOf=St;Dg.exports=ne;var rf=Dg.exports;const s2=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function Hg(e){const t=`${e}`.match(s2);return t&&t[1]||""}function Ug(e,t=""){return e.displayName||e.name||Hg(e)||t}function of(e,t,n){const r=Ug(t);return e.displayName||(r!==""?`${n}(${r})`:n)}function l2(e){if(e!=null){if(typeof e=="string")return e;if(typeof e=="function")return Ug(e,"Component");if(typeof e=="object")switch(e.$$typeof){case rf.ForwardRef:return of(e,e.render,"ForwardRef");case rf.Memo:return of(e,e.type,"memo");default:return}}}const c2=Object.freeze(Object.defineProperty({__proto__:null,default:l2,getFunctionName:Hg},Symbol.toStringTag,{value:"Module"}));function qt(e){if(typeof e!="string")throw new Error(ei(7));return e.charAt(0).toUpperCase()+e.slice(1)}const u2=Object.freeze(Object.defineProperty({__proto__:null,default:qt},Symbol.toStringTag,{value:"Module"}));function af(...e){return e.reduce((t,n)=>n==null?t:function(...o){t.apply(this,o),n.apply(this,o)},()=>{})}function Rt(e){return e&&e.ownerDocument||document}function Xu(e){return Rt(e).defaultView||window}function Ac(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const zc=typeof window<"u"?T.useLayoutEffect:T.useEffect;function ti(e){const t=T.useRef(e);return zc(()=>{t.current=e}),T.useRef((...n)=>(0,t.current)(...n)).current}function or(...e){return T.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{Ac(n,t)})},e)}const sf={};function d2(e,t){const n=T.useRef(sf);return n.current===sf&&(n.current=e(t)),n}const p2=[];function f2(e){T.useEffect(e,p2)}class Zu{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new Zu}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}function Wg(){const e=d2(Zu.create).current;return f2(e.disposeEffect),e}function m2(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Bg(e,t){const n=L({},t);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=L({},e[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const o=e[r]||{},i=t[r];n[r]={},!i||!Object.keys(i)?n[r]=o:!o||!Object.keys(o)?n[r]=i:(n[r]=L({},i),Object.keys(o).forEach(a=>{n[r][a]=Bg(o[a],i[a])}))}else n[r]===void 0&&(n[r]=e[r])}),n}function ir(e,t,n=void 0){const r={};return Object.keys(e).forEach(o=>{r[o]=e[o].reduce((i,a)=>{if(a){const s=t(a);s!==""&&i.push(s),n&&n[a]&&i.push(n[a])}return i},[]).join(" ")}),r}const lf=e=>e,h2=()=>{let e=lf;return{configure(t){e=t},generate(t){return e(t)},reset(){e=lf}}},g2=h2(),v2={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function Ln(e,t,n="Mui"){const r=v2[t];return r?`${n}-${r}`:`${g2.generate(e)}-${t}`}function ar(e,t,n="Mui"){const r={};return t.forEach(o=>{r[o]=Ln(e,o,n)}),r}function y2(e,t=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER){return Math.max(t,Math.min(e,n))}const x2=Object.freeze(Object.defineProperty({__proto__:null,default:y2},Symbol.toStringTag,{value:"Module"}));function Gg(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=Gg(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function ln(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=Gg(e))&&(r&&(r+=" "),r+=t);return r}function cf(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function w2(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:o,className:i}=e;if(!t){const f=ln(n==null?void 0:n.className,i,o==null?void 0:o.className,r==null?void 0:r.className),g=L({},n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),y=L({},n,o,r);return f.length>0&&(y.className=f),Object.keys(g).length>0&&(y.style=g),{props:y,internalRef:void 0}}const a=Fa(L({},o,r)),s=cf(r),l=cf(o),c=t(a),u=ln(c==null?void 0:c.className,n==null?void 0:n.className,i,o==null?void 0:o.className,r==null?void 0:r.className),d=L({},c==null?void 0:c.style,n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),p=L({},c,n,l,s);return u.length>0&&(p.className=u),Object.keys(d).length>0&&(p.style=d),{props:p,internalRef:c.ref}}const b2=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function Lc(e){var t;const{elementType:n,externalSlotProps:r,ownerState:o,skipResolvingSlotProps:i=!1}=e,a=Pe(e,b2),s=i?{}:n2(r,o),{props:l,internalRef:c}=w2(L({},a,{externalSlotProps:s})),u=or(c,s==null?void 0:s.ref,(t=e.additionalProps)==null?void 0:t.ref);return t2(n,L({},l,{ref:u}),o)}function uf(e){return e.substring(2).toLowerCase()}function k2(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}function S2(e){const{children:t,disableReactTree:n=!1,mouseEvent:r="onClick",onClickAway:o,touchEvent:i="onTouchEnd"}=e,a=T.useRef(!1),s=T.useRef(null),l=T.useRef(!1),c=T.useRef(!1);T.useEffect(()=>(setTimeout(()=>{l.current=!0},0),()=>{l.current=!1}),[]);const u=or(t.ref,s),d=ti(g=>{const y=c.current;c.current=!1;const b=Rt(s.current);if(!l.current||!s.current||"clientX"in g&&k2(g,b))return;if(a.current){a.current=!1;return}let h;g.composedPath?h=g.composedPath().indexOf(s.current)>-1:h=!b.documentElement.contains(g.target)||s.current.contains(g.target),!h&&(n||!y)&&o(g)}),p=g=>y=>{c.current=!0;const b=t.props[g];b&&b(y)},f={ref:u};return i!==!1&&(f[i]=p(i)),T.useEffect(()=>{if(i!==!1){const g=uf(i),y=Rt(s.current),b=()=>{a.current=!0};return y.addEventListener(g,d),y.addEventListener("touchmove",b),()=>{y.removeEventListener(g,d),y.removeEventListener("touchmove",b)}}},[d,i]),r!==!1&&(f[r]=p(r)),T.useEffect(()=>{if(r!==!1){const g=uf(r),y=Rt(s.current);return y.addEventListener(g,d),()=>{y.removeEventListener(g,d)}}},[d,r]),x.jsx(T.Fragment,{children:T.cloneElement(t,f)})}function E2(e={}){const{autoHideDuration:t=null,disableWindowBlurListener:n=!1,onClose:r,open:o,resumeHideDuration:i}=e,a=Wg();T.useEffect(()=>{if(!o)return;function h(m){m.defaultPrevented||(m.key==="Escape"||m.key==="Esc")&&(r==null||r(m,"escapeKeyDown"))}return document.addEventListener("keydown",h),()=>{document.removeEventListener("keydown",h)}},[o,r]);const s=ti((h,m)=>{r==null||r(h,m)}),l=ti(h=>{!r||h==null||a.start(h,()=>{s(null,"timeout")})});T.useEffect(()=>(o&&l(t),a.clear),[o,t,l,a]);const c=h=>{r==null||r(h,"clickaway")},u=a.clear,d=T.useCallback(()=>{t!=null&&l(i??t*.5)},[t,i,l]),p=h=>m=>{const v=h.onBlur;v==null||v(m),d()},f=h=>m=>{const v=h.onFocus;v==null||v(m),u()},g=h=>m=>{const v=h.onMouseEnter;v==null||v(m),u()},y=h=>m=>{const v=h.onMouseLeave;v==null||v(m),d()};return T.useEffect(()=>{if(!n&&o)return window.addEventListener("focus",d),window.addEventListener("blur",u),()=>{window.removeEventListener("focus",d),window.removeEventListener("blur",u)}},[n,o,d,u]),{getRootProps:(h={})=>{const m=L({},Fa(e),Fa(h));return L({role:"presentation"},h,m,{onBlur:p(m),onFocus:f(m),onMouseEnter:g(m),onMouseLeave:y(m)})},onClickAway:c}}var di={},Kg={exports:{}};(function(e){function t(n){return n&&n.__esModule?n:{default:n}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(Kg);var qg=Kg.exports,Sl={exports:{}},df;function Yg(){return df||(df=1,function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var i in o)({}).hasOwnProperty.call(o,i)&&(n[i]=o[i])}return n},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(null,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(Sl)),Sl.exports}var El={exports:{}},pf;function C2(){return pf||(pf=1,function(e){function t(n,r){if(n==null)return{};var o={};for(var i in n)if({}.hasOwnProperty.call(n,i)){if(r.indexOf(i)>=0)continue;o[i]=n[i]}return o}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(El)),El.exports}function _2(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function j2(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var T2=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(j2(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=_2(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Ue="-ms-",Da="-moz-",X="-webkit-",Qg="comm",ed="rule",td="decl",P2="@import",Jg="@keyframes",$2="@layer",O2=Math.abs,ks=String.fromCharCode,R2=Object.assign;function I2(e,t){return Me(e,0)^45?(((t<<2^Me(e,0))<<2^Me(e,1))<<2^Me(e,2))<<2^Me(e,3):0}function Xg(e){return e.trim()}function A2(e,t){return(e=t.exec(e))?e[0]:e}function Z(e,t,n){return e.replace(t,n)}function Nc(e,t){return e.indexOf(t)}function Me(e,t){return e.charCodeAt(t)|0}function ni(e,t,n){return e.slice(t,n)}function Vt(e){return e.length}function nd(e){return e.length}function Mi(e,t){return t.push(e),e}function z2(e,t){return e.map(t).join("")}var Ss=1,Qr=1,Zg=0,tt=0,Ee=0,to="";function Es(e,t,n,r,o,i,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Ss,column:Qr,length:a,return:""}}function mo(e,t){return R2(Es("",null,null,"",null,null,0),e,{length:-e.length},t)}function L2(){return Ee}function N2(){return Ee=tt>0?Me(to,--tt):0,Qr--,Ee===10&&(Qr=1,Ss--),Ee}function st(){return Ee=tt<Zg?Me(to,tt++):0,Qr++,Ee===10&&(Qr=1,Ss++),Ee}function Kt(){return Me(to,tt)}function ra(){return tt}function pi(e,t){return ni(to,e,t)}function ri(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function e0(e){return Ss=Qr=1,Zg=Vt(to=e),tt=0,[]}function t0(e){return to="",e}function oa(e){return Xg(pi(tt-1,Mc(e===91?e+2:e===40?e+1:e)))}function M2(e){for(;(Ee=Kt())&&Ee<33;)st();return ri(e)>2||ri(Ee)>3?"":" "}function F2(e,t){for(;--t&&st()&&!(Ee<48||Ee>102||Ee>57&&Ee<65||Ee>70&&Ee<97););return pi(e,ra()+(t<6&&Kt()==32&&st()==32))}function Mc(e){for(;st();)switch(Ee){case e:return tt;case 34:case 39:e!==34&&e!==39&&Mc(Ee);break;case 40:e===41&&Mc(e);break;case 92:st();break}return tt}function D2(e,t){for(;st()&&e+Ee!==57;)if(e+Ee===84&&Kt()===47)break;return"/*"+pi(t,tt-1)+"*"+ks(e===47?e:st())}function V2(e){for(;!ri(Kt());)st();return pi(e,tt)}function H2(e){return t0(ia("",null,null,null,[""],e=e0(e),0,[0],e))}function ia(e,t,n,r,o,i,a,s,l){for(var c=0,u=0,d=a,p=0,f=0,g=0,y=1,b=1,h=1,m=0,v="",w=o,k=i,E=r,S=v;b;)switch(g=m,m=st()){case 40:if(g!=108&&Me(S,d-1)==58){Nc(S+=Z(oa(m),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:S+=oa(m);break;case 9:case 10:case 13:case 32:S+=M2(g);break;case 92:S+=F2(ra()-1,7);continue;case 47:switch(Kt()){case 42:case 47:Mi(U2(D2(st(),ra()),t,n),l);break;default:S+="/"}break;case 123*y:s[c++]=Vt(S)*h;case 125*y:case 59:case 0:switch(m){case 0:case 125:b=0;case 59+u:h==-1&&(S=Z(S,/\f/g,"")),f>0&&Vt(S)-d&&Mi(f>32?mf(S+";",r,n,d-1):mf(Z(S," ","")+";",r,n,d-2),l);break;case 59:S+=";";default:if(Mi(E=ff(S,t,n,c,u,o,s,v,w=[],k=[],d),i),m===123)if(u===0)ia(S,t,E,E,w,i,d,s,k);else switch(p===99&&Me(S,3)===110?100:p){case 100:case 108:case 109:case 115:ia(e,E,E,r&&Mi(ff(e,E,E,0,0,o,s,v,o,w=[],d),k),o,k,d,s,r?w:k);break;default:ia(S,E,E,E,[""],k,0,s,k)}}c=u=f=0,y=h=1,v=S="",d=a;break;case 58:d=1+Vt(S),f=g;default:if(y<1){if(m==123)--y;else if(m==125&&y++==0&&N2()==125)continue}switch(S+=ks(m),m*y){case 38:h=u>0?1:(S+="\f",-1);break;case 44:s[c++]=(Vt(S)-1)*h,h=1;break;case 64:Kt()===45&&(S+=oa(st())),p=Kt(),u=d=Vt(v=S+=V2(ra())),m++;break;case 45:g===45&&Vt(S)==2&&(y=0)}}return i}function ff(e,t,n,r,o,i,a,s,l,c,u){for(var d=o-1,p=o===0?i:[""],f=nd(p),g=0,y=0,b=0;g<r;++g)for(var h=0,m=ni(e,d+1,d=O2(y=a[g])),v=e;h<f;++h)(v=Xg(y>0?p[h]+" "+m:Z(m,/&\f/g,p[h])))&&(l[b++]=v);return Es(e,t,n,o===0?ed:s,l,c,u)}function U2(e,t,n){return Es(e,t,n,Qg,ks(L2()),ni(e,2,-2),0)}function mf(e,t,n,r){return Es(e,t,n,td,ni(e,0,r),ni(e,r+1,-1),r)}function Lr(e,t){for(var n="",r=nd(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function W2(e,t,n,r){switch(e.type){case $2:if(e.children.length)break;case P2:case td:return e.return=e.return||e.value;case Qg:return"";case Jg:return e.return=e.value+"{"+Lr(e.children,r)+"}";case ed:e.value=e.props.join(",")}return Vt(n=Lr(e.children,r))?e.return=e.value+"{"+n+"}":""}function B2(e){var t=nd(e);return function(n,r,o,i){for(var a="",s=0;s<t;s++)a+=e[s](n,r,o,i)||"";return a}}function G2(e){return function(t){t.root||(t=t.return)&&e(t)}}var K2=function(t,n,r){for(var o=0,i=0;o=i,i=Kt(),o===38&&i===12&&(n[r]=1),!ri(i);)st();return pi(t,tt)},q2=function(t,n){var r=-1,o=44;do switch(ri(o)){case 0:o===38&&Kt()===12&&(n[r]=1),t[r]+=K2(tt-1,n,r);break;case 2:t[r]+=oa(o);break;case 4:if(o===44){t[++r]=Kt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=ks(o)}while(o=st());return t},Y2=function(t,n){return t0(q2(e0(t),n))},hf=new WeakMap,Q2=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!hf.get(r))&&!o){hf.set(t,!0);for(var i=[],a=Y2(n,i),s=r.props,l=0,c=0;l<a.length;l++)for(var u=0;u<s.length;u++,c++)t.props[c]=i[l]?a[l].replace(/&\f/g,s[u]):s[u]+" "+a[l]}}},J2=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function n0(e,t){switch(I2(e,t)){case 5103:return X+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return X+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return X+e+Da+e+Ue+e+e;case 6828:case 4268:return X+e+Ue+e+e;case 6165:return X+e+Ue+"flex-"+e+e;case 5187:return X+e+Z(e,/(\w+).+(:[^]+)/,X+"box-$1$2"+Ue+"flex-$1$2")+e;case 5443:return X+e+Ue+"flex-item-"+Z(e,/flex-|-self/,"")+e;case 4675:return X+e+Ue+"flex-line-pack"+Z(e,/align-content|flex-|-self/,"")+e;case 5548:return X+e+Ue+Z(e,"shrink","negative")+e;case 5292:return X+e+Ue+Z(e,"basis","preferred-size")+e;case 6060:return X+"box-"+Z(e,"-grow","")+X+e+Ue+Z(e,"grow","positive")+e;case 4554:return X+Z(e,/([^-])(transform)/g,"$1"+X+"$2")+e;case 6187:return Z(Z(Z(e,/(zoom-|grab)/,X+"$1"),/(image-set)/,X+"$1"),e,"")+e;case 5495:case 3959:return Z(e,/(image-set\([^]*)/,X+"$1$`$1");case 4968:return Z(Z(e,/(.+:)(flex-)?(.*)/,X+"box-pack:$3"+Ue+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+X+e+e;case 4095:case 3583:case 4068:case 2532:return Z(e,/(.+)-inline(.+)/,X+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Vt(e)-1-t>6)switch(Me(e,t+1)){case 109:if(Me(e,t+4)!==45)break;case 102:return Z(e,/(.+:)(.+)-([^]+)/,"$1"+X+"$2-$3$1"+Da+(Me(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Nc(e,"stretch")?n0(Z(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Me(e,t+1)!==115)break;case 6444:switch(Me(e,Vt(e)-3-(~Nc(e,"!important")&&10))){case 107:return Z(e,":",":"+X)+e;case 101:return Z(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+X+(Me(e,14)===45?"inline-":"")+"box$3$1"+X+"$2$3$1"+Ue+"$2box$3")+e}break;case 5936:switch(Me(e,t+11)){case 114:return X+e+Ue+Z(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return X+e+Ue+Z(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return X+e+Ue+Z(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return X+e+Ue+e+e}return e}var X2=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case td:t.return=n0(t.value,t.length);break;case Jg:return Lr([mo(t,{value:Z(t.value,"@","@"+X)})],o);case ed:if(t.length)return z2(t.props,function(i){switch(A2(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Lr([mo(t,{props:[Z(i,/:(read-\w+)/,":"+Da+"$1")]})],o);case"::placeholder":return Lr([mo(t,{props:[Z(i,/:(plac\w+)/,":"+X+"input-$1")]}),mo(t,{props:[Z(i,/:(plac\w+)/,":"+Da+"$1")]}),mo(t,{props:[Z(i,/:(plac\w+)/,Ue+"input-$1")]})],o)}return""})}},Z2=[X2],r0=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var b=y.getAttribute("data-emotion");b.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var o=t.stylisPlugins||Z2,i={},a,s=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var b=y.getAttribute("data-emotion").split(" "),h=1;h<b.length;h++)i[b[h]]=!0;s.push(y)});var l,c=[Q2,J2];{var u,d=[W2,G2(function(y){u.insert(y)})],p=B2(c.concat(o,d)),f=function(b){return Lr(H2(b),p)};l=function(b,h,m,v){u=m,f(b?b+"{"+h.styles+"}":h.styles),v&&(g.inserted[h.name]=!0)}}var g={key:n,sheet:new T2({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:l};return g.sheet.hydrate(s),g},o0={exports:{}},re={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ze=typeof Symbol=="function"&&Symbol.for,rd=ze?Symbol.for("react.element"):60103,od=ze?Symbol.for("react.portal"):60106,Cs=ze?Symbol.for("react.fragment"):60107,_s=ze?Symbol.for("react.strict_mode"):60108,js=ze?Symbol.for("react.profiler"):60114,Ts=ze?Symbol.for("react.provider"):60109,Ps=ze?Symbol.for("react.context"):60110,id=ze?Symbol.for("react.async_mode"):60111,$s=ze?Symbol.for("react.concurrent_mode"):60111,Os=ze?Symbol.for("react.forward_ref"):60112,Rs=ze?Symbol.for("react.suspense"):60113,eb=ze?Symbol.for("react.suspense_list"):60120,Is=ze?Symbol.for("react.memo"):60115,As=ze?Symbol.for("react.lazy"):60116,tb=ze?Symbol.for("react.block"):60121,nb=ze?Symbol.for("react.fundamental"):60117,rb=ze?Symbol.for("react.responder"):60118,ob=ze?Symbol.for("react.scope"):60119;function dt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case rd:switch(e=e.type,e){case id:case $s:case Cs:case js:case _s:case Rs:return e;default:switch(e=e&&e.$$typeof,e){case Ps:case Os:case As:case Is:case Ts:return e;default:return t}}case od:return t}}}function i0(e){return dt(e)===$s}re.AsyncMode=id;re.ConcurrentMode=$s;re.ContextConsumer=Ps;re.ContextProvider=Ts;re.Element=rd;re.ForwardRef=Os;re.Fragment=Cs;re.Lazy=As;re.Memo=Is;re.Portal=od;re.Profiler=js;re.StrictMode=_s;re.Suspense=Rs;re.isAsyncMode=function(e){return i0(e)||dt(e)===id};re.isConcurrentMode=i0;re.isContextConsumer=function(e){return dt(e)===Ps};re.isContextProvider=function(e){return dt(e)===Ts};re.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===rd};re.isForwardRef=function(e){return dt(e)===Os};re.isFragment=function(e){return dt(e)===Cs};re.isLazy=function(e){return dt(e)===As};re.isMemo=function(e){return dt(e)===Is};re.isPortal=function(e){return dt(e)===od};re.isProfiler=function(e){return dt(e)===js};re.isStrictMode=function(e){return dt(e)===_s};re.isSuspense=function(e){return dt(e)===Rs};re.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Cs||e===$s||e===js||e===_s||e===Rs||e===eb||typeof e=="object"&&e!==null&&(e.$$typeof===As||e.$$typeof===Is||e.$$typeof===Ts||e.$$typeof===Ps||e.$$typeof===Os||e.$$typeof===nb||e.$$typeof===rb||e.$$typeof===ob||e.$$typeof===tb)};re.typeOf=dt;o0.exports=re;var ib=o0.exports,a0=ib,ab={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},sb={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s0={};s0[a0.ForwardRef]=ab;s0[a0.Memo]=sb;var lb=!0;function cb(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var l0=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||lb===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},c0=function(t,n,r){l0(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function ub(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var db=/[A-Z]|^ms/g,pb=/_EMO_([^_]+?)_([^]*?)_EMO_/g,u0=function(t){return t.charCodeAt(1)===45},gf=function(t){return t!=null&&typeof t!="boolean"},Cl=tg(function(e){return u0(e)?e:e.replace(db,"-$&").toLowerCase()}),vf=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(pb,function(r,o,i){return Ht={name:o,styles:i,next:Ht},o})}return cg[t]!==1&&!u0(t)&&typeof n=="number"&&n!==0?n+"px":n};function oi(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Ht={name:n.name,styles:n.styles,next:Ht},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Ht={name:r.name,styles:r.styles,next:Ht},r=r.next;var o=n.styles+";";return o}return fb(e,t,n)}case"function":{if(e!==void 0){var i=Ht,a=n(e);return Ht=i,oi(e,t,a)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function fb(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=oi(e,t,n[o])+";";else for(var i in n){var a=n[i];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=i+"{"+t[a]+"}":gf(a)&&(r+=Cl(i)+":"+vf(i,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var s=0;s<a.length;s++)gf(a[s])&&(r+=Cl(i)+":"+vf(i,a[s])+";");else{var l=oi(e,t,a);switch(i){case"animation":case"animationName":{r+=Cl(i)+":"+l+";";break}default:r+=i+"{"+l+"}"}}}return r}var yf=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Ht,ad=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";Ht=void 0;var a=t[0];a==null||a.raw===void 0?(o=!1,i+=oi(r,n,a)):i+=a[0];for(var s=1;s<t.length;s++)i+=oi(r,n,t[s]),o&&(i+=a[s]);yf.lastIndex=0;for(var l="",c;(c=yf.exec(i))!==null;)l+="-"+c[1];var u=ub(i)+l;return{name:u,styles:i,next:Ht}},mb=function(t){return t()},d0=$l.useInsertionEffect?$l.useInsertionEffect:!1,hb=d0||mb,xf=d0||T.useLayoutEffect,p0=T.createContext(typeof HTMLElement<"u"?r0({key:"css"}):null),gb=p0.Provider,f0=function(t){return T.forwardRef(function(n,r){var o=T.useContext(p0);return t(n,o,r)})},zs=T.createContext({});Yg();var vb=f0(function(e,t){var n=e.styles,r=ad([n],void 0,T.useContext(zs)),o=T.useRef();return xf(function(){var i=t.key+"-global",a=new t.sheet.constructor({key:i,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),s=!1,l=document.querySelector('style[data-emotion="'+i+" "+r.name+'"]');return t.sheet.tags.length&&(a.before=t.sheet.tags[0]),l!==null&&(s=!0,l.setAttribute("data-emotion",i),a.hydrate([l])),o.current=[a,s],function(){a.flush()}},[t]),xf(function(){var i=o.current,a=i[0],s=i[1];if(s){i[1]=!1;return}if(r.next!==void 0&&c0(t,r.next,!0),a.tags.length){var l=a.tags[a.tags.length-1].nextElementSibling;a.before=l,a.flush()}t.insert("",r,a,!1)},[t,r.name]),null});function m0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return ad(t)}var yb=function(){var t=m0.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},xb=by,wb=function(t){return t!=="theme"},wf=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?xb:wb},bf=function(t,n,r){var o;if(n){var i=n.shouldForwardProp;o=t.__emotion_forwardProp&&i?function(a){return t.__emotion_forwardProp(a)&&i(a)}:i}return typeof o!="function"&&r&&(o=t.__emotion_forwardProp),o},bb=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return l0(n,r,o),hb(function(){return c0(n,r,o)}),null},kb=function e(t,n){var r=t.__emotion_real===t,o=r&&t.__emotion_base||t,i,a;n!==void 0&&(i=n.label,a=n.target);var s=bf(t,n,r),l=s||wf(o),c=!l("as");return function(){var u=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(i!==void 0&&d.push("label:"+i+";"),u[0]==null||u[0].raw===void 0)d.push.apply(d,u);else{d.push(u[0][0]);for(var p=u.length,f=1;f<p;f++)d.push(u[f],u[0][f])}var g=f0(function(y,b,h){var m=c&&y.as||o,v="",w=[],k=y;if(y.theme==null){k={};for(var E in y)k[E]=y[E];k.theme=T.useContext(zs)}typeof y.className=="string"?v=cb(b.registered,w,y.className):y.className!=null&&(v=y.className+" ");var S=ad(d.concat(w),b.registered,k);v+=b.key+"-"+S.name,a!==void 0&&(v+=" "+a);var j=c&&s===void 0?wf(m):l,z={};for(var O in y)c&&O==="as"||j(O)&&(z[O]=y[O]);return z.className=v,z.ref=h,T.createElement(T.Fragment,null,T.createElement(bb,{cache:b,serialized:S,isStringTag:typeof m=="string"}),T.createElement(m,z))});return g.displayName=i!==void 0?i:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",g.defaultProps=t.defaultProps,g.__emotion_real=g,g.__emotion_base=o,g.__emotion_styles=d,g.__emotion_forwardProp=s,Object.defineProperty(g,"toString",{value:function(){return"."+a}}),g.withComponent=function(y,b){return e(y,L({},n,b,{shouldForwardProp:bf(g,b,!0)})).apply(void 0,d)},g}},Sb=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Fc=kb.bind();Sb.forEach(function(e){Fc[e]=Fc(e)});let Dc;typeof document=="object"&&(Dc=r0({key:"css",prepend:!0}));function Eb(e){const{injectFirst:t,children:n}=e;return t&&Dc?x.jsx(gb,{value:Dc,children:n}):n}function Cb(e){return e==null||Object.keys(e).length===0}function _b(e){const{styles:t,defaultTheme:n={}}=e,r=typeof t=="function"?o=>t(Cb(o)?n:o):t;return x.jsx(vb,{styles:r})}function jb(e,t){return Fc(e,t)}const Tb=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))},Pb=Object.freeze(Object.defineProperty({__proto__:null,GlobalStyles:_b,StyledEngineProvider:Eb,ThemeContext:zs,css:m0,default:jb,internal_processStyles:Tb,keyframes:yb},Symbol.toStringTag,{value:"Module"})),$b=On(Pb),Ob=On(r2),Rb=On(u2),Ib=On(c2),Ab=["values","unit","step"],zb=e=>{const t=Object.keys(e).map(n=>({key:n,val:e[n]}))||[];return t.sort((n,r)=>n.val-r.val),t.reduce((n,r)=>L({},n,{[r.key]:r.val}),{})};function h0(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=e,o=Pe(e,Ab),i=zb(t),a=Object.keys(i);function s(p){return`@media (min-width:${typeof t[p]=="number"?t[p]:p}${n})`}function l(p){return`@media (max-width:${(typeof t[p]=="number"?t[p]:p)-r/100}${n})`}function c(p,f){const g=a.indexOf(f);return`@media (min-width:${typeof t[p]=="number"?t[p]:p}${n}) and (max-width:${(g!==-1&&typeof t[a[g]]=="number"?t[a[g]]:f)-r/100}${n})`}function u(p){return a.indexOf(p)+1<a.length?c(p,a[a.indexOf(p)+1]):s(p)}function d(p){const f=a.indexOf(p);return f===0?s(a[1]):f===a.length-1?l(a[f]):c(p,a[a.indexOf(p)+1]).replace("@media","@media not all and")}return L({keys:a,values:i,up:s,down:l,between:c,only:u,not:d,unit:n},o)}const Lb={borderRadius:4};function Io(e,t){return t?Gt(e,t,{clone:!1}):e}const sd={xs:0,sm:600,md:900,lg:1200,xl:1536},kf={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${sd[e]}px)`};function cn(e,t,n){const r=e.theme||{};if(Array.isArray(t)){const i=r.breakpoints||kf;return t.reduce((a,s,l)=>(a[i.up(i.keys[l])]=n(t[l]),a),{})}if(typeof t=="object"){const i=r.breakpoints||kf;return Object.keys(t).reduce((a,s)=>{if(Object.keys(i.values||sd).indexOf(s)!==-1){const l=i.up(s);a[l]=n(t[s],s)}else{const l=s;a[l]=t[l]}return a},{})}return n(t)}function Nb(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((r,o)=>{const i=e.up(o);return r[i]={},r},{}))||{}}function Mb(e,t){return e.reduce((n,r)=>{const o=n[r];return(!o||Object.keys(o).length===0)&&delete n[r],n},t)}function Ls(e,t,n=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&n){const r=`vars.${t}`.split(".").reduce((o,i)=>o&&o[i]?o[i]:null,e);if(r!=null)return r}return t.split(".").reduce((r,o)=>r&&r[o]!=null?r[o]:null,e)}function Va(e,t,n,r=n){let o;return typeof e=="function"?o=e(n):Array.isArray(e)?o=e[n]||r:o=Ls(e,n)||r,t&&(o=t(o,r,e)),o}function be(e){const{prop:t,cssProperty:n=e.prop,themeKey:r,transform:o}=e,i=a=>{if(a[t]==null)return null;const s=a[t],l=a.theme,c=Ls(l,r)||{};return cn(a,s,d=>{let p=Va(c,o,d);return d===p&&typeof d=="string"&&(p=Va(c,o,`${t}${d==="default"?"":qt(d)}`,d)),n===!1?p:{[n]:p}})};return i.propTypes={},i.filterProps=[t],i}function Fb(e){const t={};return n=>(t[n]===void 0&&(t[n]=e(n)),t[n])}const Db={m:"margin",p:"padding"},Vb={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},Sf={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},Hb=Fb(e=>{if(e.length>2)if(Sf[e])e=Sf[e];else return[e];const[t,n]=e.split(""),r=Db[t],o=Vb[n]||"";return Array.isArray(o)?o.map(i=>r+i):[r+o]}),ld=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],cd=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...ld,...cd];function fi(e,t,n,r){var o;const i=(o=Ls(e,t,!1))!=null?o:n;return typeof i=="number"?a=>typeof a=="string"?a:i*a:Array.isArray(i)?a=>typeof a=="string"?a:i[a]:typeof i=="function"?i:()=>{}}function g0(e){return fi(e,"spacing",8)}function mi(e,t){if(typeof t=="string"||t==null)return t;const n=Math.abs(t),r=e(n);return t>=0?r:typeof r=="number"?-r:`-${r}`}function Ub(e,t){return n=>e.reduce((r,o)=>(r[o]=mi(t,n),r),{})}function Wb(e,t,n,r){if(t.indexOf(n)===-1)return null;const o=Hb(n),i=Ub(o,r),a=e[n];return cn(e,a,i)}function v0(e,t){const n=g0(e.theme);return Object.keys(e).map(r=>Wb(e,t,r,n)).reduce(Io,{})}function ge(e){return v0(e,ld)}ge.propTypes={};ge.filterProps=ld;function ve(e){return v0(e,cd)}ve.propTypes={};ve.filterProps=cd;function Bb(e=8){if(e.mui)return e;const t=g0({spacing:e}),n=(...r)=>(r.length===0?[1]:r).map(i=>{const a=t(i);return typeof a=="number"?`${a}px`:a}).join(" ");return n.mui=!0,n}function Ns(...e){const t=e.reduce((r,o)=>(o.filterProps.forEach(i=>{r[i]=o}),r),{}),n=r=>Object.keys(r).reduce((o,i)=>t[i]?Io(o,t[i](r)):o,{});return n.propTypes={},n.filterProps=e.reduce((r,o)=>r.concat(o.filterProps),[]),n}function gt(e){return typeof e!="number"?e:`${e}px solid`}function Et(e,t){return be({prop:e,themeKey:"borders",transform:t})}const Gb=Et("border",gt),Kb=Et("borderTop",gt),qb=Et("borderRight",gt),Yb=Et("borderBottom",gt),Qb=Et("borderLeft",gt),Jb=Et("borderColor"),Xb=Et("borderTopColor"),Zb=Et("borderRightColor"),ek=Et("borderBottomColor"),tk=Et("borderLeftColor"),nk=Et("outline",gt),rk=Et("outlineColor"),Ms=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=fi(e.theme,"shape.borderRadius",4),n=r=>({borderRadius:mi(t,r)});return cn(e,e.borderRadius,n)}return null};Ms.propTypes={};Ms.filterProps=["borderRadius"];Ns(Gb,Kb,qb,Yb,Qb,Jb,Xb,Zb,ek,tk,Ms,nk,rk);const Fs=e=>{if(e.gap!==void 0&&e.gap!==null){const t=fi(e.theme,"spacing",8),n=r=>({gap:mi(t,r)});return cn(e,e.gap,n)}return null};Fs.propTypes={};Fs.filterProps=["gap"];const Ds=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=fi(e.theme,"spacing",8),n=r=>({columnGap:mi(t,r)});return cn(e,e.columnGap,n)}return null};Ds.propTypes={};Ds.filterProps=["columnGap"];const Vs=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=fi(e.theme,"spacing",8),n=r=>({rowGap:mi(t,r)});return cn(e,e.rowGap,n)}return null};Vs.propTypes={};Vs.filterProps=["rowGap"];const ok=be({prop:"gridColumn"}),ik=be({prop:"gridRow"}),ak=be({prop:"gridAutoFlow"}),sk=be({prop:"gridAutoColumns"}),lk=be({prop:"gridAutoRows"}),ck=be({prop:"gridTemplateColumns"}),uk=be({prop:"gridTemplateRows"}),dk=be({prop:"gridTemplateAreas"}),pk=be({prop:"gridArea"});Ns(Fs,Ds,Vs,ok,ik,ak,sk,lk,ck,uk,dk,pk);function Nr(e,t){return t==="grey"?t:e}const fk=be({prop:"color",themeKey:"palette",transform:Nr}),mk=be({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Nr}),hk=be({prop:"backgroundColor",themeKey:"palette",transform:Nr});Ns(fk,mk,hk);function ot(e){return e<=1&&e!==0?`${e*100}%`:e}const gk=be({prop:"width",transform:ot}),ud=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=n=>{var r,o;const i=((r=e.theme)==null||(r=r.breakpoints)==null||(r=r.values)==null?void 0:r[n])||sd[n];return i?((o=e.theme)==null||(o=o.breakpoints)==null?void 0:o.unit)!=="px"?{maxWidth:`${i}${e.theme.breakpoints.unit}`}:{maxWidth:i}:{maxWidth:ot(n)}};return cn(e,e.maxWidth,t)}return null};ud.filterProps=["maxWidth"];const vk=be({prop:"minWidth",transform:ot}),yk=be({prop:"height",transform:ot}),xk=be({prop:"maxHeight",transform:ot}),wk=be({prop:"minHeight",transform:ot});be({prop:"size",cssProperty:"width",transform:ot});be({prop:"size",cssProperty:"height",transform:ot});const bk=be({prop:"boxSizing"});Ns(gk,ud,vk,yk,xk,wk,bk);const hi={border:{themeKey:"borders",transform:gt},borderTop:{themeKey:"borders",transform:gt},borderRight:{themeKey:"borders",transform:gt},borderBottom:{themeKey:"borders",transform:gt},borderLeft:{themeKey:"borders",transform:gt},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:gt},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Ms},color:{themeKey:"palette",transform:Nr},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Nr},backgroundColor:{themeKey:"palette",transform:Nr},p:{style:ve},pt:{style:ve},pr:{style:ve},pb:{style:ve},pl:{style:ve},px:{style:ve},py:{style:ve},padding:{style:ve},paddingTop:{style:ve},paddingRight:{style:ve},paddingBottom:{style:ve},paddingLeft:{style:ve},paddingX:{style:ve},paddingY:{style:ve},paddingInline:{style:ve},paddingInlineStart:{style:ve},paddingInlineEnd:{style:ve},paddingBlock:{style:ve},paddingBlockStart:{style:ve},paddingBlockEnd:{style:ve},m:{style:ge},mt:{style:ge},mr:{style:ge},mb:{style:ge},ml:{style:ge},mx:{style:ge},my:{style:ge},margin:{style:ge},marginTop:{style:ge},marginRight:{style:ge},marginBottom:{style:ge},marginLeft:{style:ge},marginX:{style:ge},marginY:{style:ge},marginInline:{style:ge},marginInlineStart:{style:ge},marginInlineEnd:{style:ge},marginBlock:{style:ge},marginBlockStart:{style:ge},marginBlockEnd:{style:ge},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Fs},rowGap:{style:Vs},columnGap:{style:Ds},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:ot},maxWidth:{style:ud},minWidth:{transform:ot},height:{transform:ot},maxHeight:{transform:ot},minHeight:{transform:ot},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function kk(...e){const t=e.reduce((r,o)=>r.concat(Object.keys(o)),[]),n=new Set(t);return e.every(r=>n.size===Object.keys(r).length)}function Sk(e,t){return typeof e=="function"?e(t):e}function y0(){function e(n,r,o,i){const a={[n]:r,theme:o},s=i[n];if(!s)return{[n]:r};const{cssProperty:l=n,themeKey:c,transform:u,style:d}=s;if(r==null)return null;if(c==="typography"&&r==="inherit")return{[n]:r};const p=Ls(o,c)||{};return d?d(a):cn(a,r,g=>{let y=Va(p,u,g);return g===y&&typeof g=="string"&&(y=Va(p,u,`${n}${g==="default"?"":qt(g)}`,g)),l===!1?y:{[l]:y}})}function t(n){var r;const{sx:o,theme:i={}}=n||{};if(!o)return null;const a=(r=i.unstable_sxConfig)!=null?r:hi;function s(l){let c=l;if(typeof l=="function")c=l(i);else if(typeof l!="object")return l;if(!c)return null;const u=Nb(i.breakpoints),d=Object.keys(u);let p=u;return Object.keys(c).forEach(f=>{const g=Sk(c[f],i);if(g!=null)if(typeof g=="object")if(a[f])p=Io(p,e(f,g,i,a));else{const y=cn({theme:i},g,b=>({[f]:b}));kk(y,g)?p[f]=t({sx:g,theme:i}):p=Io(p,y)}else p=Io(p,e(f,g,i,a))}),Mb(d,p)}return Array.isArray(o)?o.map(s):s(o)}return t}const Hs=y0();Hs.filterProps=["sx"];function x0(e,t){const n=this;return n.vars&&typeof n.getColorSchemeSelector=="function"?{[n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/,"*:where($1)")]:t}:n.palette.mode===e?t:{}}const Ek=["breakpoints","palette","spacing","shape"];function dd(e={},...t){const{breakpoints:n={},palette:r={},spacing:o,shape:i={}}=e,a=Pe(e,Ek),s=h0(n),l=Bb(o);let c=Gt({breakpoints:s,direction:"ltr",components:{},palette:L({mode:"light"},r),spacing:l,shape:L({},Lb,i)},a);return c.applyStyles=x0,c=t.reduce((u,d)=>Gt(u,d),c),c.unstable_sxConfig=L({},hi,a==null?void 0:a.unstable_sxConfig),c.unstable_sx=function(d){return Hs({sx:d,theme:this})},c}const Ck=Object.freeze(Object.defineProperty({__proto__:null,default:dd,private_createBreakpoints:h0,unstable_applyStyles:x0},Symbol.toStringTag,{value:"Module"})),_k=On(Ck),jk=["sx"],Tk=e=>{var t,n;const r={systemProps:{},otherProps:{}},o=(t=e==null||(n=e.theme)==null?void 0:n.unstable_sxConfig)!=null?t:hi;return Object.keys(e).forEach(i=>{o[i]?r.systemProps[i]=e[i]:r.otherProps[i]=e[i]}),r};function w0(e){const{sx:t}=e,n=Pe(e,jk),{systemProps:r,otherProps:o}=Tk(n);let i;return Array.isArray(t)?i=[r,...t]:typeof t=="function"?i=(...a)=>{const s=t(...a);return vn(s)?L({},r,s):r}:i=L({},r,t),L({},o,{sx:i})}const Pk=Object.freeze(Object.defineProperty({__proto__:null,default:Hs,extendSxProp:w0,unstable_createStyleFunctionSx:y0,unstable_defaultSxConfig:hi},Symbol.toStringTag,{value:"Module"})),$k=On(Pk);var no=qg;Object.defineProperty(di,"__esModule",{value:!0});var Ok=di.default=Wk;di.shouldForwardProp=aa;di.systemDefaultTheme=void 0;var ft=no(Yg()),Vc=no(C2()),Ef=Mk($b),Rk=Ob;no(Rb);no(Ib);var Ik=no(_k),Ak=no($k);const zk=["ownerState"],Lk=["variants"],Nk=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function b0(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(b0=function(r){return r?n:t})(e)}function Mk(e,t){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=b0(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(i!=="default"&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}function Fk(e){return Object.keys(e).length===0}function Dk(e){return typeof e=="string"&&e.charCodeAt(0)>96}function aa(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const Vk=di.systemDefaultTheme=(0,Ik.default)(),Hk=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function Fi({defaultTheme:e,theme:t,themeId:n}){return Fk(t)?e:t[n]||t}function Uk(e){return e?(t,n)=>n[e]:null}function sa(e,t){let{ownerState:n}=t,r=(0,Vc.default)(t,zk);const o=typeof e=="function"?e((0,ft.default)({ownerState:n},r)):e;if(Array.isArray(o))return o.flatMap(i=>sa(i,(0,ft.default)({ownerState:n},r)));if(o&&typeof o=="object"&&Array.isArray(o.variants)){const{variants:i=[]}=o;let s=(0,Vc.default)(o,Lk);return i.forEach(l=>{let c=!0;typeof l.props=="function"?c=l.props((0,ft.default)({ownerState:n},r,n)):Object.keys(l.props).forEach(u=>{(n==null?void 0:n[u])!==l.props[u]&&r[u]!==l.props[u]&&(c=!1)}),c&&(Array.isArray(s)||(s=[s]),s.push(typeof l.style=="function"?l.style((0,ft.default)({ownerState:n},r,n)):l.style))}),s}return o}function Wk(e={}){const{themeId:t,defaultTheme:n=Vk,rootShouldForwardProp:r=aa,slotShouldForwardProp:o=aa}=e,i=a=>(0,Ak.default)((0,ft.default)({},a,{theme:Fi((0,ft.default)({},a,{defaultTheme:n,themeId:t}))}));return i.__mui_systemSx=!0,(a,s={})=>{(0,Ef.internal_processStyles)(a,k=>k.filter(E=>!(E!=null&&E.__mui_systemSx)));const{name:l,slot:c,skipVariantsResolver:u,skipSx:d,overridesResolver:p=Uk(Hk(c))}=s,f=(0,Vc.default)(s,Nk),g=u!==void 0?u:c&&c!=="Root"&&c!=="root"||!1,y=d||!1;let b,h=aa;c==="Root"||c==="root"?h=r:c?h=o:Dk(a)&&(h=void 0);const m=(0,Ef.default)(a,(0,ft.default)({shouldForwardProp:h,label:b},f)),v=k=>typeof k=="function"&&k.__emotion_real!==k||(0,Rk.isPlainObject)(k)?E=>sa(k,(0,ft.default)({},E,{theme:Fi({theme:E.theme,defaultTheme:n,themeId:t})})):k,w=(k,...E)=>{let S=v(k);const j=E?E.map(v):[];l&&p&&j.push(I=>{const M=Fi((0,ft.default)({},I,{defaultTheme:n,themeId:t}));if(!M.components||!M.components[l]||!M.components[l].styleOverrides)return null;const B=M.components[l].styleOverrides,W={};return Object.entries(B).forEach(([V,N])=>{W[V]=sa(N,(0,ft.default)({},I,{theme:M}))}),p(I,W)}),l&&!g&&j.push(I=>{var M;const B=Fi((0,ft.default)({},I,{defaultTheme:n,themeId:t})),W=B==null||(M=B.components)==null||(M=M[l])==null?void 0:M.variants;return sa({variants:W},(0,ft.default)({},I,{theme:B}))}),y||j.push(i);const z=j.length-E.length;if(Array.isArray(k)&&z>0){const I=new Array(z).fill("");S=[...k,...I],S.raw=[...k.raw,...I]}const O=m(S,...j);return a.muiName&&(O.muiName=a.muiName),O};return m.withConfig&&(w.withConfig=m.withConfig),w}}function Bk(e,t){return L({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}var ke={};const Gk=On(o2),Kk=On(x2);var k0=qg;Object.defineProperty(ke,"__esModule",{value:!0});var Cf=ke.alpha=_0;ke.blend=s5;ke.colorChannel=void 0;var qk=ke.darken=fd;ke.decomposeColor=kt;var Yk=ke.emphasize=j0,Qk=ke.getContrastRatio=n5;ke.getLuminance=Ha;ke.hexToRgb=S0;ke.hslToRgb=C0;var Jk=ke.lighten=md;ke.private_safeAlpha=r5;ke.private_safeColorChannel=void 0;ke.private_safeDarken=o5;ke.private_safeEmphasize=a5;ke.private_safeLighten=i5;ke.recomposeColor=ro;ke.rgbToHex=t5;var _f=k0(Gk),Xk=k0(Kk);function pd(e,t=0,n=1){return(0,Xk.default)(e,t,n)}function S0(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,o)=>o<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function Zk(e){const t=e.toString(16);return t.length===1?`0${t}`:t}function kt(e){if(e.type)return e;if(e.charAt(0)==="#")return kt(S0(e));const t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error((0,_f.default)(9,e));let r=e.substring(t+1,e.length-1),o;if(n==="color"){if(r=r.split(" "),o=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(o)===-1)throw new Error((0,_f.default)(10,o))}else r=r.split(",");return r=r.map(i=>parseFloat(i)),{type:n,values:r,colorSpace:o}}const E0=e=>{const t=kt(e);return t.values.slice(0,3).map((n,r)=>t.type.indexOf("hsl")!==-1&&r!==0?`${n}%`:n).join(" ")};ke.colorChannel=E0;const e5=(e,t)=>{try{return E0(e)}catch{return e}};ke.private_safeColorChannel=e5;function ro(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return t.indexOf("rgb")!==-1?r=r.map((o,i)=>i<3?parseInt(o,10):o):t.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),t.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${t}(${r})`}function t5(e){if(e.indexOf("#")===0)return e;const{values:t}=kt(e);return`#${t.map((n,r)=>Zk(r===3?Math.round(255*n):n)).join("")}`}function C0(e){e=kt(e);const{values:t}=e,n=t[0],r=t[1]/100,o=t[2]/100,i=r*Math.min(o,1-o),a=(c,u=(c+n/30)%12)=>o-i*Math.max(Math.min(u-3,9-u,1),-1);let s="rgb";const l=[Math.round(a(0)*255),Math.round(a(8)*255),Math.round(a(4)*255)];return e.type==="hsla"&&(s+="a",l.push(t[3])),ro({type:s,values:l})}function Ha(e){e=kt(e);let t=e.type==="hsl"||e.type==="hsla"?kt(C0(e)).values:e.values;return t=t.map(n=>(e.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function n5(e,t){const n=Ha(e),r=Ha(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function _0(e,t){return e=kt(e),t=pd(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,ro(e)}function r5(e,t,n){try{return _0(e,t)}catch{return e}}function fd(e,t){if(e=kt(e),t=pd(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]*=1-t;return ro(e)}function o5(e,t,n){try{return fd(e,t)}catch{return e}}function md(e,t){if(e=kt(e),t=pd(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return ro(e)}function i5(e,t,n){try{return md(e,t)}catch{return e}}function j0(e,t=.15){return Ha(e)>.5?fd(e,t):md(e,t)}function a5(e,t,n){try{return j0(e,t)}catch{return e}}function s5(e,t,n,r=1){const o=(l,c)=>Math.round((l**(1/r)*(1-n)+c**(1/r)*n)**r),i=kt(e),a=kt(t),s=[o(i.values[0],a.values[0]),o(i.values[1],a.values[1]),o(i.values[2],a.values[2])];return ro({type:"rgb",values:s})}const ii={black:"#000",white:"#fff"},l5={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},ur={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},dr={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},ho={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},pr={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},fr={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},mr={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},c5=["mode","contrastThreshold","tonalOffset"],jf={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:ii.white,default:ii.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},_l={text:{primary:ii.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:ii.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function Tf(e,t,n,r){const o=r.light||r,i=r.dark||r*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t==="light"?e.light=Jk(e.main,o):t==="dark"&&(e.dark=qk(e.main,i)))}function u5(e="light"){return e==="dark"?{main:pr[200],light:pr[50],dark:pr[400]}:{main:pr[700],light:pr[400],dark:pr[800]}}function d5(e="light"){return e==="dark"?{main:ur[200],light:ur[50],dark:ur[400]}:{main:ur[500],light:ur[300],dark:ur[700]}}function p5(e="light"){return e==="dark"?{main:dr[500],light:dr[300],dark:dr[700]}:{main:dr[700],light:dr[400],dark:dr[800]}}function f5(e="light"){return e==="dark"?{main:fr[400],light:fr[300],dark:fr[700]}:{main:fr[700],light:fr[500],dark:fr[900]}}function m5(e="light"){return e==="dark"?{main:mr[400],light:mr[300],dark:mr[700]}:{main:mr[800],light:mr[500],dark:mr[900]}}function h5(e="light"){return e==="dark"?{main:ho[400],light:ho[300],dark:ho[700]}:{main:"#ed6c02",light:ho[500],dark:ho[900]}}function g5(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2}=e,o=Pe(e,c5),i=e.primary||u5(t),a=e.secondary||d5(t),s=e.error||p5(t),l=e.info||f5(t),c=e.success||m5(t),u=e.warning||h5(t);function d(y){return Qk(y,_l.text.primary)>=n?_l.text.primary:jf.text.primary}const p=({color:y,name:b,mainShade:h=500,lightShade:m=300,darkShade:v=700})=>{if(y=L({},y),!y.main&&y[h]&&(y.main=y[h]),!y.hasOwnProperty("main"))throw new Error(ei(11,b?` (${b})`:"",h));if(typeof y.main!="string")throw new Error(ei(12,b?` (${b})`:"",JSON.stringify(y.main)));return Tf(y,"light",m,r),Tf(y,"dark",v,r),y.contrastText||(y.contrastText=d(y.main)),y},f={dark:_l,light:jf};return Gt(L({common:L({},ii),mode:t,primary:p({color:i,name:"primary"}),secondary:p({color:a,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:p({color:s,name:"error"}),warning:p({color:u,name:"warning"}),info:p({color:l,name:"info"}),success:p({color:c,name:"success"}),grey:l5,contrastThreshold:n,getContrastText:d,augmentColor:p,tonalOffset:r},f[t]),o)}const v5=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function y5(e){return Math.round(e*1e5)/1e5}const Pf={textTransform:"uppercase"},$f='"Roboto", "Helvetica", "Arial", sans-serif';function x5(e,t){const n=typeof t=="function"?t(e):t,{fontFamily:r=$f,fontSize:o=14,fontWeightLight:i=300,fontWeightRegular:a=400,fontWeightMedium:s=500,fontWeightBold:l=700,htmlFontSize:c=16,allVariants:u,pxToRem:d}=n,p=Pe(n,v5),f=o/14,g=d||(h=>`${h/c*f}rem`),y=(h,m,v,w,k)=>L({fontFamily:r,fontWeight:h,fontSize:g(m),lineHeight:v},r===$f?{letterSpacing:`${y5(w/m)}em`}:{},k,u),b={h1:y(i,96,1.167,-1.5),h2:y(i,60,1.2,-.5),h3:y(a,48,1.167,0),h4:y(a,34,1.235,.25),h5:y(a,24,1.334,0),h6:y(s,20,1.6,.15),subtitle1:y(a,16,1.75,.15),subtitle2:y(s,14,1.57,.1),body1:y(a,16,1.5,.15),body2:y(a,14,1.43,.15),button:y(s,14,1.75,.4,Pf),caption:y(a,12,1.66,.4),overline:y(a,12,2.66,1,Pf),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return Gt(L({htmlFontSize:c,pxToRem:g,fontFamily:r,fontSize:o,fontWeightLight:i,fontWeightRegular:a,fontWeightMedium:s,fontWeightBold:l},b),p,{clone:!1})}const w5=.2,b5=.14,k5=.12;function de(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${w5})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${b5})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${k5})`].join(",")}const S5=["none",de(0,2,1,-1,0,1,1,0,0,1,3,0),de(0,3,1,-2,0,2,2,0,0,1,5,0),de(0,3,3,-2,0,3,4,0,0,1,8,0),de(0,2,4,-1,0,4,5,0,0,1,10,0),de(0,3,5,-1,0,5,8,0,0,1,14,0),de(0,3,5,-1,0,6,10,0,0,1,18,0),de(0,4,5,-2,0,7,10,1,0,2,16,1),de(0,5,5,-3,0,8,10,1,0,3,14,2),de(0,5,6,-3,0,9,12,1,0,3,16,2),de(0,6,6,-3,0,10,14,1,0,4,18,3),de(0,6,7,-4,0,11,15,1,0,4,20,3),de(0,7,8,-4,0,12,17,2,0,5,22,4),de(0,7,8,-4,0,13,19,2,0,5,24,4),de(0,7,9,-4,0,14,21,2,0,5,26,4),de(0,8,9,-5,0,15,22,2,0,6,28,5),de(0,8,10,-5,0,16,24,2,0,6,30,5),de(0,8,11,-5,0,17,26,2,0,6,32,5),de(0,9,11,-5,0,18,28,2,0,7,34,6),de(0,9,12,-6,0,19,29,2,0,7,36,6),de(0,10,13,-6,0,20,31,3,0,8,38,7),de(0,10,13,-6,0,21,33,3,0,8,40,7),de(0,10,14,-6,0,22,35,3,0,8,42,7),de(0,11,14,-7,0,23,36,3,0,9,44,8),de(0,11,15,-7,0,24,38,3,0,9,46,8)],E5=["duration","easing","delay"],C5={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},_5={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Of(e){return`${Math.round(e)}ms`}function j5(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function T5(e){const t=L({},C5,e.easing),n=L({},_5,e.duration);return L({getAutoHeightDuration:j5,create:(o=["all"],i={})=>{const{duration:a=n.standard,easing:s=t.easeInOut,delay:l=0}=i;return Pe(i,E5),(Array.isArray(o)?o:[o]).map(c=>`${c} ${typeof a=="string"?a:Of(a)} ${s} ${typeof l=="string"?l:Of(l)}`).join(",")}},e,{easing:t,duration:n})}const P5={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},$5=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function O5(e={},...t){const{mixins:n={},palette:r={},transitions:o={},typography:i={}}=e,a=Pe(e,$5);if(e.vars)throw new Error(ei(18));const s=g5(r),l=dd(e);let c=Gt(l,{mixins:Bk(l.breakpoints,n),palette:s,shadows:S5.slice(),typography:x5(s,i),transitions:T5(o),zIndex:L({},P5)});return c=Gt(c,a),c=t.reduce((u,d)=>Gt(u,d),c),c.unstable_sxConfig=L({},hi,a==null?void 0:a.unstable_sxConfig),c.unstable_sx=function(d){return Hs({sx:d,theme:this})},c}const hd=O5(),gd="$$material";function R5(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const I5=e=>R5(e)&&e!=="classes",Yt=Ok({themeId:gd,defaultTheme:hd,rootShouldForwardProp:I5});function A5(e){return Object.keys(e).length===0}function z5(e=null){const t=T.useContext(zs);return!t||A5(t)?e:t}const L5=dd();function T0(e=L5){return z5(e)}function N5(e){const{theme:t,name:n,props:r}=e;return!t||!t.components||!t.components[n]||!t.components[n].defaultProps?r:Bg(t.components[n].defaultProps,r)}function M5({props:e,name:t,defaultTheme:n,themeId:r}){let o=T0(n);return r&&(o=o[r]||o),N5({theme:o,name:t,props:e})}function vd(){const e=T0(hd);return e[gd]||e}function sr({props:e,name:t}){return M5({props:e,name:t,defaultTheme:hd,themeId:gd})}function Hc(e,t){return Hc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},Hc(e,t)}function F5(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Hc(e,t)}const Rf={disabled:!1},P0=ie.createContext(null);var D5=function(t){return t.scrollTop},ko="unmounted",Fn="exited",Dn="entering",gr="entered",Uc="exiting",Qt=function(e){F5(t,e);function t(r,o){var i;i=e.call(this,r,o)||this;var a=o,s=a&&!a.isMounting?r.enter:r.appear,l;return i.appearStatus=null,r.in?s?(l=Fn,i.appearStatus=Dn):l=gr:r.unmountOnExit||r.mountOnEnter?l=ko:l=Fn,i.state={status:l},i.nextCallback=null,i}t.getDerivedStateFromProps=function(o,i){var a=o.in;return a&&i.status===ko?{status:Fn}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(o){var i=null;if(o!==this.props){var a=this.state.status;this.props.in?a!==Dn&&a!==gr&&(i=Dn):(a===Dn||a===gr)&&(i=Uc)}this.updateStatus(!1,i)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var o=this.props.timeout,i,a,s;return i=a=s=o,o!=null&&typeof o!="number"&&(i=o.exit,a=o.enter,s=o.appear!==void 0?o.appear:a),{exit:i,enter:a,appear:s}},n.updateStatus=function(o,i){if(o===void 0&&(o=!1),i!==null)if(this.cancelNextCallback(),i===Dn){if(this.props.unmountOnExit||this.props.mountOnEnter){var a=this.props.nodeRef?this.props.nodeRef.current:zi.findDOMNode(this);a&&D5(a)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Fn&&this.setState({status:ko})},n.performEnter=function(o){var i=this,a=this.props.enter,s=this.context?this.context.isMounting:o,l=this.props.nodeRef?[s]:[zi.findDOMNode(this),s],c=l[0],u=l[1],d=this.getTimeouts(),p=s?d.appear:d.enter;if(!o&&!a||Rf.disabled){this.safeSetState({status:gr},function(){i.props.onEntered(c)});return}this.props.onEnter(c,u),this.safeSetState({status:Dn},function(){i.props.onEntering(c,u),i.onTransitionEnd(p,function(){i.safeSetState({status:gr},function(){i.props.onEntered(c,u)})})})},n.performExit=function(){var o=this,i=this.props.exit,a=this.getTimeouts(),s=this.props.nodeRef?void 0:zi.findDOMNode(this);if(!i||Rf.disabled){this.safeSetState({status:Fn},function(){o.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:Uc},function(){o.props.onExiting(s),o.onTransitionEnd(a.exit,function(){o.safeSetState({status:Fn},function(){o.props.onExited(s)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(o,i){i=this.setNextCallback(i),this.setState(o,i)},n.setNextCallback=function(o){var i=this,a=!0;return this.nextCallback=function(s){a&&(a=!1,i.nextCallback=null,o(s))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},n.onTransitionEnd=function(o,i){this.setNextCallback(i);var a=this.props.nodeRef?this.props.nodeRef.current:zi.findDOMNode(this),s=o==null&&!this.props.addEndListener;if(!a||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],c=l[0],u=l[1];this.props.addEndListener(c,u)}o!=null&&setTimeout(this.nextCallback,o)},n.render=function(){var o=this.state.status;if(o===ko)return null;var i=this.props,a=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var s=Pe(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return ie.createElement(P0.Provider,{value:null},typeof a=="function"?a(o,s):ie.cloneElement(ie.Children.only(a),s))},t}(ie.Component);Qt.contextType=P0;Qt.propTypes={};function hr(){}Qt.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:hr,onEntering:hr,onEntered:hr,onExit:hr,onExiting:hr,onExited:hr};Qt.UNMOUNTED=ko;Qt.EXITED=Fn;Qt.ENTERING=Dn;Qt.ENTERED=gr;Qt.EXITING=Uc;const $0=e=>e.scrollTop;function Ua(e,t){var n,r;const{timeout:o,easing:i,style:a={}}=e;return{duration:(n=a.transitionDuration)!=null?n:typeof o=="number"?o:o[t.mode]||0,easing:(r=a.transitionTimingFunction)!=null?r:typeof i=="object"?i[t.mode]:i,delay:a.transitionDelay}}const V5=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Wc(e){return`scale(${e}, ${e**2})`}const H5={entering:{opacity:1,transform:Wc(1)},entered:{opacity:1,transform:"none"}},jl=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),O0=T.forwardRef(function(t,n){const{addEndListener:r,appear:o=!0,children:i,easing:a,in:s,onEnter:l,onEntered:c,onEntering:u,onExit:d,onExited:p,onExiting:f,style:g,timeout:y="auto",TransitionComponent:b=Qt}=t,h=Pe(t,V5),m=Wg(),v=T.useRef(),w=vd(),k=T.useRef(null),E=or(k,i.ref,n),S=V=>N=>{if(V){const G=k.current;N===void 0?V(G):V(G,N)}},j=S(u),z=S((V,N)=>{$0(V);const{duration:G,delay:A,easing:$}=Ua({style:g,timeout:y,easing:a},{mode:"enter"});let P;y==="auto"?(P=w.transitions.getAutoHeightDuration(V.clientHeight),v.current=P):P=G,V.style.transition=[w.transitions.create("opacity",{duration:P,delay:A}),w.transitions.create("transform",{duration:jl?P:P*.666,delay:A,easing:$})].join(","),l&&l(V,N)}),O=S(c),I=S(f),M=S(V=>{const{duration:N,delay:G,easing:A}=Ua({style:g,timeout:y,easing:a},{mode:"exit"});let $;y==="auto"?($=w.transitions.getAutoHeightDuration(V.clientHeight),v.current=$):$=N,V.style.transition=[w.transitions.create("opacity",{duration:$,delay:G}),w.transitions.create("transform",{duration:jl?$:$*.666,delay:jl?G:G||$*.333,easing:A})].join(","),V.style.opacity=0,V.style.transform=Wc(.75),d&&d(V)}),B=S(p),W=V=>{y==="auto"&&m.start(v.current||0,V),r&&r(k.current,V)};return x.jsx(b,L({appear:o,in:s,nodeRef:k,onEnter:z,onEntered:O,onEntering:j,onExit:M,onExited:B,onExiting:I,addEndListener:W,timeout:y==="auto"?null:y},h,{children:(V,N)=>T.cloneElement(i,L({style:L({opacity:0,transform:Wc(.75),visibility:V==="exited"&&!s?"hidden":void 0},H5[V],g,i.props.style),ref:E},N))}))});O0.muiSupportAuto=!0;const If=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)};function U5(e){return Ln("MuiPaper",e)}ar("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const W5=["className","component","elevation","square","variant"],B5=e=>{const{square:t,elevation:n,variant:r,classes:o}=e,i={root:["root",r,!t&&"rounded",r==="elevation"&&`elevation${n}`]};return ir(i,U5,o)},G5=Yt("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(({theme:e,ownerState:t})=>{var n;return L({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&L({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${Cf("#fff",If(t.elevation))}, ${Cf("#fff",If(t.elevation))})`},e.vars&&{backgroundImage:(n=e.vars.overlays)==null?void 0:n[t.elevation]}))}),K5=T.forwardRef(function(t,n){const r=sr({props:t,name:"MuiPaper"}),{className:o,component:i="div",elevation:a=1,square:s=!1,variant:l="elevation"}=r,c=Pe(r,W5),u=L({},r,{component:i,elevation:a,square:s,variant:l}),d=B5(u);return x.jsx(G5,L({as:i,ownerState:u,className:ln(d.root,o),ref:n},c))});function q5(e){return Ln("MuiSnackbarContent",e)}ar("MuiSnackbarContent",["root","message","action"]);const Y5=["action","className","message","role"],Q5=e=>{const{classes:t}=e;return ir({root:["root"],action:["action"],message:["message"]},q5,t)},J5=Yt(K5,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>{const t=e.palette.mode==="light"?.8:.98,n=Yk(e.palette.background.default,t);return L({},e.typography.body2,{color:e.vars?e.vars.palette.SnackbarContent.color:e.palette.getContrastText(n),backgroundColor:e.vars?e.vars.palette.SnackbarContent.bg:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,flexGrow:1,[e.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),X5=Yt("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0"}),Z5=Yt("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),e4=T.forwardRef(function(t,n){const r=sr({props:t,name:"MuiSnackbarContent"}),{action:o,className:i,message:a,role:s="alert"}=r,l=Pe(r,Y5),c=r,u=Q5(c);return x.jsxs(J5,L({role:s,square:!0,elevation:6,className:ln(u.root,i),ownerState:c,ref:n},l,{children:[x.jsx(X5,{className:u.message,ownerState:c,children:a}),o?x.jsx(Z5,{className:u.action,ownerState:c,children:o}):null]}))});function t4(e){return Ln("MuiSnackbar",e)}ar("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const n4=["onEnter","onExited"],r4=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],o4=e=>{const{classes:t,anchorOrigin:n}=e,r={root:["root",`anchorOrigin${qt(n.vertical)}${qt(n.horizontal)}`]};return ir(r,t4,t)},Af=Yt("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`anchorOrigin${qt(n.anchorOrigin.vertical)}${qt(n.anchorOrigin.horizontal)}`]]}})(({theme:e,ownerState:t})=>{const n={left:"50%",right:"auto",transform:"translateX(-50%)"};return L({zIndex:(e.vars||e).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},t.anchorOrigin.vertical==="top"?{top:8}:{bottom:8},t.anchorOrigin.horizontal==="left"&&{justifyContent:"flex-start"},t.anchorOrigin.horizontal==="right"&&{justifyContent:"flex-end"},{[e.breakpoints.up("sm")]:L({},t.anchorOrigin.vertical==="top"?{top:24}:{bottom:24},t.anchorOrigin.horizontal==="center"&&n,t.anchorOrigin.horizontal==="left"&&{left:24,right:"auto"},t.anchorOrigin.horizontal==="right"&&{right:24,left:"auto"})})}),i4=T.forwardRef(function(t,n){const r=sr({props:t,name:"MuiSnackbar"}),o=vd(),i={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{action:a,anchorOrigin:{vertical:s,horizontal:l}={vertical:"bottom",horizontal:"left"},autoHideDuration:c=null,children:u,className:d,ClickAwayListenerProps:p,ContentProps:f,disableWindowBlurListener:g=!1,message:y,open:b,TransitionComponent:h=O0,transitionDuration:m=i,TransitionProps:{onEnter:v,onExited:w}={}}=r,k=Pe(r.TransitionProps,n4),E=Pe(r,r4),S=L({},r,{anchorOrigin:{vertical:s,horizontal:l},autoHideDuration:c,disableWindowBlurListener:g,TransitionComponent:h,transitionDuration:m}),j=o4(S),{getRootProps:z,onClickAway:O}=E2(L({},S)),[I,M]=T.useState(!0),B=Lc({elementType:Af,getSlotProps:z,externalForwardedProps:E,ownerState:S,additionalProps:{ref:n},className:[j.root,d]}),W=N=>{M(!0),w&&w(N)},V=(N,G)=>{M(!1),v&&v(N,G)};return!b&&I?null:x.jsx(S2,L({onClickAway:O},p,{children:x.jsx(Af,L({},B,{children:x.jsx(h,L({appear:!0,in:b,timeout:m,direction:s==="top"?"down":"up",onEnter:V,onExited:W},k,{children:u||x.jsx(e4,L({message:y,action:a},f))}))}))}))}),a4=C.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`,s4=C.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`,l4=C.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({theme:e})=>e.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,c4=C.div`
  font-size: 15px;
  margin-bottom: 30px;
  text-align: center;
  font-weight: 300;
  color: ${({theme:e})=>e.sub_text+95};
  max-width: 900px;
  line-height: 30px;

  @media (max-width: 960px) {
    text-align: center;
    width: 85%;
  }

  @media (max-width: 640px) {
    font-size: 15px;
    width: 85%;
  }
`,u4=C.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`,d4=C.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({theme:e})=>e.text_primary};
`,Tl=C.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({theme:e})=>e.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({theme:e})=>e.text_primary};
  border-radius: 12px;
  padding: 12px 16px;

  &:focus {
    border: 1px solid ${({theme:e})=>e.primary};
  }
`,p4=C.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({theme:e})=>e.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({theme:e})=>e.text_primary};
  border-radius: 12px;
  padding: 12px 16px;

  &:focus {
    border: 1px solid ${({theme:e})=>e.primary};
  }
`,f4=C.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  transition: all 0.2s ease-in-out !important;
  background: hsla(148, 100%, 50%, 0.84);
  background: linear-gradient(
    225deg,
    hsl(153, 100%, 50%) 0%,
    hsl(98, 100%, 50%) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsl(155, 100%, 50%) 0%,
    hsl(146, 100%, 50%) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsl(87, 100%, 50%) 0%,
    hsl(116, 100%, 50%) 100%
  );
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: black;
  font-size: 18px;
  font-weight: 600;

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: #1f2634 20px 20px 60px 0px;
    filter: brightness(1);
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
`,m4=()=>{const[e,t]=ie.useState(!1),n=T.useRef(null),{selectedLanguage:r}=zt(),o=At[r],i=a=>{a.preventDefault(),t(!0)};return x.jsx(a4,{id:"contact",children:x.jsxs(s4,{children:[x.jsx(l4,{children:o==null?void 0:o.contact.title}),x.jsx(c4,{children:o==null?void 0:o.contact.desc}),x.jsxs(u4,{ref:n,onSubmit:i,children:[x.jsx(d4,{children:o==null?void 0:o.contact.emailtile}),x.jsx(Tl,{placeholder:o==null?void 0:o.contact.emailyourtile,name:"from_email"}),x.jsx(Tl,{placeholder:o==null?void 0:o.contact.emailyourname,name:"from_name"}),x.jsx(Tl,{placeholder:o==null?void 0:o.contact.subject,name:"subject"}),x.jsx(p4,{placeholder:o==null?void 0:o.contact.message,rows:4,name:"message"}),x.jsx(f4,{type:"submit",value:o==null?void 0:o.contact.submit})]}),x.jsx(i4,{open:e,autoHideDuration:6e3,onClose:()=>t(!1),message:o==null?void 0:o.contact.submitsuccess})]})})};function h4(e){return Lt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18.655 10.405a.75.75 0 0 1-1.06 0l-4.97-4.97v14.44a.75.75 0 0 1-1.5 0V5.435l-4.97 4.97a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l6.25-6.25a.75.75 0 0 1 1.06 0l6.25 6.25a.75.75 0 0 1 0 1.06Z"},child:[]}]})(e)}const g4=C.div`
  display: flex;
  justify-content: flex-start;
  margin: 5px 10px;
`,v4=C.p`
  font-size: 0.9rem;
  margin: 15px;
  padding: 5px;
  color: ${({$isdarkmode:e})=>e?"#000":"#fff"};
  text-align: right;

  &:hover {
    border: 1.8px solid ${({theme:e})=>e.primary};
    color: ${({theme:e})=>e.primary};
  }

  &.active {
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
`,go=C.a`
  justify-content: center;
  display: flex;
  align-items: center;
  margin: 0 4px;
  cursor: pointer;
  border-radius: 2px;
  background: none;
  color: ${({$isdarkmode:e})=>e?"#000":"#fff"};
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

  &.active {
    border-bottom: 2px solid ${({theme:e})=>e.primary};
  }

  @media (max-width: 960px) {
    margin: 0 0px;
  }

  @media (max-width: 640px) {
    margin: 0 0px;
  }
`,y4=C.div`
  background-color: ${({theme:e})=>e.card_footer};
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media (max-width: 960px) {
    trastion: 0.8s all ease;
    padding: 20px;
    height: 100%;
  }

  @media (max-width: 640px) {
    trastion: 0.8s all ease;
    padding: 20px;
    height: 100%;
  }
`,x4=C.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  z-index: 1;
`,w4=C.div`
  margin-left: 5px;
`,b4=kx`
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
`,k4=C.div`
  position: fixed;
  right: 16px;
  bottom: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  margin: 2px 8px;
  border-radius: 4px;
  padding: 10px;
  background-color: ${({$isdarkmode:e})=>e?"#fff":"#000"};
  color: ${({$isdarkmode:e})=>e?"#000":"#fff"};
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
  border: 1.8px solid ${({$isdarkmode:e})=>e?"#000":"#fff"};
  z-index: 1000;
  opacity: ${({$showButton:e})=>e?1:0};
  visibility: ${({$showButton:e})=>e?"visible":"hidden"};

  &.upButtonAnimation {
    animation: ${b4} 1.1s ease-in both;
  }

  &:hover {
    background: ${({theme:e})=>e.primary};
    color: ${({theme:e})=>e.white};
    height: 45px;
    width: 45px;
  }

  @media screen and (max-width: 768px) {
    padding: 10px 16px;
    background-color: ${({$isdarkmode:e})=>e?"#fff":"#000"};
    color: ${({$isdarkmode:e})=>e?"#000":"#fff"};
    &:hover {
      background: ${({theme:e})=>e.primary};
      color: ${({theme:e})=>e.white};
    }
    width: max-content;
    font-size: 14px;
    right: 16px;
    bottom: 120px;
  }
`;function S4(){const{selectedLanguage:e}=zt(),t=At[e],{isDarkMode:n}=zn(),[r,o]=T.useState(!1),i=()=>{window.scrollTo({top:0,behavior:"smooth"})};return T.useEffect(()=>{const a=()=>{document.documentElement.scrollTop+window.innerHeight>=document.documentElement.scrollHeight-100?o(!0):o(!1)};return window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}},[]),x.jsxs(x.Fragment,{children:[x.jsx(k4,{onClick:i,$isdarkmode:n,$showButton:r,className:r?"upButtonAnimation":"",children:x.jsx(h4,{})}),x.jsx(y4,{children:x.jsxs(x4,{children:[x.jsxs(g4,{children:[x.jsx(go,{$isdarkmode:n,href:t==null?void 0:t.facebook,target:"display",children:x.jsx(Yx,{})}),x.jsx(go,{$isdarkmode:n,href:t==null?void 0:t.twitter,target:"display",children:x.jsx(Zx,{})}),x.jsx(go,{$isdarkmode:n,href:t==null?void 0:t.linkedin,target:"display",children:x.jsx(Yu,{})}),x.jsx(go,{$isdarkmode:n,href:t==null?void 0:t.insta,target:"display",children:x.jsx(Xx,{})}),x.jsxs(go,{$isdarkmode:n,href:t==null?void 0:t.ResumeLink,target:"display",children:[x.jsx(Rg,{}),x.jsx(w4,{children:t==null?void 0:t.ResumeTitle})]})]}),x.jsx(v4,{$isdarkmode:n,children:"© 2023 by Kauan Vidigal"})]})})]})}function E4(e){return Ln("MuiTypography",e)}ar("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const C4=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],_4=e=>{const{align:t,gutterBottom:n,noWrap:r,paragraph:o,variant:i,classes:a}=e,s={root:["root",i,e.align!=="inherit"&&`align${qt(t)}`,n&&"gutterBottom",r&&"noWrap",o&&"paragraph"]};return ir(s,E4,a)},j4=Yt("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],n.align!=="inherit"&&t[`align${qt(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>L({margin:0},t.variant==="inherit"&&{font:"inherit"},t.variant!=="inherit"&&e.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),zf={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},T4={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},P4=e=>T4[e]||e,$4=T.forwardRef(function(t,n){const r=sr({props:t,name:"MuiTypography"}),o=P4(r.color),i=w0(L({},r,{color:o})),{align:a="inherit",className:s,component:l,gutterBottom:c=!1,noWrap:u=!1,paragraph:d=!1,variant:p="body1",variantMapping:f=zf}=i,g=Pe(i,C4),y=L({},i,{align:a,color:o,className:s,component:l,gutterBottom:c,noWrap:u,paragraph:d,variant:p,variantMapping:f}),b=l||(d?"p":f[p]||zf[p])||"span",h=_4(y);return x.jsx(j4,L({as:b,ref:n,ownerState:y,className:ln(h.root,s)},g))}),O4=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function R4(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function I4(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=r=>e.ownerDocument.querySelector(`input[type="radio"]${r}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function A4(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||I4(e))}function z4(e){const t=[],n=[];return Array.from(e.querySelectorAll(O4)).forEach((r,o)=>{const i=R4(r);i===-1||!A4(r)||(i===0?t.push(r):n.push({documentOrder:o,tabIndex:i,node:r}))}),n.sort((r,o)=>r.tabIndex===o.tabIndex?r.documentOrder-o.documentOrder:r.tabIndex-o.tabIndex).map(r=>r.node).concat(t)}function L4(){return!0}function N4(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:r=!1,disableRestoreFocus:o=!1,getTabbable:i=z4,isEnabled:a=L4,open:s}=e,l=T.useRef(!1),c=T.useRef(null),u=T.useRef(null),d=T.useRef(null),p=T.useRef(null),f=T.useRef(!1),g=T.useRef(null),y=or(t.ref,g),b=T.useRef(null);T.useEffect(()=>{!s||!g.current||(f.current=!n)},[n,s]),T.useEffect(()=>{if(!s||!g.current)return;const v=Rt(g.current);return g.current.contains(v.activeElement)||(g.current.hasAttribute("tabIndex")||g.current.setAttribute("tabIndex","-1"),f.current&&g.current.focus()),()=>{o||(d.current&&d.current.focus&&(l.current=!0,d.current.focus()),d.current=null)}},[s]),T.useEffect(()=>{if(!s||!g.current)return;const v=Rt(g.current),w=S=>{b.current=S,!(r||!a()||S.key!=="Tab")&&v.activeElement===g.current&&S.shiftKey&&(l.current=!0,u.current&&u.current.focus())},k=()=>{const S=g.current;if(S===null)return;if(!v.hasFocus()||!a()||l.current){l.current=!1;return}if(S.contains(v.activeElement)||r&&v.activeElement!==c.current&&v.activeElement!==u.current)return;if(v.activeElement!==p.current)p.current=null;else if(p.current!==null)return;if(!f.current)return;let j=[];if((v.activeElement===c.current||v.activeElement===u.current)&&(j=i(g.current)),j.length>0){var z,O;const I=!!((z=b.current)!=null&&z.shiftKey&&((O=b.current)==null?void 0:O.key)==="Tab"),M=j[0],B=j[j.length-1];typeof M!="string"&&typeof B!="string"&&(I?B.focus():M.focus())}else S.focus()};v.addEventListener("focusin",k),v.addEventListener("keydown",w,!0);const E=setInterval(()=>{v.activeElement&&v.activeElement.tagName==="BODY"&&k()},50);return()=>{clearInterval(E),v.removeEventListener("focusin",k),v.removeEventListener("keydown",w,!0)}},[n,r,o,a,s,i]);const h=v=>{d.current===null&&(d.current=v.relatedTarget),f.current=!0,p.current=v.target;const w=t.props.onFocus;w&&w(v)},m=v=>{d.current===null&&(d.current=v.relatedTarget),f.current=!0};return x.jsxs(T.Fragment,{children:[x.jsx("div",{tabIndex:s?0:-1,onFocus:m,ref:c,"data-testid":"sentinelStart"}),T.cloneElement(t,{ref:y,onFocus:h}),x.jsx("div",{tabIndex:s?0:-1,onFocus:m,ref:u,"data-testid":"sentinelEnd"})]})}function M4(e){return typeof e=="function"?e():e}const F4=T.forwardRef(function(t,n){const{children:r,container:o,disablePortal:i=!1}=t,[a,s]=T.useState(null),l=or(T.isValidElement(r)?r.ref:null,n);if(zc(()=>{i||s(M4(o)||document.body)},[o,i]),zc(()=>{if(a&&!i)return Ac(n,a),()=>{Ac(n,null)}},[n,a,i]),i){if(T.isValidElement(r)){const c={ref:l};return T.cloneElement(r,c)}return x.jsx(T.Fragment,{children:r})}return x.jsx(T.Fragment,{children:a&&Du.createPortal(r,a)})});function D4(e){const t=Rt(e);return t.body===e?Xu(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function Ao(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Lf(e){return parseInt(Xu(e).getComputedStyle(e).paddingRight,10)||0}function V4(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,r=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||r}function Nf(e,t,n,r,o){const i=[t,n,...r];[].forEach.call(e.children,a=>{const s=i.indexOf(a)===-1,l=!V4(a);s&&l&&Ao(a,o)})}function Pl(e,t){let n=-1;return e.some((r,o)=>t(r)?(n=o,!0):!1),n}function H4(e,t){const n=[],r=e.container;if(!t.disableScrollLock){if(D4(r)){const a=m2(Rt(r));n.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${Lf(r)+a}px`;const s=Rt(r).querySelectorAll(".mui-fixed");[].forEach.call(s,l=>{n.push({value:l.style.paddingRight,property:"padding-right",el:l}),l.style.paddingRight=`${Lf(l)+a}px`})}let i;if(r.parentNode instanceof DocumentFragment)i=Rt(r).body;else{const a=r.parentElement,s=Xu(r);i=(a==null?void 0:a.nodeName)==="HTML"&&s.getComputedStyle(a).overflowY==="scroll"?a:r}n.push({value:i.style.overflow,property:"overflow",el:i},{value:i.style.overflowX,property:"overflow-x",el:i},{value:i.style.overflowY,property:"overflow-y",el:i}),i.style.overflow="hidden"}return()=>{n.forEach(({value:i,el:a,property:s})=>{i?a.style.setProperty(s,i):a.style.removeProperty(s)})}}function U4(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class W4{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,n){let r=this.modals.indexOf(t);if(r!==-1)return r;r=this.modals.length,this.modals.push(t),t.modalRef&&Ao(t.modalRef,!1);const o=U4(n);Nf(n,t.mount,t.modalRef,o,!0);const i=Pl(this.containers,a=>a.container===n);return i!==-1?(this.containers[i].modals.push(t),r):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:o}),r)}mount(t,n){const r=Pl(this.containers,i=>i.modals.indexOf(t)!==-1),o=this.containers[r];o.restore||(o.restore=H4(o,n))}remove(t,n=!0){const r=this.modals.indexOf(t);if(r===-1)return r;const o=Pl(this.containers,a=>a.modals.indexOf(t)!==-1),i=this.containers[o];if(i.modals.splice(i.modals.indexOf(t),1),this.modals.splice(r,1),i.modals.length===0)i.restore&&i.restore(),t.modalRef&&Ao(t.modalRef,n),Nf(i.container,t.mount,t.modalRef,i.hiddenSiblings,!1),this.containers.splice(o,1);else{const a=i.modals[i.modals.length-1];a.modalRef&&Ao(a.modalRef,!1)}return r}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function B4(e){return typeof e=="function"?e():e}function G4(e){return e?e.props.hasOwnProperty("in"):!1}const K4=new W4;function q4(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:r=!1,manager:o=K4,closeAfterTransition:i=!1,onTransitionEnter:a,onTransitionExited:s,children:l,onClose:c,open:u,rootRef:d}=e,p=T.useRef({}),f=T.useRef(null),g=T.useRef(null),y=or(g,d),[b,h]=T.useState(!u),m=G4(l);let v=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(v=!1);const w=()=>Rt(f.current),k=()=>(p.current.modalRef=g.current,p.current.mount=f.current,p.current),E=()=>{o.mount(k(),{disableScrollLock:r}),g.current&&(g.current.scrollTop=0)},S=ti(()=>{const N=B4(t)||w().body;o.add(k(),N),g.current&&E()}),j=T.useCallback(()=>o.isTopModal(k()),[o]),z=ti(N=>{f.current=N,N&&(u&&j()?E():g.current&&Ao(g.current,v))}),O=T.useCallback(()=>{o.remove(k(),v)},[v,o]);T.useEffect(()=>()=>{O()},[O]),T.useEffect(()=>{u?S():(!m||!i)&&O()},[u,O,m,i,S]);const I=N=>G=>{var A;(A=N.onKeyDown)==null||A.call(N,G),!(G.key!=="Escape"||G.which===229||!j())&&(n||(G.stopPropagation(),c&&c(G,"escapeKeyDown")))},M=N=>G=>{var A;(A=N.onClick)==null||A.call(N,G),G.target===G.currentTarget&&c&&c(G,"backdropClick")};return{getRootProps:(N={})=>{const G=Fa(e);delete G.onTransitionEnter,delete G.onTransitionExited;const A=L({},G,N);return L({role:"presentation"},A,{onKeyDown:I(A),ref:y})},getBackdropProps:(N={})=>{const G=N;return L({"aria-hidden":!0},G,{onClick:M(G),open:u})},getTransitionProps:()=>{const N=()=>{h(!1),a&&a()},G=()=>{h(!0),s&&s(),i&&O()};return{onEnter:af(N,l==null?void 0:l.props.onEnter),onExited:af(G,l==null?void 0:l.props.onExited)}},rootRef:y,portalRef:z,isTopModal:j,exited:b,hasTransition:m}}const Y4=T.createContext({});function R0(e){return e==="alternate-reverse"?"positionAlternateReverse":`position${qt(e)}`}function Q4(e){return Ln("MuiTimelineContent",e)}ar("MuiTimelineContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]);const J4=["className"],X4=e=>{const{position:t,classes:n}=e,r={root:["root",R0(t)]};return ir(r,Q4,n)},Z4=Yt($4,{name:"MuiTimelineContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[R0(n.position)]]}})(({ownerState:e})=>L({flex:1,padding:"6px 16px",textAlign:"left"},e.position==="left"&&{textAlign:"right"})),I0=T.forwardRef(function(t,n){const r=sr({props:t,name:"MuiTimelineContent"}),{className:o}=r,i=Pe(r,J4),{position:a}=T.useContext(Y4),s=L({},r,{position:a||"right"}),l=X4(s);return x.jsx(Z4,L({component:"div",className:ln(l.root,o),ownerState:s,ref:n},i))}),A0=C.img`
  display: none;
  height: 70px;
  width: fit-content;
  background-color: #000;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`,e3=C.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({theme:e})=>e.text_secondary};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`,z0=C.span`
  overflow: hidden;
  display: -webkit-box;
  text-align: left;
  line-height: 20px;
  font-weight: 400;
  color: ${({theme:e})=>e.sub_text+95};
  max-width: 100%;
  margin-bottom: 10px;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`,t3=C.div`
  width: 650px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  @media only screen and (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 300px;
  }

  &:hover ${A0} {
    display: flex;
  }

  &:hover ${z0} {
    overflow: visible;
    -webkit-line-clamp: unset;
  }

  border: 0.1px solid ${({theme:e})=>e.primary};
`,n3=C.div`
  width: 100%;
  display: flex;
  gap: 12px;
`,r3=C.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`,o3=C.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`,Mf=C.b`
  color: ${({theme:e})=>e.text_primary};
`,i3=C.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({theme:e})=>e.text_primary};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`,a3=C.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.text_secondary+99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`,s3=C.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({theme:e})=>e.text_secondary+80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`,l3=C.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0px;
  @media only screen and (max-width: 600px) {
    margin: 4px 0px;
  }
`,c3=C.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({theme:e})=>e.primary};
  padding: 5px;
  border-radius: 8px;
  background-color: ${({theme:e})=>e.primary+20};
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`,Ff=C.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: -10px;
`,Df=C.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,u3=C.div`
  font-size: 14px;
  font-weight: 300;
  color: ${({theme:e})=>e.text_secondary};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`,d3=({experience:e})=>{const t=n=>{n.currentTarget.style.display="none"};return x.jsx(x.Fragment,{children:e.info.map(n=>x.jsxs(t3,{children:[x.jsxs(n3,{children:[x.jsx(r3,{src:n.img,alt:"Experience Image",onError:t}),x.jsxs(o3,{children:[x.jsx(i3,{children:n.role}),x.jsx(a3,{children:n.company}),x.jsx(s3,{children:n.date})]})]}),x.jsxs(e3,{children:[e.desc&&x.jsx(z0,{children:e.desc}),n.skillsFreeLancerTitle.length>1&&x.jsxs(Mf,{children:[x.jsx("br",{}),n.skillsFreeLancerTitle]}),x.jsx("br",{}),x.jsx("br",{}),x.jsx(Ff,{children:x.jsx(Df,{children:n.skillsFreeLancerTitle.length>1&&n.skillsFreeLancer.map((r,o)=>x.jsx(l3,{children:x.jsx(c3,{children:r})},o))})}),n.skills&&x.jsxs(x.Fragment,{children:[x.jsx("br",{}),x.jsxs(Ff,{children:[x.jsx(Mf,{children:n.skillsTitle}),x.jsx(Df,{children:n.skills.map((r,o)=>x.jsxs(u3,{children:["• ",r]},o))})]})]})]}),n.doc&&x.jsx("a",{href:n.doc,target:"_blank",rel:"noopener noreferrer",children:x.jsx(A0,{src:n.doc,alt:"Document"})})]},n.id))})},p3=C.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`,f3=C.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`,m3=C.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({theme:e})=>e.sub_text};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,h3=C.div`
  font-size: 15px;
  margin-bottom: 30px;
  text-align: center;
  font-weight: 300;
  color: ${({theme:e})=>e.sub_text+95};
  max-width: 900px;
  line-height: 30px;

  @media (max-width: 960px) {
    text-align: center;
    width: 85%;
  }

  @media (max-width: 640px) {
    font-size: 15px;
    width: 85%;
  }
`,g3=()=>{var r,o,i;const{selectedLanguage:e}=zt(),t=At[e],n=((r=t==null?void 0:t.experiences)==null?void 0:r.info.map(a=>{var s,l;return{title:((s=t==null?void 0:t.experiences)==null?void 0:s.title)||"",desc:((l=t==null?void 0:t.experiences)==null?void 0:l.desc)||"",info:[{id:a.id||"",img:a.img||"",role:a.role||"",company:a.company||"",date:a.date||"",desc:a.desc||"",skillsFreeLancerTitle:a.skillsFreeLancerTitle||"",skillsFreeLancer:a.skillsFreeLancer||[],skillsTitle:a.skillsTitle||"",skills:a.skills||[],doc:a.doc||""}]}}))||[];return x.jsx(p3,{id:"experience",children:x.jsxs(f3,{children:[x.jsx(m3,{children:(o=t==null?void 0:t.experiences)==null?void 0:o.title}),x.jsx(h3,{children:(i=t==null?void 0:t.experiences)==null?void 0:i.desc}),n==null?void 0:n.map((a,s)=>x.jsx(I0,{sx:{py:"12px",px:2},children:x.jsx(d3,{experience:a})},s))]})})};function v3(e){return Lt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"},child:[]}]})(e)}const y3=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],x3={entering:{opacity:1},entered:{opacity:1}},w3=T.forwardRef(function(t,n){const r=vd(),o={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:i,appear:a=!0,children:s,easing:l,in:c,onEnter:u,onEntered:d,onEntering:p,onExit:f,onExited:g,onExiting:y,style:b,timeout:h=o,TransitionComponent:m=Qt}=t,v=Pe(t,y3),w=T.useRef(null),k=or(w,s.ref,n),E=W=>V=>{if(W){const N=w.current;V===void 0?W(N):W(N,V)}},S=E(p),j=E((W,V)=>{$0(W);const N=Ua({style:b,timeout:h,easing:l},{mode:"enter"});W.style.webkitTransition=r.transitions.create("opacity",N),W.style.transition=r.transitions.create("opacity",N),u&&u(W,V)}),z=E(d),O=E(y),I=E(W=>{const V=Ua({style:b,timeout:h,easing:l},{mode:"exit"});W.style.webkitTransition=r.transitions.create("opacity",V),W.style.transition=r.transitions.create("opacity",V),f&&f(W)}),M=E(g),B=W=>{i&&i(w.current,W)};return x.jsx(m,L({appear:a,in:c,nodeRef:w,onEnter:j,onEntered:z,onEntering:S,onExit:I,onExited:M,onExiting:O,addEndListener:B,timeout:h},v,{children:(W,V)=>T.cloneElement(s,L({style:L({opacity:0,visibility:W==="exited"&&!c?"hidden":void 0},x3[W],b,s.props.style),ref:k},V))}))});function b3(e){return Ln("MuiBackdrop",e)}ar("MuiBackdrop",["root","invisible"]);const k3=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],S3=e=>{const{classes:t,invisible:n}=e;return ir({root:["root",n&&"invisible"]},b3,t)},E3=Yt("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>L({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),C3=T.forwardRef(function(t,n){var r,o,i;const a=sr({props:t,name:"MuiBackdrop"}),{children:s,className:l,component:c="div",components:u={},componentsProps:d={},invisible:p=!1,open:f,slotProps:g={},slots:y={},TransitionComponent:b=w3,transitionDuration:h}=a,m=Pe(a,k3),v=L({},a,{component:c,invisible:p}),w=S3(v),k=(r=g.root)!=null?r:d.root;return x.jsx(b,L({in:f,timeout:h},m,{children:x.jsx(E3,L({"aria-hidden":!0},k,{as:(o=(i=y.root)!=null?i:u.Root)!=null?o:c,className:ln(w.root,l,k==null?void 0:k.className),ownerState:L({},v,k==null?void 0:k.ownerState),classes:w,ref:n,children:s}))}))});function _3(e){return Ln("MuiModal",e)}ar("MuiModal",["root","hidden","backdrop"]);const j3=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],T3=e=>{const{open:t,exited:n,classes:r}=e;return ir({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},_3,r)},P3=Yt("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>L({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),$3=Yt(C3,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),O3=T.forwardRef(function(t,n){var r,o,i,a,s,l;const c=sr({name:"MuiModal",props:t}),{BackdropComponent:u=$3,BackdropProps:d,className:p,closeAfterTransition:f=!1,children:g,container:y,component:b,components:h={},componentsProps:m={},disableAutoFocus:v=!1,disableEnforceFocus:w=!1,disableEscapeKeyDown:k=!1,disablePortal:E=!1,disableRestoreFocus:S=!1,disableScrollLock:j=!1,hideBackdrop:z=!1,keepMounted:O=!1,onBackdropClick:I,open:M,slotProps:B,slots:W}=c,V=Pe(c,j3),N=L({},c,{closeAfterTransition:f,disableAutoFocus:v,disableEnforceFocus:w,disableEscapeKeyDown:k,disablePortal:E,disableRestoreFocus:S,disableScrollLock:j,hideBackdrop:z,keepMounted:O}),{getRootProps:G,getBackdropProps:A,getTransitionProps:$,portalRef:P,isTopModal:H,exited:D,hasTransition:xe}=q4(L({},N,{rootRef:n})),_=L({},N,{exited:D}),$e=T3(_),F={};if(g.props.tabIndex===void 0&&(F.tabIndex="-1"),xe){const{onEnter:pt,onExited:Nt}=$();F.onEnter=pt,F.onExited=Nt}const q=(r=(o=W==null?void 0:W.root)!=null?o:h.Root)!=null?r:P3,se=(i=(a=W==null?void 0:W.backdrop)!=null?a:h.Backdrop)!=null?i:u,oe=(s=B==null?void 0:B.root)!=null?s:m.root,J=(l=B==null?void 0:B.backdrop)!=null?l:m.backdrop,_e=Lc({elementType:q,externalSlotProps:oe,externalForwardedProps:V,getSlotProps:G,additionalProps:{ref:n,as:b},ownerState:_,className:ln(p,oe==null?void 0:oe.className,$e==null?void 0:$e.root,!_.open&&_.exited&&($e==null?void 0:$e.hidden))}),Le=Lc({elementType:se,externalSlotProps:J,additionalProps:d,getSlotProps:pt=>A(L({},pt,{onClick:Nt=>{I&&I(Nt),pt!=null&&pt.onClick&&pt.onClick(Nt)}})),className:ln(J==null?void 0:J.className,d==null?void 0:d.className,$e==null?void 0:$e.backdrop),ownerState:_});return!O&&!M&&(!xe||D)?null:x.jsx(F4,{ref:P,container:y,disablePortal:E,children:x.jsxs(q,L({},_e,{children:[!z&&u?x.jsx(se,L({},Le)):null,x.jsx(N4,{disableEnforceFocus:w,disableAutoFocus:v,disableRestoreFocus:S,isEnabled:H,open:M,children:T.cloneElement(g,F)})]}))})}),R3=C.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  transition: all 0.5s ease;
`,I3=C.div`
  max-width: 800px;
  width: 100%;
  border-radius: 16px;
  margin: 50px 12px;
  height: min-content;
  background-color: ${({theme:e})=>e.card};
  color: ${({theme:e})=>e.text_primary};
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`,A3=C.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({$isdarkmode:e})=>e?"#fff":"#000"};
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    margin: 6px 6px 0px 6px;
  }
`,z3=C.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({$isdarkmode:e})=>e?"#fff":"#000"};
  margin: 8px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
    margin: 6px 6px;
  }
`,L3=C.div`
  font-size: 16px;
  margin: 2px 6px;
  font-weight: 400;
  color: ${({theme:e})=>e.text_secondary};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`,N3=C.img`
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
  margin-top: 30px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
`,M3=C.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({theme:e})=>e.text_primary};
  margin: 8px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    margin: 8px 6px;
  }
`,F3=C.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0px;
  @media only screen and (max-width: 600px) {
    margin: 4px 0px;
  }
`,D3=C.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({theme:e})=>e.primary};
  margin: 4px;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({theme:e})=>e.primary+20};
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`,V3=C.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-wrap: wrap;
  margin: 12px 6px;
  @media only screen and (max-width: 600px) {
    margin: 4px 6px;
  }
`,H3=C.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,U3=C.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 4px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  @media only screen and (max-width: 600px) {
    width: 32px;
    height: 32px;
  }
`,W3=C.div`
  font-size: 16px;
  font-weight: 500;
  width: 200px;
  color: ${({theme:e})=>e.text_primary};
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`,B3=C.div`
  display: flex;
  justify-content: flex-end;
  margin: 12px 0px;
  gap: 12px;
`,Vf=C.a`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: ${({$isdarkmode:e})=>e?"#fff":"#000"};
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${({theme:e})=>e.primary};
  ${({dull:e,theme:t})=>e&&`
        background-color: ${t.bgLight};
        color: ${t.text_secondary};
        &:hover {
            background-color: ${t.bg+99};
        }
    `}
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;

  &:hover {
    background-color: ${({theme:e})=>e.primary+99};
  }

  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`,G3=({openModal:e,setOpenModal:t})=>{var g,y,b,h,m,v;const{isDarkMode:n}=zn(),r=(y=(g=e==null?void 0:e.project)==null?void 0:g.projects)==null?void 0:y.info[0],o=(h=(b=e==null?void 0:e.project)==null?void 0:b.projects)==null?void 0:h.buttonGitHubTitle,i=(v=(m=e==null?void 0:e.project)==null?void 0:m.projects)==null?void 0:v.buttonWebappTitle;if(!r)return null;const{image:a,title:s,date:l,tags:c=[],description:u,github:d,webapp:p,member:f}=r;return x.jsx(O3,{open:e.state,onClose:()=>t({state:!1,project:null}),children:x.jsx(R3,{children:x.jsxs(I3,{children:[x.jsx(v3,{style:{position:"absolute",top:"10px",right:"20px",cursor:"pointer",width:"35px",height:"35px",color:n?"white":"black"},onClick:()=>t({state:!1,project:null})}),x.jsx(N3,{src:a}),x.jsx(A3,{$isdarkmode:n,children:s}),x.jsx(L3,{children:l}),x.jsx(F3,{children:c.map((w,k)=>x.jsx(D3,{children:w},k))}),x.jsx(z3,{$isdarkmode:n,children:u}),f&&f.length>0&&x.jsxs(x.Fragment,{children:[x.jsx(M3,{children:"Members"}),x.jsx(V3,{children:f.map((w,k)=>x.jsxs(H3,{children:[x.jsx(U3,{src:w.img}),x.jsx(W3,{children:w.name}),x.jsx("a",{href:w.github,target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:"inherit"},children:x.jsx(Jx,{})}),x.jsx("a",{href:w.linkedin,target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:"inherit"},children:x.jsx(Yu,{})})]},k))})]}),x.jsxs(B3,{children:[x.jsx(Vf,{$isdarkmode:n,dull:!0,href:d,target:"_blank",rel:"noreferrer",children:o}),x.jsx(Vf,{$isdarkmode:n,href:p,target:"_blank",rel:"noreferrer",children:i})]})]})})})},K3=C.button`
  display: none;
  width: 100%;
  padding: 10px;
  background-color: ${({theme:e})=>e.white};
  color: ${({theme:e})=>e.text_black};
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.8s ease-in-out;
`,q3=C.div`
  width: 330px;
  height: 490px;
  background-color: ${({theme:e})=>e.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
  &:hover ${K3} {
    display: block;
  }
`,Y3=C.img`
  width: 100%;
  height: 180px;
  background-color: ${({theme:e})=>e.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`,Q3=C.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`,J3=C.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({theme:e})=>e.primary};
  background-color: ${({theme:e})=>e.primary+15};
  padding: 2px 8px;
  border-radius: 10px;
`,X3=C.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`,Z3=C.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({theme:e})=>e.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,eS=C.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({theme:e})=>e.text_secondary+80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`,tS=C.div`
  font-weight: 400;
  color: ${({theme:e})=>e.text_secondary+99};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`,nS=C.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`,rS=C.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({theme:e})=>e.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({theme:e})=>e.card};
`,oS=({project:e,openModal:t,setOpenModal:n})=>{var a,s;const{selectedLanguage:r}=zt(),o=At[r],i=()=>{t&&e&&n({state:!0,project:{projects:{nav:{ProjectAll:o==null?void 0:o.projects.nav.ProjectAll,ProjectWeb:o==null?void 0:o.projects.nav.ProjectWeb,Bootcamp:o==null?void 0:o.projects.nav.Bootcamp},buttonGitHubTitle:o==null?void 0:o.projects.buttonGitHubTitle,buttonWebappTitle:o==null?void 0:o.projects.buttonWebappTitle,title:o==null?void 0:o.projects.title,desc:o==null?void 0:o.projects.desc,info:[e]}}})};return x.jsxs(q3,{onClick:i,children:[x.jsx(Y3,{src:e.image}),x.jsx(Q3,{children:(a=e.tags)==null?void 0:a.map((l,c)=>x.jsx(J3,{children:l},c))}),x.jsxs(X3,{children:[x.jsx(Z3,{children:e.title}),x.jsx(eS,{children:e.date}),x.jsx(tS,{children:e.description})]}),x.jsx(nS,{children:(s=e.member)==null?void 0:s.map((l,c)=>x.jsx(rS,{src:l.img},c))})]})},iS=C.div`
  background: linear-gradient(
    343.07deg,
    rgba(132, 59, 206, 0.06) 5.71%,
    rgba(132, 59, 206, 0) 64.83%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
`,aS=C.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 10px 0px 100px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`,sS=C.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  color: ${({theme:e})=>e.sub_text};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,lS=C.div`
  font-size: 15px;
  text-align: center;
  font-weight: 400;
  color: ${({theme:e})=>e.sub_text+95};
  max-width: 900px;
  line-height: 30px;

  @media (max-width: 960px) {
    text-align: center;
    width: 85%;
  }

  @media (max-width: 640px) {
    font-size: 15px;
    width: 85%;
  }
`,cS=C.a`
  display: flex;
  border: 1.5px solid ${({theme:e})=>e.primary};
  border-radius: 4px;
  color: ${({theme:e})=>e.primary};
  font-size: 16px;
  font-weight: 500;
  margin: 22px 0px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;C.div`
  padding: 8px 18px;
  cursor: pointer;
  background-color: ${({active:e})=>e?"#000":"none"};
  color: ${({active:e,theme:t})=>e?"white":t.primary};
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({theme:e})=>e.primary};
    color: #fff;
  }

  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
`;const uS=C.div`
  width: 1.5px;
  background: ${({theme:e})=>e.primary};
`,dS=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
  // display: grid;
  // grid-template-columns: repeat(3, 1fr);
  // grid-gap: 32px;
  // grid-auto-rows: minmax(100px, auto);
  // @media (max-width: 960px) {
  //     grid-template-columns: repeat(2, 1fr);
  // }
  // @media (max-width: 640px) {
  //     grid-template-columns: repeat(1, 1fr);
  // }
`,pS=({openModal:e,setOpenModal:t})=>{const[n,r]=T.useState("All"),[o,i]=T.useState(!1),{selectedLanguage:a}=zt(),s=At[a],l=p=>{r(p)},c=s==null?void 0:s.projects.info.filter(p=>p.category===n),u=s==null?void 0:s.projects.info.filter(p=>p.id),d=n!=="All"?c:u;return x.jsx(iS,{id:"projects",children:x.jsxs(aS,{children:[x.jsx(sS,{children:s==null?void 0:s.projects.title}),x.jsx(lS,{children:s==null?void 0:s.projects.desc}),x.jsxs(cS,{children:[x.jsx("div",{className:`button-menu${n==="All"?"-active":""}`,onClick:()=>{l("All"),i(!o)},children:s==null?void 0:s.projects.nav.ProjectAll}),x.jsx(uS,{}),x.jsx("div",{className:`button-menu${n==="Bootcamp"?"-active":""}`,onClick:()=>{l("Bootcamp"),i(!o)},children:s==null?void 0:s.projects.nav.Bootcamp})]}),x.jsx(dS,{children:d==null?void 0:d.map((p,f)=>x.jsx(oS,{project:p,openModal:e,setOpenModal:t},f))})]})})},fS=C.img`
  display: none;
  height: 70px;
  width: fit-content;
  background-color: #000;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`,mS=C.a`
  background: ${({theme:e})=>e.text_primary};
  justify-content: center;
  display: flex;
  height: 45px;
  align-items: center;
  border-radius: 2px;
  color: ${({$isdarkmode:e})=>e?"#000":"#fff"};
  cursor: pointer;
  padding: 5px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  &:hover {
    background: ${({theme:e})=>e.primary};
    color: ${({theme:e})=>e.white};
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`,L0=C.span`
  overflow: hidden;
  display: -webkit-box;
  text-align: center;
  line-height: 20px;
  font-weight: 350;
  color: ${({theme:e})=>e.sub_text+95};
  max-width: 100%;
  margin-bottom: 10px;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`,hS=C.div`
  width: 650px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  @media only screen and (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 300px;
  }

  &:hover ${fS} {
    display: flex;
  }

  &:hover ${L0} {
    overflow: visible;
    -webkit-line-clamp: unset;
  }

  border: 0.1px solid ${({theme:e})=>e.primary};
`,gS=C.div`
  width: 100%;
  display: flex;
  gap: 12px;
`,vS=C.img`
  height: 50px;
  background-color: #000;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`,yS=C.img`
  border-radius: 10px;
  margin: 2px;
  width: 50%;
  height: 50%;
  @media only screen and (max-width: 768px) {
    width: 50%;
    height: 50%;
  }
`,xS=C.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px;
`,wS=C.div`
  font-size: 18px;
  font-weight: 400;
  text-align: left;
  color: ${({theme:e})=>e.text_primary+99};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`,bS=C.div`
  font-size: 15px;
  font-style: italic;
  font-weight: 200;
  text-align: left;
  color: ${({$isdarkmode:e})=>e?"#fff":"#000"};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`,kS=C.div`
  font-size: 25px;
  font-weight: 500;
  margin: 4px;
  text-align: center;
  color: ${({$isdarkmode:e})=>e?"#fff":"#000"};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`,SS=C.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.text_secondary+99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`,ES=C.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({theme:e})=>e.text_secondary+80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`,CS=C.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.text_secondary+99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`,_S=C.a`
  text-decoration: none;
  text-align: center;
  align-items: center;
  justify-content: center;

  &:hover {
    -webkit-animation: vibrate 2s linear infinite both;
    animation: vibrate 2s linear infinite both;

    @-webkit-keyframes vibrate {
      0% {
        -webkit-transform: translate(0);
        transform: translate(0);
      }
      20% {
        -webkit-transform: translate(-2px, 2px);
        transform: translate(-2px, 2px);
      }
      40% {
        -webkit-transform: translate(-2px, -2px);
        transform: translate(-2px, -2px);
      }
      60% {
        -webkit-transform: translate(2px, 2px);
        transform: translate(2px, 2px);
      }
      80% {
        -webkit-transform: translate(2px, -2px);
        transform: translate(2px, -2px);
      }
      100% {
        -webkit-transform: translate(0);
        transform: translate(0);
      }
    }

    @keyframes vibrate {
      0% {
        -webkit-transform: translate(0);
        transform: translate(0);
      }
      20% {
        -webkit-transform: translate(-2px, 2px);
        transform: translate(-2px, 2px);
      }
      40% {
        -webkit-transform: translate(-2px, -2px);
        transform: translate(-2px, -2px);
      }
      60% {
        -webkit-transform: translate(2px, 2px);
        transform: translate(2px, 2px);
      }
      80% {
        -webkit-transform: translate(2px, -2px);
        transform: translate(2px, -2px);
      }
      100% {
        -webkit-transform: translate(0);
        transform: translate(0);
      }
    }
  }
`,jS=C.a`
  text-decoration: none;
  text-align: center;
  align-items: center;
  justify-content: center;

  &:hover {
    -webkit-animation: vibrate 2s linear infinite both;
    animation: vibrate 2s linear infinite both;

    @-webkit-keyframes vibrate {
      0% {
        -webkit-transform: translate(0);
        transform: translate(0);
      }
      20% {
        -webkit-transform: translate(-2px, 2px);
        transform: translate(-2px, 2px);
      }
      40% {
        -webkit-transform: translate(-2px, -2px);
        transform: translate(-2px, -2px);
      }
      60% {
        -webkit-transform: translate(2px, 2px);
        transform: translate(2px, 2px);
      }
      80% {
        -webkit-transform: translate(2px, -2px);
        transform: translate(2px, -2px);
      }
      100% {
        -webkit-transform: translate(0);
        transform: translate(0);
      }
    }

    @keyframes vibrate {
      0% {
        -webkit-transform: translate(0);
        transform: translate(0);
      }
      20% {
        -webkit-transform: translate(-2px, 2px);
        transform: translate(-2px, 2px);
      }
      40% {
        -webkit-transform: translate(-2px, -2px);
        transform: translate(-2px, -2px);
      }
      60% {
        -webkit-transform: translate(2px, 2px);
        transform: translate(2px, 2px);
      }
      80% {
        -webkit-transform: translate(2px, -2px);
        transform: translate(2px, -2px);
      }
      100% {
        -webkit-transform: translate(0);
        transform: translate(0);
      }
    }
  }
`,TS=({education:e})=>{const{isDarkMode:t}=zn();return x.jsxs(hS,{children:[x.jsxs(gS,{children:[x.jsx(jS,{href:e.linkIcon,target:"_blank",rel:"noopener noreferrer",children:x.jsx(vS,{src:e.img})}),x.jsxs(xS,{children:[x.jsx(wS,{children:e.school}),x.jsx(bS,{$isdarkmode:t,children:e.curseMoment}),x.jsx(SS,{children:e.degree}),x.jsx(ES,{children:e.date})]}),e.CertificateTitle.length>1&&x.jsx(kS,{$isdarkmode:t,children:e.CertificateTitle})]}),e.CertificateLink.length>1&&x.jsx(_S,{href:e.CertificateLink,target:"_blank",rel:"noopener noreferrer",children:x.jsx(yS,{src:e.CertificateImg})}),e.gradetitle.length>1&&x.jsxs(CS,{children:[x.jsxs("b",{children:[e.gradetitle," "]}),e.gradevalue]}),e.desc.length>1&&x.jsx(L0,{children:e.desc}),e.curseTitle.length>1&&x.jsx(mS,{$isdarkmode:t,target:"_blank",href:e.curseLink,children:e.curseTitle})]})},PS=C.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  margin-top: 30px;
`,$S=C.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`,OS=C.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({theme:e})=>e.sub_text};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,RS=C.div`
  font-size: 15px;
  margin-bottom: 30px;
  text-align: center;
  font-weight: 400;
  color: ${({theme:e})=>e.sub_text+95};
  max-width: 900px;
  line-height: 30px;

  @media (max-width: 960px) {
    text-align: center;
    width: 85%;
  }

  @media (max-width: 640px) {
    font-size: 15px;
    width: 85%;
  }
`,IS=()=>{var r,o,i;const{selectedLanguage:e}=zt(),t=At[e],n=((r=t==null?void 0:t.education)==null?void 0:r.info.map(a=>{var s;return{id:a.id,img:a.img,school:((s=t==null?void 0:t.education)==null?void 0:s.title)||"",curseMoment:a.curseMoment||"",curseLink:a.curseLink||"",curseTitle:a.curseTitle||"",gradetitle:a.gradetitle||"",gradevalue:a.gradevalue||"",linkIcon:a.linkIcon||"",CertificateLink:a.CertificateLink||"",CertificateTitle:a.CertificateTitle||"",CertificateImg:a.CertificateImg||"",date:a.date||"",desc:a.desc||"",degree:a.degree||""}}))||[];return x.jsx(PS,{id:"education",children:x.jsxs($S,{children:[x.jsx(OS,{children:(o=t==null?void 0:t.education)==null?void 0:o.title}),x.jsx(RS,{children:(i=t==null?void 0:t.education)==null?void 0:i.desc}),n==null?void 0:n.map((a,s)=>x.jsx(I0,{sx:{py:"12px",px:2},children:x.jsx(TS,{education:a})},s))]})})},AS=C.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`,zS=C.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`,LS=C.div`
  display: flex;
  width: 95%;
  max-width: 600px;
  background-image: url(https://raw.githubusercontent.com/Vidigal-code/React-portfolio/main/src/images/banner-bg.png);
  background-size: cover;
  background-position: center;
  justify-content: space-between;
  background-color: ${({theme:e})=>e.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: ${({$isdarkmode:e})=>e?"rgba(255, 255, 255, 0.925)":"rgba(0, 0, 0, 0.788)"}
    0px 4px 30px;
  border: 2.5px solid ${({$isdarkmode:e})=>e?"#fff":"#000"};

  @media (max-width: 768px) {
    width: 90%;
    padding: 15px;
  }

  @media (max-width: 640px) {
    width: 90%;
    padding: 15px;
  }
`,NS=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1000px;

  animation: shake-vertical 6s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite
      both,
    heartbeat 5s ease-in-out infinite both;

  @keyframes shake-vertical {
    0%,
    100% {
      transform: translateY(0);
    }
    10%,
    30%,
    50%,
    70% {
      transform: translateY(-8px);
    }
    20%,
    40%,
    60% {
      transform: translateY(8px);
    }
    80% {
      transform: translateY(6.4px);
    }
    90% {
      transform: translateY(-6.4px);
    }
  }

  @keyframes heartbeat {
    from {
      transform: scale(1);
      transform-origin: center center;
      animation-timing-function: ease-out;
    }
    10% {
      transform: scale(0.91);
      animation-timing-function: ease-in;
    }
    17% {
      transform: scale(0.98);
      animation-timing-function: ease-out;
    }
    33% {
      transform: scale(0.87);
      animation-timing-function: ease-in;
    }
    45% {
      transform: scale(1);
      animation-timing-function: ease-out;
    }
  }
`,MS=C.img`
  height: 150px;
  width: 150px;
  margin: 0 auto;
`,FS=C.img`
  position: relative;
  max-width: 170px;
  max-height: 170px;
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    max-width: 150px;
    max-height: 150px;
  }

  @media (max-width: 640px) {
    max-width: 150px;
    max-height: 150px;
  }
`,DS=C.div`
  width: 48%;
`,VS=C.div`
  width: 48%;
`,HS=C.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({theme:e})=>e.sub_text};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,US=C.div`
  font-size: 15px;
  margin-bottom: 30px;
  text-align: center;
  font-weight: 300;
  color: white;
  max-width: 900px;
  line-height: 25px;

  @media (max-width: 960px) {
    text-align: center;
    width: 85%;
  }

  @media (max-width: 640px) {
    font-size: 15px;
    width: 85%;
  }
`,WS=()=>{const{selectedLanguage:e}=zt(),t=At[e],{isDarkMode:n}=zn();return x.jsx(AS,{id:"about",children:x.jsxs(zS,{children:[x.jsx(HS,{children:t==null?void 0:t.about.title}),x.jsxs(LS,{$isdarkmode:n,children:[x.jsx(DS,{children:x.jsx(FS,{src:t==null?void 0:t.about.userimg,alt:"Vidigal"})}),x.jsx(VS,{children:x.jsxs(US,{children:[t==null?void 0:t.about.desc,x.jsx(NS,{children:x.jsx(MS,{src:t==null?void 0:t.about.linkheaderimg,alt:"Header"})})]})})]})]})})},BS=C.div`
  background-color: ${({theme:e})=>e.bg};
  width: 100%;
  overflow: hidden;
`,GS=()=>{var i,a;const{selectedLanguage:e}=zt(),t=At[e],{isDarkMode:n}=zn(),[r,o]=T.useState({state:!1,project:null});return x.jsx(x.Fragment,{children:x.jsx(yx,{theme:n?yy:xy,children:x.jsxs(pw,{children:[x.jsx(tw,{}),x.jsxs(BS,{children:[x.jsx(Nw,{}),x.jsx(Zw,{}),x.jsx(g3,{}),x.jsx(IS,{}),(i=t==null?void 0:t.projects.info)==null?void 0:i.map((s,l)=>l===0?x.jsx(pS,{project:s,openModal:r,setOpenModal:o},l):null),x.jsx(m4,{}),x.jsx(WS,{}),x.jsx(S4,{}),r.state&&((a=t==null?void 0:t.projects.info)==null?void 0:a.map((s,l)=>x.jsx(G3,{project:s,openModal:r,setOpenModal:o},l)))]})]})})})},Hf=document.getElementById("root");Hf&&Ol.createRoot(Hf).render(x.jsx(ie.StrictMode,{children:x.jsx(Fx,{children:x.jsx(Dx,{children:x.jsx(GS,{})})})}));
