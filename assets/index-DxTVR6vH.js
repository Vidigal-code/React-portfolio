function s0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var l0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Na(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function zn(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var vp={exports:{}},La={},yp={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oi=Symbol.for("react.element"),u0=Symbol.for("react.portal"),c0=Symbol.for("react.fragment"),d0=Symbol.for("react.strict_mode"),f0=Symbol.for("react.profiler"),p0=Symbol.for("react.provider"),m0=Symbol.for("react.context"),h0=Symbol.for("react.forward_ref"),g0=Symbol.for("react.suspense"),v0=Symbol.for("react.memo"),y0=Symbol.for("react.lazy"),ed=Symbol.iterator;function x0(e){return e===null||typeof e!="object"?null:(e=ed&&e[ed]||e["@@iterator"],typeof e=="function"?e:null)}var xp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wp=Object.assign,kp={};function Jr(e,t,n){this.props=e,this.context=t,this.refs=kp,this.updater=n||xp}Jr.prototype.isReactComponent={};Jr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Jr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function bp(){}bp.prototype=Jr.prototype;function Tu(e,t,n){this.props=e,this.context=t,this.refs=kp,this.updater=n||xp}var $u=Tu.prototype=new bp;$u.constructor=Tu;wp($u,Jr.prototype);$u.isPureReactComponent=!0;var td=Array.isArray,Sp=Object.prototype.hasOwnProperty,Ou={current:null},Cp={key:!0,ref:!0,__self:!0,__source:!0};function Ep(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)Sp.call(t,r)&&!Cp.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var u=Array(s),l=0;l<s;l++)u[l]=arguments[l+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:oi,type:e,key:i,ref:a,props:o,_owner:Ou.current}}function w0(e,t){return{$$typeof:oi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ru(e){return typeof e=="object"&&e!==null&&e.$$typeof===oi}function k0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var nd=/\/+/g;function Is(e,t){return typeof e=="object"&&e!==null&&e.key!=null?k0(""+e.key):t.toString(36)}function Li(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case oi:case u0:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Is(a,0):r,td(o)?(n="",e!=null&&(n=e.replace(nd,"$&/")+"/"),Li(o,t,n,"",function(l){return l})):o!=null&&(Ru(o)&&(o=w0(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(nd,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",td(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Is(i,s);a+=Li(i,t,n,u,o)}else if(u=x0(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Is(i,s++),a+=Li(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function hi(e,t,n){if(e==null)return e;var r=[],o=0;return Li(e,r,"","",function(i){return t.call(n,i,o++)}),r}function b0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ze={current:null},Di={transition:null},S0={ReactCurrentDispatcher:Ze,ReactCurrentBatchConfig:Di,ReactCurrentOwner:Ou};re.Children={map:hi,forEach:function(e,t,n){hi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return hi(e,function(){t++}),t},toArray:function(e){return hi(e,function(t){return t})||[]},only:function(e){if(!Ru(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=Jr;re.Fragment=c0;re.Profiler=f0;re.PureComponent=Tu;re.StrictMode=d0;re.Suspense=g0;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=S0;re.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=wp({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Ou.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Sp.call(t,u)&&!Cp.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var l=0;l<u;l++)s[l]=arguments[l+2];r.children=s}return{$$typeof:oi,type:e.type,key:o,ref:i,props:r,_owner:a}};re.createContext=function(e){return e={$$typeof:m0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:p0,_context:e},e.Consumer=e};re.createElement=Ep;re.createFactory=function(e){var t=Ep.bind(null,e);return t.type=e,t};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:h0,render:e}};re.isValidElement=Ru;re.lazy=function(e){return{$$typeof:y0,_payload:{_status:-1,_result:e},_init:b0}};re.memo=function(e,t){return{$$typeof:v0,type:e,compare:t===void 0?null:t}};re.startTransition=function(e){var t=Di.transition;Di.transition={};try{e()}finally{Di.transition=t}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(e,t){return Ze.current.useCallback(e,t)};re.useContext=function(e){return Ze.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return Ze.current.useDeferredValue(e)};re.useEffect=function(e,t){return Ze.current.useEffect(e,t)};re.useId=function(){return Ze.current.useId()};re.useImperativeHandle=function(e,t,n){return Ze.current.useImperativeHandle(e,t,n)};re.useInsertionEffect=function(e,t){return Ze.current.useInsertionEffect(e,t)};re.useLayoutEffect=function(e,t){return Ze.current.useLayoutEffect(e,t)};re.useMemo=function(e,t){return Ze.current.useMemo(e,t)};re.useReducer=function(e,t,n){return Ze.current.useReducer(e,t,n)};re.useRef=function(e){return Ze.current.useRef(e)};re.useState=function(e){return Ze.current.useState(e)};re.useSyncExternalStore=function(e,t,n){return Ze.current.useSyncExternalStore(e,t,n)};re.useTransition=function(){return Ze.current.useTransition()};re.version="18.2.0";yp.exports=re;var P=yp.exports;const je=Na(P),vl=s0({__proto__:null,default:je},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C0=P,E0=Symbol.for("react.element"),_0=Symbol.for("react.fragment"),j0=Object.prototype.hasOwnProperty,P0=C0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T0={key:!0,ref:!0,__self:!0,__source:!0};function _p(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)j0.call(t,r)&&!T0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:E0,type:e,key:i,ref:a,props:o,_owner:P0.current}}La.Fragment=_0;La.jsx=_p;La.jsxs=_p;vp.exports=La;var x=vp.exports,yl={},jp={exports:{}},pt={},Pp={exports:{}},Tp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,z){var O=A.length;A.push(z);e:for(;0<O;){var G=O-1>>>1,$=A[G];if(0<o($,z))A[G]=z,A[O]=$,O=G;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var z=A[0],O=A.pop();if(O!==z){A[0]=O;e:for(var G=0,$=A.length,B=$>>>1;G<B;){var C=2*(G+1)-1,J=A[C],S=C+1,Q=A[S];if(0>o(J,O))S<$&&0>o(Q,J)?(A[G]=Q,A[S]=O,G=S):(A[G]=J,A[C]=O,G=C);else if(S<$&&0>o(Q,O))A[G]=Q,A[S]=O,G=S;else break e}}return z}function o(A,z){var O=A.sortIndex-z.sortIndex;return O!==0?O:A.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var u=[],l=[],c=1,d=null,f=3,m=!1,g=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(A){for(var z=n(l);z!==null;){if(z.callback===null)r(l);else if(z.startTime<=A)r(l),z.sortIndex=z.expirationTime,t(u,z);else break;z=n(l)}}function k(A){if(v=!1,y(A),!g)if(n(u)!==null)g=!0,F(b);else{var z=n(l);z!==null&&X(k,z.startTime-A)}}function b(A,z){g=!1,v&&(v=!1,h(T),T=-1),m=!0;var O=f;try{for(y(z),d=n(u);d!==null&&(!(d.expirationTime>z)||A&&!I());){var G=d.callback;if(typeof G=="function"){d.callback=null,f=d.priorityLevel;var $=G(d.expirationTime<=z);z=e.unstable_now(),typeof $=="function"?d.callback=$:d===n(u)&&r(u),y(z)}else r(u);d=n(u)}if(d!==null)var B=!0;else{var C=n(l);C!==null&&X(k,C.startTime-z),B=!1}return B}finally{d=null,f=O,m=!1}}var _=!1,E=null,T=-1,L=5,R=-1;function I(){return!(e.unstable_now()-R<L)}function D(){if(E!==null){var A=e.unstable_now();R=A;var z=!0;try{z=E(!0,A)}finally{z?W():(_=!1,E=null)}}else _=!1}var W;if(typeof p=="function")W=function(){p(D)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,U=H.port2;H.port1.onmessage=D,W=function(){U.postMessage(null)}}else W=function(){w(D,0)};function F(A){E=A,_||(_=!0,W())}function X(A,z){T=w(function(){A(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){g||m||(g=!0,F(b))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(A){switch(f){case 1:case 2:case 3:var z=3;break;default:z=f}var O=f;f=z;try{return A()}finally{f=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,z){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var O=f;f=A;try{return z()}finally{f=O}},e.unstable_scheduleCallback=function(A,z,O){var G=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?G+O:G):O=G,A){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=O+$,A={id:c++,callback:z,priorityLevel:A,startTime:O,expirationTime:$,sortIndex:-1},O>G?(A.sortIndex=O,t(l,A),n(u)===null&&A===n(l)&&(v?(h(T),T=-1):v=!0,X(k,O-G))):(A.sortIndex=$,t(u,A),g||m||(g=!0,F(b))),A},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(A){var z=f;return function(){var O=f;f=z;try{return A.apply(this,arguments)}finally{f=O}}}})(Tp);Pp.exports=Tp;var $0=Pp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p=P,ft=$0;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Op=new Set,zo={};function or(e,t){Br(e,t),Br(e+"Capture",t)}function Br(e,t){for(zo[e]=t,e=0;e<t.length;e++)Op.add(t[e])}var on=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xl=Object.prototype.hasOwnProperty,O0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rd={},od={};function R0(e){return xl.call(od,e)?!0:xl.call(rd,e)?!1:O0.test(e)?od[e]=!0:(rd[e]=!0,!1)}function A0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function z0(e,t,n,r){if(t===null||typeof t>"u"||A0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function et(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var He={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){He[e]=new et(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];He[t]=new et(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){He[e]=new et(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){He[e]=new et(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){He[e]=new et(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){He[e]=new et(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){He[e]=new et(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){He[e]=new et(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){He[e]=new et(e,5,!1,e.toLowerCase(),null,!1,!1)});var Au=/[\-:]([a-z])/g;function zu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Au,zu);He[t]=new et(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Au,zu);He[t]=new et(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Au,zu);He[t]=new et(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){He[e]=new et(e,1,!1,e.toLowerCase(),null,!1,!1)});He.xlinkHref=new et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){He[e]=new et(e,1,!1,e.toLowerCase(),null,!0,!0)});function Iu(e,t,n,r){var o=He.hasOwnProperty(t)?He[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(z0(t,n,o,r)&&(n=null),r||o===null?R0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var dn=$p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gi=Symbol.for("react.element"),wr=Symbol.for("react.portal"),kr=Symbol.for("react.fragment"),Mu=Symbol.for("react.strict_mode"),wl=Symbol.for("react.profiler"),Rp=Symbol.for("react.provider"),Ap=Symbol.for("react.context"),Nu=Symbol.for("react.forward_ref"),kl=Symbol.for("react.suspense"),bl=Symbol.for("react.suspense_list"),Lu=Symbol.for("react.memo"),hn=Symbol.for("react.lazy"),zp=Symbol.for("react.offscreen"),id=Symbol.iterator;function io(e){return e===null||typeof e!="object"?null:(e=id&&e[id]||e["@@iterator"],typeof e=="function"?e:null)}var be=Object.assign,Ms;function vo(e){if(Ms===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ms=t&&t[1]||""}return`
`+Ms+e}var Ns=!1;function Ls(e,t){if(!e||Ns)return"";Ns=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(l){var r=l}Reflect.construct(e,[],t)}else{try{t.call()}catch(l){r=l}e.call(t.prototype)}else{try{throw Error()}catch(l){r=l}e()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var o=l.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var u=`
`+o[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{Ns=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?vo(e):""}function I0(e){switch(e.tag){case 5:return vo(e.type);case 16:return vo("Lazy");case 13:return vo("Suspense");case 19:return vo("SuspenseList");case 0:case 2:case 15:return e=Ls(e.type,!1),e;case 11:return e=Ls(e.type.render,!1),e;case 1:return e=Ls(e.type,!0),e;default:return""}}function Sl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case kr:return"Fragment";case wr:return"Portal";case wl:return"Profiler";case Mu:return"StrictMode";case kl:return"Suspense";case bl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ap:return(e.displayName||"Context")+".Consumer";case Rp:return(e._context.displayName||"Context")+".Provider";case Nu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Lu:return t=e.displayName||null,t!==null?t:Sl(e.type)||"Memo";case hn:t=e._payload,e=e._init;try{return Sl(e(t))}catch{}}return null}function M0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sl(t);case 8:return t===Mu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Rn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ip(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function N0(e){var t=Ip(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vi(e){e._valueTracker||(e._valueTracker=N0(e))}function Mp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ip(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function na(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Cl(e,t){var n=t.checked;return be({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ad(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Rn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Np(e,t){t=t.checked,t!=null&&Iu(e,"checked",t,!1)}function El(e,t){Np(e,t);var n=Rn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?_l(e,t.type,n):t.hasOwnProperty("defaultValue")&&_l(e,t.type,Rn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function sd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function _l(e,t,n){(t!=="number"||na(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var yo=Array.isArray;function Ar(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Rn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function jl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return be({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ld(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(yo(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Rn(n)}}function Lp(e,t){var n=Rn(t.value),r=Rn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ud(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Dp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Dp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var yi,Fp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(yi=yi||document.createElement("div"),yi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=yi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Io(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var bo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},L0=["Webkit","ms","Moz","O"];Object.keys(bo).forEach(function(e){L0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),bo[t]=bo[e]})});function Bp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||bo.hasOwnProperty(e)&&bo[e]?(""+t).trim():t+"px"}function Up(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Bp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var D0=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Tl(e,t){if(t){if(D0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function $l(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ol=null;function Du(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Rl=null,zr=null,Ir=null;function cd(e){if(e=si(e)){if(typeof Rl!="function")throw Error(N(280));var t=e.stateNode;t&&(t=Va(t),Rl(e.stateNode,e.type,t))}}function Vp(e){zr?Ir?Ir.push(e):Ir=[e]:zr=e}function Hp(){if(zr){var e=zr,t=Ir;if(Ir=zr=null,cd(e),t)for(e=0;e<t.length;e++)cd(t[e])}}function Wp(e,t){return e(t)}function Gp(){}var Ds=!1;function Kp(e,t,n){if(Ds)return e(t,n);Ds=!0;try{return Wp(e,t,n)}finally{Ds=!1,(zr!==null||Ir!==null)&&(Gp(),Hp())}}function Mo(e,t){var n=e.stateNode;if(n===null)return null;var r=Va(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var Al=!1;if(on)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){Al=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{Al=!1}function F0(e,t,n,r,o,i,a,s,u){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(c){this.onError(c)}}var So=!1,ra=null,oa=!1,zl=null,B0={onError:function(e){So=!0,ra=e}};function U0(e,t,n,r,o,i,a,s,u){So=!1,ra=null,F0.apply(B0,arguments)}function V0(e,t,n,r,o,i,a,s,u){if(U0.apply(this,arguments),So){if(So){var l=ra;So=!1,ra=null}else throw Error(N(198));oa||(oa=!0,zl=l)}}function ir(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Qp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function dd(e){if(ir(e)!==e)throw Error(N(188))}function H0(e){var t=e.alternate;if(!t){if(t=ir(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return dd(o),e;if(i===r)return dd(o),t;i=i.sibling}throw Error(N(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function Yp(e){return e=H0(e),e!==null?qp(e):null}function qp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qp(e);if(t!==null)return t;e=e.sibling}return null}var Xp=ft.unstable_scheduleCallback,fd=ft.unstable_cancelCallback,W0=ft.unstable_shouldYield,G0=ft.unstable_requestPaint,Pe=ft.unstable_now,K0=ft.unstable_getCurrentPriorityLevel,Fu=ft.unstable_ImmediatePriority,Jp=ft.unstable_UserBlockingPriority,ia=ft.unstable_NormalPriority,Q0=ft.unstable_LowPriority,Zp=ft.unstable_IdlePriority,Da=null,Wt=null;function Y0(e){if(Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(Da,e,void 0,(e.current.flags&128)===128)}catch{}}var At=Math.clz32?Math.clz32:J0,q0=Math.log,X0=Math.LN2;function J0(e){return e>>>=0,e===0?32:31-(q0(e)/X0|0)|0}var xi=64,wi=4194304;function xo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function aa(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~o;s!==0?r=xo(s):(i&=a,i!==0&&(r=xo(i)))}else a=n&~o,a!==0?r=xo(a):i!==0&&(r=xo(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-At(t),o=1<<n,r|=e[n],t&=~o;return r}function Z0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ev(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-At(i),s=1<<a,u=o[a];u===-1?(!(s&n)||s&r)&&(o[a]=Z0(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function Il(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function em(){var e=xi;return xi<<=1,!(xi&4194240)&&(xi=64),e}function Fs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ii(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-At(t),e[t]=n}function tv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-At(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Bu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-At(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ce=0;function tm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var nm,Uu,rm,om,im,Ml=!1,ki=[],bn=null,Sn=null,Cn=null,No=new Map,Lo=new Map,vn=[],nv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pd(e,t){switch(e){case"focusin":case"focusout":bn=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":No.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(t.pointerId)}}function so(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=si(t),t!==null&&Uu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function rv(e,t,n,r,o){switch(t){case"focusin":return bn=so(bn,e,t,n,r,o),!0;case"dragenter":return Sn=so(Sn,e,t,n,r,o),!0;case"mouseover":return Cn=so(Cn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return No.set(i,so(No.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Lo.set(i,so(Lo.get(i)||null,e,t,n,r,o)),!0}return!1}function am(e){var t=Wn(e.target);if(t!==null){var n=ir(t);if(n!==null){if(t=n.tag,t===13){if(t=Qp(n),t!==null){e.blockedOn=t,im(e.priority,function(){rm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Nl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ol=r,n.target.dispatchEvent(r),Ol=null}else return t=si(n),t!==null&&Uu(t),e.blockedOn=n,!1;t.shift()}return!0}function md(e,t,n){Fi(e)&&n.delete(t)}function ov(){Ml=!1,bn!==null&&Fi(bn)&&(bn=null),Sn!==null&&Fi(Sn)&&(Sn=null),Cn!==null&&Fi(Cn)&&(Cn=null),No.forEach(md),Lo.forEach(md)}function lo(e,t){e.blockedOn===t&&(e.blockedOn=null,Ml||(Ml=!0,ft.unstable_scheduleCallback(ft.unstable_NormalPriority,ov)))}function Do(e){function t(o){return lo(o,e)}if(0<ki.length){lo(ki[0],e);for(var n=1;n<ki.length;n++){var r=ki[n];r.blockedOn===e&&(r.blockedOn=null)}}for(bn!==null&&lo(bn,e),Sn!==null&&lo(Sn,e),Cn!==null&&lo(Cn,e),No.forEach(t),Lo.forEach(t),n=0;n<vn.length;n++)r=vn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<vn.length&&(n=vn[0],n.blockedOn===null);)am(n),n.blockedOn===null&&vn.shift()}var Mr=dn.ReactCurrentBatchConfig,sa=!0;function iv(e,t,n,r){var o=ce,i=Mr.transition;Mr.transition=null;try{ce=1,Vu(e,t,n,r)}finally{ce=o,Mr.transition=i}}function av(e,t,n,r){var o=ce,i=Mr.transition;Mr.transition=null;try{ce=4,Vu(e,t,n,r)}finally{ce=o,Mr.transition=i}}function Vu(e,t,n,r){if(sa){var o=Nl(e,t,n,r);if(o===null)qs(e,t,r,la,n),pd(e,r);else if(rv(o,e,t,n,r))r.stopPropagation();else if(pd(e,r),t&4&&-1<nv.indexOf(e)){for(;o!==null;){var i=si(o);if(i!==null&&nm(i),i=Nl(e,t,n,r),i===null&&qs(e,t,r,la,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else qs(e,t,r,null,n)}}var la=null;function Nl(e,t,n,r){if(la=null,e=Du(r),e=Wn(e),e!==null)if(t=ir(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Qp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return la=e,null}function sm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(K0()){case Fu:return 1;case Jp:return 4;case ia:case Q0:return 16;case Zp:return 536870912;default:return 16}default:return 16}}var wn=null,Hu=null,Bi=null;function lm(){if(Bi)return Bi;var e,t=Hu,n=t.length,r,o="value"in wn?wn.value:wn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Bi=o.slice(e,1<r?1-r:void 0)}function Ui(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bi(){return!0}function hd(){return!1}function mt(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?bi:hd,this.isPropagationStopped=hd,this}return be(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bi)},persist:function(){},isPersistent:bi}),t}var Zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wu=mt(Zr),ai=be({},Zr,{view:0,detail:0}),sv=mt(ai),Bs,Us,uo,Fa=be({},ai,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==uo&&(uo&&e.type==="mousemove"?(Bs=e.screenX-uo.screenX,Us=e.screenY-uo.screenY):Us=Bs=0,uo=e),Bs)},movementY:function(e){return"movementY"in e?e.movementY:Us}}),gd=mt(Fa),lv=be({},Fa,{dataTransfer:0}),uv=mt(lv),cv=be({},ai,{relatedTarget:0}),Vs=mt(cv),dv=be({},Zr,{animationName:0,elapsedTime:0,pseudoElement:0}),fv=mt(dv),pv=be({},Zr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mv=mt(pv),hv=be({},Zr,{data:0}),vd=mt(hv),gv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yv[e])?!!t[e]:!1}function Gu(){return xv}var wv=be({},ai,{key:function(e){if(e.key){var t=gv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ui(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gu,charCode:function(e){return e.type==="keypress"?Ui(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ui(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kv=mt(wv),bv=be({},Fa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yd=mt(bv),Sv=be({},ai,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gu}),Cv=mt(Sv),Ev=be({},Zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),_v=mt(Ev),jv=be({},Fa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pv=mt(jv),Tv=[9,13,27,32],Ku=on&&"CompositionEvent"in window,Co=null;on&&"documentMode"in document&&(Co=document.documentMode);var $v=on&&"TextEvent"in window&&!Co,um=on&&(!Ku||Co&&8<Co&&11>=Co),xd=" ",wd=!1;function cm(e,t){switch(e){case"keyup":return Tv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var br=!1;function Ov(e,t){switch(e){case"compositionend":return dm(t);case"keypress":return t.which!==32?null:(wd=!0,xd);case"textInput":return e=t.data,e===xd&&wd?null:e;default:return null}}function Rv(e,t){if(br)return e==="compositionend"||!Ku&&cm(e,t)?(e=lm(),Bi=Hu=wn=null,br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return um&&t.locale!=="ko"?null:t.data;default:return null}}var Av={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Av[e.type]:t==="textarea"}function fm(e,t,n,r){Vp(r),t=ua(t,"onChange"),0<t.length&&(n=new Wu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Eo=null,Fo=null;function zv(e){Sm(e,0)}function Ba(e){var t=Er(e);if(Mp(t))return e}function Iv(e,t){if(e==="change")return t}var pm=!1;if(on){var Hs;if(on){var Ws="oninput"in document;if(!Ws){var bd=document.createElement("div");bd.setAttribute("oninput","return;"),Ws=typeof bd.oninput=="function"}Hs=Ws}else Hs=!1;pm=Hs&&(!document.documentMode||9<document.documentMode)}function Sd(){Eo&&(Eo.detachEvent("onpropertychange",mm),Fo=Eo=null)}function mm(e){if(e.propertyName==="value"&&Ba(Fo)){var t=[];fm(t,Fo,e,Du(e)),Kp(zv,t)}}function Mv(e,t,n){e==="focusin"?(Sd(),Eo=t,Fo=n,Eo.attachEvent("onpropertychange",mm)):e==="focusout"&&Sd()}function Nv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ba(Fo)}function Lv(e,t){if(e==="click")return Ba(t)}function Dv(e,t){if(e==="input"||e==="change")return Ba(t)}function Fv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Nt=typeof Object.is=="function"?Object.is:Fv;function Bo(e,t){if(Nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!xl.call(t,o)||!Nt(e[o],t[o]))return!1}return!0}function Cd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ed(e,t){var n=Cd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cd(n)}}function hm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gm(){for(var e=window,t=na();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=na(e.document)}return t}function Qu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Bv(e){var t=gm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&hm(n.ownerDocument.documentElement,n)){if(r!==null&&Qu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ed(n,i);var a=Ed(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Uv=on&&"documentMode"in document&&11>=document.documentMode,Sr=null,Ll=null,_o=null,Dl=!1;function _d(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dl||Sr==null||Sr!==na(r)||(r=Sr,"selectionStart"in r&&Qu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_o&&Bo(_o,r)||(_o=r,r=ua(Ll,"onSelect"),0<r.length&&(t=new Wu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Sr)))}function Si(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Cr={animationend:Si("Animation","AnimationEnd"),animationiteration:Si("Animation","AnimationIteration"),animationstart:Si("Animation","AnimationStart"),transitionend:Si("Transition","TransitionEnd")},Gs={},vm={};on&&(vm=document.createElement("div").style,"AnimationEvent"in window||(delete Cr.animationend.animation,delete Cr.animationiteration.animation,delete Cr.animationstart.animation),"TransitionEvent"in window||delete Cr.transitionend.transition);function Ua(e){if(Gs[e])return Gs[e];if(!Cr[e])return e;var t=Cr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in vm)return Gs[e]=t[n];return e}var ym=Ua("animationend"),xm=Ua("animationiteration"),wm=Ua("animationstart"),km=Ua("transitionend"),bm=new Map,jd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function In(e,t){bm.set(e,t),or(t,[e])}for(var Ks=0;Ks<jd.length;Ks++){var Qs=jd[Ks],Vv=Qs.toLowerCase(),Hv=Qs[0].toUpperCase()+Qs.slice(1);In(Vv,"on"+Hv)}In(ym,"onAnimationEnd");In(xm,"onAnimationIteration");In(wm,"onAnimationStart");In("dblclick","onDoubleClick");In("focusin","onFocus");In("focusout","onBlur");In(km,"onTransitionEnd");Br("onMouseEnter",["mouseout","mouseover"]);Br("onMouseLeave",["mouseout","mouseover"]);Br("onPointerEnter",["pointerout","pointerover"]);Br("onPointerLeave",["pointerout","pointerover"]);or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));or("onBeforeInput",["compositionend","keypress","textInput","paste"]);or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wv=new Set("cancel close invalid load scroll toggle".split(" ").concat(wo));function Pd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,V0(r,t,void 0,e),e.currentTarget=null}function Sm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],u=s.instance,l=s.currentTarget;if(s=s.listener,u!==i&&o.isPropagationStopped())break e;Pd(o,s,l),i=u}else for(a=0;a<r.length;a++){if(s=r[a],u=s.instance,l=s.currentTarget,s=s.listener,u!==i&&o.isPropagationStopped())break e;Pd(o,s,l),i=u}}}if(oa)throw e=zl,oa=!1,zl=null,e}function ge(e,t){var n=t[Hl];n===void 0&&(n=t[Hl]=new Set);var r=e+"__bubble";n.has(r)||(Cm(t,e,2,!1),n.add(r))}function Ys(e,t,n){var r=0;t&&(r|=4),Cm(n,e,r,t)}var Ci="_reactListening"+Math.random().toString(36).slice(2);function Uo(e){if(!e[Ci]){e[Ci]=!0,Op.forEach(function(n){n!=="selectionchange"&&(Wv.has(n)||Ys(n,!1,e),Ys(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ci]||(t[Ci]=!0,Ys("selectionchange",!1,t))}}function Cm(e,t,n,r){switch(sm(t)){case 1:var o=iv;break;case 4:o=av;break;default:o=Vu}n=o.bind(null,t,n,e),o=void 0,!Al||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function qs(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;a=a.return}for(;s!==null;){if(a=Wn(s),a===null)return;if(u=a.tag,u===5||u===6){r=i=a;continue e}s=s.parentNode}}r=r.return}Kp(function(){var l=i,c=Du(n),d=[];e:{var f=bm.get(e);if(f!==void 0){var m=Wu,g=e;switch(e){case"keypress":if(Ui(n)===0)break e;case"keydown":case"keyup":m=kv;break;case"focusin":g="focus",m=Vs;break;case"focusout":g="blur",m=Vs;break;case"beforeblur":case"afterblur":m=Vs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=uv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Cv;break;case ym:case xm:case wm:m=fv;break;case km:m=_v;break;case"scroll":m=sv;break;case"wheel":m=Pv;break;case"copy":case"cut":case"paste":m=mv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=yd}var v=(t&4)!==0,w=!v&&e==="scroll",h=v?f!==null?f+"Capture":null:f;v=[];for(var p=l,y;p!==null;){y=p;var k=y.stateNode;if(y.tag===5&&k!==null&&(y=k,h!==null&&(k=Mo(p,h),k!=null&&v.push(Vo(p,k,y)))),w)break;p=p.return}0<v.length&&(f=new m(f,g,null,n,c),d.push({event:f,listeners:v}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",f&&n!==Ol&&(g=n.relatedTarget||n.fromElement)&&(Wn(g)||g[an]))break e;if((m||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=l,g=g?Wn(g):null,g!==null&&(w=ir(g),g!==w||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=l),m!==g)){if(v=gd,k="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(v=yd,k="onPointerLeave",h="onPointerEnter",p="pointer"),w=m==null?f:Er(m),y=g==null?f:Er(g),f=new v(k,p+"leave",m,n,c),f.target=w,f.relatedTarget=y,k=null,Wn(c)===l&&(v=new v(h,p+"enter",g,n,c),v.target=y,v.relatedTarget=w,k=v),w=k,m&&g)t:{for(v=m,h=g,p=0,y=v;y;y=fr(y))p++;for(y=0,k=h;k;k=fr(k))y++;for(;0<p-y;)v=fr(v),p--;for(;0<y-p;)h=fr(h),y--;for(;p--;){if(v===h||h!==null&&v===h.alternate)break t;v=fr(v),h=fr(h)}v=null}else v=null;m!==null&&Td(d,f,m,v,!1),g!==null&&w!==null&&Td(d,w,g,v,!0)}}e:{if(f=l?Er(l):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var b=Iv;else if(kd(f))if(pm)b=Dv;else{b=Nv;var _=Mv}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=Lv);if(b&&(b=b(e,l))){fm(d,b,n,c);break e}_&&_(e,f,l),e==="focusout"&&(_=f._wrapperState)&&_.controlled&&f.type==="number"&&_l(f,"number",f.value)}switch(_=l?Er(l):window,e){case"focusin":(kd(_)||_.contentEditable==="true")&&(Sr=_,Ll=l,_o=null);break;case"focusout":_o=Ll=Sr=null;break;case"mousedown":Dl=!0;break;case"contextmenu":case"mouseup":case"dragend":Dl=!1,_d(d,n,c);break;case"selectionchange":if(Uv)break;case"keydown":case"keyup":_d(d,n,c)}var E;if(Ku)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else br?cm(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(um&&n.locale!=="ko"&&(br||T!=="onCompositionStart"?T==="onCompositionEnd"&&br&&(E=lm()):(wn=c,Hu="value"in wn?wn.value:wn.textContent,br=!0)),_=ua(l,T),0<_.length&&(T=new vd(T,e,null,n,c),d.push({event:T,listeners:_}),E?T.data=E:(E=dm(n),E!==null&&(T.data=E)))),(E=$v?Ov(e,n):Rv(e,n))&&(l=ua(l,"onBeforeInput"),0<l.length&&(c=new vd("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:l}),c.data=E))}Sm(d,t)})}function Vo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ua(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Mo(e,n),i!=null&&r.unshift(Vo(e,i,o)),i=Mo(e,t),i!=null&&r.push(Vo(e,i,o))),e=e.return}return r}function fr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Td(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,u=s.alternate,l=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&l!==null&&(s=l,o?(u=Mo(n,i),u!=null&&a.unshift(Vo(n,u,s))):o||(u=Mo(n,i),u!=null&&a.push(Vo(n,u,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Gv=/\r\n?/g,Kv=/\u0000|\uFFFD/g;function $d(e){return(typeof e=="string"?e:""+e).replace(Gv,`
`).replace(Kv,"")}function Ei(e,t,n){if(t=$d(t),$d(e)!==t&&n)throw Error(N(425))}function ca(){}var Fl=null,Bl=null;function Ul(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vl=typeof setTimeout=="function"?setTimeout:void 0,Qv=typeof clearTimeout=="function"?clearTimeout:void 0,Od=typeof Promise=="function"?Promise:void 0,Yv=typeof queueMicrotask=="function"?queueMicrotask:typeof Od<"u"?function(e){return Od.resolve(null).then(e).catch(qv)}:Vl;function qv(e){setTimeout(function(){throw e})}function Xs(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Do(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Do(t)}function En(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Rd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var eo=Math.random().toString(36).slice(2),Ht="__reactFiber$"+eo,Ho="__reactProps$"+eo,an="__reactContainer$"+eo,Hl="__reactEvents$"+eo,Xv="__reactListeners$"+eo,Jv="__reactHandles$"+eo;function Wn(e){var t=e[Ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[an]||n[Ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Rd(e);e!==null;){if(n=e[Ht])return n;e=Rd(e)}return t}e=n,n=e.parentNode}return null}function si(e){return e=e[Ht]||e[an],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function Va(e){return e[Ho]||null}var Wl=[],_r=-1;function Mn(e){return{current:e}}function ve(e){0>_r||(e.current=Wl[_r],Wl[_r]=null,_r--)}function pe(e,t){_r++,Wl[_r]=e.current,e.current=t}var An={},Ye=Mn(An),rt=Mn(!1),Xn=An;function Ur(e,t){var n=e.type.contextTypes;if(!n)return An;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ot(e){return e=e.childContextTypes,e!=null}function da(){ve(rt),ve(Ye)}function Ad(e,t,n){if(Ye.current!==An)throw Error(N(168));pe(Ye,t),pe(rt,n)}function Em(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(N(108,M0(e)||"Unknown",o));return be({},n,r)}function fa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||An,Xn=Ye.current,pe(Ye,e),pe(rt,rt.current),!0}function zd(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=Em(e,t,Xn),r.__reactInternalMemoizedMergedChildContext=e,ve(rt),ve(Ye),pe(Ye,e)):ve(rt),pe(rt,n)}var en=null,Ha=!1,Js=!1;function _m(e){en===null?en=[e]:en.push(e)}function Zv(e){Ha=!0,_m(e)}function Nn(){if(!Js&&en!==null){Js=!0;var e=0,t=ce;try{var n=en;for(ce=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}en=null,Ha=!1}catch(o){throw en!==null&&(en=en.slice(e+1)),Xp(Fu,Nn),o}finally{ce=t,Js=!1}}return null}var jr=[],Pr=0,pa=null,ma=0,yt=[],xt=0,Jn=null,tn=1,nn="";function Bn(e,t){jr[Pr++]=ma,jr[Pr++]=pa,pa=e,ma=t}function jm(e,t,n){yt[xt++]=tn,yt[xt++]=nn,yt[xt++]=Jn,Jn=e;var r=tn;e=nn;var o=32-At(r)-1;r&=~(1<<o),n+=1;var i=32-At(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,tn=1<<32-At(t)+o|n<<o|r,nn=i+e}else tn=1<<i|n<<o|r,nn=e}function Yu(e){e.return!==null&&(Bn(e,1),jm(e,1,0))}function qu(e){for(;e===pa;)pa=jr[--Pr],jr[Pr]=null,ma=jr[--Pr],jr[Pr]=null;for(;e===Jn;)Jn=yt[--xt],yt[xt]=null,nn=yt[--xt],yt[xt]=null,tn=yt[--xt],yt[xt]=null}var ct=null,ut=null,xe=!1,Ot=null;function Pm(e,t){var n=kt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Id(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ct=e,ut=En(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ct=e,ut=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Jn!==null?{id:tn,overflow:nn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=kt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ct=e,ut=null,!0):!1;default:return!1}}function Gl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Kl(e){if(xe){var t=ut;if(t){var n=t;if(!Id(e,t)){if(Gl(e))throw Error(N(418));t=En(n.nextSibling);var r=ct;t&&Id(e,t)?Pm(r,n):(e.flags=e.flags&-4097|2,xe=!1,ct=e)}}else{if(Gl(e))throw Error(N(418));e.flags=e.flags&-4097|2,xe=!1,ct=e}}}function Md(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ct=e}function _i(e){if(e!==ct)return!1;if(!xe)return Md(e),xe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ul(e.type,e.memoizedProps)),t&&(t=ut)){if(Gl(e))throw Tm(),Error(N(418));for(;t;)Pm(e,t),t=En(t.nextSibling)}if(Md(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ut=En(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ut=null}}else ut=ct?En(e.stateNode.nextSibling):null;return!0}function Tm(){for(var e=ut;e;)e=En(e.nextSibling)}function Vr(){ut=ct=null,xe=!1}function Xu(e){Ot===null?Ot=[e]:Ot.push(e)}var e1=dn.ReactCurrentBatchConfig;function Tt(e,t){if(e&&e.defaultProps){t=be({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ha=Mn(null),ga=null,Tr=null,Ju=null;function Zu(){Ju=Tr=ga=null}function ec(e){var t=ha.current;ve(ha),e._currentValue=t}function Ql(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Nr(e,t){ga=e,Ju=Tr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(nt=!0),e.firstContext=null)}function St(e){var t=e._currentValue;if(Ju!==e)if(e={context:e,memoizedValue:t,next:null},Tr===null){if(ga===null)throw Error(N(308));Tr=e,ga.dependencies={lanes:0,firstContext:e}}else Tr=Tr.next=e;return t}var Gn=null;function tc(e){Gn===null?Gn=[e]:Gn.push(e)}function $m(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,tc(t)):(n.next=o.next,o.next=n),t.interleaved=n,sn(e,r)}function sn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var gn=!1;function nc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Om(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function rn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _n(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,sn(e,n)}return o=r.interleaved,o===null?(t.next=t,tc(r)):(t.next=o.next,o.next=t),r.interleaved=t,sn(e,n)}function Vi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bu(e,n)}}function Nd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function va(e,t,n,r){var o=e.updateQueue;gn=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,l=u.next;u.next=null,a===null?i=l:a.next=l,a=u;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==a&&(s===null?c.firstBaseUpdate=l:s.next=l,c.lastBaseUpdate=u))}if(i!==null){var d=o.baseState;a=0,c=l=u=null,s=i;do{var f=s.lane,m=s.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:m,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,v=s;switch(f=t,m=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){d=g.call(m,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,f=typeof g=="function"?g.call(m,d,f):g,f==null)break e;d=be({},d,f);break e;case 2:gn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[s]:f.push(s))}else m={eventTime:m,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(l=c=m,u=d):c=c.next=m,a|=f;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;f=s,s=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(!0);if(c===null&&(u=d),o.baseState=u,o.firstBaseUpdate=l,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);er|=a,e.lanes=a,e.memoizedState=d}}function Ld(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(N(191,o));o.call(r)}}}var Rm=new $p.Component().refs;function Yl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:be({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Wa={isMounted:function(e){return(e=e._reactInternals)?ir(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Je(),o=Pn(e),i=rn(r,o);i.payload=t,n!=null&&(i.callback=n),t=_n(e,i,o),t!==null&&(zt(t,e,o,r),Vi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Je(),o=Pn(e),i=rn(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=_n(e,i,o),t!==null&&(zt(t,e,o,r),Vi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Je(),r=Pn(e),o=rn(n,r);o.tag=2,t!=null&&(o.callback=t),t=_n(e,o,r),t!==null&&(zt(t,e,r,n),Vi(t,e,r))}};function Dd(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Bo(n,r)||!Bo(o,i):!0}function Am(e,t,n){var r=!1,o=An,i=t.contextType;return typeof i=="object"&&i!==null?i=St(i):(o=ot(t)?Xn:Ye.current,r=t.contextTypes,i=(r=r!=null)?Ur(e,o):An),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Wa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Fd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Wa.enqueueReplaceState(t,t.state,null)}function ql(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Rm,nc(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=St(i):(i=ot(t)?Xn:Ye.current,o.context=Ur(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Yl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Wa.enqueueReplaceState(o,o.state,null),va(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function co(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=o.refs;s===Rm&&(s=o.refs={}),a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function ji(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Bd(e){var t=e._init;return t(e._payload)}function zm(e){function t(h,p){if(e){var y=h.deletions;y===null?(h.deletions=[p],h.flags|=16):y.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function o(h,p){return h=Tn(h,p),h.index=0,h.sibling=null,h}function i(h,p,y){return h.index=y,e?(y=h.alternate,y!==null?(y=y.index,y<p?(h.flags|=2,p):y):(h.flags|=2,p)):(h.flags|=1048576,p)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,p,y,k){return p===null||p.tag!==6?(p=il(y,h.mode,k),p.return=h,p):(p=o(p,y),p.return=h,p)}function u(h,p,y,k){var b=y.type;return b===kr?c(h,p,y.props.children,k,y.key):p!==null&&(p.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===hn&&Bd(b)===p.type)?(k=o(p,y.props),k.ref=co(h,p,y),k.return=h,k):(k=Yi(y.type,y.key,y.props,null,h.mode,k),k.ref=co(h,p,y),k.return=h,k)}function l(h,p,y,k){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=al(y,h.mode,k),p.return=h,p):(p=o(p,y.children||[]),p.return=h,p)}function c(h,p,y,k,b){return p===null||p.tag!==7?(p=qn(y,h.mode,k,b),p.return=h,p):(p=o(p,y),p.return=h,p)}function d(h,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=il(""+p,h.mode,y),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case gi:return y=Yi(p.type,p.key,p.props,null,h.mode,y),y.ref=co(h,null,p),y.return=h,y;case wr:return p=al(p,h.mode,y),p.return=h,p;case hn:var k=p._init;return d(h,k(p._payload),y)}if(yo(p)||io(p))return p=qn(p,h.mode,y,null),p.return=h,p;ji(h,p)}return null}function f(h,p,y,k){var b=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return b!==null?null:s(h,p,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case gi:return y.key===b?u(h,p,y,k):null;case wr:return y.key===b?l(h,p,y,k):null;case hn:return b=y._init,f(h,p,b(y._payload),k)}if(yo(y)||io(y))return b!==null?null:c(h,p,y,k,null);ji(h,y)}return null}function m(h,p,y,k,b){if(typeof k=="string"&&k!==""||typeof k=="number")return h=h.get(y)||null,s(p,h,""+k,b);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case gi:return h=h.get(k.key===null?y:k.key)||null,u(p,h,k,b);case wr:return h=h.get(k.key===null?y:k.key)||null,l(p,h,k,b);case hn:var _=k._init;return m(h,p,y,_(k._payload),b)}if(yo(k)||io(k))return h=h.get(y)||null,c(p,h,k,b,null);ji(p,k)}return null}function g(h,p,y,k){for(var b=null,_=null,E=p,T=p=0,L=null;E!==null&&T<y.length;T++){E.index>T?(L=E,E=null):L=E.sibling;var R=f(h,E,y[T],k);if(R===null){E===null&&(E=L);break}e&&E&&R.alternate===null&&t(h,E),p=i(R,p,T),_===null?b=R:_.sibling=R,_=R,E=L}if(T===y.length)return n(h,E),xe&&Bn(h,T),b;if(E===null){for(;T<y.length;T++)E=d(h,y[T],k),E!==null&&(p=i(E,p,T),_===null?b=E:_.sibling=E,_=E);return xe&&Bn(h,T),b}for(E=r(h,E);T<y.length;T++)L=m(E,h,T,y[T],k),L!==null&&(e&&L.alternate!==null&&E.delete(L.key===null?T:L.key),p=i(L,p,T),_===null?b=L:_.sibling=L,_=L);return e&&E.forEach(function(I){return t(h,I)}),xe&&Bn(h,T),b}function v(h,p,y,k){var b=io(y);if(typeof b!="function")throw Error(N(150));if(y=b.call(y),y==null)throw Error(N(151));for(var _=b=null,E=p,T=p=0,L=null,R=y.next();E!==null&&!R.done;T++,R=y.next()){E.index>T?(L=E,E=null):L=E.sibling;var I=f(h,E,R.value,k);if(I===null){E===null&&(E=L);break}e&&E&&I.alternate===null&&t(h,E),p=i(I,p,T),_===null?b=I:_.sibling=I,_=I,E=L}if(R.done)return n(h,E),xe&&Bn(h,T),b;if(E===null){for(;!R.done;T++,R=y.next())R=d(h,R.value,k),R!==null&&(p=i(R,p,T),_===null?b=R:_.sibling=R,_=R);return xe&&Bn(h,T),b}for(E=r(h,E);!R.done;T++,R=y.next())R=m(E,h,T,R.value,k),R!==null&&(e&&R.alternate!==null&&E.delete(R.key===null?T:R.key),p=i(R,p,T),_===null?b=R:_.sibling=R,_=R);return e&&E.forEach(function(D){return t(h,D)}),xe&&Bn(h,T),b}function w(h,p,y,k){if(typeof y=="object"&&y!==null&&y.type===kr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case gi:e:{for(var b=y.key,_=p;_!==null;){if(_.key===b){if(b=y.type,b===kr){if(_.tag===7){n(h,_.sibling),p=o(_,y.props.children),p.return=h,h=p;break e}}else if(_.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===hn&&Bd(b)===_.type){n(h,_.sibling),p=o(_,y.props),p.ref=co(h,_,y),p.return=h,h=p;break e}n(h,_);break}else t(h,_);_=_.sibling}y.type===kr?(p=qn(y.props.children,h.mode,k,y.key),p.return=h,h=p):(k=Yi(y.type,y.key,y.props,null,h.mode,k),k.ref=co(h,p,y),k.return=h,h=k)}return a(h);case wr:e:{for(_=y.key;p!==null;){if(p.key===_)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(h,p.sibling),p=o(p,y.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=al(y,h.mode,k),p.return=h,h=p}return a(h);case hn:return _=y._init,w(h,p,_(y._payload),k)}if(yo(y))return g(h,p,y,k);if(io(y))return v(h,p,y,k);ji(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(h,p.sibling),p=o(p,y),p.return=h,h=p):(n(h,p),p=il(y,h.mode,k),p.return=h,h=p),a(h)):n(h,p)}return w}var Hr=zm(!0),Im=zm(!1),li={},Gt=Mn(li),Wo=Mn(li),Go=Mn(li);function Kn(e){if(e===li)throw Error(N(174));return e}function rc(e,t){switch(pe(Go,t),pe(Wo,e),pe(Gt,li),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Pl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Pl(t,e)}ve(Gt),pe(Gt,t)}function Wr(){ve(Gt),ve(Wo),ve(Go)}function Mm(e){Kn(Go.current);var t=Kn(Gt.current),n=Pl(t,e.type);t!==n&&(pe(Wo,e),pe(Gt,n))}function oc(e){Wo.current===e&&(ve(Gt),ve(Wo))}var we=Mn(0);function ya(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zs=[];function ic(){for(var e=0;e<Zs.length;e++)Zs[e]._workInProgressVersionPrimary=null;Zs.length=0}var Hi=dn.ReactCurrentDispatcher,el=dn.ReactCurrentBatchConfig,Zn=0,ke=null,Ie=null,Le=null,xa=!1,jo=!1,Ko=0,t1=0;function We(){throw Error(N(321))}function ac(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Nt(e[n],t[n]))return!1;return!0}function sc(e,t,n,r,o,i){if(Zn=i,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Hi.current=e===null||e.memoizedState===null?i1:a1,e=n(r,o),jo){i=0;do{if(jo=!1,Ko=0,25<=i)throw Error(N(301));i+=1,Le=Ie=null,t.updateQueue=null,Hi.current=s1,e=n(r,o)}while(jo)}if(Hi.current=wa,t=Ie!==null&&Ie.next!==null,Zn=0,Le=Ie=ke=null,xa=!1,t)throw Error(N(300));return e}function lc(){var e=Ko!==0;return Ko=0,e}function Bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?ke.memoizedState=Le=e:Le=Le.next=e,Le}function Ct(){if(Ie===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var t=Le===null?ke.memoizedState:Le.next;if(t!==null)Le=t,Ie=e;else{if(e===null)throw Error(N(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},Le===null?ke.memoizedState=Le=e:Le=Le.next=e}return Le}function Qo(e,t){return typeof t=="function"?t(e):t}function tl(e){var t=Ct(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=Ie,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=a=null,u=null,l=i;do{var c=l.lane;if((Zn&c)===c)u!==null&&(u=u.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),r=l.hasEagerState?l.eagerState:e(r,l.action);else{var d={lane:c,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};u===null?(s=u=d,a=r):u=u.next=d,ke.lanes|=c,er|=c}l=l.next}while(l!==null&&l!==i);u===null?a=r:u.next=s,Nt(r,t.memoizedState)||(nt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ke.lanes|=i,er|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function nl(e){var t=Ct(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Nt(i,t.memoizedState)||(nt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Nm(){}function Lm(e,t){var n=ke,r=Ct(),o=t(),i=!Nt(r.memoizedState,o);if(i&&(r.memoizedState=o,nt=!0),r=r.queue,uc(Bm.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,Yo(9,Fm.bind(null,n,r,o,t),void 0,null),De===null)throw Error(N(349));Zn&30||Dm(n,t,o)}return o}function Dm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fm(e,t,n,r){t.value=n,t.getSnapshot=r,Um(t)&&Vm(e)}function Bm(e,t,n){return n(function(){Um(t)&&Vm(e)})}function Um(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Nt(e,n)}catch{return!0}}function Vm(e){var t=sn(e,1);t!==null&&zt(t,e,1,-1)}function Ud(e){var t=Bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qo,lastRenderedState:e},t.queue=e,e=e.dispatch=o1.bind(null,ke,e),[t.memoizedState,e]}function Yo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Hm(){return Ct().memoizedState}function Wi(e,t,n,r){var o=Bt();ke.flags|=e,o.memoizedState=Yo(1|t,n,void 0,r===void 0?null:r)}function Ga(e,t,n,r){var o=Ct();r=r===void 0?null:r;var i=void 0;if(Ie!==null){var a=Ie.memoizedState;if(i=a.destroy,r!==null&&ac(r,a.deps)){o.memoizedState=Yo(t,n,i,r);return}}ke.flags|=e,o.memoizedState=Yo(1|t,n,i,r)}function Vd(e,t){return Wi(8390656,8,e,t)}function uc(e,t){return Ga(2048,8,e,t)}function Wm(e,t){return Ga(4,2,e,t)}function Gm(e,t){return Ga(4,4,e,t)}function Km(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qm(e,t,n){return n=n!=null?n.concat([e]):null,Ga(4,4,Km.bind(null,t,e),n)}function cc(){}function Ym(e,t){var n=Ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ac(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function qm(e,t){var n=Ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ac(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Xm(e,t,n){return Zn&21?(Nt(n,t)||(n=em(),ke.lanes|=n,er|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,nt=!0),e.memoizedState=n)}function n1(e,t){var n=ce;ce=n!==0&&4>n?n:4,e(!0);var r=el.transition;el.transition={};try{e(!1),t()}finally{ce=n,el.transition=r}}function Jm(){return Ct().memoizedState}function r1(e,t,n){var r=Pn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Zm(e))eh(t,n);else if(n=$m(e,t,n,r),n!==null){var o=Je();zt(n,e,r,o),th(n,t,r)}}function o1(e,t,n){var r=Pn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zm(e))eh(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,Nt(s,a)){var u=t.interleaved;u===null?(o.next=o,tc(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=$m(e,t,o,r),n!==null&&(o=Je(),zt(n,e,r,o),th(n,t,r))}}function Zm(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function eh(e,t){jo=xa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function th(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bu(e,n)}}var wa={readContext:St,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},i1={readContext:St,useCallback:function(e,t){return Bt().memoizedState=[e,t===void 0?null:t],e},useContext:St,useEffect:Vd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Wi(4194308,4,Km.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wi(4,2,e,t)},useMemo:function(e,t){var n=Bt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Bt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=r1.bind(null,ke,e),[r.memoizedState,e]},useRef:function(e){var t=Bt();return e={current:e},t.memoizedState=e},useState:Ud,useDebugValue:cc,useDeferredValue:function(e){return Bt().memoizedState=e},useTransition:function(){var e=Ud(!1),t=e[0];return e=n1.bind(null,e[1]),Bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ke,o=Bt();if(xe){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),De===null)throw Error(N(349));Zn&30||Dm(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Vd(Bm.bind(null,r,i,e),[e]),r.flags|=2048,Yo(9,Fm.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Bt(),t=De.identifierPrefix;if(xe){var n=nn,r=tn;n=(r&~(1<<32-At(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ko++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=t1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},a1={readContext:St,useCallback:Ym,useContext:St,useEffect:uc,useImperativeHandle:Qm,useInsertionEffect:Wm,useLayoutEffect:Gm,useMemo:qm,useReducer:tl,useRef:Hm,useState:function(){return tl(Qo)},useDebugValue:cc,useDeferredValue:function(e){var t=Ct();return Xm(t,Ie.memoizedState,e)},useTransition:function(){var e=tl(Qo)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:Nm,useSyncExternalStore:Lm,useId:Jm,unstable_isNewReconciler:!1},s1={readContext:St,useCallback:Ym,useContext:St,useEffect:uc,useImperativeHandle:Qm,useInsertionEffect:Wm,useLayoutEffect:Gm,useMemo:qm,useReducer:nl,useRef:Hm,useState:function(){return nl(Qo)},useDebugValue:cc,useDeferredValue:function(e){var t=Ct();return Ie===null?t.memoizedState=e:Xm(t,Ie.memoizedState,e)},useTransition:function(){var e=nl(Qo)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:Nm,useSyncExternalStore:Lm,useId:Jm,unstable_isNewReconciler:!1};function Gr(e,t){try{var n="",r=t;do n+=I0(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function rl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Xl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var l1=typeof WeakMap=="function"?WeakMap:Map;function nh(e,t,n){n=rn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ba||(ba=!0,su=r),Xl(e,t)},n}function rh(e,t,n){n=rn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Xl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Xl(e,t),typeof r!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Hd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new l1;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=b1.bind(null,e,t,n),t.then(e,e))}function Wd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gd(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=rn(-1,1),t.tag=2,_n(n,t,1))),n.lanes|=1),e)}var u1=dn.ReactCurrentOwner,nt=!1;function Xe(e,t,n,r){t.child=e===null?Im(t,null,n,r):Hr(t,e.child,n,r)}function Kd(e,t,n,r,o){n=n.render;var i=t.ref;return Nr(t,o),r=sc(e,t,n,r,i,o),n=lc(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ln(e,t,o)):(xe&&n&&Yu(t),t.flags|=1,Xe(e,t,r,o),t.child)}function Qd(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!yc(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,oh(e,t,i,r,o)):(e=Yi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Bo,n(a,r)&&e.ref===t.ref)return ln(e,t,o)}return t.flags|=1,e=Tn(i,r),e.ref=t.ref,e.return=t,t.child=e}function oh(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Bo(i,r)&&e.ref===t.ref)if(nt=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(nt=!0);else return t.lanes=e.lanes,ln(e,t,o)}return Jl(e,t,n,r,o)}function ih(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(Or,st),st|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,pe(Or,st),st|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,pe(Or,st),st|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,pe(Or,st),st|=r;return Xe(e,t,o,n),t.child}function ah(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Jl(e,t,n,r,o){var i=ot(n)?Xn:Ye.current;return i=Ur(t,i),Nr(t,o),n=sc(e,t,n,r,i,o),r=lc(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ln(e,t,o)):(xe&&r&&Yu(t),t.flags|=1,Xe(e,t,n,o),t.child)}function Yd(e,t,n,r,o){if(ot(n)){var i=!0;fa(t)}else i=!1;if(Nr(t,o),t.stateNode===null)Gi(e,t),Am(t,n,r),ql(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,l=n.contextType;typeof l=="object"&&l!==null?l=St(l):(l=ot(n)?Xn:Ye.current,l=Ur(t,l));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||u!==l)&&Fd(t,a,r,l),gn=!1;var f=t.memoizedState;a.state=f,va(t,r,a,o),u=t.memoizedState,s!==r||f!==u||rt.current||gn?(typeof c=="function"&&(Yl(t,n,c,r),u=t.memoizedState),(s=gn||Dd(t,n,s,r,f,u,l))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=l,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Om(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:Tt(t.type,s),a.props=l,d=t.pendingProps,f=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=St(u):(u=ot(n)?Xn:Ye.current,u=Ur(t,u));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==d||f!==u)&&Fd(t,a,r,u),gn=!1,f=t.memoizedState,a.state=f,va(t,r,a,o);var g=t.memoizedState;s!==d||f!==g||rt.current||gn?(typeof m=="function"&&(Yl(t,n,m,r),g=t.memoizedState),(l=gn||Dd(t,n,l,r,f,g,u)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=u,r=l):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Zl(e,t,n,r,i,o)}function Zl(e,t,n,r,o,i){ah(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&zd(t,n,!1),ln(e,t,i);r=t.stateNode,u1.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Hr(t,e.child,null,i),t.child=Hr(t,null,s,i)):Xe(e,t,s,i),t.memoizedState=r.state,o&&zd(t,n,!0),t.child}function sh(e){var t=e.stateNode;t.pendingContext?Ad(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ad(e,t.context,!1),rc(e,t.containerInfo)}function qd(e,t,n,r,o){return Vr(),Xu(o),t.flags|=256,Xe(e,t,n,r),t.child}var eu={dehydrated:null,treeContext:null,retryLane:0};function tu(e){return{baseLanes:e,cachePool:null,transitions:null}}function lh(e,t,n){var r=t.pendingProps,o=we.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),pe(we,o&1),e===null)return Kl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Ya(a,r,0,null),e=qn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=tu(n),t.memoizedState=eu,e):dc(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return c1(e,t,a,r,s,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Tn(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Tn(s,i):(i=qn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?tu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=eu,r}return i=e.child,e=i.sibling,r=Tn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function dc(e,t){return t=Ya({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Pi(e,t,n,r){return r!==null&&Xu(r),Hr(t,e.child,null,n),e=dc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function c1(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=rl(Error(N(422))),Pi(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Ya({mode:"visible",children:r.children},o,0,null),i=qn(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Hr(t,e.child,null,a),t.child.memoizedState=tu(a),t.memoizedState=eu,i);if(!(t.mode&1))return Pi(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(N(419)),r=rl(i,r,void 0),Pi(e,t,a,r)}if(s=(a&e.childLanes)!==0,nt||s){if(r=De,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,sn(e,o),zt(r,e,o,-1))}return vc(),r=rl(Error(N(421))),Pi(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=S1.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,ut=En(o.nextSibling),ct=t,xe=!0,Ot=null,e!==null&&(yt[xt++]=tn,yt[xt++]=nn,yt[xt++]=Jn,tn=e.id,nn=e.overflow,Jn=t),t=dc(t,r.children),t.flags|=4096,t)}function Xd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ql(e.return,t,n)}function ol(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function uh(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Xe(e,t,r.children,n),r=we.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xd(e,n,t);else if(e.tag===19)Xd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(pe(we,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ya(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ol(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ya(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ol(t,!0,n,null,i);break;case"together":ol(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Gi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ln(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),er|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=Tn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Tn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function d1(e,t,n){switch(t.tag){case 3:sh(t),Vr();break;case 5:Mm(t);break;case 1:ot(t.type)&&fa(t);break;case 4:rc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;pe(ha,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(pe(we,we.current&1),t.flags|=128,null):n&t.child.childLanes?lh(e,t,n):(pe(we,we.current&1),e=ln(e,t,n),e!==null?e.sibling:null);pe(we,we.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return uh(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),pe(we,we.current),r)break;return null;case 22:case 23:return t.lanes=0,ih(e,t,n)}return ln(e,t,n)}var ch,nu,dh,fh;ch=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nu=function(){};dh=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Kn(Gt.current);var i=null;switch(n){case"input":o=Cl(e,o),r=Cl(e,r),i=[];break;case"select":o=be({},o,{value:void 0}),r=be({},r,{value:void 0}),i=[];break;case"textarea":o=jl(e,o),r=jl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ca)}Tl(n,r);var a;n=null;for(l in o)if(!r.hasOwnProperty(l)&&o.hasOwnProperty(l)&&o[l]!=null)if(l==="style"){var s=o[l];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(zo.hasOwnProperty(l)?i||(i=[]):(i=i||[]).push(l,null));for(l in r){var u=r[l];if(s=o!=null?o[l]:void 0,r.hasOwnProperty(l)&&u!==s&&(u!=null||s!=null))if(l==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(i||(i=[]),i.push(l,n)),n=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(l,u)):l==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(zo.hasOwnProperty(l)?(u!=null&&l==="onScroll"&&ge("scroll",e),i||s===u||(i=[])):(i=i||[]).push(l,u))}n&&(i=i||[]).push("style",n);var l=i;(t.updateQueue=l)&&(t.flags|=4)}};fh=function(e,t,n,r){n!==r&&(t.flags|=4)};function fo(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function f1(e,t,n){var r=t.pendingProps;switch(qu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(t),null;case 1:return ot(t.type)&&da(),Ge(t),null;case 3:return r=t.stateNode,Wr(),ve(rt),ve(Ye),ic(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_i(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ot!==null&&(cu(Ot),Ot=null))),nu(e,t),Ge(t),null;case 5:oc(t);var o=Kn(Go.current);if(n=t.type,e!==null&&t.stateNode!=null)dh(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return Ge(t),null}if(e=Kn(Gt.current),_i(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ht]=t,r[Ho]=i,e=(t.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(o=0;o<wo.length;o++)ge(wo[o],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":ad(r,i),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ge("invalid",r);break;case"textarea":ld(r,i),ge("invalid",r)}Tl(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Ei(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Ei(r.textContent,s,e),o=["children",""+s]):zo.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ge("scroll",r)}switch(n){case"input":vi(r),sd(r,i,!0);break;case"textarea":vi(r),ud(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ca)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Dp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ht]=t,e[Ho]=r,ch(e,t,!1,!1),t.stateNode=e;e:{switch(a=$l(n,r),n){case"dialog":ge("cancel",e),ge("close",e),o=r;break;case"iframe":case"object":case"embed":ge("load",e),o=r;break;case"video":case"audio":for(o=0;o<wo.length;o++)ge(wo[o],e);o=r;break;case"source":ge("error",e),o=r;break;case"img":case"image":case"link":ge("error",e),ge("load",e),o=r;break;case"details":ge("toggle",e),o=r;break;case"input":ad(e,r),o=Cl(e,r),ge("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=be({},r,{value:void 0}),ge("invalid",e);break;case"textarea":ld(e,r),o=jl(e,r),ge("invalid",e);break;default:o=r}Tl(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?Up(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Fp(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Io(e,u):typeof u=="number"&&Io(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(zo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&ge("scroll",e):u!=null&&Iu(e,i,u,a))}switch(n){case"input":vi(e),sd(e,r,!1);break;case"textarea":vi(e),ud(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Rn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Ar(e,!!r.multiple,i,!1):r.defaultValue!=null&&Ar(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ca)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ge(t),null;case 6:if(e&&t.stateNode!=null)fh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=Kn(Go.current),Kn(Gt.current),_i(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ht]=t,(i=r.nodeValue!==n)&&(e=ct,e!==null))switch(e.tag){case 3:Ei(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ei(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ht]=t,t.stateNode=r}return Ge(t),null;case 13:if(ve(we),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(xe&&ut!==null&&t.mode&1&&!(t.flags&128))Tm(),Vr(),t.flags|=98560,i=!1;else if(i=_i(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(N(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(N(317));i[Ht]=t}else Vr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ge(t),i=!1}else Ot!==null&&(cu(Ot),Ot=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||we.current&1?Me===0&&(Me=3):vc())),t.updateQueue!==null&&(t.flags|=4),Ge(t),null);case 4:return Wr(),nu(e,t),e===null&&Uo(t.stateNode.containerInfo),Ge(t),null;case 10:return ec(t.type._context),Ge(t),null;case 17:return ot(t.type)&&da(),Ge(t),null;case 19:if(ve(we),i=t.memoizedState,i===null)return Ge(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)fo(i,!1);else{if(Me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ya(e),a!==null){for(t.flags|=128,fo(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return pe(we,we.current&1|2),t.child}e=e.sibling}i.tail!==null&&Pe()>Kr&&(t.flags|=128,r=!0,fo(i,!1),t.lanes=4194304)}else{if(!r)if(e=ya(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!xe)return Ge(t),null}else 2*Pe()-i.renderingStartTime>Kr&&n!==1073741824&&(t.flags|=128,r=!0,fo(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Pe(),t.sibling=null,n=we.current,pe(we,r?n&1|2:n&1),t):(Ge(t),null);case 22:case 23:return gc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?st&1073741824&&(Ge(t),t.subtreeFlags&6&&(t.flags|=8192)):Ge(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function p1(e,t){switch(qu(t),t.tag){case 1:return ot(t.type)&&da(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wr(),ve(rt),ve(Ye),ic(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return oc(t),null;case 13:if(ve(we),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));Vr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ve(we),null;case 4:return Wr(),null;case 10:return ec(t.type._context),null;case 22:case 23:return gc(),null;case 24:return null;default:return null}}var Ti=!1,Qe=!1,m1=typeof WeakSet=="function"?WeakSet:Set,K=null;function $r(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){_e(e,t,r)}else n.current=null}function ru(e,t,n){try{n()}catch(r){_e(e,t,r)}}var Jd=!1;function h1(e,t){if(Fl=sa,e=gm(),Qu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,u=-1,l=0,c=0,d=e,f=null;t:for(;;){for(var m;d!==n||o!==0&&d.nodeType!==3||(s=a+o),d!==i||r!==0&&d.nodeType!==3||(u=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===e)break t;if(f===n&&++l===o&&(s=a),f===i&&++c===r&&(u=a),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bl={focusedElem:e,selectionRange:n},sa=!1,K=t;K!==null;)if(t=K,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,K=e;else for(;K!==null;){t=K;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,w=g.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?v:Tt(t.type,v),w);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(k){_e(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,K=e;break}K=t.return}return g=Jd,Jd=!1,g}function Po(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ru(t,n,i)}o=o.next}while(o!==r)}}function Ka(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ou(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ph(e){var t=e.alternate;t!==null&&(e.alternate=null,ph(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ht],delete t[Ho],delete t[Hl],delete t[Xv],delete t[Jv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mh(e){return e.tag===5||e.tag===3||e.tag===4}function Zd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function iu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ca));else if(r!==4&&(e=e.child,e!==null))for(iu(e,t,n),e=e.sibling;e!==null;)iu(e,t,n),e=e.sibling}function au(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(au(e,t,n),e=e.sibling;e!==null;)au(e,t,n),e=e.sibling}var Be=null,$t=!1;function mn(e,t,n){for(n=n.child;n!==null;)hh(e,t,n),n=n.sibling}function hh(e,t,n){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(Da,n)}catch{}switch(n.tag){case 5:Qe||$r(n,t);case 6:var r=Be,o=$t;Be=null,mn(e,t,n),Be=r,$t=o,Be!==null&&($t?(e=Be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&($t?(e=Be,n=n.stateNode,e.nodeType===8?Xs(e.parentNode,n):e.nodeType===1&&Xs(e,n),Do(e)):Xs(Be,n.stateNode));break;case 4:r=Be,o=$t,Be=n.stateNode.containerInfo,$t=!0,mn(e,t,n),Be=r,$t=o;break;case 0:case 11:case 14:case 15:if(!Qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&ru(n,t,a),o=o.next}while(o!==r)}mn(e,t,n);break;case 1:if(!Qe&&($r(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){_e(n,t,s)}mn(e,t,n);break;case 21:mn(e,t,n);break;case 22:n.mode&1?(Qe=(r=Qe)||n.memoizedState!==null,mn(e,t,n),Qe=r):mn(e,t,n);break;default:mn(e,t,n)}}function ef(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new m1),t.forEach(function(r){var o=C1.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Pt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Be=s.stateNode,$t=!1;break e;case 3:Be=s.stateNode.containerInfo,$t=!0;break e;case 4:Be=s.stateNode.containerInfo,$t=!0;break e}s=s.return}if(Be===null)throw Error(N(160));hh(i,a,o),Be=null,$t=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(l){_e(o,t,l)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)gh(t,e),t=t.sibling}function gh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pt(t,e),Ft(e),r&4){try{Po(3,e,e.return),Ka(3,e)}catch(v){_e(e,e.return,v)}try{Po(5,e,e.return)}catch(v){_e(e,e.return,v)}}break;case 1:Pt(t,e),Ft(e),r&512&&n!==null&&$r(n,n.return);break;case 5:if(Pt(t,e),Ft(e),r&512&&n!==null&&$r(n,n.return),e.flags&32){var o=e.stateNode;try{Io(o,"")}catch(v){_e(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Np(o,i),$l(s,a);var l=$l(s,i);for(a=0;a<u.length;a+=2){var c=u[a],d=u[a+1];c==="style"?Up(o,d):c==="dangerouslySetInnerHTML"?Fp(o,d):c==="children"?Io(o,d):Iu(o,c,d,l)}switch(s){case"input":El(o,i);break;case"textarea":Lp(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var m=i.value;m!=null?Ar(o,!!i.multiple,m,!1):f!==!!i.multiple&&(i.defaultValue!=null?Ar(o,!!i.multiple,i.defaultValue,!0):Ar(o,!!i.multiple,i.multiple?[]:"",!1))}o[Ho]=i}catch(v){_e(e,e.return,v)}}break;case 6:if(Pt(t,e),Ft(e),r&4){if(e.stateNode===null)throw Error(N(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(v){_e(e,e.return,v)}}break;case 3:if(Pt(t,e),Ft(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Do(t.containerInfo)}catch(v){_e(e,e.return,v)}break;case 4:Pt(t,e),Ft(e);break;case 13:Pt(t,e),Ft(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(mc=Pe())),r&4&&ef(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Qe=(l=Qe)||c,Pt(t,e),Qe=l):Pt(t,e),Ft(e),r&8192){if(l=e.memoizedState!==null,(e.stateNode.isHidden=l)&&!c&&e.mode&1)for(K=e,c=e.child;c!==null;){for(d=K=c;K!==null;){switch(f=K,m=f.child,f.tag){case 0:case 11:case 14:case 15:Po(4,f,f.return);break;case 1:$r(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(v){_e(r,n,v)}}break;case 5:$r(f,f.return);break;case 22:if(f.memoizedState!==null){nf(d);continue}}m!==null?(m.return=f,K=m):nf(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{o=d.stateNode,l?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=d.stateNode,u=d.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Bp("display",a))}catch(v){_e(e,e.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=l?"":d.memoizedProps}catch(v){_e(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Pt(t,e),Ft(e),r&4&&ef(e);break;case 21:break;default:Pt(t,e),Ft(e)}}function Ft(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(mh(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Io(o,""),r.flags&=-33);var i=Zd(e);au(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Zd(e);iu(e,s,a);break;default:throw Error(N(161))}}catch(u){_e(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function g1(e,t,n){K=e,vh(e)}function vh(e,t,n){for(var r=(e.mode&1)!==0;K!==null;){var o=K,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Ti;if(!a){var s=o.alternate,u=s!==null&&s.memoizedState!==null||Qe;s=Ti;var l=Qe;if(Ti=a,(Qe=u)&&!l)for(K=o;K!==null;)a=K,u=a.child,a.tag===22&&a.memoizedState!==null?rf(o):u!==null?(u.return=a,K=u):rf(o);for(;i!==null;)K=i,vh(i),i=i.sibling;K=o,Ti=s,Qe=l}tf(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,K=i):tf(e)}}function tf(e){for(;K!==null;){var t=K;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Qe||Ka(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Qe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Tt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ld(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ld(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var l=t.alternate;if(l!==null){var c=l.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Do(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}Qe||t.flags&512&&ou(t)}catch(f){_e(t,t.return,f)}}if(t===e){K=null;break}if(n=t.sibling,n!==null){n.return=t.return,K=n;break}K=t.return}}function nf(e){for(;K!==null;){var t=K;if(t===e){K=null;break}var n=t.sibling;if(n!==null){n.return=t.return,K=n;break}K=t.return}}function rf(e){for(;K!==null;){var t=K;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ka(4,t)}catch(u){_e(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){_e(t,o,u)}}var i=t.return;try{ou(t)}catch(u){_e(t,i,u)}break;case 5:var a=t.return;try{ou(t)}catch(u){_e(t,a,u)}}}catch(u){_e(t,t.return,u)}if(t===e){K=null;break}var s=t.sibling;if(s!==null){s.return=t.return,K=s;break}K=t.return}}var v1=Math.ceil,ka=dn.ReactCurrentDispatcher,fc=dn.ReactCurrentOwner,bt=dn.ReactCurrentBatchConfig,ie=0,De=null,Ae=null,Ve=0,st=0,Or=Mn(0),Me=0,qo=null,er=0,Qa=0,pc=0,To=null,tt=null,mc=0,Kr=1/0,Zt=null,ba=!1,su=null,jn=null,$i=!1,kn=null,Sa=0,$o=0,lu=null,Ki=-1,Qi=0;function Je(){return ie&6?Pe():Ki!==-1?Ki:Ki=Pe()}function Pn(e){return e.mode&1?ie&2&&Ve!==0?Ve&-Ve:e1.transition!==null?(Qi===0&&(Qi=em()),Qi):(e=ce,e!==0||(e=window.event,e=e===void 0?16:sm(e.type)),e):1}function zt(e,t,n,r){if(50<$o)throw $o=0,lu=null,Error(N(185));ii(e,n,r),(!(ie&2)||e!==De)&&(e===De&&(!(ie&2)&&(Qa|=n),Me===4&&yn(e,Ve)),it(e,r),n===1&&ie===0&&!(t.mode&1)&&(Kr=Pe()+500,Ha&&Nn()))}function it(e,t){var n=e.callbackNode;ev(e,t);var r=aa(e,e===De?Ve:0);if(r===0)n!==null&&fd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&fd(n),t===1)e.tag===0?Zv(of.bind(null,e)):_m(of.bind(null,e)),Yv(function(){!(ie&6)&&Nn()}),n=null;else{switch(tm(r)){case 1:n=Fu;break;case 4:n=Jp;break;case 16:n=ia;break;case 536870912:n=Zp;break;default:n=ia}n=Eh(n,yh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function yh(e,t){if(Ki=-1,Qi=0,ie&6)throw Error(N(327));var n=e.callbackNode;if(Lr()&&e.callbackNode!==n)return null;var r=aa(e,e===De?Ve:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ca(e,r);else{t=r;var o=ie;ie|=2;var i=wh();(De!==e||Ve!==t)&&(Zt=null,Kr=Pe()+500,Yn(e,t));do try{w1();break}catch(s){xh(e,s)}while(!0);Zu(),ka.current=i,ie=o,Ae!==null?t=0:(De=null,Ve=0,t=Me)}if(t!==0){if(t===2&&(o=Il(e),o!==0&&(r=o,t=uu(e,o))),t===1)throw n=qo,Yn(e,0),yn(e,r),it(e,Pe()),n;if(t===6)yn(e,r);else{if(o=e.current.alternate,!(r&30)&&!y1(o)&&(t=Ca(e,r),t===2&&(i=Il(e),i!==0&&(r=i,t=uu(e,i))),t===1))throw n=qo,Yn(e,0),yn(e,r),it(e,Pe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:Un(e,tt,Zt);break;case 3:if(yn(e,r),(r&130023424)===r&&(t=mc+500-Pe(),10<t)){if(aa(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Je(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Vl(Un.bind(null,e,tt,Zt),t);break}Un(e,tt,Zt);break;case 4:if(yn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-At(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*v1(r/1960))-r,10<r){e.timeoutHandle=Vl(Un.bind(null,e,tt,Zt),r);break}Un(e,tt,Zt);break;case 5:Un(e,tt,Zt);break;default:throw Error(N(329))}}}return it(e,Pe()),e.callbackNode===n?yh.bind(null,e):null}function uu(e,t){var n=To;return e.current.memoizedState.isDehydrated&&(Yn(e,t).flags|=256),e=Ca(e,t),e!==2&&(t=tt,tt=n,t!==null&&cu(t)),e}function cu(e){tt===null?tt=e:tt.push.apply(tt,e)}function y1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Nt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yn(e,t){for(t&=~pc,t&=~Qa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-At(t),r=1<<n;e[n]=-1,t&=~r}}function of(e){if(ie&6)throw Error(N(327));Lr();var t=aa(e,0);if(!(t&1))return it(e,Pe()),null;var n=Ca(e,t);if(e.tag!==0&&n===2){var r=Il(e);r!==0&&(t=r,n=uu(e,r))}if(n===1)throw n=qo,Yn(e,0),yn(e,t),it(e,Pe()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Un(e,tt,Zt),it(e,Pe()),null}function hc(e,t){var n=ie;ie|=1;try{return e(t)}finally{ie=n,ie===0&&(Kr=Pe()+500,Ha&&Nn())}}function tr(e){kn!==null&&kn.tag===0&&!(ie&6)&&Lr();var t=ie;ie|=1;var n=bt.transition,r=ce;try{if(bt.transition=null,ce=1,e)return e()}finally{ce=r,bt.transition=n,ie=t,!(ie&6)&&Nn()}}function gc(){st=Or.current,ve(Or)}function Yn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Qv(n)),Ae!==null)for(n=Ae.return;n!==null;){var r=n;switch(qu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&da();break;case 3:Wr(),ve(rt),ve(Ye),ic();break;case 5:oc(r);break;case 4:Wr();break;case 13:ve(we);break;case 19:ve(we);break;case 10:ec(r.type._context);break;case 22:case 23:gc()}n=n.return}if(De=e,Ae=e=Tn(e.current,null),Ve=st=t,Me=0,qo=null,pc=Qa=er=0,tt=To=null,Gn!==null){for(t=0;t<Gn.length;t++)if(n=Gn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}Gn=null}return e}function xh(e,t){do{var n=Ae;try{if(Zu(),Hi.current=wa,xa){for(var r=ke.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}xa=!1}if(Zn=0,Le=Ie=ke=null,jo=!1,Ko=0,fc.current=null,n===null||n.return===null){Me=1,qo=t,Ae=null;break}e:{var i=e,a=n.return,s=n,u=t;if(t=Ve,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var l=u,c=s,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Wd(a);if(m!==null){m.flags&=-257,Gd(m,a,s,i,t),m.mode&1&&Hd(i,l,t),t=m,u=l;var g=t.updateQueue;if(g===null){var v=new Set;v.add(u),t.updateQueue=v}else g.add(u);break e}else{if(!(t&1)){Hd(i,l,t),vc();break e}u=Error(N(426))}}else if(xe&&s.mode&1){var w=Wd(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Gd(w,a,s,i,t),Xu(Gr(u,s));break e}}i=u=Gr(u,s),Me!==4&&(Me=2),To===null?To=[i]:To.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=nh(i,u,t);Nd(i,h);break e;case 1:s=u;var p=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(jn===null||!jn.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=rh(i,s,t);Nd(i,k);break e}}i=i.return}while(i!==null)}bh(n)}catch(b){t=b,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(!0)}function wh(){var e=ka.current;return ka.current=wa,e===null?wa:e}function vc(){(Me===0||Me===3||Me===2)&&(Me=4),De===null||!(er&268435455)&&!(Qa&268435455)||yn(De,Ve)}function Ca(e,t){var n=ie;ie|=2;var r=wh();(De!==e||Ve!==t)&&(Zt=null,Yn(e,t));do try{x1();break}catch(o){xh(e,o)}while(!0);if(Zu(),ie=n,ka.current=r,Ae!==null)throw Error(N(261));return De=null,Ve=0,Me}function x1(){for(;Ae!==null;)kh(Ae)}function w1(){for(;Ae!==null&&!W0();)kh(Ae)}function kh(e){var t=Ch(e.alternate,e,st);e.memoizedProps=e.pendingProps,t===null?bh(e):Ae=t,fc.current=null}function bh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=p1(n,t),n!==null){n.flags&=32767,Ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,Ae=null;return}}else if(n=f1(n,t,st),n!==null){Ae=n;return}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);Me===0&&(Me=5)}function Un(e,t,n){var r=ce,o=bt.transition;try{bt.transition=null,ce=1,k1(e,t,n,r)}finally{bt.transition=o,ce=r}return null}function k1(e,t,n,r){do Lr();while(kn!==null);if(ie&6)throw Error(N(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(tv(e,i),e===De&&(Ae=De=null,Ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$i||($i=!0,Eh(ia,function(){return Lr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=bt.transition,bt.transition=null;var a=ce;ce=1;var s=ie;ie|=4,fc.current=null,h1(e,n),gh(n,e),Bv(Bl),sa=!!Fl,Bl=Fl=null,e.current=n,g1(n),G0(),ie=s,ce=a,bt.transition=i}else e.current=n;if($i&&($i=!1,kn=e,Sa=o),i=e.pendingLanes,i===0&&(jn=null),Y0(n.stateNode),it(e,Pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ba)throw ba=!1,e=su,su=null,e;return Sa&1&&e.tag!==0&&Lr(),i=e.pendingLanes,i&1?e===lu?$o++:($o=0,lu=e):$o=0,Nn(),null}function Lr(){if(kn!==null){var e=tm(Sa),t=bt.transition,n=ce;try{if(bt.transition=null,ce=16>e?16:e,kn===null)var r=!1;else{if(e=kn,kn=null,Sa=0,ie&6)throw Error(N(331));var o=ie;for(ie|=4,K=e.current;K!==null;){var i=K,a=i.child;if(K.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var l=s[u];for(K=l;K!==null;){var c=K;switch(c.tag){case 0:case 11:case 15:Po(8,c,i)}var d=c.child;if(d!==null)d.return=c,K=d;else for(;K!==null;){c=K;var f=c.sibling,m=c.return;if(ph(c),c===l){K=null;break}if(f!==null){f.return=m,K=f;break}K=m}}}var g=i.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}K=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,K=a;else e:for(;K!==null;){if(i=K,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Po(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,K=h;break e}K=i.return}}var p=e.current;for(K=p;K!==null;){a=K;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,K=y;else e:for(a=p;K!==null;){if(s=K,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ka(9,s)}}catch(b){_e(s,s.return,b)}if(s===a){K=null;break e}var k=s.sibling;if(k!==null){k.return=s.return,K=k;break e}K=s.return}}if(ie=o,Nn(),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(Da,e)}catch{}r=!0}return r}finally{ce=n,bt.transition=t}}return!1}function af(e,t,n){t=Gr(n,t),t=nh(e,t,1),e=_n(e,t,1),t=Je(),e!==null&&(ii(e,1,t),it(e,t))}function _e(e,t,n){if(e.tag===3)af(e,e,n);else for(;t!==null;){if(t.tag===3){af(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jn===null||!jn.has(r))){e=Gr(n,e),e=rh(t,e,1),t=_n(t,e,1),e=Je(),t!==null&&(ii(t,1,e),it(t,e));break}}t=t.return}}function b1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Je(),e.pingedLanes|=e.suspendedLanes&n,De===e&&(Ve&n)===n&&(Me===4||Me===3&&(Ve&130023424)===Ve&&500>Pe()-mc?Yn(e,0):pc|=n),it(e,t)}function Sh(e,t){t===0&&(e.mode&1?(t=wi,wi<<=1,!(wi&130023424)&&(wi=4194304)):t=1);var n=Je();e=sn(e,t),e!==null&&(ii(e,t,n),it(e,n))}function S1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Sh(e,n)}function C1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),Sh(e,n)}var Ch;Ch=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||rt.current)nt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return nt=!1,d1(e,t,n);nt=!!(e.flags&131072)}else nt=!1,xe&&t.flags&1048576&&jm(t,ma,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Gi(e,t),e=t.pendingProps;var o=Ur(t,Ye.current);Nr(t,n),o=sc(null,t,r,e,o,n);var i=lc();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ot(r)?(i=!0,fa(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,nc(t),o.updater=Wa,t.stateNode=o,o._reactInternals=t,ql(t,r,e,n),t=Zl(null,t,r,!0,i,n)):(t.tag=0,xe&&i&&Yu(t),Xe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Gi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=_1(r),e=Tt(r,e),o){case 0:t=Jl(null,t,r,e,n);break e;case 1:t=Yd(null,t,r,e,n);break e;case 11:t=Kd(null,t,r,e,n);break e;case 14:t=Qd(null,t,r,Tt(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Tt(r,o),Jl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Tt(r,o),Yd(e,t,r,o,n);case 3:e:{if(sh(t),e===null)throw Error(N(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Om(e,t),va(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Gr(Error(N(423)),t),t=qd(e,t,r,n,o);break e}else if(r!==o){o=Gr(Error(N(424)),t),t=qd(e,t,r,n,o);break e}else for(ut=En(t.stateNode.containerInfo.firstChild),ct=t,xe=!0,Ot=null,n=Im(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vr(),r===o){t=ln(e,t,n);break e}Xe(e,t,r,n)}t=t.child}return t;case 5:return Mm(t),e===null&&Kl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Ul(r,o)?a=null:i!==null&&Ul(r,i)&&(t.flags|=32),ah(e,t),Xe(e,t,a,n),t.child;case 6:return e===null&&Kl(t),null;case 13:return lh(e,t,n);case 4:return rc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Hr(t,null,r,n):Xe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Tt(r,o),Kd(e,t,r,o,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,pe(ha,r._currentValue),r._currentValue=a,i!==null)if(Nt(i.value,a)){if(i.children===o.children&&!rt.current){t=ln(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=rn(-1,n&-n),u.tag=2;var l=i.updateQueue;if(l!==null){l=l.shared;var c=l.pending;c===null?u.next=u:(u.next=c.next,c.next=u),l.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ql(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(N(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Ql(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Xe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Nr(t,n),o=St(o),r=r(o),t.flags|=1,Xe(e,t,r,n),t.child;case 14:return r=t.type,o=Tt(r,t.pendingProps),o=Tt(r.type,o),Qd(e,t,r,o,n);case 15:return oh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Tt(r,o),Gi(e,t),t.tag=1,ot(r)?(e=!0,fa(t)):e=!1,Nr(t,n),Am(t,r,o),ql(t,r,o,n),Zl(null,t,r,!0,e,n);case 19:return uh(e,t,n);case 22:return ih(e,t,n)}throw Error(N(156,t.tag))};function Eh(e,t){return Xp(e,t)}function E1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(e,t,n,r){return new E1(e,t,n,r)}function yc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _1(e){if(typeof e=="function")return yc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Nu)return 11;if(e===Lu)return 14}return 2}function Tn(e,t){var n=e.alternate;return n===null?(n=kt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Yi(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")yc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case kr:return qn(n.children,o,i,t);case Mu:a=8,o|=8;break;case wl:return e=kt(12,n,t,o|2),e.elementType=wl,e.lanes=i,e;case kl:return e=kt(13,n,t,o),e.elementType=kl,e.lanes=i,e;case bl:return e=kt(19,n,t,o),e.elementType=bl,e.lanes=i,e;case zp:return Ya(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Rp:a=10;break e;case Ap:a=9;break e;case Nu:a=11;break e;case Lu:a=14;break e;case hn:a=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=kt(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function qn(e,t,n,r){return e=kt(7,e,r,t),e.lanes=n,e}function Ya(e,t,n,r){return e=kt(22,e,r,t),e.elementType=zp,e.lanes=n,e.stateNode={isHidden:!1},e}function il(e,t,n){return e=kt(6,e,null,t),e.lanes=n,e}function al(e,t,n){return t=kt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function j1(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fs(0),this.expirationTimes=Fs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fs(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function xc(e,t,n,r,o,i,a,s,u){return e=new j1(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=kt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nc(i),e}function P1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function _h(e){if(!e)return An;e=e._reactInternals;e:{if(ir(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ot(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(ot(n))return Em(e,n,t)}return t}function jh(e,t,n,r,o,i,a,s,u){return e=xc(n,r,!0,e,o,i,a,s,u),e.context=_h(null),n=e.current,r=Je(),o=Pn(n),i=rn(r,o),i.callback=t??null,_n(n,i,o),e.current.lanes=o,ii(e,o,r),it(e,r),e}function qa(e,t,n,r){var o=t.current,i=Je(),a=Pn(o);return n=_h(n),t.context===null?t.context=n:t.pendingContext=n,t=rn(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=_n(o,t,a),e!==null&&(zt(e,o,a,i),Vi(e,o,a)),a}function Ea(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function wc(e,t){sf(e,t),(e=e.alternate)&&sf(e,t)}function T1(){return null}var Ph=typeof reportError=="function"?reportError:function(e){console.error(e)};function kc(e){this._internalRoot=e}Xa.prototype.render=kc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));qa(e,t,null,null)};Xa.prototype.unmount=kc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;tr(function(){qa(null,e,null,null)}),t[an]=null}};function Xa(e){this._internalRoot=e}Xa.prototype.unstable_scheduleHydration=function(e){if(e){var t=om();e={blockedOn:null,target:e,priority:t};for(var n=0;n<vn.length&&t!==0&&t<vn[n].priority;n++);vn.splice(n,0,e),n===0&&am(e)}};function bc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ja(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function lf(){}function $1(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var l=Ea(a);i.call(l)}}var a=jh(t,r,e,0,null,!1,!1,"",lf);return e._reactRootContainer=a,e[an]=a.current,Uo(e.nodeType===8?e.parentNode:e),tr(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var l=Ea(u);s.call(l)}}var u=xc(e,0,!1,null,null,!1,!1,"",lf);return e._reactRootContainer=u,e[an]=u.current,Uo(e.nodeType===8?e.parentNode:e),tr(function(){qa(t,u,n,r)}),u}function Za(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var u=Ea(a);s.call(u)}}qa(t,a,e,o)}else a=$1(n,t,e,o,r);return Ea(a)}nm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=xo(t.pendingLanes);n!==0&&(Bu(t,n|1),it(t,Pe()),!(ie&6)&&(Kr=Pe()+500,Nn()))}break;case 13:tr(function(){var r=sn(e,1);if(r!==null){var o=Je();zt(r,e,1,o)}}),wc(e,1)}};Uu=function(e){if(e.tag===13){var t=sn(e,134217728);if(t!==null){var n=Je();zt(t,e,134217728,n)}wc(e,134217728)}};rm=function(e){if(e.tag===13){var t=Pn(e),n=sn(e,t);if(n!==null){var r=Je();zt(n,e,t,r)}wc(e,t)}};om=function(){return ce};im=function(e,t){var n=ce;try{return ce=e,t()}finally{ce=n}};Rl=function(e,t,n){switch(t){case"input":if(El(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Va(r);if(!o)throw Error(N(90));Mp(r),El(r,o)}}}break;case"textarea":Lp(e,n);break;case"select":t=n.value,t!=null&&Ar(e,!!n.multiple,t,!1)}};Wp=hc;Gp=tr;var O1={usingClientEntryPoint:!1,Events:[si,Er,Va,Vp,Hp,hc]},po={findFiberByHostInstance:Wn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},R1={bundleType:po.bundleType,version:po.version,rendererPackageName:po.rendererPackageName,rendererConfig:po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Yp(e),e===null?null:e.stateNode},findFiberByHostInstance:po.findFiberByHostInstance||T1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oi.isDisabled&&Oi.supportsFiber)try{Da=Oi.inject(R1),Wt=Oi}catch{}}pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O1;pt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bc(t))throw Error(N(200));return P1(e,t,null,n)};pt.createRoot=function(e,t){if(!bc(e))throw Error(N(299));var n=!1,r="",o=Ph;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=xc(e,1,!1,null,null,n,!1,r,o),e[an]=t.current,Uo(e.nodeType===8?e.parentNode:e),new kc(t)};pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Yp(t),e=e===null?null:e.stateNode,e};pt.flushSync=function(e){return tr(e)};pt.hydrate=function(e,t,n){if(!Ja(t))throw Error(N(200));return Za(null,e,t,!0,n)};pt.hydrateRoot=function(e,t,n){if(!bc(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=Ph;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=jh(t,null,e,1,n??null,o,!1,i,a),e[an]=t.current,Uo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Xa(t)};pt.render=function(e,t,n){if(!Ja(t))throw Error(N(200));return Za(null,e,t,!1,n)};pt.unmountComponentAtNode=function(e){if(!Ja(e))throw Error(N(40));return e._reactRootContainer?(tr(function(){Za(null,null,e,!1,function(){e._reactRootContainer=null,e[an]=null})}),!0):!1};pt.unstable_batchedUpdates=hc;pt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ja(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Za(e,t,n,!1,r)};pt.version="18.2.0-next-9e3b772b8-20220608";function Th(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Th)}catch(e){console.error(e)}}Th(),jp.exports=pt;var Sc=jp.exports;const Ri=Na(Sc);var uf=Sc;yl.createRoot=uf.createRoot,yl.hydrateRoot=uf.hydrateRoot;var $h={exports:{}},de={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cc=Symbol.for("react.element"),Ec=Symbol.for("react.portal"),es=Symbol.for("react.fragment"),ts=Symbol.for("react.strict_mode"),ns=Symbol.for("react.profiler"),rs=Symbol.for("react.provider"),os=Symbol.for("react.context"),A1=Symbol.for("react.server_context"),is=Symbol.for("react.forward_ref"),as=Symbol.for("react.suspense"),ss=Symbol.for("react.suspense_list"),ls=Symbol.for("react.memo"),us=Symbol.for("react.lazy"),z1=Symbol.for("react.offscreen"),Oh;Oh=Symbol.for("react.module.reference");function _t(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Cc:switch(e=e.type,e){case es:case ns:case ts:case as:case ss:return e;default:switch(e=e&&e.$$typeof,e){case A1:case os:case is:case us:case ls:case rs:return e;default:return t}}case Ec:return t}}}de.ContextConsumer=os;de.ContextProvider=rs;de.Element=Cc;de.ForwardRef=is;de.Fragment=es;de.Lazy=us;de.Memo=ls;de.Portal=Ec;de.Profiler=ns;de.StrictMode=ts;de.Suspense=as;de.SuspenseList=ss;de.isAsyncMode=function(){return!1};de.isConcurrentMode=function(){return!1};de.isContextConsumer=function(e){return _t(e)===os};de.isContextProvider=function(e){return _t(e)===rs};de.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Cc};de.isForwardRef=function(e){return _t(e)===is};de.isFragment=function(e){return _t(e)===es};de.isLazy=function(e){return _t(e)===us};de.isMemo=function(e){return _t(e)===ls};de.isPortal=function(e){return _t(e)===Ec};de.isProfiler=function(e){return _t(e)===ns};de.isStrictMode=function(e){return _t(e)===ts};de.isSuspense=function(e){return _t(e)===as};de.isSuspenseList=function(e){return _t(e)===ss};de.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===es||e===ns||e===ts||e===as||e===ss||e===z1||typeof e=="object"&&e!==null&&(e.$$typeof===us||e.$$typeof===ls||e.$$typeof===rs||e.$$typeof===os||e.$$typeof===is||e.$$typeof===Oh||e.getModuleId!==void 0)};de.typeOf=_t;$h.exports=de;var _a=$h.exports;function I1(e){function t($,B,C,J,S){for(var Q=0,M=0,ne=0,q=0,te,Z,ue=0,me=0,oe,Se=oe=te=0,ae=0,Oe=0,Dn=0,ze=0,Fn=C.length,Jt=Fn-1,qe,ee="",he="",pn="",dr="",Dt;ae<Fn;){if(Z=C.charCodeAt(ae),ae===Jt&&M+q+ne+Q!==0&&(M!==0&&(Z=M===47?10:47),q=ne=Q=0,Fn++,Jt++),M+q+ne+Q===0){if(ae===Jt&&(0<Oe&&(ee=ee.replace(f,"")),0<ee.trim().length)){switch(Z){case 32:case 9:case 59:case 13:case 10:break;default:ee+=C.charAt(ae)}Z=59}switch(Z){case 123:for(ee=ee.trim(),te=ee.charCodeAt(0),oe=1,ze=++ae;ae<Fn;){switch(Z=C.charCodeAt(ae)){case 123:oe++;break;case 125:oe--;break;case 47:switch(Z=C.charCodeAt(ae+1)){case 42:case 47:e:{for(Se=ae+1;Se<Jt;++Se)switch(C.charCodeAt(Se)){case 47:if(Z===42&&C.charCodeAt(Se-1)===42&&ae+2!==Se){ae=Se+1;break e}break;case 10:if(Z===47){ae=Se+1;break e}}ae=Se}}break;case 91:Z++;case 40:Z++;case 34:case 39:for(;ae++<Jt&&C.charCodeAt(ae)!==Z;);}if(oe===0)break;ae++}switch(oe=C.substring(ze,ae),te===0&&(te=(ee=ee.replace(d,"").trim()).charCodeAt(0)),te){case 64:switch(0<Oe&&(ee=ee.replace(f,"")),Z=ee.charCodeAt(1),Z){case 100:case 109:case 115:case 45:Oe=B;break;default:Oe=F}if(oe=t(B,Oe,oe,Z,S+1),ze=oe.length,0<A&&(Oe=n(F,ee,Dn),Dt=s(3,oe,Oe,B,W,D,ze,Z,S,J),ee=Oe.join(""),Dt!==void 0&&(ze=(oe=Dt.trim()).length)===0&&(Z=0,oe="")),0<ze)switch(Z){case 115:ee=ee.replace(_,a);case 100:case 109:case 45:oe=ee+"{"+oe+"}";break;case 107:ee=ee.replace(p,"$1 $2"),oe=ee+"{"+oe+"}",oe=U===1||U===2&&i("@"+oe,3)?"@-webkit-"+oe+"@"+oe:"@"+oe;break;default:oe=ee+oe,J===112&&(oe=(he+=oe,""))}else oe="";break;default:oe=t(B,n(B,ee,Dn),oe,J,S+1)}pn+=oe,oe=Dn=Oe=Se=te=0,ee="",Z=C.charCodeAt(++ae);break;case 125:case 59:if(ee=(0<Oe?ee.replace(f,""):ee).trim(),1<(ze=ee.length))switch(Se===0&&(te=ee.charCodeAt(0),te===45||96<te&&123>te)&&(ze=(ee=ee.replace(" ",":")).length),0<A&&(Dt=s(1,ee,B,$,W,D,he.length,J,S,J))!==void 0&&(ze=(ee=Dt.trim()).length)===0&&(ee="\0\0"),te=ee.charCodeAt(0),Z=ee.charCodeAt(1),te){case 0:break;case 64:if(Z===105||Z===99){dr+=ee+C.charAt(ae);break}default:ee.charCodeAt(ze-1)!==58&&(he+=o(ee,te,Z,ee.charCodeAt(2)))}Dn=Oe=Se=te=0,ee="",Z=C.charCodeAt(++ae)}}switch(Z){case 13:case 10:M===47?M=0:1+te===0&&J!==107&&0<ee.length&&(Oe=1,ee+="\0"),0<A*O&&s(0,ee,B,$,W,D,he.length,J,S,J),D=1,W++;break;case 59:case 125:if(M+q+ne+Q===0){D++;break}default:switch(D++,qe=C.charAt(ae),Z){case 9:case 32:if(q+Q+M===0)switch(ue){case 44:case 58:case 9:case 32:qe="";break;default:Z!==32&&(qe=" ")}break;case 0:qe="\\0";break;case 12:qe="\\f";break;case 11:qe="\\v";break;case 38:q+M+Q===0&&(Oe=Dn=1,qe="\f"+qe);break;case 108:if(q+M+Q+H===0&&0<Se)switch(ae-Se){case 2:ue===112&&C.charCodeAt(ae-3)===58&&(H=ue);case 8:me===111&&(H=me)}break;case 58:q+M+Q===0&&(Se=ae);break;case 44:M+ne+q+Q===0&&(Oe=1,qe+="\r");break;case 34:case 39:M===0&&(q=q===Z?0:q===0?Z:q);break;case 91:q+M+ne===0&&Q++;break;case 93:q+M+ne===0&&Q--;break;case 41:q+M+Q===0&&ne--;break;case 40:if(q+M+Q===0){if(te===0)switch(2*ue+3*me){case 533:break;default:te=1}ne++}break;case 64:M+ne+q+Q+Se+oe===0&&(oe=1);break;case 42:case 47:if(!(0<q+Q+ne))switch(M){case 0:switch(2*Z+3*C.charCodeAt(ae+1)){case 235:M=47;break;case 220:ze=ae,M=42}break;case 42:Z===47&&ue===42&&ze+2!==ae&&(C.charCodeAt(ze+2)===33&&(he+=C.substring(ze,ae+1)),qe="",M=0)}}M===0&&(ee+=qe)}me=ue,ue=Z,ae++}if(ze=he.length,0<ze){if(Oe=B,0<A&&(Dt=s(2,he,Oe,$,W,D,ze,J,S,J),Dt!==void 0&&(he=Dt).length===0))return dr+he+pn;if(he=Oe.join(",")+"{"+he+"}",U*H!==0){switch(U!==2||i(he,2)||(H=0),H){case 111:he=he.replace(k,":-moz-$1")+he;break;case 112:he=he.replace(y,"::-webkit-input-$1")+he.replace(y,"::-moz-$1")+he.replace(y,":-ms-input-$1")+he}H=0}}return dr+he+pn}function n($,B,C){var J=B.trim().split(w);B=J;var S=J.length,Q=$.length;switch(Q){case 0:case 1:var M=0;for($=Q===0?"":$[0]+" ";M<S;++M)B[M]=r($,B[M],C).trim();break;default:var ne=M=0;for(B=[];M<S;++M)for(var q=0;q<Q;++q)B[ne++]=r($[q]+" ",J[M],C).trim()}return B}function r($,B,C){var J=B.charCodeAt(0);switch(33>J&&(J=(B=B.trim()).charCodeAt(0)),J){case 38:return B.replace(h,"$1"+$.trim());case 58:return $.trim()+B.replace(h,"$1"+$.trim());default:if(0<1*C&&0<B.indexOf("\f"))return B.replace(h,($.charCodeAt(0)===58?"":"$1")+$.trim())}return $+B}function o($,B,C,J){var S=$+";",Q=2*B+3*C+4*J;if(Q===944){$=S.indexOf(":",9)+1;var M=S.substring($,S.length-1).trim();return M=S.substring(0,$).trim()+M+";",U===1||U===2&&i(M,1)?"-webkit-"+M+M:M}if(U===0||U===2&&!i(S,1))return S;switch(Q){case 1015:return S.charCodeAt(10)===97?"-webkit-"+S+S:S;case 951:return S.charCodeAt(3)===116?"-webkit-"+S+S:S;case 963:return S.charCodeAt(5)===110?"-webkit-"+S+S:S;case 1009:if(S.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+S+S;case 978:return"-webkit-"+S+"-moz-"+S+S;case 1019:case 983:return"-webkit-"+S+"-moz-"+S+"-ms-"+S+S;case 883:if(S.charCodeAt(8)===45)return"-webkit-"+S+S;if(0<S.indexOf("image-set(",11))return S.replace(I,"$1-webkit-$2")+S;break;case 932:if(S.charCodeAt(4)===45)switch(S.charCodeAt(5)){case 103:return"-webkit-box-"+S.replace("-grow","")+"-webkit-"+S+"-ms-"+S.replace("grow","positive")+S;case 115:return"-webkit-"+S+"-ms-"+S.replace("shrink","negative")+S;case 98:return"-webkit-"+S+"-ms-"+S.replace("basis","preferred-size")+S}return"-webkit-"+S+"-ms-"+S+S;case 964:return"-webkit-"+S+"-ms-flex-"+S+S;case 1023:if(S.charCodeAt(8)!==99)break;return M=S.substring(S.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+M+"-webkit-"+S+"-ms-flex-pack"+M+S;case 1005:return g.test(S)?S.replace(m,":-webkit-")+S.replace(m,":-moz-")+S:S;case 1e3:switch(M=S.substring(13).trim(),B=M.indexOf("-")+1,M.charCodeAt(0)+M.charCodeAt(B)){case 226:M=S.replace(b,"tb");break;case 232:M=S.replace(b,"tb-rl");break;case 220:M=S.replace(b,"lr");break;default:return S}return"-webkit-"+S+"-ms-"+M+S;case 1017:if(S.indexOf("sticky",9)===-1)break;case 975:switch(B=(S=$).length-10,M=(S.charCodeAt(B)===33?S.substring(0,B):S).substring($.indexOf(":",7)+1).trim(),Q=M.charCodeAt(0)+(M.charCodeAt(7)|0)){case 203:if(111>M.charCodeAt(8))break;case 115:S=S.replace(M,"-webkit-"+M)+";"+S;break;case 207:case 102:S=S.replace(M,"-webkit-"+(102<Q?"inline-":"")+"box")+";"+S.replace(M,"-webkit-"+M)+";"+S.replace(M,"-ms-"+M+"box")+";"+S}return S+";";case 938:if(S.charCodeAt(5)===45)switch(S.charCodeAt(6)){case 105:return M=S.replace("-items",""),"-webkit-"+S+"-webkit-box-"+M+"-ms-flex-"+M+S;case 115:return"-webkit-"+S+"-ms-flex-item-"+S.replace(T,"")+S;default:return"-webkit-"+S+"-ms-flex-line-pack"+S.replace("align-content","").replace(T,"")+S}break;case 973:case 989:if(S.charCodeAt(3)!==45||S.charCodeAt(4)===122)break;case 931:case 953:if(R.test($)===!0)return(M=$.substring($.indexOf(":")+1)).charCodeAt(0)===115?o($.replace("stretch","fill-available"),B,C,J).replace(":fill-available",":stretch"):S.replace(M,"-webkit-"+M)+S.replace(M,"-moz-"+M.replace("fill-",""))+S;break;case 962:if(S="-webkit-"+S+(S.charCodeAt(5)===102?"-ms-"+S:"")+S,C+J===211&&S.charCodeAt(13)===105&&0<S.indexOf("transform",10))return S.substring(0,S.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+S}return S}function i($,B){var C=$.indexOf(B===1?":":"{"),J=$.substring(0,B!==3?C:10);return C=$.substring(C+1,$.length-1),z(B!==2?J:J.replace(L,"$1"),C,B)}function a($,B){var C=o(B,B.charCodeAt(0),B.charCodeAt(1),B.charCodeAt(2));return C!==B+";"?C.replace(E," or ($1)").substring(4):"("+B+")"}function s($,B,C,J,S,Q,M,ne,q,te){for(var Z=0,ue=B,me;Z<A;++Z)switch(me=X[Z].call(c,$,ue,C,J,S,Q,M,ne,q,te)){case void 0:case!1:case!0:case null:break;default:ue=me}if(ue!==B)return ue}function u($){switch($){case void 0:case null:A=X.length=0;break;default:if(typeof $=="function")X[A++]=$;else if(typeof $=="object")for(var B=0,C=$.length;B<C;++B)u($[B]);else O=!!$|0}return u}function l($){return $=$.prefix,$!==void 0&&(z=null,$?typeof $!="function"?U=1:(U=2,z=$):U=0),l}function c($,B){var C=$;if(33>C.charCodeAt(0)&&(C=C.trim()),G=C,C=[G],0<A){var J=s(-1,B,C,C,W,D,0,0,0,0);J!==void 0&&typeof J=="string"&&(B=J)}var S=t(F,C,B,0,0);return 0<A&&(J=s(-2,S,C,C,W,D,S.length,0,0,0),J!==void 0&&(S=J)),G="",H=0,D=W=1,S}var d=/^\0+/g,f=/[\0\r\f]/g,m=/: */g,g=/zoo|gra/,v=/([,: ])(transform)/g,w=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,k=/:(read-only)/g,b=/[svh]\w+-[tblr]{2}/,_=/\(\s*(.*)\s*\)/g,E=/([\s\S]*?);/g,T=/-self|flex-/g,L=/[^]*?(:[rp][el]a[\w-]+)[^]*/,R=/stretch|:\s*\w+\-(?:conte|avail)/,I=/([^-])(image-set\()/,D=1,W=1,H=0,U=1,F=[],X=[],A=0,z=null,O=0,G="";return c.use=u,c.set=l,e!==void 0&&l(e),c}var M1={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Rh(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var N1=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,du=Rh(function(e){return N1.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Ah={exports:{}},fe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fe=typeof Symbol=="function"&&Symbol.for,_c=Fe?Symbol.for("react.element"):60103,jc=Fe?Symbol.for("react.portal"):60106,cs=Fe?Symbol.for("react.fragment"):60107,ds=Fe?Symbol.for("react.strict_mode"):60108,fs=Fe?Symbol.for("react.profiler"):60114,ps=Fe?Symbol.for("react.provider"):60109,ms=Fe?Symbol.for("react.context"):60110,Pc=Fe?Symbol.for("react.async_mode"):60111,hs=Fe?Symbol.for("react.concurrent_mode"):60111,gs=Fe?Symbol.for("react.forward_ref"):60112,vs=Fe?Symbol.for("react.suspense"):60113,L1=Fe?Symbol.for("react.suspense_list"):60120,ys=Fe?Symbol.for("react.memo"):60115,xs=Fe?Symbol.for("react.lazy"):60116,D1=Fe?Symbol.for("react.block"):60121,F1=Fe?Symbol.for("react.fundamental"):60117,B1=Fe?Symbol.for("react.responder"):60118,U1=Fe?Symbol.for("react.scope"):60119;function ht(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case _c:switch(e=e.type,e){case Pc:case hs:case cs:case fs:case ds:case vs:return e;default:switch(e=e&&e.$$typeof,e){case ms:case gs:case xs:case ys:case ps:return e;default:return t}}case jc:return t}}}function zh(e){return ht(e)===hs}fe.AsyncMode=Pc;fe.ConcurrentMode=hs;fe.ContextConsumer=ms;fe.ContextProvider=ps;fe.Element=_c;fe.ForwardRef=gs;fe.Fragment=cs;fe.Lazy=xs;fe.Memo=ys;fe.Portal=jc;fe.Profiler=fs;fe.StrictMode=ds;fe.Suspense=vs;fe.isAsyncMode=function(e){return zh(e)||ht(e)===Pc};fe.isConcurrentMode=zh;fe.isContextConsumer=function(e){return ht(e)===ms};fe.isContextProvider=function(e){return ht(e)===ps};fe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===_c};fe.isForwardRef=function(e){return ht(e)===gs};fe.isFragment=function(e){return ht(e)===cs};fe.isLazy=function(e){return ht(e)===xs};fe.isMemo=function(e){return ht(e)===ys};fe.isPortal=function(e){return ht(e)===jc};fe.isProfiler=function(e){return ht(e)===fs};fe.isStrictMode=function(e){return ht(e)===ds};fe.isSuspense=function(e){return ht(e)===vs};fe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===cs||e===hs||e===fs||e===ds||e===vs||e===L1||typeof e=="object"&&e!==null&&(e.$$typeof===xs||e.$$typeof===ys||e.$$typeof===ps||e.$$typeof===ms||e.$$typeof===gs||e.$$typeof===F1||e.$$typeof===B1||e.$$typeof===U1||e.$$typeof===D1)};fe.typeOf=ht;Ah.exports=fe;var V1=Ah.exports,Tc=V1,H1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},W1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},G1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ih={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$c={};$c[Tc.ForwardRef]=G1;$c[Tc.Memo]=Ih;function cf(e){return Tc.isMemo(e)?Ih:$c[e.$$typeof]||H1}var K1=Object.defineProperty,Q1=Object.getOwnPropertyNames,df=Object.getOwnPropertySymbols,Y1=Object.getOwnPropertyDescriptor,q1=Object.getPrototypeOf,ff=Object.prototype;function Mh(e,t,n){if(typeof t!="string"){if(ff){var r=q1(t);r&&r!==ff&&Mh(e,r,n)}var o=Q1(t);df&&(o=o.concat(df(t)));for(var i=cf(e),a=cf(t),s=0;s<o.length;++s){var u=o[s];if(!W1[u]&&!(n&&n[u])&&!(a&&a[u])&&!(i&&i[u])){var l=Y1(t,u);try{K1(e,u,l)}catch{}}}}return e}var X1=Mh;const J1=Na(X1);var gt={};function Rt(){return(Rt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var pf=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},fu=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!_a.typeOf(e)},ja=Object.freeze([]),$n=Object.freeze({});function Qr(e){return typeof e=="function"}function mf(e){return e.displayName||e.name||"Component"}function Oc(e){return e&&typeof e.styledComponentId=="string"}var Yr=typeof process<"u"&&gt!==void 0&&(gt.REACT_APP_SC_ATTR||gt.SC_ATTR)||"data-styled",Rc=typeof window<"u"&&"HTMLElement"in window,Z1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&gt!==void 0&&(gt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&gt.REACT_APP_SC_DISABLE_SPEEDY!==""?gt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&gt.REACT_APP_SC_DISABLE_SPEEDY:gt.SC_DISABLE_SPEEDY!==void 0&&gt.SC_DISABLE_SPEEDY!==""&&gt.SC_DISABLE_SPEEDY!=="false"&&gt.SC_DISABLE_SPEEDY)),ey={};function nr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var ty=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,a=i;n>=a;)(a<<=1)<0&&nr(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var s=i;s<a;s++)this.groupSizes[s]=0}for(var u=this.indexOfGroup(n+1),l=0,c=r.length;l<c;l++)this.tag.insertRule(u,r[l])&&(this.groupSizes[n]++,u++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r;this.groupSizes[n]=0;for(var a=o;a<i;a++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],i=this.indexOfGroup(n),a=i+o,s=i;s<a;s++)r+=this.tag.getRule(s)+`/*!sc*/
`;return r},e}(),qi=new Map,Pa=new Map,Oo=1,Ai=function(e){if(qi.has(e))return qi.get(e);for(;Pa.has(Oo);)Oo++;var t=Oo++;return qi.set(e,t),Pa.set(t,e),t},ny=function(e){return Pa.get(e)},ry=function(e,t){t>=Oo&&(Oo=t+1),qi.set(e,t),Pa.set(t,e)},oy="style["+Yr+'][data-styled-version="5.3.11"]',iy=new RegExp("^"+Yr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),ay=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},sy=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,i=n.length;o<i;o++){var a=n[o].trim();if(a){var s=a.match(iy);if(s){var u=0|parseInt(s[1],10),l=s[2];u!==0&&(ry(l,u),ay(e,l,s[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(a)}}},ly=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Nh=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){for(var u=s.childNodes,l=u.length;l>=0;l--){var c=u[l];if(c&&c.nodeType===1&&c.hasAttribute(Yr))return c}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Yr,"active"),r.setAttribute("data-styled-version","5.3.11");var a=ly();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},uy=function(){function e(n){var r=this.element=Nh(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,a=0,s=i.length;a<s;a++){var u=i[a];if(u.ownerNode===o)return u}nr(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),cy=function(){function e(n){var r=this.element=Nh(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),dy=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),hf=Rc,fy={isServer:!Rc,useCSSOMInjection:!Z1},Ta=function(){function e(n,r,o){n===void 0&&(n=$n),r===void 0&&(r={}),this.options=Rt({},fy,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&Rc&&hf&&(hf=!1,function(i){for(var a=document.querySelectorAll(oy),s=0,u=a.length;s<u;s++){var l=a[s];l&&l.getAttribute(Yr)!=="active"&&(sy(i,l),l.parentNode&&l.parentNode.removeChild(l))}}(this))}e.registerId=function(n){return Ai(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Rt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,i=r.useCSSOMInjection,a=r.target,n=o?new dy(a):i?new uy(a):new cy(a),new ty(n)));var n,r,o,i,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Ai(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(Ai(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Ai(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,i="",a=0;a<o;a++){var s=ny(a);if(s!==void 0){var u=n.names.get(s),l=r.getGroup(a);if(u&&l&&u.size){var c=Yr+".g"+a+'[id="'+s+'"]',d="";u!==void 0&&u.forEach(function(f){f.length>0&&(d+=f+",")}),i+=""+l+c+'{content:"'+d+`"}/*!sc*/
`}}}return i}(this)},e}(),py=/(a)(d)/gi,gf=function(e){return String.fromCharCode(e+(e>25?39:97))};function pu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=gf(t%52)+n;return(gf(t%52)+n).replace(py,"$1-$2")}var Rr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Lh=function(e){return Rr(5381,e)};function Dh(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Qr(n)&&!Oc(n))return!1}return!0}var my=Lh("5.3.11"),hy=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Dh(t),this.componentId=n,this.baseHash=Rr(my,n),this.baseStyle=r,Ta.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var a=rr(this.rules,t,n,r).join(""),s=pu(Rr(this.baseHash,a)>>>0);if(!n.hasNameForId(o,s)){var u=r(a,"."+s,void 0,o);n.insertRules(o,s,u)}i.push(s),this.staticRulesId=s}else{for(var l=this.rules.length,c=Rr(this.baseHash,r.hash),d="",f=0;f<l;f++){var m=this.rules[f];if(typeof m=="string")d+=m;else if(m){var g=rr(m,t,n,r),v=Array.isArray(g)?g.join(""):g;c=Rr(c,v+f),d+=v}}if(d){var w=pu(c>>>0);if(!n.hasNameForId(o,w)){var h=r(d,"."+w,void 0,o);n.insertRules(o,w,h)}i.push(w)}}return i.join(" ")},e}(),gy=/^\s*\/\/.*$/gm,vy=[":","[",".","#"];function yy(e){var t,n,r,o,i=e===void 0?$n:e,a=i.options,s=a===void 0?$n:a,u=i.plugins,l=u===void 0?ja:u,c=new I1(s),d=[],f=function(v){function w(h){if(h)try{v(h+"}")}catch{}}return function(h,p,y,k,b,_,E,T,L,R){switch(h){case 1:if(L===0&&p.charCodeAt(0)===64)return v(p+";"),"";break;case 2:if(T===0)return p+"/*|*/";break;case 3:switch(T){case 102:case 112:return v(y[0]+p),"";default:return p+(R===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(w)}}}(function(v){d.push(v)}),m=function(v,w,h){return w===0&&vy.indexOf(h[n.length])!==-1||h.match(o)?v:"."+t};function g(v,w,h,p){p===void 0&&(p="&");var y=v.replace(gy,""),k=w&&h?h+" "+w+" { "+y+" }":y;return t=p,n=w,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),c(h||!w?"":w,k)}return c.use([].concat(l,[function(v,w,h){v===2&&h.length&&h[0].lastIndexOf(n)>0&&(h[0]=h[0].replace(r,m))},f,function(v){if(v===-2){var w=d;return d=[],w}}])),g.hash=l.length?l.reduce(function(v,w){return w.name||nr(15),Rr(v,w.name)},5381).toString():"",g}var Fh=je.createContext();Fh.Consumer;var Bh=je.createContext(),xy=(Bh.Consumer,new Ta),mu=yy();function Uh(){return P.useContext(Fh)||xy}function Vh(){return P.useContext(Bh)||mu}var wy=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=mu);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.toString=function(){return nr(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=mu),this.name+t.hash},e}(),ky=/([A-Z])/,by=/([A-Z])/g,Sy=/^ms-/,Cy=function(e){return"-"+e.toLowerCase()};function vf(e){return ky.test(e)?e.replace(by,Cy).replace(Sy,"-ms-"):e}var yf=function(e){return e==null||e===!1||e===""};function rr(e,t,n,r){if(Array.isArray(e)){for(var o,i=[],a=0,s=e.length;a<s;a+=1)(o=rr(e[a],t,n,r))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(yf(e))return"";if(Oc(e))return"."+e.styledComponentId;if(Qr(e)){if(typeof(l=e)!="function"||l.prototype&&l.prototype.isReactComponent||!t)return e;var u=e(t);return rr(u,t,n,r)}var l;return e instanceof wy?n?(e.inject(n,r),e.getName(r)):e:fu(e)?function c(d,f){var m,g,v=[];for(var w in d)d.hasOwnProperty(w)&&!yf(d[w])&&(Array.isArray(d[w])&&d[w].isCss||Qr(d[w])?v.push(vf(w)+":",d[w],";"):fu(d[w])?v.push.apply(v,c(d[w],w)):v.push(vf(w)+": "+(m=w,(g=d[w])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||m in M1||m.startsWith("--")?String(g).trim():g+"px")+";"));return f?[f+" {"].concat(v,["}"]):v}(e):e.toString()}var xf=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Hh(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Qr(e)||fu(e)?xf(rr(pf(ja,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:xf(rr(pf(e,n)))}var Wh=function(e,t,n){return n===void 0&&(n=$n),e.theme!==n.theme&&e.theme||t||n.theme},Ey=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,_y=/(^-|-$)/g;function sl(e){return e.replace(Ey,"-").replace(_y,"")}var Gh=function(e){return pu(Lh(e)>>>0)};function zi(e){return typeof e=="string"&&!0}var hu=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},jy=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Py(e,t,n){var r=e[n];hu(t)&&hu(r)?Kh(r,t):e[n]=t}function Kh(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var a=i[o];if(hu(a))for(var s in a)jy(s)&&Py(e,a[s],s)}return e}var qr=je.createContext();qr.Consumer;function Ty(e){var t=P.useContext(qr),n=P.useMemo(function(){return function(r,o){if(!r)return nr(14);if(Qr(r)){var i=r(o);return i}return Array.isArray(r)||typeof r!="object"?nr(8):o?Rt({},o,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?je.createElement(qr.Provider,{value:n},e.children):null}var ll={};function Qh(e,t,n){var r=Oc(e),o=!zi(e),i=t.attrs,a=i===void 0?ja:i,s=t.componentId,u=s===void 0?function(p,y){var k=typeof p!="string"?"sc":sl(p);ll[k]=(ll[k]||0)+1;var b=k+"-"+Gh("5.3.11"+k+ll[k]);return y?y+"-"+b:b}(t.displayName,t.parentComponentId):s,l=t.displayName,c=l===void 0?function(p){return zi(p)?"styled."+p:"Styled("+mf(p)+")"}(e):l,d=t.displayName&&t.componentId?sl(t.displayName)+"-"+t.componentId:t.componentId||u,f=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,m=t.shouldForwardProp;r&&e.shouldForwardProp&&(m=t.shouldForwardProp?function(p,y,k){return e.shouldForwardProp(p,y,k)&&t.shouldForwardProp(p,y,k)}:e.shouldForwardProp);var g,v=new hy(n,d,r?e.componentStyle:void 0),w=v.isStatic&&a.length===0,h=function(p,y){return function(k,b,_,E){var T=k.attrs,L=k.componentStyle,R=k.defaultProps,I=k.foldedComponentIds,D=k.shouldForwardProp,W=k.styledComponentId,H=k.target,U=function(J,S,Q){J===void 0&&(J=$n);var M=Rt({},S,{theme:J}),ne={};return Q.forEach(function(q){var te,Z,ue,me=q;for(te in Qr(me)&&(me=me(M)),me)M[te]=ne[te]=te==="className"?(Z=ne[te],ue=me[te],Z&&ue?Z+" "+ue:Z||ue):me[te]}),[M,ne]}(Wh(b,P.useContext(qr),R)||$n,b,T),F=U[0],X=U[1],A=function(J,S,Q,M){var ne=Uh(),q=Vh(),te=S?J.generateAndInjectStyles($n,ne,q):J.generateAndInjectStyles(Q,ne,q);return te}(L,E,F),z=_,O=X.$as||b.$as||X.as||b.as||H,G=zi(O),$=X!==b?Rt({},b,{},X):b,B={};for(var C in $)C[0]!=="$"&&C!=="as"&&(C==="forwardedAs"?B.as=$[C]:(D?D(C,du,O):!G||du(C))&&(B[C]=$[C]));return b.style&&X.style!==b.style&&(B.style=Rt({},b.style,{},X.style)),B.className=Array.prototype.concat(I,W,A!==W?A:null,b.className,X.className).filter(Boolean).join(" "),B.ref=z,P.createElement(O,B)}(g,p,y,w)};return h.displayName=c,(g=je.forwardRef(h)).attrs=f,g.componentStyle=v,g.displayName=c,g.shouldForwardProp=m,g.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):ja,g.styledComponentId=d,g.target=r?e.target:e,g.withComponent=function(p){var y=t.componentId,k=function(_,E){if(_==null)return{};var T,L,R={},I=Object.keys(_);for(L=0;L<I.length;L++)T=I[L],E.indexOf(T)>=0||(R[T]=_[T]);return R}(t,["componentId"]),b=y&&y+"-"+(zi(p)?p:sl(mf(p)));return Qh(p,Rt({},k,{attrs:f,componentId:b}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?Kh({},e.defaultProps,p):p}}),Object.defineProperty(g,"toString",{value:function(){return"."+g.styledComponentId}}),o&&J1(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var j=function(e){return function t(n,r,o){if(o===void 0&&(o=$n),!_a.isValidElementType(r))return nr(1,String(r));var i=function(){return n(r,o,Hh.apply(void 0,arguments))};return i.withConfig=function(a){return t(n,r,Rt({},o,{},a))},i.attrs=function(a){return t(n,r,Rt({},o,{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},i}(Qh,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){j[e]=j(e)});var $y=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=Dh(n),Ta.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,o,i){var a=i(rr(this.rules,r,o,i).join(""),""),s=this.componentId+n;o.insertRules(s,s,a)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,o,i){n>2&&Ta.registerId(this.componentId+n),this.removeStyles(n,o),this.createStyles(n,r,o,i)},e}();function Oy(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Hh.apply(void 0,[e].concat(n)),i="sc-global-"+Gh(JSON.stringify(o)),a=new $y(o,i);function s(l){var c=Uh(),d=Vh(),f=P.useContext(qr),m=P.useRef(c.allocateGSInstance(i)).current;return c.server&&u(m,l,c,f,d),P.useLayoutEffect(function(){if(!c.server)return u(m,l,c,f,d),function(){return a.removeStyles(m,c)}},[m,l,c,f,d]),null}function u(l,c,d,f,m){if(a.isStatic)a.renderStyles(l,ey,d,m);else{var g=Rt({},c,{theme:Wh(c,f,s.defaultProps)});a.renderStyles(l,g,d,m)}}return je.memo(s)}var Ry=function(){return P.useContext(qr)};const Ay={bg:"#1C1C27",bgLight:"#1C1E27",primary:"#2aa889",text_primary:"#1bc099",text_matrix:"#00FF00",sub_text:"#FFFFFF",text_title:"#FFFFFF",text_secondary:"#b1b2b3",card_menu:"rgba(255,255,255)",card_menu_mobile:"rgba(255,255,255,0.8)",card:"#171721",button:"#854CE6",white:"#FFFFFF",black:"#000000",card_footer:"#FFFFFF"},zy={bg:"rgb(255,255,255,0.8)",bgLight:"#f0f0f0",primary:"#2aa889",text_matrix:"#00FF00",text_primary:"#111111",text_secondary:"#48494a",card:"#FFFFFF",card_menu:"rgba(0,0,0,0.8)",card_menu_mobile:"rgba(0,0,0,0.8)",button:"#5c5b5b",card_footer:"#000000"};/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xo(){return Xo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xo.apply(this,arguments)}var Qn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Qn||(Qn={}));const wf="popstate";function Iy(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:a,hash:s}=r.location;return gu("",{pathname:i,search:a,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:$a(o)}return Ny(t,n,null,e)}function It(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function My(){return Math.random().toString(36).substr(2,8)}function kf(e,t){return{usr:e.state,key:e.key,idx:t}}function gu(e,t,n,r){return n===void 0&&(n=null),Xo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ws(t):t,{state:n,key:t&&t.key||r||My()})}function $a(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ws(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ny(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,s=Qn.Pop,u=null,l=c();l==null&&(l=0,a.replaceState(Xo({},a.state,{idx:l}),""));function c(){return(a.state||{idx:null}).idx}function d(){s=Qn.Pop;let w=c(),h=w==null?null:w-l;l=w,u&&u({action:s,location:v.location,delta:h})}function f(w,h){s=Qn.Push;let p=gu(v.location,w,h);n&&n(p,w),l=c()+1;let y=kf(p,l),k=v.createHref(p);try{a.pushState(y,"",k)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;o.location.assign(k)}i&&u&&u({action:s,location:v.location,delta:1})}function m(w,h){s=Qn.Replace;let p=gu(v.location,w,h);n&&n(p,w),l=c();let y=kf(p,l),k=v.createHref(p);a.replaceState(y,"",k),i&&u&&u({action:s,location:v.location,delta:0})}function g(w){let h=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof w=="string"?w:$a(w);return p=p.replace(/ $/,"%20"),It(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let v={get action(){return s},get location(){return e(o,a)},listen(w){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(wf,d),u=w,()=>{o.removeEventListener(wf,d),u=null}},createHref(w){return t(o,w)},createURL:g,encodeLocation(w){let h=g(w);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:m,go(w){return a.go(w)}};return v}var bf;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(bf||(bf={}));function Yh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Ly(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?ws(e):e;return{pathname:n?n.startsWith("/")?n:Dy(n,t):t,search:By(r),hash:Uy(o)}}function Dy(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function ul(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Fy(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function qh(e,t){let n=Fy(e);return t?n.map((r,o)=>o===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Xh(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=ws(e):(o=Xo({},e),It(!o.pathname||!o.pathname.includes("?"),ul("?","pathname","search",o)),It(!o.pathname||!o.pathname.includes("#"),ul("#","pathname","hash",o)),It(!o.search||!o.search.includes("#"),ul("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,s;if(a==null)s=n;else{let d=t.length-1;if(!r&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),d-=1;o.pathname=f.join("/")}s=d>=0?t[d]:"/"}let u=Ly(o,s),l=a&&a!=="/"&&a.endsWith("/"),c=(i||a===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(l||c)&&(u.pathname+="/"),u}const Jh=e=>e.join("/").replace(/\/\/+/g,"/"),By=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Uy=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Zh=["post","put","patch","delete"];new Set(Zh);const Vy=["get",...Zh];new Set(Vy);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oa(){return Oa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oa.apply(this,arguments)}const eg=P.createContext(null),to=P.createContext(null),Ac=P.createContext(null),ks=P.createContext({outlet:null,matches:[],isDataRoute:!1});function Hy(e,t){let{relative:n}=t===void 0?{}:t;bs()||It(!1);let{basename:r,navigator:o}=P.useContext(to),{hash:i,pathname:a,search:s}=ng(e,{relative:n}),u=a;return r!=="/"&&(u=a==="/"?r:Jh([r,a])),o.createHref({pathname:u,search:s,hash:i})}function bs(){return P.useContext(Ac)!=null}function zc(){return bs()||It(!1),P.useContext(Ac).location}function tg(e){P.useContext(to).static||P.useLayoutEffect(e)}function Wy(){let{isDataRoute:e}=P.useContext(ks);return e?qy():Gy()}function Gy(){bs()||It(!1);let e=P.useContext(eg),{basename:t,future:n,navigator:r}=P.useContext(to),{matches:o}=P.useContext(ks),{pathname:i}=zc(),a=JSON.stringify(qh(o,n.v7_relativeSplatPath)),s=P.useRef(!1);return tg(()=>{s.current=!0}),P.useCallback(function(l,c){if(c===void 0&&(c={}),!s.current)return;if(typeof l=="number"){r.go(l);return}let d=Xh(l,JSON.parse(a),i,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Jh([t,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[t,r,a,i,e])}function ng(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=P.useContext(to),{matches:o}=P.useContext(ks),{pathname:i}=zc(),a=JSON.stringify(qh(o,r.v7_relativeSplatPath));return P.useMemo(()=>Xh(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}var rg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(rg||{}),og=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(og||{});function Ky(e){let t=P.useContext(eg);return t||It(!1),t}function Qy(e){let t=P.useContext(ks);return t||It(!1),t}function Yy(e){let t=Qy(),n=t.matches[t.matches.length-1];return n.route.id||It(!1),n.route.id}function qy(){let{router:e}=Ky(rg.UseNavigateStable),t=Yy(og.UseNavigateStable),n=P.useRef(!1);return tg(()=>{n.current=!0}),P.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Oa({fromRouteId:t},i)))},[e,t])}function Xy(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Qn.Pop,navigator:i,static:a=!1,future:s}=e;bs()&&It(!1);let u=t.replace(/^\/*/,"/"),l=P.useMemo(()=>({basename:u,navigator:i,static:a,future:Oa({v7_relativeSplatPath:!1},s)}),[u,s,i,a]);typeof r=="string"&&(r=ws(r));let{pathname:c="/",search:d="",hash:f="",state:m=null,key:g="default"}=r,v=P.useMemo(()=>{let w=Yh(c,u);return w==null?null:{location:{pathname:w,search:d,hash:f,state:m,key:g},navigationType:o}},[u,c,d,f,m,g,o]);return v==null?null:P.createElement(to.Provider,{value:l},P.createElement(Ac.Provider,{children:n,value:v}))}new Promise(()=>{});/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vu(){return vu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vu.apply(this,arguments)}function Jy(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Zy(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ex(e,t){return e.button===0&&(!t||t==="_self")&&!Zy(e)}const tx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],nx="6";try{window.__reactRouterVersion=nx}catch{}const rx="startTransition",Sf=vl[rx];function ox(e){let{basename:t,children:n,future:r,window:o}=e,i=P.useRef();i.current==null&&(i.current=Iy({window:o,v5Compat:!0}));let a=i.current,[s,u]=P.useState({action:a.action,location:a.location}),{v7_startTransition:l}=r||{},c=P.useCallback(d=>{l&&Sf?Sf(()=>u(d)):u(d)},[u,l]);return P.useLayoutEffect(()=>a.listen(c),[a,c]),P.createElement(Xy,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a,future:r})}const ix=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ax=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ic=P.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:s,target:u,to:l,preventScrollReset:c,unstable_viewTransition:d}=t,f=Jy(t,tx),{basename:m}=P.useContext(to),g,v=!1;if(typeof l=="string"&&ax.test(l)&&(g=l,ix))try{let y=new URL(window.location.href),k=l.startsWith("//")?new URL(y.protocol+l):new URL(l),b=Yh(k.pathname,m);k.origin===y.origin&&b!=null?l=b+k.search+k.hash:v=!0}catch{}let w=Hy(l,{relative:o}),h=sx(l,{replace:a,state:s,target:u,preventScrollReset:c,relative:o,unstable_viewTransition:d});function p(y){r&&r(y),y.defaultPrevented||h(y)}return P.createElement("a",vu({},f,{href:g||w,onClick:v||i?r:p,ref:n,target:u}))});var Cf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Cf||(Cf={}));var Ef;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ef||(Ef={}));function sx(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:s}=t===void 0?{}:t,u=Wy(),l=zc(),c=ng(e,{relative:a});return P.useCallback(d=>{if(ex(d,n)){d.preventDefault();let f=r!==void 0?r:$a(l)===$a(c);u(e,{replace:f,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:s})}},[l,u,c,r,o,n,e,i,a,s])}const lx=j.div`
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
`,ux=j.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  padding: 20px 4px;
  z-index: 1;
`,cx=j(Ic)`
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
  
`;j.div`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;j.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;const dx=j.ul`
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
`,fx=j.a`
  justify-content: center;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 2px;
  background: none;
  color: ${e=>e.isDarkMode?"black":"white"};
  text-decoration: none;
  box-shadow: none;
  text-align: center;

  padding: 8px 2px;
  font-weight: 250;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
  

  :hover {
    border: 1.8px solid ${({theme:e})=>e.primary};
    color: ${({theme:e})=>e.primary};
  }

  &.active {
    border-bottom: 2px solid ${({theme:e})=>e.primary};
  }
`,_f=j.a`
  border: 1.8px solid ${e=>e.isDarkMode?"black":"white"};
  justify-content: center;
  align-items: center;
  display: flex;
  height: 45px;
  margin-right: 20px;
  border-radius: 2px;
  color:  ${e=>e.isDarkMode?"black":"white"};
  cursor: pointer;
  padding: 10px 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  :hover {
    background: ${({theme:e})=>e.primary};
    color: ${({theme:e})=>e.white};
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`,px=j.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`,mx=j.div`
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
    color: ${e=>e.isDarkMode?"black":"white"};;
    transition: all 1s ease;
  }
`,hx=j.div`
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
  color: ${e=>e.isDarkMode?"white":"black"};
  transition: all 0.6s ease-in-out;
  transform: ${({isOpen:e})=>e?"translateY(0)":"translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({isOpen:e})=>e?"100%":"0"};
  z-index: ${({isOpen:e})=>e?"1000":"-1000"};

`;j.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`;j(Ic)`
  color: ${e=>e.isDarkMode?"white":"black"};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  :hover {
    color: ${({theme:e})=>e.primary};
  }

  &.active {
    border-bottom: 2px solid ${({theme:e})=>e.primary};
  }
`;j.a`
  border: 1.8px solid ${e=>e.isDarkMode?"white":"black"};
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

  :hover {
    background: ${({theme:e})=>e.primary};
    color: ${({theme:e})=>e.white};
  }
`;const gx=j.a`
  color: ${e=>e.isDarkMode?"black":"white"};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  :hover {
    color:  ${e=>e.isDarkMode?"black":"white"};
  }

  &.active {
    border-bottom: 2px solid  ${e=>e.isDarkMode?"black":"white"};
  }
`;j(Ic)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;const jf=j.span`
  height: 20px;
  margin-left: 5px;
`,vx=j.button`
  justify-content: center;
  display: flex;
  align-items: center;
  margin-left: 8px;
  cursor: pointer;
  border-radius: 2px;
  height: 45px;
  background: none;
  color: ${e=>e.isDarkMode?"black":"white"};
  outline: none;
  box-shadow: none;
  position: relative;
  appearance: none;
  text-align: center;
  text-decoration: none;
  border: 1.8px solid ${e=>e.isDarkMode?"black":"white"};

  padding: 10px 20px;
  font-weight: 500;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  :hover {
    background: ${e=>e.isDarkMode?"black":"white"};
    color: ${e=>e.isDarkMode?"white":"black"};
  }
  @media (max-width: 960px) {
    width: 80%;
  }

  @media (max-width: 640px) {
    width: 80%;
  }

`,yx=j.option`
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
`,xx=j.select`
  justify-content: center;
  display: flex;
  align-items: center;
  margin-left: 5px;
  cursor: pointer;
  border-radius: 2px;
  height: 45px;
  background: none;
  color: ${e=>e.isDarkMode?"black":"white"};
  outline: none;
  box-shadow: none;
  position: relative;
  appearance: none;
  border: 1.9px solid ${e=>e.isDarkMode?"black":"white"};
  text-align: left;
  text-decoration: none;
  float: left;

  padding: 10px 20px;
  font-weight: 500;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  :hover {
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
  
`,wx=[{code:"en",label:"English"},{code:"pt",label:"Português"}],Y={pt:{name:"Kauan Vidigal",functions:"Programador de software | Full Stack | Java, Mysql, React js | Freelance",roles:["Seja Bem Vindo!","Sou um desenvolvedor Full-Stack"],description:`Me chamo Kauan Vidigal, sou um desenvolvedor Full-Stack autodidata em constante busca pela excelência tecnológica. Comprometido em solidificar minha expertise, almejo a obtenção de um diploma em Ciência da Computação. Desde a infância, explorei sistemas operacionais, incluindo Windows XP, Windows 7 e Kali Linux, e, a partir de 2014, direcionei meu foco para a programação.

Tenho uma afinidade especial por Java e Programação Orientada a Objetos. Como profissional autônomo, especializo-me em consultorias de TI e no desenvolvimento de sites para empresas. Utilizo tecnologias como PHP, Laravel, React ou Vue, e Vite, para criar soluções eficientes e seguras. Meu enfoque principal está no desenvolvimento de aplicações web responsivas, personalizadas de acordo com as necessidades específicas dos clientes.

Estou aberto a colaborações e desafios que impulsionem meu crescimento profissional. Se houver interesse em discutir parcerias ou obter mais informações, estou à disposição para uma conversa mais detalhada.`,Modelight:"Claro",Modedark:"Escuro",nav:{home:"Início",skills:"Competências",experience:"Experiência",projects:"Projetos",education:"Educação",contact:"Contato",about:"Sobre"},skillsAll:{title:"Ferramentas que Uso:",desc:`Desde 2014, tenho dedicado meu tempo ao estudo e aprimoramento no campo do desenvolvimento Full-Stack. Ao longo dessa jornada, adquiri conhecimentos que incluem tecnologias mais antigas, as quais, embora possam não ser tão prevalentes no mercado atual, proporcionaram uma base sólida.

A essência dessa experiência está na compreensão profunda de conceitos essenciais, o que se tornou um trunfo ao explorar e absorver novas tecnologias. Esse background robusto não apenas facilita a adaptação a novas ferramentas e tendências, mas também oferece uma perspectiva valiosa ao enfrentar desafios inovadores.

No back-end, especializo-me em Java P.O.O, MySQL, MariaDB, Node.js, PHP, e Laravel. No front-end, concentro-me em React.js e Vite ou Vue, visando criar interfaces modernas e responsivas. Esta trajetória não apenas destaca minha capacidade de evoluir com as demandas do mercado, mas também reflete meu compromisso contínuo com o aprendizado e crescimento profissional. Estou aberto a colaborações e ansioso para explorar oportunidades que contribuam para meu desenvolvimento profissional.`,info:[{subtitle:"Linguagens de programação:",skills:[{name:"Java",date:"3 anos",link:"https://www.oracle.com/java/technologies/downloads/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"},{name:"Php",date:"7 anos",link:"https://www.php.net",image:"https://www.php.net/favicon.ico?v=2"},{name:"Javascript",date:"7 anos",link:"https://www.javascript.com",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"},{name:"Typescript",date:"4 anos",link:"https://www.typescriptlang.org",image:"https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae"}]},{subtitle:"Desenvolvimento Front-end:",skills:[{name:"HTML",date:"7 anos",link:"https://www.w3schools.com/html/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"},{name:"CSS",date:"7 anos",link:"https://www.w3schools.com/Css/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"},{name:"React js",date:"5 anos",link:"https://react.dev/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"},{name:"Tailwind",date:"5 anos",link:"https://tailwindcss.com/",image:"https://tailwindcss.com/favicons/apple-touch-icon.png?v=3"},{name:"Styled",date:"5 anos",link:"https://styled-components.com/",image:"https://styled-components.com/favicon.png"},{name:"Bootstrap",date:"5 anos",link:"https://getbootstrap.com/",image:"https://getbootstrap.com/docs/5.3/assets/img/favicons/apple-touch-icon.png"},{name:"SASS",date:"5 anos",link:"https://sass-lang.com/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"},{name:"Vue",date:"4 anos",link:"https://vuejs.org/",image:"https://br.vuejs.org/images/icons/apple-icon-57x57.png"}]},{subtitle:"Desenvolvimento de back-end:",skills:[{name:"Node.js",date:"5 anos",category:"JavaScript server-side",link:"https://nodejs.org/en/download/",image:"https://nodejs.org/static/images/favicons/favicon.png"},{name:"IIS",date:"7 anos",category:"Web servers",link:"https://www.microsoft.com/pt-BR/download/details.aspx?id=48264",image:"https://www.microsoft.com/favicon.ico?v2"},{name:"Apache HTTP Server",date:"7 anos",category:"Web servers",link:"https://apache.org/",image:"https://apache.org/favicons/favicon.ico"},{name:"Apache Tomcat",date:"7 anos",category:"Web servers",link:"https://tomcat.apache.org/",image:"https://tomcat.apache.org/res/images/tomcat.png"},{name:"Nginx",date:"5 anos",category:"Web servers",link:"https://nginx.org/en/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg"},{name:"Xamp",date:"7 anos",category:"Pacotes de Servidores",link:"https://www.apachefriends.org/download.html",image:"https://www.apachefriends.org/images/favicon-18f9bd42.png"},{name:"Wamp",date:"7 anos",category:"Pacotes de Servidores",link:"https://wampserver.aviatechno.net/",image:"https://wampserver.aviatechno.net/css/favicon.ico"}]},{subtitle:"Base de dados:",skills:[{name:"Mysql",date:"5 anos",link:"https://www.mysql.com/",image:"https://labs.mysql.com/common/themes/sakila/favicon.ico"},{name:"Postgresql",date:"3 anos",link:"https://www.postgresql.org/",image:"https://www.postgresql.org/media/img/about/press/elephant.png"},{name:"MongoDB",date:"3 anos",link:"https://www.mongodb.com/",image:"https://www.mongodb.com/assets/images/global/favicon.ico"},{name:"Mariadb",date:"5 anos",link:"https://mariadb.org/",image:"https://mariadb.org/wp-content/uploads/2019/02/cropped-mariadb_org_rgb_r_512-1-32x32.png"}]},{subtitle:"Ambiente de trabalho remoto:",skills:[{name:"Anydesk",date:"4 anos",link:"https://anydesk.com/",image:"https://s3.amazonaws.com//beta-img.b2bstack.net/uploads/production/product/product_image/16462/anydesk.jpg"},{name:"TeamViewer",date:"4 anos",link:"https://www.teamviewer.com/",image:"https://www.teamviewer.com/etc.clientlibs/teamviewer/clientlibs/clientlib-resources/resources/favicon.png"}]},{subtitle:"Cloud:",skills:[{name:"Aws",date:"2 anos",link:"https://aws.amazon.com/pt/free/",image:"https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_179x109.png"},{name:"Cloud",date:"4 anos",link:"https://cloud.google.com/",image:"https://www.gstatic.com/devrel-devsite/prod/v0d244f667a3683225cca86d0ecf9b9b81b1e734e55a030bdcd3f3094b835c987/cloud/images/favicons/onecloud/favicon.ico"},{name:"Oracle Cloud",date:"2 anos",link:"https://www.oracle.com/br/cloud/",image:"https://www.oracle.com/asset/web/favicons/favicon-32.png"},{name:"Azure",date:"2 anos",link:"https://portal.azure.com",image:"https://th.bing.com/th/id/R.07ca8cd025969f66c65611df5aabcf43?rik=E0aGesKhIOc3mg&pid=ImgRaw&r=0"}]},{subtitle:"Hosting:",skills:[{name:"Contabo",date:"3 anos",link:"https://contabo.com/en/",image:"https://contabo.com/assets/apple-touch-icon.png"},{name:"Cloudflare",date:"3 anos",link:"https://www.cloudflare.com/",image:"https://cf-assets.www.cloudflare.com/slt3lc6tev37/53qCYhQbir5WtIU0VDWESo/954a48bfb17f429acf469e5f14345d83/unnamed-3.png"}]},{subtitle:"Gerenciamento de Dependências:",skills:[{name:"Npm",date:"5 anos",category:"JavaScript",link:"https://www.npmjs.com/",image:"https://static-production.npmjs.com/58a19602036db1daee0d7863c94673a4.png"},{name:"Yarn",date:"5 anos",category:"JavaScript",link:"https://yarnpkg.com/",image:"https://yarnpkg.com/img/yarn-favicon.svg"},{name:"Composer",date:"3 anos",category:"PHP",link:"https://getcomposer.org/",image:"https://getcomposer.org/img/logo-composer-transparent5.png"},{name:"Maven",date:"3 anos",category:"Java",link:"https://mvnrepository.com/",image:"https://mvnrepository.com/assets/images/7080b8b0f6f48e6fbaffd5f9d85fcc7f-favicon.ico"}]},{subtitle:"Framework:",skills:[{name:"Electron",date:"2 anos",category:"React, Vue",link:"https://www.electronjs.org",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg"},{name:"Laravel",date:"3 anos",category:"PHP",link:"https://laravel.com",image:"https://laravel.com/img/favicon/apple-touch-icon.png"},{name:"Spring",date:"3 anos",category:"Java, JS/TS:APIs RESTful",link:"https://spring.io",image:"https://www.vectorlogo.zone/logos/springio/springio-icon.svg"},{name:"Next.js",date:"2 anos",category:"React, Vue",link:"https://nextjs.org",image:"https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail-1.png"},{name:"Vite.js",date:"4 anos",category:"React, Vue",link:"https://vitejs.dev/",image:"https://vitejs.dev/logo.svg"},{name:"Slim",date:"2 anos",category:"PHP",link:"https://www.slimframework.com/",image:"https://www.slimframework.com/assets/images/favicon.png"}]},{subtitle:"IDE:",skills:[{name:"sublime text",category:"2014 até 2018",link:"https://www.sublimetext.com/3",image:"https://www.sublimetext.com/favicon.ico"},{name:"Atom",category:"2014 até 2018",link:"https://atom-editor.cc/",image:"https://atom-editor.cc/favicon.ico"},{name:"Eclipse",category:"2014 até 2018",link:"https://eclipseide.org/",image:"https://eclipseide.org/favicon.ico"},{name:"IntelliJ IDEA",date:"3 anos",link:"https://www.jetbrains.com/idea/buy/?section=commercial&billing=yearly",image:"https://upload.wikimedia.org/wikipedia/commons/9/9c/IntelliJ_IDEA_Icon.svg"},{name:"VSCode",date:"5 anos",link:"https://code.visualstudio.com/",image:"https://code.visualstudio.com/apple-touch-icon.png"},{name:"WebStorm",date:"4 anos",link:"https://www.jetbrains.com/webstorm/",image:"https://logonoid.com/images/webstorm-logo.png"}]},{subtitle:"Controle de Versão:",skills:[{name:"Git",date:"4 anos",link:"https://git-scm.com/downloads",image:"https://git-scm.com/favicon.ico"},{name:"GitLab",date:"4 anos",link:"https://gitlab.com/",image:"https://gitlab.com/assets/favicon-72a2cad5025aa931d6ea56c3201d1f18e68a8cd39788c7c80d5b2b82aa5143ef.png"},{name:"Git-hub",date:"3 anos",link:"https://github.com/Vidigal-code",image:"https://github.com/fluidicon.png"}]},{subtitle:"Sistema Operacionais:",skills:[{name:"Linux",date:"7 anos",link:"https://www.linux.org/pages/download/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"},{name:"Ubuntu",date:"3 anos",link:"https://ubuntu.com/download",image:"https://assets.ubuntu.com/v1/17b68252-apple-touch-icon-180x180-precomposed-ubuntu.png"},{name:"Kali",date:"5 anos",link:"https://www.kali.org/get-kali/#kali-platforms",image:"https://www.kali.org/images/kali-logo.svg"},{name:"Windows",date:"12 anos",link:"https://www.microsoft.com/software-download/windows11",image:"https://aadcdn.msftauth.net/shared/1.0/content/images/favicon_a_eupayfgghqiai7k9sol6lg2.ico"}]},{subtitle:"Outros:",skills:[{name:"Virtualbox",date:"6 anos",link:"https://www.virtualbox.org/",image:"https://www.virtualbox.org/favicon.ico"},{name:"NaviCat",date:"5 anos",link:"https://www.navicat.com/en",image:"https://www.navicat.com/images/Navicat_16_Premium_win_256x256.ico"}]}]},experiences:{title:"Experiência",desc:`Gostaria de compartilhar um pouco sobre minha trajetória até o momento e expressar meu interesse em ingressar no mercado de trabalho. Atualmente, conto com 20 anos de idade e embora minha jornada profissional ainda não tenha experiências formais em empresas, venho me dedicando ativamente ao campo da programação desde 2014, quando iniciei meus estudos aos 12 anos.

O fato de ter ingressado tão cedo neste setor trouxe consigo desafios, principalmente no que diz respeito à obtenção de oportunidades formais. Já aos 16 anos, busquei participar de processos seletivos em empresas, mesmo obtendo sucesso nas entrevistas, não obtive as oportunidades almejadas.

Contudo, isso não me desmotivou. Paralelamente, explorei o campo do freelancing, realizando trabalhos autônomos desde 2020 e obtendo resultados satisfatórios. Esta experiência tem sido enriquecedora, permitindo-me desenvolver minhas habilidades e contribuir efetivamente em projetos diversos.

Neste momento, busco ativamente especializar-me ainda mais, aprimorando minhas competências técnicas e práticas, com o objetivo de ingressar no mercado de trabalho formal. Estou confiante de que minha dedicação e experiência acumulada ao longo dos anos serão valiosas para contribuir de maneira significativa em um ambiente profissional.`,info:[{id:0,img:"",role:"Desenvolvedor de software",company:"",date:"jan de 2020 - o momento · 3 anos 11 meses",desc:"Como profissional autônomo, especializo-me em consultorias de TI e no desenvolvimento de sites para empresas. Utilizo tecnologias como PHP, Laravel, React ou Vue, e Vite, para criar soluções eficientes e seguras. Meu enfoque principal está no desenvolvimento de aplicações web responsivas, personalizadas de acordo com as necessidades específicas dos clientes. Estou aberto a colaborações e desafios que impulsionem meu crescimento profissional. Se houver interesse em discutir parcerias ou obter mais informações, estou à disposição para uma conversa mais detalhada.",skillsFreeLancerTitle:"Serviços prestados:",skillsFreeLancer:["Desenvolvimento web","Suporte técnico","Suporte de redes","Desenvolvimento de software personalizado"],skillsTitle:"Habilidades",skills:["Node.js","React.js","Vue.js","Php","Java","Mysql","Mariadb","Laravel"],doc:""}]},projects:{nav:{ProjectAll:"Todos",ProjectWeb:"Web",Bootcamp:"Bootcamp"},buttonGitHubTitle:"Ver código",buttonWebappTitle:"Ver aplicação em direto",title:"Projetos",desc:"Já trabalhei numa vasta gama de projectos. Desde aplicações web a aplicações android. Aqui estão alguns dos meus projectos.",info:[{id:1,title:"Bootcamp-Orange-Tech",date:"Jan 1, 2022",description:"Orange tech + front-end and back-end development aims to really prepare for the best jobs in the technology market. Banco Inter, in partnership with DIO, which will address JavaScript, HTML, CSS, Typescript and React technologies from the beginning.",image:"https://github.com/Vidigal-code/Bootcamp-Orange-Tech/raw/main/Pokedex-OrangeTech/assets/img/Project%20Image/Pokedex.gif",tags:["React.Js","HTML","Node.Js","Typescript","Javascript","Css"],category:"bootcamp",github:"https://github.com/Vidigal-code/Bootcamp-Orange-Tech",webapp:"https://vidigal-code.github.io/Bootcamp-Orange-Tech/Pokedex-OrangeTech/index.html"}]},education:{title:"Educação",desc:`
Desde 2014, mantenho um compromisso autodidata, participando ativamente de cursos em renomadas plataformas educacionais, como Udemy, Coursera, Rocketseat e Digital Innovation One (DIO). Esse empenho constante em busca de conhecimento resultou na obtenção de certificados relevantes que atestam minha competência e dedicação.

Segue abaixo alguns dos cursos e certificações que adquiri ao longo da minha trajetória profissional:`,info:[{id:0,img:"https://estacio.br/static/favicon-estacio.png",school:"Estácio",curseMoment:"Cursando - Universidade",curseLink:"https://estacio.br/",curseTitle:"Clique Aqui",gradetitle:"",gradevalue:"",linkIcon:"https://estacio.br/",CertificateLink:"",CertificateTitle:"",CertificateImg:"",date:"mai de 2023 - fev de 2026",desc:`Meu nome é Kauan Vidigal estou cursando Ciência da Computação. Desde criança, sempre fui fascinado pelo mundo da tecnologia e computadores. A medida que crescia, essa paixão se intensificava, levando-me a escolher a Ciência da Computação como minha área de estudo e carreira.

Uma das principais razões pelas quais me dediquei a essa área é a sua constante evolução e inovação. A tecnologia está em constante mudança, e a Ciência da Computação me proporciona um ambiente desafiador e estimulante para acompanhar essas transformações. A cada dia, novas tecnologias e técnicas surgem, criando oportunidades empolgantes para resolver problemas complexos e melhorar a vida das pessoas.`,degree:"Bacharelado, Ciência da Computação"},{id:1,img:"https://hermes.digitalinnovation.one/tracks/59417914-c4ce-4bf8-b802-f1c1985a07fa.png",school:"DIO",curseMoment:"Bootcamp + Orange Tech - Front-End",curseLink:"https://www.dio.me/certificate/3820E485/share",curseTitle:"Clique Aqui",gradetitle:"",gradevalue:"",linkIcon:"https://www.dio.me/",CertificateLink:"https://www.dio.me/certificate/3820E485/share",CertificateTitle:"Certificado",CertificateImg:"https://hermes.digitalinnovation.one/certificates/cover/3820E485.jpg",date:"16 de dez, concluído",desc:"",degree:"Curso de Desenvolvimento de front-end"},{id:2,img:"https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/8PtnTFGuUVu.png",school:"Meta",curseMoment:"Programa de cursos integrados: Meta Front-End Developer",curseLink:"https://www.coursera.org/account/accomplishments/specialization/certificate/BFEF34UKVQD3",curseTitle:"Clique Aqui",gradetitle:"",gradevalue:"",linkIcon:"https://www.coursera.org/professional-certificates/meta-front-end-developer?",CertificateLink:"https://www.coursera.org/account/accomplishments/specialization/certificate/BFEF34UKVQD3",CertificateTitle:"Certificado",CertificateImg:"https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~BFEF34UKVQD3/CERTIFICATE_LANDING_PAGE~BFEF34UKVQD3.jpeg",date:"Mar 26, 2023, concluído",desc:"",degree:"Curso de Desenvolvimento de front-end"},{id:3,img:"https://duke.edu/_themes/duke/img/favicon.ico",school:"Duke University ",curseMoment:"Fundamentos de programação Java e engenharia de software",curseLink:"https://www.coursera.org/account/accomplishments/specialization/certificate/4V8H29UZHPG7",curseTitle:"Clique Aqui",gradetitle:"",gradevalue:"",linkIcon:"https://www.coursera.org/specializations/java-programming",CertificateLink:"https://www.coursera.org/account/accomplishments/specialization/certificate/4V8H29UZHPG7",CertificateTitle:"Certificado",CertificateImg:"https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~4V8H29UZHPG7/CERTIFICATE_LANDING_PAGE~4V8H29UZHPG7.jpeg",date:"Nov 14, 2022, concluído",desc:"",degree:"Curso Sobre a linguagem Java"}]},contact:{title:"Contato",desc:"Estou à disposição para esclarecimentos, sugestões ou para discutir possíveis oportunidades de colaboração. Sua participação é fundamental para contribuir para nosso contínuo crescimento. Por favor, não hesite em entrar em contato comigo. Agradeço antecipadamente pela consideração e estou ansioso(a) para possíveis interações produtivas.",emailtile:"Enviar-me um e-mail",emailyourtile:"O seu e-mail",emailyourname:"O seu nome",subject:"Assunto",message:"Messagem",submit:"Enviar",submitsuccess:"Messagem Enviada com Sucesso!"},about:{title:"Sobre",desc:"Meu nome é Kauan Vidigal, tenho 20 anos sou de SP/Brasil",linkheaderimg:"https://raw.githubusercontent.com/Vidigal-code/React-portfolio/c8f45e97e3d4549213aa29205881a3d76fb81434/src/images/header-img.svg",bannerimg:"",userimg:"https://raw.githubusercontent.com/Vidigal-code/React-portfolio/main/src/images/Vidigal.jpg"},location:{countries:"Brasil / São Paulo"},GithubLinkTitle:"Github",GithubLink:"https://github.com/Vidigal-code",ResumeTitle:"Currículo",ResumeLink:"https://github.com/Vidigal-code/React-portfolio/blob/main/src/data/Resume/RESUME.pdf",homelinkimg:"https://raw.githubusercontent.com/Vidigal-code/React-portfolio/main/src/images/Home.gif",linkedin:"https://www.linkedin.com/in/kauan-vidigal/",twitter:"",insta:"",facebook:""},en:{name:"Kauan Vidigal",functions:"Software developer | Full Stack | Java, Mysql, React js | Freelance",roles:["Welcome!","I'm a full-stack developer"],description:`My name is Kauan Vidigal, I'm a self-taught Full-Stack developer in constant pursuit of technological excellence. Committed to solidifying my expertise, I aim to obtain a degree in Computer Science. Since childhood, I've explored operating systems, including Windows XP, Windows 7 and Kali Linux, and since 2014, I've focused on programming.

I have a special affinity for Java and Object-Oriented Programming. As a self-employed professional, I specialize in IT consultancy and website development for companies. I use technologies such as PHP, Laravel, React or Vue, and Vite, to create efficient and secure solutions. My main focus is on developing responsive web applications, customized according to clients' specific needs.

I'm open to collaborations and challenges that boost my professional growth. If you are interested in discussing partnerships or obtaining more information, I am available for a more detailed conversation.`,Modelight:"Light",Modedark:"Dark",nav:{home:"Home",skills:"Skills",experience:"Experience",projects:"Projects",education:"Education",contact:"Contact",about:"About"},skillsAll:{title:"Tools I use:",desc:`Since 2014, I have dedicated my time to studying and improving in the field of Full-Stack development. Throughout this journey, I have acquired knowledge that includes older technologies, which, although they may not be as prevalent in today's market, have provided a solid foundation.

The essence of this experience lies in the deep understanding of essential concepts, which has become an asset when exploring and absorbing new technologies. This robust background not only makes it easier to adapt to new tools and trends, but also provides a valuable perspective when facing innovative challenges.

On the back-end, I specialize in Java P.O.O, MySQL, MariaDB, Node.js, PHP, and Laravel. On the front-end, I focus on React.js and Vite or Vue, with the aim of creating modern, responsive interfaces. This background not only highlights my ability to evolve with the demands of the market, but also reflects my ongoing commitment to learning and professional growth. I am open to collaboration and eager to explore opportunities that contribute to my professional development.`,info:[{subtitle:"Programming languages:",skills:[{name:"Java",date:"3 years",link:"https://www.oracle.com/java/technologies/downloads/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"},{name:"Php",date:"7 years",link:"https://www.php.net",image:"https://www.php.net/favicon.ico?v=2"},{name:"Javascript",date:"7 years",link:"https://www.javascript.com",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"},{name:"Typescript",date:"4 years",link:"https://www.typescriptlang.org",image:"https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae"}]},{subtitle:"Front-end development:",skills:[{name:"HTML",date:"7 years",link:"https://www.w3schools.com/html/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"},{name:"CSS",date:"7 years",link:"https://www.w3schools.com/Css/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"},{name:"React js",date:"5 years",link:"https://react.dev/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"},{name:"Tailwind",date:"5 years",link:"https://tailwindcss.com/",image:"https://tailwindcss.com/favicons/apple-touch-icon.png?v=3"},{name:"Styled",date:"5 years",link:"https://styled-components.com/",image:"https://styled-components.com/favicon.png"},{name:"Bootstrap",date:"5 years",link:"https://getbootstrap.com/",image:"https://getbootstrap.com/docs/5.3/assets/img/favicons/apple-touch-icon.png"},{name:"SASS",date:"5 years",link:"https://sass-lang.com/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"},{name:"Vue",date:"4 years",link:"https://vuejs.org/",image:"https://br.vuejs.org/images/icons/apple-icon-57x57.png"}]},{subtitle:"Back-end development:",skills:[{name:"Node.js",date:"5 years",category:"JavaScript server-side",link:"https://nodejs.org/en/download/",image:"https://nodejs.org/static/images/favicons/favicon.png"},{name:"IIS",date:"7 years",category:"Web servers",link:"https://www.microsoft.com/pt-BR/download/details.aspx?id=48264",image:"https://www.microsoft.com/favicon.ico?v2"},{name:"Apache HTTP Server",date:"7 years",category:"Web servers",link:"https://apache.org/",image:"https://apache.org/favicons/apple-touch-icon-57x57.png"},{name:"Apache Tomcat",date:"7 years",category:"Web servers",link:"https://tomcat.apache.org/",image:"https://tomcat.apache.org/res/images/tomcat.png"},{name:"Nginx",date:"5 years",category:"Web servers",link:"https://nginx.org/en/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg"},{name:"Xamp",date:"7 years",category:"Pacotes de Servidores",link:"https://www.apachefriends.org/download.html",image:"https://www.apachefriends.org/images/favicon-18f9bd42.png"},{name:"Wamp",date:"7 years",category:"Pacotes de Servidores",link:"https://wampserver.aviatechno.net/",image:"https://wampserver.aviatechno.net/css/favicon.ico"}]},{subtitle:"Database:",skills:[{name:"Mysql",date:"5 years",link:"https://www.mysql.com/",image:"https://labs.mysql.com/common/themes/sakila/favicon.ico"},{name:"Postgresql",date:"3 years",link:"https://www.postgresql.org/",image:"https://www.postgresql.org/media/img/about/press/elephant.png"},{name:"MongoDB",date:"3 years",link:"https://www.mongodb.com/",image:"https://www.mongodb.com/assets/images/global/favicon.ico"},{name:"Mariadb",date:"5 years",link:"https://mariadb.org/",image:"https://mariadb.org/wp-content/uploads/2019/02/cropped-mariadb_org_rgb_r_512-1-32x32.png"}]},{subtitle:"Remote working environment:",skills:[{name:"Anydesk",date:"4 years",link:"https://anydesk.com/",image:"https://s3.amazonaws.com//beta-img.b2bstack.net/uploads/production/product/product_image/16462/anydesk.jpg"},{name:"TeamViewer",date:"4 years",link:"https://www.teamviewer.com/",image:"https://www.teamviewer.com/etc.clientlibs/teamviewer/clientlibs/clientlib-resources/resources/favicon.png"}]},{subtitle:"Cloud:",skills:[{name:"Aws",date:"2 years",link:"https://aws.amazon.com/pt/free/",image:"https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_179x109.png"},{name:"Cloud",date:"4 years",link:"https://cloud.google.com/",image:"https://www.gstatic.com/devrel-devsite/prod/v0d244f667a3683225cca86d0ecf9b9b81b1e734e55a030bdcd3f3094b835c987/cloud/images/favicons/onecloud/favicon.ico"},{name:"Oracle Cloud",date:"2 anos",link:"https://www.oracle.com/br/cloud/",image:"https://www.oracle.com/asset/web/favicons/favicon-32.png"},{name:"Azure",date:"2 anos",link:"https://portal.azure.com",image:"https://th.bing.com/th/id/R.07ca8cd025969f66c65611df5aabcf43?rik=E0aGesKhIOc3mg&pid=ImgRaw&r=0"}]},{subtitle:"Hosting:",skills:[{name:"Contabo",date:"3 years",link:"https://contabo.com/en/",image:"https://contabo.com/assets/apple-touch-icon.png"},{name:"Cloudflare",date:"3 years",link:"https://www.cloudflare.com/",image:"https://cf-assets.www.cloudflare.com/slt3lc6tev37/53qCYhQbir5WtIU0VDWESo/954a48bfb17f429acf469e5f14345d83/unnamed-3.png"}]},{subtitle:"Dependency Management:",skills:[{name:"Npm",date:"5 years",category:"JavaScript",link:"https://www.npmjs.com/",image:"https://static-production.npmjs.com/58a19602036db1daee0d7863c94673a4.png"},{name:"Yarn",date:"5 years",category:"JavaScript",link:"https://yarnpkg.com/",image:"https://yarnpkg.com/img/yarn-favicon.svg"},{name:"Composer",date:"3 years",category:"PHP",link:"https://getcomposer.org/",image:"https://getcomposer.org/img/logo-composer-transparent5.png"},{name:"Maven",date:"3 years",category:"Java",link:"https://mvnrepository.com/",image:"https://mvnrepository.com/assets/images/7080b8b0f6f48e6fbaffd5f9d85fcc7f-favicon.ico"}]},{subtitle:"Framework:",skills:[{name:"Electron",date:"2 years",category:"React, Vue",link:"https://www.electronjs.org",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg"},{name:"Laravel",date:"3 years",category:"PHP",link:"https://laravel.com",image:"https://laravel.com/img/favicon/apple-touch-icon.png"},{name:"Spring",date:"3 years",category:"Java, JS/TS:APIs RESTful",link:"https://spring.io",image:"https://www.vectorlogo.zone/logos/springio/springio-icon.svg"},{name:"Next.js",date:"2 years",category:"React, Vue",link:"https://nextjs.org",image:"https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail-1.png"},{name:"Vite.js",date:"4 years",category:"React, Vue",link:"https://vitejs.dev/",image:"https://vitejs.dev/logo.svg"},{name:"Slim",date:"2 years",category:"PHP",link:"https://www.slimframework.com/",image:"https://www.slimframework.com/assets/images/favicon.png"}]},{subtitle:"IDE:",skills:[{name:"sublime text",category:"2014 to 2018",link:"https://www.sublimetext.com/3",image:"https://www.sublimetext.com/favicon.ico"},{name:"Atom",category:"2014 to 2018",link:"https://atom-editor.cc/",image:"https://atom-editor.cc/favicon.ico"},{name:"Eclipse",category:"2014 to 2018",link:"https://eclipseide.org/",image:"https://eclipseide.org/favicon.ico"},{name:"IntelliJ IDEA",date:"3 years",link:"https://www.jetbrains.com/idea/buy/?section=commercial&billing=yearly",image:"https://upload.wikimedia.org/wikipedia/commons/9/9c/IntelliJ_IDEA_Icon.svg"},{name:"VSCode",date:"5 years",link:"https://code.visualstudio.com/",image:"https://code.visualstudio.com/apple-touch-icon.png"},{name:"WebStorm",date:"4 years",link:"https://www.jetbrains.com/webstorm/",image:"https://logonoid.com/images/webstorm-logo.png"}]},{subtitle:"Version control:",skills:[{name:"Git",date:"4 years",link:"https://git-scm.com/downloads",image:"https://git-scm.com/favicon.ico"},{name:"GitLab",date:"4 years",link:"https://gitlab.com/",image:"https://gitlab.com/assets/favicon-72a2cad5025aa931d6ea56c3201d1f18e68a8cd39788c7c80d5b2b82aa5143ef.png"},{name:"Git-hub",date:"3 years",link:"https://github.com/Vidigal-code",image:"https://github.com/fluidicon.png"}]},{subtitle:"Operating System:",skills:[{name:"Linux",date:"7 years",link:"https://www.linux.org/pages/download/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"},{name:"Ubuntu",date:"3 years",link:"https://ubuntu.com/download",image:"https://assets.ubuntu.com/v1/17b68252-apple-touch-icon-180x180-precomposed-ubuntu.png"},{name:"Kali",date:"5 years",link:"https://www.kali.org/get-kali/#kali-platforms",image:"https://www.kali.org/images/kali-logo.svg"},{name:"Windows",date:"12 years",link:"https://www.microsoft.com/software-download/windows11",image:"https://aadcdn.msftauth.net/shared/1.0/content/images/favicon_a_eupayfgghqiai7k9sol6lg2.ico"}]},{subtitle:"Others:",skills:[{name:"Virtualbox",date:"6 years",link:"https://www.virtualbox.org/",image:"https://www.virtualbox.org/favicon.ico"},{name:"NaviCat",date:"5 years",link:"https://www.navicat.com/en",image:"https://www.navicat.com/images/Navicat_16_Premium_win_256x256.ico"}]}]},experiences:{title:"Experience",desc:`I'd like to share a little about my career so far and express my interest in entering the job market. I'm currently 20 years old, and although I haven't had any formal experience in companies, I've been actively working in the field of programming since 2014, when I started studying at the age of 12

The fact that I entered this sector so early brought with it challenges, especially in terms of obtaining formal opportunities. When I was 16, I tried to take part in selection processes at companies, but even though I was successful in the interviews, I didn't get the opportunities I wanted.

However, this didn't put me off. At the same time, I explored the field of freelancing, doing independent work since 2020 and getting satisfactory results. This experience has been enriching, allowing me to develop my skills and contribute effectively to various projects.

At the moment, I am actively seeking to specialize even more, improving my technical and practical skills, with the aim of entering the formal job market. I am confident that the dedication and experience I have accumulated over the years will be invaluable in making a significant contribution in a professional environment.`,info:[{id:0,img:"",role:"Desenvolvedor de software",company:"",date:"Jan 2020 - currently - 3 years 11 months",desc:"As a self-employed professional, I specialize in IT consultancy and website development for companies. I use technologies such as PHP, Laravel, React or Vue, and Vite, to create efficient and secure solutions. My main focus is on developing responsive web applications, customized to the specific needs of clients. I am open to collaborations and challenges that will boost my professional growth. If you are interested in discussing partnerships or obtaining more information, I am available for a more detailed conversation.",skillsFreeLancerTitle:"Services provided:",skillsFreeLancer:["Web development","Technical support","Network support","Custom software development"],skillsTitle:"Skills",skills:["Node.js","React.js","Vue.js","Php","Java","Mysql","Mariadb","Laravel"],doc:""}]},education:{title:"Education",desc:`
Since 2014, I have maintained a self-taught commitment, actively participating in courses on renowned educational platforms such as Udemy, Coursera, Rocketseat and Digital Innovation One (DIO). This constant commitment to the pursuit of knowledge has resulted in me obtaining relevant certificates that attest to my competence and dedication.

Below are some of the courses and certifications I have acquired throughout my professional career:`,info:[{id:0,img:"https://estacio.br/static/favicon-estacio.png",school:"Estácio",curseMoment:"Studying - University",curseLink:"https://estacio.br/",curseTitle:"Click here",gradetitle:"",gradevalue:"",linkIcon:"https://estacio.br/",CertificateLink:"",CertificateTitle:"",CertificateImg:"",date:"May 2023 - Feb 2026",desc:`My name is Kauan Vidigal and I'm studying Computer Science. Ever since I was a child, I've always been fascinated by the world of technology and computers. As I grew up, this passion intensified, leading me to choose Computer Science as my area of study and career.

One of the main reasons I dedicated myself to this area is its constant evolution and innovation. Technology is constantly changing, and Computer Science provides me with a challenging and stimulating environment to keep up with these transformations. Every day, new technologies and techniques emerge, creating exciting opportunities to solve complex problems and improve people's lives.`,degree:"Bachelor, Computer Science"},{id:1,img:"https://hermes.digitalinnovation.one/tracks/59417914-c4ce-4bf8-b802-f1c1985a07fa.png",school:"DIO",curseMoment:"Bootcamp + Orange Tech - Front-End",curseLink:"https://www.dio.me/certificate/3820E485/share",curseTitle:"Click here",gradetitle:"",gradevalue:"",linkIcon:"https://www.dio.me/",CertificateLink:"https://www.dio.me/certificate/3820E485/share",CertificateTitle:"Certificate",CertificateImg:"https://hermes.digitalinnovation.one/certificates/cover/3820E485.jpg",date:"Dec 16th, completed",desc:"",degree:"Front-end development course"},{id:2,img:"https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/8PtnTFGuUVu.png",school:"Meta",curseMoment:"Integrated course program: Meta Front-End Developer",curseLink:"https://www.coursera.org/account/accomplishments/specialization/certificate/BFEF34UKVQD3",curseTitle:"Click here",gradetitle:"",gradevalue:"",linkIcon:"https://www.coursera.org/professional-certificates/meta-front-end-developer?",CertificateLink:"https://www.coursera.org/account/accomplishments/specialization/certificate/BFEF34UKVQD3",CertificateTitle:"Certificate",CertificateImg:"https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~BFEF34UKVQD3/CERTIFICATE_LANDING_PAGE~BFEF34UKVQD3.jpeg",date:"Mar 26, 2023, completed",desc:"",degree:"Front-end development course"},{id:3,img:"https://duke.edu/_themes/duke/img/favicon.ico",school:"Duke University ",curseMoment:"Java programming fundamentals and software engineering",curseLink:"https://www.coursera.org/account/accomplishments/specialization/certificate/4V8H29UZHPG7",curseTitle:"Click here",gradetitle:"",gradevalue:"",linkIcon:"https://www.coursera.org/specializations/java-programming",CertificateLink:"https://www.coursera.org/account/accomplishments/specialization/certificate/4V8H29UZHPG7",CertificateTitle:"Certificate",CertificateImg:"https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~4V8H29UZHPG7/CERTIFICATE_LANDING_PAGE~4V8H29UZHPG7.jpeg",date:"Nov 14, 2022, completed",desc:"",degree:"Java Language Course"}]},projects:{nav:{ProjectAll:"All",ProjectWeb:"Web",Bootcamp:"Bootcamp"},buttonGitHubTitle:"See code",buttonWebappTitle:"See the application live",title:"Projects",desc:"I've worked on a wide range of projects. From web applications to android applications. Here are some of my projects.",info:[{id:1,title:"Bootcamp-Orange-Tech",date:"Jan 1, 2022",description:"Orange tech + front-end and back-end development aims to really prepare for the best jobs in the technology market. Banco Inter, in partnership with DIO, which will address JavaScript, HTML, CSS, Typescript and React technologies from the beginning.",image:"https://github.com/Vidigal-code/Bootcamp-Orange-Tech/raw/main/Pokedex-OrangeTech/assets/img/Project%20Image/Pokedex.gif",tags:["React.Js","HTML","Node.Js","Typescript","Javascript","Css"],category:"bootcamp",github:"https://github.com/Vidigal-code/Bootcamp-Orange-Tech",webapp:"https://vidigal-code.github.io/Bootcamp-Orange-Tech/Pokedex-OrangeTech/index.html"}]},contact:{title:"Contact",desc:"I am at your disposal for clarifications, suggestions or to discuss possible collaboration opportunities. Your participation is essential to contribute to our continued growth. Please do not hesitate to contact me. Thank you in advance for your consideration and I look forward to possible productive interactions.",emailtile:"Send me an email",emailyourtile:"Your email",emailyourname:"Your name",subject:"Subject",message:"Message",submit:"Send",submitsuccess:"Message Sent Successfully!"},about:{title:"About",desc:"My name is Kauan Vidigal, I'm 20 years old from SP/Brazil",linkheaderimg:"https://raw.githubusercontent.com/Vidigal-code/React-portfolio/c8f45e97e3d4549213aa29205881a3d76fb81434/src/images/header-img.svg",bannerimg:"",userimg:"https://raw.githubusercontent.com/Vidigal-code/React-portfolio/main/src/images/Vidigal.jpg"},location:{countries:"Brazil / São Paulo"},GithubLinkTitle:"Github",GithubLink:"https://github.com/Vidigal-code",ResumeTitle:"Resume",ResumeLink:"https://github.com/Vidigal-code/React-portfolio/blob/main/src/data/Resume/RESUME.pdf",homelinkimg:"https://raw.githubusercontent.com/Vidigal-code/React-portfolio/main/src/images/Home.gif",linkedin:"https://www.linkedin.com/in/kauan-vidigal/",twitter:"",insta:"",facebook:""}},ig=P.createContext(),kx=({children:e})=>{const[t,n]=P.useState("pt"),r=o=>{n(o)};return x.jsx(ig.Provider,{value:{selectedLanguage:t,handleLanguageChange:r},children:e})},Lt=()=>P.useContext(ig),ag=P.createContext(),bx=({children:e})=>{const[t,n]=P.useState(!0),r=()=>{n(o=>!o)};return x.jsx(ag.Provider,{value:{isDarkMode:t,toggleDarkMode:r},children:e})},ar=()=>P.useContext(ag);var sg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Pf=je.createContext&&je.createContext(sg),On=function(){return On=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},On.apply(this,arguments)},Sx=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function lg(e){return e&&e.map(function(t,n){return je.createElement(t.tag,On({key:n},t.attr),lg(t.child))})}function qt(e){return function(t){return je.createElement(Cx,On({attr:On({},e.attr)},t),lg(e.child))}}function Cx(e){var t=function(n){var r=e.attr,o=e.size,i=e.title,a=Sx(e,["attr","size","title"]),s=o||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),je.createElement("svg",On({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:u,style:On(On({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&je.createElement("title",null,i),e.children)};return Pf!==void 0?je.createElement(Pf.Consumer,null,function(n){return t(n)}):t(sg)}function Ex(e){return qt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M7 11L7 13H17V11H7Z",fill:"currentColor"}},{tag:"path",attr:{d:"M7.75732 18L9.17154 16.5858L11 18.4143V14H13V18.4142L14.8284 16.5858L16.2426 18L12 22.2427L7.75732 18Z",fill:"currentColor"}},{tag:"path",attr:{d:"M16.2427 5.99996L14.8285 7.41418L13 5.58572V9.99996H11L11 5.58579L9.17161 7.41418L7.75739 5.99996L12 1.75732L16.2427 5.99996Z",fill:"currentColor"}}]})(e)}function ug(e){return qt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M14 11H10V13H14V11Z",fill:"currentColor"}},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z",fill:"currentColor"}}]})(e)}function _x(e){return qt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"}}]})(e)}function jx(e){return qt({tag:"svg",attr:{viewBox:"0 0 480 512"},child:[{tag:"path",attr:{d:"M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"}}]})(e)}function Px(e){return qt({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(e)}function Tx(e){return qt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}}]})(e)}function Mc(e){return qt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(e)}function $x(e){return qt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"}}]})(e)}function Ox(e){return qt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18.36 6.64a9 9 0 1 1-12.73 0"}},{tag:"line",attr:{x1:"12",y1:"2",x2:"12",y2:"12"}}]})(e)}const Rx=()=>{const[e,t]=je.useState(!1),n=Ry(),{selectedLanguage:r,handleLanguageChange:o}=Lt(),{isDarkMode:i,toggleDarkMode:a}=ar(),s=[{id:"home",label:Y[r].nav.home},{id:"skills",label:Y[r].nav.skills},{id:"experience",label:Y[r].nav.experience},{id:"projects",label:Y[r].nav.projects},{id:"education",label:Y[r].nav.education},{id:"contact",label:Y[r].nav.contact},{id:"about",label:Y[r].nav.about}];return x.jsx(lx,{children:x.jsxs(ux,{children:[x.jsxs(cx,{to:"/",children:[x.jsx(xx,{value:r,onChange:u=>o(u.target.value),isDarkMode:i,children:wx.map(({code:u,label:l})=>x.jsx(yx,{value:u,children:l},u))}),x.jsxs(vx,{onClick:()=>a(),isDarkMode:i,children:[i?Y[r].Modelight:Y[r].Modedark,x.jsx(jf,{children:x.jsx(Ox,{})})]})]}),x.jsx(mx,{isDarkMode:i,children:x.jsx(Ex,{onClick:()=>{t(!e)}})}),x.jsx(dx,{children:s.map(({id:u,label:l})=>x.jsx(fx,{isDarkMode:i,href:`#${u}`,children:l},u))}),x.jsx(px,{children:x.jsxs(_f,{isDarkMode:i,target:"_blank",href:Y[r].GithubLink,children:[Y[r].GithubLinkTitle,x.jsx(jf,{children:x.jsx(jx,{})})]})}),e&&x.jsxs(hx,{isDarkMode:i,isOpen:e,children:[s.map(({id:u,label:l})=>x.jsx(gx,{isDarkMode:i,href:`#${u}`,onClick:()=>{t(!e)},children:l},u)),x.jsx(_f,{style:{padding:"10px 16px",background:`${n.primary}`,color:"white",width:"max-content"},target:"_blank",href:Y[r].GithubLink,children:Y[r].GithubLinkTitle})]})]})})},Ax="/React-portfolio/assets/fam-code-Bld2Whts.ttf",zx=j.div`
  width: 600px;
  height: 550px;
`,Ix=Oy`
  @font-face {
    font-family: 'MatrixFont';
    src: url('${Ax}') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`,Mx=j.text`
  font-weight: 500;
  font-family: 'MatrixFont';
  font-style: italic;
  opacity: 0.4;
  fill: ${({theme:e})=>e.text_matrix};
`,Tf=()=>({x:Math.random()*602,y:-50,z:Math.random()*10}),$f=[10,20],Of=[5,15,8],Nx=()=>{if(Math.random()<.03){const o=["Vidigal-code","Full-stack","Soft Vidigal","Programming"],i=Math.floor(Math.random()*o.length),a=Of[Math.floor(Math.random()*Of.length)];return{text:o[i],fontSize:a}}const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+",n=Math.floor(Math.random()*t.length),r=$f[Math.floor(Math.random()*$f.length)];return{text:t.charAt(n),fontSize:r}},Lx=e=>{let t=e.length,n;for(;t!==0;)n=Math.floor(Math.random()*t),t--,[e[t],e[n]]=[e[n],e[t]];return e},Dx=(e,t,n)=>{const r=t.x-e.x,o=t.y-e.y,i=Math.sqrt(r*r+o*o),a=r/i,s=o/i,u=a*n,l=s*n;return{x:e.x+u,y:e.y+l}},Fx=()=>{const[e,t]=P.useState(Array.from({length:100},Tf)),[n,r]=P.useState(!1),o=Array.from({length:100},Nx);P.useEffect(()=>{const s=e.map((u,l)=>setInterval(()=>{t(c=>c.map((d,f)=>f===l?Dx(d,Tf(),5):d))},Math.random()*1e3+500));return()=>{s.forEach(u=>clearInterval(u))}},[e]);const i=()=>{r(!0),t(s=>Lx([...s]))},a=()=>{r(!1)};return x.jsxs(x.Fragment,{children:[x.jsx(Ix,{}),x.jsx(zx,{onMouseOver:i,onMouseLeave:a,children:x.jsx("svg",{className:"BgAnimation__svg",viewBox:"0 0 602 602",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.map((s,u)=>{var l,c,d;return x.jsxs(Mx,{x:e[u]?e[u].x:0,y:n?Math.random()*602:((l=e[u])==null?void 0:l.y)||0,style:{zIndex:((c=e[u])==null?void 0:c.z)||0,fontSize:`${s.fontSize}px`,transformOrigin:"center center",transform:n?"rotate(360deg)":"rotate(0deg)"},children:[s.text,x.jsx("animate",{attributeName:"y",values:`${((d=e[u])==null?void 0:d.y)||0};602`,dur:"4s",keyTimes:"0;1",begin:`${u*.1}s`,repeatCount:"indefinite"})]},u)})})})]})};j.div`
  display: flex;
  margin-top: 1rem;
`;j.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({theme:e})=>e.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({theme:e})=>e.primary};
  }
`;const Bx=j.div`
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
`,Ux=j.div`
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
`,Vx=j.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`,Hx=j.div`
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
`,Wx=j.div`
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
`,Gx=j.img`
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
`,Kx=j.div`
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
`,Qx=j.div`
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
`,Yx=j.span`
  color: ${({theme:e})=>e.primary};
  cursor: pointer;
`,qx=j.div`
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
`,Xx=j.p`
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
`,Jx=j.p`
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
`;var cg={exports:{}};(function(e,t){(function(n,r){e.exports=r(P)})(typeof self<"u"?self:l0,n=>(()=>{var r={7403:(s,u,l)=>{l.d(u,{default:()=>A});var c=l(4087),d=l.n(c);const f=function(z){return new RegExp(/<[a-z][\s\S]*>/i).test(z)},m=function(z,O){return Math.floor(Math.random()*(O-z+1))+z};var g="TYPE_CHARACTER",v="REMOVE_CHARACTER",w="REMOVE_ALL",h="REMOVE_LAST_VISIBLE_NODE",p="PAUSE_FOR",y="CALL_FUNCTION",k="ADD_HTML_TAG_ELEMENT",b="CHANGE_DELETE_SPEED",_="CHANGE_DELAY",E="CHANGE_CURSOR",T="PASTE_STRING",L="HTML_TAG";function R(z){return R=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(O){return typeof O}:function(O){return O&&typeof Symbol=="function"&&O.constructor===Symbol&&O!==Symbol.prototype?"symbol":typeof O},R(z)}function I(z,O){var G=Object.keys(z);if(Object.getOwnPropertySymbols){var $=Object.getOwnPropertySymbols(z);O&&($=$.filter(function(B){return Object.getOwnPropertyDescriptor(z,B).enumerable})),G.push.apply(G,$)}return G}function D(z){for(var O=1;O<arguments.length;O++){var G=arguments[O]!=null?arguments[O]:{};O%2?I(Object(G),!0).forEach(function($){F(z,$,G[$])}):Object.getOwnPropertyDescriptors?Object.defineProperties(z,Object.getOwnPropertyDescriptors(G)):I(Object(G)).forEach(function($){Object.defineProperty(z,$,Object.getOwnPropertyDescriptor(G,$))})}return z}function W(z){return function(O){if(Array.isArray(O))return H(O)}(z)||function(O){if(typeof Symbol<"u"&&O[Symbol.iterator]!=null||O["@@iterator"]!=null)return Array.from(O)}(z)||function(O,G){if(O){if(typeof O=="string")return H(O,G);var $=Object.prototype.toString.call(O).slice(8,-1);return $==="Object"&&O.constructor&&($=O.constructor.name),$==="Map"||$==="Set"?Array.from(O):$==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test($)?H(O,G):void 0}}(z)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function H(z,O){(O==null||O>z.length)&&(O=z.length);for(var G=0,$=new Array(O);G<O;G++)$[G]=z[G];return $}function U(z,O){for(var G=0;G<O.length;G++){var $=O[G];$.enumerable=$.enumerable||!1,$.configurable=!0,"value"in $&&($.writable=!0),Object.defineProperty(z,X($.key),$)}}function F(z,O,G){return(O=X(O))in z?Object.defineProperty(z,O,{value:G,enumerable:!0,configurable:!0,writable:!0}):z[O]=G,z}function X(z){var O=function(G,$){if(R(G)!=="object"||G===null)return G;var B=G[Symbol.toPrimitive];if(B!==void 0){var C=B.call(G,"string");if(R(C)!=="object")return C;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(G)}(z);return R(O)==="symbol"?O:String(O)}const A=function(){function z($,B){var C=this;if(function(S,Q){if(!(S instanceof Q))throw new TypeError("Cannot call a class as a function")}(this,z),F(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),F(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),F(this,"setupWrapperElement",function(){C.state.elements.container&&(C.state.elements.wrapper.className=C.options.wrapperClassName,C.state.elements.cursor.className=C.options.cursorClassName,C.state.elements.cursor.innerHTML=C.options.cursor,C.state.elements.container.innerHTML="",C.state.elements.container.appendChild(C.state.elements.wrapper),C.state.elements.container.appendChild(C.state.elements.cursor))}),F(this,"start",function(){return C.state.eventLoopPaused=!1,C.runEventLoop(),C}),F(this,"pause",function(){return C.state.eventLoopPaused=!0,C}),F(this,"stop",function(){return C.state.eventLoop&&((0,c.cancel)(C.state.eventLoop),C.state.eventLoop=null),C}),F(this,"pauseFor",function(S){return C.addEventToQueue(p,{ms:S}),C}),F(this,"typeOutAllStrings",function(){return typeof C.options.strings=="string"?(C.typeString(C.options.strings).pauseFor(C.options.pauseFor),C):(C.options.strings.forEach(function(S){C.typeString(S).pauseFor(C.options.pauseFor).deleteAll(C.options.deleteSpeed)}),C)}),F(this,"typeString",function(S){var Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(f(S))return C.typeOutHTMLString(S,Q);if(S){var M=(C.options||{}).stringSplitter,ne=typeof M=="function"?M(S):S.split("");C.typeCharacters(ne,Q)}return C}),F(this,"pasteString",function(S){var Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return f(S)?C.typeOutHTMLString(S,Q,!0):(S&&C.addEventToQueue(T,{character:S,node:Q}),C)}),F(this,"typeOutHTMLString",function(S){var Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,M=arguments.length>2?arguments[2]:void 0,ne=function(ue){var me=document.createElement("div");return me.innerHTML=ue,me.childNodes}(S);if(ne.length>0)for(var q=0;q<ne.length;q++){var te=ne[q],Z=te.innerHTML;te&&te.nodeType!==3?(te.innerHTML="",C.addEventToQueue(k,{node:te,parentNode:Q}),M?C.pasteString(Z,te):C.typeString(Z,te)):te.textContent&&(M?C.pasteString(te.textContent,Q):C.typeString(te.textContent,Q))}return C}),F(this,"deleteAll",function(){var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return C.addEventToQueue(w,{speed:S}),C}),F(this,"changeDeleteSpeed",function(S){if(!S)throw new Error("Must provide new delete speed");return C.addEventToQueue(b,{speed:S}),C}),F(this,"changeDelay",function(S){if(!S)throw new Error("Must provide new delay");return C.addEventToQueue(_,{delay:S}),C}),F(this,"changeCursor",function(S){if(!S)throw new Error("Must provide new cursor");return C.addEventToQueue(E,{cursor:S}),C}),F(this,"deleteChars",function(S){if(!S)throw new Error("Must provide amount of characters to delete");for(var Q=0;Q<S;Q++)C.addEventToQueue(v);return C}),F(this,"callFunction",function(S,Q){if(!S||typeof S!="function")throw new Error("Callback must be a function");return C.addEventToQueue(y,{cb:S,thisArg:Q}),C}),F(this,"typeCharacters",function(S){var Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!S||!Array.isArray(S))throw new Error("Characters must be an array");return S.forEach(function(M){C.addEventToQueue(g,{character:M,node:Q})}),C}),F(this,"removeCharacters",function(S){if(!S||!Array.isArray(S))throw new Error("Characters must be an array");return S.forEach(function(){C.addEventToQueue(v)}),C}),F(this,"addEventToQueue",function(S,Q){var M=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return C.addEventToStateProperty(S,Q,M,"eventQueue")}),F(this,"addReverseCalledEvent",function(S,Q){var M=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return C.options.loop?C.addEventToStateProperty(S,Q,M,"reverseCalledEvents"):C}),F(this,"addEventToStateProperty",function(S,Q){var M=arguments.length>2&&arguments[2]!==void 0&&arguments[2],ne=arguments.length>3?arguments[3]:void 0,q={eventName:S,eventArgs:Q||{}};return C.state[ne]=M?[q].concat(W(C.state[ne])):[].concat(W(C.state[ne]),[q]),C}),F(this,"runEventLoop",function(){C.state.lastFrameTime||(C.state.lastFrameTime=Date.now());var S=Date.now(),Q=S-C.state.lastFrameTime;if(!C.state.eventQueue.length){if(!C.options.loop)return;C.state.eventQueue=W(C.state.calledEvents),C.state.calledEvents=[],C.options=D({},C.state.initialOptions)}if(C.state.eventLoop=d()(C.runEventLoop),!C.state.eventLoopPaused){if(C.state.pauseUntil){if(S<C.state.pauseUntil)return;C.state.pauseUntil=null}var M,ne=W(C.state.eventQueue),q=ne.shift();if(!(Q<=(M=q.eventName===h||q.eventName===v?C.options.deleteSpeed==="natural"?m(40,80):C.options.deleteSpeed:C.options.delay==="natural"?m(120,160):C.options.delay))){var te=q.eventName,Z=q.eventArgs;switch(C.logInDevMode({currentEvent:q,state:C.state,delay:M}),te){case T:case g:var ue=Z.character,me=Z.node,oe=document.createTextNode(ue),Se=oe;C.options.onCreateTextNode&&typeof C.options.onCreateTextNode=="function"&&(Se=C.options.onCreateTextNode(ue,oe)),Se&&(me?me.appendChild(Se):C.state.elements.wrapper.appendChild(Se)),C.state.visibleNodes=[].concat(W(C.state.visibleNodes),[{type:"TEXT_NODE",character:ue,node:Se}]);break;case v:ne.unshift({eventName:h,eventArgs:{removingCharacterNode:!0}});break;case p:var ae=q.eventArgs.ms;C.state.pauseUntil=Date.now()+parseInt(ae);break;case y:var Oe=q.eventArgs,Dn=Oe.cb,ze=Oe.thisArg;Dn.call(ze,{elements:C.state.elements});break;case k:var Fn=q.eventArgs,Jt=Fn.node,qe=Fn.parentNode;qe?qe.appendChild(Jt):C.state.elements.wrapper.appendChild(Jt),C.state.visibleNodes=[].concat(W(C.state.visibleNodes),[{type:L,node:Jt,parentNode:qe||C.state.elements.wrapper}]);break;case w:var ee=C.state.visibleNodes,he=Z.speed,pn=[];he&&pn.push({eventName:b,eventArgs:{speed:he,temp:!0}});for(var dr=0,Dt=ee.length;dr<Dt;dr++)pn.push({eventName:h,eventArgs:{removingCharacterNode:!1}});he&&pn.push({eventName:b,eventArgs:{speed:C.options.deleteSpeed,temp:!0}}),ne.unshift.apply(ne,pn);break;case h:var o0=q.eventArgs.removingCharacterNode;if(C.state.visibleNodes.length){var zs=C.state.visibleNodes.pop(),i0=zs.type,mi=zs.node,a0=zs.character;C.options.onRemoveNode&&typeof C.options.onRemoveNode=="function"&&C.options.onRemoveNode({node:mi,character:a0}),mi&&mi.parentNode.removeChild(mi),i0===L&&o0&&ne.unshift({eventName:h,eventArgs:{}})}break;case b:C.options.deleteSpeed=q.eventArgs.speed;break;case _:C.options.delay=q.eventArgs.delay;break;case E:C.options.cursor=q.eventArgs.cursor,C.state.elements.cursor.innerHTML=q.eventArgs.cursor}C.options.loop&&(q.eventName===h||q.eventArgs&&q.eventArgs.temp||(C.state.calledEvents=[].concat(W(C.state.calledEvents),[q]))),C.state.eventQueue=ne,C.state.lastFrameTime=S}}}),$)if(typeof $=="string"){var J=document.querySelector($);if(!J)throw new Error("Could not find container element");this.state.elements.container=J}else this.state.elements.container=$;B&&(this.options=D(D({},this.options),B)),this.state.initialOptions=D({},this.options),this.init()}var O,G;return O=z,(G=[{key:"init",value:function(){var $,B;this.setupWrapperElement(),this.addEventToQueue(E,{cursor:this.options.cursor},!0),this.addEventToQueue(w,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||($=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(B=document.createElement("style")).appendChild(document.createTextNode($)),document.head.appendChild(B),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function($){this.options.devMode&&console.log($)}}])&&U(O.prototype,G),Object.defineProperty(O,"prototype",{writable:!1}),z}()},8552:(s,u,l)=>{var c=l(852)(l(5639),"DataView");s.exports=c},1989:(s,u,l)=>{var c=l(1789),d=l(401),f=l(7667),m=l(1327),g=l(1866);function v(w){var h=-1,p=w==null?0:w.length;for(this.clear();++h<p;){var y=w[h];this.set(y[0],y[1])}}v.prototype.clear=c,v.prototype.delete=d,v.prototype.get=f,v.prototype.has=m,v.prototype.set=g,s.exports=v},8407:(s,u,l)=>{var c=l(7040),d=l(4125),f=l(2117),m=l(7518),g=l(4705);function v(w){var h=-1,p=w==null?0:w.length;for(this.clear();++h<p;){var y=w[h];this.set(y[0],y[1])}}v.prototype.clear=c,v.prototype.delete=d,v.prototype.get=f,v.prototype.has=m,v.prototype.set=g,s.exports=v},7071:(s,u,l)=>{var c=l(852)(l(5639),"Map");s.exports=c},3369:(s,u,l)=>{var c=l(4785),d=l(1285),f=l(6e3),m=l(9916),g=l(5265);function v(w){var h=-1,p=w==null?0:w.length;for(this.clear();++h<p;){var y=w[h];this.set(y[0],y[1])}}v.prototype.clear=c,v.prototype.delete=d,v.prototype.get=f,v.prototype.has=m,v.prototype.set=g,s.exports=v},3818:(s,u,l)=>{var c=l(852)(l(5639),"Promise");s.exports=c},8525:(s,u,l)=>{var c=l(852)(l(5639),"Set");s.exports=c},8668:(s,u,l)=>{var c=l(3369),d=l(619),f=l(2385);function m(g){var v=-1,w=g==null?0:g.length;for(this.__data__=new c;++v<w;)this.add(g[v])}m.prototype.add=m.prototype.push=d,m.prototype.has=f,s.exports=m},6384:(s,u,l)=>{var c=l(8407),d=l(7465),f=l(3779),m=l(7599),g=l(4758),v=l(4309);function w(h){var p=this.__data__=new c(h);this.size=p.size}w.prototype.clear=d,w.prototype.delete=f,w.prototype.get=m,w.prototype.has=g,w.prototype.set=v,s.exports=w},2705:(s,u,l)=>{var c=l(5639).Symbol;s.exports=c},1149:(s,u,l)=>{var c=l(5639).Uint8Array;s.exports=c},577:(s,u,l)=>{var c=l(852)(l(5639),"WeakMap");s.exports=c},4963:s=>{s.exports=function(u,l){for(var c=-1,d=u==null?0:u.length,f=0,m=[];++c<d;){var g=u[c];l(g,c,u)&&(m[f++]=g)}return m}},4636:(s,u,l)=>{var c=l(2545),d=l(5694),f=l(1469),m=l(4144),g=l(5776),v=l(6719),w=Object.prototype.hasOwnProperty;s.exports=function(h,p){var y=f(h),k=!y&&d(h),b=!y&&!k&&m(h),_=!y&&!k&&!b&&v(h),E=y||k||b||_,T=E?c(h.length,String):[],L=T.length;for(var R in h)!p&&!w.call(h,R)||E&&(R=="length"||b&&(R=="offset"||R=="parent")||_&&(R=="buffer"||R=="byteLength"||R=="byteOffset")||g(R,L))||T.push(R);return T}},2488:s=>{s.exports=function(u,l){for(var c=-1,d=l.length,f=u.length;++c<d;)u[f+c]=l[c];return u}},2908:s=>{s.exports=function(u,l){for(var c=-1,d=u==null?0:u.length;++c<d;)if(l(u[c],c,u))return!0;return!1}},8470:(s,u,l)=>{var c=l(7813);s.exports=function(d,f){for(var m=d.length;m--;)if(c(d[m][0],f))return m;return-1}},8866:(s,u,l)=>{var c=l(2488),d=l(1469);s.exports=function(f,m,g){var v=m(f);return d(f)?v:c(v,g(f))}},4239:(s,u,l)=>{var c=l(2705),d=l(9607),f=l(2333),m=c?c.toStringTag:void 0;s.exports=function(g){return g==null?g===void 0?"[object Undefined]":"[object Null]":m&&m in Object(g)?d(g):f(g)}},9454:(s,u,l)=>{var c=l(4239),d=l(7005);s.exports=function(f){return d(f)&&c(f)=="[object Arguments]"}},939:(s,u,l)=>{var c=l(2492),d=l(7005);s.exports=function f(m,g,v,w,h){return m===g||(m==null||g==null||!d(m)&&!d(g)?m!=m&&g!=g:c(m,g,v,w,f,h))}},2492:(s,u,l)=>{var c=l(6384),d=l(7114),f=l(8351),m=l(6096),g=l(4160),v=l(1469),w=l(4144),h=l(6719),p="[object Arguments]",y="[object Array]",k="[object Object]",b=Object.prototype.hasOwnProperty;s.exports=function(_,E,T,L,R,I){var D=v(_),W=v(E),H=D?y:g(_),U=W?y:g(E),F=(H=H==p?k:H)==k,X=(U=U==p?k:U)==k,A=H==U;if(A&&w(_)){if(!w(E))return!1;D=!0,F=!1}if(A&&!F)return I||(I=new c),D||h(_)?d(_,E,T,L,R,I):f(_,E,H,T,L,R,I);if(!(1&T)){var z=F&&b.call(_,"__wrapped__"),O=X&&b.call(E,"__wrapped__");if(z||O){var G=z?_.value():_,$=O?E.value():E;return I||(I=new c),R(G,$,T,L,I)}}return!!A&&(I||(I=new c),m(_,E,T,L,R,I))}},8458:(s,u,l)=>{var c=l(3560),d=l(5346),f=l(3218),m=l(346),g=/^\[object .+?Constructor\]$/,v=Function.prototype,w=Object.prototype,h=v.toString,p=w.hasOwnProperty,y=RegExp("^"+h.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");s.exports=function(k){return!(!f(k)||d(k))&&(c(k)?y:g).test(m(k))}},8749:(s,u,l)=>{var c=l(4239),d=l(1780),f=l(7005),m={};m["[object Float32Array]"]=m["[object Float64Array]"]=m["[object Int8Array]"]=m["[object Int16Array]"]=m["[object Int32Array]"]=m["[object Uint8Array]"]=m["[object Uint8ClampedArray]"]=m["[object Uint16Array]"]=m["[object Uint32Array]"]=!0,m["[object Arguments]"]=m["[object Array]"]=m["[object ArrayBuffer]"]=m["[object Boolean]"]=m["[object DataView]"]=m["[object Date]"]=m["[object Error]"]=m["[object Function]"]=m["[object Map]"]=m["[object Number]"]=m["[object Object]"]=m["[object RegExp]"]=m["[object Set]"]=m["[object String]"]=m["[object WeakMap]"]=!1,s.exports=function(g){return f(g)&&d(g.length)&&!!m[c(g)]}},280:(s,u,l)=>{var c=l(5726),d=l(6916),f=Object.prototype.hasOwnProperty;s.exports=function(m){if(!c(m))return d(m);var g=[];for(var v in Object(m))f.call(m,v)&&v!="constructor"&&g.push(v);return g}},2545:s=>{s.exports=function(u,l){for(var c=-1,d=Array(u);++c<u;)d[c]=l(c);return d}},1717:s=>{s.exports=function(u){return function(l){return u(l)}}},4757:s=>{s.exports=function(u,l){return u.has(l)}},4429:(s,u,l)=>{var c=l(5639)["__core-js_shared__"];s.exports=c},7114:(s,u,l)=>{var c=l(8668),d=l(2908),f=l(4757);s.exports=function(m,g,v,w,h,p){var y=1&v,k=m.length,b=g.length;if(k!=b&&!(y&&b>k))return!1;var _=p.get(m),E=p.get(g);if(_&&E)return _==g&&E==m;var T=-1,L=!0,R=2&v?new c:void 0;for(p.set(m,g),p.set(g,m);++T<k;){var I=m[T],D=g[T];if(w)var W=y?w(D,I,T,g,m,p):w(I,D,T,m,g,p);if(W!==void 0){if(W)continue;L=!1;break}if(R){if(!d(g,function(H,U){if(!f(R,U)&&(I===H||h(I,H,v,w,p)))return R.push(U)})){L=!1;break}}else if(I!==D&&!h(I,D,v,w,p)){L=!1;break}}return p.delete(m),p.delete(g),L}},8351:(s,u,l)=>{var c=l(2705),d=l(1149),f=l(7813),m=l(7114),g=l(8776),v=l(1814),w=c?c.prototype:void 0,h=w?w.valueOf:void 0;s.exports=function(p,y,k,b,_,E,T){switch(k){case"[object DataView]":if(p.byteLength!=y.byteLength||p.byteOffset!=y.byteOffset)return!1;p=p.buffer,y=y.buffer;case"[object ArrayBuffer]":return!(p.byteLength!=y.byteLength||!E(new d(p),new d(y)));case"[object Boolean]":case"[object Date]":case"[object Number]":return f(+p,+y);case"[object Error]":return p.name==y.name&&p.message==y.message;case"[object RegExp]":case"[object String]":return p==y+"";case"[object Map]":var L=g;case"[object Set]":var R=1&b;if(L||(L=v),p.size!=y.size&&!R)return!1;var I=T.get(p);if(I)return I==y;b|=2,T.set(p,y);var D=m(L(p),L(y),b,_,E,T);return T.delete(p),D;case"[object Symbol]":if(h)return h.call(p)==h.call(y)}return!1}},6096:(s,u,l)=>{var c=l(8234),d=Object.prototype.hasOwnProperty;s.exports=function(f,m,g,v,w,h){var p=1&g,y=c(f),k=y.length;if(k!=c(m).length&&!p)return!1;for(var b=k;b--;){var _=y[b];if(!(p?_ in m:d.call(m,_)))return!1}var E=h.get(f),T=h.get(m);if(E&&T)return E==m&&T==f;var L=!0;h.set(f,m),h.set(m,f);for(var R=p;++b<k;){var I=f[_=y[b]],D=m[_];if(v)var W=p?v(D,I,_,m,f,h):v(I,D,_,f,m,h);if(!(W===void 0?I===D||w(I,D,g,v,h):W)){L=!1;break}R||(R=_=="constructor")}if(L&&!R){var H=f.constructor,U=m.constructor;H==U||!("constructor"in f)||!("constructor"in m)||typeof H=="function"&&H instanceof H&&typeof U=="function"&&U instanceof U||(L=!1)}return h.delete(f),h.delete(m),L}},1957:(s,u,l)=>{var c=typeof l.g=="object"&&l.g&&l.g.Object===Object&&l.g;s.exports=c},8234:(s,u,l)=>{var c=l(8866),d=l(9551),f=l(3674);s.exports=function(m){return c(m,f,d)}},5050:(s,u,l)=>{var c=l(7019);s.exports=function(d,f){var m=d.__data__;return c(f)?m[typeof f=="string"?"string":"hash"]:m.map}},852:(s,u,l)=>{var c=l(8458),d=l(7801);s.exports=function(f,m){var g=d(f,m);return c(g)?g:void 0}},9607:(s,u,l)=>{var c=l(2705),d=Object.prototype,f=d.hasOwnProperty,m=d.toString,g=c?c.toStringTag:void 0;s.exports=function(v){var w=f.call(v,g),h=v[g];try{v[g]=void 0;var p=!0}catch{}var y=m.call(v);return p&&(w?v[g]=h:delete v[g]),y}},9551:(s,u,l)=>{var c=l(4963),d=l(479),f=Object.prototype.propertyIsEnumerable,m=Object.getOwnPropertySymbols,g=m?function(v){return v==null?[]:(v=Object(v),c(m(v),function(w){return f.call(v,w)}))}:d;s.exports=g},4160:(s,u,l)=>{var c=l(8552),d=l(7071),f=l(3818),m=l(8525),g=l(577),v=l(4239),w=l(346),h="[object Map]",p="[object Promise]",y="[object Set]",k="[object WeakMap]",b="[object DataView]",_=w(c),E=w(d),T=w(f),L=w(m),R=w(g),I=v;(c&&I(new c(new ArrayBuffer(1)))!=b||d&&I(new d)!=h||f&&I(f.resolve())!=p||m&&I(new m)!=y||g&&I(new g)!=k)&&(I=function(D){var W=v(D),H=W=="[object Object]"?D.constructor:void 0,U=H?w(H):"";if(U)switch(U){case _:return b;case E:return h;case T:return p;case L:return y;case R:return k}return W}),s.exports=I},7801:s=>{s.exports=function(u,l){return u==null?void 0:u[l]}},1789:(s,u,l)=>{var c=l(4536);s.exports=function(){this.__data__=c?c(null):{},this.size=0}},401:s=>{s.exports=function(u){var l=this.has(u)&&delete this.__data__[u];return this.size-=l?1:0,l}},7667:(s,u,l)=>{var c=l(4536),d=Object.prototype.hasOwnProperty;s.exports=function(f){var m=this.__data__;if(c){var g=m[f];return g==="__lodash_hash_undefined__"?void 0:g}return d.call(m,f)?m[f]:void 0}},1327:(s,u,l)=>{var c=l(4536),d=Object.prototype.hasOwnProperty;s.exports=function(f){var m=this.__data__;return c?m[f]!==void 0:d.call(m,f)}},1866:(s,u,l)=>{var c=l(4536);s.exports=function(d,f){var m=this.__data__;return this.size+=this.has(d)?0:1,m[d]=c&&f===void 0?"__lodash_hash_undefined__":f,this}},5776:s=>{var u=/^(?:0|[1-9]\d*)$/;s.exports=function(l,c){var d=typeof l;return!!(c=c??9007199254740991)&&(d=="number"||d!="symbol"&&u.test(l))&&l>-1&&l%1==0&&l<c}},7019:s=>{s.exports=function(u){var l=typeof u;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?u!=="__proto__":u===null}},5346:(s,u,l)=>{var c,d=l(4429),f=(c=/[^.]+$/.exec(d&&d.keys&&d.keys.IE_PROTO||""))?"Symbol(src)_1."+c:"";s.exports=function(m){return!!f&&f in m}},5726:s=>{var u=Object.prototype;s.exports=function(l){var c=l&&l.constructor;return l===(typeof c=="function"&&c.prototype||u)}},7040:s=>{s.exports=function(){this.__data__=[],this.size=0}},4125:(s,u,l)=>{var c=l(8470),d=Array.prototype.splice;s.exports=function(f){var m=this.__data__,g=c(m,f);return!(g<0||(g==m.length-1?m.pop():d.call(m,g,1),--this.size,0))}},2117:(s,u,l)=>{var c=l(8470);s.exports=function(d){var f=this.__data__,m=c(f,d);return m<0?void 0:f[m][1]}},7518:(s,u,l)=>{var c=l(8470);s.exports=function(d){return c(this.__data__,d)>-1}},4705:(s,u,l)=>{var c=l(8470);s.exports=function(d,f){var m=this.__data__,g=c(m,d);return g<0?(++this.size,m.push([d,f])):m[g][1]=f,this}},4785:(s,u,l)=>{var c=l(1989),d=l(8407),f=l(7071);s.exports=function(){this.size=0,this.__data__={hash:new c,map:new(f||d),string:new c}}},1285:(s,u,l)=>{var c=l(5050);s.exports=function(d){var f=c(this,d).delete(d);return this.size-=f?1:0,f}},6e3:(s,u,l)=>{var c=l(5050);s.exports=function(d){return c(this,d).get(d)}},9916:(s,u,l)=>{var c=l(5050);s.exports=function(d){return c(this,d).has(d)}},5265:(s,u,l)=>{var c=l(5050);s.exports=function(d,f){var m=c(this,d),g=m.size;return m.set(d,f),this.size+=m.size==g?0:1,this}},8776:s=>{s.exports=function(u){var l=-1,c=Array(u.size);return u.forEach(function(d,f){c[++l]=[f,d]}),c}},4536:(s,u,l)=>{var c=l(852)(Object,"create");s.exports=c},6916:(s,u,l)=>{var c=l(5569)(Object.keys,Object);s.exports=c},1167:(s,u,l)=>{s=l.nmd(s);var c=l(1957),d=u&&!u.nodeType&&u,f=d&&s&&!s.nodeType&&s,m=f&&f.exports===d&&c.process,g=function(){try{return f&&f.require&&f.require("util").types||m&&m.binding&&m.binding("util")}catch{}}();s.exports=g},2333:s=>{var u=Object.prototype.toString;s.exports=function(l){return u.call(l)}},5569:s=>{s.exports=function(u,l){return function(c){return u(l(c))}}},5639:(s,u,l)=>{var c=l(1957),d=typeof self=="object"&&self&&self.Object===Object&&self,f=c||d||Function("return this")();s.exports=f},619:s=>{s.exports=function(u){return this.__data__.set(u,"__lodash_hash_undefined__"),this}},2385:s=>{s.exports=function(u){return this.__data__.has(u)}},1814:s=>{s.exports=function(u){var l=-1,c=Array(u.size);return u.forEach(function(d){c[++l]=d}),c}},7465:(s,u,l)=>{var c=l(8407);s.exports=function(){this.__data__=new c,this.size=0}},3779:s=>{s.exports=function(u){var l=this.__data__,c=l.delete(u);return this.size=l.size,c}},7599:s=>{s.exports=function(u){return this.__data__.get(u)}},4758:s=>{s.exports=function(u){return this.__data__.has(u)}},4309:(s,u,l)=>{var c=l(8407),d=l(7071),f=l(3369);s.exports=function(m,g){var v=this.__data__;if(v instanceof c){var w=v.__data__;if(!d||w.length<199)return w.push([m,g]),this.size=++v.size,this;v=this.__data__=new f(w)}return v.set(m,g),this.size=v.size,this}},346:s=>{var u=Function.prototype.toString;s.exports=function(l){if(l!=null){try{return u.call(l)}catch{}try{return l+""}catch{}}return""}},7813:s=>{s.exports=function(u,l){return u===l||u!=u&&l!=l}},5694:(s,u,l)=>{var c=l(9454),d=l(7005),f=Object.prototype,m=f.hasOwnProperty,g=f.propertyIsEnumerable,v=c(function(){return arguments}())?c:function(w){return d(w)&&m.call(w,"callee")&&!g.call(w,"callee")};s.exports=v},1469:s=>{var u=Array.isArray;s.exports=u},8612:(s,u,l)=>{var c=l(3560),d=l(1780);s.exports=function(f){return f!=null&&d(f.length)&&!c(f)}},4144:(s,u,l)=>{s=l.nmd(s);var c=l(5639),d=l(5062),f=u&&!u.nodeType&&u,m=f&&s&&!s.nodeType&&s,g=m&&m.exports===f?c.Buffer:void 0,v=(g?g.isBuffer:void 0)||d;s.exports=v},8446:(s,u,l)=>{var c=l(939);s.exports=function(d,f){return c(d,f)}},3560:(s,u,l)=>{var c=l(4239),d=l(3218);s.exports=function(f){if(!d(f))return!1;var m=c(f);return m=="[object Function]"||m=="[object GeneratorFunction]"||m=="[object AsyncFunction]"||m=="[object Proxy]"}},1780:s=>{s.exports=function(u){return typeof u=="number"&&u>-1&&u%1==0&&u<=9007199254740991}},3218:s=>{s.exports=function(u){var l=typeof u;return u!=null&&(l=="object"||l=="function")}},7005:s=>{s.exports=function(u){return u!=null&&typeof u=="object"}},6719:(s,u,l)=>{var c=l(8749),d=l(1717),f=l(1167),m=f&&f.isTypedArray,g=m?d(m):c;s.exports=g},3674:(s,u,l)=>{var c=l(4636),d=l(280),f=l(8612);s.exports=function(m){return f(m)?c(m):d(m)}},479:s=>{s.exports=function(){return[]}},5062:s=>{s.exports=function(){return!1}},75:function(s){(function(){var u,l,c,d,f,m;typeof performance<"u"&&performance!==null&&performance.now?s.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(s.exports=function(){return(u()-f)/1e6},l=process.hrtime,d=(u=function(){var g;return 1e9*(g=l())[0]+g[1]})(),m=1e9*process.uptime(),f=d-m):Date.now?(s.exports=function(){return Date.now()-c},c=Date.now()):(s.exports=function(){return new Date().getTime()-c},c=new Date().getTime())}).call(this)},4087:(s,u,l)=>{for(var c=l(75),d=typeof window>"u"?l.g:window,f=["moz","webkit"],m="AnimationFrame",g=d["request"+m],v=d["cancel"+m]||d["cancelRequest"+m],w=0;!g&&w<f.length;w++)g=d[f[w]+"Request"+m],v=d[f[w]+"Cancel"+m]||d[f[w]+"CancelRequest"+m];if(!g||!v){var h=0,p=0,y=[];g=function(k){if(y.length===0){var b=c(),_=Math.max(0,16.666666666666668-(b-h));h=_+b,setTimeout(function(){var E=y.slice(0);y.length=0;for(var T=0;T<E.length;T++)if(!E[T].cancelled)try{E[T].callback(h)}catch(L){setTimeout(function(){throw L},0)}},Math.round(_))}return y.push({handle:++p,callback:k,cancelled:!1}),p},v=function(k){for(var b=0;b<y.length;b++)y[b].handle===k&&(y[b].cancelled=!0)}}s.exports=function(k){return g.call(d,k)},s.exports.cancel=function(){v.apply(d,arguments)},s.exports.polyfill=function(k){k||(k=d),k.requestAnimationFrame=g,k.cancelAnimationFrame=v}},8156:s=>{s.exports=n}},o={};function i(s){var u=o[s];if(u!==void 0)return u.exports;var l=o[s]={id:s,loaded:!1,exports:{}};return r[s].call(l.exports,l,l.exports,i),l.loaded=!0,l.exports}i.n=s=>{var u=s&&s.__esModule?()=>s.default:()=>s;return i.d(u,{a:u}),u},i.d=(s,u)=>{for(var l in u)i.o(u,l)&&!i.o(s,l)&&Object.defineProperty(s,l,{enumerable:!0,get:u[l]})},i.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),i.o=(s,u)=>Object.prototype.hasOwnProperty.call(s,u),i.nmd=s=>(s.paths=[],s.children||(s.children=[]),s);var a={};return(()=>{i.d(a,{default:()=>y});var s=i(8156),u=i.n(s),l=i(7403),c=i(8446),d=i.n(c);function f(k){return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},f(k)}function m(k,b){for(var _=0;_<b.length;_++){var E=b[_];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(k,h(E.key),E)}}function g(k,b){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(_,E){return _.__proto__=E,_},g(k,b)}function v(k){if(k===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return k}function w(k){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(b){return b.__proto__||Object.getPrototypeOf(b)},w(k)}function h(k){var b=function(_,E){if(f(_)!=="object"||_===null)return _;var T=_[Symbol.toPrimitive];if(T!==void 0){var L=T.call(_,"string");if(f(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(_)}(k);return f(b)==="symbol"?b:String(b)}var p=function(k){(function(I,D){if(typeof D!="function"&&D!==null)throw new TypeError("Super expression must either be null or a function");I.prototype=Object.create(D&&D.prototype,{constructor:{value:I,writable:!0,configurable:!0}}),Object.defineProperty(I,"prototype",{writable:!1}),D&&g(I,D)})(R,k);var b,_,E,T,L=(E=R,T=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var I,D=w(E);if(T){var W=w(this).constructor;I=Reflect.construct(D,arguments,W)}else I=D.apply(this,arguments);return function(H,U){if(U&&(f(U)==="object"||typeof U=="function"))return U;if(U!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return v(H)}(this,I)});function R(){var I,D,W,H;(function(A,z){if(!(A instanceof z))throw new TypeError("Cannot call a class as a function")})(this,R);for(var U=arguments.length,F=new Array(U),X=0;X<U;X++)F[X]=arguments[X];return D=v(I=L.call.apply(L,[this].concat(F))),H={instance:null},(W=h(W="state"))in D?Object.defineProperty(D,W,{value:H,enumerable:!0,configurable:!0,writable:!0}):D[W]=H,I}return b=R,(_=[{key:"componentDidMount",value:function(){var I=this,D=new l.default(this.typewriter,this.props.options);this.setState({instance:D},function(){var W=I.props.onInit;W&&W(D)})}},{key:"componentDidUpdate",value:function(I){d()(this.props.options,I.options)||this.setState({instance:new l.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var I=this,D=this.props.component;return u().createElement(D,{ref:function(W){return I.typewriter=W},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&m(b.prototype,_),Object.defineProperty(b,"prototype",{writable:!1}),R}(s.Component);p.defaultProps={component:"div"};const y=p})(),a.default})())})(cg);var Zx=cg.exports;const ew=Na(Zx),Rf=j.a`
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


  :hover {
    border: 1.8px solid ${({theme:e})=>e.primary};
    color: ${({theme:e})=>e.primary};
  }

  &.active {
    border-bottom: 2px solid ${({theme:e})=>e.primary};
  }
`,tw=j.a`
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
`,nw=j.div`
  margin-left: 5px;
`,rw=()=>{const{selectedLanguage:e}=Lt(),{isDarkMode:t}=ar();return x.jsxs(Bx,{id:"home",children:[x.jsx(Ux,{children:x.jsx(Fx,{})}),x.jsxs(Vx,{children:[x.jsxs(Hx,{id:"Left",children:[x.jsx(Kx,{children:Y[e].name}),x.jsx(Jx,{children:Y[e].functions}),x.jsx(Qx,{children:x.jsx(Yx,{children:x.jsx(ew,{options:{strings:Y[e].roles,autoStart:!0,loop:!0}})})}),x.jsx(Xx,{children:Y[e].location.countries}),x.jsxs(qx,{children:[" ",x.jsx("br",{}),Y[e].description]}),x.jsxs(tw,{children:[x.jsx(Rf,{isDarkMode:t,href:Y[e].linkedin,target:"display",children:x.jsx(Mc,{style:{cursor:"pointer",width:"20px",height:"20px"}})}),x.jsxs(Rf,{isDarkMode:t,href:Y[e].ResumeLink,target:"display",children:[x.jsx(ug,{}),x.jsx(nw,{children:Y[e].ResumeTitle})]})]})]}),x.jsx(Wx,{id:"Right",children:x.jsx(Gx,{src:Y[e].homelinkimg,alt:"Vidigal"})})]})]})},ow=j.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`,iw=j.div`
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
`,aw=j.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 25px;
  color: ${({theme:e})=>e.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,sw=j.div`
  font-size: 30px;
  text-align: center;
  font-style: italic;
  max-width: 600px;
  padding: 10px;
  color: ${({theme:e})=>e.primary};
  @media (max-width: 768px) {
    font-size: 25px;
  }
`,lw=j.div`
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
`,uw=j.div`
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
`,cw=j.div`
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


`,dw=j.h2`
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
`,fw=j.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`,pw=j.span`
  font-size: 12px;
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 500px) {
    display: none;
  }
`,mw=j.span`
  font-size: 14px;
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 500px) {
    display: none;
  }
`,hw=j.span`
  font-size: 15px;
`,gw=j.div`
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

  :hover {
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
`,vw=j.img`
  width: 25px;
  height: 25px;
  padding-right: 4px;
  float: left;
`,yw=j.a`
  color: ${e=>e.isDarkMode?"white":"black"};
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


`,xw=()=>{const{selectedLanguage:e}=Lt(),{isDarkMode:t}=ar();return x.jsx(ow,{id:"skills",children:x.jsxs(iw,{children:[x.jsx(aw,{children:Y[e].nav.skills}),x.jsx(lw,{children:Y[e].skillsAll.desc}),x.jsx(sw,{children:Y[e].skillsAll.title}),x.jsx(uw,{children:Y[e].skillsAll.info.map(n=>x.jsxs(cw,{children:[x.jsx(dw,{children:n.subtitle}),x.jsx(fw,{children:n.skills.map(r=>x.jsx(gw,{children:x.jsxs(yw,{isDarkMode:t,href:r.link,target:"_blank",rel:"noopener noreferrer",children:[x.jsx(vw,{src:r.image,alt:r.name}),x.jsx(hw,{children:r.name}),x.jsxs(mw,{children:[" ",r.date]}),x.jsxs(pw,{children:[x.jsx("br",{}),r.category]})]})},r.name))})]},n.subtitle))})]})})},ww={black:"#000",white:"#fff"},Jo=ww,kw={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},pr=kw,bw={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},mr=bw,Sw={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},hr=Sw,Cw={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},gr=Cw,Ew={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},vr=Ew,_w={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},mo=_w,jw={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},Pw=jw;function Zo(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}const Tw=Object.freeze(Object.defineProperty({__proto__:null,default:Zo},Symbol.toStringTag,{value:"Module"})),Nc="$$material";function V(){return V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V.apply(this,arguments)}function Ne(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function $w(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Ow(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Rw=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Ow(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=$w(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Ke="-ms-",Ra="-moz-",se="-webkit-",dg="comm",Lc="rule",Dc="decl",Aw="@import",fg="@keyframes",zw="@layer",Iw=Math.abs,Ss=String.fromCharCode,Mw=Object.assign;function Nw(e,t){return Ue(e,0)^45?(((t<<2^Ue(e,0))<<2^Ue(e,1))<<2^Ue(e,2))<<2^Ue(e,3):0}function pg(e){return e.trim()}function Lw(e,t){return(e=t.exec(e))?e[0]:e}function le(e,t,n){return e.replace(t,n)}function yu(e,t){return e.indexOf(t)}function Ue(e,t){return e.charCodeAt(t)|0}function ei(e,t,n){return e.slice(t,n)}function Ut(e){return e.length}function Fc(e){return e.length}function Ii(e,t){return t.push(e),e}function Dw(e,t){return e.map(t).join("")}var Cs=1,Xr=1,mg=0,at=0,Re=0,no="";function Es(e,t,n,r,o,i,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Cs,column:Xr,length:a,return:""}}function ho(e,t){return Mw(Es("",null,null,"",null,null,0),e,{length:-e.length},t)}function Fw(){return Re}function Bw(){return Re=at>0?Ue(no,--at):0,Xr--,Re===10&&(Xr=1,Cs--),Re}function dt(){return Re=at<mg?Ue(no,at++):0,Xr++,Re===10&&(Xr=1,Cs++),Re}function Kt(){return Ue(no,at)}function Xi(){return at}function ui(e,t){return ei(no,e,t)}function ti(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function hg(e){return Cs=Xr=1,mg=Ut(no=e),at=0,[]}function gg(e){return no="",e}function Ji(e){return pg(ui(at-1,xu(e===91?e+2:e===40?e+1:e)))}function Uw(e){for(;(Re=Kt())&&Re<33;)dt();return ti(e)>2||ti(Re)>3?"":" "}function Vw(e,t){for(;--t&&dt()&&!(Re<48||Re>102||Re>57&&Re<65||Re>70&&Re<97););return ui(e,Xi()+(t<6&&Kt()==32&&dt()==32))}function xu(e){for(;dt();)switch(Re){case e:return at;case 34:case 39:e!==34&&e!==39&&xu(Re);break;case 40:e===41&&xu(e);break;case 92:dt();break}return at}function Hw(e,t){for(;dt()&&e+Re!==57;)if(e+Re===84&&Kt()===47)break;return"/*"+ui(t,at-1)+"*"+Ss(e===47?e:dt())}function Ww(e){for(;!ti(Kt());)dt();return ui(e,at)}function Gw(e){return gg(Zi("",null,null,null,[""],e=hg(e),0,[0],e))}function Zi(e,t,n,r,o,i,a,s,u){for(var l=0,c=0,d=a,f=0,m=0,g=0,v=1,w=1,h=1,p=0,y="",k=o,b=i,_=r,E=y;w;)switch(g=p,p=dt()){case 40:if(g!=108&&Ue(E,d-1)==58){yu(E+=le(Ji(p),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:E+=Ji(p);break;case 9:case 10:case 13:case 32:E+=Uw(g);break;case 92:E+=Vw(Xi()-1,7);continue;case 47:switch(Kt()){case 42:case 47:Ii(Kw(Hw(dt(),Xi()),t,n),u);break;default:E+="/"}break;case 123*v:s[l++]=Ut(E)*h;case 125*v:case 59:case 0:switch(p){case 0:case 125:w=0;case 59+c:h==-1&&(E=le(E,/\f/g,"")),m>0&&Ut(E)-d&&Ii(m>32?zf(E+";",r,n,d-1):zf(le(E," ","")+";",r,n,d-2),u);break;case 59:E+=";";default:if(Ii(_=Af(E,t,n,l,c,o,s,y,k=[],b=[],d),i),p===123)if(c===0)Zi(E,t,_,_,k,i,d,s,b);else switch(f===99&&Ue(E,3)===110?100:f){case 100:case 108:case 109:case 115:Zi(e,_,_,r&&Ii(Af(e,_,_,0,0,o,s,y,o,k=[],d),b),o,b,d,s,r?k:b);break;default:Zi(E,_,_,_,[""],b,0,s,b)}}l=c=m=0,v=h=1,y=E="",d=a;break;case 58:d=1+Ut(E),m=g;default:if(v<1){if(p==123)--v;else if(p==125&&v++==0&&Bw()==125)continue}switch(E+=Ss(p),p*v){case 38:h=c>0?1:(E+="\f",-1);break;case 44:s[l++]=(Ut(E)-1)*h,h=1;break;case 64:Kt()===45&&(E+=Ji(dt())),f=Kt(),c=d=Ut(y=E+=Ww(Xi())),p++;break;case 45:g===45&&Ut(E)==2&&(v=0)}}return i}function Af(e,t,n,r,o,i,a,s,u,l,c){for(var d=o-1,f=o===0?i:[""],m=Fc(f),g=0,v=0,w=0;g<r;++g)for(var h=0,p=ei(e,d+1,d=Iw(v=a[g])),y=e;h<m;++h)(y=pg(v>0?f[h]+" "+p:le(p,/&\f/g,f[h])))&&(u[w++]=y);return Es(e,t,n,o===0?Lc:s,u,l,c)}function Kw(e,t,n){return Es(e,t,n,dg,Ss(Fw()),ei(e,2,-2),0)}function zf(e,t,n,r){return Es(e,t,n,Dc,ei(e,0,r),ei(e,r+1,-1),r)}function Dr(e,t){for(var n="",r=Fc(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function Qw(e,t,n,r){switch(e.type){case zw:if(e.children.length)break;case Aw:case Dc:return e.return=e.return||e.value;case dg:return"";case fg:return e.return=e.value+"{"+Dr(e.children,r)+"}";case Lc:e.value=e.props.join(",")}return Ut(n=Dr(e.children,r))?e.return=e.value+"{"+n+"}":""}function Yw(e){var t=Fc(e);return function(n,r,o,i){for(var a="",s=0;s<t;s++)a+=e[s](n,r,o,i)||"";return a}}function qw(e){return function(t){t.root||(t=t.return)&&e(t)}}var Xw=function(t,n,r){for(var o=0,i=0;o=i,i=Kt(),o===38&&i===12&&(n[r]=1),!ti(i);)dt();return ui(t,at)},Jw=function(t,n){var r=-1,o=44;do switch(ti(o)){case 0:o===38&&Kt()===12&&(n[r]=1),t[r]+=Xw(at-1,n,r);break;case 2:t[r]+=Ji(o);break;case 4:if(o===44){t[++r]=Kt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Ss(o)}while(o=dt());return t},Zw=function(t,n){return gg(Jw(hg(t),n))},If=new WeakMap,e2=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!If.get(r))&&!o){If.set(t,!0);for(var i=[],a=Zw(n,i),s=r.props,u=0,l=0;u<a.length;u++)for(var c=0;c<s.length;c++,l++)t.props[l]=i[u]?a[u].replace(/&\f/g,s[c]):s[c]+" "+a[u]}}},t2=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function vg(e,t){switch(Nw(e,t)){case 5103:return se+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return se+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return se+e+Ra+e+Ke+e+e;case 6828:case 4268:return se+e+Ke+e+e;case 6165:return se+e+Ke+"flex-"+e+e;case 5187:return se+e+le(e,/(\w+).+(:[^]+)/,se+"box-$1$2"+Ke+"flex-$1$2")+e;case 5443:return se+e+Ke+"flex-item-"+le(e,/flex-|-self/,"")+e;case 4675:return se+e+Ke+"flex-line-pack"+le(e,/align-content|flex-|-self/,"")+e;case 5548:return se+e+Ke+le(e,"shrink","negative")+e;case 5292:return se+e+Ke+le(e,"basis","preferred-size")+e;case 6060:return se+"box-"+le(e,"-grow","")+se+e+Ke+le(e,"grow","positive")+e;case 4554:return se+le(e,/([^-])(transform)/g,"$1"+se+"$2")+e;case 6187:return le(le(le(e,/(zoom-|grab)/,se+"$1"),/(image-set)/,se+"$1"),e,"")+e;case 5495:case 3959:return le(e,/(image-set\([^]*)/,se+"$1$`$1");case 4968:return le(le(e,/(.+:)(flex-)?(.*)/,se+"box-pack:$3"+Ke+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+se+e+e;case 4095:case 3583:case 4068:case 2532:return le(e,/(.+)-inline(.+)/,se+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ut(e)-1-t>6)switch(Ue(e,t+1)){case 109:if(Ue(e,t+4)!==45)break;case 102:return le(e,/(.+:)(.+)-([^]+)/,"$1"+se+"$2-$3$1"+Ra+(Ue(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~yu(e,"stretch")?vg(le(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Ue(e,t+1)!==115)break;case 6444:switch(Ue(e,Ut(e)-3-(~yu(e,"!important")&&10))){case 107:return le(e,":",":"+se)+e;case 101:return le(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+se+(Ue(e,14)===45?"inline-":"")+"box$3$1"+se+"$2$3$1"+Ke+"$2box$3")+e}break;case 5936:switch(Ue(e,t+11)){case 114:return se+e+Ke+le(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return se+e+Ke+le(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return se+e+Ke+le(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return se+e+Ke+e+e}return e}var n2=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case Dc:t.return=vg(t.value,t.length);break;case fg:return Dr([ho(t,{value:le(t.value,"@","@"+se)})],o);case Lc:if(t.length)return Dw(t.props,function(i){switch(Lw(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Dr([ho(t,{props:[le(i,/:(read-\w+)/,":"+Ra+"$1")]})],o);case"::placeholder":return Dr([ho(t,{props:[le(i,/:(plac\w+)/,":"+se+"input-$1")]}),ho(t,{props:[le(i,/:(plac\w+)/,":"+Ra+"$1")]}),ho(t,{props:[le(i,/:(plac\w+)/,Ke+"input-$1")]})],o)}return""})}},r2=[n2],yg=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var w=v.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var o=t.stylisPlugins||r2,i={},a,s=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var w=v.getAttribute("data-emotion").split(" "),h=1;h<w.length;h++)i[w[h]]=!0;s.push(v)});var u,l=[e2,t2];{var c,d=[Qw,qw(function(v){c.insert(v)})],f=Yw(l.concat(o,d)),m=function(w){return Dr(Gw(w),f)};u=function(w,h,p,y){c=p,m(w?w+"{"+h.styles+"}":h.styles),y&&(g.inserted[h.name]=!0)}}var g={key:n,sheet:new Rw({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:u};return g.sheet.hydrate(s),g},o2=!0;function i2(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var xg=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||o2===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},wg=function(t,n,r){xg(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function a2(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var s2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},l2=/[A-Z]|^ms/g,u2=/_EMO_([^_]+?)_([^]*?)_EMO_/g,kg=function(t){return t.charCodeAt(1)===45},Mf=function(t){return t!=null&&typeof t!="boolean"},cl=Rh(function(e){return kg(e)?e:e.replace(l2,"-$&").toLowerCase()}),Nf=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(u2,function(r,o,i){return Vt={name:o,styles:i,next:Vt},o})}return s2[t]!==1&&!kg(t)&&typeof n=="number"&&n!==0?n+"px":n};function ni(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Vt={name:n.name,styles:n.styles,next:Vt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Vt={name:r.name,styles:r.styles,next:Vt},r=r.next;var o=n.styles+";";return o}return c2(e,t,n)}case"function":{if(e!==void 0){var i=Vt,a=n(e);return Vt=i,ni(e,t,a)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function c2(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=ni(e,t,n[o])+";";else for(var i in n){var a=n[i];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=i+"{"+t[a]+"}":Mf(a)&&(r+=cl(i)+":"+Nf(i,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var s=0;s<a.length;s++)Mf(a[s])&&(r+=cl(i)+":"+Nf(i,a[s])+";");else{var u=ni(e,t,a);switch(i){case"animation":case"animationName":{r+=cl(i)+":"+u+";";break}default:r+=i+"{"+u+"}"}}}return r}var Lf=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Vt,Bc=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";Vt=void 0;var a=t[0];a==null||a.raw===void 0?(o=!1,i+=ni(r,n,a)):i+=a[0];for(var s=1;s<t.length;s++)i+=ni(r,n,t[s]),o&&(i+=a[s]);Lf.lastIndex=0;for(var u="",l;(l=Lf.exec(i))!==null;)u+="-"+l[1];var c=a2(i)+u;return{name:c,styles:i,next:Vt}},d2=function(t){return t()},bg=vl.useInsertionEffect?vl.useInsertionEffect:!1,f2=bg||d2,Df=bg||P.useLayoutEffect,Sg=P.createContext(typeof HTMLElement<"u"?yg({key:"css"}):null),p2=Sg.Provider,Cg=function(t){return P.forwardRef(function(n,r){var o=P.useContext(Sg);return t(n,o,r)})},_s=P.createContext({}),dl={exports:{}},Ff;function Eg(){return Ff||(Ff=1,function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])}return n},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(dl)),dl.exports}Eg();var m2=Cg(function(e,t){var n=e.styles,r=Bc([n],void 0,P.useContext(_s)),o=P.useRef();return Df(function(){var i=t.key+"-global",a=new t.sheet.constructor({key:i,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),s=!1,u=document.querySelector('style[data-emotion="'+i+" "+r.name+'"]');return t.sheet.tags.length&&(a.before=t.sheet.tags[0]),u!==null&&(s=!0,u.setAttribute("data-emotion",i),a.hydrate([u])),o.current=[a,s],function(){a.flush()}},[t]),Df(function(){var i=o.current,a=i[0],s=i[1];if(s){i[1]=!1;return}if(r.next!==void 0&&wg(t,r.next,!0),a.tags.length){var u=a.tags[a.tags.length-1].nextElementSibling;a.before=u,a.flush()}t.insert("",r,a,!1)},[t,r.name]),null});function _g(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Bc(t)}var h2=function(){var t=_g.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},g2=du,v2=function(t){return t!=="theme"},Bf=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?g2:v2},Uf=function(t,n,r){var o;if(n){var i=n.shouldForwardProp;o=t.__emotion_forwardProp&&i?function(a){return t.__emotion_forwardProp(a)&&i(a)}:i}return typeof o!="function"&&r&&(o=t.__emotion_forwardProp),o},y2=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return xg(n,r,o),f2(function(){return wg(n,r,o)}),null},x2=function e(t,n){var r=t.__emotion_real===t,o=r&&t.__emotion_base||t,i,a;n!==void 0&&(i=n.label,a=n.target);var s=Uf(t,n,r),u=s||Bf(o),l=!u("as");return function(){var c=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(i!==void 0&&d.push("label:"+i+";"),c[0]==null||c[0].raw===void 0)d.push.apply(d,c);else{d.push(c[0][0]);for(var f=c.length,m=1;m<f;m++)d.push(c[m],c[0][m])}var g=Cg(function(v,w,h){var p=l&&v.as||o,y="",k=[],b=v;if(v.theme==null){b={};for(var _ in v)b[_]=v[_];b.theme=P.useContext(_s)}typeof v.className=="string"?y=i2(w.registered,k,v.className):v.className!=null&&(y=v.className+" ");var E=Bc(d.concat(k),w.registered,b);y+=w.key+"-"+E.name,a!==void 0&&(y+=" "+a);var T=l&&s===void 0?Bf(p):u,L={};for(var R in v)l&&R==="as"||T(R)&&(L[R]=v[R]);return L.className=y,L.ref=h,P.createElement(P.Fragment,null,P.createElement(y2,{cache:w,serialized:E,isStringTag:typeof p=="string"}),P.createElement(p,L))});return g.displayName=i!==void 0?i:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",g.defaultProps=t.defaultProps,g.__emotion_real=g,g.__emotion_base=o,g.__emotion_styles=d,g.__emotion_forwardProp=s,Object.defineProperty(g,"toString",{value:function(){return"."+a}}),g.withComponent=function(v,w){return e(v,V({},n,w,{shouldForwardProp:Uf(g,w,!0)})).apply(void 0,d)},g}},w2=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],wu=x2.bind();w2.forEach(function(e){wu[e]=wu(e)});let ku;typeof document=="object"&&(ku=yg({key:"css",prepend:!0}));function k2(e){const{injectFirst:t,children:n}=e;return t&&ku?x.jsx(p2,{value:ku,children:n}):n}function b2(e){return e==null||Object.keys(e).length===0}function S2(e){const{styles:t,defaultTheme:n={}}=e,r=typeof t=="function"?o=>t(b2(o)?n:o):t;return x.jsx(m2,{styles:r})}function C2(e,t){return wu(e,t)}const E2=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))},_2=Object.freeze(Object.defineProperty({__proto__:null,GlobalStyles:S2,StyledEngineProvider:k2,ThemeContext:_s,css:_g,default:C2,internal_processStyles:E2,keyframes:h2},Symbol.toStringTag,{value:"Module"}));function xn(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function jg(e){if(!xn(e))return e;const t={};return Object.keys(e).forEach(n=>{t[n]=jg(e[n])}),t}function Qt(e,t,n={clone:!0}){const r=n.clone?V({},e):e;return xn(e)&&xn(t)&&Object.keys(t).forEach(o=>{o!=="__proto__"&&(xn(t[o])&&o in e&&xn(e[o])?r[o]=Qt(e[o],t[o],n):n.clone?r[o]=xn(t[o])?jg(t[o]):t[o]:r[o]=t[o])}),r}const j2=Object.freeze(Object.defineProperty({__proto__:null,default:Qt,isPlainObject:xn},Symbol.toStringTag,{value:"Module"})),P2=["values","unit","step"],T2=e=>{const t=Object.keys(e).map(n=>({key:n,val:e[n]}))||[];return t.sort((n,r)=>n.val-r.val),t.reduce((n,r)=>V({},n,{[r.key]:r.val}),{})};function Pg(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=e,o=Ne(e,P2),i=T2(t),a=Object.keys(i);function s(f){return`@media (min-width:${typeof t[f]=="number"?t[f]:f}${n})`}function u(f){return`@media (max-width:${(typeof t[f]=="number"?t[f]:f)-r/100}${n})`}function l(f,m){const g=a.indexOf(m);return`@media (min-width:${typeof t[f]=="number"?t[f]:f}${n}) and (max-width:${(g!==-1&&typeof t[a[g]]=="number"?t[a[g]]:m)-r/100}${n})`}function c(f){return a.indexOf(f)+1<a.length?l(f,a[a.indexOf(f)+1]):s(f)}function d(f){const m=a.indexOf(f);return m===0?s(a[1]):m===a.length-1?u(a[m]):l(f,a[a.indexOf(f)+1]).replace("@media","@media not all and")}return V({keys:a,values:i,up:s,down:u,between:l,only:c,not:d,unit:n},o)}const $2={borderRadius:4},O2=$2;function Ro(e,t){return t?Qt(e,t,{clone:!1}):e}const Uc={xs:0,sm:600,md:900,lg:1200,xl:1536},Vf={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${Uc[e]}px)`};function un(e,t,n){const r=e.theme||{};if(Array.isArray(t)){const i=r.breakpoints||Vf;return t.reduce((a,s,u)=>(a[i.up(i.keys[u])]=n(t[u]),a),{})}if(typeof t=="object"){const i=r.breakpoints||Vf;return Object.keys(t).reduce((a,s)=>{if(Object.keys(i.values||Uc).indexOf(s)!==-1){const u=i.up(s);a[u]=n(t[s],s)}else{const u=s;a[u]=t[u]}return a},{})}return n(t)}function R2(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((r,o)=>{const i=e.up(o);return r[i]={},r},{}))||{}}function A2(e,t){return e.reduce((n,r)=>{const o=n[r];return(!o||Object.keys(o).length===0)&&delete n[r],n},t)}function Yt(e){if(typeof e!="string")throw new Error(Zo(7));return e.charAt(0).toUpperCase()+e.slice(1)}const z2=Object.freeze(Object.defineProperty({__proto__:null,default:Yt},Symbol.toStringTag,{value:"Module"}));function js(e,t,n=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&n){const r=`vars.${t}`.split(".").reduce((o,i)=>o&&o[i]?o[i]:null,e);if(r!=null)return r}return t.split(".").reduce((r,o)=>r&&r[o]!=null?r[o]:null,e)}function Aa(e,t,n,r=n){let o;return typeof e=="function"?o=e(n):Array.isArray(e)?o=e[n]||r:o=js(e,n)||r,t&&(o=t(o,r,e)),o}function Te(e){const{prop:t,cssProperty:n=e.prop,themeKey:r,transform:o}=e,i=a=>{if(a[t]==null)return null;const s=a[t],u=a.theme,l=js(u,r)||{};return un(a,s,d=>{let f=Aa(l,o,d);return d===f&&typeof d=="string"&&(f=Aa(l,o,`${t}${d==="default"?"":Yt(d)}`,d)),n===!1?f:{[n]:f}})};return i.propTypes={},i.filterProps=[t],i}function I2(e){const t={};return n=>(t[n]===void 0&&(t[n]=e(n)),t[n])}const M2={m:"margin",p:"padding"},N2={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},Hf={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},L2=I2(e=>{if(e.length>2)if(Hf[e])e=Hf[e];else return[e];const[t,n]=e.split(""),r=M2[t],o=N2[n]||"";return Array.isArray(o)?o.map(i=>r+i):[r+o]}),Vc=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],Hc=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...Vc,...Hc];function ci(e,t,n,r){var o;const i=(o=js(e,t,!1))!=null?o:n;return typeof i=="number"?a=>typeof a=="string"?a:i*a:Array.isArray(i)?a=>typeof a=="string"?a:i[a]:typeof i=="function"?i:()=>{}}function Tg(e){return ci(e,"spacing",8)}function di(e,t){if(typeof t=="string"||t==null)return t;const n=Math.abs(t),r=e(n);return t>=0?r:typeof r=="number"?-r:`-${r}`}function D2(e,t){return n=>e.reduce((r,o)=>(r[o]=di(t,n),r),{})}function F2(e,t,n,r){if(t.indexOf(n)===-1)return null;const o=L2(n),i=D2(o,r),a=e[n];return un(e,a,i)}function $g(e,t){const n=Tg(e.theme);return Object.keys(e).map(r=>F2(e,t,r,n)).reduce(Ro,{})}function Ce(e){return $g(e,Vc)}Ce.propTypes={};Ce.filterProps=Vc;function Ee(e){return $g(e,Hc)}Ee.propTypes={};Ee.filterProps=Hc;function B2(e=8){if(e.mui)return e;const t=Tg({spacing:e}),n=(...r)=>(r.length===0?[1]:r).map(i=>{const a=t(i);return typeof a=="number"?`${a}px`:a}).join(" ");return n.mui=!0,n}function Ps(...e){const t=e.reduce((r,o)=>(o.filterProps.forEach(i=>{r[i]=o}),r),{}),n=r=>Object.keys(r).reduce((o,i)=>t[i]?Ro(o,t[i](r)):o,{});return n.propTypes={},n.filterProps=e.reduce((r,o)=>r.concat(o.filterProps),[]),n}function wt(e){return typeof e!="number"?e:`${e}px solid`}function jt(e,t){return Te({prop:e,themeKey:"borders",transform:t})}const U2=jt("border",wt),V2=jt("borderTop",wt),H2=jt("borderRight",wt),W2=jt("borderBottom",wt),G2=jt("borderLeft",wt),K2=jt("borderColor"),Q2=jt("borderTopColor"),Y2=jt("borderRightColor"),q2=jt("borderBottomColor"),X2=jt("borderLeftColor"),J2=jt("outline",wt),Z2=jt("outlineColor"),Ts=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=ci(e.theme,"shape.borderRadius",4),n=r=>({borderRadius:di(t,r)});return un(e,e.borderRadius,n)}return null};Ts.propTypes={};Ts.filterProps=["borderRadius"];Ps(U2,V2,H2,W2,G2,K2,Q2,Y2,q2,X2,Ts,J2,Z2);const $s=e=>{if(e.gap!==void 0&&e.gap!==null){const t=ci(e.theme,"spacing",8),n=r=>({gap:di(t,r)});return un(e,e.gap,n)}return null};$s.propTypes={};$s.filterProps=["gap"];const Os=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=ci(e.theme,"spacing",8),n=r=>({columnGap:di(t,r)});return un(e,e.columnGap,n)}return null};Os.propTypes={};Os.filterProps=["columnGap"];const Rs=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=ci(e.theme,"spacing",8),n=r=>({rowGap:di(t,r)});return un(e,e.rowGap,n)}return null};Rs.propTypes={};Rs.filterProps=["rowGap"];const ek=Te({prop:"gridColumn"}),tk=Te({prop:"gridRow"}),nk=Te({prop:"gridAutoFlow"}),rk=Te({prop:"gridAutoColumns"}),ok=Te({prop:"gridAutoRows"}),ik=Te({prop:"gridTemplateColumns"}),ak=Te({prop:"gridTemplateRows"}),sk=Te({prop:"gridTemplateAreas"}),lk=Te({prop:"gridArea"});Ps($s,Os,Rs,ek,tk,nk,rk,ok,ik,ak,sk,lk);function Fr(e,t){return t==="grey"?t:e}const uk=Te({prop:"color",themeKey:"palette",transform:Fr}),ck=Te({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Fr}),dk=Te({prop:"backgroundColor",themeKey:"palette",transform:Fr});Ps(uk,ck,dk);function lt(e){return e<=1&&e!==0?`${e*100}%`:e}const fk=Te({prop:"width",transform:lt}),Wc=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=n=>{var r,o;const i=((r=e.theme)==null||(r=r.breakpoints)==null||(r=r.values)==null?void 0:r[n])||Uc[n];return i?((o=e.theme)==null||(o=o.breakpoints)==null?void 0:o.unit)!=="px"?{maxWidth:`${i}${e.theme.breakpoints.unit}`}:{maxWidth:i}:{maxWidth:lt(n)}};return un(e,e.maxWidth,t)}return null};Wc.filterProps=["maxWidth"];const pk=Te({prop:"minWidth",transform:lt}),mk=Te({prop:"height",transform:lt}),hk=Te({prop:"maxHeight",transform:lt}),gk=Te({prop:"minHeight",transform:lt});Te({prop:"size",cssProperty:"width",transform:lt});Te({prop:"size",cssProperty:"height",transform:lt});const vk=Te({prop:"boxSizing"});Ps(fk,Wc,pk,mk,hk,gk,vk);const yk={border:{themeKey:"borders",transform:wt},borderTop:{themeKey:"borders",transform:wt},borderRight:{themeKey:"borders",transform:wt},borderBottom:{themeKey:"borders",transform:wt},borderLeft:{themeKey:"borders",transform:wt},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:wt},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Ts},color:{themeKey:"palette",transform:Fr},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Fr},backgroundColor:{themeKey:"palette",transform:Fr},p:{style:Ee},pt:{style:Ee},pr:{style:Ee},pb:{style:Ee},pl:{style:Ee},px:{style:Ee},py:{style:Ee},padding:{style:Ee},paddingTop:{style:Ee},paddingRight:{style:Ee},paddingBottom:{style:Ee},paddingLeft:{style:Ee},paddingX:{style:Ee},paddingY:{style:Ee},paddingInline:{style:Ee},paddingInlineStart:{style:Ee},paddingInlineEnd:{style:Ee},paddingBlock:{style:Ee},paddingBlockStart:{style:Ee},paddingBlockEnd:{style:Ee},m:{style:Ce},mt:{style:Ce},mr:{style:Ce},mb:{style:Ce},ml:{style:Ce},mx:{style:Ce},my:{style:Ce},margin:{style:Ce},marginTop:{style:Ce},marginRight:{style:Ce},marginBottom:{style:Ce},marginLeft:{style:Ce},marginX:{style:Ce},marginY:{style:Ce},marginInline:{style:Ce},marginInlineStart:{style:Ce},marginInlineEnd:{style:Ce},marginBlock:{style:Ce},marginBlockStart:{style:Ce},marginBlockEnd:{style:Ce},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:$s},rowGap:{style:Rs},columnGap:{style:Os},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:lt},maxWidth:{style:Wc},minWidth:{transform:lt},height:{transform:lt},maxHeight:{transform:lt},minHeight:{transform:lt},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},fi=yk;function xk(...e){const t=e.reduce((r,o)=>r.concat(Object.keys(o)),[]),n=new Set(t);return e.every(r=>n.size===Object.keys(r).length)}function wk(e,t){return typeof e=="function"?e(t):e}function Og(){function e(n,r,o,i){const a={[n]:r,theme:o},s=i[n];if(!s)return{[n]:r};const{cssProperty:u=n,themeKey:l,transform:c,style:d}=s;if(r==null)return null;if(l==="typography"&&r==="inherit")return{[n]:r};const f=js(o,l)||{};return d?d(a):un(a,r,g=>{let v=Aa(f,c,g);return g===v&&typeof g=="string"&&(v=Aa(f,c,`${n}${g==="default"?"":Yt(g)}`,g)),u===!1?v:{[u]:v}})}function t(n){var r;const{sx:o,theme:i={}}=n||{};if(!o)return null;const a=(r=i.unstable_sxConfig)!=null?r:fi;function s(u){let l=u;if(typeof u=="function")l=u(i);else if(typeof u!="object")return u;if(!l)return null;const c=R2(i.breakpoints),d=Object.keys(c);let f=c;return Object.keys(l).forEach(m=>{const g=wk(l[m],i);if(g!=null)if(typeof g=="object")if(a[m])f=Ro(f,e(m,g,i,a));else{const v=un({theme:i},g,w=>({[m]:w}));xk(v,g)?f[m]=t({sx:g,theme:i}):f=Ro(f,v)}else f=Ro(f,e(m,g,i,a))}),A2(d,f)}return Array.isArray(o)?o.map(s):s(o)}return t}const As=Og();As.filterProps=["sx"];function Rg(e,t){const n=this;return n.vars&&typeof n.getColorSchemeSelector=="function"?{[n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/,"*:where($1)")]:t}:n.palette.mode===e?t:{}}const kk=["breakpoints","palette","spacing","shape"];function Gc(e={},...t){const{breakpoints:n={},palette:r={},spacing:o,shape:i={}}=e,a=Ne(e,kk),s=Pg(n),u=B2(o);let l=Qt({breakpoints:s,direction:"ltr",components:{},palette:V({mode:"light"},r),spacing:u,shape:V({},O2,i)},a);return l.applyStyles=Rg,l=t.reduce((c,d)=>Qt(c,d),l),l.unstable_sxConfig=V({},fi,a==null?void 0:a.unstable_sxConfig),l.unstable_sx=function(d){return As({sx:d,theme:this})},l}const bk=Object.freeze(Object.defineProperty({__proto__:null,default:Gc,private_createBreakpoints:Pg,unstable_applyStyles:Rg},Symbol.toStringTag,{value:"Module"}));function Sk(e){return Object.keys(e).length===0}function Ck(e=null){const t=P.useContext(_s);return!t||Sk(t)?e:t}const Ek=Gc();function Ag(e=Ek){return Ck(e)}const _k=["sx"],jk=e=>{var t,n;const r={systemProps:{},otherProps:{}},o=(t=e==null||(n=e.theme)==null?void 0:n.unstable_sxConfig)!=null?t:fi;return Object.keys(e).forEach(i=>{o[i]?r.systemProps[i]=e[i]:r.otherProps[i]=e[i]}),r};function zg(e){const{sx:t}=e,n=Ne(e,_k),{systemProps:r,otherProps:o}=jk(n);let i;return Array.isArray(t)?i=[r,...t]:typeof t=="function"?i=(...a)=>{const s=t(...a);return xn(s)?V({},r,s):r}:i=V({},r,t),V({},o,{sx:i})}const Pk=Object.freeze(Object.defineProperty({__proto__:null,default:As,extendSxProp:zg,unstable_createStyleFunctionSx:Og,unstable_defaultSxConfig:fi},Symbol.toStringTag,{value:"Module"})),Wf=e=>e,Tk=()=>{let e=Wf;return{configure(t){e=t},generate(t){return e(t)},reset(){e=Wf}}},$k=Tk();function Ig(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=Ig(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function cn(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=Ig(e))&&(r&&(r+=" "),r+=t);return r}const Ok={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function Ln(e,t,n="Mui"){const r=Ok[t];return r?`${n}-${r}`:`${$k.generate(e)}-${t}`}function sr(e,t,n="Mui"){const r={};return t.forEach(o=>{r[o]=Ln(e,o,n)}),r}const Rk=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function Mg(e){const t=`${e}`.match(Rk);return t&&t[1]||""}function Ng(e,t=""){return e.displayName||e.name||Mg(e)||t}function Gf(e,t,n){const r=Ng(t);return e.displayName||(r!==""?`${n}(${r})`:n)}function Ak(e){if(e!=null){if(typeof e=="string")return e;if(typeof e=="function")return Ng(e,"Component");if(typeof e=="object")switch(e.$$typeof){case _a.ForwardRef:return Gf(e,e.render,"ForwardRef");case _a.Memo:return Gf(e,e.type,"memo");default:return}}}const zk=Object.freeze(Object.defineProperty({__proto__:null,default:Ak,getFunctionName:Mg},Symbol.toStringTag,{value:"Module"}));function Lg(e,t){const n=V({},t);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=V({},e[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const o=e[r]||{},i=t[r];n[r]={},!i||!Object.keys(i)?n[r]=o:!o||!Object.keys(o)?n[r]=i:(n[r]=V({},i),Object.keys(o).forEach(a=>{n[r][a]=Lg(o[a],i[a])}))}else n[r]===void 0&&(n[r]=e[r])}),n}function Ik(e){const{theme:t,name:n,props:r}=e;return!t||!t.components||!t.components[n]||!t.components[n].defaultProps?r:Lg(t.components[n].defaultProps,r)}function Mk({props:e,name:t,defaultTheme:n,themeId:r}){let o=Ag(n);return r&&(o=o[r]||o),Ik({theme:o,name:t,props:e})}const bu=typeof window<"u"?P.useLayoutEffect:P.useEffect;function Nk(e,t=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER){return Math.max(t,Math.min(e,n))}const Lk=Object.freeze(Object.defineProperty({__proto__:null,default:Nk},Symbol.toStringTag,{value:"Module"}));function Kf(...e){return e.reduce((t,n)=>n==null?t:function(...o){t.apply(this,o),n.apply(this,o)},()=>{})}function Mt(e){return e&&e.ownerDocument||document}function Kc(e){return Mt(e).defaultView||window}function Su(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function ri(e){const t=P.useRef(e);return bu(()=>{t.current=e}),P.useRef((...n)=>(0,t.current)(...n)).current}function lr(...e){return P.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{Su(n,t)})},e)}const Qf={};function Dk(e,t){const n=P.useRef(Qf);return n.current===Qf&&(n.current=e(t)),n}const Fk=[];function Bk(e){P.useEffect(e,Fk)}class Qc{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new Qc}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}function Dg(){const e=Dk(Qc.create).current;return Bk(e.disposeEffect),e}function Uk(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function ur(e,t,n=void 0){const r={};return Object.keys(e).forEach(o=>{r[o]=e[o].reduce((i,a)=>{if(a){const s=t(a);s!==""&&i.push(s),n&&n[a]&&i.push(n[a])}return i},[]).join(" ")}),r}function Vk(e,t){return V({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}var $e={},Fg={exports:{}};(function(e){function t(n){return n&&n.__esModule?n:{default:n}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(Fg);var Bg=Fg.exports;const Hk=zn(Tw),Wk=zn(Lk);var Ug=Bg;Object.defineProperty($e,"__esModule",{value:!0});var Yf=$e.alpha=Gg;$e.blend=ib;$e.colorChannel=void 0;var Gk=$e.darken=qc;$e.decomposeColor=Et;var Kk=$e.emphasize=Kg,Qk=$e.getContrastRatio=eb;$e.getLuminance=za;$e.hexToRgb=Vg;$e.hslToRgb=Wg;var Yk=$e.lighten=Xc;$e.private_safeAlpha=tb;$e.private_safeColorChannel=void 0;$e.private_safeDarken=nb;$e.private_safeEmphasize=ob;$e.private_safeLighten=rb;$e.recomposeColor=ro;$e.rgbToHex=Zk;var qf=Ug(Hk),qk=Ug(Wk);function Yc(e,t=0,n=1){return(0,qk.default)(e,t,n)}function Vg(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,o)=>o<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function Xk(e){const t=e.toString(16);return t.length===1?`0${t}`:t}function Et(e){if(e.type)return e;if(e.charAt(0)==="#")return Et(Vg(e));const t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error((0,qf.default)(9,e));let r=e.substring(t+1,e.length-1),o;if(n==="color"){if(r=r.split(" "),o=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(o)===-1)throw new Error((0,qf.default)(10,o))}else r=r.split(",");return r=r.map(i=>parseFloat(i)),{type:n,values:r,colorSpace:o}}const Hg=e=>{const t=Et(e);return t.values.slice(0,3).map((n,r)=>t.type.indexOf("hsl")!==-1&&r!==0?`${n}%`:n).join(" ")};$e.colorChannel=Hg;const Jk=(e,t)=>{try{return Hg(e)}catch{return e}};$e.private_safeColorChannel=Jk;function ro(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return t.indexOf("rgb")!==-1?r=r.map((o,i)=>i<3?parseInt(o,10):o):t.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),t.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${t}(${r})`}function Zk(e){if(e.indexOf("#")===0)return e;const{values:t}=Et(e);return`#${t.map((n,r)=>Xk(r===3?Math.round(255*n):n)).join("")}`}function Wg(e){e=Et(e);const{values:t}=e,n=t[0],r=t[1]/100,o=t[2]/100,i=r*Math.min(o,1-o),a=(l,c=(l+n/30)%12)=>o-i*Math.max(Math.min(c-3,9-c,1),-1);let s="rgb";const u=[Math.round(a(0)*255),Math.round(a(8)*255),Math.round(a(4)*255)];return e.type==="hsla"&&(s+="a",u.push(t[3])),ro({type:s,values:u})}function za(e){e=Et(e);let t=e.type==="hsl"||e.type==="hsla"?Et(Wg(e)).values:e.values;return t=t.map(n=>(e.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function eb(e,t){const n=za(e),r=za(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function Gg(e,t){return e=Et(e),t=Yc(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,ro(e)}function tb(e,t,n){try{return Gg(e,t)}catch{return e}}function qc(e,t){if(e=Et(e),t=Yc(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]*=1-t;return ro(e)}function nb(e,t,n){try{return qc(e,t)}catch{return e}}function Xc(e,t){if(e=Et(e),t=Yc(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return ro(e)}function rb(e,t,n){try{return Xc(e,t)}catch{return e}}function Kg(e,t=.15){return za(e)>.5?qc(e,t):Xc(e,t)}function ob(e,t,n){try{return Kg(e,t)}catch{return e}}function ib(e,t,n,r=1){const o=(u,l)=>Math.round((u**(1/r)*(1-n)+l**(1/r)*n)**r),i=Et(e),a=Et(t),s=[o(i.values[0],a.values[0]),o(i.values[1],a.values[1]),o(i.values[2],a.values[2])];return ro({type:"rgb",values:s})}const ab=["mode","contrastThreshold","tonalOffset"],Xf={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Jo.white,default:Jo.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},fl={text:{primary:Jo.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Jo.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function Jf(e,t,n,r){const o=r.light||r,i=r.dark||r*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t==="light"?e.light=Yk(e.main,o):t==="dark"&&(e.dark=Gk(e.main,i)))}function sb(e="light"){return e==="dark"?{main:hr[200],light:hr[50],dark:hr[400]}:{main:hr[700],light:hr[400],dark:hr[800]}}function lb(e="light"){return e==="dark"?{main:mr[200],light:mr[50],dark:mr[400]}:{main:mr[500],light:mr[300],dark:mr[700]}}function ub(e="light"){return e==="dark"?{main:pr[500],light:pr[300],dark:pr[700]}:{main:pr[700],light:pr[400],dark:pr[800]}}function cb(e="light"){return e==="dark"?{main:gr[400],light:gr[300],dark:gr[700]}:{main:gr[700],light:gr[500],dark:gr[900]}}function db(e="light"){return e==="dark"?{main:vr[400],light:vr[300],dark:vr[700]}:{main:vr[800],light:vr[500],dark:vr[900]}}function fb(e="light"){return e==="dark"?{main:mo[400],light:mo[300],dark:mo[700]}:{main:"#ed6c02",light:mo[500],dark:mo[900]}}function pb(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2}=e,o=Ne(e,ab),i=e.primary||sb(t),a=e.secondary||lb(t),s=e.error||ub(t),u=e.info||cb(t),l=e.success||db(t),c=e.warning||fb(t);function d(v){return Qk(v,fl.text.primary)>=n?fl.text.primary:Xf.text.primary}const f=({color:v,name:w,mainShade:h=500,lightShade:p=300,darkShade:y=700})=>{if(v=V({},v),!v.main&&v[h]&&(v.main=v[h]),!v.hasOwnProperty("main"))throw new Error(Zo(11,w?` (${w})`:"",h));if(typeof v.main!="string")throw new Error(Zo(12,w?` (${w})`:"",JSON.stringify(v.main)));return Jf(v,"light",p,r),Jf(v,"dark",y,r),v.contrastText||(v.contrastText=d(v.main)),v},m={dark:fl,light:Xf};return Qt(V({common:V({},Jo),mode:t,primary:f({color:i,name:"primary"}),secondary:f({color:a,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:f({color:s,name:"error"}),warning:f({color:c,name:"warning"}),info:f({color:u,name:"info"}),success:f({color:l,name:"success"}),grey:Pw,contrastThreshold:n,getContrastText:d,augmentColor:f,tonalOffset:r},m[t]),o)}const mb=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function hb(e){return Math.round(e*1e5)/1e5}const Zf={textTransform:"uppercase"},ep='"Roboto", "Helvetica", "Arial", sans-serif';function gb(e,t){const n=typeof t=="function"?t(e):t,{fontFamily:r=ep,fontSize:o=14,fontWeightLight:i=300,fontWeightRegular:a=400,fontWeightMedium:s=500,fontWeightBold:u=700,htmlFontSize:l=16,allVariants:c,pxToRem:d}=n,f=Ne(n,mb),m=o/14,g=d||(h=>`${h/l*m}rem`),v=(h,p,y,k,b)=>V({fontFamily:r,fontWeight:h,fontSize:g(p),lineHeight:y},r===ep?{letterSpacing:`${hb(k/p)}em`}:{},b,c),w={h1:v(i,96,1.167,-1.5),h2:v(i,60,1.2,-.5),h3:v(a,48,1.167,0),h4:v(a,34,1.235,.25),h5:v(a,24,1.334,0),h6:v(s,20,1.6,.15),subtitle1:v(a,16,1.75,.15),subtitle2:v(s,14,1.57,.1),body1:v(a,16,1.5,.15),body2:v(a,14,1.43,.15),button:v(s,14,1.75,.4,Zf),caption:v(a,12,1.66,.4),overline:v(a,12,2.66,1,Zf),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return Qt(V({htmlFontSize:l,pxToRem:g,fontFamily:r,fontSize:o,fontWeightLight:i,fontWeightRegular:a,fontWeightMedium:s,fontWeightBold:u},w),f,{clone:!1})}const vb=.2,yb=.14,xb=.12;function ye(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${vb})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${yb})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${xb})`].join(",")}const wb=["none",ye(0,2,1,-1,0,1,1,0,0,1,3,0),ye(0,3,1,-2,0,2,2,0,0,1,5,0),ye(0,3,3,-2,0,3,4,0,0,1,8,0),ye(0,2,4,-1,0,4,5,0,0,1,10,0),ye(0,3,5,-1,0,5,8,0,0,1,14,0),ye(0,3,5,-1,0,6,10,0,0,1,18,0),ye(0,4,5,-2,0,7,10,1,0,2,16,1),ye(0,5,5,-3,0,8,10,1,0,3,14,2),ye(0,5,6,-3,0,9,12,1,0,3,16,2),ye(0,6,6,-3,0,10,14,1,0,4,18,3),ye(0,6,7,-4,0,11,15,1,0,4,20,3),ye(0,7,8,-4,0,12,17,2,0,5,22,4),ye(0,7,8,-4,0,13,19,2,0,5,24,4),ye(0,7,9,-4,0,14,21,2,0,5,26,4),ye(0,8,9,-5,0,15,22,2,0,6,28,5),ye(0,8,10,-5,0,16,24,2,0,6,30,5),ye(0,8,11,-5,0,17,26,2,0,6,32,5),ye(0,9,11,-5,0,18,28,2,0,7,34,6),ye(0,9,12,-6,0,19,29,2,0,7,36,6),ye(0,10,13,-6,0,20,31,3,0,8,38,7),ye(0,10,13,-6,0,21,33,3,0,8,40,7),ye(0,10,14,-6,0,22,35,3,0,8,42,7),ye(0,11,14,-7,0,23,36,3,0,9,44,8),ye(0,11,15,-7,0,24,38,3,0,9,46,8)],kb=["duration","easing","delay"],bb={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},Sb={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function tp(e){return`${Math.round(e)}ms`}function Cb(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function Eb(e){const t=V({},bb,e.easing),n=V({},Sb,e.duration);return V({getAutoHeightDuration:Cb,create:(o=["all"],i={})=>{const{duration:a=n.standard,easing:s=t.easeInOut,delay:u=0}=i;return Ne(i,kb),(Array.isArray(o)?o:[o]).map(l=>`${l} ${typeof a=="string"?a:tp(a)} ${s} ${typeof u=="string"?u:tp(u)}`).join(",")}},e,{easing:t,duration:n})}const _b={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},jb=_b,Pb=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function Tb(e={},...t){const{mixins:n={},palette:r={},transitions:o={},typography:i={}}=e,a=Ne(e,Pb);if(e.vars)throw new Error(Zo(18));const s=pb(r),u=Gc(e);let l=Qt(u,{mixins:Vk(u.breakpoints,n),palette:s,shadows:wb.slice(),typography:gb(s,i),transitions:Eb(o),zIndex:V({},jb)});return l=Qt(l,a),l=t.reduce((c,d)=>Qt(c,d),l),l.unstable_sxConfig=V({},fi,a==null?void 0:a.unstable_sxConfig),l.unstable_sx=function(d){return As({sx:d,theme:this})},l}const $b=Tb(),Jc=$b;function Zc(){const e=Ag(Jc);return e[Nc]||e}function cr({props:e,name:t}){return Mk({props:e,name:t,defaultTheme:Jc,themeId:Nc})}var pi={},pl={exports:{}},np;function Ob(){return np||(np=1,function(e){function t(n,r){if(n==null)return{};var o={},i=Object.keys(n),a,s;for(s=0;s<i.length;s++)a=i[s],!(r.indexOf(a)>=0)&&(o[a]=n[a]);return o}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(pl)),pl.exports}const Rb=zn(_2),Ab=zn(j2),zb=zn(z2),Ib=zn(zk),Mb=zn(bk),Nb=zn(Pk);var oo=Bg;Object.defineProperty(pi,"__esModule",{value:!0});var Lb=pi.default=Xb;pi.shouldForwardProp=ea;pi.systemDefaultTheme=void 0;var vt=oo(Eg()),Cu=oo(Ob()),rp=Wb(Rb),Db=Ab;oo(zb);oo(Ib);var Fb=oo(Mb),Bb=oo(Nb);const Ub=["ownerState"],Vb=["variants"],Hb=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function Qg(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(Qg=function(r){return r?n:t})(e)}function Wb(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=Qg(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(i!=="default"&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}function Gb(e){return Object.keys(e).length===0}function Kb(e){return typeof e=="string"&&e.charCodeAt(0)>96}function ea(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const Qb=pi.systemDefaultTheme=(0,Fb.default)(),Yb=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function Mi({defaultTheme:e,theme:t,themeId:n}){return Gb(t)?e:t[n]||t}function qb(e){return e?(t,n)=>n[e]:null}function ta(e,t){let{ownerState:n}=t,r=(0,Cu.default)(t,Ub);const o=typeof e=="function"?e((0,vt.default)({ownerState:n},r)):e;if(Array.isArray(o))return o.flatMap(i=>ta(i,(0,vt.default)({ownerState:n},r)));if(o&&typeof o=="object"&&Array.isArray(o.variants)){const{variants:i=[]}=o;let s=(0,Cu.default)(o,Vb);return i.forEach(u=>{let l=!0;typeof u.props=="function"?l=u.props((0,vt.default)({ownerState:n},r,n)):Object.keys(u.props).forEach(c=>{(n==null?void 0:n[c])!==u.props[c]&&r[c]!==u.props[c]&&(l=!1)}),l&&(Array.isArray(s)||(s=[s]),s.push(typeof u.style=="function"?u.style((0,vt.default)({ownerState:n},r,n)):u.style))}),s}return o}function Xb(e={}){const{themeId:t,defaultTheme:n=Qb,rootShouldForwardProp:r=ea,slotShouldForwardProp:o=ea}=e,i=a=>(0,Bb.default)((0,vt.default)({},a,{theme:Mi((0,vt.default)({},a,{defaultTheme:n,themeId:t}))}));return i.__mui_systemSx=!0,(a,s={})=>{(0,rp.internal_processStyles)(a,b=>b.filter(_=>!(_!=null&&_.__mui_systemSx)));const{name:u,slot:l,skipVariantsResolver:c,skipSx:d,overridesResolver:f=qb(Yb(l))}=s,m=(0,Cu.default)(s,Hb),g=c!==void 0?c:l&&l!=="Root"&&l!=="root"||!1,v=d||!1;let w,h=ea;l==="Root"||l==="root"?h=r:l?h=o:Kb(a)&&(h=void 0);const p=(0,rp.default)(a,(0,vt.default)({shouldForwardProp:h,label:w},m)),y=b=>typeof b=="function"&&b.__emotion_real!==b||(0,Db.isPlainObject)(b)?_=>ta(b,(0,vt.default)({},_,{theme:Mi({theme:_.theme,defaultTheme:n,themeId:t})})):b,k=(b,..._)=>{let E=y(b);const T=_?_.map(y):[];u&&f&&T.push(I=>{const D=Mi((0,vt.default)({},I,{defaultTheme:n,themeId:t}));if(!D.components||!D.components[u]||!D.components[u].styleOverrides)return null;const W=D.components[u].styleOverrides,H={};return Object.entries(W).forEach(([U,F])=>{H[U]=ta(F,(0,vt.default)({},I,{theme:D}))}),f(I,H)}),u&&!g&&T.push(I=>{var D;const W=Mi((0,vt.default)({},I,{defaultTheme:n,themeId:t})),H=W==null||(D=W.components)==null||(D=D[u])==null?void 0:D.variants;return ta({variants:H},(0,vt.default)({},I,{theme:W}))}),v||T.push(i);const L=T.length-_.length;if(Array.isArray(b)&&L>0){const I=new Array(L).fill("");E=[...b,...I],E.raw=[...b.raw,...I]}const R=p(E,...T);return a.muiName&&(R.muiName=a.muiName),R};return p.withConfig&&(k.withConfig=p.withConfig),k}}function Jb(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const Zb=e=>Jb(e)&&e!=="classes",e5=Zb,Xt=Lb({themeId:Nc,defaultTheme:Jc,rootShouldForwardProp:e5}),op=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)};function Eu(e,t){return Eu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},Eu(e,t)}function t5(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Eu(e,t)}const ip={disabled:!1},Yg=je.createContext(null);var n5=function(t){return t.scrollTop},ko="unmounted",Vn="exited",Hn="entering",xr="entered",_u="exiting",fn=function(e){t5(t,e);function t(r,o){var i;i=e.call(this,r,o)||this;var a=o,s=a&&!a.isMounting?r.enter:r.appear,u;return i.appearStatus=null,r.in?s?(u=Vn,i.appearStatus=Hn):u=xr:r.unmountOnExit||r.mountOnEnter?u=ko:u=Vn,i.state={status:u},i.nextCallback=null,i}t.getDerivedStateFromProps=function(o,i){var a=o.in;return a&&i.status===ko?{status:Vn}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(o){var i=null;if(o!==this.props){var a=this.state.status;this.props.in?a!==Hn&&a!==xr&&(i=Hn):(a===Hn||a===xr)&&(i=_u)}this.updateStatus(!1,i)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var o=this.props.timeout,i,a,s;return i=a=s=o,o!=null&&typeof o!="number"&&(i=o.exit,a=o.enter,s=o.appear!==void 0?o.appear:a),{exit:i,enter:a,appear:s}},n.updateStatus=function(o,i){if(o===void 0&&(o=!1),i!==null)if(this.cancelNextCallback(),i===Hn){if(this.props.unmountOnExit||this.props.mountOnEnter){var a=this.props.nodeRef?this.props.nodeRef.current:Ri.findDOMNode(this);a&&n5(a)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Vn&&this.setState({status:ko})},n.performEnter=function(o){var i=this,a=this.props.enter,s=this.context?this.context.isMounting:o,u=this.props.nodeRef?[s]:[Ri.findDOMNode(this),s],l=u[0],c=u[1],d=this.getTimeouts(),f=s?d.appear:d.enter;if(!o&&!a||ip.disabled){this.safeSetState({status:xr},function(){i.props.onEntered(l)});return}this.props.onEnter(l,c),this.safeSetState({status:Hn},function(){i.props.onEntering(l,c),i.onTransitionEnd(f,function(){i.safeSetState({status:xr},function(){i.props.onEntered(l,c)})})})},n.performExit=function(){var o=this,i=this.props.exit,a=this.getTimeouts(),s=this.props.nodeRef?void 0:Ri.findDOMNode(this);if(!i||ip.disabled){this.safeSetState({status:Vn},function(){o.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:_u},function(){o.props.onExiting(s),o.onTransitionEnd(a.exit,function(){o.safeSetState({status:Vn},function(){o.props.onExited(s)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(o,i){i=this.setNextCallback(i),this.setState(o,i)},n.setNextCallback=function(o){var i=this,a=!0;return this.nextCallback=function(s){a&&(a=!1,i.nextCallback=null,o(s))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},n.onTransitionEnd=function(o,i){this.setNextCallback(i);var a=this.props.nodeRef?this.props.nodeRef.current:Ri.findDOMNode(this),s=o==null&&!this.props.addEndListener;if(!a||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],l=u[0],c=u[1];this.props.addEndListener(l,c)}o!=null&&setTimeout(this.nextCallback,o)},n.render=function(){var o=this.state.status;if(o===ko)return null;var i=this.props,a=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var s=Ne(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return je.createElement(Yg.Provider,{value:null},typeof a=="function"?a(o,s):je.cloneElement(je.Children.only(a),s))},t}(je.Component);fn.contextType=Yg;fn.propTypes={};function yr(){}fn.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:yr,onEntering:yr,onEntered:yr,onExit:yr,onExiting:yr,onExited:yr};fn.UNMOUNTED=ko;fn.EXITED=Vn;fn.ENTERING=Hn;fn.ENTERED=xr;fn.EXITING=_u;const qg=fn,Xg=e=>e.scrollTop;function Ia(e,t){var n,r;const{timeout:o,easing:i,style:a={}}=e;return{duration:(n=a.transitionDuration)!=null?n:typeof o=="number"?o:o[t.mode]||0,easing:(r=a.transitionTimingFunction)!=null?r:typeof i=="object"?i[t.mode]:i,delay:a.transitionDelay}}function r5(e){return Ln("MuiPaper",e)}sr("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const o5=["className","component","elevation","square","variant"],i5=e=>{const{square:t,elevation:n,variant:r,classes:o}=e,i={root:["root",r,!t&&"rounded",r==="elevation"&&`elevation${n}`]};return ur(i,r5,o)},a5=Xt("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(({theme:e,ownerState:t})=>{var n;return V({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&V({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${Yf("#fff",op(t.elevation))}, ${Yf("#fff",op(t.elevation))})`},e.vars&&{backgroundImage:(n=e.vars.overlays)==null?void 0:n[t.elevation]}))}),s5=P.forwardRef(function(t,n){const r=cr({props:t,name:"MuiPaper"}),{className:o,component:i="div",elevation:a=1,square:s=!1,variant:u="elevation"}=r,l=Ne(r,o5),c=V({},r,{component:i,elevation:a,square:s,variant:u}),d=i5(c);return x.jsx(a5,V({as:i,ownerState:c,className:cn(d.root,o),ref:n},l))}),l5=s5;function u5(e){return typeof e=="string"}function c5(e,t,n){return e===void 0||u5(e)?t:V({},t,{ownerState:V({},t.ownerState,n)})}function Ma(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(r=>r.match(/^on[A-Z]/)&&typeof e[r]=="function"&&!t.includes(r)).forEach(r=>{n[r]=e[r]}),n}function d5(e,t,n){return typeof e=="function"?e(t,n):e}function ap(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function f5(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:o,className:i}=e;if(!t){const m=cn(n==null?void 0:n.className,i,o==null?void 0:o.className,r==null?void 0:r.className),g=V({},n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),v=V({},n,o,r);return m.length>0&&(v.className=m),Object.keys(g).length>0&&(v.style=g),{props:v,internalRef:void 0}}const a=Ma(V({},o,r)),s=ap(r),u=ap(o),l=t(a),c=cn(l==null?void 0:l.className,n==null?void 0:n.className,i,o==null?void 0:o.className,r==null?void 0:r.className),d=V({},l==null?void 0:l.style,n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),f=V({},l,n,u,s);return c.length>0&&(f.className=c),Object.keys(d).length>0&&(f.style=d),{props:f,internalRef:l.ref}}const p5=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function ju(e){var t;const{elementType:n,externalSlotProps:r,ownerState:o,skipResolvingSlotProps:i=!1}=e,a=Ne(e,p5),s=i?{}:d5(r,o),{props:u,internalRef:l}=f5(V({},a,{externalSlotProps:s})),c=lr(l,s==null?void 0:s.ref,(t=e.additionalProps)==null?void 0:t.ref);return c5(n,V({},u,{ref:c}),o)}function m5(e){return Ln("MuiTypography",e)}sr("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const h5=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],g5=e=>{const{align:t,gutterBottom:n,noWrap:r,paragraph:o,variant:i,classes:a}=e,s={root:["root",i,e.align!=="inherit"&&`align${Yt(t)}`,n&&"gutterBottom",r&&"noWrap",o&&"paragraph"]};return ur(s,m5,a)},v5=Xt("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],n.align!=="inherit"&&t[`align${Yt(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>V({margin:0},t.variant==="inherit"&&{font:"inherit"},t.variant!=="inherit"&&e.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),sp={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},y5={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},x5=e=>y5[e]||e,w5=P.forwardRef(function(t,n){const r=cr({props:t,name:"MuiTypography"}),o=x5(r.color),i=zg(V({},r,{color:o})),{align:a="inherit",className:s,component:u,gutterBottom:l=!1,noWrap:c=!1,paragraph:d=!1,variant:f="body1",variantMapping:m=sp}=i,g=Ne(i,h5),v=V({},i,{align:a,color:o,className:s,component:u,gutterBottom:l,noWrap:c,paragraph:d,variant:f,variantMapping:m}),w=u||(d?"p":m[f]||sp[f])||"span",h=g5(v);return x.jsx(v5,V({as:w,ref:n,ownerState:v,className:cn(h.root,s)},g))}),k5=w5;function lp(e){return e.substring(2).toLowerCase()}function b5(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}function S5(e){const{children:t,disableReactTree:n=!1,mouseEvent:r="onClick",onClickAway:o,touchEvent:i="onTouchEnd"}=e,a=P.useRef(!1),s=P.useRef(null),u=P.useRef(!1),l=P.useRef(!1);P.useEffect(()=>(setTimeout(()=>{u.current=!0},0),()=>{u.current=!1}),[]);const c=lr(t.ref,s),d=ri(g=>{const v=l.current;l.current=!1;const w=Mt(s.current);if(!u.current||!s.current||"clientX"in g&&b5(g,w))return;if(a.current){a.current=!1;return}let h;g.composedPath?h=g.composedPath().indexOf(s.current)>-1:h=!w.documentElement.contains(g.target)||s.current.contains(g.target),!h&&(n||!v)&&o(g)}),f=g=>v=>{l.current=!0;const w=t.props[g];w&&w(v)},m={ref:c};return i!==!1&&(m[i]=f(i)),P.useEffect(()=>{if(i!==!1){const g=lp(i),v=Mt(s.current),w=()=>{a.current=!0};return v.addEventListener(g,d),v.addEventListener("touchmove",w),()=>{v.removeEventListener(g,d),v.removeEventListener("touchmove",w)}}},[d,i]),r!==!1&&(m[r]=f(r)),P.useEffect(()=>{if(r!==!1){const g=lp(r),v=Mt(s.current);return v.addEventListener(g,d),()=>{v.removeEventListener(g,d)}}},[d,r]),x.jsx(P.Fragment,{children:P.cloneElement(t,m)})}const C5=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function E5(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function _5(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=r=>e.ownerDocument.querySelector(`input[type="radio"]${r}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function j5(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||_5(e))}function P5(e){const t=[],n=[];return Array.from(e.querySelectorAll(C5)).forEach((r,o)=>{const i=E5(r);i===-1||!j5(r)||(i===0?t.push(r):n.push({documentOrder:o,tabIndex:i,node:r}))}),n.sort((r,o)=>r.tabIndex===o.tabIndex?r.documentOrder-o.documentOrder:r.tabIndex-o.tabIndex).map(r=>r.node).concat(t)}function T5(){return!0}function $5(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:r=!1,disableRestoreFocus:o=!1,getTabbable:i=P5,isEnabled:a=T5,open:s}=e,u=P.useRef(!1),l=P.useRef(null),c=P.useRef(null),d=P.useRef(null),f=P.useRef(null),m=P.useRef(!1),g=P.useRef(null),v=lr(t.ref,g),w=P.useRef(null);P.useEffect(()=>{!s||!g.current||(m.current=!n)},[n,s]),P.useEffect(()=>{if(!s||!g.current)return;const y=Mt(g.current);return g.current.contains(y.activeElement)||(g.current.hasAttribute("tabIndex")||g.current.setAttribute("tabIndex","-1"),m.current&&g.current.focus()),()=>{o||(d.current&&d.current.focus&&(u.current=!0,d.current.focus()),d.current=null)}},[s]),P.useEffect(()=>{if(!s||!g.current)return;const y=Mt(g.current),k=E=>{w.current=E,!(r||!a()||E.key!=="Tab")&&y.activeElement===g.current&&E.shiftKey&&(u.current=!0,c.current&&c.current.focus())},b=()=>{const E=g.current;if(E===null)return;if(!y.hasFocus()||!a()||u.current){u.current=!1;return}if(E.contains(y.activeElement)||r&&y.activeElement!==l.current&&y.activeElement!==c.current)return;if(y.activeElement!==f.current)f.current=null;else if(f.current!==null)return;if(!m.current)return;let T=[];if((y.activeElement===l.current||y.activeElement===c.current)&&(T=i(g.current)),T.length>0){var L,R;const I=!!((L=w.current)!=null&&L.shiftKey&&((R=w.current)==null?void 0:R.key)==="Tab"),D=T[0],W=T[T.length-1];typeof D!="string"&&typeof W!="string"&&(I?W.focus():D.focus())}else E.focus()};y.addEventListener("focusin",b),y.addEventListener("keydown",k,!0);const _=setInterval(()=>{y.activeElement&&y.activeElement.tagName==="BODY"&&b()},50);return()=>{clearInterval(_),y.removeEventListener("focusin",b),y.removeEventListener("keydown",k,!0)}},[n,r,o,a,s,i]);const h=y=>{d.current===null&&(d.current=y.relatedTarget),m.current=!0,f.current=y.target;const k=t.props.onFocus;k&&k(y)},p=y=>{d.current===null&&(d.current=y.relatedTarget),m.current=!0};return x.jsxs(P.Fragment,{children:[x.jsx("div",{tabIndex:s?0:-1,onFocus:p,ref:l,"data-testid":"sentinelStart"}),P.cloneElement(t,{ref:v,onFocus:h}),x.jsx("div",{tabIndex:s?0:-1,onFocus:p,ref:c,"data-testid":"sentinelEnd"})]})}function O5(e){return typeof e=="function"?e():e}const R5=P.forwardRef(function(t,n){const{children:r,container:o,disablePortal:i=!1}=t,[a,s]=P.useState(null),u=lr(P.isValidElement(r)?r.ref:null,n);if(bu(()=>{i||s(O5(o)||document.body)},[o,i]),bu(()=>{if(a&&!i)return Su(n,a),()=>{Su(n,null)}},[n,a,i]),i){if(P.isValidElement(r)){const l={ref:u};return P.cloneElement(r,l)}return x.jsx(P.Fragment,{children:r})}return x.jsx(P.Fragment,{children:a&&Sc.createPortal(r,a)})});function A5(e){const t=Mt(e);return t.body===e?Kc(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function Ao(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function up(e){return parseInt(Kc(e).getComputedStyle(e).paddingRight,10)||0}function z5(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,r=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||r}function cp(e,t,n,r,o){const i=[t,n,...r];[].forEach.call(e.children,a=>{const s=i.indexOf(a)===-1,u=!z5(a);s&&u&&Ao(a,o)})}function ml(e,t){let n=-1;return e.some((r,o)=>t(r)?(n=o,!0):!1),n}function I5(e,t){const n=[],r=e.container;if(!t.disableScrollLock){if(A5(r)){const a=Uk(Mt(r));n.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${up(r)+a}px`;const s=Mt(r).querySelectorAll(".mui-fixed");[].forEach.call(s,u=>{n.push({value:u.style.paddingRight,property:"padding-right",el:u}),u.style.paddingRight=`${up(u)+a}px`})}let i;if(r.parentNode instanceof DocumentFragment)i=Mt(r).body;else{const a=r.parentElement,s=Kc(r);i=(a==null?void 0:a.nodeName)==="HTML"&&s.getComputedStyle(a).overflowY==="scroll"?a:r}n.push({value:i.style.overflow,property:"overflow",el:i},{value:i.style.overflowX,property:"overflow-x",el:i},{value:i.style.overflowY,property:"overflow-y",el:i}),i.style.overflow="hidden"}return()=>{n.forEach(({value:i,el:a,property:s})=>{i?a.style.setProperty(s,i):a.style.removeProperty(s)})}}function M5(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class N5{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,n){let r=this.modals.indexOf(t);if(r!==-1)return r;r=this.modals.length,this.modals.push(t),t.modalRef&&Ao(t.modalRef,!1);const o=M5(n);cp(n,t.mount,t.modalRef,o,!0);const i=ml(this.containers,a=>a.container===n);return i!==-1?(this.containers[i].modals.push(t),r):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:o}),r)}mount(t,n){const r=ml(this.containers,i=>i.modals.indexOf(t)!==-1),o=this.containers[r];o.restore||(o.restore=I5(o,n))}remove(t,n=!0){const r=this.modals.indexOf(t);if(r===-1)return r;const o=ml(this.containers,a=>a.modals.indexOf(t)!==-1),i=this.containers[o];if(i.modals.splice(i.modals.indexOf(t),1),this.modals.splice(r,1),i.modals.length===0)i.restore&&i.restore(),t.modalRef&&Ao(t.modalRef,n),cp(i.container,t.mount,t.modalRef,i.hiddenSiblings,!1),this.containers.splice(o,1);else{const a=i.modals[i.modals.length-1];a.modalRef&&Ao(a.modalRef,!1)}return r}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function L5(e){return typeof e=="function"?e():e}function D5(e){return e?e.props.hasOwnProperty("in"):!1}const F5=new N5;function B5(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:r=!1,manager:o=F5,closeAfterTransition:i=!1,onTransitionEnter:a,onTransitionExited:s,children:u,onClose:l,open:c,rootRef:d}=e,f=P.useRef({}),m=P.useRef(null),g=P.useRef(null),v=lr(g,d),[w,h]=P.useState(!c),p=D5(u);let y=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(y=!1);const k=()=>Mt(m.current),b=()=>(f.current.modalRef=g.current,f.current.mount=m.current,f.current),_=()=>{o.mount(b(),{disableScrollLock:r}),g.current&&(g.current.scrollTop=0)},E=ri(()=>{const F=L5(t)||k().body;o.add(b(),F),g.current&&_()}),T=P.useCallback(()=>o.isTopModal(b()),[o]),L=ri(F=>{m.current=F,F&&(c&&T()?_():g.current&&Ao(g.current,y))}),R=P.useCallback(()=>{o.remove(b(),y)},[y,o]);P.useEffect(()=>()=>{R()},[R]),P.useEffect(()=>{c?E():(!p||!i)&&R()},[c,R,p,i,E]);const I=F=>X=>{var A;(A=F.onKeyDown)==null||A.call(F,X),!(X.key!=="Escape"||X.which===229||!T())&&(n||(X.stopPropagation(),l&&l(X,"escapeKeyDown")))},D=F=>X=>{var A;(A=F.onClick)==null||A.call(F,X),X.target===X.currentTarget&&l&&l(X,"backdropClick")};return{getRootProps:(F={})=>{const X=Ma(e);delete X.onTransitionEnter,delete X.onTransitionExited;const A=V({},X,F);return V({role:"presentation"},A,{onKeyDown:I(A),ref:v})},getBackdropProps:(F={})=>{const X=F;return V({"aria-hidden":!0},X,{onClick:D(X),open:c})},getTransitionProps:()=>{const F=()=>{h(!1),a&&a()},X=()=>{h(!0),s&&s(),i&&R()};return{onEnter:Kf(F,u==null?void 0:u.props.onEnter),onExited:Kf(X,u==null?void 0:u.props.onExited)}},rootRef:v,portalRef:L,isTopModal:T,exited:w,hasTransition:p}}function U5(e={}){const{autoHideDuration:t=null,disableWindowBlurListener:n=!1,onClose:r,open:o,resumeHideDuration:i}=e,a=Dg();P.useEffect(()=>{if(!o)return;function h(p){p.defaultPrevented||(p.key==="Escape"||p.key==="Esc")&&(r==null||r(p,"escapeKeyDown"))}return document.addEventListener("keydown",h),()=>{document.removeEventListener("keydown",h)}},[o,r]);const s=ri((h,p)=>{r==null||r(h,p)}),u=ri(h=>{!r||h==null||a.start(h,()=>{s(null,"timeout")})});P.useEffect(()=>(o&&u(t),a.clear),[o,t,u,a]);const l=h=>{r==null||r(h,"clickaway")},c=a.clear,d=P.useCallback(()=>{t!=null&&u(i??t*.5)},[t,i,u]),f=h=>p=>{const y=h.onBlur;y==null||y(p),d()},m=h=>p=>{const y=h.onFocus;y==null||y(p),c()},g=h=>p=>{const y=h.onMouseEnter;y==null||y(p),c()},v=h=>p=>{const y=h.onMouseLeave;y==null||y(p),d()};return P.useEffect(()=>{if(!n&&o)return window.addEventListener("focus",d),window.addEventListener("blur",c),()=>{window.removeEventListener("focus",d),window.removeEventListener("blur",c)}},[n,o,d,c]),{getRootProps:(h={})=>{const p=V({},Ma(e),Ma(h));return V({role:"presentation"},h,p,{onBlur:f(p),onFocus:m(p),onMouseEnter:g(p),onMouseLeave:v(p)})},onClickAway:l}}const V5=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],H5={entering:{opacity:1},entered:{opacity:1}},W5=P.forwardRef(function(t,n){const r=Zc(),o={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:i,appear:a=!0,children:s,easing:u,in:l,onEnter:c,onEntered:d,onEntering:f,onExit:m,onExited:g,onExiting:v,style:w,timeout:h=o,TransitionComponent:p=qg}=t,y=Ne(t,V5),k=P.useRef(null),b=lr(k,s.ref,n),_=H=>U=>{if(H){const F=k.current;U===void 0?H(F):H(F,U)}},E=_(f),T=_((H,U)=>{Xg(H);const F=Ia({style:w,timeout:h,easing:u},{mode:"enter"});H.style.webkitTransition=r.transitions.create("opacity",F),H.style.transition=r.transitions.create("opacity",F),c&&c(H,U)}),L=_(d),R=_(v),I=_(H=>{const U=Ia({style:w,timeout:h,easing:u},{mode:"exit"});H.style.webkitTransition=r.transitions.create("opacity",U),H.style.transition=r.transitions.create("opacity",U),m&&m(H)}),D=_(g),W=H=>{i&&i(k.current,H)};return x.jsx(p,V({appear:a,in:l,nodeRef:k,onEnter:T,onEntered:L,onEntering:E,onExit:I,onExited:D,onExiting:R,addEndListener:W,timeout:h},y,{children:(H,U)=>P.cloneElement(s,V({style:V({opacity:0,visibility:H==="exited"&&!l?"hidden":void 0},H5[H],w,s.props.style),ref:b},U))}))}),G5=W5;function K5(e){return Ln("MuiBackdrop",e)}sr("MuiBackdrop",["root","invisible"]);const Q5=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],Y5=e=>{const{classes:t,invisible:n}=e;return ur({root:["root",n&&"invisible"]},K5,t)},q5=Xt("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>V({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),X5=P.forwardRef(function(t,n){var r,o,i;const a=cr({props:t,name:"MuiBackdrop"}),{children:s,className:u,component:l="div",components:c={},componentsProps:d={},invisible:f=!1,open:m,slotProps:g={},slots:v={},TransitionComponent:w=G5,transitionDuration:h}=a,p=Ne(a,Q5),y=V({},a,{component:l,invisible:f}),k=Y5(y),b=(r=g.root)!=null?r:d.root;return x.jsx(w,V({in:m,timeout:h},p,{children:x.jsx(q5,V({"aria-hidden":!0},b,{as:(o=(i=v.root)!=null?i:c.Root)!=null?o:l,className:cn(k.root,u,b==null?void 0:b.className),ownerState:V({},y,b==null?void 0:b.ownerState),classes:k,ref:n,children:s}))}))}),J5=X5;function Z5(e){return Ln("MuiModal",e)}sr("MuiModal",["root","hidden","backdrop"]);const e4=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],t4=e=>{const{open:t,exited:n,classes:r}=e;return ur({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},Z5,r)},n4=Xt("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>V({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),r4=Xt(J5,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),o4=P.forwardRef(function(t,n){var r,o,i,a,s,u;const l=cr({name:"MuiModal",props:t}),{BackdropComponent:c=r4,BackdropProps:d,className:f,closeAfterTransition:m=!1,children:g,container:v,component:w,components:h={},componentsProps:p={},disableAutoFocus:y=!1,disableEnforceFocus:k=!1,disableEscapeKeyDown:b=!1,disablePortal:_=!1,disableRestoreFocus:E=!1,disableScrollLock:T=!1,hideBackdrop:L=!1,keepMounted:R=!1,onBackdropClick:I,open:D,slotProps:W,slots:H}=l,U=Ne(l,e4),F=V({},l,{closeAfterTransition:m,disableAutoFocus:y,disableEnforceFocus:k,disableEscapeKeyDown:b,disablePortal:_,disableRestoreFocus:E,disableScrollLock:T,hideBackdrop:L,keepMounted:R}),{getRootProps:X,getBackdropProps:A,getTransitionProps:z,portalRef:O,isTopModal:G,exited:$,hasTransition:B}=B5(V({},F,{rootRef:n})),C=V({},F,{exited:$}),J=t4(C),S={};if(g.props.tabIndex===void 0&&(S.tabIndex="-1"),B){const{onEnter:ue,onExited:me}=z();S.onEnter=ue,S.onExited=me}const Q=(r=(o=H==null?void 0:H.root)!=null?o:h.Root)!=null?r:n4,M=(i=(a=H==null?void 0:H.backdrop)!=null?a:h.Backdrop)!=null?i:c,ne=(s=W==null?void 0:W.root)!=null?s:p.root,q=(u=W==null?void 0:W.backdrop)!=null?u:p.backdrop,te=ju({elementType:Q,externalSlotProps:ne,externalForwardedProps:U,getSlotProps:X,additionalProps:{ref:n,as:w},ownerState:C,className:cn(f,ne==null?void 0:ne.className,J==null?void 0:J.root,!C.open&&C.exited&&(J==null?void 0:J.hidden))}),Z=ju({elementType:M,externalSlotProps:q,additionalProps:d,getSlotProps:ue=>A(V({},ue,{onClick:me=>{I&&I(me),ue!=null&&ue.onClick&&ue.onClick(me)}})),className:cn(q==null?void 0:q.className,d==null?void 0:d.className,J==null?void 0:J.backdrop),ownerState:C});return!R&&!D&&(!B||$)?null:x.jsx(R5,{ref:O,container:v,disablePortal:_,children:x.jsxs(Q,V({},te,{children:[!L&&c?x.jsx(M,V({},Z)):null,x.jsx($5,{disableEnforceFocus:k,disableAutoFocus:y,disableRestoreFocus:E,isEnabled:G,open:D,children:P.cloneElement(g,S)})]}))})}),i4=o4,a4=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Pu(e){return`scale(${e}, ${e**2})`}const s4={entering:{opacity:1,transform:Pu(1)},entered:{opacity:1,transform:"none"}},hl=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Jg=P.forwardRef(function(t,n){const{addEndListener:r,appear:o=!0,children:i,easing:a,in:s,onEnter:u,onEntered:l,onEntering:c,onExit:d,onExited:f,onExiting:m,style:g,timeout:v="auto",TransitionComponent:w=qg}=t,h=Ne(t,a4),p=Dg(),y=P.useRef(),k=Zc(),b=P.useRef(null),_=lr(b,i.ref,n),E=U=>F=>{if(U){const X=b.current;F===void 0?U(X):U(X,F)}},T=E(c),L=E((U,F)=>{Xg(U);const{duration:X,delay:A,easing:z}=Ia({style:g,timeout:v,easing:a},{mode:"enter"});let O;v==="auto"?(O=k.transitions.getAutoHeightDuration(U.clientHeight),y.current=O):O=X,U.style.transition=[k.transitions.create("opacity",{duration:O,delay:A}),k.transitions.create("transform",{duration:hl?O:O*.666,delay:A,easing:z})].join(","),u&&u(U,F)}),R=E(l),I=E(m),D=E(U=>{const{duration:F,delay:X,easing:A}=Ia({style:g,timeout:v,easing:a},{mode:"exit"});let z;v==="auto"?(z=k.transitions.getAutoHeightDuration(U.clientHeight),y.current=z):z=F,U.style.transition=[k.transitions.create("opacity",{duration:z,delay:X}),k.transitions.create("transform",{duration:hl?z:z*.666,delay:hl?X:X||z*.333,easing:A})].join(","),U.style.opacity=0,U.style.transform=Pu(.75),d&&d(U)}),W=E(f),H=U=>{v==="auto"&&p.start(y.current||0,U),r&&r(b.current,U)};return x.jsx(w,V({appear:o,in:s,nodeRef:b,onEnter:L,onEntered:R,onEntering:T,onExit:D,onExited:W,onExiting:I,addEndListener:H,timeout:v==="auto"?null:v},h,{children:(U,F)=>P.cloneElement(i,V({style:V({opacity:0,transform:Pu(.75),visibility:U==="exited"&&!s?"hidden":void 0},s4[U],g,i.props.style),ref:_},F))}))});Jg.muiSupportAuto=!0;const l4=Jg;function u4(e){return Ln("MuiSnackbarContent",e)}sr("MuiSnackbarContent",["root","message","action"]);const c4=["action","className","message","role"],d4=e=>{const{classes:t}=e;return ur({root:["root"],action:["action"],message:["message"]},u4,t)},f4=Xt(l5,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>{const t=e.palette.mode==="light"?.8:.98,n=Kk(e.palette.background.default,t);return V({},e.typography.body2,{color:e.vars?e.vars.palette.SnackbarContent.color:e.palette.getContrastText(n),backgroundColor:e.vars?e.vars.palette.SnackbarContent.bg:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,flexGrow:1,[e.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),p4=Xt("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0"}),m4=Xt("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),h4=P.forwardRef(function(t,n){const r=cr({props:t,name:"MuiSnackbarContent"}),{action:o,className:i,message:a,role:s="alert"}=r,u=Ne(r,c4),l=r,c=d4(l);return x.jsxs(f4,V({role:s,square:!0,elevation:6,className:cn(c.root,i),ownerState:l,ref:n},u,{children:[x.jsx(p4,{className:c.message,ownerState:l,children:a}),o?x.jsx(m4,{className:c.action,ownerState:l,children:o}):null]}))}),g4=h4;function v4(e){return Ln("MuiSnackbar",e)}sr("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const y4=["onEnter","onExited"],x4=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],w4=e=>{const{classes:t,anchorOrigin:n}=e,r={root:["root",`anchorOrigin${Yt(n.vertical)}${Yt(n.horizontal)}`]};return ur(r,v4,t)},dp=Xt("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`anchorOrigin${Yt(n.anchorOrigin.vertical)}${Yt(n.anchorOrigin.horizontal)}`]]}})(({theme:e,ownerState:t})=>{const n={left:"50%",right:"auto",transform:"translateX(-50%)"};return V({zIndex:(e.vars||e).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},t.anchorOrigin.vertical==="top"?{top:8}:{bottom:8},t.anchorOrigin.horizontal==="left"&&{justifyContent:"flex-start"},t.anchorOrigin.horizontal==="right"&&{justifyContent:"flex-end"},{[e.breakpoints.up("sm")]:V({},t.anchorOrigin.vertical==="top"?{top:24}:{bottom:24},t.anchorOrigin.horizontal==="center"&&n,t.anchorOrigin.horizontal==="left"&&{left:24,right:"auto"},t.anchorOrigin.horizontal==="right"&&{right:24,left:"auto"})})}),k4=P.forwardRef(function(t,n){const r=cr({props:t,name:"MuiSnackbar"}),o=Zc(),i={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{action:a,anchorOrigin:{vertical:s,horizontal:u}={vertical:"bottom",horizontal:"left"},autoHideDuration:l=null,children:c,className:d,ClickAwayListenerProps:f,ContentProps:m,disableWindowBlurListener:g=!1,message:v,open:w,TransitionComponent:h=l4,transitionDuration:p=i,TransitionProps:{onEnter:y,onExited:k}={}}=r,b=Ne(r.TransitionProps,y4),_=Ne(r,x4),E=V({},r,{anchorOrigin:{vertical:s,horizontal:u},autoHideDuration:l,disableWindowBlurListener:g,TransitionComponent:h,transitionDuration:p}),T=w4(E),{getRootProps:L,onClickAway:R}=U5(V({},E)),[I,D]=P.useState(!0),W=ju({elementType:dp,getSlotProps:L,externalForwardedProps:_,ownerState:E,additionalProps:{ref:n},className:[T.root,d]}),H=F=>{D(!0),k&&k(F)},U=(F,X)=>{D(!1),y&&y(F,X)};return!w&&I?null:x.jsx(S5,V({onClickAway:R},f,{children:x.jsx(dp,V({},W,{children:x.jsx(h,V({appear:!0,in:w,timeout:p,direction:s==="top"?"down":"up",onEnter:U,onExited:H},b,{children:c||x.jsx(g4,V({message:v,action:a},m))}))}))}))}),b4=k4,S4=j.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`,C4=j.div`
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
`,E4=j.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({theme:e})=>e.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,_4=j.div`
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
`,j4=j.form`
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
`,P4=j.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({theme:e})=>e.text_primary};
`,gl=j.input`
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
`,T4=j.textarea`
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
`,$4=j.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  transition: all 0.2s ease-in-out !important;
  background: hsla(148, 100%, 50%, 0.84);
  background: linear-gradient(225deg, hsl(153, 100%, 50%) 0%, hsl(98, 100%, 50%) 100%);
  background: -moz-linear-gradient(225deg, hsl(155, 100%, 50%) 0%, hsl(146, 100%, 50%) 100%);
  background: -webkit-linear-gradient(225deg, hsl(87, 100%, 50%) 0%, hsl(116, 100%, 50%) 100%);
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
    box-shadow: #1F2634 20px 20px 60px 0px;
    filter: brightness(1);
  }


  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
`,O4=()=>{const[e,t]=je.useState(!1),n=P.useRef(),{selectedLanguage:r}=Lt();return x.jsx(S4,{id:"contact",children:x.jsxs(C4,{children:[x.jsx(E4,{children:Y[r].contact.title}),x.jsx(_4,{children:Y[r].contact.desc}),x.jsxs(j4,{ref:n,children:[x.jsx(P4,{children:Y[r].contact.emailtile}),x.jsx(gl,{placeholder:Y[r].contact.emailyourtile,name:"from_email"}),x.jsx(gl,{placeholder:Y[r].contact.emailyourname,name:"from_name"}),x.jsx(gl,{placeholder:Y[r].contact.subject,name:"subject"}),x.jsx(T4,{placeholder:Y[r].contact.message,rows:"4",name:"message"}),x.jsx($4,{type:"submit",value:Y[r].contact.submit})]}),x.jsx(b4,{open:e,autoHideDuration:6e3,onClose:()=>t(!1),message:Y[r].contact.submitsuccess,severity:"success"})]})})},R4=j.div`
  display: flex;
  justify-content: flex-start; 
  margin: 5px 10px;
`,A4=j.p`
  font-size: 0.9rem;
  margin: 15px;
  padding: 5px;
  color: ${e=>e.isDarkMode?"black":"white"};
  text-align: right;

  :hover {
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
`,go=j.a`
  justify-content: center;
  display: flex;
  align-items: center;
  margin: 0 4px;
  cursor: pointer;
  border-radius: 2px;
  background: none;
  color: ${e=>e.isDarkMode?"black":"white"};
  text-decoration: none;
  box-shadow: none;
  text-align: center;

  padding: 8px 6px;
  font-weight: 250;
  font-size: 16px;
  transition: all 0.6s ease-in-out;


  :hover {
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
  
`,z4=j.div`
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
`,I4=j.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  z-index: 1;
`,M4=j.div`
  margin-left: 5px;
`;function N4(){const{selectedLanguage:e}=Lt(),{isDarkMode:t}=ar();return x.jsx(z4,{children:x.jsxs(I4,{children:[x.jsxs(R4,{children:[x.jsx(go,{isDarkMode:t,href:Y[e].facebook,target:"display",children:x.jsx(_x,{})}),x.jsx(go,{isDarkMode:t,href:Y[e].twitter,target:"display",children:x.jsx($x,{})}),x.jsx(go,{isDarkMode:t,href:Y[e].linkedin,target:"display",children:x.jsx(Mc,{})}),x.jsx(go,{isDarkMode:t,href:Y[e].insta,target:"display",children:x.jsx(Tx,{})}),x.jsxs(go,{isDarkMode:t,href:Y[e].ResumeLink,target:"display",children:[x.jsx(ug,{}),x.jsx(M4,{children:Y[e].ResumeTitle})]})]}),x.jsx(A4,{isDarkMode:t,children:"© 2023 by Kauan Vidigal"})]})})}const L4=P.createContext({}),D4=L4;function F4(e){return Ln("MuiTimelineContent",e)}sr("MuiTimelineContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]);function Zg(e){return e==="alternate-reverse"?"positionAlternateReverse":`position${Yt(e)}`}const B4=["className"],U4=e=>{const{position:t,classes:n}=e,r={root:["root",Zg(t)]};return ur(r,F4,n)},V4=Xt(k5,{name:"MuiTimelineContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[Zg(n.position)]]}})(({ownerState:e})=>V({flex:1,padding:"6px 16px",textAlign:"left"},e.position==="left"&&{textAlign:"right"})),H4=P.forwardRef(function(t,n){const r=cr({props:t,name:"MuiTimelineContent"}),{className:o}=r,i=Ne(r,B4),{position:a}=P.useContext(D4),s=V({},r,{position:a||"right"}),u=U4(s);return x.jsx(V4,V({component:"div",className:cn(u.root,o),ownerState:s,ref:n},i))}),e0=H4,t0=j.img`
  display: none;
  height: 70px;
  width: fit-content;
  background-color: #000;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`,W4=j.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({theme:e})=>e.text_secondary};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`,n0=j.span`
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
`,G4=j.div`
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

  &:hover ${t0} {
    display: flex;
  }

  &:hover ${n0} {
    overflow: visible;
    -webkit-line-clamp: unset;

  }

  border: 0.1px solid ${({theme:e})=>e.primary};
`,K4=j.div`
  width: 100%;
  display: flex;
  gap: 12px
`,Q4=j.img`
  height: 50px;
  background-color: #000;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`,Y4=j.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`,fp=j.b`
  color: ${({theme:e})=>e.text_primary};
`,q4=j.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({theme:e})=>e.text_primary};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`,X4=j.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.text_secondary+99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`,J4=j.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({theme:e})=>e.text_secondary+80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`,Z4=j.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0px;
  @media only screen and (max-width: 600px) {
    margin: 4px 0px;
  }
`,eS=j.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({theme:e})=>e.primary};
  padding: 5px;
  border-radius: 8px;
  background-color: ${({theme:e})=>e.primary+20};
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`,pp=j.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: -10px;
`,mp=j.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,tS=j.div`
  font-size: 14px;
  font-weight: 300;
  color: ${({theme:e})=>e.text_secondary};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`,nS=({experience:e})=>{var t,n;return x.jsxs(G4,{children:[x.jsxs(K4,{children:[x.jsx(Q4,{src:e.img}),x.jsxs(Y4,{children:[x.jsx(q4,{children:e.role}),x.jsx(X4,{children:e.company}),x.jsx(J4,{children:e.date})]})]}),x.jsxs(W4,{children:[(e==null?void 0:e.desc)&&x.jsx(n0,{children:e==null?void 0:e.desc}),e.skillsFreeLancerTitle.length>1&&x.jsxs(fp,{children:[x.jsx("br",{}),e.skillsFreeLancerTitle]}),x.jsx("br",{}),x.jsx("br",{}),x.jsx(pp,{children:x.jsx(mp,{children:e.skillsFreeLancerTitle.length>1&&((t=e==null?void 0:e.skillsFreeLancer)==null?void 0:t.map((r,o)=>x.jsx(Z4,{children:x.jsx(eS,{children:r})},o)))})}),(e==null?void 0:e.skills)&&x.jsxs(x.Fragment,{children:[x.jsx("br",{}),x.jsxs(pp,{children:[x.jsx(fp,{children:e.skillsTitle}),x.jsx(mp,{children:(n=e==null?void 0:e.skills)==null?void 0:n.map((r,o)=>x.jsxs(tS,{children:["• ",r]},o))})]})]})]}),e.doc&&x.jsx("a",{href:e.doc,target:"_blank",rel:"noopener noreferrer",children:x.jsx(t0,{src:e.doc})})]})},rS=j.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`,oS=j.div`
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
`,iS=j.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({theme:e})=>e.sub_text};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,aS=j.div`
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
`;j.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;const sS=()=>{const{selectedLanguage:e}=Lt();return x.jsx(rS,{id:"experience",children:x.jsxs(oS,{children:[x.jsx(iS,{children:Y[e].experiences.title}),x.jsx(aS,{children:Y[e].experiences.desc}),Y[e].experiences.info.map((t,n)=>x.jsx(e0,{sx:{py:"12px",px:2},children:x.jsx(nS,{experience:t})}))]})})};function lS(e){return qt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"}}]})(e)}const uS=j.div`
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
`,cS=j.div`
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
`,dS=j.div`
  font-size: 28px;
  font-weight: 600;
  color: ${e=>e.isDarkMode?"white":"black"};
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    margin: 6px 6px 0px 6px;
  }
`,fS=j.div`
  font-size: 16px;
  margin: 2px 6px;
  font-weight: 400;
  color: ${({theme:e})=>e.text_secondary};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`,pS=j.div`
  font-size: 16px;
  font-weight: 400;
  color: ${e=>e.isDarkMode?"white":"black"};
  margin: 8px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
    margin: 6px 6px;
  }
`,mS=j.img`
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
  margin-top: 30px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
`,hS=j.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({theme:e})=>e.text_primary};
  margin: 8px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    margin: 8px 6px;
  }
`,gS=j.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0px;
  @media only screen and (max-width: 600px) {
    margin: 4px 0px;
  }
`,vS=j.div`
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
`,yS=j.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-wrap: wrap;
  margin: 12px 6px;
  @media only screen and (max-width: 600px) {
    margin: 4px 6px;
  }
`,xS=j.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,wS=j.img`
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
`,kS=j.div`
  font-size: 16px;
  font-weight: 500;
  width: 200px;
  color: ${({theme:e})=>e.text_primary};
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`,bS=j.div`
  display: flex;
  justify-content: flex-end;
  margin: 12px 0px;
  gap: 12px;
`,hp=j.a`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.isDarkMode?"white":"black"};
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${({theme:e})=>e.primary};
  ${({dull:e,theme:t})=>e&&`
        background-color: ${t.bgLight};
        color: ${t.text_secondary};
        &:hover {
            background-color: ${({theme:n})=>n.bg+99};
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
`,SS=({openModal:e,setOpenModal:t})=>{const{isDarkMode:n}=ar(),{selectedLanguage:r}=Lt(),o=e==null?void 0:e.project;return x.jsx(i4,{open:!0,onClose:()=>t({state:!1,project:null}),children:x.jsx(uS,{children:x.jsxs(cS,{children:[x.jsx(lS,{style:{position:"absolute",top:"10px",right:"20px",cursor:"pointer",width:"35px",height:"35px",color:n?"white":"black"},isDarkMode:n,onClick:()=>t({state:!1,project:null})}),x.jsx(mS,{src:o==null?void 0:o.image}),x.jsx(dS,{isDarkMode:n,children:o==null?void 0:o.title}),x.jsx(fS,{children:o.date}),x.jsx(gS,{children:o==null?void 0:o.tags.map(i=>x.jsx(vS,{children:i}))}),x.jsx(pS,{isDarkMode:n,children:o==null?void 0:o.description}),o.member&&x.jsxs(x.Fragment,{children:[x.jsx(hS,{children:"Members"}),x.jsx(yS,{children:o==null?void 0:o.member.map(i=>x.jsxs(xS,{children:[x.jsx(wS,{src:i.img}),x.jsx(kS,{children:i.name}),x.jsx("a",{href:i.github,target:"new",style:{textDecoration:"none",color:"inherit"},children:x.jsx(Px,{})}),x.jsx("a",{href:i.linkedin,target:"new",style:{textDecoration:"none",color:"inherit"},children:x.jsx(Mc,{})})]}))})]}),x.jsxs(bS,{children:[x.jsx(hp,{isDarkMode:n,dull:!0,href:o==null?void 0:o.github,target:"new",children:Y[r].projects.buttonGitHubTitle}),x.jsx(hp,{isDarkMode:n,href:o==null?void 0:o.webapp,target:"new",children:Y[r].projects.buttonWebappTitle})]})]})})})},CS=j.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`,ES=j.div`
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
`,_S=j.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  color: ${({theme:e})=>e.sub_text};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,jS=j.div`
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
`,PS=j.div`
    display: flex;
    border: 1.5px solid ${({theme:e})=>e.primary};
    color: ${({theme:e})=>e.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`,Ni=j.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    ${({active:e,theme:t})=>e&&`
    background: ${t.primary+20};
    `}
    &:hover {
        background: ${({theme:e})=>e.primary+8};
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`,TS=j.div`
    width: 1.5px;
    background: ${({theme:e})=>e.primary};
`,$S=j.div`
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
`,OS=j.button`
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
`,RS=j.div`
  width: 330px;
  height: 490px;
  background-color: ${({theme:e})=>e.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
    filter: brightness(1.1);
  }
  &:hover ${OS} {
    display: block;
  }
`,AS=j.img`
  width: 100%;
  height: 180px;
  background-color: ${({theme:e})=>e.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`,zS=j.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`,IS=j.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({theme:e})=>e.primary};
  background-color: ${({theme:e})=>e.primary+15};
  padding: 2px 8px;
  border-radius: 10px;
`,MS=j.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`,NS=j.div`
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
`,LS=j.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({theme:e})=>e.text_secondary+80};
  @media only screen and (max-width: 768px){
    font-size: 10px;
  }
`,DS=j.div`
  font-weight: 400;
  color: ${({theme:e})=>e.text_secondary+99};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`,FS=j.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`,BS=j.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({theme:e})=>e.white};
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  border: 3px solid ${({theme:e})=>e.card};
`,gp=({project:e,setOpenModal:t})=>{var n,r;return x.jsxs(RS,{onClick:()=>t({state:!0,project:e}),children:[x.jsx(AS,{src:e.image}),x.jsx(zS,{children:(n=e.tags)==null?void 0:n.map((o,i)=>x.jsx(IS,{children:o},i))}),x.jsxs(MS,{children:[x.jsx(NS,{children:e.title}),x.jsx(LS,{children:e.date}),x.jsx(DS,{children:e.description})]}),x.jsx(FS,{children:(r=e.member)==null?void 0:r.map((o,i)=>x.jsx(BS,{src:o.img},i))})]})},US=({openModal:e,setOpenModal:t})=>{const[n,r]=P.useState("all"),{selectedLanguage:o}=Lt();return x.jsx(CS,{id:"projects",children:x.jsxs(ES,{children:[x.jsx(_S,{children:Y[o].projects.title}),x.jsx(jS,{children:Y[o].projects.desc}),x.jsxs(PS,{children:[n==="all"?x.jsx(Ni,{active:!0,value:"all",onClick:()=>r("all"),children:Y[o].projects.nav.ProjectAll}):x.jsx(Ni,{value:"all",onClick:()=>r("all"),children:Y[o].projects.nav.ProjectAll}),x.jsx(TS,{}),n==="bootcamp "?x.jsx(Ni,{active:!0,value:"bootcamp",onClick:()=>r("bootcamp"),children:Y[o].projects.nav.Bootcamp}):x.jsx(Ni,{value:"bootcamp",onClick:()=>r("bootcamp"),children:Y[o].projects.nav.Bootcamp})]}),x.jsxs($S,{children:[n==="all"&&Y[o].projects.info.map(i=>x.jsx(gp,{project:i,openModal:e,setOpenModal:t})),Y[o].projects.info.filter(i=>i.category==n).map(i=>x.jsx(gp,{project:i,openModal:e,setOpenModal:t}))]})]})})},VS=j.img`
  display: none;
  height: 70px;
  width: fit-content;
  background-color: #000;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`,HS=j.a`
  background: ${({theme:e})=>e.text_primary};
  justify-content: center;
  display: flex;
  height: 45px;
  align-items: center;
  border-radius: 2px;
  color: ${e=>e.isDarkMode?"black":"white"};
  cursor: pointer;
  padding: 5px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  :hover {
    background: ${({theme:e})=>e.primary};
    color: ${({theme:e})=>e.white};
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`,r0=j.span`
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
`,WS=j.div`
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

  &:hover ${VS} {
    display: flex;
  }

  &:hover ${r0} {
    overflow: visible;
    -webkit-line-clamp: unset;

  }

  border: 0.1px solid ${({theme:e})=>e.primary};
`,GS=j.div`
  width: 100%;
  display: flex;
  gap: 12px
`,KS=j.img`
  height: 50px;
  background-color: #000;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`,QS=j.img`
  border-radius: 10px;
  margin: 2px;
  width: 50%;
  height: 50%;
  @media only screen and (max-width: 768px) {
    width: 50%;
    height: 50%;
  }
`,YS=j.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px;
`,qS=j.div`
  font-size: 18px;
  font-weight: 400;
  text-align: left;
  color: ${({theme:e})=>e.text_primary+99};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`,XS=j.div`
  font-size: 15px;
  font-style: italic;
  font-weight: 200;
  text-align: left;
  color: ${e=>e.isDarkMode?"white":"black"};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`,JS=j.div`
  font-size: 25px;
  font-weight: 500;
  margin: 4px;
  text-align: center;
  color: ${e=>e.isDarkMode?"white":"black"};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`,ZS=j.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.text_secondary+99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`,e3=j.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({theme:e})=>e.text_secondary+80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`,t3=j.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.text_secondary+99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`,n3=j.a`
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


`,r3=j.a`
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


`,o3=({education:e})=>{const{isDarkMode:t}=ar();return x.jsxs(WS,{children:[x.jsxs(GS,{children:[x.jsx(r3,{href:e.linkIcon,target:"_blank",rel:"noopener noreferrer",children:x.jsx(KS,{src:e.img})}),x.jsxs(YS,{children:[x.jsx(qS,{children:e.school}),x.jsx(XS,{isDarkMode:t,children:e.curseMoment}),x.jsx(ZS,{children:e.degree}),x.jsx(e3,{children:e.date})]}),e.CertificateTitle.length>1&&x.jsx(JS,{isDarkMode:t,children:e.CertificateTitle})]}),e.CertificateLink.length>1&&x.jsx(n3,{href:e.CertificateLink,target:"_blank",rel:"noopener noreferrer",children:x.jsx(QS,{src:e.CertificateImg})}),e.gradetitle.length>1&&x.jsxs(t3,{children:[x.jsxs("b",{children:[e.gradetitle," "]}),e.gradevalue]}),e.desc.length>1&&x.jsx(r0,{children:e.desc}),e.curseTitle.length>1&&x.jsx(HS,{isDarkMode:t,target:"_blank",href:e.curseLink,children:e.curseTitle})]})},i3=j.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  margin-top: 30px;
`,a3=j.div`
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
`,s3=j.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({theme:e})=>e.sub_text};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,l3=j.div`
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
`;j.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;const u3=()=>{const{selectedLanguage:e}=Lt();return x.jsx(i3,{id:"education",children:x.jsxs(a3,{children:[x.jsx(s3,{children:Y[e].education.title}),x.jsx(l3,{children:Y[e].education.desc}),Y[e].education.info.map((t,n)=>x.jsx(e0,{sx:{py:"12px",px:2},children:x.jsx(o3,{education:t})}))]})})},c3=j.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`,d3=j.div`
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
`,f3=j.div`
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
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  @media (max-width: 768px) {
    width: 90%;
    padding: 15px;
  }

  @media (max-width: 640px) {
    width: 90%;
    padding: 15px;
  }
`,p3=j.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1000px;

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
`,m3=j.img`
  height: 150px;
  width: 150px;
  margin: 0 auto;
`,h3=j.img`
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
`,g3=j.div`
  width: 48%;
`,v3=j.div`
  width: 48%;
`,y3=j.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({theme:e})=>e.sub_text};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,x3=j.div`
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
`,w3=()=>{const{selectedLanguage:e}=Lt();return x.jsx(c3,{id:"about",children:x.jsxs(d3,{children:[x.jsx(y3,{children:Y[e].about.title}),x.jsxs(f3,{children:[x.jsx(g3,{children:x.jsx(h3,{src:Y[e].about.userimg,alt:"Vidigal"})}),x.jsx(v3,{children:x.jsxs(x3,{children:[Y[e].about.desc,x.jsx(p3,{children:x.jsx(m3,{src:Y[e].about.linkheaderimg,alt:"Header"})})]})})]})]})})},k3=j.div`
  background-color: ${({theme:e})=>e.bg};
  width: 100%;
  overflow-x: hidden;
`;function b3(){const{handleLanguageChange:e}=Lt(),{isDarkMode:t}=ar(),[n,r]=P.useState({state:!1,project:null}),o=i=>{e(i)};return P.useEffect(()=>{const i=window.location.pathname;i.startsWith("/pt")?o("pt"):i.startsWith("/en")&&o("en"),i==="/en/edu"&&(o("en"),window.location.href="#education"),i==="/pt/edu"&&(o("pt"),window.location.href="#education")},[]),x.jsx(x.Fragment,{children:x.jsx(Ty,{theme:t?Ay:zy,children:x.jsxs(ox,{children:[x.jsx(Rx,{}),x.jsxs(k3,{children:[x.jsx(rw,{}),x.jsx(xw,{}),x.jsx(sS,{}),x.jsx(u3,{}),x.jsx(US,{openModal:n,setOpenModal:r}),x.jsx(O4,{}),x.jsx(w3,{}),x.jsx(N4,{}),n.state&&x.jsx(SS,{openModal:n,setOpenModal:r})]})]})})})}const S3=yl.createRoot(document.getElementById("root"));S3.render(x.jsx(je.StrictMode,{children:x.jsx(kx,{children:x.jsx(bx,{children:x.jsx(b3,{})})})}));
