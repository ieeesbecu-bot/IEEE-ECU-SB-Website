(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))i(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function s(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function i(c){if(c.ep)return;c.ep=!0;const d=s(c);fetch(c.href,d)}})();function Cu(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Gd={exports:{}},yi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function uy(){if(zp)return yi;zp=1;var r=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function s(i,c,d){var h=null;if(d!==void 0&&(h=""+d),c.key!==void 0&&(h=""+c.key),"key"in c){d={};for(var p in c)p!=="key"&&(d[p]=c[p])}else d=c;return c=d.ref,{$$typeof:r,type:i,key:h,ref:c!==void 0?c:null,props:d}}return yi.Fragment=a,yi.jsx=s,yi.jsxs=s,yi}var Op;function hy(){return Op||(Op=1,Gd.exports=uy()),Gd.exports}var l=hy(),Vd={exports:{}},je={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp;function fy(){if(Dp)return je;Dp=1;var r=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),k=Symbol.iterator;function S(_){return _===null||typeof _!="object"?null:(_=k&&_[k]||_["@@iterator"],typeof _=="function"?_:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,E={};function B(_,A,q){this.props=_,this.context=A,this.refs=E,this.updater=q||N}B.prototype.isReactComponent={},B.prototype.setState=function(_,A){if(typeof _!="object"&&typeof _!="function"&&_!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,_,A,"setState")},B.prototype.forceUpdate=function(_){this.updater.enqueueForceUpdate(this,_,"forceUpdate")};function M(){}M.prototype=B.prototype;function T(_,A,q){this.props=_,this.context=A,this.refs=E,this.updater=q||N}var I=T.prototype=new M;I.constructor=T,C(I,B.prototype),I.isPureReactComponent=!0;var X=Array.isArray;function J(){}var z={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;function te(_,A,q){var F=q.ref;return{$$typeof:r,type:_,key:A,ref:F!==void 0?F:null,props:q}}function le(_,A){return te(_.type,A,_.props)}function fe(_){return typeof _=="object"&&_!==null&&_.$$typeof===r}function ce(_){var A={"=":"=0",":":"=2"};return"$"+_.replace(/[=:]/g,function(q){return A[q]})}var Se=/\/+/g;function ve(_,A){return typeof _=="object"&&_!==null&&_.key!=null?ce(""+_.key):A.toString(36)}function Me(_){switch(_.status){case"fulfilled":return _.value;case"rejected":throw _.reason;default:switch(typeof _.status=="string"?_.then(J,J):(_.status="pending",_.then(function(A){_.status==="pending"&&(_.status="fulfilled",_.value=A)},function(A){_.status==="pending"&&(_.status="rejected",_.reason=A)})),_.status){case"fulfilled":return _.value;case"rejected":throw _.reason}}throw _}function O(_,A,q,F,ne){var ke=typeof _;(ke==="undefined"||ke==="boolean")&&(_=null);var Ae=!1;if(_===null)Ae=!0;else switch(ke){case"bigint":case"string":case"number":Ae=!0;break;case"object":switch(_.$$typeof){case r:case a:Ae=!0;break;case y:return Ae=_._init,O(Ae(_._payload),A,q,F,ne)}}if(Ae)return ne=ne(_),Ae=F===""?"."+ve(_,0):F,X(ne)?(q="",Ae!=null&&(q=Ae.replace(Se,"$&/")+"/"),O(ne,A,q,"",function(Dt){return Dt})):ne!=null&&(fe(ne)&&(ne=le(ne,q+(ne.key==null||_&&_.key===ne.key?"":(""+ne.key).replace(Se,"$&/")+"/")+Ae)),A.push(ne)),1;Ae=0;var $e=F===""?".":F+":";if(X(_))for(var Ne=0;Ne<_.length;Ne++)F=_[Ne],ke=$e+ve(F,Ne),Ae+=O(F,A,q,ke,ne);else if(Ne=S(_),typeof Ne=="function")for(_=Ne.call(_),Ne=0;!(F=_.next()).done;)F=F.value,ke=$e+ve(F,Ne++),Ae+=O(F,A,q,ke,ne);else if(ke==="object"){if(typeof _.then=="function")return O(Me(_),A,q,F,ne);throw A=String(_),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(_).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.")}return Ae}function ee(_,A,q){if(_==null)return _;var F=[],ne=0;return O(_,F,"","",function(ke){return A.call(q,ke,ne++)}),F}function ae(_){if(_._status===-1){var A=_._result;A=A(),A.then(function(q){(_._status===0||_._status===-1)&&(_._status=1,_._result=q)},function(q){(_._status===0||_._status===-1)&&(_._status=2,_._result=q)}),_._status===-1&&(_._status=0,_._result=A)}if(_._status===1)return _._result.default;throw _._result}var xe=typeof reportError=="function"?reportError:function(_){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var A=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof _=="object"&&_!==null&&typeof _.message=="string"?String(_.message):String(_),error:_});if(!window.dispatchEvent(A))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",_);return}console.error(_)},Z={map:ee,forEach:function(_,A,q){ee(_,function(){A.apply(this,arguments)},q)},count:function(_){var A=0;return ee(_,function(){A++}),A},toArray:function(_){return ee(_,function(A){return A})||[]},only:function(_){if(!fe(_))throw Error("React.Children.only expected to receive a single React element child.");return _}};return je.Activity=x,je.Children=Z,je.Component=B,je.Fragment=s,je.Profiler=c,je.PureComponent=T,je.StrictMode=i,je.Suspense=m,je.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,je.__COMPILER_RUNTIME={__proto__:null,c:function(_){return z.H.useMemoCache(_)}},je.cache=function(_){return function(){return _.apply(null,arguments)}},je.cacheSignal=function(){return null},je.cloneElement=function(_,A,q){if(_==null)throw Error("The argument must be a React element, but you passed "+_+".");var F=C({},_.props),ne=_.key;if(A!=null)for(ke in A.key!==void 0&&(ne=""+A.key),A)!Q.call(A,ke)||ke==="key"||ke==="__self"||ke==="__source"||ke==="ref"&&A.ref===void 0||(F[ke]=A[ke]);var ke=arguments.length-2;if(ke===1)F.children=q;else if(1<ke){for(var Ae=Array(ke),$e=0;$e<ke;$e++)Ae[$e]=arguments[$e+2];F.children=Ae}return te(_.type,ne,F)},je.createContext=function(_){return _={$$typeof:h,_currentValue:_,_currentValue2:_,_threadCount:0,Provider:null,Consumer:null},_.Provider=_,_.Consumer={$$typeof:d,_context:_},_},je.createElement=function(_,A,q){var F,ne={},ke=null;if(A!=null)for(F in A.key!==void 0&&(ke=""+A.key),A)Q.call(A,F)&&F!=="key"&&F!=="__self"&&F!=="__source"&&(ne[F]=A[F]);var Ae=arguments.length-2;if(Ae===1)ne.children=q;else if(1<Ae){for(var $e=Array(Ae),Ne=0;Ne<Ae;Ne++)$e[Ne]=arguments[Ne+2];ne.children=$e}if(_&&_.defaultProps)for(F in Ae=_.defaultProps,Ae)ne[F]===void 0&&(ne[F]=Ae[F]);return te(_,ke,ne)},je.createRef=function(){return{current:null}},je.forwardRef=function(_){return{$$typeof:p,render:_}},je.isValidElement=fe,je.lazy=function(_){return{$$typeof:y,_payload:{_status:-1,_result:_},_init:ae}},je.memo=function(_,A){return{$$typeof:g,type:_,compare:A===void 0?null:A}},je.startTransition=function(_){var A=z.T,q={};z.T=q;try{var F=_(),ne=z.S;ne!==null&&ne(q,F),typeof F=="object"&&F!==null&&typeof F.then=="function"&&F.then(J,xe)}catch(ke){xe(ke)}finally{A!==null&&q.types!==null&&(A.types=q.types),z.T=A}},je.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},je.use=function(_){return z.H.use(_)},je.useActionState=function(_,A,q){return z.H.useActionState(_,A,q)},je.useCallback=function(_,A){return z.H.useCallback(_,A)},je.useContext=function(_){return z.H.useContext(_)},je.useDebugValue=function(){},je.useDeferredValue=function(_,A){return z.H.useDeferredValue(_,A)},je.useEffect=function(_,A){return z.H.useEffect(_,A)},je.useEffectEvent=function(_){return z.H.useEffectEvent(_)},je.useId=function(){return z.H.useId()},je.useImperativeHandle=function(_,A,q){return z.H.useImperativeHandle(_,A,q)},je.useInsertionEffect=function(_,A){return z.H.useInsertionEffect(_,A)},je.useLayoutEffect=function(_,A){return z.H.useLayoutEffect(_,A)},je.useMemo=function(_,A){return z.H.useMemo(_,A)},je.useOptimistic=function(_,A){return z.H.useOptimistic(_,A)},je.useReducer=function(_,A,q){return z.H.useReducer(_,A,q)},je.useRef=function(_){return z.H.useRef(_)},je.useState=function(_){return z.H.useState(_)},je.useSyncExternalStore=function(_,A,q){return z.H.useSyncExternalStore(_,A,q)},je.useTransition=function(){return z.H.useTransition()},je.version="19.2.0",je}var Mp;function Tu(){return Mp||(Mp=1,Vd.exports=fy()),Vd.exports}var v=Tu();const Au=Cu(v);var Xd={exports:{}},vi={},Kd={exports:{}},Fd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function py(){return Lp||(Lp=1,(function(r){function a(O,ee){var ae=O.length;O.push(ee);e:for(;0<ae;){var xe=ae-1>>>1,Z=O[xe];if(0<c(Z,ee))O[xe]=ee,O[ae]=Z,ae=xe;else break e}}function s(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var ee=O[0],ae=O.pop();if(ae!==ee){O[0]=ae;e:for(var xe=0,Z=O.length,_=Z>>>1;xe<_;){var A=2*(xe+1)-1,q=O[A],F=A+1,ne=O[F];if(0>c(q,ae))F<Z&&0>c(ne,q)?(O[xe]=ne,O[F]=ae,xe=F):(O[xe]=q,O[A]=ae,xe=A);else if(F<Z&&0>c(ne,ae))O[xe]=ne,O[F]=ae,xe=F;else break e}}return ee}function c(O,ee){var ae=O.sortIndex-ee.sortIndex;return ae!==0?ae:O.id-ee.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;r.unstable_now=function(){return d.now()}}else{var h=Date,p=h.now();r.unstable_now=function(){return h.now()-p}}var m=[],g=[],y=1,x=null,k=3,S=!1,N=!1,C=!1,E=!1,B=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;function I(O){for(var ee=s(g);ee!==null;){if(ee.callback===null)i(g);else if(ee.startTime<=O)i(g),ee.sortIndex=ee.expirationTime,a(m,ee);else break;ee=s(g)}}function X(O){if(C=!1,I(O),!N)if(s(m)!==null)N=!0,J||(J=!0,ce());else{var ee=s(g);ee!==null&&Me(X,ee.startTime-O)}}var J=!1,z=-1,Q=5,te=-1;function le(){return E?!0:!(r.unstable_now()-te<Q)}function fe(){if(E=!1,J){var O=r.unstable_now();te=O;var ee=!0;try{e:{N=!1,C&&(C=!1,M(z),z=-1),S=!0;var ae=k;try{t:{for(I(O),x=s(m);x!==null&&!(x.expirationTime>O&&le());){var xe=x.callback;if(typeof xe=="function"){x.callback=null,k=x.priorityLevel;var Z=xe(x.expirationTime<=O);if(O=r.unstable_now(),typeof Z=="function"){x.callback=Z,I(O),ee=!0;break t}x===s(m)&&i(m),I(O)}else i(m);x=s(m)}if(x!==null)ee=!0;else{var _=s(g);_!==null&&Me(X,_.startTime-O),ee=!1}}break e}finally{x=null,k=ae,S=!1}ee=void 0}}finally{ee?ce():J=!1}}}var ce;if(typeof T=="function")ce=function(){T(fe)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,ve=Se.port2;Se.port1.onmessage=fe,ce=function(){ve.postMessage(null)}}else ce=function(){B(fe,0)};function Me(O,ee){z=B(function(){O(r.unstable_now())},ee)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(O){O.callback=null},r.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<O?Math.floor(1e3/O):5},r.unstable_getCurrentPriorityLevel=function(){return k},r.unstable_next=function(O){switch(k){case 1:case 2:case 3:var ee=3;break;default:ee=k}var ae=k;k=ee;try{return O()}finally{k=ae}},r.unstable_requestPaint=function(){E=!0},r.unstable_runWithPriority=function(O,ee){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var ae=k;k=O;try{return ee()}finally{k=ae}},r.unstable_scheduleCallback=function(O,ee,ae){var xe=r.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?xe+ae:xe):ae=xe,O){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=ae+Z,O={id:y++,callback:ee,priorityLevel:O,startTime:ae,expirationTime:Z,sortIndex:-1},ae>xe?(O.sortIndex=ae,a(g,O),s(m)===null&&O===s(g)&&(C?(M(z),z=-1):C=!0,Me(X,ae-xe))):(O.sortIndex=Z,a(m,O),N||S||(N=!0,J||(J=!0,ce()))),O},r.unstable_shouldYield=le,r.unstable_wrapCallback=function(O){var ee=k;return function(){var ae=k;k=ee;try{return O.apply(this,arguments)}finally{k=ae}}}})(Fd)),Fd}var Up;function my(){return Up||(Up=1,Kd.exports=py()),Kd.exports}var Jd={exports:{}},Bt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function gy(){if(Bp)return Bt;Bp=1;var r=Tu();function a(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var i={d:{f:s,r:function(){throw Error(a(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},c=Symbol.for("react.portal");function d(m,g,y){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:m,containerInfo:g,implementation:y}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,Bt.createPortal=function(m,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(a(299));return d(m,g,null,y)},Bt.flushSync=function(m){var g=h.T,y=i.p;try{if(h.T=null,i.p=2,m)return m()}finally{h.T=g,i.p=y,i.d.f()}},Bt.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,i.d.C(m,g))},Bt.prefetchDNS=function(m){typeof m=="string"&&i.d.D(m)},Bt.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var y=g.as,x=p(y,g.crossOrigin),k=typeof g.integrity=="string"?g.integrity:void 0,S=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?i.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:x,integrity:k,fetchPriority:S}):y==="script"&&i.d.X(m,{crossOrigin:x,integrity:k,fetchPriority:S,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Bt.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=p(g.as,g.crossOrigin);i.d.M(m,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&i.d.M(m)},Bt.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,x=p(y,g.crossOrigin);i.d.L(m,y,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Bt.preloadModule=function(m,g){if(typeof m=="string")if(g){var y=p(g.as,g.crossOrigin);i.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else i.d.m(m)},Bt.requestFormReset=function(m){i.d.r(m)},Bt.unstable_batchedUpdates=function(m,g){return m(g)},Bt.useFormState=function(m,g,y){return h.H.useFormState(m,g,y)},Bt.useFormStatus=function(){return h.H.useHostTransitionStatus()},Bt.version="19.2.0",Bt}var Hp;function eg(){if(Hp)return Jd.exports;Hp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(a){console.error(a)}}return r(),Jd.exports=gy(),Jd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function by(){if($p)return vi;$p=1;var r=my(),a=Tu(),s=eg();function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(d(e)!==e)throw Error(i(188))}function g(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(i(188));return t!==e?null:e}for(var n=e,o=t;;){var u=n.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){n=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===n)return m(u),e;if(f===o)return m(u),t;f=f.sibling}throw Error(i(188))}if(n.return!==o.return)n=u,o=f;else{for(var b=!1,w=u.child;w;){if(w===n){b=!0,n=u,o=f;break}if(w===o){b=!0,o=u,n=f;break}w=w.sibling}if(!b){for(w=f.child;w;){if(w===n){b=!0,n=f,o=u;break}if(w===o){b=!0,o=f,n=u;break}w=w.sibling}if(!b)throw Error(i(189))}}if(n.alternate!==o)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var x=Object.assign,k=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),N=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),M=Symbol.for("react.consumer"),T=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),te=Symbol.for("react.activity"),le=Symbol.for("react.memo_cache_sentinel"),fe=Symbol.iterator;function ce(e){return e===null||typeof e!="object"?null:(e=fe&&e[fe]||e["@@iterator"],typeof e=="function"?e:null)}var Se=Symbol.for("react.client.reference");function ve(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Se?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case B:return"Profiler";case E:return"StrictMode";case X:return"Suspense";case J:return"SuspenseList";case te:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case N:return"Portal";case T:return e.displayName||"Context";case M:return(e._context.displayName||"Context")+".Consumer";case I:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return t=e.displayName||null,t!==null?t:ve(e.type)||"Memo";case Q:t=e._payload,e=e._init;try{return ve(e(t))}catch{}}return null}var Me=Array.isArray,O=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},xe=[],Z=-1;function _(e){return{current:e}}function A(e){0>Z||(e.current=xe[Z],xe[Z]=null,Z--)}function q(e,t){Z++,xe[Z]=e.current,e.current=t}var F=_(null),ne=_(null),ke=_(null),Ae=_(null);function $e(e,t){switch(q(ke,t),q(ne,e),q(F,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?tp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=tp(t),e=ap(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}A(F),q(F,e)}function Ne(){A(F),A(ne),A(ke)}function Dt(e){e.memoizedState!==null&&q(Ae,e);var t=F.current,n=ap(t,e.type);t!==n&&(q(ne,e),q(F,n))}function vt(e){ne.current===e&&(A(F),A(ne)),Ae.current===e&&(A(Ae),mi._currentValue=ae)}var qt,ka;function P(e){if(qt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);qt=t&&t[1]||"",ka=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qt+e+ka}var se=!1;function ue(e,t){if(!e||se)return"";se=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var V=function(){throw Error()};if(Object.defineProperty(V.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(V,[])}catch($){var H=$}Reflect.construct(e,[],V)}else{try{V.call()}catch($){H=$}e.call(V.prototype)}}else{try{throw Error()}catch($){H=$}(V=e())&&typeof V.catch=="function"&&V.catch(function(){})}}catch($){if($&&H&&typeof $.stack=="string")return[$.stack,H.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),b=f[0],w=f[1];if(b&&w){var j=b.split(`
`),U=w.split(`
`);for(u=o=0;o<j.length&&!j[o].includes("DetermineComponentFrameRoot");)o++;for(;u<U.length&&!U[u].includes("DetermineComponentFrameRoot");)u++;if(o===j.length||u===U.length)for(o=j.length-1,u=U.length-1;1<=o&&0<=u&&j[o]!==U[u];)u--;for(;1<=o&&0<=u;o--,u--)if(j[o]!==U[u]){if(o!==1||u!==1)do if(o--,u--,0>u||j[o]!==U[u]){var Y=`
`+j[o].replace(" at new "," at ");return e.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",e.displayName)),Y}while(1<=o&&0<=u);break}}}finally{se=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?P(n):""}function pe(e,t){switch(e.tag){case 26:case 27:case 5:return P(e.type);case 16:return P("Lazy");case 13:return e.child!==t&&t!==null?P("Suspense Fallback"):P("Suspense");case 19:return P("SuspenseList");case 0:case 15:return ue(e.type,!1);case 11:return ue(e.type.render,!1);case 1:return ue(e.type,!0);case 31:return P("Activity");default:return""}}function wt(e){try{var t="",n=null;do t+=pe(e,n),n=e,e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Qe=Object.prototype.hasOwnProperty,kt=r.unstable_scheduleCallback,Ya=r.unstable_cancelCallback,kn=r.unstable_shouldYield,Sn=r.unstable_requestPaint,St=r.unstable_now,Cs=r.unstable_getCurrentPriorityLevel,Fr=r.unstable_ImmediatePriority,yr=r.unstable_UserBlockingPriority,Sa=r.unstable_NormalPriority,da=r.unstable_LowPriority,Ga=r.unstable_IdlePriority,Le=r.log,jn=r.unstable_setDisableYieldValue,Da=null,xt=null;function $t(e){if(typeof Le=="function"&&jn(e),xt&&typeof xt.setStrictMode=="function")try{xt.setStrictMode(Da,e)}catch{}}var jt=Math.clz32?Math.clz32:Jr,Va=Math.log,Je=Math.LN2;function Jr(e){return e>>>=0,e===0?32:31-(Va(e)/Je|0)|0}var ja=256,dt=262144,It=4194304;function Xe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function K(e,t,n){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,b=e.pingedLanes;e=e.warmLanes;var w=o&134217727;return w!==0?(o=w&~f,o!==0?u=Xe(o):(b&=w,b!==0?u=Xe(b):n||(n=w&~e,n!==0&&(u=Xe(n))))):(w=o&~f,w!==0?u=Xe(w):b!==0?u=Xe(b):n||(n=o&~e,n!==0&&(u=Xe(n)))),u===0?0:t!==0&&t!==u&&(t&f)===0&&(f=u&-u,n=t&-t,f>=n||f===32&&(n&4194048)!==0)?t:u}function W(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function we(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function De(){var e=It;return It<<=1,(It&62914560)===0&&(It=4194304),e}function Ke(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Mt(e,t,n,o,u,f){var b=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var w=e.entanglements,j=e.expirationTimes,U=e.hiddenUpdates;for(n=b&~n;0<n;){var Y=31-jt(n),V=1<<Y;w[Y]=0,j[Y]=-1;var H=U[Y];if(H!==null)for(U[Y]=null,Y=0;Y<H.length;Y++){var $=H[Y];$!==null&&($.lane&=-536870913)}n&=~V}o!==0&&Lt(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(b&~t))}function Lt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-jt(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|n&261930}function Ut(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-jt(n),u=1<<o;u&t|e[o]&t&&(e[o]|=t),n&=~u}}function Qt(e,t){var n=t&-t;return n=(n&42)!==0?1:vr(n),(n&(e.suspendedLanes|t))!==0?0:n}function vr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function _n(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function wr(){var e=ee.p;return e!==0?e:(e=window.event,e===void 0?32:_p(e.type))}function Ts(e,t){var n=ee.p;try{return ee.p=e,t()}finally{ee.p=n}}var ua=Math.random().toString(36).slice(2),ut="__reactFiber$"+ua,ht="__reactProps$"+ua,Xa="__reactContainer$"+ua,As="__reactEvents$"+ua,Gi="__reactListeners$"+ua,kr="__reactHandles$"+ua,ot="__reactResources$"+ua,Yt="__reactMarker$"+ua;function Ma(e){delete e[ut],delete e[ht],delete e[As],delete e[Gi],delete e[kr]}function Gt(e){var t=e[ut];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xa]||n[ut]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=cp(e);e!==null;){if(n=e[ut])return n;e=cp(e)}return t}e=n,n=e.parentNode}return null}function En(e){if(e=e[ut]||e[Xa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Rs(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Nn(e){var t=e[ot];return t||(t=e[ot]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function _t(e){e[Yt]=!0}var qu=new Set,Iu={};function Wr(e,t){Cn(e,t),Cn(e+"Capture",t)}function Cn(e,t){for(Iu[e]=t,e=0;e<t.length;e++)qu.add(t[e])}var ab=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Yu={},Gu={};function rb(e){return Qe.call(Gu,e)?!0:Qe.call(Yu,e)?!1:ab.test(e)?Gu[e]=!0:(Yu[e]=!0,!1)}function Vi(e,t,n){if(rb(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Xi(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Ka(e,t,n,o){if(o===null)e.removeAttribute(n);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+o)}}function ha(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function nb(e,t,n){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return u.call(this)},set:function(b){n=""+b,f.call(this,b)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return n},setValue:function(b){n=""+b},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Bl(e){if(!e._valueTracker){var t=Vu(e)?"checked":"value";e._valueTracker=nb(e,t,""+e[t])}}function Xu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=Vu(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function Ki(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var sb=/[\n"\\]/g;function fa(e){return e.replace(sb,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Hl(e,t,n,o,u,f,b,w){e.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.type=b:e.removeAttribute("type"),t!=null?b==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ha(t)):e.value!==""+ha(t)&&(e.value=""+ha(t)):b!=="submit"&&b!=="reset"||e.removeAttribute("value"),t!=null?$l(e,b,ha(t)):n!=null?$l(e,b,ha(n)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+ha(w):e.removeAttribute("name")}function Ku(e,t,n,o,u,f,b,w){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),t!=null||n!=null){if(!(f!=="submit"&&f!=="reset"||t!=null)){Bl(e);return}n=n!=null?""+ha(n):"",t=t!=null?""+ha(t):n,w||t===e.value||(e.value=t),e.defaultValue=t}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=w?e.checked:!!o,e.defaultChecked=!!o,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(e.name=b),Bl(e)}function $l(e,t,n){t==="number"&&Ki(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Tn(e,t,n,o){if(e=e.options,t){t={};for(var u=0;u<n.length;u++)t["$"+n[u]]=!0;for(n=0;n<e.length;n++)u=t.hasOwnProperty("$"+e[n].value),e[n].selected!==u&&(e[n].selected=u),u&&o&&(e[n].defaultSelected=!0)}else{for(n=""+ha(n),t=null,u=0;u<e.length;u++){if(e[u].value===n){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}t!==null||e[u].disabled||(t=e[u])}t!==null&&(t.selected=!0)}}function Fu(e,t,n){if(t!=null&&(t=""+ha(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+ha(n):""}function Ju(e,t,n,o){if(t==null){if(o!=null){if(n!=null)throw Error(i(92));if(Me(o)){if(1<o.length)throw Error(i(93));o=o[0]}n=o}n==null&&(n=""),t=n}n=ha(t),e.defaultValue=n,o=e.textContent,o===n&&o!==""&&o!==null&&(e.value=o),Bl(e)}function An(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ib=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Wu(e,t,n){var o=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,n):typeof n!="number"||n===0||ib.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Zu(e,t,n){if(t!=null&&typeof t!="object")throw Error(i(62));if(e=e.style,n!=null){for(var o in n)!n.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in t)o=t[u],t.hasOwnProperty(u)&&n[u]!==o&&Wu(e,u,o)}else for(var f in t)t.hasOwnProperty(f)&&Wu(e,f,t[f])}function Pl(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ob=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fi(e){return lb.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Fa(){}var ql=null;function Il(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Rn=null,zn=null;function Qu(e){var t=En(e);if(t&&(e=t.stateNode)){var n=e[ht]||null;e:switch(e=t.stateNode,t.type){case"input":if(Hl(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+fa(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var u=o[ht]||null;if(!u)throw Error(i(90));Hl(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(t=0;t<n.length;t++)o=n[t],o.form===e.form&&Xu(o)}break e;case"textarea":Fu(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Tn(e,!!n.multiple,t,!1)}}}var Yl=!1;function eh(e,t,n){if(Yl)return e(t,n);Yl=!0;try{var o=e(t);return o}finally{if(Yl=!1,(Rn!==null||zn!==null)&&(Uo(),Rn&&(t=Rn,e=zn,zn=Rn=null,Qu(t),e)))for(t=0;t<e.length;t++)Qu(e[t])}}function zs(e,t){var n=e.stateNode;if(n===null)return null;var o=n[ht]||null;if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(i(231,t,typeof n));return n}var Ja=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gl=!1;if(Ja)try{var Os={};Object.defineProperty(Os,"passive",{get:function(){Gl=!0}}),window.addEventListener("test",Os,Os),window.removeEventListener("test",Os,Os)}catch{Gl=!1}var Sr=null,Vl=null,Ji=null;function th(){if(Ji)return Ji;var e,t=Vl,n=t.length,o,u="value"in Sr?Sr.value:Sr.textContent,f=u.length;for(e=0;e<n&&t[e]===u[e];e++);var b=n-e;for(o=1;o<=b&&t[n-o]===u[f-o];o++);return Ji=u.slice(e,1<o?1-o:void 0)}function Wi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zi(){return!0}function ah(){return!1}function Vt(e){function t(n,o,u,f,b){this._reactName=n,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=b,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(n=e[w],this[w]=n?n(f):f[w]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Zi:ah,this.isPropagationStopped=ah,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zi)},persist:function(){},isPersistent:Zi}),t}var Zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qi=Vt(Zr),Ds=x({},Zr,{view:0,detail:0}),cb=Vt(Ds),Xl,Kl,Ms,eo=x({},Ds,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ms&&(Ms&&e.type==="mousemove"?(Xl=e.screenX-Ms.screenX,Kl=e.screenY-Ms.screenY):Kl=Xl=0,Ms=e),Xl)},movementY:function(e){return"movementY"in e?e.movementY:Kl}}),rh=Vt(eo),db=x({},eo,{dataTransfer:0}),ub=Vt(db),hb=x({},Ds,{relatedTarget:0}),Fl=Vt(hb),fb=x({},Zr,{animationName:0,elapsedTime:0,pseudoElement:0}),pb=Vt(fb),mb=x({},Zr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gb=Vt(mb),bb=x({},Zr,{data:0}),nh=Vt(bb),xb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=vb[e])?!!t[e]:!1}function Jl(){return wb}var kb=x({},Ds,{key:function(e){if(e.key){var t=xb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jl,charCode:function(e){return e.type==="keypress"?Wi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sb=Vt(kb),jb=x({},eo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sh=Vt(jb),_b=x({},Ds,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jl}),Eb=Vt(_b),Nb=x({},Zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cb=Vt(Nb),Tb=x({},eo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ab=Vt(Tb),Rb=x({},Zr,{newState:0,oldState:0}),zb=Vt(Rb),Ob=[9,13,27,32],Wl=Ja&&"CompositionEvent"in window,Ls=null;Ja&&"documentMode"in document&&(Ls=document.documentMode);var Db=Ja&&"TextEvent"in window&&!Ls,ih=Ja&&(!Wl||Ls&&8<Ls&&11>=Ls),oh=" ",lh=!1;function ch(e,t){switch(e){case"keyup":return Ob.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var On=!1;function Mb(e,t){switch(e){case"compositionend":return dh(t);case"keypress":return t.which!==32?null:(lh=!0,oh);case"textInput":return e=t.data,e===oh&&lh?null:e;default:return null}}function Lb(e,t){if(On)return e==="compositionend"||!Wl&&ch(e,t)?(e=th(),Ji=Vl=Sr=null,On=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ih&&t.locale!=="ko"?null:t.data;default:return null}}var Ub={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ub[e.type]:t==="textarea"}function hh(e,t,n,o){Rn?zn?zn.push(o):zn=[o]:Rn=o,t=Yo(t,"onChange"),0<t.length&&(n=new Qi("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var Us=null,Bs=null;function Bb(e){F0(e,0)}function to(e){var t=Rs(e);if(Xu(t))return e}function fh(e,t){if(e==="change")return t}var ph=!1;if(Ja){var Zl;if(Ja){var Ql="oninput"in document;if(!Ql){var mh=document.createElement("div");mh.setAttribute("oninput","return;"),Ql=typeof mh.oninput=="function"}Zl=Ql}else Zl=!1;ph=Zl&&(!document.documentMode||9<document.documentMode)}function gh(){Us&&(Us.detachEvent("onpropertychange",bh),Bs=Us=null)}function bh(e){if(e.propertyName==="value"&&to(Bs)){var t=[];hh(t,Bs,e,Il(e)),eh(Bb,t)}}function Hb(e,t,n){e==="focusin"?(gh(),Us=t,Bs=n,Us.attachEvent("onpropertychange",bh)):e==="focusout"&&gh()}function $b(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return to(Bs)}function Pb(e,t){if(e==="click")return to(t)}function qb(e,t){if(e==="input"||e==="change")return to(t)}function Ib(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ea=typeof Object.is=="function"?Object.is:Ib;function Hs(e,t){if(ea(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var u=n[o];if(!Qe.call(t,u)||!ea(e[u],t[u]))return!1}return!0}function xh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yh(e,t){var n=xh(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xh(n)}}function vh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ki(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ki(e.document)}return t}function ec(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Yb=Ja&&"documentMode"in document&&11>=document.documentMode,Dn=null,tc=null,$s=null,ac=!1;function kh(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ac||Dn==null||Dn!==Ki(o)||(o=Dn,"selectionStart"in o&&ec(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),$s&&Hs($s,o)||($s=o,o=Yo(tc,"onSelect"),0<o.length&&(t=new Qi("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=Dn)))}function Qr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Mn={animationend:Qr("Animation","AnimationEnd"),animationiteration:Qr("Animation","AnimationIteration"),animationstart:Qr("Animation","AnimationStart"),transitionrun:Qr("Transition","TransitionRun"),transitionstart:Qr("Transition","TransitionStart"),transitioncancel:Qr("Transition","TransitionCancel"),transitionend:Qr("Transition","TransitionEnd")},rc={},Sh={};Ja&&(Sh=document.createElement("div").style,"AnimationEvent"in window||(delete Mn.animationend.animation,delete Mn.animationiteration.animation,delete Mn.animationstart.animation),"TransitionEvent"in window||delete Mn.transitionend.transition);function en(e){if(rc[e])return rc[e];if(!Mn[e])return e;var t=Mn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Sh)return rc[e]=t[n];return e}var jh=en("animationend"),_h=en("animationiteration"),Eh=en("animationstart"),Gb=en("transitionrun"),Vb=en("transitionstart"),Xb=en("transitioncancel"),Nh=en("transitionend"),Ch=new Map,nc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");nc.push("scrollEnd");function _a(e,t){Ch.set(e,t),Wr(t,[e])}var ao=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},pa=[],Ln=0,sc=0;function ro(){for(var e=Ln,t=sc=Ln=0;t<e;){var n=pa[t];pa[t++]=null;var o=pa[t];pa[t++]=null;var u=pa[t];pa[t++]=null;var f=pa[t];if(pa[t++]=null,o!==null&&u!==null){var b=o.pending;b===null?u.next=u:(u.next=b.next,b.next=u),o.pending=u}f!==0&&Th(n,u,f)}}function no(e,t,n,o){pa[Ln++]=e,pa[Ln++]=t,pa[Ln++]=n,pa[Ln++]=o,sc|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function ic(e,t,n,o){return no(e,t,n,o),so(e)}function tn(e,t){return no(e,null,null,t),so(e)}function Th(e,t,n){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n);for(var u=!1,f=e.return;f!==null;)f.childLanes|=n,o=f.alternate,o!==null&&(o.childLanes|=n),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&t!==null&&(u=31-jt(n),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[t]:o.push(t),t.lane=n|536870912),f):null}function so(e){if(50<li)throw li=0,md=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Un={};function Kb(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ta(e,t,n,o){return new Kb(e,t,n,o)}function oc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wa(e,t){var n=e.alternate;return n===null?(n=ta(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ah(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function io(e,t,n,o,u,f){var b=0;if(o=e,typeof e=="function")oc(e)&&(b=1);else if(typeof e=="string")b=Qx(e,n,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case te:return e=ta(31,n,t,u),e.elementType=te,e.lanes=f,e;case C:return an(n.children,u,f,t);case E:b=8,u|=24;break;case B:return e=ta(12,n,t,u|2),e.elementType=B,e.lanes=f,e;case X:return e=ta(13,n,t,u),e.elementType=X,e.lanes=f,e;case J:return e=ta(19,n,t,u),e.elementType=J,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case T:b=10;break e;case M:b=9;break e;case I:b=11;break e;case z:b=14;break e;case Q:b=16,o=null;break e}b=29,n=Error(i(130,e===null?"null":typeof e,"")),o=null}return t=ta(b,n,t,u),t.elementType=e,t.type=o,t.lanes=f,t}function an(e,t,n,o){return e=ta(7,e,o,t),e.lanes=n,e}function lc(e,t,n){return e=ta(6,e,null,t),e.lanes=n,e}function Rh(e){var t=ta(18,null,null,0);return t.stateNode=e,t}function cc(e,t,n){return t=ta(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var zh=new WeakMap;function ma(e,t){if(typeof e=="object"&&e!==null){var n=zh.get(e);return n!==void 0?n:(t={value:e,source:t,stack:wt(t)},zh.set(e,t),t)}return{value:e,source:t,stack:wt(t)}}var Bn=[],Hn=0,oo=null,Ps=0,ga=[],ba=0,jr=null,La=1,Ua="";function Za(e,t){Bn[Hn++]=Ps,Bn[Hn++]=oo,oo=e,Ps=t}function Oh(e,t,n){ga[ba++]=La,ga[ba++]=Ua,ga[ba++]=jr,jr=e;var o=La;e=Ua;var u=32-jt(o)-1;o&=~(1<<u),n+=1;var f=32-jt(t)+u;if(30<f){var b=u-u%5;f=(o&(1<<b)-1).toString(32),o>>=b,u-=b,La=1<<32-jt(t)+u|n<<u|o,Ua=f+e}else La=1<<f|n<<u|o,Ua=e}function dc(e){e.return!==null&&(Za(e,1),Oh(e,1,0))}function uc(e){for(;e===oo;)oo=Bn[--Hn],Bn[Hn]=null,Ps=Bn[--Hn],Bn[Hn]=null;for(;e===jr;)jr=ga[--ba],ga[ba]=null,Ua=ga[--ba],ga[ba]=null,La=ga[--ba],ga[ba]=null}function Dh(e,t){ga[ba++]=La,ga[ba++]=Ua,ga[ba++]=jr,La=t.id,Ua=t.overflow,jr=e}var Ct=null,We=null,Oe=!1,_r=null,xa=!1,hc=Error(i(519));function Er(e){var t=Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw qs(ma(t,e)),hc}function Mh(e){var t=e.stateNode,n=e.type,o=e.memoizedProps;switch(t[ut]=e,t[ht]=o,n){case"dialog":Te("cancel",t),Te("close",t);break;case"iframe":case"object":case"embed":Te("load",t);break;case"video":case"audio":for(n=0;n<di.length;n++)Te(di[n],t);break;case"source":Te("error",t);break;case"img":case"image":case"link":Te("error",t),Te("load",t);break;case"details":Te("toggle",t);break;case"input":Te("invalid",t),Ku(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Te("invalid",t);break;case"textarea":Te("invalid",t),Ju(t,o.value,o.defaultValue,o.children)}n=o.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||o.suppressHydrationWarning===!0||Q0(t.textContent,n)?(o.popover!=null&&(Te("beforetoggle",t),Te("toggle",t)),o.onScroll!=null&&Te("scroll",t),o.onScrollEnd!=null&&Te("scrollend",t),o.onClick!=null&&(t.onclick=Fa),t=!0):t=!1,t||Er(e,!0)}function Lh(e){for(Ct=e.return;Ct;)switch(Ct.tag){case 5:case 31:case 13:xa=!1;return;case 27:case 3:xa=!0;return;default:Ct=Ct.return}}function $n(e){if(e!==Ct)return!1;if(!Oe)return Lh(e),Oe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Ad(e.type,e.memoizedProps)),n=!n),n&&We&&Er(e),Lh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));We=lp(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));We=lp(e)}else t===27?(t=We,$r(e.type)?(e=Md,Md=null,We=e):We=t):We=Ct?va(e.stateNode.nextSibling):null;return!0}function rn(){We=Ct=null,Oe=!1}function fc(){var e=_r;return e!==null&&(Jt===null?Jt=e:Jt.push.apply(Jt,e),_r=null),e}function qs(e){_r===null?_r=[e]:_r.push(e)}var pc=_(null),nn=null,Qa=null;function Nr(e,t,n){q(pc,t._currentValue),t._currentValue=n}function er(e){e._currentValue=pc.current,A(pc)}function mc(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function gc(e,t,n,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var b=u.child;f=f.firstContext;e:for(;f!==null;){var w=f;f=u;for(var j=0;j<t.length;j++)if(w.context===t[j]){f.lanes|=n,w=f.alternate,w!==null&&(w.lanes|=n),mc(f.return,n,e),o||(b=null);break e}f=w.next}}else if(u.tag===18){if(b=u.return,b===null)throw Error(i(341));b.lanes|=n,f=b.alternate,f!==null&&(f.lanes|=n),mc(b,n,e),b=null}else b=u.child;if(b!==null)b.return=u;else for(b=u;b!==null;){if(b===e){b=null;break}if(u=b.sibling,u!==null){u.return=b.return,b=u;break}b=b.return}u=b}}function Pn(e,t,n,o){e=null;for(var u=t,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var b=u.alternate;if(b===null)throw Error(i(387));if(b=b.memoizedProps,b!==null){var w=u.type;ea(u.pendingProps.value,b.value)||(e!==null?e.push(w):e=[w])}}else if(u===Ae.current){if(b=u.alternate,b===null)throw Error(i(387));b.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(mi):e=[mi])}u=u.return}e!==null&&gc(t,e,n,o),t.flags|=262144}function lo(e){for(e=e.firstContext;e!==null;){if(!ea(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sn(e){nn=e,Qa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tt(e){return Uh(nn,e)}function co(e,t){return nn===null&&sn(e),Uh(e,t)}function Uh(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Qa===null){if(e===null)throw Error(i(308));Qa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Qa=Qa.next=t;return n}var Fb=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Jb=r.unstable_scheduleCallback,Wb=r.unstable_NormalPriority,ft={$$typeof:T,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bc(){return{controller:new Fb,data:new Map,refCount:0}}function Is(e){e.refCount--,e.refCount===0&&Jb(Wb,function(){e.controller.abort()})}var Ys=null,xc=0,qn=0,In=null;function Zb(e,t){if(Ys===null){var n=Ys=[];xc=0,qn=wd(),In={status:"pending",value:void 0,then:function(o){n.push(o)}}}return xc++,t.then(Bh,Bh),t}function Bh(){if(--xc===0&&Ys!==null){In!==null&&(In.status="fulfilled");var e=Ys;Ys=null,qn=0,In=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Qb(e,t){var n=[],o={status:"pending",value:null,reason:null,then:function(u){n.push(u)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var u=0;u<n.length;u++)(0,n[u])(t)},function(u){for(o.status="rejected",o.reason=u,u=0;u<n.length;u++)(0,n[u])(void 0)}),o}var Hh=O.S;O.S=function(e,t){S0=St(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Zb(e,t),Hh!==null&&Hh(e,t)};var on=_(null);function yc(){var e=on.current;return e!==null?e:Ve.pooledCache}function uo(e,t){t===null?q(on,on.current):q(on,t.pool)}function $h(){var e=yc();return e===null?null:{parent:ft._currentValue,pool:e}}var Yn=Error(i(460)),vc=Error(i(474)),ho=Error(i(542)),fo={then:function(){}};function Ph(e){return e=e.status,e==="fulfilled"||e==="rejected"}function qh(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Fa,Fa),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Yh(e),e;default:if(typeof t.status=="string")t.then(Fa,Fa);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var u=t;u.status="fulfilled",u.value=o}},function(o){if(t.status==="pending"){var u=t;u.status="rejected",u.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Yh(e),e}throw cn=t,Yn}}function ln(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(cn=n,Yn):n}}var cn=null;function Ih(){if(cn===null)throw Error(i(459));var e=cn;return cn=null,e}function Yh(e){if(e===Yn||e===ho)throw Error(i(483))}var Gn=null,Gs=0;function po(e){var t=Gs;return Gs+=1,Gn===null&&(Gn=[]),qh(Gn,e,t)}function Vs(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function mo(e,t){throw t.$$typeof===k?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Gh(e){function t(D,R){if(e){var L=D.deletions;L===null?(D.deletions=[R],D.flags|=16):L.push(R)}}function n(D,R){if(!e)return null;for(;R!==null;)t(D,R),R=R.sibling;return null}function o(D){for(var R=new Map;D!==null;)D.key!==null?R.set(D.key,D):R.set(D.index,D),D=D.sibling;return R}function u(D,R){return D=Wa(D,R),D.index=0,D.sibling=null,D}function f(D,R,L){return D.index=L,e?(L=D.alternate,L!==null?(L=L.index,L<R?(D.flags|=67108866,R):L):(D.flags|=67108866,R)):(D.flags|=1048576,R)}function b(D){return e&&D.alternate===null&&(D.flags|=67108866),D}function w(D,R,L,G){return R===null||R.tag!==6?(R=lc(L,D.mode,G),R.return=D,R):(R=u(R,L),R.return=D,R)}function j(D,R,L,G){var me=L.type;return me===C?Y(D,R,L.props.children,G,L.key):R!==null&&(R.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===Q&&ln(me)===R.type)?(R=u(R,L.props),Vs(R,L),R.return=D,R):(R=io(L.type,L.key,L.props,null,D.mode,G),Vs(R,L),R.return=D,R)}function U(D,R,L,G){return R===null||R.tag!==4||R.stateNode.containerInfo!==L.containerInfo||R.stateNode.implementation!==L.implementation?(R=cc(L,D.mode,G),R.return=D,R):(R=u(R,L.children||[]),R.return=D,R)}function Y(D,R,L,G,me){return R===null||R.tag!==7?(R=an(L,D.mode,G,me),R.return=D,R):(R=u(R,L),R.return=D,R)}function V(D,R,L){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return R=lc(""+R,D.mode,L),R.return=D,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case S:return L=io(R.type,R.key,R.props,null,D.mode,L),Vs(L,R),L.return=D,L;case N:return R=cc(R,D.mode,L),R.return=D,R;case Q:return R=ln(R),V(D,R,L)}if(Me(R)||ce(R))return R=an(R,D.mode,L,null),R.return=D,R;if(typeof R.then=="function")return V(D,po(R),L);if(R.$$typeof===T)return V(D,co(D,R),L);mo(D,R)}return null}function H(D,R,L,G){var me=R!==null?R.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return me!==null?null:w(D,R,""+L,G);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case S:return L.key===me?j(D,R,L,G):null;case N:return L.key===me?U(D,R,L,G):null;case Q:return L=ln(L),H(D,R,L,G)}if(Me(L)||ce(L))return me!==null?null:Y(D,R,L,G,null);if(typeof L.then=="function")return H(D,R,po(L),G);if(L.$$typeof===T)return H(D,R,co(D,L),G);mo(D,L)}return null}function $(D,R,L,G,me){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return D=D.get(L)||null,w(R,D,""+G,me);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case S:return D=D.get(G.key===null?L:G.key)||null,j(R,D,G,me);case N:return D=D.get(G.key===null?L:G.key)||null,U(R,D,G,me);case Q:return G=ln(G),$(D,R,L,G,me)}if(Me(G)||ce(G))return D=D.get(L)||null,Y(R,D,G,me,null);if(typeof G.then=="function")return $(D,R,L,po(G),me);if(G.$$typeof===T)return $(D,R,L,co(R,G),me);mo(R,G)}return null}function ie(D,R,L,G){for(var me=null,Ue=null,de=R,Ee=R=0,ze=null;de!==null&&Ee<L.length;Ee++){de.index>Ee?(ze=de,de=null):ze=de.sibling;var Be=H(D,de,L[Ee],G);if(Be===null){de===null&&(de=ze);break}e&&de&&Be.alternate===null&&t(D,de),R=f(Be,R,Ee),Ue===null?me=Be:Ue.sibling=Be,Ue=Be,de=ze}if(Ee===L.length)return n(D,de),Oe&&Za(D,Ee),me;if(de===null){for(;Ee<L.length;Ee++)de=V(D,L[Ee],G),de!==null&&(R=f(de,R,Ee),Ue===null?me=de:Ue.sibling=de,Ue=de);return Oe&&Za(D,Ee),me}for(de=o(de);Ee<L.length;Ee++)ze=$(de,D,Ee,L[Ee],G),ze!==null&&(e&&ze.alternate!==null&&de.delete(ze.key===null?Ee:ze.key),R=f(ze,R,Ee),Ue===null?me=ze:Ue.sibling=ze,Ue=ze);return e&&de.forEach(function(Gr){return t(D,Gr)}),Oe&&Za(D,Ee),me}function ye(D,R,L,G){if(L==null)throw Error(i(151));for(var me=null,Ue=null,de=R,Ee=R=0,ze=null,Be=L.next();de!==null&&!Be.done;Ee++,Be=L.next()){de.index>Ee?(ze=de,de=null):ze=de.sibling;var Gr=H(D,de,Be.value,G);if(Gr===null){de===null&&(de=ze);break}e&&de&&Gr.alternate===null&&t(D,de),R=f(Gr,R,Ee),Ue===null?me=Gr:Ue.sibling=Gr,Ue=Gr,de=ze}if(Be.done)return n(D,de),Oe&&Za(D,Ee),me;if(de===null){for(;!Be.done;Ee++,Be=L.next())Be=V(D,Be.value,G),Be!==null&&(R=f(Be,R,Ee),Ue===null?me=Be:Ue.sibling=Be,Ue=Be);return Oe&&Za(D,Ee),me}for(de=o(de);!Be.done;Ee++,Be=L.next())Be=$(de,D,Ee,Be.value,G),Be!==null&&(e&&Be.alternate!==null&&de.delete(Be.key===null?Ee:Be.key),R=f(Be,R,Ee),Ue===null?me=Be:Ue.sibling=Be,Ue=Be);return e&&de.forEach(function(dy){return t(D,dy)}),Oe&&Za(D,Ee),me}function Ge(D,R,L,G){if(typeof L=="object"&&L!==null&&L.type===C&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case S:e:{for(var me=L.key;R!==null;){if(R.key===me){if(me=L.type,me===C){if(R.tag===7){n(D,R.sibling),G=u(R,L.props.children),G.return=D,D=G;break e}}else if(R.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===Q&&ln(me)===R.type){n(D,R.sibling),G=u(R,L.props),Vs(G,L),G.return=D,D=G;break e}n(D,R);break}else t(D,R);R=R.sibling}L.type===C?(G=an(L.props.children,D.mode,G,L.key),G.return=D,D=G):(G=io(L.type,L.key,L.props,null,D.mode,G),Vs(G,L),G.return=D,D=G)}return b(D);case N:e:{for(me=L.key;R!==null;){if(R.key===me)if(R.tag===4&&R.stateNode.containerInfo===L.containerInfo&&R.stateNode.implementation===L.implementation){n(D,R.sibling),G=u(R,L.children||[]),G.return=D,D=G;break e}else{n(D,R);break}else t(D,R);R=R.sibling}G=cc(L,D.mode,G),G.return=D,D=G}return b(D);case Q:return L=ln(L),Ge(D,R,L,G)}if(Me(L))return ie(D,R,L,G);if(ce(L)){if(me=ce(L),typeof me!="function")throw Error(i(150));return L=me.call(L),ye(D,R,L,G)}if(typeof L.then=="function")return Ge(D,R,po(L),G);if(L.$$typeof===T)return Ge(D,R,co(D,L),G);mo(D,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,R!==null&&R.tag===6?(n(D,R.sibling),G=u(R,L),G.return=D,D=G):(n(D,R),G=lc(L,D.mode,G),G.return=D,D=G),b(D)):n(D,R)}return function(D,R,L,G){try{Gs=0;var me=Ge(D,R,L,G);return Gn=null,me}catch(de){if(de===Yn||de===ho)throw de;var Ue=ta(29,de,null,D.mode);return Ue.lanes=G,Ue.return=D,Ue}finally{}}}var dn=Gh(!0),Vh=Gh(!1),Cr=!1;function wc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function kc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Tr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ar(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(He&2)!==0){var u=o.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),o.pending=t,t=so(e),Th(e,null,n),t}return no(e,o,t,n),so(e)}function Xs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Ut(e,n)}}function Sc(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var u=null,f=null;if(n=n.firstBaseUpdate,n!==null){do{var b={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};f===null?u=f=b:f=f.next=b,n=n.next}while(n!==null);f===null?u=f=t:f=f.next=t}else u=f=t;n={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var jc=!1;function Ks(){if(jc){var e=In;if(e!==null)throw e}}function Fs(e,t,n,o){jc=!1;var u=e.updateQueue;Cr=!1;var f=u.firstBaseUpdate,b=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var j=w,U=j.next;j.next=null,b===null?f=U:b.next=U,b=j;var Y=e.alternate;Y!==null&&(Y=Y.updateQueue,w=Y.lastBaseUpdate,w!==b&&(w===null?Y.firstBaseUpdate=U:w.next=U,Y.lastBaseUpdate=j))}if(f!==null){var V=u.baseState;b=0,Y=U=j=null,w=f;do{var H=w.lane&-536870913,$=H!==w.lane;if($?(Re&H)===H:(o&H)===H){H!==0&&H===qn&&(jc=!0),Y!==null&&(Y=Y.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var ie=e,ye=w;H=t;var Ge=n;switch(ye.tag){case 1:if(ie=ye.payload,typeof ie=="function"){V=ie.call(Ge,V,H);break e}V=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=ye.payload,H=typeof ie=="function"?ie.call(Ge,V,H):ie,H==null)break e;V=x({},V,H);break e;case 2:Cr=!0}}H=w.callback,H!==null&&(e.flags|=64,$&&(e.flags|=8192),$=u.callbacks,$===null?u.callbacks=[H]:$.push(H))}else $={lane:H,tag:w.tag,payload:w.payload,callback:w.callback,next:null},Y===null?(U=Y=$,j=V):Y=Y.next=$,b|=H;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;$=w,w=$.next,$.next=null,u.lastBaseUpdate=$,u.shared.pending=null}}while(!0);Y===null&&(j=V),u.baseState=j,u.firstBaseUpdate=U,u.lastBaseUpdate=Y,f===null&&(u.shared.lanes=0),Mr|=b,e.lanes=b,e.memoizedState=V}}function Xh(e,t){if(typeof e!="function")throw Error(i(191,e));e.call(t)}function Kh(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Xh(n[e],t)}var Vn=_(null),go=_(0);function Fh(e,t){e=cr,q(go,e),q(Vn,t),cr=e|t.baseLanes}function _c(){q(go,cr),q(Vn,Vn.current)}function Ec(){cr=go.current,A(Vn),A(go)}var aa=_(null),ya=null;function Rr(e){var t=e.alternate;q(lt,lt.current&1),q(aa,e),ya===null&&(t===null||Vn.current!==null||t.memoizedState!==null)&&(ya=e)}function Nc(e){q(lt,lt.current),q(aa,e),ya===null&&(ya=e)}function Jh(e){e.tag===22?(q(lt,lt.current),q(aa,e),ya===null&&(ya=e)):zr()}function zr(){q(lt,lt.current),q(aa,aa.current)}function ra(e){A(aa),ya===e&&(ya=null),A(lt)}var lt=_(0);function bo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Od(n)||Dd(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var tr=0,_e=null,Ie=null,pt=null,xo=!1,Xn=!1,un=!1,yo=0,Js=0,Kn=null,ex=0;function nt(){throw Error(i(321))}function Cc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ea(e[n],t[n]))return!1;return!0}function Tc(e,t,n,o,u,f){return tr=f,_e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?Df:Yc,un=!1,f=n(o,u),un=!1,Xn&&(f=Zh(t,n,o,u)),Wh(e),f}function Wh(e){O.H=Qs;var t=Ie!==null&&Ie.next!==null;if(tr=0,pt=Ie=_e=null,xo=!1,Js=0,Kn=null,t)throw Error(i(300));e===null||mt||(e=e.dependencies,e!==null&&lo(e)&&(mt=!0))}function Zh(e,t,n,o){_e=e;var u=0;do{if(Xn&&(Kn=null),Js=0,Xn=!1,25<=u)throw Error(i(301));if(u+=1,pt=Ie=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=Mf,f=t(n,o)}while(Xn);return f}function tx(){var e=O.H,t=e.useState()[0];return t=typeof t.then=="function"?Ws(t):t,e=e.useState()[0],(Ie!==null?Ie.memoizedState:null)!==e&&(_e.flags|=1024),t}function Ac(){var e=yo!==0;return yo=0,e}function Rc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function zc(e){if(xo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}xo=!1}tr=0,pt=Ie=_e=null,Xn=!1,Js=yo=0,Kn=null}function Pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?_e.memoizedState=pt=e:pt=pt.next=e,pt}function ct(){if(Ie===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var t=pt===null?_e.memoizedState:pt.next;if(t!==null)pt=t,Ie=e;else{if(e===null)throw _e.alternate===null?Error(i(467)):Error(i(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},pt===null?_e.memoizedState=pt=e:pt=pt.next=e}return pt}function vo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ws(e){var t=Js;return Js+=1,Kn===null&&(Kn=[]),e=qh(Kn,e,t),t=_e,(pt===null?t.memoizedState:pt.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?Df:Yc),e}function wo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ws(e);if(e.$$typeof===T)return Tt(e)}throw Error(i(438,String(e)))}function Oc(e){var t=null,n=_e.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var o=_e.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(u){return u.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=vo(),_e.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),o=0;o<e;o++)n[o]=le;return t.index++,n}function ar(e,t){return typeof t=="function"?t(e):t}function ko(e){var t=ct();return Dc(t,Ie,e)}function Dc(e,t,n){var o=e.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=n;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var b=u.next;u.next=f.next,f.next=b}t.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{t=u.next;var w=b=null,j=null,U=t,Y=!1;do{var V=U.lane&-536870913;if(V!==U.lane?(Re&V)===V:(tr&V)===V){var H=U.revertLane;if(H===0)j!==null&&(j=j.next={lane:0,revertLane:0,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),V===qn&&(Y=!0);else if((tr&H)===H){U=U.next,H===qn&&(Y=!0);continue}else V={lane:0,revertLane:U.revertLane,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},j===null?(w=j=V,b=f):j=j.next=V,_e.lanes|=H,Mr|=H;V=U.action,un&&n(f,V),f=U.hasEagerState?U.eagerState:n(f,V)}else H={lane:V,revertLane:U.revertLane,gesture:U.gesture,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},j===null?(w=j=H,b=f):j=j.next=H,_e.lanes|=V,Mr|=V;U=U.next}while(U!==null&&U!==t);if(j===null?b=f:j.next=w,!ea(f,e.memoizedState)&&(mt=!0,Y&&(n=In,n!==null)))throw n;e.memoizedState=f,e.baseState=b,e.baseQueue=j,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Mc(e){var t=ct(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var o=n.dispatch,u=n.pending,f=t.memoizedState;if(u!==null){n.pending=null;var b=u=u.next;do f=e(f,b.action),b=b.next;while(b!==u);ea(f,t.memoizedState)||(mt=!0),t.memoizedState=f,t.baseQueue===null&&(t.baseState=f),n.lastRenderedState=f}return[f,o]}function Qh(e,t,n){var o=_e,u=ct(),f=Oe;if(f){if(n===void 0)throw Error(i(407));n=n()}else n=t();var b=!ea((Ie||u).memoizedState,n);if(b&&(u.memoizedState=n,mt=!0),u=u.queue,Bc(af.bind(null,o,u,e),[e]),u.getSnapshot!==t||b||pt!==null&&pt.memoizedState.tag&1){if(o.flags|=2048,Fn(9,{destroy:void 0},tf.bind(null,o,u,n,t),null),Ve===null)throw Error(i(349));f||(tr&127)!==0||ef(o,t,n)}return n}function ef(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=_e.updateQueue,t===null?(t=vo(),_e.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function tf(e,t,n,o){t.value=n,t.getSnapshot=o,rf(t)&&nf(e)}function af(e,t,n){return n(function(){rf(t)&&nf(e)})}function rf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ea(e,n)}catch{return!0}}function nf(e){var t=tn(e,2);t!==null&&Wt(t,e,2)}function Lc(e){var t=Pt();if(typeof e=="function"){var n=e;if(e=n(),un){$t(!0);try{n()}finally{$t(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ar,lastRenderedState:e},t}function sf(e,t,n,o){return e.baseState=n,Dc(e,Ie,typeof o=="function"?o:ar)}function ax(e,t,n,o,u){if(_o(e))throw Error(i(485));if(e=t.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){f.listeners.push(b)}};O.T!==null?n(!0):f.isTransition=!1,o(f),n=t.pending,n===null?(f.next=t.pending=f,of(t,f)):(f.next=n.next,t.pending=n.next=f)}}function of(e,t){var n=t.action,o=t.payload,u=e.state;if(t.isTransition){var f=O.T,b={};O.T=b;try{var w=n(u,o),j=O.S;j!==null&&j(b,w),lf(e,t,w)}catch(U){Uc(e,t,U)}finally{f!==null&&b.types!==null&&(f.types=b.types),O.T=f}}else try{f=n(u,o),lf(e,t,f)}catch(U){Uc(e,t,U)}}function lf(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(o){cf(e,t,o)},function(o){return Uc(e,t,o)}):cf(e,t,n)}function cf(e,t,n){t.status="fulfilled",t.value=n,df(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,of(e,n)))}function Uc(e,t,n){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=n,df(t),t=t.next;while(t!==o)}e.action=null}function df(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function uf(e,t){return t}function hf(e,t){if(Oe){var n=Ve.formState;if(n!==null){e:{var o=_e;if(Oe){if(We){t:{for(var u=We,f=xa;u.nodeType!==8;){if(!f){u=null;break t}if(u=va(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){We=va(u.nextSibling),o=u.data==="F!";break e}}Er(o)}o=!1}o&&(t=n[0])}}return n=Pt(),n.memoizedState=n.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:uf,lastRenderedState:t},n.queue=o,n=Rf.bind(null,_e,o),o.dispatch=n,o=Lc(!1),f=Ic.bind(null,_e,!1,o.queue),o=Pt(),u={state:t,dispatch:null,action:e,pending:null},o.queue=u,n=ax.bind(null,_e,u,f,n),u.dispatch=n,o.memoizedState=e,[t,n,!1]}function ff(e){var t=ct();return pf(t,Ie,e)}function pf(e,t,n){if(t=Dc(e,t,uf)[0],e=ko(ar)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=Ws(t)}catch(b){throw b===Yn?ho:b}else o=t;t=ct();var u=t.queue,f=u.dispatch;return n!==t.memoizedState&&(_e.flags|=2048,Fn(9,{destroy:void 0},rx.bind(null,u,n),null)),[o,f,e]}function rx(e,t){e.action=t}function mf(e){var t=ct(),n=Ie;if(n!==null)return pf(t,n,e);ct(),t=t.memoizedState,n=ct();var o=n.queue.dispatch;return n.memoizedState=e,[t,o,!1]}function Fn(e,t,n,o){return e={tag:e,create:n,deps:o,inst:t,next:null},t=_e.updateQueue,t===null&&(t=vo(),_e.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e),e}function gf(){return ct().memoizedState}function So(e,t,n,o){var u=Pt();_e.flags|=e,u.memoizedState=Fn(1|t,{destroy:void 0},n,o===void 0?null:o)}function jo(e,t,n,o){var u=ct();o=o===void 0?null:o;var f=u.memoizedState.inst;Ie!==null&&o!==null&&Cc(o,Ie.memoizedState.deps)?u.memoizedState=Fn(t,f,n,o):(_e.flags|=e,u.memoizedState=Fn(1|t,f,n,o))}function bf(e,t){So(8390656,8,e,t)}function Bc(e,t){jo(2048,8,e,t)}function nx(e){_e.flags|=4;var t=_e.updateQueue;if(t===null)t=vo(),_e.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function xf(e){var t=ct().memoizedState;return nx({ref:t,nextImpl:e}),function(){if((He&2)!==0)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function yf(e,t){return jo(4,2,e,t)}function vf(e,t){return jo(4,4,e,t)}function wf(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kf(e,t,n){n=n!=null?n.concat([e]):null,jo(4,4,wf.bind(null,t,e),n)}function Hc(){}function Sf(e,t){var n=ct();t=t===void 0?null:t;var o=n.memoizedState;return t!==null&&Cc(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function jf(e,t){var n=ct();t=t===void 0?null:t;var o=n.memoizedState;if(t!==null&&Cc(t,o[1]))return o[0];if(o=e(),un){$t(!0);try{e()}finally{$t(!1)}}return n.memoizedState=[o,t],o}function $c(e,t,n){return n===void 0||(tr&1073741824)!==0&&(Re&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=_0(),_e.lanes|=e,Mr|=e,n)}function _f(e,t,n,o){return ea(n,t)?n:Vn.current!==null?(e=$c(e,n,o),ea(e,t)||(mt=!0),e):(tr&42)===0||(tr&1073741824)!==0&&(Re&261930)===0?(mt=!0,e.memoizedState=n):(e=_0(),_e.lanes|=e,Mr|=e,t)}function Ef(e,t,n,o,u){var f=ee.p;ee.p=f!==0&&8>f?f:8;var b=O.T,w={};O.T=w,Ic(e,!1,t,n);try{var j=u(),U=O.S;if(U!==null&&U(w,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var Y=Qb(j,o);Zs(e,t,Y,ia(e))}else Zs(e,t,o,ia(e))}catch(V){Zs(e,t,{then:function(){},status:"rejected",reason:V},ia())}finally{ee.p=f,b!==null&&w.types!==null&&(b.types=w.types),O.T=b}}function sx(){}function Pc(e,t,n,o){if(e.tag!==5)throw Error(i(476));var u=Nf(e).queue;Ef(e,u,t,ae,n===null?sx:function(){return Cf(e),n(o)})}function Nf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ar,lastRenderedState:ae},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ar,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Cf(e){var t=Nf(e);t.next===null&&(t=e.alternate.memoizedState),Zs(e,t.next.queue,{},ia())}function qc(){return Tt(mi)}function Tf(){return ct().memoizedState}function Af(){return ct().memoizedState}function ix(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=ia();e=Tr(n);var o=Ar(t,e,n);o!==null&&(Wt(o,t,n),Xs(o,t,n)),t={cache:bc()},e.payload=t;return}t=t.return}}function ox(e,t,n){var o=ia();n={lane:o,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},_o(e)?zf(t,n):(n=ic(e,t,n,o),n!==null&&(Wt(n,e,o),Of(n,t,o)))}function Rf(e,t,n){var o=ia();Zs(e,t,n,o)}function Zs(e,t,n,o){var u={lane:o,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(_o(e))zf(t,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=t.lastRenderedReducer,f!==null))try{var b=t.lastRenderedState,w=f(b,n);if(u.hasEagerState=!0,u.eagerState=w,ea(w,b))return no(e,t,u,0),Ve===null&&ro(),!1}catch{}finally{}if(n=ic(e,t,u,o),n!==null)return Wt(n,e,o),Of(n,t,o),!0}return!1}function Ic(e,t,n,o){if(o={lane:2,revertLane:wd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},_o(e)){if(t)throw Error(i(479))}else t=ic(e,n,o,2),t!==null&&Wt(t,e,2)}function _o(e){var t=e.alternate;return e===_e||t!==null&&t===_e}function zf(e,t){Xn=xo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Of(e,t,n){if((n&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Ut(e,n)}}var Qs={readContext:Tt,use:wo,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useLayoutEffect:nt,useInsertionEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useSyncExternalStore:nt,useId:nt,useHostTransitionStatus:nt,useFormState:nt,useActionState:nt,useOptimistic:nt,useMemoCache:nt,useCacheRefresh:nt};Qs.useEffectEvent=nt;var Df={readContext:Tt,use:wo,useCallback:function(e,t){return Pt().memoizedState=[e,t===void 0?null:t],e},useContext:Tt,useEffect:bf,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,So(4194308,4,wf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return So(4194308,4,e,t)},useInsertionEffect:function(e,t){So(4,2,e,t)},useMemo:function(e,t){var n=Pt();t=t===void 0?null:t;var o=e();if(un){$t(!0);try{e()}finally{$t(!1)}}return n.memoizedState=[o,t],o},useReducer:function(e,t,n){var o=Pt();if(n!==void 0){var u=n(t);if(un){$t(!0);try{n(t)}finally{$t(!1)}}}else u=t;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=ox.bind(null,_e,e),[o.memoizedState,e]},useRef:function(e){var t=Pt();return e={current:e},t.memoizedState=e},useState:function(e){e=Lc(e);var t=e.queue,n=Rf.bind(null,_e,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Hc,useDeferredValue:function(e,t){var n=Pt();return $c(n,e,t)},useTransition:function(){var e=Lc(!1);return e=Ef.bind(null,_e,e.queue,!0,!1),Pt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var o=_e,u=Pt();if(Oe){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Ve===null)throw Error(i(349));(Re&127)!==0||ef(o,t,n)}u.memoizedState=n;var f={value:n,getSnapshot:t};return u.queue=f,bf(af.bind(null,o,f,e),[e]),o.flags|=2048,Fn(9,{destroy:void 0},tf.bind(null,o,f,n,t),null),n},useId:function(){var e=Pt(),t=Ve.identifierPrefix;if(Oe){var n=Ua,o=La;n=(o&~(1<<32-jt(o)-1)).toString(32)+n,t="_"+t+"R_"+n,n=yo++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=ex++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:qc,useFormState:hf,useActionState:hf,useOptimistic:function(e){var t=Pt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ic.bind(null,_e,!0,n),n.dispatch=t,[e,t]},useMemoCache:Oc,useCacheRefresh:function(){return Pt().memoizedState=ix.bind(null,_e)},useEffectEvent:function(e){var t=Pt(),n={impl:e};return t.memoizedState=n,function(){if((He&2)!==0)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Yc={readContext:Tt,use:wo,useCallback:Sf,useContext:Tt,useEffect:Bc,useImperativeHandle:kf,useInsertionEffect:yf,useLayoutEffect:vf,useMemo:jf,useReducer:ko,useRef:gf,useState:function(){return ko(ar)},useDebugValue:Hc,useDeferredValue:function(e,t){var n=ct();return _f(n,Ie.memoizedState,e,t)},useTransition:function(){var e=ko(ar)[0],t=ct().memoizedState;return[typeof e=="boolean"?e:Ws(e),t]},useSyncExternalStore:Qh,useId:Tf,useHostTransitionStatus:qc,useFormState:ff,useActionState:ff,useOptimistic:function(e,t){var n=ct();return sf(n,Ie,e,t)},useMemoCache:Oc,useCacheRefresh:Af};Yc.useEffectEvent=xf;var Mf={readContext:Tt,use:wo,useCallback:Sf,useContext:Tt,useEffect:Bc,useImperativeHandle:kf,useInsertionEffect:yf,useLayoutEffect:vf,useMemo:jf,useReducer:Mc,useRef:gf,useState:function(){return Mc(ar)},useDebugValue:Hc,useDeferredValue:function(e,t){var n=ct();return Ie===null?$c(n,e,t):_f(n,Ie.memoizedState,e,t)},useTransition:function(){var e=Mc(ar)[0],t=ct().memoizedState;return[typeof e=="boolean"?e:Ws(e),t]},useSyncExternalStore:Qh,useId:Tf,useHostTransitionStatus:qc,useFormState:mf,useActionState:mf,useOptimistic:function(e,t){var n=ct();return Ie!==null?sf(n,Ie,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Oc,useCacheRefresh:Af};Mf.useEffectEvent=xf;function Gc(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:x({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vc={enqueueSetState:function(e,t,n){e=e._reactInternals;var o=ia(),u=Tr(o);u.payload=t,n!=null&&(u.callback=n),t=Ar(e,u,o),t!==null&&(Wt(t,e,o),Xs(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=ia(),u=Tr(o);u.tag=1,u.payload=t,n!=null&&(u.callback=n),t=Ar(e,u,o),t!==null&&(Wt(t,e,o),Xs(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ia(),o=Tr(n);o.tag=2,t!=null&&(o.callback=t),t=Ar(e,o,n),t!==null&&(Wt(t,e,n),Xs(t,e,n))}};function Lf(e,t,n,o,u,f,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,b):t.prototype&&t.prototype.isPureReactComponent?!Hs(n,o)||!Hs(u,f):!0}function Uf(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&Vc.enqueueReplaceState(t,t.state,null)}function hn(e,t){var n=t;if("ref"in t){n={};for(var o in t)o!=="ref"&&(n[o]=t[o])}if(e=e.defaultProps){n===t&&(n=x({},n));for(var u in e)n[u]===void 0&&(n[u]=e[u])}return n}function Bf(e){ao(e)}function Hf(e){console.error(e)}function $f(e){ao(e)}function Eo(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function Pf(e,t,n){try{var o=e.onCaughtError;o(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Xc(e,t,n){return n=Tr(n),n.tag=3,n.payload={element:null},n.callback=function(){Eo(e,t)},n}function qf(e){return e=Tr(e),e.tag=3,e}function If(e,t,n,o){var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){Pf(t,n,o)}}var b=n.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(e.callback=function(){Pf(t,n,o),typeof u!="function"&&(Lr===null?Lr=new Set([this]):Lr.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function lx(e,t,n,o,u){if(n.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=n.alternate,t!==null&&Pn(t,n,u,!0),n=aa.current,n!==null){switch(n.tag){case 31:case 13:return ya===null?Bo():n.alternate===null&&st===0&&(st=3),n.flags&=-257,n.flags|=65536,n.lanes=u,o===fo?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([o]):t.add(o),xd(e,o,u)),!1;case 22:return n.flags|=65536,o===fo?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([o]):n.add(o)),xd(e,o,u)),!1}throw Error(i(435,n.tag))}return xd(e,o,u),Bo(),!1}if(Oe)return t=aa.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=u,o!==hc&&(e=Error(i(422),{cause:o}),qs(ma(e,n)))):(o!==hc&&(t=Error(i(423),{cause:o}),qs(ma(t,n))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ma(o,n),u=Xc(e.stateNode,o,u),Sc(e,u),st!==4&&(st=2)),!1;var f=Error(i(520),{cause:o});if(f=ma(f,n),oi===null?oi=[f]:oi.push(f),st!==4&&(st=2),t===null)return!0;o=ma(o,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=u&-u,n.lanes|=e,e=Xc(n.stateNode,o,e),Sc(n,e),!1;case 1:if(t=n.type,f=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Lr===null||!Lr.has(f))))return n.flags|=65536,u&=-u,n.lanes|=u,u=qf(u),If(u,e,n,o),Sc(n,u),!1}n=n.return}while(n!==null);return!1}var Kc=Error(i(461)),mt=!1;function At(e,t,n,o){t.child=e===null?Vh(t,null,n,o):dn(t,e.child,n,o)}function Yf(e,t,n,o,u){n=n.render;var f=t.ref;if("ref"in o){var b={};for(var w in o)w!=="ref"&&(b[w]=o[w])}else b=o;return sn(t),o=Tc(e,t,n,b,f,u),w=Ac(),e!==null&&!mt?(Rc(e,t,u),rr(e,t,u)):(Oe&&w&&dc(t),t.flags|=1,At(e,t,o,u),t.child)}function Gf(e,t,n,o,u){if(e===null){var f=n.type;return typeof f=="function"&&!oc(f)&&f.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=f,Vf(e,t,f,o,u)):(e=io(n.type,null,o,t,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}if(f=e.child,!ad(e,u)){var b=f.memoizedProps;if(n=n.compare,n=n!==null?n:Hs,n(b,o)&&e.ref===t.ref)return rr(e,t,u)}return t.flags|=1,e=Wa(f,o),e.ref=t.ref,e.return=t,t.child=e}function Vf(e,t,n,o,u){if(e!==null){var f=e.memoizedProps;if(Hs(f,o)&&e.ref===t.ref)if(mt=!1,t.pendingProps=o=f,ad(e,u))(e.flags&131072)!==0&&(mt=!0);else return t.lanes=e.lanes,rr(e,t,u)}return Fc(e,t,n,o,u)}function Xf(e,t,n,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(f=f!==null?f.baseLanes|n:n,e!==null){for(o=t.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,t.child=null;return Kf(e,t,f,n,o)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&uo(t,f!==null?f.cachePool:null),f!==null?Fh(t,f):_c(),Jh(t);else return o=t.lanes=536870912,Kf(e,t,f!==null?f.baseLanes|n:n,n,o)}else f!==null?(uo(t,f.cachePool),Fh(t,f),zr(),t.memoizedState=null):(e!==null&&uo(t,null),_c(),zr());return At(e,t,u,n),t.child}function ei(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Kf(e,t,n,o,u){var f=yc();return f=f===null?null:{parent:ft._currentValue,pool:f},t.memoizedState={baseLanes:n,cachePool:f},e!==null&&uo(t,null),_c(),Jh(t),e!==null&&Pn(e,t,o,!0),t.childLanes=u,null}function No(e,t){return t=To({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ff(e,t,n){return dn(t,e.child,null,n),e=No(t,t.pendingProps),e.flags|=2,ra(t),t.memoizedState=null,e}function cx(e,t,n){var o=t.pendingProps,u=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Oe){if(o.mode==="hidden")return e=No(t,o),t.lanes=536870912,ei(null,e);if(Nc(t),(e=We)?(e=op(e,xa),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:jr!==null?{id:La,overflow:Ua}:null,retryLane:536870912,hydrationErrors:null},n=Rh(e),n.return=t,t.child=n,Ct=t,We=null)):e=null,e===null)throw Er(t);return t.lanes=536870912,null}return No(t,o)}var f=e.memoizedState;if(f!==null){var b=f.dehydrated;if(Nc(t),u)if(t.flags&256)t.flags&=-257,t=Ff(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(mt||Pn(e,t,n,!1),u=(n&e.childLanes)!==0,mt||u){if(o=Ve,o!==null&&(b=Qt(o,n),b!==0&&b!==f.retryLane))throw f.retryLane=b,tn(e,b),Wt(o,e,b),Kc;Bo(),t=Ff(e,t,n)}else e=f.treeContext,We=va(b.nextSibling),Ct=t,Oe=!0,_r=null,xa=!1,e!==null&&Dh(t,e),t=No(t,o),t.flags|=4096;return t}return e=Wa(e.child,{mode:o.mode,children:o.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Co(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Fc(e,t,n,o,u){return sn(t),n=Tc(e,t,n,o,void 0,u),o=Ac(),e!==null&&!mt?(Rc(e,t,u),rr(e,t,u)):(Oe&&o&&dc(t),t.flags|=1,At(e,t,n,u),t.child)}function Jf(e,t,n,o,u,f){return sn(t),t.updateQueue=null,n=Zh(t,o,n,u),Wh(e),o=Ac(),e!==null&&!mt?(Rc(e,t,f),rr(e,t,f)):(Oe&&o&&dc(t),t.flags|=1,At(e,t,n,f),t.child)}function Wf(e,t,n,o,u){if(sn(t),t.stateNode===null){var f=Un,b=n.contextType;typeof b=="object"&&b!==null&&(f=Tt(b)),f=new n(o,f),t.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Vc,t.stateNode=f,f._reactInternals=t,f=t.stateNode,f.props=o,f.state=t.memoizedState,f.refs={},wc(t),b=n.contextType,f.context=typeof b=="object"&&b!==null?Tt(b):Un,f.state=t.memoizedState,b=n.getDerivedStateFromProps,typeof b=="function"&&(Gc(t,n,b,o),f.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(b=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),b!==f.state&&Vc.enqueueReplaceState(f,f.state,null),Fs(t,o,f,u),Ks(),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){f=t.stateNode;var w=t.memoizedProps,j=hn(n,w);f.props=j;var U=f.context,Y=n.contextType;b=Un,typeof Y=="object"&&Y!==null&&(b=Tt(Y));var V=n.getDerivedStateFromProps;Y=typeof V=="function"||typeof f.getSnapshotBeforeUpdate=="function",w=t.pendingProps!==w,Y||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(w||U!==b)&&Uf(t,f,o,b),Cr=!1;var H=t.memoizedState;f.state=H,Fs(t,o,f,u),Ks(),U=t.memoizedState,w||H!==U||Cr?(typeof V=="function"&&(Gc(t,n,V,o),U=t.memoizedState),(j=Cr||Lf(t,n,j,o,H,U,b))?(Y||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(t.flags|=4194308)):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=U),f.props=o,f.state=U,f.context=b,o=j):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{f=t.stateNode,kc(e,t),b=t.memoizedProps,Y=hn(n,b),f.props=Y,V=t.pendingProps,H=f.context,U=n.contextType,j=Un,typeof U=="object"&&U!==null&&(j=Tt(U)),w=n.getDerivedStateFromProps,(U=typeof w=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b!==V||H!==j)&&Uf(t,f,o,j),Cr=!1,H=t.memoizedState,f.state=H,Fs(t,o,f,u),Ks();var $=t.memoizedState;b!==V||H!==$||Cr||e!==null&&e.dependencies!==null&&lo(e.dependencies)?(typeof w=="function"&&(Gc(t,n,w,o),$=t.memoizedState),(Y=Cr||Lf(t,n,Y,o,H,$,j)||e!==null&&e.dependencies!==null&&lo(e.dependencies))?(U||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,$,j),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,$,j)),typeof f.componentDidUpdate=="function"&&(t.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof f.componentDidUpdate!="function"||b===e.memoizedProps&&H===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&H===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=$),f.props=o,f.state=$,f.context=j,o=Y):(typeof f.componentDidUpdate!="function"||b===e.memoizedProps&&H===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&H===e.memoizedState||(t.flags|=1024),o=!1)}return f=o,Co(e,t),o=(t.flags&128)!==0,f||o?(f=t.stateNode,n=o&&typeof n.getDerivedStateFromError!="function"?null:f.render(),t.flags|=1,e!==null&&o?(t.child=dn(t,e.child,null,u),t.child=dn(t,null,n,u)):At(e,t,n,u),t.memoizedState=f.state,e=t.child):e=rr(e,t,u),e}function Zf(e,t,n,o){return rn(),t.flags|=256,At(e,t,n,o),t.child}var Jc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wc(e){return{baseLanes:e,cachePool:$h()}}function Zc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=sa),e}function Qf(e,t,n){var o=t.pendingProps,u=!1,f=(t.flags&128)!==0,b;if((b=f)||(b=e!==null&&e.memoizedState===null?!1:(lt.current&2)!==0),b&&(u=!0,t.flags&=-129),b=(t.flags&32)!==0,t.flags&=-33,e===null){if(Oe){if(u?Rr(t):zr(),(e=We)?(e=op(e,xa),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:jr!==null?{id:La,overflow:Ua}:null,retryLane:536870912,hydrationErrors:null},n=Rh(e),n.return=t,t.child=n,Ct=t,We=null)):e=null,e===null)throw Er(t);return Dd(e)?t.lanes=32:t.lanes=536870912,null}var w=o.children;return o=o.fallback,u?(zr(),u=t.mode,w=To({mode:"hidden",children:w},u),o=an(o,u,n,null),w.return=t,o.return=t,w.sibling=o,t.child=w,o=t.child,o.memoizedState=Wc(n),o.childLanes=Zc(e,b,n),t.memoizedState=Jc,ei(null,o)):(Rr(t),Qc(t,w))}var j=e.memoizedState;if(j!==null&&(w=j.dehydrated,w!==null)){if(f)t.flags&256?(Rr(t),t.flags&=-257,t=ed(e,t,n)):t.memoizedState!==null?(zr(),t.child=e.child,t.flags|=128,t=null):(zr(),w=o.fallback,u=t.mode,o=To({mode:"visible",children:o.children},u),w=an(w,u,n,null),w.flags|=2,o.return=t,w.return=t,o.sibling=w,t.child=o,dn(t,e.child,null,n),o=t.child,o.memoizedState=Wc(n),o.childLanes=Zc(e,b,n),t.memoizedState=Jc,t=ei(null,o));else if(Rr(t),Dd(w)){if(b=w.nextSibling&&w.nextSibling.dataset,b)var U=b.dgst;b=U,o=Error(i(419)),o.stack="",o.digest=b,qs({value:o,source:null,stack:null}),t=ed(e,t,n)}else if(mt||Pn(e,t,n,!1),b=(n&e.childLanes)!==0,mt||b){if(b=Ve,b!==null&&(o=Qt(b,n),o!==0&&o!==j.retryLane))throw j.retryLane=o,tn(e,o),Wt(b,e,o),Kc;Od(w)||Bo(),t=ed(e,t,n)}else Od(w)?(t.flags|=192,t.child=e.child,t=null):(e=j.treeContext,We=va(w.nextSibling),Ct=t,Oe=!0,_r=null,xa=!1,e!==null&&Dh(t,e),t=Qc(t,o.children),t.flags|=4096);return t}return u?(zr(),w=o.fallback,u=t.mode,j=e.child,U=j.sibling,o=Wa(j,{mode:"hidden",children:o.children}),o.subtreeFlags=j.subtreeFlags&65011712,U!==null?w=Wa(U,w):(w=an(w,u,n,null),w.flags|=2),w.return=t,o.return=t,o.sibling=w,t.child=o,ei(null,o),o=t.child,w=e.child.memoizedState,w===null?w=Wc(n):(u=w.cachePool,u!==null?(j=ft._currentValue,u=u.parent!==j?{parent:j,pool:j}:u):u=$h(),w={baseLanes:w.baseLanes|n,cachePool:u}),o.memoizedState=w,o.childLanes=Zc(e,b,n),t.memoizedState=Jc,ei(e.child,o)):(Rr(t),n=e.child,e=n.sibling,n=Wa(n,{mode:"visible",children:o.children}),n.return=t,n.sibling=null,e!==null&&(b=t.deletions,b===null?(t.deletions=[e],t.flags|=16):b.push(e)),t.child=n,t.memoizedState=null,n)}function Qc(e,t){return t=To({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function To(e,t){return e=ta(22,e,null,t),e.lanes=0,e}function ed(e,t,n){return dn(t,e.child,null,n),e=Qc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function e0(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),mc(e.return,t,n)}function td(e,t,n,o,u,f){var b=e.memoizedState;b===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:u,treeForkCount:f}:(b.isBackwards=t,b.rendering=null,b.renderingStartTime=0,b.last=o,b.tail=n,b.tailMode=u,b.treeForkCount=f)}function t0(e,t,n){var o=t.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var b=lt.current,w=(b&2)!==0;if(w?(b=b&1|2,t.flags|=128):b&=1,q(lt,b),At(e,t,o,n),o=Oe?Ps:0,!w&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&e0(e,n,t);else if(e.tag===19)e0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(n=t.child,u=null;n!==null;)e=n.alternate,e!==null&&bo(e)===null&&(u=n),n=n.sibling;n=u,n===null?(u=t.child,t.child=null):(u=n.sibling,n.sibling=null),td(t,!1,u,n,f,o);break;case"backwards":case"unstable_legacy-backwards":for(n=null,u=t.child,t.child=null;u!==null;){if(e=u.alternate,e!==null&&bo(e)===null){t.child=u;break}e=u.sibling,u.sibling=n,n=u,u=e}td(t,!0,n,null,f,o);break;case"together":td(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function rr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mr|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Pn(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Wa(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wa(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ad(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&lo(e)))}function dx(e,t,n){switch(t.tag){case 3:$e(t,t.stateNode.containerInfo),Nr(t,ft,e.memoizedState.cache),rn();break;case 27:case 5:Dt(t);break;case 4:$e(t,t.stateNode.containerInfo);break;case 10:Nr(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Nc(t),null;break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(Rr(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Qf(e,t,n):(Rr(t),e=rr(e,t,n),e!==null?e.sibling:null);Rr(t);break;case 19:var u=(e.flags&128)!==0;if(o=(n&t.childLanes)!==0,o||(Pn(e,t,n,!1),o=(n&t.childLanes)!==0),u){if(o)return t0(e,t,n);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),q(lt,lt.current),o)break;return null;case 22:return t.lanes=0,Xf(e,t,n,t.pendingProps);case 24:Nr(t,ft,e.memoizedState.cache)}return rr(e,t,n)}function a0(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)mt=!0;else{if(!ad(e,n)&&(t.flags&128)===0)return mt=!1,dx(e,t,n);mt=(e.flags&131072)!==0}else mt=!1,Oe&&(t.flags&1048576)!==0&&Oh(t,Ps,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=ln(t.elementType),t.type=e,typeof e=="function")oc(e)?(o=hn(e,o),t.tag=1,t=Wf(null,t,e,o,n)):(t.tag=0,t=Fc(null,t,e,o,n));else{if(e!=null){var u=e.$$typeof;if(u===I){t.tag=11,t=Yf(null,t,e,o,n);break e}else if(u===z){t.tag=14,t=Gf(null,t,e,o,n);break e}}throw t=ve(e)||e,Error(i(306,t,""))}}return t;case 0:return Fc(e,t,t.type,t.pendingProps,n);case 1:return o=t.type,u=hn(o,t.pendingProps),Wf(e,t,o,u,n);case 3:e:{if($e(t,t.stateNode.containerInfo),e===null)throw Error(i(387));o=t.pendingProps;var f=t.memoizedState;u=f.element,kc(e,t),Fs(t,o,null,n);var b=t.memoizedState;if(o=b.cache,Nr(t,ft,o),o!==f.cache&&gc(t,[ft],n,!0),Ks(),o=b.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:b.cache},t.updateQueue.baseState=f,t.memoizedState=f,t.flags&256){t=Zf(e,t,o,n);break e}else if(o!==u){u=ma(Error(i(424)),t),qs(u),t=Zf(e,t,o,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(We=va(e.firstChild),Ct=t,Oe=!0,_r=null,xa=!0,n=Vh(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(rn(),o===u){t=rr(e,t,n);break e}At(e,t,o,n)}t=t.child}return t;case 26:return Co(e,t),e===null?(n=fp(t.type,null,t.pendingProps,null))?t.memoizedState=n:Oe||(n=t.type,e=t.pendingProps,o=Go(ke.current).createElement(n),o[ut]=t,o[ht]=e,Rt(o,n,e),_t(o),t.stateNode=o):t.memoizedState=fp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Dt(t),e===null&&Oe&&(o=t.stateNode=dp(t.type,t.pendingProps,ke.current),Ct=t,xa=!0,u=We,$r(t.type)?(Md=u,We=va(o.firstChild)):We=u),At(e,t,t.pendingProps.children,n),Co(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Oe&&((u=o=We)&&(o=$x(o,t.type,t.pendingProps,xa),o!==null?(t.stateNode=o,Ct=t,We=va(o.firstChild),xa=!1,u=!0):u=!1),u||Er(t)),Dt(t),u=t.type,f=t.pendingProps,b=e!==null?e.memoizedProps:null,o=f.children,Ad(u,f)?o=null:b!==null&&Ad(u,b)&&(t.flags|=32),t.memoizedState!==null&&(u=Tc(e,t,tx,null,null,n),mi._currentValue=u),Co(e,t),At(e,t,o,n),t.child;case 6:return e===null&&Oe&&((e=n=We)&&(n=Px(n,t.pendingProps,xa),n!==null?(t.stateNode=n,Ct=t,We=null,e=!0):e=!1),e||Er(t)),null;case 13:return Qf(e,t,n);case 4:return $e(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=dn(t,null,o,n):At(e,t,o,n),t.child;case 11:return Yf(e,t,t.type,t.pendingProps,n);case 7:return At(e,t,t.pendingProps,n),t.child;case 8:return At(e,t,t.pendingProps.children,n),t.child;case 12:return At(e,t,t.pendingProps.children,n),t.child;case 10:return o=t.pendingProps,Nr(t,t.type,o.value),At(e,t,o.children,n),t.child;case 9:return u=t.type._context,o=t.pendingProps.children,sn(t),u=Tt(u),o=o(u),t.flags|=1,At(e,t,o,n),t.child;case 14:return Gf(e,t,t.type,t.pendingProps,n);case 15:return Vf(e,t,t.type,t.pendingProps,n);case 19:return t0(e,t,n);case 31:return cx(e,t,n);case 22:return Xf(e,t,n,t.pendingProps);case 24:return sn(t),o=Tt(ft),e===null?(u=yc(),u===null&&(u=Ve,f=bc(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=n),u=f),t.memoizedState={parent:o,cache:u},wc(t),Nr(t,ft,u)):((e.lanes&n)!==0&&(kc(e,t),Fs(t,null,null,n),Ks()),u=e.memoizedState,f=t.memoizedState,u.parent!==o?(u={parent:o,cache:o},t.memoizedState=u,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=u),Nr(t,ft,o)):(o=f.cache,Nr(t,ft,o),o!==u.cache&&gc(t,[ft],n,!0))),At(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function nr(e){e.flags|=4}function rd(e,t,n,o,u){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(T0())e.flags|=8192;else throw cn=fo,vc}else e.flags&=-16777217}function r0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!xp(t))if(T0())e.flags|=8192;else throw cn=fo,vc}function Ao(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?De():536870912,e.lanes|=t,Qn|=t)}function ti(e,t){if(!Oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var u=e.child;u!==null;)n|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)n|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function ux(e,t,n){var o=t.pendingProps;switch(uc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return Ze(t),null;case 3:return n=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),er(ft),Ne(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&($n(t)?nr(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,fc())),Ze(t),null;case 26:var u=t.type,f=t.memoizedState;return e===null?(nr(t),f!==null?(Ze(t),r0(t,f)):(Ze(t),rd(t,u,null,o,n))):f?f!==e.memoizedState?(nr(t),Ze(t),r0(t,f)):(Ze(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&nr(t),Ze(t),rd(t,u,e,o,n)),null;case 27:if(vt(t),n=ke.current,u=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&nr(t);else{if(!o){if(t.stateNode===null)throw Error(i(166));return Ze(t),null}e=F.current,$n(t)?Mh(t):(e=dp(u,o,n),t.stateNode=e,nr(t))}return Ze(t),null;case 5:if(vt(t),u=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&nr(t);else{if(!o){if(t.stateNode===null)throw Error(i(166));return Ze(t),null}if(f=F.current,$n(t))Mh(t);else{var b=Go(ke.current);switch(f){case 1:f=b.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=b.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=b.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=b.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=b.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?b.createElement("select",{is:o.is}):b.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?b.createElement(u,{is:o.is}):b.createElement(u)}}f[ut]=t,f[ht]=o;e:for(b=t.child;b!==null;){if(b.tag===5||b.tag===6)f.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===t)break e;for(;b.sibling===null;){if(b.return===null||b.return===t)break e;b=b.return}b.sibling.return=b.return,b=b.sibling}t.stateNode=f;e:switch(Rt(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&nr(t)}}return Ze(t),rd(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&nr(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(i(166));if(e=ke.current,$n(t)){if(e=t.stateNode,n=t.memoizedProps,o=null,u=Ct,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[ut]=t,e=!!(e.nodeValue===n||o!==null&&o.suppressHydrationWarning===!0||Q0(e.nodeValue,n)),e||Er(t,!0)}else e=Go(e).createTextNode(o),e[ut]=t,t.stateNode=e}return Ze(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(o=$n(t),n!==null){if(e===null){if(!o)throw Error(i(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(557));e[ut]=t}else rn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ze(t),e=!1}else n=fc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ra(t),t):(ra(t),null);if((t.flags&128)!==0)throw Error(i(558))}return Ze(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=$n(t),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(i(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(i(317));u[ut]=t}else rn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ze(t),u=!1}else u=fc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return t.flags&256?(ra(t),t):(ra(t),null)}return ra(t),(t.flags&128)!==0?(t.lanes=n,t):(n=o!==null,e=e!==null&&e.memoizedState!==null,n&&(o=t.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ao(t,t.updateQueue),Ze(t),null);case 4:return Ne(),e===null&&_d(t.stateNode.containerInfo),Ze(t),null;case 10:return er(t.type),Ze(t),null;case 19:if(A(lt),o=t.memoizedState,o===null)return Ze(t),null;if(u=(t.flags&128)!==0,f=o.rendering,f===null)if(u)ti(o,!1);else{if(st!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(f=bo(e),f!==null){for(t.flags|=128,ti(o,!1),e=f.updateQueue,t.updateQueue=e,Ao(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ah(n,e),n=n.sibling;return q(lt,lt.current&1|2),Oe&&Za(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&St()>Mo&&(t.flags|=128,u=!0,ti(o,!1),t.lanes=4194304)}else{if(!u)if(e=bo(f),e!==null){if(t.flags|=128,u=!0,e=e.updateQueue,t.updateQueue=e,Ao(t,e),ti(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Oe)return Ze(t),null}else 2*St()-o.renderingStartTime>Mo&&n!==536870912&&(t.flags|=128,u=!0,ti(o,!1),t.lanes=4194304);o.isBackwards?(f.sibling=t.child,t.child=f):(e=o.last,e!==null?e.sibling=f:t.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=St(),e.sibling=null,n=lt.current,q(lt,u?n&1|2:n&1),Oe&&Za(t,o.treeForkCount),e):(Ze(t),null);case 22:case 23:return ra(t),Ec(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(n&536870912)!==0&&(t.flags&128)===0&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),n=t.updateQueue,n!==null&&Ao(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==n&&(t.flags|=2048),e!==null&&A(on),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),er(ft),Ze(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function hx(e,t){switch(uc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return er(ft),Ne(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return vt(t),null;case 31:if(t.memoizedState!==null){if(ra(t),t.alternate===null)throw Error(i(340));rn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ra(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));rn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(lt),null;case 4:return Ne(),null;case 10:return er(t.type),null;case 22:case 23:return ra(t),Ec(),e!==null&&A(on),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return er(ft),null;case 25:return null;default:return null}}function n0(e,t){switch(uc(t),t.tag){case 3:er(ft),Ne();break;case 26:case 27:case 5:vt(t);break;case 4:Ne();break;case 31:t.memoizedState!==null&&ra(t);break;case 13:ra(t);break;case 19:A(lt);break;case 10:er(t.type);break;case 22:case 23:ra(t),Ec(),e!==null&&A(on);break;case 24:er(ft)}}function ai(e,t){try{var n=t.updateQueue,o=n!==null?n.lastEffect:null;if(o!==null){var u=o.next;n=u;do{if((n.tag&e)===e){o=void 0;var f=n.create,b=n.inst;o=f(),b.destroy=o}n=n.next}while(n!==u)}}catch(w){qe(t,t.return,w)}}function Or(e,t,n){try{var o=t.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var b=o.inst,w=b.destroy;if(w!==void 0){b.destroy=void 0,u=t;var j=n,U=w;try{U()}catch(Y){qe(u,j,Y)}}}o=o.next}while(o!==f)}}catch(Y){qe(t,t.return,Y)}}function s0(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Kh(t,n)}catch(o){qe(e,e.return,o)}}}function i0(e,t,n){n.props=hn(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(o){qe(e,t,o)}}function ri(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof n=="function"?e.refCleanup=n(o):n.current=o}}catch(u){qe(e,t,u)}}function Ba(e,t){var n=e.ref,o=e.refCleanup;if(n!==null)if(typeof o=="function")try{o()}catch(u){qe(e,t,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(u){qe(e,t,u)}else n.current=null}function o0(e){var t=e.type,n=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&o.focus();break e;case"img":n.src?o.src=n.src:n.srcSet&&(o.srcset=n.srcSet)}}catch(u){qe(e,e.return,u)}}function nd(e,t,n){try{var o=e.stateNode;Dx(o,e.type,n,t),o[ht]=t}catch(u){qe(e,e.return,u)}}function l0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&$r(e.type)||e.tag===4}function sd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||l0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&$r(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function id(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Fa));else if(o!==4&&(o===27&&$r(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(id(e,t,n),e=e.sibling;e!==null;)id(e,t,n),e=e.sibling}function Ro(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(o===27&&$r(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Ro(e,t,n),e=e.sibling;e!==null;)Ro(e,t,n),e=e.sibling}function c0(e){var t=e.stateNode,n=e.memoizedProps;try{for(var o=e.type,u=t.attributes;u.length;)t.removeAttributeNode(u[0]);Rt(t,o,n),t[ut]=e,t[ht]=n}catch(f){qe(e,e.return,f)}}var sr=!1,gt=!1,od=!1,d0=typeof WeakSet=="function"?WeakSet:Set,Et=null;function fx(e,t){if(e=e.containerInfo,Cd=Zo,e=wh(e),ec(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{n.nodeType,f.nodeType}catch{n=null;break e}var b=0,w=-1,j=-1,U=0,Y=0,V=e,H=null;t:for(;;){for(var $;V!==n||u!==0&&V.nodeType!==3||(w=b+u),V!==f||o!==0&&V.nodeType!==3||(j=b+o),V.nodeType===3&&(b+=V.nodeValue.length),($=V.firstChild)!==null;)H=V,V=$;for(;;){if(V===e)break t;if(H===n&&++U===u&&(w=b),H===f&&++Y===o&&(j=b),($=V.nextSibling)!==null)break;V=H,H=V.parentNode}V=$}n=w===-1||j===-1?null:{start:w,end:j}}else n=null}n=n||{start:0,end:0}}else n=null;for(Td={focusedElem:e,selectionRange:n},Zo=!1,Et=t;Et!==null;)if(t=Et,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Et=e;else for(;Et!==null;){switch(t=Et,f=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)u=e[n],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,n=t,u=f.memoizedProps,f=f.memoizedState,o=n.stateNode;try{var ie=hn(n.type,u);e=o.getSnapshotBeforeUpdate(ie,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(ye){qe(n,n.return,ye)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)zd(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":zd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,Et=e;break}Et=t.return}}function u0(e,t,n){var o=n.flags;switch(n.tag){case 0:case 11:case 15:or(e,n),o&4&&ai(5,n);break;case 1:if(or(e,n),o&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(b){qe(n,n.return,b)}else{var u=hn(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(u,t,e.__reactInternalSnapshotBeforeUpdate)}catch(b){qe(n,n.return,b)}}o&64&&s0(n),o&512&&ri(n,n.return);break;case 3:if(or(e,n),o&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Kh(e,t)}catch(b){qe(n,n.return,b)}}break;case 27:t===null&&o&4&&c0(n);case 26:case 5:or(e,n),t===null&&o&4&&o0(n),o&512&&ri(n,n.return);break;case 12:or(e,n);break;case 31:or(e,n),o&4&&p0(e,n);break;case 13:or(e,n),o&4&&m0(e,n),o&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=kx.bind(null,n),qx(e,n))));break;case 22:if(o=n.memoizedState!==null||sr,!o){t=t!==null&&t.memoizedState!==null||gt,u=sr;var f=gt;sr=o,(gt=t)&&!f?lr(e,n,(n.subtreeFlags&8772)!==0):or(e,n),sr=u,gt=f}break;case 30:break;default:or(e,n)}}function h0(e){var t=e.alternate;t!==null&&(e.alternate=null,h0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ma(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var et=null,Xt=!1;function ir(e,t,n){for(n=n.child;n!==null;)f0(e,t,n),n=n.sibling}function f0(e,t,n){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(Da,n)}catch{}switch(n.tag){case 26:gt||Ba(n,t),ir(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:gt||Ba(n,t);var o=et,u=Xt;$r(n.type)&&(et=n.stateNode,Xt=!1),ir(e,t,n),hi(n.stateNode),et=o,Xt=u;break;case 5:gt||Ba(n,t);case 6:if(o=et,u=Xt,et=null,ir(e,t,n),et=o,Xt=u,et!==null)if(Xt)try{(et.nodeType===9?et.body:et.nodeName==="HTML"?et.ownerDocument.body:et).removeChild(n.stateNode)}catch(f){qe(n,t,f)}else try{et.removeChild(n.stateNode)}catch(f){qe(n,t,f)}break;case 18:et!==null&&(Xt?(e=et,sp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),os(e)):sp(et,n.stateNode));break;case 4:o=et,u=Xt,et=n.stateNode.containerInfo,Xt=!0,ir(e,t,n),et=o,Xt=u;break;case 0:case 11:case 14:case 15:Or(2,n,t),gt||Or(4,n,t),ir(e,t,n);break;case 1:gt||(Ba(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"&&i0(n,t,o)),ir(e,t,n);break;case 21:ir(e,t,n);break;case 22:gt=(o=gt)||n.memoizedState!==null,ir(e,t,n),gt=o;break;default:ir(e,t,n)}}function p0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{os(e)}catch(n){qe(t,t.return,n)}}}function m0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{os(e)}catch(n){qe(t,t.return,n)}}function px(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new d0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new d0),t;default:throw Error(i(435,e.tag))}}function zo(e,t){var n=px(e);t.forEach(function(o){if(!n.has(o)){n.add(o);var u=Sx.bind(null,e,o);o.then(u,u)}})}function Kt(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var u=n[o],f=e,b=t,w=b;e:for(;w!==null;){switch(w.tag){case 27:if($r(w.type)){et=w.stateNode,Xt=!1;break e}break;case 5:et=w.stateNode,Xt=!1;break e;case 3:case 4:et=w.stateNode.containerInfo,Xt=!0;break e}w=w.return}if(et===null)throw Error(i(160));f0(f,b,u),et=null,Xt=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)g0(t,e),t=t.sibling}var Ea=null;function g0(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Kt(t,e),Ft(e),o&4&&(Or(3,e,e.return),ai(3,e),Or(5,e,e.return));break;case 1:Kt(t,e),Ft(e),o&512&&(gt||n===null||Ba(n,n.return)),o&64&&sr&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?o:n.concat(o))));break;case 26:var u=Ea;if(Kt(t,e),Ft(e),o&512&&(gt||n===null||Ba(n,n.return)),o&4){var f=n!==null?n.memoizedState:null;if(o=e.memoizedState,n===null)if(o===null)if(e.stateNode===null){e:{o=e.type,n=e.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Yt]||f[ut]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Rt(f,o,n),f[ut]=e,_t(f),o=f;break e;case"link":var b=gp("link","href",u).get(o+(n.href||""));if(b){for(var w=0;w<b.length;w++)if(f=b[w],f.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&f.getAttribute("rel")===(n.rel==null?null:n.rel)&&f.getAttribute("title")===(n.title==null?null:n.title)&&f.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){b.splice(w,1);break t}}f=u.createElement(o),Rt(f,o,n),u.head.appendChild(f);break;case"meta":if(b=gp("meta","content",u).get(o+(n.content||""))){for(w=0;w<b.length;w++)if(f=b[w],f.getAttribute("content")===(n.content==null?null:""+n.content)&&f.getAttribute("name")===(n.name==null?null:n.name)&&f.getAttribute("property")===(n.property==null?null:n.property)&&f.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&f.getAttribute("charset")===(n.charSet==null?null:n.charSet)){b.splice(w,1);break t}}f=u.createElement(o),Rt(f,o,n),u.head.appendChild(f);break;default:throw Error(i(468,o))}f[ut]=e,_t(f),o=f}e.stateNode=o}else bp(u,e.type,e.stateNode);else e.stateNode=mp(u,o,e.memoizedProps);else f!==o?(f===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):f.count--,o===null?bp(u,e.type,e.stateNode):mp(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&nd(e,e.memoizedProps,n.memoizedProps)}break;case 27:Kt(t,e),Ft(e),o&512&&(gt||n===null||Ba(n,n.return)),n!==null&&o&4&&nd(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Kt(t,e),Ft(e),o&512&&(gt||n===null||Ba(n,n.return)),e.flags&32){u=e.stateNode;try{An(u,"")}catch(ie){qe(e,e.return,ie)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,nd(e,u,n!==null?n.memoizedProps:u)),o&1024&&(od=!0);break;case 6:if(Kt(t,e),Ft(e),o&4){if(e.stateNode===null)throw Error(i(162));o=e.memoizedProps,n=e.stateNode;try{n.nodeValue=o}catch(ie){qe(e,e.return,ie)}}break;case 3:if(Ko=null,u=Ea,Ea=Vo(t.containerInfo),Kt(t,e),Ea=u,Ft(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{os(t.containerInfo)}catch(ie){qe(e,e.return,ie)}od&&(od=!1,b0(e));break;case 4:o=Ea,Ea=Vo(e.stateNode.containerInfo),Kt(t,e),Ft(e),Ea=o;break;case 12:Kt(t,e),Ft(e);break;case 31:Kt(t,e),Ft(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,zo(e,o)));break;case 13:Kt(t,e),Ft(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Do=St()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,zo(e,o)));break;case 22:u=e.memoizedState!==null;var j=n!==null&&n.memoizedState!==null,U=sr,Y=gt;if(sr=U||u,gt=Y||j,Kt(t,e),gt=Y,sr=U,Ft(e),o&8192)e:for(t=e.stateNode,t._visibility=u?t._visibility&-2:t._visibility|1,u&&(n===null||j||sr||gt||fn(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){j=n=t;try{if(f=j.stateNode,u)b=f.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{w=j.stateNode;var V=j.memoizedProps.style,H=V!=null&&V.hasOwnProperty("display")?V.display:null;w.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(ie){qe(j,j.return,ie)}}}else if(t.tag===6){if(n===null){j=t;try{j.stateNode.nodeValue=u?"":j.memoizedProps}catch(ie){qe(j,j.return,ie)}}}else if(t.tag===18){if(n===null){j=t;try{var $=j.stateNode;u?ip($,!0):ip(j.stateNode,!1)}catch(ie){qe(j,j.return,ie)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(n=o.retryQueue,n!==null&&(o.retryQueue=null,zo(e,n))));break;case 19:Kt(t,e),Ft(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,zo(e,o)));break;case 30:break;case 21:break;default:Kt(t,e),Ft(e)}}function Ft(e){var t=e.flags;if(t&2){try{for(var n,o=e.return;o!==null;){if(l0(o)){n=o;break}o=o.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var u=n.stateNode,f=sd(e);Ro(e,f,u);break;case 5:var b=n.stateNode;n.flags&32&&(An(b,""),n.flags&=-33);var w=sd(e);Ro(e,w,b);break;case 3:case 4:var j=n.stateNode.containerInfo,U=sd(e);id(e,U,j);break;default:throw Error(i(161))}}catch(Y){qe(e,e.return,Y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function b0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;b0(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function or(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)u0(e,t.alternate,t),t=t.sibling}function fn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Or(4,t,t.return),fn(t);break;case 1:Ba(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&i0(t,t.return,n),fn(t);break;case 27:hi(t.stateNode);case 26:case 5:Ba(t,t.return),fn(t);break;case 22:t.memoizedState===null&&fn(t);break;case 30:fn(t);break;default:fn(t)}e=e.sibling}}function lr(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,u=e,f=t,b=f.flags;switch(f.tag){case 0:case 11:case 15:lr(u,f,n),ai(4,f);break;case 1:if(lr(u,f,n),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(U){qe(o,o.return,U)}if(o=f,u=o.updateQueue,u!==null){var w=o.stateNode;try{var j=u.shared.hiddenCallbacks;if(j!==null)for(u.shared.hiddenCallbacks=null,u=0;u<j.length;u++)Xh(j[u],w)}catch(U){qe(o,o.return,U)}}n&&b&64&&s0(f),ri(f,f.return);break;case 27:c0(f);case 26:case 5:lr(u,f,n),n&&o===null&&b&4&&o0(f),ri(f,f.return);break;case 12:lr(u,f,n);break;case 31:lr(u,f,n),n&&b&4&&p0(u,f);break;case 13:lr(u,f,n),n&&b&4&&m0(u,f);break;case 22:f.memoizedState===null&&lr(u,f,n),ri(f,f.return);break;case 30:break;default:lr(u,f,n)}t=t.sibling}}function ld(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Is(n))}function cd(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Is(e))}function Na(e,t,n,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)x0(e,t,n,o),t=t.sibling}function x0(e,t,n,o){var u=t.flags;switch(t.tag){case 0:case 11:case 15:Na(e,t,n,o),u&2048&&ai(9,t);break;case 1:Na(e,t,n,o);break;case 3:Na(e,t,n,o),u&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Is(e)));break;case 12:if(u&2048){Na(e,t,n,o),e=t.stateNode;try{var f=t.memoizedProps,b=f.id,w=f.onPostCommit;typeof w=="function"&&w(b,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(j){qe(t,t.return,j)}}else Na(e,t,n,o);break;case 31:Na(e,t,n,o);break;case 13:Na(e,t,n,o);break;case 23:break;case 22:f=t.stateNode,b=t.alternate,t.memoizedState!==null?f._visibility&2?Na(e,t,n,o):ni(e,t):f._visibility&2?Na(e,t,n,o):(f._visibility|=2,Jn(e,t,n,o,(t.subtreeFlags&10256)!==0||!1)),u&2048&&ld(b,t);break;case 24:Na(e,t,n,o),u&2048&&cd(t.alternate,t);break;default:Na(e,t,n,o)}}function Jn(e,t,n,o,u){for(u=u&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var f=e,b=t,w=n,j=o,U=b.flags;switch(b.tag){case 0:case 11:case 15:Jn(f,b,w,j,u),ai(8,b);break;case 23:break;case 22:var Y=b.stateNode;b.memoizedState!==null?Y._visibility&2?Jn(f,b,w,j,u):ni(f,b):(Y._visibility|=2,Jn(f,b,w,j,u)),u&&U&2048&&ld(b.alternate,b);break;case 24:Jn(f,b,w,j,u),u&&U&2048&&cd(b.alternate,b);break;default:Jn(f,b,w,j,u)}t=t.sibling}}function ni(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,o=t,u=o.flags;switch(o.tag){case 22:ni(n,o),u&2048&&ld(o.alternate,o);break;case 24:ni(n,o),u&2048&&cd(o.alternate,o);break;default:ni(n,o)}t=t.sibling}}var si=8192;function Wn(e,t,n){if(e.subtreeFlags&si)for(e=e.child;e!==null;)y0(e,t,n),e=e.sibling}function y0(e,t,n){switch(e.tag){case 26:Wn(e,t,n),e.flags&si&&e.memoizedState!==null&&ey(n,Ea,e.memoizedState,e.memoizedProps);break;case 5:Wn(e,t,n);break;case 3:case 4:var o=Ea;Ea=Vo(e.stateNode.containerInfo),Wn(e,t,n),Ea=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=si,si=16777216,Wn(e,t,n),si=o):Wn(e,t,n));break;default:Wn(e,t,n)}}function v0(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ii(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var o=t[n];Et=o,k0(o,e)}v0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)w0(e),e=e.sibling}function w0(e){switch(e.tag){case 0:case 11:case 15:ii(e),e.flags&2048&&Or(9,e,e.return);break;case 3:ii(e);break;case 12:ii(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Oo(e)):ii(e);break;default:ii(e)}}function Oo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var o=t[n];Et=o,k0(o,e)}v0(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Or(8,t,t.return),Oo(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Oo(t));break;default:Oo(t)}e=e.sibling}}function k0(e,t){for(;Et!==null;){var n=Et;switch(n.tag){case 0:case 11:case 15:Or(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var o=n.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Is(n.memoizedState.cache)}if(o=n.child,o!==null)o.return=n,Et=o;else e:for(n=e;Et!==null;){o=Et;var u=o.sibling,f=o.return;if(h0(o),o===n){Et=null;break e}if(u!==null){u.return=f,Et=u;break e}Et=f}}}var mx={getCacheForType:function(e){var t=Tt(ft),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Tt(ft).controller.signal}},gx=typeof WeakMap=="function"?WeakMap:Map,He=0,Ve=null,Ce=null,Re=0,Pe=0,na=null,Dr=!1,Zn=!1,dd=!1,cr=0,st=0,Mr=0,pn=0,ud=0,sa=0,Qn=0,oi=null,Jt=null,hd=!1,Do=0,S0=0,Mo=1/0,Lo=null,Lr=null,yt=0,Ur=null,es=null,dr=0,fd=0,pd=null,j0=null,li=0,md=null;function ia(){return(He&2)!==0&&Re!==0?Re&-Re:O.T!==null?wd():wr()}function _0(){if(sa===0)if((Re&536870912)===0||Oe){var e=dt;dt<<=1,(dt&3932160)===0&&(dt=262144),sa=e}else sa=536870912;return e=aa.current,e!==null&&(e.flags|=32),sa}function Wt(e,t,n){(e===Ve&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)&&(ts(e,0),Br(e,Re,sa,!1)),rt(e,n),((He&2)===0||e!==Ve)&&(e===Ve&&((He&2)===0&&(pn|=n),st===4&&Br(e,Re,sa,!1)),Ha(e))}function E0(e,t,n){if((He&6)!==0)throw Error(i(327));var o=!n&&(t&127)===0&&(t&e.expiredLanes)===0||W(e,t),u=o?yx(e,t):bd(e,t,!0),f=o;do{if(u===0){Zn&&!o&&Br(e,t,0,!1);break}else{if(n=e.current.alternate,f&&!bx(n)){u=bd(e,t,!1),f=!1;continue}if(u===2){if(f=t,e.errorRecoveryDisabledLanes&f)var b=0;else b=e.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){t=b;e:{var w=e;u=oi;var j=w.current.memoizedState.isDehydrated;if(j&&(ts(w,b).flags|=256),b=bd(w,b,!1),b!==2){if(dd&&!j){w.errorRecoveryDisabledLanes|=f,pn|=f,u=4;break e}f=Jt,Jt=u,f!==null&&(Jt===null?Jt=f:Jt.push.apply(Jt,f))}u=b}if(f=!1,u!==2)continue}}if(u===1){ts(e,0),Br(e,t,0,!0);break}e:{switch(o=e,f=u,f){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:Br(o,t,sa,!Dr);break e;case 2:Jt=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(u=Do+300-St(),10<u)){if(Br(o,t,sa,!Dr),K(o,0,!0)!==0)break e;dr=t,o.timeoutHandle=rp(N0.bind(null,o,n,Jt,Lo,hd,t,sa,pn,Qn,Dr,f,"Throttled",-0,0),u);break e}N0(o,n,Jt,Lo,hd,t,sa,pn,Qn,Dr,f,null,-0,0)}}break}while(!0);Ha(e)}function N0(e,t,n,o,u,f,b,w,j,U,Y,V,H,$){if(e.timeoutHandle=-1,V=t.subtreeFlags,V&8192||(V&16785408)===16785408){V={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Fa},y0(t,f,V);var ie=(f&62914560)===f?Do-St():(f&4194048)===f?S0-St():0;if(ie=ty(V,ie),ie!==null){dr=f,e.cancelPendingCommit=ie(M0.bind(null,e,t,f,n,o,u,b,w,j,Y,V,null,H,$)),Br(e,f,b,!U);return}}M0(e,t,f,n,o,u,b,w,j)}function bx(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var o=0;o<n.length;o++){var u=n[o],f=u.getSnapshot;u=u.value;try{if(!ea(f(),u))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Br(e,t,n,o){t&=~ud,t&=~pn,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var u=t;0<u;){var f=31-jt(u),b=1<<f;o[f]=-1,u&=~b}n!==0&&Lt(e,n,t)}function Uo(){return(He&6)===0?(ci(0),!1):!0}function gd(){if(Ce!==null){if(Pe===0)var e=Ce.return;else e=Ce,Qa=nn=null,zc(e),Gn=null,Gs=0,e=Ce;for(;e!==null;)n0(e.alternate,e),e=e.return;Ce=null}}function ts(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Ux(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),dr=0,gd(),Ve=e,Ce=n=Wa(e.current,null),Re=t,Pe=0,na=null,Dr=!1,Zn=W(e,t),dd=!1,Qn=sa=ud=pn=Mr=st=0,Jt=oi=null,hd=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var u=31-jt(o),f=1<<u;t|=e[u],o&=~f}return cr=t,ro(),n}function C0(e,t){_e=null,O.H=Qs,t===Yn||t===ho?(t=Ih(),Pe=3):t===vc?(t=Ih(),Pe=4):Pe=t===Kc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,na=t,Ce===null&&(st=1,Eo(e,ma(t,e.current)))}function T0(){var e=aa.current;return e===null?!0:(Re&4194048)===Re?ya===null:(Re&62914560)===Re||(Re&536870912)!==0?e===ya:!1}function A0(){var e=O.H;return O.H=Qs,e===null?Qs:e}function R0(){var e=O.A;return O.A=mx,e}function Bo(){st=4,Dr||(Re&4194048)!==Re&&aa.current!==null||(Zn=!0),(Mr&134217727)===0&&(pn&134217727)===0||Ve===null||Br(Ve,Re,sa,!1)}function bd(e,t,n){var o=He;He|=2;var u=A0(),f=R0();(Ve!==e||Re!==t)&&(Lo=null,ts(e,t)),t=!1;var b=st;e:do try{if(Pe!==0&&Ce!==null){var w=Ce,j=na;switch(Pe){case 8:gd(),b=6;break e;case 3:case 2:case 9:case 6:aa.current===null&&(t=!0);var U=Pe;if(Pe=0,na=null,as(e,w,j,U),n&&Zn){b=0;break e}break;default:U=Pe,Pe=0,na=null,as(e,w,j,U)}}xx(),b=st;break}catch(Y){C0(e,Y)}while(!0);return t&&e.shellSuspendCounter++,Qa=nn=null,He=o,O.H=u,O.A=f,Ce===null&&(Ve=null,Re=0,ro()),b}function xx(){for(;Ce!==null;)z0(Ce)}function yx(e,t){var n=He;He|=2;var o=A0(),u=R0();Ve!==e||Re!==t?(Lo=null,Mo=St()+500,ts(e,t)):Zn=W(e,t);e:do try{if(Pe!==0&&Ce!==null){t=Ce;var f=na;t:switch(Pe){case 1:Pe=0,na=null,as(e,t,f,1);break;case 2:case 9:if(Ph(f)){Pe=0,na=null,O0(t);break}t=function(){Pe!==2&&Pe!==9||Ve!==e||(Pe=7),Ha(e)},f.then(t,t);break e;case 3:Pe=7;break e;case 4:Pe=5;break e;case 7:Ph(f)?(Pe=0,na=null,O0(t)):(Pe=0,na=null,as(e,t,f,7));break;case 5:var b=null;switch(Ce.tag){case 26:b=Ce.memoizedState;case 5:case 27:var w=Ce;if(b?xp(b):w.stateNode.complete){Pe=0,na=null;var j=w.sibling;if(j!==null)Ce=j;else{var U=w.return;U!==null?(Ce=U,Ho(U)):Ce=null}break t}}Pe=0,na=null,as(e,t,f,5);break;case 6:Pe=0,na=null,as(e,t,f,6);break;case 8:gd(),st=6;break e;default:throw Error(i(462))}}vx();break}catch(Y){C0(e,Y)}while(!0);return Qa=nn=null,O.H=o,O.A=u,He=n,Ce!==null?0:(Ve=null,Re=0,ro(),st)}function vx(){for(;Ce!==null&&!kn();)z0(Ce)}function z0(e){var t=a0(e.alternate,e,cr);e.memoizedProps=e.pendingProps,t===null?Ho(e):Ce=t}function O0(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Jf(n,t,t.pendingProps,t.type,void 0,Re);break;case 11:t=Jf(n,t,t.pendingProps,t.type.render,t.ref,Re);break;case 5:zc(t);default:n0(n,t),t=Ce=Ah(t,cr),t=a0(n,t,cr)}e.memoizedProps=e.pendingProps,t===null?Ho(e):Ce=t}function as(e,t,n,o){Qa=nn=null,zc(t),Gn=null,Gs=0;var u=t.return;try{if(lx(e,u,t,n,Re)){st=1,Eo(e,ma(n,e.current)),Ce=null;return}}catch(f){if(u!==null)throw Ce=u,f;st=1,Eo(e,ma(n,e.current)),Ce=null;return}t.flags&32768?(Oe||o===1?e=!0:Zn||(Re&536870912)!==0?e=!1:(Dr=e=!0,(o===2||o===9||o===3||o===6)&&(o=aa.current,o!==null&&o.tag===13&&(o.flags|=16384))),D0(t,e)):Ho(t)}function Ho(e){var t=e;do{if((t.flags&32768)!==0){D0(t,Dr);return}e=t.return;var n=ux(t.alternate,t,cr);if(n!==null){Ce=n;return}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);st===0&&(st=5)}function D0(e,t){do{var n=hx(e.alternate,e);if(n!==null){n.flags&=32767,Ce=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ce=e;return}Ce=e=n}while(e!==null);st=6,Ce=null}function M0(e,t,n,o,u,f,b,w,j){e.cancelPendingCommit=null;do $o();while(yt!==0);if((He&6)!==0)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(f=t.lanes|t.childLanes,f|=sc,Mt(e,n,f,b,w,j),e===Ve&&(Ce=Ve=null,Re=0),es=t,Ur=e,dr=n,fd=f,pd=u,j0=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,jx(Sa,function(){return $0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=ee.p,ee.p=2,b=He,He|=4;try{fx(e,t,n)}finally{He=b,ee.p=u,O.T=o}}yt=1,L0(),U0(),B0()}}function L0(){if(yt===1){yt=0;var e=Ur,t=es,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=O.T,O.T=null;var o=ee.p;ee.p=2;var u=He;He|=4;try{g0(t,e);var f=Td,b=wh(e.containerInfo),w=f.focusedElem,j=f.selectionRange;if(b!==w&&w&&w.ownerDocument&&vh(w.ownerDocument.documentElement,w)){if(j!==null&&ec(w)){var U=j.start,Y=j.end;if(Y===void 0&&(Y=U),"selectionStart"in w)w.selectionStart=U,w.selectionEnd=Math.min(Y,w.value.length);else{var V=w.ownerDocument||document,H=V&&V.defaultView||window;if(H.getSelection){var $=H.getSelection(),ie=w.textContent.length,ye=Math.min(j.start,ie),Ge=j.end===void 0?ye:Math.min(j.end,ie);!$.extend&&ye>Ge&&(b=Ge,Ge=ye,ye=b);var D=yh(w,ye),R=yh(w,Ge);if(D&&R&&($.rangeCount!==1||$.anchorNode!==D.node||$.anchorOffset!==D.offset||$.focusNode!==R.node||$.focusOffset!==R.offset)){var L=V.createRange();L.setStart(D.node,D.offset),$.removeAllRanges(),ye>Ge?($.addRange(L),$.extend(R.node,R.offset)):(L.setEnd(R.node,R.offset),$.addRange(L))}}}}for(V=[],$=w;$=$.parentNode;)$.nodeType===1&&V.push({element:$,left:$.scrollLeft,top:$.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<V.length;w++){var G=V[w];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}Zo=!!Cd,Td=Cd=null}finally{He=u,ee.p=o,O.T=n}}e.current=t,yt=2}}function U0(){if(yt===2){yt=0;var e=Ur,t=es,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=O.T,O.T=null;var o=ee.p;ee.p=2;var u=He;He|=4;try{u0(e,t.alternate,t)}finally{He=u,ee.p=o,O.T=n}}yt=3}}function B0(){if(yt===4||yt===3){yt=0,Sn();var e=Ur,t=es,n=dr,o=j0;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?yt=5:(yt=0,es=Ur=null,H0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Lr=null),_n(n),t=t.stateNode,xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(Da,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=O.T,u=ee.p,ee.p=2,O.T=null;try{for(var f=e.onRecoverableError,b=0;b<o.length;b++){var w=o[b];f(w.value,{componentStack:w.stack})}}finally{O.T=t,ee.p=u}}(dr&3)!==0&&$o(),Ha(e),u=e.pendingLanes,(n&261930)!==0&&(u&42)!==0?e===md?li++:(li=0,md=e):li=0,ci(0)}}function H0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Is(t)))}function $o(){return L0(),U0(),B0(),$0()}function $0(){if(yt!==5)return!1;var e=Ur,t=fd;fd=0;var n=_n(dr),o=O.T,u=ee.p;try{ee.p=32>n?32:n,O.T=null,n=pd,pd=null;var f=Ur,b=dr;if(yt=0,es=Ur=null,dr=0,(He&6)!==0)throw Error(i(331));var w=He;if(He|=4,w0(f.current),x0(f,f.current,b,n),He=w,ci(0,!1),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(Da,f)}catch{}return!0}finally{ee.p=u,O.T=o,H0(e,t)}}function P0(e,t,n){t=ma(n,t),t=Xc(e.stateNode,t,2),e=Ar(e,t,2),e!==null&&(rt(e,2),Ha(e))}function qe(e,t,n){if(e.tag===3)P0(e,e,n);else for(;t!==null;){if(t.tag===3){P0(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Lr===null||!Lr.has(o))){e=ma(n,e),n=qf(2),o=Ar(t,n,2),o!==null&&(If(n,o,t,e),rt(o,2),Ha(o));break}}t=t.return}}function xd(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new gx;var u=new Set;o.set(t,u)}else u=o.get(t),u===void 0&&(u=new Set,o.set(t,u));u.has(n)||(dd=!0,u.add(n),e=wx.bind(null,e,t,n),t.then(e,e))}function wx(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ve===e&&(Re&n)===n&&(st===4||st===3&&(Re&62914560)===Re&&300>St()-Do?(He&2)===0&&ts(e,0):ud|=n,Qn===Re&&(Qn=0)),Ha(e)}function q0(e,t){t===0&&(t=De()),e=tn(e,t),e!==null&&(rt(e,t),Ha(e))}function kx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),q0(e,n)}function Sx(e,t){var n=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(n=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(i(314))}o!==null&&o.delete(t),q0(e,n)}function jx(e,t){return kt(e,t)}var Po=null,rs=null,yd=!1,qo=!1,vd=!1,Hr=0;function Ha(e){e!==rs&&e.next===null&&(rs===null?Po=rs=e:rs=rs.next=e),qo=!0,yd||(yd=!0,Ex())}function ci(e,t){if(!vd&&qo){vd=!0;do for(var n=!1,o=Po;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var b=o.suspendedLanes,w=o.pingedLanes;f=(1<<31-jt(42|e)+1)-1,f&=u&~(b&~w),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(n=!0,V0(o,f))}else f=Re,f=K(o,o===Ve?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||W(o,f)||(n=!0,V0(o,f));o=o.next}while(n);vd=!1}}function _x(){I0()}function I0(){qo=yd=!1;var e=0;Hr!==0&&Lx()&&(e=Hr);for(var t=St(),n=null,o=Po;o!==null;){var u=o.next,f=Y0(o,t);f===0?(o.next=null,n===null?Po=u:n.next=u,u===null&&(rs=n)):(n=o,(e!==0||(f&3)!==0)&&(qo=!0)),o=u}yt!==0&&yt!==5||ci(e),Hr!==0&&(Hr=0)}function Y0(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var b=31-jt(f),w=1<<b,j=u[b];j===-1?((w&n)===0||(w&o)!==0)&&(u[b]=we(w,t)):j<=t&&(e.expiredLanes|=w),f&=~w}if(t=Ve,n=Re,n=K(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,n===0||e===t&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ya(o),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||W(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(o!==null&&Ya(o),_n(n)){case 2:case 8:n=yr;break;case 32:n=Sa;break;case 268435456:n=Ga;break;default:n=Sa}return o=G0.bind(null,e),n=kt(n,o),e.callbackPriority=t,e.callbackNode=n,t}return o!==null&&o!==null&&Ya(o),e.callbackPriority=2,e.callbackNode=null,2}function G0(e,t){if(yt!==0&&yt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if($o()&&e.callbackNode!==n)return null;var o=Re;return o=K(e,e===Ve?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(E0(e,o,t),Y0(e,St()),e.callbackNode!=null&&e.callbackNode===n?G0.bind(null,e):null)}function V0(e,t){if($o())return null;E0(e,t,!0)}function Ex(){Bx(function(){(He&6)!==0?kt(Fr,_x):I0()})}function wd(){if(Hr===0){var e=qn;e===0&&(e=ja,ja<<=1,(ja&261888)===0&&(ja=256)),Hr=e}return Hr}function X0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Fi(""+e)}function K0(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Nx(e,t,n,o,u){if(t==="submit"&&n&&n.stateNode===u){var f=X0((u[ht]||null).action),b=o.submitter;b&&(t=(t=b[ht]||null)?X0(t.formAction):b.getAttribute("formAction"),t!==null&&(f=t,b=null));var w=new Qi("action","action",null,o,u);e.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Hr!==0){var j=b?K0(u,b):new FormData(u);Pc(n,{pending:!0,data:j,method:u.method,action:f},null,j)}}else typeof f=="function"&&(w.preventDefault(),j=b?K0(u,b):new FormData(u),Pc(n,{pending:!0,data:j,method:u.method,action:f},f,j))},currentTarget:u}]})}}for(var kd=0;kd<nc.length;kd++){var Sd=nc[kd],Cx=Sd.toLowerCase(),Tx=Sd[0].toUpperCase()+Sd.slice(1);_a(Cx,"on"+Tx)}_a(jh,"onAnimationEnd"),_a(_h,"onAnimationIteration"),_a(Eh,"onAnimationStart"),_a("dblclick","onDoubleClick"),_a("focusin","onFocus"),_a("focusout","onBlur"),_a(Gb,"onTransitionRun"),_a(Vb,"onTransitionStart"),_a(Xb,"onTransitionCancel"),_a(Nh,"onTransitionEnd"),Cn("onMouseEnter",["mouseout","mouseover"]),Cn("onMouseLeave",["mouseout","mouseover"]),Cn("onPointerEnter",["pointerout","pointerover"]),Cn("onPointerLeave",["pointerout","pointerover"]),Wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Wr("onBeforeInput",["compositionend","keypress","textInput","paste"]),Wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ax=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(di));function F0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],u=o.event;o=o.listeners;e:{var f=void 0;if(t)for(var b=o.length-1;0<=b;b--){var w=o[b],j=w.instance,U=w.currentTarget;if(w=w.listener,j!==f&&u.isPropagationStopped())break e;f=w,u.currentTarget=U;try{f(u)}catch(Y){ao(Y)}u.currentTarget=null,f=j}else for(b=0;b<o.length;b++){if(w=o[b],j=w.instance,U=w.currentTarget,w=w.listener,j!==f&&u.isPropagationStopped())break e;f=w,u.currentTarget=U;try{f(u)}catch(Y){ao(Y)}u.currentTarget=null,f=j}}}}function Te(e,t){var n=t[As];n===void 0&&(n=t[As]=new Set);var o=e+"__bubble";n.has(o)||(J0(t,e,2,!1),n.add(o))}function jd(e,t,n){var o=0;t&&(o|=4),J0(n,e,o,t)}var Io="_reactListening"+Math.random().toString(36).slice(2);function _d(e){if(!e[Io]){e[Io]=!0,qu.forEach(function(n){n!=="selectionchange"&&(Ax.has(n)||jd(n,!1,e),jd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Io]||(t[Io]=!0,jd("selectionchange",!1,t))}}function J0(e,t,n,o){switch(_p(t)){case 2:var u=ny;break;case 8:u=sy;break;default:u=$d}n=u.bind(null,t,n,e),u=void 0,!Gl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(t,n,{capture:!0,passive:u}):e.addEventListener(t,n,!0):u!==void 0?e.addEventListener(t,n,{passive:u}):e.addEventListener(t,n,!1)}function Ed(e,t,n,o,u){var f=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var b=o.tag;if(b===3||b===4){var w=o.stateNode.containerInfo;if(w===u)break;if(b===4)for(b=o.return;b!==null;){var j=b.tag;if((j===3||j===4)&&b.stateNode.containerInfo===u)return;b=b.return}for(;w!==null;){if(b=Gt(w),b===null)return;if(j=b.tag,j===5||j===6||j===26||j===27){o=f=b;continue e}w=w.parentNode}}o=o.return}eh(function(){var U=f,Y=Il(n),V=[];e:{var H=Ch.get(e);if(H!==void 0){var $=Qi,ie=e;switch(e){case"keypress":if(Wi(n)===0)break e;case"keydown":case"keyup":$=Sb;break;case"focusin":ie="focus",$=Fl;break;case"focusout":ie="blur",$=Fl;break;case"beforeblur":case"afterblur":$=Fl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=rh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=ub;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=Eb;break;case jh:case _h:case Eh:$=pb;break;case Nh:$=Cb;break;case"scroll":case"scrollend":$=cb;break;case"wheel":$=Ab;break;case"copy":case"cut":case"paste":$=gb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=sh;break;case"toggle":case"beforetoggle":$=zb}var ye=(t&4)!==0,Ge=!ye&&(e==="scroll"||e==="scrollend"),D=ye?H!==null?H+"Capture":null:H;ye=[];for(var R=U,L;R!==null;){var G=R;if(L=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||L===null||D===null||(G=zs(R,D),G!=null&&ye.push(ui(R,G,L))),Ge)break;R=R.return}0<ye.length&&(H=new $(H,ie,null,n,Y),V.push({event:H,listeners:ye}))}}if((t&7)===0){e:{if(H=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",H&&n!==ql&&(ie=n.relatedTarget||n.fromElement)&&(Gt(ie)||ie[Xa]))break e;if(($||H)&&(H=Y.window===Y?Y:(H=Y.ownerDocument)?H.defaultView||H.parentWindow:window,$?(ie=n.relatedTarget||n.toElement,$=U,ie=ie?Gt(ie):null,ie!==null&&(Ge=d(ie),ye=ie.tag,ie!==Ge||ye!==5&&ye!==27&&ye!==6)&&(ie=null)):($=null,ie=U),$!==ie)){if(ye=rh,G="onMouseLeave",D="onMouseEnter",R="mouse",(e==="pointerout"||e==="pointerover")&&(ye=sh,G="onPointerLeave",D="onPointerEnter",R="pointer"),Ge=$==null?H:Rs($),L=ie==null?H:Rs(ie),H=new ye(G,R+"leave",$,n,Y),H.target=Ge,H.relatedTarget=L,G=null,Gt(Y)===U&&(ye=new ye(D,R+"enter",ie,n,Y),ye.target=L,ye.relatedTarget=Ge,G=ye),Ge=G,$&&ie)t:{for(ye=Rx,D=$,R=ie,L=0,G=D;G;G=ye(G))L++;G=0;for(var me=R;me;me=ye(me))G++;for(;0<L-G;)D=ye(D),L--;for(;0<G-L;)R=ye(R),G--;for(;L--;){if(D===R||R!==null&&D===R.alternate){ye=D;break t}D=ye(D),R=ye(R)}ye=null}else ye=null;$!==null&&W0(V,H,$,ye,!1),ie!==null&&Ge!==null&&W0(V,Ge,ie,ye,!0)}}e:{if(H=U?Rs(U):window,$=H.nodeName&&H.nodeName.toLowerCase(),$==="select"||$==="input"&&H.type==="file")var Ue=fh;else if(uh(H))if(ph)Ue=qb;else{Ue=$b;var de=Hb}else $=H.nodeName,!$||$.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?U&&Pl(U.elementType)&&(Ue=fh):Ue=Pb;if(Ue&&(Ue=Ue(e,U))){hh(V,Ue,n,Y);break e}de&&de(e,H,U),e==="focusout"&&U&&H.type==="number"&&U.memoizedProps.value!=null&&$l(H,"number",H.value)}switch(de=U?Rs(U):window,e){case"focusin":(uh(de)||de.contentEditable==="true")&&(Dn=de,tc=U,$s=null);break;case"focusout":$s=tc=Dn=null;break;case"mousedown":ac=!0;break;case"contextmenu":case"mouseup":case"dragend":ac=!1,kh(V,n,Y);break;case"selectionchange":if(Yb)break;case"keydown":case"keyup":kh(V,n,Y)}var Ee;if(Wl)e:{switch(e){case"compositionstart":var ze="onCompositionStart";break e;case"compositionend":ze="onCompositionEnd";break e;case"compositionupdate":ze="onCompositionUpdate";break e}ze=void 0}else On?ch(e,n)&&(ze="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ze="onCompositionStart");ze&&(ih&&n.locale!=="ko"&&(On||ze!=="onCompositionStart"?ze==="onCompositionEnd"&&On&&(Ee=th()):(Sr=Y,Vl="value"in Sr?Sr.value:Sr.textContent,On=!0)),de=Yo(U,ze),0<de.length&&(ze=new nh(ze,e,null,n,Y),V.push({event:ze,listeners:de}),Ee?ze.data=Ee:(Ee=dh(n),Ee!==null&&(ze.data=Ee)))),(Ee=Db?Mb(e,n):Lb(e,n))&&(ze=Yo(U,"onBeforeInput"),0<ze.length&&(de=new nh("onBeforeInput","beforeinput",null,n,Y),V.push({event:de,listeners:ze}),de.data=Ee)),Nx(V,e,U,n,Y)}F0(V,t)})}function ui(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yo(e,t){for(var n=t+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=zs(e,n),u!=null&&o.unshift(ui(e,u,f)),u=zs(e,t),u!=null&&o.push(ui(e,u,f))),e.tag===3)return o;e=e.return}return[]}function Rx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function W0(e,t,n,o,u){for(var f=t._reactName,b=[];n!==null&&n!==o;){var w=n,j=w.alternate,U=w.stateNode;if(w=w.tag,j!==null&&j===o)break;w!==5&&w!==26&&w!==27||U===null||(j=U,u?(U=zs(n,f),U!=null&&b.unshift(ui(n,U,j))):u||(U=zs(n,f),U!=null&&b.push(ui(n,U,j)))),n=n.return}b.length!==0&&e.push({event:t,listeners:b})}var zx=/\r\n?/g,Ox=/\u0000|\uFFFD/g;function Z0(e){return(typeof e=="string"?e:""+e).replace(zx,`
`).replace(Ox,"")}function Q0(e,t){return t=Z0(t),Z0(e)===t}function Ye(e,t,n,o,u,f){switch(n){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||An(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&An(e,""+o);break;case"className":Xi(e,"class",o);break;case"tabIndex":Xi(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Xi(e,n,o);break;case"style":Zu(e,o,f);break;case"data":if(t!=="object"){Xi(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(n);break}o=Fi(""+o),e.setAttribute(n,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(n==="formAction"?(t!=="input"&&Ye(e,t,"name",u.name,u,null),Ye(e,t,"formEncType",u.formEncType,u,null),Ye(e,t,"formMethod",u.formMethod,u,null),Ye(e,t,"formTarget",u.formTarget,u,null)):(Ye(e,t,"encType",u.encType,u,null),Ye(e,t,"method",u.method,u,null),Ye(e,t,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(n);break}o=Fi(""+o),e.setAttribute(n,o);break;case"onClick":o!=null&&(e.onclick=Fa);break;case"onScroll":o!=null&&Te("scroll",e);break;case"onScrollEnd":o!=null&&Te("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(i(61));if(n=o.__html,n!=null){if(u.children!=null)throw Error(i(60));e.innerHTML=n}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}n=Fi(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(n,""+o):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":o===!0?e.setAttribute(n,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(n,o):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(n,o):e.removeAttribute(n);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(n):e.setAttribute(n,o);break;case"popover":Te("beforetoggle",e),Te("toggle",e),Vi(e,"popover",o);break;case"xlinkActuate":Ka(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ka(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ka(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ka(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ka(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ka(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ka(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ka(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ka(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Vi(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=ob.get(n)||n,Vi(e,n,o))}}function Nd(e,t,n,o,u,f){switch(n){case"style":Zu(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(i(61));if(n=o.__html,n!=null){if(u.children!=null)throw Error(i(60));e.innerHTML=n}}break;case"children":typeof o=="string"?An(e,o):(typeof o=="number"||typeof o=="bigint")&&An(e,""+o);break;case"onScroll":o!=null&&Te("scroll",e);break;case"onScrollEnd":o!=null&&Te("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Fa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Iu.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(u=n.endsWith("Capture"),t=n.slice(2,u?n.length-7:void 0),f=e[ht]||null,f=f!=null?f[n]:null,typeof f=="function"&&e.removeEventListener(t,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,o,u);break e}n in e?e[n]=o:o===!0?e.setAttribute(n,""):Vi(e,n,o)}}}function Rt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",e),Te("load",e);var o=!1,u=!1,f;for(f in n)if(n.hasOwnProperty(f)){var b=n[f];if(b!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:Ye(e,t,f,b,n,null)}}u&&Ye(e,t,"srcSet",n.srcSet,n,null),o&&Ye(e,t,"src",n.src,n,null);return;case"input":Te("invalid",e);var w=f=b=u=null,j=null,U=null;for(o in n)if(n.hasOwnProperty(o)){var Y=n[o];if(Y!=null)switch(o){case"name":u=Y;break;case"type":b=Y;break;case"checked":j=Y;break;case"defaultChecked":U=Y;break;case"value":f=Y;break;case"defaultValue":w=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(i(137,t));break;default:Ye(e,t,o,Y,n,null)}}Ku(e,f,w,j,U,b,u,!1);return;case"select":Te("invalid",e),o=b=f=null;for(u in n)if(n.hasOwnProperty(u)&&(w=n[u],w!=null))switch(u){case"value":f=w;break;case"defaultValue":b=w;break;case"multiple":o=w;default:Ye(e,t,u,w,n,null)}t=f,n=b,e.multiple=!!o,t!=null?Tn(e,!!o,t,!1):n!=null&&Tn(e,!!o,n,!0);return;case"textarea":Te("invalid",e),f=u=o=null;for(b in n)if(n.hasOwnProperty(b)&&(w=n[b],w!=null))switch(b){case"value":o=w;break;case"defaultValue":u=w;break;case"children":f=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(i(91));break;default:Ye(e,t,b,w,n,null)}Ju(e,o,u,f);return;case"option":for(j in n)if(n.hasOwnProperty(j)&&(o=n[j],o!=null))switch(j){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ye(e,t,j,o,n,null)}return;case"dialog":Te("beforetoggle",e),Te("toggle",e),Te("cancel",e),Te("close",e);break;case"iframe":case"object":Te("load",e);break;case"video":case"audio":for(o=0;o<di.length;o++)Te(di[o],e);break;case"image":Te("error",e),Te("load",e);break;case"details":Te("toggle",e);break;case"embed":case"source":case"link":Te("error",e),Te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in n)if(n.hasOwnProperty(U)&&(o=n[U],o!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:Ye(e,t,U,o,n,null)}return;default:if(Pl(t)){for(Y in n)n.hasOwnProperty(Y)&&(o=n[Y],o!==void 0&&Nd(e,t,Y,o,n,void 0));return}}for(w in n)n.hasOwnProperty(w)&&(o=n[w],o!=null&&Ye(e,t,w,o,n,null))}function Dx(e,t,n,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,b=null,w=null,j=null,U=null,Y=null;for($ in n){var V=n[$];if(n.hasOwnProperty($)&&V!=null)switch($){case"checked":break;case"value":break;case"defaultValue":j=V;default:o.hasOwnProperty($)||Ye(e,t,$,null,o,V)}}for(var H in o){var $=o[H];if(V=n[H],o.hasOwnProperty(H)&&($!=null||V!=null))switch(H){case"type":f=$;break;case"name":u=$;break;case"checked":U=$;break;case"defaultChecked":Y=$;break;case"value":b=$;break;case"defaultValue":w=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(i(137,t));break;default:$!==V&&Ye(e,t,H,$,o,V)}}Hl(e,b,w,j,U,Y,f,u);return;case"select":$=b=w=H=null;for(f in n)if(j=n[f],n.hasOwnProperty(f)&&j!=null)switch(f){case"value":break;case"multiple":$=j;default:o.hasOwnProperty(f)||Ye(e,t,f,null,o,j)}for(u in o)if(f=o[u],j=n[u],o.hasOwnProperty(u)&&(f!=null||j!=null))switch(u){case"value":H=f;break;case"defaultValue":w=f;break;case"multiple":b=f;default:f!==j&&Ye(e,t,u,f,o,j)}t=w,n=b,o=$,H!=null?Tn(e,!!n,H,!1):!!o!=!!n&&(t!=null?Tn(e,!!n,t,!0):Tn(e,!!n,n?[]:"",!1));return;case"textarea":$=H=null;for(w in n)if(u=n[w],n.hasOwnProperty(w)&&u!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Ye(e,t,w,null,o,u)}for(b in o)if(u=o[b],f=n[b],o.hasOwnProperty(b)&&(u!=null||f!=null))switch(b){case"value":H=u;break;case"defaultValue":$=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(i(91));break;default:u!==f&&Ye(e,t,b,u,o,f)}Fu(e,H,$);return;case"option":for(var ie in n)if(H=n[ie],n.hasOwnProperty(ie)&&H!=null&&!o.hasOwnProperty(ie))switch(ie){case"selected":e.selected=!1;break;default:Ye(e,t,ie,null,o,H)}for(j in o)if(H=o[j],$=n[j],o.hasOwnProperty(j)&&H!==$&&(H!=null||$!=null))switch(j){case"selected":e.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:Ye(e,t,j,H,o,$)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ye in n)H=n[ye],n.hasOwnProperty(ye)&&H!=null&&!o.hasOwnProperty(ye)&&Ye(e,t,ye,null,o,H);for(U in o)if(H=o[U],$=n[U],o.hasOwnProperty(U)&&H!==$&&(H!=null||$!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(i(137,t));break;default:Ye(e,t,U,H,o,$)}return;default:if(Pl(t)){for(var Ge in n)H=n[Ge],n.hasOwnProperty(Ge)&&H!==void 0&&!o.hasOwnProperty(Ge)&&Nd(e,t,Ge,void 0,o,H);for(Y in o)H=o[Y],$=n[Y],!o.hasOwnProperty(Y)||H===$||H===void 0&&$===void 0||Nd(e,t,Y,H,o,$);return}}for(var D in n)H=n[D],n.hasOwnProperty(D)&&H!=null&&!o.hasOwnProperty(D)&&Ye(e,t,D,null,o,H);for(V in o)H=o[V],$=n[V],!o.hasOwnProperty(V)||H===$||H==null&&$==null||Ye(e,t,V,H,o,$)}function ep(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Mx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),o=0;o<n.length;o++){var u=n[o],f=u.transferSize,b=u.initiatorType,w=u.duration;if(f&&w&&ep(b)){for(b=0,w=u.responseEnd,o+=1;o<n.length;o++){var j=n[o],U=j.startTime;if(U>w)break;var Y=j.transferSize,V=j.initiatorType;Y&&ep(V)&&(j=j.responseEnd,b+=Y*(j<w?1:(w-U)/(j-U)))}if(--o,t+=8*(f+b)/(u.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Cd=null,Td=null;function Go(e){return e.nodeType===9?e:e.ownerDocument}function tp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ap(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ad(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rd=null;function Lx(){var e=window.event;return e&&e.type==="popstate"?e===Rd?!1:(Rd=e,!0):(Rd=null,!1)}var rp=typeof setTimeout=="function"?setTimeout:void 0,Ux=typeof clearTimeout=="function"?clearTimeout:void 0,np=typeof Promise=="function"?Promise:void 0,Bx=typeof queueMicrotask=="function"?queueMicrotask:typeof np<"u"?function(e){return np.resolve(null).then(e).catch(Hx)}:rp;function Hx(e){setTimeout(function(){throw e})}function $r(e){return e==="head"}function sp(e,t){var n=t,o=0;do{var u=n.nextSibling;if(e.removeChild(n),u&&u.nodeType===8)if(n=u.data,n==="/$"||n==="/&"){if(o===0){e.removeChild(u),os(t);return}o--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")o++;else if(n==="html")hi(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,hi(n);for(var f=n.firstChild;f;){var b=f.nextSibling,w=f.nodeName;f[Yt]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&f.rel.toLowerCase()==="stylesheet"||n.removeChild(f),f=b}}else n==="body"&&hi(e.ownerDocument.body);n=u}while(n);os(t)}function ip(e,t){var n=e;e=0;do{var o=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=o}while(n)}function zd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":zd(n),Ma(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function $x(e,t,n,o){for(;e.nodeType===1;){var u=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Yt])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=va(e.nextSibling),e===null)break}return null}function Px(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=va(e.nextSibling),e===null))return null;return e}function op(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=va(e.nextSibling),e===null))return null;return e}function Od(e){return e.data==="$?"||e.data==="$~"}function Dd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function qx(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var o=function(){t(),n.removeEventListener("DOMContentLoaded",o)};n.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function va(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Md=null;function lp(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return va(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function cp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function dp(e,t,n){switch(t=Go(n),e){case"html":if(e=t.documentElement,!e)throw Error(i(452));return e;case"head":if(e=t.head,!e)throw Error(i(453));return e;case"body":if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function hi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ma(e)}var wa=new Map,up=new Set;function Vo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ur=ee.d;ee.d={f:Ix,r:Yx,D:Gx,C:Vx,L:Xx,m:Kx,X:Jx,S:Fx,M:Wx};function Ix(){var e=ur.f(),t=Uo();return e||t}function Yx(e){var t=En(e);t!==null&&t.tag===5&&t.type==="form"?Cf(t):ur.r(e)}var ns=typeof document>"u"?null:document;function hp(e,t,n){var o=ns;if(o&&typeof t=="string"&&t){var u=fa(t);u='link[rel="'+e+'"][href="'+u+'"]',typeof n=="string"&&(u+='[crossorigin="'+n+'"]'),up.has(u)||(up.add(u),e={rel:e,crossOrigin:n,href:t},o.querySelector(u)===null&&(t=o.createElement("link"),Rt(t,"link",e),_t(t),o.head.appendChild(t)))}}function Gx(e){ur.D(e),hp("dns-prefetch",e,null)}function Vx(e,t){ur.C(e,t),hp("preconnect",e,t)}function Xx(e,t,n){ur.L(e,t,n);var o=ns;if(o&&e&&t){var u='link[rel="preload"][as="'+fa(t)+'"]';t==="image"&&n&&n.imageSrcSet?(u+='[imagesrcset="'+fa(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(u+='[imagesizes="'+fa(n.imageSizes)+'"]')):u+='[href="'+fa(e)+'"]';var f=u;switch(t){case"style":f=ss(e);break;case"script":f=is(e)}wa.has(f)||(e=x({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),wa.set(f,e),o.querySelector(u)!==null||t==="style"&&o.querySelector(fi(f))||t==="script"&&o.querySelector(pi(f))||(t=o.createElement("link"),Rt(t,"link",e),_t(t),o.head.appendChild(t)))}}function Kx(e,t){ur.m(e,t);var n=ns;if(n&&e){var o=t&&typeof t.as=="string"?t.as:"script",u='link[rel="modulepreload"][as="'+fa(o)+'"][href="'+fa(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=is(e)}if(!wa.has(f)&&(e=x({rel:"modulepreload",href:e},t),wa.set(f,e),n.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(pi(f)))return}o=n.createElement("link"),Rt(o,"link",e),_t(o),n.head.appendChild(o)}}}function Fx(e,t,n){ur.S(e,t,n);var o=ns;if(o&&e){var u=Nn(o).hoistableStyles,f=ss(e);t=t||"default";var b=u.get(f);if(!b){var w={loading:0,preload:null};if(b=o.querySelector(fi(f)))w.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":t},n),(n=wa.get(f))&&Ld(e,n);var j=b=o.createElement("link");_t(j),Rt(j,"link",e),j._p=new Promise(function(U,Y){j.onload=U,j.onerror=Y}),j.addEventListener("load",function(){w.loading|=1}),j.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Xo(b,t,o)}b={type:"stylesheet",instance:b,count:1,state:w},u.set(f,b)}}}function Jx(e,t){ur.X(e,t);var n=ns;if(n&&e){var o=Nn(n).hoistableScripts,u=is(e),f=o.get(u);f||(f=n.querySelector(pi(u)),f||(e=x({src:e,async:!0},t),(t=wa.get(u))&&Ud(e,t),f=n.createElement("script"),_t(f),Rt(f,"link",e),n.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Wx(e,t){ur.M(e,t);var n=ns;if(n&&e){var o=Nn(n).hoistableScripts,u=is(e),f=o.get(u);f||(f=n.querySelector(pi(u)),f||(e=x({src:e,async:!0,type:"module"},t),(t=wa.get(u))&&Ud(e,t),f=n.createElement("script"),_t(f),Rt(f,"link",e),n.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function fp(e,t,n,o){var u=(u=ke.current)?Vo(u):null;if(!u)throw Error(i(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ss(n.href),n=Nn(u).hoistableStyles,o=n.get(t),o||(o={type:"style",instance:null,count:0,state:null},n.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ss(n.href);var f=Nn(u).hoistableStyles,b=f.get(e);if(b||(u=u.ownerDocument||u,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,b),(f=u.querySelector(fi(e)))&&!f._p&&(b.instance=f,b.state.loading=5),wa.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},wa.set(e,n),f||Zx(u,e,n,b.state))),t&&o===null)throw Error(i(528,""));return b}if(t&&o!==null)throw Error(i(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=is(n),n=Nn(u).hoistableScripts,o=n.get(t),o||(o={type:"script",instance:null,count:0,state:null},n.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,e))}}function ss(e){return'href="'+fa(e)+'"'}function fi(e){return'link[rel="stylesheet"]['+e+"]"}function pp(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function Zx(e,t,n,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),Rt(t,"link",n),_t(t),e.head.appendChild(t))}function is(e){return'[src="'+fa(e)+'"]'}function pi(e){return"script[async]"+e}function mp(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+fa(n.href)+'"]');if(o)return t.instance=o,_t(o),o;var u=x({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),_t(o),Rt(o,"style",u),Xo(o,n.precedence,e),t.instance=o;case"stylesheet":u=ss(n.href);var f=e.querySelector(fi(u));if(f)return t.state.loading|=4,t.instance=f,_t(f),f;o=pp(n),(u=wa.get(u))&&Ld(o,u),f=(e.ownerDocument||e).createElement("link"),_t(f);var b=f;return b._p=new Promise(function(w,j){b.onload=w,b.onerror=j}),Rt(f,"link",o),t.state.loading|=4,Xo(f,n.precedence,e),t.instance=f;case"script":return f=is(n.src),(u=e.querySelector(pi(f)))?(t.instance=u,_t(u),u):(o=n,(u=wa.get(f))&&(o=x({},n),Ud(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),_t(u),Rt(u,"link",o),e.head.appendChild(u),t.instance=u);case"void":return null;default:throw Error(i(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,Xo(o,n.precedence,e));return t.instance}function Xo(e,t,n){for(var o=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,b=0;b<o.length;b++){var w=o[b];if(w.dataset.precedence===t)f=w;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Ld(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ud(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ko=null;function gp(e,t,n){if(Ko===null){var o=new Map,u=Ko=new Map;u.set(n,o)}else u=Ko,o=u.get(n),o||(o=new Map,u.set(n,o));if(o.has(e))return o;for(o.set(e,null),n=n.getElementsByTagName(e),u=0;u<n.length;u++){var f=n[u];if(!(f[Yt]||f[ut]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var b=f.getAttribute(t)||"";b=e+b;var w=o.get(b);w?w.push(f):o.set(b,[f])}}return o}function bp(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Qx(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function xp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ey(e,t,n,o){if(n.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=ss(o.href),f=t.querySelector(fi(u));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Fo.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=f,_t(f);return}f=t.ownerDocument||t,o=pp(o),(u=wa.get(u))&&Ld(o,u),f=f.createElement("link"),_t(f);var b=f;b._p=new Promise(function(w,j){b.onload=w,b.onerror=j}),Rt(f,"link",o),n.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Fo.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Bd=0;function ty(e,t){return e.stylesheets&&e.count===0&&Wo(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var o=setTimeout(function(){if(e.stylesheets&&Wo(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+t);0<e.imgBytes&&Bd===0&&(Bd=62500*Mx());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Wo(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Bd?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Fo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Jo=null;function Wo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Jo=new Map,t.forEach(ay,e),Jo=null,Fo.call(e))}function ay(e,t){if(!(t.state.loading&4)){var n=Jo.get(e);if(n)var o=n.get(null);else{n=new Map,Jo.set(e,n);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var b=u[f];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(n.set(b.dataset.precedence,b),o=b)}o&&n.set(null,o)}u=t.instance,b=u.getAttribute("data-precedence"),f=n.get(b)||o,f===o&&n.set(null,u),n.set(b,u),this.count++,o=Fo.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),t.state.loading|=4}}var mi={$$typeof:T,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function ry(e,t,n,o,u,f,b,w,j){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ke(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ke(0),this.hiddenUpdates=Ke(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=j,this.incompleteTransitions=new Map}function yp(e,t,n,o,u,f,b,w,j,U,Y,V){return e=new ry(e,t,n,b,j,U,Y,V,w),t=1,f===!0&&(t|=24),f=ta(3,null,null,t),e.current=f,f.stateNode=e,t=bc(),t.refCount++,e.pooledCache=t,t.refCount++,f.memoizedState={element:o,isDehydrated:n,cache:t},wc(f),e}function vp(e){return e?(e=Un,e):Un}function wp(e,t,n,o,u,f){u=vp(u),o.context===null?o.context=u:o.pendingContext=u,o=Tr(t),o.payload={element:n},f=f===void 0?null:f,f!==null&&(o.callback=f),n=Ar(e,o,t),n!==null&&(Wt(n,e,t),Xs(n,e,t))}function kp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Hd(e,t){kp(e,t),(e=e.alternate)&&kp(e,t)}function Sp(e){if(e.tag===13||e.tag===31){var t=tn(e,67108864);t!==null&&Wt(t,e,67108864),Hd(e,67108864)}}function jp(e){if(e.tag===13||e.tag===31){var t=ia();t=vr(t);var n=tn(e,t);n!==null&&Wt(n,e,t),Hd(e,t)}}var Zo=!0;function ny(e,t,n,o){var u=O.T;O.T=null;var f=ee.p;try{ee.p=2,$d(e,t,n,o)}finally{ee.p=f,O.T=u}}function sy(e,t,n,o){var u=O.T;O.T=null;var f=ee.p;try{ee.p=8,$d(e,t,n,o)}finally{ee.p=f,O.T=u}}function $d(e,t,n,o){if(Zo){var u=Pd(o);if(u===null)Ed(e,t,o,Qo,n),Ep(e,o);else if(oy(u,e,t,n,o))o.stopPropagation();else if(Ep(e,o),t&4&&-1<iy.indexOf(e)){for(;u!==null;){var f=En(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var b=Xe(f.pendingLanes);if(b!==0){var w=f;for(w.pendingLanes|=2,w.entangledLanes|=2;b;){var j=1<<31-jt(b);w.entanglements[1]|=j,b&=~j}Ha(f),(He&6)===0&&(Mo=St()+500,ci(0))}}break;case 31:case 13:w=tn(f,2),w!==null&&Wt(w,f,2),Uo(),Hd(f,2)}if(f=Pd(o),f===null&&Ed(e,t,o,Qo,n),f===u)break;u=f}u!==null&&o.stopPropagation()}else Ed(e,t,o,null,n)}}function Pd(e){return e=Il(e),qd(e)}var Qo=null;function qd(e){if(Qo=null,e=Gt(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===31){if(e=p(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Qo=e,null}function _p(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Cs()){case Fr:return 2;case yr:return 8;case Sa:case da:return 32;case Ga:return 268435456;default:return 32}default:return 32}}var Id=!1,Pr=null,qr=null,Ir=null,gi=new Map,bi=new Map,Yr=[],iy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ep(e,t){switch(e){case"focusin":case"focusout":Pr=null;break;case"dragenter":case"dragleave":qr=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":gi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bi.delete(t.pointerId)}}function xi(e,t,n,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},t!==null&&(t=En(t),t!==null&&Sp(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),e)}function oy(e,t,n,o,u){switch(t){case"focusin":return Pr=xi(Pr,e,t,n,o,u),!0;case"dragenter":return qr=xi(qr,e,t,n,o,u),!0;case"mouseover":return Ir=xi(Ir,e,t,n,o,u),!0;case"pointerover":var f=u.pointerId;return gi.set(f,xi(gi.get(f)||null,e,t,n,o,u)),!0;case"gotpointercapture":return f=u.pointerId,bi.set(f,xi(bi.get(f)||null,e,t,n,o,u)),!0}return!1}function Np(e){var t=Gt(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,Ts(e.priority,function(){jp(n)});return}}else if(t===31){if(t=p(n),t!==null){e.blockedOn=t,Ts(e.priority,function(){jp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function el(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Pd(e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);ql=o,n.target.dispatchEvent(o),ql=null}else return t=En(n),t!==null&&Sp(t),e.blockedOn=n,!1;t.shift()}return!0}function Cp(e,t,n){el(e)&&n.delete(t)}function ly(){Id=!1,Pr!==null&&el(Pr)&&(Pr=null),qr!==null&&el(qr)&&(qr=null),Ir!==null&&el(Ir)&&(Ir=null),gi.forEach(Cp),bi.forEach(Cp)}function tl(e,t){e.blockedOn===t&&(e.blockedOn=null,Id||(Id=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,ly)))}var al=null;function Tp(e){al!==e&&(al=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){al===e&&(al=null);for(var t=0;t<e.length;t+=3){var n=e[t],o=e[t+1],u=e[t+2];if(typeof o!="function"){if(qd(o||n)===null)continue;break}var f=En(n);f!==null&&(e.splice(t,3),t-=3,Pc(f,{pending:!0,data:u,method:n.method,action:o},o,u))}}))}function os(e){function t(j){return tl(j,e)}Pr!==null&&tl(Pr,e),qr!==null&&tl(qr,e),Ir!==null&&tl(Ir,e),gi.forEach(t),bi.forEach(t);for(var n=0;n<Yr.length;n++){var o=Yr[n];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Yr.length&&(n=Yr[0],n.blockedOn===null);)Np(n),n.blockedOn===null&&Yr.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(o=0;o<n.length;o+=3){var u=n[o],f=n[o+1],b=u[ht]||null;if(typeof f=="function")b||Tp(n);else if(b){var w=null;if(f&&f.hasAttribute("formAction")){if(u=f,b=f[ht]||null)w=b.formAction;else if(qd(u)!==null)continue}else w=b.action;typeof w=="function"?n[o+1]=w:(n.splice(o,3),o-=3),Tp(n)}}}function Ap(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(b){return u=b})},focusReset:"manual",scroll:"manual"})}function t(){u!==null&&(u(),u=null),o||setTimeout(n,20)}function n(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),u!==null&&(u(),u=null)}}}function Yd(e){this._internalRoot=e}rl.prototype.render=Yd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current,o=ia();wp(n,o,e,t,null,null)},rl.prototype.unmount=Yd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wp(e.current,2,null,e,null,null),Uo(),t[Xa]=null}};function rl(e){this._internalRoot=e}rl.prototype.unstable_scheduleHydration=function(e){if(e){var t=wr();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Yr.length&&t!==0&&t<Yr[n].priority;n++);Yr.splice(n,0,e),n===0&&Np(e)}};var Rp=a.version;if(Rp!=="19.2.0")throw Error(i(527,Rp,"19.2.0"));ee.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=g(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var cy={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{Da=nl.inject(cy),xt=nl}catch{}}return vi.createRoot=function(e,t){if(!c(e))throw Error(i(299));var n=!1,o="",u=Bf,f=Hf,b=$f;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(u=t.onUncaughtError),t.onCaughtError!==void 0&&(f=t.onCaughtError),t.onRecoverableError!==void 0&&(b=t.onRecoverableError)),t=yp(e,1,!1,null,null,n,o,null,u,f,b,Ap),e[Xa]=t.current,_d(e),new Yd(t)},vi.hydrateRoot=function(e,t,n){if(!c(e))throw Error(i(299));var o=!1,u="",f=Bf,b=Hf,w=$f,j=null;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(u=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(b=n.onCaughtError),n.onRecoverableError!==void 0&&(w=n.onRecoverableError),n.formState!==void 0&&(j=n.formState)),t=yp(e,1,!0,t,n??null,o,u,j,f,b,w,Ap),t.context=vp(null),n=t.current,o=ia(),o=vr(o),u=Tr(o),u.callback=null,Ar(n,u,o),n=o,t.current.lanes=n,rt(t,n),Ha(t),e[Xa]=t.current,_d(e),new rl(t)},vi.version="19.2.0",vi}var Pp;function xy(){if(Pp)return Xd.exports;Pp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(a){console.error(a)}}return r(),Xd.exports=by(),Xd.exports}var yy=xy();const vy=Cu(yy);/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var qp="popstate";function wy(r={}){function a(i,c){let{pathname:d,search:h,hash:p}=i.location;return du("",{pathname:d,search:h,hash:p},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function s(i,c){return typeof c=="string"?c:Ai(c)}return Sy(a,s,null,r)}function at(r,a){if(r===!1||r===null||typeof r>"u")throw new Error(a)}function Oa(r,a){if(!r){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function ky(){return Math.random().toString(36).substring(2,10)}function Ip(r,a){return{usr:r.state,key:r.key,idx:a}}function du(r,a,s=null,i){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof a=="string"?ks(a):a,state:s,key:a&&a.key||i||ky()}}function Ai({pathname:r="/",search:a="",hash:s=""}){return a&&a!=="?"&&(r+=a.charAt(0)==="?"?a:"?"+a),s&&s!=="#"&&(r+=s.charAt(0)==="#"?s:"#"+s),r}function ks(r){let a={};if(r){let s=r.indexOf("#");s>=0&&(a.hash=r.substring(s),r=r.substring(0,s));let i=r.indexOf("?");i>=0&&(a.search=r.substring(i),r=r.substring(0,i)),r&&(a.pathname=r)}return a}function Sy(r,a,s,i={}){let{window:c=document.defaultView,v5Compat:d=!1}=i,h=c.history,p="POP",m=null,g=y();g==null&&(g=0,h.replaceState({...h.state,idx:g},""));function y(){return(h.state||{idx:null}).idx}function x(){p="POP";let E=y(),B=E==null?null:E-g;g=E,m&&m({action:p,location:C.location,delta:B})}function k(E,B){p="PUSH";let M=du(C.location,E,B);g=y()+1;let T=Ip(M,g),I=C.createHref(M);try{h.pushState(T,"",I)}catch(X){if(X instanceof DOMException&&X.name==="DataCloneError")throw X;c.location.assign(I)}d&&m&&m({action:p,location:C.location,delta:1})}function S(E,B){p="REPLACE";let M=du(C.location,E,B);g=y();let T=Ip(M,g),I=C.createHref(M);h.replaceState(T,"",I),d&&m&&m({action:p,location:C.location,delta:0})}function N(E){return jy(E)}let C={get action(){return p},get location(){return r(c,h)},listen(E){if(m)throw new Error("A history only accepts one active listener");return c.addEventListener(qp,x),m=E,()=>{c.removeEventListener(qp,x),m=null}},createHref(E){return a(c,E)},createURL:N,encodeLocation(E){let B=N(E);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:k,replace:S,go(E){return h.go(E)}};return C}function jy(r,a=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),at(s,"No window.location.(origin|href) available to create URL");let i=typeof r=="string"?r:Ai(r);return i=i.replace(/ $/,"%20"),!a&&i.startsWith("//")&&(i=s+i),new URL(i,s)}function tg(r,a,s="/"){return _y(r,a,s,!1)}function _y(r,a,s,i){let c=typeof a=="string"?ks(a):a,d=gr(c.pathname||"/",s);if(d==null)return null;let h=ag(r);Ey(h);let p=null;for(let m=0;p==null&&m<h.length;++m){let g=Uy(d);p=My(h[m],g,i)}return p}function ag(r,a=[],s=[],i="",c=!1){let d=(h,p,m=c,g)=>{let y={relativePath:g===void 0?h.path||"":g,caseSensitive:h.caseSensitive===!0,childrenIndex:p,route:h};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(i)&&m)return;at(y.relativePath.startsWith(i),`Absolute route path "${y.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(i.length)}let x=mr([i,y.relativePath]),k=s.concat(y);h.children&&h.children.length>0&&(at(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),ag(h.children,a,k,x,m)),!(h.path==null&&!h.index)&&a.push({path:x,score:Oy(x,h.index),routesMeta:k})};return r.forEach((h,p)=>{if(h.path===""||!h.path?.includes("?"))d(h,p);else for(let m of rg(h.path))d(h,p,!0,m)}),a}function rg(r){let a=r.split("/");if(a.length===0)return[];let[s,...i]=a,c=s.endsWith("?"),d=s.replace(/\?$/,"");if(i.length===0)return c?[d,""]:[d];let h=rg(i.join("/")),p=[];return p.push(...h.map(m=>m===""?d:[d,m].join("/"))),c&&p.push(...h),p.map(m=>r.startsWith("/")&&m===""?"/":m)}function Ey(r){r.sort((a,s)=>a.score!==s.score?s.score-a.score:Dy(a.routesMeta.map(i=>i.childrenIndex),s.routesMeta.map(i=>i.childrenIndex)))}var Ny=/^:[\w-]+$/,Cy=3,Ty=2,Ay=1,Ry=10,zy=-2,Yp=r=>r==="*";function Oy(r,a){let s=r.split("/"),i=s.length;return s.some(Yp)&&(i+=zy),a&&(i+=Ty),s.filter(c=>!Yp(c)).reduce((c,d)=>c+(Ny.test(d)?Cy:d===""?Ay:Ry),i)}function Dy(r,a){return r.length===a.length&&r.slice(0,-1).every((i,c)=>i===a[c])?r[r.length-1]-a[a.length-1]:0}function My(r,a,s=!1){let{routesMeta:i}=r,c={},d="/",h=[];for(let p=0;p<i.length;++p){let m=i[p],g=p===i.length-1,y=d==="/"?a:a.slice(d.length)||"/",x=xl({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},y),k=m.route;if(!x&&g&&s&&!i[i.length-1].route.index&&(x=xl({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},y)),!x)return null;Object.assign(c,x.params),h.push({params:c,pathname:mr([d,x.pathname]),pathnameBase:Py(mr([d,x.pathnameBase])),route:k}),x.pathnameBase!=="/"&&(d=mr([d,x.pathnameBase]))}return h}function xl(r,a){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[s,i]=Ly(r.path,r.caseSensitive,r.end),c=a.match(s);if(!c)return null;let d=c[0],h=d.replace(/(.)\/+$/,"$1"),p=c.slice(1);return{params:i.reduce((g,{paramName:y,isOptional:x},k)=>{if(y==="*"){let N=p[k]||"";h=d.slice(0,d.length-N.length).replace(/(.)\/+$/,"$1")}const S=p[k];return x&&!S?g[y]=void 0:g[y]=(S||"").replace(/%2F/g,"/"),g},{}),pathname:d,pathnameBase:h,pattern:r}}function Ly(r,a=!1,s=!0){Oa(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let i=[],c="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,p,m)=>(i.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(i.push({paramName:"*"}),c+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?c+="\\/*$":r!==""&&r!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,a?void 0:"i"),i]}function Uy(r){try{return r.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return Oa(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),r}}function gr(r,a){if(a==="/")return r;if(!r.toLowerCase().startsWith(a.toLowerCase()))return null;let s=a.endsWith("/")?a.length-1:a.length,i=r.charAt(s);return i&&i!=="/"?null:r.slice(s)||"/"}function By(r,a="/"){let{pathname:s,search:i="",hash:c=""}=typeof r=="string"?ks(r):r;return{pathname:s?s.startsWith("/")?s:Hy(s,a):a,search:qy(i),hash:Iy(c)}}function Hy(r,a){let s=a.replace(/\/+$/,"").split("/");return r.split("/").forEach(c=>{c===".."?s.length>1&&s.pop():c!=="."&&s.push(c)}),s.length>1?s.join("/"):"/"}function Wd(r,a,s,i){return`Cannot include a '${r}' character in a manually specified \`to.${a}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function $y(r){return r.filter((a,s)=>s===0||a.route.path&&a.route.path.length>0)}function ng(r){let a=$y(r);return a.map((s,i)=>i===a.length-1?s.pathname:s.pathnameBase)}function sg(r,a,s,i=!1){let c;typeof r=="string"?c=ks(r):(c={...r},at(!c.pathname||!c.pathname.includes("?"),Wd("?","pathname","search",c)),at(!c.pathname||!c.pathname.includes("#"),Wd("#","pathname","hash",c)),at(!c.search||!c.search.includes("#"),Wd("#","search","hash",c)));let d=r===""||c.pathname==="",h=d?"/":c.pathname,p;if(h==null)p=s;else{let x=a.length-1;if(!i&&h.startsWith("..")){let k=h.split("/");for(;k[0]==="..";)k.shift(),x-=1;c.pathname=k.join("/")}p=x>=0?a[x]:"/"}let m=By(c,p),g=h&&h!=="/"&&h.endsWith("/"),y=(d||h===".")&&s.endsWith("/");return!m.pathname.endsWith("/")&&(g||y)&&(m.pathname+="/"),m}var mr=r=>r.join("/").replace(/\/\/+/g,"/"),Py=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),qy=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Iy=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function Yy(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var ig=["POST","PUT","PATCH","DELETE"];new Set(ig);var Gy=["GET",...ig];new Set(Gy);var Ss=v.createContext(null);Ss.displayName="DataRouter";var El=v.createContext(null);El.displayName="DataRouterState";v.createContext(!1);var og=v.createContext({isTransitioning:!1});og.displayName="ViewTransition";var Vy=v.createContext(new Map);Vy.displayName="Fetchers";var Xy=v.createContext(null);Xy.displayName="Await";var Ia=v.createContext(null);Ia.displayName="Navigation";var js=v.createContext(null);js.displayName="Location";var br=v.createContext({outlet:null,matches:[],isDataRoute:!1});br.displayName="Route";var Ru=v.createContext(null);Ru.displayName="RouteError";function Ky(r,{relative:a}={}){at(Pi(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:i}=v.useContext(Ia),{hash:c,pathname:d,search:h}=qi(r,{relative:a}),p=d;return s!=="/"&&(p=d==="/"?s:mr([s,d])),i.createHref({pathname:p,search:h,hash:c})}function Pi(){return v.useContext(js)!=null}function ca(){return at(Pi(),"useLocation() may be used only in the context of a <Router> component."),v.useContext(js).location}function Fy(){return v.useContext(js).navigationType}var lg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function cg(r){v.useContext(Ia).static||v.useLayoutEffect(r)}function _s(){let{isDataRoute:r}=v.useContext(br);return r?l2():Jy()}function Jy(){at(Pi(),"useNavigate() may be used only in the context of a <Router> component.");let r=v.useContext(Ss),{basename:a,navigator:s}=v.useContext(Ia),{matches:i}=v.useContext(br),{pathname:c}=ca(),d=JSON.stringify(ng(i)),h=v.useRef(!1);return cg(()=>{h.current=!0}),v.useCallback((m,g={})=>{if(Oa(h.current,lg),!h.current)return;if(typeof m=="number"){s.go(m);return}let y=sg(m,JSON.parse(d),c,g.relative==="path");r==null&&a!=="/"&&(y.pathname=y.pathname==="/"?a:mr([a,y.pathname])),(g.replace?s.replace:s.push)(y,g.state,g)},[a,s,d,c,r])}v.createContext(null);function qi(r,{relative:a}={}){let{matches:s}=v.useContext(br),{pathname:i}=ca(),c=JSON.stringify(ng(s));return v.useMemo(()=>sg(r,JSON.parse(c),i,a==="path"),[r,c,i,a])}function Wy(r,a){return dg(r,a)}function dg(r,a,s,i,c){at(Pi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=v.useContext(Ia),{matches:h}=v.useContext(br),p=h[h.length-1],m=p?p.params:{},g=p?p.pathname:"/",y=p?p.pathnameBase:"/",x=p&&p.route;{let M=x&&x.path||"";ug(g,!x||M.endsWith("*")||M.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M==="/"?"*":`${M}/*`}">.`)}let k=ca(),S;if(a){let M=typeof a=="string"?ks(a):a;at(y==="/"||M.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${M.pathname}" was given in the \`location\` prop.`),S=M}else S=k;let N=S.pathname||"/",C=N;if(y!=="/"){let M=y.replace(/^\//,"").split("/");C="/"+N.replace(/^\//,"").split("/").slice(M.length).join("/")}let E=tg(r,{pathname:C});Oa(x||E!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Oa(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let B=a2(E&&E.map(M=>Object.assign({},M,{params:Object.assign({},m,M.params),pathname:mr([y,d.encodeLocation?d.encodeLocation(M.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?y:mr([y,d.encodeLocation?d.encodeLocation(M.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:M.pathnameBase])})),h,s,i,c);return a&&B?v.createElement(js.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},B):B}function Zy(){let r=o2(),a=Yy(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),s=r instanceof Error?r.stack:null,i="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:i},d={padding:"2px 4px",backgroundColor:i},h=null;return console.error("Error handled by React Router default ErrorBoundary:",r),h=v.createElement(v.Fragment,null,v.createElement("p",null,"💿 Hey developer 👋"),v.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",v.createElement("code",{style:d},"ErrorBoundary")," or"," ",v.createElement("code",{style:d},"errorElement")," prop on your route.")),v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},a),s?v.createElement("pre",{style:c},s):null,h)}var Qy=v.createElement(Zy,null),e2=class extends v.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,a){return a.location!==r.location||a.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:a.error,location:a.location,revalidation:r.revalidation||a.revalidation}}componentDidCatch(r,a){this.props.unstable_onError?this.props.unstable_onError(r,a):console.error("React Router caught the following error during render",r)}render(){return this.state.error!==void 0?v.createElement(br.Provider,{value:this.props.routeContext},v.createElement(Ru.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function t2({routeContext:r,match:a,children:s}){let i=v.useContext(Ss);return i&&i.static&&i.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=a.route.id),v.createElement(br.Provider,{value:r},s)}function a2(r,a=[],s=null,i=null,c=null){if(r==null){if(!s)return null;if(s.errors)r=s.matches;else if(a.length===0&&!s.initialized&&s.matches.length>0)r=s.matches;else return null}let d=r,h=s?.errors;if(h!=null){let g=d.findIndex(y=>y.route.id&&h?.[y.route.id]!==void 0);at(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),d=d.slice(0,Math.min(d.length,g+1))}let p=!1,m=-1;if(s)for(let g=0;g<d.length;g++){let y=d[g];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(m=g),y.route.id){let{loaderData:x,errors:k}=s,S=y.route.loader&&!x.hasOwnProperty(y.route.id)&&(!k||k[y.route.id]===void 0);if(y.route.lazy||S){p=!0,m>=0?d=d.slice(0,m+1):d=[d[0]];break}}}return d.reduceRight((g,y,x)=>{let k,S=!1,N=null,C=null;s&&(k=h&&y.route.id?h[y.route.id]:void 0,N=y.route.errorElement||Qy,p&&(m<0&&x===0?(ug("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,C=null):m===x&&(S=!0,C=y.route.hydrateFallbackElement||null)));let E=a.concat(d.slice(0,x+1)),B=()=>{let M;return k?M=N:S?M=C:y.route.Component?M=v.createElement(y.route.Component,null):y.route.element?M=y.route.element:M=g,v.createElement(t2,{match:y,routeContext:{outlet:g,matches:E,isDataRoute:s!=null},children:M})};return s&&(y.route.ErrorBoundary||y.route.errorElement||x===0)?v.createElement(e2,{location:s.location,revalidation:s.revalidation,component:N,error:k,children:B(),routeContext:{outlet:null,matches:E,isDataRoute:!0},unstable_onError:i}):B()},null)}function zu(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function r2(r){let a=v.useContext(Ss);return at(a,zu(r)),a}function n2(r){let a=v.useContext(El);return at(a,zu(r)),a}function s2(r){let a=v.useContext(br);return at(a,zu(r)),a}function Ou(r){let a=s2(r),s=a.matches[a.matches.length-1];return at(s.route.id,`${r} can only be used on routes that contain a unique "id"`),s.route.id}function i2(){return Ou("useRouteId")}function o2(){let r=v.useContext(Ru),a=n2("useRouteError"),s=Ou("useRouteError");return r!==void 0?r:a.errors?.[s]}function l2(){let{router:r}=r2("useNavigate"),a=Ou("useNavigate"),s=v.useRef(!1);return cg(()=>{s.current=!0}),v.useCallback(async(c,d={})=>{Oa(s.current,lg),s.current&&(typeof c=="number"?r.navigate(c):await r.navigate(c,{fromRouteId:a,...d}))},[r,a])}var Gp={};function ug(r,a,s){!a&&!Gp[r]&&(Gp[r]=!0,Oa(!1,s))}v.memo(c2);function c2({routes:r,future:a,state:s,unstable_onError:i}){return dg(r,void 0,s,i,a)}function Ht(r){at(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function d2({basename:r="/",children:a=null,location:s,navigationType:i="POP",navigator:c,static:d=!1}){at(!Pi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=r.replace(/^\/*/,"/"),p=v.useMemo(()=>({basename:h,navigator:c,static:d,future:{}}),[h,c,d]);typeof s=="string"&&(s=ks(s));let{pathname:m="/",search:g="",hash:y="",state:x=null,key:k="default"}=s,S=v.useMemo(()=>{let N=gr(m,h);return N==null?null:{location:{pathname:N,search:g,hash:y,state:x,key:k},navigationType:i}},[h,m,g,y,x,k,i]);return Oa(S!=null,`<Router basename="${h}"> is not able to match the URL "${m}${g}${y}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:v.createElement(Ia.Provider,{value:p},v.createElement(js.Provider,{children:a,value:S}))}function u2({children:r,location:a}){return Wy(uu(r),a)}function uu(r,a=[]){let s=[];return v.Children.forEach(r,(i,c)=>{if(!v.isValidElement(i))return;let d=[...a,c];if(i.type===v.Fragment){s.push.apply(s,uu(i.props.children,d));return}at(i.type===Ht,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),at(!i.props.index||!i.props.children,"An index route cannot have child routes.");let h={id:i.props.id||d.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,middleware:i.props.middleware,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(h.children=uu(i.props.children,d)),s.push(h)}),s}var ml="get",gl="application/x-www-form-urlencoded";function Nl(r){return r!=null&&typeof r.tagName=="string"}function h2(r){return Nl(r)&&r.tagName.toLowerCase()==="button"}function f2(r){return Nl(r)&&r.tagName.toLowerCase()==="form"}function p2(r){return Nl(r)&&r.tagName.toLowerCase()==="input"}function m2(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function g2(r,a){return r.button===0&&(!a||a==="_self")&&!m2(r)}function hu(r=""){return new URLSearchParams(typeof r=="string"||Array.isArray(r)||r instanceof URLSearchParams?r:Object.keys(r).reduce((a,s)=>{let i=r[s];return a.concat(Array.isArray(i)?i.map(c=>[s,c]):[[s,i]])},[]))}function b2(r,a){let s=hu(r);return a&&a.forEach((i,c)=>{s.has(c)||a.getAll(c).forEach(d=>{s.append(c,d)})}),s}var sl=null;function x2(){if(sl===null)try{new FormData(document.createElement("form"),0),sl=!1}catch{sl=!0}return sl}var y2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Zd(r){return r!=null&&!y2.has(r)?(Oa(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${gl}"`),null):r}function v2(r,a){let s,i,c,d,h;if(f2(r)){let p=r.getAttribute("action");i=p?gr(p,a):null,s=r.getAttribute("method")||ml,c=Zd(r.getAttribute("enctype"))||gl,d=new FormData(r)}else if(h2(r)||p2(r)&&(r.type==="submit"||r.type==="image")){let p=r.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||p.getAttribute("action");if(i=m?gr(m,a):null,s=r.getAttribute("formmethod")||p.getAttribute("method")||ml,c=Zd(r.getAttribute("formenctype"))||Zd(p.getAttribute("enctype"))||gl,d=new FormData(p,r),!x2()){let{name:g,type:y,value:x}=r;if(y==="image"){let k=g?`${g}.`:"";d.append(`${k}x`,"0"),d.append(`${k}y`,"0")}else g&&d.append(g,x)}}else{if(Nl(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=ml,i=null,c=gl,h=r}return d&&c==="text/plain"&&(h=d,d=void 0),{action:i,method:s.toLowerCase(),encType:c,formData:d,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Du(r,a){if(r===!1||r===null||typeof r>"u")throw new Error(a)}function w2(r,a,s){let i=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return i.pathname==="/"?i.pathname=`_root.${s}`:a&&gr(i.pathname,a)==="/"?i.pathname=`${a.replace(/\/$/,"")}/_root.${s}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${s}`,i}async function k2(r,a){if(r.id in a)return a[r.id];try{let s=await import(r.module);return a[r.id]=s,s}catch(s){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function S2(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function j2(r,a,s){let i=await Promise.all(r.map(async c=>{let d=a.routes[c.route.id];if(d){let h=await k2(d,s);return h.links?h.links():[]}return[]}));return C2(i.flat(1).filter(S2).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function Vp(r,a,s,i,c,d){let h=(m,g)=>s[g]?m.route.id!==s[g].route.id:!0,p=(m,g)=>s[g].pathname!==m.pathname||s[g].route.path?.endsWith("*")&&s[g].params["*"]!==m.params["*"];return d==="assets"?a.filter((m,g)=>h(m,g)||p(m,g)):d==="data"?a.filter((m,g)=>{let y=i.routes[m.route.id];if(!y||!y.hasLoader)return!1;if(h(m,g)||p(m,g))return!0;if(m.route.shouldRevalidate){let x=m.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:s[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function _2(r,a,{includeHydrateFallback:s}={}){return E2(r.map(i=>{let c=a.routes[i.route.id];if(!c)return[];let d=[c.module];return c.clientActionModule&&(d=d.concat(c.clientActionModule)),c.clientLoaderModule&&(d=d.concat(c.clientLoaderModule)),s&&c.hydrateFallbackModule&&(d=d.concat(c.hydrateFallbackModule)),c.imports&&(d=d.concat(c.imports)),d}).flat(1))}function E2(r){return[...new Set(r)]}function N2(r){let a={},s=Object.keys(r).sort();for(let i of s)a[i]=r[i];return a}function C2(r,a){let s=new Set;return new Set(a),r.reduce((i,c)=>{let d=JSON.stringify(N2(c));return s.has(d)||(s.add(d),i.push({key:d,link:c})),i},[])}function hg(){let r=v.useContext(Ss);return Du(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function T2(){let r=v.useContext(El);return Du(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Mu=v.createContext(void 0);Mu.displayName="FrameworkContext";function fg(){let r=v.useContext(Mu);return Du(r,"You must render this element inside a <HydratedRouter> element"),r}function A2(r,a){let s=v.useContext(Mu),[i,c]=v.useState(!1),[d,h]=v.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:g,onMouseLeave:y,onTouchStart:x}=a,k=v.useRef(null);v.useEffect(()=>{if(r==="render"&&h(!0),r==="viewport"){let C=B=>{B.forEach(M=>{h(M.isIntersecting)})},E=new IntersectionObserver(C,{threshold:.5});return k.current&&E.observe(k.current),()=>{E.disconnect()}}},[r]),v.useEffect(()=>{if(i){let C=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(C)}}},[i]);let S=()=>{c(!0)},N=()=>{c(!1),h(!1)};return s?r!=="intent"?[d,k,{}]:[d,k,{onFocus:wi(p,S),onBlur:wi(m,N),onMouseEnter:wi(g,S),onMouseLeave:wi(y,N),onTouchStart:wi(x,S)}]:[!1,k,{}]}function wi(r,a){return s=>{r&&r(s),s.defaultPrevented||a(s)}}function R2({page:r,...a}){let{router:s}=hg(),i=v.useMemo(()=>tg(s.routes,r,s.basename),[s.routes,r,s.basename]);return i?v.createElement(O2,{page:r,matches:i,...a}):null}function z2(r){let{manifest:a,routeModules:s}=fg(),[i,c]=v.useState([]);return v.useEffect(()=>{let d=!1;return j2(r,a,s).then(h=>{d||c(h)}),()=>{d=!0}},[r,a,s]),i}function O2({page:r,matches:a,...s}){let i=ca(),{manifest:c,routeModules:d}=fg(),{basename:h}=hg(),{loaderData:p,matches:m}=T2(),g=v.useMemo(()=>Vp(r,a,m,c,i,"data"),[r,a,m,c,i]),y=v.useMemo(()=>Vp(r,a,m,c,i,"assets"),[r,a,m,c,i]),x=v.useMemo(()=>{if(r===i.pathname+i.search+i.hash)return[];let N=new Set,C=!1;if(a.forEach(B=>{let M=c.routes[B.route.id];!M||!M.hasLoader||(!g.some(T=>T.route.id===B.route.id)&&B.route.id in p&&d[B.route.id]?.shouldRevalidate||M.hasClientLoader?C=!0:N.add(B.route.id))}),N.size===0)return[];let E=w2(r,h,"data");return C&&N.size>0&&E.searchParams.set("_routes",a.filter(B=>N.has(B.route.id)).map(B=>B.route.id).join(",")),[E.pathname+E.search]},[h,p,i,c,g,a,r,d]),k=v.useMemo(()=>_2(y,c),[y,c]),S=z2(y);return v.createElement(v.Fragment,null,x.map(N=>v.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...s})),k.map(N=>v.createElement("link",{key:N,rel:"modulepreload",href:N,...s})),S.map(({key:N,link:C})=>v.createElement("link",{key:N,nonce:s.nonce,...C})))}function D2(...r){return a=>{r.forEach(s=>{typeof s=="function"?s(a):s!=null&&(s.current=a)})}}var pg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{pg&&(window.__reactRouterVersion="7.9.4")}catch{}function M2({basename:r,children:a,window:s}){let i=v.useRef();i.current==null&&(i.current=wy({window:s,v5Compat:!0}));let c=i.current,[d,h]=v.useState({action:c.action,location:c.location}),p=v.useCallback(m=>{v.startTransition(()=>h(m))},[h]);return v.useLayoutEffect(()=>c.listen(p),[c,p]),v.createElement(d2,{basename:r,children:a,location:d.location,navigationType:d.action,navigator:c})}var mg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tt=v.forwardRef(function({onClick:a,discover:s="render",prefetch:i="none",relative:c,reloadDocument:d,replace:h,state:p,target:m,to:g,preventScrollReset:y,viewTransition:x,...k},S){let{basename:N}=v.useContext(Ia),C=typeof g=="string"&&mg.test(g),E,B=!1;if(typeof g=="string"&&C&&(E=g,pg))try{let te=new URL(window.location.href),le=g.startsWith("//")?new URL(te.protocol+g):new URL(g),fe=gr(le.pathname,N);le.origin===te.origin&&fe!=null?g=fe+le.search+le.hash:B=!0}catch{Oa(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let M=Ky(g,{relative:c}),[T,I,X]=A2(i,k),J=H2(g,{replace:h,state:p,target:m,preventScrollReset:y,relative:c,viewTransition:x});function z(te){a&&a(te),te.defaultPrevented||J(te)}let Q=v.createElement("a",{...k,...X,href:E||M,onClick:B||d?a:z,ref:D2(S,I),target:m,"data-discover":!C&&s==="render"?"true":void 0});return T&&!C?v.createElement(v.Fragment,null,Q,v.createElement(R2,{page:M})):Q});tt.displayName="Link";var L2=v.forwardRef(function({"aria-current":a="page",caseSensitive:s=!1,className:i="",end:c=!1,style:d,to:h,viewTransition:p,children:m,...g},y){let x=qi(h,{relative:g.relative}),k=ca(),S=v.useContext(El),{navigator:N,basename:C}=v.useContext(Ia),E=S!=null&&G2(x)&&p===!0,B=N.encodeLocation?N.encodeLocation(x).pathname:x.pathname,M=k.pathname,T=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;s||(M=M.toLowerCase(),T=T?T.toLowerCase():null,B=B.toLowerCase()),T&&C&&(T=gr(T,C)||T);const I=B!=="/"&&B.endsWith("/")?B.length-1:B.length;let X=M===B||!c&&M.startsWith(B)&&M.charAt(I)==="/",J=T!=null&&(T===B||!c&&T.startsWith(B)&&T.charAt(B.length)==="/"),z={isActive:X,isPending:J,isTransitioning:E},Q=X?a:void 0,te;typeof i=="function"?te=i(z):te=[i,X?"active":null,J?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let le=typeof d=="function"?d(z):d;return v.createElement(tt,{...g,"aria-current":Q,className:te,ref:y,style:le,to:h,viewTransition:p},typeof m=="function"?m(z):m)});L2.displayName="NavLink";var U2=v.forwardRef(({discover:r="render",fetcherKey:a,navigate:s,reloadDocument:i,replace:c,state:d,method:h=ml,action:p,onSubmit:m,relative:g,preventScrollReset:y,viewTransition:x,...k},S)=>{let N=I2(),C=Y2(p,{relative:g}),E=h.toLowerCase()==="get"?"get":"post",B=typeof p=="string"&&mg.test(p),M=T=>{if(m&&m(T),T.defaultPrevented)return;T.preventDefault();let I=T.nativeEvent.submitter,X=I?.getAttribute("formmethod")||h;N(I||T.currentTarget,{fetcherKey:a,method:X,navigate:s,replace:c,state:d,relative:g,preventScrollReset:y,viewTransition:x})};return v.createElement("form",{ref:S,method:E,action:C,onSubmit:i?m:M,...k,"data-discover":!B&&r==="render"?"true":void 0})});U2.displayName="Form";function B2(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function gg(r){let a=v.useContext(Ss);return at(a,B2(r)),a}function H2(r,{target:a,replace:s,state:i,preventScrollReset:c,relative:d,viewTransition:h}={}){let p=_s(),m=ca(),g=qi(r,{relative:d});return v.useCallback(y=>{if(g2(y,a)){y.preventDefault();let x=s!==void 0?s:Ai(m)===Ai(g);p(r,{replace:x,state:i,preventScrollReset:c,relative:d,viewTransition:h})}},[m,p,g,s,i,a,r,c,d,h])}function $2(r){Oa(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let a=v.useRef(hu(r)),s=v.useRef(!1),i=ca(),c=v.useMemo(()=>b2(i.search,s.current?null:a.current),[i.search]),d=_s(),h=v.useCallback((p,m)=>{const g=hu(typeof p=="function"?p(new URLSearchParams(c)):p);s.current=!0,d("?"+g,m)},[d,c]);return[c,h]}var P2=0,q2=()=>`__${String(++P2)}__`;function I2(){let{router:r}=gg("useSubmit"),{basename:a}=v.useContext(Ia),s=i2();return v.useCallback(async(i,c={})=>{let{action:d,method:h,encType:p,formData:m,body:g}=v2(i,a);if(c.navigate===!1){let y=c.fetcherKey||q2();await r.fetch(y,s,c.action||d,{preventScrollReset:c.preventScrollReset,formData:m,body:g,formMethod:c.method||h,formEncType:c.encType||p,flushSync:c.flushSync})}else await r.navigate(c.action||d,{preventScrollReset:c.preventScrollReset,formData:m,body:g,formMethod:c.method||h,formEncType:c.encType||p,replace:c.replace,state:c.state,fromRouteId:s,flushSync:c.flushSync,viewTransition:c.viewTransition})},[r,a,s])}function Y2(r,{relative:a}={}){let{basename:s}=v.useContext(Ia),i=v.useContext(br);at(i,"useFormAction must be used inside a RouteContext");let[c]=i.matches.slice(-1),d={...qi(r||".",{relative:a})},h=ca();if(r==null){d.search=h.search;let p=new URLSearchParams(d.search),m=p.getAll("index");if(m.some(y=>y==="")){p.delete("index"),m.filter(x=>x).forEach(x=>p.append("index",x));let y=p.toString();d.search=y?`?${y}`:""}}return(!r||r===".")&&c.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(d.pathname=d.pathname==="/"?s:mr([s,d.pathname])),Ai(d)}function G2(r,{relative:a}={}){let s=v.useContext(og);at(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=gg("useViewTransitionState"),c=qi(r,{relative:a});if(!s.isTransitioning)return!1;let d=gr(s.currentLocation.pathname,i)||s.currentLocation.pathname,h=gr(s.nextLocation.pathname,i)||s.nextLocation.pathname;return xl(c.pathname,h)!=null||xl(c.pathname,d)!=null}var V2=eg();/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),K2=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,s,i)=>i?i.toUpperCase():s.toLowerCase()),Xp=r=>{const a=K2(r);return a.charAt(0).toUpperCase()+a.slice(1)},bg=(...r)=>r.filter((a,s,i)=>!!a&&a.trim()!==""&&i.indexOf(a)===s).join(" ").trim(),F2=r=>{for(const a in r)if(a.startsWith("aria-")||a==="role"||a==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var J2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=v.forwardRef(({color:r="currentColor",size:a=24,strokeWidth:s=2,absoluteStrokeWidth:i,className:c="",children:d,iconNode:h,...p},m)=>v.createElement("svg",{ref:m,...J2,width:a,height:a,stroke:r,strokeWidth:i?Number(s)*24/Number(a):s,className:bg("lucide",c),...!d&&!F2(p)&&{"aria-hidden":"true"},...p},[...h.map(([g,y])=>v.createElement(g,y)),...Array.isArray(d)?d:[d]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=(r,a)=>{const s=v.forwardRef(({className:i,...c},d)=>v.createElement(W2,{ref:d,iconNode:a,className:bg(`lucide-${X2(Xp(r))}`,`lucide-${r}`,i),...c}));return s.displayName=Xp(r),s};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],xg=he("arrow-left",Z2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Ii=he("arrow-right",Q2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],fu=he("arrow-up",ev);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],av=he("award",tv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],yg=he("calendar",rv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],yl=he("camera",nv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],hr=he("check",sv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],bn=he("chevron-down",iv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],lv=he("circle-alert",ov);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]],Kp=he("circle-user",cv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],uv=he("clipboard-list",dv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],Fp=he("code-xml",hv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],vg=he("copy",fv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],mv=he("cpu",pv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],bv=he("earth",gv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Ri=he("eye-off",xv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],zi=he("eye",yv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],wv=he("facebook",vv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=[["path",{d:"M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",key:"1jaruq"}]],Sv=he("flag",kv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],_v=he("graduation-cap",jv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Cl=he("heart",Ev);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Cv=he("house",Nv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Av=he("info",Tv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],zv=he("instagram",Rv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],wg=he("layers",Ov);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],Jp=he("layout-dashboard",Dv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Lu=he("lightbulb",Mv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],Uv=he("link-2",Lv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],Tl=he("linkedin",Bv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Wp=he("loader-circle",Hv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Kr=he("lock",$v);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Zp=he("log-out",Pv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],wn=he("mail",qv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Yv=he("map-pin",Iv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=[["path",{d:"M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",key:"q8bfy3"}],["path",{d:"M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14",key:"1853fq"}],["path",{d:"M8 6v8",key:"15ugcq"}]],Vv=he("megaphone",Gv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Kv=he("menu",Xv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],Jv=he("message-circle",Fv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Uu=he("moon",Wv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=[["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",key:"39pd36"}],["rect",{width:"8",height:"4",x:"10",y:"6",rx:"1",key:"aywv1n"}]],Qv=he("newspaper",Zv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],Qd=he("pencil",e1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=[["path",{d:"M13 2a9 9 0 0 1 9 9",key:"1itnx2"}],["path",{d:"M13 6a5 5 0 0 1 5 5",key:"11nki7"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],a1=he("phone-call",t1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],kg=he("phone",r1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],Sg=he("rocket",n1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Qp=he("settings",s1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],o1=he("share-2",i1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],c1=he("shield-check",l1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Al=he("sparkles",d1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],jg=he("star",u1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Bu=he("sun",h1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],p1=he("trending-up",f1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],g1=he("user-check",m1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],pu=he("user-plus",b1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],em=he("user",x1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Es=he("users",y1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]],w1=he("wallet",v1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],S1=he("x",k1),vl="/IEEE-ECU-SB-Website/assets/Picture2-removebg-preview-mrGrxJhm.png",wl="/IEEE-ECU-SB-Website/assets/unnameddadawdadfxzffbcvxb%20(4)-C1XTPqJP.png";function Rl(r,a){var s={};for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&a.indexOf(i)<0&&(s[i]=r[i]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,i=Object.getOwnPropertySymbols(r);c<i.length;c++)a.indexOf(i[c])<0&&Object.prototype.propertyIsEnumerable.call(r,i[c])&&(s[i[c]]=r[i[c]]);return s}function j1(r,a,s,i){function c(d){return d instanceof s?d:new s(function(h){h(d)})}return new(s||(s=Promise))(function(d,h){function p(y){try{g(i.next(y))}catch(x){h(x)}}function m(y){try{g(i.throw(y))}catch(x){h(x)}}function g(y){y.done?d(y.value):c(y.value).then(p,m)}g((i=i.apply(r,a||[])).next())})}const _1=r=>r?(...a)=>r(...a):(...a)=>fetch(...a);class Hu extends Error{constructor(a,s="FunctionsError",i){super(a),this.name=s,this.context=i}toJSON(){return{name:this.name,message:this.message,context:this.context}}}class E1 extends Hu{constructor(a){super("Failed to send a request to the Edge Function","FunctionsFetchError",a)}}class tm extends Hu{constructor(a){super("Relay Error invoking the Edge Function","FunctionsRelayError",a)}}class am extends Hu{constructor(a){super("Edge Function returned a non-2xx status code","FunctionsHttpError",a)}}var mu;(function(r){r.Any="any",r.ApNortheast1="ap-northeast-1",r.ApNortheast2="ap-northeast-2",r.ApSouth1="ap-south-1",r.ApSoutheast1="ap-southeast-1",r.ApSoutheast2="ap-southeast-2",r.CaCentral1="ca-central-1",r.EuCentral1="eu-central-1",r.EuWest1="eu-west-1",r.EuWest2="eu-west-2",r.EuWest3="eu-west-3",r.SaEast1="sa-east-1",r.UsEast1="us-east-1",r.UsWest1="us-west-1",r.UsWest2="us-west-2"})(mu||(mu={}));class N1{constructor(a,{headers:s={},customFetch:i,region:c=mu.Any}={}){this.url=a,this.headers=s,this.region=c,this.fetch=_1(i)}setAuth(a){this.headers.Authorization=`Bearer ${a}`}invoke(a){return j1(this,arguments,void 0,function*(s,i={}){var c;let d,h;try{const{headers:p,method:m,body:g,signal:y,timeout:x}=i;let k={},{region:S}=i;S||(S=this.region);const N=new URL(`${this.url}/${s}`);S&&S!=="any"&&(k["x-region"]=S,N.searchParams.set("forceFunctionRegion",S));let C;g&&(p&&!Object.prototype.hasOwnProperty.call(p,"Content-Type")||!p)?typeof Blob<"u"&&g instanceof Blob||g instanceof ArrayBuffer?(k["Content-Type"]="application/octet-stream",C=g):typeof g=="string"?(k["Content-Type"]="text/plain",C=g):typeof FormData<"u"&&g instanceof FormData?C=g:(k["Content-Type"]="application/json",C=JSON.stringify(g)):g&&typeof g!="string"&&!(typeof Blob<"u"&&g instanceof Blob)&&!(g instanceof ArrayBuffer)&&!(typeof FormData<"u"&&g instanceof FormData)?C=JSON.stringify(g):C=g;let E=y;x&&(h=new AbortController,d=setTimeout(()=>h.abort(),x),y?(E=h.signal,y.addEventListener("abort",()=>h.abort())):E=h.signal);const B=yield this.fetch(N.toString(),{method:m||"POST",headers:Object.assign(Object.assign(Object.assign({},k),this.headers),p),body:C,signal:E}).catch(X=>{throw new E1(X)}),M=B.headers.get("x-relay-error");if(M&&M==="true")throw new tm(B);if(!B.ok)throw new am(B);let T=((c=B.headers.get("Content-Type"))!==null&&c!==void 0?c:"text/plain").split(";")[0].trim(),I;return T==="application/json"?I=yield B.json():T==="application/octet-stream"||T==="application/pdf"?I=yield B.blob():T==="text/event-stream"?I=B:T==="multipart/form-data"?I=yield B.formData():I=yield B.text(),{data:I,error:null,response:B}}catch(p){return{data:null,error:p,response:p instanceof am||p instanceof tm?p.context:void 0}}finally{d&&clearTimeout(d)}})}}const _g=3,rm=r=>Math.min(1e3*2**r,3e4),C1=[520,503],Eg=["GET","HEAD","OPTIONS"];var T1=class extends Error{constructor(r){super(r.message),this.name="PostgrestError",this.details=r.details,this.hint=r.hint,this.code=r.code}toJSON(){return{name:this.name,message:this.message,details:this.details,hint:this.hint,code:this.code}}};function nm(r,a){return new Promise(s=>{if(a?.aborted){s();return}const i=setTimeout(()=>{a?.removeEventListener("abort",c),s()},r);function c(){clearTimeout(i),s()}a?.addEventListener("abort",c)})}function A1(r,a,s,i){return!(!i||s>=_g||!Eg.includes(r)||!C1.includes(a))}var R1=class{constructor(r){var a,s,i,c,d;this.shouldThrowOnError=!1,this.retryEnabled=!0,this.method=r.method,this.url=r.url,this.headers=new Headers(r.headers),this.schema=r.schema,this.body=r.body,this.shouldThrowOnError=(a=r.shouldThrowOnError)!==null&&a!==void 0?a:!1,this.signal=r.signal,this.isMaybeSingle=(s=r.isMaybeSingle)!==null&&s!==void 0?s:!1,this.shouldStripNulls=(i=r.shouldStripNulls)!==null&&i!==void 0?i:!1,this.urlLengthLimit=(c=r.urlLengthLimit)!==null&&c!==void 0?c:8e3,this.retryEnabled=(d=r.retry)!==null&&d!==void 0?d:!0,r.fetch?this.fetch=r.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}stripNulls(){if(this.headers.get("Accept")==="text/csv")throw new Error("stripNulls() cannot be used with csv()");return this.shouldStripNulls=!0,this}setHeader(r,a){return this.headers=new Headers(this.headers),this.headers.set(r,a),this}retry(r){return this.retryEnabled=r,this}then(r,a){var s=this;if(this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json"),this.shouldStripNulls){const h=this.headers.get("Accept");h==="application/vnd.pgrst.object+json"?this.headers.set("Accept","application/vnd.pgrst.object+json;nulls=stripped"):(!h||h==="application/json")&&this.headers.set("Accept","application/vnd.pgrst.array+json;nulls=stripped")}const i=this.fetch;let d=(async()=>{let h=0;for(;;){const g=new Headers(s.headers);h>0&&g.set("X-Retry-Count",String(h));let y;try{y=await i(s.url.toString(),{method:s.method,headers:g,body:JSON.stringify(s.body),signal:s.signal})}catch(x){if(x?.name==="AbortError"||x?.code==="ABORT_ERR"||!Eg.includes(s.method))throw x;if(s.retryEnabled&&h<_g){const k=rm(h);h++,await nm(k,s.signal);continue}throw x}if(A1(s.method,y.status,h,s.retryEnabled)){var p,m;const x=(p=(m=y.headers)===null||m===void 0?void 0:m.get("Retry-After"))!==null&&p!==void 0?p:null,k=x!==null?Math.max(0,parseInt(x,10)||0)*1e3:rm(h);await y.text(),h++,await nm(k,s.signal);continue}return await s.processResponse(y)}})();return this.shouldThrowOnError||(d=d.catch(h=>{var p;let m="",g="",y="";const x=h?.cause;if(x){var k,S,N,C;const M=(k=x?.message)!==null&&k!==void 0?k:"",T=(S=x?.code)!==null&&S!==void 0?S:"";m=`${(N=h?.name)!==null&&N!==void 0?N:"FetchError"}: ${h?.message}`,m+=`

Caused by: ${(C=x?.name)!==null&&C!==void 0?C:"Error"}: ${M}`,T&&(m+=` (${T})`),x?.stack&&(m+=`
${x.stack}`)}else{var E;m=(E=h?.stack)!==null&&E!==void 0?E:""}const B=this.url.toString().length;return h?.name==="AbortError"||h?.code==="ABORT_ERR"?(y="",g="Request was aborted (timeout or manual cancellation)",B>this.urlLengthLimit&&(g+=`. Note: Your request URL is ${B} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):(x?.name==="HeadersOverflowError"||x?.code==="UND_ERR_HEADERS_OVERFLOW")&&(y="",g="HTTP headers exceeded server limits (typically 16KB)",B>this.urlLengthLimit&&(g+=`. Your request URL is ${B} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{success:!1,error:{message:`${(p=h?.name)!==null&&p!==void 0?p:"FetchError"}: ${h?.message}`,details:m,hint:g,code:y},data:null,count:null,status:0,statusText:""}})),d.then(r,a)}async processResponse(r){var a=this;let s=null,i=null,c=null,d=r.status,h=r.statusText;if(r.ok){var p,m;if(a.method!=="HEAD"){var g;const k=await r.text();k===""||(a.headers.get("Accept")==="text/csv"||a.headers.get("Accept")&&(!((g=a.headers.get("Accept"))===null||g===void 0)&&g.includes("application/vnd.pgrst.plan+text"))?i=k:i=JSON.parse(k))}const y=(p=a.headers.get("Prefer"))===null||p===void 0?void 0:p.match(/count=(exact|planned|estimated)/),x=(m=r.headers.get("content-range"))===null||m===void 0?void 0:m.split("/");y&&x&&x.length>1&&(c=parseInt(x[1])),a.isMaybeSingle&&Array.isArray(i)&&(i.length>1?(s={code:"PGRST116",details:`Results contain ${i.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},i=null,c=null,d=406,h="Not Acceptable"):i.length===1?i=i[0]:i=null)}else{const y=await r.text();try{s=JSON.parse(y),Array.isArray(s)&&r.status===404&&(i=[],s=null,d=200,h="OK")}catch{r.status===404&&y===""?(d=204,h="No Content"):s={message:y}}if(s&&a.shouldThrowOnError)throw new T1(s)}return{success:s===null,error:s,data:i,count:c,status:d,statusText:h}}returns(){return this}overrideTypes(){return this}},z1=class extends R1{select(r){let a=!1;const s=(r??"*").split("").map(i=>/\s/.test(i)&&!a?"":(i==='"'&&(a=!a),i)).join("");return this.url.searchParams.set("select",s),this.headers.append("Prefer","return=representation"),this}order(r,{ascending:a=!0,nullsFirst:s,foreignTable:i,referencedTable:c=i}={}){const d=c?`${c}.order`:"order",h=this.url.searchParams.get(d);return this.url.searchParams.set(d,`${h?`${h},`:""}${r}.${a?"asc":"desc"}${s===void 0?"":s?".nullsfirst":".nullslast"}`),this}limit(r,{foreignTable:a,referencedTable:s=a}={}){const i=typeof s>"u"?"limit":`${s}.limit`;return this.url.searchParams.set(i,`${r}`),this}range(r,a,{foreignTable:s,referencedTable:i=s}={}){const c=typeof i>"u"?"offset":`${i}.offset`,d=typeof i>"u"?"limit":`${i}.limit`;return this.url.searchParams.set(c,`${r}`),this.url.searchParams.set(d,`${a-r+1}`),this}abortSignal(r){return this.signal=r,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:r=!1,verbose:a=!1,settings:s=!1,buffers:i=!1,wal:c=!1,format:d="text"}={}){var h;const p=[r?"analyze":null,a?"verbose":null,s?"settings":null,i?"buffers":null,c?"wal":null].filter(Boolean).join("|"),m=(h=this.headers.get("Accept"))!==null&&h!==void 0?h:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${d}; for="${m}"; options=${p};`),d==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(r){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${r}`),this}};const sm=new RegExp("[,()]");var ps=class extends z1{eq(r,a){return this.url.searchParams.append(r,`eq.${a}`),this}neq(r,a){return this.url.searchParams.append(r,`neq.${a}`),this}gt(r,a){return this.url.searchParams.append(r,`gt.${a}`),this}gte(r,a){return this.url.searchParams.append(r,`gte.${a}`),this}lt(r,a){return this.url.searchParams.append(r,`lt.${a}`),this}lte(r,a){return this.url.searchParams.append(r,`lte.${a}`),this}like(r,a){return this.url.searchParams.append(r,`like.${a}`),this}likeAllOf(r,a){return this.url.searchParams.append(r,`like(all).{${a.join(",")}}`),this}likeAnyOf(r,a){return this.url.searchParams.append(r,`like(any).{${a.join(",")}}`),this}ilike(r,a){return this.url.searchParams.append(r,`ilike.${a}`),this}ilikeAllOf(r,a){return this.url.searchParams.append(r,`ilike(all).{${a.join(",")}}`),this}ilikeAnyOf(r,a){return this.url.searchParams.append(r,`ilike(any).{${a.join(",")}}`),this}regexMatch(r,a){return this.url.searchParams.append(r,`match.${a}`),this}regexIMatch(r,a){return this.url.searchParams.append(r,`imatch.${a}`),this}is(r,a){return this.url.searchParams.append(r,`is.${a}`),this}isDistinct(r,a){return this.url.searchParams.append(r,`isdistinct.${a}`),this}in(r,a){const s=Array.from(new Set(a)).map(i=>typeof i=="string"&&sm.test(i)?`"${i}"`:`${i}`).join(",");return this.url.searchParams.append(r,`in.(${s})`),this}notIn(r,a){const s=Array.from(new Set(a)).map(i=>typeof i=="string"&&sm.test(i)?`"${i}"`:`${i}`).join(",");return this.url.searchParams.append(r,`not.in.(${s})`),this}contains(r,a){return typeof a=="string"?this.url.searchParams.append(r,`cs.${a}`):Array.isArray(a)?this.url.searchParams.append(r,`cs.{${a.join(",")}}`):this.url.searchParams.append(r,`cs.${JSON.stringify(a)}`),this}containedBy(r,a){return typeof a=="string"?this.url.searchParams.append(r,`cd.${a}`):Array.isArray(a)?this.url.searchParams.append(r,`cd.{${a.join(",")}}`):this.url.searchParams.append(r,`cd.${JSON.stringify(a)}`),this}rangeGt(r,a){return this.url.searchParams.append(r,`sr.${a}`),this}rangeGte(r,a){return this.url.searchParams.append(r,`nxl.${a}`),this}rangeLt(r,a){return this.url.searchParams.append(r,`sl.${a}`),this}rangeLte(r,a){return this.url.searchParams.append(r,`nxr.${a}`),this}rangeAdjacent(r,a){return this.url.searchParams.append(r,`adj.${a}`),this}overlaps(r,a){return typeof a=="string"?this.url.searchParams.append(r,`ov.${a}`):this.url.searchParams.append(r,`ov.{${a.join(",")}}`),this}textSearch(r,a,{config:s,type:i}={}){let c="";i==="plain"?c="pl":i==="phrase"?c="ph":i==="websearch"&&(c="w");const d=s===void 0?"":`(${s})`;return this.url.searchParams.append(r,`${c}fts${d}.${a}`),this}match(r){return Object.entries(r).filter(([a,s])=>s!==void 0).forEach(([a,s])=>{this.url.searchParams.append(a,`eq.${s}`)}),this}not(r,a,s){return this.url.searchParams.append(r,`not.${a}.${s}`),this}or(r,{foreignTable:a,referencedTable:s=a}={}){const i=s?`${s}.or`:"or";return this.url.searchParams.append(i,`(${r})`),this}filter(r,a,s){return this.url.searchParams.append(r,`${a}.${s}`),this}},O1=class{constructor(r,{headers:a={},schema:s,fetch:i,urlLengthLimit:c=8e3,retry:d}){this.url=r,this.headers=new Headers(a),this.schema=s,this.fetch=i,this.urlLengthLimit=c,this.retry=d}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(r,a){const{head:s=!1,count:i}=a??{},c=s?"HEAD":"GET";let d=!1;const h=(r??"*").split("").map(g=>/\s/.test(g)&&!d?"":(g==='"'&&(d=!d),g)).join(""),{url:p,headers:m}=this.cloneRequestState();return p.searchParams.set("select",h),i&&m.append("Prefer",`count=${i}`),new ps({method:c,url:p,headers:m,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}insert(r,{count:a,defaultToNull:s=!0}={}){var i;const c="POST",{url:d,headers:h}=this.cloneRequestState();if(a&&h.append("Prefer",`count=${a}`),s||h.append("Prefer","missing=default"),Array.isArray(r)){const p=r.reduce((m,g)=>m.concat(Object.keys(g)),[]);if(p.length>0){const m=[...new Set(p)].map(g=>`"${g}"`);d.searchParams.set("columns",m.join(","))}}return new ps({method:c,url:d,headers:h,schema:this.schema,body:r,fetch:(i=this.fetch)!==null&&i!==void 0?i:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}upsert(r,{onConflict:a,ignoreDuplicates:s=!1,count:i,defaultToNull:c=!0}={}){var d;const h="POST",{url:p,headers:m}=this.cloneRequestState();if(m.append("Prefer",`resolution=${s?"ignore":"merge"}-duplicates`),a!==void 0&&p.searchParams.set("on_conflict",a),i&&m.append("Prefer",`count=${i}`),c||m.append("Prefer","missing=default"),Array.isArray(r)){const g=r.reduce((y,x)=>y.concat(Object.keys(x)),[]);if(g.length>0){const y=[...new Set(g)].map(x=>`"${x}"`);p.searchParams.set("columns",y.join(","))}}return new ps({method:h,url:p,headers:m,schema:this.schema,body:r,fetch:(d=this.fetch)!==null&&d!==void 0?d:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}update(r,{count:a}={}){var s;const i="PATCH",{url:c,headers:d}=this.cloneRequestState();return a&&d.append("Prefer",`count=${a}`),new ps({method:i,url:c,headers:d,schema:this.schema,body:r,fetch:(s=this.fetch)!==null&&s!==void 0?s:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}delete({count:r}={}){var a;const s="DELETE",{url:i,headers:c}=this.cloneRequestState();return r&&c.append("Prefer",`count=${r}`),new ps({method:s,url:i,headers:c,schema:this.schema,fetch:(a=this.fetch)!==null&&a!==void 0?a:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};function Oi(r){"@babel/helpers - typeof";return Oi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},Oi(r)}function D1(r,a){if(Oi(r)!="object"||!r)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var i=s.call(r,a);if(Oi(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(r)}function M1(r){var a=D1(r,"string");return Oi(a)=="symbol"?a:a+""}function L1(r,a,s){return(a=M1(a))in r?Object.defineProperty(r,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[a]=s,r}function im(r,a){var s=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);a&&(i=i.filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable})),s.push.apply(s,i)}return s}function il(r){for(var a=1;a<arguments.length;a++){var s=arguments[a]!=null?arguments[a]:{};a%2?im(Object(s),!0).forEach(function(i){L1(r,i,s[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(s)):im(Object(s)).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(s,i))})}return r}var U1=class Ng{constructor(a,{headers:s={},schema:i,fetch:c,timeout:d,urlLengthLimit:h=8e3,retry:p}={}){this.url=a,this.headers=new Headers(s),this.schemaName=i,this.urlLengthLimit=h;const m=c??globalThis.fetch;d!==void 0&&d>0?this.fetch=(g,y)=>{const x=new AbortController,k=setTimeout(()=>x.abort(),d),S=y?.signal;if(S){if(S.aborted)return clearTimeout(k),m(g,y);const N=()=>{clearTimeout(k),x.abort()};return S.addEventListener("abort",N,{once:!0}),m(g,il(il({},y),{},{signal:x.signal})).finally(()=>{clearTimeout(k),S.removeEventListener("abort",N)})}return m(g,il(il({},y),{},{signal:x.signal})).finally(()=>clearTimeout(k))}:this.fetch=m,this.retry=p}from(a){if(!a||typeof a!="string"||a.trim()==="")throw new Error("Invalid relation name: relation must be a non-empty string.");return new O1(new URL(`${this.url}/${a}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}schema(a){return new Ng(this.url,{headers:this.headers,schema:a,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}rpc(a,s={},{head:i=!1,get:c=!1,count:d}={}){var h;let p;const m=new URL(`${this.url}/rpc/${a}`);let g;const y=S=>S!==null&&typeof S=="object"&&(!Array.isArray(S)||S.some(y)),x=i&&Object.values(s).some(y);x?(p="POST",g=s):i||c?(p=i?"HEAD":"GET",Object.entries(s).filter(([S,N])=>N!==void 0).map(([S,N])=>[S,Array.isArray(N)?`{${N.join(",")}}`:`${N}`]).forEach(([S,N])=>{m.searchParams.append(S,N)})):(p="POST",g=s);const k=new Headers(this.headers);return x?k.set("Prefer",d?`count=${d},return=minimal`:"return=minimal"):d&&k.set("Prefer",`count=${d}`),new ps({method:p,url:m,headers:k,schema:this.schemaName,body:g,fetch:(h=this.fetch)!==null&&h!==void 0?h:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};class B1{constructor(){}static detectEnvironment(){var a;if(typeof WebSocket<"u")return{type:"native",constructor:WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocket<"u")return{type:"native",constructor:globalThis.WebSocket};if(typeof global<"u"&&typeof global.WebSocket<"u")return{type:"native",constructor:global.WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&globalThis.EdgeRuntime||typeof navigator<"u"&&(!((a=navigator.userAgent)===null||a===void 0)&&a.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};const s=globalThis.process;if(s){const i=s.versions;if(i&&i.node){const c=i.node,d=parseInt(c.replace(/^v/,"").split(".")[0]);return d>=22?typeof globalThis.WebSocket<"u"?{type:"native",constructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${d} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${d} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const a=this.detectEnvironment();if(a.constructor)return a.constructor;let s=a.error||"WebSocket not supported in this environment.";throw a.workaround&&(s+=`

Suggested solution: ${a.workaround}`),new Error(s)}static isWebSocketSupported(){try{const a=this.detectEnvironment();return a.type==="native"||a.type==="ws"}catch{return!1}}}const H1="2.103.0",$1=`realtime-js/${H1}`,P1="1.0.0",Cg="2.0.0",q1=Cg,I1=1e4,Y1=100,Vr={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},Tg={close:"phx_close",error:"phx_error",join:"phx_join",leave:"phx_leave",access_token:"access_token"},gu={connecting:"connecting",closing:"closing",closed:"closed"};class G1{constructor(a){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT="broadcast",this.allowedMetadataKeys=[],this.allowedMetadataKeys=a??[]}encode(a,s){if(a.event===this.BROADCAST_EVENT&&!(a.payload instanceof ArrayBuffer)&&typeof a.payload.event=="string")return s(this._binaryEncodeUserBroadcastPush(a));let i=[a.join_ref,a.ref,a.topic,a.event,a.payload];return s(JSON.stringify(i))}_binaryEncodeUserBroadcastPush(a){var s;return this._isArrayBuffer((s=a.payload)===null||s===void 0?void 0:s.payload)?this._encodeBinaryUserBroadcastPush(a):this._encodeJsonUserBroadcastPush(a)}_encodeBinaryUserBroadcastPush(a){var s,i;const c=(i=(s=a.payload)===null||s===void 0?void 0:s.payload)!==null&&i!==void 0?i:new ArrayBuffer(0);return this._encodeUserBroadcastPush(a,this.BINARY_ENCODING,c)}_encodeJsonUserBroadcastPush(a){var s,i;const c=(i=(s=a.payload)===null||s===void 0?void 0:s.payload)!==null&&i!==void 0?i:{},h=new TextEncoder().encode(JSON.stringify(c)).buffer;return this._encodeUserBroadcastPush(a,this.JSON_ENCODING,h)}_encodeUserBroadcastPush(a,s,i){var c,d;const h=a.topic,p=(c=a.ref)!==null&&c!==void 0?c:"",m=(d=a.join_ref)!==null&&d!==void 0?d:"",g=a.payload.event,y=this.allowedMetadataKeys?this._pick(a.payload,this.allowedMetadataKeys):{},x=Object.keys(y).length===0?"":JSON.stringify(y);if(m.length>255)throw new Error(`joinRef length ${m.length} exceeds maximum of 255`);if(p.length>255)throw new Error(`ref length ${p.length} exceeds maximum of 255`);if(h.length>255)throw new Error(`topic length ${h.length} exceeds maximum of 255`);if(g.length>255)throw new Error(`userEvent length ${g.length} exceeds maximum of 255`);if(x.length>255)throw new Error(`metadata length ${x.length} exceeds maximum of 255`);const k=this.USER_BROADCAST_PUSH_META_LENGTH+m.length+p.length+h.length+g.length+x.length,S=new ArrayBuffer(this.HEADER_LENGTH+k);let N=new DataView(S),C=0;N.setUint8(C++,this.KINDS.userBroadcastPush),N.setUint8(C++,m.length),N.setUint8(C++,p.length),N.setUint8(C++,h.length),N.setUint8(C++,g.length),N.setUint8(C++,x.length),N.setUint8(C++,s),Array.from(m,B=>N.setUint8(C++,B.charCodeAt(0))),Array.from(p,B=>N.setUint8(C++,B.charCodeAt(0))),Array.from(h,B=>N.setUint8(C++,B.charCodeAt(0))),Array.from(g,B=>N.setUint8(C++,B.charCodeAt(0))),Array.from(x,B=>N.setUint8(C++,B.charCodeAt(0)));var E=new Uint8Array(S.byteLength+i.byteLength);return E.set(new Uint8Array(S),0),E.set(new Uint8Array(i),S.byteLength),E.buffer}decode(a,s){if(this._isArrayBuffer(a)){let i=this._binaryDecode(a);return s(i)}if(typeof a=="string"){const i=JSON.parse(a),[c,d,h,p,m]=i;return s({join_ref:c,ref:d,topic:h,event:p,payload:m})}return s({})}_binaryDecode(a){const s=new DataView(a),i=s.getUint8(0),c=new TextDecoder;switch(i){case this.KINDS.userBroadcast:return this._decodeUserBroadcast(a,s,c)}}_decodeUserBroadcast(a,s,i){const c=s.getUint8(1),d=s.getUint8(2),h=s.getUint8(3),p=s.getUint8(4);let m=this.HEADER_LENGTH+4;const g=i.decode(a.slice(m,m+c));m=m+c;const y=i.decode(a.slice(m,m+d));m=m+d;const x=i.decode(a.slice(m,m+h));m=m+h;const k=a.slice(m,a.byteLength),S=p===this.JSON_ENCODING?JSON.parse(i.decode(k)):k,N={type:this.BROADCAST_EVENT,event:y,payload:S};return h>0&&(N.meta=JSON.parse(x)),{join_ref:null,ref:null,topic:g,event:this.BROADCAST_EVENT,payload:N}}_isArrayBuffer(a){var s;return a instanceof ArrayBuffer||((s=a?.constructor)===null||s===void 0?void 0:s.name)==="ArrayBuffer"}_pick(a,s){return!a||typeof a!="object"?{}:Object.fromEntries(Object.entries(a).filter(([i])=>s.includes(i)))}}var Fe;(function(r){r.abstime="abstime",r.bool="bool",r.date="date",r.daterange="daterange",r.float4="float4",r.float8="float8",r.int2="int2",r.int4="int4",r.int4range="int4range",r.int8="int8",r.int8range="int8range",r.json="json",r.jsonb="jsonb",r.money="money",r.numeric="numeric",r.oid="oid",r.reltime="reltime",r.text="text",r.time="time",r.timestamp="timestamp",r.timestamptz="timestamptz",r.timetz="timetz",r.tsrange="tsrange",r.tstzrange="tstzrange"})(Fe||(Fe={}));const om=(r,a,s={})=>{var i;const c=(i=s.skipTypes)!==null&&i!==void 0?i:[];return a?Object.keys(a).reduce((d,h)=>(d[h]=V1(h,r,a,c),d),{}):{}},V1=(r,a,s,i)=>{const c=a.find(p=>p.name===r),d=c?.type,h=s[r];return d&&!i.includes(d)?Ag(d,h):bu(h)},Ag=(r,a)=>{if(r.charAt(0)==="_"){const s=r.slice(1,r.length);return J1(a,s)}switch(r){case Fe.bool:return X1(a);case Fe.float4:case Fe.float8:case Fe.int2:case Fe.int4:case Fe.int8:case Fe.numeric:case Fe.oid:return K1(a);case Fe.json:case Fe.jsonb:return F1(a);case Fe.timestamp:return W1(a);case Fe.abstime:case Fe.date:case Fe.daterange:case Fe.int4range:case Fe.int8range:case Fe.money:case Fe.reltime:case Fe.text:case Fe.time:case Fe.timestamptz:case Fe.timetz:case Fe.tsrange:case Fe.tstzrange:return bu(a);default:return bu(a)}},bu=r=>r,X1=r=>{switch(r){case"t":return!0;case"f":return!1;default:return r}},K1=r=>{if(typeof r=="string"){const a=parseFloat(r);if(!Number.isNaN(a))return a}return r},F1=r=>{if(typeof r=="string")try{return JSON.parse(r)}catch{return r}return r},J1=(r,a)=>{if(typeof r!="string")return r;const s=r.length-1,i=r[s];if(r[0]==="{"&&i==="}"){let d;const h=r.slice(1,s);try{d=JSON.parse("["+h+"]")}catch{d=h?h.split(","):[]}return d.map(p=>Ag(a,p))}return r},W1=r=>typeof r=="string"?r.replace(" ","T"):r,Rg=r=>{const a=new URL(r);return a.protocol=a.protocol.replace(/^ws/i,"http"),a.pathname=a.pathname.replace(/\/+$/,"").replace(/\/socket\/websocket$/i,"").replace(/\/socket$/i,"").replace(/\/websocket$/i,""),a.pathname===""||a.pathname==="/"?a.pathname="/api/broadcast":a.pathname=a.pathname+"/api/broadcast",a.href};var Ni=r=>typeof r=="function"?r:function(){return r},Z1=typeof self<"u"?self:null,ms=typeof window<"u"?window:null,Pa=Z1||ms||globalThis,Q1="2.0.0",e5=1e4,t5=1e3,qa={connecting:0,open:1,closing:2,closed:3},Zt={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},fr={close:"phx_close",error:"phx_error",join:"phx_join",reply:"phx_reply",leave:"phx_leave"},xu={longpoll:"longpoll",websocket:"websocket"},a5={complete:4},yu="base64url.bearer.phx.",ol=class{constructor(r,a,s,i){this.channel=r,this.event=a,this.payload=s||function(){return{}},this.receivedResp=null,this.timeout=i,this.timeoutTimer=null,this.recHooks=[],this.sent=!1,this.ref=void 0}resend(r){this.timeout=r,this.reset(),this.send()}send(){this.hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(r,a){return this.hasReceived(r)&&a(this.receivedResp.response),this.recHooks.push({status:r,callback:a}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}destroy(){this.cancelRefEvent(),this.cancelTimeout()}matchReceive({status:r,response:a,_ref:s}){this.recHooks.filter(i=>i.status===r).forEach(i=>i.callback(a))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,r=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=r,this.matchReceive(r)}),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}hasReceived(r){return this.receivedResp&&this.receivedResp.status===r}trigger(r,a){this.channel.trigger(this.refEvent,{status:r,response:a})}},zg=class{constructor(r,a){this.callback=r,this.timerCalc=a,this.timer=void 0,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}},r5=class{constructor(r,a,s){this.state=Zt.closed,this.topic=r,this.params=Ni(a||{}),this.socket=s,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new ol(this,fr.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new zg(()=>{this.socket.isConnected()&&this.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()})),this.joinPush.receive("ok",()=>{this.state=Zt.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(i=>i.send()),this.pushBuffer=[]}),this.joinPush.receive("error",i=>{this.state=Zt.errored,this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,i),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.onClose(()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log("channel",`close ${this.topic}`),this.state=Zt.closed,this.socket.remove(this)}),this.onError(i=>{this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,i),this.isJoining()&&this.joinPush.reset(),this.state=Zt.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.joinPush.receive("timeout",()=>{this.socket.hasLogger()&&this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),new ol(this,fr.leave,Ni({}),this.timeout).send(),this.state=Zt.errored,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.on(fr.reply,(i,c)=>{this.trigger(this.replyEventName(c),i)})}join(r=this.timeout){if(this.joinedOnce)throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");return this.timeout=r,this.joinedOnce=!0,this.rejoin(),this.joinPush}teardown(){this.pushBuffer.forEach(r=>r.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=Zt.closed,this.bindings=[]}onClose(r){this.on(fr.close,r)}onError(r){return this.on(fr.error,a=>r(a))}on(r,a){let s=this.bindingRef++;return this.bindings.push({event:r,ref:s,callback:a}),s}off(r,a){this.bindings=this.bindings.filter(s=>!(s.event===r&&(typeof a>"u"||a===s.ref)))}canPush(){return this.socket.isConnected()&&this.isJoined()}push(r,a,s=this.timeout){if(a=a||{},!this.joinedOnce)throw new Error(`tried to push '${r}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let i=new ol(this,r,function(){return a},s);return this.canPush()?i.send():(i.startTimeout(),this.pushBuffer.push(i)),i}leave(r=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=Zt.leaving;let a=()=>{this.socket.hasLogger()&&this.socket.log("channel",`leave ${this.topic}`),this.trigger(fr.close,"leave")},s=new ol(this,fr.leave,Ni({}),r);return s.receive("ok",()=>a()).receive("timeout",()=>a()),s.send(),this.canPush()||s.trigger("ok",{}),s}onMessage(r,a,s){return a}filterBindings(r,a,s){return!0}isMember(r,a,s,i){return this.topic!==r?!1:i&&i!==this.joinRef()?(this.socket.hasLogger()&&this.socket.log("channel","dropping outdated message",{topic:r,event:a,payload:s,joinRef:i}),!1):!0}joinRef(){return this.joinPush.ref}rejoin(r=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=Zt.joining,this.joinPush.resend(r))}trigger(r,a,s,i){let c=this.onMessage(r,a,s,i);if(a&&!c)throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");let d=this.bindings.filter(h=>h.event===r&&this.filterBindings(h,a,s));for(let h=0;h<d.length;h++)d[h].callback(c,s,i||this.joinRef())}replyEventName(r){return`chan_reply_${r}`}isClosed(){return this.state===Zt.closed}isErrored(){return this.state===Zt.errored}isJoined(){return this.state===Zt.joined}isJoining(){return this.state===Zt.joining}isLeaving(){return this.state===Zt.leaving}},kl=class{static request(r,a,s,i,c,d,h){if(Pa.XDomainRequest){let p=new Pa.XDomainRequest;return this.xdomainRequest(p,r,a,i,c,d,h)}else if(Pa.XMLHttpRequest){let p=new Pa.XMLHttpRequest;return this.xhrRequest(p,r,a,s,i,c,d,h)}else{if(Pa.fetch&&Pa.AbortController)return this.fetchRequest(r,a,s,i,c,d,h);throw new Error("No suitable XMLHttpRequest implementation found")}}static fetchRequest(r,a,s,i,c,d,h){let p={method:r,headers:s,body:i},m=null;return c&&(m=new AbortController,setTimeout(()=>m.abort(),c),p.signal=m.signal),Pa.fetch(a,p).then(g=>g.text()).then(g=>this.parseJSON(g)).then(g=>h&&h(g)).catch(g=>{g.name==="AbortError"&&d?d():h&&h(null)}),m}static xdomainRequest(r,a,s,i,c,d,h){return r.timeout=c,r.open(a,s),r.onload=()=>{let p=this.parseJSON(r.responseText);h&&h(p)},d&&(r.ontimeout=d),r.onprogress=()=>{},r.send(i),r}static xhrRequest(r,a,s,i,c,d,h,p){r.open(a,s,!0),r.timeout=d;for(let[m,g]of Object.entries(i))r.setRequestHeader(m,g);return r.onerror=()=>p&&p(null),r.onreadystatechange=()=>{if(r.readyState===a5.complete&&p){let m=this.parseJSON(r.responseText);p(m)}},h&&(r.ontimeout=h),r.send(c),r}static parseJSON(r){if(!r||r==="")return null;try{return JSON.parse(r)}catch{return console&&console.log("failed to parse JSON response",r),null}}static serialize(r,a){let s=[];for(var i in r){if(!Object.prototype.hasOwnProperty.call(r,i))continue;let c=a?`${a}[${i}]`:i,d=r[i];typeof d=="object"?s.push(this.serialize(d,c)):s.push(encodeURIComponent(c)+"="+encodeURIComponent(d))}return s.join("&")}static appendParams(r,a){if(Object.keys(a).length===0)return r;let s=r.match(/\?/)?"&":"?";return`${r}${s}${this.serialize(a)}`}},n5=r=>{let a="",s=new Uint8Array(r),i=s.byteLength;for(let c=0;c<i;c++)a+=String.fromCharCode(s[c]);return btoa(a)},ls=class{constructor(r,a){a&&a.length===2&&a[1].startsWith(yu)&&(this.authToken=atob(a[1].slice(yu.length))),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.reqs=new Set,this.awaitingBatchAck=!1,this.currentBatch=null,this.currentBatchTimer=null,this.batchBuffer=[],this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(r),this.readyState=qa.connecting,setTimeout(()=>this.poll(),0)}normalizeEndpoint(r){return r.replace("ws://","http://").replace("wss://","https://").replace(new RegExp("(.*)/"+xu.websocket),"$1/"+xu.longpoll)}endpointURL(){return kl.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(r,a,s){this.close(r,a,s),this.readyState=qa.connecting}ontimeout(){this.onerror("timeout"),this.closeAndRetry(1005,"timeout",!1)}isActive(){return this.readyState===qa.open||this.readyState===qa.connecting}poll(){const r={Accept:"application/json"};this.authToken&&(r["X-Phoenix-AuthToken"]=this.authToken),this.ajax("GET",r,null,()=>this.ontimeout(),a=>{if(a){var{status:s,token:i,messages:c}=a;if(s===410&&this.token!==null){this.onerror(410),this.closeAndRetry(3410,"session_gone",!1);return}this.token=i}else s=0;switch(s){case 200:c.forEach(d=>{setTimeout(()=>this.onmessage({data:d}),0)}),this.poll();break;case 204:this.poll();break;case 410:this.readyState=qa.open,this.onopen({}),this.poll();break;case 403:this.onerror(403),this.close(1008,"forbidden",!1);break;case 0:case 500:this.onerror(500),this.closeAndRetry(1011,"internal server error",500);break;default:throw new Error(`unhandled poll status ${s}`)}})}send(r){typeof r!="string"&&(r=n5(r)),this.currentBatch?this.currentBatch.push(r):this.awaitingBatchAck?this.batchBuffer.push(r):(this.currentBatch=[r],this.currentBatchTimer=setTimeout(()=>{this.batchSend(this.currentBatch),this.currentBatch=null},0))}batchSend(r){this.awaitingBatchAck=!0,this.ajax("POST",{"Content-Type":"application/x-ndjson"},r.join(`
`),()=>this.onerror("timeout"),a=>{this.awaitingBatchAck=!1,!a||a.status!==200?(this.onerror(a&&a.status),this.closeAndRetry(1011,"internal server error",!1)):this.batchBuffer.length>0&&(this.batchSend(this.batchBuffer),this.batchBuffer=[])})}close(r,a,s){for(let c of this.reqs)c.abort();this.readyState=qa.closed;let i=Object.assign({code:1e3,reason:void 0,wasClean:!0},{code:r,reason:a,wasClean:s});this.batchBuffer=[],clearTimeout(this.currentBatchTimer),this.currentBatchTimer=null,typeof CloseEvent<"u"?this.onclose(new CloseEvent("close",i)):this.onclose(i)}ajax(r,a,s,i,c){let d,h=()=>{this.reqs.delete(d),i()};d=kl.request(r,this.endpointURL(),a,s,this.timeout,h,p=>{this.reqs.delete(d),this.isActive()&&c(p)}),this.reqs.add(d)}},s5=class _i{constructor(a,s={}){let i=s.events||{state:"presence_state",diff:"presence_diff"};this.state={},this.pendingDiffs=[],this.channel=a,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(i.state,c=>{let{onJoin:d,onLeave:h,onSync:p}=this.caller;this.joinRef=this.channel.joinRef(),this.state=_i.syncState(this.state,c,d,h),this.pendingDiffs.forEach(m=>{this.state=_i.syncDiff(this.state,m,d,h)}),this.pendingDiffs=[],p()}),this.channel.on(i.diff,c=>{let{onJoin:d,onLeave:h,onSync:p}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(c):(this.state=_i.syncDiff(this.state,c,d,h),p())})}onJoin(a){this.caller.onJoin=a}onLeave(a){this.caller.onLeave=a}onSync(a){this.caller.onSync=a}list(a){return _i.list(this.state,a)}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}static syncState(a,s,i,c){let d=this.clone(a),h={},p={};return this.map(d,(m,g)=>{s[m]||(p[m]=g)}),this.map(s,(m,g)=>{let y=d[m];if(y){let x=g.metas.map(C=>C.phx_ref),k=y.metas.map(C=>C.phx_ref),S=g.metas.filter(C=>k.indexOf(C.phx_ref)<0),N=y.metas.filter(C=>x.indexOf(C.phx_ref)<0);S.length>0&&(h[m]=g,h[m].metas=S),N.length>0&&(p[m]=this.clone(y),p[m].metas=N)}else h[m]=g}),this.syncDiff(d,{joins:h,leaves:p},i,c)}static syncDiff(a,s,i,c){let{joins:d,leaves:h}=this.clone(s);return i||(i=function(){}),c||(c=function(){}),this.map(d,(p,m)=>{let g=a[p];if(a[p]=this.clone(m),g){let y=a[p].metas.map(k=>k.phx_ref),x=g.metas.filter(k=>y.indexOf(k.phx_ref)<0);a[p].metas.unshift(...x)}i(p,g,m)}),this.map(h,(p,m)=>{let g=a[p];if(!g)return;let y=m.metas.map(x=>x.phx_ref);g.metas=g.metas.filter(x=>y.indexOf(x.phx_ref)<0),c(p,g,m),g.metas.length===0&&delete a[p]}),a}static list(a,s){return s||(s=function(i,c){return c}),this.map(a,(i,c)=>s(i,c))}static map(a,s){return Object.getOwnPropertyNames(a).map(i=>s(i,a[i]))}static clone(a){return JSON.parse(JSON.stringify(a))}},ll={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(r,a){if(r.payload.constructor===ArrayBuffer)return a(this.binaryEncode(r));{let s=[r.join_ref,r.ref,r.topic,r.event,r.payload];return a(JSON.stringify(s))}},decode(r,a){if(r.constructor===ArrayBuffer)return a(this.binaryDecode(r));{let[s,i,c,d,h]=JSON.parse(r);return a({join_ref:s,ref:i,topic:c,event:d,payload:h})}},binaryEncode(r){let{join_ref:a,ref:s,event:i,topic:c,payload:d}=r,h=this.META_LENGTH+a.length+s.length+c.length+i.length,p=new ArrayBuffer(this.HEADER_LENGTH+h),m=new DataView(p),g=0;m.setUint8(g++,this.KINDS.push),m.setUint8(g++,a.length),m.setUint8(g++,s.length),m.setUint8(g++,c.length),m.setUint8(g++,i.length),Array.from(a,x=>m.setUint8(g++,x.charCodeAt(0))),Array.from(s,x=>m.setUint8(g++,x.charCodeAt(0))),Array.from(c,x=>m.setUint8(g++,x.charCodeAt(0))),Array.from(i,x=>m.setUint8(g++,x.charCodeAt(0)));var y=new Uint8Array(p.byteLength+d.byteLength);return y.set(new Uint8Array(p),0),y.set(new Uint8Array(d),p.byteLength),y.buffer},binaryDecode(r){let a=new DataView(r),s=a.getUint8(0),i=new TextDecoder;switch(s){case this.KINDS.push:return this.decodePush(r,a,i);case this.KINDS.reply:return this.decodeReply(r,a,i);case this.KINDS.broadcast:return this.decodeBroadcast(r,a,i)}},decodePush(r,a,s){let i=a.getUint8(1),c=a.getUint8(2),d=a.getUint8(3),h=this.HEADER_LENGTH+this.META_LENGTH-1,p=s.decode(r.slice(h,h+i));h=h+i;let m=s.decode(r.slice(h,h+c));h=h+c;let g=s.decode(r.slice(h,h+d));h=h+d;let y=r.slice(h,r.byteLength);return{join_ref:p,ref:null,topic:m,event:g,payload:y}},decodeReply(r,a,s){let i=a.getUint8(1),c=a.getUint8(2),d=a.getUint8(3),h=a.getUint8(4),p=this.HEADER_LENGTH+this.META_LENGTH,m=s.decode(r.slice(p,p+i));p=p+i;let g=s.decode(r.slice(p,p+c));p=p+c;let y=s.decode(r.slice(p,p+d));p=p+d;let x=s.decode(r.slice(p,p+h));p=p+h;let k=r.slice(p,r.byteLength),S={status:x,response:k};return{join_ref:m,ref:g,topic:y,event:fr.reply,payload:S}},decodeBroadcast(r,a,s){let i=a.getUint8(1),c=a.getUint8(2),d=this.HEADER_LENGTH+2,h=s.decode(r.slice(d,d+i));d=d+i;let p=s.decode(r.slice(d,d+c));d=d+c;let m=r.slice(d,r.byteLength);return{join_ref:null,ref:null,topic:h,event:p,payload:m}}},i5=class{constructor(r,a={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.fallbackRef=null,this.timeout=a.timeout||e5,this.transport=a.transport||Pa.WebSocket||ls,this.conn=void 0,this.primaryPassedHealthCheck=!1,this.longPollFallbackMs=a.longPollFallbackMs,this.fallbackTimer=null,this.sessionStore=a.sessionStorage||Pa&&Pa.sessionStorage,this.establishedConnections=0,this.defaultEncoder=ll.encode.bind(ll),this.defaultDecoder=ll.decode.bind(ll),this.closeWasClean=!0,this.disconnecting=!1,this.binaryType=a.binaryType||"arraybuffer",this.connectClock=1,this.pageHidden=!1,this.encode=void 0,this.decode=void 0,this.transport!==ls?(this.encode=a.encode||this.defaultEncoder,this.decode=a.decode||this.defaultDecoder):(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder);let s=null;ms&&ms.addEventListener&&(ms.addEventListener("pagehide",i=>{this.conn&&(this.disconnect(),s=this.connectClock)}),ms.addEventListener("pageshow",i=>{s===this.connectClock&&(s=null,this.connect())}),ms.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?this.pageHidden=!0:(this.pageHidden=!1,!this.isConnected()&&!this.closeWasClean&&this.teardown(()=>this.connect()))})),this.heartbeatIntervalMs=a.heartbeatIntervalMs||3e4,this.autoSendHeartbeat=a.autoSendHeartbeat??!0,this.heartbeatCallback=a.heartbeatCallback??(()=>{}),this.rejoinAfterMs=i=>a.rejoinAfterMs?a.rejoinAfterMs(i):[1e3,2e3,5e3][i-1]||1e4,this.reconnectAfterMs=i=>a.reconnectAfterMs?a.reconnectAfterMs(i):[10,50,100,150,200,250,500,1e3,2e3][i-1]||5e3,this.logger=a.logger||null,!this.logger&&a.debug&&(this.logger=(i,c,d)=>{console.log(`${i}: ${c}`,d)}),this.longpollerTimeout=a.longpollerTimeout||2e4,this.params=Ni(a.params||{}),this.endPoint=`${r}/${xu.websocket}`,this.vsn=a.vsn||Q1,this.heartbeatTimeoutTimer=null,this.heartbeatTimer=null,this.heartbeatSentAt=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new zg(()=>{if(this.pageHidden){this.log("Not reconnecting as page is hidden!"),this.teardown();return}this.teardown(async()=>{a.beforeReconnect&&await a.beforeReconnect(),this.connect()})},this.reconnectAfterMs),this.authToken=a.authToken}getLongPollTransport(){return ls}replaceTransport(r){this.connectClock++,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.conn&&(this.conn.close(),this.conn=null),this.transport=r}protocol(){return location.protocol.match(/^https/)?"wss":"ws"}endPointURL(){let r=kl.appendParams(kl.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return r.charAt(0)!=="/"?r:r.charAt(1)==="/"?`${this.protocol()}:${r}`:`${this.protocol()}://${location.host}${r}`}disconnect(r,a,s){this.connectClock++,this.disconnecting=!0,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.teardown(()=>{this.disconnecting=!1,r&&r()},a,s)}connect(r){r&&(console&&console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"),this.params=Ni(r)),!(this.conn&&!this.disconnecting)&&(this.longPollFallbackMs&&this.transport!==ls?this.connectWithFallback(ls,this.longPollFallbackMs):this.transportConnect())}log(r,a,s){this.logger&&this.logger(r,a,s)}hasLogger(){return this.logger!==null}onOpen(r){let a=this.makeRef();return this.stateChangeCallbacks.open.push([a,r]),a}onClose(r){let a=this.makeRef();return this.stateChangeCallbacks.close.push([a,r]),a}onError(r){let a=this.makeRef();return this.stateChangeCallbacks.error.push([a,r]),a}onMessage(r){let a=this.makeRef();return this.stateChangeCallbacks.message.push([a,r]),a}onHeartbeat(r){this.heartbeatCallback=r}ping(r){if(!this.isConnected())return!1;let a=this.makeRef(),s=Date.now();this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:a});let i=this.onMessage(c=>{c.ref===a&&(this.off([i]),r(Date.now()-s))});return!0}transportName(r){switch(r){case ls:return"LongPoll";default:return r.name}}transportConnect(){this.connectClock++,this.closeWasClean=!1;let r;this.authToken&&(r=["phoenix",`${yu}${btoa(this.authToken).replace(/=/g,"")}`]),this.conn=new this.transport(this.endPointURL(),r),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=a=>this.onConnError(a),this.conn.onmessage=a=>this.onConnMessage(a),this.conn.onclose=a=>this.onConnClose(a)}getSession(r){return this.sessionStore&&this.sessionStore.getItem(r)}storeSession(r,a){this.sessionStore&&this.sessionStore.setItem(r,a)}connectWithFallback(r,a=2500){clearTimeout(this.fallbackTimer);let s=!1,i=!0,c,d,h=this.transportName(r),p=m=>{this.log("transport",`falling back to ${h}...`,m),this.off([c,d]),i=!1,this.replaceTransport(r),this.transportConnect()};if(this.getSession(`phx:fallback:${h}`))return p("memorized");this.fallbackTimer=setTimeout(p,a),d=this.onError(m=>{this.log("transport","error",m),i&&!s&&(clearTimeout(this.fallbackTimer),p(m))}),this.fallbackRef&&this.off([this.fallbackRef]),this.fallbackRef=this.onOpen(()=>{if(s=!0,!i){let m=this.transportName(r);return this.primaryPassedHealthCheck||this.storeSession(`phx:fallback:${m}`,"true"),this.log("transport",`established ${m} fallback`)}clearTimeout(this.fallbackTimer),this.fallbackTimer=setTimeout(p,a),this.ping(m=>{this.log("transport","connected to primary after",m),this.primaryPassedHealthCheck=!0,clearTimeout(this.fallbackTimer)})}),this.transportConnect()}clearHeartbeats(){clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)}onConnOpen(){this.hasLogger()&&this.log("transport",`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.disconnecting=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.autoSendHeartbeat&&this.resetHeartbeat(),this.triggerStateCallbacks("open")}heartbeatTimeout(){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.hasLogger()&&this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(r){this.log("error","error in heartbeat callback",r)}this.triggerChanError(),this.closeWasClean=!1,this.teardown(()=>this.reconnectTimer.scheduleTimeout(),t5,"heartbeat timeout")}}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,this.clearHeartbeats(),this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}teardown(r,a,s){if(!this.conn)return r&&r();const i=this.conn;this.waitForBufferDone(i,()=>{a?i.close(a,s||""):i.close(),this.waitForSocketClosed(i,()=>{this.conn===i&&(this.conn.onopen=function(){},this.conn.onerror=function(){},this.conn.onmessage=function(){},this.conn.onclose=function(){},this.conn=null),r&&r()})})}waitForBufferDone(r,a,s=1){if(s===5||!r.bufferedAmount){a();return}setTimeout(()=>{this.waitForBufferDone(r,a,s+1)},150*s)}waitForSocketClosed(r,a,s=1){if(s===5||r.readyState===qa.closed){a();return}setTimeout(()=>{this.waitForSocketClosed(r,a,s+1)},150*s)}onConnClose(r){this.conn&&(this.conn.onclose=()=>{}),this.hasLogger()&&this.log("transport","close",r),this.triggerChanError(),this.clearHeartbeats(),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.triggerStateCallbacks("close",r)}onConnError(r){this.hasLogger()&&this.log("transport",r);let a=this.transport,s=this.establishedConnections;this.triggerStateCallbacks("error",r,a,s),(a===this.transport||s>0)&&this.triggerChanError()}triggerChanError(){this.channels.forEach(r=>{r.isErrored()||r.isLeaving()||r.isClosed()||r.trigger(fr.error)})}connectionState(){switch(this.conn&&this.conn.readyState){case qa.connecting:return"connecting";case qa.open:return"open";case qa.closing:return"closing";default:return"closed"}}isConnected(){return this.connectionState()==="open"}remove(r){this.off(r.stateChangeRefs),this.channels=this.channels.filter(a=>a!==r)}off(r){for(let a in this.stateChangeCallbacks)this.stateChangeCallbacks[a]=this.stateChangeCallbacks[a].filter(([s])=>r.indexOf(s)===-1)}channel(r,a={}){let s=new r5(r,a,this);return this.channels.push(s),s}push(r){if(this.hasLogger()){let{topic:a,event:s,payload:i,ref:c,join_ref:d}=r;this.log("push",`${a} ${s} (${d}, ${c})`,i)}this.isConnected()?this.encode(r,a=>this.conn.send(a)):this.sendBuffer.push(()=>this.encode(r,a=>this.conn.send(a)))}makeRef(){let r=this.ref+1;return r===this.ref?this.ref=0:this.ref=r,this.ref.toString()}sendHeartbeat(){if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(r){this.log("error","error in heartbeat callback",r)}return}if(this.pendingHeartbeatRef){this.heartbeatTimeout();return}this.pendingHeartbeatRef=this.makeRef(),this.heartbeatSentAt=Date.now(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(r){this.log("error","error in heartbeat callback",r)}this.heartbeatTimeoutTimer=setTimeout(()=>this.heartbeatTimeout(),this.heartbeatIntervalMs)}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(r=>r()),this.sendBuffer=[])}onConnMessage(r){this.decode(r.data,a=>{let{topic:s,event:i,payload:c,ref:d,join_ref:h}=a;if(d&&d===this.pendingHeartbeatRef){const p=this.heartbeatSentAt?Date.now()-this.heartbeatSentAt:void 0;this.clearHeartbeats();try{this.heartbeatCallback(c.status==="ok"?"ok":"error",p)}catch(m){this.log("error","error in heartbeat callback",m)}this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.autoSendHeartbeat&&(this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}this.hasLogger()&&this.log("receive",`${c.status||""} ${s} ${i} ${d&&"("+d+")"||""}`.trim(),c);for(let p=0;p<this.channels.length;p++){const m=this.channels[p];m.isMember(s,i,c,h)&&m.trigger(i,c,d,h)}this.triggerStateCallbacks("message",a)})}triggerStateCallbacks(r,...a){try{this.stateChangeCallbacks[r].forEach(([s,i])=>{try{i(...a)}catch(c){this.log("error",`error in ${r} callback`,c)}})}catch(s){this.log("error",`error triggering ${r} callbacks`,s)}}leaveOpenTopic(r){let a=this.channels.find(s=>s.topic===r&&(s.isJoined()||s.isJoining()));a&&(this.hasLogger()&&this.log("transport",`leaving duplicate topic "${r}"`),a.leave())}};class Ci{constructor(a,s){const i=l5(s);this.presence=new s5(a.getChannel(),i),this.presence.onJoin((c,d,h)=>{const p=Ci.onJoinPayload(c,d,h);a.getChannel().trigger("presence",p)}),this.presence.onLeave((c,d,h)=>{const p=Ci.onLeavePayload(c,d,h);a.getChannel().trigger("presence",p)}),this.presence.onSync(()=>{a.getChannel().trigger("presence",{event:"sync"})})}get state(){return Ci.transformState(this.presence.state)}static transformState(a){return a=o5(a),Object.getOwnPropertyNames(a).reduce((s,i)=>{const c=a[i];return s[i]=bl(c),s},{})}static onJoinPayload(a,s,i){const c=lm(s),d=bl(i);return{event:"join",key:a,currentPresences:c,newPresences:d}}static onLeavePayload(a,s,i){const c=lm(s),d=bl(i);return{event:"leave",key:a,currentPresences:c,leftPresences:d}}}function bl(r){return r.metas.map(a=>(a.presence_ref=a.phx_ref,delete a.phx_ref,delete a.phx_ref_prev,a))}function o5(r){return JSON.parse(JSON.stringify(r))}function l5(r){return r?.events&&{events:r.events}}function lm(r){return r?.metas?bl(r):[]}var cm;(function(r){r.SYNC="sync",r.JOIN="join",r.LEAVE="leave"})(cm||(cm={}));class c5{get state(){return this.presenceAdapter.state}constructor(a,s){this.channel=a,this.presenceAdapter=new Ci(this.channel.channelAdapter,s)}}class d5{constructor(a,s,i){const c=u5(i);this.channel=a.getSocket().channel(s,c),this.socket=a}get state(){return this.channel.state}set state(a){this.channel.state=a}get joinedOnce(){return this.channel.joinedOnce}get joinPush(){return this.channel.joinPush}get rejoinTimer(){return this.channel.rejoinTimer}on(a,s){return this.channel.on(a,s)}off(a,s){this.channel.off(a,s)}subscribe(a){return this.channel.join(a)}unsubscribe(a){return this.channel.leave(a)}teardown(){this.channel.teardown()}onClose(a){this.channel.onClose(a)}onError(a){return this.channel.onError(a)}push(a,s,i){let c;try{c=this.channel.push(a,s,i)}catch{throw`tried to push '${a}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`}if(this.channel.pushBuffer.length>Y1){const d=this.channel.pushBuffer.shift();d.cancelTimeout(),this.socket.log("channel",`discarded push due to buffer overflow: ${d.event}`,d.payload())}return c}updateJoinPayload(a){const s=this.channel.joinPush.payload();this.channel.joinPush.payload=()=>Object.assign(Object.assign({},s),a)}canPush(){return this.socket.isConnected()&&this.state===Vr.joined}isJoined(){return this.state===Vr.joined}isJoining(){return this.state===Vr.joining}isClosed(){return this.state===Vr.closed}isLeaving(){return this.state===Vr.leaving}updateFilterBindings(a){this.channel.filterBindings=a}updatePayloadTransform(a){this.channel.onMessage=a}getChannel(){return this.channel}}function u5(r){return{config:Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},r.config)}}var dm;(function(r){r.ALL="*",r.INSERT="INSERT",r.UPDATE="UPDATE",r.DELETE="DELETE"})(dm||(dm={}));var ys;(function(r){r.BROADCAST="broadcast",r.PRESENCE="presence",r.POSTGRES_CHANGES="postgres_changes",r.SYSTEM="system"})(ys||(ys={}));var pr;(function(r){r.SUBSCRIBED="SUBSCRIBED",r.TIMED_OUT="TIMED_OUT",r.CLOSED="CLOSED",r.CHANNEL_ERROR="CHANNEL_ERROR"})(pr||(pr={}));class Ti{get state(){return this.channelAdapter.state}set state(a){this.channelAdapter.state=a}get joinedOnce(){return this.channelAdapter.joinedOnce}get timeout(){return this.socket.timeout}get joinPush(){return this.channelAdapter.joinPush}get rejoinTimer(){return this.channelAdapter.rejoinTimer}constructor(a,s={config:{}},i){var c,d;if(this.topic=a,this.params=s,this.socket=i,this.bindings={},this.subTopic=a.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},s.config),this.channelAdapter=new d5(this.socket.socketAdapter,a,this.params),this.presence=new c5(this),this._onClose(()=>{this.socket._remove(this)}),this._updateFilterTransform(),this.broadcastEndpointURL=Rg(this.socket.socketAdapter.endPointURL()),this.private=this.params.config.private||!1,!this.private&&(!((d=(c=this.params.config)===null||c===void 0?void 0:c.broadcast)===null||d===void 0)&&d.replay))throw`tried to use replay on public channel '${this.topic}'. It must be a private channel.`}subscribe(a,s=this.timeout){var i,c,d;if(this.socket.isConnected()||this.socket.connect(),this.channelAdapter.isClosed()){const{config:{broadcast:h,presence:p,private:m}}=this.params,g=(c=(i=this.bindings.postgres_changes)===null||i===void 0?void 0:i.map(S=>S.filter))!==null&&c!==void 0?c:[],y=!!this.bindings[ys.PRESENCE]&&this.bindings[ys.PRESENCE].length>0||((d=this.params.config.presence)===null||d===void 0?void 0:d.enabled)===!0,x={},k={broadcast:h,presence:Object.assign(Object.assign({},p),{enabled:y}),postgres_changes:g,private:m};this.socket.accessTokenValue&&(x.access_token=this.socket.accessTokenValue),this._onError(S=>{a?.(pr.CHANNEL_ERROR,S)}),this._onClose(()=>a?.(pr.CLOSED)),this.updateJoinPayload(Object.assign({config:k},x)),this._updateFilterMessage(),this.channelAdapter.subscribe(s).receive("ok",async({postgres_changes:S})=>{if(this.socket._isManualToken()||this.socket.setAuth(),S===void 0){a?.(pr.SUBSCRIBED);return}this._updatePostgresBindings(S,a)}).receive("error",S=>{this.state=Vr.errored,a?.(pr.CHANNEL_ERROR,new Error(JSON.stringify(Object.values(S).join(", ")||"error")))}).receive("timeout",()=>{a?.(pr.TIMED_OUT)})}return this}_updatePostgresBindings(a,s){var i;const c=this.bindings.postgres_changes,d=(i=c?.length)!==null&&i!==void 0?i:0,h=[];for(let p=0;p<d;p++){const m=c[p],{filter:{event:g,schema:y,table:x,filter:k}}=m,S=a&&a[p];if(S&&S.event===g&&Ti.isFilterValueEqual(S.schema,y)&&Ti.isFilterValueEqual(S.table,x)&&Ti.isFilterValueEqual(S.filter,k))h.push(Object.assign(Object.assign({},m),{id:S.id}));else{this.unsubscribe(),this.state=Vr.errored,s?.(pr.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=h,this.state!=Vr.errored&&s&&s(pr.SUBSCRIBED)}presenceState(){return this.presence.state}async track(a,s={}){return await this.send({type:"presence",event:"track",payload:a},s.timeout||this.timeout)}async untrack(a={}){return await this.send({type:"presence",event:"untrack"},a)}on(a,s,i){const c=this.channelAdapter.isJoined()||this.channelAdapter.isJoining(),d=a===ys.PRESENCE||a===ys.POSTGRES_CHANGES;if(c&&d)throw this.socket.log("channel",`cannot add \`${a}\` callbacks for ${this.topic} after \`subscribe()\`.`),new Error(`cannot add \`${a}\` callbacks for ${this.topic} after \`subscribe()\`.`);return this._on(a,s,i)}async httpSend(a,s,i={}){var c;if(s==null)return Promise.reject("Payload is required for httpSend()");const d={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(d.Authorization=`Bearer ${this.socket.accessTokenValue}`);const h={method:"POST",headers:d,body:JSON.stringify({messages:[{topic:this.subTopic,event:a,payload:s,private:this.private}]})},p=await this._fetchWithTimeout(this.broadcastEndpointURL,h,(c=i.timeout)!==null&&c!==void 0?c:this.timeout);if(p.status===202)return{success:!0};let m=p.statusText;try{const g=await p.json();m=g.error||g.message||m}catch{}return Promise.reject(new Error(m))}async send(a,s={}){var i,c;if(!this.channelAdapter.canPush()&&a.type==="broadcast"){console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");const{event:d,payload:h}=a,p={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(p.Authorization=`Bearer ${this.socket.accessTokenValue}`);const m={method:"POST",headers:p,body:JSON.stringify({messages:[{topic:this.subTopic,event:d,payload:h,private:this.private}]})};try{const g=await this._fetchWithTimeout(this.broadcastEndpointURL,m,(i=s.timeout)!==null&&i!==void 0?i:this.timeout);return await((c=g.body)===null||c===void 0?void 0:c.cancel()),g.ok?"ok":"error"}catch(g){return g.name==="AbortError"?"timed out":"error"}}else return new Promise(d=>{var h,p,m;const g=this.channelAdapter.push(a.type,a,s.timeout||this.timeout);a.type==="broadcast"&&!(!((m=(p=(h=this.params)===null||h===void 0?void 0:h.config)===null||p===void 0?void 0:p.broadcast)===null||m===void 0)&&m.ack)&&d("ok"),g.receive("ok",()=>d("ok")),g.receive("error",()=>d("error")),g.receive("timeout",()=>d("timed out"))})}updateJoinPayload(a){this.channelAdapter.updateJoinPayload(a)}async unsubscribe(a=this.timeout){return new Promise(s=>{this.channelAdapter.unsubscribe(a).receive("ok",()=>s("ok")).receive("timeout",()=>s("timed out")).receive("error",()=>s("error"))})}teardown(){this.channelAdapter.teardown()}async _fetchWithTimeout(a,s,i){const c=new AbortController,d=setTimeout(()=>c.abort(),i),h=await this.socket.fetch(a,Object.assign(Object.assign({},s),{signal:c.signal}));return clearTimeout(d),h}_on(a,s,i){const c=a.toLocaleLowerCase(),d=this.channelAdapter.on(a,i),h={type:c,filter:s,callback:i,ref:d};return this.bindings[c]?this.bindings[c].push(h):this.bindings[c]=[h],this._updateFilterMessage(),this}_onClose(a){this.channelAdapter.onClose(a)}_onError(a){this.channelAdapter.onError(a)}_updateFilterMessage(){this.channelAdapter.updateFilterBindings((a,s,i)=>{var c,d,h,p,m,g,y;const x=a.event.toLocaleLowerCase();if(this._notThisChannelEvent(x,i))return!1;const k=(c=this.bindings[x])===null||c===void 0?void 0:c.find(S=>S.ref===a.ref);if(!k)return!0;if(["broadcast","presence","postgres_changes"].includes(x))if("id"in k){const S=k.id,N=(d=k.filter)===null||d===void 0?void 0:d.event;return S&&((h=s.ids)===null||h===void 0?void 0:h.includes(S))&&(N==="*"||N?.toLocaleLowerCase()===((p=s.data)===null||p===void 0?void 0:p.type.toLocaleLowerCase()))}else{const S=(g=(m=k?.filter)===null||m===void 0?void 0:m.event)===null||g===void 0?void 0:g.toLocaleLowerCase();return S==="*"||S===((y=s?.event)===null||y===void 0?void 0:y.toLocaleLowerCase())}else return k.type.toLocaleLowerCase()===x})}_notThisChannelEvent(a,s){const{close:i,error:c,leave:d,join:h}=Tg;return s&&[i,c,d,h].includes(a)&&s!==this.joinPush.ref}_updateFilterTransform(){this.channelAdapter.updatePayloadTransform((a,s,i)=>{if(typeof s=="object"&&"ids"in s){const c=s.data,{schema:d,table:h,commit_timestamp:p,type:m,errors:g}=c;return Object.assign(Object.assign({},{schema:d,table:h,commit_timestamp:p,eventType:m,new:{},old:{},errors:g}),this._getPayloadRecords(c))}return s})}copyBindings(a){if(this.joinedOnce)throw new Error("cannot copy bindings into joined channel");for(const s in a.bindings)for(const i of a.bindings[s])this._on(i.type,i.filter,i.callback)}static isFilterValueEqual(a,s){return(a??void 0)===(s??void 0)}_getPayloadRecords(a){const s={new:{},old:{}};return(a.type==="INSERT"||a.type==="UPDATE")&&(s.new=om(a.columns,a.record)),(a.type==="UPDATE"||a.type==="DELETE")&&(s.old=om(a.columns,a.old_record)),s}}class h5{constructor(a,s){this.socket=new i5(a,s)}get timeout(){return this.socket.timeout}get endPoint(){return this.socket.endPoint}get transport(){return this.socket.transport}get heartbeatIntervalMs(){return this.socket.heartbeatIntervalMs}get heartbeatCallback(){return this.socket.heartbeatCallback}set heartbeatCallback(a){this.socket.heartbeatCallback=a}get heartbeatTimer(){return this.socket.heartbeatTimer}get pendingHeartbeatRef(){return this.socket.pendingHeartbeatRef}get reconnectTimer(){return this.socket.reconnectTimer}get vsn(){return this.socket.vsn}get encode(){return this.socket.encode}get decode(){return this.socket.decode}get reconnectAfterMs(){return this.socket.reconnectAfterMs}get sendBuffer(){return this.socket.sendBuffer}get stateChangeCallbacks(){return this.socket.stateChangeCallbacks}connect(){this.socket.connect()}disconnect(a,s,i,c=1e4){return new Promise(d=>{setTimeout(()=>d("timeout"),c),this.socket.disconnect(()=>{a(),d("ok")},s,i)})}push(a){this.socket.push(a)}log(a,s,i){this.socket.log(a,s,i)}makeRef(){return this.socket.makeRef()}onOpen(a){this.socket.onOpen(a)}onClose(a){this.socket.onClose(a)}onError(a){this.socket.onError(a)}onMessage(a){this.socket.onMessage(a)}isConnected(){return this.socket.isConnected()}isConnecting(){return this.socket.connectionState()==gu.connecting}isDisconnecting(){return this.socket.connectionState()==gu.closing}connectionState(){return this.socket.connectionState()}endPointURL(){return this.socket.endPointURL()}sendHeartbeat(){this.socket.sendHeartbeat()}getSocket(){return this.socket}}const f5={HEARTBEAT_INTERVAL:25e3},p5=[1e3,2e3,5e3,1e4],m5=1e4,g5=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class b5{get endPoint(){return this.socketAdapter.endPoint}get timeout(){return this.socketAdapter.timeout}get transport(){return this.socketAdapter.transport}get heartbeatCallback(){return this.socketAdapter.heartbeatCallback}get heartbeatIntervalMs(){return this.socketAdapter.heartbeatIntervalMs}get heartbeatTimer(){return this.worker?this._workerHeartbeatTimer:this.socketAdapter.heartbeatTimer}get pendingHeartbeatRef(){return this.worker?this._pendingWorkerHeartbeatRef:this.socketAdapter.pendingHeartbeatRef}get reconnectTimer(){return this.socketAdapter.reconnectTimer}get vsn(){return this.socketAdapter.vsn}get encode(){return this.socketAdapter.encode}get decode(){return this.socketAdapter.decode}get reconnectAfterMs(){return this.socketAdapter.reconnectAfterMs}get sendBuffer(){return this.socketAdapter.sendBuffer}get stateChangeCallbacks(){return this.socketAdapter.stateChangeCallbacks}constructor(a,s){var i;if(this.channels=new Array,this.accessTokenValue=null,this.accessToken=null,this.apiKey=null,this.httpEndpoint="",this.headers={},this.params={},this.ref=0,this.serializer=new G1,this._manuallySetToken=!1,this._authPromise=null,this._workerHeartbeatTimer=void 0,this._pendingWorkerHeartbeatRef=null,this._resolveFetch=d=>d?(...h)=>d(...h):(...h)=>fetch(...h),!(!((i=s?.params)===null||i===void 0)&&i.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=s.params.apikey;const c=this._initializeOptions(s);this.socketAdapter=new h5(a,c),this.httpEndpoint=Rg(a),this.fetch=this._resolveFetch(s?.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.isConnected())){this.accessToken&&!this._authPromise&&this._setAuthSafely("connect"),this._setupConnectionHandlers();try{this.socketAdapter.connect()}catch(a){const s=a.message;throw s.includes("Node.js")?new Error(`${s}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):new Error(`WebSocket not available: ${s}`)}this._handleNodeJsRaceCondition()}}endpointURL(){return this.socketAdapter.endPointURL()}async disconnect(a,s){return this.isDisconnecting()?"ok":await this.socketAdapter.disconnect(()=>{clearInterval(this._workerHeartbeatTimer),this._terminateWorker()},a,s)}getChannels(){return this.channels}async removeChannel(a){const s=await a.unsubscribe();return s==="ok"&&a.teardown(),this.channels.length===0&&this.disconnect(),s}async removeAllChannels(){const a=this.channels.map(async i=>{const c=await i.unsubscribe();return i.teardown(),c}),s=await Promise.all(a);return this.disconnect(),s}log(a,s,i){this.socketAdapter.log(a,s,i)}connectionState(){return this.socketAdapter.connectionState()||gu.closed}isConnected(){return this.socketAdapter.isConnected()}isConnecting(){return this.socketAdapter.isConnecting()}isDisconnecting(){return this.socketAdapter.isDisconnecting()}channel(a,s={config:{}}){const i=`realtime:${a}`,c=this.getChannels().find(d=>d.topic===i);if(c)return c;{const d=new Ti(`realtime:${a}`,s,this);return this.channels.push(d),d}}push(a){this.socketAdapter.push(a)}async setAuth(a=null){this._authPromise=this._performAuth(a);try{await this._authPromise}finally{this._authPromise=null}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){this.socketAdapter.sendHeartbeat()}onHeartbeat(a){this.socketAdapter.heartbeatCallback=this._wrapHeartbeatCallback(a)}_makeRef(){return this.socketAdapter.makeRef()}_remove(a){this.channels=this.channels.filter(s=>s.topic!==a.topic)}async _performAuth(a=null){let s,i=!1;if(a)s=a,i=!0;else if(this.accessToken)try{s=await this.accessToken()}catch(c){this.log("error","Error fetching access token from callback",c),s=this.accessTokenValue}else s=this.accessTokenValue;i?this._manuallySetToken=!0:this.accessToken&&(this._manuallySetToken=!1),this.accessTokenValue!=s&&(this.accessTokenValue=s,this.channels.forEach(c=>{const d={access_token:s,version:$1};s&&c.updateJoinPayload(d),c.joinedOnce&&c.channelAdapter.isJoined()&&c.channelAdapter.push(Tg.access_token,{access_token:s})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(a="general"){this._isManualToken()||this.setAuth().catch(s=>{this.log("error",`Error setting auth in ${a}`,s)})}_setupConnectionHandlers(){this.socketAdapter.onOpen(()=>{(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).catch(s=>{this.log("error","error waiting for auth on connect",s)}),this.worker&&!this.workerRef&&this._startWorkerHeartbeat()}),this.socketAdapter.onClose(()=>{this.worker&&this.workerRef&&this._terminateWorker()}),this.socketAdapter.onMessage(a=>{a.ref&&a.ref===this._pendingWorkerHeartbeatRef&&(this._pendingWorkerHeartbeatRef=null)})}_handleNodeJsRaceCondition(){this.socketAdapter.isConnected()&&this.socketAdapter.getSocket().onConnOpen()}_wrapHeartbeatCallback(a){return(s,i)=>{s=="sent"&&this._setAuthSafely(),a&&a(s,i)}}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const a=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(a),this.workerRef.onerror=s=>{this.log("worker","worker error",s.message),this._terminateWorker(),this.disconnect()},this.workerRef.onmessage=s=>{s.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&(this.log("worker","terminating worker"),this.workerRef.terminate(),this.workerRef=void 0)}_workerObjectUrl(a){let s;if(a)s=a;else{const i=new Blob([g5],{type:"application/javascript"});s=URL.createObjectURL(i)}return s}_initializeOptions(a){var s,i,c,d,h,p,m,g,y;this.worker=(s=a?.worker)!==null&&s!==void 0?s:!1,this.accessToken=(i=a?.accessToken)!==null&&i!==void 0?i:null;const x={};x.timeout=(c=a?.timeout)!==null&&c!==void 0?c:I1,x.heartbeatIntervalMs=(d=a?.heartbeatIntervalMs)!==null&&d!==void 0?d:f5.HEARTBEAT_INTERVAL,x.transport=(h=a?.transport)!==null&&h!==void 0?h:B1.getWebSocketConstructor(),x.params=a?.params,x.logger=a?.logger,x.heartbeatCallback=this._wrapHeartbeatCallback(a?.heartbeatCallback),x.reconnectAfterMs=(p=a?.reconnectAfterMs)!==null&&p!==void 0?p:(C=>p5[C-1]||m5);let k,S;const N=(m=a?.vsn)!==null&&m!==void 0?m:q1;switch(N){case P1:k=(C,E)=>E(JSON.stringify(C)),S=(C,E)=>E(JSON.parse(C));break;case Cg:k=this.serializer.encode.bind(this.serializer),S=this.serializer.decode.bind(this.serializer);break;default:throw new Error(`Unsupported serializer version: ${x.vsn}`)}if(x.vsn=N,x.encode=(g=a?.encode)!==null&&g!==void 0?g:k,x.decode=(y=a?.decode)!==null&&y!==void 0?y:S,x.beforeReconnect=this._reconnectAuth.bind(this),(a?.logLevel||a?.log_level)&&(this.logLevel=a.logLevel||a.log_level,x.params=Object.assign(Object.assign({},x.params),{log_level:this.logLevel})),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=a?.workerUrl,x.autoSendHeartbeat=!this.worker}return x}async _reconnectAuth(){await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()}}var Di=class extends Error{constructor(r,a){super(r),this.name="IcebergError",this.status=a.status,this.icebergType=a.icebergType,this.icebergCode=a.icebergCode,this.details=a.details,this.isCommitStateUnknown=a.icebergType==="CommitStateUnknownException"||[500,502,504].includes(a.status)&&a.icebergType?.includes("CommitState")===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function x5(r,a,s){const i=new URL(a,r);if(s)for(const[c,d]of Object.entries(s))d!==void 0&&i.searchParams.set(c,d);return i.toString()}async function y5(r){return!r||r.type==="none"?{}:r.type==="bearer"?{Authorization:`Bearer ${r.token}`}:r.type==="header"?{[r.name]:r.value}:r.type==="custom"?await r.getHeaders():{}}function v5(r){const a=r.fetchImpl??globalThis.fetch;return{async request({method:s,path:i,query:c,body:d,headers:h}){const p=x5(r.baseUrl,i,c),m=await y5(r.auth),g=await a(p,{method:s,headers:{...d?{"Content-Type":"application/json"}:{},...m,...h},body:d?JSON.stringify(d):void 0}),y=await g.text(),x=(g.headers.get("content-type")||"").includes("application/json"),k=x&&y?JSON.parse(y):y;if(!g.ok){const S=x?k:void 0,N=S?.error;throw new Di(N?.message??`Request failed with status ${g.status}`,{status:g.status,icebergType:N?.type,icebergCode:N?.code,details:S})}return{status:g.status,headers:g.headers,data:k}}}}function cl(r){return r.join("")}var w5=class{constructor(r,a=""){this.client=r,this.prefix=a}async listNamespaces(r){const a=r?{parent:cl(r.namespace)}:void 0;return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces`,query:a})).data.namespaces.map(i=>({namespace:i}))}async createNamespace(r,a){const s={namespace:r.namespace,properties:a?.properties};return(await this.client.request({method:"POST",path:`${this.prefix}/namespaces`,body:s})).data}async dropNamespace(r){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${cl(r.namespace)}`})}async loadNamespaceMetadata(r){return{properties:(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${cl(r.namespace)}`})).data.properties}}async namespaceExists(r){try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${cl(r.namespace)}`}),!0}catch(a){if(a instanceof Di&&a.status===404)return!1;throw a}}async createNamespaceIfNotExists(r,a){try{return await this.createNamespace(r,a)}catch(s){if(s instanceof Di&&s.status===409)return;throw s}}};function cs(r){return r.join("")}var k5=class{constructor(r,a="",s){this.client=r,this.prefix=a,this.accessDelegation=s}async listTables(r){return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${cs(r.namespace)}/tables`})).data.identifiers}async createTable(r,a){const s={};return this.accessDelegation&&(s["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${cs(r.namespace)}/tables`,body:a,headers:s})).data.metadata}async updateTable(r,a){const s=await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${cs(r.namespace)}/tables/${r.name}`,body:a});return{"metadata-location":s.data["metadata-location"],metadata:s.data.metadata}}async dropTable(r,a){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${cs(r.namespace)}/tables/${r.name}`,query:{purgeRequested:String(a?.purge??!1)}})}async loadTable(r){const a={};return this.accessDelegation&&(a["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${cs(r.namespace)}/tables/${r.name}`,headers:a})).data.metadata}async tableExists(r){const a={};this.accessDelegation&&(a["X-Iceberg-Access-Delegation"]=this.accessDelegation);try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${cs(r.namespace)}/tables/${r.name}`,headers:a}),!0}catch(s){if(s instanceof Di&&s.status===404)return!1;throw s}}async createTableIfNotExists(r,a){try{return await this.createTable(r,a)}catch(s){if(s instanceof Di&&s.status===409)return await this.loadTable({namespace:r.namespace,name:a.name});throw s}}},S5=class{constructor(r){let a="v1";r.catalogName&&(a+=`/${r.catalogName}`);const s=r.baseUrl.endsWith("/")?r.baseUrl:`${r.baseUrl}/`;this.client=v5({baseUrl:s,auth:r.auth,fetchImpl:r.fetch}),this.accessDelegation=r.accessDelegation?.join(","),this.namespaceOps=new w5(this.client,a),this.tableOps=new k5(this.client,a,this.accessDelegation)}async listNamespaces(r){return this.namespaceOps.listNamespaces(r)}async createNamespace(r,a){return this.namespaceOps.createNamespace(r,a)}async dropNamespace(r){await this.namespaceOps.dropNamespace(r)}async loadNamespaceMetadata(r){return this.namespaceOps.loadNamespaceMetadata(r)}async listTables(r){return this.tableOps.listTables(r)}async createTable(r,a){return this.tableOps.createTable(r,a)}async updateTable(r,a){return this.tableOps.updateTable(r,a)}async dropTable(r,a){await this.tableOps.dropTable(r,a)}async loadTable(r){return this.tableOps.loadTable(r)}async namespaceExists(r){return this.namespaceOps.namespaceExists(r)}async tableExists(r){return this.tableOps.tableExists(r)}async createNamespaceIfNotExists(r,a){return this.namespaceOps.createNamespaceIfNotExists(r,a)}async createTableIfNotExists(r,a){return this.tableOps.createTableIfNotExists(r,a)}},zl=class extends Error{constructor(r,a="storage",s,i){super(r),this.__isStorageError=!0,this.namespace=a,this.name=a==="vectors"?"StorageVectorsError":"StorageError",this.status=s,this.statusCode=i}};function Ol(r){return typeof r=="object"&&r!==null&&"__isStorageError"in r}var vu=class extends zl{constructor(r,a,s,i="storage"){super(r,i,a,s),this.name=i==="vectors"?"StorageVectorsApiError":"StorageApiError",this.status=a,this.statusCode=s}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}},Og=class extends zl{constructor(r,a,s="storage"){super(r,s),this.name=s==="vectors"?"StorageVectorsUnknownError":"StorageUnknownError",this.originalError=a}};const j5=r=>r?(...a)=>r(...a):(...a)=>fetch(...a),_5=r=>{if(typeof r!="object"||r===null)return!1;const a=Object.getPrototypeOf(r);return(a===null||a===Object.prototype||Object.getPrototypeOf(a)===null)&&!(Symbol.toStringTag in r)&&!(Symbol.iterator in r)},wu=r=>{if(Array.isArray(r))return r.map(s=>wu(s));if(typeof r=="function"||r!==Object(r))return r;const a={};return Object.entries(r).forEach(([s,i])=>{const c=s.replace(/([-_][a-z])/gi,d=>d.toUpperCase().replace(/[-_]/g,""));a[c]=wu(i)}),a},E5=r=>!r||typeof r!="string"||r.length===0||r.length>100||r.trim()!==r||r.includes("/")||r.includes("\\")?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(r);function Mi(r){"@babel/helpers - typeof";return Mi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},Mi(r)}function N5(r,a){if(Mi(r)!="object"||!r)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var i=s.call(r,a);if(Mi(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(r)}function C5(r){var a=N5(r,"string");return Mi(a)=="symbol"?a:a+""}function T5(r,a,s){return(a=C5(a))in r?Object.defineProperty(r,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[a]=s,r}function um(r,a){var s=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);a&&(i=i.filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable})),s.push.apply(s,i)}return s}function be(r){for(var a=1;a<arguments.length;a++){var s=arguments[a]!=null?arguments[a]:{};a%2?um(Object(s),!0).forEach(function(i){T5(r,i,s[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(s)):um(Object(s)).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(s,i))})}return r}const hm=r=>{var a;return r.msg||r.message||r.error_description||(typeof r.error=="string"?r.error:(a=r.error)===null||a===void 0?void 0:a.message)||JSON.stringify(r)},A5=async(r,a,s,i)=>{if(r!==null&&typeof r=="object"&&typeof r.json=="function"){const c=r;let d=parseInt(c.status,10);Number.isFinite(d)||(d=500),c.json().then(h=>{const p=h?.statusCode||h?.code||d+"";a(new vu(hm(h),d,p,i))}).catch(()=>{const h=d+"";a(new vu(c.statusText||`HTTP ${d} error`,d,h,i))})}else a(new Og(hm(r),r,i))},R5=(r,a,s,i)=>{const c={method:r,headers:a?.headers||{}};if(r==="GET"||r==="HEAD"||!i)return be(be({},c),s);if(_5(i)){var d;const h=a?.headers||{};let p;for(const[m,g]of Object.entries(h))m.toLowerCase()==="content-type"&&(p=g);c.headers=z5(h,"Content-Type",(d=p)!==null&&d!==void 0?d:"application/json"),c.body=JSON.stringify(i)}else c.body=i;return a?.duplex&&(c.duplex=a.duplex),be(be({},c),s)};function z5(r,a,s){const i=be({},r);for(const c of Object.keys(i))c.toLowerCase()===a.toLowerCase()&&delete i[c];return i[a]=s,i}async function ki(r,a,s,i,c,d,h){return new Promise((p,m)=>{r(s,R5(a,i,c,d)).then(g=>{if(!g.ok)throw g;if(i?.noResolveJson)return g;if(h==="vectors"){const y=g.headers.get("content-type");if(g.headers.get("content-length")==="0"||g.status===204)return{};if(!y||!y.includes("application/json"))return{}}return g.json()}).then(g=>p(g)).catch(g=>A5(g,m,i,h))})}function Dg(r="storage"){return{get:async(a,s,i,c)=>ki(a,"GET",s,i,c,void 0,r),post:async(a,s,i,c,d)=>ki(a,"POST",s,c,d,i,r),put:async(a,s,i,c,d)=>ki(a,"PUT",s,c,d,i,r),head:async(a,s,i,c)=>ki(a,"HEAD",s,be(be({},i),{},{noResolveJson:!0}),c,void 0,r),remove:async(a,s,i,c,d)=>ki(a,"DELETE",s,c,d,i,r)}}const O5=Dg("storage"),{get:Li,post:za,put:ku,head:D5,remove:$u}=O5,la=Dg("vectors");var Ns=class{constructor(r,a={},s,i="storage"){this.shouldThrowOnError=!1,this.url=r,this.headers=Object.fromEntries(Object.entries(a).map(([c,d])=>[c.toLowerCase(),d])),this.fetch=j5(s),this.namespace=i}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(r,a){return this.headers=be(be({},this.headers),{},{[r.toLowerCase()]:a}),this}async handleOperation(r){var a=this;try{return{data:await r(),error:null}}catch(s){if(a.shouldThrowOnError)throw s;if(Ol(s))return{data:null,error:s};throw s}}},M5=class{constructor(r,a){this.downloadFn=r,this.shouldThrowOnError=a}then(r,a){return this.execute().then(r,a)}async execute(){var r=this;try{return{data:(await r.downloadFn()).body,error:null}}catch(a){if(r.shouldThrowOnError)throw a;if(Ol(a))return{data:null,error:a};throw a}}};let Mg;Mg=Symbol.toStringTag;var L5=class{constructor(r,a){this.downloadFn=r,this.shouldThrowOnError=a,this[Mg]="BlobDownloadBuilder",this.promise=null}asStream(){return new M5(this.downloadFn,this.shouldThrowOnError)}then(r,a){return this.getPromise().then(r,a)}catch(r){return this.getPromise().catch(r)}finally(r){return this.getPromise().finally(r)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var r=this;try{return{data:await(await r.downloadFn()).blob(),error:null}}catch(a){if(r.shouldThrowOnError)throw a;if(Ol(a))return{data:null,error:a};throw a}}};const U5={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},fm={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};var B5=class extends Ns{constructor(r,a={},s,i){super(r,a,i,"storage"),this.bucketId=s}async uploadOrUpdate(r,a,s,i){var c=this;return c.handleOperation(async()=>{let d;const h=be(be({},fm),i);let p=be(be({},c.headers),r==="POST"&&{"x-upsert":String(h.upsert)});const m=h.metadata;typeof Blob<"u"&&s instanceof Blob?(d=new FormData,d.append("cacheControl",h.cacheControl),m&&d.append("metadata",c.encodeMetadata(m)),d.append("",s)):typeof FormData<"u"&&s instanceof FormData?(d=s,d.has("cacheControl")||d.append("cacheControl",h.cacheControl),m&&!d.has("metadata")&&d.append("metadata",c.encodeMetadata(m))):(d=s,p["cache-control"]=`max-age=${h.cacheControl}`,p["content-type"]=h.contentType,m&&(p["x-metadata"]=c.toBase64(c.encodeMetadata(m))),(typeof ReadableStream<"u"&&d instanceof ReadableStream||d&&typeof d=="object"&&"pipe"in d&&typeof d.pipe=="function")&&!h.duplex&&(h.duplex="half")),i?.headers&&(p=be(be({},p),i.headers));const g=c._removeEmptyFolders(a),y=c._getFinalPath(g),x=await(r=="PUT"?ku:za)(c.fetch,`${c.url}/object/${y}`,d,be({headers:p},h?.duplex?{duplex:h.duplex}:{}));return{path:g,id:x.Id,fullPath:x.Key}})}async upload(r,a,s){return this.uploadOrUpdate("POST",r,a,s)}async uploadToSignedUrl(r,a,s,i){var c=this;const d=c._removeEmptyFolders(r),h=c._getFinalPath(d),p=new URL(c.url+`/object/upload/sign/${h}`);return p.searchParams.set("token",a),c.handleOperation(async()=>{let m;const g=be(be({},fm),i),y=be(be({},c.headers),{"x-upsert":String(g.upsert)});return typeof Blob<"u"&&s instanceof Blob?(m=new FormData,m.append("cacheControl",g.cacheControl),m.append("",s)):typeof FormData<"u"&&s instanceof FormData?(m=s,m.append("cacheControl",g.cacheControl)):(m=s,y["cache-control"]=`max-age=${g.cacheControl}`,y["content-type"]=g.contentType),{path:d,fullPath:(await ku(c.fetch,p.toString(),m,{headers:y})).Key}})}async createSignedUploadUrl(r,a){var s=this;return s.handleOperation(async()=>{let i=s._getFinalPath(r);const c=be({},s.headers);a?.upsert&&(c["x-upsert"]="true");const d=await za(s.fetch,`${s.url}/object/upload/sign/${i}`,{},{headers:c}),h=new URL(s.url+d.url),p=h.searchParams.get("token");if(!p)throw new zl("No token returned by API");return{signedUrl:h.toString(),path:r,token:p}})}async update(r,a,s){return this.uploadOrUpdate("PUT",r,a,s)}async move(r,a,s){var i=this;return i.handleOperation(async()=>await za(i.fetch,`${i.url}/object/move`,{bucketId:i.bucketId,sourceKey:r,destinationKey:a,destinationBucket:s?.destinationBucket},{headers:i.headers}))}async copy(r,a,s){var i=this;return i.handleOperation(async()=>({path:(await za(i.fetch,`${i.url}/object/copy`,{bucketId:i.bucketId,sourceKey:r,destinationKey:a,destinationBucket:s?.destinationBucket},{headers:i.headers})).Key}))}async createSignedUrl(r,a,s){var i=this;return i.handleOperation(async()=>{let c=i._getFinalPath(r);const d=typeof s?.transform=="object"&&s.transform!==null&&Object.keys(s.transform).length>0;let h=await za(i.fetch,`${i.url}/object/sign/${c}`,be({expiresIn:a},d?{transform:s.transform}:{}),{headers:i.headers});const p=new URLSearchParams;s?.download&&p.set("download",s.download===!0?"":s.download),s?.cacheNonce!=null&&p.set("cacheNonce",String(s.cacheNonce));const m=p.toString(),g=d&&h.signedURL.includes("/object/sign/")?h.signedURL.replace("/object/sign/","/render/image/sign/"):h.signedURL;return{signedUrl:encodeURI(`${i.url}${g}${m?`&${m}`:""}`)}})}async createSignedUrls(r,a,s){var i=this;return i.handleOperation(async()=>{const c=await za(i.fetch,`${i.url}/object/sign/${i.bucketId}`,{expiresIn:a,paths:r},{headers:i.headers}),d=new URLSearchParams;s?.download&&d.set("download",s.download===!0?"":s.download),s?.cacheNonce!=null&&d.set("cacheNonce",String(s.cacheNonce));const h=d.toString();return c.map(p=>be(be({},p),{},{signedUrl:p.signedURL?encodeURI(`${i.url}${p.signedURL}${h?`&${h}`:""}`):null}))})}download(r,a,s){const i=typeof a?.transform<"u"?"render/image/authenticated":"object",c=new URLSearchParams;a?.transform&&this.applyTransformOptsToQuery(c,a.transform),a?.cacheNonce!=null&&c.set("cacheNonce",String(a.cacheNonce));const d=c.toString(),h=this._getFinalPath(r),p=()=>Li(this.fetch,`${this.url}/${i}/${h}${d?`?${d}`:""}`,{headers:this.headers,noResolveJson:!0},s);return new L5(p,this.shouldThrowOnError)}async info(r){var a=this;const s=a._getFinalPath(r);return a.handleOperation(async()=>wu(await Li(a.fetch,`${a.url}/object/info/${s}`,{headers:a.headers})))}async exists(r){var a=this;const s=a._getFinalPath(r);try{return await D5(a.fetch,`${a.url}/object/${s}`,{headers:a.headers}),{data:!0,error:null}}catch(c){if(a.shouldThrowOnError)throw c;if(Ol(c)){var i;const d=c instanceof vu?c.status:c instanceof Og?(i=c.originalError)===null||i===void 0?void 0:i.status:void 0;if(d!==void 0&&[400,404].includes(d))return{data:!1,error:c}}throw c}}getPublicUrl(r,a){const s=this._getFinalPath(r),i=new URLSearchParams;a?.download&&i.set("download",a.download===!0?"":a.download),a?.transform&&this.applyTransformOptsToQuery(i,a.transform),a?.cacheNonce!=null&&i.set("cacheNonce",String(a.cacheNonce));const c=i.toString(),d=typeof a?.transform<"u"?"render/image":"object";return{data:{publicUrl:encodeURI(`${this.url}/${d}/public/${s}`)+(c?`?${c}`:"")}}}async remove(r){var a=this;return a.handleOperation(async()=>await $u(a.fetch,`${a.url}/object/${a.bucketId}`,{prefixes:r},{headers:a.headers}))}async list(r,a,s){var i=this;return i.handleOperation(async()=>{const c=be(be(be({},U5),a),{},{prefix:r||""});return await za(i.fetch,`${i.url}/object/list/${i.bucketId}`,c,{headers:i.headers},s)})}async listV2(r,a){var s=this;return s.handleOperation(async()=>{const i=be({},r);return await za(s.fetch,`${s.url}/object/list-v2/${s.bucketId}`,i,{headers:s.headers},a)})}encodeMetadata(r){return JSON.stringify(r)}toBase64(r){return typeof Buffer<"u"?Buffer.from(r).toString("base64"):btoa(r)}_getFinalPath(r){return`${this.bucketId}/${r.replace(/^\/+/,"")}`}_removeEmptyFolders(r){return r.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}applyTransformOptsToQuery(r,a){return a.width&&r.set("width",a.width.toString()),a.height&&r.set("height",a.height.toString()),a.resize&&r.set("resize",a.resize),a.format&&r.set("format",a.format),a.quality&&r.set("quality",a.quality.toString()),r}};const H5="2.103.0",Yi={"X-Client-Info":`storage-js/${H5}`};var $5=class extends Ns{constructor(r,a={},s,i){const c=new URL(r);i?.useNewHostname&&/supabase\.(co|in|red)$/.test(c.hostname)&&!c.hostname.includes("storage.supabase.")&&(c.hostname=c.hostname.replace("supabase.","storage.supabase."));const d=c.href.replace(/\/$/,""),h=be(be({},Yi),a);super(d,h,s,"storage")}async listBuckets(r){var a=this;return a.handleOperation(async()=>{const s=a.listBucketOptionsToQueryString(r);return await Li(a.fetch,`${a.url}/bucket${s}`,{headers:a.headers})})}async getBucket(r){var a=this;return a.handleOperation(async()=>await Li(a.fetch,`${a.url}/bucket/${r}`,{headers:a.headers}))}async createBucket(r,a={public:!1}){var s=this;return s.handleOperation(async()=>await za(s.fetch,`${s.url}/bucket`,{id:r,name:r,type:a.type,public:a.public,file_size_limit:a.fileSizeLimit,allowed_mime_types:a.allowedMimeTypes},{headers:s.headers}))}async updateBucket(r,a){var s=this;return s.handleOperation(async()=>await ku(s.fetch,`${s.url}/bucket/${r}`,{id:r,name:r,public:a.public,file_size_limit:a.fileSizeLimit,allowed_mime_types:a.allowedMimeTypes},{headers:s.headers}))}async emptyBucket(r){var a=this;return a.handleOperation(async()=>await za(a.fetch,`${a.url}/bucket/${r}/empty`,{},{headers:a.headers}))}async deleteBucket(r){var a=this;return a.handleOperation(async()=>await $u(a.fetch,`${a.url}/bucket/${r}`,{},{headers:a.headers}))}listBucketOptionsToQueryString(r){const a={};return r&&("limit"in r&&(a.limit=String(r.limit)),"offset"in r&&(a.offset=String(r.offset)),r.search&&(a.search=r.search),r.sortColumn&&(a.sortColumn=r.sortColumn),r.sortOrder&&(a.sortOrder=r.sortOrder)),Object.keys(a).length>0?"?"+new URLSearchParams(a).toString():""}},P5=class extends Ns{constructor(r,a={},s){const i=r.replace(/\/$/,""),c=be(be({},Yi),a);super(i,c,s,"storage")}async createBucket(r){var a=this;return a.handleOperation(async()=>await za(a.fetch,`${a.url}/bucket`,{name:r},{headers:a.headers}))}async listBuckets(r){var a=this;return a.handleOperation(async()=>{const s=new URLSearchParams;r?.limit!==void 0&&s.set("limit",r.limit.toString()),r?.offset!==void 0&&s.set("offset",r.offset.toString()),r?.sortColumn&&s.set("sortColumn",r.sortColumn),r?.sortOrder&&s.set("sortOrder",r.sortOrder),r?.search&&s.set("search",r.search);const i=s.toString(),c=i?`${a.url}/bucket?${i}`:`${a.url}/bucket`;return await Li(a.fetch,c,{headers:a.headers})})}async deleteBucket(r){var a=this;return a.handleOperation(async()=>await $u(a.fetch,`${a.url}/bucket/${r}`,{},{headers:a.headers}))}from(r){var a=this;if(!E5(r))throw new zl("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");const s=new S5({baseUrl:this.url,catalogName:r,auth:{type:"custom",getHeaders:async()=>a.headers},fetch:this.fetch}),i=this.shouldThrowOnError;return new Proxy(s,{get(c,d){const h=c[d];return typeof h!="function"?h:async(...p)=>{try{return{data:await h.apply(c,p),error:null}}catch(m){if(i)throw m;return{data:null,error:m}}}}})}},q5=class extends Ns{constructor(r,a={},s){const i=r.replace(/\/$/,""),c=be(be({},Yi),{},{"Content-Type":"application/json"},a);super(i,c,s,"vectors")}async createIndex(r){var a=this;return a.handleOperation(async()=>await la.post(a.fetch,`${a.url}/CreateIndex`,r,{headers:a.headers})||{})}async getIndex(r,a){var s=this;return s.handleOperation(async()=>await la.post(s.fetch,`${s.url}/GetIndex`,{vectorBucketName:r,indexName:a},{headers:s.headers}))}async listIndexes(r){var a=this;return a.handleOperation(async()=>await la.post(a.fetch,`${a.url}/ListIndexes`,r,{headers:a.headers}))}async deleteIndex(r,a){var s=this;return s.handleOperation(async()=>await la.post(s.fetch,`${s.url}/DeleteIndex`,{vectorBucketName:r,indexName:a},{headers:s.headers})||{})}},I5=class extends Ns{constructor(r,a={},s){const i=r.replace(/\/$/,""),c=be(be({},Yi),{},{"Content-Type":"application/json"},a);super(i,c,s,"vectors")}async putVectors(r){var a=this;if(r.vectors.length<1||r.vectors.length>500)throw new Error("Vector batch size must be between 1 and 500 items");return a.handleOperation(async()=>await la.post(a.fetch,`${a.url}/PutVectors`,r,{headers:a.headers})||{})}async getVectors(r){var a=this;return a.handleOperation(async()=>await la.post(a.fetch,`${a.url}/GetVectors`,r,{headers:a.headers}))}async listVectors(r){var a=this;if(r.segmentCount!==void 0){if(r.segmentCount<1||r.segmentCount>16)throw new Error("segmentCount must be between 1 and 16");if(r.segmentIndex!==void 0&&(r.segmentIndex<0||r.segmentIndex>=r.segmentCount))throw new Error(`segmentIndex must be between 0 and ${r.segmentCount-1}`)}return a.handleOperation(async()=>await la.post(a.fetch,`${a.url}/ListVectors`,r,{headers:a.headers}))}async queryVectors(r){var a=this;return a.handleOperation(async()=>await la.post(a.fetch,`${a.url}/QueryVectors`,r,{headers:a.headers}))}async deleteVectors(r){var a=this;if(r.keys.length<1||r.keys.length>500)throw new Error("Keys batch size must be between 1 and 500 items");return a.handleOperation(async()=>await la.post(a.fetch,`${a.url}/DeleteVectors`,r,{headers:a.headers})||{})}},Y5=class extends Ns{constructor(r,a={},s){const i=r.replace(/\/$/,""),c=be(be({},Yi),{},{"Content-Type":"application/json"},a);super(i,c,s,"vectors")}async createBucket(r){var a=this;return a.handleOperation(async()=>await la.post(a.fetch,`${a.url}/CreateVectorBucket`,{vectorBucketName:r},{headers:a.headers})||{})}async getBucket(r){var a=this;return a.handleOperation(async()=>await la.post(a.fetch,`${a.url}/GetVectorBucket`,{vectorBucketName:r},{headers:a.headers}))}async listBuckets(r={}){var a=this;return a.handleOperation(async()=>await la.post(a.fetch,`${a.url}/ListVectorBuckets`,r,{headers:a.headers}))}async deleteBucket(r){var a=this;return a.handleOperation(async()=>await la.post(a.fetch,`${a.url}/DeleteVectorBucket`,{vectorBucketName:r},{headers:a.headers})||{})}},G5=class extends Y5{constructor(r,a={}){super(r,a.headers||{},a.fetch)}from(r){return new V5(this.url,this.headers,r,this.fetch)}async createBucket(r){var a=()=>super.createBucket,s=this;return a().call(s,r)}async getBucket(r){var a=()=>super.getBucket,s=this;return a().call(s,r)}async listBuckets(r={}){var a=()=>super.listBuckets,s=this;return a().call(s,r)}async deleteBucket(r){var a=()=>super.deleteBucket,s=this;return a().call(s,r)}},V5=class extends q5{constructor(r,a,s,i){super(r,a,i),this.vectorBucketName=s}async createIndex(r){var a=()=>super.createIndex,s=this;return a().call(s,be(be({},r),{},{vectorBucketName:s.vectorBucketName}))}async listIndexes(r={}){var a=()=>super.listIndexes,s=this;return a().call(s,be(be({},r),{},{vectorBucketName:s.vectorBucketName}))}async getIndex(r){var a=()=>super.getIndex,s=this;return a().call(s,s.vectorBucketName,r)}async deleteIndex(r){var a=()=>super.deleteIndex,s=this;return a().call(s,s.vectorBucketName,r)}index(r){return new X5(this.url,this.headers,this.vectorBucketName,r,this.fetch)}},X5=class extends I5{constructor(r,a,s,i,c){super(r,a,c),this.vectorBucketName=s,this.indexName=i}async putVectors(r){var a=()=>super.putVectors,s=this;return a().call(s,be(be({},r),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}async getVectors(r){var a=()=>super.getVectors,s=this;return a().call(s,be(be({},r),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}async listVectors(r={}){var a=()=>super.listVectors,s=this;return a().call(s,be(be({},r),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}async queryVectors(r){var a=()=>super.queryVectors,s=this;return a().call(s,be(be({},r),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}async deleteVectors(r){var a=()=>super.deleteVectors,s=this;return a().call(s,be(be({},r),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}},K5=class extends $5{constructor(r,a={},s,i){super(r,a,s,i)}from(r){return new B5(this.url,this.headers,r,this.fetch)}get vectors(){return new G5(this.url+"/vector",{headers:this.headers,fetch:this.fetch})}get analytics(){return new P5(this.url+"/iceberg",this.headers,this.fetch)}};const Lg="2.103.0",gs=30*1e3,Su=3,eu=Su*gs,F5="http://localhost:9999",J5="supabase.auth.token",W5={"X-Client-Info":`gotrue-js/${Lg}`},ju="X-Supabase-Api-Version",Ug={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},Z5=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,Q5=600*1e3;class Ui extends Error{constructor(a,s,i){super(a),this.__isAuthError=!0,this.name="AuthError",this.status=s,this.code=i}}function oe(r){return typeof r=="object"&&r!==null&&"__isAuthError"in r}class ew extends Ui{constructor(a,s,i){super(a,s,i),this.name="AuthApiError",this.status=s,this.code=i}}function tw(r){return oe(r)&&r.name==="AuthApiError"}class yn extends Ui{constructor(a,s){super(a),this.name="AuthUnknownError",this.originalError=s}}class xr extends Ui{constructor(a,s,i,c){super(a,i,c),this.name=s,this.status=i}}class oa extends xr{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function dl(r){return oe(r)&&r.name==="AuthSessionMissingError"}class ds extends xr{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class ul extends xr{constructor(a){super(a,"AuthInvalidCredentialsError",400,void 0)}}class hl extends xr{constructor(a,s=null){super(a,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=s}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}function aw(r){return oe(r)&&r.name==="AuthImplicitGrantRedirectError"}class pm extends xr{constructor(a,s=null){super(a,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=s}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class rw extends xr{constructor(){super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.","AuthPKCECodeVerifierMissingError",400,"pkce_code_verifier_not_found")}}class _u extends xr{constructor(a,s){super(a,"AuthRetryableFetchError",s,void 0)}}function tu(r){return oe(r)&&r.name==="AuthRetryableFetchError"}class mm extends xr{constructor(a,s,i){super(a,"AuthWeakPasswordError",s,"weak_password"),this.reasons=i}}class Eu extends xr{constructor(a){super(a,"AuthInvalidJwtError",400,"invalid_jwt")}}const Sl="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),gm=` 	
\r=`.split(""),nw=(()=>{const r=new Array(128);for(let a=0;a<r.length;a+=1)r[a]=-1;for(let a=0;a<gm.length;a+=1)r[gm[a].charCodeAt(0)]=-2;for(let a=0;a<Sl.length;a+=1)r[Sl[a].charCodeAt(0)]=a;return r})();function bm(r,a,s){if(r!==null)for(a.queue=a.queue<<8|r,a.queuedBits+=8;a.queuedBits>=6;){const i=a.queue>>a.queuedBits-6&63;s(Sl[i]),a.queuedBits-=6}else if(a.queuedBits>0)for(a.queue=a.queue<<6-a.queuedBits,a.queuedBits=6;a.queuedBits>=6;){const i=a.queue>>a.queuedBits-6&63;s(Sl[i]),a.queuedBits-=6}}function Bg(r,a,s){const i=nw[r];if(i>-1)for(a.queue=a.queue<<6|i,a.queuedBits+=6;a.queuedBits>=8;)s(a.queue>>a.queuedBits-8&255),a.queuedBits-=8;else{if(i===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(r)}"`)}}function xm(r){const a=[],s=h=>{a.push(String.fromCodePoint(h))},i={utf8seq:0,codepoint:0},c={queue:0,queuedBits:0},d=h=>{ow(h,i,s)};for(let h=0;h<r.length;h+=1)Bg(r.charCodeAt(h),c,d);return a.join("")}function sw(r,a){if(r<=127){a(r);return}else if(r<=2047){a(192|r>>6),a(128|r&63);return}else if(r<=65535){a(224|r>>12),a(128|r>>6&63),a(128|r&63);return}else if(r<=1114111){a(240|r>>18),a(128|r>>12&63),a(128|r>>6&63),a(128|r&63);return}throw new Error(`Unrecognized Unicode codepoint: ${r.toString(16)}`)}function iw(r,a){for(let s=0;s<r.length;s+=1){let i=r.charCodeAt(s);if(i>55295&&i<=56319){const c=(i-55296)*1024&65535;i=(r.charCodeAt(s+1)-56320&65535|c)+65536,s+=1}sw(i,a)}}function ow(r,a,s){if(a.utf8seq===0){if(r<=127){s(r);return}for(let i=1;i<6;i+=1)if((r>>7-i&1)===0){a.utf8seq=i;break}if(a.utf8seq===2)a.codepoint=r&31;else if(a.utf8seq===3)a.codepoint=r&15;else if(a.utf8seq===4)a.codepoint=r&7;else throw new Error("Invalid UTF-8 sequence");a.utf8seq-=1}else if(a.utf8seq>0){if(r<=127)throw new Error("Invalid UTF-8 sequence");a.codepoint=a.codepoint<<6|r&63,a.utf8seq-=1,a.utf8seq===0&&s(a.codepoint)}}function vs(r){const a=[],s={queue:0,queuedBits:0},i=c=>{a.push(c)};for(let c=0;c<r.length;c+=1)Bg(r.charCodeAt(c),s,i);return new Uint8Array(a)}function lw(r){const a=[];return iw(r,s=>a.push(s)),new Uint8Array(a)}function vn(r){const a=[],s={queue:0,queuedBits:0},i=c=>{a.push(c)};return r.forEach(c=>bm(c,s,i)),bm(null,s,i),a.join("")}function cw(r){return Math.round(Date.now()/1e3)+r}function dw(){return Symbol("auth-callback")}const Ot=()=>typeof window<"u"&&typeof document<"u",mn={tested:!1,writable:!1},Hg=()=>{if(!Ot())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(mn.tested)return mn.writable;const r=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(r,r),globalThis.localStorage.removeItem(r),mn.tested=!0,mn.writable=!0}catch{mn.tested=!0,mn.writable=!1}return mn.writable};function uw(r){const a={},s=new URL(r);if(s.hash&&s.hash[0]==="#")try{new URLSearchParams(s.hash.substring(1)).forEach((c,d)=>{a[d]=c})}catch{}return s.searchParams.forEach((i,c)=>{a[c]=i}),a}const $g=r=>r?(...a)=>r(...a):(...a)=>fetch(...a),hw=r=>typeof r=="object"&&r!==null&&"status"in r&&"ok"in r&&"json"in r&&typeof r.json=="function",bs=async(r,a,s)=>{await r.setItem(a,JSON.stringify(s))},gn=async(r,a)=>{const s=await r.getItem(a);if(!s)return null;try{return JSON.parse(s)}catch{return s}},zt=async(r,a)=>{await r.removeItem(a)};class Dl{constructor(){this.promise=new Dl.promiseConstructor((a,s)=>{this.resolve=a,this.reject=s})}}Dl.promiseConstructor=Promise;function fl(r){const a=r.split(".");if(a.length!==3)throw new Eu("Invalid JWT structure");for(let i=0;i<a.length;i++)if(!Z5.test(a[i]))throw new Eu("JWT not in base64url format");return{header:JSON.parse(xm(a[0])),payload:JSON.parse(xm(a[1])),signature:vs(a[2]),raw:{header:a[0],payload:a[1]}}}async function fw(r){return await new Promise(a=>{setTimeout(()=>a(null),r)})}function pw(r,a){return new Promise((i,c)=>{(async()=>{for(let d=0;d<1/0;d++)try{const h=await r(d);if(!a(d,null,h)){i(h);return}}catch(h){if(!a(d,h)){c(h);return}}})()})}function mw(r){return("0"+r.toString(16)).substr(-2)}function gw(){const a=new Uint32Array(56);if(typeof crypto>"u"){const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",i=s.length;let c="";for(let d=0;d<56;d++)c+=s.charAt(Math.floor(Math.random()*i));return c}return crypto.getRandomValues(a),Array.from(a,mw).join("")}async function bw(r){const s=new TextEncoder().encode(r),i=await crypto.subtle.digest("SHA-256",s),c=new Uint8Array(i);return Array.from(c).map(d=>String.fromCharCode(d)).join("")}async function xw(r){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),r;const s=await bw(r);return btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function us(r,a,s=!1){const i=gw();let c=i;s&&(c+="/PASSWORD_RECOVERY"),await bs(r,`${a}-code-verifier`,c);const d=await xw(i);return[d,i===d?"plain":"s256"]}const yw=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function vw(r){const a=r.headers.get(ju);if(!a||!a.match(yw))return null;try{return new Date(`${a}T00:00:00.0Z`)}catch{return null}}function ww(r){if(!r)throw new Error("Missing exp claim");const a=Math.floor(Date.now()/1e3);if(r<=a)throw new Error("JWT has expired")}function kw(r){switch(r){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const Sw=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function hs(r){if(!Sw.test(r))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function au(){const r={};return new Proxy(r,{get:(a,s)=>{if(s==="__isUserNotAvailableProxy")return!0;if(typeof s=="symbol"){const i=s.toString();if(i==="Symbol(Symbol.toPrimitive)"||i==="Symbol(Symbol.toStringTag)"||i==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${s}" property of the session object is not supported. Please use getUser() instead.`)},set:(a,s)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${s}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(a,s)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${s}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function jw(r,a){return new Proxy(r,{get:(s,i,c)=>{if(i==="__isInsecureUserWarningProxy")return!0;if(typeof i=="symbol"){const d=i.toString();if(d==="Symbol(Symbol.toPrimitive)"||d==="Symbol(Symbol.toStringTag)"||d==="Symbol(util.inspect.custom)"||d==="Symbol(nodejs.util.inspect.custom)")return Reflect.get(s,i,c)}return!a.value&&typeof i=="string"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),a.value=!0),Reflect.get(s,i,c)}})}function ym(r){return JSON.parse(JSON.stringify(r))}const xn=r=>r.msg||r.message||r.error_description||r.error||JSON.stringify(r),_w=[502,503,504];async function vm(r){var a;if(!hw(r))throw new _u(xn(r),0);if(_w.includes(r.status))throw new _u(xn(r),r.status);let s;try{s=await r.json()}catch(d){throw new yn(xn(d),d)}let i;const c=vw(r);if(c&&c.getTime()>=Ug["2024-01-01"].timestamp&&typeof s=="object"&&s&&typeof s.code=="string"?i=s.code:typeof s=="object"&&s&&typeof s.error_code=="string"&&(i=s.error_code),i){if(i==="weak_password")throw new mm(xn(s),r.status,((a=s.weak_password)===null||a===void 0?void 0:a.reasons)||[]);if(i==="session_not_found")throw new oa}else if(typeof s=="object"&&s&&typeof s.weak_password=="object"&&s.weak_password&&Array.isArray(s.weak_password.reasons)&&s.weak_password.reasons.length&&s.weak_password.reasons.reduce((d,h)=>d&&typeof h=="string",!0))throw new mm(xn(s),r.status,s.weak_password.reasons);throw new ew(xn(s),r.status||500,i)}const Ew=(r,a,s,i)=>{const c={method:r,headers:a?.headers||{}};return r==="GET"?c:(c.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},a?.headers),c.body=JSON.stringify(i),Object.assign(Object.assign({},c),s))};async function ge(r,a,s,i){var c;const d=Object.assign({},i?.headers);d[ju]||(d[ju]=Ug["2024-01-01"].name),i?.jwt&&(d.Authorization=`Bearer ${i.jwt}`);const h=(c=i?.query)!==null&&c!==void 0?c:{};i?.redirectTo&&(h.redirect_to=i.redirectTo);const p=Object.keys(h).length?"?"+new URLSearchParams(h).toString():"",m=await Nw(r,a,s+p,{headers:d,noResolveJson:i?.noResolveJson},{},i?.body);return i?.xform?i?.xform(m):{data:Object.assign({},m),error:null}}async function Nw(r,a,s,i,c,d){const h=Ew(a,i,c,d);let p;try{p=await r(s,Object.assign({},h))}catch(m){throw console.error(m),new _u(xn(m),0)}if(p.ok||await vm(p),i?.noResolveJson)return p;try{return await p.json()}catch(m){await vm(m)}}function Aa(r){var a;let s=null;Aw(r)&&(s=Object.assign({},r),r.expires_at||(s.expires_at=cw(r.expires_in)));const i=(a=r.user)!==null&&a!==void 0?a:r;return{data:{session:s,user:i},error:null}}function wm(r){const a=Aa(r);return!a.error&&r.weak_password&&typeof r.weak_password=="object"&&Array.isArray(r.weak_password.reasons)&&r.weak_password.reasons.length&&r.weak_password.message&&typeof r.weak_password.message=="string"&&r.weak_password.reasons.reduce((s,i)=>s&&typeof i=="string",!0)&&(a.data.weak_password=r.weak_password),a}function Xr(r){var a;return{data:{user:(a=r.user)!==null&&a!==void 0?a:r},error:null}}function Cw(r){return{data:r,error:null}}function Tw(r){const{action_link:a,email_otp:s,hashed_token:i,redirect_to:c,verification_type:d}=r,h=Rl(r,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),p={action_link:a,email_otp:s,hashed_token:i,redirect_to:c,verification_type:d},m=Object.assign({},h);return{data:{properties:p,user:m},error:null}}function km(r){return r}function Aw(r){return r.access_token&&r.refresh_token&&r.expires_in}const ru=["global","local","others"];class Rw{constructor({url:a="",headers:s={},fetch:i}){this.url=a,this.headers=s,this.fetch=$g(i),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)},this.customProviders={listProviders:this._listCustomProviders.bind(this),createProvider:this._createCustomProvider.bind(this),getProvider:this._getCustomProvider.bind(this),updateProvider:this._updateCustomProvider.bind(this),deleteProvider:this._deleteCustomProvider.bind(this)}}async signOut(a,s=ru[0]){if(ru.indexOf(s)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${ru.join(", ")}`);try{return await ge(this.fetch,"POST",`${this.url}/logout?scope=${s}`,{headers:this.headers,jwt:a,noResolveJson:!0}),{data:null,error:null}}catch(i){if(oe(i))return{data:null,error:i};throw i}}async inviteUserByEmail(a,s={}){try{return await ge(this.fetch,"POST",`${this.url}/invite`,{body:{email:a,data:s.data},headers:this.headers,redirectTo:s.redirectTo,xform:Xr})}catch(i){if(oe(i))return{data:{user:null},error:i};throw i}}async generateLink(a){try{const{options:s}=a,i=Rl(a,["options"]),c=Object.assign(Object.assign({},i),s);return"newEmail"in i&&(c.new_email=i?.newEmail,delete c.newEmail),await ge(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:c,headers:this.headers,xform:Tw,redirectTo:s?.redirectTo})}catch(s){if(oe(s))return{data:{properties:null,user:null},error:s};throw s}}async createUser(a){try{return await ge(this.fetch,"POST",`${this.url}/admin/users`,{body:a,headers:this.headers,xform:Xr})}catch(s){if(oe(s))return{data:{user:null},error:s};throw s}}async listUsers(a){var s,i,c,d,h,p,m;try{const g={nextPage:null,lastPage:0,total:0},y=await ge(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(i=(s=a?.page)===null||s===void 0?void 0:s.toString())!==null&&i!==void 0?i:"",per_page:(d=(c=a?.perPage)===null||c===void 0?void 0:c.toString())!==null&&d!==void 0?d:""},xform:km});if(y.error)throw y.error;const x=await y.json(),k=(h=y.headers.get("x-total-count"))!==null&&h!==void 0?h:0,S=(m=(p=y.headers.get("link"))===null||p===void 0?void 0:p.split(","))!==null&&m!==void 0?m:[];return S.length>0&&(S.forEach(N=>{const C=parseInt(N.split(";")[0].split("=")[1].substring(0,1)),E=JSON.parse(N.split(";")[1].split("=")[1]);g[`${E}Page`]=C}),g.total=parseInt(k)),{data:Object.assign(Object.assign({},x),g),error:null}}catch(g){if(oe(g))return{data:{users:[]},error:g};throw g}}async getUserById(a){hs(a);try{return await ge(this.fetch,"GET",`${this.url}/admin/users/${a}`,{headers:this.headers,xform:Xr})}catch(s){if(oe(s))return{data:{user:null},error:s};throw s}}async updateUserById(a,s){hs(a);try{return await ge(this.fetch,"PUT",`${this.url}/admin/users/${a}`,{body:s,headers:this.headers,xform:Xr})}catch(i){if(oe(i))return{data:{user:null},error:i};throw i}}async deleteUser(a,s=!1){hs(a);try{return await ge(this.fetch,"DELETE",`${this.url}/admin/users/${a}`,{headers:this.headers,body:{should_soft_delete:s},xform:Xr})}catch(i){if(oe(i))return{data:{user:null},error:i};throw i}}async _listFactors(a){hs(a.userId);try{const{data:s,error:i}=await ge(this.fetch,"GET",`${this.url}/admin/users/${a.userId}/factors`,{headers:this.headers,xform:c=>({data:{factors:c},error:null})});return{data:s,error:i}}catch(s){if(oe(s))return{data:null,error:s};throw s}}async _deleteFactor(a){hs(a.userId),hs(a.id);try{return{data:await ge(this.fetch,"DELETE",`${this.url}/admin/users/${a.userId}/factors/${a.id}`,{headers:this.headers}),error:null}}catch(s){if(oe(s))return{data:null,error:s};throw s}}async _listOAuthClients(a){var s,i,c,d,h,p,m;try{const g={nextPage:null,lastPage:0,total:0},y=await ge(this.fetch,"GET",`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(i=(s=a?.page)===null||s===void 0?void 0:s.toString())!==null&&i!==void 0?i:"",per_page:(d=(c=a?.perPage)===null||c===void 0?void 0:c.toString())!==null&&d!==void 0?d:""},xform:km});if(y.error)throw y.error;const x=await y.json(),k=(h=y.headers.get("x-total-count"))!==null&&h!==void 0?h:0,S=(m=(p=y.headers.get("link"))===null||p===void 0?void 0:p.split(","))!==null&&m!==void 0?m:[];return S.length>0&&(S.forEach(N=>{const C=parseInt(N.split(";")[0].split("=")[1].substring(0,1)),E=JSON.parse(N.split(";")[1].split("=")[1]);g[`${E}Page`]=C}),g.total=parseInt(k)),{data:Object.assign(Object.assign({},x),g),error:null}}catch(g){if(oe(g))return{data:{clients:[]},error:g};throw g}}async _createOAuthClient(a){try{return await ge(this.fetch,"POST",`${this.url}/admin/oauth/clients`,{body:a,headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(oe(s))return{data:null,error:s};throw s}}async _getOAuthClient(a){try{return await ge(this.fetch,"GET",`${this.url}/admin/oauth/clients/${a}`,{headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(oe(s))return{data:null,error:s};throw s}}async _updateOAuthClient(a,s){try{return await ge(this.fetch,"PUT",`${this.url}/admin/oauth/clients/${a}`,{body:s,headers:this.headers,xform:i=>({data:i,error:null})})}catch(i){if(oe(i))return{data:null,error:i};throw i}}async _deleteOAuthClient(a){try{return await ge(this.fetch,"DELETE",`${this.url}/admin/oauth/clients/${a}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(s){if(oe(s))return{data:null,error:s};throw s}}async _regenerateOAuthClientSecret(a){try{return await ge(this.fetch,"POST",`${this.url}/admin/oauth/clients/${a}/regenerate_secret`,{headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(oe(s))return{data:null,error:s};throw s}}async _listCustomProviders(a){try{const s={};return a?.type&&(s.type=a.type),await ge(this.fetch,"GET",`${this.url}/admin/custom-providers`,{headers:this.headers,query:s,xform:i=>{var c;return{data:{providers:(c=i?.providers)!==null&&c!==void 0?c:[]},error:null}}})}catch(s){if(oe(s))return{data:{providers:[]},error:s};throw s}}async _createCustomProvider(a){try{return await ge(this.fetch,"POST",`${this.url}/admin/custom-providers`,{body:a,headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(oe(s))return{data:null,error:s};throw s}}async _getCustomProvider(a){try{return await ge(this.fetch,"GET",`${this.url}/admin/custom-providers/${a}`,{headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(oe(s))return{data:null,error:s};throw s}}async _updateCustomProvider(a,s){try{return await ge(this.fetch,"PUT",`${this.url}/admin/custom-providers/${a}`,{body:s,headers:this.headers,xform:i=>({data:i,error:null})})}catch(i){if(oe(i))return{data:null,error:i};throw i}}async _deleteCustomProvider(a){try{return await ge(this.fetch,"DELETE",`${this.url}/admin/custom-providers/${a}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(s){if(oe(s))return{data:null,error:s};throw s}}}function Sm(r={}){return{getItem:a=>r[a]||null,setItem:(a,s)=>{r[a]=s},removeItem:a=>{delete r[a]}}}const $a={debug:!!(globalThis&&Hg()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class Pg extends Error{constructor(a){super(a),this.isAcquireTimeout=!0}}class jm extends Pg{}async function zw(r,a,s){$a.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",r,a);const i=new globalThis.AbortController;let c;a>0&&(c=setTimeout(()=>{i.abort(),$a.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",r)},a)),await Promise.resolve();try{return await globalThis.navigator.locks.request(r,a===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:i.signal},async d=>{if(d){clearTimeout(c),$a.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",r,d.name);try{return await s()}finally{$a.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",r,d.name)}}else{if(a===0)throw $a.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",r),new jm(`Acquiring an exclusive Navigator LockManager lock "${r}" immediately failed`);if($a.debug)try{const h=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(h,null,"  "))}catch(h){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",h)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),clearTimeout(c),await s()}})}catch(d){if(a>0&&clearTimeout(c),d?.name==="AbortError"&&a>0){if(i.signal.aborted)return $a.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire timeout, recovering by stealing lock",r),console.warn(`@supabase/gotrue-js: Lock "${r}" was not released within ${a}ms. This may indicate an orphaned lock from a component unmount (e.g., React Strict Mode). Forcefully acquiring the lock to recover.`),await Promise.resolve().then(()=>globalThis.navigator.locks.request(r,{mode:"exclusive",steal:!0},async h=>{if(h){$a.debug&&console.log("@supabase/gotrue-js: navigatorLock: recovered (stolen)",r,h.name);try{return await s()}finally{$a.debug&&console.log("@supabase/gotrue-js: navigatorLock: released (stolen)",r,h.name)}}else return console.warn("@supabase/gotrue-js: Navigator LockManager returned null lock even with steal: true"),await s()}));throw $a.debug&&console.log("@supabase/gotrue-js: navigatorLock: lock was stolen by another request",r),new jm(`Lock "${r}" was released because another request stole it`)}throw d}}function Ow(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}function qg(r){if(!/^0x[a-fA-F0-9]{40}$/.test(r))throw new Error(`@supabase/auth-js: Address "${r}" is invalid.`);return r.toLowerCase()}function Dw(r){return parseInt(r,16)}function Mw(r){const a=new TextEncoder().encode(r);return"0x"+Array.from(a,i=>i.toString(16).padStart(2,"0")).join("")}function Lw(r){var a;const{chainId:s,domain:i,expirationTime:c,issuedAt:d=new Date,nonce:h,notBefore:p,requestId:m,resources:g,scheme:y,uri:x,version:k}=r;{if(!Number.isInteger(s))throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${s}`);if(!i)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');if(h&&h.length<8)throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${h}`);if(!x)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');if(k!=="1")throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${k}`);if(!((a=r.statement)===null||a===void 0)&&a.includes(`
`))throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${r.statement}`)}const S=qg(r.address),N=y?`${y}://${i}`:i,C=r.statement?`${r.statement}
`:"",E=`${N} wants you to sign in with your Ethereum account:
${S}

${C}`;let B=`URI: ${x}
Version: ${k}
Chain ID: ${s}${h?`
Nonce: ${h}`:""}
Issued At: ${d.toISOString()}`;if(c&&(B+=`
Expiration Time: ${c.toISOString()}`),p&&(B+=`
Not Before: ${p.toISOString()}`),m&&(B+=`
Request ID: ${m}`),g){let M=`
Resources:`;for(const T of g){if(!T||typeof T!="string")throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${T}`);M+=`
- ${T}`}B+=M}return`${E}
${B}`}class bt extends Error{constructor({message:a,code:s,cause:i,name:c}){var d;super(a,{cause:i}),this.__isWebAuthnError=!0,this.name=(d=c??(i instanceof Error?i.name:void 0))!==null&&d!==void 0?d:"Unknown Error",this.code=s}}class jl extends bt{constructor(a,s){super({code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:s,message:a}),this.name="WebAuthnUnknownError",this.originalError=s}}function Uw({error:r,options:a}){var s,i,c;const{publicKey:d}=a;if(!d)throw Error("options was missing required publicKey property");if(r.name==="AbortError"){if(a.signal instanceof AbortSignal)return new bt({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:r})}else if(r.name==="ConstraintError"){if(((s=d.authenticatorSelection)===null||s===void 0?void 0:s.requireResidentKey)===!0)return new bt({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:r});if(a.mediation==="conditional"&&((i=d.authenticatorSelection)===null||i===void 0?void 0:i.userVerification)==="required")return new bt({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:r});if(((c=d.authenticatorSelection)===null||c===void 0?void 0:c.userVerification)==="required")return new bt({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:r})}else{if(r.name==="InvalidStateError")return new bt({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:r});if(r.name==="NotAllowedError")return new bt({message:r.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:r});if(r.name==="NotSupportedError")return d.pubKeyCredParams.filter(p=>p.type==="public-key").length===0?new bt({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:r}):new bt({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:r});if(r.name==="SecurityError"){const h=window.location.hostname;if(Ig(h)){if(d.rp.id!==h)return new bt({message:`The RP ID "${d.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:r})}else return new bt({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:r})}else if(r.name==="TypeError"){if(d.user.id.byteLength<1||d.user.id.byteLength>64)return new bt({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:r})}else if(r.name==="UnknownError")return new bt({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:r})}return new bt({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:r})}function Bw({error:r,options:a}){const{publicKey:s}=a;if(!s)throw Error("options was missing required publicKey property");if(r.name==="AbortError"){if(a.signal instanceof AbortSignal)return new bt({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:r})}else{if(r.name==="NotAllowedError")return new bt({message:r.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:r});if(r.name==="SecurityError"){const i=window.location.hostname;if(Ig(i)){if(s.rpId!==i)return new bt({message:`The RP ID "${s.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:r})}else return new bt({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:r})}else if(r.name==="UnknownError")return new bt({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:r})}return new bt({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:r})}class Hw{createNewAbortSignal(){if(this.controller){const s=new Error("Cancelling existing WebAuthn API call for new one");s.name="AbortError",this.controller.abort(s)}const a=new AbortController;return this.controller=a,a.signal}cancelCeremony(){if(this.controller){const a=new Error("Manually cancelling existing WebAuthn API call");a.name="AbortError",this.controller.abort(a),this.controller=void 0}}}const $w=new Hw;function Pw(r){if(!r)throw new Error("Credential creation options are required");if(typeof PublicKeyCredential<"u"&&"parseCreationOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON=="function")return PublicKeyCredential.parseCreationOptionsFromJSON(r);const{challenge:a,user:s,excludeCredentials:i}=r,c=Rl(r,["challenge","user","excludeCredentials"]),d=vs(a).buffer,h=Object.assign(Object.assign({},s),{id:vs(s.id).buffer}),p=Object.assign(Object.assign({},c),{challenge:d,user:h});if(i&&i.length>0){p.excludeCredentials=new Array(i.length);for(let m=0;m<i.length;m++){const g=i[m];p.excludeCredentials[m]=Object.assign(Object.assign({},g),{id:vs(g.id).buffer,type:g.type||"public-key",transports:g.transports})}}return p}function qw(r){if(!r)throw new Error("Credential request options are required");if(typeof PublicKeyCredential<"u"&&"parseRequestOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON=="function")return PublicKeyCredential.parseRequestOptionsFromJSON(r);const{challenge:a,allowCredentials:s}=r,i=Rl(r,["challenge","allowCredentials"]),c=vs(a).buffer,d=Object.assign(Object.assign({},i),{challenge:c});if(s&&s.length>0){d.allowCredentials=new Array(s.length);for(let h=0;h<s.length;h++){const p=s[h];d.allowCredentials[h]=Object.assign(Object.assign({},p),{id:vs(p.id).buffer,type:p.type||"public-key",transports:p.transports})}}return d}function Iw(r){var a;if("toJSON"in r&&typeof r.toJSON=="function")return r.toJSON();const s=r;return{id:r.id,rawId:r.id,response:{attestationObject:vn(new Uint8Array(r.response.attestationObject)),clientDataJSON:vn(new Uint8Array(r.response.clientDataJSON))},type:"public-key",clientExtensionResults:r.getClientExtensionResults(),authenticatorAttachment:(a=s.authenticatorAttachment)!==null&&a!==void 0?a:void 0}}function Yw(r){var a;if("toJSON"in r&&typeof r.toJSON=="function")return r.toJSON();const s=r,i=r.getClientExtensionResults(),c=r.response;return{id:r.id,rawId:r.id,response:{authenticatorData:vn(new Uint8Array(c.authenticatorData)),clientDataJSON:vn(new Uint8Array(c.clientDataJSON)),signature:vn(new Uint8Array(c.signature)),userHandle:c.userHandle?vn(new Uint8Array(c.userHandle)):void 0},type:"public-key",clientExtensionResults:i,authenticatorAttachment:(a=s.authenticatorAttachment)!==null&&a!==void 0?a:void 0}}function Ig(r){return r==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(r)}function _m(){var r,a;return!!(Ot()&&"PublicKeyCredential"in window&&window.PublicKeyCredential&&"credentials"in navigator&&typeof((r=navigator?.credentials)===null||r===void 0?void 0:r.create)=="function"&&typeof((a=navigator?.credentials)===null||a===void 0?void 0:a.get)=="function")}async function Gw(r){try{const a=await navigator.credentials.create(r);return a?a instanceof PublicKeyCredential?{data:a,error:null}:{data:null,error:new jl("Browser returned unexpected credential type",a)}:{data:null,error:new jl("Empty credential response",a)}}catch(a){return{data:null,error:Uw({error:a,options:r})}}}async function Vw(r){try{const a=await navigator.credentials.get(r);return a?a instanceof PublicKeyCredential?{data:a,error:null}:{data:null,error:new jl("Browser returned unexpected credential type",a)}:{data:null,error:new jl("Empty credential response",a)}}catch(a){return{data:null,error:Bw({error:a,options:r})}}}const Xw={hints:["security-key"],authenticatorSelection:{authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"preferred",residentKey:"discouraged"},attestation:"direct"},Kw={userVerification:"preferred",hints:["security-key"],attestation:"direct"};function _l(...r){const a=c=>c!==null&&typeof c=="object"&&!Array.isArray(c),s=c=>c instanceof ArrayBuffer||ArrayBuffer.isView(c),i={};for(const c of r)if(c)for(const d in c){const h=c[d];if(h!==void 0)if(Array.isArray(h))i[d]=h;else if(s(h))i[d]=h;else if(a(h)){const p=i[d];a(p)?i[d]=_l(p,h):i[d]=_l(h)}else i[d]=h}return i}function Fw(r,a){return _l(Xw,r,a||{})}function Jw(r,a){return _l(Kw,r,a||{})}class Ww{constructor(a){this.client=a,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(a){return this.client.mfa.enroll(Object.assign(Object.assign({},a),{factorType:"webauthn"}))}async _challenge({factorId:a,webauthn:s,friendlyName:i,signal:c},d){var h;try{const{data:p,error:m}=await this.client.mfa.challenge({factorId:a,webauthn:s});if(!p)return{data:null,error:m};const g=c??$w.createNewAbortSignal();if(p.webauthn.type==="create"){const{user:y}=p.webauthn.credential_options.publicKey;if(!y.name){const x=i;if(x)y.name=`${y.id}:${x}`;else{const S=(await this.client.getUser()).data.user,N=((h=S?.user_metadata)===null||h===void 0?void 0:h.name)||S?.email||S?.id||"User";y.name=`${y.id}:${N}`}}y.displayName||(y.displayName=y.name)}switch(p.webauthn.type){case"create":{const y=Fw(p.webauthn.credential_options.publicKey,d?.create),{data:x,error:k}=await Gw({publicKey:y,signal:g});return x?{data:{factorId:a,challengeId:p.id,webauthn:{type:p.webauthn.type,credential_response:x}},error:null}:{data:null,error:k}}case"request":{const y=Jw(p.webauthn.credential_options.publicKey,d?.request),{data:x,error:k}=await Vw(Object.assign(Object.assign({},p.webauthn.credential_options),{publicKey:y,signal:g}));return x?{data:{factorId:a,challengeId:p.id,webauthn:{type:p.webauthn.type,credential_response:x}},error:null}:{data:null,error:k}}}}catch(p){return oe(p)?{data:null,error:p}:{data:null,error:new yn("Unexpected error in challenge",p)}}}async _verify({challengeId:a,factorId:s,webauthn:i}){return this.client.mfa.verify({factorId:s,challengeId:a,webauthn:i})}async _authenticate({factorId:a,webauthn:{rpId:s=typeof window<"u"?window.location.hostname:void 0,rpOrigins:i=typeof window<"u"?[window.location.origin]:void 0,signal:c}={}},d){if(!s)return{data:null,error:new Ui("rpId is required for WebAuthn authentication")};try{if(!_m())return{data:null,error:new yn("Browser does not support WebAuthn",null)};const{data:h,error:p}=await this.challenge({factorId:a,webauthn:{rpId:s,rpOrigins:i},signal:c},{request:d});if(!h)return{data:null,error:p};const{webauthn:m}=h;return this._verify({factorId:a,challengeId:h.challengeId,webauthn:{type:m.type,rpId:s,rpOrigins:i,credential_response:m.credential_response}})}catch(h){return oe(h)?{data:null,error:h}:{data:null,error:new yn("Unexpected error in authenticate",h)}}}async _register({friendlyName:a,webauthn:{rpId:s=typeof window<"u"?window.location.hostname:void 0,rpOrigins:i=typeof window<"u"?[window.location.origin]:void 0,signal:c}={}},d){if(!s)return{data:null,error:new Ui("rpId is required for WebAuthn registration")};try{if(!_m())return{data:null,error:new yn("Browser does not support WebAuthn",null)};const{data:h,error:p}=await this._enroll({friendlyName:a});if(!h)return await this.client.mfa.listFactors().then(y=>{var x;return(x=y.data)===null||x===void 0?void 0:x.all.find(k=>k.factor_type==="webauthn"&&k.friendly_name===a&&k.status!=="unverified")}).then(y=>y?this.client.mfa.unenroll({factorId:y?.id}):void 0),{data:null,error:p};const{data:m,error:g}=await this._challenge({factorId:h.id,friendlyName:h.friendly_name,webauthn:{rpId:s,rpOrigins:i},signal:c},{create:d});return m?this._verify({factorId:h.id,challengeId:m.challengeId,webauthn:{rpId:s,rpOrigins:i,type:m.webauthn.type,credential_response:m.webauthn.credential_response}}):{data:null,error:g}}catch(h){return oe(h)?{data:null,error:h}:{data:null,error:new yn("Unexpected error in register",h)}}}}Ow();const Zw={url:F5,storageKey:J5,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:W5,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:5e3,skipAutoInitialize:!1};async function Em(r,a,s){return await s()}const fs={};class Bi{get jwks(){var a,s;return(s=(a=fs[this.storageKey])===null||a===void 0?void 0:a.jwks)!==null&&s!==void 0?s:{keys:[]}}set jwks(a){fs[this.storageKey]=Object.assign(Object.assign({},fs[this.storageKey]),{jwks:a})}get jwks_cached_at(){var a,s;return(s=(a=fs[this.storageKey])===null||a===void 0?void 0:a.cachedAt)!==null&&s!==void 0?s:Number.MIN_SAFE_INTEGER}set jwks_cached_at(a){fs[this.storageKey]=Object.assign(Object.assign({},fs[this.storageKey]),{cachedAt:a})}constructor(a){var s,i,c;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;const d=Object.assign(Object.assign({},Zw),a);if(this.storageKey=d.storageKey,this.instanceID=(s=Bi.nextInstanceID[this.storageKey])!==null&&s!==void 0?s:0,Bi.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!d.debug,typeof d.debug=="function"&&(this.logger=d.debug),this.instanceID>0&&Ot()){const h=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(h),this.logDebugMessages&&console.trace(h)}if(this.persistSession=d.persistSession,this.autoRefreshToken=d.autoRefreshToken,this.admin=new Rw({url:d.url,headers:d.headers,fetch:d.fetch}),this.url=d.url,this.headers=d.headers,this.fetch=$g(d.fetch),this.lock=d.lock||Em,this.detectSessionInUrl=d.detectSessionInUrl,this.flowType=d.flowType,this.hasCustomAuthorizationHeader=d.hasCustomAuthorizationHeader,this.throwOnError=d.throwOnError,this.lockAcquireTimeout=d.lockAcquireTimeout,d.lock?this.lock=d.lock:this.persistSession&&Ot()&&(!((i=globalThis?.navigator)===null||i===void 0)&&i.locks)?this.lock=zw:this.lock=Em,this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new Ww(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.persistSession?(d.storage?this.storage=d.storage:Hg()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=Sm(this.memoryStorage)),d.userStorage&&(this.userStorage=d.userStorage)):(this.memoryStorage={},this.storage=Sm(this.memoryStorage)),Ot()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(h){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",h)}(c=this.broadcastChannel)===null||c===void 0||c.addEventListener("message",async h=>{this._debug("received broadcast notification from other tab or client",h);try{await this._notifyAllSubscribers(h.data.event,h.data.session,!1)}catch(p){this._debug("#broadcastChannel","error",p)}})}d.skipAutoInitialize||this.initialize().catch(h=>{this._debug("#initialize()","error",h)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(a){if(this.throwOnError&&a&&a.error)throw a.error;return a}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${Lg}) ${new Date().toISOString()}`}_debug(...a){return this.logDebugMessages&&this.logger(this._logPrefix(),...a),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){var a;try{let s={},i="none";if(Ot()&&(s=uw(window.location.href),this._isImplicitGrantCallback(s)?i="implicit":await this._isPKCECallback(s)&&(i="pkce")),Ot()&&this.detectSessionInUrl&&i!=="none"){const{data:c,error:d}=await this._getSessionFromURL(s,i);if(d){if(this._debug("#_initialize()","error detecting session from URL",d),aw(d)){const m=(a=d.details)===null||a===void 0?void 0:a.code;if(m==="identity_already_exists"||m==="identity_not_found"||m==="single_identity_not_deletable")return{error:d}}return{error:d}}const{session:h,redirectType:p}=c;return this._debug("#_initialize()","detected session in URL",h,"redirect type",p),await this._saveSession(h),setTimeout(async()=>{p==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",h):await this._notifyAllSubscribers("SIGNED_IN",h)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(s){return oe(s)?this._returnResult({error:s}):this._returnResult({error:new yn("Unexpected error during initialization",s)})}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(a){var s,i,c;try{const d=await ge(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(i=(s=a?.options)===null||s===void 0?void 0:s.data)!==null&&i!==void 0?i:{},gotrue_meta_security:{captcha_token:(c=a?.options)===null||c===void 0?void 0:c.captchaToken}},xform:Aa}),{data:h,error:p}=d;if(p||!h)return this._returnResult({data:{user:null,session:null},error:p});const m=h.session,g=h.user;return h.session&&(await this._saveSession(h.session),await this._notifyAllSubscribers("SIGNED_IN",m)),this._returnResult({data:{user:g,session:m},error:null})}catch(d){if(oe(d))return this._returnResult({data:{user:null,session:null},error:d});throw d}}async signUp(a){var s,i,c;try{let d;if("email"in a){const{email:y,password:x,options:k}=a;let S=null,N=null;this.flowType==="pkce"&&([S,N]=await us(this.storage,this.storageKey)),d=await ge(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:k?.emailRedirectTo,body:{email:y,password:x,data:(s=k?.data)!==null&&s!==void 0?s:{},gotrue_meta_security:{captcha_token:k?.captchaToken},code_challenge:S,code_challenge_method:N},xform:Aa})}else if("phone"in a){const{phone:y,password:x,options:k}=a;d=await ge(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:y,password:x,data:(i=k?.data)!==null&&i!==void 0?i:{},channel:(c=k?.channel)!==null&&c!==void 0?c:"sms",gotrue_meta_security:{captcha_token:k?.captchaToken}},xform:Aa})}else throw new ul("You must provide either an email or phone number and a password");const{data:h,error:p}=d;if(p||!h)return await zt(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:p});const m=h.session,g=h.user;return h.session&&(await this._saveSession(h.session),await this._notifyAllSubscribers("SIGNED_IN",m)),this._returnResult({data:{user:g,session:m},error:null})}catch(d){if(await zt(this.storage,`${this.storageKey}-code-verifier`),oe(d))return this._returnResult({data:{user:null,session:null},error:d});throw d}}async signInWithPassword(a){try{let s;if("email"in a){const{email:d,password:h,options:p}=a;s=await ge(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:d,password:h,gotrue_meta_security:{captcha_token:p?.captchaToken}},xform:wm})}else if("phone"in a){const{phone:d,password:h,options:p}=a;s=await ge(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:d,password:h,gotrue_meta_security:{captcha_token:p?.captchaToken}},xform:wm})}else throw new ul("You must provide either an email or phone number and a password");const{data:i,error:c}=s;if(c)return this._returnResult({data:{user:null,session:null},error:c});if(!i||!i.session||!i.user){const d=new ds;return this._returnResult({data:{user:null,session:null},error:d})}return i.session&&(await this._saveSession(i.session),await this._notifyAllSubscribers("SIGNED_IN",i.session)),this._returnResult({data:Object.assign({user:i.user,session:i.session},i.weak_password?{weakPassword:i.weak_password}:null),error:c})}catch(s){if(oe(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async signInWithOAuth(a){var s,i,c,d;return await this._handleProviderSignIn(a.provider,{redirectTo:(s=a.options)===null||s===void 0?void 0:s.redirectTo,scopes:(i=a.options)===null||i===void 0?void 0:i.scopes,queryParams:(c=a.options)===null||c===void 0?void 0:c.queryParams,skipBrowserRedirect:(d=a.options)===null||d===void 0?void 0:d.skipBrowserRedirect})}async exchangeCodeForSession(a){return await this.initializePromise,this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(a))}async signInWithWeb3(a){const{chain:s}=a;switch(s){case"ethereum":return await this.signInWithEthereum(a);case"solana":return await this.signInWithSolana(a);default:throw new Error(`@supabase/auth-js: Unsupported chain "${s}"`)}}async signInWithEthereum(a){var s,i,c,d,h,p,m,g,y,x,k;let S,N;if("message"in a)S=a.message,N=a.signature;else{const{chain:C,wallet:E,statement:B,options:M}=a;let T;if(Ot())if(typeof E=="object")T=E;else{const te=window;if("ethereum"in te&&typeof te.ethereum=="object"&&"request"in te.ethereum&&typeof te.ethereum.request=="function")T=te.ethereum;else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")}else{if(typeof E!="object"||!M?.url)throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");T=E}const I=new URL((s=M?.url)!==null&&s!==void 0?s:window.location.href),X=await T.request({method:"eth_requestAccounts"}).then(te=>te).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")});if(!X||X.length===0)throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");const J=qg(X[0]);let z=(i=M?.signInWithEthereum)===null||i===void 0?void 0:i.chainId;if(!z){const te=await T.request({method:"eth_chainId"});z=Dw(te)}const Q={domain:I.host,address:J,statement:B,uri:I.href,version:"1",chainId:z,nonce:(c=M?.signInWithEthereum)===null||c===void 0?void 0:c.nonce,issuedAt:(h=(d=M?.signInWithEthereum)===null||d===void 0?void 0:d.issuedAt)!==null&&h!==void 0?h:new Date,expirationTime:(p=M?.signInWithEthereum)===null||p===void 0?void 0:p.expirationTime,notBefore:(m=M?.signInWithEthereum)===null||m===void 0?void 0:m.notBefore,requestId:(g=M?.signInWithEthereum)===null||g===void 0?void 0:g.requestId,resources:(y=M?.signInWithEthereum)===null||y===void 0?void 0:y.resources};S=Lw(Q),N=await T.request({method:"personal_sign",params:[Mw(S),J]})}try{const{data:C,error:E}=await ge(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"ethereum",message:S,signature:N},!((x=a.options)===null||x===void 0)&&x.captchaToken?{gotrue_meta_security:{captcha_token:(k=a.options)===null||k===void 0?void 0:k.captchaToken}}:null),xform:Aa});if(E)throw E;if(!C||!C.session||!C.user){const B=new ds;return this._returnResult({data:{user:null,session:null},error:B})}return C.session&&(await this._saveSession(C.session),await this._notifyAllSubscribers("SIGNED_IN",C.session)),this._returnResult({data:Object.assign({},C),error:E})}catch(C){if(oe(C))return this._returnResult({data:{user:null,session:null},error:C});throw C}}async signInWithSolana(a){var s,i,c,d,h,p,m,g,y,x,k,S;let N,C;if("message"in a)N=a.message,C=a.signature;else{const{chain:E,wallet:B,statement:M,options:T}=a;let I;if(Ot())if(typeof B=="object")I=B;else{const J=window;if("solana"in J&&typeof J.solana=="object"&&("signIn"in J.solana&&typeof J.solana.signIn=="function"||"signMessage"in J.solana&&typeof J.solana.signMessage=="function"))I=J.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof B!="object"||!T?.url)throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");I=B}const X=new URL((s=T?.url)!==null&&s!==void 0?s:window.location.href);if("signIn"in I&&I.signIn){const J=await I.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},T?.signInWithSolana),{version:"1",domain:X.host,uri:X.href}),M?{statement:M}:null));let z;if(Array.isArray(J)&&J[0]&&typeof J[0]=="object")z=J[0];else if(J&&typeof J=="object"&&"signedMessage"in J&&"signature"in J)z=J;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in z&&"signature"in z&&(typeof z.signedMessage=="string"||z.signedMessage instanceof Uint8Array)&&z.signature instanceof Uint8Array)N=typeof z.signedMessage=="string"?z.signedMessage:new TextDecoder().decode(z.signedMessage),C=z.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in I)||typeof I.signMessage!="function"||!("publicKey"in I)||typeof I!="object"||!I.publicKey||!("toBase58"in I.publicKey)||typeof I.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");N=[`${X.host} wants you to sign in with your Solana account:`,I.publicKey.toBase58(),...M?["",M,""]:[""],"Version: 1",`URI: ${X.href}`,`Issued At: ${(c=(i=T?.signInWithSolana)===null||i===void 0?void 0:i.issuedAt)!==null&&c!==void 0?c:new Date().toISOString()}`,...!((d=T?.signInWithSolana)===null||d===void 0)&&d.notBefore?[`Not Before: ${T.signInWithSolana.notBefore}`]:[],...!((h=T?.signInWithSolana)===null||h===void 0)&&h.expirationTime?[`Expiration Time: ${T.signInWithSolana.expirationTime}`]:[],...!((p=T?.signInWithSolana)===null||p===void 0)&&p.chainId?[`Chain ID: ${T.signInWithSolana.chainId}`]:[],...!((m=T?.signInWithSolana)===null||m===void 0)&&m.nonce?[`Nonce: ${T.signInWithSolana.nonce}`]:[],...!((g=T?.signInWithSolana)===null||g===void 0)&&g.requestId?[`Request ID: ${T.signInWithSolana.requestId}`]:[],...!((x=(y=T?.signInWithSolana)===null||y===void 0?void 0:y.resources)===null||x===void 0)&&x.length?["Resources",...T.signInWithSolana.resources.map(z=>`- ${z}`)]:[]].join(`
`);const J=await I.signMessage(new TextEncoder().encode(N),"utf8");if(!J||!(J instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");C=J}}try{const{data:E,error:B}=await ge(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:N,signature:vn(C)},!((k=a.options)===null||k===void 0)&&k.captchaToken?{gotrue_meta_security:{captcha_token:(S=a.options)===null||S===void 0?void 0:S.captchaToken}}:null),xform:Aa});if(B)throw B;if(!E||!E.session||!E.user){const M=new ds;return this._returnResult({data:{user:null,session:null},error:M})}return E.session&&(await this._saveSession(E.session),await this._notifyAllSubscribers("SIGNED_IN",E.session)),this._returnResult({data:Object.assign({},E),error:B})}catch(E){if(oe(E))return this._returnResult({data:{user:null,session:null},error:E});throw E}}async _exchangeCodeForSession(a){const s=await gn(this.storage,`${this.storageKey}-code-verifier`),[i,c]=(s??"").split("/");try{if(!i&&this.flowType==="pkce")throw new rw;const{data:d,error:h}=await ge(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:a,code_verifier:i},xform:Aa});if(await zt(this.storage,`${this.storageKey}-code-verifier`),h)throw h;if(!d||!d.session||!d.user){const p=new ds;return this._returnResult({data:{user:null,session:null,redirectType:null},error:p})}return d.session&&(await this._saveSession(d.session),await this._notifyAllSubscribers("SIGNED_IN",d.session)),this._returnResult({data:Object.assign(Object.assign({},d),{redirectType:c??null}),error:h})}catch(d){if(await zt(this.storage,`${this.storageKey}-code-verifier`),oe(d))return this._returnResult({data:{user:null,session:null,redirectType:null},error:d});throw d}}async signInWithIdToken(a){try{const{options:s,provider:i,token:c,access_token:d,nonce:h}=a,p=await ge(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:i,id_token:c,access_token:d,nonce:h,gotrue_meta_security:{captcha_token:s?.captchaToken}},xform:Aa}),{data:m,error:g}=p;if(g)return this._returnResult({data:{user:null,session:null},error:g});if(!m||!m.session||!m.user){const y=new ds;return this._returnResult({data:{user:null,session:null},error:y})}return m.session&&(await this._saveSession(m.session),await this._notifyAllSubscribers("SIGNED_IN",m.session)),this._returnResult({data:m,error:g})}catch(s){if(oe(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async signInWithOtp(a){var s,i,c,d,h;try{if("email"in a){const{email:p,options:m}=a;let g=null,y=null;this.flowType==="pkce"&&([g,y]=await us(this.storage,this.storageKey));const{error:x}=await ge(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:p,data:(s=m?.data)!==null&&s!==void 0?s:{},create_user:(i=m?.shouldCreateUser)!==null&&i!==void 0?i:!0,gotrue_meta_security:{captcha_token:m?.captchaToken},code_challenge:g,code_challenge_method:y},redirectTo:m?.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:x})}if("phone"in a){const{phone:p,options:m}=a,{data:g,error:y}=await ge(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:p,data:(c=m?.data)!==null&&c!==void 0?c:{},create_user:(d=m?.shouldCreateUser)!==null&&d!==void 0?d:!0,gotrue_meta_security:{captcha_token:m?.captchaToken},channel:(h=m?.channel)!==null&&h!==void 0?h:"sms"}});return this._returnResult({data:{user:null,session:null,messageId:g?.message_id},error:y})}throw new ul("You must provide either an email or phone number.")}catch(p){if(await zt(this.storage,`${this.storageKey}-code-verifier`),oe(p))return this._returnResult({data:{user:null,session:null},error:p});throw p}}async verifyOtp(a){var s,i;try{let c,d;"options"in a&&(c=(s=a.options)===null||s===void 0?void 0:s.redirectTo,d=(i=a.options)===null||i===void 0?void 0:i.captchaToken);const{data:h,error:p}=await ge(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},a),{gotrue_meta_security:{captcha_token:d}}),redirectTo:c,xform:Aa});if(p)throw p;if(!h)throw new Error("An error occurred on token verification.");const m=h.session,g=h.user;return m?.access_token&&(await this._saveSession(m),await this._notifyAllSubscribers(a.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",m)),this._returnResult({data:{user:g,session:m},error:null})}catch(c){if(oe(c))return this._returnResult({data:{user:null,session:null},error:c});throw c}}async signInWithSSO(a){var s,i,c,d,h;try{let p=null,m=null;this.flowType==="pkce"&&([p,m]=await us(this.storage,this.storageKey));const g=await ge(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in a?{provider_id:a.providerId}:null),"domain"in a?{domain:a.domain}:null),{redirect_to:(i=(s=a.options)===null||s===void 0?void 0:s.redirectTo)!==null&&i!==void 0?i:void 0}),!((c=a?.options)===null||c===void 0)&&c.captchaToken?{gotrue_meta_security:{captcha_token:a.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:p,code_challenge_method:m}),headers:this.headers,xform:Cw});return!((d=g.data)===null||d===void 0)&&d.url&&Ot()&&!(!((h=a.options)===null||h===void 0)&&h.skipBrowserRedirect)&&window.location.assign(g.data.url),this._returnResult(g)}catch(p){if(await zt(this.storage,`${this.storageKey}-code-verifier`),oe(p))return this._returnResult({data:null,error:p});throw p}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async a=>{const{data:{session:s},error:i}=a;if(i)throw i;if(!s)throw new oa;const{error:c}=await ge(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:s.access_token});return this._returnResult({data:{user:null,session:null},error:c})})}catch(a){if(oe(a))return this._returnResult({data:{user:null,session:null},error:a});throw a}}async resend(a){try{const s=`${this.url}/resend`;if("email"in a){const{email:i,type:c,options:d}=a,{error:h}=await ge(this.fetch,"POST",s,{headers:this.headers,body:{email:i,type:c,gotrue_meta_security:{captcha_token:d?.captchaToken}},redirectTo:d?.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:h})}else if("phone"in a){const{phone:i,type:c,options:d}=a,{data:h,error:p}=await ge(this.fetch,"POST",s,{headers:this.headers,body:{phone:i,type:c,gotrue_meta_security:{captcha_token:d?.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:h?.message_id},error:p})}throw new ul("You must provide either an email or phone number and a type")}catch(s){if(oe(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async getSession(){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async s=>s))}async _acquireLock(a,s){this._debug("#_acquireLock","begin",a);try{if(this.lockAcquired){const i=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),c=(async()=>(await i,await s()))();return this.pendingInLock.push((async()=>{try{await c}catch{}})()),c}return await this.lock(`lock:${this.storageKey}`,a,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const i=s();for(this.pendingInLock.push((async()=>{try{await i}catch{}})()),await i;this.pendingInLock.length;){const c=[...this.pendingInLock];await Promise.all(c),this.pendingInLock.splice(0,c.length)}return await i}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(a){this._debug("#_useSession","begin");try{const s=await this.__loadSession();return await a(s)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let a=null;const s=await gn(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",s),s!==null&&(this._isValidSession(s)?a=s:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!a)return{data:{session:null},error:null};const i=a.expires_at?a.expires_at*1e3-Date.now()<eu:!1;if(this._debug("#__loadSession()",`session has${i?"":" not"} expired`,"expires_at",a.expires_at),!i){if(this.userStorage){const h=await gn(this.userStorage,this.storageKey+"-user");h?.user?a.user=h.user:a.user=au()}if(this.storage.isServer&&a.user&&!a.user.__isUserNotAvailableProxy){const h={value:this.suppressGetSessionWarning};a.user=jw(a.user,h),h.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:a},error:null}}const{data:c,error:d}=await this._callRefreshToken(a.refresh_token);return d?this._returnResult({data:{session:null},error:d}):this._returnResult({data:{session:c},error:null})}finally{this._debug("#__loadSession()","end")}}async getUser(a){if(a)return await this._getUser(a);await this.initializePromise;const s=await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser());return s.data.user&&(this.suppressGetSessionWarning=!0),s}async _getUser(a){try{return a?await ge(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:a,xform:Xr}):await this._useSession(async s=>{var i,c,d;const{data:h,error:p}=s;if(p)throw p;return!(!((i=h.session)===null||i===void 0)&&i.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new oa}:await ge(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(d=(c=h.session)===null||c===void 0?void 0:c.access_token)!==null&&d!==void 0?d:void 0,xform:Xr})})}catch(s){if(oe(s))return dl(s)&&(await this._removeSession(),await zt(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({data:{user:null},error:s});throw s}}async updateUser(a,s={}){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(a,s))}async _updateUser(a,s={}){try{return await this._useSession(async i=>{const{data:c,error:d}=i;if(d)throw d;if(!c.session)throw new oa;const h=c.session;let p=null,m=null;this.flowType==="pkce"&&a.email!=null&&([p,m]=await us(this.storage,this.storageKey));const{data:g,error:y}=await ge(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:s?.emailRedirectTo,body:Object.assign(Object.assign({},a),{code_challenge:p,code_challenge_method:m}),jwt:h.access_token,xform:Xr});if(y)throw y;return h.user=g.user,await this._saveSession(h),await this._notifyAllSubscribers("USER_UPDATED",h),this._returnResult({data:{user:h.user},error:null})})}catch(i){if(await zt(this.storage,`${this.storageKey}-code-verifier`),oe(i))return this._returnResult({data:{user:null},error:i});throw i}}async setSession(a){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(a))}async _setSession(a){try{if(!a.access_token||!a.refresh_token)throw new oa;const s=Date.now()/1e3;let i=s,c=!0,d=null;const{payload:h}=fl(a.access_token);if(h.exp&&(i=h.exp,c=i<=s),c){const{data:p,error:m}=await this._callRefreshToken(a.refresh_token);if(m)return this._returnResult({data:{user:null,session:null},error:m});if(!p)return{data:{user:null,session:null},error:null};d=p}else{const{data:p,error:m}=await this._getUser(a.access_token);if(m)return this._returnResult({data:{user:null,session:null},error:m});d={access_token:a.access_token,refresh_token:a.refresh_token,user:p.user,token_type:"bearer",expires_in:i-s,expires_at:i},await this._saveSession(d),await this._notifyAllSubscribers("SIGNED_IN",d)}return this._returnResult({data:{user:d.user,session:d},error:null})}catch(s){if(oe(s))return this._returnResult({data:{session:null,user:null},error:s});throw s}}async refreshSession(a){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(a))}async _refreshSession(a){try{return await this._useSession(async s=>{var i;if(!a){const{data:h,error:p}=s;if(p)throw p;a=(i=h.session)!==null&&i!==void 0?i:void 0}if(!a?.refresh_token)throw new oa;const{data:c,error:d}=await this._callRefreshToken(a.refresh_token);return d?this._returnResult({data:{user:null,session:null},error:d}):c?this._returnResult({data:{user:c.user,session:c},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(s){if(oe(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async _getSessionFromURL(a,s){try{if(!Ot())throw new hl("No browser detected.");if(a.error||a.error_description||a.error_code)throw new hl(a.error_description||"Error in URL with unspecified error_description",{error:a.error||"unspecified_error",code:a.error_code||"unspecified_code"});switch(s){case"implicit":if(this.flowType==="pkce")throw new pm("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new hl("Not a valid implicit grant flow url.");break;default:}if(s==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!a.code)throw new pm("No code detected.");const{data:M,error:T}=await this._exchangeCodeForSession(a.code);if(T)throw T;const I=new URL(window.location.href);return I.searchParams.delete("code"),window.history.replaceState(window.history.state,"",I.toString()),{data:{session:M.session,redirectType:null},error:null}}const{provider_token:i,provider_refresh_token:c,access_token:d,refresh_token:h,expires_in:p,expires_at:m,token_type:g}=a;if(!d||!p||!h||!g)throw new hl("No session defined in URL");const y=Math.round(Date.now()/1e3),x=parseInt(p);let k=y+x;m&&(k=parseInt(m));const S=k-y;S*1e3<=gs&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${S}s, should have been closer to ${x}s`);const N=k-x;y-N>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",N,k,y):y-N<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",N,k,y);const{data:C,error:E}=await this._getUser(d);if(E)throw E;const B={provider_token:i,provider_refresh_token:c,access_token:d,expires_in:x,expires_at:k,refresh_token:h,token_type:g,user:C.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),this._returnResult({data:{session:B,redirectType:a.type},error:null})}catch(i){if(oe(i))return this._returnResult({data:{session:null,redirectType:null},error:i});throw i}}_isImplicitGrantCallback(a){return typeof this.detectSessionInUrl=="function"?this.detectSessionInUrl(new URL(window.location.href),a):!!(a.access_token||a.error_description)}async _isPKCECallback(a){const s=await gn(this.storage,`${this.storageKey}-code-verifier`);return!!(a.code&&s)}async signOut(a={scope:"global"}){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(a))}async _signOut({scope:a}={scope:"global"}){return await this._useSession(async s=>{var i;const{data:c,error:d}=s;if(d&&!dl(d))return this._returnResult({error:d});const h=(i=c.session)===null||i===void 0?void 0:i.access_token;if(h){const{error:p}=await this.admin.signOut(h,a);if(p&&!(tw(p)&&(p.status===404||p.status===401||p.status===403)||dl(p)))return this._returnResult({error:p})}return a!=="others"&&(await this._removeSession(),await zt(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({error:null})})}onAuthStateChange(a){const s=dw(),i={id:s,callback:a,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",s),this.stateChangeEmitters.delete(s)}};return this._debug("#onAuthStateChange()","registered callback with id",s),this.stateChangeEmitters.set(s,i),(async()=>(await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(s)})))(),{data:{subscription:i}}}async _emitInitialSession(a){return await this._useSession(async s=>{var i,c;try{const{data:{session:d},error:h}=s;if(h)throw h;await((i=this.stateChangeEmitters.get(a))===null||i===void 0?void 0:i.callback("INITIAL_SESSION",d)),this._debug("INITIAL_SESSION","callback id",a,"session",d)}catch(d){await((c=this.stateChangeEmitters.get(a))===null||c===void 0?void 0:c.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",a,"error",d),dl(d)?console.warn(d):console.error(d)}})}async resetPasswordForEmail(a,s={}){let i=null,c=null;this.flowType==="pkce"&&([i,c]=await us(this.storage,this.storageKey,!0));try{return await ge(this.fetch,"POST",`${this.url}/recover`,{body:{email:a,code_challenge:i,code_challenge_method:c,gotrue_meta_security:{captcha_token:s.captchaToken}},headers:this.headers,redirectTo:s.redirectTo})}catch(d){if(await zt(this.storage,`${this.storageKey}-code-verifier`),oe(d))return this._returnResult({data:null,error:d});throw d}}async getUserIdentities(){var a;try{const{data:s,error:i}=await this.getUser();if(i)throw i;return this._returnResult({data:{identities:(a=s.user.identities)!==null&&a!==void 0?a:[]},error:null})}catch(s){if(oe(s))return this._returnResult({data:null,error:s});throw s}}async linkIdentity(a){return"token"in a?this.linkIdentityIdToken(a):this.linkIdentityOAuth(a)}async linkIdentityOAuth(a){var s;try{const{data:i,error:c}=await this._useSession(async d=>{var h,p,m,g,y;const{data:x,error:k}=d;if(k)throw k;const S=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,a.provider,{redirectTo:(h=a.options)===null||h===void 0?void 0:h.redirectTo,scopes:(p=a.options)===null||p===void 0?void 0:p.scopes,queryParams:(m=a.options)===null||m===void 0?void 0:m.queryParams,skipBrowserRedirect:!0});return await ge(this.fetch,"GET",S,{headers:this.headers,jwt:(y=(g=x.session)===null||g===void 0?void 0:g.access_token)!==null&&y!==void 0?y:void 0})});if(c)throw c;return Ot()&&!(!((s=a.options)===null||s===void 0)&&s.skipBrowserRedirect)&&window.location.assign(i?.url),this._returnResult({data:{provider:a.provider,url:i?.url},error:null})}catch(i){if(oe(i))return this._returnResult({data:{provider:a.provider,url:null},error:i});throw i}}async linkIdentityIdToken(a){return await this._useSession(async s=>{var i;try{const{error:c,data:{session:d}}=s;if(c)throw c;const{options:h,provider:p,token:m,access_token:g,nonce:y}=a,x=await ge(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:(i=d?.access_token)!==null&&i!==void 0?i:void 0,body:{provider:p,id_token:m,access_token:g,nonce:y,link_identity:!0,gotrue_meta_security:{captcha_token:h?.captchaToken}},xform:Aa}),{data:k,error:S}=x;return S?this._returnResult({data:{user:null,session:null},error:S}):!k||!k.session||!k.user?this._returnResult({data:{user:null,session:null},error:new ds}):(k.session&&(await this._saveSession(k.session),await this._notifyAllSubscribers("USER_UPDATED",k.session)),this._returnResult({data:k,error:S}))}catch(c){if(await zt(this.storage,`${this.storageKey}-code-verifier`),oe(c))return this._returnResult({data:{user:null,session:null},error:c});throw c}})}async unlinkIdentity(a){try{return await this._useSession(async s=>{var i,c;const{data:d,error:h}=s;if(h)throw h;return await ge(this.fetch,"DELETE",`${this.url}/user/identities/${a.identity_id}`,{headers:this.headers,jwt:(c=(i=d.session)===null||i===void 0?void 0:i.access_token)!==null&&c!==void 0?c:void 0})})}catch(s){if(oe(s))return this._returnResult({data:null,error:s});throw s}}async _refreshAccessToken(a){const s=`#_refreshAccessToken(${a.substring(0,5)}...)`;this._debug(s,"begin");try{const i=Date.now();return await pw(async c=>(c>0&&await fw(200*Math.pow(2,c-1)),this._debug(s,"refreshing attempt",c),await ge(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:a},headers:this.headers,xform:Aa})),(c,d)=>{const h=200*Math.pow(2,c);return d&&tu(d)&&Date.now()+h-i<gs})}catch(i){if(this._debug(s,"error",i),oe(i))return this._returnResult({data:{session:null,user:null},error:i});throw i}finally{this._debug(s,"end")}}_isValidSession(a){return typeof a=="object"&&a!==null&&"access_token"in a&&"refresh_token"in a&&"expires_at"in a}async _handleProviderSignIn(a,s){const i=await this._getUrlForProvider(`${this.url}/authorize`,a,{redirectTo:s.redirectTo,scopes:s.scopes,queryParams:s.queryParams});return this._debug("#_handleProviderSignIn()","provider",a,"options",s,"url",i),Ot()&&!s.skipBrowserRedirect&&window.location.assign(i),{data:{provider:a,url:i},error:null}}async _recoverAndRefresh(){var a,s;const i="#_recoverAndRefresh()";this._debug(i,"begin");try{const c=await gn(this.storage,this.storageKey);if(c&&this.userStorage){let h=await gn(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!h&&(h={user:c.user},await bs(this.userStorage,this.storageKey+"-user",h)),c.user=(a=h?.user)!==null&&a!==void 0?a:au()}else if(c&&!c.user&&!c.user){const h=await gn(this.storage,this.storageKey+"-user");h&&h?.user?(c.user=h.user,await zt(this.storage,this.storageKey+"-user"),await bs(this.storage,this.storageKey,c)):c.user=au()}if(this._debug(i,"session from storage",c),!this._isValidSession(c)){this._debug(i,"session is not valid"),c!==null&&await this._removeSession();return}const d=((s=c.expires_at)!==null&&s!==void 0?s:1/0)*1e3-Date.now()<eu;if(this._debug(i,`session has${d?"":" not"} expired with margin of ${eu}s`),d){if(this.autoRefreshToken&&c.refresh_token){const{error:h}=await this._callRefreshToken(c.refresh_token);h&&(console.error(h),tu(h)||(this._debug(i,"refresh failed with a non-retryable error, removing the session",h),await this._removeSession()))}}else if(c.user&&c.user.__isUserNotAvailableProxy===!0)try{const{data:h,error:p}=await this._getUser(c.access_token);!p&&h?.user?(c.user=h.user,await this._saveSession(c),await this._notifyAllSubscribers("SIGNED_IN",c)):this._debug(i,"could not get user data, skipping SIGNED_IN notification")}catch(h){console.error("Error getting user data:",h),this._debug(i,"error getting user data, skipping SIGNED_IN notification",h)}else await this._notifyAllSubscribers("SIGNED_IN",c)}catch(c){this._debug(i,"error",c),console.error(c);return}finally{this._debug(i,"end")}}async _callRefreshToken(a){var s,i;if(!a)throw new oa;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const c=`#_callRefreshToken(${a.substring(0,5)}...)`;this._debug(c,"begin");try{this.refreshingDeferred=new Dl;const{data:d,error:h}=await this._refreshAccessToken(a);if(h)throw h;if(!d.session)throw new oa;await this._saveSession(d.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",d.session);const p={data:d.session,error:null};return this.refreshingDeferred.resolve(p),p}catch(d){if(this._debug(c,"error",d),oe(d)){const h={data:null,error:d};return tu(d)||await this._removeSession(),(s=this.refreshingDeferred)===null||s===void 0||s.resolve(h),h}throw(i=this.refreshingDeferred)===null||i===void 0||i.reject(d),d}finally{this.refreshingDeferred=null,this._debug(c,"end")}}async _notifyAllSubscribers(a,s,i=!0){const c=`#_notifyAllSubscribers(${a})`;this._debug(c,"begin",s,`broadcast = ${i}`);try{this.broadcastChannel&&i&&this.broadcastChannel.postMessage({event:a,session:s});const d=[],h=Array.from(this.stateChangeEmitters.values()).map(async p=>{try{await p.callback(a,s)}catch(m){d.push(m)}});if(await Promise.all(h),d.length>0){for(let p=0;p<d.length;p+=1)console.error(d[p]);throw d[0]}}finally{this._debug(c,"end")}}async _saveSession(a){this._debug("#_saveSession()",a),this.suppressGetSessionWarning=!0,await zt(this.storage,`${this.storageKey}-code-verifier`);const s=Object.assign({},a),i=s.user&&s.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!i&&s.user&&await bs(this.userStorage,this.storageKey+"-user",{user:s.user});const c=Object.assign({},s);delete c.user;const d=ym(c);await bs(this.storage,this.storageKey,d)}else{const c=ym(s);await bs(this.storage,this.storageKey,c)}}async _removeSession(){this._debug("#_removeSession()"),this.suppressGetSessionWarning=!1,await zt(this.storage,this.storageKey),await zt(this.storage,this.storageKey+"-code-verifier"),await zt(this.storage,this.storageKey+"-user"),this.userStorage&&await zt(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const a=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{a&&Ot()&&window?.removeEventListener&&window.removeEventListener("visibilitychange",a)}catch(s){console.error("removing visibilitychange callback failed",s)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const a=setInterval(()=>this._autoRefreshTokenTick(),gs);this.autoRefreshTicker=a,a&&typeof a=="object"&&typeof a.unref=="function"?a.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(a);const s=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=s,s&&typeof s=="object"&&typeof s.unref=="function"?s.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(s)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const a=this.autoRefreshTicker;this.autoRefreshTicker=null,a&&clearInterval(a);const s=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,s&&clearTimeout(s)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const a=Date.now();try{return await this._useSession(async s=>{const{data:{session:i}}=s;if(!i||!i.refresh_token||!i.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const c=Math.floor((i.expires_at*1e3-a)/gs);this._debug("#_autoRefreshTokenTick()",`access token expires in ${c} ticks, a tick lasts ${gs}ms, refresh threshold is ${Su} ticks`),c<=Su&&await this._callRefreshToken(i.refresh_token)})}catch(s){console.error("Auto refresh tick failed with error. This is likely a transient error.",s)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(a){if(a.isAcquireTimeout||a instanceof Pg)this._debug("auto refresh token tick lock not available");else throw a}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!Ot()||!window?.addEventListener)return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(a){this._debug("#visibilityChangedCallback","error",a)}},window?.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(a){console.error("_handleVisibilityChange",a)}}async _onVisibilityChanged(a){const s=`#_onVisibilityChanged(${a})`;this._debug(s,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),a||(await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!=="visible"){this._debug(s,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(a,s,i){const c=[`provider=${encodeURIComponent(s)}`];if(i?.redirectTo&&c.push(`redirect_to=${encodeURIComponent(i.redirectTo)}`),i?.scopes&&c.push(`scopes=${encodeURIComponent(i.scopes)}`),this.flowType==="pkce"){const[d,h]=await us(this.storage,this.storageKey),p=new URLSearchParams({code_challenge:`${encodeURIComponent(d)}`,code_challenge_method:`${encodeURIComponent(h)}`});c.push(p.toString())}if(i?.queryParams){const d=new URLSearchParams(i.queryParams);c.push(d.toString())}return i?.skipBrowserRedirect&&c.push(`skip_http_redirect=${i.skipBrowserRedirect}`),`${a}?${c.join("&")}`}async _unenroll(a){try{return await this._useSession(async s=>{var i;const{data:c,error:d}=s;return d?this._returnResult({data:null,error:d}):await ge(this.fetch,"DELETE",`${this.url}/factors/${a.factorId}`,{headers:this.headers,jwt:(i=c?.session)===null||i===void 0?void 0:i.access_token})})}catch(s){if(oe(s))return this._returnResult({data:null,error:s});throw s}}async _enroll(a){try{return await this._useSession(async s=>{var i,c;const{data:d,error:h}=s;if(h)return this._returnResult({data:null,error:h});const p=Object.assign({friendly_name:a.friendlyName,factor_type:a.factorType},a.factorType==="phone"?{phone:a.phone}:a.factorType==="totp"?{issuer:a.issuer}:{}),{data:m,error:g}=await ge(this.fetch,"POST",`${this.url}/factors`,{body:p,headers:this.headers,jwt:(i=d?.session)===null||i===void 0?void 0:i.access_token});return g?this._returnResult({data:null,error:g}):(a.factorType==="totp"&&m.type==="totp"&&(!((c=m?.totp)===null||c===void 0)&&c.qr_code)&&(m.totp.qr_code=`data:image/svg+xml;utf-8,${m.totp.qr_code}`),this._returnResult({data:m,error:null}))})}catch(s){if(oe(s))return this._returnResult({data:null,error:s});throw s}}async _verify(a){return this._acquireLock(this.lockAcquireTimeout,async()=>{try{return await this._useSession(async s=>{var i;const{data:c,error:d}=s;if(d)return this._returnResult({data:null,error:d});const h=Object.assign({challenge_id:a.challengeId},"webauthn"in a?{webauthn:Object.assign(Object.assign({},a.webauthn),{credential_response:a.webauthn.type==="create"?Iw(a.webauthn.credential_response):Yw(a.webauthn.credential_response)})}:{code:a.code}),{data:p,error:m}=await ge(this.fetch,"POST",`${this.url}/factors/${a.factorId}/verify`,{body:h,headers:this.headers,jwt:(i=c?.session)===null||i===void 0?void 0:i.access_token});return m?this._returnResult({data:null,error:m}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+p.expires_in},p)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",p),this._returnResult({data:p,error:m}))})}catch(s){if(oe(s))return this._returnResult({data:null,error:s});throw s}})}async _challenge(a){return this._acquireLock(this.lockAcquireTimeout,async()=>{try{return await this._useSession(async s=>{var i;const{data:c,error:d}=s;if(d)return this._returnResult({data:null,error:d});const h=await ge(this.fetch,"POST",`${this.url}/factors/${a.factorId}/challenge`,{body:a,headers:this.headers,jwt:(i=c?.session)===null||i===void 0?void 0:i.access_token});if(h.error)return h;const{data:p}=h;if(p.type!=="webauthn")return{data:p,error:null};switch(p.webauthn.type){case"create":return{data:Object.assign(Object.assign({},p),{webauthn:Object.assign(Object.assign({},p.webauthn),{credential_options:Object.assign(Object.assign({},p.webauthn.credential_options),{publicKey:Pw(p.webauthn.credential_options.publicKey)})})}),error:null};case"request":return{data:Object.assign(Object.assign({},p),{webauthn:Object.assign(Object.assign({},p.webauthn),{credential_options:Object.assign(Object.assign({},p.webauthn.credential_options),{publicKey:qw(p.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(s){if(oe(s))return this._returnResult({data:null,error:s});throw s}})}async _challengeAndVerify(a){const{data:s,error:i}=await this._challenge({factorId:a.factorId});return i?this._returnResult({data:null,error:i}):await this._verify({factorId:a.factorId,challengeId:s.id,code:a.code})}async _listFactors(){var a;const{data:{user:s},error:i}=await this.getUser();if(i)return{data:null,error:i};const c={all:[],phone:[],totp:[],webauthn:[]};for(const d of(a=s?.factors)!==null&&a!==void 0?a:[])c.all.push(d),d.status==="verified"&&c[d.factor_type].push(d);return{data:c,error:null}}async _getAuthenticatorAssuranceLevel(a){var s,i,c,d;if(a)try{const{payload:S}=fl(a);let N=null;S.aal&&(N=S.aal);let C=N;const{data:{user:E},error:B}=await this.getUser(a);if(B)return this._returnResult({data:null,error:B});((i=(s=E?.factors)===null||s===void 0?void 0:s.filter(I=>I.status==="verified"))!==null&&i!==void 0?i:[]).length>0&&(C="aal2");const T=S.amr||[];return{data:{currentLevel:N,nextLevel:C,currentAuthenticationMethods:T},error:null}}catch(S){if(oe(S))return this._returnResult({data:null,error:S});throw S}const{data:{session:h},error:p}=await this.getSession();if(p)return this._returnResult({data:null,error:p});if(!h)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:m}=fl(h.access_token);let g=null;m.aal&&(g=m.aal);let y=g;((d=(c=h.user.factors)===null||c===void 0?void 0:c.filter(S=>S.status==="verified"))!==null&&d!==void 0?d:[]).length>0&&(y="aal2");const k=m.amr||[];return{data:{currentLevel:g,nextLevel:y,currentAuthenticationMethods:k},error:null}}async _getAuthorizationDetails(a){try{return await this._useSession(async s=>{const{data:{session:i},error:c}=s;return c?this._returnResult({data:null,error:c}):i?await ge(this.fetch,"GET",`${this.url}/oauth/authorizations/${a}`,{headers:this.headers,jwt:i.access_token,xform:d=>({data:d,error:null})}):this._returnResult({data:null,error:new oa})})}catch(s){if(oe(s))return this._returnResult({data:null,error:s});throw s}}async _approveAuthorization(a,s){try{return await this._useSession(async i=>{const{data:{session:c},error:d}=i;if(d)return this._returnResult({data:null,error:d});if(!c)return this._returnResult({data:null,error:new oa});const h=await ge(this.fetch,"POST",`${this.url}/oauth/authorizations/${a}/consent`,{headers:this.headers,jwt:c.access_token,body:{action:"approve"},xform:p=>({data:p,error:null})});return h.data&&h.data.redirect_url&&Ot()&&!s?.skipBrowserRedirect&&window.location.assign(h.data.redirect_url),h})}catch(i){if(oe(i))return this._returnResult({data:null,error:i});throw i}}async _denyAuthorization(a,s){try{return await this._useSession(async i=>{const{data:{session:c},error:d}=i;if(d)return this._returnResult({data:null,error:d});if(!c)return this._returnResult({data:null,error:new oa});const h=await ge(this.fetch,"POST",`${this.url}/oauth/authorizations/${a}/consent`,{headers:this.headers,jwt:c.access_token,body:{action:"deny"},xform:p=>({data:p,error:null})});return h.data&&h.data.redirect_url&&Ot()&&!s?.skipBrowserRedirect&&window.location.assign(h.data.redirect_url),h})}catch(i){if(oe(i))return this._returnResult({data:null,error:i});throw i}}async _listOAuthGrants(){try{return await this._useSession(async a=>{const{data:{session:s},error:i}=a;return i?this._returnResult({data:null,error:i}):s?await ge(this.fetch,"GET",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:s.access_token,xform:c=>({data:c,error:null})}):this._returnResult({data:null,error:new oa})})}catch(a){if(oe(a))return this._returnResult({data:null,error:a});throw a}}async _revokeOAuthGrant(a){try{return await this._useSession(async s=>{const{data:{session:i},error:c}=s;return c?this._returnResult({data:null,error:c}):i?(await ge(this.fetch,"DELETE",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:i.access_token,query:{client_id:a.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new oa})})}catch(s){if(oe(s))return this._returnResult({data:null,error:s});throw s}}async fetchJwk(a,s={keys:[]}){let i=s.keys.find(p=>p.kid===a);if(i)return i;const c=Date.now();if(i=this.jwks.keys.find(p=>p.kid===a),i&&this.jwks_cached_at+Q5>c)return i;const{data:d,error:h}=await ge(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(h)throw h;return!d.keys||d.keys.length===0||(this.jwks=d,this.jwks_cached_at=c,i=d.keys.find(p=>p.kid===a),!i)?null:i}async getClaims(a,s={}){try{let i=a;if(!i){const{data:S,error:N}=await this.getSession();if(N||!S.session)return this._returnResult({data:null,error:N});i=S.session.access_token}const{header:c,payload:d,signature:h,raw:{header:p,payload:m}}=fl(i);s?.allowExpired||ww(d.exp);const g=!c.alg||c.alg.startsWith("HS")||!c.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(c.kid,s?.keys?{keys:s.keys}:s?.jwks);if(!g){const{error:S}=await this.getUser(i);if(S)throw S;return{data:{claims:d,header:c,signature:h},error:null}}const y=kw(c.alg),x=await crypto.subtle.importKey("jwk",g,y,!0,["verify"]);if(!await crypto.subtle.verify(y,x,h,lw(`${p}.${m}`)))throw new Eu("Invalid JWT signature");return{data:{claims:d,header:c,signature:h},error:null}}catch(i){if(oe(i))return this._returnResult({data:null,error:i});throw i}}}Bi.nextInstanceID={};const Qw=Bi,ek="2.103.0";let Ei="";typeof Deno<"u"?Ei="deno":typeof document<"u"?Ei="web":typeof navigator<"u"&&navigator.product==="ReactNative"?Ei="react-native":Ei="node";const tk={"X-Client-Info":`supabase-js-${Ei}/${ek}`},ak={headers:tk},rk={schema:"public"},nk={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},sk={};function Hi(r){"@babel/helpers - typeof";return Hi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},Hi(r)}function ik(r,a){if(Hi(r)!="object"||!r)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var i=s.call(r,a);if(Hi(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(r)}function ok(r){var a=ik(r,"string");return Hi(a)=="symbol"?a:a+""}function lk(r,a,s){return(a=ok(a))in r?Object.defineProperty(r,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[a]=s,r}function Nm(r,a){var s=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);a&&(i=i.filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable})),s.push.apply(s,i)}return s}function it(r){for(var a=1;a<arguments.length;a++){var s=arguments[a]!=null?arguments[a]:{};a%2?Nm(Object(s),!0).forEach(function(i){lk(r,i,s[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(s)):Nm(Object(s)).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(s,i))})}return r}const ck=r=>r?(...a)=>r(...a):(...a)=>fetch(...a),dk=()=>Headers,uk=(r,a,s)=>{const i=ck(s),c=dk();return async(d,h)=>{var p;const m=(p=await a())!==null&&p!==void 0?p:r;let g=new c(h?.headers);return g.has("apikey")||g.set("apikey",r),g.has("Authorization")||g.set("Authorization",`Bearer ${m}`),i(d,it(it({},h),{},{headers:g}))}};function hk(r){return r.endsWith("/")?r:r+"/"}function fk(r,a){var s,i;const{db:c,auth:d,realtime:h,global:p}=r,{db:m,auth:g,realtime:y,global:x}=a,k={db:it(it({},m),c),auth:it(it({},g),d),realtime:it(it({},y),h),storage:{},global:it(it(it({},x),p),{},{headers:it(it({},(s=x?.headers)!==null&&s!==void 0?s:{}),(i=p?.headers)!==null&&i!==void 0?i:{})}),accessToken:async()=>""};return r.accessToken?k.accessToken=r.accessToken:delete k.accessToken,k}function pk(r){const a=r?.trim();if(!a)throw new Error("supabaseUrl is required.");if(!a.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL(hk(a))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}var mk=class extends Qw{constructor(r){super(r)}},gk=class{constructor(r,a,s){var i,c;this.supabaseUrl=r,this.supabaseKey=a;const d=pk(r);if(!a)throw new Error("supabaseKey is required.");this.realtimeUrl=new URL("realtime/v1",d),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",d),this.storageUrl=new URL("storage/v1",d),this.functionsUrl=new URL("functions/v1",d);const h=`sb-${d.hostname.split(".")[0]}-auth-token`,p={db:rk,realtime:sk,auth:it(it({},nk),{},{storageKey:h}),global:ak},m=fk(s??{},p);if(this.storageKey=(i=m.auth.storageKey)!==null&&i!==void 0?i:"",this.headers=(c=m.global.headers)!==null&&c!==void 0?c:{},m.accessToken)this.accessToken=m.accessToken,this.auth=new Proxy({},{get:(y,x)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(x)} is not possible`)}});else{var g;this.auth=this._initSupabaseAuthClient((g=m.auth)!==null&&g!==void 0?g:{},this.headers,m.global.fetch)}this.fetch=uk(a,this._getAccessToken.bind(this),m.global.fetch),this.realtime=this._initRealtimeClient(it({headers:this.headers,accessToken:this._getAccessToken.bind(this)},m.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(y=>this.realtime.setAuth(y)).catch(y=>console.warn("Failed to set initial Realtime auth token:",y)),this.rest=new U1(new URL("rest/v1",d).href,{headers:this.headers,schema:m.db.schema,fetch:this.fetch,timeout:m.db.timeout,urlLengthLimit:m.db.urlLengthLimit}),this.storage=new K5(this.storageUrl.href,this.headers,this.fetch,s?.storage),m.accessToken||this._listenForAuthEvents()}get functions(){return new N1(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(r){return this.rest.from(r)}schema(r){return this.rest.schema(r)}rpc(r,a={},s={head:!1,get:!1,count:void 0}){return this.rest.rpc(r,a,s)}channel(r,a={config:{}}){return this.realtime.channel(r,a)}getChannels(){return this.realtime.getChannels()}removeChannel(r){return this.realtime.removeChannel(r)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getAccessToken(){var r=this,a,s;if(r.accessToken)return await r.accessToken();const{data:i}=await r.auth.getSession();return(a=(s=i.session)===null||s===void 0?void 0:s.access_token)!==null&&a!==void 0?a:r.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:r,persistSession:a,detectSessionInUrl:s,storage:i,userStorage:c,storageKey:d,flowType:h,lock:p,debug:m,throwOnError:g},y,x){const k={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new mk({url:this.authUrl.href,headers:it(it({},k),y),storageKey:d,autoRefreshToken:r,persistSession:a,detectSessionInUrl:s,storage:i,userStorage:c,flowType:h,lock:p,debug:m,throwOnError:g,fetch:x,hasCustomAuthorizationHeader:Object.keys(this.headers).some(S=>S.toLowerCase()==="authorization")})}_initRealtimeClient(r){return new b5(this.realtimeUrl.href,it(it({},r),{},{params:it(it({},{apikey:this.supabaseKey}),r?.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((r,a)=>{this._handleTokenChanged(r,"CLIENT",a?.access_token)})}_handleTokenChanged(r,a,s){(r==="TOKEN_REFRESHED"||r==="SIGNED_IN")&&this.changedAccessToken!==s?(this.changedAccessToken=s,this.realtime.setAuth(s)):r==="SIGNED_OUT"&&(this.realtime.setAuth(),a=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}};const bk=(r,a,s)=>new gk(r,a,s);function xk(){if(typeof window<"u")return!1;const r=globalThis.process;if(!r)return!1;const a=r.version;if(a==null)return!1;const s=a.match(/^v(\d+)\./);return s?parseInt(s[1],10)<=18:!1}xk()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const yk="https://jjwmnainfjnulnnhfprz.supabase.co",vk="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impqd21uYWluZmpudWxubmhmcHJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyOTkyNjksImV4cCI6MjA4OTg3NTI2OX0.GuG2uJpyE-AGj0cwRbH8iOS1_uFzSt8bv4yomNVgSwc",re=bk(yk,vk),wk=(r="")=>r.split(" ").map(a=>a[0]).slice(0,2).join("").toUpperCase()||"?",nu=r=>{const a=Math.floor((Date.now()-new Date(r))/1e3);return a<60?"just now":a<3600?`${Math.floor(a/60)}m ago`:a<86400?`${Math.floor(a/3600)}h ago`:`${Math.floor(a/86400)}d ago`};function Ca({label:r,value:a}){return a?l.jsxs("div",{className:"flex justify-between py-1.5 border-b border-gray-50 dark:border-white/10 last:border-0",children:[l.jsx("span",{className:"text-xs text-gray-400 dark:text-gray-500 shrink-0 w-24",children:r}),l.jsx("span",{className:"text-xs text-[#001d4f] dark:text-white font-medium text-right",children:a})]}):null}function kk({label:r,href:a}){return a?l.jsxs("div",{className:"flex justify-between py-1.5 border-b border-gray-50 dark:border-white/10 last:border-0",children:[l.jsx("span",{className:"text-xs text-gray-400 dark:text-gray-500 shrink-0 w-24",children:r}),l.jsx("a",{href:a,target:"_blank",rel:"noopener noreferrer",onClick:s=>s.stopPropagation(),className:"text-xs text-[#001d4f] dark:text-white font-medium text-right underline hover:opacity-70 transition truncate max-w-[160px]",children:"View profile"})]}):null}function Cm({name:r,avatarUrl:a,tone:s="blue"}){const i=s==="red"?"bg-red-50 text-[#cc2233] dark:bg-red-500/10 dark:text-red-400":"bg-blue-50 text-[#001d4f] dark:bg-white/10 dark:text-white";return a?l.jsx("a",{href:a,target:"_blank",rel:"noopener noreferrer",onClick:c=>c.stopPropagation(),className:"w-9 h-9 rounded-full overflow-hidden shrink-0 border border-gray-100 dark:border-white/10 block",title:"View full photo",children:l.jsx("img",{src:a,alt:r,className:"w-full h-full object-cover"})}):l.jsx("div",{className:`w-9 h-9 rounded-full ${i} text-xs font-semibold flex items-center justify-center shrink-0`,children:wk(r)})}function Tm({onClick:r,title:a="Delete notification"}){return l.jsx("button",{onClick:s=>{s.stopPropagation(),r()},title:a,className:"shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-gray-300 dark:text-gray-600 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition",children:l.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M18 6 6 18"}),l.jsx("path",{d:"m6 6 12 12"})]})})}function Pu({children:r}){return V2.createPortal(l.jsx("div",{className:"fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4",children:r}),document.body)}function Sk({user:r,onConfirm:a,onCancel:s,sending:i}){const[c,d]=v.useState("");return l.jsx(Pu,{children:l.jsxs("div",{className:"bg-white dark:bg-[#001d4f] rounded-2xl shadow-2xl w-full max-w-sm p-5",children:[l.jsx("h3",{className:"text-sm font-semibold text-[#001d4f] dark:text-white mb-1",children:"Reject registration"}),l.jsxs("p",{className:"text-xs text-gray-400 dark:text-gray-500 mb-4",children:["An email will be sent to"," ",l.jsx("span",{className:"font-medium text-[#001d4f] dark:text-white",children:r.email}),"."]}),l.jsxs("label",{className:"block text-xs font-medium text-[#001d4f] dark:text-white mb-1",children:["Reason"," ",l.jsx("span",{className:"text-gray-400 dark:text-gray-500 font-normal",children:"(required)"})]}),l.jsx("textarea",{value:c,onChange:h=>d(h.target.value),placeholder:"e.g. The position you applied for is already filled...",rows:4,className:"w-full text-sm border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-[#001d4f] dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#001d4f] resize-none"}),l.jsxs("div",{className:"flex gap-2 mt-4",children:[l.jsx("button",{onClick:s,disabled:i,className:"flex-1 py-2 rounded-xl text-sm font-medium border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/10 transition",children:"Cancel"}),l.jsx("button",{onClick:()=>c.trim()&&a(c),disabled:!c.trim()||i,className:"flex-1 py-2 rounded-xl text-sm font-semibold bg-red-500 text-white hover:bg-red-600 transition disabled:opacity-40",children:i?"Sending…":"Reject & notify"})]})]})})}function jk({msg:r,onConfirm:a,onCancel:s,sending:i}){const[c,d]=v.useState("");return l.jsx(Pu,{children:l.jsxs("div",{className:"bg-white dark:bg-[#001d4f] rounded-2xl shadow-2xl w-full max-w-sm p-5",children:[l.jsxs("h3",{className:"text-sm font-semibold text-[#001d4f] dark:text-white mb-1",children:["Reply to ",r.sender_name]}),l.jsxs("p",{className:"text-xs text-gray-400 dark:text-gray-500 mb-2",children:["→"," ",l.jsx("span",{className:"font-medium text-[#001d4f] dark:text-white",children:r.sender_email})]}),l.jsxs("div",{className:"bg-gray-50 dark:bg-white/5 rounded-xl px-3 py-2 mb-3 border border-gray-100 dark:border-white/10",children:[l.jsx("p",{className:"text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1",children:"Their message"}),l.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400 italic",children:['"',r.message,'"']})]}),l.jsxs("label",{className:"block text-xs font-medium text-[#001d4f] dark:text-white mb-1",children:["Your reply"," ",l.jsx("span",{className:"text-gray-400 dark:text-gray-500 font-normal",children:"(required)"})]}),l.jsx("textarea",{value:c,onChange:h=>d(h.target.value),placeholder:"Type your reply here...",rows:5,className:"w-full text-sm border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-[#001d4f] dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#001d4f] resize-none"}),l.jsxs("div",{className:"flex gap-2 mt-4",children:[l.jsx("button",{onClick:s,disabled:i,className:"flex-1 py-2 rounded-xl text-sm font-medium border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/10 transition",children:"Cancel"}),l.jsx("button",{onClick:()=>c.trim()&&a(c),disabled:!c.trim()||i,className:"flex-1 py-2 rounded-xl text-sm font-semibold bg-[#001d4f] text-white hover:bg-[#004b8a] transition disabled:opacity-40",children:i?"Sending…":"Send Reply"})]})]})})}function _k({type:r,status:a,onConfirm:s,onCancel:i,sending:c}){const d=r==="message"?"message":"registration record";return v.useEffect(()=>{if(a==="success"){const h=setTimeout(i,1400);return()=>clearTimeout(h)}},[a,i]),l.jsx(Pu,{children:l.jsx("div",{className:"bg-white dark:bg-[#001d4f] rounded-2xl shadow-2xl w-full max-w-xs p-5 text-center",children:a==="success"?l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"mx-auto mb-3 w-11 h-11 rounded-full bg-green-50 dark:bg-green-500/10 flex items-center justify-center",children:l.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",className:"text-green-500",children:l.jsx("path",{d:"M20 6 9 17l-5-5"})})}),l.jsxs("h3",{className:"text-sm font-semibold text-[#001d4f] dark:text-white mb-1",children:[r==="message"?"Message":"Registration record"," deleted"]}),l.jsx("p",{className:"text-xs text-gray-400 dark:text-gray-500",children:"It has been removed successfully."})]}):l.jsxs(l.Fragment,{children:[l.jsxs("h3",{className:"text-sm font-semibold text-[#001d4f] dark:text-white mb-1",children:["Delete this ",d,"?"]}),l.jsx("p",{className:"text-xs text-gray-400 dark:text-gray-500 mb-4",children:"This will permanently delete it from the database. This action can't be undone."}),l.jsxs("div",{className:"flex gap-2",children:[l.jsx("button",{onClick:i,disabled:c,className:"flex-1 py-2 rounded-xl text-sm font-medium border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/10 transition",children:"Cancel"}),l.jsx("button",{onClick:s,disabled:c,className:"flex-1 py-2 rounded-xl text-sm font-semibold bg-red-500 text-white hover:bg-red-600 transition disabled:opacity-40",children:c?"Deleting…":"Delete"})]})]})})})}function Am(){const[r,a]=v.useState(!1),[s,i]=v.useState("registrations"),[c,d]=v.useState([]),[h,p]=v.useState([]),[m,g]=v.useState([]),[y,x]=v.useState({}),[k,S]=v.useState({}),[N,C]=v.useState(!1),[E,B]=v.useState(!1),[M,T]=v.useState(null),[I,X]=v.useState(null),[J,z]=v.useState(null),[Q,te]=v.useState(!1),le=v.useRef(null),[fe,ce]=v.useState({registrations_seen_at:null,messages_seen_at:null}),[Se,ve]=v.useState(!1),[Me,O]=v.useState(!1),[ee,ae]=v.useState(null);v.useEffect(()=>{const P=se=>{le.current&&!le.current.contains(se.target)&&a(!1)};return document.addEventListener("mousedown",P),()=>document.removeEventListener("mousedown",P)},[]),v.useEffect(()=>{(async()=>{const{data:{session:se}}=await re.auth.getSession(),ue=se?.user;if(!ue)return;const{data:pe}=await re.from("profiles").select("tier").eq("id",ue.id).maybeSingle(),wt=(pe?.tier||"").toLowerCase();(wt==="highboard"||wt==="board")&&B(!0)})()},[]),v.useEffect(()=>{E&&(xe(),_(),Z(),A())},[E]);const xe=async()=>{C(!0);const{data:{session:P}}=await re.auth.getSession(),se=P?.user;if(!se){C(!1);return}const{data:ue}=await re.from("pending_registrations").select("*").eq("ref_user_id",se.id).eq("status","pending").order("created_at",{ascending:!1});ue&&d(ue),C(!1)},Z=async()=>{const{data:{session:P}}=await re.auth.getSession(),se=P?.user;if(!se)return;const{data:ue}=await re.from("pending_registrations").select("*").eq("ref_user_id",se.id).neq("status","pending").order("reviewed_at",{ascending:!1});ue&&p(ue)},_=async()=>{const{data:P}=await re.from("contact_messages").select("*").order("replied",{ascending:!0}).order("created_at",{ascending:!1});P&&g(P)},A=async()=>{const{data:{session:P}}=await re.auth.getSession(),se=P?.user;if(!se)return;const{data:ue}=await re.from("notification_reads").select("registrations_seen_at, messages_seen_at").eq("user_id",se.id).maybeSingle();ce(ue||{registrations_seen_at:"1970-01-01T00:00:00Z",messages_seen_at:"1970-01-01T00:00:00Z"})},q=async P=>{const{data:{session:se}}=await re.auth.getSession(),ue=se?.user;if(!ue)return;const pe=new Date().toISOString(),wt={user_id:ue.id,registrations_seen_at:P==="registrations"?pe:fe.registrations_seen_at||pe,messages_seen_at:P==="messages"?pe:fe.messages_seen_at||pe,updated_at:pe};await re.from("notification_reads").upsert(wt,{onConflict:"user_id"}),ce(Qe=>({...Qe,[P==="registrations"?"registrations_seen_at":"messages_seen_at"]:pe}))},F=async()=>{if(!ee)return;const{type:P,id:se}=ee,ue=P==="registration"?"pending_registrations":"contact_messages";te(!0);const{data:pe,error:wt}=await re.from(ue).delete().eq("id",se).select();if(te(!1),wt){alert(wt.message);return}if(!pe||pe.length===0){alert("Delete didn't affect any rows — this is almost always a missing DELETE policy (RLS) on the table in Supabase.");return}P==="registration"?(d(Qe=>Qe.filter(kt=>kt.id!==se)),p(Qe=>Qe.filter(kt=>kt.id!==se))):g(Qe=>Qe.filter(kt=>kt.id!==se)),ae(Qe=>Qe&&{...Qe,status:"success"})},ne=async P=>{x(ue=>({...ue,[P.id]:"loading"}));const{error:se}=await re.from("profiles").insert({id:P.id,email:P.email,first_name:P.first_name,last_name:P.last_name,full_name:P.full_name,gender:P.gender,phone_number:P.phone_number,date_of_birth:P.date_of_birth,faculty:P.faculty,level:P.level,tier:P.tier,position:P.position,avatar_url:P.avatar_url,linkedin_url:P.linkedin_url,team:P.team,status:"active"});if(se){x(ue=>({...ue,[P.id]:null})),alert(se.message);return}await re.from("pending_registrations").update({status:"accepted",reviewed_at:new Date().toISOString()}).eq("id",P.id),x(ue=>({...ue,[P.id]:"accepted"})),setTimeout(()=>{d(ue=>ue.filter(pe=>pe.id!==P.id)),x(ue=>{const pe={...ue};return delete pe[P.id],pe}),Z()},1500)},ke=async P=>{const se=I;te(!0);try{await re.functions.invoke("send-email",{body:{type:"rejection",name:se.full_name||`${se.first_name||""} ${se.last_name||""}`.trim(),email:se.email,reason:P,tier:se.tier||"",position:se.position||""}})}catch(ue){console.warn("Email failed:",ue)}await re.from("pending_registrations").update({status:"rejected",reviewed_at:new Date().toISOString(),rejection_reason:P}).eq("id",se.id),te(!1),X(null),x(ue=>({...ue,[se.id]:"rejected"})),setTimeout(()=>{d(ue=>ue.filter(pe=>pe.id!==se.id)),x(ue=>{const pe={...ue};return delete pe[se.id],pe}),Z()},1500)},Ae=async P=>{const se=J;te(!0);try{await re.functions.invoke("send-email",{body:{type:"reply",name:se.sender_name,email:se.sender_email,originalMessage:se.message,replyText:P}})}catch(ue){console.warn("Reply email failed:",ue)}await re.from("contact_messages").update({replied:!0,reply_text:P}).eq("id",se.id),te(!1),z(null),S(ue=>({...ue,[se.id]:"replied"})),setTimeout(()=>_(),600)},$e=c,Ne=m,Dt=Ne.filter(P=>!P.replied).length,vt=$e.length+Dt;v.useEffect(()=>{if(!fe.registrations_seen_at)return;const P=$e.some(se=>new Date(se.created_at)>new Date(fe.registrations_seen_at));ve(P)},[c,fe.registrations_seen_at]),v.useEffect(()=>{if(!fe.messages_seen_at)return;const P=Ne.some(se=>!se.replied&&new Date(se.created_at)>new Date(fe.messages_seen_at));O(P)},[m,fe.messages_seen_at]);const qt=Se||Me;if(!E)return null;const ka=[...$e.map(P=>({...P,_kind:"pending"})),...h.map(P=>({...P,_kind:P.status}))];return l.jsxs(l.Fragment,{children:[I&&l.jsx(Sk,{user:I,onConfirm:ke,onCancel:()=>X(null),sending:Q}),J&&l.jsx(jk,{msg:J,onConfirm:Ae,onCancel:()=>z(null),sending:Q}),ee&&l.jsx(_k,{type:ee.type,status:ee.status,onConfirm:F,onCancel:()=>ae(null),sending:Q}),l.jsxs("div",{className:"relative",ref:le,children:[l.jsxs("button",{onClick:()=>{a(P=>!P),r||(xe(),_(),Z(),q(s))},className:"relative flex items-center justify-center w-9 h-9 rounded-full transition","aria-label":"Notifications",children:[l.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",className:"text-[#001d4f] dark:text-white",children:[l.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),l.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),qt&&vt>0&&l.jsx("span",{className:"absolute top-0.5 right-0.5 flex items-center justify-center w-4 h-4 rounded-full bg-[#D92525] text-white text-[10px] font-semibold",children:vt>9?"9+":vt})]}),r&&l.jsxs("div",{className:"absolute right-0 mt-3 w-80 bg-white dark:bg-[#00050d] rounded-xl shadow-lg border border-gray-100 dark:border-white/10 overflow-hidden z-50",children:[l.jsxs("div",{className:"px-4 pt-3 pb-2 border-b border-gray-100 dark:border-white/10",children:[l.jsx("p",{className:"text-sm font-semibold text-[#001d4f] dark:text-white mb-2",children:"Notifications"}),l.jsx("div",{className:"flex gap-1",children:[{key:"registrations",label:"Registrations",count:$e.length,visible:Se},{key:"messages",label:"Messages",count:Dt,visible:Me}].map(({key:P,label:se,count:ue,visible:pe})=>l.jsxs("button",{onClick:()=>{i(P),q(P)},className:`flex-1 text-xs py-1.5 rounded-lg font-medium transition flex items-center justify-center gap-1.5
                      ${s===P?"bg-[#001d4f] dark:bg-white text-white dark:text-[#001d4f]":"text-gray-400 dark:text-gray-500 hover:bg-gray-50 dark:hover:bg-white/10"}`,children:[se,pe&&ue>0&&l.jsx("span",{className:"bg-[#D92525] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold",children:ue>9?"9+":ue})]},P))})]}),s==="registrations"&&l.jsx("div",{className:"max-h-[480px] overflow-y-auto divide-y divide-gray-50 dark:divide-white/10",children:N?l.jsx("div",{className:"py-8 text-center text-xs text-gray-400 dark:text-gray-500",children:"Loading…"}):ka.length===0?l.jsx("div",{className:"py-8 text-center text-xs text-gray-400 dark:text-gray-500",children:"No registrations yet"}):ka.map(P=>{const se=P.full_name||`${P.first_name||""} ${P.last_name||""}`.trim()||P.email,ue=[P.tier,P.position].filter(Boolean).join(" · "),pe=y[P.id],wt=M===P.id,Qe=P._kind==="pending",kt=P._kind==="accepted"||pe==="accepted",Ya=P._kind==="rejected"||pe==="rejected";return l.jsxs("div",{className:"px-4 py-3",children:[l.jsxs("div",{className:"flex gap-3 items-start",children:[l.jsx(Cm,{name:se,avatarUrl:P.avatar_url}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsxs("button",{onClick:()=>T(wt?null:P.id),className:"text-sm font-medium text-[#001d4f] dark:text-white truncate w-full text-left flex items-center gap-1 hover:opacity-70 transition",children:[se,l.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:`transition-transform duration-200 shrink-0 ${wt?"rotate-180":""}`,children:l.jsx("path",{d:"m6 9 6 6 6-6"})})]}),ue&&l.jsx("p",{className:"text-xs text-gray-400 dark:text-gray-500 mt-0.5",children:ue}),l.jsx("p",{className:"text-xs text-gray-300 dark:text-gray-600 mt-0.5",children:Qe?nu(P.created_at):P.reviewed_at?`${kt?"Accepted":"Rejected"} ${nu(P.reviewed_at)}`:""})]}),!Qe&&l.jsx("span",{className:`text-[10px] font-semibold px-2 py-0.5 rounded-full border shrink-0 h-fit ${kt?"bg-green-50 text-green-600 border-green-200 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/30":"bg-red-50 text-red-500 border-red-200 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/30"}`,children:kt?"Accepted ✓":"Rejected"}),l.jsx(Tm,{onClick:()=>ae({type:"registration",id:P.id})})]}),wt&&l.jsxs("div",{className:"mt-3 bg-gray-50 dark:bg-white/5 rounded-xl px-3 py-2",children:[l.jsx(Ca,{label:"Email",value:P.email}),l.jsx(Ca,{label:"Phone",value:P.phone_number}),l.jsx(Ca,{label:"Gender",value:P.gender}),l.jsx(kk,{label:"LinkedIn",href:P.linkedin_url}),l.jsx(Ca,{label:"Faculty",value:P.faculty}),l.jsx(Ca,{label:"Level",value:P.level}),l.jsx(Ca,{label:"Date of birth",value:P.date_of_birth}),l.jsx(Ca,{label:"Tier",value:P.tier}),l.jsx(Ca,{label:"Position",value:P.position}),l.jsx(Ca,{label:"Team",value:P.team}),!Qe&&P.reviewed_at&&l.jsx(Ca,{label:kt?"Accepted on":"Reviewed on",value:new Date(P.reviewed_at).toLocaleString(void 0,{dateStyle:"medium",timeStyle:"short"})}),Ya&&P.rejection_reason&&l.jsx(Ca,{label:"Reason",value:P.rejection_reason})]}),Qe&&l.jsx("div",{className:"flex gap-2 mt-2",children:pe==="loading"?l.jsx("span",{className:"text-xs text-gray-400 dark:text-gray-500",children:"Saving…"}):pe==="accepted"?l.jsx("span",{className:"text-xs font-medium text-green-600 bg-green-50 dark:bg-green-500/10 dark:text-green-400 px-2 py-0.5 rounded-full border border-green-200 dark:border-green-500/30",children:"Accepted ✓"}):pe==="rejected"?l.jsx("span",{className:"text-xs font-medium text-red-500 bg-red-50 dark:bg-red-500/10 dark:text-red-400 px-2 py-0.5 rounded-full border border-red-200 dark:border-red-500/30",children:"Rejected"}):l.jsxs(l.Fragment,{children:[l.jsx("button",{onClick:()=>ne(P),className:"text-xs font-semibold bg-[#001d4f] text-white px-3 py-1 rounded-full hover:bg-[#004b8a] transition",children:"Accept"}),l.jsx("button",{onClick:()=>{X(P),a(!1)},className:"text-xs font-semibold text-red-500 dark:text-red-400 border border-red-300 dark:border-red-500/40 px-3 py-1 rounded-full hover:bg-red-50 dark:hover:bg-red-500/10 transition",children:"Reject"})]})})]},P.id)})}),s==="messages"&&l.jsx("div",{className:"max-h-[480px] overflow-y-auto divide-y divide-gray-50 dark:divide-white/10",children:Ne.length===0?l.jsx("div",{className:"py-8 text-center text-xs text-gray-400 dark:text-gray-500",children:"No contact messages yet"}):Ne.map(P=>{const se=P.replied||k[P.id]==="replied";return l.jsxs("div",{className:`px-4 py-3 transition-opacity ${se?"opacity-50":""}`,children:[l.jsxs("div",{className:"flex gap-3 items-start",children:[l.jsx(Cm,{name:P.sender_name,avatarUrl:P.sender_avatar_url,tone:"red"}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{className:"text-sm font-medium text-[#001d4f] dark:text-white truncate",children:P.sender_name}),l.jsx("p",{className:"text-xs text-gray-400 dark:text-gray-500 truncate",children:P.sender_email}),l.jsx("p",{className:"text-xs text-gray-300 dark:text-gray-600 mt-0.5",children:nu(P.created_at)})]}),l.jsx("span",{className:`text-[10px] font-semibold px-2 py-0.5 rounded-full border shrink-0 ${se?"bg-green-50 text-green-600 border-green-200 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/30":"bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30"}`,children:se?"Replied":"New"}),l.jsx(Tm,{onClick:()=>ae({type:"message",id:P.id})})]}),l.jsx("div",{className:"mt-2 bg-gray-50 dark:bg-white/5 rounded-xl px-3 py-2 border border-gray-100 dark:border-white/10",children:l.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400 italic line-clamp-3",children:['"',P.message,'"']})}),se?P.reply_text?l.jsxs("div",{className:"mt-2 bg-blue-50 dark:bg-blue-500/10 rounded-xl px-3 py-2 border border-blue-100 dark:border-blue-500/20",children:[l.jsx("p",{className:"text-[10px] text-[#001d4f] dark:text-blue-300 font-medium mb-0.5",children:"Your reply:"}),l.jsx("p",{className:"text-xs text-[#001d4f]/70 dark:text-blue-300/70 italic line-clamp-2",children:P.reply_text})]}):null:l.jsx("button",{onClick:()=>{z(P),a(!1)},className:"mt-2 text-xs font-semibold bg-[#001d4f] text-white px-3 py-1 rounded-full hover:bg-[#004b8a] transition",children:"Reply via Email"})]},P.id)})}),s==="registrations"&&$e.length>0&&l.jsx("div",{className:"px-4 py-2.5 border-t border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-white/5",children:l.jsx("a",{href:"/IEEE-ECU-SB-Website/settings",className:"text-xs text-[#001d4f] dark:text-white hover:underline font-medium",children:"Manage in Settings →"})})]})]})]})}const Ek=["Technical","Media","PR","HR","Events"],Nk=(r,a,s)=>!r&&!s?null:r==="Highboard"?s||"Highboard":r==="Board"?Ek.includes(s)?`Head of ${a||s}`:s||`${a||"Board"} Member`:s||r||null;function Ck(){const[r,a]=v.useState(!1),[s,i]=v.useState(!1),[c,d]=v.useState(!1),[h,p]=v.useState(!1),[m,g]=v.useState(""),[y,x]=v.useState(null),[k,S]=v.useState(!1),[N,C]=v.useState(""),[E,B]=v.useState(()=>{if(typeof window>"u")return!1;const Z=localStorage.getItem("theme");return Z?Z==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches});v.useEffect(()=>{const Z=document.documentElement;E?(Z.classList.add("dark"),localStorage.setItem("theme","dark")):(Z.classList.remove("dark"),localStorage.setItem("theme","light"))},[E]);const M=()=>B(Z=>!Z),T=ca(),I=_s(),X=v.useRef(null),J=[{label:"Home",path:"/",icon:l.jsx(Cv,{size:18})},{label:"About Us",path:"/about",icon:l.jsx(Av,{size:18})},{label:"Committees",path:"/about#committees",icon:l.jsx(Es,{size:18})},{label:"Our Heads",path:"/about#heads",icon:l.jsx(jg,{size:18})},{label:"Membership",path:"/about#join",icon:l.jsx(pu,{size:18})},{label:"Contact Us",path:"/ContactUs",icon:l.jsx(wn,{size:18})}],z=Z=>{if(Z.path.includes("#")){const[A,q]=Z.path.split("#");return T.pathname===A&&N===`#${q}`}return J.some(A=>A.path.includes("#")&&A.path.split("#")[0]===Z.path)?T.pathname===Z.path&&!N:T.pathname===Z.path};v.useEffect(()=>{C(T.hash||"")},[T.pathname,T.hash]),v.useEffect(()=>{if(T.pathname!=="/about")return;const Z=J.filter(q=>q.path.startsWith("/about#")).map(q=>q.path.split("#")[1]);let _;const A=setTimeout(()=>{const q=Z.map(F=>document.getElementById(F)).filter(Boolean);q.length&&(_=new IntersectionObserver(F=>{F.forEach(ne=>{ne.isIntersecting&&C(`#${ne.target.id}`)})},{rootMargin:"-45% 0px -45% 0px",threshold:0}),q.forEach(F=>_.observe(F)))},300);return()=>{clearTimeout(A),_&&_.disconnect()}},[T.pathname]);const Q=Z=>_=>{if(Z.path.includes("#")){if(T.pathname==="/about"){_.preventDefault();const A=Z.path.split("#")[1],q=document.getElementById(A);if(q){const F=q.getBoundingClientRect().top+window.scrollY-100;window.scrollTo({top:F,behavior:"smooth"})}window.history.replaceState(null,"",Z.path),C(`#${A}`)}}else T.pathname===Z.path&&(_.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),T.hash&&window.history.replaceState(null,"",Z.path),C(""));a(!1)};v.useEffect(()=>{const Z=setTimeout(()=>S(!0),80);return()=>clearTimeout(Z)},[]),v.useEffect(()=>{const Z=()=>d(window.scrollY>30);return window.addEventListener("scroll",Z),()=>window.removeEventListener("scroll",Z)},[]),v.useEffect(()=>{const Z=_=>{X.current&&!X.current.contains(_.target)&&i(!1)};return document.addEventListener("mousedown",Z),()=>document.removeEventListener("mousedown",Z)},[]);const te=async Z=>{const{data:_,error:A}=await re.from("profiles").select("role, avatar_url, tier, team, position, full_name, first_name").eq("id",Z).maybeSingle();if(A){console.error(A);return}_&&x(_)};v.useEffect(()=>{(async()=>{const{data:{session:q}}=await re.auth.getSession();q?.user?(p(!0),g(q.user.email||""),te(q.user.id)):(p(!1),g(""),x(null))})();const{data:{subscription:_}}=re.auth.onAuthStateChange((q,F)=>{F?.user?(p(!0),g(F.user.email||""),setTimeout(()=>te(F.user.id),0)):(p(!1),g(""),x(null))}),A=async()=>{const{data:{session:q}}=await re.auth.getSession();q?.user&&te(q.user.id)};return window.addEventListener("avatar-updated",A),()=>{_.unsubscribe(),window.removeEventListener("avatar-updated",A)}},[]);const le=async()=>{try{await re.auth.signOut({scope:"local"})}catch{}p(!1),g(""),x(null),a(!1),i(!1),I("/login")},fe=y?.avatar_url||null,ce=Nk(y?.tier,y?.team,y?.position||y?.Position),Se=y?.tier||null,ve=y?.tier||y?.role||null,O=(y?.full_name||y?.first_name||m||"?").split(" ").map(Z=>Z[0]).slice(0,2).join("").toUpperCase(),ee=T.pathname==="/",ae=({size:Z=36})=>fe?l.jsx("img",{src:fe,alt:"avatar",style:{width:Z,height:Z},className:"rounded-full object-cover flex-shrink-0 border-2 transition-colors duration-300 border-[#023260] dark:border-white/40"},fe):l.jsx("div",{style:{width:Z,height:Z},className:"rounded-full bg-[#023260] dark:bg-slate-200 flex items-center justify-center text-white dark:text-slate-900 font-bold flex-shrink-0 select-none transition-colors duration-300 ",children:l.jsx("span",{style:{fontSize:Math.max(12,Z*.36)},children:O})}),xe=({mobile:Z=!1})=>l.jsxs("button",{onClick:M,"aria-label":"Toggle dark mode",title:E?"Switch to light mode":"Switch to dark mode",className:`relative flex items-center justify-center rounded-full transition-all duration-300 ${Z?"w-10 h-10 text-[#023260] dark:text-white":"w-9 h-9 lg:w-10 lg:h-10 text-[#023260] dark:text-white"}`,children:[l.jsx("span",{className:"absolute inset-0 flex items-center justify-center transition-all duration-300",style:{transform:E?"rotate(180deg) scale(0)":"rotate(0) scale(1)",opacity:E?0:1},children:l.jsx(Uu,{size:18})}),l.jsx("span",{className:"absolute inset-0 flex items-center justify-center transition-all duration-300 ",style:{transform:E?"rotate(0) scale(1)":"rotate(-180deg) scale(0)",opacity:E?1:0},children:l.jsx(Bu,{size:18})})]});return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
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
      `}),l.jsx("nav",{className:`navbar-shell ${k?"navbar-mounted":""} ${c?"navbar-scrolled":""} fixed top-0 left-0 right-0 py-1.5 sm:py-2 rounded-full mx-2 sm:mx-3 mt-3 sm:mt-5 px-3 sm:px-5 transition-colors duration-300 z-50 ${c?"backdrop-blur-md dark:backdrop-blur-xl bg-white/80 dark:bg-[#023260]/40 shadow-sm text-[#023260] dark:text-white":"bg-transparent text-[#023260] dark:text-white"}`,children:l.jsxs("div",{className:"max-w-7xl mx-auto flex justify-between items-center gap-2",children:[l.jsx(tt,{to:"/",onClick:()=>{T.pathname==="/"&&window.scrollTo({top:0,behavior:"smooth"}),a(!1)},className:"flex-shrink-0",children:l.jsx("img",{src:E?wl:vl,alt:"IEEE Logo",className:`transition-all duration-300 ${E?"h-12 sm:h-14 lg:h-16 w-auto":"h-9 sm:h-10 lg:h-12 w-auto"} ${E?"drop-shadow-[0_0_3px_rgba(255,255,255,0.15)]":""}`})}),l.jsx("div",{className:`nav-links-wrap hidden md:flex space-x-3 lg:space-x-6 xl:space-x-8 font-medium text-xs lg:text-sm justify-center flex-1 min-w-0 ${ee?"nav-links-hidden":"nav-links-visible"}`,children:J.map((Z,_)=>l.jsx(tt,{to:Z.path,onClick:Q(Z),className:`nav-link transition duration-300 hover:text-[#023260]/70 dark:hover:text-white/70 ${z(Z)?"nav-link-active text-[#023260] dark:text-white font-semibold":""}`,children:Z.label},_))}),l.jsxs("div",{className:"hidden md:flex items-center gap-2 lg:gap-3 flex-shrink-0",children:[l.jsx(xe,{}),h?l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx(Am,{}),l.jsxs("div",{className:"relative",ref:X,children:[l.jsx("button",{onClick:()=>i(!s),"aria-label":"Account menu",className:"flex items-center cursor-pointer",children:l.jsx(ae,{size:50})}),s&&l.jsxs("div",{className:"absolute right-0 mt-3 w-56 max-w-[90vw] bg-white dark:bg-[#00040c] rounded-xl shadow-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_26px_rgba(13,90,167,0.15)] border border-gray-100 dark:border-white/10 overflow-hidden z-50",children:[l.jsxs("div",{className:"px-4 py-3 border-b border-gray-100 dark:border-white/10",children:[l.jsx("p",{className:"text-xs text-gray-400 dark:text-gray-500 truncate",children:m}),ce?l.jsx("p",{className:"text-xs font-semibold text-[#023260] dark:text-white mt-0.5",children:ce}):null,Se?l.jsx("p",{className:"text-[10px] text-[#023260]/60 dark:text-white/50 capitalize mt-0.5",children:Se}):null,!ce&&!Se&&ve&&l.jsx("p",{className:"text-xs font-medium text-[#023260] dark:text-white capitalize mt-0.5",children:ve})]}),l.jsxs(tt,{to:"/ComingSoon",onClick:()=>i(!1),className:"flex items-center gap-2 px-4 py-3 text-sm text-[#023260] dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 transition",children:[l.jsx(Jp,{size:16})," Dashboard"]}),l.jsxs(tt,{to:"/account",onClick:()=>i(!1),className:"flex items-center gap-2 px-4 py-3 text-sm text-[#023260] dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 transition",children:[l.jsx(Kp,{size:16})," My Account"]}),l.jsxs(tt,{to:"/settings",onClick:()=>i(!1),className:"flex items-center gap-2 px-4 py-3 text-sm text-[#023260] dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 transition",children:[l.jsx(Qp,{size:16})," Settings"]}),l.jsx("div",{className:"border-t border-gray-100 dark:border-white/10"}),l.jsxs("button",{onClick:le,className:"flex items-center gap-2 w-full px-4 py-3 text-sm text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 transition",children:[l.jsx(Zp,{size:16})," Logout"]})]})]})]}):l.jsx(tt,{to:"/login",children:l.jsx("button",{className:"btn-login text-white font-semibold px-5 py-1.5 rounded-full",children:"Login"})})]}),!r&&l.jsxs("div",{className:"md:hidden flex items-center gap-2",children:[l.jsx(xe,{mobile:!0}),l.jsx("button",{className:"text-[#023260] dark:text-white",onClick:()=>a(!0),children:l.jsx(Kv,{size:30})})]})]})}),r&&l.jsx("div",{className:"fixed inset-0 bg-black/40 backdrop-blur-sm z-50",onClick:()=>a(!1)}),l.jsxs("div",{className:`fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-white dark:bg-[#00040c] dark:shadow-[0_10px_40px_rgba(0,0,0,0.6),0_0_36px_rgba(13,90,167,0.14)] z-50 shadow-2xl transform transition-transform duration-300 flex flex-col ${r?"translate-x-0":"translate-x-full"}`,children:[l.jsxs("div",{className:"flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-white/10",children:[l.jsx("img",{src:E?wl:vl,alt:"IEEE Logo",className:`w-auto transition-all duration-300 ${E?"h-14":"h-10"} ${E?"drop-shadow-[0_0_3px_rgba(255,255,255,0.15)]":""}`}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(xe,{mobile:!0}),l.jsx("button",{onClick:()=>a(!1),className:"text-gray-400 hover:text-gray-600 dark:hover:text-white transition p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-[#023260]/30",children:l.jsx(S1,{size:22})})]})]}),h&&l.jsxs("div",{className:"px-5 py-4 border-b border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-[#023260]/20",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx(ae,{size:60}),l.jsxs("div",{className:"min-w-0",children:[l.jsx("p",{className:"text-xs text-gray-400 dark:text-gray-500 truncate",children:m}),ce?l.jsx("p",{className:"text-xs font-semibold text-[#023260] dark:text-white truncate",children:ce}):null,Se?l.jsx("p",{className:"text-[10px] text-[#023260]/60 dark:text-white/50 capitalize",children:Se}):null,!ce&&!Se&&l.jsx("p",{className:"text-xs font-semibold text-[#023260] dark:text-white capitalize",children:ve})]})]}),l.jsx("div",{className:"mt-3",children:l.jsx(Am,{})})]}),l.jsxs("div",{className:"flex-1 overflow-y-auto px-3 py-4",children:[l.jsx("p",{className:"text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider px-3 mb-2",children:"Navigation"}),J.map((Z,_)=>l.jsxs(tt,{to:Z.path,onClick:Q(Z),className:`flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition mb-1 ${z(Z)?"bg-blue-50 dark:bg-white/10 text-[#023260] dark:text-white":"text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#023260]/30 hover:text-[#023260] dark:hover:text-white"}`,children:[l.jsx("span",{className:z(Z)?"text-[#D92525]":"text-gray-400 dark:text-gray-500",children:Z.icon}),Z.label]},_)),h&&l.jsxs("div",{className:"mt-4",children:[l.jsx("p",{className:"text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider px-3 mb-2",children:"Account"}),l.jsxs(tt,{to:"/dashboard",onClick:()=>a(!1),className:"flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#023260]/30 hover:text-[#023260] dark:hover:text-white transition mb-1",children:[l.jsx(Jp,{size:18,className:"text-gray-400 dark:text-gray-500"})," ","Dashboard"]}),l.jsxs(tt,{to:"/account",onClick:()=>a(!1),className:"flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#023260]/30 hover:text-[#023260] dark:hover:text-white transition mb-1",children:[l.jsx(Kp,{size:18,className:"text-gray-400 dark:text-gray-500"})," My Account"]}),l.jsxs(tt,{to:"/settings",onClick:()=>a(!1),className:"flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#023260]/30 hover:text-[#023260] dark:hover:text-white transition mb-1",children:[l.jsx(Qp,{size:18,className:"text-gray-400 dark:text-gray-500"})," Settings"]})]})]}),l.jsx("div",{className:"px-3 py-4 border-t border-gray-100 dark:border-white/10",children:h?l.jsxs("button",{onClick:le,className:"flex items-center gap-2 w-full px-4 py-3 text-sm text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 transition rounded-xl",children:[l.jsx(Zp,{size:16})," Logout"]}):l.jsx(tt,{to:"/login",onClick:()=>a(!1),children:l.jsx("button",{className:"btn-login w-full text-white font-semibold py-3 rounded-full text-sm",children:"Login"})})})]})]})}function Tk(){return l.jsxs("footer",{className:"fixed bottom-0 left-0 w-full  py-2 text-center text-xs text-zinc-700  backdrop-blur-sm ",children:["© ",new Date().getFullYear()," IEEE ECU SB Team. All rights reserved."]})}const Ak=[{char:"程",top:"-8%",left:"-6%",size:220,tint:"blue",rotate:4,delay:"0s"},{char:"迎",top:"auto",bottom:"-8%",right:"-6%",size:220,tint:"red",rotate:-5,delay:"1.2s"},{char:"智",top:"5%",right:"4%",size:100,tint:"red",rotate:-4,delay:"2.1s"},{char:"创",top:"auto",bottom:"6%",left:"5%",size:100,tint:"blue",rotate:6,delay:"0.6s"},{char:"迎",top:"26%",left:"-3%",size:60,tint:"red",rotate:-7,delay:"2.9s",hideMobile:!0},{char:"程",top:"auto",bottom:"26%",right:"-3%",size:60,tint:"blue",rotate:6,delay:"0.4s",hideMobile:!0},{char:"志",top:"50%",left:"-4%",size:65,tint:"blue",rotate:3,delay:"3.2s",hideMobile:!0},{char:"新",top:"50%",right:"-4%",size:65,tint:"red",rotate:-6,delay:"1.8s",hideMobile:!0},{char:"匠",top:"8%",left:"20%",size:55,tint:"red",rotate:5,delay:"2.6s",hideMobile:!0},{char:"想",top:"auto",bottom:"9%",right:"22%",size:55,tint:"blue",rotate:-5,delay:"3.6s",hideMobile:!0}];function Rk(){const r=v.useRef(null),a=v.useRef(null),s=v.useRef(null),i=v.useRef(null),c=v.useRef(null);return v.useEffect(()=>{const d=r.current;if(!d)return;const h=d.getContext("2d");let p;const m=()=>{d.width=window.innerWidth,d.height=window.innerHeight};m(),window.addEventListener("resize",m);const g=70,y=140,x=Array.from({length:g},()=>{const S=Math.random()>.88;return{x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,vx:(Math.random()-.5)*(S?.8:.5),vy:(Math.random()-.5)*(S?.8:.5),r:S?Math.random()*1.5+1.8:Math.random()*1.2+1,pulse:Math.random()*Math.PI*2,pulseSpeed:.015+Math.random()*.015,red:Math.random()>.87,accent:S}}),k=()=>{const S=d.width,N=d.height;h.fillStyle="rgba(0,0,0,0.25)",h.globalCompositeOperation="destination-out",h.fillRect(0,0,S,N),h.globalCompositeOperation="source-over",x.forEach(C=>{C.x+=C.vx,C.y+=C.vy,C.pulse+=C.pulseSpeed,(C.x<0||C.x>S)&&(C.vx*=-1),(C.y<0||C.y>N)&&(C.vy*=-1)});for(let C=0;C<x.length;C++)for(let E=C+1;E<x.length;E++){const B=x[C].x-x[E].x,M=x[C].y-x[E].y,T=Math.sqrt(B*B+M*M);if(T<y){const I=1-T/y,X=x[C].accent||x[E].accent;h.beginPath(),h.moveTo(x[C].x,x[C].y),h.lineTo(x[E].x,x[E].y),h.strokeStyle=`rgba(74,158,255,${I*(X?.45:.3)})`,h.lineWidth=X?1:.7,h.stroke()}}x.forEach(C=>{const E=.5+.5*Math.sin(C.pulse),B=C.red?"255,90,90":"74,158,255";h.save(),h.shadowBlur=C.accent?6:3,h.shadowColor=`rgba(${B},0.6)`,h.beginPath(),h.arc(C.x,C.y,C.r+(C.accent?E*.6:0),0,Math.PI*2),h.fillStyle=`rgba(${B},${.35+.35*E})`,h.fill(),h.restore()}),p=requestAnimationFrame(k)};return k(),()=>{cancelAnimationFrame(p),window.removeEventListener("resize",m)}},[]),v.useEffect(()=>{[{ref:c,delay:0},{ref:a,delay:150},{ref:s,delay:350},{ref:i,delay:550}].forEach(({ref:h,delay:p})=>{setTimeout(()=>{h.current&&h.current.classList.add("animate-in")},p)})},[]),l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
        .home-bg {
          background:
            radial-gradient(ellipse 750px 550px at 18% 12%, rgba(217,37,37,0.07), transparent 60%),
            radial-gradient(ellipse 850px 600px at 88% 8%, rgba(2,50,96,0.14), transparent 60%),
            linear-gradient(to top, #001642, transparent);
          overflow: hidden;
          transition: background 0.5s ease, background-color 0.5s ease, color 0.5s ease;
        }

        .dark .home-bg {
          background:
            radial-gradient(ellipse 900px 650px at 12% 18%, rgba(217,37,37,0.20), transparent 60%),
            radial-gradient(ellipse 1000px 750px at 88% 12%, rgba(13,90,167,0.28), transparent 60%),
            radial-gradient(ellipse 1100px 800px at 50% 105%, rgba(217,37,37,0.14), transparent 65%),
            linear-gradient(to top, #001233, #00040c 60%, #00040c);
        }

        /* ── Watermark characters ──
           Drifting motion (same device as About/ComingSoon). Positions
           are edge/corner-only (see HOME_BG_CHARS) so none sit behind
           the hero text. Dark-mode opacity is kept very low so they
           read as a faint texture, not a competing layer. */
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
          opacity: 0.1;
          filter: drop-shadow(0 0 18px rgba(217,37,37,0.18));
        }
        .dark .home-bg-char-blue {
          color: #4a9eff !important;
          opacity: 0.09;
          filter: drop-shadow(0 0 18px rgba(74,158,255,0.16));
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
      `}),l.jsxs("main",{className:"home-bg relative overflow-hidden h-screen flex flex-col items-center justify-center px-6 md:px-20 text-center dark:bg-[#00050d] transition-colors duration-500",children:[l.jsx("canvas",{ref:r,className:"absolute inset-0 w-full h-full",style:{display:"block"}}),Ak.map((d,h)=>{const p={fontSize:d.size,"--home-rot":`${d.rotate}deg`,transform:`rotate(${d.rotate}deg)`,animationDelay:d.delay,color:d.tint==="red"?"rgba(217,37,37,0.12)":"rgba(255,255,255,0.09)"};return d.top!==void 0&&(p.top=d.top),d.bottom!==void 0&&(p.bottom=d.bottom),d.left!==void 0&&(p.left=d.left),d.right!==void 0&&(p.right=d.right),l.jsx("span",{className:`home-bg-char home-bg-char-${d.tint} ${d.hideMobile?"hidden md:block":""}`,style:p,children:d.char},h)}),l.jsxs("div",{className:"relative z-10 flex flex-col items-center max-w-xl",children:[l.jsxs("div",{ref:c,className:"fade-left flex items-center gap-3 mb-5",children:[l.jsx("span",{className:"line-grow h-px bg-[#D92525] block"}),l.jsx("span",{className:"text-xs font-semibold tracking-[0.20em] uppercase text-[#D92525]",children:"The Egyptian Chinese University"}),l.jsx("span",{className:"line-grow h-px bg-[#D92525] block"})]}),l.jsxs("h1",{ref:a,className:"fade-up text-3xl md:text-5xl font-bold mb-5 text-[#001d4f] dark:text-white leading-tight relative transition-colors duration-300",children:["Welcome to"," ",l.jsxs("span",{className:"relative inline-block text-[#001d4f] dark:text-white transition-colors duration-300",children:["IEEE ECU",l.jsx("span",{className:"absolute -bottom-1 left-0 w-full h-0.5 bg-[#D92525]"})]})," ","Student Branch!"]}),l.jsx("p",{ref:s,className:"fade-up text-lg mb-10 text-white",children:"Where passion meets innovation and ideas come to life"}),l.jsxs("div",{ref:i,className:"scale-in flex flex-wrap items-center justify-center gap-4",children:[l.jsx(tt,{to:"/about",children:l.jsx("button",{className:"btn-primary relative pulse-ring text-white font-semibold px-8 py-2.5 rounded-full transition-all duration-500",children:"Who Are We ?"})}),l.jsx(tt,{to:"/timeline",children:l.jsxs("button",{className:"btn-secondary text-white font-semibold px-6 py-2.5 rounded-full border border-white/30 flex items-center gap-2 group",children:["Latest News",l.jsx(Ii,{size:16,className:"group-hover:translate-x-1 transition-transform duration-300"})]})})]})]})]})]})}const zk="/IEEE-ECU-SB-Website/assets/about1-D4KB9JCD.jpg",Ok="/IEEE-ECU-SB-Website/assets/about2-Ba9AhGAR.jpg",Dk="/IEEE-ECU-SB-Website/assets/DrRania-Dr5tEJ_X.png",Yg=["Branch Counselor","Mentor","HighBoard","Technical","HR","PR","Media","Events"],Gg=[{key:"Branch Counselor",role:"Branch Counselor",name:"Prof. Rania El_Swief",img:Dk,linkedin:"https://linkedin.com/in/REPLACE_ME"}],Vg=["Tech","Media","PR","HR","Events"],Rm=["Chair","Vice Chair","Secretary","Treasurer","Webmaster"],Mk=(r="",a="")=>`${r.charAt(0)}${a.charAt(0)}`.toUpperCase()||"??";function Lk(r){const{tier:a,team:s,position:i}=r;return a==="Mentor"?"Mentor":a==="Highboard"?i||"Highboard":a==="Board"?Vg.includes(i)?`Head of ${s||i}`:i||`${s||"Board"} Member`:i||a||"Member"}function zm(r){const a=Rm.findIndex(s=>s.toLowerCase()===(r||"").toLowerCase());return a===-1?Rm.length:a}function Om(r){const a=(r||"").toLowerCase();return Vg.some(s=>s.toLowerCase()===a)?0:a.includes("vice")?1:2}function Uk(r){const a={};Yg.filter(i=>!Gg.some(c=>c.key===i)).forEach(i=>a[i]=[]),r.forEach(i=>{i.tier==="Mentor"&&a.Mentor?a.Mentor.push(i):i.tier==="Highboard"&&a.HighBoard?a.HighBoard.push(i):i.tier==="Board"&&i.team&&a[i.team]&&a[i.team].push(i)}),Object.entries(a).forEach(([i,c])=>{i==="HighBoard"?c.sort((d,h)=>zm(d.position)-zm(h.position)):c.sort((d,h)=>Om(d.position)-Om(h.position))});const s=Object.fromEntries(Object.entries(a).map(([i,c])=>[i,c.map(d=>({id:d.id,img:d.avatar_url||null,name:d.full_name||`${d.first_name||""} ${d.last_name||""}`.trim(),role:Lk(d),linkedin:d.linkedin_url||null}))]));return Object.fromEntries(Object.entries(s).filter(([,i])=>i.length>0))}function Xg({autoRotate:r=!0,floatDuration:a=1600,sectionPause:s=700}){const[i,c]=v.useState([]),[d,h]=v.useState(!0),[p,m]=v.useState(""),[g,y]=v.useState(0),[x,k]=v.useState(0),[S,N]=v.useState(-1);v.useEffect(()=>{(async()=>{h(!0),m("");const{data:I,error:X}=await re.from("profiles").select("id, first_name, last_name, full_name, avatar_url, tier, team, position, linkedin_url").not("tier","is",null);X?m(X.message||"Failed to load team members."):c(I||[]),h(!1)})()},[]);const C=v.useMemo(()=>{const T=Uk(i),I={};Gg.forEach(z=>{I[z.key]=[{id:`static-${z.key}`,img:z.img,name:z.name,role:z.role,linkedin:z.linkedin}]});const X={...I,...T},J={};return Yg.forEach(z=>{X[z]&&(J[z]=X[z])}),J},[i]),E=v.useMemo(()=>Object.keys(C),[C]);v.useEffect(()=>{g>=E.length&&y(0)},[E,g]);const B=E[g];v.useEffect(()=>{if(!r)return;const T=C[B]||[];if(T.length===0)return;let I=0;N(0);const X=setInterval(()=>{I+=1,I<T.length?N(I):(clearInterval(X),N(-1),E.length>1&&setTimeout(()=>{y(J=>J===E.length-1?0:J+1),k(J=>J+1)},s))},a);return()=>clearInterval(X)},[x,B,r,a,s]),v.useEffect(()=>{const T=new IntersectionObserver(I=>{I.forEach(X=>{X.target.classList.toggle("in-view",X.isIntersecting)})},{threshold:.12});return document.querySelectorAll(".th-reveal").forEach(I=>T.observe(I)),()=>T.disconnect()},[d]);const M=T=>{y(T),k(I=>I+1)};return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
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

        /* ── Member spotlight float ──
           Applied one card at a time as the section auto-plays through
           its members, before advancing to the next section tab. */
        @keyframes thFloatBob {
          0%   { transform: translateY(0) scale(1); }
          35%  { transform: translateY(-14px) scale(1.045); }
          70%  { transform: translateY(-10px) scale(1.035); }
          100% { transform: translateY(0) scale(1); }
        }
        .th-card-floating .th-ring {
          animation: thFloatBob 1.3s cubic-bezier(0.45,0,0.55,1) both;
        }
        .th-card-floating .th-ring::before {
          animation-play-state: paused;
          opacity: 0.6;
          border-color: #D92525;
        }
        .th-card-floating .th-avatar-img,
        .th-card-floating .th-avatar-placeholder {
          box-shadow: 0 14px 30px rgba(2,50,96,0.32), 0 0 0 3px rgba(217,37,37,0.25);
        }
        .dark .th-card-floating .th-avatar-img,
        .dark .th-card-floating .th-avatar-placeholder {
          box-shadow: 0 14px 30px rgba(0,0,0,0.6), 0 0 22px rgba(217,37,37,0.35);
        }
        .th-card-floating .th-role-badge {
          background: rgba(217,37,37,0.1);
          border-color: rgba(217,37,37,0.45);
          color: #D92525;
        }
        .dark .th-card-floating .th-role-badge {
          background: rgba(217,37,37,0.22);
          border-color: rgba(217,37,37,0.5);
          color: #fff;
        }
        .th-card-floating .th-role-badge,
        .th-card-floating .th-name {
          transition: color 0.4s ease, background 0.4s ease, border-color 0.4s ease;
        }

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
      `}),l.jsxs("section",{id:"heads",className:"scroll-mt-28",children:[l.jsxs("div",{className:"mb-3 text-center th-reveal",children:[l.jsxs("span",{className:"th-eyebrow justify-center",children:[l.jsx("span",{className:"th-stem"}),l.jsxs("span",{className:"text-xs font-semibold tracking-[0.25em] uppercase text-[#D92525] flex items-center gap-2",children:[l.jsx(jg,{size:14}),"Our Heads"]}),l.jsx("span",{className:"th-stem"})]}),l.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-[#023260] dark:text-white mt-4",children:"Meet The Team Behind It All"}),l.jsx("p",{className:"text-gray-600 dark:text-gray-300 mt-3 max-w-2xl mx-auto leading-relaxed",children:"From our branch counselor to every committee head — the people steering IEEE ECU SB forward."})]}),d&&l.jsx("div",{className:"flex justify-center py-10",children:l.jsx("div",{className:"th-spinner"})}),!d&&p&&l.jsx("p",{className:"text-center text-[#D92525] text-sm",children:p}),!d&&!p&&E.length===0&&l.jsx("p",{className:"text-center text-gray-500 dark:text-gray-400 text-sm",children:"No approved members yet — once registrations are approved, they'll appear here automatically."}),!d&&!p&&E.length>0&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"th-tabs",children:E.map((T,I)=>l.jsx("button",{onClick:()=>M(I),className:`th-tab ${g===I?"th-tab-active":""}`,children:T},T))}),l.jsx("div",{className:"th-grid",children:C[B].map((T,I)=>l.jsxs("div",{style:{"--th-delay":`${I*70}ms`},className:`th-card ${S===I?"th-card-floating":""}`,children:[l.jsxs("div",{className:"th-ring",children:[T.img?l.jsx("img",{src:T.img,alt:T.name,className:"th-avatar-img"}):l.jsx("div",{className:"th-avatar-placeholder",children:Mk(T.name.split(" ")[0],T.name.split(" ")[1])}),T.linkedin&&l.jsx("a",{href:T.linkedin,target:"_blank",rel:"noopener noreferrer",title:`${T.name} on LinkedIn`,"aria-label":`${T.name} on LinkedIn`,className:"th-linkedin-btn",children:l.jsx(Tl,{size:17})})]}),l.jsx("p",{className:"th-name",children:T.name}),l.jsx("div",{className:"th-role-badge",children:T.role})]},T.id))},x),l.jsx("div",{className:"th-dots",children:E.map((T,I)=>l.jsx("div",{onClick:()=>M(I),className:`th-dot ${I===g?"th-dot-active":""}`},I))})]})]})]})}function Bk({eyebrow:r,title:a,subtitle:s,icon:i}){return l.jsxs("div",{className:"mb-10 text-center reveal-auto",children:[l.jsxs("span",{className:"ab-eyebrow justify-center",children:[l.jsx("span",{className:"stem h-px bg-[#D92525] block"}),l.jsxs("span",{className:"text-xs font-semibold tracking-[0.25em] uppercase text-[#D92525] flex items-center gap-2",children:[i&&l.jsx(i,{size:14}),r]}),l.jsx("span",{className:"stem h-px bg-[#D92525] block"})]}),l.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-[#023260] dark:text-white mt-4",children:a}),s&&l.jsx("p",{className:"text-gray-600 dark:text-gray-300 mt-3 max-w-2xl mx-auto leading-relaxed",children:s})]})}const Hk=[{key:"non-tech",accent:"#D92525",cta:"red",icon:Es,title:"Non-Technical Team",desc:"Our non-technical team drives the community — managing events, communications, media, and member experience to keep the branch thriving.",stats:[{value:"4+",label:"Teams"},{value:"50+",label:"Members"}],subTeams:[{icon:g1,label:"HR",bg:{top:"6%",left:"4%",size:100,rotate:-16,opacity:.06}},{icon:Vv,label:"PR",bg:{top:"14%",right:"3%",size:130,rotate:22,opacity:.05}},{icon:yg,label:"Events",bg:{bottom:"18%",left:"8%",size:85,rotate:10,opacity:.055}},{icon:yl,label:"Media",bg:{bottom:"5%",right:"12%",size:115,rotate:-24,opacity:.05}}],path:"/NonTechnicalTeam"},{key:"tech",accent:"#0d5aa7",cta:"blue",icon:Fp,title:"Technical Team",desc:"Our technical team builds, codes, and engineers — tackling real-world problems through hands-on projects, workshops, and cutting-edge competitions.",stats:[{value:"3+",label:"Teams"},{value:"30+",label:"Members"}],subTeams:[{icon:Fp,label:"Software",bg:{top:"6%",left:"4%",size:110,rotate:-14,opacity:.06}},{icon:mv,label:"Hardware",bg:{top:"16%",right:"2%",size:140,rotate:18,opacity:.05}},{icon:wg,label:"General",bg:{bottom:"8%",right:"20%",size:95,rotate:-20,opacity:.055}}],path:"/TechnicalTeam"}];function Kg(){return l.jsxs("section",{id:"committees",className:"scroll-mt-28",children:[l.jsx("style",{children:`
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
      `}),l.jsx(Bk,{eyebrow:"Our Committees",title:"Meet Our Teams",icon:Es,subtitle:"From technical innovation to non-technical operations, our committees are the engine behind everything the branch does."}),l.jsx("div",{className:"grid md:grid-cols-2 gap-6",children:Hk.map((r,a)=>{const s=r.icon;return l.jsxs("div",{style:{"--accent":r.accent},className:`ab-team-panel ${a===0?"reveal-left-auto":"reveal-right-auto"}`,children:[r.subTeams.map(({icon:i,label:c,bg:d})=>l.jsx("span",{className:"ab-team-bg-icon",style:{top:d.top,bottom:d.bottom,left:d.left,right:d.right,opacity:d.opacity,transform:`rotate(${d.rotate}deg)`},children:l.jsx(i,{size:d.size,strokeWidth:1.1})},`bg-${c}`)),l.jsxs("span",{className:"ab-team-badge",children:["Committee 0",a+1]}),l.jsxs("div",{className:"ab-team-content",children:[l.jsxs("div",{className:"ab-team-icon-wrap",children:[l.jsx("span",{className:"ab-team-icon-glow"}),l.jsx("div",{className:"ab-team-icon",children:l.jsx(s,{size:26})})]}),l.jsx("h3",{className:"text-2xl font-extrabold tracking-tight mb-3",children:r.title}),l.jsx("p",{className:"leading-relaxed max-w-sm mx-auto text-[#023260]/70 dark:text-white/70",children:r.desc}),l.jsx("div",{className:"ab-team-stats-wrap",children:r.stats.map((i,c)=>l.jsxs(Au.Fragment,{children:[c>0&&l.jsx("div",{className:"ab-team-stat-divider"}),l.jsxs("div",{children:[l.jsx("div",{className:"ab-team-stat-value",children:i.value}),l.jsx("span",{className:"ab-team-stat-label",children:i.label})]})]},i.label))}),l.jsx("div",{className:"ab-team-subteams mb-6",children:r.subTeams.map(({icon:i,label:c})=>l.jsxs("span",{className:"ab-sub-chip",children:[l.jsx("span",{className:"ab-sub-chip-icon",children:l.jsx(i,{size:12,strokeWidth:2.2})}),c]},c))}),l.jsx(tt,{to:r.path,children:l.jsxs("button",{className:r.cta==="blue"?"ab-btn-outline-blue":"ab-btn-gradient",children:["Discover the Team",l.jsx(Ii,{size:14,className:"arrow-icon"})]})})]})]},r.key)})})]})}const $k=[{left:"8%",color:"#cc2233",duration:"9s",delay:"0s"},{left:"25%",color:"#023260",duration:"11s",delay:"2s"},{left:"50%",color:"#cc2233",duration:"8s",delay:"4.5s"},{left:"72%",color:"#023260",duration:"13s",delay:"1s"},{left:"90%",color:"#cc2233",duration:"10s",delay:"3s"}],Pk=[{char:"关",top:"-3%",left:"-5%",size:200,tint:"blue",rotate:-6,delay:"0s"},{char:"我",top:"10%",left:"-2%",size:80,tint:"red",rotate:4,delay:"2.4s",hideMobile:!0},{char:"于",top:"16%",left:"-2%",size:65,tint:"red",rotate:6,delay:"2.2s",hideMobile:!0},{char:"志",top:"22%",left:"-4%",size:150,tint:"blue",rotate:5,delay:"1.1s"},{char:"们",top:"28%",left:"1%",size:60,tint:"blue",rotate:-5,delay:"3.7s",hideMobile:!0},{char:"创",top:"34%",left:"1%",size:75,tint:"red",rotate:8,delay:"3.1s",hideMobile:!0},{char:"电",top:"40%",left:"-3%",size:85,tint:"red",rotate:-4,delay:"2.0s",hideMobile:!0},{char:"未",top:"46%",left:"-3%",size:90,tint:"blue",rotate:-5,delay:"0.6s",hideMobile:!0},{char:"来",top:"52%",left:"-4%",size:70,tint:"red",rotate:4,delay:"0.3s",hideMobile:!0},{char:"队",top:"58%",left:"1%",size:70,tint:"red",rotate:-8,delay:"2.8s",hideMobile:!0},{char:"心",top:"64%",left:"-2%",size:60,tint:"blue",rotate:5,delay:"1.7s",hideMobile:!0},{char:"梦",top:"70%",left:"-4%",size:95,tint:"blue",rotate:-7,delay:"1.9s",hideMobile:!0},{char:"程",top:"76%",left:"2%",size:55,tint:"blue",rotate:-7,delay:"1.4s",hideMobile:!0},{char:"工",top:"82%",left:"2%",size:65,tint:"red",rotate:-9,delay:"0.9s",hideMobile:!0},{char:"家",top:"92%",left:"-3%",size:85,tint:"blue",rotate:6,delay:"3.4s",hideMobile:!0},{char:"新",top:"2%",left:"3%",size:55,tint:"red",rotate:-3,delay:"1.6s",hideMobile:!0},{char:"于",top:"3%",right:"-3%",size:160,tint:"red",rotate:8,delay:"1.5s"},{char:"家",top:"6%",right:"3%",size:60,tint:"red",rotate:7,delay:"0.4s",hideMobile:!0},{char:"会",top:"11%",right:"-3%",size:70,tint:"blue",rotate:-5,delay:"2.5s",hideMobile:!0},{char:"们",top:"16%",right:"-3%",size:110,tint:"blue",rotate:-10,delay:"0.7s",hideMobile:!0},{char:"关",top:"22%",right:"-3%",size:65,tint:"blue",rotate:-6,delay:"2.9s",hideMobile:!0},{char:"新",top:"28%",right:"1%",size:130,tint:"blue",rotate:-8,delay:"2.8s",hideMobile:!0},{char:"志",top:"34%",right:"1%",size:70,tint:"red",rotate:5,delay:"0.8s",hideMobile:!0},{char:"创",top:"40%",right:"-4%",size:85,tint:"red",rotate:3,delay:"2.6s",hideMobile:!0},{char:"强",top:"46%",right:"1%",size:60,tint:"red",rotate:-6,delay:"3.2s",hideMobile:!0},{char:"来",top:"52%",right:"2%",size:100,tint:"red",rotate:-5,delay:"3.6s",hideMobile:!0},{char:"未",top:"58%",right:"-2%",size:60,tint:"blue",rotate:-4,delay:"3.1s",hideMobile:!0},{char:"程",top:"64%",right:"-3%",size:95,tint:"blue",rotate:4,delay:"3.9s",hideMobile:!0},{char:"梦",top:"76%",right:"-2%",size:120,tint:"blue",rotate:-4,delay:"4s"},{char:"工",top:"82%",right:"2%",size:55,tint:"red",rotate:7,delay:"1.7s",hideMobile:!0},{char:"我",top:"88%",right:"1%",size:70,tint:"blue",rotate:5,delay:"0.9s",hideMobile:!0},{char:"队",top:"94%",right:"-3%",size:60,tint:"red",rotate:-6,delay:"1.3s",hideMobile:!0}],qk=[{year:"2020",title:"The Spark",desc:"A handful of engineering students at ECU founded the branch, chasing a single idea: technology grows faster together.",icon:Al},{year:"2022",title:"First Workshops",desc:"Our first hands-on workshops and technical talks brought hundreds of students into the IEEE community.",icon:Lu},{year:"2023",title:"Regional Recognition",desc:"IEEE ECU SB earned regional recognition for outstanding student activities and community impact.",icon:Sv},{year:"2025",title:"National Milestone",desc:"Our projects and competition wins put IEEE ECU SB on the national map, opening doors to new partnerships.",icon:Sg},{year:"2026",title:"Growing Family",desc:"Today we're one of the most active student branches on campus, with committees spanning every field of engineering.",icon:p1}],Ik=[{icon:Lu,title:"Innovation",desc:"We chase ideas that challenge the ordinary and turn curiosity into real solutions."},{icon:c1,title:"Integrity",desc:"We hold ourselves to a standard of honesty, fairness, and accountability in everything we do."},{icon:Es,title:"Collaboration",desc:"Great engineering is a team sport — we grow by building with and for each other."},{icon:Cl,title:"Passion",desc:"Every workshop, event, and project is driven by genuine love for learning and technology."}],Yk=[{icon:Sg,title:"Technical Excellence",desc:"Deliver workshops, competitions, and hands-on learning experiences."},{icon:Es,title:"Leadership",desc:"Develop future leaders through teamwork and volunteering."},{icon:Lu,title:"Innovation",desc:"Encourage creativity and engineering solutions for real problems."},{icon:Cl,title:"Community",desc:"Create a collaborative environment that supports every member."}],Gk=[{end:6,suffix:"+",label:"Years"},{end:500,suffix:"+",label:"Members"},{end:150,suffix:"+",label:"Active Members"},{end:60,suffix:"+",label:"Volunteers"},{end:40,suffix:"+",label:"Events"},{end:25,suffix:"+",label:"Workshops"},{end:10,suffix:"+",label:"Partners"}];function Si({eyebrow:r,title:a,subtitle:s,icon:i}){return l.jsxs("div",{className:"mb-10 text-center reveal-auto",children:[l.jsxs("span",{className:"ab-eyebrow justify-center",children:[l.jsx("span",{className:"stem h-px bg-[#D92525] block"}),l.jsxs("span",{className:"text-xs font-semibold tracking-[0.25em] uppercase text-[#D92525] flex items-center gap-2",children:[i&&l.jsx(i,{size:14}),r]}),l.jsx("span",{className:"stem h-px bg-[#D92525] block"})]}),l.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-[#023260] dark:text-white mt-4",children:a}),s&&l.jsx("p",{className:"text-gray-600 dark:text-gray-300 mt-3 max-w-2xl mx-auto leading-relaxed",children:s})]})}function Vk({end:r,suffix:a,label:s}){const[i,c]=v.useState(0),d=v.useRef(null),h=v.useRef(!1);return v.useEffect(()=>{const p=d.current;if(!p)return;const m=new IntersectionObserver(([g])=>{if(g.isIntersecting&&!h.current){h.current=!0;const y=1600,x=performance.now(),k=S=>{const N=Math.min((S-x)/y,1),C=1-Math.pow(1-N,3);c(Math.floor(C*r)),N<1?requestAnimationFrame(k):c(r)};requestAnimationFrame(k)}},{threshold:.4});return m.observe(p),()=>m.disconnect()},[r]),l.jsxs("div",{ref:d,className:"reveal-auto text-center",children:[l.jsxs("div",{className:"text-3xl md:text-4xl font-extrabold text-[#023260] dark:text-white",children:[i,a]}),l.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2 font-semibold tracking-wide uppercase",children:s})]})}function Xk(){const r=ca(),a=v.useRef(null),s=v.useRef(null),i=v.useRef(null),c=v.useRef(null),d=v.useRef(null),h=v.useRef(null),p=v.useRef(null),[m,g]=v.useState(!1);v.useEffect(()=>{const x=()=>{g(window.scrollY>420)};return x(),window.addEventListener("scroll",x,{passive:!0}),()=>window.removeEventListener("scroll",x)},[]);const y=()=>{window.scrollTo({top:0,behavior:"smooth"})};return v.useEffect(()=>{if(!r.hash)return;const x=r.hash.replace("#",""),k=setTimeout(()=>{const S=document.getElementById(x);if(S){const N=S.getBoundingClientRect().top+window.scrollY-100;window.scrollTo({top:N,behavior:"smooth"})}},150);return()=>clearTimeout(k)},[r]),v.useEffect(()=>{const x=new IntersectionObserver(S=>{S.forEach(N=>{N.isIntersecting?N.target.classList.add("in-view"):N.target.classList.remove("in-view")})},{threshold:.15});[c,d,h,p].forEach(S=>{S.current&&x.observe(S.current)});const k=()=>{if(!a.current)return;const S=a.current.getBoundingClientRect(),N=Math.max(0,Math.min(1,-S.top/(S.height*.5)));s.current&&(s.current.style.transform=`translateY(${N*-30}px)`),i.current&&(i.current.style.transform=`translateY(${N*-18}px)`)};return window.addEventListener("scroll",k,{passive:!0}),()=>{x.disconnect(),window.removeEventListener("scroll",k)}},[]),v.useEffect(()=>{const x=new IntersectionObserver(k=>{k.forEach(S=>{S.isIntersecting?S.target.classList.add("in-view"):S.target.classList.remove("in-view")})},{threshold:.12});return document.querySelectorAll(".reveal-auto, .reveal-left-auto, .reveal-right-auto").forEach(k=>x.observe(k)),()=>x.disconnect()},[]),l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
        /* ── Background ──
           Light-mode background now includes a slow, continuous drift on the
           bottom linear-gradient layer (background-size 300% + a looping
           background-position keyframe), the same ambient-life trick used on
           the Timeline page. Without it, the gradient just sat static the
           instant the fade finished, which read as the background "snapping"
           into place instead of easing in. The two radial glows keep their
           own fixed anchor points (100% size, static position) so only the
           base gradient drifts. */
        .ab-root {
          background:
            radial-gradient(ellipse 800px 600px at 8% 0%, rgba(74,158,255,0.10), transparent 60%),
            radial-gradient(ellipse 750px 550px at 92% 15%, rgba(217,37,37,0.06), transparent 60%),
            linear-gradient(120deg, #f5f8fb, #d3dde8, #eef3f8, #d8e2ec);
          background-size: 100% 100%, 100% 100%, 300% 300%;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          transition: background 0.5s ease, background-color 0.5s ease, color 0.5s ease;
        }
        .dark .ab-root {
          background:
            radial-gradient(ellipse 950px 700px at 8% 5%, rgba(13,90,167,0.24), transparent 60%),
            radial-gradient(ellipse 850px 650px at 92% 25%, rgba(217,37,37,0.18), transparent 60%),
            radial-gradient(ellipse 1000px 800px at 50% 100%, rgba(13,90,167,0.16), transparent 65%),
            linear-gradient(to bottom, #001233, #00040c 65%, #00040c);
        }
        @keyframes abBgDrift {
          0%   { background-position: 0% 0%, 0% 0%, 0% 30%; }
          50%  { background-position: 0% 0%, 0% 0%, 100% 70%; }
          100% { background-position: 0% 0%, 0% 0%, 0% 30%; }
        }

        /* ── Page-open entrance — the whole page fades in the instant it mounts,
           same "just arrived" feel as ContactUs.jsx / IEEETimeline.jsx, before
           the staggered scroll-reveal sections (reveal / reveal-auto / etc.)
           play on top of it. The drift keyframe above has to be combined into
           this SAME "animation" declaration (not left on .ab-root) — two
           classes on one element each setting "animation" don't merge, the
           later one in the stylesheet simply wins and silently drops the
           other, which is what was making the background feel static. Dark
           mode's background has one extra layer (4 vs 3), so it gets its own
           override below that keeps the fade but skips the drift rather than
           risk shifting the wrong gradient layer. */
        .ab-page-fade {
          animation: abBgDrift 30s ease-in-out infinite, abPageFade 0.9s ease-out both;
        }
        .dark .ab-page-fade {
          animation: abPageFade 0.9s ease-out both;
        }
        @keyframes abPageFade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ab-page-fade, .dark .ab-page-fade {
            animation: abPageFade 0.4s ease-out both !important;
          }
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

        /* ── Falling petals ──
           Fixed to the viewport (not the page) so they keep drifting down
           in view the whole time you scroll, instead of only falling past
           once near the very top of this long page. */
        .ab-petals-fixed {
          position: fixed;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 30;
        }
        .ab-petal {
          position: absolute;
          width: 7px;
          height: 11px;
          border-radius: 80% 0 80% 0;
          opacity: 0;
          animation: abFallPetal linear infinite;
          top: -20px;
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

        /* ── Intro → Social teaser link ── */
        .ab-social-tease {
          margin-top: 0.85rem;
          color: #D92525;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .ab-social-tease:hover {
          color: #023260;
        }
        .dark .ab-social-tease:hover {
          color: #7db3f5;
        }
        .ab-social-tease-dot {
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          background: #D92525;
          box-shadow: 0 0 0 4px rgba(217,37,37,0.15);
          flex-shrink: 0;
          animation: abPulseRing 2.4s ease-out infinite;
        }
        .ab-social-tease-underline {
          position: absolute;
          left: 0;
          right: 0;
          bottom: -3px;
          height: 1.5px;
          background: currentColor;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }
        .ab-social-tease:hover .ab-social-tease-underline {
          transform: scaleX(1);
        }

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
      `}),l.jsxs("div",{className:"ab-root ab-page-fade text-gray-800 dark:text-gray-100 pb-8 transition-colors duration-500",children:[Pk.map((x,k)=>{const S={fontSize:x.size,"--ab-rot":`${x.rotate}deg`,transform:`rotate(${x.rotate}deg)`,animationDelay:x.delay,color:x.tint==="blue"?"rgba(2,50,96,0.13)":"rgba(204,34,51,0.13)"};return x.top!==void 0&&(S.top=x.top),x.bottom!==void 0&&(S.bottom=x.bottom),x.left!==void 0&&(S.left=x.left),x.right!==void 0&&(S.right=x.right),l.jsx("span",{className:`ab-bg-char ab-bg-char-${x.tint} ${x.hideMobile?"hidden md:block":""}`,style:S,children:x.char},k)}),l.jsx("div",{className:"ab-petals-fixed",children:$k.map((x,k)=>l.jsx("div",{className:"ab-petal",style:{left:x.left,background:x.color,animationDuration:x.duration,animationDelay:x.delay}},k))}),l.jsx("button",{type:"button",onClick:y,"aria-label":"Back to top",className:`ab-scroll-top ${m?"visible":""}`,children:l.jsx(fu,{size:22,className:"ab-scroll-top-arrow",strokeWidth:2.5})}),l.jsxs("main",{className:"max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-8 md:pb-8 flex flex-col gap-16 relative z-10",children:[l.jsxs("div",{ref:p,className:"reveal relative pl-4 md:pl-8 w-full",children:[l.jsx("div",{className:"absolute -left-8 top-0 bottom-0 w-12 items-center justify-center hidden md:flex",children:l.jsx("div",{className:"writing-mode-vertical text-[#D92525] text-2xl font-bold tracking-widest opacity-80 border-l-2 border-[#D92525] pl-2",children:"关于我们"})}),l.jsxs("div",{className:"relative",children:[l.jsx("div",{className:"absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-[#D92525] opacity-20"}),l.jsxs("h1",{className:"text-2xl md:text-3xl font-extrabold pb-2 text-[#023260] dark:text-white relative",children:["About ",l.jsx("span",{className:"text-[#D92525]",children:"Us."}),l.jsx("span",{className:"absolute -top-2 right-4 w-8 h-8 bg-[#023260] dark:bg-[#0d5aa7] text-white text-xs flex items-center justify-center rounded-sm opacity-90 shadow-sm transform rotate-12",children:"IEEE"})]}),l.jsxs("h2",{className:"text-xl font-semibold text-[#023260] dark:text-white mb-5 pt-3 flex items-center gap-3",children:[l.jsx("span",{className:"w-1 h-5 bg-[#D92525] rounded-full"}),"Who are we?"]}),l.jsx("p",{className:"text-gray-600 dark:text-gray-300 leading-relaxed mb-3 text-base",children:"IEEE ECU SB is a dynamic student-led community dedicated to empowering future engineers, innovators, and technology enthusiasts at Egyptian Chinese University. As part of the world's largest technical professional organization, IEEE ECU SB provides students with opportunities to enhance their technical knowledge, develop leadership and teamwork skills, and connect with industry professionals. Through workshops, seminars, competitions, community initiatives, and networking events, we strive to inspire innovation, foster continuous learning, and prepare students to make a meaningful impact in the fields of engineering, technology, and beyond."}),l.jsxs("a",{href:"#connect",className:"ab-social-tease group/tease inline-flex items-center gap-2",children:[l.jsx("span",{className:"ab-social-tease-dot"}),l.jsxs("span",{className:"relative text-sm font-semibold tracking-wide",children:["Follow our journey on social media",l.jsx("span",{className:"ab-social-tease-underline"})]}),l.jsx(fu,{size:14,strokeWidth:2.5,className:"rotate-180 transition-transform duration-300 group-hover/tease:translate-y-1"})]})]})]}),l.jsxs("section",{children:[l.jsx(Si,{eyebrow:"Our Story",title:"From an Idea to a Movement",subtitle:"Every branch has an origin story. Here's a look at the milestones that shaped IEEE ECU SB into what it is today."}),l.jsx("div",{className:"ab-steps-row",children:qk.map((x,k)=>{const S=x.icon;return l.jsxs("div",{className:"ab-step-item reveal-auto",style:{transitionDelay:`${k*.1}s`},children:[l.jsx("div",{className:"ab-step-dot",children:l.jsx(S,{size:14})}),l.jsxs("div",{className:"ab-step-card",children:[l.jsx("span",{className:"text-xs font-bold text-[#D92525] tracking-widest",children:x.year}),l.jsx("h3",{className:"font-bold text-[#023260] dark:text-white mt-1 mb-1 text-sm",children:x.title}),l.jsx("p",{className:"text-gray-600 dark:text-gray-300 text-xs leading-relaxed",children:x.desc})]})]},k)})})]}),l.jsxs("section",{children:[l.jsx(Si,{eyebrow:"Our Goals",title:"Building Engineers of Tomorrow",subtitle:"We strive to empower students through technical excellence, leadership, innovation, and community engagement."}),l.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-6",children:Yk.map((x,k)=>{const S=x.icon;return l.jsxs("div",{className:"ab-premium-card reveal-auto",style:{transitionDelay:`${k*.08}s`},children:[l.jsx("div",{className:"ab-premium-icon",children:l.jsx(S,{size:22})}),l.jsx("h3",{className:"font-bold text-[#023260] dark:text-white mb-2",children:x.title}),l.jsx("p",{className:"text-gray-600 dark:text-gray-300 text-sm leading-relaxed",children:x.desc})]},k)})})]}),l.jsxs("section",{children:[l.jsx(Si,{eyebrow:"Our Values",title:"What Drives Us Forward"}),l.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-6",children:Ik.map((x,k)=>{const S=x.icon;return l.jsxs("div",{className:"ab-premium-card reveal-auto",style:{transitionDelay:`${k*.08}s`},children:[l.jsx("div",{className:"ab-premium-icon",children:l.jsx(S,{size:22})}),l.jsx("h3",{className:"font-bold text-[#023260] dark:text-white mb-2",children:x.title}),l.jsx("p",{className:"text-gray-600 dark:text-gray-300 text-sm leading-relaxed",children:x.desc})]},k)})})]}),l.jsxs("div",{ref:a,children:[l.jsx(Si,{eyebrow:"A Few of Our Moments",title:"Captured Along the Way",icon:yl}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 w-full",children:[l.jsx("div",{ref:s,children:l.jsx("div",{ref:c,className:"reveal-left relative group",children:l.jsxs("div",{className:"ab-img-card",children:[l.jsx("img",{src:zk,alt:"IEEE Group",className:"w-full h-64 md:h-80 object-cover rounded-[18px] grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"}),l.jsx("div",{className:"ab-gallery-caption",children:"Team spirit, always on."})]})})}),l.jsx("div",{ref:i,children:l.jsx("div",{ref:d,className:"reveal-right relative group",children:l.jsxs("div",{className:"ab-img-card",children:[l.jsx("img",{src:Ok,alt:"IEEE Event",className:"w-full h-64 md:h-80 object-cover rounded-[18px] grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"}),l.jsx("div",{className:"ab-gallery-caption",children:"Building moments worth remembering."})]})})})]})]}),l.jsx(Kg,{}),l.jsx(Xg,{}),l.jsxs("section",{children:[l.jsx(Si,{eyebrow:"Our Impact",title:"Numbers That Tell Our Story"}),l.jsx("div",{className:"ab-impact-strip grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 py-10 px-6",children:Gk.map((x,k)=>l.jsx(Vk,{...x},k))})]}),l.jsxs("section",{id:"join",className:"ab-cta reveal-auto text-center scroll-mt-28",children:[l.jsx("span",{className:"ab-cta-char",style:{fontSize:150,top:"-8%",left:"-2%"},children:"梦"}),l.jsx("span",{className:"ab-cta-char",style:{fontSize:120,bottom:"-5%",right:"-2%"},children:"志"}),l.jsxs("div",{className:"relative z-10 max-w-2xl mx-auto",children:[l.jsx("span",{className:"text-xs font-semibold tracking-[0.25em] uppercase text-[#D92525]",children:"Join Our Journey"}),l.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-white mt-3",children:"Ready to build the future with us?"}),l.jsx("p",{className:"text-white/80 mt-3 mb-8 leading-relaxed",children:"Whether you're into hardware, software, or somewhere in between — there's a place for you at IEEE ECU SB."}),l.jsx("div",{className:"flex flex-wrap items-center justify-center gap-4",children:l.jsx(tt,{to:"/Membership",children:l.jsx("button",{className:"ab-btn-gradient ab-pulse-ring ab-cta-btn font-semibold",children:"Become a Member"})})})]})]}),l.jsxs("section",{id:"connect",className:"reveal-auto text-center mt-2 scroll-mt-28",children:[l.jsxs("span",{className:"ab-eyebrow justify-center",children:[l.jsx("span",{className:"stem h-px bg-[#D92525] block"}),l.jsx("span",{className:"text-xs font-semibold tracking-[0.25em] uppercase text-[#D92525]",children:"Stay Connected"}),l.jsx("span",{className:"stem h-px bg-[#D92525] block"})]}),l.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-[#023260] dark:text-white mt-3 mb-5",children:"Follow Our Journey"}),l.jsxs("div",{className:"flex items-center justify-center gap-5 mb-5",children:[l.jsx("a",{href:"https://www.facebook.com/share/14YhX72rVkL/",target:"_blank",rel:"noopener noreferrer",className:"ab-social-icon",children:l.jsx(wv,{size:20})}),l.jsx("a",{href:"https://www.instagram.com/ieeeecusb?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",target:"_blank",rel:"noopener noreferrer",className:"ab-social-icon",children:l.jsx(zv,{size:20})}),l.jsx("a",{href:"https://www.linkedin.com/company/ieee-ecu-sb/posts/?feedView=all",target:"_blank",rel:"noopener noreferrer",className:"ab-social-icon",children:l.jsx(Tl,{size:20})})]}),l.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4",children:[l.jsx(tt,{to:"/timeline",children:l.jsxs("button",{className:"ab-btn-outline-blue",children:["Latest News",l.jsx(Qv,{size:16,className:"arrow-icon"})]})}),l.jsx(tt,{to:"/ContactUs",children:l.jsxs("button",{className:"ab-btn-gradient",children:["Contact Us",l.jsx(wn,{size:16,className:"arrow-icon"})]})})]})]})]})]})]})}const Kk="/IEEE-ECU-SB-Website/assets/HR-CVDheAjf.png",Fk="/IEEE-ECU-SB-Website/assets/PR-BbHM6Z2w.png",Jk="/IEEE-ECU-SB-Website/assets/Events-D7VRlqNd.png",Wk="/IEEE-ECU-SB-Website/assets/Media-DP7GKsep.png",Zk=[{left:"8%",color:"#cc2233",duration:"9s",delay:"0s"},{left:"25%",color:"#023260",duration:"11s",delay:"2s"},{left:"50%",color:"#cc2233",duration:"8s",delay:"4.5s"},{left:"72%",color:"#023260",duration:"13s",delay:"1s"},{left:"90%",color:"#cc2233",duration:"10s",delay:"3s"}],Qk=[{en:"Human Resource",cn:"人力资源",desc:"Recruitment, interviews & ongoing team coordination.",icon:Kk},{en:"Public Relations",cn:"公共关系",desc:"Sponsors, partnerships & external connections.",icon:Fk},{en:"Events",cn:"活动策划",desc:"Event planning, materials & on-ground organizing.",icon:Jk},{en:"Media",cn:"媒体制作",desc:"Content, social media, design & video production.",icon:Wk}];function e3(){const[r,a]=v.useState(!1);return v.useEffect(()=>{const s=new IntersectionObserver(i=>{i.forEach(c=>{c.isIntersecting&&c.target.classList.add("in-view")})},{threshold:.15});return document.querySelectorAll(".reveal-auto, .reveal-left-auto, .reveal-right-auto").forEach(i=>s.observe(i)),()=>s.disconnect()},[]),v.useEffect(()=>{const s=()=>{a(window.scrollY>420)};return s(),window.addEventListener("scroll",s,{passive:!0}),()=>{window.removeEventListener("scroll",s)}},[]),v.useEffect(()=>{const s=()=>a(window.scrollY>420);return s(),window.addEventListener("scroll",s,{passive:!0}),()=>window.removeEventListener("scroll",s)},[]),l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
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

        /* ── Fixed floating "Back to Committees" button ── */
.tt-fixed-back {
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
  text-decoration: none;
  border: none;
  cursor: pointer;

  /* SAME gradient as About scroll button */
  background: linear-gradient(
    145deg,
    #7a1220,
    #D92525 45%,
    #ff6b4a 75%,
    #D92525
  );

  background-size: 220% 220%;
  background-position: 0% 50%;

  /* SAME shadow */
  box-shadow:
    0 10px 26px rgba(217,37,37,0.4),
    0 0 0 4px rgba(255,255,255,0.6);

  /* SAME entrance animation */
  opacity: 0;
  transform: translateY(16px) scale(0.85);
  pointer-events: none;

  transition:
    opacity 0.35s ease,
    transform 0.35s ease,
    background-position 0.6s ease,
    box-shadow 0.3s ease;
}

/* When button becomes visible */
.tt-fixed-back.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: auto;
}

/* SAME hover animation */
.tt-fixed-back:hover {
  background-position: 100% 50%;
  transform: translateY(-4px) scale(1.08);

  box-shadow:
    0 16px 34px rgba(217,37,37,0.55),
    0 0 0 4px rgba(255,255,255,0.75);
}

/* Click */
.tt-fixed-back:active {
  transform: translateY(-1px) scale(0.96);
}

/* Arrow animation */
.tt-fixed-back-arrow {
  transition: transform 0.3s ease;
}

.tt-fixed-back:hover .tt-fixed-back-arrow {
  transform: translateX(-3px);
}

/* SAME pulsing ring */
.tt-fixed-back::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 9999px;

  border: 2px solid rgba(217,37,37,0.55);

  animation: ttPulseFixed 2.2s ease-out infinite;

  pointer-events: none;
}

@keyframes ttPulseFixed {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }

  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

/* Dark mode */
.dark .tt-fixed-back {
  box-shadow:
    0 10px 26px rgba(217,37,37,0.5),
    0 0 0 4px rgba(0,5,13,0.6);
}
       @media (max-width: 767px) {
  .tt-fixed-back {
    right: 1.1rem;
    bottom: 1.1rem;
    width: 2.9rem;
    height: 2.9rem;
  }

        }
      `}),l.jsxs("div",{className:"tt-root text-gray-800 dark:text-gray-100 pb-24",children:[l.jsx("span",{className:"tt-bg-char",style:{fontSize:220,color:"rgba(2,50,96,0.04)",bottom:"-2%",left:"-3%"},children:"非"}),l.jsx("span",{className:"tt-bg-char",style:{fontSize:160,color:"rgba(204,34,51,0.05)",top:"5%",right:"-2%"},children:"技"}),l.jsx("span",{className:"tt-bg-char",style:{fontSize:100,color:"rgba(2,50,96,0.03)",top:"42%",left:"4%"},children:"团"}),l.jsx("span",{className:"tt-bg-char",style:{fontSize:130,color:"rgba(204,34,51,0.03)",bottom:"8%",right:"3%"},children:"队"}),Zk.map((s,i)=>l.jsx("div",{className:"tt-petal",style:{left:s.left,background:s.color,animationDuration:s.duration,animationDelay:s.delay}},i)),l.jsx(tt,{to:"/About#committees","aria-label":"Back to Committees",title:"Back to Committees",className:"tt-fixed-back visible",children:l.jsx(xg,{size:22,className:"tt-fixed-back-arrow",strokeWidth:2.5})}),l.jsxs("main",{className:"max-w-7xl mx-auto px-6 md:px-10 pt-32 relative z-10",children:[l.jsxs("div",{className:"reveal-auto flex flex-wrap items-start justify-between gap-6 pb-8 mb-12 border-b border-[#023260]/10 dark:border-white/10",children:[l.jsxs("div",{className:"max-w-xl",children:[l.jsxs("div",{className:"tt-eyebrow mb-3",children:[l.jsx("span",{className:"stem h-px bg-[#D92525] block"}),l.jsx("span",{className:"text-xs font-semibold tracking-[0.25em] uppercase text-[#D92525]",children:"非技术团队"})]}),l.jsxs("h1",{className:"text-2xl md:text-3xl font-extrabold text-[#023260] dark:text-white leading-tight",children:[l.jsx("span",{className:"text-[#D92525]",children:"Non-Technical"})," Team"]}),l.jsx("p",{className:"text-gray-600 dark:text-gray-300 mt-3 leading-relaxed",children:"The operations backbone of IEEE ECU SB — four departments working together to plan, connect, and tell the story."})]}),l.jsxs("div",{className:"tt-seal flex-none w-14 h-14 md:w-[68px] md:h-[68px] rounded-md relative flex items-center justify-center",children:[l.jsx("div",{className:"absolute inset-1 border border-[#D92525]/35 rounded-sm"}),l.jsx("span",{className:"font-bold text-[#D92525] text-xs md:text-sm tracking-[0.14em]",style:{writingMode:"vertical-rl"},children:"非技术团队"})]})]}),l.jsx("div",{className:"tt-timeline",children:Qk.map((s,i)=>l.jsxs("div",{className:"tt-item reveal-auto",style:{transitionDelay:`${i*.1}s`},children:[l.jsx("div",{className:"tt-dot",children:l.jsx("img",{src:s.icon,alt:""})}),l.jsxs("div",{className:"tt-card",children:[l.jsx("span",{className:"tt-index",children:String(i+1).padStart(2,"0")}),l.jsx("div",{className:"font-bold text-lg text-[#023260] dark:text-white",children:s.en}),l.jsx("div",{className:"text-xs text-[#D92525] tracking-widest font-semibold mt-0.5 mb-3",children:s.cn}),l.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl",children:s.desc})]})]},s.en))}),l.jsx("div",{className:"reveal-auto mt-14 pt-5 border-t border-[#023260]/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-2.5 text-[11px] uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400",children:l.jsxs("div",{children:["4 Departments ",l.jsx("span",{className:"text-[#D92525] mx-1.5",children:"·"})," ","IEEE ECU SB"]})})]})]})]})}const t3="/IEEE-ECU-SB-Website/assets/General-QZsAOyv7.png",a3="/IEEE-ECU-SB-Website/assets/Software-SsSY-wIl.png",r3="/IEEE-ECU-SB-Website/assets/Hardware-CpY_i_-1.png",n3=[{left:"8%",color:"#cc2233",duration:"9s",delay:"0s"},{left:"25%",color:"#023260",duration:"11s",delay:"2s"},{left:"50%",color:"#cc2233",duration:"8s",delay:"4.5s"},{left:"72%",color:"#023260",duration:"13s",delay:"1s"},{left:"90%",color:"#cc2233",duration:"10s",delay:"3s"}],s3=[{en:"General",cn:"综合事务",desc:"Workshops, training sessions & general technical growth.",icon:t3},{en:"Software",cn:"软件开发",desc:"Recruitment, interviews, follow-up & software project coordination.",icon:a3},{en:"Hardware",cn:"硬件工程",desc:"Build external connections, logistics, sponsors & partnerships.",icon:r3}];function i3(){return v.useEffect(()=>{const r=new IntersectionObserver(a=>{a.forEach(s=>{s.isIntersecting&&s.target.classList.add("in-view")})},{threshold:.15});return document.querySelectorAll(".reveal-auto, .reveal-left-auto, .reveal-right-auto").forEach(a=>r.observe(a)),()=>r.disconnect()},[]),l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
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

  
    /* ── Floating Back to Committees ── */
.tt-back-btn {
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
  text-decoration: none;
  border: none;
  cursor: pointer;

  background: linear-gradient(
    145deg,
    #7a1220,
    #D92525 45%,
    #ff6b4a 75%,
    #D92525
  );

  background-size: 220% 220%;
  background-position: 0% 50%;

  box-shadow:
    0 10px 26px rgba(217,37,37,0.4),
    0 0 0 4px rgba(255,255,255,0.6);

  /* نفس Animation بتاع About */
  opacity: 0;
  transform: translateY(16px) scale(0.85);
  pointer-events: none;

  transition:
    opacity 0.35s ease,
    transform 0.35s ease,
    background-position 0.6s ease,
    box-shadow 0.3s ease;
}

/* لما يظهر */
.tt-back-btn.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: auto;
}

/* Hover — نفس About */
.tt-back-btn:hover {
  background-position: 100% 50%;
  transform: translateY(-4px) scale(1.08);

  box-shadow:
    0 16px 34px rgba(217,37,37,0.55),
    0 0 0 4px rgba(255,255,255,0.75);
}

/* Click */
.tt-back-btn:active {
  transform: translateY(-1px) scale(0.96);
}

/* Arrow animation */
.tt-back-btn .back-icon {
  transition: transform 0.3s ease;
}

.tt-back-btn:hover .back-icon {
  transform: translateX(-3px);
}

/* Pulse ring — نفس بتاع About */
.tt-back-btn::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 9999px;

  border: 2px solid rgba(217,37,37,0.55);

  animation: ttPulseRing 2.2s ease-out infinite;

  pointer-events: none;
}

/* Pulse animation */
@keyframes ttPulseRing {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }

  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

/* Dark mode */
.dark .tt-back-btn {
  box-shadow:
    0 10px 26px rgba(217,37,37,0.5),
    0 0 0 4px rgba(0,5,13,0.6);
}

/* Mobile — نفس About */
@media (max-width: 767px) {
  .tt-back-btn {
    right: 1.1rem;
    bottom: 1.1rem;
    width: 2.9rem;
    height: 2.9rem;
  }
}
        .tt-back-btn:hover::before { left: 125%; }
        .tt-back-btn:active { transform: translateY(0) scale(0.98); }
        .tt-back-btn .back-icon { transition: transform 0.3s ease; }
        .tt-back-btn:hover .back-icon { transform: translateX(-3px); }
        .dark .tt-back-btn { box-shadow: 0 4px 16px rgba(13,90,167,0.4); }
        .dark .tt-back-btn:hover { box-shadow: 0 6px 20px rgba(13,90,167,0.5); }

        /* ── Social teaser link (matches About page's .ab-social-tease) ── */
        .tt-social-tease {
          color: #D92525;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .tt-social-tease:hover { color: #023260; }
        .dark .tt-social-tease:hover { color: #7db3f5; }
        .tt-social-tease-dot {
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          background: #D92525;
          box-shadow: 0 0 0 4px rgba(217,37,37,0.15);
          flex-shrink: 0;
          animation: ttPulseRing 2.4s ease-out infinite;
        }
        .tt-social-tease-underline {
          position: absolute;
          left: 0;
          right: 0;
          bottom: -3px;
          height: 1.5px;
          background: currentColor;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }
        .tt-social-tease:hover .tt-social-tease-underline { transform: scaleX(1); }
        @keyframes ttPulseRing {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `}),l.jsxs("div",{className:"tt-root text-gray-800 dark:text-gray-100 pb-24",children:[l.jsx("span",{className:"tt-bg-char",style:{fontSize:220,color:"rgba(2,50,96,0.04)",bottom:"-2%",left:"-3%"},children:"技"}),l.jsx("span",{className:"tt-bg-char",style:{fontSize:160,color:"rgba(204,34,51,0.05)",top:"5%",right:"-2%"},children:"术"}),l.jsx("span",{className:"tt-bg-char",style:{fontSize:100,color:"rgba(2,50,96,0.03)",top:"42%",left:"4%"},children:"团"}),l.jsx("span",{className:"tt-bg-char",style:{fontSize:130,color:"rgba(204,34,51,0.03)",bottom:"8%",right:"3%"},children:"队"}),n3.map((r,a)=>l.jsx("div",{className:"tt-petal",style:{left:r.left,background:r.color,animationDuration:r.duration,animationDelay:r.delay}},a)),l.jsxs("main",{className:"max-w-7xl mx-auto px-6 md:px-10 pt-32 relative z-10",children:[l.jsxs("div",{className:"reveal-auto flex flex-wrap items-start justify-between gap-6 pb-8 mb-12 border-b border-[#023260]/10 dark:border-white/10",children:[l.jsxs("div",{className:"max-w-xl",children:[l.jsxs("div",{className:"tt-eyebrow mb-3",children:[l.jsx("span",{className:"stem h-px bg-[#D92525] block"}),l.jsx("span",{className:"text-xs font-semibold tracking-[0.25em] uppercase text-[#D92525]",children:"技术团队"})]}),l.jsxs("h1",{className:"text-2xl md:text-3xl font-extrabold text-[#023260] dark:text-white leading-tight",children:[l.jsx("span",{className:"text-[#D92525]",children:"Technical"})," Team"]}),l.jsx("p",{className:"text-gray-600 dark:text-gray-300 mt-3 leading-relaxed",children:"The engineering backbone of IEEE ECU SB — three departments working together to build, ship, and grow."})]}),l.jsxs("div",{className:"tt-seal flex-none w-14 h-14 md:w-[68px] md:h-[68px] rounded-md relative flex items-center justify-center",children:[l.jsx("div",{className:"absolute inset-1 border border-[#D92525]/35 rounded-sm"}),l.jsx("span",{className:"font-bold text-[#D92525] text-xs md:text-sm tracking-[0.14em]",style:{writingMode:"vertical-rl"},children:"技术团队"})]})]}),l.jsx("div",{className:"tt-timeline",children:s3.map((r,a)=>l.jsxs("div",{className:"tt-item reveal-auto",style:{transitionDelay:`${a*.1}s`},children:[l.jsx("div",{className:"tt-dot",children:l.jsx("img",{src:r.icon,alt:""})}),l.jsxs("div",{className:"tt-card",children:[l.jsx("span",{className:"tt-index",children:String(a+1).padStart(2,"0")}),l.jsx("div",{className:"font-bold text-lg text-[#023260] dark:text-white",children:r.en}),l.jsx("div",{className:"text-xs text-[#D92525] tracking-widest font-semibold mt-0.5 mb-3",children:r.cn}),l.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl",children:r.desc})]})]},r.en))}),l.jsx(tt,{to:"/About#committees",className:"tt-back-btn visible","aria-label":"Back to Committees",title:"Back to Committees",children:l.jsx(xg,{size:22,strokeWidth:2.5,className:"back-icon"})}),l.jsx("div",{className:"reveal-auto mt-14 pt-5 border-t border-[#023260]/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-2.5 text-[11px] uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400",children:l.jsxs("div",{children:["3 Departments ",l.jsx("span",{className:"text-[#D92525] mx-1.5",children:"·"})," ","IEEE ECU SB"]})})]})]})]})}function o3(){const[r,a]=v.useState(""),[s,i]=v.useState(""),[c,d]=v.useState(!1),[h,p]=v.useState(""),[m,g]=v.useState(!1),y=_s(),[x,k]=v.useState(()=>{if(typeof window>"u")return!1;const z=localStorage.getItem("theme");return z?z==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches});v.useEffect(()=>{const z=document.documentElement;x?(z.classList.add("dark"),localStorage.setItem("theme","dark")):(z.classList.remove("dark"),localStorage.setItem("theme","light"))},[x]),v.useEffect(()=>{const z=document.documentElement,Q=new MutationObserver(()=>{const te=z.classList.contains("dark");k(le=>le===te?le:te)});return Q.observe(z,{attributes:!0,attributeFilter:["class"]}),()=>Q.disconnect()},[]);const S=()=>k(z=>!z),[N,C]=v.useState(!1),[E,B]=v.useState(""),[M,T]=v.useState(""),I=z=>{const Q=(z||"").toLowerCase();return Q.includes("invalid login credentials")?"Incorrect email or password. Please try again.":Q.includes("email not confirmed")?"Please confirm your email address before logging in.":Q.includes("too many requests")||Q.includes("rate limit")?"Too many attempts. Please wait a moment and try again.":Q.includes("network")||Q.includes("fetch")?"We're having trouble connecting. Please check your internet connection and try again.":"We couldn't log you in. Please check your details and try again."},X=async z=>{z.preventDefault(),g(!0),p("");const{data:Q,error:te}=await re.auth.signInWithPassword({email:r,password:s});if(te){console.error("Login failed:",te),p(I(te.message)),g(!1);return}const le=Q.user?.id,{data:fe,error:ce}=await re.from("profiles").select("id").eq("id",le).maybeSingle();if(ce||!fe){ce&&console.error("Profile lookup failed during login:",ce),await re.auth.signOut(),p("Incorrect email or password. Please try again."),g(!1);return}await new Promise(Se=>setTimeout(Se,300)),y("/"),g(!1)},J=async z=>{z.preventDefault(),B(""),T("");const Q=r.trim();if(!Q){T("Enter your email above first, then click Forgot Password.");return}C(!0);try{const{data:te,error:le}=await re.functions.invoke("send-password-reset",{body:{email:Q}});if(le)throw le;B("If an account exists for this email, a password reset link has been sent.")}catch(te){console.error("Password reset error:",te),T("Unable to send password reset email. Please try again in a moment.")}finally{C(!1)}};return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
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

        /* ── Site-wide smooth theme transition ──────────────────────────
           Every element inside the scene fades its colors/background/
           border/shadow smoothly whenever the "dark" class flips (Navbar
           toggle, this page's own toggle, or system preference), instead
           of the site "snapping" between themes. More specific rules
           further down (buttons, inputs, etc.) declare their own
           "transition" shorthand and simply win over this default since
           they're defined later with equal specificity — so hover/press
           effects (transform, background-position) keep their own timing. */
        .lg-scene, .lg-scene * {
          transition-property: background-color, border-color, color, box-shadow, opacity, fill, stroke;
          transition-duration: 0.5s;
          transition-timing-function: ease;
        }

        /* ── Scene background — the exact recipe used site-wide (About /
           Contact / Membership .ab-root / .cu-root): soft blue+red radials
           over a light gradient, deepening to navy/black with brighter
           blue+red glows in dark mode. Now covers the whole page — no more
           separate dark left panel, the entire screen is one themed
           surface. ── */
        .lg-scene {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(ellipse 800px 600px at 8% 0%, rgba(74,158,255,0.10), transparent 60%),
            radial-gradient(ellipse 750px 550px at 92% 15%, rgba(217,37,37,0.06), transparent 60%),
            linear-gradient(to bottom, #f5f8fb, #d3dde8);
        }
        .dark .lg-scene {
          background:
            radial-gradient(ellipse 950px 700px at 8% 5%, rgba(13,90,167,0.24), transparent 60%),
            radial-gradient(ellipse 850px 650px at 92% 25%, rgba(217,37,37,0.18), transparent 60%),
            radial-gradient(ellipse 1000px 800px at 50% 100%, rgba(13,90,167,0.16), transparent 65%),
            linear-gradient(to bottom, #001233, #00040c 65%, #00040c);
        }

        /* Scattered watermark field, spread across the full page now that
           there's no separate panel to fence it in — same drifting device
           and blue/red tint split used on Contact/Heads/Membership. */
        .lg-char {
          position: absolute;
          font-weight: 700;
          line-height: 1;
          pointer-events: none;
          user-select: none;
          z-index: 0;
          animation: lgDrift 14s ease-in-out infinite;
        }
        .dark .lg-char-blue {
          color: #4a9eff !important;
          opacity: 0.2;
          filter: drop-shadow(0 0 22px rgba(74,158,255,0.3));
        }
        .dark .lg-char-red {
          color: #ff5b5b !important;
          opacity: 0.18;
          filter: drop-shadow(0 0 22px rgba(217,37,37,0.32));
        }

        .lg-panel {
          animation: lgFadeUp 1s cubic-bezier(0.19,1,0.22,1) both;
        }

        /* ── Eyebrow label + divider — identical device to Contact's
           cu-label/cu-divider, so the form header reads like the rest of
           the site instead of a plain heading. ── */
        .lg-label {
          font-size: 11px;
          letter-spacing: 0.45em;
          color: #023260;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .dark .lg-label { color: #9fc4f0; }
        .lg-divider { display: flex; align-items: center; justify-content: center; gap: 10px; margin-top: 8px; margin-bottom: 4px; }
        .lg-divider-line { width: 32px; height: 1px; background: rgba(217,37,37,0.45); }
        .lg-divider-diamond { color: rgba(217,37,37,0.55); font-size: 10px; }

        /* ── Logo crossfade — both logos occupy the same grid cell, so the
           cell auto-sizes to the larger (white) logo and neither image
           collapses to zero width the way position:absolute children can. */
        .lg-logo-wrap {
          display: grid;
          place-items: center;
          margin-bottom: 12px;
        }
        .lg-logo-wrap img {
          grid-area: 1 / 1;
        }

        /* ── Form card — the exact glass recipe as Contact's cu-form-card,
           so the login card and the contact form read as the same
           component family. ── */
        .login-form-card {
          background: linear-gradient(to bottom, rgba(245, 248, 251, 0.55), rgba(211, 221, 232, 0.55));
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(2, 50, 96, 0.12);
          border-radius: 20px;
          box-shadow: 0 4px 18px rgba(2, 50, 96, 0.1);
        }
        .dark .login-form-card {
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.03));
          border-color: rgba(255, 255, 255, 0.12);
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.4), 0 0 40px rgba(13,90,167,0.12);
        }

        /* ── Inputs — the exact recipe as Membership's mb-input, so every
           form field across the site behaves and looks the same. ── */
        .lg-field { position: relative; }
        .lg-field input {
          border: 1px solid rgba(2,50,96,0.15);
          border-radius: 12px;
          color: #023260;
          background: rgba(255,255,255,0.6);
        }
        .lg-field input::placeholder { color: rgba(2, 50, 96, 0.35); }
        .lg-field input:focus {
          outline: none;
          border-color: #023260;
          box-shadow: 0 0 0 3px rgba(2,50,96,0.1);
        }
        .dark .lg-field input {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.16);
          color: #f5f8fb;
        }
        .dark .lg-field input::placeholder { color: rgba(255, 255, 255, 0.35); }
        .dark .lg-field input:focus {
          border-color: #4a9eff;
          box-shadow: 0 0 0 3px rgba(74,158,255,0.15);
        }
        .lg-field:focus-within svg.lg-icon { color: #023260; }
        .dark .lg-field:focus-within svg.lg-icon { color: #4a9eff; }

        /* ── Primary button — the exact red-gradient CTA used everywhere
           else on the site (Contact's cu-btn, About/Membership's
           ab-btn-gradient), so "Login" reads as the same action as
           "Send Message" or "Register". ── */
        .lg-submit {
          position: relative;
          overflow: hidden;
          background: linear-gradient(115deg, #7a1220, #D92525 45%, #ff6b4a 75%, #D92525);
          background-size: 250% 250%;
          background-position: 0% 50%;
          box-shadow: 0 4px 14px rgba(217,37,37,0.3);
          transition: background-position 0.6s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }
        .lg-submit::before {
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
        .lg-submit:hover {
          background-position: 100% 50%;
          transform: translateY(-1px) scale(1.02);
          box-shadow: 0 8px 20px rgba(217,37,37,0.4);
        }
        .lg-submit:hover::before { left: 125%; }
        .lg-submit:active { transform: translateY(0) scale(0.98); }
        .lg-submit:disabled {
          background: rgba(2, 50, 96, 0.2);
          color: rgba(2, 50, 96, 0.4);
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }
        .dark .lg-submit { box-shadow: 0 3px 12px rgba(217,37,37,0.28); }
        .dark .lg-submit:hover { box-shadow: 0 5px 16px rgba(217,37,37,0.34); }
        .dark .lg-submit:disabled {
          background: rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.3);
          box-shadow: none;
        }
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
          .lg-char, .login-form-card, .lg-panel,
          .lg-submit::before, .lg-scene, .lg-scene * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}),l.jsxs("div",{className:"lg-scene px-6 py-10",children:[l.jsx("button",{type:"button",onClick:S,"aria-label":"Toggle dark mode",title:x?"Switch to light mode":"Switch to dark mode",className:"fixed top-4 right-4 z-30 flex items-center justify-center w-10 h-10 rounded-full text-[#023260] dark:text-white bg-white/50 dark:bg-white/10 border border-[rgba(2,50,96,0.15)] dark:border-white/15 backdrop-blur-md hover:bg-white/70 dark:hover:bg-white/15 transition",children:x?l.jsx(Bu,{size:18}):l.jsx(Uu,{size:18})}),l.jsx("span",{className:"lg-char lg-char-blue",style:{fontSize:210,color:"rgba(2,50,96,0.05)",top:"-4%",left:"-5%",animationDelay:"0s"},children:"登"}),l.jsx("span",{className:"lg-char lg-char-blue",style:{fontSize:170,color:"rgba(2,50,96,0.05)",top:"58%",left:"6%",animationDelay:"2.4s"},children:"录"}),l.jsx("span",{className:"lg-char lg-char-red",style:{fontSize:130,color:"rgba(217,37,37,0.05)",top:"8%",right:"8%",animationDelay:"1.1s"},children:"电"}),l.jsx("span",{className:"lg-char lg-char-red",style:{fontSize:190,color:"rgba(217,37,37,0.045)",bottom:"-6%",right:"-4%",animationDelay:"3.2s"},children:"工"}),l.jsx("span",{className:"lg-char lg-char-blue hidden md:block",style:{fontSize:90,color:"rgba(2,50,96,0.06)",bottom:"10%",left:"38%",animationDelay:"0.6s"},children:"码"}),l.jsx("div",{className:"lg-panel relative z-10 w-full flex justify-center",children:l.jsxs("div",{className:"login-form-card px-6 sm:px-10 md:px-12 py-10 w-full max-w-[500px]",children:[l.jsxs("div",{className:"flex flex-col items-center mb-6",children:[l.jsxs("div",{className:"lg-logo-wrap",children:[l.jsx("img",{src:vl,alt:"IEEE Logo",className:"h-16 drop-shadow-sm",style:{opacity:x?0:1}}),l.jsx("img",{src:wl,alt:"IEEE Logo",className:"h-24 drop-shadow-sm",style:{opacity:x?1:0}})]}),l.jsx("p",{className:"lg-label",children:"登录"}),l.jsx("h2",{className:"text-3xl sm:text-4xl font-semibold text-center text-[#023260] dark:text-white drop-shadow-sm",children:"Login"}),l.jsxs("div",{className:"lg-divider",children:[l.jsx("div",{className:"lg-divider-line"}),l.jsx("span",{className:"lg-divider-diamond",children:"❖"}),l.jsx("div",{className:"lg-divider-line"})]}),l.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-2 text-center",children:"This login is exclusive to IEEE ECU SB Team"})]}),l.jsxs("form",{className:"space-y-5",onSubmit:X,children:[l.jsxs("div",{children:[l.jsx("label",{htmlFor:"email",className:"block text-sm font-semibold text-[#023260] dark:text-white mb-2",children:"Email"}),l.jsxs("div",{className:"lg-field relative",children:[l.jsx(wn,{size:16,className:"lg-icon absolute left-3 top-1/2 -translate-y-1/2 text-[#023260]/50 dark:text-white/40 z-10"}),l.jsx("input",{type:"email",id:"email",value:r,onChange:z=>a(z.target.value),placeholder:"username@gmail.com",className:"w-full pl-9 pr-2 py-2.5 focus:outline-none"})]})]}),l.jsxs("div",{children:[l.jsx("label",{htmlFor:"password",className:"block text-sm font-semibold text-[#023260] dark:text-white mb-1",children:"Password"}),l.jsxs("div",{className:"lg-field relative",children:[l.jsx(Kr,{size:16,className:"lg-icon absolute left-3 top-1/2 -translate-y-1/2 text-[#023260]/50 dark:text-white/40 z-10"}),l.jsx("input",{type:c?"text":"password",id:"password",value:s,onChange:z=>i(z.target.value),placeholder:"Password",className:"w-full pl-9 pr-9 py-2.5 focus:outline-none"}),l.jsx("button",{type:"button",onClick:()=>d(z=>!z),className:"absolute right-3 top-1/2 -translate-y-1/2 text-[#023260]/50 dark:text-white/40 hover:text-[#D92525] transition z-10",tabIndex:-1,"aria-label":c?"Hide password":"Show password",children:c?l.jsx(Ri,{size:16}):l.jsx(zi,{size:16})})]}),l.jsx("div",{className:"flex justify-end mt-1 mb-2",children:l.jsx("button",{type:"button",onClick:J,disabled:N,className:"text-xs font-semibold text-[#023260] dark:text-white hover:text-[#D92525] hover:underline transition disabled:opacity-60",children:N?"Sending…":"Forgot Password?"})}),E&&l.jsx("p",{className:"text-xs font-semibold text-green-700 dark:text-green-400 mb-4",children:E}),M&&l.jsx("p",{className:"text-xs font-semibold text-[#D92525] mb-4",children:M}),!E&&!M&&l.jsx("div",{className:"mb-6"})]}),l.jsx("button",{type:"submit",disabled:m,className:"lg-submit w-full text-white font-semibold py-2.5 rounded-full transition-colors duration-300 disabled:opacity-60 flex items-center justify-center gap-2 mt-8",children:m?l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"lg-spinner"}),l.jsx("span",{children:"Signing in…"})]}):l.jsxs(l.Fragment,{children:[l.jsx("span",{children:"Login"}),l.jsx(Ii,{size:16,className:"lg-arrow"})]})})]}),h&&l.jsx("p",{className:"text-[#023260] dark:text-white text-center mt-3 text-sm font-semibold",children:h}),l.jsxs("p",{className:"text-sm font-semibold text-gray-600 dark:text-gray-300 text-center mt-3",children:["Back To"," ",l.jsx(tt,{to:"/",className:"text-[#023260] dark:text-white font-semibold hover:text-[#D92525] hover:underline transition",children:"Home"})]})]})})]})]})}function l3(){const r=_s(),[a,s]=v.useState(""),[i,c]=v.useState(""),[d,h]=v.useState(!1),[p,m]=v.useState(!1),[g,y]=v.useState(!1),[x,k]=v.useState(!0),[S,N]=v.useState(""),[C,E]=v.useState("");v.useEffect(()=>{(async()=>{const{data:{session:I}}=await re.auth.getSession();I||N("This password reset link is invalid or has expired. Please request a new one."),k(!1)})();const{data:{subscription:T}}=re.auth.onAuthStateChange((I,X)=>{I==="PASSWORD_RECOVERY"&&X&&N("")});return()=>T.unsubscribe()},[]);const B=async M=>{if(M.preventDefault(),N(""),E(""),!a||!i){N("Please fill in all fields.");return}if(a.length<8){N("Password must be at least 8 characters.");return}if(a!==i){N("Passwords do not match.");return}y(!0);try{const{error:T}=await re.auth.updateUser({password:a});if(T)throw T;E("Your password has been reset successfully. You can now log in."),s(""),c(""),setTimeout(()=>{r("/login")},1800)}catch(T){N(T.message||"Failed to reset password.")}finally{y(!1)}};return x?l.jsx("div",{className:"min-h-screen flex items-center justify-center",children:l.jsx("div",{className:"text-[#023260] font-semibold",children:"Checking reset link..."})}):l.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-[#eef2f6] via-[#dfe7ee] to-[#cfd9e3] px-6",children:l.jsxs("div",{className:"w-full max-w-[440px] rounded-2xl p-8 bg-white/30 backdrop-blur-xl border border-white/40 shadow-xl",children:[l.jsxs("div",{className:"text-center mb-8",children:[l.jsx("h1",{className:"text-3xl font-semibold text-[#023260]",children:"Reset Password"}),l.jsx("p",{className:"text-sm text-gray-600 mt-2",children:"Enter your new password below."})]}),S&&l.jsx("div",{className:"mb-5 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600",children:S}),C&&l.jsx("div",{className:"mb-5 rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700",children:C}),!C&&!S.includes("invalid")&&l.jsxs("form",{onSubmit:B,className:"space-y-5",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-semibold text-[#023260] mb-2",children:"New Password"}),l.jsxs("div",{className:"relative",children:[l.jsx(Kr,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-[#023260]/50"}),l.jsx("input",{type:d?"text":"password",value:a,onChange:M=>s(M.target.value),placeholder:"••••••••",className:"w-full pl-9 pr-10 py-3 rounded-xl border border-[#023260]/20 bg-white/40 focus:outline-none focus:border-[#023260]"}),l.jsx("button",{type:"button",onClick:()=>h(M=>!M),className:"absolute right-3 top-1/2 -translate-y-1/2 text-[#023260]/50",children:d?l.jsx(Ri,{size:16}):l.jsx(zi,{size:16})})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-semibold text-[#023260] mb-2",children:"Confirm Password"}),l.jsxs("div",{className:"relative",children:[l.jsx(Kr,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-[#023260]/50"}),l.jsx("input",{type:p?"text":"password",value:i,onChange:M=>c(M.target.value),placeholder:"••••••••",className:"w-full pl-9 pr-10 py-3 rounded-xl border border-[#023260]/20 bg-white/40 focus:outline-none focus:border-[#023260]"}),l.jsx("button",{type:"button",onClick:()=>m(M=>!M),className:"absolute right-3 top-1/2 -translate-y-1/2 text-[#023260]/50",children:p?l.jsx(Ri,{size:16}):l.jsx(zi,{size:16})})]})]}),l.jsx("p",{className:"text-xs text-gray-500",children:"Password must be at least 8 characters."}),l.jsx("button",{type:"submit",disabled:g,className:"w-full bg-[#023260] hover:bg-[#012040] text-white font-semibold py-3 rounded-full flex items-center justify-center gap-2 transition disabled:opacity-60",children:g?"Updating...":l.jsxs(l.Fragment,{children:[l.jsx("span",{children:"Reset Password"}),l.jsx(Ii,{size:16})]})})]}),S&&S.includes("invalid")&&l.jsx("button",{onClick:()=>r("/login"),className:"w-full bg-[#023260] text-white py-3 rounded-full font-semibold",children:"Back to Login"})]})})}var su,Dm;function c3(){if(Dm)return su;Dm=1;var r=!1,a,s,i,c,d,h,p,m,g,y,x,k,S,N,C;function E(){if(!r){r=!0;var M=navigator.userAgent,T=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(M),I=/(Mac OS X)|(Windows)|(Linux)/.exec(M);if(k=/\b(iPhone|iP[ao]d)/.exec(M),S=/\b(iP[ao]d)/.exec(M),y=/Android/i.exec(M),N=/FBAN\/\w+;/i.exec(M),C=/Mobile/i.exec(M),x=!!/Win64/.exec(M),T){a=T[1]?parseFloat(T[1]):T[5]?parseFloat(T[5]):NaN,a&&document&&document.documentMode&&(a=document.documentMode);var X=/(?:Trident\/(\d+.\d+))/.exec(M);h=X?parseFloat(X[1])+4:a,s=T[2]?parseFloat(T[2]):NaN,i=T[3]?parseFloat(T[3]):NaN,c=T[4]?parseFloat(T[4]):NaN,c?(T=/(?:Chrome\/(\d+\.\d+))/.exec(M),d=T&&T[1]?parseFloat(T[1]):NaN):d=NaN}else a=s=i=d=c=NaN;if(I){if(I[1]){var J=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(M);p=J?parseFloat(J[1].replace("_",".")):!0}else p=!1;m=!!I[2],g=!!I[3]}else p=m=g=!1}}var B={ie:function(){return E()||a},ieCompatibilityMode:function(){return E()||h>a},ie64:function(){return B.ie()&&x},firefox:function(){return E()||s},opera:function(){return E()||i},webkit:function(){return E()||c},safari:function(){return B.webkit()},chrome:function(){return E()||d},windows:function(){return E()||m},osx:function(){return E()||p},linux:function(){return E()||g},iphone:function(){return E()||k},mobile:function(){return E()||k||S||y||C},nativeApp:function(){return E()||N},android:function(){return E()||y},ipad:function(){return E()||S}};return su=B,su}var iu,Mm;function d3(){if(Mm)return iu;Mm=1;var r=!!(typeof window<"u"&&window.document&&window.document.createElement),a={canUseDOM:r,canUseWorkers:typeof Worker<"u",canUseEventListeners:r&&!!(window.addEventListener||window.attachEvent),canUseViewport:r&&!!window.screen,isInWorker:!r};return iu=a,iu}var ou,Lm;function u3(){if(Lm)return ou;Lm=1;var r=d3(),a;r.canUseDOM&&(a=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);/**
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
 */function s(i,c){if(!r.canUseDOM||c&&!("addEventListener"in document))return!1;var d="on"+i,h=d in document;if(!h){var p=document.createElement("div");p.setAttribute(d,"return;"),h=typeof p[d]=="function"}return!h&&a&&i==="wheel"&&(h=document.implementation.hasFeature("Events.wheel","3.0")),h}return ou=s,ou}var lu,Um;function h3(){if(Um)return lu;Um=1;var r=c3(),a=u3(),s=10,i=40,c=800;function d(h){var p=0,m=0,g=0,y=0;return"detail"in h&&(m=h.detail),"wheelDelta"in h&&(m=-h.wheelDelta/120),"wheelDeltaY"in h&&(m=-h.wheelDeltaY/120),"wheelDeltaX"in h&&(p=-h.wheelDeltaX/120),"axis"in h&&h.axis===h.HORIZONTAL_AXIS&&(p=m,m=0),g=p*s,y=m*s,"deltaY"in h&&(y=h.deltaY),"deltaX"in h&&(g=h.deltaX),(g||y)&&h.deltaMode&&(h.deltaMode==1?(g*=i,y*=i):(g*=c,y*=c)),g&&!p&&(p=g<1?-1:1),y&&!m&&(m=y<1?-1:1),{spinX:p,spinY:m,pixelX:g,pixelY:y}}return d.getEventType=function(){return r.firefox()?"DOMMouseScroll":a("wheel")?"wheel":"mousewheel"},lu=d,lu}var cu,Bm;function f3(){return Bm||(Bm=1,cu=h3()),cu}var p3=f3();const m3=Cu(p3);function $i(r){"@babel/helpers - typeof";return $i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},$i(r)}function g3(r,a){if($i(r)!="object"||!r)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var i=s.call(r,a);if($i(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(r)}function b3(r){var a=g3(r,"string");return $i(a)=="symbol"?a:a+""}function x3(r,a,s){return(a=b3(a))in r?Object.defineProperty(r,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[a]=s,r}function Hm(r,a){var s=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);a&&(i=i.filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable})),s.push.apply(s,i)}return s}function Nt(r){for(var a=1;a<arguments.length;a++){var s=arguments[a]!=null?arguments[a]:{};a%2?Hm(Object(s),!0).forEach(function(i){x3(r,i,s[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(s)):Hm(Object(s)).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(s,i))})}return r}function y3(r,a,s,i,c,d=0){const{width:h,height:p}=ws(r,a,d),m=Math.min(h,s),g=Math.min(p,i);return m>g*c?{width:g*c,height:g}:{width:m,height:m/c}}function v3(r){return r.width>r.height?r.width/r.naturalWidth:r.height/r.naturalHeight}function ji(r,a,s,i,c=0){const{width:d,height:h}=ws(a.width,a.height,c);return{x:$m(r.x,d,s.width,i),y:$m(r.y,h,s.height,i)}}function $m(r,a,s,i){const c=Math.abs(a*i/2-s/2);return Ml(r,-c,c)}function Pm(r,a){return Math.sqrt(Math.pow(r.y-a.y,2)+Math.pow(r.x-a.x,2))}function qm(r,a){return Math.atan2(a.y-r.y,a.x-r.x)*180/Math.PI}function w3(r,a,s,i,c,d=0,h=!0){const p=h?k3:S3,m=ws(a.width,a.height,d),g=ws(a.naturalWidth,a.naturalHeight,d),y={x:p(100,((m.width-s.width/c)/2-r.x/c)/m.width*100),y:p(100,((m.height-s.height/c)/2-r.y/c)/m.height*100),width:p(100,s.width/m.width*100/c),height:p(100,s.height/m.height*100/c)},x=Math.round(p(g.width,y.width*g.width/100)),k=Math.round(p(g.height,y.height*g.height/100)),S=g.width>=g.height*i?{width:Math.round(k*i),height:k}:{width:x,height:Math.round(x/i)};return{croppedAreaPercentages:y,croppedAreaPixels:Nt(Nt({},S),{},{x:Math.round(p(g.width-S.width,y.x*g.width/100)),y:Math.round(p(g.height-S.height,y.y*g.height/100))})}}function k3(r,a){return Math.min(r,Math.max(0,a))}function S3(r,a){return a}function j3(r,a,s,i,c,d){const h=ws(a.width,a.height,s),p=Ml(i.width/h.width*(100/r.width),c,d);return{crop:{x:p*h.width/2-i.width/2-h.width*p*(r.x/100),y:p*h.height/2-i.height/2-h.height*p*(r.y/100)},zoom:p}}function _3(r,a,s){const i=v3(a);return s.height>s.width?s.height/(r.height*i):s.width/(r.width*i)}function E3(r,a,s=0,i,c,d){const h=ws(a.naturalWidth,a.naturalHeight,s),p=Ml(_3(r,a,i),c,d),m=i.height>i.width?i.height/r.height:i.width/r.width;return{crop:{x:((h.width-r.width)/2-r.x)*m,y:((h.height-r.height)/2-r.y)*m},zoom:p}}function Im(r,a){return{x:(a.x+r.x)/2,y:(a.y+r.y)/2}}function N3(r){return r*Math.PI/180}function ws(r,a,s){const i=N3(s);return{width:Math.abs(Math.cos(i)*r)+Math.abs(Math.sin(i)*a),height:Math.abs(Math.sin(i)*r)+Math.abs(Math.cos(i)*a)}}function Ml(r,a,s){return Math.min(Math.max(r,a),s)}function pl(...r){return r.filter(a=>typeof a=="string"&&a.length>0).join(" ").trim()}var C3=`.reactEasyCrop_Container {
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
`;const T3=250,A3=1,R3=3,z3=1;var Ll=class Ra extends v.Component{constructor(...a){super(...a),this.cropperRef=v.createRef(),this.imageRef=v.createRef(),this.videoRef=v.createRef(),this.containerPosition={x:0,y:0},this.containerRef=null,this.styleRef=null,this.containerRect=null,this.mediaSize={width:0,height:0,naturalWidth:0,naturalHeight:0},this.dragStartPosition={x:0,y:0},this.dragStartCrop={x:0,y:0},this.gestureZoomStart=0,this.gestureRotationStart=0,this.isTouching=!1,this.lastPinchDistance=0,this.lastPinchRotation=0,this.rafDragTimeout=null,this.rafPinchTimeout=null,this.wheelTimer=null,this.resizeEmitTimer=null,this.currentDoc=typeof document<"u"?document:null,this.currentWindow=typeof window<"u"?window:null,this.resizeObserver=null,this.previousCropSize=null,this.isInitialized=!1,this.dragInteractionSource=null,this.state={cropSize:null,hasWheelJustStarted:!1,mediaObjectFit:void 0},this.initResizeObserver=()=>{if(typeof window.ResizeObserver>"u"||!this.containerRef)return;let s=!0;this.resizeObserver=new window.ResizeObserver(i=>{if(s){s=!1;return}this.computeSizes({isResizeTriggered:!0})}),this.resizeObserver.observe(this.containerRef)},this.onWindowResize=()=>{this.computeSizes({isResizeTriggered:!0})},this.preventZoomSafari=s=>s.preventDefault(),this.cleanEvents=()=>{this.currentDoc&&(this.currentDoc.removeEventListener("mousemove",this.onMouseMove),this.currentDoc.removeEventListener("mouseup",this.onDragStopped),this.currentDoc.removeEventListener("touchmove",this.onTouchMove),this.currentDoc.removeEventListener("touchend",this.onDragStopped),this.currentDoc.removeEventListener("gesturechange",this.onGestureChange),this.currentDoc.removeEventListener("gestureend",this.onGestureEnd),this.currentDoc.removeEventListener("scroll",this.onScroll))},this.clearScrollEvent=()=>{this.containerRef&&this.containerRef.removeEventListener("wheel",this.onWheel),this.wheelTimer&&clearTimeout(this.wheelTimer)},this.onMediaLoad=()=>{const s=this.computeSizes();s&&(this.previousCropSize=s,this.emitCropData(),this.setInitialCrop(s),this.isInitialized=!0),this.props.onMediaLoaded&&this.props.onMediaLoaded(this.mediaSize)},this.setInitialCrop=s=>{if(this.props.initialCroppedAreaPercentages){const{crop:i,zoom:c}=j3(this.props.initialCroppedAreaPercentages,this.mediaSize,this.props.rotation,s,this.props.minZoom,this.props.maxZoom);this.props.onCropChange(i),this.props.onZoomChange&&this.props.onZoomChange(c)}else if(this.props.initialCroppedAreaPixels){const{crop:i,zoom:c}=E3(this.props.initialCroppedAreaPixels,this.mediaSize,this.props.rotation,s,this.props.minZoom,this.props.maxZoom);this.props.onCropChange(i),this.props.onZoomChange&&this.props.onZoomChange(c)}},this.computeSizes=({isResizeTriggered:s=!1}={})=>{const i=this.imageRef.current||this.videoRef.current;if(i&&this.containerRef){var c,d,h,p,m,g;this.containerRect=this.containerRef.getBoundingClientRect(),this.saveContainerPosition();const y=this.containerRect.width/this.containerRect.height,x=((c=this.imageRef.current)===null||c===void 0?void 0:c.naturalWidth)||((d=this.videoRef.current)===null||d===void 0?void 0:d.videoWidth)||0,k=((h=this.imageRef.current)===null||h===void 0?void 0:h.naturalHeight)||((p=this.videoRef.current)===null||p===void 0?void 0:p.videoHeight)||0,S=i.offsetWidth<x||i.offsetHeight<k,N=x/k;let C;if(S)switch(this.state.mediaObjectFit){default:case"contain":C=y>N?{width:this.containerRect.height*N,height:this.containerRect.height}:{width:this.containerRect.width,height:this.containerRect.width/N};break;case"horizontal-cover":C={width:this.containerRect.width,height:this.containerRect.width/N};break;case"vertical-cover":C={width:this.containerRect.height*N,height:this.containerRect.height};break}else C={width:i.offsetWidth,height:i.offsetHeight};this.mediaSize=Nt(Nt({},C),{},{naturalWidth:x,naturalHeight:k}),this.props.setMediaSize&&this.props.setMediaSize(this.mediaSize);const E=this.props.cropSize?this.props.cropSize:y3(this.mediaSize.width,this.mediaSize.height,this.containerRect.width,this.containerRect.height,this.props.aspect,this.props.rotation);return(((m=this.state.cropSize)===null||m===void 0?void 0:m.height)!==E.height||((g=this.state.cropSize)===null||g===void 0?void 0:g.width)!==E.width)&&this.props.onCropSizeChange&&this.props.onCropSizeChange(E),this.setState({cropSize:E},()=>this.recomputeCropPosition({isResizeTriggered:s})),this.props.setCropSize&&this.props.setCropSize(E),E}},this.saveContainerPosition=()=>{if(this.containerRef){const s=this.containerRef.getBoundingClientRect();this.containerPosition={x:s.left,y:s.top}}},this.onMouseDown=s=>{this.currentDoc&&(s.preventDefault(),this.currentDoc.addEventListener("mousemove",this.onMouseMove),this.currentDoc.addEventListener("mouseup",this.onDragStopped),this.saveContainerPosition(),this.onDragStart(Ra.getMousePoint(s),"mouse"))},this.onMouseMove=s=>this.onDrag(Ra.getMousePoint(s)),this.onScroll=s=>{this.currentDoc&&(s.preventDefault(),this.saveContainerPosition())},this.onTouchStart=s=>{this.currentDoc&&(this.isTouching=!0,!(this.props.onTouchRequest&&!this.props.onTouchRequest(s))&&(this.currentDoc.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.currentDoc.addEventListener("touchend",this.onDragStopped),this.saveContainerPosition(),s.touches.length===2?this.onPinchStart(s):s.touches.length===1&&this.onDragStart(Ra.getTouchPoint(s.touches[0]),"touch")))},this.onTouchMove=s=>{s.preventDefault(),s.touches.length===2?this.onPinchMove(s):s.touches.length===1&&this.onDrag(Ra.getTouchPoint(s.touches[0]))},this.onGestureStart=s=>{this.currentDoc&&(s.preventDefault(),this.currentDoc.addEventListener("gesturechange",this.onGestureChange),this.currentDoc.addEventListener("gestureend",this.onGestureEnd),this.gestureZoomStart=this.props.zoom,this.gestureRotationStart=this.props.rotation)},this.onGestureChange=s=>{if(s.preventDefault(),this.isTouching)return;const i=Ra.getMousePoint(s),c=this.gestureZoomStart-1+s.scale;if(this.setNewZoom(c,i,{shouldUpdatePosition:!0}),this.props.onRotationChange){const d=this.gestureRotationStart+s.rotation;this.props.onRotationChange(d)}},this.onGestureEnd=s=>{this.cleanEvents()},this.onDragStart=({x:s,y:i},c)=>{var d,h;this.dragStartPosition={x:s,y:i},this.dragStartCrop=Nt({},this.props.crop),this.dragInteractionSource=c,(d=(h=this.props).onInteractionStart)===null||d===void 0||d.call(h,{source:c})},this.onDrag=({x:s,y:i})=>{this.currentWindow&&(this.rafDragTimeout&&this.currentWindow.cancelAnimationFrame(this.rafDragTimeout),this.rafDragTimeout=this.currentWindow.requestAnimationFrame(()=>{if(!this.state.cropSize||s===void 0||i===void 0)return;const c=s-this.dragStartPosition.x,d=i-this.dragStartPosition.y,h={x:this.dragStartCrop.x+c,y:this.dragStartCrop.y+d},p=this.props.restrictPosition?ji(h,this.mediaSize,this.state.cropSize,this.props.zoom,this.props.rotation):h;this.props.onCropChange(p)}))},this.onDragStopped=()=>{var s,i,c;this.isTouching=!1,this.cleanEvents(),this.emitCropData(),(s=(i=this.props).onInteractionEnd)===null||s===void 0||s.call(i,{source:(c=this.dragInteractionSource)!==null&&c!==void 0?c:"mouse"}),this.dragInteractionSource=null},this.onWheel=s=>{if(!this.currentWindow||this.props.onWheelRequest&&!this.props.onWheelRequest(s))return;s.preventDefault();const i=Ra.getMousePoint(s),{pixelY:c}=m3(s),d=this.props.zoom-c*this.props.zoomSpeed/200;this.setNewZoom(d,i,{shouldUpdatePosition:!0}),this.state.hasWheelJustStarted||this.setState({hasWheelJustStarted:!0},()=>{var h,p;return(h=(p=this.props).onInteractionStart)===null||h===void 0?void 0:h.call(p,{source:"wheel"})}),this.wheelTimer&&clearTimeout(this.wheelTimer),this.wheelTimer=this.currentWindow.setTimeout(()=>this.setState({hasWheelJustStarted:!1},()=>{var h,p;return(h=(p=this.props).onInteractionEnd)===null||h===void 0?void 0:h.call(p,{source:"wheel"})}),250)},this.getPointOnContainer=({x:s,y:i},c)=>{if(!this.containerRect)throw new Error("The Cropper is not mounted");return{x:this.containerRect.width/2-(s-c.x),y:this.containerRect.height/2-(i-c.y)}},this.getPointOnMedia=({x:s,y:i})=>{const{crop:c,zoom:d}=this.props;return{x:(s+c.x)/d,y:(i+c.y)/d}},this.setNewZoom=(s,i,{shouldUpdatePosition:c=!0}={})=>{if(!this.state.cropSize||!this.props.onZoomChange)return;const d=Ml(s,this.props.minZoom,this.props.maxZoom);if(c){const h=this.getPointOnContainer(i,this.containerPosition),p=this.getPointOnMedia(h),m={x:p.x*d-h.x,y:p.y*d-h.y},g=this.props.restrictPosition?ji(m,this.mediaSize,this.state.cropSize,d,this.props.rotation):m;this.props.onCropChange(g)}this.props.onZoomChange(d)},this.getCropData=()=>this.state.cropSize?w3(this.props.restrictPosition?ji(this.props.crop,this.mediaSize,this.state.cropSize,this.props.zoom,this.props.rotation):this.props.crop,this.mediaSize,this.state.cropSize,this.getAspect(),this.props.zoom,this.props.rotation,this.props.restrictPosition):null,this.emitCropData=()=>{this.resizeEmitTimer&&(clearTimeout(this.resizeEmitTimer),this.resizeEmitTimer=null);const s=this.getCropData();if(!s)return;const{croppedAreaPercentages:i,croppedAreaPixels:c}=s;this.props.onCropComplete&&this.props.onCropComplete(i,c),this.props.onCropAreaChange&&this.props.onCropAreaChange(i,c)},this.emitCropAreaChange=()=>{const s=this.getCropData();if(!s)return;const{croppedAreaPercentages:i,croppedAreaPixels:c}=s;this.props.onCropAreaChange&&this.props.onCropAreaChange(i,c)},this.recomputeCropPosition=({isResizeTriggered:s=!1}={})=>{var i,c;if(!this.state.cropSize)return;let d=this.props.crop;if(this.isInitialized&&(!((i=this.previousCropSize)===null||i===void 0)&&i.width)&&(!((c=this.previousCropSize)===null||c===void 0)&&c.height)&&(Math.abs(this.previousCropSize.width-this.state.cropSize.width)>1e-6||Math.abs(this.previousCropSize.height-this.state.cropSize.height)>1e-6)){const p=this.state.cropSize.width/this.previousCropSize.width,m=this.state.cropSize.height/this.previousCropSize.height;d={x:this.props.crop.x*p,y:this.props.crop.y*m}}const h=this.props.restrictPosition?ji(d,this.mediaSize,this.state.cropSize,this.props.zoom,this.props.rotation):d;this.previousCropSize=this.state.cropSize,this.props.onCropChange(h),s?this.debouncedEmitCropData():this.emitCropData()},this.debouncedEmitCropData=()=>{this.currentWindow&&(this.resizeEmitTimer&&clearTimeout(this.resizeEmitTimer),this.resizeEmitTimer=this.currentWindow.setTimeout(()=>{this.emitCropData()},T3))},this.onKeyDown=s=>{const{crop:i,onCropChange:c,keyboardStep:d,zoom:h,rotation:p}=this.props;let m=d;if(!this.state.cropSize)return;s.shiftKey&&(m*=.2);let g=Nt({},i);switch(s.key){case"ArrowUp":g.y-=m,s.preventDefault();break;case"ArrowDown":g.y+=m,s.preventDefault();break;case"ArrowLeft":g.x-=m,s.preventDefault();break;case"ArrowRight":g.x+=m,s.preventDefault();break;default:return}if(this.props.restrictPosition&&(g=ji(g,this.mediaSize,this.state.cropSize,h,p)),!s.repeat){var y,x;(y=(x=this.props).onInteractionStart)===null||y===void 0||y.call(x,{source:"keyboard"})}c(g)},this.onKeyUp=s=>{var i,c;switch(s.key){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":s.preventDefault();break;default:return}this.emitCropData(),(i=(c=this.props).onInteractionEnd)===null||i===void 0||i.call(c,{source:"keyboard"})}}componentDidMount(){!this.currentDoc||!this.currentWindow||(this.containerRef&&(this.containerRef.ownerDocument&&(this.currentDoc=this.containerRef.ownerDocument),this.currentDoc.defaultView&&(this.currentWindow=this.currentDoc.defaultView),this.initResizeObserver(),typeof window.ResizeObserver>"u"&&this.currentWindow.addEventListener("resize",this.onWindowResize),this.props.zoomWithScroll&&this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}),this.containerRef.addEventListener("gesturestart",this.onGestureStart)),this.currentDoc.addEventListener("scroll",this.onScroll),this.props.disableAutomaticStylesInjection||(this.styleRef=this.currentDoc.createElement("style"),this.styleRef.setAttribute("type","text/css"),this.props.nonce&&this.styleRef.setAttribute("nonce",this.props.nonce),this.styleRef.innerHTML=C3,this.currentDoc.head.appendChild(this.styleRef)),this.imageRef.current&&this.imageRef.current.complete&&this.onMediaLoad(),this.props.setImageRef&&this.props.setImageRef(this.imageRef),this.props.setVideoRef&&this.props.setVideoRef(this.videoRef),this.props.setCropperRef&&this.props.setCropperRef(this.cropperRef))}componentWillUnmount(){var a;if(!(!this.currentDoc||!this.currentWindow)){if(typeof window.ResizeObserver>"u"&&this.currentWindow.removeEventListener("resize",this.onWindowResize),(a=this.resizeObserver)===null||a===void 0||a.disconnect(),this.resizeEmitTimer&&clearTimeout(this.resizeEmitTimer),this.containerRef&&this.containerRef.removeEventListener("gesturestart",this.preventZoomSafari),this.styleRef){var s;(s=this.styleRef.parentNode)===null||s===void 0||s.removeChild(this.styleRef)}this.cleanEvents(),this.props.zoomWithScroll&&this.clearScrollEvent()}}componentDidUpdate(a){var s,i,c,d,h,p,m,g;if(a.rotation!==this.props.rotation?(this.computeSizes(),this.recomputeCropPosition()):a.aspect!==this.props.aspect?this.computeSizes():a.objectFit!==this.props.objectFit?this.computeSizes():a.zoom!==this.props.zoom?this.recomputeCropPosition():((s=a.cropSize)===null||s===void 0?void 0:s.height)!==((i=this.props.cropSize)===null||i===void 0?void 0:i.height)||((c=a.cropSize)===null||c===void 0?void 0:c.width)!==((d=this.props.cropSize)===null||d===void 0?void 0:d.width)?this.computeSizes():(((h=a.crop)===null||h===void 0?void 0:h.x)!==((p=this.props.crop)===null||p===void 0?void 0:p.x)||((m=a.crop)===null||m===void 0?void 0:m.y)!==((g=this.props.crop)===null||g===void 0?void 0:g.y))&&this.emitCropAreaChange(),a.zoomWithScroll!==this.props.zoomWithScroll&&this.containerRef&&(this.props.zoomWithScroll?this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}):this.clearScrollEvent()),a.video!==this.props.video){var y;(y=this.videoRef.current)===null||y===void 0||y.load()}const x=this.getObjectFit();x!==this.state.mediaObjectFit&&this.setState({mediaObjectFit:x},this.computeSizes)}getAspect(){const{cropSize:a,aspect:s}=this.props;return a?a.width/a.height:s}getObjectFit(){if(this.props.objectFit==="cover"){if((this.imageRef.current||this.videoRef.current)&&this.containerRef){var a,s,i,c;this.containerRect=this.containerRef.getBoundingClientRect();const d=this.containerRect.width/this.containerRect.height;return(((a=this.imageRef.current)===null||a===void 0?void 0:a.naturalWidth)||((s=this.videoRef.current)===null||s===void 0?void 0:s.videoWidth)||0)/(((i=this.imageRef.current)===null||i===void 0?void 0:i.naturalHeight)||((c=this.videoRef.current)===null||c===void 0?void 0:c.videoHeight)||0)<d?"horizontal-cover":"vertical-cover"}return"horizontal-cover"}return this.props.objectFit}onPinchStart(a){const s=Ra.getTouchPoint(a.touches[0]),i=Ra.getTouchPoint(a.touches[1]);this.lastPinchDistance=Pm(s,i),this.lastPinchRotation=qm(s,i),this.onDragStart(Im(s,i),"touch")}onPinchMove(a){if(!this.currentDoc||!this.currentWindow)return;const s=Ra.getTouchPoint(a.touches[0]),i=Ra.getTouchPoint(a.touches[1]),c=Im(s,i);this.onDrag(c),this.rafPinchTimeout&&this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout),this.rafPinchTimeout=this.currentWindow.requestAnimationFrame(()=>{const d=Pm(s,i),h=this.props.zoom*(d/this.lastPinchDistance);this.setNewZoom(h,c,{shouldUpdatePosition:!1}),this.lastPinchDistance=d;const p=qm(s,i),m=this.props.rotation+(p-this.lastPinchRotation);this.props.onRotationChange&&this.props.onRotationChange(m),this.lastPinchRotation=p})}render(){var a;const{image:s,video:i,mediaProps:c,cropperProps:d,transform:h,crop:{x:p,y:m},rotation:g,zoom:y,cropShape:x,showGrid:k,roundCropAreaPixels:S,style:{containerStyle:N,cropAreaStyle:C,mediaStyle:E},classes:{containerClassName:B,cropAreaClassName:M,mediaClassName:T}}=this.props,I=(a=this.state.mediaObjectFit)!==null&&a!==void 0?a:this.getObjectFit();return v.createElement("div",{onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,ref:X=>this.containerRef=X,"data-testid":"container",style:N,className:pl("reactEasyCrop_Container",B)},s?v.createElement("img",Nt(Nt({alt:"",className:pl("reactEasyCrop_Image",I==="contain"&&"reactEasyCrop_Contain",I==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",I==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",T)},c),{},{src:s,ref:this.imageRef,style:Nt(Nt({},E),{},{transform:h||`translate(${p}px, ${m}px) rotate(${g}deg) scale(${y})`}),onLoad:this.onMediaLoad})):i&&v.createElement("video",Nt(Nt({autoPlay:!0,playsInline:!0,loop:!0,muted:!0,className:pl("reactEasyCrop_Video",I==="contain"&&"reactEasyCrop_Contain",I==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",I==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",T)},c),{},{ref:this.videoRef,onLoadedMetadata:this.onMediaLoad,style:Nt(Nt({},E),{},{transform:h||`translate(${p}px, ${m}px) rotate(${g}deg) scale(${y})`}),controls:!1}),(Array.isArray(i)?i:[{src:i}]).map(X=>v.createElement("source",Nt({key:X.src},X)))),this.state.cropSize&&v.createElement("div",Nt({ref:this.cropperRef,style:Nt(Nt({},C),{},{width:S?Math.round(this.state.cropSize.width):this.state.cropSize.width,height:S?Math.round(this.state.cropSize.height):this.state.cropSize.height}),tabIndex:0,onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp,"data-testid":"cropper",className:pl("reactEasyCrop_CropArea",x==="round"&&"reactEasyCrop_CropAreaRound",k&&"reactEasyCrop_CropAreaGrid",M)},d)))}};Ll.defaultProps={zoom:1,rotation:0,aspect:4/3,maxZoom:R3,minZoom:A3,cropShape:"rect",objectFit:"contain",showGrid:!0,style:{},classes:{},mediaProps:{},cropperProps:{},zoomSpeed:1,restrictPosition:!0,zoomWithScroll:!0,keyboardStep:z3};Ll.getMousePoint=r=>({x:Number(r.clientX),y:Number(r.clientY)});Ll.getTouchPoint=r=>({x:Number(r.clientX),y:Number(r.clientY)});var Fg=Ll;function O3({open:r,onClose:a}){return r?l.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4",children:l.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl text-center",children:[l.jsx("div",{className:"mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-[#023260]",children:l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75l2.25 2.25L15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),l.jsx("h3",{className:"text-lg font-semibold text-[#023260] mb-2",children:"Account created!"}),l.jsx("p",{className:"text-sm text-gray-500 leading-relaxed mb-6",children:"Your registration is now pending approval. You'll be able to log in once an admin reviews and accepts your request."}),l.jsx("button",{onClick:a,className:"w-full bg-[#023260] text-white font-semibold py-2.5 rounded-full hover:bg-[#D92525] transition",children:"OK"})]})}):null}const Jg={Engineering:["Level 1","Level 2","Level 3","Level 4","Level 5","Graduate"],Media:["Level 1","Level 2","Level 3","Level 4","Graduate"],"Physical Therapy":["Level 1","Level 2","Level 3","Level 4","Level 5","Entern Year","Graduate"],"Computer Science":["Level 1","Level 2","Level 3","Level 4","Graduate"],"Veterinary Medicine":["Level 1","Level 2","Level 3","Level 4","Level 5","Entern Year","Graduate"],"Arts and Design":["Level 1","Level 2","Level 3","Level 4","Graduate"],Pharmacy:["Level 1","Level 2","Level 3","Level 4","Level 5","Entern Year","Graduate"],Nursing:["Level 1","Level 2","Level 3","Level 4","Graduate"],"Economics and International Trade":["Level 1","Level 2","Level 3","Level 4","Graduate"],Law:["Level 1","Level 2","Level 3","Level 4","Graduate"]},D3=Object.keys(Jg),M3=["Chair","Vice Chair","Secretary","Treasurer","Webmaster"],L3=["Technical","Media","PR","HR","Events"],U3=["Leader Software","Leader Hardware","Leader Visuals","Leader Graphics","Leader Marketing","Vice HR","Vice PR","Vice Events"],B3=["Technical","HR","PR","Media","Events"],H3=["Software","Hardware","General"],$3=[{value:"male",label:"Male"},{value:"female",label:"Female"}],P3={Tech:"Technical",Media:"Media",PR:"PR",HR:"HR",Events:"Events"},q3={"Leader Software":"Technical","Leader Hardware":"Technical","Leader Visuals":"Technical","Leader Graphics":"Media","Leader Marketing":"PR","Vice HR":"HR","Vice PR":"PR","Vice Events":"Events"},I3=r=>/^https?:\/\/([a-z]{2,3}\.)?linkedin\.com\/.+/i.test(r.trim()),Ym=r=>r.length>=8&&/[a-z]/.test(r)&&/[A-Z]/.test(r)&&/[0-9]/.test(r)&&/[^A-Za-z0-9]/.test(r);function Y3(){const r=_s(),[a]=$2(),s=a.get("ref"),[i,c]=v.useState(()=>{if(typeof window>"u")return!1;const K=localStorage.getItem("theme");return K?K==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches});v.useEffect(()=>{const K=document.documentElement;i?(K.classList.add("dark"),localStorage.setItem("theme","dark")):(K.classList.remove("dark"),localStorage.setItem("theme","light"))},[i]),v.useEffect(()=>{const K=document.documentElement,W=new MutationObserver(()=>{const we=K.classList.contains("dark");c(De=>De===we?De:we)});return W.observe(K,{attributes:!0,attributeFilter:["class"]}),()=>W.disconnect()},[]);const d=()=>c(K=>!K),[h,p]=v.useState(""),[m,g]=v.useState(""),[y,x]=v.useState(""),[k,S]=v.useState(""),[N,C]=v.useState(""),[E,B]=v.useState(""),[M,T]=v.useState(""),[I,X]=v.useState(""),[J,z]=v.useState(""),[Q,te]=v.useState(""),[le,fe]=v.useState(""),[ce,Se]=v.useState(""),[ve,Me]=v.useState(""),[O,ee]=v.useState(""),[ae,xe]=v.useState(""),[Z,_]=v.useState(""),[A,q]=v.useState(!1),[F,ne]=v.useState(null),[ke,Ae]=v.useState(null),$e=v.useRef(null),[Ne,Dt]=v.useState(!1),[vt,qt]=v.useState(null),[ka,P]=v.useState({x:0,y:0}),[se,ue]=v.useState(1),[pe,wt]=v.useState(null),Qe=K=>{const W=K.target.files?.[0];if(K.target.value="",!W)return;if(!W.type.startsWith("image/")){Le("Please select a valid image.");return}const we=URL.createObjectURL(W);qt(we),P({x:0,y:0}),ue(1),Dt(!0)},kt=v.useCallback((K,W)=>{wt(W)},[]),Ya=async(K,W)=>{const we=await new Promise((Mt,Lt)=>{const Ut=new Image;Ut.onload=()=>Mt(Ut),Ut.onerror=Lt,Ut.src=K}),De=document.createElement("canvas"),Ke=800;return De.width=Ke,De.height=Ke,De.getContext("2d").drawImage(we,W.x,W.y,W.width,W.height,0,0,Ke,Ke),new Promise((Mt,Lt)=>{De.toBlob(Ut=>{if(!Ut){Lt(new Error("Could not create cropped image."));return}Mt(Ut)},"image/jpeg",.9)})},kn=async()=>{if(!(!vt||!pe))try{const K=await Ya(vt,pe),W=new File([K],`avatar_${Date.now()}.jpg`,{type:"image/jpeg"});ne(W),Ae(URL.createObjectURL(K)),Dt(!1),URL.revokeObjectURL(vt),qt(null)}catch(K){console.error("Image crop failed:",K),Le("Could not edit this image. Please try another one.")}},Sn=()=>{vt&&URL.revokeObjectURL(vt),Dt(!1),qt(null),P({x:0,y:0}),ue(1)},[St,Cs]=v.useState(!1),[Fr,yr]=v.useState(!1),[Sa,da]=v.useState(!1),[Ga,Le]=v.useState(""),jn=()=>h==="Highboard"?M3:h==="Board"&&m==="Head"?L3:h==="Board"&&m==="Vice"?U3:[],Da=K=>{p(K),g(""),x(""),S(""),C(""),Le("")},xt=K=>{g(K),x(""),Le("")},$t=K=>{S(K),C(""),Le("")},jt=K=>{fe(K),Se(""),Le("")},Va=async K=>{if(K.preventDefault(),Le(""),!h)return Le("Please select your tier.");if(h==="Board"&&!m)return Le("Please select Head or Vice.");if((h==="Board"||h==="Highboard")&&!y)return Le("Please select your position.");if(h==="Member"&&!k)return Le("Please select your team.");if(h==="Member"&&k==="Technical"&&!N)return Le("Please select your technical sub-team.");if(!E.trim())return Le("First name is required.");if(!M.trim())return Le("Last name is required.");if(!I)return Le("Please select your gender.");if(!J)return Le("Date of birth is required.");if(!Q.trim())return Le("Phone number is required.");if(!le)return Le("Please select your faculty.");if(!ce)return Le("Please select your level.");if(!ve.trim())return Le("Email is required.");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ve.trim()))return Le("Please enter a valid email address.");const W=O.trim();if(W.length>0&&!I3(W))return Le("Please enter a valid LinkedIn URL (e.g. https://linkedin.com/in/yourname), or leave it blank.");if(!ae)return Le("Password is required.");if(!Ym(ae))return Le("Password must be at least 8 characters and include an uppercase letter, a lowercase letter, a number, and a symbol.");if(!Z)return Le("Please confirm your password.");if(ae!==Z)return Le("Passwords do not match.");da(!0);try{const{data:we}=await re.from("profiles").select("id").eq("email",ve).maybeSingle();if(we)throw new Error("An account with this email already exists. Please log in.");const{data:De,error:Ke}=await re.from("pending_registrations").select("id").eq("email",ve).eq("status","pending").maybeSingle();if(Ke&&console.warn("Pending registration check failed (possible RLS issue):",Ke),De)throw new Error("This email is already pending approval. Please wait or contact an admin.");const rt=Q.trim(),{data:Mt,error:Lt}=await re.from("profiles").select("id").eq("phone_number",rt).eq("status","pending").maybeSingle();if(Lt&&console.warn("Profile phone check failed (possible RLS issue):",Lt),Mt)throw new Error("This phone number is already registered to an existing account.");const{data:Ut,error:Qt}=await re.from("pending_registrations").select("id").eq("phone_number",rt).maybeSingle();if(Qt&&console.warn("Pending registration phone check failed (possible RLS issue):",Qt),Ut)throw new Error("This phone number is already used in another pending registration. Please wait or contact an admin.");if((h==="Board"||h==="Highboard")&&y){const{data:ot,error:Yt}=await re.from("profiles").select("id").eq("tier",h).eq("position",y).limit(1);if(Yt&&console.warn("Position uniqueness check failed (possible RLS issue):",Yt),ot&&ot.length>0)throw new Error(`Someone already holds the position of ${y}. Only one person can hold this position.`);const{data:Ma,error:Gt}=await re.from("pending_registrations").select("id").eq("tier",h).eq("position",y).eq("status","pending").maybeSingle();if(Gt&&console.warn("Pending position uniqueness check failed (possible RLS issue):",Gt),Ma)throw new Error(`Someone has already applied for the position of ${y} and is pending approval.`)}if(h==="Mentor"){const{data:ot,error:Yt}=await re.from("profiles").select("id").eq("tier","Mentor").limit(1);if(Yt&&console.warn("Mentor uniqueness check failed (possible RLS issue):",Yt),ot&&ot.length>0)throw new Error("There can only be one Mentor in IEEE ECU SB, and someone already holds this role.");const{data:Ma,error:Gt}=await re.from("pending_registrations").select("id").eq("tier","Mentor").eq("status","pending").maybeSingle();if(Gt&&console.warn("Pending mentor uniqueness check failed (possible RLS issue):",Gt),Ma)throw new Error("Someone has already applied to be Mentor and is pending approval.")}const vr=`${E.trim()} ${M.trim()}`,_n=O.trim()||null;let wr=null;h==="Board"&&m==="Head"?wr=P3[y]||y:h==="Board"&&m==="Vice"?wr=q3[y]||null:h==="Member"&&(wr=k);const Ts=h==="Member"?k==="Technical"?N:null:h==="Mentor"?null:y,{data:ua,error:ut}=await re.auth.signUp({email:ve,password:ae,options:{data:{first_name:E.trim(),last_name:M.trim(),full_name:vr,gender:I,phone_number:Q.trim(),date_of_birth:J,faculty:le,level:ce,tier:h,position:Ts,team:wr,linkedin_url:_n,ref_user_id:s||null},emailRedirectTo:"https://ieeesbecu-bot.github.io/IEEE-ECU-SB-Website/login"}});if(ut)throw ut;const ht=ua.user?.id;if(!ht)throw new Error("User creation failed.");if(Array.isArray(ua.user?.identities)&&ua.user.identities.length===0)throw new Error("An account with this email already exists. Please log in or reset your password.");let Xa=null;if(F)try{const ot=F.name.split(".").pop(),Yt=`${ht}/avatar_${Date.now()}.${ot}`,{error:Ma}=await re.storage.from("avatars").upload(Yt,F,{upsert:!0});if(Ma)throw Ma;const{data:Gt}=re.storage.from("avatars").getPublicUrl(Yt);Xa=Gt.publicUrl}catch(ot){console.warn("Avatar upload failed:",ot),Le("Your account was created, but we couldn't upload your profile photo. You can add one later from your profile settings.")}const{data:As,error:Gi}=await re.from("pending_registrations").select("*").eq("id",ht).eq("status","pending").maybeSingle();if(Gi&&console.warn("Pending registration safety-net check failed (possible RLS issue):",Gi),As)throw new Error("This email is already pending approval. Please wait or contact an admin.");if(s){const{error:ot}=await re.from("notifications").insert({recipient_id:s,type:"registration_request",title:"New registration request",body:`${vr} wants to join and is waiting for your approval.`,data:{pending_id:ht},read:!1});ot&&console.warn("Failed to create notification:",ot)}const{error:kr}=await re.from("pending_registrations").insert({id:ht,ref_user_id:s||null,email:ve,first_name:E.trim(),last_name:M.trim(),full_name:vr,gender:I,phone_number:Q.trim(),date_of_birth:J,faculty:le,level:ce,tier:h,position:Ts,team:wr,avatar_url:Xa,linkedin_url:_n,created_at:new Date().toISOString()});if(kr){if(console.error("pending_registrations insert failed:",kr),kr.code==="23505"){const ot=`${kr.details||""} ${kr.message||""}`.toLowerCase();throw ot.includes("phone")?new Error("This phone number is already used in another pending registration. Please wait or contact an admin."):ot.includes("email")?new Error("This email is already pending approval. Please wait or contact an admin."):ot.includes("ref_user_id")?new Error("This registration link has already been used for a pending request. Please contact an admin."):new Error("Some of your details match an existing pending registration. Please wait or contact an admin.")}throw new Error(kr.message||"Could not submit your registration. Please try again.")}try{await re.functions.invoke("send-email",{body:{type:"registration_received",name:vr,email:ve,tier:h,position:h==="Member"||h==="Mentor"?"":y}})}catch(ot){console.warn("Registration received email failed:",ot)}q(!0)}catch(we){console.error("Sign up failed:",we),Le(we?.message||"Something went wrong while creating your account. Please try again in a moment.");try{await re.auth.signOut()}catch(De){console.warn("Post-signup sign-out failed:",De)}}finally{da(!1)}},Je=async()=>{try{await re.auth.signOut()}catch(K){console.warn("Post-signup sign-out failed:",K)}q(!1),r("/login")},Jr=jn(),ja=le?Jg[le]||[]:[],dt="w-full pl-9 pr-3 py-2.5 text-base sm:text-sm rounded-xl border border-[rgba(2,50,96,0.15)] dark:border-white/15 focus:outline-none",It="lg-select w-full appearance-none pl-9 pr-9 py-2.5 text-base sm:text-sm rounded-xl border border-[rgba(2,50,96,0.15)] dark:border-white/15 focus:outline-none cursor-pointer",Xe="block text-xs font-semibold text-[#023260] dark:text-white mb-1.5";return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
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

        /* ── Site-wide smooth theme transition ──────────────────────────
           Every element inside the scene fades its colors/background/
           border/shadow smoothly whenever the "dark" class flips, instead
           of the site "snapping" between themes. More specific rules
           further down declare their own "transition" shorthand and
           simply win over this default since they're defined later with
           equal specificity — so hover/press effects keep their own
           timing. */
        .lg-scene, .lg-scene * {
          transition-property: background-color, border-color, color, box-shadow, opacity, fill, stroke;
          transition-duration: 0.5s;
          transition-timing-function: ease;
        }

        /* ── Scene background — same recipe as Login (soft blue+red radials
           over a light gradient, deepening to navy/black in dark mode),
           so both auth pages share one visual identity. ── */
        .lg-scene {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(ellipse 800px 600px at 8% 0%, rgba(74,158,255,0.10), transparent 60%),
            radial-gradient(ellipse 750px 550px at 92% 15%, rgba(217,37,37,0.06), transparent 60%),
            linear-gradient(to bottom, #f5f8fb, #d3dde8);
          transition: background 0.5s ease, background-color 0.5s ease;
        }
        .dark .lg-scene {
          background:
            radial-gradient(ellipse 950px 700px at 8% 5%, rgba(13,90,167,0.24), transparent 60%),
            radial-gradient(ellipse 850px 650px at 92% 25%, rgba(217,37,37,0.18), transparent 60%),
            radial-gradient(ellipse 1000px 800px at 50% 100%, rgba(13,90,167,0.16), transparent 65%),
            linear-gradient(to bottom, #001233, #00040c 65%, #00040c);
        }

        /* Scattered watermark field — same drifting device and blue/red
           tint split as Login. */
        .lg-char {
          position: absolute;
          font-weight: 700;
          line-height: 1;
          pointer-events: none;
          user-select: none;
          z-index: 0;
          animation: lgDrift 14s ease-in-out infinite;
          transition: color 0.4s ease, opacity 0.4s ease;
        }
        .dark .lg-char-blue {
          color: #4a9eff !important;
          opacity: 0.2;
          filter: drop-shadow(0 0 22px rgba(74,158,255,0.3));
        }
        .dark .lg-char-red {
          color: #ff5b5b !important;
          opacity: 0.18;
          filter: drop-shadow(0 0 22px rgba(217,37,37,0.32));
        }

        .lg-panel {
          animation: lgFadeUp 1s cubic-bezier(0.19,1,0.22,1) both;
        }

        /* ── Eyebrow label + divider — identical device to Login's
           lg-label/lg-divider, so the form header reads the same way
           across both pages. ── */
        .lg-label {
          font-size: 11px;
          letter-spacing: 0.45em;
          color: #023260;
          text-transform: uppercase;
          margin-bottom: 4px;
          transition: color 0.4s ease;
        }
        .dark .lg-label { color: #9fc4f0; }
        .lg-divider { display: flex; align-items: center; justify-content: center; gap: 10px; margin-top: 8px; margin-bottom: 4px; }
        .lg-divider-line { width: 32px; height: 1px; background: rgba(217,37,37,0.45); }
        .lg-divider-diamond { color: rgba(217,37,37,0.55); font-size: 10px; }

        /* ── Form card — the exact same glass recipe as Login's
           .login-form-card, so both auth pages read as one component
           family. ── */
        .login-form-card {
          background: linear-gradient(to bottom, rgba(245, 248, 251, 0.55), rgba(211, 221, 232, 0.55));
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(2, 50, 96, 0.12);
          border-radius: 20px;
          box-shadow: 0 4px 18px rgba(2, 50, 96, 0.1);
          transition: background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
        }
        .dark .login-form-card {
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.03));
          border-color: rgba(255, 255, 255, 0.12);
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.4), 0 0 40px rgba(13,90,167,0.12);
        }

        .lg-field {
          position: relative;
        }
        .lg-field input,
        .lg-select {
          border: 1px solid rgba(2,50,96,0.15);
          transition: border-color 0.35s ease, box-shadow 0.35s ease, background 0.35s ease, color 0.35s ease;
          background: rgba(255,255,255,0.6);
          color: #023260;
        }
        .lg-field input::placeholder { color: rgba(2, 50, 96, 0.35); }
        .lg-field input:focus,
        .lg-select:focus {
          outline: none;
          background: rgba(255,255,255,0.8);
          border-color: #023260 !important;
          box-shadow: 0 0 0 3px rgba(2,50,96,0.1);
        }
        .lg-select:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .lg-field svg { transition: color 0.35s ease; }
        .lg-field:focus-within svg.lg-icon { color: #023260; }

        .dark .lg-field input,
        .dark .lg-select {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255, 255, 255, 0.16);
          color: #f5f8fb;
        }
        .dark .lg-field input::placeholder { color: rgba(255,255,255,0.35); }
        .dark .lg-field input:focus,
        .dark .lg-select:focus {
          background: rgba(255,255,255,0.09);
          border-color: #4a9eff !important;
          box-shadow: 0 0 0 3px rgba(74,158,255,0.15);
        }
        .dark .lg-field:focus-within svg.lg-icon { color: #4a9eff; }
        .dark .lg-select option { background: #001233; color: #f5f8fb; }

        /* ── Primary button — the exact red-gradient CTA used on Login,
           so "Sign Up" reads as the same action as "Login". ── */
        .lg-submit {
          position: relative;
          overflow: hidden;
          background: linear-gradient(115deg, #7a1220, #D92525 45%, #ff6b4a 75%, #D92525);
          background-size: 250% 250%;
          background-position: 0% 50%;
          box-shadow: 0 4px 14px rgba(217,37,37,0.3);
          transition: background-position 0.6s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }
        .lg-submit::before {
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
        .lg-submit:hover {
          background-position: 100% 50%;
          transform: translateY(-1px) scale(1.02);
          box-shadow: 0 8px 20px rgba(217,37,37,0.4);
        }
        .lg-submit:hover::before { left: 125%; }
        .lg-submit:active { transform: translateY(0) scale(0.98); }
        .lg-submit:disabled {
          background: rgba(2, 50, 96, 0.2);
          color: rgba(2, 50, 96, 0.4);
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
          opacity: 1;
        }
        .dark .lg-submit { box-shadow: 0 3px 12px rgba(217,37,37,0.28); }
        .dark .lg-submit:hover { box-shadow: 0 5px 16px rgba(217,37,37,0.34); }
        .dark .lg-submit:disabled {
          background: rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.3);
          box-shadow: none;
        }
        .lg-submit .lg-arrow { transition: transform 0.4s ease; }
        .lg-submit:hover .lg-arrow { transform: translateX(4px); }

        .lg-spinner {
          width: 16px; height: 16px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.35);
          border-top-color: #fff;
          animation: lgSpin 0.7s linear infinite;
        }

        /* Board-type / gender toggle, restyled to match the glass field language */
        .lg-toggle-btn {
          transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
          background: rgba(255,255,255,0.5);
        }
        .lg-toggle-btn:hover { transform: translateY(-1px); }
        .lg-toggle-btn.active {
          background: #023260;
          color: #fff;
          border-color: #023260;
        }
        .dark .lg-toggle-btn {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.16) !important;
          color: #f5f8fb;
        }
        .dark .lg-toggle-btn.active {
          background: #4a9eff;
          border-color: #4a9eff;
          color: #001233;
        }

        /* Avatar picker, restyled to match the glass card */
        .signup-avatar-wrap {
          position: relative;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          border: 2px solid rgba(2,50,96,0.2);
          background: rgba(255,255,255,0.5);
          box-shadow: 0 6px 18px rgba(2,50,96,0.12);
          transition: border-color 0.4s ease, background 0.4s ease;
        }
        .dark .signup-avatar-wrap {
          border-color: rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.05);
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
        .dark .signup-avatar-placeholder { color: #f5f8fb; }
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
          .lg-char, .login-form-card, .lg-panel,
          .lg-submit::before, .lg-scene, .lg-scene * {
            animation: none !important;
            transition: none !important;
          }
        }

        /* ── Logo crossfade — both logos occupy the same grid cell, so the
           cell auto-sizes to the larger (white) logo and neither image
           collapses to zero width the way position:absolute children can. */
        .su-logo-wrap {
          display: grid;
          place-items: center;
        }
        .su-logo-wrap img {
          grid-area: 1 / 1;
        }
      `}),l.jsxs("div",{className:"lg-scene relative px-4 sm:px-6 py-6",children:[l.jsx("button",{type:"button",onClick:d,"aria-label":"Toggle dark mode",title:i?"Switch to light mode":"Switch to dark mode",className:"fixed top-4 right-4 z-30 flex items-center justify-center w-10 h-10 rounded-full text-[#023260] dark:text-white bg-white/50 dark:bg-white/10 border border-[rgba(2,50,96,0.15)] dark:border-white/15 backdrop-blur-md hover:bg-white/70 dark:hover:bg-white/15 transition",children:i?l.jsx(Bu,{size:18}):l.jsx(Uu,{size:18})}),l.jsx("span",{className:"lg-char lg-char-blue",style:{fontSize:210,color:"rgba(2,50,96,0.05)",top:"-4%",left:"-5%",animationDelay:"0s"},children:"注"}),l.jsx("span",{className:"lg-char lg-char-blue",style:{fontSize:170,color:"rgba(2,50,96,0.05)",top:"58%",left:"6%",animationDelay:"2.4s"},children:"册"}),l.jsx("span",{className:"lg-char lg-char-red",style:{fontSize:130,color:"rgba(217,37,37,0.05)",top:"8%",right:"8%",animationDelay:"1.1s"},children:"加"}),l.jsx("span",{className:"lg-char lg-char-red",style:{fontSize:190,color:"rgba(217,37,37,0.045)",bottom:"-6%",right:"-4%",animationDelay:"3.2s"},children:"入"}),l.jsx("span",{className:"lg-char lg-char-blue hidden md:block",style:{fontSize:90,color:"rgba(2,50,96,0.06)",bottom:"10%",left:"38%",animationDelay:"0.6s"},children:"团"}),l.jsx("div",{className:"lg-panel relative z-10 w-full flex justify-center",children:l.jsxs("div",{className:"login-form-card px-5 sm:px-8 md:px-10 py-6 sm:py-8 w-full max-w-2xl sm:max-w-4xl lg:max-w-6xl",children:[l.jsxs("div",{className:"flex flex-col items-center",children:[l.jsxs("div",{className:"su-logo-wrap mb-2",children:[l.jsx("img",{src:vl,alt:"IEEE Logo",className:"h-16 drop-shadow-sm",style:{opacity:i?0:1}}),l.jsx("img",{src:wl,alt:"IEEE Logo",className:"h-24 drop-shadow-sm",style:{opacity:i?1:0}})]}),l.jsx("p",{className:"lg-label",children:"注册"}),l.jsx("h2",{className:"text-2xl md:text-3xl font-semibold text-[#023260] dark:text-white drop-shadow-sm",children:"Sign Up"}),l.jsxs("div",{className:"lg-divider",children:[l.jsx("div",{className:"lg-divider-line"}),l.jsx("span",{className:"lg-divider-diamond",children:"❖"}),l.jsx("div",{className:"lg-divider-line"})]}),l.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-2 text-center",children:"Fill in your details and choose your role"})]}),l.jsxs("form",{noValidate:!0,className:"flex flex-col gap-4",onSubmit:Va,children:[l.jsxs("div",{className:"flex flex-col items-center justify-center gap-1.5 text-center",children:[l.jsxs("div",{className:"signup-avatar-wrap",children:[ke?l.jsx("img",{src:ke,alt:"Profile preview"}):l.jsx("div",{className:"signup-avatar-placeholder",children:l.jsx(yl,{size:18,strokeWidth:1.5})}),l.jsx("button",{type:"button",className:"signup-avatar-overlay",onClick:()=>$e.current?.click(),children:l.jsx(yl,{size:14})}),l.jsx("input",{ref:$e,type:"file",accept:"image/*",className:"hidden",onChange:Qe})]}),l.jsx("button",{type:"button",onClick:()=>$e.current?.click(),className:"text-[11px] text-[#023260]/60 dark:text-white/60 hover:text-[#D92525] transition text-center",children:ke?"Change photo":"Add profile photo (optional)"})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-3",children:[l.jsxs("div",{className:"min-w-0",children:[l.jsxs("label",{className:Xe,children:["Tier ",l.jsx("span",{className:"text-[#D92525]",children:"*"})]}),l.jsxs("div",{className:"lg-field relative",children:[l.jsxs("select",{value:h,onChange:K=>Da(K.target.value),className:`${It} pl-3`,children:[l.jsx("option",{value:"",children:"Select your tier…"}),l.jsx("option",{value:"Mentor",children:"Mentor"}),l.jsx("option",{value:"Highboard",children:"Highboard"}),l.jsx("option",{value:"Board",children:"Board"}),l.jsx("option",{value:"Member",children:"Member"})]}),l.jsx(bn,{size:16,className:"pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#023260]/50 dark:text-white/50"})]})]}),h==="Board"&&l.jsxs("div",{className:"min-w-0",children:[l.jsxs("label",{className:Xe,children:["Board type ",l.jsx("span",{className:"text-[#D92525]",children:"*"})]}),l.jsx("div",{className:"flex gap-2",children:["Head","Vice"].map(K=>l.jsx("button",{type:"button",onClick:()=>xt(K),className:`lg-toggle-btn flex-1 py-2 rounded-xl text-sm font-medium border ${m===K?"active":"border-[rgba(2,50,96,0.15)] dark:border-white/15 text-[#023260] dark:text-white"}`,children:K},K))})]}),Jr.length>0&&l.jsxs("div",{className:"min-w-0",children:[l.jsxs("label",{className:Xe,children:[h==="Board"&&m==="Head"?"Committee":"Position"," ",l.jsx("span",{className:"text-[#D92525]",children:"*"})]}),l.jsxs("div",{className:"lg-field relative",children:[l.jsxs("select",{value:y,onChange:K=>x(K.target.value),className:`${It} pl-3`,children:[l.jsx("option",{value:"",children:"Select…"}),Jr.map(K=>l.jsx("option",{value:K,children:h==="Board"&&m==="Head"?`Head ${K}`:K},K))]}),l.jsx(bn,{size:16,className:"pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#023260]/50 dark:text-white/50"})]})]}),h==="Member"&&l.jsxs("div",{className:"min-w-0",children:[l.jsxs("label",{className:Xe,children:["Team ",l.jsx("span",{className:"text-[#D92525]",children:"*"})]}),l.jsxs("div",{className:"lg-field relative",children:[l.jsxs("select",{value:k,onChange:K=>$t(K.target.value),className:`${It} pl-3`,children:[l.jsx("option",{value:"",children:"Select your team…"}),B3.map(K=>l.jsx("option",{value:K,children:K},K))]}),l.jsx(bn,{size:16,className:"pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#023260]/50 dark:text-white/50"})]})]}),h==="Member"&&k==="Technical"&&l.jsxs("div",{className:"min-w-0",children:[l.jsxs("label",{className:Xe,children:["Technical Sub-team ",l.jsx("span",{className:"text-[#D92525]",children:"*"})]}),l.jsxs("div",{className:"lg-field relative",children:[l.jsxs("select",{value:N,onChange:K=>C(K.target.value),className:`${It} pl-3`,children:[l.jsx("option",{value:"",children:"Select…"}),H3.map(K=>l.jsx("option",{value:K,children:K},K))]}),l.jsx(bn,{size:16,className:"pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#023260]/50 dark:text-white/50"})]})]}),l.jsxs("div",{className:"min-w-0",children:[l.jsxs("label",{className:Xe,children:["Gender ",l.jsx("span",{className:"text-[#D92525]",children:"*"})]}),l.jsx("div",{className:"flex gap-2",children:$3.map(K=>l.jsx("button",{type:"button",onClick:()=>X(K.value),className:`lg-toggle-btn flex-1 py-2 rounded-xl text-sm font-medium border ${I===K.value?"active":"border-[rgba(2,50,96,0.15)] dark:border-white/15 text-[#023260] dark:text-white"}`,children:K.label},K.value))})]}),l.jsxs("div",{className:"min-w-0",children:[l.jsxs("label",{className:Xe,children:["First Name ",l.jsx("span",{className:"text-[#D92525]",children:"*"})]}),l.jsxs("div",{className:"lg-field relative",children:[l.jsx(em,{size:16,className:"lg-icon absolute left-3 top-1/2 -translate-y-1/2 text-[#023260]/50 dark:text-white/50 z-10"}),l.jsx("input",{type:"text",placeholder:"First Name",value:E,onChange:K=>B(K.target.value),className:dt})]})]}),l.jsxs("div",{className:"min-w-0",children:[l.jsxs("label",{className:Xe,children:["Last Name ",l.jsx("span",{className:"text-[#D92525]",children:"*"})]}),l.jsxs("div",{className:"lg-field relative",children:[l.jsx(em,{size:16,className:"lg-icon absolute left-3 top-1/2 -translate-y-1/2 text-[#023260]/50 dark:text-white/50 z-10"}),l.jsx("input",{type:"text",placeholder:"Last Name",value:M,onChange:K=>T(K.target.value),className:dt})]})]}),l.jsxs("div",{className:"min-w-0",children:[l.jsxs("label",{className:Xe,children:["Date of Birth ",l.jsx("span",{className:"text-[#D92525]",children:"*"})]}),l.jsxs("div",{className:"lg-field relative",children:[l.jsx(yg,{size:16,className:"lg-icon absolute left-3 top-1/2 -translate-y-1/2 text-[#023260]/50 dark:text-white/50 z-10"}),l.jsx("input",{type:"date",value:J,onChange:K=>z(K.target.value),className:dt})]})]}),l.jsxs("div",{className:"min-w-0",children:[l.jsxs("label",{className:Xe,children:["Phone Number ",l.jsx("span",{className:"text-[#D92525]",children:"*"})]}),l.jsxs("div",{className:"lg-field relative",children:[l.jsx(kg,{size:16,className:"lg-icon absolute left-3 top-1/2 -translate-y-1/2 text-[#023260]/50 dark:text-white/50 z-10"}),l.jsx("input",{type:"tel",placeholder:"+20 1XX XXX XXXX",value:Q,onChange:K=>te(K.target.value),className:dt})]})]}),l.jsxs("div",{className:"min-w-0",children:[l.jsxs("label",{className:Xe,children:["Faculty ",l.jsx("span",{className:"text-[#D92525]",children:"*"})]}),l.jsxs("div",{className:"lg-field relative",children:[l.jsx(_v,{size:16,className:"lg-icon absolute left-3 top-1/2 -translate-y-1/2 text-[#023260]/50 dark:text-white/50 z-10"}),l.jsxs("select",{value:le,onChange:K=>jt(K.target.value),className:It,children:[l.jsx("option",{value:"",children:"Select Faculty..."}),D3.map(K=>l.jsx("option",{value:K,children:K},K))]}),l.jsx(bn,{size:16,className:"pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#023260]/50 dark:text-white/50"})]})]}),l.jsxs("div",{className:"min-w-0",children:[l.jsxs("label",{className:Xe,children:["Level ",l.jsx("span",{className:"text-[#D92525]",children:"*"})]}),l.jsxs("div",{className:"lg-field relative",children:[l.jsx(wg,{size:16,className:"lg-icon absolute left-3 top-1/2 -translate-y-1/2 text-[#023260]/50 dark:text-white/50 z-10"}),l.jsxs("select",{value:ce,onChange:K=>Se(K.target.value),disabled:!le,className:It,children:[l.jsx("option",{value:"",children:le?"Select Level...":"Select faculty first"}),ja.map(K=>l.jsx("option",{value:K,children:K},K))]}),l.jsx(bn,{size:16,className:"pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#023260]/50 dark:text-white/50"})]})]}),l.jsxs("div",{className:"min-w-0",children:[l.jsxs("label",{className:Xe,children:["Email ",l.jsx("span",{className:"text-[#D92525]",children:"*"})]}),l.jsxs("div",{className:"lg-field relative",children:[l.jsx(wn,{size:16,className:"lg-icon absolute left-3 top-1/2 -translate-y-1/2 text-[#023260]/50 dark:text-white/50 z-10"}),l.jsx("input",{type:"email",placeholder:"username@gmail.com",value:ve,onChange:K=>Me(K.target.value),className:dt})]})]}),l.jsxs("div",{className:"min-w-0",children:[l.jsx("label",{className:Xe,children:"LinkedIn (optional)"}),l.jsxs("div",{className:"lg-field relative",children:[l.jsx(Tl,{size:16,className:"lg-icon absolute left-3 top-1/2 -translate-y-1/2 text-[#023260]/50 dark:text-white/50 z-10"}),l.jsx("input",{type:"url",placeholder:"https://linkedin.com/in/yourname",value:O,onChange:K=>ee(K.target.value),className:dt})]})]}),l.jsxs("div",{className:"min-w-0",children:[l.jsxs("label",{className:Xe,children:["Password ",l.jsx("span",{className:"text-[#D92525]",children:"*"})]}),l.jsxs("div",{className:"lg-field relative",children:[l.jsx(Kr,{size:16,className:"lg-icon absolute left-3 top-1/2 -translate-y-1/2 text-[#023260]/50 dark:text-white/50 z-10"}),l.jsx("input",{type:St?"text":"password",placeholder:"8+ chars, incl. A-Z, a-z, 0-9, symbol",value:ae,onChange:K=>xe(K.target.value),className:`${dt} pr-9`}),l.jsx("button",{type:"button",tabIndex:-1,onClick:()=>Cs(K=>!K),className:"absolute right-3 top-1/2 -translate-y-1/2 text-[#023260]/40 dark:text-white/40 hover:text-[#023260] dark:hover:text-white transition z-10",children:St?l.jsx(Ri,{size:16}):l.jsx(zi,{size:16})})]}),ae&&!Ym(ae)&&l.jsx("p",{className:"text-xs text-[#D92525] mt-1",children:"Needs 8+ characters with uppercase, lowercase, a number, and a symbol."})]}),l.jsxs("div",{className:"min-w-0",children:[l.jsxs("label",{className:Xe,children:["Confirm Password ",l.jsx("span",{className:"text-[#D92525]",children:"*"})]}),l.jsxs("div",{className:"lg-field relative",children:[l.jsx(Kr,{size:16,className:"lg-icon absolute left-3 top-1/2 -translate-y-1/2 text-[#023260]/50 dark:text-white/50 z-10"}),l.jsx("input",{type:Fr?"text":"password",placeholder:"Repeat password",value:Z,onChange:K=>_(K.target.value),className:`${dt} pr-9 ${Z&&Z!==ae?"border-[#D92525]/40 focus:ring-[#D92525]/40":""}`}),l.jsx("button",{type:"button",tabIndex:-1,onClick:()=>yr(K=>!K),className:"absolute right-3 top-1/2 -translate-y-1/2 text-[#023260]/40 dark:text-white/40 hover:text-[#023260] dark:hover:text-white transition z-10",children:Fr?l.jsx(Ri,{size:16}):l.jsx(zi,{size:16})})]}),Z&&Z!==ae&&l.jsx("p",{className:"text-xs text-[#D92525] mt-1",children:"Passwords do not match"})]})]}),Ga&&l.jsx("div",{className:"text-xs text-[#023260] dark:text-white bg-white/40 dark:bg-white/5 border border-[#D92525]/25 dark:border-[#ff5b5b]/40 rounded-lg px-3 py-2 font-semibold text-center",children:Ga}),l.jsx("div",{children:l.jsx("button",{type:"submit",disabled:Sa,className:"lg-submit w-full text-white font-semibold py-2.5 rounded-full transition-colors duration-300 disabled:opacity-60 flex items-center justify-center gap-2 text-sm",children:Sa?l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"lg-spinner"}),l.jsx("span",{children:"Creating Account…"})]}):l.jsxs(l.Fragment,{children:[l.jsx("span",{children:"Sign Up"}),l.jsx(Ii,{size:16,className:"lg-arrow"})]})})})]}),l.jsxs("p",{className:"text-sm font-semibold text-gray-600 dark:text-gray-300 text-center mt-3",children:["Already have an account?"," ",l.jsx(tt,{to:"/login",className:"text-[#023260] dark:text-white font-semibold hover:text-[#D92525] hover:underline transition",children:"Login"})]})]})})]}),Ne&&vt&&l.jsx("div",{className:"fixed inset-0 z-[200] flex items-center justify-center bg-black/70 p-4",children:l.jsxs("div",{className:"w-full max-w-lg overflow-hidden rounded-2xl bg-white dark:bg-[#00040c] shadow-2xl",children:[l.jsxs("div",{className:"flex items-center justify-between border-b dark:border-white/10 px-5 py-4",children:[l.jsxs("div",{children:[l.jsx("h3",{className:"text-lg font-semibold text-[#023260] dark:text-white",children:"Edit Profile Photo"}),l.jsx("p",{className:"mt-0.5 text-xs text-gray-500 dark:text-gray-400",children:"Move and zoom your photo to choose the perfect crop"})]}),l.jsx("button",{type:"button",onClick:Sn,className:"flex h-8 w-8 items-center justify-center rounded-full text-xl text-gray-400 transition hover:bg-gray-100 dark:hover:bg-white/10 hover:text-gray-700 dark:hover:text-white",children:"×"})]}),l.jsx("div",{className:"relative h-[360px] w-full bg-black",children:l.jsx(Fg,{image:vt,crop:ka,zoom:se,aspect:1,cropShape:"round",showGrid:!1,onCropChange:P,onZoomChange:ue,onCropComplete:kt})}),l.jsxs("div",{className:"px-5 py-4",children:[l.jsxs("div",{className:"mb-4",children:[l.jsxs("div",{className:"mb-2 flex items-center justify-between text-xs font-semibold text-[#023260] dark:text-white",children:[l.jsx("span",{children:"Zoom"}),l.jsxs("span",{children:[se.toFixed(1),"×"]})]}),l.jsx("input",{type:"range",min:1,max:3,step:.1,value:se,onChange:K=>ue(Number(K.target.value)),className:"w-full accent-[#023260]"})]}),l.jsxs("div",{className:"flex gap-3",children:[l.jsx("button",{type:"button",onClick:Sn,className:"flex-1 rounded-xl border border-[#023260]/15 dark:border-white/15 py-2.5 text-sm font-semibold text-[#023260] dark:text-white transition hover:bg-gray-50 dark:hover:bg-white/5",children:"Cancel"}),l.jsx("button",{type:"button",onClick:kn,className:"flex-1 rounded-xl bg-[#023260] py-2.5 text-sm font-semibold text-white transition hover:bg-[#0d5aa7]",children:"Save Photo"})]})]})]})}),l.jsx(O3,{open:A,onClose:Je})]})}const G3=`
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
    transition: background 0.5s ease, background-color 0.5s ease, color 0.5s ease;
  }
  .dark .cu-root {
    background:
      radial-gradient(ellipse 950px 700px at 8% 5%, rgba(13,90,167,0.24), transparent 60%),
      radial-gradient(ellipse 850px 650px at 92% 25%, rgba(217,37,37,0.18), transparent 60%),
      radial-gradient(ellipse 1000px 800px at 50% 100%, rgba(13,90,167,0.16), transparent 65%),
      linear-gradient(to bottom, #001233, #00040c 65%, #00040c);
  }

  /* ── Page-open entrance — the whole page fades in the instant it mounts,
     the same "just arrived" feel as About.jsx, before the staggered
     content reveals (cu-reveal / cu-reveal-delay below) play on top of it. ── */
  @keyframes cuPageFade {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  .cu-page-fade {
    animation: cuPageFade 0.5s ease both;
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
    z-index: 0;
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

  /* ── Falling petals ──
     Fixed to the viewport so they keep drifting down in view the whole
     time you scroll, instead of only falling past once near the top. */
  .cu-petals-fixed {
    position: fixed;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 30;
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

  /* ── Phone choice popover ── */
  .cu-phone-wrap { position: relative; }
  .cu-phone-trigger {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    text-align: left;
    font: inherit;
    color: inherit;
  }
  .cu-phone-menu {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    min-width: 180px;
    background: rgba(245, 248, 251, 0.98);
    border: 1px solid rgba(2, 50, 96, 0.15);
    border-radius: 12px;
    box-shadow: 0 10px 28px rgba(2, 50, 96, 0.18);
    padding: 6px;
    z-index: 40;
    animation: cuMenuPop 0.16s ease both;
  }
  .dark .cu-phone-menu {
    background: rgba(10, 20, 40, 0.98);
    border-color: rgba(255, 255, 255, 0.14);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.5);
  }
  @keyframes cuMenuPop {
    from { opacity: 0; transform: translateY(-4px) scale(0.97); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }
  .cu-phone-option {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 9px 10px;
    border-radius: 8px;
    text-decoration: none;
    color: #023260;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.02em;
    transition: background 0.15s ease, color 0.15s ease;
  }
  .cu-phone-option:hover {
    background: rgba(217, 37, 37, 0.1);
    color: #D92525;
  }
  .dark .cu-phone-option { color: #f5f8fb; }
  .dark .cu-phone-option:hover {
    background: rgba(217, 37, 37, 0.18);
    color: #ff8a8a;
  }
  .cu-phone-option-icon {
    width: 26px; height: 26px;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .cu-phone-option-icon.wa { background: rgba(37, 211, 102, 0.16); color: #25D366; }
  .cu-phone-option-icon.call { background: rgba(2, 50, 96, 0.1); color: #023260; }
  .dark .cu-phone-option-icon.call { color: #9fc4f0; background: rgba(255,255,255,0.1); }

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

  @media (prefers-reduced-motion: reduce) {
    .cu-page-fade, .cu-reveal, .cu-reveal-delay, .cu-petal, .cu-bg-char {
      animation: none !important;
    }
  }
`,V3=[{left:"8%",color:"#D92525",duration:"9s",delay:"0s"},{left:"25%",color:"#023260",duration:"11s",delay:"2s"},{left:"50%",color:"#D92525",duration:"8s",delay:"4.5s"},{left:"72%",color:"#023260",duration:"13s",delay:"1s"},{left:"90%",color:"#D92525",duration:"10s",delay:"3s"}],X3=[{char:"联",top:"auto",bottom:"-9%",left:"-7%",size:260,tint:"blue",rotate:-6,delay:"0s"},{char:"系",top:"auto",bottom:"-9%",right:"-7%",size:260,tint:"red",rotate:8,delay:"1.6s"},{char:"我",top:"4%",right:"3%",size:120,tint:"red",rotate:-4,delay:"2.1s"},{char:"们",top:"5%",left:"4%",size:120,tint:"blue",rotate:6,delay:"0.6s"},{char:"话",top:"38%",left:"-5%",size:85,tint:"blue",rotate:3,delay:"3.2s",hideMobile:!0},{char:"邮",top:"40%",right:"-5%",size:85,tint:"red",rotate:-6,delay:"1.8s",hideMobile:!0},{char:"址",top:"62%",left:"-5%",size:80,tint:"red",rotate:-4,delay:"2.5s",hideMobile:!0},{char:"信",top:"60%",right:"-5%",size:80,tint:"blue",rotate:5,delay:"1.0s",hideMobile:!0},{char:"谈",top:"7%",left:"20%",size:65,tint:"red",rotate:5,delay:"2.6s",hideMobile:!0},{char:"传",top:"8%",right:"20%",size:65,tint:"blue",rotate:-5,delay:"3.9s",hideMobile:!0},{char:"达",top:"auto",bottom:"8%",left:"22%",size:60,tint:"blue",rotate:-6,delay:"0.5s",hideMobile:!0},{char:"络",top:"auto",bottom:"7%",right:"22%",size:60,tint:"red",rotate:6,delay:"3.6s",hideMobile:!0}],K3="https://www.google.com/maps/search/?api=1&query=Heliopolis+Gesr+El-Suez+st+After+Tgneed+Bridge",F3="+20 12 26459057",J3="tel:+201226459057",W3="https://wa.me/201226459057",Z3="mailto:ieeesb.ecu@gmail.com";function Q3(){const r=v.useRef(),[a,s]=v.useState(""),[i,c]=v.useState(!1),[d,h]=v.useState(!1),p=v.useRef(null);v.useEffect(()=>{if(!d)return;const g=x=>{p.current&&!p.current.contains(x.target)&&h(!1)},y=x=>{x.key==="Escape"&&h(!1)};return document.addEventListener("mousedown",g),document.addEventListener("keydown",y),()=>{document.removeEventListener("mousedown",g),document.removeEventListener("keydown",y)}},[d]);const m=async g=>{g.preventDefault(),c(!0),s("");const y=r.current.user_name.value.trim(),x=r.current.user_email.value.trim(),k=r.current.message.value.trim();try{const{error:S}=await re.from("contact_messages").insert({sender_name:y,sender_email:x,message:k,replied:!1});if(S)throw S;try{await re.functions.invoke("send-email",{body:{type:"contact_admin_notify",name:y,email:x,message:k}})}catch(N){console.warn("Admin notify email failed:",N)}try{await re.functions.invoke("send-email",{body:{type:"auto_reply",name:y,email:x,message:k}})}catch(N){console.warn("Auto-reply email failed:",N)}s("success"),r.current.reset(),setTimeout(()=>s(""),5e3)}catch(S){console.error("Contact form submission failed:",S),s("error")}finally{c(!1)}};return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:G3}),l.jsxs("div",{className:"cu-root cu-page-fade relative min-h-screen w-full flex items-center justify-center px-6 py-6 lg:py-0 overflow-hidden transition-colors duration-500",children:[X3.map((g,y)=>{const x={fontSize:g.size,"--cu-rot":`${g.rotate}deg`,transform:`rotate(${g.rotate}deg)`,animationDelay:g.delay,color:g.tint==="blue"?"rgba(2,50,96,0.05)":"rgba(217,37,37,0.06)"};return g.top!==void 0&&(x.top=g.top),g.bottom!==void 0&&(x.bottom=g.bottom),g.left!==void 0&&(x.left=g.left),g.right!==void 0&&(x.right=g.right),l.jsx("span",{className:`cu-bg-char cu-bg-char-${g.tint} ${g.hideMobile?"hidden md:block":""}`,style:x,children:g.char},y)}),l.jsx("div",{className:"cu-petals-fixed",children:V3.map((g,y)=>l.jsx("div",{className:"cu-petal",style:{left:g.left,background:g.color,animationDuration:g.duration,animationDelay:g.delay}},y))}),l.jsxs("div",{className:"relative z-10 max-w-6xl w-full flex flex-col justify-center h-full",children:[l.jsxs("div",{className:"text-center mb-3 mt-6 cu-reveal",children:[l.jsx("p",{className:"cu-label",children:"联系我们"}),l.jsxs("h1",{className:"text-3xl md:text-3xl font-extrabold text-[#023260] dark:text-white",children:["Contact ",l.jsx("span",{style:{color:"#D92525"},children:"Us."})]}),l.jsxs("div",{className:"cu-divider",children:[l.jsx("div",{className:"cu-divider-line"}),l.jsx("span",{className:"cu-divider-diamond",children:"❖"}),l.jsx("div",{className:"cu-divider-line"})]})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 items-center",children:[l.jsx("div",{className:"cu-reveal flex flex-col justify-center items-center md:items-start md:pl-10 space-y-1 md:space-y-1",children:l.jsxs("div",{className:"space-y-3 md:space-y-3 md:ml-1",children:[l.jsxs("a",{href:K3,target:"_blank",rel:"noopener noreferrer",className:"cu-contact-link",children:[l.jsx("div",{className:"cu-icon-circle",children:l.jsx(Yv,{size:13,className:"text-[#023260] dark:text-[#9fc4f0]"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-[#023260] dark:text-white text-sm font-bold uppercase tracking-wide transition-colors",children:"Address"}),l.jsxs("p",{className:"text-[#023260]/65 dark:text-white/65 text-xs md:text-base font-light",children:["Heliopolis, Gesr El-Suez st.",l.jsx("br",{}),"After Tgneed Bridge."]})]})]}),l.jsxs("div",{className:"cu-phone-wrap",ref:p,children:[l.jsxs("button",{type:"button",className:"cu-contact-link cu-phone-trigger","aria-haspopup":"true","aria-expanded":d,onClick:()=>h(g=>!g),children:[l.jsx("div",{className:"cu-icon-circle",children:l.jsx(kg,{size:13,className:"text-[#023260] dark:text-[#9fc4f0]"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-[#023260] dark:text-white text-sm font-bold uppercase tracking-wide transition-colors",children:"Phone"}),l.jsx("p",{className:"text-[#023260]/65 dark:text-white/65 text-xs md:text-base font-light",children:F3})]})]}),d&&l.jsxs("div",{className:"cu-phone-menu",role:"menu",children:[l.jsxs("a",{href:J3,role:"menuitem",className:"cu-phone-option",onClick:()=>h(!1),children:[l.jsx("span",{className:"cu-phone-option-icon call",children:l.jsx(a1,{size:14})}),"Call"]}),l.jsxs("a",{href:W3,target:"_blank",rel:"noopener noreferrer",role:"menuitem",className:"cu-phone-option",onClick:()=>h(!1),children:[l.jsx("span",{className:"cu-phone-option-icon wa",children:l.jsx(Jv,{size:14})}),"WhatsApp"]})]})]}),l.jsxs("a",{href:Z3,className:"cu-contact-link",children:[l.jsx("div",{className:"cu-icon-circle",children:l.jsx(wn,{size:13,className:"text-[#023260] dark:text-[#9fc4f0]"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-[#023260] dark:text-white text-sm font-bold uppercase tracking-wide transition-colors",children:"Email"}),l.jsx("p",{className:"text-[#023260]/65 dark:text-white/65 text-xs md:text-base font-light",children:"ieeesb.ecu@gmail.com"})]})]})]})}),l.jsxs("div",{className:"cu-form-card cu-reveal-delay p-5 md:px-6 md:py-4 max-w-lg mx-auto md:mx-0 w-full",children:[l.jsx("p",{className:"cu-label",style:{marginBottom:2},children:"发送消息"}),l.jsx("h2",{className:"cu-form-title text-xl font-bold mb-3",children:"Send Message"}),l.jsxs("form",{ref:r,onSubmit:m,className:"space-y-4",children:[l.jsx("div",{className:"relative cu-field-border",children:l.jsx("input",{type:"text",name:"user_name",placeholder:"Full Name",required:!0,className:"cu-input"})}),l.jsx("div",{className:"relative cu-field-border",children:l.jsx("input",{type:"email",name:"user_email",placeholder:"Email",required:!0,className:"cu-input"})}),l.jsx("div",{className:"relative cu-field-border",children:l.jsx("textarea",{name:"message",placeholder:"Type your Message...",rows:4,required:!0,className:"cu-input",style:{resize:"none"}})}),l.jsx("button",{type:"submit",disabled:i,className:"cu-btn w-full",children:i?"Sending...":"Send Message"}),a&&l.jsx("p",{className:"mt-3 text-center font-semibold text-sm",style:{color:a==="success"?"#1a7a45":"#D92525"},children:a==="success"?"✦  Message sent successfully!  ✦":"✦  Failed to send. Please try again.  ✦"})]})]})]})]})]})]})}function eS({open:r,onClose:a,onDeleted:s}){const[i,c]=v.useState(!1),[d,h]=v.useState("");if(!r)return null;const p=async()=>{c(!0),h("");try{const{data:{session:m}}=await re.auth.getSession(),{error:g}=await re.functions.invoke("delete-account",{headers:{Authorization:`Bearer ${m.access_token}`}});if(g)throw g;await re.auth.signOut(),s?.()}catch(m){h(m.message||"Failed to delete account. Please try again."),c(!1)}};return l.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4",onClick:a,children:l.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl animate-[fadeUp_0.2s_ease]",onClick:m=>m.stopPropagation(),children:[l.jsxs("div",{className:"flex items-start gap-3",children:[l.jsx("div",{className:"flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600",children:l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"})})}),l.jsxs("div",{children:[l.jsx("h3",{className:"font-serif text-lg text-gray-900",children:"Delete account?"}),l.jsx("p",{className:"mt-1 text-sm leading-relaxed text-gray-500",children:"This will permanently delete your profile, posts, and all associated data. This action cannot be undone."})]})]}),d&&l.jsx("p",{className:"mt-4 rounded-lg bg-red-50 px-3 py-2 text-xs text-red-600",children:d}),l.jsxs("div",{className:"mt-6 flex gap-3",children:[l.jsx("button",{onClick:a,disabled:i,className:"flex-1 rounded-lg bg-gray-100 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-200 disabled:opacity-50",children:"Cancel"}),l.jsx("button",{onClick:p,disabled:i,className:"flex-1 rounded-lg bg-red-600 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-red-300",children:i?"Deleting…":"Yes, delete"})]})]})})}const tS=(r="",a="")=>`${r.charAt(0)}${a.charAt(0)}`.toUpperCase()||"??",aS=["Technical","Media","PR","HR","Events"],rS=(r,a,s)=>!r&&!s?"—":r==="Highboard"?s||"Highboard":r==="Counselor"?"Branch Counselor":r==="Mentor"?"Mentor":r==="Board"?aS.includes(s)?`Head of ${a||s}`:s||`${a||"Board"} Member`:s||r||"—",Gm=r=>r?r.replace("_"," ").replace(/\b\w/g,a=>a.toUpperCase()):"—",Vm=r=>r?r.replace(/\b\w/g,a=>a.toUpperCase()):"—",Xm=r=>r?r.charAt(0).toUpperCase()+r.slice(1).toLowerCase():"—",Wg=r=>{const a=(r||"").trim();return a?/^https?:\/\//i.test(a)?a:`https://${a}`:""},nS=r=>/^https?:\/\/([a-z]{2,3}\.)?linkedin\.com\/.+/i.test(Wg(r)),Km={male:{primary:"#023260",primaryDark:"#012040",bgStart:"#f5f8fb",bgEnd:"#d3dde8",badgeBg:"#f0f4ff",badgeBorder:"#d6deff",focusRing:"rgba(2,50,96,0.08)",petalA:"#023260",petalB:"#3d6fa3",inputBg:"rgba(2, 50, 96, 0.025)",staticBorder:"rgba(2, 50, 96, 0.14)",inputBg:"rgba(255, 255, 255, 0.018)",inputBorder:"rgba(2, 50, 96, 0.20)",dividerColor:"rgba(2, 50, 96, 0.10)"},female:{primary:"#c34f83",primaryDark:"#9f315f",bgStart:"#f5f8fb",bgEnd:"#d3dde8",badgeBg:"rgba(255, 235, 244, 0.72)",badgeBorder:"rgba(195, 79, 131, 0.28)",focusRing:"rgba(195, 79, 131, 0.14)",petalA:"#d982a5",petalB:"#c34f83",staticBg:"rgba(195, 79, 131, 0.035)",staticBorder:"rgba(195, 79, 131, 0.14)",inputBg:"rgba(195, 79, 131, 0.025)",inputBorder:"rgba(195, 79, 131, 0.20)",dividerColor:"rgba(195, 79, 131, 0.10)"}},sS=r=>Km[(r||"").toLowerCase()]||Km.male,iS=[{left:"8%",tone:"A",duration:"9s",delay:"0s"},{left:"25%",tone:"B",duration:"11s",delay:"2s"},{left:"50%",tone:"A",duration:"8s",delay:"4.5s"},{left:"72%",tone:"B",duration:"13s",delay:"1s"},{left:"90%",tone:"A",duration:"10s",delay:"3s"}],oS=[{char:"福",top:"4%",left:"3%",size:170,rotate:-10,tint:"blue",delay:"0s"},{char:"喜",top:"70%",left:"1%",size:130,rotate:8,tint:"red",delay:"1.5s"},{char:"龍",top:"10%",left:"86%",size:200,rotate:12,tint:"blue",delay:"3s"},{char:"鳳",top:"62%",left:"89%",size:160,rotate:-14,tint:"red",delay:"0.7s"},{char:"和",top:"36%",left:"45%",size:240,rotate:5,tint:"blue",delay:"2.2s"},{char:"春",top:"88%",left:"58%",size:120,rotate:-6,tint:"red",delay:"4s"},{char:"誠",top:"22%",left:"24%",size:100,rotate:9,tint:"red",delay:"1.1s"},{char:"信",top:"46%",left:"72%",size:130,rotate:-8,tint:"blue",delay:"2.8s"}],lS=`
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
  transition: background 0.4s ease, color 0.4s ease;
}

  .dark .ap-root {
    background:
      radial-gradient(ellipse 950px 700px at 8% 5%, rgba(13,90,167,0.24), transparent 60%),
      radial-gradient(ellipse 850px 650px at 92% 25%, rgba(217,37,37,0.18), transparent 60%),
      radial-gradient(ellipse 1000px 800px at 50% 100%, rgba(13,90,167,0.16), transparent 65%),
      linear-gradient(to bottom, #001233, #00040c 65%, #00040c);
    color: #e5e7eb;
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
    font-weight: 900;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    opacity: 0.07;
    animation: apCharDrift 14s ease-in-out infinite;
    transition: color 0.4s ease, opacity 0.4s ease;
  }
  @keyframes apCharDrift {
    0%, 100% { transform: translate3d(0,0,0) rotate(var(--ap-char-rot, 0deg)); }
    50%      { transform: translate3d(0,-16px,0) rotate(calc(var(--ap-char-rot, 0deg) + 0.8deg)); }
  }
  .ap-cjk-char-blue { color: #023260; }
  .ap-cjk-char-red  { color: #D92525; }
  .dark .ap-cjk-char-blue {
    color: #4a9eff;
    opacity: 0.24;
    filter: drop-shadow(0 0 22px rgba(74,158,255,0.32));
  }
  .dark .ap-cjk-char-red {
    color: #ff5b5b;
    opacity: 0.22;
    filter: drop-shadow(0 0 22px rgba(217,37,37,0.36));
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
  transition: background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
}

  .dark .ap-card {
    background: rgba(255, 255, 255, 0.04);
    border-color: rgba(255, 255, 255, 0.12);
    box-shadow:
      0 8px 30px rgba(0, 0, 0, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.08);
  }

  .ap-sidebar-top {
    padding: 28px 20px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    border-bottom: 1px solid #f0f2f5;
  }
  .dark .ap-sidebar-top { border-bottom-color: rgba(255,255,255,0.1); }

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
    transition: color 0.4s ease;
  }
  .dark .ap-name { color: #f5f8fb; }
  .ap-role { font-size: 12px; color: #6b7280; text-align: center; margin-top: 2px; transition: color 0.4s ease; }
  .dark .ap-role { color: #9fb3c8; }

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
    transition: background 0.4s ease, border-color 0.4s ease, color 0.4s ease;
  }
  .ap-badge-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--ap-primary, #023260); opacity: 0.5; transition: background 0.4s ease; }
  .dark .ap-badge {
    background: rgba(255,255,255,0.08);
    border-color: rgba(255,255,255,0.18);
    color: #d7dee6;
  }
  .dark .ap-badge-dot { background: #d7dee6; }

  .ap-info-list { padding: 16px 20px; display: flex; flex-direction: column; gap: 0; }
  .ap-info-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 10px 0;
    border-bottom: 1px solid #f0f2f5;
    gap: 12px;
    flex-wrap: wrap;
    transition: border-color 0.4s ease;
  }
  .ap-info-row:last-child { border-bottom: none; }
  .dark .ap-info-row { border-bottom-color: rgba(255,255,255,0.08); }
  .ap-info-label { font-size: 11px; color: #9ca3af; font-weight: 500; letter-spacing: 0.04em; flex-shrink: 0; transition: color 0.4s ease; }
  .dark .ap-info-label { color: #7d92a8; }
  .ap-info-value { font-size: 12px; color: #374151; font-weight: 400; text-align: right; word-break: break-word; min-width: 0; transition: color 0.4s ease; }
  .dark .ap-info-value { color: #d7dee6; }
  .ap-info-value a { color: var(--ap-primary, #023260); text-decoration: none; }
  .ap-info-value a:hover { text-decoration: underline; }
  .dark .ap-info-value a { color: #7db3f5; }

  .ap-tabs { display: flex; border-bottom: 1px solid #e8eaed; transition: border-color 0.4s ease; }
  .dark .ap-tabs { border-bottom-color: rgba(255,255,255,0.1); }
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
  .dark .ap-tab { color: #7d92a8; }
  .dark .ap-tab:hover { color: #e5e7eb; }
  .ap-tab.active { color: var(--ap-primary, #023260); font-weight: 600; border-bottom-color: var(--ap-primary, #023260); }
  .dark .ap-tab.active { color: #7db3f5; border-bottom-color: #7db3f5; }

  .ap-body { padding: 28px 28px 24px; }

  .ap-section-title { font-family: 'DM Serif Display', serif; font-size: 20px; color: #1a1f2e; margin-bottom: 4px; transition: color 0.4s ease; }
  .dark .ap-section-title { color: #f5f8fb; }
  .ap-section-sub { font-size: 13px; color: #9ca3af; margin-bottom: 24px; transition: color 0.4s ease; }
  .dark .ap-section-sub { color: #8291a3; }

  .ap-org-label {
    font-family: 'DM Serif Display', serif;
    font-size: 16px;
    color: #1a1f2e;
    margin-bottom: 14px;
    transition: color 0.4s ease;
  }
  .dark .ap-org-label { color: #f5f8fb; }

  .ap-fields { display: flex; flex-direction: column; gap: 20px; }
  .ap-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .ap-row-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; }
  @media (max-width: 540px) {
    .ap-row-2 { grid-template-columns: 1fr; }
    .ap-row-3 { grid-template-columns: 1fr 1fr; }
  }

  .ap-field-label {
    display: block;
    font-size: 11px;
    font-weight: 600;
    color: #9ca3af;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    margin-bottom: 7px;
    transition: color 0.4s ease;
  }
  .dark .ap-field-label { color: #7d92a8; }

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
  transition: background 0.4s ease, border-color 0.4s ease, color 0.4s ease;
}
  .dark .ap-static {
    background: rgba(255, 255, 255, 0.04);
    border-color: rgba(255, 255, 255, 0.14);
    color: #d7dee6;
  }
  .ap-static.email { justify-content: space-between; flex-wrap: wrap; row-gap: 4px; }
  .ap-verified {
    font-size: 10px; font-weight: 600; color: #059669; letter-spacing: 0.05em;
    background: #ecfdf5; border: 1px solid #a7f3d0; padding: 2px 8px; border-radius: 6px;
    flex-shrink: 0;
    transition: background 0.4s ease, border-color 0.4s ease, color 0.4s ease;
  }
  .dark .ap-verified {
    background: rgba(5,150,105,0.15);
    border-color: rgba(16,185,129,0.4);
    color: #6ee7b7;
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
    background 0.2s ease,
    color 0.4s ease;
}
  .dark .ap-input {
    background: rgba(255, 255, 255, 0.03);
    border-color: rgba(255, 255, 255, 0.18);
    color: #f5f8fb;
  }
  .ap-input::placeholder { color: #c4c9d4; }
  .dark .ap-input::placeholder { color: #6b7684; }
  .ap-input:focus { border-color: var(--ap-primary, #023260); box-shadow: 0 0 0 3px var(--ap-focus-ring, rgba(2,50,96,0.08)); }

  .ap-divider {
  height: 1px;
  background: var(--ap-divider-color, rgba(2, 50, 96, 0.10));
  margin: 4px 0;
  transition: background 0.4s ease;
}
  .dark .ap-divider { background: rgba(255,255,255,0.1); }

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
  .dark .ap-btn:disabled { background: rgba(255,255,255,0.08); color: #6b7684; }

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
  .dark .ap-edit-btn:disabled { background: rgba(255,255,255,0.08); color: #6b7684; }
  .ap-edit-btn.cancel { background: #e5e7eb; color: #374151; }
  .dark .ap-edit-btn.cancel { background: rgba(255,255,255,0.08); color: #d7dee6; }

  .ap-pw-bars { display: flex; gap: 4px; margin-bottom: 6px; }
  .ap-pw-bar { flex: 1; height: 3px; border-radius: 99px; background: #e8eaed; transition: background 0.25s; }
  .dark .ap-pw-bar { background: rgba(255,255,255,0.1); }
  .ap-pw-hint { font-size: 11px; color: #9ca3af; }

  .ap-session-title {
    font-size: 10px; font-weight: 600; color: #9ca3af;
    letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 8px;
    transition: color 0.4s ease;
  }
  .dark .ap-session-title { color: #7d92a8; }
  .ap-session p { font-size: 12px; color: #6b7280; line-height: 1.6; transition: color 0.4s ease; }
  .dark .ap-session p { color: #9fb3c8; }
  .ap-session strong { color: #374151; font-weight: 500; transition: color 0.4s ease; }
  .dark .ap-session strong { color: #e5e7eb; }

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
  .dark .ap-toast.success { background: #0b1c33; border-color: rgba(255,255,255,0.12); color: #f5f8fb; }
  .dark .ap-toast.error { background: #2a0f10; border-color: rgba(239,68,68,0.4); color: #fca5a5; }
  .ap-toast-icon { font-size: 15px; flex-shrink: 0; }
  .ap-toast button { margin-left: 4px; opacity: 0.4; background: none; border: none; cursor: pointer; font-size: 13px; transition: opacity 0.15s; flex-shrink: 0; }
  .ap-toast button:hover { opacity: 0.8; }

  .ap-spinner { width: 32px; height: 32px; border-radius: 50%; border: 2px solid #e8eaed; border-top-color: var(--ap-primary, #023260); animation: spin 0.7s linear infinite; }
  .dark .ap-spinner { border-color: rgba(255,255,255,0.15); }

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
`;function cS({message:r,type:a,onClose:s}){return v.useEffect(()=>{const i=setTimeout(s,3500);return()=>clearTimeout(i)},[s]),l.jsxs("div",{className:`ap-toast ${a}`,children:[l.jsx("span",{className:"ap-toast-icon",children:a==="success"?"✓":"✕"}),r,l.jsx("button",{onClick:s,children:"✕"})]})}function xs({children:r}){return l.jsx("label",{className:"ap-field-label",children:r})}function Ta({label:r,value:a,extra:s}){return l.jsxs("div",{className:"ap-field",children:[l.jsx(xs,{children:r}),l.jsxs("div",{className:`ap-static ${s||""}`,children:[l.jsx("span",{children:a||"—"}),s==="email"&&l.jsx("span",{className:"ap-verified",children:"Verified"})]})]})}function Fm({open:r}){return r?l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),l.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}):l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),l.jsx("circle",{cx:"12",cy:"12",r:"3"})]})}function dS(){const[r,a]=v.useState(null),[s,i]=v.useState(null),[c,d]=v.useState(!0),[h,p]=v.useState(!1),[m,g]=v.useState(null),[y,x]=v.useState("profile"),[k,S]=v.useState(null),[N,C]=v.useState(!1),[E,B]=v.useState(""),[M,T]=v.useState(!1),[I,X]=v.useState(""),[J,z]=v.useState(!1),[Q,te]=v.useState(!1),[le,fe]=v.useState(""),[ce,Se]=v.useState(!1),[ve,Me]=v.useState(!1),[O,ee]=v.useState(""),[ae,xe]=v.useState(""),[Z,_]=v.useState(!1),[A,q]=v.useState(!1),F=v.useRef(null),[ne,ke]=v.useState(!1),[Ae,$e]=v.useState(!1),[Ne,Dt]=v.useState(null),[vt,qt]=v.useState({x:0,y:0}),[ka,P]=v.useState(1),[se,ue]=v.useState(null),pe=(W,we="success")=>g({message:W,type:we});v.useEffect(()=>{(async()=>{try{const{data:{user:De},error:Ke}=await re.auth.getUser();if(Ke||!De)throw Ke||new Error("Not authenticated");a(De);const{data:rt,error:Mt}=await re.from("profiles").select("*").eq("id",De.id).single();if(Mt&&Mt.code!=="PGRST116")throw Mt;rt?(i(rt),B(rt.phone_number||""),X(rt.linkedin_url||""),S(rt.avatar_url||null)):(console.warn("No profile row found for user:",De.id,Mt),pe("Your profile isn't set up yet — your registration may still be pending approval.","error"))}catch(De){pe(De.message||"Failed to load profile","error")}finally{d(!1)}})();const{data:{subscription:we}}=re.auth.onAuthStateChange((De,Ke)=>{Ke||a(null)});return()=>we.unsubscribe()},[]);const wt=W=>{const we=W.target.files?.[0];if(W.target.value="",!we)return;if(!we.type.startsWith("image/")){pe("Please select a valid image.","error");return}const De=URL.createObjectURL(we);Dt(De),qt({x:0,y:0}),P(1),ue(null),$e(!0)},Qe=v.useCallback((W,we)=>{ue(we)},[]),kt=async(W,we)=>{const De=await new Promise((Lt,Ut)=>{const Qt=new Image;Qt.onload=()=>Lt(Qt),Qt.onerror=Ut,Qt.src=W}),Ke=document.createElement("canvas"),rt=800;return Ke.width=rt,Ke.height=rt,Ke.getContext("2d").drawImage(De,we.x,we.y,we.width,we.height,0,0,rt,rt),new Promise((Lt,Ut)=>{Ke.toBlob(Qt=>{if(!Qt){Ut(new Error("Could not create cropped image."));return}Lt(Qt)},"image/png")})},Ya=async()=>{if(!(!Ne||!se||!r?.id)){ke(!0);try{const W=await kt(Ne,se),we=new File([W],`avatar_${Date.now()}.png`,{type:"image/png"}),De=`${r.id}/avatar_${Date.now()}.png`,{error:Ke}=await re.storage.from("avatars").upload(De,we,{upsert:!0,contentType:"image/png"});if(Ke)throw Ke;const{data:rt}=re.storage.from("avatars").getPublicUrl(De),Mt=`${rt.publicUrl}?v=${Date.now()}`,{error:Lt}=await re.from("profiles").update({avatar_url:Mt,updated_at:new Date().toISOString()}).eq("id",r.id);if(Lt)throw Lt;S(Mt),window.dispatchEvent(new Event("avatar-updated")),$e(!1),Ne&&URL.revokeObjectURL(Ne),Dt(null),qt({x:0,y:0}),P(1),pe("Profile picture updated!")}catch(W){console.error("Avatar crop/upload failed:",W),pe(W.message||"Upload failed","error")}finally{ke(!1)}}},kn=()=>{Ne&&URL.revokeObjectURL(Ne),$e(!1),Dt(null),qt({x:0,y:0}),P(1),ue(null),F.current&&(F.current.value="")},Sn=async()=>{if(r){p(!0);try{const{error:W}=await re.from("profiles").update({phone_number:E.trim(),updated_at:new Date().toISOString()}).eq("id",r.id);if(W)throw W;i(we=>({...we,phone_number:E.trim()})),pe("Phone number updated!")}catch(W){pe(W.message||"Failed to save","error")}finally{p(!1)}}},St=async()=>{if(!r)return;const W=I.trim(),we=W?Wg(W):"";if(we&&!nS(we)){pe("Please enter a valid LinkedIn URL (e.g. linkedin.com/in/yourname), or leave it blank.","error");return}te(!0);try{const{error:De}=await re.from("profiles").update({linkedin_url:we||null,updated_at:new Date().toISOString()}).eq("id",r.id);if(De)throw De;i(Ke=>({...Ke,linkedin_url:we||null})),X(we),pe("LinkedIn link updated!"),z(!1)}catch(De){pe(De.message||"Failed to save","error")}finally{te(!1)}},Cs=async()=>{const W=le.trim();if(!W){pe("Please enter a new email address","error");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(W)){pe("Please enter a valid email address","error");return}if(W===r?.email){pe("That's already your current email","error");return}Me(!0);try{const{error:we}=await re.auth.updateUser({email:W});if(we)throw we;pe("Confirmation link sent! Check both your old and new inbox to complete the change."),Se(!1),fe("")}catch(we){pe(we.message||"Failed to update email","error")}finally{Me(!1)}},Fr=async()=>{if(!O||!ae){pe("Please fill in all fields","error");return}if(O.length<8){pe("Password must be at least 8 characters","error");return}if(O!==ae){pe("Passwords do not match","error");return}p(!0);try{const{error:W}=await re.auth.updateUser({password:O});if(W)throw W;ee(""),xe(""),pe("Password changed successfully!")}catch(W){pe(W.message||"Failed to change password","error")}finally{p(!1)}};if(c)return l.jsxs("div",{style:{minHeight:"100vh",background:"linear-gradient(to bottom, #f5f8fb, #d3dde8)",display:"flex",alignItems:"center",justifyContent:"center"},children:[l.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"}),l.jsx("div",{className:"ap-spinner"})]});if(!r)return l.jsx("div",{style:{minHeight:"100vh",background:"linear-gradient(to bottom, #f5f8fb, #d3dde8)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("p",{style:{fontSize:14,color:"#9ca3af"},children:"Not authenticated. Please sign in."})});const{first_name:yr,last_name:Sa,tier:da,team:Ga,position:Le,faculty:jn,level:Da,gender:xt,date_of_birth:$t,phone_number:jt,linkedin_url:Va}=s||{},Je=sS(xt),Jr=da==="Highboard"||da==="Mentor",ja=rS(da,Ga,Le),dt=O.length===0?-1:O.length<8?0:O.length<12?1:O.length<16?2:3,It=["#ef4444","#f59e0b","#3b82f6","#059669"],Xe=["Too short","Acceptable","Good","Strong"],K=l.jsx("div",{style:{width:14,height:14,borderRadius:"50%",border:"2px solid rgba(255,255,255,0.3)",borderTopColor:"#fff",animation:"spin 0.7s linear infinite"}});return l.jsxs(l.Fragment,{children:[Ae&&Ne&&l.jsx("div",{className:"ap-crop-backdrop",children:l.jsxs("div",{className:"ap-crop-modal",children:[l.jsxs("div",{className:"ap-crop-header",children:[l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:17,fontWeight:600,color:Je.primary},children:"Edit Profile Photo"}),l.jsx("div",{style:{fontSize:12,color:"#9ca3af",marginTop:3},children:"Move and zoom your photo to choose the perfect crop"})]}),l.jsx("button",{type:"button",onClick:kn,disabled:ne,style:{width:32,height:32,borderRadius:"50%",border:"none",background:"#f3f4f6",color:"#6b7280",fontSize:20,cursor:"pointer",flexShrink:0},children:"×"})]}),l.jsx("div",{className:"ap-crop-area",children:l.jsx(Fg,{image:Ne,crop:vt,zoom:ka,aspect:1,cropShape:"round",showGrid:!1,onCropChange:qt,onZoomChange:P,onCropComplete:Qe})}),l.jsxs("div",{className:"ap-crop-controls",children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:8,fontSize:12,fontWeight:600,color:Je.primary},children:[l.jsx("span",{children:"Zoom"}),l.jsxs("span",{children:[ka.toFixed(1),"×"]})]}),l.jsx("input",{type:"range",min:"1",max:"3",step:"0.1",value:ka,onChange:W=>P(Number(W.target.value)),style:{width:"100%",accentColor:Je.primary,display:"block"},disabled:ne}),l.jsxs("div",{style:{display:"flex",gap:10,marginTop:20,width:"100%"},children:[l.jsx("button",{type:"button",onClick:kn,disabled:ne,style:{flex:1,minWidth:0,height:48,padding:"11px 16px",borderRadius:12,border:"1px solid #e5e7eb",background:"#fff",color:"#374151",fontWeight:600,fontSize:15,cursor:ne?"not-allowed":"pointer",opacity:ne?.6:1,transition:"background 0.15s, transform 0.1s"},onMouseEnter:W=>{ne||(W.currentTarget.style.background="#f3f4f6")},onMouseLeave:W=>{W.currentTarget.style.background="#fff"},children:"Cancel"}),l.jsxs("button",{type:"button",onClick:Ya,disabled:ne,style:{flex:1,minWidth:0,height:48,padding:"11px 16px",borderRadius:12,border:"none",background:ne?"#e8eaed":Je.primary,color:ne?"#9ca3af":"#fff",fontWeight:600,fontSize:15,cursor:ne?"not-allowed":"pointer",boxShadow:ne?"none":`0 6px 16px ${Je.primary}40`,display:"flex",alignItems:"center",justifyContent:"center",gap:8,transition:"background 0.15s, transform 0.1s, box-shadow 0.2s"},onMouseEnter:W=>{ne||(W.currentTarget.style.background=Je.primaryDark)},onMouseLeave:W=>{ne||(W.currentTarget.style.background=Je.primary)},children:[ne&&l.jsx("span",{style:{width:14,height:14,borderRadius:"50%",border:"2px solid rgba(0,0,0,0.12)",borderTopColor:"#9ca3af",animation:"spin 0.7s linear infinite"}}),ne?"Saving...":"Save Photo"]})]})]})]})}),l.jsx("style",{children:lS}),l.jsxs("div",{className:"ap-root ap-fadein",style:{"--ap-primary":Je.primary,"--ap-primary-dark":Je.primaryDark,"--ap-bg-start":Je.bgStart,"--ap-bg-end":Je.bgEnd,"--ap-badge-bg":Je.badgeBg,"--ap-badge-border":Je.badgeBorder,"--ap-focus-ring":Je.focusRing,"--ap-static-bg":Je.staticBg,"--ap-static-border":Je.staticBorder,"--ap-input-bg":Je.inputBg,"--ap-input-border":Je.inputBorder,"--ap-divider-color":Je.dividerColor},children:[l.jsx("div",{className:"ap-cjk-layer",children:oS.map((W,we)=>l.jsx("span",{className:`ap-cjk-char ap-cjk-char-${W.tint}`,style:{top:W.top,left:W.left,fontSize:W.size,"--ap-char-rot":`${W.rotate}deg`,transform:`rotate(${W.rotate}deg)`,animationDelay:W.delay},children:W.char},we))}),iS.map((W,we)=>l.jsx("div",{className:"ap-petal",style:{left:W.left,background:W.tone==="A"?Je.petalA:Je.petalB,animationDuration:W.duration,animationDelay:W.delay}},we)),l.jsxs("div",{className:"ap-layout",children:[l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:l.jsxs("div",{className:"ap-card",children:[l.jsxs("div",{className:"ap-sidebar-top",children:[l.jsxs("div",{className:"ap-avatar-wrap",children:[k?l.jsx("img",{src:k,alt:"avatar"},k):l.jsx("div",{className:"ap-avatar-placeholder",children:tS(yr,Sa)}),l.jsx("button",{className:"ap-avatar-overlay",onClick:()=>F.current?.click(),disabled:ne,children:ne?"…":"Change"}),l.jsx("input",{ref:F,type:"file",accept:"image/*",style:{display:"none"},onChange:wt})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"ap-name",children:[yr," ",Sa]}),l.jsx("div",{className:"ap-role",children:ja})]}),da&&l.jsxs("div",{className:"ap-badge",children:[l.jsx("span",{className:"ap-badge-dot"}),da]})]}),l.jsx("div",{className:"ap-info-list",children:[{label:"Email",value:r.email},{label:"Gender",value:Xm(xt)},{label:"Phone",value:jt||"—"},{label:"LinkedIn",value:Va?l.jsx("a",{href:Va,target:"_blank",rel:"noopener noreferrer",children:"View profile"}):"—"},{label:"Date of Birth",value:$t?new Date($t).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}):"—"},{label:"Faculty",value:Vm(jn)},{label:"Level",value:Gm(Da)},...Jr?[]:[{label:"Team",value:Ga||"—"}],{label:"Position",value:ja}].map(W=>l.jsxs("div",{className:"ap-info-row",children:[l.jsx("span",{className:"ap-info-label",children:W.label}),l.jsx("span",{className:"ap-info-value",children:W.value})]},W.label))})]})}),l.jsx("div",{children:l.jsxs("div",{className:"ap-card",children:[l.jsx("div",{className:"ap-tabs",children:[{id:"profile",label:"Profile"},{id:"security",label:"Security"}].map(W=>l.jsx("button",{className:`ap-tab ${y===W.id?"active":""}`,onClick:()=>x(W.id),children:W.label},W.id))}),l.jsxs("div",{className:"ap-body",children:[y==="profile"&&l.jsxs("div",{className:"ap-fields",children:[l.jsxs("div",{children:[l.jsx("div",{className:"ap-section-title",children:"Personal Information"}),l.jsx("div",{className:"ap-section-sub",children:"Update your phone number, LinkedIn, and email below. Other details are managed by your organization."})]}),l.jsxs("div",{className:"ap-row-2",children:[l.jsx(Ta,{label:"First Name",value:yr}),l.jsx(Ta,{label:"Last Name",value:Sa})]}),l.jsxs("div",{className:"ap-field",children:[l.jsx(xs,{children:"Email Address"}),ce?l.jsxs("div",{children:[l.jsxs("div",{className:"ap-edit-row",children:[l.jsx("input",{className:"ap-input",type:"email",value:le,onChange:W=>fe(W.target.value),placeholder:"new@email.com"}),l.jsx("button",{onClick:Cs,disabled:ve,className:"ap-edit-btn",children:ve?K:"Save"}),l.jsx("button",{className:"ap-edit-btn cancel",onClick:()=>{Se(!1),fe("")},children:"Cancel"})]}),l.jsx("p",{style:{fontSize:11,color:"#9ca3af",marginTop:6},children:"You'll need to confirm this change via a link sent to your inbox before it takes effect."})]}):l.jsxs("div",{className:"ap-edit-row",children:[l.jsxs("div",{className:"ap-static email",children:[l.jsx("span",{children:r.email}),l.jsx("span",{className:"ap-verified",children:"Verified"})]}),l.jsxs("button",{className:"ap-edit-btn",onClick:()=>{fe(r.email||""),Se(!0)},children:[l.jsx(Qd,{size:13})," Edit"]})]})]}),l.jsxs("div",{className:"ap-row-2",children:[l.jsx(Ta,{label:"Date of Birth",value:$t?new Date($t).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}):"—"}),l.jsxs("div",{className:"ap-field",children:[l.jsx(xs,{children:"Phone Number"}),M?l.jsxs("div",{className:"ap-edit-row",children:[l.jsx("input",{className:"ap-input",type:"tel",value:E,onChange:W=>B(W.target.value),placeholder:"+20 1XX XXX XXXX"}),l.jsx("button",{onClick:async()=>{await Sn(),T(!1)},disabled:h||E===(s?.phone_number||""),className:"ap-edit-btn",children:h?K:"Save"}),l.jsx("button",{className:"ap-edit-btn cancel",onClick:()=>{B(s?.phone_number||""),T(!1)},children:"Cancel"})]}):l.jsxs("div",{className:"ap-edit-row",children:[l.jsx("div",{className:"ap-static",children:jt||"—"}),l.jsxs("button",{className:"ap-edit-btn",onClick:()=>T(!0),children:[l.jsx(Qd,{size:13})," Edit"]})]})]})]}),l.jsxs("div",{className:"ap-field",children:[l.jsx(xs,{children:"LinkedIn (optional)"}),J?l.jsxs("div",{children:[l.jsxs("div",{className:"ap-edit-row",children:[l.jsx("input",{className:"ap-input",type:"text",value:I,onChange:W=>X(W.target.value),placeholder:"linkedin.com/in/yourname"}),l.jsx("button",{onClick:St,disabled:Q||I.trim()===(s?.linkedin_url||""),className:"ap-edit-btn",children:Q?K:"Save"}),l.jsx("button",{className:"ap-edit-btn cancel",onClick:()=>{X(s?.linkedin_url||""),z(!1)},children:"Cancel"})]}),l.jsx("p",{style:{fontSize:11,color:"#9ca3af",marginTop:6},children:`You can type it with or without "https://" — we'll fix it up automatically.`})]}):l.jsxs("div",{className:"ap-edit-row",children:[l.jsx("div",{className:"ap-static",style:{gap:6,justifyContent:"space-between"},children:Va?l.jsxs("a",{href:Va,target:"_blank",rel:"noopener noreferrer",style:{color:"var(--ap-primary)",display:"flex",alignItems:"center",gap:6,textDecoration:"none",overflowWrap:"anywhere"},children:[l.jsx(Tl,{size:13,style:{flexShrink:0}}),Va]}):l.jsx("span",{children:"—"})}),l.jsxs("button",{className:"ap-edit-btn",onClick:()=>{X(s?.linkedin_url||""),z(!0)},children:[l.jsx(Qd,{size:13})," Edit"]})]})]}),l.jsx("div",{className:"ap-divider"}),l.jsxs("div",{children:[l.jsx("div",{className:"ap-org-label",children:"Organization Details"}),l.jsxs("div",{className:"ap-fields",children:[l.jsxs("div",{className:"ap-row-3",children:[l.jsx(Ta,{label:"Faculty",value:Vm(jn)}),l.jsx(Ta,{label:"Level",value:Gm(Da)}),l.jsx(Ta,{label:"Gender",value:Xm(xt)})]}),Jr?l.jsxs("div",{className:"ap-row-2",children:[l.jsx(Ta,{label:"Tier",value:da}),l.jsx(Ta,{label:"Position",value:ja})]}):l.jsxs("div",{className:"ap-row-3",children:[l.jsx(Ta,{label:"Tier",value:da}),l.jsx(Ta,{label:"Team",value:Ga}),l.jsx(Ta,{label:"Position",value:ja})]})]})]})]}),y==="security"&&l.jsxs("div",{className:"ap-fields",children:[l.jsxs("div",{children:[l.jsx("div",{className:"ap-section-title",children:"Change Password"}),l.jsx("div",{className:"ap-section-sub",children:"Choose a strong password of at least 8 characters."})]}),O&&l.jsxs("div",{children:[l.jsx("div",{className:"ap-pw-bars",children:[0,1,2,3].map(W=>l.jsx("div",{className:"ap-pw-bar",style:{background:W<=dt?It[dt]:"#e8eaed"}},W))}),l.jsx("span",{className:"ap-pw-hint",style:{color:dt>=0?It[dt]:"#9ca3af"},children:dt>=0?Xe[dt]:""})]}),l.jsxs("div",{className:"ap-field",children:[l.jsx(xs,{children:"New Password"}),l.jsxs("div",{style:{position:"relative"},children:[l.jsx("input",{className:"ap-input",type:Z?"text":"password",value:O,onChange:W=>ee(W.target.value),placeholder:"••••••••",style:{paddingRight:42}}),l.jsx("button",{type:"button",onClick:()=>_(W=>!W),style:{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"#9ca3af",display:"flex",alignItems:"center"},children:l.jsx(Fm,{open:Z})})]})]}),l.jsxs("div",{className:"ap-field",children:[l.jsx(xs,{children:"Confirm Password"}),l.jsxs("div",{style:{position:"relative"},children:[l.jsx("input",{className:"ap-input",type:A?"text":"password",value:ae,onChange:W=>xe(W.target.value),placeholder:"••••••••",style:{paddingRight:42,borderColor:ae&&ae!==O?"#fca5a5":void 0}}),l.jsx("button",{type:"button",onClick:()=>q(W=>!W),style:{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"#9ca3af",display:"flex",alignItems:"center"},children:l.jsx(Fm,{open:A})})]}),ae&&ae!==O&&l.jsx("p",{style:{fontSize:11,color:"#ef4444",marginTop:5},children:"Passwords do not match"})]}),l.jsx("button",{onClick:Fr,disabled:h||!O||O!==ae,className:"ap-btn",children:h?l.jsxs(l.Fragment,{children:[K," Updating…"]}):"Update Password"}),l.jsxs("div",{className:"ap-session",children:[l.jsx("div",{className:"ap-session-title",children:"Current Session"}),l.jsxs("p",{children:["Signed in as ",l.jsx("strong",{children:r.email})]}),l.jsxs("p",{style:{marginTop:4},children:["Last sign in:"," ",r.last_sign_in_at?new Date(r.last_sign_in_at).toLocaleString("en-GB",{dateStyle:"medium",timeStyle:"short"}):"—"]})]}),l.jsx("button",{onClick:()=>C(!0),className:"ap-btn-danger",style:{marginTop:"20px"},children:"Delete Account"})]})]})]})})]}),m&&l.jsx(cS,{message:m.message,type:m.type,onClose:()=>g(null)}),l.jsx(eS,{open:N,onClose:()=>C(!1),onDeleted:()=>{window.location.href="/"}})]})]})}const Zg=v.createContext(),uS=({children:r})=>{const[a,s]=v.useState(null),[i,c]=v.useState(null),[d,h]=v.useState(!0);return v.useEffect(()=>{let p=!0;(async()=>{const{data:{session:y}}=await re.auth.getSession();p&&(s(y),c(y?.user??null),h(!1))})();const{data:g}=re.auth.onAuthStateChange((y,x)=>{p&&(s(x),c(x?.user??null),h(!1))});return()=>{p=!1,g.subscription.unsubscribe()}},[]),l.jsx(Zg.Provider,{value:{session:a,user:i,loading:d},children:r})},hS=()=>v.useContext(Zg),Jm="ieee-media",fS=r=>{if(!r)return!1;const a=(r.tier||"").toLowerCase().replace(/\s+/g,""),s=(r.team||"").toLowerCase();return(r.role||"").toLowerCase()==="admin"||a==="highboard"||a==="board"&&s==="media"},pS=()=>{try{let r=localStorage.getItem("ieee_anon_id");return r||(r=`anon_${crypto.randomUUID()}`,localStorage.setItem("ieee_anon_id",r)),r}catch{return`anon_${crypto.randomUUID()}`}},mS=r=>new Date(r).toLocaleDateString("en-GB",{weekday:"short",day:"numeric",month:"short",year:"numeric"}),gS=r=>new Date(r).toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"}),Wm=r=>/\.(jpg|jpeg|png|gif|webp|svg)(\?|$)/i.test(r),Qg=(r,a)=>r?.id?`user_${r.id}`:a,bS=(r,a)=>r?.id?`user_${r.id}`:a,xS=[{left:"2%",color:"#cc2233",duration:"9s",delay:"0s",size:1},{left:"8%",color:"#023260",duration:"15s",delay:"2.2s",size:1.6},{left:"14%",color:"#023260",duration:"12s",delay:"1.4s",size:1},{left:"20%",color:"#cc2233",duration:"17s",delay:"4.8s",size:1.7},{left:"25%",color:"#023260",duration:"11s",delay:"2s",size:1},{left:"31%",color:"#cc2233",duration:"14s",delay:"0.4s",size:1.5},{left:"36%",color:"#cc2233",duration:"10s",delay:"3.6s",size:1},{left:"43%",color:"#023260",duration:"16s",delay:"3.2s",size:1.6},{left:"50%",color:"#cc2233",duration:"8s",delay:"4.5s",size:1},{left:"56%",color:"#023260",duration:"13.5s",delay:"1.8s",size:1.5},{left:"61%",color:"#023260",duration:"13s",delay:"0.8s",size:1},{left:"67%",color:"#cc2233",duration:"18s",delay:"5.6s",size:1.7},{left:"72%",color:"#023260",duration:"13s",delay:"1s",size:1},{left:"78%",color:"#cc2233",duration:"12.5s",delay:"3.9s",size:1.4},{left:"82%",color:"#cc2233",duration:"9.5s",delay:"5.2s",size:1},{left:"87%",color:"#023260",duration:"15.5s",delay:"0.6s",size:1.6},{left:"90%",color:"#cc2233",duration:"10s",delay:"3s",size:1},{left:"96%",color:"#023260",duration:"11.5s",delay:"2.6s",size:1.3}],yS=[{top:"6%",left:"10%",size:260,color:"rgba(2,50,96,0.10)",darkColor:"rgba(74,158,255,0.16)",duration:"22s",delay:"0s"},{top:"18%",left:"78%",size:320,color:"rgba(204,34,51,0.08)",darkColor:"rgba(217,37,37,0.18)",duration:"26s",delay:"3s"},{top:"55%",left:"4%",size:280,color:"rgba(204,34,51,0.07)",darkColor:"rgba(217,37,37,0.14)",duration:"24s",delay:"6s"},{top:"70%",left:"85%",size:300,color:"rgba(2,50,96,0.09)",darkColor:"rgba(74,158,255,0.15)",duration:"28s",delay:"2s"},{top:"38%",left:"45%",size:240,color:"rgba(2,50,96,0.06)",darkColor:"rgba(74,158,255,0.12)",duration:"20s",delay:"5s"}],vS=[{char:"动",size:280,tint:"blue",pos:{bottom:"-4%",left:"-5%"},rotate:-6,delay:"0s"},{char:"信",size:85,tint:"red",pos:{top:"6%",left:"6%"},rotate:7,delay:"1.2s",hideMobile:!0},{char:"刻",size:130,tint:"blue",pos:{top:"22%",left:"4%"},rotate:7,delay:"0.5s",hideMobile:!0},{char:"分",size:100,tint:"red",pos:{top:"38%",left:"8%"},rotate:6,delay:"1.1s",hideMobile:!0},{char:"新",size:95,tint:"blue",pos:{top:"48%",left:"-4%"},rotate:-5,delay:"2.0s",hideMobile:!0},{char:"记",size:190,tint:"blue",pos:{top:"60%",left:"-4%"},rotate:5,delay:"2.4s"},{char:"圈",size:160,tint:"red",pos:{top:"78%",left:"5%"},rotate:-4,delay:"3.3s",hideMobile:!0},{char:"态",size:230,tint:"red",pos:{top:"4%",right:"-4%"},rotate:8,delay:"1.6s"},{char:"众",size:90,tint:"blue",pos:{top:"16%",right:"8%"},rotate:5,delay:"2.6s",hideMobile:!0},{char:"队",size:100,tint:"red",pos:{top:"28%",right:"5%"},rotate:9,delay:"1.9s",hideMobile:!0},{char:"享",size:150,tint:"blue",pos:{top:"50%",right:"6%"},rotate:-5,delay:"2.9s",hideMobile:!0},{char:"友",size:100,tint:"blue",pos:{top:"70%",right:"4%"},rotate:-8,delay:"0.3s",hideMobile:!0},{char:"录",size:150,tint:"blue",pos:{top:"80%",right:"8%"},rotate:-7,delay:"3.9s",hideMobile:!0},{char:"闻",size:180,tint:"red",pos:{bottom:"10%",right:"-3%"},rotate:-9,delay:"0.8s"}],wS=`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;700&family=Noto+Sans+SC:wght@300;400;500&display=swap');

  .tl-root { font-family: 'Noto Sans SC', sans-serif; }
  .tl-serif { font-family: 'Noto Serif SC', serif; }

  /* ── Page-open entrance — the whole page fades in the instant it mounts,
     same "just arrived" feel as About.jsx / ContactUs.jsx, before the
     staggered content reveals (tl-reveal, etc.) play on top of it.
     This has to live inside .tl-page-bg's own "animation" declaration
     (not a separate .tl-page-fade class) — both target the same element,
     and a later "animation" shorthand rule fully replaces an earlier one
     instead of combining with it, which was silently killing the fade. ── */
  @keyframes tlPageFade {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* ── Page background (matches About page, with slow ambient drift + dark mode) ── */
  .tl-page-bg {
    background: linear-gradient(120deg, #f5f8fb, #d3dde8, #eef3f8, #d8e2ec);
    background-size: 300% 300%;
    animation: tlBgDrift 30s ease-in-out infinite, tlPageFade 0.7s ease both;
    position: relative;
    overflow: hidden;
    transition: background 0.5s ease, background-color 0.5s ease, color 0.5s ease;
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
    animation: tlPageFade 0.7s ease both;
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
  /* ── Falling petals ──
     Fixed to the viewport so they keep drifting down in view the whole
     time you scroll, instead of only falling past once near the top. */
  .tl-petals-fixed {
    position: fixed;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 30;
  }
  .tl-petal {
    position: absolute;
    width: 7px;
    height: 11px;
    border-radius: 80% 0 80% 0;
    opacity: 0;
    animation: tlFallPetal linear infinite;
    top: -20px;
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

  .tl-comment-edit-btn {
    font-size: 10.5px; font-weight: 600; cursor: pointer;
    border: none; background: none; padding: 0;
    color: rgba(2,50,96,0.4);
    font-family: 'Noto Sans SC', sans-serif;
    transition: color 0.2s ease;
  }
  .tl-comment-edit-btn:hover { color: #023260; }
  .dark .tl-comment-edit-btn { color: rgba(255,255,255,0.4); }
  .dark .tl-comment-edit-btn:hover { color: #f5f8fb; }

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
    animation: tlPageFade 0.25s ease both;
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

  /* Edit modal Save button: blue in light mode (inherits .tl-btn-primary),
     white in dark mode for contrast against the dark modal background */
  .dark .tl-btn-primary.tl-save-edit {
    background: #fff;
    color: #023260;
    box-shadow: 0 3px 14px rgba(255,255,255,0.15);
  }
  .dark .tl-btn-primary.tl-save-edit:hover {
    background: #e8eef5;
  }
  .dark .tl-btn-primary.tl-save-edit:disabled {
    background: rgba(255,255,255,0.08);
    color: rgba(255,255,255,0.3);
    box-shadow: none;
  }

  .tl-btn-secondary {
    flex: 1; padding: 10px; border-radius: 12px; font-size: 13px; font-weight: 600;
    border: 1px solid rgba(2,50,96,0.15); color: #6a8aaa; background: transparent;
    cursor: pointer; transition: all 0.2s, border-color 0.4s ease, color 0.4s ease; font-family: 'Noto Sans SC', sans-serif;
  }
  .tl-btn-secondary:hover { background: #f5f8ff; }
  .tl-btn-secondary:disabled { opacity: 0.5; cursor: not-allowed; }
  .dark .tl-btn-secondary { border-color: rgba(255,255,255,0.18); color: rgba(255,255,255,0.55); }
  .dark .tl-btn-secondary:hover { background: rgba(255,255,255,0.06); }

  /* Danger button — used for the permanent-delete confirmation */
  .tl-btn-danger {
    flex: 1; padding: 10px; border-radius: 12px; font-size: 13px; font-weight: 700;
    letter-spacing: 0.04em; border: none; cursor: pointer;
    font-family: 'Noto Serif SC', serif;
    transition: all 0.2s; background: #cc2233; color: #fff;
    box-shadow: 0 3px 12px rgba(204,34,51,0.25);
  }
  .tl-btn-danger:hover { background: #a81b29; transform: translateY(-1px); }
  .tl-btn-danger:disabled { background: #e5b7bb; color: #fff; cursor: not-allowed; transform: none; box-shadow: none; }
  .dark .tl-btn-danger { background: #e6394f; box-shadow: 0 3px 14px rgba(230,57,79,0.35); }
  .dark .tl-btn-danger:hover { background: #ff5b6f; }
  .dark .tl-btn-danger:disabled { background: rgba(230,57,79,0.3); color: rgba(255,255,255,0.6); }

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
    animation: tlReveal 0.2s cubic-bezier(0.16,1,0.3,1) both;
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
    animation: tlPageFade 0.25s ease both;
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

  /* ── Smooth, gentle entrance reveal used across hero / search / composer / cards.
     "both" fills backwards so the element stays invisible until its delay
     elapses (no flash of unstyled content), then eases in slowly rather than
     popping in all at once. ── */
  @keyframes tlReveal {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .tl-reveal {
    animation: tlReveal 0.7s cubic-bezier(0.16,1,0.3,1) both;
  }
  @media (prefers-reduced-motion: reduce) {
    .tl-reveal, .tl-page-bg, .tl-modal-backdrop, .tl-lightbox, .tl-menu {
      animation: none !important;
      opacity: 1 !important;
      transform: none !important;
    }
  }
`;function kS({images:r,startIndex:a,onClose:s}){const[i,c]=v.useState(a);return v.useEffect(()=>{const d=h=>{h.key==="Escape"&&s(),h.key==="ArrowRight"&&c(p=>(p+1)%r.length),h.key==="ArrowLeft"&&c(p=>(p-1+r.length)%r.length)};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[r.length,s]),l.jsxs("div",{className:"tl-lightbox",onClick:s,children:[l.jsx("button",{onClick:s,style:{position:"absolute",top:16,right:16,color:"#fff",fontSize:28,background:"none",border:"none",cursor:"pointer",lineHeight:1},children:"×"}),r.length>1&&l.jsxs(l.Fragment,{children:[l.jsx("button",{onClick:d=>{d.stopPropagation(),c(h=>(h-1+r.length)%r.length)},style:{position:"absolute",left:16,color:"#fff",fontSize:32,background:"none",border:"none",cursor:"pointer"},children:"‹"}),l.jsx("button",{onClick:d=>{d.stopPropagation(),c(h=>(h+1)%r.length)},style:{position:"absolute",right:16,color:"#fff",fontSize:32,background:"none",border:"none",cursor:"pointer"},children:"›"})]}),l.jsx("img",{src:r[i],alt:"",style:{maxHeight:"90vh",maxWidth:"90vw",objectFit:"contain",borderRadius:10},onClick:d=>d.stopPropagation()}),r.length>1&&l.jsx("div",{style:{position:"absolute",bottom:5,display:"flex",gap:6},children:r.map((d,h)=>l.jsx("button",{onClick:p=>{p.stopPropagation(),c(h)},style:{width:8,height:8,borderRadius:"50%",border:"none",cursor:"pointer",background:h===i?"#fff":"rgba(255,255,255,0.35)"}},h))})]})}function Ul({size:r=40}){return l.jsx("div",{className:"tl-ieee-badge",style:{width:r,height:r,fontSize:r<36?8:9},children:"IEEE"})}function Nu({name:r="?",avatarUrl:a,size:s=28}){if(a)return l.jsx("img",{src:a,alt:r,style:{width:s,height:s,borderRadius:"50%",objectFit:"cover",flexShrink:0}});const i=r.split(" ").map(h=>h[0]).slice(0,2).join("").toUpperCase(),c=["#023260","#cc2233","#0a6640","#b87820","#5a3a9a"],d=c[r.charCodeAt(0)%c.length];return l.jsx("div",{style:{width:s,height:s,borderRadius:"50%",background:d,color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:s*.35,fontWeight:700,flexShrink:0,fontFamily:"'Noto Sans SC', sans-serif"},children:i})}function eb({url:r}){const a=r?.split(".").pop()?.toLowerCase()||"",s={pdf:"📄",doc:"📝",docx:"📝",ppt:"📊",pptx:"📊",xls:"📈",xlsx:"📈",zip:"🗜️",mp4:"🎬",mov:"🎬"};return l.jsx("span",{style:{fontSize:22},children:s[a]||"📎"})}function SS({files:r}){const[a,s]=v.useState(null);if(!r||r.length===0)return null;const i=r.filter(Wm),c=r.filter(d=>!Wm(d));return l.jsxs(l.Fragment,{children:[l.jsxs("div",{style:{marginTop:10},children:[i.length>0&&l.jsx("div",{style:{display:"grid",gap:3,borderRadius:12,overflow:"hidden",gridTemplateColumns:i.length===1?"1fr":i.length===2?"1fr 1fr":"1fr 1fr 1fr"},children:i.slice(0,3).map((d,h)=>l.jsxs("div",{onClick:()=>s(h),style:{position:"relative",overflow:"hidden",cursor:"pointer",aspectRatio:i.length===1?"16/9":"1/1"},children:[l.jsx("img",{src:d,alt:"",loading:"lazy",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.3s"},onMouseOver:p=>p.currentTarget.style.transform="scale(1.04)",onMouseOut:p=>p.currentTarget.style.transform="scale(1)"}),h===2&&i.length>3&&l.jsxs("div",{style:{position:"absolute",inset:0,background:"rgba(1,20,40,0.55)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:22,fontWeight:700,fontFamily:"'Noto Serif SC', serif"},children:["+",i.length-3]})]},h))}),c.length>0&&l.jsx("div",{style:{marginTop:6,display:"flex",flexDirection:"column",gap:6},children:c.map((d,h)=>l.jsxs("a",{href:d,target:"_blank",rel:"noreferrer",className:"tl-file-row",style:{display:"flex",alignItems:"center",gap:10,padding:"10px 14px",borderRadius:12,textDecoration:"none"},children:[l.jsx(eb,{url:d}),l.jsx("span",{className:"tl-text-body",style:{fontSize:12,flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:decodeURIComponent(d.split("/").pop()?.split("?")[0]||"File")}),l.jsx("span",{className:"tl-text-faint-2",style:{fontSize:12},children:"↗"})]},h))})]}),a!==null&&l.jsx(kS,{images:i,startIndex:a,onClose:()=>s(null)})]})}function tb({title:r="Delete this?",message:a="This action is permanent and cannot be undone.",onConfirm:s,onCancel:i,loading:c=!1}){return l.jsx("div",{className:"tl-modal-backdrop",onClick:d=>d.target===d.currentTarget&&!c&&i(),children:l.jsxs("div",{className:"tl-modal tl-reveal",style:{maxWidth:380},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:12},children:[l.jsx("span",{style:{fontSize:22},children:"⚠️"}),l.jsx("p",{className:"tl-serif tl-text-heading",style:{fontWeight:700,fontSize:14},children:r})]}),l.jsx("p",{className:"tl-text-body",style:{fontSize:13,lineHeight:1.6,marginBottom:20,fontFamily:"'Noto Sans SC', sans-serif"},children:a}),l.jsxs("div",{style:{display:"flex",gap:10},children:[l.jsx("button",{onClick:i,disabled:c,className:"tl-btn-secondary",children:"Cancel"}),l.jsx("button",{onClick:s,disabled:c,className:"tl-btn-danger",children:c?"Deleting...":"Delete"})]})]})})}function jS({postId:r,visitorId:a,currentProfile:s}){const[i,c]=v.useState([]),[d,h]=v.useState(""),[p,m]=v.useState(""),[g,y]=v.useState(!1),[x,k]=v.useState(!1),[S,N]=v.useState(null),[C,E]=v.useState(""),[B,M]=v.useState(!1),[T,I]=v.useState(null),[X,J]=v.useState(null),z=!!s,Q=bS(s,a),te=async()=>{const{data:O}=await re.from("ieee_comments").select("*").eq("post_id",r).order("created_at",{ascending:!0});O&&c(O)};v.useEffect(()=>{x&&te()},[x]);const le=async()=>{if(!d.trim()||!z&&!p.trim())return;y(!0);const O=z?s.full_name||s.first_name||"Member":p.trim(),{error:ee}=await re.from("ieee_comments").insert({post_id:r,author_id:Q,author_name:O,author_avatar:z&&s?.avatar_url||null,content:d.trim()});ee||(h(""),m(""),await te()),y(!1)},fe=O=>{N(O.id),E(O.content)},ce=()=>{N(null),E("")},Se=async O=>{if(!C.trim())return;M(!0);const{error:ee,data:ae}=await re.from("ieee_comments").update({content:C.trim()}).eq("id",O).select().single();M(!1),!ee&&ae&&(c(xe=>xe.map(Z=>Z.id===O?ae:Z)),N(null),E(""))},ve=O=>{O.author_id===Q&&J(O)},Me=async()=>{const O=X;if(!O)return;I(O.id);const{error:ee}=await re.from("ieee_comments").delete().eq("id",O.id).eq("author_id",Q);I(null),ee?console.error("Delete comment error:",ee.message):(c(ae=>ae.filter(xe=>xe.id!==O.id)),S===O.id&&(N(null),E(""))),J(null)};return l.jsxs("div",{style:{marginTop:6},children:[l.jsx("button",{className:"tl-comment-btn",onClick:()=>k(O=>!O),style:{color:x?void 0:"#9ca3af"},children:l.jsx("span",{className:x?"tl-text-heading":"",children:x?"Hide comments":`View comments${i.length>0?` (${i.length})`:""}`})}),x&&l.jsxs("div",{className:"tl-reveal",style:{marginTop:10,display:"flex",flexDirection:"column",gap:10,animationDuration:"0.35s"},children:[i.length===0&&l.jsx("p",{className:"tl-text-faint-2",style:{fontSize:11,textAlign:"center",padding:"6px 0",fontFamily:"'Noto Sans SC', sans-serif"},children:"No comments yet. Be the first!"}),i.map(O=>{const ee=O.author_id===Q,ae=S===O.id;return l.jsxs("div",{style:{display:"flex",gap:8,alignItems:"flex-start"},children:[l.jsx(Nu,{name:O.author_name||"?",avatarUrl:O.author_avatar,size:26}),l.jsxs("div",{className:"tl-comment-bubble",style:{flex:1,borderRadius:14,padding:"7px 12px"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8},children:[l.jsx("p",{className:"tl-text-heading",style:{fontSize:11,fontWeight:700,fontFamily:"'Noto Serif SC', serif"},children:O.author_name||"Member"}),ee&&!ae&&l.jsxs("div",{style:{display:"flex",gap:10,flexShrink:0},children:[l.jsx("button",{className:"tl-comment-edit-btn",onClick:()=>fe(O),children:"Edit"}),l.jsx("button",{className:"tl-comment-edit-btn",onClick:()=>ve(O),disabled:T===O.id,style:{color:"#cc2233",opacity:T===O.id?.5:1},children:T===O.id?"Deleting...":"Delete"})]})]}),ae?l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,marginTop:4},children:[l.jsx("input",{type:"text",value:C,onChange:xe=>E(xe.target.value),onKeyDown:xe=>{xe.key==="Enter"&&Se(O.id),xe.key==="Escape"&&ce()},className:"tl-guest-input",autoFocus:!0}),l.jsxs("div",{style:{display:"flex",gap:10},children:[l.jsx("button",{className:"tl-comment-edit-btn",onClick:()=>Se(O.id),disabled:!C.trim()||B,style:{color:"#023260",opacity:!C.trim()||B?.4:1},children:B?"Saving...":"Save"}),l.jsx("button",{className:"tl-comment-edit-btn",onClick:ce,children:"Cancel"})]})]}):l.jsx("p",{className:"tl-text-body",style:{fontSize:11,marginTop:2,lineHeight:1.5,fontFamily:"'Noto Sans SC', sans-serif"},children:O.content})]})]},O.id)}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,paddingTop:4},children:[!z&&l.jsx("input",{type:"text",value:p,onChange:O=>m(O.target.value),placeholder:"Your name...",className:"tl-guest-input"}),l.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[l.jsx(Nu,{name:z?s.full_name||"M":p||"?",avatarUrl:s?.avatar_url,size:26}),l.jsxs("div",{className:"tl-comment-box",children:[l.jsx("input",{type:"text",value:d,onChange:O=>h(O.target.value),onKeyDown:O=>O.key==="Enter"&&le(),placeholder:"Write a comment...",className:"tl-comment-input"}),l.jsx("button",{onClick:le,disabled:!d.trim()||g||!z&&!p.trim(),className:"tl-text-heading",style:{fontSize:11,fontWeight:700,background:"none",border:"none",cursor:"pointer",opacity:!d.trim()||g||!z&&!p.trim()?.3:1,fontFamily:"'Noto Serif SC', serif"},children:g?"...":"Send"})]})]})]})]}),X&&l.jsx(tb,{title:"Delete comment?",message:"This comment will be permanently deleted and can't be recovered.",onConfirm:Me,onCancel:()=>J(null),loading:T===X.id})]})}function _S({post:r,onClose:a,onSave:s}){const[i,c]=v.useState(r.title||""),[d,h]=v.useState(r.content||""),[p,m]=v.useState(!1),[g,y]=v.useState(""),x=async()=>{if(!d.trim())return;m(!0),y("");const{error:k,data:S}=await re.from("ieee_posts").update({title:i||null,content:d}).eq("id",r.id).select().single();m(!1),!k&&S?(s(S),a()):(console.error("Update error:",k?.message),y(k?.message||"Couldn't save changes. Please try again."))};return l.jsx("div",{className:"tl-modal-backdrop",onClick:k=>k.target===k.currentTarget&&a(),children:l.jsxs("div",{className:"tl-modal tl-reveal",children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:18},children:[l.jsx(Ul,{size:40}),l.jsxs("div",{children:[l.jsx("p",{className:"tl-serif tl-text-heading",style:{fontWeight:700,fontSize:14},children:"Edit Post"}),l.jsx("p",{className:"tl-text-faint",style:{fontSize:11,fontFamily:"'Noto Sans SC', sans-serif"},children:"IEEE ECU SB"})]}),l.jsx("button",{onClick:a,className:"tl-close-btn",style:{marginLeft:"auto",fontSize:22,background:"none",border:"none",cursor:"pointer",lineHeight:1},children:"×"})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10},children:[l.jsx("input",{type:"text",placeholder:"Title (optional)",value:i,onChange:k=>c(k.target.value),className:"tl-modal-input"}),l.jsx("textarea",{placeholder:"What's happening...",value:d,onChange:k=>h(k.target.value),rows:5,className:"tl-modal-input",style:{resize:"none"}})]}),g&&l.jsx("p",{style:{color:"#cc2233",fontSize:12,marginTop:10,fontFamily:"'Noto Sans SC', sans-serif"},children:g}),l.jsxs("div",{style:{display:"flex",gap:10,marginTop:18},children:[l.jsx("button",{onClick:a,className:"tl-btn-secondary",children:"Cancel"}),l.jsx("button",{onClick:x,disabled:!d.trim()||p,className:"tl-btn-primary tl-save-edit",style:{flex:1,width:"auto"},children:p?"Saving...":"Save Changes"})]})]})})}function ES({likes:r,onClose:a}){const s=r||[];return l.jsx("div",{className:"tl-modal-backdrop",onClick:i=>i.target===i.currentTarget&&a(),children:l.jsxs("div",{className:"tl-modal tl-reveal",style:{maxWidth:380},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:16},children:[l.jsx(Cl,{size:20,fill:"#cc2233",color:"#cc2233"}),l.jsxs("p",{className:"tl-serif tl-text-heading",style:{fontWeight:700,fontSize:14},children:["Reactions (",s.length,")"]}),l.jsx("button",{onClick:a,className:"tl-close-btn",style:{marginLeft:"auto",fontSize:22,background:"none",border:"none",cursor:"pointer",lineHeight:1},children:"×"})]}),s.length===0?l.jsx("p",{className:"tl-text-faint",style:{fontSize:12,textAlign:"center",padding:"14px 0",fontFamily:"'Noto Sans SC', sans-serif"},children:"No reactions yet."}):l.jsx("div",{children:s.map((i,c)=>l.jsxs("div",{className:"tl-likers-row",children:[l.jsx(Nu,{name:i.name||"Member",size:32}),l.jsx("span",{className:"tl-text-heading",style:{fontSize:13,fontFamily:"'Noto Sans SC', sans-serif"},children:i.name||"Member"})]},c))})]})})}function NS({post:r,onLike:a,onDelete:s,onEdit:i,currentUser:c,visitorId:d,currentProfile:h,canPost:p,likerName:m,isLiking:g,revealDelay:y="0s"}){const x=Qg(c,d),k=(r.likes||[]).some(ve=>ve.id===x),N=h&&r.author_id===h.id||p,[C,E]=v.useState(!1),[B,M]=v.useState(!1),[T,I]=v.useState(!1),[X,J]=v.useState(!1),[z,Q]=v.useState(!1),[te,le]=v.useState(r),fe=v.useRef();v.useEffect(()=>{const ve=Me=>{fe.current&&!fe.current.contains(Me.target)&&E(!1)};return document.addEventListener("mousedown",ve),()=>document.removeEventListener("mousedown",ve)},[]);const ce=()=>{E(!1),J(!0)},Se=async()=>{Q(!0),await s(r.id),Q(!1),J(!1)};return l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"tl-card tl-reveal",style:{animationDelay:y},children:l.jsxs("div",{style:{padding:"14px 16px"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:10},children:[l.jsx(Ul,{size:38}),l.jsxs("div",{style:{flex:1},children:[l.jsx("p",{className:"tl-serif tl-text-heading",style:{fontWeight:700,fontSize:13},children:"IEEE ECU SB"}),l.jsxs("p",{className:"tl-text-faint",style:{fontSize:11,fontFamily:"'Noto Sans SC', sans-serif"},children:[mS(te.created_at)," ·"," ",gS(te.created_at)]})]}),N&&l.jsxs("div",{style:{position:"relative"},ref:fe,children:[l.jsx("button",{onClick:()=>E(ve=>!ve),className:"tl-menu-trigger",style:{width:30,height:30,borderRadius:"50%",border:"none",background:"none",cursor:"pointer",fontSize:18,display:"flex",alignItems:"center",justifyContent:"center"},children:"⋯"}),C&&l.jsxs("div",{className:"tl-menu",children:[l.jsx("button",{className:"tl-menu-item",onClick:()=>{E(!1),M(!0)},children:"✏️ Edit"}),l.jsx("button",{className:"tl-menu-item danger",onClick:ce,children:"🗑️ Delete"})]})]})]}),te.title&&l.jsx("h3",{className:"tl-serif tl-text-heading",style:{fontWeight:700,fontSize:15,marginBottom:6},children:te.title}),l.jsx("p",{className:"tl-text-body",style:{fontSize:14,lineHeight:1.65,whiteSpace:"pre-wrap",fontFamily:"'Noto Sans SC', sans-serif"},children:te.content}),l.jsx(SS,{files:te.images||[]}),l.jsx("div",{className:"tl-divider"}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:8},children:[l.jsxs("div",{className:`tl-like-btn${k?" liked":""}`,children:[l.jsx("button",{type:"button",onClick:()=>a(te.id),disabled:g,"aria-label":k?"Unlike":"Like",style:{background:"none",border:"none",padding:0,cursor:g?"default":"pointer",opacity:g?.5:1,display:"flex",alignItems:"center"},children:l.jsx(Cl,{size:15,strokeWidth:2,fill:k?"#cc2233":"none",color:k?"#cc2233":"#6a8aaa"})}),l.jsx("button",{type:"button",onClick:()=>I(!0),className:"tl-like-count-btn",style:{color:k?"#cc2233":"#6a8aaa"},children:(r.likes||[]).length})]}),l.jsxs("span",{className:"tl-text-faint-2",style:{fontSize:11,fontFamily:"'Noto Sans SC', sans-serif"},children:["💬 ",te.comments_count||0]})]}),l.jsx(jS,{postId:te.id,visitorId:d,currentProfile:h}),l.jsxs("div",{className:"tl-seal",children:[l.jsx("div",{className:"tl-seal-line-l"}),l.jsx("div",{className:"tl-seal-dot"}),l.jsx("span",{className:"tl-seal-text",children:"IEEE ECU SB"}),l.jsx("div",{className:"tl-seal-dot"}),l.jsx("div",{className:"tl-seal-line-r"})]})]})}),B&&l.jsx(_S,{post:te,onClose:()=>M(!1),onSave:ve=>{le(ve),i(ve)}}),T&&l.jsx(ES,{likes:te.likes,onClose:()=>I(!1)}),X&&l.jsx(tb,{title:"Delete post?",message:"This post, along with its likes and comments, will be permanently deleted and can't be recovered.",onConfirm:Se,onCancel:()=>J(!1),loading:z})]})}async function CS(r,a){const s=r.name.split(".").pop(),i=`posts/${a}/${Date.now()}_${Math.random().toString(36).slice(2)}.${s}`,{error:c}=await re.storage.from(Jm).upload(i,r,{cacheControl:"3600",upsert:!1});if(c)throw c;const{data:d}=re.storage.from(Jm).getPublicUrl(i);return d.publicUrl}function TS({onClose:r,onSubmit:a,currentUser:s}){const[i,c]=v.useState(""),[d,h]=v.useState(""),[p,m]=v.useState([]),[g,y]=v.useState([]),[x,k]=v.useState(!1),[S,N]=v.useState(!1),[C,E]=v.useState(""),B=v.useRef(),M=X=>{const J=Array.from(X);m(z=>[...z,...J]),y(z=>[...z,...J.map(Q=>Q.type.startsWith("image/")?URL.createObjectURL(Q):null)])},T=X=>{m(J=>J.filter((z,Q)=>Q!==X)),y(J=>J.filter((z,Q)=>Q!==X))},I=async()=>{if(!d.trim())return;E(""),N(!0),k(p.length>0);let X=[];try{X=await Promise.all(p.map(z=>CS(z,s.id)))}catch(z){console.error("Upload error:",z),k(!1),N(!1),E(z?.message||"Couldn't upload one of the files. Please try again.");return}k(!1);const J=await a({title:i,content:d,images:X});N(!1),J?.success?r():E(J?.error||"Couldn't share the post. Please try again.")};return l.jsx("div",{className:"tl-modal-backdrop",onClick:X=>X.target===X.currentTarget&&r(),children:l.jsxs("div",{className:"tl-modal tl-reveal",children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:18},children:[l.jsx(Ul,{size:40}),l.jsxs("div",{children:[l.jsx("p",{className:"tl-serif tl-text-heading",style:{fontWeight:700,fontSize:14},children:"IEEE ECU SB"}),l.jsx("p",{className:"tl-text-faint",style:{fontSize:11,fontFamily:"'Noto Sans SC', sans-serif"},children:"New post"})]}),l.jsx("button",{onClick:r,className:"tl-close-btn",style:{marginLeft:"auto",fontSize:22,background:"none",border:"none",cursor:"pointer",lineHeight:1},children:"×"})]}),l.jsxs("div",{className:"tl-ornament",style:{marginBottom:14},children:[l.jsx("div",{className:"tl-ornament-line"}),l.jsx("div",{className:"tl-ornament-dot"}),l.jsx("div",{className:"tl-ornament-dot",style:{background:"rgba(2,50,96,0.2)"}}),l.jsx("div",{className:"tl-ornament-dot"}),l.jsx("div",{className:"tl-ornament-line"})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10,marginBottom:12},children:[l.jsx("input",{type:"text",placeholder:"Title (optional)",value:i,onChange:X=>c(X.target.value),className:"tl-modal-input"}),l.jsx("textarea",{placeholder:"What's happening in the team? Share an update, event, or moment...",value:d,onChange:X=>h(X.target.value),rows:4,className:"tl-modal-input",style:{resize:"none"}})]}),l.jsxs("div",{className:"tl-drop-zone",onDrop:X=>{X.preventDefault(),X.dataTransfer.files.length&&M(X.dataTransfer.files)},onDragOver:X=>X.preventDefault(),onClick:()=>B.current?.click(),children:[l.jsx("input",{ref:B,type:"file",multiple:!0,accept:"image/*,.pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.zip,.mp4,.mov",style:{display:"none"},onChange:X=>M(X.target.files)}),"📎 Click or drag & drop — images, PDFs, docs, videos..."]}),p.length>0&&l.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,margin:"10px 0"},children:p.map((X,J)=>l.jsxs("div",{style:{position:"relative"},children:[g[J]?l.jsx("img",{src:g[J],alt:"",style:{width:60,height:60,objectFit:"cover",borderRadius:10,border:"1px solid rgba(2,50,96,0.1)"}}):l.jsxs("div",{className:"tl-file-placeholder",style:{width:60,height:60,borderRadius:10,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:2},children:[l.jsx(eb,{url:X.name}),l.jsx("span",{className:"tl-text-faint",style:{fontSize:8},children:X.name.split(".").pop()?.toUpperCase()})]}),l.jsx("button",{onClick:z=>{z.stopPropagation(),T(J)},className:"tl-remove-file-btn",style:{position:"absolute",top:-6,right:-6,width:18,height:18,borderRadius:"50%",color:"#fff",border:"none",fontSize:11,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:"×"})]},J))}),C&&l.jsxs("p",{style:{color:"#cc2233",fontSize:12,marginTop:4,marginBottom:8,fontFamily:"'Noto Sans SC', sans-serif"},children:["⚠ ",C]}),l.jsx("button",{onClick:I,disabled:!d.trim()||S,className:"tl-btn-primary",style:{marginTop:6},children:x?"Uploading files...":S?"Sharing...":"Share Post"})]})})}function AS(){const{user:r}=hS(),[a,s]=v.useState([]),[i,c]=v.useState(!0),[d,h]=v.useState(!1),[p,m]=v.useState(null),[g]=v.useState(()=>pS()),[y,x]=v.useState(""),[k,S]=v.useState(()=>new Set);v.useEffect(()=>{if(!r){m(null);return}re.from("profiles").select("*").eq("id",r.id).maybeSingle().then(({data:z})=>{z&&m(z)})},[r?.id]);const N=fS(p),C=Qg(r,g),E=r?p?.full_name||p?.first_name||"Member":"Guest",B=async()=>{try{const{data:z,error:Q}=await re.from("ieee_posts").select("*").order("created_at",{ascending:!1});if(Q){console.error("fetchPosts error:",Q.message);return}const te=z||[],{data:le,error:fe}=await re.from("ieee_post_likes").select("*");if(fe){console.error("fetchLikes error:",fe.message),s(te);return}const ce=le||[],Se=te.map(ve=>({...ve,likes:ce.filter(Me=>Me.post_id===ve.id).map(Me=>({id:Me.liker_key,name:Me.liker_name}))}));s(Se)}catch(z){console.error("fetchPosts exception:",z)}finally{c(!1)}};v.useEffect(()=>{B();const z=re.channel("ieee_posts_rt").on("postgres_changes",{event:"INSERT",schema:"public",table:"ieee_posts"},Q=>{s(te=>te.find(le=>le.id===Q.new.id)?te:[Q.new,...te])}).subscribe();return()=>re.removeChannel(z)},[]);const M=async({title:z,content:Q,images:te})=>{if(!r)return{success:!1,error:"You need to be logged in to post."};const le={author_id:r.id,author_role:p?.role||"member",title:z||null,content:Q,images:te,likes:[],comments_count:0},{error:fe,data:ce}=await re.from("ieee_posts").insert([le]).select().single();return!fe&&ce?(s(Se=>Se.find(ve=>ve.id===ce.id)?Se:[ce,...Se]),{success:!0}):(console.error("Insert error:",fe?.message),await B(),{success:!1,error:fe?.message||"Something went wrong. Please try again."})},T=async z=>{if(!(!C||k.has(z))){S(Q=>{const te=new Set(Q);return te.add(z),te});try{const{data:Q,error:te}=await re.from("ieee_post_likes").select("id").eq("post_id",z).eq("liker_key",C).maybeSingle();if(te){console.error("like check error:",te.message);return}if(Q){const{error:le}=await re.from("ieee_post_likes").delete().eq("id",Q.id);if(le){console.error("unlike error:",le.message);return}s(fe=>fe.map(ce=>ce.id!==z?ce:{...ce,likes:(ce.likes||[]).filter(Se=>Se.id!==C)}))}else{const{error:le}=await re.from("ieee_post_likes").insert({post_id:z,liker_key:C,liker_name:E});if(le){le.code==="23505"?console.log("Like already exists."):console.error("like insert error:",le.message);return}s(fe=>fe.map(ce=>{if(ce.id!==z)return ce;const Se=ce.likes||[];return Se.some(Me=>Me.id===C)?ce:{...ce,likes:[...Se,{id:C,name:E}]}}))}}catch(Q){console.error("handleLike error:",Q)}finally{S(Q=>{const te=new Set(Q);return te.delete(z),te})}}},I=async z=>{const{error:Q}=await re.from("ieee_posts").delete().eq("id",z);if(Q){console.error("Delete post error:",Q.message);return}s(te=>te.filter(le=>le.id!==z))},X=z=>{s(Q=>Q.map(te=>te.id===z.id?z:te))},J=y.trim()?a.filter(z=>(z.title||"").toLowerCase().includes(y.toLowerCase())||(z.content||"").toLowerCase().includes(y.toLowerCase())):a;return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:wS}),l.jsxs("div",{className:"tl-root tl-page-bg transition-colors duration-500",style:{minHeight:"100vh"},children:[yS.map((z,Q)=>l.jsx("div",{className:"tl-glow",style:{top:z.top,left:z.left,width:z.size,height:z.size,background:`radial-gradient(circle, ${z.color} 0%, transparent 70%)`,animationDuration:`${z.duration}, ${parseFloat(z.duration)*.5}s`,animationDelay:`${z.delay}, ${z.delay}`}},Q)),vS.map((z,Q)=>l.jsx("span",{className:`tl-bg-char tl-bg-char-${z.tint} ${z.hideMobile?"hidden md:block":""}`,style:{fontSize:z.size,color:z.tint==="blue"?"rgba(2,50,96,0.14)":"rgba(204,34,51,0.16)",...z.pos,"--tl-rot":`${z.rotate}deg`,transform:`rotate(${z.rotate}deg)`,animationDelay:z.delay},children:z.char},Q)),l.jsx("div",{className:"tl-petals-fixed",children:xS.map((z,Q)=>l.jsx("div",{className:"tl-petal",style:{left:z.left,background:z.color,animationDuration:z.duration,animationDelay:z.delay,transform:`scale(${z.size})`,opacity:z.size>1.4?.4:void 0}},Q))}),l.jsx("div",{style:{position:"fixed",height:"90vh",width:"100%",overflow:"hidden",top:0,left:0,zIndex:0},children:l.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",paddingBottom:180},children:[l.jsx("p",{className:"tl-hero-sub tl-reveal",style:{animationDelay:"0.1s"},children:"二〇二五 · IEEE ECU SB"}),l.jsxs("h1",{className:"tl-hero-title tl-reveal",style:{animationDelay:"0.25s"},children:["Discover what's happening",l.jsx("br",{}),"in our community."]}),l.jsxs("div",{className:"tl-reveal",style:{display:"flex",alignItems:"center",gap:6,marginTop:12,animationDelay:"0.4s"},children:[l.jsx("div",{className:"tl-hero-divider-line"}),l.jsx("span",{style:{color:"rgba(204,34,51,0.7)",fontSize:13},children:"❖"}),l.jsx("div",{className:"tl-hero-divider-line"})]})]})}),l.jsxs("div",{style:{maxWidth:760,margin:"0 auto",padding:"0 16px 80px",paddingTop:350,position:"relative",zIndex:10},children:[l.jsxs("div",{className:"tl-search tl-reveal",style:{animationDelay:"0.45s"},children:[l.jsx("span",{className:"tl-search-icon",children:"🔍"}),l.jsx("input",{type:"text",value:y,onChange:z=>x(z.target.value),placeholder:"Search posts..."}),y&&l.jsx("button",{onClick:()=>x(""),className:"tl-search-clear",children:"×"})]}),N&&l.jsx("div",{className:"tl-composer tl-reveal",style:{animationDelay:"0.55s"},children:l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[l.jsx(Ul,{size:36}),l.jsx("button",{onClick:()=>h(!0),className:"tl-composer-btn",children:"Share something with the team..."})]})}),i?l.jsx("div",{className:"tl-text-faint tl-reveal",style:{textAlign:"center",padding:"60px 0",fontSize:13,fontFamily:"'Noto Sans SC', sans-serif"},children:"Loading posts..."}):J.length===0?l.jsx("div",{className:"tl-text-faint-2 tl-reveal",style:{textAlign:"center",padding:"16px 0",fontSize:13,fontFamily:"'Noto Serif SC', serif"},children:y?`No posts found for "${y}"`:"No posts yet. 暂无内容"}):J.map((z,Q)=>l.jsx(NS,{post:z,onLike:T,onDelete:I,onEdit:X,currentUser:r,visitorId:g,currentProfile:p,canPost:N,likerName:E,isLiking:k.has(z.id),revealDelay:`${.6+Math.min(Q,8)*.07}s`},z.id))]})]}),d&&l.jsx(TS,{onClose:()=>h(!1),onSubmit:M,currentUser:r})]})}const RS=[{char:"設",top:"-8%",left:"-6%",size:220,tint:"blue",rotate:-8,delay:"0s"},{char:"定",top:"auto",bottom:"-8%",right:"-6%",size:220,tint:"red",rotate:10,delay:"1.8s"},{char:"新",top:"5%",right:"3%",size:100,tint:"red",rotate:-6,delay:"0.9s"},{char:"來",top:"auto",bottom:"6%",left:"4%",size:100,tint:"blue",rotate:6,delay:"3.2s"},{char:"邀",top:"32%",left:"-4%",size:75,tint:"blue",rotate:5,delay:"2.5s",hideMobile:!0},{char:"享",top:"34%",right:"-4%",size:75,tint:"red",rotate:-5,delay:"1.1s",hideMobile:!0},{char:"接",top:"60%",left:"-4%",size:65,tint:"red",rotate:-4,delay:"3.6s",hideMobile:!0},{char:"连",top:"62%",right:"-4%",size:65,tint:"blue",rotate:4,delay:"0.4s",hideMobile:!0},{char:"設",top:"9%",left:"18%",size:55,tint:"red",rotate:6,delay:"2.1s",hideMobile:!0},{char:"定",top:"auto",bottom:"9%",right:"20%",size:55,tint:"blue",rotate:-6,delay:"1.4s",hideMobile:!0}];function zS(){const[r,a]=v.useState(!1),[s,i]=v.useState(""),[c,d]=v.useState(!1);v.useEffect(()=>{(async()=>{const{data:{user:g}}=await re.auth.getUser();if(g){const y=`${window.location.origin}/IEEE-ECU-SB-Website/signup`;i(`${y}?ref=${g.id}`)}})()},[]);const h=()=>{s&&(navigator.clipboard.writeText(s),a(!0),setTimeout(()=>a(!1),2e3))},p=async()=>{s&&(navigator.share?(await navigator.share({title:"Join IEEE ECU SB",text:"Register to join the IEEE ECU Student Branch:",url:s}),d(!0),setTimeout(()=>d(!1),2e3)):h())};return l.jsxs("div",{className:"st-card st-fadein",children:[l.jsx("div",{className:"st-card-glow"}),l.jsx("span",{className:"st-card-watermark",children:"邀"}),l.jsxs("div",{className:"st-card-head",children:[l.jsx("div",{className:"st-card-icon",children:l.jsx(wn,{size:19})}),l.jsxs("div",{children:[l.jsx("p",{className:"st-card-title",children:"Invite a member"}),l.jsx("p",{className:"st-card-sub",children:"Share your personal link — new members choose their own tier and position when they register."})]})]}),l.jsxs("div",{className:"st-link-box",children:[l.jsx(Uv,{size:14,className:"st-link-icon"}),l.jsx("span",{className:"st-link-text",children:s||"Generating your link…"}),l.jsx("button",{onClick:h,disabled:!s,className:`st-copy-btn ${r?"copied":""}`,children:r?l.jsxs(l.Fragment,{children:[l.jsx(hr,{size:13})," Copied"]}):l.jsxs(l.Fragment,{children:[l.jsx(vg,{size:13})," Copy"]})})]}),l.jsxs("button",{onClick:p,disabled:!s,className:"st-share-btn",children:[l.jsx(o1,{size:15}),c?"Shared!":"Share invite link"]}),l.jsx("p",{className:"st-card-footnote",children:"You'll get an email and an in-app notification the moment someone signs up through your link."})]})}function OS(){return l.jsxs("div",{className:"st-soon st-fadein",children:[l.jsx("span",{className:"st-soon-icon",children:l.jsx(Al,{size:16})}),l.jsxs("div",{children:[l.jsx("p",{className:"st-soon-title",children:"More settings on the way"}),l.jsx("p",{className:"st-soon-sub",children:"We're working on more controls — check back soon."})]})]})}function DS(){const[r,a]=v.useState("");v.useEffect(()=>{(async()=>{const{data:{user:c}}=await re.auth.getUser();if(!c)return;const{data:d}=await re.from("profiles").select("tier").eq("id",c.id).single();d&&a((d.tier||"").toLowerCase().trim())})()},[]);const s=["highboard","board"].includes(r);return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Serif+Display&family=Noto+Serif+SC:wght@700&display=swap');

        .st-root {
          min-height: 100vh;
          font-family: 'DM Sans', sans-serif;
          background: linear-gradient(to bottom, #f5f8fb, #d3dde8);
          position: relative;
          overflow: hidden;
          transition: background 0.5s ease, background-color 0.5s ease, color 0.5s ease;
        }
        .dark .st-root {
          background:
            radial-gradient(ellipse 900px 650px at 10% 0%, rgba(13,90,167,0.22), transparent 60%),
            radial-gradient(ellipse 800px 600px at 90% 20%, rgba(217,37,37,0.16), transparent 60%),
            linear-gradient(to bottom, #001233, #00040c 65%, #00040c);
        }

        /* ── background CJK characters, drifting ── */
        .st-bg-layer { position: absolute; inset: 0; z-index: 0; overflow: hidden; pointer-events: none; }
        .st-bg-char {
          position: absolute;
          font-family: 'Noto Serif SC', 'PingFang SC', 'Songti SC', 'SimSun', serif;
          font-weight: 900;
          line-height: 1;
          user-select: none;
          opacity: 0.05;
          animation: stCharDrift 15s ease-in-out infinite;
          transition: color 0.4s ease, opacity 0.4s ease;
        }
        @keyframes stCharDrift {
          0%, 100% { transform: translate3d(0,0,0) rotate(var(--st-rot, 0deg)); }
          50%      { transform: translate3d(0,-14px,0) rotate(calc(var(--st-rot, 0deg) + 0.6deg)); }
        }
        .st-bg-char-blue { color: #023260; }
        .st-bg-char-red  { color: #D92525; }
        .dark .st-bg-char-blue { color: #4a9eff; opacity: 0.18; filter: drop-shadow(0 0 20px rgba(74,158,255,0.28)); }
        .dark .st-bg-char-red  { color: #ff5b5b; opacity: 0.16; filter: drop-shadow(0 0 20px rgba(217,37,37,0.3)); }

        .st-wrap {
          position: relative;
          z-index: 10;
          width: 100%;
          padding: 100px 16px 64px;
        }
        @media (min-width: 640px)  { .st-wrap { padding-left: 24px; padding-right: 24px; } }
        @media (min-width: 1024px) { .st-wrap { padding-left: 40px; padding-right: 40px; } }
        @media (min-width: 1280px) { .st-wrap { padding-left: 64px; padding-right: 64px; } }

        .st-header { margin-bottom: 28px; text-align: center; }
        .st-eyebrow {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase;
          color: #D92525; margin-bottom: 8px;
        }
        .st-title {
          font-family: 'DM Serif Display', serif;
          font-size: 28px;
          color: #023260;
          transition: color 0.4s ease;
        }
        .dark .st-title { color: #f5f8fb; }
        .st-subtitle { font-size: 13px; color: #7d8794; margin-top: 6px; transition: color 0.4s ease; }
        .dark .st-subtitle { color: #8fa2b8; }

        .st-fadein { animation: stFadeUp 0.5s ease both; }
        @keyframes stFadeUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }

        /* ── shared glass card shell ── */
        .st-card, .st-soon {
          position: relative;
          border-radius: 22px;
          background: rgba(255,255,255,0.55);
          border: 1px solid rgba(255,255,255,0.6);
          box-shadow: 0 10px 30px rgba(2,50,96,0.08);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          overflow: hidden;
          padding: 26px 26px 24px;
          margin-bottom: 22px;
          transition: background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
        }
        .dark .st-card, .dark .st-soon {
          background: rgba(255,255,255,0.045);
          border-color: rgba(255,255,255,0.1);
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
        }

        .st-card-glow {
          position: absolute;
          top: -40%; left: -10%;
          width: 60%; height: 140%;
          background: radial-gradient(circle, rgba(2,50,96,0.08), transparent 70%);
          pointer-events: none;
        }
        .dark .st-card-glow {
          background: radial-gradient(circle, rgba(74,158,255,0.14), transparent 70%);
        }
        .st-card-watermark {
          position: absolute;
          top: -14px; right: -6px;
          font-family: 'Noto Serif SC', serif;
          font-size: 110px;
          font-weight: 900;
          color: #023260;
          opacity: 0.05;
          pointer-events: none;
          line-height: 1;
        }
        .dark .st-card-watermark { color: #4a9eff; opacity: 0.1; }

        .st-card-head { display: flex; gap: 14px; align-items: flex-start; position: relative; z-index: 1; margin-bottom: 18px; }
        .st-card-icon {
          flex-shrink: 0;
          width: 42px; height: 42px;
          border-radius: 13px;
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, #023260, #0d5aa7);
          color: #fff;
          box-shadow: 0 6px 16px rgba(2,50,96,0.3);
        }
        .st-card-title { font-size: 15px; font-weight: 700; color: #023260; transition: color 0.4s ease; }
        .dark .st-card-title { color: #f5f8fb; }
        .st-card-sub { font-size: 12.5px; color: #7d8794; margin-top: 3px; line-height: 1.5; transition: color 0.4s ease; }
        .dark .st-card-sub { color: #8fa2b8; }

        .st-link-box {
          position: relative; z-index: 1;
          display: flex; align-items: center; gap: 9px;
          background: rgba(2,50,96,0.045);
          border: 1px solid rgba(2,50,96,0.12);
          border-radius: 13px;
          padding: 10px 12px;
          margin-bottom: 14px;
          transition: background 0.4s ease, border-color 0.4s ease;
        }
        .dark .st-link-box { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.14); }
        .st-link-icon { color: #023260; flex-shrink: 0; opacity: 0.6; }
        .dark .st-link-icon { color: #7db3f5; }
        .st-link-text {
          flex: 1; min-width: 0;
          font-size: 12px; color: #4b5563;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
          user-select: all;
          transition: color 0.4s ease;
        }
        .dark .st-link-text { color: #c3ccd6; }
        .st-copy-btn {
          flex-shrink: 0;
          display: flex; align-items: center; gap: 5px;
          font-size: 11.5px; font-weight: 600;
          padding: 6px 12px;
          border-radius: 9px;
          border: none;
          color: #fff;
          background: #023260;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.1s ease;
        }
        .st-copy-btn:hover:not(:disabled) { background: #012040; }
        .st-copy-btn:active:not(:disabled) { transform: scale(0.96); }
        .st-copy-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .st-copy-btn.copied { background: #059669; }

        .st-share-btn {
          position: relative; z-index: 1;
          width: 100%;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          font-size: 13px; font-weight: 600;
          padding: 11px;
          border-radius: 25px;
          border: none;
          color: #fff;
          cursor: pointer;
          background: linear-gradient(115deg, #7a1220, #D92525 45%, #ff6b4a 75%, #D92525);
          background-size: 220% 220%;
          background-position: 0% 50%;
          box-shadow: 0 8px 20px rgba(217,37,37,0.3);
          transition: background-position 0.6s ease, transform 0.15s ease, box-shadow 0.35s ease;
        }
        .st-share-btn:hover:not(:disabled) { background-position: 100% 50%; box-shadow: 0 10px 24px rgba(217,37,37,0.42); }
        .st-share-btn:active:not(:disabled) { transform: scale(0.99); }
        .st-share-btn:disabled { opacity: 0.5; cursor: not-allowed; }

        .st-card-footnote {
          position: relative; z-index: 1;
          font-size: 11px; color: #9aa5b1;
          margin-top: 12px; text-align: center;
          transition: color 0.4s ease;
        }
        .dark .st-card-footnote { color: #6c7c8e; }
        /* ── Coming soon card ── */
        .st-soon {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px 20px;
          justify-content: center;
          text-align: left;
        }
        .st-soon-icon {
          flex-shrink: 0;
          width: 38px;
          height: 38px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(2,50,96,0.08);
          color: #023260;
          transition: background 0.4s ease, color 0.4s ease;
        }
        .dark .st-soon-icon {
          background: rgba(74,158,255,0.14);
          color: #7db3f5;
        }
        .st-soon-title {
          font-size: 13.5px;
          font-weight: 700;
          color: #023260;
          transition: color 0.4s ease;
        }
        .dark .st-soon-title { color: #f5f8fb; }
        .st-soon-sub {
          font-size: 12px;
          color: #9aa5b1;
          margin-top: 2px;
          transition: color 0.4s ease;
        }
        .dark .st-soon-sub { color: #8fa2b8; }
        @media (max-width: 480px) {
          .st-wrap { padding: 80px 14px 48px; }
          .st-title { font-size: 23px; }
          .st-card, .st-soon { padding: 20px 18px 20px; border-radius: 18px; }
        }
      `}),l.jsxs("div",{className:"st-root transition-colors duration-500",children:[l.jsx("div",{className:"st-bg-layer",children:RS.map((i,c)=>{const d={fontSize:i.size,"--st-rot":`${i.rotate}deg`,transform:`rotate(${i.rotate}deg)`,animationDelay:i.delay};return i.top!==void 0&&(d.top=i.top),i.bottom!==void 0&&(d.bottom=i.bottom),i.left!==void 0&&(d.left=i.left),i.right!==void 0&&(d.right=i.right),l.jsx("span",{className:`st-bg-char st-bg-char-${i.tint} ${i.hideMobile?"hidden md:block":""}`,style:d,children:i.char},c)})}),l.jsxs("div",{className:"st-wrap",children:[l.jsxs("div",{className:"st-header st-fadein",children:[l.jsxs("span",{className:"st-eyebrow",children:[l.jsx(Al,{size:12})," Settings"]}),l.jsx("h1",{className:"st-title",children:"Your Settings"}),l.jsx("p",{className:"st-subtitle",children:"A quieter, simpler settings page — more controls are on the way."})]}),s&&l.jsx(zS,{}),l.jsx(OS,{})]})]})]})}const MS=[{left:"8%",color:"#cc2233",duration:"9s",delay:"0s"},{left:"25%",color:"#023260",duration:"11s",delay:"2s"},{left:"50%",color:"#cc2233",duration:"12s",delay:"4.5s"},{left:"72%",color:"#023260",duration:"13s",delay:"1s"},{left:"90%",color:"#cc2233",duration:"10s",delay:"3s"}],LS=[{char:"电",top:"auto",bottom:"-2%",left:"-3%",size:220,tint:"blue",rotate:-6,delay:"0s"},{char:"员",top:"5%",right:"-3%",size:150,tint:"red",rotate:8,delay:"1.6s"},{char:"工",top:"36%",left:"3%",size:110,tint:"blue",rotate:4,delay:"3.1s"},{char:"创",top:"auto",bottom:"8%",right:"5%",size:130,tint:"red",rotate:-9,delay:"0.8s"},{char:"网",top:"56%",left:"-2%",size:170,tint:"blue",rotate:5,delay:"2.4s"},{char:"络",top:"78%",left:"34%",size:90,tint:"blue",rotate:-7,delay:"3.8s",hideMobile:!0},{char:"技",top:"auto",bottom:"28%",right:"33%",size:80,tint:"red",rotate:6,delay:"1.1s",hideMobile:!0},{char:"智",top:"48%",right:"22%",size:75,tint:"red",rotate:9,delay:"2.9s",hideMobile:!0},{char:"友",top:"auto",bottom:"40%",left:"50%",size:85,tint:"blue",rotate:-5,delay:"0.5s",hideMobile:!0},{char:"会",top:"84%",right:"42%",size:70,tint:"red",rotate:4,delay:"3.3s",hideMobile:!0},{char:"队",top:"30%",right:"12%",size:65,tint:"blue",rotate:-8,delay:"1.9s",hideMobile:!0},{char:"程",top:"52%",right:"-3%",size:140,tint:"red",rotate:-4,delay:"2.1s",hideMobile:!0},{char:"能",top:"88%",left:"22%",size:110,tint:"blue",rotate:7,delay:"1.3s",hideMobile:!0}],US=[{icon:bv,title:"Global IEEE Network",desc:"Full access to IEEE Xplore, technical papers, and a worldwide community of engineers."},{icon:av,title:"Certificates & Recognition",desc:"Official certificates for workshops, competitions, and volunteering hours."},{icon:Es,title:"Events & Workshops",desc:"Priority access and discounted or free entry to all branch events."},{icon:Al,title:"Leadership Opportunities",desc:"Join committees, lead projects, and build a real CV before you graduate."}],BS=[{q:"What's the difference between branch membership and global IEEE membership?",a:"Steps 1 and 2 create your official global IEEE account on ieee.org. Steps 3 and 4 register you with the ECU branch so you get local benefits like events and workshops."},{q:"How long does it take to get accepted?",a:"Our webmaster reviews new registrations regularly. Once you're accepted, step 4 unlocks and you can pay your membership fee."},{q:"What if I made a mistake in my registration details?",a:"Reach out to us via social media or the email in the footer and we'll help you correct your username or email."},{q:"Can I pay another way besides Vodafone Cash?",a:"Currently payment is only available via Vodafone Cash, and it only opens up after your registration is accepted. If you need another method, contact us and we'll find a suitable solution."}],Zm="010XXXXXXXX",Qm="150 EGP",HS="https://www.ieee.org/profile/public/createwebaccount/showCreateAccountPage.html",$S="https://www.ieee.org/membership/join/index.html";function PS(){const r=ca(),[a,s]=v.useState(!1);v.useEffect(()=>{const A=()=>{s(window.scrollY>420)};return A(),window.addEventListener("scroll",A,{passive:!0}),()=>window.removeEventListener("scroll",A)},[]);const i=()=>{window.scrollTo({top:0,behavior:"smooth"})};v.useEffect(()=>{if(!r.hash)return;const A=r.hash.replace("#",""),q=setTimeout(()=>{const F=document.getElementById(A);if(F){const ne=F.getBoundingClientRect().top+window.scrollY-100;window.scrollTo({top:ne,behavior:"smooth"})}},150);return()=>clearTimeout(q)},[r]),v.useEffect(()=>{const A=new IntersectionObserver(q=>{q.forEach(F=>{F.isIntersecting?F.target.classList.add("in-view"):F.target.classList.remove("in-view")})},{threshold:.12});return document.querySelectorAll(".reveal-auto, .reveal-left-auto, .reveal-right-auto").forEach(q=>A.observe(q)),()=>A.disconnect()},[]);const[c,d]=v.useState(null),[h,p]=v.useState(1),[m,g]=v.useState(1),y=A=>{A<=m&&p(A)},x=A=>{p(A),g(q=>Math.max(q,A))},[k,S]=v.useState(!1),[N,C]=v.useState(!1),[E,B]=v.useState({username:"",email:"",password:""}),[M,T]=v.useState(!1),[I,X]=v.useState(""),[J,z]=v.useState(!1),Q=A=>{B({...E,[A.target.name]:A.target.value})},te=async A=>{if(A.preventDefault(),X(""),!E.username||!E.email||!E.password){X("Please fill in all fields.");return}if(E.password.length<6){X("Password should be at least 6 characters.");return}T(!0);try{const{data:q,error:F}=await re.auth.signUp({email:E.email,password:E.password});if(F)throw F;const{error:ne}=await re.from("member_registrations").insert([{user_id:q?.user?.id||null,username:E.username,email:E.email,status:"pending"}]);if(ne)throw ne}catch(q){console.error(q)}finally{z(!0),T(!1)}},[le,fe]=v.useState(!1),[ce,Se]=v.useState(""),[ve,Me]=v.useState(null),[O,ee]=v.useState(!1),[ae,xe]=v.useState(!1),Z=async()=>{try{await navigator.clipboard.writeText(Zm),fe(!0),setTimeout(()=>fe(!1),2e3)}catch{}},_=async A=>{A.preventDefault(),ee(!0),setTimeout(()=>{ee(!1),xe(!0)},600)};return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`

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
        /* ── Chinese bg characters ── drifting motion; kept deliberately
           lighter and simpler (no glow) in dark mode so they read as a
           quiet watermark instead of competing with the content. All color
           and opacity changes fade smoothly on light/dark toggle. */
        .ab-bg-char {
          position: absolute;
          font-family: 'Noto Serif SC', 'PingFang SC', 'Songti SC', 'SimSun', serif;
          font-weight: 900;
          pointer-events: none;
          user-select: none;
          line-height: 1;
          z-index: 0;
          animation: abCharDrift 14s ease-in-out infinite;
          transition: color 0.4s ease, opacity 0.4s ease, filter 0.4s ease;
        }
        @keyframes abCharDrift {
          0%, 100% { transform: translate3d(0,0,0) rotate(var(--ab-rot, 0deg)); }
          50%      { transform: translate3d(0,-16px,0) rotate(calc(var(--ab-rot, 0deg) + 0.8deg)); }
        }
        .dark .ab-bg-char-blue {
          color: #4a9eff !important;
          opacity: 0.12;
          filter: none;
        }
        .dark .ab-bg-char-red {
          color: #ff5b5b !important;
          opacity: 0.11;
          filter: none;
        }
        @media (prefers-reduced-motion: reduce) {
          .ab-bg-char { animation: none !important; }
        }
        .ab-petal {
          position: fixed;
          width: 7px;
          height: 11px;
          border-radius: 80% 0 80% 0;
          opacity: 0;
          animation: abFallPetal linear infinite;
          top: -20px;
          z-index: 0;
          pointer-events: none;
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

        /* ── Scroll-to-top button (same as About page) ── */
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

      `}),l.jsxs("div",{className:"ab-root text-gray-800 dark:text-gray-100 pb-24",children:[LS.map((A,q)=>{const F={fontSize:A.size,"--ab-rot":`${A.rotate}deg`,transform:`rotate(${A.rotate}deg)`,animationDelay:A.delay,color:A.tint==="blue"?"rgba(2,50,96,0.13)":"rgba(204,34,51,0.13)"};return A.top!==void 0&&(F.top=A.top),A.bottom!==void 0&&(F.bottom=A.bottom),A.left!==void 0&&(F.left=A.left),A.right!==void 0&&(F.right=A.right),l.jsx("span",{className:`ab-bg-char ab-bg-char-${A.tint} ${A.hideMobile?"hidden md:block":""}`,style:F,children:A.char},q)}),MS.map((A,q)=>l.jsx("div",{className:"ab-petal",style:{left:A.left,background:A.color,animationDuration:A.duration,animationDelay:A.delay}},q)),l.jsx("button",{type:"button",onClick:i,"aria-label":"Back to top",className:`ab-scroll-top ${a?"visible":""}`,children:l.jsx(fu,{size:22,className:"ab-scroll-top-arrow",strokeWidth:2.5})}),l.jsxs("main",{className:"max-w-7xl mx-auto px-6 md:px-10 pt-32 flex flex-col gap-12 relative z-10",children:[l.jsx("div",{className:"reveal-auto relative pl-4 md:pl-8 w-full",children:l.jsxs("div",{className:"relative",children:[l.jsx("div",{className:"absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-[#D92525] opacity-20"}),l.jsxs("h1",{className:"text-2xl md:text-3xl font-extrabold pb-2 text-[#023260] dark:text-white relative",children:["Membership ",l.jsx("span",{className:"text-[#D92525]",children:"."}),l.jsx("span",{className:"absolute -top-2 right-4 w-8 h-8 bg-[#023260] dark:bg-[#0d5aa7] text-white text-xs flex items-center justify-center rounded-sm opacity-90 shadow-sm transform rotate-12",children:"IEEE"})]}),l.jsxs("h2",{className:"text-xl font-semibold text-[#023260] dark:text-white mb-3 pt-3 flex items-center gap-3",children:[l.jsx("span",{className:"w-1 h-5 bg-[#D92525] rounded-full"}),"Join the IEEE family"]}),l.jsx("p",{className:"text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-base max-w-3xl",children:"Membership opens the door to IEEE events, workshops, and a global network — locally with the branch and globally with IEEE.org. Create your IEEE account, register with our branch, and once the webmaster accepts your request you'll unlock the final step to pay your membership fee."}),l.jsxs("a",{href:"#join",className:"inline-flex items-center gap-2 text-[#023260] dark:text-white font-bold hover:text-[#D92525] dark:hover:text-[#D92525] transition group",children:["Start the registration process",l.jsx("span",{className:"group-hover:translate-x-1 transition-transform",children:"↓"})]})]})}),l.jsxs("section",{children:[l.jsxs("div",{className:"mb-10 text-center reveal-auto",children:[l.jsxs("span",{className:"ab-eyebrow justify-center",children:[l.jsx("span",{className:"stem h-px bg-[#D92525] block"}),l.jsx("span",{className:"text-xs font-semibold tracking-[0.25em] uppercase text-[#D92525]",children:"IEEE membership benifits"}),l.jsx("span",{className:"stem h-px bg-[#D92525] block"})]}),l.jsx("h2",{className:"text-3xl font-bold text-[#023260] dark:text-white mt-4",children:"Why join IEEE?"})]}),l.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-6",children:US.map((A,q)=>{const F=A.icon;return l.jsxs("div",{className:"ab-premium-card reveal-auto",style:{transitionDelay:`${q*.08}s`},children:[l.jsx("div",{className:"ab-premium-icon",children:l.jsx(F,{size:22})}),l.jsx("h3",{className:"font-bold text-[#023260] dark:text-white mb-2",children:A.title}),l.jsx("p",{className:"text-gray-600 dark:text-gray-300 text-sm leading-relaxed",children:A.desc})]},q)})})]}),l.jsxs("section",{id:"join",children:[l.jsxs("div",{className:"mb-10 text-center reveal-auto",children:[l.jsxs("span",{className:"ab-eyebrow justify-center",children:[l.jsx("span",{className:"stem h-px bg-[#D92525] block"}),l.jsx("span",{className:"text-xs font-semibold tracking-[0.25em] uppercase text-[#D92525]",children:"How It Works"}),l.jsx("span",{className:"stem h-px bg-[#D92525] block"})]}),l.jsx("h2",{className:"text-3xl font-bold text-[#023260] dark:text-white mt-4",children:"How to Join"}),l.jsx("p",{className:"text-gray-600 dark:text-gray-300 mt-3 max-w-xl mx-auto",children:"Go through each step and hit Next when you're done. The last step, payment, only opens once our webmaster reviews and accepts your registration."})]}),l.jsxs("div",{className:"w-full",children:[l.jsx("div",{className:"flex items-center w-full mb-10 reveal-auto",children:[1,2,3,4].map(A=>{const q=A===1&&k||A===2&&N||A===3&&J||A===4&&ae,F=A>m;return l.jsxs(Au.Fragment,{children:[l.jsx("button",{type:"button",onClick:()=>y(A),disabled:F,className:`mb-dot ${q?"done":""} ${h===A?"active":""} ${F?"locked":""}`,"aria-label":`Step ${A}`,children:q?l.jsx(hr,{size:18}):F?l.jsx(Kr,{size:14}):A}),A<4&&l.jsx("div",{className:`mb-dot-line ${A<m?"done":""}`})]},A)})}),l.jsxs("div",{className:"mb-step-panel",children:[h===1&&l.jsxs("div",{className:"flex flex-col items-center text-center",children:[l.jsx("div",{className:`mb-step-icon mb-3 ${k?"done":""}`,children:k?l.jsx(hr,{size:20}):l.jsx(pu,{size:20})}),l.jsx("span",{className:"mb-step-num",children:"Step 1 of 4"}),l.jsx("h3",{className:"font-bold text-[#023260] dark:text-white text-lg mb-3",children:"Create your IEEE account"}),l.jsx("p",{className:"text-gray-600 dark:text-gray-300 leading-relaxed mb-6 max-w-3xl",children:"Head to the official IEEE website and create your personal IEEE account. This is your global IEEE identity — you'll use the same email and password to sign in on ieee.org from now on. It only takes a couple of minutes: enter your name, email, and a password, then confirm your email address."}),l.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4",children:[l.jsx("a",{href:HS,target:"_blank",rel:"noopener noreferrer",className:"ab-btn-outline-blue",children:"Go to IEEE →"}),l.jsx("button",{type:"button",onClick:()=>{S(!0),x(2)},className:"ab-btn-gradient",children:"Next →"})]})]}),h===2&&l.jsxs("div",{className:"flex flex-col items-center text-center",children:[l.jsx("div",{className:`mb-step-icon mb-3 ${N?"done":""}`,children:N?l.jsx(hr,{size:20}):l.jsx(uv,{size:20})}),l.jsx("span",{className:"mb-step-num",children:"Step 2 of 4"}),l.jsx("h3",{className:"font-bold text-[#023260] dark:text-white text-lg mb-3",children:"Open the membership page"}),l.jsx("p",{className:"text-gray-600 dark:text-gray-300 leading-relaxed mb-6 max-w-3xl",children:"From your new IEEE account, open the official membership page and take a look at the global membership options available to you (student, graduate, and so on). You don't need to complete a payment there — this just links your global IEEE profile to a membership type."}),l.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4",children:[l.jsx("a",{href:$S,target:"_blank",rel:"noopener noreferrer",className:"ab-btn-outline-blue",children:"Open membership page →"}),l.jsx("button",{type:"button",onClick:()=>{C(!0),x(3)},className:"ab-btn-gradient",children:"Next →"})]})]}),h===3&&l.jsxs("div",{className:"flex flex-col items-center text-center",children:[l.jsx("div",{className:`mb-step-icon mb-3 ${J?"done":""}`,children:J?l.jsx(hr,{size:20}):l.jsx(wn,{size:20})}),l.jsx("span",{className:"mb-step-num",children:"Step 3 of 4"}),l.jsx("h3",{className:"font-bold text-[#023260] dark:text-white text-lg mb-3",children:"Register with our branch"}),l.jsx("p",{className:"text-gray-600 dark:text-gray-300 leading-relaxed mb-6 max-w-3xl",children:"Now register with the ECU branch itself. Choose a username, set a password, and add the personal email you'd like us to use — that's the address we'll send your acceptance notice to once the webmaster reviews your request."}),J?l.jsxs("div",{className:"max-w-2xl w-full flex flex-col items-center",children:[l.jsxs("div",{className:"flex items-center gap-2 text-sm text-[#023260] dark:text-white bg-white/40 dark:bg-white/5 rounded-xl px-4 py-3 mb-5 backdrop-blur-sm",children:[l.jsx(hr,{size:16,className:"text-green-600 shrink-0"}),"Registered! We'll email ",E.email," once the webmaster reviews your request."]}),l.jsx("button",{type:"button",onClick:()=>x(4),className:"ab-btn-gradient",children:"Next →"})]}):l.jsxs("form",{onSubmit:te,className:"grid sm:grid-cols-2 gap-4 max-w-2xl w-full text-left",children:[l.jsxs("div",{children:[l.jsx("label",{className:"mb-label",children:"Username"}),l.jsx("input",{className:"mb-input",name:"username",value:E.username,onChange:Q,placeholder:"Choose a username"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"mb-label",children:"Personal email"}),l.jsx("input",{className:"mb-input",type:"email",name:"email",value:E.email,onChange:Q,placeholder:"you@example.com"})]}),l.jsxs("div",{className:"sm:col-span-2",children:[l.jsx("label",{className:"mb-label",children:"Password"}),l.jsx("input",{className:"mb-input",type:"password",name:"password",value:E.password,onChange:Q,placeholder:"At least 6 characters"})]}),I&&l.jsxs("div",{className:"sm:col-span-2 flex items-center gap-2 text-[#D92525] text-sm",children:[l.jsx(lv,{size:16}),I]}),l.jsx("div",{className:"sm:col-span-2",children:l.jsx("button",{type:"submit",disabled:M,className:"ab-btn-gradient",children:M?l.jsxs(l.Fragment,{children:[l.jsx(Wp,{size:18,className:"animate-spin"})," ","Registering..."]}):l.jsxs(l.Fragment,{children:[l.jsx(pu,{size:18})," Register"]})})})]})]}),h===4&&l.jsxs("div",{className:"flex flex-col items-center text-center",children:[l.jsx("div",{className:`mb-step-icon mb-3 ${ae?"done":""}`,children:ae?l.jsx(hr,{size:20}):J?l.jsx(w1,{size:20}):l.jsx(Kr,{size:20})}),l.jsx("span",{className:"mb-step-num",children:"Step 4 of 4"}),l.jsx("h3",{className:"font-bold text-[#023260] dark:text-white text-lg mb-3",children:"Pay your membership fee"}),J?l.jsxs("div",{className:"mb-pay-card w-full text-center",children:[l.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-x-10 gap-y-4 mb-5",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-white/50 text-[10px] uppercase tracking-[0.2em] font-semibold mb-1",children:"Fee"}),l.jsx("p",{className:"text-2xl font-extrabold text-white",children:Qm})]}),l.jsxs("div",{className:"bg-white/10 rounded-2xl pl-4 pr-2 py-2 flex items-center gap-3",children:[l.jsx("span",{className:"mb-pay-number tracking-wider",children:Zm}),l.jsx("button",{onClick:Z,className:"mb-copy-btn bg-[#D92525] hover:bg-white hover:text-[#023260] text-white rounded-full p-2 shrink-0","aria-label":"Copy number",type:"button",children:le?l.jsx(hr,{size:16}):l.jsx(vg,{size:16})})]})]}),l.jsxs("p",{className:"text-white/60 text-xs mb-6 max-w-2xl mx-auto leading-relaxed",children:["Open Vodafone Cash or dial"," ",l.jsx("span",{className:"font-mono",children:"*9#"}),", transfer"," ",Qm," to the number above, then keep your transaction ID and receipt handy."]}),l.jsx("div",{className:"pt-6 border-t border-white/15",children:ae?l.jsxs("div",{className:"flex items-center justify-center gap-2 text-sm bg-white/10 rounded-xl px-4 py-3 max-w-2xl mx-auto text-center",children:[l.jsx(hr,{size:16,className:"text-green-400 shrink-0"}),"Thanks! We received your transaction ID and screenshot. Your membership will be activated once we confirm the transfer."]}):l.jsxs("form",{onSubmit:_,className:"flex flex-col items-center gap-4",children:[l.jsx("p",{className:"text-white/70 text-sm max-w-2xl",children:"Submit your transaction ID and a screenshot of the transfer so we can confirm your payment."}),l.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 w-full max-w-2xl text-left",children:[l.jsxs("div",{children:[l.jsx("label",{className:"text-xs font-semibold text-white/70 mb-1.5 block",children:"Vodafone Cash transaction ID"}),l.jsx("input",{className:"w-full rounded-xl px-4 py-2.5 text-sm bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/50",value:ce,onChange:A=>Se(A.target.value),placeholder:"e.g. 123456789012"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"text-xs font-semibold text-white/70 mb-1.5 block",children:"Screenshot of the transfer"}),l.jsx("input",{type:"file",accept:"image/*",onChange:A=>Me(A.target.files?.[0]||null),className:"w-full text-sm text-white/80 rounded-xl bg-white/10 border border-white/20 border-dashed px-3 py-2 file:mr-3 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:bg-[#D92525] file:text-white file:text-xs file:font-semibold"}),ve&&l.jsx("p",{className:"text-white/50 text-xs mt-1.5",children:ve.name})]})]}),l.jsx("button",{type:"submit",disabled:!ce||!ve||O,className:"ab-btn-gradient",children:O?l.jsxs(l.Fragment,{children:[l.jsx(Wp,{size:16,className:"animate-spin"})," ","Submitting..."]}):"Submit payment proof"})]})})]}):l.jsxs("p",{className:"text-gray-500 dark:text-gray-400 leading-relaxed flex items-center justify-center gap-2 text-center",children:[l.jsx(Kr,{size:14})," Complete step 3 first — this step unlocks once the webmaster accepts your registration."]})]})]},h)]})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"mb-10 text-center reveal-auto",children:[l.jsxs("span",{className:"ab-eyebrow justify-center",children:[l.jsx("span",{className:"stem h-px bg-[#D92525] block"}),l.jsx("span",{className:"text-xs font-semibold tracking-[0.25em] uppercase text-[#D92525]",children:"FAQ"}),l.jsx("span",{className:"stem h-px bg-[#D92525] block"})]}),l.jsx("h2",{className:"text-3xl font-bold text-[#023260] dark:text-white mt-4",children:"Frequently Asked Questions"})]}),l.jsx("div",{className:"mb-faq-block reveal-auto flex flex-col gap-3",children:BS.map((A,q)=>l.jsxs("div",{className:`mb-faq-card ${c===q?"open":""}`,children:[l.jsxs("button",{type:"button",onClick:()=>d(c===q?null:q),className:"w-full flex items-center justify-center gap-4 text-center px-4 py-5",children:[l.jsx("span",{className:"font-semibold text-[#023260] dark:text-white text-sm md:text-base",children:A.q}),l.jsx(bn,{size:18,className:`text-[#D92525] shrink-0 transition-transform ${c===q?"rotate-180":""}`})]}),l.jsx("div",{className:`mb-faq-answer ${c===q?"open":""}`,children:l.jsx("p",{className:"text-gray-600 dark:text-gray-300 text-sm leading-relaxed text-center px-4 pb-5 max-w-2xl mx-auto",children:A.a})})]},q))})]}),l.jsxs("section",{className:"ab-cta reveal-auto text-center",children:[l.jsx("span",{className:"ab-cta-char",style:{fontSize:150,top:"-8%",left:"-2%"},children:"会"}),l.jsx("span",{className:"ab-cta-char",style:{fontSize:120,bottom:"-5%",right:"-2%"},children:"员"}),l.jsxs("div",{className:"relative z-10 max-w-2xl mx-auto",children:[l.jsx("span",{className:"text-xs font-semibold tracking-[0.25em] uppercase text-[#D92525]",children:"Global Membership"}),l.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-white mt-3",children:"Looking for Global IEEE Membership?"}),l.jsx("p",{className:"text-white/80 mt-3 mb-8 leading-relaxed",children:"Branch membership connects you to local activities. To enjoy worldwide IEEE benefits, complete your official IEEE membership registration."}),l.jsx("div",{className:"flex flex-wrap items-center justify-center gap-4",children:l.jsx("a",{href:"https://www.ieee.org/membership/join/index.html",target:"_blank",rel:"noopener noreferrer",children:l.jsx("button",{className:"ab-btn-gradient ab-pulse-ring ab-cta-btn font-semibold",children:"Visit IEEE"})})})]})]})]})]})]})}const qS=[{char:"敬",top:"6%",left:"4%",size:160,rotate:-8,delay:"0s"},{char:"请",top:"68%",left:"2%",size:130,rotate:6,delay:"1.8s"},{char:"期",top:"12%",left:"85%",size:190,rotate:10,delay:"0.9s"},{char:"待",top:"64%",left:"88%",size:150,rotate:-12,delay:"2.6s"},{char:"龍",top:"38%",left:"46%",size:230,rotate:4,delay:"3.4s"},{char:"福",top:"88%",left:"58%",size:110,rotate:-6,delay:"1.2s"}],IS=[{left:"8%",duration:"9s",delay:"0s"},{left:"25%",duration:"11s",delay:"2s"},{left:"50%",duration:"8s",delay:"4.5s"},{left:"72%",duration:"13s",delay:"1s"},{left:"90%",duration:"10s",delay:"3s"}];function YS(){return v.useEffect(()=>{document.title="Coming Soon — IEEE ECU SB"},[]),l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
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
      `}),l.jsxs("div",{className:"cs-scene",children:[l.jsx("div",{className:"cs-cjk-layer",children:qS.map((r,a)=>l.jsx("span",{className:"cs-cjk-char",style:{top:r.top,left:r.left,fontSize:r.size,"--cs-rot":`${r.rotate}deg`,transform:`rotate(${r.rotate}deg)`,animationDelay:r.delay},children:r.char},a))}),IS.map((r,a)=>l.jsx("div",{className:"cs-petal",style:{left:r.left,animationDuration:r.duration,animationDelay:r.delay}},a)),l.jsxs("div",{className:"cs-content",children:[l.jsxs("div",{className:"cs-seal-wrap",children:[l.jsx("div",{className:"cs-seal-ring",children:l.jsxs("svg",{viewBox:"0 0 100 100",children:[l.jsx("path",{id:"cs-seal-circle",fill:"none",d:"M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"}),l.jsx("text",{children:l.jsx("textPath",{href:"#cs-seal-circle",startOffset:"0%",children:"IEEE ECU SB • IEEE ECU SB • IEEE ECU SB •"})})]})}),l.jsx("div",{className:"cs-seal-stamp",children:l.jsx("span",{children:"敬请期待"})})]}),l.jsxs("span",{className:"cs-eyebrow",children:[l.jsx("span",{className:"cs-stem"}),"Something new is on the way",l.jsx("span",{className:"cs-stem"})]}),l.jsx("h1",{className:"cs-title",children:"Coming Soon"}),l.jsx("p",{className:"cs-sub",children:"We're building the next chapter for IEEE ECU Student Branch. Follow along on our socials to catch the reveal first."}),l.jsx("div",{className:"cs-divider"})]})]})]})}function GS(){const{pathname:r}=ca(),a=Fy(),s=v.useRef(new Map);return v.useEffect(()=>{"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual")},[]),v.useEffect(()=>()=>{s.current.set(r,window.scrollY)},[r]),v.useEffect(()=>{if(a==="POP"){const i=s.current.get(r);if(i!=null){requestAnimationFrame(()=>{window.scrollTo(0,i)});return}}window.scrollTo(0,0)},[r,a]),null}function VS(){const a=ca().pathname.toLowerCase().replace(/\/$/,"")||"/",s=["/login","/signup"],i=["/login","/signup"];return l.jsxs(l.Fragment,{children:[l.jsx(GS,{}),!s.includes(a)&&l.jsx(Ck,{}),l.jsx("main",{style:{minHeight:"80vh"},children:l.jsxs(u2,{children:[l.jsx(Ht,{path:"/",element:l.jsx(Rk,{})}),l.jsx(Ht,{path:"/about",element:l.jsx(Xk,{})}),l.jsx(Ht,{path:"/login",element:l.jsx(o3,{})}),l.jsx(Ht,{path:"/reset-password",element:l.jsx(l3,{})}),l.jsx(Ht,{path:"/signup",element:l.jsx(Y3,{})}),l.jsx(Ht,{path:"/committees",element:l.jsx(Kg,{})}),l.jsx(Ht,{path:"/nontechnicalteam",element:l.jsx(e3,{})}),l.jsx(Ht,{path:"/technicalteam",element:l.jsx(i3,{})}),l.jsx(Ht,{path:"/heads",element:l.jsx(Xg,{})}),l.jsx(Ht,{path:"/contactus",element:l.jsx(Q3,{})}),l.jsx(Ht,{path:"/timeline",element:l.jsx(AS,{})}),l.jsx(Ht,{path:"/settings",element:l.jsx(DS,{})}),l.jsx(Ht,{path:"/ComingSoon",element:l.jsx(YS,{})}),l.jsx(Ht,{path:"/Membership",element:l.jsx(PS,{})}),l.jsx(Ht,{path:"/account",element:l.jsx(dS,{})})]})}),!i.includes(a)&&l.jsx(Tk,{})]})}function XS(){return l.jsx(M2,{basename:"/IEEE-ECU-SB-Website",children:l.jsx(uS,{children:l.jsx(VS,{})})})}(function(){var r=sessionStorage.redirect;delete sessionStorage.redirect,r&&r!==location.href&&history.replaceState(null,null,r)})();vy.createRoot(document.getElementById("root")).render(l.jsx(Au.StrictMode,{children:l.jsx(XS,{})}));
