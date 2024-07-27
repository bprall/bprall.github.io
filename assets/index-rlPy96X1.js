function GA(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function xl(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var c0={exports:{}},Id={},d0={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ol=Symbol.for("react.element"),KA=Symbol.for("react.portal"),QA=Symbol.for("react.fragment"),YA=Symbol.for("react.strict_mode"),JA=Symbol.for("react.profiler"),XA=Symbol.for("react.provider"),ZA=Symbol.for("react.context"),eP=Symbol.for("react.forward_ref"),tP=Symbol.for("react.suspense"),nP=Symbol.for("react.memo"),rP=Symbol.for("react.lazy"),By=Symbol.iterator;function iP(t){return t===null||typeof t!="object"?null:(t=By&&t[By]||t["@@iterator"],typeof t=="function"?t:null)}var h0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f0=Object.assign,p0={};function So(t,e,n){this.props=t,this.context=e,this.refs=p0,this.updater=n||h0}So.prototype.isReactComponent={};So.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};So.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function m0(){}m0.prototype=So.prototype;function Rm(t,e,n){this.props=t,this.context=e,this.refs=p0,this.updater=n||h0}var Cm=Rm.prototype=new m0;Cm.constructor=Rm;f0(Cm,So.prototype);Cm.isPureReactComponent=!0;var zy=Array.isArray,g0=Object.prototype.hasOwnProperty,Am={current:null},v0={key:!0,ref:!0,__self:!0,__source:!0};function y0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)g0.call(e,r)&&!v0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ol,type:t,key:s,ref:o,props:i,_owner:Am.current}}function sP(t,e){return{$$typeof:Ol,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Pm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ol}function oP(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Wy=/\/+/g;function Hh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?oP(""+t.key):e.toString(36)}function Gu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ol:case KA:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Hh(o,0):r,zy(i)?(n="",t!=null&&(n=t.replace(Wy,"$&/")+"/"),Gu(i,e,n,"",function(c){return c})):i!=null&&(Pm(i)&&(i=sP(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Wy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",zy(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Hh(s,a);o+=Gu(s,e,n,l,i)}else if(l=iP(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Hh(s,a++),o+=Gu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function vu(t,e,n){if(t==null)return t;var r=[],i=0;return Gu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function aP(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Nt={current:null},Ku={transition:null},lP={ReactCurrentDispatcher:Nt,ReactCurrentBatchConfig:Ku,ReactCurrentOwner:Am};function _0(){throw Error("act(...) is not supported in production builds of React.")}se.Children={map:vu,forEach:function(t,e,n){vu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return vu(t,function(){e++}),e},toArray:function(t){return vu(t,function(e){return e})||[]},only:function(t){if(!Pm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};se.Component=So;se.Fragment=QA;se.Profiler=JA;se.PureComponent=Rm;se.StrictMode=YA;se.Suspense=tP;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lP;se.act=_0;se.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=f0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Am.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)g0.call(e,l)&&!v0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ol,type:t.type,key:i,ref:s,props:r,_owner:o}};se.createContext=function(t){return t={$$typeof:ZA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:XA,_context:t},t.Consumer=t};se.createElement=y0;se.createFactory=function(t){var e=y0.bind(null,t);return e.type=t,e};se.createRef=function(){return{current:null}};se.forwardRef=function(t){return{$$typeof:eP,render:t}};se.isValidElement=Pm;se.lazy=function(t){return{$$typeof:rP,_payload:{_status:-1,_result:t},_init:aP}};se.memo=function(t,e){return{$$typeof:nP,type:t,compare:e===void 0?null:e}};se.startTransition=function(t){var e=Ku.transition;Ku.transition={};try{t()}finally{Ku.transition=e}};se.unstable_act=_0;se.useCallback=function(t,e){return Nt.current.useCallback(t,e)};se.useContext=function(t){return Nt.current.useContext(t)};se.useDebugValue=function(){};se.useDeferredValue=function(t){return Nt.current.useDeferredValue(t)};se.useEffect=function(t,e){return Nt.current.useEffect(t,e)};se.useId=function(){return Nt.current.useId()};se.useImperativeHandle=function(t,e,n){return Nt.current.useImperativeHandle(t,e,n)};se.useInsertionEffect=function(t,e){return Nt.current.useInsertionEffect(t,e)};se.useLayoutEffect=function(t,e){return Nt.current.useLayoutEffect(t,e)};se.useMemo=function(t,e){return Nt.current.useMemo(t,e)};se.useReducer=function(t,e,n){return Nt.current.useReducer(t,e,n)};se.useRef=function(t){return Nt.current.useRef(t)};se.useState=function(t){return Nt.current.useState(t)};se.useSyncExternalStore=function(t,e,n){return Nt.current.useSyncExternalStore(t,e,n)};se.useTransition=function(){return Nt.current.useTransition()};se.version="18.3.1";d0.exports=se;var y=d0.exports;const Tt=xl(y),uP=GA({__proto__:null,default:Tt},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cP=y,dP=Symbol.for("react.element"),hP=Symbol.for("react.fragment"),fP=Object.prototype.hasOwnProperty,pP=cP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mP={key:!0,ref:!0,__self:!0,__source:!0};function w0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)fP.call(e,r)&&!mP.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:dP,type:t,key:s,ref:o,props:i,_owner:pP.current}}Id.Fragment=hP;Id.jsx=w0;Id.jsxs=w0;c0.exports=Id;var m=c0.exports,qf={},E0={exports:{}},Xt={},I0={exports:{}},T0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(V,K){var G=V.length;V.push(K);e:for(;0<G;){var oe=G-1>>>1,ne=V[oe];if(0<i(ne,K))V[oe]=K,V[G]=ne,G=oe;else break e}}function n(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var K=V[0],G=V.pop();if(G!==K){V[0]=G;e:for(var oe=0,ne=V.length,ce=ne>>>1;oe<ce;){var Ne=2*(oe+1)-1,de=V[Ne],Ve=Ne+1,pt=V[Ve];if(0>i(de,G))Ve<ne&&0>i(pt,de)?(V[oe]=pt,V[Ve]=G,oe=Ve):(V[oe]=de,V[Ne]=G,oe=Ne);else if(Ve<ne&&0>i(pt,G))V[oe]=pt,V[Ve]=G,oe=Ve;else break e}}return K}function i(V,K){var G=V.sortIndex-K.sortIndex;return G!==0?G:V.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,g=3,k=!1,R=!1,x=!1,b=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(V){for(var K=n(c);K!==null;){if(K.callback===null)r(c);else if(K.startTime<=V)r(c),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(c)}}function O(V){if(x=!1,S(V),!R)if(n(l)!==null)R=!0,ee(M);else{var K=n(c);K!==null&&Z(O,K.startTime-V)}}function M(V,K){R=!1,x&&(x=!1,E(v),v=-1),k=!0;var G=g;try{for(S(K),f=n(l);f!==null&&(!(f.expirationTime>K)||V&&!P());){var oe=f.callback;if(typeof oe=="function"){f.callback=null,g=f.priorityLevel;var ne=oe(f.expirationTime<=K);K=t.unstable_now(),typeof ne=="function"?f.callback=ne:f===n(l)&&r(l),S(K)}else r(l);f=n(l)}if(f!==null)var ce=!0;else{var Ne=n(c);Ne!==null&&Z(O,Ne.startTime-K),ce=!1}return ce}finally{f=null,g=G,k=!1}}var L=!1,I=null,v=-1,T=5,A=-1;function P(){return!(t.unstable_now()-A<T)}function N(){if(I!==null){var V=t.unstable_now();A=V;var K=!0;try{K=I(!0,V)}finally{K?C():(L=!1,I=null)}}else L=!1}var C;if(typeof w=="function")C=function(){w(N)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,H=F.port2;F.port1.onmessage=N,C=function(){H.postMessage(null)}}else C=function(){b(N,0)};function ee(V){I=V,L||(L=!0,C())}function Z(V,K){v=b(function(){V(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(V){V.callback=null},t.unstable_continueExecution=function(){R||k||(R=!0,ee(M))},t.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<V?Math.floor(1e3/V):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(V){switch(g){case 1:case 2:case 3:var K=3;break;default:K=g}var G=g;g=K;try{return V()}finally{g=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(V,K){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var G=g;g=V;try{return K()}finally{g=G}},t.unstable_scheduleCallback=function(V,K,G){var oe=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?oe+G:oe):G=oe,V){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=G+ne,V={id:d++,callback:K,priorityLevel:V,startTime:G,expirationTime:ne,sortIndex:-1},G>oe?(V.sortIndex=G,e(c,V),n(l)===null&&V===n(c)&&(x?(E(v),v=-1):x=!0,Z(O,G-oe))):(V.sortIndex=ne,e(l,V),R||k||(R=!0,ee(M))),V},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(V){var K=g;return function(){var G=g;g=K;try{return V.apply(this,arguments)}finally{g=G}}}})(T0);I0.exports=T0;var gP=I0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vP=y,Yt=gP;function $(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var S0=new Set,Qa={};function fs(t,e){ro(t,e),ro(t+"Capture",e)}function ro(t,e){for(Qa[t]=e,t=0;t<e.length;t++)S0.add(e[t])}var cr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gf=Object.prototype.hasOwnProperty,yP=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hy={},qy={};function _P(t){return Gf.call(qy,t)?!0:Gf.call(Hy,t)?!1:yP.test(t)?qy[t]=!0:(Hy[t]=!0,!1)}function wP(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function EP(t,e,n,r){if(e===null||typeof e>"u"||wP(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ht[t]=new xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ht[e]=new xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ht[t]=new xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ht[t]=new xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ht[t]=new xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ht[t]=new xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ht[t]=new xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ht[t]=new xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ht[t]=new xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var bm=/[\-:]([a-z])/g;function Nm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(bm,Nm);ht[e]=new xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(bm,Nm);ht[e]=new xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(bm,Nm);ht[e]=new xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ht[t]=new xt(t,1,!1,t.toLowerCase(),null,!1,!1)});ht.xlinkHref=new xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ht[t]=new xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function xm(t,e,n,r){var i=ht.hasOwnProperty(e)?ht[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(EP(e,n,i,r)&&(n=null),r||i===null?_P(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var wr=vP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yu=Symbol.for("react.element"),Ns=Symbol.for("react.portal"),xs=Symbol.for("react.fragment"),Om=Symbol.for("react.strict_mode"),Kf=Symbol.for("react.profiler"),k0=Symbol.for("react.provider"),R0=Symbol.for("react.context"),Dm=Symbol.for("react.forward_ref"),Qf=Symbol.for("react.suspense"),Yf=Symbol.for("react.suspense_list"),Lm=Symbol.for("react.memo"),Lr=Symbol.for("react.lazy"),C0=Symbol.for("react.offscreen"),Gy=Symbol.iterator;function ra(t){return t===null||typeof t!="object"?null:(t=Gy&&t[Gy]||t["@@iterator"],typeof t=="function"?t:null)}var be=Object.assign,qh;function ya(t){if(qh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);qh=e&&e[1]||""}return`
`+qh+t}var Gh=!1;function Kh(t,e){if(!t||Gh)return"";Gh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Gh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ya(t):""}function IP(t){switch(t.tag){case 5:return ya(t.type);case 16:return ya("Lazy");case 13:return ya("Suspense");case 19:return ya("SuspenseList");case 0:case 2:case 15:return t=Kh(t.type,!1),t;case 11:return t=Kh(t.type.render,!1),t;case 1:return t=Kh(t.type,!0),t;default:return""}}function Jf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case xs:return"Fragment";case Ns:return"Portal";case Kf:return"Profiler";case Om:return"StrictMode";case Qf:return"Suspense";case Yf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case R0:return(t.displayName||"Context")+".Consumer";case k0:return(t._context.displayName||"Context")+".Provider";case Dm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Lm:return e=t.displayName||null,e!==null?e:Jf(t.type)||"Memo";case Lr:e=t._payload,t=t._init;try{return Jf(t(e))}catch{}}return null}function TP(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jf(e);case 8:return e===Om?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function li(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function A0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function SP(t){var e=A0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _u(t){t._valueTracker||(t._valueTracker=SP(t))}function P0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=A0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function yc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xf(t,e){var n=e.checked;return be({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ky(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=li(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function b0(t,e){e=e.checked,e!=null&&xm(t,"checked",e,!1)}function Zf(t,e){b0(t,e);var n=li(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ep(t,e.type,n):e.hasOwnProperty("defaultValue")&&ep(t,e.type,li(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Qy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ep(t,e,n){(e!=="number"||yc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var _a=Array.isArray;function Hs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+li(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function tp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error($(91));return be({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Yy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error($(92));if(_a(n)){if(1<n.length)throw Error($(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:li(n)}}function N0(t,e){var n=li(e.value),r=li(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Jy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function x0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function np(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?x0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var wu,O0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(wu=wu||document.createElement("div"),wu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ya(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Aa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kP=["Webkit","ms","Moz","O"];Object.keys(Aa).forEach(function(t){kP.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Aa[e]=Aa[t]})});function D0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Aa.hasOwnProperty(t)&&Aa[t]?(""+e).trim():e+"px"}function L0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=D0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var RP=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rp(t,e){if(e){if(RP[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error($(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error($(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error($(61))}if(e.style!=null&&typeof e.style!="object")throw Error($(62))}}function ip(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sp=null;function Mm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var op=null,qs=null,Gs=null;function Xy(t){if(t=Ml(t)){if(typeof op!="function")throw Error($(280));var e=t.stateNode;e&&(e=Cd(e),op(t.stateNode,t.type,e))}}function M0(t){qs?Gs?Gs.push(t):Gs=[t]:qs=t}function j0(){if(qs){var t=qs,e=Gs;if(Gs=qs=null,Xy(t),e)for(t=0;t<e.length;t++)Xy(e[t])}}function V0(t,e){return t(e)}function F0(){}var Qh=!1;function U0(t,e,n){if(Qh)return t(e,n);Qh=!0;try{return V0(t,e,n)}finally{Qh=!1,(qs!==null||Gs!==null)&&(F0(),j0())}}function Ja(t,e){var n=t.stateNode;if(n===null)return null;var r=Cd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error($(231,e,typeof n));return n}var ap=!1;if(cr)try{var ia={};Object.defineProperty(ia,"passive",{get:function(){ap=!0}}),window.addEventListener("test",ia,ia),window.removeEventListener("test",ia,ia)}catch{ap=!1}function CP(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Pa=!1,_c=null,wc=!1,lp=null,AP={onError:function(t){Pa=!0,_c=t}};function PP(t,e,n,r,i,s,o,a,l){Pa=!1,_c=null,CP.apply(AP,arguments)}function bP(t,e,n,r,i,s,o,a,l){if(PP.apply(this,arguments),Pa){if(Pa){var c=_c;Pa=!1,_c=null}else throw Error($(198));wc||(wc=!0,lp=c)}}function ps(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function $0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Zy(t){if(ps(t)!==t)throw Error($(188))}function NP(t){var e=t.alternate;if(!e){if(e=ps(t),e===null)throw Error($(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Zy(i),t;if(s===r)return Zy(i),e;s=s.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?t:e}function B0(t){return t=NP(t),t!==null?z0(t):null}function z0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=z0(t);if(e!==null)return e;t=t.sibling}return null}var W0=Yt.unstable_scheduleCallback,e_=Yt.unstable_cancelCallback,xP=Yt.unstable_shouldYield,OP=Yt.unstable_requestPaint,Ue=Yt.unstable_now,DP=Yt.unstable_getCurrentPriorityLevel,jm=Yt.unstable_ImmediatePriority,H0=Yt.unstable_UserBlockingPriority,Ec=Yt.unstable_NormalPriority,LP=Yt.unstable_LowPriority,q0=Yt.unstable_IdlePriority,Td=null,$n=null;function MP(t){if($n&&typeof $n.onCommitFiberRoot=="function")try{$n.onCommitFiberRoot(Td,t,void 0,(t.current.flags&128)===128)}catch{}}var Sn=Math.clz32?Math.clz32:FP,jP=Math.log,VP=Math.LN2;function FP(t){return t>>>=0,t===0?32:31-(jP(t)/VP|0)|0}var Eu=64,Iu=4194304;function wa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ic(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=wa(a):(s&=o,s!==0&&(r=wa(s)))}else o=n&~i,o!==0?r=wa(o):s!==0&&(r=wa(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Sn(e),i=1<<n,r|=t[n],e&=~i;return r}function UP(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $P(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Sn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=UP(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function up(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function G0(){var t=Eu;return Eu<<=1,!(Eu&4194240)&&(Eu=64),t}function Yh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Dl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Sn(e),t[e]=n}function BP(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Sn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Vm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Sn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ge=0;function K0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Q0,Fm,Y0,J0,X0,cp=!1,Tu=[],Jr=null,Xr=null,Zr=null,Xa=new Map,Za=new Map,Vr=[],zP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function t_(t,e){switch(t){case"focusin":case"focusout":Jr=null;break;case"dragenter":case"dragleave":Xr=null;break;case"mouseover":case"mouseout":Zr=null;break;case"pointerover":case"pointerout":Xa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Za.delete(e.pointerId)}}function sa(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ml(e),e!==null&&Fm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function WP(t,e,n,r,i){switch(e){case"focusin":return Jr=sa(Jr,t,e,n,r,i),!0;case"dragenter":return Xr=sa(Xr,t,e,n,r,i),!0;case"mouseover":return Zr=sa(Zr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Xa.set(s,sa(Xa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Za.set(s,sa(Za.get(s)||null,t,e,n,r,i)),!0}return!1}function Z0(t){var e=Li(t.target);if(e!==null){var n=ps(e);if(n!==null){if(e=n.tag,e===13){if(e=$0(n),e!==null){t.blockedOn=e,X0(t.priority,function(){Y0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=dp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);sp=r,n.target.dispatchEvent(r),sp=null}else return e=Ml(n),e!==null&&Fm(e),t.blockedOn=n,!1;e.shift()}return!0}function n_(t,e,n){Qu(t)&&n.delete(e)}function HP(){cp=!1,Jr!==null&&Qu(Jr)&&(Jr=null),Xr!==null&&Qu(Xr)&&(Xr=null),Zr!==null&&Qu(Zr)&&(Zr=null),Xa.forEach(n_),Za.forEach(n_)}function oa(t,e){t.blockedOn===e&&(t.blockedOn=null,cp||(cp=!0,Yt.unstable_scheduleCallback(Yt.unstable_NormalPriority,HP)))}function el(t){function e(i){return oa(i,t)}if(0<Tu.length){oa(Tu[0],t);for(var n=1;n<Tu.length;n++){var r=Tu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Jr!==null&&oa(Jr,t),Xr!==null&&oa(Xr,t),Zr!==null&&oa(Zr,t),Xa.forEach(e),Za.forEach(e),n=0;n<Vr.length;n++)r=Vr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Vr.length&&(n=Vr[0],n.blockedOn===null);)Z0(n),n.blockedOn===null&&Vr.shift()}var Ks=wr.ReactCurrentBatchConfig,Tc=!0;function qP(t,e,n,r){var i=ge,s=Ks.transition;Ks.transition=null;try{ge=1,Um(t,e,n,r)}finally{ge=i,Ks.transition=s}}function GP(t,e,n,r){var i=ge,s=Ks.transition;Ks.transition=null;try{ge=4,Um(t,e,n,r)}finally{ge=i,Ks.transition=s}}function Um(t,e,n,r){if(Tc){var i=dp(t,e,n,r);if(i===null)af(t,e,r,Sc,n),t_(t,r);else if(WP(i,t,e,n,r))r.stopPropagation();else if(t_(t,r),e&4&&-1<zP.indexOf(t)){for(;i!==null;){var s=Ml(i);if(s!==null&&Q0(s),s=dp(t,e,n,r),s===null&&af(t,e,r,Sc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else af(t,e,r,null,n)}}var Sc=null;function dp(t,e,n,r){if(Sc=null,t=Mm(r),t=Li(t),t!==null)if(e=ps(t),e===null)t=null;else if(n=e.tag,n===13){if(t=$0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Sc=t,null}function eI(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(DP()){case jm:return 1;case H0:return 4;case Ec:case LP:return 16;case q0:return 536870912;default:return 16}default:return 16}}var Hr=null,$m=null,Yu=null;function tI(){if(Yu)return Yu;var t,e=$m,n=e.length,r,i="value"in Hr?Hr.value:Hr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Yu=i.slice(t,1<r?1-r:void 0)}function Ju(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Su(){return!0}function r_(){return!1}function Zt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Su:r_,this.isPropagationStopped=r_,this}return be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Su)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Su)},persist:function(){},isPersistent:Su}),e}var ko={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bm=Zt(ko),Ll=be({},ko,{view:0,detail:0}),KP=Zt(Ll),Jh,Xh,aa,Sd=be({},Ll,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==aa&&(aa&&t.type==="mousemove"?(Jh=t.screenX-aa.screenX,Xh=t.screenY-aa.screenY):Xh=Jh=0,aa=t),Jh)},movementY:function(t){return"movementY"in t?t.movementY:Xh}}),i_=Zt(Sd),QP=be({},Sd,{dataTransfer:0}),YP=Zt(QP),JP=be({},Ll,{relatedTarget:0}),Zh=Zt(JP),XP=be({},ko,{animationName:0,elapsedTime:0,pseudoElement:0}),ZP=Zt(XP),e1=be({},ko,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),t1=Zt(e1),n1=be({},ko,{data:0}),s_=Zt(n1),r1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},i1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},s1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function o1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=s1[t])?!!e[t]:!1}function zm(){return o1}var a1=be({},Ll,{key:function(t){if(t.key){var e=r1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ju(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?i1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zm,charCode:function(t){return t.type==="keypress"?Ju(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ju(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),l1=Zt(a1),u1=be({},Sd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),o_=Zt(u1),c1=be({},Ll,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zm}),d1=Zt(c1),h1=be({},ko,{propertyName:0,elapsedTime:0,pseudoElement:0}),f1=Zt(h1),p1=be({},Sd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),m1=Zt(p1),g1=[9,13,27,32],Wm=cr&&"CompositionEvent"in window,ba=null;cr&&"documentMode"in document&&(ba=document.documentMode);var v1=cr&&"TextEvent"in window&&!ba,nI=cr&&(!Wm||ba&&8<ba&&11>=ba),a_=" ",l_=!1;function rI(t,e){switch(t){case"keyup":return g1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function iI(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Os=!1;function y1(t,e){switch(t){case"compositionend":return iI(e);case"keypress":return e.which!==32?null:(l_=!0,a_);case"textInput":return t=e.data,t===a_&&l_?null:t;default:return null}}function _1(t,e){if(Os)return t==="compositionend"||!Wm&&rI(t,e)?(t=tI(),Yu=$m=Hr=null,Os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return nI&&e.locale!=="ko"?null:e.data;default:return null}}var w1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function u_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!w1[t.type]:e==="textarea"}function sI(t,e,n,r){M0(r),e=kc(e,"onChange"),0<e.length&&(n=new Bm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Na=null,tl=null;function E1(t){gI(t,0)}function kd(t){var e=Ms(t);if(P0(e))return t}function I1(t,e){if(t==="change")return e}var oI=!1;if(cr){var ef;if(cr){var tf="oninput"in document;if(!tf){var c_=document.createElement("div");c_.setAttribute("oninput","return;"),tf=typeof c_.oninput=="function"}ef=tf}else ef=!1;oI=ef&&(!document.documentMode||9<document.documentMode)}function d_(){Na&&(Na.detachEvent("onpropertychange",aI),tl=Na=null)}function aI(t){if(t.propertyName==="value"&&kd(tl)){var e=[];sI(e,tl,t,Mm(t)),U0(E1,e)}}function T1(t,e,n){t==="focusin"?(d_(),Na=e,tl=n,Na.attachEvent("onpropertychange",aI)):t==="focusout"&&d_()}function S1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return kd(tl)}function k1(t,e){if(t==="click")return kd(e)}function R1(t,e){if(t==="input"||t==="change")return kd(e)}function C1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Rn=typeof Object.is=="function"?Object.is:C1;function nl(t,e){if(Rn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Gf.call(e,i)||!Rn(t[i],e[i]))return!1}return!0}function h_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function f_(t,e){var n=h_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=h_(n)}}function lI(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?lI(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function uI(){for(var t=window,e=yc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yc(t.document)}return e}function Hm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function A1(t){var e=uI(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&lI(n.ownerDocument.documentElement,n)){if(r!==null&&Hm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=f_(n,s);var o=f_(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var P1=cr&&"documentMode"in document&&11>=document.documentMode,Ds=null,hp=null,xa=null,fp=!1;function p_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fp||Ds==null||Ds!==yc(r)||(r=Ds,"selectionStart"in r&&Hm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xa&&nl(xa,r)||(xa=r,r=kc(hp,"onSelect"),0<r.length&&(e=new Bm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ds)))}function ku(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ls={animationend:ku("Animation","AnimationEnd"),animationiteration:ku("Animation","AnimationIteration"),animationstart:ku("Animation","AnimationStart"),transitionend:ku("Transition","TransitionEnd")},nf={},cI={};cr&&(cI=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function Rd(t){if(nf[t])return nf[t];if(!Ls[t])return t;var e=Ls[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in cI)return nf[t]=e[n];return t}var dI=Rd("animationend"),hI=Rd("animationiteration"),fI=Rd("animationstart"),pI=Rd("transitionend"),mI=new Map,m_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gi(t,e){mI.set(t,e),fs(e,[t])}for(var rf=0;rf<m_.length;rf++){var sf=m_[rf],b1=sf.toLowerCase(),N1=sf[0].toUpperCase()+sf.slice(1);gi(b1,"on"+N1)}gi(dI,"onAnimationEnd");gi(hI,"onAnimationIteration");gi(fI,"onAnimationStart");gi("dblclick","onDoubleClick");gi("focusin","onFocus");gi("focusout","onBlur");gi(pI,"onTransitionEnd");ro("onMouseEnter",["mouseout","mouseover"]);ro("onMouseLeave",["mouseout","mouseover"]);ro("onPointerEnter",["pointerout","pointerover"]);ro("onPointerLeave",["pointerout","pointerover"]);fs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fs("onBeforeInput",["compositionend","keypress","textInput","paste"]);fs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),x1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ea));function g_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,bP(r,e,void 0,t),t.currentTarget=null}function gI(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;g_(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;g_(i,a,c),s=l}}}if(wc)throw t=lp,wc=!1,lp=null,t}function Ie(t,e){var n=e[yp];n===void 0&&(n=e[yp]=new Set);var r=t+"__bubble";n.has(r)||(vI(e,t,2,!1),n.add(r))}function of(t,e,n){var r=0;e&&(r|=4),vI(n,t,r,e)}var Ru="_reactListening"+Math.random().toString(36).slice(2);function rl(t){if(!t[Ru]){t[Ru]=!0,S0.forEach(function(n){n!=="selectionchange"&&(x1.has(n)||of(n,!1,t),of(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ru]||(e[Ru]=!0,of("selectionchange",!1,e))}}function vI(t,e,n,r){switch(eI(e)){case 1:var i=qP;break;case 4:i=GP;break;default:i=Um}n=i.bind(null,e,n,t),i=void 0,!ap||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function af(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Li(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}U0(function(){var c=s,d=Mm(n),f=[];e:{var g=mI.get(t);if(g!==void 0){var k=Bm,R=t;switch(t){case"keypress":if(Ju(n)===0)break e;case"keydown":case"keyup":k=l1;break;case"focusin":R="focus",k=Zh;break;case"focusout":R="blur",k=Zh;break;case"beforeblur":case"afterblur":k=Zh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=i_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=YP;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=d1;break;case dI:case hI:case fI:k=ZP;break;case pI:k=f1;break;case"scroll":k=KP;break;case"wheel":k=m1;break;case"copy":case"cut":case"paste":k=t1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=o_}var x=(e&4)!==0,b=!x&&t==="scroll",E=x?g!==null?g+"Capture":null:g;x=[];for(var w=c,S;w!==null;){S=w;var O=S.stateNode;if(S.tag===5&&O!==null&&(S=O,E!==null&&(O=Ja(w,E),O!=null&&x.push(il(w,O,S)))),b)break;w=w.return}0<x.length&&(g=new k(g,R,null,n,d),f.push({event:g,listeners:x}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",g&&n!==sp&&(R=n.relatedTarget||n.fromElement)&&(Li(R)||R[dr]))break e;if((k||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,k?(R=n.relatedTarget||n.toElement,k=c,R=R?Li(R):null,R!==null&&(b=ps(R),R!==b||R.tag!==5&&R.tag!==6)&&(R=null)):(k=null,R=c),k!==R)){if(x=i_,O="onMouseLeave",E="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(x=o_,O="onPointerLeave",E="onPointerEnter",w="pointer"),b=k==null?g:Ms(k),S=R==null?g:Ms(R),g=new x(O,w+"leave",k,n,d),g.target=b,g.relatedTarget=S,O=null,Li(d)===c&&(x=new x(E,w+"enter",R,n,d),x.target=S,x.relatedTarget=b,O=x),b=O,k&&R)t:{for(x=k,E=R,w=0,S=x;S;S=Is(S))w++;for(S=0,O=E;O;O=Is(O))S++;for(;0<w-S;)x=Is(x),w--;for(;0<S-w;)E=Is(E),S--;for(;w--;){if(x===E||E!==null&&x===E.alternate)break t;x=Is(x),E=Is(E)}x=null}else x=null;k!==null&&v_(f,g,k,x,!1),R!==null&&b!==null&&v_(f,b,R,x,!0)}}e:{if(g=c?Ms(c):window,k=g.nodeName&&g.nodeName.toLowerCase(),k==="select"||k==="input"&&g.type==="file")var M=I1;else if(u_(g))if(oI)M=R1;else{M=S1;var L=T1}else(k=g.nodeName)&&k.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(M=k1);if(M&&(M=M(t,c))){sI(f,M,n,d);break e}L&&L(t,g,c),t==="focusout"&&(L=g._wrapperState)&&L.controlled&&g.type==="number"&&ep(g,"number",g.value)}switch(L=c?Ms(c):window,t){case"focusin":(u_(L)||L.contentEditable==="true")&&(Ds=L,hp=c,xa=null);break;case"focusout":xa=hp=Ds=null;break;case"mousedown":fp=!0;break;case"contextmenu":case"mouseup":case"dragend":fp=!1,p_(f,n,d);break;case"selectionchange":if(P1)break;case"keydown":case"keyup":p_(f,n,d)}var I;if(Wm)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Os?rI(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(nI&&n.locale!=="ko"&&(Os||v!=="onCompositionStart"?v==="onCompositionEnd"&&Os&&(I=tI()):(Hr=d,$m="value"in Hr?Hr.value:Hr.textContent,Os=!0)),L=kc(c,v),0<L.length&&(v=new s_(v,t,null,n,d),f.push({event:v,listeners:L}),I?v.data=I:(I=iI(n),I!==null&&(v.data=I)))),(I=v1?y1(t,n):_1(t,n))&&(c=kc(c,"onBeforeInput"),0<c.length&&(d=new s_("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=I))}gI(f,e)})}function il(t,e,n){return{instance:t,listener:e,currentTarget:n}}function kc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ja(t,n),s!=null&&r.unshift(il(t,s,i)),s=Ja(t,e),s!=null&&r.push(il(t,s,i))),t=t.return}return r}function Is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function v_(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Ja(n,s),l!=null&&o.unshift(il(n,l,a))):i||(l=Ja(n,s),l!=null&&o.push(il(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var O1=/\r\n?/g,D1=/\u0000|\uFFFD/g;function y_(t){return(typeof t=="string"?t:""+t).replace(O1,`
`).replace(D1,"")}function Cu(t,e,n){if(e=y_(e),y_(t)!==e&&n)throw Error($(425))}function Rc(){}var pp=null,mp=null;function gp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var vp=typeof setTimeout=="function"?setTimeout:void 0,L1=typeof clearTimeout=="function"?clearTimeout:void 0,__=typeof Promise=="function"?Promise:void 0,M1=typeof queueMicrotask=="function"?queueMicrotask:typeof __<"u"?function(t){return __.resolve(null).then(t).catch(j1)}:vp;function j1(t){setTimeout(function(){throw t})}function lf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),el(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);el(e)}function ei(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function w_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ro=Math.random().toString(36).slice(2),Vn="__reactFiber$"+Ro,sl="__reactProps$"+Ro,dr="__reactContainer$"+Ro,yp="__reactEvents$"+Ro,V1="__reactListeners$"+Ro,F1="__reactHandles$"+Ro;function Li(t){var e=t[Vn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[dr]||n[Vn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=w_(t);t!==null;){if(n=t[Vn])return n;t=w_(t)}return e}t=n,n=t.parentNode}return null}function Ml(t){return t=t[Vn]||t[dr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ms(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error($(33))}function Cd(t){return t[sl]||null}var _p=[],js=-1;function vi(t){return{current:t}}function Te(t){0>js||(t.current=_p[js],_p[js]=null,js--)}function we(t,e){js++,_p[js]=t.current,t.current=e}var ui={},kt=vi(ui),Mt=vi(!1),Qi=ui;function io(t,e){var n=t.type.contextTypes;if(!n)return ui;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function jt(t){return t=t.childContextTypes,t!=null}function Cc(){Te(Mt),Te(kt)}function E_(t,e,n){if(kt.current!==ui)throw Error($(168));we(kt,e),we(Mt,n)}function yI(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error($(108,TP(t)||"Unknown",i));return be({},n,r)}function Ac(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ui,Qi=kt.current,we(kt,t),we(Mt,Mt.current),!0}function I_(t,e,n){var r=t.stateNode;if(!r)throw Error($(169));n?(t=yI(t,e,Qi),r.__reactInternalMemoizedMergedChildContext=t,Te(Mt),Te(kt),we(kt,t)):Te(Mt),we(Mt,n)}var Zn=null,Ad=!1,uf=!1;function _I(t){Zn===null?Zn=[t]:Zn.push(t)}function U1(t){Ad=!0,_I(t)}function yi(){if(!uf&&Zn!==null){uf=!0;var t=0,e=ge;try{var n=Zn;for(ge=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Zn=null,Ad=!1}catch(i){throw Zn!==null&&(Zn=Zn.slice(t+1)),W0(jm,yi),i}finally{ge=e,uf=!1}}return null}var Vs=[],Fs=0,Pc=null,bc=0,tn=[],nn=0,Yi=null,er=1,tr="";function Ni(t,e){Vs[Fs++]=bc,Vs[Fs++]=Pc,Pc=t,bc=e}function wI(t,e,n){tn[nn++]=er,tn[nn++]=tr,tn[nn++]=Yi,Yi=t;var r=er;t=tr;var i=32-Sn(r)-1;r&=~(1<<i),n+=1;var s=32-Sn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,er=1<<32-Sn(e)+i|n<<i|r,tr=s+t}else er=1<<s|n<<i|r,tr=t}function qm(t){t.return!==null&&(Ni(t,1),wI(t,1,0))}function Gm(t){for(;t===Pc;)Pc=Vs[--Fs],Vs[Fs]=null,bc=Vs[--Fs],Vs[Fs]=null;for(;t===Yi;)Yi=tn[--nn],tn[nn]=null,tr=tn[--nn],tn[nn]=null,er=tn[--nn],tn[nn]=null}var Kt=null,qt=null,Re=!1,_n=null;function EI(t,e){var n=rn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function T_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Kt=t,qt=ei(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Kt=t,qt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Yi!==null?{id:er,overflow:tr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=rn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Kt=t,qt=null,!0):!1;default:return!1}}function wp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ep(t){if(Re){var e=qt;if(e){var n=e;if(!T_(t,e)){if(wp(t))throw Error($(418));e=ei(n.nextSibling);var r=Kt;e&&T_(t,e)?EI(r,n):(t.flags=t.flags&-4097|2,Re=!1,Kt=t)}}else{if(wp(t))throw Error($(418));t.flags=t.flags&-4097|2,Re=!1,Kt=t}}}function S_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Kt=t}function Au(t){if(t!==Kt)return!1;if(!Re)return S_(t),Re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!gp(t.type,t.memoizedProps)),e&&(e=qt)){if(wp(t))throw II(),Error($(418));for(;e;)EI(t,e),e=ei(e.nextSibling)}if(S_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error($(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){qt=ei(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}qt=null}}else qt=Kt?ei(t.stateNode.nextSibling):null;return!0}function II(){for(var t=qt;t;)t=ei(t.nextSibling)}function so(){qt=Kt=null,Re=!1}function Km(t){_n===null?_n=[t]:_n.push(t)}var $1=wr.ReactCurrentBatchConfig;function la(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error($(284));if(!n._owner)throw Error($(290,t))}return t}function Pu(t,e){throw t=Object.prototype.toString.call(e),Error($(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function k_(t){var e=t._init;return e(t._payload)}function TI(t){function e(E,w){if(t){var S=E.deletions;S===null?(E.deletions=[w],E.flags|=16):S.push(w)}}function n(E,w){if(!t)return null;for(;w!==null;)e(E,w),w=w.sibling;return null}function r(E,w){for(E=new Map;w!==null;)w.key!==null?E.set(w.key,w):E.set(w.index,w),w=w.sibling;return E}function i(E,w){return E=ii(E,w),E.index=0,E.sibling=null,E}function s(E,w,S){return E.index=S,t?(S=E.alternate,S!==null?(S=S.index,S<w?(E.flags|=2,w):S):(E.flags|=2,w)):(E.flags|=1048576,w)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function a(E,w,S,O){return w===null||w.tag!==6?(w=gf(S,E.mode,O),w.return=E,w):(w=i(w,S),w.return=E,w)}function l(E,w,S,O){var M=S.type;return M===xs?d(E,w,S.props.children,O,S.key):w!==null&&(w.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Lr&&k_(M)===w.type)?(O=i(w,S.props),O.ref=la(E,w,S),O.return=E,O):(O=ic(S.type,S.key,S.props,null,E.mode,O),O.ref=la(E,w,S),O.return=E,O)}function c(E,w,S,O){return w===null||w.tag!==4||w.stateNode.containerInfo!==S.containerInfo||w.stateNode.implementation!==S.implementation?(w=vf(S,E.mode,O),w.return=E,w):(w=i(w,S.children||[]),w.return=E,w)}function d(E,w,S,O,M){return w===null||w.tag!==7?(w=Bi(S,E.mode,O,M),w.return=E,w):(w=i(w,S),w.return=E,w)}function f(E,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return w=gf(""+w,E.mode,S),w.return=E,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case yu:return S=ic(w.type,w.key,w.props,null,E.mode,S),S.ref=la(E,null,w),S.return=E,S;case Ns:return w=vf(w,E.mode,S),w.return=E,w;case Lr:var O=w._init;return f(E,O(w._payload),S)}if(_a(w)||ra(w))return w=Bi(w,E.mode,S,null),w.return=E,w;Pu(E,w)}return null}function g(E,w,S,O){var M=w!==null?w.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return M!==null?null:a(E,w,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case yu:return S.key===M?l(E,w,S,O):null;case Ns:return S.key===M?c(E,w,S,O):null;case Lr:return M=S._init,g(E,w,M(S._payload),O)}if(_a(S)||ra(S))return M!==null?null:d(E,w,S,O,null);Pu(E,S)}return null}function k(E,w,S,O,M){if(typeof O=="string"&&O!==""||typeof O=="number")return E=E.get(S)||null,a(w,E,""+O,M);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case yu:return E=E.get(O.key===null?S:O.key)||null,l(w,E,O,M);case Ns:return E=E.get(O.key===null?S:O.key)||null,c(w,E,O,M);case Lr:var L=O._init;return k(E,w,S,L(O._payload),M)}if(_a(O)||ra(O))return E=E.get(S)||null,d(w,E,O,M,null);Pu(w,O)}return null}function R(E,w,S,O){for(var M=null,L=null,I=w,v=w=0,T=null;I!==null&&v<S.length;v++){I.index>v?(T=I,I=null):T=I.sibling;var A=g(E,I,S[v],O);if(A===null){I===null&&(I=T);break}t&&I&&A.alternate===null&&e(E,I),w=s(A,w,v),L===null?M=A:L.sibling=A,L=A,I=T}if(v===S.length)return n(E,I),Re&&Ni(E,v),M;if(I===null){for(;v<S.length;v++)I=f(E,S[v],O),I!==null&&(w=s(I,w,v),L===null?M=I:L.sibling=I,L=I);return Re&&Ni(E,v),M}for(I=r(E,I);v<S.length;v++)T=k(I,E,v,S[v],O),T!==null&&(t&&T.alternate!==null&&I.delete(T.key===null?v:T.key),w=s(T,w,v),L===null?M=T:L.sibling=T,L=T);return t&&I.forEach(function(P){return e(E,P)}),Re&&Ni(E,v),M}function x(E,w,S,O){var M=ra(S);if(typeof M!="function")throw Error($(150));if(S=M.call(S),S==null)throw Error($(151));for(var L=M=null,I=w,v=w=0,T=null,A=S.next();I!==null&&!A.done;v++,A=S.next()){I.index>v?(T=I,I=null):T=I.sibling;var P=g(E,I,A.value,O);if(P===null){I===null&&(I=T);break}t&&I&&P.alternate===null&&e(E,I),w=s(P,w,v),L===null?M=P:L.sibling=P,L=P,I=T}if(A.done)return n(E,I),Re&&Ni(E,v),M;if(I===null){for(;!A.done;v++,A=S.next())A=f(E,A.value,O),A!==null&&(w=s(A,w,v),L===null?M=A:L.sibling=A,L=A);return Re&&Ni(E,v),M}for(I=r(E,I);!A.done;v++,A=S.next())A=k(I,E,v,A.value,O),A!==null&&(t&&A.alternate!==null&&I.delete(A.key===null?v:A.key),w=s(A,w,v),L===null?M=A:L.sibling=A,L=A);return t&&I.forEach(function(N){return e(E,N)}),Re&&Ni(E,v),M}function b(E,w,S,O){if(typeof S=="object"&&S!==null&&S.type===xs&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case yu:e:{for(var M=S.key,L=w;L!==null;){if(L.key===M){if(M=S.type,M===xs){if(L.tag===7){n(E,L.sibling),w=i(L,S.props.children),w.return=E,E=w;break e}}else if(L.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Lr&&k_(M)===L.type){n(E,L.sibling),w=i(L,S.props),w.ref=la(E,L,S),w.return=E,E=w;break e}n(E,L);break}else e(E,L);L=L.sibling}S.type===xs?(w=Bi(S.props.children,E.mode,O,S.key),w.return=E,E=w):(O=ic(S.type,S.key,S.props,null,E.mode,O),O.ref=la(E,w,S),O.return=E,E=O)}return o(E);case Ns:e:{for(L=S.key;w!==null;){if(w.key===L)if(w.tag===4&&w.stateNode.containerInfo===S.containerInfo&&w.stateNode.implementation===S.implementation){n(E,w.sibling),w=i(w,S.children||[]),w.return=E,E=w;break e}else{n(E,w);break}else e(E,w);w=w.sibling}w=vf(S,E.mode,O),w.return=E,E=w}return o(E);case Lr:return L=S._init,b(E,w,L(S._payload),O)}if(_a(S))return R(E,w,S,O);if(ra(S))return x(E,w,S,O);Pu(E,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,w!==null&&w.tag===6?(n(E,w.sibling),w=i(w,S),w.return=E,E=w):(n(E,w),w=gf(S,E.mode,O),w.return=E,E=w),o(E)):n(E,w)}return b}var oo=TI(!0),SI=TI(!1),Nc=vi(null),xc=null,Us=null,Qm=null;function Ym(){Qm=Us=xc=null}function Jm(t){var e=Nc.current;Te(Nc),t._currentValue=e}function Ip(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Qs(t,e){xc=t,Qm=Us=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Lt=!0),t.firstContext=null)}function ln(t){var e=t._currentValue;if(Qm!==t)if(t={context:t,memoizedValue:e,next:null},Us===null){if(xc===null)throw Error($(308));Us=t,xc.dependencies={lanes:0,firstContext:t}}else Us=Us.next=t;return e}var Mi=null;function Xm(t){Mi===null?Mi=[t]:Mi.push(t)}function kI(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Xm(e)):(n.next=i.next,i.next=n),e.interleaved=n,hr(t,r)}function hr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Mr=!1;function Zm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function RI(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function sr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ti(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,hr(t,n)}return i=r.interleaved,i===null?(e.next=e,Xm(r)):(e.next=i.next,i.next=e),r.interleaved=e,hr(t,n)}function Xu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Vm(t,n)}}function R_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Oc(t,e,n,r){var i=t.updateQueue;Mr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,d=c=l=null,a=s;do{var g=a.lane,k=a.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:k,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var R=t,x=a;switch(g=e,k=n,x.tag){case 1:if(R=x.payload,typeof R=="function"){f=R.call(k,f,g);break e}f=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=x.payload,g=typeof R=="function"?R.call(k,f,g):R,g==null)break e;f=be({},f,g);break e;case 2:Mr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else k={eventTime:k,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=k,l=f):d=d.next=k,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Xi|=o,t.lanes=o,t.memoizedState=f}}function C_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error($(191,i));i.call(r)}}}var jl={},Bn=vi(jl),ol=vi(jl),al=vi(jl);function ji(t){if(t===jl)throw Error($(174));return t}function eg(t,e){switch(we(al,e),we(ol,t),we(Bn,jl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:np(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=np(e,t)}Te(Bn),we(Bn,e)}function ao(){Te(Bn),Te(ol),Te(al)}function CI(t){ji(al.current);var e=ji(Bn.current),n=np(e,t.type);e!==n&&(we(ol,t),we(Bn,n))}function tg(t){ol.current===t&&(Te(Bn),Te(ol))}var Ae=vi(0);function Dc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var cf=[];function ng(){for(var t=0;t<cf.length;t++)cf[t]._workInProgressVersionPrimary=null;cf.length=0}var Zu=wr.ReactCurrentDispatcher,df=wr.ReactCurrentBatchConfig,Ji=0,Pe=null,Ge=null,Xe=null,Lc=!1,Oa=!1,ll=0,B1=0;function vt(){throw Error($(321))}function rg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Rn(t[n],e[n]))return!1;return!0}function ig(t,e,n,r,i,s){if(Ji=s,Pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Zu.current=t===null||t.memoizedState===null?q1:G1,t=n(r,i),Oa){s=0;do{if(Oa=!1,ll=0,25<=s)throw Error($(301));s+=1,Xe=Ge=null,e.updateQueue=null,Zu.current=K1,t=n(r,i)}while(Oa)}if(Zu.current=Mc,e=Ge!==null&&Ge.next!==null,Ji=0,Xe=Ge=Pe=null,Lc=!1,e)throw Error($(300));return t}function sg(){var t=ll!==0;return ll=0,t}function Mn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?Pe.memoizedState=Xe=t:Xe=Xe.next=t,Xe}function un(){if(Ge===null){var t=Pe.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var e=Xe===null?Pe.memoizedState:Xe.next;if(e!==null)Xe=e,Ge=t;else{if(t===null)throw Error($(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},Xe===null?Pe.memoizedState=Xe=t:Xe=Xe.next=t}return Xe}function ul(t,e){return typeof e=="function"?e(t):e}function hf(t){var e=un(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=Ge,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Ji&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,Pe.lanes|=d,Xi|=d}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,Rn(r,e.memoizedState)||(Lt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Pe.lanes|=s,Xi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ff(t){var e=un(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Rn(s,e.memoizedState)||(Lt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function AI(){}function PI(t,e){var n=Pe,r=un(),i=e(),s=!Rn(r.memoizedState,i);if(s&&(r.memoizedState=i,Lt=!0),r=r.queue,og(xI.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Xe!==null&&Xe.memoizedState.tag&1){if(n.flags|=2048,cl(9,NI.bind(null,n,r,i,e),void 0,null),tt===null)throw Error($(349));Ji&30||bI(n,e,i)}return i}function bI(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function NI(t,e,n,r){e.value=n,e.getSnapshot=r,OI(e)&&DI(t)}function xI(t,e,n){return n(function(){OI(e)&&DI(t)})}function OI(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Rn(t,n)}catch{return!0}}function DI(t){var e=hr(t,1);e!==null&&kn(e,t,1,-1)}function A_(t){var e=Mn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ul,lastRenderedState:t},e.queue=t,t=t.dispatch=H1.bind(null,Pe,t),[e.memoizedState,t]}function cl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function LI(){return un().memoizedState}function ec(t,e,n,r){var i=Mn();Pe.flags|=t,i.memoizedState=cl(1|e,n,void 0,r===void 0?null:r)}function Pd(t,e,n,r){var i=un();r=r===void 0?null:r;var s=void 0;if(Ge!==null){var o=Ge.memoizedState;if(s=o.destroy,r!==null&&rg(r,o.deps)){i.memoizedState=cl(e,n,s,r);return}}Pe.flags|=t,i.memoizedState=cl(1|e,n,s,r)}function P_(t,e){return ec(8390656,8,t,e)}function og(t,e){return Pd(2048,8,t,e)}function MI(t,e){return Pd(4,2,t,e)}function jI(t,e){return Pd(4,4,t,e)}function VI(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function FI(t,e,n){return n=n!=null?n.concat([t]):null,Pd(4,4,VI.bind(null,e,t),n)}function ag(){}function UI(t,e){var n=un();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&rg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function $I(t,e){var n=un();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&rg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function BI(t,e,n){return Ji&21?(Rn(n,e)||(n=G0(),Pe.lanes|=n,Xi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Lt=!0),t.memoizedState=n)}function z1(t,e){var n=ge;ge=n!==0&&4>n?n:4,t(!0);var r=df.transition;df.transition={};try{t(!1),e()}finally{ge=n,df.transition=r}}function zI(){return un().memoizedState}function W1(t,e,n){var r=ri(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},WI(t))HI(e,n);else if(n=kI(t,e,n,r),n!==null){var i=Pt();kn(n,t,r,i),qI(n,e,r)}}function H1(t,e,n){var r=ri(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(WI(t))HI(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Rn(a,o)){var l=e.interleaved;l===null?(i.next=i,Xm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=kI(t,e,i,r),n!==null&&(i=Pt(),kn(n,t,r,i),qI(n,e,r))}}function WI(t){var e=t.alternate;return t===Pe||e!==null&&e===Pe}function HI(t,e){Oa=Lc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function qI(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Vm(t,n)}}var Mc={readContext:ln,useCallback:vt,useContext:vt,useEffect:vt,useImperativeHandle:vt,useInsertionEffect:vt,useLayoutEffect:vt,useMemo:vt,useReducer:vt,useRef:vt,useState:vt,useDebugValue:vt,useDeferredValue:vt,useTransition:vt,useMutableSource:vt,useSyncExternalStore:vt,useId:vt,unstable_isNewReconciler:!1},q1={readContext:ln,useCallback:function(t,e){return Mn().memoizedState=[t,e===void 0?null:e],t},useContext:ln,useEffect:P_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ec(4194308,4,VI.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ec(4194308,4,t,e)},useInsertionEffect:function(t,e){return ec(4,2,t,e)},useMemo:function(t,e){var n=Mn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Mn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=W1.bind(null,Pe,t),[r.memoizedState,t]},useRef:function(t){var e=Mn();return t={current:t},e.memoizedState=t},useState:A_,useDebugValue:ag,useDeferredValue:function(t){return Mn().memoizedState=t},useTransition:function(){var t=A_(!1),e=t[0];return t=z1.bind(null,t[1]),Mn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Pe,i=Mn();if(Re){if(n===void 0)throw Error($(407));n=n()}else{if(n=e(),tt===null)throw Error($(349));Ji&30||bI(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,P_(xI.bind(null,r,s,t),[t]),r.flags|=2048,cl(9,NI.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Mn(),e=tt.identifierPrefix;if(Re){var n=tr,r=er;n=(r&~(1<<32-Sn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ll++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=B1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},G1={readContext:ln,useCallback:UI,useContext:ln,useEffect:og,useImperativeHandle:FI,useInsertionEffect:MI,useLayoutEffect:jI,useMemo:$I,useReducer:hf,useRef:LI,useState:function(){return hf(ul)},useDebugValue:ag,useDeferredValue:function(t){var e=un();return BI(e,Ge.memoizedState,t)},useTransition:function(){var t=hf(ul)[0],e=un().memoizedState;return[t,e]},useMutableSource:AI,useSyncExternalStore:PI,useId:zI,unstable_isNewReconciler:!1},K1={readContext:ln,useCallback:UI,useContext:ln,useEffect:og,useImperativeHandle:FI,useInsertionEffect:MI,useLayoutEffect:jI,useMemo:$I,useReducer:ff,useRef:LI,useState:function(){return ff(ul)},useDebugValue:ag,useDeferredValue:function(t){var e=un();return Ge===null?e.memoizedState=t:BI(e,Ge.memoizedState,t)},useTransition:function(){var t=ff(ul)[0],e=un().memoizedState;return[t,e]},useMutableSource:AI,useSyncExternalStore:PI,useId:zI,unstable_isNewReconciler:!1};function vn(t,e){if(t&&t.defaultProps){e=be({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Tp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:be({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var bd={isMounted:function(t){return(t=t._reactInternals)?ps(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Pt(),i=ri(t),s=sr(r,i);s.payload=e,n!=null&&(s.callback=n),e=ti(t,s,i),e!==null&&(kn(e,t,i,r),Xu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Pt(),i=ri(t),s=sr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ti(t,s,i),e!==null&&(kn(e,t,i,r),Xu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Pt(),r=ri(t),i=sr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ti(t,i,r),e!==null&&(kn(e,t,r,n),Xu(e,t,r))}};function b_(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!nl(n,r)||!nl(i,s):!0}function GI(t,e,n){var r=!1,i=ui,s=e.contextType;return typeof s=="object"&&s!==null?s=ln(s):(i=jt(e)?Qi:kt.current,r=e.contextTypes,s=(r=r!=null)?io(t,i):ui),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=bd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function N_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&bd.enqueueReplaceState(e,e.state,null)}function Sp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Zm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ln(s):(s=jt(e)?Qi:kt.current,i.context=io(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Tp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&bd.enqueueReplaceState(i,i.state,null),Oc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function lo(t,e){try{var n="",r=e;do n+=IP(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function pf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function kp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Q1=typeof WeakMap=="function"?WeakMap:Map;function KI(t,e,n){n=sr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Vc||(Vc=!0,Lp=r),kp(t,e)},n}function QI(t,e,n){n=sr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){kp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){kp(t,e),typeof r!="function"&&(ni===null?ni=new Set([this]):ni.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function x_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Q1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=ub.bind(null,t,e,n),e.then(t,t))}function O_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function D_(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=sr(-1,1),e.tag=2,ti(n,e,1))),n.lanes|=1),t)}var Y1=wr.ReactCurrentOwner,Lt=!1;function At(t,e,n,r){e.child=t===null?SI(e,null,n,r):oo(e,t.child,n,r)}function L_(t,e,n,r,i){n=n.render;var s=e.ref;return Qs(e,i),r=ig(t,e,n,r,s,i),n=sg(),t!==null&&!Lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,fr(t,e,i)):(Re&&n&&qm(e),e.flags|=1,At(t,e,r,i),e.child)}function M_(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!mg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,YI(t,e,s,r,i)):(t=ic(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:nl,n(o,r)&&t.ref===e.ref)return fr(t,e,i)}return e.flags|=1,t=ii(s,r),t.ref=e.ref,t.return=e,e.child=t}function YI(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(nl(s,r)&&t.ref===e.ref)if(Lt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Lt=!0);else return e.lanes=t.lanes,fr(t,e,i)}return Rp(t,e,n,r,i)}function JI(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(Bs,Wt),Wt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,we(Bs,Wt),Wt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,we(Bs,Wt),Wt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,we(Bs,Wt),Wt|=r;return At(t,e,i,n),e.child}function XI(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Rp(t,e,n,r,i){var s=jt(n)?Qi:kt.current;return s=io(e,s),Qs(e,i),n=ig(t,e,n,r,s,i),r=sg(),t!==null&&!Lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,fr(t,e,i)):(Re&&r&&qm(e),e.flags|=1,At(t,e,n,i),e.child)}function j_(t,e,n,r,i){if(jt(n)){var s=!0;Ac(e)}else s=!1;if(Qs(e,i),e.stateNode===null)tc(t,e),GI(e,n,r),Sp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ln(c):(c=jt(n)?Qi:kt.current,c=io(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&N_(e,o,r,c),Mr=!1;var g=e.memoizedState;o.state=g,Oc(e,r,o,i),l=e.memoizedState,a!==r||g!==l||Mt.current||Mr?(typeof d=="function"&&(Tp(e,n,d,r),l=e.memoizedState),(a=Mr||b_(e,n,a,r,g,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,RI(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:vn(e.type,a),o.props=c,f=e.pendingProps,g=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ln(l):(l=jt(n)?Qi:kt.current,l=io(e,l));var k=n.getDerivedStateFromProps;(d=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||g!==l)&&N_(e,o,r,l),Mr=!1,g=e.memoizedState,o.state=g,Oc(e,r,o,i);var R=e.memoizedState;a!==f||g!==R||Mt.current||Mr?(typeof k=="function"&&(Tp(e,n,k,r),R=e.memoizedState),(c=Mr||b_(e,n,c,r,g,R,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Cp(t,e,n,r,s,i)}function Cp(t,e,n,r,i,s){XI(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&I_(e,n,!1),fr(t,e,s);r=e.stateNode,Y1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=oo(e,t.child,null,s),e.child=oo(e,null,a,s)):At(t,e,a,s),e.memoizedState=r.state,i&&I_(e,n,!0),e.child}function ZI(t){var e=t.stateNode;e.pendingContext?E_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&E_(t,e.context,!1),eg(t,e.containerInfo)}function V_(t,e,n,r,i){return so(),Km(i),e.flags|=256,At(t,e,n,r),e.child}var Ap={dehydrated:null,treeContext:null,retryLane:0};function Pp(t){return{baseLanes:t,cachePool:null,transitions:null}}function eT(t,e,n){var r=e.pendingProps,i=Ae.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),we(Ae,i&1),t===null)return Ep(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Od(o,r,0,null),t=Bi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Pp(n),e.memoizedState=Ap,t):lg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return J1(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ii(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ii(a,s):(s=Bi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Pp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ap,r}return s=t.child,t=s.sibling,r=ii(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function lg(t,e){return e=Od({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function bu(t,e,n,r){return r!==null&&Km(r),oo(e,t.child,null,n),t=lg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function J1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=pf(Error($(422))),bu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Od({mode:"visible",children:r.children},i,0,null),s=Bi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&oo(e,t.child,null,o),e.child.memoizedState=Pp(o),e.memoizedState=Ap,s);if(!(e.mode&1))return bu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error($(419)),r=pf(s,r,void 0),bu(t,e,o,r)}if(a=(o&t.childLanes)!==0,Lt||a){if(r=tt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,hr(t,i),kn(r,t,i,-1))}return pg(),r=pf(Error($(421))),bu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=cb.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,qt=ei(i.nextSibling),Kt=e,Re=!0,_n=null,t!==null&&(tn[nn++]=er,tn[nn++]=tr,tn[nn++]=Yi,er=t.id,tr=t.overflow,Yi=e),e=lg(e,r.children),e.flags|=4096,e)}function F_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ip(t.return,e,n)}function mf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function tT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(At(t,e,r.children,n),r=Ae.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&F_(t,n,e);else if(t.tag===19)F_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(we(Ae,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Dc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),mf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Dc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}mf(e,!0,n,null,s);break;case"together":mf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function tc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function fr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error($(153));if(e.child!==null){for(t=e.child,n=ii(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ii(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function X1(t,e,n){switch(e.tag){case 3:ZI(e),so();break;case 5:CI(e);break;case 1:jt(e.type)&&Ac(e);break;case 4:eg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;we(Nc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(we(Ae,Ae.current&1),e.flags|=128,null):n&e.child.childLanes?eT(t,e,n):(we(Ae,Ae.current&1),t=fr(t,e,n),t!==null?t.sibling:null);we(Ae,Ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return tT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(Ae,Ae.current),r)break;return null;case 22:case 23:return e.lanes=0,JI(t,e,n)}return fr(t,e,n)}var nT,bp,rT,iT;nT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bp=function(){};rT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ji(Bn.current);var s=null;switch(n){case"input":i=Xf(t,i),r=Xf(t,r),s=[];break;case"select":i=be({},i,{value:void 0}),r=be({},r,{value:void 0}),s=[];break;case"textarea":i=tp(t,i),r=tp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Rc)}rp(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Qa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Qa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Ie("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};iT=function(t,e,n,r){n!==r&&(e.flags|=4)};function ua(t,e){if(!Re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Z1(t,e,n){var r=e.pendingProps;switch(Gm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(e),null;case 1:return jt(e.type)&&Cc(),yt(e),null;case 3:return r=e.stateNode,ao(),Te(Mt),Te(kt),ng(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Au(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,_n!==null&&(Vp(_n),_n=null))),bp(t,e),yt(e),null;case 5:tg(e);var i=ji(al.current);if(n=e.type,t!==null&&e.stateNode!=null)rT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error($(166));return yt(e),null}if(t=ji(Bn.current),Au(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Vn]=e,r[sl]=s,t=(e.mode&1)!==0,n){case"dialog":Ie("cancel",r),Ie("close",r);break;case"iframe":case"object":case"embed":Ie("load",r);break;case"video":case"audio":for(i=0;i<Ea.length;i++)Ie(Ea[i],r);break;case"source":Ie("error",r);break;case"img":case"image":case"link":Ie("error",r),Ie("load",r);break;case"details":Ie("toggle",r);break;case"input":Ky(r,s),Ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ie("invalid",r);break;case"textarea":Yy(r,s),Ie("invalid",r)}rp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Cu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Cu(r.textContent,a,t),i=["children",""+a]):Qa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ie("scroll",r)}switch(n){case"input":_u(r),Qy(r,s,!0);break;case"textarea":_u(r),Jy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Rc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=x0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Vn]=e,t[sl]=r,nT(t,e,!1,!1),e.stateNode=t;e:{switch(o=ip(n,r),n){case"dialog":Ie("cancel",t),Ie("close",t),i=r;break;case"iframe":case"object":case"embed":Ie("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ea.length;i++)Ie(Ea[i],t);i=r;break;case"source":Ie("error",t),i=r;break;case"img":case"image":case"link":Ie("error",t),Ie("load",t),i=r;break;case"details":Ie("toggle",t),i=r;break;case"input":Ky(t,r),i=Xf(t,r),Ie("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=be({},r,{value:void 0}),Ie("invalid",t);break;case"textarea":Yy(t,r),i=tp(t,r),Ie("invalid",t);break;default:i=r}rp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?L0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&O0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ya(t,l):typeof l=="number"&&Ya(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Qa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ie("scroll",t):l!=null&&xm(t,s,l,o))}switch(n){case"input":_u(t),Qy(t,r,!1);break;case"textarea":_u(t),Jy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+li(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Hs(t,!!r.multiple,s,!1):r.defaultValue!=null&&Hs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Rc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return yt(e),null;case 6:if(t&&e.stateNode!=null)iT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error($(166));if(n=ji(al.current),ji(Bn.current),Au(e)){if(r=e.stateNode,n=e.memoizedProps,r[Vn]=e,(s=r.nodeValue!==n)&&(t=Kt,t!==null))switch(t.tag){case 3:Cu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Cu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Vn]=e,e.stateNode=r}return yt(e),null;case 13:if(Te(Ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Re&&qt!==null&&e.mode&1&&!(e.flags&128))II(),so(),e.flags|=98560,s=!1;else if(s=Au(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error($(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error($(317));s[Vn]=e}else so(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;yt(e),s=!1}else _n!==null&&(Vp(_n),_n=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ae.current&1?Ke===0&&(Ke=3):pg())),e.updateQueue!==null&&(e.flags|=4),yt(e),null);case 4:return ao(),bp(t,e),t===null&&rl(e.stateNode.containerInfo),yt(e),null;case 10:return Jm(e.type._context),yt(e),null;case 17:return jt(e.type)&&Cc(),yt(e),null;case 19:if(Te(Ae),s=e.memoizedState,s===null)return yt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ua(s,!1);else{if(Ke!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Dc(t),o!==null){for(e.flags|=128,ua(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return we(Ae,Ae.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ue()>uo&&(e.flags|=128,r=!0,ua(s,!1),e.lanes=4194304)}else{if(!r)if(t=Dc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ua(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Re)return yt(e),null}else 2*Ue()-s.renderingStartTime>uo&&n!==1073741824&&(e.flags|=128,r=!0,ua(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ue(),e.sibling=null,n=Ae.current,we(Ae,r?n&1|2:n&1),e):(yt(e),null);case 22:case 23:return fg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Wt&1073741824&&(yt(e),e.subtreeFlags&6&&(e.flags|=8192)):yt(e),null;case 24:return null;case 25:return null}throw Error($(156,e.tag))}function eb(t,e){switch(Gm(e),e.tag){case 1:return jt(e.type)&&Cc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ao(),Te(Mt),Te(kt),ng(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return tg(e),null;case 13:if(Te(Ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error($(340));so()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Te(Ae),null;case 4:return ao(),null;case 10:return Jm(e.type._context),null;case 22:case 23:return fg(),null;case 24:return null;default:return null}}var Nu=!1,Et=!1,tb=typeof WeakSet=="function"?WeakSet:Set,q=null;function $s(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(t,e,r)}else n.current=null}function Np(t,e,n){try{n()}catch(r){Oe(t,e,r)}}var U_=!1;function nb(t,e){if(pp=Tc,t=uI(),Hm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,g=null;t:for(;;){for(var k;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(k=f.firstChild)!==null;)g=f,f=k;for(;;){if(f===t)break t;if(g===n&&++c===i&&(a=o),g===s&&++d===r&&(l=o),(k=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=k}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(mp={focusedElem:t,selectionRange:n},Tc=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var x=R.memoizedProps,b=R.memoizedState,E=e.stateNode,w=E.getSnapshotBeforeUpdate(e.elementType===e.type?x:vn(e.type,x),b);E.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(O){Oe(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return R=U_,U_=!1,R}function Da(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Np(e,n,s)}i=i.next}while(i!==r)}}function Nd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function xp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function sT(t){var e=t.alternate;e!==null&&(t.alternate=null,sT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Vn],delete e[sl],delete e[yp],delete e[V1],delete e[F1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function oT(t){return t.tag===5||t.tag===3||t.tag===4}function $_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||oT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Op(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Rc));else if(r!==4&&(t=t.child,t!==null))for(Op(t,e,n),t=t.sibling;t!==null;)Op(t,e,n),t=t.sibling}function Dp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Dp(t,e,n),t=t.sibling;t!==null;)Dp(t,e,n),t=t.sibling}var at=null,yn=!1;function xr(t,e,n){for(n=n.child;n!==null;)aT(t,e,n),n=n.sibling}function aT(t,e,n){if($n&&typeof $n.onCommitFiberUnmount=="function")try{$n.onCommitFiberUnmount(Td,n)}catch{}switch(n.tag){case 5:Et||$s(n,e);case 6:var r=at,i=yn;at=null,xr(t,e,n),at=r,yn=i,at!==null&&(yn?(t=at,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):at.removeChild(n.stateNode));break;case 18:at!==null&&(yn?(t=at,n=n.stateNode,t.nodeType===8?lf(t.parentNode,n):t.nodeType===1&&lf(t,n),el(t)):lf(at,n.stateNode));break;case 4:r=at,i=yn,at=n.stateNode.containerInfo,yn=!0,xr(t,e,n),at=r,yn=i;break;case 0:case 11:case 14:case 15:if(!Et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Np(n,e,o),i=i.next}while(i!==r)}xr(t,e,n);break;case 1:if(!Et&&($s(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Oe(n,e,a)}xr(t,e,n);break;case 21:xr(t,e,n);break;case 22:n.mode&1?(Et=(r=Et)||n.memoizedState!==null,xr(t,e,n),Et=r):xr(t,e,n);break;default:xr(t,e,n)}}function B_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new tb),e.forEach(function(r){var i=db.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function gn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:at=a.stateNode,yn=!1;break e;case 3:at=a.stateNode.containerInfo,yn=!0;break e;case 4:at=a.stateNode.containerInfo,yn=!0;break e}a=a.return}if(at===null)throw Error($(160));aT(s,o,i),at=null,yn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Oe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)lT(e,t),e=e.sibling}function lT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(gn(e,t),Dn(t),r&4){try{Da(3,t,t.return),Nd(3,t)}catch(x){Oe(t,t.return,x)}try{Da(5,t,t.return)}catch(x){Oe(t,t.return,x)}}break;case 1:gn(e,t),Dn(t),r&512&&n!==null&&$s(n,n.return);break;case 5:if(gn(e,t),Dn(t),r&512&&n!==null&&$s(n,n.return),t.flags&32){var i=t.stateNode;try{Ya(i,"")}catch(x){Oe(t,t.return,x)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&b0(i,s),ip(a,o);var c=ip(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?L0(i,f):d==="dangerouslySetInnerHTML"?O0(i,f):d==="children"?Ya(i,f):xm(i,d,f,c)}switch(a){case"input":Zf(i,s);break;case"textarea":N0(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var k=s.value;k!=null?Hs(i,!!s.multiple,k,!1):g!==!!s.multiple&&(s.defaultValue!=null?Hs(i,!!s.multiple,s.defaultValue,!0):Hs(i,!!s.multiple,s.multiple?[]:"",!1))}i[sl]=s}catch(x){Oe(t,t.return,x)}}break;case 6:if(gn(e,t),Dn(t),r&4){if(t.stateNode===null)throw Error($(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(x){Oe(t,t.return,x)}}break;case 3:if(gn(e,t),Dn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{el(e.containerInfo)}catch(x){Oe(t,t.return,x)}break;case 4:gn(e,t),Dn(t);break;case 13:gn(e,t),Dn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(dg=Ue())),r&4&&B_(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Et=(c=Et)||d,gn(e,t),Et=c):gn(e,t),Dn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(q=t,d=t.child;d!==null;){for(f=q=d;q!==null;){switch(g=q,k=g.child,g.tag){case 0:case 11:case 14:case 15:Da(4,g,g.return);break;case 1:$s(g,g.return);var R=g.stateNode;if(typeof R.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(x){Oe(r,n,x)}}break;case 5:$s(g,g.return);break;case 22:if(g.memoizedState!==null){W_(f);continue}}k!==null?(k.return=g,q=k):W_(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=D0("display",o))}catch(x){Oe(t,t.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){Oe(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:gn(e,t),Dn(t),r&4&&B_(t);break;case 21:break;default:gn(e,t),Dn(t)}}function Dn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(oT(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ya(i,""),r.flags&=-33);var s=$_(t);Dp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=$_(t);Op(t,a,o);break;default:throw Error($(161))}}catch(l){Oe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function rb(t,e,n){q=t,uT(t)}function uT(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Nu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Et;a=Nu;var c=Et;if(Nu=o,(Et=l)&&!c)for(q=i;q!==null;)o=q,l=o.child,o.tag===22&&o.memoizedState!==null?H_(i):l!==null?(l.return=o,q=l):H_(i);for(;s!==null;)q=s,uT(s),s=s.sibling;q=i,Nu=a,Et=c}z_(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):z_(t)}}function z_(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Et||Nd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Et)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:vn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&C_(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}C_(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&el(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}Et||e.flags&512&&xp(e)}catch(g){Oe(e,e.return,g)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function W_(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function H_(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Nd(4,e)}catch(l){Oe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Oe(e,i,l)}}var s=e.return;try{xp(e)}catch(l){Oe(e,s,l)}break;case 5:var o=e.return;try{xp(e)}catch(l){Oe(e,o,l)}}}catch(l){Oe(e,e.return,l)}if(e===t){q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,q=a;break}q=e.return}}var ib=Math.ceil,jc=wr.ReactCurrentDispatcher,ug=wr.ReactCurrentOwner,sn=wr.ReactCurrentBatchConfig,he=0,tt=null,We=null,dt=0,Wt=0,Bs=vi(0),Ke=0,dl=null,Xi=0,xd=0,cg=0,La=null,Dt=null,dg=0,uo=1/0,Xn=null,Vc=!1,Lp=null,ni=null,xu=!1,qr=null,Fc=0,Ma=0,Mp=null,nc=-1,rc=0;function Pt(){return he&6?Ue():nc!==-1?nc:nc=Ue()}function ri(t){return t.mode&1?he&2&&dt!==0?dt&-dt:$1.transition!==null?(rc===0&&(rc=G0()),rc):(t=ge,t!==0||(t=window.event,t=t===void 0?16:eI(t.type)),t):1}function kn(t,e,n,r){if(50<Ma)throw Ma=0,Mp=null,Error($(185));Dl(t,n,r),(!(he&2)||t!==tt)&&(t===tt&&(!(he&2)&&(xd|=n),Ke===4&&Fr(t,dt)),Vt(t,r),n===1&&he===0&&!(e.mode&1)&&(uo=Ue()+500,Ad&&yi()))}function Vt(t,e){var n=t.callbackNode;$P(t,e);var r=Ic(t,t===tt?dt:0);if(r===0)n!==null&&e_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&e_(n),e===1)t.tag===0?U1(q_.bind(null,t)):_I(q_.bind(null,t)),M1(function(){!(he&6)&&yi()}),n=null;else{switch(K0(r)){case 1:n=jm;break;case 4:n=H0;break;case 16:n=Ec;break;case 536870912:n=q0;break;default:n=Ec}n=vT(n,cT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function cT(t,e){if(nc=-1,rc=0,he&6)throw Error($(327));var n=t.callbackNode;if(Ys()&&t.callbackNode!==n)return null;var r=Ic(t,t===tt?dt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Uc(t,r);else{e=r;var i=he;he|=2;var s=hT();(tt!==t||dt!==e)&&(Xn=null,uo=Ue()+500,$i(t,e));do try{ab();break}catch(a){dT(t,a)}while(!0);Ym(),jc.current=s,he=i,We!==null?e=0:(tt=null,dt=0,e=Ke)}if(e!==0){if(e===2&&(i=up(t),i!==0&&(r=i,e=jp(t,i))),e===1)throw n=dl,$i(t,0),Fr(t,r),Vt(t,Ue()),n;if(e===6)Fr(t,r);else{if(i=t.current.alternate,!(r&30)&&!sb(i)&&(e=Uc(t,r),e===2&&(s=up(t),s!==0&&(r=s,e=jp(t,s))),e===1))throw n=dl,$i(t,0),Fr(t,r),Vt(t,Ue()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error($(345));case 2:xi(t,Dt,Xn);break;case 3:if(Fr(t,r),(r&130023424)===r&&(e=dg+500-Ue(),10<e)){if(Ic(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Pt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=vp(xi.bind(null,t,Dt,Xn),e);break}xi(t,Dt,Xn);break;case 4:if(Fr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Sn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ib(r/1960))-r,10<r){t.timeoutHandle=vp(xi.bind(null,t,Dt,Xn),r);break}xi(t,Dt,Xn);break;case 5:xi(t,Dt,Xn);break;default:throw Error($(329))}}}return Vt(t,Ue()),t.callbackNode===n?cT.bind(null,t):null}function jp(t,e){var n=La;return t.current.memoizedState.isDehydrated&&($i(t,e).flags|=256),t=Uc(t,e),t!==2&&(e=Dt,Dt=n,e!==null&&Vp(e)),t}function Vp(t){Dt===null?Dt=t:Dt.push.apply(Dt,t)}function sb(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Rn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Fr(t,e){for(e&=~cg,e&=~xd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Sn(e),r=1<<n;t[n]=-1,e&=~r}}function q_(t){if(he&6)throw Error($(327));Ys();var e=Ic(t,0);if(!(e&1))return Vt(t,Ue()),null;var n=Uc(t,e);if(t.tag!==0&&n===2){var r=up(t);r!==0&&(e=r,n=jp(t,r))}if(n===1)throw n=dl,$i(t,0),Fr(t,e),Vt(t,Ue()),n;if(n===6)throw Error($(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,xi(t,Dt,Xn),Vt(t,Ue()),null}function hg(t,e){var n=he;he|=1;try{return t(e)}finally{he=n,he===0&&(uo=Ue()+500,Ad&&yi())}}function Zi(t){qr!==null&&qr.tag===0&&!(he&6)&&Ys();var e=he;he|=1;var n=sn.transition,r=ge;try{if(sn.transition=null,ge=1,t)return t()}finally{ge=r,sn.transition=n,he=e,!(he&6)&&yi()}}function fg(){Wt=Bs.current,Te(Bs)}function $i(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,L1(n)),We!==null)for(n=We.return;n!==null;){var r=n;switch(Gm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Cc();break;case 3:ao(),Te(Mt),Te(kt),ng();break;case 5:tg(r);break;case 4:ao();break;case 13:Te(Ae);break;case 19:Te(Ae);break;case 10:Jm(r.type._context);break;case 22:case 23:fg()}n=n.return}if(tt=t,We=t=ii(t.current,null),dt=Wt=e,Ke=0,dl=null,cg=xd=Xi=0,Dt=La=null,Mi!==null){for(e=0;e<Mi.length;e++)if(n=Mi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Mi=null}return t}function dT(t,e){do{var n=We;try{if(Ym(),Zu.current=Mc,Lc){for(var r=Pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Lc=!1}if(Ji=0,Xe=Ge=Pe=null,Oa=!1,ll=0,ug.current=null,n===null||n.return===null){Ke=1,dl=e,We=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=dt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var k=O_(o);if(k!==null){k.flags&=-257,D_(k,o,a,s,e),k.mode&1&&x_(s,c,e),e=k,l=c;var R=e.updateQueue;if(R===null){var x=new Set;x.add(l),e.updateQueue=x}else R.add(l);break e}else{if(!(e&1)){x_(s,c,e),pg();break e}l=Error($(426))}}else if(Re&&a.mode&1){var b=O_(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),D_(b,o,a,s,e),Km(lo(l,a));break e}}s=l=lo(l,a),Ke!==4&&(Ke=2),La===null?La=[s]:La.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=KI(s,l,e);R_(s,E);break e;case 1:a=l;var w=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(ni===null||!ni.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=QI(s,a,e);R_(s,O);break e}}s=s.return}while(s!==null)}pT(n)}catch(M){e=M,We===n&&n!==null&&(We=n=n.return);continue}break}while(!0)}function hT(){var t=jc.current;return jc.current=Mc,t===null?Mc:t}function pg(){(Ke===0||Ke===3||Ke===2)&&(Ke=4),tt===null||!(Xi&268435455)&&!(xd&268435455)||Fr(tt,dt)}function Uc(t,e){var n=he;he|=2;var r=hT();(tt!==t||dt!==e)&&(Xn=null,$i(t,e));do try{ob();break}catch(i){dT(t,i)}while(!0);if(Ym(),he=n,jc.current=r,We!==null)throw Error($(261));return tt=null,dt=0,Ke}function ob(){for(;We!==null;)fT(We)}function ab(){for(;We!==null&&!xP();)fT(We)}function fT(t){var e=gT(t.alternate,t,Wt);t.memoizedProps=t.pendingProps,e===null?pT(t):We=e,ug.current=null}function pT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=eb(n,e),n!==null){n.flags&=32767,We=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ke=6,We=null;return}}else if(n=Z1(n,e,Wt),n!==null){We=n;return}if(e=e.sibling,e!==null){We=e;return}We=e=t}while(e!==null);Ke===0&&(Ke=5)}function xi(t,e,n){var r=ge,i=sn.transition;try{sn.transition=null,ge=1,lb(t,e,n,r)}finally{sn.transition=i,ge=r}return null}function lb(t,e,n,r){do Ys();while(qr!==null);if(he&6)throw Error($(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error($(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(BP(t,s),t===tt&&(We=tt=null,dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xu||(xu=!0,vT(Ec,function(){return Ys(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=sn.transition,sn.transition=null;var o=ge;ge=1;var a=he;he|=4,ug.current=null,nb(t,n),lT(n,t),A1(mp),Tc=!!pp,mp=pp=null,t.current=n,rb(n),OP(),he=a,ge=o,sn.transition=s}else t.current=n;if(xu&&(xu=!1,qr=t,Fc=i),s=t.pendingLanes,s===0&&(ni=null),MP(n.stateNode),Vt(t,Ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Vc)throw Vc=!1,t=Lp,Lp=null,t;return Fc&1&&t.tag!==0&&Ys(),s=t.pendingLanes,s&1?t===Mp?Ma++:(Ma=0,Mp=t):Ma=0,yi(),null}function Ys(){if(qr!==null){var t=K0(Fc),e=sn.transition,n=ge;try{if(sn.transition=null,ge=16>t?16:t,qr===null)var r=!1;else{if(t=qr,qr=null,Fc=0,he&6)throw Error($(331));var i=he;for(he|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(q=c;q!==null;){var d=q;switch(d.tag){case 0:case 11:case 15:Da(8,d,s)}var f=d.child;if(f!==null)f.return=d,q=f;else for(;q!==null;){d=q;var g=d.sibling,k=d.return;if(sT(d),d===c){q=null;break}if(g!==null){g.return=k,q=g;break}q=k}}}var R=s.alternate;if(R!==null){var x=R.child;if(x!==null){R.child=null;do{var b=x.sibling;x.sibling=null,x=b}while(x!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Da(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,q=E;break e}q=s.return}}var w=t.current;for(q=w;q!==null;){o=q;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,q=S;else e:for(o=w;q!==null;){if(a=q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Nd(9,a)}}catch(M){Oe(a,a.return,M)}if(a===o){q=null;break e}var O=a.sibling;if(O!==null){O.return=a.return,q=O;break e}q=a.return}}if(he=i,yi(),$n&&typeof $n.onPostCommitFiberRoot=="function")try{$n.onPostCommitFiberRoot(Td,t)}catch{}r=!0}return r}finally{ge=n,sn.transition=e}}return!1}function G_(t,e,n){e=lo(n,e),e=KI(t,e,1),t=ti(t,e,1),e=Pt(),t!==null&&(Dl(t,1,e),Vt(t,e))}function Oe(t,e,n){if(t.tag===3)G_(t,t,n);else for(;e!==null;){if(e.tag===3){G_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ni===null||!ni.has(r))){t=lo(n,t),t=QI(e,t,1),e=ti(e,t,1),t=Pt(),e!==null&&(Dl(e,1,t),Vt(e,t));break}}e=e.return}}function ub(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Pt(),t.pingedLanes|=t.suspendedLanes&n,tt===t&&(dt&n)===n&&(Ke===4||Ke===3&&(dt&130023424)===dt&&500>Ue()-dg?$i(t,0):cg|=n),Vt(t,e)}function mT(t,e){e===0&&(t.mode&1?(e=Iu,Iu<<=1,!(Iu&130023424)&&(Iu=4194304)):e=1);var n=Pt();t=hr(t,e),t!==null&&(Dl(t,e,n),Vt(t,n))}function cb(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),mT(t,n)}function db(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(e),mT(t,n)}var gT;gT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Mt.current)Lt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Lt=!1,X1(t,e,n);Lt=!!(t.flags&131072)}else Lt=!1,Re&&e.flags&1048576&&wI(e,bc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;tc(t,e),t=e.pendingProps;var i=io(e,kt.current);Qs(e,n),i=ig(null,e,r,t,i,n);var s=sg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,jt(r)?(s=!0,Ac(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Zm(e),i.updater=bd,e.stateNode=i,i._reactInternals=e,Sp(e,r,t,n),e=Cp(null,e,r,!0,s,n)):(e.tag=0,Re&&s&&qm(e),At(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(tc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=fb(r),t=vn(r,t),i){case 0:e=Rp(null,e,r,t,n);break e;case 1:e=j_(null,e,r,t,n);break e;case 11:e=L_(null,e,r,t,n);break e;case 14:e=M_(null,e,r,vn(r.type,t),n);break e}throw Error($(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vn(r,i),Rp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vn(r,i),j_(t,e,r,i,n);case 3:e:{if(ZI(e),t===null)throw Error($(387));r=e.pendingProps,s=e.memoizedState,i=s.element,RI(t,e),Oc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=lo(Error($(423)),e),e=V_(t,e,r,n,i);break e}else if(r!==i){i=lo(Error($(424)),e),e=V_(t,e,r,n,i);break e}else for(qt=ei(e.stateNode.containerInfo.firstChild),Kt=e,Re=!0,_n=null,n=SI(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(so(),r===i){e=fr(t,e,n);break e}At(t,e,r,n)}e=e.child}return e;case 5:return CI(e),t===null&&Ep(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,gp(r,i)?o=null:s!==null&&gp(r,s)&&(e.flags|=32),XI(t,e),At(t,e,o,n),e.child;case 6:return t===null&&Ep(e),null;case 13:return eT(t,e,n);case 4:return eg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=oo(e,null,r,n):At(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vn(r,i),L_(t,e,r,i,n);case 7:return At(t,e,e.pendingProps,n),e.child;case 8:return At(t,e,e.pendingProps.children,n),e.child;case 12:return At(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,we(Nc,r._currentValue),r._currentValue=o,s!==null)if(Rn(s.value,o)){if(s.children===i.children&&!Mt.current){e=fr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=sr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ip(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error($(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ip(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}At(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Qs(e,n),i=ln(i),r=r(i),e.flags|=1,At(t,e,r,n),e.child;case 14:return r=e.type,i=vn(r,e.pendingProps),i=vn(r.type,i),M_(t,e,r,i,n);case 15:return YI(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vn(r,i),tc(t,e),e.tag=1,jt(r)?(t=!0,Ac(e)):t=!1,Qs(e,n),GI(e,r,i),Sp(e,r,i,n),Cp(null,e,r,!0,t,n);case 19:return tT(t,e,n);case 22:return JI(t,e,n)}throw Error($(156,e.tag))};function vT(t,e){return W0(t,e)}function hb(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rn(t,e,n,r){return new hb(t,e,n,r)}function mg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fb(t){if(typeof t=="function")return mg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Dm)return 11;if(t===Lm)return 14}return 2}function ii(t,e){var n=t.alternate;return n===null?(n=rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ic(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")mg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case xs:return Bi(n.children,i,s,e);case Om:o=8,i|=8;break;case Kf:return t=rn(12,n,e,i|2),t.elementType=Kf,t.lanes=s,t;case Qf:return t=rn(13,n,e,i),t.elementType=Qf,t.lanes=s,t;case Yf:return t=rn(19,n,e,i),t.elementType=Yf,t.lanes=s,t;case C0:return Od(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case k0:o=10;break e;case R0:o=9;break e;case Dm:o=11;break e;case Lm:o=14;break e;case Lr:o=16,r=null;break e}throw Error($(130,t==null?t:typeof t,""))}return e=rn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Bi(t,e,n,r){return t=rn(7,t,r,e),t.lanes=n,t}function Od(t,e,n,r){return t=rn(22,t,r,e),t.elementType=C0,t.lanes=n,t.stateNode={isHidden:!1},t}function gf(t,e,n){return t=rn(6,t,null,e),t.lanes=n,t}function vf(t,e,n){return e=rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function pb(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yh(0),this.expirationTimes=Yh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function gg(t,e,n,r,i,s,o,a,l){return t=new pb(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=rn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zm(s),t}function mb(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ns,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function yT(t){if(!t)return ui;t=t._reactInternals;e:{if(ps(t)!==t||t.tag!==1)throw Error($(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error($(171))}if(t.tag===1){var n=t.type;if(jt(n))return yI(t,n,e)}return e}function _T(t,e,n,r,i,s,o,a,l){return t=gg(n,r,!0,t,i,s,o,a,l),t.context=yT(null),n=t.current,r=Pt(),i=ri(n),s=sr(r,i),s.callback=e??null,ti(n,s,i),t.current.lanes=i,Dl(t,i,r),Vt(t,r),t}function Dd(t,e,n,r){var i=e.current,s=Pt(),o=ri(i);return n=yT(n),e.context===null?e.context=n:e.pendingContext=n,e=sr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ti(i,e,o),t!==null&&(kn(t,i,o,s),Xu(t,i,o)),o}function $c(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function K_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function vg(t,e){K_(t,e),(t=t.alternate)&&K_(t,e)}function gb(){return null}var wT=typeof reportError=="function"?reportError:function(t){console.error(t)};function yg(t){this._internalRoot=t}Ld.prototype.render=yg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error($(409));Dd(t,e,null,null)};Ld.prototype.unmount=yg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Zi(function(){Dd(null,t,null,null)}),e[dr]=null}};function Ld(t){this._internalRoot=t}Ld.prototype.unstable_scheduleHydration=function(t){if(t){var e=J0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Vr.length&&e!==0&&e<Vr[n].priority;n++);Vr.splice(n,0,t),n===0&&Z0(t)}};function _g(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Md(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Q_(){}function vb(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=$c(o);s.call(c)}}var o=_T(e,r,t,0,null,!1,!1,"",Q_);return t._reactRootContainer=o,t[dr]=o.current,rl(t.nodeType===8?t.parentNode:t),Zi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=$c(l);a.call(c)}}var l=gg(t,0,!1,null,null,!1,!1,"",Q_);return t._reactRootContainer=l,t[dr]=l.current,rl(t.nodeType===8?t.parentNode:t),Zi(function(){Dd(e,l,n,r)}),l}function jd(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=$c(o);a.call(l)}}Dd(e,o,t,i)}else o=vb(n,e,t,i,r);return $c(o)}Q0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=wa(e.pendingLanes);n!==0&&(Vm(e,n|1),Vt(e,Ue()),!(he&6)&&(uo=Ue()+500,yi()))}break;case 13:Zi(function(){var r=hr(t,1);if(r!==null){var i=Pt();kn(r,t,1,i)}}),vg(t,1)}};Fm=function(t){if(t.tag===13){var e=hr(t,134217728);if(e!==null){var n=Pt();kn(e,t,134217728,n)}vg(t,134217728)}};Y0=function(t){if(t.tag===13){var e=ri(t),n=hr(t,e);if(n!==null){var r=Pt();kn(n,t,e,r)}vg(t,e)}};J0=function(){return ge};X0=function(t,e){var n=ge;try{return ge=t,e()}finally{ge=n}};op=function(t,e,n){switch(e){case"input":if(Zf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Cd(r);if(!i)throw Error($(90));P0(r),Zf(r,i)}}}break;case"textarea":N0(t,n);break;case"select":e=n.value,e!=null&&Hs(t,!!n.multiple,e,!1)}};V0=hg;F0=Zi;var yb={usingClientEntryPoint:!1,Events:[Ml,Ms,Cd,M0,j0,hg]},ca={findFiberByHostInstance:Li,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_b={bundleType:ca.bundleType,version:ca.version,rendererPackageName:ca.rendererPackageName,rendererConfig:ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=B0(t),t===null?null:t.stateNode},findFiberByHostInstance:ca.findFiberByHostInstance||gb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ou=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ou.isDisabled&&Ou.supportsFiber)try{Td=Ou.inject(_b),$n=Ou}catch{}}Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yb;Xt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_g(e))throw Error($(200));return mb(t,e,null,n)};Xt.createRoot=function(t,e){if(!_g(t))throw Error($(299));var n=!1,r="",i=wT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=gg(t,1,!1,null,null,n,!1,r,i),t[dr]=e.current,rl(t.nodeType===8?t.parentNode:t),new yg(e)};Xt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error($(188)):(t=Object.keys(t).join(","),Error($(268,t)));return t=B0(e),t=t===null?null:t.stateNode,t};Xt.flushSync=function(t){return Zi(t)};Xt.hydrate=function(t,e,n){if(!Md(e))throw Error($(200));return jd(null,t,e,!0,n)};Xt.hydrateRoot=function(t,e,n){if(!_g(t))throw Error($(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=wT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=_T(e,null,t,1,n??null,i,!1,s,o),t[dr]=e.current,rl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ld(e)};Xt.render=function(t,e,n){if(!Md(e))throw Error($(200));return jd(null,t,e,!1,n)};Xt.unmountComponentAtNode=function(t){if(!Md(t))throw Error($(40));return t._reactRootContainer?(Zi(function(){jd(null,null,t,!1,function(){t._reactRootContainer=null,t[dr]=null})}),!0):!1};Xt.unstable_batchedUpdates=hg;Xt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Md(n))throw Error($(200));if(t==null||t._reactInternals===void 0)throw Error($(38));return jd(t,e,n,!1,r)};Xt.version="18.3.1-next-f1338f8080-20240426";function ET(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ET)}catch(t){console.error(t)}}ET(),E0.exports=Xt;var IT=E0.exports;const zs=xl(IT);var Y_=IT;qf.createRoot=Y_.createRoot,qf.hydrateRoot=Y_.hydrateRoot;/**
 * @remix-run/router v1.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hl(){return hl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},hl.apply(this,arguments)}var Gr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Gr||(Gr={}));const J_="popstate";function wb(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Fp("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Bc(i)}return Ib(e,n,null,t)}function $e(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function TT(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Eb(){return Math.random().toString(36).substr(2,8)}function X_(t,e){return{usr:t.state,key:t.key,idx:e}}function Fp(t,e,n,r){return n===void 0&&(n=null),hl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Co(e):e,{state:n,key:e&&e.key||r||Eb()})}function Bc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Co(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Ib(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Gr.Pop,l=null,c=d();c==null&&(c=0,o.replaceState(hl({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=Gr.Pop;let b=d(),E=b==null?null:b-c;c=b,l&&l({action:a,location:x.location,delta:E})}function g(b,E){a=Gr.Push;let w=Fp(x.location,b,E);c=d()+1;let S=X_(w,c),O=x.createHref(w);try{o.pushState(S,"",O)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;i.location.assign(O)}s&&l&&l({action:a,location:x.location,delta:1})}function k(b,E){a=Gr.Replace;let w=Fp(x.location,b,E);c=d();let S=X_(w,c),O=x.createHref(w);o.replaceState(S,"",O),s&&l&&l({action:a,location:x.location,delta:0})}function R(b){let E=i.location.origin!=="null"?i.location.origin:i.location.href,w=typeof b=="string"?b:Bc(b);return w=w.replace(/ $/,"%20"),$e(E,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,E)}let x={get action(){return a},get location(){return t(i,o)},listen(b){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(J_,f),l=b,()=>{i.removeEventListener(J_,f),l=null}},createHref(b){return e(i,b)},createURL:R,encodeLocation(b){let E=R(b);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:g,replace:k,go(b){return o.go(b)}};return x}var Z_;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Z_||(Z_={}));function Tb(t,e,n){return n===void 0&&(n="/"),Sb(t,e,n,!1)}function Sb(t,e,n,r){let i=typeof e=="string"?Co(e):e,s=wg(i.pathname||"/",n);if(s==null)return null;let o=ST(t);kb(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=Mb(s);a=Db(o[l],c,r)}return a}function ST(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&($e(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=si([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&($e(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),ST(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:xb(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of kT(s.path))i(s,o,l)}),e}function kT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=kT(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function kb(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Ob(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Rb=/^:[\w-]+$/,Cb=3,Ab=2,Pb=1,bb=10,Nb=-2,ew=t=>t==="*";function xb(t,e){let n=t.split("/"),r=n.length;return n.some(ew)&&(r+=Nb),e&&(r+=Ab),n.filter(i=>!ew(i)).reduce((i,s)=>i+(Rb.test(s)?Cb:s===""?Pb:bb),r)}function Ob(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Db(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=tw({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),g=l.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=tw({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:si([s,f.pathname]),pathnameBase:Ub(si([s,f.pathnameBase])),route:g}),f.pathnameBase!=="/"&&(s=si([s,f.pathnameBase]))}return o}function tw(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Lb(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:g,isOptional:k}=d;if(g==="*"){let x=a[f]||"";o=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const R=a[f];return k&&!R?c[g]=void 0:c[g]=(R||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function Lb(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),TT(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Mb(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return TT(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function wg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function jb(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Co(t):t;return{pathname:n?n.startsWith("/")?n:Vb(n,e):e,search:$b(r),hash:Bb(i)}}function Vb(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function yf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Fb(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Eg(t,e){let n=Fb(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ig(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Co(t):(i=hl({},t),$e(!i.pathname||!i.pathname.includes("?"),yf("?","pathname","search",i)),$e(!i.pathname||!i.pathname.includes("#"),yf("#","pathname","hash",i)),$e(!i.search||!i.search.includes("#"),yf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),f-=1;i.pathname=g.join("/")}a=f>=0?e[f]:"/"}let l=jb(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const si=t=>t.join("/").replace(/\/\/+/g,"/"),Ub=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),$b=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Bb=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function zb(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const RT=["post","put","patch","delete"];new Set(RT);const Wb=["get",...RT];new Set(Wb);/**
 * React Router v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fl(){return fl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fl.apply(this,arguments)}const Tg=y.createContext(null),Hb=y.createContext(null),_i=y.createContext(null),Vd=y.createContext(null),Er=y.createContext({outlet:null,matches:[],isDataRoute:!1}),CT=y.createContext(null);function qb(t,e){let{relative:n}=e===void 0?{}:e;Ao()||$e(!1);let{basename:r,navigator:i}=y.useContext(_i),{hash:s,pathname:o,search:a}=PT(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:si([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Ao(){return y.useContext(Vd)!=null}function Po(){return Ao()||$e(!1),y.useContext(Vd).location}function AT(t){y.useContext(_i).static||y.useLayoutEffect(t)}function Fd(){let{isDataRoute:t}=y.useContext(Er);return t?oN():Gb()}function Gb(){Ao()||$e(!1);let t=y.useContext(Tg),{basename:e,future:n,navigator:r}=y.useContext(_i),{matches:i}=y.useContext(Er),{pathname:s}=Po(),o=JSON.stringify(Eg(i,n.v7_relativeSplatPath)),a=y.useRef(!1);return AT(()=>{a.current=!0}),y.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=Ig(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:si([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}function Kb(){let{matches:t}=y.useContext(Er),e=t[t.length-1];return e?e.params:{}}function PT(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=y.useContext(_i),{matches:i}=y.useContext(Er),{pathname:s}=Po(),o=JSON.stringify(Eg(i,r.v7_relativeSplatPath));return y.useMemo(()=>Ig(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function Qb(t,e){return Yb(t,e)}function Yb(t,e,n,r){Ao()||$e(!1);let{navigator:i}=y.useContext(_i),{matches:s}=y.useContext(Er),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Po(),d;if(e){var f;let b=typeof e=="string"?Co(e):e;l==="/"||(f=b.pathname)!=null&&f.startsWith(l)||$e(!1),d=b}else d=c;let g=d.pathname||"/",k=g;if(l!=="/"){let b=l.replace(/^\//,"").split("/");k="/"+g.replace(/^\//,"").split("/").slice(b.length).join("/")}let R=Tb(t,{pathname:k}),x=tN(R&&R.map(b=>Object.assign({},b,{params:Object.assign({},a,b.params),pathname:si([l,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?l:si([l,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),s,n,r);return e&&x?y.createElement(Vd.Provider,{value:{location:fl({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Gr.Pop}},x):x}function Jb(){let t=sN(),e=zb(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},e),n?y.createElement("pre",{style:i},n):null,null)}const Xb=y.createElement(Jb,null);class Zb extends y.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?y.createElement(Er.Provider,{value:this.props.routeContext},y.createElement(CT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function eN(t){let{routeContext:e,match:n,children:r}=t,i=y.useContext(Tg);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),y.createElement(Er.Provider,{value:e},r)}function tN(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||$e(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:g,errors:k}=n,R=f.route.loader&&g[f.route.id]===void 0&&(!k||k[f.route.id]===void 0);if(f.route.lazy||R){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,g)=>{let k,R=!1,x=null,b=null;n&&(k=a&&f.route.id?a[f.route.id]:void 0,x=f.route.errorElement||Xb,l&&(c<0&&g===0?(R=!0,b=null):c===g&&(R=!0,b=f.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,g+1)),w=()=>{let S;return k?S=x:R?S=b:f.route.Component?S=y.createElement(f.route.Component,null):f.route.element?S=f.route.element:S=d,y.createElement(eN,{match:f,routeContext:{outlet:d,matches:E,isDataRoute:n!=null},children:S})};return n&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?y.createElement(Zb,{location:n.location,revalidation:n.revalidation,component:x,error:k,children:w(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):w()},null)}var bT=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(bT||{}),zc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(zc||{});function nN(t){let e=y.useContext(Tg);return e||$e(!1),e}function rN(t){let e=y.useContext(Hb);return e||$e(!1),e}function iN(t){let e=y.useContext(Er);return e||$e(!1),e}function NT(t){let e=iN(),n=e.matches[e.matches.length-1];return n.route.id||$e(!1),n.route.id}function sN(){var t;let e=y.useContext(CT),n=rN(zc.UseRouteError),r=NT(zc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function oN(){let{router:t}=nN(bT.UseNavigateStable),e=NT(zc.UseNavigateStable),n=y.useRef(!1);return AT(()=>{n.current=!0}),y.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,fl({fromRouteId:e},s)))},[t,e])}function aN(t){let{to:e,replace:n,state:r,relative:i}=t;Ao()||$e(!1);let{future:s,static:o}=y.useContext(_i),{matches:a}=y.useContext(Er),{pathname:l}=Po(),c=Fd(),d=Ig(e,Eg(a,s.v7_relativeSplatPath),l,i==="path"),f=JSON.stringify(d);return y.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function Ln(t){$e(!1)}function lN(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Gr.Pop,navigator:s,static:o=!1,future:a}=t;Ao()&&$e(!1);let l=e.replace(/^\/*/,"/"),c=y.useMemo(()=>({basename:l,navigator:s,static:o,future:fl({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Co(r));let{pathname:d="/",search:f="",hash:g="",state:k=null,key:R="default"}=r,x=y.useMemo(()=>{let b=wg(d,l);return b==null?null:{location:{pathname:b,search:f,hash:g,state:k,key:R},navigationType:i}},[l,d,f,g,k,R,i]);return x==null?null:y.createElement(_i.Provider,{value:c},y.createElement(Vd.Provider,{children:n,value:x}))}function uN(t){let{children:e,location:n}=t;return Qb(Up(e),n)}new Promise(()=>{});function Up(t,e){e===void 0&&(e=[]);let n=[];return y.Children.forEach(t,(r,i)=>{if(!y.isValidElement(r))return;let s=[...e,i];if(r.type===y.Fragment){n.push.apply(n,Up(r.props.children,s));return}r.type!==Ln&&$e(!1),!r.props.index||!r.props.children||$e(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Up(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $p(){return $p=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$p.apply(this,arguments)}function cN(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function dN(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function hN(t,e){return t.button===0&&(!e||e==="_self")&&!dN(t)}const fN=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],pN="6";try{window.__reactRouterVersion=pN}catch{}const mN="startTransition",nw=uP[mN];function gN(t){let{basename:e,children:n,future:r,window:i}=t,s=y.useRef();s.current==null&&(s.current=wb({window:i,v5Compat:!0}));let o=s.current,[a,l]=y.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=y.useCallback(f=>{c&&nw?nw(()=>l(f)):l(f)},[l,c]);return y.useLayoutEffect(()=>o.listen(d),[o,d]),y.createElement(lN,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const vN=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",yN=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,re=y.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:d,unstable_viewTransition:f}=e,g=cN(e,fN),{basename:k}=y.useContext(_i),R,x=!1;if(typeof c=="string"&&yN.test(c)&&(R=c,vN))try{let S=new URL(window.location.href),O=c.startsWith("//")?new URL(S.protocol+c):new URL(c),M=wg(O.pathname,k);O.origin===S.origin&&M!=null?c=M+O.search+O.hash:x=!0}catch{}let b=qb(c,{relative:i}),E=_N(c,{replace:o,state:a,target:l,preventScrollReset:d,relative:i,unstable_viewTransition:f});function w(S){r&&r(S),S.defaultPrevented||E(S)}return y.createElement("a",$p({},g,{href:R||b,onClick:x||s?r:w,ref:n,target:l}))});var rw;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(rw||(rw={}));var iw;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(iw||(iw={}));function _N(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=Fd(),c=Po(),d=PT(t,{relative:o});return y.useCallback(f=>{if(hN(f,n)){f.preventDefault();let g=r!==void 0?r:Bc(c)===Bc(d);l(t,{replace:g,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[c,l,d,r,i,n,t,s,o,a])}var sw={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},wN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},OT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let g=(a&15)<<2|c>>6,k=c&63;l||(k=64,o||(g=64)),r.push(n[d],n[f],n[g],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new EN;const g=s<<2|a>>4;if(r.push(g),c!==64){const k=a<<4&240|c>>2;if(r.push(k),f!==64){const R=c<<6&192|f;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class EN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const IN=function(t){const e=xT(t);return OT.encodeByteArray(e,!0)},Wc=function(t){return IN(t).replace(/\./g,"")},Sg=function(t){try{return OT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Hc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!TN(n)||(t[n]=Hc(t[n],e[n]));return t}function TN(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kN=()=>SN().__FIREBASE_DEFAULTS__,RN=()=>{if(typeof process>"u"||typeof sw>"u")return;const t=sw.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},CN=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Sg(t[1]);return e&&JSON.parse(e)},Ud=()=>{try{return kN()||RN()||CN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},DT=t=>{var e,n;return(n=(e=Ud())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},AN=t=>{const e=DT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},LT=()=>{var t;return(t=Ud())===null||t===void 0?void 0:t.config},kg=t=>{var e;return(e=Ud())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bN(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Wc(JSON.stringify(n)),Wc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function MT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(le())}function Rg(){var t;const e=(t=Ud())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jT(){return typeof window<"u"||VT()}function VT(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function $d(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Bd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cg(){const t=le();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function NN(){return!Rg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pl(){try{return typeof indexedDB=="object"}catch{return!1}}function FT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function xN(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ON="FirebaseError";class He extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ON,Object.setPrototypeOf(this,He.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hn.prototype.create)}}class hn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?DN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new He(i,a,r)}}function DN(t,e){return t.replace(LN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const LN=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function UT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ml(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(aw(s)&&aw(o)){if(!ml(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function aw(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function In(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Fn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Ag(t,e){const n=new MN(t,e);return n.subscribe.bind(n)}class MN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");jN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=_f),i.error===void 0&&(i.error=_f),i.complete===void 0&&(i.complete=_f);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function _f(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN=1e3,FN=2,UN=4*60*60*1e3,$N=.5;function lw(t,e=VN,n=FN){const r=e*Math.pow(n,t),i=Math.round($N*r*(Math.random()-.5)*2);return Math.min(UN,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t){return t&&t._delegate?t._delegate:t}class bt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new PN;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(WN(e))try{this.getOrInitializeService({instanceIdentifier:Oi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Oi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Oi){return this.instances.has(e)}getOptions(e=Oi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Oi){return this.component?this.component.multipleInstances?e:Oi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zN(t){return t===Oi?void 0:t}function WN(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new BN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg=[];var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const BT={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},HN=ie.INFO,qN={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},GN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=qN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bo{constructor(e){this.name=e,this._logLevel=HN,this._logHandler=GN,this._userLogHandler=null,Pg.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?BT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}function KN(t){Pg.forEach(e=>{e.setLogLevel(t)})}function QN(t,e){for(const n of Pg){let r=null;e&&e.level&&(r=BT[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:ie[s].toLowerCase(),message:a,args:o,type:i.name})}}}const YN=(t,e)=>e.some(n=>t instanceof n);let uw,cw;function JN(){return uw||(uw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function XN(){return cw||(cw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zT=new WeakMap,Bp=new WeakMap,WT=new WeakMap,wf=new WeakMap,bg=new WeakMap;function ZN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(oi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&zT.set(n,t)}).catch(()=>{}),bg.set(e,t),e}function ex(t){if(Bp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Bp.set(t,e)}let zp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Bp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||WT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return oi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function tx(t){zp=t(zp)}function nx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ef(this),e,...n);return WT.set(r,e.sort?e.sort():[e]),oi(r)}:XN().includes(t)?function(...e){return t.apply(Ef(this),e),oi(zT.get(this))}:function(...e){return oi(t.apply(Ef(this),e))}}function rx(t){return typeof t=="function"?nx(t):(t instanceof IDBTransaction&&ex(t),YN(t,JN())?new Proxy(t,zp):t)}function oi(t){if(t instanceof IDBRequest)return ZN(t);if(wf.has(t))return wf.get(t);const e=rx(t);return e!==t&&(wf.set(t,e),bg.set(e,t)),e}const Ef=t=>bg.get(t);function HT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=oi(o);return r&&o.addEventListener("upgradeneeded",l=>{r(oi(o.result),l.oldVersion,l.newVersion,oi(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const ix=["get","getKey","getAll","getAllKeys","count"],sx=["put","add","delete","clear"],If=new Map;function dw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(If.get(e))return If.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=sx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ix.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return If.set(e,s),s}tx(t=>({...t,get:(e,n,r)=>dw(e,n)||t.get(e,n,r),has:(e,n)=>!!dw(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ax(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ax(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qc="@firebase/app",Wp="0.10.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=new bo("@firebase/app"),lx="@firebase/app-compat",ux="@firebase/analytics-compat",cx="@firebase/analytics",dx="@firebase/app-check-compat",hx="@firebase/app-check",fx="@firebase/auth",px="@firebase/auth-compat",mx="@firebase/database",gx="@firebase/database-compat",vx="@firebase/functions",yx="@firebase/functions-compat",_x="@firebase/installations",wx="@firebase/installations-compat",Ex="@firebase/messaging",Ix="@firebase/messaging-compat",Tx="@firebase/performance",Sx="@firebase/performance-compat",kx="@firebase/remote-config",Rx="@firebase/remote-config-compat",Cx="@firebase/storage",Ax="@firebase/storage-compat",Px="@firebase/firestore",bx="@firebase/vertexai-preview",Nx="@firebase/firestore-compat",xx="firebase",Ox="10.12.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci="[DEFAULT]",Dx={[qc]:"fire-core",[lx]:"fire-core-compat",[cx]:"fire-analytics",[ux]:"fire-analytics-compat",[hx]:"fire-app-check",[dx]:"fire-app-check-compat",[fx]:"fire-auth",[px]:"fire-auth-compat",[mx]:"fire-rtdb",[gx]:"fire-rtdb-compat",[vx]:"fire-fn",[yx]:"fire-fn-compat",[_x]:"fire-iid",[wx]:"fire-iid-compat",[Ex]:"fire-fcm",[Ix]:"fire-fcm-compat",[Tx]:"fire-perf",[Sx]:"fire-perf-compat",[kx]:"fire-rc",[Rx]:"fire-rc-compat",[Cx]:"fire-gcs",[Ax]:"fire-gcs-compat",[Px]:"fire-fst",[Nx]:"fire-fst-compat",[bx]:"fire-vertex","fire-js":"fire-js",[xx]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=new Map,co=new Map,ho=new Map;function gl(t,e){try{t.container.addComponent(e)}catch(n){es.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qT(t,e){t.container.addOrOverwriteComponent(e)}function $t(t){const e=t.name;if(ho.has(e))return es.debug(`There were multiple attempts to register component ${e}.`),!1;ho.set(e,t);for(const n of di.values())gl(n,t);for(const n of co.values())gl(n,t);return!0}function Ir(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Lx(t,e,n=ci){Ir(t,e).clearInstance(n)}function GT(t){return t.options!==void 0}function pe(t){return t.settings!==void 0}function Mx(){ho.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},on=new hn("app","Firebase",jx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let KT=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw on.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx extends KT{constructor(e,n,r,i){const s=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const a=e;super(a.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},n),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,nt(qc,Wp,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Ng(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw on.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=Ox;function zd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ci,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw on.create("bad-app-name",{appName:String(i)});if(n||(n=LT()),!n)throw on.create("no-options");const s=di.get(i);if(s){if(ml(n,s.options)&&ml(r,s.config))return s;throw on.create("duplicate-app",{appName:i})}const o=new $T(i);for(const l of ho.values())o.addComponent(l);const a=new KT(n,r,o);return di.set(i,a),a}function Fx(t,e){if(jT()&&!VT())throw on.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let n;GT(t)?n=t.options:n=t;const r=Object.assign(Object.assign({},e),n);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=c=>[...c].reduce((d,f)=>Math.imul(31,d)+f.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw on.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=co.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const a=new $T(s);for(const c of ho.values())a.addComponent(c);const l=new Vx(n,e,s,a);return co.set(s,l),l}function Wd(t=ci){const e=di.get(t);if(!e&&t===ci&&LT())return zd();if(!e)throw on.create("no-app",{appName:t});return e}function Ux(){return Array.from(di.values())}async function Ng(t){let e=!1;const n=t.name;di.has(n)?(e=!0,di.delete(n)):co.has(n)&&t.decRefCount()<=0&&(co.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function nt(t,e,n){var r;let i=(r=Dx[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),es.warn(a.join(" "));return}$t(new bt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function QT(t,e){if(t!==null&&typeof t!="function")throw on.create("invalid-log-argument");QN(t,e)}function YT(t){KN(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $x="firebase-heartbeat-database",Bx=1,vl="firebase-heartbeat-store";let Tf=null;function JT(){return Tf||(Tf=HT($x,Bx,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(vl)}catch(n){console.warn(n)}}}}).catch(t=>{throw on.create("idb-open",{originalErrorMessage:t.message})})),Tf}async function zx(t){try{const n=(await JT()).transaction(vl),r=await n.objectStore(vl).get(XT(t));return await n.done,r}catch(e){if(e instanceof He)es.warn(e.message);else{const n=on.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});es.warn(n.message)}}}async function hw(t,e){try{const r=(await JT()).transaction(vl,"readwrite");await r.objectStore(vl).put(e,XT(t)),await r.done}catch(n){if(n instanceof He)es.warn(n.message);else{const r=on.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});es.warn(r.message)}}}function XT(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx=1024,Hx=30*24*60*60*1e3;class qx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Kx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=fw();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Hx}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=fw(),{heartbeatsToSend:r,unsentEntries:i}=Gx(this._heartbeatsCache.heartbeats),s=Wc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function fw(){return new Date().toISOString().substring(0,10)}function Gx(t,e=Wx){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),pw(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),pw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Kx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pl()?FT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await zx(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return hw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return hw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function pw(t){return Wc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qx(t){$t(new bt("platform-logger",e=>new ox(e),"PRIVATE")),$t(new bt("heartbeat",e=>new qx(e),"PRIVATE")),nt(qc,Wp,t),nt(qc,Wp,"esm2017"),nt("fire-js","")}Qx("");const Yx=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:He,SDK_VERSION:en,_DEFAULT_ENTRY_NAME:ci,_addComponent:gl,_addOrOverwriteComponent:qT,_apps:di,_clearComponents:Mx,_components:ho,_getProvider:Ir,_isFirebaseApp:GT,_isFirebaseServerApp:pe,_registerComponent:$t,_removeServiceInstance:Lx,_serverApps:co,deleteApp:Ng,getApp:Wd,getApps:Ux,initializeApp:zd,initializeServerApp:Fx,onLog:QT,registerVersion:nt,setLogLevel:YT},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(e,n){this._delegate=e,this.firebase=n,gl(e,new bt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Ng(this._delegate)))}_getService(e,n=ci){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=ci){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){gl(this._delegate,e)}_addOrOverwriteComponent(e){qT(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xx={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},mw=new hn("app-compat","Firebase",Xx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zx(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:nt,setLogLevel:YT,onLog:QT,apps:null,SDK_VERSION:en,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:Yx}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||ci,!ow(e,c))throw mw.create("no-app",{appName:c});return e[c]}i.App=t;function s(c,d={}){const f=zd(c,d);if(ow(e,f.name))return e[f.name];const g=new t(f,n);return e[f.name]=g,g}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const d=c.name,f=d.replace("-compat","");if($t(c)&&c.type==="PUBLIC"){const g=(k=i())=>{if(typeof k[f]!="function")throw mw.create("invalid-app-argument",{appName:d});return k[f]()};c.serviceProps!==void 0&&Hc(g,c.serviceProps),n[f]=g,t.prototype[f]=function(...k){return this._getService.bind(this,d).apply(this,c.multipleInstances?k:[])}}return c.type==="PUBLIC"?n[f]:null}function l(c,d){return d==="serverAuth"?null:d}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(){const t=Zx(Jx);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:ZT,extendNamespace:e,createSubscribe:Ag,ErrorFactory:hn,deepExtend:Hc});function e(n){Hc(t,n)}return t}const eO=ZT();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw=new bo("@firebase/app-compat"),tO="@firebase/app-compat",nO="0.2.37";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rO(t){nt(tO,nO,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(jT()&&self.firebase!==void 0){gw.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&gw.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const No=eO;rO();var iO="firebase",sO="10.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */No.registerVersion(iO,sO,"app-compat");function xo(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const da={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Ts={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oO(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function eS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const aO=oO,lO=eS,tS=new hn("auth","Firebase",eS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc=new bo("@firebase/auth");function uO(t,...e){Gc.logLevel<=ie.WARN&&Gc.warn(`Auth (${en}): ${t}`,...e)}function sc(t,...e){Gc.logLevel<=ie.ERROR&&Gc.error(`Auth (${en}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t,...e){throw Og(t,...e)}function Qe(t,...e){return Og(t,...e)}function xg(t,e,n){const r=Object.assign(Object.assign({},lO()),{[e]:n});return new hn("auth","Firebase",r).create(e,{appName:t.name})}function rt(t){return xg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Oo(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ft(t,"argument-error"),xg(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Og(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return tS.create(t,...e)}function B(t,e,...n){if(!t)throw Og(e,...n)}function Un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw sc(e),new Error(e)}function Cn(t,e){t||Un(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Dg(){return vw()==="http:"||vw()==="https:"}function vw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Dg()||$d()||"connection"in navigator)?navigator.onLine:!0}function dO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vl=class{constructor(e,n){this.shortDelay=e,this.longDelay=n,Cn(n>e,"Short delay should be less than long delay!"),this.isMobile=MT()||Bd()}get(){return cO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(t,e){Cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nS=class{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fO=new Vl(3e4,6e4);function Me(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function je(t,e,n,r,i={}){return rS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Pn(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),nS.fetch()(iS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function rS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},hO),e);try{const i=new mO(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ia(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ia(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ia(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ia(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw xg(t,d,c);ft(t,d)}}catch(i){if(i instanceof He)throw i;ft(t,"network-request-failed",{message:String(i)})}}async function Tr(t,e,n,r,i={}){const s=await je(t,e,n,r,i);return"mfaPendingCredential"in s&&ft(t,"multi-factor-auth-required",{_serverResponse:s}),s}function iS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Lg(t.config,i):`${t.config.apiScheme}://${i}`}function pO(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}let mO=class{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Qe(this.auth,"network-request-failed")),fO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}};function Ia(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Qe(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(t){return t!==void 0&&t.getResponse!==void 0}function _w(t){return t!==void 0&&t.enterprise!==void 0}let gO=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return pO(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vO(t){return(await je(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function yO(t,e){return je(t,"GET","/v2/recaptchaConfig",Me(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _O(t,e){return je(t,"POST","/v1/accounts:delete",e)}async function wO(t,e){return je(t,"POST","/v1/accounts:update",e)}async function sS(t,e){return je(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function EO(t,e=!1){const n=Y(t),r=await n.getIdToken(e),i=Hd(r);B(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ja(Sf(i.auth_time)),issuedAtTime:ja(Sf(i.iat)),expirationTime:ja(Sf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Sf(t){return Number(t)*1e3}function Hd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return sc("JWT malformed, contained fewer than 3 sections"),null;try{const i=Sg(n);return i?JSON.parse(i):(sc("Failed to decode base64 JWT payload"),null)}catch(i){return sc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ww(t){const e=Hd(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof He&&IO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function IO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let TO=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hp=class{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ja(this.lastLoginAt),this.creationTime=ja(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _l(t){var e;const n=t.auth,r=await t.getIdToken(),i=await pr(t,sS(n,{idToken:r}));B(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?oS(s.providerUserInfo):[],a=kO(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Hp(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function SO(t){const e=Y(t);await _l(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kO(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function oS(t){return t.map(e=>{var{providerId:n}=e,r=xo(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RO(t,e){const n=await rS(t,{},async()=>{const r=Pn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=iS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",nS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function CO(t,e){return je(t,"POST","/v2/accounts:revokeToken",Me(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kf=class qp{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ww(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){B(e.length!==0,"internal-error");const n=ww(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await RO(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new qp;return r&&(B(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(B(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(B(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qp,this.toJSON())}_performRefresh(){return Un("not implemented")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}let Kc=class Ta{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=xo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new TO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Hp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await pr(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return EO(this,e)}reload(){return SO(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ta(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await _l(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pe(this.auth.app))return Promise.reject(rt(this.auth));const e=await this.getIdToken();return await pr(this,_O(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,k=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:S,emailVerified:O,isAnonymous:M,providerData:L,stsTokenManager:I}=n;B(S&&I,e,"internal-error");const v=kf.fromJSON(this.name,I);B(typeof S=="string",e,"internal-error"),Or(f,e.name),Or(g,e.name),B(typeof O=="boolean",e,"internal-error"),B(typeof M=="boolean",e,"internal-error"),Or(k,e.name),Or(R,e.name),Or(x,e.name),Or(b,e.name),Or(E,e.name),Or(w,e.name);const T=new Ta({uid:S,auth:e,email:g,emailVerified:O,displayName:f,isAnonymous:M,photoURL:R,phoneNumber:k,tenantId:x,stsTokenManager:v,createdAt:E,lastLoginAt:w});return L&&Array.isArray(L)&&(T.providerData=L.map(A=>Object.assign({},A))),b&&(T._redirectEventId=b),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new kf;i.updateFromServerResponse(n);const s=new Ta({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await _l(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];B(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?oS(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new kf;a.updateFromIdToken(r);const l=new Ta({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Hp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew=new Map;function Gt(t){Cn(t instanceof Function,"Expected a class definition");let e=Ew.get(t);return e?(Cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ew.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aS=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}};aS.type="NONE";const fo=aS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(t,e,n){return`firebase:${t}:${e}:${n}`}let Iw=class oc{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=zi(this.userKey,i.apiKey,s),this.fullPersistenceKey=zi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kc._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new oc(Gt(fo),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Gt(fo);const o=zi(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const f=Kc._fromJSON(e,d);c!==s&&(a=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new oc(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new oc(s,e,r))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(lS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dS(e))return"Blackberry";if(hS(e))return"Webos";if(Mg(e))return"Safari";if((e.includes("chrome/")||uS(e))&&!e.includes("edge/"))return"Chrome";if(Fl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function lS(t=le()){return/firefox\//i.test(t)}function Mg(t=le()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uS(t=le()){return/crios\//i.test(t)}function cS(t=le()){return/iemobile/i.test(t)}function Fl(t=le()){return/android/i.test(t)}function dS(t=le()){return/blackberry/i.test(t)}function hS(t=le()){return/webos/i.test(t)}function Do(t=le()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function AO(t=le()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function PO(t=le()){var e;return Do(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function bO(){return Cg()&&document.documentMode===10}function fS(t=le()){return Do(t)||Fl(t)||hS(t)||dS(t)||/windows phone/i.test(t)||cS(t)}function NO(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(t,e=[]){let n;switch(t){case"Browser":n=Tw(le());break;case"Worker":n=`${Tw(le())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${en}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xO=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OO(t,e={}){return je(t,"GET","/v2/passwordPolicy",Me(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DO=6;let LO=class{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:DO,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let MO=class{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sw(this),this.idTokenSubscription=new Sw(this),this.beforeStateQueue=new xO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Iw.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await sS(this,{idToken:e}),r=await Kc._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(pe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _l(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pe(this.app))return Promise.reject(rt(this));const n=e?Y(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pe(this.app)?Promise.reject(rt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pe(this.app)?Promise.reject(rt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Gt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await OO(this),n=new LO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new hn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await CO(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gt(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await Iw.create(this,[Gt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&uO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}};function Le(t){return Y(t)}let Sw=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ag(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ul={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jO(t){Ul=t}function jg(t){return Ul.loadJS(t)}function VO(){return Ul.recaptchaV2Script}function FO(){return Ul.recaptchaEnterpriseScript}function UO(){return Ul.gapiScript}function mS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const $O="recaptcha-enterprise",BO="NO_RECAPTCHA";let zO=class{constructor(e){this.type=$O,this.auth=Le(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{yO(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new gO(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;_w(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(BO)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&_w(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=FO();l.length!==0&&(l+=a),jg(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}};async function kw(t,e,n,r=!1){const i=new zO(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function wl(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await kw(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await kw(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}function WO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Gt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function HO(t,e,n){const r=Le(t);B(r._canInitEmulator,r,"emulator-config-failed"),B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=gS(e),{host:o,port:a}=qO(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||GO()}function gS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function qO(t){const e=gS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Rw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Rw(o)}}}function Rw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function GO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lo=class{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Un("not implemented")}_getIdTokenResponse(e){return Un("not implemented")}_linkToIdToken(e,n){return Un("not implemented")}_getReauthenticationResolver(e){return Un("not implemented")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vS(t,e){return je(t,"POST","/v1/accounts:resetPassword",Me(t,e))}async function KO(t,e){return je(t,"POST","/v1/accounts:update",e)}async function QO(t,e){return je(t,"POST","/v1/accounts:signUp",e)}async function YO(t,e){return je(t,"POST","/v1/accounts:update",Me(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JO(t,e){return Tr(t,"POST","/v1/accounts:signInWithPassword",Me(t,e))}async function qd(t,e){return je(t,"POST","/v1/accounts:sendOobCode",Me(t,e))}async function XO(t,e){return qd(t,e)}async function ZO(t,e){return qd(t,e)}async function eD(t,e){return qd(t,e)}async function tD(t,e){return qd(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nD(t,e){return Tr(t,"POST","/v1/accounts:signInWithEmailLink",Me(t,e))}async function rD(t,e){return Tr(t,"POST","/v1/accounts:signInWithEmailLink",Me(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cw=class Gp extends Lo{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Gp(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Gp(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wl(e,n,"signInWithPassword",JO);case"emailLink":return nD(e,{email:this._email,oobCode:this._password});default:ft(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wl(e,r,"signUpPassword",QO);case"emailLink":return rD(e,{idToken:n,email:this._email,oobCode:this._password});default:ft(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function or(t,e){return Tr(t,"POST","/v1/accounts:signInWithIdp",Me(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iD="http://localhost";let ts=class Kp extends Lo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Kp(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ft("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=xo(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Kp(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return or(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,or(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,or(e,n)}buildRequest(){const e={requestUri:iD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Pn(n)}return e}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sD(t,e){return je(t,"POST","/v1/accounts:sendVerificationCode",Me(t,e))}async function oD(t,e){return Tr(t,"POST","/v1/accounts:signInWithPhoneNumber",Me(t,e))}async function aD(t,e){const n=await Tr(t,"POST","/v1/accounts:signInWithPhoneNumber",Me(t,e));if(n.temporaryProof)throw Ia(t,"account-exists-with-different-credential",n);return n}const lD={USER_NOT_FOUND:"user-not-found"};async function uD(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Tr(t,"POST","/v1/accounts:signInWithPhoneNumber",Me(t,n),lD)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi extends Lo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Wi({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Wi({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return oD(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return aD(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return uD(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Wi({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dD(t){const e=In(Fn(t)).link,n=e?In(Fn(e)).deep_link_id:null,r=In(Fn(t)).deep_link_id;return(r?In(Fn(r)).link:null)||r||n||e||t}let yS=class _S{constructor(e){var n,r,i,s,o,a;const l=In(Fn(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,f=cD((i=l.mode)!==null&&i!==void 0?i:null);B(c&&d&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=dD(e);try{return new _S(n)}catch{return null}}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mo=class wS{constructor(){this.providerId=wS.PROVIDER_ID}static credential(e,n){return Cw._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=yS.parseLink(n);return B(r,"argument-error"),Cw._fromEmailAndCode(e,r.code,r.tenantId)}};Mo.PROVIDER_ID="password";Mo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Mo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sr=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jo=class extends Sr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};class Js extends jo{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return B("providerId"in n&&"signInMethod"in n,"argument-error"),ts._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return B(e.idToken||e.accessToken,"argument-error"),ts._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Js.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Js.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Js(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gd=class Rs extends jo{constructor(){super("facebook.com")}static credential(e){return ts._fromParams({providerId:Rs.PROVIDER_ID,signInMethod:Rs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rs.credentialFromTaggedObject(e)}static credentialFromError(e){return Rs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rs.credential(e.oauthAccessToken)}catch{return null}}};Gd.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gd.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kd=class Cs extends jo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ts._fromParams({providerId:Cs.PROVIDER_ID,signInMethod:Cs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Cs.credentialFromTaggedObject(e)}static credentialFromError(e){return Cs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Cs.credential(n,r)}catch{return null}}};Kd.GOOGLE_SIGN_IN_METHOD="google.com";Kd.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qd=class As extends jo{constructor(){super("github.com")}static credential(e){return ts._fromParams({providerId:As.PROVIDER_ID,signInMethod:As.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return As.credentialFromTaggedObject(e)}static credentialFromError(e){return As.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return As.credential(e.oauthAccessToken)}catch{return null}}};Qd.GITHUB_SIGN_IN_METHOD="github.com";Qd.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hD="http://localhost";class po extends Lo{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return or(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,or(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,or(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new po(r,s)}static _create(e,n){return new po(e,n)}buildRequest(){return{requestUri:hD,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fD="saml.";class Qc extends Sr{constructor(e){B(e.startsWith(fD),"argument-error"),super(e)}static credentialFromResult(e){return Qc.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Qc.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=po.fromJSON(e);return B(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return po._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yd=class Ps extends jo{constructor(){super("twitter.com")}static credential(e,n){return ts._fromParams({providerId:Ps.PROVIDER_ID,signInMethod:Ps.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ps.credentialFromTaggedObject(e)}static credentialFromError(e){return Ps.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ps.credential(n,r)}catch{return null}}};Yd.TWITTER_SIGN_IN_METHOD="twitter.com";Yd.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ES(t,e){return Tr(t,"POST","/v1/accounts:signUp",Me(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mr=class Qp{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Kc._fromIdTokenResponse(e,r,i),o=Aw(r);return new Qp({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Aw(r);return new Qp({user:e,providerId:i,_tokenResponse:r,operationType:n})}};function Aw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pD(t){var e;if(pe(t.app))return Promise.reject(rt(t));const n=Le(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new mr({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await ES(n,{returnSecureToken:!0}),i=await mr._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mD=class Yp extends He{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Yp.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Yp(e,n,r,i)}};function IS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?mD._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gD(t,e){const n=Y(t);await Jd(!0,n,e);const{providerUserInfo:r}=await wO(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=TS(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Vg(t,e,n=!1){const r=await pr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return mr._forOperation(t,"link",r)}async function Jd(t,e,n){await _l(e);const r=TS(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";B(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SS(t,e,n=!1){const{auth:r}=t;if(pe(r.app))return Promise.reject(rt(r));const i="reauthenticate";try{const s=await pr(t,IS(r,i,e,t),n);B(s.idToken,r,"internal-error");const o=Hd(s.idToken);B(o,r,"internal-error");const{sub:a}=o;return B(t.uid===a,r,"user-mismatch"),mr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ft(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kS(t,e,n=!1){if(pe(t.app))return Promise.reject(rt(t));const r="signIn",i=await IS(t,r,e),s=await mr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Xd(t,e){return kS(Le(t),e)}async function RS(t,e){const n=Y(t);return await Jd(!1,n,e.providerId),Vg(n,e)}async function CS(t,e){return SS(Y(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vD(t,e){return Tr(t,"POST","/v1/accounts:signInWithCustomToken",Me(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yD(t,e){if(pe(t.app))return Promise.reject(rt(t));const n=Le(t),r=await vD(n,{token:e,returnSecureToken:!0}),i=await mr._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Fg._fromServerResponse(e,n):"totpInfo"in n?Ug._fromServerResponse(e,n):ft(e,"internal-error")}}class Fg extends $l{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Fg(n)}}class Ug extends $l{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Ug(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(t,e,n){var r;B(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),B(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(B(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(B(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $g(t){const e=Le(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function _D(t,e,n){const r=Le(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Zd(r,i,n),await wl(r,i,"getOobCode",ZO)}async function wD(t,e,n){await vS(Y(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&$g(t),r})}async function ED(t,e){await YO(Y(t),{oobCode:e})}async function AS(t,e){const n=Y(t),r=await vS(n,{oobCode:e}),i=r.requestType;switch(B(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":B(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":B(r.mfaInfo,n,"internal-error");default:B(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=$l._fromServerResponse(Le(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function ID(t,e){const{data:n}=await AS(Y(t),e);return n.email}async function TD(t,e,n){if(pe(t.app))return Promise.reject(rt(t));const r=Le(t),o=await wl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ES).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&$g(t),l}),a=await mr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function SD(t,e,n){return pe(t.app)?Promise.reject(rt(t)):Xd(Y(t),Mo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&$g(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kD(t,e,n){const r=Le(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){B(a.handleCodeInApp,r,"argument-error"),a&&Zd(r,o,a)}s(i,n),await wl(r,i,"getOobCode",eD)}function RD(t,e){const n=yS.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function CD(t,e,n){if(pe(t.app))return Promise.reject(rt(t));const r=Y(t),i=Mo.credentialWithLink(e,n||yl());return B(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Xd(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AD(t,e){return je(t,"POST","/v1/accounts:createAuthUri",Me(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PD(t,e){const n=Dg()?yl():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await AD(Y(t),r);return i||[]}async function bD(t,e){const n=Y(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Zd(n.auth,i,e);const{email:s}=await XO(n.auth,i);s!==t.email&&await t.reload()}async function ND(t,e,n){const r=Y(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Zd(r.auth,s,n);const{email:o}=await tD(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xD(t,e){return je(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OD(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Y(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await pr(r,xD(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function DD(t,e){const n=Y(t);return pe(n.auth.app)?Promise.reject(rt(n.auth)):PS(n,e,null)}function LD(t,e){return PS(Y(t),null,e)}async function PS(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await pr(t,KO(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MD(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Hd(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Xs(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new jD(s,i);case"github.com":return new VD(s,i);case"google.com":return new FD(s,i);case"twitter.com":return new UD(s,i,t.screenName||null);case"custom":case"anonymous":return new Xs(s,null);default:return new Xs(s,r,i)}}class Xs{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class bS extends Xs{constructor(e,n,r,i){super(e,n,r),this.username=i}}class jD extends Xs{constructor(e,n){super(e,"facebook.com",n)}}class VD extends bS{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class FD extends Xs{constructor(e,n){super(e,"google.com",n)}}class UD extends bS{constructor(e,n,r){super(e,"twitter.com",n,r)}}function $D(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:MD(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new Vi("enroll",e,n)}static _fromMfaPendingCredential(e){return new Vi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Vi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Vi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Le(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>$l._fromServerResponse(r,a));B(i.mfaPendingCredential,r,"internal-error");const o=Vi._fromMfaPendingCredential(i.mfaPendingCredential);return new Bg(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const d=await mr._fromIdTokenResponse(r,n.operationType,c);return await r._updateCurrentUser(d.user),d;case"reauthenticate":return B(n.user,r,"internal-error"),mr._forOperation(n.user,n.operationType,c);default:ft(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function BD(t,e){var n;const r=Y(t),i=e;return B(e.customData.operationType,r,"argument-error"),B((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Bg._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zD(t,e){return je(t,"POST","/v2/accounts/mfaEnrollment:start",Me(t,e))}function WD(t,e){return je(t,"POST","/v2/accounts/mfaEnrollment:finalize",Me(t,e))}function HD(t,e){return je(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Me(t,e))}class zg{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>$l._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new zg(e)}async getSession(){return Vi._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await pr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await pr(this.user,HD(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Rf=new WeakMap;function qD(t){const e=Y(t);return Rf.has(e)||Rf.set(e,zg._fromUser(e)),Rf.get(e)}const Yc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let NS=class{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yc,"1"),this.storage.removeItem(Yc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GD(){const t=le();return Mg(t)||Do(t)}const KD=1e3,QD=10;let xS=class extends NS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=GD()&&NO(),this.fallbackToPolling=fS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);bO()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,QD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},KD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}};xS.type="LOCAL";const Wg=xS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let OS=class extends NS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}};OS.type="SESSION";const ns=OS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let DS=class LS{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new LS(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await YD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};DS.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let JD=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Bl("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const g=f;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(){return window}function XD(t){ze().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(){return typeof ze().WorkerGlobalScope<"u"&&typeof ze().importScripts=="function"}async function ZD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function tL(){return Hg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS="firebaseLocalStorageDb",nL=1,Jc="firebaseLocalStorage",jS="fbase_key";let zl=class{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}};function eh(t,e){return t.transaction([Jc],e?"readwrite":"readonly").objectStore(Jc)}function rL(){const t=indexedDB.deleteDatabase(MS);return new zl(t).toPromise()}function Jp(){const t=indexedDB.open(MS,nL);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Jc,{keyPath:jS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Jc)?e(r):(r.close(),await rL(),e(await Jp()))})})}async function Pw(t,e,n){const r=eh(t,!0).put({[jS]:e,value:n});return new zl(r).toPromise()}async function iL(t,e){const n=eh(t,!1).get(e),r=await new zl(n).toPromise();return r===void 0?null:r.value}function bw(t,e){const n=eh(t,!0).delete(e);return new zl(n).toPromise()}const sL=800,oL=3;let VS=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>oL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=DS._getInstance(tL()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ZD(),!this.activeServiceWorker)return;this.sender=new JD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||eL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jp();return await Pw(e,Yc,"1"),await bw(e,Yc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Pw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>iL(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>bw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=eh(i,!1).getAll();return new zl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};VS.type="LOCAL";const El=VS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aL(t,e){return je(t,"POST","/v2/accounts/mfaSignIn:start",Me(t,e))}function lL(t,e){return je(t,"POST","/v2/accounts/mfaSignIn:finalize",Me(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uL=500,cL=6e4,Du=1e12;class dL{constructor(e){this.auth=e,this.counter=Du,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new hL(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Du;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Du;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Du;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class hL{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;B(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=fL(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},cL)},uL))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function fL(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf=mS("rcb"),pL=new Vl(3e4,6e4);class mL{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=ze().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return B(gL(n),e,"argument-error"),this.shouldResolveImmediately(n)&&yw(ze().grecaptcha)?Promise.resolve(ze().grecaptcha):new Promise((r,i)=>{const s=ze().setTimeout(()=>{i(Qe(e,"network-request-failed"))},pL.get());ze()[Cf]=()=>{ze().clearTimeout(s),delete ze()[Cf];const a=ze().grecaptcha;if(!a||!yw(a)){i(Qe(e,"internal-error"));return}const l=a.render;a.render=(c,d)=>{const f=l(c,d);return this.counter++,f},this.hostLanguage=n,r(a)};const o=`${VO()}?${Pn({onload:Cf,render:"explicit",hl:n})}`;jg(o).catch(()=>{clearTimeout(s),i(Qe(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=ze().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function gL(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class vL{async load(e){return new dL(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS="recaptcha",yL={theme:"light",type:"image"};let _L=class{constructor(e,n,r=Object.assign({},yL)){this.parameters=r,this.type=FS,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Le(e),this.isInvisible=this.parameters.size==="invisible",B(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;B(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new vL:new mL,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){B(!this.parameters.sitekey,this.auth,"argument-error"),B(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),B(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=ze()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){B(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){B(Dg()&&!Hg(),this.auth,"internal-error"),await wL(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await vO(this.auth);B(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return B(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function wL(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Wi._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function EL(t,e,n){if(pe(t.app))return Promise.reject(rt(t));const r=Le(t),i=await th(r,e,Y(n));return new qg(i,s=>Xd(r,s))}async function IL(t,e,n){const r=Y(t);await Jd(!1,r,"phone");const i=await th(r.auth,e,Y(n));return new qg(i,s=>RS(r,s))}async function TL(t,e,n){const r=Y(t);if(pe(r.auth.app))return Promise.reject(rt(r.auth));const i=await th(r.auth,e,Y(n));return new qg(i,s=>CS(r,s))}async function th(t,e,n){var r;const i=await n.verify();try{B(typeof i=="string",t,"argument-error"),B(n.type===FS,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return B(o.type==="enroll",t,"internal-error"),(await zD(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{B(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return B(a,t,"missing-multi-factor-info"),(await aL(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await sD(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function SL(t,e){const n=Y(t);if(pe(n.auth.app))return Promise.reject(rt(n.auth));await Vg(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rs=class ac{constructor(e){this.providerId=ac.PROVIDER_ID,this.auth=Le(e)}verifyPhoneNumber(e,n){return th(this.auth,e,Y(n))}static credential(e,n){return Wi._fromVerification(e,n)}static credentialFromResult(e){const n=e;return ac.credentialFromTaggedObject(n)}static credentialFromError(e){return ac.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Wi._fromTokenResponse(n,r):null}};rs.PROVIDER_ID="phone";rs.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(t,e){return e?Gt(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gg=class extends Lo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return or(e,this._buildIdpRequest())}_linkToIdToken(e,n){return or(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return or(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}};function kL(t){return kS(t.auth,new Gg(t),t.bypassAuthState)}function RL(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),SS(n,new Gg(t),t.bypassAuthState)}async function CL(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),Vg(n,new Gg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let US=class{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kL;case"linkViaPopup":case"linkViaRedirect":return CL;case"reauthViaPopup":case"reauthViaRedirect":return RL;default:ft(this.auth,"internal-error")}}resolve(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AL=new Vl(2e3,1e4);async function PL(t,e,n){if(pe(t.app))return Promise.reject(Qe(t,"operation-not-supported-in-this-environment"));const r=Le(t);Oo(t,e,Sr);const i=ms(r,n);return new nh(r,"signInViaPopup",e,i).executeNotNull()}async function bL(t,e,n){const r=Y(t);if(pe(r.auth.app))return Promise.reject(Qe(r.auth,"operation-not-supported-in-this-environment"));Oo(r.auth,e,Sr);const i=ms(r.auth,n);return new nh(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function NL(t,e,n){const r=Y(t);Oo(r.auth,e,Sr);const i=ms(r.auth,n);return new nh(r.auth,"linkViaPopup",e,i,r).executeNotNull()}let nh=class Sa extends US{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Sa.currentPopupAction&&Sa.currentPopupAction.cancel(),Sa.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){Cn(this.filter.length===1,"Popup operations only handle one event");const e=Bl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sa.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,AL.get())};e()}};nh.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xL="pendingRedirect",Va=new Map;let OL=class extends US{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Va.get(this.auth._key());if(!e){try{const r=await DL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Va.set(this.auth._key(),e)}return this.bypassAuthState||Va.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function DL(t,e){const n=BS(e),r=$S(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Kg(t,e){return $S(t)._set(BS(e),"true")}function LL(){Va.clear()}function Qg(t,e){Va.set(t._key(),e)}function $S(t){return Gt(t._redirectPersistence)}function BS(t){return zi(xL,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ML(t,e,n){return jL(t,e,n)}async function jL(t,e,n){if(pe(t.app))return Promise.reject(rt(t));const r=Le(t);Oo(t,e,Sr),await r._initializationPromise;const i=ms(r,n);return await Kg(i,r),i._openRedirect(r,e,"signInViaRedirect")}function VL(t,e,n){return FL(t,e,n)}async function FL(t,e,n){const r=Y(t);if(Oo(r.auth,e,Sr),pe(r.auth.app))return Promise.reject(rt(r.auth));await r.auth._initializationPromise;const i=ms(r.auth,n);await Kg(i,r.auth);const s=await zS(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function UL(t,e,n){return $L(t,e,n)}async function $L(t,e,n){const r=Y(t);Oo(r.auth,e,Sr),await r.auth._initializationPromise;const i=ms(r.auth,n);await Jd(!1,r,e.providerId),await Kg(i,r.auth);const s=await zS(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function BL(t,e){return await Le(t)._initializationPromise,rh(t,e,!1)}async function rh(t,e,n=!1){if(pe(t.app))return Promise.reject(rt(t));const r=Le(t),i=ms(r,e),o=await new OL(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function zS(t){const e=Bl(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zL=10*60*1e3;let WS=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!WL(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!HS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Qe(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zL&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nw(e))}saveEventToCache(e){this.cachedEventUids.add(Nw(e)),this.lastProcessedEventTime=Date.now()}};function Nw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function HS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function WL(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return HS(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qS(t,e={}){return je(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qL=/^https?/;async function GL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qS(t);for(const n of e)try{if(KL(n))return}catch{}ft(t,"unauthorized-domain")}function KL(t){const e=yl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!qL.test(n))return!1;if(HL.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QL=new Vl(3e4,6e4);function xw(){const t=ze().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function YL(t){return new Promise((e,n)=>{var r,i,s;function o(){xw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xw(),n(Qe(t,"network-request-failed"))},timeout:QL.get()})}if(!((i=(r=ze().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ze().gapi)===null||s===void 0)&&s.load)o();else{const a=mS("iframefcb");return ze()[a]=()=>{gapi.load?o():n(Qe(t,"network-request-failed"))},jg(`${UO()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw lc=null,e})}let lc=null;function JL(t){return lc=lc||YL(t),lc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XL=new Vl(5e3,15e3),ZL="__/auth/iframe",eM="emulator/auth/iframe",tM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rM(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Lg(e,eM):`https://${t.config.authDomain}/${ZL}`,r={apiKey:e.apiKey,appName:t.name,v:en},i=nM.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Pn(r).slice(1)}`}async function iM(t){const e=await JL(t),n=ze().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:rM(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tM,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Qe(t,"network-request-failed"),a=ze().setTimeout(()=>{s(o)},XL.get());function l(){ze().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oM=500,aM=600,lM="_blank",uM="http://localhost";let Ow=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function cM(t,e,n,r=oM,i=aM){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},sM),{width:r.toString(),height:i.toString(),top:s,left:o}),c=le().toLowerCase();n&&(a=uS(c)?lM:n),lS(c)&&(e=e||uM,l.scrollbars="yes");const d=Object.entries(l).reduce((g,[k,R])=>`${g}${k}=${R},`,"");if(PO(c)&&a!=="_self")return dM(e||"",a),new Ow(null);const f=window.open(e||"",a,d);B(f,t,"popup-blocked");try{f.focus()}catch{}return new Ow(f)}function dM(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hM="__/auth/handler",fM="emulator/auth/handler",pM=encodeURIComponent("fac");async function Xp(t,e,n,r,i,s){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:en,eventId:i};if(e instanceof Sr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",UT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries(s||{}))o[d]=f}if(e instanceof jo){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${pM}=${encodeURIComponent(l)}`:"";return`${mM(t)}?${Pn(a).slice(1)}${c}`}function mM({config:t}){return t.emulator?Lg(t,fM):`https://${t.authDomain}/${hM}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af="webStorageSupport";let gM=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ns,this._completeRedirectFn=rh,this._overrideRedirectResult=Qg}async _openPopup(e,n,r,i){var s;Cn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Xp(e,n,r,yl(),i);return cM(e,o,Bl())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Xp(e,n,r,yl(),i);return XD(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Cn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await iM(e),r=new WS(e);return n.register("authEvent",i=>(B(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Af,{type:Af},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Af];o!==void 0&&n(!!o),ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=GL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fS()||Mg()||Do()}};const vM=gM;class yM{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Un("unexpected MultiFactorSessionType")}}}class Yg extends yM{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Yg(e)}_finalizeEnroll(e,n,r){return WD(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return lL(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class GS{constructor(){}static assertion(e){return Yg._fromCredential(e)}}GS.FACTOR_ID="phone";var Dw="@firebase/auth",Lw="1.7.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _M=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wM(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function EM(t){$t(new bt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;B(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pS(t)},c=new MO(r,i,s,l);return WO(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$t(new bt("auth-internal",e=>{const n=Le(e.getProvider("auth").getImmediate());return(r=>new _M(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nt(Dw,Lw,wM(t)),nt(Dw,Lw,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IM=5*60;kg("authIdTokenMaxAge");function TM(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}jO({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Qe("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",TM().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});EM("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SM=2e3;async function kM(t,e,n){var r;const{BuildInfo:i}=is();Cn(e.sessionId,"AuthEvent did not contain a session ID");const s=await bM(e.sessionId),o={};return Do()?o.ibi=i.packageName:Fl()?o.apn=i.packageName:ft(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Xp(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function RM(t){const{BuildInfo:e}=is(),n={};Do()?n.iosBundleId=e.packageName:Fl()?n.androidPackageName=e.packageName:ft(t,"operation-not-supported-in-this-environment"),await qS(t,n)}function CM(t){const{cordova:e}=is();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,AO()?"_blank":"_system","location=yes"),n(i)})})}async function AM(t,e,n){const{cordova:r}=is();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var f;s();const g=(f=r.plugins.browsertab)===null||f===void 0?void 0:f.close;typeof g=="function"&&g(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function c(){a||(a=window.setTimeout(()=>{o(Qe(t,"redirect-cancelled-by-user"))},SM))}function d(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(l),document.addEventListener("resume",c,!1),Fl()&&document.addEventListener("visibilitychange",d,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",d,!1),a&&window.clearTimeout(a)}})}finally{i()}}function PM(t){var e,n,r,i,s,o,a,l,c,d;const f=is();B(typeof((e=f==null?void 0:f.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),B(typeof((n=f==null?void 0:f.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),B(typeof((s=(i=(r=f==null?void 0:f.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),B(typeof((l=(a=(o=f==null?void 0:f.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),B(typeof((d=(c=f==null?void 0:f.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||d===void 0?void 0:d.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function bM(t){const e=NM(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function NM(t){if(Cn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xM=20;class OM extends WS{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function DM(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:jM(),postBody:null,tenantId:t.tenantId,error:Qe(t,"no-auth-event")}}function LM(t,e){return Zp()._set(em(t),e)}async function Mw(t){const e=await Zp()._get(em(t));return e&&await Zp()._remove(em(t)),e}function MM(t,e){var n,r;const i=FM(e);if(i.includes("/__/auth/callback")){const s=uc(i),o=s.firebaseError?VM(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?Qe(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function jM(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<xM;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Zp(){return Gt(Wg)}function em(t){return zi("authEvent",t.config.apiKey,t.name)}function VM(t){try{return JSON.parse(t)}catch{return null}}function FM(t){const e=uc(t),n=e.link?decodeURIComponent(e.link):void 0,r=uc(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return uc(i).link||i||r||n||t}function uc(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return In(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UM=500;class $M{constructor(){this._redirectPersistence=ns,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=rh,this._overrideRedirectResult=Qg}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new OM(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){ft(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){PM(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),LL(),await this._originValidation(e);const o=DM(e,r,i);await LM(e,o);const a=await kM(e,o,n),l=await CM(a);return AM(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=RM(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=is(),o=setTimeout(async()=>{await Mw(e),n.onEvent(jw())},UM),a=async d=>{clearTimeout(o);const f=await Mw(e);let g=null;f&&(d!=null&&d.url)&&(g=MM(f,d.url)),n.onEvent(g||jw())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,c=`${s.packageName.toLowerCase()}://`;is().handleOpenURL=async d=>{if(d.toLowerCase().startsWith(c)&&a({url:d}),typeof l=="function")try{l(d)}catch(f){console.error(f)}}}}const BM=$M;function jw(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Qe("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zM(t,e){Le(t)._logFramework(e)}var WM="@firebase/auth-compat",HM="0.5.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qM=1e3;function Fa(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function GM(){return Fa()==="http:"||Fa()==="https:"}function KS(t=le()){return!!((Fa()==="file:"||Fa()==="ionic:"||Fa()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function KM(){return Bd()||Rg()}function QM(){return Cg()&&(document==null?void 0:document.documentMode)===11}function YM(t=le()){return/Edge\/\d+/.test(t)}function JM(t=le()){return QM()||YM(t)}function QS(){try{const t=self.localStorage,e=Bl();if(t)return t.setItem(e,"1"),t.removeItem(e),JM()?pl():!0}catch{return Jg()&&pl()}return!1}function Jg(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Pf(){return(GM()||$d()||KS())&&!KM()&&QS()&&!Jg()}function YS(){return KS()&&typeof document<"u"}async function XM(){return YS()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},qM);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function ZM(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht={LOCAL:"local",NONE:"none",SESSION:"session"},ha=B,JS="persistence";function ej(t,e){if(ha(Object.values(Ht).includes(e),t,"invalid-persistence-type"),Bd()){ha(e!==Ht.SESSION,t,"unsupported-persistence-type");return}if(Rg()){ha(e===Ht.NONE,t,"unsupported-persistence-type");return}if(Jg()){ha(e===Ht.NONE||e===Ht.LOCAL&&pl(),t,"unsupported-persistence-type");return}ha(e===Ht.NONE||QS(),t,"unsupported-persistence-type")}async function tm(t){await t._initializationPromise;const e=XS(),n=zi(JS,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function tj(t,e){const n=XS();if(!n)return[];const r=zi(JS,t,e);switch(n.getItem(r)){case Ht.NONE:return[fo];case Ht.LOCAL:return[El,ns];case Ht.SESSION:return[ns];default:return[]}}function XS(){var t;try{return((t=ZM())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nj=B;class Kr{constructor(){this.browserResolver=Gt(vM),this.cordovaResolver=Gt(BM),this.underlyingResolver=null,this._redirectPersistence=ns,this._completeRedirectFn=rh,this._overrideRedirectResult=Qg}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return YS()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return nj(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await XM();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(t){return t.unwrap()}function rj(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ij(t){return ek(t)}function sj(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new oj(t,BD(t,e))}else if(r){const i=ek(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function ek(t){const{_tokenResponse:e}=t instanceof He?t.customData:t;if(!e)return null;if(!(t instanceof He)&&"temporaryProof"in e&&"phoneNumber"in e)return rs.credentialFromResult(t);const n=e.providerId;if(!n||n===da.PASSWORD)return null;let r;switch(n){case da.GOOGLE:r=Kd;break;case da.FACEBOOK:r=Gd;break;case da.GITHUB:r=Qd;break;case da.TWITTER:r=Yd;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?po._create(n,a):ts._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Js(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof He?r.credentialFromError(t):r.credentialFromResult(t)}function Ot(t,e){return e.catch(n=>{throw n instanceof He&&sj(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:ij(n),additionalUserInfo:$D(n),user:ih.getOrCreate(i)}})}async function nm(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Ot(t,n.confirm(r))}}class oj{constructor(e,n){this.resolver=n,this.auth=rj(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Ot(ZS(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ih=class ka{constructor(e){this._delegate=e,this.multiFactor=qD(e)}static getOrCreate(e){return ka.USER_MAP.has(e)||ka.USER_MAP.set(e,new ka(e)),ka.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Ot(this.auth,RS(this._delegate,e))}async linkWithPhoneNumber(e,n){return nm(this.auth,IL(this._delegate,e,n))}async linkWithPopup(e){return Ot(this.auth,NL(this._delegate,e,Kr))}async linkWithRedirect(e){return await tm(Le(this.auth)),UL(this._delegate,e,Kr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Ot(this.auth,CS(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return nm(this.auth,TL(this._delegate,e,n))}reauthenticateWithPopup(e){return Ot(this.auth,bL(this._delegate,e,Kr))}async reauthenticateWithRedirect(e){return await tm(Le(this.auth)),VL(this._delegate,e,Kr)}sendEmailVerification(e){return bD(this._delegate,e)}async unlink(e){return await gD(this._delegate,e),this}updateEmail(e){return DD(this._delegate,e)}updatePassword(e){return LD(this._delegate,e)}updatePhoneNumber(e){return SL(this._delegate,e)}updateProfile(e){return OD(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return ND(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};ih.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa=B;class rm{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;fa(r,"invalid-api-key",{appName:e.name}),fa(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Kr:void 0;this._delegate=n.initialize({options:{persistence:aj(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(aO),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?ih.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){HO(this._delegate,e,n)}applyActionCode(e){return ED(this._delegate,e)}checkActionCode(e){return AS(this._delegate,e)}confirmPasswordReset(e,n){return wD(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Ot(this._delegate,TD(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return PD(this._delegate,e)}isSignInWithEmailLink(e){return RD(this._delegate,e)}async getRedirectResult(){fa(Pf(),this._delegate,"operation-not-supported-in-this-environment");const e=await BL(this._delegate,Kr);return e?Ot(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){zM(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=Vw(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=Vw(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return kD(this._delegate,e,n)}sendPasswordResetEmail(e,n){return _D(this._delegate,e,n||void 0)}async setPersistence(e){ej(this._delegate,e);let n;switch(e){case Ht.SESSION:n=ns;break;case Ht.LOCAL:n=await Gt(El)._isAvailable()?El:Wg;break;case Ht.NONE:n=fo;break;default:return ft("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Ot(this._delegate,pD(this._delegate))}signInWithCredential(e){return Ot(this._delegate,Xd(this._delegate,e))}signInWithCustomToken(e){return Ot(this._delegate,yD(this._delegate,e))}signInWithEmailAndPassword(e,n){return Ot(this._delegate,SD(this._delegate,e,n))}signInWithEmailLink(e,n){return Ot(this._delegate,CD(this._delegate,e,n))}signInWithPhoneNumber(e,n){return nm(this._delegate,EL(this._delegate,e,n))}async signInWithPopup(e){return fa(Pf(),this._delegate,"operation-not-supported-in-this-environment"),Ot(this._delegate,PL(this._delegate,e,Kr))}async signInWithRedirect(e){return fa(Pf(),this._delegate,"operation-not-supported-in-this-environment"),await tm(this._delegate),ML(this._delegate,e,Kr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return ID(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}rm.Persistence=Ht;function Vw(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&ih.getOrCreate(o)),error:e,complete:n}}function aj(t,e){const n=tj(t,e);if(typeof self<"u"&&!n.includes(El)&&n.push(El),typeof window<"u")for(const r of[Wg,ns])n.includes(r)||n.push(r);return n.includes(fo)||n.push(fo),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(){this.providerId="phone",this._delegate=new rs(ZS(No.auth()))}static credential(e,n){return rs.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Xg.PHONE_SIGN_IN_METHOD=rs.PHONE_SIGN_IN_METHOD;Xg.PROVIDER_ID=rs.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lj=B;class uj{constructor(e,n,r=No.app()){var i;lj((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new _L(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cj="auth-compat";function dj(t){t.INTERNAL.registerComponent(new bt(cj,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new rm(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Ts.EMAIL_SIGNIN,PASSWORD_RESET:Ts.PASSWORD_RESET,RECOVER_EMAIL:Ts.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Ts.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Ts.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Ts.VERIFY_EMAIL}},EmailAuthProvider:Mo,FacebookAuthProvider:Gd,GithubAuthProvider:Qd,GoogleAuthProvider:Kd,OAuthProvider:Js,SAMLAuthProvider:Qc,PhoneAuthProvider:Xg,PhoneMultiFactorGenerator:GS,RecaptchaVerifier:uj,TwitterAuthProvider:Yd,Auth:rm,AuthCredential:Lo,Error:He}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(WM,HM)}dj(No);var hj="firebase",fj="10.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nt(hj,fj,"app");/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const pj={};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Lu(t){return Object.isFrozen(t)&&Object.isFrozen(t.raw)}function Mu(t){return t.toString().indexOf("`")===-1}Mu(t=>t``)||Mu(t=>t`\0`)||Mu(t=>t`\n`)||Mu(t=>t`\u0000`);Lu``&&Lu`\0`&&Lu`\n`&&Lu`\u0000`;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */let tk="google#safe";function mj(){if(typeof window<"u")return window.trustedTypes}function nk(){var t;return tk!==""&&(t=mj())!==null&&t!==void 0?t:null}let ju;function gj(){var t,e;if(ju===void 0)try{ju=(e=(t=nk())===null||t===void 0?void 0:t.createPolicy(tk,{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n}))!==null&&e!==void 0?e:null}catch{ju=null}return ju}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */class rk{constructor(e,n){this.privateDoNotAccessOrElseWrappedResourceUrl=e}toString(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()}}function Fw(t){var e;const n=t,r=(e=gj())===null||e===void 0?void 0:e.createScriptURL(n);return r??new rk(n,pj)}function vj(t){var e;if(!((e=nk())===null||e===void 0)&&e.isScriptURL(t))return t;if(t instanceof rk)return t.privateDoNotAccessOrElseWrappedResourceUrl;{let n="";throw new Error(n)}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function yj(t,...e){if(e.length===0)return Fw(t[0]);t[0].toLowerCase();let n=t[0];for(let r=0;r<e.length;r++)n+=encodeURIComponent(e[r])+t[r+1];return Fw(n)}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function _j(t){return wj("script",t)}function wj(t,e){var n;const r=e.document,i=(n=r.querySelector)===null||n===void 0?void 0:n.call(r,`${t}[nonce]`);return i&&(i.nonce||i.getAttribute("nonce"))||""}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Ej(t){const e=t.ownerDocument&&t.ownerDocument.defaultView,n=_j(e||window);n&&t.setAttribute("nonce",n)}function Ij(t,e,n){t.src=vj(e),Ej(t)}const ik="@firebase/installations",Zg="0.6.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk=1e4,ok=`w:${Zg}`,ak="FIS_v2",Tj="https://firebaseinstallations.googleapis.com/v1",Sj=60*60*1e3,kj="installations",Rj="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cj={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ss=new hn(kj,Rj,Cj);function lk(t){return t instanceof He&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uk({projectId:t}){return`${Tj}/projects/${t}/installations`}function ck(t){return{token:t.token,requestStatus:2,expiresIn:Pj(t.expiresIn),creationTime:Date.now()}}async function dk(t,e){const r=(await e.json()).error;return ss.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function hk({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Aj(t,{refreshToken:e}){const n=hk(t);return n.append("Authorization",bj(e)),n}async function fk(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Pj(t){return Number(t.replace("s","000"))}function bj(t){return`${ak} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nj({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=uk(t),i=hk(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:ak,appId:t.appId,sdkVersion:ok},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await fk(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:ck(c.authToken)}}else throw await dk("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pk(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xj(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oj=/^[cdef][\w-]{21}$/,im="";function Dj(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Lj(t);return Oj.test(n)?n:im}catch{return im}}function Lj(t){return xj(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk=new Map;function gk(t,e){const n=sh(t);vk(n,e),Mj(n,e)}function vk(t,e){const n=mk.get(t);if(n)for(const r of n)r(e)}function Mj(t,e){const n=jj();n&&n.postMessage({key:t,fid:e}),Vj()}let Fi=null;function jj(){return!Fi&&"BroadcastChannel"in self&&(Fi=new BroadcastChannel("[Firebase] FID Change"),Fi.onmessage=t=>{vk(t.data.key,t.data.fid)}),Fi}function Vj(){mk.size===0&&Fi&&(Fi.close(),Fi=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fj="firebase-installations-database",Uj=1,os="firebase-installations-store";let bf=null;function ev(){return bf||(bf=HT(Fj,Uj,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(os)}}})),bf}async function Xc(t,e){const n=sh(t),i=(await ev()).transaction(os,"readwrite"),s=i.objectStore(os),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&gk(t,e.fid),e}async function yk(t){const e=sh(t),r=(await ev()).transaction(os,"readwrite");await r.objectStore(os).delete(e),await r.done}async function oh(t,e){const n=sh(t),i=(await ev()).transaction(os,"readwrite"),s=i.objectStore(os),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&gk(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tv(t){let e;const n=await oh(t.appConfig,r=>{const i=$j(r),s=Bj(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===im?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function $j(t){const e=t||{fid:Dj(),registrationStatus:0};return _k(e)}function Bj(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ss.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=zj(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Wj(t)}:{installationEntry:e}}async function zj(t,e){try{const n=await Nj(t,e);return Xc(t.appConfig,n)}catch(n){throw lk(n)&&n.customData.serverCode===409?await yk(t.appConfig):await Xc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Wj(t){let e=await Uw(t.appConfig);for(;e.registrationStatus===1;)await pk(100),e=await Uw(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await tv(t);return r||n}return e}function Uw(t){return oh(t,e=>{if(!e)throw ss.create("installation-not-found");return _k(e)})}function _k(t){return Hj(t)?{fid:t.fid,registrationStatus:0}:t}function Hj(t){return t.registrationStatus===1&&t.registrationTime+sk<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qj({appConfig:t,heartbeatServiceProvider:e},n){const r=Gj(t,n),i=Aj(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:ok,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await fk(()=>fetch(r,a));if(l.ok){const c=await l.json();return ck(c)}else throw await dk("Generate Auth Token",l)}function Gj(t,{fid:e}){return`${uk(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nv(t,e=!1){let n;const r=await oh(t.appConfig,s=>{if(!wk(s))throw ss.create("not-registered");const o=s.authToken;if(!e&&Yj(o))return s;if(o.requestStatus===1)return n=Kj(t,e),s;{if(!navigator.onLine)throw ss.create("app-offline");const a=Xj(s);return n=Qj(t,a),a}});return n?await n:r.authToken}async function Kj(t,e){let n=await $w(t.appConfig);for(;n.authToken.requestStatus===1;)await pk(100),n=await $w(t.appConfig);const r=n.authToken;return r.requestStatus===0?nv(t,e):r}function $w(t){return oh(t,e=>{if(!wk(e))throw ss.create("not-registered");const n=e.authToken;return Zj(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Qj(t,e){try{const n=await qj(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Xc(t.appConfig,r),n}catch(n){if(lk(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await yk(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Xc(t.appConfig,r)}throw n}}function wk(t){return t!==void 0&&t.registrationStatus===2}function Yj(t){return t.requestStatus===2&&!Jj(t)}function Jj(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Sj}function Xj(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Zj(t){return t.requestStatus===1&&t.requestTime+sk<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e2(t){const e=t,{installationEntry:n,registrationPromise:r}=await tv(e);return r?r.catch(console.error):nv(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t2(t,e=!1){const n=t;return await n2(n),(await nv(n,e)).token}async function n2(t){const{registrationPromise:e}=await tv(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r2(t){if(!t||!t.options)throw Nf("App Configuration");if(!t.name)throw Nf("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Nf(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Nf(t){return ss.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek="installations",i2="installations-internal",s2=t=>{const e=t.getProvider("app").getImmediate(),n=r2(e),r=Ir(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},o2=t=>{const e=t.getProvider("app").getImmediate(),n=Ir(e,Ek).getImmediate();return{getId:()=>e2(n),getToken:i=>t2(n,i)}};function a2(){$t(new bt(Ek,s2,"PUBLIC")),$t(new bt(i2,o2,"PRIVATE"))}a2();nt(ik,Zg);nt(ik,Zg,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc="analytics",l2="firebase_id",u2="origin",c2=60*1e3,d2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",h2="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=new bo("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ik(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function f2(t,e){const n=document.createElement("script"),r=yj`https://www.googletagmanager.com/gtag/js?l=${t}&id=${e}`;Ij(n,r),n.async=!0,document.head.appendChild(n)}function p2(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function m2(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await Ik(n)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){Qt.error(a)}t("config",i,s)}async function g2(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Ik(n);for(const l of o){const c=a.find(f=>f.measurementId===l),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Qt.error(s)}}function v2(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await g2(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await m2(t,e,n,r,a,l)}else if(s==="consent"){const[a,l]=o;t("consent",a,l)}else if(s==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Qt.error(a)}}return i}function y2(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=v2(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function _2(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(h2)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w2={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},an=new hn("analytics","Analytics",w2);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E2=30,I2=1e3;class T2{constructor(e={},n=I2){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Tk=new T2;function S2(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function k2(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:S2(r)},s=d2.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw an.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function R2(t,e=Tk,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw an.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw an.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new P2;return setTimeout(async()=>{a.abort()},c2),Sk({appId:r,apiKey:i,measurementId:s},o,a,e)}async function Sk(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Tk){var s;const{appId:o,measurementId:a}=t;try{await C2(r,e)}catch(l){if(a)return Qt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await k2(t);return i.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!A2(c)){if(i.deleteThrottleMetadata(o),a)return Qt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const d=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?lw(n,i.intervalMillis,E2):lw(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,f),Qt.debug(`Calling attemptFetch again in ${d} millis`),Sk(t,f,r,i)}}function C2(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(an.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function A2(t){if(!(t instanceof He)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class P2{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function b2(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N2(){if(pl())try{await FT()}catch(t){return Qt.warn(an.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Qt.warn(an.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function x2(t,e,n,r,i,s,o){var a;const l=R2(t);l.then(k=>{n[k.measurementId]=k.appId,t.options.measurementId&&k.measurementId!==t.options.measurementId&&Qt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${k.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(k=>Qt.error(k)),e.push(l);const c=N2().then(k=>{if(k)return r.getId()}),[d,f]=await Promise.all([l,c]);_2(s)||f2(s,d.measurementId),i("js",new Date);const g=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return g[u2]="firebase",g.update=!0,f!=null&&(g[l2]=f),i("config",d.measurementId,g),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(e){this.app=e}_delete(){return delete Ua[this.app.options.appId],Promise.resolve()}}let Ua={},Bw=[];const zw={};let xf="dataLayer",D2="gtag",Ww,kk,Hw=!1;function L2(){const t=[];if($d()&&t.push("This is a browser extension environment."),xN()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=an.create("invalid-analytics-context",{errorInfo:e});Qt.warn(n.message)}}function M2(t,e,n){L2();const r=t.options.appId;if(!r)throw an.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Qt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw an.create("no-api-key");if(Ua[r]!=null)throw an.create("already-exists",{id:r});if(!Hw){p2(xf);const{wrappedGtag:s,gtagCore:o}=y2(Ua,Bw,zw,xf,D2);kk=s,Ww=o,Hw=!0}return Ua[r]=x2(t,Bw,zw,e,Ww,xf,n),new O2(t)}function j2(t=Wd()){t=Y(t);const e=Ir(t,Zc);return e.isInitialized()?e.getImmediate():V2(t)}function V2(t,e={}){const n=Ir(t,Zc);if(n.isInitialized()){const i=n.getImmediate();if(ml(e,n.getOptions()))return i;throw an.create("already-initialized")}return n.initialize({options:e})}function F2(t,e,n,r){t=Y(t),b2(kk,Ua[t.app.options.appId],e,n,r).catch(i=>Qt.error(i))}const qw="@firebase/analytics",Gw="0.10.6";function U2(){$t(new bt(Zc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return M2(r,i,n)},"PUBLIC")),$t(new bt("analytics-internal",t,"PRIVATE")),nt(qw,Gw),nt(qw,Gw,"esm2017");function t(e){try{const n=e.getProvider(Zc).getImmediate();return{logEvent:(r,i,s)=>F2(n,r,i,s)}}catch(n){throw an.create("interop-component-reg-failed",{reason:n})}}}U2();var Kw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rk;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,v){function T(){}T.prototype=v.prototype,I.D=v.prototype,I.prototype=new T,I.prototype.constructor=I,I.C=function(A,P,N){for(var C=Array(arguments.length-2),F=2;F<arguments.length;F++)C[F-2]=arguments[F];return v.prototype[P].apply(A,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,v,T){T||(T=0);var A=Array(16);if(typeof v=="string")for(var P=0;16>P;++P)A[P]=v.charCodeAt(T++)|v.charCodeAt(T++)<<8|v.charCodeAt(T++)<<16|v.charCodeAt(T++)<<24;else for(P=0;16>P;++P)A[P]=v[T++]|v[T++]<<8|v[T++]<<16|v[T++]<<24;v=I.g[0],T=I.g[1],P=I.g[2];var N=I.g[3],C=v+(N^T&(P^N))+A[0]+3614090360&4294967295;v=T+(C<<7&4294967295|C>>>25),C=N+(P^v&(T^P))+A[1]+3905402710&4294967295,N=v+(C<<12&4294967295|C>>>20),C=P+(T^N&(v^T))+A[2]+606105819&4294967295,P=N+(C<<17&4294967295|C>>>15),C=T+(v^P&(N^v))+A[3]+3250441966&4294967295,T=P+(C<<22&4294967295|C>>>10),C=v+(N^T&(P^N))+A[4]+4118548399&4294967295,v=T+(C<<7&4294967295|C>>>25),C=N+(P^v&(T^P))+A[5]+1200080426&4294967295,N=v+(C<<12&4294967295|C>>>20),C=P+(T^N&(v^T))+A[6]+2821735955&4294967295,P=N+(C<<17&4294967295|C>>>15),C=T+(v^P&(N^v))+A[7]+4249261313&4294967295,T=P+(C<<22&4294967295|C>>>10),C=v+(N^T&(P^N))+A[8]+1770035416&4294967295,v=T+(C<<7&4294967295|C>>>25),C=N+(P^v&(T^P))+A[9]+2336552879&4294967295,N=v+(C<<12&4294967295|C>>>20),C=P+(T^N&(v^T))+A[10]+4294925233&4294967295,P=N+(C<<17&4294967295|C>>>15),C=T+(v^P&(N^v))+A[11]+2304563134&4294967295,T=P+(C<<22&4294967295|C>>>10),C=v+(N^T&(P^N))+A[12]+1804603682&4294967295,v=T+(C<<7&4294967295|C>>>25),C=N+(P^v&(T^P))+A[13]+4254626195&4294967295,N=v+(C<<12&4294967295|C>>>20),C=P+(T^N&(v^T))+A[14]+2792965006&4294967295,P=N+(C<<17&4294967295|C>>>15),C=T+(v^P&(N^v))+A[15]+1236535329&4294967295,T=P+(C<<22&4294967295|C>>>10),C=v+(P^N&(T^P))+A[1]+4129170786&4294967295,v=T+(C<<5&4294967295|C>>>27),C=N+(T^P&(v^T))+A[6]+3225465664&4294967295,N=v+(C<<9&4294967295|C>>>23),C=P+(v^T&(N^v))+A[11]+643717713&4294967295,P=N+(C<<14&4294967295|C>>>18),C=T+(N^v&(P^N))+A[0]+3921069994&4294967295,T=P+(C<<20&4294967295|C>>>12),C=v+(P^N&(T^P))+A[5]+3593408605&4294967295,v=T+(C<<5&4294967295|C>>>27),C=N+(T^P&(v^T))+A[10]+38016083&4294967295,N=v+(C<<9&4294967295|C>>>23),C=P+(v^T&(N^v))+A[15]+3634488961&4294967295,P=N+(C<<14&4294967295|C>>>18),C=T+(N^v&(P^N))+A[4]+3889429448&4294967295,T=P+(C<<20&4294967295|C>>>12),C=v+(P^N&(T^P))+A[9]+568446438&4294967295,v=T+(C<<5&4294967295|C>>>27),C=N+(T^P&(v^T))+A[14]+3275163606&4294967295,N=v+(C<<9&4294967295|C>>>23),C=P+(v^T&(N^v))+A[3]+4107603335&4294967295,P=N+(C<<14&4294967295|C>>>18),C=T+(N^v&(P^N))+A[8]+1163531501&4294967295,T=P+(C<<20&4294967295|C>>>12),C=v+(P^N&(T^P))+A[13]+2850285829&4294967295,v=T+(C<<5&4294967295|C>>>27),C=N+(T^P&(v^T))+A[2]+4243563512&4294967295,N=v+(C<<9&4294967295|C>>>23),C=P+(v^T&(N^v))+A[7]+1735328473&4294967295,P=N+(C<<14&4294967295|C>>>18),C=T+(N^v&(P^N))+A[12]+2368359562&4294967295,T=P+(C<<20&4294967295|C>>>12),C=v+(T^P^N)+A[5]+4294588738&4294967295,v=T+(C<<4&4294967295|C>>>28),C=N+(v^T^P)+A[8]+2272392833&4294967295,N=v+(C<<11&4294967295|C>>>21),C=P+(N^v^T)+A[11]+1839030562&4294967295,P=N+(C<<16&4294967295|C>>>16),C=T+(P^N^v)+A[14]+4259657740&4294967295,T=P+(C<<23&4294967295|C>>>9),C=v+(T^P^N)+A[1]+2763975236&4294967295,v=T+(C<<4&4294967295|C>>>28),C=N+(v^T^P)+A[4]+1272893353&4294967295,N=v+(C<<11&4294967295|C>>>21),C=P+(N^v^T)+A[7]+4139469664&4294967295,P=N+(C<<16&4294967295|C>>>16),C=T+(P^N^v)+A[10]+3200236656&4294967295,T=P+(C<<23&4294967295|C>>>9),C=v+(T^P^N)+A[13]+681279174&4294967295,v=T+(C<<4&4294967295|C>>>28),C=N+(v^T^P)+A[0]+3936430074&4294967295,N=v+(C<<11&4294967295|C>>>21),C=P+(N^v^T)+A[3]+3572445317&4294967295,P=N+(C<<16&4294967295|C>>>16),C=T+(P^N^v)+A[6]+76029189&4294967295,T=P+(C<<23&4294967295|C>>>9),C=v+(T^P^N)+A[9]+3654602809&4294967295,v=T+(C<<4&4294967295|C>>>28),C=N+(v^T^P)+A[12]+3873151461&4294967295,N=v+(C<<11&4294967295|C>>>21),C=P+(N^v^T)+A[15]+530742520&4294967295,P=N+(C<<16&4294967295|C>>>16),C=T+(P^N^v)+A[2]+3299628645&4294967295,T=P+(C<<23&4294967295|C>>>9),C=v+(P^(T|~N))+A[0]+4096336452&4294967295,v=T+(C<<6&4294967295|C>>>26),C=N+(T^(v|~P))+A[7]+1126891415&4294967295,N=v+(C<<10&4294967295|C>>>22),C=P+(v^(N|~T))+A[14]+2878612391&4294967295,P=N+(C<<15&4294967295|C>>>17),C=T+(N^(P|~v))+A[5]+4237533241&4294967295,T=P+(C<<21&4294967295|C>>>11),C=v+(P^(T|~N))+A[12]+1700485571&4294967295,v=T+(C<<6&4294967295|C>>>26),C=N+(T^(v|~P))+A[3]+2399980690&4294967295,N=v+(C<<10&4294967295|C>>>22),C=P+(v^(N|~T))+A[10]+4293915773&4294967295,P=N+(C<<15&4294967295|C>>>17),C=T+(N^(P|~v))+A[1]+2240044497&4294967295,T=P+(C<<21&4294967295|C>>>11),C=v+(P^(T|~N))+A[8]+1873313359&4294967295,v=T+(C<<6&4294967295|C>>>26),C=N+(T^(v|~P))+A[15]+4264355552&4294967295,N=v+(C<<10&4294967295|C>>>22),C=P+(v^(N|~T))+A[6]+2734768916&4294967295,P=N+(C<<15&4294967295|C>>>17),C=T+(N^(P|~v))+A[13]+1309151649&4294967295,T=P+(C<<21&4294967295|C>>>11),C=v+(P^(T|~N))+A[4]+4149444226&4294967295,v=T+(C<<6&4294967295|C>>>26),C=N+(T^(v|~P))+A[11]+3174756917&4294967295,N=v+(C<<10&4294967295|C>>>22),C=P+(v^(N|~T))+A[2]+718787259&4294967295,P=N+(C<<15&4294967295|C>>>17),C=T+(N^(P|~v))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+v&4294967295,I.g[1]=I.g[1]+(P+(C<<21&4294967295|C>>>11))&4294967295,I.g[2]=I.g[2]+P&4294967295,I.g[3]=I.g[3]+N&4294967295}r.prototype.u=function(I,v){v===void 0&&(v=I.length);for(var T=v-this.blockSize,A=this.B,P=this.h,N=0;N<v;){if(P==0)for(;N<=T;)i(this,I,N),N+=this.blockSize;if(typeof I=="string"){for(;N<v;)if(A[P++]=I.charCodeAt(N++),P==this.blockSize){i(this,A),P=0;break}}else for(;N<v;)if(A[P++]=I[N++],P==this.blockSize){i(this,A),P=0;break}}this.h=P,this.o+=v},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var v=1;v<I.length-8;++v)I[v]=0;var T=8*this.o;for(v=I.length-8;v<I.length;++v)I[v]=T&255,T/=256;for(this.u(I),I=Array(16),v=T=0;4>v;++v)for(var A=0;32>A;A+=8)I[T++]=this.g[v]>>>A&255;return I};function s(I,v){var T=a;return Object.prototype.hasOwnProperty.call(T,I)?T[I]:T[I]=v(I)}function o(I,v){this.h=v;for(var T=[],A=!0,P=I.length-1;0<=P;P--){var N=I[P]|0;A&&N==v||(T[P]=N,A=!1)}this.g=T}var a={};function l(I){return-128<=I&&128>I?s(I,function(v){return new o([v|0],0>v?-1:0)}):new o([I|0],0>I?-1:0)}function c(I){if(isNaN(I)||!isFinite(I))return f;if(0>I)return b(c(-I));for(var v=[],T=1,A=0;I>=T;A++)v[A]=I/T|0,T*=4294967296;return new o(v,0)}function d(I,v){if(I.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(I.charAt(0)=="-")return b(d(I.substring(1),v));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=c(Math.pow(v,8)),A=f,P=0;P<I.length;P+=8){var N=Math.min(8,I.length-P),C=parseInt(I.substring(P,P+N),v);8>N?(N=c(Math.pow(v,N)),A=A.j(N).add(c(C))):(A=A.j(T),A=A.add(c(C)))}return A}var f=l(0),g=l(1),k=l(16777216);t=o.prototype,t.m=function(){if(x(this))return-b(this).m();for(var I=0,v=1,T=0;T<this.g.length;T++){var A=this.i(T);I+=(0<=A?A:4294967296+A)*v,v*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(R(this))return"0";if(x(this))return"-"+b(this).toString(I);for(var v=c(Math.pow(I,6)),T=this,A="";;){var P=O(T,v).g;T=E(T,P.j(v));var N=((0<T.g.length?T.g[0]:T.h)>>>0).toString(I);if(T=P,R(T))return N+A;for(;6>N.length;)N="0"+N;A=N+A}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function R(I){if(I.h!=0)return!1;for(var v=0;v<I.g.length;v++)if(I.g[v]!=0)return!1;return!0}function x(I){return I.h==-1}t.l=function(I){return I=E(this,I),x(I)?-1:R(I)?0:1};function b(I){for(var v=I.g.length,T=[],A=0;A<v;A++)T[A]=~I.g[A];return new o(T,~I.h).add(g)}t.abs=function(){return x(this)?b(this):this},t.add=function(I){for(var v=Math.max(this.g.length,I.g.length),T=[],A=0,P=0;P<=v;P++){var N=A+(this.i(P)&65535)+(I.i(P)&65535),C=(N>>>16)+(this.i(P)>>>16)+(I.i(P)>>>16);A=C>>>16,N&=65535,C&=65535,T[P]=C<<16|N}return new o(T,T[T.length-1]&-2147483648?-1:0)};function E(I,v){return I.add(b(v))}t.j=function(I){if(R(this)||R(I))return f;if(x(this))return x(I)?b(this).j(b(I)):b(b(this).j(I));if(x(I))return b(this.j(b(I)));if(0>this.l(k)&&0>I.l(k))return c(this.m()*I.m());for(var v=this.g.length+I.g.length,T=[],A=0;A<2*v;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(var P=0;P<I.g.length;P++){var N=this.i(A)>>>16,C=this.i(A)&65535,F=I.i(P)>>>16,H=I.i(P)&65535;T[2*A+2*P]+=C*H,w(T,2*A+2*P),T[2*A+2*P+1]+=N*H,w(T,2*A+2*P+1),T[2*A+2*P+1]+=C*F,w(T,2*A+2*P+1),T[2*A+2*P+2]+=N*F,w(T,2*A+2*P+2)}for(A=0;A<v;A++)T[A]=T[2*A+1]<<16|T[2*A];for(A=v;A<2*v;A++)T[A]=0;return new o(T,0)};function w(I,v){for(;(I[v]&65535)!=I[v];)I[v+1]+=I[v]>>>16,I[v]&=65535,v++}function S(I,v){this.g=I,this.h=v}function O(I,v){if(R(v))throw Error("division by zero");if(R(I))return new S(f,f);if(x(I))return v=O(b(I),v),new S(b(v.g),b(v.h));if(x(v))return v=O(I,b(v)),new S(b(v.g),v.h);if(30<I.g.length){if(x(I)||x(v))throw Error("slowDivide_ only works with positive integers.");for(var T=g,A=v;0>=A.l(I);)T=M(T),A=M(A);var P=L(T,1),N=L(A,1);for(A=L(A,2),T=L(T,2);!R(A);){var C=N.add(A);0>=C.l(I)&&(P=P.add(T),N=C),A=L(A,1),T=L(T,1)}return v=E(I,P.j(v)),new S(P,v)}for(P=f;0<=I.l(v);){for(T=Math.max(1,Math.floor(I.m()/v.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),N=c(T),C=N.j(v);x(C)||0<C.l(I);)T-=A,N=c(T),C=N.j(v);R(N)&&(N=g),P=P.add(N),I=E(I,C)}return new S(P,I)}t.A=function(I){return O(this,I).h},t.and=function(I){for(var v=Math.max(this.g.length,I.g.length),T=[],A=0;A<v;A++)T[A]=this.i(A)&I.i(A);return new o(T,this.h&I.h)},t.or=function(I){for(var v=Math.max(this.g.length,I.g.length),T=[],A=0;A<v;A++)T[A]=this.i(A)|I.i(A);return new o(T,this.h|I.h)},t.xor=function(I){for(var v=Math.max(this.g.length,I.g.length),T=[],A=0;A<v;A++)T[A]=this.i(A)^I.i(A);return new o(T,this.h^I.h)};function M(I){for(var v=I.g.length+1,T=[],A=0;A<v;A++)T[A]=I.i(A)<<1|I.i(A-1)>>>31;return new o(T,I.h)}function L(I,v){var T=v>>5;v%=32;for(var A=I.g.length-T,P=[],N=0;N<A;N++)P[N]=0<v?I.i(N+T)>>>v|I.i(N+T+1)<<32-v:I.i(N+T);return new o(P,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Rk=o}).apply(typeof Kw<"u"?Kw:typeof self<"u"?self:typeof window<"u"?window:{});var Vu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ck,Ak,Ra,Pk,cc,sm,bk,Nk,xk;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,h,p){return u==Array.prototype||u==Object.prototype||(u[h]=p.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vu=="object"&&Vu];for(var h=0;h<u.length;++h){var p=u[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(u,h){if(h)e:{var p=r;u=u.split(".");for(var _=0;_<u.length-1;_++){var D=u[_];if(!(D in p))break e;p=p[D]}u=u[u.length-1],_=p[u],h=h(_),h!=_&&h!=null&&e(p,u,{configurable:!0,writable:!0,value:h})}}function s(u,h){u instanceof String&&(u+="");var p=0,_=!1,D={next:function(){if(!_&&p<u.length){var j=p++;return{value:h(j,u[j]),done:!1}}return _=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(u){return u||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(u){var h=typeof u;return h=h!="object"?h:u?Array.isArray(u)?"array":h:"null",h=="array"||h=="object"&&typeof u.length=="number"}function c(u){var h=typeof u;return h=="object"&&u!=null||h=="function"}function d(u,h,p){return u.call.apply(u.bind,arguments)}function f(u,h,p){if(!u)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,_),u.apply(h,D)}}return function(){return u.apply(h,arguments)}}function g(u,h,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,g.apply(null,arguments)}function k(u,h){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),u.apply(this,_)}}function R(u,h){function p(){}p.prototype=h.prototype,u.aa=h.prototype,u.prototype=new p,u.prototype.constructor=u,u.Qb=function(_,D,j){for(var W=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)W[ye-2]=arguments[ye];return h.prototype[D].apply(_,W)}}function x(u){const h=u.length;if(0<h){const p=Array(h);for(let _=0;_<h;_++)p[_]=u[_];return p}return[]}function b(u,h){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(l(_)){const D=u.length||0,j=_.length||0;u.length=D+j;for(let W=0;W<j;W++)u[D+W]=_[W]}else u.push(_)}}class E{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function w(u){return/^[\s\xa0]*$/.test(u)}function S(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function O(u){return O[" "](u),u}O[" "]=function(){};var M=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function L(u,h,p){for(const _ in u)h.call(p,u[_],_,u)}function I(u,h){for(const p in u)h.call(void 0,u[p],p,u)}function v(u){const h={};for(const p in u)h[p]=u[p];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(u,h){let p,_;for(let D=1;D<arguments.length;D++){_=arguments[D];for(p in _)u[p]=_[p];for(let j=0;j<T.length;j++)p=T[j],Object.prototype.hasOwnProperty.call(_,p)&&(u[p]=_[p])}}function P(u){var h=1;u=u.split(":");const p=[];for(;0<h&&u.length;)p.push(u.shift()),h--;return u.length&&p.push(u.join(":")),p}function N(u){a.setTimeout(()=>{throw u},0)}function C(){var u=K;let h=null;return u.g&&(h=u.g,u.g=u.g.next,u.g||(u.h=null),h.next=null),h}class F{constructor(){this.h=this.g=null}add(h,p){const _=H.get();_.set(h,p),this.h?this.h.next=_:this.g=_,this.h=_}}var H=new E(()=>new ee,u=>u.reset());class ee{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Z,V=!1,K=new F,G=()=>{const u=a.Promise.resolve(void 0);Z=()=>{u.then(oe)}};var oe=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(p){N(p)}var h=H;h.j(u),100>h.h&&(h.h++,u.next=h.g,h.g=u)}V=!1};function ne(){this.s=this.s,this.C=this.C}ne.prototype.s=!1,ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ce(u,h){this.type=u,this.g=this.target=h,this.defaultPrevented=!1}ce.prototype.h=function(){this.defaultPrevented=!0};var Ne=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,h=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return u}();function de(u,h){if(ce.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var p=this.type=u.type,_=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=h,h=u.relatedTarget){if(M){e:{try{O(h.nodeName);var D=!0;break e}catch{}D=!1}D||(h=null)}}else p=="mouseover"?h=u.fromElement:p=="mouseout"&&(h=u.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Ve[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&de.aa.h.call(this)}}R(de,ce);var Ve={2:"touch",3:"pen",4:"mouse"};de.prototype.h=function(){de.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var pt="closure_listenable_"+(1e6*Math.random()|0),fn=0;function Qn(u,h,p,_,D){this.listener=u,this.proxy=null,this.src=h,this.type=p,this.capture=!!_,this.ha=D,this.key=++fn,this.da=this.fa=!1}function bn(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Nn(u){this.src=u,this.g={},this.h=0}Nn.prototype.add=function(u,h,p,_,D){var j=u.toString();u=this.g[j],u||(u=this.g[j]=[],this.h++);var W=xn(u,h,_,D);return-1<W?(h=u[W],p||(h.fa=!1)):(h=new Qn(h,this.src,j,!!_,D),h.fa=p,u.push(h)),h};function Rr(u,h){var p=h.type;if(p in u.g){var _=u.g[p],D=Array.prototype.indexOf.call(_,h,void 0),j;(j=0<=D)&&Array.prototype.splice.call(_,D,1),j&&(bn(h),u.g[p].length==0&&(delete u.g[p],u.h--))}}function xn(u,h,p,_){for(var D=0;D<u.length;++D){var j=u[D];if(!j.da&&j.listener==h&&j.capture==!!p&&j.ha==_)return D}return-1}var On="closure_lm_"+(1e6*Math.random()|0),ve={};function Cr(u,h,p,_,D){if(Array.isArray(h)){for(var j=0;j<h.length;j++)Cr(u,h[j],p,_,D);return null}return p=Bo(p),u&&u[pt]?u.K(h,p,c(_)?!!_.capture:!!_,D):Ar(u,h,p,!1,_,D)}function Ar(u,h,p,_,D,j){if(!h)throw Error("Invalid event type");var W=c(D)?!!D.capture:!!D,ye=vs(u);if(ye||(u[On]=ye=new Nn(u)),p=ye.add(h,p,_,W,j),p.proxy)return p;if(_=Ah(),p.proxy=_,_.src=u,_.listener=p,u.addEventListener)Ne||(D=W),D===void 0&&(D=!1),u.addEventListener(h.toString(),_,D);else if(u.attachEvent)u.attachEvent(Si(h.toString()),_);else if(u.addListener&&u.removeListener)u.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Ah(){function u(p){return h.call(u.src,u.listener,p)}const h=nu;return u}function tu(u,h,p,_,D){if(Array.isArray(h))for(var j=0;j<h.length;j++)tu(u,h[j],p,_,D);else _=c(_)?!!_.capture:!!_,p=Bo(p),u&&u[pt]?(u=u.i,h=String(h).toString(),h in u.g&&(j=u.g[h],p=xn(j,p,_,D),-1<p&&(bn(j[p]),Array.prototype.splice.call(j,p,1),j.length==0&&(delete u.g[h],u.h--)))):u&&(u=vs(u))&&(h=u.g[h.toString()],u=-1,h&&(u=xn(h,p,_,D)),(p=-1<u?h[u]:null)&&pn(p))}function pn(u){if(typeof u!="number"&&u&&!u.da){var h=u.src;if(h&&h[pt])Rr(h.i,u);else{var p=u.type,_=u.proxy;h.removeEventListener?h.removeEventListener(p,_,u.capture):h.detachEvent?h.detachEvent(Si(p),_):h.addListener&&h.removeListener&&h.removeListener(_),(p=vs(h))?(Rr(p,u),p.h==0&&(p.src=null,h[On]=null)):bn(u)}}}function Si(u){return u in ve?ve[u]:ve[u]="on"+u}function nu(u,h){if(u.da)u=!0;else{h=new de(h,this);var p=u.listener,_=u.ha||u.src;u.fa&&pn(u),u=p.call(_,h)}return u}function vs(u){return u=u[On],u instanceof Nn?u:null}var ki="__closure_events_fn_"+(1e9*Math.random()>>>0);function Bo(u){return typeof u=="function"?u:(u[ki]||(u[ki]=function(h){return u.handleEvent(h)}),u[ki])}function qe(){ne.call(this),this.i=new Nn(this),this.M=this,this.F=null}R(qe,ne),qe.prototype[pt]=!0,qe.prototype.removeEventListener=function(u,h,p,_){tu(this,u,h,p,_)};function Ye(u,h){var p,_=u.F;if(_)for(p=[];_;_=_.F)p.push(_);if(u=u.M,_=h.type||h,typeof h=="string")h=new ce(h,u);else if(h instanceof ce)h.target=h.target||u;else{var D=h;h=new ce(_,u),A(h,D)}if(D=!0,p)for(var j=p.length-1;0<=j;j--){var W=h.g=p[j];D=Ri(W,_,!0,h)&&D}if(W=h.g=u,D=Ri(W,_,!0,h)&&D,D=Ri(W,_,!1,h)&&D,p)for(j=0;j<p.length;j++)W=h.g=p[j],D=Ri(W,_,!1,h)&&D}qe.prototype.N=function(){if(qe.aa.N.call(this),this.i){var u=this.i,h;for(h in u.g){for(var p=u.g[h],_=0;_<p.length;_++)bn(p[_]);delete u.g[h],u.h--}}this.F=null},qe.prototype.K=function(u,h,p,_){return this.i.add(String(u),h,!1,p,_)},qe.prototype.L=function(u,h,p,_){return this.i.add(String(u),h,!0,p,_)};function Ri(u,h,p,_){if(h=u.i.g[String(h)],!h)return!0;h=h.concat();for(var D=!0,j=0;j<h.length;++j){var W=h[j];if(W&&!W.da&&W.capture==p){var ye=W.listener,ot=W.ha||W.src;W.fa&&Rr(u.i,W),D=ye.call(ot,_)!==!1&&D}}return D&&!_.defaultPrevented}function Gv(u,h,p){if(typeof u=="function")p&&(u=g(u,p));else if(u&&typeof u.handleEvent=="function")u=g(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(u,h||0)}function Kv(u){u.g=Gv(()=>{u.g=null,u.i&&(u.i=!1,Kv(u))},u.l);const h=u.h;u.h=null,u.m.apply(null,h)}class EA extends ne{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Kv(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zo(u){ne.call(this),this.h=u,this.g={}}R(zo,ne);var Qv=[];function Yv(u){L(u.g,function(h,p){this.g.hasOwnProperty(p)&&pn(h)},u),u.g={}}zo.prototype.N=function(){zo.aa.N.call(this),Yv(this)},zo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ph=a.JSON.stringify,IA=a.JSON.parse,TA=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function bh(){}bh.prototype.h=null;function Jv(u){return u.h||(u.h=u.i())}function Xv(){}var Wo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Nh(){ce.call(this,"d")}R(Nh,ce);function xh(){ce.call(this,"c")}R(xh,ce);var Ci={},Zv=null;function ru(){return Zv=Zv||new qe}Ci.La="serverreachability";function ey(u){ce.call(this,Ci.La,u)}R(ey,ce);function Ho(u){const h=ru();Ye(h,new ey(h))}Ci.STAT_EVENT="statevent";function ty(u,h){ce.call(this,Ci.STAT_EVENT,u),this.stat=h}R(ty,ce);function Rt(u){const h=ru();Ye(h,new ty(h,u))}Ci.Ma="timingevent";function ny(u,h){ce.call(this,Ci.Ma,u),this.size=h}R(ny,ce);function qo(u,h){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},h)}function Go(){this.g=!0}Go.prototype.xa=function(){this.g=!1};function SA(u,h,p,_,D,j){u.info(function(){if(u.g)if(j)for(var W="",ye=j.split("&"),ot=0;ot<ye.length;ot++){var fe=ye[ot].split("=");if(1<fe.length){var mt=fe[0];fe=fe[1];var gt=mt.split("_");W=2<=gt.length&&gt[1]=="type"?W+(mt+"="+fe+"&"):W+(mt+"=redacted&")}}else W=null;else W=j;return"XMLHTTP REQ ("+_+") [attempt "+D+"]: "+h+`
`+p+`
`+W})}function kA(u,h,p,_,D,j,W){u.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+D+"]: "+h+`
`+p+`
`+j+" "+W})}function ys(u,h,p,_){u.info(function(){return"XMLHTTP TEXT ("+h+"): "+CA(u,p)+(_?" "+_:"")})}function RA(u,h){u.info(function(){return"TIMEOUT: "+h})}Go.prototype.info=function(){};function CA(u,h){if(!u.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(u=0;u<p.length;u++)if(Array.isArray(p[u])){var _=p[u];if(!(2>_.length)){var D=_[1];if(Array.isArray(D)&&!(1>D.length)){var j=D[0];if(j!="noop"&&j!="stop"&&j!="close")for(var W=1;W<D.length;W++)D[W]=""}}}}return Ph(p)}catch{return h}}var iu={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ry={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Oh;function su(){}R(su,bh),su.prototype.g=function(){return new XMLHttpRequest},su.prototype.i=function(){return{}},Oh=new su;function Pr(u,h,p,_){this.j=u,this.i=h,this.l=p,this.R=_||1,this.U=new zo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new iy}function iy(){this.i=null,this.g="",this.h=!1}var sy={},Dh={};function Lh(u,h,p){u.L=1,u.v=uu(Yn(h)),u.m=p,u.P=!0,oy(u,null)}function oy(u,h){u.F=Date.now(),ou(u),u.A=Yn(u.v);var p=u.A,_=u.R;Array.isArray(_)||(_=[String(_)]),wy(p.i,"t",_),u.C=0,p=u.j.J,u.h=new iy,u.g=Vy(u.j,p?h:null,!u.m),0<u.O&&(u.M=new EA(g(u.Y,u,u.g),u.O)),h=u.U,p=u.g,_=u.ca;var D="readystatechange";Array.isArray(D)||(D&&(Qv[0]=D.toString()),D=Qv);for(var j=0;j<D.length;j++){var W=Cr(p,D[j],_||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=u.H?v(u.H):{},u.m?(u.u||(u.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,h)):(u.u="GET",u.g.ea(u.A,u.u,null,h)),Ho(),SA(u.i,u.u,u.A,u.l,u.R,u.m)}Pr.prototype.ca=function(u){u=u.target;const h=this.M;h&&Jn(u)==3?h.j():this.Y(u)},Pr.prototype.Y=function(u){try{if(u==this.g)e:{const gt=Jn(this.g);var h=this.g.Ba();const Es=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||Cy(this.g)))){this.J||gt!=4||h==7||(h==8||0>=Es?Ho(3):Ho(2)),Mh(this);var p=this.g.Z();this.X=p;t:if(ay(this)){var _=Cy(this.g);u="";var D=_.length,j=Jn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ai(this),Ko(this);var W="";break t}this.h.i=new a.TextDecoder}for(h=0;h<D;h++)this.h.h=!0,u+=this.h.i.decode(_[h],{stream:!(j&&h==D-1)});_.length=0,this.h.g+=u,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=p==200,kA(this.i,this.u,this.A,this.l,this.R,gt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var ye,ot=this.g;if((ye=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(ye)){var fe=ye;break t}}fe=null}if(p=fe)ys(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,jh(this,p);else{this.o=!1,this.s=3,Rt(12),Ai(this),Ko(this);break e}}if(this.P){p=!0;let mn;for(;!this.J&&this.C<W.length;)if(mn=AA(this,W),mn==Dh){gt==4&&(this.s=4,Rt(14),p=!1),ys(this.i,this.l,null,"[Incomplete Response]");break}else if(mn==sy){this.s=4,Rt(15),ys(this.i,this.l,W,"[Invalid Chunk]"),p=!1;break}else ys(this.i,this.l,mn,null),jh(this,mn);if(ay(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||W.length!=0||this.h.h||(this.s=1,Rt(16),p=!1),this.o=this.o&&p,!p)ys(this.i,this.l,W,"[Invalid Chunked Response]"),Ai(this),Ko(this);else if(0<W.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),zh(mt),mt.M=!0,Rt(11))}}else ys(this.i,this.l,W,null),jh(this,W);gt==4&&Ai(this),this.o&&!this.J&&(gt==4?Dy(this.j,this):(this.o=!1,ou(this)))}else HA(this.g),p==400&&0<W.indexOf("Unknown SID")?(this.s=3,Rt(12)):(this.s=0,Rt(13)),Ai(this),Ko(this)}}}catch{}finally{}};function ay(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function AA(u,h){var p=u.C,_=h.indexOf(`
`,p);return _==-1?Dh:(p=Number(h.substring(p,_)),isNaN(p)?sy:(_+=1,_+p>h.length?Dh:(h=h.slice(_,_+p),u.C=_+p,h)))}Pr.prototype.cancel=function(){this.J=!0,Ai(this)};function ou(u){u.S=Date.now()+u.I,ly(u,u.I)}function ly(u,h){if(u.B!=null)throw Error("WatchDog timer not null");u.B=qo(g(u.ba,u),h)}function Mh(u){u.B&&(a.clearTimeout(u.B),u.B=null)}Pr.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(RA(this.i,this.A),this.L!=2&&(Ho(),Rt(17)),Ai(this),this.s=2,Ko(this)):ly(this,this.S-u)};function Ko(u){u.j.G==0||u.J||Dy(u.j,u)}function Ai(u){Mh(u);var h=u.M;h&&typeof h.ma=="function"&&h.ma(),u.M=null,Yv(u.U),u.g&&(h=u.g,u.g=null,h.abort(),h.ma())}function jh(u,h){try{var p=u.j;if(p.G!=0&&(p.g==u||Vh(p.h,u))){if(!u.K&&Vh(p.h,u)&&p.G==3){try{var _=p.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var D=_;if(D[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<u.F)pu(p),hu(p);else break e;Bh(p),Rt(18)}}else p.za=D[1],0<p.za-p.T&&37500>D[2]&&p.F&&p.v==0&&!p.C&&(p.C=qo(g(p.Za,p),6e3));if(1>=dy(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else bi(p,11)}else if((u.K||p.g==u)&&pu(p),!w(h))for(D=p.Da.g.parse(h),h=0;h<D.length;h++){let fe=D[h];if(p.T=fe[0],fe=fe[1],p.G==2)if(fe[0]=="c"){p.K=fe[1],p.ia=fe[2];const mt=fe[3];mt!=null&&(p.la=mt,p.j.info("VER="+p.la));const gt=fe[4];gt!=null&&(p.Aa=gt,p.j.info("SVER="+p.Aa));const Es=fe[5];Es!=null&&typeof Es=="number"&&0<Es&&(_=1.5*Es,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const mn=u.g;if(mn){const gu=mn.g?mn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(gu){var j=_.h;j.g||gu.indexOf("spdy")==-1&&gu.indexOf("quic")==-1&&gu.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Fh(j,j.h),j.h=null))}if(_.D){const Wh=mn.g?mn.g.getResponseHeader("X-HTTP-Session-Id"):null;Wh&&(_.ya=Wh,Ee(_.I,_.D,Wh))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-u.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var W=u;if(_.qa=jy(_,_.J?_.ia:null,_.W),W.K){hy(_.h,W);var ye=W,ot=_.L;ot&&(ye.I=ot),ye.B&&(Mh(ye),ou(ye)),_.g=W}else xy(_);0<p.i.length&&fu(p)}else fe[0]!="stop"&&fe[0]!="close"||bi(p,7);else p.G==3&&(fe[0]=="stop"||fe[0]=="close"?fe[0]=="stop"?bi(p,7):$h(p):fe[0]!="noop"&&p.l&&p.l.ta(fe),p.v=0)}}Ho(4)}catch{}}var PA=class{constructor(u,h){this.g=u,this.map=h}};function uy(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function cy(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function dy(u){return u.h?1:u.g?u.g.size:0}function Vh(u,h){return u.h?u.h==h:u.g?u.g.has(h):!1}function Fh(u,h){u.g?u.g.add(h):u.h=h}function hy(u,h){u.h&&u.h==h?u.h=null:u.g&&u.g.has(h)&&u.g.delete(h)}uy.prototype.cancel=function(){if(this.i=fy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function fy(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let h=u.i;for(const p of u.g.values())h=h.concat(p.D);return h}return x(u.i)}function bA(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var h=[],p=u.length,_=0;_<p;_++)h.push(u[_]);return h}h=[],p=0;for(_ in u)h[p++]=u[_];return h}function NA(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var h=[];u=u.length;for(var p=0;p<u;p++)h.push(p);return h}h=[],p=0;for(const _ in u)h[p++]=_;return h}}}function py(u,h){if(u.forEach&&typeof u.forEach=="function")u.forEach(h,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,h,void 0);else for(var p=NA(u),_=bA(u),D=_.length,j=0;j<D;j++)h.call(void 0,_[j],p&&p[j],u)}var my=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xA(u,h){if(u){u=u.split("&");for(var p=0;p<u.length;p++){var _=u[p].indexOf("="),D=null;if(0<=_){var j=u[p].substring(0,_);D=u[p].substring(_+1)}else j=u[p];h(j,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Pi(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Pi){this.h=u.h,au(this,u.j),this.o=u.o,this.g=u.g,lu(this,u.s),this.l=u.l;var h=u.i,p=new Jo;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),gy(this,p),this.m=u.m}else u&&(h=String(u).match(my))?(this.h=!1,au(this,h[1]||"",!0),this.o=Qo(h[2]||""),this.g=Qo(h[3]||"",!0),lu(this,h[4]),this.l=Qo(h[5]||"",!0),gy(this,h[6]||"",!0),this.m=Qo(h[7]||"")):(this.h=!1,this.i=new Jo(null,this.h))}Pi.prototype.toString=function(){var u=[],h=this.j;h&&u.push(Yo(h,vy,!0),":");var p=this.g;return(p||h=="file")&&(u.push("//"),(h=this.o)&&u.push(Yo(h,vy,!0),"@"),u.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&u.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&u.push("/"),u.push(Yo(p,p.charAt(0)=="/"?LA:DA,!0))),(p=this.i.toString())&&u.push("?",p),(p=this.m)&&u.push("#",Yo(p,jA)),u.join("")};function Yn(u){return new Pi(u)}function au(u,h,p){u.j=p?Qo(h,!0):h,u.j&&(u.j=u.j.replace(/:$/,""))}function lu(u,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);u.s=h}else u.s=null}function gy(u,h,p){h instanceof Jo?(u.i=h,VA(u.i,u.h)):(p||(h=Yo(h,MA)),u.i=new Jo(h,u.h))}function Ee(u,h,p){u.i.set(h,p)}function uu(u){return Ee(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Qo(u,h){return u?h?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Yo(u,h,p){return typeof u=="string"?(u=encodeURI(u).replace(h,OA),p&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function OA(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var vy=/[#\/\?@]/g,DA=/[#\?:]/g,LA=/[#\?]/g,MA=/[#\?@]/g,jA=/#/g;function Jo(u,h){this.h=this.g=null,this.i=u||null,this.j=!!h}function br(u){u.g||(u.g=new Map,u.h=0,u.i&&xA(u.i,function(h,p){u.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=Jo.prototype,t.add=function(u,h){br(this),this.i=null,u=_s(this,u);var p=this.g.get(u);return p||this.g.set(u,p=[]),p.push(h),this.h+=1,this};function yy(u,h){br(u),h=_s(u,h),u.g.has(h)&&(u.i=null,u.h-=u.g.get(h).length,u.g.delete(h))}function _y(u,h){return br(u),h=_s(u,h),u.g.has(h)}t.forEach=function(u,h){br(this),this.g.forEach(function(p,_){p.forEach(function(D){u.call(h,D,_,this)},this)},this)},t.na=function(){br(this);const u=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let _=0;_<h.length;_++){const D=u[_];for(let j=0;j<D.length;j++)p.push(h[_])}return p},t.V=function(u){br(this);let h=[];if(typeof u=="string")_y(this,u)&&(h=h.concat(this.g.get(_s(this,u))));else{u=Array.from(this.g.values());for(let p=0;p<u.length;p++)h=h.concat(u[p])}return h},t.set=function(u,h){return br(this),this.i=null,u=_s(this,u),_y(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[h]),this.h+=1,this},t.get=function(u,h){return u?(u=this.V(u),0<u.length?String(u[0]):h):h};function wy(u,h,p){yy(u,h),0<p.length&&(u.i=null,u.g.set(_s(u,h),x(p)),u.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var _=h[p];const j=encodeURIComponent(String(_)),W=this.V(_);for(_=0;_<W.length;_++){var D=j;W[_]!==""&&(D+="="+encodeURIComponent(String(W[_]))),u.push(D)}}return this.i=u.join("&")};function _s(u,h){return h=String(h),u.j&&(h=h.toLowerCase()),h}function VA(u,h){h&&!u.j&&(br(u),u.i=null,u.g.forEach(function(p,_){var D=_.toLowerCase();_!=D&&(yy(this,_),wy(this,D,p))},u)),u.j=h}function FA(u,h){const p=new Go;if(a.Image){const _=new Image;_.onload=k(Nr,p,"TestLoadImage: loaded",!0,h,_),_.onerror=k(Nr,p,"TestLoadImage: error",!1,h,_),_.onabort=k(Nr,p,"TestLoadImage: abort",!1,h,_),_.ontimeout=k(Nr,p,"TestLoadImage: timeout",!1,h,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=u}else h(!1)}function UA(u,h){const p=new Go,_=new AbortController,D=setTimeout(()=>{_.abort(),Nr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(u,{signal:_.signal}).then(j=>{clearTimeout(D),j.ok?Nr(p,"TestPingServer: ok",!0,h):Nr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),Nr(p,"TestPingServer: error",!1,h)})}function Nr(u,h,p,_,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),_(p)}catch{}}function $A(){this.g=new TA}function BA(u,h,p){const _=p||"";try{py(u,function(D,j){let W=D;c(D)&&(W=Ph(D)),h.push(_+j+"="+encodeURIComponent(W))})}catch(D){throw h.push(_+"type="+encodeURIComponent("_badmap")),D}}function Xo(u){this.l=u.Ub||null,this.j=u.eb||!1}R(Xo,bh),Xo.prototype.g=function(){return new cu(this.l,this.j)},Xo.prototype.i=function(u){return function(){return u}}({});function cu(u,h){qe.call(this),this.D=u,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(cu,qe),t=cu.prototype,t.open=function(u,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=h,this.readyState=1,ea(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(h.body=u),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zo(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,ea(this)),this.g&&(this.readyState=3,ea(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ey(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ey(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var h=u.value?u.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!u.done}))&&(this.response=this.responseText+=h)}u.done?Zo(this):ea(this),this.readyState==3&&Ey(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,Zo(this))},t.Qa=function(u){this.g&&(this.response=u,Zo(this))},t.ga=function(){this.g&&Zo(this)};function Zo(u){u.readyState=4,u.l=null,u.j=null,u.v=null,ea(u)}t.setRequestHeader=function(u,h){this.u.append(u,h)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,u.push(p[0]+": "+p[1]),p=h.next();return u.join(`\r
`)};function ea(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(cu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Iy(u){let h="";return L(u,function(p,_){h+=_,h+=":",h+=p,h+=`\r
`}),h}function Uh(u,h,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=Iy(p),typeof u=="string"?p!=null&&encodeURIComponent(String(p)):Ee(u,h,p))}function xe(u){qe.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(xe,qe);var zA=/^https?$/i,WA=["POST","PUT"];t=xe.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,h,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);h=h?h.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Oh.g(),this.v=this.o?Jv(this.o):Jv(Oh),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(u),!0),this.B=!1}catch(j){Ty(this,j);return}if(u=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var D in _)p.set(D,_[D]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const j of _.keys())p.set(j,_.get(j));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(j=>j.toLowerCase()=="content-type"),D=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(WA,h,void 0))||_||D||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,W]of p)this.g.setRequestHeader(j,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ry(this),this.u=!0,this.g.send(u),this.u=!1}catch(j){Ty(this,j)}};function Ty(u,h){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=h,u.m=5,Sy(u),du(u)}function Sy(u){u.A||(u.A=!0,Ye(u,"complete"),Ye(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Ye(this,"complete"),Ye(this,"abort"),du(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),du(this,!0)),xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ky(this):this.bb())},t.bb=function(){ky(this)};function ky(u){if(u.h&&typeof o<"u"&&(!u.v[1]||Jn(u)!=4||u.Z()!=2)){if(u.u&&Jn(u)==4)Gv(u.Ea,0,u);else if(Ye(u,"readystatechange"),Jn(u)==4){u.h=!1;try{const W=u.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var _;if(_=W===0){var D=String(u.D).match(my)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),_=!zA.test(D?D.toLowerCase():"")}p=_}if(p)Ye(u,"complete"),Ye(u,"success");else{u.m=6;try{var j=2<Jn(u)?u.g.statusText:""}catch{j=""}u.l=j+" ["+u.Z()+"]",Sy(u)}}finally{du(u)}}}}function du(u,h){if(u.g){Ry(u);const p=u.g,_=u.v[0]?()=>{}:null;u.g=null,u.v=null,h||Ye(u,"ready");try{p.onreadystatechange=_}catch{}}}function Ry(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function Jn(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<Jn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var h=this.g.responseText;return u&&h.indexOf(u)==0&&(h=h.substring(u.length)),IA(h)}};function Cy(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function HA(u){const h={};u=(u.g&&2<=Jn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<u.length;_++){if(w(u[_]))continue;var p=P(u[_]);const D=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const j=h[D]||[];h[D]=j,j.push(p)}I(h,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ta(u,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[u]||h}function Ay(u){this.Aa=0,this.i=[],this.j=new Go,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ta("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ta("baseRetryDelayMs",5e3,u),this.cb=ta("retryDelaySeedMs",1e4,u),this.Wa=ta("forwardChannelMaxRetries",2,u),this.wa=ta("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new uy(u&&u.concurrentRequestLimit),this.Da=new $A,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ay.prototype,t.la=8,t.G=1,t.connect=function(u,h,p,_){Rt(0),this.W=u,this.H=h||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=jy(this,null,this.W),fu(this)};function $h(u){if(Py(u),u.G==3){var h=u.U++,p=Yn(u.I);if(Ee(p,"SID",u.K),Ee(p,"RID",h),Ee(p,"TYPE","terminate"),na(u,p),h=new Pr(u,u.j,h),h.L=2,h.v=uu(Yn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.v,p=!0),p||(h.g=Vy(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ou(h)}My(u)}function hu(u){u.g&&(zh(u),u.g.cancel(),u.g=null)}function Py(u){hu(u),u.u&&(a.clearTimeout(u.u),u.u=null),pu(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function fu(u){if(!cy(u.h)&&!u.s){u.s=!0;var h=u.Ga;Z||G(),V||(Z(),V=!0),K.add(h,u),u.B=0}}function qA(u,h){return dy(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=h.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=qo(g(u.Ga,u,h),Ly(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const D=new Pr(this,this.j,u);let j=this.o;if(this.S&&(j?(j=v(j),A(j,this.S)):j=this.S),this.m!==null||this.O||(D.H=j,j=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Ny(this,D,h),p=Yn(this.I),Ee(p,"RID",u),Ee(p,"CVER",22),this.D&&Ee(p,"X-HTTP-Session-Id",this.D),na(this,p),j&&(this.O?h="headers="+encodeURIComponent(String(Iy(j)))+"&"+h:this.m&&Uh(p,this.m,j)),Fh(this.h,D),this.Ua&&Ee(p,"TYPE","init"),this.P?(Ee(p,"$req",h),Ee(p,"SID","null"),D.T=!0,Lh(D,p,null)):Lh(D,p,h),this.G=2}}else this.G==3&&(u?by(this,u):this.i.length==0||cy(this.h)||by(this))};function by(u,h){var p;h?p=h.l:p=u.U++;const _=Yn(u.I);Ee(_,"SID",u.K),Ee(_,"RID",p),Ee(_,"AID",u.T),na(u,_),u.m&&u.o&&Uh(_,u.m,u.o),p=new Pr(u,u.j,p,u.B+1),u.m===null&&(p.H=u.o),h&&(u.i=h.D.concat(u.i)),h=Ny(u,p,1e3),p.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Fh(u.h,p),Lh(p,_,h)}function na(u,h){u.H&&L(u.H,function(p,_){Ee(h,_,p)}),u.l&&py({},function(p,_){Ee(h,_,p)})}function Ny(u,h,p){p=Math.min(u.i.length,p);var _=u.l?g(u.l.Na,u.l,u):null;e:{var D=u.i;let j=-1;for(;;){const W=["count="+p];j==-1?0<p?(j=D[0].g,W.push("ofs="+j)):j=0:W.push("ofs="+j);let ye=!0;for(let ot=0;ot<p;ot++){let fe=D[ot].g;const mt=D[ot].map;if(fe-=j,0>fe)j=Math.max(0,D[ot].g-100),ye=!1;else try{BA(mt,W,"req"+fe+"_")}catch{_&&_(mt)}}if(ye){_=W.join("&");break e}}}return u=u.i.splice(0,p),h.D=u,_}function xy(u){if(!u.g&&!u.u){u.Y=1;var h=u.Fa;Z||G(),V||(Z(),V=!0),K.add(h,u),u.v=0}}function Bh(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=qo(g(u.Fa,u),Ly(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,Oy(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=qo(g(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Rt(10),hu(this),Oy(this))};function zh(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function Oy(u){u.g=new Pr(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var h=Yn(u.qa);Ee(h,"RID","rpc"),Ee(h,"SID",u.K),Ee(h,"AID",u.T),Ee(h,"CI",u.F?"0":"1"),!u.F&&u.ja&&Ee(h,"TO",u.ja),Ee(h,"TYPE","xmlhttp"),na(u,h),u.m&&u.o&&Uh(h,u.m,u.o),u.L&&(u.g.I=u.L);var p=u.g;u=u.ia,p.L=1,p.v=uu(Yn(h)),p.m=null,p.P=!0,oy(p,u)}t.Za=function(){this.C!=null&&(this.C=null,hu(this),Bh(this),Rt(19))};function pu(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function Dy(u,h){var p=null;if(u.g==h){pu(u),zh(u),u.g=null;var _=2}else if(Vh(u.h,h))p=h.D,hy(u.h,h),_=1;else return;if(u.G!=0){if(h.o)if(_==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var D=u.B;_=ru(),Ye(_,new ny(_,p)),fu(u)}else xy(u);else if(D=h.s,D==3||D==0&&0<h.X||!(_==1&&qA(u,h)||_==2&&Bh(u)))switch(p&&0<p.length&&(h=u.h,h.i=h.i.concat(p)),D){case 1:bi(u,5);break;case 4:bi(u,10);break;case 3:bi(u,6);break;default:bi(u,2)}}}function Ly(u,h){let p=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(p*=2),p*h}function bi(u,h){if(u.j.info("Error code "+h),h==2){var p=g(u.fb,u),_=u.Xa;const D=!_;_=new Pi(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||au(_,"https"),uu(_),D?FA(_.toString(),p):UA(_.toString(),p)}else Rt(2);u.G=0,u.l&&u.l.sa(h),My(u),Py(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function My(u){if(u.G=0,u.ka=[],u.l){const h=fy(u.h);(h.length!=0||u.i.length!=0)&&(b(u.ka,h),b(u.ka,u.i),u.h.i.length=0,x(u.i),u.i.length=0),u.l.ra()}}function jy(u,h,p){var _=p instanceof Pi?Yn(p):new Pi(p);if(_.g!="")h&&(_.g=h+"."+_.g),lu(_,_.s);else{var D=a.location;_=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;var j=new Pi(null);_&&au(j,_),h&&(j.g=h),D&&lu(j,D),p&&(j.l=p),_=j}return p=u.D,h=u.ya,p&&h&&Ee(_,p,h),Ee(_,"VER",u.la),na(u,_),_}function Vy(u,h,p){if(h&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=u.Ca&&!u.pa?new xe(new Xo({eb:p})):new xe(u.pa),h.Ha(u.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fy(){}t=Fy.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function mu(){}mu.prototype.g=function(u,h){return new zt(u,h)};function zt(u,h){qe.call(this),this.g=new Ay(h),this.l=u,this.h=h&&h.messageUrlParams||null,u=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(u?u["X-WebChannel-Content-Type"]=h.messageContentType:u={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(u?u["X-WebChannel-Client-Profile"]=h.va:u={"X-WebChannel-Client-Profile":h.va}),this.g.S=u,(u=h&&h.Sb)&&!w(u)&&(this.g.m=u),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!w(h)&&(this.g.D=h,u=this.h,u!==null&&h in u&&(u=this.h,h in u&&delete u[h])),this.j=new ws(this)}R(zt,qe),zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},zt.prototype.close=function(){$h(this.g)},zt.prototype.o=function(u){var h=this.g;if(typeof u=="string"){var p={};p.__data__=u,u=p}else this.u&&(p={},p.__data__=Ph(u),u=p);h.i.push(new PA(h.Ya++,u)),h.G==3&&fu(h)},zt.prototype.N=function(){this.g.l=null,delete this.j,$h(this.g),delete this.g,zt.aa.N.call(this)};function Uy(u){Nh.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var h=u.__sm__;if(h){e:{for(const p in h){u=p;break e}u=void 0}(this.i=u)&&(u=this.i,h=h!==null&&u in h?h[u]:void 0),this.data=h}else this.data=u}R(Uy,Nh);function $y(){xh.call(this),this.status=1}R($y,xh);function ws(u){this.g=u}R(ws,Fy),ws.prototype.ua=function(){Ye(this.g,"a")},ws.prototype.ta=function(u){Ye(this.g,new Uy(u))},ws.prototype.sa=function(u){Ye(this.g,new $y)},ws.prototype.ra=function(){Ye(this.g,"b")},mu.prototype.createWebChannel=mu.prototype.g,zt.prototype.send=zt.prototype.o,zt.prototype.open=zt.prototype.m,zt.prototype.close=zt.prototype.close,xk=function(){return new mu},Nk=function(){return ru()},bk=Ci,sm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},iu.NO_ERROR=0,iu.TIMEOUT=8,iu.HTTP_ERROR=6,cc=iu,ry.COMPLETE="complete",Pk=ry,Xv.EventType=Wo,Wo.OPEN="a",Wo.CLOSE="b",Wo.ERROR="c",Wo.MESSAGE="d",qe.prototype.listen=qe.prototype.K,Ra=Xv,Ak=Xo,xe.prototype.listenOnce=xe.prototype.L,xe.prototype.getLastError=xe.prototype.Ka,xe.prototype.getLastErrorCode=xe.prototype.Ba,xe.prototype.getStatus=xe.prototype.Z,xe.prototype.getResponseJson=xe.prototype.Oa,xe.prototype.getResponseText=xe.prototype.oa,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Ha,Ck=xe}).apply(typeof Vu<"u"?Vu:typeof self<"u"?self:typeof window<"u"?window:{});const Qw="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}wt.UNAUTHENTICATED=new wt(null),wt.GOOGLE_CREDENTIALS=new wt("google-credentials-uid"),wt.FIRST_PARTY=new wt("first-party-uid"),wt.MOCK_USER=new wt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vo="10.12.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=new bo("@firebase/firestore");function pa(){return as.logLevel}function Q(t,...e){if(as.logLevel<=ie.DEBUG){const n=e.map(rv);as.debug(`Firestore (${Vo}): ${t}`,...n)}}function ls(t,...e){if(as.logLevel<=ie.ERROR){const n=e.map(rv);as.error(`Firestore (${Vo}): ${t}`,...n)}}function ed(t,...e){if(as.logLevel<=ie.WARN){const n=e.map(rv);as.warn(`Firestore (${Vo}): ${t}`,...n)}}function rv(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t="Unexpected state"){const e=`FIRESTORE (${Vo}) INTERNAL ASSERTION FAILED: `+t;throw ls(e),new Error(e)}function st(t,e){t||ae()}function Se(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends He{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(wt.UNAUTHENTICATED))}shutdown(){}}class B2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class z2{constructor(e){this.t=e,this.currentUser=wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Hi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Hi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Hi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(st(typeof r.accessToken=="string"),new Ok(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return st(e===null||typeof e=="string"),new wt(e)}}class W2{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=wt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class H2{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new W2(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class q2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class G2{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(st(typeof n.token=="string"),this.R=n.token,new q2(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=K2(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function _e(t,e){return t<e?-1:t>e?1:0}function mo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new X(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return it.fromMillis(Date.now())}static fromDate(e){return it.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new it(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ce(e)}static min(){return new Ce(new it(0,0))}static max(){return new Ce(new it(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,n,r){n===void 0?n=0:n>e.length&&ae(),r===void 0?r=e.length-n:r>e.length-n&&ae(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Il.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Il?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class De extends Il{construct(e,n,r){return new De(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X(z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new De(n)}static emptyPath(){return new De([])}}const Q2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends Il{construct(e,n,r){return new ct(e,n,r)}static isValidIdentifier(e){return Q2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ct(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new X(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new X(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new X(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new X(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ct(n)}static emptyPath(){return new ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(De.fromString(e))}static fromName(e){return new te(De.fromString(e).popFirst(5))}static empty(){return new te(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new De(e.slice()))}}function Y2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Ce.fromTimestamp(r===1e9?new it(n+1,0):new it(n,r));return new hi(i,te.empty(),e)}function J2(t){return new hi(t.readTime,t.key,-1)}class hi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new hi(Ce.min(),te.empty(),-1)}static max(){return new hi(Ce.max(),te.empty(),-1)}}function X2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=te.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class eV{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lk(t){if(t.code!==z.FAILED_PRECONDITION||t.message!==Z2)throw t;Q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(i=>i?U.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new U((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new U((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function tV(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ah(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Mk.oe=-1;function iv(t){return t==null}function td(t){return t===0&&1/t==-1/0}function nV(t){return typeof t=="number"&&Number.isInteger(t)&&!td(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Wl(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function jk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,n){this.comparator=e,this.root=n||lt.EMPTY}insert(e,n){return new Bt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(e){return new Bt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fu(this.root,e,this.comparator,!0)}}class Fu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class lt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??lt.RED,this.left=i??lt.EMPTY,this.right=s??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new lt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return lt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ae();const e=this.left.check();if(e!==this.right.check())throw ae();return e+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw ae()}get value(){throw ae()}get color(){throw ae()}get left(){throw ae()}get right(){throw ae()}copy(e,n,r,i,s){return this}insert(e,n,r){return new lt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.comparator=e,this.data=new Bt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Jw(this.data.getIterator())}getIteratorFrom(e){return new Jw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof St)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new St(this.comparator);return n.data=e,n}}class Jw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.fields=e,e.sort(ct.comparator)}static empty(){return new Tn([])}unionWith(e){let n=new St(ct.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Tn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return mo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rV extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new rV("Invalid base64 string: "+s):s}}(e);return new gr(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new gr(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gr.EMPTY_BYTE_STRING=new gr("");const iV=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function us(t){if(st(!!t),typeof t=="string"){let e=0;const n=iV.exec(t);if(st(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ut(t.seconds),nanos:ut(t.nanos)}}function ut(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Tl(t){return typeof t=="string"?gr.fromBase64String(t):gr.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Vk(t){const e=t.mapValue.fields.__previous_value__;return sv(e)?Vk(e):e}function nd(t){const e=us(t.mapValue.fields.__local_write_time__.timestampValue);return new it(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sV{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class rd{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new rd("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof rd&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function go(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?sv(t)?4:oV(t)?9007199254740991:10:ae()}function Kn(t,e){if(t===e)return!0;const n=go(t);if(n!==go(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return nd(t).isEqual(nd(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=us(i.timestampValue),a=us(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Tl(i.bytesValue).isEqual(Tl(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ut(i.geoPointValue.latitude)===ut(s.geoPointValue.latitude)&&ut(i.geoPointValue.longitude)===ut(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ut(i.integerValue)===ut(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ut(i.doubleValue),a=ut(s.doubleValue);return o===a?td(o)===td(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return mo(t.arrayValue.values||[],e.arrayValue.values||[],Kn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Yw(o)!==Yw(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Kn(o[l],a[l])))return!1;return!0}(t,e);default:return ae()}}function Sl(t,e){return(t.values||[]).find(n=>Kn(n,e))!==void 0}function vo(t,e){if(t===e)return 0;const n=go(t),r=go(e);if(n!==r)return _e(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ut(s.integerValue||s.doubleValue),l=ut(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Xw(t.timestampValue,e.timestampValue);case 4:return Xw(nd(t),nd(e));case 5:return _e(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Tl(s),l=Tl(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const d=_e(a[c],l[c]);if(d!==0)return d}return _e(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=_e(ut(s.latitude),ut(o.latitude));return a!==0?a:_e(ut(s.longitude),ut(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const d=vo(a[c],l[c]);if(d)return d}return _e(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Uu.mapValue&&o===Uu.mapValue)return 0;if(s===Uu.mapValue)return 1;if(o===Uu.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},d=Object.keys(c);l.sort(),d.sort();for(let f=0;f<l.length&&f<d.length;++f){const g=_e(l[f],d[f]);if(g!==0)return g;const k=vo(a[l[f]],c[d[f]]);if(k!==0)return k}return _e(l.length,d.length)}(t.mapValue,e.mapValue);default:throw ae()}}function Xw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=us(t),r=us(e),i=_e(n.seconds,r.seconds);return i!==0?i:_e(n.nanos,r.nanos)}function yo(t){return om(t)}function om(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=us(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Tl(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return te.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=om(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${om(n.fields[o])}`;return i+"}"}(t.mapValue):ae()}function am(t){return!!t&&"integerValue"in t}function ov(t){return!!t&&"arrayValue"in t}function dc(t){return!!t&&"mapValue"in t}function $a(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Wl(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=$a(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=$a(t.arrayValue.values[n]);return e}return Object.assign({},t)}function oV(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.value=e}static empty(){return new En({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!dc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=$a(n)}setAll(e){let n=ct.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=$a(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());dc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Kn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];dc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Wl(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new En($a(this.value))}}function Fk(t){const e=[];return Wl(t.fields,(n,r)=>{const i=new ct([n]);if(dc(r)){const s=Fk(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Tn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new wn(e,0,Ce.min(),Ce.min(),Ce.min(),En.empty(),0)}static newFoundDocument(e,n,r,i){return new wn(e,1,n,Ce.min(),r,i,0)}static newNoDocument(e,n){return new wn(e,2,n,Ce.min(),Ce.min(),En.empty(),0)}static newUnknownDocument(e,n){return new wn(e,3,n,Ce.min(),Ce.min(),En.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=En.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=En.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof wn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new wn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e,n){this.position=e,this.inclusive=n}}function Zw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=te.comparator(te.fromName(o.referenceValue),n.key):r=vo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function eE(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Kn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,n="asc"){this.field=e,this.dir=n}}function aV(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{}class Ze extends Uk{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new uV(e,n,r):n==="array-contains"?new hV(e,r):n==="in"?new fV(e,r):n==="not-in"?new pV(e,r):n==="array-contains-any"?new mV(e,r):new Ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new cV(e,r):new dV(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(vo(n,this.value)):n!==null&&go(this.value)===go(n)&&this.matchesComparison(vo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fi extends Uk{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new fi(e,n)}matches(e){return $k(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function $k(t){return t.op==="and"}function Bk(t){return lV(t)&&$k(t)}function lV(t){for(const e of t.filters)if(e instanceof fi)return!1;return!0}function lm(t){if(t instanceof Ze)return t.field.canonicalString()+t.op.toString()+yo(t.value);if(Bk(t))return t.filters.map(e=>lm(e)).join(",");{const e=t.filters.map(n=>lm(n)).join(",");return`${t.op}(${e})`}}function zk(t,e){return t instanceof Ze?function(r,i){return i instanceof Ze&&r.op===i.op&&r.field.isEqual(i.field)&&Kn(r.value,i.value)}(t,e):t instanceof fi?function(r,i){return i instanceof fi&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&zk(o,i.filters[a]),!0):!1}(t,e):void ae()}function Wk(t){return t instanceof Ze?function(n){return`${n.field.canonicalString()} ${n.op} ${yo(n.value)}`}(t):t instanceof fi?function(n){return n.op.toString()+" {"+n.getFilters().map(Wk).join(" ,")+"}"}(t):"Filter"}class uV extends Ze{constructor(e,n,r){super(e,n,r),this.key=te.fromName(r.referenceValue)}matches(e){const n=te.comparator(e.key,this.key);return this.matchesComparison(n)}}class cV extends Ze{constructor(e,n){super(e,"in",n),this.keys=Hk("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class dV extends Ze{constructor(e,n){super(e,"not-in",n),this.keys=Hk("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Hk(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>te.fromName(r.referenceValue))}class hV extends Ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ov(n)&&Sl(n.arrayValue,this.value)}}class fV extends Ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Sl(this.value.arrayValue,n)}}class pV extends Ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(Sl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Sl(this.value.arrayValue,n)}}class mV extends Ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ov(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Sl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gV{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function tE(t,e=null,n=[],r=[],i=null,s=null,o=null){return new gV(t,e,n,r,i,s,o)}function av(t){const e=Se(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>lm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),iv(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>yo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>yo(r)).join(",")),e.ue=n}return e.ue}function lv(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!aV(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!zk(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!eE(t.startAt,e.startAt)&&eE(t.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function vV(t,e,n,r,i,s,o,a){return new lh(t,e,n,r,i,s,o,a)}function yV(t){return new lh(t)}function nE(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function _V(t){return t.collectionGroup!==null}function Ba(t){const e=Se(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new St(ct.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new sd(s,r))}),n.has(ct.keyField().canonicalString())||e.ce.push(new sd(ct.keyField(),r))}return e.ce}function qi(t){const e=Se(t);return e.le||(e.le=wV(e,Ba(t))),e.le}function wV(t,e){if(t.limitType==="F")return tE(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new sd(i.field,s)});const n=t.endAt?new id(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new id(t.startAt.position,t.startAt.inclusive):null;return tE(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function um(t,e,n){return new lh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function qk(t,e){return lv(qi(t),qi(e))&&t.limitType===e.limitType}function Gk(t){return`${av(qi(t))}|lt:${t.limitType}`}function ma(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Wk(i)).join(", ")}]`),iv(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>yo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>yo(i)).join(",")),`Target(${r})`}(qi(t))}; limitType=${t.limitType})`}function uv(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):te.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ba(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=Zw(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,Ba(r),i)||r.endAt&&!function(o,a,l){const c=Zw(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,Ba(r),i))}(t,e)}function EV(t){return(e,n)=>{let r=!1;for(const i of Ba(t)){const s=IV(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function IV(t,e,n){const r=t.field.isKeyField()?te.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?vo(l,c):ae()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ae()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Wl(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return jk(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TV=new Bt(te.comparator);function od(){return TV}const Kk=new Bt(te.comparator);function $u(...t){let e=Kk;for(const n of t)e=e.insert(n.key,n);return e}function Qk(t){let e=Kk;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ui(){return za()}function Yk(){return za()}function za(){return new Fo(t=>t.toString(),(t,e)=>t.isEqual(e))}const SV=new Bt(te.comparator),kV=new St(te.comparator);function It(...t){let e=kV;for(const n of t)e=e.add(n);return e}const RV=new St(_e);function CV(){return RV}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jk(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:td(e)?"-0":e}}function Xk(t){return{integerValue:""+t}}function AV(t,e){return nV(e)?Xk(e):Jk(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(){this._=void 0}}function PV(t,e,n){return t instanceof ad?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&sv(s)&&(s=Vk(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof kl?eR(t,e):t instanceof Rl?tR(t,e):function(i,s){const o=Zk(i,s),a=rE(o)+rE(i.Pe);return am(o)&&am(i.Pe)?Xk(a):Jk(i.serializer,a)}(t,e)}function bV(t,e,n){return t instanceof kl?eR(t,e):t instanceof Rl?tR(t,e):n}function Zk(t,e){return t instanceof ld?function(r){return am(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ad extends uh{}class kl extends uh{constructor(e){super(),this.elements=e}}function eR(t,e){const n=nR(e);for(const r of t.elements)n.some(i=>Kn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Rl extends uh{constructor(e){super(),this.elements=e}}function tR(t,e){let n=nR(e);for(const r of t.elements)n=n.filter(i=>!Kn(i,r));return{arrayValue:{values:n}}}class ld extends uh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function rE(t){return ut(t.integerValue||t.doubleValue)}function nR(t){return ov(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function NV(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof kl&&i instanceof kl||r instanceof Rl&&i instanceof Rl?mo(r.elements,i.elements,Kn):r instanceof ld&&i instanceof ld?Kn(r.Pe,i.Pe):r instanceof ad&&i instanceof ad}(t.transform,e.transform)}class xV{constructor(e,n){this.version=e,this.transformResults=n}}class ar{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ar}static exists(e){return new ar(void 0,e)}static updateTime(e){return new ar(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function hc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ch{}function rR(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new sR(t.key,ar.none()):new Hl(t.key,t.data,ar.none());{const n=t.data,r=En.empty();let i=new St(ct.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new gs(t.key,r,new Tn(i.toArray()),ar.none())}}function OV(t,e,n){t instanceof Hl?function(i,s,o){const a=i.value.clone(),l=sE(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof gs?function(i,s,o){if(!hc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=sE(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(iR(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Wa(t,e,n,r){return t instanceof Hl?function(s,o,a,l){if(!hc(s.precondition,o))return a;const c=s.value.clone(),d=oE(s.fieldTransforms,l,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof gs?function(s,o,a,l){if(!hc(s.precondition,o))return a;const c=oE(s.fieldTransforms,l,o),d=o.data;return d.setAll(iR(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return hc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function DV(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Zk(r.transform,i||null);s!=null&&(n===null&&(n=En.empty()),n.set(r.field,s))}return n||null}function iE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&mo(r,i,(s,o)=>NV(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Hl extends ch{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class gs extends ch{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function iR(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function sE(t,e,n){const r=new Map;st(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,bV(o,a,n[i]))}return r}function oE(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,PV(s,o,e))}return r}class sR extends ch{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class LV extends ch{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MV{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&OV(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Wa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Wa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Yk();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=rR(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Ce.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),It())}isEqual(e){return this.batchId===e.batchId&&mo(this.mutations,e.mutations,(n,r)=>iE(n,r))&&mo(this.baseMutations,e.baseMutations,(n,r)=>iE(n,r))}}class cv{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){st(e.mutations.length===r.length);let i=function(){return SV}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new cv(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jV{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be,ue;function VV(t){switch(t){default:return ae();case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0}}function FV(t){if(t===void 0)return ls("GRPC error has no .code"),z.UNKNOWN;switch(t){case Be.OK:return z.OK;case Be.CANCELLED:return z.CANCELLED;case Be.UNKNOWN:return z.UNKNOWN;case Be.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case Be.INTERNAL:return z.INTERNAL;case Be.UNAVAILABLE:return z.UNAVAILABLE;case Be.UNAUTHENTICATED:return z.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case Be.NOT_FOUND:return z.NOT_FOUND;case Be.ALREADY_EXISTS:return z.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return z.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case Be.ABORTED:return z.ABORTED;case Be.OUT_OF_RANGE:return z.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return z.UNIMPLEMENTED;case Be.DATA_LOSS:return z.DATA_LOSS;default:return ae()}}(ue=Be||(Be={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Rk([4294967295,4294967295],0);class UV{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function cm(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $V(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function BV(t,e){return cm(t,e.toTimestamp())}function Zs(t){return st(!!t),Ce.fromTimestamp(function(n){const r=us(n);return new it(r.seconds,r.nanos)}(t))}function oR(t,e){return dm(t,e).canonicalString()}function dm(t,e){const n=function(i){return new De(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function zV(t){const e=De.fromString(t);return st(JV(e)),e}function hm(t,e){return oR(t.databaseId,e.path)}function WV(t){const e=zV(t);return e.length===4?De.emptyPath():qV(e)}function HV(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function qV(t){return st(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function aE(t,e,n){return{name:hm(t,e),fields:n.value.mapValue.fields}}function GV(t,e){let n;if(e instanceof Hl)n={update:aE(t,e.key,e.value)};else if(e instanceof sR)n={delete:hm(t,e.key)};else if(e instanceof gs)n={update:aE(t,e.key,e.data),updateMask:YV(e.fieldMask)};else{if(!(e instanceof LV))return ae();n={verify:hm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof ad)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof kl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Rl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ld)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ae()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:BV(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ae()}(t,e.precondition)),n}function KV(t,e){return t&&t.length>0?(st(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Zs(i.updateTime):Zs(s);return o.isEqual(Ce.min())&&(o=Zs(s)),new xV(o,i.transformResults||[])}(n,e))):[]}function QV(t){let e=WV(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){st(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const g=aR(f);return g instanceof fi&&Bk(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(g=>function(R){return new sd(bs(R.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(g))}(n.orderBy));let a=null;n.limit&&(a=function(f){let g;return g=typeof f=="object"?f.value:f,iv(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(f){const g=!!f.before,k=f.values||[];return new id(k,g)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const g=!f.before,k=f.values||[];return new id(k,g)}(n.endAt)),vV(e,i,o,s,a,"F",l,c)}function aR(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=bs(n.unaryFilter.field);return Ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=bs(n.unaryFilter.field);return Ze.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=bs(n.unaryFilter.field);return Ze.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=bs(n.unaryFilter.field);return Ze.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ae()}}(t):t.fieldFilter!==void 0?function(n){return Ze.create(bs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ae()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return fi.create(n.compositeFilter.filters.map(r=>aR(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ae()}}(n.compositeFilter.op))}(t):ae()}function bs(t){return ct.fromServerFormat(t.fieldPath)}function YV(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function JV(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XV{constructor(e){this.ct=e}}function ZV(t){const e=QV({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?um(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eF{constructor(){this._n=new tF}addToCollectionParentIndex(e,n){return this._n.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(hi.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(hi.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class tF{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new St(De.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new St(De.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new _o(0)}static Ln(){return new _o(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nF{constructor(){this.changes=new Fo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,wn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rF{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iF{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Wa(r.mutation,i,Tn.empty(),it.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,It()).next(()=>r))}getLocalViewOfDocuments(e,n,r=It()){const i=Ui();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=$u();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ui();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,It()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=od();const o=za(),a=function(){return za()}();return n.forEach((l,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof gs)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Wa(d.mutation,c,d.mutation.getFieldMask(),it.now())):o.set(c.key,Tn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return a.set(c,new rF(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=za();let i=new Bt((o,a)=>o-a),s=It();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let d=r.get(l)||Tn.empty();d=a.applyToLocalView(c,d),r.set(l,d);const f=(i.get(a.batchId)||It()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,d=l.value,f=Yk();d.forEach(g=>{if(!s.has(g)){const k=rR(n.get(g),r.get(g));k!==null&&f.set(g,k),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return te.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):_V(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):U.resolve(Ui());let a=-1,l=s;return o.next(c=>U.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?U.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{l=l.insert(d,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,It())).next(d=>({batchId:a,changes:Qk(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new te(n)).next(r=>{let i=$u();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=$u();return this.indexManager.getCollectionParents(e,s).next(a=>U.forEach(a,l=>{const c=function(f,g){return new lh(g,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,g)=>{o=o.insert(f,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,wn.newInvalidDocument(d)))});let a=$u();return o.forEach((l,c)=>{const d=s.get(l);d!==void 0&&Wa(d.mutation,c,Tn.empty(),it.now()),uv(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sF{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return U.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Zs(i.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:ZV(i.bundledQuery),readTime:Zs(i.readTime)}}(n)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oF{constructor(){this.overlays=new Bt(te.comparator),this.hr=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ui();return U.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const i=Ui(),s=n.length+1,o=new te(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return U.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Bt((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Ui(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=Ui(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return U.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new jV(n,r));let s=this.hr.get(n);s===void 0&&(s=It(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(){this.Pr=new St(Je.Ir),this.Tr=new St(Je.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Je(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Je(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new te(new De([])),r=new Je(n,e),i=new Je(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new te(new De([])),r=new Je(n,e),i=new Je(n,e+1);let s=It();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Je(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Je{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return te.comparator(e.key,n.key)||_e(e.pr,n.pr)}static Er(e,n){return _e(e.pr,n.pr)||te.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aF{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new St(Je.Ir)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new MV(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new Je(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return U.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Je(n,0),i=new Je(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),U.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new St(_e);return n.forEach(i=>{const s=new Je(i,0),o=new Je(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),U.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;te.isDocumentKey(s)||(s=s.child(""));const o=new Je(new te(s),0);let a=new St(_e);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.pr)),!0)},o),U.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){st(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return U.forEach(n.mutations,i=>{const s=new Je(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Je(n,0),i=this.wr.firstAfterOrEqual(r);return U.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lF{constructor(e){this.vr=e,this.docs=function(){return new Bt(te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():wn.newInvalidDocument(n))}getEntries(e,n){let r=od();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():wn.newInvalidDocument(i))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=od();const o=n.path,a=new te(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:d}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||X2(J2(d),r)<=0||(i.has(d.key)||uv(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return U.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ae()}Fr(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new uF(this)}getSize(e){return U.resolve(this.size)}}class uF extends nF{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cF{constructor(e){this.persistence=e,this.Mr=new Fo(n=>av(n),lv),this.lastRemoteSnapshotVersion=Ce.min(),this.highestTargetId=0,this.Or=0,this.Nr=new dv,this.targetCount=0,this.Lr=_o.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),U.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new _o(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.qn(n),U.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),U.waitFor(s).next(()=>i)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),U.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dF{constructor(e,n){this.Br={},this.overlays={},this.kr=new Mk(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new cF(this),this.indexManager=new eF,this.remoteDocumentCache=function(i){return new lF(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new XV(n),this.$r=new sF(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new oF,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new aF(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){Q("MemoryPersistence","Starting transaction:",e);const i=new hF(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return U.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class hF extends eV{constructor(e){super(),this.currentSequenceNumber=e}}class hv{constructor(e){this.persistence=e,this.zr=new dv,this.jr=null}static Hr(e){return new hv(e)}get Jr(){if(this.jr)return this.jr;throw ae()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),U.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Jr,r=>{const i=te.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,Ce.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return U.or([()=>U.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=It(),i=It();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new fv(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fF{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pF{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return NN()?8:tV(le())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new fF;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(pa()<=ie.DEBUG&&Q("QueryEngine","SDK will not create cache indexes for query:",ma(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),U.resolve()):(pa()<=ie.DEBUG&&Q("QueryEngine","Query:",ma(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(pa()<=ie.DEBUG&&Q("QueryEngine","The SDK decides to create cache indexes for query:",ma(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,qi(n))):U.resolve())}ji(e,n){if(nE(n))return U.resolve(null);let r=qi(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=um(n,null,"F"),r=qi(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=It(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Zi(n,a);return this.Xi(n,c,o,l.readTime)?this.ji(e,um(n,null,"F")):this.es(e,c,n,l)}))})))}Hi(e,n,r,i){return nE(n)||i.isEqual(Ce.min())?U.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?U.resolve(null):(pa()<=ie.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ma(n)),this.es(e,o,n,Y2(i,-1)).next(a=>a))})}Zi(e,n){let r=new St(EV(e));return n.forEach((i,s)=>{uv(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return pa()<=ie.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",ma(n)),this.zi.getDocumentsMatchingQuery(e,n,hi.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mF{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Bt(_e),this.rs=new Fo(s=>av(s),lv),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new iF(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function gF(t,e,n,r){return new mF(t,e,n,r)}async function lR(t,e){const n=Se(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=It();for(const c of i){o.push(c.batchId);for(const d of c.mutations)l=l.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function vF(t,e){const n=Se(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,c,d){const f=c.batch,g=f.keys();let k=U.resolve();return g.forEach(R=>{k=k.next(()=>d.getEntry(l,R)).next(x=>{const b=c.docVersions.get(R);st(b!==null),x.version.compareTo(b)<0&&(f.applyToRemoteDocument(x,c),x.isValidDocument()&&(x.setReadTime(c.commitVersion),d.addEntry(x)))})}),k.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=It();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function yF(t){const e=Se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function _F(t,e){const n=Se(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class lE{constructor(){this.activeTargetIds=CV()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wF{constructor(){this.no=new lE,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new lE,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EF{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){Q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){Q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bu=null;function Of(){return Bu===null?Bu=function(){return 268435456+Math.round(2147483648*Math.random())}():Bu++,"0x"+Bu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IF={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TF{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="WebChannelConnection";class SF extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const a=Of(),l=this.vo(n,r.toUriEncodedString());Q("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,l,c,i).then(d=>(Q("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw ed("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",l,"request:",i),d})}xo(n,r,i,s,o,a){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Vo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=IF[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=Of();return new Promise((o,a)=>{const l=new Ck;l.setWithCredentials(!0),l.listenOnce(Pk.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case cc.NO_ERROR:const d=l.getResponseJson();Q(_t,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case cc.TIMEOUT:Q(_t,`RPC '${e}' ${s} timed out`),a(new X(z.DEADLINE_EXCEEDED,"Request time out"));break;case cc.HTTP_ERROR:const f=l.getStatus();if(Q(_t,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const k=g==null?void 0:g.error;if(k&&k.status&&k.message){const R=function(b){const E=b.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(E)>=0?E:z.UNKNOWN}(k.status);a(new X(R,k.message))}else a(new X(z.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new X(z.UNAVAILABLE,"Connection failed."));break;default:ae()}}finally{Q(_t,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);Q(_t,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=Of(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=xk(),a=Nk(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new Ak({})),this.Fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=s.join("");Q(_t,`Creating RPC '${e}' stream ${i}: ${d}`,l);const f=o.createWebChannel(d,l);let g=!1,k=!1;const R=new TF({lo:b=>{k?Q(_t,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(g||(Q(_t,`Opening RPC '${e}' stream ${i} transport.`),f.open(),g=!0),Q(_t,`RPC '${e}' stream ${i} sending:`,b),f.send(b))},ho:()=>f.close()}),x=(b,E,w)=>{b.listen(E,S=>{try{w(S)}catch(O){setTimeout(()=>{throw O},0)}})};return x(f,Ra.EventType.OPEN,()=>{k||(Q(_t,`RPC '${e}' stream ${i} transport opened.`),R.mo())}),x(f,Ra.EventType.CLOSE,()=>{k||(k=!0,Q(_t,`RPC '${e}' stream ${i} transport closed`),R.po())}),x(f,Ra.EventType.ERROR,b=>{k||(k=!0,ed(_t,`RPC '${e}' stream ${i} transport errored:`,b),R.po(new X(z.UNAVAILABLE,"The operation could not be completed")))}),x(f,Ra.EventType.MESSAGE,b=>{var E;if(!k){const w=b.data[0];st(!!w);const S=w,O=S.error||((E=S[0])===null||E===void 0?void 0:E.error);if(O){Q(_t,`RPC '${e}' stream ${i} received error:`,O);const M=O.status;let L=function(T){const A=Be[T];if(A!==void 0)return FV(A)}(M),I=O.message;L===void 0&&(L=z.INTERNAL,I="Unknown error status: "+M+" with message "+O.message),k=!0,R.po(new X(L,I)),f.close()}else Q(_t,`RPC '${e}' stream ${i} received:`,w),R.yo(w)}}),x(a,bk.STAT_EVENT,b=>{b.stat===sm.PROXY?Q(_t,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===sm.NOPROXY&&Q(_t,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.fo()},0),R}}function Df(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(t){return new UV(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&Q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kF{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new uR(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===z.RESOURCE_EXHAUSTED?(ls(n.toString()),ls("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new X(z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return Q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(Q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class RF extends kF{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(st(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=KV(e.writeResults,e.commitTime),r=Zs(e.commitTime);return this.listener.A_(r,n)}return st(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=HV(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>GV(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CF extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new X(z.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,dm(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new X(z.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,dm(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new X(z.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class AF{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(ls(n),this.y_=!1):Q("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PF{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{Gl(this)&&(Q("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=Se(l);c.M_.add(4),await ql(c),c.N_.set("Unknown"),c.M_.delete(4),await hh(c)}(this))})}),this.N_=new AF(r,i)}}async function hh(t){if(Gl(t))for(const e of t.x_)await e(!0)}async function ql(t){for(const e of t.x_)await e(!1)}function Gl(t){return Se(t).M_.size===0}async function cR(t,e,n){if(!ah(e))throw e;t.M_.add(1),await ql(t),t.N_.set("Offline"),n||(n=()=>yF(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Q("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await hh(t)})}function dR(t,e){return e().catch(n=>cR(t,n,e))}async function fh(t){const e=Se(t),n=pi(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;bF(e);)try{const i=await _F(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,NF(e,i)}catch(i){await cR(e,i)}hR(e)&&fR(e)}function bF(t){return Gl(t)&&t.v_.length<10}function NF(t,e){t.v_.push(e);const n=pi(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function hR(t){return Gl(t)&&!pi(t).Zo()&&t.v_.length>0}function fR(t){pi(t).start()}async function xF(t){pi(t).V_()}async function OF(t){const e=pi(t);for(const n of t.v_)e.d_(n.mutations)}async function DF(t,e,n){const r=t.v_.shift(),i=cv.from(r,e,n);await dR(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await fh(t)}async function LF(t,e){e&&pi(t).E_&&await async function(r,i){if(function(o){return VV(o)&&o!==z.ABORTED}(i.code)){const s=r.v_.shift();pi(r).t_(),await dR(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await fh(r)}}(t,e),hR(t)&&fR(t)}async function cE(t,e){const n=Se(t);n.asyncQueue.verifyOperationInProgress(),Q("RemoteStore","RemoteStore received new credentials");const r=Gl(n);n.M_.add(3),await ql(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await hh(n)}async function MF(t,e){const n=Se(t);e?(n.M_.delete(2),await hh(n)):e||(n.M_.add(2),await ql(n),n.N_.set("Unknown"))}function pi(t){return t.k_||(t.k_=function(n,r,i){const s=Se(n);return s.f_(),new RF(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:xF.bind(null,t),Ao:LF.bind(null,t),R_:OF.bind(null,t),A_:DF.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await fh(t)):(await t.k_.stop(),t.v_.length>0&&(Q("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Hi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new pv(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pR(t,e){if(ls("AsyncQueue",`${e}: ${t}`),ah(t))return new X(z.UNAVAILABLE,`${e}: ${t}`);throw t}class jF{constructor(){this.queries=new Fo(e=>Gk(e),qk),this.onlineState="Unknown",this.z_=new Set}}function VF(t){t.z_.forEach(e=>{e.next()})}var dE,hE;(hE=dE||(dE={})).J_="default",hE.Cache="cache";class FF{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Fo(a=>Gk(a),qk),this.Da=new Map,this.Ca=new Set,this.va=new Bt(te.comparator),this.Fa=new Map,this.Ma=new dv,this.xa={},this.Oa=new Map,this.Na=_o.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function UF(t,e,n){const r=WF(t);try{const i=await function(o,a){const l=Se(o),c=it.now(),d=a.reduce((k,R)=>k.add(R.key),It());let f,g;return l.persistence.runTransaction("Locally write mutations","readwrite",k=>{let R=od(),x=It();return l.os.getEntries(k,d).next(b=>{R=b,R.forEach((E,w)=>{w.isValidDocument()||(x=x.add(E))})}).next(()=>l.localDocuments.getOverlayedDocuments(k,R)).next(b=>{f=b;const E=[];for(const w of a){const S=DV(w,f.get(w.key).overlayedDocument);S!=null&&E.push(new gs(w.key,S,Fk(S.value.mapValue),ar.exists(!0)))}return l.mutationQueue.addMutationBatch(k,c,E,a)}).next(b=>{g=b;const E=b.applyToLocalDocumentSet(f,x);return l.documentOverlayCache.saveOverlays(k,b.batchId,E)})}).then(()=>({batchId:g.batchId,changes:Qk(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.xa[o.currentUser.toKey()];c||(c=new Bt(_e)),c=c.insert(a,l),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await ph(r,i.changes),await fh(r.remoteStore)}catch(i){const s=pR(i,"Failed to persist write");n.reject(s)}}function fE(t,e,n){const r=Se(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=Se(o);l.onlineState=a;let c=!1;l.queries.forEach((d,f)=>{for(const g of f.U_)g.j_(a)&&(c=!0)}),c&&VF(l)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function $F(t,e){const n=Se(t),r=e.batch.batchId;try{const i=await vF(n.localStore,e);gR(n,r,null),mR(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ph(n,i)}catch(i){await Lk(i)}}async function BF(t,e,n){const r=Se(t);try{const i=await function(o,a){const l=Se(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return l.mutationQueue.lookupMutationBatch(c,a).next(f=>(st(f!==null),d=f.keys(),l.mutationQueue.removeMutationBatch(c,f))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>l.localDocuments.getDocuments(c,d))})}(r.localStore,e);gR(r,e,n),mR(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ph(r,i)}catch(i){await Lk(i)}}function mR(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function gR(t,e,n){const r=Se(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}async function ph(t,e,n){const r=Se(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,l)=>{o.push(r.Ba(l,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=void 0)===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(c){i.push(c);const f=fv.Ki(l.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(l,c){const d=Se(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>U.forEach(c,g=>U.forEach(g.qi,k=>d.persistence.referenceDelegate.addReference(f,g.targetId,k)).next(()=>U.forEach(g.Qi,k=>d.persistence.referenceDelegate.removeReference(f,g.targetId,k)))))}catch(f){if(!ah(f))throw f;Q("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const g=f.targetId;if(!f.fromCache){const k=d.ns.get(g),R=k.snapshotVersion,x=k.withLastLimboFreeSnapshotVersion(R);d.ns=d.ns.insert(g,x)}}}(r.localStore,s))}async function zF(t,e){const n=Se(t);if(!n.currentUser.isEqual(e)){Q("SyncEngine","User change. New user:",e.toKey());const r=await lR(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(l=>{l.reject(new X(z.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ph(n,r.us)}}function WF(t){const e=Se(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$F.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=BF.bind(null,e),e}class pE{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=dh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return gF(this.persistence,new pF,e.initialUser,this.serializer)}createPersistence(e){return new dF(hv.Hr,this.serializer)}createSharedClientState(e){return new wF}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class HF{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>fE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=zF.bind(null,this.syncEngine),await MF(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new jF}()}createDatastore(e){const n=dh(e.databaseInfo.databaseId),r=function(s){return new SF(s)}(e.databaseInfo);return function(s,o,a,l){return new CF(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new PF(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>fE(this.syncEngine,n,0),function(){return uE.D()?new uE:new EF}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,d){const f=new FF(i,s,o,a,l,c);return d&&(f.La=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=Se(r);Q("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await ql(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qF{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=wt.UNAUTHENTICATED,this.clientId=Dk.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{Q("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Q("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new X(z.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Hi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=pR(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Lf(t,e){t.asyncQueue.verifyOperationInProgress(),Q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await lR(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function mE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await KF(t);Q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>cE(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>cE(e.remoteStore,i)),t._onlineComponents=e}function GF(t){return t.name==="FirebaseError"?t.code===z.FAILED_PRECONDITION||t.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function KF(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Lf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!GF(n))throw n;ed("Error using user provided cache. Falling back to memory cache: "+n),await Lf(t,new pE)}}else Q("FirestoreClient","Using default OfflineComponentProvider"),await Lf(t,new pE);return t._offlineComponents}async function QF(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Q("FirestoreClient","Using user provided OnlineComponentProvider"),await mE(t,t._uninitializedComponentsProvider._online)):(Q("FirestoreClient","Using default OnlineComponentProvider"),await mE(t,new HF))),t._onlineComponents}function YF(t){return QF(t).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vR(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yR(t,e,n){if(!n)throw new X(z.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function JF(t,e,n,r){if(e===!0&&r===!0)throw new X(z.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function vE(t){if(!te.isDocumentKey(t))throw new X(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function yE(t){if(te.isDocumentKey(t))throw new X(z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function mv(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ae()}function fm(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=mv(t);throw new X(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new X(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new X(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}JF("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vR((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new X(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new X(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new X(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class mh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _E({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new X(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new X(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _E(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new $2;switch(r.type){case"firstParty":return new H2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=gE.get(n);r&&(Q("ComponentProvider","Removing Datastore"),gE.delete(n),r.terminate())}(this),Promise.resolve()}}function XF(t,e,n,r={}){var i;const s=(t=fm(t,mh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ed("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=wt.MOCK_USER;else{a=bN(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new X(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new wt(c)}t._authCredentials=new B2(new Ok(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new gv(this.firestore,e,this._query)}}class zn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ai(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new zn(this.firestore,e,this._key)}}class ai extends gv{constructor(e,n,r){super(e,n,yV(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new zn(this.firestore,null,new te(e))}withConverter(e){return new ai(this.firestore,e,this._path)}}function ZF(t,e,...n){if(t=Y(t),yR("collection","path",e),t instanceof mh){const r=De.fromString(e,...n);return yE(r),new ai(t,null,r)}{if(!(t instanceof zn||t instanceof ai))throw new X(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return yE(r),new ai(t.firestore,null,r)}}function eU(t,e,...n){if(t=Y(t),arguments.length===1&&(e=Dk.newId()),yR("doc","path",e),t instanceof mh){const r=De.fromString(e,...n);return vE(r),new zn(t,null,new te(r))}{if(!(t instanceof zn||t instanceof ai))throw new X(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return vE(r),new zn(t.firestore,t instanceof ai?t.converter:null,new te(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tU{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new uR(this,"async_queue_retry"),this.hu=()=>{const n=Df();n&&Q("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Df();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Df();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Hi;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!ah(e))throw e;Q("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ls("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=pv.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&ae()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class _R extends mh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new tU}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||wR(this),this._firestoreClient.terminate()}}function nU(t,e){const n=typeof t=="object"?t:Wd(),r=typeof t=="string"?t:"(default)",i=Ir(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=AN("firestore");s&&XF(i,...s)}return i}function rU(t){return t._firestoreClient||wR(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function wR(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,d){return new sV(a,l,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,vR(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new qF(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Cl(gr.fromBase64String(e))}catch(n){throw new X(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Cl(gr.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iU=/^__.*__$/;class sU{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new gs(e,this.data,this.fieldMask,n,this.fieldTransforms):new Hl(e,this.data,n,this.fieldTransforms)}}function SR(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae()}}class vv{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new vv(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return ud(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(SR(this.fu)&&iU.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class oU{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||dh(e)}Fu(e,n,r,i=!1){return new vv({fu:e,methodName:n,vu:r,path:ct.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function aU(t){const e=t._freezeSettings(),n=dh(t._databaseId);return new oU(t._databaseId,!!e.ignoreUndefinedProperties,n)}function lU(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);AR("Data must be an object, but it was:",o,r);const a=RR(r,o);let l,c;if(s.merge)l=new Tn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const g=uU(e,f,n);if(!o.contains(g))throw new X(z.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);hU(d,g)||d.push(g)}l=new Tn(d),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new sU(new En(a),l,c)}function kR(t,e){if(CR(t=Y(t)))return AR("Unsupported field value:",e,t),RR(t,e);if(t instanceof IR)return function(r,i){if(!SR(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=kR(a,i.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Y(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return AV(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=it.fromDate(r);return{timestampValue:cm(i.serializer,s)}}if(r instanceof it){const s=new it(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:cm(i.serializer,s)}}if(r instanceof TR)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Cl)return{bytesValue:$V(i.serializer,r._byteString)};if(r instanceof zn){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:oR(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${mv(r)}`)}(t,e)}function RR(t,e){const n={};return jk(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Wl(t,(r,i)=>{const s=kR(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function CR(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof it||t instanceof TR||t instanceof Cl||t instanceof zn||t instanceof IR)}function AR(t,e,n){if(!CR(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=mv(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function uU(t,e,n){if((e=Y(e))instanceof ER)return e._internalPath;if(typeof e=="string")return dU(t,e);throw ud("Field path arguments must be of type string or ",t,!1,void 0,n)}const cU=new RegExp("[~\\*/\\[\\]]");function dU(t,e,n){if(e.search(cU)>=0)throw ud(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ER(...e.split("."))._internalPath}catch{throw ud(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ud(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new X(z.INVALID_ARGUMENT,a+t+l)}function hU(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fU(t,e,n){let r;return r=t?t.toFirestore(e):e,r}function pU(t,e,n){t=fm(t,zn);const r=fm(t.firestore,_R),i=fU(t.converter,e);return mU(r,[lU(aU(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,ar.none())])}function mU(t,e){return function(r,i){const s=new Hi;return r.asyncQueue.enqueueAndForget(async()=>UF(await YF(r),i,s)),s.promise}(rU(t),e)}(function(e,n=!0){(function(i){Vo=i})(en),$t(new bt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new _R(new z2(r.getProvider("auth-internal")),new G2(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new X(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rd(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),nt(Qw,"4.6.4",e),nt(Qw,"4.6.4","esm2017")})();function PR(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gU=PR,bR=new hn("auth","Firebase",PR());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd=new bo("@firebase/auth");function vU(t,...e){cd.logLevel<=ie.WARN&&cd.warn(`Auth (${en}): ${t}`,...e)}function fc(t,...e){cd.logLevel<=ie.ERROR&&cd.error(`Auth (${en}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(t,...e){throw yv(t,...e)}function Wn(t,...e){return yv(t,...e)}function NR(t,e,n){const r=Object.assign(Object.assign({},gU()),{[e]:n});return new hn("auth","Firebase",r).create(e,{appName:t.name})}function lr(t){return NR(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yv(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return bR.create(t,...e)}function J(t,e,...n){if(!t)throw yv(e,...n)}function nr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fc(e),new Error(e)}function vr(t,e){t||nr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function yU(){return wE()==="http:"||wE()==="https:"}function wE(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _U(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yU()||$d()||"connection"in navigator)?navigator.onLine:!0}function wU(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,n){this.shortDelay=e,this.longDelay=n,vr(n>e,"Short delay should be less than long delay!"),this.isMobile=MT()||Bd()}get(){return _U()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _v(t,e){vr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;nr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;nr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;nr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EU={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IU=new Kl(3e4,6e4);function wi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ei(t,e,n,r,i={}){return OR(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Pn(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),xR.fetch()(DR(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function OR(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},EU),e);try{const i=new SU(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw zu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw zu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw zu(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw zu(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw NR(t,d,c);An(t,d)}}catch(i){if(i instanceof He)throw i;An(t,"network-request-failed",{message:String(i)})}}async function Ql(t,e,n,r,i={}){const s=await Ei(t,e,n,r,i);return"mfaPendingCredential"in s&&An(t,"multi-factor-auth-required",{_serverResponse:s}),s}function DR(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?_v(t.config,i):`${t.config.apiScheme}://${i}`}function TU(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class SU{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Wn(this.auth,"network-request-failed")),IU.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function zu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Wn(t,e,r);return i.customData._tokenResponse=n,i}function EE(t){return t!==void 0&&t.enterprise!==void 0}class kU{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return TU(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function RU(t,e){return Ei(t,"GET","/v2/recaptchaConfig",wi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CU(t,e){return Ei(t,"POST","/v1/accounts:delete",e)}async function LR(t,e){return Ei(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AU(t,e=!1){const n=Y(t),r=await n.getIdToken(e),i=wv(r);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ha(Mf(i.auth_time)),issuedAtTime:Ha(Mf(i.iat)),expirationTime:Ha(Mf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Mf(t){return Number(t)*1e3}function wv(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return fc("JWT malformed, contained fewer than 3 sections"),null;try{const i=Sg(n);return i?JSON.parse(i):(fc("Failed to decode base64 JWT payload"),null)}catch(i){return fc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function IE(t){const e=wv(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Al(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof He&&PU(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function PU({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bU{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ha(this.lastLoginAt),this.creationTime=Ha(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dd(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Al(t,LR(n,{idToken:r}));J(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?MR(s.providerUserInfo):[],a=xU(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new mm(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function NU(t){const e=Y(t);await dd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xU(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function MR(t){return t.map(e=>{var{providerId:n}=e,r=xo(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OU(t,e){const n=await OR(t,{},async()=>{const r=Pn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=DR(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",xR.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function DU(t,e){return Ei(t,"POST","/v2/accounts:revokeToken",wi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):IE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=IE(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await OU(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new eo;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(J(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new eo,this.toJSON())}_performRefresh(){return nr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=xo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bU(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new mm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Al(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return AU(this,e)}reload(){return NU(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new rr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await dd(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pe(this.auth.app))return Promise.reject(lr(this.auth));const e=await this.getIdToken();return await Al(this,CU(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,k=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:S,emailVerified:O,isAnonymous:M,providerData:L,stsTokenManager:I}=n;J(S&&I,e,"internal-error");const v=eo.fromJSON(this.name,I);J(typeof S=="string",e,"internal-error"),Dr(f,e.name),Dr(g,e.name),J(typeof O=="boolean",e,"internal-error"),J(typeof M=="boolean",e,"internal-error"),Dr(k,e.name),Dr(R,e.name),Dr(x,e.name),Dr(b,e.name),Dr(E,e.name),Dr(w,e.name);const T=new rr({uid:S,auth:e,email:g,emailVerified:O,displayName:f,isAnonymous:M,photoURL:R,phoneNumber:k,tenantId:x,stsTokenManager:v,createdAt:E,lastLoginAt:w});return L&&Array.isArray(L)&&(T.providerData=L.map(A=>Object.assign({},A))),b&&(T._redirectEventId=b),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new eo;i.updateFromServerResponse(n);const s=new rr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await dd(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];J(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?MR(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new eo;a.updateFromIdToken(r);const l=new rr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new mm(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE=new Map;function ir(t){vr(t instanceof Function,"Expected a class definition");let e=TE.get(t);return e?(vr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,TE.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jR.type="NONE";const SE=jR;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(t,e,n){return`firebase:${t}:${e}:${n}`}class to{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=pc(this.userKey,i.apiKey,s),this.fullPersistenceKey=pc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new to(ir(SE),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||ir(SE);const o=pc(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const f=rr._fromJSON(e,d);c!==s&&(a=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new to(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new to(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(UR(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(VR(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(BR(e))return"Blackberry";if(zR(e))return"Webos";if(Ev(e))return"Safari";if((e.includes("chrome/")||FR(e))&&!e.includes("edge/"))return"Chrome";if($R(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function VR(t=le()){return/firefox\//i.test(t)}function Ev(t=le()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function FR(t=le()){return/crios\//i.test(t)}function UR(t=le()){return/iemobile/i.test(t)}function $R(t=le()){return/android/i.test(t)}function BR(t=le()){return/blackberry/i.test(t)}function zR(t=le()){return/webos/i.test(t)}function gh(t=le()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function LU(t=le()){var e;return gh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function MU(){return Cg()&&document.documentMode===10}function WR(t=le()){return gh(t)||$R(t)||zR(t)||BR(t)||/windows phone/i.test(t)||UR(t)}function jU(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HR(t,e=[]){let n;switch(t){case"Browser":n=kE(le());break;case"Worker":n=`${kE(le())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${en}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VU{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FU(t,e={}){return Ei(t,"GET","/v2/passwordPolicy",wi(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UU=6;class $U{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:UU,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BU{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new RE(this),this.idTokenSubscription=new RE(this),this.beforeStateQueue=new VU(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bR,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ir(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await to.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await LR(this,{idToken:e}),r=await rr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(pe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await dd(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wU()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pe(this.app))return Promise.reject(lr(this));const n=e?Y(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pe(this.app)?Promise.reject(lr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pe(this.app)?Promise.reject(lr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ir(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await FU(this),n=new $U(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new hn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await DU(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ir(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await to.create(this,[ir(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=HR(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&vU(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ii(t){return Y(t)}class RE{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ag(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zU(t){vh=t}function qR(t){return vh.loadJS(t)}function WU(){return vh.recaptchaEnterpriseScript}function HU(){return vh.gapiScript}function qU(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const GU="recaptcha-enterprise",KU="NO_RECAPTCHA";class QU{constructor(e){this.type=GU,this.auth=Ii(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{RU(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new kU(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;EE(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(KU)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&EE(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=WU();l.length!==0&&(l+=a),qR(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function CE(t,e,n,r=!1){const i=new QU(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function gm(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await CE(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await CE(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YU(t,e){const n=Ir(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ml(s,e??{}))return i;An(i,"already-initialized")}return n.initialize({options:e})}function JU(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ir);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function XU(t,e,n){const r=Ii(t);J(r._canInitEmulator,r,"emulator-config-failed"),J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=GR(e),{host:o,port:a}=ZU(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),e$()}function GR(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ZU(t){const e=GR(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:AE(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:AE(o)}}}function AE(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function e$(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return nr("not implemented")}_getIdTokenResponse(e){return nr("not implemented")}_linkToIdToken(e,n){return nr("not implemented")}_getReauthenticationResolver(e){return nr("not implemented")}}async function t$(t,e){return Ei(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n$(t,e){return Ql(t,"POST","/v1/accounts:signInWithPassword",wi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r$(t,e){return Ql(t,"POST","/v1/accounts:signInWithEmailLink",wi(t,e))}async function i$(t,e){return Ql(t,"POST","/v1/accounts:signInWithEmailLink",wi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl extends Iv{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Pl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Pl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gm(e,n,"signInWithPassword",n$);case"emailLink":return r$(e,{email:this._email,oobCode:this._password});default:An(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gm(e,r,"signUpPassword",t$);case"emailLink":return i$(e,{idToken:n,email:this._email,oobCode:this._password});default:An(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function no(t,e){return Ql(t,"POST","/v1/accounts:signInWithIdp",wi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s$="http://localhost";class cs extends Iv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new cs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):An("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=xo(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new cs(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return no(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,no(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,no(e,n)}buildRequest(){const e={requestUri:s$,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Pn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o$(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function a$(t){const e=In(Fn(t)).link,n=e?In(Fn(e)).deep_link_id:null,r=In(Fn(t)).deep_link_id;return(r?In(Fn(r)).link:null)||r||n||e||t}class Tv{constructor(e){var n,r,i,s,o,a;const l=In(Fn(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,f=o$((i=l.mode)!==null&&i!==void 0?i:null);J(c&&d&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=a$(e);try{return new Tv(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(){this.providerId=Uo.PROVIDER_ID}static credential(e,n){return Pl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Tv.parseLink(n);return J(r,"argument-error"),Pl._fromEmailAndCode(e,r.code,r.tenantId)}}Uo.PROVIDER_ID="password";Uo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Uo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl extends KR{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends Yl{constructor(){super("facebook.com")}static credential(e){return cs._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ur.credentialFromTaggedObject(e)}static credentialFromError(e){return Ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ur.credential(e.oauthAccessToken)}catch{return null}}}Ur.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ur.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends Yl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return cs._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return $r.credential(n,r)}catch{return null}}}$r.GOOGLE_SIGN_IN_METHOD="google.com";$r.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br extends Yl{constructor(){super("github.com")}static credential(e){return cs._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Br.credentialFromTaggedObject(e)}static credentialFromError(e){return Br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Br.credential(e.oauthAccessToken)}catch{return null}}}Br.GITHUB_SIGN_IN_METHOD="github.com";Br.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr extends Yl{constructor(){super("twitter.com")}static credential(e,n){return cs._fromParams({providerId:zr.PROVIDER_ID,signInMethod:zr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return zr.credentialFromTaggedObject(e)}static credentialFromError(e){return zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return zr.credential(n,r)}catch{return null}}}zr.TWITTER_SIGN_IN_METHOD="twitter.com";zr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l$(t,e){return Ql(t,"POST","/v1/accounts:signUp",wi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await rr._fromIdTokenResponse(e,r,i),o=PE(r);return new ds({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=PE(r);return new ds({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function PE(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd extends He{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,hd.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new hd(e,n,r,i)}}function QR(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?hd._fromErrorAndOperation(t,s,e,r):s})}async function u$(t,e,n=!1){const r=await Al(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ds._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c$(t,e,n=!1){const{auth:r}=t;if(pe(r.app))return Promise.reject(lr(r));const i="reauthenticate";try{const s=await Al(t,QR(r,i,e,t),n);J(s.idToken,r,"internal-error");const o=wv(s.idToken);J(o,r,"internal-error");const{sub:a}=o;return J(t.uid===a,r,"user-mismatch"),ds._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&An(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YR(t,e,n=!1){if(pe(t.app))return Promise.reject(lr(t));const r="signIn",i=await QR(t,r,e),s=await ds._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function d$(t,e){return YR(Ii(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JR(t){const e=Ii(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function h$(t,e,n){if(pe(t.app))return Promise.reject(lr(t));const r=Ii(t),o=await gm(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",l$).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&JR(t),l}),a=await ds._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function f$(t,e,n){return pe(t.app)?Promise.reject(lr(t)):d$(Y(t),Uo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&JR(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p$(t,e){return Y(t).setPersistence(e)}function m$(t,e,n,r){return Y(t).onIdTokenChanged(e,n,r)}function g$(t,e,n){return Y(t).beforeAuthStateChanged(e,n)}function v$(t,e,n,r){return Y(t).onAuthStateChanged(e,n,r)}function y$(t){return Y(t).signOut()}const fd="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fd,"1"),this.storage.removeItem(fd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _$(){const t=le();return Ev(t)||gh(t)}const w$=1e3,E$=10;class ZR extends XR{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_$()&&jU(),this.fallbackToPolling=WR(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);MU()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,E$):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},w$)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ZR.type="LOCAL";const I$=ZR;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC extends XR{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}eC.type="SESSION";const Sv=eC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T$(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new yh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await T$(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S${constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=kv("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const g=f;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(){return window}function k$(t){Hn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(){return typeof Hn().WorkerGlobalScope<"u"&&typeof Hn().importScripts=="function"}async function R$(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function C$(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function A$(){return tC()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC="firebaseLocalStorageDb",P$=1,pd="firebaseLocalStorage",rC="fbase_key";class Jl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _h(t,e){return t.transaction([pd],e?"readwrite":"readonly").objectStore(pd)}function b$(){const t=indexedDB.deleteDatabase(nC);return new Jl(t).toPromise()}function vm(){const t=indexedDB.open(nC,P$);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(pd,{keyPath:rC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(pd)?e(r):(r.close(),await b$(),e(await vm()))})})}async function bE(t,e,n){const r=_h(t,!0).put({[rC]:e,value:n});return new Jl(r).toPromise()}async function N$(t,e){const n=_h(t,!1).get(e),r=await new Jl(n).toPromise();return r===void 0?null:r.value}function NE(t,e){const n=_h(t,!0).delete(e);return new Jl(n).toPromise()}const x$=800,O$=3;class iC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>O$)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yh._getInstance(A$()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await R$(),!this.activeServiceWorker)return;this.sender=new S$(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||C$()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vm();return await bE(e,fd,"1"),await NE(e,fd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>bE(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>N$(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>NE(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=_h(i,!1).getAll();return new Jl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),x$)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}iC.type="LOCAL";const D$=iC;new Kl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L$(t,e){return e?ir(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv extends Iv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return no(e,this._buildIdpRequest())}_linkToIdToken(e,n){return no(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return no(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function M$(t){return YR(t.auth,new Rv(t),t.bypassAuthState)}function j$(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),c$(n,new Rv(t),t.bypassAuthState)}async function V$(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),u$(n,new Rv(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return M$;case"linkViaPopup":case"linkViaRedirect":return V$;case"reauthViaPopup":case"reauthViaRedirect":return j$;default:An(this.auth,"internal-error")}}resolve(e){vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F$=new Kl(2e3,1e4);class Ws extends sC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ws.currentPopupAction&&Ws.currentPopupAction.cancel(),Ws.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){vr(this.filter.length===1,"Popup operations only handle one event");const e=kv();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ws.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,F$.get())};e()}}Ws.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U$="pendingRedirect",mc=new Map;class $$ extends sC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=mc.get(this.auth._key());if(!e){try{const r=await B$(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}mc.set(this.auth._key(),e)}return this.bypassAuthState||mc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function B$(t,e){const n=H$(e),r=W$(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function z$(t,e){mc.set(t._key(),e)}function W$(t){return ir(t._redirectPersistence)}function H$(t){return pc(U$,t.config.apiKey,t.name)}async function q$(t,e){return await Ii(t)._initializationPromise,oC(t,e,!1)}async function oC(t,e,n=!1){if(pe(t.app))return Promise.reject(lr(t));const r=Ii(t),i=L$(r,e),o=await new $$(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G$=10*60*1e3;class K${constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Q$(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!aC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Wn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=G$&&this.cachedEventUids.clear(),this.cachedEventUids.has(xE(e))}saveEventToCache(e){this.cachedEventUids.add(xE(e)),this.lastProcessedEventTime=Date.now()}}function xE(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function aC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Q$(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return aC(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y$(t,e={}){return Ei(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J$=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,X$=/^https?/;async function Z$(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Y$(t);for(const n of e)try{if(e4(n))return}catch{}An(t,"unauthorized-domain")}function e4(t){const e=pm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!X$.test(n))return!1;if(J$.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t4=new Kl(3e4,6e4);function OE(){const t=Hn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function n4(t){return new Promise((e,n)=>{var r,i,s;function o(){OE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{OE(),n(Wn(t,"network-request-failed"))},timeout:t4.get()})}if(!((i=(r=Hn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Hn().gapi)===null||s===void 0)&&s.load)o();else{const a=qU("iframefcb");return Hn()[a]=()=>{gapi.load?o():n(Wn(t,"network-request-failed"))},qR(`${HU()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw gc=null,e})}let gc=null;function r4(t){return gc=gc||n4(t),gc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i4=new Kl(5e3,15e3),s4="__/auth/iframe",o4="emulator/auth/iframe",a4={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},l4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function u4(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_v(e,o4):`https://${t.config.authDomain}/${s4}`,r={apiKey:e.apiKey,appName:t.name,v:en},i=l4.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Pn(r).slice(1)}`}async function c4(t){const e=await r4(t),n=Hn().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:u4(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:a4,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Wn(t,"network-request-failed"),a=Hn().setTimeout(()=>{s(o)},i4.get());function l(){Hn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},h4=500,f4=600,p4="_blank",m4="http://localhost";class DE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function g4(t,e,n,r=h4,i=f4){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},d4),{width:r.toString(),height:i.toString(),top:s,left:o}),c=le().toLowerCase();n&&(a=FR(c)?p4:n),VR(c)&&(e=e||m4,l.scrollbars="yes");const d=Object.entries(l).reduce((g,[k,R])=>`${g}${k}=${R},`,"");if(LU(c)&&a!=="_self")return v4(e||"",a),new DE(null);const f=window.open(e||"",a,d);J(f,t,"popup-blocked");try{f.focus()}catch{}return new DE(f)}function v4(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y4="__/auth/handler",_4="emulator/auth/handler",w4=encodeURIComponent("fac");async function LE(t,e,n,r,i,s){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:en,eventId:i};if(e instanceof KR){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",UT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof Yl){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${w4}=${encodeURIComponent(l)}`:"";return`${E4(t)}?${Pn(a).slice(1)}${c}`}function E4({config:t}){return t.emulator?_v(t,_4):`https://${t.authDomain}/${y4}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf="webStorageSupport";class I4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sv,this._completeRedirectFn=oC,this._overrideRedirectResult=z$}async _openPopup(e,n,r,i){var s;vr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await LE(e,n,r,pm(),i);return g4(e,o,kv())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await LE(e,n,r,pm(),i);return k$(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(vr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await c4(e),r=new K$(e);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(jf,{type:jf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[jf];o!==void 0&&n(!!o),An(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Z$(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return WR()||Ev()||gh()}}const T4=I4;var ME="@firebase/auth",jE="1.7.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k4(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function R4(t){$t(new bt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:HR(t)},c=new BU(r,i,s,l);return JU(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$t(new bt("auth-internal",e=>{const n=Ii(e.getProvider("auth").getImmediate());return(r=>new S4(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nt(ME,jE,k4(t)),nt(ME,jE,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C4=5*60,A4=kg("authIdTokenMaxAge")||C4;let VE=null;const P4=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>A4)return;const i=n==null?void 0:n.token;VE!==i&&(VE=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Cv(t=Wd()){const e=Ir(t,"auth");if(e.isInitialized())return e.getImmediate();const n=YU(t,{popupRedirectResolver:T4,persistence:[D$,I$,Sv]}),r=kg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=P4(s.toString());g$(n,o,()=>o(n.currentUser)),m$(n,a=>o(a))}}const i=DT("auth");return i&&XU(n,`http://${i}`),n}function b4(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}zU({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Wn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",b4().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});R4("Browser");const lC={apiKey:"AIzaSyC0LGKfT3SJq4aSWSj0biLp3pBAFzsryyQ",authDomain:"personal-site-d1063.firebaseapp.com",projectId:"personal-site-d1063",storageBucket:"personal-site-d1063.appspot.com",messagingSenderId:"55905191484",appId:"1:55905191484:web:59c455a2c2b8b99c69a539",measurementId:"G-W6JCHKHSRR"},Av=zd(lC),Vf=Cv(Av);j2(Av);const N4=nU(Av);var uC={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var a=arguments[o];a&&(s=i(s,r(a)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var a in s)e.call(s,a)&&s[a]&&(o=i(o,a));return o}function i(s,o){return o?s?s+" "+o:s+o:s}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(uC);var x4=uC.exports;const me=xl(x4);function ym(){return ym=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ym.apply(null,arguments)}function cC(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.includes(r))continue;n[r]=t[r]}return n}function FE(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function O4(t){var e=D4(t,"string");return typeof e=="symbol"?e:String(e)}function D4(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function L4(t,e,n){var r=y.useRef(t!==void 0),i=y.useState(e),s=i[0],o=i[1],a=t!==void 0,l=r.current;return r.current=a,!a&&l&&s!==e&&o(e),[a?t:s,y.useCallback(function(c){for(var d=arguments.length,f=new Array(d>1?d-1:0),g=1;g<d;g++)f[g-1]=arguments[g];n&&n.apply(void 0,[c].concat(f)),o(c)},[n])]}function M4(t,e){return Object.keys(e).reduce(function(n,r){var i,s=n,o=s[FE(r)],a=s[r],l=cC(s,[FE(r),r].map(O4)),c=e[r],d=L4(a,o,t[c]),f=d[0],g=d[1];return ym({},l,(i={},i[r]=f,i[c]=g,i))},t)}function _m(t,e){return _m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},_m(t,e)}function j4(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,_m(t,e)}const V4=["xxl","xl","lg","md","sm","xs"],F4="xs",wh=y.createContext({prefixes:{},breakpoints:V4,minBreakpoint:F4});function ke(t,e){const{prefixes:n}=y.useContext(wh);return t||n[e]||e}function U4(){const{breakpoints:t}=y.useContext(wh);return t}function $4(){const{minBreakpoint:t}=y.useContext(wh);return t}function B4(){const{dir:t}=y.useContext(wh);return t==="rtl"}function Eh(t){return t&&t.ownerDocument||document}function z4(t){var e=Eh(t);return e&&e.defaultView||window}function W4(t,e){return z4(t).getComputedStyle(t,e)}var H4=/([A-Z])/g;function q4(t){return t.replace(H4,"-$1").toLowerCase()}var G4=/^ms-/;function Wu(t){return q4(t).replace(G4,"-ms-")}var K4=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function Q4(t){return!!(t&&K4.test(t))}function Gi(t,e){var n="",r="";if(typeof e=="string")return t.style.getPropertyValue(Wu(e))||W4(t).getPropertyValue(Wu(e));Object.keys(e).forEach(function(i){var s=e[i];!s&&s!==0?t.style.removeProperty(Wu(i)):Q4(i)?r+=i+"("+s+") ":n+=Wu(i)+": "+s+";"}),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n}var dC={exports:{}},Y4="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",J4=Y4,X4=J4;function hC(){}function fC(){}fC.resetWarningCache=hC;var Z4=function(){function t(r,i,s,o,a,l){if(l!==X4){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:fC,resetWarningCache:hC};return n.PropTypes=n,n};dC.exports=Z4();var eB=dC.exports;const ur=xl(eB),UE={disabled:!1},pC=Tt.createContext(null);var tB=function(e){return e.scrollTop},Ca="unmounted",Di="exited",jn="entering",Wr="entered",md="exiting",kr=function(t){j4(e,t);function e(r,i){var s;s=t.call(this,r,i)||this;var o=i,a=o&&!o.isMounting?r.enter:r.appear,l;return s.appearStatus=null,r.in?a?(l=Di,s.appearStatus=jn):l=Wr:r.unmountOnExit||r.mountOnEnter?l=Ca:l=Di,s.state={status:l},s.nextCallback=null,s}e.getDerivedStateFromProps=function(i,s){var o=i.in;return o&&s.status===Ca?{status:Di}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var s=null;if(i!==this.props){var o=this.state.status;this.props.in?o!==jn&&o!==Wr&&(s=jn):(o===jn||o===Wr)&&(s=md)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,s,o,a;return s=o=a=i,i!=null&&typeof i!="number"&&(s=i.exit,o=i.enter,a=i.appear!==void 0?i.appear:o),{exit:s,enter:o,appear:a}},n.updateStatus=function(i,s){if(i===void 0&&(i=!1),s!==null)if(this.cancelNextCallback(),s===jn){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:zs.findDOMNode(this);o&&tB(o)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Di&&this.setState({status:Ca})},n.performEnter=function(i){var s=this,o=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[zs.findDOMNode(this),a],c=l[0],d=l[1],f=this.getTimeouts(),g=a?f.appear:f.enter;if(!i&&!o||UE.disabled){this.safeSetState({status:Wr},function(){s.props.onEntered(c)});return}this.props.onEnter(c,d),this.safeSetState({status:jn},function(){s.props.onEntering(c,d),s.onTransitionEnd(g,function(){s.safeSetState({status:Wr},function(){s.props.onEntered(c,d)})})})},n.performExit=function(){var i=this,s=this.props.exit,o=this.getTimeouts(),a=this.props.nodeRef?void 0:zs.findDOMNode(this);if(!s||UE.disabled){this.safeSetState({status:Di},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:md},function(){i.props.onExiting(a),i.onTransitionEnd(o.exit,function(){i.safeSetState({status:Di},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,s){s=this.setNextCallback(s),this.setState(i,s)},n.setNextCallback=function(i){var s=this,o=!0;return this.nextCallback=function(a){o&&(o=!1,s.nextCallback=null,i(a))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(i,s){this.setNextCallback(s);var o=this.props.nodeRef?this.props.nodeRef.current:zs.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!o||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],c=l[0],d=l[1];this.props.addEndListener(c,d)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===Ca)return null;var s=this.props,o=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var a=cC(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Tt.createElement(pC.Provider,{value:null},typeof o=="function"?o(i,a):Tt.cloneElement(Tt.Children.only(o),a))},e}(Tt.Component);kr.contextType=pC;kr.propTypes={};function Ss(){}kr.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Ss,onEntering:Ss,onEntered:Ss,onExit:Ss,onExiting:Ss,onExited:Ss};kr.UNMOUNTED=Ca;kr.EXITED=Di;kr.ENTERING=jn;kr.ENTERED=Wr;kr.EXITING=md;const Ih=!!(typeof window<"u"&&window.document&&window.document.createElement);var wm=!1,Em=!1;try{var Ff={get passive(){return wm=!0},get once(){return Em=wm=!0}};Ih&&(window.addEventListener("test",Ff,Ff),window.removeEventListener("test",Ff,!0))}catch{}function mC(t,e,n,r){if(r&&typeof r!="boolean"&&!Em){var i=r.once,s=r.capture,o=n;!Em&&i&&(o=n.__once||function a(l){this.removeEventListener(e,a,s),n.call(this,l)},n.__once=o),t.addEventListener(e,o,wm?r:s)}t.addEventListener(e,n,r)}function nB(t,e,n,r){var i=r&&typeof r!="boolean"?r.capture:r;t.removeEventListener(e,n,i),n.__once&&t.removeEventListener(e,n.__once,i)}function Qr(t,e,n,r){return mC(t,e,n,r),function(){nB(t,e,n,r)}}function rB(t,e,n,r){if(r===void 0&&(r=!0),t){var i=document.createEvent("HTMLEvents");i.initEvent(e,n,r),t.dispatchEvent(i)}}function iB(t){var e=Gi(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function sB(t,e,n){n===void 0&&(n=5);var r=!1,i=setTimeout(function(){r||rB(t,"transitionend",!0)},e+n),s=Qr(t,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(i),s()}}function oB(t,e,n,r){n==null&&(n=iB(t)||0);var i=sB(t,n,r),s=Qr(t,"transitionend",e);return function(){i(),s()}}function $E(t,e){const n=Gi(t,e)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function gC(t,e){const n=$E(t,"transitionDuration"),r=$E(t,"transitionDelay"),i=oB(t,s=>{s.target===t&&(i(),e(s))},n+r)}function aB(t){t.offsetHeight}const BE=t=>!t||typeof t=="function"?t:e=>{t.current=e};function lB(t,e){const n=BE(t),r=BE(e);return i=>{n&&n(i),r&&r(i)}}function $o(t,e){return y.useMemo(()=>lB(t,e),[t,e])}function uB(t){return t&&"setState"in t?zs.findDOMNode(t):t??null}const vC=Tt.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,onExited:s,addEndListener:o,children:a,childRef:l,...c},d)=>{const f=y.useRef(null),g=$o(f,l),k=L=>{g(uB(L))},R=L=>I=>{L&&f.current&&L(f.current,I)},x=y.useCallback(R(t),[t]),b=y.useCallback(R(e),[e]),E=y.useCallback(R(n),[n]),w=y.useCallback(R(r),[r]),S=y.useCallback(R(i),[i]),O=y.useCallback(R(s),[s]),M=y.useCallback(R(o),[o]);return m.jsx(kr,{ref:d,...c,onEnter:x,onEntered:E,onEntering:b,onExit:w,onExited:O,onExiting:S,addEndListener:M,nodeRef:f,children:typeof a=="function"?(L,I)=>a(L,{...I,ref:k}):Tt.cloneElement(a,{ref:k})})});function cB(t){const e=y.useRef(t);return y.useEffect(()=>{e.current=t},[t]),e}function et(t){const e=cB(t);return y.useCallback(function(...n){return e.current&&e.current(...n)},[e])}const dB=t=>y.forwardRef((e,n)=>m.jsx("div",{...e,ref:n,className:me(e.className,t)}));function hB(){return y.useState(null)}function fB(t,e,n,r=!1){const i=et(n);y.useEffect(()=>{const s=typeof t=="function"?t():t;return s.addEventListener(e,i,r),()=>s.removeEventListener(e,i,r)},[t])}function yC(){const t=y.useRef(!0),e=y.useRef(()=>t.current);return y.useEffect(()=>(t.current=!0,()=>{t.current=!1}),[]),e.current}function _C(t){const e=y.useRef(null);return y.useEffect(()=>{e.current=t}),e.current}const pB=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",mB=typeof document<"u",gd=mB||pB?y.useLayoutEffect:y.useEffect,gB=["as","disabled"];function vB(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function yB(t){return!t||t.trim()==="#"}function Pv({tagName:t,disabled:e,href:n,target:r,rel:i,role:s,onClick:o,tabIndex:a=0,type:l}){t||(n!=null||r!=null||i!=null?t="a":t="button");const c={tagName:t};if(t==="button")return[{type:l||"button",disabled:e},c];const d=g=>{if((e||t==="a"&&yB(n))&&g.preventDefault(),e){g.stopPropagation();return}o==null||o(g)},f=g=>{g.key===" "&&(g.preventDefault(),d(g))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:s??"button",disabled:void 0,tabIndex:e?void 0:a,href:n,target:t==="a"?r:void 0,"aria-disabled":e||void 0,rel:t==="a"?i:void 0,onClick:d,onKeyDown:f},c]}const wC=y.forwardRef((t,e)=>{let{as:n,disabled:r}=t,i=vB(t,gB);const[s,{tagName:o}]=Pv(Object.assign({tagName:n,disabled:r},i));return m.jsx(o,Object.assign({},i,s,{ref:e}))});wC.displayName="Button";const _B=["onKeyDown"];function wB(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function EB(t){return!t||t.trim()==="#"}const EC=y.forwardRef((t,e)=>{let{onKeyDown:n}=t,r=wB(t,_B);const[i]=Pv(Object.assign({tagName:"a"},r)),s=et(o=>{i.onKeyDown(o),n==null||n(o)});return EB(r.href)||r.role==="button"?m.jsx("a",Object.assign({ref:e},r,i,{onKeyDown:s})):m.jsx("a",Object.assign({ref:e},r,{onKeyDown:n}))});EC.displayName="Anchor";const IB={[jn]:"show",[Wr]:"show"},IC=y.forwardRef(({className:t,children:e,transitionClasses:n={},onEnter:r,...i},s)=>{const o={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...i},a=y.useCallback((l,c)=>{aB(l),r==null||r(l,c)},[r]);return m.jsx(vC,{ref:s,addEndListener:gC,...o,onEnter:a,childRef:e.ref,children:(l,c)=>y.cloneElement(e,{...c,className:me("fade",t,e.props.className,IB[l],n[l])})})});IC.displayName="Fade";const TB={"aria-label":ur.string,onClick:ur.func,variant:ur.oneOf(["white"])},bv=y.forwardRef(({className:t,variant:e,"aria-label":n="Close",...r},i)=>m.jsx("button",{ref:i,type:"button",className:me("btn-close",e&&`btn-close-${e}`,t),"aria-label":n,...r}));bv.displayName="CloseButton";bv.propTypes=TB;const Th=y.forwardRef(({as:t,bsPrefix:e,variant:n="primary",size:r,active:i=!1,disabled:s=!1,className:o,...a},l)=>{const c=ke(e,"btn"),[d,{tagName:f}]=Pv({tagName:t,disabled:s,...a}),g=f;return m.jsx(g,{...d,...a,ref:l,disabled:s,className:me(o,c,i&&"active",n&&`${c}-${n}`,r&&`${c}-${r}`,a.href&&s&&"disabled")})});Th.displayName="Button";function SB(t){const e=y.useRef(t);return e.current=t,e}function kB(t){const e=SB(t);y.useEffect(()=>()=>e.current(),[])}function RB(t,e){return y.Children.toArray(t).some(n=>y.isValidElement(n)&&n.type===e)}function CB({as:t,bsPrefix:e,className:n,...r}){e=ke(e,"col");const i=U4(),s=$4(),o=[],a=[];return i.forEach(l=>{const c=r[l];delete r[l];let d,f,g;typeof c=="object"&&c!=null?{span:d,offset:f,order:g}=c:d=c;const k=l!==s?`-${l}`:"";d&&o.push(d===!0?`${e}${k}`:`${e}${k}-${d}`),g!=null&&a.push(`order${k}-${g}`),f!=null&&a.push(`offset${k}-${f}`)}),[{...r,className:me(n,...o,...a)},{as:t,bsPrefix:e,spans:o}]}const TC=y.forwardRef((t,e)=>{const[{className:n,...r},{as:i="div",bsPrefix:s,spans:o}]=CB(t);return m.jsx(i,{...r,ref:e,className:me(n,!o.length&&s)})});TC.displayName="Col";var AB=Function.prototype.bind.call(Function.prototype.call,[].slice);function jr(t,e){return AB(t.querySelectorAll(e))}function PB(t,e,n){const r=y.useRef(t!==void 0),[i,s]=y.useState(e),o=t!==void 0,a=r.current;return r.current=o,!o&&a&&i!==e&&s(e),[o?t:i,y.useCallback((...l)=>{const[c,...d]=l;let f=n==null?void 0:n(c,...d);return s(c),f},[n])]}function bB(){const[,t]=y.useReducer(e=>!e,!1);return t}const Sh=y.createContext(null);var zE=Object.prototype.hasOwnProperty;function WE(t,e,n){for(n of t.keys())if(qa(n,e))return n}function qa(t,e){var n,r,i;if(t===e)return!0;if(t&&e&&(n=t.constructor)===e.constructor){if(n===Date)return t.getTime()===e.getTime();if(n===RegExp)return t.toString()===e.toString();if(n===Array){if((r=t.length)===e.length)for(;r--&&qa(t[r],e[r]););return r===-1}if(n===Set){if(t.size!==e.size)return!1;for(r of t)if(i=r,i&&typeof i=="object"&&(i=WE(e,i),!i)||!e.has(i))return!1;return!0}if(n===Map){if(t.size!==e.size)return!1;for(r of t)if(i=r[0],i&&typeof i=="object"&&(i=WE(e,i),!i)||!qa(r[1],e.get(i)))return!1;return!0}if(n===ArrayBuffer)t=new Uint8Array(t),e=new Uint8Array(e);else if(n===DataView){if((r=t.byteLength)===e.byteLength)for(;r--&&t.getInt8(r)===e.getInt8(r););return r===-1}if(ArrayBuffer.isView(t)){if((r=t.byteLength)===e.byteLength)for(;r--&&t[r]===e[r];);return r===-1}if(!n||typeof t=="object"){r=0;for(n in t)if(zE.call(t,n)&&++r&&!zE.call(e,n)||!(n in e)||!qa(t[n],e[n]))return!1;return Object.keys(e).length===r}}return t!==t&&e!==e}function NB(t){const e=yC();return[t[0],y.useCallback(n=>{if(e())return t[1](n)},[e,t[1]])]}var Ft="top",cn="bottom",dn="right",Ut="left",Nv="auto",Xl=[Ft,cn,dn,Ut],wo="start",bl="end",xB="clippingParents",SC="viewport",ga="popper",OB="reference",HE=Xl.reduce(function(t,e){return t.concat([e+"-"+wo,e+"-"+bl])},[]),kC=[].concat(Xl,[Nv]).reduce(function(t,e){return t.concat([e,e+"-"+wo,e+"-"+bl])},[]),DB="beforeRead",LB="read",MB="afterRead",jB="beforeMain",VB="main",FB="afterMain",UB="beforeWrite",$B="write",BB="afterWrite",zB=[DB,LB,MB,jB,VB,FB,UB,$B,BB];function qn(t){return t.split("-")[0]}function Jt(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function hs(t){var e=Jt(t).Element;return t instanceof e||t instanceof Element}function Gn(t){var e=Jt(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function xv(t){if(typeof ShadowRoot>"u")return!1;var e=Jt(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}var Ki=Math.max,vd=Math.min,Eo=Math.round;function Im(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function RC(){return!/^((?!chrome|android).)*safari/i.test(Im())}function Io(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var r=t.getBoundingClientRect(),i=1,s=1;e&&Gn(t)&&(i=t.offsetWidth>0&&Eo(r.width)/t.offsetWidth||1,s=t.offsetHeight>0&&Eo(r.height)/t.offsetHeight||1);var o=hs(t)?Jt(t):window,a=o.visualViewport,l=!RC()&&n,c=(r.left+(l&&a?a.offsetLeft:0))/i,d=(r.top+(l&&a?a.offsetTop:0))/s,f=r.width/i,g=r.height/s;return{width:f,height:g,top:d,right:c+f,bottom:d+g,left:c,x:c,y:d}}function Ov(t){var e=Io(t),n=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:r}}function CC(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&xv(n)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function mi(t){return t?(t.nodeName||"").toLowerCase():null}function yr(t){return Jt(t).getComputedStyle(t)}function WB(t){return["table","td","th"].indexOf(mi(t))>=0}function Ti(t){return((hs(t)?t.ownerDocument:t.document)||window.document).documentElement}function kh(t){return mi(t)==="html"?t:t.assignedSlot||t.parentNode||(xv(t)?t.host:null)||Ti(t)}function qE(t){return!Gn(t)||yr(t).position==="fixed"?null:t.offsetParent}function HB(t){var e=/firefox/i.test(Im()),n=/Trident/i.test(Im());if(n&&Gn(t)){var r=yr(t);if(r.position==="fixed")return null}var i=kh(t);for(xv(i)&&(i=i.host);Gn(i)&&["html","body"].indexOf(mi(i))<0;){var s=yr(i);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||e&&s.willChange==="filter"||e&&s.filter&&s.filter!=="none")return i;i=i.parentNode}return null}function Zl(t){for(var e=Jt(t),n=qE(t);n&&WB(n)&&yr(n).position==="static";)n=qE(n);return n&&(mi(n)==="html"||mi(n)==="body"&&yr(n).position==="static")?e:n||HB(t)||e}function Dv(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Ga(t,e,n){return Ki(t,vd(e,n))}function qB(t,e,n){var r=Ga(t,e,n);return r>n?n:r}function AC(){return{top:0,right:0,bottom:0,left:0}}function PC(t){return Object.assign({},AC(),t)}function bC(t,e){return e.reduce(function(n,r){return n[r]=t,n},{})}var GB=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,PC(typeof e!="number"?e:bC(e,Xl))};function KB(t){var e,n=t.state,r=t.name,i=t.options,s=n.elements.arrow,o=n.modifiersData.popperOffsets,a=qn(n.placement),l=Dv(a),c=[Ut,dn].indexOf(a)>=0,d=c?"height":"width";if(!(!s||!o)){var f=GB(i.padding,n),g=Ov(s),k=l==="y"?Ft:Ut,R=l==="y"?cn:dn,x=n.rects.reference[d]+n.rects.reference[l]-o[l]-n.rects.popper[d],b=o[l]-n.rects.reference[l],E=Zl(s),w=E?l==="y"?E.clientHeight||0:E.clientWidth||0:0,S=x/2-b/2,O=f[k],M=w-g[d]-f[R],L=w/2-g[d]/2+S,I=Ga(O,L,M),v=l;n.modifiersData[r]=(e={},e[v]=I,e.centerOffset=I-L,e)}}function QB(t){var e=t.state,n=t.options,r=n.element,i=r===void 0?"[data-popper-arrow]":r;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||CC(e.elements.popper,i)&&(e.elements.arrow=i))}const YB={name:"arrow",enabled:!0,phase:"main",fn:KB,effect:QB,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function To(t){return t.split("-")[1]}var JB={top:"auto",right:"auto",bottom:"auto",left:"auto"};function XB(t,e){var n=t.x,r=t.y,i=e.devicePixelRatio||1;return{x:Eo(n*i)/i||0,y:Eo(r*i)/i||0}}function GE(t){var e,n=t.popper,r=t.popperRect,i=t.placement,s=t.variation,o=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,d=t.roundOffsets,f=t.isFixed,g=o.x,k=g===void 0?0:g,R=o.y,x=R===void 0?0:R,b=typeof d=="function"?d({x:k,y:x}):{x:k,y:x};k=b.x,x=b.y;var E=o.hasOwnProperty("x"),w=o.hasOwnProperty("y"),S=Ut,O=Ft,M=window;if(c){var L=Zl(n),I="clientHeight",v="clientWidth";if(L===Jt(n)&&(L=Ti(n),yr(L).position!=="static"&&a==="absolute"&&(I="scrollHeight",v="scrollWidth")),L=L,i===Ft||(i===Ut||i===dn)&&s===bl){O=cn;var T=f&&L===M&&M.visualViewport?M.visualViewport.height:L[I];x-=T-r.height,x*=l?1:-1}if(i===Ut||(i===Ft||i===cn)&&s===bl){S=dn;var A=f&&L===M&&M.visualViewport?M.visualViewport.width:L[v];k-=A-r.width,k*=l?1:-1}}var P=Object.assign({position:a},c&&JB),N=d===!0?XB({x:k,y:x},Jt(n)):{x:k,y:x};if(k=N.x,x=N.y,l){var C;return Object.assign({},P,(C={},C[O]=w?"0":"",C[S]=E?"0":"",C.transform=(M.devicePixelRatio||1)<=1?"translate("+k+"px, "+x+"px)":"translate3d("+k+"px, "+x+"px, 0)",C))}return Object.assign({},P,(e={},e[O]=w?x+"px":"",e[S]=E?k+"px":"",e.transform="",e))}function ZB(t){var e=t.state,n=t.options,r=n.gpuAcceleration,i=r===void 0?!0:r,s=n.adaptive,o=s===void 0?!0:s,a=n.roundOffsets,l=a===void 0?!0:a,c={placement:qn(e.placement),variation:To(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,GE(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,GE(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const e9={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:ZB,data:{}};var Hu={passive:!0};function t9(t){var e=t.state,n=t.instance,r=t.options,i=r.scroll,s=i===void 0?!0:i,o=r.resize,a=o===void 0?!0:o,l=Jt(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return s&&c.forEach(function(d){d.addEventListener("scroll",n.update,Hu)}),a&&l.addEventListener("resize",n.update,Hu),function(){s&&c.forEach(function(d){d.removeEventListener("scroll",n.update,Hu)}),a&&l.removeEventListener("resize",n.update,Hu)}}const n9={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:t9,data:{}};var r9={left:"right",right:"left",bottom:"top",top:"bottom"};function vc(t){return t.replace(/left|right|bottom|top/g,function(e){return r9[e]})}var i9={start:"end",end:"start"};function KE(t){return t.replace(/start|end/g,function(e){return i9[e]})}function Lv(t){var e=Jt(t),n=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Mv(t){return Io(Ti(t)).left+Lv(t).scrollLeft}function s9(t,e){var n=Jt(t),r=Ti(t),i=n.visualViewport,s=r.clientWidth,o=r.clientHeight,a=0,l=0;if(i){s=i.width,o=i.height;var c=RC();(c||!c&&e==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:s,height:o,x:a+Mv(t),y:l}}function o9(t){var e,n=Ti(t),r=Lv(t),i=(e=t.ownerDocument)==null?void 0:e.body,s=Ki(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=Ki(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-r.scrollLeft+Mv(t),l=-r.scrollTop;return yr(i||n).direction==="rtl"&&(a+=Ki(n.clientWidth,i?i.clientWidth:0)-s),{width:s,height:o,x:a,y:l}}function jv(t){var e=yr(t),n=e.overflow,r=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function NC(t){return["html","body","#document"].indexOf(mi(t))>=0?t.ownerDocument.body:Gn(t)&&jv(t)?t:NC(kh(t))}function Ka(t,e){var n;e===void 0&&(e=[]);var r=NC(t),i=r===((n=t.ownerDocument)==null?void 0:n.body),s=Jt(r),o=i?[s].concat(s.visualViewport||[],jv(r)?r:[]):r,a=e.concat(o);return i?a:a.concat(Ka(kh(o)))}function Tm(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function a9(t,e){var n=Io(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function QE(t,e,n){return e===SC?Tm(s9(t,n)):hs(e)?a9(e,n):Tm(o9(Ti(t)))}function l9(t){var e=Ka(kh(t)),n=["absolute","fixed"].indexOf(yr(t).position)>=0,r=n&&Gn(t)?Zl(t):t;return hs(r)?e.filter(function(i){return hs(i)&&CC(i,r)&&mi(i)!=="body"}):[]}function u9(t,e,n,r){var i=e==="clippingParents"?l9(t):[].concat(e),s=[].concat(i,[n]),o=s[0],a=s.reduce(function(l,c){var d=QE(t,c,r);return l.top=Ki(d.top,l.top),l.right=vd(d.right,l.right),l.bottom=vd(d.bottom,l.bottom),l.left=Ki(d.left,l.left),l},QE(t,o,r));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function xC(t){var e=t.reference,n=t.element,r=t.placement,i=r?qn(r):null,s=r?To(r):null,o=e.x+e.width/2-n.width/2,a=e.y+e.height/2-n.height/2,l;switch(i){case Ft:l={x:o,y:e.y-n.height};break;case cn:l={x:o,y:e.y+e.height};break;case dn:l={x:e.x+e.width,y:a};break;case Ut:l={x:e.x-n.width,y:a};break;default:l={x:e.x,y:e.y}}var c=i?Dv(i):null;if(c!=null){var d=c==="y"?"height":"width";switch(s){case wo:l[c]=l[c]-(e[d]/2-n[d]/2);break;case bl:l[c]=l[c]+(e[d]/2-n[d]/2);break}}return l}function Nl(t,e){e===void 0&&(e={});var n=e,r=n.placement,i=r===void 0?t.placement:r,s=n.strategy,o=s===void 0?t.strategy:s,a=n.boundary,l=a===void 0?xB:a,c=n.rootBoundary,d=c===void 0?SC:c,f=n.elementContext,g=f===void 0?ga:f,k=n.altBoundary,R=k===void 0?!1:k,x=n.padding,b=x===void 0?0:x,E=PC(typeof b!="number"?b:bC(b,Xl)),w=g===ga?OB:ga,S=t.rects.popper,O=t.elements[R?w:g],M=u9(hs(O)?O:O.contextElement||Ti(t.elements.popper),l,d,o),L=Io(t.elements.reference),I=xC({reference:L,element:S,strategy:"absolute",placement:i}),v=Tm(Object.assign({},S,I)),T=g===ga?v:L,A={top:M.top-T.top+E.top,bottom:T.bottom-M.bottom+E.bottom,left:M.left-T.left+E.left,right:T.right-M.right+E.right},P=t.modifiersData.offset;if(g===ga&&P){var N=P[i];Object.keys(A).forEach(function(C){var F=[dn,cn].indexOf(C)>=0?1:-1,H=[Ft,cn].indexOf(C)>=0?"y":"x";A[C]+=N[H]*F})}return A}function c9(t,e){e===void 0&&(e={});var n=e,r=n.placement,i=n.boundary,s=n.rootBoundary,o=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,c=l===void 0?kC:l,d=To(r),f=d?a?HE:HE.filter(function(R){return To(R)===d}):Xl,g=f.filter(function(R){return c.indexOf(R)>=0});g.length===0&&(g=f);var k=g.reduce(function(R,x){return R[x]=Nl(t,{placement:x,boundary:i,rootBoundary:s,padding:o})[qn(x)],R},{});return Object.keys(k).sort(function(R,x){return k[R]-k[x]})}function d9(t){if(qn(t)===Nv)return[];var e=vc(t);return[KE(t),e,KE(e)]}function h9(t){var e=t.state,n=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var i=n.mainAxis,s=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!0:o,l=n.fallbackPlacements,c=n.padding,d=n.boundary,f=n.rootBoundary,g=n.altBoundary,k=n.flipVariations,R=k===void 0?!0:k,x=n.allowedAutoPlacements,b=e.options.placement,E=qn(b),w=E===b,S=l||(w||!R?[vc(b)]:d9(b)),O=[b].concat(S).reduce(function(Ne,de){return Ne.concat(qn(de)===Nv?c9(e,{placement:de,boundary:d,rootBoundary:f,padding:c,flipVariations:R,allowedAutoPlacements:x}):de)},[]),M=e.rects.reference,L=e.rects.popper,I=new Map,v=!0,T=O[0],A=0;A<O.length;A++){var P=O[A],N=qn(P),C=To(P)===wo,F=[Ft,cn].indexOf(N)>=0,H=F?"width":"height",ee=Nl(e,{placement:P,boundary:d,rootBoundary:f,altBoundary:g,padding:c}),Z=F?C?dn:Ut:C?cn:Ft;M[H]>L[H]&&(Z=vc(Z));var V=vc(Z),K=[];if(s&&K.push(ee[N]<=0),a&&K.push(ee[Z]<=0,ee[V]<=0),K.every(function(Ne){return Ne})){T=P,v=!1;break}I.set(P,K)}if(v)for(var G=R?3:1,oe=function(de){var Ve=O.find(function(pt){var fn=I.get(pt);if(fn)return fn.slice(0,de).every(function(Qn){return Qn})});if(Ve)return T=Ve,"break"},ne=G;ne>0;ne--){var ce=oe(ne);if(ce==="break")break}e.placement!==T&&(e.modifiersData[r]._skip=!0,e.placement=T,e.reset=!0)}}const f9={name:"flip",enabled:!0,phase:"main",fn:h9,requiresIfExists:["offset"],data:{_skip:!1}};function YE(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function JE(t){return[Ft,dn,cn,Ut].some(function(e){return t[e]>=0})}function p9(t){var e=t.state,n=t.name,r=e.rects.reference,i=e.rects.popper,s=e.modifiersData.preventOverflow,o=Nl(e,{elementContext:"reference"}),a=Nl(e,{altBoundary:!0}),l=YE(o,r),c=YE(a,i,s),d=JE(l),f=JE(c);e.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:d,hasPopperEscaped:f},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":f})}const m9={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:p9};function g9(t,e,n){var r=qn(t),i=[Ut,Ft].indexOf(r)>=0?-1:1,s=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,o=s[0],a=s[1];return o=o||0,a=(a||0)*i,[Ut,dn].indexOf(r)>=0?{x:a,y:o}:{x:o,y:a}}function v9(t){var e=t.state,n=t.options,r=t.name,i=n.offset,s=i===void 0?[0,0]:i,o=kC.reduce(function(d,f){return d[f]=g9(f,e.rects,s),d},{}),a=o[e.placement],l=a.x,c=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[r]=o}const y9={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:v9};function _9(t){var e=t.state,n=t.name;e.modifiersData[n]=xC({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const w9={name:"popperOffsets",enabled:!0,phase:"read",fn:_9,data:{}};function E9(t){return t==="x"?"y":"x"}function I9(t){var e=t.state,n=t.options,r=t.name,i=n.mainAxis,s=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!1:o,l=n.boundary,c=n.rootBoundary,d=n.altBoundary,f=n.padding,g=n.tether,k=g===void 0?!0:g,R=n.tetherOffset,x=R===void 0?0:R,b=Nl(e,{boundary:l,rootBoundary:c,padding:f,altBoundary:d}),E=qn(e.placement),w=To(e.placement),S=!w,O=Dv(E),M=E9(O),L=e.modifiersData.popperOffsets,I=e.rects.reference,v=e.rects.popper,T=typeof x=="function"?x(Object.assign({},e.rects,{placement:e.placement})):x,A=typeof T=="number"?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),P=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,N={x:0,y:0};if(L){if(s){var C,F=O==="y"?Ft:Ut,H=O==="y"?cn:dn,ee=O==="y"?"height":"width",Z=L[O],V=Z+b[F],K=Z-b[H],G=k?-v[ee]/2:0,oe=w===wo?I[ee]:v[ee],ne=w===wo?-v[ee]:-I[ee],ce=e.elements.arrow,Ne=k&&ce?Ov(ce):{width:0,height:0},de=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:AC(),Ve=de[F],pt=de[H],fn=Ga(0,I[ee],Ne[ee]),Qn=S?I[ee]/2-G-fn-Ve-A.mainAxis:oe-fn-Ve-A.mainAxis,bn=S?-I[ee]/2+G+fn+pt+A.mainAxis:ne+fn+pt+A.mainAxis,Nn=e.elements.arrow&&Zl(e.elements.arrow),Rr=Nn?O==="y"?Nn.clientTop||0:Nn.clientLeft||0:0,xn=(C=P==null?void 0:P[O])!=null?C:0,On=Z+Qn-xn-Rr,ve=Z+bn-xn,Cr=Ga(k?vd(V,On):V,Z,k?Ki(K,ve):K);L[O]=Cr,N[O]=Cr-Z}if(a){var Ar,Ah=O==="x"?Ft:Ut,tu=O==="x"?cn:dn,pn=L[M],Si=M==="y"?"height":"width",nu=pn+b[Ah],vs=pn-b[tu],ki=[Ft,Ut].indexOf(E)!==-1,Bo=(Ar=P==null?void 0:P[M])!=null?Ar:0,qe=ki?nu:pn-I[Si]-v[Si]-Bo+A.altAxis,Ye=ki?pn+I[Si]+v[Si]-Bo-A.altAxis:vs,Ri=k&&ki?qB(qe,pn,Ye):Ga(k?qe:nu,pn,k?Ye:vs);L[M]=Ri,N[M]=Ri-pn}e.modifiersData[r]=N}}const T9={name:"preventOverflow",enabled:!0,phase:"main",fn:I9,requiresIfExists:["offset"]};function S9(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function k9(t){return t===Jt(t)||!Gn(t)?Lv(t):S9(t)}function R9(t){var e=t.getBoundingClientRect(),n=Eo(e.width)/t.offsetWidth||1,r=Eo(e.height)/t.offsetHeight||1;return n!==1||r!==1}function C9(t,e,n){n===void 0&&(n=!1);var r=Gn(e),i=Gn(e)&&R9(e),s=Ti(e),o=Io(t,i,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(r||!r&&!n)&&((mi(e)!=="body"||jv(s))&&(a=k9(e)),Gn(e)?(l=Io(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):s&&(l.x=Mv(s))),{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function A9(t){var e=new Map,n=new Set,r=[];t.forEach(function(s){e.set(s.name,s)});function i(s){n.add(s.name);var o=[].concat(s.requires||[],s.requiresIfExists||[]);o.forEach(function(a){if(!n.has(a)){var l=e.get(a);l&&i(l)}}),r.push(s)}return t.forEach(function(s){n.has(s.name)||i(s)}),r}function P9(t){var e=A9(t);return zB.reduce(function(n,r){return n.concat(e.filter(function(i){return i.phase===r}))},[])}function b9(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function N9(t){var e=t.reduce(function(n,r){var i=n[r.name];return n[r.name]=i?Object.assign({},i,r,{options:Object.assign({},i.options,r.options),data:Object.assign({},i.data,r.data)}):r,n},{});return Object.keys(e).map(function(n){return e[n]})}var XE={placement:"bottom",modifiers:[],strategy:"absolute"};function ZE(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function x9(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,r=n===void 0?[]:n,i=e.defaultOptions,s=i===void 0?XE:i;return function(a,l,c){c===void 0&&(c=s);var d={placement:"bottom",orderedModifiers:[],options:Object.assign({},XE,s),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},f=[],g=!1,k={state:d,setOptions:function(E){var w=typeof E=="function"?E(d.options):E;x(),d.options=Object.assign({},s,d.options,w),d.scrollParents={reference:hs(a)?Ka(a):a.contextElement?Ka(a.contextElement):[],popper:Ka(l)};var S=P9(N9([].concat(r,d.options.modifiers)));return d.orderedModifiers=S.filter(function(O){return O.enabled}),R(),k.update()},forceUpdate:function(){if(!g){var E=d.elements,w=E.reference,S=E.popper;if(ZE(w,S)){d.rects={reference:C9(w,Zl(S),d.options.strategy==="fixed"),popper:Ov(S)},d.reset=!1,d.placement=d.options.placement,d.orderedModifiers.forEach(function(A){return d.modifiersData[A.name]=Object.assign({},A.data)});for(var O=0;O<d.orderedModifiers.length;O++){if(d.reset===!0){d.reset=!1,O=-1;continue}var M=d.orderedModifiers[O],L=M.fn,I=M.options,v=I===void 0?{}:I,T=M.name;typeof L=="function"&&(d=L({state:d,options:v,name:T,instance:k})||d)}}}},update:b9(function(){return new Promise(function(b){k.forceUpdate(),b(d)})}),destroy:function(){x(),g=!0}};if(!ZE(a,l))return k;k.setOptions(c).then(function(b){!g&&c.onFirstUpdate&&c.onFirstUpdate(b)});function R(){d.orderedModifiers.forEach(function(b){var E=b.name,w=b.options,S=w===void 0?{}:w,O=b.effect;if(typeof O=="function"){var M=O({state:d,name:E,instance:k,options:S}),L=function(){};f.push(M||L)}})}function x(){f.forEach(function(b){return b()}),f=[]}return k}}const O9=x9({defaultModifiers:[m9,w9,e9,n9,y9,f9,T9,YB]}),D9=["enabled","placement","strategy","modifiers"];function L9(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const M9={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},j9={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:t})=>()=>{const{reference:e,popper:n}=t.elements;if("removeAttribute"in e){const r=(e.getAttribute("aria-describedby")||"").split(",").filter(i=>i.trim()!==n.id);r.length?e.setAttribute("aria-describedby",r.join(",")):e.removeAttribute("aria-describedby")}},fn:({state:t})=>{var e;const{popper:n,reference:r}=t.elements,i=(e=n.getAttribute("role"))==null?void 0:e.toLowerCase();if(n.id&&i==="tooltip"&&"setAttribute"in r){const s=r.getAttribute("aria-describedby");if(s&&s.split(",").indexOf(n.id)!==-1)return;r.setAttribute("aria-describedby",s?`${s},${n.id}`:n.id)}}},V9=[];function F9(t,e,n={}){let{enabled:r=!0,placement:i="bottom",strategy:s="absolute",modifiers:o=V9}=n,a=L9(n,D9);const l=y.useRef(o),c=y.useRef(),d=y.useCallback(()=>{var b;(b=c.current)==null||b.update()},[]),f=y.useCallback(()=>{var b;(b=c.current)==null||b.forceUpdate()},[]),[g,k]=NB(y.useState({placement:i,update:d,forceUpdate:f,attributes:{},styles:{popper:{},arrow:{}}})),R=y.useMemo(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:b})=>{const E={},w={};Object.keys(b.elements).forEach(S=>{E[S]=b.styles[S],w[S]=b.attributes[S]}),k({state:b,styles:E,attributes:w,update:d,forceUpdate:f,placement:b.placement})}}),[d,f,k]),x=y.useMemo(()=>(qa(l.current,o)||(l.current=o),l.current),[o]);return y.useEffect(()=>{!c.current||!r||c.current.setOptions({placement:i,strategy:s,modifiers:[...x,R,M9]})},[s,i,R,r,x]),y.useEffect(()=>{if(!(!r||t==null||e==null))return c.current=O9(t,e,Object.assign({},a,{placement:i,strategy:s,modifiers:[...x,j9,R]})),()=>{c.current!=null&&(c.current.destroy(),c.current=void 0,k(b=>Object.assign({},b,{attributes:{},styles:{popper:{}}})))}},[r,t,e]),g}function yd(t,e){if(t.contains)return t.contains(e);if(t.compareDocumentPosition)return t===e||!!(t.compareDocumentPosition(e)&16)}var U9=function(){},$9=U9;const B9=xl($9),e0=()=>{};function z9(t){return t.button===0}function W9(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}const Uf=t=>t&&("current"in t?t.current:t),t0={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};function H9(t,e=e0,{disabled:n,clickTrigger:r="click"}={}){const i=y.useRef(!1),s=y.useRef(!1),o=y.useCallback(c=>{const d=Uf(t);B9(!!d,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),i.current=!d||W9(c)||!z9(c)||!!yd(d,c.target)||s.current,s.current=!1},[t]),a=et(c=>{const d=Uf(t);d&&yd(d,c.target)&&(s.current=!0)}),l=et(c=>{i.current||e(c)});y.useEffect(()=>{var c,d;if(n||t==null)return;const f=Eh(Uf(t)),g=f.defaultView||window;let k=(c=g.event)!=null?c:(d=g.parent)==null?void 0:d.event,R=null;t0[r]&&(R=Qr(f,t0[r],a,!0));const x=Qr(f,r,o,!0),b=Qr(f,r,w=>{if(w===k){k=void 0;return}l(w)});let E=[];return"ontouchstart"in f.documentElement&&(E=[].slice.call(f.body.children).map(w=>Qr(w,"mousemove",e0))),()=>{R==null||R(),x(),b(),E.forEach(w=>w())}},[t,n,r,o,a,l])}function q9(t){const e={};return Array.isArray(t)?(t==null||t.forEach(n=>{e[n.name]=n}),e):t||e}function G9(t={}){return Array.isArray(t)?t:Object.keys(t).map(e=>(t[e].name=e,t[e]))}function K9({enabled:t,enableEvents:e,placement:n,flip:r,offset:i,fixed:s,containerPadding:o,arrowElement:a,popperConfig:l={}}){var c,d,f,g,k;const R=q9(l.modifiers);return Object.assign({},l,{placement:n,enabled:t,strategy:s?"fixed":l.strategy,modifiers:G9(Object.assign({},R,{eventListeners:{enabled:e,options:(c=R.eventListeners)==null?void 0:c.options},preventOverflow:Object.assign({},R.preventOverflow,{options:o?Object.assign({padding:o},(d=R.preventOverflow)==null?void 0:d.options):(f=R.preventOverflow)==null?void 0:f.options}),offset:{options:Object.assign({offset:i},(g=R.offset)==null?void 0:g.options)},arrow:Object.assign({},R.arrow,{enabled:!!a,options:Object.assign({},(k=R.arrow)==null?void 0:k.options,{element:a})}),flip:Object.assign({enabled:!!r},R.flip)}))})}const Q9=["children","usePopper"];function Y9(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const J9=()=>{};function OC(t={}){const e=y.useContext(Sh),[n,r]=hB(),i=y.useRef(!1),{flip:s,offset:o,rootCloseEvent:a,fixed:l=!1,placement:c,popperConfig:d={},enableEventListeners:f=!0,usePopper:g=!!e}=t,k=(e==null?void 0:e.show)==null?!!t.show:e.show;k&&!i.current&&(i.current=!0);const R=L=>{e==null||e.toggle(!1,L)},{placement:x,setMenu:b,menuElement:E,toggleElement:w}=e||{},S=F9(w,E,K9({placement:c||x||"bottom-start",enabled:g,enableEvents:f??k,offset:o,flip:s,fixed:l,arrowElement:n,popperConfig:d})),O=Object.assign({ref:b||J9,"aria-labelledby":w==null?void 0:w.id},S.attributes.popper,{style:S.styles.popper}),M={show:k,placement:x,hasShown:i.current,toggle:e==null?void 0:e.toggle,popper:g?S:null,arrowProps:g?Object.assign({ref:r},S.attributes.arrow,{style:S.styles.arrow}):{}};return H9(E,R,{clickTrigger:a,disabled:!k}),[O,M]}function DC(t){let{children:e,usePopper:n=!0}=t,r=Y9(t,Q9);const[i,s]=OC(Object.assign({},r,{usePopper:n}));return m.jsx(m.Fragment,{children:e(i,s)})}DC.displayName="DropdownMenu";const _d={prefix:String(Math.round(Math.random()*1e10)),current:0},LC=Tt.createContext(_d),X9=Tt.createContext(!1);let Z9=!!(typeof window<"u"&&window.document&&window.document.createElement),$f=new WeakMap;function e6(t=!1){let e=y.useContext(LC),n=y.useRef(null);if(n.current===null&&!t){var r,i;let s=(i=Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)===null||i===void 0||(r=i.ReactCurrentOwner)===null||r===void 0?void 0:r.current;if(s){let o=$f.get(s);o==null?$f.set(s,{id:e.current,state:s.memoizedState}):s.memoizedState!==o.state&&(e.current=o.id,$f.delete(s))}n.current=++e.current}return n.current}function t6(t){let e=y.useContext(LC);e===_d&&!Z9&&console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let n=e6(!!t),r=`react-aria${e.prefix}`;return t||`${r}-${n}`}function n6(t){let e=Tt.useId(),[n]=y.useState(a6()),r=n?"react-aria":`react-aria${_d.prefix}`;return t||`${r}-${e}`}const r6=typeof Tt.useId=="function"?n6:t6;function i6(){return!1}function s6(){return!0}function o6(t){return()=>{}}function a6(){return typeof Tt.useSyncExternalStore=="function"?Tt.useSyncExternalStore(o6,i6,s6):y.useContext(X9)}const MC=t=>{var e;return((e=t.getAttribute("role"))==null?void 0:e.toLowerCase())==="menu"},n0=()=>{};function jC(){const t=r6(),{show:e=!1,toggle:n=n0,setToggle:r,menuElement:i}=y.useContext(Sh)||{},s=y.useCallback(a=>{n(!e,a)},[e,n]),o={id:t,ref:r||n0,onClick:s,"aria-expanded":!!e};return i&&MC(i)&&(o["aria-haspopup"]=!0),[o,{show:e,toggle:n}]}function VC({children:t}){const[e,n]=jC();return m.jsx(m.Fragment,{children:t(e,n)})}VC.displayName="DropdownToggle";const Sm=y.createContext(null),r0=(t,e=null)=>t!=null?String(t):e||null,FC=y.createContext(null);FC.displayName="NavContext";const l6="data-rr-ui-";function Vv(t){return`${l6}${t}`}const u6=["eventKey","disabled","onClick","active","as"];function c6(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function UC({key:t,href:e,active:n,disabled:r,onClick:i}){const s=y.useContext(Sm),o=y.useContext(FC),{activeKey:a}=o||{},l=r0(t,e),c=n==null&&t!=null?r0(a)===l:n;return[{onClick:et(f=>{r||(i==null||i(f),s&&!f.isPropagationStopped()&&s(l,f))}),"aria-disabled":r||void 0,"aria-selected":c,[Vv("dropdown-item")]:""},{isActive:c}]}const $C=y.forwardRef((t,e)=>{let{eventKey:n,disabled:r,onClick:i,active:s,as:o=wC}=t,a=c6(t,u6);const[l]=UC({key:n,href:a.href,disabled:r,onClick:i,active:s});return m.jsx(o,Object.assign({},a,{ref:e},l))});$C.displayName="DropdownItem";const BC=y.createContext(Ih?window:void 0);BC.Provider;function Rh(){return y.useContext(BC)}function i0(){const t=bB(),e=y.useRef(null),n=y.useCallback(r=>{e.current=r,t()},[t]);return[e,n]}function eu({defaultShow:t,show:e,onSelect:n,onToggle:r,itemSelector:i=`* [${Vv("dropdown-item")}]`,focusFirstItemOnShow:s,placement:o="bottom-start",children:a}){const l=Rh(),[c,d]=PB(e,t,r),[f,g]=i0(),k=f.current,[R,x]=i0(),b=R.current,E=_C(c),w=y.useRef(null),S=y.useRef(!1),O=y.useContext(Sm),M=y.useCallback((P,N,C=N==null?void 0:N.type)=>{d(P,{originalEvent:N,source:C})},[d]),L=et((P,N)=>{n==null||n(P,N),M(!1,N,"select"),N.isPropagationStopped()||O==null||O(P,N)}),I=y.useMemo(()=>({toggle:M,placement:o,show:c,menuElement:k,toggleElement:b,setMenu:g,setToggle:x}),[M,o,c,k,b,g,x]);k&&E&&!c&&(S.current=k.contains(k.ownerDocument.activeElement));const v=et(()=>{b&&b.focus&&b.focus()}),T=et(()=>{const P=w.current;let N=s;if(N==null&&(N=f.current&&MC(f.current)?"keyboard":!1),N===!1||N==="keyboard"&&!/^key.+$/.test(P))return;const C=jr(f.current,i)[0];C&&C.focus&&C.focus()});y.useEffect(()=>{c?T():S.current&&(S.current=!1,v())},[c,S,v,T]),y.useEffect(()=>{w.current=null});const A=(P,N)=>{if(!f.current)return null;const C=jr(f.current,i);let F=C.indexOf(P)+N;return F=Math.max(0,Math.min(F,C.length)),C[F]};return fB(y.useCallback(()=>l.document,[l]),"keydown",P=>{var N,C;const{key:F}=P,H=P.target,ee=(N=f.current)==null?void 0:N.contains(H),Z=(C=R.current)==null?void 0:C.contains(H);if(/input|textarea/i.test(H.tagName)&&(F===" "||F!=="Escape"&&ee||F==="Escape"&&H.type==="search")||!ee&&!Z||F==="Tab"&&(!f.current||!c))return;w.current=P.type;const K={originalEvent:P,source:P.type};switch(F){case"ArrowUp":{const G=A(H,-1);G&&G.focus&&G.focus(),P.preventDefault();return}case"ArrowDown":if(P.preventDefault(),!c)d(!0,K);else{const G=A(H,1);G&&G.focus&&G.focus()}return;case"Tab":mC(H.ownerDocument,"keyup",G=>{var oe;(G.key==="Tab"&&!G.target||!((oe=f.current)!=null&&oe.contains(G.target)))&&d(!1,K)},{once:!0});break;case"Escape":F==="Escape"&&(P.preventDefault(),P.stopPropagation()),d(!1,K);break}}),m.jsx(Sm.Provider,{value:L,children:m.jsx(Sh.Provider,{value:I,children:a})})}eu.displayName="Dropdown";eu.Menu=DC;eu.Toggle=VC;eu.Item=$C;const Fv=y.createContext({});Fv.displayName="DropdownContext";const zC=y.forwardRef(({className:t,bsPrefix:e,as:n="hr",role:r="separator",...i},s)=>(e=ke(e,"dropdown-divider"),m.jsx(n,{ref:s,className:me(t,e),role:r,...i})));zC.displayName="DropdownDivider";const WC=y.forwardRef(({className:t,bsPrefix:e,as:n="div",role:r="heading",...i},s)=>(e=ke(e,"dropdown-header"),m.jsx(n,{ref:s,className:me(t,e),role:r,...i})));WC.displayName="DropdownHeader";const HC=y.forwardRef(({bsPrefix:t,className:e,eventKey:n,disabled:r=!1,onClick:i,active:s,as:o=EC,...a},l)=>{const c=ke(t,"dropdown-item"),[d,f]=UC({key:n,href:a.href,disabled:r,onClick:i,active:s});return m.jsx(o,{...a,...d,ref:l,className:me(e,c,f.isActive&&"active",r&&"disabled")})});HC.displayName="DropdownItem";const qC=y.forwardRef(({className:t,bsPrefix:e,as:n="span",...r},i)=>(e=ke(e,"dropdown-item-text"),m.jsx(n,{ref:i,className:me(t,e),...r})));qC.displayName="DropdownItemText";const Uv=y.createContext(null);Uv.displayName="InputGroupContext";const $v=y.createContext(null);$v.displayName="NavbarContext";function GC(t,e){return t}function KC(t,e,n){const r=n?"top-end":"top-start",i=n?"top-start":"top-end",s=n?"bottom-end":"bottom-start",o=n?"bottom-start":"bottom-end",a=n?"right-start":"left-start",l=n?"right-end":"left-end",c=n?"left-start":"right-start",d=n?"left-end":"right-end";let f=t?o:s;return e==="up"?f=t?i:r:e==="end"?f=t?d:c:e==="start"?f=t?l:a:e==="down-centered"?f="bottom":e==="up-centered"&&(f="top"),f}const QC=y.forwardRef(({bsPrefix:t,className:e,align:n,rootCloseEvent:r,flip:i=!0,show:s,renderOnMount:o,as:a="div",popperConfig:l,variant:c,...d},f)=>{let g=!1;const k=y.useContext($v),R=ke(t,"dropdown-menu"),{align:x,drop:b,isRTL:E}=y.useContext(Fv);n=n||x;const w=y.useContext(Uv),S=[];if(n)if(typeof n=="object"){const P=Object.keys(n);if(P.length){const N=P[0],C=n[N];g=C==="start",S.push(`${R}-${N}-${C}`)}}else n==="end"&&(g=!0);const O=KC(g,b,E),[M,{hasShown:L,popper:I,show:v,toggle:T}]=OC({flip:i,rootCloseEvent:r,show:s,usePopper:!k&&S.length===0,offset:[0,2],popperConfig:l,placement:O});if(M.ref=$o(GC(f),M.ref),gd(()=>{v&&(I==null||I.update())},[v]),!L&&!o&&!w)return null;typeof a!="string"&&(M.show=v,M.close=()=>T==null?void 0:T(!1),M.align=n);let A=d.style;return I!=null&&I.placement&&(A={...d.style,...M.style},d["x-placement"]=I.placement),m.jsx(a,{...d,...M,style:A,...(S.length||k)&&{"data-bs-popper":"static"},className:me(e,R,v&&"show",g&&`${R}-end`,c&&`${R}-${c}`,...S)})});QC.displayName="DropdownMenu";const YC=y.forwardRef(({bsPrefix:t,split:e,className:n,childBsPrefix:r,as:i=Th,...s},o)=>{const a=ke(t,"dropdown-toggle"),l=y.useContext(Sh);r!==void 0&&(s.bsPrefix=r);const[c]=jC();return c.ref=$o(c.ref,GC(o)),m.jsx(i,{className:me(n,a,e&&`${a}-split`,(l==null?void 0:l.show)&&"show"),...c,...s})});YC.displayName="DropdownToggle";const JC=y.forwardRef((t,e)=>{const{bsPrefix:n,drop:r="down",show:i,className:s,align:o="start",onSelect:a,onToggle:l,focusFirstItemOnShow:c,as:d="div",navbar:f,autoClose:g=!0,...k}=M4(t,{show:"onToggle"}),R=y.useContext(Uv),x=ke(n,"dropdown"),b=B4(),E=I=>g===!1?I==="click":g==="inside"?I!=="rootClose":g==="outside"?I!=="select":!0,w=et((I,v)=>{var T;!((T=v.originalEvent)==null||(T=T.target)==null)&&T.classList.contains("dropdown-toggle")&&v.source==="mousedown"||(v.originalEvent.currentTarget===document&&(v.source!=="keydown"||v.originalEvent.key==="Escape")&&(v.source="rootClose"),E(v.source)&&(l==null||l(I,v)))}),O=KC(o==="end",r,b),M=y.useMemo(()=>({align:o,drop:r,isRTL:b}),[o,r,b]),L={down:x,"down-centered":`${x}-center`,up:"dropup","up-centered":"dropup-center dropup",end:"dropend",start:"dropstart"};return m.jsx(Fv.Provider,{value:M,children:m.jsx(eu,{placement:O,show:i,onSelect:a,onToggle:w,focusFirstItemOnShow:c,itemSelector:`.${x}-item:not(.disabled):not(:disabled)`,children:R?k.children:m.jsx(d,{...k,ref:e,className:me(s,i&&"show",L[r])})})})});JC.displayName="Dropdown";const Fe=Object.assign(JC,{Toggle:YC,Menu:QC,Item:HC,ItemText:qC,Divider:zC,Header:WC}),d6={type:ur.string,tooltip:ur.bool,as:ur.elementType},Ch=y.forwardRef(({as:t="div",className:e,type:n="valid",tooltip:r=!1,...i},s)=>m.jsx(t,{...i,ref:s,className:me(e,`${n}-${r?"tooltip":"feedback"}`)}));Ch.displayName="Feedback";Ch.propTypes=d6;const _r=y.createContext({}),Bv=y.forwardRef(({id:t,bsPrefix:e,className:n,type:r="checkbox",isValid:i=!1,isInvalid:s=!1,as:o="input",...a},l)=>{const{controlId:c}=y.useContext(_r);return e=ke(e,"form-check-input"),m.jsx(o,{...a,ref:l,type:r,id:t||c,className:me(n,e,i&&"is-valid",s&&"is-invalid")})});Bv.displayName="FormCheckInput";const wd=y.forwardRef(({bsPrefix:t,className:e,htmlFor:n,...r},i)=>{const{controlId:s}=y.useContext(_r);return t=ke(t,"form-check-label"),m.jsx("label",{...r,ref:i,htmlFor:n||s,className:me(e,t)})});wd.displayName="FormCheckLabel";const XC=y.forwardRef(({id:t,bsPrefix:e,bsSwitchPrefix:n,inline:r=!1,reverse:i=!1,disabled:s=!1,isValid:o=!1,isInvalid:a=!1,feedbackTooltip:l=!1,feedback:c,feedbackType:d,className:f,style:g,title:k="",type:R="checkbox",label:x,children:b,as:E="input",...w},S)=>{e=ke(e,"form-check"),n=ke(n,"form-switch");const{controlId:O}=y.useContext(_r),M=y.useMemo(()=>({controlId:t||O}),[O,t]),L=!b&&x!=null&&x!==!1||RB(b,wd),I=m.jsx(Bv,{...w,type:R==="switch"?"checkbox":R,ref:S,isValid:o,isInvalid:a,disabled:s,as:E});return m.jsx(_r.Provider,{value:M,children:m.jsx("div",{style:g,className:me(f,L&&e,r&&`${e}-inline`,i&&`${e}-reverse`,R==="switch"&&n),children:b||m.jsxs(m.Fragment,{children:[I,L&&m.jsx(wd,{title:k,children:x}),c&&m.jsx(Ch,{type:d,tooltip:l,children:c})]})})})});XC.displayName="FormCheck";const Ed=Object.assign(XC,{Input:Bv,Label:wd}),ZC=y.forwardRef(({bsPrefix:t,type:e,size:n,htmlSize:r,id:i,className:s,isValid:o=!1,isInvalid:a=!1,plaintext:l,readOnly:c,as:d="input",...f},g)=>{const{controlId:k}=y.useContext(_r);return t=ke(t,"form-control"),m.jsx(d,{...f,type:e,size:r,ref:g,readOnly:c,id:i||k,className:me(s,l?`${t}-plaintext`:t,n&&`${t}-${n}`,e==="color"&&`${t}-color`,o&&"is-valid",a&&"is-invalid")})});ZC.displayName="FormControl";const eA=Object.assign(ZC,{Feedback:Ch}),tA=y.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=ke(e,"form-floating"),m.jsx(n,{ref:i,className:me(t,e),...r})));tA.displayName="FormFloating";const zv=y.forwardRef(({controlId:t,as:e="div",...n},r)=>{const i=y.useMemo(()=>({controlId:t}),[t]);return m.jsx(_r.Provider,{value:i,children:m.jsx(e,{...n,ref:r})})});zv.displayName="FormGroup";const nA=y.forwardRef(({as:t="label",bsPrefix:e,column:n=!1,visuallyHidden:r=!1,className:i,htmlFor:s,...o},a)=>{const{controlId:l}=y.useContext(_r);e=ke(e,"form-label");let c="col-form-label";typeof n=="string"&&(c=`${c} ${c}-${n}`);const d=me(i,e,r&&"visually-hidden",n&&c);return s=s||l,n?m.jsx(TC,{ref:a,as:"label",className:d,htmlFor:s,...o}):m.jsx(t,{ref:a,className:d,htmlFor:s,...o})});nA.displayName="FormLabel";const rA=y.forwardRef(({bsPrefix:t,className:e,id:n,...r},i)=>{const{controlId:s}=y.useContext(_r);return t=ke(t,"form-range"),m.jsx("input",{...r,type:"range",ref:i,className:me(e,t),id:n||s})});rA.displayName="FormRange";const iA=y.forwardRef(({bsPrefix:t,size:e,htmlSize:n,className:r,isValid:i=!1,isInvalid:s=!1,id:o,...a},l)=>{const{controlId:c}=y.useContext(_r);return t=ke(t,"form-select"),m.jsx("select",{...a,size:n,ref:l,className:me(r,t,e&&`${t}-${e}`,i&&"is-valid",s&&"is-invalid"),id:o||c})});iA.displayName="FormSelect";const sA=y.forwardRef(({bsPrefix:t,className:e,as:n="small",muted:r,...i},s)=>(t=ke(t,"form-text"),m.jsx(n,{...i,ref:s,className:me(e,t,r&&"text-muted")})));sA.displayName="FormText";const oA=y.forwardRef((t,e)=>m.jsx(Ed,{...t,ref:e,type:"switch"}));oA.displayName="Switch";const h6=Object.assign(oA,{Input:Ed.Input,Label:Ed.Label}),aA=y.forwardRef(({bsPrefix:t,className:e,children:n,controlId:r,label:i,...s},o)=>(t=ke(t,"form-floating"),m.jsxs(zv,{ref:o,className:me(e,t),controlId:r,...s,children:[n,m.jsx("label",{htmlFor:r,children:i})]})));aA.displayName="FloatingLabel";const f6={_ref:ur.any,validated:ur.bool,as:ur.elementType},Wv=y.forwardRef(({className:t,validated:e,as:n="form",...r},i)=>m.jsx(n,{...r,ref:i,className:me(t,e&&"was-validated")}));Wv.displayName="Form";Wv.propTypes=f6;const p6=Object.assign(Wv,{Group:zv,Control:eA,Floating:tA,Check:Ed,Switch:h6,Label:nA,Text:sA,Range:rA,Select:iA,FloatingLabel:aA});function Bf(t){t===void 0&&(t=Eh());try{var e=t.activeElement;return!e||!e.nodeName?null:e}catch{return t.body}}function m6(t=document){const e=t.defaultView;return Math.abs(e.innerWidth-t.documentElement.clientWidth)}const s0=Vv("modal-open");class Hv{constructor({ownerDocument:e,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return m6(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",i=this.getElement();e.style={overflow:i.style.overflow,[r]:i.style[r]},e.scrollBarWidth&&(n[r]=`${parseInt(Gi(i,r)||"0",10)+e.scrollBarWidth}px`),i.setAttribute(s0,""),Gi(i,n)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){const n=this.getElement();n.removeAttribute(s0),Object.assign(n.style,e.style)}add(e){let n=this.modals.indexOf(e);return n!==-1||(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(e){const n=this.modals.indexOf(e);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}const zf=(t,e)=>Ih?t==null?(e||Eh()).body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),t&&("nodeType"in t||t.getBoundingClientRect)?t:null):null;function g6(t,e){const n=Rh(),[r,i]=y.useState(()=>zf(t,n==null?void 0:n.document));if(!r){const s=zf(t);s&&i(s)}return y.useEffect(()=>{},[e,r]),y.useEffect(()=>{const s=zf(t);s!==r&&i(s)},[t,r]),r}function v6({children:t,in:e,onExited:n,mountOnEnter:r,unmountOnExit:i}){const s=y.useRef(null),o=y.useRef(e),a=et(n);y.useEffect(()=>{e?o.current=!0:a(s.current)},[e,a]);const l=$o(s,t.ref),c=y.cloneElement(t,{ref:l});return e?c:i||!o.current&&r?null:c}function y6(t){return t.code==="Escape"||t.keyCode===27}function _6(){const t=y.version.split(".");return{major:+t[0],minor:+t[1],patch:+t[2]}}const w6=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function E6(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function I6(t){let{onEnter:e,onEntering:n,onEntered:r,onExit:i,onExiting:s,onExited:o,addEndListener:a,children:l}=t,c=E6(t,w6);const{major:d}=_6(),f=d>=19?l.props.ref:l.ref,g=y.useRef(null),k=$o(g,typeof l=="function"?null:f),R=L=>I=>{L&&g.current&&L(g.current,I)},x=y.useCallback(R(e),[e]),b=y.useCallback(R(n),[n]),E=y.useCallback(R(r),[r]),w=y.useCallback(R(i),[i]),S=y.useCallback(R(s),[s]),O=y.useCallback(R(o),[o]),M=y.useCallback(R(a),[a]);return Object.assign({},c,{nodeRef:g},e&&{onEnter:x},n&&{onEntering:b},r&&{onEntered:E},i&&{onExit:w},s&&{onExiting:S},o&&{onExited:O},a&&{addEndListener:M},{children:typeof l=="function"?(L,I)=>l(L,Object.assign({},I,{ref:k})):y.cloneElement(l,{ref:k})})}const T6=["component"];function S6(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const k6=y.forwardRef((t,e)=>{let{component:n}=t,r=S6(t,T6);const i=I6(r);return m.jsx(n,Object.assign({ref:e},i))});function R6({in:t,onTransition:e}){const n=y.useRef(null),r=y.useRef(!0),i=et(e);return gd(()=>{if(!n.current)return;let s=!1;return i({in:t,element:n.current,initial:r.current,isStale:()=>s}),()=>{s=!0}},[t,i]),gd(()=>(r.current=!1,()=>{r.current=!0}),[]),n}function C6({children:t,in:e,onExited:n,onEntered:r,transition:i}){const[s,o]=y.useState(!e);e&&s&&o(!1);const a=R6({in:!!e,onTransition:c=>{const d=()=>{c.isStale()||(c.in?r==null||r(c.element,c.initial):(o(!0),n==null||n(c.element)))};Promise.resolve(i(c)).then(d,f=>{throw c.in||o(!0),f})}}),l=$o(a,t.ref);return s&&!e?null:y.cloneElement(t,{ref:l})}function o0(t,e,n){return t?m.jsx(k6,Object.assign({},n,{component:t})):e?m.jsx(C6,Object.assign({},n,{transition:e})):m.jsx(v6,Object.assign({},n))}const A6=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function P6(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}let Wf;function b6(t){return Wf||(Wf=new Hv({ownerDocument:t==null?void 0:t.document})),Wf}function N6(t){const e=Rh(),n=t||b6(e),r=y.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:y.useCallback(i=>{r.current.dialog=i},[]),setBackdropRef:y.useCallback(i=>{r.current.backdrop=i},[])})}const lA=y.forwardRef((t,e)=>{let{show:n=!1,role:r="dialog",className:i,style:s,children:o,backdrop:a=!0,keyboard:l=!0,onBackdropClick:c,onEscapeKeyDown:d,transition:f,runTransition:g,backdropTransition:k,runBackdropTransition:R,autoFocus:x=!0,enforceFocus:b=!0,restoreFocus:E=!0,restoreFocusOptions:w,renderDialog:S,renderBackdrop:O=ve=>m.jsx("div",Object.assign({},ve)),manager:M,container:L,onShow:I,onHide:v=()=>{},onExit:T,onExited:A,onExiting:P,onEnter:N,onEntering:C,onEntered:F}=t,H=P6(t,A6);const ee=Rh(),Z=g6(L),V=N6(M),K=yC(),G=_C(n),[oe,ne]=y.useState(!n),ce=y.useRef(null);y.useImperativeHandle(e,()=>V,[V]),Ih&&!G&&n&&(ce.current=Bf(ee==null?void 0:ee.document)),n&&oe&&ne(!1);const Ne=et(()=>{if(V.add(),bn.current=Qr(document,"keydown",fn),Qn.current=Qr(document,"focus",()=>setTimeout(Ve),!0),I&&I(),x){var ve,Cr;const Ar=Bf((ve=(Cr=V.dialog)==null?void 0:Cr.ownerDocument)!=null?ve:ee==null?void 0:ee.document);V.dialog&&Ar&&!yd(V.dialog,Ar)&&(ce.current=Ar,V.dialog.focus())}}),de=et(()=>{if(V.remove(),bn.current==null||bn.current(),Qn.current==null||Qn.current(),E){var ve;(ve=ce.current)==null||ve.focus==null||ve.focus(w),ce.current=null}});y.useEffect(()=>{!n||!Z||Ne()},[n,Z,Ne]),y.useEffect(()=>{oe&&de()},[oe,de]),kB(()=>{de()});const Ve=et(()=>{if(!b||!K()||!V.isTopModal())return;const ve=Bf(ee==null?void 0:ee.document);V.dialog&&ve&&!yd(V.dialog,ve)&&V.dialog.focus()}),pt=et(ve=>{ve.target===ve.currentTarget&&(c==null||c(ve),a===!0&&v())}),fn=et(ve=>{l&&y6(ve)&&V.isTopModal()&&(d==null||d(ve),ve.defaultPrevented||v())}),Qn=y.useRef(),bn=y.useRef(),Nn=(...ve)=>{ne(!0),A==null||A(...ve)};if(!Z)return null;const Rr=Object.assign({role:r,ref:V.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},H,{style:s,className:i,tabIndex:-1});let xn=S?S(Rr):m.jsx("div",Object.assign({},Rr,{children:y.cloneElement(o,{role:"document"})}));xn=o0(f,g,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:T,onExiting:P,onExited:Nn,onEnter:N,onEntering:C,onEntered:F,children:xn});let On=null;return a&&(On=O({ref:V.setBackdropRef,onClick:pt}),On=o0(k,R,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:On})),m.jsx(m.Fragment,{children:zs.createPortal(m.jsxs(m.Fragment,{children:[On,xn]}),Z)})});lA.displayName="Modal";const x6=Object.assign(lA,{Manager:Hv});function O6(t,e){return t.classList?t.classList.contains(e):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")!==-1}function D6(t,e){t.classList?t.classList.add(e):O6(t,e)||(typeof t.className=="string"?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}function a0(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function L6(t,e){t.classList?t.classList.remove(e):typeof t.className=="string"?t.className=a0(t.className,e):t.setAttribute("class",a0(t.className&&t.className.baseVal||"",e))}const ks={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class uA extends Hv{adjustAndStore(e,n,r){const i=n.style[e];n.dataset[e]=i,Gi(n,{[e]:`${parseFloat(Gi(n,e))+r}px`})}restore(e,n){const r=n.dataset[e];r!==void 0&&(delete n.dataset[e],Gi(n,{[e]:r}))}setContainerStyle(e){super.setContainerStyle(e);const n=this.getElement();if(D6(n,"modal-open"),!e.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";jr(n,ks.FIXED_CONTENT).forEach(s=>this.adjustAndStore(r,s,e.scrollBarWidth)),jr(n,ks.STICKY_CONTENT).forEach(s=>this.adjustAndStore(i,s,-e.scrollBarWidth)),jr(n,ks.NAVBAR_TOGGLER).forEach(s=>this.adjustAndStore(i,s,e.scrollBarWidth))}removeContainerStyle(e){super.removeContainerStyle(e);const n=this.getElement();L6(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";jr(n,ks.FIXED_CONTENT).forEach(s=>this.restore(r,s)),jr(n,ks.STICKY_CONTENT).forEach(s=>this.restore(i,s)),jr(n,ks.NAVBAR_TOGGLER).forEach(s=>this.restore(i,s))}}let Hf;function M6(t){return Hf||(Hf=new uA(t)),Hf}const cA=y.createContext({onHide(){}}),j6=y.forwardRef(({closeLabel:t="Close",closeVariant:e,closeButton:n=!1,onHide:r,children:i,...s},o)=>{const a=y.useContext(cA),l=et(()=>{a==null||a.onHide(),r==null||r()});return m.jsxs("div",{ref:o,...s,children:[i,n&&m.jsx(bv,{"aria-label":t,variant:e,onClick:l})]})}),km=new WeakMap,l0=(t,e)=>{if(!t||!e)return;const n=km.get(e)||new Map;km.set(e,n);let r=n.get(t);return r||(r=e.matchMedia(t),r.refCount=0,n.set(r.media,r)),r};function V6(t,e=typeof window>"u"?void 0:window){const n=l0(t,e),[r,i]=y.useState(()=>n?n.matches:!1);return gd(()=>{let s=l0(t,e);if(!s)return i(!1);let o=km.get(e);const a=()=>{i(s.matches)};return s.refCount++,s.addListener(a),a(),()=>{s.removeListener(a),s.refCount--,s.refCount<=0&&(o==null||o.delete(s.media)),s=void 0}},[t]),r}function F6(t){const e=Object.keys(t);function n(a,l){return a===l?l:a?`${a} and ${l}`:l}function r(a){return e[Math.min(e.indexOf(a)+1,e.length-1)]}function i(a){const l=r(a);let c=t[l];return typeof c=="number"?c=`${c-.2}px`:c=`calc(${c} - 0.2px)`,`(max-width: ${c})`}function s(a){let l=t[a];return typeof l=="number"&&(l=`${l}px`),`(min-width: ${l})`}function o(a,l,c){let d;typeof a=="object"?(d=a,c=l,l=!0):(l=l||!0,d={[a]:l});let f=y.useMemo(()=>Object.entries(d).reduce((g,[k,R])=>((R==="up"||R===!0)&&(g=n(g,s(k))),(R==="down"||R===!0)&&(g=n(g,i(k))),g),""),[JSON.stringify(d)]);return V6(f,c)}return o}const U6=F6({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),dA=y.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=ke(e,"offcanvas-body"),m.jsx(n,{ref:i,className:me(t,e),...r})));dA.displayName="OffcanvasBody";const $6={[jn]:"show",[Wr]:"show"},hA=y.forwardRef(({bsPrefix:t,className:e,children:n,in:r=!1,mountOnEnter:i=!1,unmountOnExit:s=!1,appear:o=!1,...a},l)=>(t=ke(t,"offcanvas"),m.jsx(vC,{ref:l,addEndListener:gC,in:r,mountOnEnter:i,unmountOnExit:s,appear:o,...a,childRef:n.ref,children:(c,d)=>y.cloneElement(n,{...d,className:me(e,n.props.className,(c===jn||c===md)&&`${t}-toggling`,$6[c])})})));hA.displayName="OffcanvasToggling";const fA=y.forwardRef(({bsPrefix:t,className:e,closeLabel:n="Close",closeButton:r=!1,...i},s)=>(t=ke(t,"offcanvas-header"),m.jsx(j6,{ref:s,...i,className:me(e,t),closeLabel:n,closeButton:r})));fA.displayName="OffcanvasHeader";const B6=dB("h5"),pA=y.forwardRef(({className:t,bsPrefix:e,as:n=B6,...r},i)=>(e=ke(e,"offcanvas-title"),m.jsx(n,{ref:i,className:me(t,e),...r})));pA.displayName="OffcanvasTitle";function z6(t){return m.jsx(hA,{...t})}function W6(t){return m.jsx(IC,{...t})}const mA=y.forwardRef(({bsPrefix:t,className:e,children:n,"aria-labelledby":r,placement:i="start",responsive:s,show:o=!1,backdrop:a=!0,keyboard:l=!0,scroll:c=!1,onEscapeKeyDown:d,onShow:f,onHide:g,container:k,autoFocus:R=!0,enforceFocus:x=!0,restoreFocus:b=!0,restoreFocusOptions:E,onEntered:w,onExit:S,onExiting:O,onEnter:M,onEntering:L,onExited:I,backdropClassName:v,manager:T,renderStaticNode:A=!1,...P},N)=>{const C=y.useRef();t=ke(t,"offcanvas");const{onToggle:F}=y.useContext($v)||{},[H,ee]=y.useState(!1),Z=U6(s||"xs","up");y.useEffect(()=>{ee(s?o&&!Z:o)},[o,s,Z]);const V=et(()=>{F==null||F(),g==null||g()}),K=y.useMemo(()=>({onHide:V}),[V]);function G(){return T||(c?(C.current||(C.current=new uA({handleContainerOverflow:!1})),C.current):M6())}const oe=(de,...Ve)=>{de&&(de.style.visibility="visible"),M==null||M(de,...Ve)},ne=(de,...Ve)=>{de&&(de.style.visibility=""),I==null||I(...Ve)},ce=y.useCallback(de=>m.jsx("div",{...de,className:me(`${t}-backdrop`,v)}),[v,t]),Ne=de=>m.jsx("div",{...de,...P,className:me(e,s?`${t}-${s}`:t,`${t}-${i}`),"aria-labelledby":r,children:n});return m.jsxs(m.Fragment,{children:[!H&&(s||A)&&Ne({}),m.jsx(cA.Provider,{value:K,children:m.jsx(x6,{show:H,ref:N,backdrop:a,container:k,keyboard:l,autoFocus:R,enforceFocus:x&&!c,restoreFocus:b,restoreFocusOptions:E,onEscapeKeyDown:d,onShow:f,onHide:V,onEnter:oe,onEntering:L,onEntered:w,onExit:S,onExiting:O,onExited:ne,manager:G(),transition:z6,backdropTransition:W6,renderBackdrop:ce,renderDialog:Ne})})]})});mA.displayName="Offcanvas";const qu=Object.assign(mA,{Body:dA,Header:fA,Title:pA}),gA=()=>{const[t,e]=y.useState([]),[n,r]=y.useState(null),[i,s]=y.useState(null),[o,a]=y.useState([]),[l,c]=y.useState(null),[d,f]=y.useState([]),[g,k]=y.useState(""),[R,x]=y.useState("Global"),[b,E]=y.useState([]),[w,S]=y.useState([]),[O,M]=y.useState([]),[L,I]=y.useState(null),[v,T]=y.useState(!1),A=y.useRef(null);y.useEffect(()=>{(async()=>{try{const ee=await(await fetch("../data.json")).json();e(ee.frontPage.paragraphs||[]),r(ee.frontPage.contact||null),s(ee.about||null),a(ee.news||[]),f(ee.projects||[]),c(ee.contact||null)}catch(H){console.error("Error fetching data:",H)}})()},[]);const P=F=>{A.current&&!A.current.contains(F.target)&&T(!1)},N=()=>{T(!1)};y.useEffect(()=>(document.addEventListener("mousedown",P),window.addEventListener("scroll",N),()=>{document.removeEventListener("mousedown",P),window.removeEventListener("scroll",N)}),[]),y.useEffect(()=>{if(g&&(R==="Projects"||R==="Global")){const F=d.filter(H=>H.title.toLowerCase().includes(g.toLowerCase())||H.description.toLowerCase().includes(g.toLowerCase()));E(F)}else E([])},[g,d,R]),y.useEffect(()=>{if(g&&(R==="Home"||R==="Global")){const F=t?t.filter(Z=>Z.title.toLowerCase().includes(g.toLowerCase())||Z.content.toLowerCase().includes(g.toLowerCase())):[],H=n?[n].filter(Z=>Z.contactName.toLowerCase().includes(g.toLowerCase())||Z.shortSummary.toLowerCase().includes(g.toLowerCase())):null,ee=[...F,...H];S(ee)}else S([])},[g,t,n,R]),y.useEffect(()=>{if(g&&(R==="About"||R==="Global")){const F=i?[i].filter(Z=>Z.name.toLowerCase().includes(g.toLowerCase())||Z.education.toLowerCase().includes(g.toLowerCase())||Z.majors.some(V=>V.toLowerCase().includes(g.toLowerCase()))||Z.selfSummary.toLowerCase().includes(g.toLowerCase())||Z.moreDetails.some(V=>V.title.toLowerCase().includes(g.toLowerCase())||V.content.toLowerCase().includes(g.toLowerCase()))):[],H=o.filter(Z=>Z.title.toLowerCase().includes(g.toLowerCase())||Z.date.toLowerCase().includes(g.toLowerCase())),ee=[...F,...H];M(ee)}else M([])},[g,i,o,R]),y.useEffect(()=>{if(g&&(R==="Contact"||R==="Global")){const F={};l?(l.address.some(H=>H.toLowerCase().includes(g.toLowerCase()))&&(F.address=l.address.filter(H=>H.toLowerCase().includes(g.toLowerCase()))),l.phone.some(H=>H.toLowerCase().includes(g.toLowerCase()))&&(F.phone=l.phone.filter(H=>H.toLowerCase().includes(g.toLowerCase()))),l.email.some(H=>H.toLowerCase().includes(g.toLowerCase()))&&(F.email=l.email.filter(H=>H.toLowerCase().includes(g.toLowerCase()))),l.github.some(H=>H.toLowerCase().includes(g.toLowerCase()))&&(F.github=l.github.filter(H=>H.toLowerCase().includes(g.toLowerCase()))),l.url.some(H=>H.toLowerCase().includes(g.toLowerCase()))&&(F.url=l.url.filter(H=>H.toLowerCase().includes(g.toLowerCase()))),l.linkedin.some(H=>H.toLowerCase().includes(g.toLowerCase()))&&(F.linkedin=l.linkedin.filter(H=>H.toLowerCase().includes(g.toLowerCase()))),I(Object.keys(F).length>0?F:null)):I(null)}else I(null)},[g,l,R]);const C=R==="Global"?[...b,...w,...O,...L?[L]:[]]:[];return m.jsxs("div",{ref:A,id:"search-bar-container",children:[m.jsxs(p6,{className:"form-inline",children:[m.jsxs(Fe,{onSelect:F=>x(F||"Global"),children:[m.jsx(Fe.Toggle,{className:"search-dropdown",variant:"outline-light",id:"dropdown-basic",children:R}),m.jsxs(Fe.Menu,{children:[m.jsx(Fe.Item,{eventKey:"Global",children:"Global"}),m.jsx(Fe.Divider,{}),m.jsx(Fe.Item,{eventKey:"Home",children:"Home"}),m.jsx(Fe.Item,{eventKey:"About",children:"About"}),m.jsx(Fe.Item,{eventKey:"Projects",children:"Projects"}),m.jsx(Fe.Item,{eventKey:"Contact",children:"Contact"})]})]}),m.jsx(eA,{type:"search",placeholder:"Search...",className:"mr-sm-2",value:g,onChange:F=>{k(F.target.value),T(!0)}}),m.jsx(Th,{id:"global-search-button",variant:"outline-light",children:m.jsx("img",{src:"https://cdn.glitch.global/3874a658-483f-41ac-b439-3b48eab1370f/icon-search.png?v=1721703987075",width:"20",height:"20"})})]}),v&&b.length>0&&R==="Projects"&&m.jsx("div",{id:"search-results",children:b.map(F=>m.jsx(re,{id:"result-row",to:`/projects/${F.id}`,children:m.jsx("div",{id:"indiv-result",children:F.title})},F.id))}),v&&w.length>0&&R==="Home"&&m.jsx("div",{id:"search-results",children:w.map(F=>"title"in F?m.jsx(re,{id:"result-row",to:"/",children:m.jsx("div",{id:"indiv-result",children:F.title})},F.title):m.jsx(re,{id:"result-row",to:"/",children:m.jsx("div",{id:"indiv-result",children:"Contact Me"})},"Contact Me"))}),v&&O.length>0&&R==="About"&&m.jsx("div",{id:"search-results",children:O.map(F=>"title"in F?m.jsx(re,{id:"result-row",to:"/about",children:m.jsx("div",{id:"indiv-result",children:F.title.length>25?`${F.title.substring(0,25)}...`:F.title})},F.title):m.jsx(re,{id:"result-row",to:"/about",children:m.jsx("div",{id:"indiv-result",children:F.name||"About Section"})},F.name||F.moreDetails.map(H=>H.title).join("-")))}),v&&L&&R==="Contact"&&m.jsxs("div",{id:"search-results",children:[L.address&&m.jsx(re,{id:"result-row",to:"/contact",children:m.jsxs("div",{id:"indiv-result",children:["Address: ",l.address[0]]})}),L.phone&&m.jsx("a",{id:"result-row",href:`tel:${l.phone[0]}`,children:m.jsxs("div",{id:"indiv-result",children:["Phone: ",l.phone[0]]})}),L.email&&m.jsx("a",{id:"result-row",href:`mailto:${l.email[0]}`,children:m.jsxs("div",{id:"indiv-result",children:["Email: ",l.email[0]]})}),L.github&&L.github.length>0&&m.jsx("a",{id:"result-row",href:l.github[0],children:m.jsxs("div",{id:"indiv-result",children:["GitHub: ",l.github[1]]})}),L.url&&L.url.length>0&&m.jsx("a",{id:"result-row",href:l.url[0],children:m.jsxs("div",{id:"indiv-result",children:["URL: ",l.url[1]]})}),L.linkedin&&L.linkedin.length>0&&m.jsx("a",{id:"result-row",href:l.linkedin[0],children:m.jsxs("div",{id:"indiv-result",children:["LinkedIn: ",l.linkedin[1]]})})]}),v&&C.length>0&&R==="Global"&&m.jsx("div",{id:"search-results",children:C.map((F,H)=>"id"in F?m.jsx(re,{id:"result-row",to:`/projects/${F.id}`,children:m.jsxs("div",{id:"indiv-result",children:[m.jsx("p",{id:"result-name",children:F.title.length>25?`${F.title.substring(0,25)}...`:F.title}),m.jsx("p",{id:"result-page",children:"(Project Page)"})]})},H):"content"in F?m.jsx(re,{id:"result-row",to:"/",children:m.jsxs("div",{id:"indiv-result",children:[m.jsx("p",{id:"result-name",children:F.title.length>25?`${F.title.substring(0,25)}...`:F.title}),m.jsx("p",{id:"result-page",children:"(Home)"})]})},H):"contactName"in F?m.jsx(re,{id:"result-row",to:"/",children:m.jsxs("div",{id:"indiv-result",children:[m.jsx("p",{id:"result-name",children:"Contact Me"}),m.jsx("p",{id:"result-page",children:"(Home)"})]})},H):"name"in F?m.jsx(re,{id:"result-row",to:"/about",children:m.jsxs("div",{id:"indiv-result",children:[m.jsx("p",{id:"result-name",children:F.name.length>25?`${F.name.substring(0,25)}...`:F.name}),m.jsx("p",{id:"result-page",children:"(About)"})]})},H):"date"in F?m.jsx(re,{id:"result-row",to:"/about",children:m.jsxs("div",{id:"indiv-result",children:[m.jsx("p",{id:"result-name",children:F.title.length>25?`${F.title.substring(0,25)}...`:F.title}),m.jsx("p",{id:"result-page",children:"(About)"})]})},H):"address"in F?m.jsx(re,{id:"result-row",to:"/contact",children:m.jsxs("div",{id:"indiv-result",children:[m.jsxs("p",{id:"result-name",children:["Address: ",l.address[0]]}),m.jsx("p",{id:"result-page",children:"(Contact)"})]})}):"phone"in F?m.jsx("a",{id:"result-row",href:`tel:${l.phone[0]}`,children:m.jsxs("div",{id:"indiv-result",children:["Phone: ",l.phone[0]]})}):"email"in F?m.jsx("a",{id:"result-row",href:`mailto:${l.email[0]}`,children:m.jsxs("div",{id:"indiv-result",children:["Email: ",l.email[0]]})}):"github"in F?m.jsx(re,{id:"result-row",to:l.github[0],children:m.jsxs("div",{id:"indiv-result",children:["GitHub: ",l.github[1]]})}):"url"in F?m.jsx(re,{id:"result-row",to:l.url[0],children:m.jsxs("div",{id:"indiv-result",children:["URL: ",l.url[1]]})}):"linkedin"in F?m.jsx(re,{id:"result-row",to:l.linkedin[0],children:m.jsxs("div",{id:"indiv-result",children:["LinkedIn: ",l.linkedin[1]]})}):null)})]})};function Yr(t,e,n){const r=document.querySelector(t);r&&(r.classList.remove(e),r.classList.add(n))}const vA=y.createContext(null),H6=({children:t})=>{const[e,n]=y.useState(null),[r,i]=y.useState(!0);return y.useEffect(()=>{const s=v$(No.auth(),o=>{n(o||null),i(!1)});return()=>s()},[]),m.jsx(vA.Provider,{value:{user:e},children:r?m.jsx(m.Fragment,{}):t})},yA=()=>y.useContext(vA);function Ct(t){return t.charAt(0).toUpperCase()+t.slice(1)}function _A(){const[t,e]=y.useState(""),[n,r]=y.useState([]),[i,s]=y.useState(!1),o=yA();y.useEffect(()=>{fetch("../data.json").then(d=>d.json()).then(d=>{e(d.cv),r(d.projects||[])}).catch(d=>{console.error("Error fetching data:",d)})},[]);const a=()=>{y$(Cv())},l=d=>{d.preventDefault(),t&&window.open(t,"_blank")},c=()=>{s(!1)};return m.jsxs(m.Fragment,{children:[m.jsx("nav",{className:"nonuser-navbar navbar sticky-top bg-body-tertiary d-none d-md-flex",children:m.jsxs("div",{className:"container-fluid d-flex justify-content-between align-items-center",children:[m.jsxs("div",{className:"d-flex align-items-center",children:[m.jsx(re,{className:"nonuser-navbar-brand navbar-brand",to:"/",onMouseEnter:()=>Yr(".icon","icon-bp-bbl","icon-bp-blw"),onMouseLeave:()=>Yr(".icon","icon-bp-blw","icon-bp-bbl"),children:m.jsx("i",{className:"icon icon-bp-bbl"})}),m.jsxs("ul",{className:"nav nav-pills",children:[m.jsx("li",{className:"nonuser-nav-item nav-item",children:m.jsx(re,{className:"nonuser-nav-link nav-link",to:"/about",children:Ct("about")})}),m.jsx("li",{className:"nonuser-nav-item nav-item",children:m.jsxs(Fe,{className:"nonuser-nav-item nav-item",children:[m.jsx(Fe.Toggle,{variant:"link",className:"nonuser-nav-link nav-link",children:Ct("projects")}),m.jsxs(Fe.Menu,{children:[m.jsx(Fe.Item,{as:re,to:"/projects",children:Ct("Projects Page")},"projects"),m.jsx(Fe.Divider,{}),n.map(d=>m.jsx(Fe.Item,{as:re,to:`/projects/${d.id}`,children:Ct(d.title)},d.id))]})]})}),m.jsx("li",{className:"nonuser-nav-item nav-item",children:t?m.jsx("a",{href:t,className:"nonuser-nav-link nav-link",onClick:l,children:Ct("CV")}):m.jsx("span",{className:"nonuser-nav-link nav-link",children:Ct("CV")})}),m.jsx("li",{className:"nonuser-nav-item nav-item",children:m.jsx(re,{className:"nonuser-nav-link nav-link",to:"/contact",children:Ct("contact")})})]})]}),m.jsx("div",{children:o!=null&&o.user?m.jsxs(re,{className:"nav-login",to:"",onClick:a,children:[m.jsx("i",{className:"bi bi-box-arrow-in-left login-arrow"}),"Log out"]}):m.jsxs(re,{className:"nav-login",to:"/login",children:[m.jsx("i",{className:"bi bi-box-arrow-in-left login-arrow"}),"Log in"]})})]})}),m.jsx(Th,{className:"d-md-none offcanvas-navbutton",onClick:()=>s(!0),children:m.jsx("i",{className:"bi bi-list"})}),m.jsxs(qu,{show:i,onHide:()=>s(!1),placement:"start",children:[m.jsx(qu.Header,{closeButton:!0,children:m.jsx(qu.Title,{id:"offcanvas-title",children:"Menu"})}),m.jsx(qu.Body,{children:m.jsxs("ul",{className:"nav flex-column",children:[m.jsx("li",{className:"nonuser-nav-item nav-item",children:m.jsx(re,{className:"nonuser-nav-link nav-link",to:"/",onClick:c,children:Ct("home")})}),m.jsx("li",{className:"nonuser-nav-item nav-item",children:m.jsx(re,{className:"nonuser-nav-link nav-link",to:"/about",onClick:c,children:Ct("about")})}),m.jsx("li",{className:"nonuser-nav-item nav-item",children:m.jsxs(Fe,{className:"nonuser-nav-item nav-item",children:[m.jsx(Fe.Toggle,{variant:"link",className:"nonuser-nav-link nav-link",children:Ct("projects")}),m.jsxs(Fe.Menu,{children:[m.jsx(Fe.Item,{as:re,to:"/projects",onClick:c,children:Ct("Projects Page")},"projects"),m.jsx(Fe.Divider,{}),n.map(d=>m.jsx(Fe.Item,{as:re,to:`/projects/${d.id}`,onClick:c,children:Ct(d.title)},d.id))]})]})}),m.jsx("li",{className:"nonuser-nav-item nav-item",children:t?m.jsx("a",{href:t,className:"nonuser-nav-link nav-link",onClick:l,children:Ct("CV")}):m.jsx("span",{className:"nav-link",children:Ct("CV")})}),m.jsx("li",{className:"nonuser-nav-item nav-item",children:m.jsx(re,{className:"nonuser-nav-link nav-link",to:"/contact",onClick:c,children:Ct("contact")})}),m.jsx("div",{className:"offcanvas-login",children:o!=null&&o.user?m.jsxs(re,{className:"nav-login",to:"",onClick:a,children:[m.jsx("i",{className:"bi bi-box-arrow-in-left login-arrow"}),"Log out"]}):m.jsxs(re,{className:"nav-login",to:"/login",onClick:c,children:[m.jsx("i",{className:"bi bi-box-arrow-in-left login-arrow"}),"Log in"]})})]})})]})]})}const q6=()=>{const[t,e]=y.useState(null),[n,r]=y.useState([]),[i,s]=y.useState("");y.useEffect(()=>{(async()=>{try{const d=await(await fetch("../data.json")).json();e(d.about),r(d.news||[])}catch(c){console.error("Error fetching data:",c)}})()},[]),y.useEffect(()=>{document.title="About | Blake Prall"},[]);const o=n.filter(l=>l.title.toLowerCase().includes(i.toLowerCase())||l.date.toLowerCase().includes(i.toLowerCase())),a=l=>{s(l.target.value)};return m.jsxs("section",{className:"about",children:[m.jsx("div",{className:"left-side",children:t&&m.jsxs(m.Fragment,{children:[m.jsx("center",{children:m.jsx("img",{src:t.photo,alt:"Your Photo",className:"about-photo"})}),m.jsx("h1",{className:"about-name",children:t.name}),m.jsxs("section",{id:"education",className:"education",children:[m.jsx("h3",{id:"college",children:t.education}),m.jsxs("p",{id:"majors",children:[t.majors[0]," ",m.jsx("br",{}),t.majors[1]]})]}),m.jsxs("section",{id:"news",className:"news",children:[m.jsx("h2",{id:"news-title",children:"News"}),m.jsx("input",{type:"text",name:"news",placeholder:"Search News...",value:i,onChange:a,className:"news-search"}),m.jsx("ul",{className:"news-list",children:o.map((l,c)=>m.jsxs("div",{className:"news-row",children:[m.jsx("div",{className:"news-title",children:l.title}),m.jsx("div",{className:"news-date",children:l.date})]},c))})]})]})}),m.jsx("section",{className:"right-side",children:t&&m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"short-summary",dangerouslySetInnerHTML:{__html:t.selfSummary||""}}),t.moreDetails.map((l,c)=>m.jsxs("section",{className:"more-detail",children:[m.jsx("h3",{id:"detail-title",children:l.title}),m.jsx("p",{id:"detail-content",children:l.content})]},c))]})})]})},G6=()=>{const[t,e]=y.useState(null);return y.useEffect(()=>{(async()=>{try{const r=await fetch("../data.json");if(!r.ok)throw new Error("Network response was not ok");const i=await r.json();e(i.contact||null)}catch(r){console.error("Error fetching data:",r)}})()},[]),y.useEffect(()=>{document.title="Contact | Blake Prall"},[]),t?m.jsx("section",{className:"contact",children:m.jsxs("div",{className:"grid-container",children:[m.jsxs("div",{className:"feedback-form",children:[m.jsx("h2",{children:"Feedback Form"}),m.jsx("p",{children:"Let me know what you think of the site or give suggestions by filling out the form below:"}),m.jsxs("form",{action:"mailto:brprall3@gmail.com.com",method:"post",encType:"text/plain",children:[m.jsx("input",{type:"text",id:"name",name:"name",placeholder:"Your Full Name",required:!0}),m.jsx("input",{type:"email",id:"email",name:"email",placeholder:"Your Email",required:!0}),m.jsx("textarea",{id:"feedback",name:"feedback",rows:4,placeholder:"Your Feedback",required:!0}),m.jsx("button",{type:"submit",children:"Send Feedback"})]})]}),m.jsxs("div",{className:"contact-info",children:[m.jsxs("div",{id:"location",children:[m.jsx("h4",{children:"Location"}),m.jsx("p",{className:"contact-text",children:t.address[0]})]}),m.jsxs("div",{id:"contact-details",children:[m.jsx("h4",{children:"Contact Details"}),m.jsxs("p",{className:"contact-text",children:["Email:   ",m.jsx("a",{className:"contact-link",href:`mailto:${t.email[0]}`,children:t.email[0]})]}),m.jsx("br",{}),m.jsxs("p",{className:"contact-text",children:["Phone:   ",m.jsx("a",{className:"contact-link",href:`tel:${t.phone[0]}`,children:t.phone[0]})]})]}),m.jsxs("div",{id:"socials",children:[m.jsx("h4",{children:"Socials"}),m.jsx(re,{className:"social-links social-links-icons",to:t.github[0],target:"_blank",onMouseEnter:()=>Yr(".icon","icon-github-logo","icon-github-reverse"),onMouseLeave:()=>Yr(".icon","icon-github-reverse","icon-github-logo"),children:m.jsx("i",{className:"icon icon-github-logo"})}),m.jsx(re,{className:"social-links social-links-icons",to:t.linkedin[0],target:"_blank",onMouseEnter:()=>Yr(".icon","icon-linkedin-logo","icon-linkedinreverse"),onMouseLeave:()=>Yr(".icon","icon-linkedin-reverse","icon-linkedin-logo"),children:m.jsx("i",{className:"icon icon-linkedin-logo"})})]})]})]})}):m.jsx("p",{children:"Loading..."})},K6=()=>{const[t,e]=y.useState([]),[n,r]=y.useState("");y.useEffect(()=>{fetch("../data.json").then(s=>s.json()).then(s=>{e(s.projects||[])}).catch(s=>{console.error("Error fetching data:",s)})},[]),y.useEffect(()=>{document.title="Projects | Blake Prall"},[]);const i=t.filter(s=>s.title.toLowerCase().includes(n.toLowerCase())||s.description.toLowerCase().includes(n.toLowerCase()));return m.jsx("section",{id:"projects",children:m.jsxs("div",{className:"staggered-grid-container",children:[m.jsxs("div",{className:"projects-search staggered-grid-item",children:[m.jsx("h2",{id:"projects-page-title",children:"Projects"}),m.jsx("div",{className:"projects-searchbar",children:m.jsx("input",{type:"search",name:"projects",placeholder:"Search Projects...",value:n,onChange:s=>r(s.target.value)})})]}),i.map(s=>m.jsxs("div",{className:"projects-individual staggered-item",children:[m.jsx("h4",{className:"projects-title",dangerouslySetInnerHTML:{__html:s.title||""}}),m.jsx("div",{className:"projects-desc-wrapper",children:m.jsxs("div",{className:"projects-desc-box",children:[m.jsx("div",{className:"projects-desc-float",children:s.descriptionImage&&m.jsx("img",{src:s.descriptionImage,alt:s.title,className:"projects-desc-image"})}),m.jsx("p",{className:"projects-desc-text",dangerouslySetInnerHTML:{__html:s.description||""}})]})}),m.jsx(re,{to:`/projects/${s.id}`,className:"read-more",children:m.jsx("button",{className:"read-more-button",children:"Read More"})})]},s.id))]})})};function u0(t){return t.toString().padStart(2,"0")}const Q6=()=>new Date().toLocaleString("default",{month:"long"}),Y6=t=>{const e=t.getFullYear(),n=u0(t.getMonth()+1),r=u0(t.getDate());return[e,n,r].join("-")},wA=({className:t})=>{const[e,n]=y.useState(new Date);y.useEffect(()=>{const o=setInterval(()=>{n(new Date)},1e3);return()=>clearInterval(o)},[]);const r=Y6(e),i=Q6(),s=e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"});return m.jsx("div",{id:"date-clock-container",className:t,children:m.jsxs("div",{className:"date-clock",children:[m.jsxs("h2",{children:[i," ",r.split("-")[2],", ",r.split("-")[0]]}),m.jsx("p",{children:s})]})})},J6=()=>{const[t,e]=y.useState([]),[n,r]=y.useState(null),[i,s]=y.useState(!1),o=y.useRef([]);y.useEffect(()=>{(async()=>{try{const c=await fetch("../data.json");if(!c.ok)throw new Error("Network response was not ok");const d=await c.json();r(d.frontPage.contact||null),e(d.frontPage.paragraphs||[])}catch(c){console.error("Error fetching data:",c)}})()},[]),y.useEffect(()=>{document.title="Blake Prall"},[]);const a=(l,c)=>{l.forEach((d,f)=>{d.isIntersecting&&o.current[f]&&(d.target.classList.add("fade-in"),c.unobserve(d.target))})};return y.useEffect(()=>{const l={root:null,rootMargin:"0px",threshold:.25},c=new IntersectionObserver(a,l);return o.current.forEach(d=>{d&&c.observe(d)}),()=>{c.disconnect()}},[t]),y.useEffect(()=>{const l=()=>{const c=window.scrollY;s(c>48)};return window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l)}},[]),m.jsxs("div",{id:"home",children:[m.jsx("div",{className:"home-header-container",id:"features-header",children:m.jsxs("div",{children:[m.jsx("p",{children:"My Personal Site"}),m.jsx("h1",{children:"Blake Prall"})]})}),m.jsxs("div",{id:"home-content-container",children:[m.jsx("div",{id:"home-text-container",children:t.length>0?t.map((l,c)=>m.jsxs("div",{className:"home-card",ref:d=>o.current[c]=d,children:[m.jsx("div",{className:"hover-bar"}),l.link?m.jsx(re,{to:l.link,className:"home-card-link",children:m.jsx("p",{className:"home-card-title",children:l.title})}):m.jsx("p",{className:"home-card-title",children:l.title}),m.jsx("p",{className:"home-card-content",children:l.content})]},c)):m.jsx("p",{children:"No content available"})}),m.jsx("div",{id:"date-clock-container",className:i?"fixed":"",children:m.jsx(wA,{})})]}),n&&m.jsxs("section",{id:"contact-me",children:[m.jsx("div",{className:"home-header-container",id:"about-header",children:m.jsx("div",{children:m.jsx("h3",{children:"Contact Me"})})}),m.jsx("div",{id:"about",children:m.jsxs(re,{to:"/contact",className:"about-card",children:[m.jsx("div",{className:"hover-bar"}),m.jsx("img",{id:"contact-photo",src:n.photo,alt:`${n.contactName}'s photo`}),m.jsxs("h4",{children:[n.contactName,m.jsx("i",{className:"bi bi-chevron-right"})]}),m.jsx("p",{children:n.shortSummary})]})})]})]})},X6=()=>{const[t,e]=y.useState([]),[n,r]=y.useState(null),[i,s]=y.useState(!1),o=y.useRef([]);y.useEffect(()=>{(async()=>{try{const c=await fetch("../data.json");if(!c.ok)throw new Error("Network response was not ok");const d=await c.json();r(d.frontPage.contact||null),e(d.frontPage.paragraphs||[])}catch(c){console.error("Error fetching data:",c)}})()},[]);const a=(l,c)=>{l.forEach((d,f)=>{d.isIntersecting&&o.current[f]&&(d.target.classList.add("fade-in"),c.unobserve(d.target))})};return y.useEffect(()=>{const l={root:null,rootMargin:"0px",threshold:.25},c=new IntersectionObserver(a,l);return o.current.forEach(d=>{d&&c.observe(d)}),()=>{c.disconnect()}},[t]),y.useEffect(()=>{const l=()=>{const c=window.scrollY;s(c>48)};return window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l)}},[]),y.useEffect(()=>{document.title="Source Code | Blake Prall"},[]),m.jsxs("div",{id:"home",children:[m.jsx("div",{className:"home-header-container",id:"features-header",children:m.jsxs("div",{children:[m.jsx("p",{children:"My Personal Site"}),m.jsx("h1",{children:"Blake Prall"})]})}),m.jsxs("div",{id:"home-content-container",children:[m.jsx("div",{id:"home-text-container",children:t.length>0?t.map((l,c)=>m.jsxs("div",{className:"home-card",ref:d=>o.current[c]=d,children:[m.jsx("div",{className:"hover-bar"}),l.link?m.jsx(re,{to:l.link,className:"home-card-link",children:m.jsx("p",{className:"home-card-title",children:l.title})}):m.jsx("p",{className:"home-card-title",children:l.title}),m.jsx("p",{className:"home-card-content",children:l.content})]},c)):m.jsx("p",{children:"No content available"})}),m.jsx("div",{id:"date-clock-container",className:i?"fixed":"",children:m.jsx(wA,{})})]}),n&&m.jsxs("section",{id:"contact-me",children:[m.jsx("div",{className:"home-header-container",id:"about-header",children:m.jsx("div",{children:m.jsx("h3",{children:"Contact Me"})})}),m.jsx("div",{id:"about",children:m.jsxs(re,{to:"/contact",className:"about-card",children:[m.jsx("div",{className:"hover-bar"}),m.jsx("img",{id:"contact-photo",src:n.photo,alt:`${n.contactName}'s photo`}),m.jsxs("h4",{children:[n.contactName,m.jsx("i",{className:"bi bi-chevron-right"})]}),m.jsx("p",{children:n.shortSummary})]})})]})]})};function qv(){return m.jsx("div",{className:"top-bar",children:m.jsx("div",{className:"brand-container",children:m.jsx(re,{className:"nonuser-navbar-brand navbar-brand",to:"/",onMouseEnter:()=>Yr(".icon","icon-bp-logo","icon-bp-bb"),onMouseLeave:()=>Yr(".icon","icon-bp-bb","icon-bp-logo"),children:m.jsx("i",{className:"icon icon-bp-logo"})})})})}function Z6(){return y.useEffect(()=>{document.title="Sign Up Pending | Blake Prall"},[]),m.jsxs(m.Fragment,{children:[m.jsx(qv,{}),m.jsxs("div",{className:"signup-pending",children:[m.jsx("h1",{children:"Sign Up Pending"}),m.jsx("p",{children:"Your account is currently pending approval. You will be notified once it's approved."})]})]})}const e3=()=>{const{id:t}=Kb(),[e,n]=y.useState(null),[r,i]=y.useState(!0),[s,o]=y.useState(null);return y.useEffect(()=>{t&&(async()=>{try{const l=await fetch("../data.json");if(!l.ok)throw new Error("Network response was not ok");const d=(await l.json()).projects.find(f=>f.id===t);n(d||null)}catch{o("Failed to load project data.")}finally{i(!1)}})()},[t]),y.useEffect(()=>{e!=null&&e.title&&(document.title=`${e.title} | Blake Prall`)},[e]),r?m.jsx("main",{children:m.jsx("p",{children:"Loading..."})}):s?m.jsx("main",{children:m.jsx("p",{children:s})}):e?m.jsx("main",{children:m.jsxs("section",{className:"project",id:e.type,children:[m.jsxs("h3",{children:[e.title,m.jsx("a",{href:e.titleLink,target:"_blank",children:m.jsx("u",{children:e.titleLinkLabel})})]}),e.type==="pdf"?m.jsx("iframe",{src:e.materials?e.materials[0].path:"",style:{width:"100%",height:"100vh"},scrolling:"yes"}):m.jsx("div",{className:"project-text",dangerouslySetInnerHTML:{__html:e.contents||""}})]})}):m.jsx("main",{children:m.jsx("p",{children:"Project not found."})})};function t3(){const[t,e]=y.useState(""),[n,r]=y.useState(""),[i,s]=y.useState(""),o=Fd(),a=[{id:"floatingEmail",type:"email",placeholder:"Email",value:t,onChange:d=>e(d.target.value)},{id:"floatingPassword",type:"password",placeholder:"Password",value:n,onChange:d=>r(d.target.value)}],l=async d=>{d.preventDefault();try{await p$(Vf,Sv),await f$(Vf,t,n),o("/expenses",{replace:!0})}catch(f){console.error("Authentication error:",f.message),s("Invalid email or password.")}},c=y.useCallback(async()=>{try{const d=await q$(Vf);d&&d.user?(console.log("Google sign-in success:",d.user),o("/expenses",{replace:!0})):console.log("No user signed in or there was an issue.")}catch(d){console.error("Error handling redirect result:",d.code,d.message),s(d.message.replace("Firebase:","").trim())}},[o]);return y.useEffect(()=>{c()},[c]),m.jsxs(m.Fragment,{children:[m.jsx(qv,{}),m.jsxs("div",{className:"login-form",children:[m.jsxs("form",{id:"login-form",onSubmit:l,children:[a.map((d,f)=>m.jsxs("div",{className:"form-floating mb-3",children:[m.jsx("input",{className:"form-control",type:d.type,placeholder:d.placeholder,id:d.id,value:d.value,onChange:d.onChange,required:!0}),m.jsx("label",{htmlFor:d.id,children:d.placeholder})]},f)),i&&m.jsx("p",{style:{color:"red"},children:i}),i?null:m.jsx("br",{}),m.jsx("input",{type:"submit",value:"Sign in"})]}),m.jsxs("p",{id:"link-to-signup",children:["Don't have an account? Request to ",m.jsx(re,{to:"/signup",children:"Sign Up"}),"."]})]})]})}function n3(){const[t,e]=y.useState(""),[n,r]=y.useState(""),[i,s]=y.useState(""),[o,a]=y.useState(""),[l,c]=y.useState(""),[d,f]=y.useState(""),g=Fd(),k=Cv(),R=[{id:"floatingFirstName",type:"text",placeholder:"First Name",value:t,onChange:E=>e(E.target.value)},{id:"floatingLastName",type:"text",placeholder:"Last Name",value:n,onChange:E=>r(E.target.value)},{id:"floatingEmail",type:"email",placeholder:"Email",value:i,onChange:E=>s(E.target.value)},{id:"floatingPassword",type:"password",placeholder:"Password",value:o,onChange:E=>a(E.target.value)},{id:"floatingConfirmPassword",type:"password",placeholder:"Confirm Password",value:l,onChange:E=>c(E.target.value)}],x=async()=>{try{const w=(await h$(k,i,o)).user,S=ZF(N4,`users/${w.uid}/info`),O=eU(S,"userInfo");await pU(O,{uid:w.uid,firstName:t,lastName:n,email:w.email,status:"pending"}),g("/signup-pending",{replace:!0}),console.log("Document written with ID: info")}catch(E){console.error("Registration error:",E.message),f(E.message.replace("Firebase:","").trim())}},b=async E=>{if(E.preventDefault(),o!==l){console.error("Passwords do not match."),f("Passwords do not match.");return}x()};return m.jsxs("form",{id:"signup-form",onSubmit:b,children:[R.map(E=>m.jsxs("div",{className:"form-floating mb-3",children:[m.jsx("input",{className:"form-control",type:E.type,placeholder:E.placeholder,id:E.id,value:E.value,onChange:E.onChange,required:!0}),m.jsx("label",{htmlFor:E.id,children:E.placeholder})]},E.id)),d&&m.jsx("p",{style:{color:"red"},children:d}),d?null:m.jsx("br",{}),m.jsx("input",{type:"submit",value:"Sign Up"})]})}function r3(){return m.jsxs(m.Fragment,{children:[m.jsx(qv,{}),m.jsx("div",{className:"login-form",children:m.jsx(n3,{})})]})}const i3=({children:t})=>{const e=yA(),n=Po();return e&&e.user?t:m.jsx(aN,{to:"/login",state:{path:n.pathname}})};No.initializeApp(lC);const va=({children:t})=>m.jsxs("div",{className:"wrapper",children:[m.jsx(gA,{}),m.jsx(_A,{}),t]});function s3({element:t}){return m.jsx(i3,{children:m.jsxs("div",{className:"main-container",children:[m.jsx(gA,{}),m.jsx(_A,{}),t]})})}function o3(){return m.jsx(H6,{children:m.jsxs(uN,{children:[m.jsx(Ln,{path:"",element:m.jsx(va,{children:m.jsx(J6,{})})}),m.jsx(Ln,{path:"/about",element:m.jsx(va,{children:m.jsx(q6,{})})}),m.jsx(Ln,{path:"/login",element:m.jsx(t3,{})}),m.jsx(Ln,{path:"/signup",element:m.jsx(r3,{})}),m.jsx(Ln,{path:"/signup-pending",element:m.jsx(Z6,{})}),m.jsx(Ln,{path:"/contact",element:m.jsx(va,{children:m.jsx(G6,{})})}),m.jsx(Ln,{path:"/projects",element:m.jsx(va,{children:m.jsx(K6,{})})}),m.jsx(Ln,{path:"/projects/:id",element:m.jsx(va,{children:m.jsx(e3,{})})}),m.jsx(Ln,{path:"/source-code",element:m.jsx(s3,{element:m.jsx(X6,{})})})]})})}qf.createRoot(document.getElementById("root")).render(m.jsx(Tt.StrictMode,{children:m.jsx(gN,{basename:"/",children:m.jsx(o3,{})})}));
