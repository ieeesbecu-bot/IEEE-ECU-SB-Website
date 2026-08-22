(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))i(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function s(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function i(c){if(c.ep)return;c.ep=!0;const u=s(c);fetch(c.href,u)}})();function Dd(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Fu={exports:{}},ki={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function dy(){if(Mp)return ki;Mp=1;var r=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function s(i,c,u){var h=null;if(u!==void 0&&(h=""+u),c.key!==void 0&&(h=""+c.key),"key"in c){u={};for(var p in c)p!=="key"&&(u[p]=c[p])}else u=c;return c=u.ref,{$$typeof:r,type:i,key:h,ref:c!==void 0?c:null,props:u}}return ki.Fragment=a,ki.jsx=s,ki.jsxs=s,ki}var Up;function hy(){return Up||(Up=1,Fu.exports=dy()),Fu.exports}var l=hy(),Ju={exports:{}},ge={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function fy(){if(Lp)return ge;Lp=1;var r=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),S=Symbol.iterator;function k(j){return j===null||typeof j!="object"?null:(j=S&&j[S]||j["@@iterator"],typeof j=="function"?j:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,_={};function z(j,D,P){this.props=j,this.context=D,this.refs=_,this.updater=P||T}z.prototype.isReactComponent={},z.prototype.setState=function(j,D){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,D,"setState")},z.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function M(){}M.prototype=z.prototype;function R(j,D,P){this.props=j,this.context=D,this.refs=_,this.updater=P||T}var V=R.prototype=new M;V.constructor=R,C(V,z.prototype),V.isPureReactComponent=!0;var G=Array.isArray;function Q(){}var X={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function te(j,D,P){var ee=P.ref;return{$$typeof:r,type:j,key:D,ref:ee!==void 0?ee:null,props:P}}function fe(j,D){return te(j.type,D,j.props)}function pe(j){return typeof j=="object"&&j!==null&&j.$$typeof===r}function xe(j){var D={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(P){return D[P]})}var ke=/\/+/g;function Re(j,D){return typeof j=="object"&&j!==null&&j.key!=null?xe(""+j.key):D.toString(36)}function Se(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(Q,Q):(j.status="pending",j.then(function(D){j.status==="pending"&&(j.status="fulfilled",j.value=D)},function(D){j.status==="pending"&&(j.status="rejected",j.reason=D)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function H(j,D,P,ee,re){var me=typeof j;(me==="undefined"||me==="boolean")&&(j=null);var we=!1;if(j===null)we=!0;else switch(me){case"bigint":case"string":case"number":we=!0;break;case"object":switch(j.$$typeof){case r:case a:we=!0;break;case y:return we=j._init,H(we(j._payload),D,P,ee,re)}}if(we)return re=re(j),we=ee===""?"."+Re(j,0):ee,G(re)?(P="",we!=null&&(P=we.replace(ke,"$&/")+"/"),H(re,D,P,"",function(fa){return fa})):re!=null&&(pe(re)&&(re=fe(re,P+(re.key==null||j&&j.key===re.key?"":(""+re.key).replace(ke,"$&/")+"/")+we)),D.push(re)),1;we=0;var Ie=ee===""?".":ee+":";if(G(j))for(var Ae=0;Ae<j.length;Ae++)ee=j[Ae],me=Ie+Re(ee,Ae),we+=H(ee,D,P,me,re);else if(Ae=k(j),typeof Ae=="function")for(j=Ae.call(j),Ae=0;!(ee=j.next()).done;)ee=ee.value,me=Ie+Re(ee,Ae++),we+=H(ee,D,P,me,re);else if(me==="object"){if(typeof j.then=="function")return H(Se(j),D,P,ee,re);throw D=String(j),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.")}return we}function W(j,D,P){if(j==null)return j;var ee=[],re=0;return H(j,ee,"","",function(me){return D.call(P,me,re++)}),ee}function ne(j){if(j._status===-1){var D=j._result;D=D(),D.then(function(P){(j._status===0||j._status===-1)&&(j._status=1,j._result=P)},function(P){(j._status===0||j._status===-1)&&(j._status=2,j._result=P)}),j._status===-1&&(j._status=0,j._result=D)}if(j._status===1)return j._result.default;throw j._result}var F=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var D=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(D))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)},N={map:W,forEach:function(j,D,P){W(j,function(){D.apply(this,arguments)},P)},count:function(j){var D=0;return W(j,function(){D++}),D},toArray:function(j){return W(j,function(D){return D})||[]},only:function(j){if(!pe(j))throw Error("React.Children.only expected to receive a single React element child.");return j}};return ge.Activity=x,ge.Children=N,ge.Component=z,ge.Fragment=s,ge.Profiler=c,ge.PureComponent=R,ge.StrictMode=i,ge.Suspense=m,ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,ge.__COMPILER_RUNTIME={__proto__:null,c:function(j){return X.H.useMemoCache(j)}},ge.cache=function(j){return function(){return j.apply(null,arguments)}},ge.cacheSignal=function(){return null},ge.cloneElement=function(j,D,P){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var ee=C({},j.props),re=j.key;if(D!=null)for(me in D.key!==void 0&&(re=""+D.key),D)!K.call(D,me)||me==="key"||me==="__self"||me==="__source"||me==="ref"&&D.ref===void 0||(ee[me]=D[me]);var me=arguments.length-2;if(me===1)ee.children=P;else if(1<me){for(var we=Array(me),Ie=0;Ie<me;Ie++)we[Ie]=arguments[Ie+2];ee.children=we}return te(j.type,re,ee)},ge.createContext=function(j){return j={$$typeof:h,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:u,_context:j},j},ge.createElement=function(j,D,P){var ee,re={},me=null;if(D!=null)for(ee in D.key!==void 0&&(me=""+D.key),D)K.call(D,ee)&&ee!=="key"&&ee!=="__self"&&ee!=="__source"&&(re[ee]=D[ee]);var we=arguments.length-2;if(we===1)re.children=P;else if(1<we){for(var Ie=Array(we),Ae=0;Ae<we;Ae++)Ie[Ae]=arguments[Ae+2];re.children=Ie}if(j&&j.defaultProps)for(ee in we=j.defaultProps,we)re[ee]===void 0&&(re[ee]=we[ee]);return te(j,me,re)},ge.createRef=function(){return{current:null}},ge.forwardRef=function(j){return{$$typeof:p,render:j}},ge.isValidElement=pe,ge.lazy=function(j){return{$$typeof:y,_payload:{_status:-1,_result:j},_init:ne}},ge.memo=function(j,D){return{$$typeof:g,type:j,compare:D===void 0?null:D}},ge.startTransition=function(j){var D=X.T,P={};X.T=P;try{var ee=j(),re=X.S;re!==null&&re(P,ee),typeof ee=="object"&&ee!==null&&typeof ee.then=="function"&&ee.then(Q,F)}catch(me){F(me)}finally{D!==null&&P.types!==null&&(D.types=P.types),X.T=D}},ge.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},ge.use=function(j){return X.H.use(j)},ge.useActionState=function(j,D,P){return X.H.useActionState(j,D,P)},ge.useCallback=function(j,D){return X.H.useCallback(j,D)},ge.useContext=function(j){return X.H.useContext(j)},ge.useDebugValue=function(){},ge.useDeferredValue=function(j,D){return X.H.useDeferredValue(j,D)},ge.useEffect=function(j,D){return X.H.useEffect(j,D)},ge.useEffectEvent=function(j){return X.H.useEffectEvent(j)},ge.useId=function(){return X.H.useId()},ge.useImperativeHandle=function(j,D,P){return X.H.useImperativeHandle(j,D,P)},ge.useInsertionEffect=function(j,D){return X.H.useInsertionEffect(j,D)},ge.useLayoutEffect=function(j,D){return X.H.useLayoutEffect(j,D)},ge.useMemo=function(j,D){return X.H.useMemo(j,D)},ge.useOptimistic=function(j,D){return X.H.useOptimistic(j,D)},ge.useReducer=function(j,D,P){return X.H.useReducer(j,D,P)},ge.useRef=function(j){return X.H.useRef(j)},ge.useState=function(j){return X.H.useState(j)},ge.useSyncExternalStore=function(j,D,P){return X.H.useSyncExternalStore(j,D,P)},ge.useTransition=function(){return X.H.useTransition()},ge.version="19.2.0",ge}var Bp;function Md(){return Bp||(Bp=1,Ju.exports=fy()),Ju.exports}var v=Md();const Ud=Dd(v);var Wu={exports:{}},Si={},Zu={exports:{}},Qu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function py(){return Hp||(Hp=1,(function(r){function a(H,W){var ne=H.length;H.push(W);e:for(;0<ne;){var F=ne-1>>>1,N=H[F];if(0<c(N,W))H[F]=W,H[ne]=N,ne=F;else break e}}function s(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var W=H[0],ne=H.pop();if(ne!==W){H[0]=ne;e:for(var F=0,N=H.length,j=N>>>1;F<j;){var D=2*(F+1)-1,P=H[D],ee=D+1,re=H[ee];if(0>c(P,ne))ee<N&&0>c(re,P)?(H[F]=re,H[ee]=ne,F=ee):(H[F]=P,H[D]=ne,F=D);else if(ee<N&&0>c(re,ne))H[F]=re,H[ee]=ne,F=ee;else break e}}return W}function c(H,W){var ne=H.sortIndex-W.sortIndex;return ne!==0?ne:H.id-W.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,p=h.now();r.unstable_now=function(){return h.now()-p}}var m=[],g=[],y=1,x=null,S=3,k=!1,T=!1,C=!1,_=!1,z=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function V(H){for(var W=s(g);W!==null;){if(W.callback===null)i(g);else if(W.startTime<=H)i(g),W.sortIndex=W.expirationTime,a(m,W);else break;W=s(g)}}function G(H){if(C=!1,V(H),!T)if(s(m)!==null)T=!0,Q||(Q=!0,xe());else{var W=s(g);W!==null&&Se(G,W.startTime-H)}}var Q=!1,X=-1,K=5,te=-1;function fe(){return _?!0:!(r.unstable_now()-te<K)}function pe(){if(_=!1,Q){var H=r.unstable_now();te=H;var W=!0;try{e:{T=!1,C&&(C=!1,M(X),X=-1),k=!0;var ne=S;try{t:{for(V(H),x=s(m);x!==null&&!(x.expirationTime>H&&fe());){var F=x.callback;if(typeof F=="function"){x.callback=null,S=x.priorityLevel;var N=F(x.expirationTime<=H);if(H=r.unstable_now(),typeof N=="function"){x.callback=N,V(H),W=!0;break t}x===s(m)&&i(m),V(H)}else i(m);x=s(m)}if(x!==null)W=!0;else{var j=s(g);j!==null&&Se(G,j.startTime-H),W=!1}}break e}finally{x=null,S=ne,k=!1}W=void 0}}finally{W?xe():Q=!1}}}var xe;if(typeof R=="function")xe=function(){R(pe)};else if(typeof MessageChannel<"u"){var ke=new MessageChannel,Re=ke.port2;ke.port1.onmessage=pe,xe=function(){Re.postMessage(null)}}else xe=function(){z(pe,0)};function Se(H,W){X=z(function(){H(r.unstable_now())},W)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(H){H.callback=null},r.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<H?Math.floor(1e3/H):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_next=function(H){switch(S){case 1:case 2:case 3:var W=3;break;default:W=S}var ne=S;S=W;try{return H()}finally{S=ne}},r.unstable_requestPaint=function(){_=!0},r.unstable_runWithPriority=function(H,W){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ne=S;S=H;try{return W()}finally{S=ne}},r.unstable_scheduleCallback=function(H,W,ne){var F=r.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?F+ne:F):ne=F,H){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=ne+N,H={id:y++,callback:W,priorityLevel:H,startTime:ne,expirationTime:N,sortIndex:-1},ne>F?(H.sortIndex=ne,a(g,H),s(m)===null&&H===s(g)&&(C?(M(X),X=-1):C=!0,Se(G,ne-F))):(H.sortIndex=N,a(m,H),T||k||(T=!0,Q||(Q=!0,xe()))),H},r.unstable_shouldYield=fe,r.unstable_wrapCallback=function(H){var W=S;return function(){var ne=S;S=W;try{return H.apply(this,arguments)}finally{S=ne}}}})(Qu)),Qu}var $p;function my(){return $p||($p=1,Zu.exports=py()),Zu.exports}var ed={exports:{}},Rt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function gy(){if(qp)return Rt;qp=1;var r=Md();function a(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var i={d:{f:s,r:function(){throw Error(a(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(m,g,y){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:m,containerInfo:g,implementation:y}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Rt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,Rt.createPortal=function(m,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(a(299));return u(m,g,null,y)},Rt.flushSync=function(m){var g=h.T,y=i.p;try{if(h.T=null,i.p=2,m)return m()}finally{h.T=g,i.p=y,i.d.f()}},Rt.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,i.d.C(m,g))},Rt.prefetchDNS=function(m){typeof m=="string"&&i.d.D(m)},Rt.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var y=g.as,x=p(y,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,k=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?i.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:x,integrity:S,fetchPriority:k}):y==="script"&&i.d.X(m,{crossOrigin:x,integrity:S,fetchPriority:k,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Rt.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=p(g.as,g.crossOrigin);i.d.M(m,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&i.d.M(m)},Rt.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,x=p(y,g.crossOrigin);i.d.L(m,y,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Rt.preloadModule=function(m,g){if(typeof m=="string")if(g){var y=p(g.as,g.crossOrigin);i.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else i.d.m(m)},Rt.requestFormReset=function(m){i.d.r(m)},Rt.unstable_batchedUpdates=function(m,g){return m(g)},Rt.useFormState=function(m,g,y){return h.H.useFormState(m,g,y)},Rt.useFormStatus=function(){return h.H.useHostTransitionStatus()},Rt.version="19.2.0",Rt}var Pp;function by(){if(Pp)return ed.exports;Pp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(a){console.error(a)}}return r(),ed.exports=gy(),ed.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip;function xy(){if(Ip)return Si;Ip=1;var r=my(),a=Md(),s=by();function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(i(188))}function g(e){var t=e.alternate;if(!t){if(t=u(e),t===null)throw Error(i(188));return t!==e?null:e}for(var n=e,o=t;;){var d=n.return;if(d===null)break;var f=d.alternate;if(f===null){if(o=d.return,o!==null){n=o;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===n)return m(d),e;if(f===o)return m(d),t;f=f.sibling}throw Error(i(188))}if(n.return!==o.return)n=d,o=f;else{for(var b=!1,w=d.child;w;){if(w===n){b=!0,n=d,o=f;break}if(w===o){b=!0,o=d,n=f;break}w=w.sibling}if(!b){for(w=f.child;w;){if(w===n){b=!0,n=f,o=d;break}if(w===o){b=!0,o=f,n=d;break}w=w.sibling}if(!b)throw Error(i(189))}}if(n.alternate!==o)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var x=Object.assign,S=Symbol.for("react.element"),k=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),M=Symbol.for("react.consumer"),R=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),te=Symbol.for("react.activity"),fe=Symbol.for("react.memo_cache_sentinel"),pe=Symbol.iterator;function xe(e){return e===null||typeof e!="object"?null:(e=pe&&e[pe]||e["@@iterator"],typeof e=="function"?e:null)}var ke=Symbol.for("react.client.reference");function Re(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ke?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case z:return"Profiler";case _:return"StrictMode";case G:return"Suspense";case Q:return"SuspenseList";case te:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case R:return e.displayName||"Context";case M:return(e._context.displayName||"Context")+".Consumer";case V:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return t=e.displayName||null,t!==null?t:Re(e.type)||"Memo";case K:t=e._payload,e=e._init;try{return Re(e(t))}catch{}}return null}var Se=Array.isArray,H=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},F=[],N=-1;function j(e){return{current:e}}function D(e){0>N||(e.current=F[N],F[N]=null,N--)}function P(e,t){N++,F[N]=e.current,e.current=t}var ee=j(null),re=j(null),me=j(null),we=j(null);function Ie(e,t){switch(P(me,t),P(re,e),P(ee,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?np(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=np(t),e=sp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}D(ee),P(ee,e)}function Ae(){D(ee),D(re),D(me)}function fa(e){e.memoizedState!==null&&P(we,e);var t=ee.current,n=sp(t,e.type);t!==n&&(P(re,e),P(ee,n))}function Na(e){re.current===e&&(D(ee),D(re)),we.current===e&&(D(we),xi._currentValue=ne)}var aa,pa;function Tt(e){if(aa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);aa=t&&t[1]||"",pa=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+aa+e+pa}var fr=!1;function Ha(e,t){if(!e||fr)return"";fr=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch($){var B=$}Reflect.construct(e,[],Y)}else{try{Y.call()}catch($){B=$}e.call(Y.prototype)}}else{try{throw Error()}catch($){B=$}(Y=e())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch($){if($&&B&&typeof $.stack=="string")return[$.stack,B.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),b=f[0],w=f[1];if(b&&w){var E=b.split(`
`),L=w.split(`
`);for(d=o=0;o<E.length&&!E[o].includes("DetermineComponentFrameRoot");)o++;for(;d<L.length&&!L[d].includes("DetermineComponentFrameRoot");)d++;if(o===E.length||d===L.length)for(o=E.length-1,d=L.length-1;1<=o&&0<=d&&E[o]!==L[d];)d--;for(;1<=o&&0<=d;o--,d--)if(E[o]!==L[d]){if(o!==1||d!==1)do if(o--,d--,0>d||E[o]!==L[d]){var q=`
`+E[o].replace(" at new "," at ");return e.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",e.displayName)),q}while(1<=o&&0<=d);break}}}finally{fr=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Tt(n):""}function Je(e,t){switch(e.tag){case 26:case 27:case 5:return Tt(e.type);case 16:return Tt("Lazy");case 13:return e.child!==t&&t!==null?Tt("Suspense Fallback"):Tt("Suspense");case 19:return Tt("SuspenseList");case 0:case 15:return Ha(e.type,!1);case 11:return Ha(e.type.render,!1);case 1:return Ha(e.type,!0);case 31:return Tt("Activity");default:return""}}function vn(e){try{var t="",n=null;do t+=Je(e,n),n=e,e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Xr=Object.prototype.hasOwnProperty,pr=r.unstable_scheduleCallback,mr=r.unstable_cancelCallback,wn=r.unstable_shouldYield,kn=r.unstable_requestPaint,wt=r.unstable_now,Sn=r.unstable_getCurrentPriorityLevel,Kr=r.unstable_ImmediatePriority,$a=r.unstable_UserBlockingPriority,Ee=r.unstable_NormalPriority,ma=r.unstable_LowPriority,gr=r.unstable_IdlePriority,Rs=r.log,jn=r.unstable_setDisableYieldValue,Ca=null,ht=null;function Ot(e){if(typeof Rs=="function"&&jn(e),ht&&typeof ht.setStrictMode=="function")try{ht.setStrictMode(Ca,e)}catch{}}var ft=Math.clz32?Math.clz32:ga,qa=Math.log,ze=Math.LN2;function ga(e){return e>>>=0,e===0?32:31-(qa(e)/ze|0)|0}var Ge=256,J=262144,Ze=4194304;function gt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function bt(e,t,n){var o=e.pendingLanes;if(o===0)return 0;var d=0,f=e.suspendedLanes,b=e.pingedLanes;e=e.warmLanes;var w=o&134217727;return w!==0?(o=w&~f,o!==0?d=gt(o):(b&=w,b!==0?d=gt(b):n||(n=w&~e,n!==0&&(d=gt(n))))):(w=o&~f,w!==0?d=gt(w):b!==0?d=gt(b):n||(n=o&~e,n!==0&&(d=gt(n)))),d===0?0:t!==0&&t!==d&&(t&f)===0&&(f=d&-d,n=t&-t,f>=n||f===32&&(n&4194048)!==0)?t:d}function Z(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ve(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Be(){var e=Ze;return Ze<<=1,(Ze&62914560)===0&&(Ze=4194304),e}function Xe(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function He(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Yt(e,t,n,o,d,f){var b=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var w=e.entanglements,E=e.expirationTimes,L=e.hiddenUpdates;for(n=b&~n;0<n;){var q=31-ft(n),Y=1<<q;w[q]=0,E[q]=-1;var B=L[q];if(B!==null)for(L[q]=null,q=0;q<B.length;q++){var $=B[q];$!==null&&($.lane&=-536870913)}n&=~Y}o!==0&&Ut(e,o,0),f!==0&&d===0&&e.tag!==0&&(e.suspendedLanes|=f&~(b&~t))}function Ut(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-ft(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|n&261930}function Pa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-ft(n),d=1<<o;d&t|e[o]&t&&(e[o]|=t),n&=~d}}function At(e,t){var n=t&-t;return n=(n&42)!==0?1:_n(n),(n&(e.suspendedLanes|t))!==0?0:n}function _n(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Fr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zs(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:Cp(e.type))}function br(e,t){var n=W.p;try{return W.p=e,t()}finally{W.p=n}}var ba=Math.random().toString(36).slice(2),pt="__reactFiber$"+ba,kt="__reactProps$"+ba,Gt="__reactContainer$"+ba,et="__reactEvents$"+ba,Ta="__reactListeners$"+ba,xr="__reactHandles$"+ba,Aa="__reactResources$"+ba,Os="__reactMarker$"+ba;function ql(e){delete e[pt],delete e[kt],delete e[et],delete e[Ta],delete e[xr]}function En(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Gt]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hp(e);e!==null;){if(n=e[pt])return n;e=hp(e)}return t}e=n,n=e.parentNode}return null}function Nn(e){if(e=e[pt]||e[Gt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ds(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Cn(e){var t=e[Aa];return t||(t=e[Aa]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function xt(e){e[Os]=!0}var Gd=new Set,Vd={};function Jr(e,t){Tn(e,t),Tn(e+"Capture",t)}function Tn(e,t){for(Vd[e]=t,e=0;e<t.length;e++)Gd.add(t[e])}var ab=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xd={},Kd={};function rb(e){return Xr.call(Kd,e)?!0:Xr.call(Xd,e)?!1:ab.test(e)?Kd[e]=!0:(Xd[e]=!0,!1)}function Wi(e,t,n){if(rb(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Zi(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Ia(e,t,n,o){if(o===null)e.removeAttribute(n);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+o)}}function ra(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function nb(e,t,n){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,f=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return d.call(this)},set:function(b){n=""+b,f.call(this,b)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return n},setValue:function(b){n=""+b},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pl(e){if(!e._valueTracker){var t=Fd(e)?"checked":"value";e._valueTracker=nb(e,t,""+e[t])}}function Jd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=Fd(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function Qi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var sb=/[\n"\\]/g;function na(e){return e.replace(sb,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Il(e,t,n,o,d,f,b,w){e.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.type=b:e.removeAttribute("type"),t!=null?b==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ra(t)):e.value!==""+ra(t)&&(e.value=""+ra(t)):b!=="submit"&&b!=="reset"||e.removeAttribute("value"),t!=null?Yl(e,b,ra(t)):n!=null?Yl(e,b,ra(n)):o!=null&&e.removeAttribute("value"),d==null&&f!=null&&(e.defaultChecked=!!f),d!=null&&(e.checked=d&&typeof d!="function"&&typeof d!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+ra(w):e.removeAttribute("name")}function Wd(e,t,n,o,d,f,b,w){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),t!=null||n!=null){if(!(f!=="submit"&&f!=="reset"||t!=null)){Pl(e);return}n=n!=null?""+ra(n):"",t=t!=null?""+ra(t):n,w||t===e.value||(e.value=t),e.defaultValue=t}o=o??d,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=w?e.checked:!!o,e.defaultChecked=!!o,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(e.name=b),Pl(e)}function Yl(e,t,n){t==="number"&&Qi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function An(e,t,n,o){if(e=e.options,t){t={};for(var d=0;d<n.length;d++)t["$"+n[d]]=!0;for(n=0;n<e.length;n++)d=t.hasOwnProperty("$"+e[n].value),e[n].selected!==d&&(e[n].selected=d),d&&o&&(e[n].defaultSelected=!0)}else{for(n=""+ra(n),t=null,d=0;d<e.length;d++){if(e[d].value===n){e[d].selected=!0,o&&(e[d].defaultSelected=!0);return}t!==null||e[d].disabled||(t=e[d])}t!==null&&(t.selected=!0)}}function Zd(e,t,n){if(t!=null&&(t=""+ra(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+ra(n):""}function Qd(e,t,n,o){if(t==null){if(o!=null){if(n!=null)throw Error(i(92));if(Se(o)){if(1<o.length)throw Error(i(93));o=o[0]}n=o}n==null&&(n=""),t=n}n=ra(t),e.defaultValue=n,o=e.textContent,o===n&&o!==""&&o!==null&&(e.value=o),Pl(e)}function Rn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ib=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function eh(e,t,n){var o=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,n):typeof n!="number"||n===0||ib.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function th(e,t,n){if(t!=null&&typeof t!="object")throw Error(i(62));if(e=e.style,n!=null){for(var o in n)!n.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var d in t)o=t[d],t.hasOwnProperty(d)&&n[d]!==o&&eh(e,d,o)}else for(var f in t)t.hasOwnProperty(f)&&eh(e,f,t[f])}function Gl(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ob=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function eo(e){return lb.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ya(){}var Vl=null;function Xl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zn=null,On=null;function ah(e){var t=Nn(e);if(t&&(e=t.stateNode)){var n=e[kt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Il(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+na(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var d=o[kt]||null;if(!d)throw Error(i(90));Il(o,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(t=0;t<n.length;t++)o=n[t],o.form===e.form&&Jd(o)}break e;case"textarea":Zd(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&An(e,!!n.multiple,t,!1)}}}var Kl=!1;function rh(e,t,n){if(Kl)return e(t,n);Kl=!0;try{var o=e(t);return o}finally{if(Kl=!1,(zn!==null||On!==null)&&(Po(),zn&&(t=zn,e=On,On=zn=null,ah(t),e)))for(t=0;t<e.length;t++)ah(e[t])}}function Ms(e,t){var n=e.stateNode;if(n===null)return null;var o=n[kt]||null;if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(i(231,t,typeof n));return n}var Ga=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fl=!1;if(Ga)try{var Us={};Object.defineProperty(Us,"passive",{get:function(){Fl=!0}}),window.addEventListener("test",Us,Us),window.removeEventListener("test",Us,Us)}catch{Fl=!1}var yr=null,Jl=null,to=null;function nh(){if(to)return to;var e,t=Jl,n=t.length,o,d="value"in yr?yr.value:yr.textContent,f=d.length;for(e=0;e<n&&t[e]===d[e];e++);var b=n-e;for(o=1;o<=b&&t[n-o]===d[f-o];o++);return to=d.slice(e,1<o?1-o:void 0)}function ao(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ro(){return!0}function sh(){return!1}function Lt(e){function t(n,o,d,f,b){this._reactName=n,this._targetInst=d,this.type=o,this.nativeEvent=f,this.target=b,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(n=e[w],this[w]=n?n(f):f[w]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ro:sh,this.isPropagationStopped=sh,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ro)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ro)},persist:function(){},isPersistent:ro}),t}var Wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},no=Lt(Wr),Ls=x({},Wr,{view:0,detail:0}),cb=Lt(Ls),Wl,Zl,Bs,so=x({},Ls,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ec,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bs&&(Bs&&e.type==="mousemove"?(Wl=e.screenX-Bs.screenX,Zl=e.screenY-Bs.screenY):Zl=Wl=0,Bs=e),Wl)},movementY:function(e){return"movementY"in e?e.movementY:Zl}}),ih=Lt(so),ub=x({},so,{dataTransfer:0}),db=Lt(ub),hb=x({},Ls,{relatedTarget:0}),Ql=Lt(hb),fb=x({},Wr,{animationName:0,elapsedTime:0,pseudoElement:0}),pb=Lt(fb),mb=x({},Wr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gb=Lt(mb),bb=x({},Wr,{data:0}),oh=Lt(bb),xb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=vb[e])?!!t[e]:!1}function ec(){return wb}var kb=x({},Ls,{key:function(e){if(e.key){var t=xb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ao(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ec,charCode:function(e){return e.type==="keypress"?ao(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ao(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sb=Lt(kb),jb=x({},so,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lh=Lt(jb),_b=x({},Ls,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ec}),Eb=Lt(_b),Nb=x({},Wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cb=Lt(Nb),Tb=x({},so,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ab=Lt(Tb),Rb=x({},Wr,{newState:0,oldState:0}),zb=Lt(Rb),Ob=[9,13,27,32],tc=Ga&&"CompositionEvent"in window,Hs=null;Ga&&"documentMode"in document&&(Hs=document.documentMode);var Db=Ga&&"TextEvent"in window&&!Hs,ch=Ga&&(!tc||Hs&&8<Hs&&11>=Hs),uh=" ",dh=!1;function hh(e,t){switch(e){case"keyup":return Ob.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dn=!1;function Mb(e,t){switch(e){case"compositionend":return fh(t);case"keypress":return t.which!==32?null:(dh=!0,uh);case"textInput":return e=t.data,e===uh&&dh?null:e;default:return null}}function Ub(e,t){if(Dn)return e==="compositionend"||!tc&&hh(e,t)?(e=nh(),to=Jl=yr=null,Dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ch&&t.locale!=="ko"?null:t.data;default:return null}}var Lb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ph(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Lb[e.type]:t==="textarea"}function mh(e,t,n,o){zn?On?On.push(o):On=[o]:zn=o,t=Fo(t,"onChange"),0<t.length&&(n=new no("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var $s=null,qs=null;function Bb(e){Z0(e,0)}function io(e){var t=Ds(e);if(Jd(t))return e}function gh(e,t){if(e==="change")return t}var bh=!1;if(Ga){var ac;if(Ga){var rc="oninput"in document;if(!rc){var xh=document.createElement("div");xh.setAttribute("oninput","return;"),rc=typeof xh.oninput=="function"}ac=rc}else ac=!1;bh=ac&&(!document.documentMode||9<document.documentMode)}function yh(){$s&&($s.detachEvent("onpropertychange",vh),qs=$s=null)}function vh(e){if(e.propertyName==="value"&&io(qs)){var t=[];mh(t,qs,e,Xl(e)),rh(Bb,t)}}function Hb(e,t,n){e==="focusin"?(yh(),$s=t,qs=n,$s.attachEvent("onpropertychange",vh)):e==="focusout"&&yh()}function $b(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return io(qs)}function qb(e,t){if(e==="click")return io(t)}function Pb(e,t){if(e==="input"||e==="change")return io(t)}function Ib(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Vt=typeof Object.is=="function"?Object.is:Ib;function Ps(e,t){if(Vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var d=n[o];if(!Xr.call(t,d)||!Vt(e[d],t[d]))return!1}return!0}function wh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kh(e,t){var n=wh(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wh(n)}}function Sh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Qi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qi(e.document)}return t}function nc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Yb=Ga&&"documentMode"in document&&11>=document.documentMode,Mn=null,sc=null,Is=null,ic=!1;function _h(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ic||Mn==null||Mn!==Qi(o)||(o=Mn,"selectionStart"in o&&nc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Is&&Ps(Is,o)||(Is=o,o=Fo(sc,"onSelect"),0<o.length&&(t=new no("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=Mn)))}function Zr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Un={animationend:Zr("Animation","AnimationEnd"),animationiteration:Zr("Animation","AnimationIteration"),animationstart:Zr("Animation","AnimationStart"),transitionrun:Zr("Transition","TransitionRun"),transitionstart:Zr("Transition","TransitionStart"),transitioncancel:Zr("Transition","TransitionCancel"),transitionend:Zr("Transition","TransitionEnd")},oc={},Eh={};Ga&&(Eh=document.createElement("div").style,"AnimationEvent"in window||(delete Un.animationend.animation,delete Un.animationiteration.animation,delete Un.animationstart.animation),"TransitionEvent"in window||delete Un.transitionend.transition);function Qr(e){if(oc[e])return oc[e];if(!Un[e])return e;var t=Un[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Eh)return oc[e]=t[n];return e}var Nh=Qr("animationend"),Ch=Qr("animationiteration"),Th=Qr("animationstart"),Gb=Qr("transitionrun"),Vb=Qr("transitionstart"),Xb=Qr("transitioncancel"),Ah=Qr("transitionend"),Rh=new Map,lc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lc.push("scrollEnd");function xa(e,t){Rh.set(e,t),Jr(t,[e])}var oo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},sa=[],Ln=0,cc=0;function lo(){for(var e=Ln,t=cc=Ln=0;t<e;){var n=sa[t];sa[t++]=null;var o=sa[t];sa[t++]=null;var d=sa[t];sa[t++]=null;var f=sa[t];if(sa[t++]=null,o!==null&&d!==null){var b=o.pending;b===null?d.next=d:(d.next=b.next,b.next=d),o.pending=d}f!==0&&zh(n,d,f)}}function co(e,t,n,o){sa[Ln++]=e,sa[Ln++]=t,sa[Ln++]=n,sa[Ln++]=o,cc|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function uc(e,t,n,o){return co(e,t,n,o),uo(e)}function en(e,t){return co(e,null,null,t),uo(e)}function zh(e,t,n){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n);for(var d=!1,f=e.return;f!==null;)f.childLanes|=n,o=f.alternate,o!==null&&(o.childLanes|=n),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(d=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,d&&t!==null&&(d=31-ft(n),e=f.hiddenUpdates,o=e[d],o===null?e[d]=[t]:o.push(t),t.lane=n|536870912),f):null}function uo(e){if(50<di)throw di=0,yu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Bn={};function Kb(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(e,t,n,o){return new Kb(e,t,n,o)}function dc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Va(e,t){var n=e.alternate;return n===null?(n=Xt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Oh(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ho(e,t,n,o,d,f){var b=0;if(o=e,typeof e=="function")dc(e)&&(b=1);else if(typeof e=="string")b=Qx(e,n,ee.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case te:return e=Xt(31,n,t,d),e.elementType=te,e.lanes=f,e;case C:return tn(n.children,d,f,t);case _:b=8,d|=24;break;case z:return e=Xt(12,n,t,d|2),e.elementType=z,e.lanes=f,e;case G:return e=Xt(13,n,t,d),e.elementType=G,e.lanes=f,e;case Q:return e=Xt(19,n,t,d),e.elementType=Q,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case R:b=10;break e;case M:b=9;break e;case V:b=11;break e;case X:b=14;break e;case K:b=16,o=null;break e}b=29,n=Error(i(130,e===null?"null":typeof e,"")),o=null}return t=Xt(b,n,t,d),t.elementType=e,t.type=o,t.lanes=f,t}function tn(e,t,n,o){return e=Xt(7,e,o,t),e.lanes=n,e}function hc(e,t,n){return e=Xt(6,e,null,t),e.lanes=n,e}function Dh(e){var t=Xt(18,null,null,0);return t.stateNode=e,t}function fc(e,t,n){return t=Xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Mh=new WeakMap;function ia(e,t){if(typeof e=="object"&&e!==null){var n=Mh.get(e);return n!==void 0?n:(t={value:e,source:t,stack:vn(t)},Mh.set(e,t),t)}return{value:e,source:t,stack:vn(t)}}var Hn=[],$n=0,fo=null,Ys=0,oa=[],la=0,vr=null,Ra=1,za="";function Xa(e,t){Hn[$n++]=Ys,Hn[$n++]=fo,fo=e,Ys=t}function Uh(e,t,n){oa[la++]=Ra,oa[la++]=za,oa[la++]=vr,vr=e;var o=Ra;e=za;var d=32-ft(o)-1;o&=~(1<<d),n+=1;var f=32-ft(t)+d;if(30<f){var b=d-d%5;f=(o&(1<<b)-1).toString(32),o>>=b,d-=b,Ra=1<<32-ft(t)+d|n<<d|o,za=f+e}else Ra=1<<f|n<<d|o,za=e}function pc(e){e.return!==null&&(Xa(e,1),Uh(e,1,0))}function mc(e){for(;e===fo;)fo=Hn[--$n],Hn[$n]=null,Ys=Hn[--$n],Hn[$n]=null;for(;e===vr;)vr=oa[--la],oa[la]=null,za=oa[--la],oa[la]=null,Ra=oa[--la],oa[la]=null}function Lh(e,t){oa[la++]=Ra,oa[la++]=za,oa[la++]=vr,Ra=t.id,za=t.overflow,vr=e}var St=null,Ke=null,Te=!1,wr=null,ca=!1,gc=Error(i(519));function kr(e){var t=Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Gs(ia(t,e)),gc}function Bh(e){var t=e.stateNode,n=e.type,o=e.memoizedProps;switch(t[pt]=e,t[kt]=o,n){case"dialog":_e("cancel",t),_e("close",t);break;case"iframe":case"object":case"embed":_e("load",t);break;case"video":case"audio":for(n=0;n<fi.length;n++)_e(fi[n],t);break;case"source":_e("error",t);break;case"img":case"image":case"link":_e("error",t),_e("load",t);break;case"details":_e("toggle",t);break;case"input":_e("invalid",t),Wd(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":_e("invalid",t);break;case"textarea":_e("invalid",t),Qd(t,o.value,o.defaultValue,o.children)}n=o.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||o.suppressHydrationWarning===!0||ap(t.textContent,n)?(o.popover!=null&&(_e("beforetoggle",t),_e("toggle",t)),o.onScroll!=null&&_e("scroll",t),o.onScrollEnd!=null&&_e("scrollend",t),o.onClick!=null&&(t.onclick=Ya),t=!0):t=!1,t||kr(e,!0)}function Hh(e){for(St=e.return;St;)switch(St.tag){case 5:case 31:case 13:ca=!1;return;case 27:case 3:ca=!0;return;default:St=St.return}}function qn(e){if(e!==St)return!1;if(!Te)return Hh(e),Te=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Du(e.type,e.memoizedProps)),n=!n),n&&Ke&&kr(e),Hh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));Ke=dp(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));Ke=dp(e)}else t===27?(t=Ke,Ur(e.type)?(e=Hu,Hu=null,Ke=e):Ke=t):Ke=St?da(e.stateNode.nextSibling):null;return!0}function an(){Ke=St=null,Te=!1}function bc(){var e=wr;return e!==null&&(qt===null?qt=e:qt.push.apply(qt,e),wr=null),e}function Gs(e){wr===null?wr=[e]:wr.push(e)}var xc=j(null),rn=null,Ka=null;function Sr(e,t,n){P(xc,t._currentValue),t._currentValue=n}function Fa(e){e._currentValue=xc.current,D(xc)}function yc(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function vc(e,t,n,o){var d=e.child;for(d!==null&&(d.return=e);d!==null;){var f=d.dependencies;if(f!==null){var b=d.child;f=f.firstContext;e:for(;f!==null;){var w=f;f=d;for(var E=0;E<t.length;E++)if(w.context===t[E]){f.lanes|=n,w=f.alternate,w!==null&&(w.lanes|=n),yc(f.return,n,e),o||(b=null);break e}f=w.next}}else if(d.tag===18){if(b=d.return,b===null)throw Error(i(341));b.lanes|=n,f=b.alternate,f!==null&&(f.lanes|=n),yc(b,n,e),b=null}else b=d.child;if(b!==null)b.return=d;else for(b=d;b!==null;){if(b===e){b=null;break}if(d=b.sibling,d!==null){d.return=b.return,b=d;break}b=b.return}d=b}}function Pn(e,t,n,o){e=null;for(var d=t,f=!1;d!==null;){if(!f){if((d.flags&524288)!==0)f=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var b=d.alternate;if(b===null)throw Error(i(387));if(b=b.memoizedProps,b!==null){var w=d.type;Vt(d.pendingProps.value,b.value)||(e!==null?e.push(w):e=[w])}}else if(d===we.current){if(b=d.alternate,b===null)throw Error(i(387));b.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(e!==null?e.push(xi):e=[xi])}d=d.return}e!==null&&vc(t,e,n,o),t.flags|=262144}function po(e){for(e=e.firstContext;e!==null;){if(!Vt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function nn(e){rn=e,Ka=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function jt(e){return $h(rn,e)}function mo(e,t){return rn===null&&nn(e),$h(e,t)}function $h(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ka===null){if(e===null)throw Error(i(308));Ka=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ka=Ka.next=t;return n}var Fb=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Jb=r.unstable_scheduleCallback,Wb=r.unstable_NormalPriority,it={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wc(){return{controller:new Fb,data:new Map,refCount:0}}function Vs(e){e.refCount--,e.refCount===0&&Jb(Wb,function(){e.controller.abort()})}var Xs=null,kc=0,In=0,Yn=null;function Zb(e,t){if(Xs===null){var n=Xs=[];kc=0,In=_u(),Yn={status:"pending",value:void 0,then:function(o){n.push(o)}}}return kc++,t.then(qh,qh),t}function qh(){if(--kc===0&&Xs!==null){Yn!==null&&(Yn.status="fulfilled");var e=Xs;Xs=null,In=0,Yn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Qb(e,t){var n=[],o={status:"pending",value:null,reason:null,then:function(d){n.push(d)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var d=0;d<n.length;d++)(0,n[d])(t)},function(d){for(o.status="rejected",o.reason=d,d=0;d<n.length;d++)(0,n[d])(void 0)}),o}var Ph=H.S;H.S=function(e,t){E0=wt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Zb(e,t),Ph!==null&&Ph(e,t)};var sn=j(null);function Sc(){var e=sn.current;return e!==null?e:Ye.pooledCache}function go(e,t){t===null?P(sn,sn.current):P(sn,t.pool)}function Ih(){var e=Sc();return e===null?null:{parent:it._currentValue,pool:e}}var Gn=Error(i(460)),jc=Error(i(474)),bo=Error(i(542)),xo={then:function(){}};function Yh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Gh(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ya,Ya),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Xh(e),e;default:if(typeof t.status=="string")t.then(Ya,Ya);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var d=t;d.status="fulfilled",d.value=o}},function(o){if(t.status==="pending"){var d=t;d.status="rejected",d.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Xh(e),e}throw ln=t,Gn}}function on(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ln=n,Gn):n}}var ln=null;function Vh(){if(ln===null)throw Error(i(459));var e=ln;return ln=null,e}function Xh(e){if(e===Gn||e===bo)throw Error(i(483))}var Vn=null,Ks=0;function yo(e){var t=Ks;return Ks+=1,Vn===null&&(Vn=[]),Gh(Vn,e,t)}function Fs(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function vo(e,t){throw t.$$typeof===S?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Kh(e){function t(O,A){if(e){var U=O.deletions;U===null?(O.deletions=[A],O.flags|=16):U.push(A)}}function n(O,A){if(!e)return null;for(;A!==null;)t(O,A),A=A.sibling;return null}function o(O){for(var A=new Map;O!==null;)O.key!==null?A.set(O.key,O):A.set(O.index,O),O=O.sibling;return A}function d(O,A){return O=Va(O,A),O.index=0,O.sibling=null,O}function f(O,A,U){return O.index=U,e?(U=O.alternate,U!==null?(U=U.index,U<A?(O.flags|=67108866,A):U):(O.flags|=67108866,A)):(O.flags|=1048576,A)}function b(O){return e&&O.alternate===null&&(O.flags|=67108866),O}function w(O,A,U,I){return A===null||A.tag!==6?(A=hc(U,O.mode,I),A.return=O,A):(A=d(A,U),A.return=O,A)}function E(O,A,U,I){var le=U.type;return le===C?q(O,A,U.props.children,I,U.key):A!==null&&(A.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===K&&on(le)===A.type)?(A=d(A,U.props),Fs(A,U),A.return=O,A):(A=ho(U.type,U.key,U.props,null,O.mode,I),Fs(A,U),A.return=O,A)}function L(O,A,U,I){return A===null||A.tag!==4||A.stateNode.containerInfo!==U.containerInfo||A.stateNode.implementation!==U.implementation?(A=fc(U,O.mode,I),A.return=O,A):(A=d(A,U.children||[]),A.return=O,A)}function q(O,A,U,I,le){return A===null||A.tag!==7?(A=tn(U,O.mode,I,le),A.return=O,A):(A=d(A,U),A.return=O,A)}function Y(O,A,U){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=hc(""+A,O.mode,U),A.return=O,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case k:return U=ho(A.type,A.key,A.props,null,O.mode,U),Fs(U,A),U.return=O,U;case T:return A=fc(A,O.mode,U),A.return=O,A;case K:return A=on(A),Y(O,A,U)}if(Se(A)||xe(A))return A=tn(A,O.mode,U,null),A.return=O,A;if(typeof A.then=="function")return Y(O,yo(A),U);if(A.$$typeof===R)return Y(O,mo(O,A),U);vo(O,A)}return null}function B(O,A,U,I){var le=A!==null?A.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return le!==null?null:w(O,A,""+U,I);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case k:return U.key===le?E(O,A,U,I):null;case T:return U.key===le?L(O,A,U,I):null;case K:return U=on(U),B(O,A,U,I)}if(Se(U)||xe(U))return le!==null?null:q(O,A,U,I,null);if(typeof U.then=="function")return B(O,A,yo(U),I);if(U.$$typeof===R)return B(O,A,mo(O,U),I);vo(O,U)}return null}function $(O,A,U,I,le){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return O=O.get(U)||null,w(A,O,""+I,le);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case k:return O=O.get(I.key===null?U:I.key)||null,E(A,O,I,le);case T:return O=O.get(I.key===null?U:I.key)||null,L(A,O,I,le);case K:return I=on(I),$(O,A,U,I,le)}if(Se(I)||xe(I))return O=O.get(U)||null,q(A,O,I,le,null);if(typeof I.then=="function")return $(O,A,U,yo(I),le);if(I.$$typeof===R)return $(O,A,U,mo(A,I),le);vo(A,I)}return null}function se(O,A,U,I){for(var le=null,Oe=null,oe=A,ye=A=0,Ce=null;oe!==null&&ye<U.length;ye++){oe.index>ye?(Ce=oe,oe=null):Ce=oe.sibling;var De=B(O,oe,U[ye],I);if(De===null){oe===null&&(oe=Ce);break}e&&oe&&De.alternate===null&&t(O,oe),A=f(De,A,ye),Oe===null?le=De:Oe.sibling=De,Oe=De,oe=Ce}if(ye===U.length)return n(O,oe),Te&&Xa(O,ye),le;if(oe===null){for(;ye<U.length;ye++)oe=Y(O,U[ye],I),oe!==null&&(A=f(oe,A,ye),Oe===null?le=oe:Oe.sibling=oe,Oe=oe);return Te&&Xa(O,ye),le}for(oe=o(oe);ye<U.length;ye++)Ce=$(oe,O,ye,U[ye],I),Ce!==null&&(e&&Ce.alternate!==null&&oe.delete(Ce.key===null?ye:Ce.key),A=f(Ce,A,ye),Oe===null?le=Ce:Oe.sibling=Ce,Oe=Ce);return e&&oe.forEach(function(qr){return t(O,qr)}),Te&&Xa(O,ye),le}function de(O,A,U,I){if(U==null)throw Error(i(151));for(var le=null,Oe=null,oe=A,ye=A=0,Ce=null,De=U.next();oe!==null&&!De.done;ye++,De=U.next()){oe.index>ye?(Ce=oe,oe=null):Ce=oe.sibling;var qr=B(O,oe,De.value,I);if(qr===null){oe===null&&(oe=Ce);break}e&&oe&&qr.alternate===null&&t(O,oe),A=f(qr,A,ye),Oe===null?le=qr:Oe.sibling=qr,Oe=qr,oe=Ce}if(De.done)return n(O,oe),Te&&Xa(O,ye),le;if(oe===null){for(;!De.done;ye++,De=U.next())De=Y(O,De.value,I),De!==null&&(A=f(De,A,ye),Oe===null?le=De:Oe.sibling=De,Oe=De);return Te&&Xa(O,ye),le}for(oe=o(oe);!De.done;ye++,De=U.next())De=$(oe,O,ye,De.value,I),De!==null&&(e&&De.alternate!==null&&oe.delete(De.key===null?ye:De.key),A=f(De,A,ye),Oe===null?le=De:Oe.sibling=De,Oe=De);return e&&oe.forEach(function(uy){return t(O,uy)}),Te&&Xa(O,ye),le}function Pe(O,A,U,I){if(typeof U=="object"&&U!==null&&U.type===C&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case k:e:{for(var le=U.key;A!==null;){if(A.key===le){if(le=U.type,le===C){if(A.tag===7){n(O,A.sibling),I=d(A,U.props.children),I.return=O,O=I;break e}}else if(A.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===K&&on(le)===A.type){n(O,A.sibling),I=d(A,U.props),Fs(I,U),I.return=O,O=I;break e}n(O,A);break}else t(O,A);A=A.sibling}U.type===C?(I=tn(U.props.children,O.mode,I,U.key),I.return=O,O=I):(I=ho(U.type,U.key,U.props,null,O.mode,I),Fs(I,U),I.return=O,O=I)}return b(O);case T:e:{for(le=U.key;A!==null;){if(A.key===le)if(A.tag===4&&A.stateNode.containerInfo===U.containerInfo&&A.stateNode.implementation===U.implementation){n(O,A.sibling),I=d(A,U.children||[]),I.return=O,O=I;break e}else{n(O,A);break}else t(O,A);A=A.sibling}I=fc(U,O.mode,I),I.return=O,O=I}return b(O);case K:return U=on(U),Pe(O,A,U,I)}if(Se(U))return se(O,A,U,I);if(xe(U)){if(le=xe(U),typeof le!="function")throw Error(i(150));return U=le.call(U),de(O,A,U,I)}if(typeof U.then=="function")return Pe(O,A,yo(U),I);if(U.$$typeof===R)return Pe(O,A,mo(O,U),I);vo(O,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,A!==null&&A.tag===6?(n(O,A.sibling),I=d(A,U),I.return=O,O=I):(n(O,A),I=hc(U,O.mode,I),I.return=O,O=I),b(O)):n(O,A)}return function(O,A,U,I){try{Ks=0;var le=Pe(O,A,U,I);return Vn=null,le}catch(oe){if(oe===Gn||oe===bo)throw oe;var Oe=Xt(29,oe,null,O.mode);return Oe.lanes=I,Oe.return=O,Oe}finally{}}}var cn=Kh(!0),Fh=Kh(!1),jr=!1;function _c(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ec(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _r(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Er(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Me&2)!==0){var d=o.pending;return d===null?t.next=t:(t.next=d.next,d.next=t),o.pending=t,t=uo(e),zh(e,null,n),t}return co(e,o,t,n),uo(e)}function Js(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Pa(e,n)}}function Nc(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var d=null,f=null;if(n=n.firstBaseUpdate,n!==null){do{var b={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};f===null?d=f=b:f=f.next=b,n=n.next}while(n!==null);f===null?d=f=t:f=f.next=t}else d=f=t;n={baseState:o.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Cc=!1;function Ws(){if(Cc){var e=Yn;if(e!==null)throw e}}function Zs(e,t,n,o){Cc=!1;var d=e.updateQueue;jr=!1;var f=d.firstBaseUpdate,b=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var E=w,L=E.next;E.next=null,b===null?f=L:b.next=L,b=E;var q=e.alternate;q!==null&&(q=q.updateQueue,w=q.lastBaseUpdate,w!==b&&(w===null?q.firstBaseUpdate=L:w.next=L,q.lastBaseUpdate=E))}if(f!==null){var Y=d.baseState;b=0,q=L=E=null,w=f;do{var B=w.lane&-536870913,$=B!==w.lane;if($?(Ne&B)===B:(o&B)===B){B!==0&&B===In&&(Cc=!0),q!==null&&(q=q.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var se=e,de=w;B=t;var Pe=n;switch(de.tag){case 1:if(se=de.payload,typeof se=="function"){Y=se.call(Pe,Y,B);break e}Y=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=de.payload,B=typeof se=="function"?se.call(Pe,Y,B):se,B==null)break e;Y=x({},Y,B);break e;case 2:jr=!0}}B=w.callback,B!==null&&(e.flags|=64,$&&(e.flags|=8192),$=d.callbacks,$===null?d.callbacks=[B]:$.push(B))}else $={lane:B,tag:w.tag,payload:w.payload,callback:w.callback,next:null},q===null?(L=q=$,E=Y):q=q.next=$,b|=B;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;$=w,w=$.next,$.next=null,d.lastBaseUpdate=$,d.shared.pending=null}}while(!0);q===null&&(E=Y),d.baseState=E,d.firstBaseUpdate=L,d.lastBaseUpdate=q,f===null&&(d.shared.lanes=0),Rr|=b,e.lanes=b,e.memoizedState=Y}}function Jh(e,t){if(typeof e!="function")throw Error(i(191,e));e.call(t)}function Wh(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Jh(n[e],t)}var Xn=j(null),wo=j(0);function Zh(e,t){e=nr,P(wo,e),P(Xn,t),nr=e|t.baseLanes}function Tc(){P(wo,nr),P(Xn,Xn.current)}function Ac(){nr=wo.current,D(Xn),D(wo)}var Kt=j(null),ua=null;function Nr(e){var t=e.alternate;P(nt,nt.current&1),P(Kt,e),ua===null&&(t===null||Xn.current!==null||t.memoizedState!==null)&&(ua=e)}function Rc(e){P(nt,nt.current),P(Kt,e),ua===null&&(ua=e)}function Qh(e){e.tag===22?(P(nt,nt.current),P(Kt,e),ua===null&&(ua=e)):Cr()}function Cr(){P(nt,nt.current),P(Kt,Kt.current)}function Ft(e){D(Kt),ua===e&&(ua=null),D(nt)}var nt=j(0);function ko(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Lu(n)||Bu(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ja=0,be=null,$e=null,ot=null,So=!1,Kn=!1,un=!1,jo=0,Qs=0,Fn=null,ex=0;function tt(){throw Error(i(321))}function zc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Vt(e[n],t[n]))return!1;return!0}function Oc(e,t,n,o,d,f){return Ja=f,be=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,H.H=e===null||e.memoizedState===null?Lf:Kc,un=!1,f=n(o,d),un=!1,Kn&&(f=tf(t,n,o,d)),ef(e),f}function ef(e){H.H=ai;var t=$e!==null&&$e.next!==null;if(Ja=0,ot=$e=be=null,So=!1,Qs=0,Fn=null,t)throw Error(i(300));e===null||lt||(e=e.dependencies,e!==null&&po(e)&&(lt=!0))}function tf(e,t,n,o){be=e;var d=0;do{if(Kn&&(Fn=null),Qs=0,Kn=!1,25<=d)throw Error(i(301));if(d+=1,ot=$e=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}H.H=Bf,f=t(n,o)}while(Kn);return f}function tx(){var e=H.H,t=e.useState()[0];return t=typeof t.then=="function"?ei(t):t,e=e.useState()[0],($e!==null?$e.memoizedState:null)!==e&&(be.flags|=1024),t}function Dc(){var e=jo!==0;return jo=0,e}function Mc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Uc(e){if(So){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}So=!1}Ja=0,ot=$e=be=null,Kn=!1,Qs=jo=0,Fn=null}function Dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ot===null?be.memoizedState=ot=e:ot=ot.next=e,ot}function st(){if($e===null){var e=be.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var t=ot===null?be.memoizedState:ot.next;if(t!==null)ot=t,$e=e;else{if(e===null)throw be.alternate===null?Error(i(467)):Error(i(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},ot===null?be.memoizedState=ot=e:ot=ot.next=e}return ot}function _o(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ei(e){var t=Qs;return Qs+=1,Fn===null&&(Fn=[]),e=Gh(Fn,e,t),t=be,(ot===null?t.memoizedState:ot.next)===null&&(t=t.alternate,H.H=t===null||t.memoizedState===null?Lf:Kc),e}function Eo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ei(e);if(e.$$typeof===R)return jt(e)}throw Error(i(438,String(e)))}function Lc(e){var t=null,n=be.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var o=be.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(d){return d.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=_o(),be.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),o=0;o<e;o++)n[o]=fe;return t.index++,n}function Wa(e,t){return typeof t=="function"?t(e):t}function No(e){var t=st();return Bc(t,$e,e)}function Bc(e,t,n){var o=e.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=n;var d=e.baseQueue,f=o.pending;if(f!==null){if(d!==null){var b=d.next;d.next=f.next,f.next=b}t.baseQueue=d=f,o.pending=null}if(f=e.baseState,d===null)e.memoizedState=f;else{t=d.next;var w=b=null,E=null,L=t,q=!1;do{var Y=L.lane&-536870913;if(Y!==L.lane?(Ne&Y)===Y:(Ja&Y)===Y){var B=L.revertLane;if(B===0)E!==null&&(E=E.next={lane:0,revertLane:0,gesture:null,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),Y===In&&(q=!0);else if((Ja&B)===B){L=L.next,B===In&&(q=!0);continue}else Y={lane:0,revertLane:L.revertLane,gesture:null,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},E===null?(w=E=Y,b=f):E=E.next=Y,be.lanes|=B,Rr|=B;Y=L.action,un&&n(f,Y),f=L.hasEagerState?L.eagerState:n(f,Y)}else B={lane:Y,revertLane:L.revertLane,gesture:L.gesture,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},E===null?(w=E=B,b=f):E=E.next=B,be.lanes|=Y,Rr|=Y;L=L.next}while(L!==null&&L!==t);if(E===null?b=f:E.next=w,!Vt(f,e.memoizedState)&&(lt=!0,q&&(n=Yn,n!==null)))throw n;e.memoizedState=f,e.baseState=b,e.baseQueue=E,o.lastRenderedState=f}return d===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Hc(e){var t=st(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var o=n.dispatch,d=n.pending,f=t.memoizedState;if(d!==null){n.pending=null;var b=d=d.next;do f=e(f,b.action),b=b.next;while(b!==d);Vt(f,t.memoizedState)||(lt=!0),t.memoizedState=f,t.baseQueue===null&&(t.baseState=f),n.lastRenderedState=f}return[f,o]}function af(e,t,n){var o=be,d=st(),f=Te;if(f){if(n===void 0)throw Error(i(407));n=n()}else n=t();var b=!Vt(($e||d).memoizedState,n);if(b&&(d.memoizedState=n,lt=!0),d=d.queue,Pc(sf.bind(null,o,d,e),[e]),d.getSnapshot!==t||b||ot!==null&&ot.memoizedState.tag&1){if(o.flags|=2048,Jn(9,{destroy:void 0},nf.bind(null,o,d,n,t),null),Ye===null)throw Error(i(349));f||(Ja&127)!==0||rf(o,t,n)}return n}function rf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=be.updateQueue,t===null?(t=_o(),be.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function nf(e,t,n,o){t.value=n,t.getSnapshot=o,of(t)&&lf(e)}function sf(e,t,n){return n(function(){of(t)&&lf(e)})}function of(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Vt(e,n)}catch{return!0}}function lf(e){var t=en(e,2);t!==null&&Pt(t,e,2)}function $c(e){var t=Dt();if(typeof e=="function"){var n=e;if(e=n(),un){Ot(!0);try{n()}finally{Ot(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:e},t}function cf(e,t,n,o){return e.baseState=n,Bc(e,$e,typeof o=="function"?o:Wa)}function ax(e,t,n,o,d){if(Ao(e))throw Error(i(485));if(e=t.action,e!==null){var f={payload:d,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){f.listeners.push(b)}};H.T!==null?n(!0):f.isTransition=!1,o(f),n=t.pending,n===null?(f.next=t.pending=f,uf(t,f)):(f.next=n.next,t.pending=n.next=f)}}function uf(e,t){var n=t.action,o=t.payload,d=e.state;if(t.isTransition){var f=H.T,b={};H.T=b;try{var w=n(d,o),E=H.S;E!==null&&E(b,w),df(e,t,w)}catch(L){qc(e,t,L)}finally{f!==null&&b.types!==null&&(f.types=b.types),H.T=f}}else try{f=n(d,o),df(e,t,f)}catch(L){qc(e,t,L)}}function df(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(o){hf(e,t,o)},function(o){return qc(e,t,o)}):hf(e,t,n)}function hf(e,t,n){t.status="fulfilled",t.value=n,ff(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,uf(e,n)))}function qc(e,t,n){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=n,ff(t),t=t.next;while(t!==o)}e.action=null}function ff(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function pf(e,t){return t}function mf(e,t){if(Te){var n=Ye.formState;if(n!==null){e:{var o=be;if(Te){if(Ke){t:{for(var d=Ke,f=ca;d.nodeType!==8;){if(!f){d=null;break t}if(d=da(d.nextSibling),d===null){d=null;break t}}f=d.data,d=f==="F!"||f==="F"?d:null}if(d){Ke=da(d.nextSibling),o=d.data==="F!";break e}}kr(o)}o=!1}o&&(t=n[0])}}return n=Dt(),n.memoizedState=n.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pf,lastRenderedState:t},n.queue=o,n=Df.bind(null,be,o),o.dispatch=n,o=$c(!1),f=Xc.bind(null,be,!1,o.queue),o=Dt(),d={state:t,dispatch:null,action:e,pending:null},o.queue=d,n=ax.bind(null,be,d,f,n),d.dispatch=n,o.memoizedState=e,[t,n,!1]}function gf(e){var t=st();return bf(t,$e,e)}function bf(e,t,n){if(t=Bc(e,t,pf)[0],e=No(Wa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=ei(t)}catch(b){throw b===Gn?bo:b}else o=t;t=st();var d=t.queue,f=d.dispatch;return n!==t.memoizedState&&(be.flags|=2048,Jn(9,{destroy:void 0},rx.bind(null,d,n),null)),[o,f,e]}function rx(e,t){e.action=t}function xf(e){var t=st(),n=$e;if(n!==null)return bf(t,n,e);st(),t=t.memoizedState,n=st();var o=n.queue.dispatch;return n.memoizedState=e,[t,o,!1]}function Jn(e,t,n,o){return e={tag:e,create:n,deps:o,inst:t,next:null},t=be.updateQueue,t===null&&(t=_o(),be.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e),e}function yf(){return st().memoizedState}function Co(e,t,n,o){var d=Dt();be.flags|=e,d.memoizedState=Jn(1|t,{destroy:void 0},n,o===void 0?null:o)}function To(e,t,n,o){var d=st();o=o===void 0?null:o;var f=d.memoizedState.inst;$e!==null&&o!==null&&zc(o,$e.memoizedState.deps)?d.memoizedState=Jn(t,f,n,o):(be.flags|=e,d.memoizedState=Jn(1|t,f,n,o))}function vf(e,t){Co(8390656,8,e,t)}function Pc(e,t){To(2048,8,e,t)}function nx(e){be.flags|=4;var t=be.updateQueue;if(t===null)t=_o(),be.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function wf(e){var t=st().memoizedState;return nx({ref:t,nextImpl:e}),function(){if((Me&2)!==0)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function kf(e,t){return To(4,2,e,t)}function Sf(e,t){return To(4,4,e,t)}function jf(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _f(e,t,n){n=n!=null?n.concat([e]):null,To(4,4,jf.bind(null,t,e),n)}function Ic(){}function Ef(e,t){var n=st();t=t===void 0?null:t;var o=n.memoizedState;return t!==null&&zc(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function Nf(e,t){var n=st();t=t===void 0?null:t;var o=n.memoizedState;if(t!==null&&zc(t,o[1]))return o[0];if(o=e(),un){Ot(!0);try{e()}finally{Ot(!1)}}return n.memoizedState=[o,t],o}function Yc(e,t,n){return n===void 0||(Ja&1073741824)!==0&&(Ne&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=C0(),be.lanes|=e,Rr|=e,n)}function Cf(e,t,n,o){return Vt(n,t)?n:Xn.current!==null?(e=Yc(e,n,o),Vt(e,t)||(lt=!0),e):(Ja&42)===0||(Ja&1073741824)!==0&&(Ne&261930)===0?(lt=!0,e.memoizedState=n):(e=C0(),be.lanes|=e,Rr|=e,t)}function Tf(e,t,n,o,d){var f=W.p;W.p=f!==0&&8>f?f:8;var b=H.T,w={};H.T=w,Xc(e,!1,t,n);try{var E=d(),L=H.S;if(L!==null&&L(w,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var q=Qb(E,o);ti(e,t,q,Zt(e))}else ti(e,t,o,Zt(e))}catch(Y){ti(e,t,{then:function(){},status:"rejected",reason:Y},Zt())}finally{W.p=f,b!==null&&w.types!==null&&(b.types=w.types),H.T=b}}function sx(){}function Gc(e,t,n,o){if(e.tag!==5)throw Error(i(476));var d=Af(e).queue;Tf(e,d,t,ne,n===null?sx:function(){return Rf(e),n(o)})}function Af(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:ne},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Rf(e){var t=Af(e);t.next===null&&(t=e.alternate.memoizedState),ti(e,t.next.queue,{},Zt())}function Vc(){return jt(xi)}function zf(){return st().memoizedState}function Of(){return st().memoizedState}function ix(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Zt();e=_r(n);var o=Er(t,e,n);o!==null&&(Pt(o,t,n),Js(o,t,n)),t={cache:wc()},e.payload=t;return}t=t.return}}function ox(e,t,n){var o=Zt();n={lane:o,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ao(e)?Mf(t,n):(n=uc(e,t,n,o),n!==null&&(Pt(n,e,o),Uf(n,t,o)))}function Df(e,t,n){var o=Zt();ti(e,t,n,o)}function ti(e,t,n,o){var d={lane:o,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ao(e))Mf(t,d);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=t.lastRenderedReducer,f!==null))try{var b=t.lastRenderedState,w=f(b,n);if(d.hasEagerState=!0,d.eagerState=w,Vt(w,b))return co(e,t,d,0),Ye===null&&lo(),!1}catch{}finally{}if(n=uc(e,t,d,o),n!==null)return Pt(n,e,o),Uf(n,t,o),!0}return!1}function Xc(e,t,n,o){if(o={lane:2,revertLane:_u(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ao(e)){if(t)throw Error(i(479))}else t=uc(e,n,o,2),t!==null&&Pt(t,e,2)}function Ao(e){var t=e.alternate;return e===be||t!==null&&t===be}function Mf(e,t){Kn=So=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Uf(e,t,n){if((n&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Pa(e,n)}}var ai={readContext:jt,use:Eo,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useLayoutEffect:tt,useInsertionEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useSyncExternalStore:tt,useId:tt,useHostTransitionStatus:tt,useFormState:tt,useActionState:tt,useOptimistic:tt,useMemoCache:tt,useCacheRefresh:tt};ai.useEffectEvent=tt;var Lf={readContext:jt,use:Eo,useCallback:function(e,t){return Dt().memoizedState=[e,t===void 0?null:t],e},useContext:jt,useEffect:vf,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Co(4194308,4,jf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Co(4194308,4,e,t)},useInsertionEffect:function(e,t){Co(4,2,e,t)},useMemo:function(e,t){var n=Dt();t=t===void 0?null:t;var o=e();if(un){Ot(!0);try{e()}finally{Ot(!1)}}return n.memoizedState=[o,t],o},useReducer:function(e,t,n){var o=Dt();if(n!==void 0){var d=n(t);if(un){Ot(!0);try{n(t)}finally{Ot(!1)}}}else d=t;return o.memoizedState=o.baseState=d,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:d},o.queue=e,e=e.dispatch=ox.bind(null,be,e),[o.memoizedState,e]},useRef:function(e){var t=Dt();return e={current:e},t.memoizedState=e},useState:function(e){e=$c(e);var t=e.queue,n=Df.bind(null,be,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ic,useDeferredValue:function(e,t){var n=Dt();return Yc(n,e,t)},useTransition:function(){var e=$c(!1);return e=Tf.bind(null,be,e.queue,!0,!1),Dt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var o=be,d=Dt();if(Te){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Ye===null)throw Error(i(349));(Ne&127)!==0||rf(o,t,n)}d.memoizedState=n;var f={value:n,getSnapshot:t};return d.queue=f,vf(sf.bind(null,o,f,e),[e]),o.flags|=2048,Jn(9,{destroy:void 0},nf.bind(null,o,f,n,t),null),n},useId:function(){var e=Dt(),t=Ye.identifierPrefix;if(Te){var n=za,o=Ra;n=(o&~(1<<32-ft(o)-1)).toString(32)+n,t="_"+t+"R_"+n,n=jo++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=ex++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Vc,useFormState:mf,useActionState:mf,useOptimistic:function(e){var t=Dt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Xc.bind(null,be,!0,n),n.dispatch=t,[e,t]},useMemoCache:Lc,useCacheRefresh:function(){return Dt().memoizedState=ix.bind(null,be)},useEffectEvent:function(e){var t=Dt(),n={impl:e};return t.memoizedState=n,function(){if((Me&2)!==0)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Kc={readContext:jt,use:Eo,useCallback:Ef,useContext:jt,useEffect:Pc,useImperativeHandle:_f,useInsertionEffect:kf,useLayoutEffect:Sf,useMemo:Nf,useReducer:No,useRef:yf,useState:function(){return No(Wa)},useDebugValue:Ic,useDeferredValue:function(e,t){var n=st();return Cf(n,$e.memoizedState,e,t)},useTransition:function(){var e=No(Wa)[0],t=st().memoizedState;return[typeof e=="boolean"?e:ei(e),t]},useSyncExternalStore:af,useId:zf,useHostTransitionStatus:Vc,useFormState:gf,useActionState:gf,useOptimistic:function(e,t){var n=st();return cf(n,$e,e,t)},useMemoCache:Lc,useCacheRefresh:Of};Kc.useEffectEvent=wf;var Bf={readContext:jt,use:Eo,useCallback:Ef,useContext:jt,useEffect:Pc,useImperativeHandle:_f,useInsertionEffect:kf,useLayoutEffect:Sf,useMemo:Nf,useReducer:Hc,useRef:yf,useState:function(){return Hc(Wa)},useDebugValue:Ic,useDeferredValue:function(e,t){var n=st();return $e===null?Yc(n,e,t):Cf(n,$e.memoizedState,e,t)},useTransition:function(){var e=Hc(Wa)[0],t=st().memoizedState;return[typeof e=="boolean"?e:ei(e),t]},useSyncExternalStore:af,useId:zf,useHostTransitionStatus:Vc,useFormState:xf,useActionState:xf,useOptimistic:function(e,t){var n=st();return $e!==null?cf(n,$e,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Lc,useCacheRefresh:Of};Bf.useEffectEvent=wf;function Fc(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:x({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Jc={enqueueSetState:function(e,t,n){e=e._reactInternals;var o=Zt(),d=_r(o);d.payload=t,n!=null&&(d.callback=n),t=Er(e,d,o),t!==null&&(Pt(t,e,o),Js(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=Zt(),d=_r(o);d.tag=1,d.payload=t,n!=null&&(d.callback=n),t=Er(e,d,o),t!==null&&(Pt(t,e,o),Js(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Zt(),o=_r(n);o.tag=2,t!=null&&(o.callback=t),t=Er(e,o,n),t!==null&&(Pt(t,e,n),Js(t,e,n))}};function Hf(e,t,n,o,d,f,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,b):t.prototype&&t.prototype.isPureReactComponent?!Ps(n,o)||!Ps(d,f):!0}function $f(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&Jc.enqueueReplaceState(t,t.state,null)}function dn(e,t){var n=t;if("ref"in t){n={};for(var o in t)o!=="ref"&&(n[o]=t[o])}if(e=e.defaultProps){n===t&&(n=x({},n));for(var d in e)n[d]===void 0&&(n[d]=e[d])}return n}function qf(e){oo(e)}function Pf(e){console.error(e)}function If(e){oo(e)}function Ro(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function Yf(e,t,n){try{var o=e.onCaughtError;o(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Wc(e,t,n){return n=_r(n),n.tag=3,n.payload={element:null},n.callback=function(){Ro(e,t)},n}function Gf(e){return e=_r(e),e.tag=3,e}function Vf(e,t,n,o){var d=n.type.getDerivedStateFromError;if(typeof d=="function"){var f=o.value;e.payload=function(){return d(f)},e.callback=function(){Yf(t,n,o)}}var b=n.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(e.callback=function(){Yf(t,n,o),typeof d!="function"&&(zr===null?zr=new Set([this]):zr.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function lx(e,t,n,o,d){if(n.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=n.alternate,t!==null&&Pn(t,n,d,!0),n=Kt.current,n!==null){switch(n.tag){case 31:case 13:return ua===null?Io():n.alternate===null&&at===0&&(at=3),n.flags&=-257,n.flags|=65536,n.lanes=d,o===xo?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([o]):t.add(o),ku(e,o,d)),!1;case 22:return n.flags|=65536,o===xo?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([o]):n.add(o)),ku(e,o,d)),!1}throw Error(i(435,n.tag))}return ku(e,o,d),Io(),!1}if(Te)return t=Kt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=d,o!==gc&&(e=Error(i(422),{cause:o}),Gs(ia(e,n)))):(o!==gc&&(t=Error(i(423),{cause:o}),Gs(ia(t,n))),e=e.current.alternate,e.flags|=65536,d&=-d,e.lanes|=d,o=ia(o,n),d=Wc(e.stateNode,o,d),Nc(e,d),at!==4&&(at=2)),!1;var f=Error(i(520),{cause:o});if(f=ia(f,n),ui===null?ui=[f]:ui.push(f),at!==4&&(at=2),t===null)return!0;o=ia(o,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=d&-d,n.lanes|=e,e=Wc(n.stateNode,o,e),Nc(n,e),!1;case 1:if(t=n.type,f=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(zr===null||!zr.has(f))))return n.flags|=65536,d&=-d,n.lanes|=d,d=Gf(d),Vf(d,e,n,o),Nc(n,d),!1}n=n.return}while(n!==null);return!1}var Zc=Error(i(461)),lt=!1;function _t(e,t,n,o){t.child=e===null?Fh(t,null,n,o):cn(t,e.child,n,o)}function Xf(e,t,n,o,d){n=n.render;var f=t.ref;if("ref"in o){var b={};for(var w in o)w!=="ref"&&(b[w]=o[w])}else b=o;return nn(t),o=Oc(e,t,n,b,f,d),w=Dc(),e!==null&&!lt?(Mc(e,t,d),Za(e,t,d)):(Te&&w&&pc(t),t.flags|=1,_t(e,t,o,d),t.child)}function Kf(e,t,n,o,d){if(e===null){var f=n.type;return typeof f=="function"&&!dc(f)&&f.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=f,Ff(e,t,f,o,d)):(e=ho(n.type,null,o,t,t.mode,d),e.ref=t.ref,e.return=t,t.child=e)}if(f=e.child,!iu(e,d)){var b=f.memoizedProps;if(n=n.compare,n=n!==null?n:Ps,n(b,o)&&e.ref===t.ref)return Za(e,t,d)}return t.flags|=1,e=Va(f,o),e.ref=t.ref,e.return=t,t.child=e}function Ff(e,t,n,o,d){if(e!==null){var f=e.memoizedProps;if(Ps(f,o)&&e.ref===t.ref)if(lt=!1,t.pendingProps=o=f,iu(e,d))(e.flags&131072)!==0&&(lt=!0);else return t.lanes=e.lanes,Za(e,t,d)}return Qc(e,t,n,o,d)}function Jf(e,t,n,o){var d=o.children,f=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(f=f!==null?f.baseLanes|n:n,e!==null){for(o=t.child=e.child,d=0;o!==null;)d=d|o.lanes|o.childLanes,o=o.sibling;o=d&~f}else o=0,t.child=null;return Wf(e,t,f,n,o)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&go(t,f!==null?f.cachePool:null),f!==null?Zh(t,f):Tc(),Qh(t);else return o=t.lanes=536870912,Wf(e,t,f!==null?f.baseLanes|n:n,n,o)}else f!==null?(go(t,f.cachePool),Zh(t,f),Cr(),t.memoizedState=null):(e!==null&&go(t,null),Tc(),Cr());return _t(e,t,d,n),t.child}function ri(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Wf(e,t,n,o,d){var f=Sc();return f=f===null?null:{parent:it._currentValue,pool:f},t.memoizedState={baseLanes:n,cachePool:f},e!==null&&go(t,null),Tc(),Qh(t),e!==null&&Pn(e,t,o,!0),t.childLanes=d,null}function zo(e,t){return t=Do({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Zf(e,t,n){return cn(t,e.child,null,n),e=zo(t,t.pendingProps),e.flags|=2,Ft(t),t.memoizedState=null,e}function cx(e,t,n){var o=t.pendingProps,d=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Te){if(o.mode==="hidden")return e=zo(t,o),t.lanes=536870912,ri(null,e);if(Rc(t),(e=Ke)?(e=up(e,ca),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:vr!==null?{id:Ra,overflow:za}:null,retryLane:536870912,hydrationErrors:null},n=Dh(e),n.return=t,t.child=n,St=t,Ke=null)):e=null,e===null)throw kr(t);return t.lanes=536870912,null}return zo(t,o)}var f=e.memoizedState;if(f!==null){var b=f.dehydrated;if(Rc(t),d)if(t.flags&256)t.flags&=-257,t=Zf(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(lt||Pn(e,t,n,!1),d=(n&e.childLanes)!==0,lt||d){if(o=Ye,o!==null&&(b=At(o,n),b!==0&&b!==f.retryLane))throw f.retryLane=b,en(e,b),Pt(o,e,b),Zc;Io(),t=Zf(e,t,n)}else e=f.treeContext,Ke=da(b.nextSibling),St=t,Te=!0,wr=null,ca=!1,e!==null&&Lh(t,e),t=zo(t,o),t.flags|=4096;return t}return e=Va(e.child,{mode:o.mode,children:o.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Oo(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Qc(e,t,n,o,d){return nn(t),n=Oc(e,t,n,o,void 0,d),o=Dc(),e!==null&&!lt?(Mc(e,t,d),Za(e,t,d)):(Te&&o&&pc(t),t.flags|=1,_t(e,t,n,d),t.child)}function Qf(e,t,n,o,d,f){return nn(t),t.updateQueue=null,n=tf(t,o,n,d),ef(e),o=Dc(),e!==null&&!lt?(Mc(e,t,f),Za(e,t,f)):(Te&&o&&pc(t),t.flags|=1,_t(e,t,n,f),t.child)}function e0(e,t,n,o,d){if(nn(t),t.stateNode===null){var f=Bn,b=n.contextType;typeof b=="object"&&b!==null&&(f=jt(b)),f=new n(o,f),t.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Jc,t.stateNode=f,f._reactInternals=t,f=t.stateNode,f.props=o,f.state=t.memoizedState,f.refs={},_c(t),b=n.contextType,f.context=typeof b=="object"&&b!==null?jt(b):Bn,f.state=t.memoizedState,b=n.getDerivedStateFromProps,typeof b=="function"&&(Fc(t,n,b,o),f.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(b=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),b!==f.state&&Jc.enqueueReplaceState(f,f.state,null),Zs(t,o,f,d),Ws(),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){f=t.stateNode;var w=t.memoizedProps,E=dn(n,w);f.props=E;var L=f.context,q=n.contextType;b=Bn,typeof q=="object"&&q!==null&&(b=jt(q));var Y=n.getDerivedStateFromProps;q=typeof Y=="function"||typeof f.getSnapshotBeforeUpdate=="function",w=t.pendingProps!==w,q||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(w||L!==b)&&$f(t,f,o,b),jr=!1;var B=t.memoizedState;f.state=B,Zs(t,o,f,d),Ws(),L=t.memoizedState,w||B!==L||jr?(typeof Y=="function"&&(Fc(t,n,Y,o),L=t.memoizedState),(E=jr||Hf(t,n,E,o,B,L,b))?(q||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(t.flags|=4194308)):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=L),f.props=o,f.state=L,f.context=b,o=E):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{f=t.stateNode,Ec(e,t),b=t.memoizedProps,q=dn(n,b),f.props=q,Y=t.pendingProps,B=f.context,L=n.contextType,E=Bn,typeof L=="object"&&L!==null&&(E=jt(L)),w=n.getDerivedStateFromProps,(L=typeof w=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b!==Y||B!==E)&&$f(t,f,o,E),jr=!1,B=t.memoizedState,f.state=B,Zs(t,o,f,d),Ws();var $=t.memoizedState;b!==Y||B!==$||jr||e!==null&&e.dependencies!==null&&po(e.dependencies)?(typeof w=="function"&&(Fc(t,n,w,o),$=t.memoizedState),(q=jr||Hf(t,n,q,o,B,$,E)||e!==null&&e.dependencies!==null&&po(e.dependencies))?(L||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,$,E),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,$,E)),typeof f.componentDidUpdate=="function"&&(t.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof f.componentDidUpdate!="function"||b===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=$),f.props=o,f.state=$,f.context=E,o=q):(typeof f.componentDidUpdate!="function"||b===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),o=!1)}return f=o,Oo(e,t),o=(t.flags&128)!==0,f||o?(f=t.stateNode,n=o&&typeof n.getDerivedStateFromError!="function"?null:f.render(),t.flags|=1,e!==null&&o?(t.child=cn(t,e.child,null,d),t.child=cn(t,null,n,d)):_t(e,t,n,d),t.memoizedState=f.state,e=t.child):e=Za(e,t,d),e}function t0(e,t,n,o){return an(),t.flags|=256,_t(e,t,n,o),t.child}var eu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function tu(e){return{baseLanes:e,cachePool:Ih()}}function au(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Wt),e}function a0(e,t,n){var o=t.pendingProps,d=!1,f=(t.flags&128)!==0,b;if((b=f)||(b=e!==null&&e.memoizedState===null?!1:(nt.current&2)!==0),b&&(d=!0,t.flags&=-129),b=(t.flags&32)!==0,t.flags&=-33,e===null){if(Te){if(d?Nr(t):Cr(),(e=Ke)?(e=up(e,ca),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:vr!==null?{id:Ra,overflow:za}:null,retryLane:536870912,hydrationErrors:null},n=Dh(e),n.return=t,t.child=n,St=t,Ke=null)):e=null,e===null)throw kr(t);return Bu(e)?t.lanes=32:t.lanes=536870912,null}var w=o.children;return o=o.fallback,d?(Cr(),d=t.mode,w=Do({mode:"hidden",children:w},d),o=tn(o,d,n,null),w.return=t,o.return=t,w.sibling=o,t.child=w,o=t.child,o.memoizedState=tu(n),o.childLanes=au(e,b,n),t.memoizedState=eu,ri(null,o)):(Nr(t),ru(t,w))}var E=e.memoizedState;if(E!==null&&(w=E.dehydrated,w!==null)){if(f)t.flags&256?(Nr(t),t.flags&=-257,t=nu(e,t,n)):t.memoizedState!==null?(Cr(),t.child=e.child,t.flags|=128,t=null):(Cr(),w=o.fallback,d=t.mode,o=Do({mode:"visible",children:o.children},d),w=tn(w,d,n,null),w.flags|=2,o.return=t,w.return=t,o.sibling=w,t.child=o,cn(t,e.child,null,n),o=t.child,o.memoizedState=tu(n),o.childLanes=au(e,b,n),t.memoizedState=eu,t=ri(null,o));else if(Nr(t),Bu(w)){if(b=w.nextSibling&&w.nextSibling.dataset,b)var L=b.dgst;b=L,o=Error(i(419)),o.stack="",o.digest=b,Gs({value:o,source:null,stack:null}),t=nu(e,t,n)}else if(lt||Pn(e,t,n,!1),b=(n&e.childLanes)!==0,lt||b){if(b=Ye,b!==null&&(o=At(b,n),o!==0&&o!==E.retryLane))throw E.retryLane=o,en(e,o),Pt(b,e,o),Zc;Lu(w)||Io(),t=nu(e,t,n)}else Lu(w)?(t.flags|=192,t.child=e.child,t=null):(e=E.treeContext,Ke=da(w.nextSibling),St=t,Te=!0,wr=null,ca=!1,e!==null&&Lh(t,e),t=ru(t,o.children),t.flags|=4096);return t}return d?(Cr(),w=o.fallback,d=t.mode,E=e.child,L=E.sibling,o=Va(E,{mode:"hidden",children:o.children}),o.subtreeFlags=E.subtreeFlags&65011712,L!==null?w=Va(L,w):(w=tn(w,d,n,null),w.flags|=2),w.return=t,o.return=t,o.sibling=w,t.child=o,ri(null,o),o=t.child,w=e.child.memoizedState,w===null?w=tu(n):(d=w.cachePool,d!==null?(E=it._currentValue,d=d.parent!==E?{parent:E,pool:E}:d):d=Ih(),w={baseLanes:w.baseLanes|n,cachePool:d}),o.memoizedState=w,o.childLanes=au(e,b,n),t.memoizedState=eu,ri(e.child,o)):(Nr(t),n=e.child,e=n.sibling,n=Va(n,{mode:"visible",children:o.children}),n.return=t,n.sibling=null,e!==null&&(b=t.deletions,b===null?(t.deletions=[e],t.flags|=16):b.push(e)),t.child=n,t.memoizedState=null,n)}function ru(e,t){return t=Do({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Do(e,t){return e=Xt(22,e,null,t),e.lanes=0,e}function nu(e,t,n){return cn(t,e.child,null,n),e=ru(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function r0(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),yc(e.return,t,n)}function su(e,t,n,o,d,f){var b=e.memoizedState;b===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:d,treeForkCount:f}:(b.isBackwards=t,b.rendering=null,b.renderingStartTime=0,b.last=o,b.tail=n,b.tailMode=d,b.treeForkCount=f)}function n0(e,t,n){var o=t.pendingProps,d=o.revealOrder,f=o.tail;o=o.children;var b=nt.current,w=(b&2)!==0;if(w?(b=b&1|2,t.flags|=128):b&=1,P(nt,b),_t(e,t,o,n),o=Te?Ys:0,!w&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&r0(e,n,t);else if(e.tag===19)r0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(d){case"forwards":for(n=t.child,d=null;n!==null;)e=n.alternate,e!==null&&ko(e)===null&&(d=n),n=n.sibling;n=d,n===null?(d=t.child,t.child=null):(d=n.sibling,n.sibling=null),su(t,!1,d,n,f,o);break;case"backwards":case"unstable_legacy-backwards":for(n=null,d=t.child,t.child=null;d!==null;){if(e=d.alternate,e!==null&&ko(e)===null){t.child=d;break}e=d.sibling,d.sibling=n,n=d,d=e}su(t,!0,n,null,f,o);break;case"together":su(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function Za(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rr|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Pn(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Va(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Va(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function iu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&po(e)))}function ux(e,t,n){switch(t.tag){case 3:Ie(t,t.stateNode.containerInfo),Sr(t,it,e.memoizedState.cache),an();break;case 27:case 5:fa(t);break;case 4:Ie(t,t.stateNode.containerInfo);break;case 10:Sr(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Rc(t),null;break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(Nr(t),t.flags|=128,null):(n&t.child.childLanes)!==0?a0(e,t,n):(Nr(t),e=Za(e,t,n),e!==null?e.sibling:null);Nr(t);break;case 19:var d=(e.flags&128)!==0;if(o=(n&t.childLanes)!==0,o||(Pn(e,t,n,!1),o=(n&t.childLanes)!==0),d){if(o)return n0(e,t,n);t.flags|=128}if(d=t.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),P(nt,nt.current),o)break;return null;case 22:return t.lanes=0,Jf(e,t,n,t.pendingProps);case 24:Sr(t,it,e.memoizedState.cache)}return Za(e,t,n)}function s0(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)lt=!0;else{if(!iu(e,n)&&(t.flags&128)===0)return lt=!1,ux(e,t,n);lt=(e.flags&131072)!==0}else lt=!1,Te&&(t.flags&1048576)!==0&&Uh(t,Ys,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=on(t.elementType),t.type=e,typeof e=="function")dc(e)?(o=dn(e,o),t.tag=1,t=e0(null,t,e,o,n)):(t.tag=0,t=Qc(null,t,e,o,n));else{if(e!=null){var d=e.$$typeof;if(d===V){t.tag=11,t=Xf(null,t,e,o,n);break e}else if(d===X){t.tag=14,t=Kf(null,t,e,o,n);break e}}throw t=Re(e)||e,Error(i(306,t,""))}}return t;case 0:return Qc(e,t,t.type,t.pendingProps,n);case 1:return o=t.type,d=dn(o,t.pendingProps),e0(e,t,o,d,n);case 3:e:{if(Ie(t,t.stateNode.containerInfo),e===null)throw Error(i(387));o=t.pendingProps;var f=t.memoizedState;d=f.element,Ec(e,t),Zs(t,o,null,n);var b=t.memoizedState;if(o=b.cache,Sr(t,it,o),o!==f.cache&&vc(t,[it],n,!0),Ws(),o=b.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:b.cache},t.updateQueue.baseState=f,t.memoizedState=f,t.flags&256){t=t0(e,t,o,n);break e}else if(o!==d){d=ia(Error(i(424)),t),Gs(d),t=t0(e,t,o,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ke=da(e.firstChild),St=t,Te=!0,wr=null,ca=!0,n=Fh(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(an(),o===d){t=Za(e,t,n);break e}_t(e,t,o,n)}t=t.child}return t;case 26:return Oo(e,t),e===null?(n=gp(t.type,null,t.pendingProps,null))?t.memoizedState=n:Te||(n=t.type,e=t.pendingProps,o=Jo(me.current).createElement(n),o[pt]=t,o[kt]=e,Et(o,n,e),xt(o),t.stateNode=o):t.memoizedState=gp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return fa(t),e===null&&Te&&(o=t.stateNode=fp(t.type,t.pendingProps,me.current),St=t,ca=!0,d=Ke,Ur(t.type)?(Hu=d,Ke=da(o.firstChild)):Ke=d),_t(e,t,t.pendingProps.children,n),Oo(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Te&&((d=o=Ke)&&(o=$x(o,t.type,t.pendingProps,ca),o!==null?(t.stateNode=o,St=t,Ke=da(o.firstChild),ca=!1,d=!0):d=!1),d||kr(t)),fa(t),d=t.type,f=t.pendingProps,b=e!==null?e.memoizedProps:null,o=f.children,Du(d,f)?o=null:b!==null&&Du(d,b)&&(t.flags|=32),t.memoizedState!==null&&(d=Oc(e,t,tx,null,null,n),xi._currentValue=d),Oo(e,t),_t(e,t,o,n),t.child;case 6:return e===null&&Te&&((e=n=Ke)&&(n=qx(n,t.pendingProps,ca),n!==null?(t.stateNode=n,St=t,Ke=null,e=!0):e=!1),e||kr(t)),null;case 13:return a0(e,t,n);case 4:return Ie(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=cn(t,null,o,n):_t(e,t,o,n),t.child;case 11:return Xf(e,t,t.type,t.pendingProps,n);case 7:return _t(e,t,t.pendingProps,n),t.child;case 8:return _t(e,t,t.pendingProps.children,n),t.child;case 12:return _t(e,t,t.pendingProps.children,n),t.child;case 10:return o=t.pendingProps,Sr(t,t.type,o.value),_t(e,t,o.children,n),t.child;case 9:return d=t.type._context,o=t.pendingProps.children,nn(t),d=jt(d),o=o(d),t.flags|=1,_t(e,t,o,n),t.child;case 14:return Kf(e,t,t.type,t.pendingProps,n);case 15:return Ff(e,t,t.type,t.pendingProps,n);case 19:return n0(e,t,n);case 31:return cx(e,t,n);case 22:return Jf(e,t,n,t.pendingProps);case 24:return nn(t),o=jt(it),e===null?(d=Sc(),d===null&&(d=Ye,f=wc(),d.pooledCache=f,f.refCount++,f!==null&&(d.pooledCacheLanes|=n),d=f),t.memoizedState={parent:o,cache:d},_c(t),Sr(t,it,d)):((e.lanes&n)!==0&&(Ec(e,t),Zs(t,null,null,n),Ws()),d=e.memoizedState,f=t.memoizedState,d.parent!==o?(d={parent:o,cache:o},t.memoizedState=d,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=d),Sr(t,it,o)):(o=f.cache,Sr(t,it,o),o!==d.cache&&vc(t,[it],n,!0))),_t(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Qa(e){e.flags|=4}function ou(e,t,n,o,d){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(d&335544128)===d)if(e.stateNode.complete)e.flags|=8192;else if(z0())e.flags|=8192;else throw ln=xo,jc}else e.flags&=-16777217}function i0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!wp(t))if(z0())e.flags|=8192;else throw ln=xo,jc}function Mo(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Be():536870912,e.lanes|=t,es|=t)}function ni(e,t){if(!Te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var d=e.child;d!==null;)n|=d.lanes|d.childLanes,o|=d.subtreeFlags&65011712,o|=d.flags&65011712,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)n|=d.lanes|d.childLanes,o|=d.subtreeFlags,o|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function dx(e,t,n){var o=t.pendingProps;switch(mc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(t),null;case 1:return Fe(t),null;case 3:return n=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),Fa(it),Ae(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(qn(t)?Qa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,bc())),Fe(t),null;case 26:var d=t.type,f=t.memoizedState;return e===null?(Qa(t),f!==null?(Fe(t),i0(t,f)):(Fe(t),ou(t,d,null,o,n))):f?f!==e.memoizedState?(Qa(t),Fe(t),i0(t,f)):(Fe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&Qa(t),Fe(t),ou(t,d,e,o,n)),null;case 27:if(Na(t),n=me.current,d=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&Qa(t);else{if(!o){if(t.stateNode===null)throw Error(i(166));return Fe(t),null}e=ee.current,qn(t)?Bh(t):(e=fp(d,o,n),t.stateNode=e,Qa(t))}return Fe(t),null;case 5:if(Na(t),d=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&Qa(t);else{if(!o){if(t.stateNode===null)throw Error(i(166));return Fe(t),null}if(f=ee.current,qn(t))Bh(t);else{var b=Jo(me.current);switch(f){case 1:f=b.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:f=b.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":f=b.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":f=b.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":f=b.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?b.createElement("select",{is:o.is}):b.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?b.createElement(d,{is:o.is}):b.createElement(d)}}f[pt]=t,f[kt]=o;e:for(b=t.child;b!==null;){if(b.tag===5||b.tag===6)f.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===t)break e;for(;b.sibling===null;){if(b.return===null||b.return===t)break e;b=b.return}b.sibling.return=b.return,b=b.sibling}t.stateNode=f;e:switch(Et(f,d,o),d){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Qa(t)}}return Fe(t),ou(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&Qa(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(i(166));if(e=me.current,qn(t)){if(e=t.stateNode,n=t.memoizedProps,o=null,d=St,d!==null)switch(d.tag){case 27:case 5:o=d.memoizedProps}e[pt]=t,e=!!(e.nodeValue===n||o!==null&&o.suppressHydrationWarning===!0||ap(e.nodeValue,n)),e||kr(t,!0)}else e=Jo(e).createTextNode(o),e[pt]=t,t.stateNode=e}return Fe(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(o=qn(t),n!==null){if(e===null){if(!o)throw Error(i(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(557));e[pt]=t}else an(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Fe(t),e=!1}else n=bc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ft(t),t):(Ft(t),null);if((t.flags&128)!==0)throw Error(i(558))}return Fe(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(d=qn(t),o!==null&&o.dehydrated!==null){if(e===null){if(!d)throw Error(i(318));if(d=t.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[pt]=t}else an(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Fe(t),d=!1}else d=bc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=d),d=!0;if(!d)return t.flags&256?(Ft(t),t):(Ft(t),null)}return Ft(t),(t.flags&128)!==0?(t.lanes=n,t):(n=o!==null,e=e!==null&&e.memoizedState!==null,n&&(o=t.child,d=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(d=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==d&&(o.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Mo(t,t.updateQueue),Fe(t),null);case 4:return Ae(),e===null&&Tu(t.stateNode.containerInfo),Fe(t),null;case 10:return Fa(t.type),Fe(t),null;case 19:if(D(nt),o=t.memoizedState,o===null)return Fe(t),null;if(d=(t.flags&128)!==0,f=o.rendering,f===null)if(d)ni(o,!1);else{if(at!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(f=ko(e),f!==null){for(t.flags|=128,ni(o,!1),e=f.updateQueue,t.updateQueue=e,Mo(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Oh(n,e),n=n.sibling;return P(nt,nt.current&1|2),Te&&Xa(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&wt()>$o&&(t.flags|=128,d=!0,ni(o,!1),t.lanes=4194304)}else{if(!d)if(e=ko(f),e!==null){if(t.flags|=128,d=!0,e=e.updateQueue,t.updateQueue=e,Mo(t,e),ni(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Te)return Fe(t),null}else 2*wt()-o.renderingStartTime>$o&&n!==536870912&&(t.flags|=128,d=!0,ni(o,!1),t.lanes=4194304);o.isBackwards?(f.sibling=t.child,t.child=f):(e=o.last,e!==null?e.sibling=f:t.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=wt(),e.sibling=null,n=nt.current,P(nt,d?n&1|2:n&1),Te&&Xa(t,o.treeForkCount),e):(Fe(t),null);case 22:case 23:return Ft(t),Ac(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(n&536870912)!==0&&(t.flags&128)===0&&(Fe(t),t.subtreeFlags&6&&(t.flags|=8192)):Fe(t),n=t.updateQueue,n!==null&&Mo(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==n&&(t.flags|=2048),e!==null&&D(sn),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Fa(it),Fe(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function hx(e,t){switch(mc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fa(it),Ae(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Na(t),null;case 31:if(t.memoizedState!==null){if(Ft(t),t.alternate===null)throw Error(i(340));an()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ft(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));an()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(nt),null;case 4:return Ae(),null;case 10:return Fa(t.type),null;case 22:case 23:return Ft(t),Ac(),e!==null&&D(sn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Fa(it),null;case 25:return null;default:return null}}function o0(e,t){switch(mc(t),t.tag){case 3:Fa(it),Ae();break;case 26:case 27:case 5:Na(t);break;case 4:Ae();break;case 31:t.memoizedState!==null&&Ft(t);break;case 13:Ft(t);break;case 19:D(nt);break;case 10:Fa(t.type);break;case 22:case 23:Ft(t),Ac(),e!==null&&D(sn);break;case 24:Fa(it)}}function si(e,t){try{var n=t.updateQueue,o=n!==null?n.lastEffect:null;if(o!==null){var d=o.next;n=d;do{if((n.tag&e)===e){o=void 0;var f=n.create,b=n.inst;o=f(),b.destroy=o}n=n.next}while(n!==d)}}catch(w){Le(t,t.return,w)}}function Tr(e,t,n){try{var o=t.updateQueue,d=o!==null?o.lastEffect:null;if(d!==null){var f=d.next;o=f;do{if((o.tag&e)===e){var b=o.inst,w=b.destroy;if(w!==void 0){b.destroy=void 0,d=t;var E=n,L=w;try{L()}catch(q){Le(d,E,q)}}}o=o.next}while(o!==f)}}catch(q){Le(t,t.return,q)}}function l0(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Wh(t,n)}catch(o){Le(e,e.return,o)}}}function c0(e,t,n){n.props=dn(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(o){Le(e,t,o)}}function ii(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof n=="function"?e.refCleanup=n(o):n.current=o}}catch(d){Le(e,t,d)}}function Oa(e,t){var n=e.ref,o=e.refCleanup;if(n!==null)if(typeof o=="function")try{o()}catch(d){Le(e,t,d)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(d){Le(e,t,d)}else n.current=null}function u0(e){var t=e.type,n=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&o.focus();break e;case"img":n.src?o.src=n.src:n.srcSet&&(o.srcset=n.srcSet)}}catch(d){Le(e,e.return,d)}}function lu(e,t,n){try{var o=e.stateNode;Dx(o,e.type,n,t),o[kt]=t}catch(d){Le(e,e.return,d)}}function d0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ur(e.type)||e.tag===4}function cu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||d0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ur(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function uu(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ya));else if(o!==4&&(o===27&&Ur(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(uu(e,t,n),e=e.sibling;e!==null;)uu(e,t,n),e=e.sibling}function Uo(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(o===27&&Ur(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Uo(e,t,n),e=e.sibling;e!==null;)Uo(e,t,n),e=e.sibling}function h0(e){var t=e.stateNode,n=e.memoizedProps;try{for(var o=e.type,d=t.attributes;d.length;)t.removeAttributeNode(d[0]);Et(t,o,n),t[pt]=e,t[kt]=n}catch(f){Le(e,e.return,f)}}var er=!1,ct=!1,du=!1,f0=typeof WeakSet=="function"?WeakSet:Set,yt=null;function fx(e,t){if(e=e.containerInfo,zu=rl,e=jh(e),nc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var d=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{n.nodeType,f.nodeType}catch{n=null;break e}var b=0,w=-1,E=-1,L=0,q=0,Y=e,B=null;t:for(;;){for(var $;Y!==n||d!==0&&Y.nodeType!==3||(w=b+d),Y!==f||o!==0&&Y.nodeType!==3||(E=b+o),Y.nodeType===3&&(b+=Y.nodeValue.length),($=Y.firstChild)!==null;)B=Y,Y=$;for(;;){if(Y===e)break t;if(B===n&&++L===d&&(w=b),B===f&&++q===o&&(E=b),($=Y.nextSibling)!==null)break;Y=B,B=Y.parentNode}Y=$}n=w===-1||E===-1?null:{start:w,end:E}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ou={focusedElem:e,selectionRange:n},rl=!1,yt=t;yt!==null;)if(t=yt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,yt=e;else for(;yt!==null;){switch(t=yt,f=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)d=e[n],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,n=t,d=f.memoizedProps,f=f.memoizedState,o=n.stateNode;try{var se=dn(n.type,d);e=o.getSnapshotBeforeUpdate(se,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(de){Le(n,n.return,de)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Uu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Uu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,yt=e;break}yt=t.return}}function p0(e,t,n){var o=n.flags;switch(n.tag){case 0:case 11:case 15:ar(e,n),o&4&&si(5,n);break;case 1:if(ar(e,n),o&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(b){Le(n,n.return,b)}else{var d=dn(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(d,t,e.__reactInternalSnapshotBeforeUpdate)}catch(b){Le(n,n.return,b)}}o&64&&l0(n),o&512&&ii(n,n.return);break;case 3:if(ar(e,n),o&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Wh(e,t)}catch(b){Le(n,n.return,b)}}break;case 27:t===null&&o&4&&h0(n);case 26:case 5:ar(e,n),t===null&&o&4&&u0(n),o&512&&ii(n,n.return);break;case 12:ar(e,n);break;case 31:ar(e,n),o&4&&b0(e,n);break;case 13:ar(e,n),o&4&&x0(e,n),o&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=kx.bind(null,n),Px(e,n))));break;case 22:if(o=n.memoizedState!==null||er,!o){t=t!==null&&t.memoizedState!==null||ct,d=er;var f=ct;er=o,(ct=t)&&!f?rr(e,n,(n.subtreeFlags&8772)!==0):ar(e,n),er=d,ct=f}break;case 30:break;default:ar(e,n)}}function m0(e){var t=e.alternate;t!==null&&(e.alternate=null,m0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ql(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var We=null,Bt=!1;function tr(e,t,n){for(n=n.child;n!==null;)g0(e,t,n),n=n.sibling}function g0(e,t,n){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(Ca,n)}catch{}switch(n.tag){case 26:ct||Oa(n,t),tr(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ct||Oa(n,t);var o=We,d=Bt;Ur(n.type)&&(We=n.stateNode,Bt=!1),tr(e,t,n),mi(n.stateNode),We=o,Bt=d;break;case 5:ct||Oa(n,t);case 6:if(o=We,d=Bt,We=null,tr(e,t,n),We=o,Bt=d,We!==null)if(Bt)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(n.stateNode)}catch(f){Le(n,t,f)}else try{We.removeChild(n.stateNode)}catch(f){Le(n,t,f)}break;case 18:We!==null&&(Bt?(e=We,lp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ls(e)):lp(We,n.stateNode));break;case 4:o=We,d=Bt,We=n.stateNode.containerInfo,Bt=!0,tr(e,t,n),We=o,Bt=d;break;case 0:case 11:case 14:case 15:Tr(2,n,t),ct||Tr(4,n,t),tr(e,t,n);break;case 1:ct||(Oa(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"&&c0(n,t,o)),tr(e,t,n);break;case 21:tr(e,t,n);break;case 22:ct=(o=ct)||n.memoizedState!==null,tr(e,t,n),ct=o;break;default:tr(e,t,n)}}function b0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ls(e)}catch(n){Le(t,t.return,n)}}}function x0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ls(e)}catch(n){Le(t,t.return,n)}}function px(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new f0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new f0),t;default:throw Error(i(435,e.tag))}}function Lo(e,t){var n=px(e);t.forEach(function(o){if(!n.has(o)){n.add(o);var d=Sx.bind(null,e,o);o.then(d,d)}})}function Ht(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var d=n[o],f=e,b=t,w=b;e:for(;w!==null;){switch(w.tag){case 27:if(Ur(w.type)){We=w.stateNode,Bt=!1;break e}break;case 5:We=w.stateNode,Bt=!1;break e;case 3:case 4:We=w.stateNode.containerInfo,Bt=!0;break e}w=w.return}if(We===null)throw Error(i(160));g0(f,b,d),We=null,Bt=!1,f=d.alternate,f!==null&&(f.return=null),d.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)y0(t,e),t=t.sibling}var ya=null;function y0(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ht(t,e),$t(e),o&4&&(Tr(3,e,e.return),si(3,e),Tr(5,e,e.return));break;case 1:Ht(t,e),$t(e),o&512&&(ct||n===null||Oa(n,n.return)),o&64&&er&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?o:n.concat(o))));break;case 26:var d=ya;if(Ht(t,e),$t(e),o&512&&(ct||n===null||Oa(n,n.return)),o&4){var f=n!==null?n.memoizedState:null;if(o=e.memoizedState,n===null)if(o===null)if(e.stateNode===null){e:{o=e.type,n=e.memoizedProps,d=d.ownerDocument||d;t:switch(o){case"title":f=d.getElementsByTagName("title")[0],(!f||f[Os]||f[pt]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=d.createElement(o),d.head.insertBefore(f,d.querySelector("head > title"))),Et(f,o,n),f[pt]=e,xt(f),o=f;break e;case"link":var b=yp("link","href",d).get(o+(n.href||""));if(b){for(var w=0;w<b.length;w++)if(f=b[w],f.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&f.getAttribute("rel")===(n.rel==null?null:n.rel)&&f.getAttribute("title")===(n.title==null?null:n.title)&&f.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){b.splice(w,1);break t}}f=d.createElement(o),Et(f,o,n),d.head.appendChild(f);break;case"meta":if(b=yp("meta","content",d).get(o+(n.content||""))){for(w=0;w<b.length;w++)if(f=b[w],f.getAttribute("content")===(n.content==null?null:""+n.content)&&f.getAttribute("name")===(n.name==null?null:n.name)&&f.getAttribute("property")===(n.property==null?null:n.property)&&f.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&f.getAttribute("charset")===(n.charSet==null?null:n.charSet)){b.splice(w,1);break t}}f=d.createElement(o),Et(f,o,n),d.head.appendChild(f);break;default:throw Error(i(468,o))}f[pt]=e,xt(f),o=f}e.stateNode=o}else vp(d,e.type,e.stateNode);else e.stateNode=xp(d,o,e.memoizedProps);else f!==o?(f===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):f.count--,o===null?vp(d,e.type,e.stateNode):xp(d,o,e.memoizedProps)):o===null&&e.stateNode!==null&&lu(e,e.memoizedProps,n.memoizedProps)}break;case 27:Ht(t,e),$t(e),o&512&&(ct||n===null||Oa(n,n.return)),n!==null&&o&4&&lu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Ht(t,e),$t(e),o&512&&(ct||n===null||Oa(n,n.return)),e.flags&32){d=e.stateNode;try{Rn(d,"")}catch(se){Le(e,e.return,se)}}o&4&&e.stateNode!=null&&(d=e.memoizedProps,lu(e,d,n!==null?n.memoizedProps:d)),o&1024&&(du=!0);break;case 6:if(Ht(t,e),$t(e),o&4){if(e.stateNode===null)throw Error(i(162));o=e.memoizedProps,n=e.stateNode;try{n.nodeValue=o}catch(se){Le(e,e.return,se)}}break;case 3:if(Qo=null,d=ya,ya=Wo(t.containerInfo),Ht(t,e),ya=d,$t(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{ls(t.containerInfo)}catch(se){Le(e,e.return,se)}du&&(du=!1,v0(e));break;case 4:o=ya,ya=Wo(e.stateNode.containerInfo),Ht(t,e),$t(e),ya=o;break;case 12:Ht(t,e),$t(e);break;case 31:Ht(t,e),$t(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Lo(e,o)));break;case 13:Ht(t,e),$t(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ho=wt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Lo(e,o)));break;case 22:d=e.memoizedState!==null;var E=n!==null&&n.memoizedState!==null,L=er,q=ct;if(er=L||d,ct=q||E,Ht(t,e),ct=q,er=L,$t(e),o&8192)e:for(t=e.stateNode,t._visibility=d?t._visibility&-2:t._visibility|1,d&&(n===null||E||er||ct||hn(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){E=n=t;try{if(f=E.stateNode,d)b=f.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{w=E.stateNode;var Y=E.memoizedProps.style,B=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;w.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(se){Le(E,E.return,se)}}}else if(t.tag===6){if(n===null){E=t;try{E.stateNode.nodeValue=d?"":E.memoizedProps}catch(se){Le(E,E.return,se)}}}else if(t.tag===18){if(n===null){E=t;try{var $=E.stateNode;d?cp($,!0):cp(E.stateNode,!1)}catch(se){Le(E,E.return,se)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(n=o.retryQueue,n!==null&&(o.retryQueue=null,Lo(e,n))));break;case 19:Ht(t,e),$t(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Lo(e,o)));break;case 30:break;case 21:break;default:Ht(t,e),$t(e)}}function $t(e){var t=e.flags;if(t&2){try{for(var n,o=e.return;o!==null;){if(d0(o)){n=o;break}o=o.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var d=n.stateNode,f=cu(e);Uo(e,f,d);break;case 5:var b=n.stateNode;n.flags&32&&(Rn(b,""),n.flags&=-33);var w=cu(e);Uo(e,w,b);break;case 3:case 4:var E=n.stateNode.containerInfo,L=cu(e);uu(e,L,E);break;default:throw Error(i(161))}}catch(q){Le(e,e.return,q)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function v0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;v0(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ar(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)p0(e,t.alternate,t),t=t.sibling}function hn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Tr(4,t,t.return),hn(t);break;case 1:Oa(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&c0(t,t.return,n),hn(t);break;case 27:mi(t.stateNode);case 26:case 5:Oa(t,t.return),hn(t);break;case 22:t.memoizedState===null&&hn(t);break;case 30:hn(t);break;default:hn(t)}e=e.sibling}}function rr(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,d=e,f=t,b=f.flags;switch(f.tag){case 0:case 11:case 15:rr(d,f,n),si(4,f);break;case 1:if(rr(d,f,n),o=f,d=o.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(L){Le(o,o.return,L)}if(o=f,d=o.updateQueue,d!==null){var w=o.stateNode;try{var E=d.shared.hiddenCallbacks;if(E!==null)for(d.shared.hiddenCallbacks=null,d=0;d<E.length;d++)Jh(E[d],w)}catch(L){Le(o,o.return,L)}}n&&b&64&&l0(f),ii(f,f.return);break;case 27:h0(f);case 26:case 5:rr(d,f,n),n&&o===null&&b&4&&u0(f),ii(f,f.return);break;case 12:rr(d,f,n);break;case 31:rr(d,f,n),n&&b&4&&b0(d,f);break;case 13:rr(d,f,n),n&&b&4&&x0(d,f);break;case 22:f.memoizedState===null&&rr(d,f,n),ii(f,f.return);break;case 30:break;default:rr(d,f,n)}t=t.sibling}}function hu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Vs(n))}function fu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Vs(e))}function va(e,t,n,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)w0(e,t,n,o),t=t.sibling}function w0(e,t,n,o){var d=t.flags;switch(t.tag){case 0:case 11:case 15:va(e,t,n,o),d&2048&&si(9,t);break;case 1:va(e,t,n,o);break;case 3:va(e,t,n,o),d&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Vs(e)));break;case 12:if(d&2048){va(e,t,n,o),e=t.stateNode;try{var f=t.memoizedProps,b=f.id,w=f.onPostCommit;typeof w=="function"&&w(b,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(E){Le(t,t.return,E)}}else va(e,t,n,o);break;case 31:va(e,t,n,o);break;case 13:va(e,t,n,o);break;case 23:break;case 22:f=t.stateNode,b=t.alternate,t.memoizedState!==null?f._visibility&2?va(e,t,n,o):oi(e,t):f._visibility&2?va(e,t,n,o):(f._visibility|=2,Wn(e,t,n,o,(t.subtreeFlags&10256)!==0||!1)),d&2048&&hu(b,t);break;case 24:va(e,t,n,o),d&2048&&fu(t.alternate,t);break;default:va(e,t,n,o)}}function Wn(e,t,n,o,d){for(d=d&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var f=e,b=t,w=n,E=o,L=b.flags;switch(b.tag){case 0:case 11:case 15:Wn(f,b,w,E,d),si(8,b);break;case 23:break;case 22:var q=b.stateNode;b.memoizedState!==null?q._visibility&2?Wn(f,b,w,E,d):oi(f,b):(q._visibility|=2,Wn(f,b,w,E,d)),d&&L&2048&&hu(b.alternate,b);break;case 24:Wn(f,b,w,E,d),d&&L&2048&&fu(b.alternate,b);break;default:Wn(f,b,w,E,d)}t=t.sibling}}function oi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,o=t,d=o.flags;switch(o.tag){case 22:oi(n,o),d&2048&&hu(o.alternate,o);break;case 24:oi(n,o),d&2048&&fu(o.alternate,o);break;default:oi(n,o)}t=t.sibling}}var li=8192;function Zn(e,t,n){if(e.subtreeFlags&li)for(e=e.child;e!==null;)k0(e,t,n),e=e.sibling}function k0(e,t,n){switch(e.tag){case 26:Zn(e,t,n),e.flags&li&&e.memoizedState!==null&&ey(n,ya,e.memoizedState,e.memoizedProps);break;case 5:Zn(e,t,n);break;case 3:case 4:var o=ya;ya=Wo(e.stateNode.containerInfo),Zn(e,t,n),ya=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=li,li=16777216,Zn(e,t,n),li=o):Zn(e,t,n));break;default:Zn(e,t,n)}}function S0(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ci(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var o=t[n];yt=o,_0(o,e)}S0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)j0(e),e=e.sibling}function j0(e){switch(e.tag){case 0:case 11:case 15:ci(e),e.flags&2048&&Tr(9,e,e.return);break;case 3:ci(e);break;case 12:ci(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Bo(e)):ci(e);break;default:ci(e)}}function Bo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var o=t[n];yt=o,_0(o,e)}S0(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Tr(8,t,t.return),Bo(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Bo(t));break;default:Bo(t)}e=e.sibling}}function _0(e,t){for(;yt!==null;){var n=yt;switch(n.tag){case 0:case 11:case 15:Tr(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var o=n.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Vs(n.memoizedState.cache)}if(o=n.child,o!==null)o.return=n,yt=o;else e:for(n=e;yt!==null;){o=yt;var d=o.sibling,f=o.return;if(m0(o),o===n){yt=null;break e}if(d!==null){d.return=f,yt=d;break e}yt=f}}}var mx={getCacheForType:function(e){var t=jt(it),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return jt(it).controller.signal}},gx=typeof WeakMap=="function"?WeakMap:Map,Me=0,Ye=null,je=null,Ne=0,Ue=0,Jt=null,Ar=!1,Qn=!1,pu=!1,nr=0,at=0,Rr=0,fn=0,mu=0,Wt=0,es=0,ui=null,qt=null,gu=!1,Ho=0,E0=0,$o=1/0,qo=null,zr=null,mt=0,Or=null,ts=null,sr=0,bu=0,xu=null,N0=null,di=0,yu=null;function Zt(){return(Me&2)!==0&&Ne!==0?Ne&-Ne:H.T!==null?_u():zs()}function C0(){if(Wt===0)if((Ne&536870912)===0||Te){var e=J;J<<=1,(J&3932160)===0&&(J=262144),Wt=e}else Wt=536870912;return e=Kt.current,e!==null&&(e.flags|=32),Wt}function Pt(e,t,n){(e===Ye&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)&&(as(e,0),Dr(e,Ne,Wt,!1)),He(e,n),((Me&2)===0||e!==Ye)&&(e===Ye&&((Me&2)===0&&(fn|=n),at===4&&Dr(e,Ne,Wt,!1)),Da(e))}function T0(e,t,n){if((Me&6)!==0)throw Error(i(327));var o=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Z(e,t),d=o?yx(e,t):wu(e,t,!0),f=o;do{if(d===0){Qn&&!o&&Dr(e,t,0,!1);break}else{if(n=e.current.alternate,f&&!bx(n)){d=wu(e,t,!1),f=!1;continue}if(d===2){if(f=t,e.errorRecoveryDisabledLanes&f)var b=0;else b=e.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){t=b;e:{var w=e;d=ui;var E=w.current.memoizedState.isDehydrated;if(E&&(as(w,b).flags|=256),b=wu(w,b,!1),b!==2){if(pu&&!E){w.errorRecoveryDisabledLanes|=f,fn|=f,d=4;break e}f=qt,qt=d,f!==null&&(qt===null?qt=f:qt.push.apply(qt,f))}d=b}if(f=!1,d!==2)continue}}if(d===1){as(e,0),Dr(e,t,0,!0);break}e:{switch(o=e,f=d,f){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:Dr(o,t,Wt,!Ar);break e;case 2:qt=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(d=Ho+300-wt(),10<d)){if(Dr(o,t,Wt,!Ar),bt(o,0,!0)!==0)break e;sr=t,o.timeoutHandle=ip(A0.bind(null,o,n,qt,qo,gu,t,Wt,fn,es,Ar,f,"Throttled",-0,0),d);break e}A0(o,n,qt,qo,gu,t,Wt,fn,es,Ar,f,null,-0,0)}}break}while(!0);Da(e)}function A0(e,t,n,o,d,f,b,w,E,L,q,Y,B,$){if(e.timeoutHandle=-1,Y=t.subtreeFlags,Y&8192||(Y&16785408)===16785408){Y={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ya},k0(t,f,Y);var se=(f&62914560)===f?Ho-wt():(f&4194048)===f?E0-wt():0;if(se=ty(Y,se),se!==null){sr=f,e.cancelPendingCommit=se(B0.bind(null,e,t,f,n,o,d,b,w,E,q,Y,null,B,$)),Dr(e,f,b,!L);return}}B0(e,t,f,n,o,d,b,w,E)}function bx(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var o=0;o<n.length;o++){var d=n[o],f=d.getSnapshot;d=d.value;try{if(!Vt(f(),d))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dr(e,t,n,o){t&=~mu,t&=~fn,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var d=t;0<d;){var f=31-ft(d),b=1<<f;o[f]=-1,d&=~b}n!==0&&Ut(e,n,t)}function Po(){return(Me&6)===0?(hi(0),!1):!0}function vu(){if(je!==null){if(Ue===0)var e=je.return;else e=je,Ka=rn=null,Uc(e),Vn=null,Ks=0,e=je;for(;e!==null;)o0(e.alternate,e),e=e.return;je=null}}function as(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Lx(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),sr=0,vu(),Ye=e,je=n=Va(e.current,null),Ne=t,Ue=0,Jt=null,Ar=!1,Qn=Z(e,t),pu=!1,es=Wt=mu=fn=Rr=at=0,qt=ui=null,gu=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var d=31-ft(o),f=1<<d;t|=e[d],o&=~f}return nr=t,lo(),n}function R0(e,t){be=null,H.H=ai,t===Gn||t===bo?(t=Vh(),Ue=3):t===jc?(t=Vh(),Ue=4):Ue=t===Zc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Jt=t,je===null&&(at=1,Ro(e,ia(t,e.current)))}function z0(){var e=Kt.current;return e===null?!0:(Ne&4194048)===Ne?ua===null:(Ne&62914560)===Ne||(Ne&536870912)!==0?e===ua:!1}function O0(){var e=H.H;return H.H=ai,e===null?ai:e}function D0(){var e=H.A;return H.A=mx,e}function Io(){at=4,Ar||(Ne&4194048)!==Ne&&Kt.current!==null||(Qn=!0),(Rr&134217727)===0&&(fn&134217727)===0||Ye===null||Dr(Ye,Ne,Wt,!1)}function wu(e,t,n){var o=Me;Me|=2;var d=O0(),f=D0();(Ye!==e||Ne!==t)&&(qo=null,as(e,t)),t=!1;var b=at;e:do try{if(Ue!==0&&je!==null){var w=je,E=Jt;switch(Ue){case 8:vu(),b=6;break e;case 3:case 2:case 9:case 6:Kt.current===null&&(t=!0);var L=Ue;if(Ue=0,Jt=null,rs(e,w,E,L),n&&Qn){b=0;break e}break;default:L=Ue,Ue=0,Jt=null,rs(e,w,E,L)}}xx(),b=at;break}catch(q){R0(e,q)}while(!0);return t&&e.shellSuspendCounter++,Ka=rn=null,Me=o,H.H=d,H.A=f,je===null&&(Ye=null,Ne=0,lo()),b}function xx(){for(;je!==null;)M0(je)}function yx(e,t){var n=Me;Me|=2;var o=O0(),d=D0();Ye!==e||Ne!==t?(qo=null,$o=wt()+500,as(e,t)):Qn=Z(e,t);e:do try{if(Ue!==0&&je!==null){t=je;var f=Jt;t:switch(Ue){case 1:Ue=0,Jt=null,rs(e,t,f,1);break;case 2:case 9:if(Yh(f)){Ue=0,Jt=null,U0(t);break}t=function(){Ue!==2&&Ue!==9||Ye!==e||(Ue=7),Da(e)},f.then(t,t);break e;case 3:Ue=7;break e;case 4:Ue=5;break e;case 7:Yh(f)?(Ue=0,Jt=null,U0(t)):(Ue=0,Jt=null,rs(e,t,f,7));break;case 5:var b=null;switch(je.tag){case 26:b=je.memoizedState;case 5:case 27:var w=je;if(b?wp(b):w.stateNode.complete){Ue=0,Jt=null;var E=w.sibling;if(E!==null)je=E;else{var L=w.return;L!==null?(je=L,Yo(L)):je=null}break t}}Ue=0,Jt=null,rs(e,t,f,5);break;case 6:Ue=0,Jt=null,rs(e,t,f,6);break;case 8:vu(),at=6;break e;default:throw Error(i(462))}}vx();break}catch(q){R0(e,q)}while(!0);return Ka=rn=null,H.H=o,H.A=d,Me=n,je!==null?0:(Ye=null,Ne=0,lo(),at)}function vx(){for(;je!==null&&!wn();)M0(je)}function M0(e){var t=s0(e.alternate,e,nr);e.memoizedProps=e.pendingProps,t===null?Yo(e):je=t}function U0(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Qf(n,t,t.pendingProps,t.type,void 0,Ne);break;case 11:t=Qf(n,t,t.pendingProps,t.type.render,t.ref,Ne);break;case 5:Uc(t);default:o0(n,t),t=je=Oh(t,nr),t=s0(n,t,nr)}e.memoizedProps=e.pendingProps,t===null?Yo(e):je=t}function rs(e,t,n,o){Ka=rn=null,Uc(t),Vn=null,Ks=0;var d=t.return;try{if(lx(e,d,t,n,Ne)){at=1,Ro(e,ia(n,e.current)),je=null;return}}catch(f){if(d!==null)throw je=d,f;at=1,Ro(e,ia(n,e.current)),je=null;return}t.flags&32768?(Te||o===1?e=!0:Qn||(Ne&536870912)!==0?e=!1:(Ar=e=!0,(o===2||o===9||o===3||o===6)&&(o=Kt.current,o!==null&&o.tag===13&&(o.flags|=16384))),L0(t,e)):Yo(t)}function Yo(e){var t=e;do{if((t.flags&32768)!==0){L0(t,Ar);return}e=t.return;var n=dx(t.alternate,t,nr);if(n!==null){je=n;return}if(t=t.sibling,t!==null){je=t;return}je=t=e}while(t!==null);at===0&&(at=5)}function L0(e,t){do{var n=hx(e.alternate,e);if(n!==null){n.flags&=32767,je=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){je=e;return}je=e=n}while(e!==null);at=6,je=null}function B0(e,t,n,o,d,f,b,w,E){e.cancelPendingCommit=null;do Go();while(mt!==0);if((Me&6)!==0)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(f=t.lanes|t.childLanes,f|=cc,Yt(e,n,f,b,w,E),e===Ye&&(je=Ye=null,Ne=0),ts=t,Or=e,sr=n,bu=f,xu=d,N0=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,jx(Ee,function(){return I0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=H.T,H.T=null,d=W.p,W.p=2,b=Me,Me|=4;try{fx(e,t,n)}finally{Me=b,W.p=d,H.T=o}}mt=1,H0(),$0(),q0()}}function H0(){if(mt===1){mt=0;var e=Or,t=ts,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=H.T,H.T=null;var o=W.p;W.p=2;var d=Me;Me|=4;try{y0(t,e);var f=Ou,b=jh(e.containerInfo),w=f.focusedElem,E=f.selectionRange;if(b!==w&&w&&w.ownerDocument&&Sh(w.ownerDocument.documentElement,w)){if(E!==null&&nc(w)){var L=E.start,q=E.end;if(q===void 0&&(q=L),"selectionStart"in w)w.selectionStart=L,w.selectionEnd=Math.min(q,w.value.length);else{var Y=w.ownerDocument||document,B=Y&&Y.defaultView||window;if(B.getSelection){var $=B.getSelection(),se=w.textContent.length,de=Math.min(E.start,se),Pe=E.end===void 0?de:Math.min(E.end,se);!$.extend&&de>Pe&&(b=Pe,Pe=de,de=b);var O=kh(w,de),A=kh(w,Pe);if(O&&A&&($.rangeCount!==1||$.anchorNode!==O.node||$.anchorOffset!==O.offset||$.focusNode!==A.node||$.focusOffset!==A.offset)){var U=Y.createRange();U.setStart(O.node,O.offset),$.removeAllRanges(),de>Pe?($.addRange(U),$.extend(A.node,A.offset)):(U.setEnd(A.node,A.offset),$.addRange(U))}}}}for(Y=[],$=w;$=$.parentNode;)$.nodeType===1&&Y.push({element:$,left:$.scrollLeft,top:$.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Y.length;w++){var I=Y[w];I.element.scrollLeft=I.left,I.element.scrollTop=I.top}}rl=!!zu,Ou=zu=null}finally{Me=d,W.p=o,H.T=n}}e.current=t,mt=2}}function $0(){if(mt===2){mt=0;var e=Or,t=ts,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=H.T,H.T=null;var o=W.p;W.p=2;var d=Me;Me|=4;try{p0(e,t.alternate,t)}finally{Me=d,W.p=o,H.T=n}}mt=3}}function q0(){if(mt===4||mt===3){mt=0,kn();var e=Or,t=ts,n=sr,o=N0;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?mt=5:(mt=0,ts=Or=null,P0(e,e.pendingLanes));var d=e.pendingLanes;if(d===0&&(zr=null),Fr(n),t=t.stateNode,ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(Ca,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=H.T,d=W.p,W.p=2,H.T=null;try{for(var f=e.onRecoverableError,b=0;b<o.length;b++){var w=o[b];f(w.value,{componentStack:w.stack})}}finally{H.T=t,W.p=d}}(sr&3)!==0&&Go(),Da(e),d=e.pendingLanes,(n&261930)!==0&&(d&42)!==0?e===yu?di++:(di=0,yu=e):di=0,hi(0)}}function P0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Vs(t)))}function Go(){return H0(),$0(),q0(),I0()}function I0(){if(mt!==5)return!1;var e=Or,t=bu;bu=0;var n=Fr(sr),o=H.T,d=W.p;try{W.p=32>n?32:n,H.T=null,n=xu,xu=null;var f=Or,b=sr;if(mt=0,ts=Or=null,sr=0,(Me&6)!==0)throw Error(i(331));var w=Me;if(Me|=4,j0(f.current),w0(f,f.current,b,n),Me=w,hi(0,!1),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(Ca,f)}catch{}return!0}finally{W.p=d,H.T=o,P0(e,t)}}function Y0(e,t,n){t=ia(n,t),t=Wc(e.stateNode,t,2),e=Er(e,t,2),e!==null&&(He(e,2),Da(e))}function Le(e,t,n){if(e.tag===3)Y0(e,e,n);else for(;t!==null;){if(t.tag===3){Y0(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(zr===null||!zr.has(o))){e=ia(n,e),n=Gf(2),o=Er(t,n,2),o!==null&&(Vf(n,o,t,e),He(o,2),Da(o));break}}t=t.return}}function ku(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new gx;var d=new Set;o.set(t,d)}else d=o.get(t),d===void 0&&(d=new Set,o.set(t,d));d.has(n)||(pu=!0,d.add(n),e=wx.bind(null,e,t,n),t.then(e,e))}function wx(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ye===e&&(Ne&n)===n&&(at===4||at===3&&(Ne&62914560)===Ne&&300>wt()-Ho?(Me&2)===0&&as(e,0):mu|=n,es===Ne&&(es=0)),Da(e)}function G0(e,t){t===0&&(t=Be()),e=en(e,t),e!==null&&(He(e,t),Da(e))}function kx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),G0(e,n)}function Sx(e,t){var n=0;switch(e.tag){case 31:case 13:var o=e.stateNode,d=e.memoizedState;d!==null&&(n=d.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(i(314))}o!==null&&o.delete(t),G0(e,n)}function jx(e,t){return pr(e,t)}var Vo=null,ns=null,Su=!1,Xo=!1,ju=!1,Mr=0;function Da(e){e!==ns&&e.next===null&&(ns===null?Vo=ns=e:ns=ns.next=e),Xo=!0,Su||(Su=!0,Ex())}function hi(e,t){if(!ju&&Xo){ju=!0;do for(var n=!1,o=Vo;o!==null;){if(e!==0){var d=o.pendingLanes;if(d===0)var f=0;else{var b=o.suspendedLanes,w=o.pingedLanes;f=(1<<31-ft(42|e)+1)-1,f&=d&~(b&~w),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(n=!0,F0(o,f))}else f=Ne,f=bt(o,o===Ye?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Z(o,f)||(n=!0,F0(o,f));o=o.next}while(n);ju=!1}}function _x(){V0()}function V0(){Xo=Su=!1;var e=0;Mr!==0&&Ux()&&(e=Mr);for(var t=wt(),n=null,o=Vo;o!==null;){var d=o.next,f=X0(o,t);f===0?(o.next=null,n===null?Vo=d:n.next=d,d===null&&(ns=n)):(n=o,(e!==0||(f&3)!==0)&&(Xo=!0)),o=d}mt!==0&&mt!==5||hi(e),Mr!==0&&(Mr=0)}function X0(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,d=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var b=31-ft(f),w=1<<b,E=d[b];E===-1?((w&n)===0||(w&o)!==0)&&(d[b]=ve(w,t)):E<=t&&(e.expiredLanes|=w),f&=~w}if(t=Ye,n=Ne,n=bt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,n===0||e===t&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&mr(o),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Z(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(o!==null&&mr(o),Fr(n)){case 2:case 8:n=$a;break;case 32:n=Ee;break;case 268435456:n=gr;break;default:n=Ee}return o=K0.bind(null,e),n=pr(n,o),e.callbackPriority=t,e.callbackNode=n,t}return o!==null&&o!==null&&mr(o),e.callbackPriority=2,e.callbackNode=null,2}function K0(e,t){if(mt!==0&&mt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Go()&&e.callbackNode!==n)return null;var o=Ne;return o=bt(e,e===Ye?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(T0(e,o,t),X0(e,wt()),e.callbackNode!=null&&e.callbackNode===n?K0.bind(null,e):null)}function F0(e,t){if(Go())return null;T0(e,t,!0)}function Ex(){Bx(function(){(Me&6)!==0?pr(Kr,_x):V0()})}function _u(){if(Mr===0){var e=In;e===0&&(e=Ge,Ge<<=1,(Ge&261888)===0&&(Ge=256)),Mr=e}return Mr}function J0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:eo(""+e)}function W0(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Nx(e,t,n,o,d){if(t==="submit"&&n&&n.stateNode===d){var f=J0((d[kt]||null).action),b=o.submitter;b&&(t=(t=b[kt]||null)?J0(t.formAction):b.getAttribute("formAction"),t!==null&&(f=t,b=null));var w=new no("action","action",null,o,d);e.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Mr!==0){var E=b?W0(d,b):new FormData(d);Gc(n,{pending:!0,data:E,method:d.method,action:f},null,E)}}else typeof f=="function"&&(w.preventDefault(),E=b?W0(d,b):new FormData(d),Gc(n,{pending:!0,data:E,method:d.method,action:f},f,E))},currentTarget:d}]})}}for(var Eu=0;Eu<lc.length;Eu++){var Nu=lc[Eu],Cx=Nu.toLowerCase(),Tx=Nu[0].toUpperCase()+Nu.slice(1);xa(Cx,"on"+Tx)}xa(Nh,"onAnimationEnd"),xa(Ch,"onAnimationIteration"),xa(Th,"onAnimationStart"),xa("dblclick","onDoubleClick"),xa("focusin","onFocus"),xa("focusout","onBlur"),xa(Gb,"onTransitionRun"),xa(Vb,"onTransitionStart"),xa(Xb,"onTransitionCancel"),xa(Ah,"onTransitionEnd"),Tn("onMouseEnter",["mouseout","mouseover"]),Tn("onMouseLeave",["mouseout","mouseover"]),Tn("onPointerEnter",["pointerout","pointerover"]),Tn("onPointerLeave",["pointerout","pointerover"]),Jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Jr("onBeforeInput",["compositionend","keypress","textInput","paste"]),Jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ax=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fi));function Z0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],d=o.event;o=o.listeners;e:{var f=void 0;if(t)for(var b=o.length-1;0<=b;b--){var w=o[b],E=w.instance,L=w.currentTarget;if(w=w.listener,E!==f&&d.isPropagationStopped())break e;f=w,d.currentTarget=L;try{f(d)}catch(q){oo(q)}d.currentTarget=null,f=E}else for(b=0;b<o.length;b++){if(w=o[b],E=w.instance,L=w.currentTarget,w=w.listener,E!==f&&d.isPropagationStopped())break e;f=w,d.currentTarget=L;try{f(d)}catch(q){oo(q)}d.currentTarget=null,f=E}}}}function _e(e,t){var n=t[et];n===void 0&&(n=t[et]=new Set);var o=e+"__bubble";n.has(o)||(Q0(t,e,2,!1),n.add(o))}function Cu(e,t,n){var o=0;t&&(o|=4),Q0(n,e,o,t)}var Ko="_reactListening"+Math.random().toString(36).slice(2);function Tu(e){if(!e[Ko]){e[Ko]=!0,Gd.forEach(function(n){n!=="selectionchange"&&(Ax.has(n)||Cu(n,!1,e),Cu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ko]||(t[Ko]=!0,Cu("selectionchange",!1,t))}}function Q0(e,t,n,o){switch(Cp(t)){case 2:var d=ny;break;case 8:d=sy;break;default:d=Yu}n=d.bind(null,t,n,e),d=void 0,!Fl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(d=!0),o?d!==void 0?e.addEventListener(t,n,{capture:!0,passive:d}):e.addEventListener(t,n,!0):d!==void 0?e.addEventListener(t,n,{passive:d}):e.addEventListener(t,n,!1)}function Au(e,t,n,o,d){var f=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var b=o.tag;if(b===3||b===4){var w=o.stateNode.containerInfo;if(w===d)break;if(b===4)for(b=o.return;b!==null;){var E=b.tag;if((E===3||E===4)&&b.stateNode.containerInfo===d)return;b=b.return}for(;w!==null;){if(b=En(w),b===null)return;if(E=b.tag,E===5||E===6||E===26||E===27){o=f=b;continue e}w=w.parentNode}}o=o.return}rh(function(){var L=f,q=Xl(n),Y=[];e:{var B=Rh.get(e);if(B!==void 0){var $=no,se=e;switch(e){case"keypress":if(ao(n)===0)break e;case"keydown":case"keyup":$=Sb;break;case"focusin":se="focus",$=Ql;break;case"focusout":se="blur",$=Ql;break;case"beforeblur":case"afterblur":$=Ql;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=ih;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=db;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=Eb;break;case Nh:case Ch:case Th:$=pb;break;case Ah:$=Cb;break;case"scroll":case"scrollend":$=cb;break;case"wheel":$=Ab;break;case"copy":case"cut":case"paste":$=gb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=lh;break;case"toggle":case"beforetoggle":$=zb}var de=(t&4)!==0,Pe=!de&&(e==="scroll"||e==="scrollend"),O=de?B!==null?B+"Capture":null:B;de=[];for(var A=L,U;A!==null;){var I=A;if(U=I.stateNode,I=I.tag,I!==5&&I!==26&&I!==27||U===null||O===null||(I=Ms(A,O),I!=null&&de.push(pi(A,I,U))),Pe)break;A=A.return}0<de.length&&(B=new $(B,se,null,n,q),Y.push({event:B,listeners:de}))}}if((t&7)===0){e:{if(B=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",B&&n!==Vl&&(se=n.relatedTarget||n.fromElement)&&(En(se)||se[Gt]))break e;if(($||B)&&(B=q.window===q?q:(B=q.ownerDocument)?B.defaultView||B.parentWindow:window,$?(se=n.relatedTarget||n.toElement,$=L,se=se?En(se):null,se!==null&&(Pe=u(se),de=se.tag,se!==Pe||de!==5&&de!==27&&de!==6)&&(se=null)):($=null,se=L),$!==se)){if(de=ih,I="onMouseLeave",O="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(de=lh,I="onPointerLeave",O="onPointerEnter",A="pointer"),Pe=$==null?B:Ds($),U=se==null?B:Ds(se),B=new de(I,A+"leave",$,n,q),B.target=Pe,B.relatedTarget=U,I=null,En(q)===L&&(de=new de(O,A+"enter",se,n,q),de.target=U,de.relatedTarget=Pe,I=de),Pe=I,$&&se)t:{for(de=Rx,O=$,A=se,U=0,I=O;I;I=de(I))U++;I=0;for(var le=A;le;le=de(le))I++;for(;0<U-I;)O=de(O),U--;for(;0<I-U;)A=de(A),I--;for(;U--;){if(O===A||A!==null&&O===A.alternate){de=O;break t}O=de(O),A=de(A)}de=null}else de=null;$!==null&&ep(Y,B,$,de,!1),se!==null&&Pe!==null&&ep(Y,Pe,se,de,!0)}}e:{if(B=L?Ds(L):window,$=B.nodeName&&B.nodeName.toLowerCase(),$==="select"||$==="input"&&B.type==="file")var Oe=gh;else if(ph(B))if(bh)Oe=Pb;else{Oe=$b;var oe=Hb}else $=B.nodeName,!$||$.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?L&&Gl(L.elementType)&&(Oe=gh):Oe=qb;if(Oe&&(Oe=Oe(e,L))){mh(Y,Oe,n,q);break e}oe&&oe(e,B,L),e==="focusout"&&L&&B.type==="number"&&L.memoizedProps.value!=null&&Yl(B,"number",B.value)}switch(oe=L?Ds(L):window,e){case"focusin":(ph(oe)||oe.contentEditable==="true")&&(Mn=oe,sc=L,Is=null);break;case"focusout":Is=sc=Mn=null;break;case"mousedown":ic=!0;break;case"contextmenu":case"mouseup":case"dragend":ic=!1,_h(Y,n,q);break;case"selectionchange":if(Yb)break;case"keydown":case"keyup":_h(Y,n,q)}var ye;if(tc)e:{switch(e){case"compositionstart":var Ce="onCompositionStart";break e;case"compositionend":Ce="onCompositionEnd";break e;case"compositionupdate":Ce="onCompositionUpdate";break e}Ce=void 0}else Dn?hh(e,n)&&(Ce="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Ce="onCompositionStart");Ce&&(ch&&n.locale!=="ko"&&(Dn||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&Dn&&(ye=nh()):(yr=q,Jl="value"in yr?yr.value:yr.textContent,Dn=!0)),oe=Fo(L,Ce),0<oe.length&&(Ce=new oh(Ce,e,null,n,q),Y.push({event:Ce,listeners:oe}),ye?Ce.data=ye:(ye=fh(n),ye!==null&&(Ce.data=ye)))),(ye=Db?Mb(e,n):Ub(e,n))&&(Ce=Fo(L,"onBeforeInput"),0<Ce.length&&(oe=new oh("onBeforeInput","beforeinput",null,n,q),Y.push({event:oe,listeners:Ce}),oe.data=ye)),Nx(Y,e,L,n,q)}Z0(Y,t)})}function pi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fo(e,t){for(var n=t+"Capture",o=[];e!==null;){var d=e,f=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||f===null||(d=Ms(e,n),d!=null&&o.unshift(pi(e,d,f)),d=Ms(e,t),d!=null&&o.push(pi(e,d,f))),e.tag===3)return o;e=e.return}return[]}function Rx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ep(e,t,n,o,d){for(var f=t._reactName,b=[];n!==null&&n!==o;){var w=n,E=w.alternate,L=w.stateNode;if(w=w.tag,E!==null&&E===o)break;w!==5&&w!==26&&w!==27||L===null||(E=L,d?(L=Ms(n,f),L!=null&&b.unshift(pi(n,L,E))):d||(L=Ms(n,f),L!=null&&b.push(pi(n,L,E)))),n=n.return}b.length!==0&&e.push({event:t,listeners:b})}var zx=/\r\n?/g,Ox=/\u0000|\uFFFD/g;function tp(e){return(typeof e=="string"?e:""+e).replace(zx,`
`).replace(Ox,"")}function ap(e,t){return t=tp(t),tp(e)===t}function qe(e,t,n,o,d,f){switch(n){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||Rn(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&Rn(e,""+o);break;case"className":Zi(e,"class",o);break;case"tabIndex":Zi(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Zi(e,n,o);break;case"style":th(e,o,f);break;case"data":if(t!=="object"){Zi(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(n);break}o=eo(""+o),e.setAttribute(n,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(n==="formAction"?(t!=="input"&&qe(e,t,"name",d.name,d,null),qe(e,t,"formEncType",d.formEncType,d,null),qe(e,t,"formMethod",d.formMethod,d,null),qe(e,t,"formTarget",d.formTarget,d,null)):(qe(e,t,"encType",d.encType,d,null),qe(e,t,"method",d.method,d,null),qe(e,t,"target",d.target,d,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(n);break}o=eo(""+o),e.setAttribute(n,o);break;case"onClick":o!=null&&(e.onclick=Ya);break;case"onScroll":o!=null&&_e("scroll",e);break;case"onScrollEnd":o!=null&&_e("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(i(61));if(n=o.__html,n!=null){if(d.children!=null)throw Error(i(60));e.innerHTML=n}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}n=eo(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(n,""+o):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":o===!0?e.setAttribute(n,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(n,o):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(n,o):e.removeAttribute(n);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(n):e.setAttribute(n,o);break;case"popover":_e("beforetoggle",e),_e("toggle",e),Wi(e,"popover",o);break;case"xlinkActuate":Ia(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ia(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ia(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ia(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ia(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ia(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ia(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ia(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ia(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Wi(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=ob.get(n)||n,Wi(e,n,o))}}function Ru(e,t,n,o,d,f){switch(n){case"style":th(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(i(61));if(n=o.__html,n!=null){if(d.children!=null)throw Error(i(60));e.innerHTML=n}}break;case"children":typeof o=="string"?Rn(e,o):(typeof o=="number"||typeof o=="bigint")&&Rn(e,""+o);break;case"onScroll":o!=null&&_e("scroll",e);break;case"onScrollEnd":o!=null&&_e("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Ya);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vd.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(d=n.endsWith("Capture"),t=n.slice(2,d?n.length-7:void 0),f=e[kt]||null,f=f!=null?f[n]:null,typeof f=="function"&&e.removeEventListener(t,f,d),typeof o=="function")){typeof f!="function"&&f!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,o,d);break e}n in e?e[n]=o:o===!0?e.setAttribute(n,""):Wi(e,n,o)}}}function Et(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",e),_e("load",e);var o=!1,d=!1,f;for(f in n)if(n.hasOwnProperty(f)){var b=n[f];if(b!=null)switch(f){case"src":o=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:qe(e,t,f,b,n,null)}}d&&qe(e,t,"srcSet",n.srcSet,n,null),o&&qe(e,t,"src",n.src,n,null);return;case"input":_e("invalid",e);var w=f=b=d=null,E=null,L=null;for(o in n)if(n.hasOwnProperty(o)){var q=n[o];if(q!=null)switch(o){case"name":d=q;break;case"type":b=q;break;case"checked":E=q;break;case"defaultChecked":L=q;break;case"value":f=q;break;case"defaultValue":w=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(i(137,t));break;default:qe(e,t,o,q,n,null)}}Wd(e,f,w,E,L,b,d,!1);return;case"select":_e("invalid",e),o=b=f=null;for(d in n)if(n.hasOwnProperty(d)&&(w=n[d],w!=null))switch(d){case"value":f=w;break;case"defaultValue":b=w;break;case"multiple":o=w;default:qe(e,t,d,w,n,null)}t=f,n=b,e.multiple=!!o,t!=null?An(e,!!o,t,!1):n!=null&&An(e,!!o,n,!0);return;case"textarea":_e("invalid",e),f=d=o=null;for(b in n)if(n.hasOwnProperty(b)&&(w=n[b],w!=null))switch(b){case"value":o=w;break;case"defaultValue":d=w;break;case"children":f=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(i(91));break;default:qe(e,t,b,w,n,null)}Qd(e,o,d,f);return;case"option":for(E in n)if(n.hasOwnProperty(E)&&(o=n[E],o!=null))switch(E){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:qe(e,t,E,o,n,null)}return;case"dialog":_e("beforetoggle",e),_e("toggle",e),_e("cancel",e),_e("close",e);break;case"iframe":case"object":_e("load",e);break;case"video":case"audio":for(o=0;o<fi.length;o++)_e(fi[o],e);break;case"image":_e("error",e),_e("load",e);break;case"details":_e("toggle",e);break;case"embed":case"source":case"link":_e("error",e),_e("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in n)if(n.hasOwnProperty(L)&&(o=n[L],o!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:qe(e,t,L,o,n,null)}return;default:if(Gl(t)){for(q in n)n.hasOwnProperty(q)&&(o=n[q],o!==void 0&&Ru(e,t,q,o,n,void 0));return}}for(w in n)n.hasOwnProperty(w)&&(o=n[w],o!=null&&qe(e,t,w,o,n,null))}function Dx(e,t,n,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,f=null,b=null,w=null,E=null,L=null,q=null;for($ in n){var Y=n[$];if(n.hasOwnProperty($)&&Y!=null)switch($){case"checked":break;case"value":break;case"defaultValue":E=Y;default:o.hasOwnProperty($)||qe(e,t,$,null,o,Y)}}for(var B in o){var $=o[B];if(Y=n[B],o.hasOwnProperty(B)&&($!=null||Y!=null))switch(B){case"type":f=$;break;case"name":d=$;break;case"checked":L=$;break;case"defaultChecked":q=$;break;case"value":b=$;break;case"defaultValue":w=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(i(137,t));break;default:$!==Y&&qe(e,t,B,$,o,Y)}}Il(e,b,w,E,L,q,f,d);return;case"select":$=b=w=B=null;for(f in n)if(E=n[f],n.hasOwnProperty(f)&&E!=null)switch(f){case"value":break;case"multiple":$=E;default:o.hasOwnProperty(f)||qe(e,t,f,null,o,E)}for(d in o)if(f=o[d],E=n[d],o.hasOwnProperty(d)&&(f!=null||E!=null))switch(d){case"value":B=f;break;case"defaultValue":w=f;break;case"multiple":b=f;default:f!==E&&qe(e,t,d,f,o,E)}t=w,n=b,o=$,B!=null?An(e,!!n,B,!1):!!o!=!!n&&(t!=null?An(e,!!n,t,!0):An(e,!!n,n?[]:"",!1));return;case"textarea":$=B=null;for(w in n)if(d=n[w],n.hasOwnProperty(w)&&d!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:qe(e,t,w,null,o,d)}for(b in o)if(d=o[b],f=n[b],o.hasOwnProperty(b)&&(d!=null||f!=null))switch(b){case"value":B=d;break;case"defaultValue":$=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(i(91));break;default:d!==f&&qe(e,t,b,d,o,f)}Zd(e,B,$);return;case"option":for(var se in n)if(B=n[se],n.hasOwnProperty(se)&&B!=null&&!o.hasOwnProperty(se))switch(se){case"selected":e.selected=!1;break;default:qe(e,t,se,null,o,B)}for(E in o)if(B=o[E],$=n[E],o.hasOwnProperty(E)&&B!==$&&(B!=null||$!=null))switch(E){case"selected":e.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:qe(e,t,E,B,o,$)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var de in n)B=n[de],n.hasOwnProperty(de)&&B!=null&&!o.hasOwnProperty(de)&&qe(e,t,de,null,o,B);for(L in o)if(B=o[L],$=n[L],o.hasOwnProperty(L)&&B!==$&&(B!=null||$!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(i(137,t));break;default:qe(e,t,L,B,o,$)}return;default:if(Gl(t)){for(var Pe in n)B=n[Pe],n.hasOwnProperty(Pe)&&B!==void 0&&!o.hasOwnProperty(Pe)&&Ru(e,t,Pe,void 0,o,B);for(q in o)B=o[q],$=n[q],!o.hasOwnProperty(q)||B===$||B===void 0&&$===void 0||Ru(e,t,q,B,o,$);return}}for(var O in n)B=n[O],n.hasOwnProperty(O)&&B!=null&&!o.hasOwnProperty(O)&&qe(e,t,O,null,o,B);for(Y in o)B=o[Y],$=n[Y],!o.hasOwnProperty(Y)||B===$||B==null&&$==null||qe(e,t,Y,B,o,$)}function rp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Mx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),o=0;o<n.length;o++){var d=n[o],f=d.transferSize,b=d.initiatorType,w=d.duration;if(f&&w&&rp(b)){for(b=0,w=d.responseEnd,o+=1;o<n.length;o++){var E=n[o],L=E.startTime;if(L>w)break;var q=E.transferSize,Y=E.initiatorType;q&&rp(Y)&&(E=E.responseEnd,b+=q*(E<w?1:(w-L)/(E-L)))}if(--o,t+=8*(f+b)/(d.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var zu=null,Ou=null;function Jo(e){return e.nodeType===9?e:e.ownerDocument}function np(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function sp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Du(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Mu=null;function Ux(){var e=window.event;return e&&e.type==="popstate"?e===Mu?!1:(Mu=e,!0):(Mu=null,!1)}var ip=typeof setTimeout=="function"?setTimeout:void 0,Lx=typeof clearTimeout=="function"?clearTimeout:void 0,op=typeof Promise=="function"?Promise:void 0,Bx=typeof queueMicrotask=="function"?queueMicrotask:typeof op<"u"?function(e){return op.resolve(null).then(e).catch(Hx)}:ip;function Hx(e){setTimeout(function(){throw e})}function Ur(e){return e==="head"}function lp(e,t){var n=t,o=0;do{var d=n.nextSibling;if(e.removeChild(n),d&&d.nodeType===8)if(n=d.data,n==="/$"||n==="/&"){if(o===0){e.removeChild(d),ls(t);return}o--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")o++;else if(n==="html")mi(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,mi(n);for(var f=n.firstChild;f;){var b=f.nextSibling,w=f.nodeName;f[Os]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&f.rel.toLowerCase()==="stylesheet"||n.removeChild(f),f=b}}else n==="body"&&mi(e.ownerDocument.body);n=d}while(n);ls(t)}function cp(e,t){var n=e;e=0;do{var o=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=o}while(n)}function Uu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Uu(n),ql(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function $x(e,t,n,o){for(;e.nodeType===1;){var d=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Os])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==d.rel||e.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||e.getAttribute("title")!==(d.title==null?null:d.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(d.src==null?null:d.src)||e.getAttribute("type")!==(d.type==null?null:d.type)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var f=d.name==null?null:""+d.name;if(d.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=da(e.nextSibling),e===null)break}return null}function qx(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=da(e.nextSibling),e===null))return null;return e}function up(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=da(e.nextSibling),e===null))return null;return e}function Lu(e){return e.data==="$?"||e.data==="$~"}function Bu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Px(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var o=function(){t(),n.removeEventListener("DOMContentLoaded",o)};n.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function da(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Hu=null;function dp(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return da(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function hp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function fp(e,t,n){switch(t=Jo(n),e){case"html":if(e=t.documentElement,!e)throw Error(i(452));return e;case"head":if(e=t.head,!e)throw Error(i(453));return e;case"body":if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function mi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ql(e)}var ha=new Map,pp=new Set;function Wo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ir=W.d;W.d={f:Ix,r:Yx,D:Gx,C:Vx,L:Xx,m:Kx,X:Jx,S:Fx,M:Wx};function Ix(){var e=ir.f(),t=Po();return e||t}function Yx(e){var t=Nn(e);t!==null&&t.tag===5&&t.type==="form"?Rf(t):ir.r(e)}var ss=typeof document>"u"?null:document;function mp(e,t,n){var o=ss;if(o&&typeof t=="string"&&t){var d=na(t);d='link[rel="'+e+'"][href="'+d+'"]',typeof n=="string"&&(d+='[crossorigin="'+n+'"]'),pp.has(d)||(pp.add(d),e={rel:e,crossOrigin:n,href:t},o.querySelector(d)===null&&(t=o.createElement("link"),Et(t,"link",e),xt(t),o.head.appendChild(t)))}}function Gx(e){ir.D(e),mp("dns-prefetch",e,null)}function Vx(e,t){ir.C(e,t),mp("preconnect",e,t)}function Xx(e,t,n){ir.L(e,t,n);var o=ss;if(o&&e&&t){var d='link[rel="preload"][as="'+na(t)+'"]';t==="image"&&n&&n.imageSrcSet?(d+='[imagesrcset="'+na(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(d+='[imagesizes="'+na(n.imageSizes)+'"]')):d+='[href="'+na(e)+'"]';var f=d;switch(t){case"style":f=is(e);break;case"script":f=os(e)}ha.has(f)||(e=x({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ha.set(f,e),o.querySelector(d)!==null||t==="style"&&o.querySelector(gi(f))||t==="script"&&o.querySelector(bi(f))||(t=o.createElement("link"),Et(t,"link",e),xt(t),o.head.appendChild(t)))}}function Kx(e,t){ir.m(e,t);var n=ss;if(n&&e){var o=t&&typeof t.as=="string"?t.as:"script",d='link[rel="modulepreload"][as="'+na(o)+'"][href="'+na(e)+'"]',f=d;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=os(e)}if(!ha.has(f)&&(e=x({rel:"modulepreload",href:e},t),ha.set(f,e),n.querySelector(d)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(bi(f)))return}o=n.createElement("link"),Et(o,"link",e),xt(o),n.head.appendChild(o)}}}function Fx(e,t,n){ir.S(e,t,n);var o=ss;if(o&&e){var d=Cn(o).hoistableStyles,f=is(e);t=t||"default";var b=d.get(f);if(!b){var w={loading:0,preload:null};if(b=o.querySelector(gi(f)))w.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ha.get(f))&&$u(e,n);var E=b=o.createElement("link");xt(E),Et(E,"link",e),E._p=new Promise(function(L,q){E.onload=L,E.onerror=q}),E.addEventListener("load",function(){w.loading|=1}),E.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Zo(b,t,o)}b={type:"stylesheet",instance:b,count:1,state:w},d.set(f,b)}}}function Jx(e,t){ir.X(e,t);var n=ss;if(n&&e){var o=Cn(n).hoistableScripts,d=os(e),f=o.get(d);f||(f=n.querySelector(bi(d)),f||(e=x({src:e,async:!0},t),(t=ha.get(d))&&qu(e,t),f=n.createElement("script"),xt(f),Et(f,"link",e),n.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(d,f))}}function Wx(e,t){ir.M(e,t);var n=ss;if(n&&e){var o=Cn(n).hoistableScripts,d=os(e),f=o.get(d);f||(f=n.querySelector(bi(d)),f||(e=x({src:e,async:!0,type:"module"},t),(t=ha.get(d))&&qu(e,t),f=n.createElement("script"),xt(f),Et(f,"link",e),n.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(d,f))}}function gp(e,t,n,o){var d=(d=me.current)?Wo(d):null;if(!d)throw Error(i(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=is(n.href),n=Cn(d).hoistableStyles,o=n.get(t),o||(o={type:"style",instance:null,count:0,state:null},n.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=is(n.href);var f=Cn(d).hoistableStyles,b=f.get(e);if(b||(d=d.ownerDocument||d,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,b),(f=d.querySelector(gi(e)))&&!f._p&&(b.instance=f,b.state.loading=5),ha.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ha.set(e,n),f||Zx(d,e,n,b.state))),t&&o===null)throw Error(i(528,""));return b}if(t&&o!==null)throw Error(i(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=os(n),n=Cn(d).hoistableScripts,o=n.get(t),o||(o={type:"script",instance:null,count:0,state:null},n.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,e))}}function is(e){return'href="'+na(e)+'"'}function gi(e){return'link[rel="stylesheet"]['+e+"]"}function bp(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function Zx(e,t,n,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),Et(t,"link",n),xt(t),e.head.appendChild(t))}function os(e){return'[src="'+na(e)+'"]'}function bi(e){return"script[async]"+e}function xp(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+na(n.href)+'"]');if(o)return t.instance=o,xt(o),o;var d=x({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),xt(o),Et(o,"style",d),Zo(o,n.precedence,e),t.instance=o;case"stylesheet":d=is(n.href);var f=e.querySelector(gi(d));if(f)return t.state.loading|=4,t.instance=f,xt(f),f;o=bp(n),(d=ha.get(d))&&$u(o,d),f=(e.ownerDocument||e).createElement("link"),xt(f);var b=f;return b._p=new Promise(function(w,E){b.onload=w,b.onerror=E}),Et(f,"link",o),t.state.loading|=4,Zo(f,n.precedence,e),t.instance=f;case"script":return f=os(n.src),(d=e.querySelector(bi(f)))?(t.instance=d,xt(d),d):(o=n,(d=ha.get(f))&&(o=x({},n),qu(o,d)),e=e.ownerDocument||e,d=e.createElement("script"),xt(d),Et(d,"link",o),e.head.appendChild(d),t.instance=d);case"void":return null;default:throw Error(i(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,Zo(o,n.precedence,e));return t.instance}function Zo(e,t,n){for(var o=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=o.length?o[o.length-1]:null,f=d,b=0;b<o.length;b++){var w=o[b];if(w.dataset.precedence===t)f=w;else if(f!==d)break}f?f.parentNode.insertBefore(e,f.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function $u(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function qu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Qo=null;function yp(e,t,n){if(Qo===null){var o=new Map,d=Qo=new Map;d.set(n,o)}else d=Qo,o=d.get(n),o||(o=new Map,d.set(n,o));if(o.has(e))return o;for(o.set(e,null),n=n.getElementsByTagName(e),d=0;d<n.length;d++){var f=n[d];if(!(f[Os]||f[pt]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var b=f.getAttribute(t)||"";b=e+b;var w=o.get(b);w?w.push(f):o.set(b,[f])}}return o}function vp(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Qx(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function wp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ey(e,t,n,o){if(n.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var d=is(o.href),f=t.querySelector(gi(d));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=el.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=f,xt(f);return}f=t.ownerDocument||t,o=bp(o),(d=ha.get(d))&&$u(o,d),f=f.createElement("link"),xt(f);var b=f;b._p=new Promise(function(w,E){b.onload=w,b.onerror=E}),Et(f,"link",o),n.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=el.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Pu=0;function ty(e,t){return e.stylesheets&&e.count===0&&al(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var o=setTimeout(function(){if(e.stylesheets&&al(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+t);0<e.imgBytes&&Pu===0&&(Pu=62500*Mx());var d=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&al(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Pu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(d)}}:null}function el(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)al(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var tl=null;function al(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,tl=new Map,t.forEach(ay,e),tl=null,el.call(e))}function ay(e,t){if(!(t.state.loading&4)){var n=tl.get(e);if(n)var o=n.get(null);else{n=new Map,tl.set(e,n);for(var d=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<d.length;f++){var b=d[f];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(n.set(b.dataset.precedence,b),o=b)}o&&n.set(null,o)}d=t.instance,b=d.getAttribute("data-precedence"),f=n.get(b)||o,f===o&&n.set(null,d),n.set(b,d),this.count++,o=el.bind(this),d.addEventListener("load",o),d.addEventListener("error",o),f?f.parentNode.insertBefore(d,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(d,e.firstChild)),t.state.loading|=4}}var xi={$$typeof:R,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function ry(e,t,n,o,d,f,b,w,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xe(0),this.hiddenUpdates=Xe(null),this.identifierPrefix=o,this.onUncaughtError=d,this.onCaughtError=f,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function kp(e,t,n,o,d,f,b,w,E,L,q,Y){return e=new ry(e,t,n,b,E,L,q,Y,w),t=1,f===!0&&(t|=24),f=Xt(3,null,null,t),e.current=f,f.stateNode=e,t=wc(),t.refCount++,e.pooledCache=t,t.refCount++,f.memoizedState={element:o,isDehydrated:n,cache:t},_c(f),e}function Sp(e){return e?(e=Bn,e):Bn}function jp(e,t,n,o,d,f){d=Sp(d),o.context===null?o.context=d:o.pendingContext=d,o=_r(t),o.payload={element:n},f=f===void 0?null:f,f!==null&&(o.callback=f),n=Er(e,o,t),n!==null&&(Pt(n,e,t),Js(n,e,t))}function _p(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Iu(e,t){_p(e,t),(e=e.alternate)&&_p(e,t)}function Ep(e){if(e.tag===13||e.tag===31){var t=en(e,67108864);t!==null&&Pt(t,e,67108864),Iu(e,67108864)}}function Np(e){if(e.tag===13||e.tag===31){var t=Zt();t=_n(t);var n=en(e,t);n!==null&&Pt(n,e,t),Iu(e,t)}}var rl=!0;function ny(e,t,n,o){var d=H.T;H.T=null;var f=W.p;try{W.p=2,Yu(e,t,n,o)}finally{W.p=f,H.T=d}}function sy(e,t,n,o){var d=H.T;H.T=null;var f=W.p;try{W.p=8,Yu(e,t,n,o)}finally{W.p=f,H.T=d}}function Yu(e,t,n,o){if(rl){var d=Gu(o);if(d===null)Au(e,t,o,nl,n),Tp(e,o);else if(oy(d,e,t,n,o))o.stopPropagation();else if(Tp(e,o),t&4&&-1<iy.indexOf(e)){for(;d!==null;){var f=Nn(d);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var b=gt(f.pendingLanes);if(b!==0){var w=f;for(w.pendingLanes|=2,w.entangledLanes|=2;b;){var E=1<<31-ft(b);w.entanglements[1]|=E,b&=~E}Da(f),(Me&6)===0&&($o=wt()+500,hi(0))}}break;case 31:case 13:w=en(f,2),w!==null&&Pt(w,f,2),Po(),Iu(f,2)}if(f=Gu(o),f===null&&Au(e,t,o,nl,n),f===d)break;d=f}d!==null&&o.stopPropagation()}else Au(e,t,o,null,n)}}function Gu(e){return e=Xl(e),Vu(e)}var nl=null;function Vu(e){if(nl=null,e=En(e),e!==null){var t=u(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===31){if(e=p(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return nl=e,null}function Cp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Sn()){case Kr:return 2;case $a:return 8;case Ee:case ma:return 32;case gr:return 268435456;default:return 32}default:return 32}}var Xu=!1,Lr=null,Br=null,Hr=null,yi=new Map,vi=new Map,$r=[],iy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Tp(e,t){switch(e){case"focusin":case"focusout":Lr=null;break;case"dragenter":case"dragleave":Br=null;break;case"mouseover":case"mouseout":Hr=null;break;case"pointerover":case"pointerout":yi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vi.delete(t.pointerId)}}function wi(e,t,n,o,d,f){return e===null||e.nativeEvent!==f?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:f,targetContainers:[d]},t!==null&&(t=Nn(t),t!==null&&Ep(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,d!==null&&t.indexOf(d)===-1&&t.push(d),e)}function oy(e,t,n,o,d){switch(t){case"focusin":return Lr=wi(Lr,e,t,n,o,d),!0;case"dragenter":return Br=wi(Br,e,t,n,o,d),!0;case"mouseover":return Hr=wi(Hr,e,t,n,o,d),!0;case"pointerover":var f=d.pointerId;return yi.set(f,wi(yi.get(f)||null,e,t,n,o,d)),!0;case"gotpointercapture":return f=d.pointerId,vi.set(f,wi(vi.get(f)||null,e,t,n,o,d)),!0}return!1}function Ap(e){var t=En(e.target);if(t!==null){var n=u(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,br(e.priority,function(){Np(n)});return}}else if(t===31){if(t=p(n),t!==null){e.blockedOn=t,br(e.priority,function(){Np(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function sl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gu(e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Vl=o,n.target.dispatchEvent(o),Vl=null}else return t=Nn(n),t!==null&&Ep(t),e.blockedOn=n,!1;t.shift()}return!0}function Rp(e,t,n){sl(e)&&n.delete(t)}function ly(){Xu=!1,Lr!==null&&sl(Lr)&&(Lr=null),Br!==null&&sl(Br)&&(Br=null),Hr!==null&&sl(Hr)&&(Hr=null),yi.forEach(Rp),vi.forEach(Rp)}function il(e,t){e.blockedOn===t&&(e.blockedOn=null,Xu||(Xu=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,ly)))}var ol=null;function zp(e){ol!==e&&(ol=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ol===e&&(ol=null);for(var t=0;t<e.length;t+=3){var n=e[t],o=e[t+1],d=e[t+2];if(typeof o!="function"){if(Vu(o||n)===null)continue;break}var f=Nn(n);f!==null&&(e.splice(t,3),t-=3,Gc(f,{pending:!0,data:d,method:n.method,action:o},o,d))}}))}function ls(e){function t(E){return il(E,e)}Lr!==null&&il(Lr,e),Br!==null&&il(Br,e),Hr!==null&&il(Hr,e),yi.forEach(t),vi.forEach(t);for(var n=0;n<$r.length;n++){var o=$r[n];o.blockedOn===e&&(o.blockedOn=null)}for(;0<$r.length&&(n=$r[0],n.blockedOn===null);)Ap(n),n.blockedOn===null&&$r.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(o=0;o<n.length;o+=3){var d=n[o],f=n[o+1],b=d[kt]||null;if(typeof f=="function")b||zp(n);else if(b){var w=null;if(f&&f.hasAttribute("formAction")){if(d=f,b=f[kt]||null)w=b.formAction;else if(Vu(d)!==null)continue}else w=b.action;typeof w=="function"?n[o+1]=w:(n.splice(o,3),o-=3),zp(n)}}}function Op(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(b){return d=b})},focusReset:"manual",scroll:"manual"})}function t(){d!==null&&(d(),d=null),o||setTimeout(n,20)}function n(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,d=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),d!==null&&(d(),d=null)}}}function Ku(e){this._internalRoot=e}ll.prototype.render=Ku.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current,o=Zt();jp(n,o,e,t,null,null)},ll.prototype.unmount=Ku.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jp(e.current,2,null,e,null,null),Po(),t[Gt]=null}};function ll(e){this._internalRoot=e}ll.prototype.unstable_scheduleHydration=function(e){if(e){var t=zs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<$r.length&&t!==0&&t<$r[n].priority;n++);$r.splice(n,0,e),n===0&&Ap(e)}};var Dp=a.version;if(Dp!=="19.2.0")throw Error(i(527,Dp,"19.2.0"));W.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=g(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var cy={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{Ca=cl.inject(cy),ht=cl}catch{}}return Si.createRoot=function(e,t){if(!c(e))throw Error(i(299));var n=!1,o="",d=qf,f=Pf,b=If;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(d=t.onUncaughtError),t.onCaughtError!==void 0&&(f=t.onCaughtError),t.onRecoverableError!==void 0&&(b=t.onRecoverableError)),t=kp(e,1,!1,null,null,n,o,null,d,f,b,Op),e[Gt]=t.current,Tu(e),new Ku(t)},Si.hydrateRoot=function(e,t,n){if(!c(e))throw Error(i(299));var o=!1,d="",f=qf,b=Pf,w=If,E=null;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(d=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(b=n.onCaughtError),n.onRecoverableError!==void 0&&(w=n.onRecoverableError),n.formState!==void 0&&(E=n.formState)),t=kp(e,1,!0,t,n??null,o,d,E,f,b,w,Op),t.context=Sp(null),n=t.current,o=Zt(),o=_n(o),d=_r(o),d.callback=null,Er(n,d,o),n=o,t.current.lanes=n,He(t,n),Da(t),e[Gt]=t.current,Tu(e),new ll(t)},Si.version="19.2.0",Si}var Yp;function yy(){if(Yp)return Wu.exports;Yp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(a){console.error(a)}}return r(),Wu.exports=xy(),Wu.exports}var vy=yy();const wy=Dd(vy);/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Gp="popstate";function ky(r={}){function a(i,c){let{pathname:u,search:h,hash:p}=i.location;return gd("",{pathname:u,search:h,hash:p},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function s(i,c){return typeof c=="string"?c:Di(c)}return jy(a,s,null,r)}function Qe(r,a){if(r===!1||r===null||typeof r>"u")throw new Error(a)}function Ea(r,a){if(!r){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function Sy(){return Math.random().toString(36).substring(2,10)}function Vp(r,a){return{usr:r.state,key:r.key,idx:a}}function gd(r,a,s=null,i){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof a=="string"?_s(a):a,state:s,key:a&&a.key||i||Sy()}}function Di({pathname:r="/",search:a="",hash:s=""}){return a&&a!=="?"&&(r+=a.charAt(0)==="?"?a:"?"+a),s&&s!=="#"&&(r+=s.charAt(0)==="#"?s:"#"+s),r}function _s(r){let a={};if(r){let s=r.indexOf("#");s>=0&&(a.hash=r.substring(s),r=r.substring(0,s));let i=r.indexOf("?");i>=0&&(a.search=r.substring(i),r=r.substring(0,i)),r&&(a.pathname=r)}return a}function jy(r,a,s,i={}){let{window:c=document.defaultView,v5Compat:u=!1}=i,h=c.history,p="POP",m=null,g=y();g==null&&(g=0,h.replaceState({...h.state,idx:g},""));function y(){return(h.state||{idx:null}).idx}function x(){p="POP";let _=y(),z=_==null?null:_-g;g=_,m&&m({action:p,location:C.location,delta:z})}function S(_,z){p="PUSH";let M=gd(C.location,_,z);g=y()+1;let R=Vp(M,g),V=C.createHref(M);try{h.pushState(R,"",V)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;c.location.assign(V)}u&&m&&m({action:p,location:C.location,delta:1})}function k(_,z){p="REPLACE";let M=gd(C.location,_,z);g=y();let R=Vp(M,g),V=C.createHref(M);h.replaceState(R,"",V),u&&m&&m({action:p,location:C.location,delta:0})}function T(_){return _y(_)}let C={get action(){return p},get location(){return r(c,h)},listen(_){if(m)throw new Error("A history only accepts one active listener");return c.addEventListener(Gp,x),m=_,()=>{c.removeEventListener(Gp,x),m=null}},createHref(_){return a(c,_)},createURL:T,encodeLocation(_){let z=T(_);return{pathname:z.pathname,search:z.search,hash:z.hash}},push:S,replace:k,go(_){return h.go(_)}};return C}function _y(r,a=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),Qe(s,"No window.location.(origin|href) available to create URL");let i=typeof r=="string"?r:Di(r);return i=i.replace(/ $/,"%20"),!a&&i.startsWith("//")&&(i=s+i),new URL(i,s)}function rg(r,a,s="/"){return Ey(r,a,s,!1)}function Ey(r,a,s,i){let c=typeof a=="string"?_s(a):a,u=ur(c.pathname||"/",s);if(u==null)return null;let h=ng(r);Ny(h);let p=null;for(let m=0;p==null&&m<h.length;++m){let g=By(u);p=Uy(h[m],g,i)}return p}function ng(r,a=[],s=[],i="",c=!1){let u=(h,p,m=c,g)=>{let y={relativePath:g===void 0?h.path||"":g,caseSensitive:h.caseSensitive===!0,childrenIndex:p,route:h};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(i)&&m)return;Qe(y.relativePath.startsWith(i),`Absolute route path "${y.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(i.length)}let x=cr([i,y.relativePath]),S=s.concat(y);h.children&&h.children.length>0&&(Qe(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),ng(h.children,a,S,x,m)),!(h.path==null&&!h.index)&&a.push({path:x,score:Dy(x,h.index),routesMeta:S})};return r.forEach((h,p)=>{if(h.path===""||!h.path?.includes("?"))u(h,p);else for(let m of sg(h.path))u(h,p,!0,m)}),a}function sg(r){let a=r.split("/");if(a.length===0)return[];let[s,...i]=a,c=s.endsWith("?"),u=s.replace(/\?$/,"");if(i.length===0)return c?[u,""]:[u];let h=sg(i.join("/")),p=[];return p.push(...h.map(m=>m===""?u:[u,m].join("/"))),c&&p.push(...h),p.map(m=>r.startsWith("/")&&m===""?"/":m)}function Ny(r){r.sort((a,s)=>a.score!==s.score?s.score-a.score:My(a.routesMeta.map(i=>i.childrenIndex),s.routesMeta.map(i=>i.childrenIndex)))}var Cy=/^:[\w-]+$/,Ty=3,Ay=2,Ry=1,zy=10,Oy=-2,Xp=r=>r==="*";function Dy(r,a){let s=r.split("/"),i=s.length;return s.some(Xp)&&(i+=Oy),a&&(i+=Ay),s.filter(c=>!Xp(c)).reduce((c,u)=>c+(Cy.test(u)?Ty:u===""?Ry:zy),i)}function My(r,a){return r.length===a.length&&r.slice(0,-1).every((i,c)=>i===a[c])?r[r.length-1]-a[a.length-1]:0}function Uy(r,a,s=!1){let{routesMeta:i}=r,c={},u="/",h=[];for(let p=0;p<i.length;++p){let m=i[p],g=p===i.length-1,y=u==="/"?a:a.slice(u.length)||"/",x=Sl({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},y),S=m.route;if(!x&&g&&s&&!i[i.length-1].route.index&&(x=Sl({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},y)),!x)return null;Object.assign(c,x.params),h.push({params:c,pathname:cr([u,x.pathname]),pathnameBase:Py(cr([u,x.pathnameBase])),route:S}),x.pathnameBase!=="/"&&(u=cr([u,x.pathnameBase]))}return h}function Sl(r,a){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[s,i]=Ly(r.path,r.caseSensitive,r.end),c=a.match(s);if(!c)return null;let u=c[0],h=u.replace(/(.)\/+$/,"$1"),p=c.slice(1);return{params:i.reduce((g,{paramName:y,isOptional:x},S)=>{if(y==="*"){let T=p[S]||"";h=u.slice(0,u.length-T.length).replace(/(.)\/+$/,"$1")}const k=p[S];return x&&!k?g[y]=void 0:g[y]=(k||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:h,pattern:r}}function Ly(r,a=!1,s=!0){Ea(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let i=[],c="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,p,m)=>(i.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(i.push({paramName:"*"}),c+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?c+="\\/*$":r!==""&&r!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,a?void 0:"i"),i]}function By(r){try{return r.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return Ea(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),r}}function ur(r,a){if(a==="/")return r;if(!r.toLowerCase().startsWith(a.toLowerCase()))return null;let s=a.endsWith("/")?a.length-1:a.length,i=r.charAt(s);return i&&i!=="/"?null:r.slice(s)||"/"}function Hy(r,a="/"){let{pathname:s,search:i="",hash:c=""}=typeof r=="string"?_s(r):r;return{pathname:s?s.startsWith("/")?s:$y(s,a):a,search:Iy(i),hash:Yy(c)}}function $y(r,a){let s=a.replace(/\/+$/,"").split("/");return r.split("/").forEach(c=>{c===".."?s.length>1&&s.pop():c!=="."&&s.push(c)}),s.length>1?s.join("/"):"/"}function td(r,a,s,i){return`Cannot include a '${r}' character in a manually specified \`to.${a}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function qy(r){return r.filter((a,s)=>s===0||a.route.path&&a.route.path.length>0)}function ig(r){let a=qy(r);return a.map((s,i)=>i===a.length-1?s.pathname:s.pathnameBase)}function og(r,a,s,i=!1){let c;typeof r=="string"?c=_s(r):(c={...r},Qe(!c.pathname||!c.pathname.includes("?"),td("?","pathname","search",c)),Qe(!c.pathname||!c.pathname.includes("#"),td("#","pathname","hash",c)),Qe(!c.search||!c.search.includes("#"),td("#","search","hash",c)));let u=r===""||c.pathname==="",h=u?"/":c.pathname,p;if(h==null)p=s;else{let x=a.length-1;if(!i&&h.startsWith("..")){let S=h.split("/");for(;S[0]==="..";)S.shift(),x-=1;c.pathname=S.join("/")}p=x>=0?a[x]:"/"}let m=Hy(c,p),g=h&&h!=="/"&&h.endsWith("/"),y=(u||h===".")&&s.endsWith("/");return!m.pathname.endsWith("/")&&(g||y)&&(m.pathname+="/"),m}var cr=r=>r.join("/").replace(/\/\/+/g,"/"),Py=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Iy=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Yy=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function Gy(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var lg=["POST","PUT","PATCH","DELETE"];new Set(lg);var Vy=["GET",...lg];new Set(Vy);var Es=v.createContext(null);Es.displayName="DataRouter";var Tl=v.createContext(null);Tl.displayName="DataRouterState";v.createContext(!1);var cg=v.createContext({isTransitioning:!1});cg.displayName="ViewTransition";var Xy=v.createContext(new Map);Xy.displayName="Fetchers";var Ky=v.createContext(null);Ky.displayName="Await";var Ba=v.createContext(null);Ba.displayName="Navigation";var Ns=v.createContext(null);Ns.displayName="Location";var dr=v.createContext({outlet:null,matches:[],isDataRoute:!1});dr.displayName="Route";var Ld=v.createContext(null);Ld.displayName="RouteError";function Fy(r,{relative:a}={}){Qe(Vi(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:i}=v.useContext(Ba),{hash:c,pathname:u,search:h}=Xi(r,{relative:a}),p=u;return s!=="/"&&(p=u==="/"?s:cr([s,u])),i.createHref({pathname:p,search:h,hash:c})}function Vi(){return v.useContext(Ns)!=null}function ta(){return Qe(Vi(),"useLocation() may be used only in the context of a <Router> component."),v.useContext(Ns).location}function Jy(){return v.useContext(Ns).navigationType}var ug="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function dg(r){v.useContext(Ba).static||v.useLayoutEffect(r)}function Cs(){let{isDataRoute:r}=v.useContext(dr);return r?cv():Wy()}function Wy(){Qe(Vi(),"useNavigate() may be used only in the context of a <Router> component.");let r=v.useContext(Es),{basename:a,navigator:s}=v.useContext(Ba),{matches:i}=v.useContext(dr),{pathname:c}=ta(),u=JSON.stringify(ig(i)),h=v.useRef(!1);return dg(()=>{h.current=!0}),v.useCallback((m,g={})=>{if(Ea(h.current,ug),!h.current)return;if(typeof m=="number"){s.go(m);return}let y=og(m,JSON.parse(u),c,g.relative==="path");r==null&&a!=="/"&&(y.pathname=y.pathname==="/"?a:cr([a,y.pathname])),(g.replace?s.replace:s.push)(y,g.state,g)},[a,s,u,c,r])}v.createContext(null);function Xi(r,{relative:a}={}){let{matches:s}=v.useContext(dr),{pathname:i}=ta(),c=JSON.stringify(ig(s));return v.useMemo(()=>og(r,JSON.parse(c),i,a==="path"),[r,c,i,a])}function Zy(r,a){return hg(r,a)}function hg(r,a,s,i,c){Qe(Vi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=v.useContext(Ba),{matches:h}=v.useContext(dr),p=h[h.length-1],m=p?p.params:{},g=p?p.pathname:"/",y=p?p.pathnameBase:"/",x=p&&p.route;{let M=x&&x.path||"";fg(g,!x||M.endsWith("*")||M.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M==="/"?"*":`${M}/*`}">.`)}let S=ta(),k;if(a){let M=typeof a=="string"?_s(a):a;Qe(y==="/"||M.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${M.pathname}" was given in the \`location\` prop.`),k=M}else k=S;let T=k.pathname||"/",C=T;if(y!=="/"){let M=y.replace(/^\//,"").split("/");C="/"+T.replace(/^\//,"").split("/").slice(M.length).join("/")}let _=rg(r,{pathname:C});Ea(x||_!=null,`No routes matched location "${k.pathname}${k.search}${k.hash}" `),Ea(_==null||_[_.length-1].route.element!==void 0||_[_.length-1].route.Component!==void 0||_[_.length-1].route.lazy!==void 0,`Matched leaf route at location "${k.pathname}${k.search}${k.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let z=rv(_&&_.map(M=>Object.assign({},M,{params:Object.assign({},m,M.params),pathname:cr([y,u.encodeLocation?u.encodeLocation(M.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?y:cr([y,u.encodeLocation?u.encodeLocation(M.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:M.pathnameBase])})),h,s,i,c);return a&&z?v.createElement(Ns.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...k},navigationType:"POP"}},z):z}function Qy(){let r=lv(),a=Gy(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),s=r instanceof Error?r.stack:null,i="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:i},u={padding:"2px 4px",backgroundColor:i},h=null;return console.error("Error handled by React Router default ErrorBoundary:",r),h=v.createElement(v.Fragment,null,v.createElement("p",null,"💿 Hey developer 👋"),v.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",v.createElement("code",{style:u},"ErrorBoundary")," or"," ",v.createElement("code",{style:u},"errorElement")," prop on your route.")),v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},a),s?v.createElement("pre",{style:c},s):null,h)}var ev=v.createElement(Qy,null),tv=class extends v.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,a){return a.location!==r.location||a.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:a.error,location:a.location,revalidation:r.revalidation||a.revalidation}}componentDidCatch(r,a){this.props.unstable_onError?this.props.unstable_onError(r,a):console.error("React Router caught the following error during render",r)}render(){return this.state.error!==void 0?v.createElement(dr.Provider,{value:this.props.routeContext},v.createElement(Ld.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function av({routeContext:r,match:a,children:s}){let i=v.useContext(Es);return i&&i.static&&i.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=a.route.id),v.createElement(dr.Provider,{value:r},s)}function rv(r,a=[],s=null,i=null,c=null){if(r==null){if(!s)return null;if(s.errors)r=s.matches;else if(a.length===0&&!s.initialized&&s.matches.length>0)r=s.matches;else return null}let u=r,h=s?.errors;if(h!=null){let g=u.findIndex(y=>y.route.id&&h?.[y.route.id]!==void 0);Qe(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),u=u.slice(0,Math.min(u.length,g+1))}let p=!1,m=-1;if(s)for(let g=0;g<u.length;g++){let y=u[g];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(m=g),y.route.id){let{loaderData:x,errors:S}=s,k=y.route.loader&&!x.hasOwnProperty(y.route.id)&&(!S||S[y.route.id]===void 0);if(y.route.lazy||k){p=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}return u.reduceRight((g,y,x)=>{let S,k=!1,T=null,C=null;s&&(S=h&&y.route.id?h[y.route.id]:void 0,T=y.route.errorElement||ev,p&&(m<0&&x===0?(fg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),k=!0,C=null):m===x&&(k=!0,C=y.route.hydrateFallbackElement||null)));let _=a.concat(u.slice(0,x+1)),z=()=>{let M;return S?M=T:k?M=C:y.route.Component?M=v.createElement(y.route.Component,null):y.route.element?M=y.route.element:M=g,v.createElement(av,{match:y,routeContext:{outlet:g,matches:_,isDataRoute:s!=null},children:M})};return s&&(y.route.ErrorBoundary||y.route.errorElement||x===0)?v.createElement(tv,{location:s.location,revalidation:s.revalidation,component:T,error:S,children:z(),routeContext:{outlet:null,matches:_,isDataRoute:!0},unstable_onError:i}):z()},null)}function Bd(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function nv(r){let a=v.useContext(Es);return Qe(a,Bd(r)),a}function sv(r){let a=v.useContext(Tl);return Qe(a,Bd(r)),a}function iv(r){let a=v.useContext(dr);return Qe(a,Bd(r)),a}function Hd(r){let a=iv(r),s=a.matches[a.matches.length-1];return Qe(s.route.id,`${r} can only be used on routes that contain a unique "id"`),s.route.id}function ov(){return Hd("useRouteId")}function lv(){let r=v.useContext(Ld),a=sv("useRouteError"),s=Hd("useRouteError");return r!==void 0?r:a.errors?.[s]}function cv(){let{router:r}=nv("useNavigate"),a=Hd("useNavigate"),s=v.useRef(!1);return dg(()=>{s.current=!0}),v.useCallback(async(c,u={})=>{Ea(s.current,ug),s.current&&(typeof c=="number"?r.navigate(c):await r.navigate(c,{fromRouteId:a,...u}))},[r,a])}var Kp={};function fg(r,a,s){!a&&!Kp[r]&&(Kp[r]=!0,Ea(!1,s))}v.memo(uv);function uv({routes:r,future:a,state:s,unstable_onError:i}){return hg(r,void 0,s,i,a)}function zt(r){Qe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function dv({basename:r="/",children:a=null,location:s,navigationType:i="POP",navigator:c,static:u=!1}){Qe(!Vi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=r.replace(/^\/*/,"/"),p=v.useMemo(()=>({basename:h,navigator:c,static:u,future:{}}),[h,c,u]);typeof s=="string"&&(s=_s(s));let{pathname:m="/",search:g="",hash:y="",state:x=null,key:S="default"}=s,k=v.useMemo(()=>{let T=ur(m,h);return T==null?null:{location:{pathname:T,search:g,hash:y,state:x,key:S},navigationType:i}},[h,m,g,y,x,S,i]);return Ea(k!=null,`<Router basename="${h}"> is not able to match the URL "${m}${g}${y}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:v.createElement(Ba.Provider,{value:p},v.createElement(Ns.Provider,{children:a,value:k}))}function hv({children:r,location:a}){return Zy(bd(r),a)}function bd(r,a=[]){let s=[];return v.Children.forEach(r,(i,c)=>{if(!v.isValidElement(i))return;let u=[...a,c];if(i.type===v.Fragment){s.push.apply(s,bd(i.props.children,u));return}Qe(i.type===zt,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qe(!i.props.index||!i.props.children,"An index route cannot have child routes.");let h={id:i.props.id||u.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,middleware:i.props.middleware,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(h.children=bd(i.props.children,u)),s.push(h)}),s}var vl="get",wl="application/x-www-form-urlencoded";function Al(r){return r!=null&&typeof r.tagName=="string"}function fv(r){return Al(r)&&r.tagName.toLowerCase()==="button"}function pv(r){return Al(r)&&r.tagName.toLowerCase()==="form"}function mv(r){return Al(r)&&r.tagName.toLowerCase()==="input"}function gv(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function bv(r,a){return r.button===0&&(!a||a==="_self")&&!gv(r)}function xd(r=""){return new URLSearchParams(typeof r=="string"||Array.isArray(r)||r instanceof URLSearchParams?r:Object.keys(r).reduce((a,s)=>{let i=r[s];return a.concat(Array.isArray(i)?i.map(c=>[s,c]):[[s,i]])},[]))}function xv(r,a){let s=xd(r);return a&&a.forEach((i,c)=>{s.has(c)||a.getAll(c).forEach(u=>{s.append(c,u)})}),s}var ul=null;function yv(){if(ul===null)try{new FormData(document.createElement("form"),0),ul=!1}catch{ul=!0}return ul}var vv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ad(r){return r!=null&&!vv.has(r)?(Ea(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${wl}"`),null):r}function wv(r,a){let s,i,c,u,h;if(pv(r)){let p=r.getAttribute("action");i=p?ur(p,a):null,s=r.getAttribute("method")||vl,c=ad(r.getAttribute("enctype"))||wl,u=new FormData(r)}else if(fv(r)||mv(r)&&(r.type==="submit"||r.type==="image")){let p=r.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||p.getAttribute("action");if(i=m?ur(m,a):null,s=r.getAttribute("formmethod")||p.getAttribute("method")||vl,c=ad(r.getAttribute("formenctype"))||ad(p.getAttribute("enctype"))||wl,u=new FormData(p,r),!yv()){let{name:g,type:y,value:x}=r;if(y==="image"){let S=g?`${g}.`:"";u.append(`${S}x`,"0"),u.append(`${S}y`,"0")}else g&&u.append(g,x)}}else{if(Al(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=vl,i=null,c=wl,h=r}return u&&c==="text/plain"&&(h=u,u=void 0),{action:i,method:s.toLowerCase(),encType:c,formData:u,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function $d(r,a){if(r===!1||r===null||typeof r>"u")throw new Error(a)}function kv(r,a,s){let i=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return i.pathname==="/"?i.pathname=`_root.${s}`:a&&ur(i.pathname,a)==="/"?i.pathname=`${a.replace(/\/$/,"")}/_root.${s}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${s}`,i}async function Sv(r,a){if(r.id in a)return a[r.id];try{let s=await import(r.module);return a[r.id]=s,s}catch(s){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function jv(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function _v(r,a,s){let i=await Promise.all(r.map(async c=>{let u=a.routes[c.route.id];if(u){let h=await Sv(u,s);return h.links?h.links():[]}return[]}));return Tv(i.flat(1).filter(jv).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function Fp(r,a,s,i,c,u){let h=(m,g)=>s[g]?m.route.id!==s[g].route.id:!0,p=(m,g)=>s[g].pathname!==m.pathname||s[g].route.path?.endsWith("*")&&s[g].params["*"]!==m.params["*"];return u==="assets"?a.filter((m,g)=>h(m,g)||p(m,g)):u==="data"?a.filter((m,g)=>{let y=i.routes[m.route.id];if(!y||!y.hasLoader)return!1;if(h(m,g)||p(m,g))return!0;if(m.route.shouldRevalidate){let x=m.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:s[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function Ev(r,a,{includeHydrateFallback:s}={}){return Nv(r.map(i=>{let c=a.routes[i.route.id];if(!c)return[];let u=[c.module];return c.clientActionModule&&(u=u.concat(c.clientActionModule)),c.clientLoaderModule&&(u=u.concat(c.clientLoaderModule)),s&&c.hydrateFallbackModule&&(u=u.concat(c.hydrateFallbackModule)),c.imports&&(u=u.concat(c.imports)),u}).flat(1))}function Nv(r){return[...new Set(r)]}function Cv(r){let a={},s=Object.keys(r).sort();for(let i of s)a[i]=r[i];return a}function Tv(r,a){let s=new Set;return new Set(a),r.reduce((i,c)=>{let u=JSON.stringify(Cv(c));return s.has(u)||(s.add(u),i.push({key:u,link:c})),i},[])}function pg(){let r=v.useContext(Es);return $d(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Av(){let r=v.useContext(Tl);return $d(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var qd=v.createContext(void 0);qd.displayName="FrameworkContext";function mg(){let r=v.useContext(qd);return $d(r,"You must render this element inside a <HydratedRouter> element"),r}function Rv(r,a){let s=v.useContext(qd),[i,c]=v.useState(!1),[u,h]=v.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:g,onMouseLeave:y,onTouchStart:x}=a,S=v.useRef(null);v.useEffect(()=>{if(r==="render"&&h(!0),r==="viewport"){let C=z=>{z.forEach(M=>{h(M.isIntersecting)})},_=new IntersectionObserver(C,{threshold:.5});return S.current&&_.observe(S.current),()=>{_.disconnect()}}},[r]),v.useEffect(()=>{if(i){let C=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(C)}}},[i]);let k=()=>{c(!0)},T=()=>{c(!1),h(!1)};return s?r!=="intent"?[u,S,{}]:[u,S,{onFocus:ji(p,k),onBlur:ji(m,T),onMouseEnter:ji(g,k),onMouseLeave:ji(y,T),onTouchStart:ji(x,k)}]:[!1,S,{}]}function ji(r,a){return s=>{r&&r(s),s.defaultPrevented||a(s)}}function zv({page:r,...a}){let{router:s}=pg(),i=v.useMemo(()=>rg(s.routes,r,s.basename),[s.routes,r,s.basename]);return i?v.createElement(Dv,{page:r,matches:i,...a}):null}function Ov(r){let{manifest:a,routeModules:s}=mg(),[i,c]=v.useState([]);return v.useEffect(()=>{let u=!1;return _v(r,a,s).then(h=>{u||c(h)}),()=>{u=!0}},[r,a,s]),i}function Dv({page:r,matches:a,...s}){let i=ta(),{manifest:c,routeModules:u}=mg(),{basename:h}=pg(),{loaderData:p,matches:m}=Av(),g=v.useMemo(()=>Fp(r,a,m,c,i,"data"),[r,a,m,c,i]),y=v.useMemo(()=>Fp(r,a,m,c,i,"assets"),[r,a,m,c,i]),x=v.useMemo(()=>{if(r===i.pathname+i.search+i.hash)return[];let T=new Set,C=!1;if(a.forEach(z=>{let M=c.routes[z.route.id];!M||!M.hasLoader||(!g.some(R=>R.route.id===z.route.id)&&z.route.id in p&&u[z.route.id]?.shouldRevalidate||M.hasClientLoader?C=!0:T.add(z.route.id))}),T.size===0)return[];let _=kv(r,h,"data");return C&&T.size>0&&_.searchParams.set("_routes",a.filter(z=>T.has(z.route.id)).map(z=>z.route.id).join(",")),[_.pathname+_.search]},[h,p,i,c,g,a,r,u]),S=v.useMemo(()=>Ev(y,c),[y,c]),k=Ov(y);return v.createElement(v.Fragment,null,x.map(T=>v.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...s})),S.map(T=>v.createElement("link",{key:T,rel:"modulepreload",href:T,...s})),k.map(({key:T,link:C})=>v.createElement("link",{key:T,nonce:s.nonce,...C})))}function Mv(...r){return a=>{r.forEach(s=>{typeof s=="function"?s(a):s!=null&&(s.current=a)})}}var gg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{gg&&(window.__reactRouterVersion="7.9.4")}catch{}function Uv({basename:r,children:a,window:s}){let i=v.useRef();i.current==null&&(i.current=ky({window:s,v5Compat:!0}));let c=i.current,[u,h]=v.useState({action:c.action,location:c.location}),p=v.useCallback(m=>{v.startTransition(()=>h(m))},[h]);return v.useLayoutEffect(()=>c.listen(p),[c,p]),v.createElement(dv,{basename:r,children:a,location:u.location,navigationType:u.action,navigator:c})}var bg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dt=v.forwardRef(function({onClick:a,discover:s="render",prefetch:i="none",relative:c,reloadDocument:u,replace:h,state:p,target:m,to:g,preventScrollReset:y,viewTransition:x,...S},k){let{basename:T}=v.useContext(Ba),C=typeof g=="string"&&bg.test(g),_,z=!1;if(typeof g=="string"&&C&&(_=g,gg))try{let te=new URL(window.location.href),fe=g.startsWith("//")?new URL(te.protocol+g):new URL(g),pe=ur(fe.pathname,T);fe.origin===te.origin&&pe!=null?g=pe+fe.search+fe.hash:z=!0}catch{Ea(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let M=Fy(g,{relative:c}),[R,V,G]=Rv(i,S),Q=$v(g,{replace:h,state:p,target:m,preventScrollReset:y,relative:c,viewTransition:x});function X(te){a&&a(te),te.defaultPrevented||Q(te)}let K=v.createElement("a",{...S,...G,href:_||M,onClick:z||u?a:X,ref:Mv(k,V),target:m,"data-discover":!C&&s==="render"?"true":void 0});return R&&!C?v.createElement(v.Fragment,null,K,v.createElement(zv,{page:M})):K});dt.displayName="Link";var Lv=v.forwardRef(function({"aria-current":a="page",caseSensitive:s=!1,className:i="",end:c=!1,style:u,to:h,viewTransition:p,children:m,...g},y){let x=Xi(h,{relative:g.relative}),S=ta(),k=v.useContext(Tl),{navigator:T,basename:C}=v.useContext(Ba),_=k!=null&&Vv(x)&&p===!0,z=T.encodeLocation?T.encodeLocation(x).pathname:x.pathname,M=S.pathname,R=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;s||(M=M.toLowerCase(),R=R?R.toLowerCase():null,z=z.toLowerCase()),R&&C&&(R=ur(R,C)||R);const V=z!=="/"&&z.endsWith("/")?z.length-1:z.length;let G=M===z||!c&&M.startsWith(z)&&M.charAt(V)==="/",Q=R!=null&&(R===z||!c&&R.startsWith(z)&&R.charAt(z.length)==="/"),X={isActive:G,isPending:Q,isTransitioning:_},K=G?a:void 0,te;typeof i=="function"?te=i(X):te=[i,G?"active":null,Q?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let fe=typeof u=="function"?u(X):u;return v.createElement(dt,{...g,"aria-current":K,className:te,ref:y,style:fe,to:h,viewTransition:p},typeof m=="function"?m(X):m)});Lv.displayName="NavLink";var Bv=v.forwardRef(({discover:r="render",fetcherKey:a,navigate:s,reloadDocument:i,replace:c,state:u,method:h=vl,action:p,onSubmit:m,relative:g,preventScrollReset:y,viewTransition:x,...S},k)=>{let T=Yv(),C=Gv(p,{relative:g}),_=h.toLowerCase()==="get"?"get":"post",z=typeof p=="string"&&bg.test(p),M=R=>{if(m&&m(R),R.defaultPrevented)return;R.preventDefault();let V=R.nativeEvent.submitter,G=V?.getAttribute("formmethod")||h;T(V||R.currentTarget,{fetcherKey:a,method:G,navigate:s,replace:c,state:u,relative:g,preventScrollReset:y,viewTransition:x})};return v.createElement("form",{ref:k,method:_,action:C,onSubmit:i?m:M,...S,"data-discover":!z&&r==="render"?"true":void 0})});Bv.displayName="Form";function Hv(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xg(r){let a=v.useContext(Es);return Qe(a,Hv(r)),a}function $v(r,{target:a,replace:s,state:i,preventScrollReset:c,relative:u,viewTransition:h}={}){let p=Cs(),m=ta(),g=Xi(r,{relative:u});return v.useCallback(y=>{if(bv(y,a)){y.preventDefault();let x=s!==void 0?s:Di(m)===Di(g);p(r,{replace:x,state:i,preventScrollReset:c,relative:u,viewTransition:h})}},[m,p,g,s,i,a,r,c,u,h])}function qv(r){Ea(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let a=v.useRef(xd(r)),s=v.useRef(!1),i=ta(),c=v.useMemo(()=>xv(i.search,s.current?null:a.current),[i.search]),u=Cs(),h=v.useCallback((p,m)=>{const g=xd(typeof p=="function"?p(new URLSearchParams(c)):p);s.current=!0,u("?"+g,m)},[u,c]);return[c,h]}var Pv=0,Iv=()=>`__${String(++Pv)}__`;function Yv(){let{router:r}=xg("useSubmit"),{basename:a}=v.useContext(Ba),s=ov();return v.useCallback(async(i,c={})=>{let{action:u,method:h,encType:p,formData:m,body:g}=wv(i,a);if(c.navigate===!1){let y=c.fetcherKey||Iv();await r.fetch(y,s,c.action||u,{preventScrollReset:c.preventScrollReset,formData:m,body:g,formMethod:c.method||h,formEncType:c.encType||p,flushSync:c.flushSync})}else await r.navigate(c.action||u,{preventScrollReset:c.preventScrollReset,formData:m,body:g,formMethod:c.method||h,formEncType:c.encType||p,replace:c.replace,state:c.state,fromRouteId:s,flushSync:c.flushSync,viewTransition:c.viewTransition})},[r,a,s])}function Gv(r,{relative:a}={}){let{basename:s}=v.useContext(Ba),i=v.useContext(dr);Qe(i,"useFormAction must be used inside a RouteContext");let[c]=i.matches.slice(-1),u={...Xi(r||".",{relative:a})},h=ta();if(r==null){u.search=h.search;let p=new URLSearchParams(u.search),m=p.getAll("index");if(m.some(y=>y==="")){p.delete("index"),m.filter(x=>x).forEach(x=>p.append("index",x));let y=p.toString();u.search=y?`?${y}`:""}}return(!r||r===".")&&c.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(u.pathname=u.pathname==="/"?s:cr([s,u.pathname])),Di(u)}function Vv(r,{relative:a}={}){let s=v.useContext(cg);Qe(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=xg("useViewTransitionState"),c=Xi(r,{relative:a});if(!s.isTransitioning)return!1;let u=ur(s.currentLocation.pathname,i)||s.currentLocation.pathname,h=ur(s.nextLocation.pathname,i)||s.nextLocation.pathname;return Sl(c.pathname,h)!=null||Sl(c.pathname,u)!=null}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Kv=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,s,i)=>i?i.toUpperCase():s.toLowerCase()),Jp=r=>{const a=Kv(r);return a.charAt(0).toUpperCase()+a.slice(1)},yg=(...r)=>r.filter((a,s,i)=>!!a&&a.trim()!==""&&i.indexOf(a)===s).join(" ").trim(),Fv=r=>{for(const a in r)if(a.startsWith("aria-")||a==="role"||a==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Jv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=v.forwardRef(({color:r="currentColor",size:a=24,strokeWidth:s=2,absoluteStrokeWidth:i,className:c="",children:u,iconNode:h,...p},m)=>v.createElement("svg",{ref:m,...Jv,width:a,height:a,stroke:r,strokeWidth:i?Number(s)*24/Number(a):s,className:yg("lucide",c),...!u&&!Fv(p)&&{"aria-hidden":"true"},...p},[...h.map(([g,y])=>v.createElement(g,y)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=(r,a)=>{const s=v.forwardRef(({className:i,...c},u)=>v.createElement(Wv,{ref:u,iconNode:a,className:yg(`lucide-${Xv(Jp(r))}`,`lucide-${r}`,i),...c}));return s.displayName=Jp(r),s};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Ki=he("arrow-right",Zv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],e2=he("arrow-up",Qv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],a2=he("award",t2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],vg=he("calendar",r2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],jl=he("camera",n2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Pr=he("check",s2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],gn=he("chevron-down",i2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],l2=he("circle-alert",o2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]],Wp=he("circle-user",c2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],d2=he("clipboard-list",u2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],Zp=he("code-xml",h2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],p2=he("copy",f2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],g2=he("cpu",m2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],x2=he("earth",b2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Mi=he("eye-off",y2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Ui=he("eye",v2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],k2=he("facebook",w2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=[["path",{d:"M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",key:"1jaruq"}]],j2=he("flag",S2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],E2=he("graduation-cap",_2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Rl=he("heart",N2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],T2=he("house",C2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],R2=he("info",A2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],O2=he("instagram",z2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],wg=he("layers",D2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],Qp=he("layout-dashboard",M2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Pd=he("lightbulb",U2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],zl=he("linkedin",L2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],em=he("loader-circle",B2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Vr=he("lock",H2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],tm=he("log-out",$2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Fi=he("mail",q2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],I2=he("map-pin",P2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=[["path",{d:"M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",key:"q8bfy3"}],["path",{d:"M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14",key:"1853fq"}],["path",{d:"M8 6v8",key:"15ugcq"}]],G2=he("megaphone",Y2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],X2=he("menu",V2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],F2=he("moon",K2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=[["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",key:"39pd36"}],["rect",{width:"8",height:"4",x:"10",y:"6",rx:"1",key:"aywv1n"}]],W2=he("newspaper",J2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],rd=he("pencil",Z2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],kg=he("phone",Q2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],Sg=he("rocket",e1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],am=he("settings",t1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],r1=he("shield-check",a1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],jg=he("sparkles",n1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],_g=he("star",s1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],o1=he("sun",i1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],c1=he("trending-up",l1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],d1=he("user-check",u1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],yd=he("user-plus",h1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],rm=he("user",f1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Ts=he("users",p1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]],g1=he("wallet",m1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],x1=he("x",b1),Li="/IEEE-ECU-SB-Website/assets/Picture2-removebg-preview-mrGrxJhm.png",vd="/IEEE-ECU-SB-Website/assets/unnameddadawdadfxzffbcvxb%20(4)-C1XTPqJP.png";function Ol(r,a){var s={};for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&a.indexOf(i)<0&&(s[i]=r[i]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,i=Object.getOwnPropertySymbols(r);c<i.length;c++)a.indexOf(i[c])<0&&Object.prototype.propertyIsEnumerable.call(r,i[c])&&(s[i[c]]=r[i[c]]);return s}function y1(r,a,s,i){function c(u){return u instanceof s?u:new s(function(h){h(u)})}return new(s||(s=Promise))(function(u,h){function p(y){try{g(i.next(y))}catch(x){h(x)}}function m(y){try{g(i.throw(y))}catch(x){h(x)}}function g(y){y.done?u(y.value):c(y.value).then(p,m)}g((i=i.apply(r,a||[])).next())})}const v1=r=>r?(...a)=>r(...a):(...a)=>fetch(...a);class Id extends Error{constructor(a,s="FunctionsError",i){super(a),this.name=s,this.context=i}toJSON(){return{name:this.name,message:this.message,context:this.context}}}class w1 extends Id{constructor(a){super("Failed to send a request to the Edge Function","FunctionsFetchError",a)}}class nm extends Id{constructor(a){super("Relay Error invoking the Edge Function","FunctionsRelayError",a)}}class sm extends Id{constructor(a){super("Edge Function returned a non-2xx status code","FunctionsHttpError",a)}}var wd;(function(r){r.Any="any",r.ApNortheast1="ap-northeast-1",r.ApNortheast2="ap-northeast-2",r.ApSouth1="ap-south-1",r.ApSoutheast1="ap-southeast-1",r.ApSoutheast2="ap-southeast-2",r.CaCentral1="ca-central-1",r.EuCentral1="eu-central-1",r.EuWest1="eu-west-1",r.EuWest2="eu-west-2",r.EuWest3="eu-west-3",r.SaEast1="sa-east-1",r.UsEast1="us-east-1",r.UsWest1="us-west-1",r.UsWest2="us-west-2"})(wd||(wd={}));class k1{constructor(a,{headers:s={},customFetch:i,region:c=wd.Any}={}){this.url=a,this.headers=s,this.region=c,this.fetch=v1(i)}setAuth(a){this.headers.Authorization=`Bearer ${a}`}invoke(a){return y1(this,arguments,void 0,function*(s,i={}){var c;let u,h;try{const{headers:p,method:m,body:g,signal:y,timeout:x}=i;let S={},{region:k}=i;k||(k=this.region);const T=new URL(`${this.url}/${s}`);k&&k!=="any"&&(S["x-region"]=k,T.searchParams.set("forceFunctionRegion",k));let C;g&&(p&&!Object.prototype.hasOwnProperty.call(p,"Content-Type")||!p)?typeof Blob<"u"&&g instanceof Blob||g instanceof ArrayBuffer?(S["Content-Type"]="application/octet-stream",C=g):typeof g=="string"?(S["Content-Type"]="text/plain",C=g):typeof FormData<"u"&&g instanceof FormData?C=g:(S["Content-Type"]="application/json",C=JSON.stringify(g)):g&&typeof g!="string"&&!(typeof Blob<"u"&&g instanceof Blob)&&!(g instanceof ArrayBuffer)&&!(typeof FormData<"u"&&g instanceof FormData)?C=JSON.stringify(g):C=g;let _=y;x&&(h=new AbortController,u=setTimeout(()=>h.abort(),x),y?(_=h.signal,y.addEventListener("abort",()=>h.abort())):_=h.signal);const z=yield this.fetch(T.toString(),{method:m||"POST",headers:Object.assign(Object.assign(Object.assign({},S),this.headers),p),body:C,signal:_}).catch(G=>{throw new w1(G)}),M=z.headers.get("x-relay-error");if(M&&M==="true")throw new nm(z);if(!z.ok)throw new sm(z);let R=((c=z.headers.get("Content-Type"))!==null&&c!==void 0?c:"text/plain").split(";")[0].trim(),V;return R==="application/json"?V=yield z.json():R==="application/octet-stream"||R==="application/pdf"?V=yield z.blob():R==="text/event-stream"?V=z:R==="multipart/form-data"?V=yield z.formData():V=yield z.text(),{data:V,error:null,response:z}}catch(p){return{data:null,error:p,response:p instanceof sm||p instanceof nm?p.context:void 0}}finally{u&&clearTimeout(u)}})}}const Eg=3,im=r=>Math.min(1e3*2**r,3e4),S1=[520,503],Ng=["GET","HEAD","OPTIONS"];var j1=class extends Error{constructor(r){super(r.message),this.name="PostgrestError",this.details=r.details,this.hint=r.hint,this.code=r.code}toJSON(){return{name:this.name,message:this.message,details:this.details,hint:this.hint,code:this.code}}};function om(r,a){return new Promise(s=>{if(a?.aborted){s();return}const i=setTimeout(()=>{a?.removeEventListener("abort",c),s()},r);function c(){clearTimeout(i),s()}a?.addEventListener("abort",c)})}function _1(r,a,s,i){return!(!i||s>=Eg||!Ng.includes(r)||!S1.includes(a))}var E1=class{constructor(r){var a,s,i,c,u;this.shouldThrowOnError=!1,this.retryEnabled=!0,this.method=r.method,this.url=r.url,this.headers=new Headers(r.headers),this.schema=r.schema,this.body=r.body,this.shouldThrowOnError=(a=r.shouldThrowOnError)!==null&&a!==void 0?a:!1,this.signal=r.signal,this.isMaybeSingle=(s=r.isMaybeSingle)!==null&&s!==void 0?s:!1,this.shouldStripNulls=(i=r.shouldStripNulls)!==null&&i!==void 0?i:!1,this.urlLengthLimit=(c=r.urlLengthLimit)!==null&&c!==void 0?c:8e3,this.retryEnabled=(u=r.retry)!==null&&u!==void 0?u:!0,r.fetch?this.fetch=r.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}stripNulls(){if(this.headers.get("Accept")==="text/csv")throw new Error("stripNulls() cannot be used with csv()");return this.shouldStripNulls=!0,this}setHeader(r,a){return this.headers=new Headers(this.headers),this.headers.set(r,a),this}retry(r){return this.retryEnabled=r,this}then(r,a){var s=this;if(this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json"),this.shouldStripNulls){const h=this.headers.get("Accept");h==="application/vnd.pgrst.object+json"?this.headers.set("Accept","application/vnd.pgrst.object+json;nulls=stripped"):(!h||h==="application/json")&&this.headers.set("Accept","application/vnd.pgrst.array+json;nulls=stripped")}const i=this.fetch;let u=(async()=>{let h=0;for(;;){const g=new Headers(s.headers);h>0&&g.set("X-Retry-Count",String(h));let y;try{y=await i(s.url.toString(),{method:s.method,headers:g,body:JSON.stringify(s.body),signal:s.signal})}catch(x){if(x?.name==="AbortError"||x?.code==="ABORT_ERR"||!Ng.includes(s.method))throw x;if(s.retryEnabled&&h<Eg){const S=im(h);h++,await om(S,s.signal);continue}throw x}if(_1(s.method,y.status,h,s.retryEnabled)){var p,m;const x=(p=(m=y.headers)===null||m===void 0?void 0:m.get("Retry-After"))!==null&&p!==void 0?p:null,S=x!==null?Math.max(0,parseInt(x,10)||0)*1e3:im(h);await y.text(),h++,await om(S,s.signal);continue}return await s.processResponse(y)}})();return this.shouldThrowOnError||(u=u.catch(h=>{var p;let m="",g="",y="";const x=h?.cause;if(x){var S,k,T,C;const M=(S=x?.message)!==null&&S!==void 0?S:"",R=(k=x?.code)!==null&&k!==void 0?k:"";m=`${(T=h?.name)!==null&&T!==void 0?T:"FetchError"}: ${h?.message}`,m+=`

Caused by: ${(C=x?.name)!==null&&C!==void 0?C:"Error"}: ${M}`,R&&(m+=` (${R})`),x?.stack&&(m+=`
${x.stack}`)}else{var _;m=(_=h?.stack)!==null&&_!==void 0?_:""}const z=this.url.toString().length;return h?.name==="AbortError"||h?.code==="ABORT_ERR"?(y="",g="Request was aborted (timeout or manual cancellation)",z>this.urlLengthLimit&&(g+=`. Note: Your request URL is ${z} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):(x?.name==="HeadersOverflowError"||x?.code==="UND_ERR_HEADERS_OVERFLOW")&&(y="",g="HTTP headers exceeded server limits (typically 16KB)",z>this.urlLengthLimit&&(g+=`. Your request URL is ${z} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{success:!1,error:{message:`${(p=h?.name)!==null&&p!==void 0?p:"FetchError"}: ${h?.message}`,details:m,hint:g,code:y},data:null,count:null,status:0,statusText:""}})),u.then(r,a)}async processResponse(r){var a=this;let s=null,i=null,c=null,u=r.status,h=r.statusText;if(r.ok){var p,m;if(a.method!=="HEAD"){var g;const S=await r.text();S===""||(a.headers.get("Accept")==="text/csv"||a.headers.get("Accept")&&(!((g=a.headers.get("Accept"))===null||g===void 0)&&g.includes("application/vnd.pgrst.plan+text"))?i=S:i=JSON.parse(S))}const y=(p=a.headers.get("Prefer"))===null||p===void 0?void 0:p.match(/count=(exact|planned|estimated)/),x=(m=r.headers.get("content-range"))===null||m===void 0?void 0:m.split("/");y&&x&&x.length>1&&(c=parseInt(x[1])),a.isMaybeSingle&&Array.isArray(i)&&(i.length>1?(s={code:"PGRST116",details:`Results contain ${i.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},i=null,c=null,u=406,h="Not Acceptable"):i.length===1?i=i[0]:i=null)}else{const y=await r.text();try{s=JSON.parse(y),Array.isArray(s)&&r.status===404&&(i=[],s=null,u=200,h="OK")}catch{r.status===404&&y===""?(u=204,h="No Content"):s={message:y}}if(s&&a.shouldThrowOnError)throw new j1(s)}return{success:s===null,error:s,data:i,count:c,status:u,statusText:h}}returns(){return this}overrideTypes(){return this}},N1=class extends E1{select(r){let a=!1;const s=(r??"*").split("").map(i=>/\s/.test(i)&&!a?"":(i==='"'&&(a=!a),i)).join("");return this.url.searchParams.set("select",s),this.headers.append("Prefer","return=representation"),this}order(r,{ascending:a=!0,nullsFirst:s,foreignTable:i,referencedTable:c=i}={}){const u=c?`${c}.order`:"order",h=this.url.searchParams.get(u);return this.url.searchParams.set(u,`${h?`${h},`:""}${r}.${a?"asc":"desc"}${s===void 0?"":s?".nullsfirst":".nullslast"}`),this}limit(r,{foreignTable:a,referencedTable:s=a}={}){const i=typeof s>"u"?"limit":`${s}.limit`;return this.url.searchParams.set(i,`${r}`),this}range(r,a,{foreignTable:s,referencedTable:i=s}={}){const c=typeof i>"u"?"offset":`${i}.offset`,u=typeof i>"u"?"limit":`${i}.limit`;return this.url.searchParams.set(c,`${r}`),this.url.searchParams.set(u,`${a-r+1}`),this}abortSignal(r){return this.signal=r,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:r=!1,verbose:a=!1,settings:s=!1,buffers:i=!1,wal:c=!1,format:u="text"}={}){var h;const p=[r?"analyze":null,a?"verbose":null,s?"settings":null,i?"buffers":null,c?"wal":null].filter(Boolean).join("|"),m=(h=this.headers.get("Accept"))!==null&&h!==void 0?h:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${u}; for="${m}"; options=${p};`),u==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(r){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${r}`),this}};const lm=new RegExp("[,()]");var bs=class extends N1{eq(r,a){return this.url.searchParams.append(r,`eq.${a}`),this}neq(r,a){return this.url.searchParams.append(r,`neq.${a}`),this}gt(r,a){return this.url.searchParams.append(r,`gt.${a}`),this}gte(r,a){return this.url.searchParams.append(r,`gte.${a}`),this}lt(r,a){return this.url.searchParams.append(r,`lt.${a}`),this}lte(r,a){return this.url.searchParams.append(r,`lte.${a}`),this}like(r,a){return this.url.searchParams.append(r,`like.${a}`),this}likeAllOf(r,a){return this.url.searchParams.append(r,`like(all).{${a.join(",")}}`),this}likeAnyOf(r,a){return this.url.searchParams.append(r,`like(any).{${a.join(",")}}`),this}ilike(r,a){return this.url.searchParams.append(r,`ilike.${a}`),this}ilikeAllOf(r,a){return this.url.searchParams.append(r,`ilike(all).{${a.join(",")}}`),this}ilikeAnyOf(r,a){return this.url.searchParams.append(r,`ilike(any).{${a.join(",")}}`),this}regexMatch(r,a){return this.url.searchParams.append(r,`match.${a}`),this}regexIMatch(r,a){return this.url.searchParams.append(r,`imatch.${a}`),this}is(r,a){return this.url.searchParams.append(r,`is.${a}`),this}isDistinct(r,a){return this.url.searchParams.append(r,`isdistinct.${a}`),this}in(r,a){const s=Array.from(new Set(a)).map(i=>typeof i=="string"&&lm.test(i)?`"${i}"`:`${i}`).join(",");return this.url.searchParams.append(r,`in.(${s})`),this}notIn(r,a){const s=Array.from(new Set(a)).map(i=>typeof i=="string"&&lm.test(i)?`"${i}"`:`${i}`).join(",");return this.url.searchParams.append(r,`not.in.(${s})`),this}contains(r,a){return typeof a=="string"?this.url.searchParams.append(r,`cs.${a}`):Array.isArray(a)?this.url.searchParams.append(r,`cs.{${a.join(",")}}`):this.url.searchParams.append(r,`cs.${JSON.stringify(a)}`),this}containedBy(r,a){return typeof a=="string"?this.url.searchParams.append(r,`cd.${a}`):Array.isArray(a)?this.url.searchParams.append(r,`cd.{${a.join(",")}}`):this.url.searchParams.append(r,`cd.${JSON.stringify(a)}`),this}rangeGt(r,a){return this.url.searchParams.append(r,`sr.${a}`),this}rangeGte(r,a){return this.url.searchParams.append(r,`nxl.${a}`),this}rangeLt(r,a){return this.url.searchParams.append(r,`sl.${a}`),this}rangeLte(r,a){return this.url.searchParams.append(r,`nxr.${a}`),this}rangeAdjacent(r,a){return this.url.searchParams.append(r,`adj.${a}`),this}overlaps(r,a){return typeof a=="string"?this.url.searchParams.append(r,`ov.${a}`):this.url.searchParams.append(r,`ov.{${a.join(",")}}`),this}textSearch(r,a,{config:s,type:i}={}){let c="";i==="plain"?c="pl":i==="phrase"?c="ph":i==="websearch"&&(c="w");const u=s===void 0?"":`(${s})`;return this.url.searchParams.append(r,`${c}fts${u}.${a}`),this}match(r){return Object.entries(r).filter(([a,s])=>s!==void 0).forEach(([a,s])=>{this.url.searchParams.append(a,`eq.${s}`)}),this}not(r,a,s){return this.url.searchParams.append(r,`not.${a}.${s}`),this}or(r,{foreignTable:a,referencedTable:s=a}={}){const i=s?`${s}.or`:"or";return this.url.searchParams.append(i,`(${r})`),this}filter(r,a,s){return this.url.searchParams.append(r,`${a}.${s}`),this}},C1=class{constructor(r,{headers:a={},schema:s,fetch:i,urlLengthLimit:c=8e3,retry:u}){this.url=r,this.headers=new Headers(a),this.schema=s,this.fetch=i,this.urlLengthLimit=c,this.retry=u}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(r,a){const{head:s=!1,count:i}=a??{},c=s?"HEAD":"GET";let u=!1;const h=(r??"*").split("").map(g=>/\s/.test(g)&&!u?"":(g==='"'&&(u=!u),g)).join(""),{url:p,headers:m}=this.cloneRequestState();return p.searchParams.set("select",h),i&&m.append("Prefer",`count=${i}`),new bs({method:c,url:p,headers:m,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}insert(r,{count:a,defaultToNull:s=!0}={}){var i;const c="POST",{url:u,headers:h}=this.cloneRequestState();if(a&&h.append("Prefer",`count=${a}`),s||h.append("Prefer","missing=default"),Array.isArray(r)){const p=r.reduce((m,g)=>m.concat(Object.keys(g)),[]);if(p.length>0){const m=[...new Set(p)].map(g=>`"${g}"`);u.searchParams.set("columns",m.join(","))}}return new bs({method:c,url:u,headers:h,schema:this.schema,body:r,fetch:(i=this.fetch)!==null&&i!==void 0?i:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}upsert(r,{onConflict:a,ignoreDuplicates:s=!1,count:i,defaultToNull:c=!0}={}){var u;const h="POST",{url:p,headers:m}=this.cloneRequestState();if(m.append("Prefer",`resolution=${s?"ignore":"merge"}-duplicates`),a!==void 0&&p.searchParams.set("on_conflict",a),i&&m.append("Prefer",`count=${i}`),c||m.append("Prefer","missing=default"),Array.isArray(r)){const g=r.reduce((y,x)=>y.concat(Object.keys(x)),[]);if(g.length>0){const y=[...new Set(g)].map(x=>`"${x}"`);p.searchParams.set("columns",y.join(","))}}return new bs({method:h,url:p,headers:m,schema:this.schema,body:r,fetch:(u=this.fetch)!==null&&u!==void 0?u:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}update(r,{count:a}={}){var s;const i="PATCH",{url:c,headers:u}=this.cloneRequestState();return a&&u.append("Prefer",`count=${a}`),new bs({method:i,url:c,headers:u,schema:this.schema,body:r,fetch:(s=this.fetch)!==null&&s!==void 0?s:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}delete({count:r}={}){var a;const s="DELETE",{url:i,headers:c}=this.cloneRequestState();return r&&c.append("Prefer",`count=${r}`),new bs({method:s,url:i,headers:c,schema:this.schema,fetch:(a=this.fetch)!==null&&a!==void 0?a:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};function Bi(r){"@babel/helpers - typeof";return Bi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},Bi(r)}function T1(r,a){if(Bi(r)!="object"||!r)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var i=s.call(r,a);if(Bi(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(r)}function A1(r){var a=T1(r,"string");return Bi(a)=="symbol"?a:a+""}function R1(r,a,s){return(a=A1(a))in r?Object.defineProperty(r,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[a]=s,r}function cm(r,a){var s=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);a&&(i=i.filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable})),s.push.apply(s,i)}return s}function dl(r){for(var a=1;a<arguments.length;a++){var s=arguments[a]!=null?arguments[a]:{};a%2?cm(Object(s),!0).forEach(function(i){R1(r,i,s[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(s)):cm(Object(s)).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(s,i))})}return r}var z1=class Cg{constructor(a,{headers:s={},schema:i,fetch:c,timeout:u,urlLengthLimit:h=8e3,retry:p}={}){this.url=a,this.headers=new Headers(s),this.schemaName=i,this.urlLengthLimit=h;const m=c??globalThis.fetch;u!==void 0&&u>0?this.fetch=(g,y)=>{const x=new AbortController,S=setTimeout(()=>x.abort(),u),k=y?.signal;if(k){if(k.aborted)return clearTimeout(S),m(g,y);const T=()=>{clearTimeout(S),x.abort()};return k.addEventListener("abort",T,{once:!0}),m(g,dl(dl({},y),{},{signal:x.signal})).finally(()=>{clearTimeout(S),k.removeEventListener("abort",T)})}return m(g,dl(dl({},y),{},{signal:x.signal})).finally(()=>clearTimeout(S))}:this.fetch=m,this.retry=p}from(a){if(!a||typeof a!="string"||a.trim()==="")throw new Error("Invalid relation name: relation must be a non-empty string.");return new C1(new URL(`${this.url}/${a}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}schema(a){return new Cg(this.url,{headers:this.headers,schema:a,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}rpc(a,s={},{head:i=!1,get:c=!1,count:u}={}){var h;let p;const m=new URL(`${this.url}/rpc/${a}`);let g;const y=k=>k!==null&&typeof k=="object"&&(!Array.isArray(k)||k.some(y)),x=i&&Object.values(s).some(y);x?(p="POST",g=s):i||c?(p=i?"HEAD":"GET",Object.entries(s).filter(([k,T])=>T!==void 0).map(([k,T])=>[k,Array.isArray(T)?`{${T.join(",")}}`:`${T}`]).forEach(([k,T])=>{m.searchParams.append(k,T)})):(p="POST",g=s);const S=new Headers(this.headers);return x?S.set("Prefer",u?`count=${u},return=minimal`:"return=minimal"):u&&S.set("Prefer",`count=${u}`),new bs({method:p,url:m,headers:S,schema:this.schemaName,body:g,fetch:(h=this.fetch)!==null&&h!==void 0?h:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};class O1{constructor(){}static detectEnvironment(){var a;if(typeof WebSocket<"u")return{type:"native",constructor:WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocket<"u")return{type:"native",constructor:globalThis.WebSocket};if(typeof global<"u"&&typeof global.WebSocket<"u")return{type:"native",constructor:global.WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&globalThis.EdgeRuntime||typeof navigator<"u"&&(!((a=navigator.userAgent)===null||a===void 0)&&a.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};const s=globalThis.process;if(s){const i=s.versions;if(i&&i.node){const c=i.node,u=parseInt(c.replace(/^v/,"").split(".")[0]);return u>=22?typeof globalThis.WebSocket<"u"?{type:"native",constructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${u} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${u} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const a=this.detectEnvironment();if(a.constructor)return a.constructor;let s=a.error||"WebSocket not supported in this environment.";throw a.workaround&&(s+=`

Suggested solution: ${a.workaround}`),new Error(s)}static isWebSocketSupported(){try{const a=this.detectEnvironment();return a.type==="native"||a.type==="ws"}catch{return!1}}}const D1="2.103.0",M1=`realtime-js/${D1}`,U1="1.0.0",Tg="2.0.0",L1=Tg,B1=1e4,H1=100,Yr={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},Ag={close:"phx_close",error:"phx_error",join:"phx_join",leave:"phx_leave",access_token:"access_token"},kd={connecting:"connecting",closing:"closing",closed:"closed"};class $1{constructor(a){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT="broadcast",this.allowedMetadataKeys=[],this.allowedMetadataKeys=a??[]}encode(a,s){if(a.event===this.BROADCAST_EVENT&&!(a.payload instanceof ArrayBuffer)&&typeof a.payload.event=="string")return s(this._binaryEncodeUserBroadcastPush(a));let i=[a.join_ref,a.ref,a.topic,a.event,a.payload];return s(JSON.stringify(i))}_binaryEncodeUserBroadcastPush(a){var s;return this._isArrayBuffer((s=a.payload)===null||s===void 0?void 0:s.payload)?this._encodeBinaryUserBroadcastPush(a):this._encodeJsonUserBroadcastPush(a)}_encodeBinaryUserBroadcastPush(a){var s,i;const c=(i=(s=a.payload)===null||s===void 0?void 0:s.payload)!==null&&i!==void 0?i:new ArrayBuffer(0);return this._encodeUserBroadcastPush(a,this.BINARY_ENCODING,c)}_encodeJsonUserBroadcastPush(a){var s,i;const c=(i=(s=a.payload)===null||s===void 0?void 0:s.payload)!==null&&i!==void 0?i:{},h=new TextEncoder().encode(JSON.stringify(c)).buffer;return this._encodeUserBroadcastPush(a,this.JSON_ENCODING,h)}_encodeUserBroadcastPush(a,s,i){var c,u;const h=a.topic,p=(c=a.ref)!==null&&c!==void 0?c:"",m=(u=a.join_ref)!==null&&u!==void 0?u:"",g=a.payload.event,y=this.allowedMetadataKeys?this._pick(a.payload,this.allowedMetadataKeys):{},x=Object.keys(y).length===0?"":JSON.stringify(y);if(m.length>255)throw new Error(`joinRef length ${m.length} exceeds maximum of 255`);if(p.length>255)throw new Error(`ref length ${p.length} exceeds maximum of 255`);if(h.length>255)throw new Error(`topic length ${h.length} exceeds maximum of 255`);if(g.length>255)throw new Error(`userEvent length ${g.length} exceeds maximum of 255`);if(x.length>255)throw new Error(`metadata length ${x.length} exceeds maximum of 255`);const S=this.USER_BROADCAST_PUSH_META_LENGTH+m.length+p.length+h.length+g.length+x.length,k=new ArrayBuffer(this.HEADER_LENGTH+S);let T=new DataView(k),C=0;T.setUint8(C++,this.KINDS.userBroadcastPush),T.setUint8(C++,m.length),T.setUint8(C++,p.length),T.setUint8(C++,h.length),T.setUint8(C++,g.length),T.setUint8(C++,x.length),T.setUint8(C++,s),Array.from(m,z=>T.setUint8(C++,z.charCodeAt(0))),Array.from(p,z=>T.setUint8(C++,z.charCodeAt(0))),Array.from(h,z=>T.setUint8(C++,z.charCodeAt(0))),Array.from(g,z=>T.setUint8(C++,z.charCodeAt(0))),Array.from(x,z=>T.setUint8(C++,z.charCodeAt(0)));var _=new Uint8Array(k.byteLength+i.byteLength);return _.set(new Uint8Array(k),0),_.set(new Uint8Array(i),k.byteLength),_.buffer}decode(a,s){if(this._isArrayBuffer(a)){let i=this._binaryDecode(a);return s(i)}if(typeof a=="string"){const i=JSON.parse(a),[c,u,h,p,m]=i;return s({join_ref:c,ref:u,topic:h,event:p,payload:m})}return s({})}_binaryDecode(a){const s=new DataView(a),i=s.getUint8(0),c=new TextDecoder;switch(i){case this.KINDS.userBroadcast:return this._decodeUserBroadcast(a,s,c)}}_decodeUserBroadcast(a,s,i){const c=s.getUint8(1),u=s.getUint8(2),h=s.getUint8(3),p=s.getUint8(4);let m=this.HEADER_LENGTH+4;const g=i.decode(a.slice(m,m+c));m=m+c;const y=i.decode(a.slice(m,m+u));m=m+u;const x=i.decode(a.slice(m,m+h));m=m+h;const S=a.slice(m,a.byteLength),k=p===this.JSON_ENCODING?JSON.parse(i.decode(S)):S,T={type:this.BROADCAST_EVENT,event:y,payload:k};return h>0&&(T.meta=JSON.parse(x)),{join_ref:null,ref:null,topic:g,event:this.BROADCAST_EVENT,payload:T}}_isArrayBuffer(a){var s;return a instanceof ArrayBuffer||((s=a?.constructor)===null||s===void 0?void 0:s.name)==="ArrayBuffer"}_pick(a,s){return!a||typeof a!="object"?{}:Object.fromEntries(Object.entries(a).filter(([i])=>s.includes(i)))}}var Ve;(function(r){r.abstime="abstime",r.bool="bool",r.date="date",r.daterange="daterange",r.float4="float4",r.float8="float8",r.int2="int2",r.int4="int4",r.int4range="int4range",r.int8="int8",r.int8range="int8range",r.json="json",r.jsonb="jsonb",r.money="money",r.numeric="numeric",r.oid="oid",r.reltime="reltime",r.text="text",r.time="time",r.timestamp="timestamp",r.timestamptz="timestamptz",r.timetz="timetz",r.tsrange="tsrange",r.tstzrange="tstzrange"})(Ve||(Ve={}));const um=(r,a,s={})=>{var i;const c=(i=s.skipTypes)!==null&&i!==void 0?i:[];return a?Object.keys(a).reduce((u,h)=>(u[h]=q1(h,r,a,c),u),{}):{}},q1=(r,a,s,i)=>{const c=a.find(p=>p.name===r),u=c?.type,h=s[r];return u&&!i.includes(u)?Rg(u,h):Sd(h)},Rg=(r,a)=>{if(r.charAt(0)==="_"){const s=r.slice(1,r.length);return G1(a,s)}switch(r){case Ve.bool:return P1(a);case Ve.float4:case Ve.float8:case Ve.int2:case Ve.int4:case Ve.int8:case Ve.numeric:case Ve.oid:return I1(a);case Ve.json:case Ve.jsonb:return Y1(a);case Ve.timestamp:return V1(a);case Ve.abstime:case Ve.date:case Ve.daterange:case Ve.int4range:case Ve.int8range:case Ve.money:case Ve.reltime:case Ve.text:case Ve.time:case Ve.timestamptz:case Ve.timetz:case Ve.tsrange:case Ve.tstzrange:return Sd(a);default:return Sd(a)}},Sd=r=>r,P1=r=>{switch(r){case"t":return!0;case"f":return!1;default:return r}},I1=r=>{if(typeof r=="string"){const a=parseFloat(r);if(!Number.isNaN(a))return a}return r},Y1=r=>{if(typeof r=="string")try{return JSON.parse(r)}catch{return r}return r},G1=(r,a)=>{if(typeof r!="string")return r;const s=r.length-1,i=r[s];if(r[0]==="{"&&i==="}"){let u;const h=r.slice(1,s);try{u=JSON.parse("["+h+"]")}catch{u=h?h.split(","):[]}return u.map(p=>Rg(a,p))}return r},V1=r=>typeof r=="string"?r.replace(" ","T"):r,zg=r=>{const a=new URL(r);return a.protocol=a.protocol.replace(/^ws/i,"http"),a.pathname=a.pathname.replace(/\/+$/,"").replace(/\/socket\/websocket$/i,"").replace(/\/socket$/i,"").replace(/\/websocket$/i,""),a.pathname===""||a.pathname==="/"?a.pathname="/api/broadcast":a.pathname=a.pathname+"/api/broadcast",a.href};var Ri=r=>typeof r=="function"?r:function(){return r},X1=typeof self<"u"?self:null,xs=typeof window<"u"?window:null,Ua=X1||xs||globalThis,K1="2.0.0",F1=1e4,J1=1e3,La={connecting:0,open:1,closing:2,closed:3},It={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},or={close:"phx_close",error:"phx_error",join:"phx_join",reply:"phx_reply",leave:"phx_leave"},jd={longpoll:"longpoll",websocket:"websocket"},W1={complete:4},_d="base64url.bearer.phx.",hl=class{constructor(r,a,s,i){this.channel=r,this.event=a,this.payload=s||function(){return{}},this.receivedResp=null,this.timeout=i,this.timeoutTimer=null,this.recHooks=[],this.sent=!1,this.ref=void 0}resend(r){this.timeout=r,this.reset(),this.send()}send(){this.hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(r,a){return this.hasReceived(r)&&a(this.receivedResp.response),this.recHooks.push({status:r,callback:a}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}destroy(){this.cancelRefEvent(),this.cancelTimeout()}matchReceive({status:r,response:a,_ref:s}){this.recHooks.filter(i=>i.status===r).forEach(i=>i.callback(a))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,r=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=r,this.matchReceive(r)}),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}hasReceived(r){return this.receivedResp&&this.receivedResp.status===r}trigger(r,a){this.channel.trigger(this.refEvent,{status:r,response:a})}},Og=class{constructor(r,a){this.callback=r,this.timerCalc=a,this.timer=void 0,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}},Z1=class{constructor(r,a,s){this.state=It.closed,this.topic=r,this.params=Ri(a||{}),this.socket=s,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new hl(this,or.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new Og(()=>{this.socket.isConnected()&&this.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()})),this.joinPush.receive("ok",()=>{this.state=It.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(i=>i.send()),this.pushBuffer=[]}),this.joinPush.receive("error",i=>{this.state=It.errored,this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,i),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.onClose(()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log("channel",`close ${this.topic}`),this.state=It.closed,this.socket.remove(this)}),this.onError(i=>{this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,i),this.isJoining()&&this.joinPush.reset(),this.state=It.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.joinPush.receive("timeout",()=>{this.socket.hasLogger()&&this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),new hl(this,or.leave,Ri({}),this.timeout).send(),this.state=It.errored,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.on(or.reply,(i,c)=>{this.trigger(this.replyEventName(c),i)})}join(r=this.timeout){if(this.joinedOnce)throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");return this.timeout=r,this.joinedOnce=!0,this.rejoin(),this.joinPush}teardown(){this.pushBuffer.forEach(r=>r.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=It.closed,this.bindings=[]}onClose(r){this.on(or.close,r)}onError(r){return this.on(or.error,a=>r(a))}on(r,a){let s=this.bindingRef++;return this.bindings.push({event:r,ref:s,callback:a}),s}off(r,a){this.bindings=this.bindings.filter(s=>!(s.event===r&&(typeof a>"u"||a===s.ref)))}canPush(){return this.socket.isConnected()&&this.isJoined()}push(r,a,s=this.timeout){if(a=a||{},!this.joinedOnce)throw new Error(`tried to push '${r}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let i=new hl(this,r,function(){return a},s);return this.canPush()?i.send():(i.startTimeout(),this.pushBuffer.push(i)),i}leave(r=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=It.leaving;let a=()=>{this.socket.hasLogger()&&this.socket.log("channel",`leave ${this.topic}`),this.trigger(or.close,"leave")},s=new hl(this,or.leave,Ri({}),r);return s.receive("ok",()=>a()).receive("timeout",()=>a()),s.send(),this.canPush()||s.trigger("ok",{}),s}onMessage(r,a,s){return a}filterBindings(r,a,s){return!0}isMember(r,a,s,i){return this.topic!==r?!1:i&&i!==this.joinRef()?(this.socket.hasLogger()&&this.socket.log("channel","dropping outdated message",{topic:r,event:a,payload:s,joinRef:i}),!1):!0}joinRef(){return this.joinPush.ref}rejoin(r=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=It.joining,this.joinPush.resend(r))}trigger(r,a,s,i){let c=this.onMessage(r,a,s,i);if(a&&!c)throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");let u=this.bindings.filter(h=>h.event===r&&this.filterBindings(h,a,s));for(let h=0;h<u.length;h++)u[h].callback(c,s,i||this.joinRef())}replyEventName(r){return`chan_reply_${r}`}isClosed(){return this.state===It.closed}isErrored(){return this.state===It.errored}isJoined(){return this.state===It.joined}isJoining(){return this.state===It.joining}isLeaving(){return this.state===It.leaving}},_l=class{static request(r,a,s,i,c,u,h){if(Ua.XDomainRequest){let p=new Ua.XDomainRequest;return this.xdomainRequest(p,r,a,i,c,u,h)}else if(Ua.XMLHttpRequest){let p=new Ua.XMLHttpRequest;return this.xhrRequest(p,r,a,s,i,c,u,h)}else{if(Ua.fetch&&Ua.AbortController)return this.fetchRequest(r,a,s,i,c,u,h);throw new Error("No suitable XMLHttpRequest implementation found")}}static fetchRequest(r,a,s,i,c,u,h){let p={method:r,headers:s,body:i},m=null;return c&&(m=new AbortController,setTimeout(()=>m.abort(),c),p.signal=m.signal),Ua.fetch(a,p).then(g=>g.text()).then(g=>this.parseJSON(g)).then(g=>h&&h(g)).catch(g=>{g.name==="AbortError"&&u?u():h&&h(null)}),m}static xdomainRequest(r,a,s,i,c,u,h){return r.timeout=c,r.open(a,s),r.onload=()=>{let p=this.parseJSON(r.responseText);h&&h(p)},u&&(r.ontimeout=u),r.onprogress=()=>{},r.send(i),r}static xhrRequest(r,a,s,i,c,u,h,p){r.open(a,s,!0),r.timeout=u;for(let[m,g]of Object.entries(i))r.setRequestHeader(m,g);return r.onerror=()=>p&&p(null),r.onreadystatechange=()=>{if(r.readyState===W1.complete&&p){let m=this.parseJSON(r.responseText);p(m)}},h&&(r.ontimeout=h),r.send(c),r}static parseJSON(r){if(!r||r==="")return null;try{return JSON.parse(r)}catch{return console&&console.log("failed to parse JSON response",r),null}}static serialize(r,a){let s=[];for(var i in r){if(!Object.prototype.hasOwnProperty.call(r,i))continue;let c=a?`${a}[${i}]`:i,u=r[i];typeof u=="object"?s.push(this.serialize(u,c)):s.push(encodeURIComponent(c)+"="+encodeURIComponent(u))}return s.join("&")}static appendParams(r,a){if(Object.keys(a).length===0)return r;let s=r.match(/\?/)?"&":"?";return`${r}${s}${this.serialize(a)}`}},Q1=r=>{let a="",s=new Uint8Array(r),i=s.byteLength;for(let c=0;c<i;c++)a+=String.fromCharCode(s[c]);return btoa(a)},cs=class{constructor(r,a){a&&a.length===2&&a[1].startsWith(_d)&&(this.authToken=atob(a[1].slice(_d.length))),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.reqs=new Set,this.awaitingBatchAck=!1,this.currentBatch=null,this.currentBatchTimer=null,this.batchBuffer=[],this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(r),this.readyState=La.connecting,setTimeout(()=>this.poll(),0)}normalizeEndpoint(r){return r.replace("ws://","http://").replace("wss://","https://").replace(new RegExp("(.*)/"+jd.websocket),"$1/"+jd.longpoll)}endpointURL(){return _l.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(r,a,s){this.close(r,a,s),this.readyState=La.connecting}ontimeout(){this.onerror("timeout"),this.closeAndRetry(1005,"timeout",!1)}isActive(){return this.readyState===La.open||this.readyState===La.connecting}poll(){const r={Accept:"application/json"};this.authToken&&(r["X-Phoenix-AuthToken"]=this.authToken),this.ajax("GET",r,null,()=>this.ontimeout(),a=>{if(a){var{status:s,token:i,messages:c}=a;if(s===410&&this.token!==null){this.onerror(410),this.closeAndRetry(3410,"session_gone",!1);return}this.token=i}else s=0;switch(s){case 200:c.forEach(u=>{setTimeout(()=>this.onmessage({data:u}),0)}),this.poll();break;case 204:this.poll();break;case 410:this.readyState=La.open,this.onopen({}),this.poll();break;case 403:this.onerror(403),this.close(1008,"forbidden",!1);break;case 0:case 500:this.onerror(500),this.closeAndRetry(1011,"internal server error",500);break;default:throw new Error(`unhandled poll status ${s}`)}})}send(r){typeof r!="string"&&(r=Q1(r)),this.currentBatch?this.currentBatch.push(r):this.awaitingBatchAck?this.batchBuffer.push(r):(this.currentBatch=[r],this.currentBatchTimer=setTimeout(()=>{this.batchSend(this.currentBatch),this.currentBatch=null},0))}batchSend(r){this.awaitingBatchAck=!0,this.ajax("POST",{"Content-Type":"application/x-ndjson"},r.join(`
`),()=>this.onerror("timeout"),a=>{this.awaitingBatchAck=!1,!a||a.status!==200?(this.onerror(a&&a.status),this.closeAndRetry(1011,"internal server error",!1)):this.batchBuffer.length>0&&(this.batchSend(this.batchBuffer),this.batchBuffer=[])})}close(r,a,s){for(let c of this.reqs)c.abort();this.readyState=La.closed;let i=Object.assign({code:1e3,reason:void 0,wasClean:!0},{code:r,reason:a,wasClean:s});this.batchBuffer=[],clearTimeout(this.currentBatchTimer),this.currentBatchTimer=null,typeof CloseEvent<"u"?this.onclose(new CloseEvent("close",i)):this.onclose(i)}ajax(r,a,s,i,c){let u,h=()=>{this.reqs.delete(u),i()};u=_l.request(r,this.endpointURL(),a,s,this.timeout,h,p=>{this.reqs.delete(u),this.isActive()&&c(p)}),this.reqs.add(u)}},e5=class Ti{constructor(a,s={}){let i=s.events||{state:"presence_state",diff:"presence_diff"};this.state={},this.pendingDiffs=[],this.channel=a,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(i.state,c=>{let{onJoin:u,onLeave:h,onSync:p}=this.caller;this.joinRef=this.channel.joinRef(),this.state=Ti.syncState(this.state,c,u,h),this.pendingDiffs.forEach(m=>{this.state=Ti.syncDiff(this.state,m,u,h)}),this.pendingDiffs=[],p()}),this.channel.on(i.diff,c=>{let{onJoin:u,onLeave:h,onSync:p}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(c):(this.state=Ti.syncDiff(this.state,c,u,h),p())})}onJoin(a){this.caller.onJoin=a}onLeave(a){this.caller.onLeave=a}onSync(a){this.caller.onSync=a}list(a){return Ti.list(this.state,a)}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}static syncState(a,s,i,c){let u=this.clone(a),h={},p={};return this.map(u,(m,g)=>{s[m]||(p[m]=g)}),this.map(s,(m,g)=>{let y=u[m];if(y){let x=g.metas.map(C=>C.phx_ref),S=y.metas.map(C=>C.phx_ref),k=g.metas.filter(C=>S.indexOf(C.phx_ref)<0),T=y.metas.filter(C=>x.indexOf(C.phx_ref)<0);k.length>0&&(h[m]=g,h[m].metas=k),T.length>0&&(p[m]=this.clone(y),p[m].metas=T)}else h[m]=g}),this.syncDiff(u,{joins:h,leaves:p},i,c)}static syncDiff(a,s,i,c){let{joins:u,leaves:h}=this.clone(s);return i||(i=function(){}),c||(c=function(){}),this.map(u,(p,m)=>{let g=a[p];if(a[p]=this.clone(m),g){let y=a[p].metas.map(S=>S.phx_ref),x=g.metas.filter(S=>y.indexOf(S.phx_ref)<0);a[p].metas.unshift(...x)}i(p,g,m)}),this.map(h,(p,m)=>{let g=a[p];if(!g)return;let y=m.metas.map(x=>x.phx_ref);g.metas=g.metas.filter(x=>y.indexOf(x.phx_ref)<0),c(p,g,m),g.metas.length===0&&delete a[p]}),a}static list(a,s){return s||(s=function(i,c){return c}),this.map(a,(i,c)=>s(i,c))}static map(a,s){return Object.getOwnPropertyNames(a).map(i=>s(i,a[i]))}static clone(a){return JSON.parse(JSON.stringify(a))}},fl={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(r,a){if(r.payload.constructor===ArrayBuffer)return a(this.binaryEncode(r));{let s=[r.join_ref,r.ref,r.topic,r.event,r.payload];return a(JSON.stringify(s))}},decode(r,a){if(r.constructor===ArrayBuffer)return a(this.binaryDecode(r));{let[s,i,c,u,h]=JSON.parse(r);return a({join_ref:s,ref:i,topic:c,event:u,payload:h})}},binaryEncode(r){let{join_ref:a,ref:s,event:i,topic:c,payload:u}=r,h=this.META_LENGTH+a.length+s.length+c.length+i.length,p=new ArrayBuffer(this.HEADER_LENGTH+h),m=new DataView(p),g=0;m.setUint8(g++,this.KINDS.push),m.setUint8(g++,a.length),m.setUint8(g++,s.length),m.setUint8(g++,c.length),m.setUint8(g++,i.length),Array.from(a,x=>m.setUint8(g++,x.charCodeAt(0))),Array.from(s,x=>m.setUint8(g++,x.charCodeAt(0))),Array.from(c,x=>m.setUint8(g++,x.charCodeAt(0))),Array.from(i,x=>m.setUint8(g++,x.charCodeAt(0)));var y=new Uint8Array(p.byteLength+u.byteLength);return y.set(new Uint8Array(p),0),y.set(new Uint8Array(u),p.byteLength),y.buffer},binaryDecode(r){let a=new DataView(r),s=a.getUint8(0),i=new TextDecoder;switch(s){case this.KINDS.push:return this.decodePush(r,a,i);case this.KINDS.reply:return this.decodeReply(r,a,i);case this.KINDS.broadcast:return this.decodeBroadcast(r,a,i)}},decodePush(r,a,s){let i=a.getUint8(1),c=a.getUint8(2),u=a.getUint8(3),h=this.HEADER_LENGTH+this.META_LENGTH-1,p=s.decode(r.slice(h,h+i));h=h+i;let m=s.decode(r.slice(h,h+c));h=h+c;let g=s.decode(r.slice(h,h+u));h=h+u;let y=r.slice(h,r.byteLength);return{join_ref:p,ref:null,topic:m,event:g,payload:y}},decodeReply(r,a,s){let i=a.getUint8(1),c=a.getUint8(2),u=a.getUint8(3),h=a.getUint8(4),p=this.HEADER_LENGTH+this.META_LENGTH,m=s.decode(r.slice(p,p+i));p=p+i;let g=s.decode(r.slice(p,p+c));p=p+c;let y=s.decode(r.slice(p,p+u));p=p+u;let x=s.decode(r.slice(p,p+h));p=p+h;let S=r.slice(p,r.byteLength),k={status:x,response:S};return{join_ref:m,ref:g,topic:y,event:or.reply,payload:k}},decodeBroadcast(r,a,s){let i=a.getUint8(1),c=a.getUint8(2),u=this.HEADER_LENGTH+2,h=s.decode(r.slice(u,u+i));u=u+i;let p=s.decode(r.slice(u,u+c));u=u+c;let m=r.slice(u,r.byteLength);return{join_ref:null,ref:null,topic:h,event:p,payload:m}}},t5=class{constructor(r,a={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.fallbackRef=null,this.timeout=a.timeout||F1,this.transport=a.transport||Ua.WebSocket||cs,this.conn=void 0,this.primaryPassedHealthCheck=!1,this.longPollFallbackMs=a.longPollFallbackMs,this.fallbackTimer=null,this.sessionStore=a.sessionStorage||Ua&&Ua.sessionStorage,this.establishedConnections=0,this.defaultEncoder=fl.encode.bind(fl),this.defaultDecoder=fl.decode.bind(fl),this.closeWasClean=!0,this.disconnecting=!1,this.binaryType=a.binaryType||"arraybuffer",this.connectClock=1,this.pageHidden=!1,this.encode=void 0,this.decode=void 0,this.transport!==cs?(this.encode=a.encode||this.defaultEncoder,this.decode=a.decode||this.defaultDecoder):(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder);let s=null;xs&&xs.addEventListener&&(xs.addEventListener("pagehide",i=>{this.conn&&(this.disconnect(),s=this.connectClock)}),xs.addEventListener("pageshow",i=>{s===this.connectClock&&(s=null,this.connect())}),xs.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?this.pageHidden=!0:(this.pageHidden=!1,!this.isConnected()&&!this.closeWasClean&&this.teardown(()=>this.connect()))})),this.heartbeatIntervalMs=a.heartbeatIntervalMs||3e4,this.autoSendHeartbeat=a.autoSendHeartbeat??!0,this.heartbeatCallback=a.heartbeatCallback??(()=>{}),this.rejoinAfterMs=i=>a.rejoinAfterMs?a.rejoinAfterMs(i):[1e3,2e3,5e3][i-1]||1e4,this.reconnectAfterMs=i=>a.reconnectAfterMs?a.reconnectAfterMs(i):[10,50,100,150,200,250,500,1e3,2e3][i-1]||5e3,this.logger=a.logger||null,!this.logger&&a.debug&&(this.logger=(i,c,u)=>{console.log(`${i}: ${c}`,u)}),this.longpollerTimeout=a.longpollerTimeout||2e4,this.params=Ri(a.params||{}),this.endPoint=`${r}/${jd.websocket}`,this.vsn=a.vsn||K1,this.heartbeatTimeoutTimer=null,this.heartbeatTimer=null,this.heartbeatSentAt=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new Og(()=>{if(this.pageHidden){this.log("Not reconnecting as page is hidden!"),this.teardown();return}this.teardown(async()=>{a.beforeReconnect&&await a.beforeReconnect(),this.connect()})},this.reconnectAfterMs),this.authToken=a.authToken}getLongPollTransport(){return cs}replaceTransport(r){this.connectClock++,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.conn&&(this.conn.close(),this.conn=null),this.transport=r}protocol(){return location.protocol.match(/^https/)?"wss":"ws"}endPointURL(){let r=_l.appendParams(_l.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return r.charAt(0)!=="/"?r:r.charAt(1)==="/"?`${this.protocol()}:${r}`:`${this.protocol()}://${location.host}${r}`}disconnect(r,a,s){this.connectClock++,this.disconnecting=!0,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.teardown(()=>{this.disconnecting=!1,r&&r()},a,s)}connect(r){r&&(console&&console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"),this.params=Ri(r)),!(this.conn&&!this.disconnecting)&&(this.longPollFallbackMs&&this.transport!==cs?this.connectWithFallback(cs,this.longPollFallbackMs):this.transportConnect())}log(r,a,s){this.logger&&this.logger(r,a,s)}hasLogger(){return this.logger!==null}onOpen(r){let a=this.makeRef();return this.stateChangeCallbacks.open.push([a,r]),a}onClose(r){let a=this.makeRef();return this.stateChangeCallbacks.close.push([a,r]),a}onError(r){let a=this.makeRef();return this.stateChangeCallbacks.error.push([a,r]),a}onMessage(r){let a=this.makeRef();return this.stateChangeCallbacks.message.push([a,r]),a}onHeartbeat(r){this.heartbeatCallback=r}ping(r){if(!this.isConnected())return!1;let a=this.makeRef(),s=Date.now();this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:a});let i=this.onMessage(c=>{c.ref===a&&(this.off([i]),r(Date.now()-s))});return!0}transportName(r){switch(r){case cs:return"LongPoll";default:return r.name}}transportConnect(){this.connectClock++,this.closeWasClean=!1;let r;this.authToken&&(r=["phoenix",`${_d}${btoa(this.authToken).replace(/=/g,"")}`]),this.conn=new this.transport(this.endPointURL(),r),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=a=>this.onConnError(a),this.conn.onmessage=a=>this.onConnMessage(a),this.conn.onclose=a=>this.onConnClose(a)}getSession(r){return this.sessionStore&&this.sessionStore.getItem(r)}storeSession(r,a){this.sessionStore&&this.sessionStore.setItem(r,a)}connectWithFallback(r,a=2500){clearTimeout(this.fallbackTimer);let s=!1,i=!0,c,u,h=this.transportName(r),p=m=>{this.log("transport",`falling back to ${h}...`,m),this.off([c,u]),i=!1,this.replaceTransport(r),this.transportConnect()};if(this.getSession(`phx:fallback:${h}`))return p("memorized");this.fallbackTimer=setTimeout(p,a),u=this.onError(m=>{this.log("transport","error",m),i&&!s&&(clearTimeout(this.fallbackTimer),p(m))}),this.fallbackRef&&this.off([this.fallbackRef]),this.fallbackRef=this.onOpen(()=>{if(s=!0,!i){let m=this.transportName(r);return this.primaryPassedHealthCheck||this.storeSession(`phx:fallback:${m}`,"true"),this.log("transport",`established ${m} fallback`)}clearTimeout(this.fallbackTimer),this.fallbackTimer=setTimeout(p,a),this.ping(m=>{this.log("transport","connected to primary after",m),this.primaryPassedHealthCheck=!0,clearTimeout(this.fallbackTimer)})}),this.transportConnect()}clearHeartbeats(){clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)}onConnOpen(){this.hasLogger()&&this.log("transport",`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.disconnecting=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.autoSendHeartbeat&&this.resetHeartbeat(),this.triggerStateCallbacks("open")}heartbeatTimeout(){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.hasLogger()&&this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(r){this.log("error","error in heartbeat callback",r)}this.triggerChanError(),this.closeWasClean=!1,this.teardown(()=>this.reconnectTimer.scheduleTimeout(),J1,"heartbeat timeout")}}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,this.clearHeartbeats(),this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}teardown(r,a,s){if(!this.conn)return r&&r();const i=this.conn;this.waitForBufferDone(i,()=>{a?i.close(a,s||""):i.close(),this.waitForSocketClosed(i,()=>{this.conn===i&&(this.conn.onopen=function(){},this.conn.onerror=function(){},this.conn.onmessage=function(){},this.conn.onclose=function(){},this.conn=null),r&&r()})})}waitForBufferDone(r,a,s=1){if(s===5||!r.bufferedAmount){a();return}setTimeout(()=>{this.waitForBufferDone(r,a,s+1)},150*s)}waitForSocketClosed(r,a,s=1){if(s===5||r.readyState===La.closed){a();return}setTimeout(()=>{this.waitForSocketClosed(r,a,s+1)},150*s)}onConnClose(r){this.conn&&(this.conn.onclose=()=>{}),this.hasLogger()&&this.log("transport","close",r),this.triggerChanError(),this.clearHeartbeats(),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.triggerStateCallbacks("close",r)}onConnError(r){this.hasLogger()&&this.log("transport",r);let a=this.transport,s=this.establishedConnections;this.triggerStateCallbacks("error",r,a,s),(a===this.transport||s>0)&&this.triggerChanError()}triggerChanError(){this.channels.forEach(r=>{r.isErrored()||r.isLeaving()||r.isClosed()||r.trigger(or.error)})}connectionState(){switch(this.conn&&this.conn.readyState){case La.connecting:return"connecting";case La.open:return"open";case La.closing:return"closing";default:return"closed"}}isConnected(){return this.connectionState()==="open"}remove(r){this.off(r.stateChangeRefs),this.channels=this.channels.filter(a=>a!==r)}off(r){for(let a in this.stateChangeCallbacks)this.stateChangeCallbacks[a]=this.stateChangeCallbacks[a].filter(([s])=>r.indexOf(s)===-1)}channel(r,a={}){let s=new Z1(r,a,this);return this.channels.push(s),s}push(r){if(this.hasLogger()){let{topic:a,event:s,payload:i,ref:c,join_ref:u}=r;this.log("push",`${a} ${s} (${u}, ${c})`,i)}this.isConnected()?this.encode(r,a=>this.conn.send(a)):this.sendBuffer.push(()=>this.encode(r,a=>this.conn.send(a)))}makeRef(){let r=this.ref+1;return r===this.ref?this.ref=0:this.ref=r,this.ref.toString()}sendHeartbeat(){if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(r){this.log("error","error in heartbeat callback",r)}return}if(this.pendingHeartbeatRef){this.heartbeatTimeout();return}this.pendingHeartbeatRef=this.makeRef(),this.heartbeatSentAt=Date.now(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(r){this.log("error","error in heartbeat callback",r)}this.heartbeatTimeoutTimer=setTimeout(()=>this.heartbeatTimeout(),this.heartbeatIntervalMs)}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(r=>r()),this.sendBuffer=[])}onConnMessage(r){this.decode(r.data,a=>{let{topic:s,event:i,payload:c,ref:u,join_ref:h}=a;if(u&&u===this.pendingHeartbeatRef){const p=this.heartbeatSentAt?Date.now()-this.heartbeatSentAt:void 0;this.clearHeartbeats();try{this.heartbeatCallback(c.status==="ok"?"ok":"error",p)}catch(m){this.log("error","error in heartbeat callback",m)}this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.autoSendHeartbeat&&(this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}this.hasLogger()&&this.log("receive",`${c.status||""} ${s} ${i} ${u&&"("+u+")"||""}`.trim(),c);for(let p=0;p<this.channels.length;p++){const m=this.channels[p];m.isMember(s,i,c,h)&&m.trigger(i,c,u,h)}this.triggerStateCallbacks("message",a)})}triggerStateCallbacks(r,...a){try{this.stateChangeCallbacks[r].forEach(([s,i])=>{try{i(...a)}catch(c){this.log("error",`error in ${r} callback`,c)}})}catch(s){this.log("error",`error triggering ${r} callbacks`,s)}}leaveOpenTopic(r){let a=this.channels.find(s=>s.topic===r&&(s.isJoined()||s.isJoining()));a&&(this.hasLogger()&&this.log("transport",`leaving duplicate topic "${r}"`),a.leave())}};class zi{constructor(a,s){const i=r5(s);this.presence=new e5(a.getChannel(),i),this.presence.onJoin((c,u,h)=>{const p=zi.onJoinPayload(c,u,h);a.getChannel().trigger("presence",p)}),this.presence.onLeave((c,u,h)=>{const p=zi.onLeavePayload(c,u,h);a.getChannel().trigger("presence",p)}),this.presence.onSync(()=>{a.getChannel().trigger("presence",{event:"sync"})})}get state(){return zi.transformState(this.presence.state)}static transformState(a){return a=a5(a),Object.getOwnPropertyNames(a).reduce((s,i)=>{const c=a[i];return s[i]=kl(c),s},{})}static onJoinPayload(a,s,i){const c=dm(s),u=kl(i);return{event:"join",key:a,currentPresences:c,newPresences:u}}static onLeavePayload(a,s,i){const c=dm(s),u=kl(i);return{event:"leave",key:a,currentPresences:c,leftPresences:u}}}function kl(r){return r.metas.map(a=>(a.presence_ref=a.phx_ref,delete a.phx_ref,delete a.phx_ref_prev,a))}function a5(r){return JSON.parse(JSON.stringify(r))}function r5(r){return r?.events&&{events:r.events}}function dm(r){return r?.metas?kl(r):[]}var hm;(function(r){r.SYNC="sync",r.JOIN="join",r.LEAVE="leave"})(hm||(hm={}));class n5{get state(){return this.presenceAdapter.state}constructor(a,s){this.channel=a,this.presenceAdapter=new zi(this.channel.channelAdapter,s)}}class s5{constructor(a,s,i){const c=i5(i);this.channel=a.getSocket().channel(s,c),this.socket=a}get state(){return this.channel.state}set state(a){this.channel.state=a}get joinedOnce(){return this.channel.joinedOnce}get joinPush(){return this.channel.joinPush}get rejoinTimer(){return this.channel.rejoinTimer}on(a,s){return this.channel.on(a,s)}off(a,s){this.channel.off(a,s)}subscribe(a){return this.channel.join(a)}unsubscribe(a){return this.channel.leave(a)}teardown(){this.channel.teardown()}onClose(a){this.channel.onClose(a)}onError(a){return this.channel.onError(a)}push(a,s,i){let c;try{c=this.channel.push(a,s,i)}catch{throw`tried to push '${a}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`}if(this.channel.pushBuffer.length>H1){const u=this.channel.pushBuffer.shift();u.cancelTimeout(),this.socket.log("channel",`discarded push due to buffer overflow: ${u.event}`,u.payload())}return c}updateJoinPayload(a){const s=this.channel.joinPush.payload();this.channel.joinPush.payload=()=>Object.assign(Object.assign({},s),a)}canPush(){return this.socket.isConnected()&&this.state===Yr.joined}isJoined(){return this.state===Yr.joined}isJoining(){return this.state===Yr.joining}isClosed(){return this.state===Yr.closed}isLeaving(){return this.state===Yr.leaving}updateFilterBindings(a){this.channel.filterBindings=a}updatePayloadTransform(a){this.channel.onMessage=a}getChannel(){return this.channel}}function i5(r){return{config:Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},r.config)}}var fm;(function(r){r.ALL="*",r.INSERT="INSERT",r.UPDATE="UPDATE",r.DELETE="DELETE"})(fm||(fm={}));var ks;(function(r){r.BROADCAST="broadcast",r.PRESENCE="presence",r.POSTGRES_CHANGES="postgres_changes",r.SYSTEM="system"})(ks||(ks={}));var lr;(function(r){r.SUBSCRIBED="SUBSCRIBED",r.TIMED_OUT="TIMED_OUT",r.CLOSED="CLOSED",r.CHANNEL_ERROR="CHANNEL_ERROR"})(lr||(lr={}));class Oi{get state(){return this.channelAdapter.state}set state(a){this.channelAdapter.state=a}get joinedOnce(){return this.channelAdapter.joinedOnce}get timeout(){return this.socket.timeout}get joinPush(){return this.channelAdapter.joinPush}get rejoinTimer(){return this.channelAdapter.rejoinTimer}constructor(a,s={config:{}},i){var c,u;if(this.topic=a,this.params=s,this.socket=i,this.bindings={},this.subTopic=a.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},s.config),this.channelAdapter=new s5(this.socket.socketAdapter,a,this.params),this.presence=new n5(this),this._onClose(()=>{this.socket._remove(this)}),this._updateFilterTransform(),this.broadcastEndpointURL=zg(this.socket.socketAdapter.endPointURL()),this.private=this.params.config.private||!1,!this.private&&(!((u=(c=this.params.config)===null||c===void 0?void 0:c.broadcast)===null||u===void 0)&&u.replay))throw`tried to use replay on public channel '${this.topic}'. It must be a private channel.`}subscribe(a,s=this.timeout){var i,c,u;if(this.socket.isConnected()||this.socket.connect(),this.channelAdapter.isClosed()){const{config:{broadcast:h,presence:p,private:m}}=this.params,g=(c=(i=this.bindings.postgres_changes)===null||i===void 0?void 0:i.map(k=>k.filter))!==null&&c!==void 0?c:[],y=!!this.bindings[ks.PRESENCE]&&this.bindings[ks.PRESENCE].length>0||((u=this.params.config.presence)===null||u===void 0?void 0:u.enabled)===!0,x={},S={broadcast:h,presence:Object.assign(Object.assign({},p),{enabled:y}),postgres_changes:g,private:m};this.socket.accessTokenValue&&(x.access_token=this.socket.accessTokenValue),this._onError(k=>{a?.(lr.CHANNEL_ERROR,k)}),this._onClose(()=>a?.(lr.CLOSED)),this.updateJoinPayload(Object.assign({config:S},x)),this._updateFilterMessage(),this.channelAdapter.subscribe(s).receive("ok",async({postgres_changes:k})=>{if(this.socket._isManualToken()||this.socket.setAuth(),k===void 0){a?.(lr.SUBSCRIBED);return}this._updatePostgresBindings(k,a)}).receive("error",k=>{this.state=Yr.errored,a?.(lr.CHANNEL_ERROR,new Error(JSON.stringify(Object.values(k).join(", ")||"error")))}).receive("timeout",()=>{a?.(lr.TIMED_OUT)})}return this}_updatePostgresBindings(a,s){var i;const c=this.bindings.postgres_changes,u=(i=c?.length)!==null&&i!==void 0?i:0,h=[];for(let p=0;p<u;p++){const m=c[p],{filter:{event:g,schema:y,table:x,filter:S}}=m,k=a&&a[p];if(k&&k.event===g&&Oi.isFilterValueEqual(k.schema,y)&&Oi.isFilterValueEqual(k.table,x)&&Oi.isFilterValueEqual(k.filter,S))h.push(Object.assign(Object.assign({},m),{id:k.id}));else{this.unsubscribe(),this.state=Yr.errored,s?.(lr.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=h,this.state!=Yr.errored&&s&&s(lr.SUBSCRIBED)}presenceState(){return this.presence.state}async track(a,s={}){return await this.send({type:"presence",event:"track",payload:a},s.timeout||this.timeout)}async untrack(a={}){return await this.send({type:"presence",event:"untrack"},a)}on(a,s,i){const c=this.channelAdapter.isJoined()||this.channelAdapter.isJoining(),u=a===ks.PRESENCE||a===ks.POSTGRES_CHANGES;if(c&&u)throw this.socket.log("channel",`cannot add \`${a}\` callbacks for ${this.topic} after \`subscribe()\`.`),new Error(`cannot add \`${a}\` callbacks for ${this.topic} after \`subscribe()\`.`);return this._on(a,s,i)}async httpSend(a,s,i={}){var c;if(s==null)return Promise.reject("Payload is required for httpSend()");const u={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(u.Authorization=`Bearer ${this.socket.accessTokenValue}`);const h={method:"POST",headers:u,body:JSON.stringify({messages:[{topic:this.subTopic,event:a,payload:s,private:this.private}]})},p=await this._fetchWithTimeout(this.broadcastEndpointURL,h,(c=i.timeout)!==null&&c!==void 0?c:this.timeout);if(p.status===202)return{success:!0};let m=p.statusText;try{const g=await p.json();m=g.error||g.message||m}catch{}return Promise.reject(new Error(m))}async send(a,s={}){var i,c;if(!this.channelAdapter.canPush()&&a.type==="broadcast"){console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");const{event:u,payload:h}=a,p={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(p.Authorization=`Bearer ${this.socket.accessTokenValue}`);const m={method:"POST",headers:p,body:JSON.stringify({messages:[{topic:this.subTopic,event:u,payload:h,private:this.private}]})};try{const g=await this._fetchWithTimeout(this.broadcastEndpointURL,m,(i=s.timeout)!==null&&i!==void 0?i:this.timeout);return await((c=g.body)===null||c===void 0?void 0:c.cancel()),g.ok?"ok":"error"}catch(g){return g.name==="AbortError"?"timed out":"error"}}else return new Promise(u=>{var h,p,m;const g=this.channelAdapter.push(a.type,a,s.timeout||this.timeout);a.type==="broadcast"&&!(!((m=(p=(h=this.params)===null||h===void 0?void 0:h.config)===null||p===void 0?void 0:p.broadcast)===null||m===void 0)&&m.ack)&&u("ok"),g.receive("ok",()=>u("ok")),g.receive("error",()=>u("error")),g.receive("timeout",()=>u("timed out"))})}updateJoinPayload(a){this.channelAdapter.updateJoinPayload(a)}async unsubscribe(a=this.timeout){return new Promise(s=>{this.channelAdapter.unsubscribe(a).receive("ok",()=>s("ok")).receive("timeout",()=>s("timed out")).receive("error",()=>s("error"))})}teardown(){this.channelAdapter.teardown()}async _fetchWithTimeout(a,s,i){const c=new AbortController,u=setTimeout(()=>c.abort(),i),h=await this.socket.fetch(a,Object.assign(Object.assign({},s),{signal:c.signal}));return clearTimeout(u),h}_on(a,s,i){const c=a.toLocaleLowerCase(),u=this.channelAdapter.on(a,i),h={type:c,filter:s,callback:i,ref:u};return this.bindings[c]?this.bindings[c].push(h):this.bindings[c]=[h],this._updateFilterMessage(),this}_onClose(a){this.channelAdapter.onClose(a)}_onError(a){this.channelAdapter.onError(a)}_updateFilterMessage(){this.channelAdapter.updateFilterBindings((a,s,i)=>{var c,u,h,p,m,g,y;const x=a.event.toLocaleLowerCase();if(this._notThisChannelEvent(x,i))return!1;const S=(c=this.bindings[x])===null||c===void 0?void 0:c.find(k=>k.ref===a.ref);if(!S)return!0;if(["broadcast","presence","postgres_changes"].includes(x))if("id"in S){const k=S.id,T=(u=S.filter)===null||u===void 0?void 0:u.event;return k&&((h=s.ids)===null||h===void 0?void 0:h.includes(k))&&(T==="*"||T?.toLocaleLowerCase()===((p=s.data)===null||p===void 0?void 0:p.type.toLocaleLowerCase()))}else{const k=(g=(m=S?.filter)===null||m===void 0?void 0:m.event)===null||g===void 0?void 0:g.toLocaleLowerCase();return k==="*"||k===((y=s?.event)===null||y===void 0?void 0:y.toLocaleLowerCase())}else return S.type.toLocaleLowerCase()===x})}_notThisChannelEvent(a,s){const{close:i,error:c,leave:u,join:h}=Ag;return s&&[i,c,u,h].includes(a)&&s!==this.joinPush.ref}_updateFilterTransform(){this.channelAdapter.updatePayloadTransform((a,s,i)=>{if(typeof s=="object"&&"ids"in s){const c=s.data,{schema:u,table:h,commit_timestamp:p,type:m,errors:g}=c;return Object.assign(Object.assign({},{schema:u,table:h,commit_timestamp:p,eventType:m,new:{},old:{},errors:g}),this._getPayloadRecords(c))}return s})}copyBindings(a){if(this.joinedOnce)throw new Error("cannot copy bindings into joined channel");for(const s in a.bindings)for(const i of a.bindings[s])this._on(i.type,i.filter,i.callback)}static isFilterValueEqual(a,s){return(a??void 0)===(s??void 0)}_getPayloadRecords(a){const s={new:{},old:{}};return(a.type==="INSERT"||a.type==="UPDATE")&&(s.new=um(a.columns,a.record)),(a.type==="UPDATE"||a.type==="DELETE")&&(s.old=um(a.columns,a.old_record)),s}}class o5{constructor(a,s){this.socket=new t5(a,s)}get timeout(){return this.socket.timeout}get endPoint(){return this.socket.endPoint}get transport(){return this.socket.transport}get heartbeatIntervalMs(){return this.socket.heartbeatIntervalMs}get heartbeatCallback(){return this.socket.heartbeatCallback}set heartbeatCallback(a){this.socket.heartbeatCallback=a}get heartbeatTimer(){return this.socket.heartbeatTimer}get pendingHeartbeatRef(){return this.socket.pendingHeartbeatRef}get reconnectTimer(){return this.socket.reconnectTimer}get vsn(){return this.socket.vsn}get encode(){return this.socket.encode}get decode(){return this.socket.decode}get reconnectAfterMs(){return this.socket.reconnectAfterMs}get sendBuffer(){return this.socket.sendBuffer}get stateChangeCallbacks(){return this.socket.stateChangeCallbacks}connect(){this.socket.connect()}disconnect(a,s,i,c=1e4){return new Promise(u=>{setTimeout(()=>u("timeout"),c),this.socket.disconnect(()=>{a(),u("ok")},s,i)})}push(a){this.socket.push(a)}log(a,s,i){this.socket.log(a,s,i)}makeRef(){return this.socket.makeRef()}onOpen(a){this.socket.onOpen(a)}onClose(a){this.socket.onClose(a)}onError(a){this.socket.onError(a)}onMessage(a){this.socket.onMessage(a)}isConnected(){return this.socket.isConnected()}isConnecting(){return this.socket.connectionState()==kd.connecting}isDisconnecting(){return this.socket.connectionState()==kd.closing}connectionState(){return this.socket.connectionState()}endPointURL(){return this.socket.endPointURL()}sendHeartbeat(){this.socket.sendHeartbeat()}getSocket(){return this.socket}}const l5={HEARTBEAT_INTERVAL:25e3},c5=[1e3,2e3,5e3,1e4],u5=1e4,d5=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class h5{get endPoint(){return this.socketAdapter.endPoint}get timeout(){return this.socketAdapter.timeout}get transport(){return this.socketAdapter.transport}get heartbeatCallback(){return this.socketAdapter.heartbeatCallback}get heartbeatIntervalMs(){return this.socketAdapter.heartbeatIntervalMs}get heartbeatTimer(){return this.worker?this._workerHeartbeatTimer:this.socketAdapter.heartbeatTimer}get pendingHeartbeatRef(){return this.worker?this._pendingWorkerHeartbeatRef:this.socketAdapter.pendingHeartbeatRef}get reconnectTimer(){return this.socketAdapter.reconnectTimer}get vsn(){return this.socketAdapter.vsn}get encode(){return this.socketAdapter.encode}get decode(){return this.socketAdapter.decode}get reconnectAfterMs(){return this.socketAdapter.reconnectAfterMs}get sendBuffer(){return this.socketAdapter.sendBuffer}get stateChangeCallbacks(){return this.socketAdapter.stateChangeCallbacks}constructor(a,s){var i;if(this.channels=new Array,this.accessTokenValue=null,this.accessToken=null,this.apiKey=null,this.httpEndpoint="",this.headers={},this.params={},this.ref=0,this.serializer=new $1,this._manuallySetToken=!1,this._authPromise=null,this._workerHeartbeatTimer=void 0,this._pendingWorkerHeartbeatRef=null,this._resolveFetch=u=>u?(...h)=>u(...h):(...h)=>fetch(...h),!(!((i=s?.params)===null||i===void 0)&&i.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=s.params.apikey;const c=this._initializeOptions(s);this.socketAdapter=new o5(a,c),this.httpEndpoint=zg(a),this.fetch=this._resolveFetch(s?.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.isConnected())){this.accessToken&&!this._authPromise&&this._setAuthSafely("connect"),this._setupConnectionHandlers();try{this.socketAdapter.connect()}catch(a){const s=a.message;throw s.includes("Node.js")?new Error(`${s}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):new Error(`WebSocket not available: ${s}`)}this._handleNodeJsRaceCondition()}}endpointURL(){return this.socketAdapter.endPointURL()}async disconnect(a,s){return this.isDisconnecting()?"ok":await this.socketAdapter.disconnect(()=>{clearInterval(this._workerHeartbeatTimer),this._terminateWorker()},a,s)}getChannels(){return this.channels}async removeChannel(a){const s=await a.unsubscribe();return s==="ok"&&a.teardown(),this.channels.length===0&&this.disconnect(),s}async removeAllChannels(){const a=this.channels.map(async i=>{const c=await i.unsubscribe();return i.teardown(),c}),s=await Promise.all(a);return this.disconnect(),s}log(a,s,i){this.socketAdapter.log(a,s,i)}connectionState(){return this.socketAdapter.connectionState()||kd.closed}isConnected(){return this.socketAdapter.isConnected()}isConnecting(){return this.socketAdapter.isConnecting()}isDisconnecting(){return this.socketAdapter.isDisconnecting()}channel(a,s={config:{}}){const i=`realtime:${a}`,c=this.getChannels().find(u=>u.topic===i);if(c)return c;{const u=new Oi(`realtime:${a}`,s,this);return this.channels.push(u),u}}push(a){this.socketAdapter.push(a)}async setAuth(a=null){this._authPromise=this._performAuth(a);try{await this._authPromise}finally{this._authPromise=null}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){this.socketAdapter.sendHeartbeat()}onHeartbeat(a){this.socketAdapter.heartbeatCallback=this._wrapHeartbeatCallback(a)}_makeRef(){return this.socketAdapter.makeRef()}_remove(a){this.channels=this.channels.filter(s=>s.topic!==a.topic)}async _performAuth(a=null){let s,i=!1;if(a)s=a,i=!0;else if(this.accessToken)try{s=await this.accessToken()}catch(c){this.log("error","Error fetching access token from callback",c),s=this.accessTokenValue}else s=this.accessTokenValue;i?this._manuallySetToken=!0:this.accessToken&&(this._manuallySetToken=!1),this.accessTokenValue!=s&&(this.accessTokenValue=s,this.channels.forEach(c=>{const u={access_token:s,version:M1};s&&c.updateJoinPayload(u),c.joinedOnce&&c.channelAdapter.isJoined()&&c.channelAdapter.push(Ag.access_token,{access_token:s})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(a="general"){this._isManualToken()||this.setAuth().catch(s=>{this.log("error",`Error setting auth in ${a}`,s)})}_setupConnectionHandlers(){this.socketAdapter.onOpen(()=>{(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).catch(s=>{this.log("error","error waiting for auth on connect",s)}),this.worker&&!this.workerRef&&this._startWorkerHeartbeat()}),this.socketAdapter.onClose(()=>{this.worker&&this.workerRef&&this._terminateWorker()}),this.socketAdapter.onMessage(a=>{a.ref&&a.ref===this._pendingWorkerHeartbeatRef&&(this._pendingWorkerHeartbeatRef=null)})}_handleNodeJsRaceCondition(){this.socketAdapter.isConnected()&&this.socketAdapter.getSocket().onConnOpen()}_wrapHeartbeatCallback(a){return(s,i)=>{s=="sent"&&this._setAuthSafely(),a&&a(s,i)}}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const a=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(a),this.workerRef.onerror=s=>{this.log("worker","worker error",s.message),this._terminateWorker(),this.disconnect()},this.workerRef.onmessage=s=>{s.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&(this.log("worker","terminating worker"),this.workerRef.terminate(),this.workerRef=void 0)}_workerObjectUrl(a){let s;if(a)s=a;else{const i=new Blob([d5],{type:"application/javascript"});s=URL.createObjectURL(i)}return s}_initializeOptions(a){var s,i,c,u,h,p,m,g,y;this.worker=(s=a?.worker)!==null&&s!==void 0?s:!1,this.accessToken=(i=a?.accessToken)!==null&&i!==void 0?i:null;const x={};x.timeout=(c=a?.timeout)!==null&&c!==void 0?c:B1,x.heartbeatIntervalMs=(u=a?.heartbeatIntervalMs)!==null&&u!==void 0?u:l5.HEARTBEAT_INTERVAL,x.transport=(h=a?.transport)!==null&&h!==void 0?h:O1.getWebSocketConstructor(),x.params=a?.params,x.logger=a?.logger,x.heartbeatCallback=this._wrapHeartbeatCallback(a?.heartbeatCallback),x.reconnectAfterMs=(p=a?.reconnectAfterMs)!==null&&p!==void 0?p:(C=>c5[C-1]||u5);let S,k;const T=(m=a?.vsn)!==null&&m!==void 0?m:L1;switch(T){case U1:S=(C,_)=>_(JSON.stringify(C)),k=(C,_)=>_(JSON.parse(C));break;case Tg:S=this.serializer.encode.bind(this.serializer),k=this.serializer.decode.bind(this.serializer);break;default:throw new Error(`Unsupported serializer version: ${x.vsn}`)}if(x.vsn=T,x.encode=(g=a?.encode)!==null&&g!==void 0?g:S,x.decode=(y=a?.decode)!==null&&y!==void 0?y:k,x.beforeReconnect=this._reconnectAuth.bind(this),(a?.logLevel||a?.log_level)&&(this.logLevel=a.logLevel||a.log_level,x.params=Object.assign(Object.assign({},x.params),{log_level:this.logLevel})),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=a?.workerUrl,x.autoSendHeartbeat=!this.worker}return x}async _reconnectAuth(){await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()}}var Hi=class extends Error{constructor(r,a){super(r),this.name="IcebergError",this.status=a.status,this.icebergType=a.icebergType,this.icebergCode=a.icebergCode,this.details=a.details,this.isCommitStateUnknown=a.icebergType==="CommitStateUnknownException"||[500,502,504].includes(a.status)&&a.icebergType?.includes("CommitState")===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function f5(r,a,s){const i=new URL(a,r);if(s)for(const[c,u]of Object.entries(s))u!==void 0&&i.searchParams.set(c,u);return i.toString()}async function p5(r){return!r||r.type==="none"?{}:r.type==="bearer"?{Authorization:`Bearer ${r.token}`}:r.type==="header"?{[r.name]:r.value}:r.type==="custom"?await r.getHeaders():{}}function m5(r){const a=r.fetchImpl??globalThis.fetch;return{async request({method:s,path:i,query:c,body:u,headers:h}){const p=f5(r.baseUrl,i,c),m=await p5(r.auth),g=await a(p,{method:s,headers:{...u?{"Content-Type":"application/json"}:{},...m,...h},body:u?JSON.stringify(u):void 0}),y=await g.text(),x=(g.headers.get("content-type")||"").includes("application/json"),S=x&&y?JSON.parse(y):y;if(!g.ok){const k=x?S:void 0,T=k?.error;throw new Hi(T?.message??`Request failed with status ${g.status}`,{status:g.status,icebergType:T?.type,icebergCode:T?.code,details:k})}return{status:g.status,headers:g.headers,data:S}}}}function pl(r){return r.join("")}var g5=class{constructor(r,a=""){this.client=r,this.prefix=a}async listNamespaces(r){const a=r?{parent:pl(r.namespace)}:void 0;return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces`,query:a})).data.namespaces.map(i=>({namespace:i}))}async createNamespace(r,a){const s={namespace:r.namespace,properties:a?.properties};return(await this.client.request({method:"POST",path:`${this.prefix}/namespaces`,body:s})).data}async dropNamespace(r){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${pl(r.namespace)}`})}async loadNamespaceMetadata(r){return{properties:(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${pl(r.namespace)}`})).data.properties}}async namespaceExists(r){try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${pl(r.namespace)}`}),!0}catch(a){if(a instanceof Hi&&a.status===404)return!1;throw a}}async createNamespaceIfNotExists(r,a){try{return await this.createNamespace(r,a)}catch(s){if(s instanceof Hi&&s.status===409)return;throw s}}};function us(r){return r.join("")}var b5=class{constructor(r,a="",s){this.client=r,this.prefix=a,this.accessDelegation=s}async listTables(r){return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${us(r.namespace)}/tables`})).data.identifiers}async createTable(r,a){const s={};return this.accessDelegation&&(s["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${us(r.namespace)}/tables`,body:a,headers:s})).data.metadata}async updateTable(r,a){const s=await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${us(r.namespace)}/tables/${r.name}`,body:a});return{"metadata-location":s.data["metadata-location"],metadata:s.data.metadata}}async dropTable(r,a){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${us(r.namespace)}/tables/${r.name}`,query:{purgeRequested:String(a?.purge??!1)}})}async loadTable(r){const a={};return this.accessDelegation&&(a["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${us(r.namespace)}/tables/${r.name}`,headers:a})).data.metadata}async tableExists(r){const a={};this.accessDelegation&&(a["X-Iceberg-Access-Delegation"]=this.accessDelegation);try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${us(r.namespace)}/tables/${r.name}`,headers:a}),!0}catch(s){if(s instanceof Hi&&s.status===404)return!1;throw s}}async createTableIfNotExists(r,a){try{return await this.createTable(r,a)}catch(s){if(s instanceof Hi&&s.status===409)return await this.loadTable({namespace:r.namespace,name:a.name});throw s}}},x5=class{constructor(r){let a="v1";r.catalogName&&(a+=`/${r.catalogName}`);const s=r.baseUrl.endsWith("/")?r.baseUrl:`${r.baseUrl}/`;this.client=m5({baseUrl:s,auth:r.auth,fetchImpl:r.fetch}),this.accessDelegation=r.accessDelegation?.join(","),this.namespaceOps=new g5(this.client,a),this.tableOps=new b5(this.client,a,this.accessDelegation)}async listNamespaces(r){return this.namespaceOps.listNamespaces(r)}async createNamespace(r,a){return this.namespaceOps.createNamespace(r,a)}async dropNamespace(r){await this.namespaceOps.dropNamespace(r)}async loadNamespaceMetadata(r){return this.namespaceOps.loadNamespaceMetadata(r)}async listTables(r){return this.tableOps.listTables(r)}async createTable(r,a){return this.tableOps.createTable(r,a)}async updateTable(r,a){return this.tableOps.updateTable(r,a)}async dropTable(r,a){await this.tableOps.dropTable(r,a)}async loadTable(r){return this.tableOps.loadTable(r)}async namespaceExists(r){return this.namespaceOps.namespaceExists(r)}async tableExists(r){return this.tableOps.tableExists(r)}async createNamespaceIfNotExists(r,a){return this.namespaceOps.createNamespaceIfNotExists(r,a)}async createTableIfNotExists(r,a){return this.tableOps.createTableIfNotExists(r,a)}},Dl=class extends Error{constructor(r,a="storage",s,i){super(r),this.__isStorageError=!0,this.namespace=a,this.name=a==="vectors"?"StorageVectorsError":"StorageError",this.status=s,this.statusCode=i}};function Ml(r){return typeof r=="object"&&r!==null&&"__isStorageError"in r}var Ed=class extends Dl{constructor(r,a,s,i="storage"){super(r,i,a,s),this.name=i==="vectors"?"StorageVectorsApiError":"StorageApiError",this.status=a,this.statusCode=s}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}},Dg=class extends Dl{constructor(r,a,s="storage"){super(r,s),this.name=s==="vectors"?"StorageVectorsUnknownError":"StorageUnknownError",this.originalError=a}};const y5=r=>r?(...a)=>r(...a):(...a)=>fetch(...a),v5=r=>{if(typeof r!="object"||r===null)return!1;const a=Object.getPrototypeOf(r);return(a===null||a===Object.prototype||Object.getPrototypeOf(a)===null)&&!(Symbol.toStringTag in r)&&!(Symbol.iterator in r)},Nd=r=>{if(Array.isArray(r))return r.map(s=>Nd(s));if(typeof r=="function"||r!==Object(r))return r;const a={};return Object.entries(r).forEach(([s,i])=>{const c=s.replace(/([-_][a-z])/gi,u=>u.toUpperCase().replace(/[-_]/g,""));a[c]=Nd(i)}),a},w5=r=>!r||typeof r!="string"||r.length===0||r.length>100||r.trim()!==r||r.includes("/")||r.includes("\\")?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(r);function $i(r){"@babel/helpers - typeof";return $i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},$i(r)}function k5(r,a){if($i(r)!="object"||!r)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var i=s.call(r,a);if($i(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(r)}function S5(r){var a=k5(r,"string");return $i(a)=="symbol"?a:a+""}function j5(r,a,s){return(a=S5(a))in r?Object.defineProperty(r,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[a]=s,r}function pm(r,a){var s=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);a&&(i=i.filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable})),s.push.apply(s,i)}return s}function ue(r){for(var a=1;a<arguments.length;a++){var s=arguments[a]!=null?arguments[a]:{};a%2?pm(Object(s),!0).forEach(function(i){j5(r,i,s[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(s)):pm(Object(s)).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(s,i))})}return r}const mm=r=>{var a;return r.msg||r.message||r.error_description||(typeof r.error=="string"?r.error:(a=r.error)===null||a===void 0?void 0:a.message)||JSON.stringify(r)},_5=async(r,a,s,i)=>{if(r!==null&&typeof r=="object"&&typeof r.json=="function"){const c=r;let u=parseInt(c.status,10);Number.isFinite(u)||(u=500),c.json().then(h=>{const p=h?.statusCode||h?.code||u+"";a(new Ed(mm(h),u,p,i))}).catch(()=>{const h=u+"";a(new Ed(c.statusText||`HTTP ${u} error`,u,h,i))})}else a(new Dg(mm(r),r,i))},E5=(r,a,s,i)=>{const c={method:r,headers:a?.headers||{}};if(r==="GET"||r==="HEAD"||!i)return ue(ue({},c),s);if(v5(i)){var u;const h=a?.headers||{};let p;for(const[m,g]of Object.entries(h))m.toLowerCase()==="content-type"&&(p=g);c.headers=N5(h,"Content-Type",(u=p)!==null&&u!==void 0?u:"application/json"),c.body=JSON.stringify(i)}else c.body=i;return a?.duplex&&(c.duplex=a.duplex),ue(ue({},c),s)};function N5(r,a,s){const i=ue({},r);for(const c of Object.keys(i))c.toLowerCase()===a.toLowerCase()&&delete i[c];return i[a]=s,i}async function _i(r,a,s,i,c,u,h){return new Promise((p,m)=>{r(s,E5(a,i,c,u)).then(g=>{if(!g.ok)throw g;if(i?.noResolveJson)return g;if(h==="vectors"){const y=g.headers.get("content-type");if(g.headers.get("content-length")==="0"||g.status===204)return{};if(!y||!y.includes("application/json"))return{}}return g.json()}).then(g=>p(g)).catch(g=>_5(g,m,i,h))})}function Mg(r="storage"){return{get:async(a,s,i,c)=>_i(a,"GET",s,i,c,void 0,r),post:async(a,s,i,c,u)=>_i(a,"POST",s,c,u,i,r),put:async(a,s,i,c,u)=>_i(a,"PUT",s,c,u,i,r),head:async(a,s,i,c)=>_i(a,"HEAD",s,ue(ue({},i),{},{noResolveJson:!0}),c,void 0,r),remove:async(a,s,i,c,u)=>_i(a,"DELETE",s,c,u,i,r)}}const C5=Mg("storage"),{get:qi,post:_a,put:Cd,head:T5,remove:Yd}=C5,ea=Mg("vectors");var As=class{constructor(r,a={},s,i="storage"){this.shouldThrowOnError=!1,this.url=r,this.headers=Object.fromEntries(Object.entries(a).map(([c,u])=>[c.toLowerCase(),u])),this.fetch=y5(s),this.namespace=i}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(r,a){return this.headers=ue(ue({},this.headers),{},{[r.toLowerCase()]:a}),this}async handleOperation(r){var a=this;try{return{data:await r(),error:null}}catch(s){if(a.shouldThrowOnError)throw s;if(Ml(s))return{data:null,error:s};throw s}}},A5=class{constructor(r,a){this.downloadFn=r,this.shouldThrowOnError=a}then(r,a){return this.execute().then(r,a)}async execute(){var r=this;try{return{data:(await r.downloadFn()).body,error:null}}catch(a){if(r.shouldThrowOnError)throw a;if(Ml(a))return{data:null,error:a};throw a}}};let Ug;Ug=Symbol.toStringTag;var R5=class{constructor(r,a){this.downloadFn=r,this.shouldThrowOnError=a,this[Ug]="BlobDownloadBuilder",this.promise=null}asStream(){return new A5(this.downloadFn,this.shouldThrowOnError)}then(r,a){return this.getPromise().then(r,a)}catch(r){return this.getPromise().catch(r)}finally(r){return this.getPromise().finally(r)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var r=this;try{return{data:await(await r.downloadFn()).blob(),error:null}}catch(a){if(r.shouldThrowOnError)throw a;if(Ml(a))return{data:null,error:a};throw a}}};const z5={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},gm={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};var O5=class extends As{constructor(r,a={},s,i){super(r,a,i,"storage"),this.bucketId=s}async uploadOrUpdate(r,a,s,i){var c=this;return c.handleOperation(async()=>{let u;const h=ue(ue({},gm),i);let p=ue(ue({},c.headers),r==="POST"&&{"x-upsert":String(h.upsert)});const m=h.metadata;typeof Blob<"u"&&s instanceof Blob?(u=new FormData,u.append("cacheControl",h.cacheControl),m&&u.append("metadata",c.encodeMetadata(m)),u.append("",s)):typeof FormData<"u"&&s instanceof FormData?(u=s,u.has("cacheControl")||u.append("cacheControl",h.cacheControl),m&&!u.has("metadata")&&u.append("metadata",c.encodeMetadata(m))):(u=s,p["cache-control"]=`max-age=${h.cacheControl}`,p["content-type"]=h.contentType,m&&(p["x-metadata"]=c.toBase64(c.encodeMetadata(m))),(typeof ReadableStream<"u"&&u instanceof ReadableStream||u&&typeof u=="object"&&"pipe"in u&&typeof u.pipe=="function")&&!h.duplex&&(h.duplex="half")),i?.headers&&(p=ue(ue({},p),i.headers));const g=c._removeEmptyFolders(a),y=c._getFinalPath(g),x=await(r=="PUT"?Cd:_a)(c.fetch,`${c.url}/object/${y}`,u,ue({headers:p},h?.duplex?{duplex:h.duplex}:{}));return{path:g,id:x.Id,fullPath:x.Key}})}async upload(r,a,s){return this.uploadOrUpdate("POST",r,a,s)}async uploadToSignedUrl(r,a,s,i){var c=this;const u=c._removeEmptyFolders(r),h=c._getFinalPath(u),p=new URL(c.url+`/object/upload/sign/${h}`);return p.searchParams.set("token",a),c.handleOperation(async()=>{let m;const g=ue(ue({},gm),i),y=ue(ue({},c.headers),{"x-upsert":String(g.upsert)});return typeof Blob<"u"&&s instanceof Blob?(m=new FormData,m.append("cacheControl",g.cacheControl),m.append("",s)):typeof FormData<"u"&&s instanceof FormData?(m=s,m.append("cacheControl",g.cacheControl)):(m=s,y["cache-control"]=`max-age=${g.cacheControl}`,y["content-type"]=g.contentType),{path:u,fullPath:(await Cd(c.fetch,p.toString(),m,{headers:y})).Key}})}async createSignedUploadUrl(r,a){var s=this;return s.handleOperation(async()=>{let i=s._getFinalPath(r);const c=ue({},s.headers);a?.upsert&&(c["x-upsert"]="true");const u=await _a(s.fetch,`${s.url}/object/upload/sign/${i}`,{},{headers:c}),h=new URL(s.url+u.url),p=h.searchParams.get("token");if(!p)throw new Dl("No token returned by API");return{signedUrl:h.toString(),path:r,token:p}})}async update(r,a,s){return this.uploadOrUpdate("PUT",r,a,s)}async move(r,a,s){var i=this;return i.handleOperation(async()=>await _a(i.fetch,`${i.url}/object/move`,{bucketId:i.bucketId,sourceKey:r,destinationKey:a,destinationBucket:s?.destinationBucket},{headers:i.headers}))}async copy(r,a,s){var i=this;return i.handleOperation(async()=>({path:(await _a(i.fetch,`${i.url}/object/copy`,{bucketId:i.bucketId,sourceKey:r,destinationKey:a,destinationBucket:s?.destinationBucket},{headers:i.headers})).Key}))}async createSignedUrl(r,a,s){var i=this;return i.handleOperation(async()=>{let c=i._getFinalPath(r);const u=typeof s?.transform=="object"&&s.transform!==null&&Object.keys(s.transform).length>0;let h=await _a(i.fetch,`${i.url}/object/sign/${c}`,ue({expiresIn:a},u?{transform:s.transform}:{}),{headers:i.headers});const p=new URLSearchParams;s?.download&&p.set("download",s.download===!0?"":s.download),s?.cacheNonce!=null&&p.set("cacheNonce",String(s.cacheNonce));const m=p.toString(),g=u&&h.signedURL.includes("/object/sign/")?h.signedURL.replace("/object/sign/","/render/image/sign/"):h.signedURL;return{signedUrl:encodeURI(`${i.url}${g}${m?`&${m}`:""}`)}})}async createSignedUrls(r,a,s){var i=this;return i.handleOperation(async()=>{const c=await _a(i.fetch,`${i.url}/object/sign/${i.bucketId}`,{expiresIn:a,paths:r},{headers:i.headers}),u=new URLSearchParams;s?.download&&u.set("download",s.download===!0?"":s.download),s?.cacheNonce!=null&&u.set("cacheNonce",String(s.cacheNonce));const h=u.toString();return c.map(p=>ue(ue({},p),{},{signedUrl:p.signedURL?encodeURI(`${i.url}${p.signedURL}${h?`&${h}`:""}`):null}))})}download(r,a,s){const i=typeof a?.transform<"u"?"render/image/authenticated":"object",c=new URLSearchParams;a?.transform&&this.applyTransformOptsToQuery(c,a.transform),a?.cacheNonce!=null&&c.set("cacheNonce",String(a.cacheNonce));const u=c.toString(),h=this._getFinalPath(r),p=()=>qi(this.fetch,`${this.url}/${i}/${h}${u?`?${u}`:""}`,{headers:this.headers,noResolveJson:!0},s);return new R5(p,this.shouldThrowOnError)}async info(r){var a=this;const s=a._getFinalPath(r);return a.handleOperation(async()=>Nd(await qi(a.fetch,`${a.url}/object/info/${s}`,{headers:a.headers})))}async exists(r){var a=this;const s=a._getFinalPath(r);try{return await T5(a.fetch,`${a.url}/object/${s}`,{headers:a.headers}),{data:!0,error:null}}catch(c){if(a.shouldThrowOnError)throw c;if(Ml(c)){var i;const u=c instanceof Ed?c.status:c instanceof Dg?(i=c.originalError)===null||i===void 0?void 0:i.status:void 0;if(u!==void 0&&[400,404].includes(u))return{data:!1,error:c}}throw c}}getPublicUrl(r,a){const s=this._getFinalPath(r),i=new URLSearchParams;a?.download&&i.set("download",a.download===!0?"":a.download),a?.transform&&this.applyTransformOptsToQuery(i,a.transform),a?.cacheNonce!=null&&i.set("cacheNonce",String(a.cacheNonce));const c=i.toString(),u=typeof a?.transform<"u"?"render/image":"object";return{data:{publicUrl:encodeURI(`${this.url}/${u}/public/${s}`)+(c?`?${c}`:"")}}}async remove(r){var a=this;return a.handleOperation(async()=>await Yd(a.fetch,`${a.url}/object/${a.bucketId}`,{prefixes:r},{headers:a.headers}))}async list(r,a,s){var i=this;return i.handleOperation(async()=>{const c=ue(ue(ue({},z5),a),{},{prefix:r||""});return await _a(i.fetch,`${i.url}/object/list/${i.bucketId}`,c,{headers:i.headers},s)})}async listV2(r,a){var s=this;return s.handleOperation(async()=>{const i=ue({},r);return await _a(s.fetch,`${s.url}/object/list-v2/${s.bucketId}`,i,{headers:s.headers},a)})}encodeMetadata(r){return JSON.stringify(r)}toBase64(r){return typeof Buffer<"u"?Buffer.from(r).toString("base64"):btoa(r)}_getFinalPath(r){return`${this.bucketId}/${r.replace(/^\/+/,"")}`}_removeEmptyFolders(r){return r.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}applyTransformOptsToQuery(r,a){return a.width&&r.set("width",a.width.toString()),a.height&&r.set("height",a.height.toString()),a.resize&&r.set("resize",a.resize),a.format&&r.set("format",a.format),a.quality&&r.set("quality",a.quality.toString()),r}};const D5="2.103.0",Ji={"X-Client-Info":`storage-js/${D5}`};var M5=class extends As{constructor(r,a={},s,i){const c=new URL(r);i?.useNewHostname&&/supabase\.(co|in|red)$/.test(c.hostname)&&!c.hostname.includes("storage.supabase.")&&(c.hostname=c.hostname.replace("supabase.","storage.supabase."));const u=c.href.replace(/\/$/,""),h=ue(ue({},Ji),a);super(u,h,s,"storage")}async listBuckets(r){var a=this;return a.handleOperation(async()=>{const s=a.listBucketOptionsToQueryString(r);return await qi(a.fetch,`${a.url}/bucket${s}`,{headers:a.headers})})}async getBucket(r){var a=this;return a.handleOperation(async()=>await qi(a.fetch,`${a.url}/bucket/${r}`,{headers:a.headers}))}async createBucket(r,a={public:!1}){var s=this;return s.handleOperation(async()=>await _a(s.fetch,`${s.url}/bucket`,{id:r,name:r,type:a.type,public:a.public,file_size_limit:a.fileSizeLimit,allowed_mime_types:a.allowedMimeTypes},{headers:s.headers}))}async updateBucket(r,a){var s=this;return s.handleOperation(async()=>await Cd(s.fetch,`${s.url}/bucket/${r}`,{id:r,name:r,public:a.public,file_size_limit:a.fileSizeLimit,allowed_mime_types:a.allowedMimeTypes},{headers:s.headers}))}async emptyBucket(r){var a=this;return a.handleOperation(async()=>await _a(a.fetch,`${a.url}/bucket/${r}/empty`,{},{headers:a.headers}))}async deleteBucket(r){var a=this;return a.handleOperation(async()=>await Yd(a.fetch,`${a.url}/bucket/${r}`,{},{headers:a.headers}))}listBucketOptionsToQueryString(r){const a={};return r&&("limit"in r&&(a.limit=String(r.limit)),"offset"in r&&(a.offset=String(r.offset)),r.search&&(a.search=r.search),r.sortColumn&&(a.sortColumn=r.sortColumn),r.sortOrder&&(a.sortOrder=r.sortOrder)),Object.keys(a).length>0?"?"+new URLSearchParams(a).toString():""}},U5=class extends As{constructor(r,a={},s){const i=r.replace(/\/$/,""),c=ue(ue({},Ji),a);super(i,c,s,"storage")}async createBucket(r){var a=this;return a.handleOperation(async()=>await _a(a.fetch,`${a.url}/bucket`,{name:r},{headers:a.headers}))}async listBuckets(r){var a=this;return a.handleOperation(async()=>{const s=new URLSearchParams;r?.limit!==void 0&&s.set("limit",r.limit.toString()),r?.offset!==void 0&&s.set("offset",r.offset.toString()),r?.sortColumn&&s.set("sortColumn",r.sortColumn),r?.sortOrder&&s.set("sortOrder",r.sortOrder),r?.search&&s.set("search",r.search);const i=s.toString(),c=i?`${a.url}/bucket?${i}`:`${a.url}/bucket`;return await qi(a.fetch,c,{headers:a.headers})})}async deleteBucket(r){var a=this;return a.handleOperation(async()=>await Yd(a.fetch,`${a.url}/bucket/${r}`,{},{headers:a.headers}))}from(r){var a=this;if(!w5(r))throw new Dl("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");const s=new x5({baseUrl:this.url,catalogName:r,auth:{type:"custom",getHeaders:async()=>a.headers},fetch:this.fetch}),i=this.shouldThrowOnError;return new Proxy(s,{get(c,u){const h=c[u];return typeof h!="function"?h:async(...p)=>{try{return{data:await h.apply(c,p),error:null}}catch(m){if(i)throw m;return{data:null,error:m}}}}})}},L5=class extends As{constructor(r,a={},s){const i=r.replace(/\/$/,""),c=ue(ue({},Ji),{},{"Content-Type":"application/json"},a);super(i,c,s,"vectors")}async createIndex(r){var a=this;return a.handleOperation(async()=>await ea.post(a.fetch,`${a.url}/CreateIndex`,r,{headers:a.headers})||{})}async getIndex(r,a){var s=this;return s.handleOperation(async()=>await ea.post(s.fetch,`${s.url}/GetIndex`,{vectorBucketName:r,indexName:a},{headers:s.headers}))}async listIndexes(r){var a=this;return a.handleOperation(async()=>await ea.post(a.fetch,`${a.url}/ListIndexes`,r,{headers:a.headers}))}async deleteIndex(r,a){var s=this;return s.handleOperation(async()=>await ea.post(s.fetch,`${s.url}/DeleteIndex`,{vectorBucketName:r,indexName:a},{headers:s.headers})||{})}},B5=class extends As{constructor(r,a={},s){const i=r.replace(/\/$/,""),c=ue(ue({},Ji),{},{"Content-Type":"application/json"},a);super(i,c,s,"vectors")}async putVectors(r){var a=this;if(r.vectors.length<1||r.vectors.length>500)throw new Error("Vector batch size must be between 1 and 500 items");return a.handleOperation(async()=>await ea.post(a.fetch,`${a.url}/PutVectors`,r,{headers:a.headers})||{})}async getVectors(r){var a=this;return a.handleOperation(async()=>await ea.post(a.fetch,`${a.url}/GetVectors`,r,{headers:a.headers}))}async listVectors(r){var a=this;if(r.segmentCount!==void 0){if(r.segmentCount<1||r.segmentCount>16)throw new Error("segmentCount must be between 1 and 16");if(r.segmentIndex!==void 0&&(r.segmentIndex<0||r.segmentIndex>=r.segmentCount))throw new Error(`segmentIndex must be between 0 and ${r.segmentCount-1}`)}return a.handleOperation(async()=>await ea.post(a.fetch,`${a.url}/ListVectors`,r,{headers:a.headers}))}async queryVectors(r){var a=this;return a.handleOperation(async()=>await ea.post(a.fetch,`${a.url}/QueryVectors`,r,{headers:a.headers}))}async deleteVectors(r){var a=this;if(r.keys.length<1||r.keys.length>500)throw new Error("Keys batch size must be between 1 and 500 items");return a.handleOperation(async()=>await ea.post(a.fetch,`${a.url}/DeleteVectors`,r,{headers:a.headers})||{})}},H5=class extends As{constructor(r,a={},s){const i=r.replace(/\/$/,""),c=ue(ue({},Ji),{},{"Content-Type":"application/json"},a);super(i,c,s,"vectors")}async createBucket(r){var a=this;return a.handleOperation(async()=>await ea.post(a.fetch,`${a.url}/CreateVectorBucket`,{vectorBucketName:r},{headers:a.headers})||{})}async getBucket(r){var a=this;return a.handleOperation(async()=>await ea.post(a.fetch,`${a.url}/GetVectorBucket`,{vectorBucketName:r},{headers:a.headers}))}async listBuckets(r={}){var a=this;return a.handleOperation(async()=>await ea.post(a.fetch,`${a.url}/ListVectorBuckets`,r,{headers:a.headers}))}async deleteBucket(r){var a=this;return a.handleOperation(async()=>await ea.post(a.fetch,`${a.url}/DeleteVectorBucket`,{vectorBucketName:r},{headers:a.headers})||{})}},$5=class extends H5{constructor(r,a={}){super(r,a.headers||{},a.fetch)}from(r){return new q5(this.url,this.headers,r,this.fetch)}async createBucket(r){var a=()=>super.createBucket,s=this;return a().call(s,r)}async getBucket(r){var a=()=>super.getBucket,s=this;return a().call(s,r)}async listBuckets(r={}){var a=()=>super.listBuckets,s=this;return a().call(s,r)}async deleteBucket(r){var a=()=>super.deleteBucket,s=this;return a().call(s,r)}},q5=class extends L5{constructor(r,a,s,i){super(r,a,i),this.vectorBucketName=s}async createIndex(r){var a=()=>super.createIndex,s=this;return a().call(s,ue(ue({},r),{},{vectorBucketName:s.vectorBucketName}))}async listIndexes(r={}){var a=()=>super.listIndexes,s=this;return a().call(s,ue(ue({},r),{},{vectorBucketName:s.vectorBucketName}))}async getIndex(r){var a=()=>super.getIndex,s=this;return a().call(s,s.vectorBucketName,r)}async deleteIndex(r){var a=()=>super.deleteIndex,s=this;return a().call(s,s.vectorBucketName,r)}index(r){return new P5(this.url,this.headers,this.vectorBucketName,r,this.fetch)}},P5=class extends B5{constructor(r,a,s,i,c){super(r,a,c),this.vectorBucketName=s,this.indexName=i}async putVectors(r){var a=()=>super.putVectors,s=this;return a().call(s,ue(ue({},r),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}async getVectors(r){var a=()=>super.getVectors,s=this;return a().call(s,ue(ue({},r),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}async listVectors(r={}){var a=()=>super.listVectors,s=this;return a().call(s,ue(ue({},r),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}async queryVectors(r){var a=()=>super.queryVectors,s=this;return a().call(s,ue(ue({},r),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}async deleteVectors(r){var a=()=>super.deleteVectors,s=this;return a().call(s,ue(ue({},r),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}},I5=class extends M5{constructor(r,a={},s,i){super(r,a,s,i)}from(r){return new O5(this.url,this.headers,r,this.fetch)}get vectors(){return new $5(this.url+"/vector",{headers:this.headers,fetch:this.fetch})}get analytics(){return new U5(this.url+"/iceberg",this.headers,this.fetch)}};const Lg="2.103.0",ys=30*1e3,Td=3,nd=Td*ys,Y5="http://localhost:9999",G5="supabase.auth.token",V5={"X-Client-Info":`gotrue-js/${Lg}`},Ad="X-Supabase-Api-Version",Bg={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},X5=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,K5=600*1e3;class Pi extends Error{constructor(a,s,i){super(a),this.__isAuthError=!0,this.name="AuthError",this.status=s,this.code=i}}function ie(r){return typeof r=="object"&&r!==null&&"__isAuthError"in r}class F5 extends Pi{constructor(a,s,i){super(a,s,i),this.name="AuthApiError",this.status=s,this.code=i}}function J5(r){return ie(r)&&r.name==="AuthApiError"}class xn extends Pi{constructor(a,s){super(a),this.name="AuthUnknownError",this.originalError=s}}class hr extends Pi{constructor(a,s,i,c){super(a,i,c),this.name=s,this.status=i}}class Qt extends hr{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function ml(r){return ie(r)&&r.name==="AuthSessionMissingError"}class ds extends hr{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class gl extends hr{constructor(a){super(a,"AuthInvalidCredentialsError",400,void 0)}}class bl extends hr{constructor(a,s=null){super(a,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=s}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}function W5(r){return ie(r)&&r.name==="AuthImplicitGrantRedirectError"}class bm extends hr{constructor(a,s=null){super(a,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=s}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class Z5 extends hr{constructor(){super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.","AuthPKCECodeVerifierMissingError",400,"pkce_code_verifier_not_found")}}class Rd extends hr{constructor(a,s){super(a,"AuthRetryableFetchError",s,void 0)}}function sd(r){return ie(r)&&r.name==="AuthRetryableFetchError"}class xm extends hr{constructor(a,s,i){super(a,"AuthWeakPasswordError",s,"weak_password"),this.reasons=i}}class zd extends hr{constructor(a){super(a,"AuthInvalidJwtError",400,"invalid_jwt")}}const El="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),ym=` 	
\r=`.split(""),Q5=(()=>{const r=new Array(128);for(let a=0;a<r.length;a+=1)r[a]=-1;for(let a=0;a<ym.length;a+=1)r[ym[a].charCodeAt(0)]=-2;for(let a=0;a<El.length;a+=1)r[El[a].charCodeAt(0)]=a;return r})();function vm(r,a,s){if(r!==null)for(a.queue=a.queue<<8|r,a.queuedBits+=8;a.queuedBits>=6;){const i=a.queue>>a.queuedBits-6&63;s(El[i]),a.queuedBits-=6}else if(a.queuedBits>0)for(a.queue=a.queue<<6-a.queuedBits,a.queuedBits=6;a.queuedBits>=6;){const i=a.queue>>a.queuedBits-6&63;s(El[i]),a.queuedBits-=6}}function Hg(r,a,s){const i=Q5[r];if(i>-1)for(a.queue=a.queue<<6|i,a.queuedBits+=6;a.queuedBits>=8;)s(a.queue>>a.queuedBits-8&255),a.queuedBits-=8;else{if(i===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(r)}"`)}}function wm(r){const a=[],s=h=>{a.push(String.fromCodePoint(h))},i={utf8seq:0,codepoint:0},c={queue:0,queuedBits:0},u=h=>{aw(h,i,s)};for(let h=0;h<r.length;h+=1)Hg(r.charCodeAt(h),c,u);return a.join("")}function ew(r,a){if(r<=127){a(r);return}else if(r<=2047){a(192|r>>6),a(128|r&63);return}else if(r<=65535){a(224|r>>12),a(128|r>>6&63),a(128|r&63);return}else if(r<=1114111){a(240|r>>18),a(128|r>>12&63),a(128|r>>6&63),a(128|r&63);return}throw new Error(`Unrecognized Unicode codepoint: ${r.toString(16)}`)}function tw(r,a){for(let s=0;s<r.length;s+=1){let i=r.charCodeAt(s);if(i>55295&&i<=56319){const c=(i-55296)*1024&65535;i=(r.charCodeAt(s+1)-56320&65535|c)+65536,s+=1}ew(i,a)}}function aw(r,a,s){if(a.utf8seq===0){if(r<=127){s(r);return}for(let i=1;i<6;i+=1)if((r>>7-i&1)===0){a.utf8seq=i;break}if(a.utf8seq===2)a.codepoint=r&31;else if(a.utf8seq===3)a.codepoint=r&15;else if(a.utf8seq===4)a.codepoint=r&7;else throw new Error("Invalid UTF-8 sequence");a.utf8seq-=1}else if(a.utf8seq>0){if(r<=127)throw new Error("Invalid UTF-8 sequence");a.codepoint=a.codepoint<<6|r&63,a.utf8seq-=1,a.utf8seq===0&&s(a.codepoint)}}function Ss(r){const a=[],s={queue:0,queuedBits:0},i=c=>{a.push(c)};for(let c=0;c<r.length;c+=1)Hg(r.charCodeAt(c),s,i);return new Uint8Array(a)}function rw(r){const a=[];return tw(r,s=>a.push(s)),new Uint8Array(a)}function yn(r){const a=[],s={queue:0,queuedBits:0},i=c=>{a.push(c)};return r.forEach(c=>vm(c,s,i)),vm(null,s,i),a.join("")}function nw(r){return Math.round(Date.now()/1e3)+r}function sw(){return Symbol("auth-callback")}const Ct=()=>typeof window<"u"&&typeof document<"u",pn={tested:!1,writable:!1},$g=()=>{if(!Ct())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(pn.tested)return pn.writable;const r=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(r,r),globalThis.localStorage.removeItem(r),pn.tested=!0,pn.writable=!0}catch{pn.tested=!0,pn.writable=!1}return pn.writable};function iw(r){const a={},s=new URL(r);if(s.hash&&s.hash[0]==="#")try{new URLSearchParams(s.hash.substring(1)).forEach((c,u)=>{a[u]=c})}catch{}return s.searchParams.forEach((i,c)=>{a[c]=i}),a}const qg=r=>r?(...a)=>r(...a):(...a)=>fetch(...a),ow=r=>typeof r=="object"&&r!==null&&"status"in r&&"ok"in r&&"json"in r&&typeof r.json=="function",vs=async(r,a,s)=>{await r.setItem(a,JSON.stringify(s))},mn=async(r,a)=>{const s=await r.getItem(a);if(!s)return null;try{return JSON.parse(s)}catch{return s}},Nt=async(r,a)=>{await r.removeItem(a)};class Ul{constructor(){this.promise=new Ul.promiseConstructor((a,s)=>{this.resolve=a,this.reject=s})}}Ul.promiseConstructor=Promise;function xl(r){const a=r.split(".");if(a.length!==3)throw new zd("Invalid JWT structure");for(let i=0;i<a.length;i++)if(!X5.test(a[i]))throw new zd("JWT not in base64url format");return{header:JSON.parse(wm(a[0])),payload:JSON.parse(wm(a[1])),signature:Ss(a[2]),raw:{header:a[0],payload:a[1]}}}async function lw(r){return await new Promise(a=>{setTimeout(()=>a(null),r)})}function cw(r,a){return new Promise((i,c)=>{(async()=>{for(let u=0;u<1/0;u++)try{const h=await r(u);if(!a(u,null,h)){i(h);return}}catch(h){if(!a(u,h)){c(h);return}}})()})}function uw(r){return("0"+r.toString(16)).substr(-2)}function dw(){const a=new Uint32Array(56);if(typeof crypto>"u"){const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",i=s.length;let c="";for(let u=0;u<56;u++)c+=s.charAt(Math.floor(Math.random()*i));return c}return crypto.getRandomValues(a),Array.from(a,uw).join("")}async function hw(r){const s=new TextEncoder().encode(r),i=await crypto.subtle.digest("SHA-256",s),c=new Uint8Array(i);return Array.from(c).map(u=>String.fromCharCode(u)).join("")}async function fw(r){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),r;const s=await hw(r);return btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function hs(r,a,s=!1){const i=dw();let c=i;s&&(c+="/PASSWORD_RECOVERY"),await vs(r,`${a}-code-verifier`,c);const u=await fw(i);return[u,i===u?"plain":"s256"]}const pw=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function mw(r){const a=r.headers.get(Ad);if(!a||!a.match(pw))return null;try{return new Date(`${a}T00:00:00.0Z`)}catch{return null}}function gw(r){if(!r)throw new Error("Missing exp claim");const a=Math.floor(Date.now()/1e3);if(r<=a)throw new Error("JWT has expired")}function bw(r){switch(r){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const xw=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function fs(r){if(!xw.test(r))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function id(){const r={};return new Proxy(r,{get:(a,s)=>{if(s==="__isUserNotAvailableProxy")return!0;if(typeof s=="symbol"){const i=s.toString();if(i==="Symbol(Symbol.toPrimitive)"||i==="Symbol(Symbol.toStringTag)"||i==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${s}" property of the session object is not supported. Please use getUser() instead.`)},set:(a,s)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${s}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(a,s)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${s}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function yw(r,a){return new Proxy(r,{get:(s,i,c)=>{if(i==="__isInsecureUserWarningProxy")return!0;if(typeof i=="symbol"){const u=i.toString();if(u==="Symbol(Symbol.toPrimitive)"||u==="Symbol(Symbol.toStringTag)"||u==="Symbol(util.inspect.custom)"||u==="Symbol(nodejs.util.inspect.custom)")return Reflect.get(s,i,c)}return!a.value&&typeof i=="string"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),a.value=!0),Reflect.get(s,i,c)}})}function km(r){return JSON.parse(JSON.stringify(r))}const bn=r=>r.msg||r.message||r.error_description||r.error||JSON.stringify(r),vw=[502,503,504];async function Sm(r){var a;if(!ow(r))throw new Rd(bn(r),0);if(vw.includes(r.status))throw new Rd(bn(r),r.status);let s;try{s=await r.json()}catch(u){throw new xn(bn(u),u)}let i;const c=mw(r);if(c&&c.getTime()>=Bg["2024-01-01"].timestamp&&typeof s=="object"&&s&&typeof s.code=="string"?i=s.code:typeof s=="object"&&s&&typeof s.error_code=="string"&&(i=s.error_code),i){if(i==="weak_password")throw new xm(bn(s),r.status,((a=s.weak_password)===null||a===void 0?void 0:a.reasons)||[]);if(i==="session_not_found")throw new Qt}else if(typeof s=="object"&&s&&typeof s.weak_password=="object"&&s.weak_password&&Array.isArray(s.weak_password.reasons)&&s.weak_password.reasons.length&&s.weak_password.reasons.reduce((u,h)=>u&&typeof h=="string",!0))throw new xm(bn(s),r.status,s.weak_password.reasons);throw new F5(bn(s),r.status||500,i)}const ww=(r,a,s,i)=>{const c={method:r,headers:a?.headers||{}};return r==="GET"?c:(c.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},a?.headers),c.body=JSON.stringify(i),Object.assign(Object.assign({},c),s))};async function ce(r,a,s,i){var c;const u=Object.assign({},i?.headers);u[Ad]||(u[Ad]=Bg["2024-01-01"].name),i?.jwt&&(u.Authorization=`Bearer ${i.jwt}`);const h=(c=i?.query)!==null&&c!==void 0?c:{};i?.redirectTo&&(h.redirect_to=i.redirectTo);const p=Object.keys(h).length?"?"+new URLSearchParams(h).toString():"",m=await kw(r,a,s+p,{headers:u,noResolveJson:i?.noResolveJson},{},i?.body);return i?.xform?i?.xform(m):{data:Object.assign({},m),error:null}}async function kw(r,a,s,i,c,u){const h=ww(a,i,c,u);let p;try{p=await r(s,Object.assign({},h))}catch(m){throw console.error(m),new Rd(bn(m),0)}if(p.ok||await Sm(p),i?.noResolveJson)return p;try{return await p.json()}catch(m){await Sm(m)}}function Sa(r){var a;let s=null;_w(r)&&(s=Object.assign({},r),r.expires_at||(s.expires_at=nw(r.expires_in)));const i=(a=r.user)!==null&&a!==void 0?a:r;return{data:{session:s,user:i},error:null}}function jm(r){const a=Sa(r);return!a.error&&r.weak_password&&typeof r.weak_password=="object"&&Array.isArray(r.weak_password.reasons)&&r.weak_password.reasons.length&&r.weak_password.message&&typeof r.weak_password.message=="string"&&r.weak_password.reasons.reduce((s,i)=>s&&typeof i=="string",!0)&&(a.data.weak_password=r.weak_password),a}function Gr(r){var a;return{data:{user:(a=r.user)!==null&&a!==void 0?a:r},error:null}}function Sw(r){return{data:r,error:null}}function jw(r){const{action_link:a,email_otp:s,hashed_token:i,redirect_to:c,verification_type:u}=r,h=Ol(r,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),p={action_link:a,email_otp:s,hashed_token:i,redirect_to:c,verification_type:u},m=Object.assign({},h);return{data:{properties:p,user:m},error:null}}function _m(r){return r}function _w(r){return r.access_token&&r.refresh_token&&r.expires_in}const od=["global","local","others"];class Ew{constructor({url:a="",headers:s={},fetch:i}){this.url=a,this.headers=s,this.fetch=qg(i),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)},this.customProviders={listProviders:this._listCustomProviders.bind(this),createProvider:this._createCustomProvider.bind(this),getProvider:this._getCustomProvider.bind(this),updateProvider:this._updateCustomProvider.bind(this),deleteProvider:this._deleteCustomProvider.bind(this)}}async signOut(a,s=od[0]){if(od.indexOf(s)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${od.join(", ")}`);try{return await ce(this.fetch,"POST",`${this.url}/logout?scope=${s}`,{headers:this.headers,jwt:a,noResolveJson:!0}),{data:null,error:null}}catch(i){if(ie(i))return{data:null,error:i};throw i}}async inviteUserByEmail(a,s={}){try{return await ce(this.fetch,"POST",`${this.url}/invite`,{body:{email:a,data:s.data},headers:this.headers,redirectTo:s.redirectTo,xform:Gr})}catch(i){if(ie(i))return{data:{user:null},error:i};throw i}}async generateLink(a){try{const{options:s}=a,i=Ol(a,["options"]),c=Object.assign(Object.assign({},i),s);return"newEmail"in i&&(c.new_email=i?.newEmail,delete c.newEmail),await ce(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:c,headers:this.headers,xform:jw,redirectTo:s?.redirectTo})}catch(s){if(ie(s))return{data:{properties:null,user:null},error:s};throw s}}async createUser(a){try{return await ce(this.fetch,"POST",`${this.url}/admin/users`,{body:a,headers:this.headers,xform:Gr})}catch(s){if(ie(s))return{data:{user:null},error:s};throw s}}async listUsers(a){var s,i,c,u,h,p,m;try{const g={nextPage:null,lastPage:0,total:0},y=await ce(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(i=(s=a?.page)===null||s===void 0?void 0:s.toString())!==null&&i!==void 0?i:"",per_page:(u=(c=a?.perPage)===null||c===void 0?void 0:c.toString())!==null&&u!==void 0?u:""},xform:_m});if(y.error)throw y.error;const x=await y.json(),S=(h=y.headers.get("x-total-count"))!==null&&h!==void 0?h:0,k=(m=(p=y.headers.get("link"))===null||p===void 0?void 0:p.split(","))!==null&&m!==void 0?m:[];return k.length>0&&(k.forEach(T=>{const C=parseInt(T.split(";")[0].split("=")[1].substring(0,1)),_=JSON.parse(T.split(";")[1].split("=")[1]);g[`${_}Page`]=C}),g.total=parseInt(S)),{data:Object.assign(Object.assign({},x),g),error:null}}catch(g){if(ie(g))return{data:{users:[]},error:g};throw g}}async getUserById(a){fs(a);try{return await ce(this.fetch,"GET",`${this.url}/admin/users/${a}`,{headers:this.headers,xform:Gr})}catch(s){if(ie(s))return{data:{user:null},error:s};throw s}}async updateUserById(a,s){fs(a);try{return await ce(this.fetch,"PUT",`${this.url}/admin/users/${a}`,{body:s,headers:this.headers,xform:Gr})}catch(i){if(ie(i))return{data:{user:null},error:i};throw i}}async deleteUser(a,s=!1){fs(a);try{return await ce(this.fetch,"DELETE",`${this.url}/admin/users/${a}`,{headers:this.headers,body:{should_soft_delete:s},xform:Gr})}catch(i){if(ie(i))return{data:{user:null},error:i};throw i}}async _listFactors(a){fs(a.userId);try{const{data:s,error:i}=await ce(this.fetch,"GET",`${this.url}/admin/users/${a.userId}/factors`,{headers:this.headers,xform:c=>({data:{factors:c},error:null})});return{data:s,error:i}}catch(s){if(ie(s))return{data:null,error:s};throw s}}async _deleteFactor(a){fs(a.userId),fs(a.id);try{return{data:await ce(this.fetch,"DELETE",`${this.url}/admin/users/${a.userId}/factors/${a.id}`,{headers:this.headers}),error:null}}catch(s){if(ie(s))return{data:null,error:s};throw s}}async _listOAuthClients(a){var s,i,c,u,h,p,m;try{const g={nextPage:null,lastPage:0,total:0},y=await ce(this.fetch,"GET",`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(i=(s=a?.page)===null||s===void 0?void 0:s.toString())!==null&&i!==void 0?i:"",per_page:(u=(c=a?.perPage)===null||c===void 0?void 0:c.toString())!==null&&u!==void 0?u:""},xform:_m});if(y.error)throw y.error;const x=await y.json(),S=(h=y.headers.get("x-total-count"))!==null&&h!==void 0?h:0,k=(m=(p=y.headers.get("link"))===null||p===void 0?void 0:p.split(","))!==null&&m!==void 0?m:[];return k.length>0&&(k.forEach(T=>{const C=parseInt(T.split(";")[0].split("=")[1].substring(0,1)),_=JSON.parse(T.split(";")[1].split("=")[1]);g[`${_}Page`]=C}),g.total=parseInt(S)),{data:Object.assign(Object.assign({},x),g),error:null}}catch(g){if(ie(g))return{data:{clients:[]},error:g};throw g}}async _createOAuthClient(a){try{return await ce(this.fetch,"POST",`${this.url}/admin/oauth/clients`,{body:a,headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(ie(s))return{data:null,error:s};throw s}}async _getOAuthClient(a){try{return await ce(this.fetch,"GET",`${this.url}/admin/oauth/clients/${a}`,{headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(ie(s))return{data:null,error:s};throw s}}async _updateOAuthClient(a,s){try{return await ce(this.fetch,"PUT",`${this.url}/admin/oauth/clients/${a}`,{body:s,headers:this.headers,xform:i=>({data:i,error:null})})}catch(i){if(ie(i))return{data:null,error:i};throw i}}async _deleteOAuthClient(a){try{return await ce(this.fetch,"DELETE",`${this.url}/admin/oauth/clients/${a}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(s){if(ie(s))return{data:null,error:s};throw s}}async _regenerateOAuthClientSecret(a){try{return await ce(this.fetch,"POST",`${this.url}/admin/oauth/clients/${a}/regenerate_secret`,{headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(ie(s))return{data:null,error:s};throw s}}async _listCustomProviders(a){try{const s={};return a?.type&&(s.type=a.type),await ce(this.fetch,"GET",`${this.url}/admin/custom-providers`,{headers:this.headers,query:s,xform:i=>{var c;return{data:{providers:(c=i?.providers)!==null&&c!==void 0?c:[]},error:null}}})}catch(s){if(ie(s))return{data:{providers:[]},error:s};throw s}}async _createCustomProvider(a){try{return await ce(this.fetch,"POST",`${this.url}/admin/custom-providers`,{body:a,headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(ie(s))return{data:null,error:s};throw s}}async _getCustomProvider(a){try{return await ce(this.fetch,"GET",`${this.url}/admin/custom-providers/${a}`,{headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(ie(s))return{data:null,error:s};throw s}}async _updateCustomProvider(a,s){try{return await ce(this.fetch,"PUT",`${this.url}/admin/custom-providers/${a}`,{body:s,headers:this.headers,xform:i=>({data:i,error:null})})}catch(i){if(ie(i))return{data:null,error:i};throw i}}async _deleteCustomProvider(a){try{return await ce(this.fetch,"DELETE",`${this.url}/admin/custom-providers/${a}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(s){if(ie(s))return{data:null,error:s};throw s}}}function Em(r={}){return{getItem:a=>r[a]||null,setItem:(a,s)=>{r[a]=s},removeItem:a=>{delete r[a]}}}const Ma={debug:!!(globalThis&&$g()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class Pg extends Error{constructor(a){super(a),this.isAcquireTimeout=!0}}class Nm extends Pg{}async function Nw(r,a,s){Ma.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",r,a);const i=new globalThis.AbortController;let c;a>0&&(c=setTimeout(()=>{i.abort(),Ma.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",r)},a)),await Promise.resolve();try{return await globalThis.navigator.locks.request(r,a===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:i.signal},async u=>{if(u){clearTimeout(c),Ma.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",r,u.name);try{return await s()}finally{Ma.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",r,u.name)}}else{if(a===0)throw Ma.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",r),new Nm(`Acquiring an exclusive Navigator LockManager lock "${r}" immediately failed`);if(Ma.debug)try{const h=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(h,null,"  "))}catch(h){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",h)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),clearTimeout(c),await s()}})}catch(u){if(a>0&&clearTimeout(c),u?.name==="AbortError"&&a>0){if(i.signal.aborted)return Ma.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire timeout, recovering by stealing lock",r),console.warn(`@supabase/gotrue-js: Lock "${r}" was not released within ${a}ms. This may indicate an orphaned lock from a component unmount (e.g., React Strict Mode). Forcefully acquiring the lock to recover.`),await Promise.resolve().then(()=>globalThis.navigator.locks.request(r,{mode:"exclusive",steal:!0},async h=>{if(h){Ma.debug&&console.log("@supabase/gotrue-js: navigatorLock: recovered (stolen)",r,h.name);try{return await s()}finally{Ma.debug&&console.log("@supabase/gotrue-js: navigatorLock: released (stolen)",r,h.name)}}else return console.warn("@supabase/gotrue-js: Navigator LockManager returned null lock even with steal: true"),await s()}));throw Ma.debug&&console.log("@supabase/gotrue-js: navigatorLock: lock was stolen by another request",r),new Nm(`Lock "${r}" was released because another request stole it`)}throw u}}function Cw(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}function Ig(r){if(!/^0x[a-fA-F0-9]{40}$/.test(r))throw new Error(`@supabase/auth-js: Address "${r}" is invalid.`);return r.toLowerCase()}function Tw(r){return parseInt(r,16)}function Aw(r){const a=new TextEncoder().encode(r);return"0x"+Array.from(a,i=>i.toString(16).padStart(2,"0")).join("")}function Rw(r){var a;const{chainId:s,domain:i,expirationTime:c,issuedAt:u=new Date,nonce:h,notBefore:p,requestId:m,resources:g,scheme:y,uri:x,version:S}=r;{if(!Number.isInteger(s))throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${s}`);if(!i)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');if(h&&h.length<8)throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${h}`);if(!x)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');if(S!=="1")throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${S}`);if(!((a=r.statement)===null||a===void 0)&&a.includes(`
`))throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${r.statement}`)}const k=Ig(r.address),T=y?`${y}://${i}`:i,C=r.statement?`${r.statement}
`:"",_=`${T} wants you to sign in with your Ethereum account:
${k}

${C}`;let z=`URI: ${x}
Version: ${S}
Chain ID: ${s}${h?`
Nonce: ${h}`:""}
Issued At: ${u.toISOString()}`;if(c&&(z+=`
Expiration Time: ${c.toISOString()}`),p&&(z+=`
Not Before: ${p.toISOString()}`),m&&(z+=`
Request ID: ${m}`),g){let M=`
Resources:`;for(const R of g){if(!R||typeof R!="string")throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${R}`);M+=`
- ${R}`}z+=M}return`${_}
${z}`}class ut extends Error{constructor({message:a,code:s,cause:i,name:c}){var u;super(a,{cause:i}),this.__isWebAuthnError=!0,this.name=(u=c??(i instanceof Error?i.name:void 0))!==null&&u!==void 0?u:"Unknown Error",this.code=s}}class Nl extends ut{constructor(a,s){super({code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:s,message:a}),this.name="WebAuthnUnknownError",this.originalError=s}}function zw({error:r,options:a}){var s,i,c;const{publicKey:u}=a;if(!u)throw Error("options was missing required publicKey property");if(r.name==="AbortError"){if(a.signal instanceof AbortSignal)return new ut({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:r})}else if(r.name==="ConstraintError"){if(((s=u.authenticatorSelection)===null||s===void 0?void 0:s.requireResidentKey)===!0)return new ut({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:r});if(a.mediation==="conditional"&&((i=u.authenticatorSelection)===null||i===void 0?void 0:i.userVerification)==="required")return new ut({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:r});if(((c=u.authenticatorSelection)===null||c===void 0?void 0:c.userVerification)==="required")return new ut({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:r})}else{if(r.name==="InvalidStateError")return new ut({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:r});if(r.name==="NotAllowedError")return new ut({message:r.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:r});if(r.name==="NotSupportedError")return u.pubKeyCredParams.filter(p=>p.type==="public-key").length===0?new ut({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:r}):new ut({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:r});if(r.name==="SecurityError"){const h=window.location.hostname;if(Yg(h)){if(u.rp.id!==h)return new ut({message:`The RP ID "${u.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:r})}else return new ut({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:r})}else if(r.name==="TypeError"){if(u.user.id.byteLength<1||u.user.id.byteLength>64)return new ut({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:r})}else if(r.name==="UnknownError")return new ut({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:r})}return new ut({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:r})}function Ow({error:r,options:a}){const{publicKey:s}=a;if(!s)throw Error("options was missing required publicKey property");if(r.name==="AbortError"){if(a.signal instanceof AbortSignal)return new ut({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:r})}else{if(r.name==="NotAllowedError")return new ut({message:r.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:r});if(r.name==="SecurityError"){const i=window.location.hostname;if(Yg(i)){if(s.rpId!==i)return new ut({message:`The RP ID "${s.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:r})}else return new ut({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:r})}else if(r.name==="UnknownError")return new ut({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:r})}return new ut({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:r})}class Dw{createNewAbortSignal(){if(this.controller){const s=new Error("Cancelling existing WebAuthn API call for new one");s.name="AbortError",this.controller.abort(s)}const a=new AbortController;return this.controller=a,a.signal}cancelCeremony(){if(this.controller){const a=new Error("Manually cancelling existing WebAuthn API call");a.name="AbortError",this.controller.abort(a),this.controller=void 0}}}const Mw=new Dw;function Uw(r){if(!r)throw new Error("Credential creation options are required");if(typeof PublicKeyCredential<"u"&&"parseCreationOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON=="function")return PublicKeyCredential.parseCreationOptionsFromJSON(r);const{challenge:a,user:s,excludeCredentials:i}=r,c=Ol(r,["challenge","user","excludeCredentials"]),u=Ss(a).buffer,h=Object.assign(Object.assign({},s),{id:Ss(s.id).buffer}),p=Object.assign(Object.assign({},c),{challenge:u,user:h});if(i&&i.length>0){p.excludeCredentials=new Array(i.length);for(let m=0;m<i.length;m++){const g=i[m];p.excludeCredentials[m]=Object.assign(Object.assign({},g),{id:Ss(g.id).buffer,type:g.type||"public-key",transports:g.transports})}}return p}function Lw(r){if(!r)throw new Error("Credential request options are required");if(typeof PublicKeyCredential<"u"&&"parseRequestOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON=="function")return PublicKeyCredential.parseRequestOptionsFromJSON(r);const{challenge:a,allowCredentials:s}=r,i=Ol(r,["challenge","allowCredentials"]),c=Ss(a).buffer,u=Object.assign(Object.assign({},i),{challenge:c});if(s&&s.length>0){u.allowCredentials=new Array(s.length);for(let h=0;h<s.length;h++){const p=s[h];u.allowCredentials[h]=Object.assign(Object.assign({},p),{id:Ss(p.id).buffer,type:p.type||"public-key",transports:p.transports})}}return u}function Bw(r){var a;if("toJSON"in r&&typeof r.toJSON=="function")return r.toJSON();const s=r;return{id:r.id,rawId:r.id,response:{attestationObject:yn(new Uint8Array(r.response.attestationObject)),clientDataJSON:yn(new Uint8Array(r.response.clientDataJSON))},type:"public-key",clientExtensionResults:r.getClientExtensionResults(),authenticatorAttachment:(a=s.authenticatorAttachment)!==null&&a!==void 0?a:void 0}}function Hw(r){var a;if("toJSON"in r&&typeof r.toJSON=="function")return r.toJSON();const s=r,i=r.getClientExtensionResults(),c=r.response;return{id:r.id,rawId:r.id,response:{authenticatorData:yn(new Uint8Array(c.authenticatorData)),clientDataJSON:yn(new Uint8Array(c.clientDataJSON)),signature:yn(new Uint8Array(c.signature)),userHandle:c.userHandle?yn(new Uint8Array(c.userHandle)):void 0},type:"public-key",clientExtensionResults:i,authenticatorAttachment:(a=s.authenticatorAttachment)!==null&&a!==void 0?a:void 0}}function Yg(r){return r==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(r)}function Cm(){var r,a;return!!(Ct()&&"PublicKeyCredential"in window&&window.PublicKeyCredential&&"credentials"in navigator&&typeof((r=navigator?.credentials)===null||r===void 0?void 0:r.create)=="function"&&typeof((a=navigator?.credentials)===null||a===void 0?void 0:a.get)=="function")}async function $w(r){try{const a=await navigator.credentials.create(r);return a?a instanceof PublicKeyCredential?{data:a,error:null}:{data:null,error:new Nl("Browser returned unexpected credential type",a)}:{data:null,error:new Nl("Empty credential response",a)}}catch(a){return{data:null,error:zw({error:a,options:r})}}}async function qw(r){try{const a=await navigator.credentials.get(r);return a?a instanceof PublicKeyCredential?{data:a,error:null}:{data:null,error:new Nl("Browser returned unexpected credential type",a)}:{data:null,error:new Nl("Empty credential response",a)}}catch(a){return{data:null,error:Ow({error:a,options:r})}}}const Pw={hints:["security-key"],authenticatorSelection:{authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"preferred",residentKey:"discouraged"},attestation:"direct"},Iw={userVerification:"preferred",hints:["security-key"],attestation:"direct"};function Cl(...r){const a=c=>c!==null&&typeof c=="object"&&!Array.isArray(c),s=c=>c instanceof ArrayBuffer||ArrayBuffer.isView(c),i={};for(const c of r)if(c)for(const u in c){const h=c[u];if(h!==void 0)if(Array.isArray(h))i[u]=h;else if(s(h))i[u]=h;else if(a(h)){const p=i[u];a(p)?i[u]=Cl(p,h):i[u]=Cl(h)}else i[u]=h}return i}function Yw(r,a){return Cl(Pw,r,a||{})}function Gw(r,a){return Cl(Iw,r,a||{})}class Vw{constructor(a){this.client=a,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(a){return this.client.mfa.enroll(Object.assign(Object.assign({},a),{factorType:"webauthn"}))}async _challenge({factorId:a,webauthn:s,friendlyName:i,signal:c},u){var h;try{const{data:p,error:m}=await this.client.mfa.challenge({factorId:a,webauthn:s});if(!p)return{data:null,error:m};const g=c??Mw.createNewAbortSignal();if(p.webauthn.type==="create"){const{user:y}=p.webauthn.credential_options.publicKey;if(!y.name){const x=i;if(x)y.name=`${y.id}:${x}`;else{const k=(await this.client.getUser()).data.user,T=((h=k?.user_metadata)===null||h===void 0?void 0:h.name)||k?.email||k?.id||"User";y.name=`${y.id}:${T}`}}y.displayName||(y.displayName=y.name)}switch(p.webauthn.type){case"create":{const y=Yw(p.webauthn.credential_options.publicKey,u?.create),{data:x,error:S}=await $w({publicKey:y,signal:g});return x?{data:{factorId:a,challengeId:p.id,webauthn:{type:p.webauthn.type,credential_response:x}},error:null}:{data:null,error:S}}case"request":{const y=Gw(p.webauthn.credential_options.publicKey,u?.request),{data:x,error:S}=await qw(Object.assign(Object.assign({},p.webauthn.credential_options),{publicKey:y,signal:g}));return x?{data:{factorId:a,challengeId:p.id,webauthn:{type:p.webauthn.type,credential_response:x}},error:null}:{data:null,error:S}}}}catch(p){return ie(p)?{data:null,error:p}:{data:null,error:new xn("Unexpected error in challenge",p)}}}async _verify({challengeId:a,factorId:s,webauthn:i}){return this.client.mfa.verify({factorId:s,challengeId:a,webauthn:i})}async _authenticate({factorId:a,webauthn:{rpId:s=typeof window<"u"?window.location.hostname:void 0,rpOrigins:i=typeof window<"u"?[window.location.origin]:void 0,signal:c}={}},u){if(!s)return{data:null,error:new Pi("rpId is required for WebAuthn authentication")};try{if(!Cm())return{data:null,error:new xn("Browser does not support WebAuthn",null)};const{data:h,error:p}=await this.challenge({factorId:a,webauthn:{rpId:s,rpOrigins:i},signal:c},{request:u});if(!h)return{data:null,error:p};const{webauthn:m}=h;return this._verify({factorId:a,challengeId:h.challengeId,webauthn:{type:m.type,rpId:s,rpOrigins:i,credential_response:m.credential_response}})}catch(h){return ie(h)?{data:null,error:h}:{data:null,error:new xn("Unexpected error in authenticate",h)}}}async _register({friendlyName:a,webauthn:{rpId:s=typeof window<"u"?window.location.hostname:void 0,rpOrigins:i=typeof window<"u"?[window.location.origin]:void 0,signal:c}={}},u){if(!s)return{data:null,error:new Pi("rpId is required for WebAuthn registration")};try{if(!Cm())return{data:null,error:new xn("Browser does not support WebAuthn",null)};const{data:h,error:p}=await this._enroll({friendlyName:a});if(!h)return await this.client.mfa.listFactors().then(y=>{var x;return(x=y.data)===null||x===void 0?void 0:x.all.find(S=>S.factor_type==="webauthn"&&S.friendly_name===a&&S.status!=="unverified")}).then(y=>y?this.client.mfa.unenroll({factorId:y?.id}):void 0),{data:null,error:p};const{data:m,error:g}=await this._challenge({factorId:h.id,friendlyName:h.friendly_name,webauthn:{rpId:s,rpOrigins:i},signal:c},{create:u});return m?this._verify({factorId:h.id,challengeId:m.challengeId,webauthn:{rpId:s,rpOrigins:i,type:m.webauthn.type,credential_response:m.webauthn.credential_response}}):{data:null,error:g}}catch(h){return ie(h)?{data:null,error:h}:{data:null,error:new xn("Unexpected error in register",h)}}}}Cw();const Xw={url:Y5,storageKey:G5,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:V5,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:5e3,skipAutoInitialize:!1};async function Tm(r,a,s){return await s()}const ps={};class Ii{get jwks(){var a,s;return(s=(a=ps[this.storageKey])===null||a===void 0?void 0:a.jwks)!==null&&s!==void 0?s:{keys:[]}}set jwks(a){ps[this.storageKey]=Object.assign(Object.assign({},ps[this.storageKey]),{jwks:a})}get jwks_cached_at(){var a,s;return(s=(a=ps[this.storageKey])===null||a===void 0?void 0:a.cachedAt)!==null&&s!==void 0?s:Number.MIN_SAFE_INTEGER}set jwks_cached_at(a){ps[this.storageKey]=Object.assign(Object.assign({},ps[this.storageKey]),{cachedAt:a})}constructor(a){var s,i,c;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;const u=Object.assign(Object.assign({},Xw),a);if(this.storageKey=u.storageKey,this.instanceID=(s=Ii.nextInstanceID[this.storageKey])!==null&&s!==void 0?s:0,Ii.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!u.debug,typeof u.debug=="function"&&(this.logger=u.debug),this.instanceID>0&&Ct()){const h=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(h),this.logDebugMessages&&console.trace(h)}if(this.persistSession=u.persistSession,this.autoRefreshToken=u.autoRefreshToken,this.admin=new Ew({url:u.url,headers:u.headers,fetch:u.fetch}),this.url=u.url,this.headers=u.headers,this.fetch=qg(u.fetch),this.lock=u.lock||Tm,this.detectSessionInUrl=u.detectSessionInUrl,this.flowType=u.flowType,this.hasCustomAuthorizationHeader=u.hasCustomAuthorizationHeader,this.throwOnError=u.throwOnError,this.lockAcquireTimeout=u.lockAcquireTimeout,u.lock?this.lock=u.lock:this.persistSession&&Ct()&&(!((i=globalThis?.navigator)===null||i===void 0)&&i.locks)?this.lock=Nw:this.lock=Tm,this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new Vw(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.persistSession?(u.storage?this.storage=u.storage:$g()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=Em(this.memoryStorage)),u.userStorage&&(this.userStorage=u.userStorage)):(this.memoryStorage={},this.storage=Em(this.memoryStorage)),Ct()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(h){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",h)}(c=this.broadcastChannel)===null||c===void 0||c.addEventListener("message",async h=>{this._debug("received broadcast notification from other tab or client",h);try{await this._notifyAllSubscribers(h.data.event,h.data.session,!1)}catch(p){this._debug("#broadcastChannel","error",p)}})}u.skipAutoInitialize||this.initialize().catch(h=>{this._debug("#initialize()","error",h)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(a){if(this.throwOnError&&a&&a.error)throw a.error;return a}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${Lg}) ${new Date().toISOString()}`}_debug(...a){return this.logDebugMessages&&this.logger(this._logPrefix(),...a),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){var a;try{let s={},i="none";if(Ct()&&(s=iw(window.location.href),this._isImplicitGrantCallback(s)?i="implicit":await this._isPKCECallback(s)&&(i="pkce")),Ct()&&this.detectSessionInUrl&&i!=="none"){const{data:c,error:u}=await this._getSessionFromURL(s,i);if(u){if(this._debug("#_initialize()","error detecting session from URL",u),W5(u)){const m=(a=u.details)===null||a===void 0?void 0:a.code;if(m==="identity_already_exists"||m==="identity_not_found"||m==="single_identity_not_deletable")return{error:u}}return{error:u}}const{session:h,redirectType:p}=c;return this._debug("#_initialize()","detected session in URL",h,"redirect type",p),await this._saveSession(h),setTimeout(async()=>{p==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",h):await this._notifyAllSubscribers("SIGNED_IN",h)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(s){return ie(s)?this._returnResult({error:s}):this._returnResult({error:new xn("Unexpected error during initialization",s)})}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(a){var s,i,c;try{const u=await ce(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(i=(s=a?.options)===null||s===void 0?void 0:s.data)!==null&&i!==void 0?i:{},gotrue_meta_security:{captcha_token:(c=a?.options)===null||c===void 0?void 0:c.captchaToken}},xform:Sa}),{data:h,error:p}=u;if(p||!h)return this._returnResult({data:{user:null,session:null},error:p});const m=h.session,g=h.user;return h.session&&(await this._saveSession(h.session),await this._notifyAllSubscribers("SIGNED_IN",m)),this._returnResult({data:{user:g,session:m},error:null})}catch(u){if(ie(u))return this._returnResult({data:{user:null,session:null},error:u});throw u}}async signUp(a){var s,i,c;try{let u;if("email"in a){const{email:y,password:x,options:S}=a;let k=null,T=null;this.flowType==="pkce"&&([k,T]=await hs(this.storage,this.storageKey)),u=await ce(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:S?.emailRedirectTo,body:{email:y,password:x,data:(s=S?.data)!==null&&s!==void 0?s:{},gotrue_meta_security:{captcha_token:S?.captchaToken},code_challenge:k,code_challenge_method:T},xform:Sa})}else if("phone"in a){const{phone:y,password:x,options:S}=a;u=await ce(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:y,password:x,data:(i=S?.data)!==null&&i!==void 0?i:{},channel:(c=S?.channel)!==null&&c!==void 0?c:"sms",gotrue_meta_security:{captcha_token:S?.captchaToken}},xform:Sa})}else throw new gl("You must provide either an email or phone number and a password");const{data:h,error:p}=u;if(p||!h)return await Nt(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:p});const m=h.session,g=h.user;return h.session&&(await this._saveSession(h.session),await this._notifyAllSubscribers("SIGNED_IN",m)),this._returnResult({data:{user:g,session:m},error:null})}catch(u){if(await Nt(this.storage,`${this.storageKey}-code-verifier`),ie(u))return this._returnResult({data:{user:null,session:null},error:u});throw u}}async signInWithPassword(a){try{let s;if("email"in a){const{email:u,password:h,options:p}=a;s=await ce(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:u,password:h,gotrue_meta_security:{captcha_token:p?.captchaToken}},xform:jm})}else if("phone"in a){const{phone:u,password:h,options:p}=a;s=await ce(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:u,password:h,gotrue_meta_security:{captcha_token:p?.captchaToken}},xform:jm})}else throw new gl("You must provide either an email or phone number and a password");const{data:i,error:c}=s;if(c)return this._returnResult({data:{user:null,session:null},error:c});if(!i||!i.session||!i.user){const u=new ds;return this._returnResult({data:{user:null,session:null},error:u})}return i.session&&(await this._saveSession(i.session),await this._notifyAllSubscribers("SIGNED_IN",i.session)),this._returnResult({data:Object.assign({user:i.user,session:i.session},i.weak_password?{weakPassword:i.weak_password}:null),error:c})}catch(s){if(ie(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async signInWithOAuth(a){var s,i,c,u;return await this._handleProviderSignIn(a.provider,{redirectTo:(s=a.options)===null||s===void 0?void 0:s.redirectTo,scopes:(i=a.options)===null||i===void 0?void 0:i.scopes,queryParams:(c=a.options)===null||c===void 0?void 0:c.queryParams,skipBrowserRedirect:(u=a.options)===null||u===void 0?void 0:u.skipBrowserRedirect})}async exchangeCodeForSession(a){return await this.initializePromise,this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(a))}async signInWithWeb3(a){const{chain:s}=a;switch(s){case"ethereum":return await this.signInWithEthereum(a);case"solana":return await this.signInWithSolana(a);default:throw new Error(`@supabase/auth-js: Unsupported chain "${s}"`)}}async signInWithEthereum(a){var s,i,c,u,h,p,m,g,y,x,S;let k,T;if("message"in a)k=a.message,T=a.signature;else{const{chain:C,wallet:_,statement:z,options:M}=a;let R;if(Ct())if(typeof _=="object")R=_;else{const te=window;if("ethereum"in te&&typeof te.ethereum=="object"&&"request"in te.ethereum&&typeof te.ethereum.request=="function")R=te.ethereum;else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")}else{if(typeof _!="object"||!M?.url)throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");R=_}const V=new URL((s=M?.url)!==null&&s!==void 0?s:window.location.href),G=await R.request({method:"eth_requestAccounts"}).then(te=>te).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")});if(!G||G.length===0)throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");const Q=Ig(G[0]);let X=(i=M?.signInWithEthereum)===null||i===void 0?void 0:i.chainId;if(!X){const te=await R.request({method:"eth_chainId"});X=Tw(te)}const K={domain:V.host,address:Q,statement:z,uri:V.href,version:"1",chainId:X,nonce:(c=M?.signInWithEthereum)===null||c===void 0?void 0:c.nonce,issuedAt:(h=(u=M?.signInWithEthereum)===null||u===void 0?void 0:u.issuedAt)!==null&&h!==void 0?h:new Date,expirationTime:(p=M?.signInWithEthereum)===null||p===void 0?void 0:p.expirationTime,notBefore:(m=M?.signInWithEthereum)===null||m===void 0?void 0:m.notBefore,requestId:(g=M?.signInWithEthereum)===null||g===void 0?void 0:g.requestId,resources:(y=M?.signInWithEthereum)===null||y===void 0?void 0:y.resources};k=Rw(K),T=await R.request({method:"personal_sign",params:[Aw(k),Q]})}try{const{data:C,error:_}=await ce(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"ethereum",message:k,signature:T},!((x=a.options)===null||x===void 0)&&x.captchaToken?{gotrue_meta_security:{captcha_token:(S=a.options)===null||S===void 0?void 0:S.captchaToken}}:null),xform:Sa});if(_)throw _;if(!C||!C.session||!C.user){const z=new ds;return this._returnResult({data:{user:null,session:null},error:z})}return C.session&&(await this._saveSession(C.session),await this._notifyAllSubscribers("SIGNED_IN",C.session)),this._returnResult({data:Object.assign({},C),error:_})}catch(C){if(ie(C))return this._returnResult({data:{user:null,session:null},error:C});throw C}}async signInWithSolana(a){var s,i,c,u,h,p,m,g,y,x,S,k;let T,C;if("message"in a)T=a.message,C=a.signature;else{const{chain:_,wallet:z,statement:M,options:R}=a;let V;if(Ct())if(typeof z=="object")V=z;else{const Q=window;if("solana"in Q&&typeof Q.solana=="object"&&("signIn"in Q.solana&&typeof Q.solana.signIn=="function"||"signMessage"in Q.solana&&typeof Q.solana.signMessage=="function"))V=Q.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof z!="object"||!R?.url)throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");V=z}const G=new URL((s=R?.url)!==null&&s!==void 0?s:window.location.href);if("signIn"in V&&V.signIn){const Q=await V.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},R?.signInWithSolana),{version:"1",domain:G.host,uri:G.href}),M?{statement:M}:null));let X;if(Array.isArray(Q)&&Q[0]&&typeof Q[0]=="object")X=Q[0];else if(Q&&typeof Q=="object"&&"signedMessage"in Q&&"signature"in Q)X=Q;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in X&&"signature"in X&&(typeof X.signedMessage=="string"||X.signedMessage instanceof Uint8Array)&&X.signature instanceof Uint8Array)T=typeof X.signedMessage=="string"?X.signedMessage:new TextDecoder().decode(X.signedMessage),C=X.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in V)||typeof V.signMessage!="function"||!("publicKey"in V)||typeof V!="object"||!V.publicKey||!("toBase58"in V.publicKey)||typeof V.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");T=[`${G.host} wants you to sign in with your Solana account:`,V.publicKey.toBase58(),...M?["",M,""]:[""],"Version: 1",`URI: ${G.href}`,`Issued At: ${(c=(i=R?.signInWithSolana)===null||i===void 0?void 0:i.issuedAt)!==null&&c!==void 0?c:new Date().toISOString()}`,...!((u=R?.signInWithSolana)===null||u===void 0)&&u.notBefore?[`Not Before: ${R.signInWithSolana.notBefore}`]:[],...!((h=R?.signInWithSolana)===null||h===void 0)&&h.expirationTime?[`Expiration Time: ${R.signInWithSolana.expirationTime}`]:[],...!((p=R?.signInWithSolana)===null||p===void 0)&&p.chainId?[`Chain ID: ${R.signInWithSolana.chainId}`]:[],...!((m=R?.signInWithSolana)===null||m===void 0)&&m.nonce?[`Nonce: ${R.signInWithSolana.nonce}`]:[],...!((g=R?.signInWithSolana)===null||g===void 0)&&g.requestId?[`Request ID: ${R.signInWithSolana.requestId}`]:[],...!((x=(y=R?.signInWithSolana)===null||y===void 0?void 0:y.resources)===null||x===void 0)&&x.length?["Resources",...R.signInWithSolana.resources.map(X=>`- ${X}`)]:[]].join(`
`);const Q=await V.signMessage(new TextEncoder().encode(T),"utf8");if(!Q||!(Q instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");C=Q}}try{const{data:_,error:z}=await ce(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:T,signature:yn(C)},!((S=a.options)===null||S===void 0)&&S.captchaToken?{gotrue_meta_security:{captcha_token:(k=a.options)===null||k===void 0?void 0:k.captchaToken}}:null),xform:Sa});if(z)throw z;if(!_||!_.session||!_.user){const M=new ds;return this._returnResult({data:{user:null,session:null},error:M})}return _.session&&(await this._saveSession(_.session),await this._notifyAllSubscribers("SIGNED_IN",_.session)),this._returnResult({data:Object.assign({},_),error:z})}catch(_){if(ie(_))return this._returnResult({data:{user:null,session:null},error:_});throw _}}async _exchangeCodeForSession(a){const s=await mn(this.storage,`${this.storageKey}-code-verifier`),[i,c]=(s??"").split("/");try{if(!i&&this.flowType==="pkce")throw new Z5;const{data:u,error:h}=await ce(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:a,code_verifier:i},xform:Sa});if(await Nt(this.storage,`${this.storageKey}-code-verifier`),h)throw h;if(!u||!u.session||!u.user){const p=new ds;return this._returnResult({data:{user:null,session:null,redirectType:null},error:p})}return u.session&&(await this._saveSession(u.session),await this._notifyAllSubscribers("SIGNED_IN",u.session)),this._returnResult({data:Object.assign(Object.assign({},u),{redirectType:c??null}),error:h})}catch(u){if(await Nt(this.storage,`${this.storageKey}-code-verifier`),ie(u))return this._returnResult({data:{user:null,session:null,redirectType:null},error:u});throw u}}async signInWithIdToken(a){try{const{options:s,provider:i,token:c,access_token:u,nonce:h}=a,p=await ce(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:i,id_token:c,access_token:u,nonce:h,gotrue_meta_security:{captcha_token:s?.captchaToken}},xform:Sa}),{data:m,error:g}=p;if(g)return this._returnResult({data:{user:null,session:null},error:g});if(!m||!m.session||!m.user){const y=new ds;return this._returnResult({data:{user:null,session:null},error:y})}return m.session&&(await this._saveSession(m.session),await this._notifyAllSubscribers("SIGNED_IN",m.session)),this._returnResult({data:m,error:g})}catch(s){if(ie(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async signInWithOtp(a){var s,i,c,u,h;try{if("email"in a){const{email:p,options:m}=a;let g=null,y=null;this.flowType==="pkce"&&([g,y]=await hs(this.storage,this.storageKey));const{error:x}=await ce(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:p,data:(s=m?.data)!==null&&s!==void 0?s:{},create_user:(i=m?.shouldCreateUser)!==null&&i!==void 0?i:!0,gotrue_meta_security:{captcha_token:m?.captchaToken},code_challenge:g,code_challenge_method:y},redirectTo:m?.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:x})}if("phone"in a){const{phone:p,options:m}=a,{data:g,error:y}=await ce(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:p,data:(c=m?.data)!==null&&c!==void 0?c:{},create_user:(u=m?.shouldCreateUser)!==null&&u!==void 0?u:!0,gotrue_meta_security:{captcha_token:m?.captchaToken},channel:(h=m?.channel)!==null&&h!==void 0?h:"sms"}});return this._returnResult({data:{user:null,session:null,messageId:g?.message_id},error:y})}throw new gl("You must provide either an email or phone number.")}catch(p){if(await Nt(this.storage,`${this.storageKey}-code-verifier`),ie(p))return this._returnResult({data:{user:null,session:null},error:p});throw p}}async verifyOtp(a){var s,i;try{let c,u;"options"in a&&(c=(s=a.options)===null||s===void 0?void 0:s.redirectTo,u=(i=a.options)===null||i===void 0?void 0:i.captchaToken);const{data:h,error:p}=await ce(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},a),{gotrue_meta_security:{captcha_token:u}}),redirectTo:c,xform:Sa});if(p)throw p;if(!h)throw new Error("An error occurred on token verification.");const m=h.session,g=h.user;return m?.access_token&&(await this._saveSession(m),await this._notifyAllSubscribers(a.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",m)),this._returnResult({data:{user:g,session:m},error:null})}catch(c){if(ie(c))return this._returnResult({data:{user:null,session:null},error:c});throw c}}async signInWithSSO(a){var s,i,c,u,h;try{let p=null,m=null;this.flowType==="pkce"&&([p,m]=await hs(this.storage,this.storageKey));const g=await ce(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in a?{provider_id:a.providerId}:null),"domain"in a?{domain:a.domain}:null),{redirect_to:(i=(s=a.options)===null||s===void 0?void 0:s.redirectTo)!==null&&i!==void 0?i:void 0}),!((c=a?.options)===null||c===void 0)&&c.captchaToken?{gotrue_meta_security:{captcha_token:a.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:p,code_challenge_method:m}),headers:this.headers,xform:Sw});return!((u=g.data)===null||u===void 0)&&u.url&&Ct()&&!(!((h=a.options)===null||h===void 0)&&h.skipBrowserRedirect)&&window.location.assign(g.data.url),this._returnResult(g)}catch(p){if(await Nt(this.storage,`${this.storageKey}-code-verifier`),ie(p))return this._returnResult({data:null,error:p});throw p}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async a=>{const{data:{session:s},error:i}=a;if(i)throw i;if(!s)throw new Qt;const{error:c}=await ce(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:s.access_token});return this._returnResult({data:{user:null,session:null},error:c})})}catch(a){if(ie(a))return this._returnResult({data:{user:null,session:null},error:a});throw a}}async resend(a){try{const s=`${this.url}/resend`;if("email"in a){const{email:i,type:c,options:u}=a,{error:h}=await ce(this.fetch,"POST",s,{headers:this.headers,body:{email:i,type:c,gotrue_meta_security:{captcha_token:u?.captchaToken}},redirectTo:u?.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:h})}else if("phone"in a){const{phone:i,type:c,options:u}=a,{data:h,error:p}=await ce(this.fetch,"POST",s,{headers:this.headers,body:{phone:i,type:c,gotrue_meta_security:{captcha_token:u?.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:h?.message_id},error:p})}throw new gl("You must provide either an email or phone number and a type")}catch(s){if(ie(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async getSession(){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async s=>s))}async _acquireLock(a,s){this._debug("#_acquireLock","begin",a);try{if(this.lockAcquired){const i=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),c=(async()=>(await i,await s()))();return this.pendingInLock.push((async()=>{try{await c}catch{}})()),c}return await this.lock(`lock:${this.storageKey}`,a,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const i=s();for(this.pendingInLock.push((async()=>{try{await i}catch{}})()),await i;this.pendingInLock.length;){const c=[...this.pendingInLock];await Promise.all(c),this.pendingInLock.splice(0,c.length)}return await i}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(a){this._debug("#_useSession","begin");try{const s=await this.__loadSession();return await a(s)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let a=null;const s=await mn(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",s),s!==null&&(this._isValidSession(s)?a=s:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!a)return{data:{session:null},error:null};const i=a.expires_at?a.expires_at*1e3-Date.now()<nd:!1;if(this._debug("#__loadSession()",`session has${i?"":" not"} expired`,"expires_at",a.expires_at),!i){if(this.userStorage){const h=await mn(this.userStorage,this.storageKey+"-user");h?.user?a.user=h.user:a.user=id()}if(this.storage.isServer&&a.user&&!a.user.__isUserNotAvailableProxy){const h={value:this.suppressGetSessionWarning};a.user=yw(a.user,h),h.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:a},error:null}}const{data:c,error:u}=await this._callRefreshToken(a.refresh_token);return u?this._returnResult({data:{session:null},error:u}):this._returnResult({data:{session:c},error:null})}finally{this._debug("#__loadSession()","end")}}async getUser(a){if(a)return await this._getUser(a);await this.initializePromise;const s=await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser());return s.data.user&&(this.suppressGetSessionWarning=!0),s}async _getUser(a){try{return a?await ce(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:a,xform:Gr}):await this._useSession(async s=>{var i,c,u;const{data:h,error:p}=s;if(p)throw p;return!(!((i=h.session)===null||i===void 0)&&i.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new Qt}:await ce(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(u=(c=h.session)===null||c===void 0?void 0:c.access_token)!==null&&u!==void 0?u:void 0,xform:Gr})})}catch(s){if(ie(s))return ml(s)&&(await this._removeSession(),await Nt(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({data:{user:null},error:s});throw s}}async updateUser(a,s={}){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(a,s))}async _updateUser(a,s={}){try{return await this._useSession(async i=>{const{data:c,error:u}=i;if(u)throw u;if(!c.session)throw new Qt;const h=c.session;let p=null,m=null;this.flowType==="pkce"&&a.email!=null&&([p,m]=await hs(this.storage,this.storageKey));const{data:g,error:y}=await ce(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:s?.emailRedirectTo,body:Object.assign(Object.assign({},a),{code_challenge:p,code_challenge_method:m}),jwt:h.access_token,xform:Gr});if(y)throw y;return h.user=g.user,await this._saveSession(h),await this._notifyAllSubscribers("USER_UPDATED",h),this._returnResult({data:{user:h.user},error:null})})}catch(i){if(await Nt(this.storage,`${this.storageKey}-code-verifier`),ie(i))return this._returnResult({data:{user:null},error:i});throw i}}async setSession(a){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(a))}async _setSession(a){try{if(!a.access_token||!a.refresh_token)throw new Qt;const s=Date.now()/1e3;let i=s,c=!0,u=null;const{payload:h}=xl(a.access_token);if(h.exp&&(i=h.exp,c=i<=s),c){const{data:p,error:m}=await this._callRefreshToken(a.refresh_token);if(m)return this._returnResult({data:{user:null,session:null},error:m});if(!p)return{data:{user:null,session:null},error:null};u=p}else{const{data:p,error:m}=await this._getUser(a.access_token);if(m)return this._returnResult({data:{user:null,session:null},error:m});u={access_token:a.access_token,refresh_token:a.refresh_token,user:p.user,token_type:"bearer",expires_in:i-s,expires_at:i},await this._saveSession(u),await this._notifyAllSubscribers("SIGNED_IN",u)}return this._returnResult({data:{user:u.user,session:u},error:null})}catch(s){if(ie(s))return this._returnResult({data:{session:null,user:null},error:s});throw s}}async refreshSession(a){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(a))}async _refreshSession(a){try{return await this._useSession(async s=>{var i;if(!a){const{data:h,error:p}=s;if(p)throw p;a=(i=h.session)!==null&&i!==void 0?i:void 0}if(!a?.refresh_token)throw new Qt;const{data:c,error:u}=await this._callRefreshToken(a.refresh_token);return u?this._returnResult({data:{user:null,session:null},error:u}):c?this._returnResult({data:{user:c.user,session:c},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(s){if(ie(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async _getSessionFromURL(a,s){try{if(!Ct())throw new bl("No browser detected.");if(a.error||a.error_description||a.error_code)throw new bl(a.error_description||"Error in URL with unspecified error_description",{error:a.error||"unspecified_error",code:a.error_code||"unspecified_code"});switch(s){case"implicit":if(this.flowType==="pkce")throw new bm("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new bl("Not a valid implicit grant flow url.");break;default:}if(s==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!a.code)throw new bm("No code detected.");const{data:M,error:R}=await this._exchangeCodeForSession(a.code);if(R)throw R;const V=new URL(window.location.href);return V.searchParams.delete("code"),window.history.replaceState(window.history.state,"",V.toString()),{data:{session:M.session,redirectType:null},error:null}}const{provider_token:i,provider_refresh_token:c,access_token:u,refresh_token:h,expires_in:p,expires_at:m,token_type:g}=a;if(!u||!p||!h||!g)throw new bl("No session defined in URL");const y=Math.round(Date.now()/1e3),x=parseInt(p);let S=y+x;m&&(S=parseInt(m));const k=S-y;k*1e3<=ys&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${k}s, should have been closer to ${x}s`);const T=S-x;y-T>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",T,S,y):y-T<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",T,S,y);const{data:C,error:_}=await this._getUser(u);if(_)throw _;const z={provider_token:i,provider_refresh_token:c,access_token:u,expires_in:x,expires_at:S,refresh_token:h,token_type:g,user:C.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),this._returnResult({data:{session:z,redirectType:a.type},error:null})}catch(i){if(ie(i))return this._returnResult({data:{session:null,redirectType:null},error:i});throw i}}_isImplicitGrantCallback(a){return typeof this.detectSessionInUrl=="function"?this.detectSessionInUrl(new URL(window.location.href),a):!!(a.access_token||a.error_description)}async _isPKCECallback(a){const s=await mn(this.storage,`${this.storageKey}-code-verifier`);return!!(a.code&&s)}async signOut(a={scope:"global"}){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(a))}async _signOut({scope:a}={scope:"global"}){return await this._useSession(async s=>{var i;const{data:c,error:u}=s;if(u&&!ml(u))return this._returnResult({error:u});const h=(i=c.session)===null||i===void 0?void 0:i.access_token;if(h){const{error:p}=await this.admin.signOut(h,a);if(p&&!(J5(p)&&(p.status===404||p.status===401||p.status===403)||ml(p)))return this._returnResult({error:p})}return a!=="others"&&(await this._removeSession(),await Nt(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({error:null})})}onAuthStateChange(a){const s=sw(),i={id:s,callback:a,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",s),this.stateChangeEmitters.delete(s)}};return this._debug("#onAuthStateChange()","registered callback with id",s),this.stateChangeEmitters.set(s,i),(async()=>(await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(s)})))(),{data:{subscription:i}}}async _emitInitialSession(a){return await this._useSession(async s=>{var i,c;try{const{data:{session:u},error:h}=s;if(h)throw h;await((i=this.stateChangeEmitters.get(a))===null||i===void 0?void 0:i.callback("INITIAL_SESSION",u)),this._debug("INITIAL_SESSION","callback id",a,"session",u)}catch(u){await((c=this.stateChangeEmitters.get(a))===null||c===void 0?void 0:c.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",a,"error",u),ml(u)?console.warn(u):console.error(u)}})}async resetPasswordForEmail(a,s={}){let i=null,c=null;this.flowType==="pkce"&&([i,c]=await hs(this.storage,this.storageKey,!0));try{return await ce(this.fetch,"POST",`${this.url}/recover`,{body:{email:a,code_challenge:i,code_challenge_method:c,gotrue_meta_security:{captcha_token:s.captchaToken}},headers:this.headers,redirectTo:s.redirectTo})}catch(u){if(await Nt(this.storage,`${this.storageKey}-code-verifier`),ie(u))return this._returnResult({data:null,error:u});throw u}}async getUserIdentities(){var a;try{const{data:s,error:i}=await this.getUser();if(i)throw i;return this._returnResult({data:{identities:(a=s.user.identities)!==null&&a!==void 0?a:[]},error:null})}catch(s){if(ie(s))return this._returnResult({data:null,error:s});throw s}}async linkIdentity(a){return"token"in a?this.linkIdentityIdToken(a):this.linkIdentityOAuth(a)}async linkIdentityOAuth(a){var s;try{const{data:i,error:c}=await this._useSession(async u=>{var h,p,m,g,y;const{data:x,error:S}=u;if(S)throw S;const k=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,a.provider,{redirectTo:(h=a.options)===null||h===void 0?void 0:h.redirectTo,scopes:(p=a.options)===null||p===void 0?void 0:p.scopes,queryParams:(m=a.options)===null||m===void 0?void 0:m.queryParams,skipBrowserRedirect:!0});return await ce(this.fetch,"GET",k,{headers:this.headers,jwt:(y=(g=x.session)===null||g===void 0?void 0:g.access_token)!==null&&y!==void 0?y:void 0})});if(c)throw c;return Ct()&&!(!((s=a.options)===null||s===void 0)&&s.skipBrowserRedirect)&&window.location.assign(i?.url),this._returnResult({data:{provider:a.provider,url:i?.url},error:null})}catch(i){if(ie(i))return this._returnResult({data:{provider:a.provider,url:null},error:i});throw i}}async linkIdentityIdToken(a){return await this._useSession(async s=>{var i;try{const{error:c,data:{session:u}}=s;if(c)throw c;const{options:h,provider:p,token:m,access_token:g,nonce:y}=a,x=await ce(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:(i=u?.access_token)!==null&&i!==void 0?i:void 0,body:{provider:p,id_token:m,access_token:g,nonce:y,link_identity:!0,gotrue_meta_security:{captcha_token:h?.captchaToken}},xform:Sa}),{data:S,error:k}=x;return k?this._returnResult({data:{user:null,session:null},error:k}):!S||!S.session||!S.user?this._returnResult({data:{user:null,session:null},error:new ds}):(S.session&&(await this._saveSession(S.session),await this._notifyAllSubscribers("USER_UPDATED",S.session)),this._returnResult({data:S,error:k}))}catch(c){if(await Nt(this.storage,`${this.storageKey}-code-verifier`),ie(c))return this._returnResult({data:{user:null,session:null},error:c});throw c}})}async unlinkIdentity(a){try{return await this._useSession(async s=>{var i,c;const{data:u,error:h}=s;if(h)throw h;return await ce(this.fetch,"DELETE",`${this.url}/user/identities/${a.identity_id}`,{headers:this.headers,jwt:(c=(i=u.session)===null||i===void 0?void 0:i.access_token)!==null&&c!==void 0?c:void 0})})}catch(s){if(ie(s))return this._returnResult({data:null,error:s});throw s}}async _refreshAccessToken(a){const s=`#_refreshAccessToken(${a.substring(0,5)}...)`;this._debug(s,"begin");try{const i=Date.now();return await cw(async c=>(c>0&&await lw(200*Math.pow(2,c-1)),this._debug(s,"refreshing attempt",c),await ce(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:a},headers:this.headers,xform:Sa})),(c,u)=>{const h=200*Math.pow(2,c);return u&&sd(u)&&Date.now()+h-i<ys})}catch(i){if(this._debug(s,"error",i),ie(i))return this._returnResult({data:{session:null,user:null},error:i});throw i}finally{this._debug(s,"end")}}_isValidSession(a){return typeof a=="object"&&a!==null&&"access_token"in a&&"refresh_token"in a&&"expires_at"in a}async _handleProviderSignIn(a,s){const i=await this._getUrlForProvider(`${this.url}/authorize`,a,{redirectTo:s.redirectTo,scopes:s.scopes,queryParams:s.queryParams});return this._debug("#_handleProviderSignIn()","provider",a,"options",s,"url",i),Ct()&&!s.skipBrowserRedirect&&window.location.assign(i),{data:{provider:a,url:i},error:null}}async _recoverAndRefresh(){var a,s;const i="#_recoverAndRefresh()";this._debug(i,"begin");try{const c=await mn(this.storage,this.storageKey);if(c&&this.userStorage){let h=await mn(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!h&&(h={user:c.user},await vs(this.userStorage,this.storageKey+"-user",h)),c.user=(a=h?.user)!==null&&a!==void 0?a:id()}else if(c&&!c.user&&!c.user){const h=await mn(this.storage,this.storageKey+"-user");h&&h?.user?(c.user=h.user,await Nt(this.storage,this.storageKey+"-user"),await vs(this.storage,this.storageKey,c)):c.user=id()}if(this._debug(i,"session from storage",c),!this._isValidSession(c)){this._debug(i,"session is not valid"),c!==null&&await this._removeSession();return}const u=((s=c.expires_at)!==null&&s!==void 0?s:1/0)*1e3-Date.now()<nd;if(this._debug(i,`session has${u?"":" not"} expired with margin of ${nd}s`),u){if(this.autoRefreshToken&&c.refresh_token){const{error:h}=await this._callRefreshToken(c.refresh_token);h&&(console.error(h),sd(h)||(this._debug(i,"refresh failed with a non-retryable error, removing the session",h),await this._removeSession()))}}else if(c.user&&c.user.__isUserNotAvailableProxy===!0)try{const{data:h,error:p}=await this._getUser(c.access_token);!p&&h?.user?(c.user=h.user,await this._saveSession(c),await this._notifyAllSubscribers("SIGNED_IN",c)):this._debug(i,"could not get user data, skipping SIGNED_IN notification")}catch(h){console.error("Error getting user data:",h),this._debug(i,"error getting user data, skipping SIGNED_IN notification",h)}else await this._notifyAllSubscribers("SIGNED_IN",c)}catch(c){this._debug(i,"error",c),console.error(c);return}finally{this._debug(i,"end")}}async _callRefreshToken(a){var s,i;if(!a)throw new Qt;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const c=`#_callRefreshToken(${a.substring(0,5)}...)`;this._debug(c,"begin");try{this.refreshingDeferred=new Ul;const{data:u,error:h}=await this._refreshAccessToken(a);if(h)throw h;if(!u.session)throw new Qt;await this._saveSession(u.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",u.session);const p={data:u.session,error:null};return this.refreshingDeferred.resolve(p),p}catch(u){if(this._debug(c,"error",u),ie(u)){const h={data:null,error:u};return sd(u)||await this._removeSession(),(s=this.refreshingDeferred)===null||s===void 0||s.resolve(h),h}throw(i=this.refreshingDeferred)===null||i===void 0||i.reject(u),u}finally{this.refreshingDeferred=null,this._debug(c,"end")}}async _notifyAllSubscribers(a,s,i=!0){const c=`#_notifyAllSubscribers(${a})`;this._debug(c,"begin",s,`broadcast = ${i}`);try{this.broadcastChannel&&i&&this.broadcastChannel.postMessage({event:a,session:s});const u=[],h=Array.from(this.stateChangeEmitters.values()).map(async p=>{try{await p.callback(a,s)}catch(m){u.push(m)}});if(await Promise.all(h),u.length>0){for(let p=0;p<u.length;p+=1)console.error(u[p]);throw u[0]}}finally{this._debug(c,"end")}}async _saveSession(a){this._debug("#_saveSession()",a),this.suppressGetSessionWarning=!0,await Nt(this.storage,`${this.storageKey}-code-verifier`);const s=Object.assign({},a),i=s.user&&s.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!i&&s.user&&await vs(this.userStorage,this.storageKey+"-user",{user:s.user});const c=Object.assign({},s);delete c.user;const u=km(c);await vs(this.storage,this.storageKey,u)}else{const c=km(s);await vs(this.storage,this.storageKey,c)}}async _removeSession(){this._debug("#_removeSession()"),this.suppressGetSessionWarning=!1,await Nt(this.storage,this.storageKey),await Nt(this.storage,this.storageKey+"-code-verifier"),await Nt(this.storage,this.storageKey+"-user"),this.userStorage&&await Nt(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const a=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{a&&Ct()&&window?.removeEventListener&&window.removeEventListener("visibilitychange",a)}catch(s){console.error("removing visibilitychange callback failed",s)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const a=setInterval(()=>this._autoRefreshTokenTick(),ys);this.autoRefreshTicker=a,a&&typeof a=="object"&&typeof a.unref=="function"?a.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(a);const s=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=s,s&&typeof s=="object"&&typeof s.unref=="function"?s.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(s)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const a=this.autoRefreshTicker;this.autoRefreshTicker=null,a&&clearInterval(a);const s=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,s&&clearTimeout(s)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const a=Date.now();try{return await this._useSession(async s=>{const{data:{session:i}}=s;if(!i||!i.refresh_token||!i.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const c=Math.floor((i.expires_at*1e3-a)/ys);this._debug("#_autoRefreshTokenTick()",`access token expires in ${c} ticks, a tick lasts ${ys}ms, refresh threshold is ${Td} ticks`),c<=Td&&await this._callRefreshToken(i.refresh_token)})}catch(s){console.error("Auto refresh tick failed with error. This is likely a transient error.",s)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(a){if(a.isAcquireTimeout||a instanceof Pg)this._debug("auto refresh token tick lock not available");else throw a}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!Ct()||!window?.addEventListener)return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(a){this._debug("#visibilityChangedCallback","error",a)}},window?.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(a){console.error("_handleVisibilityChange",a)}}async _onVisibilityChanged(a){const s=`#_onVisibilityChanged(${a})`;this._debug(s,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),a||(await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!=="visible"){this._debug(s,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(a,s,i){const c=[`provider=${encodeURIComponent(s)}`];if(i?.redirectTo&&c.push(`redirect_to=${encodeURIComponent(i.redirectTo)}`),i?.scopes&&c.push(`scopes=${encodeURIComponent(i.scopes)}`),this.flowType==="pkce"){const[u,h]=await hs(this.storage,this.storageKey),p=new URLSearchParams({code_challenge:`${encodeURIComponent(u)}`,code_challenge_method:`${encodeURIComponent(h)}`});c.push(p.toString())}if(i?.queryParams){const u=new URLSearchParams(i.queryParams);c.push(u.toString())}return i?.skipBrowserRedirect&&c.push(`skip_http_redirect=${i.skipBrowserRedirect}`),`${a}?${c.join("&")}`}async _unenroll(a){try{return await this._useSession(async s=>{var i;const{data:c,error:u}=s;return u?this._returnResult({data:null,error:u}):await ce(this.fetch,"DELETE",`${this.url}/factors/${a.factorId}`,{headers:this.headers,jwt:(i=c?.session)===null||i===void 0?void 0:i.access_token})})}catch(s){if(ie(s))return this._returnResult({data:null,error:s});throw s}}async _enroll(a){try{return await this._useSession(async s=>{var i,c;const{data:u,error:h}=s;if(h)return this._returnResult({data:null,error:h});const p=Object.assign({friendly_name:a.friendlyName,factor_type:a.factorType},a.factorType==="phone"?{phone:a.phone}:a.factorType==="totp"?{issuer:a.issuer}:{}),{data:m,error:g}=await ce(this.fetch,"POST",`${this.url}/factors`,{body:p,headers:this.headers,jwt:(i=u?.session)===null||i===void 0?void 0:i.access_token});return g?this._returnResult({data:null,error:g}):(a.factorType==="totp"&&m.type==="totp"&&(!((c=m?.totp)===null||c===void 0)&&c.qr_code)&&(m.totp.qr_code=`data:image/svg+xml;utf-8,${m.totp.qr_code}`),this._returnResult({data:m,error:null}))})}catch(s){if(ie(s))return this._returnResult({data:null,error:s});throw s}}async _verify(a){return this._acquireLock(this.lockAcquireTimeout,async()=>{try{return await this._useSession(async s=>{var i;const{data:c,error:u}=s;if(u)return this._returnResult({data:null,error:u});const h=Object.assign({challenge_id:a.challengeId},"webauthn"in a?{webauthn:Object.assign(Object.assign({},a.webauthn),{credential_response:a.webauthn.type==="create"?Bw(a.webauthn.credential_response):Hw(a.webauthn.credential_response)})}:{code:a.code}),{data:p,error:m}=await ce(this.fetch,"POST",`${this.url}/factors/${a.factorId}/verify`,{body:h,headers:this.headers,jwt:(i=c?.session)===null||i===void 0?void 0:i.access_token});return m?this._returnResult({data:null,error:m}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+p.expires_in},p)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",p),this._returnResult({data:p,error:m}))})}catch(s){if(ie(s))return this._returnResult({data:null,error:s});throw s}})}async _challenge(a){return this._acquireLock(this.lockAcquireTimeout,async()=>{try{return await this._useSession(async s=>{var i;const{data:c,error:u}=s;if(u)return this._returnResult({data:null,error:u});const h=await ce(this.fetch,"POST",`${this.url}/factors/${a.factorId}/challenge`,{body:a,headers:this.headers,jwt:(i=c?.session)===null||i===void 0?void 0:i.access_token});if(h.error)return h;const{data:p}=h;if(p.type!=="webauthn")return{data:p,error:null};switch(p.webauthn.type){case"create":return{data:Object.assign(Object.assign({},p),{webauthn:Object.assign(Object.assign({},p.webauthn),{credential_options:Object.assign(Object.assign({},p.webauthn.credential_options),{publicKey:Uw(p.webauthn.credential_options.publicKey)})})}),error:null};case"request":return{data:Object.assign(Object.assign({},p),{webauthn:Object.assign(Object.assign({},p.webauthn),{credential_options:Object.assign(Object.assign({},p.webauthn.credential_options),{publicKey:Lw(p.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(s){if(ie(s))return this._returnResult({data:null,error:s});throw s}})}async _challengeAndVerify(a){const{data:s,error:i}=await this._challenge({factorId:a.factorId});return i?this._returnResult({data:null,error:i}):await this._verify({factorId:a.factorId,challengeId:s.id,code:a.code})}async _listFactors(){var a;const{data:{user:s},error:i}=await this.getUser();if(i)return{data:null,error:i};const c={all:[],phone:[],totp:[],webauthn:[]};for(const u of(a=s?.factors)!==null&&a!==void 0?a:[])c.all.push(u),u.status==="verified"&&c[u.factor_type].push(u);return{data:c,error:null}}async _getAuthenticatorAssuranceLevel(a){var s,i,c,u;if(a)try{const{payload:k}=xl(a);let T=null;k.aal&&(T=k.aal);let C=T;const{data:{user:_},error:z}=await this.getUser(a);if(z)return this._returnResult({data:null,error:z});((i=(s=_?.factors)===null||s===void 0?void 0:s.filter(V=>V.status==="verified"))!==null&&i!==void 0?i:[]).length>0&&(C="aal2");const R=k.amr||[];return{data:{currentLevel:T,nextLevel:C,currentAuthenticationMethods:R},error:null}}catch(k){if(ie(k))return this._returnResult({data:null,error:k});throw k}const{data:{session:h},error:p}=await this.getSession();if(p)return this._returnResult({data:null,error:p});if(!h)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:m}=xl(h.access_token);let g=null;m.aal&&(g=m.aal);let y=g;((u=(c=h.user.factors)===null||c===void 0?void 0:c.filter(k=>k.status==="verified"))!==null&&u!==void 0?u:[]).length>0&&(y="aal2");const S=m.amr||[];return{data:{currentLevel:g,nextLevel:y,currentAuthenticationMethods:S},error:null}}async _getAuthorizationDetails(a){try{return await this._useSession(async s=>{const{data:{session:i},error:c}=s;return c?this._returnResult({data:null,error:c}):i?await ce(this.fetch,"GET",`${this.url}/oauth/authorizations/${a}`,{headers:this.headers,jwt:i.access_token,xform:u=>({data:u,error:null})}):this._returnResult({data:null,error:new Qt})})}catch(s){if(ie(s))return this._returnResult({data:null,error:s});throw s}}async _approveAuthorization(a,s){try{return await this._useSession(async i=>{const{data:{session:c},error:u}=i;if(u)return this._returnResult({data:null,error:u});if(!c)return this._returnResult({data:null,error:new Qt});const h=await ce(this.fetch,"POST",`${this.url}/oauth/authorizations/${a}/consent`,{headers:this.headers,jwt:c.access_token,body:{action:"approve"},xform:p=>({data:p,error:null})});return h.data&&h.data.redirect_url&&Ct()&&!s?.skipBrowserRedirect&&window.location.assign(h.data.redirect_url),h})}catch(i){if(ie(i))return this._returnResult({data:null,error:i});throw i}}async _denyAuthorization(a,s){try{return await this._useSession(async i=>{const{data:{session:c},error:u}=i;if(u)return this._returnResult({data:null,error:u});if(!c)return this._returnResult({data:null,error:new Qt});const h=await ce(this.fetch,"POST",`${this.url}/oauth/authorizations/${a}/consent`,{headers:this.headers,jwt:c.access_token,body:{action:"deny"},xform:p=>({data:p,error:null})});return h.data&&h.data.redirect_url&&Ct()&&!s?.skipBrowserRedirect&&window.location.assign(h.data.redirect_url),h})}catch(i){if(ie(i))return this._returnResult({data:null,error:i});throw i}}async _listOAuthGrants(){try{return await this._useSession(async a=>{const{data:{session:s},error:i}=a;return i?this._returnResult({data:null,error:i}):s?await ce(this.fetch,"GET",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:s.access_token,xform:c=>({data:c,error:null})}):this._returnResult({data:null,error:new Qt})})}catch(a){if(ie(a))return this._returnResult({data:null,error:a});throw a}}async _revokeOAuthGrant(a){try{return await this._useSession(async s=>{const{data:{session:i},error:c}=s;return c?this._returnResult({data:null,error:c}):i?(await ce(this.fetch,"DELETE",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:i.access_token,query:{client_id:a.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new Qt})})}catch(s){if(ie(s))return this._returnResult({data:null,error:s});throw s}}async fetchJwk(a,s={keys:[]}){let i=s.keys.find(p=>p.kid===a);if(i)return i;const c=Date.now();if(i=this.jwks.keys.find(p=>p.kid===a),i&&this.jwks_cached_at+K5>c)return i;const{data:u,error:h}=await ce(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(h)throw h;return!u.keys||u.keys.length===0||(this.jwks=u,this.jwks_cached_at=c,i=u.keys.find(p=>p.kid===a),!i)?null:i}async getClaims(a,s={}){try{let i=a;if(!i){const{data:k,error:T}=await this.getSession();if(T||!k.session)return this._returnResult({data:null,error:T});i=k.session.access_token}const{header:c,payload:u,signature:h,raw:{header:p,payload:m}}=xl(i);s?.allowExpired||gw(u.exp);const g=!c.alg||c.alg.startsWith("HS")||!c.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(c.kid,s?.keys?{keys:s.keys}:s?.jwks);if(!g){const{error:k}=await this.getUser(i);if(k)throw k;return{data:{claims:u,header:c,signature:h},error:null}}const y=bw(c.alg),x=await crypto.subtle.importKey("jwk",g,y,!0,["verify"]);if(!await crypto.subtle.verify(y,x,h,rw(`${p}.${m}`)))throw new zd("Invalid JWT signature");return{data:{claims:u,header:c,signature:h},error:null}}catch(i){if(ie(i))return this._returnResult({data:null,error:i});throw i}}}Ii.nextInstanceID={};const Kw=Ii,Fw="2.103.0";let Ai="";typeof Deno<"u"?Ai="deno":typeof document<"u"?Ai="web":typeof navigator<"u"&&navigator.product==="ReactNative"?Ai="react-native":Ai="node";const Jw={"X-Client-Info":`supabase-js-${Ai}/${Fw}`},Ww={headers:Jw},Zw={schema:"public"},Qw={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},ek={};function Yi(r){"@babel/helpers - typeof";return Yi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},Yi(r)}function tk(r,a){if(Yi(r)!="object"||!r)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var i=s.call(r,a);if(Yi(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(r)}function ak(r){var a=tk(r,"string");return Yi(a)=="symbol"?a:a+""}function rk(r,a,s){return(a=ak(a))in r?Object.defineProperty(r,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[a]=s,r}function Am(r,a){var s=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);a&&(i=i.filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable})),s.push.apply(s,i)}return s}function rt(r){for(var a=1;a<arguments.length;a++){var s=arguments[a]!=null?arguments[a]:{};a%2?Am(Object(s),!0).forEach(function(i){rk(r,i,s[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(s)):Am(Object(s)).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(s,i))})}return r}const nk=r=>r?(...a)=>r(...a):(...a)=>fetch(...a),sk=()=>Headers,ik=(r,a,s)=>{const i=nk(s),c=sk();return async(u,h)=>{var p;const m=(p=await a())!==null&&p!==void 0?p:r;let g=new c(h?.headers);return g.has("apikey")||g.set("apikey",r),g.has("Authorization")||g.set("Authorization",`Bearer ${m}`),i(u,rt(rt({},h),{},{headers:g}))}};function ok(r){return r.endsWith("/")?r:r+"/"}function lk(r,a){var s,i;const{db:c,auth:u,realtime:h,global:p}=r,{db:m,auth:g,realtime:y,global:x}=a,S={db:rt(rt({},m),c),auth:rt(rt({},g),u),realtime:rt(rt({},y),h),storage:{},global:rt(rt(rt({},x),p),{},{headers:rt(rt({},(s=x?.headers)!==null&&s!==void 0?s:{}),(i=p?.headers)!==null&&i!==void 0?i:{})}),accessToken:async()=>""};return r.accessToken?S.accessToken=r.accessToken:delete S.accessToken,S}function ck(r){const a=r?.trim();if(!a)throw new Error("supabaseUrl is required.");if(!a.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL(ok(a))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}var uk=class extends Kw{constructor(r){super(r)}},dk=class{constructor(r,a,s){var i,c;this.supabaseUrl=r,this.supabaseKey=a;const u=ck(r);if(!a)throw new Error("supabaseKey is required.");this.realtimeUrl=new URL("realtime/v1",u),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",u),this.storageUrl=new URL("storage/v1",u),this.functionsUrl=new URL("functions/v1",u);const h=`sb-${u.hostname.split(".")[0]}-auth-token`,p={db:Zw,realtime:ek,auth:rt(rt({},Qw),{},{storageKey:h}),global:Ww},m=lk(s??{},p);if(this.storageKey=(i=m.auth.storageKey)!==null&&i!==void 0?i:"",this.headers=(c=m.global.headers)!==null&&c!==void 0?c:{},m.accessToken)this.accessToken=m.accessToken,this.auth=new Proxy({},{get:(y,x)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(x)} is not possible`)}});else{var g;this.auth=this._initSupabaseAuthClient((g=m.auth)!==null&&g!==void 0?g:{},this.headers,m.global.fetch)}this.fetch=ik(a,this._getAccessToken.bind(this),m.global.fetch),this.realtime=this._initRealtimeClient(rt({headers:this.headers,accessToken:this._getAccessToken.bind(this)},m.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(y=>this.realtime.setAuth(y)).catch(y=>console.warn("Failed to set initial Realtime auth token:",y)),this.rest=new z1(new URL("rest/v1",u).href,{headers:this.headers,schema:m.db.schema,fetch:this.fetch,timeout:m.db.timeout,urlLengthLimit:m.db.urlLengthLimit}),this.storage=new I5(this.storageUrl.href,this.headers,this.fetch,s?.storage),m.accessToken||this._listenForAuthEvents()}get functions(){return new k1(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(r){return this.rest.from(r)}schema(r){return this.rest.schema(r)}rpc(r,a={},s={head:!1,get:!1,count:void 0}){return this.rest.rpc(r,a,s)}channel(r,a={config:{}}){return this.realtime.channel(r,a)}getChannels(){return this.realtime.getChannels()}removeChannel(r){return this.realtime.removeChannel(r)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getAccessToken(){var r=this,a,s;if(r.accessToken)return await r.accessToken();const{data:i}=await r.auth.getSession();return(a=(s=i.session)===null||s===void 0?void 0:s.access_token)!==null&&a!==void 0?a:r.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:r,persistSession:a,detectSessionInUrl:s,storage:i,userStorage:c,storageKey:u,flowType:h,lock:p,debug:m,throwOnError:g},y,x){const S={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new uk({url:this.authUrl.href,headers:rt(rt({},S),y),storageKey:u,autoRefreshToken:r,persistSession:a,detectSessionInUrl:s,storage:i,userStorage:c,flowType:h,lock:p,debug:m,throwOnError:g,fetch:x,hasCustomAuthorizationHeader:Object.keys(this.headers).some(k=>k.toLowerCase()==="authorization")})}_initRealtimeClient(r){return new h5(this.realtimeUrl.href,rt(rt({},r),{},{params:rt(rt({},{apikey:this.supabaseKey}),r?.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((r,a)=>{this._handleTokenChanged(r,"CLIENT",a?.access_token)})}_handleTokenChanged(r,a,s){(r==="TOKEN_REFRESHED"||r==="SIGNED_IN")&&this.changedAccessToken!==s?(this.changedAccessToken=s,this.realtime.setAuth(s)):r==="SIGNED_OUT"&&(this.realtime.setAuth(),a=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}};const hk=(r,a,s)=>new dk(r,a,s);function fk(){if(typeof window<"u")return!1;const r=globalThis.process;if(!r)return!1;const a=r.version;if(a==null)return!1;const s=a.match(/^v(\d+)\./);return s?parseInt(s[1],10)<=18:!1}fk()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const pk="https://jjwmnainfjnulnnhfprz.supabase.co",mk="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impqd21uYWluZmpudWxubmhmcHJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyOTkyNjksImV4cCI6MjA4OTg3NTI2OX0.GuG2uJpyE-AGj0cwRbH8iOS1_uFzSt8bv4yomNVgSwc",ae=hk(pk,mk),gk=(r="")=>r.split(" ").map(a=>a[0]).slice(0,2).join("").toUpperCase()||"?",ld=r=>{const a=Math.floor((Date.now()-new Date(r))/1e3);return a<60?"just now":a<3600?`${Math.floor(a/60)}m ago`:a<86400?`${Math.floor(a/3600)}h ago`:`${Math.floor(a/86400)}d ago`};function wa({label:r,value:a}){return a?l.jsxs("div",{className:"flex justify-between py-1.5 border-b border-gray-50 dark:border-white/10 last:border-0",children:[l.jsx("span",{className:"text-xs text-gray-400 dark:text-gray-500 shrink-0 w-24",children:r}),l.jsx("span",{className:"text-xs text-[#001d4f] dark:text-white font-medium text-right",children:a})]}):null}function bk({label:r,href:a}){return a?l.jsxs("div",{className:"flex justify-between py-1.5 border-b border-gray-50 dark:border-white/10 last:border-0",children:[l.jsx("span",{className:"text-xs text-gray-400 dark:text-gray-500 shrink-0 w-24",children:r}),l.jsx("a",{href:a,target:"_blank",rel:"noopener noreferrer",onClick:s=>s.stopPropagation(),className:"text-xs text-[#001d4f] dark:text-white font-medium text-right underline hover:opacity-70 transition truncate max-w-[160px]",children:"View profile"})]}):null}function Rm({name:r,avatarUrl:a,tone:s="blue"}){const i=s==="red"?"bg-red-50 text-[#cc2233] dark:bg-red-500/10 dark:text-red-400":"bg-blue-50 text-[#001d4f] dark:bg-white/10 dark:text-white";return a?l.jsx("a",{href:a,target:"_blank",rel:"noopener noreferrer",onClick:c=>c.stopPropagation(),className:"w-9 h-9 rounded-full overflow-hidden shrink-0 border border-gray-100 dark:border-white/10 block",title:"View full photo",children:l.jsx("img",{src:a,alt:r,className:"w-full h-full object-cover"})}):l.jsx("div",{className:`w-9 h-9 rounded-full ${i} text-xs font-semibold flex items-center justify-center shrink-0`,children:gk(r)})}function xk({user:r,onConfirm:a,onCancel:s,sending:i}){const[c,u]=v.useState("");return l.jsx("div",{className:"fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4",children:l.jsxs("div",{className:"bg-white dark:bg-[#001d4f] rounded-2xl shadow-2xl w-full max-w-sm p-5",children:[l.jsx("h3",{className:"text-sm font-semibold text-[#001d4f] dark:text-white mb-1",children:"Reject registration"}),l.jsxs("p",{className:"text-xs text-gray-400 dark:text-gray-500 mb-4",children:["An email will be sent to"," ",l.jsx("span",{className:"font-medium text-[#001d4f] dark:text-white",children:r.email}),"."]}),l.jsxs("label",{className:"block text-xs font-medium text-[#001d4f] dark:text-white mb-1",children:["Reason"," ",l.jsx("span",{className:"text-gray-400 dark:text-gray-500 font-normal",children:"(required)"})]}),l.jsx("textarea",{value:c,onChange:h=>u(h.target.value),placeholder:"e.g. The position you applied for is already filled...",rows:4,className:"w-full text-sm border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-[#001d4f] dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#001d4f] resize-none"}),l.jsxs("div",{className:"flex gap-2 mt-4",children:[l.jsx("button",{onClick:s,disabled:i,className:"flex-1 py-2 rounded-xl text-sm font-medium border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/10 transition",children:"Cancel"}),l.jsx("button",{onClick:()=>c.trim()&&a(c),disabled:!c.trim()||i,className:"flex-1 py-2 rounded-xl text-sm font-semibold bg-red-500 text-white hover:bg-red-600 transition disabled:opacity-40",children:i?"Sending…":"Reject & notify"})]})]})})}function yk({msg:r,onConfirm:a,onCancel:s,sending:i}){const[c,u]=v.useState("");return l.jsx("div",{className:"fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4",children:l.jsxs("div",{className:"bg-white dark:bg-[#001d4f] rounded-2xl shadow-2xl w-full max-w-sm p-5",children:[l.jsxs("h3",{className:"text-sm font-semibold text-[#001d4f] dark:text-white mb-1",children:["Reply to ",r.sender_name]}),l.jsxs("p",{className:"text-xs text-gray-400 dark:text-gray-500 mb-2",children:["→"," ",l.jsx("span",{className:"font-medium text-[#001d4f] dark:text-white",children:r.sender_email})]}),l.jsxs("div",{className:"bg-gray-50 dark:bg-white/5 rounded-xl px-3 py-2 mb-3 border border-gray-100 dark:border-white/10",children:[l.jsx("p",{className:"text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1",children:"Their message"}),l.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400 italic",children:['"',r.message,'"']})]}),l.jsxs("label",{className:"block text-xs font-medium text-[#001d4f] dark:text-white mb-1",children:["Your reply"," ",l.jsx("span",{className:"text-gray-400 dark:text-gray-500 font-normal",children:"(required)"})]}),l.jsx("textarea",{value:c,onChange:h=>u(h.target.value),placeholder:"Type your reply here...",rows:5,className:"w-full text-sm border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-[#001d4f] dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#001d4f] resize-none"}),l.jsxs("div",{className:"flex gap-2 mt-4",children:[l.jsx("button",{onClick:s,disabled:i,className:"flex-1 py-2 rounded-xl text-sm font-medium border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/10 transition",children:"Cancel"}),l.jsx("button",{onClick:()=>c.trim()&&a(c),disabled:!c.trim()||i,className:"flex-1 py-2 rounded-xl text-sm font-semibold bg-[#001d4f] text-white hover:bg-[#004b8a] transition disabled:opacity-40",children:i?"Sending…":"Send Reply"})]})]})})}function zm(){const[r,a]=v.useState(!1),[s,i]=v.useState("registrations"),[c,u]=v.useState([]),[h,p]=v.useState([]),[m,g]=v.useState([]),[y,x]=v.useState({}),[S,k]=v.useState({}),[T,C]=v.useState(!1),[_,z]=v.useState(!1),[M,R]=v.useState(null),[V,G]=v.useState(null),[Q,X]=v.useState(null),[K,te]=v.useState(!1),fe=v.useRef(null);v.useEffect(()=>{const N=j=>{fe.current&&!fe.current.contains(j.target)&&a(!1)};return document.addEventListener("mousedown",N),()=>document.removeEventListener("mousedown",N)},[]),v.useEffect(()=>{(async()=>{const{data:{session:j}}=await ae.auth.getSession(),D=j?.user;if(!D)return;const{data:P}=await ae.from("profiles").select("tier").eq("id",D.id).maybeSingle(),ee=(P?.tier||"").toLowerCase();(ee==="highboard"||ee==="board")&&z(!0)})()},[]),v.useEffect(()=>{_&&(pe(),ke(),xe())},[_]);const pe=async()=>{C(!0);const{data:{session:N}}=await ae.auth.getSession(),j=N?.user;if(!j){C(!1);return}const{data:D}=await ae.from("pending_registrations").select("*").eq("ref_user_id",j.id).eq("status","pending").order("created_at",{ascending:!1});D&&u(D),C(!1)},xe=async()=>{const{data:{session:N}}=await ae.auth.getSession(),j=N?.user;if(!j)return;const{data:D}=await ae.from("pending_registrations").select("*").eq("ref_user_id",j.id).neq("status","pending").order("reviewed_at",{ascending:!1});D&&p(D)},ke=async()=>{const{data:N}=await ae.from("contact_messages").select("*").order("replied",{ascending:!0}).order("created_at",{ascending:!1});N&&g(N)},Re=async N=>{x(D=>({...D,[N.id]:"loading"}));const{error:j}=await ae.from("profiles").insert({id:N.id,email:N.email,first_name:N.first_name,last_name:N.last_name,full_name:N.full_name,gender:N.gender,phone_number:N.phone_number,date_of_birth:N.date_of_birth,faculty:N.faculty,level:N.level,tier:N.tier,position:N.position,avatar_url:N.avatar_url,linkedin_url:N.linkedin_url,team:N.team,status:"active"});if(j){x(D=>({...D,[N.id]:null})),alert(j.message);return}await ae.from("pending_registrations").update({status:"accepted",reviewed_at:new Date().toISOString()}).eq("id",N.id),x(D=>({...D,[N.id]:"accepted"})),setTimeout(()=>{u(D=>D.filter(P=>P.id!==N.id)),x(D=>{const P={...D};return delete P[N.id],P}),xe()},1500)},Se=async N=>{const j=V;te(!0);try{await ae.functions.invoke("send-email",{body:{type:"rejection",name:j.full_name||`${j.first_name||""} ${j.last_name||""}`.trim(),email:j.email,reason:N,tier:j.tier||"",position:j.position||""}})}catch(D){console.warn("Email failed:",D)}await ae.from("pending_registrations").update({status:"rejected",reviewed_at:new Date().toISOString(),rejection_reason:N}).eq("id",j.id),te(!1),G(null),x(D=>({...D,[j.id]:"rejected"})),setTimeout(()=>{u(D=>D.filter(P=>P.id!==j.id)),x(D=>{const P={...D};return delete P[j.id],P}),xe()},1500)},H=async N=>{const j=Q;te(!0);try{await ae.functions.invoke("send-email",{body:{type:"reply",name:j.sender_name,email:j.sender_email,originalMessage:j.message,replyText:N}})}catch(D){console.warn("Reply email failed:",D)}await ae.from("contact_messages").update({replied:!0,reply_text:N}).eq("id",j.id),te(!1),X(null),k(D=>({...D,[j.id]:"replied"})),setTimeout(()=>ke(),600)};if(!_)return null;const W=m.filter(N=>!N.replied).length,ne=c.length+W,F=[...c.map(N=>({...N,_kind:"pending"})),...h.map(N=>({...N,_kind:N.status}))];return l.jsxs(l.Fragment,{children:[V&&l.jsx(xk,{user:V,onConfirm:Se,onCancel:()=>G(null),sending:K}),Q&&l.jsx(yk,{msg:Q,onConfirm:H,onCancel:()=>X(null),sending:K}),l.jsxs("div",{className:"relative",ref:fe,children:[l.jsxs("button",{onClick:()=>{a(N=>!N),r||(pe(),ke(),xe())},className:"relative flex items-center justify-center w-9 h-9 rounded-full transition","aria-label":"Notifications",children:[l.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",className:"text-[#001d4f] dark:text-white",children:[l.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),l.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),ne>0&&l.jsx("span",{className:"absolute top-0.5 right-0.5 flex items-center justify-center w-4 h-4 rounded-full bg-[#001d4f] dark:bg-white text-white dark:text-[#001d4f] text-[10px] font-semibold",children:ne>9?"9+":ne})]}),r&&l.jsxs("div",{className:"absolute right-0 mt-3 w-80 bg-white dark:bg-[#00050d] rounded-xl shadow-lg border border-gray-100 dark:border-white/10 overflow-hidden z-50",children:[l.jsxs("div",{className:"px-4 pt-3 pb-2 border-b border-gray-100 dark:border-white/10",children:[l.jsx("p",{className:"text-sm font-semibold text-[#001d4f] dark:text-white mb-2",children:"Notifications"}),l.jsx("div",{className:"flex gap-1",children:[{key:"registrations",label:"Registrations",count:c.length,countColor:"bg-amber-400"},{key:"messages",label:"Messages",count:W,countColor:"bg-red-500"}].map(({key:N,label:j,count:D,countColor:P})=>l.jsxs("button",{onClick:()=>i(N),className:`flex-1 text-xs py-1.5 rounded-lg font-medium transition flex items-center justify-center gap-1.5
                      ${s===N?"bg-[#001d4f] dark:bg-white text-white dark:text-[#001d4f]":"text-gray-400 dark:text-gray-500 hover:bg-gray-50 dark:hover:bg-white/10"}`,children:[j,D>0&&l.jsx("span",{className:`${P} text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold`,children:D>9?"9+":D})]},N))})]}),s==="registrations"&&l.jsx("div",{className:"max-h-[480px] overflow-y-auto divide-y divide-gray-50 dark:divide-white/10",children:T?l.jsx("div",{className:"py-8 text-center text-xs text-gray-400 dark:text-gray-500",children:"Loading…"}):F.length===0?l.jsx("div",{className:"py-8 text-center text-xs text-gray-400 dark:text-gray-500",children:"No registrations yet"}):F.map(N=>{const j=N.full_name||`${N.first_name||""} ${N.last_name||""}`.trim()||N.email,D=[N.tier,N.position].filter(Boolean).join(" · "),P=y[N.id],ee=M===N.id,re=N._kind==="pending",me=N._kind==="accepted"||P==="accepted",we=N._kind==="rejected"||P==="rejected";return l.jsxs("div",{className:"px-4 py-3",children:[l.jsxs("div",{className:"flex gap-3 items-start",children:[l.jsx(Rm,{name:j,avatarUrl:N.avatar_url}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsxs("button",{onClick:()=>R(ee?null:N.id),className:"text-sm font-medium text-[#001d4f] dark:text-white truncate w-full text-left flex items-center gap-1 hover:opacity-70 transition",children:[j,l.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:`transition-transform duration-200 shrink-0 ${ee?"rotate-180":""}`,children:l.jsx("path",{d:"m6 9 6 6 6-6"})})]}),D&&l.jsx("p",{className:"text-xs text-gray-400 dark:text-gray-500 mt-0.5",children:D}),l.jsx("p",{className:"text-xs text-gray-300 dark:text-gray-600 mt-0.5",children:re?ld(N.created_at):N.reviewed_at?`${me?"Accepted":"Rejected"} ${ld(N.reviewed_at)}`:""})]}),!re&&l.jsx("span",{className:`text-[10px] font-semibold px-2 py-0.5 rounded-full border shrink-0 h-fit ${me?"bg-green-50 text-green-600 border-green-200 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/30":"bg-red-50 text-red-500 border-red-200 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/30"}`,children:me?"Accepted ✓":"Rejected"})]}),ee&&l.jsxs("div",{className:"mt-3 bg-gray-50 dark:bg-white/5 rounded-xl px-3 py-2",children:[l.jsx(wa,{label:"Email",value:N.email}),l.jsx(wa,{label:"Phone",value:N.phone_number}),l.jsx(wa,{label:"Gender",value:N.gender}),l.jsx(bk,{label:"LinkedIn",href:N.linkedin_url}),l.jsx(wa,{label:"Faculty",value:N.faculty}),l.jsx(wa,{label:"Level",value:N.level}),l.jsx(wa,{label:"Date of birth",value:N.date_of_birth}),l.jsx(wa,{label:"Tier",value:N.tier}),l.jsx(wa,{label:"Position",value:N.position}),l.jsx(wa,{label:"Team",value:N.team}),!re&&N.reviewed_at&&l.jsx(wa,{label:me?"Accepted on":"Reviewed on",value:new Date(N.reviewed_at).toLocaleString(void 0,{dateStyle:"medium",timeStyle:"short"})}),we&&N.rejection_reason&&l.jsx(wa,{label:"Reason",value:N.rejection_reason})]}),re&&l.jsx("div",{className:"flex gap-2 mt-2",children:P==="loading"?l.jsx("span",{className:"text-xs text-gray-400 dark:text-gray-500",children:"Saving…"}):P==="accepted"?l.jsx("span",{className:"text-xs font-medium text-green-600 bg-green-50 dark:bg-green-500/10 dark:text-green-400 px-2 py-0.5 rounded-full border border-green-200 dark:border-green-500/30",children:"Accepted ✓"}):P==="rejected"?l.jsx("span",{className:"text-xs font-medium text-red-500 bg-red-50 dark:bg-red-500/10 dark:text-red-400 px-2 py-0.5 rounded-full border border-red-200 dark:border-red-500/30",children:"Rejected"}):l.jsxs(l.Fragment,{children:[l.jsx("button",{onClick:()=>Re(N),className:"text-xs font-semibold bg-[#001d4f] text-white px-3 py-1 rounded-full hover:bg-[#004b8a] transition",children:"Accept"}),l.jsx("button",{onClick:()=>{G(N),a(!1)},className:"text-xs font-semibold text-red-500 dark:text-red-400 border border-red-300 dark:border-red-500/40 px-3 py-1 rounded-full hover:bg-red-50 dark:hover:bg-red-500/10 transition",children:"Reject"})]})})]},N.id)})}),s==="messages"&&l.jsx("div",{className:"max-h-[480px] overflow-y-auto divide-y divide-gray-50 dark:divide-white/10",children:m.length===0?l.jsx("div",{className:"py-8 text-center text-xs text-gray-400 dark:text-gray-500",children:"No contact messages yet"}):m.map(N=>{const j=N.replied||S[N.id]==="replied";return l.jsxs("div",{className:`px-4 py-3 transition-opacity ${j?"opacity-50":""}`,children:[l.jsxs("div",{className:"flex gap-3 items-start",children:[l.jsx(Rm,{name:N.sender_name,avatarUrl:N.sender_avatar_url,tone:"red"}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{className:"text-sm font-medium text-[#001d4f] dark:text-white truncate",children:N.sender_name}),l.jsx("p",{className:"text-xs text-gray-400 dark:text-gray-500 truncate",children:N.sender_email}),l.jsx("p",{className:"text-xs text-gray-300 dark:text-gray-600 mt-0.5",children:ld(N.created_at)})]}),l.jsx("span",{className:`text-[10px] font-semibold px-2 py-0.5 rounded-full border shrink-0 ${j?"bg-green-50 text-green-600 border-green-200 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/30":"bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30"}`,children:j?"Replied":"New"})]}),l.jsx("div",{className:"mt-2 bg-gray-50 dark:bg-white/5 rounded-xl px-3 py-2 border border-gray-100 dark:border-white/10",children:l.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400 italic line-clamp-3",children:['"',N.message,'"']})}),j?N.reply_text?l.jsxs("div",{className:"mt-2 bg-blue-50 dark:bg-blue-500/10 rounded-xl px-3 py-2 border border-blue-100 dark:border-blue-500/20",children:[l.jsx("p",{className:"text-[10px] text-[#001d4f] dark:text-blue-300 font-medium mb-0.5",children:"Your reply:"}),l.jsx("p",{className:"text-xs text-[#001d4f]/70 dark:text-blue-300/70 italic line-clamp-2",children:N.reply_text})]}):null:l.jsx("button",{onClick:()=>{X(N),a(!1)},className:"mt-2 text-xs font-semibold bg-[#001d4f] text-white px-3 py-1 rounded-full hover:bg-[#004b8a] transition",children:"Reply via Email"})]},N.id)})}),s==="registrations"&&c.length>0&&l.jsx("div",{className:"px-4 py-2.5 border-t border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-white/5",children:l.jsx("a",{href:"/IEEE-ECU-SB-Website/settings",className:"text-xs text-[#001d4f] dark:text-white hover:underline font-medium",children:"Manage in Settings →"})})]})]})]})}const vk=["Technical","Media","PR","HR","Events"],wk=(r,a,s)=>!r&&!s?null:r==="Highboard"?s||"Highboard":r==="Board"?vk.includes(s)?`Head of ${a||s}`:s||`${a||"Board"} Member`:s||r||null;function kk(){const[r,a]=v.useState(!1),[s,i]=v.useState(!1),[c,u]=v.useState(!1),[h,p]=v.useState(!1),[m,g]=v.useState(""),[y,x]=v.useState(null),[S,k]=v.useState(!1),[T,C]=v.useState(""),[_,z]=v.useState(()=>{if(typeof window>"u")return!1;const N=localStorage.getItem("theme");return N?N==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches});v.useEffect(()=>{const N=document.documentElement;_?(N.classList.add("dark"),localStorage.setItem("theme","dark")):(N.classList.remove("dark"),localStorage.setItem("theme","light"))},[_]);const M=()=>z(N=>!N),R=ta(),V=Cs(),G=v.useRef(null),Q=[{label:"Home",path:"/",icon:l.jsx(T2,{size:18})},{label:"About Us",path:"/about",icon:l.jsx(R2,{size:18})},{label:"Committees",path:"/about#committees",icon:l.jsx(Ts,{size:18})},{label:"Our Heads",path:"/about#heads",icon:l.jsx(_g,{size:18})},{label:"Membership",path:"/about#join",icon:l.jsx(yd,{size:18})},{label:"Contact Us",path:"/ContactUs",icon:l.jsx(Fi,{size:18})}],X=N=>{if(N.path.includes("#")){const[D,P]=N.path.split("#");return R.pathname===D&&T===`#${P}`}return Q.some(D=>D.path.includes("#")&&D.path.split("#")[0]===N.path)?R.pathname===N.path&&!T:R.pathname===N.path};v.useEffect(()=>{C(R.hash||"")},[R.pathname,R.hash]),v.useEffect(()=>{if(R.pathname!=="/about")return;const N=Q.filter(P=>P.path.startsWith("/about#")).map(P=>P.path.split("#")[1]);let j;const D=setTimeout(()=>{const P=N.map(ee=>document.getElementById(ee)).filter(Boolean);P.length&&(j=new IntersectionObserver(ee=>{ee.forEach(re=>{re.isIntersecting&&C(`#${re.target.id}`)})},{rootMargin:"-45% 0px -45% 0px",threshold:0}),P.forEach(ee=>j.observe(ee)))},300);return()=>{clearTimeout(D),j&&j.disconnect()}},[R.pathname]);const K=N=>j=>{if(N.path.includes("#")){if(R.pathname==="/about"){j.preventDefault();const D=N.path.split("#")[1],P=document.getElementById(D);if(P){const ee=P.getBoundingClientRect().top+window.scrollY-100;window.scrollTo({top:ee,behavior:"smooth"})}window.history.replaceState(null,"",N.path),C(`#${D}`)}}else R.pathname===N.path&&(j.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),R.hash&&window.history.replaceState(null,"",N.path),C(""));a(!1)};v.useEffect(()=>{const N=setTimeout(()=>k(!0),80);return()=>clearTimeout(N)},[]),v.useEffect(()=>{const N=()=>u(window.scrollY>30);return window.addEventListener("scroll",N),()=>window.removeEventListener("scroll",N)},[]),v.useEffect(()=>{const N=j=>{G.current&&!G.current.contains(j.target)&&i(!1)};return document.addEventListener("mousedown",N),()=>document.removeEventListener("mousedown",N)},[]);const te=async N=>{const{data:j,error:D}=await ae.from("profiles").select("role, avatar_url, tier, team, position, full_name, first_name").eq("id",N).maybeSingle();if(D){console.error(D);return}j&&x(j)};v.useEffect(()=>{(async()=>{const{data:{session:P}}=await ae.auth.getSession();P?.user?(p(!0),g(P.user.email||""),te(P.user.id)):(p(!1),g(""),x(null))})();const{data:{subscription:j}}=ae.auth.onAuthStateChange((P,ee)=>{ee?.user?(p(!0),g(ee.user.email||""),setTimeout(()=>te(ee.user.id),0)):(p(!1),g(""),x(null))}),D=async()=>{const{data:{session:P}}=await ae.auth.getSession();P?.user&&te(P.user.id)};return window.addEventListener("avatar-updated",D),()=>{j.unsubscribe(),window.removeEventListener("avatar-updated",D)}},[]);const fe=async()=>{try{await ae.auth.signOut({scope:"local"})}catch{}p(!1),g(""),x(null),a(!1),i(!1),V("/login")},pe=y?.avatar_url||null,xe=wk(y?.tier,y?.team,y?.position||y?.Position),ke=y?.tier||null,Re=y?.tier||y?.role||null,H=(y?.full_name||y?.first_name||m||"?").split(" ").map(N=>N[0]).slice(0,2).join("").toUpperCase(),W=R.pathname==="/",ne=({size:N=36})=>pe?l.jsx("img",{src:pe,alt:"avatar",style:{width:N,height:N},className:"rounded-full object-cover flex-shrink-0 border-2 transition-colors duration-300 border-[#023260] dark:border-white/40"},pe):l.jsx("div",{style:{width:N,height:N},className:"rounded-full bg-[#023260] dark:bg-slate-200 flex items-center justify-center text-white dark:text-slate-900 font-bold flex-shrink-0 select-none transition-colors duration-300 ",children:l.jsx("span",{style:{fontSize:Math.max(12,N*.36)},children:H})}),F=({mobile:N=!1})=>l.jsxs("button",{onClick:M,"aria-label":"Toggle dark mode",title:_?"Switch to light mode":"Switch to dark mode",className:`relative flex items-center justify-center rounded-full transition-all duration-300 ${N?"w-10 h-10 text-[#023260] dark:text-white":"w-9 h-9 lg:w-10 lg:h-10 text-[#023260] dark:text-white"}`,children:[l.jsx("span",{className:"absolute inset-0 flex items-center justify-center transition-all duration-300",style:{transform:_?"rotate(180deg) scale(0)":"rotate(0) scale(1)",opacity:_?0:1},children:l.jsx(F2,{size:18})}),l.jsx("span",{className:"absolute inset-0 flex items-center justify-center transition-all duration-300 ",style:{transform:_?"rotate(0) scale(1)":"rotate(-180deg) scale(0)",opacity:_?1:0},children:l.jsx(o1,{size:18})})]});return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
        /* --- Navbar slow, gentle entrance --- */
        .navbar-shell {
          opacity: 0;
          transform: translateY(-14px);
          transition: opacity 1.1s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 1.1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .navbar-shell.navbar-mounted {
          opacity: 1;
          transform: translateY(0);
        }

        /* --- Navbar surface: same glass treatment as About's cards, tinted navy --- */
        .navbar-shell.navbar-scrolled {
          box-shadow: 0 4px 18px rgba(2, 50, 96, 0.08);
        }
        .dark .navbar-shell.navbar-scrolled {
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.4), 0 0 30px rgba(13,90,167,0.12);
        }

        /* --- Nav links: fade/slide in when leaving the home page --- */
        .nav-links-wrap {
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .nav-links-hidden {
          opacity: 0;
          transform: translateY(-6px);
          pointer-events: none;
        }
        .nav-links-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* --- Nav link: sliding underline animation, red accent like About --- */
        .nav-link {
          position: relative;
          padding-bottom: 4px;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: -2px;
          width: 0%;
          height: 2px;
          background: #D92525;
          border-radius: 2px;
          transform: translateX(-50%);
          transition: width 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-link:hover::after,
        .nav-link.nav-link-active::after {
          width: 70%;
        }
        .nav-link:hover {
          transform: translateY(-1px);
        }
        .nav-link {
          transition: transform 0.25s ease, color 0.3s ease;
          display: inline-block;
        }

        /* --- Login button: same red gradient + shine sweep as About's primary CTA --- */
        .btn-login {
          position: relative;
          overflow: hidden;
          background: linear-gradient(115deg, #7a1220, #D92525 45%, #ff6b4a 75%, #D92525);
          background-size: 250% 250%;
          background-position: 0% 50%;
          transition: background-position 0.6s ease, transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 14px rgba(217,37,37,0.35);
        }
        .btn-login::before {
          content: '';
          position: absolute;
          top: 0; left: -75%;
          width: 50%; height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255,255,255,0.45),
            transparent
          );
          transform: skewX(-20deg);
          transition: left 0.7s ease;
        }
        .btn-login:hover {
          background-position: 100% 50%;
          transform: translateY(-1px) scale(1.03);
          box-shadow: 0 8px 22px rgba(217,37,37,0.5);
        }
        .btn-login:hover::before {
          left: 125%;
        }
        .btn-login:active {
          transform: translateY(0) scale(0.98);
        }

        /* --- Login button in dark mode: same red gradient, glow shadow like About --- */
        .dark .btn-login {
          box-shadow: 0 6px 20px rgba(217,37,37,0.4);
        }
        .dark .btn-login:hover {
          box-shadow: 0 8px 26px rgba(217,37,37,0.5);
        }

        /* --- Smooth global theme transition (put body colors on html/body in your CSS) --- */
        html {
          transition: background-color 0.4s ease, color 0.4s ease;
        }
      `}),l.jsx("nav",{className:`navbar-shell ${S?"navbar-mounted":""} ${c?"navbar-scrolled":""} fixed top-0 left-0 right-0 py-1.5 sm:py-2 rounded-full mx-2 sm:mx-3 mt-3 sm:mt-5 px-3 sm:px-5 transition-colors duration-300 z-50 ${c?"backdrop-blur-md dark:backdrop-blur-xl bg-white/80 dark:bg-[#023260]/40 shadow-sm text-[#023260] dark:text-white":"bg-transparent text-[#023260] dark:text-white"}`,children:l.jsxs("div",{className:"max-w-7xl mx-auto flex justify-between items-center gap-2",children:[l.jsx(dt,{to:"/",onClick:()=>{R.pathname==="/"&&window.scrollTo({top:0,behavior:"smooth"}),a(!1)},className:"flex-shrink-0",children:l.jsx("img",{src:_?vd:Li,alt:"IEEE Logo",className:`transition-all duration-300 ${_?"h-12 sm:h-14 lg:h-16 w-auto":"h-9 sm:h-10 lg:h-12 w-auto"} ${_?"drop-shadow-[0_0_3px_rgba(255,255,255,0.15)]":""}`})}),l.jsx("div",{className:`nav-links-wrap hidden md:flex space-x-3 lg:space-x-6 xl:space-x-8 font-medium text-xs lg:text-sm justify-center flex-1 min-w-0 ${W?"nav-links-hidden":"nav-links-visible"}`,children:Q.map((N,j)=>l.jsx(dt,{to:N.path,onClick:K(N),className:`nav-link transition duration-300 hover:text-[#023260]/70 dark:hover:text-white/70 ${X(N)?"nav-link-active text-[#023260] dark:text-white font-semibold":""}`,children:N.label},j))}),l.jsxs("div",{className:"hidden md:flex items-center gap-2 lg:gap-3 flex-shrink-0",children:[l.jsx(F,{}),h?l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx(zm,{}),l.jsxs("div",{className:"relative",ref:G,children:[l.jsx("button",{onClick:()=>i(!s),"aria-label":"Account menu",className:"flex items-center cursor-pointer",children:l.jsx(ne,{size:50})}),s&&l.jsxs("div",{className:"absolute right-0 mt-3 w-56 max-w-[90vw] bg-white dark:bg-[#00040c] rounded-xl shadow-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_26px_rgba(13,90,167,0.15)] border border-gray-100 dark:border-white/10 overflow-hidden z-50",children:[l.jsxs("div",{className:"px-4 py-3 border-b border-gray-100 dark:border-white/10",children:[l.jsx("p",{className:"text-xs text-gray-400 dark:text-gray-500 truncate",children:m}),xe?l.jsx("p",{className:"text-xs font-semibold text-[#023260] dark:text-white mt-0.5",children:xe}):null,ke?l.jsx("p",{className:"text-[10px] text-[#023260]/60 dark:text-white/50 capitalize mt-0.5",children:ke}):null,!xe&&!ke&&Re&&l.jsx("p",{className:"text-xs font-medium text-[#023260] dark:text-white capitalize mt-0.5",children:Re})]}),l.jsxs(dt,{to:"/ComingSoon",onClick:()=>i(!1),className:"flex items-center gap-2 px-4 py-3 text-sm text-[#023260] dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 transition",children:[l.jsx(Qp,{size:16})," Dashboard"]}),l.jsxs(dt,{to:"/account",onClick:()=>i(!1),className:"flex items-center gap-2 px-4 py-3 text-sm text-[#023260] dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 transition",children:[l.jsx(Wp,{size:16})," My Account"]}),l.jsxs(dt,{to:"/settings",onClick:()=>i(!1),className:"flex items-center gap-2 px-4 py-3 text-sm text-[#023260] dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 transition",children:[l.jsx(am,{size:16})," Settings"]}),l.jsx("div",{className:"border-t border-gray-100 dark:border-white/10"}),l.jsxs("button",{onClick:fe,className:"flex items-center gap-2 w-full px-4 py-3 text-sm text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 transition",children:[l.jsx(tm,{size:16})," Logout"]})]})]})]}):l.jsx(dt,{to:"/login",children:l.jsx("button",{className:"btn-login text-white font-semibold px-5 py-1.5 rounded-full",children:"Login"})})]}),!r&&l.jsxs("div",{className:"md:hidden flex items-center gap-2",children:[l.jsx(F,{mobile:!0}),l.jsx("button",{className:"text-[#023260] dark:text-white",onClick:()=>a(!0),children:l.jsx(X2,{size:30})})]})]})}),r&&l.jsx("div",{className:"fixed inset-0 bg-black/40 backdrop-blur-sm z-50",onClick:()=>a(!1)}),l.jsxs("div",{className:`fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-white dark:bg-[#00040c] dark:shadow-[0_10px_40px_rgba(0,0,0,0.6),0_0_36px_rgba(13,90,167,0.14)] z-50 shadow-2xl transform transition-transform duration-300 flex flex-col ${r?"translate-x-0":"translate-x-full"}`,children:[l.jsxs("div",{className:"flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-white/10",children:[l.jsx("img",{src:_?vd:Li,alt:"IEEE Logo",className:`w-auto transition-all duration-300 ${_?"h-14":"h-10"} ${_?"drop-shadow-[0_0_3px_rgba(255,255,255,0.15)]":""}`}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(F,{mobile:!0}),l.jsx("button",{onClick:()=>a(!1),className:"text-gray-400 hover:text-gray-600 dark:hover:text-white transition p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-[#023260]/30",children:l.jsx(x1,{size:22})})]})]}),h&&l.jsxs("div",{className:"px-5 py-4 border-b border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-[#023260]/20",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx(ne,{size:60}),l.jsxs("div",{className:"min-w-0",children:[l.jsx("p",{className:"text-xs text-gray-400 dark:text-gray-500 truncate",children:m}),xe?l.jsx("p",{className:"text-xs font-semibold text-[#023260] dark:text-white truncate",children:xe}):null,ke?l.jsx("p",{className:"text-[10px] text-[#023260]/60 dark:text-white/50 capitalize",children:ke}):null,!xe&&!ke&&l.jsx("p",{className:"text-xs font-semibold text-[#023260] dark:text-white capitalize",children:Re})]})]}),l.jsx("div",{className:"mt-3",children:l.jsx(zm,{})})]}),l.jsxs("div",{className:"flex-1 overflow-y-auto px-3 py-4",children:[l.jsx("p",{className:"text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider px-3 mb-2",children:"Navigation"}),Q.map((N,j)=>l.jsxs(dt,{to:N.path,onClick:K(N),className:`flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition mb-1 ${X(N)?"bg-blue-50 dark:bg-white/10 text-[#023260] dark:text-white":"text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#023260]/30 hover:text-[#023260] dark:hover:text-white"}`,children:[l.jsx("span",{className:X(N)?"text-[#D92525]":"text-gray-400 dark:text-gray-500",children:N.icon}),N.label]},j)),h&&l.jsxs("div",{className:"mt-4",children:[l.jsx("p",{className:"text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider px-3 mb-2",children:"Account"}),l.jsxs(dt,{to:"/dashboard",onClick:()=>a(!1),className:"flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#023260]/30 hover:text-[#023260] dark:hover:text-white transition mb-1",children:[l.jsx(Qp,{size:18,className:"text-gray-400 dark:text-gray-500"})," ","Dashboard"]}),l.jsxs(dt,{to:"/account",onClick:()=>a(!1),className:"flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#023260]/30 hover:text-[#023260] dark:hover:text-white transition mb-1",children:[l.jsx(Wp,{size:18,className:"text-gray-400 dark:text-gray-500"})," My Account"]}),l.jsxs(dt,{to:"/settings",onClick:()=>a(!1),className:"flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#023260]/30 hover:text-[#023260] dark:hover:text-white transition mb-1",children:[l.jsx(am,{size:18,className:"text-gray-400 dark:text-gray-500"})," Settings"]})]})]}),l.jsx("div",{className:"px-3 py-4 border-t border-gray-100 dark:border-white/10",children:h?l.jsxs("button",{onClick:fe,className:"flex items-center gap-2 w-full px-4 py-3 text-sm text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 transition rounded-xl",children:[l.jsx(tm,{size:16})," Logout"]}):l.jsx(dt,{to:"/login",onClick:()=>a(!1),children:l.jsx("button",{className:"btn-login w-full text-white font-semibold py-3 rounded-full text-sm",children:"Login"})})})]})]})}function Sk(){return l.jsxs("footer",{className:"fixed bottom-0 left-0 w-full  py-2 text-center text-xs text-zinc-700  backdrop-blur-sm ",children:["© ",new Date().getFullYear()," IEEE ECU SB Team. All rights reserved."]})}const jk=[{char:"迎",top:"auto",bottom:"-6%",right:"-3%",size:260,tint:"red",rotate:-5,delay:"0s"},{char:"迎",top:"6%",left:"4%",size:130,tint:"red",rotate:7,delay:"1.6s"},{char:"迎",top:"auto",bottom:"6%",left:"12%",size:90,tint:"red",rotate:-8,delay:"3.1s",hideMobile:!0},{char:"迎",top:"68%",right:"6%",size:80,tint:"red",rotate:5,delay:"0.9s",hideMobile:!0},{char:"程",top:"-6%",left:"-4%",size:240,tint:"blue",rotate:4,delay:"2.3s"},{char:"程",top:"auto",bottom:"10%",right:"22%",size:120,tint:"blue",rotate:-6,delay:"1.1s"},{char:"程",top:"16%",right:"10%",size:90,tint:"blue",rotate:8,delay:"3.6s",hideMobile:!0},{char:"程",top:"42%",left:"22%",size:70,tint:"blue",rotate:-4,delay:"0.5s",hideMobile:!0},{char:"创",top:"26%",left:"48%",size:100,tint:"red",rotate:6,delay:"2.7s",hideMobile:!0},{char:"新",top:"auto",bottom:"28%",left:"38%",size:85,tint:"blue",rotate:-7,delay:"1.4s",hideMobile:!0},{char:"梦",top:"8%",right:"38%",size:75,tint:"red",rotate:3,delay:"3.9s",hideMobile:!0},{char:"志",top:"auto",bottom:"4%",left:"50%",size:95,tint:"blue",rotate:-5,delay:"2.0s",hideMobile:!0},{char:"工",top:"36%",right:"48%",size:65,tint:"red",rotate:9,delay:"0.3s",hideMobile:!0}];function _k(){const r=v.useRef(null),a=v.useRef(null),s=v.useRef(null),i=v.useRef(null),c=v.useRef(null);return v.useEffect(()=>{const u=r.current;if(!u)return;const h=u.getContext("2d");let p;const m=()=>{u.width=window.innerWidth,u.height=window.innerHeight};m(),window.addEventListener("resize",m);const g=70,y=140,x=Array.from({length:g},()=>{const k=Math.random()>.88;return{x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,vx:(Math.random()-.5)*(k?.8:.5),vy:(Math.random()-.5)*(k?.8:.5),r:k?Math.random()*1.5+1.8:Math.random()*1.2+1,pulse:Math.random()*Math.PI*2,pulseSpeed:.015+Math.random()*.015,red:Math.random()>.87,accent:k}}),S=()=>{const k=u.width,T=u.height;h.fillStyle="rgba(0,0,0,0.25)",h.globalCompositeOperation="destination-out",h.fillRect(0,0,k,T),h.globalCompositeOperation="source-over",x.forEach(C=>{C.x+=C.vx,C.y+=C.vy,C.pulse+=C.pulseSpeed,(C.x<0||C.x>k)&&(C.vx*=-1),(C.y<0||C.y>T)&&(C.vy*=-1)});for(let C=0;C<x.length;C++)for(let _=C+1;_<x.length;_++){const z=x[C].x-x[_].x,M=x[C].y-x[_].y,R=Math.sqrt(z*z+M*M);if(R<y){const V=1-R/y,G=x[C].accent||x[_].accent;h.beginPath(),h.moveTo(x[C].x,x[C].y),h.lineTo(x[_].x,x[_].y),h.strokeStyle=`rgba(74,158,255,${V*(G?.45:.3)})`,h.lineWidth=G?1:.7,h.stroke()}}x.forEach(C=>{const _=.5+.5*Math.sin(C.pulse),z=C.red?"255,90,90":"74,158,255";h.save(),h.shadowBlur=C.accent?6:3,h.shadowColor=`rgba(${z},0.6)`,h.beginPath(),h.arc(C.x,C.y,C.r+(C.accent?_*.6:0),0,Math.PI*2),h.fillStyle=`rgba(${z},${.35+.35*_})`,h.fill(),h.restore()}),p=requestAnimationFrame(S)};return S(),()=>{cancelAnimationFrame(p),window.removeEventListener("resize",m)}},[]),v.useEffect(()=>{[{ref:c,delay:0},{ref:a,delay:150},{ref:s,delay:350},{ref:i,delay:550}].forEach(({ref:h,delay:p})=>{setTimeout(()=>{h.current&&h.current.classList.add("animate-in")},p)})},[]),l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
        .home-bg {
          background:
            radial-gradient(ellipse 750px 550px at 18% 12%, rgba(217,37,37,0.07), transparent 60%),
            radial-gradient(ellipse 850px 600px at 88% 8%, rgba(2,50,96,0.14), transparent 60%),
            linear-gradient(to top, #001642, transparent);
          overflow: hidden;
          transition: background 0.4s ease;
        }

        .dark .home-bg {
          background:
            radial-gradient(ellipse 900px 650px at 12% 18%, rgba(217,37,37,0.20), transparent 60%),
            radial-gradient(ellipse 1000px 750px at 88% 12%, rgba(13,90,167,0.28), transparent 60%),
            radial-gradient(ellipse 1100px 800px at 50% 105%, rgba(217,37,37,0.14), transparent 65%),
            linear-gradient(to top, #001233, #00040c 60%, #00040c);
        }

        /* ── Watermark characters ──
           Drifting motion (same device as About/ComingSoon). Dark-mode
           colors are brighter/more saturated than the light-mode base so
           they stay legible on the near-black background. */
        .home-bg-char {
          position: absolute;
          font-family: 'Noto Serif SC', 'PingFang SC', 'Songti SC', 'SimSun', serif;
          font-weight: 700;
          pointer-events: none;
          user-select: none;
          line-height: 1;
          z-index: 0;
          animation: homeCharDrift 14s ease-in-out infinite;
          transition: color 0.4s ease, opacity 0.4s ease;
        }
        @keyframes homeCharDrift {
          0%, 100% { transform: translate3d(0,0,0) rotate(var(--home-rot, 0deg)); }
          50%      { transform: translate3d(0,-16px,0) rotate(calc(var(--home-rot, 0deg) + 0.8deg)); }
        }
        .dark .home-bg-char-red {
          color: #ff5b5b !important;
          opacity: 0.22;
          filter: drop-shadow(0 0 26px rgba(217,37,37,0.32));
        }
        .dark .home-bg-char-blue {
          color: #4a9eff !important;
          opacity: 0.2;
          filter: drop-shadow(0 0 26px rgba(74,158,255,0.3));
        }
        @media (prefers-reduced-motion: reduce) {
          .home-bg-char { animation: none !important; }
        }

        .fade-up {
          opacity: 0; transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .fade-up.animate-in { opacity: 1; transform: translateY(0); }

        .fade-left {
          opacity: 0; transform: translateX(-30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .fade-left.animate-in { opacity: 1; transform: translateX(0); }

        .scale-in {
          opacity: 0; transform: scale(0.92);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .scale-in.animate-in { opacity: 1; transform: scale(1); }

        .line-grow { width: 0; transition: width 1s ease; }
        .line-grow.animate-in { width: 3rem; }

        @keyframes pulse-ring {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .pulse-ring::after {
          content: '';
          position: absolute; inset: 0;
          border-radius: 9999px;
          border: 2px solid #D92525;
          animation: pulse-ring 2s ease-out infinite;
        }

        /* --- Primary button: animated gradient + shine sweep --- */
        .btn-primary {
          position: relative;
          overflow: hidden;
          background: linear-gradient(115deg, #8f0f0f, #D92525 45%, #ff5b5b 75%, #D92525);
          background-size: 250% 250%;
          background-position: 0% 50%;
          transition: background-position 0.6s ease, transform 0.35s ease, box-shadow 0.35s ease;
          box-shadow: 0 4px 14px rgba(217,37,37,0.35);
        }
        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0; left: -75%;
          width: 50%; height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255,255,255,0.45),
            transparent
          );
          transform: skewX(-20deg);
          transition: left 0.7s ease;
        }
        .btn-primary:hover {
          background-position: 100% 50%;
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 8px 26px rgba(217,37,37,0.55);
        }
        .btn-primary:hover::before {
          left: 125%;
        }
        .btn-primary:active {
          transform: translateY(0) scale(0.98);
        }
        .dark .btn-primary {
          box-shadow: 0 6px 20px rgba(217,37,37,0.4);
        }
        .dark .btn-primary:hover {
          box-shadow: 0 8px 26px rgba(217,37,37,0.5);
        }
        .dark .pulse-ring::after {
          border-color: #ff5b5b;
        }

        /* --- Secondary button: transparent with fill sweep --- */
        .btn-secondary {
          position: relative;
          overflow: hidden;
          background: transparent;
          z-index: 0;
          transition: color 0.4s ease, border-color 0.4s ease, transform 0.35s ease, box-shadow 0.35s ease;
        }
        .btn-secondary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(100deg, rgba(255,255,255,0.16), rgba(255,255,255,0.04));
          transform: translateX(-100%);
          transition: transform 0.5s ease;
          z-index: -1;
          border-radius: inherit;
        }
        .btn-secondary:hover {
          border-color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255,255,255,0.12);
        }
        .btn-secondary:hover::before {
          transform: translateX(0);
        }
        .btn-secondary:active {
          transform: translateY(0);
        }
        .dark .btn-secondary:hover {
          box-shadow: 0 4px 16px rgba(74,158,255,0.2);
          border-color: rgba(74,158,255,0.6);
        }
      `}),l.jsxs("main",{className:"home-bg relative overflow-hidden h-screen flex flex-col items-center justify-center px-6 md:px-20 text-center dark:bg-[#00050d]",children:[l.jsx("canvas",{ref:r,className:"absolute inset-0 w-full h-full",style:{display:"block"}}),jk.map((u,h)=>{const p={fontSize:u.size,"--home-rot":`${u.rotate}deg`,transform:`rotate(${u.rotate}deg)`,animationDelay:u.delay,color:u.tint==="red"?"rgba(217,37,37,0.12)":"rgba(255,255,255,0.09)"};return u.top!==void 0&&(p.top=u.top),u.bottom!==void 0&&(p.bottom=u.bottom),u.left!==void 0&&(p.left=u.left),u.right!==void 0&&(p.right=u.right),l.jsx("span",{className:`home-bg-char home-bg-char-${u.tint} ${u.hideMobile?"hidden md:block":""}`,style:p,children:u.char},h)}),l.jsxs("div",{className:"relative z-10 flex flex-col items-center max-w-xl",children:[l.jsxs("div",{ref:c,className:"fade-left flex items-center gap-3 mb-5",children:[l.jsx("span",{className:"line-grow h-px bg-[#D92525] block"}),l.jsx("span",{className:"text-xs font-semibold tracking-[0.20em] uppercase text-[#D92525]",children:"The Egyptian Chinese University"}),l.jsx("span",{className:"line-grow h-px bg-[#D92525] block"})]}),l.jsxs("h1",{ref:a,className:"fade-up text-3xl md:text-5xl font-bold mb-5 text-[#001d4f] dark:text-white leading-tight relative transition-colors duration-300",children:["Welcome to"," ",l.jsxs("span",{className:"relative inline-block text-[#001d4f] dark:text-white transition-colors duration-300",children:["IEEE ECU",l.jsx("span",{className:"absolute -bottom-1 left-0 w-full h-0.5 bg-[#D92525]"})]})," ","Student Branch!"]}),l.jsx("p",{ref:s,className:"fade-up text-lg mb-10 text-white",children:"Where passion meets innovation and ideas come to life"}),l.jsxs("div",{ref:i,className:"scale-in flex flex-wrap items-center justify-center gap-4",children:[l.jsx(dt,{to:"/about",children:l.jsx("button",{className:"btn-primary relative pulse-ring text-white font-semibold px-8 py-2.5 rounded-full transition-all duration-500",children:"Who Are We ?"})}),l.jsx(dt,{to:"/timeline",children:l.jsxs("button",{className:"btn-secondary text-white font-semibold px-6 py-2.5 rounded-full border border-white/30 flex items-center gap-2 group",children:["Latest News",l.jsx(Ki,{size:16,className:"group-hover:translate-x-1 transition-transform duration-300"})]})})]})]})]})]})}const Ek="/IEEE-ECU-SB-Website/assets/about1-D4KB9JCD.jpg",Nk="/IEEE-ECU-SB-Website/assets/about2-Ba9AhGAR.jpg",Ck="/IEEE-ECU-SB-Website/assets/DrRania-Dr5tEJ_X.png",Gg=["Branch Counselor","Mentor","HighBoard","HR","PR","Events","Media","Technical"],Vg=[{key:"Branch Counselor",role:"Branch Counselor",name:"Dr/ Rania El_Swief",img:Ck,linkedin:"https://linkedin.com/in/REPLACE_ME"}],Xg=["Tech","Media","PR","HR","Events"],Om=["Chair","Vice Chair","Secretary","Treasurer","Webmaster"],Tk=(r="",a="")=>`${r.charAt(0)}${a.charAt(0)}`.toUpperCase()||"??";function Ak(r){const{tier:a,team:s,position:i}=r;return a==="Mentor"?"Mentor":a==="Highboard"?i||"Highboard":a==="Board"?Xg.includes(i)?`Head of ${s||i}`:i||`${s||"Board"} Member`:i||a||"Member"}function Dm(r){const a=Om.findIndex(s=>s.toLowerCase()===(r||"").toLowerCase());return a===-1?Om.length:a}function Mm(r){const a=(r||"").toLowerCase();return Xg.some(s=>s.toLowerCase()===a)?0:a.includes("vice")?1:2}function Rk(r){const a={};Gg.filter(i=>!Vg.some(c=>c.key===i)).forEach(i=>a[i]=[]),r.forEach(i=>{i.tier==="Mentor"?a.Mentor.push(i):i.tier==="Highboard"?a.HighBoard.push(i):i.tier==="Board"&&i.team&&a[i.team]&&a[i.team].push(i)}),Object.entries(a).forEach(([i,c])=>{i==="HighBoard"?c.sort((u,h)=>Dm(u.position)-Dm(h.position)):i!=="Mentor"&&c.sort((u,h)=>Mm(u.position)-Mm(h.position))});const s=Object.fromEntries(Object.entries(a).map(([i,c])=>[i,c.map(u=>({id:u.id,img:u.avatar_url||null,name:u.full_name||`${u.first_name||""} ${u.last_name||""}`.trim(),role:Ak(u),linkedin:u.linkedin_url||null}))]));return Object.fromEntries(Object.entries(s).filter(([,i])=>i.length>0))}function Kg({autoRotate:r=!0,rotateInterval:a=9e3}){const[s,i]=v.useState([]),[c,u]=v.useState(!0),[h,p]=v.useState(""),[m,g]=v.useState(0),[y,x]=v.useState(0);v.useEffect(()=>{(async()=>{u(!0),p("");const{data:z,error:M}=await ae.from("profiles").select("id, first_name, last_name, full_name, avatar_url, tier, team, position, linkedin_url").not("tier","is",null);M?p(M.message||"Failed to load team members."):i(z||[]),u(!1)})()},[]);const S=v.useMemo(()=>{const _=Rk(s),z={};Vg.forEach(V=>{z[V.key]=[{id:`static-${V.key}`,img:V.img,name:V.name,role:V.role,linkedin:V.linkedin}]});const M={...z,..._},R={};return Gg.forEach(V=>{M[V]&&(R[V]=M[V])}),R},[s]),k=v.useMemo(()=>Object.keys(S),[S]);v.useEffect(()=>{m>=k.length&&g(0)},[k,m]),v.useEffect(()=>{if(!r||k.length<2)return;const _=setInterval(()=>{g(z=>z===k.length-1?0:z+1),x(z=>z+1)},a);return()=>clearInterval(_)},[r,a,k.length]),v.useEffect(()=>{const _=new IntersectionObserver(z=>{z.forEach(M=>{M.target.classList.toggle("in-view",M.isIntersecting)})},{threshold:.12});return document.querySelectorAll(".th-reveal").forEach(z=>_.observe(z)),()=>_.disconnect()},[c]);const T=_=>{g(_),x(z=>z+1)},C=k[m];return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
        .th-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
        }
        .th-eyebrow .th-stem {
          width: 0;
          height: 1px;
          background: #D92525;
          transition: width 1.1s ease 0.15s;
        }
        .th-reveal.in-view .th-stem { width: 2.5rem; }

        .th-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }
        .th-reveal.in-view { opacity: 1; transform: translateY(0); }

        @keyframes thSmoothReveal {
          0% {
            opacity: 0;
            transform: translateY(12px) scale(0.97);
            filter: blur(5px);
          }
          55% {
            opacity: 0.7;
            filter: blur(1.5px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }
        @keyframes thPulseRing {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50%      { transform: scale(1.025); opacity: 0.18; }
        }
        @keyframes thSpin { to { transform: rotate(360deg); } }

        .th-tabs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.4rem 0.5rem;
          margin-bottom: 1.5rem;
        }
        .th-tab {
          padding: 7px 17px;
          border: none;
          border-bottom: 2px solid transparent;
          background: transparent;
          color: rgba(2,50,96,0.5);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          transition: color 0.8s ease, border-color 0.8s ease;
        }
        .th-tab:hover { color: #023260; border-bottom-color: rgba(2,50,96,0.3); }
        .th-tab-active { color: #023260; border-bottom-color: #D92525; }
        .dark .th-tab { color: rgba(255,255,255,0.45); }
        .dark .th-tab:hover { color: white; border-bottom-color: rgba(255,255,255,0.3); }
        .dark .th-tab-active { color: white; border-bottom-color: #D92525; }

        .th-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.75rem 2.25rem;
        }

        .th-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: auto;
          min-width: 140px;
          max-width: 240px;
          padding: 0 4px;
          opacity: 0;
          animation: thSmoothReveal 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
          animation-delay: var(--th-delay, 0ms);
        }
        .th-ring {
          position: relative;
          width: 200px;
          height: 200px;
          margin-bottom: 10px;
          /* single source of truth for the "grow" amount: ring and photo
             scale together as one rigid unit, so nothing fights, flips,
             or snaps back when the cursor drifts near the edge. */
          transform: scale(1);
          transition: transform 0.9s cubic-bezier(0.19, 1, 0.22, 1);
          will-change: transform;
        }
        .th-card:hover .th-ring { transform: scale(1.035); }

        .th-ring::before {
          content: '';
          position: absolute; inset: -6px;
          border: 2px solid #023260;
          border-radius: 50%;
          opacity: 0.4;
          animation: thPulseRing 5.6s ease-in-out infinite;
          transition: opacity 0.9s ease, border-color 0.9s ease;
        }
        .th-card:hover .th-ring::before {
          animation-play-state: paused;
          opacity: 0.22;
        }
        .dark .th-ring::before {
          border-color: #4a9eff;
        }

        .th-avatar-img {
          width: 200px; height: 200px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid white;
          box-shadow: 0 4px 14px rgba(2,50,96,0.2);
          display: block;
          transition: box-shadow 0.9s ease, border-color 0.9s ease;
        }
        .th-card:hover .th-avatar-img {
          box-shadow: 0 10px 22px rgba(2,50,96,0.3);
        }
        .dark .th-avatar-img {
          border-color: #011a36;
          box-shadow: 0 4px 16px rgba(0,0,0,0.5);
        }
        .dark .th-card:hover .th-avatar-img {
          box-shadow: 0 8px 22px rgba(0,0,0,0.6), 0 0 20px rgba(74,158,255,0.2);
        }
        .th-avatar-placeholder {
          width: 200px; height: 200px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(160deg, #023260, #01213f);
          color: white;
          font-size: 28px;
          font-weight: 700;
          border: 3px solid white;
          box-shadow: 0 4px 14px rgba(2,50,96,0.2);
          transition: box-shadow 0.9s ease, border-color 0.9s ease;
        }
        .th-card:hover .th-avatar-placeholder {
          box-shadow: 0 10px 22px rgba(2,50,96,0.3);
        }
        .dark .th-avatar-placeholder {
          border-color: #011a36;
          box-shadow: 0 4px 16px rgba(0,0,0,0.5);
        }
        .dark .th-card:hover .th-avatar-placeholder {
          box-shadow: 0 8px 22px rgba(0,0,0,0.6), 0 0 20px rgba(74,158,255,0.2);
        }
        .th-linkedin-btn {
          position: absolute; bottom: 4px; right: 4px;
          width: 36px; height: 36px;
          border-radius: 9999px;
          display: flex; align-items: center; justify-content: center;
          background: #023260;
          border: 3px solid white;
          color: white;
          text-decoration: none;
          box-shadow: 0 3px 9px rgba(2,50,96,0.35);
          z-index: 10;
          transition: background 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
        }
        .th-linkedin-btn:hover {
          background: #D92525;
          transform: scale(1.12);
          box-shadow: 0 6px 16px rgba(217,37,37,0.4);
        }
        .dark .th-linkedin-btn {
          border-color: #011a36;
        }
        .dark .th-linkedin-btn:hover {
          box-shadow: 0 6px 18px rgba(217,37,37,0.5);
        }

        .th-name {
          font-weight: 800;
          color: #023260;
          font-size: 17px;
          text-align: center;
          line-height: 1.3;
          margin-bottom: 8px;
          white-space: nowrap;
          transition: color 0.4s ease;
        }
        .dark .th-name { color: #f5f8fb; }

        .th-role-badge {
          color: #023260;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 5px 13px;
          background: rgba(2,50,96,0.06);
          border: 1px solid rgba(2,50,96,0.25);
          border-radius: 9999px;
          text-align: center;
          opacity: 0.85;
          transition: color 0.4s ease, background 0.4s ease, border-color 0.4s ease;
        }
        .dark .th-role-badge {
          color: #f5f8fb;
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.22);
        }

        .th-dots {
          display: flex;
          justify-content: center;
          gap: 7px;
          margin-top: 1.75rem;
        }
        .th-dot {
          width: 6px; height: 6px;
          border-radius: 3px;
          background: rgba(2,50,96,0.25);
          cursor: pointer;
          transition: width 0.7s ease, background 0.7s ease;
        }
        .th-dot-active { width: 18px; background: #D92525; }
        .th-dot:hover { background: rgba(2,50,96,0.5); }
        .dark .th-dot { background: rgba(255,255,255,0.25); }
        .dark .th-dot:hover { background: rgba(255,255,255,0.45); }
        .dark .th-dot-active { background: #D92525; }

        .th-spinner {
          width: 30px; height: 30px;
          border-radius: 50%;
          border: 2px solid rgba(2,50,96,0.15);
          border-top-color: #023260;
          animation: thSpin 0.8s linear infinite;
        }
        .dark .th-spinner {
          border-color: rgba(255,255,255,0.15);
          border-top-color: #4a9eff;
        }
      `}),l.jsxs("section",{id:"heads",className:"scroll-mt-28",children:[l.jsxs("div",{className:"mb-3 text-center th-reveal",children:[l.jsxs("span",{className:"th-eyebrow justify-center",children:[l.jsx("span",{className:"th-stem"}),l.jsxs("span",{className:"text-xs font-semibold tracking-[0.25em] uppercase text-[#D92525] flex items-center gap-2",children:[l.jsx(_g,{size:14}),"Our Heads"]}),l.jsx("span",{className:"th-stem"})]}),l.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-[#023260] dark:text-white mt-4",children:"Meet The Team Behind It All"}),l.jsx("p",{className:"text-gray-600 dark:text-gray-300 mt-3 max-w-2xl mx-auto leading-relaxed",children:"From our branch counselor to every committee head — the people steering IEEE ECU SB forward."})]}),c&&l.jsx("div",{className:"flex justify-center py-10",children:l.jsx("div",{className:"th-spinner"})}),!c&&h&&l.jsx("p",{className:"text-center text-[#D92525] text-sm",children:h}),!c&&!h&&k.length===0&&l.jsx("p",{className:"text-center text-gray-500 dark:text-gray-400 text-sm",children:"No approved members yet — once registrations are approved, they'll appear here automatically."}),!c&&!h&&k.length>0&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"th-tabs",children:k.map((_,z)=>l.jsx("button",{onClick:()=>T(z),className:`th-tab ${m===z?"th-tab-active":""}`,children:_},_))}),l.jsx("div",{className:"th-grid",children:S[C].map((_,z)=>l.jsxs("div",{style:{"--th-delay":`${z*70}ms`},className:"th-card",children:[l.jsxs("div",{className:"th-ring",children:[_.img?l.jsx("img",{src:_.img,alt:_.name,className:"th-avatar-img"}):l.jsx("div",{className:"th-avatar-placeholder",children:Tk(_.name.split(" ")[0],_.name.split(" ")[1])}),_.linkedin&&l.jsx("a",{href:_.linkedin,target:"_blank",rel:"noopener noreferrer",title:`${_.name} on LinkedIn`,"aria-label":`${_.name} on LinkedIn`,className:"th-linkedin-btn",children:l.jsx(zl,{size:17})})]}),l.jsx("p",{className:"th-name",children:_.name}),l.jsx("div",{className:"th-role-badge",children:_.role})]},_.id))},y),l.jsx("div",{className:"th-dots",children:k.map((_,z)=>l.jsx("div",{onClick:()=>T(z),className:`th-dot ${z===m?"th-dot-active":""}`},z))})]})]})]})}function zk({eyebrow:r,title:a,subtitle:s,icon:i}){return l.jsxs("div",{className:"mb-10 text-center reveal-auto",children:[l.jsxs("span",{className:"ab-eyebrow justify-center",children:[l.jsx("span",{className:"stem h-px bg-[#D92525] block"}),l.jsxs("span",{className:"text-xs font-semibold tracking-[0.25em] uppercase text-[#D92525] flex items-center gap-2",children:[i&&l.jsx(i,{size:14}),r]}),l.jsx("span",{className:"stem h-px bg-[#D92525] block"})]}),l.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-[#023260] dark:text-white mt-4",children:a}),s&&l.jsx("p",{className:"text-gray-600 dark:text-gray-300 mt-3 max-w-2xl mx-auto leading-relaxed",children:s})]})}const Ok=[{key:"non-tech",accent:"#D92525",cta:"red",icon:Ts,title:"Non-Technical Team",desc:"Our non-technical team drives the community — managing events, communications, media, and member experience to keep the branch thriving.",stats:[{value:"4+",label:"Teams"},{value:"50+",label:"Members"}],subTeams:[{icon:d1,label:"HR",bg:{top:"6%",left:"4%",size:100,rotate:-16,opacity:.06}},{icon:G2,label:"PR",bg:{top:"14%",right:"3%",size:130,rotate:22,opacity:.05}},{icon:vg,label:"Events",bg:{bottom:"18%",left:"8%",size:85,rotate:10,opacity:.055}},{icon:jl,label:"Media",bg:{bottom:"5%",right:"12%",size:115,rotate:-24,opacity:.05}}],path:"/NonTechnicalTeam"},{key:"tech",accent:"#0d5aa7",cta:"blue",icon:Zp,title:"Technical Team",desc:"Our technical team builds, codes, and engineers — tackling real-world problems through hands-on projects, workshops, and cutting-edge competitions.",stats:[{value:"3+",label:"Teams"},{value:"30+",label:"Members"}],subTeams:[{icon:Zp,label:"Software",bg:{top:"6%",left:"4%",size:110,rotate:-14,opacity:.06}},{icon:g2,label:"Hardware",bg:{top:"16%",right:"2%",size:140,rotate:18,opacity:.05}},{icon:wg,label:"General",bg:{bottom:"8%",right:"20%",size:95,rotate:-20,opacity:.055}}],path:"/TechnicalTeam"}];function Fg(){return l.jsxs("section",{id:"committees",className:"scroll-mt-28",children:[l.jsx("style",{children:`
        /* ── Frosted-glass panel — same language as ab-premium-card /
           ab-impact-strip elsewhere on the page. ── */
        .ab-team-panel {
          position: relative;
          border-radius: 26px;
          padding: 2.75rem 2rem 2.25rem;
          overflow: hidden;
          text-align: center;
          background: rgba(255, 255, 255, 0.46);
          border: 1px solid rgba(255, 255, 255, 0.6);
          box-shadow: 0 10px 28px rgba(2, 50, 96, 0.08);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color: #023260;
          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            background 0.4s ease,
            border-color 0.4s ease,
            color 0.4s ease;
        }
        .ab-team-panel:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.6);
          box-shadow: 0 20px 44px rgba(2, 50, 96, 0.16);
        }
        html.dark .ab-team-panel {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.1);
          color: #f5f8fb;
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.35);
        }
        html.dark .ab-team-panel:hover {
          background: rgba(255, 255, 255, 0.08);
          box-shadow:
            0 20px 50px rgba(0, 0, 0, 0.5),
            0 0 34px color-mix(in srgb, var(--accent) 25%, transparent);
        }

        /* Soft accent-tinted glow in the corner — the one place each
           card's color bleeds through the glass, echoing the ambient
           blue/red glows used on the impact strip and CTA elsewhere. */
        .ab-team-panel::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse 460px 340px at 12% -6%,
            color-mix(in srgb, var(--accent) 16%, transparent),
            transparent 65%
          );
          pointer-events: none;
          z-index: 0;
          transition: opacity 0.4s ease;
        }
        html.dark .ab-team-panel::after {
          background: radial-gradient(
            ellipse 460px 340px at 12% -6%,
            color-mix(in srgb, var(--accent) 32%, transparent),
            transparent 65%
          );
        }

        .ab-team-content { position: relative; z-index: 1; }

        /* ── Corner badge (Committee 0X) ── */
        .ab-team-badge {
          position: absolute;
          top: 1.4rem;
          right: 1.4rem;
          z-index: 2;
          font-size: 0.62rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          padding: 0.32rem 0.75rem;
          border-radius: 9999px;
          background: color-mix(in srgb, var(--accent) 14%, transparent);
          border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
          color: var(--accent);
        }
        html.dark .ab-team-badge {
          background: color-mix(in srgb, var(--accent) 24%, transparent);
        }

        /* ── Scattered sub-team background icons (very quiet texture) ── */
        .ab-team-bg-icon {
          position: absolute;
          z-index: 0;
          pointer-events: none;
          color: #023260;
          transition: color 0.4s ease;
        }
        html.dark .ab-team-bg-icon { color: #f5f8fb; }

        /* ── Icon: circular badge with a soft glow behind it ── */
        .ab-team-icon-wrap {
          position: relative;
          width: 4.5rem;
          height: 4.5rem;
          margin: 0 auto 1.1rem;
        }
        .ab-team-icon-glow {
          position: absolute;
          inset: -16px;
          border-radius: 9999px;
          background: var(--accent);
          opacity: 0.16;
          filter: blur(20px);
          transition: opacity 0.4s ease;
        }
        html.dark .ab-team-icon-glow { opacity: 0.24; }
        .ab-team-panel:hover .ab-team-icon-glow { opacity: 0.32; }
        html.dark .ab-team-panel:hover .ab-team-icon-glow { opacity: 0.42; }

        .ab-team-icon {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 100%;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.6);
          border: 1.5px solid color-mix(in srgb, var(--accent) 45%, transparent);
          color: var(--accent);
          box-shadow: 0 6px 18px rgba(2, 50, 96, 0.1);
          transition: background 0.35s ease, color 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease;
        }
        html.dark .ab-team-icon {
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
        }
        .ab-team-panel:hover .ab-team-icon {
          background: var(--accent);
          color: white;
          transform: scale(1.06);
          box-shadow: 0 10px 26px color-mix(in srgb, var(--accent) 45%, transparent);
        }

        /* ── Stat pill bar ── */
        .ab-team-stats-wrap {
          display: inline-flex;
          align-items: center;
          gap: 1.5rem;
          border-radius: 9999px;
          padding: 0.65rem 1.6rem;
          background: rgba(2, 50, 96, 0.05);
          border: 1px solid rgba(2, 50, 96, 0.1);
          margin: 1.25rem 0 1.5rem;
        }
        html.dark .ab-team-stats-wrap {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.12);
        }
        .ab-team-stat-value {
          font-size: 1.35rem;
          font-weight: 800;
          line-height: 1;
          color: var(--accent);
        }
        .ab-team-stat-label {
          font-size: 0.62rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-top: 0.3rem;
          display: block;
          color: rgba(2, 50, 96, 0.55);
        }
        html.dark .ab-team-stat-label { color: rgba(255, 255, 255, 0.55); }
        .ab-team-stat-divider {
          width: 1px;
          height: 1.75rem;
          background: rgba(2, 50, 96, 0.15);
        }
        html.dark .ab-team-stat-divider { background: rgba(255, 255, 255, 0.18); }

        /* ── Sub-team chips — small accent-tinted icon avatar + label ── */
        .ab-team-subteams {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.55rem;
        }
        .ab-sub-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          border-radius: 9999px;
          padding: 0.3rem 0.8rem 0.3rem 0.3rem;
          font-size: 0.68rem;
          font-weight: 700;
          background: rgba(2, 50, 96, 0.05);
          border: 1px solid rgba(2, 50, 96, 0.12);
          color: #023260;
          transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease, color 0.3s ease;
        }
        .ab-sub-chip:hover {
          transform: translateY(-2px);
          border-color: color-mix(in srgb, var(--accent) 50%, transparent);
        }
        .ab-sub-chip-icon {
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: color-mix(in srgb, var(--accent) 16%, transparent);
          color: var(--accent);
          flex-shrink: 0;
        }
        html.dark .ab-sub-chip {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.14);
          color: #f5f8fb;
        }
        html.dark .ab-sub-chip-icon {
          background: color-mix(in srgb, var(--accent) 30%, transparent);
        }
      `}),l.jsx(zk,{eyebrow:"Our Committees",title:"Meet Our Teams",icon:Ts,subtitle:"From technical innovation to non-technical operations, our committees are the engine behind everything the branch does."}),l.jsx("div",{className:"grid md:grid-cols-2 gap-6",children:Ok.map((r,a)=>{const s=r.icon;return l.jsxs("div",{style:{"--accent":r.accent},className:`ab-team-panel ${a===0?"reveal-left-auto":"reveal-right-auto"}`,children:[r.subTeams.map(({icon:i,label:c,bg:u})=>l.jsx("span",{className:"ab-team-bg-icon",style:{top:u.top,bottom:u.bottom,left:u.left,right:u.right,opacity:u.opacity,transform:`rotate(${u.rotate}deg)`},children:l.jsx(i,{size:u.size,strokeWidth:1.1})},`bg-${c}`)),l.jsxs("span",{className:"ab-team-badge",children:["Committee 0",a+1]}),l.jsxs("div",{className:"ab-team-content",children:[l.jsxs("div",{className:"ab-team-icon-wrap",children:[l.jsx("span",{className:"ab-team-icon-glow"}),l.jsx("div",{className:"ab-team-icon",children:l.jsx(s,{size:26})})]}),l.jsx("h3",{className:"text-2xl font-extrabold tracking-tight mb-3",children:r.title}),l.jsx("p",{className:"leading-relaxed max-w-sm mx-auto text-[#023260]/70 dark:text-white/70",children:r.desc}),l.jsx("div",{className:"ab-team-stats-wrap",children:r.stats.map((i,c)=>l.jsxs(Ud.Fragment,{children:[c>0&&l.jsx("div",{className:"ab-team-stat-divider"}),l.jsxs("div",{children:[l.jsx("div",{className:"ab-team-stat-value",children:i.value}),l.jsx("span",{className:"ab-team-stat-label",children:i.label})]})]},i.label))}),l.jsx("div",{className:"ab-team-subteams mb-6",children:r.subTeams.map(({icon:i,label:c})=>l.jsxs("span",{className:"ab-sub-chip",children:[l.jsx("span",{className:"ab-sub-chip-icon",children:l.jsx(i,{size:12,strokeWidth:2.2})}),c]},c))}),l.jsx(dt,{to:r.path,children:l.jsxs("button",{className:r.cta==="blue"?"ab-btn-outline-blue":"ab-btn-gradient",children:["Discover the Team",l.jsx(Ki,{size:14,className:"arrow-icon"})]})})]})]},r.key)})})]})}const Dk=[{left:"8%",color:"#cc2233",duration:"9s",delay:"0s"},{left:"25%",color:"#023260",duration:"11s",delay:"2s"},{left:"50%",color:"#cc2233",duration:"8s",delay:"4.5s"},{left:"72%",color:"#023260",duration:"13s",delay:"1s"},{left:"90%",color:"#cc2233",duration:"10s",delay:"3s"}],Mk=[{char:"关",top:"-2%",left:"-4%",size:220,tint:"blue",rotate:-6,delay:"0s"},{char:"于",top:"3%",right:"-3%",size:160,tint:"red",rotate:8,delay:"1.5s"},{char:"我",top:"34%",left:"3%",size:90,tint:"blue",rotate:4,delay:"3s"},{char:"们",bottom:"6%",right:"6%",size:110,tint:"red",rotate:-10,delay:"0.7s"},{char:"志",top:"58%",left:"-3%",size:150,tint:"blue",rotate:5,delay:"2.2s"},{char:"梦",top:"84%",right:"-2%",size:120,tint:"blue",rotate:-4,delay:"4s"},{char:"创",top:"12%",left:"24%",size:100,tint:"red",rotate:9,delay:"1.1s"},{char:"新",top:"46%",right:"22%",size:130,tint:"blue",rotate:-8,delay:"2.8s"},{char:"未",bottom:"38%",left:"42%",size:95,tint:"blue",rotate:6,delay:"0.4s"},{char:"来",top:"95%",left:"16%",size:115,tint:"red",rotate:-5,delay:"3.6s"},{char:"创",top:"22%",right:"40%",size:85,tint:"blue",rotate:3,delay:"2.6s",hideMobile:!0},{char:"梦",bottom:"18%",left:"8%",size:75,tint:"red",rotate:-7,delay:"1.9s",hideMobile:!0},{char:"我",top:"70%",right:"48%",size:100,tint:"blue",rotate:5,delay:"0.9s",hideMobile:!0},{char:"新",top:"1%",left:"45%",size:90,tint:"red",rotate:-3,delay:"3.3s",hideMobile:!0},{char:"族",top:"16%",left:"60%",size:80,tint:"blue",rotate:7,delay:"2.1s",hideMobile:!0},{char:"工",top:"62%",left:"30%",size:70,tint:"red",rotate:-9,delay:"1.3s",hideMobile:!0},{char:"程",top:"78%",left:"70%",size:95,tint:"blue",rotate:4,delay:"3.9s",hideMobile:!0},{char:"队",top:"8%",left:"12%",size:65,tint:"red",rotate:-6,delay:"0.6s",hideMobile:!0}],Uk=[{year:"2020",title:"The Spark",desc:"A handful of engineering students at ECU founded the branch, chasing a single idea: technology grows faster together.",icon:jg},{year:"2022",title:"First Workshops",desc:"Our first hands-on workshops and technical talks brought hundreds of students into the IEEE community.",icon:Pd},{year:"2023",title:"Regional Recognition",desc:"IEEE ECU SB earned regional recognition for outstanding student activities and community impact.",icon:j2},{year:"2025",title:"National Milestone",desc:"Our projects and competition wins put IEEE ECU SB on the national map, opening doors to new partnerships.",icon:Sg},{year:"2026",title:"Growing Family",desc:"Today we're one of the most active student branches on campus, with committees spanning every field of engineering.",icon:c1}],Lk=[{icon:Pd,title:"Innovation",desc:"We chase ideas that challenge the ordinary and turn curiosity into real solutions."},{icon:r1,title:"Integrity",desc:"We hold ourselves to a standard of honesty, fairness, and accountability in everything we do."},{icon:Ts,title:"Collaboration",desc:"Great engineering is a team sport — we grow by building with and for each other."},{icon:Rl,title:"Passion",desc:"Every workshop, event, and project is driven by genuine love for learning and technology."}],Bk=[{icon:Sg,title:"Technical Excellence",desc:"Deliver workshops, competitions, and hands-on learning experiences."},{icon:Ts,title:"Leadership",desc:"Develop future leaders through teamwork and volunteering."},{icon:Pd,title:"Innovation",desc:"Encourage creativity and engineering solutions for real problems."},{icon:Rl,title:"Community",desc:"Create a collaborative environment that supports every member."}],Hk=[{end:6,suffix:"+",label:"Years"},{end:500,suffix:"+",label:"Members"},{end:150,suffix:"+",label:"Active Members"},{end:60,suffix:"+",label:"Volunteers"},{end:40,suffix:"+",label:"Events"},{end:25,suffix:"+",label:"Workshops"},{end:10,suffix:"+",label:"Partners"}];function Ei({eyebrow:r,title:a,subtitle:s,icon:i}){return l.jsxs("div",{className:"mb-10 text-center reveal-auto",children:[l.jsxs("span",{className:"ab-eyebrow justify-center",children:[l.jsx("span",{className:"stem h-px bg-[#D92525] block"}),l.jsxs("span",{className:"text-xs font-semibold tracking-[0.25em] uppercase text-[#D92525] flex items-center gap-2",children:[i&&l.jsx(i,{size:14}),r]}),l.jsx("span",{className:"stem h-px bg-[#D92525] block"})]}),l.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-[#023260] dark:text-white mt-4",children:a}),s&&l.jsx("p",{className:"text-gray-600 dark:text-gray-300 mt-3 max-w-2xl mx-auto leading-relaxed",children:s})]})}function $k({end:r,suffix:a,label:s}){const[i,c]=v.useState(0),u=v.useRef(null),h=v.useRef(!1);return v.useEffect(()=>{const p=u.current;if(!p)return;const m=new IntersectionObserver(([g])=>{if(g.isIntersecting&&!h.current){h.current=!0;const y=1600,x=performance.now(),S=k=>{const T=Math.min((k-x)/y,1),C=1-Math.pow(1-T,3);c(Math.floor(C*r)),T<1?requestAnimationFrame(S):c(r)};requestAnimationFrame(S)}},{threshold:.4});return m.observe(p),()=>m.disconnect()},[r]),l.jsxs("div",{ref:u,className:"reveal-auto text-center",children:[l.jsxs("div",{className:"text-3xl md:text-4xl font-extrabold text-[#023260] dark:text-white",children:[i,a]}),l.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2 font-semibold tracking-wide uppercase",children:s})]})}function qk(){const r=ta(),a=v.useRef(null),s=v.useRef(null),i=v.useRef(null),c=v.useRef(null),u=v.useRef(null),h=v.useRef(null),p=v.useRef(null),[m,g]=v.useState(!1);v.useEffect(()=>{const x=()=>{g(window.scrollY>420)};return x(),window.addEventListener("scroll",x,{passive:!0}),()=>window.removeEventListener("scroll",x)},[]);const y=()=>{window.scrollTo({top:0,behavior:"smooth"})};return v.useEffect(()=>{if(!r.hash)return;const x=r.hash.replace("#",""),S=setTimeout(()=>{const k=document.getElementById(x);if(k){const T=k.getBoundingClientRect().top+window.scrollY-100;window.scrollTo({top:T,behavior:"smooth"})}},150);return()=>clearTimeout(S)},[r]),v.useEffect(()=>{const x=new IntersectionObserver(k=>{k.forEach(T=>{T.isIntersecting?T.target.classList.add("in-view"):T.target.classList.remove("in-view")})},{threshold:.15});[c,u,h,p].forEach(k=>{k.current&&x.observe(k.current)});const S=()=>{if(!a.current)return;const k=a.current.getBoundingClientRect(),T=Math.max(0,Math.min(1,-k.top/(k.height*.5)));s.current&&(s.current.style.transform=`translateY(${T*-30}px)`),i.current&&(i.current.style.transform=`translateY(${T*-18}px)`)};return window.addEventListener("scroll",S,{passive:!0}),()=>{x.disconnect(),window.removeEventListener("scroll",S)}},[]),v.useEffect(()=>{const x=new IntersectionObserver(S=>{S.forEach(k=>{k.isIntersecting?k.target.classList.add("in-view"):k.target.classList.remove("in-view")})},{threshold:.12});return document.querySelectorAll(".reveal-auto, .reveal-left-auto, .reveal-right-auto").forEach(S=>x.observe(S)),()=>x.disconnect()},[]),l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
        /* ── Background ── */
        .ab-root {
          background:
            radial-gradient(ellipse 800px 600px at 8% 0%, rgba(74,158,255,0.10), transparent 60%),
            radial-gradient(ellipse 750px 550px at 92% 15%, rgba(217,37,37,0.06), transparent 60%),
            linear-gradient(to bottom, #f5f8fb, #d3dde8);
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          transition: background 0.4s ease;
        }
        .dark .ab-root {
          background:
            radial-gradient(ellipse 950px 700px at 8% 5%, rgba(13,90,167,0.24), transparent 60%),
            radial-gradient(ellipse 850px 650px at 92% 25%, rgba(217,37,37,0.18), transparent 60%),
            radial-gradient(ellipse 1000px 800px at 50% 100%, rgba(13,90,167,0.16), transparent 65%),
            linear-gradient(to bottom, #001233, #00040c 65%, #00040c);
        }

        /* ── Chinese bg characters ──
           Same drifting motion as ComingSoon.jsx. Base (light mode) color/opacity
           comes from an inline style per-character; dark mode overrides to a
           brighter blue/red so they read clearly against the dark background. */
        .ab-bg-char {
          position: absolute;
          font-family: 'Noto Serif SC', 'PingFang SC', 'Songti SC', 'SimSun', serif;
          font-weight: 900;
          pointer-events: none;
          user-select: none;
          line-height: 1;
          z-index: 0;
          animation: abCharDrift 14s ease-in-out infinite;
          transition: color 0.4s ease, opacity 0.4s ease;
        }
        @keyframes abCharDrift {
          0%, 100% { transform: translate3d(0,0,0) rotate(var(--ab-rot, 0deg)); }
          50%      { transform: translate3d(0,-16px,0) rotate(calc(var(--ab-rot, 0deg) + 0.8deg)); }
        }
        .dark .ab-bg-char-blue {
          color: #4a9eff !important;
          opacity: 0.22;
          filter: drop-shadow(0 0 22px rgba(74,158,255,0.3));
        }
        .dark .ab-bg-char-red {
          color: #ff5b5b !important;
          opacity: 0.2;
          filter: drop-shadow(0 0 22px rgba(217,37,37,0.34));
        }

        /* ── Falling petals ── */
        .ab-petal {
          position: absolute;
          width: 7px;
          height: 11px;
          border-radius: 80% 0 80% 0;
          opacity: 0;
          animation: abFallPetal linear infinite;
          top: -20px;
          z-index: 0;
        }
        @keyframes abFallPetal {
          0%   { transform: translateY(-5vh) rotate(0deg) translateX(0); opacity: 0; }
          8%   { opacity: 0.4; }
          92%  { opacity: 0.4; }
          100% { transform: translateY(105vh) rotate(540deg) translateX(50px); opacity: 0; }
        }

        /* ── Reveal animations (original) ── */
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .reveal.in-view {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-left {
          opacity: 0;
          transform: translateX(-40px);
          transition: opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s;
        }
        .reveal-left.in-view {
          opacity: 1;
          transform: translateX(0);
        }
        .reveal-right {
          opacity: 0;
          transform: translateX(40px);
          transition: opacity 0.9s ease 0.25s, transform 0.9s ease 0.25s;
        }
        .reveal-right.in-view {
          opacity: 1;
          transform: translateX(0);
        }
        .moments-line {
          width: 0;
          transition: width 1.2s ease 0.3s;
        }
        .in-view .moments-line {
          width: 3rem;
        }

        /* ── Reveal animations (new sections) ── */
        .reveal-auto {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-auto.in-view { opacity: 1; transform: translateY(0); }
        .reveal-left-auto {
          opacity: 0;
          transform: translateX(-32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-left-auto.in-view { opacity: 1; transform: translateX(0); }
        .reveal-right-auto {
          opacity: 0;
          transform: translateX(32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-right-auto.in-view { opacity: 1; transform: translateX(0); }

        /* ── Section eyebrow ── */
        .ab-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
        }
        .ab-eyebrow .stem {
          width: 0;
          height: 1px;
          background: #D92525;
          transition: width 0.9s ease 0.15s;
        }
        .in-view .ab-eyebrow .stem { width: 2.5rem; }

        /* ── Image card frame (original) ── */
        .ab-img-card {
          border: 1px solid rgba(2, 50, 96, 0.12);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 18px rgba(2, 50, 96, 0.1);
          position: relative;
          transition: box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
        }
        .ab-img-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: rgba(2,50,96,0.15) 66%, #cc2233 66%, #cc2233 100%);
          z-index: 1;
        }
        .group:hover .ab-img-card {
          box-shadow: 0 8px 32px rgba(2, 50, 96, 0.18);
          transform: translateY(-3px);
        }
        .dark .ab-img-card {
          border-color: rgba(255, 255, 255, 0.12);
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.45);
        }
        .dark .group:hover .ab-img-card {
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.55), 0 0 34px rgba(74,158,255,0.22);
        }

        /* ── Steps row (full page width, compact cards) ── */
        .ab-steps-row {
          position: relative;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.5rem;
          width: 100%;
        }
        .ab-steps-row::before {
          content: '';
          position: absolute;
          top: 1.15rem;
          left: 10%;
          right: 10%;
          height: 2px;
          background: linear-gradient(to right, transparent, #023260 12%, #023260 88%, transparent);
          z-index: 0;
        }
        .dark .ab-steps-row::before {
          background: linear-gradient(to right, transparent, #4a9eff 12%, #4a9eff 88%, transparent);
        }
        @media (max-width: 767px) {
          .ab-steps-row { grid-template-columns: 1fr; }
          .ab-steps-row::before { display: none; }
        }
        .ab-step-item {
          position: relative;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
        }
        .ab-step-dot {
          position: relative;
          z-index: 1;
          flex-shrink: 0;
          margin: 0 auto 0.9rem;
          width: 2.3rem;
          height: 2.3rem;
          border-radius: 9999px;
          background: #023260;
          border: 3px solid #f5f8fb;
          box-shadow: 0 0 0 2px rgba(217,37,37,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: border-color 0.4s ease;
        }
        .dark .ab-step-dot {
          border-color: #00050d;
          background: #0d5aa7;
          box-shadow: 0 0 0 2px rgba(217,37,37,0.35), 0 0 18px rgba(74,158,255,0.55);
        }
        .ab-step-card {
          background: rgba(255, 255, 255, 0.42);
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-radius: 14px;
          padding: 0.9rem 1rem;
          box-shadow: 0 3px 12px rgba(2, 50, 96, 0.05);
          backdrop-filter: blur(7px);
          -webkit-backdrop-filter: blur(7px);
          transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, border-color 0.3s ease;
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
          width: 100%;
        }
        .ab-step-card:hover {
          background: rgba(255, 255, 255, 0.58);
          transform: translateY(-4px);
          box-shadow: 0 10px 24px rgba(2, 50, 96, 0.10);
        }
        .dark .ab-step-card {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 3px 12px rgba(0, 0, 0, 0.3);
        }
        .dark .ab-step-card:hover {
          background: rgba(255, 255, 255, 0.09);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.4), 0 0 24px rgba(74,158,255,0.18);
        }

        /* ── Committee panels: bold, centered, high-impact cards (height reduced) ── */
        .ab-team-panel {
          position: relative;
          border-radius: 24px;
          padding: 2rem 2rem;
          overflow: hidden;
          text-align: center;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .ab-team-panel:hover { transform: translateY(-8px); }
        .ab-team-panel.dark {
          background: linear-gradient(
            160deg,
            rgba(2, 50, 96, 0.88),
            rgba(1, 33, 63, 0.82)
          );
          color: white;
          box-shadow: 0 14px 34px rgba(2, 50, 96, 0.20), 0 0 44px rgba(13,90,167,0.22);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        .ab-team-panel.dark:hover {
          box-shadow: 0 18px 44px rgba(2, 50, 96, 0.28), 0 0 60px rgba(217,37,37,0.22);
        }
        .ab-team-panel.light {
          background: rgba(255, 255, 255, 0.42);
          color: #023260;
          border: 1px solid rgba(255, 255, 255, 0.55);
          box-shadow: 0 8px 24px rgba(2, 50, 96, 0.06);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        html.dark .ab-team-panel.light {
          background: rgba(255, 255, 255, 0.06);
          color: #f5f8fb;
          border-color: rgba(255, 255, 255, 0.12);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }
        .ab-team-watermark {
          position: absolute;
          top: -1.5rem;
          right: -1.5rem;
          opacity: 0.07;
          pointer-events: none;
          z-index: 0;
        }
        .ab-team-panel.dark .ab-team-watermark { color: white; }
        .ab-team-panel.light .ab-team-watermark { color: #023260; }
        html.dark .ab-team-panel.light .ab-team-watermark { color: #f5f8fb; }
        .ab-team-tag {
          position: relative;
          z-index: 1;
          display: inline-block;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
          color: #D92525;
        }
        .ab-team-icon {
          position: relative;
          z-index: 1;
          width: 3.25rem;
          height: 3.25rem;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 0.9rem;
        }
        .ab-team-panel.dark .ab-team-icon { background: rgba(255,255,255,0.12); }
        .ab-team-panel.light .ab-team-icon { background: rgba(2,50,96,0.08); }
        html.dark .ab-team-panel.light .ab-team-icon { background: rgba(255,255,255,0.1); }
        .ab-team-panel h3 {
          position: relative;
          z-index: 1;
        }
        .ab-team-panel p {
          position: relative;
          z-index: 1;
        }

        /* ── Committee stats ── */
        .ab-team-stats {
          display: flex;
          justify-content: center;
          gap: 2.25rem;
          margin: 1.15rem 0;
          position: relative;
          z-index: 1;
        }
        .ab-team-stat-value {
          font-size: 1.5rem;
          font-weight: 800;
          line-height: 1;
        }
        .ab-team-stat-label {
          font-size: 0.65rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-top: 0.35rem;
          display: block;
        }
        .ab-team-panel.dark .ab-team-stat-label { color: rgba(255,255,255,0.55); }
        .ab-team-panel.light .ab-team-stat-label { color: rgba(2,50,96,0.45); }
        html.dark .ab-team-panel.light .ab-team-stat-label { color: rgba(255,255,255,0.5); }
        .ab-team-divider { width: 1px; align-self: stretch; }
        .ab-team-panel.dark .ab-team-divider { background: rgba(255,255,255,0.2); }
        .ab-team-panel.light .ab-team-divider { background: rgba(2,50,96,0.12); }
        html.dark .ab-team-panel.light .ab-team-divider { background: rgba(255,255,255,0.15); }

        /* ── Shared gradient buttons (animated + shine sweep, same feel as Home) ── */
        .ab-btn-gradient {
          position: relative;
          z-index: 1;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          font-size: 0.85rem;
          color: white;
          padding: 0.65rem 1.6rem;
          border-radius: 9999px;
          background: linear-gradient(115deg, #7a1220, #D92525 45%, #ff6b4a 75%, #D92525);
          background-size: 250% 250%;
          background-position: 0% 50%;
          box-shadow: 0 8px 20px rgba(217,37,37,0.35);
          transition: background-position 0.6s ease, transform 0.35s ease, box-shadow 0.35s ease;
        }
        .ab-btn-gradient::before {
          content: '';
          position: absolute;
          top: 0; left: -75%;
          width: 50%; height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255,255,255,0.45),
            transparent
          );
          transform: skewX(-20deg);
          transition: left 0.7s ease;
        }
        .ab-btn-gradient:hover {
          background-position: 100% 50%;
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 12px 26px rgba(217,37,37,0.5);
        }
        .ab-btn-gradient:hover::before {
          left: 125%;
        }
        .ab-btn-gradient:active {
          transform: translateY(0) scale(0.98);
        }
        .ab-btn-gradient .arrow-icon { transition: transform 0.3s ease; }
        .ab-btn-gradient:hover .arrow-icon { transform: translateX(3px); }
        .dark .ab-btn-gradient {
          box-shadow: 0 6px 20px rgba(217,37,37,0.4);
        }
        .dark .ab-btn-gradient:hover {
          box-shadow: 0 8px 26px rgba(217,37,37,0.5);
        }
        .dark .ab-pulse-ring::after {
          border-color: #ff5b5b;
        }

        /* ── Latest News button — same animated blue gradient as the navbar Login button ── */
        .ab-btn-outline-blue {
          position: relative;
          z-index: 1;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          font-size: 0.85rem;
          color: white;
          padding: 0.65rem 1.6rem;
          border-radius: 9999px;
          background: linear-gradient(115deg, #011a36, #023260 40%, #0d5aa7 70%, #023260);
          background-size: 250% 250%;
          background-position: 0% 50%;
          box-shadow: 0 4px 14px rgba(2,50,96,0.35);
          transition: background-position 0.6s ease, transform 0.35s ease, box-shadow 0.35s ease;
        }
        .ab-btn-outline-blue::before {
          content: '';
          position: absolute;
          top: 0; left: -75%;
          width: 50%; height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255,255,255,0.5),
            transparent
          );
          transform: skewX(-20deg);
          transition: left 0.7s ease;
        }
        .ab-btn-outline-blue:hover {
          background-position: 100% 50%;
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 8px 22px rgba(2,50,96,0.5);
        }
        .ab-btn-outline-blue:hover::before {
          left: 125%;
        }
        .ab-btn-outline-blue:active {
          transform: translateY(0) scale(0.98);
        }
        .ab-btn-outline-blue .arrow-icon { transition: transform 0.3s ease; }
        .ab-btn-outline-blue:hover .arrow-icon { transform: translateX(3px) rotate(4deg); }
        .dark .ab-btn-outline-blue {
          box-shadow: 0 4px 16px rgba(13,90,167,0.4);
        }
        .dark .ab-btn-outline-blue:hover {
          box-shadow: 0 6px 20px rgba(13,90,167,0.5);
        }

        @keyframes abPulseRing {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .ab-pulse-ring::after {
          content: '';
          position: absolute; inset: 0;
          border-radius: 9999px;
          border: 2px solid #D92525;
          animation: abPulseRing 2s ease-out infinite;
        }

        /* ── Goal / Value cards ── */
        .ab-premium-card {
          position: relative;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.48);
          border: 1px solid rgba(255, 255, 255, 0.55);
          padding: 1.75rem;
          box-shadow: 0 4px 18px rgba(2, 50, 96, 0.06);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease,
            background 0.35s ease;
          overflow: hidden;
        }
        .ab-premium-card:hover {
          background: rgba(255, 255, 255, 0.62);
          transform: translateY(-6px);
          box-shadow: 0 14px 32px rgba(2, 50, 96, 0.12);
          border-color: rgba(255, 255, 255, 0.75);
        }
        .ab-premium-card:hover::before { transform: scaleY(1); }
        .ab-premium-icon {
          width: 3rem;
          height: 3rem;
          border-radius: 12px;
          background: rgba(2,50,96,0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #023260;
          margin-bottom: 1rem;
          transition: background 0.3s ease, color 0.3s ease;
        }
        .ab-premium-card:hover .ab-premium-icon {
          background: #D92525;
          color: white;
        }
        .dark .ab-premium-card {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.35);
        }
        .dark .ab-premium-card:hover {
          background: rgba(255, 255, 255, 0.09);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 14px 32px rgba(0, 0, 0, 0.45), 0 0 30px rgba(217,37,37,0.2);
        }
        .dark .ab-premium-icon {
          background: rgba(255, 255, 255, 0.08);
          color: #7db3f5;
        }
        .dark .ab-premium-card:hover .ab-premium-icon {
          background: #D92525;
          color: white;
        }

        /* ── Impact strip ── */
        .ab-impact-strip {
          border-radius: 26px;
          background: rgba(255, 255, 255, 0.42);
          border: 1px solid rgba(255, 255, 255, 0.55);
          box-shadow: 0 8px 28px rgba(2, 50, 96, 0.06);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          transition: background 0.4s ease, border-color 0.4s ease;
        }
        .dark .ab-impact-strip {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.35), 0 0 50px rgba(13,90,167,0.15);
        }

        /* ── Gallery mosaic ── */
        .ab-gallery-caption {
          position: absolute;
          inset: auto 0 0 0;
          padding: 1.25rem;
          background: linear-gradient(to top, rgba(2,50,96,0.85), transparent);
          color: white;
          font-weight: 600;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.35s ease, transform 0.35s ease;
        }
        .group:hover .ab-gallery-caption {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Partners ── */
        .ab-partner-card {
          position: relative;
          background: rgba(255, 255, 255, 0.42);
          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.55);
          overflow: hidden;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
        }
        .ab-partner-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(to right, #023260, #4a9eff);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }
        .ab-partner-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(2,50,96,0.12);
        }
        .ab-partner-card:hover::before { transform: scaleX(1); }
        .dark .ab-partner-card {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.1);
        }
        .dark .ab-partner-card:hover {
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.4), 0 0 26px rgba(74,158,255,0.2);
        }

        /* ── Join CTA ── */
        .ab-cta {
          position: relative;
          border-radius: 28px;
          background: linear-gradient(135deg, #023260, #01213f);
          overflow: hidden;
          padding: 3.5rem 2rem;
        }
        .dark .ab-cta {
          background:
            radial-gradient(ellipse 700px 500px at 15% 20%, rgba(217,37,37,0.22), transparent 60%),
            radial-gradient(ellipse 750px 550px at 85% 80%, rgba(13,90,167,0.28), transparent 60%),
            linear-gradient(135deg, #011a36, #000710);
          box-shadow: 0 0 60px rgba(13,90,167,0.15) inset;
        }
        .ab-cta-char {
          position: absolute;
          font-weight: 700;
          color: rgba(255,255,255,0.1);
          pointer-events: none;
          user-select: none;
          line-height: 1;
          z-index: 0;
        }
        .ab-cta-btn {
          font-size: 0.95rem;
          padding: 0.85rem 2.25rem;
        }

        /* ── Footer social icons ── */
        .ab-social-icon {
          width: 3rem;
          height: 3rem;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(2,50,96,0.06);
          color: #023260;
          border: 1px solid rgba(2,50,96,0.1);
          transition: background 0.3s ease, color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .ab-social-icon:hover {
          background: #D92525;
          border-color: #D92525;
          color: white;
          transform: translateY(-4px);
          box-shadow: 0 10px 20px rgba(217,37,37,0.3);
        }
        .dark .ab-social-icon {
          background: rgba(255, 255, 255, 0.06);
          color: #9fc4f0;
          border-color: rgba(255, 255, 255, 0.12);
        }
        .dark .ab-social-icon:hover {
          background: #D92525;
          border-color: #D92525;
          color: white;
          box-shadow: 0 10px 24px rgba(217,37,37,0.4), 0 0 20px rgba(217,37,37,0.35);
        }

        /* ── Scroll-to-top button ── */
        .ab-scroll-top {
          position: fixed;
          right: 1.75rem;
          bottom: 1.75rem;
          z-index: 50;
          width: 3.25rem;
          height: 3.25rem;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          border: none;
          cursor: pointer;
          background: linear-gradient(145deg, #7a1220, #D92525 45%, #ff6b4a 75%, #D92525);
          background-size: 220% 220%;
          background-position: 0% 50%;
          box-shadow: 0 10px 26px rgba(217,37,37,0.4), 0 0 0 4px rgba(255,255,255,0.6);
          opacity: 0;
          transform: translateY(16px) scale(0.85);
          pointer-events: none;
          transition: opacity 0.35s ease, transform 0.35s ease, background-position 0.6s ease, box-shadow 0.3s ease;
        }
        .ab-scroll-top.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }
        .ab-scroll-top:hover {
          background-position: 100% 50%;
          transform: translateY(-4px) scale(1.08);
          box-shadow: 0 16px 34px rgba(217,37,37,0.55), 0 0 0 4px rgba(255,255,255,0.75);
        }
        .ab-scroll-top:active {
          transform: translateY(-1px) scale(0.96);
        }
        .ab-scroll-top .ab-scroll-top-arrow {
          transition: transform 0.3s ease;
        }
        .ab-scroll-top:hover .ab-scroll-top-arrow {
          transform: translateY(-3px);
        }
        .ab-scroll-top::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          border: 2px solid rgba(217,37,37,0.55);
          animation: abPulseRing 2.2s ease-out infinite;
          pointer-events: none;
        }
        .dark .ab-scroll-top {
          box-shadow: 0 10px 26px rgba(217,37,37,0.5), 0 0 0 4px rgba(0,5,13,0.6);
        }
        @media (max-width: 767px) {
          .ab-scroll-top {
            right: 1.1rem;
            bottom: 1.1rem;
            width: 2.9rem;
            height: 2.9rem;
          }
        }
      `}),l.jsxs("div",{className:"ab-root text-gray-800 dark:text-gray-100 pb-8",children:[Mk.map((x,S)=>{const k={fontSize:x.size,"--ab-rot":`${x.rotate}deg`,transform:`rotate(${x.rotate}deg)`,animationDelay:x.delay,color:x.tint==="blue"?"rgba(2,50,96,0.13)":"rgba(204,34,51,0.13)"};return x.top!==void 0&&(k.top=x.top),x.bottom!==void 0&&(k.bottom=x.bottom),x.left!==void 0&&(k.left=x.left),x.right!==void 0&&(k.right=x.right),l.jsx("span",{className:`ab-bg-char ab-bg-char-${x.tint} ${x.hideMobile?"hidden md:block":""}`,style:k,children:x.char},S)}),Dk.map((x,S)=>l.jsx("div",{className:"ab-petal",style:{left:x.left,background:x.color,animationDuration:x.duration,animationDelay:x.delay}},S)),l.jsx("button",{type:"button",onClick:y,"aria-label":"Back to top",className:`ab-scroll-top ${m?"visible":""}`,children:l.jsx(e2,{size:22,className:"ab-scroll-top-arrow",strokeWidth:2.5})}),l.jsxs("main",{className:"max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-8 md:pb-8 flex flex-col gap-16 relative z-10",children:[l.jsxs("div",{ref:p,className:"reveal relative pl-4 md:pl-8 w-full",children:[l.jsx("div",{className:"absolute -left-8 top-0 bottom-0 w-12 items-center justify-center hidden md:flex",children:l.jsx("div",{className:"writing-mode-vertical text-[#D92525] text-2xl font-bold tracking-widest opacity-80 border-l-2 border-[#D92525] pl-2",children:"关于我们"})}),l.jsxs("div",{className:"relative",children:[l.jsx("div",{className:"absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-[#D92525] opacity-20"}),l.jsxs("h1",{className:"text-2xl md:text-3xl font-extrabold pb-2 text-[#023260] dark:text-white relative",children:["About ",l.jsx("span",{className:"text-[#D92525]",children:"Us."}),l.jsx("span",{className:"absolute -top-2 right-4 w-8 h-8 bg-[#023260] dark:bg-[#0d5aa7] text-white text-xs flex items-center justify-center rounded-sm opacity-90 shadow-sm transform rotate-12",children:"IEEE"})]}),l.jsxs("h2",{className:"text-xl font-semibold text-[#023260] dark:text-white mb-5 pt-3 flex items-center gap-3",children:[l.jsx("span",{className:"w-1 h-5 bg-[#D92525] rounded-full"}),"Who are we?"]}),l.jsx("p",{className:"text-gray-600 dark:text-gray-300 leading-relaxed mb-3 text-base",children:"IEEE ECU Student Branch is a dynamic student-led community dedicated to empowering future engineers, innovators, and technology enthusiasts at Egyptian Chinese University. As part of the world's largest technical professional organization, IEEE ECU Student Branch provides students with opportunities to enhance their technical knowledge, develop leadership and teamwork skills, and connect with industry professionals. Through workshops, seminars, competitions, community initiatives, and networking events, we strive to inspire innovation, foster continuous learning, and prepare students to make a meaningful impact in the fields of engineering, technology, and beyond."})]})]}),l.jsxs("section",{children:[l.jsx(Ei,{eyebrow:"Our Story",title:"From an Idea to a Movement",subtitle:"Every branch has an origin story. Here's a look at the milestones that shaped IEEE ECU Student Branch into what it is today."}),l.jsx("div",{className:"ab-steps-row",children:Uk.map((x,S)=>{const k=x.icon;return l.jsxs("div",{className:"ab-step-item reveal-auto",style:{transitionDelay:`${S*.1}s`},children:[l.jsx("div",{className:"ab-step-dot",children:l.jsx(k,{size:14})}),l.jsxs("div",{className:"ab-step-card",children:[l.jsx("span",{className:"text-xs font-bold text-[#D92525] tracking-widest",children:x.year}),l.jsx("h3",{className:"font-bold text-[#023260] dark:text-white mt-1 mb-1 text-sm",children:x.title}),l.jsx("p",{className:"text-gray-600 dark:text-gray-300 text-xs leading-relaxed",children:x.desc})]})]},S)})})]}),l.jsxs("section",{children:[l.jsx(Ei,{eyebrow:"Our Goals",title:"Building Engineers of Tomorrow",subtitle:"We strive to empower students through technical excellence, leadership, innovation, and community engagement."}),l.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-6",children:Bk.map((x,S)=>{const k=x.icon;return l.jsxs("div",{className:"ab-premium-card reveal-auto",style:{transitionDelay:`${S*.08}s`},children:[l.jsx("div",{className:"ab-premium-icon",children:l.jsx(k,{size:22})}),l.jsx("h3",{className:"font-bold text-[#023260] dark:text-white mb-2",children:x.title}),l.jsx("p",{className:"text-gray-600 dark:text-gray-300 text-sm leading-relaxed",children:x.desc})]},S)})})]}),l.jsxs("section",{children:[l.jsx(Ei,{eyebrow:"Our Values",title:"What Drives Us Forward"}),l.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-6",children:Lk.map((x,S)=>{const k=x.icon;return l.jsxs("div",{className:"ab-premium-card reveal-auto",style:{transitionDelay:`${S*.08}s`},children:[l.jsx("div",{className:"ab-premium-icon",children:l.jsx(k,{size:22})}),l.jsx("h3",{className:"font-bold text-[#023260] dark:text-white mb-2",children:x.title}),l.jsx("p",{className:"text-gray-600 dark:text-gray-300 text-sm leading-relaxed",children:x.desc})]},S)})})]}),l.jsxs("div",{ref:a,children:[l.jsx(Ei,{eyebrow:"A Few of Our Moments",title:"Captured Along the Way",icon:jl}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 w-full",children:[l.jsx("div",{ref:s,children:l.jsx("div",{ref:c,className:"reveal-left relative group",children:l.jsxs("div",{className:"ab-img-card",children:[l.jsx("img",{src:Ek,alt:"IEEE Group",className:"w-full h-64 md:h-80 object-cover rounded-[18px] grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"}),l.jsx("div",{className:"ab-gallery-caption",children:"Team spirit, always on."})]})})}),l.jsx("div",{ref:i,children:l.jsx("div",{ref:u,className:"reveal-right relative group",children:l.jsxs("div",{className:"ab-img-card",children:[l.jsx("img",{src:Nk,alt:"IEEE Event",className:"w-full h-64 md:h-80 object-cover rounded-[18px] grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"}),l.jsx("div",{className:"ab-gallery-caption",children:"Building moments worth remembering."})]})})})]})]}),l.jsx(Fg,{}),l.jsx(Kg,{}),l.jsxs("section",{children:[l.jsx(Ei,{eyebrow:"Our Impact",title:"Numbers That Tell Our Story"}),l.jsx("div",{className:"ab-impact-strip grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 py-10 px-6",children:Hk.map((x,S)=>l.jsx($k,{...x},S))})]}),l.jsxs("section",{id:"join",className:"ab-cta reveal-auto text-center scroll-mt-28",children:[l.jsx("span",{className:"ab-cta-char",style:{fontSize:150,top:"-8%",left:"-2%"},children:"梦"}),l.jsx("span",{className:"ab-cta-char",style:{fontSize:120,bottom:"-5%",right:"-2%"},children:"志"}),l.jsxs("div",{className:"relative z-10 max-w-2xl mx-auto",children:[l.jsx("span",{className:"text-xs font-semibold tracking-[0.25em] uppercase text-[#D92525]",children:"Join Our Journey"}),l.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-white mt-3",children:"Ready to build the future with us?"}),l.jsx("p",{className:"text-white/80 mt-3 mb-8 leading-relaxed",children:"Whether you're into hardware, software, or somewhere in between — there's a place for you at IEEE ECU Student Branch."}),l.jsx("div",{className:"flex flex-wrap items-center justify-center gap-4",children:l.jsx(dt,{to:"/Membership",children:l.jsx("button",{className:"ab-btn-gradient ab-pulse-ring ab-cta-btn font-semibold",children:"Become a Member"})})})]})]}),l.jsxs("section",{className:"reveal-auto text-center mt-2",children:[l.jsxs("span",{className:"ab-eyebrow justify-center",children:[l.jsx("span",{className:"stem h-px bg-[#D92525] block"}),l.jsx("span",{className:"text-xs font-semibold tracking-[0.25em] uppercase text-[#D92525]",children:"Stay Connected"}),l.jsx("span",{className:"stem h-px bg-[#D92525] block"})]}),l.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-[#023260] dark:text-white mt-3 mb-5",children:"Follow Our Journey"}),l.jsxs("div",{className:"flex items-center justify-center gap-5 mb-5",children:[l.jsx("a",{href:"https://www.facebook.com/share/14YhX72rVkL/",target:"_blank",rel:"noopener noreferrer",className:"ab-social-icon",children:l.jsx(k2,{size:20})}),l.jsx("a",{href:"https://www.instagram.com/ieeeecusb?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",target:"_blank",rel:"noopener noreferrer",className:"ab-social-icon",children:l.jsx(O2,{size:20})}),l.jsx("a",{href:"https://www.linkedin.com/company/ieee-ecu-sb/posts/?feedView=all",target:"_blank",rel:"noopener noreferrer",className:"ab-social-icon",children:l.jsx(zl,{size:20})})]}),l.jsx(dt,{to:"/timeline",children:l.jsxs("button",{className:"ab-btn-outline-blue",children:["Latest News",l.jsx(W2,{size:16,className:"arrow-icon"})]})})]})]})]})]})}const Pk="/IEEE-ECU-SB-Website/assets/HR-CVDheAjf.png",Ik="/IEEE-ECU-SB-Website/assets/PR-BbHM6Z2w.png",Yk="/IEEE-ECU-SB-Website/assets/Events-D7VRlqNd.png",Gk="/IEEE-ECU-SB-Website/assets/Media-DP7GKsep.png",Vk=[{left:"8%",color:"#cc2233",duration:"9s",delay:"0s"},{left:"25%",color:"#023260",duration:"11s",delay:"2s"},{left:"50%",color:"#cc2233",duration:"8s",delay:"4.5s"},{left:"72%",color:"#023260",duration:"13s",delay:"1s"},{left:"90%",color:"#cc2233",duration:"10s",delay:"3s"}],Xk=[{en:"Human Resource",cn:"人力资源",desc:"Recruitment, interviews & ongoing team coordination.",icon:Pk},{en:"Public Relations",cn:"公共关系",desc:"Sponsors, partnerships & external connections.",icon:Ik},{en:"Events",cn:"活动策划",desc:"Event planning, materials & on-ground organizing.",icon:Yk},{en:"Media",cn:"媒体制作",desc:"Content, social media, design & video production.",icon:Gk}];function Kk(){return v.useEffect(()=>{const r=new IntersectionObserver(a=>{a.forEach(s=>{s.isIntersecting&&s.target.classList.add("in-view")})},{threshold:.15});return document.querySelectorAll(".reveal-auto, .reveal-left-auto, .reveal-right-auto").forEach(a=>r.observe(a)),()=>r.disconnect()},[]),l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
        /* ── Background — same recipe as About.jsx's .ab-root, light + dark ── */
        .tt-root {
          background:
            radial-gradient(ellipse 800px 600px at 8% 0%, rgba(74,158,255,0.10), transparent 60%),
            radial-gradient(ellipse 750px 550px at 92% 15%, rgba(217,37,37,0.06), transparent 60%),
            linear-gradient(to bottom, #f5f8fb, #d3dde8);
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          transition: background 0.4s ease;
        }
        .dark .tt-root {
          background:
            radial-gradient(ellipse 950px 700px at 8% 5%, rgba(13,90,167,0.24), transparent 60%),
            radial-gradient(ellipse 850px 650px at 92% 25%, rgba(217,37,37,0.18), transparent 60%),
            radial-gradient(ellipse 1000px 800px at 50% 100%, rgba(13,90,167,0.16), transparent 65%),
            linear-gradient(to bottom, #001233, #00040c 65%, #00040c);
        }

        .tt-bg-char {
          position: absolute;
          font-weight: 700;
          pointer-events: none;
          user-select: none;
          line-height: 1;
          z-index: 0;
        }
        .dark .tt-bg-char {
          opacity: 0.55;
          filter: drop-shadow(0 0 28px rgba(13,90,167,0.15));
        }

        .tt-petal {
          position: absolute;
          width: 7px;
          height: 11px;
          border-radius: 80% 0 80% 0;
          opacity: 0;
          animation: ttFallPetal linear infinite;
          top: -20px;
          z-index: 0;
        }
        @keyframes ttFallPetal {
          0%   { transform: translateY(-5vh) rotate(0deg) translateX(0); opacity: 0; }
          8%   { opacity: 0.3; }
          85%  { opacity: 0.15; }
          100% { transform: translateY(105vh) rotate(540deg) translateX(50px); opacity: 0; }
        }

        /* ── Reveal transitions ── */
        .reveal-auto {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-auto.in-view { opacity: 1; transform: translateY(0); }
        .reveal-left-auto {
          opacity: 0;
          transform: translateX(-32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-left-auto.in-view { opacity: 1; transform: translateX(0); }
        .reveal-right-auto {
          opacity: 0;
          transform: translateX(32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-right-auto.in-view { opacity: 1; transform: translateX(0); }

        .tt-eyebrow { display: inline-flex; align-items: center; gap: 0.6rem; }
        .tt-eyebrow .stem {
          width: 0;
          height: 1px;
          background: #D92525;
          transition: width 0.9s ease 0.15s;
        }
        .in-view .tt-eyebrow .stem { width: 2.5rem; }

        /* ── Seal element ── */
        .tt-seal {
          border: 2px solid #D92525;
          background: rgba(217,37,37,0.03);
          transform: rotate(-6deg);
          transition: transform 0.4s ease, background 0.4s ease;
        }
        .tt-seal:hover { transform: rotate(0deg); }
        .dark .tt-seal { background: rgba(217,37,37,0.08); }

        /* ── Timeline (single column) ── */
        .tt-timeline {
          position: relative;
          padding-left: 4.25rem;
        }
        .tt-timeline::before {
          content: '';
          position: absolute;
          left: 1.4rem;
          top: 0.5rem;
          bottom: 0.5rem;
          width: 2px;
          background: linear-gradient(to bottom, #023260, rgba(2,50,96,0.12));
          transition: background 0.4s ease;
        }
        .dark .tt-timeline::before {
          background: linear-gradient(to bottom, #4a9eff, rgba(74,158,255,0.12));
        }
        .tt-item { position: relative; padding-bottom: 2rem; }
        .tt-item:last-child { padding-bottom: 0; }

        /* Bigger dot + subtle gradient fill (instead of flat navy) so the
           circle itself has some depth, plus a soft glow ring that helps
           the white icon separate from the page background too. */
        .tt-dot {
          position: absolute;
          left: -4.25rem;
          top: 0.1rem;
          width: 3.4rem;
          height: 3.4rem;
          border-radius: 9999px;
          background: radial-gradient(circle at 32% 28%, #0d5aa7, #023260 72%);
          border: 4px solid #f5f8fb;
          box-shadow:
            0 0 0 2px rgba(2,50,96,0.35),
            0 8px 18px rgba(2,50,96,0.28);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.4s ease;
        }
        .tt-item:hover .tt-dot {
          transform: scale(1.06);
          box-shadow:
            0 0 0 2px rgba(2,50,96,0.4),
            0 10px 22px rgba(2,50,96,0.34);
        }
        .dark .tt-dot {
          border-color: #011a36;
          box-shadow:
            0 0 0 2px rgba(74,158,255,0.3),
            0 8px 18px rgba(0,0,0,0.5);
        }
        .dark .tt-item:hover .tt-dot {
          box-shadow:
            0 0 0 2px rgba(74,158,255,0.4),
            0 10px 24px rgba(0,0,0,0.6), 0 0 20px rgba(74,158,255,0.2);
        }
        .tt-dot img {
          width: 1.65rem;
          height: 1.65rem;
          object-fit: contain;
          /* Fully opaque white silhouette + a soft dark drop-shadow so
             thin line strokes keep a visible edge against the navy fill
             instead of dissolving into it. */
          filter:
            brightness(0) invert(1)
            drop-shadow(0 1px 1.5px rgba(0,0,0,0.35));
        }

        .tt-card {
          position: relative;
          background: white;
          border: 1px solid rgba(2,50,96,0.08);
          border-radius: 18px;
          padding: 1.5rem 1.75rem;
          box-shadow: 0 2px 12px rgba(2,50,96,0.06);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, background 0.4s ease;
        }
        .tt-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 4px; height: 100%;
          background: #023260;
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.4s ease;
        }
        .tt-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(2,50,96,0.14);
          border-color: transparent;
        }
        .tt-card:hover::before { transform: scaleY(1); }
        .dark .tt-card {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 2px 14px rgba(0,0,0,0.35);
        }
        .dark .tt-card::before { background: #4a9eff; }
        .dark .tt-card:hover {
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 16px 34px rgba(0,0,0,0.5), 0 0 26px rgba(74,158,255,0.14);
        }

        .tt-index {
          position: absolute;
          top: 1.25rem;
          right: 1.5rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: rgba(2,50,96,0.18);
          transition: color 0.3s ease;
        }
        .tt-card:hover .tt-index { color: #D92525; }
        .dark .tt-index { color: rgba(255,255,255,0.25); }

        .tt-arrow {
          transition: transform 0.3s ease, color 0.3s ease;
          color: #023260;
        }
        .tt-card:hover .tt-arrow { transform: translateX(4px); color: #D92525; }
        .dark .tt-arrow { color: #f5f8fb; }
      `}),l.jsxs("div",{className:"tt-root text-gray-800 dark:text-gray-100 pb-24",children:[l.jsx("span",{className:"tt-bg-char",style:{fontSize:220,color:"rgba(2,50,96,0.04)",bottom:"-2%",left:"-3%"},children:"非"}),l.jsx("span",{className:"tt-bg-char",style:{fontSize:160,color:"rgba(204,34,51,0.05)",top:"5%",right:"-2%"},children:"技"}),l.jsx("span",{className:"tt-bg-char",style:{fontSize:100,color:"rgba(2,50,96,0.03)",top:"42%",left:"4%"},children:"团"}),l.jsx("span",{className:"tt-bg-char",style:{fontSize:130,color:"rgba(204,34,51,0.03)",bottom:"8%",right:"3%"},children:"队"}),Vk.map((r,a)=>l.jsx("div",{className:"tt-petal",style:{left:r.left,background:r.color,animationDuration:r.duration,animationDelay:r.delay}},a)),l.jsxs("main",{className:"max-w-7xl mx-auto px-6 md:px-10 pt-32 relative z-10",children:[l.jsxs("div",{className:"reveal-auto flex flex-wrap items-start justify-between gap-6 pb-8 mb-12 border-b border-[#023260]/10 dark:border-white/10",children:[l.jsxs("div",{className:"max-w-xl",children:[l.jsxs("div",{className:"tt-eyebrow mb-3",children:[l.jsx("span",{className:"stem h-px bg-[#D92525] block"}),l.jsx("span",{className:"text-xs font-semibold tracking-[0.25em] uppercase text-[#D92525]",children:"非技术团队"})]}),l.jsxs("h1",{className:"text-2xl md:text-3xl font-extrabold text-[#023260] dark:text-white leading-tight",children:[l.jsx("span",{className:"text-[#D92525]",children:"Non-Technical"})," Team"]}),l.jsx("p",{className:"text-gray-600 dark:text-gray-300 mt-3 leading-relaxed",children:"The operations backbone of IEEE ECU Student Branch — four departments working together to plan, connect, and tell the story."})]}),l.jsxs("div",{className:"tt-seal flex-none w-14 h-14 md:w-[68px] md:h-[68px] rounded-md relative flex items-center justify-center",children:[l.jsx("div",{className:"absolute inset-1 border border-[#D92525]/35 rounded-sm"}),l.jsx("span",{className:"font-bold text-[#D92525] text-xs md:text-sm tracking-[0.14em]",style:{writingMode:"vertical-rl"},children:"非技术团队"})]})]}),l.jsx("div",{className:"tt-timeline",children:Xk.map((r,a)=>l.jsxs("div",{className:"tt-item reveal-auto",style:{transitionDelay:`${a*.1}s`},children:[l.jsx("div",{className:"tt-dot",children:l.jsx("img",{src:r.icon,alt:""})}),l.jsxs("div",{className:"tt-card",children:[l.jsx("span",{className:"tt-index",children:String(a+1).padStart(2,"0")}),l.jsx("div",{className:"font-bold text-lg text-[#023260] dark:text-white",children:r.en}),l.jsx("div",{className:"text-xs text-[#D92525] tracking-widest font-semibold mt-0.5 mb-3",children:r.cn}),l.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl",children:r.desc})]})]},r.en))}),l.jsx("div",{className:"reveal-auto mt-14 pt-5 border-t border-[#023260]/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-2.5 text-[11px] uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400",children:l.jsxs("div",{children:["4 Departments ",l.jsx("span",{className:"text-[#D92525] mx-1.5",children:"·"})," ","IEEE ECU Student Branch"]})})]})]})]})}const Fk="/IEEE-ECU-SB-Website/assets/General-QZsAOyv7.png",Jk="/IEEE-ECU-SB-Website/assets/Software-SsSY-wIl.png",Wk="/IEEE-ECU-SB-Website/assets/Hardware-CpY_i_-1.png",Zk=[{left:"8%",color:"#cc2233",duration:"9s",delay:"0s"},{left:"25%",color:"#023260",duration:"11s",delay:"2s"},{left:"50%",color:"#cc2233",duration:"8s",delay:"4.5s"},{left:"72%",color:"#023260",duration:"13s",delay:"1s"},{left:"90%",color:"#cc2233",duration:"10s",delay:"3s"}],Qk=[{en:"General",cn:"综合事务",desc:"Workshops, training sessions & general technical growth.",icon:Fk},{en:"Software",cn:"软件开发",desc:"Recruitment, interviews, follow-up & software project coordination.",icon:Jk},{en:"Hardware",cn:"硬件工程",desc:"Build external connections, logistics, sponsors & partnerships.",icon:Wk}];function eS(){return v.useEffect(()=>{const r=new IntersectionObserver(a=>{a.forEach(s=>{s.isIntersecting&&s.target.classList.add("in-view")})},{threshold:.15});return document.querySelectorAll(".reveal-auto, .reveal-left-auto, .reveal-right-auto").forEach(a=>r.observe(a)),()=>r.disconnect()},[]),l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
        /* ── Background — same recipe as About.jsx's .ab-root, light + dark ── */
        .tt-root {
          background:
            radial-gradient(ellipse 800px 600px at 8% 0%, rgba(74,158,255,0.10), transparent 60%),
            radial-gradient(ellipse 750px 550px at 92% 15%, rgba(217,37,37,0.06), transparent 60%),
            linear-gradient(to bottom, #f5f8fb, #d3dde8);
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          transition: background 0.4s ease;
        }
        .dark .tt-root {
          background:
            radial-gradient(ellipse 950px 700px at 8% 5%, rgba(13,90,167,0.24), transparent 60%),
            radial-gradient(ellipse 850px 650px at 92% 25%, rgba(217,37,37,0.18), transparent 60%),
            radial-gradient(ellipse 1000px 800px at 50% 100%, rgba(13,90,167,0.16), transparent 65%),
            linear-gradient(to bottom, #001233, #00040c 65%, #00040c);
        }

        .tt-bg-char {
          position: absolute;
          font-weight: 700;
          pointer-events: none;
          user-select: none;
          line-height: 1;
          z-index: 0;
        }
        .dark .tt-bg-char {
          opacity: 0.55;
          filter: drop-shadow(0 0 28px rgba(13,90,167,0.15));
        }

        .tt-petal {
          position: absolute;
          width: 7px;
          height: 11px;
          border-radius: 80% 0 80% 0;
          opacity: 0;
          animation: ttFallPetal linear infinite;
          top: -20px;
          z-index: 0;
        }
        @keyframes ttFallPetal {
          0%   { transform: translateY(-5vh) rotate(0deg) translateX(0); opacity: 0; }
          8%   { opacity: 0.3; }
          85%  { opacity: 0.15; }
          100% { transform: translateY(105vh) rotate(540deg) translateX(50px); opacity: 0; }
        }

        /* ── Reveal transitions ── */
        .reveal-auto {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-auto.in-view { opacity: 1; transform: translateY(0); }
        .reveal-left-auto {
          opacity: 0;
          transform: translateX(-32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-left-auto.in-view { opacity: 1; transform: translateX(0); }
        .reveal-right-auto {
          opacity: 0;
          transform: translateX(32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-right-auto.in-view { opacity: 1; transform: translateX(0); }

        .tt-eyebrow { display: inline-flex; align-items: center; gap: 0.6rem; }
        .tt-eyebrow .stem {
          width: 0;
          height: 1px;
          background: #D92525;
          transition: width 0.9s ease 0.15s;
        }
        .in-view .tt-eyebrow .stem { width: 2.5rem; }

        /* ── Seal element ── */
        .tt-seal {
          border: 2px solid #D92525;
          background: rgba(217,37,37,0.03);
          transform: rotate(-6deg);
          transition: transform 0.4s ease, background 0.4s ease;
        }
        .tt-seal:hover { transform: rotate(0deg); }
        .dark .tt-seal { background: rgba(217,37,37,0.08); }

        /* ── Timeline (single column) ── */
        .tt-timeline {
          position: relative;
          padding-left: 4.25rem;
        }
        .tt-timeline::before {
          content: '';
          position: absolute;
          left: 1.4rem;
          top: 0.5rem;
          bottom: 0.5rem;
          width: 2px;
          background: linear-gradient(to bottom, #023260, rgba(2,50,96,0.12));
          transition: background 0.4s ease;
        }
        .dark .tt-timeline::before {
          background: linear-gradient(to bottom, #4a9eff, rgba(74,158,255,0.12));
        }
        .tt-item { position: relative; padding-bottom: 2rem; }
        .tt-item:last-child { padding-bottom: 0; }

        /* Bigger dot + subtle gradient fill (instead of flat navy) so the
           circle itself has some depth, plus a soft glow ring that helps
           the white icon separate from the page background too. */
        .tt-dot {
          position: absolute;
          left: -4.25rem;
          top: 0.1rem;
          width: 3.4rem;
          height: 3.4rem;
          border-radius: 9999px;
          background: radial-gradient(circle at 32% 28%, #0d5aa7, #023260 72%);
          border: 4px solid #f5f8fb;
          box-shadow:
            0 0 0 2px rgba(2,50,96,0.35),
            0 8px 18px rgba(2,50,96,0.28);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.4s ease;
        }
        .tt-item:hover .tt-dot {
          transform: scale(1.06);
          box-shadow:
            0 0 0 2px rgba(2,50,96,0.4),
            0 10px 22px rgba(2,50,96,0.34);
        }
        .dark .tt-dot {
          border-color: #011a36;
          box-shadow:
            0 0 0 2px rgba(74,158,255,0.3),
            0 8px 18px rgba(0,0,0,0.5);
        }
        .dark .tt-item:hover .tt-dot {
          box-shadow:
            0 0 0 2px rgba(74,158,255,0.4),
            0 10px 24px rgba(0,0,0,0.6), 0 0 20px rgba(74,158,255,0.2);
        }
        .tt-dot img {
          width: 1.65rem;
          height: 1.65rem;
          object-fit: contain;
          /* Fully opaque white silhouette + a soft dark drop-shadow so
             thin line strokes keep a visible edge against the navy fill
             instead of dissolving into it. */
          filter:
            brightness(0) invert(1)
            drop-shadow(0 1px 1.5px rgba(0,0,0,0.35));
        }

        .tt-card {
          position: relative;
          background: white;
          border: 1px solid rgba(2,50,96,0.08);
          border-radius: 18px;
          padding: 1.5rem 1.75rem;
          box-shadow: 0 2px 12px rgba(2,50,96,0.06);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, background 0.4s ease;
        }
        .tt-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 4px; height: 100%;
          background: #023260;
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.4s ease;
        }
        .tt-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(2,50,96,0.14);
          border-color: transparent;
        }
        .tt-card:hover::before { transform: scaleY(1); }
        .dark .tt-card {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 2px 14px rgba(0,0,0,0.35);
        }
        .dark .tt-card::before { background: #4a9eff; }
        .dark .tt-card:hover {
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 16px 34px rgba(0,0,0,0.5), 0 0 26px rgba(74,158,255,0.14);
        }

        .tt-index {
          position: absolute;
          top: 1.25rem;
          right: 1.5rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: rgba(2,50,96,0.18);
          transition: color 0.3s ease;
        }
        .tt-card:hover .tt-index { color: #D92525; }
        .dark .tt-index { color: rgba(255,255,255,0.25); }

        .tt-arrow {
          transition: transform 0.3s ease, color 0.3s ease;
          color: #023260;
        }
        .tt-card:hover .tt-arrow { transform: translateX(4px); color: #D92525; }
        .dark .tt-arrow { color: #f5f8fb; }
      `}),l.jsxs("div",{className:"tt-root text-gray-800 dark:text-gray-100 pb-24",children:[l.jsx("span",{className:"tt-bg-char",style:{fontSize:220,color:"rgba(2,50,96,0.04)",bottom:"-2%",left:"-3%"},children:"技"}),l.jsx("span",{className:"tt-bg-char",style:{fontSize:160,color:"rgba(204,34,51,0.05)",top:"5%",right:"-2%"},children:"术"}),l.jsx("span",{className:"tt-bg-char",style:{fontSize:100,color:"rgba(2,50,96,0.03)",top:"42%",left:"4%"},children:"团"}),l.jsx("span",{className:"tt-bg-char",style:{fontSize:130,color:"rgba(204,34,51,0.03)",bottom:"8%",right:"3%"},children:"队"}),Zk.map((r,a)=>l.jsx("div",{className:"tt-petal",style:{left:r.left,background:r.color,animationDuration:r.duration,animationDelay:r.delay}},a)),l.jsxs("main",{className:"max-w-7xl mx-auto px-6 md:px-10 pt-32 relative z-10",children:[l.jsxs("div",{className:"reveal-auto flex flex-wrap items-start justify-between gap-6 pb-8 mb-12 border-b border-[#023260]/10 dark:border-white/10",children:[l.jsxs("div",{className:"max-w-xl",children:[l.jsxs("div",{className:"tt-eyebrow mb-3",children:[l.jsx("span",{className:"stem h-px bg-[#D92525] block"}),l.jsx("span",{className:"text-xs font-semibold tracking-[0.25em] uppercase text-[#D92525]",children:"技术团队"})]}),l.jsxs("h1",{className:"text-2xl md:text-3xl font-extrabold text-[#023260] dark:text-white leading-tight",children:[l.jsx("span",{className:"text-[#D92525]",children:"Technical"})," Team"]}),l.jsx("p",{className:"text-gray-600 dark:text-gray-300 mt-3 leading-relaxed",children:"The engineering backbone of IEEE ECU Student Branch — three departments working together to build, ship, and grow."})]}),l.jsxs("div",{className:"tt-seal flex-none w-14 h-14 md:w-[68px] md:h-[68px] rounded-md relative flex items-center justify-center",children:[l.jsx("div",{className:"absolute inset-1 border border-[#D92525]/35 rounded-sm"}),l.jsx("span",{className:"font-bold text-[#D92525] text-xs md:text-sm tracking-[0.14em]",style:{writingMode:"vertical-rl"},children:"技术团队"})]})]}),l.jsx("div",{className:"tt-timeline",children:Qk.map((r,a)=>l.jsxs("div",{className:"tt-item reveal-auto",style:{transitionDelay:`${a*.1}s`},children:[l.jsx("div",{className:"tt-dot",children:l.jsx("img",{src:r.icon,alt:""})}),l.jsxs("div",{className:"tt-card",children:[l.jsx("span",{className:"tt-index",children:String(a+1).padStart(2,"0")}),l.jsx("div",{className:"font-bold text-lg text-[#023260] dark:text-white",children:r.en}),l.jsx("div",{className:"text-xs text-[#D92525] tracking-widest font-semibold mt-0.5 mb-3",children:r.cn}),l.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl",children:r.desc})]})]},r.en))}),l.jsx("div",{className:"reveal-auto mt-14 pt-5 border-t border-[#023260]/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-2.5 text-[11px] uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400",children:l.jsxs("div",{children:["3 Departments ",l.jsx("span",{className:"text-[#D92525] mx-1.5",children:"·"})," ","IEEE ECU Student Branch"]})})]})]})]})}function tS(){const[r,a]=v.useState(""),[s,i]=v.useState(""),[c,u]=v.useState(!1),[h,p]=v.useState(""),[m,g]=v.useState(!1),y=Cs(),[x,S]=v.useState(!1),[k,T]=v.useState(""),[C,_]=v.useState(""),z=async R=>{R.preventDefault(),g(!0),p("");const{data:V,error:G}=await ae.auth.signInWithPassword({email:r,password:s});if(G){p(G.message),g(!1);return}const Q=V.user?.id,{data:X,error:K}=await ae.from("profiles").select("id").eq("id",Q).maybeSingle();if(K||!X){await ae.auth.signOut(),p("Invalid login credentials"),g(!1);return}await new Promise(te=>setTimeout(te,300)),y("/"),g(!1)},M=async R=>{R.preventDefault(),T(""),_("");const V=r.trim();if(!V){_("Enter your email above first, then click Forgot Password.");return}S(!0);try{const{data:G,error:Q}=await ae.functions.invoke("send-password-reset",{body:{email:V}});if(console.log("Password reset response:",G),console.log("Password reset error:",Q),Q)throw Q;T("If an account exists for this email, a password reset link has been sent.")}catch(G){console.error("Password reset error:",G),_(G?.message||"Unable to send password reset email. Please try again.")}finally{S(!1)}};return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
        @keyframes lgFadeUp {
          0% { opacity: 0; transform: translateY(18px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes lgDrift {
          0%, 100% { transform: translate3d(0,0,0) rotate(0deg); }
          50%      { transform: translate3d(0,-14px,0) rotate(0.6deg); }
        }
        @keyframes lgSpin {
          to { transform: rotate(360deg); }
        }

        .lg-scene {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(1100px 700px at 15% 20%, rgba(2,50,96,0.06), transparent 60%),
            radial-gradient(900px 600px at 85% 80%, rgba(2,50,96,0.05), transparent 55%),
            linear-gradient(155deg, #eef2f6 0%, #dfe7ee 45%, #cfd9e3 100%);
        }

        /* Chinese watermark characters, scattered across the whole page so
           the motif reads as one continuous field rather than being fenced
           to the left panel. */
        .lg-char {
          position: absolute;
          font-weight: 700;
          line-height: 1;
          pointer-events: none;
          user-select: none;
          z-index: 0;
          animation: lgDrift 14s ease-in-out infinite;
        }

        .lg-panel-left {
          animation: lgFadeUp 1s cubic-bezier(0.19,1,0.22,1) both;
        }
        .lg-panel-right {
          animation: lgFadeUp 1s cubic-bezier(0.19,1,0.22,1) 0.12s both;
        }

        /* The card: translucent glass over the animated field behind it,
           tinted with the same tones as the page background instead of
           a plain opaque white panel — matches the frosted-glass look. */
        .login-form-card {
          position: relative;
          background: rgba(223, 231, 238, 0.22);
          backdrop-filter: blur(28px) saturate(160%);
          -webkit-backdrop-filter: blur(28px) saturate(160%);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 22px;
          box-shadow:
            0 20px 55px rgba(2, 50, 96, 0.18),
            0 2px 8px rgba(2, 50, 96, 0.06),
            inset 0 1px 0 rgba(255,255,255,0.35);
        }
        .login-form-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 22px;
          padding: 1px;
          background: linear-gradient(135deg, rgba(2,50,96,0.28), rgba(2,50,96,0.08) 50%, transparent 75%);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .lg-field {
          position: relative;
        }
        .lg-field input {
          transition: border-color 0.35s ease, box-shadow 0.35s ease, background 0.35s ease;
          background: rgba(255,255,255,0.4);
        }
        .lg-field input:focus {
          background: rgba(255,255,255,0.65);
          border-color: #023260 !important;
          box-shadow: 0 0 0 4px rgba(2,50,96,0.1);
        }
        .lg-field svg { transition: color 0.35s ease; }
        .lg-field:focus-within svg.lg-icon { color: #023260; }

        .lg-submit {
          position: relative;
          overflow: hidden;
          background: linear-gradient(115deg, #011a36, #023260 40%, #0d5aa7 70%, #023260);
          background-size: 250% 250%;
          background-position: 0% 50%;
          transition: background-position 0.6s ease, transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 14px rgba(2,50,96,0.35);
        }
        .lg-submit::before {
          content: '';
          position: absolute;
          top: 0; left: -75%;
          width: 50%; height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255,255,255,0.5),
            transparent
          );
          transform: skewX(-20deg);
          transition: left 0.7s ease;
        }
        .lg-submit:hover {
          background-position: 100% 50%;
          transform: translateY(-1px) scale(1.02);
          box-shadow: 0 8px 22px rgba(2,50,96,0.5);
        }
        .lg-submit:hover::before {
          left: 125%;
        }
        .lg-submit:active {
          transform: translateY(0) scale(0.98);
        }
        .lg-submit::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.28), transparent);
          transform: translateX(-120%);
          transition: transform 0.7s ease;
        }
        .lg-submit:hover::after { transform: translateX(120%); }
        .lg-submit .lg-arrow { transition: transform 0.4s ease; }
        .lg-submit:hover .lg-arrow { transform: translateX(4px); }

        .lg-spinner {
          width: 16px; height: 16px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.35);
          border-top-color: #fff;
          animation: lgSpin 0.7s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .lg-char, .login-form-card, .lg-panel-left, .lg-panel-right,
          .lg-submit::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}),l.jsxs("div",{className:"lg-scene flex min-h-screen relative",children:[l.jsx("span",{className:"lg-char",style:{fontSize:210,color:"rgba(2,50,96,0.05)",top:"-4%",left:"-5%",animationDelay:"0s"},children:"登"}),l.jsx("span",{className:"lg-char",style:{fontSize:170,color:"rgba(2,50,96,0.05)",top:"58%",left:"6%",animationDelay:"2.4s"},children:"录"}),l.jsx("span",{className:"lg-char",style:{fontSize:130,color:"rgba(2,50,96,0.045)",top:"8%",right:"8%",animationDelay:"1.1s"},children:"电"}),l.jsx("span",{className:"lg-char",style:{fontSize:190,color:"rgba(2,50,96,0.04)",bottom:"-6%",right:"-4%",animationDelay:"3.2s"},children:"工"}),l.jsx("span",{className:"lg-char hidden md:block",style:{fontSize:90,color:"rgba(2,50,96,0.06)",bottom:"10%",left:"38%",animationDelay:"0.6s"},children:"码"}),l.jsxs("div",{className:"lg-panel-left hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-b from-black to-[#023260] text-white relative z-20 shadow-[10px_0_25px_rgba(0,0,0,0.3)] overflow-hidden",children:[l.jsx("span",{className:"lg-char",style:{fontSize:180,color:"rgba(255,255,255,0.05)",top:"-3%",left:"-6%"},children:"登"}),l.jsx("span",{className:"lg-char",style:{fontSize:150,color:"rgba(255,255,255,0.06)",bottom:"-2%",right:"-4%"},children:"录"}),l.jsx("img",{src:vd,alt:"IEEE Logo",className:"w-80 mb-4 drop-shadow-md relative z-10"}),l.jsxs("h1",{className:"text-2xl font-semibold text-center leading-snug px-6 relative z-10",children:["Join minds that move ",l.jsx("br",{})," the world forward"]}),l.jsx("span",{className:"mt-6 h-px w-12 bg-white/30 relative z-10"})]}),l.jsx("div",{className:"lg-panel-right flex flex-col justify-center items-center w-full md:w-1/2 relative z-10 px-6",children:l.jsxs("div",{className:"login-form-card px-6 sm:px-10 py-10 w-full max-w-[440px]",children:[l.jsxs("div",{className:"flex flex-col md:hidden justify-center items-center mb-6",children:[l.jsx("img",{src:Li,alt:"IEEE Logo",className:"w-auto h-12 mb-2"}),l.jsx("h2",{className:"text-3xl font-semibold text-[#023260]",children:"Login"})]}),l.jsxs("div",{className:"hidden md:flex flex-col items-center mb-6",children:[l.jsx("h2",{className:"text-4xl font-semibold text-center text-[#023260] drop-shadow-sm",children:"Login"}),l.jsx("span",{className:"mt-3 h-px w-10 bg-[#023260]/40"})]}),l.jsxs("form",{className:"space-y-5",onSubmit:z,children:[l.jsxs("div",{children:[l.jsx("label",{htmlFor:"email",className:"block text-sm font-semibold text-[#023260] mb-2",children:"Email"}),l.jsxs("div",{className:"lg-field relative",children:[l.jsx(Fi,{size:16,className:"lg-icon absolute left-3 top-1/2 -translate-y-1/2 text-[#023260]/50 z-10"}),l.jsx("input",{type:"email",id:"email",value:r,onChange:R=>a(R.target.value),placeholder:"username@gmail.com",className:"w-full pl-9 pr-2 py-2.5 rounded-xl border border-[rgba(2,50,96,0.15)] focus:outline-none"})]})]}),l.jsxs("div",{children:[l.jsx("label",{htmlFor:"password",className:"block text-sm font-semibold text-[#023260] mb-1",children:"Password"}),l.jsxs("div",{className:"lg-field relative",children:[l.jsx(Vr,{size:16,className:"lg-icon absolute left-3 top-1/2 -translate-y-1/2 text-[#023260]/50 z-10"}),l.jsx("input",{type:c?"text":"password",id:"password",value:s,onChange:R=>i(R.target.value),placeholder:"Password",className:"w-full pl-9 pr-9 py-2.5 rounded-xl border border-[rgba(2,50,96,0.15)] focus:outline-none"}),l.jsx("button",{type:"button",onClick:()=>u(R=>!R),className:"absolute right-3 top-1/2 -translate-y-1/2 text-[#023260]/50 hover:text-[#023260] transition z-10",tabIndex:-1,"aria-label":c?"Hide password":"Show password",children:c?l.jsx(Mi,{size:16}):l.jsx(Ui,{size:16})})]}),l.jsx("div",{className:"flex justify-end mt-1 mb-2",children:l.jsx("button",{type:"button",onClick:M,disabled:x,className:"text-xs font-semibold text-[#023260] hover:text-[#0d5aa7] hover:underline transition disabled:opacity-60",children:x?"Sending…":"Forgot Password?"})}),k&&l.jsx("p",{className:"text-xs font-semibold text-green-700 mb-4",children:k}),C&&l.jsx("p",{className:"text-xs font-semibold text-[#D92525] mb-4",children:C}),!k&&!C&&l.jsx("div",{className:"mb-6"})]}),l.jsx("button",{type:"submit",disabled:m,className:"lg-submit w-full text-white font-semibold py-2.5 rounded-full transition-colors duration-300 disabled:opacity-60 flex items-center justify-center gap-2 mt-8",children:m?l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"lg-spinner"}),l.jsx("span",{children:"Signing in…"})]}):l.jsxs(l.Fragment,{children:[l.jsx("span",{children:"Login"}),l.jsx(Ki,{size:16,className:"lg-arrow"})]})})]}),h&&l.jsx("p",{className:"text-[#023260] text-center mt-3 text-sm font-semibold",children:h}),l.jsxs("p",{className:"text-sm font-semibold text-gray-600 text-center mt-3",children:["Back To"," ",l.jsx(dt,{to:"/",className:"text-[#023260] font-semibold hover:text-[#0d5aa7] hover:underline transition",children:"Home"})]})]})})]})]})}function aS(){const r=Cs(),[a,s]=v.useState(""),[i,c]=v.useState(""),[u,h]=v.useState(!1),[p,m]=v.useState(!1),[g,y]=v.useState(!1),[x,S]=v.useState(!0),[k,T]=v.useState(""),[C,_]=v.useState("");v.useEffect(()=>{(async()=>{const{data:{session:V}}=await ae.auth.getSession();V||T("This password reset link is invalid or has expired. Please request a new one."),S(!1)})();const{data:{subscription:R}}=ae.auth.onAuthStateChange((V,G)=>{V==="PASSWORD_RECOVERY"&&G&&T("")});return()=>R.unsubscribe()},[]);const z=async M=>{if(M.preventDefault(),T(""),_(""),!a||!i){T("Please fill in all fields.");return}if(a.length<8){T("Password must be at least 8 characters.");return}if(a!==i){T("Passwords do not match.");return}y(!0);try{const{error:R}=await ae.auth.updateUser({password:a});if(R)throw R;_("Your password has been reset successfully. You can now log in."),s(""),c(""),setTimeout(()=>{r("/login")},1800)}catch(R){T(R.message||"Failed to reset password.")}finally{y(!1)}};return x?l.jsx("div",{className:"min-h-screen flex items-center justify-center",children:l.jsx("div",{className:"text-[#023260] font-semibold",children:"Checking reset link..."})}):l.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-[#eef2f6] via-[#dfe7ee] to-[#cfd9e3] px-6",children:l.jsxs("div",{className:"w-full max-w-[440px] rounded-2xl p-8 bg-white/30 backdrop-blur-xl border border-white/40 shadow-xl",children:[l.jsxs("div",{className:"text-center mb-8",children:[l.jsx("h1",{className:"text-3xl font-semibold text-[#023260]",children:"Reset Password"}),l.jsx("p",{className:"text-sm text-gray-600 mt-2",children:"Enter your new password below."})]}),k&&l.jsx("div",{className:"mb-5 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600",children:k}),C&&l.jsx("div",{className:"mb-5 rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700",children:C}),!C&&!k.includes("invalid")&&l.jsxs("form",{onSubmit:z,className:"space-y-5",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-semibold text-[#023260] mb-2",children:"New Password"}),l.jsxs("div",{className:"relative",children:[l.jsx(Vr,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-[#023260]/50"}),l.jsx("input",{type:u?"text":"password",value:a,onChange:M=>s(M.target.value),placeholder:"••••••••",className:"w-full pl-9 pr-10 py-3 rounded-xl border border-[#023260]/20 bg-white/40 focus:outline-none focus:border-[#023260]"}),l.jsx("button",{type:"button",onClick:()=>h(M=>!M),className:"absolute right-3 top-1/2 -translate-y-1/2 text-[#023260]/50",children:u?l.jsx(Mi,{size:16}):l.jsx(Ui,{size:16})})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-semibold text-[#023260] mb-2",children:"Confirm Password"}),l.jsxs("div",{className:"relative",children:[l.jsx(Vr,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-[#023260]/50"}),l.jsx("input",{type:p?"text":"password",value:i,onChange:M=>c(M.target.value),placeholder:"••••••••",className:"w-full pl-9 pr-10 py-3 rounded-xl border border-[#023260]/20 bg-white/40 focus:outline-none focus:border-[#023260]"}),l.jsx("button",{type:"button",onClick:()=>m(M=>!M),className:"absolute right-3 top-1/2 -translate-y-1/2 text-[#023260]/50",children:p?l.jsx(Mi,{size:16}):l.jsx(Ui,{size:16})})]})]}),l.jsx("p",{className:"text-xs text-gray-500",children:"Password must be at least 8 characters."}),l.jsx("button",{type:"submit",disabled:g,className:"w-full bg-[#023260] hover:bg-[#012040] text-white font-semibold py-3 rounded-full flex items-center justify-center gap-2 transition disabled:opacity-60",children:g?"Updating...":l.jsxs(l.Fragment,{children:[l.jsx("span",{children:"Reset Password"}),l.jsx(Ki,{size:16})]})})]}),k&&k.includes("invalid")&&l.jsx("button",{onClick:()=>r("/login"),className:"w-full bg-[#023260] text-white py-3 rounded-full font-semibold",children:"Back to Login"})]})})}var cd,Um;function rS(){if(Um)return cd;Um=1;var r=!1,a,s,i,c,u,h,p,m,g,y,x,S,k,T,C;function _(){if(!r){r=!0;var M=navigator.userAgent,R=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(M),V=/(Mac OS X)|(Windows)|(Linux)/.exec(M);if(S=/\b(iPhone|iP[ao]d)/.exec(M),k=/\b(iP[ao]d)/.exec(M),y=/Android/i.exec(M),T=/FBAN\/\w+;/i.exec(M),C=/Mobile/i.exec(M),x=!!/Win64/.exec(M),R){a=R[1]?parseFloat(R[1]):R[5]?parseFloat(R[5]):NaN,a&&document&&document.documentMode&&(a=document.documentMode);var G=/(?:Trident\/(\d+.\d+))/.exec(M);h=G?parseFloat(G[1])+4:a,s=R[2]?parseFloat(R[2]):NaN,i=R[3]?parseFloat(R[3]):NaN,c=R[4]?parseFloat(R[4]):NaN,c?(R=/(?:Chrome\/(\d+\.\d+))/.exec(M),u=R&&R[1]?parseFloat(R[1]):NaN):u=NaN}else a=s=i=u=c=NaN;if(V){if(V[1]){var Q=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(M);p=Q?parseFloat(Q[1].replace("_",".")):!0}else p=!1;m=!!V[2],g=!!V[3]}else p=m=g=!1}}var z={ie:function(){return _()||a},ieCompatibilityMode:function(){return _()||h>a},ie64:function(){return z.ie()&&x},firefox:function(){return _()||s},opera:function(){return _()||i},webkit:function(){return _()||c},safari:function(){return z.webkit()},chrome:function(){return _()||u},windows:function(){return _()||m},osx:function(){return _()||p},linux:function(){return _()||g},iphone:function(){return _()||S},mobile:function(){return _()||S||k||y||C},nativeApp:function(){return _()||T},android:function(){return _()||y},ipad:function(){return _()||k}};return cd=z,cd}var ud,Lm;function nS(){if(Lm)return ud;Lm=1;var r=!!(typeof window<"u"&&window.document&&window.document.createElement),a={canUseDOM:r,canUseWorkers:typeof Worker<"u",canUseEventListeners:r&&!!(window.addEventListener||window.attachEvent),canUseViewport:r&&!!window.screen,isInWorker:!r};return ud=a,ud}var dd,Bm;function sS(){if(Bm)return dd;Bm=1;var r=nS(),a;r.canUseDOM&&(a=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */function s(i,c){if(!r.canUseDOM||c&&!("addEventListener"in document))return!1;var u="on"+i,h=u in document;if(!h){var p=document.createElement("div");p.setAttribute(u,"return;"),h=typeof p[u]=="function"}return!h&&a&&i==="wheel"&&(h=document.implementation.hasFeature("Events.wheel","3.0")),h}return dd=s,dd}var hd,Hm;function iS(){if(Hm)return hd;Hm=1;var r=rS(),a=sS(),s=10,i=40,c=800;function u(h){var p=0,m=0,g=0,y=0;return"detail"in h&&(m=h.detail),"wheelDelta"in h&&(m=-h.wheelDelta/120),"wheelDeltaY"in h&&(m=-h.wheelDeltaY/120),"wheelDeltaX"in h&&(p=-h.wheelDeltaX/120),"axis"in h&&h.axis===h.HORIZONTAL_AXIS&&(p=m,m=0),g=p*s,y=m*s,"deltaY"in h&&(y=h.deltaY),"deltaX"in h&&(g=h.deltaX),(g||y)&&h.deltaMode&&(h.deltaMode==1?(g*=i,y*=i):(g*=c,y*=c)),g&&!p&&(p=g<1?-1:1),y&&!m&&(m=y<1?-1:1),{spinX:p,spinY:m,pixelX:g,pixelY:y}}return u.getEventType=function(){return r.firefox()?"DOMMouseScroll":a("wheel")?"wheel":"mousewheel"},hd=u,hd}var fd,$m;function oS(){return $m||($m=1,fd=iS()),fd}var lS=oS();const cS=Dd(lS);function Gi(r){"@babel/helpers - typeof";return Gi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},Gi(r)}function uS(r,a){if(Gi(r)!="object"||!r)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var i=s.call(r,a);if(Gi(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(r)}function dS(r){var a=uS(r,"string");return Gi(a)=="symbol"?a:a+""}function hS(r,a,s){return(a=dS(a))in r?Object.defineProperty(r,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[a]=s,r}function qm(r,a){var s=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);a&&(i=i.filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable})),s.push.apply(s,i)}return s}function vt(r){for(var a=1;a<arguments.length;a++){var s=arguments[a]!=null?arguments[a]:{};a%2?qm(Object(s),!0).forEach(function(i){hS(r,i,s[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(s)):qm(Object(s)).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(s,i))})}return r}function fS(r,a,s,i,c,u=0){const{width:h,height:p}=js(r,a,u),m=Math.min(h,s),g=Math.min(p,i);return m>g*c?{width:g*c,height:g}:{width:m,height:m/c}}function pS(r){return r.width>r.height?r.width/r.naturalWidth:r.height/r.naturalHeight}function Ni(r,a,s,i,c=0){const{width:u,height:h}=js(a.width,a.height,c);return{x:Pm(r.x,u,s.width,i),y:Pm(r.y,h,s.height,i)}}function Pm(r,a,s,i){const c=Math.abs(a*i/2-s/2);return Ll(r,-c,c)}function Im(r,a){return Math.sqrt(Math.pow(r.y-a.y,2)+Math.pow(r.x-a.x,2))}function Ym(r,a){return Math.atan2(a.y-r.y,a.x-r.x)*180/Math.PI}function mS(r,a,s,i,c,u=0,h=!0){const p=h?gS:bS,m=js(a.width,a.height,u),g=js(a.naturalWidth,a.naturalHeight,u),y={x:p(100,((m.width-s.width/c)/2-r.x/c)/m.width*100),y:p(100,((m.height-s.height/c)/2-r.y/c)/m.height*100),width:p(100,s.width/m.width*100/c),height:p(100,s.height/m.height*100/c)},x=Math.round(p(g.width,y.width*g.width/100)),S=Math.round(p(g.height,y.height*g.height/100)),k=g.width>=g.height*i?{width:Math.round(S*i),height:S}:{width:x,height:Math.round(x/i)};return{croppedAreaPercentages:y,croppedAreaPixels:vt(vt({},k),{},{x:Math.round(p(g.width-k.width,y.x*g.width/100)),y:Math.round(p(g.height-k.height,y.y*g.height/100))})}}function gS(r,a){return Math.min(r,Math.max(0,a))}function bS(r,a){return a}function xS(r,a,s,i,c,u){const h=js(a.width,a.height,s),p=Ll(i.width/h.width*(100/r.width),c,u);return{crop:{x:p*h.width/2-i.width/2-h.width*p*(r.x/100),y:p*h.height/2-i.height/2-h.height*p*(r.y/100)},zoom:p}}function yS(r,a,s){const i=pS(a);return s.height>s.width?s.height/(r.height*i):s.width/(r.width*i)}function vS(r,a,s=0,i,c,u){const h=js(a.naturalWidth,a.naturalHeight,s),p=Ll(yS(r,a,i),c,u),m=i.height>i.width?i.height/r.height:i.width/r.width;return{crop:{x:((h.width-r.width)/2-r.x)*m,y:((h.height-r.height)/2-r.y)*m},zoom:p}}function Gm(r,a){return{x:(a.x+r.x)/2,y:(a.y+r.y)/2}}function wS(r){return r*Math.PI/180}function js(r,a,s){const i=wS(s);return{width:Math.abs(Math.cos(i)*r)+Math.abs(Math.sin(i)*a),height:Math.abs(Math.sin(i)*r)+Math.abs(Math.cos(i)*a)}}function Ll(r,a,s){return Math.min(Math.max(r,a),s)}function yl(...r){return r.filter(a=>typeof a=="string"&&a.length>0).join(" ").trim()}var kS=`.reactEasyCrop_Container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  user-select: none;
  touch-action: none;
  cursor: move;
  display: flex;
  justify-content: center;
  align-items: center;
}

.reactEasyCrop_Image,
.reactEasyCrop_Video {
  will-change: transform; /* this improves performances and prevent painting issues on iOS Chrome */
  max-width: unset; /* prevent global img/video reset rules from constraining the cropper media */
}

.reactEasyCrop_Contain {
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.reactEasyCrop_Cover_Horizontal {
  width: 100%;
  height: auto;
}
.reactEasyCrop_Cover_Vertical {
  width: auto;
  height: 100%;
}

.reactEasyCrop_CropArea {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  box-shadow: 0 0 0 9999em;
  color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.reactEasyCrop_CropAreaRound {
  border-radius: 50%;
}

.reactEasyCrop_CropAreaGrid::before {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 0;
  bottom: 0;
  left: 33.33%;
  right: 33.33%;
  border-top: 0;
  border-bottom: 0;
}

.reactEasyCrop_CropAreaGrid::after {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 33.33%;
  bottom: 33.33%;
  left: 0;
  right: 0;
  border-left: 0;
  border-right: 0;
}
`;const SS=250,jS=1,_S=3,ES=1;var Bl=class ja extends v.Component{constructor(...a){super(...a),this.cropperRef=v.createRef(),this.imageRef=v.createRef(),this.videoRef=v.createRef(),this.containerPosition={x:0,y:0},this.containerRef=null,this.styleRef=null,this.containerRect=null,this.mediaSize={width:0,height:0,naturalWidth:0,naturalHeight:0},this.dragStartPosition={x:0,y:0},this.dragStartCrop={x:0,y:0},this.gestureZoomStart=0,this.gestureRotationStart=0,this.isTouching=!1,this.lastPinchDistance=0,this.lastPinchRotation=0,this.rafDragTimeout=null,this.rafPinchTimeout=null,this.wheelTimer=null,this.resizeEmitTimer=null,this.currentDoc=typeof document<"u"?document:null,this.currentWindow=typeof window<"u"?window:null,this.resizeObserver=null,this.previousCropSize=null,this.isInitialized=!1,this.dragInteractionSource=null,this.state={cropSize:null,hasWheelJustStarted:!1,mediaObjectFit:void 0},this.initResizeObserver=()=>{if(typeof window.ResizeObserver>"u"||!this.containerRef)return;let s=!0;this.resizeObserver=new window.ResizeObserver(i=>{if(s){s=!1;return}this.computeSizes({isResizeTriggered:!0})}),this.resizeObserver.observe(this.containerRef)},this.onWindowResize=()=>{this.computeSizes({isResizeTriggered:!0})},this.preventZoomSafari=s=>s.preventDefault(),this.cleanEvents=()=>{this.currentDoc&&(this.currentDoc.removeEventListener("mousemove",this.onMouseMove),this.currentDoc.removeEventListener("mouseup",this.onDragStopped),this.currentDoc.removeEventListener("touchmove",this.onTouchMove),this.currentDoc.removeEventListener("touchend",this.onDragStopped),this.currentDoc.removeEventListener("gesturechange",this.onGestureChange),this.currentDoc.removeEventListener("gestureend",this.onGestureEnd),this.currentDoc.removeEventListener("scroll",this.onScroll))},this.clearScrollEvent=()=>{this.containerRef&&this.containerRef.removeEventListener("wheel",this.onWheel),this.wheelTimer&&clearTimeout(this.wheelTimer)},this.onMediaLoad=()=>{const s=this.computeSizes();s&&(this.previousCropSize=s,this.emitCropData(),this.setInitialCrop(s),this.isInitialized=!0),this.props.onMediaLoaded&&this.props.onMediaLoaded(this.mediaSize)},this.setInitialCrop=s=>{if(this.props.initialCroppedAreaPercentages){const{crop:i,zoom:c}=xS(this.props.initialCroppedAreaPercentages,this.mediaSize,this.props.rotation,s,this.props.minZoom,this.props.maxZoom);this.props.onCropChange(i),this.props.onZoomChange&&this.props.onZoomChange(c)}else if(this.props.initialCroppedAreaPixels){const{crop:i,zoom:c}=vS(this.props.initialCroppedAreaPixels,this.mediaSize,this.props.rotation,s,this.props.minZoom,this.props.maxZoom);this.props.onCropChange(i),this.props.onZoomChange&&this.props.onZoomChange(c)}},this.computeSizes=({isResizeTriggered:s=!1}={})=>{const i=this.imageRef.current||this.videoRef.current;if(i&&this.containerRef){var c,u,h,p,m,g;this.containerRect=this.containerRef.getBoundingClientRect(),this.saveContainerPosition();const y=this.containerRect.width/this.containerRect.height,x=((c=this.imageRef.current)===null||c===void 0?void 0:c.naturalWidth)||((u=this.videoRef.current)===null||u===void 0?void 0:u.videoWidth)||0,S=((h=this.imageRef.current)===null||h===void 0?void 0:h.naturalHeight)||((p=this.videoRef.current)===null||p===void 0?void 0:p.videoHeight)||0,k=i.offsetWidth<x||i.offsetHeight<S,T=x/S;let C;if(k)switch(this.state.mediaObjectFit){default:case"contain":C=y>T?{width:this.containerRect.height*T,height:this.containerRect.height}:{width:this.containerRect.width,height:this.containerRect.width/T};break;case"horizontal-cover":C={width:this.containerRect.width,height:this.containerRect.width/T};break;case"vertical-cover":C={width:this.containerRect.height*T,height:this.containerRect.height};break}else C={width:i.offsetWidth,height:i.offsetHeight};this.mediaSize=vt(vt({},C),{},{naturalWidth:x,naturalHeight:S}),this.props.setMediaSize&&this.props.setMediaSize(this.mediaSize);const _=this.props.cropSize?this.props.cropSize:fS(this.mediaSize.width,this.mediaSize.height,this.containerRect.width,this.containerRect.height,this.props.aspect,this.props.rotation);return(((m=this.state.cropSize)===null||m===void 0?void 0:m.height)!==_.height||((g=this.state.cropSize)===null||g===void 0?void 0:g.width)!==_.width)&&this.props.onCropSizeChange&&this.props.onCropSizeChange(_),this.setState({cropSize:_},()=>this.recomputeCropPosition({isResizeTriggered:s})),this.props.setCropSize&&this.props.setCropSize(_),_}},this.saveContainerPosition=()=>{if(this.containerRef){const s=this.containerRef.getBoundingClientRect();this.containerPosition={x:s.left,y:s.top}}},this.onMouseDown=s=>{this.currentDoc&&(s.preventDefault(),this.currentDoc.addEventListener("mousemove",this.onMouseMove),this.currentDoc.addEventListener("mouseup",this.onDragStopped),this.saveContainerPosition(),this.onDragStart(ja.getMousePoint(s),"mouse"))},this.onMouseMove=s=>this.onDrag(ja.getMousePoint(s)),this.onScroll=s=>{this.currentDoc&&(s.preventDefault(),this.saveContainerPosition())},this.onTouchStart=s=>{this.currentDoc&&(this.isTouching=!0,!(this.props.onTouchRequest&&!this.props.onTouchRequest(s))&&(this.currentDoc.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.currentDoc.addEventListener("touchend",this.onDragStopped),this.saveContainerPosition(),s.touches.length===2?this.onPinchStart(s):s.touches.length===1&&this.onDragStart(ja.getTouchPoint(s.touches[0]),"touch")))},this.onTouchMove=s=>{s.preventDefault(),s.touches.length===2?this.onPinchMove(s):s.touches.length===1&&this.onDrag(ja.getTouchPoint(s.touches[0]))},this.onGestureStart=s=>{this.currentDoc&&(s.preventDefault(),this.currentDoc.addEventListener("gesturechange",this.onGestureChange),this.currentDoc.addEventListener("gestureend",this.onGestureEnd),this.gestureZoomStart=this.props.zoom,this.gestureRotationStart=this.props.rotation)},this.onGestureChange=s=>{if(s.preventDefault(),this.isTouching)return;const i=ja.getMousePoint(s),c=this.gestureZoomStart-1+s.scale;if(this.setNewZoom(c,i,{shouldUpdatePosition:!0}),this.props.onRotationChange){const u=this.gestureRotationStart+s.rotation;this.props.onRotationChange(u)}},this.onGestureEnd=s=>{this.cleanEvents()},this.onDragStart=({x:s,y:i},c)=>{var u,h;this.dragStartPosition={x:s,y:i},this.dragStartCrop=vt({},this.props.crop),this.dragInteractionSource=c,(u=(h=this.props).onInteractionStart)===null||u===void 0||u.call(h,{source:c})},this.onDrag=({x:s,y:i})=>{this.currentWindow&&(this.rafDragTimeout&&this.currentWindow.cancelAnimationFrame(this.rafDragTimeout),this.rafDragTimeout=this.currentWindow.requestAnimationFrame(()=>{if(!this.state.cropSize||s===void 0||i===void 0)return;const c=s-this.dragStartPosition.x,u=i-this.dragStartPosition.y,h={x:this.dragStartCrop.x+c,y:this.dragStartCrop.y+u},p=this.props.restrictPosition?Ni(h,this.mediaSize,this.state.cropSize,this.props.zoom,this.props.rotation):h;this.props.onCropChange(p)}))},this.onDragStopped=()=>{var s,i,c;this.isTouching=!1,this.cleanEvents(),this.emitCropData(),(s=(i=this.props).onInteractionEnd)===null||s===void 0||s.call(i,{source:(c=this.dragInteractionSource)!==null&&c!==void 0?c:"mouse"}),this.dragInteractionSource=null},this.onWheel=s=>{if(!this.currentWindow||this.props.onWheelRequest&&!this.props.onWheelRequest(s))return;s.preventDefault();const i=ja.getMousePoint(s),{pixelY:c}=cS(s),u=this.props.zoom-c*this.props.zoomSpeed/200;this.setNewZoom(u,i,{shouldUpdatePosition:!0}),this.state.hasWheelJustStarted||this.setState({hasWheelJustStarted:!0},()=>{var h,p;return(h=(p=this.props).onInteractionStart)===null||h===void 0?void 0:h.call(p,{source:"wheel"})}),this.wheelTimer&&clearTimeout(this.wheelTimer),this.wheelTimer=this.currentWindow.setTimeout(()=>this.setState({hasWheelJustStarted:!1},()=>{var h,p;return(h=(p=this.props).onInteractionEnd)===null||h===void 0?void 0:h.call(p,{source:"wheel"})}),250)},this.getPointOnContainer=({x:s,y:i},c)=>{if(!this.containerRect)throw new Error("The Cropper is not mounted");return{x:this.containerRect.width/2-(s-c.x),y:this.containerRect.height/2-(i-c.y)}},this.getPointOnMedia=({x:s,y:i})=>{const{crop:c,zoom:u}=this.props;return{x:(s+c.x)/u,y:(i+c.y)/u}},this.setNewZoom=(s,i,{shouldUpdatePosition:c=!0}={})=>{if(!this.state.cropSize||!this.props.onZoomChange)return;const u=Ll(s,this.props.minZoom,this.props.maxZoom);if(c){const h=this.getPointOnContainer(i,this.containerPosition),p=this.getPointOnMedia(h),m={x:p.x*u-h.x,y:p.y*u-h.y},g=this.props.restrictPosition?Ni(m,this.mediaSize,this.state.cropSize,u,this.props.rotation):m;this.props.onCropChange(g)}this.props.onZoomChange(u)},this.getCropData=()=>this.state.cropSize?mS(this.props.restrictPosition?Ni(this.props.crop,this.mediaSize,this.state.cropSize,this.props.zoom,this.props.rotation):this.props.crop,this.mediaSize,this.state.cropSize,this.getAspect(),this.props.zoom,this.props.rotation,this.props.restrictPosition):null,this.emitCropData=()=>{this.resizeEmitTimer&&(clearTimeout(this.resizeEmitTimer),this.resizeEmitTimer=null);const s=this.getCropData();if(!s)return;const{croppedAreaPercentages:i,croppedAreaPixels:c}=s;this.props.onCropComplete&&this.props.onCropComplete(i,c),this.props.onCropAreaChange&&this.props.onCropAreaChange(i,c)},this.emitCropAreaChange=()=>{const s=this.getCropData();if(!s)return;const{croppedAreaPercentages:i,croppedAreaPixels:c}=s;this.props.onCropAreaChange&&this.props.onCropAreaChange(i,c)},this.recomputeCropPosition=({isResizeTriggered:s=!1}={})=>{var i,c;if(!this.state.cropSize)return;let u=this.props.crop;if(this.isInitialized&&(!((i=this.previousCropSize)===null||i===void 0)&&i.width)&&(!((c=this.previousCropSize)===null||c===void 0)&&c.height)&&(Math.abs(this.previousCropSize.width-this.state.cropSize.width)>1e-6||Math.abs(this.previousCropSize.height-this.state.cropSize.height)>1e-6)){const p=this.state.cropSize.width/this.previousCropSize.width,m=this.state.cropSize.height/this.previousCropSize.height;u={x:this.props.crop.x*p,y:this.props.crop.y*m}}const h=this.props.restrictPosition?Ni(u,this.mediaSize,this.state.cropSize,this.props.zoom,this.props.rotation):u;this.previousCropSize=this.state.cropSize,this.props.onCropChange(h),s?this.debouncedEmitCropData():this.emitCropData()},this.debouncedEmitCropData=()=>{this.currentWindow&&(this.resizeEmitTimer&&clearTimeout(this.resizeEmitTimer),this.resizeEmitTimer=this.currentWindow.setTimeout(()=>{this.emitCropData()},SS))},this.onKeyDown=s=>{const{crop:i,onCropChange:c,keyboardStep:u,zoom:h,rotation:p}=this.props;let m=u;if(!this.state.cropSize)return;s.shiftKey&&(m*=.2);let g=vt({},i);switch(s.key){case"ArrowUp":g.y-=m,s.preventDefault();break;case"ArrowDown":g.y+=m,s.preventDefault();break;case"ArrowLeft":g.x-=m,s.preventDefault();break;case"ArrowRight":g.x+=m,s.preventDefault();break;default:return}if(this.props.restrictPosition&&(g=Ni(g,this.mediaSize,this.state.cropSize,h,p)),!s.repeat){var y,x;(y=(x=this.props).onInteractionStart)===null||y===void 0||y.call(x,{source:"keyboard"})}c(g)},this.onKeyUp=s=>{var i,c;switch(s.key){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":s.preventDefault();break;default:return}this.emitCropData(),(i=(c=this.props).onInteractionEnd)===null||i===void 0||i.call(c,{source:"keyboard"})}}componentDidMount(){!this.currentDoc||!this.currentWindow||(this.containerRef&&(this.containerRef.ownerDocument&&(this.currentDoc=this.containerRef.ownerDocument),this.currentDoc.defaultView&&(this.currentWindow=this.currentDoc.defaultView),this.initResizeObserver(),typeof window.ResizeObserver>"u"&&this.currentWindow.addEventListener("resize",this.onWindowResize),this.props.zoomWithScroll&&this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}),this.containerRef.addEventListener("gesturestart",this.onGestureStart)),this.currentDoc.addEventListener("scroll",this.onScroll),this.props.disableAutomaticStylesInjection||(this.styleRef=this.currentDoc.createElement("style"),this.styleRef.setAttribute("type","text/css"),this.props.nonce&&this.styleRef.setAttribute("nonce",this.props.nonce),this.styleRef.innerHTML=kS,this.currentDoc.head.appendChild(this.styleRef)),this.imageRef.current&&this.imageRef.current.complete&&this.onMediaLoad(),this.props.setImageRef&&this.props.setImageRef(this.imageRef),this.props.setVideoRef&&this.props.setVideoRef(this.videoRef),this.props.setCropperRef&&this.props.setCropperRef(this.cropperRef))}componentWillUnmount(){var a;if(!(!this.currentDoc||!this.currentWindow)){if(typeof window.ResizeObserver>"u"&&this.currentWindow.removeEventListener("resize",this.onWindowResize),(a=this.resizeObserver)===null||a===void 0||a.disconnect(),this.resizeEmitTimer&&clearTimeout(this.resizeEmitTimer),this.containerRef&&this.containerRef.removeEventListener("gesturestart",this.preventZoomSafari),this.styleRef){var s;(s=this.styleRef.parentNode)===null||s===void 0||s.removeChild(this.styleRef)}this.cleanEvents(),this.props.zoomWithScroll&&this.clearScrollEvent()}}componentDidUpdate(a){var s,i,c,u,h,p,m,g;if(a.rotation!==this.props.rotation?(this.computeSizes(),this.recomputeCropPosition()):a.aspect!==this.props.aspect?this.computeSizes():a.objectFit!==this.props.objectFit?this.computeSizes():a.zoom!==this.props.zoom?this.recomputeCropPosition():((s=a.cropSize)===null||s===void 0?void 0:s.height)!==((i=this.props.cropSize)===null||i===void 0?void 0:i.height)||((c=a.cropSize)===null||c===void 0?void 0:c.width)!==((u=this.props.cropSize)===null||u===void 0?void 0:u.width)?this.computeSizes():(((h=a.crop)===null||h===void 0?void 0:h.x)!==((p=this.props.crop)===null||p===void 0?void 0:p.x)||((m=a.crop)===null||m===void 0?void 0:m.y)!==((g=this.props.crop)===null||g===void 0?void 0:g.y))&&this.emitCropAreaChange(),a.zoomWithScroll!==this.props.zoomWithScroll&&this.containerRef&&(this.props.zoomWithScroll?this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}):this.clearScrollEvent()),a.video!==this.props.video){var y;(y=this.videoRef.current)===null||y===void 0||y.load()}const x=this.getObjectFit();x!==this.state.mediaObjectFit&&this.setState({mediaObjectFit:x},this.computeSizes)}getAspect(){const{cropSize:a,aspect:s}=this.props;return a?a.width/a.height:s}getObjectFit(){if(this.props.objectFit==="cover"){if((this.imageRef.current||this.videoRef.current)&&this.containerRef){var a,s,i,c;this.containerRect=this.containerRef.getBoundingClientRect();const u=this.containerRect.width/this.containerRect.height;return(((a=this.imageRef.current)===null||a===void 0?void 0:a.naturalWidth)||((s=this.videoRef.current)===null||s===void 0?void 0:s.videoWidth)||0)/(((i=this.imageRef.current)===null||i===void 0?void 0:i.naturalHeight)||((c=this.videoRef.current)===null||c===void 0?void 0:c.videoHeight)||0)<u?"horizontal-cover":"vertical-cover"}return"horizontal-cover"}return this.props.objectFit}onPinchStart(a){const s=ja.getTouchPoint(a.touches[0]),i=ja.getTouchPoint(a.touches[1]);this.lastPinchDistance=Im(s,i),this.lastPinchRotation=Ym(s,i),this.onDragStart(Gm(s,i),"touch")}onPinchMove(a){if(!this.currentDoc||!this.currentWindow)return;const s=ja.getTouchPoint(a.touches[0]),i=ja.getTouchPoint(a.touches[1]),c=Gm(s,i);this.onDrag(c),this.rafPinchTimeout&&this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout),this.rafPinchTimeout=this.currentWindow.requestAnimationFrame(()=>{const u=Im(s,i),h=this.props.zoom*(u/this.lastPinchDistance);this.setNewZoom(h,c,{shouldUpdatePosition:!1}),this.lastPinchDistance=u;const p=Ym(s,i),m=this.props.rotation+(p-this.lastPinchRotation);this.props.onRotationChange&&this.props.onRotationChange(m),this.lastPinchRotation=p})}render(){var a;const{image:s,video:i,mediaProps:c,cropperProps:u,transform:h,crop:{x:p,y:m},rotation:g,zoom:y,cropShape:x,showGrid:S,roundCropAreaPixels:k,style:{containerStyle:T,cropAreaStyle:C,mediaStyle:_},classes:{containerClassName:z,cropAreaClassName:M,mediaClassName:R}}=this.props,V=(a=this.state.mediaObjectFit)!==null&&a!==void 0?a:this.getObjectFit();return v.createElement("div",{onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,ref:G=>this.containerRef=G,"data-testid":"container",style:T,className:yl("reactEasyCrop_Container",z)},s?v.createElement("img",vt(vt({alt:"",className:yl("reactEasyCrop_Image",V==="contain"&&"reactEasyCrop_Contain",V==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",V==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",R)},c),{},{src:s,ref:this.imageRef,style:vt(vt({},_),{},{transform:h||`translate(${p}px, ${m}px) rotate(${g}deg) scale(${y})`}),onLoad:this.onMediaLoad})):i&&v.createElement("video",vt(vt({autoPlay:!0,playsInline:!0,loop:!0,muted:!0,className:yl("reactEasyCrop_Video",V==="contain"&&"reactEasyCrop_Contain",V==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",V==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",R)},c),{},{ref:this.videoRef,onLoadedMetadata:this.onMediaLoad,style:vt(vt({},_),{},{transform:h||`translate(${p}px, ${m}px) rotate(${g}deg) scale(${y})`}),controls:!1}),(Array.isArray(i)?i:[{src:i}]).map(G=>v.createElement("source",vt({key:G.src},G)))),this.state.cropSize&&v.createElement("div",vt({ref:this.cropperRef,style:vt(vt({},C),{},{width:k?Math.round(this.state.cropSize.width):this.state.cropSize.width,height:k?Math.round(this.state.cropSize.height):this.state.cropSize.height}),tabIndex:0,onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp,"data-testid":"cropper",className:yl("reactEasyCrop_CropArea",x==="round"&&"reactEasyCrop_CropAreaRound",S&&"reactEasyCrop_CropAreaGrid",M)},u)))}};Bl.defaultProps={zoom:1,rotation:0,aspect:4/3,maxZoom:_S,minZoom:jS,cropShape:"rect",objectFit:"contain",showGrid:!0,style:{},classes:{},mediaProps:{},cropperProps:{},zoomSpeed:1,restrictPosition:!0,zoomWithScroll:!0,keyboardStep:ES};Bl.getMousePoint=r=>({x:Number(r.clientX),y:Number(r.clientY)});Bl.getTouchPoint=r=>({x:Number(r.clientX),y:Number(r.clientY)});var Jg=Bl;function NS({open:r,onClose:a}){return r?l.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4",children:l.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl text-center",children:[l.jsx("div",{className:"mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-[#023260]",children:l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75l2.25 2.25L15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),l.jsx("h3",{className:"text-lg font-semibold text-[#023260] mb-2",children:"Account created!"}),l.jsx("p",{className:"text-sm text-gray-500 leading-relaxed mb-6",children:"Your registration is now pending approval. You'll be able to log in once an admin reviews and accepts your request."}),l.jsx("button",{onClick:a,className:"w-full bg-[#023260] text-white font-semibold py-2.5 rounded-full hover:bg-[#D92525] transition",children:"OK"})]})}):null}const Wg={Engineering:["Level 1","Level 2","Level 3","Level 4","Level 5","Graduate"],Media:["Level 1","Level 2","Level 3","Level 4","Graduate"],"Physical Therapy":["Level 1","Level 2","Level 3","Level 4","Level 5","Entern Year","Graduate"],"Computer Science":["Level 1","Level 2","Level 3","Level 4","Graduate"],"Veterinary Medicine":["Level 1","Level 2","Level 3","Level 4","Level 5","Entern Year","Graduate"],"Arts and Design":["Level 1","Level 2","Level 3","Level 4","Graduate"],Pharmacy:["Level 1","Level 2","Level 3","Level 4","Level 5","Entern Year","Graduate"],Nursing:["Level 1","Level 2","Level 3","Level 4","Graduate"],"Economics and International Trade":["Level 1","Level 2","Level 3","Level 4","Graduate"],Law:["Level 1","Level 2","Level 3","Level 4","Graduate"]},CS=Object.keys(Wg),TS=["Chair","Vice Chair","Secretary","Treasurer","Webmaster"],AS=["Technical","Media","PR","HR","Events"],RS=["Leader Software","Leader Hardware","Leader Visuals","Leader Graphics","Leader Marketing","Vice HR","Vice PR","Vice Events"],zS=["Technical","HR","PR","Media","Events"],OS=["Software","Hardware","General"],DS=[{value:"male",label:"Male"},{value:"female",label:"Female"}],MS={Tech:"Technical",Media:"Media",PR:"PR",HR:"HR",Events:"Events"},US={"Leader Software":"Technical","Leader Hardware":"Technical","Leader Visuals":"Technical","Leader Graphics":"Media","Leader Marketing":"PR","Vice HR":"HR","Vice PR":"PR","Vice Events":"Events"},LS=r=>/^https?:\/\/([a-z]{2,3}\.)?linkedin\.com\/.+/i.test(r.trim()),Vm=r=>r.length>=8&&/[a-z]/.test(r)&&/[A-Z]/.test(r)&&/[0-9]/.test(r)&&/[^A-Za-z0-9]/.test(r);function BS(){const r=Cs(),[a]=qv(),s=a.get("ref"),[i,c]=v.useState(""),[u,h]=v.useState(""),[p,m]=v.useState(""),[g,y]=v.useState(""),[x,S]=v.useState(""),[k,T]=v.useState(""),[C,_]=v.useState(""),[z,M]=v.useState(""),[R,V]=v.useState(""),[G,Q]=v.useState(""),[X,K]=v.useState(""),[te,fe]=v.useState(""),[pe,xe]=v.useState(""),[ke,Re]=v.useState(""),[Se,H]=v.useState(""),[W,ne]=v.useState(""),[F,N]=v.useState(!1),[j,D]=v.useState(null),[P,ee]=v.useState(null),re=v.useRef(null),[me,we]=v.useState(!1),[Ie,Ae]=v.useState(null),[fa,Na]=v.useState({x:0,y:0}),[aa,pa]=v.useState(1),[Tt,fr]=v.useState(null),Ha=J=>{const Ze=J.target.files?.[0];if(J.target.value="",!Ze)return;if(!Ze.type.startsWith("image/")){Ee("Please select a valid image.");return}const gt=URL.createObjectURL(Ze);Ae(gt),Na({x:0,y:0}),pa(1),we(!0)},Je=v.useCallback((J,Ze)=>{fr(Ze)},[]),vn=async(J,Ze)=>{const gt=await new Promise((Be,Xe)=>{const He=new Image;He.onload=()=>Be(He),He.onerror=Xe,He.src=J}),bt=document.createElement("canvas"),Z=800;return bt.width=Z,bt.height=Z,bt.getContext("2d").drawImage(gt,Ze.x,Ze.y,Ze.width,Ze.height,0,0,Z,Z),new Promise((Be,Xe)=>{bt.toBlob(He=>{if(!He){Xe(new Error("Could not create cropped image."));return}Be(He)},"image/jpeg",.9)})},Xr=async()=>{if(!(!Ie||!Tt))try{const J=await vn(Ie,Tt),Ze=new File([J],`avatar_${Date.now()}.jpg`,{type:"image/jpeg"});D(Ze),ee(URL.createObjectURL(J)),we(!1),URL.revokeObjectURL(Ie),Ae(null)}catch(J){console.error("Image crop failed:",J),Ee("Could not edit this image. Please try another one.")}},pr=()=>{Ie&&URL.revokeObjectURL(Ie),we(!1),Ae(null),Na({x:0,y:0}),pa(1)},[mr,wn]=v.useState(!1),[kn,wt]=v.useState(!1),[Sn,Kr]=v.useState(!1),[$a,Ee]=v.useState(""),ma=()=>i==="Highboard"?TS:i==="Board"&&u==="Head"?AS:i==="Board"&&u==="Vice"?RS:[],gr=J=>{c(J),h(""),m(""),y(""),S(""),Ee("")},Rs=J=>{h(J),m(""),Ee("")},jn=J=>{y(J),S(""),Ee("")},Ca=J=>{K(J),fe(""),Ee("")},ht=async J=>{if(J.preventDefault(),Ee(""),!i)return Ee("Please select your tier.");if(i==="Board"&&!u)return Ee("Please select Head or Vice.");if((i==="Board"||i==="Highboard")&&!p)return Ee("Please select your position.");if(i==="Member"&&!g)return Ee("Please select your team.");if(i==="Member"&&g==="Technical"&&!x)return Ee("Please select your technical sub-team.");if(!k.trim())return Ee("First name is required.");if(!C.trim())return Ee("Last name is required.");if(!z)return Ee("Please select your gender.");if(!R)return Ee("Date of birth is required.");if(!G.trim())return Ee("Phone number is required.");if(!X)return Ee("Please select your faculty.");if(!te)return Ee("Please select your level.");if(!pe.trim())return Ee("Email is required.");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(pe.trim()))return Ee("Please enter a valid email address.");const Ze=ke.trim();if(Ze.length>0&&!LS(Ze))return Ee("Please enter a valid LinkedIn URL (e.g. https://linkedin.com/in/yourname), or leave it blank.");if(!Se)return Ee("Password is required.");if(!Vm(Se))return Ee("Password must be at least 8 characters and include an uppercase letter, a lowercase letter, a number, and a symbol.");if(!W)return Ee("Please confirm your password.");if(Se!==W)return Ee("Passwords do not match.");Kr(!0);try{const{data:gt}=await ae.from("profiles").select("id").eq("email",pe).maybeSingle();if(gt)throw new Error("An account with this email already exists. Please log in.");const{data:bt,error:Z}=await ae.from("pending_registrations").select("id").eq("email",pe).eq("status","pending").maybeSingle();if(Z&&console.warn("Pending registration check failed (possible RLS issue):",Z),bt)throw new Error("This email is already pending approval. Please wait or contact an admin.");const ve=G.trim(),{data:Be,error:Xe}=await ae.from("profiles").select("id").eq("phone_number",ve).eq("status","pending").maybeSingle();if(Xe&&console.warn("Profile phone check failed (possible RLS issue):",Xe),Be)throw new Error("This phone number is already registered to an existing account.");const{data:He,error:Yt}=await ae.from("pending_registrations").select("id").eq("phone_number",ve).maybeSingle();if(Yt&&console.warn("Pending registration phone check failed (possible RLS issue):",Yt),He)throw new Error("This phone number is already used in another pending registration. Please wait or contact an admin.");if((i==="Board"||i==="Highboard")&&p){const{data:et,error:Ta}=await ae.from("profiles").select("id").eq("tier",i).eq("position",p).limit(1);if(Ta&&console.warn("Position uniqueness check failed (possible RLS issue):",Ta),et&&et.length>0)throw new Error(`Someone already holds the position of ${p}. Only one person can hold this position.`);const{data:xr,error:Aa}=await ae.from("pending_registrations").select("id").eq("tier",i).eq("position",p).eq("status","pending").maybeSingle();if(Aa&&console.warn("Pending position uniqueness check failed (possible RLS issue):",Aa),xr)throw new Error(`Someone has already applied for the position of ${p} and is pending approval.`)}if(i==="Mentor"){const{data:et,error:Ta}=await ae.from("profiles").select("id").eq("tier","Mentor").limit(1);if(Ta&&console.warn("Mentor uniqueness check failed (possible RLS issue):",Ta),et&&et.length>0)throw new Error("There can only be one Mentor in IEEE ECU SB, and someone already holds this role.");const{data:xr,error:Aa}=await ae.from("pending_registrations").select("id").eq("tier","Mentor").eq("status","pending").maybeSingle();if(Aa&&console.warn("Pending mentor uniqueness check failed (possible RLS issue):",Aa),xr)throw new Error("Someone has already applied to be Mentor and is pending approval.")}const Ut=`${k.trim()} ${C.trim()}`,Pa=ke.trim()||null;let At=null;i==="Board"&&u==="Head"?At=MS[p]||p:i==="Board"&&u==="Vice"?At=US[p]||null:i==="Member"&&(At=g);const _n=i==="Member"?g==="Technical"?x:null:i==="Mentor"?null:p,{data:Fr,error:zs}=await ae.auth.signUp({email:pe,password:Se,options:{data:{first_name:k.trim(),last_name:C.trim(),full_name:Ut,gender:z,phone_number:G.trim(),date_of_birth:R,faculty:X,level:te,tier:i,position:_n,team:At,linkedin_url:Pa,ref_user_id:s||null},emailRedirectTo:"https://ieeesbecu-bot.github.io/IEEE-ECU-SB-Website/login"}});if(zs)throw zs;const br=Fr.user?.id;if(!br)throw new Error("User creation failed.");if(Array.isArray(Fr.user?.identities)&&Fr.user.identities.length===0)throw new Error("An account with this email already exists. Please log in or reset your password.");let ba=null;if(j)try{const et=j.name.split(".").pop(),Ta=`${br}/avatar_${Date.now()}.${et}`,{error:xr}=await ae.storage.from("avatars").upload(Ta,j,{upsert:!0});if(xr)throw xr;const{data:Aa}=ae.storage.from("avatars").getPublicUrl(Ta);ba=Aa.publicUrl}catch(et){console.warn("Avatar upload failed:",et)}const{data:pt,error:kt}=await ae.from("pending_registrations").select("*").eq("id",br).eq("status","pending").maybeSingle();if(kt&&console.warn("Pending registration safety-net check failed (possible RLS issue):",kt),pt)throw new Error("This email is already pending approval. Please wait or contact an admin.");if(s){const{error:et}=await ae.from("notifications").insert({recipient_id:s,type:"registration_request",title:"New registration request",body:`${Ut} wants to join and is waiting for your approval.`,data:{pending_id:br},read:!1});et&&console.warn("Failed to create notification:",et)}const{error:Gt}=await ae.from("pending_registrations").insert({id:br,ref_user_id:s||null,email:pe,first_name:k.trim(),last_name:C.trim(),full_name:Ut,gender:z,phone_number:G.trim(),date_of_birth:R,faculty:X,level:te,tier:i,position:_n,team:At,avatar_url:ba,linkedin_url:Pa,created_at:new Date().toISOString()});if(Gt){if(console.error("pending_registrations insert failed:",Gt),Gt.code==="23505"){const et=`${Gt.details||""} ${Gt.message||""}`.toLowerCase();throw et.includes("phone")?new Error("This phone number is already used in another pending registration. Please wait or contact an admin."):et.includes("email")?new Error("This email is already pending approval. Please wait or contact an admin."):et.includes("ref_user_id")?new Error("This registration link has already been used for a pending request. Please contact an admin."):new Error("Some of your details match an existing pending registration. Please wait or contact an admin.")}throw new Error(Gt.message||"Could not submit your registration. Please try again.")}try{await ae.functions.invoke("send-email",{body:{type:"registration_received",name:Ut,email:pe,tier:i,position:i==="Member"||i==="Mentor"?"":p}})}catch(et){console.warn("Registration received email failed:",et)}N(!0)}catch(gt){console.error("Sign up failed:",gt),Ee(gt.message||"Something went wrong. Please try again.");try{await ae.auth.signOut()}catch(bt){console.warn("Post-signup sign-out failed:",bt)}}finally{Kr(!1)}},Ot=async()=>{try{await ae.auth.signOut()}catch(J){console.warn("Post-signup sign-out failed:",J)}N(!1),r("/login")},ft=ma(),qa=X?Wg[X]||[]:[],ze="w-full pl-9 pr-3 py-2.5 text-base sm:text-sm rounded-xl border border-[rgba(2,50,96,0.15)] focus:outline-none",ga="lg-select w-full appearance-none pl-9 pr-9 py-2.5 text-base sm:text-sm rounded-xl border border-[rgba(2,50,96,0.15)] focus:outline-none cursor-pointer",Ge="block text-xs font-semibold text-[#023260] mb-1.5";return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
        @keyframes lgFadeUp {
          0% { opacity: 0; transform: translateY(18px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes lgDrift {
          0%, 100% { transform: translate3d(0,0,0) rotate(0deg); }
          50%      { transform: translate3d(0,-14px,0) rotate(0.6deg); }
        }
        @keyframes lgSpin {
          to { transform: rotate(360deg); }
        }

        .lg-scene {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(1100px 700px at 15% 20%, rgba(2,50,96,0.06), transparent 60%),
            radial-gradient(900px 600px at 85% 80%, rgba(2,50,96,0.05), transparent 55%),
            linear-gradient(155deg, #eef2f6 0%, #dfe7ee 45%, #cfd9e3 100%);
        }

        /* Chinese watermark characters, scattered across the whole page so
           the motif reads as one continuous field rather than being fenced
           to the left panel. */
        .lg-char {
          position: absolute;
          font-weight: 700;
          line-height: 1;
          pointer-events: none;
          user-select: none;
          z-index: 0;
          animation: lgDrift 14s ease-in-out infinite;
        }

        .lg-panel-left {
          animation: lgFadeUp 1s cubic-bezier(0.19,1,0.22,1) both;
        }
        .lg-panel-right {
          animation: lgFadeUp 1s cubic-bezier(0.19,1,0.22,1) 0.12s both;
        }

        /* The card: translucent glass over the animated field behind it,
           tinted with the same tones as the page background instead of
           a plain opaque white panel — matches the frosted-glass look. */
        .login-form-card {
          position: relative;
          background: rgba(223, 231, 238, 0.22);
          backdrop-filter: blur(28px) saturate(160%);
          -webkit-backdrop-filter: blur(28px) saturate(160%);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 22px;
          box-shadow:
            0 20px 55px rgba(2, 50, 96, 0.18),
            0 2px 8px rgba(2, 50, 96, 0.06),
            inset 0 1px 0 rgba(255,255,255,0.35);
        }
        .login-form-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 22px;
          padding: 1px;
          background: linear-gradient(135deg, rgba(2,50,96,0.28), rgba(2,50,96,0.08) 50%, transparent 75%);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .lg-field {
          position: relative;
        }
        .lg-field input,
        .lg-select {
          transition: border-color 0.35s ease, box-shadow 0.35s ease, background 0.35s ease;
          background: rgba(255,255,255,0.4);
        }
        .lg-field input:focus,
        .lg-select:focus {
          background: rgba(255,255,255,0.65);
          border-color: #023260 !important;
          box-shadow: 0 0 0 4px rgba(2,50,96,0.1);
        }
        .lg-select:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .lg-field svg { transition: color 0.35s ease; }
        .lg-field:focus-within svg.lg-icon { color: #023260; }

        .lg-submit {
          position: relative;
          overflow: hidden;
          background: linear-gradient(115deg, #011a36, #023260 40%, #0d5aa7 70%, #023260);
          background-size: 250% 250%;
          background-position: 0% 50%;
          transition: background-position 0.6s ease, transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 14px rgba(2,50,96,0.35);
        }
        .lg-submit::before {
          content: '';
          position: absolute;
          top: 0; left: -75%;
          width: 50%; height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255,255,255,0.5),
            transparent
          );
          transform: skewX(-20deg);
          transition: left 0.7s ease;
        }
        .lg-submit:hover {
          background-position: 100% 50%;
          transform: translateY(-1px) scale(1.02);
          box-shadow: 0 8px 22px rgba(2,50,96,0.5);
        }
        .lg-submit:hover::before {
          left: 125%;
        }
        .lg-submit:active {
          transform: translateY(0) scale(0.98);
        }
        .lg-submit::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.28), transparent);
          transform: translateX(-120%);
          transition: transform 0.7s ease;
        }
        .lg-submit:hover::after { transform: translateX(120%); }
        .lg-submit .lg-arrow { transition: transform 0.4s ease; }
        .lg-submit:hover .lg-arrow { transform: translateX(4px); }
        .lg-submit:disabled { opacity: 0.6; }

        .lg-spinner {
          width: 16px; height: 16px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.35);
          border-top-color: #fff;
          animation: lgSpin 0.7s linear infinite;
        }

        /* Board-type toggle, restyled to match the glass field language */
        .lg-toggle-btn {
          transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
          background: rgba(255,255,255,0.4);
        }
        .lg-toggle-btn:hover { transform: translateY(-1px); }
        .lg-toggle-btn.active {
          background: #023260;
          color: #fff;
          border-color: #023260;
        }

        /* Avatar picker, restyled to match the glass card */
        .signup-avatar-wrap {
          position: relative;
          width: 84px;
          height: 84px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          border: 2px solid rgba(2,50,96,0.2);
          background: rgba(255,255,255,0.4);
          box-shadow: 0 6px 18px rgba(2,50,96,0.12);
        }
        .signup-avatar-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .signup-avatar-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #023260;
        }
        .signup-avatar-overlay {
          position: absolute;
          inset: 0;
          background: rgba(2,50,96,0.55);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.2s;
          cursor: pointer;
          border: none;
          color: #fff;
        }
        .signup-avatar-wrap:hover .signup-avatar-overlay {
          opacity: 1;
        }
        @media (max-width: 767px) {
          .signup-avatar-overlay {
            opacity: 0.85;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .lg-char, .login-form-card, .lg-panel-left, .lg-panel-right,
          .lg-submit::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}),l.jsxs("div",{className:"lg-scene flex flex-col md:flex-row min-h-screen relative",children:[l.jsx("span",{className:"lg-char",style:{fontSize:210,color:"rgba(2,50,96,0.05)",top:"-4%",left:"-5%",animationDelay:"0s"},children:"注"}),l.jsx("span",{className:"lg-char",style:{fontSize:170,color:"rgba(2,50,96,0.05)",top:"58%",left:"6%",animationDelay:"2.4s"},children:"册"}),l.jsx("span",{className:"lg-char",style:{fontSize:130,color:"rgba(2,50,96,0.045)",top:"8%",right:"8%",animationDelay:"1.1s"},children:"加"}),l.jsx("span",{className:"lg-char",style:{fontSize:190,color:"rgba(2,50,96,0.04)",bottom:"-6%",right:"-4%",animationDelay:"3.2s"},children:"入"}),l.jsx("span",{className:"lg-char hidden md:block",style:{fontSize:90,color:"rgba(2,50,96,0.06)",bottom:"10%",left:"38%",animationDelay:"0.6s"},children:"团"}),l.jsxs("div",{className:"lg-panel-left hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-b from-black to-[#023260] text-white relative z-20 shadow-[10px_0_25px_rgba(0,0,0,0.3)] overflow-hidden",children:[l.jsx("span",{className:"lg-char",style:{fontSize:170,color:"rgba(255,255,255,0.05)",top:"-3%",left:"-5%"},children:"注"}),l.jsx("span",{className:"lg-char",style:{fontSize:140,color:"rgba(217,37,37,0.08)",bottom:"-2%",right:"-3%"},children:"册"}),l.jsx("img",{src:Li,alt:"IEEE Logo",className:"w-56 lg:w-64 mb-3 drop-shadow-md relative z-10"}),l.jsxs("h1",{className:"text-lg lg:text-xl font-light text-center leading-snug px-4 relative z-10",children:["Join minds that move",l.jsx("br",{}),"the world forward"]}),l.jsx("span",{className:"mt-4 h-px w-12 bg-white/30 relative z-10"})]}),l.jsx("div",{className:"lg-panel-right flex flex-col justify-center items-center w-full md:w-1/2 relative z-10 px-4 sm:px-6 py-8",children:l.jsxs("div",{className:"login-form-card px-4 sm:px-8 py-6 w-full max-w-md md:max-w-lg",children:[l.jsx("div",{className:"flex flex-col md:hidden justify-center items-center mb-3",children:l.jsx("img",{src:Li,alt:"IEEE Logo",className:"w-auto h-12 mb-2"})}),l.jsxs("div",{className:"flex flex-col justify-center items-center mb-4",children:[l.jsx("h2",{className:"text-3xl md:text-4xl font-semibold text-[#023260] drop-shadow-sm",children:"Sign Up"}),l.jsx("span",{className:"mt-3 h-px w-10 bg-[#023260]/40"}),l.jsx("p",{className:"text-xs text-gray-500 mt-2 text-center",children:"Fill in your details and choose your role"})]}),l.jsxs("form",{noValidate:!0,className:"grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-3",onSubmit:ht,children:[l.jsxs("div",{className:"col-span-1 md:col-span-2 flex flex-col items-center gap-1 mb-1",children:[l.jsxs("div",{className:"signup-avatar-wrap",children:[P?l.jsx("img",{src:P,alt:"Profile preview"}):l.jsx("div",{className:"signup-avatar-placeholder",children:l.jsx(jl,{size:24,strokeWidth:1.5})}),l.jsx("button",{type:"button",className:"signup-avatar-overlay",onClick:()=>re.current?.click(),children:l.jsx(jl,{size:16})}),l.jsx("input",{ref:re,type:"file",accept:"image/*",className:"hidden",onChange:Ha})]}),l.jsx("button",{type:"button",onClick:()=>re.current?.click(),className:"text-[11px] text-[#023260]/60 hover:text-[#D92525] transition",children:P?"Change photo":"Add profile photo (optional)"})]}),l.jsxs("div",{className:"col-span-1 md:col-span-2 min-w-0",children:[l.jsxs("label",{className:Ge,children:["Tier ",l.jsx("span",{className:"text-[#D92525]",children:"*"})]}),l.jsxs("div",{className:"lg-field relative",children:[l.jsxs("select",{value:i,onChange:J=>gr(J.target.value),className:`${ga} pl-3`,children:[l.jsx("option",{value:"",children:"Select your tier…"}),l.jsx("option",{value:"Highboard",children:"Highboard"}),l.jsx("option",{value:"Board",children:"Board"}),l.jsx("option",{value:"Member",children:"Member"}),l.jsx("option",{value:"Mentor",children:"Mentor"})]}),l.jsx(gn,{size:16,className:"pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#023260]/50"})]})]}),i==="Board"&&l.jsxs("div",{className:"col-span-1 md:col-span-2 min-w-0",children:[l.jsxs("label",{className:Ge,children:["Board type ",l.jsx("span",{className:"text-[#D92525]",children:"*"})]}),l.jsx("div",{className:"flex gap-2",children:["Head","Vice"].map(J=>l.jsx("button",{type:"button",onClick:()=>Rs(J),className:`lg-toggle-btn flex-1 py-2 rounded-xl text-sm font-medium border ${u===J?"active":"border-[rgba(2,50,96,0.15)] text-[#023260]"}`,children:J},J))})]}),ft.length>0&&l.jsxs("div",{className:"col-span-1 md:col-span-2 min-w-0",children:[l.jsxs("label",{className:Ge,children:[i==="Board"&&u==="Head"?"Committee":"Position"," ",l.jsx("span",{className:"text-[#D92525]",children:"*"})]}),l.jsxs("div",{className:"lg-field relative",children:[l.jsxs("select",{value:p,onChange:J=>m(J.target.value),className:`${ga} pl-3`,children:[l.jsx("option",{value:"",children:"Select…"}),ft.map(J=>l.jsx("option",{value:J,children:i==="Board"&&u==="Head"?`Head ${J}`:J},J))]}),l.jsx(gn,{size:16,className:"pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#023260]/50"})]})]}),i==="Member"&&l.jsxs("div",{className:"col-span-1 md:col-span-2 min-w-0",children:[l.jsxs("label",{className:Ge,children:["Team ",l.jsx("span",{className:"text-[#D92525]",children:"*"})]}),l.jsxs("div",{className:"lg-field relative",children:[l.jsxs("select",{value:g,onChange:J=>jn(J.target.value),className:`${ga} pl-3`,children:[l.jsx("option",{value:"",children:"Select your team…"}),zS.map(J=>l.jsx("option",{value:J,children:J},J))]}),l.jsx(gn,{size:16,className:"pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#023260]/50"})]})]}),i==="Member"&&g==="Technical"&&l.jsxs("div",{className:"col-span-1 md:col-span-2 min-w-0",children:[l.jsxs("label",{className:Ge,children:["Technical Sub-team ",l.jsx("span",{className:"text-[#D92525]",children:"*"})]}),l.jsxs("div",{className:"lg-field relative",children:[l.jsxs("select",{value:x,onChange:J=>S(J.target.value),className:`${ga} pl-3`,children:[l.jsx("option",{value:"",children:"Select…"}),OS.map(J=>l.jsx("option",{value:J,children:J},J))]}),l.jsx(gn,{size:16,className:"pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#023260]/50"})]})]}),l.jsxs("div",{className:"min-w-0",children:[l.jsxs("label",{className:Ge,children:["First Name ",l.jsx("span",{className:"text-[#D92525]",children:"*"})]}),l.jsxs("div",{className:"lg-field relative",children:[l.jsx(rm,{size:16,className:"lg-icon absolute left-3 top-1/2 -translate-y-1/2 text-[#023260]/50 z-10"}),l.jsx("input",{type:"text",placeholder:"First Name",value:k,onChange:J=>T(J.target.value),className:ze})]})]}),l.jsxs("div",{className:"min-w-0",children:[l.jsxs("label",{className:Ge,children:["Last Name ",l.jsx("span",{className:"text-[#D92525]",children:"*"})]}),l.jsxs("div",{className:"lg-field relative",children:[l.jsx(rm,{size:16,className:"lg-icon absolute left-3 top-1/2 -translate-y-1/2 text-[#023260]/50 z-10"}),l.jsx("input",{type:"text",placeholder:"Last Name",value:C,onChange:J=>_(J.target.value),className:ze})]})]}),l.jsxs("div",{className:"col-span-1 md:col-span-2 min-w-0",children:[l.jsxs("label",{className:Ge,children:["Gender ",l.jsx("span",{className:"text-[#D92525]",children:"*"})]}),l.jsx("div",{className:"flex gap-2",children:DS.map(J=>l.jsx("button",{type:"button",onClick:()=>M(J.value),className:`lg-toggle-btn flex-1 py-2 rounded-xl text-sm font-medium border ${z===J.value?"active":"border-[rgba(2,50,96,0.15)] text-[#023260]"}`,children:J.label},J.value))})]}),l.jsxs("div",{className:"min-w-0",children:[l.jsxs("label",{className:Ge,children:["Date of Birth ",l.jsx("span",{className:"text-[#D92525]",children:"*"})]}),l.jsxs("div",{className:"lg-field relative",children:[l.jsx(vg,{size:16,className:"lg-icon absolute left-3 top-1/2 -translate-y-1/2 text-[#023260]/50 z-10"}),l.jsx("input",{type:"date",value:R,onChange:J=>V(J.target.value),className:ze})]})]}),l.jsxs("div",{className:"min-w-0",children:[l.jsxs("label",{className:Ge,children:["Phone Number ",l.jsx("span",{className:"text-[#D92525]",children:"*"})]}),l.jsxs("div",{className:"lg-field relative",children:[l.jsx(kg,{size:16,className:"lg-icon absolute left-3 top-1/2 -translate-y-1/2 text-[#023260]/50 z-10"}),l.jsx("input",{type:"tel",placeholder:"+20 1XX XXX XXXX",value:G,onChange:J=>Q(J.target.value),className:ze})]})]}),l.jsxs("div",{className:"min-w-0",children:[l.jsxs("label",{className:Ge,children:["Faculty ",l.jsx("span",{className:"text-[#D92525]",children:"*"})]}),l.jsxs("div",{className:"lg-field relative",children:[l.jsx(E2,{size:16,className:"lg-icon absolute left-3 top-1/2 -translate-y-1/2 text-[#023260]/50 z-10"}),l.jsxs("select",{value:X,onChange:J=>Ca(J.target.value),className:ga,children:[l.jsx("option",{value:"",children:"Select Faculty..."}),CS.map(J=>l.jsx("option",{value:J,children:J},J))]}),l.jsx(gn,{size:16,className:"pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#023260]/50"})]})]}),l.jsxs("div",{className:"min-w-0",children:[l.jsxs("label",{className:Ge,children:["Level ",l.jsx("span",{className:"text-[#D92525]",children:"*"})]}),l.jsxs("div",{className:"lg-field relative",children:[l.jsx(wg,{size:16,className:"lg-icon absolute left-3 top-1/2 -translate-y-1/2 text-[#023260]/50 z-10"}),l.jsxs("select",{value:te,onChange:J=>fe(J.target.value),disabled:!X,className:ga,children:[l.jsx("option",{value:"",children:X?"Select Level...":"Select faculty first"}),qa.map(J=>l.jsx("option",{value:J,children:J},J))]}),l.jsx(gn,{size:16,className:"pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#023260]/50"})]})]}),l.jsxs("div",{className:"col-span-1 md:col-span-2 min-w-0",children:[l.jsxs("label",{className:Ge,children:["Email ",l.jsx("span",{className:"text-[#D92525]",children:"*"})]}),l.jsxs("div",{className:"lg-field relative",children:[l.jsx(Fi,{size:16,className:"lg-icon absolute left-3 top-1/2 -translate-y-1/2 text-[#023260]/50 z-10"}),l.jsx("input",{type:"email",placeholder:"username@gmail.com",value:pe,onChange:J=>xe(J.target.value),className:ze})]})]}),l.jsxs("div",{className:"col-span-1 md:col-span-2 min-w-0",children:[l.jsx("label",{className:Ge,children:"LinkedIn (optional)"}),l.jsxs("div",{className:"lg-field relative",children:[l.jsx(zl,{size:16,className:"lg-icon absolute left-3 top-1/2 -translate-y-1/2 text-[#023260]/50 z-10"}),l.jsx("input",{type:"url",placeholder:"https://linkedin.com/in/yourname",value:ke,onChange:J=>Re(J.target.value),className:ze})]})]}),l.jsxs("div",{className:"min-w-0",children:[l.jsxs("label",{className:Ge,children:["Password ",l.jsx("span",{className:"text-[#D92525]",children:"*"})]}),l.jsxs("div",{className:"lg-field relative",children:[l.jsx(Vr,{size:16,className:"lg-icon absolute left-3 top-1/2 -translate-y-1/2 text-[#023260]/50 z-10"}),l.jsx("input",{type:mr?"text":"password",placeholder:"8+ chars, incl. A-Z, a-z, 0-9, symbol",value:Se,onChange:J=>H(J.target.value),className:`${ze} pr-9`}),l.jsx("button",{type:"button",tabIndex:-1,onClick:()=>wn(J=>!J),className:"absolute right-3 top-1/2 -translate-y-1/2 text-[#023260]/40 hover:text-[#023260] transition z-10",children:mr?l.jsx(Mi,{size:16}):l.jsx(Ui,{size:16})})]}),Se&&!Vm(Se)&&l.jsx("p",{className:"text-xs text-[#D92525] mt-1",children:"Needs 8+ characters with uppercase, lowercase, a number, and a symbol."})]}),l.jsxs("div",{className:"min-w-0",children:[l.jsxs("label",{className:Ge,children:["Confirm Password ",l.jsx("span",{className:"text-[#D92525]",children:"*"})]}),l.jsxs("div",{className:"lg-field relative",children:[l.jsx(Vr,{size:16,className:"lg-icon absolute left-3 top-1/2 -translate-y-1/2 text-[#023260]/50 z-10"}),l.jsx("input",{type:kn?"text":"password",placeholder:"Repeat password",value:W,onChange:J=>ne(J.target.value),className:`${ze} pr-9 ${W&&W!==Se?"border-[#D92525]/40 focus:ring-[#D92525]/40":""}`}),l.jsx("button",{type:"button",tabIndex:-1,onClick:()=>wt(J=>!J),className:"absolute right-3 top-1/2 -translate-y-1/2 text-[#023260]/40 hover:text-[#023260] transition z-10",children:kn?l.jsx(Mi,{size:16}):l.jsx(Ui,{size:16})})]}),W&&W!==Se&&l.jsx("p",{className:"text-xs text-[#D92525] mt-1",children:"Passwords do not match"})]}),$a&&l.jsx("div",{className:"col-span-1 md:col-span-2 text-xs text-[#023260] bg-white/40 border border-[#D92525]/25 rounded-lg px-3 py-2 font-semibold text-center",children:$a}),l.jsx("div",{className:"col-span-1 md:col-span-2 mt-1",children:l.jsx("button",{type:"submit",disabled:Sn,className:"lg-submit w-full text-white font-semibold py-2.5 rounded-full transition-colors duration-300 disabled:opacity-60 flex items-center justify-center gap-2 text-sm",children:Sn?l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"lg-spinner"}),l.jsx("span",{children:"Creating Account…"})]}):l.jsxs(l.Fragment,{children:[l.jsx("span",{children:"Sign Up"}),l.jsx(Ki,{size:16,className:"lg-arrow"})]})})})]}),l.jsxs("p",{className:"text-sm font-semibold text-gray-600 text-center mt-3",children:["Already have an account?"," ",l.jsx(dt,{to:"/login",className:"text-[#023260] font-semibold hover:text-[#0d5aa7] hover:underline transition",children:"Login"})]})]})})]}),me&&Ie&&l.jsx("div",{className:"fixed inset-0 z-[200] flex items-center justify-center bg-black/70 p-4",children:l.jsxs("div",{className:"w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl",children:[l.jsxs("div",{className:"flex items-center justify-between border-b px-5 py-4",children:[l.jsxs("div",{children:[l.jsx("h3",{className:"text-lg font-semibold text-[#023260]",children:"Edit Profile Photo"}),l.jsx("p",{className:"mt-0.5 text-xs text-gray-500",children:"Move and zoom your photo to choose the perfect crop"})]}),l.jsx("button",{type:"button",onClick:pr,className:"flex h-8 w-8 items-center justify-center rounded-full text-xl text-gray-400 transition hover:bg-gray-100 hover:text-gray-700",children:"×"})]}),l.jsx("div",{className:"relative h-[360px] w-full bg-black",children:l.jsx(Jg,{image:Ie,crop:fa,zoom:aa,aspect:1,cropShape:"round",showGrid:!1,onCropChange:Na,onZoomChange:pa,onCropComplete:Je})}),l.jsxs("div",{className:"px-5 py-4",children:[l.jsxs("div",{className:"mb-4",children:[l.jsxs("div",{className:"mb-2 flex items-center justify-between text-xs font-semibold text-[#023260]",children:[l.jsx("span",{children:"Zoom"}),l.jsxs("span",{children:[aa.toFixed(1),"×"]})]}),l.jsx("input",{type:"range",min:1,max:3,step:.1,value:aa,onChange:J=>pa(Number(J.target.value)),className:"w-full accent-[#023260]"})]}),l.jsxs("div",{className:"flex gap-3",children:[l.jsx("button",{type:"button",onClick:pr,className:"flex-1 rounded-xl border border-[#023260]/15 py-2.5 text-sm font-semibold text-[#023260] transition hover:bg-gray-50",children:"Cancel"}),l.jsx("button",{type:"button",onClick:Xr,className:"flex-1 rounded-xl bg-[#023260] py-2.5 text-sm font-semibold text-white transition hover:bg-[#0d5aa7]",children:"Save Photo"})]})]})]})}),l.jsx(NS,{open:F,onClose:Ot})]})}const HS=`
  html, body {
    margin: 0;
    padding: 0;
  }

  /* ── Background — same recipe as About.jsx's .ab-root, light + dark ── */
  .cu-root {
    background:
      radial-gradient(ellipse 800px 600px at 8% 0%, rgba(74,158,255,0.10), transparent 60%),
      radial-gradient(ellipse 750px 550px at 92% 15%, rgba(217,37,37,0.06), transparent 60%),
      linear-gradient(to bottom, #f5f8fb, #d3dde8);
    min-height: 100vh;
    transition: background 0.4s ease;
  }
  .dark .cu-root {
    background:
      radial-gradient(ellipse 950px 700px at 8% 5%, rgba(13,90,167,0.24), transparent 60%),
      radial-gradient(ellipse 850px 650px at 92% 25%, rgba(217,37,37,0.18), transparent 60%),
      radial-gradient(ellipse 1000px 800px at 50% 100%, rgba(13,90,167,0.16), transparent 65%),
      linear-gradient(to bottom, #001233, #00040c 65%, #00040c);
  }

  /* ── Chinese bg characters ── drifting motion (same device as About/Home),
     brighter and more visible in dark mode instead of staying near-invisible. */
  .cu-bg-char {
    position: absolute;
    font-family: 'Noto Serif SC', 'PingFang SC', 'Songti SC', 'SimSun', serif;
    font-weight: 700;
    pointer-events: none;
    user-select: none;
    line-height: 1;
    animation: cuCharDrift 14s ease-in-out infinite;
    transition: color 0.4s ease, opacity 0.4s ease;
  }
  @keyframes cuCharDrift {
    0%, 100% { transform: translate3d(0,0,0) rotate(var(--cu-rot, 0deg)); }
    50%      { transform: translate3d(0,-16px,0) rotate(calc(var(--cu-rot, 0deg) + 0.8deg)); }
  }
  .dark .cu-bg-char-blue {
    color: #4a9eff !important;
    opacity: 0.2;
    filter: drop-shadow(0 0 22px rgba(74,158,255,0.3));
  }
  .dark .cu-bg-char-red {
    color: #ff5b5b !important;
    opacity: 0.18;
    filter: drop-shadow(0 0 22px rgba(217,37,37,0.32));
  }
  @media (prefers-reduced-motion: reduce) {
    .cu-bg-char { animation: none !important; }
  }

  .cu-petal {
    position: absolute;
    width: 7px;
    height: 11px;
    border-radius: 80% 0 80% 0;
    opacity: 0;
    animation: cuFallPetal linear infinite;
    top: -20px;
  }
  @keyframes cuFallPetal {
    0%   { transform: translateY(-5vh) rotate(0deg) translateX(0); opacity: 0; }
    8%   { opacity: 0.3; }
    85%  { opacity: 0.15; }
    100% { transform: translateY(105vh) rotate(540deg) translateX(50px); opacity: 0; }
  }

  .cu-label {
    font-size: 11px;
    letter-spacing: 0.45em;
    color: #023260;
    text-transform: uppercase;
    margin-bottom: 4px;
    transition: color 0.4s ease;
  }
  .dark .cu-label { color: #9fc4f0; }

  .cu-divider { display: flex; align-items: center; justify-content: center; gap: 10px; margin-top: 6px; }
  .cu-divider-line { width: 40px; height: 1px; background: rgba(217,37,37,0.45); }
  .cu-divider-diamond { color: rgba(217,37,37,0.55); font-size: 11px; }

  .cu-icon-circle {
    width: 36px; height: 36px;
    background: rgba(2, 50, 96, 0.08);
    border: 1px solid rgba(2, 50, 96, 0.18);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    transition: background 0.25s, transform 0.25s, border-color 0.25s;
  }
  .cu-icon-circle:hover {
    background: rgba(217, 37, 37, 0.12);
    border-color: rgba(217, 37, 37, 0.4);
    transform: scale(1.1);
  }
  .cu-icon-circle svg { transition: stroke 0.25s ease; }
  .dark .cu-icon-circle {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.18);
  }
  .dark .cu-icon-circle:hover {
    background: rgba(217, 37, 37, 0.2);
    border-color: rgba(217, 37, 37, 0.5);
  }

  .cu-contact-link {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
  }
  .cu-contact-link:hover h3 { color: #D92525; }
  .cu-contact-link:hover .cu-icon-circle {
    background: rgba(217, 37, 37, 0.12);
    border-color: rgba(217, 37, 37, 0.4);
    transform: scale(1.1);
  }
  .dark .cu-contact-link:hover .cu-icon-circle {
    background: rgba(217, 37, 37, 0.2);
    border-color: rgba(217, 37, 37, 0.5);
  }

  .cu-form-card {
    background: linear-gradient(to bottom, rgba(245, 248, 251, 0.55), rgba(211, 221, 232, 0.55));
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(2, 50, 96, 0.12);
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 18px rgba(2, 50, 96, 0.1);
    transition: background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
  }
  .dark .cu-form-card {
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.03));
    border-color: rgba(255, 255, 255, 0.12);
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.4), 0 0 40px rgba(13,90,167,0.12);
  }

  .cu-input {
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    color: #023260;
    font-size: 14px;
    font-weight: 400;
    padding: 10px 0;
    transition: border-color 0.3s, color 0.4s ease;
    letter-spacing: 0.02em;
  }
  .cu-input::placeholder { color: rgba(2, 50, 96, 0.35); }
  .dark .cu-input { color: #f5f8fb; }
  .dark .cu-input::placeholder { color: rgba(255, 255, 255, 0.35); }

  .cu-field-border {
    border-bottom: 2px solid rgba(2, 50, 96, 0.2);
    transition: border-color 0.3s;
  }
  .cu-field-border:focus-within {
    border-color: #023260;
  }
  .dark .cu-field-border { border-bottom-color: rgba(255, 255, 255, 0.22); }
  .dark .cu-field-border:focus-within { border-color: #4a9eff; }

  .cu-btn {
    position: relative;
    overflow: hidden;
    background: linear-gradient(115deg, #7a1220, #D92525 45%, #ff6b4a 75%, #D92525);
    background-size: 250% 250%;
    background-position: 0% 50%;
    color: #fff;
    border: none;
    border-radius: 999px;
    padding: 10px 36px;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-position 0.6s ease, transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 14px rgba(217,37,37,0.3);
  }
  .cu-btn::before {
    content: '';
    position: absolute;
    top: 0; left: -75%;
    width: 50%; height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255,255,255,0.45),
      transparent
    );
    transform: skewX(-20deg);
    transition: left 0.7s ease;
  }
  .cu-btn:hover {
    background-position: 100% 50%;
    transform: translateY(-1px) scale(1.03);
    box-shadow: 0 8px 20px rgba(217,37,37,0.4);
  }
  .cu-btn:hover::before { left: 125%; }
  .cu-btn:active { transform: translateY(0) scale(0.98); }
  .cu-btn:disabled {
    background: rgba(2, 50, 96, 0.2);
    color: rgba(2, 50, 96, 0.4);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
  .dark .cu-btn {
    box-shadow: 0 3px 12px rgba(217,37,37,0.28);
  }
  .dark .cu-btn:hover {
    box-shadow: 0 5px 16px rgba(217,37,37,0.34);
  }
  .dark .cu-btn:disabled {
    background: rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.3);
    box-shadow: none;
  }

  .cu-form-title {
    color: #023260;
    transition: color 0.4s ease;
  }
  .dark .cu-form-title { color: #fff; }

  .cu-ornament { display: flex; align-items: center; gap: 6px; margin-bottom: 16px; }
  .cu-ornament-line { flex: 1; height: 1px; background: rgba(2, 50, 96, 0.15); transition: background 0.4s ease; }
  .dark .cu-ornament-line { background: rgba(255, 255, 255, 0.18); }
  .cu-ornament-dot  { width: 4px; height: 4px; border-radius: 50%; background: #D92525; opacity: 0.6; }

  @keyframes cuReveal {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .cu-reveal       { animation: cuReveal 0.7s cubic-bezier(0.16,1,0.3,1) both; }
  .cu-reveal-delay { animation: cuReveal 0.7s 0.12s cubic-bezier(0.16,1,0.3,1) both; }
`,$S=[{left:"8%",color:"#D92525",duration:"9s",delay:"0s"},{left:"25%",color:"#023260",duration:"11s",delay:"2s"},{left:"50%",color:"#D92525",duration:"8s",delay:"4.5s"},{left:"72%",color:"#023260",duration:"13s",delay:"1s"},{left:"90%",color:"#D92525",duration:"10s",delay:"3s"}],qS=[{char:"联",top:"auto",bottom:"-2%",left:"-3%",size:220,tint:"blue",rotate:-6,delay:"0s"},{char:"系",top:"5%",right:"-2%",size:160,tint:"red",rotate:8,delay:"1.6s"},{char:"我",top:"25%",left:"5%",size:100,tint:"blue",rotate:4,delay:"3.1s"},{char:"们",top:"auto",bottom:"12%",right:"8%",size:110,tint:"red",rotate:-8,delay:"0.8s",hideMobile:!0},{char:"话",top:"45%",right:"30%",size:80,tint:"blue",rotate:6,delay:"2.4s",hideMobile:!0},{char:"邮",top:"62%",left:"10%",size:90,tint:"red",rotate:-5,delay:"3.6s",hideMobile:!0},{char:"址",top:"12%",left:"42%",size:70,tint:"blue",rotate:7,delay:"1.2s",hideMobile:!0}],PS="https://www.google.com/maps/search/?api=1&query=Heliopolis+Gesr+El-Suez+st+After+Tgneed+Bridge",IS="tel:+15614562321",YS="mailto:ieeesb.ecu@gmail.com";function GS(){const r=v.useRef(),[a,s]=v.useState(""),[i,c]=v.useState(!1),u=async h=>{h.preventDefault(),c(!0),s("");const p=r.current.user_name.value.trim(),m=r.current.user_email.value.trim(),g=r.current.message.value.trim();try{const{error:y}=await ae.from("contact_messages").insert({sender_name:p,sender_email:m,message:g,replied:!1});if(y)throw y;try{await ae.functions.invoke("send-email",{body:{type:"contact_admin_notify",name:p,email:m,message:g}})}catch(x){console.warn("Admin notify email failed:",x)}try{await ae.functions.invoke("send-email",{body:{type:"auto_reply",name:p,email:m,message:g}})}catch(x){console.warn("Auto-reply email failed:",x)}s("success"),r.current.reset(),setTimeout(()=>s(""),5e3)}catch(y){console.error("Contact form submission failed:",y),s("error")}finally{c(!1)}};return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:HS}),l.jsxs("div",{className:"cu-root relative min-h-screen w-full flex items-center justify-center px-6 py-6 lg:py-0 overflow-hidden",children:[qS.map((h,p)=>{const m={fontSize:h.size,"--cu-rot":`${h.rotate}deg`,transform:`rotate(${h.rotate}deg)`,animationDelay:h.delay,color:h.tint==="blue"?"rgba(2,50,96,0.05)":"rgba(217,37,37,0.06)"};return h.top!==void 0&&(m.top=h.top),h.bottom!==void 0&&(m.bottom=h.bottom),h.left!==void 0&&(m.left=h.left),h.right!==void 0&&(m.right=h.right),l.jsx("span",{className:`cu-bg-char cu-bg-char-${h.tint} ${h.hideMobile?"hidden md:block":""}`,style:m,children:h.char},p)}),$S.map((h,p)=>l.jsx("div",{className:"cu-petal",style:{left:h.left,background:h.color,animationDuration:h.duration,animationDelay:h.delay}},p)),l.jsxs("div",{className:"relative z-10 max-w-6xl w-full flex flex-col justify-center h-full",children:[l.jsxs("div",{className:"text-center mb-3 mt-6 cu-reveal",children:[l.jsx("p",{className:"cu-label",children:"联系我们"}),l.jsxs("h1",{className:"text-3xl md:text-3xl font-extrabold text-[#023260] dark:text-white",children:["Contact ",l.jsx("span",{style:{color:"#D92525"},children:"Us."})]}),l.jsxs("div",{className:"cu-divider",children:[l.jsx("div",{className:"cu-divider-line"}),l.jsx("span",{className:"cu-divider-diamond",children:"❖"}),l.jsx("div",{className:"cu-divider-line"})]})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 items-center",children:[l.jsx("div",{className:"cu-reveal flex flex-col justify-center items-center md:items-start md:pl-10 space-y-1 md:space-y-1",children:l.jsxs("div",{className:"space-y-3 md:space-y-3 md:ml-1",children:[l.jsxs("a",{href:PS,target:"_blank",rel:"noopener noreferrer",className:"cu-contact-link",children:[l.jsx("div",{className:"cu-icon-circle",children:l.jsx(I2,{size:13,className:"text-[#023260] dark:text-[#9fc4f0]"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-[#023260] dark:text-white text-sm font-bold uppercase tracking-wide transition-colors",children:"Address"}),l.jsxs("p",{className:"text-[#023260]/65 dark:text-white/65 text-xs md:text-base font-light",children:["Heliopolis, Gesr El-Suez st.",l.jsx("br",{}),"After Tgneed Bridge."]})]})]}),l.jsxs("a",{href:IS,className:"cu-contact-link",children:[l.jsx("div",{className:"cu-icon-circle",children:l.jsx(kg,{size:13,className:"text-[#023260] dark:text-[#9fc4f0]"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-[#023260] dark:text-white text-sm font-bold uppercase tracking-wide transition-colors",children:"Phone"}),l.jsx("p",{className:"text-[#023260]/65 dark:text-white/65 text-xs md:text-base font-light",children:"561-456-2321"})]})]}),l.jsxs("a",{href:YS,className:"cu-contact-link",children:[l.jsx("div",{className:"cu-icon-circle",children:l.jsx(Fi,{size:13,className:"text-[#023260] dark:text-[#9fc4f0]"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-[#023260] dark:text-white text-sm font-bold uppercase tracking-wide transition-colors",children:"Email"}),l.jsx("p",{className:"text-[#023260]/65 dark:text-white/65 text-xs md:text-base font-light",children:"ieeesb.ecu@gmail.com"})]})]})]})}),l.jsxs("div",{className:"cu-form-card cu-reveal-delay p-5 md:px-6 md:py-4 max-w-lg mx-auto md:mx-0 w-full",children:[l.jsx("p",{className:"cu-label",style:{marginBottom:2},children:"发送消息"}),l.jsx("h2",{className:"cu-form-title text-xl font-bold mb-3",children:"Send Message"}),l.jsxs("form",{ref:r,onSubmit:u,className:"space-y-4",children:[l.jsx("div",{className:"relative cu-field-border",children:l.jsx("input",{type:"text",name:"user_name",placeholder:"Full Name",required:!0,className:"cu-input"})}),l.jsx("div",{className:"relative cu-field-border",children:l.jsx("input",{type:"email",name:"user_email",placeholder:"Email",required:!0,className:"cu-input"})}),l.jsx("div",{className:"relative cu-field-border",children:l.jsx("textarea",{name:"message",placeholder:"Type your Message...",rows:4,required:!0,className:"cu-input",style:{resize:"none"}})}),l.jsx("button",{type:"submit",disabled:i,className:"cu-btn w-full",children:i?"Sending...":"Send Message"}),a&&l.jsx("p",{className:"mt-3 text-center font-semibold text-sm",style:{color:a==="success"?"#1a7a45":"#D92525"},children:a==="success"?"✦  Message sent successfully!  ✦":"✦  Failed to send. Please try again.  ✦"})]})]})]})]})]})]})}function VS({open:r,onClose:a,onDeleted:s}){const[i,c]=v.useState(!1),[u,h]=v.useState("");if(!r)return null;const p=async()=>{c(!0),h("");try{const{data:{session:m}}=await ae.auth.getSession(),{error:g}=await ae.functions.invoke("delete-account",{headers:{Authorization:`Bearer ${m.access_token}`}});if(g)throw g;await ae.auth.signOut(),s?.()}catch(m){h(m.message||"Failed to delete account. Please try again."),c(!1)}};return l.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4",onClick:a,children:l.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl animate-[fadeUp_0.2s_ease]",onClick:m=>m.stopPropagation(),children:[l.jsxs("div",{className:"flex items-start gap-3",children:[l.jsx("div",{className:"flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600",children:l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"})})}),l.jsxs("div",{children:[l.jsx("h3",{className:"font-serif text-lg text-gray-900",children:"Delete account?"}),l.jsx("p",{className:"mt-1 text-sm leading-relaxed text-gray-500",children:"This will permanently delete your profile, posts, and all associated data. This action cannot be undone."})]})]}),u&&l.jsx("p",{className:"mt-4 rounded-lg bg-red-50 px-3 py-2 text-xs text-red-600",children:u}),l.jsxs("div",{className:"mt-6 flex gap-3",children:[l.jsx("button",{onClick:a,disabled:i,className:"flex-1 rounded-lg bg-gray-100 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-200 disabled:opacity-50",children:"Cancel"}),l.jsx("button",{onClick:p,disabled:i,className:"flex-1 rounded-lg bg-red-600 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-red-300",children:i?"Deleting…":"Yes, delete"})]})]})})}const XS=(r="",a="")=>`${r.charAt(0)}${a.charAt(0)}`.toUpperCase()||"??",KS=["Technical","Media","PR","HR","Events"],FS=(r,a,s)=>!r&&!s?"—":r==="Highboard"?s||"Highboard":r==="Counselor"?"Branch Counselor":r==="Mentor"?"Mentor":r==="Board"?KS.includes(s)?`Head of ${a||s}`:s||`${a||"Board"} Member`:s||r||"—",Xm=r=>r?r.replace("_"," ").replace(/\b\w/g,a=>a.toUpperCase()):"—",Km=r=>r?r.replace(/\b\w/g,a=>a.toUpperCase()):"—",Fm=r=>r?r.charAt(0).toUpperCase()+r.slice(1).toLowerCase():"—",Zg=r=>{const a=(r||"").trim();return a?/^https?:\/\//i.test(a)?a:`https://${a}`:""},JS=r=>/^https?:\/\/([a-z]{2,3}\.)?linkedin\.com\/.+/i.test(Zg(r)),Jm={male:{primary:"#023260",primaryDark:"#012040",bgStart:"#f5f8fb",bgEnd:"#d3dde8",badgeBg:"#f0f4ff",badgeBorder:"#d6deff",focusRing:"rgba(2,50,96,0.08)",petalA:"#023260",petalB:"#3d6fa3",inputBg:"rgba(2, 50, 96, 0.025)",staticBorder:"rgba(2, 50, 96, 0.14)",inputBg:"rgba(255, 255, 255, 0.018)",inputBorder:"rgba(2, 50, 96, 0.20)",dividerColor:"rgba(2, 50, 96, 0.10)"},female:{primary:"#c34f83",primaryDark:"#9f315f",bgStart:"#f5f8fb",bgEnd:"#d3dde8",badgeBg:"rgba(255, 235, 244, 0.72)",badgeBorder:"rgba(195, 79, 131, 0.28)",focusRing:"rgba(195, 79, 131, 0.14)",petalA:"#d982a5",petalB:"#c34f83",staticBg:"rgba(195, 79, 131, 0.035)",staticBorder:"rgba(195, 79, 131, 0.14)",inputBg:"rgba(195, 79, 131, 0.025)",inputBorder:"rgba(195, 79, 131, 0.20)",dividerColor:"rgba(195, 79, 131, 0.10)"}},WS=r=>Jm[(r||"").toLowerCase()]||Jm.male,ZS=[{left:"8%",tone:"A",duration:"9s",delay:"0s"},{left:"25%",tone:"B",duration:"11s",delay:"2s"},{left:"50%",tone:"A",duration:"8s",delay:"4.5s"},{left:"72%",tone:"B",duration:"13s",delay:"1s"},{left:"90%",tone:"A",duration:"10s",delay:"3s"}],QS=[{char:"福",top:"4%",left:"3%",size:170,rotate:-10},{char:"喜",top:"70%",left:"1%",size:130,rotate:8},{char:"龍",top:"10%",left:"86%",size:200,rotate:12},{char:"鳳",top:"62%",left:"89%",size:160,rotate:-14},{char:"和",top:"36%",left:"45%",size:240,rotate:5},{char:"春",top:"88%",left:"58%",size:120,rotate:-6}],e3=`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Serif+Display&family=Noto+Serif+SC:wght@700&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

.ap-root {
  font-family: 'DM Sans', sans-serif;
  min-height: 100vh;

  /* Same background treatment as the About page */
  background: linear-gradient(to bottom, #f5f8fb, #d3dde8);

  color: #0B1B2B;
  padding-top: 40px;
  position: relative;
  overflow: hidden;
}

  /* ── Decorative Chinese-character background ── */
  .ap-cjk-layer {
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
  }
  .ap-cjk-char {
    position: absolute;
    font-family: 'Noto Serif SC', 'PingFang SC', 'Songti SC', 'SimSun', serif;
    font-weight: 700;
    color: var(--ap-primary, #023260);
    opacity: 0.045;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
  }

  /* ── Falling petals ── */
  .ap-petal {
    position: absolute;
    width: 7px;
    height: 11px;
    border-radius: 80% 0 80% 0;
    opacity: 0;
    animation: apFallPetal linear infinite;
    top: -20px;
    z-index: 0;
    pointer-events: none;
  }
  @keyframes apFallPetal {
    0%   { transform: translateY(-5vh) rotate(0deg) translateX(0); opacity: 0; }
    8%   { opacity: 0.4; }
    92%  { opacity: 0.4; }
    100% { transform: translateY(105vh) rotate(540deg) translateX(50px); opacity: 0; }
  }

  .ap-layout {
    position: relative;
    z-index: 10;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 80px 32px 60px;
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 28px;
    align-items: start;
  }

  @media (max-width: 720px) {
    .ap-layout { grid-template-columns: 1fr; padding: 60px 16px 40px; }
  }

  /* ── Finer mobile pass: tighten paddings/type-scale so cards don't
     feel oversized on small phones, and give the layout more breathing
     room relative to viewport width. ── */
  @media (max-width: 480px) {
    .ap-root { padding-top: 24px; }
    .ap-layout { padding: 44px 12px 32px; gap: 16px; }
    .ap-sidebar-top { padding: 22px 16px 18px; gap: 10px; }
    .ap-avatar-wrap { width: 68px; height: 68px; }
    .ap-name { font-size: 15px; }
    .ap-info-list { padding: 10px 16px; }
    .ap-body { padding: 18px 16px 16px; }
    .ap-tab { padding: 12px 8px; font-size: 12px; }
    .ap-section-title { font-size: 17px; }
  }
.ap-card {
  background: rgba(255, 255, 255, 0.0005);
  border-radius: 18px;

  border: 1px solid rgba(255, 255, 255, 0.22);

  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  box-shadow:
    0 8px 30px rgba(11, 27, 43, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.22);

  overflow: hidden;
}

  .ap-sidebar-top {
    padding: 28px 20px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    border-bottom: 1px solid #f0f2f5;
  }

  .ap-avatar-wrap {
    position: relative;
    width: 80px; height: 80px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
  }
  .ap-avatar-wrap img,
  .ap-avatar-placeholder {
    width: 100%; height: 100%;
    object-fit: cover;
    display: flex; align-items: center; justify-content: center;
    background: var(--ap-primary, #023260);
    color: #fff;
    font-size: 22px;
    font-weight: 600;
    font-family: 'DM Serif Display', serif;
  }
  .ap-avatar-overlay {
    position: absolute; inset: 0;
    background: rgba(0,0,0,0.45);
    display: flex; align-items: center; justify-content: center;
    opacity: 0;
    transition: opacity 0.2s;
    cursor: pointer;
    border: none;
    font-size: 11px; font-weight: 500;
    color: #fff; letter-spacing: 0.05em;
    font-family: 'DM Sans', sans-serif;
    border-radius: 50%;
    text-align: center;
    padding: 0 6px;
  }
  .ap-avatar-wrap:hover .ap-avatar-overlay { opacity: 1; }
  /* Touch devices have no hover — surface a faint permanent hint instead
     of a control that's effectively invisible until tapped blind. */
  @media (hover: none) {
    .ap-avatar-overlay { opacity: 0.85; font-size: 10px; }
  }

  .ap-name {
    font-family: 'DM Serif Display', serif;
    font-size: 17px;
    color: #1a1f2e;
    text-align: center;
    line-height: 1.2;
    overflow-wrap: break-word;
    max-width: 100%;
  }
  .ap-role { font-size: 12px; color: #6b7280; text-align: center; margin-top: 2px; }

  .ap-badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    background: var(--ap-badge-bg, #f0f4ff);
    border: 1px solid var(--ap-badge-border, #d6deff);
    color: var(--ap-primary, #023260);
    font-size: 11px;
    font-weight: 500;
    padding: 4px 10px;
    border-radius: 20px;
  }
  .ap-badge-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--ap-primary, #023260); opacity: 0.5; }

  .ap-info-list { padding: 16px 20px; display: flex; flex-direction: column; gap: 0; }
  .ap-info-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 10px 0;
    border-bottom: 1px solid #f0f2f5;
    gap: 12px;
    flex-wrap: wrap;
  }
  .ap-info-row:last-child { border-bottom: none; }
  .ap-info-label { font-size: 11px; color: #9ca3af; font-weight: 500; letter-spacing: 0.04em; flex-shrink: 0; }
  .ap-info-value { font-size: 12px; color: #374151; font-weight: 400; text-align: right; word-break: break-word; min-width: 0; }
  .ap-info-value a { color: var(--ap-primary, #023260); text-decoration: none; }
  .ap-info-value a:hover { text-decoration: underline; }

  .ap-tabs { display: flex; border-bottom: 1px solid #e8eaed; }
  .ap-tab {
    flex: 1;
    padding: 14px 20px;
    font-size: 13px;
    font-weight: 500;
    color: #9ca3af;
    background: transparent;
    border: none;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    margin-bottom: -1px;
    transition: color 0.15s, border-color 0.15s;
    font-family: 'DM Sans', sans-serif;
    letter-spacing: 0.02em;
  }
  .ap-tab:hover { color: #374151; }
  .ap-tab.active { color: var(--ap-primary, #023260); font-weight: 600; border-bottom-color: var(--ap-primary, #023260); }

  .ap-body { padding: 28px 28px 24px; }

  .ap-section-title { font-family: 'DM Serif Display', serif; font-size: 20px; color: #1a1f2e; margin-bottom: 4px; }
  .ap-section-sub { font-size: 13px; color: #9ca3af; margin-bottom: 24px; }

  .ap-org-label {
    font-family: 'DM Serif Display', serif;
    font-size: 16px;
    color: #1a1f2e;
    margin-bottom: 14px;
  }

  .ap-fields { display: flex; flex-direction: column; gap: 20px; }
  .ap-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .ap-row-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; }
  @media (max-width: 540px) {
    .ap-row-2 { grid-template-columns: 1fr; }
    .ap-row-3 { grid-template-columns: 1fr 1fr; }
  }

  .ap-field label {
    display: block;
    font-size: 11px;
    font-weight: 600;
    color: #9ca3af;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    margin-bottom: 7px;
  }

  /* ── Edit rows (Phone / Email / LinkedIn) ──
     Shared wrapper for "static field + Edit button" and "input + Save +
     Cancel" rows. On narrow screens these wrap instead of forcing three
     items into a row that's already too tight for the viewport — the
     field takes its own line, the button(s) drop below it full-width. */
  .ap-edit-row {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }
  .ap-edit-row > .ap-static,
  .ap-edit-row > .ap-input {
    flex: 1 1 180px;
    min-width: 0;
  }
  .ap-edit-row > .ap-edit-btn {
    flex: 0 0 auto;
  }
  @media (max-width: 420px) {
    .ap-edit-row > .ap-edit-btn {
      flex: 1 1 auto;
      justify-content: center;
    }
  }

 .ap-static {
  width: 100%;
  padding: 10px 14px;

  /* Near-transparent — only the border/accent follows the gender theme */
  background: var(--ap-static-bg, rgba(2, 50, 96, 0.035));

  border: 1px solid var(--ap-static-border, rgba(2, 50, 96, 0.14));

  border-radius: 10px;
  font-size: 13px;
  color: #374151;
  font-family: 'DM Sans', sans-serif;
  line-height: 1;
  min-height: 40px;
  display: flex;
  align-items: center;
  overflow-wrap: break-word;

  box-shadow: inset 0 1px 2px rgba(11, 27, 43, 0.02);
}
  .ap-static.email { justify-content: space-between; flex-wrap: wrap; row-gap: 4px; }
  .ap-verified {
    font-size: 10px; font-weight: 600; color: #059669; letter-spacing: 0.05em;
    background: #ecfdf5; border: 1px solid #a7f3d0; padding: 2px 8px; border-radius: 6px;
    flex-shrink: 0;
  }

 .ap-input {
  width: 100%;
  padding: 10px 14px;

  /* Near-transparent — only the border follows the gender theme */
  background: var(--ap-input-bg, rgba(2, 50, 96, 0.025));

  border: 1.5px solid var(--ap-input-border, rgba(2, 50, 96, 0.20));

  border-radius: 10px;
  font-size: 13px;
  color: #1a1f2e;
  font-family: 'DM Sans', sans-serif;
  outline: none;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;
}
  .ap-input::placeholder { color: #c4c9d4; }
  .ap-input:focus { border-color: var(--ap-primary, #023260); box-shadow: 0 0 0 3px var(--ap-focus-ring, rgba(2,50,96,0.08)); }

  .ap-divider {
  height: 1px;
  background: var(--ap-divider-color, rgba(2, 50, 96, 0.10));
  margin: 4px 0;
}

  .ap-btn {
    width: 100%;
    padding: 12px;
    background: var(--ap-primary, #023260);
    color: #fff;
    border: none;
    border-radius: 25px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.04em;
    cursor: pointer;
    transition: background 0.15s, transform 0.1s;
    font-family: 'DM Sans', sans-serif;
    display: flex; align-items: center; justify-content: center; gap: 8px;
  }
  .ap-btn:hover:not(:disabled) { background: var(--ap-primary-dark, #012040); }
  .ap-btn:active:not(:disabled) { transform: scale(0.99); }
  .ap-btn:disabled { background: #e8eaed; color: #9ca3af; cursor: not-allowed; }

  /* ── Delete button — same animated red gradient + shine sweep as the
     "Become a Member" / CTA buttons on the About page ── */
  .ap-btn-danger {
    position: relative;
    z-index: 1;
    overflow: hidden;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px;
    border: none;
    border-radius: 25px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: #fff;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    background: linear-gradient(115deg, #7a1220, #D92525 45%, #ff6b4a 75%, #D92525);
    background-size: 250% 250%;
    background-position: 0% 50%;
    box-shadow: 0 8px 20px rgba(217,37,37,0.35);
    transition: background-position 0.6s ease, transform 0.15s ease, box-shadow 0.35s ease;
  }
  .ap-btn-danger::before {
    content: '';
    position: absolute;
    top: 0; left: -75%;
    width: 50%; height: 100%;
    background: linear-gradient(120deg, transparent, rgba(255,255,255,0.45), transparent);
    transform: skewX(-20deg);
    transition: left 0.7s ease;
  }
  .ap-btn-danger:hover {
    background-position: 100% 50%;
    box-shadow: 0 12px 26px rgba(217,37,37,0.5);
  }
  .ap-btn-danger:hover::before { left: 125%; }
  .ap-btn-danger:active { transform: scale(0.99); }

  .ap-edit-btn {
    width: auto;
    padding: 10px 16px;
    flex-shrink: 0;
    background: var(--ap-primary, #023260);
    color: #fff;
    border: none;
    border-radius: 10px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.04em;
    cursor: pointer;
    transition: background 0.15s, transform 0.1s;
    font-family: 'DM Sans', sans-serif;
    display: flex; align-items: center; justify-content: center; gap: 6px;
  }
  .ap-edit-btn:hover:not(:disabled) { background: var(--ap-primary-dark, #012040); }
  .ap-edit-btn:disabled { background: #e8eaed; color: #9ca3af; cursor: not-allowed; }
  .ap-edit-btn.cancel { background: #e5e7eb; color: #374151; }

  .ap-pw-bars { display: flex; gap: 4px; margin-bottom: 6px; }
  .ap-pw-bar { flex: 1; height: 3px; border-radius: 99px; background: #e8eaed; transition: background 0.25s; }
  .ap-pw-hint { font-size: 11px; color: #9ca3af; }

  .ap-session {
  .ap-session-title {
    font-size: 10px; font-weight: 600; color: #9ca3af;
    letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 8px;
  }
  .ap-session p { font-size: 12px; color: #6b7280; line-height: 1.6; }
  .ap-session strong { color: #374151; font-weight: 500; }

  .ap-toast {
    position: fixed; top: 20px; right: 20px; z-index: 99;
    display: flex; align-items: center; gap: 10px;
    padding: 12px 16px; border-radius: 12px;
    font-size: 13px; font-weight: 500;
    font-family: 'DM Sans', sans-serif;
    box-shadow: 0 4px 24px rgba(0,0,0,0.1);
    animation: toastIn 0.25s ease both;
    max-width: calc(100vw - 40px);
  }
  @media (max-width: 480px) {
    .ap-toast { left: 20px; right: 20px; max-width: none; }
  }
  .ap-toast.success { background: #fff; border: 1px solid #e8eaed; color: #1a1f2e; }
  .ap-toast.error { background: #fff5f5; border: 1px solid #fecaca; color: #dc2626; }
  .ap-toast-icon { font-size: 15px; flex-shrink: 0; }
  .ap-toast button { margin-left: 4px; opacity: 0.4; background: none; border: none; cursor: pointer; font-size: 13px; transition: opacity 0.15s; flex-shrink: 0; }
  .ap-toast button:hover { opacity: 0.8; }

  .ap-spinner { width: 32px; height: 32px; border-radius: 50%; border: 2px solid #e8eaed; border-top-color: var(--ap-primary, #023260); animation: spin 0.7s linear infinite; }

  /* ── Avatar crop modal ── */
  .ap-crop-backdrop {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: rgba(0,0,0,0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
  }
  .ap-crop-modal {
    width: 100%;
    max-width: 520px;
    max-height: calc(100vh - 32px);
    background: #fff;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 25px 60px rgba(0,0,0,0.3);
    display: flex;
    flex-direction: column;
  }
  .ap-crop-header {
    padding: 18px 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-shrink: 0;
  }
  .ap-crop-area {
    position: relative;
    width: 100%;
    height: 360px;
    background: #111;
    flex-shrink: 0;
  }
  .ap-crop-controls {
    padding: 18px 20px 20px;
    background: #fff;
    position: relative;
    z-index: 20;
    overflow-y: auto;
  }
  @media (max-width: 480px) {
    .ap-crop-header { padding: 14px 16px; }
    .ap-crop-area { height: 260px; }
    .ap-crop-controls { padding: 14px 16px 16px; }
  }

  @keyframes spin { to { transform: rotate(360deg); } }
  @keyframes toastIn { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:translateY(0); } }
  @keyframes fadeUp { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
  .ap-fadein { animation: fadeUp 0.35s ease both; }

  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: #f7f8fa; }
  ::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 4px; }
`;function t3({message:r,type:a,onClose:s}){return v.useEffect(()=>{const i=setTimeout(s,3500);return()=>clearTimeout(i)},[s]),l.jsxs("div",{className:`ap-toast ${a}`,children:[l.jsx("span",{className:"ap-toast-icon",children:a==="success"?"✓":"✕"}),r,l.jsx("button",{onClick:s,children:"✕"})]})}function ws({children:r}){return l.jsx("label",{style:{display:"block",fontSize:11,fontWeight:600,color:"#9ca3af",letterSpacing:"0.07em",textTransform:"uppercase",marginBottom:7},children:r})}function ka({label:r,value:a,extra:s}){return l.jsxs("div",{className:"ap-field",children:[l.jsx(ws,{children:r}),l.jsxs("div",{className:`ap-static ${s||""}`,children:[l.jsx("span",{children:a||"—"}),s==="email"&&l.jsx("span",{className:"ap-verified",children:"Verified"})]})]})}function Wm({open:r}){return r?l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),l.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}):l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),l.jsx("circle",{cx:"12",cy:"12",r:"3"})]})}function a3(){const[r,a]=v.useState(null),[s,i]=v.useState(null),[c,u]=v.useState(!0),[h,p]=v.useState(!1),[m,g]=v.useState(null),[y,x]=v.useState("profile"),[S,k]=v.useState(null),[T,C]=v.useState(!1),[_,z]=v.useState(""),[M,R]=v.useState(!1),[V,G]=v.useState(""),[Q,X]=v.useState(!1),[K,te]=v.useState(!1),[fe,pe]=v.useState(""),[xe,ke]=v.useState(!1),[Re,Se]=v.useState(!1),[H,W]=v.useState(""),[ne,F]=v.useState(""),[N,j]=v.useState(!1),[D,P]=v.useState(!1),ee=v.useRef(null),[re,me]=v.useState(!1),[we,Ie]=v.useState(!1),[Ae,fa]=v.useState(null),[Na,aa]=v.useState({x:0,y:0}),[pa,Tt]=v.useState(1),[fr,Ha]=v.useState(null),Je=(Z,ve="success")=>g({message:Z,type:ve});v.useEffect(()=>{(async()=>{try{const{data:{user:Be},error:Xe}=await ae.auth.getUser();if(Xe||!Be)throw Xe||new Error("Not authenticated");a(Be);const{data:He,error:Yt}=await ae.from("profiles").select("*").eq("id",Be.id).single();if(Yt&&Yt.code!=="PGRST116")throw Yt;He?(i(He),z(He.phone_number||""),G(He.linkedin_url||""),k(He.avatar_url||null)):(console.warn("No profile row found for user:",Be.id,Yt),Je("Your profile isn't set up yet — your registration may still be pending approval.","error"))}catch(Be){Je(Be.message||"Failed to load profile","error")}finally{u(!1)}})();const{data:{subscription:ve}}=ae.auth.onAuthStateChange((Be,Xe)=>{Xe||a(null)});return()=>ve.unsubscribe()},[]);const vn=Z=>{const ve=Z.target.files?.[0];if(Z.target.value="",!ve)return;if(!ve.type.startsWith("image/")){Je("Please select a valid image.","error");return}const Be=URL.createObjectURL(ve);fa(Be),aa({x:0,y:0}),Tt(1),Ha(null),Ie(!0)},Xr=v.useCallback((Z,ve)=>{Ha(ve)},[]),pr=async(Z,ve)=>{const Be=await new Promise((Ut,Pa)=>{const At=new Image;At.onload=()=>Ut(At),At.onerror=Pa,At.src=Z}),Xe=document.createElement("canvas"),He=800;return Xe.width=He,Xe.height=He,Xe.getContext("2d").drawImage(Be,ve.x,ve.y,ve.width,ve.height,0,0,He,He),new Promise((Ut,Pa)=>{Xe.toBlob(At=>{if(!At){Pa(new Error("Could not create cropped image."));return}Ut(At)},"image/png")})},mr=async()=>{if(!(!Ae||!fr||!r?.id)){me(!0);try{const Z=await pr(Ae,fr),ve=new File([Z],`avatar_${Date.now()}.png`,{type:"image/png"}),Be=`${r.id}/avatar_${Date.now()}.png`,{error:Xe}=await ae.storage.from("avatars").upload(Be,ve,{upsert:!0,contentType:"image/png"});if(Xe)throw Xe;const{data:He}=ae.storage.from("avatars").getPublicUrl(Be),Yt=`${He.publicUrl}?v=${Date.now()}`,{error:Ut}=await ae.from("profiles").update({avatar_url:Yt,updated_at:new Date().toISOString()}).eq("id",r.id);if(Ut)throw Ut;k(Yt),window.dispatchEvent(new Event("avatar-updated")),Ie(!1),Ae&&URL.revokeObjectURL(Ae),fa(null),aa({x:0,y:0}),Tt(1),Je("Profile picture updated!")}catch(Z){console.error("Avatar crop/upload failed:",Z),Je(Z.message||"Upload failed","error")}finally{me(!1)}}},wn=()=>{Ae&&URL.revokeObjectURL(Ae),Ie(!1),fa(null),aa({x:0,y:0}),Tt(1),Ha(null),ee.current&&(ee.current.value="")},kn=async()=>{if(r){p(!0);try{const{error:Z}=await ae.from("profiles").update({phone_number:_.trim(),updated_at:new Date().toISOString()}).eq("id",r.id);if(Z)throw Z;i(ve=>({...ve,phone_number:_.trim()})),Je("Phone number updated!")}catch(Z){Je(Z.message||"Failed to save","error")}finally{p(!1)}}},wt=async()=>{if(!r)return;const Z=V.trim(),ve=Z?Zg(Z):"";if(ve&&!JS(ve)){Je("Please enter a valid LinkedIn URL (e.g. linkedin.com/in/yourname), or leave it blank.","error");return}te(!0);try{const{error:Be}=await ae.from("profiles").update({linkedin_url:ve||null,updated_at:new Date().toISOString()}).eq("id",r.id);if(Be)throw Be;i(Xe=>({...Xe,linkedin_url:ve||null})),G(ve),Je("LinkedIn link updated!"),X(!1)}catch(Be){Je(Be.message||"Failed to save","error")}finally{te(!1)}},Sn=async()=>{const Z=fe.trim();if(!Z){Je("Please enter a new email address","error");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Z)){Je("Please enter a valid email address","error");return}if(Z===r?.email){Je("That's already your current email","error");return}Se(!0);try{const{error:ve}=await ae.auth.updateUser({email:Z});if(ve)throw ve;Je("Confirmation link sent! Check both your old and new inbox to complete the change."),ke(!1),pe("")}catch(ve){Je(ve.message||"Failed to update email","error")}finally{Se(!1)}},Kr=async()=>{if(!H||!ne){Je("Please fill in all fields","error");return}if(H.length<8){Je("Password must be at least 8 characters","error");return}if(H!==ne){Je("Passwords do not match","error");return}p(!0);try{const{error:Z}=await ae.auth.updateUser({password:H});if(Z)throw Z;W(""),F(""),Je("Password changed successfully!")}catch(Z){Je(Z.message||"Failed to change password","error")}finally{p(!1)}};if(c)return l.jsxs("div",{style:{minHeight:"100vh",background:"linear-gradient(to bottom, #f5f8fb, #d3dde8)",display:"flex",alignItems:"center",justifyContent:"center"},children:[l.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"}),l.jsx("div",{className:"ap-spinner"})]});if(!r)return l.jsx("div",{style:{minHeight:"100vh",background:"linear-gradient(to bottom, #f5f8fb, #d3dde8)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("p",{style:{fontSize:14,color:"#9ca3af"},children:"Not authenticated. Please sign in."})});const{first_name:$a,last_name:Ee,tier:ma,team:gr,position:Rs,faculty:jn,level:Ca,gender:ht,date_of_birth:Ot,phone_number:ft,linkedin_url:qa}=s||{},ze=WS(ht),ga=ma==="Highboard"||ma==="Mentor",Ge=FS(ma,gr,Rs),J=H.length===0?-1:H.length<8?0:H.length<12?1:H.length<16?2:3,Ze=["#ef4444","#f59e0b","#3b82f6","#059669"],gt=["Too short","Acceptable","Good","Strong"],bt=l.jsx("div",{style:{width:14,height:14,borderRadius:"50%",border:"2px solid rgba(255,255,255,0.3)",borderTopColor:"#fff",animation:"spin 0.7s linear infinite"}});return l.jsxs(l.Fragment,{children:[we&&Ae&&l.jsx("div",{className:"ap-crop-backdrop",children:l.jsxs("div",{className:"ap-crop-modal",children:[l.jsxs("div",{className:"ap-crop-header",children:[l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:17,fontWeight:600,color:ze.primary},children:"Edit Profile Photo"}),l.jsx("div",{style:{fontSize:12,color:"#9ca3af",marginTop:3},children:"Move and zoom your photo to choose the perfect crop"})]}),l.jsx("button",{type:"button",onClick:wn,disabled:re,style:{width:32,height:32,borderRadius:"50%",border:"none",background:"#f3f4f6",color:"#6b7280",fontSize:20,cursor:"pointer",flexShrink:0},children:"×"})]}),l.jsx("div",{className:"ap-crop-area",children:l.jsx(Jg,{image:Ae,crop:Na,zoom:pa,aspect:1,cropShape:"round",showGrid:!1,onCropChange:aa,onZoomChange:Tt,onCropComplete:Xr})}),l.jsxs("div",{className:"ap-crop-controls",children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:8,fontSize:12,fontWeight:600,color:ze.primary},children:[l.jsx("span",{children:"Zoom"}),l.jsxs("span",{children:[pa.toFixed(1),"×"]})]}),l.jsx("input",{type:"range",min:"1",max:"3",step:"0.1",value:pa,onChange:Z=>Tt(Number(Z.target.value)),style:{width:"100%",accentColor:ze.primary,display:"block"},disabled:re}),l.jsxs("div",{style:{display:"flex",gap:10,marginTop:20,width:"100%"},children:[l.jsx("button",{type:"button",onClick:wn,disabled:re,style:{flex:1,minWidth:0,height:48,padding:"11px 16px",borderRadius:12,border:"1px solid #e5e7eb",background:"#fff",color:"#374151",fontWeight:600,fontSize:15,cursor:re?"not-allowed":"pointer",opacity:re?.6:1,transition:"background 0.15s, transform 0.1s"},onMouseEnter:Z=>{re||(Z.currentTarget.style.background="#f3f4f6")},onMouseLeave:Z=>{Z.currentTarget.style.background="#fff"},children:"Cancel"}),l.jsxs("button",{type:"button",onClick:mr,disabled:re,style:{flex:1,minWidth:0,height:48,padding:"11px 16px",borderRadius:12,border:"none",background:re?"#e8eaed":ze.primary,color:re?"#9ca3af":"#fff",fontWeight:600,fontSize:15,cursor:re?"not-allowed":"pointer",boxShadow:re?"none":`0 6px 16px ${ze.primary}40`,display:"flex",alignItems:"center",justifyContent:"center",gap:8,transition:"background 0.15s, transform 0.1s, box-shadow 0.2s"},onMouseEnter:Z=>{re||(Z.currentTarget.style.background=ze.primaryDark)},onMouseLeave:Z=>{re||(Z.currentTarget.style.background=ze.primary)},children:[re&&l.jsx("span",{style:{width:14,height:14,borderRadius:"50%",border:"2px solid rgba(0,0,0,0.12)",borderTopColor:"#9ca3af",animation:"spin 0.7s linear infinite"}}),re?"Saving...":"Save Photo"]})]})]})]})}),l.jsx("style",{children:e3}),l.jsxs("div",{className:"ap-root ap-fadein",style:{"--ap-primary":ze.primary,"--ap-primary-dark":ze.primaryDark,"--ap-bg-start":ze.bgStart,"--ap-bg-end":ze.bgEnd,"--ap-badge-bg":ze.badgeBg,"--ap-badge-border":ze.badgeBorder,"--ap-focus-ring":ze.focusRing,"--ap-static-bg":ze.staticBg,"--ap-static-border":ze.staticBorder,"--ap-input-bg":ze.inputBg,"--ap-input-border":ze.inputBorder,"--ap-divider-color":ze.dividerColor},children:[l.jsx("div",{className:"ap-cjk-layer",children:QS.map((Z,ve)=>l.jsx("span",{className:"ap-cjk-char",style:{top:Z.top,left:Z.left,fontSize:Z.size,transform:`rotate(${Z.rotate}deg)`},children:Z.char},ve))}),ZS.map((Z,ve)=>l.jsx("div",{className:"ap-petal",style:{left:Z.left,background:Z.tone==="A"?ze.petalA:ze.petalB,animationDuration:Z.duration,animationDelay:Z.delay}},ve)),l.jsxs("div",{className:"ap-layout",children:[l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:l.jsxs("div",{className:"ap-card",children:[l.jsxs("div",{className:"ap-sidebar-top",children:[l.jsxs("div",{className:"ap-avatar-wrap",children:[S?l.jsx("img",{src:S,alt:"avatar"},S):l.jsx("div",{className:"ap-avatar-placeholder",children:XS($a,Ee)}),l.jsx("button",{className:"ap-avatar-overlay",onClick:()=>ee.current?.click(),disabled:re,children:re?"…":"Change"}),l.jsx("input",{ref:ee,type:"file",accept:"image/*",style:{display:"none"},onChange:vn})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"ap-name",children:[$a," ",Ee]}),l.jsx("div",{className:"ap-role",children:Ge})]}),ma&&l.jsxs("div",{className:"ap-badge",children:[l.jsx("span",{className:"ap-badge-dot"}),ma]})]}),l.jsx("div",{className:"ap-info-list",children:[{label:"Email",value:r.email},{label:"Gender",value:Fm(ht)},{label:"Phone",value:ft||"—"},{label:"LinkedIn",value:qa?l.jsx("a",{href:qa,target:"_blank",rel:"noopener noreferrer",children:"View profile"}):"—"},{label:"Date of Birth",value:Ot?new Date(Ot).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}):"—"},{label:"Faculty",value:Km(jn)},{label:"Level",value:Xm(Ca)},...ga?[]:[{label:"Team",value:gr||"—"}],{label:"Position",value:Ge}].map(Z=>l.jsxs("div",{className:"ap-info-row",children:[l.jsx("span",{className:"ap-info-label",children:Z.label}),l.jsx("span",{className:"ap-info-value",children:Z.value})]},Z.label))})]})}),l.jsx("div",{children:l.jsxs("div",{className:"ap-card",children:[l.jsx("div",{className:"ap-tabs",children:[{id:"profile",label:"Profile"},{id:"security",label:"Security"}].map(Z=>l.jsx("button",{className:`ap-tab ${y===Z.id?"active":""}`,onClick:()=>x(Z.id),children:Z.label},Z.id))}),l.jsxs("div",{className:"ap-body",children:[y==="profile"&&l.jsxs("div",{className:"ap-fields",children:[l.jsxs("div",{children:[l.jsx("div",{className:"ap-section-title",children:"Personal Information"}),l.jsx("div",{className:"ap-section-sub",children:"Update your phone number, LinkedIn, and email below. Other details are managed by your organization."})]}),l.jsxs("div",{className:"ap-row-2",children:[l.jsx(ka,{label:"First Name",value:$a}),l.jsx(ka,{label:"Last Name",value:Ee})]}),l.jsxs("div",{className:"ap-field",children:[l.jsx(ws,{children:"Email Address"}),xe?l.jsxs("div",{children:[l.jsxs("div",{className:"ap-edit-row",children:[l.jsx("input",{className:"ap-input",type:"email",value:fe,onChange:Z=>pe(Z.target.value),placeholder:"new@email.com"}),l.jsx("button",{onClick:Sn,disabled:Re,className:"ap-edit-btn",children:Re?bt:"Save"}),l.jsx("button",{className:"ap-edit-btn cancel",onClick:()=>{ke(!1),pe("")},children:"Cancel"})]}),l.jsx("p",{style:{fontSize:11,color:"#9ca3af",marginTop:6},children:"You'll need to confirm this change via a link sent to your inbox before it takes effect."})]}):l.jsxs("div",{className:"ap-edit-row",children:[l.jsxs("div",{className:"ap-static email",children:[l.jsx("span",{children:r.email}),l.jsx("span",{className:"ap-verified",children:"Verified"})]}),l.jsxs("button",{className:"ap-edit-btn",onClick:()=>{pe(r.email||""),ke(!0)},children:[l.jsx(rd,{size:13})," Edit"]})]})]}),l.jsxs("div",{className:"ap-row-2",children:[l.jsx(ka,{label:"Date of Birth",value:Ot?new Date(Ot).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}):"—"}),l.jsxs("div",{className:"ap-field",children:[l.jsx(ws,{children:"Phone Number"}),M?l.jsxs("div",{className:"ap-edit-row",children:[l.jsx("input",{className:"ap-input",type:"tel",value:_,onChange:Z=>z(Z.target.value),placeholder:"+20 1XX XXX XXXX"}),l.jsx("button",{onClick:async()=>{await kn(),R(!1)},disabled:h||_===(s?.phone_number||""),className:"ap-edit-btn",children:h?bt:"Save"}),l.jsx("button",{className:"ap-edit-btn cancel",onClick:()=>{z(s?.phone_number||""),R(!1)},children:"Cancel"})]}):l.jsxs("div",{className:"ap-edit-row",children:[l.jsx("div",{className:"ap-static",children:ft||"—"}),l.jsxs("button",{className:"ap-edit-btn",onClick:()=>R(!0),children:[l.jsx(rd,{size:13})," Edit"]})]})]})]}),l.jsxs("div",{className:"ap-field",children:[l.jsx(ws,{children:"LinkedIn (optional)"}),Q?l.jsxs("div",{children:[l.jsxs("div",{className:"ap-edit-row",children:[l.jsx("input",{className:"ap-input",type:"text",value:V,onChange:Z=>G(Z.target.value),placeholder:"linkedin.com/in/yourname"}),l.jsx("button",{onClick:wt,disabled:K||V.trim()===(s?.linkedin_url||""),className:"ap-edit-btn",children:K?bt:"Save"}),l.jsx("button",{className:"ap-edit-btn cancel",onClick:()=>{G(s?.linkedin_url||""),X(!1)},children:"Cancel"})]}),l.jsx("p",{style:{fontSize:11,color:"#9ca3af",marginTop:6},children:`You can type it with or without "https://" — we'll fix it up automatically.`})]}):l.jsxs("div",{className:"ap-edit-row",children:[l.jsx("div",{className:"ap-static",style:{gap:6,justifyContent:"space-between"},children:qa?l.jsxs("a",{href:qa,target:"_blank",rel:"noopener noreferrer",style:{color:"var(--ap-primary)",display:"flex",alignItems:"center",gap:6,textDecoration:"none",overflowWrap:"anywhere"},children:[l.jsx(zl,{size:13,style:{flexShrink:0}}),qa]}):l.jsx("span",{children:"—"})}),l.jsxs("button",{className:"ap-edit-btn",onClick:()=>{G(s?.linkedin_url||""),X(!0)},children:[l.jsx(rd,{size:13})," Edit"]})]})]}),l.jsx("div",{className:"ap-divider"}),l.jsxs("div",{children:[l.jsx("div",{className:"ap-org-label",children:"Organization Details"}),l.jsxs("div",{className:"ap-fields",children:[l.jsxs("div",{className:"ap-row-3",children:[l.jsx(ka,{label:"Faculty",value:Km(jn)}),l.jsx(ka,{label:"Level",value:Xm(Ca)}),l.jsx(ka,{label:"Gender",value:Fm(ht)})]}),ga?l.jsxs("div",{className:"ap-row-2",children:[l.jsx(ka,{label:"Tier",value:ma}),l.jsx(ka,{label:"Position",value:Ge})]}):l.jsxs("div",{className:"ap-row-3",children:[l.jsx(ka,{label:"Tier",value:ma}),l.jsx(ka,{label:"Team",value:gr}),l.jsx(ka,{label:"Position",value:Ge})]})]})]})]}),y==="security"&&l.jsxs("div",{className:"ap-fields",children:[l.jsxs("div",{children:[l.jsx("div",{className:"ap-section-title",children:"Change Password"}),l.jsx("div",{className:"ap-section-sub",children:"Choose a strong password of at least 8 characters."})]}),H&&l.jsxs("div",{children:[l.jsx("div",{className:"ap-pw-bars",children:[0,1,2,3].map(Z=>l.jsx("div",{className:"ap-pw-bar",style:{background:Z<=J?Ze[J]:"#e8eaed"}},Z))}),l.jsx("span",{className:"ap-pw-hint",style:{color:J>=0?Ze[J]:"#9ca3af"},children:J>=0?gt[J]:""})]}),l.jsxs("div",{className:"ap-field",children:[l.jsx(ws,{children:"New Password"}),l.jsxs("div",{style:{position:"relative"},children:[l.jsx("input",{className:"ap-input",type:N?"text":"password",value:H,onChange:Z=>W(Z.target.value),placeholder:"••••••••",style:{paddingRight:42}}),l.jsx("button",{type:"button",onClick:()=>j(Z=>!Z),style:{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"#9ca3af",display:"flex",alignItems:"center"},children:l.jsx(Wm,{open:N})})]})]}),l.jsxs("div",{className:"ap-field",children:[l.jsx(ws,{children:"Confirm Password"}),l.jsxs("div",{style:{position:"relative"},children:[l.jsx("input",{className:"ap-input",type:D?"text":"password",value:ne,onChange:Z=>F(Z.target.value),placeholder:"••••••••",style:{paddingRight:42,borderColor:ne&&ne!==H?"#fca5a5":void 0}}),l.jsx("button",{type:"button",onClick:()=>P(Z=>!Z),style:{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"#9ca3af",display:"flex",alignItems:"center"},children:l.jsx(Wm,{open:D})})]}),ne&&ne!==H&&l.jsx("p",{style:{fontSize:11,color:"#ef4444",marginTop:5},children:"Passwords do not match"})]}),l.jsx("button",{onClick:Kr,disabled:h||!H||H!==ne,className:"ap-btn",children:h?l.jsxs(l.Fragment,{children:[bt," Updating…"]}):"Update Password"}),l.jsxs("div",{className:"ap-session",children:[l.jsx("div",{className:"ap-session-title",children:"Current Session"}),l.jsxs("p",{children:["Signed in as ",l.jsx("strong",{children:r.email})]}),l.jsxs("p",{style:{marginTop:4},children:["Last sign in:"," ",r.last_sign_in_at?new Date(r.last_sign_in_at).toLocaleString("en-GB",{dateStyle:"medium",timeStyle:"short"}):"—"]})]}),l.jsx("button",{onClick:()=>C(!0),className:"ap-btn-danger",style:{marginTop:"20px"},children:"Delete Account"})]})]})]})})]}),m&&l.jsx(t3,{message:m.message,type:m.type,onClose:()=>g(null)}),l.jsx(VS,{open:T,onClose:()=>C(!1),onDeleted:()=>{window.location.href="/"}})]})]})}const Qg=v.createContext(),r3=({children:r})=>{const[a,s]=v.useState(null),[i,c]=v.useState(null),[u,h]=v.useState(!0);return v.useEffect(()=>{let p=!0;(async()=>{const{data:{session:y}}=await ae.auth.getSession();p&&(s(y),c(y?.user??null),h(!1))})();const{data:g}=ae.auth.onAuthStateChange((y,x)=>{p&&(s(x),c(x?.user??null),h(!1))});return()=>{p=!1,g.subscription.unsubscribe()}},[]),l.jsx(Qg.Provider,{value:{session:a,user:i,loading:u},children:r})},n3=()=>v.useContext(Qg),Zm="ieee-media",s3=r=>{if(!r)return!1;const a=(r.tier||"").toLowerCase().replace(/\s+/g,""),s=(r.team||"").toLowerCase();return(r.role||"").toLowerCase()==="admin"||a==="highboard"||a==="board"&&s==="media"},i3=()=>{try{let r=localStorage.getItem("ieee_anon_id");return r||(r="anon_"+Math.random().toString(36).slice(2)+Date.now(),localStorage.setItem("ieee_anon_id",r)),r}catch{return"anon_fallback"}},o3=r=>new Date(r).toLocaleDateString("en-GB",{weekday:"short",day:"numeric",month:"short",year:"numeric"}),l3=r=>new Date(r).toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"}),Qm=r=>/\.(jpg|jpeg|png|gif|webp|svg)(\?|$)/i.test(r),Hl=r=>(r||[]).map(a=>typeof a=="string"?{id:a,name:"Member"}:a),eb=r=>(Array.isArray(r)?r:[r]).filter(Boolean),c3=(r,a)=>{const s=eb(a);return s.length===0?!1:Hl(r).some(i=>s.includes(i.id))},u3=(r,a,s,i)=>{const c=Hl(r),u=eb(a);return u.length>0&&c.some(p=>u.includes(p.id))?c.filter(p=>!u.includes(p.id)):[...c,{id:s,name:i}]},d3=[{left:"2%",color:"#cc2233",duration:"9s",delay:"0s",size:1},{left:"8%",color:"#023260",duration:"15s",delay:"2.2s",size:1.6},{left:"14%",color:"#023260",duration:"12s",delay:"1.4s",size:1},{left:"20%",color:"#cc2233",duration:"17s",delay:"4.8s",size:1.7},{left:"25%",color:"#023260",duration:"11s",delay:"2s",size:1},{left:"31%",color:"#cc2233",duration:"14s",delay:"0.4s",size:1.5},{left:"36%",color:"#cc2233",duration:"10s",delay:"3.6s",size:1},{left:"43%",color:"#023260",duration:"16s",delay:"3.2s",size:1.6},{left:"50%",color:"#cc2233",duration:"8s",delay:"4.5s",size:1},{left:"56%",color:"#023260",duration:"13.5s",delay:"1.8s",size:1.5},{left:"61%",color:"#023260",duration:"13s",delay:"0.8s",size:1},{left:"67%",color:"#cc2233",duration:"18s",delay:"5.6s",size:1.7},{left:"72%",color:"#023260",duration:"13s",delay:"1s",size:1},{left:"78%",color:"#cc2233",duration:"12.5s",delay:"3.9s",size:1.4},{left:"82%",color:"#cc2233",duration:"9.5s",delay:"5.2s",size:1},{left:"87%",color:"#023260",duration:"15.5s",delay:"0.6s",size:1.6},{left:"90%",color:"#cc2233",duration:"10s",delay:"3s",size:1},{left:"96%",color:"#023260",duration:"11.5s",delay:"2.6s",size:1.3}],h3=[{top:"6%",left:"10%",size:260,color:"rgba(2,50,96,0.10)",darkColor:"rgba(74,158,255,0.16)",duration:"22s",delay:"0s"},{top:"18%",left:"78%",size:320,color:"rgba(204,34,51,0.08)",darkColor:"rgba(217,37,37,0.18)",duration:"26s",delay:"3s"},{top:"55%",left:"4%",size:280,color:"rgba(204,34,51,0.07)",darkColor:"rgba(217,37,37,0.14)",duration:"24s",delay:"6s"},{top:"70%",left:"85%",size:300,color:"rgba(2,50,96,0.09)",darkColor:"rgba(74,158,255,0.15)",duration:"28s",delay:"2s"},{top:"38%",left:"45%",size:240,color:"rgba(2,50,96,0.06)",darkColor:"rgba(74,158,255,0.12)",duration:"20s",delay:"5s"}],f3=[{char:"动",size:240,tint:"blue",pos:{bottom:"-3%",left:"-4%"},rotate:-6,delay:"0s"},{char:"态",size:175,tint:"red",pos:{top:"4%",right:"-3%"},rotate:8,delay:"1.6s"},{char:"新",size:125,tint:"blue",pos:{top:"40%",left:"3%"},rotate:4,delay:"3.1s"},{char:"闻",size:145,tint:"red",pos:{bottom:"10%",right:"2%"},rotate:-9,delay:"0.8s"},{char:"记",size:165,tint:"blue",pos:{top:"64%",left:"-3%"},rotate:5,delay:"2.4s"},{char:"录",size:130,tint:"blue",pos:{top:"84%",right:"9%"},rotate:-7,delay:"3.9s"},{char:"分",size:110,tint:"red",pos:{top:"18%",left:"20%"},rotate:6,delay:"1.1s",hideMobile:!0},{char:"享",size:140,tint:"blue",pos:{top:"52%",right:"20%"},rotate:-5,delay:"2.9s",hideMobile:!0},{char:"刻",size:120,tint:"blue",pos:{bottom:"32%",left:"38%"},rotate:7,delay:"0.5s",hideMobile:!0},{char:"圈",size:150,tint:"red",pos:{top:"92%",left:"16%"},rotate:-4,delay:"3.3s",hideMobile:!0},{char:"队",size:90,tint:"red",pos:{top:"28%",right:"42%"},rotate:9,delay:"1.9s",hideMobile:!0},{char:"友",size:80,tint:"blue",pos:{top:"72%",left:"48%"},rotate:-8,delay:"0.3s",hideMobile:!0}],p3=`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;700&family=Noto+Sans+SC:wght@300;400;500&display=swap');

  .tl-root { font-family: 'Noto Sans SC', sans-serif; }
  .tl-serif { font-family: 'Noto Serif SC', serif; }

  /* ── Page background (matches About page, with slow ambient drift + dark mode) ── */
  .tl-page-bg {
    background: linear-gradient(120deg, #f5f8fb, #d3dde8, #eef3f8, #d8e2ec);
    background-size: 300% 300%;
    animation: tlBgDrift 30s ease-in-out infinite;
    position: relative;
    overflow: hidden;
    transition: background 0.4s ease;
  }
  @keyframes tlBgDrift {
    0%   { background-position: 0% 30%; }
    50%  { background-position: 100% 70%; }
    100% { background-position: 0% 30%; }
  }
  .dark .tl-page-bg {
    background:
      radial-gradient(ellipse 950px 700px at 8% 5%, rgba(13,90,167,0.24), transparent 60%),
      radial-gradient(ellipse 850px 650px at 92% 25%, rgba(217,37,37,0.18), transparent 60%),
      radial-gradient(ellipse 1000px 800px at 50% 100%, rgba(13,90,167,0.16), transparent 65%),
      linear-gradient(to bottom, #001233, #00040c 65%, #00040c);
    background-size: 100% 100%;
    animation: none;
  }

  /* ── Chinese bg characters — drifting motion, brighter/more visible in dark mode ── */
  .tl-bg-char {
    position: absolute;
    font-family: 'Noto Serif SC', 'PingFang SC', 'Songti SC', 'SimSun', serif;
    font-weight: 900;
    pointer-events: none;
    user-select: none;
    line-height: 1;
    z-index: 0;
    animation: tlCharSway 14s ease-in-out infinite;
    transition: color 0.4s ease, opacity 0.4s ease;
  }
  @keyframes tlCharSway {
    0%, 100% { transform: translateY(0) rotate(var(--tl-rot, 0deg)); }
    50%      { transform: translateY(-16px) rotate(calc(var(--tl-rot, 0deg) + 1deg)); }
  }
  .dark .tl-bg-char-blue {
    color: #4a9eff !important;
    opacity: 0.22;
    filter: drop-shadow(0 0 22px rgba(74,158,255,0.3));
  }
  .dark .tl-bg-char-red {
    color: #ff5b5b !important;
    opacity: 0.2;
    filter: drop-shadow(0 0 22px rgba(217,37,37,0.34));
  }
  @media (prefers-reduced-motion: reduce) {
    .tl-bg-char { animation: none !important; }
  }

  .tl-glow {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    user-select: none;
    z-index: 0;
    filter: blur(6px);
    animation: tlGlowDrift linear infinite, tlGlowPulse ease-in-out infinite;
    transition: background 0.4s ease;
  }
  @keyframes tlGlowDrift {
    0%   { transform: translate(0, 0) scale(1); }
    25%  { transform: translate(30px, -24px) scale(1.06); }
    50%  { transform: translate(-18px, 18px) scale(0.96); }
    75%  { transform: translate(-30px, -14px) scale(1.04); }
    100% { transform: translate(0, 0) scale(1); }
  }
  @keyframes tlGlowPulse {
    0%, 100% { opacity: 0.7; }
    50%      { opacity: 1; }
  }
  .tl-petal {
    position: absolute;
    width: 7px;
    height: 11px;
    border-radius: 80% 0 80% 0;
    opacity: 0;
    animation: tlFallPetal linear infinite;
    top: -20px;
    z-index: 0;
  }
  @keyframes tlFallPetal {
    0%   { transform: translateY(-5vh) rotate(0deg) translateX(0); opacity: 0; }
    8%   { opacity: 0.55; }
    50%  { transform: translateY(50vh) rotate(270deg) translateX(-24px); }
    92%  { opacity: 0.55; }
    100% { transform: translateY(105vh) rotate(540deg) translateX(50px); opacity: 0; }
  }

  /* ── Glass cards / composer / search — light + dark, same recipe as About's panels ── */
  .tl-card {
    background: rgba(255,255,255,0.58);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255,255,255,0.6);
    border-radius: 20px;
    box-shadow: 0 4px 20px rgba(2,50,96,0.07);
    transition: box-shadow 0.25s ease, transform 0.25s ease, background 0.4s ease, border-color 0.4s ease;
    overflow: hidden;
    margin-bottom: 14px;
  }
  .tl-card:hover {
    background: rgba(255,255,255,0.72);
    box-shadow: 0 10px 32px rgba(2,50,96,0.12);
    transform: translateY(-2px);
  }
  .dark .tl-card {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.35);
  }
  .dark .tl-card:hover {
    background: rgba(255, 255, 255, 0.09);
    box-shadow: 0 10px 32px rgba(0, 0, 0, 0.45), 0 0 30px rgba(74,158,255,0.15);
  }

  .tl-composer {
    background: rgba(255,255,255,0.58);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255,255,255,0.6);
    border-radius: 20px;
    box-shadow: 0 4px 20px rgba(2,50,96,0.07);
    padding: 14px 16px;
    margin-bottom: 14px;
    position: relative;
    overflow: hidden;
    transition: box-shadow 0.25s ease, background 0.4s ease, border-color 0.4s ease;
  }
  .tl-composer:hover {
    background: rgba(255,255,255,0.72);
    box-shadow: 0 10px 32px rgba(2,50,96,0.12);
  }
  .dark .tl-composer {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.35);
  }
  .dark .tl-composer:hover {
    background: rgba(255, 255, 255, 0.09);
    box-shadow: 0 10px 32px rgba(0, 0, 0, 0.45), 0 0 26px rgba(74,158,255,0.15);
  }
  .tl-composer-btn {
    flex: 1;
    text-align: left;
    background: rgba(2,50,96,0.05);
    border: 1px solid rgba(2,50,96,0.1);
    border-radius: 999px;
    padding: 9px 18px;
    font-size: 12px;
    color: rgba(2,50,96,0.4);
    cursor: pointer;
    transition: background 0.15s ease, color 0.4s ease, border-color 0.4s ease;
    font-family: 'Noto Sans SC', sans-serif;
  }
  .tl-composer-btn:hover { background: rgba(2,50,96,0.08); }
  .dark .tl-composer-btn {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 255, 255, 0.14);
    color: rgba(255, 255, 255, 0.5);
  }
  .dark .tl-composer-btn:hover { background: rgba(255, 255, 255, 0.1); }

  .tl-search {
    background: rgba(255,255,255,0.58);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255,255,255,0.6);
    border-radius: 999px;
    box-shadow: 0 4px 20px rgba(2,50,96,0.07);
    padding: 10px 18px;
    margin-bottom: 14px;
    display: flex; align-items: center; gap: 10px;
    transition: box-shadow 0.25s ease, background 0.4s ease, border-color 0.4s ease;
  }
  .tl-search:hover {
    background: rgba(255,255,255,0.72);
    box-shadow: 0 10px 32px rgba(2,50,96,0.12);
  }
  .dark .tl-search {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.35);
  }
  .dark .tl-search:hover {
    background: rgba(255, 255, 255, 0.09);
    box-shadow: 0 10px 32px rgba(0, 0, 0, 0.45), 0 0 24px rgba(74,158,255,0.15);
  }
  .tl-search input {
    flex: 1; background: transparent; border: none; outline: none;
    font-family: 'Noto Sans SC', sans-serif; font-size: 13px; color: #023260;
    transition: color 0.4s ease;
  }
  .tl-search input::placeholder { color: rgba(2,50,96,0.3); transition: color 0.4s ease; }
  .dark .tl-search input { color: #f5f8fb; }
  .dark .tl-search input::placeholder { color: rgba(255,255,255,0.32); }
  .tl-search-icon { color: rgba(2,50,96,0.3); font-size: 16px; transition: color 0.4s ease; }
  .dark .tl-search-icon { color: rgba(255,255,255,0.35); }
  .tl-search-clear {
    background: none; border: none; cursor: pointer;
    color: rgba(2,50,96,0.3); font-size: 18px; line-height: 1;
    transition: color 0.4s ease;
  }
  .dark .tl-search-clear { color: rgba(255,255,255,0.4); }

  .tl-like-btn {
    display: flex; align-items: center; gap: 6px;
    padding: 5px 14px; border-radius: 999px; font-size: 12px; font-weight: 500;
    border: 1px solid rgba(2,50,96,0.15); cursor: pointer; transition: all 0.15s;
    font-family: 'Noto Sans SC', sans-serif;
  }
  .tl-like-btn.liked {
    background: #fff0f0; border-color: #f5c0c5; color: #cc2233;
  }
  .tl-like-btn:not(.liked) {
    background: transparent; color: #6a8aaa;
  }
  .tl-like-btn:not(.liked):hover { background: #f5f8ff; }
  .tl-like-btn.liked svg { animation: tlHeartPop 0.35s ease; }
  @keyframes tlHeartPop {
    0%   { transform: scale(1); }
    35%  { transform: scale(1.35); }
    100% { transform: scale(1); }
  }
  .dark .tl-like-btn { border-color: rgba(255,255,255,0.15); }
  .dark .tl-like-btn.liked { background: rgba(217,37,37,0.16); border-color: rgba(217,37,37,0.4); color: #ff8080; }
  .dark .tl-like-btn:not(.liked) { color: rgba(255,255,255,0.5); }
  .dark .tl-like-btn:not(.liked):hover { background: rgba(255,255,255,0.06); }

  .tl-like-count-btn {
    background: none; border: none; cursor: pointer; padding: 0;
    font-size: 12px; font-weight: 600;
    font-family: 'Noto Sans SC', sans-serif;
    transition: color 0.4s ease;
  }
  .tl-likers-row {
    display: flex; align-items: center; gap: 10px; padding: 9px 0;
    border-bottom: 1px solid rgba(2,50,96,0.06);
    transition: border-color 0.4s ease;
  }
  .tl-likers-row:last-child { border-bottom: none; }
  .dark .tl-likers-row { border-bottom-color: rgba(255,255,255,0.08); }

  .tl-comment-btn {
    font-size: 12px; font-weight: 600; cursor: pointer;
    transition: color 0.15s; border: none; background: none; padding: 0;
    font-family: 'Noto Sans SC', sans-serif;
  }

  .tl-comment-input {
    flex: 1; background: transparent; border: none; outline: none;
    font-size: 12px; color: #023260; font-family: 'Noto Sans SC', sans-serif;
    transition: color 0.4s ease;
  }
  .tl-comment-input::placeholder { color: rgba(2,50,96,0.3); transition: color 0.4s ease; }
  .dark .tl-comment-input { color: #f5f8fb; }
  .dark .tl-comment-input::placeholder { color: rgba(255,255,255,0.32); }

  .tl-comment-box {
    flex: 1; display: flex; align-items: center; gap: 8px;
    background: #f5f8ff; border: 1px solid rgba(2,50,96,0.1);
    border-radius: 999px; padding: 6px 14px;
    transition: background 0.4s ease, border-color 0.4s ease;
  }
  .dark .tl-comment-box {
    background: rgba(255,255,255,0.06);
    border-color: rgba(255,255,255,0.14);
  }

  .tl-guest-input {
    width: 100%; background: #f5f8ff;
    border: 1px solid rgba(2,50,96,0.1); border-radius: 999px;
    padding: 6px 14px; font-size: 12px; color: #023260; outline: none;
    font-family: 'Noto Sans SC', sans-serif;
    transition: background 0.4s ease, border-color 0.4s ease, color 0.4s ease;
  }
  .tl-guest-input::placeholder { color: rgba(2,50,96,0.3); transition: color 0.4s ease; }
  .dark .tl-guest-input {
    background: rgba(255,255,255,0.06);
    border-color: rgba(255,255,255,0.14);
    color: #f5f8fb;
  }
  .dark .tl-guest-input::placeholder { color: rgba(255,255,255,0.32); }

  .tl-modal-backdrop {
    position: fixed; inset: 0; background: rgba(1,20,40,0.6);
    backdrop-filter: blur(6px); z-index: 50;
    display: flex; align-items: center; justify-content: center; padding: 16px;
  }
  .dark .tl-modal-backdrop { background: rgba(0,4,12,0.75); }
  .tl-modal {
    background: rgba(255,255,255,0.85);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.7);
    border-radius: 24px;
    padding: 24px;
    width: 100%; max-width: 480px;
    box-shadow: 0 20px 60px rgba(1,20,40,0.35);
    max-height: 90vh; overflow-y: auto;
    position: relative;
    transition: background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
  }
  .dark .tl-modal {
    background: rgba(10, 20, 35, 0.9);
    border-color: rgba(255,255,255,0.12);
    box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 50px rgba(74,158,255,0.12);
  }

  .tl-modal-input {
    width: 100%; border: 1px solid rgba(2,50,96,0.15); border-radius: 12px;
    padding: 10px 14px; font-size: 13px; color: #023260; outline: none;
    background: #f5f8ff; transition: border-color 0.2s ease, background 0.4s ease, color 0.4s ease;
    font-family: 'Noto Sans SC', sans-serif;
  }
  .tl-modal-input::placeholder { color: rgba(2,50,96,0.3); transition: color 0.4s ease; }
  .tl-modal-input:focus { border-color: #023260; background: #fff; }
  .dark .tl-modal-input {
    background: rgba(255,255,255,0.06);
    border-color: rgba(255,255,255,0.16);
    color: #f5f8fb;
  }
  .dark .tl-modal-input::placeholder { color: rgba(255,255,255,0.32); }
  .dark .tl-modal-input:focus { border-color: #4a9eff; background: rgba(255,255,255,0.09); }

  .tl-btn-primary {
    width: 100%; padding: 11px; border-radius: 12px; font-size: 13px; font-weight: 700;
    letter-spacing: 0.06em; border: none; cursor: pointer;
    font-family: 'Noto Serif SC', serif;
    transition: all 0.2s; background: #023260; color: #fff;
    box-shadow: 0 3px 12px rgba(2,50,96,0.25);
  }
  .tl-btn-primary:hover { background: #012040; transform: translateY(-1px); }
  .tl-btn-primary:disabled { background: #e5e7eb; color: #9ca3af; cursor: not-allowed; transform: none; box-shadow: none; }
  .dark .tl-btn-primary { background: #0d5aa7; box-shadow: 0 3px 14px rgba(13,90,167,0.4); }
  .dark .tl-btn-primary:hover { background: #0f6bc2; }
  .dark .tl-btn-primary:disabled { background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.3); }

  .tl-btn-secondary {
    flex: 1; padding: 10px; border-radius: 12px; font-size: 13px; font-weight: 600;
    border: 1px solid rgba(2,50,96,0.15); color: #6a8aaa; background: transparent;
    cursor: pointer; transition: all 0.2s, border-color 0.4s ease, color 0.4s ease; font-family: 'Noto Sans SC', sans-serif;
  }
  .tl-btn-secondary:hover { background: #f5f8ff; }
  .dark .tl-btn-secondary { border-color: rgba(255,255,255,0.18); color: rgba(255,255,255,0.55); }
  .dark .tl-btn-secondary:hover { background: rgba(255,255,255,0.06); }

  .tl-drop-zone {
    border: 1.5px dashed rgba(2,50,96,0.2); border-radius: 12px;
    padding: 14px; text-align: center; cursor: pointer; transition: all 0.2s, border-color 0.4s ease, color 0.4s ease;
    font-size: 12px; color: rgba(2,50,96,0.4);
    font-family: 'Noto Sans SC', sans-serif;
  }
  .tl-drop-zone:hover { border-color: #cc2233; color: #cc2233; background: #fff5f5; }
  .dark .tl-drop-zone { border-color: rgba(255,255,255,0.2); color: rgba(255,255,255,0.4); }
  .dark .tl-drop-zone:hover { border-color: #ff5b5b; color: #ff8080; background: rgba(217,37,37,0.08); }

  .tl-ornament { display: flex; align-items: center; gap: 8px; }
  .tl-ornament-line { flex: 1; height: 1px; background: rgba(2,50,96,0.1); transition: background 0.4s ease; }
  .tl-ornament-dot  { width: 4px; height: 4px; border-radius: 50%; background: #cc2233; opacity: 0.5; }
  .dark .tl-ornament-line { background: rgba(255,255,255,0.15); }

  .tl-divider { height: 1px; background: rgba(2,50,96,0.06); margin: 12px 0 10px; transition: background 0.4s ease; }
  .dark .tl-divider { background: rgba(255,255,255,0.1); }

  /* hero text */
  .tl-hero-title {
    font-family: 'Noto Serif SC', serif;
    font-size: clamp(26px, 5vw, 40px);
    font-weight: 700; color: #023260;
    line-height: 1.35; text-align: center;
    max-width: 720px;
    margin: 0 auto;
    transition: color 0.4s ease;
  }
  .dark .tl-hero-title { color: #f5f8fb; }
  .tl-hero-sub {
    font-family: 'Noto Sans SC', sans-serif;
    font-size: 12px; letter-spacing: 0.42em;
    color: rgba(2,50,96,0.5); margin-bottom: 12px;
    text-transform: uppercase;
    transition: color 0.4s ease;
  }
  .dark .tl-hero-sub { color: rgba(74,158,255,0.65); }
  .tl-hero-divider-line { width: 44px; height: 1px; background: rgba(2,50,96,0.25); transition: background 0.4s ease; }
  .dark .tl-hero-divider-line { background: rgba(255,255,255,0.2); }

  /* menu */
  .tl-menu {
    position: absolute; right: 0; top: 36px; width: 144px;
    background: #fff; border-radius: 14px;
    box-shadow: 0 4px 20px rgba(2,50,96,0.12);
    border: 1px solid rgba(2,50,96,0.08);
    overflow: hidden; z-index: 20;
    transition: background 0.4s ease, border-color 0.4s ease;
  }
  .dark .tl-menu {
    background: #0a1420;
    border-color: rgba(255,255,255,0.12);
    box-shadow: 0 8px 28px rgba(0,0,0,0.5);
  }
  .tl-menu-item {
    display: flex; align-items: center; gap: 8px;
    width: 100%; padding: 10px 14px; font-size: 12px;
    background: none; border: none; cursor: pointer;
    transition: background 0.15s, color 0.4s ease; font-family: 'Noto Sans SC', sans-serif;
    color: #023260;
  }
  .tl-menu-item:hover { background: #f5f8ff; }
  .tl-menu-item.danger { color: #cc2233; }
  .tl-menu-item.danger:hover { background: #fff5f5; }
  .dark .tl-menu-item { color: #f5f8fb; }
  .dark .tl-menu-item:hover { background: rgba(255,255,255,0.08); }
  .dark .tl-menu-item.danger { color: #ff8080; }
  .dark .tl-menu-item.danger:hover { background: rgba(217,37,37,0.14); }

  /* IEEE badge */
  .tl-ieee-badge {
    width: 40px; height: 40px; border-radius: 50%;
    background: #023260; color: #fff;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Noto Serif SC', serif; font-size: 9px;
    font-weight: 700; letter-spacing: 0.05em; flex-shrink: 0;
    transition: background 0.4s ease;
  }
  .dark .tl-ieee-badge { background: #0d5aa7; }

  /* Lightbox */
  .tl-lightbox {
    position: fixed; inset: 0; z-index: 100;
    background: rgba(0,0,0,0.92);
    display: flex; align-items: center; justify-content: center;
  }

  /* Seal */
  .tl-seal {
    display: flex; align-items: center; gap: 6px; opacity: 0.3; margin-top: 12px;
  }
  .tl-seal-line-l { flex: 1; height: 1px; background: linear-gradient(90deg, transparent, #023260); transition: background 0.4s ease; }
  .tl-seal-line-r { flex: 1; height: 1px; background: linear-gradient(90deg, #023260, transparent); transition: background 0.4s ease; }
  .tl-seal-dot { width: 3px; height: 3px; border-radius: 50%; background: #cc2233; }
  .tl-seal-text { font-family: 'Noto Serif SC', serif; font-size: 8px; color: #023260; letter-spacing: 0.15em; transition: color 0.4s ease; }
  .dark .tl-seal-line-l { background: linear-gradient(90deg, transparent, #4a9eff); }
  .dark .tl-seal-line-r { background: linear-gradient(90deg, #4a9eff, transparent); }
  .dark .tl-seal-text { color: #9fc4f0; }

  /* ── Text color utility classes (replace the old hardcoded inline colors so
     dark mode can actually override them) ── */
  .tl-text-heading { color: #023260; transition: color 0.4s ease; }
  .dark .tl-text-heading { color: #f5f8fb; }
  .tl-text-body { color: #4a6a8a; transition: color 0.4s ease; }
  .dark .tl-text-body { color: rgba(255,255,255,0.65); }
  .tl-text-faint { color: rgba(2,50,96,0.4); transition: color 0.4s ease; }
  .dark .tl-text-faint { color: rgba(255,255,255,0.45); }
  .tl-text-faint-2 { color: rgba(2,50,96,0.3); transition: color 0.4s ease; }
  .dark .tl-text-faint-2 { color: rgba(255,255,255,0.35); }
  .tl-close-btn { color: rgba(2,50,96,0.3); transition: color 0.4s ease; }
  .dark .tl-close-btn { color: rgba(255,255,255,0.45); }
  .tl-file-row {
    border: 1px solid rgba(2,50,96,0.1);
    transition: background 0.15s, border-color 0.4s ease;
  }
  .dark .tl-file-row { border-color: rgba(255,255,255,0.14); }
  .tl-file-row:hover { background: #f5f8ff; }
  .dark .tl-file-row:hover { background: rgba(255,255,255,0.06); }
  .tl-file-placeholder {
    background: #f5f8ff;
    border: 1px solid rgba(2,50,96,0.1);
    transition: background 0.4s ease, border-color 0.4s ease;
  }
  .dark .tl-file-placeholder { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.14); }
  .tl-remove-file-btn { background: #023260; transition: background 0.4s ease; }
  .dark .tl-remove-file-btn { background: #0d5aa7; }
  .tl-menu-trigger { color: rgba(2,50,96,0.4); transition: color 0.4s ease, background 0.15s; }
  .dark .tl-menu-trigger { color: rgba(255,255,255,0.5); }
  .tl-menu-trigger:hover { background: rgba(2,50,96,0.06); }
  .dark .tl-menu-trigger:hover { background: rgba(255,255,255,0.08); }
  .tl-comment-bubble { background: #f5f8ff; transition: background 0.4s ease; }
  .dark .tl-comment-bubble { background: rgba(255,255,255,0.06); }

  @keyframes tlReveal {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .tl-reveal { animation: tlReveal 0.5s cubic-bezier(0.16,1,0.3,1) both; }
`;function m3({images:r,startIndex:a,onClose:s}){const[i,c]=v.useState(a);return v.useEffect(()=>{const u=h=>{h.key==="Escape"&&s(),h.key==="ArrowRight"&&c(p=>(p+1)%r.length),h.key==="ArrowLeft"&&c(p=>(p-1+r.length)%r.length)};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[r.length,s]),l.jsxs("div",{className:"tl-lightbox",onClick:s,children:[l.jsx("button",{onClick:s,style:{position:"absolute",top:16,right:16,color:"#fff",fontSize:28,background:"none",border:"none",cursor:"pointer",lineHeight:1},children:"×"}),r.length>1&&l.jsxs(l.Fragment,{children:[l.jsx("button",{onClick:u=>{u.stopPropagation(),c(h=>(h-1+r.length)%r.length)},style:{position:"absolute",left:16,color:"#fff",fontSize:32,background:"none",border:"none",cursor:"pointer"},children:"‹"}),l.jsx("button",{onClick:u=>{u.stopPropagation(),c(h=>(h+1)%r.length)},style:{position:"absolute",right:16,color:"#fff",fontSize:32,background:"none",border:"none",cursor:"pointer"},children:"›"})]}),l.jsx("img",{src:r[i],alt:"",style:{maxHeight:"90vh",maxWidth:"90vw",objectFit:"contain",borderRadius:10},onClick:u=>u.stopPropagation()}),r.length>1&&l.jsx("div",{style:{position:"absolute",bottom:5,display:"flex",gap:6},children:r.map((u,h)=>l.jsx("button",{onClick:p=>{p.stopPropagation(),c(h)},style:{width:8,height:8,borderRadius:"50%",border:"none",cursor:"pointer",background:h===i?"#fff":"rgba(255,255,255,0.35)"}},h))})]})}function $l({size:r=40}){return l.jsx("div",{className:"tl-ieee-badge",style:{width:r,height:r,fontSize:r<36?8:9},children:"IEEE"})}function Od({name:r="?",avatarUrl:a,size:s=28}){if(a)return l.jsx("img",{src:a,alt:r,style:{width:s,height:s,borderRadius:"50%",objectFit:"cover",flexShrink:0}});const i=r.split(" ").map(h=>h[0]).slice(0,2).join("").toUpperCase(),c=["#023260","#cc2233","#0a6640","#b87820","#5a3a9a"],u=c[r.charCodeAt(0)%c.length];return l.jsx("div",{style:{width:s,height:s,borderRadius:"50%",background:u,color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:s*.35,fontWeight:700,flexShrink:0,fontFamily:"'Noto Sans SC', sans-serif"},children:i})}function tb({url:r}){const a=r?.split(".").pop()?.toLowerCase()||"",s={pdf:"📄",doc:"📝",docx:"📝",ppt:"📊",pptx:"📊",xls:"📈",xlsx:"📈",zip:"🗜️",mp4:"🎬",mov:"🎬"};return l.jsx("span",{style:{fontSize:22},children:s[a]||"📎"})}function g3({files:r}){const[a,s]=v.useState(null);if(!r||r.length===0)return null;const i=r.filter(Qm),c=r.filter(u=>!Qm(u));return l.jsxs(l.Fragment,{children:[l.jsxs("div",{style:{marginTop:10},children:[i.length>0&&l.jsx("div",{style:{display:"grid",gap:3,borderRadius:12,overflow:"hidden",gridTemplateColumns:i.length===1?"1fr":i.length===2?"1fr 1fr":"1fr 1fr 1fr"},children:i.slice(0,3).map((u,h)=>l.jsxs("div",{onClick:()=>s(h),style:{position:"relative",overflow:"hidden",cursor:"pointer",aspectRatio:i.length===1?"16/9":"1/1"},children:[l.jsx("img",{src:u,alt:"",loading:"lazy",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.3s"},onMouseOver:p=>p.currentTarget.style.transform="scale(1.04)",onMouseOut:p=>p.currentTarget.style.transform="scale(1)"}),h===2&&i.length>3&&l.jsxs("div",{style:{position:"absolute",inset:0,background:"rgba(1,20,40,0.55)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:22,fontWeight:700,fontFamily:"'Noto Serif SC', serif"},children:["+",i.length-3]})]},h))}),c.length>0&&l.jsx("div",{style:{marginTop:6,display:"flex",flexDirection:"column",gap:6},children:c.map((u,h)=>l.jsxs("a",{href:u,target:"_blank",rel:"noreferrer",className:"tl-file-row",style:{display:"flex",alignItems:"center",gap:10,padding:"10px 14px",borderRadius:12,textDecoration:"none"},children:[l.jsx(tb,{url:u}),l.jsx("span",{className:"tl-text-body",style:{fontSize:12,flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:decodeURIComponent(u.split("/").pop()?.split("?")[0]||"File")}),l.jsx("span",{className:"tl-text-faint-2",style:{fontSize:12},children:"↗"})]},h))})]}),a!==null&&l.jsx(m3,{images:i,startIndex:a,onClose:()=>s(null)})]})}function b3({postId:r,visitorId:a,currentProfile:s}){const[i,c]=v.useState([]),[u,h]=v.useState(""),[p,m]=v.useState(""),[g,y]=v.useState(!1),[x,S]=v.useState(!1),k=!!s,T=async()=>{const{data:_}=await ae.from("ieee_comments").select("*").eq("post_id",r).order("created_at",{ascending:!0});_&&c(_)};v.useEffect(()=>{x&&T()},[x]);const C=async()=>{if(!u.trim()||!k&&!p.trim())return;y(!0);const _=k?s.full_name||s.first_name||"Member":p.trim(),{error:z}=await ae.from("ieee_comments").insert({post_id:r,author_id:a,author_name:_,author_avatar:k&&s?.avatar_url||null,content:u.trim()});z||(h(""),m(""),await T()),y(!1)};return l.jsxs("div",{style:{marginTop:6},children:[l.jsx("button",{className:"tl-comment-btn",onClick:()=>S(_=>!_),style:{color:x?void 0:"#9ca3af"},children:l.jsx("span",{className:x?"tl-text-heading":"",children:x?"Hide comments":`View comments${i.length>0?` (${i.length})`:""}`})}),x&&l.jsxs("div",{style:{marginTop:10,display:"flex",flexDirection:"column",gap:10},children:[i.length===0&&l.jsx("p",{className:"tl-text-faint-2",style:{fontSize:11,textAlign:"center",padding:"6px 0",fontFamily:"'Noto Sans SC', sans-serif"},children:"No comments yet. Be the first!"}),i.map(_=>l.jsxs("div",{style:{display:"flex",gap:8,alignItems:"flex-start"},children:[l.jsx(Od,{name:_.author_name||"?",avatarUrl:_.author_avatar,size:26}),l.jsxs("div",{className:"tl-comment-bubble",style:{flex:1,borderRadius:14,padding:"7px 12px"},children:[l.jsx("p",{className:"tl-text-heading",style:{fontSize:11,fontWeight:700,fontFamily:"'Noto Serif SC', serif"},children:_.author_name||"Member"}),l.jsx("p",{className:"tl-text-body",style:{fontSize:11,marginTop:2,lineHeight:1.5,fontFamily:"'Noto Sans SC', sans-serif"},children:_.content})]})]},_.id)),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,paddingTop:4},children:[!k&&l.jsx("input",{type:"text",value:p,onChange:_=>m(_.target.value),placeholder:"Your name...",className:"tl-guest-input"}),l.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[l.jsx(Od,{name:k?s.full_name||"M":p||"?",avatarUrl:s?.avatar_url,size:26}),l.jsxs("div",{className:"tl-comment-box",children:[l.jsx("input",{type:"text",value:u,onChange:_=>h(_.target.value),onKeyDown:_=>_.key==="Enter"&&C(),placeholder:"Write a comment...",className:"tl-comment-input"}),l.jsx("button",{onClick:C,disabled:!u.trim()||g||!k&&!p.trim(),className:"tl-text-heading",style:{fontSize:11,fontWeight:700,background:"none",border:"none",cursor:"pointer",opacity:!u.trim()||g||!k&&!p.trim()?.3:1,fontFamily:"'Noto Serif SC', serif"},children:g?"...":"Send"})]})]})]})]})]})}function x3({post:r,onClose:a,onSave:s}){const[i,c]=v.useState(r.title||""),[u,h]=v.useState(r.content||""),[p,m]=v.useState(!1),[g,y]=v.useState(""),x=async()=>{if(!u.trim())return;m(!0),y("");const{error:S,data:k}=await ae.from("ieee_posts").update({title:i||null,content:u}).eq("id",r.id).select().single();m(!1),!S&&k?(s(k),a()):(console.error("Update error:",S?.message),y(S?.message||"Couldn't save changes. Please try again."))};return l.jsx("div",{className:"tl-modal-backdrop",onClick:S=>S.target===S.currentTarget&&a(),children:l.jsxs("div",{className:"tl-modal tl-reveal",children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:18},children:[l.jsx($l,{size:40}),l.jsxs("div",{children:[l.jsx("p",{className:"tl-serif tl-text-heading",style:{fontWeight:700,fontSize:14},children:"Edit Post"}),l.jsx("p",{className:"tl-text-faint",style:{fontSize:11,fontFamily:"'Noto Sans SC', sans-serif"},children:"IEEE ECU SB"})]}),l.jsx("button",{onClick:a,className:"tl-close-btn",style:{marginLeft:"auto",fontSize:22,background:"none",border:"none",cursor:"pointer",lineHeight:1},children:"×"})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10},children:[l.jsx("input",{type:"text",placeholder:"Title (optional)",value:i,onChange:S=>c(S.target.value),className:"tl-modal-input"}),l.jsx("textarea",{placeholder:"What's happening...",value:u,onChange:S=>h(S.target.value),rows:5,className:"tl-modal-input",style:{resize:"none"}})]}),g&&l.jsx("p",{style:{color:"#cc2233",fontSize:12,marginTop:10,fontFamily:"'Noto Sans SC', sans-serif"},children:g}),l.jsxs("div",{style:{display:"flex",gap:10,marginTop:18},children:[l.jsx("button",{onClick:a,className:"tl-btn-secondary",children:"Cancel"}),l.jsx("button",{onClick:x,disabled:!u.trim()||p,className:"tl-btn-primary",style:{flex:1,width:"auto"},children:p?"Saving...":"Save Changes"})]})]})})}function y3({likes:r,onClose:a}){const s=Hl(r);return l.jsx("div",{className:"tl-modal-backdrop",onClick:i=>i.target===i.currentTarget&&a(),children:l.jsxs("div",{className:"tl-modal tl-reveal",style:{maxWidth:380},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:16},children:[l.jsx(Rl,{size:20,fill:"#cc2233",color:"#cc2233"}),l.jsxs("p",{className:"tl-serif tl-text-heading",style:{fontWeight:700,fontSize:14},children:["Reactions (",s.length,")"]}),l.jsx("button",{onClick:a,className:"tl-close-btn",style:{marginLeft:"auto",fontSize:22,background:"none",border:"none",cursor:"pointer",lineHeight:1},children:"×"})]}),s.length===0?l.jsx("p",{className:"tl-text-faint",style:{fontSize:12,textAlign:"center",padding:"14px 0",fontFamily:"'Noto Sans SC', sans-serif"},children:"No reactions yet."}):l.jsx("div",{children:s.map((i,c)=>l.jsxs("div",{className:"tl-likers-row",children:[l.jsx(Od,{name:i.name||"Member",size:32}),l.jsx("span",{className:"tl-text-heading",style:{fontSize:13,fontFamily:"'Noto Sans SC', sans-serif"},children:i.name||"Member"})]},c))})]})})}function v3({post:r,onLike:a,onDelete:s,onEdit:i,visitorId:c,currentProfile:u,canPost:h,likeIdentities:p,likerName:m,isLiking:g}){const y=c3(r.likes,p),S=u&&r.author_id===u.id||h,[k,T]=v.useState(!1),[C,_]=v.useState(!1),[z,M]=v.useState(!1),[R,V]=v.useState(r),G=v.useRef();v.useEffect(()=>{const X=K=>{G.current&&!G.current.contains(K.target)&&T(!1)};return document.addEventListener("mousedown",X),()=>document.removeEventListener("mousedown",X)},[]);const Q=async()=>{window.confirm("Delete this post?")&&(T(!1),s(r.id))};return l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"tl-card tl-reveal",children:l.jsxs("div",{style:{padding:"14px 16px"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:10},children:[l.jsx($l,{size:38}),l.jsxs("div",{style:{flex:1},children:[l.jsx("p",{className:"tl-serif tl-text-heading",style:{fontWeight:700,fontSize:13},children:"IEEE ECU SB"}),l.jsxs("p",{className:"tl-text-faint",style:{fontSize:11,fontFamily:"'Noto Sans SC', sans-serif"},children:[o3(R.created_at)," ·"," ",l3(R.created_at)]})]}),S&&l.jsxs("div",{style:{position:"relative"},ref:G,children:[l.jsx("button",{onClick:()=>T(X=>!X),className:"tl-menu-trigger",style:{width:30,height:30,borderRadius:"50%",border:"none",background:"none",cursor:"pointer",fontSize:18,display:"flex",alignItems:"center",justifyContent:"center"},children:"⋯"}),k&&l.jsxs("div",{className:"tl-menu",children:[l.jsx("button",{className:"tl-menu-item",onClick:()=>{T(!1),_(!0)},children:"✏️ Edit"}),l.jsx("button",{className:"tl-menu-item danger",onClick:Q,children:"🗑️ Delete"})]})]})]}),R.title&&l.jsx("h3",{className:"tl-serif tl-text-heading",style:{fontWeight:700,fontSize:15,marginBottom:6},children:R.title}),l.jsx("p",{className:"tl-text-body",style:{fontSize:13,lineHeight:1.65,whiteSpace:"pre-wrap",fontFamily:"'Noto Sans SC', sans-serif"},children:R.content}),l.jsx(g3,{files:R.images||[]}),l.jsx("div",{className:"tl-divider"}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:8},children:[l.jsxs("div",{className:`tl-like-btn${y?" liked":""}`,children:[l.jsx("button",{type:"button",onClick:()=>a(R.id),disabled:g,"aria-label":y?"Unlike":"Like",style:{background:"none",border:"none",padding:0,cursor:g?"default":"pointer",opacity:g?.5:1,display:"flex",alignItems:"center"},children:l.jsx(Rl,{size:15,strokeWidth:2,fill:y?"#cc2233":"none",color:y?"#cc2233":"#6a8aaa"})}),l.jsx("button",{type:"button",onClick:()=>M(!0),className:"tl-like-count-btn",style:{color:y?"#cc2233":"#6a8aaa"},children:Hl(R.likes).length})]}),l.jsxs("span",{className:"tl-text-faint-2",style:{fontSize:11,fontFamily:"'Noto Sans SC', sans-serif"},children:["💬 ",R.comments_count||0]})]}),l.jsx(b3,{postId:R.id,visitorId:c,currentProfile:u}),l.jsxs("div",{className:"tl-seal",children:[l.jsx("div",{className:"tl-seal-line-l"}),l.jsx("div",{className:"tl-seal-dot"}),l.jsx("span",{className:"tl-seal-text",children:"IEEE ECU SB"}),l.jsx("div",{className:"tl-seal-dot"}),l.jsx("div",{className:"tl-seal-line-r"})]})]})}),C&&l.jsx(x3,{post:R,onClose:()=>_(!1),onSave:X=>{V(X),i(X)}}),z&&l.jsx(y3,{likes:R.likes,onClose:()=>M(!1)})]})}async function w3(r,a){const s=r.name.split(".").pop(),i=`posts/${a}/${Date.now()}_${Math.random().toString(36).slice(2)}.${s}`,{error:c}=await ae.storage.from(Zm).upload(i,r,{cacheControl:"3600",upsert:!1});if(c)throw c;const{data:u}=ae.storage.from(Zm).getPublicUrl(i);return u.publicUrl}function k3({onClose:r,onSubmit:a,currentUser:s}){const[i,c]=v.useState(""),[u,h]=v.useState(""),[p,m]=v.useState([]),[g,y]=v.useState([]),[x,S]=v.useState(!1),[k,T]=v.useState(!1),[C,_]=v.useState(""),z=v.useRef(),M=G=>{const Q=Array.from(G);m(X=>[...X,...Q]),y(X=>[...X,...Q.map(K=>K.type.startsWith("image/")?URL.createObjectURL(K):null)])},R=G=>{m(Q=>Q.filter((X,K)=>K!==G)),y(Q=>Q.filter((X,K)=>K!==G))},V=async()=>{if(!u.trim())return;_(""),T(!0),S(p.length>0);let G=[];try{G=await Promise.all(p.map(X=>w3(X,s.id)))}catch(X){console.error("Upload error:",X),S(!1),T(!1),_(X?.message||"Couldn't upload one of the files. Please try again.");return}S(!1);const Q=await a({title:i,content:u,images:G});T(!1),Q?.success?r():_(Q?.error||"Couldn't share the post. Please try again.")};return l.jsx("div",{className:"tl-modal-backdrop",onClick:G=>G.target===G.currentTarget&&r(),children:l.jsxs("div",{className:"tl-modal tl-reveal",children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:18},children:[l.jsx($l,{size:40}),l.jsxs("div",{children:[l.jsx("p",{className:"tl-serif tl-text-heading",style:{fontWeight:700,fontSize:14},children:"IEEE Student Branch"}),l.jsx("p",{className:"tl-text-faint",style:{fontSize:11,fontFamily:"'Noto Sans SC', sans-serif"},children:"New post"})]}),l.jsx("button",{onClick:r,className:"tl-close-btn",style:{marginLeft:"auto",fontSize:22,background:"none",border:"none",cursor:"pointer",lineHeight:1},children:"×"})]}),l.jsxs("div",{className:"tl-ornament",style:{marginBottom:14},children:[l.jsx("div",{className:"tl-ornament-line"}),l.jsx("div",{className:"tl-ornament-dot"}),l.jsx("div",{className:"tl-ornament-dot",style:{background:"rgba(2,50,96,0.2)"}}),l.jsx("div",{className:"tl-ornament-dot"}),l.jsx("div",{className:"tl-ornament-line"})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10,marginBottom:12},children:[l.jsx("input",{type:"text",placeholder:"Title (optional)",value:i,onChange:G=>c(G.target.value),className:"tl-modal-input"}),l.jsx("textarea",{placeholder:"What's happening in the team? Share an update, event, or moment...",value:u,onChange:G=>h(G.target.value),rows:4,className:"tl-modal-input",style:{resize:"none"}})]}),l.jsxs("div",{className:"tl-drop-zone",onDrop:G=>{G.preventDefault(),G.dataTransfer.files.length&&M(G.dataTransfer.files)},onDragOver:G=>G.preventDefault(),onClick:()=>z.current?.click(),children:[l.jsx("input",{ref:z,type:"file",multiple:!0,accept:"image/*,.pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.zip,.mp4,.mov",style:{display:"none"},onChange:G=>M(G.target.files)}),"📎 Click or drag & drop — images, PDFs, docs, videos..."]}),p.length>0&&l.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,margin:"10px 0"},children:p.map((G,Q)=>l.jsxs("div",{style:{position:"relative"},children:[g[Q]?l.jsx("img",{src:g[Q],alt:"",style:{width:60,height:60,objectFit:"cover",borderRadius:10,border:"1px solid rgba(2,50,96,0.1)"}}):l.jsxs("div",{className:"tl-file-placeholder",style:{width:60,height:60,borderRadius:10,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:2},children:[l.jsx(tb,{url:G.name}),l.jsx("span",{className:"tl-text-faint",style:{fontSize:8},children:G.name.split(".").pop()?.toUpperCase()})]}),l.jsx("button",{onClick:X=>{X.stopPropagation(),R(Q)},className:"tl-remove-file-btn",style:{position:"absolute",top:-6,right:-6,width:18,height:18,borderRadius:"50%",color:"#fff",border:"none",fontSize:11,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:"×"})]},Q))}),C&&l.jsxs("p",{style:{color:"#cc2233",fontSize:12,marginTop:4,marginBottom:8,fontFamily:"'Noto Sans SC', sans-serif"},children:["⚠ ",C]}),l.jsx("button",{onClick:V,disabled:!u.trim()||k,className:"tl-btn-primary",style:{marginTop:6},children:x?"Uploading files...":k?"Sharing...":"Share Post"})]})})}function S3(){const{user:r}=n3(),[a,s]=v.useState([]),[i,c]=v.useState(!0),[u,h]=v.useState(!1),[p,m]=v.useState(null),[g]=v.useState(()=>i3()),[y,x]=v.useState(""),[S,k]=v.useState(()=>new Set);v.useEffect(()=>{if(!r){m(null);return}ae.from("profiles").select("*").eq("id",r.id).maybeSingle().then(({data:K})=>{K&&m(K)})},[r?.id]);const T=s3(p),C=r?r.id:g,_=[r?.id,g].filter(Boolean),z=r?p?.full_name||p?.first_name||"Member":"Guest",M=async()=>{try{const{data:K,error:te}=await ae.from("ieee_posts").select("*").order("created_at",{ascending:!1});te?console.error("fetchPosts error:",te.message):s(K||[])}catch(K){console.error("fetchPosts exception:",K)}finally{c(!1)}};v.useEffect(()=>{M();const K=ae.channel("ieee_posts_rt").on("postgres_changes",{event:"INSERT",schema:"public",table:"ieee_posts"},te=>{s(fe=>fe.find(pe=>pe.id===te.new.id)?fe:[te.new,...fe])}).subscribe();return()=>ae.removeChannel(K)},[]);const R=async({title:K,content:te,images:fe})=>{if(!r)return{success:!1,error:"You need to be logged in to post."};const pe={author_id:r.id,author_role:p?.role||"member",title:K||null,content:te,images:fe,likes:[],comments_count:0},{error:xe,data:ke}=await ae.from("ieee_posts").insert([pe]).select().single();return!xe&&ke?(s(Re=>Re.find(Se=>Se.id===ke.id)?Re:[ke,...Re]),{success:!0}):(console.error("Insert error:",xe?.message),await M(),{success:!1,error:xe?.message||"Something went wrong. Please try again."})},V=async K=>{if(!(!C||S.has(K))){k(te=>new Set(te).add(K));try{const{data:te,error:fe}=await ae.from("ieee_posts").select("likes").eq("id",K).single();if(fe){console.error("like fetch error:",fe.message);return}const pe=u3(te?.likes,_,C,z),{error:xe}=await ae.from("ieee_posts").update({likes:pe}).eq("id",K);if(xe){console.error("like update error:",xe.message);return}s(ke=>ke.map(Re=>Re.id===K?{...Re,likes:pe}:Re))}finally{k(te=>{const fe=new Set(te);return fe.delete(K),fe})}}},G=async K=>{await ae.from("ieee_posts").delete().eq("id",K),s(te=>te.filter(fe=>fe.id!==K))},Q=K=>{s(te=>te.map(fe=>fe.id===K.id?K:fe))},X=y.trim()?a.filter(K=>(K.title||"").toLowerCase().includes(y.toLowerCase())||(K.content||"").toLowerCase().includes(y.toLowerCase())):a;return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:p3}),l.jsxs("div",{className:"tl-root tl-page-bg",style:{minHeight:"100vh"},children:[h3.map((K,te)=>l.jsx("div",{className:"tl-glow",style:{top:K.top,left:K.left,width:K.size,height:K.size,background:`radial-gradient(circle, ${K.color} 0%, transparent 70%)`,animationDuration:`${K.duration}, ${parseFloat(K.duration)*.5}s`,animationDelay:`${K.delay}, ${K.delay}`}},te)),f3.map((K,te)=>l.jsx("span",{className:`tl-bg-char tl-bg-char-${K.tint} ${K.hideMobile?"hidden md:block":""}`,style:{fontSize:K.size,color:K.tint==="blue"?"rgba(2,50,96,0.14)":"rgba(204,34,51,0.16)",...K.pos,"--tl-rot":`${K.rotate}deg`,transform:`rotate(${K.rotate}deg)`,animationDelay:K.delay},children:K.char},te)),d3.map((K,te)=>l.jsx("div",{className:"tl-petal",style:{left:K.left,background:K.color,animationDuration:K.duration,animationDelay:K.delay,transform:`scale(${K.size})`,opacity:K.size>1.4?.4:void 0}},te)),l.jsx("div",{style:{position:"fixed",height:"90vh",width:"100%",overflow:"hidden",top:0,left:0,zIndex:0},children:l.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",paddingBottom:180},children:[l.jsx("p",{className:"tl-hero-sub",children:"二〇二五 · IEEE Student Branch"}),l.jsxs("h1",{className:"tl-hero-title",children:["Discover what's happening",l.jsx("br",{}),"in our community."]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginTop:12},children:[l.jsx("div",{className:"tl-hero-divider-line"}),l.jsx("span",{style:{color:"rgba(204,34,51,0.7)",fontSize:13},children:"❖"}),l.jsx("div",{className:"tl-hero-divider-line"})]})]})}),l.jsxs("div",{style:{maxWidth:760,margin:"0 auto",padding:"0 16px 80px",paddingTop:350,position:"relative",zIndex:10},children:[l.jsxs("div",{className:"tl-search",children:[l.jsx("span",{className:"tl-search-icon",children:"🔍"}),l.jsx("input",{type:"text",value:y,onChange:K=>x(K.target.value),placeholder:"Search posts..."}),y&&l.jsx("button",{onClick:()=>x(""),className:"tl-search-clear",children:"×"})]}),T&&l.jsx("div",{className:"tl-composer",children:l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[l.jsx($l,{size:36}),l.jsx("button",{onClick:()=>h(!0),className:"tl-composer-btn",children:"Share something with the team..."})]})}),i?l.jsx("div",{className:"tl-text-faint",style:{textAlign:"center",padding:"60px 0",fontSize:13,fontFamily:"'Noto Sans SC', sans-serif"},children:"Loading posts..."}):X.length===0?l.jsx("div",{className:"tl-text-faint-2",style:{textAlign:"center",padding:"16px 0",fontSize:13,fontFamily:"'Noto Serif SC', serif"},children:y?`No posts found for "${y}"`:"No posts yet. 暂无内容"}):X.map(K=>l.jsx(v3,{post:K,onLike:V,onDelete:G,onEdit:Q,visitorId:g,currentProfile:p,canPost:T,likeIdentities:_,likerName:z,isLiking:S.has(K.id)},K.id))]})]}),u&&l.jsx(k3,{onClose:()=>h(!1),onSubmit:R,currentUser:r})]})}const Mt="#023260";function Ci({value:r,onChange:a}){return l.jsx("button",{type:"button",onClick:()=>a(!r),className:"relative inline-flex items-center flex-shrink-0 h-6 w-11 rounded-full transition-colors duration-200 focus:outline-none",style:{backgroundColor:r?Mt:"#cbd5e1"},children:l.jsx("span",{className:"inline-block w-4 h-4 bg-white rounded-full shadow transition-transform duration-200",style:{transform:r?"translateX(22px)":"translateX(3px)"}})})}function pd({options:r,value:a,onChange:s}){return l.jsx("div",{className:"flex flex-wrap gap-1.5",children:r.map(i=>l.jsx("button",{type:"button",onClick:()=>s(i.value),className:"px-2.5 py-1 rounded-full text-xs font-medium border transition-all duration-150",style:a===i.value?{backgroundColor:Mt,color:"#fff",borderColor:Mt}:{backgroundColor:"transparent",color:"#64748b",borderColor:"#e2e8f0"},children:i.label},i.value))})}function j3({options:r,value:a,onChange:s}){const i=c=>a.includes(c)?s(a.filter(u=>u!==c)):s([...a,c]);return l.jsx("div",{className:"flex flex-wrap gap-2 mt-2",children:r.map(c=>{const u=a.includes(c.value);return l.jsx("button",{type:"button",onClick:()=>i(c.value),className:"px-2.5 py-1 rounded-full text-xs font-medium border transition-all duration-150",style:u?{backgroundColor:"#eef2f8",color:Mt,borderColor:Mt}:{backgroundColor:"transparent",color:"#64748b",borderColor:"#e2e8f0"},children:c.label},c.value)})})}function eg({options:r,value:a,onChange:s}){return l.jsx("div",{className:"flex flex-wrap gap-2 mt-2",children:r.map(i=>l.jsx("button",{type:"button",onClick:()=>s(i.value),className:"px-3 py-1.5 rounded-md text-xs font-medium border transition-all duration-150",style:a===i.value?{backgroundColor:Mt,color:"#fff",borderColor:Mt}:{backgroundColor:"transparent",color:"#64748b",borderColor:"#e2e8f0"},children:i.label},i.value))})}function ms({icon:r,title:a,desc:s,children:i}){return l.jsxs("div",{className:"bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm w-full",children:[l.jsxs("div",{className:"flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-4 bg-slate-50 border-b border-slate-100",children:[l.jsx("div",{className:"w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center text-sm sm:text-base flex-shrink-0",style:{backgroundColor:"#eef2f8"},children:r}),l.jsxs("div",{children:[l.jsx("p",{className:"text-sm font-semibold",style:{color:Mt},children:a}),l.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:s})]})]}),l.jsx("div",{className:"px-4 sm:px-5 divide-y divide-slate-100",children:i})]})}function Ir({label:r,sub:a,right:s}){return l.jsxs("div",{className:"flex items-center justify-between py-3 sm:py-3.5 gap-3 sm:gap-4",children:[l.jsxs("div",{className:"min-w-0",children:[l.jsx("p",{className:"text-xs sm:text-sm text-slate-700",children:r}),a&&l.jsx("p",{className:"text-xs text-slate-400 mt-0.5 hidden sm:block",children:a})]}),l.jsx("div",{className:"flex-shrink-0",children:s})]})}function gs({label:r,sub:a,children:s}){return l.jsxs("div",{className:"py-3 sm:py-3.5",children:[l.jsx("p",{className:"text-xs sm:text-sm text-slate-700",children:r}),a&&l.jsx("p",{className:"text-xs text-slate-400 mt-0.5 hidden sm:block",children:a}),s]})}function md({placeholder:r,value:a,onChange:s,prefix:i}){return l.jsxs("div",{className:"flex items-center gap-2 mt-1.5",children:[l.jsx("span",{className:"text-xs text-slate-400 hidden sm:inline",children:i}),l.jsx("input",{type:"text",value:a,onChange:c=>s(c.target.value),placeholder:r,className:"flex-1 w-full text-xs sm:text-sm border border-slate-200 rounded-lg px-2.5 sm:px-3 py-1.5 focus:outline-none focus:ring-2 focus:border-transparent",style:{"--tw-ring-color":Mt+"40"}})]})}function _3(){const[r,a]=v.useState(!1),[s,i]=v.useState("");v.useEffect(()=>{(async()=>{const{data:{user:p}}=await ae.auth.getUser();if(p){const m=`${window.location.origin}/IEEE-ECU-SB-Website/signup`;i(`${m}?ref=${p.id}`)}})()},[]);const c=()=>{s&&(navigator.clipboard.writeText(s),a(!0),setTimeout(()=>a(!1),2e3))},u=async()=>{s&&(navigator.share?await navigator.share({title:"Join IEEE ECU SB",text:"Register to join the IEEE ECU Student Branch:",url:s}):c())};return l.jsxs("div",{className:"py-4 space-y-3",children:[l.jsx("p",{className:"text-xs text-slate-500 leading-relaxed",children:"Share this link with anyone you want to invite. They choose their own tier and position when they register. You'll be notified by email and in-app once they sign up."}),l.jsxs("div",{className:"flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2",children:[l.jsx("span",{className:"text-xs text-slate-500 truncate flex-1 min-w-0 select-all",children:s||"Loading…"}),l.jsx("button",{onClick:c,className:"text-xs font-semibold text-white px-3 py-1 rounded-full shrink-0 transition",style:{backgroundColor:r?"#16a34a":Mt},children:r?"Copied ✓":"Copy"})]}),l.jsxs("button",{onClick:u,className:"flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border transition",style:{borderColor:Mt,color:Mt},children:[l.jsx("span",{children:"📤"})," Share link"]})]})}function E3(){const[r,a]=v.useState(""),[s,i]=v.useState(!0),[c,u]=v.useState("1hr"),[h,p]=v.useState(!0),[m,g]=v.useState(!1),[y,x]=v.useState("light"),[S,k]=v.useState("en"),[T,C]=v.useState(["workshops","seminars"]),[_,z]=v.useState(!1),[M,R]=v.useState("public"),[V,G]=v.useState(!0),[Q,X]=v.useState(!0),[K,te]=v.useState(""),[fe,pe]=v.useState(""),[xe,ke]=v.useState(""),[Re,Se]=v.useState(!1);v.useEffect(()=>{(async()=>{const{data:{user:F}}=await ae.auth.getUser();if(!F)return;const{data:N}=await ae.from("profiles").select("tier").eq("id",F.id).single();N&&a((N.tier||"").toLowerCase().trim())})()},[]);const H=["highboard","board"].includes(r),W=()=>{Se(!0),setTimeout(()=>Se(!1),2500)};return l.jsx("div",{className:"min-h-screen bg-white",children:l.jsxs("div",{className:"w-full px-3 sm:px-6 lg:px-10 xl:px-16 pt-24 pb-10",children:[l.jsxs("div",{className:"mb-6 sm:mb-8",children:[l.jsx("h1",{className:"text-xl sm:text-2xl font-bold",style:{color:Mt},children:"Settings"}),l.jsx("p",{className:"text-xs sm:text-sm text-slate-400 mt-1",children:"Manage your preferences for the ECU IEEE portal"})]}),l.jsxs("div",{className:"rounded-2xl px-4 sm:px-6 py-3 sm:py-4 mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4 relative overflow-hidden",style:{backgroundColor:Mt},children:[l.jsx("span",{className:"text-2xl sm:text-3xl opacity-80 select-none",children:"🏮"}),l.jsxs("div",{children:[l.jsx("p",{className:"text-white text-xs sm:text-sm font-semibold",children:"IEEE ECU Student Branch"}),l.jsx("p",{className:"text-white/50 text-xs mt-0.5",children:"Spring 2025 · Cairo, Egypt"})]}),l.jsx("span",{className:"absolute right-6 top-1/2 -translate-y-1/2 text-4xl sm:text-5xl opacity-10 select-none",children:"⛩"}),l.jsx("span",{className:"absolute -top-6 right-20 w-20 h-20 rounded-full border-[10px] border-white/5 pointer-events-none"}),l.jsx("span",{className:"absolute bottom-[-30px] right-5 w-14 h-14 rounded-full border-8 border-white/5 pointer-events-none"})]}),l.jsxs("div",{className:"grid grid-cols-1 gap-5",children:[H&&l.jsx(ms,{icon:"✉️",title:"Invite member",desc:"Share the registration link with new recruits",children:l.jsx(_3,{})}),l.jsxs(ms,{icon:"🔔",title:"Notification preferences",desc:"Control what alerts you receive",children:[l.jsx(Ir,{label:"Event announcements",sub:"Get notified when new events are posted",right:l.jsx(Ci,{value:s,onChange:i})}),l.jsx(Ir,{label:"Event reminder",sub:"How early to remind you before an event",right:l.jsx(pd,{value:c,onChange:u,options:[{label:"1 hr",value:"1hr"},{label:"1 day",value:"1day"},{label:"Off",value:"off"}]})}),l.jsx(Ir,{label:"Branch news & updates",sub:"Weekly digest from the student branch",right:l.jsx(Ci,{value:h,onChange:p})}),l.jsx(Ir,{label:"New member joins",sub:"Notify when someone new registers",right:l.jsx(Ci,{value:m,onChange:g})})]}),l.jsxs(ms,{icon:"🎨",title:"Appearance",desc:"Display and theme preferences",children:[l.jsx(Ir,{label:"Theme",sub:"Choose your portal appearance",right:l.jsx(pd,{value:y,onChange:x,options:[{label:"Light",value:"light"},{label:"Dark",value:"dark"},{label:"System",value:"system"}]})}),l.jsx(Ir,{label:"Language",sub:"Portal display language",right:l.jsx(pd,{value:S,onChange:k,options:[{label:"English",value:"en"},{label:"Arabic",value:"ar"}]})})]}),l.jsxs(ms,{icon:"📅",title:"Event preferences",desc:"Personalize what events you see",children:[l.jsx(gs,{label:"Preferred event types",sub:"We'll highlight these in your feed",children:l.jsx(j3,{value:T,onChange:C,options:[{label:"Workshops",value:"workshops"},{label:"Seminars",value:"seminars"},{label:"Hackathons",value:"hackathons"},{label:"Competitions",value:"competitions"},{label:"Networking",value:"networking"},{label:"Webinars",value:"webinars"}]})}),l.jsx(Ir,{label:"Google Calendar sync",sub:"Automatically add registered events to your calendar",right:l.jsx(Ci,{value:_,onChange:z})})]}),l.jsxs(ms,{icon:"🔒",title:"Privacy",desc:"Control your visibility to other members",children:[l.jsx(gs,{label:"Profile visibility",sub:"Who can see your member profile",children:l.jsx(eg,{value:M,onChange:R,options:[{label:"Public",value:"public"},{label:"Members only",value:"members"},{label:"Private",value:"private"}]})}),l.jsx(gs,{label:"Show email in member directory",sub:"Other members can see your email",children:l.jsx(eg,{value:V?"yes":"no",onChange:ne=>G(ne==="yes"),options:[{label:"Yes",value:"yes"},{label:"No",value:"no"}]})}),l.jsx(Ir,{label:"Show activity on profile",sub:"Events attended, resources downloaded",right:l.jsx(Ci,{value:Q,onChange:X})})]}),l.jsx(ms,{icon:"🔗",title:"Integrations",desc:"Connect your external profiles",children:l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100",children:[l.jsx("div",{className:"sm:pr-5",children:l.jsx(gs,{label:"LinkedIn",sub:"Displayed on your member card",children:l.jsx(md,{prefix:"linkedin.com/in/",placeholder:"your-username",value:K,onChange:te})})}),l.jsx("div",{className:"sm:px-5",children:l.jsx(gs,{label:"GitHub",sub:"Show project contributions",children:l.jsx(md,{prefix:"github.com/",placeholder:"your-username",value:fe,onChange:pe})})}),l.jsx("div",{className:"sm:pl-5",children:l.jsx(gs,{label:"IEEE membership ID",sub:"Link your global IEEE account",children:l.jsx(md,{prefix:"ID:",placeholder:"e.g. 12345678",value:xe,onChange:ke})})})]})})]}),l.jsxs("div",{className:"mt-6 sm:mt-8 flex items-center gap-4",children:[l.jsx("button",{type:"button",onClick:W,className:"px-5 sm:px-6 py-2 sm:py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-150 active:scale-95",style:{backgroundColor:Mt},children:"Save settings"}),Re&&l.jsx("span",{className:"text-sm text-emerald-500 font-medium animate-pulse",children:"✓ Saved successfully"})]})]})})}const N3=[{left:"8%",color:"#cc2233",duration:"9s",delay:"0s"},{left:"25%",color:"#023260",duration:"11s",delay:"2s"},{left:"50%",color:"#cc2233",duration:"12s",delay:"4.5s"},{left:"72%",color:"#023260",duration:"13s",delay:"1s"},{left:"90%",color:"#cc2233",duration:"10s",delay:"3s"}],C3=[{char:"关",top:"auto",bottom:"-2%",left:"-3%",size:220,tint:"blue",rotate:-6,delay:"0s"},{char:"员",top:"5%",right:"-2%",size:160,tint:"red",rotate:8,delay:"1.6s"},{char:"会",top:"40%",left:"5%",size:100,tint:"blue",rotate:4,delay:"3.1s"},{char:"加",top:"auto",bottom:"10%",right:"4%",size:130,tint:"red",rotate:-9,delay:"0.8s"},{char:"入",top:"62%",left:"-2%",size:170,tint:"blue",rotate:5,delay:"2.4s"},{char:"团",top:"20%",left:"35%",size:90,tint:"blue",rotate:-7,delay:"3.8s",hideMobile:!0},{char:"结",top:"auto",bottom:"30%",right:"30%",size:80,tint:"red",rotate:6,delay:"1.1s",hideMobile:!0},{char:"族",top:"10%",left:"20%",size:75,tint:"red",rotate:9,delay:"2.9s",hideMobile:!0},{char:"友",top:"auto",bottom:"45%",left:"48%",size:85,tint:"blue",rotate:-5,delay:"0.5s",hideMobile:!0},{char:"会",top:"80%",right:"42%",size:70,tint:"red",rotate:4,delay:"3.3s",hideMobile:!0},{char:"队",top:"32%",right:"12%",size:65,tint:"blue",rotate:-8,delay:"1.9s",hideMobile:!0}],T3=[{icon:x2,title:"Global IEEE Network",desc:"Full access to IEEE Xplore, technical papers, and a worldwide community of engineers."},{icon:a2,title:"Certificates & Recognition",desc:"Official certificates for workshops, competitions, and volunteering hours."},{icon:Ts,title:"Events & Workshops",desc:"Priority access and discounted or free entry to all branch events."},{icon:jg,title:"Leadership Opportunities",desc:"Join committees, lead projects, and build a real CV before you graduate."}],A3=[{q:"What's the difference between branch membership and global IEEE membership?",a:"Steps 1 and 2 create your official global IEEE account on ieee.org. Steps 3 and 4 register you with the ECU branch so you get local benefits like events and workshops."},{q:"How long does it take to get accepted?",a:"Our webmaster reviews new registrations regularly. Once you're accepted, step 4 unlocks and you can pay your membership fee."},{q:"What if I made a mistake in my registration details?",a:"Reach out to us via social media or the email in the footer and we'll help you correct your username or email."},{q:"Can I pay another way besides Vodafone Cash?",a:"Currently payment is only available via Vodafone Cash, and it only opens up after your registration is accepted. If you need another method, contact us and we'll find a suitable solution."}],tg="010XXXXXXXX",ag="150 EGP",R3="https://www.ieee.org/profile/public/createwebaccount/showCreateAccountPage.html",z3="https://www.ieee.org/membership/join/index.html";function O3(){const r=ta();v.useEffect(()=>{if(!r.hash)return;const F=r.hash.replace("#",""),N=setTimeout(()=>{const j=document.getElementById(F);if(j){const D=j.getBoundingClientRect().top+window.scrollY-100;window.scrollTo({top:D,behavior:"smooth"})}},150);return()=>clearTimeout(N)},[r]),v.useEffect(()=>{const F=new IntersectionObserver(N=>{N.forEach(j=>{j.isIntersecting?j.target.classList.add("in-view"):j.target.classList.remove("in-view")})},{threshold:.12});return document.querySelectorAll(".reveal-auto, .reveal-left-auto, .reveal-right-auto").forEach(N=>F.observe(N)),()=>F.disconnect()},[]);const[a,s]=v.useState(null),[i,c]=v.useState(1),[u,h]=v.useState(1),p=F=>{F<=u&&c(F)},m=F=>{c(F),h(N=>Math.max(N,F))},[g,y]=v.useState(!1),[x,S]=v.useState(!1),[k,T]=v.useState({username:"",email:"",password:""}),[C,_]=v.useState(!1),[z,M]=v.useState(""),[R,V]=v.useState(!1),G=F=>{T({...k,[F.target.name]:F.target.value})},Q=async F=>{if(F.preventDefault(),M(""),!k.username||!k.email||!k.password){M("Please fill in all fields.");return}if(k.password.length<6){M("Password should be at least 6 characters.");return}_(!0);try{const{data:N,error:j}=await ae.auth.signUp({email:k.email,password:k.password});if(j)throw j;const{error:D}=await ae.from("member_registrations").insert([{user_id:N?.user?.id||null,username:k.username,email:k.email,status:"pending"}]);if(D)throw D}catch(N){console.error(N)}finally{V(!0),_(!1)}},[X,K]=v.useState(!1),[te,fe]=v.useState(""),[pe,xe]=v.useState(null),[ke,Re]=v.useState(!1),[Se,H]=v.useState(!1),W=async()=>{try{await navigator.clipboard.writeText(tg),K(!0),setTimeout(()=>K(!1),2e3)}catch{}},ne=async F=>{F.preventDefault(),Re(!0),setTimeout(()=>{Re(!1),H(!0)},600)};return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`

        /* ── Background (identical to About) ── */
        .ab-root {
          background:
            radial-gradient(ellipse 800px 600px at 8% 0%, rgba(74,158,255,0.10), transparent 60%),
            radial-gradient(ellipse 750px 550px at 92% 15%, rgba(217,37,37,0.06), transparent 60%),
            linear-gradient(to bottom, #f5f8fb, #d3dde8);
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          transition: background 0.4s ease;
        }
        .dark .ab-root {
          background:
            radial-gradient(ellipse 950px 700px at 8% 5%, rgba(13,90,167,0.24), transparent 60%),
            radial-gradient(ellipse 850px 650px at 92% 25%, rgba(217,37,37,0.18), transparent 60%),
            radial-gradient(ellipse 1000px 800px at 50% 100%, rgba(13,90,167,0.16), transparent 65%),
            linear-gradient(to bottom, #001233, #00040c 65%, #00040c);
        }
        /* ── Chinese bg characters ── drifting motion, brighter in dark mode */
        .ab-bg-char {
          position: absolute;
          font-family: 'Noto Serif SC', 'PingFang SC', 'Songti SC', 'SimSun', serif;
          font-weight: 900;
          pointer-events: none;
          user-select: none;
          line-height: 1;
          z-index: 0;
          animation: abCharDrift 14s ease-in-out infinite;
          transition: color 0.4s ease, opacity 0.4s ease;
        }
        @keyframes abCharDrift {
          0%, 100% { transform: translate3d(0,0,0) rotate(var(--ab-rot, 0deg)); }
          50%      { transform: translate3d(0,-16px,0) rotate(calc(var(--ab-rot, 0deg) + 0.8deg)); }
        }
        .dark .ab-bg-char-blue {
          color: #4a9eff !important;
          opacity: 0.22;
          filter: drop-shadow(0 0 22px rgba(74,158,255,0.3));
        }
        .dark .ab-bg-char-red {
          color: #ff5b5b !important;
          opacity: 0.2;
          filter: drop-shadow(0 0 22px rgba(217,37,37,0.34));
        }
        @media (prefers-reduced-motion: reduce) {
          .ab-bg-char { animation: none !important; }
        }
        .ab-petal {
          position: absolute;
          width: 7px;
          height: 11px;
          border-radius: 80% 0 80% 0;
          opacity: 0;
          animation: abFallPetal linear infinite;
          top: -20px;
          z-index: 0;
        }
        @keyframes abFallPetal {
          0%   { transform: translateY(-5vh) rotate(0deg) translateX(0); opacity: 0; }
          8%   { opacity: 0.4; }
          92%  { opacity: 0.4; }
          100% { transform: translateY(105vh) rotate(540deg) translateX(50px); opacity: 0; }
        }

        /* ── Reveal animations (same timing/easing as About) ── */
        .reveal-auto {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-auto.in-view { opacity: 1; transform: translateY(0); }
        .reveal-left-auto {
          opacity: 0;
          transform: translateX(-32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-left-auto.in-view { opacity: 1; transform: translateX(0); }
        .reveal-right-auto {
          opacity: 0;
          transform: translateX(32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-right-auto.in-view { opacity: 1; transform: translateX(0); }

        .ab-eyebrow { display: inline-flex; align-items: center; gap: 0.6rem; }
        .ab-eyebrow .stem {
          width: 0; height: 1px; background: #D92525;
          transition: width 0.9s ease 0.15s;
        }
        .in-view .ab-eyebrow .stem { width: 2.5rem; }

        /* ── Cards: same glassmorphism as About's ab-premium-card ── */
        .ab-premium-card {
          position: relative;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.48);
          border: 1px solid rgba(255, 255, 255, 0.55);
          padding: 1.75rem;
          box-shadow: 0 4px 18px rgba(2, 50, 96, 0.06);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease,
            background 0.35s ease;
          overflow: hidden;
        }
        .ab-premium-card:hover {
          background: rgba(255, 255, 255, 0.62);
          transform: translateY(-6px);
          box-shadow: 0 14px 32px rgba(2, 50, 96, 0.12);
          border-color: rgba(255, 255, 255, 0.75);
        }
        .ab-premium-icon {
          width: 3rem; height: 3rem; border-radius: 12px;
          background: rgba(2,50,96,0.06);
          display: flex; align-items: center; justify-content: center;
          color: #023260; margin-bottom: 1rem;
          transition: background 0.3s ease, color 0.3s ease;
        }
        .ab-premium-card:hover .ab-premium-icon { background: #D92525; color: white; }
        .dark .ab-premium-card {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.35);
        }
        .dark .ab-premium-card:hover {
          background: rgba(255, 255, 255, 0.09);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 14px 32px rgba(0, 0, 0, 0.45), 0 0 30px rgba(217,37,37,0.2);
        }
        .dark .ab-premium-icon {
          background: rgba(255, 255, 255, 0.08);
          color: #7db3f5;
        }
        .dark .ab-premium-card:hover .ab-premium-icon { background: #D92525; color: white; }

        /* ── Join wizard ── */
        .mb-dot {
          width: 2.75rem; height: 2.75rem; border-radius: 9999px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          border: 2px solid rgba(2,50,96,0.15); background: rgba(255,255,255,0.55); color: #023260;
          font-weight: 700; font-size: 0.9rem;
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          transition: background 0.25s ease, border-color 0.25s ease, color 0.25s ease, box-shadow 0.25s ease;
        }
        .mb-dot.active { border-color: #023260; box-shadow: 0 0 0 4px rgba(2,50,96,0.12); }
        .mb-dot.done { background: #16a34a; border-color: #16a34a; color: white; }
        .mb-dot.locked { background: rgba(244,247,251,0.6); border-color: rgba(2,50,96,0.08); color: #9fb0c3; cursor: not-allowed; }
        .mb-dot:not(.locked) { cursor: pointer; }
        .dark .mb-dot {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.18);
          color: #f5f8fb;
        }
        .dark .mb-dot.active { border-color: #4a9eff; box-shadow: 0 0 0 4px rgba(74,158,255,0.18); }
        .dark .mb-dot.done { background: #16a34a; border-color: #16a34a; color: white; }
        .dark .mb-dot.locked { background: rgba(255,255,255,0.03); border-color: rgba(255,255,255,0.08); color: rgba(255,255,255,0.3); }
        .mb-dot-line {
          flex: 1 1 auto; height: 2px; margin: 0 0.5rem;
          background: rgba(2,50,96,0.15);
          transition: background 0.3s ease;
        }
        .mb-dot-line.done { background: #16a34a; }
        .dark .mb-dot-line { background: rgba(255,255,255,0.15); }

        /* ── Step panel: glassmorphism matching About's team panels ── */
        .mb-step-panel {
          background: rgba(255, 255, 255, 0.42);
          border: 1px solid rgba(255, 255, 255, 0.55);
          border-radius: 24px; padding: 2rem;
          box-shadow: 0 8px 28px rgba(2, 50, 96, 0.06);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          animation: mbStepIn 0.4s ease;
          transition: background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
        }
        @keyframes mbStepIn {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        html.dark .mb-step-panel {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 10px 30px rgba(0,0,0,0.4), 0 0 40px rgba(13,90,167,0.12);
        }
        .mb-step-icon {
          width: 3rem; height: 3rem; border-radius: 14px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          background: rgba(2,50,96,0.06); color: #023260;
          transition: background 0.25s ease, color 0.25s ease;
        }
        .mb-step-icon.done { background: #16a34a; color: white; }
        .dark .mb-step-icon { background: rgba(255, 255, 255, 0.08); color: #9fc4f0; }
        .dark .mb-step-icon.done { background: #16a34a; color: white; }
        .mb-step-num {
          font-size: 0.7rem; font-weight: 700; letter-spacing: 0.15em;
          text-transform: uppercase; color: #D92525; display: block; margin-bottom: 0.15rem;
        }

        /* ── Shared gradient buttons (same as About) ── */
        .ab-btn-gradient {
          position: relative;
          z-index: 1;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          font-size: 0.85rem;
          color: white;
          padding: 0.65rem 1.6rem;
          border-radius: 9999px;
          background: linear-gradient(115deg, #7a1220, #D92525 45%, #ff6b4a 75%, #D92525);
          background-size: 250% 250%;
          background-position: 0% 50%;
          box-shadow: 0 8px 20px rgba(217,37,37,0.35);
          transition: background-position 0.6s ease, transform 0.35s ease, box-shadow 0.35s ease;
        }
        .ab-btn-gradient::before {
          content: '';
          position: absolute;
          top: 0; left: -75%;
          width: 50%; height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255,255,255,0.45),
            transparent
          );
          transform: skewX(-20deg);
          transition: left 0.7s ease;
        }
        .ab-btn-gradient:hover {
          background-position: 100% 50%;
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 12px 26px rgba(217,37,37,0.5);
        }
        .ab-btn-gradient:hover::before {
          left: 125%;
        }
        .ab-btn-gradient:active {
          transform: translateY(0) scale(0.98);
        }
        .ab-btn-gradient .arrow-icon { transition: transform 0.3s ease; }
        .ab-btn-gradient:hover .arrow-icon { transform: translateX(3px); }
        .ab-btn-gradient:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
          box-shadow: 0 8px 20px rgba(217,37,37,0.35);
        }
        .dark .ab-btn-gradient { box-shadow: 0 6px 20px rgba(217,37,37,0.4); }
        .dark .ab-btn-gradient:hover { box-shadow: 0 8px 26px rgba(217,37,37,0.5); }

        .ab-btn-outline-blue {
          position: relative;
          z-index: 1;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          font-size: 0.85rem;
          color: white;
          padding: 0.65rem 1.6rem;
          border-radius: 9999px;
          background: linear-gradient(115deg, #011a36, #023260 40%, #0d5aa7 70%, #023260);
          background-size: 250% 250%;
          background-position: 0% 50%;
          box-shadow: 0 4px 14px rgba(2,50,96,0.35);
          transition: background-position 0.6s ease, transform 0.35s ease, box-shadow 0.35s ease;
        }
        .ab-btn-outline-blue::before {
          content: '';
          position: absolute;
          top: 0; left: -75%;
          width: 50%; height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255,255,255,0.5),
            transparent
          );
          transform: skewX(-20deg);
          transition: left 0.7s ease;
        }
        .ab-btn-outline-blue:hover {
          background-position: 100% 50%;
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 8px 22px rgba(2,50,96,0.5);
        }
        .ab-btn-outline-blue:hover::before {
          left: 125%;
        }
        .ab-btn-outline-blue:active {
          transform: translateY(0) scale(0.98);
        }
        .ab-btn-outline-blue .arrow-icon { transition: transform 0.3s ease; }
        .ab-btn-outline-blue:hover .arrow-icon { transform: translateX(3px) rotate(4deg); }
        .ab-btn-outline-blue:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
          box-shadow: 0 4px 14px rgba(2,50,96,0.35);
        }
        .dark .ab-btn-outline-blue { box-shadow: 0 4px 16px rgba(13,90,167,0.4); }
        .dark .ab-btn-outline-blue:hover { box-shadow: 0 6px 20px rgba(13,90,167,0.5); }

        @media (max-width: 480px) {
          .mb-dot { width: 2.25rem; height: 2.25rem; font-size: 0.8rem; }
          .mb-dot-line { margin: 0 0.25rem; }
          .mb-step-panel { padding: 1.25rem; border-radius: 18px; }
        }

        /* ── Payment card: kept as a bold solid accent panel, dark-glow to match About's palette ── */
        .mb-pay-card {
          border-radius: 22px;
          background: #023260;
          color: white;
          box-shadow: 0 10px 30px rgba(2,50,96,0.25);
          position: relative;
          overflow: hidden;
          padding: 1.5rem;
        }
        .dark .mb-pay-card { box-shadow: 0 10px 30px rgba(0,0,0,0.5), 0 0 30px rgba(13,90,167,0.2); }
        .mb-pay-number {
          font-family: monospace;
          letter-spacing: 0.08em;
        }
        .mb-copy-btn {
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .mb-copy-btn:hover { transform: translateY(-2px);
transition: .25s; }

        .mb-input {
          width: 100%;
          border: 1px solid rgba(2,50,96,0.15);
          border-radius: 12px;
          padding: 0.65rem 1rem;
          font-size: 0.9rem;
          color: #023260;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.4s ease, color 0.4s ease;
          background: rgba(255,255,255,0.6);
        }
        .mb-input::placeholder { color: rgba(2, 50, 96, 0.35); }
        .mb-input:focus {
          outline: none;
          border-color: #023260;
          box-shadow: 0 0 0 3px rgba(2,50,96,0.1);
        }
        .dark .mb-input {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.16);
          color: #f5f8fb;
        }
        .dark .mb-input::placeholder { color: rgba(255, 255, 255, 0.35); }
        .dark .mb-input:focus {
          border-color: #4a9eff;
          box-shadow: 0 0 0 3px rgba(74,158,255,0.15);
        }
        .mb-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: #023260;
          margin-bottom: 0.35rem;
          display: block;
          transition: color 0.4s ease;
        }
        .dark .mb-label { color: #f5f8fb; }

        /* ── FAQ card: glassmorphism matching About ── */
        .mb-faq-card {
          background: rgba(255, 255, 255, 0.42);
          border: 1px solid rgba(255, 255, 255, 0.55);
          border-radius: 16px;
          overflow: hidden;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          transition: border-color 0.25s ease, box-shadow 0.25s ease, background 0.4s ease;
        }
        .mb-faq-card:hover { border-color: rgba(255,255,255,0.75); background: rgba(255,255,255,0.55); }
        .mb-faq-card.open { border-color: #023260; box-shadow: 0 8px 22px rgba(2,50,96,0.08); }
        .dark .mb-faq-card { background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.1); }
        .dark .mb-faq-card:hover { border-color: rgba(255,255,255,0.25); background: rgba(255,255,255,0.08); }
        .dark .mb-faq-card.open { border-color: #4a9eff; box-shadow: 0 8px 24px rgba(0,0,0,0.4); }
        .mb-faq-index {
          width: 2rem; height: 2rem; border-radius: 9999px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.7rem; font-weight: 800; color: #D92525;
          background: rgba(217,37,37,0.08);
          transition: background 0.25s ease, color 0.25s ease;
        }
        .mb-faq-card.open .mb-faq-index { background: #023260; color: white; }
        .mb-faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease;
        }
        .mb-faq-answer.open { max-height: 220px; }

        /* ── Join CTA (identical to About's ab-cta) ── */
        .ab-cta {
          position: relative;
          border-radius: 28px;
          background: linear-gradient(135deg, #023260, #01213f);
          overflow: hidden;
          padding: 3.5rem 2rem;
        }
        .dark .ab-cta {
          background:
            radial-gradient(ellipse 700px 500px at 15% 20%, rgba(217,37,37,0.22), transparent 60%),
            radial-gradient(ellipse 750px 550px at 85% 80%, rgba(13,90,167,0.28), transparent 60%),
            linear-gradient(135deg, #011a36, #000710);
          box-shadow: 0 0 60px rgba(13,90,167,0.15) inset;
        }
        .ab-cta-char {
          position: absolute;
          font-weight: 700;
          color: rgba(255,255,255,0.1);
          pointer-events: none;
          user-select: none;
          line-height: 1;
          z-index: 0;
        }
        .ab-cta-btn {
          font-size: 0.95rem;
          padding: 0.85rem 2.25rem;
        }
        .ab-pulse-ring::after {
          content: '';
          position: absolute; inset: 0;
          border-radius: 9999px;
          border: 2px solid #D92525;
          animation: abPulseRing 2s ease-out infinite;
        }
        @keyframes abPulseRing {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .dark .ab-pulse-ring::after {
          border-color: #ff5b5b;
        }

      `}),l.jsxs("div",{className:"ab-root text-gray-800 dark:text-gray-100 pb-24",children:[C3.map((F,N)=>{const j={fontSize:F.size,"--ab-rot":`${F.rotate}deg`,transform:`rotate(${F.rotate}deg)`,animationDelay:F.delay,color:F.tint==="blue"?"rgba(2,50,96,0.13)":"rgba(204,34,51,0.13)"};return F.top!==void 0&&(j.top=F.top),F.bottom!==void 0&&(j.bottom=F.bottom),F.left!==void 0&&(j.left=F.left),F.right!==void 0&&(j.right=F.right),l.jsx("span",{className:`ab-bg-char ab-bg-char-${F.tint} ${F.hideMobile?"hidden md:block":""}`,style:j,children:F.char},N)}),N3.map((F,N)=>l.jsx("div",{className:"ab-petal",style:{left:F.left,background:F.color,animationDuration:F.duration,animationDelay:F.delay}},N)),l.jsxs("main",{className:"max-w-7xl mx-auto px-6 md:px-10 pt-32 flex flex-col gap-12 relative z-10",children:[l.jsx("div",{className:"reveal-auto relative pl-4 md:pl-8 w-full",children:l.jsxs("div",{className:"relative",children:[l.jsx("div",{className:"absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-[#D92525] opacity-20"}),l.jsxs("h1",{className:"text-2xl md:text-3xl font-extrabold pb-2 text-[#023260] dark:text-white relative",children:["Membership ",l.jsx("span",{className:"text-[#D92525]",children:"."}),l.jsx("span",{className:"absolute -top-2 right-4 w-8 h-8 bg-[#023260] dark:bg-[#0d5aa7] text-white text-xs flex items-center justify-center rounded-sm opacity-90 shadow-sm transform rotate-12",children:"IEEE"})]}),l.jsxs("h2",{className:"text-xl font-semibold text-[#023260] dark:text-white mb-3 pt-3 flex items-center gap-3",children:[l.jsx("span",{className:"w-1 h-5 bg-[#D92525] rounded-full"}),"Join the IEEE family"]}),l.jsx("p",{className:"text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-base max-w-3xl",children:"Membership opens the door to IEEE events, workshops, and a global network — locally with the branch and globally with IEEE.org. Create your IEEE account, register with our branch, and once the webmaster accepts your request you'll unlock the final step to pay your membership fee."}),l.jsxs("a",{href:"#join",className:"inline-flex items-center gap-2 text-[#023260] dark:text-white font-bold hover:text-[#D92525] dark:hover:text-[#D92525] transition group",children:["Start the registration process",l.jsx("span",{className:"group-hover:translate-x-1 transition-transform",children:"↓"})]})]})}),l.jsxs("section",{children:[l.jsxs("div",{className:"mb-10 text-center reveal-auto",children:[l.jsxs("span",{className:"ab-eyebrow justify-center",children:[l.jsx("span",{className:"stem h-px bg-[#D92525] block"}),l.jsx("span",{className:"text-xs font-semibold tracking-[0.25em] uppercase text-[#D92525]",children:"IEEE membership benifits"}),l.jsx("span",{className:"stem h-px bg-[#D92525] block"})]}),l.jsx("h2",{className:"text-3xl font-bold text-[#023260] dark:text-white mt-4",children:"Why join IEEE?"})]}),l.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-6",children:T3.map((F,N)=>{const j=F.icon;return l.jsxs("div",{className:"ab-premium-card reveal-auto",style:{transitionDelay:`${N*.08}s`},children:[l.jsx("div",{className:"ab-premium-icon",children:l.jsx(j,{size:22})}),l.jsx("h3",{className:"font-bold text-[#023260] dark:text-white mb-2",children:F.title}),l.jsx("p",{className:"text-gray-600 dark:text-gray-300 text-sm leading-relaxed",children:F.desc})]},N)})})]}),l.jsxs("section",{id:"join",children:[l.jsxs("div",{className:"mb-10 text-center reveal-auto",children:[l.jsxs("span",{className:"ab-eyebrow justify-center",children:[l.jsx("span",{className:"stem h-px bg-[#D92525] block"}),l.jsx("span",{className:"text-xs font-semibold tracking-[0.25em] uppercase text-[#D92525]",children:"How It Works"}),l.jsx("span",{className:"stem h-px bg-[#D92525] block"})]}),l.jsx("h2",{className:"text-3xl font-bold text-[#023260] dark:text-white mt-4",children:"How to Join"}),l.jsx("p",{className:"text-gray-600 dark:text-gray-300 mt-3 max-w-xl mx-auto",children:"Go through each step and hit Next when you're done. The last step, payment, only opens once our webmaster reviews and accepts your registration."})]}),l.jsxs("div",{className:"w-full",children:[l.jsx("div",{className:"flex items-center w-full mb-10 reveal-auto",children:[1,2,3,4].map(F=>{const N=F===1&&g||F===2&&x||F===3&&R||F===4&&Se,j=F>u;return l.jsxs(Ud.Fragment,{children:[l.jsx("button",{type:"button",onClick:()=>p(F),disabled:j,className:`mb-dot ${N?"done":""} ${i===F?"active":""} ${j?"locked":""}`,"aria-label":`Step ${F}`,children:N?l.jsx(Pr,{size:18}):j?l.jsx(Vr,{size:14}):F}),F<4&&l.jsx("div",{className:`mb-dot-line ${F<u?"done":""}`})]},F)})}),l.jsxs("div",{className:"mb-step-panel",children:[i===1&&l.jsxs("div",{className:"flex flex-col items-center text-center",children:[l.jsx("div",{className:`mb-step-icon mb-3 ${g?"done":""}`,children:g?l.jsx(Pr,{size:20}):l.jsx(yd,{size:20})}),l.jsx("span",{className:"mb-step-num",children:"Step 1 of 4"}),l.jsx("h3",{className:"font-bold text-[#023260] dark:text-white text-lg mb-3",children:"Create your IEEE account"}),l.jsx("p",{className:"text-gray-600 dark:text-gray-300 leading-relaxed mb-6 max-w-3xl",children:"Head to the official IEEE website and create your personal IEEE account. This is your global IEEE identity — you'll use the same email and password to sign in on ieee.org from now on. It only takes a couple of minutes: enter your name, email, and a password, then confirm your email address."}),l.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4",children:[l.jsx("a",{href:R3,target:"_blank",rel:"noopener noreferrer",className:"ab-btn-outline-blue",children:"Go to IEEE →"}),l.jsx("button",{type:"button",onClick:()=>{y(!0),m(2)},className:"ab-btn-gradient",children:"Next →"})]})]}),i===2&&l.jsxs("div",{className:"flex flex-col items-center text-center",children:[l.jsx("div",{className:`mb-step-icon mb-3 ${x?"done":""}`,children:x?l.jsx(Pr,{size:20}):l.jsx(d2,{size:20})}),l.jsx("span",{className:"mb-step-num",children:"Step 2 of 4"}),l.jsx("h3",{className:"font-bold text-[#023260] dark:text-white text-lg mb-3",children:"Open the membership page"}),l.jsx("p",{className:"text-gray-600 dark:text-gray-300 leading-relaxed mb-6 max-w-3xl",children:"From your new IEEE account, open the official membership page and take a look at the global membership options available to you (student, graduate, and so on). You don't need to complete a payment there — this just links your global IEEE profile to a membership type."}),l.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4",children:[l.jsx("a",{href:z3,target:"_blank",rel:"noopener noreferrer",className:"ab-btn-outline-blue",children:"Open membership page →"}),l.jsx("button",{type:"button",onClick:()=>{S(!0),m(3)},className:"ab-btn-gradient",children:"Next →"})]})]}),i===3&&l.jsxs("div",{className:"flex flex-col items-center text-center",children:[l.jsx("div",{className:`mb-step-icon mb-3 ${R?"done":""}`,children:R?l.jsx(Pr,{size:20}):l.jsx(Fi,{size:20})}),l.jsx("span",{className:"mb-step-num",children:"Step 3 of 4"}),l.jsx("h3",{className:"font-bold text-[#023260] dark:text-white text-lg mb-3",children:"Register with our branch"}),l.jsx("p",{className:"text-gray-600 dark:text-gray-300 leading-relaxed mb-6 max-w-3xl",children:"Now register with the ECU branch itself. Choose a username, set a password, and add the personal email you'd like us to use — that's the address we'll send your acceptance notice to once the webmaster reviews your request."}),R?l.jsxs("div",{className:"max-w-2xl w-full flex flex-col items-center",children:[l.jsxs("div",{className:"flex items-center gap-2 text-sm text-[#023260] dark:text-white bg-white/40 dark:bg-white/5 rounded-xl px-4 py-3 mb-5 backdrop-blur-sm",children:[l.jsx(Pr,{size:16,className:"text-green-600 shrink-0"}),"Registered! We'll email ",k.email," once the webmaster reviews your request."]}),l.jsx("button",{type:"button",onClick:()=>m(4),className:"ab-btn-gradient",children:"Next →"})]}):l.jsxs("form",{onSubmit:Q,className:"grid sm:grid-cols-2 gap-4 max-w-2xl w-full text-left",children:[l.jsxs("div",{children:[l.jsx("label",{className:"mb-label",children:"Username"}),l.jsx("input",{className:"mb-input",name:"username",value:k.username,onChange:G,placeholder:"Choose a username"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"mb-label",children:"Personal email"}),l.jsx("input",{className:"mb-input",type:"email",name:"email",value:k.email,onChange:G,placeholder:"you@example.com"})]}),l.jsxs("div",{className:"sm:col-span-2",children:[l.jsx("label",{className:"mb-label",children:"Password"}),l.jsx("input",{className:"mb-input",type:"password",name:"password",value:k.password,onChange:G,placeholder:"At least 6 characters"})]}),z&&l.jsxs("div",{className:"sm:col-span-2 flex items-center gap-2 text-[#D92525] text-sm",children:[l.jsx(l2,{size:16}),z]}),l.jsx("div",{className:"sm:col-span-2",children:l.jsx("button",{type:"submit",disabled:C,className:"ab-btn-gradient",children:C?l.jsxs(l.Fragment,{children:[l.jsx(em,{size:18,className:"animate-spin"})," ","Registering..."]}):l.jsxs(l.Fragment,{children:[l.jsx(yd,{size:18})," Register"]})})})]})]}),i===4&&l.jsxs("div",{className:"flex flex-col items-center text-center",children:[l.jsx("div",{className:`mb-step-icon mb-3 ${Se?"done":""}`,children:Se?l.jsx(Pr,{size:20}):R?l.jsx(g1,{size:20}):l.jsx(Vr,{size:20})}),l.jsx("span",{className:"mb-step-num",children:"Step 4 of 4"}),l.jsx("h3",{className:"font-bold text-[#023260] dark:text-white text-lg mb-3",children:"Pay your membership fee"}),R?l.jsxs("div",{className:"mb-pay-card w-full text-center",children:[l.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-x-10 gap-y-4 mb-5",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-white/50 text-[10px] uppercase tracking-[0.2em] font-semibold mb-1",children:"Fee"}),l.jsx("p",{className:"text-2xl font-extrabold text-white",children:ag})]}),l.jsxs("div",{className:"bg-white/10 rounded-2xl pl-4 pr-2 py-2 flex items-center gap-3",children:[l.jsx("span",{className:"mb-pay-number tracking-wider",children:tg}),l.jsx("button",{onClick:W,className:"mb-copy-btn bg-[#D92525] hover:bg-white hover:text-[#023260] text-white rounded-full p-2 shrink-0","aria-label":"Copy number",type:"button",children:X?l.jsx(Pr,{size:16}):l.jsx(p2,{size:16})})]})]}),l.jsxs("p",{className:"text-white/60 text-xs mb-6 max-w-2xl mx-auto leading-relaxed",children:["Open Vodafone Cash or dial"," ",l.jsx("span",{className:"font-mono",children:"*9#"}),", transfer"," ",ag," to the number above, then keep your transaction ID and receipt handy."]}),l.jsx("div",{className:"pt-6 border-t border-white/15",children:Se?l.jsxs("div",{className:"flex items-center justify-center gap-2 text-sm bg-white/10 rounded-xl px-4 py-3 max-w-2xl mx-auto text-center",children:[l.jsx(Pr,{size:16,className:"text-green-400 shrink-0"}),"Thanks! We received your transaction ID and screenshot. Your membership will be activated once we confirm the transfer."]}):l.jsxs("form",{onSubmit:ne,className:"flex flex-col items-center gap-4",children:[l.jsx("p",{className:"text-white/70 text-sm max-w-2xl",children:"Submit your transaction ID and a screenshot of the transfer so we can confirm your payment."}),l.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 w-full max-w-2xl text-left",children:[l.jsxs("div",{children:[l.jsx("label",{className:"text-xs font-semibold text-white/70 mb-1.5 block",children:"Vodafone Cash transaction ID"}),l.jsx("input",{className:"w-full rounded-xl px-4 py-2.5 text-sm bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/50",value:te,onChange:F=>fe(F.target.value),placeholder:"e.g. 123456789012"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"text-xs font-semibold text-white/70 mb-1.5 block",children:"Screenshot of the transfer"}),l.jsx("input",{type:"file",accept:"image/*",onChange:F=>xe(F.target.files?.[0]||null),className:"w-full text-sm text-white/80 rounded-xl bg-white/10 border border-white/20 border-dashed px-3 py-2 file:mr-3 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:bg-[#D92525] file:text-white file:text-xs file:font-semibold"}),pe&&l.jsx("p",{className:"text-white/50 text-xs mt-1.5",children:pe.name})]})]}),l.jsx("button",{type:"submit",disabled:!te||!pe||ke,className:"ab-btn-gradient",children:ke?l.jsxs(l.Fragment,{children:[l.jsx(em,{size:16,className:"animate-spin"})," ","Submitting..."]}):"Submit payment proof"})]})})]}):l.jsxs("p",{className:"text-gray-500 dark:text-gray-400 leading-relaxed flex items-center justify-center gap-2 text-center",children:[l.jsx(Vr,{size:14})," Complete step 3 first — this step unlocks once the webmaster accepts your registration."]})]})]},i)]})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"mb-10 text-center reveal-auto",children:[l.jsxs("span",{className:"ab-eyebrow justify-center",children:[l.jsx("span",{className:"stem h-px bg-[#D92525] block"}),l.jsx("span",{className:"text-xs font-semibold tracking-[0.25em] uppercase text-[#D92525]",children:"FAQ"}),l.jsx("span",{className:"stem h-px bg-[#D92525] block"})]}),l.jsx("h2",{className:"text-3xl font-bold text-[#023260] dark:text-white mt-4",children:"Frequently Asked Questions"})]}),l.jsx("div",{className:"mb-faq-block reveal-auto flex flex-col gap-3",children:A3.map((F,N)=>l.jsxs("div",{className:`mb-faq-card ${a===N?"open":""}`,children:[l.jsxs("button",{type:"button",onClick:()=>s(a===N?null:N),className:"w-full flex items-center justify-center gap-4 text-center px-4 py-5",children:[l.jsx("span",{className:"font-semibold text-[#023260] dark:text-white text-sm md:text-base",children:F.q}),l.jsx(gn,{size:18,className:`text-[#D92525] shrink-0 transition-transform ${a===N?"rotate-180":""}`})]}),l.jsx("div",{className:`mb-faq-answer ${a===N?"open":""}`,children:l.jsx("p",{className:"text-gray-600 dark:text-gray-300 text-sm leading-relaxed text-center px-4 pb-5 max-w-2xl mx-auto",children:F.a})})]},N))})]}),l.jsxs("section",{className:"ab-cta reveal-auto text-center",children:[l.jsx("span",{className:"ab-cta-char",style:{fontSize:150,top:"-8%",left:"-2%"},children:"会"}),l.jsx("span",{className:"ab-cta-char",style:{fontSize:120,bottom:"-5%",right:"-2%"},children:"员"}),l.jsxs("div",{className:"relative z-10 max-w-2xl mx-auto",children:[l.jsx("span",{className:"text-xs font-semibold tracking-[0.25em] uppercase text-[#D92525]",children:"Global Membership"}),l.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-white mt-3",children:"Looking for Global IEEE Membership?"}),l.jsx("p",{className:"text-white/80 mt-3 mb-8 leading-relaxed",children:"Branch membership connects you to local activities. To enjoy worldwide IEEE benefits, complete your official IEEE membership registration."}),l.jsx("div",{className:"flex flex-wrap items-center justify-center gap-4",children:l.jsx("a",{href:"https://www.ieee.org/membership/join/index.html",target:"_blank",rel:"noopener noreferrer",children:l.jsx("button",{className:"ab-btn-gradient ab-pulse-ring ab-cta-btn font-semibold",children:"Visit IEEE"})})})]})]})]})]})]})}const D3=[{char:"敬",top:"6%",left:"4%",size:160,rotate:-8,delay:"0s"},{char:"请",top:"68%",left:"2%",size:130,rotate:6,delay:"1.8s"},{char:"期",top:"12%",left:"85%",size:190,rotate:10,delay:"0.9s"},{char:"待",top:"64%",left:"88%",size:150,rotate:-12,delay:"2.6s"},{char:"龍",top:"38%",left:"46%",size:230,rotate:4,delay:"3.4s"},{char:"福",top:"88%",left:"58%",size:110,rotate:-6,delay:"1.2s"}],M3=[{left:"8%",duration:"9s",delay:"0s"},{left:"25%",duration:"11s",delay:"2s"},{left:"50%",duration:"8s",delay:"4.5s"},{left:"72%",duration:"13s",delay:"1s"},{left:"90%",duration:"10s",delay:"3s"}];function U3(){return v.useEffect(()=>{document.title="Coming Soon — IEEE ECU SB"},[]),l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Serif+Display&family=Noto+Serif+SC:wght@700&display=swap');

        .cs-scene {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'DM Sans', sans-serif;
          background:
            radial-gradient(1100px 700px at 15% 20%, rgba(2,50,96,0.06), transparent 60%),
            radial-gradient(900px 600px at 85% 80%, rgba(2,50,96,0.05), transparent 55%),
            linear-gradient(155deg, #eef2f6 0%, #dfe7ee 45%, #cfd9e3 100%);
          transition: background 0.4s ease;
        }
        .dark .cs-scene {
          background:
            radial-gradient(1100px 700px at 15% 20%, rgba(13,90,167,0.22), transparent 60%),
            radial-gradient(950px 650px at 85% 80%, rgba(217,37,37,0.16), transparent 60%),
            radial-gradient(1000px 800px at 50% 100%, rgba(13,90,167,0.14), transparent 65%),
            linear-gradient(155deg, #001233 0%, #00081a 55%, #00040c 100%);
        }

        .cs-cjk-layer { position: absolute; inset: 0; z-index: 0; overflow: hidden; pointer-events: none; }
        .cs-cjk-char {
          position: absolute;
          font-family: 'Noto Serif SC', 'PingFang SC', 'Songti SC', 'SimSun', serif;
          font-weight: 700;
          color: #023260;
          opacity: 0.05;
          line-height: 1;
          white-space: nowrap;
          user-select: none;
          animation: csDrift 14s ease-in-out infinite;
          transition: color 0.4s ease, opacity 0.4s ease;
        }
        .dark .cs-cjk-char {
          color: #4a9eff;
          opacity: 0.14;
          filter: drop-shadow(0 0 24px rgba(13,90,167,0.2));
        }
        @keyframes csDrift {
          0%, 100% { transform: translate3d(0,0,0) rotate(var(--cs-rot, 0deg)); }
          50%      { transform: translate3d(0,-14px,0) rotate(calc(var(--cs-rot, 0deg) + 0.6deg)); }
        }

        .cs-petal {
          position: absolute;
          width: 7px; height: 11px;
          border-radius: 80% 0 80% 0;
          opacity: 0;
          top: -20px;
          z-index: 0;
          pointer-events: none;
          background: #023260;
          animation: csFallPetal linear infinite;
          transition: background 0.4s ease;
        }
        .dark .cs-petal { background: #cc2233; }
        @keyframes csFallPetal {
          0%   { transform: translateY(-5vh) rotate(0deg) translateX(0); opacity: 0; }
          8%   { opacity: 0.35; }
          92%  { opacity: 0.35; }
          100% { transform: translateY(105vh) rotate(540deg) translateX(50px); opacity: 0; }
        }

        .cs-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 32px 20px;
          max-width: 640px;
          animation: csFadeUp 1s cubic-bezier(0.19,1,0.22,1) both;
        }
        @keyframes csFadeUp {
          0% { opacity: 0; transform: translateY(18px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* ── Signature element: rotating red seal / chop ── */
        .cs-seal-wrap {
          position: relative;
          width: 108px;
          height: 108px;
          margin-bottom: 22px;
        }
        .cs-seal-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          animation: csSealSpin 40s linear infinite;
        }
        .cs-seal-ring svg { width: 100%; height: 100%; }
        .cs-seal-ring text {
          font-family: 'DM Sans', sans-serif;
          font-size: 6.4px;
          font-weight: 600;
          letter-spacing: 2px;
          fill: rgba(2,50,96,0.55);
          text-transform: uppercase;
          transition: fill 0.4s ease;
        }
        .dark .cs-seal-ring text {
          fill: rgba(125,179,245,0.7);
        }
        @keyframes csSealSpin { to { transform: rotate(360deg); } }

        .cs-seal-stamp {
          position: absolute;
          inset: 14px;
          border-radius: 14px;
          background: linear-gradient(155deg, #D92525, #a8171a 120%);
          box-shadow:
            0 10px 26px rgba(217,37,37,0.35),
            inset 0 1px 0 rgba(255,255,255,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          transform: rotate(-4deg);
          transition: box-shadow 0.4s ease;
        }
        .dark .cs-seal-stamp {
          box-shadow:
            0 10px 30px rgba(217,37,37,0.5),
            0 0 34px rgba(217,37,37,0.35),
            inset 0 1px 0 rgba(255,255,255,0.25);
        }
        .cs-seal-stamp span {
          font-family: 'Noto Serif SC', serif;
          font-weight: 700;
          font-size: 15px;
          line-height: 1.15;
          color: rgba(255,255,255,0.94);
          writing-mode: vertical-rl;
          letter-spacing: 2px;
        }

        .cs-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #D92525;
          margin-bottom: 18px;
        }
        .cs-eyebrow .cs-stem { width: 28px; height: 1px; background: rgba(217,37,37,0.4); transition: background 0.4s ease; }
        .dark .cs-eyebrow .cs-stem { background: rgba(217,37,37,0.55); }

        .cs-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(2.4rem, 7vw, 4.2rem);
          line-height: 1.05;
          color: #023260;
          margin-bottom: 18px;
          transition: color 0.4s ease;
        }
        .dark .cs-title { color: #f5f8fb; }

        .cs-sub {
          font-size: 14.5px;
          color: #4b5768;
          line-height: 1.7;
          max-width: 420px;
          margin-bottom: 34px;
          transition: color 0.4s ease;
        }
        .dark .cs-sub { color: rgba(245,248,251,0.65); }

        .cs-divider { height: 1px; width: 40px; background: rgba(2,50,96,0.25); margin-bottom: 30px; transition: background 0.4s ease; }
        .dark .cs-divider { background: rgba(255,255,255,0.18); }

        .cs-socials { display: flex; align-items: center; gap: 14px; }
        .cs-social-btn {
          width: 42px; height: 42px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: rgba(2,50,96,0.06);
          border: 1px solid rgba(2,50,96,0.16);
          color: #023260;
          transition: background 0.3s ease, color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .cs-social-btn:hover {
          background: #023260;
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(2,50,96,0.28);
        }
        .dark .cs-social-btn {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.14);
          color: #9fc4f0;
        }
        .dark .cs-social-btn:hover {
          background: #D92525;
          border-color: #D92525;
          color: #fff;
          box-shadow: 0 8px 22px rgba(217,37,37,0.4), 0 0 20px rgba(217,37,37,0.3);
        }

        @media (prefers-reduced-motion: reduce) {
          .cs-cjk-char, .cs-petal, .cs-content, .cs-seal-ring {
            animation: none !important;
          }
        }
      `}),l.jsxs("div",{className:"cs-scene",children:[l.jsx("div",{className:"cs-cjk-layer",children:D3.map((r,a)=>l.jsx("span",{className:"cs-cjk-char",style:{top:r.top,left:r.left,fontSize:r.size,"--cs-rot":`${r.rotate}deg`,transform:`rotate(${r.rotate}deg)`,animationDelay:r.delay},children:r.char},a))}),M3.map((r,a)=>l.jsx("div",{className:"cs-petal",style:{left:r.left,animationDuration:r.duration,animationDelay:r.delay}},a)),l.jsxs("div",{className:"cs-content",children:[l.jsxs("div",{className:"cs-seal-wrap",children:[l.jsx("div",{className:"cs-seal-ring",children:l.jsxs("svg",{viewBox:"0 0 100 100",children:[l.jsx("path",{id:"cs-seal-circle",fill:"none",d:"M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"}),l.jsx("text",{children:l.jsx("textPath",{href:"#cs-seal-circle",startOffset:"0%",children:"IEEE ECU SB • IEEE ECU SB • IEEE ECU SB •"})})]})}),l.jsx("div",{className:"cs-seal-stamp",children:l.jsx("span",{children:"敬请期待"})})]}),l.jsxs("span",{className:"cs-eyebrow",children:[l.jsx("span",{className:"cs-stem"}),"Something new is on the way",l.jsx("span",{className:"cs-stem"})]}),l.jsx("h1",{className:"cs-title",children:"Coming Soon"}),l.jsx("p",{className:"cs-sub",children:"We're building the next chapter for IEEE ECU Student Branch. Follow along on our socials to catch the reveal first."}),l.jsx("div",{className:"cs-divider"})]})]})]})}function L3(){const{pathname:r}=ta(),a=Jy(),s=v.useRef(new Map);return v.useEffect(()=>{"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual")},[]),v.useEffect(()=>()=>{s.current.set(r,window.scrollY)},[r]),v.useEffect(()=>{if(a==="POP"){const i=s.current.get(r);if(i!=null){requestAnimationFrame(()=>{window.scrollTo(0,i)});return}}window.scrollTo(0,0)},[r,a]),null}function B3(){const a=ta().pathname.toLowerCase().replace(/\/$/,"")||"/",s=["/login","/signup"],i=["/login","/signup"];return l.jsxs(l.Fragment,{children:[l.jsx(L3,{}),!s.includes(a)&&l.jsx(kk,{}),l.jsx("main",{style:{minHeight:"80vh"},children:l.jsxs(hv,{children:[l.jsx(zt,{path:"/",element:l.jsx(_k,{})}),l.jsx(zt,{path:"/about",element:l.jsx(qk,{})}),l.jsx(zt,{path:"/login",element:l.jsx(tS,{})}),l.jsx(zt,{path:"/reset-password",element:l.jsx(aS,{})}),l.jsx(zt,{path:"/signup",element:l.jsx(BS,{})}),l.jsx(zt,{path:"/committees",element:l.jsx(Fg,{})}),l.jsx(zt,{path:"/nontechnicalteam",element:l.jsx(Kk,{})}),l.jsx(zt,{path:"/technicalteam",element:l.jsx(eS,{})}),l.jsx(zt,{path:"/heads",element:l.jsx(Kg,{})}),l.jsx(zt,{path:"/contactus",element:l.jsx(GS,{})}),l.jsx(zt,{path:"/timeline",element:l.jsx(S3,{})}),l.jsx(zt,{path:"/settings",element:l.jsx(E3,{})}),l.jsx(zt,{path:"/ComingSoon",element:l.jsx(U3,{})}),l.jsx(zt,{path:"/Membership",element:l.jsx(O3,{})}),l.jsx(zt,{path:"/account",element:l.jsx(a3,{})})]})}),!i.includes(a)&&l.jsx(Sk,{})]})}function H3(){return l.jsx(Uv,{basename:"/IEEE-ECU-SB-Website",children:l.jsx(r3,{children:l.jsx(B3,{})})})}(function(){var r=sessionStorage.redirect;delete sessionStorage.redirect,r&&r!==location.href&&history.replaceState(null,null,r)})();wy.createRoot(document.getElementById("root")).render(l.jsx(Ud.StrictMode,{children:l.jsx(H3,{})}));
