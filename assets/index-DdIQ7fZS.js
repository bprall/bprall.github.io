function ak(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Ia(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Rw={exports:{}},Gu={},Pw={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ta=Symbol.for("react.element"),lk=Symbol.for("react.portal"),uk=Symbol.for("react.fragment"),ck=Symbol.for("react.strict_mode"),dk=Symbol.for("react.profiler"),hk=Symbol.for("react.provider"),fk=Symbol.for("react.context"),pk=Symbol.for("react.forward_ref"),mk=Symbol.for("react.suspense"),gk=Symbol.for("react.memo"),vk=Symbol.for("react.lazy"),Pg=Symbol.iterator;function yk(t){return t===null||typeof t!="object"?null:(t=Pg&&t[Pg]||t["@@iterator"],typeof t=="function"?t:null)}var Aw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nw=Object.assign,bw={};function Os(t,e,n){this.props=t,this.context=e,this.refs=bw,this.updater=n||Aw}Os.prototype.isReactComponent={};Os.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Os.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ow(){}Ow.prototype=Os.prototype;function Nf(t,e,n){this.props=t,this.context=e,this.refs=bw,this.updater=n||Aw}var bf=Nf.prototype=new Ow;bf.constructor=Nf;Nw(bf,Os.prototype);bf.isPureReactComponent=!0;var Ag=Array.isArray,xw=Object.prototype.hasOwnProperty,Of={current:null},Lw={key:!0,ref:!0,__self:!0,__source:!0};function Dw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)xw.call(e,r)&&!Lw.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ta,type:t,key:s,ref:o,props:i,_owner:Of.current}}function wk(t,e){return{$$typeof:Ta,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function xf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ta}function _k(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ng=/\/+/g;function ld(t,e){return typeof t=="object"&&t!==null&&t.key!=null?_k(""+t.key):e.toString(36)}function Al(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ta:case lk:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ld(o,0):r,Ag(i)?(n="",t!=null&&(n=t.replace(Ng,"$&/")+"/"),Al(i,e,n,"",function(c){return c})):i!=null&&(xf(i)&&(i=wk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ng,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ag(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+ld(s,l);o+=Al(s,e,n,u,i)}else if(u=yk(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+ld(s,l++),o+=Al(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function rl(t,e,n){if(t==null)return t;var r=[],i=0;return Al(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Ek(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ht={current:null},Nl={transition:null},Ik={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:Nl,ReactCurrentOwner:Of};function Mw(){throw Error("act(...) is not supported in production builds of React.")}Q.Children={map:rl,forEach:function(t,e,n){rl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return rl(t,function(){e++}),e},toArray:function(t){return rl(t,function(e){return e})||[]},only:function(t){if(!xf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Q.Component=Os;Q.Fragment=uk;Q.Profiler=dk;Q.PureComponent=Nf;Q.StrictMode=ck;Q.Suspense=mk;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ik;Q.act=Mw;Q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Nw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Of.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)xw.call(e,u)&&!Lw.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Ta,type:t.type,key:i,ref:s,props:r,_owner:o}};Q.createContext=function(t){return t={$$typeof:fk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:hk,_context:t},t.Consumer=t};Q.createElement=Dw;Q.createFactory=function(t){var e=Dw.bind(null,t);return e.type=t,e};Q.createRef=function(){return{current:null}};Q.forwardRef=function(t){return{$$typeof:pk,render:t}};Q.isValidElement=xf;Q.lazy=function(t){return{$$typeof:vk,_payload:{_status:-1,_result:t},_init:Ek}};Q.memo=function(t,e){return{$$typeof:gk,type:t,compare:e===void 0?null:e}};Q.startTransition=function(t){var e=Nl.transition;Nl.transition={};try{t()}finally{Nl.transition=e}};Q.unstable_act=Mw;Q.useCallback=function(t,e){return ht.current.useCallback(t,e)};Q.useContext=function(t){return ht.current.useContext(t)};Q.useDebugValue=function(){};Q.useDeferredValue=function(t){return ht.current.useDeferredValue(t)};Q.useEffect=function(t,e){return ht.current.useEffect(t,e)};Q.useId=function(){return ht.current.useId()};Q.useImperativeHandle=function(t,e,n){return ht.current.useImperativeHandle(t,e,n)};Q.useInsertionEffect=function(t,e){return ht.current.useInsertionEffect(t,e)};Q.useLayoutEffect=function(t,e){return ht.current.useLayoutEffect(t,e)};Q.useMemo=function(t,e){return ht.current.useMemo(t,e)};Q.useReducer=function(t,e,n){return ht.current.useReducer(t,e,n)};Q.useRef=function(t){return ht.current.useRef(t)};Q.useState=function(t){return ht.current.useState(t)};Q.useSyncExternalStore=function(t,e,n){return ht.current.useSyncExternalStore(t,e,n)};Q.useTransition=function(){return ht.current.useTransition()};Q.version="18.3.1";Pw.exports=Q;var w=Pw.exports;const st=Ia(w),Tk=ak({__proto__:null,default:st},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sk=w,kk=Symbol.for("react.element"),Ck=Symbol.for("react.fragment"),Rk=Object.prototype.hasOwnProperty,Pk=Sk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ak={key:!0,ref:!0,__self:!0,__source:!0};function jw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Rk.call(e,r)&&!Ak.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:kk,type:t,key:s,ref:o,props:i,_owner:Pk.current}}Gu.Fragment=Ck;Gu.jsx=jw;Gu.jsxs=jw;Rw.exports=Gu;var m=Rw.exports,sh={},Uw={exports:{}},Ot={},$w={exports:{}},Fw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,z){var W=U.length;U.push(z);e:for(;0<W;){var Y=W-1>>>1,K=U[Y];if(0<i(K,z))U[Y]=z,U[W]=K,W=Y;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var z=U[0],W=U.pop();if(W!==z){U[0]=W;e:for(var Y=0,K=U.length,ne=K>>>1;Y<ne;){var Ie=2*(Y+1)-1,re=U[Ie],Re=Ie+1,Je=U[Re];if(0>i(re,W))Re<K&&0>i(Je,re)?(U[Y]=Je,U[Re]=W,Y=Re):(U[Y]=re,U[Ie]=W,Y=Ie);else if(Re<K&&0>i(Je,W))U[Y]=Je,U[Re]=W,Y=Re;else break e}}return z}function i(U,z){var W=U.sortIndex-z.sortIndex;return W!==0?W:U.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],h=1,p=null,y=3,A=!1,I=!1,O=!1,N=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(U){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=U)r(c),z.sortIndex=z.expirationTime,e(u,z);else break;z=n(c)}}function x(U){if(O=!1,k(U),!I)if(n(u)!==null)I=!0,$(D);else{var z=n(c);z!==null&&H(x,z.startTime-U)}}function D(U,z){I=!1,O&&(O=!1,R(g),g=-1),A=!0;var W=y;try{for(k(z),p=n(u);p!==null&&(!(p.expirationTime>z)||U&&!P());){var Y=p.callback;if(typeof Y=="function"){p.callback=null,y=p.priorityLevel;var K=Y(p.expirationTime<=z);z=t.unstable_now(),typeof K=="function"?p.callback=K:p===n(u)&&r(u),k(z)}else r(u);p=n(u)}if(p!==null)var ne=!0;else{var Ie=n(c);Ie!==null&&H(x,Ie.startTime-z),ne=!1}return ne}finally{p=null,y=W,A=!1}}var M=!1,E=null,g=-1,T=5,C=-1;function P(){return!(t.unstable_now()-C<T)}function b(){if(E!==null){var U=t.unstable_now();C=U;var z=!0;try{z=E(!0,U)}finally{z?S():(M=!1,E=null)}}else M=!1}var S;if(typeof _=="function")S=function(){_(b)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,ae=X.port2;X.port1.onmessage=b,S=function(){ae.postMessage(null)}}else S=function(){N(b,0)};function $(U){E=U,M||(M=!0,S())}function H(U,z){g=N(function(){U(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){I||A||(I=!0,$(D))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(U){switch(y){case 1:case 2:case 3:var z=3;break;default:z=y}var W=y;y=z;try{return U()}finally{y=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,z){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var W=y;y=U;try{return z()}finally{y=W}},t.unstable_scheduleCallback=function(U,z,W){var Y=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?Y+W:Y):W=Y,U){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=W+K,U={id:h++,callback:z,priorityLevel:U,startTime:W,expirationTime:K,sortIndex:-1},W>Y?(U.sortIndex=W,e(c,U),n(u)===null&&U===n(c)&&(O?(R(g),g=-1):O=!0,H(x,W-Y))):(U.sortIndex=K,e(u,U),I||A||(I=!0,$(D))),U},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(U){var z=y;return function(){var W=y;y=z;try{return U.apply(this,arguments)}finally{y=W}}}})(Fw);$w.exports=Fw;var Nk=$w.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bk=w,Nt=Nk;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vw=new Set,Wo={};function Ii(t,e){ms(t,e),ms(t+"Capture",e)}function ms(t,e){for(Wo[t]=e,t=0;t<e.length;t++)Vw.add(e[t])}var Ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oh=Object.prototype.hasOwnProperty,Ok=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bg={},Og={};function xk(t){return oh.call(Og,t)?!0:oh.call(bg,t)?!1:Ok.test(t)?Og[t]=!0:(bg[t]=!0,!1)}function Lk(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Dk(t,e,n,r){if(e===null||typeof e>"u"||Lk(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ft(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qe[t]=new ft(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qe[e]=new ft(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qe[t]=new ft(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qe[t]=new ft(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qe[t]=new ft(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qe[t]=new ft(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qe[t]=new ft(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qe[t]=new ft(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qe[t]=new ft(t,5,!1,t.toLowerCase(),null,!1,!1)});var Lf=/[\-:]([a-z])/g;function Df(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Lf,Df);qe[e]=new ft(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Lf,Df);qe[e]=new ft(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Lf,Df);qe[e]=new ft(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qe[t]=new ft(t,1,!1,t.toLowerCase(),null,!1,!1)});qe.xlinkHref=new ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qe[t]=new ft(t,1,!1,t.toLowerCase(),null,!0,!0)});function Mf(t,e,n,r){var i=qe.hasOwnProperty(e)?qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Dk(e,n,i,r)&&(n=null),r||i===null?xk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Hn=bk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,il=Symbol.for("react.element"),Vi=Symbol.for("react.portal"),Bi=Symbol.for("react.fragment"),jf=Symbol.for("react.strict_mode"),ah=Symbol.for("react.profiler"),Bw=Symbol.for("react.provider"),zw=Symbol.for("react.context"),Uf=Symbol.for("react.forward_ref"),lh=Symbol.for("react.suspense"),uh=Symbol.for("react.suspense_list"),$f=Symbol.for("react.memo"),ir=Symbol.for("react.lazy"),Hw=Symbol.for("react.offscreen"),xg=Symbol.iterator;function io(t){return t===null||typeof t!="object"?null:(t=xg&&t[xg]||t["@@iterator"],typeof t=="function"?t:null)}var Ee=Object.assign,ud;function yo(t){if(ud===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ud=e&&e[1]||""}return`
`+ud+t}var cd=!1;function dd(t,e){if(!t||cd)return"";cd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{cd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?yo(t):""}function Mk(t){switch(t.tag){case 5:return yo(t.type);case 16:return yo("Lazy");case 13:return yo("Suspense");case 19:return yo("SuspenseList");case 0:case 2:case 15:return t=dd(t.type,!1),t;case 11:return t=dd(t.type.render,!1),t;case 1:return t=dd(t.type,!0),t;default:return""}}function ch(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Bi:return"Fragment";case Vi:return"Portal";case ah:return"Profiler";case jf:return"StrictMode";case lh:return"Suspense";case uh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case zw:return(t.displayName||"Context")+".Consumer";case Bw:return(t._context.displayName||"Context")+".Provider";case Uf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $f:return e=t.displayName||null,e!==null?e:ch(t.type)||"Memo";case ir:e=t._payload,t=t._init;try{return ch(t(e))}catch{}}return null}function jk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ch(e);case 8:return e===jf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ww(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Uk(t){var e=Ww(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function sl(t){t._valueTracker||(t._valueTracker=Uk(t))}function Gw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ww(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Xl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function dh(t,e){var n=e.checked;return Ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Lg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Kw(t,e){e=e.checked,e!=null&&Mf(t,"checked",e,!1)}function hh(t,e){Kw(t,e);var n=Ar(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?fh(t,e.type,n):e.hasOwnProperty("defaultValue")&&fh(t,e.type,Ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Dg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function fh(t,e,n){(e!=="number"||Xl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var wo=Array.isArray;function rs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ar(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ph(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Mg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(wo(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ar(n)}}function qw(t,e){var n=Ar(e.value),r=Ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function jg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Yw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Yw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ol,Jw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ol=ol||document.createElement("div"),ol.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ol.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Go(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Po={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$k=["Webkit","ms","Moz","O"];Object.keys(Po).forEach(function(t){$k.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Po[e]=Po[t]})});function Xw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Po.hasOwnProperty(t)&&Po[t]?(""+e).trim():e+"px"}function Qw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Xw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Fk=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gh(t,e){if(e){if(Fk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function vh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yh=null;function Ff(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var wh=null,is=null,ss=null;function Ug(t){if(t=Ca(t)){if(typeof wh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Xu(e),wh(t.stateNode,t.type,e))}}function Zw(t){is?ss?ss.push(t):ss=[t]:is=t}function e0(){if(is){var t=is,e=ss;if(ss=is=null,Ug(t),e)for(t=0;t<e.length;t++)Ug(e[t])}}function t0(t,e){return t(e)}function n0(){}var hd=!1;function r0(t,e,n){if(hd)return t(e,n);hd=!0;try{return t0(t,e,n)}finally{hd=!1,(is!==null||ss!==null)&&(n0(),e0())}}function Ko(t,e){var n=t.stateNode;if(n===null)return null;var r=Xu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var _h=!1;if(Ln)try{var so={};Object.defineProperty(so,"passive",{get:function(){_h=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{_h=!1}function Vk(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Ao=!1,Ql=null,Zl=!1,Eh=null,Bk={onError:function(t){Ao=!0,Ql=t}};function zk(t,e,n,r,i,s,o,l,u){Ao=!1,Ql=null,Vk.apply(Bk,arguments)}function Hk(t,e,n,r,i,s,o,l,u){if(zk.apply(this,arguments),Ao){if(Ao){var c=Ql;Ao=!1,Ql=null}else throw Error(F(198));Zl||(Zl=!0,Eh=c)}}function Ti(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function i0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function $g(t){if(Ti(t)!==t)throw Error(F(188))}function Wk(t){var e=t.alternate;if(!e){if(e=Ti(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return $g(i),t;if(s===r)return $g(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function s0(t){return t=Wk(t),t!==null?o0(t):null}function o0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=o0(t);if(e!==null)return e;t=t.sibling}return null}var a0=Nt.unstable_scheduleCallback,Fg=Nt.unstable_cancelCallback,Gk=Nt.unstable_shouldYield,Kk=Nt.unstable_requestPaint,Ne=Nt.unstable_now,qk=Nt.unstable_getCurrentPriorityLevel,Vf=Nt.unstable_ImmediatePriority,l0=Nt.unstable_UserBlockingPriority,eu=Nt.unstable_NormalPriority,Yk=Nt.unstable_LowPriority,u0=Nt.unstable_IdlePriority,Ku=null,mn=null;function Jk(t){if(mn&&typeof mn.onCommitFiberRoot=="function")try{mn.onCommitFiberRoot(Ku,t,void 0,(t.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:Zk,Xk=Math.log,Qk=Math.LN2;function Zk(t){return t>>>=0,t===0?32:31-(Xk(t)/Qk|0)|0}var al=64,ll=4194304;function _o(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function tu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=_o(l):(s&=o,s!==0&&(r=_o(s)))}else o=n&~i,o!==0?r=_o(o):s!==0&&(r=_o(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-en(e),i=1<<n,r|=t[n],e&=~i;return r}function e1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function t1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-en(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=e1(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Ih(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function c0(){var t=al;return al<<=1,!(al&4194240)&&(al=64),t}function fd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Sa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-en(e),t[e]=n}function n1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-en(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Bf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-en(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ce=0;function d0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var h0,zf,f0,p0,m0,Th=!1,ul=[],wr=null,_r=null,Er=null,qo=new Map,Yo=new Map,ar=[],r1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vg(t,e){switch(t){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":qo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yo.delete(e.pointerId)}}function oo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ca(e),e!==null&&zf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function i1(t,e,n,r,i){switch(e){case"focusin":return wr=oo(wr,t,e,n,r,i),!0;case"dragenter":return _r=oo(_r,t,e,n,r,i),!0;case"mouseover":return Er=oo(Er,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return qo.set(s,oo(qo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Yo.set(s,oo(Yo.get(s)||null,t,e,n,r,i)),!0}return!1}function g0(t){var e=Jr(t.target);if(e!==null){var n=Ti(e);if(n!==null){if(e=n.tag,e===13){if(e=i0(n),e!==null){t.blockedOn=e,m0(t.priority,function(){f0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Sh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);yh=r,n.target.dispatchEvent(r),yh=null}else return e=Ca(n),e!==null&&zf(e),t.blockedOn=n,!1;e.shift()}return!0}function Bg(t,e,n){bl(t)&&n.delete(e)}function s1(){Th=!1,wr!==null&&bl(wr)&&(wr=null),_r!==null&&bl(_r)&&(_r=null),Er!==null&&bl(Er)&&(Er=null),qo.forEach(Bg),Yo.forEach(Bg)}function ao(t,e){t.blockedOn===e&&(t.blockedOn=null,Th||(Th=!0,Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority,s1)))}function Jo(t){function e(i){return ao(i,t)}if(0<ul.length){ao(ul[0],t);for(var n=1;n<ul.length;n++){var r=ul[n];r.blockedOn===t&&(r.blockedOn=null)}}for(wr!==null&&ao(wr,t),_r!==null&&ao(_r,t),Er!==null&&ao(Er,t),qo.forEach(e),Yo.forEach(e),n=0;n<ar.length;n++)r=ar[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ar.length&&(n=ar[0],n.blockedOn===null);)g0(n),n.blockedOn===null&&ar.shift()}var os=Hn.ReactCurrentBatchConfig,nu=!0;function o1(t,e,n,r){var i=ce,s=os.transition;os.transition=null;try{ce=1,Hf(t,e,n,r)}finally{ce=i,os.transition=s}}function a1(t,e,n,r){var i=ce,s=os.transition;os.transition=null;try{ce=4,Hf(t,e,n,r)}finally{ce=i,os.transition=s}}function Hf(t,e,n,r){if(nu){var i=Sh(t,e,n,r);if(i===null)Td(t,e,r,ru,n),Vg(t,r);else if(i1(i,t,e,n,r))r.stopPropagation();else if(Vg(t,r),e&4&&-1<r1.indexOf(t)){for(;i!==null;){var s=Ca(i);if(s!==null&&h0(s),s=Sh(t,e,n,r),s===null&&Td(t,e,r,ru,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Td(t,e,r,null,n)}}var ru=null;function Sh(t,e,n,r){if(ru=null,t=Ff(r),t=Jr(t),t!==null)if(e=Ti(t),e===null)t=null;else if(n=e.tag,n===13){if(t=i0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ru=t,null}function v0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qk()){case Vf:return 1;case l0:return 4;case eu:case Yk:return 16;case u0:return 536870912;default:return 16}default:return 16}}var pr=null,Wf=null,Ol=null;function y0(){if(Ol)return Ol;var t,e=Wf,n=e.length,r,i="value"in pr?pr.value:pr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ol=i.slice(t,1<r?1-r:void 0)}function xl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function cl(){return!0}function zg(){return!1}function xt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?cl:zg,this.isPropagationStopped=zg,this}return Ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),e}var xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gf=xt(xs),ka=Ee({},xs,{view:0,detail:0}),l1=xt(ka),pd,md,lo,qu=Ee({},ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==lo&&(lo&&t.type==="mousemove"?(pd=t.screenX-lo.screenX,md=t.screenY-lo.screenY):md=pd=0,lo=t),pd)},movementY:function(t){return"movementY"in t?t.movementY:md}}),Hg=xt(qu),u1=Ee({},qu,{dataTransfer:0}),c1=xt(u1),d1=Ee({},ka,{relatedTarget:0}),gd=xt(d1),h1=Ee({},xs,{animationName:0,elapsedTime:0,pseudoElement:0}),f1=xt(h1),p1=Ee({},xs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),m1=xt(p1),g1=Ee({},xs,{data:0}),Wg=xt(g1),v1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},y1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},w1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=w1[t])?!!e[t]:!1}function Kf(){return _1}var E1=Ee({},ka,{key:function(t){if(t.key){var e=v1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?y1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kf,charCode:function(t){return t.type==="keypress"?xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),I1=xt(E1),T1=Ee({},qu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gg=xt(T1),S1=Ee({},ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kf}),k1=xt(S1),C1=Ee({},xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),R1=xt(C1),P1=Ee({},qu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),A1=xt(P1),N1=[9,13,27,32],qf=Ln&&"CompositionEvent"in window,No=null;Ln&&"documentMode"in document&&(No=document.documentMode);var b1=Ln&&"TextEvent"in window&&!No,w0=Ln&&(!qf||No&&8<No&&11>=No),Kg=" ",qg=!1;function _0(t,e){switch(t){case"keyup":return N1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function E0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zi=!1;function O1(t,e){switch(t){case"compositionend":return E0(e);case"keypress":return e.which!==32?null:(qg=!0,Kg);case"textInput":return t=e.data,t===Kg&&qg?null:t;default:return null}}function x1(t,e){if(zi)return t==="compositionend"||!qf&&_0(t,e)?(t=y0(),Ol=Wf=pr=null,zi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return w0&&e.locale!=="ko"?null:e.data;default:return null}}var L1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!L1[t.type]:e==="textarea"}function I0(t,e,n,r){Zw(r),e=iu(e,"onChange"),0<e.length&&(n=new Gf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var bo=null,Xo=null;function D1(t){x0(t,0)}function Yu(t){var e=Gi(t);if(Gw(e))return t}function M1(t,e){if(t==="change")return e}var T0=!1;if(Ln){var vd;if(Ln){var yd="oninput"in document;if(!yd){var Jg=document.createElement("div");Jg.setAttribute("oninput","return;"),yd=typeof Jg.oninput=="function"}vd=yd}else vd=!1;T0=vd&&(!document.documentMode||9<document.documentMode)}function Xg(){bo&&(bo.detachEvent("onpropertychange",S0),Xo=bo=null)}function S0(t){if(t.propertyName==="value"&&Yu(Xo)){var e=[];I0(e,Xo,t,Ff(t)),r0(D1,e)}}function j1(t,e,n){t==="focusin"?(Xg(),bo=e,Xo=n,bo.attachEvent("onpropertychange",S0)):t==="focusout"&&Xg()}function U1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yu(Xo)}function $1(t,e){if(t==="click")return Yu(e)}function F1(t,e){if(t==="input"||t==="change")return Yu(e)}function V1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var nn=typeof Object.is=="function"?Object.is:V1;function Qo(t,e){if(nn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!oh.call(e,i)||!nn(t[i],e[i]))return!1}return!0}function Qg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zg(t,e){var n=Qg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qg(n)}}function k0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?k0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function C0(){for(var t=window,e=Xl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Xl(t.document)}return e}function Yf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function B1(t){var e=C0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&k0(n.ownerDocument.documentElement,n)){if(r!==null&&Yf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Zg(n,s);var o=Zg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var z1=Ln&&"documentMode"in document&&11>=document.documentMode,Hi=null,kh=null,Oo=null,Ch=!1;function ev(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ch||Hi==null||Hi!==Xl(r)||(r=Hi,"selectionStart"in r&&Yf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Oo&&Qo(Oo,r)||(Oo=r,r=iu(kh,"onSelect"),0<r.length&&(e=new Gf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Hi)))}function dl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Wi={animationend:dl("Animation","AnimationEnd"),animationiteration:dl("Animation","AnimationIteration"),animationstart:dl("Animation","AnimationStart"),transitionend:dl("Transition","TransitionEnd")},wd={},R0={};Ln&&(R0=document.createElement("div").style,"AnimationEvent"in window||(delete Wi.animationend.animation,delete Wi.animationiteration.animation,delete Wi.animationstart.animation),"TransitionEvent"in window||delete Wi.transitionend.transition);function Ju(t){if(wd[t])return wd[t];if(!Wi[t])return t;var e=Wi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in R0)return wd[t]=e[n];return t}var P0=Ju("animationend"),A0=Ju("animationiteration"),N0=Ju("animationstart"),b0=Ju("transitionend"),O0=new Map,tv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(t,e){O0.set(t,e),Ii(e,[t])}for(var _d=0;_d<tv.length;_d++){var Ed=tv[_d],H1=Ed.toLowerCase(),W1=Ed[0].toUpperCase()+Ed.slice(1);Lr(H1,"on"+W1)}Lr(P0,"onAnimationEnd");Lr(A0,"onAnimationIteration");Lr(N0,"onAnimationStart");Lr("dblclick","onDoubleClick");Lr("focusin","onFocus");Lr("focusout","onBlur");Lr(b0,"onTransitionEnd");ms("onMouseEnter",["mouseout","mouseover"]);ms("onMouseLeave",["mouseout","mouseover"]);ms("onPointerEnter",["pointerout","pointerover"]);ms("onPointerLeave",["pointerout","pointerover"]);Ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ii("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),G1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Eo));function nv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Hk(r,e,void 0,t),t.currentTarget=null}function x0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;nv(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;nv(i,l,c),s=u}}}if(Zl)throw t=Eh,Zl=!1,Eh=null,t}function me(t,e){var n=e[bh];n===void 0&&(n=e[bh]=new Set);var r=t+"__bubble";n.has(r)||(L0(e,t,2,!1),n.add(r))}function Id(t,e,n){var r=0;e&&(r|=4),L0(n,t,r,e)}var hl="_reactListening"+Math.random().toString(36).slice(2);function Zo(t){if(!t[hl]){t[hl]=!0,Vw.forEach(function(n){n!=="selectionchange"&&(G1.has(n)||Id(n,!1,t),Id(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[hl]||(e[hl]=!0,Id("selectionchange",!1,e))}}function L0(t,e,n,r){switch(v0(e)){case 1:var i=o1;break;case 4:i=a1;break;default:i=Hf}n=i.bind(null,e,n,t),i=void 0,!_h||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Td(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Jr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}r0(function(){var c=s,h=Ff(n),p=[];e:{var y=O0.get(t);if(y!==void 0){var A=Gf,I=t;switch(t){case"keypress":if(xl(n)===0)break e;case"keydown":case"keyup":A=I1;break;case"focusin":I="focus",A=gd;break;case"focusout":I="blur",A=gd;break;case"beforeblur":case"afterblur":A=gd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Hg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=c1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=k1;break;case P0:case A0:case N0:A=f1;break;case b0:A=R1;break;case"scroll":A=l1;break;case"wheel":A=A1;break;case"copy":case"cut":case"paste":A=m1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Gg}var O=(e&4)!==0,N=!O&&t==="scroll",R=O?y!==null?y+"Capture":null:y;O=[];for(var _=c,k;_!==null;){k=_;var x=k.stateNode;if(k.tag===5&&x!==null&&(k=x,R!==null&&(x=Ko(_,R),x!=null&&O.push(ea(_,x,k)))),N)break;_=_.return}0<O.length&&(y=new A(y,I,null,n,h),p.push({event:y,listeners:O}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",y&&n!==yh&&(I=n.relatedTarget||n.fromElement)&&(Jr(I)||I[Dn]))break e;if((A||y)&&(y=h.window===h?h:(y=h.ownerDocument)?y.defaultView||y.parentWindow:window,A?(I=n.relatedTarget||n.toElement,A=c,I=I?Jr(I):null,I!==null&&(N=Ti(I),I!==N||I.tag!==5&&I.tag!==6)&&(I=null)):(A=null,I=c),A!==I)){if(O=Hg,x="onMouseLeave",R="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(O=Gg,x="onPointerLeave",R="onPointerEnter",_="pointer"),N=A==null?y:Gi(A),k=I==null?y:Gi(I),y=new O(x,_+"leave",A,n,h),y.target=N,y.relatedTarget=k,x=null,Jr(h)===c&&(O=new O(R,_+"enter",I,n,h),O.target=k,O.relatedTarget=N,x=O),N=x,A&&I)t:{for(O=A,R=I,_=0,k=O;k;k=Oi(k))_++;for(k=0,x=R;x;x=Oi(x))k++;for(;0<_-k;)O=Oi(O),_--;for(;0<k-_;)R=Oi(R),k--;for(;_--;){if(O===R||R!==null&&O===R.alternate)break t;O=Oi(O),R=Oi(R)}O=null}else O=null;A!==null&&rv(p,y,A,O,!1),I!==null&&N!==null&&rv(p,N,I,O,!0)}}e:{if(y=c?Gi(c):window,A=y.nodeName&&y.nodeName.toLowerCase(),A==="select"||A==="input"&&y.type==="file")var D=M1;else if(Yg(y))if(T0)D=F1;else{D=U1;var M=j1}else(A=y.nodeName)&&A.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(D=$1);if(D&&(D=D(t,c))){I0(p,D,n,h);break e}M&&M(t,y,c),t==="focusout"&&(M=y._wrapperState)&&M.controlled&&y.type==="number"&&fh(y,"number",y.value)}switch(M=c?Gi(c):window,t){case"focusin":(Yg(M)||M.contentEditable==="true")&&(Hi=M,kh=c,Oo=null);break;case"focusout":Oo=kh=Hi=null;break;case"mousedown":Ch=!0;break;case"contextmenu":case"mouseup":case"dragend":Ch=!1,ev(p,n,h);break;case"selectionchange":if(z1)break;case"keydown":case"keyup":ev(p,n,h)}var E;if(qf)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else zi?_0(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(w0&&n.locale!=="ko"&&(zi||g!=="onCompositionStart"?g==="onCompositionEnd"&&zi&&(E=y0()):(pr=h,Wf="value"in pr?pr.value:pr.textContent,zi=!0)),M=iu(c,g),0<M.length&&(g=new Wg(g,t,null,n,h),p.push({event:g,listeners:M}),E?g.data=E:(E=E0(n),E!==null&&(g.data=E)))),(E=b1?O1(t,n):x1(t,n))&&(c=iu(c,"onBeforeInput"),0<c.length&&(h=new Wg("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=E))}x0(p,e)})}function ea(t,e,n){return{instance:t,listener:e,currentTarget:n}}function iu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ko(t,n),s!=null&&r.unshift(ea(t,s,i)),s=Ko(t,e),s!=null&&r.push(ea(t,s,i))),t=t.return}return r}function Oi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Ko(n,s),u!=null&&o.unshift(ea(n,u,l))):i||(u=Ko(n,s),u!=null&&o.push(ea(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var K1=/\r\n?/g,q1=/\u0000|\uFFFD/g;function iv(t){return(typeof t=="string"?t:""+t).replace(K1,`
`).replace(q1,"")}function fl(t,e,n){if(e=iv(e),iv(t)!==e&&n)throw Error(F(425))}function su(){}var Rh=null,Ph=null;function Ah(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Nh=typeof setTimeout=="function"?setTimeout:void 0,Y1=typeof clearTimeout=="function"?clearTimeout:void 0,sv=typeof Promise=="function"?Promise:void 0,J1=typeof queueMicrotask=="function"?queueMicrotask:typeof sv<"u"?function(t){return sv.resolve(null).then(t).catch(X1)}:Nh;function X1(t){setTimeout(function(){throw t})}function Sd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Jo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Jo(e)}function Ir(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ov(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ls=Math.random().toString(36).slice(2),fn="__reactFiber$"+Ls,ta="__reactProps$"+Ls,Dn="__reactContainer$"+Ls,bh="__reactEvents$"+Ls,Q1="__reactListeners$"+Ls,Z1="__reactHandles$"+Ls;function Jr(t){var e=t[fn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Dn]||n[fn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ov(t);t!==null;){if(n=t[fn])return n;t=ov(t)}return e}t=n,n=t.parentNode}return null}function Ca(t){return t=t[fn]||t[Dn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Gi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Xu(t){return t[ta]||null}var Oh=[],Ki=-1;function Dr(t){return{current:t}}function ge(t){0>Ki||(t.current=Oh[Ki],Oh[Ki]=null,Ki--)}function fe(t,e){Ki++,Oh[Ki]=t.current,t.current=e}var Nr={},ot=Dr(Nr),vt=Dr(!1),li=Nr;function gs(t,e){var n=t.type.contextTypes;if(!n)return Nr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function yt(t){return t=t.childContextTypes,t!=null}function ou(){ge(vt),ge(ot)}function av(t,e,n){if(ot.current!==Nr)throw Error(F(168));fe(ot,e),fe(vt,n)}function D0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,jk(t)||"Unknown",i));return Ee({},n,r)}function au(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Nr,li=ot.current,fe(ot,t),fe(vt,vt.current),!0}function lv(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=D0(t,e,li),r.__reactInternalMemoizedMergedChildContext=t,ge(vt),ge(ot),fe(ot,t)):ge(vt),fe(vt,n)}var kn=null,Qu=!1,kd=!1;function M0(t){kn===null?kn=[t]:kn.push(t)}function eC(t){Qu=!0,M0(t)}function Mr(){if(!kd&&kn!==null){kd=!0;var t=0,e=ce;try{var n=kn;for(ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}kn=null,Qu=!1}catch(i){throw kn!==null&&(kn=kn.slice(t+1)),a0(Vf,Mr),i}finally{ce=e,kd=!1}}return null}var qi=[],Yi=0,lu=null,uu=0,Mt=[],jt=0,ui=null,Cn=1,Rn="";function Gr(t,e){qi[Yi++]=uu,qi[Yi++]=lu,lu=t,uu=e}function j0(t,e,n){Mt[jt++]=Cn,Mt[jt++]=Rn,Mt[jt++]=ui,ui=t;var r=Cn;t=Rn;var i=32-en(r)-1;r&=~(1<<i),n+=1;var s=32-en(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Cn=1<<32-en(e)+i|n<<i|r,Rn=s+t}else Cn=1<<s|n<<i|r,Rn=t}function Jf(t){t.return!==null&&(Gr(t,1),j0(t,1,0))}function Xf(t){for(;t===lu;)lu=qi[--Yi],qi[Yi]=null,uu=qi[--Yi],qi[Yi]=null;for(;t===ui;)ui=Mt[--jt],Mt[jt]=null,Rn=Mt[--jt],Mt[jt]=null,Cn=Mt[--jt],Mt[jt]=null}var Pt=null,kt=null,ye=!1,Zt=null;function U0(t,e){var n=Ut(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function uv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pt=t,kt=Ir(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pt=t,kt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ui!==null?{id:Cn,overflow:Rn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ut(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pt=t,kt=null,!0):!1;default:return!1}}function xh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Lh(t){if(ye){var e=kt;if(e){var n=e;if(!uv(t,e)){if(xh(t))throw Error(F(418));e=Ir(n.nextSibling);var r=Pt;e&&uv(t,e)?U0(r,n):(t.flags=t.flags&-4097|2,ye=!1,Pt=t)}}else{if(xh(t))throw Error(F(418));t.flags=t.flags&-4097|2,ye=!1,Pt=t}}}function cv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pt=t}function pl(t){if(t!==Pt)return!1;if(!ye)return cv(t),ye=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ah(t.type,t.memoizedProps)),e&&(e=kt)){if(xh(t))throw $0(),Error(F(418));for(;e;)U0(t,e),e=Ir(e.nextSibling)}if(cv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){kt=Ir(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}kt=null}}else kt=Pt?Ir(t.stateNode.nextSibling):null;return!0}function $0(){for(var t=kt;t;)t=Ir(t.nextSibling)}function vs(){kt=Pt=null,ye=!1}function Qf(t){Zt===null?Zt=[t]:Zt.push(t)}var tC=Hn.ReactCurrentBatchConfig;function uo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function ml(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function dv(t){var e=t._init;return e(t._payload)}function F0(t){function e(R,_){if(t){var k=R.deletions;k===null?(R.deletions=[_],R.flags|=16):k.push(_)}}function n(R,_){if(!t)return null;for(;_!==null;)e(R,_),_=_.sibling;return null}function r(R,_){for(R=new Map;_!==null;)_.key!==null?R.set(_.key,_):R.set(_.index,_),_=_.sibling;return R}function i(R,_){return R=Cr(R,_),R.index=0,R.sibling=null,R}function s(R,_,k){return R.index=k,t?(k=R.alternate,k!==null?(k=k.index,k<_?(R.flags|=2,_):k):(R.flags|=2,_)):(R.flags|=1048576,_)}function o(R){return t&&R.alternate===null&&(R.flags|=2),R}function l(R,_,k,x){return _===null||_.tag!==6?(_=Od(k,R.mode,x),_.return=R,_):(_=i(_,k),_.return=R,_)}function u(R,_,k,x){var D=k.type;return D===Bi?h(R,_,k.props.children,x,k.key):_!==null&&(_.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===ir&&dv(D)===_.type)?(x=i(_,k.props),x.ref=uo(R,_,k),x.return=R,x):(x=Fl(k.type,k.key,k.props,null,R.mode,x),x.ref=uo(R,_,k),x.return=R,x)}function c(R,_,k,x){return _===null||_.tag!==4||_.stateNode.containerInfo!==k.containerInfo||_.stateNode.implementation!==k.implementation?(_=xd(k,R.mode,x),_.return=R,_):(_=i(_,k.children||[]),_.return=R,_)}function h(R,_,k,x,D){return _===null||_.tag!==7?(_=ni(k,R.mode,x,D),_.return=R,_):(_=i(_,k),_.return=R,_)}function p(R,_,k){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Od(""+_,R.mode,k),_.return=R,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case il:return k=Fl(_.type,_.key,_.props,null,R.mode,k),k.ref=uo(R,null,_),k.return=R,k;case Vi:return _=xd(_,R.mode,k),_.return=R,_;case ir:var x=_._init;return p(R,x(_._payload),k)}if(wo(_)||io(_))return _=ni(_,R.mode,k,null),_.return=R,_;ml(R,_)}return null}function y(R,_,k,x){var D=_!==null?_.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return D!==null?null:l(R,_,""+k,x);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case il:return k.key===D?u(R,_,k,x):null;case Vi:return k.key===D?c(R,_,k,x):null;case ir:return D=k._init,y(R,_,D(k._payload),x)}if(wo(k)||io(k))return D!==null?null:h(R,_,k,x,null);ml(R,k)}return null}function A(R,_,k,x,D){if(typeof x=="string"&&x!==""||typeof x=="number")return R=R.get(k)||null,l(_,R,""+x,D);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case il:return R=R.get(x.key===null?k:x.key)||null,u(_,R,x,D);case Vi:return R=R.get(x.key===null?k:x.key)||null,c(_,R,x,D);case ir:var M=x._init;return A(R,_,k,M(x._payload),D)}if(wo(x)||io(x))return R=R.get(k)||null,h(_,R,x,D,null);ml(_,x)}return null}function I(R,_,k,x){for(var D=null,M=null,E=_,g=_=0,T=null;E!==null&&g<k.length;g++){E.index>g?(T=E,E=null):T=E.sibling;var C=y(R,E,k[g],x);if(C===null){E===null&&(E=T);break}t&&E&&C.alternate===null&&e(R,E),_=s(C,_,g),M===null?D=C:M.sibling=C,M=C,E=T}if(g===k.length)return n(R,E),ye&&Gr(R,g),D;if(E===null){for(;g<k.length;g++)E=p(R,k[g],x),E!==null&&(_=s(E,_,g),M===null?D=E:M.sibling=E,M=E);return ye&&Gr(R,g),D}for(E=r(R,E);g<k.length;g++)T=A(E,R,g,k[g],x),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?g:T.key),_=s(T,_,g),M===null?D=T:M.sibling=T,M=T);return t&&E.forEach(function(P){return e(R,P)}),ye&&Gr(R,g),D}function O(R,_,k,x){var D=io(k);if(typeof D!="function")throw Error(F(150));if(k=D.call(k),k==null)throw Error(F(151));for(var M=D=null,E=_,g=_=0,T=null,C=k.next();E!==null&&!C.done;g++,C=k.next()){E.index>g?(T=E,E=null):T=E.sibling;var P=y(R,E,C.value,x);if(P===null){E===null&&(E=T);break}t&&E&&P.alternate===null&&e(R,E),_=s(P,_,g),M===null?D=P:M.sibling=P,M=P,E=T}if(C.done)return n(R,E),ye&&Gr(R,g),D;if(E===null){for(;!C.done;g++,C=k.next())C=p(R,C.value,x),C!==null&&(_=s(C,_,g),M===null?D=C:M.sibling=C,M=C);return ye&&Gr(R,g),D}for(E=r(R,E);!C.done;g++,C=k.next())C=A(E,R,g,C.value,x),C!==null&&(t&&C.alternate!==null&&E.delete(C.key===null?g:C.key),_=s(C,_,g),M===null?D=C:M.sibling=C,M=C);return t&&E.forEach(function(b){return e(R,b)}),ye&&Gr(R,g),D}function N(R,_,k,x){if(typeof k=="object"&&k!==null&&k.type===Bi&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case il:e:{for(var D=k.key,M=_;M!==null;){if(M.key===D){if(D=k.type,D===Bi){if(M.tag===7){n(R,M.sibling),_=i(M,k.props.children),_.return=R,R=_;break e}}else if(M.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===ir&&dv(D)===M.type){n(R,M.sibling),_=i(M,k.props),_.ref=uo(R,M,k),_.return=R,R=_;break e}n(R,M);break}else e(R,M);M=M.sibling}k.type===Bi?(_=ni(k.props.children,R.mode,x,k.key),_.return=R,R=_):(x=Fl(k.type,k.key,k.props,null,R.mode,x),x.ref=uo(R,_,k),x.return=R,R=x)}return o(R);case Vi:e:{for(M=k.key;_!==null;){if(_.key===M)if(_.tag===4&&_.stateNode.containerInfo===k.containerInfo&&_.stateNode.implementation===k.implementation){n(R,_.sibling),_=i(_,k.children||[]),_.return=R,R=_;break e}else{n(R,_);break}else e(R,_);_=_.sibling}_=xd(k,R.mode,x),_.return=R,R=_}return o(R);case ir:return M=k._init,N(R,_,M(k._payload),x)}if(wo(k))return I(R,_,k,x);if(io(k))return O(R,_,k,x);ml(R,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,_!==null&&_.tag===6?(n(R,_.sibling),_=i(_,k),_.return=R,R=_):(n(R,_),_=Od(k,R.mode,x),_.return=R,R=_),o(R)):n(R,_)}return N}var ys=F0(!0),V0=F0(!1),cu=Dr(null),du=null,Ji=null,Zf=null;function ep(){Zf=Ji=du=null}function tp(t){var e=cu.current;ge(cu),t._currentValue=e}function Dh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function as(t,e){du=t,Zf=Ji=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gt=!0),t.firstContext=null)}function Bt(t){var e=t._currentValue;if(Zf!==t)if(t={context:t,memoizedValue:e,next:null},Ji===null){if(du===null)throw Error(F(308));Ji=t,du.dependencies={lanes:0,firstContext:t}}else Ji=Ji.next=t;return e}var Xr=null;function np(t){Xr===null?Xr=[t]:Xr.push(t)}function B0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,np(e)):(n.next=i.next,i.next=n),e.interleaved=n,Mn(t,r)}function Mn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var sr=!1;function rp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function z0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Tr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Mn(t,n)}return i=r.interleaved,i===null?(e.next=e,np(r)):(e.next=i.next,i.next=e),r.interleaved=e,Mn(t,n)}function Ll(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Bf(t,n)}}function hv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function hu(t,e,n,r){var i=t.updateQueue;sr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=c:l.next=c,h.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,h=c=u=null,l=s;do{var y=l.lane,A=l.eventTime;if((r&y)===y){h!==null&&(h=h.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var I=t,O=l;switch(y=e,A=n,O.tag){case 1:if(I=O.payload,typeof I=="function"){p=I.call(A,p,y);break e}p=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=O.payload,y=typeof I=="function"?I.call(A,p,y):I,y==null)break e;p=Ee({},p,y);break e;case 2:sr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else A={eventTime:A,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(c=h=A,u=p):h=h.next=A,o|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(h===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);di|=o,t.lanes=o,t.memoizedState=p}}function fv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var Ra={},gn=Dr(Ra),na=Dr(Ra),ra=Dr(Ra);function Qr(t){if(t===Ra)throw Error(F(174));return t}function ip(t,e){switch(fe(ra,e),fe(na,t),fe(gn,Ra),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:mh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=mh(e,t)}ge(gn),fe(gn,e)}function ws(){ge(gn),ge(na),ge(ra)}function H0(t){Qr(ra.current);var e=Qr(gn.current),n=mh(e,t.type);e!==n&&(fe(na,t),fe(gn,n))}function sp(t){na.current===t&&(ge(gn),ge(na))}var we=Dr(0);function fu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Cd=[];function op(){for(var t=0;t<Cd.length;t++)Cd[t]._workInProgressVersionPrimary=null;Cd.length=0}var Dl=Hn.ReactCurrentDispatcher,Rd=Hn.ReactCurrentBatchConfig,ci=0,_e=null,Me=null,Fe=null,pu=!1,xo=!1,ia=0,nC=0;function Ze(){throw Error(F(321))}function ap(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!nn(t[n],e[n]))return!1;return!0}function lp(t,e,n,r,i,s){if(ci=s,_e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Dl.current=t===null||t.memoizedState===null?oC:aC,t=n(r,i),xo){s=0;do{if(xo=!1,ia=0,25<=s)throw Error(F(301));s+=1,Fe=Me=null,e.updateQueue=null,Dl.current=lC,t=n(r,i)}while(xo)}if(Dl.current=mu,e=Me!==null&&Me.next!==null,ci=0,Fe=Me=_e=null,pu=!1,e)throw Error(F(300));return t}function up(){var t=ia!==0;return ia=0,t}function dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?_e.memoizedState=Fe=t:Fe=Fe.next=t,Fe}function zt(){if(Me===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=Me.next;var e=Fe===null?_e.memoizedState:Fe.next;if(e!==null)Fe=e,Me=t;else{if(t===null)throw Error(F(310));Me=t,t={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Fe===null?_e.memoizedState=Fe=t:Fe=Fe.next=t}return Fe}function sa(t,e){return typeof e=="function"?e(t):e}function Pd(t){var e=zt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var h=c.lane;if((ci&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,_e.lanes|=h,di|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,nn(r,e.memoizedState)||(gt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,_e.lanes|=s,di|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ad(t){var e=zt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);nn(s,e.memoizedState)||(gt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function W0(){}function G0(t,e){var n=_e,r=zt(),i=e(),s=!nn(r.memoizedState,i);if(s&&(r.memoizedState=i,gt=!0),r=r.queue,cp(Y0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,oa(9,q0.bind(null,n,r,i,e),void 0,null),Be===null)throw Error(F(349));ci&30||K0(n,e,i)}return i}function K0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function q0(t,e,n,r){e.value=n,e.getSnapshot=r,J0(e)&&X0(t)}function Y0(t,e,n){return n(function(){J0(e)&&X0(t)})}function J0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!nn(t,n)}catch{return!0}}function X0(t){var e=Mn(t,1);e!==null&&tn(e,t,1,-1)}function pv(t){var e=dn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:t},e.queue=t,t=t.dispatch=sC.bind(null,_e,t),[e.memoizedState,t]}function oa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Q0(){return zt().memoizedState}function Ml(t,e,n,r){var i=dn();_e.flags|=t,i.memoizedState=oa(1|e,n,void 0,r===void 0?null:r)}function Zu(t,e,n,r){var i=zt();r=r===void 0?null:r;var s=void 0;if(Me!==null){var o=Me.memoizedState;if(s=o.destroy,r!==null&&ap(r,o.deps)){i.memoizedState=oa(e,n,s,r);return}}_e.flags|=t,i.memoizedState=oa(1|e,n,s,r)}function mv(t,e){return Ml(8390656,8,t,e)}function cp(t,e){return Zu(2048,8,t,e)}function Z0(t,e){return Zu(4,2,t,e)}function e_(t,e){return Zu(4,4,t,e)}function t_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function n_(t,e,n){return n=n!=null?n.concat([t]):null,Zu(4,4,t_.bind(null,e,t),n)}function dp(){}function r_(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ap(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function i_(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ap(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function s_(t,e,n){return ci&21?(nn(n,e)||(n=c0(),_e.lanes|=n,di|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gt=!0),t.memoizedState=n)}function rC(t,e){var n=ce;ce=n!==0&&4>n?n:4,t(!0);var r=Rd.transition;Rd.transition={};try{t(!1),e()}finally{ce=n,Rd.transition=r}}function o_(){return zt().memoizedState}function iC(t,e,n){var r=kr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},a_(t))l_(e,n);else if(n=B0(t,e,n,r),n!==null){var i=ct();tn(n,t,r,i),u_(n,e,r)}}function sC(t,e,n){var r=kr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(a_(t))l_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,nn(l,o)){var u=e.interleaved;u===null?(i.next=i,np(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=B0(t,e,i,r),n!==null&&(i=ct(),tn(n,t,r,i),u_(n,e,r))}}function a_(t){var e=t.alternate;return t===_e||e!==null&&e===_e}function l_(t,e){xo=pu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function u_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Bf(t,n)}}var mu={readContext:Bt,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},oC={readContext:Bt,useCallback:function(t,e){return dn().memoizedState=[t,e===void 0?null:e],t},useContext:Bt,useEffect:mv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ml(4194308,4,t_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ml(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ml(4,2,t,e)},useMemo:function(t,e){var n=dn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=dn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=iC.bind(null,_e,t),[r.memoizedState,t]},useRef:function(t){var e=dn();return t={current:t},e.memoizedState=t},useState:pv,useDebugValue:dp,useDeferredValue:function(t){return dn().memoizedState=t},useTransition:function(){var t=pv(!1),e=t[0];return t=rC.bind(null,t[1]),dn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=_e,i=dn();if(ye){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Be===null)throw Error(F(349));ci&30||K0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,mv(Y0.bind(null,r,s,t),[t]),r.flags|=2048,oa(9,q0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=dn(),e=Be.identifierPrefix;if(ye){var n=Rn,r=Cn;n=(r&~(1<<32-en(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ia++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=nC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},aC={readContext:Bt,useCallback:r_,useContext:Bt,useEffect:cp,useImperativeHandle:n_,useInsertionEffect:Z0,useLayoutEffect:e_,useMemo:i_,useReducer:Pd,useRef:Q0,useState:function(){return Pd(sa)},useDebugValue:dp,useDeferredValue:function(t){var e=zt();return s_(e,Me.memoizedState,t)},useTransition:function(){var t=Pd(sa)[0],e=zt().memoizedState;return[t,e]},useMutableSource:W0,useSyncExternalStore:G0,useId:o_,unstable_isNewReconciler:!1},lC={readContext:Bt,useCallback:r_,useContext:Bt,useEffect:cp,useImperativeHandle:n_,useInsertionEffect:Z0,useLayoutEffect:e_,useMemo:i_,useReducer:Ad,useRef:Q0,useState:function(){return Ad(sa)},useDebugValue:dp,useDeferredValue:function(t){var e=zt();return Me===null?e.memoizedState=t:s_(e,Me.memoizedState,t)},useTransition:function(){var t=Ad(sa)[0],e=zt().memoizedState;return[t,e]},useMutableSource:W0,useSyncExternalStore:G0,useId:o_,unstable_isNewReconciler:!1};function Xt(t,e){if(t&&t.defaultProps){e=Ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Mh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ec={isMounted:function(t){return(t=t._reactInternals)?Ti(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ct(),i=kr(t),s=bn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,i),e!==null&&(tn(e,t,i,r),Ll(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ct(),i=kr(t),s=bn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,i),e!==null&&(tn(e,t,i,r),Ll(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ct(),r=kr(t),i=bn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Tr(t,i,r),e!==null&&(tn(e,t,r,n),Ll(e,t,r))}};function gv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Qo(n,r)||!Qo(i,s):!0}function c_(t,e,n){var r=!1,i=Nr,s=e.contextType;return typeof s=="object"&&s!==null?s=Bt(s):(i=yt(e)?li:ot.current,r=e.contextTypes,s=(r=r!=null)?gs(t,i):Nr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ec,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function vv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ec.enqueueReplaceState(e,e.state,null)}function jh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},rp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Bt(s):(s=yt(e)?li:ot.current,i.context=gs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Mh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ec.enqueueReplaceState(i,i.state,null),hu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function _s(t,e){try{var n="",r=e;do n+=Mk(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Nd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Uh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var uC=typeof WeakMap=="function"?WeakMap:Map;function d_(t,e,n){n=bn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){vu||(vu=!0,qh=r),Uh(t,e)},n}function h_(t,e,n){n=bn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Uh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Uh(t,e),typeof r!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function yv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new uC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=TC.bind(null,t,e,n),e.then(t,t))}function wv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function _v(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bn(-1,1),e.tag=2,Tr(n,e,1))),n.lanes|=1),t)}var cC=Hn.ReactCurrentOwner,gt=!1;function ut(t,e,n,r){e.child=t===null?V0(e,null,n,r):ys(e,t.child,n,r)}function Ev(t,e,n,r,i){n=n.render;var s=e.ref;return as(e,i),r=lp(t,e,n,r,s,i),n=up(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jn(t,e,i)):(ye&&n&&Jf(e),e.flags|=1,ut(t,e,r,i),e.child)}function Iv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!wp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,f_(t,e,s,r,i)):(t=Fl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Qo,n(o,r)&&t.ref===e.ref)return jn(t,e,i)}return e.flags|=1,t=Cr(s,r),t.ref=e.ref,t.return=e,e.child=t}function f_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Qo(s,r)&&t.ref===e.ref)if(gt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(gt=!0);else return e.lanes=t.lanes,jn(t,e,i)}return $h(t,e,n,r,i)}function p_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(Qi,Tt),Tt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,fe(Qi,Tt),Tt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,fe(Qi,Tt),Tt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,fe(Qi,Tt),Tt|=r;return ut(t,e,i,n),e.child}function m_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function $h(t,e,n,r,i){var s=yt(n)?li:ot.current;return s=gs(e,s),as(e,i),n=lp(t,e,n,r,s,i),r=up(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jn(t,e,i)):(ye&&r&&Jf(e),e.flags|=1,ut(t,e,n,i),e.child)}function Tv(t,e,n,r,i){if(yt(n)){var s=!0;au(e)}else s=!1;if(as(e,i),e.stateNode===null)jl(t,e),c_(e,n,r),jh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Bt(c):(c=yt(n)?li:ot.current,c=gs(e,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&vv(e,o,r,c),sr=!1;var y=e.memoizedState;o.state=y,hu(e,r,o,i),u=e.memoizedState,l!==r||y!==u||vt.current||sr?(typeof h=="function"&&(Mh(e,n,h,r),u=e.memoizedState),(l=sr||gv(e,n,l,r,y,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,z0(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Xt(e.type,l),o.props=c,p=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Bt(u):(u=yt(n)?li:ot.current,u=gs(e,u));var A=n.getDerivedStateFromProps;(h=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||y!==u)&&vv(e,o,r,u),sr=!1,y=e.memoizedState,o.state=y,hu(e,r,o,i);var I=e.memoizedState;l!==p||y!==I||vt.current||sr?(typeof A=="function"&&(Mh(e,n,A,r),I=e.memoizedState),(c=sr||gv(e,n,c,r,y,I,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,I,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,I,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=I),o.props=r,o.state=I,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return Fh(t,e,n,r,s,i)}function Fh(t,e,n,r,i,s){m_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&lv(e,n,!1),jn(t,e,s);r=e.stateNode,cC.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ys(e,t.child,null,s),e.child=ys(e,null,l,s)):ut(t,e,l,s),e.memoizedState=r.state,i&&lv(e,n,!0),e.child}function g_(t){var e=t.stateNode;e.pendingContext?av(t,e.pendingContext,e.pendingContext!==e.context):e.context&&av(t,e.context,!1),ip(t,e.containerInfo)}function Sv(t,e,n,r,i){return vs(),Qf(i),e.flags|=256,ut(t,e,n,r),e.child}var Vh={dehydrated:null,treeContext:null,retryLane:0};function Bh(t){return{baseLanes:t,cachePool:null,transitions:null}}function v_(t,e,n){var r=e.pendingProps,i=we.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),fe(we,i&1),t===null)return Lh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=rc(o,r,0,null),t=ni(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Bh(n),e.memoizedState=Vh,t):hp(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return dC(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Cr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Cr(l,s):(s=ni(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Bh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Vh,r}return s=t.child,t=s.sibling,r=Cr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function hp(t,e){return e=rc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function gl(t,e,n,r){return r!==null&&Qf(r),ys(e,t.child,null,n),t=hp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function dC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Nd(Error(F(422))),gl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=rc({mode:"visible",children:r.children},i,0,null),s=ni(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ys(e,t.child,null,o),e.child.memoizedState=Bh(o),e.memoizedState=Vh,s);if(!(e.mode&1))return gl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=Nd(s,r,void 0),gl(t,e,o,r)}if(l=(o&t.childLanes)!==0,gt||l){if(r=Be,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Mn(t,i),tn(r,t,i,-1))}return yp(),r=Nd(Error(F(421))),gl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=SC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,kt=Ir(i.nextSibling),Pt=e,ye=!0,Zt=null,t!==null&&(Mt[jt++]=Cn,Mt[jt++]=Rn,Mt[jt++]=ui,Cn=t.id,Rn=t.overflow,ui=e),e=hp(e,r.children),e.flags|=4096,e)}function kv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Dh(t.return,e,n)}function bd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function y_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ut(t,e,r.children,n),r=we.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kv(t,n,e);else if(t.tag===19)kv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(fe(we,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&fu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),bd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&fu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}bd(e,!0,n,null,s);break;case"together":bd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function jl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function jn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),di|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=Cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function hC(t,e,n){switch(e.tag){case 3:g_(e),vs();break;case 5:H0(e);break;case 1:yt(e.type)&&au(e);break;case 4:ip(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;fe(cu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(fe(we,we.current&1),e.flags|=128,null):n&e.child.childLanes?v_(t,e,n):(fe(we,we.current&1),t=jn(t,e,n),t!==null?t.sibling:null);fe(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return y_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),fe(we,we.current),r)break;return null;case 22:case 23:return e.lanes=0,p_(t,e,n)}return jn(t,e,n)}var w_,zh,__,E_;w_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zh=function(){};__=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Qr(gn.current);var s=null;switch(n){case"input":i=dh(t,i),r=dh(t,r),s=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),s=[];break;case"textarea":i=ph(t,i),r=ph(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=su)}gh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Wo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Wo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&me("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};E_=function(t,e,n,r){n!==r&&(e.flags|=4)};function co(t,e){if(!ye)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function fC(t,e,n){var r=e.pendingProps;switch(Xf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(e),null;case 1:return yt(e.type)&&ou(),et(e),null;case 3:return r=e.stateNode,ws(),ge(vt),ge(ot),op(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(pl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Zt!==null&&(Xh(Zt),Zt=null))),zh(t,e),et(e),null;case 5:sp(e);var i=Qr(ra.current);if(n=e.type,t!==null&&e.stateNode!=null)__(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return et(e),null}if(t=Qr(gn.current),pl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[fn]=e,r[ta]=s,t=(e.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<Eo.length;i++)me(Eo[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":Lg(r,s),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},me("invalid",r);break;case"textarea":Mg(r,s),me("invalid",r)}gh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&fl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&fl(r.textContent,l,t),i=["children",""+l]):Wo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&me("scroll",r)}switch(n){case"input":sl(r),Dg(r,s,!0);break;case"textarea":sl(r),jg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=su)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Yw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[fn]=e,t[ta]=r,w_(t,e,!1,!1),e.stateNode=t;e:{switch(o=vh(n,r),n){case"dialog":me("cancel",t),me("close",t),i=r;break;case"iframe":case"object":case"embed":me("load",t),i=r;break;case"video":case"audio":for(i=0;i<Eo.length;i++)me(Eo[i],t);i=r;break;case"source":me("error",t),i=r;break;case"img":case"image":case"link":me("error",t),me("load",t),i=r;break;case"details":me("toggle",t),i=r;break;case"input":Lg(t,r),i=dh(t,r),me("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),me("invalid",t);break;case"textarea":Mg(t,r),i=ph(t,r),me("invalid",t);break;default:i=r}gh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Qw(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Jw(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Go(t,u):typeof u=="number"&&Go(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Wo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&me("scroll",t):u!=null&&Mf(t,s,u,o))}switch(n){case"input":sl(t),Dg(t,r,!1);break;case"textarea":sl(t),jg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ar(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?rs(t,!!r.multiple,s,!1):r.defaultValue!=null&&rs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=su)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return et(e),null;case 6:if(t&&e.stateNode!=null)E_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Qr(ra.current),Qr(gn.current),pl(e)){if(r=e.stateNode,n=e.memoizedProps,r[fn]=e,(s=r.nodeValue!==n)&&(t=Pt,t!==null))switch(t.tag){case 3:fl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[fn]=e,e.stateNode=r}return et(e),null;case 13:if(ge(we),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ye&&kt!==null&&e.mode&1&&!(e.flags&128))$0(),vs(),e.flags|=98560,s=!1;else if(s=pl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[fn]=e}else vs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;et(e),s=!1}else Zt!==null&&(Xh(Zt),Zt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||we.current&1?je===0&&(je=3):yp())),e.updateQueue!==null&&(e.flags|=4),et(e),null);case 4:return ws(),zh(t,e),t===null&&Zo(e.stateNode.containerInfo),et(e),null;case 10:return tp(e.type._context),et(e),null;case 17:return yt(e.type)&&ou(),et(e),null;case 19:if(ge(we),s=e.memoizedState,s===null)return et(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)co(s,!1);else{if(je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=fu(t),o!==null){for(e.flags|=128,co(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return fe(we,we.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ne()>Es&&(e.flags|=128,r=!0,co(s,!1),e.lanes=4194304)}else{if(!r)if(t=fu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),co(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ye)return et(e),null}else 2*Ne()-s.renderingStartTime>Es&&n!==1073741824&&(e.flags|=128,r=!0,co(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ne(),e.sibling=null,n=we.current,fe(we,r?n&1|2:n&1),e):(et(e),null);case 22:case 23:return vp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Tt&1073741824&&(et(e),e.subtreeFlags&6&&(e.flags|=8192)):et(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function pC(t,e){switch(Xf(e),e.tag){case 1:return yt(e.type)&&ou(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ws(),ge(vt),ge(ot),op(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return sp(e),null;case 13:if(ge(we),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));vs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(we),null;case 4:return ws(),null;case 10:return tp(e.type._context),null;case 22:case 23:return vp(),null;case 24:return null;default:return null}}var vl=!1,nt=!1,mC=typeof WeakSet=="function"?WeakSet:Set,G=null;function Xi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(t,e,r)}else n.current=null}function Hh(t,e,n){try{n()}catch(r){Te(t,e,r)}}var Cv=!1;function gC(t,e){if(Rh=nu,t=C0(),Yf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,h=0,p=t,y=null;t:for(;;){for(var A;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(A=p.firstChild)!==null;)y=p,p=A;for(;;){if(p===t)break t;if(y===n&&++c===i&&(l=o),y===s&&++h===r&&(u=o),(A=p.nextSibling)!==null)break;p=y,y=p.parentNode}p=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ph={focusedElem:t,selectionRange:n},nu=!1,G=e;G!==null;)if(e=G,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,G=t;else for(;G!==null;){e=G;try{var I=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var O=I.memoizedProps,N=I.memoizedState,R=e.stateNode,_=R.getSnapshotBeforeUpdate(e.elementType===e.type?O:Xt(e.type,O),N);R.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var k=e.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(x){Te(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,G=t;break}G=e.return}return I=Cv,Cv=!1,I}function Lo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Hh(e,n,s)}i=i.next}while(i!==r)}}function tc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Wh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function I_(t){var e=t.alternate;e!==null&&(t.alternate=null,I_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[fn],delete e[ta],delete e[bh],delete e[Q1],delete e[Z1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function T_(t){return t.tag===5||t.tag===3||t.tag===4}function Rv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||T_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=su));else if(r!==4&&(t=t.child,t!==null))for(Gh(t,e,n),t=t.sibling;t!==null;)Gh(t,e,n),t=t.sibling}function Kh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Kh(t,e,n),t=t.sibling;t!==null;)Kh(t,e,n),t=t.sibling}var Ge=null,Qt=!1;function tr(t,e,n){for(n=n.child;n!==null;)S_(t,e,n),n=n.sibling}function S_(t,e,n){if(mn&&typeof mn.onCommitFiberUnmount=="function")try{mn.onCommitFiberUnmount(Ku,n)}catch{}switch(n.tag){case 5:nt||Xi(n,e);case 6:var r=Ge,i=Qt;Ge=null,tr(t,e,n),Ge=r,Qt=i,Ge!==null&&(Qt?(t=Ge,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&(Qt?(t=Ge,n=n.stateNode,t.nodeType===8?Sd(t.parentNode,n):t.nodeType===1&&Sd(t,n),Jo(t)):Sd(Ge,n.stateNode));break;case 4:r=Ge,i=Qt,Ge=n.stateNode.containerInfo,Qt=!0,tr(t,e,n),Ge=r,Qt=i;break;case 0:case 11:case 14:case 15:if(!nt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Hh(n,e,o),i=i.next}while(i!==r)}tr(t,e,n);break;case 1:if(!nt&&(Xi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Te(n,e,l)}tr(t,e,n);break;case 21:tr(t,e,n);break;case 22:n.mode&1?(nt=(r=nt)||n.memoizedState!==null,tr(t,e,n),nt=r):tr(t,e,n);break;default:tr(t,e,n)}}function Pv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new mC),e.forEach(function(r){var i=kC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Jt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ge=l.stateNode,Qt=!1;break e;case 3:Ge=l.stateNode.containerInfo,Qt=!0;break e;case 4:Ge=l.stateNode.containerInfo,Qt=!0;break e}l=l.return}if(Ge===null)throw Error(F(160));S_(s,o,i),Ge=null,Qt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Te(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)k_(e,t),e=e.sibling}function k_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jt(e,t),cn(t),r&4){try{Lo(3,t,t.return),tc(3,t)}catch(O){Te(t,t.return,O)}try{Lo(5,t,t.return)}catch(O){Te(t,t.return,O)}}break;case 1:Jt(e,t),cn(t),r&512&&n!==null&&Xi(n,n.return);break;case 5:if(Jt(e,t),cn(t),r&512&&n!==null&&Xi(n,n.return),t.flags&32){var i=t.stateNode;try{Go(i,"")}catch(O){Te(t,t.return,O)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Kw(i,s),vh(l,o);var c=vh(l,s);for(o=0;o<u.length;o+=2){var h=u[o],p=u[o+1];h==="style"?Qw(i,p):h==="dangerouslySetInnerHTML"?Jw(i,p):h==="children"?Go(i,p):Mf(i,h,p,c)}switch(l){case"input":hh(i,s);break;case"textarea":qw(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var A=s.value;A!=null?rs(i,!!s.multiple,A,!1):y!==!!s.multiple&&(s.defaultValue!=null?rs(i,!!s.multiple,s.defaultValue,!0):rs(i,!!s.multiple,s.multiple?[]:"",!1))}i[ta]=s}catch(O){Te(t,t.return,O)}}break;case 6:if(Jt(e,t),cn(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(O){Te(t,t.return,O)}}break;case 3:if(Jt(e,t),cn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Jo(e.containerInfo)}catch(O){Te(t,t.return,O)}break;case 4:Jt(e,t),cn(t);break;case 13:Jt(e,t),cn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(mp=Ne())),r&4&&Pv(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(nt=(c=nt)||h,Jt(e,t),nt=c):Jt(e,t),cn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(G=t,h=t.child;h!==null;){for(p=G=h;G!==null;){switch(y=G,A=y.child,y.tag){case 0:case 11:case 14:case 15:Lo(4,y,y.return);break;case 1:Xi(y,y.return);var I=y.stateNode;if(typeof I.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,I.props=e.memoizedProps,I.state=e.memoizedState,I.componentWillUnmount()}catch(O){Te(r,n,O)}}break;case 5:Xi(y,y.return);break;case 22:if(y.memoizedState!==null){Nv(p);continue}}A!==null?(A.return=y,G=A):Nv(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Xw("display",o))}catch(O){Te(t,t.return,O)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(O){Te(t,t.return,O)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Jt(e,t),cn(t),r&4&&Pv(t);break;case 21:break;default:Jt(e,t),cn(t)}}function cn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(T_(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Go(i,""),r.flags&=-33);var s=Rv(t);Kh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Rv(t);Gh(t,l,o);break;default:throw Error(F(161))}}catch(u){Te(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function vC(t,e,n){G=t,C_(t)}function C_(t,e,n){for(var r=(t.mode&1)!==0;G!==null;){var i=G,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||vl;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||nt;l=vl;var c=nt;if(vl=o,(nt=u)&&!c)for(G=i;G!==null;)o=G,u=o.child,o.tag===22&&o.memoizedState!==null?bv(i):u!==null?(u.return=o,G=u):bv(i);for(;s!==null;)G=s,C_(s),s=s.sibling;G=i,vl=l,nt=c}Av(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,G=s):Av(t)}}function Av(t){for(;G!==null;){var e=G;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nt||tc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!nt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Xt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&fv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}fv(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Jo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}nt||e.flags&512&&Wh(e)}catch(y){Te(e,e.return,y)}}if(e===t){G=null;break}if(n=e.sibling,n!==null){n.return=e.return,G=n;break}G=e.return}}function Nv(t){for(;G!==null;){var e=G;if(e===t){G=null;break}var n=e.sibling;if(n!==null){n.return=e.return,G=n;break}G=e.return}}function bv(t){for(;G!==null;){var e=G;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{tc(4,e)}catch(u){Te(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Te(e,i,u)}}var s=e.return;try{Wh(e)}catch(u){Te(e,s,u)}break;case 5:var o=e.return;try{Wh(e)}catch(u){Te(e,o,u)}}}catch(u){Te(e,e.return,u)}if(e===t){G=null;break}var l=e.sibling;if(l!==null){l.return=e.return,G=l;break}G=e.return}}var yC=Math.ceil,gu=Hn.ReactCurrentDispatcher,fp=Hn.ReactCurrentOwner,$t=Hn.ReactCurrentBatchConfig,se=0,Be=null,Oe=null,Ke=0,Tt=0,Qi=Dr(0),je=0,aa=null,di=0,nc=0,pp=0,Do=null,mt=null,mp=0,Es=1/0,Sn=null,vu=!1,qh=null,Sr=null,yl=!1,mr=null,yu=0,Mo=0,Yh=null,Ul=-1,$l=0;function ct(){return se&6?Ne():Ul!==-1?Ul:Ul=Ne()}function kr(t){return t.mode&1?se&2&&Ke!==0?Ke&-Ke:tC.transition!==null?($l===0&&($l=c0()),$l):(t=ce,t!==0||(t=window.event,t=t===void 0?16:v0(t.type)),t):1}function tn(t,e,n,r){if(50<Mo)throw Mo=0,Yh=null,Error(F(185));Sa(t,n,r),(!(se&2)||t!==Be)&&(t===Be&&(!(se&2)&&(nc|=n),je===4&&lr(t,Ke)),wt(t,r),n===1&&se===0&&!(e.mode&1)&&(Es=Ne()+500,Qu&&Mr()))}function wt(t,e){var n=t.callbackNode;t1(t,e);var r=tu(t,t===Be?Ke:0);if(r===0)n!==null&&Fg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Fg(n),e===1)t.tag===0?eC(Ov.bind(null,t)):M0(Ov.bind(null,t)),J1(function(){!(se&6)&&Mr()}),n=null;else{switch(d0(r)){case 1:n=Vf;break;case 4:n=l0;break;case 16:n=eu;break;case 536870912:n=u0;break;default:n=eu}n=L_(n,R_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function R_(t,e){if(Ul=-1,$l=0,se&6)throw Error(F(327));var n=t.callbackNode;if(ls()&&t.callbackNode!==n)return null;var r=tu(t,t===Be?Ke:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=wu(t,r);else{e=r;var i=se;se|=2;var s=A_();(Be!==t||Ke!==e)&&(Sn=null,Es=Ne()+500,ti(t,e));do try{EC();break}catch(l){P_(t,l)}while(!0);ep(),gu.current=s,se=i,Oe!==null?e=0:(Be=null,Ke=0,e=je)}if(e!==0){if(e===2&&(i=Ih(t),i!==0&&(r=i,e=Jh(t,i))),e===1)throw n=aa,ti(t,0),lr(t,r),wt(t,Ne()),n;if(e===6)lr(t,r);else{if(i=t.current.alternate,!(r&30)&&!wC(i)&&(e=wu(t,r),e===2&&(s=Ih(t),s!==0&&(r=s,e=Jh(t,s))),e===1))throw n=aa,ti(t,0),lr(t,r),wt(t,Ne()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Kr(t,mt,Sn);break;case 3:if(lr(t,r),(r&130023424)===r&&(e=mp+500-Ne(),10<e)){if(tu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ct(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Nh(Kr.bind(null,t,mt,Sn),e);break}Kr(t,mt,Sn);break;case 4:if(lr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-en(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yC(r/1960))-r,10<r){t.timeoutHandle=Nh(Kr.bind(null,t,mt,Sn),r);break}Kr(t,mt,Sn);break;case 5:Kr(t,mt,Sn);break;default:throw Error(F(329))}}}return wt(t,Ne()),t.callbackNode===n?R_.bind(null,t):null}function Jh(t,e){var n=Do;return t.current.memoizedState.isDehydrated&&(ti(t,e).flags|=256),t=wu(t,e),t!==2&&(e=mt,mt=n,e!==null&&Xh(e)),t}function Xh(t){mt===null?mt=t:mt.push.apply(mt,t)}function wC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!nn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function lr(t,e){for(e&=~pp,e&=~nc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-en(e),r=1<<n;t[n]=-1,e&=~r}}function Ov(t){if(se&6)throw Error(F(327));ls();var e=tu(t,0);if(!(e&1))return wt(t,Ne()),null;var n=wu(t,e);if(t.tag!==0&&n===2){var r=Ih(t);r!==0&&(e=r,n=Jh(t,r))}if(n===1)throw n=aa,ti(t,0),lr(t,e),wt(t,Ne()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Kr(t,mt,Sn),wt(t,Ne()),null}function gp(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(Es=Ne()+500,Qu&&Mr())}}function hi(t){mr!==null&&mr.tag===0&&!(se&6)&&ls();var e=se;se|=1;var n=$t.transition,r=ce;try{if($t.transition=null,ce=1,t)return t()}finally{ce=r,$t.transition=n,se=e,!(se&6)&&Mr()}}function vp(){Tt=Qi.current,ge(Qi)}function ti(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Y1(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(Xf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ou();break;case 3:ws(),ge(vt),ge(ot),op();break;case 5:sp(r);break;case 4:ws();break;case 13:ge(we);break;case 19:ge(we);break;case 10:tp(r.type._context);break;case 22:case 23:vp()}n=n.return}if(Be=t,Oe=t=Cr(t.current,null),Ke=Tt=e,je=0,aa=null,pp=nc=di=0,mt=Do=null,Xr!==null){for(e=0;e<Xr.length;e++)if(n=Xr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Xr=null}return t}function P_(t,e){do{var n=Oe;try{if(ep(),Dl.current=mu,pu){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}pu=!1}if(ci=0,Fe=Me=_e=null,xo=!1,ia=0,fp.current=null,n===null||n.return===null){je=1,aa=e,Oe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ke,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=l,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var y=h.alternate;y?(h.updateQueue=y.updateQueue,h.memoizedState=y.memoizedState,h.lanes=y.lanes):(h.updateQueue=null,h.memoizedState=null)}var A=wv(o);if(A!==null){A.flags&=-257,_v(A,o,l,s,e),A.mode&1&&yv(s,c,e),e=A,u=c;var I=e.updateQueue;if(I===null){var O=new Set;O.add(u),e.updateQueue=O}else I.add(u);break e}else{if(!(e&1)){yv(s,c,e),yp();break e}u=Error(F(426))}}else if(ye&&l.mode&1){var N=wv(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),_v(N,o,l,s,e),Qf(_s(u,l));break e}}s=u=_s(u,l),je!==4&&(je=2),Do===null?Do=[s]:Do.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var R=d_(s,u,e);hv(s,R);break e;case 1:l=u;var _=s.type,k=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(Sr===null||!Sr.has(k)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=h_(s,l,e);hv(s,x);break e}}s=s.return}while(s!==null)}b_(n)}catch(D){e=D,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(!0)}function A_(){var t=gu.current;return gu.current=mu,t===null?mu:t}function yp(){(je===0||je===3||je===2)&&(je=4),Be===null||!(di&268435455)&&!(nc&268435455)||lr(Be,Ke)}function wu(t,e){var n=se;se|=2;var r=A_();(Be!==t||Ke!==e)&&(Sn=null,ti(t,e));do try{_C();break}catch(i){P_(t,i)}while(!0);if(ep(),se=n,gu.current=r,Oe!==null)throw Error(F(261));return Be=null,Ke=0,je}function _C(){for(;Oe!==null;)N_(Oe)}function EC(){for(;Oe!==null&&!Gk();)N_(Oe)}function N_(t){var e=x_(t.alternate,t,Tt);t.memoizedProps=t.pendingProps,e===null?b_(t):Oe=e,fp.current=null}function b_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=pC(n,e),n!==null){n.flags&=32767,Oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{je=6,Oe=null;return}}else if(n=fC(n,e,Tt),n!==null){Oe=n;return}if(e=e.sibling,e!==null){Oe=e;return}Oe=e=t}while(e!==null);je===0&&(je=5)}function Kr(t,e,n){var r=ce,i=$t.transition;try{$t.transition=null,ce=1,IC(t,e,n,r)}finally{$t.transition=i,ce=r}return null}function IC(t,e,n,r){do ls();while(mr!==null);if(se&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(n1(t,s),t===Be&&(Oe=Be=null,Ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yl||(yl=!0,L_(eu,function(){return ls(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=$t.transition,$t.transition=null;var o=ce;ce=1;var l=se;se|=4,fp.current=null,gC(t,n),k_(n,t),B1(Ph),nu=!!Rh,Ph=Rh=null,t.current=n,vC(n),Kk(),se=l,ce=o,$t.transition=s}else t.current=n;if(yl&&(yl=!1,mr=t,yu=i),s=t.pendingLanes,s===0&&(Sr=null),Jk(n.stateNode),wt(t,Ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(vu)throw vu=!1,t=qh,qh=null,t;return yu&1&&t.tag!==0&&ls(),s=t.pendingLanes,s&1?t===Yh?Mo++:(Mo=0,Yh=t):Mo=0,Mr(),null}function ls(){if(mr!==null){var t=d0(yu),e=$t.transition,n=ce;try{if($t.transition=null,ce=16>t?16:t,mr===null)var r=!1;else{if(t=mr,mr=null,yu=0,se&6)throw Error(F(331));var i=se;for(se|=4,G=t.current;G!==null;){var s=G,o=s.child;if(G.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(G=c;G!==null;){var h=G;switch(h.tag){case 0:case 11:case 15:Lo(8,h,s)}var p=h.child;if(p!==null)p.return=h,G=p;else for(;G!==null;){h=G;var y=h.sibling,A=h.return;if(I_(h),h===c){G=null;break}if(y!==null){y.return=A,G=y;break}G=A}}}var I=s.alternate;if(I!==null){var O=I.child;if(O!==null){I.child=null;do{var N=O.sibling;O.sibling=null,O=N}while(O!==null)}}G=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,G=o;else e:for(;G!==null;){if(s=G,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Lo(9,s,s.return)}var R=s.sibling;if(R!==null){R.return=s.return,G=R;break e}G=s.return}}var _=t.current;for(G=_;G!==null;){o=G;var k=o.child;if(o.subtreeFlags&2064&&k!==null)k.return=o,G=k;else e:for(o=_;G!==null;){if(l=G,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:tc(9,l)}}catch(D){Te(l,l.return,D)}if(l===o){G=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,G=x;break e}G=l.return}}if(se=i,Mr(),mn&&typeof mn.onPostCommitFiberRoot=="function")try{mn.onPostCommitFiberRoot(Ku,t)}catch{}r=!0}return r}finally{ce=n,$t.transition=e}}return!1}function xv(t,e,n){e=_s(n,e),e=d_(t,e,1),t=Tr(t,e,1),e=ct(),t!==null&&(Sa(t,1,e),wt(t,e))}function Te(t,e,n){if(t.tag===3)xv(t,t,n);else for(;e!==null;){if(e.tag===3){xv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sr===null||!Sr.has(r))){t=_s(n,t),t=h_(e,t,1),e=Tr(e,t,1),t=ct(),e!==null&&(Sa(e,1,t),wt(e,t));break}}e=e.return}}function TC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ct(),t.pingedLanes|=t.suspendedLanes&n,Be===t&&(Ke&n)===n&&(je===4||je===3&&(Ke&130023424)===Ke&&500>Ne()-mp?ti(t,0):pp|=n),wt(t,e)}function O_(t,e){e===0&&(t.mode&1?(e=ll,ll<<=1,!(ll&130023424)&&(ll=4194304)):e=1);var n=ct();t=Mn(t,e),t!==null&&(Sa(t,e,n),wt(t,n))}function SC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),O_(t,n)}function kC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),O_(t,n)}var x_;x_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vt.current)gt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gt=!1,hC(t,e,n);gt=!!(t.flags&131072)}else gt=!1,ye&&e.flags&1048576&&j0(e,uu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;jl(t,e),t=e.pendingProps;var i=gs(e,ot.current);as(e,n),i=lp(null,e,r,t,i,n);var s=up();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yt(r)?(s=!0,au(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,rp(e),i.updater=ec,e.stateNode=i,i._reactInternals=e,jh(e,r,t,n),e=Fh(null,e,r,!0,s,n)):(e.tag=0,ye&&s&&Jf(e),ut(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(jl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=RC(r),t=Xt(r,t),i){case 0:e=$h(null,e,r,t,n);break e;case 1:e=Tv(null,e,r,t,n);break e;case 11:e=Ev(null,e,r,t,n);break e;case 14:e=Iv(null,e,r,Xt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),$h(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),Tv(t,e,r,i,n);case 3:e:{if(g_(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,z0(t,e),hu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=_s(Error(F(423)),e),e=Sv(t,e,r,n,i);break e}else if(r!==i){i=_s(Error(F(424)),e),e=Sv(t,e,r,n,i);break e}else for(kt=Ir(e.stateNode.containerInfo.firstChild),Pt=e,ye=!0,Zt=null,n=V0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vs(),r===i){e=jn(t,e,n);break e}ut(t,e,r,n)}e=e.child}return e;case 5:return H0(e),t===null&&Lh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ah(r,i)?o=null:s!==null&&Ah(r,s)&&(e.flags|=32),m_(t,e),ut(t,e,o,n),e.child;case 6:return t===null&&Lh(e),null;case 13:return v_(t,e,n);case 4:return ip(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ys(e,null,r,n):ut(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),Ev(t,e,r,i,n);case 7:return ut(t,e,e.pendingProps,n),e.child;case 8:return ut(t,e,e.pendingProps.children,n),e.child;case 12:return ut(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,fe(cu,r._currentValue),r._currentValue=o,s!==null)if(nn(s.value,o)){if(s.children===i.children&&!vt.current){e=jn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=bn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Dh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Dh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ut(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,as(e,n),i=Bt(i),r=r(i),e.flags|=1,ut(t,e,r,n),e.child;case 14:return r=e.type,i=Xt(r,e.pendingProps),i=Xt(r.type,i),Iv(t,e,r,i,n);case 15:return f_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),jl(t,e),e.tag=1,yt(r)?(t=!0,au(e)):t=!1,as(e,n),c_(e,r,i),jh(e,r,i,n),Fh(null,e,r,!0,t,n);case 19:return y_(t,e,n);case 22:return p_(t,e,n)}throw Error(F(156,e.tag))};function L_(t,e){return a0(t,e)}function CC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(t,e,n,r){return new CC(t,e,n,r)}function wp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function RC(t){if(typeof t=="function")return wp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Uf)return 11;if(t===$f)return 14}return 2}function Cr(t,e){var n=t.alternate;return n===null?(n=Ut(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")wp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Bi:return ni(n.children,i,s,e);case jf:o=8,i|=8;break;case ah:return t=Ut(12,n,e,i|2),t.elementType=ah,t.lanes=s,t;case lh:return t=Ut(13,n,e,i),t.elementType=lh,t.lanes=s,t;case uh:return t=Ut(19,n,e,i),t.elementType=uh,t.lanes=s,t;case Hw:return rc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Bw:o=10;break e;case zw:o=9;break e;case Uf:o=11;break e;case $f:o=14;break e;case ir:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Ut(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ni(t,e,n,r){return t=Ut(7,t,r,e),t.lanes=n,t}function rc(t,e,n,r){return t=Ut(22,t,r,e),t.elementType=Hw,t.lanes=n,t.stateNode={isHidden:!1},t}function Od(t,e,n){return t=Ut(6,t,null,e),t.lanes=n,t}function xd(t,e,n){return e=Ut(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function PC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fd(0),this.expirationTimes=fd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _p(t,e,n,r,i,s,o,l,u){return t=new PC(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ut(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rp(s),t}function AC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function D_(t){if(!t)return Nr;t=t._reactInternals;e:{if(Ti(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(yt(n))return D0(t,n,e)}return e}function M_(t,e,n,r,i,s,o,l,u){return t=_p(n,r,!0,t,i,s,o,l,u),t.context=D_(null),n=t.current,r=ct(),i=kr(n),s=bn(r,i),s.callback=e??null,Tr(n,s,i),t.current.lanes=i,Sa(t,i,r),wt(t,r),t}function ic(t,e,n,r){var i=e.current,s=ct(),o=kr(i);return n=D_(n),e.context===null?e.context=n:e.pendingContext=n,e=bn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Tr(i,e,o),t!==null&&(tn(t,i,o,s),Ll(t,i,o)),o}function _u(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ep(t,e){Lv(t,e),(t=t.alternate)&&Lv(t,e)}function NC(){return null}var j_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ip(t){this._internalRoot=t}sc.prototype.render=Ip.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));ic(t,e,null,null)};sc.prototype.unmount=Ip.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;hi(function(){ic(null,t,null,null)}),e[Dn]=null}};function sc(t){this._internalRoot=t}sc.prototype.unstable_scheduleHydration=function(t){if(t){var e=p0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ar.length&&e!==0&&e<ar[n].priority;n++);ar.splice(n,0,t),n===0&&g0(t)}};function Tp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function oc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Dv(){}function bC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=_u(o);s.call(c)}}var o=M_(e,r,t,0,null,!1,!1,"",Dv);return t._reactRootContainer=o,t[Dn]=o.current,Zo(t.nodeType===8?t.parentNode:t),hi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=_u(u);l.call(c)}}var u=_p(t,0,!1,null,null,!1,!1,"",Dv);return t._reactRootContainer=u,t[Dn]=u.current,Zo(t.nodeType===8?t.parentNode:t),hi(function(){ic(e,u,n,r)}),u}function ac(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=_u(o);l.call(u)}}ic(e,o,t,i)}else o=bC(n,e,t,i,r);return _u(o)}h0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=_o(e.pendingLanes);n!==0&&(Bf(e,n|1),wt(e,Ne()),!(se&6)&&(Es=Ne()+500,Mr()))}break;case 13:hi(function(){var r=Mn(t,1);if(r!==null){var i=ct();tn(r,t,1,i)}}),Ep(t,1)}};zf=function(t){if(t.tag===13){var e=Mn(t,134217728);if(e!==null){var n=ct();tn(e,t,134217728,n)}Ep(t,134217728)}};f0=function(t){if(t.tag===13){var e=kr(t),n=Mn(t,e);if(n!==null){var r=ct();tn(n,t,e,r)}Ep(t,e)}};p0=function(){return ce};m0=function(t,e){var n=ce;try{return ce=t,e()}finally{ce=n}};wh=function(t,e,n){switch(e){case"input":if(hh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Xu(r);if(!i)throw Error(F(90));Gw(r),hh(r,i)}}}break;case"textarea":qw(t,n);break;case"select":e=n.value,e!=null&&rs(t,!!n.multiple,e,!1)}};t0=gp;n0=hi;var OC={usingClientEntryPoint:!1,Events:[Ca,Gi,Xu,Zw,e0,gp]},ho={findFiberByHostInstance:Jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xC={bundleType:ho.bundleType,version:ho.version,rendererPackageName:ho.rendererPackageName,rendererConfig:ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=s0(t),t===null?null:t.stateNode},findFiberByHostInstance:ho.findFiberByHostInstance||NC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wl.isDisabled&&wl.supportsFiber)try{Ku=wl.inject(xC),mn=wl}catch{}}Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OC;Ot.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tp(e))throw Error(F(200));return AC(t,e,null,n)};Ot.createRoot=function(t,e){if(!Tp(t))throw Error(F(299));var n=!1,r="",i=j_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=_p(t,1,!1,null,null,n,!1,r,i),t[Dn]=e.current,Zo(t.nodeType===8?t.parentNode:t),new Ip(e)};Ot.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=s0(e),t=t===null?null:t.stateNode,t};Ot.flushSync=function(t){return hi(t)};Ot.hydrate=function(t,e,n){if(!oc(e))throw Error(F(200));return ac(null,t,e,!0,n)};Ot.hydrateRoot=function(t,e,n){if(!Tp(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=j_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=M_(e,null,t,1,n??null,i,!1,s,o),t[Dn]=e.current,Zo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new sc(e)};Ot.render=function(t,e,n){if(!oc(e))throw Error(F(200));return ac(null,t,e,!1,n)};Ot.unmountComponentAtNode=function(t){if(!oc(t))throw Error(F(40));return t._reactRootContainer?(hi(function(){ac(null,null,t,!1,function(){t._reactRootContainer=null,t[Dn]=null})}),!0):!1};Ot.unstable_batchedUpdates=gp;Ot.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!oc(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return ac(t,e,n,!1,r)};Ot.version="18.3.1-next-f1338f8080-20240426";function U_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(U_)}catch(t){console.error(t)}}U_(),Uw.exports=Ot;var $_=Uw.exports;const Zi=Ia($_);var Mv=$_;sh.createRoot=Mv.createRoot,sh.hydrateRoot=Mv.hydrateRoot;/**
 * @remix-run/router v1.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function la(){return la=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},la.apply(this,arguments)}var gr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(gr||(gr={}));const jv="popstate";function LC(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Qh("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Eu(i)}return MC(e,n,null,t)}function xe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function F_(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function DC(){return Math.random().toString(36).substr(2,8)}function Uv(t,e){return{usr:t.state,key:t.key,idx:e}}function Qh(t,e,n,r){return n===void 0&&(n=null),la({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ds(e):e,{state:n,key:e&&e.key||r||DC()})}function Eu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ds(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function MC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=gr.Pop,u=null,c=h();c==null&&(c=0,o.replaceState(la({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function p(){l=gr.Pop;let N=h(),R=N==null?null:N-c;c=N,u&&u({action:l,location:O.location,delta:R})}function y(N,R){l=gr.Push;let _=Qh(O.location,N,R);c=h()+1;let k=Uv(_,c),x=O.createHref(_);try{o.pushState(k,"",x)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;i.location.assign(x)}s&&u&&u({action:l,location:O.location,delta:1})}function A(N,R){l=gr.Replace;let _=Qh(O.location,N,R);c=h();let k=Uv(_,c),x=O.createHref(_);o.replaceState(k,"",x),s&&u&&u({action:l,location:O.location,delta:0})}function I(N){let R=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof N=="string"?N:Eu(N);return _=_.replace(/ $/,"%20"),xe(R,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,R)}let O={get action(){return l},get location(){return t(i,o)},listen(N){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(jv,p),u=N,()=>{i.removeEventListener(jv,p),u=null}},createHref(N){return e(i,N)},createURL:I,encodeLocation(N){let R=I(N);return{pathname:R.pathname,search:R.search,hash:R.hash}},push:y,replace:A,go(N){return o.go(N)}};return O}var $v;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})($v||($v={}));function jC(t,e,n){return n===void 0&&(n="/"),UC(t,e,n,!1)}function UC(t,e,n,r){let i=typeof e=="string"?Ds(e):e,s=Sp(i.pathname||"/",n);if(s==null)return null;let o=V_(t);$C(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=JC(s);l=qC(o[u],c,r)}return l}function V_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(xe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Rr([r,u.relativePath]),h=n.concat(u);s.children&&s.children.length>0&&(xe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),V_(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:GC(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of B_(s.path))i(s,o,u)}),e}function B_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=B_(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function $C(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:KC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const FC=/^:[\w-]+$/,VC=3,BC=2,zC=1,HC=10,WC=-2,Fv=t=>t==="*";function GC(t,e){let n=t.split("/"),r=n.length;return n.some(Fv)&&(r+=WC),e&&(r+=BC),n.filter(i=>!Fv(i)).reduce((i,s)=>i+(FC.test(s)?VC:s===""?zC:HC),r)}function KC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function qC(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",p=Vv({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),y=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=Vv({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},h)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:Rr([s,p.pathname]),pathnameBase:eR(Rr([s,p.pathnameBase])),route:y}),p.pathnameBase!=="/"&&(s=Rr([s,p.pathnameBase]))}return o}function Vv(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=YC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,h,p)=>{let{paramName:y,isOptional:A}=h;if(y==="*"){let O=l[p]||"";o=s.slice(0,s.length-O.length).replace(/(.)\/+$/,"$1")}const I=l[p];return A&&!I?c[y]=void 0:c[y]=(I||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function YC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),F_(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function JC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return F_(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Sp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function XC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ds(t):t;return{pathname:n?n.startsWith("/")?n:QC(n,e):e,search:tR(r),hash:nR(i)}}function QC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ld(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ZC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function z_(t,e){let n=ZC(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function H_(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ds(t):(i=la({},t),xe(!i.pathname||!i.pathname.includes("?"),Ld("?","pathname","search",i)),xe(!i.pathname||!i.pathname.includes("#"),Ld("#","pathname","hash",i)),xe(!i.search||!i.search.includes("#"),Ld("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let y=o.split("/");for(;y[0]==="..";)y.shift(),p-=1;i.pathname=y.join("/")}l=p>=0?e[p]:"/"}let u=XC(i,l),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const Rr=t=>t.join("/").replace(/\/\/+/g,"/"),eR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),tR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,nR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function rR(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const W_=["post","put","patch","delete"];new Set(W_);const iR=["get",...W_];new Set(iR);/**
 * React Router v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ua(){return ua=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ua.apply(this,arguments)}const kp=w.createContext(null),sR=w.createContext(null),Si=w.createContext(null),lc=w.createContext(null),jr=w.createContext({outlet:null,matches:[],isDataRoute:!1}),G_=w.createContext(null);function oR(t,e){let{relative:n}=e===void 0?{}:e;Pa()||xe(!1);let{basename:r,navigator:i}=w.useContext(Si),{hash:s,pathname:o,search:l}=q_(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Rr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function Pa(){return w.useContext(lc)!=null}function uc(){return Pa()||xe(!1),w.useContext(lc).location}function K_(t){w.useContext(Si).static||w.useLayoutEffect(t)}function aR(){let{isDataRoute:t}=w.useContext(jr);return t?ER():lR()}function lR(){Pa()||xe(!1);let t=w.useContext(kp),{basename:e,future:n,navigator:r}=w.useContext(Si),{matches:i}=w.useContext(jr),{pathname:s}=uc(),o=JSON.stringify(z_(i,n.v7_relativeSplatPath)),l=w.useRef(!1);return K_(()=>{l.current=!0}),w.useCallback(function(c,h){if(h===void 0&&(h={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=H_(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Rr([e,p.pathname])),(h.replace?r.replace:r.push)(p,h.state,h)},[e,r,o,s,t])}function uR(){let{matches:t}=w.useContext(jr),e=t[t.length-1];return e?e.params:{}}function q_(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=w.useContext(Si),{matches:i}=w.useContext(jr),{pathname:s}=uc(),o=JSON.stringify(z_(i,r.v7_relativeSplatPath));return w.useMemo(()=>H_(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function cR(t,e){return dR(t,e)}function dR(t,e,n,r){Pa()||xe(!1);let{navigator:i}=w.useContext(Si),{matches:s}=w.useContext(jr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=uc(),h;if(e){var p;let N=typeof e=="string"?Ds(e):e;u==="/"||(p=N.pathname)!=null&&p.startsWith(u)||xe(!1),h=N}else h=c;let y=h.pathname||"/",A=y;if(u!=="/"){let N=u.replace(/^\//,"").split("/");A="/"+y.replace(/^\//,"").split("/").slice(N.length).join("/")}let I=jC(t,{pathname:A}),O=gR(I&&I.map(N=>Object.assign({},N,{params:Object.assign({},l,N.params),pathname:Rr([u,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?u:Rr([u,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),s,n,r);return e&&O?w.createElement(lc.Provider,{value:{location:ua({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:gr.Pop}},O):O}function hR(){let t=_R(),e=rR(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},e),n?w.createElement("pre",{style:i},n):null,null)}const fR=w.createElement(hR,null);class pR extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?w.createElement(jr.Provider,{value:this.props.routeContext},w.createElement(G_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function mR(t){let{routeContext:e,match:n,children:r}=t,i=w.useContext(kp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(jr.Provider,{value:e},r)}function gR(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let h=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);h>=0||xe(!1),o=o.slice(0,Math.min(o.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let p=o[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=h),p.route.id){let{loaderData:y,errors:A}=n,I=p.route.loader&&y[p.route.id]===void 0&&(!A||A[p.route.id]===void 0);if(p.route.lazy||I){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,p,y)=>{let A,I=!1,O=null,N=null;n&&(A=l&&p.route.id?l[p.route.id]:void 0,O=p.route.errorElement||fR,u&&(c<0&&y===0?(I=!0,N=null):c===y&&(I=!0,N=p.route.hydrateFallbackElement||null)));let R=e.concat(o.slice(0,y+1)),_=()=>{let k;return A?k=O:I?k=N:p.route.Component?k=w.createElement(p.route.Component,null):p.route.element?k=p.route.element:k=h,w.createElement(mR,{match:p,routeContext:{outlet:h,matches:R,isDataRoute:n!=null},children:k})};return n&&(p.route.ErrorBoundary||p.route.errorElement||y===0)?w.createElement(pR,{location:n.location,revalidation:n.revalidation,component:O,error:A,children:_(),routeContext:{outlet:null,matches:R,isDataRoute:!0}}):_()},null)}var Y_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Y_||{}),Iu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Iu||{});function vR(t){let e=w.useContext(kp);return e||xe(!1),e}function yR(t){let e=w.useContext(sR);return e||xe(!1),e}function wR(t){let e=w.useContext(jr);return e||xe(!1),e}function J_(t){let e=wR(),n=e.matches[e.matches.length-1];return n.route.id||xe(!1),n.route.id}function _R(){var t;let e=w.useContext(G_),n=yR(Iu.UseRouteError),r=J_(Iu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function ER(){let{router:t}=vR(Y_.UseNavigateStable),e=J_(Iu.UseNavigateStable),n=w.useRef(!1);return K_(()=>{n.current=!0}),w.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ua({fromRouteId:e},s)))},[t,e])}function Mi(t){xe(!1)}function IR(t){let{basename:e="/",children:n=null,location:r,navigationType:i=gr.Pop,navigator:s,static:o=!1,future:l}=t;Pa()&&xe(!1);let u=e.replace(/^\/*/,"/"),c=w.useMemo(()=>({basename:u,navigator:s,static:o,future:ua({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Ds(r));let{pathname:h="/",search:p="",hash:y="",state:A=null,key:I="default"}=r,O=w.useMemo(()=>{let N=Sp(h,u);return N==null?null:{location:{pathname:N,search:p,hash:y,state:A,key:I},navigationType:i}},[u,h,p,y,A,I,i]);return O==null?null:w.createElement(Si.Provider,{value:c},w.createElement(lc.Provider,{children:n,value:O}))}function TR(t){let{children:e,location:n}=t;return cR(Zh(e),n)}new Promise(()=>{});function Zh(t,e){e===void 0&&(e=[]);let n=[];return w.Children.forEach(t,(r,i)=>{if(!w.isValidElement(r))return;let s=[...e,i];if(r.type===w.Fragment){n.push.apply(n,Zh(r.props.children,s));return}r.type!==Mi&&xe(!1),!r.props.index||!r.props.children||xe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Zh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ef(){return ef=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ef.apply(this,arguments)}function SR(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function kR(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function CR(t,e){return t.button===0&&(!e||e==="_self")&&!kR(t)}const RR=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],PR="6";try{window.__reactRouterVersion=PR}catch{}const AR="startTransition",Bv=Tk[AR];function NR(t){let{basename:e,children:n,future:r,window:i}=t,s=w.useRef();s.current==null&&(s.current=LC({window:i,v5Compat:!0}));let o=s.current,[l,u]=w.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=w.useCallback(p=>{c&&Bv?Bv(()=>u(p)):u(p)},[u,c]);return w.useLayoutEffect(()=>o.listen(h),[o,h]),w.createElement(IR,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const bR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",OR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ee=w.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:h,unstable_viewTransition:p}=e,y=SR(e,RR),{basename:A}=w.useContext(Si),I,O=!1;if(typeof c=="string"&&OR.test(c)&&(I=c,bR))try{let k=new URL(window.location.href),x=c.startsWith("//")?new URL(k.protocol+c):new URL(c),D=Sp(x.pathname,A);x.origin===k.origin&&D!=null?c=D+x.search+x.hash:O=!0}catch{}let N=oR(c,{relative:i}),R=xR(c,{replace:o,state:l,target:u,preventScrollReset:h,relative:i,unstable_viewTransition:p});function _(k){r&&r(k),k.defaultPrevented||R(k)}return w.createElement("a",ef({},y,{href:I||N,onClick:O||s?r:_,ref:n,target:u}))});var zv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(zv||(zv={}));var Hv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Hv||(Hv={}));function xR(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,u=aR(),c=uc(),h=q_(t,{relative:o});return w.useCallback(p=>{if(CR(p,n)){p.preventDefault();let y=r!==void 0?r:Eu(c)===Eu(h);u(t,{replace:y,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[c,u,h,r,i,n,t,s,o,l])}var Wv={};/**
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
 */const X_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},LR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Q_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,p=(s&3)<<4|l>>4;let y=(l&15)<<2|c>>6,A=c&63;u||(A=64,o||(y=64)),r.push(n[h],n[p],n[y],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(X_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):LR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new DR;const y=s<<2|l>>4;if(r.push(y),c!==64){const A=l<<4&240|c>>2;if(r.push(A),p!==64){const I=c<<6&192|p;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class DR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const MR=function(t){const e=X_(t);return Q_.encodeByteArray(e,!0)},Tu=function(t){return MR(t).replace(/\./g,"")},Cp=function(t){try{return Q_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Su(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!jR(n)||(t[n]=Su(t[n],e[n]));return t}function jR(t){return t!=="__proto__"}/**
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
 */function UR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $R=()=>UR().__FIREBASE_DEFAULTS__,FR=()=>{if(typeof process>"u"||typeof Wv>"u")return;const t=Wv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},VR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Cp(t[1]);return e&&JSON.parse(e)},cc=()=>{try{return $R()||FR()||VR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Z_=t=>{var e,n;return(n=(e=cc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},BR=t=>{const e=Z_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},eE=()=>{var t;return(t=cc())===null||t===void 0?void 0:t.config},Rp=t=>{var e;return(e=cc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class zR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function HR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Tu(JSON.stringify(n)),Tu(JSON.stringify(o)),""].join(".")}/**
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
 */function te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(te())}function nE(){var t;const e=(t=cc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function rE(){return typeof window<"u"||iE()}function iE(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function dc(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Pp(){const t=te();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ca(){try{return typeof indexedDB=="object"}catch{return!1}}function sE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function WR(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const GR="FirebaseError";class Le extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=GR,Object.setPrototypeOf(this,Le.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gt.prototype.create)}}class Gt{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?KR(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Le(i,l,r)}}function KR(t,e){return t.replace(qR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const qR=/\{\$([^}]+)}/g;/**
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
 */function Gv(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function oE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function da(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Kv(s)&&Kv(o)){if(!da(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Kv(t){return t!==null&&typeof t=="object"}/**
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
 */function sn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function es(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Io(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Ap(t,e){const n=new YR(t,e);return n.subscribe.bind(n)}class YR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");JR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Dd),i.error===void 0&&(i.error=Dd),i.complete===void 0&&(i.complete=Dd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function JR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Dd(){}/**
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
 */const XR=1e3,QR=2,ZR=4*60*60*1e3,eP=.5;function qv(t,e=XR,n=QR){const r=e*Math.pow(n,t),i=Math.round(eP*r*(Math.random()-.5)*2);return Math.min(ZR,r+i)}/**
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
 */function J(t){return t&&t._delegate?t._delegate:t}class dt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const qr="[DEFAULT]";/**
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
 */class tP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rP(e))try{this.getOrInitializeService({instanceIdentifier:qr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=qr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qr){return this.instances.has(e)}getOptions(e=qr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qr){return this.component?this.component.multipleInstances?e:qr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nP(t){return t===qr?void 0:t}function rP(t){return t.instantiationMode==="EAGER"}/**
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
 */class aE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Np=[];var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const lE={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},iP=ie.INFO,sP={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},oP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=sP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ms{constructor(e){this.name=e,this._logLevel=iP,this._logHandler=oP,this._userLogHandler=null,Np.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}function aP(t){Np.forEach(e=>{e.setLogLevel(t)})}function lP(t,e){for(const n of Np){let r=null;e&&e.level&&(r=lE[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const l=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r??i.logLevel)&&t({level:ie[s].toLowerCase(),message:l,args:o,type:i.name})}}}const uP=(t,e)=>e.some(n=>t instanceof n);let Yv,Jv;function cP(){return Yv||(Yv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dP(){return Jv||(Jv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uE=new WeakMap,tf=new WeakMap,cE=new WeakMap,Md=new WeakMap,bp=new WeakMap;function hP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Pr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&uE.set(n,t)}).catch(()=>{}),bp.set(e,t),e}function fP(t){if(tf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});tf.set(t,e)}let nf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return tf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pP(t){nf=t(nf)}function mP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(jd(this),e,...n);return cE.set(r,e.sort?e.sort():[e]),Pr(r)}:dP().includes(t)?function(...e){return t.apply(jd(this),e),Pr(uE.get(this))}:function(...e){return Pr(t.apply(jd(this),e))}}function gP(t){return typeof t=="function"?mP(t):(t instanceof IDBTransaction&&fP(t),uP(t,cP())?new Proxy(t,nf):t)}function Pr(t){if(t instanceof IDBRequest)return hP(t);if(Md.has(t))return Md.get(t);const e=gP(t);return e!==t&&(Md.set(t,e),bp.set(e,t)),e}const jd=t=>bp.get(t);function dE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Pr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Pr(o.result),u.oldVersion,u.newVersion,Pr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const vP=["get","getKey","getAll","getAllKeys","count"],yP=["put","add","delete","clear"],Ud=new Map;function Xv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ud.get(e))return Ud.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=yP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||vP.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Ud.set(e,s),s}pP(t=>({...t,get:(e,n,r)=>Xv(e,n)||t.get(e,n,r),has:(e,n)=>!!Xv(e,n)||t.has(e,n)}));/**
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
 */class wP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_P(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function _P(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ku="@firebase/app",rf="0.10.7";/**
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
 */const fi=new Ms("@firebase/app"),EP="@firebase/app-compat",IP="@firebase/analytics-compat",TP="@firebase/analytics",SP="@firebase/app-check-compat",kP="@firebase/app-check",CP="@firebase/auth",RP="@firebase/auth-compat",PP="@firebase/database",AP="@firebase/database-compat",NP="@firebase/functions",bP="@firebase/functions-compat",OP="@firebase/installations",xP="@firebase/installations-compat",LP="@firebase/messaging",DP="@firebase/messaging-compat",MP="@firebase/performance",jP="@firebase/performance-compat",UP="@firebase/remote-config",$P="@firebase/remote-config-compat",FP="@firebase/storage",VP="@firebase/storage-compat",BP="@firebase/firestore",zP="@firebase/vertexai-preview",HP="@firebase/firestore-compat",WP="firebase",GP="10.12.4";/**
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
 */const br="[DEFAULT]",KP={[ku]:"fire-core",[EP]:"fire-core-compat",[TP]:"fire-analytics",[IP]:"fire-analytics-compat",[kP]:"fire-app-check",[SP]:"fire-app-check-compat",[CP]:"fire-auth",[RP]:"fire-auth-compat",[PP]:"fire-rtdb",[AP]:"fire-rtdb-compat",[NP]:"fire-fn",[bP]:"fire-fn-compat",[OP]:"fire-iid",[xP]:"fire-iid-compat",[LP]:"fire-fcm",[DP]:"fire-fcm-compat",[MP]:"fire-perf",[jP]:"fire-perf-compat",[UP]:"fire-rc",[$P]:"fire-rc-compat",[FP]:"fire-gcs",[VP]:"fire-gcs-compat",[BP]:"fire-fst",[HP]:"fire-fst-compat",[zP]:"fire-vertex","fire-js":"fire-js",[WP]:"fire-js-all"};/**
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
 */const Or=new Map,Is=new Map,Ts=new Map;function ha(t,e){try{t.container.addComponent(e)}catch(n){fi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function hE(t,e){t.container.addOrOverwriteComponent(e)}function It(t){const e=t.name;if(Ts.has(e))return fi.debug(`There were multiple attempts to register component ${e}.`),!1;Ts.set(e,t);for(const n of Or.values())ha(n,t);for(const n of Is.values())ha(n,t);return!0}function Wn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function qP(t,e,n=br){Wn(t,e).clearInstance(n)}function fE(t){return t.options!==void 0}function ue(t){return t.settings!==void 0}function YP(){Ts.clear()}/**
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
 */const JP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ft=new Gt("app","Firebase",JP);/**
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
 */let pE=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}};/**
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
 */class XP extends pE{constructor(e,n,r,i){const s=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const l=e;super(l.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},n),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,ze(ku,rf,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Op(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Ft.create("server-app-deleted")}}/**
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
 */const Lt=GP;function fc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:br,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ft.create("bad-app-name",{appName:String(i)});if(n||(n=eE()),!n)throw Ft.create("no-options");const s=Or.get(i);if(s){if(da(n,s.options)&&da(r,s.config))return s;throw Ft.create("duplicate-app",{appName:i})}const o=new aE(i);for(const u of Ts.values())o.addComponent(u);const l=new pE(n,r,o);return Or.set(i,l),l}function QP(t,e){if(rE()&&!iE())throw Ft.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let n;fE(t)?n=t.options:n=t;const r=Object.assign(Object.assign({},e),n);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=c=>[...c].reduce((h,p)=>Math.imul(31,h)+p.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Ft.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=Is.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const l=new aE(s);for(const c of Ts.values())l.addComponent(c);const u=new XP(n,e,s,l);return Is.set(s,u),u}function pc(t=br){const e=Or.get(t);if(!e&&t===br&&eE())return fc();if(!e)throw Ft.create("no-app",{appName:t});return e}function ZP(){return Array.from(Or.values())}async function Op(t){let e=!1;const n=t.name;Or.has(n)?(e=!0,Or.delete(n)):Is.has(n)&&t.decRefCount()<=0&&(Is.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function ze(t,e,n){var r;let i=(r=KP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fi.warn(l.join(" "));return}It(new dt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function mE(t,e){if(t!==null&&typeof t!="function")throw Ft.create("invalid-log-argument");lP(t,e)}function gE(t){aP(t)}/**
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
 */const eA="firebase-heartbeat-database",tA=1,fa="firebase-heartbeat-store";let $d=null;function vE(){return $d||($d=dE(eA,tA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(fa)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ft.create("idb-open",{originalErrorMessage:t.message})})),$d}async function nA(t){try{const n=(await vE()).transaction(fa),r=await n.objectStore(fa).get(yE(t));return await n.done,r}catch(e){if(e instanceof Le)fi.warn(e.message);else{const n=Ft.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fi.warn(n.message)}}}async function Qv(t,e){try{const r=(await vE()).transaction(fa,"readwrite");await r.objectStore(fa).put(e,yE(t)),await r.done}catch(n){if(n instanceof Le)fi.warn(n.message);else{const r=Ft.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fi.warn(r.message)}}}function yE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const rA=1024,iA=30*24*60*60*1e3;class sA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new aA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Zv();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=iA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Zv(),{heartbeatsToSend:r,unsentEntries:i}=oA(this._heartbeatsCache.heartbeats),s=Tu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Zv(){return new Date().toISOString().substring(0,10)}function oA(t,e=rA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ey(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ey(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class aA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ca()?sE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await nA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ey(t){return Tu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function lA(t){It(new dt("platform-logger",e=>new wP(e),"PRIVATE")),It(new dt("heartbeat",e=>new sA(e),"PRIVATE")),ze(ku,rf,t),ze(ku,rf,"esm2017"),ze("fire-js","")}lA("");const uA=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Le,SDK_VERSION:Lt,_DEFAULT_ENTRY_NAME:br,_addComponent:ha,_addOrOverwriteComponent:hE,_apps:Or,_clearComponents:YP,_components:Ts,_getProvider:Wn,_isFirebaseApp:fE,_isFirebaseServerApp:ue,_registerComponent:It,_removeServiceInstance:qP,_serverApps:Is,deleteApp:Op,getApp:pc,getApps:ZP,initializeApp:fc,initializeServerApp:QP,onLog:mE,registerVersion:ze,setLogLevel:gE},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e,n){this._delegate=e,this.firebase=n,ha(e,new dt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Op(this._delegate)))}_getService(e,n=br){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=br){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){ha(this._delegate,e)}_addOrOverwriteComponent(e){hE(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const dA={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},ty=new Gt("app-compat","Firebase",dA);/**
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
 */function hA(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:ze,setLogLevel:gE,onLog:mE,apps:null,SDK_VERSION:Lt,INTERNAL:{registerComponent:l,removeApp:r,useAsService:u,modularAPIs:uA}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||br,!Gv(e,c))throw ty.create("no-app",{appName:c});return e[c]}i.App=t;function s(c,h={}){const p=fc(c,h);if(Gv(e,p.name))return e[p.name];const y=new t(p,n);return e[p.name]=y,y}function o(){return Object.keys(e).map(c=>e[c])}function l(c){const h=c.name,p=h.replace("-compat","");if(It(c)&&c.type==="PUBLIC"){const y=(A=i())=>{if(typeof A[p]!="function")throw ty.create("invalid-app-argument",{appName:h});return A[p]()};c.serviceProps!==void 0&&Su(y,c.serviceProps),n[p]=y,t.prototype[p]=function(...A){return this._getService.bind(this,h).apply(this,c.multipleInstances?A:[])}}return c.type==="PUBLIC"?n[p]:null}function u(c,h){return h==="serverAuth"?null:h}return n}/**
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
 */function wE(){const t=hA(cA);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:wE,extendNamespace:e,createSubscribe:Ap,ErrorFactory:Gt,deepExtend:Su});function e(n){Su(t,n)}return t}const fA=wE();/**
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
 */const ny=new Ms("@firebase/app-compat"),pA="@firebase/app-compat",mA="0.2.37";/**
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
 */function gA(t){ze(pA,mA,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(rE()&&self.firebase!==void 0){ny.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&ny.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Aa=fA;gA();var vA="firebase",yA="10.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Aa.registerVersion(vA,yA,"app-compat");function js(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const fo={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},xi={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wA(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function _E(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _A=wA,EA=_E,EE=new Gt("auth","Firebase",_E());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu=new Ms("@firebase/auth");function IA(t,...e){Cu.logLevel<=ie.WARN&&Cu.warn(`Auth (${Lt}): ${t}`,...e)}function Vl(t,...e){Cu.logLevel<=ie.ERROR&&Cu.error(`Auth (${Lt}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t,...e){throw Lp(t,...e)}function Ue(t,...e){return Lp(t,...e)}function xp(t,e,n){const r=Object.assign(Object.assign({},EA()),{[e]:n});return new Gt("auth","Firebase",r).create(e,{appName:t.name})}function He(t){return xp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Us(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ye(t,"argument-error"),xp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Lp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return EE.create(t,...e)}function V(t,e,...n){if(!t)throw Lp(e,...n)}function pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Vl(e),new Error(e)}function rn(t,e){t||pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Dp(){return ry()==="http:"||ry()==="https:"}function ry(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Dp()||dc()||"connection"in navigator)?navigator.onLine:!0}function SA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Na=class{constructor(e,n){this.shortDelay=e,this.longDelay=n,rn(n>e,"Short delay should be less than long delay!"),this.isMobile=tE()||hc()}get(){return TA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(t,e){rn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let IE=class{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA=new Na(3e4,6e4);function ke(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ce(t,e,n,r,i={}){return TE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=sn(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),IE.fetch()(SE(t,t.config.apiHost,n,l),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function TE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},kA),e);try{const i=new PA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw To(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw To(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw To(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw To(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw xp(t,h,c);Ye(t,h)}}catch(i){if(i instanceof Le)throw i;Ye(t,"network-request-failed",{message:String(i)})}}async function Gn(t,e,n,r,i={}){const s=await Ce(t,e,n,r,i);return"mfaPendingCredential"in s&&Ye(t,"multi-factor-auth-required",{_serverResponse:s}),s}function SE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Mp(t.config,i):`${t.config.apiScheme}://${i}`}function RA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}let PA=class{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ue(this.auth,"network-request-failed")),CA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}};function To(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ue(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(t){return t!==void 0&&t.getResponse!==void 0}function sy(t){return t!==void 0&&t.enterprise!==void 0}class AA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return RA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NA(t){return(await Ce(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function bA(t,e){return Ce(t,"GET","/v2/recaptchaConfig",ke(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OA(t,e){return Ce(t,"POST","/v1/accounts:delete",e)}async function xA(t,e){return Ce(t,"POST","/v1/accounts:update",e)}async function kE(t,e){return Ce(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LA(t,e=!1){const n=J(t),r=await n.getIdToken(e),i=mc(r);V(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:jo(Fd(i.auth_time)),issuedAtTime:jo(Fd(i.iat)),expirationTime:jo(Fd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Fd(t){return Number(t)*1e3}function mc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Vl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Cp(n);return i?JSON.parse(i):(Vl("Failed to decode base64 JWT payload"),null)}catch(i){return Vl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function oy(t){const e=mc(t);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Un(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Le&&DA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function DA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let MA=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sf=class{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=jo(this.lastLoginAt),this.creationTime=jo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};/**
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
 */async function ma(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Un(t,kE(n,{idToken:r}));V(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?CE(s.providerUserInfo):[],l=UA(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),h=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new sf(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,p)}async function jA(t){const e=J(t);await ma(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function UA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function CE(t){return t.map(e=>{var{providerId:n}=e,r=js(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $A(t,e){const n=await TE(t,{},async()=>{const r=sn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=SE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",IE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function FA(t,e){return Ce(t,"POST","/v2/accounts:revokeToken",ke(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vd=class of{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):oy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){V(e.length!==0,"internal-error");const n=oy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(V(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await $A(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new of;return r&&(V(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(V(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(V(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new of,this.toJSON())}_performRefresh(){return pn("not implemented")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t,e){V(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}let Ru=class So{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=js(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new MA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new sf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Un(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return LA(this,e)}reload(){return jA(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new So(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ma(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ue(this.auth.app))return Promise.reject(He(this.auth));const e=await this.getIdToken();return await Un(this,OA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,h;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,A=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(l=n.tenantId)!==null&&l!==void 0?l:void 0,N=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,R=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:k,emailVerified:x,isAnonymous:D,providerData:M,stsTokenManager:E}=n;V(k&&E,e,"internal-error");const g=Vd.fromJSON(this.name,E);V(typeof k=="string",e,"internal-error"),nr(p,e.name),nr(y,e.name),V(typeof x=="boolean",e,"internal-error"),V(typeof D=="boolean",e,"internal-error"),nr(A,e.name),nr(I,e.name),nr(O,e.name),nr(N,e.name),nr(R,e.name),nr(_,e.name);const T=new So({uid:k,auth:e,email:y,emailVerified:x,displayName:p,isAnonymous:D,photoURL:I,phoneNumber:A,tenantId:O,stsTokenManager:g,createdAt:R,lastLoginAt:_});return M&&Array.isArray(M)&&(T.providerData=M.map(C=>Object.assign({},C))),N&&(T._redirectEventId=N),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new Vd;i.updateFromServerResponse(n);const s=new So({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ma(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];V(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?CE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Vd;l.updateFromIdToken(r);const u=new So({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new sf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=new Map;function Ct(t){rn(t instanceof Function,"Expected a class definition");let e=ay.get(t);return e?(rn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ay.set(t,e),e)}/**
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
 */let RE=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}};RE.type="NONE";const Ss=RE;/**
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
 */function ri(t,e,n){return`firebase:${t}:${e}:${n}`}let ly=class Bl{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ri(this.userKey,i.apiKey,s),this.fullPersistenceKey=ri("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ru._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Bl(Ct(Ss),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Ct(Ss);const o=ri(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const h=await c._get(o);if(h){const p=Ru._fromJSON(e,h);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Bl(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Bl(s,e,r))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(NE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(PE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bE(e))return"Blackberry";if(OE(e))return"Webos";if(jp(e))return"Safari";if((e.includes("chrome/")||AE(e))&&!e.includes("edge/"))return"Chrome";if(ba(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function PE(t=te()){return/firefox\//i.test(t)}function jp(t=te()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function AE(t=te()){return/crios\//i.test(t)}function NE(t=te()){return/iemobile/i.test(t)}function ba(t=te()){return/android/i.test(t)}function bE(t=te()){return/blackberry/i.test(t)}function OE(t=te()){return/webos/i.test(t)}function $s(t=te()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function VA(t=te()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function BA(t=te()){var e;return $s(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zA(){return Pp()&&document.documentMode===10}function xE(t=te()){return $s(t)||ba(t)||OE(t)||bE(t)||/windows phone/i.test(t)||NE(t)}function HA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(t,e=[]){let n;switch(t){case"Browser":n=uy(te());break;case"Worker":n=`${uy(te())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Lt}/${r}`}/**
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
 */let WA=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}};/**
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
 */async function GA(t,e={}){return Ce(t,"GET","/v2/passwordPolicy",ke(t,e))}/**
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
 */const KA=6;let qA=class{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:KA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let YA=class{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cy(this),this.idTokenSubscription=new cy(this),this.beforeStateQueue=new WA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=EE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ct(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ly.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await kE(this,{idToken:e}),r=await Ru._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ue(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ma(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=SA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ue(this.app))return Promise.reject(He(this));const n=e?J(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ue(this.app)?Promise.reject(He(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ue(this.app)?Promise.reject(He(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ct(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await GA(this),n=new qA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gt("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await FA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ct(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await ly.create(this,[Ct(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=LE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&IA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}};function Se(t){return J(t)}let cy=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ap(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function JA(t){Oa=t}function Up(t){return Oa.loadJS(t)}function XA(){return Oa.recaptchaV2Script}function QA(){return Oa.recaptchaEnterpriseScript}function ZA(){return Oa.gapiScript}function DE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const eN="recaptcha-enterprise",tN="NO_RECAPTCHA";class nN{constructor(e){this.type=eN,this.auth=Se(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{bA(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new AA(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;sy(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(tN)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&sy(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=QA();u.length!==0&&(u+=l),Up(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function dy(t,e,n,r=!1){const i=new nN(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ga(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await dy(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await dy(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}function rN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ct);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function iN(t,e,n){const r=Se(t);V(r._canInitEmulator,r,"emulator-config-failed"),V(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=ME(e),{host:o,port:l}=sN(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||oN()}function ME(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function sN(t){const e=ME(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:hy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:hy(o)}}}function hy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function oN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fs=class{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pn("not implemented")}_getIdTokenResponse(e){return pn("not implemented")}_linkToIdToken(e,n){return pn("not implemented")}_getReauthenticationResolver(e){return pn("not implemented")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jE(t,e){return Ce(t,"POST","/v1/accounts:resetPassword",ke(t,e))}async function aN(t,e){return Ce(t,"POST","/v1/accounts:update",e)}async function lN(t,e){return Ce(t,"POST","/v1/accounts:signUp",e)}async function uN(t,e){return Ce(t,"POST","/v1/accounts:update",ke(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cN(t,e){return Gn(t,"POST","/v1/accounts:signInWithPassword",ke(t,e))}async function gc(t,e){return Ce(t,"POST","/v1/accounts:sendOobCode",ke(t,e))}async function dN(t,e){return gc(t,e)}async function hN(t,e){return gc(t,e)}async function fN(t,e){return gc(t,e)}async function pN(t,e){return gc(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mN(t,e){return Gn(t,"POST","/v1/accounts:signInWithEmailLink",ke(t,e))}async function gN(t,e){return Gn(t,"POST","/v1/accounts:signInWithEmailLink",ke(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va extends Fs{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new va(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new va(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ga(e,n,"signInWithPassword",cN);case"emailLink":return mN(e,{email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ga(e,r,"signUpPassword",lN);case"emailLink":return gN(e,{idToken:n,email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function On(t,e){return Gn(t,"POST","/v1/accounts:signInWithIdp",ke(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN="http://localhost";let pi=class af extends Fs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new af(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ye("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=js(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new af(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return On(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,On(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,On(e,n)}buildRequest(){const e={requestUri:vN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=sn(n)}return e}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yN(t,e){return Ce(t,"POST","/v1/accounts:sendVerificationCode",ke(t,e))}async function wN(t,e){return Gn(t,"POST","/v1/accounts:signInWithPhoneNumber",ke(t,e))}async function _N(t,e){const n=await Gn(t,"POST","/v1/accounts:signInWithPhoneNumber",ke(t,e));if(n.temporaryProof)throw To(t,"account-exists-with-different-credential",n);return n}const EN={USER_NOT_FOUND:"user-not-found"};async function IN(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Gn(t,"POST","/v1/accounts:signInWithPhoneNumber",ke(t,n),EN)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends Fs{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new ii({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new ii({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return wN(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return _N(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return IN(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new ii({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function SN(t){const e=es(Io(t)).link,n=e?es(Io(e)).deep_link_id:null,r=es(Io(t)).deep_link_id;return(r?es(Io(r)).link:null)||r||n||e||t}class vc{constructor(e){var n,r,i,s,o,l;const u=es(Io(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,p=TN((i=u.mode)!==null&&i!==void 0?i:null);V(c&&h&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=SN(e);try{return new vc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(){this.providerId=Ur.PROVIDER_ID}static credential(e,n){return va._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=vc.parseLink(n);return V(r,"argument-error"),va._fromEmailAndCode(e,r.code,r.tenantId)}}Ur.PROVIDER_ID="password";Ur.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ur.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kn=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};/**
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
 */let Vs=class extends Kn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};class us extends Vs{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return V("providerId"in n&&"signInMethod"in n,"argument-error"),pi._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return V(e.idToken||e.accessToken,"argument-error"),pi._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return us.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return us.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:l}=e;if(!r&&!i&&!n&&!s||!l)return null;try{return new us(l)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yc=class ji extends Vs{constructor(){super("facebook.com")}static credential(e){return pi._fromParams({providerId:ji.PROVIDER_ID,signInMethod:ji.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ji.credentialFromTaggedObject(e)}static credentialFromError(e){return ji.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ji.credential(e.oauthAccessToken)}catch{return null}}};yc.FACEBOOK_SIGN_IN_METHOD="facebook.com";yc.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wc=class Ui extends Vs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return pi._fromParams({providerId:Ui.PROVIDER_ID,signInMethod:Ui.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ui.credentialFromTaggedObject(e)}static credentialFromError(e){return Ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ui.credential(n,r)}catch{return null}}};wc.GOOGLE_SIGN_IN_METHOD="google.com";wc.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _c=class $i extends Vs{constructor(){super("github.com")}static credential(e){return pi._fromParams({providerId:$i.PROVIDER_ID,signInMethod:$i.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $i.credentialFromTaggedObject(e)}static credentialFromError(e){return $i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $i.credential(e.oauthAccessToken)}catch{return null}}};_c.GITHUB_SIGN_IN_METHOD="github.com";_c.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kN="http://localhost";class ks extends Fs{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return On(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,On(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,On(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new ks(r,s)}static _create(e,n){return new ks(e,n)}buildRequest(){return{requestUri:kN,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN="saml.";class Pu extends Kn{constructor(e){V(e.startsWith(CN),"argument-error"),super(e)}static credentialFromResult(e){return Pu.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Pu.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=ks.fromJSON(e);return V(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return ks._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ec=class Fi extends Vs{constructor(){super("twitter.com")}static credential(e,n){return pi._fromParams({providerId:Fi.PROVIDER_ID,signInMethod:Fi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fi.credentialFromTaggedObject(e)}static credentialFromError(e){return Fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Fi.credential(n,r)}catch{return null}}};Ec.TWITTER_SIGN_IN_METHOD="twitter.com";Ec.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UE(t,e){return Gn(t,"POST","/v1/accounts:signUp",ke(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $n=class lf{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ru._fromIdTokenResponse(e,r,i),o=fy(r);return new lf({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=fy(r);return new lf({user:e,providerId:i,_tokenResponse:r,operationType:n})}};function fy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RN(t){var e;if(ue(t.app))return Promise.reject(He(t));const n=Se(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new $n({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await UE(n,{returnSecureToken:!0}),i=await $n._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let PN=class uf extends Le{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,uf.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new uf(e,n,r,i)}};function $E(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?PN._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function AN(t,e){const n=J(t);await Ic(!0,n,e);const{providerUserInfo:r}=await xA(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=FE(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function $p(t,e,n=!1){const r=await Un(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return $n._forOperation(t,"link",r)}async function Ic(t,e,n){await ma(e);const r=FE(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";V(r.has(n)===t,e.auth,i)}/**
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
 */async function VE(t,e,n=!1){const{auth:r}=t;if(ue(r.app))return Promise.reject(He(r));const i="reauthenticate";try{const s=await Un(t,$E(r,i,e,t),n);V(s.idToken,r,"internal-error");const o=mc(s.idToken);V(o,r,"internal-error");const{sub:l}=o;return V(t.uid===l,r,"user-mismatch"),$n._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ye(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BE(t,e,n=!1){if(ue(t.app))return Promise.reject(He(t));const r="signIn",i=await $E(t,r,e),s=await $n._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Tc(t,e){return BE(Se(t),e)}async function zE(t,e){const n=J(t);return await Ic(!1,n,e.providerId),$p(n,e)}async function HE(t,e){return VE(J(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NN(t,e){return Gn(t,"POST","/v1/accounts:signInWithCustomToken",ke(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bN(t,e){if(ue(t.app))return Promise.reject(He(t));const n=Se(t),r=await NN(n,{token:e,returnSecureToken:!0}),i=await $n._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Fp._fromServerResponse(e,n):"totpInfo"in n?Vp._fromServerResponse(e,n):Ye(e,"internal-error")}}class Fp extends xa{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Fp(n)}}class Vp extends xa{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Vp(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(t,e,n){var r;V(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),V(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(V(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(V(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bp(t){const e=Se(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ON(t,e,n){const r=Se(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Sc(r,i,n),await ga(r,i,"getOobCode",hN)}async function xN(t,e,n){await jE(J(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Bp(t),r})}async function LN(t,e){await uN(J(t),{oobCode:e})}async function WE(t,e){const n=J(t),r=await jE(n,{oobCode:e}),i=r.requestType;switch(V(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":V(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":V(r.mfaInfo,n,"internal-error");default:V(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=xa._fromServerResponse(Se(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function DN(t,e){const{data:n}=await WE(J(t),e);return n.email}async function MN(t,e,n){if(ue(t.app))return Promise.reject(He(t));const r=Se(t),o=await ga(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",UE).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Bp(t),u}),l=await $n._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function jN(t,e,n){return ue(t.app)?Promise.reject(He(t)):Tc(J(t),Ur.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Bp(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UN(t,e,n){const r=Se(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,l){V(l.handleCodeInApp,r,"argument-error"),l&&Sc(r,o,l)}s(i,n),await ga(r,i,"getOobCode",fN)}function $N(t,e){const n=vc.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function FN(t,e,n){if(ue(t.app))return Promise.reject(He(t));const r=J(t),i=Ur.credentialWithLink(e,n||pa());return V(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Tc(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VN(t,e){return Ce(t,"POST","/v1/accounts:createAuthUri",ke(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BN(t,e){const n=Dp()?pa():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await VN(J(t),r);return i||[]}async function zN(t,e){const n=J(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Sc(n.auth,i,e);const{email:s}=await dN(n.auth,i);s!==t.email&&await t.reload()}async function HN(t,e,n){const r=J(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Sc(r.auth,s,n);const{email:o}=await pN(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WN(t,e){return Ce(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GN(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=J(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Un(r,WN(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function KN(t,e){const n=J(t);return ue(n.auth.app)?Promise.reject(He(n.auth)):GE(n,e,null)}function qN(t,e){return GE(J(t),null,e)}async function GE(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Un(t,aN(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function YN(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=mc(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const l=o!=="anonymous"&&o!=="custom"?o:null;return new cs(s,l)}}if(!r)return null;switch(r){case"facebook.com":return new JN(s,i);case"github.com":return new XN(s,i);case"google.com":return new QN(s,i);case"twitter.com":return new ZN(s,i,t.screenName||null);case"custom":case"anonymous":return new cs(s,null);default:return new cs(s,r,i)}}class cs{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class KE extends cs{constructor(e,n,r,i){super(e,n,r),this.username=i}}class JN extends cs{constructor(e,n){super(e,"facebook.com",n)}}class XN extends KE{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class QN extends cs{constructor(e,n){super(e,"google.com",n)}}class ZN extends KE{constructor(e,n,r){super(e,"twitter.com",n,r)}}function eb(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:YN(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new Zr("enroll",e,n)}static _fromMfaPendingCredential(e){return new Zr("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Zr._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Zr._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Se(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(l=>xa._fromServerResponse(r,l));V(i.mfaPendingCredential,r,"internal-error");const o=Zr._fromMfaPendingCredential(i.mfaPendingCredential);return new zp(o,s,async l=>{const u=await l._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c=Object.assign(Object.assign({},i),{idToken:u.idToken,refreshToken:u.refreshToken});switch(n.operationType){case"signIn":const h=await $n._fromIdTokenResponse(r,n.operationType,c);return await r._updateCurrentUser(h.user),h;case"reauthenticate":return V(n.user,r,"internal-error"),$n._forOperation(n.user,n.operationType,c);default:Ye(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function tb(t,e){var n;const r=J(t),i=e;return V(e.customData.operationType,r,"argument-error"),V((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),zp._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nb(t,e){return Ce(t,"POST","/v2/accounts/mfaEnrollment:start",ke(t,e))}function rb(t,e){return Ce(t,"POST","/v2/accounts/mfaEnrollment:finalize",ke(t,e))}function ib(t,e){return Ce(t,"POST","/v2/accounts/mfaEnrollment:withdraw",ke(t,e))}class Hp{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>xa._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Hp(e)}async getSession(){return Zr._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await Un(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Un(this.user,ib(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Bd=new WeakMap;function sb(t){const e=J(t);return Bd.has(e)||Bd.set(e,Hp._fromUser(e)),Bd.get(e)}const Au="__sak";/**
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
 */let qE=class{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Au,"1"),this.storage.removeItem(Au),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ob(){const t=te();return jp(t)||$s(t)}const ab=1e3,lb=10;let YE=class extends qE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ob()&&HA(),this.fallbackToPolling=xE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);zA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,lb):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ab)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}};YE.type="LOCAL";const Wp=YE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let JE=class extends qE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}};JE.type="SESSION";const mi=JE;/**
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
 */function ub(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */let XE=class QE{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new QE(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await ub(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};XE.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */let cb=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=La("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const y=p;if(y.data.eventId===c)switch(y.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(){return window}function db(t){be().location.href=t}/**
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
 */function Gp(){return typeof be().WorkerGlobalScope<"u"&&typeof be().importScripts=="function"}async function hb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function pb(){return Gp()?self:null}/**
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
 */const ZE="firebaseLocalStorageDb",mb=1,Nu="firebaseLocalStorage",eI="fbase_key";let Da=class{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}};function kc(t,e){return t.transaction([Nu],e?"readwrite":"readonly").objectStore(Nu)}function gb(){const t=indexedDB.deleteDatabase(ZE);return new Da(t).toPromise()}function cf(){const t=indexedDB.open(ZE,mb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Nu,{keyPath:eI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Nu)?e(r):(r.close(),await gb(),e(await cf()))})})}async function py(t,e,n){const r=kc(t,!0).put({[eI]:e,value:n});return new Da(r).toPromise()}async function vb(t,e){const n=kc(t,!1).get(e),r=await new Da(n).toPromise();return r===void 0?null:r.value}function my(t,e){const n=kc(t,!0).delete(e);return new Da(n).toPromise()}const yb=800,wb=3;let tI=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>wb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=XE._getInstance(pb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await hb(),!this.activeServiceWorker)return;this.sender=new cb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cf();return await py(e,Au,"1"),await my(e,Au),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>py(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>vb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>my(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=kc(i,!1).getAll();return new Da(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};tI.type="LOCAL";const ya=tI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _b(t,e){return Ce(t,"POST","/v2/accounts/mfaSignIn:start",ke(t,e))}function Eb(t,e){return Ce(t,"POST","/v2/accounts/mfaSignIn:finalize",ke(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib=500,Tb=6e4,_l=1e12;class Sb{constructor(e){this.auth=e,this.counter=_l,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new kb(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||_l;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||_l;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||_l;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class kb{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;V(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Cb(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},Tb)},Ib))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Cb(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd=DE("rcb"),Rb=new Na(3e4,6e4);class Pb{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=be().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return V(Ab(n),e,"argument-error"),this.shouldResolveImmediately(n)&&iy(be().grecaptcha)?Promise.resolve(be().grecaptcha):new Promise((r,i)=>{const s=be().setTimeout(()=>{i(Ue(e,"network-request-failed"))},Rb.get());be()[zd]=()=>{be().clearTimeout(s),delete be()[zd];const l=be().grecaptcha;if(!l||!iy(l)){i(Ue(e,"internal-error"));return}const u=l.render;l.render=(c,h)=>{const p=u(c,h);return this.counter++,p},this.hostLanguage=n,r(l)};const o=`${XA()}?${sn({onload:zd,render:"explicit",hl:n})}`;Up(o).catch(()=>{clearTimeout(s),i(Ue(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=be().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Ab(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class Nb{async load(e){return new Sb(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI="recaptcha",bb={theme:"light",type:"image"};let Ob=class{constructor(e,n,r=Object.assign({},bb)){this.parameters=r,this.type=nI,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Se(e),this.isInvisible=this.parameters.size==="invisible",V(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;V(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Nb:new Pb,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){V(!this.parameters.sitekey,this.auth,"argument-error"),V(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),V(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=be()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){V(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){V(Dp()&&!Gp(),this.auth,"internal-error"),await xb(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await NA(this.auth);V(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return V(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function xb(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=ii._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function Lb(t,e,n){if(ue(t.app))return Promise.reject(He(t));const r=Se(t),i=await Cc(r,e,J(n));return new Kp(i,s=>Tc(r,s))}async function Db(t,e,n){const r=J(t);await Ic(!1,r,"phone");const i=await Cc(r.auth,e,J(n));return new Kp(i,s=>zE(r,s))}async function Mb(t,e,n){const r=J(t);if(ue(r.auth.app))return Promise.reject(He(r.auth));const i=await Cc(r.auth,e,J(n));return new Kp(i,s=>HE(r,s))}async function Cc(t,e,n){var r;const i=await n.verify();try{V(typeof i=="string",t,"argument-error"),V(n.type===nI,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return V(o.type==="enroll",t,"internal-error"),(await nb(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{V(o.type==="signin",t,"internal-error");const l=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return V(l,t,"missing-multi-factor-info"),(await _b(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:l,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await yN(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function jb(t,e){const n=J(t);if(ue(n.auth.app))return Promise.reject(He(n.auth));await $p(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gi=class zl{constructor(e){this.providerId=zl.PROVIDER_ID,this.auth=Se(e)}verifyPhoneNumber(e,n){return Cc(this.auth,e,J(n))}static credential(e,n){return ii._fromVerification(e,n)}static credentialFromResult(e){const n=e;return zl.credentialFromTaggedObject(n)}static credentialFromError(e){return zl.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?ii._fromTokenResponse(n,r):null}};gi.PROVIDER_ID="phone";gi.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function ki(t,e){return e?Ct(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */let qp=class extends Fs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return On(e,this._buildIdpRequest())}_linkToIdToken(e,n){return On(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return On(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}};function Ub(t){return BE(t.auth,new qp(t),t.bypassAuthState)}function $b(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),VE(n,new qp(t),t.bypassAuthState)}async function Fb(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),$p(n,new qp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rI=class{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ub;case"linkViaPopup":case"linkViaRedirect":return Fb;case"reauthViaPopup":case"reauthViaRedirect":return $b;default:Ye(this.auth,"internal-error")}}resolve(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb=new Na(2e3,1e4);async function Bb(t,e,n){if(ue(t.app))return Promise.reject(Ue(t,"operation-not-supported-in-this-environment"));const r=Se(t);Us(t,e,Kn);const i=ki(r,n);return new Rc(r,"signInViaPopup",e,i).executeNotNull()}async function zb(t,e,n){const r=J(t);if(ue(r.auth.app))return Promise.reject(Ue(r.auth,"operation-not-supported-in-this-environment"));Us(r.auth,e,Kn);const i=ki(r.auth,n);return new Rc(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function Hb(t,e,n){const r=J(t);Us(r.auth,e,Kn);const i=ki(r.auth,n);return new Rc(r.auth,"linkViaPopup",e,i,r).executeNotNull()}let Rc=class ko extends rI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ko.currentPopupAction&&ko.currentPopupAction.cancel(),ko.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){rn(this.filter.length===1,"Popup operations only handle one event");const e=La();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ue(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ue(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ko.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ue(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Vb.get())};e()}};Rc.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb="pendingRedirect",Uo=new Map;let Gb=class extends rI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Uo.get(this.auth._key());if(!e){try{const r=await Kb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Uo.set(this.auth._key(),e)}return this.bypassAuthState||Uo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function Kb(t,e){const n=sI(e),r=iI(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Yp(t,e){return iI(t)._set(sI(e),"true")}function qb(){Uo.clear()}function Jp(t,e){Uo.set(t._key(),e)}function iI(t){return Ct(t._redirectPersistence)}function sI(t){return ri(Wb,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yb(t,e,n){return Jb(t,e,n)}async function Jb(t,e,n){if(ue(t.app))return Promise.reject(He(t));const r=Se(t);Us(t,e,Kn),await r._initializationPromise;const i=ki(r,n);return await Yp(i,r),i._openRedirect(r,e,"signInViaRedirect")}function Xb(t,e,n){return Qb(t,e,n)}async function Qb(t,e,n){const r=J(t);if(Us(r.auth,e,Kn),ue(r.auth.app))return Promise.reject(He(r.auth));await r.auth._initializationPromise;const i=ki(r.auth,n);await Yp(i,r.auth);const s=await oI(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function Zb(t,e,n){return eO(t,e,n)}async function eO(t,e,n){const r=J(t);Us(r.auth,e,Kn),await r.auth._initializationPromise;const i=ki(r.auth,n);await Ic(!1,r,e.providerId),await Yp(i,r.auth);const s=await oI(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function tO(t,e){return await Se(t)._initializationPromise,Pc(t,e,!1)}async function Pc(t,e,n=!1){if(ue(t.app))return Promise.reject(He(t));const r=Se(t),i=ki(r,e),o=await new Gb(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function oI(t){const e=La(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nO=10*60*1e3;let aI=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!lI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ue(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nO&&this.cachedEventUids.clear(),this.cachedEventUids.has(gy(e))}saveEventToCache(e){this.cachedEventUids.add(gy(e)),this.lastProcessedEventTime=Date.now()}};function gy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function lI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uI(t,e={}){return Ce(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sO=/^https?/;async function oO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await uI(t);for(const n of e)try{if(aO(n))return}catch{}Ye(t,"unauthorized-domain")}function aO(t){const e=pa(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!sO.test(n))return!1;if(iO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const lO=new Na(3e4,6e4);function vy(){const t=be().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function uO(t){return new Promise((e,n)=>{var r,i,s;function o(){vy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vy(),n(Ue(t,"network-request-failed"))},timeout:lO.get()})}if(!((i=(r=be().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=be().gapi)===null||s===void 0)&&s.load)o();else{const l=DE("iframefcb");return be()[l]=()=>{gapi.load?o():n(Ue(t,"network-request-failed"))},Up(`${ZA()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Hl=null,e})}let Hl=null;function cO(t){return Hl=Hl||uO(t),Hl}/**
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
 */const dO=new Na(5e3,15e3),hO="__/auth/iframe",fO="emulator/auth/iframe",pO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gO(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Mp(e,fO):`https://${t.config.authDomain}/${hO}`,r={apiKey:e.apiKey,appName:t.name,v:Lt},i=mO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${sn(r).slice(1)}`}async function vO(t){const e=await cO(t),n=be().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:gO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ue(t,"network-request-failed"),l=be().setTimeout(()=>{s(o)},dO.get());function u(){be().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const yO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wO=500,_O=600,EO="_blank",IO="http://localhost";let yy=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function TO(t,e,n,r=wO,i=_O){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},yO),{width:r.toString(),height:i.toString(),top:s,left:o}),c=te().toLowerCase();n&&(l=AE(c)?EO:n),PE(c)&&(e=e||IO,u.scrollbars="yes");const h=Object.entries(u).reduce((y,[A,I])=>`${y}${A}=${I},`,"");if(BA(c)&&l!=="_self")return SO(e||"",l),new yy(null);const p=window.open(e||"",l,h);V(p,t,"popup-blocked");try{p.focus()}catch{}return new yy(p)}function SO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const kO="__/auth/handler",CO="emulator/auth/handler",RO=encodeURIComponent("fac");async function df(t,e,n,r,i,s){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Lt,eventId:i};if(e instanceof Kn){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",oE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries(s||{}))o[h]=p}if(e instanceof Vs){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const u=await t._getAppCheckToken(),c=u?`#${RO}=${encodeURIComponent(u)}`:"";return`${PO(t)}?${sn(l).slice(1)}${c}`}function PO({config:t}){return t.emulator?Mp(t,CO):`https://${t.authDomain}/${kO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd="webStorageSupport";let AO=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mi,this._completeRedirectFn=Pc,this._overrideRedirectResult=Jp}async _openPopup(e,n,r,i){var s;rn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await df(e,n,r,pa(),i);return TO(e,o,La())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await df(e,n,r,pa(),i);return db(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(rn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await vO(e),r=new aI(e);return n.register("authEvent",i=>(V(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hd,{type:Hd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Hd];o!==void 0&&n(!!o),Ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=oO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xE()||jp()||$s()}};const NO=AO;class bO{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return pn("unexpected MultiFactorSessionType")}}}class Xp extends bO{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Xp(e)}_finalizeEnroll(e,n,r){return rb(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return Eb(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class cI{constructor(){}static assertion(e){return Xp._fromCredential(e)}}cI.FACTOR_ID="phone";var wy="@firebase/auth",_y="1.7.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let OO=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function LO(t){It(new dt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;V(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:LE(t)},c=new YA(r,i,s,u);return rN(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),It(new dt("auth-internal",e=>{const n=Se(e.getProvider("auth").getImmediate());return(r=>new OO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ze(wy,_y,xO(t)),ze(wy,_y,"esm2017")}/**
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
 */const DO=5*60;Rp("authIdTokenMaxAge");function MO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}JA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ue("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",MO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});LO("Browser");/**
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
 */function vi(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jO=2e3;async function UO(t,e,n){var r;const{BuildInfo:i}=vi();rn(e.sessionId,"AuthEvent did not contain a session ID");const s=await zO(e.sessionId),o={};return $s()?o.ibi=i.packageName:ba()?o.apn=i.packageName:Ye(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,df(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function $O(t){const{BuildInfo:e}=vi(),n={};$s()?n.iosBundleId=e.packageName:ba()?n.androidPackageName=e.packageName:Ye(t,"operation-not-supported-in-this-environment"),await uI(t,n)}function FO(t){const{cordova:e}=vi();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,VA()?"_blank":"_system","location=yes"),n(i)})})}async function VO(t,e,n){const{cordova:r}=vi();let i=()=>{};try{await new Promise((s,o)=>{let l=null;function u(){var p;s();const y=(p=r.plugins.browsertab)===null||p===void 0?void 0:p.close;typeof y=="function"&&y(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function c(){l||(l=window.setTimeout(()=>{o(Ue(t,"redirect-cancelled-by-user"))},jO))}function h(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(u),document.addEventListener("resume",c,!1),ba()&&document.addEventListener("visibilitychange",h,!1),i=()=>{e.removePassiveListener(u),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",h,!1),l&&window.clearTimeout(l)}})}finally{i()}}function BO(t){var e,n,r,i,s,o,l,u,c,h;const p=vi();V(typeof((e=p==null?void 0:p.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),V(typeof((n=p==null?void 0:p.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),V(typeof((s=(i=(r=p==null?void 0:p.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),V(typeof((u=(l=(o=p==null?void 0:p.cordova)===null||o===void 0?void 0:o.plugins)===null||l===void 0?void 0:l.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),V(typeof((h=(c=p==null?void 0:p.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||h===void 0?void 0:h.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function zO(t){const e=HO(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function HO(t){if(rn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WO=20;class GO extends aI{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function KO(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:JO(),postBody:null,tenantId:t.tenantId,error:Ue(t,"no-auth-event")}}function qO(t,e){return hf()._set(ff(t),e)}async function Ey(t){const e=await hf()._get(ff(t));return e&&await hf()._remove(ff(t)),e}function YO(t,e){var n,r;const i=QO(e);if(i.includes("/__/auth/callback")){const s=Wl(i),o=s.firebaseError?XO(decodeURIComponent(s.firebaseError)):null,l=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],u=l?Ue(l):null;return u?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function JO(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<WO;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function hf(){return Ct(Wp)}function ff(t){return ri("authEvent",t.config.apiKey,t.name)}function XO(t){try{return JSON.parse(t)}catch{return null}}function QO(t){const e=Wl(t),n=e.link?decodeURIComponent(e.link):void 0,r=Wl(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Wl(i).link||i||r||n||t}function Wl(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return es(n.join("?"))}/**
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
 */const ZO=500;class ex{constructor(){this._redirectPersistence=mi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Pc,this._overrideRedirectResult=Jp}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new GO(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Ye(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){BO(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),qb(),await this._originValidation(e);const o=KO(e,r,i);await qO(e,o);const l=await UO(e,o,n),u=await FO(l);return VO(e,s,u)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$O(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=vi(),o=setTimeout(async()=>{await Ey(e),n.onEvent(Iy())},ZO),l=async h=>{clearTimeout(o);const p=await Ey(e);let y=null;p&&(h!=null&&h.url)&&(y=YO(p,h.url)),n.onEvent(y||Iy())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,l);const u=i,c=`${s.packageName.toLowerCase()}://`;vi().handleOpenURL=async h=>{if(h.toLowerCase().startsWith(c)&&l({url:h}),typeof u=="function")try{u(h)}catch(p){console.error(p)}}}}const tx=ex;function Iy(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Ue("no-auth-event")}}/**
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
 */function nx(t,e){Se(t)._logFramework(e)}var rx="@firebase/auth-compat",ix="0.5.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sx=1e3;function $o(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function ox(){return $o()==="http:"||$o()==="https:"}function dI(t=te()){return!!(($o()==="file:"||$o()==="ionic:"||$o()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function ax(){return hc()||nE()}function lx(){return Pp()&&(document==null?void 0:document.documentMode)===11}function ux(t=te()){return/Edge\/\d+/.test(t)}function cx(t=te()){return lx()||ux(t)}function hI(){try{const t=self.localStorage,e=La();if(t)return t.setItem(e,"1"),t.removeItem(e),cx()?ca():!0}catch{return Qp()&&ca()}return!1}function Qp(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Wd(){return(ox()||dc()||dI())&&!ax()&&hI()&&!Qp()}function fI(){return dI()&&typeof document<"u"}async function dx(){return fI()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},sx);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function hx(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St={LOCAL:"local",NONE:"none",SESSION:"session"},po=V,pI="persistence";function fx(t,e){if(po(Object.values(St).includes(e),t,"invalid-persistence-type"),hc()){po(e!==St.SESSION,t,"unsupported-persistence-type");return}if(nE()){po(e===St.NONE,t,"unsupported-persistence-type");return}if(Qp()){po(e===St.NONE||e===St.LOCAL&&ca(),t,"unsupported-persistence-type");return}po(e===St.NONE||hI(),t,"unsupported-persistence-type")}async function pf(t){await t._initializationPromise;const e=mI(),n=ri(pI,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function px(t,e){const n=mI();if(!n)return[];const r=ri(pI,t,e);switch(n.getItem(r)){case St.NONE:return[Ss];case St.LOCAL:return[ya,mi];case St.SESSION:return[mi];default:return[]}}function mI(){var t;try{return((t=hx())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx=V;class vr{constructor(){this.browserResolver=Ct(NO),this.cordovaResolver=Ct(tx),this.underlyingResolver=null,this._redirectPersistence=mi,this._completeRedirectFn=Pc,this._overrideRedirectResult=Jp}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return fI()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return mx(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await dx();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(t){return t.unwrap()}function gx(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vx(t){return vI(t)}function yx(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new wx(t,tb(t,e))}else if(r){const i=vI(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function vI(t){const{_tokenResponse:e}=t instanceof Le?t.customData:t;if(!e)return null;if(!(t instanceof Le)&&"temporaryProof"in e&&"phoneNumber"in e)return gi.credentialFromResult(t);const n=e.providerId;if(!n||n===fo.PASSWORD)return null;let r;switch(n){case fo.GOOGLE:r=wc;break;case fo.FACEBOOK:r=yc;break;case fo.GITHUB:r=_c;break;case fo.TWITTER:r=Ec;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:l,nonce:u}=e;return!s&&!o&&!i&&!l?null:l?n.startsWith("saml.")?ks._create(n,l):pi._fromParams({providerId:n,signInMethod:n,pendingToken:l,idToken:i,accessToken:s}):new us(n).credential({idToken:i,accessToken:s,rawNonce:u})}return t instanceof Le?r.credentialFromError(t):r.credentialFromResult(t)}function pt(t,e){return e.catch(n=>{throw n instanceof Le&&yx(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:vx(n),additionalUserInfo:eb(n),user:Ac.getOrCreate(i)}})}async function mf(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>pt(t,n.confirm(r))}}class wx{constructor(e,n){this.resolver=n,this.auth=gx(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return pt(gI(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ac=class Co{constructor(e){this._delegate=e,this.multiFactor=sb(e)}static getOrCreate(e){return Co.USER_MAP.has(e)||Co.USER_MAP.set(e,new Co(e)),Co.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return pt(this.auth,zE(this._delegate,e))}async linkWithPhoneNumber(e,n){return mf(this.auth,Db(this._delegate,e,n))}async linkWithPopup(e){return pt(this.auth,Hb(this._delegate,e,vr))}async linkWithRedirect(e){return await pf(Se(this.auth)),Zb(this._delegate,e,vr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return pt(this.auth,HE(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return mf(this.auth,Mb(this._delegate,e,n))}reauthenticateWithPopup(e){return pt(this.auth,zb(this._delegate,e,vr))}async reauthenticateWithRedirect(e){return await pf(Se(this.auth)),Xb(this._delegate,e,vr)}sendEmailVerification(e){return zN(this._delegate,e)}async unlink(e){return await AN(this._delegate,e),this}updateEmail(e){return KN(this._delegate,e)}updatePassword(e){return qN(this._delegate,e)}updatePhoneNumber(e){return jb(this._delegate,e)}updateProfile(e){return GN(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return HN(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};Ac.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=V;class gf{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;mo(r,"invalid-api-key",{appName:e.name}),mo(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?vr:void 0;this._delegate=n.initialize({options:{persistence:_x(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(_A),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Ac.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){iN(this._delegate,e,n)}applyActionCode(e){return LN(this._delegate,e)}checkActionCode(e){return WE(this._delegate,e)}confirmPasswordReset(e,n){return xN(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return pt(this._delegate,MN(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return BN(this._delegate,e)}isSignInWithEmailLink(e){return $N(this._delegate,e)}async getRedirectResult(){mo(Wd(),this._delegate,"operation-not-supported-in-this-environment");const e=await tO(this._delegate,vr);return e?pt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){nx(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=Ty(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=Ty(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return UN(this._delegate,e,n)}sendPasswordResetEmail(e,n){return ON(this._delegate,e,n||void 0)}async setPersistence(e){fx(this._delegate,e);let n;switch(e){case St.SESSION:n=mi;break;case St.LOCAL:n=await Ct(ya)._isAvailable()?ya:Wp;break;case St.NONE:n=Ss;break;default:return Ye("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return pt(this._delegate,RN(this._delegate))}signInWithCredential(e){return pt(this._delegate,Tc(this._delegate,e))}signInWithCustomToken(e){return pt(this._delegate,bN(this._delegate,e))}signInWithEmailAndPassword(e,n){return pt(this._delegate,jN(this._delegate,e,n))}signInWithEmailLink(e,n){return pt(this._delegate,FN(this._delegate,e,n))}signInWithPhoneNumber(e,n){return mf(this._delegate,Lb(this._delegate,e,n))}async signInWithPopup(e){return mo(Wd(),this._delegate,"operation-not-supported-in-this-environment"),pt(this._delegate,Bb(this._delegate,e,vr))}async signInWithRedirect(e){return mo(Wd(),this._delegate,"operation-not-supported-in-this-environment"),await pf(this._delegate),Yb(this._delegate,e,vr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return DN(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}gf.Persistence=St;function Ty(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Ac.getOrCreate(o)),error:e,complete:n}}function _x(t,e){const n=px(t,e);if(typeof self<"u"&&!n.includes(ya)&&n.push(ya),typeof window<"u")for(const r of[Wp,mi])n.includes(r)||n.push(r);return n.includes(Ss)||n.push(Ss),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(){this.providerId="phone",this._delegate=new gi(gI(Aa.auth()))}static credential(e,n){return gi.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Zp.PHONE_SIGN_IN_METHOD=gi.PHONE_SIGN_IN_METHOD;Zp.PROVIDER_ID=gi.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ex=V;class Ix{constructor(e,n,r=Aa.app()){var i;Ex((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new Ob(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx="auth-compat";function Sx(t){t.INTERNAL.registerComponent(new dt(Tx,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new gf(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:xi.EMAIL_SIGNIN,PASSWORD_RESET:xi.PASSWORD_RESET,RECOVER_EMAIL:xi.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:xi.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:xi.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:xi.VERIFY_EMAIL}},EmailAuthProvider:Ur,FacebookAuthProvider:yc,GithubAuthProvider:_c,GoogleAuthProvider:wc,OAuthProvider:us,SAMLAuthProvider:Pu,PhoneAuthProvider:Zp,PhoneMultiFactorGenerator:cI,RecaptchaVerifier:Ix,TwitterAuthProvider:Ec,Auth:gf,AuthCredential:Fs,Error:Le}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(rx,ix)}Sx(Aa);var kx="firebase",Cx="10.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ze(kx,Cx,"app");/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const Rx={};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function El(t){return Object.isFrozen(t)&&Object.isFrozen(t.raw)}function Il(t){return t.toString().indexOf("`")===-1}Il(t=>t``)||Il(t=>t`\0`)||Il(t=>t`\n`)||Il(t=>t`\u0000`);El``&&El`\0`&&El`\n`&&El`\u0000`;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */let yI="google#safe";function Px(){if(typeof window<"u")return window.trustedTypes}function wI(){var t;return yI!==""&&(t=Px())!==null&&t!==void 0?t:null}let Tl;function Ax(){var t,e;if(Tl===void 0)try{Tl=(e=(t=wI())===null||t===void 0?void 0:t.createPolicy(yI,{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n}))!==null&&e!==void 0?e:null}catch{Tl=null}return Tl}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */class _I{constructor(e,n){this.privateDoNotAccessOrElseWrappedResourceUrl=e}toString(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()}}function Sy(t){var e;const n=t,r=(e=Ax())===null||e===void 0?void 0:e.createScriptURL(n);return r??new _I(n,Rx)}function Nx(t){var e;if(!((e=wI())===null||e===void 0)&&e.isScriptURL(t))return t;if(t instanceof _I)return t.privateDoNotAccessOrElseWrappedResourceUrl;{let n="";throw new Error(n)}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function bx(t,...e){if(e.length===0)return Sy(t[0]);t[0].toLowerCase();let n=t[0];for(let r=0;r<e.length;r++)n+=encodeURIComponent(e[r])+t[r+1];return Sy(n)}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Ox(t){return xx("script",t)}function xx(t,e){var n;const r=e.document,i=(n=r.querySelector)===null||n===void 0?void 0:n.call(r,`${t}[nonce]`);return i&&(i.nonce||i.getAttribute("nonce"))||""}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Lx(t){const e=t.ownerDocument&&t.ownerDocument.defaultView,n=Ox(e||window);n&&t.setAttribute("nonce",n)}function Dx(t,e,n){t.src=Nx(e),Lx(t)}const EI="@firebase/installations",em="0.6.8";/**
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
 */const II=1e4,TI=`w:${em}`,SI="FIS_v2",Mx="https://firebaseinstallations.googleapis.com/v1",jx=60*60*1e3,Ux="installations",$x="Installations";/**
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
 */const Fx={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},yi=new Gt(Ux,$x,Fx);function kI(t){return t instanceof Le&&t.code.includes("request-failed")}/**
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
 */function CI({projectId:t}){return`${Mx}/projects/${t}/installations`}function RI(t){return{token:t.token,requestStatus:2,expiresIn:Bx(t.expiresIn),creationTime:Date.now()}}async function PI(t,e){const r=(await e.json()).error;return yi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function AI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Vx(t,{refreshToken:e}){const n=AI(t);return n.append("Authorization",zx(e)),n}async function NI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Bx(t){return Number(t.replace("s","000"))}function zx(t){return`${SI} ${t}`}/**
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
 */async function Hx({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=CI(t),i=AI(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:SI,appId:t.appId,sdkVersion:TI},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await NI(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:RI(c.authToken)}}else throw await PI("Create Installation",u)}/**
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
 */function bI(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Wx(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Gx=/^[cdef][\w-]{21}$/,vf="";function Kx(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=qx(t);return Gx.test(n)?n:vf}catch{return vf}}function qx(t){return Wx(t).substr(0,22)}/**
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
 */function Nc(t){return`${t.appName}!${t.appId}`}/**
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
 */const OI=new Map;function xI(t,e){const n=Nc(t);LI(n,e),Yx(n,e)}function LI(t,e){const n=OI.get(t);if(n)for(const r of n)r(e)}function Yx(t,e){const n=Jx();n&&n.postMessage({key:t,fid:e}),Xx()}let ei=null;function Jx(){return!ei&&"BroadcastChannel"in self&&(ei=new BroadcastChannel("[Firebase] FID Change"),ei.onmessage=t=>{LI(t.data.key,t.data.fid)}),ei}function Xx(){OI.size===0&&ei&&(ei.close(),ei=null)}/**
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
 */const Qx="firebase-installations-database",Zx=1,wi="firebase-installations-store";let Gd=null;function tm(){return Gd||(Gd=dE(Qx,Zx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(wi)}}})),Gd}async function bu(t,e){const n=Nc(t),i=(await tm()).transaction(wi,"readwrite"),s=i.objectStore(wi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&xI(t,e.fid),e}async function DI(t){const e=Nc(t),r=(await tm()).transaction(wi,"readwrite");await r.objectStore(wi).delete(e),await r.done}async function bc(t,e){const n=Nc(t),i=(await tm()).transaction(wi,"readwrite"),s=i.objectStore(wi),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&xI(t,l.fid),l}/**
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
 */async function nm(t){let e;const n=await bc(t.appConfig,r=>{const i=eL(r),s=tL(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===vf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function eL(t){const e=t||{fid:Kx(),registrationStatus:0};return MI(e)}function tL(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(yi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=nL(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:rL(t)}:{installationEntry:e}}async function nL(t,e){try{const n=await Hx(t,e);return bu(t.appConfig,n)}catch(n){throw kI(n)&&n.customData.serverCode===409?await DI(t.appConfig):await bu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function rL(t){let e=await ky(t.appConfig);for(;e.registrationStatus===1;)await bI(100),e=await ky(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await nm(t);return r||n}return e}function ky(t){return bc(t,e=>{if(!e)throw yi.create("installation-not-found");return MI(e)})}function MI(t){return iL(t)?{fid:t.fid,registrationStatus:0}:t}function iL(t){return t.registrationStatus===1&&t.registrationTime+II<Date.now()}/**
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
 */async function sL({appConfig:t,heartbeatServiceProvider:e},n){const r=oL(t,n),i=Vx(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:TI,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await NI(()=>fetch(r,l));if(u.ok){const c=await u.json();return RI(c)}else throw await PI("Generate Auth Token",u)}function oL(t,{fid:e}){return`${CI(t)}/${e}/authTokens:generate`}/**
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
 */async function rm(t,e=!1){let n;const r=await bc(t.appConfig,s=>{if(!jI(s))throw yi.create("not-registered");const o=s.authToken;if(!e&&uL(o))return s;if(o.requestStatus===1)return n=aL(t,e),s;{if(!navigator.onLine)throw yi.create("app-offline");const l=dL(s);return n=lL(t,l),l}});return n?await n:r.authToken}async function aL(t,e){let n=await Cy(t.appConfig);for(;n.authToken.requestStatus===1;)await bI(100),n=await Cy(t.appConfig);const r=n.authToken;return r.requestStatus===0?rm(t,e):r}function Cy(t){return bc(t,e=>{if(!jI(e))throw yi.create("not-registered");const n=e.authToken;return hL(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function lL(t,e){try{const n=await sL(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await bu(t.appConfig,r),n}catch(n){if(kI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await DI(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await bu(t.appConfig,r)}throw n}}function jI(t){return t!==void 0&&t.registrationStatus===2}function uL(t){return t.requestStatus===2&&!cL(t)}function cL(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+jx}function dL(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function hL(t){return t.requestStatus===1&&t.requestTime+II<Date.now()}/**
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
 */async function fL(t){const e=t,{installationEntry:n,registrationPromise:r}=await nm(e);return r?r.catch(console.error):rm(e).catch(console.error),n.fid}/**
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
 */async function pL(t,e=!1){const n=t;return await mL(n),(await rm(n,e)).token}async function mL(t){const{registrationPromise:e}=await nm(t);e&&await e}/**
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
 */function gL(t){if(!t||!t.options)throw Kd("App Configuration");if(!t.name)throw Kd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Kd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Kd(t){return yi.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI="installations",vL="installations-internal",yL=t=>{const e=t.getProvider("app").getImmediate(),n=gL(e),r=Wn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},wL=t=>{const e=t.getProvider("app").getImmediate(),n=Wn(e,UI).getImmediate();return{getId:()=>fL(n),getToken:i=>pL(n,i)}};function _L(){It(new dt(UI,yL,"PUBLIC")),It(new dt(vL,wL,"PRIVATE"))}_L();ze(EI,em);ze(EI,em,"esm2017");/**
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
 */const Ou="analytics",EL="firebase_id",IL="origin",TL=60*1e3,SL="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",kL="https://www.googletagmanager.com/gtag/js";/**
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
 */const At=new Ms("@firebase/analytics");/**
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
 */function $I(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function CL(t,e){const n=document.createElement("script"),r=bx`https://www.googletagmanager.com/gtag/js?l=${t}&id=${e}`;Dx(n,r),n.async=!0,document.head.appendChild(n)}function RL(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function PL(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await $I(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){At.error(l)}t("config",i,s)}async function AL(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await $I(n);for(const u of o){const c=l.find(p=>p.measurementId===u),h=c&&e[c.appId];if(h)s.push(h);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){At.error(s)}}function NL(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await AL(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await PL(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){At.error(l)}}return i}function bL(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=NL(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function OL(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(kL)&&n.src.includes(t))return n;return null}/**
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
 */const xL={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Vt=new Gt("analytics","Analytics",xL);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LL=30,DL=1e3;class ML{constructor(e={},n=DL){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const FI=new ML;function jL(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function UL(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:jL(r)},s=SL.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw Vt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function $L(t,e=FI,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Vt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Vt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new BL;return setTimeout(async()=>{l.abort()},TL),VI({appId:r,apiKey:i,measurementId:s},o,l,e)}async function VI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=FI){var s;const{appId:o,measurementId:l}=t;try{await FL(r,e)}catch(u){if(l)return At.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await UL(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!VL(c)){if(i.deleteThrottleMetadata(o),l)return At.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw u}const h=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?qv(n,i.intervalMillis,LL):qv(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(o,p),At.debug(`Calling attemptFetch again in ${h} millis`),VI(t,p,r,i)}}function FL(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Vt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function VL(t){if(!(t instanceof Le)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class BL{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function zL(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HL(){if(ca())try{await sE()}catch(t){return At.warn(Vt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return At.warn(Vt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function WL(t,e,n,r,i,s,o){var l;const u=$L(t);u.then(A=>{n[A.measurementId]=A.appId,t.options.measurementId&&A.measurementId!==t.options.measurementId&&At.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${A.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(A=>At.error(A)),e.push(u);const c=HL().then(A=>{if(A)return r.getId()}),[h,p]=await Promise.all([u,c]);OL(s)||CL(s,h.measurementId),i("js",new Date);const y=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return y[IL]="firebase",y.update=!0,p!=null&&(y[EL]=p),i("config",h.measurementId,y),h.measurementId}/**
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
 */class GL{constructor(e){this.app=e}_delete(){return delete Fo[this.app.options.appId],Promise.resolve()}}let Fo={},Ry=[];const Py={};let qd="dataLayer",KL="gtag",Ay,BI,Ny=!1;function qL(){const t=[];if(dc()&&t.push("This is a browser extension environment."),WR()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Vt.create("invalid-analytics-context",{errorInfo:e});At.warn(n.message)}}function YL(t,e,n){qL();const r=t.options.appId;if(!r)throw Vt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)At.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Vt.create("no-api-key");if(Fo[r]!=null)throw Vt.create("already-exists",{id:r});if(!Ny){RL(qd);const{wrappedGtag:s,gtagCore:o}=bL(Fo,Ry,Py,qd,KL);BI=s,Ay=o,Ny=!0}return Fo[r]=WL(t,Ry,Py,e,Ay,qd,n),new GL(t)}function JL(t=pc()){t=J(t);const e=Wn(t,Ou);return e.isInitialized()?e.getImmediate():XL(t)}function XL(t,e={}){const n=Wn(t,Ou);if(n.isInitialized()){const i=n.getImmediate();if(da(e,n.getOptions()))return i;throw Vt.create("already-initialized")}return n.initialize({options:e})}function QL(t,e,n,r){t=J(t),zL(BI,Fo[t.app.options.appId],e,n,r).catch(i=>At.error(i))}const by="@firebase/analytics",Oy="0.10.6";function ZL(){It(new dt(Ou,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return YL(r,i,n)},"PUBLIC")),It(new dt("analytics-internal",t,"PRIVATE")),ze(by,Oy),ze(by,Oy,"esm2017");function t(e){try{const n=e.getProvider(Ou).getImmediate();return{logEvent:(r,i,s)=>QL(n,r,i,s)}}catch(n){throw Vt.create("interop-component-reg-failed",{reason:n})}}}ZL();var xy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,g){function T(){}T.prototype=g.prototype,E.D=g.prototype,E.prototype=new T,E.prototype.constructor=E,E.C=function(C,P,b){for(var S=Array(arguments.length-2),X=2;X<arguments.length;X++)S[X-2]=arguments[X];return g.prototype[P].apply(C,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,g,T){T||(T=0);var C=Array(16);if(typeof g=="string")for(var P=0;16>P;++P)C[P]=g.charCodeAt(T++)|g.charCodeAt(T++)<<8|g.charCodeAt(T++)<<16|g.charCodeAt(T++)<<24;else for(P=0;16>P;++P)C[P]=g[T++]|g[T++]<<8|g[T++]<<16|g[T++]<<24;g=E.g[0],T=E.g[1],P=E.g[2];var b=E.g[3],S=g+(b^T&(P^b))+C[0]+3614090360&4294967295;g=T+(S<<7&4294967295|S>>>25),S=b+(P^g&(T^P))+C[1]+3905402710&4294967295,b=g+(S<<12&4294967295|S>>>20),S=P+(T^b&(g^T))+C[2]+606105819&4294967295,P=b+(S<<17&4294967295|S>>>15),S=T+(g^P&(b^g))+C[3]+3250441966&4294967295,T=P+(S<<22&4294967295|S>>>10),S=g+(b^T&(P^b))+C[4]+4118548399&4294967295,g=T+(S<<7&4294967295|S>>>25),S=b+(P^g&(T^P))+C[5]+1200080426&4294967295,b=g+(S<<12&4294967295|S>>>20),S=P+(T^b&(g^T))+C[6]+2821735955&4294967295,P=b+(S<<17&4294967295|S>>>15),S=T+(g^P&(b^g))+C[7]+4249261313&4294967295,T=P+(S<<22&4294967295|S>>>10),S=g+(b^T&(P^b))+C[8]+1770035416&4294967295,g=T+(S<<7&4294967295|S>>>25),S=b+(P^g&(T^P))+C[9]+2336552879&4294967295,b=g+(S<<12&4294967295|S>>>20),S=P+(T^b&(g^T))+C[10]+4294925233&4294967295,P=b+(S<<17&4294967295|S>>>15),S=T+(g^P&(b^g))+C[11]+2304563134&4294967295,T=P+(S<<22&4294967295|S>>>10),S=g+(b^T&(P^b))+C[12]+1804603682&4294967295,g=T+(S<<7&4294967295|S>>>25),S=b+(P^g&(T^P))+C[13]+4254626195&4294967295,b=g+(S<<12&4294967295|S>>>20),S=P+(T^b&(g^T))+C[14]+2792965006&4294967295,P=b+(S<<17&4294967295|S>>>15),S=T+(g^P&(b^g))+C[15]+1236535329&4294967295,T=P+(S<<22&4294967295|S>>>10),S=g+(P^b&(T^P))+C[1]+4129170786&4294967295,g=T+(S<<5&4294967295|S>>>27),S=b+(T^P&(g^T))+C[6]+3225465664&4294967295,b=g+(S<<9&4294967295|S>>>23),S=P+(g^T&(b^g))+C[11]+643717713&4294967295,P=b+(S<<14&4294967295|S>>>18),S=T+(b^g&(P^b))+C[0]+3921069994&4294967295,T=P+(S<<20&4294967295|S>>>12),S=g+(P^b&(T^P))+C[5]+3593408605&4294967295,g=T+(S<<5&4294967295|S>>>27),S=b+(T^P&(g^T))+C[10]+38016083&4294967295,b=g+(S<<9&4294967295|S>>>23),S=P+(g^T&(b^g))+C[15]+3634488961&4294967295,P=b+(S<<14&4294967295|S>>>18),S=T+(b^g&(P^b))+C[4]+3889429448&4294967295,T=P+(S<<20&4294967295|S>>>12),S=g+(P^b&(T^P))+C[9]+568446438&4294967295,g=T+(S<<5&4294967295|S>>>27),S=b+(T^P&(g^T))+C[14]+3275163606&4294967295,b=g+(S<<9&4294967295|S>>>23),S=P+(g^T&(b^g))+C[3]+4107603335&4294967295,P=b+(S<<14&4294967295|S>>>18),S=T+(b^g&(P^b))+C[8]+1163531501&4294967295,T=P+(S<<20&4294967295|S>>>12),S=g+(P^b&(T^P))+C[13]+2850285829&4294967295,g=T+(S<<5&4294967295|S>>>27),S=b+(T^P&(g^T))+C[2]+4243563512&4294967295,b=g+(S<<9&4294967295|S>>>23),S=P+(g^T&(b^g))+C[7]+1735328473&4294967295,P=b+(S<<14&4294967295|S>>>18),S=T+(b^g&(P^b))+C[12]+2368359562&4294967295,T=P+(S<<20&4294967295|S>>>12),S=g+(T^P^b)+C[5]+4294588738&4294967295,g=T+(S<<4&4294967295|S>>>28),S=b+(g^T^P)+C[8]+2272392833&4294967295,b=g+(S<<11&4294967295|S>>>21),S=P+(b^g^T)+C[11]+1839030562&4294967295,P=b+(S<<16&4294967295|S>>>16),S=T+(P^b^g)+C[14]+4259657740&4294967295,T=P+(S<<23&4294967295|S>>>9),S=g+(T^P^b)+C[1]+2763975236&4294967295,g=T+(S<<4&4294967295|S>>>28),S=b+(g^T^P)+C[4]+1272893353&4294967295,b=g+(S<<11&4294967295|S>>>21),S=P+(b^g^T)+C[7]+4139469664&4294967295,P=b+(S<<16&4294967295|S>>>16),S=T+(P^b^g)+C[10]+3200236656&4294967295,T=P+(S<<23&4294967295|S>>>9),S=g+(T^P^b)+C[13]+681279174&4294967295,g=T+(S<<4&4294967295|S>>>28),S=b+(g^T^P)+C[0]+3936430074&4294967295,b=g+(S<<11&4294967295|S>>>21),S=P+(b^g^T)+C[3]+3572445317&4294967295,P=b+(S<<16&4294967295|S>>>16),S=T+(P^b^g)+C[6]+76029189&4294967295,T=P+(S<<23&4294967295|S>>>9),S=g+(T^P^b)+C[9]+3654602809&4294967295,g=T+(S<<4&4294967295|S>>>28),S=b+(g^T^P)+C[12]+3873151461&4294967295,b=g+(S<<11&4294967295|S>>>21),S=P+(b^g^T)+C[15]+530742520&4294967295,P=b+(S<<16&4294967295|S>>>16),S=T+(P^b^g)+C[2]+3299628645&4294967295,T=P+(S<<23&4294967295|S>>>9),S=g+(P^(T|~b))+C[0]+4096336452&4294967295,g=T+(S<<6&4294967295|S>>>26),S=b+(T^(g|~P))+C[7]+1126891415&4294967295,b=g+(S<<10&4294967295|S>>>22),S=P+(g^(b|~T))+C[14]+2878612391&4294967295,P=b+(S<<15&4294967295|S>>>17),S=T+(b^(P|~g))+C[5]+4237533241&4294967295,T=P+(S<<21&4294967295|S>>>11),S=g+(P^(T|~b))+C[12]+1700485571&4294967295,g=T+(S<<6&4294967295|S>>>26),S=b+(T^(g|~P))+C[3]+2399980690&4294967295,b=g+(S<<10&4294967295|S>>>22),S=P+(g^(b|~T))+C[10]+4293915773&4294967295,P=b+(S<<15&4294967295|S>>>17),S=T+(b^(P|~g))+C[1]+2240044497&4294967295,T=P+(S<<21&4294967295|S>>>11),S=g+(P^(T|~b))+C[8]+1873313359&4294967295,g=T+(S<<6&4294967295|S>>>26),S=b+(T^(g|~P))+C[15]+4264355552&4294967295,b=g+(S<<10&4294967295|S>>>22),S=P+(g^(b|~T))+C[6]+2734768916&4294967295,P=b+(S<<15&4294967295|S>>>17),S=T+(b^(P|~g))+C[13]+1309151649&4294967295,T=P+(S<<21&4294967295|S>>>11),S=g+(P^(T|~b))+C[4]+4149444226&4294967295,g=T+(S<<6&4294967295|S>>>26),S=b+(T^(g|~P))+C[11]+3174756917&4294967295,b=g+(S<<10&4294967295|S>>>22),S=P+(g^(b|~T))+C[2]+718787259&4294967295,P=b+(S<<15&4294967295|S>>>17),S=T+(b^(P|~g))+C[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(P+(S<<21&4294967295|S>>>11))&4294967295,E.g[2]=E.g[2]+P&4294967295,E.g[3]=E.g[3]+b&4294967295}r.prototype.u=function(E,g){g===void 0&&(g=E.length);for(var T=g-this.blockSize,C=this.B,P=this.h,b=0;b<g;){if(P==0)for(;b<=T;)i(this,E,b),b+=this.blockSize;if(typeof E=="string"){for(;b<g;)if(C[P++]=E.charCodeAt(b++),P==this.blockSize){i(this,C),P=0;break}}else for(;b<g;)if(C[P++]=E[b++],P==this.blockSize){i(this,C),P=0;break}}this.h=P,this.o+=g},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;var T=8*this.o;for(g=E.length-8;g<E.length;++g)E[g]=T&255,T/=256;for(this.u(E),E=Array(16),g=T=0;4>g;++g)for(var C=0;32>C;C+=8)E[T++]=this.g[g]>>>C&255;return E};function s(E,g){var T=l;return Object.prototype.hasOwnProperty.call(T,E)?T[E]:T[E]=g(E)}function o(E,g){this.h=g;for(var T=[],C=!0,P=E.length-1;0<=P;P--){var b=E[P]|0;C&&b==g||(T[P]=b,C=!1)}this.g=T}var l={};function u(E){return-128<=E&&128>E?s(E,function(g){return new o([g|0],0>g?-1:0)}):new o([E|0],0>E?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return N(c(-E));for(var g=[],T=1,C=0;E>=T;C++)g[C]=E/T|0,T*=4294967296;return new o(g,0)}function h(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return N(h(E.substring(1),g));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=c(Math.pow(g,8)),C=p,P=0;P<E.length;P+=8){var b=Math.min(8,E.length-P),S=parseInt(E.substring(P,P+b),g);8>b?(b=c(Math.pow(g,b)),C=C.j(b).add(c(S))):(C=C.j(T),C=C.add(c(S)))}return C}var p=u(0),y=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(O(this))return-N(this).m();for(var E=0,g=1,T=0;T<this.g.length;T++){var C=this.i(T);E+=(0<=C?C:4294967296+C)*g,g*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(I(this))return"0";if(O(this))return"-"+N(this).toString(E);for(var g=c(Math.pow(E,6)),T=this,C="";;){var P=x(T,g).g;T=R(T,P.j(g));var b=((0<T.g.length?T.g[0]:T.h)>>>0).toString(E);if(T=P,I(T))return b+C;for(;6>b.length;)b="0"+b;C=b+C}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function I(E){if(E.h!=0)return!1;for(var g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function O(E){return E.h==-1}t.l=function(E){return E=R(this,E),O(E)?-1:I(E)?0:1};function N(E){for(var g=E.g.length,T=[],C=0;C<g;C++)T[C]=~E.g[C];return new o(T,~E.h).add(y)}t.abs=function(){return O(this)?N(this):this},t.add=function(E){for(var g=Math.max(this.g.length,E.g.length),T=[],C=0,P=0;P<=g;P++){var b=C+(this.i(P)&65535)+(E.i(P)&65535),S=(b>>>16)+(this.i(P)>>>16)+(E.i(P)>>>16);C=S>>>16,b&=65535,S&=65535,T[P]=S<<16|b}return new o(T,T[T.length-1]&-2147483648?-1:0)};function R(E,g){return E.add(N(g))}t.j=function(E){if(I(this)||I(E))return p;if(O(this))return O(E)?N(this).j(N(E)):N(N(this).j(E));if(O(E))return N(this.j(N(E)));if(0>this.l(A)&&0>E.l(A))return c(this.m()*E.m());for(var g=this.g.length+E.g.length,T=[],C=0;C<2*g;C++)T[C]=0;for(C=0;C<this.g.length;C++)for(var P=0;P<E.g.length;P++){var b=this.i(C)>>>16,S=this.i(C)&65535,X=E.i(P)>>>16,ae=E.i(P)&65535;T[2*C+2*P]+=S*ae,_(T,2*C+2*P),T[2*C+2*P+1]+=b*ae,_(T,2*C+2*P+1),T[2*C+2*P+1]+=S*X,_(T,2*C+2*P+1),T[2*C+2*P+2]+=b*X,_(T,2*C+2*P+2)}for(C=0;C<g;C++)T[C]=T[2*C+1]<<16|T[2*C];for(C=g;C<2*g;C++)T[C]=0;return new o(T,0)};function _(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function k(E,g){this.g=E,this.h=g}function x(E,g){if(I(g))throw Error("division by zero");if(I(E))return new k(p,p);if(O(E))return g=x(N(E),g),new k(N(g.g),N(g.h));if(O(g))return g=x(E,N(g)),new k(N(g.g),g.h);if(30<E.g.length){if(O(E)||O(g))throw Error("slowDivide_ only works with positive integers.");for(var T=y,C=g;0>=C.l(E);)T=D(T),C=D(C);var P=M(T,1),b=M(C,1);for(C=M(C,2),T=M(T,2);!I(C);){var S=b.add(C);0>=S.l(E)&&(P=P.add(T),b=S),C=M(C,1),T=M(T,1)}return g=R(E,P.j(g)),new k(P,g)}for(P=p;0<=E.l(g);){for(T=Math.max(1,Math.floor(E.m()/g.m())),C=Math.ceil(Math.log(T)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),b=c(T),S=b.j(g);O(S)||0<S.l(E);)T-=C,b=c(T),S=b.j(g);I(b)&&(b=y),P=P.add(b),E=R(E,S)}return new k(P,E)}t.A=function(E){return x(this,E).h},t.and=function(E){for(var g=Math.max(this.g.length,E.g.length),T=[],C=0;C<g;C++)T[C]=this.i(C)&E.i(C);return new o(T,this.h&E.h)},t.or=function(E){for(var g=Math.max(this.g.length,E.g.length),T=[],C=0;C<g;C++)T[C]=this.i(C)|E.i(C);return new o(T,this.h|E.h)},t.xor=function(E){for(var g=Math.max(this.g.length,E.g.length),T=[],C=0;C<g;C++)T[C]=this.i(C)^E.i(C);return new o(T,this.h^E.h)};function D(E){for(var g=E.g.length+1,T=[],C=0;C<g;C++)T[C]=E.i(C)<<1|E.i(C-1)>>>31;return new o(T,E.h)}function M(E,g){var T=g>>5;g%=32;for(var C=E.g.length-T,P=[],b=0;b<C;b++)P[b]=0<g?E.i(b+T)>>>g|E.i(b+T+1)<<32-g:E.i(b+T);return new o(P,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,zI=o}).apply(typeof xy<"u"?xy:typeof self<"u"?self:typeof window<"u"?window:{});var Sl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,f){return a==Array.prototype||a==Object.prototype||(a[d]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Sl=="object"&&Sl];for(var d=0;d<a.length;++d){var f=a[d];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,d){if(d)e:{var f=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var L=a[v];if(!(L in f))break e;f=f[L]}a=a[a.length-1],v=f[a],d=d(v),d!=v&&d!=null&&e(f,a,{configurable:!0,writable:!0,value:d})}}function s(a,d){a instanceof String&&(a+="");var f=0,v=!1,L={next:function(){if(!v&&f<a.length){var j=f++;return{value:d(j,a[j]),done:!1}}return v=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}i("Array.prototype.values",function(a){return a||function(){return s(this,function(d,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function c(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function h(a,d,f){return a.call.apply(a.bind,arguments)}function p(a,d,f){if(!a)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,v),a.apply(d,L)}}return function(){return a.apply(d,arguments)}}function y(a,d,f){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:p,y.apply(null,arguments)}function A(a,d){var f=Array.prototype.slice.call(arguments,1);return function(){var v=f.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function I(a,d){function f(){}f.prototype=d.prototype,a.aa=d.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(v,L,j){for(var B=Array(arguments.length-2),he=2;he<arguments.length;he++)B[he-2]=arguments[he];return d.prototype[L].apply(v,B)}}function O(a){const d=a.length;if(0<d){const f=Array(d);for(let v=0;v<d;v++)f[v]=a[v];return f}return[]}function N(a,d){for(let f=1;f<arguments.length;f++){const v=arguments[f];if(u(v)){const L=a.length||0,j=v.length||0;a.length=L+j;for(let B=0;B<j;B++)a[L+B]=v[B]}else a.push(v)}}class R{constructor(d,f){this.i=d,this.j=f,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function _(a){return/^[\s\xa0]*$/.test(a)}function k(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function x(a){return x[" "](a),a}x[" "]=function(){};var D=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function M(a,d,f){for(const v in a)d.call(f,a[v],v,a)}function E(a,d){for(const f in a)d.call(void 0,a[f],f,a)}function g(a){const d={};for(const f in a)d[f]=a[f];return d}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(a,d){let f,v;for(let L=1;L<arguments.length;L++){v=arguments[L];for(f in v)a[f]=v[f];for(let j=0;j<T.length;j++)f=T[j],Object.prototype.hasOwnProperty.call(v,f)&&(a[f]=v[f])}}function P(a){var d=1;a=a.split(":");const f=[];for(;0<d&&a.length;)f.push(a.shift()),d--;return a.length&&f.push(a.join(":")),f}function b(a){l.setTimeout(()=>{throw a},0)}function S(){var a=z;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class X{constructor(){this.h=this.g=null}add(d,f){const v=ae.get();v.set(d,f),this.h?this.h.next=v:this.g=v,this.h=v}}var ae=new R(()=>new $,a=>a.reset());class ${constructor(){this.next=this.g=this.h=null}set(d,f){this.h=d,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let H,U=!1,z=new X,W=()=>{const a=l.Promise.resolve(void 0);H=()=>{a.then(Y)}};var Y=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(f){b(f)}var d=ae;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}U=!1};function K(){this.s=this.s,this.C=this.C}K.prototype.s=!1,K.prototype.ma=function(){this.s||(this.s=!0,this.N())},K.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ne(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}ne.prototype.h=function(){this.defaultPrevented=!0};var Ie=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,d),l.removeEventListener("test",f,d)}catch{}return a}();function re(a,d){if(ne.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(D){e:{try{x(d.nodeName);var L=!0;break e}catch{}L=!1}L||(d=null)}}else f=="mouseover"?d=a.fromElement:f=="mouseout"&&(d=a.toElement);this.relatedTarget=d,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Re[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&re.aa.h.call(this)}}I(re,ne);var Re={2:"touch",3:"pen",4:"mouse"};re.prototype.h=function(){re.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Je="closure_listenable_"+(1e6*Math.random()|0),Kt=0;function En(a,d,f,v,L){this.listener=a,this.proxy=null,this.src=d,this.type=f,this.capture=!!v,this.ha=L,this.key=++Kt,this.da=this.fa=!1}function on(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function an(a){this.src=a,this.g={},this.h=0}an.prototype.add=function(a,d,f,v,L){var j=a.toString();a=this.g[j],a||(a=this.g[j]=[],this.h++);var B=ln(a,d,v,L);return-1<B?(d=a[B],f||(d.fa=!1)):(d=new En(d,this.src,j,!!v,L),d.fa=f,a.push(d)),d};function Yn(a,d){var f=d.type;if(f in a.g){var v=a.g[f],L=Array.prototype.indexOf.call(v,d,void 0),j;(j=0<=L)&&Array.prototype.splice.call(v,L,1),j&&(on(d),a.g[f].length==0&&(delete a.g[f],a.h--))}}function ln(a,d,f,v){for(var L=0;L<a.length;++L){var j=a[L];if(!j.da&&j.listener==d&&j.capture==!!f&&j.ha==v)return L}return-1}var un="closure_lm_"+(1e6*Math.random()|0),de={};function Jn(a,d,f,v,L){if(Array.isArray(d)){for(var j=0;j<d.length;j++)Jn(a,d[j],f,v,L);return null}return f=Hs(f),a&&a[Je]?a.K(d,f,c(v)?!!v.capture:!!v,L):Xn(a,d,f,!1,v,L)}function Xn(a,d,f,v,L,j){if(!d)throw Error("Invalid event type");var B=c(L)?!!L.capture:!!L,he=Ci(a);if(he||(a[un]=he=new an(a)),f=he.add(d,f,v,B,j),f.proxy)return f;if(v=zc(),f.proxy=v,v.src=a,v.listener=f,a.addEventListener)Ie||(L=B),L===void 0&&(L=!1),a.addEventListener(d.toString(),v,L);else if(a.attachEvent)a.attachEvent(Fr(d.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return f}function zc(){function a(f){return d.call(a.src,a.listener,f)}const d=Ha;return a}function za(a,d,f,v,L){if(Array.isArray(d))for(var j=0;j<d.length;j++)za(a,d[j],f,v,L);else v=c(v)?!!v.capture:!!v,f=Hs(f),a&&a[Je]?(a=a.i,d=String(d).toString(),d in a.g&&(j=a.g[d],f=ln(j,f,v,L),-1<f&&(on(j[f]),Array.prototype.splice.call(j,f,1),j.length==0&&(delete a.g[d],a.h--)))):a&&(a=Ci(a))&&(d=a.g[d.toString()],a=-1,d&&(a=ln(d,f,v,L)),(f=-1<a?d[a]:null)&&qt(f))}function qt(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[Je])Yn(d.i,a);else{var f=a.type,v=a.proxy;d.removeEventListener?d.removeEventListener(f,v,a.capture):d.detachEvent?d.detachEvent(Fr(f),v):d.addListener&&d.removeListener&&d.removeListener(v),(f=Ci(d))?(Yn(f,a),f.h==0&&(f.src=null,d[un]=null)):on(a)}}}function Fr(a){return a in de?de[a]:de[a]="on"+a}function Ha(a,d){if(a.da)a=!0;else{d=new re(d,this);var f=a.listener,v=a.ha||a.src;a.fa&&qt(a),a=f.call(v,d)}return a}function Ci(a){return a=a[un],a instanceof an?a:null}var Vr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hs(a){return typeof a=="function"?a:(a[Vr]||(a[Vr]=function(d){return a.handleEvent(d)}),a[Vr])}function De(){K.call(this),this.i=new an(this),this.M=this,this.F=null}I(De,K),De.prototype[Je]=!0,De.prototype.removeEventListener=function(a,d,f,v){za(this,a,d,f,v)};function $e(a,d){var f,v=a.F;if(v)for(f=[];v;v=v.F)f.push(v);if(a=a.M,v=d.type||d,typeof d=="string")d=new ne(d,a);else if(d instanceof ne)d.target=d.target||a;else{var L=d;d=new ne(v,a),C(d,L)}if(L=!0,f)for(var j=f.length-1;0<=j;j--){var B=d.g=f[j];L=Br(B,v,!0,d)&&L}if(B=d.g=a,L=Br(B,v,!0,d)&&L,L=Br(B,v,!1,d)&&L,f)for(j=0;j<f.length;j++)B=d.g=f[j],L=Br(B,v,!1,d)&&L}De.prototype.N=function(){if(De.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var f=a.g[d],v=0;v<f.length;v++)on(f[v]);delete a.g[d],a.h--}}this.F=null},De.prototype.K=function(a,d,f,v){return this.i.add(String(a),d,!1,f,v)},De.prototype.L=function(a,d,f,v){return this.i.add(String(a),d,!0,f,v)};function Br(a,d,f,v){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var L=!0,j=0;j<d.length;++j){var B=d[j];if(B&&!B.da&&B.capture==f){var he=B.listener,We=B.ha||B.src;B.fa&&Yn(a.i,B),L=he.call(We,v)!==!1&&L}}return L&&!v.defaultPrevented}function Dm(a,d,f){if(typeof a=="function")f&&(a=y(a,f));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(a,d||0)}function Mm(a){a.g=Dm(()=>{a.g=null,a.i&&(a.i=!1,Mm(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class xS extends K{constructor(d,f){super(),this.m=d,this.l=f,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Mm(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ws(a){K.call(this),this.h=a,this.g={}}I(Ws,K);var jm=[];function Um(a){M(a.g,function(d,f){this.g.hasOwnProperty(f)&&qt(d)},a),a.g={}}Ws.prototype.N=function(){Ws.aa.N.call(this),Um(this)},Ws.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Hc=l.JSON.stringify,LS=l.JSON.parse,DS=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Wc(){}Wc.prototype.h=null;function $m(a){return a.h||(a.h=a.i())}function MS(){}var Gs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Gc(){ne.call(this,"d")}I(Gc,ne);function Kc(){ne.call(this,"c")}I(Kc,ne);var Ri={},Fm=null;function qc(){return Fm=Fm||new De}Ri.La="serverreachability";function Vm(a){ne.call(this,Ri.La,a)}I(Vm,ne);function Ks(a){const d=qc();$e(d,new Vm(d))}Ri.STAT_EVENT="statevent";function Bm(a,d){ne.call(this,Ri.STAT_EVENT,a),this.stat=d}I(Bm,ne);function at(a){const d=qc();$e(d,new Bm(d,a))}Ri.Ma="timingevent";function zm(a,d){ne.call(this,Ri.Ma,a),this.size=d}I(zm,ne);function qs(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},d)}function Ys(){this.g=!0}Ys.prototype.xa=function(){this.g=!1};function jS(a,d,f,v,L,j){a.info(function(){if(a.g)if(j)for(var B="",he=j.split("&"),We=0;We<he.length;We++){var oe=he[We].split("=");if(1<oe.length){var Xe=oe[0];oe=oe[1];var Qe=Xe.split("_");B=2<=Qe.length&&Qe[1]=="type"?B+(Xe+"="+oe+"&"):B+(Xe+"=redacted&")}}else B=null;else B=j;return"XMLHTTP REQ ("+v+") [attempt "+L+"]: "+d+`
`+f+`
`+B})}function US(a,d,f,v,L,j,B){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+L+"]: "+d+`
`+f+`
`+j+" "+B})}function Pi(a,d,f,v){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+FS(a,f)+(v?" "+v:"")})}function $S(a,d){a.info(function(){return"TIMEOUT: "+d})}Ys.prototype.info=function(){};function FS(a,d){if(!a.g)return d;if(!d)return null;try{var f=JSON.parse(d);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var v=f[a];if(!(2>v.length)){var L=v[1];if(Array.isArray(L)&&!(1>L.length)){var j=L[0];if(j!="noop"&&j!="stop"&&j!="close")for(var B=1;B<L.length;B++)L[B]=""}}}}return Hc(f)}catch{return d}}var Yc={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},VS={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Jc;function Wa(){}I(Wa,Wc),Wa.prototype.g=function(){return new XMLHttpRequest},Wa.prototype.i=function(){return{}},Jc=new Wa;function Qn(a,d,f,v){this.j=a,this.i=d,this.l=f,this.R=v||1,this.U=new Ws(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Hm}function Hm(){this.i=null,this.g="",this.h=!1}var Wm={},Xc={};function Qc(a,d,f){a.L=1,a.v=Ya(In(d)),a.m=f,a.P=!0,Gm(a,null)}function Gm(a,d){a.F=Date.now(),Ga(a),a.A=In(a.v);var f=a.A,v=a.R;Array.isArray(v)||(v=[String(v)]),og(f.i,"t",v),a.C=0,f=a.j.J,a.h=new Hm,a.g=Sg(a.j,f?d:null,!a.m),0<a.O&&(a.M=new xS(y(a.Y,a,a.g),a.O)),d=a.U,f=a.g,v=a.ca;var L="readystatechange";Array.isArray(L)||(L&&(jm[0]=L.toString()),L=jm);for(var j=0;j<L.length;j++){var B=Jn(f,L[j],v||d.handleEvent,!1,d.h||d);if(!B)break;d.g[B.key]=B}d=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),Ks(),jS(a.i,a.u,a.A,a.l,a.R,a.m)}Qn.prototype.ca=function(a){a=a.target;const d=this.M;d&&Tn(a)==3?d.j():this.Y(a)},Qn.prototype.Y=function(a){try{if(a==this.g)e:{const Qe=Tn(this.g);var d=this.g.Ba();const bi=this.g.Z();if(!(3>Qe)&&(Qe!=3||this.g&&(this.h.h||this.g.oa()||fg(this.g)))){this.J||Qe!=4||d==7||(d==8||0>=bi?Ks(3):Ks(2)),Zc(this);var f=this.g.Z();this.X=f;t:if(Km(this)){var v=fg(this.g);a="";var L=v.length,j=Tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){zr(this),Js(this);var B="";break t}this.h.i=new l.TextDecoder}for(d=0;d<L;d++)this.h.h=!0,a+=this.h.i.decode(v[d],{stream:!(j&&d==L-1)});v.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=f==200,US(this.i,this.u,this.A,this.l,this.R,Qe,f),this.o){if(this.T&&!this.K){t:{if(this.g){var he,We=this.g;if((he=We.g?We.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(he)){var oe=he;break t}}oe=null}if(f=oe)Pi(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ed(this,f);else{this.o=!1,this.s=3,at(12),zr(this),Js(this);break e}}if(this.P){f=!0;let Yt;for(;!this.J&&this.C<B.length;)if(Yt=BS(this,B),Yt==Xc){Qe==4&&(this.s=4,at(14),f=!1),Pi(this.i,this.l,null,"[Incomplete Response]");break}else if(Yt==Wm){this.s=4,at(15),Pi(this.i,this.l,B,"[Invalid Chunk]"),f=!1;break}else Pi(this.i,this.l,Yt,null),ed(this,Yt);if(Km(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Qe!=4||B.length!=0||this.h.h||(this.s=1,at(16),f=!1),this.o=this.o&&f,!f)Pi(this.i,this.l,B,"[Invalid Chunked Response]"),zr(this),Js(this);else if(0<B.length&&!this.W){this.W=!0;var Xe=this.j;Xe.g==this&&Xe.ba&&!Xe.M&&(Xe.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),od(Xe),Xe.M=!0,at(11))}}else Pi(this.i,this.l,B,null),ed(this,B);Qe==4&&zr(this),this.o&&!this.J&&(Qe==4?_g(this.j,this):(this.o=!1,Ga(this)))}else sk(this.g),f==400&&0<B.indexOf("Unknown SID")?(this.s=3,at(12)):(this.s=0,at(13)),zr(this),Js(this)}}}catch{}finally{}};function Km(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function BS(a,d){var f=a.C,v=d.indexOf(`
`,f);return v==-1?Xc:(f=Number(d.substring(f,v)),isNaN(f)?Wm:(v+=1,v+f>d.length?Xc:(d=d.slice(v,v+f),a.C=v+f,d)))}Qn.prototype.cancel=function(){this.J=!0,zr(this)};function Ga(a){a.S=Date.now()+a.I,qm(a,a.I)}function qm(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=qs(y(a.ba,a),d)}function Zc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Qn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?($S(this.i,this.A),this.L!=2&&(Ks(),at(17)),zr(this),this.s=2,Js(this)):qm(this,this.S-a)};function Js(a){a.j.G==0||a.J||_g(a.j,a)}function zr(a){Zc(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,Um(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function ed(a,d){try{var f=a.j;if(f.G!=0&&(f.g==a||td(f.h,a))){if(!a.K&&td(f.h,a)&&f.G==3){try{var v=f.Da.g.parse(d)}catch{v=null}if(Array.isArray(v)&&v.length==3){var L=v;if(L[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)tl(f),Za(f);else break e;sd(f),at(18)}}else f.za=L[1],0<f.za-f.T&&37500>L[2]&&f.F&&f.v==0&&!f.C&&(f.C=qs(y(f.Za,f),6e3));if(1>=Xm(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Wr(f,11)}else if((a.K||f.g==a)&&tl(f),!_(d))for(L=f.Da.g.parse(d),d=0;d<L.length;d++){let oe=L[d];if(f.T=oe[0],oe=oe[1],f.G==2)if(oe[0]=="c"){f.K=oe[1],f.ia=oe[2];const Xe=oe[3];Xe!=null&&(f.la=Xe,f.j.info("VER="+f.la));const Qe=oe[4];Qe!=null&&(f.Aa=Qe,f.j.info("SVER="+f.Aa));const bi=oe[5];bi!=null&&typeof bi=="number"&&0<bi&&(v=1.5*bi,f.L=v,f.j.info("backChannelRequestTimeoutMs_="+v)),v=f;const Yt=a.g;if(Yt){const nl=Yt.g?Yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(nl){var j=v.h;j.g||nl.indexOf("spdy")==-1&&nl.indexOf("quic")==-1&&nl.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(nd(j,j.h),j.h=null))}if(v.D){const ad=Yt.g?Yt.g.getResponseHeader("X-HTTP-Session-Id"):null;ad&&(v.ya=ad,pe(v.I,v.D,ad))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),v=f;var B=a;if(v.qa=Tg(v,v.J?v.ia:null,v.W),B.K){Qm(v.h,B);var he=B,We=v.L;We&&(he.I=We),he.B&&(Zc(he),Ga(he)),v.g=B}else yg(v);0<f.i.length&&el(f)}else oe[0]!="stop"&&oe[0]!="close"||Wr(f,7);else f.G==3&&(oe[0]=="stop"||oe[0]=="close"?oe[0]=="stop"?Wr(f,7):id(f):oe[0]!="noop"&&f.l&&f.l.ta(oe),f.v=0)}}Ks(4)}catch{}}var zS=class{constructor(a,d){this.g=a,this.map=d}};function Ym(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Jm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Xm(a){return a.h?1:a.g?a.g.size:0}function td(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function nd(a,d){a.g?a.g.add(d):a.h=d}function Qm(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Ym.prototype.cancel=function(){if(this.i=Zm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Zm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const f of a.g.values())d=d.concat(f.D);return d}return O(a.i)}function HS(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var d=[],f=a.length,v=0;v<f;v++)d.push(a[v]);return d}d=[],f=0;for(v in a)d[f++]=a[v];return d}function WS(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var d=[];a=a.length;for(var f=0;f<a;f++)d.push(f);return d}d=[],f=0;for(const v in a)d[f++]=v;return d}}}function eg(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var f=WS(a),v=HS(a),L=v.length,j=0;j<L;j++)d.call(void 0,v[j],f&&f[j],a)}var tg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function GS(a,d){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var v=a[f].indexOf("="),L=null;if(0<=v){var j=a[f].substring(0,v);L=a[f].substring(v+1)}else j=a[f];d(j,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Hr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Hr){this.h=a.h,Ka(this,a.j),this.o=a.o,this.g=a.g,qa(this,a.s),this.l=a.l;var d=a.i,f=new Zs;f.i=d.i,d.g&&(f.g=new Map(d.g),f.h=d.h),ng(this,f),this.m=a.m}else a&&(d=String(a).match(tg))?(this.h=!1,Ka(this,d[1]||"",!0),this.o=Xs(d[2]||""),this.g=Xs(d[3]||"",!0),qa(this,d[4]),this.l=Xs(d[5]||"",!0),ng(this,d[6]||"",!0),this.m=Xs(d[7]||"")):(this.h=!1,this.i=new Zs(null,this.h))}Hr.prototype.toString=function(){var a=[],d=this.j;d&&a.push(Qs(d,rg,!0),":");var f=this.g;return(f||d=="file")&&(a.push("//"),(d=this.o)&&a.push(Qs(d,rg,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Qs(f,f.charAt(0)=="/"?YS:qS,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Qs(f,XS)),a.join("")};function In(a){return new Hr(a)}function Ka(a,d,f){a.j=f?Xs(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function qa(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function ng(a,d,f){d instanceof Zs?(a.i=d,QS(a.i,a.h)):(f||(d=Qs(d,JS)),a.i=new Zs(d,a.h))}function pe(a,d,f){a.i.set(d,f)}function Ya(a){return pe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Xs(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Qs(a,d,f){return typeof a=="string"?(a=encodeURI(a).replace(d,KS),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function KS(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var rg=/[#\/\?@]/g,qS=/[#\?:]/g,YS=/[#\?]/g,JS=/[#\?@]/g,XS=/#/g;function Zs(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function Zn(a){a.g||(a.g=new Map,a.h=0,a.i&&GS(a.i,function(d,f){a.add(decodeURIComponent(d.replace(/\+/g," ")),f)}))}t=Zs.prototype,t.add=function(a,d){Zn(this),this.i=null,a=Ai(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(d),this.h+=1,this};function ig(a,d){Zn(a),d=Ai(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function sg(a,d){return Zn(a),d=Ai(a,d),a.g.has(d)}t.forEach=function(a,d){Zn(this),this.g.forEach(function(f,v){f.forEach(function(L){a.call(d,L,v,this)},this)},this)},t.na=function(){Zn(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),f=[];for(let v=0;v<d.length;v++){const L=a[v];for(let j=0;j<L.length;j++)f.push(d[v])}return f},t.V=function(a){Zn(this);let d=[];if(typeof a=="string")sg(this,a)&&(d=d.concat(this.g.get(Ai(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)d=d.concat(a[f])}return d},t.set=function(a,d){return Zn(this),this.i=null,a=Ai(this,a),sg(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function og(a,d,f){ig(a,d),0<f.length&&(a.i=null,a.g.set(Ai(a,d),O(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var f=0;f<d.length;f++){var v=d[f];const j=encodeURIComponent(String(v)),B=this.V(v);for(v=0;v<B.length;v++){var L=j;B[v]!==""&&(L+="="+encodeURIComponent(String(B[v]))),a.push(L)}}return this.i=a.join("&")};function Ai(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function QS(a,d){d&&!a.j&&(Zn(a),a.i=null,a.g.forEach(function(f,v){var L=v.toLowerCase();v!=L&&(ig(this,v),og(this,L,f))},a)),a.j=d}function ZS(a,d){const f=new Ys;if(l.Image){const v=new Image;v.onload=A(er,f,"TestLoadImage: loaded",!0,d,v),v.onerror=A(er,f,"TestLoadImage: error",!1,d,v),v.onabort=A(er,f,"TestLoadImage: abort",!1,d,v),v.ontimeout=A(er,f,"TestLoadImage: timeout",!1,d,v),l.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else d(!1)}function ek(a,d){const f=new Ys,v=new AbortController,L=setTimeout(()=>{v.abort(),er(f,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:v.signal}).then(j=>{clearTimeout(L),j.ok?er(f,"TestPingServer: ok",!0,d):er(f,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(L),er(f,"TestPingServer: error",!1,d)})}function er(a,d,f,v,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),v(f)}catch{}}function tk(){this.g=new DS}function nk(a,d,f){const v=f||"";try{eg(a,function(L,j){let B=L;c(L)&&(B=Hc(L)),d.push(v+j+"="+encodeURIComponent(B))})}catch(L){throw d.push(v+"type="+encodeURIComponent("_badmap")),L}}function Ja(a){this.l=a.Ub||null,this.j=a.eb||!1}I(Ja,Wc),Ja.prototype.g=function(){return new Xa(this.l,this.j)},Ja.prototype.i=function(a){return function(){return a}}({});function Xa(a,d){De.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(Xa,De),t=Xa.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,to(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,eo(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,to(this)),this.g&&(this.readyState=3,to(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ag(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function ag(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?eo(this):to(this),this.readyState==3&&ag(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,eo(this))},t.Qa=function(a){this.g&&(this.response=a,eo(this))},t.ga=function(){this.g&&eo(this)};function eo(a){a.readyState=4,a.l=null,a.j=null,a.v=null,to(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var f=d.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=d.next();return a.join(`\r
`)};function to(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Xa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function lg(a){let d="";return M(a,function(f,v){d+=v,d+=":",d+=f,d+=`\r
`}),d}function rd(a,d,f){e:{for(v in f){var v=!1;break e}v=!0}v||(f=lg(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):pe(a,d,f))}function Pe(a){De.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(Pe,De);var rk=/^https?$/i,ik=["POST","PUT"];t=Pe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,f,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Jc.g(),this.v=this.o?$m(this.o):$m(Jc),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(j){ug(this,j);return}if(a=f||"",f=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var L in v)f.set(L,v[L]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const j of v.keys())f.set(j,v.get(j));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(f.keys()).find(j=>j.toLowerCase()=="content-type"),L=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(ik,d,void 0))||v||L||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,B]of f)this.g.setRequestHeader(j,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{hg(this),this.u=!0,this.g.send(a),this.u=!1}catch(j){ug(this,j)}};function ug(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,cg(a),Qa(a)}function cg(a){a.A||(a.A=!0,$e(a,"complete"),$e(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,$e(this,"complete"),$e(this,"abort"),Qa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qa(this,!0)),Pe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?dg(this):this.bb())},t.bb=function(){dg(this)};function dg(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Tn(a)!=4||a.Z()!=2)){if(a.u&&Tn(a)==4)Dm(a.Ea,0,a);else if($e(a,"readystatechange"),Tn(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var f;if(!(f=d)){var v;if(v=B===0){var L=String(a.D).match(tg)[1]||null;!L&&l.self&&l.self.location&&(L=l.self.location.protocol.slice(0,-1)),v=!rk.test(L?L.toLowerCase():"")}f=v}if(f)$e(a,"complete"),$e(a,"success");else{a.m=6;try{var j=2<Tn(a)?a.g.statusText:""}catch{j=""}a.l=j+" ["+a.Z()+"]",cg(a)}}finally{Qa(a)}}}}function Qa(a,d){if(a.g){hg(a);const f=a.g,v=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||$e(a,"ready");try{f.onreadystatechange=v}catch{}}}function hg(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Tn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Tn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),LS(d)}};function fg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function sk(a){const d={};a=(a.g&&2<=Tn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(_(a[v]))continue;var f=P(a[v]);const L=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const j=d[L]||[];d[L]=j,j.push(f)}E(d,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function no(a,d,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||d}function pg(a){this.Aa=0,this.i=[],this.j=new Ys,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=no("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=no("baseRetryDelayMs",5e3,a),this.cb=no("retryDelaySeedMs",1e4,a),this.Wa=no("forwardChannelMaxRetries",2,a),this.wa=no("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Ym(a&&a.concurrentRequestLimit),this.Da=new tk,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=pg.prototype,t.la=8,t.G=1,t.connect=function(a,d,f,v){at(0),this.W=a,this.H=d||{},f&&v!==void 0&&(this.H.OSID=f,this.H.OAID=v),this.F=this.X,this.I=Tg(this,null,this.W),el(this)};function id(a){if(mg(a),a.G==3){var d=a.U++,f=In(a.I);if(pe(f,"SID",a.K),pe(f,"RID",d),pe(f,"TYPE","terminate"),ro(a,f),d=new Qn(a,a.j,d),d.L=2,d.v=Ya(In(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=d.v,f=!0),f||(d.g=Sg(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Ga(d)}Ig(a)}function Za(a){a.g&&(od(a),a.g.cancel(),a.g=null)}function mg(a){Za(a),a.u&&(l.clearTimeout(a.u),a.u=null),tl(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function el(a){if(!Jm(a.h)&&!a.s){a.s=!0;var d=a.Ga;H||W(),U||(H(),U=!0),z.add(d,a),a.B=0}}function ok(a,d){return Xm(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=qs(y(a.Ga,a,d),Eg(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const L=new Qn(this,this.j,a);let j=this.o;if(this.S&&(j?(j=g(j),C(j,this.S)):j=this.S),this.m!==null||this.O||(L.H=j,j=null),this.P)e:{for(var d=0,f=0;f<this.i.length;f++){t:{var v=this.i[f];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(d+=v,4096<d){d=f;break e}if(d===4096||f===this.i.length-1){d=f+1;break e}}d=1e3}else d=1e3;d=vg(this,L,d),f=In(this.I),pe(f,"RID",a),pe(f,"CVER",22),this.D&&pe(f,"X-HTTP-Session-Id",this.D),ro(this,f),j&&(this.O?d="headers="+encodeURIComponent(String(lg(j)))+"&"+d:this.m&&rd(f,this.m,j)),nd(this.h,L),this.Ua&&pe(f,"TYPE","init"),this.P?(pe(f,"$req",d),pe(f,"SID","null"),L.T=!0,Qc(L,f,null)):Qc(L,f,d),this.G=2}}else this.G==3&&(a?gg(this,a):this.i.length==0||Jm(this.h)||gg(this))};function gg(a,d){var f;d?f=d.l:f=a.U++;const v=In(a.I);pe(v,"SID",a.K),pe(v,"RID",f),pe(v,"AID",a.T),ro(a,v),a.m&&a.o&&rd(v,a.m,a.o),f=new Qn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),d&&(a.i=d.D.concat(a.i)),d=vg(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),nd(a.h,f),Qc(f,v,d)}function ro(a,d){a.H&&M(a.H,function(f,v){pe(d,v,f)}),a.l&&eg({},function(f,v){pe(d,v,f)})}function vg(a,d,f){f=Math.min(a.i.length,f);var v=a.l?y(a.l.Na,a.l,a):null;e:{var L=a.i;let j=-1;for(;;){const B=["count="+f];j==-1?0<f?(j=L[0].g,B.push("ofs="+j)):j=0:B.push("ofs="+j);let he=!0;for(let We=0;We<f;We++){let oe=L[We].g;const Xe=L[We].map;if(oe-=j,0>oe)j=Math.max(0,L[We].g-100),he=!1;else try{nk(Xe,B,"req"+oe+"_")}catch{v&&v(Xe)}}if(he){v=B.join("&");break e}}}return a=a.i.splice(0,f),d.D=a,v}function yg(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;H||W(),U||(H(),U=!0),z.add(d,a),a.v=0}}function sd(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=qs(y(a.Fa,a),Eg(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,wg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=qs(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,at(10),Za(this),wg(this))};function od(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function wg(a){a.g=new Qn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=In(a.qa);pe(d,"RID","rpc"),pe(d,"SID",a.K),pe(d,"AID",a.T),pe(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&pe(d,"TO",a.ja),pe(d,"TYPE","xmlhttp"),ro(a,d),a.m&&a.o&&rd(d,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Ya(In(d)),f.m=null,f.P=!0,Gm(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Za(this),sd(this),at(19))};function tl(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function _g(a,d){var f=null;if(a.g==d){tl(a),od(a),a.g=null;var v=2}else if(td(a.h,d))f=d.D,Qm(a.h,d),v=1;else return;if(a.G!=0){if(d.o)if(v==1){f=d.m?d.m.length:0,d=Date.now()-d.F;var L=a.B;v=qc(),$e(v,new zm(v,f)),el(a)}else yg(a);else if(L=d.s,L==3||L==0&&0<d.X||!(v==1&&ok(a,d)||v==2&&sd(a)))switch(f&&0<f.length&&(d=a.h,d.i=d.i.concat(f)),L){case 1:Wr(a,5);break;case 4:Wr(a,10);break;case 3:Wr(a,6);break;default:Wr(a,2)}}}function Eg(a,d){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*d}function Wr(a,d){if(a.j.info("Error code "+d),d==2){var f=y(a.fb,a),v=a.Xa;const L=!v;v=new Hr(v||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ka(v,"https"),Ya(v),L?ZS(v.toString(),f):ek(v.toString(),f)}else at(2);a.G=0,a.l&&a.l.sa(d),Ig(a),mg(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function Ig(a){if(a.G=0,a.ka=[],a.l){const d=Zm(a.h);(d.length!=0||a.i.length!=0)&&(N(a.ka,d),N(a.ka,a.i),a.h.i.length=0,O(a.i),a.i.length=0),a.l.ra()}}function Tg(a,d,f){var v=f instanceof Hr?In(f):new Hr(f);if(v.g!="")d&&(v.g=d+"."+v.g),qa(v,v.s);else{var L=l.location;v=L.protocol,d=d?d+"."+L.hostname:L.hostname,L=+L.port;var j=new Hr(null);v&&Ka(j,v),d&&(j.g=d),L&&qa(j,L),f&&(j.l=f),v=j}return f=a.D,d=a.ya,f&&d&&pe(v,f,d),pe(v,"VER",a.la),ro(a,v),v}function Sg(a,d,f){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new Pe(new Ja({eb:f})):new Pe(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function kg(){}t=kg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Dt(a,d){De.call(this),this.g=new pg(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!_(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!_(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Ni(this)}I(Dt,De),Dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){id(this.g)},Dt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Hc(a),a=f);d.i.push(new zS(d.Ya++,a)),d.G==3&&el(d)},Dt.prototype.N=function(){this.g.l=null,delete this.j,id(this.g),delete this.g,Dt.aa.N.call(this)};function Cg(a){Gc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const f in d){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}I(Cg,Gc);function Rg(){Kc.call(this),this.status=1}I(Rg,Kc);function Ni(a){this.g=a}I(Ni,kg),Ni.prototype.ua=function(){$e(this.g,"a")},Ni.prototype.ta=function(a){$e(this.g,new Cg(a))},Ni.prototype.sa=function(a){$e(this.g,new Rg)},Ni.prototype.ra=function(){$e(this.g,"b")},Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,Yc.NO_ERROR=0,Yc.TIMEOUT=8,Yc.HTTP_ERROR=6,VS.COMPLETE="complete",MS.EventType=Gs,Gs.OPEN="a",Gs.CLOSE="b",Gs.ERROR="c",Gs.MESSAGE="d",De.prototype.listen=De.prototype.K,Pe.prototype.listenOnce=Pe.prototype.L,Pe.prototype.getLastError=Pe.prototype.Ka,Pe.prototype.getLastErrorCode=Pe.prototype.Ba,Pe.prototype.getStatus=Pe.prototype.Z,Pe.prototype.getResponseJson=Pe.prototype.Oa,Pe.prototype.getResponseText=Pe.prototype.oa,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Ha}).apply(typeof Sl<"u"?Sl:typeof self<"u"?self:typeof window<"u"?window:{});const Ly="@firebase/firestore";/**
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
 */class tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
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
 */let Ma="10.12.3";/**
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
 */const Cs=new Ms("@firebase/firestore");function Rt(t,...e){if(Cs.logLevel<=ie.DEBUG){const n=e.map(sm);Cs.debug(`Firestore (${Ma}): ${t}`,...n)}}function im(t,...e){if(Cs.logLevel<=ie.ERROR){const n=e.map(sm);Cs.error(`Firestore (${Ma}): ${t}`,...n)}}function eD(t,...e){if(Cs.logLevel<=ie.WARN){const n=e.map(sm);Cs.warn(`Firestore (${Ma}): ${t}`,...n)}}function sm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function om(t="Unexpected state"){const e=`FIRESTORE (${Ma}) INTERNAL ASSERTION FAILED: `+t;throw im(e),new Error(e)}function yf(t,e){t||om()}/**
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
 */const rt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class it extends Le{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ds{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class HI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class nD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class rD{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new ds;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ds,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{Rt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(Rt("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ds)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Rt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(yf(typeof r.accessToken=="string"),new HI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return yf(e===null||typeof e=="string"),new tt(e)}}class iD{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class sD{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new iD(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class oD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class aD{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&Rt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Rt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Rt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Rt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(yf(typeof n.token=="string"),this.R=n.token,new oD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class uD{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=lD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function WI(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class cD{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class xu{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new xu("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof xu&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var Dy,Z;(Z=Dy||(Dy={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new zI([4294967295,4294967295],0);function Yd(){return typeof document<"u"?document:null}/**
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
 */class dD{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&Rt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class am{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ds,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new am(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new it(rt.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hD(t,e){if(im("AsyncQueue",`${e}: ${t}`),WI(t))return new it(rt.UNAVAILABLE,`${e}: ${t}`);throw t}var My,jy;(jy=My||(My={})).J_="default",jy.Cache="cache";/**
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
 */class fD{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=tt.UNAUTHENTICATED,this.clientId=uD.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{Rt("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Rt("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new it(rt.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ds;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=hD(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}/**
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
 */function GI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy=new Map;function pD(t,e,n,r){if(e===!0&&r===!0)throw new it(rt.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function mD(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":om()}function gD(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new it(rt.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=mD(t);throw new it(rt.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new it(rt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new it(rt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}pD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=GI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new it(rt.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new it(rt.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new it(rt.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class KI{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $y({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new it(rt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new it(rt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $y(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new tD;switch(r.type){case"firstParty":return new sD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new it(rt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Uy.get(n);r&&(Rt("ComponentProvider","Removing Datastore"),Uy.delete(n),r.terminate())}(this),Promise.resolve()}}function vD(t,e,n,r={}){var i;const s=(t=gD(t,KI))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&eD("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=tt.MOCK_USER;else{l=HR(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new it(rt.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new tt(c)}t._authCredentials=new nD(new HI(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new dD(this,"async_queue_retry"),this.hu=()=>{const n=Yd();n&&Rt("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Yd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Yd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new ds;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!WI(e))throw e;Rt("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw im("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=am.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&om()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class wD extends KI{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new yD}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ED(this),this._firestoreClient.terminate()}}function _D(t,e){const n=typeof t=="object"?t:pc(),r=typeof t=="string"?t:"(default)",i=Wn(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=BR("firestore");s&&vD(i,...s)}return i}function ED(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,h){return new cD(l,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,GI(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new fD(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}(function(e,n=!0){(function(i){Ma=i})(Lt),It(new dt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new wD(new rD(r.getProvider("auth-internal")),new aD(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new it(rt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xu(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),ze(Ly,"4.6.4",e),ze(Ly,"4.6.4","esm2017")})();function qI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ID=qI,YI=new Gt("auth","Firebase",qI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu=new Ms("@firebase/auth");function TD(t,...e){Lu.logLevel<=ie.WARN&&Lu.warn(`Auth (${Lt}): ${t}`,...e)}function Gl(t,...e){Lu.logLevel<=ie.ERROR&&Lu.error(`Auth (${Lt}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t,...e){throw lm(t,...e)}function vn(t,...e){return lm(t,...e)}function JI(t,e,n){const r=Object.assign(Object.assign({},ID()),{[e]:n});return new Gt("auth","Firebase",r).create(e,{appName:t.name})}function si(t){return JI(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function lm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return YI.create(t,...e)}function q(t,e,...n){if(!t)throw lm(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Gl(e),new Error(e)}function Vn(t,e){t||Pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function SD(){return Fy()==="http:"||Fy()==="https:"}function Fy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(SD()||dc()||"connection"in navigator)?navigator.onLine:!0}function CD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vn(n>e,"Short delay should be less than long delay!"),this.isMobile=tE()||hc()}get(){return kD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(t,e){Vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PD=new ja(3e4,6e4);function cm(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Bs(t,e,n,r,i={}){return QI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=sn(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),XI.fetch()(ZI(t,t.config.apiHost,n,l),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function QI(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},RD),e);try{const i=new ND(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw kl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw kl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw kl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw kl(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw JI(t,h,c);Fn(t,h)}}catch(i){if(i instanceof Le)throw i;Fn(t,"network-request-failed",{message:String(i)})}}async function AD(t,e,n,r,i={}){const s=await Bs(t,e,n,r,i);return"mfaPendingCredential"in s&&Fn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function ZI(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?um(t.config,i):`${t.config.apiScheme}://${i}`}class ND{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(vn(this.auth,"network-request-failed")),PD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function kl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=vn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bD(t,e){return Bs(t,"POST","/v1/accounts:delete",e)}async function eT(t,e){return Bs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function OD(t,e=!1){const n=J(t),r=await n.getIdToken(e),i=dm(r);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Vo(Jd(i.auth_time)),issuedAtTime:Vo(Jd(i.iat)),expirationTime:Vo(Jd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Jd(t){return Number(t)*1e3}function dm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Gl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Cp(n);return i?JSON.parse(i):(Gl("Failed to decode base64 JWT payload"),null)}catch(i){return Gl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Vy(t){const e=dm(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Le&&xD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function xD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vo(this.lastLoginAt),this.creationTime=Vo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Du(t){var e;const n=t.auth,r=await t.getIdToken(),i=await wa(t,eT(n,{idToken:r}));q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?tT(s.providerUserInfo):[],l=MD(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),h=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new _f(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,p)}async function DD(t){const e=J(t);await Du(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MD(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function tT(t){return t.map(e=>{var{providerId:n}=e,r=js(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jD(t,e){const n=await QI(t,{},async()=>{const r=sn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=ZI(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",XI.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function UD(t,e){return Bs(t,"POST","/v2/accounts:revokeToken",cm(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){q(e.length!==0,"internal-error");const n=Vy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await jD(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new hs;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hs,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class An{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=js(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new LD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new _f(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await wa(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return OD(this,e)}reload(){return DD(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new An(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Du(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ue(this.auth.app))return Promise.reject(si(this.auth));const e=await this.getIdToken();return await wa(this,bD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,h;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,A=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(l=n.tenantId)!==null&&l!==void 0?l:void 0,N=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,R=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:k,emailVerified:x,isAnonymous:D,providerData:M,stsTokenManager:E}=n;q(k&&E,e,"internal-error");const g=hs.fromJSON(this.name,E);q(typeof k=="string",e,"internal-error"),rr(p,e.name),rr(y,e.name),q(typeof x=="boolean",e,"internal-error"),q(typeof D=="boolean",e,"internal-error"),rr(A,e.name),rr(I,e.name),rr(O,e.name),rr(N,e.name),rr(R,e.name),rr(_,e.name);const T=new An({uid:k,auth:e,email:y,emailVerified:x,displayName:p,isAnonymous:D,photoURL:I,phoneNumber:A,tenantId:O,stsTokenManager:g,createdAt:R,lastLoginAt:_});return M&&Array.isArray(M)&&(T.providerData=M.map(C=>Object.assign({},C))),N&&(T._redirectEventId=N),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new hs;i.updateFromServerResponse(n);const s=new An({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Du(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?tT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new hs;l.updateFromIdToken(r);const u=new An({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new _f(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By=new Map;function Nn(t){Vn(t instanceof Function,"Expected a class definition");let e=By.get(t);return e?(Vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,By.set(t,e),e)}/**
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
 */class nT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}nT.type="NONE";const zy=nT;/**
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
 */function Kl(t,e,n){return`firebase:${t}:${e}:${n}`}class fs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Kl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Kl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?An._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new fs(Nn(zy),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Nn(zy);const o=Kl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const h=await c._get(o);if(h){const p=An._fromJSON(e,h);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new fs(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new fs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(aT(e))return"Blackberry";if(lT(e))return"Webos";if(hm(e))return"Safari";if((e.includes("chrome/")||iT(e))&&!e.includes("edge/"))return"Chrome";if(oT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function rT(t=te()){return/firefox\//i.test(t)}function hm(t=te()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function iT(t=te()){return/crios\//i.test(t)}function sT(t=te()){return/iemobile/i.test(t)}function oT(t=te()){return/android/i.test(t)}function aT(t=te()){return/blackberry/i.test(t)}function lT(t=te()){return/webos/i.test(t)}function Oc(t=te()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function $D(t=te()){var e;return Oc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function FD(){return Pp()&&document.documentMode===10}function uT(t=te()){return Oc(t)||oT(t)||lT(t)||aT(t)||/windows phone/i.test(t)||sT(t)}function VD(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cT(t,e=[]){let n;switch(t){case"Browser":n=Hy(te());break;case"Worker":n=`${Hy(te())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Lt}/${r}`}/**
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
 */class BD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function zD(t,e={}){return Bs(t,"GET","/v2/passwordPolicy",cm(t,e))}/**
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
 */const HD=6;class WD{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:HD,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GD{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wy(this),this.idTokenSubscription=new Wy(this),this.beforeStateQueue=new BD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=YI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await fs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await eT(this,{idToken:e}),r=await An._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ue(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Du(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=CD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ue(this.app))return Promise.reject(si(this));const n=e?J(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ue(this.app)?Promise.reject(si(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ue(this.app)?Promise.reject(si(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zD(this),n=new WD(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gt("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await UD(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nn(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await fs.create(this,[Nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&TD(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function fm(t){return J(t)}class Wy{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ap(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pm={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function KD(t){pm=t}function qD(t){return pm.loadJS(t)}function YD(){return pm.gapiScript}function JD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XD(t,e){const n=Wn(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(da(s,e??{}))return i;Fn(i,"already-initialized")}return n.initialize({options:e})}function QD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ZD(t,e,n){const r=fm(t);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=dT(e),{host:o,port:l}=eM(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),tM()}function dT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function eM(t){const e=dT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Gy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Gy(o)}}}function Gy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function tM(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ps(t,e){return AD(t,"POST","/v1/accounts:signInWithIdp",cm(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nM="http://localhost";class _i extends hT{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _i(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=js(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new _i(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ps(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ps(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ps(e,n)}buildRequest(){const e={requestUri:nM,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=sn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ua extends fT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends Ua{constructor(){super("facebook.com")}static credential(e){return _i._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.FACEBOOK_SIGN_IN_METHOD="facebook.com";ur.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends Ua{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _i._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return cr.credential(n,r)}catch{return null}}}cr.GOOGLE_SIGN_IN_METHOD="google.com";cr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends Ua{constructor(){super("github.com")}static credential(e){return _i._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.GITHUB_SIGN_IN_METHOD="github.com";dr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends Ua{constructor(){super("twitter.com")}static credential(e,n){return _i._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return hr.credential(n,r)}catch{return null}}}hr.TWITTER_SIGN_IN_METHOD="twitter.com";hr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await An._fromIdTokenResponse(e,r,i),o=Ky(r);return new Rs({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ky(r);return new Rs({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ky(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu extends Le{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Mu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Mu(e,n,r,i)}}function pT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Mu._fromErrorAndOperation(t,s,e,r):s})}async function rM(t,e,n=!1){const r=await wa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Rs._forOperation(t,"link",r)}/**
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
 */async function iM(t,e,n=!1){const{auth:r}=t;if(ue(r.app))return Promise.reject(si(r));const i="reauthenticate";try{const s=await wa(t,pT(r,i,e,t),n);q(s.idToken,r,"internal-error");const o=dm(s.idToken);q(o,r,"internal-error");const{sub:l}=o;return q(t.uid===l,r,"user-mismatch"),Rs._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Fn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sM(t,e,n=!1){if(ue(t.app))return Promise.reject(si(t));const r="signIn",i=await pT(t,r,e),s=await Rs._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function oM(t,e,n,r){return J(t).onIdTokenChanged(e,n,r)}function aM(t,e,n){return J(t).beforeAuthStateChanged(e,n)}const ju="__sak";/**
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
 */class mT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ju,"1"),this.storage.removeItem(ju),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lM(){const t=te();return hm(t)||Oc(t)}const uM=1e3,cM=10;class gT extends mT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=lM()&&VD(),this.fallbackToPolling=uT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);FD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,cM):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},uM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}gT.type="LOCAL";const dM=gT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT extends mT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vT.type="SESSION";const yT=vT;/**
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
 */function hM(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class xc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new xc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await hM(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class fM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=mm("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const y=p;if(y.data.eventId===c)switch(y.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(){return window}function pM(t){yn().location.href=t}/**
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
 */function wT(){return typeof yn().WorkerGlobalScope<"u"&&typeof yn().importScripts=="function"}async function mM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gM(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function vM(){return wT()?self:null}/**
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
 */const _T="firebaseLocalStorageDb",yM=1,Uu="firebaseLocalStorage",ET="fbase_key";class $a{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Lc(t,e){return t.transaction([Uu],e?"readwrite":"readonly").objectStore(Uu)}function wM(){const t=indexedDB.deleteDatabase(_T);return new $a(t).toPromise()}function Ef(){const t=indexedDB.open(_T,yM);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Uu,{keyPath:ET})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Uu)?e(r):(r.close(),await wM(),e(await Ef()))})})}async function qy(t,e,n){const r=Lc(t,!0).put({[ET]:e,value:n});return new $a(r).toPromise()}async function _M(t,e){const n=Lc(t,!1).get(e),r=await new $a(n).toPromise();return r===void 0?null:r.value}function Yy(t,e){const n=Lc(t,!0).delete(e);return new $a(n).toPromise()}const EM=800,IM=3;class IT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ef(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>IM)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xc._getInstance(vM()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await mM(),!this.activeServiceWorker)return;this.sender=new fM(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ef();return await qy(e,ju,"1"),await Yy(e,ju),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>qy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>_M(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Lc(i,!1).getAll();return new $a(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),EM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}IT.type="LOCAL";const TM=IT;new ja(3e4,6e4);/**
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
 */function SM(t,e){return e?Nn(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class gm extends hT{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ps(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ps(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ps(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function kM(t){return sM(t.auth,new gm(t),t.bypassAuthState)}function CM(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),iM(n,new gm(t),t.bypassAuthState)}async function RM(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),rM(n,new gm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kM;case"linkViaPopup":case"linkViaRedirect":return RM;case"reauthViaPopup":case"reauthViaRedirect":return CM;default:Fn(this.auth,"internal-error")}}resolve(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PM=new ja(2e3,1e4);class ts extends TT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ts.currentPopupAction&&ts.currentPopupAction.cancel(),ts.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Vn(this.filter.length===1,"Popup operations only handle one event");const e=mm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ts.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,PM.get())};e()}}ts.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AM="pendingRedirect",ql=new Map;class NM extends TT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ql.get(this.auth._key());if(!e){try{const r=await bM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ql.set(this.auth._key(),e)}return this.bypassAuthState||ql.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bM(t,e){const n=LM(e),r=xM(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function OM(t,e){ql.set(t._key(),e)}function xM(t){return Nn(t._redirectPersistence)}function LM(t){return Kl(AM,t.config.apiKey,t.name)}async function DM(t,e,n=!1){if(ue(t.app))return Promise.reject(si(t));const r=fm(t),i=SM(r,e),o=await new NM(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MM=10*60*1e3;class jM{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!UM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ST(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(vn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=MM&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jy(e))}saveEventToCache(e){this.cachedEventUids.add(Jy(e)),this.lastProcessedEventTime=Date.now()}}function Jy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ST({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function UM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ST(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $M(t,e={}){return Bs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VM=/^https?/;async function BM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $M(t);for(const n of e)try{if(zM(n))return}catch{}Fn(t,"unauthorized-domain")}function zM(t){const e=wf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!VM.test(n))return!1;if(FM.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const HM=new ja(3e4,6e4);function Xy(){const t=yn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function WM(t){return new Promise((e,n)=>{var r,i,s;function o(){Xy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xy(),n(vn(t,"network-request-failed"))},timeout:HM.get()})}if(!((i=(r=yn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=yn().gapi)===null||s===void 0)&&s.load)o();else{const l=JD("iframefcb");return yn()[l]=()=>{gapi.load?o():n(vn(t,"network-request-failed"))},qD(`${YD()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Yl=null,e})}let Yl=null;function GM(t){return Yl=Yl||WM(t),Yl}/**
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
 */const KM=new ja(5e3,15e3),qM="__/auth/iframe",YM="emulator/auth/iframe",JM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},XM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function QM(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?um(e,YM):`https://${t.config.authDomain}/${qM}`,r={apiKey:e.apiKey,appName:t.name,v:Lt},i=XM.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${sn(r).slice(1)}`}async function ZM(t){const e=await GM(t),n=yn().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:QM(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:JM,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=vn(t,"network-request-failed"),l=yn().setTimeout(()=>{s(o)},KM.get());function u(){yn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const e2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},t2=500,n2=600,r2="_blank",i2="http://localhost";class Qy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function s2(t,e,n,r=t2,i=n2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},e2),{width:r.toString(),height:i.toString(),top:s,left:o}),c=te().toLowerCase();n&&(l=iT(c)?r2:n),rT(c)&&(e=e||i2,u.scrollbars="yes");const h=Object.entries(u).reduce((y,[A,I])=>`${y}${A}=${I},`,"");if($D(c)&&l!=="_self")return o2(e||"",l),new Qy(null);const p=window.open(e||"",l,h);q(p,t,"popup-blocked");try{p.focus()}catch{}return new Qy(p)}function o2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const a2="__/auth/handler",l2="emulator/auth/handler",u2=encodeURIComponent("fac");async function Zy(t,e,n,r,i,s){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Lt,eventId:i};if(e instanceof fT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",oE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))o[h]=p}if(e instanceof Ua){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const u=await t._getAppCheckToken(),c=u?`#${u2}=${encodeURIComponent(u)}`:"";return`${c2(t)}?${sn(l).slice(1)}${c}`}function c2({config:t}){return t.emulator?um(t,l2):`https://${t.authDomain}/${a2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd="webStorageSupport";class d2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yT,this._completeRedirectFn=DM,this._overrideRedirectResult=OM}async _openPopup(e,n,r,i){var s;Vn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Zy(e,n,r,wf(),i);return s2(e,o,mm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Zy(e,n,r,wf(),i);return pM(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Vn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ZM(e),r=new jM(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xd,{type:Xd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Xd];o!==void 0&&n(!!o),Fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return uT()||hm()||Oc()}}const h2=d2;var ew="@firebase/auth",tw="1.7.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function m2(t){It(new dt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cT(t)},c=new GD(r,i,s,u);return QD(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),It(new dt("auth-internal",e=>{const n=fm(e.getProvider("auth").getImmediate());return(r=>new f2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ze(ew,tw,p2(t)),ze(ew,tw,"esm2017")}/**
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
 */const g2=5*60,v2=Rp("authIdTokenMaxAge")||g2;let nw=null;const y2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>v2)return;const i=n==null?void 0:n.token;nw!==i&&(nw=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function w2(t=pc()){const e=Wn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=XD(t,{popupRedirectResolver:h2,persistence:[TM,dM,yT]}),r=Rp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=y2(s.toString());aM(n,o,()=>o(n.currentUser)),oM(n,l=>o(l))}}const i=Z_("auth");return i&&ZD(n,`http://${i}`),n}function _2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}KD({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=vn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",_2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});m2("Browser");const kT={apiKey:"AIzaSyC0LGKfT3SJq4aSWSj0biLp3pBAFzsryyQ",authDomain:"personal-site-d1063.firebaseapp.com",projectId:"personal-site-d1063",storageBucket:"personal-site-d1063.appspot.com",messagingSenderId:"55905191484",appId:"1:55905191484:web:59c455a2c2b8b99c69a539",measurementId:"G-W6JCHKHSRR"},vm=fc(kT);w2(vm);JL(vm);_D(vm);var CT={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var l=arguments[o];l&&(s=i(s,r(l)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var l in s)e.call(s,l)&&s[l]&&(o=i(o,l));return o}function i(s,o){return o?s?s+" "+o:s+o:s}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(CT);var E2=CT.exports;const le=Ia(E2);function If(){return If=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},If.apply(null,arguments)}function RT(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.includes(r))continue;n[r]=t[r]}return n}function rw(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function I2(t){var e=T2(t,"string");return typeof e=="symbol"?e:String(e)}function T2(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function S2(t,e,n){var r=w.useRef(t!==void 0),i=w.useState(e),s=i[0],o=i[1],l=t!==void 0,u=r.current;return r.current=l,!l&&u&&s!==e&&o(e),[l?t:s,w.useCallback(function(c){for(var h=arguments.length,p=new Array(h>1?h-1:0),y=1;y<h;y++)p[y-1]=arguments[y];n&&n.apply(void 0,[c].concat(p)),o(c)},[n])]}function k2(t,e){return Object.keys(e).reduce(function(n,r){var i,s=n,o=s[rw(r)],l=s[r],u=RT(s,[rw(r),r].map(I2)),c=e[r],h=S2(l,o,t[c]),p=h[0],y=h[1];return If({},u,(i={},i[r]=p,i[c]=y,i))},t)}function Tf(t,e){return Tf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},Tf(t,e)}function C2(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Tf(t,e)}const R2=["xxl","xl","lg","md","sm","xs"],P2="xs",Dc=w.createContext({prefixes:{},breakpoints:R2,minBreakpoint:P2});function ve(t,e){const{prefixes:n}=w.useContext(Dc);return t||n[e]||e}function A2(){const{breakpoints:t}=w.useContext(Dc);return t}function N2(){const{minBreakpoint:t}=w.useContext(Dc);return t}function b2(){const{dir:t}=w.useContext(Dc);return t==="rtl"}function Mc(t){return t&&t.ownerDocument||document}function O2(t){var e=Mc(t);return e&&e.defaultView||window}function x2(t,e){return O2(t).getComputedStyle(t,e)}var L2=/([A-Z])/g;function D2(t){return t.replace(L2,"-$1").toLowerCase()}var M2=/^ms-/;function Cl(t){return D2(t).replace(M2,"-ms-")}var j2=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function U2(t){return!!(t&&j2.test(t))}function oi(t,e){var n="",r="";if(typeof e=="string")return t.style.getPropertyValue(Cl(e))||x2(t).getPropertyValue(Cl(e));Object.keys(e).forEach(function(i){var s=e[i];!s&&s!==0?t.style.removeProperty(Cl(i)):U2(i)?r+=i+"("+s+") ":n+=Cl(i)+": "+s+";"}),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n}var PT={exports:{}},$2="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",F2=$2,V2=F2;function AT(){}function NT(){}NT.resetWarningCache=AT;var B2=function(){function t(r,i,s,o,l,u){if(u!==V2){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:NT,resetWarningCache:AT};return n.PropTypes=n,n};PT.exports=B2();var z2=PT.exports;const xn=Ia(z2),iw={disabled:!1},bT=st.createContext(null);var H2=function(e){return e.scrollTop},Ro="unmounted",Yr="exited",hn="entering",fr="entered",$u="exiting",qn=function(t){C2(e,t);function e(r,i){var s;s=t.call(this,r,i)||this;var o=i,l=o&&!o.isMounting?r.enter:r.appear,u;return s.appearStatus=null,r.in?l?(u=Yr,s.appearStatus=hn):u=fr:r.unmountOnExit||r.mountOnEnter?u=Ro:u=Yr,s.state={status:u},s.nextCallback=null,s}e.getDerivedStateFromProps=function(i,s){var o=i.in;return o&&s.status===Ro?{status:Yr}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var s=null;if(i!==this.props){var o=this.state.status;this.props.in?o!==hn&&o!==fr&&(s=hn):(o===hn||o===fr)&&(s=$u)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,s,o,l;return s=o=l=i,i!=null&&typeof i!="number"&&(s=i.exit,o=i.enter,l=i.appear!==void 0?i.appear:o),{exit:s,enter:o,appear:l}},n.updateStatus=function(i,s){if(i===void 0&&(i=!1),s!==null)if(this.cancelNextCallback(),s===hn){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:Zi.findDOMNode(this);o&&H2(o)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Yr&&this.setState({status:Ro})},n.performEnter=function(i){var s=this,o=this.props.enter,l=this.context?this.context.isMounting:i,u=this.props.nodeRef?[l]:[Zi.findDOMNode(this),l],c=u[0],h=u[1],p=this.getTimeouts(),y=l?p.appear:p.enter;if(!i&&!o||iw.disabled){this.safeSetState({status:fr},function(){s.props.onEntered(c)});return}this.props.onEnter(c,h),this.safeSetState({status:hn},function(){s.props.onEntering(c,h),s.onTransitionEnd(y,function(){s.safeSetState({status:fr},function(){s.props.onEntered(c,h)})})})},n.performExit=function(){var i=this,s=this.props.exit,o=this.getTimeouts(),l=this.props.nodeRef?void 0:Zi.findDOMNode(this);if(!s||iw.disabled){this.safeSetState({status:Yr},function(){i.props.onExited(l)});return}this.props.onExit(l),this.safeSetState({status:$u},function(){i.props.onExiting(l),i.onTransitionEnd(o.exit,function(){i.safeSetState({status:Yr},function(){i.props.onExited(l)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,s){s=this.setNextCallback(s),this.setState(i,s)},n.setNextCallback=function(i){var s=this,o=!0;return this.nextCallback=function(l){o&&(o=!1,s.nextCallback=null,i(l))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(i,s){this.setNextCallback(s);var o=this.props.nodeRef?this.props.nodeRef.current:Zi.findDOMNode(this),l=i==null&&!this.props.addEndListener;if(!o||l){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],c=u[0],h=u[1];this.props.addEndListener(c,h)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===Ro)return null;var s=this.props,o=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var l=RT(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return st.createElement(bT.Provider,{value:null},typeof o=="function"?o(i,l):st.cloneElement(st.Children.only(o),l))},e}(st.Component);qn.contextType=bT;qn.propTypes={};function Li(){}qn.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Li,onEntering:Li,onEntered:Li,onExit:Li,onExiting:Li,onExited:Li};qn.UNMOUNTED=Ro;qn.EXITED=Yr;qn.ENTERING=hn;qn.ENTERED=fr;qn.EXITING=$u;const jc=!!(typeof window<"u"&&window.document&&window.document.createElement);var Sf=!1,kf=!1;try{var Qd={get passive(){return Sf=!0},get once(){return kf=Sf=!0}};jc&&(window.addEventListener("test",Qd,Qd),window.removeEventListener("test",Qd,!0))}catch{}function OT(t,e,n,r){if(r&&typeof r!="boolean"&&!kf){var i=r.once,s=r.capture,o=n;!kf&&i&&(o=n.__once||function l(u){this.removeEventListener(e,l,s),n.call(this,u)},n.__once=o),t.addEventListener(e,o,Sf?r:s)}t.addEventListener(e,n,r)}function W2(t,e,n,r){var i=r&&typeof r!="boolean"?r.capture:r;t.removeEventListener(e,n,i),n.__once&&t.removeEventListener(e,n.__once,i)}function yr(t,e,n,r){return OT(t,e,n,r),function(){W2(t,e,n,r)}}function G2(t,e,n,r){if(r===void 0&&(r=!0),t){var i=document.createEvent("HTMLEvents");i.initEvent(e,n,r),t.dispatchEvent(i)}}function K2(t){var e=oi(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function q2(t,e,n){n===void 0&&(n=5);var r=!1,i=setTimeout(function(){r||G2(t,"transitionend",!0)},e+n),s=yr(t,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(i),s()}}function Y2(t,e,n,r){n==null&&(n=K2(t)||0);var i=q2(t,n,r),s=yr(t,"transitionend",e);return function(){i(),s()}}function sw(t,e){const n=oi(t,e)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function xT(t,e){const n=sw(t,"transitionDuration"),r=sw(t,"transitionDelay"),i=Y2(t,s=>{s.target===t&&(i(),e(s))},n+r)}function J2(t){t.offsetHeight}const ow=t=>!t||typeof t=="function"?t:e=>{t.current=e};function X2(t,e){const n=ow(t),r=ow(e);return i=>{n&&n(i),r&&r(i)}}function zs(t,e){return w.useMemo(()=>X2(t,e),[t,e])}function Q2(t){return t&&"setState"in t?Zi.findDOMNode(t):t??null}const LT=st.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,onExited:s,addEndListener:o,children:l,childRef:u,...c},h)=>{const p=w.useRef(null),y=zs(p,u),A=M=>{y(Q2(M))},I=M=>E=>{M&&p.current&&M(p.current,E)},O=w.useCallback(I(t),[t]),N=w.useCallback(I(e),[e]),R=w.useCallback(I(n),[n]),_=w.useCallback(I(r),[r]),k=w.useCallback(I(i),[i]),x=w.useCallback(I(s),[s]),D=w.useCallback(I(o),[o]);return m.jsx(qn,{ref:h,...c,onEnter:O,onEntered:R,onEntering:N,onExit:_,onExited:x,onExiting:k,addEndListener:D,nodeRef:p,children:typeof l=="function"?(M,E)=>l(M,{...E,ref:A}):st.cloneElement(l,{ref:A})})});function Z2(t){const e=w.useRef(t);return w.useEffect(()=>{e.current=t},[t]),e}function Ve(t){const e=Z2(t);return w.useCallback(function(...n){return e.current&&e.current(...n)},[e])}const ej=t=>w.forwardRef((e,n)=>m.jsx("div",{...e,ref:n,className:le(e.className,t)}));function tj(){return w.useState(null)}function nj(t,e,n,r=!1){const i=Ve(n);w.useEffect(()=>{const s=typeof t=="function"?t():t;return s.addEventListener(e,i,r),()=>s.removeEventListener(e,i,r)},[t])}function DT(){const t=w.useRef(!0),e=w.useRef(()=>t.current);return w.useEffect(()=>(t.current=!0,()=>{t.current=!1}),[]),e.current}function MT(t){const e=w.useRef(null);return w.useEffect(()=>{e.current=t}),e.current}const rj=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",ij=typeof document<"u",Fu=ij||rj?w.useLayoutEffect:w.useEffect,sj=["as","disabled"];function oj(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function aj(t){return!t||t.trim()==="#"}function ym({tagName:t,disabled:e,href:n,target:r,rel:i,role:s,onClick:o,tabIndex:l=0,type:u}){t||(n!=null||r!=null||i!=null?t="a":t="button");const c={tagName:t};if(t==="button")return[{type:u||"button",disabled:e},c];const h=y=>{if((e||t==="a"&&aj(n))&&y.preventDefault(),e){y.stopPropagation();return}o==null||o(y)},p=y=>{y.key===" "&&(y.preventDefault(),h(y))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:s??"button",disabled:void 0,tabIndex:e?void 0:l,href:n,target:t==="a"?r:void 0,"aria-disabled":e||void 0,rel:t==="a"?i:void 0,onClick:h,onKeyDown:p},c]}const jT=w.forwardRef((t,e)=>{let{as:n,disabled:r}=t,i=oj(t,sj);const[s,{tagName:o}]=ym(Object.assign({tagName:n,disabled:r},i));return m.jsx(o,Object.assign({},i,s,{ref:e}))});jT.displayName="Button";const lj=["onKeyDown"];function uj(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function cj(t){return!t||t.trim()==="#"}const UT=w.forwardRef((t,e)=>{let{onKeyDown:n}=t,r=uj(t,lj);const[i]=ym(Object.assign({tagName:"a"},r)),s=Ve(o=>{i.onKeyDown(o),n==null||n(o)});return cj(r.href)||r.role==="button"?m.jsx("a",Object.assign({ref:e},r,i,{onKeyDown:s})):m.jsx("a",Object.assign({ref:e},r,{onKeyDown:n}))});UT.displayName="Anchor";const dj={[hn]:"show",[fr]:"show"},$T=w.forwardRef(({className:t,children:e,transitionClasses:n={},onEnter:r,...i},s)=>{const o={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...i},l=w.useCallback((u,c)=>{J2(u),r==null||r(u,c)},[r]);return m.jsx(LT,{ref:s,addEndListener:xT,...o,onEnter:l,childRef:e.ref,children:(u,c)=>w.cloneElement(e,{...c,className:le("fade",t,e.props.className,dj[u],n[u])})})});$T.displayName="Fade";const hj={"aria-label":xn.string,onClick:xn.func,variant:xn.oneOf(["white"])},wm=w.forwardRef(({className:t,variant:e,"aria-label":n="Close",...r},i)=>m.jsx("button",{ref:i,type:"button",className:le("btn-close",e&&`btn-close-${e}`,t),"aria-label":n,...r}));wm.displayName="CloseButton";wm.propTypes=hj;const Uc=w.forwardRef(({as:t,bsPrefix:e,variant:n="primary",size:r,active:i=!1,disabled:s=!1,className:o,...l},u)=>{const c=ve(e,"btn"),[h,{tagName:p}]=ym({tagName:t,disabled:s,...l}),y=p;return m.jsx(y,{...h,...l,ref:u,disabled:s,className:le(o,c,i&&"active",n&&`${c}-${n}`,r&&`${c}-${r}`,l.href&&s&&"disabled")})});Uc.displayName="Button";function fj(t){const e=w.useRef(t);return e.current=t,e}function pj(t){const e=fj(t);w.useEffect(()=>()=>e.current(),[])}function mj(t,e){return w.Children.toArray(t).some(n=>w.isValidElement(n)&&n.type===e)}function gj({as:t,bsPrefix:e,className:n,...r}){e=ve(e,"col");const i=A2(),s=N2(),o=[],l=[];return i.forEach(u=>{const c=r[u];delete r[u];let h,p,y;typeof c=="object"&&c!=null?{span:h,offset:p,order:y}=c:h=c;const A=u!==s?`-${u}`:"";h&&o.push(h===!0?`${e}${A}`:`${e}${A}-${h}`),y!=null&&l.push(`order${A}-${y}`),p!=null&&l.push(`offset${A}-${p}`)}),[{...r,className:le(n,...o,...l)},{as:t,bsPrefix:e,spans:o}]}const FT=w.forwardRef((t,e)=>{const[{className:n,...r},{as:i="div",bsPrefix:s,spans:o}]=gj(t);return m.jsx(i,{...r,ref:e,className:le(n,!o.length&&s)})});FT.displayName="Col";var vj=Function.prototype.bind.call(Function.prototype.call,[].slice);function or(t,e){return vj(t.querySelectorAll(e))}function yj(t,e,n){const r=w.useRef(t!==void 0),[i,s]=w.useState(e),o=t!==void 0,l=r.current;return r.current=o,!o&&l&&i!==e&&s(e),[o?t:i,w.useCallback((...u)=>{const[c,...h]=u;let p=n==null?void 0:n(c,...h);return s(c),p},[n])]}function wj(){const[,t]=w.useReducer(e=>!e,!1);return t}const $c=w.createContext(null);var aw=Object.prototype.hasOwnProperty;function lw(t,e,n){for(n of t.keys())if(Bo(n,e))return n}function Bo(t,e){var n,r,i;if(t===e)return!0;if(t&&e&&(n=t.constructor)===e.constructor){if(n===Date)return t.getTime()===e.getTime();if(n===RegExp)return t.toString()===e.toString();if(n===Array){if((r=t.length)===e.length)for(;r--&&Bo(t[r],e[r]););return r===-1}if(n===Set){if(t.size!==e.size)return!1;for(r of t)if(i=r,i&&typeof i=="object"&&(i=lw(e,i),!i)||!e.has(i))return!1;return!0}if(n===Map){if(t.size!==e.size)return!1;for(r of t)if(i=r[0],i&&typeof i=="object"&&(i=lw(e,i),!i)||!Bo(r[1],e.get(i)))return!1;return!0}if(n===ArrayBuffer)t=new Uint8Array(t),e=new Uint8Array(e);else if(n===DataView){if((r=t.byteLength)===e.byteLength)for(;r--&&t.getInt8(r)===e.getInt8(r););return r===-1}if(ArrayBuffer.isView(t)){if((r=t.byteLength)===e.byteLength)for(;r--&&t[r]===e[r];);return r===-1}if(!n||typeof t=="object"){r=0;for(n in t)if(aw.call(t,n)&&++r&&!aw.call(e,n)||!(n in e)||!Bo(t[n],e[n]))return!1;return Object.keys(e).length===r}}return t!==t&&e!==e}function _j(t){const e=DT();return[t[0],w.useCallback(n=>{if(e())return t[1](n)},[e,t[1]])]}var _t="top",Ht="bottom",Wt="right",Et="left",_m="auto",Fa=[_t,Ht,Wt,Et],Ps="start",_a="end",Ej="clippingParents",VT="viewport",go="popper",Ij="reference",uw=Fa.reduce(function(t,e){return t.concat([e+"-"+Ps,e+"-"+_a])},[]),BT=[].concat(Fa,[_m]).reduce(function(t,e){return t.concat([e,e+"-"+Ps,e+"-"+_a])},[]),Tj="beforeRead",Sj="read",kj="afterRead",Cj="beforeMain",Rj="main",Pj="afterMain",Aj="beforeWrite",Nj="write",bj="afterWrite",Oj=[Tj,Sj,kj,Cj,Rj,Pj,Aj,Nj,bj];function wn(t){return t.split("-")[0]}function bt(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function Ei(t){var e=bt(t).Element;return t instanceof e||t instanceof Element}function _n(t){var e=bt(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Em(t){if(typeof ShadowRoot>"u")return!1;var e=bt(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}var ai=Math.max,Vu=Math.min,As=Math.round;function Cf(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function zT(){return!/^((?!chrome|android).)*safari/i.test(Cf())}function Ns(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var r=t.getBoundingClientRect(),i=1,s=1;e&&_n(t)&&(i=t.offsetWidth>0&&As(r.width)/t.offsetWidth||1,s=t.offsetHeight>0&&As(r.height)/t.offsetHeight||1);var o=Ei(t)?bt(t):window,l=o.visualViewport,u=!zT()&&n,c=(r.left+(u&&l?l.offsetLeft:0))/i,h=(r.top+(u&&l?l.offsetTop:0))/s,p=r.width/i,y=r.height/s;return{width:p,height:y,top:h,right:c+p,bottom:h+y,left:c,x:c,y:h}}function Im(t){var e=Ns(t),n=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:r}}function HT(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&Em(n)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function xr(t){return t?(t.nodeName||"").toLowerCase():null}function Bn(t){return bt(t).getComputedStyle(t)}function xj(t){return["table","td","th"].indexOf(xr(t))>=0}function $r(t){return((Ei(t)?t.ownerDocument:t.document)||window.document).documentElement}function Fc(t){return xr(t)==="html"?t:t.assignedSlot||t.parentNode||(Em(t)?t.host:null)||$r(t)}function cw(t){return!_n(t)||Bn(t).position==="fixed"?null:t.offsetParent}function Lj(t){var e=/firefox/i.test(Cf()),n=/Trident/i.test(Cf());if(n&&_n(t)){var r=Bn(t);if(r.position==="fixed")return null}var i=Fc(t);for(Em(i)&&(i=i.host);_n(i)&&["html","body"].indexOf(xr(i))<0;){var s=Bn(i);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||e&&s.willChange==="filter"||e&&s.filter&&s.filter!=="none")return i;i=i.parentNode}return null}function Va(t){for(var e=bt(t),n=cw(t);n&&xj(n)&&Bn(n).position==="static";)n=cw(n);return n&&(xr(n)==="html"||xr(n)==="body"&&Bn(n).position==="static")?e:n||Lj(t)||e}function Tm(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function zo(t,e,n){return ai(t,Vu(e,n))}function Dj(t,e,n){var r=zo(t,e,n);return r>n?n:r}function WT(){return{top:0,right:0,bottom:0,left:0}}function GT(t){return Object.assign({},WT(),t)}function KT(t,e){return e.reduce(function(n,r){return n[r]=t,n},{})}var Mj=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,GT(typeof e!="number"?e:KT(e,Fa))};function jj(t){var e,n=t.state,r=t.name,i=t.options,s=n.elements.arrow,o=n.modifiersData.popperOffsets,l=wn(n.placement),u=Tm(l),c=[Et,Wt].indexOf(l)>=0,h=c?"height":"width";if(!(!s||!o)){var p=Mj(i.padding,n),y=Im(s),A=u==="y"?_t:Et,I=u==="y"?Ht:Wt,O=n.rects.reference[h]+n.rects.reference[u]-o[u]-n.rects.popper[h],N=o[u]-n.rects.reference[u],R=Va(s),_=R?u==="y"?R.clientHeight||0:R.clientWidth||0:0,k=O/2-N/2,x=p[A],D=_-y[h]-p[I],M=_/2-y[h]/2+k,E=zo(x,M,D),g=u;n.modifiersData[r]=(e={},e[g]=E,e.centerOffset=E-M,e)}}function Uj(t){var e=t.state,n=t.options,r=n.element,i=r===void 0?"[data-popper-arrow]":r;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||HT(e.elements.popper,i)&&(e.elements.arrow=i))}const $j={name:"arrow",enabled:!0,phase:"main",fn:jj,effect:Uj,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function bs(t){return t.split("-")[1]}var Fj={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Vj(t,e){var n=t.x,r=t.y,i=e.devicePixelRatio||1;return{x:As(n*i)/i||0,y:As(r*i)/i||0}}function dw(t){var e,n=t.popper,r=t.popperRect,i=t.placement,s=t.variation,o=t.offsets,l=t.position,u=t.gpuAcceleration,c=t.adaptive,h=t.roundOffsets,p=t.isFixed,y=o.x,A=y===void 0?0:y,I=o.y,O=I===void 0?0:I,N=typeof h=="function"?h({x:A,y:O}):{x:A,y:O};A=N.x,O=N.y;var R=o.hasOwnProperty("x"),_=o.hasOwnProperty("y"),k=Et,x=_t,D=window;if(c){var M=Va(n),E="clientHeight",g="clientWidth";if(M===bt(n)&&(M=$r(n),Bn(M).position!=="static"&&l==="absolute"&&(E="scrollHeight",g="scrollWidth")),M=M,i===_t||(i===Et||i===Wt)&&s===_a){x=Ht;var T=p&&M===D&&D.visualViewport?D.visualViewport.height:M[E];O-=T-r.height,O*=u?1:-1}if(i===Et||(i===_t||i===Ht)&&s===_a){k=Wt;var C=p&&M===D&&D.visualViewport?D.visualViewport.width:M[g];A-=C-r.width,A*=u?1:-1}}var P=Object.assign({position:l},c&&Fj),b=h===!0?Vj({x:A,y:O},bt(n)):{x:A,y:O};if(A=b.x,O=b.y,u){var S;return Object.assign({},P,(S={},S[x]=_?"0":"",S[k]=R?"0":"",S.transform=(D.devicePixelRatio||1)<=1?"translate("+A+"px, "+O+"px)":"translate3d("+A+"px, "+O+"px, 0)",S))}return Object.assign({},P,(e={},e[x]=_?O+"px":"",e[k]=R?A+"px":"",e.transform="",e))}function Bj(t){var e=t.state,n=t.options,r=n.gpuAcceleration,i=r===void 0?!0:r,s=n.adaptive,o=s===void 0?!0:s,l=n.roundOffsets,u=l===void 0?!0:l,c={placement:wn(e.placement),variation:bs(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,dw(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:u})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,dw(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:u})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const zj={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Bj,data:{}};var Rl={passive:!0};function Hj(t){var e=t.state,n=t.instance,r=t.options,i=r.scroll,s=i===void 0?!0:i,o=r.resize,l=o===void 0?!0:o,u=bt(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return s&&c.forEach(function(h){h.addEventListener("scroll",n.update,Rl)}),l&&u.addEventListener("resize",n.update,Rl),function(){s&&c.forEach(function(h){h.removeEventListener("scroll",n.update,Rl)}),l&&u.removeEventListener("resize",n.update,Rl)}}const Wj={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Hj,data:{}};var Gj={left:"right",right:"left",bottom:"top",top:"bottom"};function Jl(t){return t.replace(/left|right|bottom|top/g,function(e){return Gj[e]})}var Kj={start:"end",end:"start"};function hw(t){return t.replace(/start|end/g,function(e){return Kj[e]})}function Sm(t){var e=bt(t),n=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:n,scrollTop:r}}function km(t){return Ns($r(t)).left+Sm(t).scrollLeft}function qj(t,e){var n=bt(t),r=$r(t),i=n.visualViewport,s=r.clientWidth,o=r.clientHeight,l=0,u=0;if(i){s=i.width,o=i.height;var c=zT();(c||!c&&e==="fixed")&&(l=i.offsetLeft,u=i.offsetTop)}return{width:s,height:o,x:l+km(t),y:u}}function Yj(t){var e,n=$r(t),r=Sm(t),i=(e=t.ownerDocument)==null?void 0:e.body,s=ai(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=ai(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),l=-r.scrollLeft+km(t),u=-r.scrollTop;return Bn(i||n).direction==="rtl"&&(l+=ai(n.clientWidth,i?i.clientWidth:0)-s),{width:s,height:o,x:l,y:u}}function Cm(t){var e=Bn(t),n=e.overflow,r=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function qT(t){return["html","body","#document"].indexOf(xr(t))>=0?t.ownerDocument.body:_n(t)&&Cm(t)?t:qT(Fc(t))}function Ho(t,e){var n;e===void 0&&(e=[]);var r=qT(t),i=r===((n=t.ownerDocument)==null?void 0:n.body),s=bt(r),o=i?[s].concat(s.visualViewport||[],Cm(r)?r:[]):r,l=e.concat(o);return i?l:l.concat(Ho(Fc(o)))}function Rf(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Jj(t,e){var n=Ns(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function fw(t,e,n){return e===VT?Rf(qj(t,n)):Ei(e)?Jj(e,n):Rf(Yj($r(t)))}function Xj(t){var e=Ho(Fc(t)),n=["absolute","fixed"].indexOf(Bn(t).position)>=0,r=n&&_n(t)?Va(t):t;return Ei(r)?e.filter(function(i){return Ei(i)&&HT(i,r)&&xr(i)!=="body"}):[]}function Qj(t,e,n,r){var i=e==="clippingParents"?Xj(t):[].concat(e),s=[].concat(i,[n]),o=s[0],l=s.reduce(function(u,c){var h=fw(t,c,r);return u.top=ai(h.top,u.top),u.right=Vu(h.right,u.right),u.bottom=Vu(h.bottom,u.bottom),u.left=ai(h.left,u.left),u},fw(t,o,r));return l.width=l.right-l.left,l.height=l.bottom-l.top,l.x=l.left,l.y=l.top,l}function YT(t){var e=t.reference,n=t.element,r=t.placement,i=r?wn(r):null,s=r?bs(r):null,o=e.x+e.width/2-n.width/2,l=e.y+e.height/2-n.height/2,u;switch(i){case _t:u={x:o,y:e.y-n.height};break;case Ht:u={x:o,y:e.y+e.height};break;case Wt:u={x:e.x+e.width,y:l};break;case Et:u={x:e.x-n.width,y:l};break;default:u={x:e.x,y:e.y}}var c=i?Tm(i):null;if(c!=null){var h=c==="y"?"height":"width";switch(s){case Ps:u[c]=u[c]-(e[h]/2-n[h]/2);break;case _a:u[c]=u[c]+(e[h]/2-n[h]/2);break}}return u}function Ea(t,e){e===void 0&&(e={});var n=e,r=n.placement,i=r===void 0?t.placement:r,s=n.strategy,o=s===void 0?t.strategy:s,l=n.boundary,u=l===void 0?Ej:l,c=n.rootBoundary,h=c===void 0?VT:c,p=n.elementContext,y=p===void 0?go:p,A=n.altBoundary,I=A===void 0?!1:A,O=n.padding,N=O===void 0?0:O,R=GT(typeof N!="number"?N:KT(N,Fa)),_=y===go?Ij:go,k=t.rects.popper,x=t.elements[I?_:y],D=Qj(Ei(x)?x:x.contextElement||$r(t.elements.popper),u,h,o),M=Ns(t.elements.reference),E=YT({reference:M,element:k,strategy:"absolute",placement:i}),g=Rf(Object.assign({},k,E)),T=y===go?g:M,C={top:D.top-T.top+R.top,bottom:T.bottom-D.bottom+R.bottom,left:D.left-T.left+R.left,right:T.right-D.right+R.right},P=t.modifiersData.offset;if(y===go&&P){var b=P[i];Object.keys(C).forEach(function(S){var X=[Wt,Ht].indexOf(S)>=0?1:-1,ae=[_t,Ht].indexOf(S)>=0?"y":"x";C[S]+=b[ae]*X})}return C}function Zj(t,e){e===void 0&&(e={});var n=e,r=n.placement,i=n.boundary,s=n.rootBoundary,o=n.padding,l=n.flipVariations,u=n.allowedAutoPlacements,c=u===void 0?BT:u,h=bs(r),p=h?l?uw:uw.filter(function(I){return bs(I)===h}):Fa,y=p.filter(function(I){return c.indexOf(I)>=0});y.length===0&&(y=p);var A=y.reduce(function(I,O){return I[O]=Ea(t,{placement:O,boundary:i,rootBoundary:s,padding:o})[wn(O)],I},{});return Object.keys(A).sort(function(I,O){return A[I]-A[O]})}function eU(t){if(wn(t)===_m)return[];var e=Jl(t);return[hw(t),e,hw(e)]}function tU(t){var e=t.state,n=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var i=n.mainAxis,s=i===void 0?!0:i,o=n.altAxis,l=o===void 0?!0:o,u=n.fallbackPlacements,c=n.padding,h=n.boundary,p=n.rootBoundary,y=n.altBoundary,A=n.flipVariations,I=A===void 0?!0:A,O=n.allowedAutoPlacements,N=e.options.placement,R=wn(N),_=R===N,k=u||(_||!I?[Jl(N)]:eU(N)),x=[N].concat(k).reduce(function(Ie,re){return Ie.concat(wn(re)===_m?Zj(e,{placement:re,boundary:h,rootBoundary:p,padding:c,flipVariations:I,allowedAutoPlacements:O}):re)},[]),D=e.rects.reference,M=e.rects.popper,E=new Map,g=!0,T=x[0],C=0;C<x.length;C++){var P=x[C],b=wn(P),S=bs(P)===Ps,X=[_t,Ht].indexOf(b)>=0,ae=X?"width":"height",$=Ea(e,{placement:P,boundary:h,rootBoundary:p,altBoundary:y,padding:c}),H=X?S?Wt:Et:S?Ht:_t;D[ae]>M[ae]&&(H=Jl(H));var U=Jl(H),z=[];if(s&&z.push($[b]<=0),l&&z.push($[H]<=0,$[U]<=0),z.every(function(Ie){return Ie})){T=P,g=!1;break}E.set(P,z)}if(g)for(var W=I?3:1,Y=function(re){var Re=x.find(function(Je){var Kt=E.get(Je);if(Kt)return Kt.slice(0,re).every(function(En){return En})});if(Re)return T=Re,"break"},K=W;K>0;K--){var ne=Y(K);if(ne==="break")break}e.placement!==T&&(e.modifiersData[r]._skip=!0,e.placement=T,e.reset=!0)}}const nU={name:"flip",enabled:!0,phase:"main",fn:tU,requiresIfExists:["offset"],data:{_skip:!1}};function pw(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function mw(t){return[_t,Wt,Ht,Et].some(function(e){return t[e]>=0})}function rU(t){var e=t.state,n=t.name,r=e.rects.reference,i=e.rects.popper,s=e.modifiersData.preventOverflow,o=Ea(e,{elementContext:"reference"}),l=Ea(e,{altBoundary:!0}),u=pw(o,r),c=pw(l,i,s),h=mw(u),p=mw(c);e.modifiersData[n]={referenceClippingOffsets:u,popperEscapeOffsets:c,isReferenceHidden:h,hasPopperEscaped:p},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":h,"data-popper-escaped":p})}const iU={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:rU};function sU(t,e,n){var r=wn(t),i=[Et,_t].indexOf(r)>=0?-1:1,s=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,o=s[0],l=s[1];return o=o||0,l=(l||0)*i,[Et,Wt].indexOf(r)>=0?{x:l,y:o}:{x:o,y:l}}function oU(t){var e=t.state,n=t.options,r=t.name,i=n.offset,s=i===void 0?[0,0]:i,o=BT.reduce(function(h,p){return h[p]=sU(p,e.rects,s),h},{}),l=o[e.placement],u=l.x,c=l.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=u,e.modifiersData.popperOffsets.y+=c),e.modifiersData[r]=o}const aU={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:oU};function lU(t){var e=t.state,n=t.name;e.modifiersData[n]=YT({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const uU={name:"popperOffsets",enabled:!0,phase:"read",fn:lU,data:{}};function cU(t){return t==="x"?"y":"x"}function dU(t){var e=t.state,n=t.options,r=t.name,i=n.mainAxis,s=i===void 0?!0:i,o=n.altAxis,l=o===void 0?!1:o,u=n.boundary,c=n.rootBoundary,h=n.altBoundary,p=n.padding,y=n.tether,A=y===void 0?!0:y,I=n.tetherOffset,O=I===void 0?0:I,N=Ea(e,{boundary:u,rootBoundary:c,padding:p,altBoundary:h}),R=wn(e.placement),_=bs(e.placement),k=!_,x=Tm(R),D=cU(x),M=e.modifiersData.popperOffsets,E=e.rects.reference,g=e.rects.popper,T=typeof O=="function"?O(Object.assign({},e.rects,{placement:e.placement})):O,C=typeof T=="number"?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),P=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,b={x:0,y:0};if(M){if(s){var S,X=x==="y"?_t:Et,ae=x==="y"?Ht:Wt,$=x==="y"?"height":"width",H=M[x],U=H+N[X],z=H-N[ae],W=A?-g[$]/2:0,Y=_===Ps?E[$]:g[$],K=_===Ps?-g[$]:-E[$],ne=e.elements.arrow,Ie=A&&ne?Im(ne):{width:0,height:0},re=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:WT(),Re=re[X],Je=re[ae],Kt=zo(0,E[$],Ie[$]),En=k?E[$]/2-W-Kt-Re-C.mainAxis:Y-Kt-Re-C.mainAxis,on=k?-E[$]/2+W+Kt+Je+C.mainAxis:K+Kt+Je+C.mainAxis,an=e.elements.arrow&&Va(e.elements.arrow),Yn=an?x==="y"?an.clientTop||0:an.clientLeft||0:0,ln=(S=P==null?void 0:P[x])!=null?S:0,un=H+En-ln-Yn,de=H+on-ln,Jn=zo(A?Vu(U,un):U,H,A?ai(z,de):z);M[x]=Jn,b[x]=Jn-H}if(l){var Xn,zc=x==="x"?_t:Et,za=x==="x"?Ht:Wt,qt=M[D],Fr=D==="y"?"height":"width",Ha=qt+N[zc],Ci=qt-N[za],Vr=[_t,Et].indexOf(R)!==-1,Hs=(Xn=P==null?void 0:P[D])!=null?Xn:0,De=Vr?Ha:qt-E[Fr]-g[Fr]-Hs+C.altAxis,$e=Vr?qt+E[Fr]+g[Fr]-Hs-C.altAxis:Ci,Br=A&&Vr?Dj(De,qt,$e):zo(A?De:Ha,qt,A?$e:Ci);M[D]=Br,b[D]=Br-qt}e.modifiersData[r]=b}}const hU={name:"preventOverflow",enabled:!0,phase:"main",fn:dU,requiresIfExists:["offset"]};function fU(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function pU(t){return t===bt(t)||!_n(t)?Sm(t):fU(t)}function mU(t){var e=t.getBoundingClientRect(),n=As(e.width)/t.offsetWidth||1,r=As(e.height)/t.offsetHeight||1;return n!==1||r!==1}function gU(t,e,n){n===void 0&&(n=!1);var r=_n(e),i=_n(e)&&mU(e),s=$r(e),o=Ns(t,i,n),l={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(r||!r&&!n)&&((xr(e)!=="body"||Cm(s))&&(l=pU(e)),_n(e)?(u=Ns(e,!0),u.x+=e.clientLeft,u.y+=e.clientTop):s&&(u.x=km(s))),{x:o.left+l.scrollLeft-u.x,y:o.top+l.scrollTop-u.y,width:o.width,height:o.height}}function vU(t){var e=new Map,n=new Set,r=[];t.forEach(function(s){e.set(s.name,s)});function i(s){n.add(s.name);var o=[].concat(s.requires||[],s.requiresIfExists||[]);o.forEach(function(l){if(!n.has(l)){var u=e.get(l);u&&i(u)}}),r.push(s)}return t.forEach(function(s){n.has(s.name)||i(s)}),r}function yU(t){var e=vU(t);return Oj.reduce(function(n,r){return n.concat(e.filter(function(i){return i.phase===r}))},[])}function wU(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function _U(t){var e=t.reduce(function(n,r){var i=n[r.name];return n[r.name]=i?Object.assign({},i,r,{options:Object.assign({},i.options,r.options),data:Object.assign({},i.data,r.data)}):r,n},{});return Object.keys(e).map(function(n){return e[n]})}var gw={placement:"bottom",modifiers:[],strategy:"absolute"};function vw(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function EU(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,r=n===void 0?[]:n,i=e.defaultOptions,s=i===void 0?gw:i;return function(l,u,c){c===void 0&&(c=s);var h={placement:"bottom",orderedModifiers:[],options:Object.assign({},gw,s),modifiersData:{},elements:{reference:l,popper:u},attributes:{},styles:{}},p=[],y=!1,A={state:h,setOptions:function(R){var _=typeof R=="function"?R(h.options):R;O(),h.options=Object.assign({},s,h.options,_),h.scrollParents={reference:Ei(l)?Ho(l):l.contextElement?Ho(l.contextElement):[],popper:Ho(u)};var k=yU(_U([].concat(r,h.options.modifiers)));return h.orderedModifiers=k.filter(function(x){return x.enabled}),I(),A.update()},forceUpdate:function(){if(!y){var R=h.elements,_=R.reference,k=R.popper;if(vw(_,k)){h.rects={reference:gU(_,Va(k),h.options.strategy==="fixed"),popper:Im(k)},h.reset=!1,h.placement=h.options.placement,h.orderedModifiers.forEach(function(C){return h.modifiersData[C.name]=Object.assign({},C.data)});for(var x=0;x<h.orderedModifiers.length;x++){if(h.reset===!0){h.reset=!1,x=-1;continue}var D=h.orderedModifiers[x],M=D.fn,E=D.options,g=E===void 0?{}:E,T=D.name;typeof M=="function"&&(h=M({state:h,options:g,name:T,instance:A})||h)}}}},update:wU(function(){return new Promise(function(N){A.forceUpdate(),N(h)})}),destroy:function(){O(),y=!0}};if(!vw(l,u))return A;A.setOptions(c).then(function(N){!y&&c.onFirstUpdate&&c.onFirstUpdate(N)});function I(){h.orderedModifiers.forEach(function(N){var R=N.name,_=N.options,k=_===void 0?{}:_,x=N.effect;if(typeof x=="function"){var D=x({state:h,name:R,instance:A,options:k}),M=function(){};p.push(D||M)}})}function O(){p.forEach(function(N){return N()}),p=[]}return A}}const IU=EU({defaultModifiers:[iU,uU,zj,Wj,aU,nU,hU,$j]}),TU=["enabled","placement","strategy","modifiers"];function SU(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const kU={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},CU={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:t})=>()=>{const{reference:e,popper:n}=t.elements;if("removeAttribute"in e){const r=(e.getAttribute("aria-describedby")||"").split(",").filter(i=>i.trim()!==n.id);r.length?e.setAttribute("aria-describedby",r.join(",")):e.removeAttribute("aria-describedby")}},fn:({state:t})=>{var e;const{popper:n,reference:r}=t.elements,i=(e=n.getAttribute("role"))==null?void 0:e.toLowerCase();if(n.id&&i==="tooltip"&&"setAttribute"in r){const s=r.getAttribute("aria-describedby");if(s&&s.split(",").indexOf(n.id)!==-1)return;r.setAttribute("aria-describedby",s?`${s},${n.id}`:n.id)}}},RU=[];function PU(t,e,n={}){let{enabled:r=!0,placement:i="bottom",strategy:s="absolute",modifiers:o=RU}=n,l=SU(n,TU);const u=w.useRef(o),c=w.useRef(),h=w.useCallback(()=>{var N;(N=c.current)==null||N.update()},[]),p=w.useCallback(()=>{var N;(N=c.current)==null||N.forceUpdate()},[]),[y,A]=_j(w.useState({placement:i,update:h,forceUpdate:p,attributes:{},styles:{popper:{},arrow:{}}})),I=w.useMemo(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:N})=>{const R={},_={};Object.keys(N.elements).forEach(k=>{R[k]=N.styles[k],_[k]=N.attributes[k]}),A({state:N,styles:R,attributes:_,update:h,forceUpdate:p,placement:N.placement})}}),[h,p,A]),O=w.useMemo(()=>(Bo(u.current,o)||(u.current=o),u.current),[o]);return w.useEffect(()=>{!c.current||!r||c.current.setOptions({placement:i,strategy:s,modifiers:[...O,I,kU]})},[s,i,I,r,O]),w.useEffect(()=>{if(!(!r||t==null||e==null))return c.current=IU(t,e,Object.assign({},l,{placement:i,strategy:s,modifiers:[...O,CU,I]})),()=>{c.current!=null&&(c.current.destroy(),c.current=void 0,A(N=>Object.assign({},N,{attributes:{},styles:{popper:{}}})))}},[r,t,e]),y}function Bu(t,e){if(t.contains)return t.contains(e);if(t.compareDocumentPosition)return t===e||!!(t.compareDocumentPosition(e)&16)}var AU=function(){},NU=AU;const bU=Ia(NU),yw=()=>{};function OU(t){return t.button===0}function xU(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}const Zd=t=>t&&("current"in t?t.current:t),ww={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};function LU(t,e=yw,{disabled:n,clickTrigger:r="click"}={}){const i=w.useRef(!1),s=w.useRef(!1),o=w.useCallback(c=>{const h=Zd(t);bU(!!h,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),i.current=!h||xU(c)||!OU(c)||!!Bu(h,c.target)||s.current,s.current=!1},[t]),l=Ve(c=>{const h=Zd(t);h&&Bu(h,c.target)&&(s.current=!0)}),u=Ve(c=>{i.current||e(c)});w.useEffect(()=>{var c,h;if(n||t==null)return;const p=Mc(Zd(t)),y=p.defaultView||window;let A=(c=y.event)!=null?c:(h=y.parent)==null?void 0:h.event,I=null;ww[r]&&(I=yr(p,ww[r],l,!0));const O=yr(p,r,o,!0),N=yr(p,r,_=>{if(_===A){A=void 0;return}u(_)});let R=[];return"ontouchstart"in p.documentElement&&(R=[].slice.call(p.body.children).map(_=>yr(_,"mousemove",yw))),()=>{I==null||I(),O(),N(),R.forEach(_=>_())}},[t,n,r,o,l,u])}function DU(t){const e={};return Array.isArray(t)?(t==null||t.forEach(n=>{e[n.name]=n}),e):t||e}function MU(t={}){return Array.isArray(t)?t:Object.keys(t).map(e=>(t[e].name=e,t[e]))}function jU({enabled:t,enableEvents:e,placement:n,flip:r,offset:i,fixed:s,containerPadding:o,arrowElement:l,popperConfig:u={}}){var c,h,p,y,A;const I=DU(u.modifiers);return Object.assign({},u,{placement:n,enabled:t,strategy:s?"fixed":u.strategy,modifiers:MU(Object.assign({},I,{eventListeners:{enabled:e,options:(c=I.eventListeners)==null?void 0:c.options},preventOverflow:Object.assign({},I.preventOverflow,{options:o?Object.assign({padding:o},(h=I.preventOverflow)==null?void 0:h.options):(p=I.preventOverflow)==null?void 0:p.options}),offset:{options:Object.assign({offset:i},(y=I.offset)==null?void 0:y.options)},arrow:Object.assign({},I.arrow,{enabled:!!l,options:Object.assign({},(A=I.arrow)==null?void 0:A.options,{element:l})}),flip:Object.assign({enabled:!!r},I.flip)}))})}const UU=["children","usePopper"];function $U(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const FU=()=>{};function JT(t={}){const e=w.useContext($c),[n,r]=tj(),i=w.useRef(!1),{flip:s,offset:o,rootCloseEvent:l,fixed:u=!1,placement:c,popperConfig:h={},enableEventListeners:p=!0,usePopper:y=!!e}=t,A=(e==null?void 0:e.show)==null?!!t.show:e.show;A&&!i.current&&(i.current=!0);const I=M=>{e==null||e.toggle(!1,M)},{placement:O,setMenu:N,menuElement:R,toggleElement:_}=e||{},k=PU(_,R,jU({placement:c||O||"bottom-start",enabled:y,enableEvents:p??A,offset:o,flip:s,fixed:u,arrowElement:n,popperConfig:h})),x=Object.assign({ref:N||FU,"aria-labelledby":_==null?void 0:_.id},k.attributes.popper,{style:k.styles.popper}),D={show:A,placement:O,hasShown:i.current,toggle:e==null?void 0:e.toggle,popper:y?k:null,arrowProps:y?Object.assign({ref:r},k.attributes.arrow,{style:k.styles.arrow}):{}};return LU(R,I,{clickTrigger:l,disabled:!A}),[x,D]}function XT(t){let{children:e,usePopper:n=!0}=t,r=$U(t,UU);const[i,s]=JT(Object.assign({},r,{usePopper:n}));return m.jsx(m.Fragment,{children:e(i,s)})}XT.displayName="DropdownMenu";const zu={prefix:String(Math.round(Math.random()*1e10)),current:0},QT=st.createContext(zu),VU=st.createContext(!1);let BU=!!(typeof window<"u"&&window.document&&window.document.createElement),eh=new WeakMap;function zU(t=!1){let e=w.useContext(QT),n=w.useRef(null);if(n.current===null&&!t){var r,i;let s=(i=st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)===null||i===void 0||(r=i.ReactCurrentOwner)===null||r===void 0?void 0:r.current;if(s){let o=eh.get(s);o==null?eh.set(s,{id:e.current,state:s.memoizedState}):s.memoizedState!==o.state&&(e.current=o.id,eh.delete(s))}n.current=++e.current}return n.current}function HU(t){let e=w.useContext(QT);e===zu&&!BU&&console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let n=zU(!!t),r=`react-aria${e.prefix}`;return t||`${r}-${n}`}function WU(t){let e=st.useId(),[n]=w.useState(JU()),r=n?"react-aria":`react-aria${zu.prefix}`;return t||`${r}-${e}`}const GU=typeof st.useId=="function"?WU:HU;function KU(){return!1}function qU(){return!0}function YU(t){return()=>{}}function JU(){return typeof st.useSyncExternalStore=="function"?st.useSyncExternalStore(YU,KU,qU):w.useContext(VU)}const ZT=t=>{var e;return((e=t.getAttribute("role"))==null?void 0:e.toLowerCase())==="menu"},_w=()=>{};function eS(){const t=GU(),{show:e=!1,toggle:n=_w,setToggle:r,menuElement:i}=w.useContext($c)||{},s=w.useCallback(l=>{n(!e,l)},[e,n]),o={id:t,ref:r||_w,onClick:s,"aria-expanded":!!e};return i&&ZT(i)&&(o["aria-haspopup"]=!0),[o,{show:e,toggle:n}]}function tS({children:t}){const[e,n]=eS();return m.jsx(m.Fragment,{children:t(e,n)})}tS.displayName="DropdownToggle";const Pf=w.createContext(null),Ew=(t,e=null)=>t!=null?String(t):e||null,nS=w.createContext(null);nS.displayName="NavContext";const XU="data-rr-ui-";function Rm(t){return`${XU}${t}`}const QU=["eventKey","disabled","onClick","active","as"];function ZU(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function rS({key:t,href:e,active:n,disabled:r,onClick:i}){const s=w.useContext(Pf),o=w.useContext(nS),{activeKey:l}=o||{},u=Ew(t,e),c=n==null&&t!=null?Ew(l)===u:n;return[{onClick:Ve(p=>{r||(i==null||i(p),s&&!p.isPropagationStopped()&&s(u,p))}),"aria-disabled":r||void 0,"aria-selected":c,[Rm("dropdown-item")]:""},{isActive:c}]}const iS=w.forwardRef((t,e)=>{let{eventKey:n,disabled:r,onClick:i,active:s,as:o=jT}=t,l=ZU(t,QU);const[u]=rS({key:n,href:l.href,disabled:r,onClick:i,active:s});return m.jsx(o,Object.assign({},l,{ref:e},u))});iS.displayName="DropdownItem";const sS=w.createContext(jc?window:void 0);sS.Provider;function Vc(){return w.useContext(sS)}function Iw(){const t=wj(),e=w.useRef(null),n=w.useCallback(r=>{e.current=r,t()},[t]);return[e,n]}function Ba({defaultShow:t,show:e,onSelect:n,onToggle:r,itemSelector:i=`* [${Rm("dropdown-item")}]`,focusFirstItemOnShow:s,placement:o="bottom-start",children:l}){const u=Vc(),[c,h]=yj(e,t,r),[p,y]=Iw(),A=p.current,[I,O]=Iw(),N=I.current,R=MT(c),_=w.useRef(null),k=w.useRef(!1),x=w.useContext(Pf),D=w.useCallback((P,b,S=b==null?void 0:b.type)=>{h(P,{originalEvent:b,source:S})},[h]),M=Ve((P,b)=>{n==null||n(P,b),D(!1,b,"select"),b.isPropagationStopped()||x==null||x(P,b)}),E=w.useMemo(()=>({toggle:D,placement:o,show:c,menuElement:A,toggleElement:N,setMenu:y,setToggle:O}),[D,o,c,A,N,y,O]);A&&R&&!c&&(k.current=A.contains(A.ownerDocument.activeElement));const g=Ve(()=>{N&&N.focus&&N.focus()}),T=Ve(()=>{const P=_.current;let b=s;if(b==null&&(b=p.current&&ZT(p.current)?"keyboard":!1),b===!1||b==="keyboard"&&!/^key.+$/.test(P))return;const S=or(p.current,i)[0];S&&S.focus&&S.focus()});w.useEffect(()=>{c?T():k.current&&(k.current=!1,g())},[c,k,g,T]),w.useEffect(()=>{_.current=null});const C=(P,b)=>{if(!p.current)return null;const S=or(p.current,i);let X=S.indexOf(P)+b;return X=Math.max(0,Math.min(X,S.length)),S[X]};return nj(w.useCallback(()=>u.document,[u]),"keydown",P=>{var b,S;const{key:X}=P,ae=P.target,$=(b=p.current)==null?void 0:b.contains(ae),H=(S=I.current)==null?void 0:S.contains(ae);if(/input|textarea/i.test(ae.tagName)&&(X===" "||X!=="Escape"&&$||X==="Escape"&&ae.type==="search")||!$&&!H||X==="Tab"&&(!p.current||!c))return;_.current=P.type;const z={originalEvent:P,source:P.type};switch(X){case"ArrowUp":{const W=C(ae,-1);W&&W.focus&&W.focus(),P.preventDefault();return}case"ArrowDown":if(P.preventDefault(),!c)h(!0,z);else{const W=C(ae,1);W&&W.focus&&W.focus()}return;case"Tab":OT(ae.ownerDocument,"keyup",W=>{var Y;(W.key==="Tab"&&!W.target||!((Y=p.current)!=null&&Y.contains(W.target)))&&h(!1,z)},{once:!0});break;case"Escape":X==="Escape"&&(P.preventDefault(),P.stopPropagation()),h(!1,z);break}}),m.jsx(Pf.Provider,{value:M,children:m.jsx($c.Provider,{value:E,children:l})})}Ba.displayName="Dropdown";Ba.Menu=XT;Ba.Toggle=tS;Ba.Item=iS;const Pm=w.createContext({});Pm.displayName="DropdownContext";const oS=w.forwardRef(({className:t,bsPrefix:e,as:n="hr",role:r="separator",...i},s)=>(e=ve(e,"dropdown-divider"),m.jsx(n,{ref:s,className:le(t,e),role:r,...i})));oS.displayName="DropdownDivider";const aS=w.forwardRef(({className:t,bsPrefix:e,as:n="div",role:r="heading",...i},s)=>(e=ve(e,"dropdown-header"),m.jsx(n,{ref:s,className:le(t,e),role:r,...i})));aS.displayName="DropdownHeader";const lS=w.forwardRef(({bsPrefix:t,className:e,eventKey:n,disabled:r=!1,onClick:i,active:s,as:o=UT,...l},u)=>{const c=ve(t,"dropdown-item"),[h,p]=rS({key:n,href:l.href,disabled:r,onClick:i,active:s});return m.jsx(o,{...l,...h,ref:u,className:le(e,c,p.isActive&&"active",r&&"disabled")})});lS.displayName="DropdownItem";const uS=w.forwardRef(({className:t,bsPrefix:e,as:n="span",...r},i)=>(e=ve(e,"dropdown-item-text"),m.jsx(n,{ref:i,className:le(t,e),...r})));uS.displayName="DropdownItemText";const Am=w.createContext(null);Am.displayName="InputGroupContext";const Nm=w.createContext(null);Nm.displayName="NavbarContext";function cS(t,e){return t}function dS(t,e,n){const r=n?"top-end":"top-start",i=n?"top-start":"top-end",s=n?"bottom-end":"bottom-start",o=n?"bottom-start":"bottom-end",l=n?"right-start":"left-start",u=n?"right-end":"left-end",c=n?"left-start":"right-start",h=n?"left-end":"right-end";let p=t?o:s;return e==="up"?p=t?i:r:e==="end"?p=t?h:c:e==="start"?p=t?u:l:e==="down-centered"?p="bottom":e==="up-centered"&&(p="top"),p}const hS=w.forwardRef(({bsPrefix:t,className:e,align:n,rootCloseEvent:r,flip:i=!0,show:s,renderOnMount:o,as:l="div",popperConfig:u,variant:c,...h},p)=>{let y=!1;const A=w.useContext(Nm),I=ve(t,"dropdown-menu"),{align:O,drop:N,isRTL:R}=w.useContext(Pm);n=n||O;const _=w.useContext(Am),k=[];if(n)if(typeof n=="object"){const P=Object.keys(n);if(P.length){const b=P[0],S=n[b];y=S==="start",k.push(`${I}-${b}-${S}`)}}else n==="end"&&(y=!0);const x=dS(y,N,R),[D,{hasShown:M,popper:E,show:g,toggle:T}]=JT({flip:i,rootCloseEvent:r,show:s,usePopper:!A&&k.length===0,offset:[0,2],popperConfig:u,placement:x});if(D.ref=zs(cS(p),D.ref),Fu(()=>{g&&(E==null||E.update())},[g]),!M&&!o&&!_)return null;typeof l!="string"&&(D.show=g,D.close=()=>T==null?void 0:T(!1),D.align=n);let C=h.style;return E!=null&&E.placement&&(C={...h.style,...D.style},h["x-placement"]=E.placement),m.jsx(l,{...h,...D,style:C,...(k.length||A)&&{"data-bs-popper":"static"},className:le(e,I,g&&"show",y&&`${I}-end`,c&&`${I}-${c}`,...k)})});hS.displayName="DropdownMenu";const fS=w.forwardRef(({bsPrefix:t,split:e,className:n,childBsPrefix:r,as:i=Uc,...s},o)=>{const l=ve(t,"dropdown-toggle"),u=w.useContext($c);r!==void 0&&(s.bsPrefix=r);const[c]=eS();return c.ref=zs(c.ref,cS(o)),m.jsx(i,{className:le(n,l,e&&`${l}-split`,(u==null?void 0:u.show)&&"show"),...c,...s})});fS.displayName="DropdownToggle";const pS=w.forwardRef((t,e)=>{const{bsPrefix:n,drop:r="down",show:i,className:s,align:o="start",onSelect:l,onToggle:u,focusFirstItemOnShow:c,as:h="div",navbar:p,autoClose:y=!0,...A}=k2(t,{show:"onToggle"}),I=w.useContext(Am),O=ve(n,"dropdown"),N=b2(),R=E=>y===!1?E==="click":y==="inside"?E!=="rootClose":y==="outside"?E!=="select":!0,_=Ve((E,g)=>{var T;!((T=g.originalEvent)==null||(T=T.target)==null)&&T.classList.contains("dropdown-toggle")&&g.source==="mousedown"||(g.originalEvent.currentTarget===document&&(g.source!=="keydown"||g.originalEvent.key==="Escape")&&(g.source="rootClose"),R(g.source)&&(u==null||u(E,g)))}),x=dS(o==="end",r,N),D=w.useMemo(()=>({align:o,drop:r,isRTL:N}),[o,r,N]),M={down:O,"down-centered":`${O}-center`,up:"dropup","up-centered":"dropup-center dropup",end:"dropend",start:"dropstart"};return m.jsx(Pm.Provider,{value:D,children:m.jsx(Ba,{placement:x,show:i,onSelect:l,onToggle:_,focusFirstItemOnShow:c,itemSelector:`.${O}-item:not(.disabled):not(:disabled)`,children:I?A.children:m.jsx(h,{...A,ref:e,className:le(s,i&&"show",M[r])})})})});pS.displayName="Dropdown";const Ae=Object.assign(pS,{Toggle:fS,Menu:hS,Item:lS,ItemText:uS,Divider:oS,Header:aS}),e$={type:xn.string,tooltip:xn.bool,as:xn.elementType},Bc=w.forwardRef(({as:t="div",className:e,type:n="valid",tooltip:r=!1,...i},s)=>m.jsx(t,{...i,ref:s,className:le(e,`${n}-${r?"tooltip":"feedback"}`)}));Bc.displayName="Feedback";Bc.propTypes=e$;const zn=w.createContext({}),bm=w.forwardRef(({id:t,bsPrefix:e,className:n,type:r="checkbox",isValid:i=!1,isInvalid:s=!1,as:o="input",...l},u)=>{const{controlId:c}=w.useContext(zn);return e=ve(e,"form-check-input"),m.jsx(o,{...l,ref:u,type:r,id:t||c,className:le(n,e,i&&"is-valid",s&&"is-invalid")})});bm.displayName="FormCheckInput";const Hu=w.forwardRef(({bsPrefix:t,className:e,htmlFor:n,...r},i)=>{const{controlId:s}=w.useContext(zn);return t=ve(t,"form-check-label"),m.jsx("label",{...r,ref:i,htmlFor:n||s,className:le(e,t)})});Hu.displayName="FormCheckLabel";const mS=w.forwardRef(({id:t,bsPrefix:e,bsSwitchPrefix:n,inline:r=!1,reverse:i=!1,disabled:s=!1,isValid:o=!1,isInvalid:l=!1,feedbackTooltip:u=!1,feedback:c,feedbackType:h,className:p,style:y,title:A="",type:I="checkbox",label:O,children:N,as:R="input",..._},k)=>{e=ve(e,"form-check"),n=ve(n,"form-switch");const{controlId:x}=w.useContext(zn),D=w.useMemo(()=>({controlId:t||x}),[x,t]),M=!N&&O!=null&&O!==!1||mj(N,Hu),E=m.jsx(bm,{..._,type:I==="switch"?"checkbox":I,ref:k,isValid:o,isInvalid:l,disabled:s,as:R});return m.jsx(zn.Provider,{value:D,children:m.jsx("div",{style:y,className:le(p,M&&e,r&&`${e}-inline`,i&&`${e}-reverse`,I==="switch"&&n),children:N||m.jsxs(m.Fragment,{children:[E,M&&m.jsx(Hu,{title:A,children:O}),c&&m.jsx(Bc,{type:h,tooltip:u,children:c})]})})})});mS.displayName="FormCheck";const Wu=Object.assign(mS,{Input:bm,Label:Hu}),gS=w.forwardRef(({bsPrefix:t,type:e,size:n,htmlSize:r,id:i,className:s,isValid:o=!1,isInvalid:l=!1,plaintext:u,readOnly:c,as:h="input",...p},y)=>{const{controlId:A}=w.useContext(zn);return t=ve(t,"form-control"),m.jsx(h,{...p,type:e,size:r,ref:y,readOnly:c,id:i||A,className:le(s,u?`${t}-plaintext`:t,n&&`${t}-${n}`,e==="color"&&`${t}-color`,o&&"is-valid",l&&"is-invalid")})});gS.displayName="FormControl";const vS=Object.assign(gS,{Feedback:Bc}),yS=w.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=ve(e,"form-floating"),m.jsx(n,{ref:i,className:le(t,e),...r})));yS.displayName="FormFloating";const Om=w.forwardRef(({controlId:t,as:e="div",...n},r)=>{const i=w.useMemo(()=>({controlId:t}),[t]);return m.jsx(zn.Provider,{value:i,children:m.jsx(e,{...n,ref:r})})});Om.displayName="FormGroup";const wS=w.forwardRef(({as:t="label",bsPrefix:e,column:n=!1,visuallyHidden:r=!1,className:i,htmlFor:s,...o},l)=>{const{controlId:u}=w.useContext(zn);e=ve(e,"form-label");let c="col-form-label";typeof n=="string"&&(c=`${c} ${c}-${n}`);const h=le(i,e,r&&"visually-hidden",n&&c);return s=s||u,n?m.jsx(FT,{ref:l,as:"label",className:h,htmlFor:s,...o}):m.jsx(t,{ref:l,className:h,htmlFor:s,...o})});wS.displayName="FormLabel";const _S=w.forwardRef(({bsPrefix:t,className:e,id:n,...r},i)=>{const{controlId:s}=w.useContext(zn);return t=ve(t,"form-range"),m.jsx("input",{...r,type:"range",ref:i,className:le(e,t),id:n||s})});_S.displayName="FormRange";const ES=w.forwardRef(({bsPrefix:t,size:e,htmlSize:n,className:r,isValid:i=!1,isInvalid:s=!1,id:o,...l},u)=>{const{controlId:c}=w.useContext(zn);return t=ve(t,"form-select"),m.jsx("select",{...l,size:n,ref:u,className:le(r,t,e&&`${t}-${e}`,i&&"is-valid",s&&"is-invalid"),id:o||c})});ES.displayName="FormSelect";const IS=w.forwardRef(({bsPrefix:t,className:e,as:n="small",muted:r,...i},s)=>(t=ve(t,"form-text"),m.jsx(n,{...i,ref:s,className:le(e,t,r&&"text-muted")})));IS.displayName="FormText";const TS=w.forwardRef((t,e)=>m.jsx(Wu,{...t,ref:e,type:"switch"}));TS.displayName="Switch";const t$=Object.assign(TS,{Input:Wu.Input,Label:Wu.Label}),SS=w.forwardRef(({bsPrefix:t,className:e,children:n,controlId:r,label:i,...s},o)=>(t=ve(t,"form-floating"),m.jsxs(Om,{ref:o,className:le(e,t),controlId:r,...s,children:[n,m.jsx("label",{htmlFor:r,children:i})]})));SS.displayName="FloatingLabel";const n$={_ref:xn.any,validated:xn.bool,as:xn.elementType},xm=w.forwardRef(({className:t,validated:e,as:n="form",...r},i)=>m.jsx(n,{...r,ref:i,className:le(t,e&&"was-validated")}));xm.displayName="Form";xm.propTypes=n$;const r$=Object.assign(xm,{Group:Om,Control:vS,Floating:yS,Check:Wu,Switch:t$,Label:wS,Text:IS,Range:_S,Select:ES,FloatingLabel:SS});function th(t){t===void 0&&(t=Mc());try{var e=t.activeElement;return!e||!e.nodeName?null:e}catch{return t.body}}function i$(t=document){const e=t.defaultView;return Math.abs(e.innerWidth-t.documentElement.clientWidth)}const Tw=Rm("modal-open");class Lm{constructor({ownerDocument:e,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return i$(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",i=this.getElement();e.style={overflow:i.style.overflow,[r]:i.style[r]},e.scrollBarWidth&&(n[r]=`${parseInt(oi(i,r)||"0",10)+e.scrollBarWidth}px`),i.setAttribute(Tw,""),oi(i,n)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){const n=this.getElement();n.removeAttribute(Tw),Object.assign(n.style,e.style)}add(e){let n=this.modals.indexOf(e);return n!==-1||(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(e){const n=this.modals.indexOf(e);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}const nh=(t,e)=>jc?t==null?(e||Mc()).body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),t&&("nodeType"in t||t.getBoundingClientRect)?t:null):null;function s$(t,e){const n=Vc(),[r,i]=w.useState(()=>nh(t,n==null?void 0:n.document));if(!r){const s=nh(t);s&&i(s)}return w.useEffect(()=>{},[e,r]),w.useEffect(()=>{const s=nh(t);s!==r&&i(s)},[t,r]),r}function o$({children:t,in:e,onExited:n,mountOnEnter:r,unmountOnExit:i}){const s=w.useRef(null),o=w.useRef(e),l=Ve(n);w.useEffect(()=>{e?o.current=!0:l(s.current)},[e,l]);const u=zs(s,t.ref),c=w.cloneElement(t,{ref:u});return e?c:i||!o.current&&r?null:c}function a$(t){return t.code==="Escape"||t.keyCode===27}function l$(){const t=w.version.split(".");return{major:+t[0],minor:+t[1],patch:+t[2]}}const u$=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function c$(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function d$(t){let{onEnter:e,onEntering:n,onEntered:r,onExit:i,onExiting:s,onExited:o,addEndListener:l,children:u}=t,c=c$(t,u$);const{major:h}=l$(),p=h>=19?u.props.ref:u.ref,y=w.useRef(null),A=zs(y,typeof u=="function"?null:p),I=M=>E=>{M&&y.current&&M(y.current,E)},O=w.useCallback(I(e),[e]),N=w.useCallback(I(n),[n]),R=w.useCallback(I(r),[r]),_=w.useCallback(I(i),[i]),k=w.useCallback(I(s),[s]),x=w.useCallback(I(o),[o]),D=w.useCallback(I(l),[l]);return Object.assign({},c,{nodeRef:y},e&&{onEnter:O},n&&{onEntering:N},r&&{onEntered:R},i&&{onExit:_},s&&{onExiting:k},o&&{onExited:x},l&&{addEndListener:D},{children:typeof u=="function"?(M,E)=>u(M,Object.assign({},E,{ref:A})):w.cloneElement(u,{ref:A})})}const h$=["component"];function f$(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const p$=w.forwardRef((t,e)=>{let{component:n}=t,r=f$(t,h$);const i=d$(r);return m.jsx(n,Object.assign({ref:e},i))});function m$({in:t,onTransition:e}){const n=w.useRef(null),r=w.useRef(!0),i=Ve(e);return Fu(()=>{if(!n.current)return;let s=!1;return i({in:t,element:n.current,initial:r.current,isStale:()=>s}),()=>{s=!0}},[t,i]),Fu(()=>(r.current=!1,()=>{r.current=!0}),[]),n}function g$({children:t,in:e,onExited:n,onEntered:r,transition:i}){const[s,o]=w.useState(!e);e&&s&&o(!1);const l=m$({in:!!e,onTransition:c=>{const h=()=>{c.isStale()||(c.in?r==null||r(c.element,c.initial):(o(!0),n==null||n(c.element)))};Promise.resolve(i(c)).then(h,p=>{throw c.in||o(!0),p})}}),u=zs(l,t.ref);return s&&!e?null:w.cloneElement(t,{ref:u})}function Sw(t,e,n){return t?m.jsx(p$,Object.assign({},n,{component:t})):e?m.jsx(g$,Object.assign({},n,{transition:e})):m.jsx(o$,Object.assign({},n))}const v$=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function y$(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}let rh;function w$(t){return rh||(rh=new Lm({ownerDocument:t==null?void 0:t.document})),rh}function _$(t){const e=Vc(),n=t||w$(e),r=w.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:w.useCallback(i=>{r.current.dialog=i},[]),setBackdropRef:w.useCallback(i=>{r.current.backdrop=i},[])})}const kS=w.forwardRef((t,e)=>{let{show:n=!1,role:r="dialog",className:i,style:s,children:o,backdrop:l=!0,keyboard:u=!0,onBackdropClick:c,onEscapeKeyDown:h,transition:p,runTransition:y,backdropTransition:A,runBackdropTransition:I,autoFocus:O=!0,enforceFocus:N=!0,restoreFocus:R=!0,restoreFocusOptions:_,renderDialog:k,renderBackdrop:x=de=>m.jsx("div",Object.assign({},de)),manager:D,container:M,onShow:E,onHide:g=()=>{},onExit:T,onExited:C,onExiting:P,onEnter:b,onEntering:S,onEntered:X}=t,ae=y$(t,v$);const $=Vc(),H=s$(M),U=_$(D),z=DT(),W=MT(n),[Y,K]=w.useState(!n),ne=w.useRef(null);w.useImperativeHandle(e,()=>U,[U]),jc&&!W&&n&&(ne.current=th($==null?void 0:$.document)),n&&Y&&K(!1);const Ie=Ve(()=>{if(U.add(),on.current=yr(document,"keydown",Kt),En.current=yr(document,"focus",()=>setTimeout(Re),!0),E&&E(),O){var de,Jn;const Xn=th((de=(Jn=U.dialog)==null?void 0:Jn.ownerDocument)!=null?de:$==null?void 0:$.document);U.dialog&&Xn&&!Bu(U.dialog,Xn)&&(ne.current=Xn,U.dialog.focus())}}),re=Ve(()=>{if(U.remove(),on.current==null||on.current(),En.current==null||En.current(),R){var de;(de=ne.current)==null||de.focus==null||de.focus(_),ne.current=null}});w.useEffect(()=>{!n||!H||Ie()},[n,H,Ie]),w.useEffect(()=>{Y&&re()},[Y,re]),pj(()=>{re()});const Re=Ve(()=>{if(!N||!z()||!U.isTopModal())return;const de=th($==null?void 0:$.document);U.dialog&&de&&!Bu(U.dialog,de)&&U.dialog.focus()}),Je=Ve(de=>{de.target===de.currentTarget&&(c==null||c(de),l===!0&&g())}),Kt=Ve(de=>{u&&a$(de)&&U.isTopModal()&&(h==null||h(de),de.defaultPrevented||g())}),En=w.useRef(),on=w.useRef(),an=(...de)=>{K(!0),C==null||C(...de)};if(!H)return null;const Yn=Object.assign({role:r,ref:U.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},ae,{style:s,className:i,tabIndex:-1});let ln=k?k(Yn):m.jsx("div",Object.assign({},Yn,{children:w.cloneElement(o,{role:"document"})}));ln=Sw(p,y,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:T,onExiting:P,onExited:an,onEnter:b,onEntering:S,onEntered:X,children:ln});let un=null;return l&&(un=x({ref:U.setBackdropRef,onClick:Je}),un=Sw(A,I,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:un})),m.jsx(m.Fragment,{children:Zi.createPortal(m.jsxs(m.Fragment,{children:[un,ln]}),H)})});kS.displayName="Modal";const E$=Object.assign(kS,{Manager:Lm});function I$(t,e){return t.classList?t.classList.contains(e):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")!==-1}function T$(t,e){t.classList?t.classList.add(e):I$(t,e)||(typeof t.className=="string"?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}function kw(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function S$(t,e){t.classList?t.classList.remove(e):typeof t.className=="string"?t.className=kw(t.className,e):t.setAttribute("class",kw(t.className&&t.className.baseVal||"",e))}const Di={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class CS extends Lm{adjustAndStore(e,n,r){const i=n.style[e];n.dataset[e]=i,oi(n,{[e]:`${parseFloat(oi(n,e))+r}px`})}restore(e,n){const r=n.dataset[e];r!==void 0&&(delete n.dataset[e],oi(n,{[e]:r}))}setContainerStyle(e){super.setContainerStyle(e);const n=this.getElement();if(T$(n,"modal-open"),!e.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";or(n,Di.FIXED_CONTENT).forEach(s=>this.adjustAndStore(r,s,e.scrollBarWidth)),or(n,Di.STICKY_CONTENT).forEach(s=>this.adjustAndStore(i,s,-e.scrollBarWidth)),or(n,Di.NAVBAR_TOGGLER).forEach(s=>this.adjustAndStore(i,s,e.scrollBarWidth))}removeContainerStyle(e){super.removeContainerStyle(e);const n=this.getElement();S$(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";or(n,Di.FIXED_CONTENT).forEach(s=>this.restore(r,s)),or(n,Di.STICKY_CONTENT).forEach(s=>this.restore(i,s)),or(n,Di.NAVBAR_TOGGLER).forEach(s=>this.restore(i,s))}}let ih;function k$(t){return ih||(ih=new CS(t)),ih}const RS=w.createContext({onHide(){}}),C$=w.forwardRef(({closeLabel:t="Close",closeVariant:e,closeButton:n=!1,onHide:r,children:i,...s},o)=>{const l=w.useContext(RS),u=Ve(()=>{l==null||l.onHide(),r==null||r()});return m.jsxs("div",{ref:o,...s,children:[i,n&&m.jsx(wm,{"aria-label":t,variant:e,onClick:u})]})}),Af=new WeakMap,Cw=(t,e)=>{if(!t||!e)return;const n=Af.get(e)||new Map;Af.set(e,n);let r=n.get(t);return r||(r=e.matchMedia(t),r.refCount=0,n.set(r.media,r)),r};function R$(t,e=typeof window>"u"?void 0:window){const n=Cw(t,e),[r,i]=w.useState(()=>n?n.matches:!1);return Fu(()=>{let s=Cw(t,e);if(!s)return i(!1);let o=Af.get(e);const l=()=>{i(s.matches)};return s.refCount++,s.addListener(l),l(),()=>{s.removeListener(l),s.refCount--,s.refCount<=0&&(o==null||o.delete(s.media)),s=void 0}},[t]),r}function P$(t){const e=Object.keys(t);function n(l,u){return l===u?u:l?`${l} and ${u}`:u}function r(l){return e[Math.min(e.indexOf(l)+1,e.length-1)]}function i(l){const u=r(l);let c=t[u];return typeof c=="number"?c=`${c-.2}px`:c=`calc(${c} - 0.2px)`,`(max-width: ${c})`}function s(l){let u=t[l];return typeof u=="number"&&(u=`${u}px`),`(min-width: ${u})`}function o(l,u,c){let h;typeof l=="object"?(h=l,c=u,u=!0):(u=u||!0,h={[l]:u});let p=w.useMemo(()=>Object.entries(h).reduce((y,[A,I])=>((I==="up"||I===!0)&&(y=n(y,s(A))),(I==="down"||I===!0)&&(y=n(y,i(A))),y),""),[JSON.stringify(h)]);return R$(p,c)}return o}const A$=P$({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),PS=w.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=ve(e,"offcanvas-body"),m.jsx(n,{ref:i,className:le(t,e),...r})));PS.displayName="OffcanvasBody";const N$={[hn]:"show",[fr]:"show"},AS=w.forwardRef(({bsPrefix:t,className:e,children:n,in:r=!1,mountOnEnter:i=!1,unmountOnExit:s=!1,appear:o=!1,...l},u)=>(t=ve(t,"offcanvas"),m.jsx(LT,{ref:u,addEndListener:xT,in:r,mountOnEnter:i,unmountOnExit:s,appear:o,...l,childRef:n.ref,children:(c,h)=>w.cloneElement(n,{...h,className:le(e,n.props.className,(c===hn||c===$u)&&`${t}-toggling`,N$[c])})})));AS.displayName="OffcanvasToggling";const NS=w.forwardRef(({bsPrefix:t,className:e,closeLabel:n="Close",closeButton:r=!1,...i},s)=>(t=ve(t,"offcanvas-header"),m.jsx(C$,{ref:s,...i,className:le(e,t),closeLabel:n,closeButton:r})));NS.displayName="OffcanvasHeader";const b$=ej("h5"),bS=w.forwardRef(({className:t,bsPrefix:e,as:n=b$,...r},i)=>(e=ve(e,"offcanvas-title"),m.jsx(n,{ref:i,className:le(t,e),...r})));bS.displayName="OffcanvasTitle";function O$(t){return m.jsx(AS,{...t})}function x$(t){return m.jsx($T,{...t})}const OS=w.forwardRef(({bsPrefix:t,className:e,children:n,"aria-labelledby":r,placement:i="start",responsive:s,show:o=!1,backdrop:l=!0,keyboard:u=!0,scroll:c=!1,onEscapeKeyDown:h,onShow:p,onHide:y,container:A,autoFocus:I=!0,enforceFocus:O=!0,restoreFocus:N=!0,restoreFocusOptions:R,onEntered:_,onExit:k,onExiting:x,onEnter:D,onEntering:M,onExited:E,backdropClassName:g,manager:T,renderStaticNode:C=!1,...P},b)=>{const S=w.useRef();t=ve(t,"offcanvas");const{onToggle:X}=w.useContext(Nm)||{},[ae,$]=w.useState(!1),H=A$(s||"xs","up");w.useEffect(()=>{$(s?o&&!H:o)},[o,s,H]);const U=Ve(()=>{X==null||X(),y==null||y()}),z=w.useMemo(()=>({onHide:U}),[U]);function W(){return T||(c?(S.current||(S.current=new CS({handleContainerOverflow:!1})),S.current):k$())}const Y=(re,...Re)=>{re&&(re.style.visibility="visible"),D==null||D(re,...Re)},K=(re,...Re)=>{re&&(re.style.visibility=""),E==null||E(...Re)},ne=w.useCallback(re=>m.jsx("div",{...re,className:le(`${t}-backdrop`,g)}),[g,t]),Ie=re=>m.jsx("div",{...re,...P,className:le(e,s?`${t}-${s}`:t,`${t}-${i}`),"aria-labelledby":r,children:n});return m.jsxs(m.Fragment,{children:[!ae&&(s||C)&&Ie({}),m.jsx(RS.Provider,{value:z,children:m.jsx(E$,{show:ae,ref:b,backdrop:l,container:A,keyboard:u,autoFocus:I,enforceFocus:O&&!c,restoreFocus:N,restoreFocusOptions:R,onEscapeKeyDown:h,onShow:p,onHide:U,onEnter:Y,onEntering:M,onEntered:_,onExit:k,onExiting:x,onExited:K,manager:W(),transition:O$,backdropTransition:x$,renderBackdrop:ne,renderDialog:Ie})})]})});OS.displayName="Offcanvas";const Pl=Object.assign(OS,{Body:PS,Header:NS,Title:bS}),L$=()=>{const[t,e]=w.useState([]),[n,r]=w.useState(null),[i,s]=w.useState(null),[o,l]=w.useState(null),[u,c]=w.useState([]),[h,p]=w.useState(null),[y,A]=w.useState([]),[I,O]=w.useState(""),[N,R]=w.useState("Global"),[_,k]=w.useState([]),[x,D]=w.useState([]),[M,E]=w.useState([]),[g,T]=w.useState(null),[C,P]=w.useState(!1),b=w.useRef(null);w.useEffect(()=>{(async()=>{try{const U=await(await fetch("../data.json")).json();e(U.frontPage.paragraphs||[]),s(U.frontPage.contact||null),r(U.frontPage.header||null),l(U.about||null),c(U.news||[]),A(U.projects||[]),p(U.contact||null)}catch(H){console.error("Error fetching data:",H)}})()},[]);const S=$=>{b.current&&!b.current.contains($.target)&&P(!1)},X=()=>{P(!1)};w.useEffect(()=>(document.addEventListener("mousedown",S),window.addEventListener("scroll",X),()=>{document.removeEventListener("mousedown",S),window.removeEventListener("scroll",X)}),[]),w.useEffect(()=>{if(I&&(N==="Projects"||N==="Global")){const $=I.toLowerCase(),H=y.reduce((U,z)=>((z.title.toLowerCase().includes($)||z.description.toLowerCase().includes($)||z.contents.toLowerCase().includes($))&&!U.some(Y=>Y.id===z.id)&&U.push(z),U),[]);k(H)}else k([])},[I,y,N]),w.useEffect(()=>{if(I&&(N==="Home"||N==="Global")){const $=t?t.filter(K=>K.title.toLowerCase().includes(I.toLowerCase())||K.content.toLowerCase().includes(I.toLowerCase())):[],H=i?[i].filter(K=>K.contactName.toLowerCase().includes(I.toLowerCase())||K.shortSummary.toLowerCase().includes(I.toLowerCase())):null,U=n&&(n.title.toLowerCase().includes(I.toLowerCase())||n.text.some(K=>K.toLowerCase().includes(I.toLowerCase())))?[n]:[],z=u.slice(0,10).filter(K=>K.title.toLowerCase().includes(I.toLowerCase())||K.date.toLowerCase().includes(I.toLowerCase())),W=y.filter(K=>K.title.toLowerCase().includes(I.toLowerCase())||K.frontPageDesc.toLowerCase().includes(I.toLowerCase())),Y=[...$,...H,...U,...z,...W];D(Y)}else D([])},[I,t,i,n,u,y,N]),w.useEffect(()=>{if(I&&(N==="About"||N==="Global")){const $=o?[o].filter(z=>z.name.toLowerCase().includes(I.toLowerCase())||z.education.toLowerCase().includes(I.toLowerCase())||z.majors.some(W=>W.toLowerCase().includes(I.toLowerCase()))||z.selfSummary.toLowerCase().includes(I.toLowerCase())||z.moreDetails.some(W=>W.title.toLowerCase().includes(I.toLowerCase())||W.content.toLowerCase().includes(I.toLowerCase()))):[],H=u.filter(z=>z.title.toLowerCase().includes(I.toLowerCase())||z.date.toLowerCase().includes(I.toLowerCase())),U=[...$,...H];E(U)}else E([])},[I,o,u,N]),w.useEffect(()=>{if(I&&(N==="Contact"||N==="Global")){const $={};h?(h.address.some(H=>H.toLowerCase().includes(I.toLowerCase()))&&($.address=h.address.filter(H=>H.toLowerCase().includes(I.toLowerCase()))),h.phone.some(H=>H.toLowerCase().includes(I.toLowerCase()))&&($.phone=h.phone.filter(H=>H.toLowerCase().includes(I.toLowerCase()))),h.email.some(H=>H.toLowerCase().includes(I.toLowerCase()))&&($.email=h.email.filter(H=>H.toLowerCase().includes(I.toLowerCase()))),h.github.some(H=>H.toLowerCase().includes(I.toLowerCase()))&&($.github=h.github.filter(H=>H.toLowerCase().includes(I.toLowerCase()))),h.url.some(H=>H.toLowerCase().includes(I.toLowerCase()))&&($.url=h.url.filter(H=>H.toLowerCase().includes(I.toLowerCase()))),h.linkedin.some(H=>H.toLowerCase().includes(I.toLowerCase()))&&($.linkedin=h.linkedin.filter(H=>H.toLowerCase().includes(I.toLowerCase()))),T(Object.keys($).length>0?$:null)):T(null)}else T(null)},[I,h,N]);const ae=N==="Global"?[..._,...x,...M,...g?[g]:[]]:[];return m.jsxs("div",{ref:b,id:"search-bar-container",children:[m.jsxs(r$,{className:"form-inline",children:[m.jsxs(Ae,{onSelect:$=>R($||"Global"),children:[m.jsx(Ae.Toggle,{className:"search-dropdown",variant:"outline-light",id:"dropdown-basic",children:N}),m.jsxs(Ae.Menu,{children:[m.jsx(Ae.Item,{eventKey:"Global",children:"Global"}),m.jsx(Ae.Divider,{}),m.jsx(Ae.Item,{eventKey:"Home",children:"Home"}),m.jsx(Ae.Item,{eventKey:"About",children:"About"}),m.jsx(Ae.Item,{eventKey:"Projects",children:"Projects"}),m.jsx(Ae.Item,{eventKey:"Contact",children:"Contact"})]})]}),m.jsx(vS,{type:"search",placeholder:"Search...",className:"mr-sm-2",value:I,onChange:$=>{O($.target.value),P(!0)}}),m.jsx(Uc,{id:"global-search-button",variant:"outline-light",children:m.jsx("img",{src:"https://cdn.glitch.global/3874a658-483f-41ac-b439-3b48eab1370f/icon-search.png?v=1721703987075",width:"20",height:"20"})})]}),C&&_.length>0&&N==="Projects"&&m.jsx("div",{id:"search-results",children:_.map($=>m.jsx(ee,{id:"result-row",to:`/projects/${$.id}`,children:m.jsx("div",{id:"indiv-result",children:$.title})},$.id))}),C&&x.length>0&&N==="Home"&&m.jsx("div",{id:"search-results",children:x.map($=>"title"in $?m.jsx(ee,{id:"result-row",to:"/",children:m.jsx("div",{id:"indiv-result",children:$.title})},$.title):m.jsx(ee,{id:"result-row",to:"/",children:m.jsx("div",{id:"indiv-result",children:"Contact Me"})},"Contact Me"))}),C&&M.length>0&&N==="About"&&m.jsx("div",{id:"search-results",children:M.map($=>"title"in $?m.jsx(ee,{id:"result-row",to:"/about",children:m.jsx("div",{id:"indiv-result",children:$.title.length>25?`${$.title.substring(0,25)}...`:$.title})},$.title):m.jsx(ee,{id:"result-row",to:"/about",children:m.jsx("div",{id:"indiv-result",children:$.name||"About Section"})},$.name||$.moreDetails.map(H=>H.title).join("-")))}),C&&g&&N==="Contact"&&m.jsxs("div",{id:"search-results",children:[g.address&&m.jsx(ee,{id:"result-row",to:"/contact",children:m.jsxs("div",{id:"indiv-result",children:["Address: ",h.address[0]]})}),g.phone&&m.jsx("a",{id:"result-row",href:`tel:${h.phone[0]}`,children:m.jsxs("div",{id:"indiv-result",children:["Phone: ",h.phone[0]]})}),g.email&&m.jsx("a",{id:"result-row",href:`mailto:${h.email[0]}`,children:m.jsxs("div",{id:"indiv-result",children:["Email: ",h.email[0]]})}),g.github&&g.github.length>0&&m.jsx("a",{id:"result-row",href:h.github[0],children:m.jsxs("div",{id:"indiv-result",children:["GitHub: ",h.github[1]]})}),g.url&&g.url.length>0&&m.jsx("a",{id:"result-row",href:h.url[0],children:m.jsxs("div",{id:"indiv-result",children:["URL: ",h.url[1]]})}),g.linkedin&&g.linkedin.length>0&&m.jsx("a",{id:"result-row",href:h.linkedin[0],children:m.jsxs("div",{id:"indiv-result",children:["LinkedIn: ",h.linkedin[1]]})})]}),C&&ae.length>0&&N==="Global"&&m.jsx("div",{id:"search-results",children:ae.map(($,H)=>"id"in $?m.jsx(ee,{id:"result-row",to:`/projects/${$.id}`,children:m.jsxs("div",{id:"indiv-result",children:[m.jsx("p",{id:"result-name",children:$.title.length>25?`${$.title.substring(0,25)}...`:$.title}),m.jsx("p",{id:"result-page",children:"(Project Page)"})]})},H):"text"in $?m.jsx(ee,{id:"result-row",to:"/",children:m.jsxs("div",{id:"indiv-result",children:[m.jsx("p",{id:"result-name",children:$.title}),m.jsx("p",{id:"result-page",children:"(Home)"})]})},H):"content"in $?m.jsx(ee,{id:"result-row",to:"/",children:m.jsxs("div",{id:"indiv-result",children:[m.jsx("p",{id:"result-name",children:$.title.length>25?`${$.title.substring(0,25)}...`:$.title}),m.jsx("p",{id:"result-page",children:"(Home)"})]})},H):"contactName"in $?m.jsx(ee,{id:"result-row",to:"/",children:m.jsxs("div",{id:"indiv-result",children:[m.jsx("p",{id:"result-name",children:"Contact Me"}),m.jsx("p",{id:"result-page",children:"(Home)"})]})},H):"name"in $?m.jsx(ee,{id:"result-row",to:"/about",children:m.jsxs("div",{id:"indiv-result",children:[m.jsx("p",{id:"result-name",children:$.name.length>25?`${$.name.substring(0,25)}...`:$.name}),m.jsx("p",{id:"result-page",children:"(About)"})]})},H):"date"in $?m.jsx(ee,{id:"result-row",to:"/about",children:m.jsxs("div",{id:"indiv-result",children:[m.jsx("p",{id:"result-name",children:$.title.length>25?`${$.title.substring(0,25)}...`:$.title}),m.jsx("p",{id:"result-page",children:"(About)"})]})},H):"address"in $?m.jsx(ee,{id:"result-row",to:"/contact",children:m.jsxs("div",{id:"indiv-result",children:[m.jsxs("p",{id:"result-name",children:["Address: ",h.address[0]]}),m.jsx("p",{id:"result-page",children:"(Contact)"})]})}):"phone"in $?m.jsx("a",{id:"result-row",href:`tel:${h.phone[0]}`,children:m.jsxs("div",{id:"indiv-result",children:["Phone: ",h.phone[0]]})}):"email"in $?m.jsx("a",{id:"result-row",href:`mailto:${h.email[0]}`,children:m.jsxs("div",{id:"indiv-result",children:["Email: ",h.email[0]]})}):"github"in $?m.jsx(ee,{id:"result-row",to:h.github[0],children:m.jsxs("div",{id:"indiv-result",children:["GitHub: ",h.github[1]]})}):"url"in $?m.jsx(ee,{id:"result-row",to:h.url[0],children:m.jsxs("div",{id:"indiv-result",children:["URL: ",h.url[1]]})}):"linkedin"in $?m.jsx(ee,{id:"result-row",to:h.linkedin[0],children:m.jsxs("div",{id:"indiv-result",children:["LinkedIn: ",h.linkedin[1]]})}):null)})]})};function ns(t,e,n){const r=document.querySelector(t);r&&(r.classList.remove(e),r.classList.add(n))}function lt(t){return t.charAt(0).toUpperCase()+t.slice(1)}function D$(){const[t,e]=w.useState(""),[n,r]=w.useState([]),[i,s]=w.useState(!1);w.useEffect(()=>{fetch("../data.json").then(u=>u.json()).then(u=>{e(u.cv),r(u.projects||[])}).catch(u=>{console.error("Error fetching data:",u)})},[]);const o=u=>{u.preventDefault(),t&&window.open(t,"_blank")},l=()=>{s(!1)};return m.jsxs(m.Fragment,{children:[m.jsx("nav",{className:"nonuser-navbar navbar sticky-top bg-body-tertiary d-none d-md-flex",children:m.jsx("div",{className:"container-fluid d-flex justify-content-between align-items-center",children:m.jsxs("div",{className:"d-flex align-items-center",children:[m.jsx(ee,{className:"nonuser-navbar-brand navbar-brand",to:"/",onMouseEnter:()=>ns(".icon","icon-bp-bbl","icon-bp-blw"),onMouseLeave:()=>ns(".icon","icon-bp-blw","icon-bp-bbl"),children:m.jsx("i",{className:"icon icon-bp-bbl"})}),m.jsxs("ul",{className:"nav nav-pills",children:[m.jsx("li",{className:"nonuser-nav-item nav-item",children:m.jsx(ee,{className:"nonuser-nav-link nav-link",to:"/about",children:lt("about")})}),m.jsx("li",{className:"nonuser-nav-item nav-item",children:m.jsxs(Ae,{className:"nonuser-nav-item nav-item",children:[m.jsx(Ae.Toggle,{variant:"link",className:"nonuser-nav-link nav-link",children:lt("projects")}),m.jsxs(Ae.Menu,{children:[m.jsx(Ae.Item,{as:ee,to:"/projects",children:lt("Projects Page")},"projects"),m.jsx(Ae.Divider,{}),n.map(u=>m.jsx(Ae.Item,{as:ee,to:`/projects/${u.id}`,children:lt(u.title)},u.id))]})]})}),m.jsx("li",{className:"nonuser-nav-item nav-item",children:t?m.jsx("a",{href:t,className:"nonuser-nav-link nav-link",onClick:o,children:lt("CV")}):m.jsx("span",{className:"nonuser-nav-link nav-link",children:lt("CV")})}),m.jsx("li",{className:"nonuser-nav-item nav-item",children:m.jsx(ee,{className:"nonuser-nav-link nav-link",to:"/contact",children:lt("contact")})})]})]})})}),m.jsx(Uc,{className:"d-md-none offcanvas-navbutton",onClick:()=>s(!0),children:m.jsx("i",{className:"bi bi-list"})}),m.jsxs(Pl,{show:i,onHide:()=>s(!1),placement:"start",children:[m.jsx(Pl.Header,{closeButton:!0,children:m.jsx(Pl.Title,{id:"offcanvas-title",children:"Menu"})}),m.jsx(Pl.Body,{children:m.jsxs("ul",{className:"nav flex-column",children:[m.jsx("li",{className:"nonuser-nav-item nav-item",children:m.jsx(ee,{className:"nonuser-nav-link nav-link",to:"/",onClick:l,children:lt("home")})}),m.jsx("li",{className:"nonuser-nav-item nav-item",children:m.jsx(ee,{className:"nonuser-nav-link nav-link",to:"/about",onClick:l,children:lt("about")})}),m.jsx("li",{className:"nonuser-nav-item nav-item",children:m.jsxs(Ae,{className:"nonuser-nav-item nav-item",children:[m.jsx(Ae.Toggle,{variant:"link",className:"nonuser-nav-link nav-link",children:lt("projects")}),m.jsxs(Ae.Menu,{children:[m.jsx(Ae.Item,{as:ee,to:"/projects",onClick:l,children:lt("Projects Page")},"projects"),m.jsx(Ae.Divider,{}),n.map(u=>m.jsx(Ae.Item,{as:ee,to:`/projects/${u.id}`,onClick:l,children:lt(u.title)},u.id))]})]})}),m.jsx("li",{className:"nonuser-nav-item nav-item",children:t?m.jsx("a",{href:t,className:"nonuser-nav-link nav-link",onClick:o,children:lt("CV")}):m.jsx("span",{className:"nav-link",children:lt("CV")})}),m.jsx("li",{className:"nonuser-nav-item nav-item",children:m.jsx(ee,{className:"nonuser-nav-link nav-link",to:"/contact",onClick:l,children:lt("contact")})})]})})]})]})}const M$=()=>{const[t,e]=w.useState(null),[n,r]=w.useState([]),[i,s]=w.useState("");w.useEffect(()=>{(async()=>{try{const h=await(await fetch("../data.json")).json();e(h.about),r(h.news||[])}catch(c){console.error("Error fetching data:",c)}})()},[]),w.useEffect(()=>{document.title="About | Blake Prall"},[]);const o=n.filter(u=>u.title.toLowerCase().includes(i.toLowerCase())||u.date.toLowerCase().includes(i.toLowerCase())),l=u=>{s(u.target.value)};return m.jsxs("section",{className:"about",children:[m.jsx("div",{className:"left-side",children:t&&m.jsxs(m.Fragment,{children:[m.jsx("center",{children:m.jsx("img",{src:t.photo,alt:"Your Photo",className:"about-photo"})}),m.jsx("h1",{className:"about-name",children:t.name}),m.jsxs("section",{id:"education",className:"education",children:[m.jsx("h3",{id:"college",children:t.education}),m.jsxs("p",{id:"majors",children:[t.majors[0]," ",m.jsx("br",{}),t.majors[1]]})]}),m.jsxs("section",{id:"news",className:"news",children:[m.jsx("h2",{id:"news-title",children:"News"}),m.jsx("input",{type:"text",name:"news",placeholder:"Search News...",value:i,onChange:l,className:"news-search"}),m.jsx("ul",{className:"news-list",children:o.map((u,c)=>m.jsxs("div",{className:"news-row",children:[m.jsx("div",{className:"news-title",children:u.title}),m.jsx("div",{className:"news-date",children:u.date})]},c))})]})]})}),m.jsx("section",{className:"right-side",children:t&&m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"short-summary",dangerouslySetInnerHTML:{__html:t.selfSummary||""}}),t.moreDetails.map((u,c)=>m.jsxs("section",{className:"more-detail",children:[m.jsx("h3",{id:"detail-title",children:u.title}),m.jsx("p",{id:"detail-content",children:u.content})]},c))]})})]})},j$=()=>{const[t,e]=w.useState(null);return w.useEffect(()=>{(async()=>{try{const r=await fetch("../data.json");if(!r.ok)throw new Error("Network response was not ok");const i=await r.json();e(i.contact||null)}catch(r){console.error("Error fetching data:",r)}})()},[]),w.useEffect(()=>{document.title="Contact | Blake Prall"},[]),t?m.jsx("section",{className:"contact",children:m.jsxs("div",{className:"grid-container",children:[m.jsxs("div",{className:"feedback-form",children:[m.jsx("h2",{children:"Feedback Form"}),m.jsx("p",{children:"Let me know what you think of the site or give suggestions by filling out the form below:"}),m.jsxs("form",{action:"mailto:brprall3@gmail.com.com",method:"post",encType:"text/plain",children:[m.jsx("input",{type:"text",id:"name",name:"name",placeholder:"Your Full Name",required:!0}),m.jsx("input",{type:"email",id:"email",name:"email",placeholder:"Your Email",required:!0}),m.jsx("textarea",{id:"feedback",name:"feedback",rows:4,placeholder:"Your Feedback",required:!0}),m.jsx("button",{type:"submit",children:"Send Feedback"})]})]}),m.jsxs("div",{className:"contact-info",children:[m.jsxs("div",{id:"location",children:[m.jsx("h4",{children:"Location"}),m.jsx("p",{className:"contact-text",children:t.address[0]})]}),m.jsxs("div",{id:"contact-details",children:[m.jsx("h4",{children:"Contact Details"}),m.jsxs("p",{className:"contact-text",children:["Email:   ",m.jsx("a",{className:"contact-link",href:`mailto:${t.email[0]}`,children:t.email[0]})]}),m.jsx("br",{}),m.jsxs("p",{className:"contact-text",children:["Phone:   ",m.jsx("a",{className:"contact-link",href:`tel:${t.phone[0]}`,children:t.phone[0]})]})]}),m.jsxs("div",{id:"socials",children:[m.jsx("h4",{children:"Socials"}),m.jsx(ee,{className:"social-links social-links-icons",to:t.github[0],target:"_blank",onMouseEnter:()=>ns(".icon","icon-github-logo","icon-github-reverse"),onMouseLeave:()=>ns(".icon","icon-github-reverse","icon-github-logo"),children:m.jsx("i",{className:"icon icon-github-logo"})}),m.jsx(ee,{className:"social-links social-links-icons",to:t.linkedin[0],target:"_blank",onMouseEnter:()=>ns(".icon","icon-linkedin-logo","icon-linkedinreverse"),onMouseLeave:()=>ns(".icon","icon-linkedin-reverse","icon-linkedin-logo"),children:m.jsx("i",{className:"icon icon-linkedin-logo"})})]})]})]})}):m.jsx("p",{children:"Loading..."})},U$=()=>{const[t,e]=w.useState([]),[n,r]=w.useState("");w.useEffect(()=>{fetch("../data.json").then(s=>s.json()).then(s=>{e(s.projects||[])}).catch(s=>{console.error("Error fetching data:",s)})},[]),w.useEffect(()=>{document.title="Projects | Blake Prall"},[]);const i=t.filter(s=>s.title.toLowerCase().includes(n.toLowerCase())||s.description.toLowerCase().includes(n.toLowerCase()));return m.jsx("section",{id:"projects",children:m.jsxs("div",{className:"staggered-grid-container",children:[m.jsxs("div",{className:"projects-search staggered-grid-item",children:[m.jsx("h2",{id:"projects-page-title",children:"Projects"}),m.jsx("div",{className:"projects-searchbar",children:m.jsx("input",{type:"search",name:"projects",placeholder:"Search Projects...",value:n,onChange:s=>r(s.target.value)})})]}),i.map(s=>m.jsx("div",{className:"projects-individual staggered-item",children:m.jsx("div",{className:"home-card",children:m.jsxs("div",{className:"home-card-content",children:[m.jsx("h2",{className:"home-card-title",children:s.title}),m.jsx("p",{className:"home-card-description",children:s.frontPageDesc||s.description}),m.jsxs("div",{className:"home-card-buttons",children:[m.jsx(ee,{to:`/projects/${s.id}`,className:"home-card-button",children:"Page"}),s.titleLink&&m.jsx("a",{href:s.titleLink,className:"home-card-button",target:"_blank",rel:"noopener noreferrer",children:"Source"}),s.siteLink&&m.jsx("a",{href:s.siteLink,className:"home-card-button",target:"_blank",rel:"noopener noreferrer",children:"Visit"})]})]})},s.id)},s.id))]})})},$$=()=>{const[t,e]=w.useState([]),[n,r]=w.useState([]),[i,s]=w.useState(null),[o,l]=w.useState(null),[u,c]=w.useState([]),[h,p]=w.useState(!0),y=w.useRef([]);w.useEffect(()=>{(async()=>{try{const O=await fetch("../data.json");if(!O.ok)throw new Error("Network response was not ok");const N=await O.json();s(N.frontPage.header),l(N.frontPage.contact),c(N.frontPage.paragraphs||[]),r(N.projects||[]),e(N.news||[])}catch(O){console.error("Error fetching data:",O)}finally{p(!1)}})()},[]),w.useEffect(()=>{document.title="Blake Prall"},[]);const A=(I,O)=>{I.forEach((N,R)=>{N.isIntersecting&&y.current[R]&&(N.target.classList.add("fade-in"),O.unobserve(N.target))})};return w.useEffect(()=>{const I={root:null,rootMargin:"0px",threshold:.25},O=new IntersectionObserver(A,I);return y.current.forEach(N=>{N&&O.observe(N)}),()=>{O.disconnect()}},[u]),h?m.jsx("div",{}):m.jsxs("div",{id:"home",children:[i&&m.jsxs("div",{id:"home-header-container",children:[m.jsx("div",{children:m.jsx("p",{id:"home-title",children:i.title})}),m.jsxs("div",{id:"home-header-text",children:[m.jsx("p",{dangerouslySetInnerHTML:{__html:i.text[0]||""}}),m.jsx("p",{dangerouslySetInnerHTML:{__html:i.text[1]||""}})]})]}),m.jsxs("div",{id:"home-content-container",children:[m.jsxs("section",{className:"home-section-container",children:[m.jsxs("div",{className:"home-section-header",children:[m.jsx("p",{children:"Projects"}),m.jsx(ee,{to:"/projects",children:m.jsx("button",{children:"All Projects"})})]}),n.length>0&&m.jsx("div",{className:"home-projects-grid",children:n.slice(0,6).map(I=>m.jsxs("div",{className:"home-card",children:[m.jsxs("div",{className:"home-card-content",children:[m.jsx("h2",{className:"home-card-title",children:I.title}),m.jsx("p",{className:"home-card-description",children:I.frontPageDesc||I.description})]}),m.jsxs("div",{className:"home-card-buttons",children:[m.jsx(ee,{to:`/projects/${I.id}`,className:"home-card-button",children:"Page"}),I.titleLink&&m.jsx("a",{href:I.titleLink,className:"home-card-button",target:"_blank",rel:"noopener noreferrer",children:"Source"}),I.siteLink&&m.jsx("a",{href:I.siteLink,className:"home-card-button",target:"_blank",rel:"noopener noreferrer",children:"Visit"})]})]},I.id))})]}),m.jsxs("section",{className:"home-section-container",children:[m.jsxs("div",{className:"home-section-header",children:[m.jsx("p",{children:"News"}),m.jsx(ee,{to:"/news",children:m.jsx("button",{children:"All News"})})]}),t.length>0&&m.jsx("ul",{id:"home-news-list",children:t.slice(0,10).map((I,O)=>m.jsx("a",{href:"/about",className:"home-news-row-link",children:m.jsxs("div",{className:"home-news-row",children:[m.jsx("div",{className:"home-news-title",children:I.title}),m.jsx("div",{className:"home-news-date",children:I.date})]})},O))})]}),m.jsx("section",{className:"home-section-container",children:u.length>0&&u.map((I,O)=>m.jsxs("div",{className:"home-paragraph-card",ref:N=>y.current[O]=N,children:[m.jsx("div",{className:"hover-bar"}),I.link?m.jsx("div",{className:"home-section-header",children:m.jsx(ee,{to:I.link,className:"home-card-link",children:m.jsx("p",{children:I.title})})}):m.jsx("div",{className:"home-section-header",children:m.jsx("p",{className:"home-section-header",children:I.title})}),m.jsx("div",{className:"home-paragraph-content",children:m.jsx("p",{children:I.content})})]},O))})]}),o&&m.jsxs("section",{className:"home-section-container",children:[m.jsx("div",{className:"home-section-header",children:m.jsx("p",{children:"Contact Me"})}),m.jsx("div",{id:"about",children:m.jsxs(ee,{to:"/contact",className:"about-card",children:[m.jsx("div",{className:"hover-bar"}),m.jsx("img",{id:"contact-photo",src:o.photo,alt:`${o.contactName}'s photo`}),m.jsx("div",{id:"contact-name",children:m.jsxs("p",{children:[o.contactName,m.jsx("i",{className:"bi bi-chevron-right"})]})}),m.jsx("div",{id:"contact-content",children:m.jsx("p",{children:o.shortSummary})})]})})]})]})},F$=()=>{const{id:t}=uR(),[e,n]=w.useState(null),[r,i]=w.useState(!0),[s,o]=w.useState(null);return w.useEffect(()=>{t&&(async()=>{try{const u=await fetch("../data.json");if(!u.ok)throw new Error("Network response was not ok");const h=(await u.json()).projects.find(p=>p.id===t);n(h||null)}catch{o("Failed to load project data.")}finally{i(!1)}})()},[t]),w.useEffect(()=>{e!=null&&e.title&&(document.title=`${e.title} | Blake Prall`)},[e]),r?m.jsx("main",{children:m.jsx("div",{})}):s?m.jsx("main",{children:m.jsx("p",{children:s})}):e?m.jsx("main",{children:m.jsxs("section",{className:"project",id:e.type,children:[m.jsxs("div",{className:"project-header",children:[m.jsx("p",{children:e.title}),m.jsxs("div",{className:"project-page-buttons",children:[e.titleLink&&m.jsx("a",{href:e.titleLink,className:"project-page-button",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),e.siteLink&&m.jsx("a",{href:e.siteLink,className:"project-page-button",target:"_blank",rel:"noopener noreferrer",children:"Live Site"})]})]}),e.type==="pdf"?m.jsx("iframe",{src:e.materials?e.materials[0].path:"",style:{width:"100%",height:"100vh"},scrolling:"yes"}):m.jsx("div",{className:"project-text-container",children:m.jsx("div",{className:"project-text",dangerouslySetInnerHTML:{__html:e.contents||""}})})]})}):m.jsx("main",{children:m.jsx("p",{children:"Project not found."})})};Aa.initializeApp(kT);const vo=({children:t})=>m.jsxs("div",{className:"wrapper",children:[m.jsx(L$,{}),m.jsx(D$,{}),t]});function V$(){return m.jsxs(TR,{children:[m.jsx(Mi,{path:"",element:m.jsx(vo,{children:m.jsx($$,{})})}),m.jsx(Mi,{path:"/about",element:m.jsx(vo,{children:m.jsx(M$,{})})}),m.jsx(Mi,{path:"/contact",element:m.jsx(vo,{children:m.jsx(j$,{})})}),m.jsx(Mi,{path:"/projects",element:m.jsx(vo,{children:m.jsx(U$,{})})}),m.jsx(Mi,{path:"/projects/:id",element:m.jsx(vo,{children:m.jsx(F$,{})})})]})}sh.createRoot(document.getElementById("root")).render(m.jsx(st.StrictMode,{children:m.jsx(NR,{basename:"/",children:m.jsx(V$,{})})}));
