function j0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var T0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ta(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Zf={exports:{}},Pa={},ep={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jo=Symbol.for("react.element"),P0=Symbol.for("react.portal"),$0=Symbol.for("react.fragment"),O0=Symbol.for("react.strict_mode"),R0=Symbol.for("react.profiler"),A0=Symbol.for("react.provider"),z0=Symbol.for("react.context"),I0=Symbol.for("react.forward_ref"),N0=Symbol.for("react.suspense"),M0=Symbol.for("react.memo"),L0=Symbol.for("react.lazy"),Bu=Symbol.iterator;function D0(e){return e===null||typeof e!="object"?null:(e=Bu&&e[Bu]||e["@@iterator"],typeof e=="function"?e:null)}var tp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},np=Object.assign,rp={};function Xr(e,t,n){this.props=e,this.context=t,this.refs=rp,this.updater=n||tp}Xr.prototype.isReactComponent={};Xr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Xr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function op(){}op.prototype=Xr.prototype;function xc(e,t,n){this.props=e,this.context=t,this.refs=rp,this.updater=n||tp}var wc=xc.prototype=new op;wc.constructor=xc;np(wc,Xr.prototype);wc.isPureReactComponent=!0;var Uu=Array.isArray,ip=Object.prototype.hasOwnProperty,kc={current:null},ap={key:!0,ref:!0,__self:!0,__source:!0};function sp(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)ip.call(t,r)&&!ap.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var c=Array(s),l=0;l<s;l++)c[l]=arguments[l+2];o.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Jo,type:e,key:i,ref:a,props:o,_owner:kc.current}}function F0(e,t){return{$$typeof:Jo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function bc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Jo}function B0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Vu=/\/+/g;function _s(e,t){return typeof e=="object"&&e!==null&&e.key!=null?B0(""+e.key):t.toString(36)}function $i(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Jo:case P0:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+_s(a,0):r,Uu(o)?(n="",e!=null&&(n=e.replace(Vu,"$&/")+"/"),$i(o,t,n,"",function(l){return l})):o!=null&&(bc(o)&&(o=F0(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Vu,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",Uu(e))for(var s=0;s<e.length;s++){i=e[s];var c=r+_s(i,s);a+=$i(i,t,n,c,o)}else if(c=D0(e),typeof c=="function")for(e=c.call(e),s=0;!(i=e.next()).done;)i=i.value,c=r+_s(i,s++),a+=$i(i,t,n,c,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function li(e,t,n){if(e==null)return e;var r=[],o=0;return $i(e,r,"","",function(i){return t.call(n,i,o++)}),r}function U0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Je={current:null},Oi={transition:null},V0={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:Oi,ReactCurrentOwner:kc};re.Children={map:li,forEach:function(e,t,n){li(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return li(e,function(){t++}),t},toArray:function(e){return li(e,function(t){return t})||[]},only:function(e){if(!bc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=Xr;re.Fragment=$0;re.Profiler=R0;re.PureComponent=xc;re.StrictMode=O0;re.Suspense=N0;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V0;re.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=np({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=kc.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)ip.call(t,c)&&!ap.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){s=Array(c);for(var l=0;l<c;l++)s[l]=arguments[l+2];r.children=s}return{$$typeof:Jo,type:e.type,key:o,ref:i,props:r,_owner:a}};re.createContext=function(e){return e={$$typeof:z0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:A0,_context:e},e.Consumer=e};re.createElement=sp;re.createFactory=function(e){var t=sp.bind(null,e);return t.type=e,t};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:I0,render:e}};re.isValidElement=bc;re.lazy=function(e){return{$$typeof:L0,_payload:{_status:-1,_result:e},_init:U0}};re.memo=function(e,t){return{$$typeof:M0,type:e,compare:t===void 0?null:t}};re.startTransition=function(e){var t=Oi.transition;Oi.transition={};try{e()}finally{Oi.transition=t}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(e,t){return Je.current.useCallback(e,t)};re.useContext=function(e){return Je.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return Je.current.useDeferredValue(e)};re.useEffect=function(e,t){return Je.current.useEffect(e,t)};re.useId=function(){return Je.current.useId()};re.useImperativeHandle=function(e,t,n){return Je.current.useImperativeHandle(e,t,n)};re.useInsertionEffect=function(e,t){return Je.current.useInsertionEffect(e,t)};re.useLayoutEffect=function(e,t){return Je.current.useLayoutEffect(e,t)};re.useMemo=function(e,t){return Je.current.useMemo(e,t)};re.useReducer=function(e,t,n){return Je.current.useReducer(e,t,n)};re.useRef=function(e){return Je.current.useRef(e)};re.useState=function(e){return Je.current.useState(e)};re.useSyncExternalStore=function(e,t,n){return Je.current.useSyncExternalStore(e,t,n)};re.useTransition=function(){return Je.current.useTransition()};re.version="18.2.0";ep.exports=re;var T=ep.exports;const je=Ta(T),al=j0({__proto__:null,default:je},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H0=T,W0=Symbol.for("react.element"),G0=Symbol.for("react.fragment"),K0=Object.prototype.hasOwnProperty,Q0=H0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Y0={key:!0,ref:!0,__self:!0,__source:!0};function lp(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)K0.call(t,r)&&!Y0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:W0,type:e,key:i,ref:a,props:o,_owner:Q0.current}}Pa.Fragment=G0;Pa.jsx=lp;Pa.jsxs=lp;Zf.exports=Pa;var x=Zf.exports,sl={},cp={exports:{}},ft={},up={exports:{}},dp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,I){var R=z.length;z.push(I);e:for(;0<R;){var G=R-1>>>1,O=z[G];if(0<o(O,I))z[G]=I,z[R]=O,R=G;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var I=z[0],R=z.pop();if(R!==I){z[0]=R;e:for(var G=0,O=z.length,V=O>>>1;G<V;){var C=2*(G+1)-1,J=z[C],S=C+1,Q=z[S];if(0>o(J,R))S<O&&0>o(Q,J)?(z[G]=Q,z[S]=R,G=S):(z[G]=J,z[C]=R,G=C);else if(S<O&&0>o(Q,R))z[G]=Q,z[S]=R,G=S;else break e}}return I}function o(z,I){var R=z.sortIndex-I.sortIndex;return R!==0?R:z.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var c=[],l=[],u=1,d=null,f=3,m=!1,g=!1,v=!1,k=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(z){for(var I=n(l);I!==null;){if(I.callback===null)r(l);else if(I.startTime<=z)r(l),I.sortIndex=I.expirationTime,t(c,I);else break;I=n(l)}}function w(z){if(v=!1,y(z),!g)if(n(c)!==null)g=!0,U(b);else{var I=n(l);I!==null&&q(w,I.startTime-z)}}function b(z,I){g=!1,v&&(v=!1,h($),$=-1),m=!0;var R=f;try{for(y(I),d=n(c);d!==null&&(!(d.expirationTime>I)||z&&!A());){var G=d.callback;if(typeof G=="function"){d.callback=null,f=d.priorityLevel;var O=G(d.expirationTime<=I);I=e.unstable_now(),typeof O=="function"?d.callback=O:d===n(c)&&r(c),y(I)}else r(c);d=n(c)}if(d!==null)var V=!0;else{var C=n(l);C!==null&&q(w,C.startTime-I),V=!1}return V}finally{d=null,f=R,m=!1}}var _=!1,E=null,$=-1,L=5,P=-1;function A(){return!(e.unstable_now()-P<L)}function D(){if(E!==null){var z=e.unstable_now();P=z;var I=!0;try{I=E(!0,z)}finally{I?W():(_=!1,E=null)}}else _=!1}var W;if(typeof p=="function")W=function(){p(D)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,B=H.port2;H.port1.onmessage=D,W=function(){B.postMessage(null)}}else W=function(){k(D,0)};function U(z){E=z,_||(_=!0,W())}function q(z,I){$=k(function(){z(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){g||m||(g=!0,U(b))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(z){switch(f){case 1:case 2:case 3:var I=3;break;default:I=f}var R=f;f=I;try{return z()}finally{f=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,I){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var R=f;f=z;try{return I()}finally{f=R}},e.unstable_scheduleCallback=function(z,I,R){var G=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?G+R:G):R=G,z){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=R+O,z={id:u++,callback:I,priorityLevel:z,startTime:R,expirationTime:O,sortIndex:-1},R>G?(z.sortIndex=R,t(l,z),n(c)===null&&z===n(l)&&(v?(h($),$=-1):v=!0,q(w,R-G))):(z.sortIndex=O,t(c,z),g||m||(g=!0,U(b))),z},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(z){var I=f;return function(){var R=f;f=I;try{return z.apply(this,arguments)}finally{f=R}}}})(dp);up.exports=dp;var X0=up.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fp=T,dt=X0;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pp=new Set,Po={};function tr(e,t){Lr(e,t),Lr(e+"Capture",t)}function Lr(e,t){for(Po[e]=t,e=0;e<t.length;e++)pp.add(t[e])}var nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ll=Object.prototype.hasOwnProperty,q0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hu={},Wu={};function J0(e){return ll.call(Wu,e)?!0:ll.call(Hu,e)?!1:q0.test(e)?Wu[e]=!0:(Hu[e]=!0,!1)}function Z0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function eg(e,t,n,r){if(t===null||typeof t>"u"||Z0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ze(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var Ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ve[e]=new Ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ve[t]=new Ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ve[e]=new Ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ve[e]=new Ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ve[e]=new Ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ve[e]=new Ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ve[e]=new Ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ve[e]=new Ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ve[e]=new Ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var Sc=/[\-:]([a-z])/g;function Cc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Sc,Cc);Ve[t]=new Ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Sc,Cc);Ve[t]=new Ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Sc,Cc);Ve[t]=new Ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ve[e]=new Ze(e,1,!1,e.toLowerCase(),null,!1,!1)});Ve.xlinkHref=new Ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ve[e]=new Ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ec(e,t,n,r){var o=Ve.hasOwnProperty(t)?Ve[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(eg(t,n,o,r)&&(n=null),r||o===null?J0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var cn=fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ci=Symbol.for("react.element"),vr=Symbol.for("react.portal"),yr=Symbol.for("react.fragment"),_c=Symbol.for("react.strict_mode"),cl=Symbol.for("react.profiler"),mp=Symbol.for("react.provider"),hp=Symbol.for("react.context"),jc=Symbol.for("react.forward_ref"),ul=Symbol.for("react.suspense"),dl=Symbol.for("react.suspense_list"),Tc=Symbol.for("react.memo"),pn=Symbol.for("react.lazy"),gp=Symbol.for("react.offscreen"),Gu=Symbol.iterator;function eo(e){return e===null||typeof e!="object"?null:(e=Gu&&e[Gu]||e["@@iterator"],typeof e=="function"?e:null)}var be=Object.assign,js;function fo(e){if(js===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);js=t&&t[1]||""}return`
`+js+e}var Ts=!1;function Ps(e,t){if(!e||Ts)return"";Ts=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(l){var r=l}Reflect.construct(e,[],t)}else{try{t.call()}catch(l){r=l}e.call(t.prototype)}else{try{throw Error()}catch(l){r=l}e()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var o=l.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var c=`
`+o[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=s);break}}}finally{Ts=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?fo(e):""}function tg(e){switch(e.tag){case 5:return fo(e.type);case 16:return fo("Lazy");case 13:return fo("Suspense");case 19:return fo("SuspenseList");case 0:case 2:case 15:return e=Ps(e.type,!1),e;case 11:return e=Ps(e.type.render,!1),e;case 1:return e=Ps(e.type,!0),e;default:return""}}function fl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case yr:return"Fragment";case vr:return"Portal";case cl:return"Profiler";case _c:return"StrictMode";case ul:return"Suspense";case dl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case hp:return(e.displayName||"Context")+".Consumer";case mp:return(e._context.displayName||"Context")+".Provider";case jc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Tc:return t=e.displayName||null,t!==null?t:fl(e.type)||"Memo";case pn:t=e._payload,e=e._init;try{return fl(e(t))}catch{}}return null}function ng(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fl(t);case 8:return t===_c?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Pn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function rg(e){var t=vp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ui(e){e._valueTracker||(e._valueTracker=rg(e))}function yp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=vp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pl(e,t){var n=t.checked;return be({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ku(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Pn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function xp(e,t){t=t.checked,t!=null&&Ec(e,"checked",t,!1)}function ml(e,t){xp(e,t);var n=Pn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?hl(e,t.type,n):t.hasOwnProperty("defaultValue")&&hl(e,t.type,Pn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Qu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function hl(e,t,n){(t!=="number"||Qi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var po=Array.isArray;function $r(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Pn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function gl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return be({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(po(n)){if(1<n.length)throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Pn(n)}}function wp(e,t){var n=Pn(t.value),r=Pn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Xu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function kp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?kp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var di,bp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(di=di||document.createElement("div"),di.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=di.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $o(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var vo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},og=["Webkit","ms","Moz","O"];Object.keys(vo).forEach(function(e){og.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),vo[t]=vo[e]})});function Sp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||vo.hasOwnProperty(e)&&vo[e]?(""+t).trim():t+"px"}function Cp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Sp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var ig=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yl(e,t){if(t){if(ig[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function xl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wl=null;function Pc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var kl=null,Or=null,Rr=null;function qu(e){if(e=ti(e)){if(typeof kl!="function")throw Error(M(280));var t=e.stateNode;t&&(t=za(t),kl(e.stateNode,e.type,t))}}function Ep(e){Or?Rr?Rr.push(e):Rr=[e]:Or=e}function _p(){if(Or){var e=Or,t=Rr;if(Rr=Or=null,qu(e),t)for(e=0;e<t.length;e++)qu(t[e])}}function jp(e,t){return e(t)}function Tp(){}var $s=!1;function Pp(e,t,n){if($s)return e(t,n);$s=!0;try{return jp(e,t,n)}finally{$s=!1,(Or!==null||Rr!==null)&&(Tp(),_p())}}function Oo(e,t){var n=e.stateNode;if(n===null)return null;var r=za(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}var bl=!1;if(nn)try{var to={};Object.defineProperty(to,"passive",{get:function(){bl=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{bl=!1}function ag(e,t,n,r,o,i,a,s,c){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(u){this.onError(u)}}var yo=!1,Yi=null,Xi=!1,Sl=null,sg={onError:function(e){yo=!0,Yi=e}};function lg(e,t,n,r,o,i,a,s,c){yo=!1,Yi=null,ag.apply(sg,arguments)}function cg(e,t,n,r,o,i,a,s,c){if(lg.apply(this,arguments),yo){if(yo){var l=Yi;yo=!1,Yi=null}else throw Error(M(198));Xi||(Xi=!0,Sl=l)}}function nr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function $p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ju(e){if(nr(e)!==e)throw Error(M(188))}function ug(e){var t=e.alternate;if(!t){if(t=nr(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ju(o),e;if(i===r)return Ju(o),t;i=i.sibling}throw Error(M(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function Op(e){return e=ug(e),e!==null?Rp(e):null}function Rp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Rp(e);if(t!==null)return t;e=e.sibling}return null}var Ap=dt.unstable_scheduleCallback,Zu=dt.unstable_cancelCallback,dg=dt.unstable_shouldYield,fg=dt.unstable_requestPaint,Te=dt.unstable_now,pg=dt.unstable_getCurrentPriorityLevel,$c=dt.unstable_ImmediatePriority,zp=dt.unstable_UserBlockingPriority,qi=dt.unstable_NormalPriority,mg=dt.unstable_LowPriority,Ip=dt.unstable_IdlePriority,$a=null,Ht=null;function hg(e){if(Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot($a,e,void 0,(e.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:yg,gg=Math.log,vg=Math.LN2;function yg(e){return e>>>=0,e===0?32:31-(gg(e)/vg|0)|0}var fi=64,pi=4194304;function mo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ji(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~o;s!==0?r=mo(s):(i&=a,i!==0&&(r=mo(i)))}else a=n&~o,a!==0?r=mo(a):i!==0&&(r=mo(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ot(t),o=1<<n,r|=e[n],t&=~o;return r}function xg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Ot(i),s=1<<a,c=o[a];c===-1?(!(s&n)||s&r)&&(o[a]=xg(s,t)):c<=t&&(e.expiredLanes|=s),i&=~s}}function Cl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Np(){var e=fi;return fi<<=1,!(fi&4194240)&&(fi=64),e}function Os(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ot(t),e[t]=n}function kg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ot(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Oc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ot(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ue=0;function Mp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Lp,Rc,Dp,Fp,Bp,El=!1,mi=[],xn=null,wn=null,kn=null,Ro=new Map,Ao=new Map,hn=[],bg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ed(e,t){switch(e){case"focusin":case"focusout":xn=null;break;case"dragenter":case"dragleave":wn=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":Ro.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(t.pointerId)}}function no(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=ti(t),t!==null&&Rc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Sg(e,t,n,r,o){switch(t){case"focusin":return xn=no(xn,e,t,n,r,o),!0;case"dragenter":return wn=no(wn,e,t,n,r,o),!0;case"mouseover":return kn=no(kn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Ro.set(i,no(Ro.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Ao.set(i,no(Ao.get(i)||null,e,t,n,r,o)),!0}return!1}function Up(e){var t=Bn(e.target);if(t!==null){var n=nr(t);if(n!==null){if(t=n.tag,t===13){if(t=$p(n),t!==null){e.blockedOn=t,Bp(e.priority,function(){Dp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ri(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_l(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);wl=r,n.target.dispatchEvent(r),wl=null}else return t=ti(n),t!==null&&Rc(t),e.blockedOn=n,!1;t.shift()}return!0}function td(e,t,n){Ri(e)&&n.delete(t)}function Cg(){El=!1,xn!==null&&Ri(xn)&&(xn=null),wn!==null&&Ri(wn)&&(wn=null),kn!==null&&Ri(kn)&&(kn=null),Ro.forEach(td),Ao.forEach(td)}function ro(e,t){e.blockedOn===t&&(e.blockedOn=null,El||(El=!0,dt.unstable_scheduleCallback(dt.unstable_NormalPriority,Cg)))}function zo(e){function t(o){return ro(o,e)}if(0<mi.length){ro(mi[0],e);for(var n=1;n<mi.length;n++){var r=mi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(xn!==null&&ro(xn,e),wn!==null&&ro(wn,e),kn!==null&&ro(kn,e),Ro.forEach(t),Ao.forEach(t),n=0;n<hn.length;n++)r=hn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<hn.length&&(n=hn[0],n.blockedOn===null);)Up(n),n.blockedOn===null&&hn.shift()}var Ar=cn.ReactCurrentBatchConfig,Zi=!0;function Eg(e,t,n,r){var o=ue,i=Ar.transition;Ar.transition=null;try{ue=1,Ac(e,t,n,r)}finally{ue=o,Ar.transition=i}}function _g(e,t,n,r){var o=ue,i=Ar.transition;Ar.transition=null;try{ue=4,Ac(e,t,n,r)}finally{ue=o,Ar.transition=i}}function Ac(e,t,n,r){if(Zi){var o=_l(e,t,n,r);if(o===null)Bs(e,t,r,ea,n),ed(e,r);else if(Sg(o,e,t,n,r))r.stopPropagation();else if(ed(e,r),t&4&&-1<bg.indexOf(e)){for(;o!==null;){var i=ti(o);if(i!==null&&Lp(i),i=_l(e,t,n,r),i===null&&Bs(e,t,r,ea,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Bs(e,t,r,null,n)}}var ea=null;function _l(e,t,n,r){if(ea=null,e=Pc(r),e=Bn(e),e!==null)if(t=nr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=$p(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ea=e,null}function Vp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pg()){case $c:return 1;case zp:return 4;case qi:case mg:return 16;case Ip:return 536870912;default:return 16}default:return 16}}var vn=null,zc=null,Ai=null;function Hp(){if(Ai)return Ai;var e,t=zc,n=t.length,r,o="value"in vn?vn.value:vn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Ai=o.slice(e,1<r?1-r:void 0)}function zi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hi(){return!0}function nd(){return!1}function pt(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?hi:nd,this.isPropagationStopped=nd,this}return be(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hi)},persist:function(){},isPersistent:hi}),t}var qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ic=pt(qr),ei=be({},qr,{view:0,detail:0}),jg=pt(ei),Rs,As,oo,Oa=be({},ei,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==oo&&(oo&&e.type==="mousemove"?(Rs=e.screenX-oo.screenX,As=e.screenY-oo.screenY):As=Rs=0,oo=e),Rs)},movementY:function(e){return"movementY"in e?e.movementY:As}}),rd=pt(Oa),Tg=be({},Oa,{dataTransfer:0}),Pg=pt(Tg),$g=be({},ei,{relatedTarget:0}),zs=pt($g),Og=be({},qr,{animationName:0,elapsedTime:0,pseudoElement:0}),Rg=pt(Og),Ag=be({},qr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zg=pt(Ag),Ig=be({},qr,{data:0}),od=pt(Ig),Ng={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Lg[e])?!!t[e]:!1}function Nc(){return Dg}var Fg=be({},ei,{key:function(e){if(e.key){var t=Ng[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nc,charCode:function(e){return e.type==="keypress"?zi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bg=pt(Fg),Ug=be({},Oa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),id=pt(Ug),Vg=be({},ei,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nc}),Hg=pt(Vg),Wg=be({},qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gg=pt(Wg),Kg=be({},Oa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qg=pt(Kg),Yg=[9,13,27,32],Mc=nn&&"CompositionEvent"in window,xo=null;nn&&"documentMode"in document&&(xo=document.documentMode);var Xg=nn&&"TextEvent"in window&&!xo,Wp=nn&&(!Mc||xo&&8<xo&&11>=xo),ad=" ",sd=!1;function Gp(e,t){switch(e){case"keyup":return Yg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xr=!1;function qg(e,t){switch(e){case"compositionend":return Kp(t);case"keypress":return t.which!==32?null:(sd=!0,ad);case"textInput":return e=t.data,e===ad&&sd?null:e;default:return null}}function Jg(e,t){if(xr)return e==="compositionend"||!Mc&&Gp(e,t)?(e=Hp(),Ai=zc=vn=null,xr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wp&&t.locale!=="ko"?null:t.data;default:return null}}var Zg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ld(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Zg[e.type]:t==="textarea"}function Qp(e,t,n,r){Ep(r),t=ta(t,"onChange"),0<t.length&&(n=new Ic("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var wo=null,Io=null;function e1(e){im(e,0)}function Ra(e){var t=br(e);if(yp(t))return e}function t1(e,t){if(e==="change")return t}var Yp=!1;if(nn){var Is;if(nn){var Ns="oninput"in document;if(!Ns){var cd=document.createElement("div");cd.setAttribute("oninput","return;"),Ns=typeof cd.oninput=="function"}Is=Ns}else Is=!1;Yp=Is&&(!document.documentMode||9<document.documentMode)}function ud(){wo&&(wo.detachEvent("onpropertychange",Xp),Io=wo=null)}function Xp(e){if(e.propertyName==="value"&&Ra(Io)){var t=[];Qp(t,Io,e,Pc(e)),Pp(e1,t)}}function n1(e,t,n){e==="focusin"?(ud(),wo=t,Io=n,wo.attachEvent("onpropertychange",Xp)):e==="focusout"&&ud()}function r1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ra(Io)}function o1(e,t){if(e==="click")return Ra(t)}function i1(e,t){if(e==="input"||e==="change")return Ra(t)}function a1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Nt=typeof Object.is=="function"?Object.is:a1;function No(e,t){if(Nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ll.call(t,o)||!Nt(e[o],t[o]))return!1}return!0}function dd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fd(e,t){var n=dd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dd(n)}}function qp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Jp(){for(var e=window,t=Qi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qi(e.document)}return t}function Lc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function s1(e){var t=Jp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&qp(n.ownerDocument.documentElement,n)){if(r!==null&&Lc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=fd(n,i);var a=fd(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var l1=nn&&"documentMode"in document&&11>=document.documentMode,wr=null,jl=null,ko=null,Tl=!1;function pd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tl||wr==null||wr!==Qi(r)||(r=wr,"selectionStart"in r&&Lc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ko&&No(ko,r)||(ko=r,r=ta(jl,"onSelect"),0<r.length&&(t=new Ic("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=wr)))}function gi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:gi("Animation","AnimationEnd"),animationiteration:gi("Animation","AnimationIteration"),animationstart:gi("Animation","AnimationStart"),transitionend:gi("Transition","TransitionEnd")},Ms={},Zp={};nn&&(Zp=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);function Aa(e){if(Ms[e])return Ms[e];if(!kr[e])return e;var t=kr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Zp)return Ms[e]=t[n];return e}var em=Aa("animationend"),tm=Aa("animationiteration"),nm=Aa("animationstart"),rm=Aa("transitionend"),om=new Map,md="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function On(e,t){om.set(e,t),tr(t,[e])}for(var Ls=0;Ls<md.length;Ls++){var Ds=md[Ls],c1=Ds.toLowerCase(),u1=Ds[0].toUpperCase()+Ds.slice(1);On(c1,"on"+u1)}On(em,"onAnimationEnd");On(tm,"onAnimationIteration");On(nm,"onAnimationStart");On("dblclick","onDoubleClick");On("focusin","onFocus");On("focusout","onBlur");On(rm,"onTransitionEnd");Lr("onMouseEnter",["mouseout","mouseover"]);Lr("onMouseLeave",["mouseout","mouseover"]);Lr("onPointerEnter",["pointerout","pointerover"]);Lr("onPointerLeave",["pointerout","pointerover"]);tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),d1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ho));function hd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,cg(r,t,void 0,e),e.currentTarget=null}function im(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==i&&o.isPropagationStopped())break e;hd(o,s,l),i=c}else for(a=0;a<r.length;a++){if(s=r[a],c=s.instance,l=s.currentTarget,s=s.listener,c!==i&&o.isPropagationStopped())break e;hd(o,s,l),i=c}}}if(Xi)throw e=Sl,Xi=!1,Sl=null,e}function ge(e,t){var n=t[Al];n===void 0&&(n=t[Al]=new Set);var r=e+"__bubble";n.has(r)||(am(t,e,2,!1),n.add(r))}function Fs(e,t,n){var r=0;t&&(r|=4),am(n,e,r,t)}var vi="_reactListening"+Math.random().toString(36).slice(2);function Mo(e){if(!e[vi]){e[vi]=!0,pp.forEach(function(n){n!=="selectionchange"&&(d1.has(n)||Fs(n,!1,e),Fs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vi]||(t[vi]=!0,Fs("selectionchange",!1,t))}}function am(e,t,n,r){switch(Vp(t)){case 1:var o=Eg;break;case 4:o=_g;break;default:o=Ac}n=o.bind(null,t,n,e),o=void 0,!bl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Bs(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;a=a.return}for(;s!==null;){if(a=Bn(s),a===null)return;if(c=a.tag,c===5||c===6){r=i=a;continue e}s=s.parentNode}}r=r.return}Pp(function(){var l=i,u=Pc(n),d=[];e:{var f=om.get(e);if(f!==void 0){var m=Ic,g=e;switch(e){case"keypress":if(zi(n)===0)break e;case"keydown":case"keyup":m=Bg;break;case"focusin":g="focus",m=zs;break;case"focusout":g="blur",m=zs;break;case"beforeblur":case"afterblur":m=zs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=rd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Pg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Hg;break;case em:case tm:case nm:m=Rg;break;case rm:m=Gg;break;case"scroll":m=jg;break;case"wheel":m=Qg;break;case"copy":case"cut":case"paste":m=zg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=id}var v=(t&4)!==0,k=!v&&e==="scroll",h=v?f!==null?f+"Capture":null:f;v=[];for(var p=l,y;p!==null;){y=p;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,h!==null&&(w=Oo(p,h),w!=null&&v.push(Lo(p,w,y)))),k)break;p=p.return}0<v.length&&(f=new m(f,g,null,n,u),d.push({event:f,listeners:v}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",f&&n!==wl&&(g=n.relatedTarget||n.fromElement)&&(Bn(g)||g[rn]))break e;if((m||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=l,g=g?Bn(g):null,g!==null&&(k=nr(g),g!==k||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=l),m!==g)){if(v=rd,w="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(v=id,w="onPointerLeave",h="onPointerEnter",p="pointer"),k=m==null?f:br(m),y=g==null?f:br(g),f=new v(w,p+"leave",m,n,u),f.target=k,f.relatedTarget=y,w=null,Bn(u)===l&&(v=new v(h,p+"enter",g,n,u),v.target=y,v.relatedTarget=k,w=v),k=w,m&&g)t:{for(v=m,h=g,p=0,y=v;y;y=cr(y))p++;for(y=0,w=h;w;w=cr(w))y++;for(;0<p-y;)v=cr(v),p--;for(;0<y-p;)h=cr(h),y--;for(;p--;){if(v===h||h!==null&&v===h.alternate)break t;v=cr(v),h=cr(h)}v=null}else v=null;m!==null&&gd(d,f,m,v,!1),g!==null&&k!==null&&gd(d,k,g,v,!0)}}e:{if(f=l?br(l):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var b=t1;else if(ld(f))if(Yp)b=i1;else{b=r1;var _=n1}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=o1);if(b&&(b=b(e,l))){Qp(d,b,n,u);break e}_&&_(e,f,l),e==="focusout"&&(_=f._wrapperState)&&_.controlled&&f.type==="number"&&hl(f,"number",f.value)}switch(_=l?br(l):window,e){case"focusin":(ld(_)||_.contentEditable==="true")&&(wr=_,jl=l,ko=null);break;case"focusout":ko=jl=wr=null;break;case"mousedown":Tl=!0;break;case"contextmenu":case"mouseup":case"dragend":Tl=!1,pd(d,n,u);break;case"selectionchange":if(l1)break;case"keydown":case"keyup":pd(d,n,u)}var E;if(Mc)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else xr?Gp(e,n)&&($="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&($="onCompositionStart");$&&(Wp&&n.locale!=="ko"&&(xr||$!=="onCompositionStart"?$==="onCompositionEnd"&&xr&&(E=Hp()):(vn=u,zc="value"in vn?vn.value:vn.textContent,xr=!0)),_=ta(l,$),0<_.length&&($=new od($,e,null,n,u),d.push({event:$,listeners:_}),E?$.data=E:(E=Kp(n),E!==null&&($.data=E)))),(E=Xg?qg(e,n):Jg(e,n))&&(l=ta(l,"onBeforeInput"),0<l.length&&(u=new od("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:l}),u.data=E))}im(d,t)})}function Lo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ta(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Oo(e,n),i!=null&&r.unshift(Lo(e,i,o)),i=Oo(e,t),i!=null&&r.push(Lo(e,i,o))),e=e.return}return r}function cr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function gd(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&l!==null&&(s=l,o?(c=Oo(n,i),c!=null&&a.unshift(Lo(n,c,s))):o||(c=Oo(n,i),c!=null&&a.push(Lo(n,c,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var f1=/\r\n?/g,p1=/\u0000|\uFFFD/g;function vd(e){return(typeof e=="string"?e:""+e).replace(f1,`
`).replace(p1,"")}function yi(e,t,n){if(t=vd(t),vd(e)!==t&&n)throw Error(M(425))}function na(){}var Pl=null,$l=null;function Ol(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rl=typeof setTimeout=="function"?setTimeout:void 0,m1=typeof clearTimeout=="function"?clearTimeout:void 0,yd=typeof Promise=="function"?Promise:void 0,h1=typeof queueMicrotask=="function"?queueMicrotask:typeof yd<"u"?function(e){return yd.resolve(null).then(e).catch(g1)}:Rl;function g1(e){setTimeout(function(){throw e})}function Us(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),zo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);zo(t)}function bn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function xd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Jr=Math.random().toString(36).slice(2),Vt="__reactFiber$"+Jr,Do="__reactProps$"+Jr,rn="__reactContainer$"+Jr,Al="__reactEvents$"+Jr,v1="__reactListeners$"+Jr,y1="__reactHandles$"+Jr;function Bn(e){var t=e[Vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[rn]||n[Vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xd(e);e!==null;){if(n=e[Vt])return n;e=xd(e)}return t}e=n,n=e.parentNode}return null}function ti(e){return e=e[Vt]||e[rn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function br(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function za(e){return e[Do]||null}var zl=[],Sr=-1;function Rn(e){return{current:e}}function ve(e){0>Sr||(e.current=zl[Sr],zl[Sr]=null,Sr--)}function pe(e,t){Sr++,zl[Sr]=e.current,e.current=t}var $n={},Qe=Rn($n),nt=Rn(!1),Kn=$n;function Dr(e,t){var n=e.type.contextTypes;if(!n)return $n;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function rt(e){return e=e.childContextTypes,e!=null}function ra(){ve(nt),ve(Qe)}function wd(e,t,n){if(Qe.current!==$n)throw Error(M(168));pe(Qe,t),pe(nt,n)}function sm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(M(108,ng(e)||"Unknown",o));return be({},n,r)}function oa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$n,Kn=Qe.current,pe(Qe,e),pe(nt,nt.current),!0}function kd(e,t,n){var r=e.stateNode;if(!r)throw Error(M(169));n?(e=sm(e,t,Kn),r.__reactInternalMemoizedMergedChildContext=e,ve(nt),ve(Qe),pe(Qe,e)):ve(nt),pe(nt,n)}var qt=null,Ia=!1,Vs=!1;function lm(e){qt===null?qt=[e]:qt.push(e)}function x1(e){Ia=!0,lm(e)}function An(){if(!Vs&&qt!==null){Vs=!0;var e=0,t=ue;try{var n=qt;for(ue=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}qt=null,Ia=!1}catch(o){throw qt!==null&&(qt=qt.slice(e+1)),Ap($c,An),o}finally{ue=t,Vs=!1}}return null}var Cr=[],Er=0,ia=null,aa=0,gt=[],vt=0,Qn=null,Zt=1,en="";function Mn(e,t){Cr[Er++]=aa,Cr[Er++]=ia,ia=e,aa=t}function cm(e,t,n){gt[vt++]=Zt,gt[vt++]=en,gt[vt++]=Qn,Qn=e;var r=Zt;e=en;var o=32-Ot(r)-1;r&=~(1<<o),n+=1;var i=32-Ot(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Zt=1<<32-Ot(t)+o|n<<o|r,en=i+e}else Zt=1<<i|n<<o|r,en=e}function Dc(e){e.return!==null&&(Mn(e,1),cm(e,1,0))}function Fc(e){for(;e===ia;)ia=Cr[--Er],Cr[Er]=null,aa=Cr[--Er],Cr[Er]=null;for(;e===Qn;)Qn=gt[--vt],gt[vt]=null,en=gt[--vt],gt[vt]=null,Zt=gt[--vt],gt[vt]=null}var ct=null,lt=null,xe=!1,Pt=null;function um(e,t){var n=xt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function bd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ct=e,lt=bn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ct=e,lt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Qn!==null?{id:Zt,overflow:en}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=xt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ct=e,lt=null,!0):!1;default:return!1}}function Il(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Nl(e){if(xe){var t=lt;if(t){var n=t;if(!bd(e,t)){if(Il(e))throw Error(M(418));t=bn(n.nextSibling);var r=ct;t&&bd(e,t)?um(r,n):(e.flags=e.flags&-4097|2,xe=!1,ct=e)}}else{if(Il(e))throw Error(M(418));e.flags=e.flags&-4097|2,xe=!1,ct=e}}}function Sd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ct=e}function xi(e){if(e!==ct)return!1;if(!xe)return Sd(e),xe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ol(e.type,e.memoizedProps)),t&&(t=lt)){if(Il(e))throw dm(),Error(M(418));for(;t;)um(e,t),t=bn(t.nextSibling)}if(Sd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){lt=bn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}lt=null}}else lt=ct?bn(e.stateNode.nextSibling):null;return!0}function dm(){for(var e=lt;e;)e=bn(e.nextSibling)}function Fr(){lt=ct=null,xe=!1}function Bc(e){Pt===null?Pt=[e]:Pt.push(e)}var w1=cn.ReactCurrentBatchConfig;function jt(e,t){if(e&&e.defaultProps){t=be({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var sa=Rn(null),la=null,_r=null,Uc=null;function Vc(){Uc=_r=la=null}function Hc(e){var t=sa.current;ve(sa),e._currentValue=t}function Ml(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zr(e,t){la=e,Uc=_r=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(tt=!0),e.firstContext=null)}function bt(e){var t=e._currentValue;if(Uc!==e)if(e={context:e,memoizedValue:t,next:null},_r===null){if(la===null)throw Error(M(308));_r=e,la.dependencies={lanes:0,firstContext:e}}else _r=_r.next=e;return t}var Un=null;function Wc(e){Un===null?Un=[e]:Un.push(e)}function fm(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Wc(t)):(n.next=o.next,o.next=n),t.interleaved=n,on(e,r)}function on(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var mn=!1;function Gc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Sn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,on(e,n)}return o=r.interleaved,o===null?(t.next=t,Wc(r)):(t.next=o.next,o.next=t),r.interleaved=t,on(e,n)}function Ii(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Oc(e,n)}}function Cd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ca(e,t,n,r){var o=e.updateQueue;mn=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var c=s,l=c.next;c.next=null,a===null?i=l:a.next=l,a=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==a&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(i!==null){var d=o.baseState;a=0,u=l=c=null,s=i;do{var f=s.lane,m=s.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:m,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,v=s;switch(f=t,m=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){d=g.call(m,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,f=typeof g=="function"?g.call(m,d,f):g,f==null)break e;d=be({},d,f);break e;case 2:mn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[s]:f.push(s))}else m={eventTime:m,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=m,c=d):u=u.next=m,a|=f;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;f=s,s=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(!0);if(u===null&&(c=d),o.baseState=c,o.firstBaseUpdate=l,o.lastBaseUpdate=u,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Xn|=a,e.lanes=a,e.memoizedState=d}}function Ed(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(M(191,o));o.call(r)}}}var mm=new fp.Component().refs;function Ll(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:be({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Na={isMounted:function(e){return(e=e._reactInternals)?nr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=qe(),o=En(e),i=tn(r,o);i.payload=t,n!=null&&(i.callback=n),t=Sn(e,i,o),t!==null&&(Rt(t,e,o,r),Ii(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=qe(),o=En(e),i=tn(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Sn(e,i,o),t!==null&&(Rt(t,e,o,r),Ii(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=qe(),r=En(e),o=tn(n,r);o.tag=2,t!=null&&(o.callback=t),t=Sn(e,o,r),t!==null&&(Rt(t,e,r,n),Ii(t,e,r))}};function _d(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!No(n,r)||!No(o,i):!0}function hm(e,t,n){var r=!1,o=$n,i=t.contextType;return typeof i=="object"&&i!==null?i=bt(i):(o=rt(t)?Kn:Qe.current,r=t.contextTypes,i=(r=r!=null)?Dr(e,o):$n),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Na,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function jd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Na.enqueueReplaceState(t,t.state,null)}function Dl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=mm,Gc(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=bt(i):(i=rt(t)?Kn:Qe.current,o.context=Dr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ll(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Na.enqueueReplaceState(o,o.state,null),ca(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function io(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=o.refs;s===mm&&(s=o.refs={}),a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function wi(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Td(e){var t=e._init;return t(e._payload)}function gm(e){function t(h,p){if(e){var y=h.deletions;y===null?(h.deletions=[p],h.flags|=16):y.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function o(h,p){return h=_n(h,p),h.index=0,h.sibling=null,h}function i(h,p,y){return h.index=y,e?(y=h.alternate,y!==null?(y=y.index,y<p?(h.flags|=2,p):y):(h.flags|=2,p)):(h.flags|=1048576,p)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,p,y,w){return p===null||p.tag!==6?(p=Xs(y,h.mode,w),p.return=h,p):(p=o(p,y),p.return=h,p)}function c(h,p,y,w){var b=y.type;return b===yr?u(h,p,y.props.children,w,y.key):p!==null&&(p.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===pn&&Td(b)===p.type)?(w=o(p,y.props),w.ref=io(h,p,y),w.return=h,w):(w=Bi(y.type,y.key,y.props,null,h.mode,w),w.ref=io(h,p,y),w.return=h,w)}function l(h,p,y,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=qs(y,h.mode,w),p.return=h,p):(p=o(p,y.children||[]),p.return=h,p)}function u(h,p,y,w,b){return p===null||p.tag!==7?(p=Gn(y,h.mode,w,b),p.return=h,p):(p=o(p,y),p.return=h,p)}function d(h,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Xs(""+p,h.mode,y),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ci:return y=Bi(p.type,p.key,p.props,null,h.mode,y),y.ref=io(h,null,p),y.return=h,y;case vr:return p=qs(p,h.mode,y),p.return=h,p;case pn:var w=p._init;return d(h,w(p._payload),y)}if(po(p)||eo(p))return p=Gn(p,h.mode,y,null),p.return=h,p;wi(h,p)}return null}function f(h,p,y,w){var b=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return b!==null?null:s(h,p,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ci:return y.key===b?c(h,p,y,w):null;case vr:return y.key===b?l(h,p,y,w):null;case pn:return b=y._init,f(h,p,b(y._payload),w)}if(po(y)||eo(y))return b!==null?null:u(h,p,y,w,null);wi(h,y)}return null}function m(h,p,y,w,b){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(y)||null,s(p,h,""+w,b);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ci:return h=h.get(w.key===null?y:w.key)||null,c(p,h,w,b);case vr:return h=h.get(w.key===null?y:w.key)||null,l(p,h,w,b);case pn:var _=w._init;return m(h,p,y,_(w._payload),b)}if(po(w)||eo(w))return h=h.get(y)||null,u(p,h,w,b,null);wi(p,w)}return null}function g(h,p,y,w){for(var b=null,_=null,E=p,$=p=0,L=null;E!==null&&$<y.length;$++){E.index>$?(L=E,E=null):L=E.sibling;var P=f(h,E,y[$],w);if(P===null){E===null&&(E=L);break}e&&E&&P.alternate===null&&t(h,E),p=i(P,p,$),_===null?b=P:_.sibling=P,_=P,E=L}if($===y.length)return n(h,E),xe&&Mn(h,$),b;if(E===null){for(;$<y.length;$++)E=d(h,y[$],w),E!==null&&(p=i(E,p,$),_===null?b=E:_.sibling=E,_=E);return xe&&Mn(h,$),b}for(E=r(h,E);$<y.length;$++)L=m(E,h,$,y[$],w),L!==null&&(e&&L.alternate!==null&&E.delete(L.key===null?$:L.key),p=i(L,p,$),_===null?b=L:_.sibling=L,_=L);return e&&E.forEach(function(A){return t(h,A)}),xe&&Mn(h,$),b}function v(h,p,y,w){var b=eo(y);if(typeof b!="function")throw Error(M(150));if(y=b.call(y),y==null)throw Error(M(151));for(var _=b=null,E=p,$=p=0,L=null,P=y.next();E!==null&&!P.done;$++,P=y.next()){E.index>$?(L=E,E=null):L=E.sibling;var A=f(h,E,P.value,w);if(A===null){E===null&&(E=L);break}e&&E&&A.alternate===null&&t(h,E),p=i(A,p,$),_===null?b=A:_.sibling=A,_=A,E=L}if(P.done)return n(h,E),xe&&Mn(h,$),b;if(E===null){for(;!P.done;$++,P=y.next())P=d(h,P.value,w),P!==null&&(p=i(P,p,$),_===null?b=P:_.sibling=P,_=P);return xe&&Mn(h,$),b}for(E=r(h,E);!P.done;$++,P=y.next())P=m(E,h,$,P.value,w),P!==null&&(e&&P.alternate!==null&&E.delete(P.key===null?$:P.key),p=i(P,p,$),_===null?b=P:_.sibling=P,_=P);return e&&E.forEach(function(D){return t(h,D)}),xe&&Mn(h,$),b}function k(h,p,y,w){if(typeof y=="object"&&y!==null&&y.type===yr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ci:e:{for(var b=y.key,_=p;_!==null;){if(_.key===b){if(b=y.type,b===yr){if(_.tag===7){n(h,_.sibling),p=o(_,y.props.children),p.return=h,h=p;break e}}else if(_.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===pn&&Td(b)===_.type){n(h,_.sibling),p=o(_,y.props),p.ref=io(h,_,y),p.return=h,h=p;break e}n(h,_);break}else t(h,_);_=_.sibling}y.type===yr?(p=Gn(y.props.children,h.mode,w,y.key),p.return=h,h=p):(w=Bi(y.type,y.key,y.props,null,h.mode,w),w.ref=io(h,p,y),w.return=h,h=w)}return a(h);case vr:e:{for(_=y.key;p!==null;){if(p.key===_)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(h,p.sibling),p=o(p,y.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=qs(y,h.mode,w),p.return=h,h=p}return a(h);case pn:return _=y._init,k(h,p,_(y._payload),w)}if(po(y))return g(h,p,y,w);if(eo(y))return v(h,p,y,w);wi(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(h,p.sibling),p=o(p,y),p.return=h,h=p):(n(h,p),p=Xs(y,h.mode,w),p.return=h,h=p),a(h)):n(h,p)}return k}var Br=gm(!0),vm=gm(!1),ni={},Wt=Rn(ni),Fo=Rn(ni),Bo=Rn(ni);function Vn(e){if(e===ni)throw Error(M(174));return e}function Kc(e,t){switch(pe(Bo,t),pe(Fo,e),pe(Wt,ni),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:vl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=vl(t,e)}ve(Wt),pe(Wt,t)}function Ur(){ve(Wt),ve(Fo),ve(Bo)}function ym(e){Vn(Bo.current);var t=Vn(Wt.current),n=vl(t,e.type);t!==n&&(pe(Fo,e),pe(Wt,n))}function Qc(e){Fo.current===e&&(ve(Wt),ve(Fo))}var we=Rn(0);function ua(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hs=[];function Yc(){for(var e=0;e<Hs.length;e++)Hs[e]._workInProgressVersionPrimary=null;Hs.length=0}var Ni=cn.ReactCurrentDispatcher,Ws=cn.ReactCurrentBatchConfig,Yn=0,ke=null,Ie=null,Me=null,da=!1,bo=!1,Uo=0,k1=0;function He(){throw Error(M(321))}function Xc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Nt(e[n],t[n]))return!1;return!0}function qc(e,t,n,r,o,i){if(Yn=i,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ni.current=e===null||e.memoizedState===null?E1:_1,e=n(r,o),bo){i=0;do{if(bo=!1,Uo=0,25<=i)throw Error(M(301));i+=1,Me=Ie=null,t.updateQueue=null,Ni.current=j1,e=n(r,o)}while(bo)}if(Ni.current=fa,t=Ie!==null&&Ie.next!==null,Yn=0,Me=Ie=ke=null,da=!1,t)throw Error(M(300));return e}function Jc(){var e=Uo!==0;return Uo=0,e}function Ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?ke.memoizedState=Me=e:Me=Me.next=e,Me}function St(){if(Ie===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var t=Me===null?ke.memoizedState:Me.next;if(t!==null)Me=t,Ie=e;else{if(e===null)throw Error(M(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},Me===null?ke.memoizedState=Me=e:Me=Me.next=e}return Me}function Vo(e,t){return typeof t=="function"?t(e):t}function Gs(e){var t=St(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=Ie,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=a=null,c=null,l=i;do{var u=l.lane;if((Yn&u)===u)c!==null&&(c=c.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),r=l.hasEagerState?l.eagerState:e(r,l.action);else{var d={lane:u,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};c===null?(s=c=d,a=r):c=c.next=d,ke.lanes|=u,Xn|=u}l=l.next}while(l!==null&&l!==i);c===null?a=r:c.next=s,Nt(r,t.memoizedState)||(tt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ke.lanes|=i,Xn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ks(e){var t=St(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Nt(i,t.memoizedState)||(tt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function xm(){}function wm(e,t){var n=ke,r=St(),o=t(),i=!Nt(r.memoizedState,o);if(i&&(r.memoizedState=o,tt=!0),r=r.queue,Zc(Sm.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,Ho(9,bm.bind(null,n,r,o,t),void 0,null),Le===null)throw Error(M(349));Yn&30||km(n,t,o)}return o}function km(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function bm(e,t,n,r){t.value=n,t.getSnapshot=r,Cm(t)&&Em(e)}function Sm(e,t,n){return n(function(){Cm(t)&&Em(e)})}function Cm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Nt(e,n)}catch{return!0}}function Em(e){var t=on(e,1);t!==null&&Rt(t,e,1,-1)}function Pd(e){var t=Ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:e},t.queue=e,e=e.dispatch=C1.bind(null,ke,e),[t.memoizedState,e]}function Ho(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function _m(){return St().memoizedState}function Mi(e,t,n,r){var o=Ft();ke.flags|=e,o.memoizedState=Ho(1|t,n,void 0,r===void 0?null:r)}function Ma(e,t,n,r){var o=St();r=r===void 0?null:r;var i=void 0;if(Ie!==null){var a=Ie.memoizedState;if(i=a.destroy,r!==null&&Xc(r,a.deps)){o.memoizedState=Ho(t,n,i,r);return}}ke.flags|=e,o.memoizedState=Ho(1|t,n,i,r)}function $d(e,t){return Mi(8390656,8,e,t)}function Zc(e,t){return Ma(2048,8,e,t)}function jm(e,t){return Ma(4,2,e,t)}function Tm(e,t){return Ma(4,4,e,t)}function Pm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $m(e,t,n){return n=n!=null?n.concat([e]):null,Ma(4,4,Pm.bind(null,t,e),n)}function eu(){}function Om(e,t){var n=St();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Rm(e,t){var n=St();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Am(e,t,n){return Yn&21?(Nt(n,t)||(n=Np(),ke.lanes|=n,Xn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,tt=!0),e.memoizedState=n)}function b1(e,t){var n=ue;ue=n!==0&&4>n?n:4,e(!0);var r=Ws.transition;Ws.transition={};try{e(!1),t()}finally{ue=n,Ws.transition=r}}function zm(){return St().memoizedState}function S1(e,t,n){var r=En(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Im(e))Nm(t,n);else if(n=fm(e,t,n,r),n!==null){var o=qe();Rt(n,e,r,o),Mm(n,t,r)}}function C1(e,t,n){var r=En(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Im(e))Nm(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,Nt(s,a)){var c=t.interleaved;c===null?(o.next=o,Wc(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=fm(e,t,o,r),n!==null&&(o=qe(),Rt(n,e,r,o),Mm(n,t,r))}}function Im(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function Nm(e,t){bo=da=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Mm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Oc(e,n)}}var fa={readContext:bt,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},E1={readContext:bt,useCallback:function(e,t){return Ft().memoizedState=[e,t===void 0?null:t],e},useContext:bt,useEffect:$d,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Mi(4194308,4,Pm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Mi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Mi(4,2,e,t)},useMemo:function(e,t){var n=Ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=S1.bind(null,ke,e),[r.memoizedState,e]},useRef:function(e){var t=Ft();return e={current:e},t.memoizedState=e},useState:Pd,useDebugValue:eu,useDeferredValue:function(e){return Ft().memoizedState=e},useTransition:function(){var e=Pd(!1),t=e[0];return e=b1.bind(null,e[1]),Ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ke,o=Ft();if(xe){if(n===void 0)throw Error(M(407));n=n()}else{if(n=t(),Le===null)throw Error(M(349));Yn&30||km(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,$d(Sm.bind(null,r,i,e),[e]),r.flags|=2048,Ho(9,bm.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ft(),t=Le.identifierPrefix;if(xe){var n=en,r=Zt;n=(r&~(1<<32-Ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Uo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=k1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},_1={readContext:bt,useCallback:Om,useContext:bt,useEffect:Zc,useImperativeHandle:$m,useInsertionEffect:jm,useLayoutEffect:Tm,useMemo:Rm,useReducer:Gs,useRef:_m,useState:function(){return Gs(Vo)},useDebugValue:eu,useDeferredValue:function(e){var t=St();return Am(t,Ie.memoizedState,e)},useTransition:function(){var e=Gs(Vo)[0],t=St().memoizedState;return[e,t]},useMutableSource:xm,useSyncExternalStore:wm,useId:zm,unstable_isNewReconciler:!1},j1={readContext:bt,useCallback:Om,useContext:bt,useEffect:Zc,useImperativeHandle:$m,useInsertionEffect:jm,useLayoutEffect:Tm,useMemo:Rm,useReducer:Ks,useRef:_m,useState:function(){return Ks(Vo)},useDebugValue:eu,useDeferredValue:function(e){var t=St();return Ie===null?t.memoizedState=e:Am(t,Ie.memoizedState,e)},useTransition:function(){var e=Ks(Vo)[0],t=St().memoizedState;return[e,t]},useMutableSource:xm,useSyncExternalStore:wm,useId:zm,unstable_isNewReconciler:!1};function Vr(e,t){try{var n="",r=t;do n+=tg(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Qs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Fl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var T1=typeof WeakMap=="function"?WeakMap:Map;function Lm(e,t,n){n=tn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ma||(ma=!0,Xl=r),Fl(e,t)},n}function Dm(e,t,n){n=tn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Fl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Fl(e,t),typeof r!="function"&&(Cn===null?Cn=new Set([this]):Cn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Od(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new T1;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=U1.bind(null,e,t,n),t.then(e,e))}function Rd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ad(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=tn(-1,1),t.tag=2,Sn(n,t,1))),n.lanes|=1),e)}var P1=cn.ReactCurrentOwner,tt=!1;function Xe(e,t,n,r){t.child=e===null?vm(t,null,n,r):Br(t,e.child,n,r)}function zd(e,t,n,r,o){n=n.render;var i=t.ref;return zr(t,o),r=qc(e,t,n,r,i,o),n=Jc(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,an(e,t,o)):(xe&&n&&Dc(t),t.flags|=1,Xe(e,t,r,o),t.child)}function Id(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!lu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Fm(e,t,i,r,o)):(e=Bi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:No,n(a,r)&&e.ref===t.ref)return an(e,t,o)}return t.flags|=1,e=_n(i,r),e.ref=t.ref,e.return=t,t.child=e}function Fm(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(No(i,r)&&e.ref===t.ref)if(tt=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(tt=!0);else return t.lanes=e.lanes,an(e,t,o)}return Bl(e,t,n,r,o)}function Bm(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(Tr,at),at|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,pe(Tr,at),at|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,pe(Tr,at),at|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,pe(Tr,at),at|=r;return Xe(e,t,o,n),t.child}function Um(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Bl(e,t,n,r,o){var i=rt(n)?Kn:Qe.current;return i=Dr(t,i),zr(t,o),n=qc(e,t,n,r,i,o),r=Jc(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,an(e,t,o)):(xe&&r&&Dc(t),t.flags|=1,Xe(e,t,n,o),t.child)}function Nd(e,t,n,r,o){if(rt(n)){var i=!0;oa(t)}else i=!1;if(zr(t,o),t.stateNode===null)Li(e,t),hm(t,n,r),Dl(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var c=a.context,l=n.contextType;typeof l=="object"&&l!==null?l=bt(l):(l=rt(n)?Kn:Qe.current,l=Dr(t,l));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||c!==l)&&jd(t,a,r,l),mn=!1;var f=t.memoizedState;a.state=f,ca(t,r,a,o),c=t.memoizedState,s!==r||f!==c||nt.current||mn?(typeof u=="function"&&(Ll(t,n,u,r),c=t.memoizedState),(s=mn||_d(t,n,s,r,f,c,l))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=l,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,pm(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:jt(t.type,s),a.props=l,d=t.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=bt(c):(c=rt(n)?Kn:Qe.current,c=Dr(t,c));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==d||f!==c)&&jd(t,a,r,c),mn=!1,f=t.memoizedState,a.state=f,ca(t,r,a,o);var g=t.memoizedState;s!==d||f!==g||nt.current||mn?(typeof m=="function"&&(Ll(t,n,m,r),g=t.memoizedState),(l=mn||_d(t,n,l,r,f,g,c)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=c,r=l):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Ul(e,t,n,r,i,o)}function Ul(e,t,n,r,o,i){Um(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&kd(t,n,!1),an(e,t,i);r=t.stateNode,P1.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Br(t,e.child,null,i),t.child=Br(t,null,s,i)):Xe(e,t,s,i),t.memoizedState=r.state,o&&kd(t,n,!0),t.child}function Vm(e){var t=e.stateNode;t.pendingContext?wd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&wd(e,t.context,!1),Kc(e,t.containerInfo)}function Md(e,t,n,r,o){return Fr(),Bc(o),t.flags|=256,Xe(e,t,n,r),t.child}var Vl={dehydrated:null,treeContext:null,retryLane:0};function Hl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Hm(e,t,n){var r=t.pendingProps,o=we.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),pe(we,o&1),e===null)return Nl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Fa(a,r,0,null),e=Gn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Hl(n),t.memoizedState=Vl,e):tu(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return $1(e,t,a,r,s,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,s=o.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=_n(o,c),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=_n(s,i):(i=Gn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Hl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Vl,r}return i=e.child,e=i.sibling,r=_n(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function tu(e,t){return t=Fa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ki(e,t,n,r){return r!==null&&Bc(r),Br(t,e.child,null,n),e=tu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $1(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Qs(Error(M(422))),ki(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Fa({mode:"visible",children:r.children},o,0,null),i=Gn(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Br(t,e.child,null,a),t.child.memoizedState=Hl(a),t.memoizedState=Vl,i);if(!(t.mode&1))return ki(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(M(419)),r=Qs(i,r,void 0),ki(e,t,a,r)}if(s=(a&e.childLanes)!==0,tt||s){if(r=Le,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,on(e,o),Rt(r,e,o,-1))}return su(),r=Qs(Error(M(421))),ki(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=V1.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,lt=bn(o.nextSibling),ct=t,xe=!0,Pt=null,e!==null&&(gt[vt++]=Zt,gt[vt++]=en,gt[vt++]=Qn,Zt=e.id,en=e.overflow,Qn=t),t=tu(t,r.children),t.flags|=4096,t)}function Ld(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ml(e.return,t,n)}function Ys(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Wm(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Xe(e,t,r.children,n),r=we.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ld(e,n,t);else if(e.tag===19)Ld(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(pe(we,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ua(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ys(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ua(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ys(t,!0,n,null,i);break;case"together":Ys(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Li(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function an(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=_n(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_n(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function O1(e,t,n){switch(t.tag){case 3:Vm(t),Fr();break;case 5:ym(t);break;case 1:rt(t.type)&&oa(t);break;case 4:Kc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;pe(sa,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(pe(we,we.current&1),t.flags|=128,null):n&t.child.childLanes?Hm(e,t,n):(pe(we,we.current&1),e=an(e,t,n),e!==null?e.sibling:null);pe(we,we.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Wm(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),pe(we,we.current),r)break;return null;case 22:case 23:return t.lanes=0,Bm(e,t,n)}return an(e,t,n)}var Gm,Wl,Km,Qm;Gm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wl=function(){};Km=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Vn(Wt.current);var i=null;switch(n){case"input":o=pl(e,o),r=pl(e,r),i=[];break;case"select":o=be({},o,{value:void 0}),r=be({},r,{value:void 0}),i=[];break;case"textarea":o=gl(e,o),r=gl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=na)}yl(n,r);var a;n=null;for(l in o)if(!r.hasOwnProperty(l)&&o.hasOwnProperty(l)&&o[l]!=null)if(l==="style"){var s=o[l];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Po.hasOwnProperty(l)?i||(i=[]):(i=i||[]).push(l,null));for(l in r){var c=r[l];if(s=o!=null?o[l]:void 0,r.hasOwnProperty(l)&&c!==s&&(c!=null||s!=null))if(l==="style")if(s){for(a in s)!s.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&s[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(i||(i=[]),i.push(l,n)),n=c;else l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(i=i||[]).push(l,c)):l==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(l,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(Po.hasOwnProperty(l)?(c!=null&&l==="onScroll"&&ge("scroll",e),i||s===c||(i=[])):(i=i||[]).push(l,c))}n&&(i=i||[]).push("style",n);var l=i;(t.updateQueue=l)&&(t.flags|=4)}};Qm=function(e,t,n,r){n!==r&&(t.flags|=4)};function ao(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function We(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function R1(e,t,n){var r=t.pendingProps;switch(Fc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(t),null;case 1:return rt(t.type)&&ra(),We(t),null;case 3:return r=t.stateNode,Ur(),ve(nt),ve(Qe),Yc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pt!==null&&(Zl(Pt),Pt=null))),Wl(e,t),We(t),null;case 5:Qc(t);var o=Vn(Bo.current);if(n=t.type,e!==null&&t.stateNode!=null)Km(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(M(166));return We(t),null}if(e=Vn(Wt.current),xi(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Vt]=t,r[Do]=i,e=(t.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(o=0;o<ho.length;o++)ge(ho[o],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":Ku(r,i),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ge("invalid",r);break;case"textarea":Yu(r,i),ge("invalid",r)}yl(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&yi(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&yi(r.textContent,s,e),o=["children",""+s]):Po.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ge("scroll",r)}switch(n){case"input":ui(r),Qu(r,i,!0);break;case"textarea":ui(r),Xu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=na)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=kp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Vt]=t,e[Do]=r,Gm(e,t,!1,!1),t.stateNode=e;e:{switch(a=xl(n,r),n){case"dialog":ge("cancel",e),ge("close",e),o=r;break;case"iframe":case"object":case"embed":ge("load",e),o=r;break;case"video":case"audio":for(o=0;o<ho.length;o++)ge(ho[o],e);o=r;break;case"source":ge("error",e),o=r;break;case"img":case"image":case"link":ge("error",e),ge("load",e),o=r;break;case"details":ge("toggle",e),o=r;break;case"input":Ku(e,r),o=pl(e,r),ge("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=be({},r,{value:void 0}),ge("invalid",e);break;case"textarea":Yu(e,r),o=gl(e,r),ge("invalid",e);break;default:o=r}yl(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var c=s[i];i==="style"?Cp(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&bp(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&$o(e,c):typeof c=="number"&&$o(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Po.hasOwnProperty(i)?c!=null&&i==="onScroll"&&ge("scroll",e):c!=null&&Ec(e,i,c,a))}switch(n){case"input":ui(e),Qu(e,r,!1);break;case"textarea":ui(e),Xu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Pn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?$r(e,!!r.multiple,i,!1):r.defaultValue!=null&&$r(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=na)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return We(t),null;case 6:if(e&&t.stateNode!=null)Qm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(M(166));if(n=Vn(Bo.current),Vn(Wt.current),xi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Vt]=t,(i=r.nodeValue!==n)&&(e=ct,e!==null))switch(e.tag){case 3:yi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&yi(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Vt]=t,t.stateNode=r}return We(t),null;case 13:if(ve(we),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(xe&&lt!==null&&t.mode&1&&!(t.flags&128))dm(),Fr(),t.flags|=98560,i=!1;else if(i=xi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(M(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(M(317));i[Vt]=t}else Fr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;We(t),i=!1}else Pt!==null&&(Zl(Pt),Pt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||we.current&1?Ne===0&&(Ne=3):su())),t.updateQueue!==null&&(t.flags|=4),We(t),null);case 4:return Ur(),Wl(e,t),e===null&&Mo(t.stateNode.containerInfo),We(t),null;case 10:return Hc(t.type._context),We(t),null;case 17:return rt(t.type)&&ra(),We(t),null;case 19:if(ve(we),i=t.memoizedState,i===null)return We(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)ao(i,!1);else{if(Ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ua(e),a!==null){for(t.flags|=128,ao(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return pe(we,we.current&1|2),t.child}e=e.sibling}i.tail!==null&&Te()>Hr&&(t.flags|=128,r=!0,ao(i,!1),t.lanes=4194304)}else{if(!r)if(e=ua(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ao(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!xe)return We(t),null}else 2*Te()-i.renderingStartTime>Hr&&n!==1073741824&&(t.flags|=128,r=!0,ao(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Te(),t.sibling=null,n=we.current,pe(we,r?n&1|2:n&1),t):(We(t),null);case 22:case 23:return au(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?at&1073741824&&(We(t),t.subtreeFlags&6&&(t.flags|=8192)):We(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function A1(e,t){switch(Fc(t),t.tag){case 1:return rt(t.type)&&ra(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ur(),ve(nt),ve(Qe),Yc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Qc(t),null;case 13:if(ve(we),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));Fr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ve(we),null;case 4:return Ur(),null;case 10:return Hc(t.type._context),null;case 22:case 23:return au(),null;case 24:return null;default:return null}}var bi=!1,Ke=!1,z1=typeof WeakSet=="function"?WeakSet:Set,K=null;function jr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){_e(e,t,r)}else n.current=null}function Gl(e,t,n){try{n()}catch(r){_e(e,t,r)}}var Dd=!1;function I1(e,t){if(Pl=Zi,e=Jp(),Lc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,c=-1,l=0,u=0,d=e,f=null;t:for(;;){for(var m;d!==n||o!==0&&d.nodeType!==3||(s=a+o),d!==i||r!==0&&d.nodeType!==3||(c=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===e)break t;if(f===n&&++l===o&&(s=a),f===i&&++u===r&&(c=a),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for($l={focusedElem:e,selectionRange:n},Zi=!1,K=t;K!==null;)if(t=K,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,K=e;else for(;K!==null;){t=K;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,k=g.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?v:jt(t.type,v),k);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(w){_e(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,K=e;break}K=t.return}return g=Dd,Dd=!1,g}function So(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Gl(t,n,i)}o=o.next}while(o!==r)}}function La(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Kl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ym(e){var t=e.alternate;t!==null&&(e.alternate=null,Ym(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Vt],delete t[Do],delete t[Al],delete t[v1],delete t[y1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xm(e){return e.tag===5||e.tag===3||e.tag===4}function Fd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ql(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=na));else if(r!==4&&(e=e.child,e!==null))for(Ql(e,t,n),e=e.sibling;e!==null;)Ql(e,t,n),e=e.sibling}function Yl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Yl(e,t,n),e=e.sibling;e!==null;)Yl(e,t,n),e=e.sibling}var Fe=null,Tt=!1;function fn(e,t,n){for(n=n.child;n!==null;)qm(e,t,n),n=n.sibling}function qm(e,t,n){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount($a,n)}catch{}switch(n.tag){case 5:Ke||jr(n,t);case 6:var r=Fe,o=Tt;Fe=null,fn(e,t,n),Fe=r,Tt=o,Fe!==null&&(Tt?(e=Fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Fe.removeChild(n.stateNode));break;case 18:Fe!==null&&(Tt?(e=Fe,n=n.stateNode,e.nodeType===8?Us(e.parentNode,n):e.nodeType===1&&Us(e,n),zo(e)):Us(Fe,n.stateNode));break;case 4:r=Fe,o=Tt,Fe=n.stateNode.containerInfo,Tt=!0,fn(e,t,n),Fe=r,Tt=o;break;case 0:case 11:case 14:case 15:if(!Ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Gl(n,t,a),o=o.next}while(o!==r)}fn(e,t,n);break;case 1:if(!Ke&&(jr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){_e(n,t,s)}fn(e,t,n);break;case 21:fn(e,t,n);break;case 22:n.mode&1?(Ke=(r=Ke)||n.memoizedState!==null,fn(e,t,n),Ke=r):fn(e,t,n);break;default:fn(e,t,n)}}function Bd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new z1),t.forEach(function(r){var o=H1.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function _t(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Fe=s.stateNode,Tt=!1;break e;case 3:Fe=s.stateNode.containerInfo,Tt=!0;break e;case 4:Fe=s.stateNode.containerInfo,Tt=!0;break e}s=s.return}if(Fe===null)throw Error(M(160));qm(i,a,o),Fe=null,Tt=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(l){_e(o,t,l)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Jm(t,e),t=t.sibling}function Jm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_t(t,e),Dt(e),r&4){try{So(3,e,e.return),La(3,e)}catch(v){_e(e,e.return,v)}try{So(5,e,e.return)}catch(v){_e(e,e.return,v)}}break;case 1:_t(t,e),Dt(e),r&512&&n!==null&&jr(n,n.return);break;case 5:if(_t(t,e),Dt(e),r&512&&n!==null&&jr(n,n.return),e.flags&32){var o=e.stateNode;try{$o(o,"")}catch(v){_e(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&xp(o,i),xl(s,a);var l=xl(s,i);for(a=0;a<c.length;a+=2){var u=c[a],d=c[a+1];u==="style"?Cp(o,d):u==="dangerouslySetInnerHTML"?bp(o,d):u==="children"?$o(o,d):Ec(o,u,d,l)}switch(s){case"input":ml(o,i);break;case"textarea":wp(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var m=i.value;m!=null?$r(o,!!i.multiple,m,!1):f!==!!i.multiple&&(i.defaultValue!=null?$r(o,!!i.multiple,i.defaultValue,!0):$r(o,!!i.multiple,i.multiple?[]:"",!1))}o[Do]=i}catch(v){_e(e,e.return,v)}}break;case 6:if(_t(t,e),Dt(e),r&4){if(e.stateNode===null)throw Error(M(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(v){_e(e,e.return,v)}}break;case 3:if(_t(t,e),Dt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zo(t.containerInfo)}catch(v){_e(e,e.return,v)}break;case 4:_t(t,e),Dt(e);break;case 13:_t(t,e),Dt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(ou=Te())),r&4&&Bd(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(Ke=(l=Ke)||u,_t(t,e),Ke=l):_t(t,e),Dt(e),r&8192){if(l=e.memoizedState!==null,(e.stateNode.isHidden=l)&&!u&&e.mode&1)for(K=e,u=e.child;u!==null;){for(d=K=u;K!==null;){switch(f=K,m=f.child,f.tag){case 0:case 11:case 14:case 15:So(4,f,f.return);break;case 1:jr(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(v){_e(r,n,v)}}break;case 5:jr(f,f.return);break;case 22:if(f.memoizedState!==null){Vd(d);continue}}m!==null?(m.return=f,K=m):Vd(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{o=d.stateNode,l?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=d.stateNode,c=d.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=Sp("display",a))}catch(v){_e(e,e.return,v)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=l?"":d.memoizedProps}catch(v){_e(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:_t(t,e),Dt(e),r&4&&Bd(e);break;case 21:break;default:_t(t,e),Dt(e)}}function Dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Xm(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&($o(o,""),r.flags&=-33);var i=Fd(e);Yl(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Fd(e);Ql(e,s,a);break;default:throw Error(M(161))}}catch(c){_e(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function N1(e,t,n){K=e,Zm(e)}function Zm(e,t,n){for(var r=(e.mode&1)!==0;K!==null;){var o=K,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||bi;if(!a){var s=o.alternate,c=s!==null&&s.memoizedState!==null||Ke;s=bi;var l=Ke;if(bi=a,(Ke=c)&&!l)for(K=o;K!==null;)a=K,c=a.child,a.tag===22&&a.memoizedState!==null?Hd(o):c!==null?(c.return=a,K=c):Hd(o);for(;i!==null;)K=i,Zm(i),i=i.sibling;K=o,bi=s,Ke=l}Ud(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,K=i):Ud(e)}}function Ud(e){for(;K!==null;){var t=K;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ke||La(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ke)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:jt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ed(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ed(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var l=t.alternate;if(l!==null){var u=l.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&zo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Ke||t.flags&512&&Kl(t)}catch(f){_e(t,t.return,f)}}if(t===e){K=null;break}if(n=t.sibling,n!==null){n.return=t.return,K=n;break}K=t.return}}function Vd(e){for(;K!==null;){var t=K;if(t===e){K=null;break}var n=t.sibling;if(n!==null){n.return=t.return,K=n;break}K=t.return}}function Hd(e){for(;K!==null;){var t=K;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{La(4,t)}catch(c){_e(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){_e(t,o,c)}}var i=t.return;try{Kl(t)}catch(c){_e(t,i,c)}break;case 5:var a=t.return;try{Kl(t)}catch(c){_e(t,a,c)}}}catch(c){_e(t,t.return,c)}if(t===e){K=null;break}var s=t.sibling;if(s!==null){s.return=t.return,K=s;break}K=t.return}}var M1=Math.ceil,pa=cn.ReactCurrentDispatcher,nu=cn.ReactCurrentOwner,wt=cn.ReactCurrentBatchConfig,ie=0,Le=null,Ae=null,Ue=0,at=0,Tr=Rn(0),Ne=0,Wo=null,Xn=0,Da=0,ru=0,Co=null,et=null,ou=0,Hr=1/0,Xt=null,ma=!1,Xl=null,Cn=null,Si=!1,yn=null,ha=0,Eo=0,ql=null,Di=-1,Fi=0;function qe(){return ie&6?Te():Di!==-1?Di:Di=Te()}function En(e){return e.mode&1?ie&2&&Ue!==0?Ue&-Ue:w1.transition!==null?(Fi===0&&(Fi=Np()),Fi):(e=ue,e!==0||(e=window.event,e=e===void 0?16:Vp(e.type)),e):1}function Rt(e,t,n,r){if(50<Eo)throw Eo=0,ql=null,Error(M(185));Zo(e,n,r),(!(ie&2)||e!==Le)&&(e===Le&&(!(ie&2)&&(Da|=n),Ne===4&&gn(e,Ue)),ot(e,r),n===1&&ie===0&&!(t.mode&1)&&(Hr=Te()+500,Ia&&An()))}function ot(e,t){var n=e.callbackNode;wg(e,t);var r=Ji(e,e===Le?Ue:0);if(r===0)n!==null&&Zu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Zu(n),t===1)e.tag===0?x1(Wd.bind(null,e)):lm(Wd.bind(null,e)),h1(function(){!(ie&6)&&An()}),n=null;else{switch(Mp(r)){case 1:n=$c;break;case 4:n=zp;break;case 16:n=qi;break;case 536870912:n=Ip;break;default:n=qi}n=sh(n,eh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function eh(e,t){if(Di=-1,Fi=0,ie&6)throw Error(M(327));var n=e.callbackNode;if(Ir()&&e.callbackNode!==n)return null;var r=Ji(e,e===Le?Ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ga(e,r);else{t=r;var o=ie;ie|=2;var i=nh();(Le!==e||Ue!==t)&&(Xt=null,Hr=Te()+500,Wn(e,t));do try{F1();break}catch(s){th(e,s)}while(!0);Vc(),pa.current=i,ie=o,Ae!==null?t=0:(Le=null,Ue=0,t=Ne)}if(t!==0){if(t===2&&(o=Cl(e),o!==0&&(r=o,t=Jl(e,o))),t===1)throw n=Wo,Wn(e,0),gn(e,r),ot(e,Te()),n;if(t===6)gn(e,r);else{if(o=e.current.alternate,!(r&30)&&!L1(o)&&(t=ga(e,r),t===2&&(i=Cl(e),i!==0&&(r=i,t=Jl(e,i))),t===1))throw n=Wo,Wn(e,0),gn(e,r),ot(e,Te()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(M(345));case 2:Ln(e,et,Xt);break;case 3:if(gn(e,r),(r&130023424)===r&&(t=ou+500-Te(),10<t)){if(Ji(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){qe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Rl(Ln.bind(null,e,et,Xt),t);break}Ln(e,et,Xt);break;case 4:if(gn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-Ot(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*M1(r/1960))-r,10<r){e.timeoutHandle=Rl(Ln.bind(null,e,et,Xt),r);break}Ln(e,et,Xt);break;case 5:Ln(e,et,Xt);break;default:throw Error(M(329))}}}return ot(e,Te()),e.callbackNode===n?eh.bind(null,e):null}function Jl(e,t){var n=Co;return e.current.memoizedState.isDehydrated&&(Wn(e,t).flags|=256),e=ga(e,t),e!==2&&(t=et,et=n,t!==null&&Zl(t)),e}function Zl(e){et===null?et=e:et.push.apply(et,e)}function L1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Nt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gn(e,t){for(t&=~ru,t&=~Da,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ot(t),r=1<<n;e[n]=-1,t&=~r}}function Wd(e){if(ie&6)throw Error(M(327));Ir();var t=Ji(e,0);if(!(t&1))return ot(e,Te()),null;var n=ga(e,t);if(e.tag!==0&&n===2){var r=Cl(e);r!==0&&(t=r,n=Jl(e,r))}if(n===1)throw n=Wo,Wn(e,0),gn(e,t),ot(e,Te()),n;if(n===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ln(e,et,Xt),ot(e,Te()),null}function iu(e,t){var n=ie;ie|=1;try{return e(t)}finally{ie=n,ie===0&&(Hr=Te()+500,Ia&&An())}}function qn(e){yn!==null&&yn.tag===0&&!(ie&6)&&Ir();var t=ie;ie|=1;var n=wt.transition,r=ue;try{if(wt.transition=null,ue=1,e)return e()}finally{ue=r,wt.transition=n,ie=t,!(ie&6)&&An()}}function au(){at=Tr.current,ve(Tr)}function Wn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,m1(n)),Ae!==null)for(n=Ae.return;n!==null;){var r=n;switch(Fc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ra();break;case 3:Ur(),ve(nt),ve(Qe),Yc();break;case 5:Qc(r);break;case 4:Ur();break;case 13:ve(we);break;case 19:ve(we);break;case 10:Hc(r.type._context);break;case 22:case 23:au()}n=n.return}if(Le=e,Ae=e=_n(e.current,null),Ue=at=t,Ne=0,Wo=null,ru=Da=Xn=0,et=Co=null,Un!==null){for(t=0;t<Un.length;t++)if(n=Un[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}Un=null}return e}function th(e,t){do{var n=Ae;try{if(Vc(),Ni.current=fa,da){for(var r=ke.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}da=!1}if(Yn=0,Me=Ie=ke=null,bo=!1,Uo=0,nu.current=null,n===null||n.return===null){Ne=1,Wo=t,Ae=null;break}e:{var i=e,a=n.return,s=n,c=t;if(t=Ue,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var l=c,u=s,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=Rd(a);if(m!==null){m.flags&=-257,Ad(m,a,s,i,t),m.mode&1&&Od(i,l,t),t=m,c=l;var g=t.updateQueue;if(g===null){var v=new Set;v.add(c),t.updateQueue=v}else g.add(c);break e}else{if(!(t&1)){Od(i,l,t),su();break e}c=Error(M(426))}}else if(xe&&s.mode&1){var k=Rd(a);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Ad(k,a,s,i,t),Bc(Vr(c,s));break e}}i=c=Vr(c,s),Ne!==4&&(Ne=2),Co===null?Co=[i]:Co.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=Lm(i,c,t);Cd(i,h);break e;case 1:s=c;var p=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Cn===null||!Cn.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Dm(i,s,t);Cd(i,w);break e}}i=i.return}while(i!==null)}oh(n)}catch(b){t=b,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(!0)}function nh(){var e=pa.current;return pa.current=fa,e===null?fa:e}function su(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),Le===null||!(Xn&268435455)&&!(Da&268435455)||gn(Le,Ue)}function ga(e,t){var n=ie;ie|=2;var r=nh();(Le!==e||Ue!==t)&&(Xt=null,Wn(e,t));do try{D1();break}catch(o){th(e,o)}while(!0);if(Vc(),ie=n,pa.current=r,Ae!==null)throw Error(M(261));return Le=null,Ue=0,Ne}function D1(){for(;Ae!==null;)rh(Ae)}function F1(){for(;Ae!==null&&!dg();)rh(Ae)}function rh(e){var t=ah(e.alternate,e,at);e.memoizedProps=e.pendingProps,t===null?oh(e):Ae=t,nu.current=null}function oh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=A1(n,t),n!==null){n.flags&=32767,Ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ne=6,Ae=null;return}}else if(n=R1(n,t,at),n!==null){Ae=n;return}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);Ne===0&&(Ne=5)}function Ln(e,t,n){var r=ue,o=wt.transition;try{wt.transition=null,ue=1,B1(e,t,n,r)}finally{wt.transition=o,ue=r}return null}function B1(e,t,n,r){do Ir();while(yn!==null);if(ie&6)throw Error(M(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(kg(e,i),e===Le&&(Ae=Le=null,Ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Si||(Si=!0,sh(qi,function(){return Ir(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=wt.transition,wt.transition=null;var a=ue;ue=1;var s=ie;ie|=4,nu.current=null,I1(e,n),Jm(n,e),s1($l),Zi=!!Pl,$l=Pl=null,e.current=n,N1(n),fg(),ie=s,ue=a,wt.transition=i}else e.current=n;if(Si&&(Si=!1,yn=e,ha=o),i=e.pendingLanes,i===0&&(Cn=null),hg(n.stateNode),ot(e,Te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ma)throw ma=!1,e=Xl,Xl=null,e;return ha&1&&e.tag!==0&&Ir(),i=e.pendingLanes,i&1?e===ql?Eo++:(Eo=0,ql=e):Eo=0,An(),null}function Ir(){if(yn!==null){var e=Mp(ha),t=wt.transition,n=ue;try{if(wt.transition=null,ue=16>e?16:e,yn===null)var r=!1;else{if(e=yn,yn=null,ha=0,ie&6)throw Error(M(331));var o=ie;for(ie|=4,K=e.current;K!==null;){var i=K,a=i.child;if(K.flags&16){var s=i.deletions;if(s!==null){for(var c=0;c<s.length;c++){var l=s[c];for(K=l;K!==null;){var u=K;switch(u.tag){case 0:case 11:case 15:So(8,u,i)}var d=u.child;if(d!==null)d.return=u,K=d;else for(;K!==null;){u=K;var f=u.sibling,m=u.return;if(Ym(u),u===l){K=null;break}if(f!==null){f.return=m,K=f;break}K=m}}}var g=i.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var k=v.sibling;v.sibling=null,v=k}while(v!==null)}}K=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,K=a;else e:for(;K!==null;){if(i=K,i.flags&2048)switch(i.tag){case 0:case 11:case 15:So(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,K=h;break e}K=i.return}}var p=e.current;for(K=p;K!==null;){a=K;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,K=y;else e:for(a=p;K!==null;){if(s=K,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:La(9,s)}}catch(b){_e(s,s.return,b)}if(s===a){K=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,K=w;break e}K=s.return}}if(ie=o,An(),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot($a,e)}catch{}r=!0}return r}finally{ue=n,wt.transition=t}}return!1}function Gd(e,t,n){t=Vr(n,t),t=Lm(e,t,1),e=Sn(e,t,1),t=qe(),e!==null&&(Zo(e,1,t),ot(e,t))}function _e(e,t,n){if(e.tag===3)Gd(e,e,n);else for(;t!==null;){if(t.tag===3){Gd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Cn===null||!Cn.has(r))){e=Vr(n,e),e=Dm(t,e,1),t=Sn(t,e,1),e=qe(),t!==null&&(Zo(t,1,e),ot(t,e));break}}t=t.return}}function U1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=qe(),e.pingedLanes|=e.suspendedLanes&n,Le===e&&(Ue&n)===n&&(Ne===4||Ne===3&&(Ue&130023424)===Ue&&500>Te()-ou?Wn(e,0):ru|=n),ot(e,t)}function ih(e,t){t===0&&(e.mode&1?(t=pi,pi<<=1,!(pi&130023424)&&(pi=4194304)):t=1);var n=qe();e=on(e,t),e!==null&&(Zo(e,t,n),ot(e,n))}function V1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ih(e,n)}function H1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(t),ih(e,n)}var ah;ah=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)tt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return tt=!1,O1(e,t,n);tt=!!(e.flags&131072)}else tt=!1,xe&&t.flags&1048576&&cm(t,aa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Li(e,t),e=t.pendingProps;var o=Dr(t,Qe.current);zr(t,n),o=qc(null,t,r,e,o,n);var i=Jc();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rt(r)?(i=!0,oa(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Gc(t),o.updater=Na,t.stateNode=o,o._reactInternals=t,Dl(t,r,e,n),t=Ul(null,t,r,!0,i,n)):(t.tag=0,xe&&i&&Dc(t),Xe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Li(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=G1(r),e=jt(r,e),o){case 0:t=Bl(null,t,r,e,n);break e;case 1:t=Nd(null,t,r,e,n);break e;case 11:t=zd(null,t,r,e,n);break e;case 14:t=Id(null,t,r,jt(r.type,e),n);break e}throw Error(M(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:jt(r,o),Bl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:jt(r,o),Nd(e,t,r,o,n);case 3:e:{if(Vm(t),e===null)throw Error(M(387));r=t.pendingProps,i=t.memoizedState,o=i.element,pm(e,t),ca(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Vr(Error(M(423)),t),t=Md(e,t,r,n,o);break e}else if(r!==o){o=Vr(Error(M(424)),t),t=Md(e,t,r,n,o);break e}else for(lt=bn(t.stateNode.containerInfo.firstChild),ct=t,xe=!0,Pt=null,n=vm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fr(),r===o){t=an(e,t,n);break e}Xe(e,t,r,n)}t=t.child}return t;case 5:return ym(t),e===null&&Nl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Ol(r,o)?a=null:i!==null&&Ol(r,i)&&(t.flags|=32),Um(e,t),Xe(e,t,a,n),t.child;case 6:return e===null&&Nl(t),null;case 13:return Hm(e,t,n);case 4:return Kc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Br(t,null,r,n):Xe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:jt(r,o),zd(e,t,r,o,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,pe(sa,r._currentValue),r._currentValue=a,i!==null)if(Nt(i.value,a)){if(i.children===o.children&&!nt.current){t=an(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var c=s.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=tn(-1,n&-n),c.tag=2;var l=i.updateQueue;if(l!==null){l=l.shared;var u=l.pending;u===null?c.next=c:(c.next=u.next,u.next=c),l.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Ml(i.return,n,t),s.lanes|=n;break}c=c.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(M(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Ml(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Xe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,zr(t,n),o=bt(o),r=r(o),t.flags|=1,Xe(e,t,r,n),t.child;case 14:return r=t.type,o=jt(r,t.pendingProps),o=jt(r.type,o),Id(e,t,r,o,n);case 15:return Fm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:jt(r,o),Li(e,t),t.tag=1,rt(r)?(e=!0,oa(t)):e=!1,zr(t,n),hm(t,r,o),Dl(t,r,o,n),Ul(null,t,r,!0,e,n);case 19:return Wm(e,t,n);case 22:return Bm(e,t,n)}throw Error(M(156,t.tag))};function sh(e,t){return Ap(e,t)}function W1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(e,t,n,r){return new W1(e,t,n,r)}function lu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function G1(e){if(typeof e=="function")return lu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===jc)return 11;if(e===Tc)return 14}return 2}function _n(e,t){var n=e.alternate;return n===null?(n=xt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Bi(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")lu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case yr:return Gn(n.children,o,i,t);case _c:a=8,o|=8;break;case cl:return e=xt(12,n,t,o|2),e.elementType=cl,e.lanes=i,e;case ul:return e=xt(13,n,t,o),e.elementType=ul,e.lanes=i,e;case dl:return e=xt(19,n,t,o),e.elementType=dl,e.lanes=i,e;case gp:return Fa(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case mp:a=10;break e;case hp:a=9;break e;case jc:a=11;break e;case Tc:a=14;break e;case pn:a=16,r=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=xt(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Gn(e,t,n,r){return e=xt(7,e,r,t),e.lanes=n,e}function Fa(e,t,n,r){return e=xt(22,e,r,t),e.elementType=gp,e.lanes=n,e.stateNode={isHidden:!1},e}function Xs(e,t,n){return e=xt(6,e,null,t),e.lanes=n,e}function qs(e,t,n){return t=xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function K1(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Os(0),this.expirationTimes=Os(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Os(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function cu(e,t,n,r,o,i,a,s,c){return e=new K1(e,t,n,s,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=xt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gc(i),e}function Q1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function lh(e){if(!e)return $n;e=e._reactInternals;e:{if(nr(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var n=e.type;if(rt(n))return sm(e,n,t)}return t}function ch(e,t,n,r,o,i,a,s,c){return e=cu(n,r,!0,e,o,i,a,s,c),e.context=lh(null),n=e.current,r=qe(),o=En(n),i=tn(r,o),i.callback=t??null,Sn(n,i,o),e.current.lanes=o,Zo(e,o,r),ot(e,r),e}function Ba(e,t,n,r){var o=t.current,i=qe(),a=En(o);return n=lh(n),t.context===null?t.context=n:t.pendingContext=n,t=tn(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Sn(o,t,a),e!==null&&(Rt(e,o,a,i),Ii(e,o,a)),a}function va(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Kd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function uu(e,t){Kd(e,t),(e=e.alternate)&&Kd(e,t)}function Y1(){return null}var uh=typeof reportError=="function"?reportError:function(e){console.error(e)};function du(e){this._internalRoot=e}Ua.prototype.render=du.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));Ba(e,t,null,null)};Ua.prototype.unmount=du.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qn(function(){Ba(null,e,null,null)}),t[rn]=null}};function Ua(e){this._internalRoot=e}Ua.prototype.unstable_scheduleHydration=function(e){if(e){var t=Fp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<hn.length&&t!==0&&t<hn[n].priority;n++);hn.splice(n,0,e),n===0&&Up(e)}};function fu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Va(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Qd(){}function X1(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var l=va(a);i.call(l)}}var a=ch(t,r,e,0,null,!1,!1,"",Qd);return e._reactRootContainer=a,e[rn]=a.current,Mo(e.nodeType===8?e.parentNode:e),qn(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var l=va(c);s.call(l)}}var c=cu(e,0,!1,null,null,!1,!1,"",Qd);return e._reactRootContainer=c,e[rn]=c.current,Mo(e.nodeType===8?e.parentNode:e),qn(function(){Ba(t,c,n,r)}),c}function Ha(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var c=va(a);s.call(c)}}Ba(t,a,e,o)}else a=X1(n,t,e,o,r);return va(a)}Lp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=mo(t.pendingLanes);n!==0&&(Oc(t,n|1),ot(t,Te()),!(ie&6)&&(Hr=Te()+500,An()))}break;case 13:qn(function(){var r=on(e,1);if(r!==null){var o=qe();Rt(r,e,1,o)}}),uu(e,1)}};Rc=function(e){if(e.tag===13){var t=on(e,134217728);if(t!==null){var n=qe();Rt(t,e,134217728,n)}uu(e,134217728)}};Dp=function(e){if(e.tag===13){var t=En(e),n=on(e,t);if(n!==null){var r=qe();Rt(n,e,t,r)}uu(e,t)}};Fp=function(){return ue};Bp=function(e,t){var n=ue;try{return ue=e,t()}finally{ue=n}};kl=function(e,t,n){switch(t){case"input":if(ml(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=za(r);if(!o)throw Error(M(90));yp(r),ml(r,o)}}}break;case"textarea":wp(e,n);break;case"select":t=n.value,t!=null&&$r(e,!!n.multiple,t,!1)}};jp=iu;Tp=qn;var q1={usingClientEntryPoint:!1,Events:[ti,br,za,Ep,_p,iu]},so={findFiberByHostInstance:Bn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},J1={bundleType:so.bundleType,version:so.version,rendererPackageName:so.rendererPackageName,rendererConfig:so.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Op(e),e===null?null:e.stateNode},findFiberByHostInstance:so.findFiberByHostInstance||Y1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ci=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ci.isDisabled&&Ci.supportsFiber)try{$a=Ci.inject(J1),Ht=Ci}catch{}}ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q1;ft.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fu(t))throw Error(M(200));return Q1(e,t,null,n)};ft.createRoot=function(e,t){if(!fu(e))throw Error(M(299));var n=!1,r="",o=uh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=cu(e,1,!1,null,null,n,!1,r,o),e[rn]=t.current,Mo(e.nodeType===8?e.parentNode:e),new du(t)};ft.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=Op(t),e=e===null?null:e.stateNode,e};ft.flushSync=function(e){return qn(e)};ft.hydrate=function(e,t,n){if(!Va(t))throw Error(M(200));return Ha(null,e,t,!0,n)};ft.hydrateRoot=function(e,t,n){if(!fu(e))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=uh;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=ch(t,null,e,1,n??null,o,!1,i,a),e[rn]=t.current,Mo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ua(t)};ft.render=function(e,t,n){if(!Va(t))throw Error(M(200));return Ha(null,e,t,!1,n)};ft.unmountComponentAtNode=function(e){if(!Va(e))throw Error(M(40));return e._reactRootContainer?(qn(function(){Ha(null,null,e,!1,function(){e._reactRootContainer=null,e[rn]=null})}),!0):!1};ft.unstable_batchedUpdates=iu;ft.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Va(n))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return Ha(e,t,n,!1,r)};ft.version="18.2.0-next-9e3b772b8-20220608";function dh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dh)}catch(e){console.error(e)}}dh(),cp.exports=ft;var pu=cp.exports;const Ei=Ta(pu);var Yd=pu;sl.createRoot=Yd.createRoot,sl.hydrateRoot=Yd.hydrateRoot;var fh={exports:{}},de={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mu=Symbol.for("react.element"),hu=Symbol.for("react.portal"),Wa=Symbol.for("react.fragment"),Ga=Symbol.for("react.strict_mode"),Ka=Symbol.for("react.profiler"),Qa=Symbol.for("react.provider"),Ya=Symbol.for("react.context"),Z1=Symbol.for("react.server_context"),Xa=Symbol.for("react.forward_ref"),qa=Symbol.for("react.suspense"),Ja=Symbol.for("react.suspense_list"),Za=Symbol.for("react.memo"),es=Symbol.for("react.lazy"),ev=Symbol.for("react.offscreen"),ph;ph=Symbol.for("react.module.reference");function Ct(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case mu:switch(e=e.type,e){case Wa:case Ka:case Ga:case qa:case Ja:return e;default:switch(e=e&&e.$$typeof,e){case Z1:case Ya:case Xa:case es:case Za:case Qa:return e;default:return t}}case hu:return t}}}de.ContextConsumer=Ya;de.ContextProvider=Qa;de.Element=mu;de.ForwardRef=Xa;de.Fragment=Wa;de.Lazy=es;de.Memo=Za;de.Portal=hu;de.Profiler=Ka;de.StrictMode=Ga;de.Suspense=qa;de.SuspenseList=Ja;de.isAsyncMode=function(){return!1};de.isConcurrentMode=function(){return!1};de.isContextConsumer=function(e){return Ct(e)===Ya};de.isContextProvider=function(e){return Ct(e)===Qa};de.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===mu};de.isForwardRef=function(e){return Ct(e)===Xa};de.isFragment=function(e){return Ct(e)===Wa};de.isLazy=function(e){return Ct(e)===es};de.isMemo=function(e){return Ct(e)===Za};de.isPortal=function(e){return Ct(e)===hu};de.isProfiler=function(e){return Ct(e)===Ka};de.isStrictMode=function(e){return Ct(e)===Ga};de.isSuspense=function(e){return Ct(e)===qa};de.isSuspenseList=function(e){return Ct(e)===Ja};de.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Wa||e===Ka||e===Ga||e===qa||e===Ja||e===ev||typeof e=="object"&&e!==null&&(e.$$typeof===es||e.$$typeof===Za||e.$$typeof===Qa||e.$$typeof===Ya||e.$$typeof===Xa||e.$$typeof===ph||e.getModuleId!==void 0)};de.typeOf=Ct;fh.exports=de;var mh=fh.exports;function tv(e){function t(O,V,C,J,S){for(var Q=0,N=0,ne=0,X=0,te,Z,ce=0,me=0,oe,Se=oe=te=0,ae=0,Oe=0,In=0,ze=0,Nn=C.length,Yt=Nn-1,Ye,ee="",he="",dn="",lr="",Lt;ae<Nn;){if(Z=C.charCodeAt(ae),ae===Yt&&N+X+ne+Q!==0&&(N!==0&&(Z=N===47?10:47),X=ne=Q=0,Nn++,Yt++),N+X+ne+Q===0){if(ae===Yt&&(0<Oe&&(ee=ee.replace(f,"")),0<ee.trim().length)){switch(Z){case 32:case 9:case 59:case 13:case 10:break;default:ee+=C.charAt(ae)}Z=59}switch(Z){case 123:for(ee=ee.trim(),te=ee.charCodeAt(0),oe=1,ze=++ae;ae<Nn;){switch(Z=C.charCodeAt(ae)){case 123:oe++;break;case 125:oe--;break;case 47:switch(Z=C.charCodeAt(ae+1)){case 42:case 47:e:{for(Se=ae+1;Se<Yt;++Se)switch(C.charCodeAt(Se)){case 47:if(Z===42&&C.charCodeAt(Se-1)===42&&ae+2!==Se){ae=Se+1;break e}break;case 10:if(Z===47){ae=Se+1;break e}}ae=Se}}break;case 91:Z++;case 40:Z++;case 34:case 39:for(;ae++<Yt&&C.charCodeAt(ae)!==Z;);}if(oe===0)break;ae++}switch(oe=C.substring(ze,ae),te===0&&(te=(ee=ee.replace(d,"").trim()).charCodeAt(0)),te){case 64:switch(0<Oe&&(ee=ee.replace(f,"")),Z=ee.charCodeAt(1),Z){case 100:case 109:case 115:case 45:Oe=V;break;default:Oe=U}if(oe=t(V,Oe,oe,Z,S+1),ze=oe.length,0<z&&(Oe=n(U,ee,In),Lt=s(3,oe,Oe,V,W,D,ze,Z,S,J),ee=Oe.join(""),Lt!==void 0&&(ze=(oe=Lt.trim()).length)===0&&(Z=0,oe="")),0<ze)switch(Z){case 115:ee=ee.replace(_,a);case 100:case 109:case 45:oe=ee+"{"+oe+"}";break;case 107:ee=ee.replace(p,"$1 $2"),oe=ee+"{"+oe+"}",oe=B===1||B===2&&i("@"+oe,3)?"@-webkit-"+oe+"@"+oe:"@"+oe;break;default:oe=ee+oe,J===112&&(oe=(he+=oe,""))}else oe="";break;default:oe=t(V,n(V,ee,In),oe,J,S+1)}dn+=oe,oe=In=Oe=Se=te=0,ee="",Z=C.charCodeAt(++ae);break;case 125:case 59:if(ee=(0<Oe?ee.replace(f,""):ee).trim(),1<(ze=ee.length))switch(Se===0&&(te=ee.charCodeAt(0),te===45||96<te&&123>te)&&(ze=(ee=ee.replace(" ",":")).length),0<z&&(Lt=s(1,ee,V,O,W,D,he.length,J,S,J))!==void 0&&(ze=(ee=Lt.trim()).length)===0&&(ee="\0\0"),te=ee.charCodeAt(0),Z=ee.charCodeAt(1),te){case 0:break;case 64:if(Z===105||Z===99){lr+=ee+C.charAt(ae);break}default:ee.charCodeAt(ze-1)!==58&&(he+=o(ee,te,Z,ee.charCodeAt(2)))}In=Oe=Se=te=0,ee="",Z=C.charCodeAt(++ae)}}switch(Z){case 13:case 10:N===47?N=0:1+te===0&&J!==107&&0<ee.length&&(Oe=1,ee+="\0"),0<z*R&&s(0,ee,V,O,W,D,he.length,J,S,J),D=1,W++;break;case 59:case 125:if(N+X+ne+Q===0){D++;break}default:switch(D++,Ye=C.charAt(ae),Z){case 9:case 32:if(X+Q+N===0)switch(ce){case 44:case 58:case 9:case 32:Ye="";break;default:Z!==32&&(Ye=" ")}break;case 0:Ye="\\0";break;case 12:Ye="\\f";break;case 11:Ye="\\v";break;case 38:X+N+Q===0&&(Oe=In=1,Ye="\f"+Ye);break;case 108:if(X+N+Q+H===0&&0<Se)switch(ae-Se){case 2:ce===112&&C.charCodeAt(ae-3)===58&&(H=ce);case 8:me===111&&(H=me)}break;case 58:X+N+Q===0&&(Se=ae);break;case 44:N+ne+X+Q===0&&(Oe=1,Ye+="\r");break;case 34:case 39:N===0&&(X=X===Z?0:X===0?Z:X);break;case 91:X+N+ne===0&&Q++;break;case 93:X+N+ne===0&&Q--;break;case 41:X+N+Q===0&&ne--;break;case 40:if(X+N+Q===0){if(te===0)switch(2*ce+3*me){case 533:break;default:te=1}ne++}break;case 64:N+ne+X+Q+Se+oe===0&&(oe=1);break;case 42:case 47:if(!(0<X+Q+ne))switch(N){case 0:switch(2*Z+3*C.charCodeAt(ae+1)){case 235:N=47;break;case 220:ze=ae,N=42}break;case 42:Z===47&&ce===42&&ze+2!==ae&&(C.charCodeAt(ze+2)===33&&(he+=C.substring(ze,ae+1)),Ye="",N=0)}}N===0&&(ee+=Ye)}me=ce,ce=Z,ae++}if(ze=he.length,0<ze){if(Oe=V,0<z&&(Lt=s(2,he,Oe,O,W,D,ze,J,S,J),Lt!==void 0&&(he=Lt).length===0))return lr+he+dn;if(he=Oe.join(",")+"{"+he+"}",B*H!==0){switch(B!==2||i(he,2)||(H=0),H){case 111:he=he.replace(w,":-moz-$1")+he;break;case 112:he=he.replace(y,"::-webkit-input-$1")+he.replace(y,"::-moz-$1")+he.replace(y,":-ms-input-$1")+he}H=0}}return lr+he+dn}function n(O,V,C){var J=V.trim().split(k);V=J;var S=J.length,Q=O.length;switch(Q){case 0:case 1:var N=0;for(O=Q===0?"":O[0]+" ";N<S;++N)V[N]=r(O,V[N],C).trim();break;default:var ne=N=0;for(V=[];N<S;++N)for(var X=0;X<Q;++X)V[ne++]=r(O[X]+" ",J[N],C).trim()}return V}function r(O,V,C){var J=V.charCodeAt(0);switch(33>J&&(J=(V=V.trim()).charCodeAt(0)),J){case 38:return V.replace(h,"$1"+O.trim());case 58:return O.trim()+V.replace(h,"$1"+O.trim());default:if(0<1*C&&0<V.indexOf("\f"))return V.replace(h,(O.charCodeAt(0)===58?"":"$1")+O.trim())}return O+V}function o(O,V,C,J){var S=O+";",Q=2*V+3*C+4*J;if(Q===944){O=S.indexOf(":",9)+1;var N=S.substring(O,S.length-1).trim();return N=S.substring(0,O).trim()+N+";",B===1||B===2&&i(N,1)?"-webkit-"+N+N:N}if(B===0||B===2&&!i(S,1))return S;switch(Q){case 1015:return S.charCodeAt(10)===97?"-webkit-"+S+S:S;case 951:return S.charCodeAt(3)===116?"-webkit-"+S+S:S;case 963:return S.charCodeAt(5)===110?"-webkit-"+S+S:S;case 1009:if(S.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+S+S;case 978:return"-webkit-"+S+"-moz-"+S+S;case 1019:case 983:return"-webkit-"+S+"-moz-"+S+"-ms-"+S+S;case 883:if(S.charCodeAt(8)===45)return"-webkit-"+S+S;if(0<S.indexOf("image-set(",11))return S.replace(A,"$1-webkit-$2")+S;break;case 932:if(S.charCodeAt(4)===45)switch(S.charCodeAt(5)){case 103:return"-webkit-box-"+S.replace("-grow","")+"-webkit-"+S+"-ms-"+S.replace("grow","positive")+S;case 115:return"-webkit-"+S+"-ms-"+S.replace("shrink","negative")+S;case 98:return"-webkit-"+S+"-ms-"+S.replace("basis","preferred-size")+S}return"-webkit-"+S+"-ms-"+S+S;case 964:return"-webkit-"+S+"-ms-flex-"+S+S;case 1023:if(S.charCodeAt(8)!==99)break;return N=S.substring(S.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+N+"-webkit-"+S+"-ms-flex-pack"+N+S;case 1005:return g.test(S)?S.replace(m,":-webkit-")+S.replace(m,":-moz-")+S:S;case 1e3:switch(N=S.substring(13).trim(),V=N.indexOf("-")+1,N.charCodeAt(0)+N.charCodeAt(V)){case 226:N=S.replace(b,"tb");break;case 232:N=S.replace(b,"tb-rl");break;case 220:N=S.replace(b,"lr");break;default:return S}return"-webkit-"+S+"-ms-"+N+S;case 1017:if(S.indexOf("sticky",9)===-1)break;case 975:switch(V=(S=O).length-10,N=(S.charCodeAt(V)===33?S.substring(0,V):S).substring(O.indexOf(":",7)+1).trim(),Q=N.charCodeAt(0)+(N.charCodeAt(7)|0)){case 203:if(111>N.charCodeAt(8))break;case 115:S=S.replace(N,"-webkit-"+N)+";"+S;break;case 207:case 102:S=S.replace(N,"-webkit-"+(102<Q?"inline-":"")+"box")+";"+S.replace(N,"-webkit-"+N)+";"+S.replace(N,"-ms-"+N+"box")+";"+S}return S+";";case 938:if(S.charCodeAt(5)===45)switch(S.charCodeAt(6)){case 105:return N=S.replace("-items",""),"-webkit-"+S+"-webkit-box-"+N+"-ms-flex-"+N+S;case 115:return"-webkit-"+S+"-ms-flex-item-"+S.replace($,"")+S;default:return"-webkit-"+S+"-ms-flex-line-pack"+S.replace("align-content","").replace($,"")+S}break;case 973:case 989:if(S.charCodeAt(3)!==45||S.charCodeAt(4)===122)break;case 931:case 953:if(P.test(O)===!0)return(N=O.substring(O.indexOf(":")+1)).charCodeAt(0)===115?o(O.replace("stretch","fill-available"),V,C,J).replace(":fill-available",":stretch"):S.replace(N,"-webkit-"+N)+S.replace(N,"-moz-"+N.replace("fill-",""))+S;break;case 962:if(S="-webkit-"+S+(S.charCodeAt(5)===102?"-ms-"+S:"")+S,C+J===211&&S.charCodeAt(13)===105&&0<S.indexOf("transform",10))return S.substring(0,S.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+S}return S}function i(O,V){var C=O.indexOf(V===1?":":"{"),J=O.substring(0,V!==3?C:10);return C=O.substring(C+1,O.length-1),I(V!==2?J:J.replace(L,"$1"),C,V)}function a(O,V){var C=o(V,V.charCodeAt(0),V.charCodeAt(1),V.charCodeAt(2));return C!==V+";"?C.replace(E," or ($1)").substring(4):"("+V+")"}function s(O,V,C,J,S,Q,N,ne,X,te){for(var Z=0,ce=V,me;Z<z;++Z)switch(me=q[Z].call(u,O,ce,C,J,S,Q,N,ne,X,te)){case void 0:case!1:case!0:case null:break;default:ce=me}if(ce!==V)return ce}function c(O){switch(O){case void 0:case null:z=q.length=0;break;default:if(typeof O=="function")q[z++]=O;else if(typeof O=="object")for(var V=0,C=O.length;V<C;++V)c(O[V]);else R=!!O|0}return c}function l(O){return O=O.prefix,O!==void 0&&(I=null,O?typeof O!="function"?B=1:(B=2,I=O):B=0),l}function u(O,V){var C=O;if(33>C.charCodeAt(0)&&(C=C.trim()),G=C,C=[G],0<z){var J=s(-1,V,C,C,W,D,0,0,0,0);J!==void 0&&typeof J=="string"&&(V=J)}var S=t(U,C,V,0,0);return 0<z&&(J=s(-2,S,C,C,W,D,S.length,0,0,0),J!==void 0&&(S=J)),G="",H=0,D=W=1,S}var d=/^\0+/g,f=/[\0\r\f]/g,m=/: */g,g=/zoo|gra/,v=/([,: ])(transform)/g,k=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,w=/:(read-only)/g,b=/[svh]\w+-[tblr]{2}/,_=/\(\s*(.*)\s*\)/g,E=/([\s\S]*?);/g,$=/-self|flex-/g,L=/[^]*?(:[rp][el]a[\w-]+)[^]*/,P=/stretch|:\s*\w+\-(?:conte|avail)/,A=/([^-])(image-set\()/,D=1,W=1,H=0,B=1,U=[],q=[],z=0,I=null,R=0,G="";return u.use=c,u.set=l,e!==void 0&&l(e),u}var nv={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function hh(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var rv=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ec=hh(function(e){return rv.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),gh={exports:{}},fe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var De=typeof Symbol=="function"&&Symbol.for,gu=De?Symbol.for("react.element"):60103,vu=De?Symbol.for("react.portal"):60106,ts=De?Symbol.for("react.fragment"):60107,ns=De?Symbol.for("react.strict_mode"):60108,rs=De?Symbol.for("react.profiler"):60114,os=De?Symbol.for("react.provider"):60109,is=De?Symbol.for("react.context"):60110,yu=De?Symbol.for("react.async_mode"):60111,as=De?Symbol.for("react.concurrent_mode"):60111,ss=De?Symbol.for("react.forward_ref"):60112,ls=De?Symbol.for("react.suspense"):60113,ov=De?Symbol.for("react.suspense_list"):60120,cs=De?Symbol.for("react.memo"):60115,us=De?Symbol.for("react.lazy"):60116,iv=De?Symbol.for("react.block"):60121,av=De?Symbol.for("react.fundamental"):60117,sv=De?Symbol.for("react.responder"):60118,lv=De?Symbol.for("react.scope"):60119;function mt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case gu:switch(e=e.type,e){case yu:case as:case ts:case rs:case ns:case ls:return e;default:switch(e=e&&e.$$typeof,e){case is:case ss:case us:case cs:case os:return e;default:return t}}case vu:return t}}}function vh(e){return mt(e)===as}fe.AsyncMode=yu;fe.ConcurrentMode=as;fe.ContextConsumer=is;fe.ContextProvider=os;fe.Element=gu;fe.ForwardRef=ss;fe.Fragment=ts;fe.Lazy=us;fe.Memo=cs;fe.Portal=vu;fe.Profiler=rs;fe.StrictMode=ns;fe.Suspense=ls;fe.isAsyncMode=function(e){return vh(e)||mt(e)===yu};fe.isConcurrentMode=vh;fe.isContextConsumer=function(e){return mt(e)===is};fe.isContextProvider=function(e){return mt(e)===os};fe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===gu};fe.isForwardRef=function(e){return mt(e)===ss};fe.isFragment=function(e){return mt(e)===ts};fe.isLazy=function(e){return mt(e)===us};fe.isMemo=function(e){return mt(e)===cs};fe.isPortal=function(e){return mt(e)===vu};fe.isProfiler=function(e){return mt(e)===rs};fe.isStrictMode=function(e){return mt(e)===ns};fe.isSuspense=function(e){return mt(e)===ls};fe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ts||e===as||e===rs||e===ns||e===ls||e===ov||typeof e=="object"&&e!==null&&(e.$$typeof===us||e.$$typeof===cs||e.$$typeof===os||e.$$typeof===is||e.$$typeof===ss||e.$$typeof===av||e.$$typeof===sv||e.$$typeof===lv||e.$$typeof===iv)};fe.typeOf=mt;gh.exports=fe;var cv=gh.exports,xu=cv,uv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},dv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},fv={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},yh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},wu={};wu[xu.ForwardRef]=fv;wu[xu.Memo]=yh;function Xd(e){return xu.isMemo(e)?yh:wu[e.$$typeof]||uv}var pv=Object.defineProperty,mv=Object.getOwnPropertyNames,qd=Object.getOwnPropertySymbols,hv=Object.getOwnPropertyDescriptor,gv=Object.getPrototypeOf,Jd=Object.prototype;function xh(e,t,n){if(typeof t!="string"){if(Jd){var r=gv(t);r&&r!==Jd&&xh(e,r,n)}var o=mv(t);qd&&(o=o.concat(qd(t)));for(var i=Xd(e),a=Xd(t),s=0;s<o.length;++s){var c=o[s];if(!dv[c]&&!(n&&n[c])&&!(a&&a[c])&&!(i&&i[c])){var l=hv(t,c);try{pv(e,c,l)}catch{}}}}return e}var vv=xh;const yv=Ta(vv);var ht={};function $t(){return($t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Zd=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},tc=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!mh.typeOf(e)},ya=Object.freeze([]),jn=Object.freeze({});function Wr(e){return typeof e=="function"}function ef(e){return e.displayName||e.name||"Component"}function ku(e){return e&&typeof e.styledComponentId=="string"}var Gr=typeof process<"u"&&ht!==void 0&&(ht.REACT_APP_SC_ATTR||ht.SC_ATTR)||"data-styled",bu=typeof window<"u"&&"HTMLElement"in window,xv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ht!==void 0&&(ht.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ht.REACT_APP_SC_DISABLE_SPEEDY!==""?ht.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ht.REACT_APP_SC_DISABLE_SPEEDY:ht.SC_DISABLE_SPEEDY!==void 0&&ht.SC_DISABLE_SPEEDY!==""&&ht.SC_DISABLE_SPEEDY!=="false"&&ht.SC_DISABLE_SPEEDY)),wv={};function Jn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var kv=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,a=i;n>=a;)(a<<=1)<0&&Jn(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var s=i;s<a;s++)this.groupSizes[s]=0}for(var c=this.indexOfGroup(n+1),l=0,u=r.length;l<u;l++)this.tag.insertRule(c,r[l])&&(this.groupSizes[n]++,c++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r;this.groupSizes[n]=0;for(var a=o;a<i;a++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],i=this.indexOfGroup(n),a=i+o,s=i;s<a;s++)r+=this.tag.getRule(s)+`/*!sc*/
`;return r},e}(),Ui=new Map,xa=new Map,_o=1,_i=function(e){if(Ui.has(e))return Ui.get(e);for(;xa.has(_o);)_o++;var t=_o++;return Ui.set(e,t),xa.set(t,e),t},bv=function(e){return xa.get(e)},Sv=function(e,t){t>=_o&&(_o=t+1),Ui.set(e,t),xa.set(t,e)},Cv="style["+Gr+'][data-styled-version="5.3.11"]',Ev=new RegExp("^"+Gr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),_v=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},jv=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,i=n.length;o<i;o++){var a=n[o].trim();if(a){var s=a.match(Ev);if(s){var c=0|parseInt(s[1],10),l=s[2];c!==0&&(Sv(l,c),_v(e,l,s[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(a)}}},Tv=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},wh=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){for(var c=s.childNodes,l=c.length;l>=0;l--){var u=c[l];if(u&&u.nodeType===1&&u.hasAttribute(Gr))return u}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Gr,"active"),r.setAttribute("data-styled-version","5.3.11");var a=Tv();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},Pv=function(){function e(n){var r=this.element=wh(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,a=0,s=i.length;a<s;a++){var c=i[a];if(c.ownerNode===o)return c}Jn(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),$v=function(){function e(n){var r=this.element=wh(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Ov=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),tf=bu,Rv={isServer:!bu,useCSSOMInjection:!xv},wa=function(){function e(n,r,o){n===void 0&&(n=jn),r===void 0&&(r={}),this.options=$t({},Rv,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&bu&&tf&&(tf=!1,function(i){for(var a=document.querySelectorAll(Cv),s=0,c=a.length;s<c;s++){var l=a[s];l&&l.getAttribute(Gr)!=="active"&&(jv(i,l),l.parentNode&&l.parentNode.removeChild(l))}}(this))}e.registerId=function(n){return _i(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e($t({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,i=r.useCSSOMInjection,a=r.target,n=o?new Ov(a):i?new Pv(a):new $v(a),new kv(n)));var n,r,o,i,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(_i(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(_i(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(_i(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,i="",a=0;a<o;a++){var s=bv(a);if(s!==void 0){var c=n.names.get(s),l=r.getGroup(a);if(c&&l&&c.size){var u=Gr+".g"+a+'[id="'+s+'"]',d="";c!==void 0&&c.forEach(function(f){f.length>0&&(d+=f+",")}),i+=""+l+u+'{content:"'+d+`"}/*!sc*/
`}}}return i}(this)},e}(),Av=/(a)(d)/gi,nf=function(e){return String.fromCharCode(e+(e>25?39:97))};function nc(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=nf(t%52)+n;return(nf(t%52)+n).replace(Av,"$1-$2")}var Pr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},kh=function(e){return Pr(5381,e)};function bh(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Wr(n)&&!ku(n))return!1}return!0}var zv=kh("5.3.11"),Iv=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&bh(t),this.componentId=n,this.baseHash=Pr(zv,n),this.baseStyle=r,wa.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var a=Zn(this.rules,t,n,r).join(""),s=nc(Pr(this.baseHash,a)>>>0);if(!n.hasNameForId(o,s)){var c=r(a,"."+s,void 0,o);n.insertRules(o,s,c)}i.push(s),this.staticRulesId=s}else{for(var l=this.rules.length,u=Pr(this.baseHash,r.hash),d="",f=0;f<l;f++){var m=this.rules[f];if(typeof m=="string")d+=m;else if(m){var g=Zn(m,t,n,r),v=Array.isArray(g)?g.join(""):g;u=Pr(u,v+f),d+=v}}if(d){var k=nc(u>>>0);if(!n.hasNameForId(o,k)){var h=r(d,"."+k,void 0,o);n.insertRules(o,k,h)}i.push(k)}}return i.join(" ")},e}(),Nv=/^\s*\/\/.*$/gm,Mv=[":","[",".","#"];function Lv(e){var t,n,r,o,i=e===void 0?jn:e,a=i.options,s=a===void 0?jn:a,c=i.plugins,l=c===void 0?ya:c,u=new tv(s),d=[],f=function(v){function k(h){if(h)try{v(h+"}")}catch{}}return function(h,p,y,w,b,_,E,$,L,P){switch(h){case 1:if(L===0&&p.charCodeAt(0)===64)return v(p+";"),"";break;case 2:if($===0)return p+"/*|*/";break;case 3:switch($){case 102:case 112:return v(y[0]+p),"";default:return p+(P===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(k)}}}(function(v){d.push(v)}),m=function(v,k,h){return k===0&&Mv.indexOf(h[n.length])!==-1||h.match(o)?v:"."+t};function g(v,k,h,p){p===void 0&&(p="&");var y=v.replace(Nv,""),w=k&&h?h+" "+k+" { "+y+" }":y;return t=p,n=k,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),u(h||!k?"":k,w)}return u.use([].concat(l,[function(v,k,h){v===2&&h.length&&h[0].lastIndexOf(n)>0&&(h[0]=h[0].replace(r,m))},f,function(v){if(v===-2){var k=d;return d=[],k}}])),g.hash=l.length?l.reduce(function(v,k){return k.name||Jn(15),Pr(v,k.name)},5381).toString():"",g}var Sh=je.createContext();Sh.Consumer;var Ch=je.createContext(),Dv=(Ch.Consumer,new wa),rc=Lv();function Eh(){return T.useContext(Sh)||Dv}function _h(){return T.useContext(Ch)||rc}var Fv=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=rc);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.toString=function(){return Jn(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=rc),this.name+t.hash},e}(),Bv=/([A-Z])/,Uv=/([A-Z])/g,Vv=/^ms-/,Hv=function(e){return"-"+e.toLowerCase()};function rf(e){return Bv.test(e)?e.replace(Uv,Hv).replace(Vv,"-ms-"):e}var of=function(e){return e==null||e===!1||e===""};function Zn(e,t,n,r){if(Array.isArray(e)){for(var o,i=[],a=0,s=e.length;a<s;a+=1)(o=Zn(e[a],t,n,r))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(of(e))return"";if(ku(e))return"."+e.styledComponentId;if(Wr(e)){if(typeof(l=e)!="function"||l.prototype&&l.prototype.isReactComponent||!t)return e;var c=e(t);return Zn(c,t,n,r)}var l;return e instanceof Fv?n?(e.inject(n,r),e.getName(r)):e:tc(e)?function u(d,f){var m,g,v=[];for(var k in d)d.hasOwnProperty(k)&&!of(d[k])&&(Array.isArray(d[k])&&d[k].isCss||Wr(d[k])?v.push(rf(k)+":",d[k],";"):tc(d[k])?v.push.apply(v,u(d[k],k)):v.push(rf(k)+": "+(m=k,(g=d[k])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||m in nv||m.startsWith("--")?String(g).trim():g+"px")+";"));return f?[f+" {"].concat(v,["}"]):v}(e):e.toString()}var af=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function jh(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Wr(e)||tc(e)?af(Zn(Zd(ya,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:af(Zn(Zd(e,n)))}var Th=function(e,t,n){return n===void 0&&(n=jn),e.theme!==n.theme&&e.theme||t||n.theme},Wv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Gv=/(^-|-$)/g;function Js(e){return e.replace(Wv,"-").replace(Gv,"")}var Ph=function(e){return nc(kh(e)>>>0)};function ji(e){return typeof e=="string"&&!0}var oc=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Kv=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Qv(e,t,n){var r=e[n];oc(t)&&oc(r)?$h(r,t):e[n]=t}function $h(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var a=i[o];if(oc(a))for(var s in a)Kv(s)&&Qv(e,a[s],s)}return e}var Kr=je.createContext();Kr.Consumer;function Yv(e){var t=T.useContext(Kr),n=T.useMemo(function(){return function(r,o){if(!r)return Jn(14);if(Wr(r)){var i=r(o);return i}return Array.isArray(r)||typeof r!="object"?Jn(8):o?$t({},o,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?je.createElement(Kr.Provider,{value:n},e.children):null}var Zs={};function Oh(e,t,n){var r=ku(e),o=!ji(e),i=t.attrs,a=i===void 0?ya:i,s=t.componentId,c=s===void 0?function(p,y){var w=typeof p!="string"?"sc":Js(p);Zs[w]=(Zs[w]||0)+1;var b=w+"-"+Ph("5.3.11"+w+Zs[w]);return y?y+"-"+b:b}(t.displayName,t.parentComponentId):s,l=t.displayName,u=l===void 0?function(p){return ji(p)?"styled."+p:"Styled("+ef(p)+")"}(e):l,d=t.displayName&&t.componentId?Js(t.displayName)+"-"+t.componentId:t.componentId||c,f=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,m=t.shouldForwardProp;r&&e.shouldForwardProp&&(m=t.shouldForwardProp?function(p,y,w){return e.shouldForwardProp(p,y,w)&&t.shouldForwardProp(p,y,w)}:e.shouldForwardProp);var g,v=new Iv(n,d,r?e.componentStyle:void 0),k=v.isStatic&&a.length===0,h=function(p,y){return function(w,b,_,E){var $=w.attrs,L=w.componentStyle,P=w.defaultProps,A=w.foldedComponentIds,D=w.shouldForwardProp,W=w.styledComponentId,H=w.target,B=function(J,S,Q){J===void 0&&(J=jn);var N=$t({},S,{theme:J}),ne={};return Q.forEach(function(X){var te,Z,ce,me=X;for(te in Wr(me)&&(me=me(N)),me)N[te]=ne[te]=te==="className"?(Z=ne[te],ce=me[te],Z&&ce?Z+" "+ce:Z||ce):me[te]}),[N,ne]}(Th(b,T.useContext(Kr),P)||jn,b,$),U=B[0],q=B[1],z=function(J,S,Q,N){var ne=Eh(),X=_h(),te=S?J.generateAndInjectStyles(jn,ne,X):J.generateAndInjectStyles(Q,ne,X);return te}(L,E,U),I=_,R=q.$as||b.$as||q.as||b.as||H,G=ji(R),O=q!==b?$t({},b,{},q):b,V={};for(var C in O)C[0]!=="$"&&C!=="as"&&(C==="forwardedAs"?V.as=O[C]:(D?D(C,ec,R):!G||ec(C))&&(V[C]=O[C]));return b.style&&q.style!==b.style&&(V.style=$t({},b.style,{},q.style)),V.className=Array.prototype.concat(A,W,z!==W?z:null,b.className,q.className).filter(Boolean).join(" "),V.ref=I,T.createElement(R,V)}(g,p,y,k)};return h.displayName=u,(g=je.forwardRef(h)).attrs=f,g.componentStyle=v,g.displayName=u,g.shouldForwardProp=m,g.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):ya,g.styledComponentId=d,g.target=r?e.target:e,g.withComponent=function(p){var y=t.componentId,w=function(_,E){if(_==null)return{};var $,L,P={},A=Object.keys(_);for(L=0;L<A.length;L++)$=A[L],E.indexOf($)>=0||(P[$]=_[$]);return P}(t,["componentId"]),b=y&&y+"-"+(ji(p)?p:Js(ef(p)));return Oh(p,$t({},w,{attrs:f,componentId:b}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?$h({},e.defaultProps,p):p}}),Object.defineProperty(g,"toString",{value:function(){return"."+g.styledComponentId}}),o&&yv(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var ic=function(e){return function t(n,r,o){if(o===void 0&&(o=jn),!mh.isValidElementType(r))return Jn(1,String(r));var i=function(){return n(r,o,jh.apply(void 0,arguments))};return i.withConfig=function(a){return t(n,r,$t({},o,{},a))},i.attrs=function(a){return t(n,r,$t({},o,{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},i}(Oh,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){ic[e]=ic(e)});var Xv=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=bh(n),wa.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,o,i){var a=i(Zn(this.rules,r,o,i).join(""),""),s=this.componentId+n;o.insertRules(s,s,a)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,o,i){n>2&&wa.registerId(this.componentId+n),this.removeStyles(n,o),this.createStyles(n,r,o,i)},e}();function qv(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=jh.apply(void 0,[e].concat(n)),i="sc-global-"+Ph(JSON.stringify(o)),a=new Xv(o,i);function s(l){var u=Eh(),d=_h(),f=T.useContext(Kr),m=T.useRef(u.allocateGSInstance(i)).current;return u.server&&c(m,l,u,f,d),T.useLayoutEffect(function(){if(!u.server)return c(m,l,u,f,d),function(){return a.removeStyles(m,u)}},[m,l,u,f,d]),null}function c(l,u,d,f,m){if(a.isStatic)a.renderStyles(l,wv,d,m);else{var g=$t({},u,{theme:Th(u,f,s.defaultProps)});a.renderStyles(l,g,d,m)}}return je.memo(s)}var Jv=function(){return T.useContext(Kr)};const j=ic,Zv={bg:"#1C1C27",bgLight:"#1C1E27",primary:"#2aa889",text_primary:"#1bc099",text_matrix:"#00FF00",sub_text:"#FFFFFF",text_title:"#FFFFFF",text_secondary:"#b1b2b3",card_menu:"rgba(255,255,255)",card_menu_mobile:"rgba(255,255,255,0.8)",card:"#171721",button:"#854CE6",white:"#FFFFFF",black:"#000000",card_footer:"#FFFFFF"},ey={bg:"rgb(255,255,255,0.8)",bgLight:"#f0f0f0",primary:"#2aa889",text_matrix:"#00FF00",text_primary:"#111111",text_secondary:"#48494a",card:"#FFFFFF",card_menu:"rgba(0,0,0,0.8)",card_menu_mobile:"rgba(0,0,0,0.8)",button:"#5c5b5b",card_footer:"#000000"};/**
 * @remix-run/router v1.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Go(){return Go=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Go.apply(this,arguments)}var Hn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Hn||(Hn={}));const sf="popstate";function ty(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:a,hash:s}=r.location;return ac("",{pathname:i,search:a,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:ka(o)}return ry(t,n,null,e)}function At(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ny(){return Math.random().toString(36).substr(2,8)}function lf(e,t){return{usr:e.state,key:e.key,idx:t}}function ac(e,t,n,r){return n===void 0&&(n=null),Go({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ds(t):t,{state:n,key:t&&t.key||r||ny()})}function ka(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ds(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function ry(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,s=Hn.Pop,c=null,l=u();l==null&&(l=0,a.replaceState(Go({},a.state,{idx:l}),""));function u(){return(a.state||{idx:null}).idx}function d(){s=Hn.Pop;let k=u(),h=k==null?null:k-l;l=k,c&&c({action:s,location:v.location,delta:h})}function f(k,h){s=Hn.Push;let p=ac(v.location,k,h);n&&n(p,k),l=u()+1;let y=lf(p,l),w=v.createHref(p);try{a.pushState(y,"",w)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;o.location.assign(w)}i&&c&&c({action:s,location:v.location,delta:1})}function m(k,h){s=Hn.Replace;let p=ac(v.location,k,h);n&&n(p,k),l=u();let y=lf(p,l),w=v.createHref(p);a.replaceState(y,"",w),i&&c&&c({action:s,location:v.location,delta:0})}function g(k){let h=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof k=="string"?k:ka(k);return At(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let v={get action(){return s},get location(){return e(o,a)},listen(k){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(sf,d),c=k,()=>{o.removeEventListener(sf,d),c=null}},createHref(k){return t(o,k)},createURL:g,encodeLocation(k){let h=g(k);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:m,go(k){return a.go(k)}};return v}var cf;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(cf||(cf={}));function Rh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function oy(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?ds(e):e;return{pathname:n?n.startsWith("/")?n:iy(n,t):t,search:sy(r),hash:ly(o)}}function iy(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function el(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ay(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ah(e){return ay(e).map((t,n)=>n===e.length-1?t.pathname:t.pathnameBase)}function zh(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=ds(e):(o=Go({},e),At(!o.pathname||!o.pathname.includes("?"),el("?","pathname","search",o)),At(!o.pathname||!o.pathname.includes("#"),el("#","pathname","hash",o)),At(!o.search||!o.search.includes("#"),el("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,s;if(a==null)s=n;else if(r){let d=t[t.length-1].replace(/^\//,"").split("/");if(a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),d.pop();o.pathname=f.join("/")}s="/"+d.join("/")}else{let d=t.length-1;if(a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),d-=1;o.pathname=f.join("/")}s=d>=0?t[d]:"/"}let c=oy(o,s),l=a&&a!=="/"&&a.endsWith("/"),u=(i||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(l||u)&&(c.pathname+="/"),c}const Ih=e=>e.join("/").replace(/\/\/+/g,"/"),sy=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ly=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Nh=["post","put","patch","delete"];new Set(Nh);const cy=["get",...Nh];new Set(cy);/**
 * React Router v6.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sc(){return sc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sc.apply(this,arguments)}const Mh=T.createContext(null),ri=T.createContext(null),Su=T.createContext(null),fs=T.createContext({outlet:null,matches:[],isDataRoute:!1});function uy(e,t){let{relative:n}=t===void 0?{}:t;ps()||At(!1);let{basename:r,navigator:o}=T.useContext(ri),{hash:i,pathname:a,search:s}=Dh(e,{relative:n}),c=a;return r!=="/"&&(c=a==="/"?r:Ih([r,a])),o.createHref({pathname:c,search:s,hash:i})}function ps(){return T.useContext(Su)!=null}function Cu(){return ps()||At(!1),T.useContext(Su).location}function Lh(e){T.useContext(ri).static||T.useLayoutEffect(e)}function dy(){let{isDataRoute:e}=T.useContext(fs);return e?gy():fy()}function fy(){ps()||At(!1);let e=T.useContext(Mh),{basename:t,navigator:n}=T.useContext(ri),{matches:r}=T.useContext(fs),{pathname:o}=Cu(),i=JSON.stringify(Ah(r)),a=T.useRef(!1);return Lh(()=>{a.current=!0}),T.useCallback(function(c,l){if(l===void 0&&(l={}),!a.current)return;if(typeof c=="number"){n.go(c);return}let u=zh(c,JSON.parse(i),o,l.relative==="path");e==null&&t!=="/"&&(u.pathname=u.pathname==="/"?t:Ih([t,u.pathname])),(l.replace?n.replace:n.push)(u,l.state,l)},[t,n,i,o,e])}function Dh(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=T.useContext(fs),{pathname:o}=Cu(),i=JSON.stringify(Ah(r));return T.useMemo(()=>zh(e,JSON.parse(i),o,n==="path"),[e,i,o,n])}var Fh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Fh||{}),Bh=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Bh||{});function py(e){let t=T.useContext(Mh);return t||At(!1),t}function my(e){let t=T.useContext(fs);return t||At(!1),t}function hy(e){let t=my(),n=t.matches[t.matches.length-1];return n.route.id||At(!1),n.route.id}function gy(){let{router:e}=py(Fh.UseNavigateStable),t=hy(Bh.UseNavigateStable),n=T.useRef(!1);return Lh(()=>{n.current=!0}),T.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,sc({fromRouteId:t},i)))},[e,t])}function vy(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Hn.Pop,navigator:i,static:a=!1}=e;ps()&&At(!1);let s=t.replace(/^\/*/,"/"),c=T.useMemo(()=>({basename:s,navigator:i,static:a}),[s,i,a]);typeof r=="string"&&(r=ds(r));let{pathname:l="/",search:u="",hash:d="",state:f=null,key:m="default"}=r,g=T.useMemo(()=>{let v=Rh(l,s);return v==null?null:{location:{pathname:v,search:u,hash:d,state:f,key:m},navigationType:o}},[s,l,u,d,f,m,o]);return g==null?null:T.createElement(ri.Provider,{value:c},T.createElement(Su.Provider,{children:n,value:g}))}new Promise(()=>{});/**
 * React Router DOM v6.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lc(){return lc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lc.apply(this,arguments)}function yy(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function xy(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function wy(e,t){return e.button===0&&(!t||t==="_self")&&!xy(e)}const ky=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],by="startTransition",uf=al[by];function Sy(e){let{basename:t,children:n,future:r,window:o}=e,i=T.useRef();i.current==null&&(i.current=ty({window:o,v5Compat:!0}));let a=i.current,[s,c]=T.useState({action:a.action,location:a.location}),{v7_startTransition:l}=r||{},u=T.useCallback(d=>{l&&uf?uf(()=>c(d)):c(d)},[c,l]);return T.useLayoutEffect(()=>a.listen(u),[a,u]),T.createElement(vy,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a})}const Cy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ey=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Eu=T.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:s,target:c,to:l,preventScrollReset:u,unstable_viewTransition:d}=t,f=yy(t,ky),{basename:m}=T.useContext(ri),g,v=!1;if(typeof l=="string"&&Ey.test(l)&&(g=l,Cy))try{let y=new URL(window.location.href),w=l.startsWith("//")?new URL(y.protocol+l):new URL(l),b=Rh(w.pathname,m);w.origin===y.origin&&b!=null?l=b+w.search+w.hash:v=!0}catch{}let k=uy(l,{relative:o}),h=_y(l,{replace:a,state:s,target:c,preventScrollReset:u,relative:o,unstable_viewTransition:d});function p(y){r&&r(y),y.defaultPrevented||h(y)}return T.createElement("a",lc({},f,{href:g||k,onClick:v||i?r:p,ref:n,target:c}))});var df;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(df||(df={}));var ff;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ff||(ff={}));function _y(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:s}=t===void 0?{}:t,c=dy(),l=Cu(),u=Dh(e,{relative:a});return T.useCallback(d=>{if(wy(d,n)){d.preventDefault();let f=r!==void 0?r:ka(l)===ka(u);c(e,{replace:f,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:s})}},[l,c,u,r,o,n,e,i,a,s])}const jy=j.div`
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
`,Ty=j.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  padding: 20px 4px;
  z-index: 1;
`,Py=j(Eu)`
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
`;const $y=j.ul`
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
`,Oy=j.a`
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
`,pf=j.a`
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
`,Ry=j.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`,Ay=j.div`
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
`,zy=j.div`
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
`;j(Eu)`
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
`;const Iy=j.a`
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
`;j(Eu)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;const mf=j.span`
  height: 20px;
  margin-left: 5px;
`,Ny=j.button`
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

`,My=j.option`
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
`,Ly=j.select`
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
  
`,Dy=[{code:"en",label:"English"},{code:"pt",label:"Português"}],Y={pt:{name:"Kauan Vidigal",functions:"Programador de software | Full Stack | Java, Mysql, React js | Freelance",roles:["Seja Bem Vindo!","Sou um desenvolvedor Full-Stack"],description:`Me chamo Kauan Vidigal, sou um desenvolvedor Full-Stack autodidata em constante busca pela excelência tecnológica. Comprometido em solidificar minha expertise, almejo a obtenção de um diploma em Ciência da Computação. Desde a infância, explorei sistemas operacionais, incluindo Windows XP, Windows 7 e Kali Linux, e, a partir de 2014, direcionei meu foco para a programação.

Tenho uma afinidade especial por Java e Programação Orientada a Objetos. Como profissional autônomo, especializo-me em consultorias de TI e no desenvolvimento de sites para empresas. Utilizo tecnologias como PHP, Laravel, React ou Vue, e Vite, para criar soluções eficientes e seguras. Meu enfoque principal está no desenvolvimento de aplicações web responsivas, personalizadas de acordo com as necessidades específicas dos clientes.

Estou aberto a colaborações e desafios que impulsionem meu crescimento profissional. Se houver interesse em discutir parcerias ou obter mais informações, estou à disposição para uma conversa mais detalhada.`,Modelight:"Claro",Modedark:"Escuro",nav:{home:"Início",skills:"Competências",experience:"Experiência",projects:"Projetos",education:"Educação",contact:"Contato",about:"Sobre"},skillsAll:{title:"Ferramentas que Uso:",desc:`Desde 2014, tenho dedicado meu tempo ao estudo e aprimoramento no campo do desenvolvimento Full-Stack. Ao longo dessa jornada, adquiri conhecimentos que incluem tecnologias mais antigas, as quais, embora possam não ser tão prevalentes no mercado atual, proporcionaram uma base sólida.

A essência dessa experiência está na compreensão profunda de conceitos essenciais, o que se tornou um trunfo ao explorar e absorver novas tecnologias. Esse background robusto não apenas facilita a adaptação a novas ferramentas e tendências, mas também oferece uma perspectiva valiosa ao enfrentar desafios inovadores.

No back-end, especializo-me em Java P.O.O, MySQL, MariaDB, Node.js, PHP, e Laravel. No front-end, concentro-me em React.js e Vite ou Vue, visando criar interfaces modernas e responsivas. Esta trajetória não apenas destaca minha capacidade de evoluir com as demandas do mercado, mas também reflete meu compromisso contínuo com o aprendizado e crescimento profissional. Estou aberto a colaborações e ansioso para explorar oportunidades que contribuam para meu desenvolvimento profissional.`,info:[{subtitle:"Linguagens de programação:",skills:[{name:"Java",date:"3 anos",link:"https://www.oracle.com/java/technologies/downloads/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"},{name:"Php",date:"7 anos",link:"https://www.php.net",image:"https://www.php.net/favicon.ico?v=2"},{name:"Javascript",date:"7 anos",link:"https://www.javascript.com",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"},{name:"Typescript",date:"4 anos",link:"https://www.typescriptlang.org",image:"https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae"}]},{subtitle:"Desenvolvimento Front-end:",skills:[{name:"HTML",date:"7 anos",link:"https://www.w3schools.com/html/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"},{name:"CSS",date:"7 anos",link:"https://www.w3schools.com/Css/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"},{name:"React js",date:"5 anos",link:"https://react.dev/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"},{name:"Tailwind",date:"5 anos",link:"https://tailwindcss.com/",image:"https://tailwindcss.com/favicons/apple-touch-icon.png?v=3"},{name:"Styled",date:"5 anos",link:"https://styled-components.com/",image:"https://styled-components.com/favicon.png"},{name:"Bootstrap",date:"5 anos",link:"https://getbootstrap.com/",image:"https://getbootstrap.com/docs/5.3/assets/img/favicons/apple-touch-icon.png"},{name:"SASS",date:"5 anos",link:"https://sass-lang.com/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"},{name:"Vue",date:"4 anos",link:"https://vuejs.org/",image:"https://br.vuejs.org/images/icons/apple-icon-57x57.png"}]},{subtitle:"Desenvolvimento de back-end:",skills:[{name:"Node.js",date:"5 anos",category:"JavaScript server-side",link:"https://nodejs.org/en/download/",image:"https://nodejs.org/static/images/favicons/favicon.png"},{name:"IIS",date:"7 anos",category:"Web servers",link:"https://www.microsoft.com/pt-BR/download/details.aspx?id=48264",image:"https://www.microsoft.com/favicon.ico?v2"},{name:"Apache HTTP Server",date:"7 anos",category:"Web servers",link:"https://apache.org/",image:"https://apache.org/favicons/apple-touch-icon-57x57.png"},{name:"Apache Tomcat",date:"7 anos",category:"Web servers",link:"https://tomcat.apache.org/",image:"https://tomcat.apache.org/res/images/tomcat.png"},{name:"Nginx",date:"5 anos",category:"Web servers",link:"https://nginx.org/en/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg"},{name:"Xamp",date:"7 anos",category:"Pacotes de Servidores",link:"https://www.apachefriends.org/download.html",image:"https://www.apachefriends.org/images/favicon-18f9bd42.png"},{name:"Wamp",date:"7 anos",category:"Pacotes de Servidores",link:"https://wampserver.aviatechno.net/",image:"https://wampserver.aviatechno.net/css/favicon.ico"}]},{subtitle:"Base de dados:",skills:[{name:"Mysql",date:"5 anos",link:"https://www.mysql.com/",image:"https://labs.mysql.com/common/themes/sakila/favicon.ico"},{name:"Postgresql",date:"3 anos",link:"https://www.postgresql.org/",image:"https://www.postgresql.org/media/img/about/press/elephant.png"},{name:"MongoDB",date:"3 anos",link:"https://www.mongodb.com/",image:"https://www.mongodb.com/assets/images/global/favicon.ico"},{name:"Mariadb",date:"5 anos",link:"https://mariadb.org/",image:"https://mariadb.org/wp-content/uploads/2019/02/cropped-mariadb_org_rgb_r_512-1-32x32.png"}]},{subtitle:"Ambiente de trabalho remoto:",skills:[{name:"Anydesk",date:"4 anos",link:"https://anydesk.com/",image:"https://s3.amazonaws.com//beta-img.b2bstack.net/uploads/production/product/product_image/16462/anydesk.jpg"},{name:"TeamViewer",date:"4 anos",link:"https://www.teamviewer.com/",image:"https://www.teamviewer.com/etc.clientlibs/teamviewer/clientlibs/clientlib-resources/resources/favicon.png"}]},{subtitle:"Cloud:",skills:[{name:"Aws",date:"2 anos",link:"https://aws.amazon.com/pt/free/",image:"https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_179x109.png"},{name:"Cloud",date:"4 anos",link:"https://cloud.google.com/",image:"https://www.gstatic.com/devrel-devsite/prod/v0d244f667a3683225cca86d0ecf9b9b81b1e734e55a030bdcd3f3094b835c987/cloud/images/favicons/onecloud/favicon.ico"},{name:"Oracle Cloud",date:"2 anos",link:"https://www.oracle.com/br/cloud/",image:"https://www.oracle.com/asset/web/favicons/favicon-32.png"},{name:"Azure",date:"2 anos",link:"https://portal.azure.com",image:"https://th.bing.com/th/id/R.07ca8cd025969f66c65611df5aabcf43?rik=E0aGesKhIOc3mg&pid=ImgRaw&r=0"}]},{subtitle:"Hosting:",skills:[{name:"Contabo",date:"3 anos",link:"https://contabo.com/en/",image:"https://contabo.com/assets/favicon.png"},{name:"Cloudflare",date:"3 anos",link:"https://www.cloudflare.com/",image:"https://cf-assets.www.cloudflare.com/slt3lc6tev37/53qCYhQbir5WtIU0VDWESo/954a48bfb17f429acf469e5f14345d83/unnamed-3.png"}]},{subtitle:"Gerenciamento de Dependências:",skills:[{name:"Npm",date:"5 anos",category:"JavaScript",link:"https://www.npmjs.com/",image:"https://static-production.npmjs.com/58a19602036db1daee0d7863c94673a4.png"},{name:"Yarn",date:"5 anos",category:"JavaScript",link:"https://yarnpkg.com/",image:"https://yarnpkg.com/img/yarn-favicon.svg"},{name:"Composer",date:"3 anos",category:"PHP",link:"https://getcomposer.org/",image:"https://getcomposer.org/img/logo-composer-transparent5.png"},{name:"Maven",date:"3 anos",category:"Java",link:"https://mvnrepository.com/",image:"https://mvnrepository.com/assets/images/7080b8b0f6f48e6fbaffd5f9d85fcc7f-favicon.ico"}]},{subtitle:"Framework:",skills:[{name:"Electron",date:"2 anos",category:"React, Vue",link:"https://www.electronjs.org",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg"},{name:"Laravel",date:"3 anos",category:"PHP",link:"https://laravel.com",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg"},{name:"Spring",date:"3 anos",category:"Java, JS/TS:APIs RESTful",link:"https://spring.io",image:"https://www.vectorlogo.zone/logos/springio/springio-icon.svg"},{name:"Next.js",date:"2 anos",category:"React, Vue",link:"https://nextjs.org",image:"https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail-1.png"},{name:"Vite.js",date:"4 anos",category:"React, Vue",link:"https://vitejs.dev/",image:"https://vitejs.dev/logo.svg"},{name:"Slim",date:"2 anos",category:"PHP",link:"https://www.slimframework.com/",image:"https://www.slimframework.com/assets/images/favicon.png"}]},{subtitle:"IDE:",skills:[{name:"sublime text",category:"2014 até 2018",link:"https://www.sublimetext.com/3",image:"https://www.sublimetext.com/favicon.ico"},{name:"Atom",category:"2014 até 2018",link:"https://atom-editor.cc/",image:"https://atom-editor.cc/favicon.ico"},{name:"Eclipse",category:"2014 até 2018",link:"https://eclipseide.org/",image:"https://eclipseide.org/favicon.ico"},{name:"IntelliJ IDEA",date:"3 anos",link:"https://www.jetbrains.com/idea/buy/?section=commercial&billing=yearly",image:"https://upload.wikimedia.org/wikipedia/commons/9/9c/IntelliJ_IDEA_Icon.svg"},{name:"VSCode",date:"5 anos",link:"https://code.visualstudio.com/",image:"https://code.visualstudio.com/apple-touch-icon.png"},{name:"WebStorm",date:"4 anos",link:"https://www.jetbrains.com/webstorm/",image:"https://logonoid.com/images/webstorm-logo.png"}]},{subtitle:"Controle de Versão:",skills:[{name:"Git",date:"4 anos",link:"https://git-scm.com/downloads",image:"https://git-scm.com/favicon.ico"},{name:"GitLab",date:"4 anos",link:"https://gitlab.com/",image:"https://gitlab.com/assets/favicon-72a2cad5025aa931d6ea56c3201d1f18e68a8cd39788c7c80d5b2b82aa5143ef.png"},{name:"Git-hub",date:"3 anos",link:"https://github.com/Vidigal-code",image:"https://github.com/fluidicon.png"}]},{subtitle:"Sistema Operacionais:",skills:[{name:"Linux",date:"7 anos",link:"https://www.linux.org/pages/download/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"},{name:"Ubuntu",date:"3 anos",link:"https://ubuntu.com/download",image:"https://assets.ubuntu.com/v1/17b68252-apple-touch-icon-180x180-precomposed-ubuntu.png"},{name:"Kali",date:"5 anos",link:"https://www.kali.org/get-kali/#kali-platforms",image:"https://www.kali.org/images/kali-logo.svg"},{name:"Windows",date:"12 anos",link:"https://www.microsoft.com/software-download/windows11",image:"https://aadcdn.msftauth.net/shared/1.0/content/images/favicon_a_eupayfgghqiai7k9sol6lg2.ico"}]},{subtitle:"Outros:",skills:[{name:"Virtualbox",date:"6 anos",link:"https://www.virtualbox.org/",image:"https://www.virtualbox.org/favicon.ico"},{name:"NaviCat",date:"5 anos",link:"https://www.navicat.com/en",image:"https://www.navicat.com/images/Navicat_16_Premium_win_256x256.ico"}]}]},experiences:{title:"Experiência",desc:`Gostaria de compartilhar um pouco sobre minha trajetória até o momento e expressar meu interesse em ingressar no mercado de trabalho. Atualmente, conto com 20 anos de idade e embora minha jornada profissional ainda não tenha experiências formais em empresas, venho me dedicando ativamente ao campo da programação desde 2014, quando iniciei meus estudos aos 12 anos.

O fato de ter ingressado tão cedo neste setor trouxe consigo desafios, principalmente no que diz respeito à obtenção de oportunidades formais. Já aos 16 anos, busquei participar de processos seletivos em empresas, mesmo obtendo sucesso nas entrevistas, não obtive as oportunidades almejadas.

Contudo, isso não me desmotivou. Paralelamente, explorei o campo do freelancing, realizando trabalhos autônomos desde 2020 e obtendo resultados satisfatórios. Esta experiência tem sido enriquecedora, permitindo-me desenvolver minhas habilidades e contribuir efetivamente em projetos diversos.

Neste momento, busco ativamente especializar-me ainda mais, aprimorando minhas competências técnicas e práticas, com o objetivo de ingressar no mercado de trabalho formal. Estou confiante de que minha dedicação e experiência acumulada ao longo dos anos serão valiosas para contribuir de maneira significativa em um ambiente profissional.`,info:[{id:0,img:"",role:"Desenvolvedor de software",company:"",date:"jan de 2020 - o momento · 3 anos 11 meses",desc:"Como profissional autônomo, especializo-me em consultorias de TI e no desenvolvimento de sites para empresas. Utilizo tecnologias como PHP, Laravel, React ou Vue, e Vite, para criar soluções eficientes e seguras. Meu enfoque principal está no desenvolvimento de aplicações web responsivas, personalizadas de acordo com as necessidades específicas dos clientes. Estou aberto a colaborações e desafios que impulsionem meu crescimento profissional. Se houver interesse em discutir parcerias ou obter mais informações, estou à disposição para uma conversa mais detalhada.",skillsFreeLancerTitle:"Serviços prestados:",skillsFreeLancer:["Desenvolvimento web","Suporte técnico","Suporte de redes","Desenvolvimento de software personalizado"],skillsTitle:"Habilidades",skills:["Node.js","React.js","Vue.js","Php","Java","Mysql","Mariadb","Laravel"],doc:""}]},projects:{nav:{ProjectAll:"Todos",ProjectWeb:"Web",Bootcamp:"Bootcamp"},buttonGitHubTitle:"Ver código",buttonWebappTitle:"Ver aplicação em direto",title:"Projetos",desc:"Já trabalhei numa vasta gama de projectos. Desde aplicações web a aplicações android. Aqui estão alguns dos meus projectos.",info:[{id:1,title:"Bootcamp-Orange-Tech",date:"Jan 1, 2022",description:"Orange tech + front-end and back-end development aims to really prepare for the best jobs in the technology market. Banco Inter, in partnership with DIO, which will address JavaScript, HTML, CSS, Typescript and React technologies from the beginning.",image:"https://github.com/Vidigal-code/Bootcamp-Orange-Tech/raw/main/Pokedex-OrangeTech/assets/img/Project%20Image/Pokedex.gif",tags:["React.Js","HTML","Node.Js","Typescript","Javascript","Css"],category:"bootcamp",github:"https://github.com/Vidigal-code/Bootcamp-Orange-Tech",webapp:"https://vidigal-code.github.io/Bootcamp-Orange-Tech/Pokedex-OrangeTech/index.html"}]},education:{title:"Educação",desc:`
Desde 2014, mantenho um compromisso autodidata, participando ativamente de cursos em renomadas plataformas educacionais, como Udemy, Coursera, Rocketseat e Digital Innovation One (DIO). Esse empenho constante em busca de conhecimento resultou na obtenção de certificados relevantes que atestam minha competência e dedicação.

Segue abaixo alguns dos cursos e certificações que adquiri ao longo da minha trajetória profissional:`,info:[{id:0,img:"https://media.licdn.com/dms/image/D4D0BAQFXVD-G0bC6og/company-logo_200_200/0/1698864015822/estacio_logo?e=1709164800&v=beta&t=vRqmmvvsYKvdcLS4dFFzuU2WqiFlPz_ysU5Cyvz7CYo",school:"Estácio",curseMoment:"Cursando - Universidade",curseLink:"https://estacio.br/",curseTitle:"Clique Aqui",gradetitle:"",gradevalue:"",linkIcon:"https://estacio.br/",CertificateLink:"",CertificateTitle:"",CertificateImg:"",date:"mai de 2023 - fev de 2026",desc:`Meu nome é Kauan Vidigal estou cursando Ciência da Computação. Desde criança, sempre fui fascinado pelo mundo da tecnologia e computadores. A medida que crescia, essa paixão se intensificava, levando-me a escolher a Ciência da Computação como minha área de estudo e carreira.

Uma das principais razões pelas quais me dediquei a essa área é a sua constante evolução e inovação. A tecnologia está em constante mudança, e a Ciência da Computação me proporciona um ambiente desafiador e estimulante para acompanhar essas transformações. A cada dia, novas tecnologias e técnicas surgem, criando oportunidades empolgantes para resolver problemas complexos e melhorar a vida das pessoas.`,degree:"Bacharelado, Ciência da Computação"},{id:1,img:"https://hermes.digitalinnovation.one/tracks/59417914-c4ce-4bf8-b802-f1c1985a07fa.png",school:"DIO",curseMoment:"Bootcamp + Orange Tech - Front-End",curseLink:"https://www.dio.me/certificate/3820E485/share",curseTitle:"Clique Aqui",gradetitle:"",gradevalue:"",linkIcon:"https://www.dio.me/",CertificateLink:"https://www.dio.me/certificate/3820E485/share",CertificateTitle:"Certificado",CertificateImg:"https://hermes.digitalinnovation.one/certificates/cover/3820E485.jpg",date:"16 de dez, concluído",desc:"",degree:"Curso de Desenvolvimento de front-end"},{id:2,img:"https://media.licdn.com/dms/image/C4E0BAQFdNatYGiBelg/company-logo_200_200/0/1636138754252/facebook_logo?e=1709164800&v=beta&t=vXtoEUrenbRmLYXp8CHmRntX8juyN5kjnpM1VSBftyk",school:"Meta",curseMoment:"Programa de cursos integrados: Meta Front-End Developer",curseLink:"https://www.coursera.org/account/accomplishments/specialization/certificate/BFEF34UKVQD3",curseTitle:"Clique Aqui",gradetitle:"",gradevalue:"",linkIcon:"https://www.coursera.org/professional-certificates/meta-front-end-developer?",CertificateLink:"https://www.coursera.org/account/accomplishments/specialization/certificate/BFEF34UKVQD3",CertificateTitle:"Certificado",CertificateImg:"https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~BFEF34UKVQD3/CERTIFICATE_LANDING_PAGE~BFEF34UKVQD3.jpeg",date:"Mar 26, 2023, concluído",desc:"",degree:"Curso de Desenvolvimento de front-end"},{id:3,img:"https://media.licdn.com/dms/image/C4E0BAQGXW0yOhYBbCg/company-logo_200_200/0/1630580881875/duke_university_logo?e=1709164800&v=beta&t=cMNzBpsjAxWNzparYQ3yoq2EwRHSny-jg4ihxbD9qYc",school:"Duke University ",curseMoment:"Fundamentos de programação Java e engenharia de software",curseLink:"https://www.coursera.org/account/accomplishments/specialization/certificate/BFEF34UKVQD3",curseTitle:"Clique Aqui",gradetitle:"",gradevalue:"",linkIcon:"https://www.coursera.org/specializations/java-programming",CertificateLink:"https://www.coursera.org/account/accomplishments/specialization/certificate/4V8H29UZHPG7",CertificateTitle:"Certificado",CertificateImg:"https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~4V8H29UZHPG7/CERTIFICATE_LANDING_PAGE~4V8H29UZHPG7.jpeg",date:"Nov 14, 2022, concluído",desc:"",degree:"Curso Sobre a linguagem Java"}]},contact:{title:"Contato",desc:"Estou à disposição para esclarecimentos, sugestões ou para discutir possíveis oportunidades de colaboração. Sua participação é fundamental para contribuir para nosso contínuo crescimento. Por favor, não hesite em entrar em contato comigo. Agradeço antecipadamente pela consideração e estou ansioso(a) para possíveis interações produtivas.",emailtile:"Enviar-me um e-mail",emailyourtile:"O seu e-mail",emailyourname:"O seu nome",subject:"Assunto",message:"Messagem",submit:"Enviar",submitsuccess:"Messagem Enviada com Sucesso!"},about:{title:"Sobre",desc:"Meu nome é Kauan Vidigal, tenho 20 anos sou de SP/Brasil",linkheaderimg:"https://raw.githubusercontent.com/Vidigal-code/React-portfolio/c8f45e97e3d4549213aa29205881a3d76fb81434/src/images/header-img.svg",bannerimg:"",userimg:"https://raw.githubusercontent.com/Vidigal-code/React-portfolio/main/src/images/Vidigal.jpg"},location:{countries:"Brasil / São Paulo"},GithubLinkTitle:"Github",GithubLink:"https://github.com/Vidigal-code",ResumeTitle:"Currículo",ResumeLink:"https://drive.google.com/file/d/15TvlJtoquDA8SpwteGkFJxnGUcP3FYyF/view",homelinkimg:"https://raw.githubusercontent.com/Vidigal-code/React-portfolio/main/src/images/Home.gif",linkedin:"https://www.linkedin.com/in/kauan-vidigal/",twitter:"",insta:"",facebook:""},en:{name:"Kauan Vidigal",functions:"Software developer | Full Stack | Java, Mysql, React js | Freelance",roles:["Welcome!","I'm a full-stack developer"],description:`My name is Kauan Vidigal, I'm a self-taught Full-Stack developer in constant pursuit of technological excellence. Committed to solidifying my expertise, I aim to obtain a degree in Computer Science. Since childhood, I've explored operating systems, including Windows XP, Windows 7 and Kali Linux, and since 2014, I've focused on programming.

I have a special affinity for Java and Object-Oriented Programming. As a self-employed professional, I specialize in IT consultancy and website development for companies. I use technologies such as PHP, Laravel, React or Vue, and Vite, to create efficient and secure solutions. My main focus is on developing responsive web applications, customized according to clients' specific needs.

I'm open to collaborations and challenges that boost my professional growth. If you are interested in discussing partnerships or obtaining more information, I am available for a more detailed conversation.`,Modelight:"Light",Modedark:"Dark",nav:{home:"Home",skills:"Skills",experience:"Experience",projects:"Projects",education:"Education",contact:"Contact",about:"About"},skillsAll:{title:"Tools I use:",desc:`Since 2014, I have dedicated my time to studying and improving in the field of Full-Stack development. Throughout this journey, I have acquired knowledge that includes older technologies, which, although they may not be as prevalent in today's market, have provided a solid foundation.

The essence of this experience lies in the deep understanding of essential concepts, which has become an asset when exploring and absorbing new technologies. This robust background not only makes it easier to adapt to new tools and trends, but also provides a valuable perspective when facing innovative challenges.

On the back-end, I specialize in Java P.O.O, MySQL, MariaDB, Node.js, PHP, and Laravel. On the front-end, I focus on React.js and Vite or Vue, with the aim of creating modern, responsive interfaces. This background not only highlights my ability to evolve with the demands of the market, but also reflects my ongoing commitment to learning and professional growth. I am open to collaboration and eager to explore opportunities that contribute to my professional development.`,info:[{subtitle:"Programming languages:",skills:[{name:"Java",date:"3 years",link:"https://www.oracle.com/java/technologies/downloads/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"},{name:"Php",date:"7 years",link:"https://www.php.net",image:"https://www.php.net/favicon.ico?v=2"},{name:"Javascript",date:"7 years",link:"https://www.javascript.com",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"},{name:"Typescript",date:"4 years",link:"https://www.typescriptlang.org",image:"https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae"}]},{subtitle:"Front-end development:",skills:[{name:"HTML",date:"7 years",link:"https://www.w3schools.com/html/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"},{name:"CSS",date:"7 years",link:"https://www.w3schools.com/Css/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"},{name:"React js",date:"5 years",link:"https://react.dev/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"},{name:"Tailwind",date:"5 years",link:"https://tailwindcss.com/",image:"https://tailwindcss.com/favicons/apple-touch-icon.png?v=3"},{name:"Styled",date:"5 years",link:"https://styled-components.com/",image:"https://styled-components.com/favicon.png"},{name:"Bootstrap",date:"5 years",link:"https://getbootstrap.com/",image:"https://getbootstrap.com/docs/5.3/assets/img/favicons/apple-touch-icon.png"},{name:"SASS",date:"5 years",link:"https://sass-lang.com/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"},{name:"Vue",date:"4 years",link:"https://vuejs.org/",image:"https://br.vuejs.org/images/icons/apple-icon-57x57.png"}]},{subtitle:"Back-end development:",skills:[{name:"Node.js",date:"5 years",category:"JavaScript server-side",link:"https://nodejs.org/en/download/",image:"https://nodejs.org/static/images/favicons/favicon.png"},{name:"IIS",date:"7 years",category:"Web servers",link:"https://www.microsoft.com/pt-BR/download/details.aspx?id=48264",image:"https://www.microsoft.com/favicon.ico?v2"},{name:"Apache HTTP Server",date:"7 years",category:"Web servers",link:"https://apache.org/",image:"https://apache.org/favicons/apple-touch-icon-57x57.png"},{name:"Apache Tomcat",date:"7 years",category:"Web servers",link:"https://tomcat.apache.org/",image:"https://tomcat.apache.org/res/images/tomcat.png"},{name:"Nginx",date:"5 years",category:"Web servers",link:"https://nginx.org/en/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg"},{name:"Xamp",date:"7 years",category:"Pacotes de Servidores",link:"https://www.apachefriends.org/download.html",image:"https://www.apachefriends.org/images/favicon-18f9bd42.png"},{name:"Wamp",date:"7 years",category:"Pacotes de Servidores",link:"https://wampserver.aviatechno.net/",image:"https://wampserver.aviatechno.net/css/favicon.ico"}]},{subtitle:"Database:",skills:[{name:"Mysql",date:"5 years",link:"https://www.mysql.com/",image:"https://labs.mysql.com/common/themes/sakila/favicon.ico"},{name:"Postgresql",date:"3 years",link:"https://www.postgresql.org/",image:"https://www.postgresql.org/media/img/about/press/elephant.png"},{name:"MongoDB",date:"3 years",link:"https://www.mongodb.com/",image:"https://www.mongodb.com/assets/images/global/favicon.ico"},{name:"Mariadb",date:"5 years",link:"https://mariadb.org/",image:"https://mariadb.org/wp-content/uploads/2019/02/cropped-mariadb_org_rgb_r_512-1-32x32.png"}]},{subtitle:"Remote working environment:",skills:[{name:"Anydesk",date:"4 years",link:"https://anydesk.com/",image:"https://s3.amazonaws.com//beta-img.b2bstack.net/uploads/production/product/product_image/16462/anydesk.jpg"},{name:"TeamViewer",date:"4 years",link:"https://www.teamviewer.com/",image:"https://www.teamviewer.com/etc.clientlibs/teamviewer/clientlibs/clientlib-resources/resources/favicon.png"}]},{subtitle:"Cloud:",skills:[{name:"Aws",date:"2 years",link:"https://aws.amazon.com/pt/free/",image:"https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_179x109.png"},{name:"Cloud",date:"4 years",link:"https://cloud.google.com/",image:"https://www.gstatic.com/devrel-devsite/prod/v0d244f667a3683225cca86d0ecf9b9b81b1e734e55a030bdcd3f3094b835c987/cloud/images/favicons/onecloud/favicon.ico"},{name:"Oracle Cloud",date:"2 anos",link:"https://www.oracle.com/br/cloud/",image:"https://www.oracle.com/asset/web/favicons/favicon-32.png"},{name:"Azure",date:"2 anos",link:"https://portal.azure.com",image:"https://th.bing.com/th/id/R.07ca8cd025969f66c65611df5aabcf43?rik=E0aGesKhIOc3mg&pid=ImgRaw&r=0"}]},{subtitle:"Hosting:",skills:[{name:"Contabo",date:"3 years",link:"https://contabo.com/en/",image:"https://contabo.com/assets/favicon.png"},{name:"Cloudflare",date:"3 years",link:"https://www.cloudflare.com/",image:"https://cf-assets.www.cloudflare.com/slt3lc6tev37/53qCYhQbir5WtIU0VDWESo/954a48bfb17f429acf469e5f14345d83/unnamed-3.png"}]},{subtitle:"Dependency Management:",skills:[{name:"Npm",date:"5 years",category:"JavaScript",link:"https://www.npmjs.com/",image:"https://static-production.npmjs.com/58a19602036db1daee0d7863c94673a4.png"},{name:"Yarn",date:"5 years",category:"JavaScript",link:"https://yarnpkg.com/",image:"https://yarnpkg.com/img/yarn-favicon.svg"},{name:"Composer",date:"3 years",category:"PHP",link:"https://getcomposer.org/",image:"https://getcomposer.org/img/logo-composer-transparent5.png"},{name:"Maven",date:"3 years",category:"Java",link:"https://mvnrepository.com/",image:"https://mvnrepository.com/assets/images/7080b8b0f6f48e6fbaffd5f9d85fcc7f-favicon.ico"}]},{subtitle:"Framework:",skills:[{name:"Electron",date:"2 years",category:"React, Vue",link:"https://www.electronjs.org",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg"},{name:"Laravel",date:"3 years",category:"PHP",link:"https://laravel.com",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg"},{name:"Spring",date:"3 years",category:"Java, JS/TS:APIs RESTful",link:"https://spring.io",image:"https://www.vectorlogo.zone/logos/springio/springio-icon.svg"},{name:"Next.js",date:"2 years",category:"React, Vue",link:"https://nextjs.org",image:"https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail-1.png"},{name:"Vite.js",date:"4 years",category:"React, Vue",link:"https://vitejs.dev/",image:"https://vitejs.dev/logo.svg"},{name:"Slim",date:"2 years",category:"PHP",link:"https://www.slimframework.com/",image:"https://www.slimframework.com/assets/images/favicon.png"}]},{subtitle:"IDE:",skills:[{name:"sublime text",category:"2014 to 2018",link:"https://www.sublimetext.com/3",image:"https://www.sublimetext.com/favicon.ico"},{name:"Atom",category:"2014 to 2018",link:"https://atom-editor.cc/",image:"https://atom-editor.cc/favicon.ico"},{name:"Eclipse",category:"2014 to 2018",link:"https://eclipseide.org/",image:"https://eclipseide.org/favicon.ico"},{name:"IntelliJ IDEA",date:"3 years",link:"https://www.jetbrains.com/idea/buy/?section=commercial&billing=yearly",image:"https://upload.wikimedia.org/wikipedia/commons/9/9c/IntelliJ_IDEA_Icon.svg"},{name:"VSCode",date:"5 years",link:"https://code.visualstudio.com/",image:"https://code.visualstudio.com/apple-touch-icon.png"},{name:"WebStorm",date:"4 years",link:"https://www.jetbrains.com/webstorm/",image:"https://logonoid.com/images/webstorm-logo.png"}]},{subtitle:"Version control:",skills:[{name:"Git",date:"4 years",link:"https://git-scm.com/downloads",image:"https://git-scm.com/favicon.ico"},{name:"GitLab",date:"4 years",link:"https://gitlab.com/",image:"https://gitlab.com/assets/favicon-72a2cad5025aa931d6ea56c3201d1f18e68a8cd39788c7c80d5b2b82aa5143ef.png"},{name:"Git-hub",date:"3 years",link:"https://github.com/Vidigal-code",image:"https://github.com/fluidicon.png"}]},{subtitle:"Operating System:",skills:[{name:"Linux",date:"7 years",link:"https://www.linux.org/pages/download/",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"},{name:"Ubuntu",date:"3 years",link:"https://ubuntu.com/download",image:"https://assets.ubuntu.com/v1/17b68252-apple-touch-icon-180x180-precomposed-ubuntu.png"},{name:"Kali",date:"5 years",link:"https://www.kali.org/get-kali/#kali-platforms",image:"https://www.kali.org/images/kali-logo.svg"},{name:"Windows",date:"12 years",link:"https://www.microsoft.com/software-download/windows11",image:"https://aadcdn.msftauth.net/shared/1.0/content/images/favicon_a_eupayfgghqiai7k9sol6lg2.ico"}]},{subtitle:"Others:",skills:[{name:"Virtualbox",date:"6 years",link:"https://www.virtualbox.org/",image:"https://www.virtualbox.org/favicon.ico"},{name:"NaviCat",date:"5 years",link:"https://www.navicat.com/en",image:"https://www.navicat.com/images/Navicat_16_Premium_win_256x256.ico"}]}]},experiences:{title:"Experience",desc:`I'd like to share a little about my career so far and express my interest in entering the job market. I'm currently 20 years old, and although I haven't had any formal experience in companies, I've been actively working in the field of programming since 2014, when I started studying at the age of 12

The fact that I entered this sector so early brought with it challenges, especially in terms of obtaining formal opportunities. When I was 16, I tried to take part in selection processes at companies, but even though I was successful in the interviews, I didn't get the opportunities I wanted.

However, this didn't put me off. At the same time, I explored the field of freelancing, doing independent work since 2020 and getting satisfactory results. This experience has been enriching, allowing me to develop my skills and contribute effectively to various projects.

At the moment, I am actively seeking to specialize even more, improving my technical and practical skills, with the aim of entering the formal job market. I am confident that the dedication and experience I have accumulated over the years will be invaluable in making a significant contribution in a professional environment.`,info:[{id:0,img:"",role:"Desenvolvedor de software",company:"",date:"Jan 2020 - currently - 3 years 11 months",desc:"As a self-employed professional, I specialize in IT consultancy and website development for companies. I use technologies such as PHP, Laravel, React or Vue, and Vite, to create efficient and secure solutions. My main focus is on developing responsive web applications, customized to the specific needs of clients. I am open to collaborations and challenges that will boost my professional growth. If you are interested in discussing partnerships or obtaining more information, I am available for a more detailed conversation.",skillsFreeLancerTitle:"Services provided:",skillsFreeLancer:["Web development","Technical support","Network support","Custom software development"],skillsTitle:"Skills",skills:["Node.js","React.js","Vue.js","Php","Java","Mysql","Mariadb","Laravel"],doc:""}]},education:{title:"Education",desc:`
Since 2014, I have maintained a self-taught commitment, actively participating in courses on renowned educational platforms such as Udemy, Coursera, Rocketseat and Digital Innovation One (DIO). This constant commitment to the pursuit of knowledge has resulted in me obtaining relevant certificates that attest to my competence and dedication.

Below are some of the courses and certifications I have acquired throughout my professional career:`,info:[{id:0,img:"https://media.licdn.com/dms/image/D4D0BAQFXVD-G0bC6og/company-logo_200_200/0/1698864015822/estacio_logo?e=1709164800&v=beta&t=vRqmmvvsYKvdcLS4dFFzuU2WqiFlPz_ysU5Cyvz7CYo",school:"Estácio",curseMoment:"Studying - University",curseLink:"https://estacio.br/",curseTitle:"Click here",gradetitle:"",gradevalue:"",linkIcon:"https://estacio.br/",CertificateLink:"",CertificateTitle:"",CertificateImg:"",date:"May 2023 - Feb 2026",desc:`My name is Kauan Vidigal and I'm studying Computer Science. Ever since I was a child, I've always been fascinated by the world of technology and computers. As I grew up, this passion intensified, leading me to choose Computer Science as my area of study and career.

One of the main reasons I dedicated myself to this area is its constant evolution and innovation. Technology is constantly changing, and Computer Science provides me with a challenging and stimulating environment to keep up with these transformations. Every day, new technologies and techniques emerge, creating exciting opportunities to solve complex problems and improve people's lives.`,degree:"Bachelor, Computer Science"},{id:1,img:"https://hermes.digitalinnovation.one/tracks/59417914-c4ce-4bf8-b802-f1c1985a07fa.png",school:"DIO",curseMoment:"Bootcamp + Orange Tech - Front-End",curseLink:"https://www.dio.me/certificate/3820E485/share",curseTitle:"Click here",gradetitle:"",gradevalue:"",linkIcon:"https://www.dio.me/",CertificateLink:"https://www.dio.me/certificate/3820E485/share",CertificateTitle:"Certificate",CertificateImg:"https://hermes.digitalinnovation.one/certificates/cover/3820E485.jpg",date:"Dec 16th, completed",desc:"",degree:"Front-end development course"},{id:2,img:"https://media.licdn.com/dms/image/C4E0BAQFdNatYGiBelg/company-logo_200_200/0/1636138754252/facebook_logo?e=1709164800&v=beta&t=vXtoEUrenbRmLYXp8CHmRntX8juyN5kjnpM1VSBftyk",school:"Meta",curseMoment:"Integrated course program: Meta Front-End Developer",curseLink:"https://www.coursera.org/account/accomplishments/specialization/certificate/BFEF34UKVQD3",curseTitle:"Click here",gradetitle:"",gradevalue:"",linkIcon:"https://www.coursera.org/professional-certificates/meta-front-end-developer?",CertificateLink:"https://www.coursera.org/account/accomplishments/specialization/certificate/BFEF34UKVQD3",CertificateTitle:"Certificate",CertificateImg:"https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~BFEF34UKVQD3/CERTIFICATE_LANDING_PAGE~BFEF34UKVQD3.jpeg",date:"Mar 26, 2023, completed",desc:"",degree:"Front-end development course"},{id:3,img:"https://media.licdn.com/dms/image/C4E0BAQGXW0yOhYBbCg/company-logo_200_200/0/1630580881875/duke_university_logo?e=1709164800&v=beta&t=cMNzBpsjAxWNzparYQ3yoq2EwRHSny-jg4ihxbD9qYc",school:"Duke University ",curseMoment:"Java programming fundamentals and software engineering",curseLink:"https://www.coursera.org/account/accomplishments/specialization/certificate/BFEF34UKVQD3",curseTitle:"Click here",gradetitle:"",gradevalue:"",linkIcon:"https://www.coursera.org/specializations/java-programming",CertificateLink:"https://www.coursera.org/account/accomplishments/specialization/certificate/4V8H29UZHPG7",CertificateTitle:"Certificate",CertificateImg:"https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~4V8H29UZHPG7/CERTIFICATE_LANDING_PAGE~4V8H29UZHPG7.jpeg",date:"Nov 14, 2022, completed",desc:"",degree:"Java Language Course"}]},projects:{nav:{ProjectAll:"All",ProjectWeb:"Web",Bootcamp:"Bootcamp"},buttonGitHubTitle:"See code",buttonWebappTitle:"See the application live",title:"Projects",desc:"I've worked on a wide range of projects. From web applications to android applications. Here are some of my projects.",info:[{id:1,title:"Bootcamp-Orange-Tech",date:"Jan 1, 2022",description:"Orange tech + front-end and back-end development aims to really prepare for the best jobs in the technology market. Banco Inter, in partnership with DIO, which will address JavaScript, HTML, CSS, Typescript and React technologies from the beginning.",image:"https://github.com/Vidigal-code/Bootcamp-Orange-Tech/raw/main/Pokedex-OrangeTech/assets/img/Project%20Image/Pokedex.gif",tags:["React.Js","HTML","Node.Js","Typescript","Javascript","Css"],category:"bootcamp",github:"https://github.com/Vidigal-code/Bootcamp-Orange-Tech",webapp:"https://vidigal-code.github.io/Bootcamp-Orange-Tech/Pokedex-OrangeTech/index.html"}]},contact:{title:"Contact",desc:"I am at your disposal for clarifications, suggestions or to discuss possible collaboration opportunities. Your participation is essential to contribute to our continued growth. Please do not hesitate to contact me. Thank you in advance for your consideration and I look forward to possible productive interactions.",emailtile:"Send me an email",emailyourtile:"Your email",emailyourname:"Your name",subject:"Subject",message:"Message",submit:"Send",submitsuccess:"Message Sent Successfully!"},about:{title:"About",desc:"My name is Kauan Vidigal, I'm 20 years old from SP/Brazil",linkheaderimg:"https://raw.githubusercontent.com/Vidigal-code/React-portfolio/c8f45e97e3d4549213aa29205881a3d76fb81434/src/images/header-img.svg",bannerimg:"",userimg:"https://raw.githubusercontent.com/Vidigal-code/React-portfolio/main/src/images/Vidigal.jpg"},location:{countries:"Brazil / São Paulo"},GithubLinkTitle:"Github",GithubLink:"https://github.com/Vidigal-code",ResumeTitle:"Resume",ResumeLink:"https://drive.google.com/file/d/15TvlJtoquDA8SpwteGkFJxnGUcP3FYyF/view",homelinkimg:"https://raw.githubusercontent.com/Vidigal-code/React-portfolio/main/src/images/Home.gif",linkedin:"https://www.linkedin.com/in/kauan-vidigal/",twitter:"",insta:"",facebook:""}},Uh=T.createContext(),Fy=({children:e})=>{const[t,n]=T.useState("pt"),r=o=>{n(o)};return x.jsx(Uh.Provider,{value:{selectedLanguage:t,handleLanguageChange:r},children:e})},Mt=()=>T.useContext(Uh),Vh=T.createContext(),By=({children:e})=>{const[t,n]=T.useState(!0),r=()=>{n(o=>!o)};return x.jsx(Vh.Provider,{value:{isDarkMode:t,toggleDarkMode:r},children:e})},rr=()=>T.useContext(Vh);var Hh={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},hf=je.createContext&&je.createContext(Hh),Tn=function(){return Tn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Tn.apply(this,arguments)},Uy=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function Wh(e){return e&&e.map(function(t,n){return je.createElement(t.tag,Tn({key:n},t.attr),Wh(t.child))})}function Kt(e){return function(t){return je.createElement(Vy,Tn({attr:Tn({},e.attr)},t),Wh(e.child))}}function Vy(e){var t=function(n){var r=e.attr,o=e.size,i=e.title,a=Uy(e,["attr","size","title"]),s=o||n.size||"1em",c;return n.className&&(c=n.className),e.className&&(c=(c?c+" ":"")+e.className),je.createElement("svg",Tn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:c,style:Tn(Tn({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&je.createElement("title",null,i),e.children)};return hf!==void 0?je.createElement(hf.Consumer,null,function(n){return t(n)}):t(Hh)}function Hy(e){return Kt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M7 11L7 13H17V11H7Z",fill:"currentColor"}},{tag:"path",attr:{d:"M7.75732 18L9.17154 16.5858L11 18.4143V14H13V18.4142L14.8284 16.5858L16.2426 18L12 22.2427L7.75732 18Z",fill:"currentColor"}},{tag:"path",attr:{d:"M16.2427 5.99996L14.8285 7.41418L13 5.58572V9.99996H11L11 5.58579L9.17161 7.41418L7.75739 5.99996L12 1.75732L16.2427 5.99996Z",fill:"currentColor"}}]})(e)}function Gh(e){return Kt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M14 11H10V13H14V11Z",fill:"currentColor"}},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z",fill:"currentColor"}}]})(e)}function Wy(e){return Kt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"}}]})(e)}function Gy(e){return Kt({tag:"svg",attr:{viewBox:"0 0 480 512"},child:[{tag:"path",attr:{d:"M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"}}]})(e)}function Ky(e){return Kt({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(e)}function Qy(e){return Kt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}}]})(e)}function _u(e){return Kt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(e)}function Yy(e){return Kt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"}}]})(e)}function Xy(e){return Kt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18.36 6.64a9 9 0 1 1-12.73 0"}},{tag:"line",attr:{x1:"12",y1:"2",x2:"12",y2:"12"}}]})(e)}const qy=()=>{const[e,t]=je.useState(!1),n=Jv(),{selectedLanguage:r,handleLanguageChange:o}=Mt(),{isDarkMode:i,toggleDarkMode:a}=rr(),s=[{id:"home",label:Y[r].nav.home},{id:"skills",label:Y[r].nav.skills},{id:"experience",label:Y[r].nav.experience},{id:"projects",label:Y[r].nav.projects},{id:"education",label:Y[r].nav.education},{id:"contact",label:Y[r].nav.contact},{id:"about",label:Y[r].nav.about}];return x.jsx(jy,{children:x.jsxs(Ty,{children:[x.jsxs(Py,{to:"/",children:[x.jsx(Ly,{value:r,onChange:c=>o(c.target.value),isDarkMode:i,children:Dy.map(({code:c,label:l})=>x.jsx(My,{value:c,children:l},c))}),x.jsxs(Ny,{onClick:()=>a(),isDarkMode:i,children:[i?Y[r].Modelight:Y[r].Modedark,x.jsx(mf,{children:x.jsx(Xy,{})})]})]}),x.jsx(Ay,{isDarkMode:i,children:x.jsx(Hy,{onClick:()=>{t(!e)}})}),x.jsx($y,{children:s.map(({id:c,label:l})=>x.jsx(Oy,{isDarkMode:i,href:`#${c}`,children:l},c))}),x.jsx(Ry,{children:x.jsxs(pf,{isDarkMode:i,target:"_blank",href:Y[r].GithubLink,children:[Y[r].GithubLinkTitle,x.jsx(mf,{children:x.jsx(Gy,{})})]})}),e&&x.jsxs(zy,{isDarkMode:i,isOpen:e,children:[s.map(({id:c,label:l})=>x.jsx(Iy,{isDarkMode:i,href:`#${c}`,onClick:()=>{t(!e)},children:l},c)),x.jsx(pf,{style:{padding:"10px 16px",background:`${n.primary}`,color:"white",width:"max-content"},target:"_blank",href:Y[r].GithubLink,children:Y[r].GithubLinkTitle})]})]})})},Jy="/React-portfolio/assets/fam-code-ZXdlobbC.ttf",Zy=j.div`
  width: 600px;
  height: 550px;
`,ex=qv`
  @font-face {
    font-family: 'MatrixFont';
    src: url('${Jy}') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`,tx=j.text`
  font-weight: 500;
  font-family: 'MatrixFont';
  font-style: italic;
  opacity: 0.4;
  fill: ${({theme:e})=>e.text_matrix};
`,gf=()=>({x:Math.random()*602,y:-50,z:Math.random()*10}),vf=[10,20],yf=[5,15,8],nx=()=>{if(Math.random()<.03){const o=["Vidigal-code","Full-stack","Soft Vidigal","Programming"],i=Math.floor(Math.random()*o.length),a=yf[Math.floor(Math.random()*yf.length)];return{text:o[i],fontSize:a}}const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+",n=Math.floor(Math.random()*t.length),r=vf[Math.floor(Math.random()*vf.length)];return{text:t.charAt(n),fontSize:r}},rx=e=>{let t=e.length,n;for(;t!==0;)n=Math.floor(Math.random()*t),t--,[e[t],e[n]]=[e[n],e[t]];return e},ox=(e,t,n)=>{const r=t.x-e.x,o=t.y-e.y,i=Math.sqrt(r*r+o*o),a=r/i,s=o/i,c=a*n,l=s*n;return{x:e.x+c,y:e.y+l}},ix=()=>{const[e,t]=T.useState(Array.from({length:100},gf)),[n,r]=T.useState(!1),o=Array.from({length:100},nx);T.useEffect(()=>{const s=e.map((c,l)=>setInterval(()=>{t(u=>u.map((d,f)=>f===l?ox(d,gf(),5):d))},Math.random()*1e3+500));return()=>{s.forEach(c=>clearInterval(c))}},[e]);const i=()=>{r(!0),t(s=>rx([...s]))},a=()=>{r(!1)};return x.jsxs(x.Fragment,{children:[x.jsx(ex,{}),x.jsx(Zy,{onMouseOver:i,onMouseLeave:a,children:x.jsx("svg",{className:"BgAnimation__svg",viewBox:"0 0 602 602",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.map((s,c)=>{var l,u,d;return x.jsxs(tx,{x:e[c]?e[c].x:0,y:n?Math.random()*602:((l=e[c])==null?void 0:l.y)||0,style:{zIndex:((u=e[c])==null?void 0:u.z)||0,fontSize:`${s.fontSize}px`,transformOrigin:"center center",transform:n?"rotate(360deg)":"rotate(0deg)"},children:[s.text,x.jsx("animate",{attributeName:"y",values:`${((d=e[c])==null?void 0:d.y)||0};602`,dur:"4s",keyTimes:"0;1",begin:`${c*.1}s`,repeatCount:"indefinite"})]},c)})})})]})};j.div`
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
`;const ax=j.div`
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
`,sx=j.div`
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
`,lx=j.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`,cx=j.div`
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
`,ux=j.div`
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
`,dx=j.img`
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
`,fx=j.div`
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
`,px=j.div`
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
`,mx=j.span`
  color: ${({theme:e})=>e.primary};
  cursor: pointer;
`,hx=j.div`
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
`,gx=j.p`
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
`,vx=j.p`
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
`;var Kh={exports:{}};(function(e,t){(function(n,r){e.exports=r(T)})(typeof self<"u"?self:T0,n=>(()=>{var r={7403:(s,c,l)=>{l.d(c,{default:()=>z});var u=l(4087),d=l.n(u);const f=function(I){return new RegExp(/<[a-z][\s\S]*>/i).test(I)},m=function(I,R){return Math.floor(Math.random()*(R-I+1))+I};var g="TYPE_CHARACTER",v="REMOVE_CHARACTER",k="REMOVE_ALL",h="REMOVE_LAST_VISIBLE_NODE",p="PAUSE_FOR",y="CALL_FUNCTION",w="ADD_HTML_TAG_ELEMENT",b="CHANGE_DELETE_SPEED",_="CHANGE_DELAY",E="CHANGE_CURSOR",$="PASTE_STRING",L="HTML_TAG";function P(I){return P=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(R){return typeof R}:function(R){return R&&typeof Symbol=="function"&&R.constructor===Symbol&&R!==Symbol.prototype?"symbol":typeof R},P(I)}function A(I,R){var G=Object.keys(I);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(I);R&&(O=O.filter(function(V){return Object.getOwnPropertyDescriptor(I,V).enumerable})),G.push.apply(G,O)}return G}function D(I){for(var R=1;R<arguments.length;R++){var G=arguments[R]!=null?arguments[R]:{};R%2?A(Object(G),!0).forEach(function(O){U(I,O,G[O])}):Object.getOwnPropertyDescriptors?Object.defineProperties(I,Object.getOwnPropertyDescriptors(G)):A(Object(G)).forEach(function(O){Object.defineProperty(I,O,Object.getOwnPropertyDescriptor(G,O))})}return I}function W(I){return function(R){if(Array.isArray(R))return H(R)}(I)||function(R){if(typeof Symbol<"u"&&R[Symbol.iterator]!=null||R["@@iterator"]!=null)return Array.from(R)}(I)||function(R,G){if(R){if(typeof R=="string")return H(R,G);var O=Object.prototype.toString.call(R).slice(8,-1);return O==="Object"&&R.constructor&&(O=R.constructor.name),O==="Map"||O==="Set"?Array.from(R):O==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O)?H(R,G):void 0}}(I)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function H(I,R){(R==null||R>I.length)&&(R=I.length);for(var G=0,O=new Array(R);G<R;G++)O[G]=I[G];return O}function B(I,R){for(var G=0;G<R.length;G++){var O=R[G];O.enumerable=O.enumerable||!1,O.configurable=!0,"value"in O&&(O.writable=!0),Object.defineProperty(I,q(O.key),O)}}function U(I,R,G){return(R=q(R))in I?Object.defineProperty(I,R,{value:G,enumerable:!0,configurable:!0,writable:!0}):I[R]=G,I}function q(I){var R=function(G,O){if(P(G)!=="object"||G===null)return G;var V=G[Symbol.toPrimitive];if(V!==void 0){var C=V.call(G,"string");if(P(C)!=="object")return C;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(G)}(I);return P(R)==="symbol"?R:String(R)}const z=function(){function I(O,V){var C=this;if(function(S,Q){if(!(S instanceof Q))throw new TypeError("Cannot call a class as a function")}(this,I),U(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),U(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),U(this,"setupWrapperElement",function(){C.state.elements.container&&(C.state.elements.wrapper.className=C.options.wrapperClassName,C.state.elements.cursor.className=C.options.cursorClassName,C.state.elements.cursor.innerHTML=C.options.cursor,C.state.elements.container.innerHTML="",C.state.elements.container.appendChild(C.state.elements.wrapper),C.state.elements.container.appendChild(C.state.elements.cursor))}),U(this,"start",function(){return C.state.eventLoopPaused=!1,C.runEventLoop(),C}),U(this,"pause",function(){return C.state.eventLoopPaused=!0,C}),U(this,"stop",function(){return C.state.eventLoop&&((0,u.cancel)(C.state.eventLoop),C.state.eventLoop=null),C}),U(this,"pauseFor",function(S){return C.addEventToQueue(p,{ms:S}),C}),U(this,"typeOutAllStrings",function(){return typeof C.options.strings=="string"?(C.typeString(C.options.strings).pauseFor(C.options.pauseFor),C):(C.options.strings.forEach(function(S){C.typeString(S).pauseFor(C.options.pauseFor).deleteAll(C.options.deleteSpeed)}),C)}),U(this,"typeString",function(S){var Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(f(S))return C.typeOutHTMLString(S,Q);if(S){var N=(C.options||{}).stringSplitter,ne=typeof N=="function"?N(S):S.split("");C.typeCharacters(ne,Q)}return C}),U(this,"pasteString",function(S){var Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return f(S)?C.typeOutHTMLString(S,Q,!0):(S&&C.addEventToQueue($,{character:S,node:Q}),C)}),U(this,"typeOutHTMLString",function(S){var Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,N=arguments.length>2?arguments[2]:void 0,ne=function(ce){var me=document.createElement("div");return me.innerHTML=ce,me.childNodes}(S);if(ne.length>0)for(var X=0;X<ne.length;X++){var te=ne[X],Z=te.innerHTML;te&&te.nodeType!==3?(te.innerHTML="",C.addEventToQueue(w,{node:te,parentNode:Q}),N?C.pasteString(Z,te):C.typeString(Z,te)):te.textContent&&(N?C.pasteString(te.textContent,Q):C.typeString(te.textContent,Q))}return C}),U(this,"deleteAll",function(){var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return C.addEventToQueue(k,{speed:S}),C}),U(this,"changeDeleteSpeed",function(S){if(!S)throw new Error("Must provide new delete speed");return C.addEventToQueue(b,{speed:S}),C}),U(this,"changeDelay",function(S){if(!S)throw new Error("Must provide new delay");return C.addEventToQueue(_,{delay:S}),C}),U(this,"changeCursor",function(S){if(!S)throw new Error("Must provide new cursor");return C.addEventToQueue(E,{cursor:S}),C}),U(this,"deleteChars",function(S){if(!S)throw new Error("Must provide amount of characters to delete");for(var Q=0;Q<S;Q++)C.addEventToQueue(v);return C}),U(this,"callFunction",function(S,Q){if(!S||typeof S!="function")throw new Error("Callback must be a function");return C.addEventToQueue(y,{cb:S,thisArg:Q}),C}),U(this,"typeCharacters",function(S){var Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!S||!Array.isArray(S))throw new Error("Characters must be an array");return S.forEach(function(N){C.addEventToQueue(g,{character:N,node:Q})}),C}),U(this,"removeCharacters",function(S){if(!S||!Array.isArray(S))throw new Error("Characters must be an array");return S.forEach(function(){C.addEventToQueue(v)}),C}),U(this,"addEventToQueue",function(S,Q){var N=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return C.addEventToStateProperty(S,Q,N,"eventQueue")}),U(this,"addReverseCalledEvent",function(S,Q){var N=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return C.options.loop?C.addEventToStateProperty(S,Q,N,"reverseCalledEvents"):C}),U(this,"addEventToStateProperty",function(S,Q){var N=arguments.length>2&&arguments[2]!==void 0&&arguments[2],ne=arguments.length>3?arguments[3]:void 0,X={eventName:S,eventArgs:Q||{}};return C.state[ne]=N?[X].concat(W(C.state[ne])):[].concat(W(C.state[ne]),[X]),C}),U(this,"runEventLoop",function(){C.state.lastFrameTime||(C.state.lastFrameTime=Date.now());var S=Date.now(),Q=S-C.state.lastFrameTime;if(!C.state.eventQueue.length){if(!C.options.loop)return;C.state.eventQueue=W(C.state.calledEvents),C.state.calledEvents=[],C.options=D({},C.state.initialOptions)}if(C.state.eventLoop=d()(C.runEventLoop),!C.state.eventLoopPaused){if(C.state.pauseUntil){if(S<C.state.pauseUntil)return;C.state.pauseUntil=null}var N,ne=W(C.state.eventQueue),X=ne.shift();if(!(Q<=(N=X.eventName===h||X.eventName===v?C.options.deleteSpeed==="natural"?m(40,80):C.options.deleteSpeed:C.options.delay==="natural"?m(120,160):C.options.delay))){var te=X.eventName,Z=X.eventArgs;switch(C.logInDevMode({currentEvent:X,state:C.state,delay:N}),te){case $:case g:var ce=Z.character,me=Z.node,oe=document.createTextNode(ce),Se=oe;C.options.onCreateTextNode&&typeof C.options.onCreateTextNode=="function"&&(Se=C.options.onCreateTextNode(ce,oe)),Se&&(me?me.appendChild(Se):C.state.elements.wrapper.appendChild(Se)),C.state.visibleNodes=[].concat(W(C.state.visibleNodes),[{type:"TEXT_NODE",character:ce,node:Se}]);break;case v:ne.unshift({eventName:h,eventArgs:{removingCharacterNode:!0}});break;case p:var ae=X.eventArgs.ms;C.state.pauseUntil=Date.now()+parseInt(ae);break;case y:var Oe=X.eventArgs,In=Oe.cb,ze=Oe.thisArg;In.call(ze,{elements:C.state.elements});break;case w:var Nn=X.eventArgs,Yt=Nn.node,Ye=Nn.parentNode;Ye?Ye.appendChild(Yt):C.state.elements.wrapper.appendChild(Yt),C.state.visibleNodes=[].concat(W(C.state.visibleNodes),[{type:L,node:Yt,parentNode:Ye||C.state.elements.wrapper}]);break;case k:var ee=C.state.visibleNodes,he=Z.speed,dn=[];he&&dn.push({eventName:b,eventArgs:{speed:he,temp:!0}});for(var lr=0,Lt=ee.length;lr<Lt;lr++)dn.push({eventName:h,eventArgs:{removingCharacterNode:!1}});he&&dn.push({eventName:b,eventArgs:{speed:C.options.deleteSpeed,temp:!0}}),ne.unshift.apply(ne,dn);break;case h:var C0=X.eventArgs.removingCharacterNode;if(C.state.visibleNodes.length){var Es=C.state.visibleNodes.pop(),E0=Es.type,si=Es.node,_0=Es.character;C.options.onRemoveNode&&typeof C.options.onRemoveNode=="function"&&C.options.onRemoveNode({node:si,character:_0}),si&&si.parentNode.removeChild(si),E0===L&&C0&&ne.unshift({eventName:h,eventArgs:{}})}break;case b:C.options.deleteSpeed=X.eventArgs.speed;break;case _:C.options.delay=X.eventArgs.delay;break;case E:C.options.cursor=X.eventArgs.cursor,C.state.elements.cursor.innerHTML=X.eventArgs.cursor}C.options.loop&&(X.eventName===h||X.eventArgs&&X.eventArgs.temp||(C.state.calledEvents=[].concat(W(C.state.calledEvents),[X]))),C.state.eventQueue=ne,C.state.lastFrameTime=S}}}),O)if(typeof O=="string"){var J=document.querySelector(O);if(!J)throw new Error("Could not find container element");this.state.elements.container=J}else this.state.elements.container=O;V&&(this.options=D(D({},this.options),V)),this.state.initialOptions=D({},this.options),this.init()}var R,G;return R=I,(G=[{key:"init",value:function(){var O,V;this.setupWrapperElement(),this.addEventToQueue(E,{cursor:this.options.cursor},!0),this.addEventToQueue(k,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(O=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(V=document.createElement("style")).appendChild(document.createTextNode(O)),document.head.appendChild(V),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(O){this.options.devMode&&console.log(O)}}])&&B(R.prototype,G),Object.defineProperty(R,"prototype",{writable:!1}),I}()},8552:(s,c,l)=>{var u=l(852)(l(5639),"DataView");s.exports=u},1989:(s,c,l)=>{var u=l(1789),d=l(401),f=l(7667),m=l(1327),g=l(1866);function v(k){var h=-1,p=k==null?0:k.length;for(this.clear();++h<p;){var y=k[h];this.set(y[0],y[1])}}v.prototype.clear=u,v.prototype.delete=d,v.prototype.get=f,v.prototype.has=m,v.prototype.set=g,s.exports=v},8407:(s,c,l)=>{var u=l(7040),d=l(4125),f=l(2117),m=l(7518),g=l(4705);function v(k){var h=-1,p=k==null?0:k.length;for(this.clear();++h<p;){var y=k[h];this.set(y[0],y[1])}}v.prototype.clear=u,v.prototype.delete=d,v.prototype.get=f,v.prototype.has=m,v.prototype.set=g,s.exports=v},7071:(s,c,l)=>{var u=l(852)(l(5639),"Map");s.exports=u},3369:(s,c,l)=>{var u=l(4785),d=l(1285),f=l(6e3),m=l(9916),g=l(5265);function v(k){var h=-1,p=k==null?0:k.length;for(this.clear();++h<p;){var y=k[h];this.set(y[0],y[1])}}v.prototype.clear=u,v.prototype.delete=d,v.prototype.get=f,v.prototype.has=m,v.prototype.set=g,s.exports=v},3818:(s,c,l)=>{var u=l(852)(l(5639),"Promise");s.exports=u},8525:(s,c,l)=>{var u=l(852)(l(5639),"Set");s.exports=u},8668:(s,c,l)=>{var u=l(3369),d=l(619),f=l(2385);function m(g){var v=-1,k=g==null?0:g.length;for(this.__data__=new u;++v<k;)this.add(g[v])}m.prototype.add=m.prototype.push=d,m.prototype.has=f,s.exports=m},6384:(s,c,l)=>{var u=l(8407),d=l(7465),f=l(3779),m=l(7599),g=l(4758),v=l(4309);function k(h){var p=this.__data__=new u(h);this.size=p.size}k.prototype.clear=d,k.prototype.delete=f,k.prototype.get=m,k.prototype.has=g,k.prototype.set=v,s.exports=k},2705:(s,c,l)=>{var u=l(5639).Symbol;s.exports=u},1149:(s,c,l)=>{var u=l(5639).Uint8Array;s.exports=u},577:(s,c,l)=>{var u=l(852)(l(5639),"WeakMap");s.exports=u},4963:s=>{s.exports=function(c,l){for(var u=-1,d=c==null?0:c.length,f=0,m=[];++u<d;){var g=c[u];l(g,u,c)&&(m[f++]=g)}return m}},4636:(s,c,l)=>{var u=l(2545),d=l(5694),f=l(1469),m=l(4144),g=l(5776),v=l(6719),k=Object.prototype.hasOwnProperty;s.exports=function(h,p){var y=f(h),w=!y&&d(h),b=!y&&!w&&m(h),_=!y&&!w&&!b&&v(h),E=y||w||b||_,$=E?u(h.length,String):[],L=$.length;for(var P in h)!p&&!k.call(h,P)||E&&(P=="length"||b&&(P=="offset"||P=="parent")||_&&(P=="buffer"||P=="byteLength"||P=="byteOffset")||g(P,L))||$.push(P);return $}},2488:s=>{s.exports=function(c,l){for(var u=-1,d=l.length,f=c.length;++u<d;)c[f+u]=l[u];return c}},2908:s=>{s.exports=function(c,l){for(var u=-1,d=c==null?0:c.length;++u<d;)if(l(c[u],u,c))return!0;return!1}},8470:(s,c,l)=>{var u=l(7813);s.exports=function(d,f){for(var m=d.length;m--;)if(u(d[m][0],f))return m;return-1}},8866:(s,c,l)=>{var u=l(2488),d=l(1469);s.exports=function(f,m,g){var v=m(f);return d(f)?v:u(v,g(f))}},4239:(s,c,l)=>{var u=l(2705),d=l(9607),f=l(2333),m=u?u.toStringTag:void 0;s.exports=function(g){return g==null?g===void 0?"[object Undefined]":"[object Null]":m&&m in Object(g)?d(g):f(g)}},9454:(s,c,l)=>{var u=l(4239),d=l(7005);s.exports=function(f){return d(f)&&u(f)=="[object Arguments]"}},939:(s,c,l)=>{var u=l(2492),d=l(7005);s.exports=function f(m,g,v,k,h){return m===g||(m==null||g==null||!d(m)&&!d(g)?m!=m&&g!=g:u(m,g,v,k,f,h))}},2492:(s,c,l)=>{var u=l(6384),d=l(7114),f=l(8351),m=l(6096),g=l(4160),v=l(1469),k=l(4144),h=l(6719),p="[object Arguments]",y="[object Array]",w="[object Object]",b=Object.prototype.hasOwnProperty;s.exports=function(_,E,$,L,P,A){var D=v(_),W=v(E),H=D?y:g(_),B=W?y:g(E),U=(H=H==p?w:H)==w,q=(B=B==p?w:B)==w,z=H==B;if(z&&k(_)){if(!k(E))return!1;D=!0,U=!1}if(z&&!U)return A||(A=new u),D||h(_)?d(_,E,$,L,P,A):f(_,E,H,$,L,P,A);if(!(1&$)){var I=U&&b.call(_,"__wrapped__"),R=q&&b.call(E,"__wrapped__");if(I||R){var G=I?_.value():_,O=R?E.value():E;return A||(A=new u),P(G,O,$,L,A)}}return!!z&&(A||(A=new u),m(_,E,$,L,P,A))}},8458:(s,c,l)=>{var u=l(3560),d=l(5346),f=l(3218),m=l(346),g=/^\[object .+?Constructor\]$/,v=Function.prototype,k=Object.prototype,h=v.toString,p=k.hasOwnProperty,y=RegExp("^"+h.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");s.exports=function(w){return!(!f(w)||d(w))&&(u(w)?y:g).test(m(w))}},8749:(s,c,l)=>{var u=l(4239),d=l(1780),f=l(7005),m={};m["[object Float32Array]"]=m["[object Float64Array]"]=m["[object Int8Array]"]=m["[object Int16Array]"]=m["[object Int32Array]"]=m["[object Uint8Array]"]=m["[object Uint8ClampedArray]"]=m["[object Uint16Array]"]=m["[object Uint32Array]"]=!0,m["[object Arguments]"]=m["[object Array]"]=m["[object ArrayBuffer]"]=m["[object Boolean]"]=m["[object DataView]"]=m["[object Date]"]=m["[object Error]"]=m["[object Function]"]=m["[object Map]"]=m["[object Number]"]=m["[object Object]"]=m["[object RegExp]"]=m["[object Set]"]=m["[object String]"]=m["[object WeakMap]"]=!1,s.exports=function(g){return f(g)&&d(g.length)&&!!m[u(g)]}},280:(s,c,l)=>{var u=l(5726),d=l(6916),f=Object.prototype.hasOwnProperty;s.exports=function(m){if(!u(m))return d(m);var g=[];for(var v in Object(m))f.call(m,v)&&v!="constructor"&&g.push(v);return g}},2545:s=>{s.exports=function(c,l){for(var u=-1,d=Array(c);++u<c;)d[u]=l(u);return d}},1717:s=>{s.exports=function(c){return function(l){return c(l)}}},4757:s=>{s.exports=function(c,l){return c.has(l)}},4429:(s,c,l)=>{var u=l(5639)["__core-js_shared__"];s.exports=u},7114:(s,c,l)=>{var u=l(8668),d=l(2908),f=l(4757);s.exports=function(m,g,v,k,h,p){var y=1&v,w=m.length,b=g.length;if(w!=b&&!(y&&b>w))return!1;var _=p.get(m),E=p.get(g);if(_&&E)return _==g&&E==m;var $=-1,L=!0,P=2&v?new u:void 0;for(p.set(m,g),p.set(g,m);++$<w;){var A=m[$],D=g[$];if(k)var W=y?k(D,A,$,g,m,p):k(A,D,$,m,g,p);if(W!==void 0){if(W)continue;L=!1;break}if(P){if(!d(g,function(H,B){if(!f(P,B)&&(A===H||h(A,H,v,k,p)))return P.push(B)})){L=!1;break}}else if(A!==D&&!h(A,D,v,k,p)){L=!1;break}}return p.delete(m),p.delete(g),L}},8351:(s,c,l)=>{var u=l(2705),d=l(1149),f=l(7813),m=l(7114),g=l(8776),v=l(1814),k=u?u.prototype:void 0,h=k?k.valueOf:void 0;s.exports=function(p,y,w,b,_,E,$){switch(w){case"[object DataView]":if(p.byteLength!=y.byteLength||p.byteOffset!=y.byteOffset)return!1;p=p.buffer,y=y.buffer;case"[object ArrayBuffer]":return!(p.byteLength!=y.byteLength||!E(new d(p),new d(y)));case"[object Boolean]":case"[object Date]":case"[object Number]":return f(+p,+y);case"[object Error]":return p.name==y.name&&p.message==y.message;case"[object RegExp]":case"[object String]":return p==y+"";case"[object Map]":var L=g;case"[object Set]":var P=1&b;if(L||(L=v),p.size!=y.size&&!P)return!1;var A=$.get(p);if(A)return A==y;b|=2,$.set(p,y);var D=m(L(p),L(y),b,_,E,$);return $.delete(p),D;case"[object Symbol]":if(h)return h.call(p)==h.call(y)}return!1}},6096:(s,c,l)=>{var u=l(8234),d=Object.prototype.hasOwnProperty;s.exports=function(f,m,g,v,k,h){var p=1&g,y=u(f),w=y.length;if(w!=u(m).length&&!p)return!1;for(var b=w;b--;){var _=y[b];if(!(p?_ in m:d.call(m,_)))return!1}var E=h.get(f),$=h.get(m);if(E&&$)return E==m&&$==f;var L=!0;h.set(f,m),h.set(m,f);for(var P=p;++b<w;){var A=f[_=y[b]],D=m[_];if(v)var W=p?v(D,A,_,m,f,h):v(A,D,_,f,m,h);if(!(W===void 0?A===D||k(A,D,g,v,h):W)){L=!1;break}P||(P=_=="constructor")}if(L&&!P){var H=f.constructor,B=m.constructor;H==B||!("constructor"in f)||!("constructor"in m)||typeof H=="function"&&H instanceof H&&typeof B=="function"&&B instanceof B||(L=!1)}return h.delete(f),h.delete(m),L}},1957:(s,c,l)=>{var u=typeof l.g=="object"&&l.g&&l.g.Object===Object&&l.g;s.exports=u},8234:(s,c,l)=>{var u=l(8866),d=l(9551),f=l(3674);s.exports=function(m){return u(m,f,d)}},5050:(s,c,l)=>{var u=l(7019);s.exports=function(d,f){var m=d.__data__;return u(f)?m[typeof f=="string"?"string":"hash"]:m.map}},852:(s,c,l)=>{var u=l(8458),d=l(7801);s.exports=function(f,m){var g=d(f,m);return u(g)?g:void 0}},9607:(s,c,l)=>{var u=l(2705),d=Object.prototype,f=d.hasOwnProperty,m=d.toString,g=u?u.toStringTag:void 0;s.exports=function(v){var k=f.call(v,g),h=v[g];try{v[g]=void 0;var p=!0}catch{}var y=m.call(v);return p&&(k?v[g]=h:delete v[g]),y}},9551:(s,c,l)=>{var u=l(4963),d=l(479),f=Object.prototype.propertyIsEnumerable,m=Object.getOwnPropertySymbols,g=m?function(v){return v==null?[]:(v=Object(v),u(m(v),function(k){return f.call(v,k)}))}:d;s.exports=g},4160:(s,c,l)=>{var u=l(8552),d=l(7071),f=l(3818),m=l(8525),g=l(577),v=l(4239),k=l(346),h="[object Map]",p="[object Promise]",y="[object Set]",w="[object WeakMap]",b="[object DataView]",_=k(u),E=k(d),$=k(f),L=k(m),P=k(g),A=v;(u&&A(new u(new ArrayBuffer(1)))!=b||d&&A(new d)!=h||f&&A(f.resolve())!=p||m&&A(new m)!=y||g&&A(new g)!=w)&&(A=function(D){var W=v(D),H=W=="[object Object]"?D.constructor:void 0,B=H?k(H):"";if(B)switch(B){case _:return b;case E:return h;case $:return p;case L:return y;case P:return w}return W}),s.exports=A},7801:s=>{s.exports=function(c,l){return c==null?void 0:c[l]}},1789:(s,c,l)=>{var u=l(4536);s.exports=function(){this.__data__=u?u(null):{},this.size=0}},401:s=>{s.exports=function(c){var l=this.has(c)&&delete this.__data__[c];return this.size-=l?1:0,l}},7667:(s,c,l)=>{var u=l(4536),d=Object.prototype.hasOwnProperty;s.exports=function(f){var m=this.__data__;if(u){var g=m[f];return g==="__lodash_hash_undefined__"?void 0:g}return d.call(m,f)?m[f]:void 0}},1327:(s,c,l)=>{var u=l(4536),d=Object.prototype.hasOwnProperty;s.exports=function(f){var m=this.__data__;return u?m[f]!==void 0:d.call(m,f)}},1866:(s,c,l)=>{var u=l(4536);s.exports=function(d,f){var m=this.__data__;return this.size+=this.has(d)?0:1,m[d]=u&&f===void 0?"__lodash_hash_undefined__":f,this}},5776:s=>{var c=/^(?:0|[1-9]\d*)$/;s.exports=function(l,u){var d=typeof l;return!!(u=u??9007199254740991)&&(d=="number"||d!="symbol"&&c.test(l))&&l>-1&&l%1==0&&l<u}},7019:s=>{s.exports=function(c){var l=typeof c;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?c!=="__proto__":c===null}},5346:(s,c,l)=>{var u,d=l(4429),f=(u=/[^.]+$/.exec(d&&d.keys&&d.keys.IE_PROTO||""))?"Symbol(src)_1."+u:"";s.exports=function(m){return!!f&&f in m}},5726:s=>{var c=Object.prototype;s.exports=function(l){var u=l&&l.constructor;return l===(typeof u=="function"&&u.prototype||c)}},7040:s=>{s.exports=function(){this.__data__=[],this.size=0}},4125:(s,c,l)=>{var u=l(8470),d=Array.prototype.splice;s.exports=function(f){var m=this.__data__,g=u(m,f);return!(g<0||(g==m.length-1?m.pop():d.call(m,g,1),--this.size,0))}},2117:(s,c,l)=>{var u=l(8470);s.exports=function(d){var f=this.__data__,m=u(f,d);return m<0?void 0:f[m][1]}},7518:(s,c,l)=>{var u=l(8470);s.exports=function(d){return u(this.__data__,d)>-1}},4705:(s,c,l)=>{var u=l(8470);s.exports=function(d,f){var m=this.__data__,g=u(m,d);return g<0?(++this.size,m.push([d,f])):m[g][1]=f,this}},4785:(s,c,l)=>{var u=l(1989),d=l(8407),f=l(7071);s.exports=function(){this.size=0,this.__data__={hash:new u,map:new(f||d),string:new u}}},1285:(s,c,l)=>{var u=l(5050);s.exports=function(d){var f=u(this,d).delete(d);return this.size-=f?1:0,f}},6e3:(s,c,l)=>{var u=l(5050);s.exports=function(d){return u(this,d).get(d)}},9916:(s,c,l)=>{var u=l(5050);s.exports=function(d){return u(this,d).has(d)}},5265:(s,c,l)=>{var u=l(5050);s.exports=function(d,f){var m=u(this,d),g=m.size;return m.set(d,f),this.size+=m.size==g?0:1,this}},8776:s=>{s.exports=function(c){var l=-1,u=Array(c.size);return c.forEach(function(d,f){u[++l]=[f,d]}),u}},4536:(s,c,l)=>{var u=l(852)(Object,"create");s.exports=u},6916:(s,c,l)=>{var u=l(5569)(Object.keys,Object);s.exports=u},1167:(s,c,l)=>{s=l.nmd(s);var u=l(1957),d=c&&!c.nodeType&&c,f=d&&s&&!s.nodeType&&s,m=f&&f.exports===d&&u.process,g=function(){try{return f&&f.require&&f.require("util").types||m&&m.binding&&m.binding("util")}catch{}}();s.exports=g},2333:s=>{var c=Object.prototype.toString;s.exports=function(l){return c.call(l)}},5569:s=>{s.exports=function(c,l){return function(u){return c(l(u))}}},5639:(s,c,l)=>{var u=l(1957),d=typeof self=="object"&&self&&self.Object===Object&&self,f=u||d||Function("return this")();s.exports=f},619:s=>{s.exports=function(c){return this.__data__.set(c,"__lodash_hash_undefined__"),this}},2385:s=>{s.exports=function(c){return this.__data__.has(c)}},1814:s=>{s.exports=function(c){var l=-1,u=Array(c.size);return c.forEach(function(d){u[++l]=d}),u}},7465:(s,c,l)=>{var u=l(8407);s.exports=function(){this.__data__=new u,this.size=0}},3779:s=>{s.exports=function(c){var l=this.__data__,u=l.delete(c);return this.size=l.size,u}},7599:s=>{s.exports=function(c){return this.__data__.get(c)}},4758:s=>{s.exports=function(c){return this.__data__.has(c)}},4309:(s,c,l)=>{var u=l(8407),d=l(7071),f=l(3369);s.exports=function(m,g){var v=this.__data__;if(v instanceof u){var k=v.__data__;if(!d||k.length<199)return k.push([m,g]),this.size=++v.size,this;v=this.__data__=new f(k)}return v.set(m,g),this.size=v.size,this}},346:s=>{var c=Function.prototype.toString;s.exports=function(l){if(l!=null){try{return c.call(l)}catch{}try{return l+""}catch{}}return""}},7813:s=>{s.exports=function(c,l){return c===l||c!=c&&l!=l}},5694:(s,c,l)=>{var u=l(9454),d=l(7005),f=Object.prototype,m=f.hasOwnProperty,g=f.propertyIsEnumerable,v=u(function(){return arguments}())?u:function(k){return d(k)&&m.call(k,"callee")&&!g.call(k,"callee")};s.exports=v},1469:s=>{var c=Array.isArray;s.exports=c},8612:(s,c,l)=>{var u=l(3560),d=l(1780);s.exports=function(f){return f!=null&&d(f.length)&&!u(f)}},4144:(s,c,l)=>{s=l.nmd(s);var u=l(5639),d=l(5062),f=c&&!c.nodeType&&c,m=f&&s&&!s.nodeType&&s,g=m&&m.exports===f?u.Buffer:void 0,v=(g?g.isBuffer:void 0)||d;s.exports=v},8446:(s,c,l)=>{var u=l(939);s.exports=function(d,f){return u(d,f)}},3560:(s,c,l)=>{var u=l(4239),d=l(3218);s.exports=function(f){if(!d(f))return!1;var m=u(f);return m=="[object Function]"||m=="[object GeneratorFunction]"||m=="[object AsyncFunction]"||m=="[object Proxy]"}},1780:s=>{s.exports=function(c){return typeof c=="number"&&c>-1&&c%1==0&&c<=9007199254740991}},3218:s=>{s.exports=function(c){var l=typeof c;return c!=null&&(l=="object"||l=="function")}},7005:s=>{s.exports=function(c){return c!=null&&typeof c=="object"}},6719:(s,c,l)=>{var u=l(8749),d=l(1717),f=l(1167),m=f&&f.isTypedArray,g=m?d(m):u;s.exports=g},3674:(s,c,l)=>{var u=l(4636),d=l(280),f=l(8612);s.exports=function(m){return f(m)?u(m):d(m)}},479:s=>{s.exports=function(){return[]}},5062:s=>{s.exports=function(){return!1}},75:function(s){(function(){var c,l,u,d,f,m;typeof performance<"u"&&performance!==null&&performance.now?s.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(s.exports=function(){return(c()-f)/1e6},l=process.hrtime,d=(c=function(){var g;return 1e9*(g=l())[0]+g[1]})(),m=1e9*process.uptime(),f=d-m):Date.now?(s.exports=function(){return Date.now()-u},u=Date.now()):(s.exports=function(){return new Date().getTime()-u},u=new Date().getTime())}).call(this)},4087:(s,c,l)=>{for(var u=l(75),d=typeof window>"u"?l.g:window,f=["moz","webkit"],m="AnimationFrame",g=d["request"+m],v=d["cancel"+m]||d["cancelRequest"+m],k=0;!g&&k<f.length;k++)g=d[f[k]+"Request"+m],v=d[f[k]+"Cancel"+m]||d[f[k]+"CancelRequest"+m];if(!g||!v){var h=0,p=0,y=[];g=function(w){if(y.length===0){var b=u(),_=Math.max(0,16.666666666666668-(b-h));h=_+b,setTimeout(function(){var E=y.slice(0);y.length=0;for(var $=0;$<E.length;$++)if(!E[$].cancelled)try{E[$].callback(h)}catch(L){setTimeout(function(){throw L},0)}},Math.round(_))}return y.push({handle:++p,callback:w,cancelled:!1}),p},v=function(w){for(var b=0;b<y.length;b++)y[b].handle===w&&(y[b].cancelled=!0)}}s.exports=function(w){return g.call(d,w)},s.exports.cancel=function(){v.apply(d,arguments)},s.exports.polyfill=function(w){w||(w=d),w.requestAnimationFrame=g,w.cancelAnimationFrame=v}},8156:s=>{s.exports=n}},o={};function i(s){var c=o[s];if(c!==void 0)return c.exports;var l=o[s]={id:s,loaded:!1,exports:{}};return r[s].call(l.exports,l,l.exports,i),l.loaded=!0,l.exports}i.n=s=>{var c=s&&s.__esModule?()=>s.default:()=>s;return i.d(c,{a:c}),c},i.d=(s,c)=>{for(var l in c)i.o(c,l)&&!i.o(s,l)&&Object.defineProperty(s,l,{enumerable:!0,get:c[l]})},i.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),i.o=(s,c)=>Object.prototype.hasOwnProperty.call(s,c),i.nmd=s=>(s.paths=[],s.children||(s.children=[]),s);var a={};return(()=>{i.d(a,{default:()=>y});var s=i(8156),c=i.n(s),l=i(7403),u=i(8446),d=i.n(u);function f(w){return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},f(w)}function m(w,b){for(var _=0;_<b.length;_++){var E=b[_];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(w,h(E.key),E)}}function g(w,b){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(_,E){return _.__proto__=E,_},g(w,b)}function v(w){if(w===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return w}function k(w){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(b){return b.__proto__||Object.getPrototypeOf(b)},k(w)}function h(w){var b=function(_,E){if(f(_)!=="object"||_===null)return _;var $=_[Symbol.toPrimitive];if($!==void 0){var L=$.call(_,"string");if(f(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(_)}(w);return f(b)==="symbol"?b:String(b)}var p=function(w){(function(A,D){if(typeof D!="function"&&D!==null)throw new TypeError("Super expression must either be null or a function");A.prototype=Object.create(D&&D.prototype,{constructor:{value:A,writable:!0,configurable:!0}}),Object.defineProperty(A,"prototype",{writable:!1}),D&&g(A,D)})(P,w);var b,_,E,$,L=(E=P,$=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var A,D=k(E);if($){var W=k(this).constructor;A=Reflect.construct(D,arguments,W)}else A=D.apply(this,arguments);return function(H,B){if(B&&(f(B)==="object"||typeof B=="function"))return B;if(B!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return v(H)}(this,A)});function P(){var A,D,W,H;(function(z,I){if(!(z instanceof I))throw new TypeError("Cannot call a class as a function")})(this,P);for(var B=arguments.length,U=new Array(B),q=0;q<B;q++)U[q]=arguments[q];return D=v(A=L.call.apply(L,[this].concat(U))),H={instance:null},(W=h(W="state"))in D?Object.defineProperty(D,W,{value:H,enumerable:!0,configurable:!0,writable:!0}):D[W]=H,A}return b=P,(_=[{key:"componentDidMount",value:function(){var A=this,D=new l.default(this.typewriter,this.props.options);this.setState({instance:D},function(){var W=A.props.onInit;W&&W(D)})}},{key:"componentDidUpdate",value:function(A){d()(this.props.options,A.options)||this.setState({instance:new l.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var A=this,D=this.props.component;return c().createElement(D,{ref:function(W){return A.typewriter=W},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&m(b.prototype,_),Object.defineProperty(b,"prototype",{writable:!1}),P}(s.Component);p.defaultProps={component:"div"};const y=p})(),a.default})())})(Kh);var yx=Kh.exports;const xx=Ta(yx),xf=j.a`
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
`,wx=j.a`
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
`,kx=j.div`
  margin-left: 5px;
`,bx=()=>{const{selectedLanguage:e}=Mt(),{isDarkMode:t}=rr();return x.jsxs(ax,{id:"home",children:[x.jsx(sx,{children:x.jsx(ix,{})}),x.jsxs(lx,{children:[x.jsxs(cx,{id:"Left",children:[x.jsx(fx,{children:Y[e].name}),x.jsx(vx,{children:Y[e].functions}),x.jsx(px,{children:x.jsx(mx,{children:x.jsx(xx,{options:{strings:Y[e].roles,autoStart:!0,loop:!0}})})}),x.jsx(gx,{children:Y[e].location.countries}),x.jsxs(hx,{children:[" ",x.jsx("br",{}),Y[e].description]}),x.jsxs(wx,{children:[x.jsx(xf,{isDarkMode:t,href:Y[e].linkedin,target:"display",children:x.jsx(_u,{style:{cursor:"pointer",width:"20px",height:"20px"}})}),x.jsxs(xf,{isDarkMode:t,href:Y[e].ResumeLink,target:"display",children:[x.jsx(Gh,{}),x.jsx(kx,{children:Y[e].ResumeTitle})]})]})]}),x.jsx(ux,{id:"Right",children:x.jsx(dx,{src:Y[e].homelinkimg,alt:"Vidigal"})})]})]})},Sx=j.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`,Cx=j.div`
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
`,Ex=j.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 25px;
  color: ${({theme:e})=>e.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,_x=j.div`
  font-size: 30px;
  text-align: center;
  font-style: italic;
  max-width: 600px;
  padding: 10px;
  color: ${({theme:e})=>e.primary};
  @media (max-width: 768px) {
    font-size: 25px;
  }
`,jx=j.div`
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
`,Tx=j.div`
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
`,Px=j.div`
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


`,$x=j.h2`
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
`,Ox=j.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`,Rx=j.span`
  font-size: 12px;
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 500px) {
    display: none;
  }
`,Ax=j.span`
  font-size: 14px;
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 500px) {
    display: none;
  }
`,zx=j.span`
  font-size: 15px;
`,Ix=j.div`
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
`,Nx=j.img`
  width: 25px;
  height: 25px;
  padding-right: 4px;
  float: left;
`,Mx=j.a`
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


`,Lx=()=>{const{selectedLanguage:e}=Mt(),{isDarkMode:t}=rr();return x.jsx(Sx,{id:"skills",children:x.jsxs(Cx,{children:[x.jsx(Ex,{children:Y[e].nav.skills}),x.jsx(jx,{children:Y[e].skillsAll.desc}),x.jsx(_x,{children:Y[e].skillsAll.title}),x.jsx(Tx,{children:Y[e].skillsAll.info.map(n=>x.jsxs(Px,{children:[x.jsx($x,{children:n.subtitle}),x.jsx(Ox,{children:n.skills.map(r=>x.jsx(Ix,{children:x.jsxs(Mx,{isDarkMode:t,href:r.link,target:"_blank",rel:"noopener noreferrer",children:[x.jsx(Nx,{src:r.image,alt:r.name}),x.jsx(zx,{children:r.name}),x.jsxs(Ax,{children:[" ",r.date]}),x.jsxs(Rx,{children:[x.jsx("br",{}),r.category]})]})},r.name))})]},n.subtitle))})]})})},Dx={black:"#000",white:"#fff"},Ko=Dx,Fx={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},ur=Fx,Bx={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},dr=Bx,Ux={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},fr=Ux,Vx={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},pr=Vx,Hx={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},mr=Hx,Wx={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},lo=Wx,Gx={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},Kx=Gx;function F(){return F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},F.apply(this,arguments)}function Jt(e){return e!==null&&typeof e=="object"&&e.constructor===Object}function Qh(e){if(!Jt(e))return e;const t={};return Object.keys(e).forEach(n=>{t[n]=Qh(e[n])}),t}function zt(e,t,n={clone:!0}){const r=n.clone?F({},e):e;return Jt(e)&&Jt(t)&&Object.keys(t).forEach(o=>{o!=="__proto__"&&(Jt(t[o])&&o in e&&Jt(e[o])?r[o]=zt(e[o],t[o],n):n.clone?r[o]=Jt(t[o])?Qh(t[o]):t[o]:r[o]=t[o])}),r}function Qr(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}function kt(e){if(typeof e!="string")throw new Error(Qr(7));return e.charAt(0).toUpperCase()+e.slice(1)}function wf(...e){return e.reduce((t,n)=>n==null?t:function(...o){t.apply(this,o),n.apply(this,o)},()=>{})}function It(e){return e&&e.ownerDocument||document}function ju(e){return It(e).defaultView||window}function cc(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const Qx=typeof window<"u"?T.useLayoutEffect:T.useEffect,uc=Qx;function Qo(e){const t=T.useRef(e);return uc(()=>{t.current=e}),T.useRef((...n)=>(0,t.current)(...n)).current}function or(...e){return T.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{cc(n,t)})},e)}function Yx(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Yh(e,t){const n=F({},t);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=F({},e[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const o=e[r]||{},i=t[r];n[r]={},!i||!Object.keys(i)?n[r]=o:!o||!Object.keys(o)?n[r]=i:(n[r]=F({},i),Object.keys(o).forEach(a=>{n[r][a]=Yh(o[a],i[a])}))}else n[r]===void 0&&(n[r]=e[r])}),n}function ir(e,t,n=void 0){const r={};return Object.keys(e).forEach(o=>{r[o]=e[o].reduce((i,a)=>{if(a){const s=t(a);s!==""&&i.push(s),n&&n[a]&&i.push(n[a])}return i},[]).join(" ")}),r}const kf=e=>e,Xx=()=>{let e=kf;return{configure(t){e=t},generate(t){return e(t)},reset(){e=kf}}},qx=Xx(),Jx=qx,Zx={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function zn(e,t,n="Mui"){const r=Zx[t];return r?`${n}-${r}`:`${Jx.generate(e)}-${t}`}function ar(e,t,n="Mui"){const r={};return t.forEach(o=>{r[o]=zn(e,o,n)}),r}const Tu="$$material";function Pe(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function ew(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function tw(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var nw=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(tw(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=ew(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Ge="-ms-",ba="-moz-",se="-webkit-",Xh="comm",Pu="rule",$u="decl",rw="@import",qh="@keyframes",ow="@layer",iw=Math.abs,ms=String.fromCharCode,aw=Object.assign;function sw(e,t){return Be(e,0)^45?(((t<<2^Be(e,0))<<2^Be(e,1))<<2^Be(e,2))<<2^Be(e,3):0}function Jh(e){return e.trim()}function lw(e,t){return(e=t.exec(e))?e[0]:e}function le(e,t,n){return e.replace(t,n)}function dc(e,t){return e.indexOf(t)}function Be(e,t){return e.charCodeAt(t)|0}function Yo(e,t,n){return e.slice(t,n)}function Bt(e){return e.length}function Ou(e){return e.length}function Ti(e,t){return t.push(e),e}function cw(e,t){return e.map(t).join("")}var hs=1,Yr=1,Zh=0,it=0,Re=0,Zr="";function gs(e,t,n,r,o,i,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:hs,column:Yr,length:a,return:""}}function co(e,t){return aw(gs("",null,null,"",null,null,0),e,{length:-e.length},t)}function uw(){return Re}function dw(){return Re=it>0?Be(Zr,--it):0,Yr--,Re===10&&(Yr=1,hs--),Re}function ut(){return Re=it<Zh?Be(Zr,it++):0,Yr++,Re===10&&(Yr=1,hs++),Re}function Gt(){return Be(Zr,it)}function Vi(){return it}function oi(e,t){return Yo(Zr,e,t)}function Xo(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function e0(e){return hs=Yr=1,Zh=Bt(Zr=e),it=0,[]}function t0(e){return Zr="",e}function Hi(e){return Jh(oi(it-1,fc(e===91?e+2:e===40?e+1:e)))}function fw(e){for(;(Re=Gt())&&Re<33;)ut();return Xo(e)>2||Xo(Re)>3?"":" "}function pw(e,t){for(;--t&&ut()&&!(Re<48||Re>102||Re>57&&Re<65||Re>70&&Re<97););return oi(e,Vi()+(t<6&&Gt()==32&&ut()==32))}function fc(e){for(;ut();)switch(Re){case e:return it;case 34:case 39:e!==34&&e!==39&&fc(Re);break;case 40:e===41&&fc(e);break;case 92:ut();break}return it}function mw(e,t){for(;ut()&&e+Re!==57;)if(e+Re===84&&Gt()===47)break;return"/*"+oi(t,it-1)+"*"+ms(e===47?e:ut())}function hw(e){for(;!Xo(Gt());)ut();return oi(e,it)}function gw(e){return t0(Wi("",null,null,null,[""],e=e0(e),0,[0],e))}function Wi(e,t,n,r,o,i,a,s,c){for(var l=0,u=0,d=a,f=0,m=0,g=0,v=1,k=1,h=1,p=0,y="",w=o,b=i,_=r,E=y;k;)switch(g=p,p=ut()){case 40:if(g!=108&&Be(E,d-1)==58){dc(E+=le(Hi(p),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:E+=Hi(p);break;case 9:case 10:case 13:case 32:E+=fw(g);break;case 92:E+=pw(Vi()-1,7);continue;case 47:switch(Gt()){case 42:case 47:Ti(vw(mw(ut(),Vi()),t,n),c);break;default:E+="/"}break;case 123*v:s[l++]=Bt(E)*h;case 125*v:case 59:case 0:switch(p){case 0:case 125:k=0;case 59+u:h==-1&&(E=le(E,/\f/g,"")),m>0&&Bt(E)-d&&Ti(m>32?Sf(E+";",r,n,d-1):Sf(le(E," ","")+";",r,n,d-2),c);break;case 59:E+=";";default:if(Ti(_=bf(E,t,n,l,u,o,s,y,w=[],b=[],d),i),p===123)if(u===0)Wi(E,t,_,_,w,i,d,s,b);else switch(f===99&&Be(E,3)===110?100:f){case 100:case 108:case 109:case 115:Wi(e,_,_,r&&Ti(bf(e,_,_,0,0,o,s,y,o,w=[],d),b),o,b,d,s,r?w:b);break;default:Wi(E,_,_,_,[""],b,0,s,b)}}l=u=m=0,v=h=1,y=E="",d=a;break;case 58:d=1+Bt(E),m=g;default:if(v<1){if(p==123)--v;else if(p==125&&v++==0&&dw()==125)continue}switch(E+=ms(p),p*v){case 38:h=u>0?1:(E+="\f",-1);break;case 44:s[l++]=(Bt(E)-1)*h,h=1;break;case 64:Gt()===45&&(E+=Hi(ut())),f=Gt(),u=d=Bt(y=E+=hw(Vi())),p++;break;case 45:g===45&&Bt(E)==2&&(v=0)}}return i}function bf(e,t,n,r,o,i,a,s,c,l,u){for(var d=o-1,f=o===0?i:[""],m=Ou(f),g=0,v=0,k=0;g<r;++g)for(var h=0,p=Yo(e,d+1,d=iw(v=a[g])),y=e;h<m;++h)(y=Jh(v>0?f[h]+" "+p:le(p,/&\f/g,f[h])))&&(c[k++]=y);return gs(e,t,n,o===0?Pu:s,c,l,u)}function vw(e,t,n){return gs(e,t,n,Xh,ms(uw()),Yo(e,2,-2),0)}function Sf(e,t,n,r){return gs(e,t,n,$u,Yo(e,0,r),Yo(e,r+1,-1),r)}function Nr(e,t){for(var n="",r=Ou(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function yw(e,t,n,r){switch(e.type){case ow:if(e.children.length)break;case rw:case $u:return e.return=e.return||e.value;case Xh:return"";case qh:return e.return=e.value+"{"+Nr(e.children,r)+"}";case Pu:e.value=e.props.join(",")}return Bt(n=Nr(e.children,r))?e.return=e.value+"{"+n+"}":""}function xw(e){var t=Ou(e);return function(n,r,o,i){for(var a="",s=0;s<t;s++)a+=e[s](n,r,o,i)||"";return a}}function ww(e){return function(t){t.root||(t=t.return)&&e(t)}}var kw=function(t,n,r){for(var o=0,i=0;o=i,i=Gt(),o===38&&i===12&&(n[r]=1),!Xo(i);)ut();return oi(t,it)},bw=function(t,n){var r=-1,o=44;do switch(Xo(o)){case 0:o===38&&Gt()===12&&(n[r]=1),t[r]+=kw(it-1,n,r);break;case 2:t[r]+=Hi(o);break;case 4:if(o===44){t[++r]=Gt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=ms(o)}while(o=ut());return t},Sw=function(t,n){return t0(bw(e0(t),n))},Cf=new WeakMap,Cw=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Cf.get(r))&&!o){Cf.set(t,!0);for(var i=[],a=Sw(n,i),s=r.props,c=0,l=0;c<a.length;c++)for(var u=0;u<s.length;u++,l++)t.props[l]=i[c]?a[c].replace(/&\f/g,s[u]):s[u]+" "+a[c]}}},Ew=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function n0(e,t){switch(sw(e,t)){case 5103:return se+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return se+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return se+e+ba+e+Ge+e+e;case 6828:case 4268:return se+e+Ge+e+e;case 6165:return se+e+Ge+"flex-"+e+e;case 5187:return se+e+le(e,/(\w+).+(:[^]+)/,se+"box-$1$2"+Ge+"flex-$1$2")+e;case 5443:return se+e+Ge+"flex-item-"+le(e,/flex-|-self/,"")+e;case 4675:return se+e+Ge+"flex-line-pack"+le(e,/align-content|flex-|-self/,"")+e;case 5548:return se+e+Ge+le(e,"shrink","negative")+e;case 5292:return se+e+Ge+le(e,"basis","preferred-size")+e;case 6060:return se+"box-"+le(e,"-grow","")+se+e+Ge+le(e,"grow","positive")+e;case 4554:return se+le(e,/([^-])(transform)/g,"$1"+se+"$2")+e;case 6187:return le(le(le(e,/(zoom-|grab)/,se+"$1"),/(image-set)/,se+"$1"),e,"")+e;case 5495:case 3959:return le(e,/(image-set\([^]*)/,se+"$1$`$1");case 4968:return le(le(e,/(.+:)(flex-)?(.*)/,se+"box-pack:$3"+Ge+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+se+e+e;case 4095:case 3583:case 4068:case 2532:return le(e,/(.+)-inline(.+)/,se+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Bt(e)-1-t>6)switch(Be(e,t+1)){case 109:if(Be(e,t+4)!==45)break;case 102:return le(e,/(.+:)(.+)-([^]+)/,"$1"+se+"$2-$3$1"+ba+(Be(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~dc(e,"stretch")?n0(le(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Be(e,t+1)!==115)break;case 6444:switch(Be(e,Bt(e)-3-(~dc(e,"!important")&&10))){case 107:return le(e,":",":"+se)+e;case 101:return le(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+se+(Be(e,14)===45?"inline-":"")+"box$3$1"+se+"$2$3$1"+Ge+"$2box$3")+e}break;case 5936:switch(Be(e,t+11)){case 114:return se+e+Ge+le(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return se+e+Ge+le(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return se+e+Ge+le(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return se+e+Ge+e+e}return e}var _w=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case $u:t.return=n0(t.value,t.length);break;case qh:return Nr([co(t,{value:le(t.value,"@","@"+se)})],o);case Pu:if(t.length)return cw(t.props,function(i){switch(lw(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Nr([co(t,{props:[le(i,/:(read-\w+)/,":"+ba+"$1")]})],o);case"::placeholder":return Nr([co(t,{props:[le(i,/:(plac\w+)/,":"+se+"input-$1")]}),co(t,{props:[le(i,/:(plac\w+)/,":"+ba+"$1")]}),co(t,{props:[le(i,/:(plac\w+)/,Ge+"input-$1")]})],o)}return""})}},jw=[_w],Tw=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var k=v.getAttribute("data-emotion");k.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var o=t.stylisPlugins||jw,i={},a,s=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var k=v.getAttribute("data-emotion").split(" "),h=1;h<k.length;h++)i[k[h]]=!0;s.push(v)});var c,l=[Cw,Ew];{var u,d=[yw,ww(function(v){u.insert(v)})],f=xw(l.concat(o,d)),m=function(k){return Nr(gw(k),f)};c=function(k,h,p,y){u=p,m(k?k+"{"+h.styles+"}":h.styles),y&&(g.inserted[h.name]=!0)}}var g={key:n,sheet:new nw({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:c};return g.sheet.hydrate(s),g},Pw=!0;function $w(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var r0=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||Pw===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},Ow=function(t,n,r){r0(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function Rw(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Aw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},zw=/[A-Z]|^ms/g,Iw=/_EMO_([^_]+?)_([^]*?)_EMO_/g,o0=function(t){return t.charCodeAt(1)===45},Ef=function(t){return t!=null&&typeof t!="boolean"},tl=hh(function(e){return o0(e)?e:e.replace(zw,"-$&").toLowerCase()}),_f=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Iw,function(r,o,i){return Ut={name:o,styles:i,next:Ut},o})}return Aw[t]!==1&&!o0(t)&&typeof n=="number"&&n!==0?n+"px":n};function qo(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Ut={name:n.name,styles:n.styles,next:Ut},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Ut={name:r.name,styles:r.styles,next:Ut},r=r.next;var o=n.styles+";";return o}return Nw(e,t,n)}case"function":{if(e!==void 0){var i=Ut,a=n(e);return Ut=i,qo(e,t,a)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function Nw(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=qo(e,t,n[o])+";";else for(var i in n){var a=n[i];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=i+"{"+t[a]+"}":Ef(a)&&(r+=tl(i)+":"+_f(i,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var s=0;s<a.length;s++)Ef(a[s])&&(r+=tl(i)+":"+_f(i,a[s])+";");else{var c=qo(e,t,a);switch(i){case"animation":case"animationName":{r+=tl(i)+":"+c+";";break}default:r+=i+"{"+c+"}"}}}return r}var jf=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Ut,Mw=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";Ut=void 0;var a=t[0];a==null||a.raw===void 0?(o=!1,i+=qo(r,n,a)):i+=a[0];for(var s=1;s<t.length;s++)i+=qo(r,n,t[s]),o&&(i+=a[s]);jf.lastIndex=0;for(var c="",l;(l=jf.exec(i))!==null;)c+="-"+l[1];var u=Rw(i)+c;return{name:u,styles:i,next:Ut}},Lw=function(t){return t()},Dw=al.useInsertionEffect?al.useInsertionEffect:!1,Fw=Dw||Lw,i0=T.createContext(typeof HTMLElement<"u"?Tw({key:"css"}):null);i0.Provider;var Bw=function(t){return T.forwardRef(function(n,r){var o=T.useContext(i0);return t(n,o,r)})},a0=T.createContext({}),Uw=ec,Vw=function(t){return t!=="theme"},Tf=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?Uw:Vw},Pf=function(t,n,r){var o;if(n){var i=n.shouldForwardProp;o=t.__emotion_forwardProp&&i?function(a){return t.__emotion_forwardProp(a)&&i(a)}:i}return typeof o!="function"&&r&&(o=t.__emotion_forwardProp),o},Hw=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return r0(n,r,o),Fw(function(){return Ow(n,r,o)}),null},Ww=function e(t,n){var r=t.__emotion_real===t,o=r&&t.__emotion_base||t,i,a;n!==void 0&&(i=n.label,a=n.target);var s=Pf(t,n,r),c=s||Tf(o),l=!c("as");return function(){var u=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(i!==void 0&&d.push("label:"+i+";"),u[0]==null||u[0].raw===void 0)d.push.apply(d,u);else{d.push(u[0][0]);for(var f=u.length,m=1;m<f;m++)d.push(u[m],u[0][m])}var g=Bw(function(v,k,h){var p=l&&v.as||o,y="",w=[],b=v;if(v.theme==null){b={};for(var _ in v)b[_]=v[_];b.theme=T.useContext(a0)}typeof v.className=="string"?y=$w(k.registered,w,v.className):v.className!=null&&(y=v.className+" ");var E=Mw(d.concat(w),k.registered,b);y+=k.key+"-"+E.name,a!==void 0&&(y+=" "+a);var $=l&&s===void 0?Tf(p):c,L={};for(var P in v)l&&P==="as"||$(P)&&(L[P]=v[P]);return L.className=y,L.ref=h,T.createElement(T.Fragment,null,T.createElement(Hw,{cache:k,serialized:E,isStringTag:typeof p=="string"}),T.createElement(p,L))});return g.displayName=i!==void 0?i:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",g.defaultProps=t.defaultProps,g.__emotion_real=g,g.__emotion_base=o,g.__emotion_styles=d,g.__emotion_forwardProp=s,Object.defineProperty(g,"toString",{value:function(){return"."+a}}),g.withComponent=function(v,k){return e(v,F({},n,k,{shouldForwardProp:Pf(g,k,!0)})).apply(void 0,d)},g}},Gw=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],pc=Ww.bind();Gw.forEach(function(e){pc[e]=pc(e)});function Kw(e,t){return pc(e,t)}const Qw=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))},Yw=["values","unit","step"],Xw=e=>{const t=Object.keys(e).map(n=>({key:n,val:e[n]}))||[];return t.sort((n,r)=>n.val-r.val),t.reduce((n,r)=>F({},n,{[r.key]:r.val}),{})};function qw(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=e,o=Pe(e,Yw),i=Xw(t),a=Object.keys(i);function s(f){return`@media (min-width:${typeof t[f]=="number"?t[f]:f}${n})`}function c(f){return`@media (max-width:${(typeof t[f]=="number"?t[f]:f)-r/100}${n})`}function l(f,m){const g=a.indexOf(m);return`@media (min-width:${typeof t[f]=="number"?t[f]:f}${n}) and (max-width:${(g!==-1&&typeof t[a[g]]=="number"?t[a[g]]:m)-r/100}${n})`}function u(f){return a.indexOf(f)+1<a.length?l(f,a[a.indexOf(f)+1]):s(f)}function d(f){const m=a.indexOf(f);return m===0?s(a[1]):m===a.length-1?c(a[m]):l(f,a[a.indexOf(f)+1]).replace("@media","@media not all and")}return F({keys:a,values:i,up:s,down:c,between:l,only:u,not:d,unit:n},o)}const Jw={borderRadius:4},Zw=Jw;function jo(e,t){return t?zt(e,t,{clone:!1}):e}const Ru={xs:0,sm:600,md:900,lg:1200,xl:1536},$f={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${Ru[e]}px)`};function sn(e,t,n){const r=e.theme||{};if(Array.isArray(t)){const i=r.breakpoints||$f;return t.reduce((a,s,c)=>(a[i.up(i.keys[c])]=n(t[c]),a),{})}if(typeof t=="object"){const i=r.breakpoints||$f;return Object.keys(t).reduce((a,s)=>{if(Object.keys(i.values||Ru).indexOf(s)!==-1){const c=i.up(s);a[c]=n(t[s],s)}else{const c=s;a[c]=t[c]}return a},{})}return n(t)}function e2(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((r,o)=>{const i=e.up(o);return r[i]={},r},{}))||{}}function t2(e,t){return e.reduce((n,r)=>{const o=n[r];return(!o||Object.keys(o).length===0)&&delete n[r],n},t)}function vs(e,t,n=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&n){const r=`vars.${t}`.split(".").reduce((o,i)=>o&&o[i]?o[i]:null,e);if(r!=null)return r}return t.split(".").reduce((r,o)=>r&&r[o]!=null?r[o]:null,e)}function Sa(e,t,n,r=n){let o;return typeof e=="function"?o=e(n):Array.isArray(e)?o=e[n]||r:o=vs(e,n)||r,t&&(o=t(o,r,e)),o}function $e(e){const{prop:t,cssProperty:n=e.prop,themeKey:r,transform:o}=e,i=a=>{if(a[t]==null)return null;const s=a[t],c=a.theme,l=vs(c,r)||{};return sn(a,s,d=>{let f=Sa(l,o,d);return d===f&&typeof d=="string"&&(f=Sa(l,o,`${t}${d==="default"?"":kt(d)}`,d)),n===!1?f:{[n]:f}})};return i.propTypes={},i.filterProps=[t],i}function n2(e){const t={};return n=>(t[n]===void 0&&(t[n]=e(n)),t[n])}const r2={m:"margin",p:"padding"},o2={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},Of={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},i2=n2(e=>{if(e.length>2)if(Of[e])e=Of[e];else return[e];const[t,n]=e.split(""),r=r2[t],o=o2[n]||"";return Array.isArray(o)?o.map(i=>r+i):[r+o]}),Au=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],zu=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...Au,...zu];function ii(e,t,n,r){var o;const i=(o=vs(e,t,!1))!=null?o:n;return typeof i=="number"?a=>typeof a=="string"?a:i*a:Array.isArray(i)?a=>typeof a=="string"?a:i[a]:typeof i=="function"?i:()=>{}}function s0(e){return ii(e,"spacing",8)}function ai(e,t){if(typeof t=="string"||t==null)return t;const n=Math.abs(t),r=e(n);return t>=0?r:typeof r=="number"?-r:`-${r}`}function a2(e,t){return n=>e.reduce((r,o)=>(r[o]=ai(t,n),r),{})}function s2(e,t,n,r){if(t.indexOf(n)===-1)return null;const o=i2(n),i=a2(o,r),a=e[n];return sn(e,a,i)}function l0(e,t){const n=s0(e.theme);return Object.keys(e).map(r=>s2(e,t,r,n)).reduce(jo,{})}function Ce(e){return l0(e,Au)}Ce.propTypes={};Ce.filterProps=Au;function Ee(e){return l0(e,zu)}Ee.propTypes={};Ee.filterProps=zu;function l2(e=8){if(e.mui)return e;const t=s0({spacing:e}),n=(...r)=>(r.length===0?[1]:r).map(i=>{const a=t(i);return typeof a=="number"?`${a}px`:a}).join(" ");return n.mui=!0,n}function ys(...e){const t=e.reduce((r,o)=>(o.filterProps.forEach(i=>{r[i]=o}),r),{}),n=r=>Object.keys(r).reduce((o,i)=>t[i]?jo(o,t[i](r)):o,{});return n.propTypes={},n.filterProps=e.reduce((r,o)=>r.concat(o.filterProps),[]),n}function yt(e){return typeof e!="number"?e:`${e}px solid`}function Et(e,t){return $e({prop:e,themeKey:"borders",transform:t})}const c2=Et("border",yt),u2=Et("borderTop",yt),d2=Et("borderRight",yt),f2=Et("borderBottom",yt),p2=Et("borderLeft",yt),m2=Et("borderColor"),h2=Et("borderTopColor"),g2=Et("borderRightColor"),v2=Et("borderBottomColor"),y2=Et("borderLeftColor"),x2=Et("outline",yt),w2=Et("outlineColor"),xs=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=ii(e.theme,"shape.borderRadius",4),n=r=>({borderRadius:ai(t,r)});return sn(e,e.borderRadius,n)}return null};xs.propTypes={};xs.filterProps=["borderRadius"];ys(c2,u2,d2,f2,p2,m2,h2,g2,v2,y2,xs,x2,w2);const ws=e=>{if(e.gap!==void 0&&e.gap!==null){const t=ii(e.theme,"spacing",8),n=r=>({gap:ai(t,r)});return sn(e,e.gap,n)}return null};ws.propTypes={};ws.filterProps=["gap"];const ks=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=ii(e.theme,"spacing",8),n=r=>({columnGap:ai(t,r)});return sn(e,e.columnGap,n)}return null};ks.propTypes={};ks.filterProps=["columnGap"];const bs=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=ii(e.theme,"spacing",8),n=r=>({rowGap:ai(t,r)});return sn(e,e.rowGap,n)}return null};bs.propTypes={};bs.filterProps=["rowGap"];const k2=$e({prop:"gridColumn"}),b2=$e({prop:"gridRow"}),S2=$e({prop:"gridAutoFlow"}),C2=$e({prop:"gridAutoColumns"}),E2=$e({prop:"gridAutoRows"}),_2=$e({prop:"gridTemplateColumns"}),j2=$e({prop:"gridTemplateRows"}),T2=$e({prop:"gridTemplateAreas"}),P2=$e({prop:"gridArea"});ys(ws,ks,bs,k2,b2,S2,C2,E2,_2,j2,T2,P2);function Mr(e,t){return t==="grey"?t:e}const $2=$e({prop:"color",themeKey:"palette",transform:Mr}),O2=$e({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Mr}),R2=$e({prop:"backgroundColor",themeKey:"palette",transform:Mr});ys($2,O2,R2);function st(e){return e<=1&&e!==0?`${e*100}%`:e}const A2=$e({prop:"width",transform:st}),Iu=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=n=>{var r,o;const i=((r=e.theme)==null||(r=r.breakpoints)==null||(r=r.values)==null?void 0:r[n])||Ru[n];return i?((o=e.theme)==null||(o=o.breakpoints)==null?void 0:o.unit)!=="px"?{maxWidth:`${i}${e.theme.breakpoints.unit}`}:{maxWidth:i}:{maxWidth:st(n)}};return sn(e,e.maxWidth,t)}return null};Iu.filterProps=["maxWidth"];const z2=$e({prop:"minWidth",transform:st}),I2=$e({prop:"height",transform:st}),N2=$e({prop:"maxHeight",transform:st}),M2=$e({prop:"minHeight",transform:st});$e({prop:"size",cssProperty:"width",transform:st});$e({prop:"size",cssProperty:"height",transform:st});const L2=$e({prop:"boxSizing"});ys(A2,Iu,z2,I2,N2,M2,L2);const D2={border:{themeKey:"borders",transform:yt},borderTop:{themeKey:"borders",transform:yt},borderRight:{themeKey:"borders",transform:yt},borderBottom:{themeKey:"borders",transform:yt},borderLeft:{themeKey:"borders",transform:yt},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:yt},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:xs},color:{themeKey:"palette",transform:Mr},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Mr},backgroundColor:{themeKey:"palette",transform:Mr},p:{style:Ee},pt:{style:Ee},pr:{style:Ee},pb:{style:Ee},pl:{style:Ee},px:{style:Ee},py:{style:Ee},padding:{style:Ee},paddingTop:{style:Ee},paddingRight:{style:Ee},paddingBottom:{style:Ee},paddingLeft:{style:Ee},paddingX:{style:Ee},paddingY:{style:Ee},paddingInline:{style:Ee},paddingInlineStart:{style:Ee},paddingInlineEnd:{style:Ee},paddingBlock:{style:Ee},paddingBlockStart:{style:Ee},paddingBlockEnd:{style:Ee},m:{style:Ce},mt:{style:Ce},mr:{style:Ce},mb:{style:Ce},ml:{style:Ce},mx:{style:Ce},my:{style:Ce},margin:{style:Ce},marginTop:{style:Ce},marginRight:{style:Ce},marginBottom:{style:Ce},marginLeft:{style:Ce},marginX:{style:Ce},marginY:{style:Ce},marginInline:{style:Ce},marginInlineStart:{style:Ce},marginInlineEnd:{style:Ce},marginBlock:{style:Ce},marginBlockStart:{style:Ce},marginBlockEnd:{style:Ce},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:ws},rowGap:{style:bs},columnGap:{style:ks},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:st},maxWidth:{style:Iu},minWidth:{transform:st},height:{transform:st},maxHeight:{transform:st},minHeight:{transform:st},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},Ss=D2;function F2(...e){const t=e.reduce((r,o)=>r.concat(Object.keys(o)),[]),n=new Set(t);return e.every(r=>n.size===Object.keys(r).length)}function B2(e,t){return typeof e=="function"?e(t):e}function U2(){function e(n,r,o,i){const a={[n]:r,theme:o},s=i[n];if(!s)return{[n]:r};const{cssProperty:c=n,themeKey:l,transform:u,style:d}=s;if(r==null)return null;if(l==="typography"&&r==="inherit")return{[n]:r};const f=vs(o,l)||{};return d?d(a):sn(a,r,g=>{let v=Sa(f,u,g);return g===v&&typeof g=="string"&&(v=Sa(f,u,`${n}${g==="default"?"":kt(g)}`,g)),c===!1?v:{[c]:v}})}function t(n){var r;const{sx:o,theme:i={}}=n||{};if(!o)return null;const a=(r=i.unstable_sxConfig)!=null?r:Ss;function s(c){let l=c;if(typeof c=="function")l=c(i);else if(typeof c!="object")return c;if(!l)return null;const u=e2(i.breakpoints),d=Object.keys(u);let f=u;return Object.keys(l).forEach(m=>{const g=B2(l[m],i);if(g!=null)if(typeof g=="object")if(a[m])f=jo(f,e(m,g,i,a));else{const v=sn({theme:i},g,k=>({[m]:k}));F2(v,g)?f[m]=t({sx:g,theme:i}):f=jo(f,v)}else f=jo(f,e(m,g,i,a))}),t2(d,f)}return Array.isArray(o)?o.map(s):s(o)}return t}const c0=U2();c0.filterProps=["sx"];const Nu=c0,V2=["breakpoints","palette","spacing","shape"];function Mu(e={},...t){const{breakpoints:n={},palette:r={},spacing:o,shape:i={}}=e,a=Pe(e,V2),s=qw(n),c=l2(o);let l=zt({breakpoints:s,direction:"ltr",components:{},palette:F({mode:"light"},r),spacing:c,shape:F({},Zw,i)},a);return l=t.reduce((u,d)=>zt(u,d),l),l.unstable_sxConfig=F({},Ss,a==null?void 0:a.unstable_sxConfig),l.unstable_sx=function(d){return Nu({sx:d,theme:this})},l}function H2(e){return Object.keys(e).length===0}function W2(e=null){const t=T.useContext(a0);return!t||H2(t)?e:t}const G2=Mu();function u0(e=G2){return W2(e)}const K2=["sx"],Q2=e=>{var t,n;const r={systemProps:{},otherProps:{}},o=(t=e==null||(n=e.theme)==null?void 0:n.unstable_sxConfig)!=null?t:Ss;return Object.keys(e).forEach(i=>{o[i]?r.systemProps[i]=e[i]:r.otherProps[i]=e[i]}),r};function Y2(e){const{sx:t}=e,n=Pe(e,K2),{systemProps:r,otherProps:o}=Q2(n);let i;return Array.isArray(t)?i=[r,...t]:typeof t=="function"?i=(...a)=>{const s=t(...a);return Jt(s)?F({},r,s):r}:i=F({},r,t),F({},o,{sx:i})}function d0(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=d0(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function ln(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=d0(e))&&(r&&(r+=" "),r+=t);return r}const X2=["variant"];function Rf(e){return e.length===0}function f0(e){const{variant:t}=e,n=Pe(e,X2);let r=t||"";return Object.keys(n).sort().forEach(o=>{o==="color"?r+=Rf(r)?e[o]:kt(e[o]):r+=`${Rf(r)?o:kt(o)}${kt(e[o].toString())}`}),r}const q2=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function J2(e){return Object.keys(e).length===0}function Z2(e){return typeof e=="string"&&e.charCodeAt(0)>96}const ek=(e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null,Ca=e=>{const t={};return e&&e.forEach(n=>{const r=f0(n.props);t[r]=n.style}),t},tk=(e,t)=>{let n=[];return t&&t.components&&t.components[e]&&t.components[e].variants&&(n=t.components[e].variants),Ca(n)},Ea=(e,t,n)=>{const{ownerState:r={}}=e,o=[];return n&&n.forEach(i=>{let a=!0;Object.keys(i.props).forEach(s=>{r[s]!==i.props[s]&&e[s]!==i.props[s]&&(a=!1)}),a&&o.push(t[f0(i.props)])}),o},nk=(e,t,n,r)=>{var o;const i=n==null||(o=n.components)==null||(o=o[r])==null?void 0:o.variants;return Ea(e,t,i)};function Gi(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const rk=Mu(),ok=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function Ki({defaultTheme:e,theme:t,themeId:n}){return J2(t)?e:t[n]||t}function ik(e){return e?(t,n)=>n[e]:null}const Af=({styledArg:e,props:t,defaultTheme:n,themeId:r})=>{const o=e(F({},t,{theme:Ki(F({},t,{defaultTheme:n,themeId:r}))}));let i;if(o&&o.variants&&(i=o.variants,delete o.variants),i){const a=Ea(t,Ca(i),i);return[o,...a]}return o};function ak(e={}){const{themeId:t,defaultTheme:n=rk,rootShouldForwardProp:r=Gi,slotShouldForwardProp:o=Gi}=e,i=a=>Nu(F({},a,{theme:Ki(F({},a,{defaultTheme:n,themeId:t}))}));return i.__mui_systemSx=!0,(a,s={})=>{Qw(a,w=>w.filter(b=>!(b!=null&&b.__mui_systemSx)));const{name:c,slot:l,skipVariantsResolver:u,skipSx:d,overridesResolver:f=ik(ok(l))}=s,m=Pe(s,q2),g=u!==void 0?u:l&&l!=="Root"&&l!=="root"||!1,v=d||!1;let k,h=Gi;l==="Root"||l==="root"?h=r:l?h=o:Z2(a)&&(h=void 0);const p=Kw(a,F({shouldForwardProp:h,label:k},m)),y=(w,...b)=>{const _=b?b.map(P=>{if(typeof P=="function"&&P.__emotion_real!==P)return A=>Af({styledArg:P,props:A,defaultTheme:n,themeId:t});if(Jt(P)){let A=P,D;return P&&P.variants&&(D=P.variants,delete A.variants,A=W=>{let H=P;return Ea(W,Ca(D),D).forEach(U=>{H=zt(H,U)}),H}),A}return P}):[];let E=w;if(Jt(w)){let P;w&&w.variants&&(P=w.variants,delete E.variants,E=A=>{let D=w;return Ea(A,Ca(P),P).forEach(H=>{D=zt(D,H)}),D})}else typeof w=="function"&&w.__emotion_real!==w&&(E=P=>Af({styledArg:w,props:P,defaultTheme:n,themeId:t}));c&&f&&_.push(P=>{const A=Ki(F({},P,{defaultTheme:n,themeId:t})),D=ek(c,A);if(D){const W={};return Object.entries(D).forEach(([H,B])=>{W[H]=typeof B=="function"?B(F({},P,{theme:A})):B}),f(P,W)}return null}),c&&!g&&_.push(P=>{const A=Ki(F({},P,{defaultTheme:n,themeId:t}));return nk(P,tk(c,A),A,c)}),v||_.push(i);const $=_.length-b.length;if(Array.isArray(w)&&$>0){const P=new Array($).fill("");E=[...w,...P],E.raw=[...w.raw,...P]}const L=p(E,..._);return a.muiName&&(L.muiName=a.muiName),L};return p.withConfig&&(y.withConfig=p.withConfig),y}}function sk(e){const{theme:t,name:n,props:r}=e;return!t||!t.components||!t.components[n]||!t.components[n].defaultProps?r:Yh(t.components[n].defaultProps,r)}function lk({props:e,name:t,defaultTheme:n,themeId:r}){let o=u0(n);return r&&(o=o[r]||o),sk({theme:o,name:t,props:e})}function Lu(e,t=0,n=1){return Math.min(Math.max(t,e),n)}function ck(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,o)=>o<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function er(e){if(e.type)return e;if(e.charAt(0)==="#")return er(ck(e));const t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(Qr(9,e));let r=e.substring(t+1,e.length-1),o;if(n==="color"){if(r=r.split(" "),o=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(o)===-1)throw new Error(Qr(10,o))}else r=r.split(",");return r=r.map(i=>parseFloat(i)),{type:n,values:r,colorSpace:o}}function Cs(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return t.indexOf("rgb")!==-1?r=r.map((o,i)=>i<3?parseInt(o,10):o):t.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),t.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${t}(${r})`}function uk(e){e=er(e);const{values:t}=e,n=t[0],r=t[1]/100,o=t[2]/100,i=r*Math.min(o,1-o),a=(l,u=(l+n/30)%12)=>o-i*Math.max(Math.min(u-3,9-u,1),-1);let s="rgb";const c=[Math.round(a(0)*255),Math.round(a(8)*255),Math.round(a(4)*255)];return e.type==="hsla"&&(s+="a",c.push(t[3])),Cs({type:s,values:c})}function mc(e){e=er(e);let t=e.type==="hsl"||e.type==="hsla"?er(uk(e)).values:e.values;return t=t.map(n=>(e.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function dk(e,t){const n=mc(e),r=mc(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function zf(e,t){return e=er(e),t=Lu(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,Cs(e)}function p0(e,t){if(e=er(e),t=Lu(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]*=1-t;return Cs(e)}function m0(e,t){if(e=er(e),t=Lu(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return Cs(e)}function fk(e,t=.15){return mc(e)>.5?p0(e,t):m0(e,t)}function pk(e,t){return F({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}const mk=["mode","contrastThreshold","tonalOffset"],If={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Ko.white,default:Ko.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},nl={text:{primary:Ko.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Ko.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function Nf(e,t,n,r){const o=r.light||r,i=r.dark||r*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t==="light"?e.light=m0(e.main,o):t==="dark"&&(e.dark=p0(e.main,i)))}function hk(e="light"){return e==="dark"?{main:fr[200],light:fr[50],dark:fr[400]}:{main:fr[700],light:fr[400],dark:fr[800]}}function gk(e="light"){return e==="dark"?{main:dr[200],light:dr[50],dark:dr[400]}:{main:dr[500],light:dr[300],dark:dr[700]}}function vk(e="light"){return e==="dark"?{main:ur[500],light:ur[300],dark:ur[700]}:{main:ur[700],light:ur[400],dark:ur[800]}}function yk(e="light"){return e==="dark"?{main:pr[400],light:pr[300],dark:pr[700]}:{main:pr[700],light:pr[500],dark:pr[900]}}function xk(e="light"){return e==="dark"?{main:mr[400],light:mr[300],dark:mr[700]}:{main:mr[800],light:mr[500],dark:mr[900]}}function wk(e="light"){return e==="dark"?{main:lo[400],light:lo[300],dark:lo[700]}:{main:"#ed6c02",light:lo[500],dark:lo[900]}}function kk(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2}=e,o=Pe(e,mk),i=e.primary||hk(t),a=e.secondary||gk(t),s=e.error||vk(t),c=e.info||yk(t),l=e.success||xk(t),u=e.warning||wk(t);function d(v){return dk(v,nl.text.primary)>=n?nl.text.primary:If.text.primary}const f=({color:v,name:k,mainShade:h=500,lightShade:p=300,darkShade:y=700})=>{if(v=F({},v),!v.main&&v[h]&&(v.main=v[h]),!v.hasOwnProperty("main"))throw new Error(Qr(11,k?` (${k})`:"",h));if(typeof v.main!="string")throw new Error(Qr(12,k?` (${k})`:"",JSON.stringify(v.main)));return Nf(v,"light",p,r),Nf(v,"dark",y,r),v.contrastText||(v.contrastText=d(v.main)),v},m={dark:nl,light:If};return zt(F({common:F({},Ko),mode:t,primary:f({color:i,name:"primary"}),secondary:f({color:a,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:f({color:s,name:"error"}),warning:f({color:u,name:"warning"}),info:f({color:c,name:"info"}),success:f({color:l,name:"success"}),grey:Kx,contrastThreshold:n,getContrastText:d,augmentColor:f,tonalOffset:r},m[t]),o)}const bk=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function Sk(e){return Math.round(e*1e5)/1e5}const Mf={textTransform:"uppercase"},Lf='"Roboto", "Helvetica", "Arial", sans-serif';function Ck(e,t){const n=typeof t=="function"?t(e):t,{fontFamily:r=Lf,fontSize:o=14,fontWeightLight:i=300,fontWeightRegular:a=400,fontWeightMedium:s=500,fontWeightBold:c=700,htmlFontSize:l=16,allVariants:u,pxToRem:d}=n,f=Pe(n,bk),m=o/14,g=d||(h=>`${h/l*m}rem`),v=(h,p,y,w,b)=>F({fontFamily:r,fontWeight:h,fontSize:g(p),lineHeight:y},r===Lf?{letterSpacing:`${Sk(w/p)}em`}:{},b,u),k={h1:v(i,96,1.167,-1.5),h2:v(i,60,1.2,-.5),h3:v(a,48,1.167,0),h4:v(a,34,1.235,.25),h5:v(a,24,1.334,0),h6:v(s,20,1.6,.15),subtitle1:v(a,16,1.75,.15),subtitle2:v(s,14,1.57,.1),body1:v(a,16,1.5,.15),body2:v(a,14,1.43,.15),button:v(s,14,1.75,.4,Mf),caption:v(a,12,1.66,.4),overline:v(a,12,2.66,1,Mf),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return zt(F({htmlFontSize:l,pxToRem:g,fontFamily:r,fontSize:o,fontWeightLight:i,fontWeightRegular:a,fontWeightMedium:s,fontWeightBold:c},k),f,{clone:!1})}const Ek=.2,_k=.14,jk=.12;function ye(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Ek})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${_k})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${jk})`].join(",")}const Tk=["none",ye(0,2,1,-1,0,1,1,0,0,1,3,0),ye(0,3,1,-2,0,2,2,0,0,1,5,0),ye(0,3,3,-2,0,3,4,0,0,1,8,0),ye(0,2,4,-1,0,4,5,0,0,1,10,0),ye(0,3,5,-1,0,5,8,0,0,1,14,0),ye(0,3,5,-1,0,6,10,0,0,1,18,0),ye(0,4,5,-2,0,7,10,1,0,2,16,1),ye(0,5,5,-3,0,8,10,1,0,3,14,2),ye(0,5,6,-3,0,9,12,1,0,3,16,2),ye(0,6,6,-3,0,10,14,1,0,4,18,3),ye(0,6,7,-4,0,11,15,1,0,4,20,3),ye(0,7,8,-4,0,12,17,2,0,5,22,4),ye(0,7,8,-4,0,13,19,2,0,5,24,4),ye(0,7,9,-4,0,14,21,2,0,5,26,4),ye(0,8,9,-5,0,15,22,2,0,6,28,5),ye(0,8,10,-5,0,16,24,2,0,6,30,5),ye(0,8,11,-5,0,17,26,2,0,6,32,5),ye(0,9,11,-5,0,18,28,2,0,7,34,6),ye(0,9,12,-6,0,19,29,2,0,7,36,6),ye(0,10,13,-6,0,20,31,3,0,8,38,7),ye(0,10,13,-6,0,21,33,3,0,8,40,7),ye(0,10,14,-6,0,22,35,3,0,8,42,7),ye(0,11,14,-7,0,23,36,3,0,9,44,8),ye(0,11,15,-7,0,24,38,3,0,9,46,8)],Pk=Tk,$k=["duration","easing","delay"],Ok={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},Rk={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Df(e){return`${Math.round(e)}ms`}function Ak(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function zk(e){const t=F({},Ok,e.easing),n=F({},Rk,e.duration);return F({getAutoHeightDuration:Ak,create:(o=["all"],i={})=>{const{duration:a=n.standard,easing:s=t.easeInOut,delay:c=0}=i;return Pe(i,$k),(Array.isArray(o)?o:[o]).map(l=>`${l} ${typeof a=="string"?a:Df(a)} ${s} ${typeof c=="string"?c:Df(c)}`).join(",")}},e,{easing:t,duration:n})}const Ik={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},Nk=Ik,Mk=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function Lk(e={},...t){const{mixins:n={},palette:r={},transitions:o={},typography:i={}}=e,a=Pe(e,Mk);if(e.vars)throw new Error(Qr(18));const s=kk(r),c=Mu(e);let l=zt(c,{mixins:pk(c.breakpoints,n),palette:s,shadows:Pk.slice(),typography:Ck(s,i),transitions:zk(o),zIndex:F({},Nk)});return l=zt(l,a),l=t.reduce((u,d)=>zt(u,d),l),l.unstable_sxConfig=F({},Ss,a==null?void 0:a.unstable_sxConfig),l.unstable_sx=function(d){return Nu({sx:d,theme:this})},l}const Dk=Lk(),Du=Dk;function Fu(){const e=u0(Du);return e[Tu]||e}function sr({props:e,name:t}){return lk({props:e,name:t,defaultTheme:Du,themeId:Tu})}const Fk=e=>Gi(e)&&e!=="classes",Bk=ak({themeId:Tu,defaultTheme:Du,rootShouldForwardProp:Fk}),Qt=Bk,Uk=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},Ff=Uk;function hc(e,t){return hc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},hc(e,t)}function Vk(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,hc(e,t)}const Bf={disabled:!1},h0=je.createContext(null);var Hk=function(t){return t.scrollTop},go="unmounted",Dn="exited",Fn="entering",gr="entered",gc="exiting",un=function(e){Vk(t,e);function t(r,o){var i;i=e.call(this,r,o)||this;var a=o,s=a&&!a.isMounting?r.enter:r.appear,c;return i.appearStatus=null,r.in?s?(c=Dn,i.appearStatus=Fn):c=gr:r.unmountOnExit||r.mountOnEnter?c=go:c=Dn,i.state={status:c},i.nextCallback=null,i}t.getDerivedStateFromProps=function(o,i){var a=o.in;return a&&i.status===go?{status:Dn}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(o){var i=null;if(o!==this.props){var a=this.state.status;this.props.in?a!==Fn&&a!==gr&&(i=Fn):(a===Fn||a===gr)&&(i=gc)}this.updateStatus(!1,i)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var o=this.props.timeout,i,a,s;return i=a=s=o,o!=null&&typeof o!="number"&&(i=o.exit,a=o.enter,s=o.appear!==void 0?o.appear:a),{exit:i,enter:a,appear:s}},n.updateStatus=function(o,i){if(o===void 0&&(o=!1),i!==null)if(this.cancelNextCallback(),i===Fn){if(this.props.unmountOnExit||this.props.mountOnEnter){var a=this.props.nodeRef?this.props.nodeRef.current:Ei.findDOMNode(this);a&&Hk(a)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Dn&&this.setState({status:go})},n.performEnter=function(o){var i=this,a=this.props.enter,s=this.context?this.context.isMounting:o,c=this.props.nodeRef?[s]:[Ei.findDOMNode(this),s],l=c[0],u=c[1],d=this.getTimeouts(),f=s?d.appear:d.enter;if(!o&&!a||Bf.disabled){this.safeSetState({status:gr},function(){i.props.onEntered(l)});return}this.props.onEnter(l,u),this.safeSetState({status:Fn},function(){i.props.onEntering(l,u),i.onTransitionEnd(f,function(){i.safeSetState({status:gr},function(){i.props.onEntered(l,u)})})})},n.performExit=function(){var o=this,i=this.props.exit,a=this.getTimeouts(),s=this.props.nodeRef?void 0:Ei.findDOMNode(this);if(!i||Bf.disabled){this.safeSetState({status:Dn},function(){o.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:gc},function(){o.props.onExiting(s),o.onTransitionEnd(a.exit,function(){o.safeSetState({status:Dn},function(){o.props.onExited(s)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(o,i){i=this.setNextCallback(i),this.setState(o,i)},n.setNextCallback=function(o){var i=this,a=!0;return this.nextCallback=function(s){a&&(a=!1,i.nextCallback=null,o(s))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},n.onTransitionEnd=function(o,i){this.setNextCallback(i);var a=this.props.nodeRef?this.props.nodeRef.current:Ei.findDOMNode(this),s=o==null&&!this.props.addEndListener;if(!a||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var c=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],l=c[0],u=c[1];this.props.addEndListener(l,u)}o!=null&&setTimeout(this.nextCallback,o)},n.render=function(){var o=this.state.status;if(o===go)return null;var i=this.props,a=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var s=Pe(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return je.createElement(h0.Provider,{value:null},typeof a=="function"?a(o,s):je.cloneElement(je.Children.only(a),s))},t}(je.Component);un.contextType=h0;un.propTypes={};function hr(){}un.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:hr,onEntering:hr,onEntered:hr,onExit:hr,onExiting:hr,onExited:hr};un.UNMOUNTED=go;un.EXITED=Dn;un.ENTERING=Fn;un.ENTERED=gr;un.EXITING=gc;const g0=un,v0=e=>e.scrollTop;function _a(e,t){var n,r;const{timeout:o,easing:i,style:a={}}=e;return{duration:(n=a.transitionDuration)!=null?n:typeof o=="number"?o:o[t.mode]||0,easing:(r=a.transitionTimingFunction)!=null?r:typeof i=="object"?i[t.mode]:i,delay:a.transitionDelay}}function Wk(e){return zn("MuiPaper",e)}ar("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Gk=["className","component","elevation","square","variant"],Kk=e=>{const{square:t,elevation:n,variant:r,classes:o}=e,i={root:["root",r,!t&&"rounded",r==="elevation"&&`elevation${n}`]};return ir(i,Wk,o)},Qk=Qt("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(({theme:e,ownerState:t})=>{var n;return F({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&F({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${zf("#fff",Ff(t.elevation))}, ${zf("#fff",Ff(t.elevation))})`},e.vars&&{backgroundImage:(n=e.vars.overlays)==null?void 0:n[t.elevation]}))}),Yk=T.forwardRef(function(t,n){const r=sr({props:t,name:"MuiPaper"}),{className:o,component:i="div",elevation:a=1,square:s=!1,variant:c="elevation"}=r,l=Pe(r,Gk),u=F({},r,{component:i,elevation:a,square:s,variant:c}),d=Kk(u);return x.jsx(Qk,F({as:i,ownerState:u,className:ln(d.root,o),ref:n},l))}),Xk=Yk;function qk(e){return zn("MuiTypography",e)}ar("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const Jk=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],Zk=e=>{const{align:t,gutterBottom:n,noWrap:r,paragraph:o,variant:i,classes:a}=e,s={root:["root",i,e.align!=="inherit"&&`align${kt(t)}`,n&&"gutterBottom",r&&"noWrap",o&&"paragraph"]};return ir(s,qk,a)},eb=Qt("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],n.align!=="inherit"&&t[`align${kt(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>F({margin:0},t.variant==="inherit"&&{font:"inherit"},t.variant!=="inherit"&&e.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),Uf={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},tb={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},nb=e=>tb[e]||e,rb=T.forwardRef(function(t,n){const r=sr({props:t,name:"MuiTypography"}),o=nb(r.color),i=Y2(F({},r,{color:o})),{align:a="inherit",className:s,component:c,gutterBottom:l=!1,noWrap:u=!1,paragraph:d=!1,variant:f="body1",variantMapping:m=Uf}=i,g=Pe(i,Jk),v=F({},i,{align:a,color:o,className:s,component:c,gutterBottom:l,noWrap:u,paragraph:d,variant:f,variantMapping:m}),k=c||(d?"p":m[f]||Uf[f])||"span",h=Zk(v);return x.jsx(eb,F({as:k,ref:n,ownerState:v,className:ln(h.root,s)},g))}),ob=rb;function ib(e){return typeof e=="string"}function ab(e,t,n){return e===void 0||ib(e)?t:F({},t,{ownerState:F({},t.ownerState,n)})}function ja(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(r=>r.match(/^on[A-Z]/)&&typeof e[r]=="function"&&!t.includes(r)).forEach(r=>{n[r]=e[r]}),n}function sb(e,t,n){return typeof e=="function"?e(t,n):e}function Vf(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function lb(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:o,className:i}=e;if(!t){const m=ln(n==null?void 0:n.className,i,o==null?void 0:o.className,r==null?void 0:r.className),g=F({},n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),v=F({},n,o,r);return m.length>0&&(v.className=m),Object.keys(g).length>0&&(v.style=g),{props:v,internalRef:void 0}}const a=ja(F({},o,r)),s=Vf(r),c=Vf(o),l=t(a),u=ln(l==null?void 0:l.className,n==null?void 0:n.className,i,o==null?void 0:o.className,r==null?void 0:r.className),d=F({},l==null?void 0:l.style,n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),f=F({},l,n,c,s);return u.length>0&&(f.className=u),Object.keys(d).length>0&&(f.style=d),{props:f,internalRef:l.ref}}const cb=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function vc(e){var t;const{elementType:n,externalSlotProps:r,ownerState:o,skipResolvingSlotProps:i=!1}=e,a=Pe(e,cb),s=i?{}:sb(r,o),{props:c,internalRef:l}=lb(F({},a,{externalSlotProps:s})),u=or(l,s==null?void 0:s.ref,(t=e.additionalProps)==null?void 0:t.ref);return ab(n,F({},c,{ref:u}),o)}function Hf(e){return e.substring(2).toLowerCase()}function ub(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}function db(e){const{children:t,disableReactTree:n=!1,mouseEvent:r="onClick",onClickAway:o,touchEvent:i="onTouchEnd"}=e,a=T.useRef(!1),s=T.useRef(null),c=T.useRef(!1),l=T.useRef(!1);T.useEffect(()=>(setTimeout(()=>{c.current=!0},0),()=>{c.current=!1}),[]);const u=or(t.ref,s),d=Qo(g=>{const v=l.current;l.current=!1;const k=It(s.current);if(!c.current||!s.current||"clientX"in g&&ub(g,k))return;if(a.current){a.current=!1;return}let h;g.composedPath?h=g.composedPath().indexOf(s.current)>-1:h=!k.documentElement.contains(g.target)||s.current.contains(g.target),!h&&(n||!v)&&o(g)}),f=g=>v=>{l.current=!0;const k=t.props[g];k&&k(v)},m={ref:u};return i!==!1&&(m[i]=f(i)),T.useEffect(()=>{if(i!==!1){const g=Hf(i),v=It(s.current),k=()=>{a.current=!0};return v.addEventListener(g,d),v.addEventListener("touchmove",k),()=>{v.removeEventListener(g,d),v.removeEventListener("touchmove",k)}}},[d,i]),r!==!1&&(m[r]=f(r)),T.useEffect(()=>{if(r!==!1){const g=Hf(r),v=It(s.current);return v.addEventListener(g,d),()=>{v.removeEventListener(g,d)}}},[d,r]),x.jsx(T.Fragment,{children:T.cloneElement(t,m)})}const fb=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function pb(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function mb(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=r=>e.ownerDocument.querySelector(`input[type="radio"]${r}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function hb(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||mb(e))}function gb(e){const t=[],n=[];return Array.from(e.querySelectorAll(fb)).forEach((r,o)=>{const i=pb(r);i===-1||!hb(r)||(i===0?t.push(r):n.push({documentOrder:o,tabIndex:i,node:r}))}),n.sort((r,o)=>r.tabIndex===o.tabIndex?r.documentOrder-o.documentOrder:r.tabIndex-o.tabIndex).map(r=>r.node).concat(t)}function vb(){return!0}function yb(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:r=!1,disableRestoreFocus:o=!1,getTabbable:i=gb,isEnabled:a=vb,open:s}=e,c=T.useRef(!1),l=T.useRef(null),u=T.useRef(null),d=T.useRef(null),f=T.useRef(null),m=T.useRef(!1),g=T.useRef(null),v=or(t.ref,g),k=T.useRef(null);T.useEffect(()=>{!s||!g.current||(m.current=!n)},[n,s]),T.useEffect(()=>{if(!s||!g.current)return;const y=It(g.current);return g.current.contains(y.activeElement)||(g.current.hasAttribute("tabIndex")||g.current.setAttribute("tabIndex","-1"),m.current&&g.current.focus()),()=>{o||(d.current&&d.current.focus&&(c.current=!0,d.current.focus()),d.current=null)}},[s]),T.useEffect(()=>{if(!s||!g.current)return;const y=It(g.current),w=E=>{k.current=E,!(r||!a()||E.key!=="Tab")&&y.activeElement===g.current&&E.shiftKey&&(c.current=!0,u.current&&u.current.focus())},b=()=>{const E=g.current;if(E===null)return;if(!y.hasFocus()||!a()||c.current){c.current=!1;return}if(E.contains(y.activeElement)||r&&y.activeElement!==l.current&&y.activeElement!==u.current)return;if(y.activeElement!==f.current)f.current=null;else if(f.current!==null)return;if(!m.current)return;let $=[];if((y.activeElement===l.current||y.activeElement===u.current)&&($=i(g.current)),$.length>0){var L,P;const A=!!((L=k.current)!=null&&L.shiftKey&&((P=k.current)==null?void 0:P.key)==="Tab"),D=$[0],W=$[$.length-1];typeof D!="string"&&typeof W!="string"&&(A?W.focus():D.focus())}else E.focus()};y.addEventListener("focusin",b),y.addEventListener("keydown",w,!0);const _=setInterval(()=>{y.activeElement&&y.activeElement.tagName==="BODY"&&b()},50);return()=>{clearInterval(_),y.removeEventListener("focusin",b),y.removeEventListener("keydown",w,!0)}},[n,r,o,a,s,i]);const h=y=>{d.current===null&&(d.current=y.relatedTarget),m.current=!0,f.current=y.target;const w=t.props.onFocus;w&&w(y)},p=y=>{d.current===null&&(d.current=y.relatedTarget),m.current=!0};return x.jsxs(T.Fragment,{children:[x.jsx("div",{tabIndex:s?0:-1,onFocus:p,ref:l,"data-testid":"sentinelStart"}),T.cloneElement(t,{ref:v,onFocus:h}),x.jsx("div",{tabIndex:s?0:-1,onFocus:p,ref:u,"data-testid":"sentinelEnd"})]})}function xb(e){return typeof e=="function"?e():e}const wb=T.forwardRef(function(t,n){const{children:r,container:o,disablePortal:i=!1}=t,[a,s]=T.useState(null),c=or(T.isValidElement(r)?r.ref:null,n);if(uc(()=>{i||s(xb(o)||document.body)},[o,i]),uc(()=>{if(a&&!i)return cc(n,a),()=>{cc(n,null)}},[n,a,i]),i){if(T.isValidElement(r)){const l={ref:c};return T.cloneElement(r,l)}return x.jsx(T.Fragment,{children:r})}return x.jsx(T.Fragment,{children:a&&pu.createPortal(r,a)})});function kb(e){const t=It(e);return t.body===e?ju(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function To(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Wf(e){return parseInt(ju(e).getComputedStyle(e).paddingRight,10)||0}function bb(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,r=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||r}function Gf(e,t,n,r,o){const i=[t,n,...r];[].forEach.call(e.children,a=>{const s=i.indexOf(a)===-1,c=!bb(a);s&&c&&To(a,o)})}function rl(e,t){let n=-1;return e.some((r,o)=>t(r)?(n=o,!0):!1),n}function Sb(e,t){const n=[],r=e.container;if(!t.disableScrollLock){if(kb(r)){const a=Yx(It(r));n.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${Wf(r)+a}px`;const s=It(r).querySelectorAll(".mui-fixed");[].forEach.call(s,c=>{n.push({value:c.style.paddingRight,property:"padding-right",el:c}),c.style.paddingRight=`${Wf(c)+a}px`})}let i;if(r.parentNode instanceof DocumentFragment)i=It(r).body;else{const a=r.parentElement,s=ju(r);i=(a==null?void 0:a.nodeName)==="HTML"&&s.getComputedStyle(a).overflowY==="scroll"?a:r}n.push({value:i.style.overflow,property:"overflow",el:i},{value:i.style.overflowX,property:"overflow-x",el:i},{value:i.style.overflowY,property:"overflow-y",el:i}),i.style.overflow="hidden"}return()=>{n.forEach(({value:i,el:a,property:s})=>{i?a.style.setProperty(s,i):a.style.removeProperty(s)})}}function Cb(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class Eb{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,n){let r=this.modals.indexOf(t);if(r!==-1)return r;r=this.modals.length,this.modals.push(t),t.modalRef&&To(t.modalRef,!1);const o=Cb(n);Gf(n,t.mount,t.modalRef,o,!0);const i=rl(this.containers,a=>a.container===n);return i!==-1?(this.containers[i].modals.push(t),r):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:o}),r)}mount(t,n){const r=rl(this.containers,i=>i.modals.indexOf(t)!==-1),o=this.containers[r];o.restore||(o.restore=Sb(o,n))}remove(t,n=!0){const r=this.modals.indexOf(t);if(r===-1)return r;const o=rl(this.containers,a=>a.modals.indexOf(t)!==-1),i=this.containers[o];if(i.modals.splice(i.modals.indexOf(t),1),this.modals.splice(r,1),i.modals.length===0)i.restore&&i.restore(),t.modalRef&&To(t.modalRef,n),Gf(i.container,t.mount,t.modalRef,i.hiddenSiblings,!1),this.containers.splice(o,1);else{const a=i.modals[i.modals.length-1];a.modalRef&&To(a.modalRef,!1)}return r}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function _b(e){return typeof e=="function"?e():e}function jb(e){return e?e.props.hasOwnProperty("in"):!1}const Tb=new Eb;function Pb(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:r=!1,manager:o=Tb,closeAfterTransition:i=!1,onTransitionEnter:a,onTransitionExited:s,children:c,onClose:l,open:u,rootRef:d}=e,f=T.useRef({}),m=T.useRef(null),g=T.useRef(null),v=or(g,d),[k,h]=T.useState(!u),p=jb(c);let y=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(y=!1);const w=()=>It(m.current),b=()=>(f.current.modalRef=g.current,f.current.mount=m.current,f.current),_=()=>{o.mount(b(),{disableScrollLock:r}),g.current&&(g.current.scrollTop=0)},E=Qo(()=>{const U=_b(t)||w().body;o.add(b(),U),g.current&&_()}),$=T.useCallback(()=>o.isTopModal(b()),[o]),L=Qo(U=>{m.current=U,U&&(u&&$()?_():g.current&&To(g.current,y))}),P=T.useCallback(()=>{o.remove(b(),y)},[y,o]);T.useEffect(()=>()=>{P()},[P]),T.useEffect(()=>{u?E():(!p||!i)&&P()},[u,P,p,i,E]);const A=U=>q=>{var z;(z=U.onKeyDown)==null||z.call(U,q),!(q.key!=="Escape"||q.which===229||!$())&&(n||(q.stopPropagation(),l&&l(q,"escapeKeyDown")))},D=U=>q=>{var z;(z=U.onClick)==null||z.call(U,q),q.target===q.currentTarget&&l&&l(q,"backdropClick")};return{getRootProps:(U={})=>{const q=ja(e);delete q.onTransitionEnter,delete q.onTransitionExited;const z=F({},q,U);return F({role:"presentation"},z,{onKeyDown:A(z),ref:v})},getBackdropProps:(U={})=>{const q=U;return F({"aria-hidden":!0},q,{onClick:D(q),open:u})},getTransitionProps:()=>{const U=()=>{h(!1),a&&a()},q=()=>{h(!0),s&&s(),i&&P()};return{onEnter:wf(U,c==null?void 0:c.props.onEnter),onExited:wf(q,c==null?void 0:c.props.onExited)}},rootRef:v,portalRef:L,isTopModal:$,exited:k,hasTransition:p}}function $b(e={}){const{autoHideDuration:t=null,disableWindowBlurListener:n=!1,onClose:r,open:o,resumeHideDuration:i}=e,a=T.useRef();T.useEffect(()=>{if(!o)return;function h(p){p.defaultPrevented||(p.key==="Escape"||p.key==="Esc")&&(r==null||r(p,"escapeKeyDown"))}return document.addEventListener("keydown",h),()=>{document.removeEventListener("keydown",h)}},[o,r]);const s=Qo((h,p)=>{r==null||r(h,p)}),c=Qo(h=>{!r||h==null||(clearTimeout(a.current),a.current=setTimeout(()=>{s(null,"timeout")},h))});T.useEffect(()=>(o&&c(t),()=>{clearTimeout(a.current)}),[o,t,c]);const l=h=>{r==null||r(h,"clickaway")},u=()=>{clearTimeout(a.current)},d=T.useCallback(()=>{t!=null&&c(i??t*.5)},[t,i,c]),f=h=>p=>{const y=h.onBlur;y==null||y(p),d()},m=h=>p=>{const y=h.onFocus;y==null||y(p),u()},g=h=>p=>{const y=h.onMouseEnter;y==null||y(p),u()},v=h=>p=>{const y=h.onMouseLeave;y==null||y(p),d()};return T.useEffect(()=>{if(!n&&o)return window.addEventListener("focus",d),window.addEventListener("blur",u),()=>{window.removeEventListener("focus",d),window.removeEventListener("blur",u)}},[n,d,o]),{getRootProps:(h={})=>{const p=F({},ja(e),ja(h));return F({role:"presentation"},h,p,{onBlur:f(p),onFocus:m(p),onMouseEnter:g(p),onMouseLeave:v(p)})},onClickAway:l}}const Ob=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],Rb={entering:{opacity:1},entered:{opacity:1}},Ab=T.forwardRef(function(t,n){const r=Fu(),o={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:i,appear:a=!0,children:s,easing:c,in:l,onEnter:u,onEntered:d,onEntering:f,onExit:m,onExited:g,onExiting:v,style:k,timeout:h=o,TransitionComponent:p=g0}=t,y=Pe(t,Ob),w=T.useRef(null),b=or(w,s.ref,n),_=H=>B=>{if(H){const U=w.current;B===void 0?H(U):H(U,B)}},E=_(f),$=_((H,B)=>{v0(H);const U=_a({style:k,timeout:h,easing:c},{mode:"enter"});H.style.webkitTransition=r.transitions.create("opacity",U),H.style.transition=r.transitions.create("opacity",U),u&&u(H,B)}),L=_(d),P=_(v),A=_(H=>{const B=_a({style:k,timeout:h,easing:c},{mode:"exit"});H.style.webkitTransition=r.transitions.create("opacity",B),H.style.transition=r.transitions.create("opacity",B),m&&m(H)}),D=_(g),W=H=>{i&&i(w.current,H)};return x.jsx(p,F({appear:a,in:l,nodeRef:w,onEnter:$,onEntered:L,onEntering:E,onExit:A,onExited:D,onExiting:P,addEndListener:W,timeout:h},y,{children:(H,B)=>T.cloneElement(s,F({style:F({opacity:0,visibility:H==="exited"&&!l?"hidden":void 0},Rb[H],k,s.props.style),ref:b},B))}))}),zb=Ab;function Ib(e){return zn("MuiBackdrop",e)}ar("MuiBackdrop",["root","invisible"]);const Nb=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],Mb=e=>{const{classes:t,invisible:n}=e;return ir({root:["root",n&&"invisible"]},Ib,t)},Lb=Qt("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>F({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),Db=T.forwardRef(function(t,n){var r,o,i;const a=sr({props:t,name:"MuiBackdrop"}),{children:s,className:c,component:l="div",components:u={},componentsProps:d={},invisible:f=!1,open:m,slotProps:g={},slots:v={},TransitionComponent:k=zb,transitionDuration:h}=a,p=Pe(a,Nb),y=F({},a,{component:l,invisible:f}),w=Mb(y),b=(r=g.root)!=null?r:d.root;return x.jsx(k,F({in:m,timeout:h},p,{children:x.jsx(Lb,F({"aria-hidden":!0},b,{as:(o=(i=v.root)!=null?i:u.Root)!=null?o:l,className:ln(w.root,c,b==null?void 0:b.className),ownerState:F({},y,b==null?void 0:b.ownerState),classes:w,ref:n,children:s}))}))}),Fb=Db;function Bb(e){return zn("MuiModal",e)}ar("MuiModal",["root","hidden","backdrop"]);const Ub=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],Vb=e=>{const{open:t,exited:n,classes:r}=e;return ir({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},Bb,r)},Hb=Qt("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>F({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),Wb=Qt(Fb,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),Gb=T.forwardRef(function(t,n){var r,o,i,a,s,c;const l=sr({name:"MuiModal",props:t}),{BackdropComponent:u=Wb,BackdropProps:d,className:f,closeAfterTransition:m=!1,children:g,container:v,component:k,components:h={},componentsProps:p={},disableAutoFocus:y=!1,disableEnforceFocus:w=!1,disableEscapeKeyDown:b=!1,disablePortal:_=!1,disableRestoreFocus:E=!1,disableScrollLock:$=!1,hideBackdrop:L=!1,keepMounted:P=!1,onBackdropClick:A,open:D,slotProps:W,slots:H}=l,B=Pe(l,Ub),U=F({},l,{closeAfterTransition:m,disableAutoFocus:y,disableEnforceFocus:w,disableEscapeKeyDown:b,disablePortal:_,disableRestoreFocus:E,disableScrollLock:$,hideBackdrop:L,keepMounted:P}),{getRootProps:q,getBackdropProps:z,getTransitionProps:I,portalRef:R,isTopModal:G,exited:O,hasTransition:V}=Pb(F({},U,{rootRef:n})),C=F({},U,{exited:O}),J=Vb(C),S={};if(g.props.tabIndex===void 0&&(S.tabIndex="-1"),V){const{onEnter:ce,onExited:me}=I();S.onEnter=ce,S.onExited=me}const Q=(r=(o=H==null?void 0:H.root)!=null?o:h.Root)!=null?r:Hb,N=(i=(a=H==null?void 0:H.backdrop)!=null?a:h.Backdrop)!=null?i:u,ne=(s=W==null?void 0:W.root)!=null?s:p.root,X=(c=W==null?void 0:W.backdrop)!=null?c:p.backdrop,te=vc({elementType:Q,externalSlotProps:ne,externalForwardedProps:B,getSlotProps:q,additionalProps:{ref:n,as:k},ownerState:C,className:ln(f,ne==null?void 0:ne.className,J==null?void 0:J.root,!C.open&&C.exited&&(J==null?void 0:J.hidden))}),Z=vc({elementType:N,externalSlotProps:X,additionalProps:d,getSlotProps:ce=>z(F({},ce,{onClick:me=>{A&&A(me),ce!=null&&ce.onClick&&ce.onClick(me)}})),className:ln(X==null?void 0:X.className,d==null?void 0:d.className,J==null?void 0:J.backdrop),ownerState:C});return!P&&!D&&(!V||O)?null:x.jsx(wb,{ref:R,container:v,disablePortal:_,children:x.jsxs(Q,F({},te,{children:[!L&&u?x.jsx(N,F({},Z)):null,x.jsx(yb,{disableEnforceFocus:w,disableAutoFocus:y,disableRestoreFocus:E,isEnabled:G,open:D,children:T.cloneElement(g,S)})]}))})}),Kb=Gb,Qb=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function yc(e){return`scale(${e}, ${e**2})`}const Yb={entering:{opacity:1,transform:yc(1)},entered:{opacity:1,transform:"none"}},ol=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),y0=T.forwardRef(function(t,n){const{addEndListener:r,appear:o=!0,children:i,easing:a,in:s,onEnter:c,onEntered:l,onEntering:u,onExit:d,onExited:f,onExiting:m,style:g,timeout:v="auto",TransitionComponent:k=g0}=t,h=Pe(t,Qb),p=T.useRef(),y=T.useRef(),w=Fu(),b=T.useRef(null),_=or(b,i.ref,n),E=B=>U=>{if(B){const q=b.current;U===void 0?B(q):B(q,U)}},$=E(u),L=E((B,U)=>{v0(B);const{duration:q,delay:z,easing:I}=_a({style:g,timeout:v,easing:a},{mode:"enter"});let R;v==="auto"?(R=w.transitions.getAutoHeightDuration(B.clientHeight),y.current=R):R=q,B.style.transition=[w.transitions.create("opacity",{duration:R,delay:z}),w.transitions.create("transform",{duration:ol?R:R*.666,delay:z,easing:I})].join(","),c&&c(B,U)}),P=E(l),A=E(m),D=E(B=>{const{duration:U,delay:q,easing:z}=_a({style:g,timeout:v,easing:a},{mode:"exit"});let I;v==="auto"?(I=w.transitions.getAutoHeightDuration(B.clientHeight),y.current=I):I=U,B.style.transition=[w.transitions.create("opacity",{duration:I,delay:q}),w.transitions.create("transform",{duration:ol?I:I*.666,delay:ol?q:q||I*.333,easing:z})].join(","),B.style.opacity=0,B.style.transform=yc(.75),d&&d(B)}),W=E(f),H=B=>{v==="auto"&&(p.current=setTimeout(B,y.current||0)),r&&r(b.current,B)};return T.useEffect(()=>()=>{clearTimeout(p.current)},[]),x.jsx(k,F({appear:o,in:s,nodeRef:b,onEnter:L,onEntered:P,onEntering:$,onExit:D,onExited:W,onExiting:A,addEndListener:H,timeout:v==="auto"?null:v},h,{children:(B,U)=>T.cloneElement(i,F({style:F({opacity:0,transform:yc(.75),visibility:B==="exited"&&!s?"hidden":void 0},Yb[B],g,i.props.style),ref:_},U))}))});y0.muiSupportAuto=!0;const Xb=y0;function qb(e){return zn("MuiSnackbarContent",e)}ar("MuiSnackbarContent",["root","message","action"]);const Jb=["action","className","message","role"],Zb=e=>{const{classes:t}=e;return ir({root:["root"],action:["action"],message:["message"]},qb,t)},e5=Qt(Xk,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>{const t=e.palette.mode==="light"?.8:.98,n=fk(e.palette.background.default,t);return F({},e.typography.body2,{color:e.vars?e.vars.palette.SnackbarContent.color:e.palette.getContrastText(n),backgroundColor:e.vars?e.vars.palette.SnackbarContent.bg:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,flexGrow:1,[e.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),t5=Qt("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0"}),n5=Qt("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),r5=T.forwardRef(function(t,n){const r=sr({props:t,name:"MuiSnackbarContent"}),{action:o,className:i,message:a,role:s="alert"}=r,c=Pe(r,Jb),l=r,u=Zb(l);return x.jsxs(e5,F({role:s,square:!0,elevation:6,className:ln(u.root,i),ownerState:l,ref:n},c,{children:[x.jsx(t5,{className:u.message,ownerState:l,children:a}),o?x.jsx(n5,{className:u.action,ownerState:l,children:o}):null]}))}),o5=r5;function i5(e){return zn("MuiSnackbar",e)}ar("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const a5=["onEnter","onExited"],s5=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],l5=e=>{const{classes:t,anchorOrigin:n}=e,r={root:["root",`anchorOrigin${kt(n.vertical)}${kt(n.horizontal)}`]};return ir(r,i5,t)},Kf=Qt("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`anchorOrigin${kt(n.anchorOrigin.vertical)}${kt(n.anchorOrigin.horizontal)}`]]}})(({theme:e,ownerState:t})=>{const n={left:"50%",right:"auto",transform:"translateX(-50%)"};return F({zIndex:(e.vars||e).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},t.anchorOrigin.vertical==="top"?{top:8}:{bottom:8},t.anchorOrigin.horizontal==="left"&&{justifyContent:"flex-start"},t.anchorOrigin.horizontal==="right"&&{justifyContent:"flex-end"},{[e.breakpoints.up("sm")]:F({},t.anchorOrigin.vertical==="top"?{top:24}:{bottom:24},t.anchorOrigin.horizontal==="center"&&n,t.anchorOrigin.horizontal==="left"&&{left:24,right:"auto"},t.anchorOrigin.horizontal==="right"&&{right:24,left:"auto"})})}),c5=T.forwardRef(function(t,n){const r=sr({props:t,name:"MuiSnackbar"}),o=Fu(),i={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{action:a,anchorOrigin:{vertical:s,horizontal:c}={vertical:"bottom",horizontal:"left"},autoHideDuration:l=null,children:u,className:d,ClickAwayListenerProps:f,ContentProps:m,disableWindowBlurListener:g=!1,message:v,open:k,TransitionComponent:h=Xb,transitionDuration:p=i,TransitionProps:{onEnter:y,onExited:w}={}}=r,b=Pe(r.TransitionProps,a5),_=Pe(r,s5),E=F({},r,{anchorOrigin:{vertical:s,horizontal:c},autoHideDuration:l,disableWindowBlurListener:g,TransitionComponent:h,transitionDuration:p}),$=l5(E),{getRootProps:L,onClickAway:P}=$b(F({},E)),[A,D]=T.useState(!0),W=vc({elementType:Kf,getSlotProps:L,externalForwardedProps:_,ownerState:E,additionalProps:{ref:n},className:[$.root,d]}),H=U=>{D(!0),w&&w(U)},B=(U,q)=>{D(!1),y&&y(U,q)};return!k&&A?null:x.jsx(db,F({onClickAway:P},f,{children:x.jsx(Kf,F({},W,{children:x.jsx(h,F({appear:!0,in:k,timeout:p,direction:s==="top"?"down":"up",onEnter:B,onExited:H},b,{children:u||x.jsx(o5,F({message:v,action:a},m))}))}))}))}),u5=c5,d5=j.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`,f5=j.div`
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
`,p5=j.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({theme:e})=>e.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,m5=j.div`
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
`,h5=j.form`
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
`,g5=j.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({theme:e})=>e.text_primary};
`,il=j.input`
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
`,v5=j.textarea`
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
`,y5=j.input`
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
`,x5=()=>{const[e,t]=je.useState(!1),n=T.useRef(),{selectedLanguage:r}=Mt();return x.jsx(d5,{id:"contact",children:x.jsxs(f5,{children:[x.jsx(p5,{children:Y[r].contact.title}),x.jsx(m5,{children:Y[r].contact.desc}),x.jsxs(h5,{ref:n,children:[x.jsx(g5,{children:Y[r].contact.emailtile}),x.jsx(il,{placeholder:Y[r].contact.emailyourtile,name:"from_email"}),x.jsx(il,{placeholder:Y[r].contact.emailyourname,name:"from_name"}),x.jsx(il,{placeholder:Y[r].contact.subject,name:"subject"}),x.jsx(v5,{placeholder:Y[r].contact.message,rows:"4",name:"message"}),x.jsx(y5,{type:"submit",value:Y[r].contact.submit})]}),x.jsx(u5,{open:e,autoHideDuration:6e3,onClose:()=>t(!1),message:Y[r].contact.submitsuccess,severity:"success"})]})})},w5=j.div`
  display: flex;
  justify-content: flex-start; 
  margin: 5px 10px;
`,k5=j.p`
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
`,uo=j.a`
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
  
`,b5=j.div`
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
`,S5=j.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  z-index: 1;
`,C5=j.div`
  margin-left: 5px;
`;function E5(){const{selectedLanguage:e}=Mt(),{isDarkMode:t}=rr();return x.jsx(b5,{children:x.jsxs(S5,{children:[x.jsxs(w5,{children:[x.jsx(uo,{isDarkMode:t,href:Y[e].facebook,target:"display",children:x.jsx(Wy,{})}),x.jsx(uo,{isDarkMode:t,href:Y[e].twitter,target:"display",children:x.jsx(Yy,{})}),x.jsx(uo,{isDarkMode:t,href:Y[e].linkedin,target:"display",children:x.jsx(_u,{})}),x.jsx(uo,{isDarkMode:t,href:Y[e].insta,target:"display",children:x.jsx(Qy,{})}),x.jsxs(uo,{isDarkMode:t,href:Y[e].ResumeLink,target:"display",children:[x.jsx(Gh,{}),x.jsx(C5,{children:Y[e].ResumeTitle})]})]}),x.jsx(k5,{isDarkMode:t,children:"© 2023 by Kauan Vidigal"})]})})}const _5=T.createContext({}),j5=_5;function T5(e){return zn("MuiTimelineContent",e)}ar("MuiTimelineContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]);function x0(e){return e==="alternate-reverse"?"positionAlternateReverse":`position${kt(e)}`}const P5=["className"],$5=e=>{const{position:t,classes:n}=e,r={root:["root",x0(t)]};return ir(r,T5,n)},O5=Qt(ob,{name:"MuiTimelineContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[x0(n.position)]]}})(({ownerState:e})=>F({flex:1,padding:"6px 16px",textAlign:"left"},e.position==="left"&&{textAlign:"right"})),R5=T.forwardRef(function(t,n){const r=sr({props:t,name:"MuiTimelineContent"}),{className:o}=r,i=Pe(r,P5),{position:a}=T.useContext(j5),s=F({},r,{position:a||"right"}),c=$5(s);return x.jsx(O5,F({component:"div",className:ln(c.root,o),ownerState:s,ref:n},i))}),w0=R5,k0=j.img`
  display: none;
  height: 70px;
  width: fit-content;
  background-color: #000;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`,A5=j.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({theme:e})=>e.text_secondary};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`,b0=j.span`
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
`,z5=j.div`
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

  &:hover ${k0} {
    display: flex;
  }

  &:hover ${b0} {
    overflow: visible;
    -webkit-line-clamp: unset;

  }

  border: 0.1px solid ${({theme:e})=>e.primary};
`,I5=j.div`
  width: 100%;
  display: flex;
  gap: 12px
`,N5=j.img`
  height: 50px;
  background-color: #000;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`,M5=j.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`,Qf=j.b`
  color: ${({theme:e})=>e.text_primary};
`,L5=j.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({theme:e})=>e.text_primary};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`,D5=j.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.text_secondary+99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`,F5=j.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({theme:e})=>e.text_secondary+80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`,B5=j.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0px;
  @media only screen and (max-width: 600px) {
    margin: 4px 0px;
  }
`,U5=j.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({theme:e})=>e.primary};
  padding: 5px;
  border-radius: 8px;
  background-color: ${({theme:e})=>e.primary+20};
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`,Yf=j.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: -10px;
`,Xf=j.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,V5=j.div`
  font-size: 14px;
  font-weight: 300;
  color: ${({theme:e})=>e.text_secondary};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`,H5=({experience:e})=>{var t,n;return x.jsxs(z5,{children:[x.jsxs(I5,{children:[x.jsx(N5,{src:e.img}),x.jsxs(M5,{children:[x.jsx(L5,{children:e.role}),x.jsx(D5,{children:e.company}),x.jsx(F5,{children:e.date})]})]}),x.jsxs(A5,{children:[(e==null?void 0:e.desc)&&x.jsx(b0,{children:e==null?void 0:e.desc}),e.skillsFreeLancerTitle.length>1&&x.jsxs(Qf,{children:[x.jsx("br",{}),e.skillsFreeLancerTitle]}),x.jsx("br",{}),x.jsx("br",{}),x.jsx(Yf,{children:x.jsx(Xf,{children:e.skillsFreeLancerTitle.length>1&&((t=e==null?void 0:e.skillsFreeLancer)==null?void 0:t.map((r,o)=>x.jsx(B5,{children:x.jsx(U5,{children:r})},o)))})}),(e==null?void 0:e.skills)&&x.jsxs(x.Fragment,{children:[x.jsx("br",{}),x.jsxs(Yf,{children:[x.jsx(Qf,{children:e.skillsTitle}),x.jsx(Xf,{children:(n=e==null?void 0:e.skills)==null?void 0:n.map((r,o)=>x.jsxs(V5,{children:["• ",r]},o))})]})]})]}),e.doc&&x.jsx("a",{href:e.doc,target:"_blank",rel:"noopener noreferrer",children:x.jsx(k0,{src:e.doc})})]})},W5=j.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`,G5=j.div`
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
`,K5=j.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({theme:e})=>e.sub_text};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,Q5=j.div`
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
`;const Y5=()=>{const{selectedLanguage:e}=Mt();return x.jsx(W5,{id:"experience",children:x.jsxs(G5,{children:[x.jsx(K5,{children:Y[e].experiences.title}),x.jsx(Q5,{children:Y[e].experiences.desc}),Y[e].experiences.info.map((t,n)=>x.jsx(w0,{sx:{py:"12px",px:2},children:x.jsx(H5,{experience:t})}))]})})};function X5(e){return Kt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"}}]})(e)}const q5=j.div`
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
`,J5=j.div`
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
`,Z5=j.div`
  font-size: 28px;
  font-weight: 600;
  color: ${e=>e.isDarkMode?"white":"black"};
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    margin: 6px 6px 0px 6px;
  }
`,e4=j.div`
  font-size: 16px;
  margin: 2px 6px;
  font-weight: 400;
  color: ${({theme:e})=>e.text_secondary};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`,t4=j.div`
  font-size: 16px;
  font-weight: 400;
  color: ${e=>e.isDarkMode?"white":"black"};
  margin: 8px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
    margin: 6px 6px;
  }
`,n4=j.img`
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
  margin-top: 30px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
`,r4=j.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({theme:e})=>e.text_primary};
  margin: 8px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    margin: 8px 6px;
  }
`,o4=j.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0px;
  @media only screen and (max-width: 600px) {
    margin: 4px 0px;
  }
`,i4=j.div`
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
`,a4=j.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-wrap: wrap;
  margin: 12px 6px;
  @media only screen and (max-width: 600px) {
    margin: 4px 6px;
  }
`,s4=j.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,l4=j.img`
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
`,c4=j.div`
  font-size: 16px;
  font-weight: 500;
  width: 200px;
  color: ${({theme:e})=>e.text_primary};
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`,u4=j.div`
  display: flex;
  justify-content: flex-end;
  margin: 12px 0px;
  gap: 12px;
`,qf=j.a`
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
`,d4=({openModal:e,setOpenModal:t})=>{const{isDarkMode:n}=rr(),{selectedLanguage:r}=Mt(),o=e==null?void 0:e.project;return x.jsx(Kb,{open:!0,onClose:()=>t({state:!1,project:null}),children:x.jsx(q5,{children:x.jsxs(J5,{children:[x.jsx(X5,{style:{position:"absolute",top:"10px",right:"20px",cursor:"pointer",width:"35px",height:"35px",color:n?"white":"black"},isDarkMode:n,onClick:()=>t({state:!1,project:null})}),x.jsx(n4,{src:o==null?void 0:o.image}),x.jsx(Z5,{isDarkMode:n,children:o==null?void 0:o.title}),x.jsx(e4,{children:o.date}),x.jsx(o4,{children:o==null?void 0:o.tags.map(i=>x.jsx(i4,{children:i}))}),x.jsx(t4,{isDarkMode:n,children:o==null?void 0:o.description}),o.member&&x.jsxs(x.Fragment,{children:[x.jsx(r4,{children:"Members"}),x.jsx(a4,{children:o==null?void 0:o.member.map(i=>x.jsxs(s4,{children:[x.jsx(l4,{src:i.img}),x.jsx(c4,{children:i.name}),x.jsx("a",{href:i.github,target:"new",style:{textDecoration:"none",color:"inherit"},children:x.jsx(Ky,{})}),x.jsx("a",{href:i.linkedin,target:"new",style:{textDecoration:"none",color:"inherit"},children:x.jsx(_u,{})})]}))})]}),x.jsxs(u4,{children:[x.jsx(qf,{isDarkMode:n,dull:!0,href:o==null?void 0:o.github,target:"new",children:Y[r].projects.buttonGitHubTitle}),x.jsx(qf,{isDarkMode:n,href:o==null?void 0:o.webapp,target:"new",children:Y[r].projects.buttonWebappTitle})]})]})})})},f4=j.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`,p4=j.div`
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
`,m4=j.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  color: ${({theme:e})=>e.sub_text};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,h4=j.div`
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
`,g4=j.div`
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
`,Pi=j.div`
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
`,v4=j.div`
    width: 1.5px;
    background: ${({theme:e})=>e.primary};
`,y4=j.div`
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
`,x4=j.button`
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
`,w4=j.div`
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
  &:hover ${x4} {
    display: block;
  }
`,k4=j.img`
  width: 100%;
  height: 180px;
  background-color: ${({theme:e})=>e.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`,b4=j.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`,S4=j.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({theme:e})=>e.primary};
  background-color: ${({theme:e})=>e.primary+15};
  padding: 2px 8px;
  border-radius: 10px;
`,C4=j.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`,E4=j.div`
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
`,_4=j.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({theme:e})=>e.text_secondary+80};
  @media only screen and (max-width: 768px){
    font-size: 10px;
  }
`,j4=j.div`
  font-weight: 400;
  color: ${({theme:e})=>e.text_secondary+99};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`,T4=j.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`,P4=j.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({theme:e})=>e.white};
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  border: 3px solid ${({theme:e})=>e.card};
`,Jf=({project:e,setOpenModal:t})=>{var n,r;return x.jsxs(w4,{onClick:()=>t({state:!0,project:e}),children:[x.jsx(k4,{src:e.image}),x.jsx(b4,{children:(n=e.tags)==null?void 0:n.map((o,i)=>x.jsx(S4,{children:o},i))}),x.jsxs(C4,{children:[x.jsx(E4,{children:e.title}),x.jsx(_4,{children:e.date}),x.jsx(j4,{children:e.description})]}),x.jsx(T4,{children:(r=e.member)==null?void 0:r.map((o,i)=>x.jsx(P4,{src:o.img},i))})]})},$4=({openModal:e,setOpenModal:t})=>{const[n,r]=T.useState("all"),{selectedLanguage:o}=Mt();return x.jsx(f4,{id:"projects",children:x.jsxs(p4,{children:[x.jsx(m4,{children:Y[o].projects.title}),x.jsx(h4,{children:Y[o].projects.desc}),x.jsxs(g4,{children:[n==="all"?x.jsx(Pi,{active:!0,value:"all",onClick:()=>r("all"),children:Y[o].projects.nav.ProjectAll}):x.jsx(Pi,{value:"all",onClick:()=>r("all"),children:Y[o].projects.nav.ProjectAll}),x.jsx(v4,{}),n==="bootcamp "?x.jsx(Pi,{active:!0,value:"bootcamp",onClick:()=>r("bootcamp"),children:Y[o].projects.nav.Bootcamp}):x.jsx(Pi,{value:"bootcamp",onClick:()=>r("bootcamp"),children:Y[o].projects.nav.Bootcamp})]}),x.jsxs(y4,{children:[n==="all"&&Y[o].projects.info.map(i=>x.jsx(Jf,{project:i,openModal:e,setOpenModal:t})),Y[o].projects.info.filter(i=>i.category==n).map(i=>x.jsx(Jf,{project:i,openModal:e,setOpenModal:t}))]})]})})},O4=j.img`
  display: none;
  height: 70px;
  width: fit-content;
  background-color: #000;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`,R4=j.a`
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
`,S0=j.span`
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
`,A4=j.div`
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

  &:hover ${O4} {
    display: flex;
  }

  &:hover ${S0} {
    overflow: visible;
    -webkit-line-clamp: unset;

  }

  border: 0.1px solid ${({theme:e})=>e.primary};
`,z4=j.div`
  width: 100%;
  display: flex;
  gap: 12px
`,I4=j.img`
  height: 50px;
  background-color: #000;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`,N4=j.img`
  border-radius: 10px;
  margin: 2px;
  width: 50%;
  height: 50%;
  @media only screen and (max-width: 768px) {
    width: 50%;
    height: 50%;
  }
`,M4=j.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px;
`,L4=j.div`
  font-size: 18px;
  font-weight: 400;
  text-align: left;
  color: ${({theme:e})=>e.text_primary+99};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`,D4=j.div`
  font-size: 15px;
  font-style: italic;
  font-weight: 200;
  text-align: left;
  color: ${e=>e.isDarkMode?"white":"black"};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`,F4=j.div`
  font-size: 25px;
  font-weight: 500;
  margin: 4px;
  text-align: center;
  color: ${e=>e.isDarkMode?"white":"black"};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`,B4=j.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.text_secondary+99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`,U4=j.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({theme:e})=>e.text_secondary+80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`,V4=j.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.text_secondary+99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`,H4=j.a`
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


`,W4=j.a`
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


`,G4=({education:e})=>{const{isDarkMode:t}=rr();return x.jsxs(A4,{children:[x.jsxs(z4,{children:[x.jsx(W4,{href:e.linkIcon,target:"_blank",rel:"noopener noreferrer",children:x.jsx(I4,{src:e.img})}),x.jsxs(M4,{children:[x.jsx(L4,{children:e.school}),x.jsx(D4,{isDarkMode:t,children:e.curseMoment}),x.jsx(B4,{children:e.degree}),x.jsx(U4,{children:e.date})]}),e.CertificateTitle.length>1&&x.jsx(F4,{isDarkMode:t,children:e.CertificateTitle})]}),e.CertificateLink.length>1&&x.jsx(H4,{href:e.CertificateLink,target:"_blank",rel:"noopener noreferrer",children:x.jsx(N4,{src:e.CertificateImg})}),e.gradetitle.length>1&&x.jsxs(V4,{children:[x.jsxs("b",{children:[e.gradetitle," "]}),e.gradevalue]}),e.desc.length>1&&x.jsx(S0,{children:e.desc}),e.curseTitle.length>1&&x.jsx(R4,{isDarkMode:t,target:"_blank",href:e.curseLink,children:e.curseTitle})]})},K4=j.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  margin-top: 30px;
`,Q4=j.div`
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
`,Y4=j.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({theme:e})=>e.sub_text};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,X4=j.div`
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
`;const q4=()=>{const{selectedLanguage:e}=Mt();return x.jsx(K4,{id:"education",children:x.jsxs(Q4,{children:[x.jsx(Y4,{children:Y[e].education.title}),x.jsx(X4,{children:Y[e].education.desc}),Y[e].education.info.map((t,n)=>x.jsx(w0,{sx:{py:"12px",px:2},children:x.jsx(G4,{education:t})}))]})})},J4=j.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`,Z4=j.div`
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
`,eS=j.div`
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
`,tS=j.div`
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
`,nS=j.img`
  height: 150px;
  width: 150px;
  margin: 0 auto;
`,rS=j.img`
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
`,oS=j.div`
  width: 48%;
`,iS=j.div`
  width: 48%;
`,aS=j.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({theme:e})=>e.sub_text};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,sS=j.div`
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
`,lS=()=>{const{selectedLanguage:e}=Mt();return x.jsx(J4,{id:"about",children:x.jsxs(Z4,{children:[x.jsx(aS,{children:Y[e].about.title}),x.jsxs(eS,{children:[x.jsx(oS,{children:x.jsx(rS,{src:Y[e].about.userimg,alt:"Vidigal"})}),x.jsx(iS,{children:x.jsxs(sS,{children:[Y[e].about.desc,x.jsx(tS,{children:x.jsx(nS,{src:Y[e].about.linkheaderimg,alt:"Header"})})]})})]})]})})},cS=j.div`
  background-color: ${({theme:e})=>e.bg};
  width: 100%;
  overflow-x: hidden;
`;function uS(){const{handleLanguageChange:e}=Mt(),{isDarkMode:t}=rr(),[n,r]=T.useState({state:!1,project:null}),o=i=>{e(i)};return T.useEffect(()=>{const i=window.location.pathname;i.startsWith("/pt")?o("pt"):i.startsWith("/en")&&o("en"),i==="/en/edu"&&(o("en"),window.location.href="#education"),i==="/pt/edu"&&(o("pt"),window.location.href="#education")},[]),x.jsx(x.Fragment,{children:x.jsx(Yv,{theme:t?Zv:ey,children:x.jsxs(Sy,{children:[x.jsx(qy,{}),x.jsxs(cS,{children:[x.jsx(bx,{}),x.jsx(Lx,{}),x.jsx(Y5,{}),x.jsx(q4,{}),x.jsx($4,{openModal:n,setOpenModal:r}),x.jsx(x5,{}),x.jsx(lS,{}),x.jsx(E5,{}),n.state&&x.jsx(d4,{openModal:n,setOpenModal:r})]})]})})})}const dS=sl.createRoot(document.getElementById("root"));dS.render(x.jsx(je.StrictMode,{children:x.jsx(Fy,{children:x.jsx(By,{children:x.jsx(uS,{})})})}));
