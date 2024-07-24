function KA(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Ol(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var d0={exports:{}},Td={},h0={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dl=Symbol.for("react.element"),QA=Symbol.for("react.portal"),YA=Symbol.for("react.fragment"),JA=Symbol.for("react.strict_mode"),XA=Symbol.for("react.profiler"),ZA=Symbol.for("react.provider"),eP=Symbol.for("react.context"),tP=Symbol.for("react.forward_ref"),nP=Symbol.for("react.suspense"),rP=Symbol.for("react.memo"),iP=Symbol.for("react.lazy"),zy=Symbol.iterator;function sP(t){return t===null||typeof t!="object"?null:(t=zy&&t[zy]||t["@@iterator"],typeof t=="function"?t:null)}var f0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},p0=Object.assign,m0={};function ko(t,e,n){this.props=t,this.context=e,this.refs=m0,this.updater=n||f0}ko.prototype.isReactComponent={};ko.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ko.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function g0(){}g0.prototype=ko.prototype;function Cm(t,e,n){this.props=t,this.context=e,this.refs=m0,this.updater=n||f0}var Am=Cm.prototype=new g0;Am.constructor=Cm;p0(Am,ko.prototype);Am.isPureReactComponent=!0;var Wy=Array.isArray,v0=Object.prototype.hasOwnProperty,Pm={current:null},y0={key:!0,ref:!0,__self:!0,__source:!0};function _0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)v0.call(e,r)&&!y0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];i.children=c}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Dl,type:t,key:s,ref:o,props:i,_owner:Pm.current}}function oP(t,e){return{$$typeof:Dl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Dl}function aP(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Hy=/\/+/g;function qh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?aP(""+t.key):e.toString(36)}function Kc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Dl:case QA:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+qh(o,0):r,Wy(i)?(n="",t!=null&&(n=t.replace(Hy,"$&/")+"/"),Kc(i,e,n,"",function(u){return u})):i!=null&&(bm(i)&&(i=oP(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Hy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Wy(t))for(var a=0;a<t.length;a++){s=t[a];var c=r+qh(s,a);o+=Kc(s,e,n,c,i)}else if(c=sP(t),typeof c=="function")for(t=c.call(t),a=0;!(s=t.next()).done;)s=s.value,c=r+qh(s,a++),o+=Kc(s,e,n,c,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function yc(t,e,n){if(t==null)return t;var r=[],i=0;return Kc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function lP(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Nt={current:null},Qc={transition:null},cP={ReactCurrentDispatcher:Nt,ReactCurrentBatchConfig:Qc,ReactCurrentOwner:Pm};function w0(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:yc,forEach:function(t,e,n){yc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return yc(t,function(){e++}),e},toArray:function(t){return yc(t,function(e){return e})||[]},only:function(t){if(!bm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=ko;te.Fragment=YA;te.Profiler=XA;te.PureComponent=Cm;te.StrictMode=JA;te.Suspense=nP;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cP;te.act=w0;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=p0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Pm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(c in e)v0.call(e,c)&&!y0.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&a!==void 0?a[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Dl,type:t.type,key:i,ref:s,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:eP,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ZA,_context:t},t.Consumer=t};te.createElement=_0;te.createFactory=function(t){var e=_0.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:tP,render:t}};te.isValidElement=bm;te.lazy=function(t){return{$$typeof:iP,_payload:{_status:-1,_result:t},_init:lP}};te.memo=function(t,e){return{$$typeof:rP,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=Qc.transition;Qc.transition={};try{t()}finally{Qc.transition=e}};te.unstable_act=w0;te.useCallback=function(t,e){return Nt.current.useCallback(t,e)};te.useContext=function(t){return Nt.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return Nt.current.useDeferredValue(t)};te.useEffect=function(t,e){return Nt.current.useEffect(t,e)};te.useId=function(){return Nt.current.useId()};te.useImperativeHandle=function(t,e,n){return Nt.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return Nt.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return Nt.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return Nt.current.useMemo(t,e)};te.useReducer=function(t,e,n){return Nt.current.useReducer(t,e,n)};te.useRef=function(t){return Nt.current.useRef(t)};te.useState=function(t){return Nt.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return Nt.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return Nt.current.useTransition()};te.version="18.3.1";h0.exports=te;var _=h0.exports;const Tt=Ol(_),uP=KA({__proto__:null,default:Tt},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dP=_,hP=Symbol.for("react.element"),fP=Symbol.for("react.fragment"),pP=Object.prototype.hasOwnProperty,mP=dP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gP={key:!0,ref:!0,__self:!0,__source:!0};function E0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)pP.call(e,r)&&!gP.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:hP,type:t,key:s,ref:o,props:i,_owner:mP.current}}Td.Fragment=fP;Td.jsx=E0;Td.jsxs=E0;d0.exports=Td;var m=d0.exports,Gf={},I0={exports:{}},Xt={},T0={exports:{}},S0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,q){var H=F.length;F.push(q);e:for(;0<H;){var ie=H-1>>>1,Z=F[ie];if(0<i(Z,q))F[ie]=q,F[H]=Z,H=ie;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var q=F[0],H=F.pop();if(H!==q){F[0]=H;e:for(var ie=0,Z=F.length,ce=Z>>>1;ie<ce;){var Ne=2*(ie+1)-1,ue=F[Ne],Fe=Ne+1,pt=F[Fe];if(0>i(ue,H))Fe<Z&&0>i(pt,ue)?(F[ie]=pt,F[Fe]=H,ie=Fe):(F[ie]=ue,F[Ne]=H,ie=Ne);else if(Fe<Z&&0>i(pt,H))F[ie]=pt,F[Fe]=H,ie=Fe;else break e}}return q}function i(F,q){var H=F.sortIndex-q.sortIndex;return H!==0?H:F.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var c=[],u=[],d=1,f=null,g=3,R=!1,P=!1,x=!1,N=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(F){for(var q=n(u);q!==null;){if(q.callback===null)r(u);else if(q.startTime<=F)r(u),q.sortIndex=q.expirationTime,e(c,q);else break;q=n(u)}}function O(F){if(x=!1,k(F),!P)if(n(c)!==null)P=!0,re(L);else{var q=n(u);q!==null&&pe(O,q.startTime-F)}}function L(F,q){P=!1,x&&(x=!1,I(v),v=-1),R=!0;var H=g;try{for(k(q),f=n(c);f!==null&&(!(f.expirationTime>q)||F&&!b());){var ie=f.callback;if(typeof ie=="function"){f.callback=null,g=f.priorityLevel;var Z=ie(f.expirationTime<=q);q=t.unstable_now(),typeof Z=="function"?f.callback=Z:f===n(c)&&r(c),k(q)}else r(c);f=n(c)}if(f!==null)var ce=!0;else{var Ne=n(u);Ne!==null&&pe(O,Ne.startTime-q),ce=!1}return ce}finally{f=null,g=H,R=!1}}var M=!1,T=null,v=-1,S=5,A=-1;function b(){return!(t.unstable_now()-A<S)}function C(){if(T!==null){var F=t.unstable_now();A=F;var q=!0;try{q=T(!0,F)}finally{q?w():(M=!1,T=null)}}else M=!1}var w;if(typeof E=="function")w=function(){E(C)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,ne=J.port2;J.port1.onmessage=C,w=function(){ne.postMessage(null)}}else w=function(){N(C,0)};function re(F){T=F,M||(M=!0,w())}function pe(F,q){v=N(function(){F(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){P||R||(P=!0,re(L))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(F){switch(g){case 1:case 2:case 3:var q=3;break;default:q=g}var H=g;g=q;try{return F()}finally{g=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,q){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var H=g;g=F;try{return q()}finally{g=H}},t.unstable_scheduleCallback=function(F,q,H){var ie=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ie+H:ie):H=ie,F){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=H+Z,F={id:d++,callback:q,priorityLevel:F,startTime:H,expirationTime:Z,sortIndex:-1},H>ie?(F.sortIndex=H,e(u,F),n(c)===null&&F===n(u)&&(x?(I(v),v=-1):x=!0,pe(O,H-ie))):(F.sortIndex=Z,e(c,F),P||R||(P=!0,re(L))),F},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(F){var q=g;return function(){var H=g;g=q;try{return F.apply(this,arguments)}finally{g=H}}}})(S0);T0.exports=S0;var vP=T0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yP=_,Yt=vP;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var k0=new Set,Ya={};function ps(t,e){io(t,e),io(t+"Capture",e)}function io(t,e){for(Ya[t]=e,t=0;t<e.length;t++)k0.add(e[t])}var ur=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kf=Object.prototype.hasOwnProperty,_P=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qy={},Gy={};function wP(t){return Kf.call(Gy,t)?!0:Kf.call(qy,t)?!1:_P.test(t)?Gy[t]=!0:(qy[t]=!0,!1)}function EP(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function IP(t,e,n,r){if(e===null||typeof e>"u"||EP(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ht[t]=new xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ht[e]=new xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ht[t]=new xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ht[t]=new xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ht[t]=new xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ht[t]=new xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ht[t]=new xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ht[t]=new xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ht[t]=new xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Nm=/[\-:]([a-z])/g;function xm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Nm,xm);ht[e]=new xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Nm,xm);ht[e]=new xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Nm,xm);ht[e]=new xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ht[t]=new xt(t,1,!1,t.toLowerCase(),null,!1,!1)});ht.xlinkHref=new xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ht[t]=new xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Om(t,e,n,r){var i=ht.hasOwnProperty(e)?ht[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(IP(e,n,i,r)&&(n=null),r||i===null?wP(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var wr=yP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_c=Symbol.for("react.element"),xs=Symbol.for("react.portal"),Os=Symbol.for("react.fragment"),Dm=Symbol.for("react.strict_mode"),Qf=Symbol.for("react.profiler"),R0=Symbol.for("react.provider"),C0=Symbol.for("react.context"),Lm=Symbol.for("react.forward_ref"),Yf=Symbol.for("react.suspense"),Jf=Symbol.for("react.suspense_list"),Mm=Symbol.for("react.memo"),Lr=Symbol.for("react.lazy"),A0=Symbol.for("react.offscreen"),Ky=Symbol.iterator;function ia(t){return t===null||typeof t!="object"?null:(t=Ky&&t[Ky]||t["@@iterator"],typeof t=="function"?t:null)}var be=Object.assign,Gh;function _a(t){if(Gh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Gh=e&&e[1]||""}return`
`+Gh+t}var Kh=!1;function Qh(t,e){if(!t||Kh)return"";Kh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var c=`
`+i[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=a);break}}}finally{Kh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?_a(t):""}function TP(t){switch(t.tag){case 5:return _a(t.type);case 16:return _a("Lazy");case 13:return _a("Suspense");case 19:return _a("SuspenseList");case 0:case 2:case 15:return t=Qh(t.type,!1),t;case 11:return t=Qh(t.type.render,!1),t;case 1:return t=Qh(t.type,!0),t;default:return""}}function Xf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Os:return"Fragment";case xs:return"Portal";case Qf:return"Profiler";case Dm:return"StrictMode";case Yf:return"Suspense";case Jf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case C0:return(t.displayName||"Context")+".Consumer";case R0:return(t._context.displayName||"Context")+".Provider";case Lm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Mm:return e=t.displayName||null,e!==null?e:Xf(t.type)||"Memo";case Lr:e=t._payload,t=t._init;try{return Xf(t(e))}catch{}}return null}function SP(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xf(e);case 8:return e===Dm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function li(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function P0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function kP(t){var e=P0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function wc(t){t._valueTracker||(t._valueTracker=kP(t))}function b0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=P0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function _u(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Zf(t,e){var n=e.checked;return be({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Qy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=li(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function N0(t,e){e=e.checked,e!=null&&Om(t,"checked",e,!1)}function ep(t,e){N0(t,e);var n=li(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?tp(t,e.type,n):e.hasOwnProperty("defaultValue")&&tp(t,e.type,li(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Yy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function tp(t,e,n){(e!=="number"||_u(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var wa=Array.isArray;function qs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+li(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function np(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return be({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Jy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(wa(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:li(n)}}function x0(t,e){var n=li(e.value),r=li(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Xy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function O0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?O0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ec,D0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ec=Ec||document.createElement("div"),Ec.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ec.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ja(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Pa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},RP=["Webkit","ms","Moz","O"];Object.keys(Pa).forEach(function(t){RP.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Pa[e]=Pa[t]})});function L0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Pa.hasOwnProperty(t)&&Pa[t]?(""+e).trim():e+"px"}function M0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=L0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var CP=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ip(t,e){if(e){if(CP[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function sp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var op=null;function jm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ap=null,Gs=null,Ks=null;function Zy(t){if(t=jl(t)){if(typeof ap!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Ad(e),ap(t.stateNode,t.type,e))}}function j0(t){Gs?Ks?Ks.push(t):Ks=[t]:Gs=t}function F0(){if(Gs){var t=Gs,e=Ks;if(Ks=Gs=null,Zy(t),e)for(t=0;t<e.length;t++)Zy(e[t])}}function V0(t,e){return t(e)}function U0(){}var Yh=!1;function $0(t,e,n){if(Yh)return t(e,n);Yh=!0;try{return V0(t,e,n)}finally{Yh=!1,(Gs!==null||Ks!==null)&&(U0(),F0())}}function Xa(t,e){var n=t.stateNode;if(n===null)return null;var r=Ad(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var lp=!1;if(ur)try{var sa={};Object.defineProperty(sa,"passive",{get:function(){lp=!0}}),window.addEventListener("test",sa,sa),window.removeEventListener("test",sa,sa)}catch{lp=!1}function AP(t,e,n,r,i,s,o,a,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var ba=!1,wu=null,Eu=!1,cp=null,PP={onError:function(t){ba=!0,wu=t}};function bP(t,e,n,r,i,s,o,a,c){ba=!1,wu=null,AP.apply(PP,arguments)}function NP(t,e,n,r,i,s,o,a,c){if(bP.apply(this,arguments),ba){if(ba){var u=wu;ba=!1,wu=null}else throw Error(U(198));Eu||(Eu=!0,cp=u)}}function ms(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function B0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function e_(t){if(ms(t)!==t)throw Error(U(188))}function xP(t){var e=t.alternate;if(!e){if(e=ms(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return e_(i),t;if(s===r)return e_(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function z0(t){return t=xP(t),t!==null?W0(t):null}function W0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=W0(t);if(e!==null)return e;t=t.sibling}return null}var H0=Yt.unstable_scheduleCallback,t_=Yt.unstable_cancelCallback,OP=Yt.unstable_shouldYield,DP=Yt.unstable_requestPaint,Ue=Yt.unstable_now,LP=Yt.unstable_getCurrentPriorityLevel,Fm=Yt.unstable_ImmediatePriority,q0=Yt.unstable_UserBlockingPriority,Iu=Yt.unstable_NormalPriority,MP=Yt.unstable_LowPriority,G0=Yt.unstable_IdlePriority,Sd=null,$n=null;function jP(t){if($n&&typeof $n.onCommitFiberRoot=="function")try{$n.onCommitFiberRoot(Sd,t,void 0,(t.current.flags&128)===128)}catch{}}var Sn=Math.clz32?Math.clz32:UP,FP=Math.log,VP=Math.LN2;function UP(t){return t>>>=0,t===0?32:31-(FP(t)/VP|0)|0}var Ic=64,Tc=4194304;function Ea(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Tu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ea(a):(s&=o,s!==0&&(r=Ea(s)))}else o=n&~i,o!==0?r=Ea(o):s!==0&&(r=Ea(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Sn(e),i=1<<n,r|=t[n],e&=~i;return r}function $P(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function BP(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Sn(s),a=1<<o,c=i[o];c===-1?(!(a&n)||a&r)&&(i[o]=$P(a,e)):c<=e&&(t.expiredLanes|=a),s&=~a}}function up(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function K0(){var t=Ic;return Ic<<=1,!(Ic&4194240)&&(Ic=64),t}function Jh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ll(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Sn(e),t[e]=n}function zP(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Sn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Vm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Sn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ge=0;function Q0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Y0,Um,J0,X0,Z0,dp=!1,Sc=[],Jr=null,Xr=null,Zr=null,Za=new Map,el=new Map,Fr=[],WP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function n_(t,e){switch(t){case"focusin":case"focusout":Jr=null;break;case"dragenter":case"dragleave":Xr=null;break;case"mouseover":case"mouseout":Zr=null;break;case"pointerover":case"pointerout":Za.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":el.delete(e.pointerId)}}function oa(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=jl(e),e!==null&&Um(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function HP(t,e,n,r,i){switch(e){case"focusin":return Jr=oa(Jr,t,e,n,r,i),!0;case"dragenter":return Xr=oa(Xr,t,e,n,r,i),!0;case"mouseover":return Zr=oa(Zr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Za.set(s,oa(Za.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,el.set(s,oa(el.get(s)||null,t,e,n,r,i)),!0}return!1}function eI(t){var e=Mi(t.target);if(e!==null){var n=ms(e);if(n!==null){if(e=n.tag,e===13){if(e=B0(n),e!==null){t.blockedOn=e,Z0(t.priority,function(){J0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=hp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);op=r,n.target.dispatchEvent(r),op=null}else return e=jl(n),e!==null&&Um(e),t.blockedOn=n,!1;e.shift()}return!0}function r_(t,e,n){Yc(t)&&n.delete(e)}function qP(){dp=!1,Jr!==null&&Yc(Jr)&&(Jr=null),Xr!==null&&Yc(Xr)&&(Xr=null),Zr!==null&&Yc(Zr)&&(Zr=null),Za.forEach(r_),el.forEach(r_)}function aa(t,e){t.blockedOn===e&&(t.blockedOn=null,dp||(dp=!0,Yt.unstable_scheduleCallback(Yt.unstable_NormalPriority,qP)))}function tl(t){function e(i){return aa(i,t)}if(0<Sc.length){aa(Sc[0],t);for(var n=1;n<Sc.length;n++){var r=Sc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Jr!==null&&aa(Jr,t),Xr!==null&&aa(Xr,t),Zr!==null&&aa(Zr,t),Za.forEach(e),el.forEach(e),n=0;n<Fr.length;n++)r=Fr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Fr.length&&(n=Fr[0],n.blockedOn===null);)eI(n),n.blockedOn===null&&Fr.shift()}var Qs=wr.ReactCurrentBatchConfig,Su=!0;function GP(t,e,n,r){var i=ge,s=Qs.transition;Qs.transition=null;try{ge=1,$m(t,e,n,r)}finally{ge=i,Qs.transition=s}}function KP(t,e,n,r){var i=ge,s=Qs.transition;Qs.transition=null;try{ge=4,$m(t,e,n,r)}finally{ge=i,Qs.transition=s}}function $m(t,e,n,r){if(Su){var i=hp(t,e,n,r);if(i===null)lf(t,e,r,ku,n),n_(t,r);else if(HP(i,t,e,n,r))r.stopPropagation();else if(n_(t,r),e&4&&-1<WP.indexOf(t)){for(;i!==null;){var s=jl(i);if(s!==null&&Y0(s),s=hp(t,e,n,r),s===null&&lf(t,e,r,ku,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else lf(t,e,r,null,n)}}var ku=null;function hp(t,e,n,r){if(ku=null,t=jm(r),t=Mi(t),t!==null)if(e=ms(t),e===null)t=null;else if(n=e.tag,n===13){if(t=B0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ku=t,null}function tI(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(LP()){case Fm:return 1;case q0:return 4;case Iu:case MP:return 16;case G0:return 536870912;default:return 16}default:return 16}}var Hr=null,Bm=null,Jc=null;function nI(){if(Jc)return Jc;var t,e=Bm,n=e.length,r,i="value"in Hr?Hr.value:Hr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Jc=i.slice(t,1<r?1-r:void 0)}function Xc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function kc(){return!0}function i_(){return!1}function Zt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?kc:i_,this.isPropagationStopped=i_,this}return be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=kc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=kc)},persist:function(){},isPersistent:kc}),e}var Ro={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zm=Zt(Ro),Ml=be({},Ro,{view:0,detail:0}),QP=Zt(Ml),Xh,Zh,la,kd=be({},Ml,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==la&&(la&&t.type==="mousemove"?(Xh=t.screenX-la.screenX,Zh=t.screenY-la.screenY):Zh=Xh=0,la=t),Xh)},movementY:function(t){return"movementY"in t?t.movementY:Zh}}),s_=Zt(kd),YP=be({},kd,{dataTransfer:0}),JP=Zt(YP),XP=be({},Ml,{relatedTarget:0}),ef=Zt(XP),ZP=be({},Ro,{animationName:0,elapsedTime:0,pseudoElement:0}),e1=Zt(ZP),t1=be({},Ro,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),n1=Zt(t1),r1=be({},Ro,{data:0}),o_=Zt(r1),i1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},s1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},o1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function a1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=o1[t])?!!e[t]:!1}function Wm(){return a1}var l1=be({},Ml,{key:function(t){if(t.key){var e=i1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Xc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?s1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wm,charCode:function(t){return t.type==="keypress"?Xc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),c1=Zt(l1),u1=be({},kd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),a_=Zt(u1),d1=be({},Ml,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wm}),h1=Zt(d1),f1=be({},Ro,{propertyName:0,elapsedTime:0,pseudoElement:0}),p1=Zt(f1),m1=be({},kd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),g1=Zt(m1),v1=[9,13,27,32],Hm=ur&&"CompositionEvent"in window,Na=null;ur&&"documentMode"in document&&(Na=document.documentMode);var y1=ur&&"TextEvent"in window&&!Na,rI=ur&&(!Hm||Na&&8<Na&&11>=Na),l_=" ",c_=!1;function iI(t,e){switch(t){case"keyup":return v1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sI(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ds=!1;function _1(t,e){switch(t){case"compositionend":return sI(e);case"keypress":return e.which!==32?null:(c_=!0,l_);case"textInput":return t=e.data,t===l_&&c_?null:t;default:return null}}function w1(t,e){if(Ds)return t==="compositionend"||!Hm&&iI(t,e)?(t=nI(),Jc=Bm=Hr=null,Ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return rI&&e.locale!=="ko"?null:e.data;default:return null}}var E1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function u_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!E1[t.type]:e==="textarea"}function oI(t,e,n,r){j0(r),e=Ru(e,"onChange"),0<e.length&&(n=new zm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var xa=null,nl=null;function I1(t){vI(t,0)}function Rd(t){var e=js(t);if(b0(e))return t}function T1(t,e){if(t==="change")return e}var aI=!1;if(ur){var tf;if(ur){var nf="oninput"in document;if(!nf){var d_=document.createElement("div");d_.setAttribute("oninput","return;"),nf=typeof d_.oninput=="function"}tf=nf}else tf=!1;aI=tf&&(!document.documentMode||9<document.documentMode)}function h_(){xa&&(xa.detachEvent("onpropertychange",lI),nl=xa=null)}function lI(t){if(t.propertyName==="value"&&Rd(nl)){var e=[];oI(e,nl,t,jm(t)),$0(I1,e)}}function S1(t,e,n){t==="focusin"?(h_(),xa=e,nl=n,xa.attachEvent("onpropertychange",lI)):t==="focusout"&&h_()}function k1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Rd(nl)}function R1(t,e){if(t==="click")return Rd(e)}function C1(t,e){if(t==="input"||t==="change")return Rd(e)}function A1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Rn=typeof Object.is=="function"?Object.is:A1;function rl(t,e){if(Rn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Kf.call(e,i)||!Rn(t[i],e[i]))return!1}return!0}function f_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function p_(t,e){var n=f_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=f_(n)}}function cI(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?cI(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function uI(){for(var t=window,e=_u();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=_u(t.document)}return e}function qm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function P1(t){var e=uI(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&cI(n.ownerDocument.documentElement,n)){if(r!==null&&qm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=p_(n,s);var o=p_(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var b1=ur&&"documentMode"in document&&11>=document.documentMode,Ls=null,fp=null,Oa=null,pp=!1;function m_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pp||Ls==null||Ls!==_u(r)||(r=Ls,"selectionStart"in r&&qm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Oa&&rl(Oa,r)||(Oa=r,r=Ru(fp,"onSelect"),0<r.length&&(e=new zm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ls)))}function Rc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ms={animationend:Rc("Animation","AnimationEnd"),animationiteration:Rc("Animation","AnimationIteration"),animationstart:Rc("Animation","AnimationStart"),transitionend:Rc("Transition","TransitionEnd")},rf={},dI={};ur&&(dI=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function Cd(t){if(rf[t])return rf[t];if(!Ms[t])return t;var e=Ms[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in dI)return rf[t]=e[n];return t}var hI=Cd("animationend"),fI=Cd("animationiteration"),pI=Cd("animationstart"),mI=Cd("transitionend"),gI=new Map,g_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gi(t,e){gI.set(t,e),ps(e,[t])}for(var sf=0;sf<g_.length;sf++){var of=g_[sf],N1=of.toLowerCase(),x1=of[0].toUpperCase()+of.slice(1);gi(N1,"on"+x1)}gi(hI,"onAnimationEnd");gi(fI,"onAnimationIteration");gi(pI,"onAnimationStart");gi("dblclick","onDoubleClick");gi("focusin","onFocus");gi("focusout","onBlur");gi(mI,"onTransitionEnd");io("onMouseEnter",["mouseout","mouseover"]);io("onMouseLeave",["mouseout","mouseover"]);io("onPointerEnter",["pointerout","pointerover"]);io("onPointerLeave",["pointerout","pointerover"]);ps("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ps("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ps("onBeforeInput",["compositionend","keypress","textInput","paste"]);ps("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ps("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ps("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),O1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ia));function v_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,NP(r,e,void 0,t),t.currentTarget=null}function vI(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==s&&i.isPropagationStopped())break e;v_(i,a,u),s=c}else for(o=0;o<r.length;o++){if(a=r[o],c=a.instance,u=a.currentTarget,a=a.listener,c!==s&&i.isPropagationStopped())break e;v_(i,a,u),s=c}}}if(Eu)throw t=cp,Eu=!1,cp=null,t}function Ie(t,e){var n=e[_p];n===void 0&&(n=e[_p]=new Set);var r=t+"__bubble";n.has(r)||(yI(e,t,2,!1),n.add(r))}function af(t,e,n){var r=0;e&&(r|=4),yI(n,t,r,e)}var Cc="_reactListening"+Math.random().toString(36).slice(2);function il(t){if(!t[Cc]){t[Cc]=!0,k0.forEach(function(n){n!=="selectionchange"&&(O1.has(n)||af(n,!1,t),af(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Cc]||(e[Cc]=!0,af("selectionchange",!1,e))}}function yI(t,e,n,r){switch(tI(e)){case 1:var i=GP;break;case 4:i=KP;break;default:i=$m}n=i.bind(null,e,n,t),i=void 0,!lp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function lf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Mi(a),o===null)return;if(c=o.tag,c===5||c===6){r=s=o;continue e}a=a.parentNode}}r=r.return}$0(function(){var u=s,d=jm(n),f=[];e:{var g=gI.get(t);if(g!==void 0){var R=zm,P=t;switch(t){case"keypress":if(Xc(n)===0)break e;case"keydown":case"keyup":R=c1;break;case"focusin":P="focus",R=ef;break;case"focusout":P="blur",R=ef;break;case"beforeblur":case"afterblur":R=ef;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=s_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=JP;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=h1;break;case hI:case fI:case pI:R=e1;break;case mI:R=p1;break;case"scroll":R=QP;break;case"wheel":R=g1;break;case"copy":case"cut":case"paste":R=n1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=a_}var x=(e&4)!==0,N=!x&&t==="scroll",I=x?g!==null?g+"Capture":null:g;x=[];for(var E=u,k;E!==null;){k=E;var O=k.stateNode;if(k.tag===5&&O!==null&&(k=O,I!==null&&(O=Xa(E,I),O!=null&&x.push(sl(E,O,k)))),N)break;E=E.return}0<x.length&&(g=new R(g,P,null,n,d),f.push({event:g,listeners:x}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",R=t==="mouseout"||t==="pointerout",g&&n!==op&&(P=n.relatedTarget||n.fromElement)&&(Mi(P)||P[dr]))break e;if((R||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,R?(P=n.relatedTarget||n.toElement,R=u,P=P?Mi(P):null,P!==null&&(N=ms(P),P!==N||P.tag!==5&&P.tag!==6)&&(P=null)):(R=null,P=u),R!==P)){if(x=s_,O="onMouseLeave",I="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(x=a_,O="onPointerLeave",I="onPointerEnter",E="pointer"),N=R==null?g:js(R),k=P==null?g:js(P),g=new x(O,E+"leave",R,n,d),g.target=N,g.relatedTarget=k,O=null,Mi(d)===u&&(x=new x(I,E+"enter",P,n,d),x.target=k,x.relatedTarget=N,O=x),N=O,R&&P)t:{for(x=R,I=P,E=0,k=x;k;k=Ts(k))E++;for(k=0,O=I;O;O=Ts(O))k++;for(;0<E-k;)x=Ts(x),E--;for(;0<k-E;)I=Ts(I),k--;for(;E--;){if(x===I||I!==null&&x===I.alternate)break t;x=Ts(x),I=Ts(I)}x=null}else x=null;R!==null&&y_(f,g,R,x,!1),P!==null&&N!==null&&y_(f,N,P,x,!0)}}e:{if(g=u?js(u):window,R=g.nodeName&&g.nodeName.toLowerCase(),R==="select"||R==="input"&&g.type==="file")var L=T1;else if(u_(g))if(aI)L=C1;else{L=k1;var M=S1}else(R=g.nodeName)&&R.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(L=R1);if(L&&(L=L(t,u))){oI(f,L,n,d);break e}M&&M(t,g,u),t==="focusout"&&(M=g._wrapperState)&&M.controlled&&g.type==="number"&&tp(g,"number",g.value)}switch(M=u?js(u):window,t){case"focusin":(u_(M)||M.contentEditable==="true")&&(Ls=M,fp=u,Oa=null);break;case"focusout":Oa=fp=Ls=null;break;case"mousedown":pp=!0;break;case"contextmenu":case"mouseup":case"dragend":pp=!1,m_(f,n,d);break;case"selectionchange":if(b1)break;case"keydown":case"keyup":m_(f,n,d)}var T;if(Hm)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Ds?iI(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(rI&&n.locale!=="ko"&&(Ds||v!=="onCompositionStart"?v==="onCompositionEnd"&&Ds&&(T=nI()):(Hr=d,Bm="value"in Hr?Hr.value:Hr.textContent,Ds=!0)),M=Ru(u,v),0<M.length&&(v=new o_(v,t,null,n,d),f.push({event:v,listeners:M}),T?v.data=T:(T=sI(n),T!==null&&(v.data=T)))),(T=y1?_1(t,n):w1(t,n))&&(u=Ru(u,"onBeforeInput"),0<u.length&&(d=new o_("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=T))}vI(f,e)})}function sl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ru(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Xa(t,n),s!=null&&r.unshift(sl(t,s,i)),s=Xa(t,e),s!=null&&r.push(sl(t,s,i))),t=t.return}return r}function Ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function y_(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,c=a.alternate,u=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&u!==null&&(a=u,i?(c=Xa(n,s),c!=null&&o.unshift(sl(n,c,a))):i||(c=Xa(n,s),c!=null&&o.push(sl(n,c,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var D1=/\r\n?/g,L1=/\u0000|\uFFFD/g;function __(t){return(typeof t=="string"?t:""+t).replace(D1,`
`).replace(L1,"")}function Ac(t,e,n){if(e=__(e),__(t)!==e&&n)throw Error(U(425))}function Cu(){}var mp=null,gp=null;function vp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yp=typeof setTimeout=="function"?setTimeout:void 0,M1=typeof clearTimeout=="function"?clearTimeout:void 0,w_=typeof Promise=="function"?Promise:void 0,j1=typeof queueMicrotask=="function"?queueMicrotask:typeof w_<"u"?function(t){return w_.resolve(null).then(t).catch(F1)}:yp;function F1(t){setTimeout(function(){throw t})}function cf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),tl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);tl(e)}function ei(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function E_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Co=Math.random().toString(36).slice(2),Fn="__reactFiber$"+Co,ol="__reactProps$"+Co,dr="__reactContainer$"+Co,_p="__reactEvents$"+Co,V1="__reactListeners$"+Co,U1="__reactHandles$"+Co;function Mi(t){var e=t[Fn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[dr]||n[Fn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=E_(t);t!==null;){if(n=t[Fn])return n;t=E_(t)}return e}t=n,n=t.parentNode}return null}function jl(t){return t=t[Fn]||t[dr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function js(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Ad(t){return t[ol]||null}var wp=[],Fs=-1;function vi(t){return{current:t}}function Te(t){0>Fs||(t.current=wp[Fs],wp[Fs]=null,Fs--)}function we(t,e){Fs++,wp[Fs]=t.current,t.current=e}var ci={},kt=vi(ci),Mt=vi(!1),Yi=ci;function so(t,e){var n=t.type.contextTypes;if(!n)return ci;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function jt(t){return t=t.childContextTypes,t!=null}function Au(){Te(Mt),Te(kt)}function I_(t,e,n){if(kt.current!==ci)throw Error(U(168));we(kt,e),we(Mt,n)}function _I(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,SP(t)||"Unknown",i));return be({},n,r)}function Pu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ci,Yi=kt.current,we(kt,t),we(Mt,Mt.current),!0}function T_(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=_I(t,e,Yi),r.__reactInternalMemoizedMergedChildContext=t,Te(Mt),Te(kt),we(kt,t)):Te(Mt),we(Mt,n)}var Zn=null,Pd=!1,uf=!1;function wI(t){Zn===null?Zn=[t]:Zn.push(t)}function $1(t){Pd=!0,wI(t)}function yi(){if(!uf&&Zn!==null){uf=!0;var t=0,e=ge;try{var n=Zn;for(ge=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Zn=null,Pd=!1}catch(i){throw Zn!==null&&(Zn=Zn.slice(t+1)),H0(Fm,yi),i}finally{ge=e,uf=!1}}return null}var Vs=[],Us=0,bu=null,Nu=0,tn=[],nn=0,Ji=null,er=1,tr="";function xi(t,e){Vs[Us++]=Nu,Vs[Us++]=bu,bu=t,Nu=e}function EI(t,e,n){tn[nn++]=er,tn[nn++]=tr,tn[nn++]=Ji,Ji=t;var r=er;t=tr;var i=32-Sn(r)-1;r&=~(1<<i),n+=1;var s=32-Sn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,er=1<<32-Sn(e)+i|n<<i|r,tr=s+t}else er=1<<s|n<<i|r,tr=t}function Gm(t){t.return!==null&&(xi(t,1),EI(t,1,0))}function Km(t){for(;t===bu;)bu=Vs[--Us],Vs[Us]=null,Nu=Vs[--Us],Vs[Us]=null;for(;t===Ji;)Ji=tn[--nn],tn[nn]=null,tr=tn[--nn],tn[nn]=null,er=tn[--nn],tn[nn]=null}var Kt=null,qt=null,Re=!1,_n=null;function II(t,e){var n=rn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function S_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Kt=t,qt=ei(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Kt=t,qt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ji!==null?{id:er,overflow:tr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=rn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Kt=t,qt=null,!0):!1;default:return!1}}function Ep(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ip(t){if(Re){var e=qt;if(e){var n=e;if(!S_(t,e)){if(Ep(t))throw Error(U(418));e=ei(n.nextSibling);var r=Kt;e&&S_(t,e)?II(r,n):(t.flags=t.flags&-4097|2,Re=!1,Kt=t)}}else{if(Ep(t))throw Error(U(418));t.flags=t.flags&-4097|2,Re=!1,Kt=t}}}function k_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Kt=t}function Pc(t){if(t!==Kt)return!1;if(!Re)return k_(t),Re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!vp(t.type,t.memoizedProps)),e&&(e=qt)){if(Ep(t))throw TI(),Error(U(418));for(;e;)II(t,e),e=ei(e.nextSibling)}if(k_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){qt=ei(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}qt=null}}else qt=Kt?ei(t.stateNode.nextSibling):null;return!0}function TI(){for(var t=qt;t;)t=ei(t.nextSibling)}function oo(){qt=Kt=null,Re=!1}function Qm(t){_n===null?_n=[t]:_n.push(t)}var B1=wr.ReactCurrentBatchConfig;function ca(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function bc(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function R_(t){var e=t._init;return e(t._payload)}function SI(t){function e(I,E){if(t){var k=I.deletions;k===null?(I.deletions=[E],I.flags|=16):k.push(E)}}function n(I,E){if(!t)return null;for(;E!==null;)e(I,E),E=E.sibling;return null}function r(I,E){for(I=new Map;E!==null;)E.key!==null?I.set(E.key,E):I.set(E.index,E),E=E.sibling;return I}function i(I,E){return I=ii(I,E),I.index=0,I.sibling=null,I}function s(I,E,k){return I.index=k,t?(k=I.alternate,k!==null?(k=k.index,k<E?(I.flags|=2,E):k):(I.flags|=2,E)):(I.flags|=1048576,E)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function a(I,E,k,O){return E===null||E.tag!==6?(E=vf(k,I.mode,O),E.return=I,E):(E=i(E,k),E.return=I,E)}function c(I,E,k,O){var L=k.type;return L===Os?d(I,E,k.props.children,O,k.key):E!==null&&(E.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Lr&&R_(L)===E.type)?(O=i(E,k.props),O.ref=ca(I,E,k),O.return=I,O):(O=su(k.type,k.key,k.props,null,I.mode,O),O.ref=ca(I,E,k),O.return=I,O)}function u(I,E,k,O){return E===null||E.tag!==4||E.stateNode.containerInfo!==k.containerInfo||E.stateNode.implementation!==k.implementation?(E=yf(k,I.mode,O),E.return=I,E):(E=i(E,k.children||[]),E.return=I,E)}function d(I,E,k,O,L){return E===null||E.tag!==7?(E=zi(k,I.mode,O,L),E.return=I,E):(E=i(E,k),E.return=I,E)}function f(I,E,k){if(typeof E=="string"&&E!==""||typeof E=="number")return E=vf(""+E,I.mode,k),E.return=I,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case _c:return k=su(E.type,E.key,E.props,null,I.mode,k),k.ref=ca(I,null,E),k.return=I,k;case xs:return E=yf(E,I.mode,k),E.return=I,E;case Lr:var O=E._init;return f(I,O(E._payload),k)}if(wa(E)||ia(E))return E=zi(E,I.mode,k,null),E.return=I,E;bc(I,E)}return null}function g(I,E,k,O){var L=E!==null?E.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return L!==null?null:a(I,E,""+k,O);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case _c:return k.key===L?c(I,E,k,O):null;case xs:return k.key===L?u(I,E,k,O):null;case Lr:return L=k._init,g(I,E,L(k._payload),O)}if(wa(k)||ia(k))return L!==null?null:d(I,E,k,O,null);bc(I,k)}return null}function R(I,E,k,O,L){if(typeof O=="string"&&O!==""||typeof O=="number")return I=I.get(k)||null,a(E,I,""+O,L);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case _c:return I=I.get(O.key===null?k:O.key)||null,c(E,I,O,L);case xs:return I=I.get(O.key===null?k:O.key)||null,u(E,I,O,L);case Lr:var M=O._init;return R(I,E,k,M(O._payload),L)}if(wa(O)||ia(O))return I=I.get(k)||null,d(E,I,O,L,null);bc(E,O)}return null}function P(I,E,k,O){for(var L=null,M=null,T=E,v=E=0,S=null;T!==null&&v<k.length;v++){T.index>v?(S=T,T=null):S=T.sibling;var A=g(I,T,k[v],O);if(A===null){T===null&&(T=S);break}t&&T&&A.alternate===null&&e(I,T),E=s(A,E,v),M===null?L=A:M.sibling=A,M=A,T=S}if(v===k.length)return n(I,T),Re&&xi(I,v),L;if(T===null){for(;v<k.length;v++)T=f(I,k[v],O),T!==null&&(E=s(T,E,v),M===null?L=T:M.sibling=T,M=T);return Re&&xi(I,v),L}for(T=r(I,T);v<k.length;v++)S=R(T,I,v,k[v],O),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?v:S.key),E=s(S,E,v),M===null?L=S:M.sibling=S,M=S);return t&&T.forEach(function(b){return e(I,b)}),Re&&xi(I,v),L}function x(I,E,k,O){var L=ia(k);if(typeof L!="function")throw Error(U(150));if(k=L.call(k),k==null)throw Error(U(151));for(var M=L=null,T=E,v=E=0,S=null,A=k.next();T!==null&&!A.done;v++,A=k.next()){T.index>v?(S=T,T=null):S=T.sibling;var b=g(I,T,A.value,O);if(b===null){T===null&&(T=S);break}t&&T&&b.alternate===null&&e(I,T),E=s(b,E,v),M===null?L=b:M.sibling=b,M=b,T=S}if(A.done)return n(I,T),Re&&xi(I,v),L;if(T===null){for(;!A.done;v++,A=k.next())A=f(I,A.value,O),A!==null&&(E=s(A,E,v),M===null?L=A:M.sibling=A,M=A);return Re&&xi(I,v),L}for(T=r(I,T);!A.done;v++,A=k.next())A=R(T,I,v,A.value,O),A!==null&&(t&&A.alternate!==null&&T.delete(A.key===null?v:A.key),E=s(A,E,v),M===null?L=A:M.sibling=A,M=A);return t&&T.forEach(function(C){return e(I,C)}),Re&&xi(I,v),L}function N(I,E,k,O){if(typeof k=="object"&&k!==null&&k.type===Os&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case _c:e:{for(var L=k.key,M=E;M!==null;){if(M.key===L){if(L=k.type,L===Os){if(M.tag===7){n(I,M.sibling),E=i(M,k.props.children),E.return=I,I=E;break e}}else if(M.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Lr&&R_(L)===M.type){n(I,M.sibling),E=i(M,k.props),E.ref=ca(I,M,k),E.return=I,I=E;break e}n(I,M);break}else e(I,M);M=M.sibling}k.type===Os?(E=zi(k.props.children,I.mode,O,k.key),E.return=I,I=E):(O=su(k.type,k.key,k.props,null,I.mode,O),O.ref=ca(I,E,k),O.return=I,I=O)}return o(I);case xs:e:{for(M=k.key;E!==null;){if(E.key===M)if(E.tag===4&&E.stateNode.containerInfo===k.containerInfo&&E.stateNode.implementation===k.implementation){n(I,E.sibling),E=i(E,k.children||[]),E.return=I,I=E;break e}else{n(I,E);break}else e(I,E);E=E.sibling}E=yf(k,I.mode,O),E.return=I,I=E}return o(I);case Lr:return M=k._init,N(I,E,M(k._payload),O)}if(wa(k))return P(I,E,k,O);if(ia(k))return x(I,E,k,O);bc(I,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,E!==null&&E.tag===6?(n(I,E.sibling),E=i(E,k),E.return=I,I=E):(n(I,E),E=vf(k,I.mode,O),E.return=I,I=E),o(I)):n(I,E)}return N}var ao=SI(!0),kI=SI(!1),xu=vi(null),Ou=null,$s=null,Ym=null;function Jm(){Ym=$s=Ou=null}function Xm(t){var e=xu.current;Te(xu),t._currentValue=e}function Tp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ys(t,e){Ou=t,Ym=$s=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Lt=!0),t.firstContext=null)}function ln(t){var e=t._currentValue;if(Ym!==t)if(t={context:t,memoizedValue:e,next:null},$s===null){if(Ou===null)throw Error(U(308));$s=t,Ou.dependencies={lanes:0,firstContext:t}}else $s=$s.next=t;return e}var ji=null;function Zm(t){ji===null?ji=[t]:ji.push(t)}function RI(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Zm(e)):(n.next=i.next,i.next=n),e.interleaved=n,hr(t,r)}function hr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Mr=!1;function eg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function CI(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function sr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ti(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,de&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,hr(t,n)}return i=r.interleaved,i===null?(e.next=e,Zm(r)):(e.next=i.next,i.next=e),r.interleaved=e,hr(t,n)}function Zc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Vm(t,n)}}function C_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Du(t,e,n,r){var i=t.updateQueue;Mr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var c=a,u=c.next;c.next=null,o===null?s=u:o.next=u,o=c;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=c))}if(s!==null){var f=i.baseState;o=0,d=u=c=null,a=s;do{var g=a.lane,R=a.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:R,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var P=t,x=a;switch(g=e,R=n,x.tag){case 1:if(P=x.payload,typeof P=="function"){f=P.call(R,f,g);break e}f=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=x.payload,g=typeof P=="function"?P.call(R,f,g):P,g==null)break e;f=be({},f,g);break e;case 2:Mr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else R={eventTime:R,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=R,c=f):d=d.next=R,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(d===null&&(c=f),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Zi|=o,t.lanes=o,t.memoizedState=f}}function A_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var Fl={},Bn=vi(Fl),al=vi(Fl),ll=vi(Fl);function Fi(t){if(t===Fl)throw Error(U(174));return t}function tg(t,e){switch(we(ll,e),we(al,t),we(Bn,Fl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:rp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=rp(e,t)}Te(Bn),we(Bn,e)}function lo(){Te(Bn),Te(al),Te(ll)}function AI(t){Fi(ll.current);var e=Fi(Bn.current),n=rp(e,t.type);e!==n&&(we(al,t),we(Bn,n))}function ng(t){al.current===t&&(Te(Bn),Te(al))}var Ae=vi(0);function Lu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var df=[];function rg(){for(var t=0;t<df.length;t++)df[t]._workInProgressVersionPrimary=null;df.length=0}var eu=wr.ReactCurrentDispatcher,hf=wr.ReactCurrentBatchConfig,Xi=0,Pe=null,Ge=null,Xe=null,Mu=!1,Da=!1,cl=0,z1=0;function vt(){throw Error(U(321))}function ig(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Rn(t[n],e[n]))return!1;return!0}function sg(t,e,n,r,i,s){if(Xi=s,Pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,eu.current=t===null||t.memoizedState===null?G1:K1,t=n(r,i),Da){s=0;do{if(Da=!1,cl=0,25<=s)throw Error(U(301));s+=1,Xe=Ge=null,e.updateQueue=null,eu.current=Q1,t=n(r,i)}while(Da)}if(eu.current=ju,e=Ge!==null&&Ge.next!==null,Xi=0,Xe=Ge=Pe=null,Mu=!1,e)throw Error(U(300));return t}function og(){var t=cl!==0;return cl=0,t}function Mn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?Pe.memoizedState=Xe=t:Xe=Xe.next=t,Xe}function cn(){if(Ge===null){var t=Pe.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var e=Xe===null?Pe.memoizedState:Xe.next;if(e!==null)Xe=e,Ge=t;else{if(t===null)throw Error(U(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},Xe===null?Pe.memoizedState=Xe=t:Xe=Xe.next=t}return Xe}function ul(t,e){return typeof e=="function"?e(t):e}function ff(t){var e=cn(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Ge,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,c=null,u=s;do{var d=u.lane;if((Xi&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(a=c=f,o=r):c=c.next=f,Pe.lanes|=d,Zi|=d}u=u.next}while(u!==null&&u!==s);c===null?o=r:c.next=a,Rn(r,e.memoizedState)||(Lt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Pe.lanes|=s,Zi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function pf(t){var e=cn(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Rn(s,e.memoizedState)||(Lt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function PI(){}function bI(t,e){var n=Pe,r=cn(),i=e(),s=!Rn(r.memoizedState,i);if(s&&(r.memoizedState=i,Lt=!0),r=r.queue,ag(OI.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Xe!==null&&Xe.memoizedState.tag&1){if(n.flags|=2048,dl(9,xI.bind(null,n,r,i,e),void 0,null),tt===null)throw Error(U(349));Xi&30||NI(n,e,i)}return i}function NI(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function xI(t,e,n,r){e.value=n,e.getSnapshot=r,DI(e)&&LI(t)}function OI(t,e,n){return n(function(){DI(e)&&LI(t)})}function DI(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Rn(t,n)}catch{return!0}}function LI(t){var e=hr(t,1);e!==null&&kn(e,t,1,-1)}function P_(t){var e=Mn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ul,lastRenderedState:t},e.queue=t,t=t.dispatch=q1.bind(null,Pe,t),[e.memoizedState,t]}function dl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function MI(){return cn().memoizedState}function tu(t,e,n,r){var i=Mn();Pe.flags|=t,i.memoizedState=dl(1|e,n,void 0,r===void 0?null:r)}function bd(t,e,n,r){var i=cn();r=r===void 0?null:r;var s=void 0;if(Ge!==null){var o=Ge.memoizedState;if(s=o.destroy,r!==null&&ig(r,o.deps)){i.memoizedState=dl(e,n,s,r);return}}Pe.flags|=t,i.memoizedState=dl(1|e,n,s,r)}function b_(t,e){return tu(8390656,8,t,e)}function ag(t,e){return bd(2048,8,t,e)}function jI(t,e){return bd(4,2,t,e)}function FI(t,e){return bd(4,4,t,e)}function VI(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function UI(t,e,n){return n=n!=null?n.concat([t]):null,bd(4,4,VI.bind(null,e,t),n)}function lg(){}function $I(t,e){var n=cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ig(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function BI(t,e){var n=cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ig(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function zI(t,e,n){return Xi&21?(Rn(n,e)||(n=K0(),Pe.lanes|=n,Zi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Lt=!0),t.memoizedState=n)}function W1(t,e){var n=ge;ge=n!==0&&4>n?n:4,t(!0);var r=hf.transition;hf.transition={};try{t(!1),e()}finally{ge=n,hf.transition=r}}function WI(){return cn().memoizedState}function H1(t,e,n){var r=ri(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},HI(t))qI(e,n);else if(n=RI(t,e,n,r),n!==null){var i=Pt();kn(n,t,r,i),GI(n,e,r)}}function q1(t,e,n){var r=ri(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(HI(t))qI(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Rn(a,o)){var c=e.interleaved;c===null?(i.next=i,Zm(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}n=RI(t,e,i,r),n!==null&&(i=Pt(),kn(n,t,r,i),GI(n,e,r))}}function HI(t){var e=t.alternate;return t===Pe||e!==null&&e===Pe}function qI(t,e){Da=Mu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function GI(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Vm(t,n)}}var ju={readContext:ln,useCallback:vt,useContext:vt,useEffect:vt,useImperativeHandle:vt,useInsertionEffect:vt,useLayoutEffect:vt,useMemo:vt,useReducer:vt,useRef:vt,useState:vt,useDebugValue:vt,useDeferredValue:vt,useTransition:vt,useMutableSource:vt,useSyncExternalStore:vt,useId:vt,unstable_isNewReconciler:!1},G1={readContext:ln,useCallback:function(t,e){return Mn().memoizedState=[t,e===void 0?null:e],t},useContext:ln,useEffect:b_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,tu(4194308,4,VI.bind(null,e,t),n)},useLayoutEffect:function(t,e){return tu(4194308,4,t,e)},useInsertionEffect:function(t,e){return tu(4,2,t,e)},useMemo:function(t,e){var n=Mn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Mn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=H1.bind(null,Pe,t),[r.memoizedState,t]},useRef:function(t){var e=Mn();return t={current:t},e.memoizedState=t},useState:P_,useDebugValue:lg,useDeferredValue:function(t){return Mn().memoizedState=t},useTransition:function(){var t=P_(!1),e=t[0];return t=W1.bind(null,t[1]),Mn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Pe,i=Mn();if(Re){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),tt===null)throw Error(U(349));Xi&30||NI(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,b_(OI.bind(null,r,s,t),[t]),r.flags|=2048,dl(9,xI.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Mn(),e=tt.identifierPrefix;if(Re){var n=tr,r=er;n=(r&~(1<<32-Sn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=cl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=z1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},K1={readContext:ln,useCallback:$I,useContext:ln,useEffect:ag,useImperativeHandle:UI,useInsertionEffect:jI,useLayoutEffect:FI,useMemo:BI,useReducer:ff,useRef:MI,useState:function(){return ff(ul)},useDebugValue:lg,useDeferredValue:function(t){var e=cn();return zI(e,Ge.memoizedState,t)},useTransition:function(){var t=ff(ul)[0],e=cn().memoizedState;return[t,e]},useMutableSource:PI,useSyncExternalStore:bI,useId:WI,unstable_isNewReconciler:!1},Q1={readContext:ln,useCallback:$I,useContext:ln,useEffect:ag,useImperativeHandle:UI,useInsertionEffect:jI,useLayoutEffect:FI,useMemo:BI,useReducer:pf,useRef:MI,useState:function(){return pf(ul)},useDebugValue:lg,useDeferredValue:function(t){var e=cn();return Ge===null?e.memoizedState=t:zI(e,Ge.memoizedState,t)},useTransition:function(){var t=pf(ul)[0],e=cn().memoizedState;return[t,e]},useMutableSource:PI,useSyncExternalStore:bI,useId:WI,unstable_isNewReconciler:!1};function vn(t,e){if(t&&t.defaultProps){e=be({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Sp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:be({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Nd={isMounted:function(t){return(t=t._reactInternals)?ms(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Pt(),i=ri(t),s=sr(r,i);s.payload=e,n!=null&&(s.callback=n),e=ti(t,s,i),e!==null&&(kn(e,t,i,r),Zc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Pt(),i=ri(t),s=sr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ti(t,s,i),e!==null&&(kn(e,t,i,r),Zc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Pt(),r=ri(t),i=sr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ti(t,i,r),e!==null&&(kn(e,t,r,n),Zc(e,t,r))}};function N_(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!rl(n,r)||!rl(i,s):!0}function KI(t,e,n){var r=!1,i=ci,s=e.contextType;return typeof s=="object"&&s!==null?s=ln(s):(i=jt(e)?Yi:kt.current,r=e.contextTypes,s=(r=r!=null)?so(t,i):ci),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Nd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function x_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Nd.enqueueReplaceState(e,e.state,null)}function kp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},eg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ln(s):(s=jt(e)?Yi:kt.current,i.context=so(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Sp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Nd.enqueueReplaceState(i,i.state,null),Du(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function co(t,e){try{var n="",r=e;do n+=TP(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function mf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Rp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Y1=typeof WeakMap=="function"?WeakMap:Map;function QI(t,e,n){n=sr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Vu||(Vu=!0,Mp=r),Rp(t,e)},n}function YI(t,e,n){n=sr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Rp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Rp(t,e),typeof r!="function"&&(ni===null?ni=new Set([this]):ni.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function O_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Y1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=ub.bind(null,t,e,n),e.then(t,t))}function D_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function L_(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=sr(-1,1),e.tag=2,ti(n,e,1))),n.lanes|=1),t)}var J1=wr.ReactCurrentOwner,Lt=!1;function At(t,e,n,r){e.child=t===null?kI(e,null,n,r):ao(e,t.child,n,r)}function M_(t,e,n,r,i){n=n.render;var s=e.ref;return Ys(e,i),r=sg(t,e,n,r,s,i),n=og(),t!==null&&!Lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,fr(t,e,i)):(Re&&n&&Gm(e),e.flags|=1,At(t,e,r,i),e.child)}function j_(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!gg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,JI(t,e,s,r,i)):(t=su(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:rl,n(o,r)&&t.ref===e.ref)return fr(t,e,i)}return e.flags|=1,t=ii(s,r),t.ref=e.ref,t.return=e,e.child=t}function JI(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(rl(s,r)&&t.ref===e.ref)if(Lt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Lt=!0);else return e.lanes=t.lanes,fr(t,e,i)}return Cp(t,e,n,r,i)}function XI(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(zs,Wt),Wt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,we(zs,Wt),Wt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,we(zs,Wt),Wt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,we(zs,Wt),Wt|=r;return At(t,e,i,n),e.child}function ZI(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Cp(t,e,n,r,i){var s=jt(n)?Yi:kt.current;return s=so(e,s),Ys(e,i),n=sg(t,e,n,r,s,i),r=og(),t!==null&&!Lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,fr(t,e,i)):(Re&&r&&Gm(e),e.flags|=1,At(t,e,n,i),e.child)}function F_(t,e,n,r,i){if(jt(n)){var s=!0;Pu(e)}else s=!1;if(Ys(e,i),e.stateNode===null)nu(t,e),KI(e,n,r),kp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ln(u):(u=jt(n)?Yi:kt.current,u=so(e,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||c!==u)&&x_(e,o,r,u),Mr=!1;var g=e.memoizedState;o.state=g,Du(e,r,o,i),c=e.memoizedState,a!==r||g!==c||Mt.current||Mr?(typeof d=="function"&&(Sp(e,n,d,r),c=e.memoizedState),(a=Mr||N_(e,n,a,r,g,c,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),o.props=r,o.state=c,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,CI(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:vn(e.type,a),o.props=u,f=e.pendingProps,g=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=ln(c):(c=jt(n)?Yi:kt.current,c=so(e,c));var R=n.getDerivedStateFromProps;(d=typeof R=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||g!==c)&&x_(e,o,r,c),Mr=!1,g=e.memoizedState,o.state=g,Du(e,r,o,i);var P=e.memoizedState;a!==f||g!==P||Mt.current||Mr?(typeof R=="function"&&(Sp(e,n,R,r),P=e.memoizedState),(u=Mr||N_(e,n,u,r,g,P,c)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Ap(t,e,n,r,s,i)}function Ap(t,e,n,r,i,s){ZI(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&T_(e,n,!1),fr(t,e,s);r=e.stateNode,J1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ao(e,t.child,null,s),e.child=ao(e,null,a,s)):At(t,e,a,s),e.memoizedState=r.state,i&&T_(e,n,!0),e.child}function eT(t){var e=t.stateNode;e.pendingContext?I_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&I_(t,e.context,!1),tg(t,e.containerInfo)}function V_(t,e,n,r,i){return oo(),Qm(i),e.flags|=256,At(t,e,n,r),e.child}var Pp={dehydrated:null,treeContext:null,retryLane:0};function bp(t){return{baseLanes:t,cachePool:null,transitions:null}}function tT(t,e,n){var r=e.pendingProps,i=Ae.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),we(Ae,i&1),t===null)return Ip(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Dd(o,r,0,null),t=zi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=bp(n),e.memoizedState=Pp,t):cg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return X1(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=ii(i,c),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ii(a,s):(s=zi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?bp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Pp,r}return s=t.child,t=s.sibling,r=ii(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function cg(t,e){return e=Dd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Nc(t,e,n,r){return r!==null&&Qm(r),ao(e,t.child,null,n),t=cg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function X1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=mf(Error(U(422))),Nc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Dd({mode:"visible",children:r.children},i,0,null),s=zi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ao(e,t.child,null,o),e.child.memoizedState=bp(o),e.memoizedState=Pp,s);if(!(e.mode&1))return Nc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(U(419)),r=mf(s,r,void 0),Nc(t,e,o,r)}if(a=(o&t.childLanes)!==0,Lt||a){if(r=tt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,hr(t,i),kn(r,t,i,-1))}return mg(),r=mf(Error(U(421))),Nc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=db.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,qt=ei(i.nextSibling),Kt=e,Re=!0,_n=null,t!==null&&(tn[nn++]=er,tn[nn++]=tr,tn[nn++]=Ji,er=t.id,tr=t.overflow,Ji=e),e=cg(e,r.children),e.flags|=4096,e)}function U_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Tp(t.return,e,n)}function gf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function nT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(At(t,e,r.children,n),r=Ae.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&U_(t,n,e);else if(t.tag===19)U_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(we(Ae,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Lu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),gf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Lu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}gf(e,!0,n,null,s);break;case"together":gf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function nu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function fr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Zi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=ii(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ii(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Z1(t,e,n){switch(e.tag){case 3:eT(e),oo();break;case 5:AI(e);break;case 1:jt(e.type)&&Pu(e);break;case 4:tg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;we(xu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(we(Ae,Ae.current&1),e.flags|=128,null):n&e.child.childLanes?tT(t,e,n):(we(Ae,Ae.current&1),t=fr(t,e,n),t!==null?t.sibling:null);we(Ae,Ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return nT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(Ae,Ae.current),r)break;return null;case 22:case 23:return e.lanes=0,XI(t,e,n)}return fr(t,e,n)}var rT,Np,iT,sT;rT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Np=function(){};iT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Fi(Bn.current);var s=null;switch(n){case"input":i=Zf(t,i),r=Zf(t,r),s=[];break;case"select":i=be({},i,{value:void 0}),r=be({},r,{value:void 0}),s=[];break;case"textarea":i=np(t,i),r=np(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Cu)}ip(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ya.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==a&&(c!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&a[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ya.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Ie("scroll",t),s||a===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};sT=function(t,e,n,r){n!==r&&(e.flags|=4)};function ua(t,e){if(!Re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function eb(t,e,n){var r=e.pendingProps;switch(Km(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(e),null;case 1:return jt(e.type)&&Au(),yt(e),null;case 3:return r=e.stateNode,lo(),Te(Mt),Te(kt),rg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Pc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,_n!==null&&(Vp(_n),_n=null))),Np(t,e),yt(e),null;case 5:ng(e);var i=Fi(ll.current);if(n=e.type,t!==null&&e.stateNode!=null)iT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return yt(e),null}if(t=Fi(Bn.current),Pc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Fn]=e,r[ol]=s,t=(e.mode&1)!==0,n){case"dialog":Ie("cancel",r),Ie("close",r);break;case"iframe":case"object":case"embed":Ie("load",r);break;case"video":case"audio":for(i=0;i<Ia.length;i++)Ie(Ia[i],r);break;case"source":Ie("error",r);break;case"img":case"image":case"link":Ie("error",r),Ie("load",r);break;case"details":Ie("toggle",r);break;case"input":Qy(r,s),Ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ie("invalid",r);break;case"textarea":Jy(r,s),Ie("invalid",r)}ip(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ac(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ac(r.textContent,a,t),i=["children",""+a]):Ya.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ie("scroll",r)}switch(n){case"input":wc(r),Yy(r,s,!0);break;case"textarea":wc(r),Xy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Cu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=O0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Fn]=e,t[ol]=r,rT(t,e,!1,!1),e.stateNode=t;e:{switch(o=sp(n,r),n){case"dialog":Ie("cancel",t),Ie("close",t),i=r;break;case"iframe":case"object":case"embed":Ie("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ia.length;i++)Ie(Ia[i],t);i=r;break;case"source":Ie("error",t),i=r;break;case"img":case"image":case"link":Ie("error",t),Ie("load",t),i=r;break;case"details":Ie("toggle",t),i=r;break;case"input":Qy(t,r),i=Zf(t,r),Ie("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=be({},r,{value:void 0}),Ie("invalid",t);break;case"textarea":Jy(t,r),i=np(t,r),Ie("invalid",t);break;default:i=r}ip(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var c=a[s];s==="style"?M0(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&D0(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ja(t,c):typeof c=="number"&&Ja(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ya.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Ie("scroll",t):c!=null&&Om(t,s,c,o))}switch(n){case"input":wc(t),Yy(t,r,!1);break;case"textarea":wc(t),Xy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+li(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?qs(t,!!r.multiple,s,!1):r.defaultValue!=null&&qs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Cu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return yt(e),null;case 6:if(t&&e.stateNode!=null)sT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Fi(ll.current),Fi(Bn.current),Pc(e)){if(r=e.stateNode,n=e.memoizedProps,r[Fn]=e,(s=r.nodeValue!==n)&&(t=Kt,t!==null))switch(t.tag){case 3:Ac(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ac(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Fn]=e,e.stateNode=r}return yt(e),null;case 13:if(Te(Ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Re&&qt!==null&&e.mode&1&&!(e.flags&128))TI(),oo(),e.flags|=98560,s=!1;else if(s=Pc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[Fn]=e}else oo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;yt(e),s=!1}else _n!==null&&(Vp(_n),_n=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ae.current&1?Ke===0&&(Ke=3):mg())),e.updateQueue!==null&&(e.flags|=4),yt(e),null);case 4:return lo(),Np(t,e),t===null&&il(e.stateNode.containerInfo),yt(e),null;case 10:return Xm(e.type._context),yt(e),null;case 17:return jt(e.type)&&Au(),yt(e),null;case 19:if(Te(Ae),s=e.memoizedState,s===null)return yt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ua(s,!1);else{if(Ke!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Lu(t),o!==null){for(e.flags|=128,ua(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return we(Ae,Ae.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ue()>uo&&(e.flags|=128,r=!0,ua(s,!1),e.lanes=4194304)}else{if(!r)if(t=Lu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ua(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Re)return yt(e),null}else 2*Ue()-s.renderingStartTime>uo&&n!==1073741824&&(e.flags|=128,r=!0,ua(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ue(),e.sibling=null,n=Ae.current,we(Ae,r?n&1|2:n&1),e):(yt(e),null);case 22:case 23:return pg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Wt&1073741824&&(yt(e),e.subtreeFlags&6&&(e.flags|=8192)):yt(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function tb(t,e){switch(Km(e),e.tag){case 1:return jt(e.type)&&Au(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return lo(),Te(Mt),Te(kt),rg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ng(e),null;case 13:if(Te(Ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));oo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Te(Ae),null;case 4:return lo(),null;case 10:return Xm(e.type._context),null;case 22:case 23:return pg(),null;case 24:return null;default:return null}}var xc=!1,Et=!1,nb=typeof WeakSet=="function"?WeakSet:Set,W=null;function Bs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(t,e,r)}else n.current=null}function xp(t,e,n){try{n()}catch(r){Oe(t,e,r)}}var $_=!1;function rb(t,e){if(mp=Su,t=uI(),qm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,c=-1,u=0,d=0,f=t,g=null;t:for(;;){for(var R;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(c=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(R=f.firstChild)!==null;)g=f,f=R;for(;;){if(f===t)break t;if(g===n&&++u===i&&(a=o),g===s&&++d===r&&(c=o),(R=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=R}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(gp={focusedElem:t,selectionRange:n},Su=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var x=P.memoizedProps,N=P.memoizedState,I=e.stateNode,E=I.getSnapshotBeforeUpdate(e.elementType===e.type?x:vn(e.type,x),N);I.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var k=e.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(O){Oe(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return P=$_,$_=!1,P}function La(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&xp(e,n,s)}i=i.next}while(i!==r)}}function xd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Op(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function oT(t){var e=t.alternate;e!==null&&(t.alternate=null,oT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Fn],delete e[ol],delete e[_p],delete e[V1],delete e[U1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function aT(t){return t.tag===5||t.tag===3||t.tag===4}function B_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||aT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Dp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Cu));else if(r!==4&&(t=t.child,t!==null))for(Dp(t,e,n),t=t.sibling;t!==null;)Dp(t,e,n),t=t.sibling}function Lp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Lp(t,e,n),t=t.sibling;t!==null;)Lp(t,e,n),t=t.sibling}var at=null,yn=!1;function xr(t,e,n){for(n=n.child;n!==null;)lT(t,e,n),n=n.sibling}function lT(t,e,n){if($n&&typeof $n.onCommitFiberUnmount=="function")try{$n.onCommitFiberUnmount(Sd,n)}catch{}switch(n.tag){case 5:Et||Bs(n,e);case 6:var r=at,i=yn;at=null,xr(t,e,n),at=r,yn=i,at!==null&&(yn?(t=at,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):at.removeChild(n.stateNode));break;case 18:at!==null&&(yn?(t=at,n=n.stateNode,t.nodeType===8?cf(t.parentNode,n):t.nodeType===1&&cf(t,n),tl(t)):cf(at,n.stateNode));break;case 4:r=at,i=yn,at=n.stateNode.containerInfo,yn=!0,xr(t,e,n),at=r,yn=i;break;case 0:case 11:case 14:case 15:if(!Et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&xp(n,e,o),i=i.next}while(i!==r)}xr(t,e,n);break;case 1:if(!Et&&(Bs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Oe(n,e,a)}xr(t,e,n);break;case 21:xr(t,e,n);break;case 22:n.mode&1?(Et=(r=Et)||n.memoizedState!==null,xr(t,e,n),Et=r):xr(t,e,n);break;default:xr(t,e,n)}}function z_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new nb),e.forEach(function(r){var i=hb.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function gn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:at=a.stateNode,yn=!1;break e;case 3:at=a.stateNode.containerInfo,yn=!0;break e;case 4:at=a.stateNode.containerInfo,yn=!0;break e}a=a.return}if(at===null)throw Error(U(160));lT(s,o,i),at=null,yn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Oe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)cT(e,t),e=e.sibling}function cT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(gn(e,t),Dn(t),r&4){try{La(3,t,t.return),xd(3,t)}catch(x){Oe(t,t.return,x)}try{La(5,t,t.return)}catch(x){Oe(t,t.return,x)}}break;case 1:gn(e,t),Dn(t),r&512&&n!==null&&Bs(n,n.return);break;case 5:if(gn(e,t),Dn(t),r&512&&n!==null&&Bs(n,n.return),t.flags&32){var i=t.stateNode;try{Ja(i,"")}catch(x){Oe(t,t.return,x)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&N0(i,s),sp(a,o);var u=sp(a,s);for(o=0;o<c.length;o+=2){var d=c[o],f=c[o+1];d==="style"?M0(i,f):d==="dangerouslySetInnerHTML"?D0(i,f):d==="children"?Ja(i,f):Om(i,d,f,u)}switch(a){case"input":ep(i,s);break;case"textarea":x0(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var R=s.value;R!=null?qs(i,!!s.multiple,R,!1):g!==!!s.multiple&&(s.defaultValue!=null?qs(i,!!s.multiple,s.defaultValue,!0):qs(i,!!s.multiple,s.multiple?[]:"",!1))}i[ol]=s}catch(x){Oe(t,t.return,x)}}break;case 6:if(gn(e,t),Dn(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(x){Oe(t,t.return,x)}}break;case 3:if(gn(e,t),Dn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{tl(e.containerInfo)}catch(x){Oe(t,t.return,x)}break;case 4:gn(e,t),Dn(t);break;case 13:gn(e,t),Dn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(hg=Ue())),r&4&&z_(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Et=(u=Et)||d,gn(e,t),Et=u):gn(e,t),Dn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(W=t,d=t.child;d!==null;){for(f=W=d;W!==null;){switch(g=W,R=g.child,g.tag){case 0:case 11:case 14:case 15:La(4,g,g.return);break;case 1:Bs(g,g.return);var P=g.stateNode;if(typeof P.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(x){Oe(r,n,x)}}break;case 5:Bs(g,g.return);break;case 22:if(g.memoizedState!==null){H_(f);continue}}R!==null?(R.return=g,W=R):H_(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,c=f.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=L0("display",o))}catch(x){Oe(t,t.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){Oe(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:gn(e,t),Dn(t),r&4&&z_(t);break;case 21:break;default:gn(e,t),Dn(t)}}function Dn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(aT(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ja(i,""),r.flags&=-33);var s=B_(t);Lp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=B_(t);Dp(t,a,o);break;default:throw Error(U(161))}}catch(c){Oe(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ib(t,e,n){W=t,uT(t)}function uT(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||xc;if(!o){var a=i.alternate,c=a!==null&&a.memoizedState!==null||Et;a=xc;var u=Et;if(xc=o,(Et=c)&&!u)for(W=i;W!==null;)o=W,c=o.child,o.tag===22&&o.memoizedState!==null?q_(i):c!==null?(c.return=o,W=c):q_(i);for(;s!==null;)W=s,uT(s),s=s.sibling;W=i,xc=a,Et=u}W_(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):W_(t)}}function W_(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Et||xd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Et)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:vn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&A_(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}A_(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&tl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}Et||e.flags&512&&Op(e)}catch(g){Oe(e,e.return,g)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function H_(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function q_(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xd(4,e)}catch(c){Oe(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(c){Oe(e,i,c)}}var s=e.return;try{Op(e)}catch(c){Oe(e,s,c)}break;case 5:var o=e.return;try{Op(e)}catch(c){Oe(e,o,c)}}}catch(c){Oe(e,e.return,c)}if(e===t){W=null;break}var a=e.sibling;if(a!==null){a.return=e.return,W=a;break}W=e.return}}var sb=Math.ceil,Fu=wr.ReactCurrentDispatcher,ug=wr.ReactCurrentOwner,sn=wr.ReactCurrentBatchConfig,de=0,tt=null,We=null,dt=0,Wt=0,zs=vi(0),Ke=0,hl=null,Zi=0,Od=0,dg=0,Ma=null,Dt=null,hg=0,uo=1/0,Xn=null,Vu=!1,Mp=null,ni=null,Oc=!1,qr=null,Uu=0,ja=0,jp=null,ru=-1,iu=0;function Pt(){return de&6?Ue():ru!==-1?ru:ru=Ue()}function ri(t){return t.mode&1?de&2&&dt!==0?dt&-dt:B1.transition!==null?(iu===0&&(iu=K0()),iu):(t=ge,t!==0||(t=window.event,t=t===void 0?16:tI(t.type)),t):1}function kn(t,e,n,r){if(50<ja)throw ja=0,jp=null,Error(U(185));Ll(t,n,r),(!(de&2)||t!==tt)&&(t===tt&&(!(de&2)&&(Od|=n),Ke===4&&Vr(t,dt)),Ft(t,r),n===1&&de===0&&!(e.mode&1)&&(uo=Ue()+500,Pd&&yi()))}function Ft(t,e){var n=t.callbackNode;BP(t,e);var r=Tu(t,t===tt?dt:0);if(r===0)n!==null&&t_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&t_(n),e===1)t.tag===0?$1(G_.bind(null,t)):wI(G_.bind(null,t)),j1(function(){!(de&6)&&yi()}),n=null;else{switch(Q0(r)){case 1:n=Fm;break;case 4:n=q0;break;case 16:n=Iu;break;case 536870912:n=G0;break;default:n=Iu}n=yT(n,dT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function dT(t,e){if(ru=-1,iu=0,de&6)throw Error(U(327));var n=t.callbackNode;if(Js()&&t.callbackNode!==n)return null;var r=Tu(t,t===tt?dt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=$u(t,r);else{e=r;var i=de;de|=2;var s=fT();(tt!==t||dt!==e)&&(Xn=null,uo=Ue()+500,Bi(t,e));do try{lb();break}catch(a){hT(t,a)}while(!0);Jm(),Fu.current=s,de=i,We!==null?e=0:(tt=null,dt=0,e=Ke)}if(e!==0){if(e===2&&(i=up(t),i!==0&&(r=i,e=Fp(t,i))),e===1)throw n=hl,Bi(t,0),Vr(t,r),Ft(t,Ue()),n;if(e===6)Vr(t,r);else{if(i=t.current.alternate,!(r&30)&&!ob(i)&&(e=$u(t,r),e===2&&(s=up(t),s!==0&&(r=s,e=Fp(t,s))),e===1))throw n=hl,Bi(t,0),Vr(t,r),Ft(t,Ue()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Oi(t,Dt,Xn);break;case 3:if(Vr(t,r),(r&130023424)===r&&(e=hg+500-Ue(),10<e)){if(Tu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Pt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=yp(Oi.bind(null,t,Dt,Xn),e);break}Oi(t,Dt,Xn);break;case 4:if(Vr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Sn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sb(r/1960))-r,10<r){t.timeoutHandle=yp(Oi.bind(null,t,Dt,Xn),r);break}Oi(t,Dt,Xn);break;case 5:Oi(t,Dt,Xn);break;default:throw Error(U(329))}}}return Ft(t,Ue()),t.callbackNode===n?dT.bind(null,t):null}function Fp(t,e){var n=Ma;return t.current.memoizedState.isDehydrated&&(Bi(t,e).flags|=256),t=$u(t,e),t!==2&&(e=Dt,Dt=n,e!==null&&Vp(e)),t}function Vp(t){Dt===null?Dt=t:Dt.push.apply(Dt,t)}function ob(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Rn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vr(t,e){for(e&=~dg,e&=~Od,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Sn(e),r=1<<n;t[n]=-1,e&=~r}}function G_(t){if(de&6)throw Error(U(327));Js();var e=Tu(t,0);if(!(e&1))return Ft(t,Ue()),null;var n=$u(t,e);if(t.tag!==0&&n===2){var r=up(t);r!==0&&(e=r,n=Fp(t,r))}if(n===1)throw n=hl,Bi(t,0),Vr(t,e),Ft(t,Ue()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Oi(t,Dt,Xn),Ft(t,Ue()),null}function fg(t,e){var n=de;de|=1;try{return t(e)}finally{de=n,de===0&&(uo=Ue()+500,Pd&&yi())}}function es(t){qr!==null&&qr.tag===0&&!(de&6)&&Js();var e=de;de|=1;var n=sn.transition,r=ge;try{if(sn.transition=null,ge=1,t)return t()}finally{ge=r,sn.transition=n,de=e,!(de&6)&&yi()}}function pg(){Wt=zs.current,Te(zs)}function Bi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,M1(n)),We!==null)for(n=We.return;n!==null;){var r=n;switch(Km(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Au();break;case 3:lo(),Te(Mt),Te(kt),rg();break;case 5:ng(r);break;case 4:lo();break;case 13:Te(Ae);break;case 19:Te(Ae);break;case 10:Xm(r.type._context);break;case 22:case 23:pg()}n=n.return}if(tt=t,We=t=ii(t.current,null),dt=Wt=e,Ke=0,hl=null,dg=Od=Zi=0,Dt=Ma=null,ji!==null){for(e=0;e<ji.length;e++)if(n=ji[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ji=null}return t}function hT(t,e){do{var n=We;try{if(Jm(),eu.current=ju,Mu){for(var r=Pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Mu=!1}if(Xi=0,Xe=Ge=Pe=null,Da=!1,cl=0,ug.current=null,n===null||n.return===null){Ke=1,hl=e,We=null;break}e:{var s=t,o=n.return,a=n,c=e;if(e=dt,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var R=D_(o);if(R!==null){R.flags&=-257,L_(R,o,a,s,e),R.mode&1&&O_(s,u,e),e=R,c=u;var P=e.updateQueue;if(P===null){var x=new Set;x.add(c),e.updateQueue=x}else P.add(c);break e}else{if(!(e&1)){O_(s,u,e),mg();break e}c=Error(U(426))}}else if(Re&&a.mode&1){var N=D_(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),L_(N,o,a,s,e),Qm(co(c,a));break e}}s=c=co(c,a),Ke!==4&&(Ke=2),Ma===null?Ma=[s]:Ma.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=QI(s,c,e);C_(s,I);break e;case 1:a=c;var E=s.type,k=s.stateNode;if(!(s.flags&128)&&(typeof E.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(ni===null||!ni.has(k)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=YI(s,a,e);C_(s,O);break e}}s=s.return}while(s!==null)}mT(n)}catch(L){e=L,We===n&&n!==null&&(We=n=n.return);continue}break}while(!0)}function fT(){var t=Fu.current;return Fu.current=ju,t===null?ju:t}function mg(){(Ke===0||Ke===3||Ke===2)&&(Ke=4),tt===null||!(Zi&268435455)&&!(Od&268435455)||Vr(tt,dt)}function $u(t,e){var n=de;de|=2;var r=fT();(tt!==t||dt!==e)&&(Xn=null,Bi(t,e));do try{ab();break}catch(i){hT(t,i)}while(!0);if(Jm(),de=n,Fu.current=r,We!==null)throw Error(U(261));return tt=null,dt=0,Ke}function ab(){for(;We!==null;)pT(We)}function lb(){for(;We!==null&&!OP();)pT(We)}function pT(t){var e=vT(t.alternate,t,Wt);t.memoizedProps=t.pendingProps,e===null?mT(t):We=e,ug.current=null}function mT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=tb(n,e),n!==null){n.flags&=32767,We=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ke=6,We=null;return}}else if(n=eb(n,e,Wt),n!==null){We=n;return}if(e=e.sibling,e!==null){We=e;return}We=e=t}while(e!==null);Ke===0&&(Ke=5)}function Oi(t,e,n){var r=ge,i=sn.transition;try{sn.transition=null,ge=1,cb(t,e,n,r)}finally{sn.transition=i,ge=r}return null}function cb(t,e,n,r){do Js();while(qr!==null);if(de&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(zP(t,s),t===tt&&(We=tt=null,dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Oc||(Oc=!0,yT(Iu,function(){return Js(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=sn.transition,sn.transition=null;var o=ge;ge=1;var a=de;de|=4,ug.current=null,rb(t,n),cT(n,t),P1(gp),Su=!!mp,gp=mp=null,t.current=n,ib(n),DP(),de=a,ge=o,sn.transition=s}else t.current=n;if(Oc&&(Oc=!1,qr=t,Uu=i),s=t.pendingLanes,s===0&&(ni=null),jP(n.stateNode),Ft(t,Ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Vu)throw Vu=!1,t=Mp,Mp=null,t;return Uu&1&&t.tag!==0&&Js(),s=t.pendingLanes,s&1?t===jp?ja++:(ja=0,jp=t):ja=0,yi(),null}function Js(){if(qr!==null){var t=Q0(Uu),e=sn.transition,n=ge;try{if(sn.transition=null,ge=16>t?16:t,qr===null)var r=!1;else{if(t=qr,qr=null,Uu=0,de&6)throw Error(U(331));var i=de;for(de|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var a=s.deletions;if(a!==null){for(var c=0;c<a.length;c++){var u=a[c];for(W=u;W!==null;){var d=W;switch(d.tag){case 0:case 11:case 15:La(8,d,s)}var f=d.child;if(f!==null)f.return=d,W=f;else for(;W!==null;){d=W;var g=d.sibling,R=d.return;if(oT(d),d===u){W=null;break}if(g!==null){g.return=R,W=g;break}W=R}}}var P=s.alternate;if(P!==null){var x=P.child;if(x!==null){P.child=null;do{var N=x.sibling;x.sibling=null,x=N}while(x!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:La(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,W=I;break e}W=s.return}}var E=t.current;for(W=E;W!==null;){o=W;var k=o.child;if(o.subtreeFlags&2064&&k!==null)k.return=o,W=k;else e:for(o=E;W!==null;){if(a=W,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:xd(9,a)}}catch(L){Oe(a,a.return,L)}if(a===o){W=null;break e}var O=a.sibling;if(O!==null){O.return=a.return,W=O;break e}W=a.return}}if(de=i,yi(),$n&&typeof $n.onPostCommitFiberRoot=="function")try{$n.onPostCommitFiberRoot(Sd,t)}catch{}r=!0}return r}finally{ge=n,sn.transition=e}}return!1}function K_(t,e,n){e=co(n,e),e=QI(t,e,1),t=ti(t,e,1),e=Pt(),t!==null&&(Ll(t,1,e),Ft(t,e))}function Oe(t,e,n){if(t.tag===3)K_(t,t,n);else for(;e!==null;){if(e.tag===3){K_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ni===null||!ni.has(r))){t=co(n,t),t=YI(e,t,1),e=ti(e,t,1),t=Pt(),e!==null&&(Ll(e,1,t),Ft(e,t));break}}e=e.return}}function ub(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Pt(),t.pingedLanes|=t.suspendedLanes&n,tt===t&&(dt&n)===n&&(Ke===4||Ke===3&&(dt&130023424)===dt&&500>Ue()-hg?Bi(t,0):dg|=n),Ft(t,e)}function gT(t,e){e===0&&(t.mode&1?(e=Tc,Tc<<=1,!(Tc&130023424)&&(Tc=4194304)):e=1);var n=Pt();t=hr(t,e),t!==null&&(Ll(t,e,n),Ft(t,n))}function db(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),gT(t,n)}function hb(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),gT(t,n)}var vT;vT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Mt.current)Lt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Lt=!1,Z1(t,e,n);Lt=!!(t.flags&131072)}else Lt=!1,Re&&e.flags&1048576&&EI(e,Nu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;nu(t,e),t=e.pendingProps;var i=so(e,kt.current);Ys(e,n),i=sg(null,e,r,t,i,n);var s=og();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,jt(r)?(s=!0,Pu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,eg(e),i.updater=Nd,e.stateNode=i,i._reactInternals=e,kp(e,r,t,n),e=Ap(null,e,r,!0,s,n)):(e.tag=0,Re&&s&&Gm(e),At(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(nu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=pb(r),t=vn(r,t),i){case 0:e=Cp(null,e,r,t,n);break e;case 1:e=F_(null,e,r,t,n);break e;case 11:e=M_(null,e,r,t,n);break e;case 14:e=j_(null,e,r,vn(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vn(r,i),Cp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vn(r,i),F_(t,e,r,i,n);case 3:e:{if(eT(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,CI(t,e),Du(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=co(Error(U(423)),e),e=V_(t,e,r,n,i);break e}else if(r!==i){i=co(Error(U(424)),e),e=V_(t,e,r,n,i);break e}else for(qt=ei(e.stateNode.containerInfo.firstChild),Kt=e,Re=!0,_n=null,n=kI(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(oo(),r===i){e=fr(t,e,n);break e}At(t,e,r,n)}e=e.child}return e;case 5:return AI(e),t===null&&Ip(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,vp(r,i)?o=null:s!==null&&vp(r,s)&&(e.flags|=32),ZI(t,e),At(t,e,o,n),e.child;case 6:return t===null&&Ip(e),null;case 13:return tT(t,e,n);case 4:return tg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ao(e,null,r,n):At(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vn(r,i),M_(t,e,r,i,n);case 7:return At(t,e,e.pendingProps,n),e.child;case 8:return At(t,e,e.pendingProps.children,n),e.child;case 12:return At(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,we(xu,r._currentValue),r._currentValue=o,s!==null)if(Rn(s.value,o)){if(s.children===i.children&&!Mt.current){e=fr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=sr(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Tp(s.return,n,e),a.lanes|=n;break}c=c.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Tp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}At(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ys(e,n),i=ln(i),r=r(i),e.flags|=1,At(t,e,r,n),e.child;case 14:return r=e.type,i=vn(r,e.pendingProps),i=vn(r.type,i),j_(t,e,r,i,n);case 15:return JI(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vn(r,i),nu(t,e),e.tag=1,jt(r)?(t=!0,Pu(e)):t=!1,Ys(e,n),KI(e,r,i),kp(e,r,i,n),Ap(null,e,r,!0,t,n);case 19:return nT(t,e,n);case 22:return XI(t,e,n)}throw Error(U(156,e.tag))};function yT(t,e){return H0(t,e)}function fb(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rn(t,e,n,r){return new fb(t,e,n,r)}function gg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function pb(t){if(typeof t=="function")return gg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Lm)return 11;if(t===Mm)return 14}return 2}function ii(t,e){var n=t.alternate;return n===null?(n=rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function su(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")gg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Os:return zi(n.children,i,s,e);case Dm:o=8,i|=8;break;case Qf:return t=rn(12,n,e,i|2),t.elementType=Qf,t.lanes=s,t;case Yf:return t=rn(13,n,e,i),t.elementType=Yf,t.lanes=s,t;case Jf:return t=rn(19,n,e,i),t.elementType=Jf,t.lanes=s,t;case A0:return Dd(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R0:o=10;break e;case C0:o=9;break e;case Lm:o=11;break e;case Mm:o=14;break e;case Lr:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=rn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function zi(t,e,n,r){return t=rn(7,t,r,e),t.lanes=n,t}function Dd(t,e,n,r){return t=rn(22,t,r,e),t.elementType=A0,t.lanes=n,t.stateNode={isHidden:!1},t}function vf(t,e,n){return t=rn(6,t,null,e),t.lanes=n,t}function yf(t,e,n){return e=rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function mb(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jh(0),this.expirationTimes=Jh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vg(t,e,n,r,i,s,o,a,c){return t=new mb(t,e,n,a,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=rn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},eg(s),t}function gb(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function _T(t){if(!t)return ci;t=t._reactInternals;e:{if(ms(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(jt(n))return _I(t,n,e)}return e}function wT(t,e,n,r,i,s,o,a,c){return t=vg(n,r,!0,t,i,s,o,a,c),t.context=_T(null),n=t.current,r=Pt(),i=ri(n),s=sr(r,i),s.callback=e??null,ti(n,s,i),t.current.lanes=i,Ll(t,i,r),Ft(t,r),t}function Ld(t,e,n,r){var i=e.current,s=Pt(),o=ri(i);return n=_T(n),e.context===null?e.context=n:e.pendingContext=n,e=sr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ti(i,e,o),t!==null&&(kn(t,i,o,s),Zc(t,i,o)),o}function Bu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Q_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function yg(t,e){Q_(t,e),(t=t.alternate)&&Q_(t,e)}function vb(){return null}var ET=typeof reportError=="function"?reportError:function(t){console.error(t)};function _g(t){this._internalRoot=t}Md.prototype.render=_g.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Ld(t,e,null,null)};Md.prototype.unmount=_g.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;es(function(){Ld(null,t,null,null)}),e[dr]=null}};function Md(t){this._internalRoot=t}Md.prototype.unstable_scheduleHydration=function(t){if(t){var e=X0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Fr.length&&e!==0&&e<Fr[n].priority;n++);Fr.splice(n,0,t),n===0&&eI(t)}};function wg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function jd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Y_(){}function yb(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Bu(o);s.call(u)}}var o=wT(e,r,t,0,null,!1,!1,"",Y_);return t._reactRootContainer=o,t[dr]=o.current,il(t.nodeType===8?t.parentNode:t),es(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Bu(c);a.call(u)}}var c=vg(t,0,!1,null,null,!1,!1,"",Y_);return t._reactRootContainer=c,t[dr]=c.current,il(t.nodeType===8?t.parentNode:t),es(function(){Ld(e,c,n,r)}),c}function Fd(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var c=Bu(o);a.call(c)}}Ld(e,o,t,i)}else o=yb(n,e,t,i,r);return Bu(o)}Y0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ea(e.pendingLanes);n!==0&&(Vm(e,n|1),Ft(e,Ue()),!(de&6)&&(uo=Ue()+500,yi()))}break;case 13:es(function(){var r=hr(t,1);if(r!==null){var i=Pt();kn(r,t,1,i)}}),yg(t,1)}};Um=function(t){if(t.tag===13){var e=hr(t,134217728);if(e!==null){var n=Pt();kn(e,t,134217728,n)}yg(t,134217728)}};J0=function(t){if(t.tag===13){var e=ri(t),n=hr(t,e);if(n!==null){var r=Pt();kn(n,t,e,r)}yg(t,e)}};X0=function(){return ge};Z0=function(t,e){var n=ge;try{return ge=t,e()}finally{ge=n}};ap=function(t,e,n){switch(e){case"input":if(ep(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ad(r);if(!i)throw Error(U(90));b0(r),ep(r,i)}}}break;case"textarea":x0(t,n);break;case"select":e=n.value,e!=null&&qs(t,!!n.multiple,e,!1)}};V0=fg;U0=es;var _b={usingClientEntryPoint:!1,Events:[jl,js,Ad,j0,F0,fg]},da={findFiberByHostInstance:Mi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wb={bundleType:da.bundleType,version:da.version,rendererPackageName:da.rendererPackageName,rendererConfig:da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=z0(t),t===null?null:t.stateNode},findFiberByHostInstance:da.findFiberByHostInstance||vb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dc.isDisabled&&Dc.supportsFiber)try{Sd=Dc.inject(wb),$n=Dc}catch{}}Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_b;Xt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wg(e))throw Error(U(200));return gb(t,e,null,n)};Xt.createRoot=function(t,e){if(!wg(t))throw Error(U(299));var n=!1,r="",i=ET;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=vg(t,1,!1,null,null,n,!1,r,i),t[dr]=e.current,il(t.nodeType===8?t.parentNode:t),new _g(e)};Xt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=z0(e),t=t===null?null:t.stateNode,t};Xt.flushSync=function(t){return es(t)};Xt.hydrate=function(t,e,n){if(!jd(e))throw Error(U(200));return Fd(null,t,e,!0,n)};Xt.hydrateRoot=function(t,e,n){if(!wg(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=ET;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=wT(e,null,t,1,n??null,i,!1,s,o),t[dr]=e.current,il(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Md(e)};Xt.render=function(t,e,n){if(!jd(e))throw Error(U(200));return Fd(null,t,e,!1,n)};Xt.unmountComponentAtNode=function(t){if(!jd(t))throw Error(U(40));return t._reactRootContainer?(es(function(){Fd(null,null,t,!1,function(){t._reactRootContainer=null,t[dr]=null})}),!0):!1};Xt.unstable_batchedUpdates=fg;Xt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!jd(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return Fd(t,e,n,!1,r)};Xt.version="18.3.1-next-f1338f8080-20240426";function IT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(IT)}catch(t){console.error(t)}}IT(),I0.exports=Xt;var TT=I0.exports;const Ws=Ol(TT);var J_=TT;Gf.createRoot=J_.createRoot,Gf.hydrateRoot=J_.hydrateRoot;/**
 * @remix-run/router v1.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fl(){return fl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fl.apply(this,arguments)}var Gr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Gr||(Gr={}));const X_="popstate";function Eb(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Up("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:zu(i)}return Tb(e,n,null,t)}function $e(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ST(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Ib(){return Math.random().toString(36).substr(2,8)}function Z_(t,e){return{usr:t.state,key:t.key,idx:e}}function Up(t,e,n,r){return n===void 0&&(n=null),fl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ao(e):e,{state:n,key:e&&e.key||r||Ib()})}function zu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ao(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Tb(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Gr.Pop,c=null,u=d();u==null&&(u=0,o.replaceState(fl({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=Gr.Pop;let N=d(),I=N==null?null:N-u;u=N,c&&c({action:a,location:x.location,delta:I})}function g(N,I){a=Gr.Push;let E=Up(x.location,N,I);u=d()+1;let k=Z_(E,u),O=x.createHref(E);try{o.pushState(k,"",O)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(O)}s&&c&&c({action:a,location:x.location,delta:1})}function R(N,I){a=Gr.Replace;let E=Up(x.location,N,I);u=d();let k=Z_(E,u),O=x.createHref(E);o.replaceState(k,"",O),s&&c&&c({action:a,location:x.location,delta:0})}function P(N){let I=i.location.origin!=="null"?i.location.origin:i.location.href,E=typeof N=="string"?N:zu(N);return E=E.replace(/ $/,"%20"),$e(I,"No window.location.(origin|href) available to create URL for href: "+E),new URL(E,I)}let x={get action(){return a},get location(){return t(i,o)},listen(N){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(X_,f),c=N,()=>{i.removeEventListener(X_,f),c=null}},createHref(N){return e(i,N)},createURL:P,encodeLocation(N){let I=P(N);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:g,replace:R,go(N){return o.go(N)}};return x}var ew;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ew||(ew={}));function Sb(t,e,n){return n===void 0&&(n="/"),kb(t,e,n,!1)}function kb(t,e,n,r){let i=typeof e=="string"?Ao(e):e,s=Eg(i.pathname||"/",n);if(s==null)return null;let o=kT(t);Rb(o);let a=null;for(let c=0;a==null&&c<o.length;++c){let u=jb(s);a=Lb(o[c],u,r)}return a}function kT(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let c={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};c.relativePath.startsWith("/")&&($e(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=si([r,c.relativePath]),d=n.concat(c);s.children&&s.children.length>0&&($e(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),kT(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Ob(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let c of RT(s.path))i(s,o,c)}),e}function RT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=RT(r.join("/")),a=[];return a.push(...o.map(c=>c===""?s:[s,c].join("/"))),i&&a.push(...o),a.map(c=>t.startsWith("/")&&c===""?"/":c)}function Rb(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Db(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Cb=/^:[\w-]+$/,Ab=3,Pb=2,bb=1,Nb=10,xb=-2,tw=t=>t==="*";function Ob(t,e){let n=t.split("/"),r=n.length;return n.some(tw)&&(r+=xb),e&&(r+=Pb),n.filter(i=>!tw(i)).reduce((i,s)=>i+(Cb.test(s)?Ab:s===""?bb:Nb),r)}function Db(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Lb(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let c=r[a],u=a===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=nw({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),g=c.route;if(!f&&u&&n&&!r[r.length-1].route.index&&(f=nw({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:si([s,f.pathname]),pathnameBase:$b(si([s,f.pathnameBase])),route:g}),f.pathnameBase!=="/"&&(s=si([s,f.pathnameBase]))}return o}function nw(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Mb(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:g,isOptional:R}=d;if(g==="*"){let x=a[f]||"";o=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const P=a[f];return R&&!P?u[g]=void 0:u[g]=(P||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Mb(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ST(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,c)=>(r.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function jb(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ST(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Eg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Fb(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ao(t):t;return{pathname:n?n.startsWith("/")?n:Vb(n,e):e,search:Bb(r),hash:zb(i)}}function Vb(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function _f(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ub(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Ig(t,e){let n=Ub(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Tg(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ao(t):(i=fl({},t),$e(!i.pathname||!i.pathname.includes("?"),_f("?","pathname","search",i)),$e(!i.pathname||!i.pathname.includes("#"),_f("#","pathname","hash",i)),$e(!i.search||!i.search.includes("#"),_f("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),f-=1;i.pathname=g.join("/")}a=f>=0?e[f]:"/"}let c=Fb(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const si=t=>t.join("/").replace(/\/\/+/g,"/"),$b=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Bb=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,zb=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Wb(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const CT=["post","put","patch","delete"];new Set(CT);const Hb=["get",...CT];new Set(Hb);/**
 * React Router v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pl(){return pl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pl.apply(this,arguments)}const Sg=_.createContext(null),qb=_.createContext(null),_i=_.createContext(null),Vd=_.createContext(null),Er=_.createContext({outlet:null,matches:[],isDataRoute:!1}),AT=_.createContext(null);function Gb(t,e){let{relative:n}=e===void 0?{}:e;Po()||$e(!1);let{basename:r,navigator:i}=_.useContext(_i),{hash:s,pathname:o,search:a}=bT(t,{relative:n}),c=o;return r!=="/"&&(c=o==="/"?r:si([r,o])),i.createHref({pathname:c,search:a,hash:s})}function Po(){return _.useContext(Vd)!=null}function bo(){return Po()||$e(!1),_.useContext(Vd).location}function PT(t){_.useContext(_i).static||_.useLayoutEffect(t)}function Ud(){let{isDataRoute:t}=_.useContext(Er);return t?aN():Kb()}function Kb(){Po()||$e(!1);let t=_.useContext(Sg),{basename:e,future:n,navigator:r}=_.useContext(_i),{matches:i}=_.useContext(Er),{pathname:s}=bo(),o=JSON.stringify(Ig(i,n.v7_relativeSplatPath)),a=_.useRef(!1);return PT(()=>{a.current=!0}),_.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=Tg(u,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:si([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}function Qb(){let{matches:t}=_.useContext(Er),e=t[t.length-1];return e?e.params:{}}function bT(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=_.useContext(_i),{matches:i}=_.useContext(Er),{pathname:s}=bo(),o=JSON.stringify(Ig(i,r.v7_relativeSplatPath));return _.useMemo(()=>Tg(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function Yb(t,e){return Jb(t,e)}function Jb(t,e,n,r){Po()||$e(!1);let{navigator:i}=_.useContext(_i),{matches:s}=_.useContext(Er),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let u=bo(),d;if(e){var f;let N=typeof e=="string"?Ao(e):e;c==="/"||(f=N.pathname)!=null&&f.startsWith(c)||$e(!1),d=N}else d=u;let g=d.pathname||"/",R=g;if(c!=="/"){let N=c.replace(/^\//,"").split("/");R="/"+g.replace(/^\//,"").split("/").slice(N.length).join("/")}let P=Sb(t,{pathname:R}),x=nN(P&&P.map(N=>Object.assign({},N,{params:Object.assign({},a,N.params),pathname:si([c,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?c:si([c,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),s,n,r);return e&&x?_.createElement(Vd.Provider,{value:{location:pl({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Gr.Pop}},x):x}function Xb(){let t=oN(),e=Wb(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},e),n?_.createElement("pre",{style:i},n):null,null)}const Zb=_.createElement(Xb,null);class eN extends _.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?_.createElement(Er.Provider,{value:this.props.routeContext},_.createElement(AT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function tN(t){let{routeContext:e,match:n,children:r}=t,i=_.useContext(Sg);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(Er.Provider,{value:e},r)}function nN(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||$e(!1),o=o.slice(0,Math.min(o.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:g,errors:R}=n,P=f.route.loader&&g[f.route.id]===void 0&&(!R||R[f.route.id]===void 0);if(f.route.lazy||P){c=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,f,g)=>{let R,P=!1,x=null,N=null;n&&(R=a&&f.route.id?a[f.route.id]:void 0,x=f.route.errorElement||Zb,c&&(u<0&&g===0?(P=!0,N=null):u===g&&(P=!0,N=f.route.hydrateFallbackElement||null)));let I=e.concat(o.slice(0,g+1)),E=()=>{let k;return R?k=x:P?k=N:f.route.Component?k=_.createElement(f.route.Component,null):f.route.element?k=f.route.element:k=d,_.createElement(tN,{match:f,routeContext:{outlet:d,matches:I,isDataRoute:n!=null},children:k})};return n&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?_.createElement(eN,{location:n.location,revalidation:n.revalidation,component:x,error:R,children:E(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):E()},null)}var NT=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(NT||{}),Wu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Wu||{});function rN(t){let e=_.useContext(Sg);return e||$e(!1),e}function iN(t){let e=_.useContext(qb);return e||$e(!1),e}function sN(t){let e=_.useContext(Er);return e||$e(!1),e}function xT(t){let e=sN(),n=e.matches[e.matches.length-1];return n.route.id||$e(!1),n.route.id}function oN(){var t;let e=_.useContext(AT),n=iN(Wu.UseRouteError),r=xT(Wu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function aN(){let{router:t}=rN(NT.UseNavigateStable),e=xT(Wu.UseNavigateStable),n=_.useRef(!1);return PT(()=>{n.current=!0}),_.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,pl({fromRouteId:e},s)))},[t,e])}function lN(t){let{to:e,replace:n,state:r,relative:i}=t;Po()||$e(!1);let{future:s,static:o}=_.useContext(_i),{matches:a}=_.useContext(Er),{pathname:c}=bo(),u=Ud(),d=Tg(e,Ig(a,s.v7_relativeSplatPath),c,i==="path"),f=JSON.stringify(d);return _.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:i}),[u,f,i,n,r]),null}function Ln(t){$e(!1)}function cN(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Gr.Pop,navigator:s,static:o=!1,future:a}=t;Po()&&$e(!1);let c=e.replace(/^\/*/,"/"),u=_.useMemo(()=>({basename:c,navigator:s,static:o,future:pl({v7_relativeSplatPath:!1},a)}),[c,a,s,o]);typeof r=="string"&&(r=Ao(r));let{pathname:d="/",search:f="",hash:g="",state:R=null,key:P="default"}=r,x=_.useMemo(()=>{let N=Eg(d,c);return N==null?null:{location:{pathname:N,search:f,hash:g,state:R,key:P},navigationType:i}},[c,d,f,g,R,P,i]);return x==null?null:_.createElement(_i.Provider,{value:u},_.createElement(Vd.Provider,{children:n,value:x}))}function uN(t){let{children:e,location:n}=t;return Yb($p(e),n)}new Promise(()=>{});function $p(t,e){e===void 0&&(e=[]);let n=[];return _.Children.forEach(t,(r,i)=>{if(!_.isValidElement(r))return;let s=[...e,i];if(r.type===_.Fragment){n.push.apply(n,$p(r.props.children,s));return}r.type!==Ln&&$e(!1),!r.props.index||!r.props.children||$e(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=$p(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bp(){return Bp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bp.apply(this,arguments)}function dN(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function hN(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function fN(t,e){return t.button===0&&(!e||e==="_self")&&!hN(t)}const pN=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],mN="6";try{window.__reactRouterVersion=mN}catch{}const gN="startTransition",rw=uP[gN];function vN(t){let{basename:e,children:n,future:r,window:i}=t,s=_.useRef();s.current==null&&(s.current=Eb({window:i,v5Compat:!0}));let o=s.current,[a,c]=_.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=_.useCallback(f=>{u&&rw?rw(()=>c(f)):c(f)},[c,u]);return _.useLayoutEffect(()=>o.listen(d),[o,d]),_.createElement(cN,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const yN=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_N=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,se=_.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:c,to:u,preventScrollReset:d,unstable_viewTransition:f}=e,g=dN(e,pN),{basename:R}=_.useContext(_i),P,x=!1;if(typeof u=="string"&&_N.test(u)&&(P=u,yN))try{let k=new URL(window.location.href),O=u.startsWith("//")?new URL(k.protocol+u):new URL(u),L=Eg(O.pathname,R);O.origin===k.origin&&L!=null?u=L+O.search+O.hash:x=!0}catch{}let N=Gb(u,{relative:i}),I=wN(u,{replace:o,state:a,target:c,preventScrollReset:d,relative:i,unstable_viewTransition:f});function E(k){r&&r(k),k.defaultPrevented||I(k)}return _.createElement("a",Bp({},g,{href:P||N,onClick:x||s?r:E,ref:n,target:c}))});var iw;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(iw||(iw={}));var sw;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(sw||(sw={}));function wN(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,c=Ud(),u=bo(),d=bT(t,{relative:o});return _.useCallback(f=>{if(fN(f,n)){f.preventDefault();let g=r!==void 0?r:zu(u)===zu(d);c(t,{replace:g,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,c,d,r,i,n,t,s,o,a])}var ow={};/**
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
 */const OT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},EN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},DT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let g=(a&15)<<2|u>>6,R=u&63;c||(R=64,o||(g=64)),r.push(n[d],n[f],n[g],n[R])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(OT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):EN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new IN;const g=s<<2|a>>4;if(r.push(g),u!==64){const R=a<<4&240|u>>2;if(r.push(R),f!==64){const P=u<<6&192|f;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class IN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const TN=function(t){const e=OT(t);return DT.encodeByteArray(e,!0)},Hu=function(t){return TN(t).replace(/\./g,"")},kg=function(t){try{return DT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function qu(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!SN(n)||(t[n]=qu(t[n],e[n]));return t}function SN(t){return t!=="__proto__"}/**
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
 */function kN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const RN=()=>kN().__FIREBASE_DEFAULTS__,CN=()=>{if(typeof process>"u"||typeof ow>"u")return;const t=ow.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},AN=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&kg(t[1]);return e&&JSON.parse(e)},$d=()=>{try{return RN()||CN()||AN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},LT=t=>{var e,n;return(n=(e=$d())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},PN=t=>{const e=LT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},MT=()=>{var t;return(t=$d())===null||t===void 0?void 0:t.config},Rg=t=>{var e;return(e=$d())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class bN{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function NN(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Hu(JSON.stringify(n)),Hu(JSON.stringify(o)),""].join(".")}/**
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
 */function ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ae())}function Cg(){var t;const e=(t=$d())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function FT(){return typeof window<"u"||VT()}function VT(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function Bd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function zd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ag(){const t=ae();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xN(){return!Cg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ml(){try{return typeof indexedDB=="object"}catch{return!1}}function UT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function ON(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const DN="FirebaseError";class He extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=DN,Object.setPrototypeOf(this,He.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hn.prototype.create)}}class hn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?LN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new He(i,a,r)}}function LN(t,e){return t.replace(MN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const MN=/\{\$([^}]+)}/g;/**
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
 */function aw(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function $T(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function gl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(lw(s)&&lw(o)){if(!gl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function lw(t){return t!==null&&typeof t=="object"}/**
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
 */function Pn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function In(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Vn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Pg(t,e){const n=new jN(t,e);return n.subscribe.bind(n)}class jN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");FN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=wf),i.error===void 0&&(i.error=wf),i.complete===void 0&&(i.complete=wf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function FN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wf(){}/**
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
 */const VN=1e3,UN=2,$N=4*60*60*1e3,BN=.5;function cw(t,e=VN,n=UN){const r=e*Math.pow(n,t),i=Math.round(BN*r*(Math.random()-.5)*2);return Math.min($N,r+i)}/**
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
 */function K(t){return t&&t._delegate?t._delegate:t}class bt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Di="[DEFAULT]";/**
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
 */class zN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new bN;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(HN(e))try{this.getOrInitializeService({instanceIdentifier:Di})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Di){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Di){return this.instances.has(e)}getOptions(e=Di){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:WN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Di){return this.component?this.component.multipleInstances?e:Di:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function WN(t){return t===Di?void 0:t}function HN(t){return t.instantiationMode==="EAGER"}/**
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
 */class BT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new zN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const bg=[];var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const zT={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},qN=ee.INFO,GN={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},KN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=GN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class No{constructor(e){this.name=e,this._logLevel=qN,this._logHandler=KN,this._userLogHandler=null,bg.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}function QN(t){bg.forEach(e=>{e.setLogLevel(t)})}function YN(t,e){for(const n of bg){let r=null;e&&e.level&&(r=zT[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(r??i.logLevel)&&t({level:ee[s].toLowerCase(),message:a,args:o,type:i.name})}}}const JN=(t,e)=>e.some(n=>t instanceof n);let uw,dw;function XN(){return uw||(uw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ZN(){return dw||(dw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const WT=new WeakMap,zp=new WeakMap,HT=new WeakMap,Ef=new WeakMap,Ng=new WeakMap;function ex(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(oi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&WT.set(n,t)}).catch(()=>{}),Ng.set(e,t),e}function tx(t){if(zp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});zp.set(t,e)}let Wp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||HT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return oi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function nx(t){Wp=t(Wp)}function rx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(If(this),e,...n);return HT.set(r,e.sort?e.sort():[e]),oi(r)}:ZN().includes(t)?function(...e){return t.apply(If(this),e),oi(WT.get(this))}:function(...e){return oi(t.apply(If(this),e))}}function ix(t){return typeof t=="function"?rx(t):(t instanceof IDBTransaction&&tx(t),JN(t,XN())?new Proxy(t,Wp):t)}function oi(t){if(t instanceof IDBRequest)return ex(t);if(Ef.has(t))return Ef.get(t);const e=ix(t);return e!==t&&(Ef.set(t,e),Ng.set(e,t)),e}const If=t=>Ng.get(t);function qT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=oi(o);return r&&o.addEventListener("upgradeneeded",c=>{r(oi(o.result),c.oldVersion,c.newVersion,oi(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const sx=["get","getKey","getAll","getAllKeys","count"],ox=["put","add","delete","clear"],Tf=new Map;function hw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Tf.get(e))return Tf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=ox.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||sx.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return Tf.set(e,s),s}nx(t=>({...t,get:(e,n,r)=>hw(e,n)||t.get(e,n,r),has:(e,n)=>!!hw(e,n)||t.has(e,n)}));/**
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
 */class ax{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function lx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gu="@firebase/app",Hp="0.10.7";/**
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
 */const ts=new No("@firebase/app"),cx="@firebase/app-compat",ux="@firebase/analytics-compat",dx="@firebase/analytics",hx="@firebase/app-check-compat",fx="@firebase/app-check",px="@firebase/auth",mx="@firebase/auth-compat",gx="@firebase/database",vx="@firebase/database-compat",yx="@firebase/functions",_x="@firebase/functions-compat",wx="@firebase/installations",Ex="@firebase/installations-compat",Ix="@firebase/messaging",Tx="@firebase/messaging-compat",Sx="@firebase/performance",kx="@firebase/performance-compat",Rx="@firebase/remote-config",Cx="@firebase/remote-config-compat",Ax="@firebase/storage",Px="@firebase/storage-compat",bx="@firebase/firestore",Nx="@firebase/vertexai-preview",xx="@firebase/firestore-compat",Ox="firebase",Dx="10.12.4";/**
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
 */const ui="[DEFAULT]",Lx={[Gu]:"fire-core",[cx]:"fire-core-compat",[dx]:"fire-analytics",[ux]:"fire-analytics-compat",[fx]:"fire-app-check",[hx]:"fire-app-check-compat",[px]:"fire-auth",[mx]:"fire-auth-compat",[gx]:"fire-rtdb",[vx]:"fire-rtdb-compat",[yx]:"fire-fn",[_x]:"fire-fn-compat",[wx]:"fire-iid",[Ex]:"fire-iid-compat",[Ix]:"fire-fcm",[Tx]:"fire-fcm-compat",[Sx]:"fire-perf",[kx]:"fire-perf-compat",[Rx]:"fire-rc",[Cx]:"fire-rc-compat",[Ax]:"fire-gcs",[Px]:"fire-gcs-compat",[bx]:"fire-fst",[xx]:"fire-fst-compat",[Nx]:"fire-vertex","fire-js":"fire-js",[Ox]:"fire-js-all"};/**
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
 */const di=new Map,ho=new Map,fo=new Map;function vl(t,e){try{t.container.addComponent(e)}catch(n){ts.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function GT(t,e){t.container.addOrOverwriteComponent(e)}function $t(t){const e=t.name;if(fo.has(e))return ts.debug(`There were multiple attempts to register component ${e}.`),!1;fo.set(e,t);for(const n of di.values())vl(n,t);for(const n of ho.values())vl(n,t);return!0}function Ir(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Mx(t,e,n=ui){Ir(t,e).clearInstance(n)}function KT(t){return t.options!==void 0}function fe(t){return t.settings!==void 0}function jx(){fo.clear()}/**
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
 */const Fx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},on=new hn("app","Firebase",Fx);/**
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
 */let QT=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw on.create("app-deleted",{appName:this._name})}};/**
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
 */class Vx extends QT{constructor(e,n,r,i){const s=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const a=e;super(a.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},n),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,nt(Gu,Hp,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){xg(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw on.create("server-app-deleted")}}/**
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
 */const en=Dx;function Wd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ui,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw on.create("bad-app-name",{appName:String(i)});if(n||(n=MT()),!n)throw on.create("no-options");const s=di.get(i);if(s){if(gl(n,s.options)&&gl(r,s.config))return s;throw on.create("duplicate-app",{appName:i})}const o=new BT(i);for(const c of fo.values())o.addComponent(c);const a=new QT(n,r,o);return di.set(i,a),a}function Ux(t,e){if(FT()&&!VT())throw on.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let n;KT(t)?n=t.options:n=t;const r=Object.assign(Object.assign({},e),n);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=u=>[...u].reduce((d,f)=>Math.imul(31,d)+f.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw on.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=ho.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const a=new BT(s);for(const u of fo.values())a.addComponent(u);const c=new Vx(n,e,s,a);return ho.set(s,c),c}function Hd(t=ui){const e=di.get(t);if(!e&&t===ui&&MT())return Wd();if(!e)throw on.create("no-app",{appName:t});return e}function $x(){return Array.from(di.values())}async function xg(t){let e=!1;const n=t.name;di.has(n)?(e=!0,di.delete(n)):ho.has(n)&&t.decRefCount()<=0&&(ho.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function nt(t,e,n){var r;let i=(r=Lx[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ts.warn(a.join(" "));return}$t(new bt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function YT(t,e){if(t!==null&&typeof t!="function")throw on.create("invalid-log-argument");YN(t,e)}function JT(t){QN(t)}/**
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
 */const Bx="firebase-heartbeat-database",zx=1,yl="firebase-heartbeat-store";let Sf=null;function XT(){return Sf||(Sf=qT(Bx,zx,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(yl)}catch(n){console.warn(n)}}}}).catch(t=>{throw on.create("idb-open",{originalErrorMessage:t.message})})),Sf}async function Wx(t){try{const n=(await XT()).transaction(yl),r=await n.objectStore(yl).get(ZT(t));return await n.done,r}catch(e){if(e instanceof He)ts.warn(e.message);else{const n=on.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ts.warn(n.message)}}}async function fw(t,e){try{const r=(await XT()).transaction(yl,"readwrite");await r.objectStore(yl).put(e,ZT(t)),await r.done}catch(n){if(n instanceof He)ts.warn(n.message);else{const r=on.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ts.warn(r.message)}}}function ZT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Hx=1024,qx=30*24*60*60*1e3;class Gx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Qx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=pw();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=qx}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=pw(),{heartbeatsToSend:r,unsentEntries:i}=Kx(this._heartbeatsCache.heartbeats),s=Hu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function pw(){return new Date().toISOString().substring(0,10)}function Kx(t,e=Hx){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),mw(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),mw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Qx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ml()?UT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Wx(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return fw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return fw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function mw(t){return Hu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Yx(t){$t(new bt("platform-logger",e=>new ax(e),"PRIVATE")),$t(new bt("heartbeat",e=>new Gx(e),"PRIVATE")),nt(Gu,Hp,t),nt(Gu,Hp,"esm2017"),nt("fire-js","")}Yx("");const Jx=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:He,SDK_VERSION:en,_DEFAULT_ENTRY_NAME:ui,_addComponent:vl,_addOrOverwriteComponent:GT,_apps:di,_clearComponents:jx,_components:fo,_getProvider:Ir,_isFirebaseApp:KT,_isFirebaseServerApp:fe,_registerComponent:$t,_removeServiceInstance:Mx,_serverApps:ho,deleteApp:xg,getApp:Hd,getApps:$x,initializeApp:Wd,initializeServerApp:Ux,onLog:YT,registerVersion:nt,setLogLevel:JT},Symbol.toStringTag,{value:"Module"}));/**
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
 */class Xx{constructor(e,n){this._delegate=e,this.firebase=n,vl(e,new bt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),xg(this._delegate)))}_getService(e,n=ui){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=ui){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){vl(this._delegate,e)}_addOrOverwriteComponent(e){GT(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const Zx={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},gw=new hn("app-compat","Firebase",Zx);/**
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
 */function eO(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:nt,setLogLevel:JT,onLog:YT,apps:null,SDK_VERSION:en,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:Jx}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||ui,!aw(e,u))throw gw.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,d={}){const f=Wd(u,d);if(aw(e,f.name))return e[f.name];const g=new t(f,n);return e[f.name]=g,g}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const d=u.name,f=d.replace("-compat","");if($t(u)&&u.type==="PUBLIC"){const g=(R=i())=>{if(typeof R[f]!="function")throw gw.create("invalid-app-argument",{appName:d});return R[f]()};u.serviceProps!==void 0&&qu(g,u.serviceProps),n[f]=g,t.prototype[f]=function(...R){return this._getService.bind(this,d).apply(this,u.multipleInstances?R:[])}}return u.type==="PUBLIC"?n[f]:null}function c(u,d){return d==="serverAuth"?null:d}return n}/**
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
 */function eS(){const t=eO(Xx);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:eS,extendNamespace:e,createSubscribe:Pg,ErrorFactory:hn,deepExtend:qu});function e(n){qu(t,n)}return t}const tO=eS();/**
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
 */const vw=new No("@firebase/app-compat"),nO="@firebase/app-compat",rO="0.2.37";/**
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
 */function iO(t){nt(nO,rO,t)}/**
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
 */if(FT()&&self.firebase!==void 0){vw.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&vw.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const xo=tO;iO();var sO="firebase",oO="10.12.4";/**
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
 */xo.registerVersion(sO,oO,"app-compat");function Oo(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const ha={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Ss={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function aO(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function tS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lO=aO,cO=tS,nS=new hn("auth","Firebase",tS());/**
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
 */const Ku=new No("@firebase/auth");function uO(t,...e){Ku.logLevel<=ee.WARN&&Ku.warn(`Auth (${en}): ${t}`,...e)}function ou(t,...e){Ku.logLevel<=ee.ERROR&&Ku.error(`Auth (${en}): ${t}`,...e)}/**
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
 */function ft(t,...e){throw Dg(t,...e)}function Qe(t,...e){return Dg(t,...e)}function Og(t,e,n){const r=Object.assign(Object.assign({},cO()),{[e]:n});return new hn("auth","Firebase",r).create(e,{appName:t.name})}function rt(t){return Og(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Do(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ft(t,"argument-error"),Og(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Dg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return nS.create(t,...e)}function $(t,e,...n){if(!t)throw Dg(e,...n)}function Un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ou(e),new Error(e)}function Cn(t,e){t||Un(e)}/**
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
 */function _l(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Lg(){return yw()==="http:"||yw()==="https:"}function yw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function dO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Lg()||Bd()||"connection"in navigator)?navigator.onLine:!0}function hO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */let Vl=class{constructor(e,n){this.shortDelay=e,this.longDelay=n,Cn(n>e,"Short delay should be less than long delay!"),this.isMobile=jT()||zd()}get(){return dO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};/**
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
 */function Mg(t,e){Cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */let rS=class{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};/**
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
 */const fO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const pO=new Vl(3e4,6e4);function Me(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function je(t,e,n,r,i={}){return iS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Pn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),rS.fetch()(sS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function iS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},fO),e);try{const i=new gO(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ta(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ta(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ta(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ta(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Og(t,d,u);ft(t,d)}}catch(i){if(i instanceof He)throw i;ft(t,"network-request-failed",{message:String(i)})}}async function Tr(t,e,n,r,i={}){const s=await je(t,e,n,r,i);return"mfaPendingCredential"in s&&ft(t,"multi-factor-auth-required",{_serverResponse:s}),s}function sS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Mg(t.config,i):`${t.config.apiScheme}://${i}`}function mO(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}let gO=class{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Qe(this.auth,"network-request-failed")),pO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}};function Ta(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Qe(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */function _w(t){return t!==void 0&&t.getResponse!==void 0}function ww(t){return t!==void 0&&t.enterprise!==void 0}let vO=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return mO(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}};/**
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
 */async function yO(t){return(await je(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function _O(t,e){return je(t,"GET","/v2/recaptchaConfig",Me(t,e))}/**
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
 */async function wO(t,e){return je(t,"POST","/v1/accounts:delete",e)}async function EO(t,e){return je(t,"POST","/v1/accounts:update",e)}async function oS(t,e){return je(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Fa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function IO(t,e=!1){const n=K(t),r=await n.getIdToken(e),i=qd(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Fa(kf(i.auth_time)),issuedAtTime:Fa(kf(i.iat)),expirationTime:Fa(kf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function kf(t){return Number(t)*1e3}function qd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ou("JWT malformed, contained fewer than 3 sections"),null;try{const i=kg(n);return i?JSON.parse(i):(ou("Failed to decode base64 JWT payload"),null)}catch(i){return ou("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ew(t){const e=qd(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function pr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof He&&TO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function TO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */let SO=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};/**
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
 */let qp=class{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fa(this.lastLoginAt),this.creationTime=Fa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};/**
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
 */async function wl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await pr(t,oS(n,{idToken:r}));$(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?aS(s.providerUserInfo):[],a=RO(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=c?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new qp(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function kO(t){const e=K(t);await wl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RO(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function aS(t){return t.map(e=>{var{providerId:n}=e,r=Oo(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function CO(t,e){const n=await iS(t,{},async()=>{const r=Pn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=sS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",rS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function AO(t,e){return je(t,"POST","/v2/accounts:revokeToken",Me(t,e))}/**
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
 */let Rf=class Gp{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ew(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){$(e.length!==0,"internal-error");const n=Ew(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await CO(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Gp;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gp,this.toJSON())}_performRefresh(){return Un("not implemented")}};/**
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
 */function Or(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}let Qu=class Sa{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Oo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new SO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new qp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await pr(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return IO(this,e)}reload(){return kO(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Sa(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await wl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(fe(this.auth.app))return Promise.reject(rt(this.auth));const e=await this.getIdToken();return await pr(this,wO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,u,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,R=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,I=(u=n.createdAt)!==null&&u!==void 0?u:void 0,E=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:k,emailVerified:O,isAnonymous:L,providerData:M,stsTokenManager:T}=n;$(k&&T,e,"internal-error");const v=Rf.fromJSON(this.name,T);$(typeof k=="string",e,"internal-error"),Or(f,e.name),Or(g,e.name),$(typeof O=="boolean",e,"internal-error"),$(typeof L=="boolean",e,"internal-error"),Or(R,e.name),Or(P,e.name),Or(x,e.name),Or(N,e.name),Or(I,e.name),Or(E,e.name);const S=new Sa({uid:k,auth:e,email:g,emailVerified:O,displayName:f,isAnonymous:L,photoURL:P,phoneNumber:R,tenantId:x,stsTokenManager:v,createdAt:I,lastLoginAt:E});return M&&Array.isArray(M)&&(S.providerData=M.map(A=>Object.assign({},A))),N&&(S._redirectEventId=N),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new Rf;i.updateFromServerResponse(n);const s=new Sa({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await wl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];$(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?aS(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Rf;a.updateFromIdToken(r);const c=new Sa({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new qp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,u),c}};/**
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
 */const Iw=new Map;function Gt(t){Cn(t instanceof Function,"Expected a class definition");let e=Iw.get(t);return e?(Cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Iw.set(t,e),e)}/**
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
 */let lS=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}};lS.type="NONE";const po=lS;/**
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
 */function Wi(t,e,n){return`firebase:${t}:${e}:${n}`}let Tw=class au{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Wi(this.userKey,i.apiKey,s),this.fullPersistenceKey=Wi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Qu._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new au(Gt(po),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Gt(po);const o=Wi(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const f=Qu._fromJSON(e,d);u!==s&&(a=f),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new au(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new au(s,e,r))}};/**
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
 */function Sw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hS(e))return"Blackberry";if(fS(e))return"Webos";if(jg(e))return"Safari";if((e.includes("chrome/")||uS(e))&&!e.includes("edge/"))return"Chrome";if(Ul(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function cS(t=ae()){return/firefox\//i.test(t)}function jg(t=ae()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uS(t=ae()){return/crios\//i.test(t)}function dS(t=ae()){return/iemobile/i.test(t)}function Ul(t=ae()){return/android/i.test(t)}function hS(t=ae()){return/blackberry/i.test(t)}function fS(t=ae()){return/webos/i.test(t)}function Lo(t=ae()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function PO(t=ae()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function bO(t=ae()){var e;return Lo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function NO(){return Ag()&&document.documentMode===10}function pS(t=ae()){return Lo(t)||Ul(t)||fS(t)||hS(t)||/windows phone/i.test(t)||dS(t)}function xO(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function mS(t,e=[]){let n;switch(t){case"Browser":n=Sw(ae());break;case"Worker":n=`${Sw(ae())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${en}/${r}`}/**
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
 */let OO=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}};/**
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
 */async function DO(t,e={}){return je(t,"GET","/v2/passwordPolicy",Me(t,e))}/**
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
 */const LO=6;let MO=class{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:LO,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};/**
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
 */let jO=class{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kw(this),this.idTokenSubscription=new kw(this),this.beforeStateQueue=new OO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Tw.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await oS(this,{idToken:e}),r=await Qu._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(fe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(fe(this.app))return Promise.reject(rt(this));const n=e?K(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return fe(this.app)?Promise.reject(rt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return fe(this.app)?Promise.reject(rt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Gt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await DO(this),n=new MO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new hn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await AO(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gt(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await Tw.create(this,[Gt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if($(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&uO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}};function Le(t){return K(t)}let kw=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=Pg(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};/**
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
 */let $l={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function FO(t){$l=t}function Fg(t){return $l.loadJS(t)}function VO(){return $l.recaptchaV2Script}function UO(){return $l.recaptchaEnterpriseScript}function $O(){return $l.gapiScript}function gS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const BO="recaptcha-enterprise",zO="NO_RECAPTCHA";let WO=class{constructor(e){this.type=BO,this.auth=Le(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{_O(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new vO(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;ww(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(zO)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&ww(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=UO();c.length!==0&&(c+=a),Fg(c).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}};async function Rw(t,e,n,r=!1){const i=new WO(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function El(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Rw(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Rw(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}function HO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Gt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function qO(t,e,n){const r=Le(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=vS(e),{host:o,port:a}=GO(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||KO()}function vS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function GO(t){const e=vS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Cw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Cw(o)}}}function Cw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function KO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */let Mo=class{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Un("not implemented")}_getIdTokenResponse(e){return Un("not implemented")}_linkToIdToken(e,n){return Un("not implemented")}_getReauthenticationResolver(e){return Un("not implemented")}};/**
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
 */async function yS(t,e){return je(t,"POST","/v1/accounts:resetPassword",Me(t,e))}async function QO(t,e){return je(t,"POST","/v1/accounts:update",e)}async function YO(t,e){return je(t,"POST","/v1/accounts:signUp",e)}async function JO(t,e){return je(t,"POST","/v1/accounts:update",Me(t,e))}/**
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
 */async function XO(t,e){return Tr(t,"POST","/v1/accounts:signInWithPassword",Me(t,e))}async function Gd(t,e){return je(t,"POST","/v1/accounts:sendOobCode",Me(t,e))}async function ZO(t,e){return Gd(t,e)}async function eD(t,e){return Gd(t,e)}async function tD(t,e){return Gd(t,e)}async function nD(t,e){return Gd(t,e)}/**
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
 */async function rD(t,e){return Tr(t,"POST","/v1/accounts:signInWithEmailLink",Me(t,e))}async function iD(t,e){return Tr(t,"POST","/v1/accounts:signInWithEmailLink",Me(t,e))}/**
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
 */let Aw=class Kp extends Mo{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Kp(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Kp(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return El(e,n,"signInWithPassword",XO);case"emailLink":return rD(e,{email:this._email,oobCode:this._password});default:ft(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return El(e,r,"signUpPassword",YO);case"emailLink":return iD(e,{idToken:n,email:this._email,oobCode:this._password});default:ft(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};/**
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
 */const sD="http://localhost";let ns=class Qp extends Mo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qp(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ft("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Oo(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Qp(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return or(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,or(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,or(e,n)}buildRequest(){const e={requestUri:sD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Pn(n)}return e}};/**
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
 */async function oD(t,e){return je(t,"POST","/v1/accounts:sendVerificationCode",Me(t,e))}async function aD(t,e){return Tr(t,"POST","/v1/accounts:signInWithPhoneNumber",Me(t,e))}async function lD(t,e){const n=await Tr(t,"POST","/v1/accounts:signInWithPhoneNumber",Me(t,e));if(n.temporaryProof)throw Ta(t,"account-exists-with-different-credential",n);return n}const cD={USER_NOT_FOUND:"user-not-found"};async function uD(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Tr(t,"POST","/v1/accounts:signInWithPhoneNumber",Me(t,n),cD)}/**
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
 */class Hi extends Mo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Hi({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Hi({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return aD(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return lD(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return uD(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Hi({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function dD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function hD(t){const e=In(Vn(t)).link,n=e?In(Vn(e)).deep_link_id:null,r=In(Vn(t)).deep_link_id;return(r?In(Vn(r)).link:null)||r||n||e||t}let _S=class wS{constructor(e){var n,r,i,s,o,a;const c=In(Vn(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,f=dD((i=c.mode)!==null&&i!==void 0?i:null);$(u&&d&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=d,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=hD(e);try{return new wS(n)}catch{return null}}};/**
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
 */let jo=class ES{constructor(){this.providerId=ES.PROVIDER_ID}static credential(e,n){return Aw._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=_S.parseLink(n);return $(r,"argument-error"),Aw._fromEmailAndCode(e,r.code,r.tenantId)}};jo.PROVIDER_ID="password";jo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";jo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */let Fo=class extends Sr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};class Xs extends Fo{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return $("providerId"in n&&"signInMethod"in n,"argument-error"),ns._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return $(e.idToken||e.accessToken,"argument-error"),ns._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Xs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Xs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Xs(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */let Kd=class Cs extends Fo{constructor(){super("facebook.com")}static credential(e){return ns._fromParams({providerId:Cs.PROVIDER_ID,signInMethod:Cs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cs.credentialFromTaggedObject(e)}static credentialFromError(e){return Cs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cs.credential(e.oauthAccessToken)}catch{return null}}};Kd.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kd.PROVIDER_ID="facebook.com";/**
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
 */let Qd=class As extends Fo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ns._fromParams({providerId:As.PROVIDER_ID,signInMethod:As.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return As.credentialFromTaggedObject(e)}static credentialFromError(e){return As.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return As.credential(n,r)}catch{return null}}};Qd.GOOGLE_SIGN_IN_METHOD="google.com";Qd.PROVIDER_ID="google.com";/**
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
 */let Yd=class Ps extends Fo{constructor(){super("github.com")}static credential(e){return ns._fromParams({providerId:Ps.PROVIDER_ID,signInMethod:Ps.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ps.credentialFromTaggedObject(e)}static credentialFromError(e){return Ps.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ps.credential(e.oauthAccessToken)}catch{return null}}};Yd.GITHUB_SIGN_IN_METHOD="github.com";Yd.PROVIDER_ID="github.com";/**
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
 */const fD="http://localhost";class mo extends Mo{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return or(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,or(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,or(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new mo(r,s)}static _create(e,n){return new mo(e,n)}buildRequest(){return{requestUri:fD,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const pD="saml.";class Yu extends Sr{constructor(e){$(e.startsWith(pD),"argument-error"),super(e)}static credentialFromResult(e){return Yu.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Yu.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=mo.fromJSON(e);return $(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return mo._create(r,n)}catch{return null}}}/**
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
 */let Jd=class bs extends Fo{constructor(){super("twitter.com")}static credential(e,n){return ns._fromParams({providerId:bs.PROVIDER_ID,signInMethod:bs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return bs.credentialFromTaggedObject(e)}static credentialFromError(e){return bs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return bs.credential(n,r)}catch{return null}}};Jd.TWITTER_SIGN_IN_METHOD="twitter.com";Jd.PROVIDER_ID="twitter.com";/**
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
 */async function IS(t,e){return Tr(t,"POST","/v1/accounts:signUp",Me(t,e))}/**
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
 */let mr=class Yp{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Qu._fromIdTokenResponse(e,r,i),o=Pw(r);return new Yp({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Pw(r);return new Yp({user:e,providerId:i,_tokenResponse:r,operationType:n})}};function Pw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function mD(t){var e;if(fe(t.app))return Promise.reject(rt(t));const n=Le(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new mr({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await IS(n,{returnSecureToken:!0}),i=await mr._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */let gD=class Jp extends He{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Jp.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Jp(e,n,r,i)}};function TS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?gD._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function SS(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function vD(t,e){const n=K(t);await Xd(!0,n,e);const{providerUserInfo:r}=await EO(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=SS(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Vg(t,e,n=!1){const r=await pr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return mr._forOperation(t,"link",r)}async function Xd(t,e,n){await wl(e);const r=SS(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";$(r.has(n)===t,e.auth,i)}/**
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
 */async function kS(t,e,n=!1){const{auth:r}=t;if(fe(r.app))return Promise.reject(rt(r));const i="reauthenticate";try{const s=await pr(t,TS(r,i,e,t),n);$(s.idToken,r,"internal-error");const o=qd(s.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),mr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ft(r,"user-mismatch"),s}}/**
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
 */async function RS(t,e,n=!1){if(fe(t.app))return Promise.reject(rt(t));const r="signIn",i=await TS(t,r,e),s=await mr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Zd(t,e){return RS(Le(t),e)}async function CS(t,e){const n=K(t);return await Xd(!1,n,e.providerId),Vg(n,e)}async function AS(t,e){return kS(K(t),e)}/**
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
 */async function yD(t,e){return Tr(t,"POST","/v1/accounts:signInWithCustomToken",Me(t,e))}/**
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
 */async function _D(t,e){if(fe(t.app))return Promise.reject(rt(t));const n=Le(t),r=await yD(n,{token:e,returnSecureToken:!0}),i=await mr._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class Bl{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Ug._fromServerResponse(e,n):"totpInfo"in n?$g._fromServerResponse(e,n):ft(e,"internal-error")}}class Ug extends Bl{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Ug(n)}}class $g extends Bl{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new $g(n)}}/**
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
 */function eh(t,e,n){var r;$(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),$(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&($(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&($(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function Bg(t){const e=Le(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function wD(t,e,n){const r=Le(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&eh(r,i,n),await El(r,i,"getOobCode",eD)}async function ED(t,e,n){await yS(K(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Bg(t),r})}async function ID(t,e){await JO(K(t),{oobCode:e})}async function PS(t,e){const n=K(t),r=await yS(n,{oobCode:e}),i=r.requestType;switch($(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":$(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":$(r.mfaInfo,n,"internal-error");default:$(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Bl._fromServerResponse(Le(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function TD(t,e){const{data:n}=await PS(K(t),e);return n.email}async function SD(t,e,n){if(fe(t.app))return Promise.reject(rt(t));const r=Le(t),o=await El(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",IS).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Bg(t),c}),a=await mr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function kD(t,e,n){return fe(t.app)?Promise.reject(rt(t)):Zd(K(t),jo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Bg(t),r})}/**
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
 */async function RD(t,e,n){const r=Le(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){$(a.handleCodeInApp,r,"argument-error"),a&&eh(r,o,a)}s(i,n),await El(r,i,"getOobCode",tD)}function CD(t,e){const n=_S.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function AD(t,e,n){if(fe(t.app))return Promise.reject(rt(t));const r=K(t),i=jo.credentialWithLink(e,n||_l());return $(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Zd(r,i)}/**
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
 */async function PD(t,e){return je(t,"POST","/v1/accounts:createAuthUri",Me(t,e))}/**
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
 */async function bD(t,e){const n=Lg()?_l():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await PD(K(t),r);return i||[]}async function ND(t,e){const n=K(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&eh(n.auth,i,e);const{email:s}=await ZO(n.auth,i);s!==t.email&&await t.reload()}async function xD(t,e,n){const r=K(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&eh(r.auth,s,n);const{email:o}=await nD(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function OD(t,e){return je(t,"POST","/v1/accounts:update",e)}/**
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
 */async function DD(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=K(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await pr(r,OD(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function LD(t,e){const n=K(t);return fe(n.auth.app)?Promise.reject(rt(n.auth)):bS(n,e,null)}function MD(t,e){return bS(K(t),null,e)}async function bS(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await pr(t,QO(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function jD(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=qd(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Zs(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new FD(s,i);case"github.com":return new VD(s,i);case"google.com":return new UD(s,i);case"twitter.com":return new $D(s,i,t.screenName||null);case"custom":case"anonymous":return new Zs(s,null);default:return new Zs(s,r,i)}}class Zs{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class NS extends Zs{constructor(e,n,r,i){super(e,n,r),this.username=i}}class FD extends Zs{constructor(e,n){super(e,"facebook.com",n)}}class VD extends NS{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class UD extends Zs{constructor(e,n){super(e,"google.com",n)}}class $D extends NS{constructor(e,n,r){super(e,"twitter.com",n,r)}}function BD(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:jD(n)}/**
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
 */class zg{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Le(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Bl._fromServerResponse(r,a));$(i.mfaPendingCredential,r,"internal-error");const o=Vi._fromMfaPendingCredential(i.mfaPendingCredential);return new zg(o,s,async a=>{const c=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:c.idToken,refreshToken:c.refreshToken});switch(n.operationType){case"signIn":const d=await mr._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(d.user),d;case"reauthenticate":return $(n.user,r,"internal-error"),mr._forOperation(n.user,n.operationType,u);default:ft(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function zD(t,e){var n;const r=K(t),i=e;return $(e.customData.operationType,r,"argument-error"),$((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),zg._fromError(r,i)}/**
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
 */function WD(t,e){return je(t,"POST","/v2/accounts/mfaEnrollment:start",Me(t,e))}function HD(t,e){return je(t,"POST","/v2/accounts/mfaEnrollment:finalize",Me(t,e))}function qD(t,e){return je(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Me(t,e))}class Wg{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Bl._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Wg(e)}async getSession(){return Vi._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await pr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await pr(this.user,qD(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Cf=new WeakMap;function GD(t){const e=K(t);return Cf.has(e)||Cf.set(e,Wg._fromUser(e)),Cf.get(e)}const Ju="__sak";/**
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
 */let xS=class{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ju,"1"),this.storage.removeItem(Ju),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};/**
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
 */function KD(){const t=ae();return jg(t)||Lo(t)}const QD=1e3,YD=10;let OS=class extends xS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=KD()&&xO(),this.fallbackToPolling=pS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);NO()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,YD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},QD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}};OS.type="LOCAL";const Hg=OS;/**
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
 */let DS=class extends xS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}};DS.type="SESSION";const rs=DS;/**
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
 */function JD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */let LS=class MS{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new MS(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),c=await JD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};LS.receivers=[];/**
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
 */function zl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */let XD=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=zl("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const g=f;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(d),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}};/**
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
 */function ze(){return window}function ZD(t){ze().location.href=t}/**
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
 */function qg(){return typeof ze().WorkerGlobalScope<"u"&&typeof ze().importScripts=="function"}async function eL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function nL(){return qg()?self:null}/**
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
 */const jS="firebaseLocalStorageDb",rL=1,Xu="firebaseLocalStorage",FS="fbase_key";let Wl=class{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}};function th(t,e){return t.transaction([Xu],e?"readwrite":"readonly").objectStore(Xu)}function iL(){const t=indexedDB.deleteDatabase(jS);return new Wl(t).toPromise()}function Xp(){const t=indexedDB.open(jS,rL);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Xu,{keyPath:FS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Xu)?e(r):(r.close(),await iL(),e(await Xp()))})})}async function bw(t,e,n){const r=th(t,!0).put({[FS]:e,value:n});return new Wl(r).toPromise()}async function sL(t,e){const n=th(t,!1).get(e),r=await new Wl(n).toPromise();return r===void 0?null:r.value}function Nw(t,e){const n=th(t,!0).delete(e);return new Wl(n).toPromise()}const oL=800,aL=3;let VS=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>aL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=LS._getInstance(nL()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await eL(),!this.activeServiceWorker)return;this.sender=new XD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xp();return await bw(e,Ju,"1"),await Nw(e,Ju),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>bw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>sL(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Nw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=th(i,!1).getAll();return new Wl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};VS.type="LOCAL";const Il=VS;/**
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
 */function lL(t,e){return je(t,"POST","/v2/accounts/mfaSignIn:start",Me(t,e))}function cL(t,e){return je(t,"POST","/v2/accounts/mfaSignIn:finalize",Me(t,e))}/**
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
 */const uL=500,dL=6e4,Lc=1e12;class hL{constructor(e){this.auth=e,this.counter=Lc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new fL(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Lc;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Lc;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Lc;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class fL{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;$(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=pL(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},dL)},uL))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function pL(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const Af=gS("rcb"),mL=new Vl(3e4,6e4);class gL{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=ze().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return $(vL(n),e,"argument-error"),this.shouldResolveImmediately(n)&&_w(ze().grecaptcha)?Promise.resolve(ze().grecaptcha):new Promise((r,i)=>{const s=ze().setTimeout(()=>{i(Qe(e,"network-request-failed"))},mL.get());ze()[Af]=()=>{ze().clearTimeout(s),delete ze()[Af];const a=ze().grecaptcha;if(!a||!_w(a)){i(Qe(e,"internal-error"));return}const c=a.render;a.render=(u,d)=>{const f=c(u,d);return this.counter++,f},this.hostLanguage=n,r(a)};const o=`${VO()}?${Pn({onload:Af,render:"explicit",hl:n})}`;Fg(o).catch(()=>{clearTimeout(s),i(Qe(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=ze().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function vL(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class yL{async load(e){return new hL(e)}clearedOneInstance(){}}/**
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
 */const US="recaptcha",_L={theme:"light",type:"image"};let wL=class{constructor(e,n,r=Object.assign({},_L)){this.parameters=r,this.type=US,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Le(e),this.isInvisible=this.parameters.size==="invisible",$(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;$(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new yL:new gL,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){$(!this.parameters.sitekey,this.auth,"argument-error"),$(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),$(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=ze()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){$(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){$(Lg()&&!qg(),this.auth,"internal-error"),await EL(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await yO(this.auth);$(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return $(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function EL(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class Gg{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Hi._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function IL(t,e,n){if(fe(t.app))return Promise.reject(rt(t));const r=Le(t),i=await nh(r,e,K(n));return new Gg(i,s=>Zd(r,s))}async function TL(t,e,n){const r=K(t);await Xd(!1,r,"phone");const i=await nh(r.auth,e,K(n));return new Gg(i,s=>CS(r,s))}async function SL(t,e,n){const r=K(t);if(fe(r.auth.app))return Promise.reject(rt(r.auth));const i=await nh(r.auth,e,K(n));return new Gg(i,s=>AS(r,s))}async function nh(t,e,n){var r;const i=await n.verify();try{$(typeof i=="string",t,"argument-error"),$(n.type===US,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return $(o.type==="enroll",t,"internal-error"),(await WD(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{$(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return $(a,t,"missing-multi-factor-info"),(await lL(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await oD(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function kL(t,e){const n=K(t);if(fe(n.auth.app))return Promise.reject(rt(n.auth));await Vg(n,e)}/**
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
 */let is=class lu{constructor(e){this.providerId=lu.PROVIDER_ID,this.auth=Le(e)}verifyPhoneNumber(e,n){return nh(this.auth,e,K(n))}static credential(e,n){return Hi._fromVerification(e,n)}static credentialFromResult(e){const n=e;return lu.credentialFromTaggedObject(n)}static credentialFromError(e){return lu.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Hi._fromTokenResponse(n,r):null}};is.PROVIDER_ID="phone";is.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function gs(t,e){return e?Gt(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */let Kg=class extends Mo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return or(e,this._buildIdpRequest())}_linkToIdToken(e,n){return or(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return or(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}};function RL(t){return RS(t.auth,new Kg(t),t.bypassAuthState)}function CL(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),kS(n,new Kg(t),t.bypassAuthState)}async function AL(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),Vg(n,new Kg(t),t.bypassAuthState)}/**
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
 */let $S=class{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return RL;case"linkViaPopup":case"linkViaRedirect":return AL;case"reauthViaPopup":case"reauthViaRedirect":return CL;default:ft(this.auth,"internal-error")}}resolve(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};/**
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
 */const PL=new Vl(2e3,1e4);async function bL(t,e,n){if(fe(t.app))return Promise.reject(Qe(t,"operation-not-supported-in-this-environment"));const r=Le(t);Do(t,e,Sr);const i=gs(r,n);return new rh(r,"signInViaPopup",e,i).executeNotNull()}async function NL(t,e,n){const r=K(t);if(fe(r.auth.app))return Promise.reject(Qe(r.auth,"operation-not-supported-in-this-environment"));Do(r.auth,e,Sr);const i=gs(r.auth,n);return new rh(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function xL(t,e,n){const r=K(t);Do(r.auth,e,Sr);const i=gs(r.auth,n);return new rh(r.auth,"linkViaPopup",e,i,r).executeNotNull()}let rh=class ka extends $S{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ka.currentPopupAction&&ka.currentPopupAction.cancel(),ka.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){Cn(this.filter.length===1,"Popup operations only handle one event");const e=zl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ka.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,PL.get())};e()}};rh.currentPopupAction=null;/**
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
 */const OL="pendingRedirect",Va=new Map;let DL=class extends $S{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Va.get(this.auth._key());if(!e){try{const r=await LL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Va.set(this.auth._key(),e)}return this.bypassAuthState||Va.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function LL(t,e){const n=zS(e),r=BS(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Qg(t,e){return BS(t)._set(zS(e),"true")}function ML(){Va.clear()}function Yg(t,e){Va.set(t._key(),e)}function BS(t){return Gt(t._redirectPersistence)}function zS(t){return Wi(OL,t.config.apiKey,t.name)}/**
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
 */function jL(t,e,n){return FL(t,e,n)}async function FL(t,e,n){if(fe(t.app))return Promise.reject(rt(t));const r=Le(t);Do(t,e,Sr),await r._initializationPromise;const i=gs(r,n);return await Qg(i,r),i._openRedirect(r,e,"signInViaRedirect")}function VL(t,e,n){return UL(t,e,n)}async function UL(t,e,n){const r=K(t);if(Do(r.auth,e,Sr),fe(r.auth.app))return Promise.reject(rt(r.auth));await r.auth._initializationPromise;const i=gs(r.auth,n);await Qg(i,r.auth);const s=await WS(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function $L(t,e,n){return BL(t,e,n)}async function BL(t,e,n){const r=K(t);Do(r.auth,e,Sr),await r.auth._initializationPromise;const i=gs(r.auth,n);await Xd(!1,r,e.providerId),await Qg(i,r.auth);const s=await WS(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function zL(t,e){return await Le(t)._initializationPromise,ih(t,e,!1)}async function ih(t,e,n=!1){if(fe(t.app))return Promise.reject(rt(t));const r=Le(t),i=gs(r,e),o=await new DL(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function WS(t){const e=zl(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const WL=10*60*1e3;let HS=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HL(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!qS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Qe(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=WL&&this.cachedEventUids.clear(),this.cachedEventUids.has(xw(e))}saveEventToCache(e){this.cachedEventUids.add(xw(e)),this.lastProcessedEventTime=Date.now()}};function xw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function HL(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qS(t);default:return!1}}/**
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
 */async function GS(t,e={}){return je(t,"GET","/v1/projects",e)}/**
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
 */const qL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,GL=/^https?/;async function KL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await GS(t);for(const n of e)try{if(QL(n))return}catch{}ft(t,"unauthorized-domain")}function QL(t){const e=_l(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!GL.test(n))return!1;if(qL.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const YL=new Vl(3e4,6e4);function Ow(){const t=ze().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function JL(t){return new Promise((e,n)=>{var r,i,s;function o(){Ow(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ow(),n(Qe(t,"network-request-failed"))},timeout:YL.get()})}if(!((i=(r=ze().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ze().gapi)===null||s===void 0)&&s.load)o();else{const a=gS("iframefcb");return ze()[a]=()=>{gapi.load?o():n(Qe(t,"network-request-failed"))},Fg(`${$O()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw cu=null,e})}let cu=null;function XL(t){return cu=cu||JL(t),cu}/**
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
 */const ZL=new Vl(5e3,15e3),eM="__/auth/iframe",tM="emulator/auth/iframe",nM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iM(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Mg(e,tM):`https://${t.config.authDomain}/${eM}`,r={apiKey:e.apiKey,appName:t.name,v:en},i=rM.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Pn(r).slice(1)}`}async function sM(t){const e=await XL(t),n=ze().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:iM(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nM,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Qe(t,"network-request-failed"),a=ze().setTimeout(()=>{s(o)},ZL.get());function c(){ze().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const oM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aM=500,lM=600,cM="_blank",uM="http://localhost";let Dw=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function dM(t,e,n,r=aM,i=lM){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},oM),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ae().toLowerCase();n&&(a=uS(u)?cM:n),cS(u)&&(e=e||uM,c.scrollbars="yes");const d=Object.entries(c).reduce((g,[R,P])=>`${g}${R}=${P},`,"");if(bO(u)&&a!=="_self")return hM(e||"",a),new Dw(null);const f=window.open(e||"",a,d);$(f,t,"popup-blocked");try{f.focus()}catch{}return new Dw(f)}function hM(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const fM="__/auth/handler",pM="emulator/auth/handler",mM=encodeURIComponent("fac");async function Zp(t,e,n,r,i,s){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:en,eventId:i};if(e instanceof Sr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",$T(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries(s||{}))o[d]=f}if(e instanceof Fo){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=await t._getAppCheckToken(),u=c?`#${mM}=${encodeURIComponent(c)}`:"";return`${gM(t)}?${Pn(a).slice(1)}${u}`}function gM({config:t}){return t.emulator?Mg(t,pM):`https://${t.authDomain}/${fM}`}/**
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
 */const Pf="webStorageSupport";let vM=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rs,this._completeRedirectFn=ih,this._overrideRedirectResult=Yg}async _openPopup(e,n,r,i){var s;Cn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Zp(e,n,r,_l(),i);return dM(e,o,zl())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Zp(e,n,r,_l(),i);return ZD(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Cn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await sM(e),r=new HS(e);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Pf,{type:Pf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Pf];o!==void 0&&n(!!o),ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=KL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return pS()||jg()||Lo()}};const yM=vM;class _M{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Un("unexpected MultiFactorSessionType")}}}class Jg extends _M{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Jg(e)}_finalizeEnroll(e,n,r){return HD(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return cL(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class KS{constructor(){}static assertion(e){return Jg._fromCredential(e)}}KS.FACTOR_ID="phone";var Lw="@firebase/auth",Mw="1.7.5";/**
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
 */let wM=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};/**
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
 */function EM(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function IM(t){$t(new bt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mS(t)},u=new jO(r,i,s,c);return HO(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$t(new bt("auth-internal",e=>{const n=Le(e.getProvider("auth").getImmediate());return(r=>new wM(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nt(Lw,Mw,EM(t)),nt(Lw,Mw,"esm2017")}/**
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
 */const TM=5*60;Rg("authIdTokenMaxAge");function SM(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}FO({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Qe("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",SM().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});IM("Browser");/**
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
 */function ss(){return window}/**
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
 */const kM=2e3;async function RM(t,e,n){var r;const{BuildInfo:i}=ss();Cn(e.sessionId,"AuthEvent did not contain a session ID");const s=await NM(e.sessionId),o={};return Lo()?o.ibi=i.packageName:Ul()?o.apn=i.packageName:ft(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Zp(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function CM(t){const{BuildInfo:e}=ss(),n={};Lo()?n.iosBundleId=e.packageName:Ul()?n.androidPackageName=e.packageName:ft(t,"operation-not-supported-in-this-environment"),await GS(t,n)}function AM(t){const{cordova:e}=ss();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,PO()?"_blank":"_system","location=yes"),n(i)})})}async function PM(t,e,n){const{cordova:r}=ss();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var f;s();const g=(f=r.plugins.browsertab)===null||f===void 0?void 0:f.close;typeof g=="function"&&g(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(Qe(t,"redirect-cancelled-by-user"))},kM))}function d(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),Ul()&&document.addEventListener("visibilitychange",d,!1),i=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",d,!1),a&&window.clearTimeout(a)}})}finally{i()}}function bM(t){var e,n,r,i,s,o,a,c,u,d;const f=ss();$(typeof((e=f==null?void 0:f.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),$(typeof((n=f==null?void 0:f.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),$(typeof((s=(i=(r=f==null?void 0:f.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),$(typeof((c=(a=(o=f==null?void 0:f.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),$(typeof((d=(u=f==null?void 0:f.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||d===void 0?void 0:d.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function NM(t){const e=xM(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function xM(t){if(Cn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const OM=20;class DM extends HS{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function LM(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:FM(),postBody:null,tenantId:t.tenantId,error:Qe(t,"no-auth-event")}}function MM(t,e){return em()._set(tm(t),e)}async function jw(t){const e=await em()._get(tm(t));return e&&await em()._remove(tm(t)),e}function jM(t,e){var n,r;const i=UM(e);if(i.includes("/__/auth/callback")){const s=uu(i),o=s.firebaseError?VM(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],c=a?Qe(a):null;return c?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function FM(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<OM;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function em(){return Gt(Hg)}function tm(t){return Wi("authEvent",t.config.apiKey,t.name)}function VM(t){try{return JSON.parse(t)}catch{return null}}function UM(t){const e=uu(t),n=e.link?decodeURIComponent(e.link):void 0,r=uu(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return uu(i).link||i||r||n||t}function uu(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return In(n.join("?"))}/**
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
 */const $M=500;class BM{constructor(){this._redirectPersistence=rs,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=ih,this._overrideRedirectResult=Yg}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new DM(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){ft(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){bM(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),ML(),await this._originValidation(e);const o=LM(e,r,i);await MM(e,o);const a=await RM(e,o,n),c=await AM(a);return PM(e,s,c)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CM(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=ss(),o=setTimeout(async()=>{await jw(e),n.onEvent(Fw())},$M),a=async d=>{clearTimeout(o);const f=await jw(e);let g=null;f&&(d!=null&&d.url)&&(g=jM(f,d.url)),n.onEvent(g||Fw())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=i,u=`${s.packageName.toLowerCase()}://`;ss().handleOpenURL=async d=>{if(d.toLowerCase().startsWith(u)&&a({url:d}),typeof c=="function")try{c(d)}catch(f){console.error(f)}}}}const zM=BM;function Fw(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Qe("no-auth-event")}}/**
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
 */function WM(t,e){Le(t)._logFramework(e)}var HM="@firebase/auth-compat",qM="0.5.10";/**
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
 */const GM=1e3;function Ua(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function KM(){return Ua()==="http:"||Ua()==="https:"}function QS(t=ae()){return!!((Ua()==="file:"||Ua()==="ionic:"||Ua()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function QM(){return zd()||Cg()}function YM(){return Ag()&&(document==null?void 0:document.documentMode)===11}function JM(t=ae()){return/Edge\/\d+/.test(t)}function XM(t=ae()){return YM()||JM(t)}function YS(){try{const t=self.localStorage,e=zl();if(t)return t.setItem(e,"1"),t.removeItem(e),XM()?ml():!0}catch{return Xg()&&ml()}return!1}function Xg(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function bf(){return(KM()||Bd()||QS())&&!QM()&&YS()&&!Xg()}function JS(){return QS()&&typeof document<"u"}async function ZM(){return JS()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},GM);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function ej(){return typeof window<"u"?window:null}/**
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
 */const Ht={LOCAL:"local",NONE:"none",SESSION:"session"},fa=$,XS="persistence";function tj(t,e){if(fa(Object.values(Ht).includes(e),t,"invalid-persistence-type"),zd()){fa(e!==Ht.SESSION,t,"unsupported-persistence-type");return}if(Cg()){fa(e===Ht.NONE,t,"unsupported-persistence-type");return}if(Xg()){fa(e===Ht.NONE||e===Ht.LOCAL&&ml(),t,"unsupported-persistence-type");return}fa(e===Ht.NONE||YS(),t,"unsupported-persistence-type")}async function nm(t){await t._initializationPromise;const e=ZS(),n=Wi(XS,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function nj(t,e){const n=ZS();if(!n)return[];const r=Wi(XS,t,e);switch(n.getItem(r)){case Ht.NONE:return[po];case Ht.LOCAL:return[Il,rs];case Ht.SESSION:return[rs];default:return[]}}function ZS(){var t;try{return((t=ej())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const rj=$;class Kr{constructor(){this.browserResolver=Gt(yM),this.cordovaResolver=Gt(zM),this.underlyingResolver=null,this._redirectPersistence=rs,this._completeRedirectFn=ih,this._overrideRedirectResult=Yg}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return JS()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return rj(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await ZM();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function ek(t){return t.unwrap()}function ij(t){return t.wrapped()}/**
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
 */function sj(t){return tk(t)}function oj(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new aj(t,zD(t,e))}else if(r){const i=tk(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function tk(t){const{_tokenResponse:e}=t instanceof He?t.customData:t;if(!e)return null;if(!(t instanceof He)&&"temporaryProof"in e&&"phoneNumber"in e)return is.credentialFromResult(t);const n=e.providerId;if(!n||n===ha.PASSWORD)return null;let r;switch(n){case ha.GOOGLE:r=Qd;break;case ha.FACEBOOK:r=Kd;break;case ha.GITHUB:r=Yd;break;case ha.TWITTER:r=Jd;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?mo._create(n,a):ns._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Xs(n).credential({idToken:i,accessToken:s,rawNonce:c})}return t instanceof He?r.credentialFromError(t):r.credentialFromResult(t)}function Ot(t,e){return e.catch(n=>{throw n instanceof He&&oj(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:sj(n),additionalUserInfo:BD(n),user:sh.getOrCreate(i)}})}async function rm(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Ot(t,n.confirm(r))}}class aj{constructor(e,n){this.resolver=n,this.auth=ij(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Ot(ek(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */let sh=class Ra{constructor(e){this._delegate=e,this.multiFactor=GD(e)}static getOrCreate(e){return Ra.USER_MAP.has(e)||Ra.USER_MAP.set(e,new Ra(e)),Ra.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Ot(this.auth,CS(this._delegate,e))}async linkWithPhoneNumber(e,n){return rm(this.auth,TL(this._delegate,e,n))}async linkWithPopup(e){return Ot(this.auth,xL(this._delegate,e,Kr))}async linkWithRedirect(e){return await nm(Le(this.auth)),$L(this._delegate,e,Kr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Ot(this.auth,AS(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return rm(this.auth,SL(this._delegate,e,n))}reauthenticateWithPopup(e){return Ot(this.auth,NL(this._delegate,e,Kr))}async reauthenticateWithRedirect(e){return await nm(Le(this.auth)),VL(this._delegate,e,Kr)}sendEmailVerification(e){return ND(this._delegate,e)}async unlink(e){return await vD(this._delegate,e),this}updateEmail(e){return LD(this._delegate,e)}updatePassword(e){return MD(this._delegate,e)}updatePhoneNumber(e){return kL(this._delegate,e)}updateProfile(e){return DD(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return xD(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};sh.USER_MAP=new WeakMap;/**
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
 */const pa=$;class im{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;pa(r,"invalid-api-key",{appName:e.name}),pa(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Kr:void 0;this._delegate=n.initialize({options:{persistence:lj(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(lO),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?sh.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){qO(this._delegate,e,n)}applyActionCode(e){return ID(this._delegate,e)}checkActionCode(e){return PS(this._delegate,e)}confirmPasswordReset(e,n){return ED(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Ot(this._delegate,SD(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return bD(this._delegate,e)}isSignInWithEmailLink(e){return CD(this._delegate,e)}async getRedirectResult(){pa(bf(),this._delegate,"operation-not-supported-in-this-environment");const e=await zL(this._delegate,Kr);return e?Ot(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){WM(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=Vw(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=Vw(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return RD(this._delegate,e,n)}sendPasswordResetEmail(e,n){return wD(this._delegate,e,n||void 0)}async setPersistence(e){tj(this._delegate,e);let n;switch(e){case Ht.SESSION:n=rs;break;case Ht.LOCAL:n=await Gt(Il)._isAvailable()?Il:Hg;break;case Ht.NONE:n=po;break;default:return ft("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Ot(this._delegate,mD(this._delegate))}signInWithCredential(e){return Ot(this._delegate,Zd(this._delegate,e))}signInWithCustomToken(e){return Ot(this._delegate,_D(this._delegate,e))}signInWithEmailAndPassword(e,n){return Ot(this._delegate,kD(this._delegate,e,n))}signInWithEmailLink(e,n){return Ot(this._delegate,AD(this._delegate,e,n))}signInWithPhoneNumber(e,n){return rm(this._delegate,IL(this._delegate,e,n))}async signInWithPopup(e){return pa(bf(),this._delegate,"operation-not-supported-in-this-environment"),Ot(this._delegate,bL(this._delegate,e,Kr))}async signInWithRedirect(e){return pa(bf(),this._delegate,"operation-not-supported-in-this-environment"),await nm(this._delegate),jL(this._delegate,e,Kr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return TD(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}im.Persistence=Ht;function Vw(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&sh.getOrCreate(o)),error:e,complete:n}}function lj(t,e){const n=nj(t,e);if(typeof self<"u"&&!n.includes(Il)&&n.push(Il),typeof window<"u")for(const r of[Hg,rs])n.includes(r)||n.push(r);return n.includes(po)||n.push(po),n}/**
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
 */class Zg{constructor(){this.providerId="phone",this._delegate=new is(ek(xo.auth()))}static credential(e,n){return is.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Zg.PHONE_SIGN_IN_METHOD=is.PHONE_SIGN_IN_METHOD;Zg.PROVIDER_ID=is.PROVIDER_ID;/**
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
 */const cj=$;class uj{constructor(e,n,r=xo.app()){var i;cj((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new wL(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const dj="auth-compat";function hj(t){t.INTERNAL.registerComponent(new bt(dj,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new im(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Ss.EMAIL_SIGNIN,PASSWORD_RESET:Ss.PASSWORD_RESET,RECOVER_EMAIL:Ss.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Ss.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Ss.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Ss.VERIFY_EMAIL}},EmailAuthProvider:jo,FacebookAuthProvider:Kd,GithubAuthProvider:Yd,GoogleAuthProvider:Qd,OAuthProvider:Xs,SAMLAuthProvider:Yu,PhoneAuthProvider:Zg,PhoneMultiFactorGenerator:KS,RecaptchaVerifier:uj,TwitterAuthProvider:Jd,Auth:im,AuthCredential:Mo,Error:He}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(HM,qM)}hj(xo);var fj="firebase",pj="10.12.4";/**
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
 */nt(fj,pj,"app");/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const mj={};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Mc(t){return Object.isFrozen(t)&&Object.isFrozen(t.raw)}function jc(t){return t.toString().indexOf("`")===-1}jc(t=>t``)||jc(t=>t`\0`)||jc(t=>t`\n`)||jc(t=>t`\u0000`);Mc``&&Mc`\0`&&Mc`\n`&&Mc`\u0000`;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */let nk="google#safe";function gj(){if(typeof window<"u")return window.trustedTypes}function rk(){var t;return nk!==""&&(t=gj())!==null&&t!==void 0?t:null}let Fc;function vj(){var t,e;if(Fc===void 0)try{Fc=(e=(t=rk())===null||t===void 0?void 0:t.createPolicy(nk,{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n}))!==null&&e!==void 0?e:null}catch{Fc=null}return Fc}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */class ik{constructor(e,n){this.privateDoNotAccessOrElseWrappedResourceUrl=e}toString(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()}}function Uw(t){var e;const n=t,r=(e=vj())===null||e===void 0?void 0:e.createScriptURL(n);return r??new ik(n,mj)}function yj(t){var e;if(!((e=rk())===null||e===void 0)&&e.isScriptURL(t))return t;if(t instanceof ik)return t.privateDoNotAccessOrElseWrappedResourceUrl;{let n="";throw new Error(n)}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function _j(t,...e){if(e.length===0)return Uw(t[0]);t[0].toLowerCase();let n=t[0];for(let r=0;r<e.length;r++)n+=encodeURIComponent(e[r])+t[r+1];return Uw(n)}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function wj(t){return Ej("script",t)}function Ej(t,e){var n;const r=e.document,i=(n=r.querySelector)===null||n===void 0?void 0:n.call(r,`${t}[nonce]`);return i&&(i.nonce||i.getAttribute("nonce"))||""}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Ij(t){const e=t.ownerDocument&&t.ownerDocument.defaultView,n=wj(e||window);n&&t.setAttribute("nonce",n)}function Tj(t,e,n){t.src=yj(e),Ij(t)}const sk="@firebase/installations",ev="0.6.8";/**
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
 */const ok=1e4,ak=`w:${ev}`,lk="FIS_v2",Sj="https://firebaseinstallations.googleapis.com/v1",kj=60*60*1e3,Rj="installations",Cj="Installations";/**
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
 */const Aj={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},os=new hn(Rj,Cj,Aj);function ck(t){return t instanceof He&&t.code.includes("request-failed")}/**
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
 */function uk({projectId:t}){return`${Sj}/projects/${t}/installations`}function dk(t){return{token:t.token,requestStatus:2,expiresIn:bj(t.expiresIn),creationTime:Date.now()}}async function hk(t,e){const r=(await e.json()).error;return os.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function fk({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Pj(t,{refreshToken:e}){const n=fk(t);return n.append("Authorization",Nj(e)),n}async function pk(t){const e=await t();return e.status>=500&&e.status<600?t():e}function bj(t){return Number(t.replace("s","000"))}function Nj(t){return`${lk} ${t}`}/**
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
 */async function xj({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=uk(t),i=fk(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:lk,appId:t.appId,sdkVersion:ak},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await pk(()=>fetch(r,a));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:dk(u.authToken)}}else throw await hk("Create Installation",c)}/**
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
 */function mk(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Oj(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Dj=/^[cdef][\w-]{21}$/,sm="";function Lj(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Mj(t);return Dj.test(n)?n:sm}catch{return sm}}function Mj(t){return Oj(t).substr(0,22)}/**
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
 */function oh(t){return`${t.appName}!${t.appId}`}/**
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
 */const gk=new Map;function vk(t,e){const n=oh(t);yk(n,e),jj(n,e)}function yk(t,e){const n=gk.get(t);if(n)for(const r of n)r(e)}function jj(t,e){const n=Fj();n&&n.postMessage({key:t,fid:e}),Vj()}let Ui=null;function Fj(){return!Ui&&"BroadcastChannel"in self&&(Ui=new BroadcastChannel("[Firebase] FID Change"),Ui.onmessage=t=>{yk(t.data.key,t.data.fid)}),Ui}function Vj(){gk.size===0&&Ui&&(Ui.close(),Ui=null)}/**
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
 */const Uj="firebase-installations-database",$j=1,as="firebase-installations-store";let Nf=null;function tv(){return Nf||(Nf=qT(Uj,$j,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(as)}}})),Nf}async function Zu(t,e){const n=oh(t),i=(await tv()).transaction(as,"readwrite"),s=i.objectStore(as),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&vk(t,e.fid),e}async function _k(t){const e=oh(t),r=(await tv()).transaction(as,"readwrite");await r.objectStore(as).delete(e),await r.done}async function ah(t,e){const n=oh(t),i=(await tv()).transaction(as,"readwrite"),s=i.objectStore(as),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&vk(t,a.fid),a}/**
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
 */async function nv(t){let e;const n=await ah(t.appConfig,r=>{const i=Bj(r),s=zj(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===sm?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Bj(t){const e=t||{fid:Lj(),registrationStatus:0};return wk(e)}function zj(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(os.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Wj(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Hj(t)}:{installationEntry:e}}async function Wj(t,e){try{const n=await xj(t,e);return Zu(t.appConfig,n)}catch(n){throw ck(n)&&n.customData.serverCode===409?await _k(t.appConfig):await Zu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Hj(t){let e=await $w(t.appConfig);for(;e.registrationStatus===1;)await mk(100),e=await $w(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await nv(t);return r||n}return e}function $w(t){return ah(t,e=>{if(!e)throw os.create("installation-not-found");return wk(e)})}function wk(t){return qj(t)?{fid:t.fid,registrationStatus:0}:t}function qj(t){return t.registrationStatus===1&&t.registrationTime+ok<Date.now()}/**
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
 */async function Gj({appConfig:t,heartbeatServiceProvider:e},n){const r=Kj(t,n),i=Pj(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:ak,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await pk(()=>fetch(r,a));if(c.ok){const u=await c.json();return dk(u)}else throw await hk("Generate Auth Token",c)}function Kj(t,{fid:e}){return`${uk(t)}/${e}/authTokens:generate`}/**
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
 */async function rv(t,e=!1){let n;const r=await ah(t.appConfig,s=>{if(!Ek(s))throw os.create("not-registered");const o=s.authToken;if(!e&&Jj(o))return s;if(o.requestStatus===1)return n=Qj(t,e),s;{if(!navigator.onLine)throw os.create("app-offline");const a=Zj(s);return n=Yj(t,a),a}});return n?await n:r.authToken}async function Qj(t,e){let n=await Bw(t.appConfig);for(;n.authToken.requestStatus===1;)await mk(100),n=await Bw(t.appConfig);const r=n.authToken;return r.requestStatus===0?rv(t,e):r}function Bw(t){return ah(t,e=>{if(!Ek(e))throw os.create("not-registered");const n=e.authToken;return e2(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Yj(t,e){try{const n=await Gj(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Zu(t.appConfig,r),n}catch(n){if(ck(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await _k(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Zu(t.appConfig,r)}throw n}}function Ek(t){return t!==void 0&&t.registrationStatus===2}function Jj(t){return t.requestStatus===2&&!Xj(t)}function Xj(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+kj}function Zj(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function e2(t){return t.requestStatus===1&&t.requestTime+ok<Date.now()}/**
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
 */async function t2(t){const e=t,{installationEntry:n,registrationPromise:r}=await nv(e);return r?r.catch(console.error):rv(e).catch(console.error),n.fid}/**
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
 */async function n2(t,e=!1){const n=t;return await r2(n),(await rv(n,e)).token}async function r2(t){const{registrationPromise:e}=await nv(t);e&&await e}/**
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
 */function i2(t){if(!t||!t.options)throw xf("App Configuration");if(!t.name)throw xf("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw xf(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function xf(t){return os.create("missing-app-config-values",{valueName:t})}/**
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
 */const Ik="installations",s2="installations-internal",o2=t=>{const e=t.getProvider("app").getImmediate(),n=i2(e),r=Ir(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},a2=t=>{const e=t.getProvider("app").getImmediate(),n=Ir(e,Ik).getImmediate();return{getId:()=>t2(n),getToken:i=>n2(n,i)}};function l2(){$t(new bt(Ik,o2,"PUBLIC")),$t(new bt(s2,a2,"PRIVATE"))}l2();nt(sk,ev);nt(sk,ev,"esm2017");/**
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
 */const ed="analytics",c2="firebase_id",u2="origin",d2=60*1e3,h2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",f2="https://www.googletagmanager.com/gtag/js";/**
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
 */const Qt=new No("@firebase/analytics");/**
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
 */function Tk(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function p2(t,e){const n=document.createElement("script"),r=_j`https://www.googletagmanager.com/gtag/js?l=${t}&id=${e}`;Tj(n,r),n.async=!0,document.head.appendChild(n)}function m2(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function g2(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const c=(await Tk(n)).find(u=>u.measurementId===i);c&&await e[c.appId]}}catch(a){Qt.error(a)}t("config",i,s)}async function v2(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Tk(n);for(const c of o){const u=a.find(f=>f.measurementId===c),d=u&&e[u.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Qt.error(s)}}function y2(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,c]=o;await v2(t,e,n,a,c)}else if(s==="config"){const[a,c]=o;await g2(t,e,n,r,a,c)}else if(s==="consent"){const[a,c]=o;t("consent",a,c)}else if(s==="get"){const[a,c,u]=o;t("get",a,c,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Qt.error(a)}}return i}function _2(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=y2(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function w2(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(f2)&&n.src.includes(t))return n;return null}/**
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
 */const E2={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},an=new hn("analytics","Analytics",E2);/**
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
 */const I2=30,T2=1e3;class S2{constructor(e={},n=T2){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Sk=new S2;function k2(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function R2(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:k2(r)},s=h2.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw an.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function C2(t,e=Sk,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw an.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw an.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new b2;return setTimeout(async()=>{a.abort()},d2),kk({appId:r,apiKey:i,measurementId:s},o,a,e)}async function kk(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Sk){var s;const{appId:o,measurementId:a}=t;try{await A2(r,e)}catch(c){if(a)return Qt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await R2(t);return i.deleteThrottleMetadata(o),c}catch(c){const u=c;if(!P2(u)){if(i.deleteThrottleMetadata(o),a)return Qt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw c}const d=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?cw(n,i.intervalMillis,I2):cw(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,f),Qt.debug(`Calling attemptFetch again in ${d} millis`),kk(t,f,r,i)}}function A2(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(an.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function P2(t){if(!(t instanceof He)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class b2{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function N2(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function x2(){if(ml())try{await UT()}catch(t){return Qt.warn(an.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Qt.warn(an.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function O2(t,e,n,r,i,s,o){var a;const c=C2(t);c.then(R=>{n[R.measurementId]=R.appId,t.options.measurementId&&R.measurementId!==t.options.measurementId&&Qt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${R.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(R=>Qt.error(R)),e.push(c);const u=x2().then(R=>{if(R)return r.getId()}),[d,f]=await Promise.all([c,u]);w2(s)||p2(s,d.measurementId),i("js",new Date);const g=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return g[u2]="firebase",g.update=!0,f!=null&&(g[c2]=f),i("config",d.measurementId,g),d.measurementId}/**
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
 */class D2{constructor(e){this.app=e}_delete(){return delete $a[this.app.options.appId],Promise.resolve()}}let $a={},zw=[];const Ww={};let Of="dataLayer",L2="gtag",Hw,Rk,qw=!1;function M2(){const t=[];if(Bd()&&t.push("This is a browser extension environment."),ON()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=an.create("invalid-analytics-context",{errorInfo:e});Qt.warn(n.message)}}function j2(t,e,n){M2();const r=t.options.appId;if(!r)throw an.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Qt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw an.create("no-api-key");if($a[r]!=null)throw an.create("already-exists",{id:r});if(!qw){m2(Of);const{wrappedGtag:s,gtagCore:o}=_2($a,zw,Ww,Of,L2);Rk=s,Hw=o,qw=!0}return $a[r]=O2(t,zw,Ww,e,Hw,Of,n),new D2(t)}function F2(t=Hd()){t=K(t);const e=Ir(t,ed);return e.isInitialized()?e.getImmediate():V2(t)}function V2(t,e={}){const n=Ir(t,ed);if(n.isInitialized()){const i=n.getImmediate();if(gl(e,n.getOptions()))return i;throw an.create("already-initialized")}return n.initialize({options:e})}function U2(t,e,n,r){t=K(t),N2(Rk,$a[t.app.options.appId],e,n,r).catch(i=>Qt.error(i))}const Gw="@firebase/analytics",Kw="0.10.6";function $2(){$t(new bt(ed,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return j2(r,i,n)},"PUBLIC")),$t(new bt("analytics-internal",t,"PRIVATE")),nt(Gw,Kw),nt(Gw,Kw,"esm2017");function t(e){try{const n=e.getProvider(ed).getImmediate();return{logEvent:(r,i,s)=>U2(n,r,i,s)}}catch(n){throw an.create("interop-component-reg-failed",{reason:n})}}}$2();var Qw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ck;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,v){function S(){}S.prototype=v.prototype,T.D=v.prototype,T.prototype=new S,T.prototype.constructor=T,T.C=function(A,b,C){for(var w=Array(arguments.length-2),J=2;J<arguments.length;J++)w[J-2]=arguments[J];return v.prototype[b].apply(A,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,v,S){S||(S=0);var A=Array(16);if(typeof v=="string")for(var b=0;16>b;++b)A[b]=v.charCodeAt(S++)|v.charCodeAt(S++)<<8|v.charCodeAt(S++)<<16|v.charCodeAt(S++)<<24;else for(b=0;16>b;++b)A[b]=v[S++]|v[S++]<<8|v[S++]<<16|v[S++]<<24;v=T.g[0],S=T.g[1],b=T.g[2];var C=T.g[3],w=v+(C^S&(b^C))+A[0]+3614090360&4294967295;v=S+(w<<7&4294967295|w>>>25),w=C+(b^v&(S^b))+A[1]+3905402710&4294967295,C=v+(w<<12&4294967295|w>>>20),w=b+(S^C&(v^S))+A[2]+606105819&4294967295,b=C+(w<<17&4294967295|w>>>15),w=S+(v^b&(C^v))+A[3]+3250441966&4294967295,S=b+(w<<22&4294967295|w>>>10),w=v+(C^S&(b^C))+A[4]+4118548399&4294967295,v=S+(w<<7&4294967295|w>>>25),w=C+(b^v&(S^b))+A[5]+1200080426&4294967295,C=v+(w<<12&4294967295|w>>>20),w=b+(S^C&(v^S))+A[6]+2821735955&4294967295,b=C+(w<<17&4294967295|w>>>15),w=S+(v^b&(C^v))+A[7]+4249261313&4294967295,S=b+(w<<22&4294967295|w>>>10),w=v+(C^S&(b^C))+A[8]+1770035416&4294967295,v=S+(w<<7&4294967295|w>>>25),w=C+(b^v&(S^b))+A[9]+2336552879&4294967295,C=v+(w<<12&4294967295|w>>>20),w=b+(S^C&(v^S))+A[10]+4294925233&4294967295,b=C+(w<<17&4294967295|w>>>15),w=S+(v^b&(C^v))+A[11]+2304563134&4294967295,S=b+(w<<22&4294967295|w>>>10),w=v+(C^S&(b^C))+A[12]+1804603682&4294967295,v=S+(w<<7&4294967295|w>>>25),w=C+(b^v&(S^b))+A[13]+4254626195&4294967295,C=v+(w<<12&4294967295|w>>>20),w=b+(S^C&(v^S))+A[14]+2792965006&4294967295,b=C+(w<<17&4294967295|w>>>15),w=S+(v^b&(C^v))+A[15]+1236535329&4294967295,S=b+(w<<22&4294967295|w>>>10),w=v+(b^C&(S^b))+A[1]+4129170786&4294967295,v=S+(w<<5&4294967295|w>>>27),w=C+(S^b&(v^S))+A[6]+3225465664&4294967295,C=v+(w<<9&4294967295|w>>>23),w=b+(v^S&(C^v))+A[11]+643717713&4294967295,b=C+(w<<14&4294967295|w>>>18),w=S+(C^v&(b^C))+A[0]+3921069994&4294967295,S=b+(w<<20&4294967295|w>>>12),w=v+(b^C&(S^b))+A[5]+3593408605&4294967295,v=S+(w<<5&4294967295|w>>>27),w=C+(S^b&(v^S))+A[10]+38016083&4294967295,C=v+(w<<9&4294967295|w>>>23),w=b+(v^S&(C^v))+A[15]+3634488961&4294967295,b=C+(w<<14&4294967295|w>>>18),w=S+(C^v&(b^C))+A[4]+3889429448&4294967295,S=b+(w<<20&4294967295|w>>>12),w=v+(b^C&(S^b))+A[9]+568446438&4294967295,v=S+(w<<5&4294967295|w>>>27),w=C+(S^b&(v^S))+A[14]+3275163606&4294967295,C=v+(w<<9&4294967295|w>>>23),w=b+(v^S&(C^v))+A[3]+4107603335&4294967295,b=C+(w<<14&4294967295|w>>>18),w=S+(C^v&(b^C))+A[8]+1163531501&4294967295,S=b+(w<<20&4294967295|w>>>12),w=v+(b^C&(S^b))+A[13]+2850285829&4294967295,v=S+(w<<5&4294967295|w>>>27),w=C+(S^b&(v^S))+A[2]+4243563512&4294967295,C=v+(w<<9&4294967295|w>>>23),w=b+(v^S&(C^v))+A[7]+1735328473&4294967295,b=C+(w<<14&4294967295|w>>>18),w=S+(C^v&(b^C))+A[12]+2368359562&4294967295,S=b+(w<<20&4294967295|w>>>12),w=v+(S^b^C)+A[5]+4294588738&4294967295,v=S+(w<<4&4294967295|w>>>28),w=C+(v^S^b)+A[8]+2272392833&4294967295,C=v+(w<<11&4294967295|w>>>21),w=b+(C^v^S)+A[11]+1839030562&4294967295,b=C+(w<<16&4294967295|w>>>16),w=S+(b^C^v)+A[14]+4259657740&4294967295,S=b+(w<<23&4294967295|w>>>9),w=v+(S^b^C)+A[1]+2763975236&4294967295,v=S+(w<<4&4294967295|w>>>28),w=C+(v^S^b)+A[4]+1272893353&4294967295,C=v+(w<<11&4294967295|w>>>21),w=b+(C^v^S)+A[7]+4139469664&4294967295,b=C+(w<<16&4294967295|w>>>16),w=S+(b^C^v)+A[10]+3200236656&4294967295,S=b+(w<<23&4294967295|w>>>9),w=v+(S^b^C)+A[13]+681279174&4294967295,v=S+(w<<4&4294967295|w>>>28),w=C+(v^S^b)+A[0]+3936430074&4294967295,C=v+(w<<11&4294967295|w>>>21),w=b+(C^v^S)+A[3]+3572445317&4294967295,b=C+(w<<16&4294967295|w>>>16),w=S+(b^C^v)+A[6]+76029189&4294967295,S=b+(w<<23&4294967295|w>>>9),w=v+(S^b^C)+A[9]+3654602809&4294967295,v=S+(w<<4&4294967295|w>>>28),w=C+(v^S^b)+A[12]+3873151461&4294967295,C=v+(w<<11&4294967295|w>>>21),w=b+(C^v^S)+A[15]+530742520&4294967295,b=C+(w<<16&4294967295|w>>>16),w=S+(b^C^v)+A[2]+3299628645&4294967295,S=b+(w<<23&4294967295|w>>>9),w=v+(b^(S|~C))+A[0]+4096336452&4294967295,v=S+(w<<6&4294967295|w>>>26),w=C+(S^(v|~b))+A[7]+1126891415&4294967295,C=v+(w<<10&4294967295|w>>>22),w=b+(v^(C|~S))+A[14]+2878612391&4294967295,b=C+(w<<15&4294967295|w>>>17),w=S+(C^(b|~v))+A[5]+4237533241&4294967295,S=b+(w<<21&4294967295|w>>>11),w=v+(b^(S|~C))+A[12]+1700485571&4294967295,v=S+(w<<6&4294967295|w>>>26),w=C+(S^(v|~b))+A[3]+2399980690&4294967295,C=v+(w<<10&4294967295|w>>>22),w=b+(v^(C|~S))+A[10]+4293915773&4294967295,b=C+(w<<15&4294967295|w>>>17),w=S+(C^(b|~v))+A[1]+2240044497&4294967295,S=b+(w<<21&4294967295|w>>>11),w=v+(b^(S|~C))+A[8]+1873313359&4294967295,v=S+(w<<6&4294967295|w>>>26),w=C+(S^(v|~b))+A[15]+4264355552&4294967295,C=v+(w<<10&4294967295|w>>>22),w=b+(v^(C|~S))+A[6]+2734768916&4294967295,b=C+(w<<15&4294967295|w>>>17),w=S+(C^(b|~v))+A[13]+1309151649&4294967295,S=b+(w<<21&4294967295|w>>>11),w=v+(b^(S|~C))+A[4]+4149444226&4294967295,v=S+(w<<6&4294967295|w>>>26),w=C+(S^(v|~b))+A[11]+3174756917&4294967295,C=v+(w<<10&4294967295|w>>>22),w=b+(v^(C|~S))+A[2]+718787259&4294967295,b=C+(w<<15&4294967295|w>>>17),w=S+(C^(b|~v))+A[9]+3951481745&4294967295,T.g[0]=T.g[0]+v&4294967295,T.g[1]=T.g[1]+(b+(w<<21&4294967295|w>>>11))&4294967295,T.g[2]=T.g[2]+b&4294967295,T.g[3]=T.g[3]+C&4294967295}r.prototype.u=function(T,v){v===void 0&&(v=T.length);for(var S=v-this.blockSize,A=this.B,b=this.h,C=0;C<v;){if(b==0)for(;C<=S;)i(this,T,C),C+=this.blockSize;if(typeof T=="string"){for(;C<v;)if(A[b++]=T.charCodeAt(C++),b==this.blockSize){i(this,A),b=0;break}}else for(;C<v;)if(A[b++]=T[C++],b==this.blockSize){i(this,A),b=0;break}}this.h=b,this.o+=v},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var v=1;v<T.length-8;++v)T[v]=0;var S=8*this.o;for(v=T.length-8;v<T.length;++v)T[v]=S&255,S/=256;for(this.u(T),T=Array(16),v=S=0;4>v;++v)for(var A=0;32>A;A+=8)T[S++]=this.g[v]>>>A&255;return T};function s(T,v){var S=a;return Object.prototype.hasOwnProperty.call(S,T)?S[T]:S[T]=v(T)}function o(T,v){this.h=v;for(var S=[],A=!0,b=T.length-1;0<=b;b--){var C=T[b]|0;A&&C==v||(S[b]=C,A=!1)}this.g=S}var a={};function c(T){return-128<=T&&128>T?s(T,function(v){return new o([v|0],0>v?-1:0)}):new o([T|0],0>T?-1:0)}function u(T){if(isNaN(T)||!isFinite(T))return f;if(0>T)return N(u(-T));for(var v=[],S=1,A=0;T>=S;A++)v[A]=T/S|0,S*=4294967296;return new o(v,0)}function d(T,v){if(T.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(T.charAt(0)=="-")return N(d(T.substring(1),v));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=u(Math.pow(v,8)),A=f,b=0;b<T.length;b+=8){var C=Math.min(8,T.length-b),w=parseInt(T.substring(b,b+C),v);8>C?(C=u(Math.pow(v,C)),A=A.j(C).add(u(w))):(A=A.j(S),A=A.add(u(w)))}return A}var f=c(0),g=c(1),R=c(16777216);t=o.prototype,t.m=function(){if(x(this))return-N(this).m();for(var T=0,v=1,S=0;S<this.g.length;S++){var A=this.i(S);T+=(0<=A?A:4294967296+A)*v,v*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(P(this))return"0";if(x(this))return"-"+N(this).toString(T);for(var v=u(Math.pow(T,6)),S=this,A="";;){var b=O(S,v).g;S=I(S,b.j(v));var C=((0<S.g.length?S.g[0]:S.h)>>>0).toString(T);if(S=b,P(S))return C+A;for(;6>C.length;)C="0"+C;A=C+A}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function P(T){if(T.h!=0)return!1;for(var v=0;v<T.g.length;v++)if(T.g[v]!=0)return!1;return!0}function x(T){return T.h==-1}t.l=function(T){return T=I(this,T),x(T)?-1:P(T)?0:1};function N(T){for(var v=T.g.length,S=[],A=0;A<v;A++)S[A]=~T.g[A];return new o(S,~T.h).add(g)}t.abs=function(){return x(this)?N(this):this},t.add=function(T){for(var v=Math.max(this.g.length,T.g.length),S=[],A=0,b=0;b<=v;b++){var C=A+(this.i(b)&65535)+(T.i(b)&65535),w=(C>>>16)+(this.i(b)>>>16)+(T.i(b)>>>16);A=w>>>16,C&=65535,w&=65535,S[b]=w<<16|C}return new o(S,S[S.length-1]&-2147483648?-1:0)};function I(T,v){return T.add(N(v))}t.j=function(T){if(P(this)||P(T))return f;if(x(this))return x(T)?N(this).j(N(T)):N(N(this).j(T));if(x(T))return N(this.j(N(T)));if(0>this.l(R)&&0>T.l(R))return u(this.m()*T.m());for(var v=this.g.length+T.g.length,S=[],A=0;A<2*v;A++)S[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<T.g.length;b++){var C=this.i(A)>>>16,w=this.i(A)&65535,J=T.i(b)>>>16,ne=T.i(b)&65535;S[2*A+2*b]+=w*ne,E(S,2*A+2*b),S[2*A+2*b+1]+=C*ne,E(S,2*A+2*b+1),S[2*A+2*b+1]+=w*J,E(S,2*A+2*b+1),S[2*A+2*b+2]+=C*J,E(S,2*A+2*b+2)}for(A=0;A<v;A++)S[A]=S[2*A+1]<<16|S[2*A];for(A=v;A<2*v;A++)S[A]=0;return new o(S,0)};function E(T,v){for(;(T[v]&65535)!=T[v];)T[v+1]+=T[v]>>>16,T[v]&=65535,v++}function k(T,v){this.g=T,this.h=v}function O(T,v){if(P(v))throw Error("division by zero");if(P(T))return new k(f,f);if(x(T))return v=O(N(T),v),new k(N(v.g),N(v.h));if(x(v))return v=O(T,N(v)),new k(N(v.g),v.h);if(30<T.g.length){if(x(T)||x(v))throw Error("slowDivide_ only works with positive integers.");for(var S=g,A=v;0>=A.l(T);)S=L(S),A=L(A);var b=M(S,1),C=M(A,1);for(A=M(A,2),S=M(S,2);!P(A);){var w=C.add(A);0>=w.l(T)&&(b=b.add(S),C=w),A=M(A,1),S=M(S,1)}return v=I(T,b.j(v)),new k(b,v)}for(b=f;0<=T.l(v);){for(S=Math.max(1,Math.floor(T.m()/v.m())),A=Math.ceil(Math.log(S)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),C=u(S),w=C.j(v);x(w)||0<w.l(T);)S-=A,C=u(S),w=C.j(v);P(C)&&(C=g),b=b.add(C),T=I(T,w)}return new k(b,T)}t.A=function(T){return O(this,T).h},t.and=function(T){for(var v=Math.max(this.g.length,T.g.length),S=[],A=0;A<v;A++)S[A]=this.i(A)&T.i(A);return new o(S,this.h&T.h)},t.or=function(T){for(var v=Math.max(this.g.length,T.g.length),S=[],A=0;A<v;A++)S[A]=this.i(A)|T.i(A);return new o(S,this.h|T.h)},t.xor=function(T){for(var v=Math.max(this.g.length,T.g.length),S=[],A=0;A<v;A++)S[A]=this.i(A)^T.i(A);return new o(S,this.h^T.h)};function L(T){for(var v=T.g.length+1,S=[],A=0;A<v;A++)S[A]=T.i(A)<<1|T.i(A-1)>>>31;return new o(S,T.h)}function M(T,v){var S=v>>5;v%=32;for(var A=T.g.length-S,b=[],C=0;C<A;C++)b[C]=0<v?T.i(C+S)>>>v|T.i(C+S+1)<<32-v:T.i(C+S);return new o(b,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Ck=o}).apply(typeof Qw<"u"?Qw:typeof self<"u"?self:typeof window<"u"?window:{});var Vc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ak,Pk,Ca,bk,du,om,Nk,xk,Ok;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,p){return l==Array.prototype||l==Object.prototype||(l[h]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vc=="object"&&Vc];for(var h=0;h<l.length;++h){var p=l[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var p=r;l=l.split(".");for(var y=0;y<l.length-1;y++){var D=l[y];if(!(D in p))break e;p=p[D]}l=l[l.length-1],y=p[l],h=h(y),h!=y&&h!=null&&e(p,l,{configurable:!0,writable:!0,value:h})}}function s(l,h){l instanceof String&&(l+="");var p=0,y=!1,D={next:function(){if(!y&&p<l.length){var j=p++;return{value:h(j,l[j]),done:!1}}return y=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(l){return l||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function u(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,p){return l.call.apply(l.bind,arguments)}function f(l,h,p){if(!l)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,y),l.apply(h,D)}}return function(){return l.apply(h,arguments)}}function g(l,h,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,g.apply(null,arguments)}function R(l,h){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),l.apply(this,y)}}function P(l,h){function p(){}p.prototype=h.prototype,l.aa=h.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(y,D,j){for(var z=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)z[ye-2]=arguments[ye];return h.prototype[D].apply(y,z)}}function x(l){const h=l.length;if(0<h){const p=Array(h);for(let y=0;y<h;y++)p[y]=l[y];return p}return[]}function N(l,h){for(let p=1;p<arguments.length;p++){const y=arguments[p];if(c(y)){const D=l.length||0,j=y.length||0;l.length=D+j;for(let z=0;z<j;z++)l[D+z]=y[z]}else l.push(y)}}class I{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function E(l){return/^[\s\xa0]*$/.test(l)}function k(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function O(l){return O[" "](l),l}O[" "]=function(){};var L=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function M(l,h,p){for(const y in l)h.call(p,l[y],y,l)}function T(l,h){for(const p in l)h.call(void 0,l[p],p,l)}function v(l){const h={};for(const p in l)h[p]=l[p];return h}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(l,h){let p,y;for(let D=1;D<arguments.length;D++){y=arguments[D];for(p in y)l[p]=y[p];for(let j=0;j<S.length;j++)p=S[j],Object.prototype.hasOwnProperty.call(y,p)&&(l[p]=y[p])}}function b(l){var h=1;l=l.split(":");const p=[];for(;0<h&&l.length;)p.push(l.shift()),h--;return l.length&&p.push(l.join(":")),p}function C(l){a.setTimeout(()=>{throw l},0)}function w(){var l=q;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class J{constructor(){this.h=this.g=null}add(h,p){const y=ne.get();y.set(h,p),this.h?this.h.next=y:this.g=y,this.h=y}}var ne=new I(()=>new re,l=>l.reset());class re{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let pe,F=!1,q=new J,H=()=>{const l=a.Promise.resolve(void 0);pe=()=>{l.then(ie)}};var ie=()=>{for(var l;l=w();){try{l.h.call(l.g)}catch(p){C(p)}var h=ne;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}F=!1};function Z(){this.s=this.s,this.C=this.C}Z.prototype.s=!1,Z.prototype.ma=function(){this.s||(this.s=!0,this.N())},Z.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ce(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}ce.prototype.h=function(){this.defaultPrevented=!0};var Ne=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return l}();function ue(l,h){if(ce.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,y=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(L){e:{try{O(h.nodeName);var D=!0;break e}catch{}D=!1}D||(h=null)}}else p=="mouseover"?h=l.fromElement:p=="mouseout"&&(h=l.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Fe[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&ue.aa.h.call(this)}}P(ue,ce);var Fe={2:"touch",3:"pen",4:"mouse"};ue.prototype.h=function(){ue.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var pt="closure_listenable_"+(1e6*Math.random()|0),fn=0;function Qn(l,h,p,y,D){this.listener=l,this.proxy=null,this.src=h,this.type=p,this.capture=!!y,this.ha=D,this.key=++fn,this.da=this.fa=!1}function bn(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Nn(l){this.src=l,this.g={},this.h=0}Nn.prototype.add=function(l,h,p,y,D){var j=l.toString();l=this.g[j],l||(l=this.g[j]=[],this.h++);var z=xn(l,h,y,D);return-1<z?(h=l[z],p||(h.fa=!1)):(h=new Qn(h,this.src,j,!!y,D),h.fa=p,l.push(h)),h};function Rr(l,h){var p=h.type;if(p in l.g){var y=l.g[p],D=Array.prototype.indexOf.call(y,h,void 0),j;(j=0<=D)&&Array.prototype.splice.call(y,D,1),j&&(bn(h),l.g[p].length==0&&(delete l.g[p],l.h--))}}function xn(l,h,p,y){for(var D=0;D<l.length;++D){var j=l[D];if(!j.da&&j.listener==h&&j.capture==!!p&&j.ha==y)return D}return-1}var On="closure_lm_"+(1e6*Math.random()|0),ve={};function Cr(l,h,p,y,D){if(Array.isArray(h)){for(var j=0;j<h.length;j++)Cr(l,h[j],p,y,D);return null}return p=zo(p),l&&l[pt]?l.K(h,p,u(y)?!!y.capture:!!y,D):Ar(l,h,p,!1,y,D)}function Ar(l,h,p,y,D,j){if(!h)throw Error("Invalid event type");var z=u(D)?!!D.capture:!!D,ye=ys(l);if(ye||(l[On]=ye=new Nn(l)),p=ye.add(h,p,y,z,j),p.proxy)return p;if(y=Ph(),p.proxy=y,y.src=l,y.listener=p,l.addEventListener)Ne||(D=z),D===void 0&&(D=!1),l.addEventListener(h.toString(),y,D);else if(l.attachEvent)l.attachEvent(Si(h.toString()),y);else if(l.addListener&&l.removeListener)l.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Ph(){function l(p){return h.call(l.src,l.listener,p)}const h=rc;return l}function nc(l,h,p,y,D){if(Array.isArray(h))for(var j=0;j<h.length;j++)nc(l,h[j],p,y,D);else y=u(y)?!!y.capture:!!y,p=zo(p),l&&l[pt]?(l=l.i,h=String(h).toString(),h in l.g&&(j=l.g[h],p=xn(j,p,y,D),-1<p&&(bn(j[p]),Array.prototype.splice.call(j,p,1),j.length==0&&(delete l.g[h],l.h--)))):l&&(l=ys(l))&&(h=l.g[h.toString()],l=-1,h&&(l=xn(h,p,y,D)),(p=-1<l?h[l]:null)&&pn(p))}function pn(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[pt])Rr(h.i,l);else{var p=l.type,y=l.proxy;h.removeEventListener?h.removeEventListener(p,y,l.capture):h.detachEvent?h.detachEvent(Si(p),y):h.addListener&&h.removeListener&&h.removeListener(y),(p=ys(h))?(Rr(p,l),p.h==0&&(p.src=null,h[On]=null)):bn(l)}}}function Si(l){return l in ve?ve[l]:ve[l]="on"+l}function rc(l,h){if(l.da)l=!0;else{h=new ue(h,this);var p=l.listener,y=l.ha||l.src;l.fa&&pn(l),l=p.call(y,h)}return l}function ys(l){return l=l[On],l instanceof Nn?l:null}var ki="__closure_events_fn_"+(1e9*Math.random()>>>0);function zo(l){return typeof l=="function"?l:(l[ki]||(l[ki]=function(h){return l.handleEvent(h)}),l[ki])}function qe(){Z.call(this),this.i=new Nn(this),this.M=this,this.F=null}P(qe,Z),qe.prototype[pt]=!0,qe.prototype.removeEventListener=function(l,h,p,y){nc(this,l,h,p,y)};function Ye(l,h){var p,y=l.F;if(y)for(p=[];y;y=y.F)p.push(y);if(l=l.M,y=h.type||h,typeof h=="string")h=new ce(h,l);else if(h instanceof ce)h.target=h.target||l;else{var D=h;h=new ce(y,l),A(h,D)}if(D=!0,p)for(var j=p.length-1;0<=j;j--){var z=h.g=p[j];D=Ri(z,y,!0,h)&&D}if(z=h.g=l,D=Ri(z,y,!0,h)&&D,D=Ri(z,y,!1,h)&&D,p)for(j=0;j<p.length;j++)z=h.g=p[j],D=Ri(z,y,!1,h)&&D}qe.prototype.N=function(){if(qe.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var p=l.g[h],y=0;y<p.length;y++)bn(p[y]);delete l.g[h],l.h--}}this.F=null},qe.prototype.K=function(l,h,p,y){return this.i.add(String(l),h,!1,p,y)},qe.prototype.L=function(l,h,p,y){return this.i.add(String(l),h,!0,p,y)};function Ri(l,h,p,y){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var D=!0,j=0;j<h.length;++j){var z=h[j];if(z&&!z.da&&z.capture==p){var ye=z.listener,ot=z.ha||z.src;z.fa&&Rr(l.i,z),D=ye.call(ot,y)!==!1&&D}}return D&&!y.defaultPrevented}function Kv(l,h,p){if(typeof l=="function")p&&(l=g(l,p));else if(l&&typeof l.handleEvent=="function")l=g(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function Qv(l){l.g=Kv(()=>{l.g=null,l.i&&(l.i=!1,Qv(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class IA extends Z{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Qv(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wo(l){Z.call(this),this.h=l,this.g={}}P(Wo,Z);var Yv=[];function Jv(l){M(l.g,function(h,p){this.g.hasOwnProperty(p)&&pn(h)},l),l.g={}}Wo.prototype.N=function(){Wo.aa.N.call(this),Jv(this)},Wo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var bh=a.JSON.stringify,TA=a.JSON.parse,SA=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Nh(){}Nh.prototype.h=null;function Xv(l){return l.h||(l.h=l.i())}function Zv(){}var Ho={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function xh(){ce.call(this,"d")}P(xh,ce);function Oh(){ce.call(this,"c")}P(Oh,ce);var Ci={},ey=null;function ic(){return ey=ey||new qe}Ci.La="serverreachability";function ty(l){ce.call(this,Ci.La,l)}P(ty,ce);function qo(l){const h=ic();Ye(h,new ty(h))}Ci.STAT_EVENT="statevent";function ny(l,h){ce.call(this,Ci.STAT_EVENT,l),this.stat=h}P(ny,ce);function Rt(l){const h=ic();Ye(h,new ny(h,l))}Ci.Ma="timingevent";function ry(l,h){ce.call(this,Ci.Ma,l),this.size=h}P(ry,ce);function Go(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function Ko(){this.g=!0}Ko.prototype.xa=function(){this.g=!1};function kA(l,h,p,y,D,j){l.info(function(){if(l.g)if(j)for(var z="",ye=j.split("&"),ot=0;ot<ye.length;ot++){var he=ye[ot].split("=");if(1<he.length){var mt=he[0];he=he[1];var gt=mt.split("_");z=2<=gt.length&&gt[1]=="type"?z+(mt+"="+he+"&"):z+(mt+"=redacted&")}}else z=null;else z=j;return"XMLHTTP REQ ("+y+") [attempt "+D+"]: "+h+`
`+p+`
`+z})}function RA(l,h,p,y,D,j,z){l.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+D+"]: "+h+`
`+p+`
`+j+" "+z})}function _s(l,h,p,y){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+AA(l,p)+(y?" "+y:"")})}function CA(l,h){l.info(function(){return"TIMEOUT: "+h})}Ko.prototype.info=function(){};function AA(l,h){if(!l.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var y=p[l];if(!(2>y.length)){var D=y[1];if(Array.isArray(D)&&!(1>D.length)){var j=D[0];if(j!="noop"&&j!="stop"&&j!="close")for(var z=1;z<D.length;z++)D[z]=""}}}}return bh(p)}catch{return h}}var sc={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},iy={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Dh;function oc(){}P(oc,Nh),oc.prototype.g=function(){return new XMLHttpRequest},oc.prototype.i=function(){return{}},Dh=new oc;function Pr(l,h,p,y){this.j=l,this.i=h,this.l=p,this.R=y||1,this.U=new Wo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new sy}function sy(){this.i=null,this.g="",this.h=!1}var oy={},Lh={};function Mh(l,h,p){l.L=1,l.v=uc(Yn(h)),l.m=p,l.P=!0,ay(l,null)}function ay(l,h){l.F=Date.now(),ac(l),l.A=Yn(l.v);var p=l.A,y=l.R;Array.isArray(y)||(y=[String(y)]),Ey(p.i,"t",y),l.C=0,p=l.j.J,l.h=new sy,l.g=Vy(l.j,p?h:null,!l.m),0<l.O&&(l.M=new IA(g(l.Y,l,l.g),l.O)),h=l.U,p=l.g,y=l.ca;var D="readystatechange";Array.isArray(D)||(D&&(Yv[0]=D.toString()),D=Yv);for(var j=0;j<D.length;j++){var z=Cr(p,D[j],y||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=l.H?v(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),qo(),kA(l.i,l.u,l.A,l.l,l.R,l.m)}Pr.prototype.ca=function(l){l=l.target;const h=this.M;h&&Jn(l)==3?h.j():this.Y(l)},Pr.prototype.Y=function(l){try{if(l==this.g)e:{const gt=Jn(this.g);var h=this.g.Ba();const Is=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||Ay(this.g)))){this.J||gt!=4||h==7||(h==8||0>=Is?qo(3):qo(2)),jh(this);var p=this.g.Z();this.X=p;t:if(ly(this)){var y=Ay(this.g);l="";var D=y.length,j=Jn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ai(this),Qo(this);var z="";break t}this.h.i=new a.TextDecoder}for(h=0;h<D;h++)this.h.h=!0,l+=this.h.i.decode(y[h],{stream:!(j&&h==D-1)});y.length=0,this.h.g+=l,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=p==200,RA(this.i,this.u,this.A,this.l,this.R,gt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var ye,ot=this.g;if((ye=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(ye)){var he=ye;break t}}he=null}if(p=he)_s(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fh(this,p);else{this.o=!1,this.s=3,Rt(12),Ai(this),Qo(this);break e}}if(this.P){p=!0;let mn;for(;!this.J&&this.C<z.length;)if(mn=PA(this,z),mn==Lh){gt==4&&(this.s=4,Rt(14),p=!1),_s(this.i,this.l,null,"[Incomplete Response]");break}else if(mn==oy){this.s=4,Rt(15),_s(this.i,this.l,z,"[Invalid Chunk]"),p=!1;break}else _s(this.i,this.l,mn,null),Fh(this,mn);if(ly(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||z.length!=0||this.h.h||(this.s=1,Rt(16),p=!1),this.o=this.o&&p,!p)_s(this.i,this.l,z,"[Invalid Chunked Response]"),Ai(this),Qo(this);else if(0<z.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Wh(mt),mt.M=!0,Rt(11))}}else _s(this.i,this.l,z,null),Fh(this,z);gt==4&&Ai(this),this.o&&!this.J&&(gt==4?Ly(this.j,this):(this.o=!1,ac(this)))}else qA(this.g),p==400&&0<z.indexOf("Unknown SID")?(this.s=3,Rt(12)):(this.s=0,Rt(13)),Ai(this),Qo(this)}}}catch{}finally{}};function ly(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function PA(l,h){var p=l.C,y=h.indexOf(`
`,p);return y==-1?Lh:(p=Number(h.substring(p,y)),isNaN(p)?oy:(y+=1,y+p>h.length?Lh:(h=h.slice(y,y+p),l.C=y+p,h)))}Pr.prototype.cancel=function(){this.J=!0,Ai(this)};function ac(l){l.S=Date.now()+l.I,cy(l,l.I)}function cy(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Go(g(l.ba,l),h)}function jh(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Pr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(CA(this.i,this.A),this.L!=2&&(qo(),Rt(17)),Ai(this),this.s=2,Qo(this)):cy(this,this.S-l)};function Qo(l){l.j.G==0||l.J||Ly(l.j,l)}function Ai(l){jh(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,Jv(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function Fh(l,h){try{var p=l.j;if(p.G!=0&&(p.g==l||Vh(p.h,l))){if(!l.K&&Vh(p.h,l)&&p.G==3){try{var y=p.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var D=y;if(D[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)mc(p),fc(p);else break e;zh(p),Rt(18)}}else p.za=D[1],0<p.za-p.T&&37500>D[2]&&p.F&&p.v==0&&!p.C&&(p.C=Go(g(p.Za,p),6e3));if(1>=hy(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else bi(p,11)}else if((l.K||p.g==l)&&mc(p),!E(h))for(D=p.Da.g.parse(h),h=0;h<D.length;h++){let he=D[h];if(p.T=he[0],he=he[1],p.G==2)if(he[0]=="c"){p.K=he[1],p.ia=he[2];const mt=he[3];mt!=null&&(p.la=mt,p.j.info("VER="+p.la));const gt=he[4];gt!=null&&(p.Aa=gt,p.j.info("SVER="+p.Aa));const Is=he[5];Is!=null&&typeof Is=="number"&&0<Is&&(y=1.5*Is,p.L=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const mn=l.g;if(mn){const vc=mn.g?mn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vc){var j=y.h;j.g||vc.indexOf("spdy")==-1&&vc.indexOf("quic")==-1&&vc.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Uh(j,j.h),j.h=null))}if(y.D){const Hh=mn.g?mn.g.getResponseHeader("X-HTTP-Session-Id"):null;Hh&&(y.ya=Hh,Ee(y.I,y.D,Hh))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),y=p;var z=l;if(y.qa=Fy(y,y.J?y.ia:null,y.W),z.K){fy(y.h,z);var ye=z,ot=y.L;ot&&(ye.I=ot),ye.B&&(jh(ye),ac(ye)),y.g=z}else Oy(y);0<p.i.length&&pc(p)}else he[0]!="stop"&&he[0]!="close"||bi(p,7);else p.G==3&&(he[0]=="stop"||he[0]=="close"?he[0]=="stop"?bi(p,7):Bh(p):he[0]!="noop"&&p.l&&p.l.ta(he),p.v=0)}}qo(4)}catch{}}var bA=class{constructor(l,h){this.g=l,this.map=h}};function uy(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function dy(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function hy(l){return l.h?1:l.g?l.g.size:0}function Vh(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function Uh(l,h){l.g?l.g.add(h):l.h=h}function fy(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}uy.prototype.cancel=function(){if(this.i=py(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function py(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const p of l.g.values())h=h.concat(p.D);return h}return x(l.i)}function NA(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var h=[],p=l.length,y=0;y<p;y++)h.push(l[y]);return h}h=[],p=0;for(y in l)h[p++]=l[y];return h}function xA(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var h=[];l=l.length;for(var p=0;p<l;p++)h.push(p);return h}h=[],p=0;for(const y in l)h[p++]=y;return h}}}function my(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var p=xA(l),y=NA(l),D=y.length,j=0;j<D;j++)h.call(void 0,y[j],p&&p[j],l)}var gy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function OA(l,h){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var y=l[p].indexOf("="),D=null;if(0<=y){var j=l[p].substring(0,y);D=l[p].substring(y+1)}else j=l[p];h(j,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Pi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Pi){this.h=l.h,lc(this,l.j),this.o=l.o,this.g=l.g,cc(this,l.s),this.l=l.l;var h=l.i,p=new Xo;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),vy(this,p),this.m=l.m}else l&&(h=String(l).match(gy))?(this.h=!1,lc(this,h[1]||"",!0),this.o=Yo(h[2]||""),this.g=Yo(h[3]||"",!0),cc(this,h[4]),this.l=Yo(h[5]||"",!0),vy(this,h[6]||"",!0),this.m=Yo(h[7]||"")):(this.h=!1,this.i=new Xo(null,this.h))}Pi.prototype.toString=function(){var l=[],h=this.j;h&&l.push(Jo(h,yy,!0),":");var p=this.g;return(p||h=="file")&&(l.push("//"),(h=this.o)&&l.push(Jo(h,yy,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(Jo(p,p.charAt(0)=="/"?MA:LA,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",Jo(p,FA)),l.join("")};function Yn(l){return new Pi(l)}function lc(l,h,p){l.j=p?Yo(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function cc(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function vy(l,h,p){h instanceof Xo?(l.i=h,VA(l.i,l.h)):(p||(h=Jo(h,jA)),l.i=new Xo(h,l.h))}function Ee(l,h,p){l.i.set(h,p)}function uc(l){return Ee(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Yo(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Jo(l,h,p){return typeof l=="string"?(l=encodeURI(l).replace(h,DA),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function DA(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var yy=/[#\/\?@]/g,LA=/[#\?:]/g,MA=/[#\?]/g,jA=/[#\?@]/g,FA=/#/g;function Xo(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function br(l){l.g||(l.g=new Map,l.h=0,l.i&&OA(l.i,function(h,p){l.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=Xo.prototype,t.add=function(l,h){br(this),this.i=null,l=ws(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(h),this.h+=1,this};function _y(l,h){br(l),h=ws(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function wy(l,h){return br(l),h=ws(l,h),l.g.has(h)}t.forEach=function(l,h){br(this),this.g.forEach(function(p,y){p.forEach(function(D){l.call(h,D,y,this)},this)},this)},t.na=function(){br(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let y=0;y<h.length;y++){const D=l[y];for(let j=0;j<D.length;j++)p.push(h[y])}return p},t.V=function(l){br(this);let h=[];if(typeof l=="string")wy(this,l)&&(h=h.concat(this.g.get(ws(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)h=h.concat(l[p])}return h},t.set=function(l,h){return br(this),this.i=null,l=ws(this,l),wy(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function Ey(l,h,p){_y(l,h),0<p.length&&(l.i=null,l.g.set(ws(l,h),x(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var y=h[p];const j=encodeURIComponent(String(y)),z=this.V(y);for(y=0;y<z.length;y++){var D=j;z[y]!==""&&(D+="="+encodeURIComponent(String(z[y]))),l.push(D)}}return this.i=l.join("&")};function ws(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function VA(l,h){h&&!l.j&&(br(l),l.i=null,l.g.forEach(function(p,y){var D=y.toLowerCase();y!=D&&(_y(this,y),Ey(this,D,p))},l)),l.j=h}function UA(l,h){const p=new Ko;if(a.Image){const y=new Image;y.onload=R(Nr,p,"TestLoadImage: loaded",!0,h,y),y.onerror=R(Nr,p,"TestLoadImage: error",!1,h,y),y.onabort=R(Nr,p,"TestLoadImage: abort",!1,h,y),y.ontimeout=R(Nr,p,"TestLoadImage: timeout",!1,h,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=l}else h(!1)}function $A(l,h){const p=new Ko,y=new AbortController,D=setTimeout(()=>{y.abort(),Nr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:y.signal}).then(j=>{clearTimeout(D),j.ok?Nr(p,"TestPingServer: ok",!0,h):Nr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),Nr(p,"TestPingServer: error",!1,h)})}function Nr(l,h,p,y,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),y(p)}catch{}}function BA(){this.g=new SA}function zA(l,h,p){const y=p||"";try{my(l,function(D,j){let z=D;u(D)&&(z=bh(D)),h.push(y+j+"="+encodeURIComponent(z))})}catch(D){throw h.push(y+"type="+encodeURIComponent("_badmap")),D}}function Zo(l){this.l=l.Ub||null,this.j=l.eb||!1}P(Zo,Nh),Zo.prototype.g=function(){return new dc(this.l,this.j)},Zo.prototype.i=function(l){return function(){return l}}({});function dc(l,h){qe.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(dc,qe),t=dc.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,ta(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ea(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,ta(this)),this.g&&(this.readyState=3,ta(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Iy(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Iy(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?ea(this):ta(this),this.readyState==3&&Iy(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,ea(this))},t.Qa=function(l){this.g&&(this.response=l,ea(this))},t.ga=function(){this.g&&ea(this)};function ea(l){l.readyState=4,l.l=null,l.j=null,l.v=null,ta(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=h.next();return l.join(`\r
`)};function ta(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(dc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Ty(l){let h="";return M(l,function(p,y){h+=y,h+=":",h+=p,h+=`\r
`}),h}function $h(l,h,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=Ty(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):Ee(l,h,p))}function xe(l){qe.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(xe,qe);var WA=/^https?$/i,HA=["POST","PUT"];t=xe.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Dh.g(),this.v=this.o?Xv(this.o):Xv(Dh),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(j){Sy(this,j);return}if(l=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var D in y)p.set(D,y[D]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const j of y.keys())p.set(j,y.get(j));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(j=>j.toLowerCase()=="content-type"),D=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(HA,h,void 0))||y||D||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,z]of p)this.g.setRequestHeader(j,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Cy(this),this.u=!0,this.g.send(l),this.u=!1}catch(j){Sy(this,j)}};function Sy(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,ky(l),hc(l)}function ky(l){l.A||(l.A=!0,Ye(l,"complete"),Ye(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Ye(this,"complete"),Ye(this,"abort"),hc(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),hc(this,!0)),xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ry(this):this.bb())},t.bb=function(){Ry(this)};function Ry(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Jn(l)!=4||l.Z()!=2)){if(l.u&&Jn(l)==4)Kv(l.Ea,0,l);else if(Ye(l,"readystatechange"),Jn(l)==4){l.h=!1;try{const z=l.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var y;if(y=z===0){var D=String(l.D).match(gy)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),y=!WA.test(D?D.toLowerCase():"")}p=y}if(p)Ye(l,"complete"),Ye(l,"success");else{l.m=6;try{var j=2<Jn(l)?l.g.statusText:""}catch{j=""}l.l=j+" ["+l.Z()+"]",ky(l)}}finally{hc(l)}}}}function hc(l,h){if(l.g){Cy(l);const p=l.g,y=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||Ye(l,"ready");try{p.onreadystatechange=y}catch{}}}function Cy(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Jn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Jn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),TA(h)}};function Ay(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function qA(l){const h={};l=(l.g&&2<=Jn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<l.length;y++){if(E(l[y]))continue;var p=b(l[y]);const D=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const j=h[D]||[];h[D]=j,j.push(p)}T(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function na(l,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||h}function Py(l){this.Aa=0,this.i=[],this.j=new Ko,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=na("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=na("baseRetryDelayMs",5e3,l),this.cb=na("retryDelaySeedMs",1e4,l),this.Wa=na("forwardChannelMaxRetries",2,l),this.wa=na("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new uy(l&&l.concurrentRequestLimit),this.Da=new BA,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Py.prototype,t.la=8,t.G=1,t.connect=function(l,h,p,y){Rt(0),this.W=l,this.H=h||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.I=Fy(this,null,this.W),pc(this)};function Bh(l){if(by(l),l.G==3){var h=l.U++,p=Yn(l.I);if(Ee(p,"SID",l.K),Ee(p,"RID",h),Ee(p,"TYPE","terminate"),ra(l,p),h=new Pr(l,l.j,h),h.L=2,h.v=uc(Yn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.v,p=!0),p||(h.g=Vy(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ac(h)}jy(l)}function fc(l){l.g&&(Wh(l),l.g.cancel(),l.g=null)}function by(l){fc(l),l.u&&(a.clearTimeout(l.u),l.u=null),mc(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function pc(l){if(!dy(l.h)&&!l.s){l.s=!0;var h=l.Ga;pe||H(),F||(pe(),F=!0),q.add(h,l),l.B=0}}function GA(l,h){return hy(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Go(g(l.Ga,l,h),My(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const D=new Pr(this,this.j,l);let j=this.o;if(this.S&&(j?(j=v(j),A(j,this.S)):j=this.S),this.m!==null||this.O||(D.H=j,j=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=xy(this,D,h),p=Yn(this.I),Ee(p,"RID",l),Ee(p,"CVER",22),this.D&&Ee(p,"X-HTTP-Session-Id",this.D),ra(this,p),j&&(this.O?h="headers="+encodeURIComponent(String(Ty(j)))+"&"+h:this.m&&$h(p,this.m,j)),Uh(this.h,D),this.Ua&&Ee(p,"TYPE","init"),this.P?(Ee(p,"$req",h),Ee(p,"SID","null"),D.T=!0,Mh(D,p,null)):Mh(D,p,h),this.G=2}}else this.G==3&&(l?Ny(this,l):this.i.length==0||dy(this.h)||Ny(this))};function Ny(l,h){var p;h?p=h.l:p=l.U++;const y=Yn(l.I);Ee(y,"SID",l.K),Ee(y,"RID",p),Ee(y,"AID",l.T),ra(l,y),l.m&&l.o&&$h(y,l.m,l.o),p=new Pr(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),h&&(l.i=h.D.concat(l.i)),h=xy(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Uh(l.h,p),Mh(p,y,h)}function ra(l,h){l.H&&M(l.H,function(p,y){Ee(h,y,p)}),l.l&&my({},function(p,y){Ee(h,y,p)})}function xy(l,h,p){p=Math.min(l.i.length,p);var y=l.l?g(l.l.Na,l.l,l):null;e:{var D=l.i;let j=-1;for(;;){const z=["count="+p];j==-1?0<p?(j=D[0].g,z.push("ofs="+j)):j=0:z.push("ofs="+j);let ye=!0;for(let ot=0;ot<p;ot++){let he=D[ot].g;const mt=D[ot].map;if(he-=j,0>he)j=Math.max(0,D[ot].g-100),ye=!1;else try{zA(mt,z,"req"+he+"_")}catch{y&&y(mt)}}if(ye){y=z.join("&");break e}}}return l=l.i.splice(0,p),h.D=l,y}function Oy(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;pe||H(),F||(pe(),F=!0),q.add(h,l),l.v=0}}function zh(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Go(g(l.Fa,l),My(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Dy(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Go(g(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Rt(10),fc(this),Dy(this))};function Wh(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Dy(l){l.g=new Pr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=Yn(l.qa);Ee(h,"RID","rpc"),Ee(h,"SID",l.K),Ee(h,"AID",l.T),Ee(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ee(h,"TO",l.ja),Ee(h,"TYPE","xmlhttp"),ra(l,h),l.m&&l.o&&$h(h,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=uc(Yn(h)),p.m=null,p.P=!0,ay(p,l)}t.Za=function(){this.C!=null&&(this.C=null,fc(this),zh(this),Rt(19))};function mc(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Ly(l,h){var p=null;if(l.g==h){mc(l),Wh(l),l.g=null;var y=2}else if(Vh(l.h,h))p=h.D,fy(l.h,h),y=1;else return;if(l.G!=0){if(h.o)if(y==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var D=l.B;y=ic(),Ye(y,new ry(y,p)),pc(l)}else Oy(l);else if(D=h.s,D==3||D==0&&0<h.X||!(y==1&&GA(l,h)||y==2&&zh(l)))switch(p&&0<p.length&&(h=l.h,h.i=h.i.concat(p)),D){case 1:bi(l,5);break;case 4:bi(l,10);break;case 3:bi(l,6);break;default:bi(l,2)}}}function My(l,h){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*h}function bi(l,h){if(l.j.info("Error code "+h),h==2){var p=g(l.fb,l),y=l.Xa;const D=!y;y=new Pi(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||lc(y,"https"),uc(y),D?UA(y.toString(),p):$A(y.toString(),p)}else Rt(2);l.G=0,l.l&&l.l.sa(h),jy(l),by(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function jy(l){if(l.G=0,l.ka=[],l.l){const h=py(l.h);(h.length!=0||l.i.length!=0)&&(N(l.ka,h),N(l.ka,l.i),l.h.i.length=0,x(l.i),l.i.length=0),l.l.ra()}}function Fy(l,h,p){var y=p instanceof Pi?Yn(p):new Pi(p);if(y.g!="")h&&(y.g=h+"."+y.g),cc(y,y.s);else{var D=a.location;y=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;var j=new Pi(null);y&&lc(j,y),h&&(j.g=h),D&&cc(j,D),p&&(j.l=p),y=j}return p=l.D,h=l.ya,p&&h&&Ee(y,p,h),Ee(y,"VER",l.la),ra(l,y),y}function Vy(l,h,p){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new xe(new Zo({eb:p})):new xe(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Uy(){}t=Uy.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function gc(){}gc.prototype.g=function(l,h){return new zt(l,h)};function zt(l,h){qe.call(this),this.g=new Py(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!E(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!E(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new Es(this)}P(zt,qe),zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},zt.prototype.close=function(){Bh(this.g)},zt.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=bh(l),l=p);h.i.push(new bA(h.Ya++,l)),h.G==3&&pc(h)},zt.prototype.N=function(){this.g.l=null,delete this.j,Bh(this.g),delete this.g,zt.aa.N.call(this)};function $y(l){xh.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const p in h){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}P($y,xh);function By(){Oh.call(this),this.status=1}P(By,Oh);function Es(l){this.g=l}P(Es,Uy),Es.prototype.ua=function(){Ye(this.g,"a")},Es.prototype.ta=function(l){Ye(this.g,new $y(l))},Es.prototype.sa=function(l){Ye(this.g,new By)},Es.prototype.ra=function(){Ye(this.g,"b")},gc.prototype.createWebChannel=gc.prototype.g,zt.prototype.send=zt.prototype.o,zt.prototype.open=zt.prototype.m,zt.prototype.close=zt.prototype.close,Ok=function(){return new gc},xk=function(){return ic()},Nk=Ci,om={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},sc.NO_ERROR=0,sc.TIMEOUT=8,sc.HTTP_ERROR=6,du=sc,iy.COMPLETE="complete",bk=iy,Zv.EventType=Ho,Ho.OPEN="a",Ho.CLOSE="b",Ho.ERROR="c",Ho.MESSAGE="d",qe.prototype.listen=qe.prototype.K,Ca=Zv,Pk=Zo,xe.prototype.listenOnce=xe.prototype.L,xe.prototype.getLastError=xe.prototype.Ka,xe.prototype.getLastErrorCode=xe.prototype.Ba,xe.prototype.getStatus=xe.prototype.Z,xe.prototype.getResponseJson=xe.prototype.Oa,xe.prototype.getResponseText=xe.prototype.oa,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Ha,Ak=xe}).apply(typeof Vc<"u"?Vc:typeof self<"u"?self:typeof window<"u"?window:{});const Yw="@firebase/firestore";/**
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
 */const ls=new No("@firebase/firestore");function ma(){return ls.logLevel}function G(t,...e){if(ls.logLevel<=ee.DEBUG){const n=e.map(iv);ls.debug(`Firestore (${Vo}): ${t}`,...n)}}function cs(t,...e){if(ls.logLevel<=ee.ERROR){const n=e.map(iv);ls.error(`Firestore (${Vo}): ${t}`,...n)}}function td(t,...e){if(ls.logLevel<=ee.WARN){const n=e.map(iv);ls.warn(`Firestore (${Vo}): ${t}`,...n)}}function iv(t){if(typeof t=="string")return t;try{/**
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
 */function oe(t="Unexpected state"){const e=`FIRESTORE (${Vo}) INTERNAL ASSERTION FAILED: `+t;throw cs(e),new Error(e)}function st(t,e){t||oe()}function Se(t,e){return t}/**
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
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends He{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class qi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Dk{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class B2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(wt.UNAUTHENTICATED))}shutdown(){}}class z2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class W2{constructor(e){this.t=e,this.currentUser=wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new qi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new qi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new qi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(st(typeof r.accessToken=="string"),new Dk(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return st(e===null||typeof e=="string"),new wt(e)}}class H2{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=wt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class q2{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new H2(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class G2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class K2{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(st(typeof n.token=="string"),this.R=n.token,new G2(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Q2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Lk{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Q2(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function _e(t,e){return t<e?-1:t>e?1:0}function go(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class it{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Y(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return it.fromMillis(Date.now())}static fromDate(e){return it.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new it(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Tl{constructor(e,n,r){n===void 0?n=0:n>e.length&&oe(),r===void 0?r=e.length-n:r>e.length-n&&oe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Tl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Tl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class De extends Tl{construct(e,n,r){return new De(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new De(n)}static emptyPath(){return new De([])}}const Y2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends Tl{construct(e,n,r){return new ut(e,n,r)}static isValidIdentifier(e){return Y2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new Y(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new Y(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Y(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new Y(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ut(n)}static emptyPath(){return new ut([])}}/**
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
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(De.fromString(e))}static fromName(e){return new X(De.fromString(e).popFirst(5))}static empty(){return new X(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new De(e.slice()))}}function J2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Ce.fromTimestamp(r===1e9?new it(n+1,0):new it(n,r));return new hi(i,X.empty(),e)}function X2(t){return new hi(t.readTime,t.key,-1)}class hi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new hi(Ce.min(),X.empty(),-1)}static max(){return new hi(Ce.max(),X.empty(),-1)}}function Z2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
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
 */const eF="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tF{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Mk(t){if(t.code!==B.FAILED_PRECONDITION||t.message!==eF)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&oe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;n(e[u]).next(d=>{o[u]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new V((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function nF(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function lh(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class jk{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}jk.oe=-1;function sv(t){return t==null}function nd(t){return t===0&&1/t==-1/0}function rF(t){return typeof t=="number"&&Number.isInteger(t)&&!nd(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Jw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Hl(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Fk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Bt{constructor(e,n){this.comparator=e,this.root=n||lt.EMPTY}insert(e,n){return new Bt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(e){return new Bt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Uc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Uc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Uc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Uc(this.root,e,this.comparator,!0)}}class Uc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class lt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??lt.RED,this.left=i??lt.EMPTY,this.right=s??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new lt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return lt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw oe();const e=this.left.check();if(e!==this.right.check())throw oe();return e+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw oe()}get value(){throw oe()}get color(){throw oe()}get left(){throw oe()}get right(){throw oe()}copy(e,n,r,i,s){return this}insert(e,n,r){return new lt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class St{constructor(e){this.comparator=e,this.data=new Bt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Xw(this.data.getIterator())}getIteratorFrom(e){return new Xw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof St)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new St(this.comparator);return n.data=e,n}}class Xw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Tn{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new Tn([])}unionWith(e){let n=new St(ut.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Tn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return go(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class iF extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class gr{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new iF("Invalid base64 string: "+s):s}}(e);return new gr(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new gr(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gr.EMPTY_BYTE_STRING=new gr("");const sF=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function us(t){if(st(!!t),typeof t=="string"){let e=0;const n=sF.exec(t);if(st(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ct(t.seconds),nanos:ct(t.nanos)}}function ct(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Sl(t){return typeof t=="string"?gr.fromBase64String(t):gr.fromUint8Array(t)}/**
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
 */function ov(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Vk(t){const e=t.mapValue.fields.__previous_value__;return ov(e)?Vk(e):e}function rd(t){const e=us(t.mapValue.fields.__local_write_time__.timestampValue);return new it(e.seconds,e.nanos)}/**
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
 */class oF{constructor(e,n,r,i,s,o,a,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class id{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new id("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof id&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const $c={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function vo(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ov(t)?4:aF(t)?9007199254740991:10:oe()}function Kn(t,e){if(t===e)return!0;const n=vo(t);if(n!==vo(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return rd(t).isEqual(rd(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=us(i.timestampValue),a=us(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Sl(i.bytesValue).isEqual(Sl(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ct(i.geoPointValue.latitude)===ct(s.geoPointValue.latitude)&&ct(i.geoPointValue.longitude)===ct(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ct(i.integerValue)===ct(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ct(i.doubleValue),a=ct(s.doubleValue);return o===a?nd(o)===nd(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return go(t.arrayValue.values||[],e.arrayValue.values||[],Kn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Jw(o)!==Jw(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Kn(o[c],a[c])))return!1;return!0}(t,e);default:return oe()}}function kl(t,e){return(t.values||[]).find(n=>Kn(n,e))!==void 0}function yo(t,e){if(t===e)return 0;const n=vo(t),r=vo(e);if(n!==r)return _e(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ct(s.integerValue||s.doubleValue),c=ct(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Zw(t.timestampValue,e.timestampValue);case 4:return Zw(rd(t),rd(e));case 5:return _e(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Sl(s),c=Sl(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const d=_e(a[u],c[u]);if(d!==0)return d}return _e(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=_e(ct(s.latitude),ct(o.latitude));return a!==0?a:_e(ct(s.longitude),ct(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){const d=yo(a[u],c[u]);if(d)return d}return _e(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===$c.mapValue&&o===$c.mapValue)return 0;if(s===$c.mapValue)return 1;if(o===$c.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let f=0;f<c.length&&f<d.length;++f){const g=_e(c[f],d[f]);if(g!==0)return g;const R=yo(a[c[f]],u[d[f]]);if(R!==0)return R}return _e(c.length,d.length)}(t.mapValue,e.mapValue);default:throw oe()}}function Zw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=us(t),r=us(e),i=_e(n.seconds,r.seconds);return i!==0?i:_e(n.nanos,r.nanos)}function _o(t){return am(t)}function am(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=us(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Sl(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=am(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${am(n.fields[o])}`;return i+"}"}(t.mapValue):oe()}function lm(t){return!!t&&"integerValue"in t}function av(t){return!!t&&"arrayValue"in t}function hu(t){return!!t&&"mapValue"in t}function Ba(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Hl(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ba(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ba(t.arrayValue.values[n]);return e}return Object.assign({},t)}function aF(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class En{constructor(e){this.value=e}static empty(){return new En({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!hu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ba(n)}setAll(e){let n=ut.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ba(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());hu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Kn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];hu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Hl(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new En(Ba(this.value))}}function Uk(t){const e=[];return Hl(t.fields,(n,r)=>{const i=new ut([n]);if(hu(r)){const s=Uk(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Tn(e)}/**
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
 */class sd{constructor(e,n){this.position=e,this.inclusive=n}}function eE(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),n.key):r=yo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function tE(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Kn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class od{constructor(e,n="asc"){this.field=e,this.dir=n}}function lF(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class $k{}class Ze extends $k{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new uF(e,n,r):n==="array-contains"?new fF(e,r):n==="in"?new pF(e,r):n==="not-in"?new mF(e,r):n==="array-contains-any"?new gF(e,r):new Ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new dF(e,r):new hF(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(yo(n,this.value)):n!==null&&vo(this.value)===vo(n)&&this.matchesComparison(yo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fi extends $k{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new fi(e,n)}matches(e){return Bk(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Bk(t){return t.op==="and"}function zk(t){return cF(t)&&Bk(t)}function cF(t){for(const e of t.filters)if(e instanceof fi)return!1;return!0}function cm(t){if(t instanceof Ze)return t.field.canonicalString()+t.op.toString()+_o(t.value);if(zk(t))return t.filters.map(e=>cm(e)).join(",");{const e=t.filters.map(n=>cm(n)).join(",");return`${t.op}(${e})`}}function Wk(t,e){return t instanceof Ze?function(r,i){return i instanceof Ze&&r.op===i.op&&r.field.isEqual(i.field)&&Kn(r.value,i.value)}(t,e):t instanceof fi?function(r,i){return i instanceof fi&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Wk(o,i.filters[a]),!0):!1}(t,e):void oe()}function Hk(t){return t instanceof Ze?function(n){return`${n.field.canonicalString()} ${n.op} ${_o(n.value)}`}(t):t instanceof fi?function(n){return n.op.toString()+" {"+n.getFilters().map(Hk).join(" ,")+"}"}(t):"Filter"}class uF extends Ze{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class dF extends Ze{constructor(e,n){super(e,"in",n),this.keys=qk("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class hF extends Ze{constructor(e,n){super(e,"not-in",n),this.keys=qk("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function qk(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class fF extends Ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return av(n)&&kl(n.arrayValue,this.value)}}class pF extends Ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&kl(this.value.arrayValue,n)}}class mF extends Ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(kl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!kl(this.value.arrayValue,n)}}class gF extends Ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!av(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>kl(this.value.arrayValue,r))}}/**
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
 */class vF{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function nE(t,e=null,n=[],r=[],i=null,s=null,o=null){return new vF(t,e,n,r,i,s,o)}function lv(t){const e=Se(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>cm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),sv(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>_o(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>_o(r)).join(",")),e.ue=n}return e.ue}function cv(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!lF(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Wk(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!tE(t.startAt,e.startAt)&&tE(t.endAt,e.endAt)}/**
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
 */class ch{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function yF(t,e,n,r,i,s,o,a){return new ch(t,e,n,r,i,s,o,a)}function _F(t){return new ch(t)}function rE(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function wF(t){return t.collectionGroup!==null}function za(t){const e=Se(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new St(ut.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new od(s,r))}),n.has(ut.keyField().canonicalString())||e.ce.push(new od(ut.keyField(),r))}return e.ce}function Gi(t){const e=Se(t);return e.le||(e.le=EF(e,za(t))),e.le}function EF(t,e){if(t.limitType==="F")return nE(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new od(i.field,s)});const n=t.endAt?new sd(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new sd(t.startAt.position,t.startAt.inclusive):null;return nE(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function um(t,e,n){return new ch(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Gk(t,e){return cv(Gi(t),Gi(e))&&t.limitType===e.limitType}function Kk(t){return`${lv(Gi(t))}|lt:${t.limitType}`}function ga(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Hk(i)).join(", ")}]`),sv(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>_o(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>_o(i)).join(",")),`Target(${r})`}(Gi(t))}; limitType=${t.limitType})`}function uv(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):X.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of za(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,c){const u=eE(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,za(r),i)||r.endAt&&!function(o,a,c){const u=eE(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,za(r),i))}(t,e)}function IF(t){return(e,n)=>{let r=!1;for(const i of za(t)){const s=TF(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function TF(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?yo(c,u):oe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return oe()}}/**
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
 */class Uo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Hl(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Fk(this.inner)}size(){return this.innerSize}}/**
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
 */const SF=new Bt(X.comparator);function ad(){return SF}const Qk=new Bt(X.comparator);function Bc(...t){let e=Qk;for(const n of t)e=e.insert(n.key,n);return e}function Yk(t){let e=Qk;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function $i(){return Wa()}function Jk(){return Wa()}function Wa(){return new Uo(t=>t.toString(),(t,e)=>t.isEqual(e))}const kF=new Bt(X.comparator),RF=new St(X.comparator);function It(...t){let e=RF;for(const n of t)e=e.add(n);return e}const CF=new St(_e);function AF(){return CF}/**
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
 */function Xk(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nd(e)?"-0":e}}function Zk(t){return{integerValue:""+t}}function PF(t,e){return rF(e)?Zk(e):Xk(t,e)}/**
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
 */class uh{constructor(){this._=void 0}}function bF(t,e,n){return t instanceof ld?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ov(s)&&(s=Vk(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Rl?tR(t,e):t instanceof Cl?nR(t,e):function(i,s){const o=eR(i,s),a=iE(o)+iE(i.Pe);return lm(o)&&lm(i.Pe)?Zk(a):Xk(i.serializer,a)}(t,e)}function NF(t,e,n){return t instanceof Rl?tR(t,e):t instanceof Cl?nR(t,e):n}function eR(t,e){return t instanceof cd?function(r){return lm(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ld extends uh{}class Rl extends uh{constructor(e){super(),this.elements=e}}function tR(t,e){const n=rR(e);for(const r of t.elements)n.some(i=>Kn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Cl extends uh{constructor(e){super(),this.elements=e}}function nR(t,e){let n=rR(e);for(const r of t.elements)n=n.filter(i=>!Kn(i,r));return{arrayValue:{values:n}}}class cd extends uh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function iE(t){return ct(t.integerValue||t.doubleValue)}function rR(t){return av(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function xF(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Rl&&i instanceof Rl||r instanceof Cl&&i instanceof Cl?go(r.elements,i.elements,Kn):r instanceof cd&&i instanceof cd?Kn(r.Pe,i.Pe):r instanceof ld&&i instanceof ld}(t.transform,e.transform)}class OF{constructor(e,n){this.version=e,this.transformResults=n}}class ar{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ar}static exists(e){return new ar(void 0,e)}static updateTime(e){return new ar(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class dh{}function iR(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new oR(t.key,ar.none()):new ql(t.key,t.data,ar.none());{const n=t.data,r=En.empty();let i=new St(ut.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new vs(t.key,r,new Tn(i.toArray()),ar.none())}}function DF(t,e,n){t instanceof ql?function(i,s,o){const a=i.value.clone(),c=oE(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof vs?function(i,s,o){if(!fu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=oE(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(sR(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ha(t,e,n,r){return t instanceof ql?function(s,o,a,c){if(!fu(s.precondition,o))return a;const u=s.value.clone(),d=aE(s.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof vs?function(s,o,a,c){if(!fu(s.precondition,o))return a;const u=aE(s.fieldTransforms,c,o),d=o.data;return d.setAll(sR(s)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return fu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function LF(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=eR(r.transform,i||null);s!=null&&(n===null&&(n=En.empty()),n.set(r.field,s))}return n||null}function sE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&go(r,i,(s,o)=>xF(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ql extends dh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class vs extends dh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function sR(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function oE(t,e,n){const r=new Map;st(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,NF(o,a,n[i]))}return r}function aE(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,bF(s,o,e))}return r}class oR extends dh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class MF extends dh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class jF{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&DF(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ha(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ha(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Jk();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=iR(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(Ce.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),It())}isEqual(e){return this.batchId===e.batchId&&go(this.mutations,e.mutations,(n,r)=>sE(n,r))&&go(this.baseMutations,e.baseMutations,(n,r)=>sE(n,r))}}class dv{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){st(e.mutations.length===r.length);let i=function(){return kF}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new dv(e,n,r,i)}}/**
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
 */class FF{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var Be,le;function VF(t){switch(t){default:return oe();case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0}}function UF(t){if(t===void 0)return cs("GRPC error has no .code"),B.UNKNOWN;switch(t){case Be.OK:return B.OK;case Be.CANCELLED:return B.CANCELLED;case Be.UNKNOWN:return B.UNKNOWN;case Be.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case Be.INTERNAL:return B.INTERNAL;case Be.UNAVAILABLE:return B.UNAVAILABLE;case Be.UNAUTHENTICATED:return B.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case Be.NOT_FOUND:return B.NOT_FOUND;case Be.ALREADY_EXISTS:return B.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return B.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case Be.ABORTED:return B.ABORTED;case Be.OUT_OF_RANGE:return B.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return B.UNIMPLEMENTED;case Be.DATA_LOSS:return B.DATA_LOSS;default:return oe()}}(le=Be||(Be={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Ck([4294967295,4294967295],0);class $F{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function dm(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function BF(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function zF(t,e){return dm(t,e.toTimestamp())}function eo(t){return st(!!t),Ce.fromTimestamp(function(n){const r=us(n);return new it(r.seconds,r.nanos)}(t))}function aR(t,e){return hm(t,e).canonicalString()}function hm(t,e){const n=function(i){return new De(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function WF(t){const e=De.fromString(t);return st(XF(e)),e}function fm(t,e){return aR(t.databaseId,e.path)}function HF(t){const e=WF(t);return e.length===4?De.emptyPath():GF(e)}function qF(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function GF(t){return st(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function lE(t,e,n){return{name:fm(t,e),fields:n.value.mapValue.fields}}function KF(t,e){let n;if(e instanceof ql)n={update:lE(t,e.key,e.value)};else if(e instanceof oR)n={delete:fm(t,e.key)};else if(e instanceof vs)n={update:lE(t,e.key,e.data),updateMask:JF(e.fieldMask)};else{if(!(e instanceof MF))return oe();n={verify:fm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof ld)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Rl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Cl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof cd)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw oe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:zF(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:oe()}(t,e.precondition)),n}function QF(t,e){return t&&t.length>0?(st(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?eo(i.updateTime):eo(s);return o.isEqual(Ce.min())&&(o=eo(s)),new OF(o,i.transformResults||[])}(n,e))):[]}function YF(t){let e=HF(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){st(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const g=lR(f);return g instanceof fi&&zk(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(g=>function(P){return new od(Ns(P.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(g))}(n.orderBy));let a=null;n.limit&&(a=function(f){let g;return g=typeof f=="object"?f.value:f,sv(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(f){const g=!!f.before,R=f.values||[];return new sd(R,g)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const g=!f.before,R=f.values||[];return new sd(R,g)}(n.endAt)),yF(e,i,o,s,a,"F",c,u)}function lR(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ns(n.unaryFilter.field);return Ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ns(n.unaryFilter.field);return Ze.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ns(n.unaryFilter.field);return Ze.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ns(n.unaryFilter.field);return Ze.create(o,"!=",{nullValue:"NULL_VALUE"});default:return oe()}}(t):t.fieldFilter!==void 0?function(n){return Ze.create(Ns(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return oe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return fi.create(n.compositeFilter.filters.map(r=>lR(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return oe()}}(n.compositeFilter.op))}(t):oe()}function Ns(t){return ut.fromServerFormat(t.fieldPath)}function JF(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function XF(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ZF{constructor(e){this.ct=e}}function eV(t){const e=YF({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?um(e,e.limit,"L"):e}/**
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
 */class tV{constructor(){this._n=new nV}addToCollectionParentIndex(e,n){return this._n.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(hi.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(hi.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class nV{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new St(De.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new St(De.comparator)).toArray()}}/**
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
 */class wo{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new wo(0)}static Ln(){return new wo(-1)}}/**
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
 */class rV{constructor(){this.changes=new Uo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,wn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class iV{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class sV{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ha(r.mutation,i,Tn.empty(),it.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,It()).next(()=>r))}getLocalViewOfDocuments(e,n,r=It()){const i=$i();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Bc();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=$i();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,It()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=ad();const o=Wa(),a=function(){return Wa()}();return n.forEach((c,u)=>{const d=r.get(u.key);i.has(u.key)&&(d===void 0||d.mutation instanceof vs)?s=s.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Ha(d.mutation,u,d.mutation.getFieldMask(),it.now())):o.set(u.key,Tn.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var f;return a.set(u,new iV(d,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Wa();let i=new Bt((o,a)=>o-a),s=It();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let d=r.get(c)||Tn.empty();d=a.applyToLocalView(u,d),r.set(c,d);const f=(i.get(a.batchId)||It()).add(c);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,d=c.value,f=Jk();d.forEach(g=>{if(!s.has(g)){const R=iR(n.get(g),r.get(g));R!==null&&f.set(g,R),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return X.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):wF(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):V.resolve($i());let a=-1,c=s;return o.next(u=>V.forEach(u,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?V.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{c=c.insert(d,g)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,It())).next(d=>({batchId:a,changes:Yk(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let i=Bc();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Bc();return this.indexManager.getCollectionParents(e,s).next(a=>V.forEach(a,c=>{const u=function(f,g){return new ch(g,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(d=>{d.forEach((f,g)=>{o=o.insert(f,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,wn.newInvalidDocument(d)))});let a=Bc();return o.forEach((c,u)=>{const d=s.get(c);d!==void 0&&Ha(d.mutation,u,Tn.empty(),it.now()),uv(n,u)&&(a=a.insert(c,u))}),a})}}/**
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
 */class oV{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return V.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:eo(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:eV(i.bundledQuery),readTime:eo(i.readTime)}}(n)),V.resolve()}}/**
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
 */class aV{constructor(){this.overlays=new Bt(X.comparator),this.hr=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=$i();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=$i(),s=n.length+1,o=new X(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Bt((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=s.get(u.largestBatchId);d===null&&(d=$i(),s=s.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const a=$i(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>a.set(u,d)),!(a.size()>=i)););return V.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new FF(n,r));let s=this.hr.get(n);s===void 0&&(s=It(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class hv{constructor(){this.Pr=new St(Je.Ir),this.Tr=new St(Je.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Je(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Je(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new X(new De([])),r=new Je(n,e),i=new Je(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new X(new De([])),r=new Je(n,e),i=new Je(n,e+1);let s=It();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Je(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Je{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return X.comparator(e.key,n.key)||_e(e.pr,n.pr)}static Er(e,n){return _e(e.pr,n.pr)||X.comparator(e.key,n.key)}}/**
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
 */class lV{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new St(Je.Ir)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new jF(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new Je(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Je(n,0),i=new Je(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new St(_e);return n.forEach(i=>{const s=new Je(i,0),o=new Je(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),V.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;X.isDocumentKey(s)||(s=s.child(""));const o=new Je(new X(s),0);let a=new St(_e);return this.wr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.pr)),!0)},o),V.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){st(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return V.forEach(n.mutations,i=>{const s=new Je(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Je(n,0),i=this.wr.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class cV{constructor(e){this.vr=e,this.docs=function(){return new Bt(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():wn.newInvalidDocument(n))}getEntries(e,n){let r=ad();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():wn.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=ad();const o=n.path,a=new X(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Z2(X2(d),r)<=0||(i.has(d.key)||uv(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,n,r,i){oe()}Fr(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new uV(this)}getSize(e){return V.resolve(this.size)}}class uV extends rV{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class dV{constructor(e){this.persistence=e,this.Mr=new Uo(n=>lv(n),cv),this.lastRemoteSnapshotVersion=Ce.min(),this.highestTargetId=0,this.Or=0,this.Nr=new hv,this.targetCount=0,this.Lr=wo.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),V.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new wo(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.qn(n),V.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Nr.containsKey(n))}}/**
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
 */class hV{constructor(e,n){this.Br={},this.overlays={},this.kr=new jk(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new dV(this),this.indexManager=new tV,this.remoteDocumentCache=function(i){return new cV(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new ZF(n),this.$r=new oV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new aV,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new lV(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const i=new fV(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return V.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class fV extends tF{constructor(e){super(),this.currentSequenceNumber=e}}class fv{constructor(e){this.persistence=e,this.zr=new hv,this.jr=null}static Hr(e){return new fv(e)}get Jr(){if(this.jr)return this.jr;throw oe()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),V.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Jr,r=>{const i=X.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,Ce.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return V.or([()=>V.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class pv{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=It(),i=It();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new pv(e,n.fromCache,r,i)}}/**
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
 */class pV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class mV{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return xN()?8:nF(ae())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new pV;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(ma()<=ee.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",ga(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),V.resolve()):(ma()<=ee.DEBUG&&G("QueryEngine","Query:",ga(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(ma()<=ee.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",ga(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Gi(n))):V.resolve())}ji(e,n){if(rE(n))return V.resolve(null);let r=Gi(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=um(n,null,"F"),r=Gi(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=It(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Zi(n,a);return this.Xi(n,u,o,c.readTime)?this.ji(e,um(n,null,"F")):this.es(e,u,n,c)}))})))}Hi(e,n,r,i){return rE(n)||i.isEqual(Ce.min())?V.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?V.resolve(null):(ma()<=ee.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ga(n)),this.es(e,o,n,J2(i,-1)).next(a=>a))})}Zi(e,n){let r=new St(IF(e));return n.forEach((i,s)=>{uv(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return ma()<=ee.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",ga(n)),this.zi.getDocumentsMatchingQuery(e,n,hi.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class gV{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Bt(_e),this.rs=new Uo(s=>lv(s),cv),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sV(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function vV(t,e,n,r){return new gV(t,e,n,r)}async function cR(t,e){const n=Se(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=It();for(const u of i){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of s){a.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function yV(t,e){const n=Se(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,c,u,d){const f=u.batch,g=f.keys();let R=V.resolve();return g.forEach(P=>{R=R.next(()=>d.getEntry(c,P)).next(x=>{const N=u.docVersions.get(P);st(N!==null),x.version.compareTo(N)<0&&(f.applyToRemoteDocument(x,u),x.isValidDocument()&&(x.setReadTime(u.commitVersion),d.addEntry(x)))})}),R.next(()=>a.mutationQueue.removeMutationBatch(c,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=It();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function _V(t){const e=Se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function wV(t,e){const n=Se(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class cE{constructor(){this.activeTargetIds=AF()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class EV{constructor(){this.no=new cE,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new cE,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class IV{io(e){}shutdown(){}}/**
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
 */class uE{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let zc=null;function Df(){return zc===null?zc=function(){return 268435456+Math.round(2147483648*Math.random())}():zc++,"0x"+zc.toString(16)}/**
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
 */const TV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class SV{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const _t="WebChannelConnection";class kV extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const a=Df(),c=this.vo(n,r.toUriEncodedString());G("RestConnection",`Sending RPC '${n}' ${a}:`,c,i);const u={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(u,s,o),this.Mo(n,c,u,i).then(d=>(G("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw td("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",c,"request:",i),d})}xo(n,r,i,s,o,a){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Vo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=TV[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=Df();return new Promise((o,a)=>{const c=new Ak;c.setWithCredentials(!0),c.listenOnce(bk.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case du.NO_ERROR:const d=c.getResponseJson();G(_t,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case du.TIMEOUT:G(_t,`RPC '${e}' ${s} timed out`),a(new Y(B.DEADLINE_EXCEEDED,"Request time out"));break;case du.HTTP_ERROR:const f=c.getStatus();if(G(_t,`RPC '${e}' ${s} failed with status:`,f,"response text:",c.getResponseText()),f>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const R=g==null?void 0:g.error;if(R&&R.status&&R.message){const P=function(N){const I=N.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(I)>=0?I:B.UNKNOWN}(R.status);a(new Y(P,R.message))}else a(new Y(B.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new Y(B.UNAVAILABLE,"Connection failed."));break;default:oe()}}finally{G(_t,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);G(_t,`RPC '${e}' ${s} sending request:`,i),c.send(n,"POST",u,r,15)})}Oo(e,n,r){const i=Df(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Ok(),a=xk(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new Pk({})),this.Fo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=s.join("");G(_t,`Creating RPC '${e}' stream ${i}: ${d}`,c);const f=o.createWebChannel(d,c);let g=!1,R=!1;const P=new SV({lo:N=>{R?G(_t,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(g||(G(_t,`Opening RPC '${e}' stream ${i} transport.`),f.open(),g=!0),G(_t,`RPC '${e}' stream ${i} sending:`,N),f.send(N))},ho:()=>f.close()}),x=(N,I,E)=>{N.listen(I,k=>{try{E(k)}catch(O){setTimeout(()=>{throw O},0)}})};return x(f,Ca.EventType.OPEN,()=>{R||(G(_t,`RPC '${e}' stream ${i} transport opened.`),P.mo())}),x(f,Ca.EventType.CLOSE,()=>{R||(R=!0,G(_t,`RPC '${e}' stream ${i} transport closed`),P.po())}),x(f,Ca.EventType.ERROR,N=>{R||(R=!0,td(_t,`RPC '${e}' stream ${i} transport errored:`,N),P.po(new Y(B.UNAVAILABLE,"The operation could not be completed")))}),x(f,Ca.EventType.MESSAGE,N=>{var I;if(!R){const E=N.data[0];st(!!E);const k=E,O=k.error||((I=k[0])===null||I===void 0?void 0:I.error);if(O){G(_t,`RPC '${e}' stream ${i} received error:`,O);const L=O.status;let M=function(S){const A=Be[S];if(A!==void 0)return UF(A)}(L),T=O.message;M===void 0&&(M=B.INTERNAL,T="Unknown error status: "+L+" with message "+O.message),R=!0,P.po(new Y(M,T)),f.close()}else G(_t,`RPC '${e}' stream ${i} received:`,E),P.yo(E)}}),x(a,Nk.STAT_EVENT,N=>{N.stat===om.PROXY?G(_t,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===om.NOPROXY&&G(_t,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.fo()},0),P}}function Lf(){return typeof document<"u"?document:null}/**
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
 */function hh(t){return new $F(t,!0)}/**
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
 */class uR{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&G("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class RV{constructor(e,n,r,i,s,o,a,c){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new uR(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===B.RESOURCE_EXHAUSTED?(cs(n.toString()),cs("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new Y(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class CV extends RV{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(st(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=QF(e.writeResults,e.commitTime),r=eo(e.commitTime);return this.listener.A_(r,n)}return st(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=qF(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>KF(this.serializer,r))};this.i_(n)}}/**
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
 */class AV extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new Y(B.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,hm(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Y(B.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,hm(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(B.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class PV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(cs(n),this.y_=!1):G("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class bV{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{Kl(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=Se(c);u.M_.add(4),await Gl(u),u.N_.set("Unknown"),u.M_.delete(4),await fh(u)}(this))})}),this.N_=new PV(r,i)}}async function fh(t){if(Kl(t))for(const e of t.x_)await e(!0)}async function Gl(t){for(const e of t.x_)await e(!1)}function Kl(t){return Se(t).M_.size===0}async function dR(t,e,n){if(!lh(e))throw e;t.M_.add(1),await Gl(t),t.N_.set("Offline"),n||(n=()=>_V(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await fh(t)})}function hR(t,e){return e().catch(n=>dR(t,n,e))}async function ph(t){const e=Se(t),n=pi(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;NV(e);)try{const i=await wV(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,xV(e,i)}catch(i){await dR(e,i)}fR(e)&&pR(e)}function NV(t){return Kl(t)&&t.v_.length<10}function xV(t,e){t.v_.push(e);const n=pi(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function fR(t){return Kl(t)&&!pi(t).Zo()&&t.v_.length>0}function pR(t){pi(t).start()}async function OV(t){pi(t).V_()}async function DV(t){const e=pi(t);for(const n of t.v_)e.d_(n.mutations)}async function LV(t,e,n){const r=t.v_.shift(),i=dv.from(r,e,n);await hR(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ph(t)}async function MV(t,e){e&&pi(t).E_&&await async function(r,i){if(function(o){return VF(o)&&o!==B.ABORTED}(i.code)){const s=r.v_.shift();pi(r).t_(),await hR(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ph(r)}}(t,e),fR(t)&&pR(t)}async function dE(t,e){const n=Se(t);n.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const r=Kl(n);n.M_.add(3),await Gl(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await fh(n)}async function jV(t,e){const n=Se(t);e?(n.M_.delete(2),await fh(n)):e||(n.M_.add(2),await Gl(n),n.N_.set("Unknown"))}function pi(t){return t.k_||(t.k_=function(n,r,i){const s=Se(n);return s.f_(),new CV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:OV.bind(null,t),Ao:MV.bind(null,t),R_:DV.bind(null,t),A_:LV.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await ph(t)):(await t.k_.stop(),t.v_.length>0&&(G("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class mv{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new qi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new mv(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mR(t,e){if(cs("AsyncQueue",`${e}: ${t}`),lh(t))return new Y(B.UNAVAILABLE,`${e}: ${t}`);throw t}class FV{constructor(){this.queries=new Uo(e=>Kk(e),Gk),this.onlineState="Unknown",this.z_=new Set}}function VV(t){t.z_.forEach(e=>{e.next()})}var hE,fE;(fE=hE||(hE={})).J_="default",fE.Cache="cache";class UV{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Uo(a=>Kk(a),Gk),this.Da=new Map,this.Ca=new Set,this.va=new Bt(X.comparator),this.Fa=new Map,this.Ma=new hv,this.xa={},this.Oa=new Map,this.Na=wo.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function $V(t,e,n){const r=HV(t);try{const i=await function(o,a){const c=Se(o),u=it.now(),d=a.reduce((R,P)=>R.add(P.key),It());let f,g;return c.persistence.runTransaction("Locally write mutations","readwrite",R=>{let P=ad(),x=It();return c.os.getEntries(R,d).next(N=>{P=N,P.forEach((I,E)=>{E.isValidDocument()||(x=x.add(I))})}).next(()=>c.localDocuments.getOverlayedDocuments(R,P)).next(N=>{f=N;const I=[];for(const E of a){const k=LF(E,f.get(E.key).overlayedDocument);k!=null&&I.push(new vs(E.key,k,Uk(k.value.mapValue),ar.exists(!0)))}return c.mutationQueue.addMutationBatch(R,u,I,a)}).next(N=>{g=N;const I=N.applyToLocalDocumentSet(f,x);return c.documentOverlayCache.saveOverlays(R,N.batchId,I)})}).then(()=>({batchId:g.batchId,changes:Yk(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.xa[o.currentUser.toKey()];u||(u=new Bt(_e)),u=u.insert(a,c),o.xa[o.currentUser.toKey()]=u}(r,i.batchId,n),await mh(r,i.changes),await ph(r.remoteStore)}catch(i){const s=mR(i,"Failed to persist write");n.reject(s)}}function pE(t,e,n){const r=Se(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=Se(o);c.onlineState=a;let u=!1;c.queries.forEach((d,f)=>{for(const g of f.U_)g.j_(a)&&(u=!0)}),u&&VV(c)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function BV(t,e){const n=Se(t),r=e.batch.batchId;try{const i=await yV(n.localStore,e);vR(n,r,null),gR(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await mh(n,i)}catch(i){await Mk(i)}}async function zV(t,e,n){const r=Se(t);try{const i=await function(o,a){const c=Se(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,a).next(f=>(st(f!==null),d=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);vR(r,e,n),gR(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await mh(r,i)}catch(i){await Mk(i)}}function gR(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function vR(t,e,n){const r=Se(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}async function mh(t,e,n){const r=Se(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,c)=>{o.push(r.Ba(c,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:(d=void 0)===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){i.push(u);const f=pv.Ki(c.targetId,u);s.push(f)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(c,u){const d=Se(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>V.forEach(u,g=>V.forEach(g.qi,R=>d.persistence.referenceDelegate.addReference(f,g.targetId,R)).next(()=>V.forEach(g.Qi,R=>d.persistence.referenceDelegate.removeReference(f,g.targetId,R)))))}catch(f){if(!lh(f))throw f;G("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const g=f.targetId;if(!f.fromCache){const R=d.ns.get(g),P=R.snapshotVersion,x=R.withLastLimboFreeSnapshotVersion(P);d.ns=d.ns.insert(g,x)}}}(r.localStore,s))}async function WV(t,e){const n=Se(t);if(!n.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const r=await cR(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(c=>{c.reject(new Y(B.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await mh(n,r.us)}}function HV(t){const e=Se(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=BV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zV.bind(null,e),e}class mE{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=hh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return vV(this.persistence,new mV,e.initialUser,this.serializer)}createPersistence(e){return new hV(fv.Hr,this.serializer)}createSharedClientState(e){return new EV}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class qV{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>pE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=WV.bind(null,this.syncEngine),await jV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new FV}()}createDatastore(e){const n=hh(e.databaseInfo.databaseId),r=function(s){return new kV(s)}(e.databaseInfo);return function(s,o,a,c){return new AV(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new bV(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>pE(this.syncEngine,n,0),function(){return uE.D()?new uE:new IV}())}createSyncEngine(e,n){return function(i,s,o,a,c,u,d){const f=new UV(i,s,o,a,c,u);return d&&(f.La=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=Se(r);G("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Gl(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class GV{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=wt.UNAUTHENTICATED,this.clientId=Lk.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{G("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(G("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Y(B.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=mR(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Mf(t,e){t.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await cR(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function gE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await QV(t);G("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>dE(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>dE(e.remoteStore,i)),t._onlineComponents=e}function KV(t){return t.name==="FirebaseError"?t.code===B.FAILED_PRECONDITION||t.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function QV(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await Mf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!KV(n))throw n;td("Error using user provided cache. Falling back to memory cache: "+n),await Mf(t,new mE)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await Mf(t,new mE);return t._offlineComponents}async function YV(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await gE(t,t._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await gE(t,new qV))),t._onlineComponents}function JV(t){return YV(t).then(e=>e.syncEngine)}/**
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
 */function yR(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const vE=new Map;/**
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
 */function _R(t,e,n){if(!n)throw new Y(B.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function XV(t,e,n,r){if(e===!0&&r===!0)throw new Y(B.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function yE(t){if(!X.isDocumentKey(t))throw new Y(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function _E(t){if(X.isDocumentKey(t))throw new Y(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function gv(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":oe()}function pm(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gv(t);throw new Y(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class wE{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}XV("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yR((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Y(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Y(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Y(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wE({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Y(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Y(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wE(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new B2;switch(r.type){case"firstParty":return new q2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=vE.get(n);r&&(G("ComponentProvider","Removing Datastore"),vE.delete(n),r.terminate())}(this),Promise.resolve()}}function ZV(t,e,n,r={}){var i;const s=(t=pm(t,gh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&td("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=wt.MOCK_USER;else{a=NN(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new Y(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new wt(u)}t._authCredentials=new z2(new Dk(a,c))}}/**
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
 */class vv{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new vv(this.firestore,e,this._query)}}class zn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ai(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new zn(this.firestore,e,this._key)}}class ai extends vv{constructor(e,n,r){super(e,n,_F(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new zn(this.firestore,null,new X(e))}withConverter(e){return new ai(this.firestore,e,this._path)}}function eU(t,e,...n){if(t=K(t),_R("collection","path",e),t instanceof gh){const r=De.fromString(e,...n);return _E(r),new ai(t,null,r)}{if(!(t instanceof zn||t instanceof ai))throw new Y(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return _E(r),new ai(t.firestore,null,r)}}function tU(t,e,...n){if(t=K(t),arguments.length===1&&(e=Lk.newId()),_R("doc","path",e),t instanceof gh){const r=De.fromString(e,...n);return yE(r),new zn(t,null,new X(r))}{if(!(t instanceof zn||t instanceof ai))throw new Y(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return yE(r),new zn(t.firestore,t instanceof ai?t.converter:null,new X(r))}}/**
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
 */class nU{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new uR(this,"async_queue_retry"),this.hu=()=>{const n=Lf();n&&G("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Lf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Lf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new qi;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!lh(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw cs("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=mv.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&oe()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class wR extends gh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new nU}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ER(this),this._firestoreClient.terminate()}}function rU(t,e){const n=typeof t=="object"?t:Hd(),r=typeof t=="string"?t:"(default)",i=Ir(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=PN("firestore");s&&ZV(i,...s)}return i}function iU(t){return t._firestoreClient||ER(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ER(t){var e,n,r;const i=t._freezeSettings(),s=function(a,c,u,d){return new oF(a,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,yR(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new GV(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Al{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Al(gr.fromBase64String(e))}catch(n){throw new Y(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Al(gr.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class IR{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class TR{constructor(e){this._methodName=e}}/**
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
 */class SR{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}/**
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
 */const sU=/^__.*__$/;class oU{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new vs(e,this.data,this.fieldMask,n,this.fieldTransforms):new ql(e,this.data,n,this.fieldTransforms)}}function kR(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oe()}}class yv{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new yv(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return ud(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(kR(this.fu)&&sU.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class aU{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||hh(e)}Fu(e,n,r,i=!1){return new yv({fu:e,methodName:n,vu:r,path:ut.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lU(t){const e=t._freezeSettings(),n=hh(t._databaseId);return new aU(t._databaseId,!!e.ignoreUndefinedProperties,n)}function cU(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);PR("Data must be an object, but it was:",o,r);const a=CR(r,o);let c,u;if(s.merge)c=new Tn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const g=uU(e,f,n);if(!o.contains(g))throw new Y(B.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);fU(d,g)||d.push(g)}c=new Tn(d),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new oU(new En(a),c,u)}function RR(t,e){if(AR(t=K(t)))return PR("Unsupported field value:",e,t),CR(t,e);if(t instanceof TR)return function(r,i){if(!kR(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=RR(a,i.bu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=K(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return PF(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=it.fromDate(r);return{timestampValue:dm(i.serializer,s)}}if(r instanceof it){const s=new it(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:dm(i.serializer,s)}}if(r instanceof SR)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Al)return{bytesValue:BF(i.serializer,r._byteString)};if(r instanceof zn){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:aR(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${gv(r)}`)}(t,e)}function CR(t,e){const n={};return Fk(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hl(t,(r,i)=>{const s=RR(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function AR(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof it||t instanceof SR||t instanceof Al||t instanceof zn||t instanceof TR)}function PR(t,e,n){if(!AR(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=gv(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function uU(t,e,n){if((e=K(e))instanceof IR)return e._internalPath;if(typeof e=="string")return hU(t,e);throw ud("Field path arguments must be of type string or ",t,!1,void 0,n)}const dU=new RegExp("[~\\*/\\[\\]]");function hU(t,e,n){if(e.search(dU)>=0)throw ud(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new IR(...e.split("."))._internalPath}catch{throw ud(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ud(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Y(B.INVALID_ARGUMENT,a+t+c)}function fU(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */function pU(t,e,n){let r;return r=t?t.toFirestore(e):e,r}function mU(t,e,n){t=pm(t,zn);const r=pm(t.firestore,wR),i=pU(t.converter,e);return gU(r,[cU(lU(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,ar.none())])}function gU(t,e){return function(r,i){const s=new qi;return r.asyncQueue.enqueueAndForget(async()=>$V(await JV(r),i,s)),s.promise}(iU(t),e)}(function(e,n=!0){(function(i){Vo=i})(en),$t(new bt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new wR(new W2(r.getProvider("auth-internal")),new K2(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Y(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new id(u.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),nt(Yw,"4.6.4",e),nt(Yw,"4.6.4","esm2017")})();function bR(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vU=bR,NR=new hn("auth","Firebase",bR());/**
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
 */const dd=new No("@firebase/auth");function yU(t,...e){dd.logLevel<=ee.WARN&&dd.warn(`Auth (${en}): ${t}`,...e)}function pu(t,...e){dd.logLevel<=ee.ERROR&&dd.error(`Auth (${en}): ${t}`,...e)}/**
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
 */function An(t,...e){throw _v(t,...e)}function Wn(t,...e){return _v(t,...e)}function xR(t,e,n){const r=Object.assign(Object.assign({},vU()),{[e]:n});return new hn("auth","Firebase",r).create(e,{appName:t.name})}function lr(t){return xR(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _v(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return NR.create(t,...e)}function Q(t,e,...n){if(!t)throw _v(e,...n)}function nr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw pu(e),new Error(e)}function vr(t,e){t||nr(e)}/**
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
 */function mm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function _U(){return EE()==="http:"||EE()==="https:"}function EE(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function wU(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_U()||Bd()||"connection"in navigator)?navigator.onLine:!0}function EU(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ql{constructor(e,n){this.shortDelay=e,this.longDelay=n,vr(n>e,"Short delay should be less than long delay!"),this.isMobile=jT()||zd()}get(){return wU()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function wv(t,e){vr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class OR{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;nr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;nr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;nr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const IU={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const TU=new Ql(3e4,6e4);function wi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ei(t,e,n,r,i={}){return DR(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Pn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),OR.fetch()(LR(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function DR(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},IU),e);try{const i=new kU(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Wc(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wc(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Wc(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Wc(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw xR(t,d,u);An(t,d)}}catch(i){if(i instanceof He)throw i;An(t,"network-request-failed",{message:String(i)})}}async function Yl(t,e,n,r,i={}){const s=await Ei(t,e,n,r,i);return"mfaPendingCredential"in s&&An(t,"multi-factor-auth-required",{_serverResponse:s}),s}function LR(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?wv(t.config,i):`${t.config.apiScheme}://${i}`}function SU(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class kU{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Wn(this.auth,"network-request-failed")),TU.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Wn(t,e,r);return i.customData._tokenResponse=n,i}function IE(t){return t!==void 0&&t.enterprise!==void 0}class RU{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return SU(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function CU(t,e){return Ei(t,"GET","/v2/recaptchaConfig",wi(t,e))}/**
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
 */async function AU(t,e){return Ei(t,"POST","/v1/accounts:delete",e)}async function MR(t,e){return Ei(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function qa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function PU(t,e=!1){const n=K(t),r=await n.getIdToken(e),i=Ev(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:qa(jf(i.auth_time)),issuedAtTime:qa(jf(i.iat)),expirationTime:qa(jf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function jf(t){return Number(t)*1e3}function Ev(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return pu("JWT malformed, contained fewer than 3 sections"),null;try{const i=kg(n);return i?JSON.parse(i):(pu("Failed to decode base64 JWT payload"),null)}catch(i){return pu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function TE(t){const e=Ev(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Pl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof He&&bU(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function bU({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class NU{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class gm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qa(this.lastLoginAt),this.creationTime=qa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function hd(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Pl(t,MR(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?jR(s.providerUserInfo):[],a=OU(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=c?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new gm(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function xU(t){const e=K(t);await hd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function OU(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function jR(t){return t.map(e=>{var{providerId:n}=e,r=Oo(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function DU(t,e){const n=await DR(t,{},async()=>{const r=Pn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=LR(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",OR.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function LU(t,e){return Ei(t,"POST","/v2/accounts:revokeToken",wi(t,e))}/**
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
 */class to{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):TE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=TE(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await DU(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new to;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new to,this.toJSON())}_performRefresh(){return nr("not implemented")}}/**
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
 */function Dr(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Oo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new NU(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new gm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Pl(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return PU(this,e)}reload(){return xU(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new rr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await hd(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(fe(this.auth.app))return Promise.reject(lr(this.auth));const e=await this.getIdToken();return await Pl(this,AU(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,u,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,R=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,I=(u=n.createdAt)!==null&&u!==void 0?u:void 0,E=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:k,emailVerified:O,isAnonymous:L,providerData:M,stsTokenManager:T}=n;Q(k&&T,e,"internal-error");const v=to.fromJSON(this.name,T);Q(typeof k=="string",e,"internal-error"),Dr(f,e.name),Dr(g,e.name),Q(typeof O=="boolean",e,"internal-error"),Q(typeof L=="boolean",e,"internal-error"),Dr(R,e.name),Dr(P,e.name),Dr(x,e.name),Dr(N,e.name),Dr(I,e.name),Dr(E,e.name);const S=new rr({uid:k,auth:e,email:g,emailVerified:O,displayName:f,isAnonymous:L,photoURL:P,phoneNumber:R,tenantId:x,stsTokenManager:v,createdAt:I,lastLoginAt:E});return M&&Array.isArray(M)&&(S.providerData=M.map(A=>Object.assign({},A))),N&&(S._redirectEventId=N),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new to;i.updateFromServerResponse(n);const s=new rr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await hd(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?jR(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new to;a.updateFromIdToken(r);const c=new rr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new gm(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,u),c}}/**
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
 */const SE=new Map;function ir(t){vr(t instanceof Function,"Expected a class definition");let e=SE.get(t);return e?(vr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,SE.set(t,e),e)}/**
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
 */class FR{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}FR.type="NONE";const kE=FR;/**
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
 */function mu(t,e,n){return`firebase:${t}:${e}:${n}`}class no{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=mu(this.userKey,i.apiKey,s),this.fullPersistenceKey=mu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new no(ir(kE),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||ir(kE);const o=mu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const f=rr._fromJSON(e,d);u!==s&&(a=f),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new no(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new no(s,e,r))}}/**
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
 */function RE(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($R(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(VR(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zR(e))return"Blackberry";if(WR(e))return"Webos";if(Iv(e))return"Safari";if((e.includes("chrome/")||UR(e))&&!e.includes("edge/"))return"Chrome";if(BR(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function VR(t=ae()){return/firefox\//i.test(t)}function Iv(t=ae()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function UR(t=ae()){return/crios\//i.test(t)}function $R(t=ae()){return/iemobile/i.test(t)}function BR(t=ae()){return/android/i.test(t)}function zR(t=ae()){return/blackberry/i.test(t)}function WR(t=ae()){return/webos/i.test(t)}function vh(t=ae()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function MU(t=ae()){var e;return vh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jU(){return Ag()&&document.documentMode===10}function HR(t=ae()){return vh(t)||BR(t)||WR(t)||zR(t)||/windows phone/i.test(t)||$R(t)}function FU(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function qR(t,e=[]){let n;switch(t){case"Browser":n=RE(ae());break;case"Worker":n=`${RE(ae())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${en}/${r}`}/**
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
 */class VU{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function UU(t,e={}){return Ei(t,"GET","/v2/passwordPolicy",wi(t,e))}/**
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
 */const $U=6;class BU{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:$U,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class zU{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new CE(this),this.idTokenSubscription=new CE(this),this.beforeStateQueue=new VU(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=NR,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ir(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await no.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await MR(this,{idToken:e}),r=await rr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(fe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await hd(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=EU()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(fe(this.app))return Promise.reject(lr(this));const n=e?K(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return fe(this.app)?Promise.reject(lr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return fe(this.app)?Promise.reject(lr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ir(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await UU(this),n=new BU(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new hn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await LU(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ir(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await no.create(this,[ir(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qR(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&yU(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ii(t){return K(t)}class CE{constructor(e){this.auth=e,this.observer=null,this.addObserver=Pg(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let yh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function WU(t){yh=t}function GR(t){return yh.loadJS(t)}function HU(){return yh.recaptchaEnterpriseScript}function qU(){return yh.gapiScript}function GU(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const KU="recaptcha-enterprise",QU="NO_RECAPTCHA";class YU{constructor(e){this.type=KU,this.auth=Ii(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{CU(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new RU(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;IE(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(QU)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&IE(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=HU();c.length!==0&&(c+=a),GR(c).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function AE(t,e,n,r=!1){const i=new YU(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function vm(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await AE(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await AE(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function JU(t,e){const n=Ir(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(gl(s,e??{}))return i;An(i,"already-initialized")}return n.initialize({options:e})}function XU(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ir);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ZU(t,e,n){const r=Ii(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=KR(e),{host:o,port:a}=e$(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),t$()}function KR(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function e$(t){const e=KR(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:PE(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:PE(o)}}}function PE(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function t$(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Tv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return nr("not implemented")}_getIdTokenResponse(e){return nr("not implemented")}_linkToIdToken(e,n){return nr("not implemented")}_getReauthenticationResolver(e){return nr("not implemented")}}async function n$(t,e){return Ei(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function r$(t,e){return Yl(t,"POST","/v1/accounts:signInWithPassword",wi(t,e))}/**
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
 */async function i$(t,e){return Yl(t,"POST","/v1/accounts:signInWithEmailLink",wi(t,e))}async function s$(t,e){return Yl(t,"POST","/v1/accounts:signInWithEmailLink",wi(t,e))}/**
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
 */class bl extends Tv{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new bl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new bl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vm(e,n,"signInWithPassword",r$);case"emailLink":return i$(e,{email:this._email,oobCode:this._password});default:An(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vm(e,r,"signUpPassword",n$);case"emailLink":return s$(e,{idToken:n,email:this._email,oobCode:this._password});default:An(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ro(t,e){return Yl(t,"POST","/v1/accounts:signInWithIdp",wi(t,e))}/**
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
 */const o$="http://localhost";class ds extends Tv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ds(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):An("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Oo(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ds(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ro(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ro(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ro(e,n)}buildRequest(){const e={requestUri:o$,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Pn(n)}return e}}/**
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
 */function a$(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function l$(t){const e=In(Vn(t)).link,n=e?In(Vn(e)).deep_link_id:null,r=In(Vn(t)).deep_link_id;return(r?In(Vn(r)).link:null)||r||n||e||t}class Sv{constructor(e){var n,r,i,s,o,a;const c=In(Vn(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,f=a$((i=c.mode)!==null&&i!==void 0?i:null);Q(u&&d&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=d,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=l$(e);try{return new Sv(n)}catch{return null}}}/**
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
 */class $o{constructor(){this.providerId=$o.PROVIDER_ID}static credential(e,n){return bl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Sv.parseLink(n);return Q(r,"argument-error"),bl._fromEmailAndCode(e,r.code,r.tenantId)}}$o.PROVIDER_ID="password";$o.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$o.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class QR{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Jl extends QR{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ur extends Jl{constructor(){super("facebook.com")}static credential(e){return ds._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ur.credentialFromTaggedObject(e)}static credentialFromError(e){return Ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ur.credential(e.oauthAccessToken)}catch{return null}}}Ur.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ur.PROVIDER_ID="facebook.com";/**
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
 */class $r extends Jl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ds._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return $r.credential(n,r)}catch{return null}}}$r.GOOGLE_SIGN_IN_METHOD="google.com";$r.PROVIDER_ID="google.com";/**
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
 */class Br extends Jl{constructor(){super("github.com")}static credential(e){return ds._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Br.credentialFromTaggedObject(e)}static credentialFromError(e){return Br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Br.credential(e.oauthAccessToken)}catch{return null}}}Br.GITHUB_SIGN_IN_METHOD="github.com";Br.PROVIDER_ID="github.com";/**
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
 */class zr extends Jl{constructor(){super("twitter.com")}static credential(e,n){return ds._fromParams({providerId:zr.PROVIDER_ID,signInMethod:zr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return zr.credentialFromTaggedObject(e)}static credentialFromError(e){return zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return zr.credential(n,r)}catch{return null}}}zr.TWITTER_SIGN_IN_METHOD="twitter.com";zr.PROVIDER_ID="twitter.com";/**
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
 */async function c$(t,e){return Yl(t,"POST","/v1/accounts:signUp",wi(t,e))}/**
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
 */class hs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await rr._fromIdTokenResponse(e,r,i),o=bE(r);return new hs({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=bE(r);return new hs({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function bE(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class fd extends He{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,fd.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new fd(e,n,r,i)}}function YR(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?fd._fromErrorAndOperation(t,s,e,r):s})}async function u$(t,e,n=!1){const r=await Pl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return hs._forOperation(t,"link",r)}/**
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
 */async function d$(t,e,n=!1){const{auth:r}=t;if(fe(r.app))return Promise.reject(lr(r));const i="reauthenticate";try{const s=await Pl(t,YR(r,i,e,t),n);Q(s.idToken,r,"internal-error");const o=Ev(s.idToken);Q(o,r,"internal-error");const{sub:a}=o;return Q(t.uid===a,r,"user-mismatch"),hs._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&An(r,"user-mismatch"),s}}/**
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
 */async function JR(t,e,n=!1){if(fe(t.app))return Promise.reject(lr(t));const r="signIn",i=await YR(t,r,e),s=await hs._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function h$(t,e){return JR(Ii(t),e)}/**
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
 */async function XR(t){const e=Ii(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function f$(t,e,n){if(fe(t.app))return Promise.reject(lr(t));const r=Ii(t),o=await vm(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",c$).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&XR(t),c}),a=await hs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function p$(t,e,n){return fe(t.app)?Promise.reject(lr(t)):h$(K(t),$o.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&XR(t),r})}/**
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
 */function m$(t,e){return K(t).setPersistence(e)}function g$(t,e,n,r){return K(t).onIdTokenChanged(e,n,r)}function v$(t,e,n){return K(t).beforeAuthStateChanged(e,n)}function y$(t,e,n,r){return K(t).onAuthStateChanged(e,n,r)}function _$(t){return K(t).signOut()}const pd="__sak";/**
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
 */class ZR{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(pd,"1"),this.storage.removeItem(pd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function w$(){const t=ae();return Iv(t)||vh(t)}const E$=1e3,I$=10;class eC extends ZR{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=w$()&&FU(),this.fallbackToPolling=HR(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);jU()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,I$):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},E$)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}eC.type="LOCAL";const T$=eC;/**
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
 */class tC extends ZR{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}tC.type="SESSION";const kv=tC;/**
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
 */function S$(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class _h{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new _h(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),c=await S$(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_h.receivers=[];/**
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
 */function Rv(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class k${constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=Rv("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const g=f;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(d),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Hn(){return window}function R$(t){Hn().location.href=t}/**
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
 */function nC(){return typeof Hn().WorkerGlobalScope<"u"&&typeof Hn().importScripts=="function"}async function C$(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function A$(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function P$(){return nC()?self:null}/**
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
 */const rC="firebaseLocalStorageDb",b$=1,md="firebaseLocalStorage",iC="fbase_key";class Xl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wh(t,e){return t.transaction([md],e?"readwrite":"readonly").objectStore(md)}function N$(){const t=indexedDB.deleteDatabase(rC);return new Xl(t).toPromise()}function ym(){const t=indexedDB.open(rC,b$);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(md,{keyPath:iC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(md)?e(r):(r.close(),await N$(),e(await ym()))})})}async function NE(t,e,n){const r=wh(t,!0).put({[iC]:e,value:n});return new Xl(r).toPromise()}async function x$(t,e){const n=wh(t,!1).get(e),r=await new Xl(n).toPromise();return r===void 0?null:r.value}function xE(t,e){const n=wh(t,!0).delete(e);return new Xl(n).toPromise()}const O$=800,D$=3;class sC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ym(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>D$)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_h._getInstance(P$()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await C$(),!this.activeServiceWorker)return;this.sender=new k$(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||A$()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ym();return await NE(e,pd,"1"),await xE(e,pd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>NE(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>x$(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>xE(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=wh(i,!1).getAll();return new Xl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),O$)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sC.type="LOCAL";const L$=sC;new Ql(3e4,6e4);/**
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
 */function M$(t,e){return e?ir(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Cv extends Tv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ro(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ro(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ro(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function j$(t){return JR(t.auth,new Cv(t),t.bypassAuthState)}function F$(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),d$(n,new Cv(t),t.bypassAuthState)}async function V$(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),u$(n,new Cv(t),t.bypassAuthState)}/**
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
 */class oC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return j$;case"linkViaPopup":case"linkViaRedirect":return V$;case"reauthViaPopup":case"reauthViaRedirect":return F$;default:An(this.auth,"internal-error")}}resolve(e){vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const U$=new Ql(2e3,1e4);class Hs extends oC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Hs.currentPopupAction&&Hs.currentPopupAction.cancel(),Hs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){vr(this.filter.length===1,"Popup operations only handle one event");const e=Rv();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,U$.get())};e()}}Hs.currentPopupAction=null;/**
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
 */const $$="pendingRedirect",gu=new Map;class B$ extends oC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=gu.get(this.auth._key());if(!e){try{const r=await z$(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}gu.set(this.auth._key(),e)}return this.bypassAuthState||gu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function z$(t,e){const n=q$(e),r=H$(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function W$(t,e){gu.set(t._key(),e)}function H$(t){return ir(t._redirectPersistence)}function q$(t){return mu($$,t.config.apiKey,t.name)}async function G$(t,e){return await Ii(t)._initializationPromise,aC(t,e,!1)}async function aC(t,e,n=!1){if(fe(t.app))return Promise.reject(lr(t));const r=Ii(t),i=M$(r,e),o=await new B$(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const K$=10*60*1e3;class Q${constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Y$(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!lC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Wn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=K$&&this.cachedEventUids.clear(),this.cachedEventUids.has(OE(e))}saveEventToCache(e){this.cachedEventUids.add(OE(e)),this.lastProcessedEventTime=Date.now()}}function OE(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function lC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Y$(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lC(t);default:return!1}}/**
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
 */async function J$(t,e={}){return Ei(t,"GET","/v1/projects",e)}/**
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
 */const X$=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Z$=/^https?/;async function e4(t){if(t.config.emulator)return;const{authorizedDomains:e}=await J$(t);for(const n of e)try{if(t4(n))return}catch{}An(t,"unauthorized-domain")}function t4(t){const e=mm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Z$.test(n))return!1;if(X$.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const n4=new Ql(3e4,6e4);function DE(){const t=Hn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function r4(t){return new Promise((e,n)=>{var r,i,s;function o(){DE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{DE(),n(Wn(t,"network-request-failed"))},timeout:n4.get()})}if(!((i=(r=Hn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Hn().gapi)===null||s===void 0)&&s.load)o();else{const a=GU("iframefcb");return Hn()[a]=()=>{gapi.load?o():n(Wn(t,"network-request-failed"))},GR(`${qU()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw vu=null,e})}let vu=null;function i4(t){return vu=vu||r4(t),vu}/**
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
 */const s4=new Ql(5e3,15e3),o4="__/auth/iframe",a4="emulator/auth/iframe",l4={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},c4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function u4(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wv(e,a4):`https://${t.config.authDomain}/${o4}`,r={apiKey:e.apiKey,appName:t.name,v:en},i=c4.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Pn(r).slice(1)}`}async function d4(t){const e=await i4(t),n=Hn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:u4(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:l4,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Wn(t,"network-request-failed"),a=Hn().setTimeout(()=>{s(o)},s4.get());function c(){Hn().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const h4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},f4=500,p4=600,m4="_blank",g4="http://localhost";class LE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function v4(t,e,n,r=f4,i=p4){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},h4),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ae().toLowerCase();n&&(a=UR(u)?m4:n),VR(u)&&(e=e||g4,c.scrollbars="yes");const d=Object.entries(c).reduce((g,[R,P])=>`${g}${R}=${P},`,"");if(MU(u)&&a!=="_self")return y4(e||"",a),new LE(null);const f=window.open(e||"",a,d);Q(f,t,"popup-blocked");try{f.focus()}catch{}return new LE(f)}function y4(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const _4="__/auth/handler",w4="emulator/auth/handler",E4=encodeURIComponent("fac");async function ME(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:en,eventId:i};if(e instanceof QR){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",$T(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof Jl){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=await t._getAppCheckToken(),u=c?`#${E4}=${encodeURIComponent(c)}`:"";return`${I4(t)}?${Pn(a).slice(1)}${u}`}function I4({config:t}){return t.emulator?wv(t,w4):`https://${t.authDomain}/${_4}`}/**
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
 */const Ff="webStorageSupport";class T4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kv,this._completeRedirectFn=aC,this._overrideRedirectResult=W$}async _openPopup(e,n,r,i){var s;vr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ME(e,n,r,mm(),i);return v4(e,o,Rv())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await ME(e,n,r,mm(),i);return R$(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(vr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await d4(e),r=new Q$(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ff,{type:Ff},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ff];o!==void 0&&n(!!o),An(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=e4(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return HR()||Iv()||vh()}}const S4=T4;var jE="@firebase/auth",FE="1.7.5";/**
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
 */class k4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function R4(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function C4(t){$t(new bt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qR(t)},u=new zU(r,i,s,c);return XU(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$t(new bt("auth-internal",e=>{const n=Ii(e.getProvider("auth").getImmediate());return(r=>new k4(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nt(jE,FE,R4(t)),nt(jE,FE,"esm2017")}/**
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
 */const A4=5*60,P4=Rg("authIdTokenMaxAge")||A4;let VE=null;const b4=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>P4)return;const i=n==null?void 0:n.token;VE!==i&&(VE=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Av(t=Hd()){const e=Ir(t,"auth");if(e.isInitialized())return e.getImmediate();const n=JU(t,{popupRedirectResolver:S4,persistence:[L$,T$,kv]}),r=Rg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=b4(s.toString());v$(n,o,()=>o(n.currentUser)),g$(n,a=>o(a))}}const i=LT("auth");return i&&ZU(n,`http://${i}`),n}function N4(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}WU({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Wn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",N4().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});C4("Browser");const cC={apiKey:"AIzaSyC0LGKfT3SJq4aSWSj0biLp3pBAFzsryyQ",authDomain:"personal-site-d1063.firebaseapp.com",projectId:"personal-site-d1063",storageBucket:"personal-site-d1063.appspot.com",messagingSenderId:"55905191484",appId:"1:55905191484:web:59c455a2c2b8b99c69a539",measurementId:"G-W6JCHKHSRR"},Pv=Wd(cC),Vf=Av(Pv);F2(Pv);const x4=rU(Pv);var uC={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var a=arguments[o];a&&(s=i(s,r(a)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var a in s)e.call(s,a)&&s[a]&&(o=i(o,a));return o}function i(s,o){return o?s?s+" "+o:s+o:s}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(uC);var O4=uC.exports;const me=Ol(O4);function _m(){return _m=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_m.apply(null,arguments)}function dC(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.includes(r))continue;n[r]=t[r]}return n}function UE(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function D4(t){var e=L4(t,"string");return typeof e=="symbol"?e:String(e)}function L4(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function M4(t,e,n){var r=_.useRef(t!==void 0),i=_.useState(e),s=i[0],o=i[1],a=t!==void 0,c=r.current;return r.current=a,!a&&c&&s!==e&&o(e),[a?t:s,_.useCallback(function(u){for(var d=arguments.length,f=new Array(d>1?d-1:0),g=1;g<d;g++)f[g-1]=arguments[g];n&&n.apply(void 0,[u].concat(f)),o(u)},[n])]}function j4(t,e){return Object.keys(e).reduce(function(n,r){var i,s=n,o=s[UE(r)],a=s[r],c=dC(s,[UE(r),r].map(D4)),u=e[r],d=M4(a,o,t[u]),f=d[0],g=d[1];return _m({},c,(i={},i[r]=f,i[u]=g,i))},t)}function wm(t,e){return wm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},wm(t,e)}function F4(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,wm(t,e)}const V4=["xxl","xl","lg","md","sm","xs"],U4="xs",Eh=_.createContext({prefixes:{},breakpoints:V4,minBreakpoint:U4});function ke(t,e){const{prefixes:n}=_.useContext(Eh);return t||n[e]||e}function $4(){const{breakpoints:t}=_.useContext(Eh);return t}function B4(){const{minBreakpoint:t}=_.useContext(Eh);return t}function z4(){const{dir:t}=_.useContext(Eh);return t==="rtl"}function Ih(t){return t&&t.ownerDocument||document}function W4(t){var e=Ih(t);return e&&e.defaultView||window}function H4(t,e){return W4(t).getComputedStyle(t,e)}var q4=/([A-Z])/g;function G4(t){return t.replace(q4,"-$1").toLowerCase()}var K4=/^ms-/;function Hc(t){return G4(t).replace(K4,"-ms-")}var Q4=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function Y4(t){return!!(t&&Q4.test(t))}function Ki(t,e){var n="",r="";if(typeof e=="string")return t.style.getPropertyValue(Hc(e))||H4(t).getPropertyValue(Hc(e));Object.keys(e).forEach(function(i){var s=e[i];!s&&s!==0?t.style.removeProperty(Hc(i)):Y4(i)?r+=i+"("+s+") ":n+=Hc(i)+": "+s+";"}),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n}var hC={exports:{}},J4="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",X4=J4,Z4=X4;function fC(){}function pC(){}pC.resetWarningCache=fC;var e9=function(){function t(r,i,s,o,a,c){if(c!==Z4){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:pC,resetWarningCache:fC};return n.PropTypes=n,n};hC.exports=e9();var t9=hC.exports;const cr=Ol(t9),$E={disabled:!1},mC=Tt.createContext(null);var n9=function(e){return e.scrollTop},Aa="unmounted",Li="exited",jn="entering",Wr="entered",gd="exiting",kr=function(t){F4(e,t);function e(r,i){var s;s=t.call(this,r,i)||this;var o=i,a=o&&!o.isMounting?r.enter:r.appear,c;return s.appearStatus=null,r.in?a?(c=Li,s.appearStatus=jn):c=Wr:r.unmountOnExit||r.mountOnEnter?c=Aa:c=Li,s.state={status:c},s.nextCallback=null,s}e.getDerivedStateFromProps=function(i,s){var o=i.in;return o&&s.status===Aa?{status:Li}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var s=null;if(i!==this.props){var o=this.state.status;this.props.in?o!==jn&&o!==Wr&&(s=jn):(o===jn||o===Wr)&&(s=gd)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,s,o,a;return s=o=a=i,i!=null&&typeof i!="number"&&(s=i.exit,o=i.enter,a=i.appear!==void 0?i.appear:o),{exit:s,enter:o,appear:a}},n.updateStatus=function(i,s){if(i===void 0&&(i=!1),s!==null)if(this.cancelNextCallback(),s===jn){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:Ws.findDOMNode(this);o&&n9(o)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Li&&this.setState({status:Aa})},n.performEnter=function(i){var s=this,o=this.props.enter,a=this.context?this.context.isMounting:i,c=this.props.nodeRef?[a]:[Ws.findDOMNode(this),a],u=c[0],d=c[1],f=this.getTimeouts(),g=a?f.appear:f.enter;if(!i&&!o||$E.disabled){this.safeSetState({status:Wr},function(){s.props.onEntered(u)});return}this.props.onEnter(u,d),this.safeSetState({status:jn},function(){s.props.onEntering(u,d),s.onTransitionEnd(g,function(){s.safeSetState({status:Wr},function(){s.props.onEntered(u,d)})})})},n.performExit=function(){var i=this,s=this.props.exit,o=this.getTimeouts(),a=this.props.nodeRef?void 0:Ws.findDOMNode(this);if(!s||$E.disabled){this.safeSetState({status:Li},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:gd},function(){i.props.onExiting(a),i.onTransitionEnd(o.exit,function(){i.safeSetState({status:Li},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,s){s=this.setNextCallback(s),this.setState(i,s)},n.setNextCallback=function(i){var s=this,o=!0;return this.nextCallback=function(a){o&&(o=!1,s.nextCallback=null,i(a))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(i,s){this.setNextCallback(s);var o=this.props.nodeRef?this.props.nodeRef.current:Ws.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!o||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var c=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],u=c[0],d=c[1];this.props.addEndListener(u,d)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===Aa)return null;var s=this.props,o=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var a=dC(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Tt.createElement(mC.Provider,{value:null},typeof o=="function"?o(i,a):Tt.cloneElement(Tt.Children.only(o),a))},e}(Tt.Component);kr.contextType=mC;kr.propTypes={};function ks(){}kr.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ks,onEntering:ks,onEntered:ks,onExit:ks,onExiting:ks,onExited:ks};kr.UNMOUNTED=Aa;kr.EXITED=Li;kr.ENTERING=jn;kr.ENTERED=Wr;kr.EXITING=gd;const Th=!!(typeof window<"u"&&window.document&&window.document.createElement);var Em=!1,Im=!1;try{var Uf={get passive(){return Em=!0},get once(){return Im=Em=!0}};Th&&(window.addEventListener("test",Uf,Uf),window.removeEventListener("test",Uf,!0))}catch{}function gC(t,e,n,r){if(r&&typeof r!="boolean"&&!Im){var i=r.once,s=r.capture,o=n;!Im&&i&&(o=n.__once||function a(c){this.removeEventListener(e,a,s),n.call(this,c)},n.__once=o),t.addEventListener(e,o,Em?r:s)}t.addEventListener(e,n,r)}function r9(t,e,n,r){var i=r&&typeof r!="boolean"?r.capture:r;t.removeEventListener(e,n,i),n.__once&&t.removeEventListener(e,n.__once,i)}function Qr(t,e,n,r){return gC(t,e,n,r),function(){r9(t,e,n,r)}}function i9(t,e,n,r){if(r===void 0&&(r=!0),t){var i=document.createEvent("HTMLEvents");i.initEvent(e,n,r),t.dispatchEvent(i)}}function s9(t){var e=Ki(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function o9(t,e,n){n===void 0&&(n=5);var r=!1,i=setTimeout(function(){r||i9(t,"transitionend",!0)},e+n),s=Qr(t,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(i),s()}}function a9(t,e,n,r){n==null&&(n=s9(t)||0);var i=o9(t,n,r),s=Qr(t,"transitionend",e);return function(){i(),s()}}function BE(t,e){const n=Ki(t,e)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function vC(t,e){const n=BE(t,"transitionDuration"),r=BE(t,"transitionDelay"),i=a9(t,s=>{s.target===t&&(i(),e(s))},n+r)}function l9(t){t.offsetHeight}const zE=t=>!t||typeof t=="function"?t:e=>{t.current=e};function c9(t,e){const n=zE(t),r=zE(e);return i=>{n&&n(i),r&&r(i)}}function Bo(t,e){return _.useMemo(()=>c9(t,e),[t,e])}function u9(t){return t&&"setState"in t?Ws.findDOMNode(t):t??null}const yC=Tt.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,onExited:s,addEndListener:o,children:a,childRef:c,...u},d)=>{const f=_.useRef(null),g=Bo(f,c),R=M=>{g(u9(M))},P=M=>T=>{M&&f.current&&M(f.current,T)},x=_.useCallback(P(t),[t]),N=_.useCallback(P(e),[e]),I=_.useCallback(P(n),[n]),E=_.useCallback(P(r),[r]),k=_.useCallback(P(i),[i]),O=_.useCallback(P(s),[s]),L=_.useCallback(P(o),[o]);return m.jsx(kr,{ref:d,...u,onEnter:x,onEntered:I,onEntering:N,onExit:E,onExited:O,onExiting:k,addEndListener:L,nodeRef:f,children:typeof a=="function"?(M,T)=>a(M,{...T,ref:R}):Tt.cloneElement(a,{ref:R})})});function d9(t){const e=_.useRef(t);return _.useEffect(()=>{e.current=t},[t]),e}function et(t){const e=d9(t);return _.useCallback(function(...n){return e.current&&e.current(...n)},[e])}const h9=t=>_.forwardRef((e,n)=>m.jsx("div",{...e,ref:n,className:me(e.className,t)}));function f9(){return _.useState(null)}function p9(t,e,n,r=!1){const i=et(n);_.useEffect(()=>{const s=typeof t=="function"?t():t;return s.addEventListener(e,i,r),()=>s.removeEventListener(e,i,r)},[t])}function _C(){const t=_.useRef(!0),e=_.useRef(()=>t.current);return _.useEffect(()=>(t.current=!0,()=>{t.current=!1}),[]),e.current}function wC(t){const e=_.useRef(null);return _.useEffect(()=>{e.current=t}),e.current}const m9=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",g9=typeof document<"u",vd=g9||m9?_.useLayoutEffect:_.useEffect,v9=["as","disabled"];function y9(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function _9(t){return!t||t.trim()==="#"}function bv({tagName:t,disabled:e,href:n,target:r,rel:i,role:s,onClick:o,tabIndex:a=0,type:c}){t||(n!=null||r!=null||i!=null?t="a":t="button");const u={tagName:t};if(t==="button")return[{type:c||"button",disabled:e},u];const d=g=>{if((e||t==="a"&&_9(n))&&g.preventDefault(),e){g.stopPropagation();return}o==null||o(g)},f=g=>{g.key===" "&&(g.preventDefault(),d(g))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:s??"button",disabled:void 0,tabIndex:e?void 0:a,href:n,target:t==="a"?r:void 0,"aria-disabled":e||void 0,rel:t==="a"?i:void 0,onClick:d,onKeyDown:f},u]}const EC=_.forwardRef((t,e)=>{let{as:n,disabled:r}=t,i=y9(t,v9);const[s,{tagName:o}]=bv(Object.assign({tagName:n,disabled:r},i));return m.jsx(o,Object.assign({},i,s,{ref:e}))});EC.displayName="Button";const w9=["onKeyDown"];function E9(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function I9(t){return!t||t.trim()==="#"}const IC=_.forwardRef((t,e)=>{let{onKeyDown:n}=t,r=E9(t,w9);const[i]=bv(Object.assign({tagName:"a"},r)),s=et(o=>{i.onKeyDown(o),n==null||n(o)});return I9(r.href)||r.role==="button"?m.jsx("a",Object.assign({ref:e},r,i,{onKeyDown:s})):m.jsx("a",Object.assign({ref:e},r,{onKeyDown:n}))});IC.displayName="Anchor";const T9={[jn]:"show",[Wr]:"show"},TC=_.forwardRef(({className:t,children:e,transitionClasses:n={},onEnter:r,...i},s)=>{const o={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...i},a=_.useCallback((c,u)=>{l9(c),r==null||r(c,u)},[r]);return m.jsx(yC,{ref:s,addEndListener:vC,...o,onEnter:a,childRef:e.ref,children:(c,u)=>_.cloneElement(e,{...u,className:me("fade",t,e.props.className,T9[c],n[c])})})});TC.displayName="Fade";const S9={"aria-label":cr.string,onClick:cr.func,variant:cr.oneOf(["white"])},Nv=_.forwardRef(({className:t,variant:e,"aria-label":n="Close",...r},i)=>m.jsx("button",{ref:i,type:"button",className:me("btn-close",e&&`btn-close-${e}`,t),"aria-label":n,...r}));Nv.displayName="CloseButton";Nv.propTypes=S9;const Sh=_.forwardRef(({as:t,bsPrefix:e,variant:n="primary",size:r,active:i=!1,disabled:s=!1,className:o,...a},c)=>{const u=ke(e,"btn"),[d,{tagName:f}]=bv({tagName:t,disabled:s,...a}),g=f;return m.jsx(g,{...d,...a,ref:c,disabled:s,className:me(o,u,i&&"active",n&&`${u}-${n}`,r&&`${u}-${r}`,a.href&&s&&"disabled")})});Sh.displayName="Button";function k9(t){const e=_.useRef(t);return e.current=t,e}function R9(t){const e=k9(t);_.useEffect(()=>()=>e.current(),[])}function C9(t,e){return _.Children.toArray(t).some(n=>_.isValidElement(n)&&n.type===e)}function A9({as:t,bsPrefix:e,className:n,...r}){e=ke(e,"col");const i=$4(),s=B4(),o=[],a=[];return i.forEach(c=>{const u=r[c];delete r[c];let d,f,g;typeof u=="object"&&u!=null?{span:d,offset:f,order:g}=u:d=u;const R=c!==s?`-${c}`:"";d&&o.push(d===!0?`${e}${R}`:`${e}${R}-${d}`),g!=null&&a.push(`order${R}-${g}`),f!=null&&a.push(`offset${R}-${f}`)}),[{...r,className:me(n,...o,...a)},{as:t,bsPrefix:e,spans:o}]}const SC=_.forwardRef((t,e)=>{const[{className:n,...r},{as:i="div",bsPrefix:s,spans:o}]=A9(t);return m.jsx(i,{...r,ref:e,className:me(n,!o.length&&s)})});SC.displayName="Col";var P9=Function.prototype.bind.call(Function.prototype.call,[].slice);function jr(t,e){return P9(t.querySelectorAll(e))}function b9(t,e,n){const r=_.useRef(t!==void 0),[i,s]=_.useState(e),o=t!==void 0,a=r.current;return r.current=o,!o&&a&&i!==e&&s(e),[o?t:i,_.useCallback((...c)=>{const[u,...d]=c;let f=n==null?void 0:n(u,...d);return s(u),f},[n])]}function N9(){const[,t]=_.useReducer(e=>!e,!1);return t}const kh=_.createContext(null);var WE=Object.prototype.hasOwnProperty;function HE(t,e,n){for(n of t.keys())if(Ga(n,e))return n}function Ga(t,e){var n,r,i;if(t===e)return!0;if(t&&e&&(n=t.constructor)===e.constructor){if(n===Date)return t.getTime()===e.getTime();if(n===RegExp)return t.toString()===e.toString();if(n===Array){if((r=t.length)===e.length)for(;r--&&Ga(t[r],e[r]););return r===-1}if(n===Set){if(t.size!==e.size)return!1;for(r of t)if(i=r,i&&typeof i=="object"&&(i=HE(e,i),!i)||!e.has(i))return!1;return!0}if(n===Map){if(t.size!==e.size)return!1;for(r of t)if(i=r[0],i&&typeof i=="object"&&(i=HE(e,i),!i)||!Ga(r[1],e.get(i)))return!1;return!0}if(n===ArrayBuffer)t=new Uint8Array(t),e=new Uint8Array(e);else if(n===DataView){if((r=t.byteLength)===e.byteLength)for(;r--&&t.getInt8(r)===e.getInt8(r););return r===-1}if(ArrayBuffer.isView(t)){if((r=t.byteLength)===e.byteLength)for(;r--&&t[r]===e[r];);return r===-1}if(!n||typeof t=="object"){r=0;for(n in t)if(WE.call(t,n)&&++r&&!WE.call(e,n)||!(n in e)||!Ga(t[n],e[n]))return!1;return Object.keys(e).length===r}}return t!==t&&e!==e}function x9(t){const e=_C();return[t[0],_.useCallback(n=>{if(e())return t[1](n)},[e,t[1]])]}var Vt="top",un="bottom",dn="right",Ut="left",xv="auto",Zl=[Vt,un,dn,Ut],Eo="start",Nl="end",O9="clippingParents",kC="viewport",va="popper",D9="reference",qE=Zl.reduce(function(t,e){return t.concat([e+"-"+Eo,e+"-"+Nl])},[]),RC=[].concat(Zl,[xv]).reduce(function(t,e){return t.concat([e,e+"-"+Eo,e+"-"+Nl])},[]),L9="beforeRead",M9="read",j9="afterRead",F9="beforeMain",V9="main",U9="afterMain",$9="beforeWrite",B9="write",z9="afterWrite",W9=[L9,M9,j9,F9,V9,U9,$9,B9,z9];function qn(t){return t.split("-")[0]}function Jt(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function fs(t){var e=Jt(t).Element;return t instanceof e||t instanceof Element}function Gn(t){var e=Jt(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Ov(t){if(typeof ShadowRoot>"u")return!1;var e=Jt(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}var Qi=Math.max,yd=Math.min,Io=Math.round;function Tm(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function CC(){return!/^((?!chrome|android).)*safari/i.test(Tm())}function To(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var r=t.getBoundingClientRect(),i=1,s=1;e&&Gn(t)&&(i=t.offsetWidth>0&&Io(r.width)/t.offsetWidth||1,s=t.offsetHeight>0&&Io(r.height)/t.offsetHeight||1);var o=fs(t)?Jt(t):window,a=o.visualViewport,c=!CC()&&n,u=(r.left+(c&&a?a.offsetLeft:0))/i,d=(r.top+(c&&a?a.offsetTop:0))/s,f=r.width/i,g=r.height/s;return{width:f,height:g,top:d,right:u+f,bottom:d+g,left:u,x:u,y:d}}function Dv(t){var e=To(t),n=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:r}}function AC(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&Ov(n)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function mi(t){return t?(t.nodeName||"").toLowerCase():null}function yr(t){return Jt(t).getComputedStyle(t)}function H9(t){return["table","td","th"].indexOf(mi(t))>=0}function Ti(t){return((fs(t)?t.ownerDocument:t.document)||window.document).documentElement}function Rh(t){return mi(t)==="html"?t:t.assignedSlot||t.parentNode||(Ov(t)?t.host:null)||Ti(t)}function GE(t){return!Gn(t)||yr(t).position==="fixed"?null:t.offsetParent}function q9(t){var e=/firefox/i.test(Tm()),n=/Trident/i.test(Tm());if(n&&Gn(t)){var r=yr(t);if(r.position==="fixed")return null}var i=Rh(t);for(Ov(i)&&(i=i.host);Gn(i)&&["html","body"].indexOf(mi(i))<0;){var s=yr(i);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||e&&s.willChange==="filter"||e&&s.filter&&s.filter!=="none")return i;i=i.parentNode}return null}function ec(t){for(var e=Jt(t),n=GE(t);n&&H9(n)&&yr(n).position==="static";)n=GE(n);return n&&(mi(n)==="html"||mi(n)==="body"&&yr(n).position==="static")?e:n||q9(t)||e}function Lv(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Ka(t,e,n){return Qi(t,yd(e,n))}function G9(t,e,n){var r=Ka(t,e,n);return r>n?n:r}function PC(){return{top:0,right:0,bottom:0,left:0}}function bC(t){return Object.assign({},PC(),t)}function NC(t,e){return e.reduce(function(n,r){return n[r]=t,n},{})}var K9=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,bC(typeof e!="number"?e:NC(e,Zl))};function Q9(t){var e,n=t.state,r=t.name,i=t.options,s=n.elements.arrow,o=n.modifiersData.popperOffsets,a=qn(n.placement),c=Lv(a),u=[Ut,dn].indexOf(a)>=0,d=u?"height":"width";if(!(!s||!o)){var f=K9(i.padding,n),g=Dv(s),R=c==="y"?Vt:Ut,P=c==="y"?un:dn,x=n.rects.reference[d]+n.rects.reference[c]-o[c]-n.rects.popper[d],N=o[c]-n.rects.reference[c],I=ec(s),E=I?c==="y"?I.clientHeight||0:I.clientWidth||0:0,k=x/2-N/2,O=f[R],L=E-g[d]-f[P],M=E/2-g[d]/2+k,T=Ka(O,M,L),v=c;n.modifiersData[r]=(e={},e[v]=T,e.centerOffset=T-M,e)}}function Y9(t){var e=t.state,n=t.options,r=n.element,i=r===void 0?"[data-popper-arrow]":r;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||AC(e.elements.popper,i)&&(e.elements.arrow=i))}const J9={name:"arrow",enabled:!0,phase:"main",fn:Q9,effect:Y9,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function So(t){return t.split("-")[1]}var X9={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Z9(t,e){var n=t.x,r=t.y,i=e.devicePixelRatio||1;return{x:Io(n*i)/i||0,y:Io(r*i)/i||0}}function KE(t){var e,n=t.popper,r=t.popperRect,i=t.placement,s=t.variation,o=t.offsets,a=t.position,c=t.gpuAcceleration,u=t.adaptive,d=t.roundOffsets,f=t.isFixed,g=o.x,R=g===void 0?0:g,P=o.y,x=P===void 0?0:P,N=typeof d=="function"?d({x:R,y:x}):{x:R,y:x};R=N.x,x=N.y;var I=o.hasOwnProperty("x"),E=o.hasOwnProperty("y"),k=Ut,O=Vt,L=window;if(u){var M=ec(n),T="clientHeight",v="clientWidth";if(M===Jt(n)&&(M=Ti(n),yr(M).position!=="static"&&a==="absolute"&&(T="scrollHeight",v="scrollWidth")),M=M,i===Vt||(i===Ut||i===dn)&&s===Nl){O=un;var S=f&&M===L&&L.visualViewport?L.visualViewport.height:M[T];x-=S-r.height,x*=c?1:-1}if(i===Ut||(i===Vt||i===un)&&s===Nl){k=dn;var A=f&&M===L&&L.visualViewport?L.visualViewport.width:M[v];R-=A-r.width,R*=c?1:-1}}var b=Object.assign({position:a},u&&X9),C=d===!0?Z9({x:R,y:x},Jt(n)):{x:R,y:x};if(R=C.x,x=C.y,c){var w;return Object.assign({},b,(w={},w[O]=E?"0":"",w[k]=I?"0":"",w.transform=(L.devicePixelRatio||1)<=1?"translate("+R+"px, "+x+"px)":"translate3d("+R+"px, "+x+"px, 0)",w))}return Object.assign({},b,(e={},e[O]=E?x+"px":"",e[k]=I?R+"px":"",e.transform="",e))}function eB(t){var e=t.state,n=t.options,r=n.gpuAcceleration,i=r===void 0?!0:r,s=n.adaptive,o=s===void 0?!0:s,a=n.roundOffsets,c=a===void 0?!0:a,u={placement:qn(e.placement),variation:So(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,KE(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:c})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,KE(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const tB={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:eB,data:{}};var qc={passive:!0};function nB(t){var e=t.state,n=t.instance,r=t.options,i=r.scroll,s=i===void 0?!0:i,o=r.resize,a=o===void 0?!0:o,c=Jt(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return s&&u.forEach(function(d){d.addEventListener("scroll",n.update,qc)}),a&&c.addEventListener("resize",n.update,qc),function(){s&&u.forEach(function(d){d.removeEventListener("scroll",n.update,qc)}),a&&c.removeEventListener("resize",n.update,qc)}}const rB={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:nB,data:{}};var iB={left:"right",right:"left",bottom:"top",top:"bottom"};function yu(t){return t.replace(/left|right|bottom|top/g,function(e){return iB[e]})}var sB={start:"end",end:"start"};function QE(t){return t.replace(/start|end/g,function(e){return sB[e]})}function Mv(t){var e=Jt(t),n=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:n,scrollTop:r}}function jv(t){return To(Ti(t)).left+Mv(t).scrollLeft}function oB(t,e){var n=Jt(t),r=Ti(t),i=n.visualViewport,s=r.clientWidth,o=r.clientHeight,a=0,c=0;if(i){s=i.width,o=i.height;var u=CC();(u||!u&&e==="fixed")&&(a=i.offsetLeft,c=i.offsetTop)}return{width:s,height:o,x:a+jv(t),y:c}}function aB(t){var e,n=Ti(t),r=Mv(t),i=(e=t.ownerDocument)==null?void 0:e.body,s=Qi(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=Qi(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-r.scrollLeft+jv(t),c=-r.scrollTop;return yr(i||n).direction==="rtl"&&(a+=Qi(n.clientWidth,i?i.clientWidth:0)-s),{width:s,height:o,x:a,y:c}}function Fv(t){var e=yr(t),n=e.overflow,r=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function xC(t){return["html","body","#document"].indexOf(mi(t))>=0?t.ownerDocument.body:Gn(t)&&Fv(t)?t:xC(Rh(t))}function Qa(t,e){var n;e===void 0&&(e=[]);var r=xC(t),i=r===((n=t.ownerDocument)==null?void 0:n.body),s=Jt(r),o=i?[s].concat(s.visualViewport||[],Fv(r)?r:[]):r,a=e.concat(o);return i?a:a.concat(Qa(Rh(o)))}function Sm(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function lB(t,e){var n=To(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function YE(t,e,n){return e===kC?Sm(oB(t,n)):fs(e)?lB(e,n):Sm(aB(Ti(t)))}function cB(t){var e=Qa(Rh(t)),n=["absolute","fixed"].indexOf(yr(t).position)>=0,r=n&&Gn(t)?ec(t):t;return fs(r)?e.filter(function(i){return fs(i)&&AC(i,r)&&mi(i)!=="body"}):[]}function uB(t,e,n,r){var i=e==="clippingParents"?cB(t):[].concat(e),s=[].concat(i,[n]),o=s[0],a=s.reduce(function(c,u){var d=YE(t,u,r);return c.top=Qi(d.top,c.top),c.right=yd(d.right,c.right),c.bottom=yd(d.bottom,c.bottom),c.left=Qi(d.left,c.left),c},YE(t,o,r));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function OC(t){var e=t.reference,n=t.element,r=t.placement,i=r?qn(r):null,s=r?So(r):null,o=e.x+e.width/2-n.width/2,a=e.y+e.height/2-n.height/2,c;switch(i){case Vt:c={x:o,y:e.y-n.height};break;case un:c={x:o,y:e.y+e.height};break;case dn:c={x:e.x+e.width,y:a};break;case Ut:c={x:e.x-n.width,y:a};break;default:c={x:e.x,y:e.y}}var u=i?Lv(i):null;if(u!=null){var d=u==="y"?"height":"width";switch(s){case Eo:c[u]=c[u]-(e[d]/2-n[d]/2);break;case Nl:c[u]=c[u]+(e[d]/2-n[d]/2);break}}return c}function xl(t,e){e===void 0&&(e={});var n=e,r=n.placement,i=r===void 0?t.placement:r,s=n.strategy,o=s===void 0?t.strategy:s,a=n.boundary,c=a===void 0?O9:a,u=n.rootBoundary,d=u===void 0?kC:u,f=n.elementContext,g=f===void 0?va:f,R=n.altBoundary,P=R===void 0?!1:R,x=n.padding,N=x===void 0?0:x,I=bC(typeof N!="number"?N:NC(N,Zl)),E=g===va?D9:va,k=t.rects.popper,O=t.elements[P?E:g],L=uB(fs(O)?O:O.contextElement||Ti(t.elements.popper),c,d,o),M=To(t.elements.reference),T=OC({reference:M,element:k,strategy:"absolute",placement:i}),v=Sm(Object.assign({},k,T)),S=g===va?v:M,A={top:L.top-S.top+I.top,bottom:S.bottom-L.bottom+I.bottom,left:L.left-S.left+I.left,right:S.right-L.right+I.right},b=t.modifiersData.offset;if(g===va&&b){var C=b[i];Object.keys(A).forEach(function(w){var J=[dn,un].indexOf(w)>=0?1:-1,ne=[Vt,un].indexOf(w)>=0?"y":"x";A[w]+=C[ne]*J})}return A}function dB(t,e){e===void 0&&(e={});var n=e,r=n.placement,i=n.boundary,s=n.rootBoundary,o=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,u=c===void 0?RC:c,d=So(r),f=d?a?qE:qE.filter(function(P){return So(P)===d}):Zl,g=f.filter(function(P){return u.indexOf(P)>=0});g.length===0&&(g=f);var R=g.reduce(function(P,x){return P[x]=xl(t,{placement:x,boundary:i,rootBoundary:s,padding:o})[qn(x)],P},{});return Object.keys(R).sort(function(P,x){return R[P]-R[x]})}function hB(t){if(qn(t)===xv)return[];var e=yu(t);return[QE(t),e,QE(e)]}function fB(t){var e=t.state,n=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var i=n.mainAxis,s=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!0:o,c=n.fallbackPlacements,u=n.padding,d=n.boundary,f=n.rootBoundary,g=n.altBoundary,R=n.flipVariations,P=R===void 0?!0:R,x=n.allowedAutoPlacements,N=e.options.placement,I=qn(N),E=I===N,k=c||(E||!P?[yu(N)]:hB(N)),O=[N].concat(k).reduce(function(Ne,ue){return Ne.concat(qn(ue)===xv?dB(e,{placement:ue,boundary:d,rootBoundary:f,padding:u,flipVariations:P,allowedAutoPlacements:x}):ue)},[]),L=e.rects.reference,M=e.rects.popper,T=new Map,v=!0,S=O[0],A=0;A<O.length;A++){var b=O[A],C=qn(b),w=So(b)===Eo,J=[Vt,un].indexOf(C)>=0,ne=J?"width":"height",re=xl(e,{placement:b,boundary:d,rootBoundary:f,altBoundary:g,padding:u}),pe=J?w?dn:Ut:w?un:Vt;L[ne]>M[ne]&&(pe=yu(pe));var F=yu(pe),q=[];if(s&&q.push(re[C]<=0),a&&q.push(re[pe]<=0,re[F]<=0),q.every(function(Ne){return Ne})){S=b,v=!1;break}T.set(b,q)}if(v)for(var H=P?3:1,ie=function(ue){var Fe=O.find(function(pt){var fn=T.get(pt);if(fn)return fn.slice(0,ue).every(function(Qn){return Qn})});if(Fe)return S=Fe,"break"},Z=H;Z>0;Z--){var ce=ie(Z);if(ce==="break")break}e.placement!==S&&(e.modifiersData[r]._skip=!0,e.placement=S,e.reset=!0)}}const pB={name:"flip",enabled:!0,phase:"main",fn:fB,requiresIfExists:["offset"],data:{_skip:!1}};function JE(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function XE(t){return[Vt,dn,un,Ut].some(function(e){return t[e]>=0})}function mB(t){var e=t.state,n=t.name,r=e.rects.reference,i=e.rects.popper,s=e.modifiersData.preventOverflow,o=xl(e,{elementContext:"reference"}),a=xl(e,{altBoundary:!0}),c=JE(o,r),u=JE(a,i,s),d=XE(c),f=XE(u);e.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:d,hasPopperEscaped:f},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":f})}const gB={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:mB};function vB(t,e,n){var r=qn(t),i=[Ut,Vt].indexOf(r)>=0?-1:1,s=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,o=s[0],a=s[1];return o=o||0,a=(a||0)*i,[Ut,dn].indexOf(r)>=0?{x:a,y:o}:{x:o,y:a}}function yB(t){var e=t.state,n=t.options,r=t.name,i=n.offset,s=i===void 0?[0,0]:i,o=RC.reduce(function(d,f){return d[f]=vB(f,e.rects,s),d},{}),a=o[e.placement],c=a.x,u=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=u),e.modifiersData[r]=o}const _B={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:yB};function wB(t){var e=t.state,n=t.name;e.modifiersData[n]=OC({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const EB={name:"popperOffsets",enabled:!0,phase:"read",fn:wB,data:{}};function IB(t){return t==="x"?"y":"x"}function TB(t){var e=t.state,n=t.options,r=t.name,i=n.mainAxis,s=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!1:o,c=n.boundary,u=n.rootBoundary,d=n.altBoundary,f=n.padding,g=n.tether,R=g===void 0?!0:g,P=n.tetherOffset,x=P===void 0?0:P,N=xl(e,{boundary:c,rootBoundary:u,padding:f,altBoundary:d}),I=qn(e.placement),E=So(e.placement),k=!E,O=Lv(I),L=IB(O),M=e.modifiersData.popperOffsets,T=e.rects.reference,v=e.rects.popper,S=typeof x=="function"?x(Object.assign({},e.rects,{placement:e.placement})):x,A=typeof S=="number"?{mainAxis:S,altAxis:S}:Object.assign({mainAxis:0,altAxis:0},S),b=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,C={x:0,y:0};if(M){if(s){var w,J=O==="y"?Vt:Ut,ne=O==="y"?un:dn,re=O==="y"?"height":"width",pe=M[O],F=pe+N[J],q=pe-N[ne],H=R?-v[re]/2:0,ie=E===Eo?T[re]:v[re],Z=E===Eo?-v[re]:-T[re],ce=e.elements.arrow,Ne=R&&ce?Dv(ce):{width:0,height:0},ue=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:PC(),Fe=ue[J],pt=ue[ne],fn=Ka(0,T[re],Ne[re]),Qn=k?T[re]/2-H-fn-Fe-A.mainAxis:ie-fn-Fe-A.mainAxis,bn=k?-T[re]/2+H+fn+pt+A.mainAxis:Z+fn+pt+A.mainAxis,Nn=e.elements.arrow&&ec(e.elements.arrow),Rr=Nn?O==="y"?Nn.clientTop||0:Nn.clientLeft||0:0,xn=(w=b==null?void 0:b[O])!=null?w:0,On=pe+Qn-xn-Rr,ve=pe+bn-xn,Cr=Ka(R?yd(F,On):F,pe,R?Qi(q,ve):q);M[O]=Cr,C[O]=Cr-pe}if(a){var Ar,Ph=O==="x"?Vt:Ut,nc=O==="x"?un:dn,pn=M[L],Si=L==="y"?"height":"width",rc=pn+N[Ph],ys=pn-N[nc],ki=[Vt,Ut].indexOf(I)!==-1,zo=(Ar=b==null?void 0:b[L])!=null?Ar:0,qe=ki?rc:pn-T[Si]-v[Si]-zo+A.altAxis,Ye=ki?pn+T[Si]+v[Si]-zo-A.altAxis:ys,Ri=R&&ki?G9(qe,pn,Ye):Ka(R?qe:rc,pn,R?Ye:ys);M[L]=Ri,C[L]=Ri-pn}e.modifiersData[r]=C}}const SB={name:"preventOverflow",enabled:!0,phase:"main",fn:TB,requiresIfExists:["offset"]};function kB(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function RB(t){return t===Jt(t)||!Gn(t)?Mv(t):kB(t)}function CB(t){var e=t.getBoundingClientRect(),n=Io(e.width)/t.offsetWidth||1,r=Io(e.height)/t.offsetHeight||1;return n!==1||r!==1}function AB(t,e,n){n===void 0&&(n=!1);var r=Gn(e),i=Gn(e)&&CB(e),s=Ti(e),o=To(t,i,n),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&((mi(e)!=="body"||Fv(s))&&(a=RB(e)),Gn(e)?(c=To(e,!0),c.x+=e.clientLeft,c.y+=e.clientTop):s&&(c.x=jv(s))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function PB(t){var e=new Map,n=new Set,r=[];t.forEach(function(s){e.set(s.name,s)});function i(s){n.add(s.name);var o=[].concat(s.requires||[],s.requiresIfExists||[]);o.forEach(function(a){if(!n.has(a)){var c=e.get(a);c&&i(c)}}),r.push(s)}return t.forEach(function(s){n.has(s.name)||i(s)}),r}function bB(t){var e=PB(t);return W9.reduce(function(n,r){return n.concat(e.filter(function(i){return i.phase===r}))},[])}function NB(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function xB(t){var e=t.reduce(function(n,r){var i=n[r.name];return n[r.name]=i?Object.assign({},i,r,{options:Object.assign({},i.options,r.options),data:Object.assign({},i.data,r.data)}):r,n},{});return Object.keys(e).map(function(n){return e[n]})}var ZE={placement:"bottom",modifiers:[],strategy:"absolute"};function e0(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function OB(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,r=n===void 0?[]:n,i=e.defaultOptions,s=i===void 0?ZE:i;return function(a,c,u){u===void 0&&(u=s);var d={placement:"bottom",orderedModifiers:[],options:Object.assign({},ZE,s),modifiersData:{},elements:{reference:a,popper:c},attributes:{},styles:{}},f=[],g=!1,R={state:d,setOptions:function(I){var E=typeof I=="function"?I(d.options):I;x(),d.options=Object.assign({},s,d.options,E),d.scrollParents={reference:fs(a)?Qa(a):a.contextElement?Qa(a.contextElement):[],popper:Qa(c)};var k=bB(xB([].concat(r,d.options.modifiers)));return d.orderedModifiers=k.filter(function(O){return O.enabled}),P(),R.update()},forceUpdate:function(){if(!g){var I=d.elements,E=I.reference,k=I.popper;if(e0(E,k)){d.rects={reference:AB(E,ec(k),d.options.strategy==="fixed"),popper:Dv(k)},d.reset=!1,d.placement=d.options.placement,d.orderedModifiers.forEach(function(A){return d.modifiersData[A.name]=Object.assign({},A.data)});for(var O=0;O<d.orderedModifiers.length;O++){if(d.reset===!0){d.reset=!1,O=-1;continue}var L=d.orderedModifiers[O],M=L.fn,T=L.options,v=T===void 0?{}:T,S=L.name;typeof M=="function"&&(d=M({state:d,options:v,name:S,instance:R})||d)}}}},update:NB(function(){return new Promise(function(N){R.forceUpdate(),N(d)})}),destroy:function(){x(),g=!0}};if(!e0(a,c))return R;R.setOptions(u).then(function(N){!g&&u.onFirstUpdate&&u.onFirstUpdate(N)});function P(){d.orderedModifiers.forEach(function(N){var I=N.name,E=N.options,k=E===void 0?{}:E,O=N.effect;if(typeof O=="function"){var L=O({state:d,name:I,instance:R,options:k}),M=function(){};f.push(L||M)}})}function x(){f.forEach(function(N){return N()}),f=[]}return R}}const DB=OB({defaultModifiers:[gB,EB,tB,rB,_B,pB,SB,J9]}),LB=["enabled","placement","strategy","modifiers"];function MB(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const jB={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},FB={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:t})=>()=>{const{reference:e,popper:n}=t.elements;if("removeAttribute"in e){const r=(e.getAttribute("aria-describedby")||"").split(",").filter(i=>i.trim()!==n.id);r.length?e.setAttribute("aria-describedby",r.join(",")):e.removeAttribute("aria-describedby")}},fn:({state:t})=>{var e;const{popper:n,reference:r}=t.elements,i=(e=n.getAttribute("role"))==null?void 0:e.toLowerCase();if(n.id&&i==="tooltip"&&"setAttribute"in r){const s=r.getAttribute("aria-describedby");if(s&&s.split(",").indexOf(n.id)!==-1)return;r.setAttribute("aria-describedby",s?`${s},${n.id}`:n.id)}}},VB=[];function UB(t,e,n={}){let{enabled:r=!0,placement:i="bottom",strategy:s="absolute",modifiers:o=VB}=n,a=MB(n,LB);const c=_.useRef(o),u=_.useRef(),d=_.useCallback(()=>{var N;(N=u.current)==null||N.update()},[]),f=_.useCallback(()=>{var N;(N=u.current)==null||N.forceUpdate()},[]),[g,R]=x9(_.useState({placement:i,update:d,forceUpdate:f,attributes:{},styles:{popper:{},arrow:{}}})),P=_.useMemo(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:N})=>{const I={},E={};Object.keys(N.elements).forEach(k=>{I[k]=N.styles[k],E[k]=N.attributes[k]}),R({state:N,styles:I,attributes:E,update:d,forceUpdate:f,placement:N.placement})}}),[d,f,R]),x=_.useMemo(()=>(Ga(c.current,o)||(c.current=o),c.current),[o]);return _.useEffect(()=>{!u.current||!r||u.current.setOptions({placement:i,strategy:s,modifiers:[...x,P,jB]})},[s,i,P,r,x]),_.useEffect(()=>{if(!(!r||t==null||e==null))return u.current=DB(t,e,Object.assign({},a,{placement:i,strategy:s,modifiers:[...x,FB,P]})),()=>{u.current!=null&&(u.current.destroy(),u.current=void 0,R(N=>Object.assign({},N,{attributes:{},styles:{popper:{}}})))}},[r,t,e]),g}function _d(t,e){if(t.contains)return t.contains(e);if(t.compareDocumentPosition)return t===e||!!(t.compareDocumentPosition(e)&16)}var $B=function(){},BB=$B;const zB=Ol(BB),t0=()=>{};function WB(t){return t.button===0}function HB(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}const $f=t=>t&&("current"in t?t.current:t),n0={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};function qB(t,e=t0,{disabled:n,clickTrigger:r="click"}={}){const i=_.useRef(!1),s=_.useRef(!1),o=_.useCallback(u=>{const d=$f(t);zB(!!d,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),i.current=!d||HB(u)||!WB(u)||!!_d(d,u.target)||s.current,s.current=!1},[t]),a=et(u=>{const d=$f(t);d&&_d(d,u.target)&&(s.current=!0)}),c=et(u=>{i.current||e(u)});_.useEffect(()=>{var u,d;if(n||t==null)return;const f=Ih($f(t)),g=f.defaultView||window;let R=(u=g.event)!=null?u:(d=g.parent)==null?void 0:d.event,P=null;n0[r]&&(P=Qr(f,n0[r],a,!0));const x=Qr(f,r,o,!0),N=Qr(f,r,E=>{if(E===R){R=void 0;return}c(E)});let I=[];return"ontouchstart"in f.documentElement&&(I=[].slice.call(f.body.children).map(E=>Qr(E,"mousemove",t0))),()=>{P==null||P(),x(),N(),I.forEach(E=>E())}},[t,n,r,o,a,c])}function GB(t){const e={};return Array.isArray(t)?(t==null||t.forEach(n=>{e[n.name]=n}),e):t||e}function KB(t={}){return Array.isArray(t)?t:Object.keys(t).map(e=>(t[e].name=e,t[e]))}function QB({enabled:t,enableEvents:e,placement:n,flip:r,offset:i,fixed:s,containerPadding:o,arrowElement:a,popperConfig:c={}}){var u,d,f,g,R;const P=GB(c.modifiers);return Object.assign({},c,{placement:n,enabled:t,strategy:s?"fixed":c.strategy,modifiers:KB(Object.assign({},P,{eventListeners:{enabled:e,options:(u=P.eventListeners)==null?void 0:u.options},preventOverflow:Object.assign({},P.preventOverflow,{options:o?Object.assign({padding:o},(d=P.preventOverflow)==null?void 0:d.options):(f=P.preventOverflow)==null?void 0:f.options}),offset:{options:Object.assign({offset:i},(g=P.offset)==null?void 0:g.options)},arrow:Object.assign({},P.arrow,{enabled:!!a,options:Object.assign({},(R=P.arrow)==null?void 0:R.options,{element:a})}),flip:Object.assign({enabled:!!r},P.flip)}))})}const YB=["children","usePopper"];function JB(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const XB=()=>{};function DC(t={}){const e=_.useContext(kh),[n,r]=f9(),i=_.useRef(!1),{flip:s,offset:o,rootCloseEvent:a,fixed:c=!1,placement:u,popperConfig:d={},enableEventListeners:f=!0,usePopper:g=!!e}=t,R=(e==null?void 0:e.show)==null?!!t.show:e.show;R&&!i.current&&(i.current=!0);const P=M=>{e==null||e.toggle(!1,M)},{placement:x,setMenu:N,menuElement:I,toggleElement:E}=e||{},k=UB(E,I,QB({placement:u||x||"bottom-start",enabled:g,enableEvents:f??R,offset:o,flip:s,fixed:c,arrowElement:n,popperConfig:d})),O=Object.assign({ref:N||XB,"aria-labelledby":E==null?void 0:E.id},k.attributes.popper,{style:k.styles.popper}),L={show:R,placement:x,hasShown:i.current,toggle:e==null?void 0:e.toggle,popper:g?k:null,arrowProps:g?Object.assign({ref:r},k.attributes.arrow,{style:k.styles.arrow}):{}};return qB(I,P,{clickTrigger:a,disabled:!R}),[O,L]}function LC(t){let{children:e,usePopper:n=!0}=t,r=JB(t,YB);const[i,s]=DC(Object.assign({},r,{usePopper:n}));return m.jsx(m.Fragment,{children:e(i,s)})}LC.displayName="DropdownMenu";const wd={prefix:String(Math.round(Math.random()*1e10)),current:0},MC=Tt.createContext(wd),ZB=Tt.createContext(!1);let e3=!!(typeof window<"u"&&window.document&&window.document.createElement),Bf=new WeakMap;function t3(t=!1){let e=_.useContext(MC),n=_.useRef(null);if(n.current===null&&!t){var r,i;let s=(i=Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)===null||i===void 0||(r=i.ReactCurrentOwner)===null||r===void 0?void 0:r.current;if(s){let o=Bf.get(s);o==null?Bf.set(s,{id:e.current,state:s.memoizedState}):s.memoizedState!==o.state&&(e.current=o.id,Bf.delete(s))}n.current=++e.current}return n.current}function n3(t){let e=_.useContext(MC);e===wd&&!e3&&console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let n=t3(!!t),r=`react-aria${e.prefix}`;return t||`${r}-${n}`}function r3(t){let e=Tt.useId(),[n]=_.useState(l3()),r=n?"react-aria":`react-aria${wd.prefix}`;return t||`${r}-${e}`}const i3=typeof Tt.useId=="function"?r3:n3;function s3(){return!1}function o3(){return!0}function a3(t){return()=>{}}function l3(){return typeof Tt.useSyncExternalStore=="function"?Tt.useSyncExternalStore(a3,s3,o3):_.useContext(ZB)}const jC=t=>{var e;return((e=t.getAttribute("role"))==null?void 0:e.toLowerCase())==="menu"},r0=()=>{};function FC(){const t=i3(),{show:e=!1,toggle:n=r0,setToggle:r,menuElement:i}=_.useContext(kh)||{},s=_.useCallback(a=>{n(!e,a)},[e,n]),o={id:t,ref:r||r0,onClick:s,"aria-expanded":!!e};return i&&jC(i)&&(o["aria-haspopup"]=!0),[o,{show:e,toggle:n}]}function VC({children:t}){const[e,n]=FC();return m.jsx(m.Fragment,{children:t(e,n)})}VC.displayName="DropdownToggle";const km=_.createContext(null),i0=(t,e=null)=>t!=null?String(t):e||null,UC=_.createContext(null);UC.displayName="NavContext";const c3="data-rr-ui-";function Vv(t){return`${c3}${t}`}const u3=["eventKey","disabled","onClick","active","as"];function d3(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function $C({key:t,href:e,active:n,disabled:r,onClick:i}){const s=_.useContext(km),o=_.useContext(UC),{activeKey:a}=o||{},c=i0(t,e),u=n==null&&t!=null?i0(a)===c:n;return[{onClick:et(f=>{r||(i==null||i(f),s&&!f.isPropagationStopped()&&s(c,f))}),"aria-disabled":r||void 0,"aria-selected":u,[Vv("dropdown-item")]:""},{isActive:u}]}const BC=_.forwardRef((t,e)=>{let{eventKey:n,disabled:r,onClick:i,active:s,as:o=EC}=t,a=d3(t,u3);const[c]=$C({key:n,href:a.href,disabled:r,onClick:i,active:s});return m.jsx(o,Object.assign({},a,{ref:e},c))});BC.displayName="DropdownItem";const zC=_.createContext(Th?window:void 0);zC.Provider;function Ch(){return _.useContext(zC)}function s0(){const t=N9(),e=_.useRef(null),n=_.useCallback(r=>{e.current=r,t()},[t]);return[e,n]}function tc({defaultShow:t,show:e,onSelect:n,onToggle:r,itemSelector:i=`* [${Vv("dropdown-item")}]`,focusFirstItemOnShow:s,placement:o="bottom-start",children:a}){const c=Ch(),[u,d]=b9(e,t,r),[f,g]=s0(),R=f.current,[P,x]=s0(),N=P.current,I=wC(u),E=_.useRef(null),k=_.useRef(!1),O=_.useContext(km),L=_.useCallback((b,C,w=C==null?void 0:C.type)=>{d(b,{originalEvent:C,source:w})},[d]),M=et((b,C)=>{n==null||n(b,C),L(!1,C,"select"),C.isPropagationStopped()||O==null||O(b,C)}),T=_.useMemo(()=>({toggle:L,placement:o,show:u,menuElement:R,toggleElement:N,setMenu:g,setToggle:x}),[L,o,u,R,N,g,x]);R&&I&&!u&&(k.current=R.contains(R.ownerDocument.activeElement));const v=et(()=>{N&&N.focus&&N.focus()}),S=et(()=>{const b=E.current;let C=s;if(C==null&&(C=f.current&&jC(f.current)?"keyboard":!1),C===!1||C==="keyboard"&&!/^key.+$/.test(b))return;const w=jr(f.current,i)[0];w&&w.focus&&w.focus()});_.useEffect(()=>{u?S():k.current&&(k.current=!1,v())},[u,k,v,S]),_.useEffect(()=>{E.current=null});const A=(b,C)=>{if(!f.current)return null;const w=jr(f.current,i);let J=w.indexOf(b)+C;return J=Math.max(0,Math.min(J,w.length)),w[J]};return p9(_.useCallback(()=>c.document,[c]),"keydown",b=>{var C,w;const{key:J}=b,ne=b.target,re=(C=f.current)==null?void 0:C.contains(ne),pe=(w=P.current)==null?void 0:w.contains(ne);if(/input|textarea/i.test(ne.tagName)&&(J===" "||J!=="Escape"&&re||J==="Escape"&&ne.type==="search")||!re&&!pe||J==="Tab"&&(!f.current||!u))return;E.current=b.type;const q={originalEvent:b,source:b.type};switch(J){case"ArrowUp":{const H=A(ne,-1);H&&H.focus&&H.focus(),b.preventDefault();return}case"ArrowDown":if(b.preventDefault(),!u)d(!0,q);else{const H=A(ne,1);H&&H.focus&&H.focus()}return;case"Tab":gC(ne.ownerDocument,"keyup",H=>{var ie;(H.key==="Tab"&&!H.target||!((ie=f.current)!=null&&ie.contains(H.target)))&&d(!1,q)},{once:!0});break;case"Escape":J==="Escape"&&(b.preventDefault(),b.stopPropagation()),d(!1,q);break}}),m.jsx(km.Provider,{value:M,children:m.jsx(kh.Provider,{value:T,children:a})})}tc.displayName="Dropdown";tc.Menu=LC;tc.Toggle=VC;tc.Item=BC;const Uv=_.createContext({});Uv.displayName="DropdownContext";const WC=_.forwardRef(({className:t,bsPrefix:e,as:n="hr",role:r="separator",...i},s)=>(e=ke(e,"dropdown-divider"),m.jsx(n,{ref:s,className:me(t,e),role:r,...i})));WC.displayName="DropdownDivider";const HC=_.forwardRef(({className:t,bsPrefix:e,as:n="div",role:r="heading",...i},s)=>(e=ke(e,"dropdown-header"),m.jsx(n,{ref:s,className:me(t,e),role:r,...i})));HC.displayName="DropdownHeader";const qC=_.forwardRef(({bsPrefix:t,className:e,eventKey:n,disabled:r=!1,onClick:i,active:s,as:o=IC,...a},c)=>{const u=ke(t,"dropdown-item"),[d,f]=$C({key:n,href:a.href,disabled:r,onClick:i,active:s});return m.jsx(o,{...a,...d,ref:c,className:me(e,u,f.isActive&&"active",r&&"disabled")})});qC.displayName="DropdownItem";const GC=_.forwardRef(({className:t,bsPrefix:e,as:n="span",...r},i)=>(e=ke(e,"dropdown-item-text"),m.jsx(n,{ref:i,className:me(t,e),...r})));GC.displayName="DropdownItemText";const $v=_.createContext(null);$v.displayName="InputGroupContext";const Bv=_.createContext(null);Bv.displayName="NavbarContext";function KC(t,e){return t}function QC(t,e,n){const r=n?"top-end":"top-start",i=n?"top-start":"top-end",s=n?"bottom-end":"bottom-start",o=n?"bottom-start":"bottom-end",a=n?"right-start":"left-start",c=n?"right-end":"left-end",u=n?"left-start":"right-start",d=n?"left-end":"right-end";let f=t?o:s;return e==="up"?f=t?i:r:e==="end"?f=t?d:u:e==="start"?f=t?c:a:e==="down-centered"?f="bottom":e==="up-centered"&&(f="top"),f}const YC=_.forwardRef(({bsPrefix:t,className:e,align:n,rootCloseEvent:r,flip:i=!0,show:s,renderOnMount:o,as:a="div",popperConfig:c,variant:u,...d},f)=>{let g=!1;const R=_.useContext(Bv),P=ke(t,"dropdown-menu"),{align:x,drop:N,isRTL:I}=_.useContext(Uv);n=n||x;const E=_.useContext($v),k=[];if(n)if(typeof n=="object"){const b=Object.keys(n);if(b.length){const C=b[0],w=n[C];g=w==="start",k.push(`${P}-${C}-${w}`)}}else n==="end"&&(g=!0);const O=QC(g,N,I),[L,{hasShown:M,popper:T,show:v,toggle:S}]=DC({flip:i,rootCloseEvent:r,show:s,usePopper:!R&&k.length===0,offset:[0,2],popperConfig:c,placement:O});if(L.ref=Bo(KC(f),L.ref),vd(()=>{v&&(T==null||T.update())},[v]),!M&&!o&&!E)return null;typeof a!="string"&&(L.show=v,L.close=()=>S==null?void 0:S(!1),L.align=n);let A=d.style;return T!=null&&T.placement&&(A={...d.style,...L.style},d["x-placement"]=T.placement),m.jsx(a,{...d,...L,style:A,...(k.length||R)&&{"data-bs-popper":"static"},className:me(e,P,v&&"show",g&&`${P}-end`,u&&`${P}-${u}`,...k)})});YC.displayName="DropdownMenu";const JC=_.forwardRef(({bsPrefix:t,split:e,className:n,childBsPrefix:r,as:i=Sh,...s},o)=>{const a=ke(t,"dropdown-toggle"),c=_.useContext(kh);r!==void 0&&(s.bsPrefix=r);const[u]=FC();return u.ref=Bo(u.ref,KC(o)),m.jsx(i,{className:me(n,a,e&&`${a}-split`,(c==null?void 0:c.show)&&"show"),...u,...s})});JC.displayName="DropdownToggle";const XC=_.forwardRef((t,e)=>{const{bsPrefix:n,drop:r="down",show:i,className:s,align:o="start",onSelect:a,onToggle:c,focusFirstItemOnShow:u,as:d="div",navbar:f,autoClose:g=!0,...R}=j4(t,{show:"onToggle"}),P=_.useContext($v),x=ke(n,"dropdown"),N=z4(),I=T=>g===!1?T==="click":g==="inside"?T!=="rootClose":g==="outside"?T!=="select":!0,E=et((T,v)=>{var S;!((S=v.originalEvent)==null||(S=S.target)==null)&&S.classList.contains("dropdown-toggle")&&v.source==="mousedown"||(v.originalEvent.currentTarget===document&&(v.source!=="keydown"||v.originalEvent.key==="Escape")&&(v.source="rootClose"),I(v.source)&&(c==null||c(T,v)))}),O=QC(o==="end",r,N),L=_.useMemo(()=>({align:o,drop:r,isRTL:N}),[o,r,N]),M={down:x,"down-centered":`${x}-center`,up:"dropup","up-centered":"dropup-center dropup",end:"dropend",start:"dropstart"};return m.jsx(Uv.Provider,{value:L,children:m.jsx(tc,{placement:O,show:i,onSelect:a,onToggle:E,focusFirstItemOnShow:u,itemSelector:`.${x}-item:not(.disabled):not(:disabled)`,children:P?R.children:m.jsx(d,{...R,ref:e,className:me(s,i&&"show",M[r])})})})});XC.displayName="Dropdown";const Ve=Object.assign(XC,{Toggle:JC,Menu:YC,Item:qC,ItemText:GC,Divider:WC,Header:HC}),h3={type:cr.string,tooltip:cr.bool,as:cr.elementType},Ah=_.forwardRef(({as:t="div",className:e,type:n="valid",tooltip:r=!1,...i},s)=>m.jsx(t,{...i,ref:s,className:me(e,`${n}-${r?"tooltip":"feedback"}`)}));Ah.displayName="Feedback";Ah.propTypes=h3;const _r=_.createContext({}),zv=_.forwardRef(({id:t,bsPrefix:e,className:n,type:r="checkbox",isValid:i=!1,isInvalid:s=!1,as:o="input",...a},c)=>{const{controlId:u}=_.useContext(_r);return e=ke(e,"form-check-input"),m.jsx(o,{...a,ref:c,type:r,id:t||u,className:me(n,e,i&&"is-valid",s&&"is-invalid")})});zv.displayName="FormCheckInput";const Ed=_.forwardRef(({bsPrefix:t,className:e,htmlFor:n,...r},i)=>{const{controlId:s}=_.useContext(_r);return t=ke(t,"form-check-label"),m.jsx("label",{...r,ref:i,htmlFor:n||s,className:me(e,t)})});Ed.displayName="FormCheckLabel";const ZC=_.forwardRef(({id:t,bsPrefix:e,bsSwitchPrefix:n,inline:r=!1,reverse:i=!1,disabled:s=!1,isValid:o=!1,isInvalid:a=!1,feedbackTooltip:c=!1,feedback:u,feedbackType:d,className:f,style:g,title:R="",type:P="checkbox",label:x,children:N,as:I="input",...E},k)=>{e=ke(e,"form-check"),n=ke(n,"form-switch");const{controlId:O}=_.useContext(_r),L=_.useMemo(()=>({controlId:t||O}),[O,t]),M=!N&&x!=null&&x!==!1||C9(N,Ed),T=m.jsx(zv,{...E,type:P==="switch"?"checkbox":P,ref:k,isValid:o,isInvalid:a,disabled:s,as:I});return m.jsx(_r.Provider,{value:L,children:m.jsx("div",{style:g,className:me(f,M&&e,r&&`${e}-inline`,i&&`${e}-reverse`,P==="switch"&&n),children:N||m.jsxs(m.Fragment,{children:[T,M&&m.jsx(Ed,{title:R,children:x}),u&&m.jsx(Ah,{type:d,tooltip:c,children:u})]})})})});ZC.displayName="FormCheck";const Id=Object.assign(ZC,{Input:zv,Label:Ed}),eA=_.forwardRef(({bsPrefix:t,type:e,size:n,htmlSize:r,id:i,className:s,isValid:o=!1,isInvalid:a=!1,plaintext:c,readOnly:u,as:d="input",...f},g)=>{const{controlId:R}=_.useContext(_r);return t=ke(t,"form-control"),m.jsx(d,{...f,type:e,size:r,ref:g,readOnly:u,id:i||R,className:me(s,c?`${t}-plaintext`:t,n&&`${t}-${n}`,e==="color"&&`${t}-color`,o&&"is-valid",a&&"is-invalid")})});eA.displayName="FormControl";const tA=Object.assign(eA,{Feedback:Ah}),nA=_.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=ke(e,"form-floating"),m.jsx(n,{ref:i,className:me(t,e),...r})));nA.displayName="FormFloating";const Wv=_.forwardRef(({controlId:t,as:e="div",...n},r)=>{const i=_.useMemo(()=>({controlId:t}),[t]);return m.jsx(_r.Provider,{value:i,children:m.jsx(e,{...n,ref:r})})});Wv.displayName="FormGroup";const rA=_.forwardRef(({as:t="label",bsPrefix:e,column:n=!1,visuallyHidden:r=!1,className:i,htmlFor:s,...o},a)=>{const{controlId:c}=_.useContext(_r);e=ke(e,"form-label");let u="col-form-label";typeof n=="string"&&(u=`${u} ${u}-${n}`);const d=me(i,e,r&&"visually-hidden",n&&u);return s=s||c,n?m.jsx(SC,{ref:a,as:"label",className:d,htmlFor:s,...o}):m.jsx(t,{ref:a,className:d,htmlFor:s,...o})});rA.displayName="FormLabel";const iA=_.forwardRef(({bsPrefix:t,className:e,id:n,...r},i)=>{const{controlId:s}=_.useContext(_r);return t=ke(t,"form-range"),m.jsx("input",{...r,type:"range",ref:i,className:me(e,t),id:n||s})});iA.displayName="FormRange";const sA=_.forwardRef(({bsPrefix:t,size:e,htmlSize:n,className:r,isValid:i=!1,isInvalid:s=!1,id:o,...a},c)=>{const{controlId:u}=_.useContext(_r);return t=ke(t,"form-select"),m.jsx("select",{...a,size:n,ref:c,className:me(r,t,e&&`${t}-${e}`,i&&"is-valid",s&&"is-invalid"),id:o||u})});sA.displayName="FormSelect";const oA=_.forwardRef(({bsPrefix:t,className:e,as:n="small",muted:r,...i},s)=>(t=ke(t,"form-text"),m.jsx(n,{...i,ref:s,className:me(e,t,r&&"text-muted")})));oA.displayName="FormText";const aA=_.forwardRef((t,e)=>m.jsx(Id,{...t,ref:e,type:"switch"}));aA.displayName="Switch";const f3=Object.assign(aA,{Input:Id.Input,Label:Id.Label}),lA=_.forwardRef(({bsPrefix:t,className:e,children:n,controlId:r,label:i,...s},o)=>(t=ke(t,"form-floating"),m.jsxs(Wv,{ref:o,className:me(e,t),controlId:r,...s,children:[n,m.jsx("label",{htmlFor:r,children:i})]})));lA.displayName="FloatingLabel";const p3={_ref:cr.any,validated:cr.bool,as:cr.elementType},Hv=_.forwardRef(({className:t,validated:e,as:n="form",...r},i)=>m.jsx(n,{...r,ref:i,className:me(t,e&&"was-validated")}));Hv.displayName="Form";Hv.propTypes=p3;const m3=Object.assign(Hv,{Group:Wv,Control:tA,Floating:nA,Check:Id,Switch:f3,Label:rA,Text:oA,Range:iA,Select:sA,FloatingLabel:lA});function zf(t){t===void 0&&(t=Ih());try{var e=t.activeElement;return!e||!e.nodeName?null:e}catch{return t.body}}function g3(t=document){const e=t.defaultView;return Math.abs(e.innerWidth-t.documentElement.clientWidth)}const o0=Vv("modal-open");class qv{constructor({ownerDocument:e,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return g3(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",i=this.getElement();e.style={overflow:i.style.overflow,[r]:i.style[r]},e.scrollBarWidth&&(n[r]=`${parseInt(Ki(i,r)||"0",10)+e.scrollBarWidth}px`),i.setAttribute(o0,""),Ki(i,n)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){const n=this.getElement();n.removeAttribute(o0),Object.assign(n.style,e.style)}add(e){let n=this.modals.indexOf(e);return n!==-1||(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(e){const n=this.modals.indexOf(e);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}const Wf=(t,e)=>Th?t==null?(e||Ih()).body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),t&&("nodeType"in t||t.getBoundingClientRect)?t:null):null;function v3(t,e){const n=Ch(),[r,i]=_.useState(()=>Wf(t,n==null?void 0:n.document));if(!r){const s=Wf(t);s&&i(s)}return _.useEffect(()=>{},[e,r]),_.useEffect(()=>{const s=Wf(t);s!==r&&i(s)},[t,r]),r}function y3({children:t,in:e,onExited:n,mountOnEnter:r,unmountOnExit:i}){const s=_.useRef(null),o=_.useRef(e),a=et(n);_.useEffect(()=>{e?o.current=!0:a(s.current)},[e,a]);const c=Bo(s,t.ref),u=_.cloneElement(t,{ref:c});return e?u:i||!o.current&&r?null:u}function _3(t){return t.code==="Escape"||t.keyCode===27}function w3(){const t=_.version.split(".");return{major:+t[0],minor:+t[1],patch:+t[2]}}const E3=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function I3(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function T3(t){let{onEnter:e,onEntering:n,onEntered:r,onExit:i,onExiting:s,onExited:o,addEndListener:a,children:c}=t,u=I3(t,E3);const{major:d}=w3(),f=d>=19?c.props.ref:c.ref,g=_.useRef(null),R=Bo(g,typeof c=="function"?null:f),P=M=>T=>{M&&g.current&&M(g.current,T)},x=_.useCallback(P(e),[e]),N=_.useCallback(P(n),[n]),I=_.useCallback(P(r),[r]),E=_.useCallback(P(i),[i]),k=_.useCallback(P(s),[s]),O=_.useCallback(P(o),[o]),L=_.useCallback(P(a),[a]);return Object.assign({},u,{nodeRef:g},e&&{onEnter:x},n&&{onEntering:N},r&&{onEntered:I},i&&{onExit:E},s&&{onExiting:k},o&&{onExited:O},a&&{addEndListener:L},{children:typeof c=="function"?(M,T)=>c(M,Object.assign({},T,{ref:R})):_.cloneElement(c,{ref:R})})}const S3=["component"];function k3(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const R3=_.forwardRef((t,e)=>{let{component:n}=t,r=k3(t,S3);const i=T3(r);return m.jsx(n,Object.assign({ref:e},i))});function C3({in:t,onTransition:e}){const n=_.useRef(null),r=_.useRef(!0),i=et(e);return vd(()=>{if(!n.current)return;let s=!1;return i({in:t,element:n.current,initial:r.current,isStale:()=>s}),()=>{s=!0}},[t,i]),vd(()=>(r.current=!1,()=>{r.current=!0}),[]),n}function A3({children:t,in:e,onExited:n,onEntered:r,transition:i}){const[s,o]=_.useState(!e);e&&s&&o(!1);const a=C3({in:!!e,onTransition:u=>{const d=()=>{u.isStale()||(u.in?r==null||r(u.element,u.initial):(o(!0),n==null||n(u.element)))};Promise.resolve(i(u)).then(d,f=>{throw u.in||o(!0),f})}}),c=Bo(a,t.ref);return s&&!e?null:_.cloneElement(t,{ref:c})}function a0(t,e,n){return t?m.jsx(R3,Object.assign({},n,{component:t})):e?m.jsx(A3,Object.assign({},n,{transition:e})):m.jsx(y3,Object.assign({},n))}const P3=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function b3(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}let Hf;function N3(t){return Hf||(Hf=new qv({ownerDocument:t==null?void 0:t.document})),Hf}function x3(t){const e=Ch(),n=t||N3(e),r=_.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:_.useCallback(i=>{r.current.dialog=i},[]),setBackdropRef:_.useCallback(i=>{r.current.backdrop=i},[])})}const cA=_.forwardRef((t,e)=>{let{show:n=!1,role:r="dialog",className:i,style:s,children:o,backdrop:a=!0,keyboard:c=!0,onBackdropClick:u,onEscapeKeyDown:d,transition:f,runTransition:g,backdropTransition:R,runBackdropTransition:P,autoFocus:x=!0,enforceFocus:N=!0,restoreFocus:I=!0,restoreFocusOptions:E,renderDialog:k,renderBackdrop:O=ve=>m.jsx("div",Object.assign({},ve)),manager:L,container:M,onShow:T,onHide:v=()=>{},onExit:S,onExited:A,onExiting:b,onEnter:C,onEntering:w,onEntered:J}=t,ne=b3(t,P3);const re=Ch(),pe=v3(M),F=x3(L),q=_C(),H=wC(n),[ie,Z]=_.useState(!n),ce=_.useRef(null);_.useImperativeHandle(e,()=>F,[F]),Th&&!H&&n&&(ce.current=zf(re==null?void 0:re.document)),n&&ie&&Z(!1);const Ne=et(()=>{if(F.add(),bn.current=Qr(document,"keydown",fn),Qn.current=Qr(document,"focus",()=>setTimeout(Fe),!0),T&&T(),x){var ve,Cr;const Ar=zf((ve=(Cr=F.dialog)==null?void 0:Cr.ownerDocument)!=null?ve:re==null?void 0:re.document);F.dialog&&Ar&&!_d(F.dialog,Ar)&&(ce.current=Ar,F.dialog.focus())}}),ue=et(()=>{if(F.remove(),bn.current==null||bn.current(),Qn.current==null||Qn.current(),I){var ve;(ve=ce.current)==null||ve.focus==null||ve.focus(E),ce.current=null}});_.useEffect(()=>{!n||!pe||Ne()},[n,pe,Ne]),_.useEffect(()=>{ie&&ue()},[ie,ue]),R9(()=>{ue()});const Fe=et(()=>{if(!N||!q()||!F.isTopModal())return;const ve=zf(re==null?void 0:re.document);F.dialog&&ve&&!_d(F.dialog,ve)&&F.dialog.focus()}),pt=et(ve=>{ve.target===ve.currentTarget&&(u==null||u(ve),a===!0&&v())}),fn=et(ve=>{c&&_3(ve)&&F.isTopModal()&&(d==null||d(ve),ve.defaultPrevented||v())}),Qn=_.useRef(),bn=_.useRef(),Nn=(...ve)=>{Z(!0),A==null||A(...ve)};if(!pe)return null;const Rr=Object.assign({role:r,ref:F.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},ne,{style:s,className:i,tabIndex:-1});let xn=k?k(Rr):m.jsx("div",Object.assign({},Rr,{children:_.cloneElement(o,{role:"document"})}));xn=a0(f,g,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:S,onExiting:b,onExited:Nn,onEnter:C,onEntering:w,onEntered:J,children:xn});let On=null;return a&&(On=O({ref:F.setBackdropRef,onClick:pt}),On=a0(R,P,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:On})),m.jsx(m.Fragment,{children:Ws.createPortal(m.jsxs(m.Fragment,{children:[On,xn]}),pe)})});cA.displayName="Modal";const O3=Object.assign(cA,{Manager:qv});function D3(t,e){return t.classList?t.classList.contains(e):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")!==-1}function L3(t,e){t.classList?t.classList.add(e):D3(t,e)||(typeof t.className=="string"?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}function l0(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function M3(t,e){t.classList?t.classList.remove(e):typeof t.className=="string"?t.className=l0(t.className,e):t.setAttribute("class",l0(t.className&&t.className.baseVal||"",e))}const Rs={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class uA extends qv{adjustAndStore(e,n,r){const i=n.style[e];n.dataset[e]=i,Ki(n,{[e]:`${parseFloat(Ki(n,e))+r}px`})}restore(e,n){const r=n.dataset[e];r!==void 0&&(delete n.dataset[e],Ki(n,{[e]:r}))}setContainerStyle(e){super.setContainerStyle(e);const n=this.getElement();if(L3(n,"modal-open"),!e.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";jr(n,Rs.FIXED_CONTENT).forEach(s=>this.adjustAndStore(r,s,e.scrollBarWidth)),jr(n,Rs.STICKY_CONTENT).forEach(s=>this.adjustAndStore(i,s,-e.scrollBarWidth)),jr(n,Rs.NAVBAR_TOGGLER).forEach(s=>this.adjustAndStore(i,s,e.scrollBarWidth))}removeContainerStyle(e){super.removeContainerStyle(e);const n=this.getElement();M3(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";jr(n,Rs.FIXED_CONTENT).forEach(s=>this.restore(r,s)),jr(n,Rs.STICKY_CONTENT).forEach(s=>this.restore(i,s)),jr(n,Rs.NAVBAR_TOGGLER).forEach(s=>this.restore(i,s))}}let qf;function j3(t){return qf||(qf=new uA(t)),qf}const dA=_.createContext({onHide(){}}),F3=_.forwardRef(({closeLabel:t="Close",closeVariant:e,closeButton:n=!1,onHide:r,children:i,...s},o)=>{const a=_.useContext(dA),c=et(()=>{a==null||a.onHide(),r==null||r()});return m.jsxs("div",{ref:o,...s,children:[i,n&&m.jsx(Nv,{"aria-label":t,variant:e,onClick:c})]})}),Rm=new WeakMap,c0=(t,e)=>{if(!t||!e)return;const n=Rm.get(e)||new Map;Rm.set(e,n);let r=n.get(t);return r||(r=e.matchMedia(t),r.refCount=0,n.set(r.media,r)),r};function V3(t,e=typeof window>"u"?void 0:window){const n=c0(t,e),[r,i]=_.useState(()=>n?n.matches:!1);return vd(()=>{let s=c0(t,e);if(!s)return i(!1);let o=Rm.get(e);const a=()=>{i(s.matches)};return s.refCount++,s.addListener(a),a(),()=>{s.removeListener(a),s.refCount--,s.refCount<=0&&(o==null||o.delete(s.media)),s=void 0}},[t]),r}function U3(t){const e=Object.keys(t);function n(a,c){return a===c?c:a?`${a} and ${c}`:c}function r(a){return e[Math.min(e.indexOf(a)+1,e.length-1)]}function i(a){const c=r(a);let u=t[c];return typeof u=="number"?u=`${u-.2}px`:u=`calc(${u} - 0.2px)`,`(max-width: ${u})`}function s(a){let c=t[a];return typeof c=="number"&&(c=`${c}px`),`(min-width: ${c})`}function o(a,c,u){let d;typeof a=="object"?(d=a,u=c,c=!0):(c=c||!0,d={[a]:c});let f=_.useMemo(()=>Object.entries(d).reduce((g,[R,P])=>((P==="up"||P===!0)&&(g=n(g,s(R))),(P==="down"||P===!0)&&(g=n(g,i(R))),g),""),[JSON.stringify(d)]);return V3(f,u)}return o}const $3=U3({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),hA=_.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=ke(e,"offcanvas-body"),m.jsx(n,{ref:i,className:me(t,e),...r})));hA.displayName="OffcanvasBody";const B3={[jn]:"show",[Wr]:"show"},fA=_.forwardRef(({bsPrefix:t,className:e,children:n,in:r=!1,mountOnEnter:i=!1,unmountOnExit:s=!1,appear:o=!1,...a},c)=>(t=ke(t,"offcanvas"),m.jsx(yC,{ref:c,addEndListener:vC,in:r,mountOnEnter:i,unmountOnExit:s,appear:o,...a,childRef:n.ref,children:(u,d)=>_.cloneElement(n,{...d,className:me(e,n.props.className,(u===jn||u===gd)&&`${t}-toggling`,B3[u])})})));fA.displayName="OffcanvasToggling";const pA=_.forwardRef(({bsPrefix:t,className:e,closeLabel:n="Close",closeButton:r=!1,...i},s)=>(t=ke(t,"offcanvas-header"),m.jsx(F3,{ref:s,...i,className:me(e,t),closeLabel:n,closeButton:r})));pA.displayName="OffcanvasHeader";const z3=h9("h5"),mA=_.forwardRef(({className:t,bsPrefix:e,as:n=z3,...r},i)=>(e=ke(e,"offcanvas-title"),m.jsx(n,{ref:i,className:me(t,e),...r})));mA.displayName="OffcanvasTitle";function W3(t){return m.jsx(fA,{...t})}function H3(t){return m.jsx(TC,{...t})}const gA=_.forwardRef(({bsPrefix:t,className:e,children:n,"aria-labelledby":r,placement:i="start",responsive:s,show:o=!1,backdrop:a=!0,keyboard:c=!0,scroll:u=!1,onEscapeKeyDown:d,onShow:f,onHide:g,container:R,autoFocus:P=!0,enforceFocus:x=!0,restoreFocus:N=!0,restoreFocusOptions:I,onEntered:E,onExit:k,onExiting:O,onEnter:L,onEntering:M,onExited:T,backdropClassName:v,manager:S,renderStaticNode:A=!1,...b},C)=>{const w=_.useRef();t=ke(t,"offcanvas");const{onToggle:J}=_.useContext(Bv)||{},[ne,re]=_.useState(!1),pe=$3(s||"xs","up");_.useEffect(()=>{re(s?o&&!pe:o)},[o,s,pe]);const F=et(()=>{J==null||J(),g==null||g()}),q=_.useMemo(()=>({onHide:F}),[F]);function H(){return S||(u?(w.current||(w.current=new uA({handleContainerOverflow:!1})),w.current):j3())}const ie=(ue,...Fe)=>{ue&&(ue.style.visibility="visible"),L==null||L(ue,...Fe)},Z=(ue,...Fe)=>{ue&&(ue.style.visibility=""),T==null||T(...Fe)},ce=_.useCallback(ue=>m.jsx("div",{...ue,className:me(`${t}-backdrop`,v)}),[v,t]),Ne=ue=>m.jsx("div",{...ue,...b,className:me(e,s?`${t}-${s}`:t,`${t}-${i}`),"aria-labelledby":r,children:n});return m.jsxs(m.Fragment,{children:[!ne&&(s||A)&&Ne({}),m.jsx(dA.Provider,{value:q,children:m.jsx(O3,{show:ne,ref:C,backdrop:a,container:R,keyboard:c,autoFocus:P,enforceFocus:x&&!u,restoreFocus:N,restoreFocusOptions:I,onEscapeKeyDown:d,onShow:f,onHide:F,onEnter:ie,onEntering:M,onEntered:E,onExit:k,onExiting:O,onExited:Z,manager:H(),transition:W3,backdropTransition:H3,renderBackdrop:ce,renderDialog:Ne})})]})});gA.displayName="Offcanvas";const Gc=Object.assign(gA,{Body:hA,Header:pA,Title:mA}),vA=()=>{const[t,e]=_.useState([]),[n,r]=_.useState(null),[i,s]=_.useState([]),[o,a]=_.useState(null),[c,u]=_.useState([]),[d,f]=_.useState(""),[g,R]=_.useState("Global"),[P,x]=_.useState([]),[N,I]=_.useState([]),[E,k]=_.useState([]),[O,L]=_.useState(null),[M,T]=_.useState(!1),v=_.useRef(null);_.useEffect(()=>{(async()=>{try{const J=await(await fetch("../data.json")).json();e(J.frontPage||[]),r(J.about||null),s(J.news||[]),u(J.projects||[]),a(J.contact||null)}catch(w){console.error("Error fetching data:",w)}})()},[]);const S=C=>{v.current&&!v.current.contains(C.target)&&T(!1)},A=()=>{T(!1)};_.useEffect(()=>(document.addEventListener("mousedown",S),window.addEventListener("scroll",A),()=>{document.removeEventListener("mousedown",S),window.removeEventListener("scroll",A)}),[]),_.useEffect(()=>{if(d&&(g==="Projects"||g==="Global")){const C=c.filter(w=>w.title.toLowerCase().includes(d.toLowerCase())||w.description.toLowerCase().includes(d.toLowerCase()));x(C)}else x([])},[d,c,g]),_.useEffect(()=>{if(d&&(g==="Home"||g==="Global")){const C=t.filter(w=>w.title.toLowerCase().includes(d.toLowerCase())||w.content.toLowerCase().includes(d.toLowerCase()));I(C)}else I([])},[d,t,g]),_.useEffect(()=>{if(d&&(g==="About"||g==="Global")){const C=n?[n].filter(ne=>ne.name.toLowerCase().includes(d.toLowerCase())||ne.education.toLowerCase().includes(d.toLowerCase())||ne.majors.some(re=>re.toLowerCase().includes(d.toLowerCase()))||ne.selfSummary.toLowerCase().includes(d.toLowerCase())||ne.moreDetails.some(re=>re.title.toLowerCase().includes(d.toLowerCase())||re.content.toLowerCase().includes(d.toLowerCase()))):[],w=i.filter(ne=>ne.title.toLowerCase().includes(d.toLowerCase())),J=[...C,...w];k(J)}else k([])},[d,n,i,g]),_.useEffect(()=>{if(d&&(g==="Contact"||g==="Global")){const C={};o?(o.address.some(w=>w.toLowerCase().includes(d.toLowerCase()))&&(C.address=o.address.filter(w=>w.toLowerCase().includes(d.toLowerCase()))),o.phone.some(w=>w.toLowerCase().includes(d.toLowerCase()))&&(C.phone=o.phone.filter(w=>w.toLowerCase().includes(d.toLowerCase()))),o.email.some(w=>w.toLowerCase().includes(d.toLowerCase()))&&(C.email=o.email.filter(w=>w.toLowerCase().includes(d.toLowerCase()))),o.github.some(w=>w.toLowerCase().includes(d.toLowerCase()))&&(C.github=o.github.filter(w=>w.toLowerCase().includes(d.toLowerCase()))),o.url.some(w=>w.toLowerCase().includes(d.toLowerCase()))&&(C.url=o.url.filter(w=>w.toLowerCase().includes(d.toLowerCase()))),o.linkedin.some(w=>w.toLowerCase().includes(d.toLowerCase()))&&(C.linkedin=o.linkedin.filter(w=>w.toLowerCase().includes(d.toLowerCase()))),L(Object.keys(C).length>0?C:null)):L(null)}else L(null)},[d,o,g]);const b=g==="Global"?[...P,...N,...E,...O?[O]:[]]:[];return m.jsxs("div",{ref:v,className:"search-bar-container",children:[m.jsxs(m3,{className:"form-inline",children:[m.jsxs(Ve,{onSelect:C=>R(C||"Global"),children:[m.jsx(Ve.Toggle,{className:"search-dropdown",variant:"outline-light",id:"dropdown-basic",children:g}),m.jsxs(Ve.Menu,{children:[m.jsx(Ve.Item,{eventKey:"Global",children:"Global"}),m.jsx(Ve.Divider,{}),m.jsx(Ve.Item,{eventKey:"Home",children:"Home"}),m.jsx(Ve.Item,{eventKey:"About",children:"About"}),m.jsx(Ve.Item,{eventKey:"Projects",children:"Projects"}),m.jsx(Ve.Item,{eventKey:"Contact",children:"Contact"})]})]}),m.jsx(tA,{type:"search",placeholder:"Search...",className:"mr-sm-2",value:d,onChange:C=>{f(C.target.value),T(!0)}}),m.jsx(Sh,{className:"global-search-button",variant:"outline-light",children:m.jsx("img",{src:"https://cdn.glitch.global/3874a658-483f-41ac-b439-3b48eab1370f/icon-search.png?v=1721703987075",width:"20",height:"20"})})]}),M&&P.length>0&&g==="Projects"&&m.jsx("div",{className:"search-results",children:P.map(C=>m.jsx(se,{className:"result-row",to:`/projects/${C.id}`,children:m.jsx("div",{className:"indiv-result",children:C.title})},C.id))}),M&&N.length>0&&g==="Home"&&m.jsx("div",{className:"search-results",children:N.map(C=>m.jsx(se,{className:"result-row",to:"/",children:m.jsx("div",{className:"indiv-result",children:C.title})},C.title))}),M&&E.length>0&&g==="About"&&m.jsx("div",{className:"search-results",children:E.map(C=>"title"in C?m.jsx(se,{className:"result-row",to:"/about",children:m.jsx("div",{className:"indiv-result",children:C.title.length>25?`${C.title.substring(0,25)}...`:C.title})},C.title):m.jsx(se,{className:"result-row",to:"/about",children:m.jsx("div",{className:"indiv-result",children:C.name||"About Section"})},C.name||C.moreDetails.map(w=>w.title).join("-")))}),M&&O&&g==="Contact"&&m.jsxs("div",{className:"search-results",children:[O.address&&m.jsx(se,{className:"result-row",to:"/contact",children:m.jsxs("div",{className:"indiv-result",children:["Address: ",o.address[0]]})}),O.phone&&m.jsx("a",{className:"result-row",href:`tel:${o.phone[0]}`,children:m.jsxs("div",{className:"indiv-result",children:["Phone: ",o.phone[0]]})}),O.email&&m.jsx("a",{className:"result-row",href:`mailto:${o.email[0]}`,children:m.jsxs("div",{className:"indiv-result",children:["Email: ",o.email[0]]})}),O.github&&O.github.length>0&&m.jsx("a",{className:"result-row",href:o.github[0],children:m.jsxs("div",{className:"indiv-result",children:["GitHub: ",o.github[1]]})}),O.url&&O.url.length>0&&m.jsx("a",{className:"result-row",href:o.url[0],children:m.jsxs("div",{className:"indiv-result",children:["URL: ",o.url[1]]})}),O.linkedin&&O.linkedin.length>0&&m.jsx("a",{className:"result-row",href:o.linkedin[0],children:m.jsxs("div",{className:"indiv-result",children:["LinkedIn: ",o.linkedin[1]]})})]}),M&&b.length>0&&g==="Global"&&m.jsx("div",{className:"search-results",children:b.map((C,w)=>"id"in C?m.jsx(se,{className:"result-row",to:`/projects/${C.id}`,children:m.jsx("div",{className:"indiv-result",children:C.title.length>25?`${C.title.substring(0,25)}...`:C.title})},w):"content"in C?m.jsx(se,{className:"result-row",to:"/",children:m.jsx("div",{className:"indiv-result",children:C.title.length>25?`${C.title.substring(0,25)}...`:C.title})},w):"name"in C?m.jsx(se,{className:"result-row",to:"/about",children:m.jsx("div",{className:"indiv-result",children:C.name.length>25?`${C.name.substring(0,25)}...`:C.name})},w):"date"in C?m.jsx(se,{className:"result-row",to:"/about",children:m.jsx("div",{className:"indiv-result",children:C.title.length>25?`${C.title.substring(0,25)}...`:C.title})},w):"address"in C?m.jsx("div",{children:m.jsx(se,{className:"result-row",to:"/contact",children:m.jsxs("div",{className:"indiv-result",children:["Address: ",o.address[0]]})})},w):"phone"in C?m.jsx("div",{children:m.jsx("a",{className:"result-row",href:`tel:${o.phone[0]}`,children:m.jsxs("div",{className:"indiv-result",children:["Phone: ",o.phone[0]]})})},w):"email"in C?m.jsx("div",{children:m.jsx("a",{className:"result-row",href:`mailto:${o.email[0]}`,children:m.jsxs("div",{className:"indiv-result",children:["Email: ",o.email[0]]})})},w):"github"in C?m.jsx("div",{children:m.jsx(se,{className:"result-row",to:o.github[0],children:m.jsxs("div",{className:"indiv-result",children:["GitHub: ",o.github[1]]})})},w):"url"in C?m.jsx("div",{children:m.jsx(se,{className:"result-row",to:o.url[0],children:m.jsxs("div",{className:"indiv-result",children:["URL: ",o.url[1]]})})},w):"linkedin"in C?m.jsx("div",{children:m.jsx(se,{className:"result-row",to:o.linkedin[0],children:m.jsxs("div",{className:"indiv-result",children:["LinkedIn: ",o.linkedin[1]]})})},w):null)})]})};function Yr(t,e,n){const r=document.querySelector(t);r&&(r.classList.remove(e),r.classList.add(n))}const yA=_.createContext(null),q3=({children:t})=>{const[e,n]=_.useState(null),[r,i]=_.useState(!0);return _.useEffect(()=>{const s=y$(xo.auth(),o=>{n(o||null),i(!1)});return()=>s()},[]),m.jsx(yA.Provider,{value:{user:e},children:r?m.jsx(m.Fragment,{}):t})},_A=()=>_.useContext(yA);function Ct(t){return t.charAt(0).toUpperCase()+t.slice(1)}function wA(){const[t,e]=_.useState(""),[n,r]=_.useState([]),[i,s]=_.useState(!1),o=_A();_.useEffect(()=>{fetch("../data.json").then(u=>u.json()).then(u=>{e(u.cv),r(u.projects||[])}).catch(u=>{console.error("Error fetching data:",u)})},[]);const a=()=>{_$(Av())},c=u=>{u.preventDefault(),t&&window.open(t,"_blank")};return m.jsxs(m.Fragment,{children:[m.jsx("nav",{className:"nonuser-navbar navbar sticky-top bg-body-tertiary d-none d-md-flex",children:m.jsxs("div",{className:"container-fluid d-flex justify-content-between align-items-center",children:[m.jsxs("div",{className:"d-flex align-items-center",children:[m.jsx(se,{className:"nonuser-navbar-brand navbar-brand",to:"/",onMouseEnter:()=>Yr(".icon","icon-bp-bbl","icon-bp-blw"),onMouseLeave:()=>Yr(".icon","icon-bp-blw","icon-bp-bbl"),children:m.jsx("i",{className:"icon icon-bp-bbl"})}),m.jsxs("ul",{className:"nav nav-pills",children:[m.jsx("li",{className:"nonuser-nav-item nav-item",children:m.jsx(se,{className:"nonuser-nav-link nav-link",to:"/about",children:Ct("about")})}),m.jsx("li",{className:"nonuser-nav-item nav-item",children:m.jsxs(Ve,{className:"nonuser-nav-item nav-item",children:[m.jsx(Ve.Toggle,{variant:"link",className:"nonuser-nav-link nav-link",children:Ct("projects")}),m.jsxs(Ve.Menu,{children:[m.jsx(Ve.Item,{as:se,to:"/projects",children:Ct("Projects Page")},"projects"),m.jsx(Ve.Divider,{}),n.map(u=>m.jsx(Ve.Item,{as:se,to:`/projects/${u.id}`,children:Ct(u.title)},u.id))]})]})}),m.jsx("li",{className:"nonuser-nav-item nav-item",children:t?m.jsx("a",{href:t,className:"nonuser-nav-link nav-link",onClick:c,children:Ct("CV")}):m.jsx("span",{className:"nonuser-nav-link nav-link",children:Ct("CV")})}),m.jsx("li",{className:"nonuser-nav-item nav-item",children:m.jsx(se,{className:"nonuser-nav-link nav-link",to:"/contact",children:Ct("contact")})})]})]}),m.jsx("div",{children:o!=null&&o.user?m.jsxs(se,{className:"nav-login",to:"",onClick:a,children:[m.jsx("i",{className:"bi bi-box-arrow-in-left login-arrow"}),"Log out"]}):m.jsxs(se,{className:"nav-login",to:"/login",children:[m.jsx("i",{className:"bi bi-box-arrow-in-left login-arrow"}),"Log in"]})})]})}),m.jsx(Sh,{className:"d-md-none offcanvas-navbutton",onClick:()=>s(!0),children:m.jsx("i",{className:"bi bi-list"})}),m.jsxs(Gc,{show:i,onHide:()=>s(!1),placement:"start",children:[m.jsx(Gc.Header,{closeButton:!0,children:m.jsx(Gc.Title,{id:"offcanvas-title",children:"Menu"})}),m.jsx(Gc.Body,{children:m.jsxs("ul",{className:"nav flex-column",children:[m.jsx("li",{className:"nonuser-nav-item nav-item",children:m.jsx(se,{className:"nonuser-nav-link nav-link",to:"/",children:Ct("home")})}),m.jsx("li",{className:"nonuser-nav-item nav-item",children:m.jsx(se,{className:"nonuser-nav-link nav-link",to:"/about",children:Ct("about")})}),m.jsx("li",{className:"nonuser-nav-item nav-item",children:m.jsxs(Ve,{className:"nonuser-nav-item nav-item",children:[m.jsx(Ve.Toggle,{variant:"link",className:"nonuser-nav-link nav-link",children:Ct("projects")}),m.jsxs(Ve.Menu,{children:[m.jsx(Ve.Item,{as:se,to:"/projects",children:Ct("Projects Page")},"projects"),m.jsx(Ve.Divider,{}),n.map(u=>m.jsx(Ve.Item,{as:se,to:`/projects/${u.id}`,children:Ct(u.title)},u.id))]})]})}),m.jsx("li",{className:"nonuser-nav-item nav-item",children:t?m.jsx("a",{href:t,className:"nonuser-nav-link nav-link",onClick:c,children:Ct("CV")}):m.jsx("span",{className:"nav-link",children:Ct("CV")})}),m.jsx("li",{className:"nonuser-nav-item nav-item",children:m.jsx(se,{className:"nonuser-nav-link nav-link",to:"/contact",children:Ct("contact")})}),m.jsx("div",{className:"offcanvas-login",children:o!=null&&o.user?m.jsxs(se,{className:"nav-login",to:"",onClick:a,children:[m.jsx("i",{className:"bi bi-box-arrow-in-left login-arrow"}),"Log out"]}):m.jsxs(se,{className:"nav-login",to:"/login",children:[m.jsx("i",{className:"bi bi-box-arrow-in-left login-arrow"}),"Log in"]})})]})})]})]})}const G3=()=>{const[t,e]=_.useState(null),[n,r]=_.useState([]),[i,s]=_.useState("");_.useEffect(()=>{(async()=>{try{const d=await(await fetch("../data.json")).json();e(d.about),r(d.news||[])}catch(u){console.error("Error fetching data:",u)}})()},[]);const o=n.filter(c=>c.title.toLowerCase().includes(i.toLowerCase())||c.date.toLowerCase().includes(i.toLowerCase())),a=c=>{s(c.target.value)};return m.jsxs("section",{className:"about",children:[m.jsx("div",{className:"left-side",children:t&&m.jsxs(m.Fragment,{children:[m.jsx("center",{children:m.jsx("img",{src:t.photo,alt:"Your Photo",className:"about-photo"})}),m.jsx("h1",{className:"about-name",children:t.name}),m.jsxs("section",{id:"education",className:"education",children:[m.jsx("h3",{id:"college",children:t.education}),m.jsxs("p",{id:"majors",children:[t.majors[0]," ",m.jsx("br",{}),t.majors[1]]})]}),m.jsxs("section",{id:"news",className:"news",children:[m.jsx("h2",{id:"news-title",children:"News"}),m.jsx("input",{type:"text",name:"news",placeholder:"Search News...",value:i,onChange:a,className:"news-search"}),m.jsx("ul",{className:"news-list",children:o.map((c,u)=>m.jsxs("div",{className:"news-row",children:[m.jsx("div",{className:"news-title",children:c.title}),m.jsx("div",{className:"news-date",children:c.date})]},u))})]})]})}),m.jsx("section",{className:"right-side",children:t&&m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"short-summary",dangerouslySetInnerHTML:{__html:t.selfSummary||""}}),t.moreDetails.map((c,u)=>m.jsxs("section",{className:"more-detail",children:[m.jsx("h3",{id:"detail-title",children:c.title}),m.jsx("p",{id:"detail-content",children:c.content})]},u))]})})]})},K3="https://cdn.glitch.global/3874a658-483f-41ac-b439-3b48eab1370f/blakeprall_long.pdf?v=1721805034709",Q3=[{title:"Why I Made This Site",content:"This personal website serves as a showcase for my skills and projects as a recent computer science graduate. I created this site to demonstrate my technical abilities, share my work, and provide a platform where visitors can learn more about my achievements and ongoing projects. It's a reflection of my journey in the tech field and a place for me to present my work in a professional format."},{title:"About This Site",content:"This site was developed using React and Vite for a modern, fast development experience. React Router DOM enables seamless navigation between pages, while dynamic page generation is powered by a JSON file that allows for easy content updates. Currently hosted on GitHub, the site features a custom logo and integrates Firebase for user signup and login, providing access to view the source code."},{title:"About Me",content:"Discover my journey and stay updated with my latest endeavors and achievements. On the About Page, you can read about my background as a recent computer science graduate, my story, and what's currently going on in my life. It's a space where I share my personal and professional milestones, providing insight into who I am and what drives me.",link:"/about"},{title:"Projects",content:"Explore the projects I've worked on through the Projects Page. From developing a mobile game emulator to a deep learning program for synapse detection, an automatic speech-to-text system, and a collaborative budgeting application, my portfolio showcases a variety of technical achievements. Each project reflects my passion for innovation and problem-solving. Currently, my focus is on this personal website, designed to highlight my skills and provide a platform for my work.",link:"/projects"},{title:"Future Plans for the Site",content:"In the future, I plan to host my personal website locally using a Linux server. This approach will give me more control over the environment and the opportunity to fine-tune performance and security settings. I am considering several hosting frameworks, including Nginx for its high performance and stability, Apache for its versatility and robust feature set, and Docker for containerization, which would allow for easy deployment and scalability. These tools will enable me to maintain a highly efficient and reliable website. By hosting locally, I aim to provide a seamless and professional experience for visitors, further demonstrating my technical expertise and commitment to quality."}],Y3={photo:"https://cdn.glitch.global/b0561b3a-67fa-44de-99d8-728d82b14013/1701894420208%20(2).jpg?v=1715368201737",name:"Blake Prall",education:"Boston College - Chestnut Hill, MA",majors:["Neuroscience B.S.","Computer Science B.A."],selfSummary:"I am a recent graduate from Boston College with a double major in Computer Science and Neuroscience. Originating from Cottage Grove, Minnesota, my academic journey has been characterized by a passion for exploring the limitless potential of technology. My dual major in neuroscience and computer science reflects my interdisciplinary approach, where I've leveraged computational methods to solve complex problems and drive innovation.<br><br>Throughout my studies, I've developed robust skills in research, problem-solving, and software development, preparing me to thrive in a dynamic software engineering environment. I am eager to contribute my technical expertise and enthusiasm for innovation to your team, delivering impactful solutions and advancing technology to new heights.",moreDetails:[{title:"Educational Journey",content:"I pursued a double major in neuroscience and computer science, a challenging yet rewarding path that honed my analytical and technical skills. Balancing my studies with part-time work to cover groceries was tough, but it taught me resilience and time management. Despite the demanding schedule, I remained committed to my education, engaging in various projects and research that deepened my understanding of both fields. My coursework in neuroscience provided me with a solid foundation in understanding complex biological systems, while my computer science studies equipped me with the technical expertise to develop innovative solutions. This unique combination of disciplines has given me a broad perspective and the ability to approach problems from multiple angles."},{title:"Work Experience",content:"During the summers, I worked in construction, a fast-paced and physically demanding environment. This experience required me to learn quickly and adapt to new challenges on the fly. It significantly improved my communication skills as I collaborated with diverse teams to complete projects efficiently. The hands-on nature of the job also instilled a strong work ethic and problem-solving abilities that I carry with me today. Working in construction taught me the importance of precision and attention to detail, as even small mistakes could have significant consequences. It also provided me with a sense of accomplishment, knowing that my efforts contributed to the creation of tangible structures."},{title:"Personal Growth",content:"There was a period of uncertainty in my life when I wasn’t sure what career path to pursue, which led me to forgo internships. This phase, however, was crucial for my personal growth. It allowed me to explore different interests and ultimately helped me realize my passion for technology and problem-solving. These experiences have shaped my approach to challenges and my determination to succeed in my chosen field. I learned the value of perseverance and the importance of staying open to new opportunities. This period of self-discovery also taught me to trust my instincts and follow my passions, even when the path ahead is not always clear."},{title:"Future Aspirations",content:"Looking ahead, I am excited about the possibilities in the tech industry. My goal is to leverage my background in neuroscience and computer science to develop innovative solutions that can make a meaningful impact. I am particularly interested in areas such as artificial intelligence and data science. I am eager to continue learning and growing, and I look forward to contributing to projects that push the boundaries of technology. I am passionate about using technology to solve real-world problems and improve people’s lives. Whether it’s developing new algorithms to analyze complex data or creating applications that enhance user experiences, I am committed to making a positive difference through my work."}]},J3=[{title:"Finish New Personal Website",date:"July 2024"},{title:"Start Developing New Personal Website",date:"July 2024"},{title:"Start Working on Workout App",date:"July 2024"},{title:"Graduated from Boston College",date:"May 2024"},{title:"Start Working for Outlier AI training Math and Coding",date:"Feb 2024"},{title:"Start Full Stack Budgeting App",date:"Dec 2023"},{title:"Finish NectR Project",date:"Dec 2023"},{title:"Finish ASR Project",date:"Dec 2023"},{title:"Start NectR Project",date:"Dec 2023"},{title:"Finish Budgeting App",date:"Dec 2023"},{title:"Start Budgeting App",date:"Nov 2023"},{title:"Start Automatic Speech Recognition (ASR) Project",date:"Oct 2023"},{title:"Start Senior Year",date:"Aug 2023"},{title:"Finish Junior Year",date:"May 2023"},{title:"Complete Synapse Project",date:"May 2023"}],X3=[{id:"budgeting-app",title:"Full Stack Budgeting App",type:"text",titleLink:"https://github.com/leddyd/BudgetApp",titleLinkLabel:"GitHub Repo",description:'&emsp;Introducing <a href="https://budgetapp-8ac58.web.app/">Distant Dollar</a>, a sophisticated budgeting application meticulously crafted by the collaborative efforts of Blake Prall and Dylan Leddy. This groundbreaking financial tool is a testament to the prowess of modern web development, employing a robust technology stack to deliver a seamless and secure budgeting experience. The utilization of React and TypeScript (TSX) ensures a modular and maintainable codebase, while D3 brings dynamic and interactive charts to the forefront, providing users with visually compelling insights into their financial data...',descriptionImage:"https://cdn.glitch.global/3874a658-483f-41ac-b439-3b48eab1370f/distantdollar-Capture1.JPG?v=1721778684432",contentsImages:[],contents:`&emsp;Introducing <a href="https://budgetapp-8ac58.web.app/">Distant Dollar</a>, a sophisticated budgeting application meticulously crafted by the collaborative efforts of Blake Prall and Dylan Leddy. This groundbreaking financial tool is a testament to the prowess of modern web development, employing a robust technology stack to deliver a seamless and secure budgeting experience. The utilization of React and TypeScript (TSX) ensures a modular and maintainable codebase, while D3 brings dynamic and interactive charts to the forefront, providing users with visually compelling insights into their financial data.<br>&emsp;Security is paramount in Distant Dollar, and this is exemplified by the integration of Firebase for user authentication. Users can trust in the app's commitment to safeguarding their financial information, thanks to Firebase's proven authentication mechanisms. Furthermore, Firestore, a NoSQL cloud database, underpins Distant Dollar's data storage and retrieval, ensuring real-time synchronization and accessibility across devices.<br>&emsp;The user-centric design of Distant Dollar sets it apart with an intuitive interface that allows users to effortlessly navigate through the app. Budget tracking becomes a breeze, with users empowered to set budgets for various categories and receive real-time updates on their spending patterns. The application's ability to categorize expenses and provide detailed breakdowns aids in identifying potential savings areas and optimizing financial decisions.<br>&emsp;Blake Prall and Dylan Leddy's commitment to user empowerment is further reflected in Distant Dollar's goal-setting feature. Users can set and pursue financial goals, with the app offering actionable insights to facilitate their journey. As individuals engage with the app's seamless interface, powerful features, and robust security measures, Distant Dollar is poised to redefine the landscape of personal finance management. The collaboration between Prall and Leddy has resulted in a groundbreaking application that stands at the intersection of innovation and financial well-being.`},{id:"asr-project",title:"Automatic Speech Recognition",type:"pdf",titleLink:"https://github.com/bprall/CNN-LSTM-CTC-Automatic-Speech-Recognition",titleLinkLabel:"GitHub Repo",description:"&emsp;In this project, we present a Speech-to-Text model employing a combination of Convolutional Neural Networks (CNNs) and Long Short-Term Memory networks (LSTMs). Trained on the <q>train-clean-100</q> subset of the LIBRISPEECH dataset, our model transforms audio waveforms into spectrograms using MelSpectrogram transformation. To enhance robustness, we apply data augmentation techniques such as frequency masking and time masking. The model's architecture captures both local frequency patterns and temporal dynamics, crucial for accurate speech recognition. We employ the AdamW optimizer and utilize the Connectionist Temporal Classification (CTC) loss function to train our model, addressing challenges associated with variable-length sequences. Evaluation metrics include Character Error Rate (CER) and Word Error Rate (WER). Despite challenges, our model showcases promising performance in automatic speech recognition...</p>",descriptionImage:"https://cdn.glitch.global/3874a658-483f-41ac-b439-3b48eab1370f/Capture.JPG?v=1721782400085",contentsImages:[],contents:"",materials:[{label:"paper",path:"https://cdn.glitch.global/3874a658-483f-41ac-b439-3b48eab1370f/Speech_to_Text.pdf?v=1702087574286"}]},{id:"segmentation-project",title:"Synaptic Segmentation via Deep Learning",type:"pdf",titleLink:"https://github.com/bprall/CREMI-Neuron-Cleft-Segmentation",titleLinkLabel:"GitHub Repo",description:"&emsp;I am interested in the idea of mapping the human connectome through the use of deep-learning neural networks. Despite being the system by which we experience the world and the foundation of consciousness, we still know surprisingly little about the central nervous system due to its vast complexity. Connectomics aims to change that by directly mapping these circuits. There are multiple aspects that go into this challenging task, most regarding the segmentation of individual neurons in order to generate a volumetric representation of neural circuitry.<br>&emsp;In my project, I aim to develop a neural network or system of networks that can synaptic clefts. I hypothesize that a U-Net3D-like architecture that predicts 3D bounding boxes of individual neurons from encoder feature maps, which then generates a neuron instance segmentation map through the decoder layers, alongside an FCN that predicts synapses will best complete this task... </p>",descriptionImage:"https://cdn.glitch.global/3874a658-483f-41ac-b439-3b48eab1370f/Capture.JPG?v=1721782203647",contentsImages:[],contents:"",materials:[{label:"paper",path:"https://cdn.glitch.global/c6cec155-a368-4ff7-be9e-ab2174e617eb/prallb_final_report.pdf?v=1697601228030"}]},{id:"emulator",title:"Mobile Game Emulator",type:"text",titleLink:"",titleLinkLabel:"",description:"&emsp;Creating a mobile game emulator using a Raspberry Pi was a project I undertook just for fun. The idea of being able to transform a small, affordable computer like the Raspberry Pi into a mobile platform that could play classic games sounded awesome. It was a challenging yet rewarding journey that allowed me to explore my passion for both gaming and tinkering with technology.<br>&emsp;The first step in this endeavor was selecting the right Raspberry Pi model and gathering the necessary components. After some research, I settled on the Raspberry Pi 4 for its improved processing power and versatility. Then, I acquired a high-quality microSD card to store the emulator software and game ROMs and a power supply.<br>&emsp;But I didn't stop there...",descriptionImage:"",contentsImages:[],contents:"&emsp;Creating a mobile game emulator using a Raspberry Pi was a project I undertook just for fun. The idea of being able to transform a small, affordable computer like the Raspberry Pi into a mobile platform that could play classic games sounded awesome. It was a challenging yet rewarding journey that allowed me to explore my passion for both gaming and tinkering with technology.<br>&emsp;The first step in this endeavor was selecting the right Raspberry Pi model and gathering the necessary components. After some research, I settled on the Raspberry Pi 4 for its improved processing power and versatility. Then, I acquired a high-quality microSD card to store the emulator software and game ROMs and a power supply.<br>&emsp;But I didn't stop there; I wanted to take this project to the next level. Inspired by a desire to make the gaming experience more immersive and portable, I decided to 3D print a custom game case. I designed a compact case that perfectly accommodated the Raspberry Pi, microSD card, and power supply. The case was not only functional but also aesthetically pleasing, reminiscent of a handheld gaming device (despite not having on-board controls).<br>&emsp;The real magic happened when I integrated a small LED screen into the design. The LED screen was strategically placed on the top cover of the case, allowing for a visual display of the games. To power the whole setup, I added a set of rechargeable batteries inside the case. The result was a self-contained, portable gaming device, complete with a screen and battery pack.<br>&emsp;Seeing the LED screen light up with the games and feeling the weight of the 3D-printed game case in my hands was a truly gratifying moment. I had transformed a simple Raspberry Pi into a handheld gaming emulator that could be taken anywhere, untethered from power sources. Navigating through game menus, selecting titles, and experiencing the nostalgia of classic games on a self-created device was a unique and immensely satisfying experience.<br>&emsp;In the end, this fun project was a testament to the versatility and creativity that the Raspberry Pi encourages. It allowed me to indulge in my passion for gaming, explore the world of emulation, and discover the potential of a tiny, affordable computer like the Raspberry Pi. It was not just about recreating games; it was about reliving childhood memories and learning new skills along the way. This project stands as a reminder that, in the world of technology and tinkering, even the most whimsical ideas can lead to rewarding and enjoyable experiences, while simultaneously showcasing the power of 3D printing and creative problem-solving."}],Z3={address:["Blaine, MN","address"],phone:["(651)-808-2645","phone"],email:["prallb@bc.edu","email"],github:["https://www.github.com/bprall","github.com/bprall"],url:["https://bprall.github.io","bprall.github.io"],linkedin:["https://www.linkedin.com/in/bprall/","linkedin.com/in/bprall"],icons:["https://cdn.glitch.global/c6cec155-a368-4ff7-be9e-ab2174e617eb/542638.png?v=1697597474929","https://cdn.glitch.global/c6cec155-a368-4ff7-be9e-ab2174e617eb/phone-call.svg?v=1697599217973","https://cdn.glitch.global/c6cec155-a368-4ff7-be9e-ab2174e617eb/25231.png?v=1697599252200","https://cdn-icons-png.flaticon.com/512/61/61109.png","https://cdn.glitch.global/c6cec155-a368-4ff7-be9e-ab2174e617eb/6565893.png?v=1697599321046","https://cdn.glitch.global/3874a658-483f-41ac-b439-3b48eab1370f/home-146585_640.webp?v=1721016860188"]},e6={cv:K3,frontPage:Q3,about:Y3,news:J3,projects:X3,contact:Z3},Ni=e6.contact,t6=()=>m.jsx("section",{className:"contact",children:m.jsxs("div",{className:"grid-container",children:[m.jsxs("div",{className:"feedback-form",children:[m.jsx("h2",{children:"Feedback Form"}),m.jsx("p",{children:"Let me know what you think of the site or give suggestions by filling out the form below:"}),m.jsxs("form",{action:"mailto:brprall3@gmail.com.com",method:"post",encType:"text/plain",children:[m.jsx("input",{type:"text",id:"name",name:"name",placeholder:"Your Full Name",required:!0}),m.jsx("input",{type:"email",id:"email",name:"email",placeholder:"Your Email",required:!0}),m.jsx("textarea",{id:"feedback",name:"feedback",rows:4,placeholder:"Your Feedback",required:!0}),m.jsx("button",{type:"submit",children:"Send Feedback"})]})]}),m.jsxs("div",{className:"contact-info",children:[m.jsxs("div",{id:"location",children:[m.jsx("h4",{children:"Location"}),m.jsx("p",{className:"contact-text",children:Ni.address[0]})]}),m.jsxs("div",{id:"contact-details",children:[m.jsx("h4",{children:"Contact Details"}),m.jsxs("p",{className:"contact-text",children:["Email:   ",m.jsx("a",{className:"contact-link",href:`mailto:${Ni.email[0]}`,children:Ni.email[0]})]}),m.jsx("br",{}),m.jsxs("p",{className:"contact-text",children:["Phone:   ",m.jsx("a",{className:"contact-link",href:`tel:${Ni.phone[0]}`,children:Ni.phone[0]})]})]}),m.jsxs("div",{id:"socials",children:[m.jsx("h4",{children:"Socials"}),m.jsx(se,{className:"social-links social-links-icons",to:Ni.github[0],target:"_blank",onMouseEnter:()=>Yr(".icon","icon-github-logo","icon-github-reverse"),onMouseLeave:()=>Yr(".icon","icon-github-reverse","icon-github-logo"),children:m.jsx("i",{className:"icon icon-github-logo"})}),m.jsx(se,{className:"social-links social-links-icons",to:Ni.linkedin[0],target:"_blank",onMouseEnter:()=>Yr(".icon","icon-linkedin-logo","icon-linkedinreverse"),onMouseLeave:()=>Yr(".icon","icon-linkedin-reverse","icon-linkedin-logo"),children:m.jsx("i",{className:"icon icon-linkedin-logo"})})]})]})]})}),n6=()=>{const[t,e]=_.useState([]),[n,r]=_.useState("");_.useEffect(()=>{fetch("../data.json").then(s=>s.json()).then(s=>{e(s.projects||[])}).catch(s=>{console.error("Error fetching data:",s)})},[]);const i=t.filter(s=>s.title.toLowerCase().includes(n.toLowerCase())||s.description.toLowerCase().includes(n.toLowerCase()));return m.jsx("section",{id:"projects",children:m.jsxs("div",{className:"staggered-grid-container",children:[m.jsxs("div",{className:"projects-search staggered-grid-item",children:[m.jsx("h2",{id:"projects-page-title",children:"Projects"}),m.jsx("div",{className:"projects-searchbar",children:m.jsx("input",{type:"search",name:"projects",placeholder:"Search Projects...",value:n,onChange:s=>r(s.target.value)})})]}),i.map(s=>m.jsxs("div",{className:"projects-individual staggered-item",children:[m.jsx("h4",{className:"projects-title",dangerouslySetInnerHTML:{__html:s.title||""}}),m.jsx("div",{className:"projects-desc-wrapper",children:m.jsxs("div",{className:"projects-desc-box",children:[m.jsx("div",{className:"projects-desc-float",children:s.descriptionImage&&m.jsx("img",{src:s.descriptionImage,alt:s.title,className:"projects-desc-image"})}),m.jsx("p",{className:"projects-desc-text",dangerouslySetInnerHTML:{__html:s.description||""}})]})}),m.jsx(se,{to:`/projects/${s.id}`,className:"read-more",children:m.jsx("button",{className:"read-more-button",children:"Read More"})})]},s.id))]})})};function u0(t){return t.toString().padStart(2,"0")}const r6=()=>new Date().toLocaleString("default",{month:"long"}),i6=t=>{const e=t.getFullYear(),n=u0(t.getMonth()+1),r=u0(t.getDate());return[e,n,r].join("-")},EA=({className:t})=>{const[e,n]=_.useState(new Date);_.useEffect(()=>{const o=setInterval(()=>{n(new Date)},1e3);return()=>clearInterval(o)},[]);const r=i6(e),i=r6(),s=e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"});return m.jsx("div",{id:"date-clock-container",className:t,children:m.jsxs("div",{className:"date-clock",children:[m.jsxs("h2",{children:[i," ",r.split("-")[2],", ",r.split("-")[0]]}),m.jsx("p",{children:s})]})})},s6=()=>{const[t,e]=_.useState([]),[n,r]=_.useState(!1),[i,s]=_.useState(!1),o=_.useRef([]);_.useEffect(()=>{(async()=>{try{const d=await(await fetch("../data.json")).json();e(d.frontPage||[]),s(!0)}catch(u){console.error("Error fetching data:",u)}})()},[]);const a=(c,u)=>{c.forEach((d,f)=>{d.isIntersecting&&o.current[f]&&(d.target.classList.add("fade-in"),u.unobserve(d.target))})};return _.useEffect(()=>{const c={root:null,rootMargin:"0px",threshold:.25},u=new IntersectionObserver(a,c);return o.current.forEach(d=>{d&&u.observe(d)}),()=>{u.disconnect()}},[t]),_.useEffect(()=>{const c=()=>{const u=window.scrollY;r(u>48)};return window.addEventListener("scroll",c),()=>{window.removeEventListener("scroll",c)}},[]),m.jsxs("div",{id:"home",children:[m.jsx("div",{className:"home-header-container",id:"features-header",children:m.jsxs("div",{children:[m.jsx("p",{children:"My Personal Site"}),m.jsx("h1",{children:"Blake Prall"})]})}),m.jsxs("div",{id:"home-content-container",children:[m.jsx("div",{id:"home-text-container",children:t.map((c,u)=>m.jsxs("div",{className:"home-card",ref:d=>o.current[u]=d,children:[m.jsx("div",{className:"hover-bar"}),c.link?m.jsx(se,{to:c.link,className:"home-card-link",children:m.jsx("p",{className:"home-card-title",children:c.title})}):m.jsx("p",{className:"home-card-title",children:c.title}),m.jsx("p",{className:"home-card-content",children:c.content})]},u))}),m.jsx("div",{id:"date-clock-container",className:n?"fixed":"",children:m.jsx(EA,{})})]}),i&&m.jsxs("section",{id:"contact-me",children:[m.jsx("div",{className:"home-header-container",id:"about-header",children:m.jsx("div",{children:m.jsx("h3",{children:"Contact Me"})})}),m.jsx("div",{id:"about",children:m.jsxs(se,{to:"/contact",className:"about-card",children:[m.jsx("div",{className:"hover-bar"}),m.jsx("img",{src:"https://cdn.glitch.global/b0561b3a-67fa-44de-99d8-728d82b14013/1701894420208%20(2).jpg?v=1715368201737"}),m.jsxs("h4",{children:["Blake Prall",m.jsx("i",{className:"bi bi-chevron-right"})]}),m.jsx("p",{children:"Blake is a recent graduate from Boston College with a double major in computer science and neuroscience."})]})})]})]})},o6=()=>{const[t,e]=_.useState([]),[n,r]=_.useState(!1),[i,s]=_.useState(!1),o=_.useRef([]);_.useEffect(()=>{(async()=>{try{const d=await(await fetch("../data.json")).json();e(d.frontPage||[]),s(!0)}catch(u){console.error("Error fetching data:",u)}})()},[]);const a=(c,u)=>{c.forEach((d,f)=>{d.isIntersecting&&o.current[f]&&(d.target.classList.add("fade-in"),u.unobserve(d.target))})};return _.useEffect(()=>{const c={root:null,rootMargin:"0px",threshold:.25},u=new IntersectionObserver(a,c);return o.current.forEach(d=>{d&&u.observe(d)}),()=>{u.disconnect()}},[t]),_.useEffect(()=>{const c=()=>{const u=window.scrollY;r(u>48)};return window.addEventListener("scroll",c),()=>{window.removeEventListener("scroll",c)}},[]),m.jsxs("div",{id:"home",children:[m.jsx("div",{className:"home-header-container",id:"features-header",children:m.jsxs("div",{children:[m.jsx("p",{children:"My Personal Site"}),m.jsx("h1",{children:"Blake Prall"})]})}),m.jsxs("div",{id:"home-content-container",children:[m.jsx("div",{id:"home-text-container",children:t.map((c,u)=>m.jsxs("div",{className:"home-card",ref:d=>o.current[u]=d,children:[m.jsx("div",{className:"hover-bar"}),c.link?m.jsx(se,{to:c.link,className:"home-card-link",children:m.jsx("p",{className:"home-card-title",children:c.title})}):m.jsx("p",{className:"home-card-title",children:c.title}),m.jsx("p",{className:"home-card-content",children:c.content})]},u))}),m.jsx("div",{id:"date-clock-container",className:n?"fixed":"",children:m.jsx(EA,{})})]}),i&&m.jsxs("section",{id:"contact-me",children:[m.jsx("div",{className:"home-header-container",id:"about-header",children:m.jsx("div",{children:m.jsx("h3",{children:"Contact Me"})})}),m.jsx("div",{id:"about",children:m.jsxs("div",{className:"about-card",onClick:()=>window.location.href="/contact",children:[m.jsx("div",{className:"hover-bar"}),m.jsx("img",{src:"https://cdn.glitch.global/b0561b3a-67fa-44de-99d8-728d82b14013/1701894420208%20(2).jpg?v=1715368201737"}),m.jsxs("h4",{children:["Blake Prall",m.jsx("i",{className:"bi bi-chevron-right"})]}),m.jsx("p",{children:"Blake is a recent graduate from Boston College with a double major in computer science and neuroscience."})]})})]})]})};function Gv(){return m.jsx("div",{className:"top-bar",children:m.jsx("div",{className:"brand-container",children:m.jsx(se,{className:"nonuser-navbar-brand navbar-brand",to:"/",onMouseEnter:()=>Yr(".icon","icon-bp-logo","icon-bp-bb"),onMouseLeave:()=>Yr(".icon","icon-bp-bb","icon-bp-logo"),children:m.jsx("i",{className:"icon icon-bp-logo"})})})})}function a6(){return m.jsxs(m.Fragment,{children:[m.jsx(Gv,{}),m.jsxs("div",{className:"signup-pending",children:[m.jsx("h1",{children:"Sign Up Pending"}),m.jsx("p",{children:"Your account is currently pending approval. You will be notified once it's approved."})]})]})}const l6=()=>{const{id:t}=Qb(),[e,n]=_.useState(null),[r,i]=_.useState(!0),[s,o]=_.useState(null);return _.useEffect(()=>{t&&(async()=>{try{const c=await fetch("../data.json");if(!c.ok)throw new Error("Network response was not ok");const d=(await c.json()).projects.find(f=>f.id===t);n(d||null)}catch{o("Failed to load project data.")}finally{i(!1)}})()},[t]),r?m.jsx("main",{children:m.jsx("p",{children:"Loading..."})}):s?m.jsx("main",{children:m.jsx("p",{children:s})}):e?m.jsx("main",{children:m.jsxs("section",{className:"project",id:e.type,children:[m.jsxs("h3",{children:[e.title,m.jsx("a",{href:e.titleLink,target:"_blank",children:m.jsx("u",{children:e.titleLinkLabel})})]}),e.type==="pdf"?m.jsx("iframe",{src:e.materials?e.materials[0].path:"",style:{width:"100%",height:"100vh"},scrolling:"yes"}):m.jsx("div",{className:"project-text",dangerouslySetInnerHTML:{__html:e.contents||""}})]})}):m.jsx("main",{children:m.jsx("p",{children:"Project not found."})})};function c6(){const[t,e]=_.useState(""),[n,r]=_.useState(""),[i,s]=_.useState(""),o=Ud(),a=[{id:"floatingEmail",type:"email",placeholder:"Email",value:t,onChange:d=>e(d.target.value)},{id:"floatingPassword",type:"password",placeholder:"Password",value:n,onChange:d=>r(d.target.value)}],c=async d=>{d.preventDefault();try{await m$(Vf,kv),await p$(Vf,t,n),o("/expenses",{replace:!0})}catch(f){console.error("Authentication error:",f.message),s("Invalid email or password.")}},u=_.useCallback(async()=>{try{const d=await G$(Vf);d&&d.user?(console.log("Google sign-in success:",d.user),o("/expenses",{replace:!0})):console.log("No user signed in or there was an issue.")}catch(d){console.error("Error handling redirect result:",d.code,d.message),s(d.message.replace("Firebase:","").trim())}},[o]);return _.useEffect(()=>{u()},[u]),m.jsxs(m.Fragment,{children:[m.jsx(Gv,{}),m.jsxs("div",{className:"login-form",children:[m.jsxs("form",{id:"login-form",onSubmit:c,children:[a.map((d,f)=>m.jsxs("div",{className:"form-floating mb-3",children:[m.jsx("input",{className:"form-control",type:d.type,placeholder:d.placeholder,id:d.id,value:d.value,onChange:d.onChange,required:!0}),m.jsx("label",{htmlFor:d.id,children:d.placeholder})]},f)),i&&m.jsx("p",{style:{color:"red"},children:i}),i?null:m.jsx("br",{}),m.jsx("input",{type:"submit",value:"Sign in"})]}),m.jsxs("p",{id:"link-to-signup",children:["Don't have an account? Request to ",m.jsx(se,{to:"/signup",children:"Sign Up"}),"."]})]})]})}function u6(){const[t,e]=_.useState(""),[n,r]=_.useState(""),[i,s]=_.useState(""),[o,a]=_.useState(""),[c,u]=_.useState(""),[d,f]=_.useState(""),g=Ud(),R=Av(),P=[{id:"floatingFirstName",type:"text",placeholder:"First Name",value:t,onChange:I=>e(I.target.value)},{id:"floatingLastName",type:"text",placeholder:"Last Name",value:n,onChange:I=>r(I.target.value)},{id:"floatingEmail",type:"email",placeholder:"Email",value:i,onChange:I=>s(I.target.value)},{id:"floatingPassword",type:"password",placeholder:"Password",value:o,onChange:I=>a(I.target.value)},{id:"floatingConfirmPassword",type:"password",placeholder:"Confirm Password",value:c,onChange:I=>u(I.target.value)}],x=async()=>{try{const E=(await f$(R,i,o)).user,k=eU(x4,`users/${E.uid}/info`),O=tU(k,"userInfo");await mU(O,{uid:E.uid,firstName:t,lastName:n,email:E.email,status:"pending"}),g("/signup-pending",{replace:!0}),console.log("Document written with ID: info")}catch(I){console.error("Registration error:",I.message),f(I.message.replace("Firebase:","").trim())}},N=async I=>{if(I.preventDefault(),o!==c){console.error("Passwords do not match."),f("Passwords do not match.");return}x()};return m.jsxs("form",{id:"signup-form",onSubmit:N,children:[P.map(I=>m.jsxs("div",{className:"form-floating mb-3",children:[m.jsx("input",{className:"form-control",type:I.type,placeholder:I.placeholder,id:I.id,value:I.value,onChange:I.onChange,required:!0}),m.jsx("label",{htmlFor:I.id,children:I.placeholder})]},I.id)),d&&m.jsx("p",{style:{color:"red"},children:d}),d?null:m.jsx("br",{}),m.jsx("input",{type:"submit",value:"Sign Up"})]})}function d6(){return m.jsxs(m.Fragment,{children:[m.jsx(Gv,{}),m.jsx("div",{className:"login-form",children:m.jsx(u6,{})})]})}const h6=({children:t})=>{const e=_A(),n=bo();return e&&e.user?t:m.jsx(lN,{to:"/login",state:{path:n.pathname}})};xo.initializeApp(cC);const ya=({children:t})=>m.jsxs("div",{className:"wrapper",children:[m.jsx(vA,{}),m.jsx(wA,{}),t]});function f6({element:t}){return m.jsx(h6,{children:m.jsxs("div",{className:"main-container",children:[m.jsx(vA,{}),m.jsx(wA,{}),t]})})}function p6(){return m.jsx(q3,{children:m.jsxs(uN,{children:[m.jsx(Ln,{path:"/",element:m.jsx(ya,{children:m.jsx(s6,{})})}),m.jsx(Ln,{path:"/about",element:m.jsx(ya,{children:m.jsx(G3,{})})}),m.jsx(Ln,{path:"/login",element:m.jsx(c6,{})}),m.jsx(Ln,{path:"/signup",element:m.jsx(d6,{})}),m.jsx(Ln,{path:"/signup-pending",element:m.jsx(a6,{})}),m.jsx(Ln,{path:"/contact",element:m.jsx(ya,{children:m.jsx(t6,{})})}),m.jsx(Ln,{path:"/projects",element:m.jsx(ya,{children:m.jsx(n6,{})})}),m.jsx(Ln,{path:"/projects/:id",element:m.jsx(ya,{children:m.jsx(l6,{})})}),m.jsx(Ln,{path:"/source-code",element:m.jsx(f6,{element:m.jsx(o6,{})})})]})})}Gf.createRoot(document.getElementById("root")).render(m.jsx(Tt.StrictMode,{children:m.jsx(vN,{children:m.jsx(p6,{})})}));
